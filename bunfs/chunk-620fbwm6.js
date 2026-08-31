// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Zm } from "/$bunfs/root/chunk-zze8764r.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { e } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { yn, We, F } from "/$bunfs/root/chunk-twm95mhz.js";
F();
var t = yn(void 0);
function Hge(f) {
  let i = _(3),
    { queue: o, children: u } = f,
    n;
  if (i[0] !== u || i[1] !== o) (n = e(t.Provider, { value: o, children: u })), (i[0] = u), (i[1] = o), (i[2] = n);
  else n = i[2];
  return n;
}
function Iu() {
  return We(t) ?? Zm();
}
export { Hge, Iu };
