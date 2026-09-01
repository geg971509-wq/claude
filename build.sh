#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUN_BIN="${BUN:-bun}"
OUTPUT="${1:-$ROOT/dist/claude}"

if [[ "$(uname -s)" != "Darwin" || "$(uname -m)" != "arm64" ]]; then
  echo "error: this source tree contains macOS arm64 native modules" >&2
  exit 1
fi

command -v "$BUN_BIN" >/dev/null 2>&1 || {
  echo "error: Bun is required (set BUN=/path/to/bun if needed)" >&2
  exit 1
}

for required in src/cli.js pathmap.json; do
  [[ -f "$ROOT/$required" ]] || {
    echo "error: missing $ROOT/$required" >&2
    exit 1
  }
done

mkdir -p "$(dirname "$OUTPUT")"
OUTPUT_DIR="$(cd "$(dirname "$OUTPUT")" && pwd)"
OUTPUT="$OUTPUT_DIR/$(basename "$OUTPUT")"

WORK="$(mktemp -d "${TMPDIR:-/tmp}/claude-build.XXXXXX")"
cleanup() {
  find "$WORK" -depth -delete 2>/dev/null || true
}
trap cleanup EXIT

STAGE="$WORK/stage"
mkdir -p "$STAGE"

cat > "$WORK/rebuild.mjs" <<'JS'
import fs from "node:fs";
import path from "node:path";

const [root, stage, outfile] = process.argv.slice(2);
const prefix = "/$bunfs/root/";
const rootResolved = path.resolve(root);
const map = JSON.parse(fs.readFileSync(path.join(rootResolved, "pathmap.json"), "utf8"));

function isZstd(file) {
  const fd = fs.openSync(file, "r");
  const magic = Buffer.alloc(4);
  const bytes = fs.readSync(fd, magic, 0, 4, 0);
  fs.closeSync(fd);
  return bytes === 4 && magic[0] === 0x28 && magic[1] === 0xb5 && magic[2] === 0x2f && magic[3] === 0xfd;
}

const executable = new Map();
const moduleMap = new Map();
const assets = [];
const textResources = new Map();

for (const [virtualPath, localPath] of Object.entries(map)) {
  if (virtualPath === `${prefix}cli`) continue;
  if (!virtualPath.startsWith(prefix)) throw new Error(`Unexpected virtual path: ${virtualPath}`);

  const rel = virtualPath.slice(prefix.length);
  if (!rel || rel.startsWith("/") || rel.split("/").includes("..")) {
    throw new Error(`Unsafe virtual path: ${virtualPath}`);
  }

  const src = path.resolve(rootResolved, localPath);
  if (!(src === rootResolved || src.startsWith(`${rootResolved}${path.sep}`))) {
    throw new Error(`Invalid mapped source: ${localPath}`);
  }

  if (!fs.existsSync(src)) {
    throw new Error(`Missing mapped source: ${localPath}`);
  }

  if (rel.endsWith(".js") && !isZstd(src)) {
    executable.set(rel, { file: src });
    moduleMap.set(rel, rel);
  } else {
    assets.push([rel, src]);
    if (rel.endsWith(".md") || rel.endsWith(".txt")) {
      textResources.set(rel, fs.readFileSync(src, "utf8"));
    }
  }
}

function relativeModule(from, to) {
  let rel = path.posix.relative(path.posix.dirname(from), to);
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel;
}

function rewrite(text, from) {
  return text
    .replace(/\bue\((["'])\/\$bunfs\/root\/([^"']+\.(?:md|txt))\1\)/g, (all, _quote, target) =>
      textResources.has(target) ? JSON.stringify(textResources.get(target)) : all,
    )
    .replace(/import\.meta\s*\.require\(\s*(["'])\/\$bunfs\/root\/([^"']+\.js)\1\s*,?\s*\)/g, (all, _quote, target) =>
      moduleMap.has(target) ? `require(${JSON.stringify(relativeModule(from, moduleMap.get(target)))})` : all,
    )
    .replace(/((?:from|import)\s*(?:\(\s*)?)(["'])\/\$bunfs\/root\/([^"']+\.js)\2/g, (all, head, quote, target) =>
      moduleMap.has(target) ? `${head}${quote}${relativeModule(from, moduleMap.get(target))}${quote}` : all,
    );
}

fs.mkdirSync(stage, { recursive: true });
const runtimeTargets = new Set();

function collectRuntimeTargets(text) {
  for (const match of text.matchAll(/["']\/\$bunfs\/root\/([^"']+\.js)["']/g)) {
    if (moduleMap.has(match[1])) runtimeTargets.add(moduleMap.get(match[1]));
  }
}

for (const [rel, source] of executable) {
  const dst = path.join(stage, ...rel.split("/"));
  const sourceText = fs.readFileSync(source.file, "utf8");
  const text = rewrite(sourceText, rel);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, text);
  collectRuntimeTargets(text);
}

for (const [rel, src] of assets) {
  const dst = path.join(stage, ...rel.split("/"));
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
}

const mainRel = "__main__.js";
const mainText = rewrite(fs.readFileSync(path.join(rootResolved, "src/cli.js"), "utf8"), mainRel);
fs.writeFileSync(path.join(stage, mainRel), mainText);
collectRuntimeTargets(mainText);

process.chdir(stage);
const scanDir = path.join(stage, ".scan");
fs.mkdirSync(scanDir, { recursive: true });

const guard = {
  name: "bunfs-js-guard",
  setup(builder) {
    builder.onResolve({ filter: /^\/\$bunfs\/root\/.*\.js$/ }, (args) => {
      throw new Error(`Unrewritten module import: ${args.path} from ${args.importer}`);
    });
  },
};

const runtimeEntrypoints = [...runtimeTargets].sort().map((rel) => path.join(stage, ...rel.split("/")));
let result = await Bun.build({
  entrypoints: [path.join(stage, mainRel), ...runtimeEntrypoints],
  root: stage,
  outdir: scanDir,
  target: "bun",
  format: "esm",
  treeShaking: false,
  splitting: false,
  naming: { entry: "[dir]/[name]-[hash].[ext]" },
  metafile: true,
  plugins: [guard],
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

const reached = new Set(
  Object.keys(result.metafile.inputs).map((input) =>
    path.relative(stage, path.resolve(stage, input)).split(path.sep).join("/"),
  ),
);
const unreachable = [...executable.keys()].filter((rel) => !reached.has(rel)).sort();
const entrypoints = [
  path.join(stage, mainRel),
  ...runtimeEntrypoints,
  ...unreachable.map((rel) => path.join(stage, ...rel.split("/"))),
];

result = await Bun.build({
  entrypoints,
  root: stage,
  target: "bun",
  format: "esm",
  treeShaking: false,
  compile: {
    outfile,
    assets: assets.map(([rel]) => `./${rel}`),
  },
  plugins: [guard],
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

console.log(
  `compiled ${executable.size} JS sources + ${assets.length} assets ` +
    `(${entrypoints.length} retained runtime entrypoints)`,
);
JS

"$BUN_BIN" "$WORK/rebuild.mjs" "$ROOT" "$STAGE" "$OUTPUT"
chmod 755 "$OUTPUT"
echo "built: $OUTPUT"
