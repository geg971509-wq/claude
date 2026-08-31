// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { t } from "/$bunfs/root/chunk-he2phymk.js";
import { Be } from "/$bunfs/root/chunk-ek4tmwbt.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
function s1(P) {
  let c = _(4),
    { message: p, onCancel: m } = P,
    i;
  if (c[0] === d) (i = { context: "Settings" }), (c[0] = i);
  else i = c[0];
  Be("confirm:no", m, i), Be("app:interrupt", m);
  let n;
  if (c[1] === d) (n = e(M, { chord: "escape", action: "cancel", parens: !0 })), (c[1] = n);
  else n = c[1];
  let s;
  if (c[2] !== p) (s = r(t, { dimColor: !0, children: [p, " ", n] })), (c[2] = p), (c[3] = s);
  else s = c[3];
  return s;
}
export { s1 };
