// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { t } from "/$bunfs/root/chunk-he2phymk.js";
import { r } from "/$bunfs/root/chunk-8s7kcbyw.js";
function Dc(R) {
  let u = _(7),
    { children: d, color: e, textColor: k, padded: x, bold: l, wrap: s } = R,
    o = x ? " " : "";
  const m = k ?? (e ? "inverseText" : void 0);
  let h;
  if (u[0] !== l || u[1] !== d || u[2] !== e || u[3] !== o || u[4] !== m || u[5] !== s)
    (h = r(t, { backgroundColor: e, color: m, bold: l, wrap: s, children: [o, d, o] })),
      (u[0] = l),
      (u[1] = d),
      (u[2] = e),
      (u[3] = o),
      (u[4] = m),
      (u[5] = s),
      (u[6] = h);
  else h = u[6];
  return h;
}
export { Dc };
