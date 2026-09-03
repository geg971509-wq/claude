#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(repositoryRoot, relativePath), "utf8"));
}

function resolveRepositoryPath(relativePath) {
  const absolutePath = path.resolve(repositoryRoot, relativePath);
  assert.ok(
    absolutePath === repositoryRoot || absolutePath.startsWith(`${repositoryRoot}${path.sep}`),
    `path escapes the repository: ${relativePath}`,
  );
  return absolutePath;
}

const opaquePathComponentPatterns = [
  /^chunk-[a-z0-9]+(?:\.js)?$/,
  /^(?:module|functions)-\d+\.js$/,
  /^core\.js$/,
];

function hasOpaquePathComponent(relativePath) {
  return relativePath.split(/[\\/]/).some((component) =>
    opaquePathComponentPatterns.some((pattern) => pattern.test(component)),
  );
}

const pathMap = readJson("pathmap.json");
const semanticPaths = readJson("semantic-paths.json");
const destinations = new Set();

for (const [virtualPath, semanticPath] of Object.entries(semanticPaths)) {
  assert.ok(Object.hasOwn(pathMap, virtualPath), `semantic override has no pathmap entry: ${virtualPath}`);
  assert.ok(virtualPath.startsWith("/$bunfs/root/"), `unexpected virtual path: ${virtualPath}`);
  assert.ok(!hasOpaquePathComponent(semanticPath), `opaque semantic destination: ${semanticPath}`);
  assert.ok(!destinations.has(semanticPath), `duplicate semantic destination: ${semanticPath}`);
  destinations.add(semanticPath);
  assert.ok(fs.statSync(resolveRepositoryPath(semanticPath)).isFile(), `missing semantic source: ${semanticPath}`);
}

let unresolvedOpaqueSources = 0;
for (const [virtualPath, extractedPath] of Object.entries(pathMap)) {
  if (virtualPath === "/$bunfs/root/cli") continue;
  const effectivePath = semanticPaths[virtualPath] ?? extractedPath;
  assert.ok(fs.existsSync(resolveRepositoryPath(effectivePath)), `missing mapped source: ${effectivePath}`);
  if (hasOpaquePathComponent(effectivePath)) unresolvedOpaqueSources++;
}

assert.ok(!fs.existsSync(path.join(repositoryRoot, ".DS_Store")), "root .DS_Store must not be tracked");
assert.ok(!fs.existsSync(path.join(repositoryRoot, "vendor", ".DS_Store")), "vendor .DS_Store must not be tracked");

const argumentParser = await import(
  pathToFileURL(path.join(repositoryRoot, "bunfs/modules/cli/argument-parser.js")).href
);
assert.equal(argumentParser.XCt, argumentParser.parseAgentViewArguments);
assert.equal(argumentParser.xve, argumentParser.resolveDispatchConfigPaths);
assert.equal(argumentParser.Ive, argumentParser.buildDispatchExtraArgs);
assert.equal(argumentParser.acr, argumentParser.extractDaemonArguments);
assert.equal(argumentParser.YCt, argumentParser.validateHandleUriArguments);

const parsed = argumentParser.parseAgentViewArguments([
  "agents",
  "--cwd",
  "workspace",
  "--plugin-dir=plugins",
  "--restricted",
  "prompt",
]);
assert.deepEqual(parsed, {
  hasAgentsPositional: true,
  cwdFilter: "workspace",
  config: {
    addDir: [],
    pluginDir: ["plugins"],
    pluginDirNoMcp: [],
    settings: undefined,
    mcpConfig: [],
    strictMcpConfig: false,
    restricted: true,
  },
  rest: ["prompt"],
});
assert.deepEqual(argumentParser.extractDaemonArguments(["--allow-dangerously-skip-permissions", "daemon", "start"]), [
  "start",
]);
assert.match(
  argumentParser.validateHandleUriArguments(["claude", "--handle-uri", "claude://open", "unexpected"]),
  /unexpected arguments after the URI/,
);

const versionSuffix = await import(
  pathToFileURL(path.join(repositoryRoot, "bunfs/modules/cli/version-suffix.js")).href
);
assert.equal(versionSuffix.k0, versionSuffix.getVersionSuffixForBuildRef);
assert.equal(versionSuffix.getVersionSuffixForBuildRef(), "");

const agentIdentity = await import(
  pathToFileURL(path.join(repositoryRoot, "bunfs/modules/runtime/agent-identity.js")).href
);
assert.equal(agentIdentity.Ka, agentIdentity.getClaudeCodeUserAgent);
assert.equal(agentIdentity.Cg, agentIdentity.getEntrypointEventSource);
assert.equal(agentIdentity.Kxn, agentIdentity.formatAiAgentIdentifier);
assert.equal(agentIdentity.JCt, agentIdentity.initializeAiAgentEnvironment);
assert.equal(agentIdentity.getClaudeCodeUserAgent(), "claude-code/2.1.252");

const originalAiAgent = process.env.AI_AGENT;
try {
  delete process.env.AI_AGENT;
  agentIdentity.initializeAiAgentEnvironment();
  assert.equal(process.env.AI_AGENT, "claude-code_2-1-252_harness");

  process.env.AI_AGENT = "external-agent";
  agentIdentity.initializeAiAgentEnvironment();
  assert.equal(process.env.AI_AGENT, "external-agent");
} finally {
  if (originalAiAgent === undefined) delete process.env.AI_AGENT;
  else process.env.AI_AGENT = originalAiAgent;
}

const cliSource = fs.readFileSync(path.join(repositoryRoot, "src/cli.js"), "utf8");
for (const semanticName of [
  "getWorkingDirectoryError",
  "hasOnlyDebugFlags",
  "extractDispatchDefaults",
  "runCliEntry",
]) {
  assert.match(cliSource, new RegExp(`function ${semanticName}\\b`), `missing semantic CLI function: ${semanticName}`);
}
for (const generatedName of ["Z", "tt", "Dt", "At"]) {
  assert.doesNotMatch(cliSource, new RegExp(`function ${generatedName}\\b`), `generated CLI function remains: ${generatedName}`);
}

console.log(
  `validated ${Object.keys(semanticPaths).length} semantic source paths and compatibility aliases; ` +
    `${unresolvedOpaqueSources} opaque physical source paths remain to migrate`,
);
