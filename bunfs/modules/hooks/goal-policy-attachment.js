// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, Hw, K, Cu, Le, nme, KO } from "/$bunfs/root/chunk-f9h0bg01.js";
import { w, c, ke } from "/$bunfs/root/chunk-4xj01xwv.js";
import { Hc } from "/$bunfs/root/chunk-6k63g5t6.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { Dr } from "/$bunfs/root/chunk-gcks6mn0.js";
import { ye, xpe, En, K3, toe } from "/$bunfs/root/chunk-988p40e0.js";
import { m8e } from "/$bunfs/root/chunk-k8xha1qv.js";
import { ri } from "/$bunfs/root/chunk-8tgj5dp2.js";
function Nd(o) {
  let t = ye("policySettings")?.strictPluginOnlyCustomization;
  if (t === true) return true;
  if (Array.isArray(t)) return t.includes(o);
  return false;
}
var f = new Set(["plugin", "policySettings", "built-in", "builtin", "bundled"]);
function k2(o) {
  return o !== void 0 && f.has(o);
}
var QKn = "cli";
class d {
  snapshotKey = () => QKn;
  snapshotsBySessionId = new Map();
  setSnapshotKey(o) {
    this.snapshotKey = o;
  }
  current() {
    let o = this.snapshotKey(),
      t = this.snapshotsBySessionId.get(o);
    if (!t) (t = { initialHooksConfig: null }), this.snapshotsBySessionId.set(o, t);
    return t;
  }
  store(o) {
    this.current().initialHooksConfig = o;
  }
  evict(o) {
    if (o === QKn) return;
    this.snapshotsBySessionId.delete(o);
  }
}
var ZKn = new J(() => new d());
function a() {
  return ZKn.of(G().host);
}
function NCr(o) {
  a().setSnapshotKey(o);
}
function FCr(o) {
  a().evict(o);
}
function l() {
  let o = ye("policySettings");
  if (o?.disableAllHooks === true) return {};
  if (o?.allowManagedHooksOnly === true || Dr()) return o?.hooks ?? {};
  if (Nd("hooks")) return o?.hooks ?? {};
  let t = En();
  if (t.disableAllHooks === true) return o?.hooks ?? {};
  return t.hooks ?? {};
}
function f_() {
  return Dr() || gwe();
}
function gwe() {
  let o = ye("policySettings");
  if (o?.allowManagedHooksOnly === true) return true;
  if (En().disableAllHooks === true && o?.disableAllHooks !== true) return true;
  return false;
}
function egt() {
  return Dr() || ye("policySettings")?.allowManagedHooksOnly === true;
}
function Jhr() {
  return egt() || toe(K3()).length > 0 || (nme() && xpe());
}
function jpn() {
  return Jhr() || Nd("hooks");
}
function Fv() {
  return ye("policySettings")?.disableAllHooks === true;
}
function tgt() {
  return Fv() || gwe();
}
function Wpn() {
  Hc(), a().store(l()), KO();
}
function $Cr() {
  a().store(l()), KO();
}
function OD(o) {
  Hc(o), a().store(l()), KO();
}
async function UDe(o) {
  let t = await m8e(o);
  try {
    a().store(l()), KO();
  } finally {
    t?.();
  }
}
function* qpn() {
  for (let o of Hw(ZKn).snapshotsBySessionId.values()) if (o.initialHooksConfig !== null) yield o.initialHooksConfig;
}
function SX() {
  let o = a().current();
  if (o.initialHooksConfig === null) Hc(), (o.initialHooksConfig = l()), KO();
  return o.initialHooksConfig;
}
function CF(o, t) {
  s("tengu_goal_cleared", {
    reason: c(t),
    iterations: o.iterations,
    durationMs: Date.now() - o.setAt,
    origin: ke(o.origin),
  });
}
import { randomUUID as m } from "crypto";
var BDe = 4000,
  k = new Set(["clear", "stop", "off", "reset", "none", "cancel"]);
