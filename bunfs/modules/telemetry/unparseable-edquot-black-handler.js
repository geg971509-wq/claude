// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { t } from "/$bunfs/root/chunk-he2phymk.js";
import { e } from "/$bunfs/root/chunk-8s7kcbyw.js";
function Br(u) {
  let n = _(4),
    { error: o } = u;
  if (!o) {
    return null;
  }
  let r;
  if (n[0] !== o) (r = l(o)), (n[0] = o), (n[1] = r);
  else r = n[1];
  let f;
  if (n[2] !== r) (f = e(t, { color: "error", children: r })), (n[2] = r), (n[3] = f);
  else f = n[3];
  return f;
}
export { Br };
