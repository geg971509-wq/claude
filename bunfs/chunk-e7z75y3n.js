// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { K, Ag } from "/$bunfs/root/chunk-f9h0bg01.js";
import { k } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { ir, $t } from "/$bunfs/root/chunk-2rx5nghb.js";
import { PZ } from "/$bunfs/root/chunk-1eqdma2n.js";
import { Zg, MIe, Zf, ndt, nF, Qye } from "/$bunfs/root/chunk-zze8764r.js";
import { HI, IOe, ry } from "/$bunfs/root/chunk-avrc9gay.js";
import { cDe } from "/$bunfs/root/chunk-wn1jrcrk.js";
import { MQ } from "/$bunfs/root/chunk-jrgq7wk9.js";
import { _he, eZ, j$n } from "/$bunfs/root/chunk-qvvgsfrp.js";
import { Q, te } from "/$bunfs/root/chunk-wag5ye9w.js";
function BK() {
  return !a.CLAUDE_DISABLE_ADOPT;
}
var c = 50;
function l(e) {
  let o = [];
  for (let n of Ag()) {
    if (e && !e(n)) continue;
    o.push({ label: "scheduled task", detail: `${b(n)} \xB7 ${ir(n.prompt, c, !0)}` });
  }
  return o;
}
function b(e) {
  if (e.recurring) return ry(e.cron);
  let o = HI(e.cron),
    n = o && IOe(o, new Date(e.createdAt));
  if (!n) return ry(e.cron);
  let t = Math.max(0, n.getTime() - Date.now());
  return `Runs once in ${$t(t, { mostSignificantOnly: !0 })}`;
}
function SNn(e, { includeDream: o = !1 } = {}) {
  let n = [];
  for (let t of Object.values(e)) {
    if (!Zf(t) || t.type === "remote_agent") continue;
    if (!o && t.type === "dream") continue;
    if (t.type === "monitor_ws" && t.ambient) continue;
    if (ndt(t)) continue;
    n.push({ label: MIe[t.type], detail: ir(t.description, c, !0) });
  }
  return n.push(...l()), n;
}
var S = { agent: "subagent", workflow: "workflow", shell: "shell", monitor: "monitor", mcp: "MCP task" };
function bNn() {
  let { items: e, kinds: o } = cDe(),
    n = [];
  for (let t of e) {
    if (t.kind === "todo" || t.doneAt !== void 0) continue;
    n.push({ label: S[t.kind], detail: ir(t.label, c, !0) });
  }
  if (o.includes("auto_mode_scan"))
    n.push({ label: MIe.auto_mode_scan, detail: "environment scan for /auto-mode-setup" });
  return n.push(...l()), n;
}
function T(e) {
  return e.type === "monitor_ws" && e.ambient === !0 && !nF(e);
}
function d(e) {
  return Object.values(e)
    .filter(Zf)
    .filter((o) => o.type !== "remote_agent" && o.type !== "dream")
    .filter((o) => !T(o));
}
function I(e) {
  if (e.status !== "running" && e.status !== "pending") return !1;
  if (e.type === "remote_agent" || e.type === "dream") return !1;
  if (e.type === "mcp_task" && e.abortController === void 0) {
    if (e.protocol === "sep2663") {
      if (e.parked === !0) return !1;
      return e.sidecarSessionId !== K() || e.sidecarProjectDir !== PZ();
    }
    return !1;
  }
  if (e.type === "monitor_ws" && e.ambient === !0) return p(e);
  return !0;
}
function m(e) {
  return nF(e) && e.frameLive !== void 0;
}
function kHt() {
  return BK() && !a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF;
}
function p(e) {
  return nF(e) && Qye(e);
}
function VYt(e) {
  return Object.values(e).some(p) || f();
}
function f() {
  return j$n() || eZ().size > 0;
}
function Wge(e, o) {
  let n = o?.autoRepliesCarried === !0,
    t = Object.values(e).filter((i) => I(i) && !(n && m(i)));
  if (t.length === 0) return !n && f() ? { kind: "comment_monitor", activeTasks: !1 } : void 0;
  return { kind: t.every(nF) ? "comment_monitor" : "tasks", activeTasks: !0 };
}
function rv(e) {
  let o = d(e),
    n = Ag().length,
    t = te(o.map(g)),
    i = new Set(o.flatMap((r) => (m(r) ? [r.frameLive.slug] : []))),
    s = !BK() ? 0 : Q(te([..._he(), ...eZ()]), (r) => !i.has(r));
  if (s > 0 && !t.includes("monitor_ws")) t.push("monitor_ws");
  let u = kHt() ? i.size + s : 0;
  if (n > 0) t.push("session_cron");
  let h = Q(
    Object.values(e),
    (r) => r.type === "local_agent" && r.status === "running" && !r.isBackgrounded && r.parentAgentId === void 0,
  );
  return { count: o.length + n + s, restartableCount: h, kinds: t, drainableMonitors: u, carriedMonitors: i.size + s };
}
function g(e) {
  return Zg(e) && e.kind === "monitor" ? "monitor" : e.type;
}
function LQ(e, o) {
  let n = d(e),
    t = l(o?.cronFilter),
    i = n.length + t.length,
    s = te(n.map(g));
  if (t.length > 0) s.push("session_cron");
  let u = [MQ(n), t.length ? `${t.length} ${k(t.length, "loop")}` : ""];
  return { count: i, kinds: s, summary: u.filter(Boolean).join(", ") };
}
function wNn() {
  let { tasks: e } = cDe();
  if (e === 0) return;
  return `Detached \u2014 ${e} ${k(e, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}
export { BK, SNn, bNn, kHt, VYt, Wge, rv, LQ, wNn };