function hwe(o) {
  return k.has(o.toLowerCase());
}
function Gpn(o) {
  for (let t = o.length - 1; t >= 0; t--) {
    let n = o[t];
    if (n?.type !== "attachment" || n.attachment.type !== "goal_status") continue;
    let e = n.attachment;
    if (!e.met || e.sentinel) continue;
    return { condition: e.condition, iterations: e.iterations, durationMs: e.durationMs, tokens: e.tokens };
  }
  return null;
}
var ngt = (o) =>
  `A session-scoped Stop hook is now active with condition: "${o}". Briefly acknowledge the goal, then immediately start (or continue) working toward it \u2014 treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met \u2014 do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`;
function zte(o, t) {
  let n = [];
  for (let e of o.get(t, "Stop").get("Stop") ?? []) {
    if (e.matcher !== "" || e.skillRoot !== void 0) continue;
    for (let i of e.hooks) if (i.type === "prompt") n.push(i);
  }
  return n;
}
var h = "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.",
  H =
    "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).";
function Nze() {
  if (tgt()) return { message: H, code: "hooks_gate" };
  if (!Le() && !ri()) return { message: h, code: "trust_gate" };
  return null;
}
function zpn(o, t, n) {
  o((e) => ({ ...e, queuedGoalOrigin: { condition: t, origin: n } }));
}
function A(o, t) {
  let n = t.getAppState().queuedGoalOrigin;
  if (n === void 0 || n.condition !== o) return "user";
  return t.setAppState((e) => ({ ...e, queuedGoalOrigin: void 0 })), n.origin;
}
function _we(o, t, n) {
  let e = n ?? A(o, t),
    i = Nze();
  if (i !== null) return g("goal_set", i.code, { origin: c(e) }), i.message;
  let r = K(),
    p = t.getAppState().activeGoal;
  if (p !== void 0) CF(p, "superseded");
  for (let u of zte(t.sessionHooksRegistry, r)) t.sessionHooksRegistry.remove(r, "Stop", u);
  t.sessionHooksRegistry.add(r, "Stop", "", { type: "prompt", prompt: o });
  let S = { condition: o, iterations: 0, setAt: Date.now(), origin: e, tokensAtStart: Cu() };
  return (
    t.setAppState((u) => ({ ...u, activeGoal: S })),
    t.applyMessageOp({ type: "append", messages: [O2t(false, o)] }),
    s("tengu_stop_hook_added", { promptLength: o.length, via: w("goal"), origin: c(e) }),
    y("goal_set"),
    null
  );
}
function ywe(o) {
  let t = K(),
    n = zte(o.sessionHooksRegistry, t);
  if (n.length === 0) return null;
  let e = n[0].prompt;
  for (let r of n) o.sessionHooksRegistry.remove(t, "Stop", r);
  let i = o.getAppState().activeGoal;
  if (i !== void 0) CF(i, "user_clear");
  return (
    o.setAppState((r) => (r.activeGoal === void 0 ? r : { ...r, activeGoal: void 0 })),
    o.applyMessageOp({ type: "append", messages: [O2t(true, e)] }),
    s("tengu_stop_hook_removed", { via: w("goal") }),
    e
  );
}
function O2t(o, t) {
  return {
    type: "attachment",
    uuid: m(),
    timestamp: new Date().toISOString(),
    attachment: { type: "goal_status", met: o, sentinel: true, condition: t },
  };
}
export {
  Nd,
  k2,
  QKn,
  ZKn,
  NCr,
  FCr,
  f_,
  gwe,
  egt,
  Jhr,
  jpn,
  Fv,
  tgt,
  Wpn,
  $Cr,
  OD,
  UDe,
  qpn,
  SX,
  CF,
  BDe,
  hwe,
  Gpn,
  ngt,
  zte,
  Nze,
  zpn,
  _we,
  ywe,
  O2t,
};
