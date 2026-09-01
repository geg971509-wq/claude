// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { PNt, tg, oPe } from "/$bunfs/root/chunk-zze8764r.js";
import { _s } from "/$bunfs/root/chunk-1mp2j0tx.js";
import { ty } from "/$bunfs/root/chunk-50g10fz0.js";
function Att(o) {
  return r(o, [...(ty() ? oPe() : []), ...(PNt() ? [tg] : [])]);
}
function YOn(o, e) {
  return r(
    o,
    [...(ty() ? oPe() : []), ...(PNt() && !a.CLAUDE_CODE_SIMPLE ? [tg] : [])].filter((t) => t.isEnabled() && !_s(e, t)),
  );
}
function r(o, e) {
  if (e.length === 0) return o;
  let t = new Set(o.map((i) => i.name)),
    n = e.filter((i) => !t.has(i.name));
  return n.length > 0 ? [...o, ...n] : o;
}
export { Att, YOn };
