# Source naming conventions

This repository reconstructs a Bun standalone executable. Two different path namespaces therefore exist:

- `/$bunfs/root/...` paths are immutable identifiers embedded in the original executable. They remain unchanged so imports and runtime resource lookup keep their original behavior.
- Repository paths are maintenance-oriented source locations. Maintained modules live under `bunfs/modules/<area>/...` and use names derived from their component and responsibility.

`pathmap.json` records the original extracted mapping. `semantic-paths.json` overrides only the repository-side location while preserving the original Bun virtual path. `build.sh` applies those overrides before reconstructing the virtual Bun filesystem.

## Rules

1. Do not rename a virtual `/$bunfs/root/...` key unless the executable format itself changes.
2. Physical repository paths must describe the component and responsibility. `chunk-*`, numbered `module-*` / `functions-*`, and generic split names such as `core.js` are migration placeholders, not acceptable final maintenance names.
3. Add a semantic override only when the module purpose is supported by exports, implementation strings, or call sites. Do not replace an opaque name with a guessed semantic name.
4. Prefer cohesive paths such as `bunfs/modules/<area>/<component>/<responsibility>.js`; split large bundles by actual responsibility rather than arbitrary size or sequence numbers.
5. Preserve generated export aliases when other extracted modules may still import them. New and maintained code should use semantic export names.
6. Run `node scripts/check-semantic-names.mjs` after changing source layout or semantic aliases.

Opaque extracted paths that have not yet been classified are temporary migration debt. They may remain only while their responsibility is being established; the repository should continuously reduce them until no maintained physical source path uses generated placeholder naming.
