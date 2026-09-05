// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J } from "/$bunfs/root/chunk-f9h0bg01.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { y } from "/$bunfs/root/chunk-ca80fke8.js";
import { Ae, ie, ci, jc } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { ee } from "/$bunfs/root/chunk-4fwj3vnx.js";
import { a4 } from "/$bunfs/root/chunk-rgw52f13.js";
import { Nt } from "/$bunfs/root/chunk-z9bhq3k9.js";
import { rM } from "/$bunfs/root/chunk-zze8764r.js";
class p {
  lastLoggedSessionId = null;
  autoOpenPending = false;
}
var hBe = new J(() => new p());
var bQ = 110,
  Zkt = 144,
  e0t = "The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository";
function t0t(e) {
  hBe.of(e).autoOpenPending = true;
}
function W7t(e) {
  let t = hBe.of(e),
    o = t.autoOpenPending;
  return (t.autoOpenPending = false), o;
}
function $Ln(e) {
  hBe.of(e).autoOpenPending = false;
}
function jRe() {
  return a4(ee()) !== null;
}
function n0t({ columns: e, isThinClient: t, isMainFocused: o, hasGitRepo: n }) {
  return rM() && Nt() && !t && o && e >= bQ && n;
}
function r0t(e) {
  let t = ie().diffSidebarOpen;
  if (t === false) return false;
  return e >= (t === true ? bQ : Zkt) && jRe();
}
function o0t(e, t, o, n) {
  let r = o === "diff" ? "convo" : "diff";
  $Ln(e), t((i) => (i.replTab === r && i.panelFileView === null ? i : { ...i, replTab: r, panelFileView: null }));
  let f = r === "diff";
  if (ie().diffSidebarOpen !== f) Ae((i) => ({ ...i, diffSidebarOpen: f }), n);
  return y("repl_tab_switch", { tab: c(r) }), r;
}
function wQ(e, t) {
  $Ln(e),
    t((o) => (o.replTab === "convo" && o.panelFileView === null ? o : { ...o, replTab: "convo", panelFileView: null }));
}
function q7t(e, t, o) {
  if ((wQ(e, t), ie().diffSidebarOpen !== false)) Ae((n) => ({ ...n, diffSidebarOpen: false }), o);
  y("repl_tab_switch", { tab: c("convo") });
}
var a = ["session", "uncommitted", "branch"];
function G7t() {
  let e = ci().diffSidebarBaseMode;
  return e === "uncommitted" || e === "branch" ? e : "session";
}
function z7t(e, t) {
  let o = a[(a.indexOf(e) + 1) % a.length] ?? "session";
  return (
    jc((n) => (n.diffSidebarBaseMode === o ? n : { ...n, diffSidebarBaseMode: o }), t),
    y("repl_diff_base_switch", { mode: c(o) }),
    o
  );
}
export { hBe, bQ, Zkt, e0t, t0t, W7t, $Ln, jRe, n0t, r0t, o0t, wQ, q7t, G7t, z7t };
