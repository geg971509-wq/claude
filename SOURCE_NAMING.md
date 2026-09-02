# Source naming conventions

This repository reconstructs a Bun standalone executable. Two different path namespaces therefore exist:

- `/$bunfs/root/...` paths are immutable identifiers embedded in the original executable. They remain unchanged so imports and runtime resource lookup keep their original behavior.
- Repository paths are maintenance-oriented source locations. High-confidence modules live under `bunfs/modules/<area>/...` and use names derived from their exported behavior.

`pathmap.json` records the original extracted mapping. `semantic-paths.json` overrides only the repository-side location for modules whose purpose is known. `build.sh` applies those overrides before reconstructing the virtual Bun filesystem.

## Rules

1. Do not rename a virtual `/$bunfs/root/...` key unless the executable format itself changes.
2. Add a semantic override only when the module purpose is supported by its exports or call sites.
3. Prefer `bunfs/modules/<area>/<responsibility>.js` over generated `chunk-*.js` names.
4. Preserve generated export aliases when other extracted modules may still import them. New and maintained code should use the semantic export names.
5. Run `node scripts/check-semantic-names.mjs` after changing the source layout or semantic aliases.

Opaque modules remain under their extracted names until their responsibility can be identified without guessing.
