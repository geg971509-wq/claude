// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { K, Se, gn, Cl } from "/$bunfs/root/chunk-f9h0bg01.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { $e } from "/$bunfs/root/chunk-2masxyqj.js";
import { AE } from "/$bunfs/root/chunk-zze8764r.js";
import { z$ } from "/$bunfs/root/chunk-2mmw62jx.js";
import { Lo } from "/$bunfs/root/chunk-5c5qq1s7.js";
import { j } from "/$bunfs/root/chunk-yz031c9r.js";
async function ev(t, e, { storageV5: i, credentials: o } = {}) {
  let r = Lo("preferredNotifChannel", "auto").value;
  await AE({ id: K(), project: { originalCwd: Se(), projectRoot: gn() } }, t, { storageV5: i, credentials: o });
  let l = await u(r, t, e);
  if (l === "error") p("notification_show", "send_failed");
  else y("notification_show");
  s("tengu_notification_method_used", {
    configured_channel: c(z$.includes(r) ? r : "invalid"),
    notification_type: c(t.notificationType),
    method_used: c(l),
    term: a.terminal,
    attacher_term: Cl()?.terminal ?? null,
  });
}
var f = "Claude Code";
async function u(t, e, i) {
  if (t === "auto") {
    let r = await _();
    return m(r, e, i), r;
  }
  let o;
  switch (t) {
    case "iterm2":
    case "iterm2_with_bell":
    case "kitty":
    case "ghostty":
    case "terminal_bell":
      o = t;
      break;
    case "notifications_disabled":
      o = "disabled";
      break;
    default:
      o = "none";
  }
  try {
    return m(o, e, i), o;
  } catch {
    return "error";
  }
}
async function _() {
  switch (Cl()?.terminal ?? a.terminal) {
    case "Apple_Terminal":
      return (await T()) ? "terminal_bell" : "no_method_available";
    case "iTerm.app":
      return "iterm2";
    case "kitty":
      return "kitty";
    case "ghostty":
      return "ghostty";
    default:
      return "no_method_available";
  }
}
function m(t, e, i) {
  switch (t) {
    case "iterm2":
      i.notifyITerm2(e);
      return;
    case "iterm2_with_bell":
      i.notifyITerm2(e), i.notifyBell();
      return;
    case "kitty":
      i.notifyKitty({ ...e, title: e.title || f, id: g() });
      return;
    case "ghostty":
      i.notifyGhostty({ ...e, title: e.title || f });
      return;
    case "terminal_bell":
      i.notifyBell();
      return;
    case "disabled":
    case "none":
    case "no_method_available":
      return;
  }
}
function g() {
  return Math.floor(Math.random() * 1e4);
}
async function T() {
  try {
    let e = (
      await $e("osascript", ["-e", 'tell application "Terminal" to name of current settings of front window'])
    ).stdout.trim();
    if (!e) return false;
    let i = await $e("defaults", ["export", "com.apple.Terminal", "-"]);
    if (i.code !== 0) return false;
    let d = (await import("/$bunfs/root/chunk-b97kh80q.js").then((m) => j(m.default, 1))).parse(i.stdout)?.[
      "Window Settings"
    ]?.[e];
    if (!d) return false;
    return d.Bell === false;
  } catch (t) {
    return (
      n(`Failed to read Apple Terminal bell setting: ${t instanceof Error ? t.message : String(t)}`, {
        level: "error",
      }),
      false
    );
  }
}
export { ev };
