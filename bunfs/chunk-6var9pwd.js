// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { C0 } from "/$bunfs/root/chunk-f9h0bg01.js";
import { I, OH } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { lS, lXe } from "/$bunfs/root/chunk-ejdwrhgv.js";
import { nue, Bpn } from "/$bunfs/root/chunk-a9vrr0nr.js";
var t = 300000;
function Zmt() {
  return a.CLAUDE_CODE_BRIEF || OH("tengu_kairos_brief", !1, t);
}
function LCr(e) {
  if (!e.includes(lS) && !e.includes(lXe)) return !1;
  if (nue()) return !1;
  return Zmt();
}
function mwe() {
  return (C0() && Zmt()) || Bpn();
}
var r = `In brief mode, plain assistant text is hidden from the user \u2014 only ${lS} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;
function MCr() {
  let e = I("tengu_kairos_brief_stop_hook_text", "");
  return typeof e === "string" && e.length > 0 ? e : r;
}
export { Zmt, LCr, mwe, MCr };
