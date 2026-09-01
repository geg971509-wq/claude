// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, et, au, zu } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { a0, X3, PNe } from "/$bunfs/root/chunk-988p40e0.js";
import { b6, w6, NSn, cf, at, qde, Ye, XI, Ot, wt, dy, Tt, On, I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { TF } from "/$bunfs/root/chunk-86v6b72m.js";
import { kl } from "/$bunfs/root/chunk-w3c6n7jh.js";
import { Id, e9n, n9n, _le, See, T3e, gE, Sv, KNt } from "/$bunfs/root/chunk-zze8764r.js";
import { randomUUID as L } from "crypto";
var X = "later",
  P =
    "Your claude.ai usage limit has reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.",
  Z =
    "Your claude.ai usage is available again before the usage-limit reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.",
  ee = 2,
  D = [60000, 300000],
  te = "tengu_marble_heron",
  ne = 30000,
  oe = 90000,
  ae = 1800000,
  se = 21600000,
  W = 86400000;
function ue() {
  return {
    state: { phase: "idle" },
    consecutiveRearms: 0,
    armedAtMs: 0,
    lastArmedResetsAtSeconds: 0,
    lastObservedMs: null,
    takeoverUuids: new Set(),
    queuedBeforeArmUuids: new Set(),
    handoffInProgress: false,
    dispatchingTakeoverUuids: new Set(),
    pendingContinuationUuid: null,
    activeTurnClaim: null,
    episodeArmOrigin: "dialog",
    sleptThroughReset: false,
    confirmingMainModel: false,
    recheckRequestedWhileConfirming: false,
    armedResetKeys: new Set(),
    autoArmDedupeResetKeys: new Set(),
    changed: Ue(),
    events: Ue(),
    autoContinueKeyPresence: "unscanned",
    storageV5: void 0,
    unsubscribeSettingsChanges: null,
    unknowableRescanDelayMs: 2000,
    unknowableRescanTimer: void 0,
    revocationRescan: "idle",
    revocationRescanGeneration: 0,
    limitsSubscriptionStarted: false,
    unsubscribeQuotaRejected: null,
    unsubscribeSessionSwitch: null,
  };
}
var ie = new J(ue);
function a() {
  return ie.of(G().host);
}
function q(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function M(e, t, n = 0) {
  if (typeof e !== "number" && typeof e !== "string") return t;
  let o = Number(e);
  if (!Number.isFinite(o) || o < 0) return t;
  return Math.min(Math.max(Math.round(o), n), se);
}
var re = 60000;
function N() {
  return I(te, {});
}
function U() {
  let e = N();
  return q(e) ? e : {};
}
function B(e) {
  if (e === void 0) return true;
  if (typeof e === "string") {
    let t = e.trim().toLowerCase();
    return t !== "" && t !== "false" && t !== "0";
  }
  return Boolean(e);
}
function _rt() {
  let e = N();
  return B(q(e) ? e.enabled : e);
}
function K() {
  return zu() && !wt();
}
function de() {
  return K() && _rt();
}
function ce() {
  return B(U().autoArm);
}
function nxt() {
  return a0("autoContinueAtUsageLimit")[0];
}
function yrt() {
  return T(a());
}
function T(e) {
  let t = nxt();
  if (t !== void 0) return t;
  return e.autoContinueKeyPresence === "absent";
}
function t1n(e) {
  let t = a();
  if (e === "auto_restore_cancel") return;
  if (!r(t)) return;
  Q(t, "conversation_reset");
}
var le = 2;
async function A(e, t = le) {
  try {
    e.autoContinueKeyPresence = await PNe("autoContinueAtUsageLimit", e.storageV5);
  } catch (n) {
    (e.autoContinueKeyPresence = "unknowable"), h(n);
  }
  if (e.autoContinueKeyPresence !== "unknowable") (e.revocationRescan = "idle"), e.revocationRescanGeneration++;
  if ((clearTimeout(e.unknowableRescanTimer), e.autoContinueKeyPresence === "unknowable" && t > 0))
    (e.unknowableRescanTimer = setTimeout(
      (n, o) => {
        A(n, o);
      },
      e.unknowableRescanDelayMs,
      e,
      t - 1,
    )),
      e.unknowableRescanTimer.unref?.();
}
function Srt() {
  let e = X3("autoContinueAtUsageLimit")[0]?.source;
  return e === void 0 || e === "userSettings";
}
function rxt(e) {
  return (
    e.status === "rejected" &&
    e.resetsAt !== void 0 &&
    Number.isFinite(e.resetsAt) &&
    e.isUsingOverage !== true &&
    e.overageInUse !== true
  );
}
function kse(e) {
  return Tt() && On()?.billingType !== "usage_based" && rxt(e) && de();
}
function Hq() {
  return a().state;
}
function n1n() {
  let e = a();
  return e.state.phase === "armed" && e.episodeArmOrigin === "auto";
}
function F(e) {
  let t = Id();
  if (t.status === "rejected" && t.resetsAt !== void 0) e.armedResetKeys.add(t.resetsAt);
}
function t6e(e) {
  return a().armedResetKeys.has(e);
}
function xq() {
  return a().state.phase === "armed";
}
function r(e) {
  return (
    e.state.phase === "armed" ||
    e.state.phase === "stale" ||
    e.activeTurnClaim !== null ||
    e.dispatchingTakeoverUuids.size > 0 ||
    T3e().some((t) => _(e, t)) ||
    KNt((t) => _(e, t))
  );
}
function fe(e) {
  return _le(e) && See(e);
}
function _(e, t) {
  return t.uuid !== void 0 && (t.uuid === e.pendingContinuationUuid || e.takeoverUuids.has(t.uuid));
}
function PJt() {
  return r(a());
}
function zQ(e) {
  return k(a(), e);
}
function k(e, t) {
  return t === "armed" || t === "stale" || x(e);
}
function Qke() {
  return x(a());
}
function x(e) {
  let t = e.pendingContinuationUuid;
  return t !== null && T3e().some((n) => n.uuid === t);
}
function oxt(e) {
  return e !== void 0 && e === a().pendingContinuationUuid;
}
function Zke(e) {
  return a().events.subscribe(e);
}
function DJt(e) {
  return a().changed.subscribe(e);
}
function f(e, t) {
  (e.state = t), e.changed.emit();
}
function me() {
  let e = U(),
    t = M(e.jitterMinMs, ne),
    n = Math.max(t, M(e.jitterMaxMs, oe));
  return Math.round(t + Math.random() * (n - t));
}
function pe(e, t, n) {
  let o = e * 1000 + me();
  if (t === null) return o;
  let u = D[t] ?? D.at(-1) ?? 0;
  return Math.max(o, n + u);
}
function OJt(e, t = Date.now(), n = "dialog", o) {
  return j(a(), e, t, n, o);
}
function j(e, t, n, o, u) {
  if (!kse(t)) return false;
  Y(e, u),
    (e.consecutiveRearms = 0),
    e.takeoverUuids.clear(),
    e.dispatchingTakeoverUuids.clear(),
    e.queuedBeforeArmUuids.clear();
  for (let i of T3e()) if (fe(i) || (i.mode === "bash" && See(i))) (i.uuid ??= L()), e.queuedBeforeArmUuids.add(i.uuid);
  return (
    (e.armedAtMs = n),
    y("quota_auto_resume"),
    s("tengu_quota_auto_resume_offer_armed", { origin: c(o) }),
    H(e, t.resetsAt ?? 0, null, n, o),
    e.events.emit("armed"),
    true
  );
}
function r1n(e, t = Date.now(), n) {
  let o = a();
  if (!kse(e)) return false;
  if (o.handoffInProgress) return false;
  if (!T(o) || !ce()) return false;
  if (dy()) return false;
  let u = e.resetsAt ?? 0;
  if (u * 1000 - t > W) return false;
  if (ke(e.rateLimitType, at())) return false;
  if (r(o) || o.autoArmDedupeResetKeys.has(u)) return false;
  if (!j(o, e, t, "auto", n)) return false;
  return o.events.emit("auto-armed"), true;
}
function H(e, t, n, o, u = "dialog") {
  w(e),
    (e.episodeArmOrigin = u),
    (e.lastArmedResetsAtSeconds = t),
    e.autoArmDedupeResetKeys.add(t),
    e.armedResetKeys.add(t),
    F(e),
    (e.activeTurnClaim = null),
    (e.sleptThroughReset = false),
    (e.lastObservedMs = o);
  let i = pe(t, n, o);
  s("tengu_quota_auto_resume_armed", {
    resets_in_sec: Math.max(0, Math.round(t - o / 1000)),
    rearm: n === null ? 0 : n + 1,
  }),
    f(e, { phase: "armed", resetsAtSeconds: t, fireAtMs: i, consecutiveRearms: e.consecutiveRearms });
}
function e0e() {
  Re(a());
}
function Iq(e) {
  return (...t) => {
    let n = e(...t);
    if (n !== false) e0e();
    return n;
  };
}
async function Re(e) {
  if (e.state.phase !== "armed") return;
  if (e.confirmingMainModel) {
    e.recheckRequestedWhileConfirming = true;
    return;
  }
  e.confirmingMainModel = true;
  try {
    for (;;) {
      if (((e.recheckRequestedWhileConfirming = false), qde(cf()) !== null)) return;
      let t = at(),
        n = e.state,
        o = await n9n(t, void 0, e.storageV5);
      if (e.state.phase !== "armed" || m(e)) return;
      if (e.recheckRequestedWhileConfirming || at() !== t || e.state !== n) continue;
      if (o === null || !Ce(o)) return;
      ge(e);
      return;
    }
  } catch (t) {
    h(t);
  } finally {
    e.confirmingMainModel = false;
  }
}
function ge(e) {
  z(e, Z),
    s("tengu_quota_auto_resume_fired", {
      rearm: e.consecutiveRearms,
      waited_ms: Math.max(0, Math.round(Date.now() - e.armedAtMs)),
      early: 1,
    }),
    (e.lastObservedMs = null),
    f(e, { phase: "idle" }),
    e.events.emit("fired-now");
}
function he(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
      return true;
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return false;
  }
}
function Ae(e) {
  switch (e) {
    case "low_priority":
    case "juniper_tide":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return true;
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
      return false;
  }
}
function L0(e) {
  Q(a(), e);
}
function Q(e, t) {
  if (r(e)) F(e);
  if (Ae(t)) e.autoArmDedupeResetKeys.clear();
  let n = k(e, e.state.phase);
  if (C(e) && e.state.phase === "idle") s("tengu_quota_auto_resume_cancelled", { reason: c(t) });
  if ((b(e, t), n && he(t))) e.events.emit("cancelled");
}
var brt = {
  background_handoff:
    "Automatic continue cancelled \xB7 this session moved to the background, so the task will not resume on its own when the usage limit resets",
  relaunch:
    "Automatic continue cancelled \xB7 Claude Code relaunched during the wait, so the task will not resume on its own when the usage limit resets (send a prompt then to continue)",
  desktop_handoff:
    "Automatic continue cancelled \xB7 this session moved to Claude Desktop, so the task will not resume on its own when the usage limit resets (continue it there)",
  cloud_handoff:
    "Automatic continue cancelled \xB7 sending this session to the cloud, so the task will not resume here on its own when the usage limit resets (continue it in the cloud session)",
  process_exit:
    "Automatic continue cancelled \xB7 Claude Code exited during the wait, so the task will not resume on its own when the usage limit resets (send a prompt after the reset to continue)",
};
function wrt(e) {
  let t = a();
  if (((t.handoffInProgress = true), !r(t))) return false;
  let n = k(t, t.state.phase);
  return Q(t, e), n;
}
function VQ() {
  a().handoffInProgress = false;
}
function Trt(e, { dispatching: t = false } = {}) {
  let n = a();
  if (!r(n)) return;
  if ((V(n), n.takeoverUuids.add(e), t)) n.dispatchingTakeoverUuids.add(e);
  n.changed.emit();
}
function w(e, { keepIfDrained: t = false } = {}) {
  if (e.pendingContinuationUuid === null) return false;
  let n = e.pendingContinuationUuid,
    o = Sv((u) => u.uuid === n).length > 0;
  if (o || !t) (e.pendingContinuationUuid = null), e.changed.emit();
  return o;
}
function _e(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "account_switch":
    case "setting_off":
    case "manual_submit":
    case "conversation_reset":
    case "killswitch":
    case "rearm_cap":
    case "horizon_exceeded":
    case "continuation_dropped":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return true;
    case "fired":
    case "stale":
      return false;
  }
}
function b(e, t) {
  if (e.state.phase === "idle") return;
  if (_e(t)) s("tengu_quota_auto_resume_cancelled", { reason: c(t) });
  f(e, { phase: "idle" });
}
function LJt(e, t) {
  let n = a();
  if (n.state.phase !== "armed" || m(n)) return "idle";
  let o = n.lastObservedMs ?? n.state.fireAtMs;
  n.lastObservedMs = e;
  let u = e - o,
    i = M(U().graceMs, ae, re);
  if (u > i && e >= n.state.fireAtMs) n.sleptThroughReset = true;
  if (t || e < n.state.fireAtMs) return "pending";
  if (n.sleptThroughReset)
    return (
      (n.sleptThroughReset = false),
      g("quota_auto_resume", "stale"),
      s("tengu_quota_auto_resume_stale", { late_by_ms: Math.round(e - n.state.fireAtMs) }),
      f(n, { phase: "stale" }),
      n.events.emit("stale"),
      "stale"
    );
  return (
    z(n),
    s("tengu_quota_auto_resume_fired", {
      rearm: n.state.consecutiveRearms,
      waited_ms: Math.max(0, Math.round(e - n.armedAtMs)),
    }),
    b(n, "fired"),
    "fired"
  );
}
function z(e, t = P) {
  w(e);
  let n = L();
  (e.pendingContinuationUuid = n),
    (e.activeTurnClaim = null),
    e.changed.emit(),
    gE({
      agentId: et(),
      mode: "prompt",
      priority: X,
      value: t,
      uuid: n,
      origin: { kind: "auto-continuation" },
      isMeta: true,
      skipSlashCommands: true,
      workload: b6,
    });
}
function o1n() {
  return MJt() ? P : null;
}
function MJt() {
  let e = a();
  return e.state.phase === "stale" && !m(e);
}
function i1n(e) {
  let t = a(),
    n = t.pendingContinuationUuid;
  if (n === null || !e.some((o) => o.uuid === n)) return e;
  if (!m(t)) return e;
  return e.filter((o) => o.uuid !== n);
}
function be(e) {
  if (e.episodeArmOrigin !== "auto" || T(e)) return (e.revocationRescan = "idle"), false;
  if (nxt() === void 0 && e.autoContinueKeyPresence === "unknowable") {
    if (e.revocationRescan === "idle") {
      e.revocationRescan = "pending";
      let t = ++e.revocationRescanGeneration;
      return (
        A(e).finally(() => {
          if (e.revocationRescan === "pending" && t === e.revocationRescanGeneration) e.revocationRescan = "done";
        }),
        false
      );
    }
    if (e.revocationRescan === "pending") return false;
  }
  return (e.revocationRescan = "idle"), true;
}
function m(e) {
  if (!_rt()) return v(e, "killswitch"), true;
  if (be(e)) return v(e, "setting_off"), true;
  return false;
}
function V(e) {
  if ((w(e, { keepIfDrained: true }), e.state.phase === "stale"))
    s("tengu_quota_auto_resume_stale_resumed", {}), (e.lastObservedMs = null), b(e, "stale");
  else if (e.state.phase === "armed") (e.lastObservedMs = null), b(e, "manual_submit");
}
function v(e, t) {
  s("tengu_quota_auto_resume_cancelled", { reason: c(t) }),
    C(e),
    f(e, { phase: "idle" }),
    e.events.emit(t === "horizon_exceeded" ? "horizon-exceeded" : t === "rearm_cap" ? "cap-exhausted" : "disabled");
}
function ve(e, t) {
  return e.episodeArmOrigin === "auto" && t * 1000 - Date.now() > W;
}
function s1n(e) {
  let t = a();
  for (let d of e.turnUuids) t.dispatchingTakeoverUuids.delete(d);
  let n = t.pendingContinuationUuid !== null && e.turnUuids.includes(t.pendingContinuationUuid),
    o = e.turnUuids.some((d) => t.takeoverUuids.has(d)),
    u = k(t, t.state.phase) || n,
    i =
      e.isHumanTakeover &&
      !o &&
      e.humanCommandUuids.length > 0 &&
      e.humanCommandUuids.every((d) => d !== void 0 && t.queuedBeforeArmUuids.has(d)),
    l = null;
  if (i && !n) return null;
  if (i) l = "continuation";
  else if (e.isHumanTakeover && (o || u)) (l = "takeover"), V(t);
  else if (n) l = "continuation";
  if (l === null) return null;
  if (t.activeTurnClaim !== null)
    h(Error("quota auto-resume: a turn claimed the episode while another claim was outstanding"));
  let O = { kind: l, queried: e.willQuery };
  return (t.activeTurnClaim = O), t.changed.emit(), O;
}
function a1n(e, t) {
  let n = a();
  for (let i of t) n.dispatchingTakeoverUuids.delete(i);
  if (e !== null) {
    if (e !== n.activeTurnClaim) return;
    if (((n.activeTurnClaim = null), n.changed.emit(), n.state.phase !== "idle")) return;
    if (T3e().some((i) => _(n, i))) return;
    if ((C(n), e.kind === "continuation" && !e.queried)) E(n);
    return;
  }
  let o = n.pendingContinuationUuid !== null && t.includes(n.pendingContinuationUuid);
  if (
    (o || t.some((i) => n.takeoverUuids.has(i))) &&
    n.state.phase === "idle" &&
    n.activeTurnClaim === null &&
    !T3e().some((i) => _(n, i))
  ) {
    if ((C(n), o)) E(n);
  }
}
function E(e) {
  p("quota_auto_resume", "continuation_dropped"),
    s("tengu_quota_auto_resume_cancelled", { reason: c("continuation_dropped") }),
    e.events.emit("continuation-dropped");
}
function C(e) {
  (e.consecutiveRearms = 0),
    (e.lastArmedResetsAtSeconds = 0),
    (e.episodeArmOrigin = "dialog"),
    (e.revocationRescan = "idle"),
    e.revocationRescanGeneration++,
    e.takeoverUuids.clear(),
    e.dispatchingTakeoverUuids.clear(),
    e.queuedBeforeArmUuids.clear(),
    (e.lastObservedMs = null),
    (e.activeTurnClaim = null);
  let t = w(e);
  return e.changed.emit(), t;
}
function Ce(e) {
  return e.status !== "rejected" || e.isUsingOverage === true || e.overageInUse === true;
}
function ye(e, t, n) {
  if (!rxt(t) || !K()) return;
  let o = t.resetsAt ?? 0;
  if (r(e) && R(t.rateLimitType, at())) e.autoArmDedupeResetKeys.add(o);
  if (e.state.phase === "armed") {
    if (o * 1000 > e.state.fireAtMs && R(t.rateLimitType, at())) S(e, o, null, e.episodeArmOrigin);
    return;
  }
  if (x(e)) return;
  if (e.state.phase === "stale") return;
  let u = e.activeTurnClaim;
  if (u === null) return;
  if (n !== "main_thread") return;
  if (u.kind === "takeover") {
    (e.consecutiveRearms = 0), S(e, R(t.rateLimitType, at()) ? o : e.lastArmedResetsAtSeconds, null, "dialog");
    return;
  }
  if (e.consecutiveRearms >= ee) {
    p("quota_auto_resume", "rearm_cap"), e.autoArmDedupeResetKeys.add(o), v(e, "rearm_cap");
    return;
  }
  let i = e.consecutiveRearms;
  e.consecutiveRearms++, S(e, o, i, e.episodeArmOrigin);
}
function S(e, t, n, o) {
  if (m(e)) return;
  if (ve(e, t)) {
    v(e, "horizon_exceeded");
    return;
  }
  let u = e.episodeArmOrigin === "auto" && o === "dialog";
  if ((H(e, t, n, Date.now(), o), e.events.emit("rearmed"), u)) e.events.emit("taken-over");
}
function ke(e, t) {
  if (e !== "seven_day_opus" && e !== "seven_day_sonnet") return false;
  if (R(e, t)) return false;
  let n = qde(cf());
  if (e === "seven_day_opus" && n === "opus") return false;
  if (e === "seven_day_sonnet" && n === "sonnet") return false;
  return true;
}
function R(e, t) {
  switch (e) {
    case "five_hour":
    case "seven_day":
    case "overage":
      return true;
    case "seven_day_opus":
      return w6(Ye(t));
    case "seven_day_sonnet":
      return NSn(Ye(t));
    case "seven_day_overage_included": {
      let n = XI(Ot(t));
      if (n === null) return false;
      let o = n.toLowerCase();
      return TF().some((u) => u.toLowerCase() === o);
    }
    case void 0:
      return false;
  }
  return false;
}
function NJt(e) {
  Y(a(), e);
}
function Y(e, t) {
  if (e.limitsSubscriptionStarted) return;
  (e.limitsSubscriptionStarted = true),
    (e.storageV5 = t),
    (e.unsubscribeQuotaRejected = e9n((n, o) => ye(e, n, o))),
    A(e),
    (e.unsubscribeSettingsChanges = kl.subscribe(() => {
      A(e);
    })),
    (e.unsubscribeSessionSwitch = au((n, o) => {
      if (n6e(o)) Q(e, "conversation_reset"), (e.handoffInProgress = false);
    }));
}
function n6e(e) {
  switch (e) {
    case "clear":
    case "resume":
    case "remote_attach":
      return true;
    case "fork":
    case "cd":
    case "spare_claim":
    case "hydrate":
    case "startup_custom_id":
      return false;
  }
}
export {
  _rt,
  nxt,
  yrt,
  t1n,
  Srt,
  rxt,
  kse,
  Hq,
  n1n,
  t6e,
  xq,
  PJt,
  zQ,
  Qke,
  oxt,
  Zke,
  DJt,
  OJt,
  r1n,
  e0e,
  Iq,
  L0,
  brt,
  wrt,
  VQ,
  Trt,
  LJt,
  o1n,
  MJt,
  i1n,
  s1n,
  a1n,
  NJt,
  n6e,
};
