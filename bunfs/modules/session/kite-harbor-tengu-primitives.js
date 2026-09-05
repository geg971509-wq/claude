// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Me } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
function Yo() {
  let e = a.CLAUDE_CODE_HARBOR_KITE;
  if (e !== void 0) return Me(e);
  if (D() === "windows" && !I("tengu_harbor_kite_win", true)) return false;
  return I("tengu_harbor_kite", true);
}
function j5e() {
  return I("tengu_cuddly_willow", true);
}
var W5e = "Cross-session messaging is not available in this session.";
export { Yo, j5e, W5e };
