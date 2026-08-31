// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Yh, I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { et } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { vt, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { y, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { ye, ob } from "/$bunfs/root/chunk-988p40e0.js";
import { _o, _qt } from "/$bunfs/root/chunk-0spqrdaj.js";
import { gy } from "/$bunfs/root/chunk-1yr12dqr.js";
import { Yo } from "/$bunfs/root/chunk-nf8aaj8a.js";
import { W9e, nle, _sn } from "/$bunfs/root/chunk-zze8764r.js";
import { li } from "/$bunfs/root/chunk-a6xhjq7b.js";
import { Fu } from "/$bunfs/root/chunk-qnrh4abv.js";
function E0e() {
  return I("tengu_harbor_kite_mode_emit", !0);
}
function O() {
  switch (w().decidedBy) {
    case "policySettings":
      return "managed-setting";
    case "repoSettings":
      return "repo-setting";
    case "invalidSetting":
      return "invalid-setting";
    case "flagSettings":
    case "userSettings":
    case void 0:
      return "explicit-setting";
  }
}
var p = { accept: 0, hold: 1, refuse: 2 },
  Q = 100,
  P = new Set(gy);
function G6e(e) {
  if (e !== null) (li().inbound.shuttingDown = !1), x(), (li().inbound.modeAtUnwire = void 0);
  else {
    let o = li().inbound.getCurrentMode;
    if (o !== null)
      try {
        li().inbound.modeAtUnwire = o();
      } catch {
        li().inbound.modeAtUnwire = void 0;
      }
  }
  if (((li().inbound.getCurrentMode = e), e !== null)) oZ("mode-changed");
}
function z6e(e) {
  li().inbound.onPeerHeld = e;
}
function den(e) {
  li().inbound.sendPeerReceipt = e;
}
function tUn(e, o) {
  li().inbound.sendPeerReceipt?.({ mode: "prompt", agentId: et(), value: "", origin: e }, o);
}
function V6e(e) {
  let o = li().inbound;
  if (((o.publishAvailability = e), o.unsubscribeAvailabilityRefresh?.(), (o.unsubscribeAvailabilityRefresh = null), e))
    A0e(), (o.unsubscribeAvailabilityRefresh = Yh(A0e));
}
function A0e() {
  li().inbound.publishAvailability?.(R0e() === void 0);
}
function pen(e) {
  li().inbound.recordCorrespondent = e;
}
var F = 750;
function x() {
  if (li().inbound.shutdownSettleHandle === null) li().inbound.shutdownSettleHandle = vt(K6e);
}
async function K6e() {
  let e = li().inbound;
  if ((e.shutdownSettleHandle?.(), (e.shutdownSettleHandle = null), (e.shuttingDown = !0), e.held.length === 0)) return;
  let o = e.held.splice(0, e.held.length);
  n(`[cross-session-inbound] shutdown: settling ${o.length} still-held peer message(s) as expired`);
  let s = [];
  for (let t of o) s.push(e.sendPeerReceipt?.(t, "expired")), e.onPeerHoldDropped?.(t);
  await Promise.race([Promise.allSettled(s), ne(F, void 0, { unref: !0 })]);
}
function nUn(e) {
  let { inbound: o } = li();
  return o.held.includes(e) ? o.announced.get(e) : void 0;
}
function X6e(e) {
  li().inbound.onPeerHoldDropped = e;
}
function Y6e(e) {
  li().inbound.onPeerHoldReleased = e;
}
function She() {
  return w().value;
}
function w() {
  let e, o;
  for (let s of ["policySettings", "flagSettings", "userSettings"]) {
    if (!_o(s)) continue;
    let t = ye(s)?.crossSessionInbound;
    if (t !== void 0) {
      (e = t), (o = s);
      break;
    }
  }
  for (let s of ["localSettings", "projectSettings"]) {
    if (!_o(s)) continue;
    let t = ye(s)?.crossSessionInbound;
    if (t === void 0) continue;
    if (p[t] > p[e ?? "accept"]) (e = t), (o = "repoSettings");
    else if (t !== "accept" && e !== void 0 && p[t] === p[e] && o !== "policySettings") o = "repoSettings";
  }
  if (p[e ?? "accept"] < p.hold && N()) (e = "hold"), (o = "invalidSetting");
  return { value: e, decidedBy: o };
}
function N() {
  return ob().errors.some((e) => e.path === _qt && e.severity === "warning" && !e.statusOnly);
}
function b(e) {
  switch (e) {
    case "accept":
      return { policy: "accept" };
    case "hold":
      return { policy: "hold", holdCause: O() };
    case "refuse":
      return { policy: "refuse", refuseCause: "opt-out" };
  }
}
function _() {
  return Yo() ? void 0 : { policy: "refuse", refuseCause: "kill-switch" };
}
function H() {
  let e = _();
  if (e) return e;
  let o = She();
  if (o !== void 0) return b(o);
  let s = v();
  if (s === null) return { policy: "hold", holdCause: "mode-unknown" };
  if (!P.has(s.mode))
    return (
      n(`[cross-session-inbound] unrecognized permission mode '${s.mode}' (fail-closed \u2192 hold)`),
      { policy: "hold", holdCause: "mode-unknown" }
    );
  return C(s) ? { policy: "hold", holdCause: "bypass-default" } : { policy: "accept" };
}
function S(e) {
  let o = _();
  if (o) return o;
  return k(e, !1);
}
function E(e) {
  return k(e, !0);
}
function k(e, o) {
  let s = She();
  if (s !== void 0) return b(s);
  if (e?.selfSent) return { policy: "accept" };
  let t = v();
  if (t === null || !P.has(t.mode)) {
    if (t !== null) n(`[cross-session-inbound] unrecognized permission mode '${t.mode}' (fail-closed \u2192 hold)`);
    return { policy: "hold", holdCause: "mode-unknown" };
  }
  let i = C0e(t),
    a = o || E0e() ? e?.fromMode : void 0;
  if (a !== void 0) return a === i ? { policy: "accept" } : { policy: "hold", holdCause: "mode-mismatch" };
  return i === "bypass" ? { policy: "hold", holdCause: "no-mode-asserted" } : { policy: "accept" };
}
function C(e) {
  return e.mode === "bypassPermissions" || (e.mode === "plan" && e.isBypassPermissionsModeAvailable);
}
function C0e(e) {
  return C(e) ? "bypass" : "prompting";
}
function nZ() {
  return H().policy;
}
function fen(e) {
  return S(e).policy;
}
function v() {
  let e = li().inbound.getCurrentMode;
  if (e === null) return n("[cross-session-inbound] permission-mode getter not wired (fail-closed \u2192 hold)"), null;
  try {
    return e();
  } catch (o) {
    return n(`[cross-session-inbound] mode getter threw (${l(o)}; fail-closed \u2192 hold)`), null;
  }
}
function men() {
  if (She() !== void 0) return !1;
  let e = v();
  if (e === null || !P.has(e.mode)) return !1;
  return C(e);
}
function J6e(e) {
  return R(e, S(m(e)));
}
function m(e) {
  let o = e.origin;
  if (!o || o.kind !== "peer") return;
  return { fromMode: o.fromMode, selfSent: o.selfSent };
}
function A(e) {
  let o;
  if (e.priority === "later") {
    let { priority: s, ...t } = e;
    o = _sn(t, { receipt: "caller" });
  } else o = _sn(e, { receipt: "caller" });
  if (!o.admitted) return li().inbound.sendPeerReceipt?.(e, "dropped", { dropReason: o.reason, droppedMsgIds: [] }), !1;
  return li().inbound.recordCorrespondent?.(e), !0;
}
function R(e, o) {
  let s = li().inbound;
  switch ((A0e(), o.policy)) {
    case "accept":
      return D("policy-accepts"), y("peer_inbound_gate"), "accept";
    case "refuse":
      return (
        rZ(o.refuseCause === "kill-switch" ? f(e) : `crossSessionInbound=refuse: ${f(e)}`, o.refuseCause),
        s.sendPeerReceipt?.(e, "refused"),
        "refused"
      );
    case "hold": {
      let { holdCause: t } = o;
      if (s.shuttingDown)
        return (
          n(`[cross-session-inbound] shutdown: not parking a late peer message \u2014 settled as expired: ${f(e)}`),
          s.sendPeerReceipt?.(e, "expired"),
          g("peer_inbound_gate", "shutdown_expired"),
          "refused"
        );
      if (s.held.length >= Q) {
        let i = s.held.shift();
        if (i)
          n(`[cross-session-inbound] hold buffer full \u2014 evicted oldest as expired: ${f(i)}`),
            s.sendPeerReceipt?.(i, "expired"),
            s.onPeerHoldDropped?.(i);
      }
      if (
        (s.held.push(e),
        x(),
        n(`[cross-session-inbound] held inbound peer message (${s.held.length} held, cause=${t}): ${f(e)}`),
        g("peer_inbound_gate", "held"),
        s.onPeerHeld)
      )
        s.onPeerHeld(e, s.held.length, t), s.announced.set(e, t);
      return s.sendPeerReceipt?.(e, "held"), "held";
    }
  }
}
function Q6e(e) {
  if (!e) return "ungated";
  if (e.kind === "peer") return "hostInjected" in e && e.hostInjected === !0 ? "host-injected" : "peer";
  if (e.kind === "task-notification" && "subkind" in e && e.subkind === "peer-send-message") return "coordinator";
  return "ungated";
}
function Z6e({ ingressOrigin: e, inboundOrigin: o, envelopePeer: s = !1 }) {
  return s || (Q6e(e) !== "ungated" && !j(e)) || o === W9e;
}
function j(e) {
  return (
    !!e &&
    e.kind === "peer" &&
    !("hostInjected" in e && e.hostInjected === !0) &&
    "inbound_origin" in e &&
    e.inbound_origin === nle
  );
}
function eje(e, o) {
  switch (Q6e(e)) {
    case "peer":
      return J6e(o);
    case "host-injected":
      return gen(o);
    case "coordinator":
      return G(o);
    case "ungated":
      return "accept";
  }
}
function v0e(e) {
  switch (Q6e(e)) {
    case "peer":
      return R0e();
    case "coordinator":
    case "host-injected":
      return She() === "refuse" ? "opt-out" : void 0;
    case "ungated":
      return;
  }
}
function R0e() {
  let e = H();
  if (e.policy !== "refuse") return;
  return e.refuseCause;
}
function B() {
  let e = She();
  return e !== void 0 ? b(e) : { policy: "accept" };
}
function G(e) {
  let o = She();
  if (o === void 0) return "accept";
  return R(e, b(o));
}
function gen(e) {
  return R(e, E(m(e)));
}
function rZ(e, o) {
  if ((A0e(), o === "kill-switch")) {
    n(
      `[cross-session-inbound] refused inbound peer message \u2014 cross-session messaging disabled (kill switch) (${e})`,
    ),
      g("peer_inbound_gate", "kill_switch");
    return;
  }
  n(`[cross-session-inbound] refused inbound peer message (${e})`), g("peer_inbound_gate", "refused");
}
function oZ(e) {
  return A0e(), D(e);
}
function M(e) {
  switch (Q6e(e.origin)) {
    case "coordinator":
      return B();
    case "host-injected":
      return E(m(e));
    case "peer":
    case "ungated":
      return S(m(e));
  }
}
function D(e) {
  let o = li().inbound,
    s = o.held;
  if (s.length === 0) return 0;
  let t = [],
    i = [],
    a = [],
    d = 0,
    h = 0;
  for (let r of s) {
    let u = M(r);
    if (u.policy === "accept") i.push(r);
    else if (u.policy === "refuse") {
      if (((d += 1), u.refuseCause === "kill-switch")) h += 1;
      o.sendPeerReceipt?.(r, "refused"), o.onPeerHoldDropped?.(r);
    } else if ((t.push(r), o.announced.get(r) !== u.holdCause)) a.push([r, u.holdCause]);
  }
  (s.length = 0), s.push(...t);
  for (let [r, u] of a) o.announced.set(r, u), o.onPeerHeld?.(r, s.length, u);
  if (d > 0)
    n(
      h === d
        ? `[cross-session-inbound] gate off \u2014 dropped ${d} parked peer message(s) (cross-session messaging disabled)`
        : `[cross-session-inbound] dropped ${d} held peer message(s) \u2014 policy is now refuse`,
    );
  if (i.length === 0) return 0;
  let c = [];
  for (let r of i)
    if (A(r)) c.push(r), y("peer_inbound_gate");
    else o.onPeerHoldDropped?.(r);
  if (
    (n(
      `[cross-session-inbound] released ${i.length} held peer message(s) (${e}) \u2014 ${c.length} admitted by the ingress guard; ${s.length} still held`,
    ),
    c.length > 0)
  )
    o.onPeerHoldReleased?.(c, e);
  for (let r of c) o.sendPeerReceipt?.(r, "delivered");
  return i.length;
}
function k0e(e, o) {
  let s = li().inbound,
    t = s.held.indexOf(e);
  if (t === -1) return "gone";
  let [i] = s.held.splice(t, 1);
  if (!i) return "gone";
  if (o === "approve") {
    let d = M(i);
    if (d.policy === "refuse") {
      let c = d.refuseCause === "kill-switch";
      return (
        n(
          `[cross-session-inbound] held peer message approved but policy is now refuse (${c ? "kill switch" : "opt-out"}) \u2014 dropped`,
        ),
        s.sendPeerReceipt?.(i, "refused"),
        s.onPeerHoldDropped?.(i),
        "dropped"
      );
    }
    if (!A(i))
      return (
        n("[cross-session-inbound] held peer message approved but DROPPED by the ingress guard on release"),
        s.onPeerHoldDropped?.(i),
        "dropped-by-guard"
      );
    return (
      n("[cross-session-inbound] held peer message APPROVED \u2014 released to queue"),
      y("peer_inbound_gate"),
      s.onPeerHoldReleased?.([i], "approved"),
      s.sendPeerReceipt?.(i, "delivered"),
      "delivered"
    );
  }
  n(
    `[cross-session-inbound] held peer message ${o === "deny" ? "DENIED" : "EXPIRED/CANCELLED"} \u2014 dropped with denial receipt`,
  );
  let a = o === "deny" ? "denied" : "expired";
  return s.sendPeerReceipt?.(i, a), "dropped";
}
function H0e() {
  return li().inbound.held.length;
}
function rUn() {
  return li().inbound.shuttingDown;
}
function f(e) {
  let o = e.origin?.kind === "peer" && typeof e.origin.from === "string" ? e.origin.from : "unknown",
    s = typeof e.value === "string" ? e.value : "[blocks]";
  return `from=${Fu(o)} "${Fu(s, 60)}"`;
}
export {
  E0e,
  G6e,
  z6e,
  den,
  tUn,
  V6e,
  A0e,
  pen,
  K6e,
  nUn,
  X6e,
  Y6e,
  She,
  C0e,
  nZ,
  fen,
  men,
  J6e,
  Q6e,
  Z6e,
  eje,
  v0e,
  R0e,
  gen,
  rZ,
  oZ,
  k0e,
  H0e,
  rUn,
};
