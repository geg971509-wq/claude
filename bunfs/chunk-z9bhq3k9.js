// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, zu } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { fg, R$, Um, I, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { TP } from "/$bunfs/root/chunk-0pgyw7te.js";
import { $e } from "/$bunfs/root/chunk-2masxyqj.js";
import { Je } from "/$bunfs/root/chunk-988p40e0.js";
import { Sm } from "/$bunfs/root/chunk-amem41jf.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { spawnSync as h } from "child_process";
function C() {
  return {
    loggedTmuxCcDisable: !1,
    loggedWinSshDisable: !1,
    checkedTmuxMouseHint: !1,
    checkedTmuxFocusHint: !1,
    tmuxControlModeProbed: void 0,
    tmuxMouseOptionProbe: void 0,
    tmuxFocusOptionProbe: void 0,
    gbGateCached: void 0,
    gbGateSource: void 0,
    downsellGateCached: void 0,
    freshInstallCached: void 0,
    crashAutoOff: !1,
  };
}
var LI = C();
function f() {
  if (!a.TMUX) return !1;
  if (a.TERM_PROGRAM !== "iTerm.app") return !1;
  let e = a.TERM ?? "";
  return !e.startsWith("screen") && !e.startsWith("tmux");
}
function g(e) {
  if (((e.tmuxControlModeProbed = f()), e.tmuxControlModeProbed)) return;
  if (!a.TMUX) return;
  if (a.TERM_PROGRAM) return;
  let r = TP("tmux");
  if (r === null) return;
  let o;
  try {
    o = h(r, ["display-message", "-p", "#{client_control_mode}"], {
      encoding: "utf8",
      timeout: 2000,
      cwd: void 0,
      env: process.env,
      windowsHide: !0,
    });
  } catch {
    return;
  }
  if (o.status !== 0) return;
  e.tmuxControlModeProbed = o.stdout.trim() === "1";
}
function o3(e = LI) {
  if (e.tmuxControlModeProbed === void 0) g(e);
  return e.tmuxControlModeProbed ?? !1;
}
function u() {
  if (D() !== "windows") return !1;
  return Boolean(a.SSH_CONNECTION || a.SSH_CLIENT || a.SSH_TTY);
}
class c {
  latched = !1;
  mode = void 0;
  persisted = !1;
  upsellImpression = void 0;
  latchFromEnv() {
    if (this.latched) return;
    (this.latched = !0),
      (this.mode = a.CLAUDE_CODE_TUI_TRIAL === "fullscreen" ? "fullscreen" : void 0),
      a.unset("CLAUDE_CODE_TUI_TRIAL");
  }
}
var x = new J(() => new c());
function f_t() {
  return x.of(G().host);
}
function aJn() {
  f_t().latchFromEnv();
}
function XOe() {
  let e = f_t();
  return e.latchFromEnv(), e.mode;
}
function O5e() {
  return (
    ie().fullscreenAutoDisabled?.version ===
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.252",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-08-31T16:02:57Z",
      GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
      HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "darwin",
    }.VERSION
  );
}
function s() {
  return a.CLAUDE_CODE_NO_FLICKER === !1 || a.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN;
}
var YOe = 3;
function d() {
  try {
    if (R$()) return !1;
    let e = ie();
    return e.firstStartVersion !== void 0 && (e.fullscreenUpsellSeenCount ?? 0) < YOe;
  } catch {
    return;
  }
}
function S(e) {
  if (e.freshInstallCached !== void 0) return e.freshInstallCached;
  let r = d();
  if (r !== void 0) e.freshInstallCached = r;
  return r ?? !1;
}
function Nt(e = LI) {
  if (Sm() === "local-agent") return !1;
  if (a.CLAUDE_CODE_SESSION_KIND === "bg") return !0;
  if (fg()) return !1;
  if (s()) return !1;
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff) return !1;
  if (o3(e)) {
    if (!e.loggedTmuxCcDisable)
      (e.loggedTmuxCcDisable = !0),
        n(
          "fullscreen disabled: tmux -CC (iTerm2 integration mode) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override",
        );
    return !1;
  }
  if (u()) {
    if (!e.loggedWinSshDisable)
      (e.loggedWinSshDisable = !0),
        n(
          "fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override",
        );
    return !1;
  }
  switch (Je().tui ?? XOe()) {
    case "fullscreen":
      return !0;
    case "default":
      return !1;
  }
  if (S(e)) return !0;
  if (p(e)) return !0;
  if (e.gbGateCached === void 0) {
    let r = Um("tengu_pewter_brook", !1);
    (e.gbGateCached = r.value), (e.gbGateSource = r.source);
  }
  return e.gbGateCached;
}
function p(e = LI) {
  return (e.downsellGateCached ??= I("tengu_amber_creek", !1)), e.downsellGateCached;
}
function ITe(e = LI) {
  if (fg()) return !1;
  if (s()) return !1;
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff || O5e()) return !1;
  if (u()) return !1;
  if (o3(e)) return !1;
  switch (Je().tui) {
    case "fullscreen":
      return !0;
    case "default":
      return !1;
  }
  return !0;
}
function qv(e = LI) {
  if (a.CLAUDE_CODE_SESSION_KIND === "bg") return "bg_forced_on";
  if (fg()) return "sr_auto_off";
  if (s()) return "env_off";
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return "env_on";
  if (e.crashAutoOff) return "crash_auto_off";
  if (o3(e)) return "tmux_cc_auto_off";
  if (u()) return "win_ssh_auto_off";
  let r = Je().tui;
  switch (r ?? XOe()) {
    case "fullscreen":
      return r === "fullscreen" ? "settings_on" : "upsell_trial_on";
    case "default":
      return "settings_off";
  }
  if (e.freshInstallCached ?? d()) return "fresh_install_on";
  if (e.downsellGateCached ?? I("tengu_amber_creek", !1)) return "downsell_on";
  return (e.gbGateCached ?? I("tengu_pewter_brook", !1)) ? "gb_on" : "gb_off";
}
function m_t(e) {
  switch (e) {
    case "env_on":
    case "bg_forced_on":
    case "settings_on":
    case "upsell_trial_on":
    case "ant_default":
    case "fresh_install_on":
    case "downsell_on":
    case "gb_on":
      return "fullscreen";
    case "env_off":
    case "sr_auto_off":
    case "crash_auto_off":
    case "tmux_cc_auto_off":
    case "win_ssh_auto_off":
    case "settings_off":
    case "gb_off":
      return "default";
  }
}
function g_t(e) {
  return e === "env_off" || e === "sr_auto_off" || e === "tmux_cc_auto_off" || e === "win_ssh_auto_off";
}
function lJn(e = LI) {
  return R$() && e.gbGateSource === "fallback";
}
function cJn() {
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return "on";
  if (a.CLAUDE_CODE_NO_FLICKER === !1) return "off";
  return;
}
function Mk() {
  if (a.CLAUDE_CODE_DISABLE_MOUSE !== void 0) return a.CLAUDE_CODE_DISABLE_MOUSE ? "off" : "full";
  if (a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS !== void 0) return a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS ? "scroll" : "full";
  return "full";
}
class _ {
  observed = !1;
  changed = Ue();
  subscribe = this.changed.subscribe;
  get hasObserved() {
    return this.observed;
  }
  note() {
    if (this.observed) return;
    (this.observed = !0), this.changed.emit();
  }
}
var i = new J(() => new _());
function Wgn() {
  i.of(G().host).note();
}
function L5e() {
  return i.of(G().host).hasObserved;
}
function M5e(e) {
  return i.of(G().host).subscribe(e);
}
function zy(e = LI) {
  return zu() && Nt(e);
}
async function uJn(e = LI) {
  if (!a.TMUX) return null;
  if (!zy(e) || o3(e)) return null;
  if (e.checkedTmuxMouseHint) return null;
  e.checkedTmuxMouseHint = !0;
  let r = await t(e, "mouse");
  if (r === null || r === "on") return null;
  return "tmux detected \xB7 scroll with PgUp/PgDn \xB7 or add 'set -g mouse on' to ~/.tmux.conf for wheel scroll";
}
var T = {
  mouse: { cacheKey: "tmuxMouseOptionProbe", args: ["show", "-Av", "mouse"] },
  "focus-events": { cacheKey: "tmuxFocusOptionProbe", args: ["show", "-gv", "focus-events"] },
};
function t(e, r) {
  let { cacheKey: o, args: m } = T[r];
  return (
    (e[o] ??= $e("tmux", [...m], { useCwd: !1, timeout: 2000 }).then(({ stdout: b, code: E }) =>
      E === 0 ? b.trim() : null,
    )),
    e[o]
  );
}
function dJn(e = LI) {
  if (!a.TMUX || f()) return;
  t(e, "mouse"), t(e, "focus-events");
}
async function pJn(e = LI) {
  if (!a.TMUX) return null;
  if (o3(e)) return null;
  if (e.checkedTmuxFocusHint) return null;
  e.checkedTmuxFocusHint = !0;
  let r = await t(e, "focus-events");
  if (r === null || r === "on") return null;
  return "tmux focus-events off \xB7 add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking";
}
export { LI, o3, f_t, aJn, XOe, O5e, YOe, Nt, ITe, qv, m_t, g_t, lJn, cJn, Mk, Wgn, L5e, M5e, zy, uJn, dJn, pJn };
