// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _xn, yxn } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c, ke } from "/$bunfs/root/chunk-4xj01xwv.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { xzt } from "/$bunfs/root/chunk-8qsdea2c.js";
function n() {
  let e = yxn(),
    o = e === void 0 ? xzt() : void 0,
    [r, i] =
      e !== void 0
        ? [Math.max(0, Date.now() - e), "session_switch"]
        : o !== void 0
          ? [Math.max(0, Date.now() - o), "spawn_stamp"]
          : [Math.round(process.uptime() * 1000), "process_start"];
  return { msSinceSessionStart: r, startAnchor: c(i), isRemoteSession: Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) };
}
function t(e) {
  let o = _xn();
  if (o.has(e)) return !1;
  return o.add(e), !0;
}
function Zat(e, o) {
  if (e === 0 || !t("tools_added")) return;
  s("tengu_chrome_tools_added", { ...n(), toolCount: e, discoverySource: c(o) });
}
function G6n(e) {
  if (!t("bridge_connected")) return;
  s("tengu_chrome_bridge_connected", { ...n(), bridgeStatus: ke(e) });
}
function z6n() {
  if (!t("extension_connected")) return;
  s("tengu_chrome_extension_connected", n());
}
function V6n(e) {
  s("tengu_chrome_tool_call_disconnected", { ...n(), tokenAccountMismatch: e });
}
export { Zat, G6n, z6n, V6n };
