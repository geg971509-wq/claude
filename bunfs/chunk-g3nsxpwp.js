// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { o, t, md } from "/$bunfs/root/chunk-he2phymk.js";
import { gx } from "/$bunfs/root/chunk-qsfnyrge.js";
import { e } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { rK } from "/$bunfs/root/chunk-wag5ye9w.js";
function SQ({ hunks: i, dim: f, width: n, filePath: m, firstLine: c, fileContent: p }) {
  return rK(
    i.map((r) =>
      e(
        o,
        {
          flexDirection: "column",
          children: e(gx, { patch: r, dim: f, width: n, filePath: m, firstLine: c, fileContent: p }),
        },
        r.newStart,
      ),
    ),
    (r) => e(md, { fromLeftEdge: !0, children: e(t, { dimColor: !0, children: "..." }) }, `ellipsis-${r}`),
  );
}
export { SQ };
