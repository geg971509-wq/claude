// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, zu } from "/$bunfs/root/chunk-f9h0bg01.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { AsyncLocalStorage as C } from "async_hooks";
var u = new C();
function iS() {
  return u.getStore();
}
function Qnr(e, t) {
  return u.run(e, t);
}
function cN() {
  return u.getStore() !== void 0;
}
function Znr(e) {
  return { ...e, isInProcess: !0 };
}
import { spawnSync as p } from "child_process";
function nb() {
  let e = iS();
  if (e) return e.parentSessionId;
  let t = n();
  return t.dynamicTeamContext?.parentSessionId ?? t.cliParentSessionId;
}
class g {
  cliParentSessionId = void 0;
  dynamicTeamContext = null;
  isChildSessionMarkerAmbientInTmux = f(x);
  setCliParentSessionId(e) {
    this.cliParentSessionId = e;
  }
  setDynamicTeamContext(e) {
    this.dynamicTeamContext = e;
  }
  setAmbientMarkerProbe(e) {
    this.isChildSessionMarkerAmbientInTmux = f(e);
  }
}
var WSr = new J(() => new g());
function n() {
  return WSr.of(G().host);
}
function Bkr(e) {
  n().setCliParentSessionId(e);
}
function jkr(e) {
  n().setDynamicTeamContext(e);
}
function Wkr() {
  n().setDynamicTeamContext(null);
}
function QV() {
  return n().dynamicTeamContext;
}
function rb() {
  let e = iS();
  if (e) return e.agentId;
  return n().dynamicTeamContext?.agentId;
}
function gf() {
  let e = iS();
  if (e) return e.agentName;
  return n().dynamicTeamContext?.agentName;
}
function ds(e) {
  let t = iS();
  if (t) return t.teamName;
  let { dynamicTeamContext: o } = n();
  if (o?.teamName) return o.teamName;
  return e?.teamName;
}
function na() {
  if (iS()) return !0;
  return qSr();
}
function qSr() {
  let { dynamicTeamContext: e } = n();
  return !!(e?.agentId && e?.teamName);
}
function sP(e) {
  return e !== void 0 || na() || a.CLAUDE_CODE_CHILD_SESSION;
}
function bpe() {
  if (a.CLAUDE_CODE_FORCE_SESSION_PERSISTENCE) return !1;
  if (!(a.CLAUDE_CODE_CHILD_SESSION && zu() && !na())) return !1;
  return !n().isChildSessionMarkerAmbientInTmux();
}
function qkr(e) {
  n().setAmbientMarkerProbe(e ?? x);
}
function f(e) {
  let t = null;
  return () => {
    if (t === null)
      try {
        t = e();
      } catch {
        t = !1;
      }
    return t;
  };
}
function x() {
  if (!a.TMUX) return !1;
  let e;
  try {
    e = p("tmux", ["show-environment", "-g", "CLAUDE_CODE_CHILD_SESSION"], {
      encoding: "utf8",
      timeout: 250,
      stdio: ["ignore", "pipe", "ignore"],
      windowsHide: !0,
    });
  } catch {
    return !1;
  }
  if (e.status !== 0) return !1;
  return GSr(e.stdout);
}
function GSr(e) {
  return e
    .split(`
`)
    .some((t) => t.startsWith("CLAUDE_CODE_CHILD_SESSION="));
}
function sS() {
  let e = iS();
  if (e) return e.color;
  return n().dynamicTeamContext?.color;
}
function z7e() {
  let e = iS();
  if (e) return e.planModeRequired;
  let { dynamicTeamContext: t } = n();
  if (t !== null) return t.planModeRequired;
  return a.CLAUDE_CODE_PLAN_MODE_REQUIRED;
}
function SAe(e) {
  if (!e) return !1;
  let { leadAgentId: t, teammates: o } = e;
  return Object.keys(o).some((s) => s !== t);
}
function vC(e) {
  if (!e?.leadAgentId) return !1;
  let t = rb(),
    o = e.leadAgentId;
  if (t === o) return !0;
  if (!t) return !0;
  return !1;
}
function bAe(e) {
  for (let t of Object.values(e.tasks)) if (t.type === "in_process_teammate" && t.status === "running") return !0;
  return !1;
}
function N4t(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running" && !t.isIdle) return !0;
  return !1;
}
function $wn(e, t) {
  let o = [];
  for (let [s, r] of Object.entries(t.tasks))
    if (r.type === "in_process_teammate" && r.status === "running" && !r.isIdle) o.push(s);
  if (o.length === 0) return Promise.resolve();
  return new Promise((s) => {
    let r = o.length,
      d = () => {
        if ((r--, r === 0)) s();
      };
    e((l) => {
      let m = { ...l.tasks };
      for (let c of o) {
        let i = m[c];
        if (i && i.type === "in_process_teammate")
          if (i.isIdle) d();
          else m[c] = { ...i, onIdleCallbacks: [...(i.onIdleCallbacks ?? []), d] };
      }
      return { ...l, tasks: m };
    });
  });
}
export {
  iS,
  Qnr,
  cN,
  Znr,
  nb,
  WSr,
  Bkr,
  jkr,
  Wkr,
  QV,
  rb,
  gf,
  ds,
  na,
  qSr,
  sP,
  bpe,
  qkr,
  GSr,
  sS,
  z7e,
  SAe,
  vC,
  bAe,
  N4t,
  $wn,
};
