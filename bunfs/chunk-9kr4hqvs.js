// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { El, Yl } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Mt } from "/$bunfs/root/chunk-fs02hzwy.js";
function Sze(e) {
  return (e.voice?.enabled ?? e.voiceEnabled) === !0;
}
function X5n(e) {
  return e.voice?.enabled !== void 0 || e.voiceEnabled !== void 0;
}
function m2t() {
  try {
    if (!El()) return !1;
    return Yl();
  } catch {
    return !1;
  }
}
function g2t() {
  return Mt("allow_voice_mode");
}
function swe() {
  return m2t() && g2t();
}
export { Sze, X5n, m2t, g2t, swe };
