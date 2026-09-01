// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, au } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { jt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { c, ke } from "/$bunfs/root/chunk-4xj01xwv.js";
import { we, ic } from "/$bunfs/root/chunk-ypdw393e.js";
import { ad } from "/$bunfs/root/chunk-2rx5nghb.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { dh, bt, Wd, On } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { Sp } from "/$bunfs/root/chunk-qcx34e4j.js";
import { Id, Xxe, S3e, Mct, nDe, wft, sVn, T9, gBt } from "/$bunfs/root/chunk-zze8764r.js";
import { aM, Tk } from "/$bunfs/root/chunk-308krgtb.js";
import { wmt, dI } from "/$bunfs/root/chunk-86v6b72m.js";
import { xq, e0e, L0, n6e } from "/$bunfs/root/chunk-9r67t977.js";
import { bse, Xnt, T2e } from "/$bunfs/root/chunk-f2gzjsp2.js";
import { i, v, q, f, oe } from "/$bunfs/root/chunk-saay52v7.js";
function L() {
  return {
    state: { phase: "idle" },
    shownWallResetsAt: null,
    pendingAsk: null,
    claiming: false,
    continuableWallResetsAt: null,
    unsettledClaimWallResetsAt: null,
    sessionSwitchSubscribed: false,
    changed: Ue(),
    events: Ue(),
  };
}
var z = new J(L);
function b() {
  return z.of(G().host);
}
function mL() {
  return b().state;
}
function _(e) {
  let t = b();
  (t.state = e), t.changed.emit();
}
function S2e(e) {
  return b().changed.subscribe(e);
}
function jYt(e) {
  return b().events.subscribe(e);
}
var I = "juniper_tide",
  O = 25000,
  D = m(() =>
    f({
      surface: oe(["claude_ai", "claude_code_cli", "unknown"]).catch("unknown"),
      tier: oe(["claude_pro", "claude_max_5x", "claude_max_20x", "unknown"]).catch("unknown"),
      tenure_bucket: oe(["under_14", "14-29", "30-89", "90-364", "365+", "unknown"]).catch("unknown"),
      billing_path: oe(["stripe", "apple", "google_play", "other", "unknown"]).catch("unknown"),
      billing_period: oe(["monthly", "annual", "unknown"]).catch("unknown"),
      extra_usage_state: oe(["not_configured", "disabled", "enabled", "unknown"]).catch("unknown"),
    }),
  ),
  H = m(() =>
    f({
      eligible: q(),
      ineligible_reason: oe([
        "tier",
        "tenure",
        "surface",
        "mobile",
        "cli_version",
        "not_at_wall",
        "weekly_limit",
        "no_weekly_limit",
        "other_experiment",
        "extra_usage",
        "unavailable",
        "unknown",
      ])
        .catch("unknown")
        .nullable()
        .optional(),
      in_experiment: q().optional(),
      arm: oe(["control", "reset"]).nullable().optional().catch(null),
      available: q().optional(),
      next_available_at: i().nullable().optional().catch(null),
      weekly_resets_at: i().nullable().optional().catch(null),
      resets_per_week: v()
        .optional()
        .catch(void 0),
      event_props: D().nullable().optional().catch(null),
    }),
  ),
  F = m(() =>
    f({
      result: oe(["reset", "already_used", "not_limited", "ineligible", "unavailable"]).catch("unavailable"),
      next_available_at: i().nullable().optional().catch(null),
      weekly_resets_at: i().nullable().optional().catch(null),
    }),
  );
function M(e) {
  if (e === void 0 || e === null) return null;
  let t = H().safeParse(e);
  if (!t.success) return n(`[juniper-tide] ignoring a malformed status block: ${t.error.message}`), null;
  let r = t.data,
    a = r.event_props;
  return {
    eligible: r.eligible,
    ineligibleReason: r.ineligible_reason ?? null,
    inExperiment: r.in_experiment ?? false,
    arm: r.arm ?? null,
    available: r.available ?? false,
    nextAvailableAt: r.next_available_at ?? null,
    weeklyResetsAt: r.weekly_resets_at ?? null,
    resetsPerWeek: r.resets_per_week ?? 1,
    eventProps: a
      ? {
          surface: a.surface,
          tier: a.tier,
          tenureBucket: a.tenure_bucket,
          billingPath: a.billing_path,
          billingPeriod: a.billing_period,
          extraUsageState: a.extra_usage_state,
        }
      : null,
  };
}
async function E(e) {
  try {
    if (!Wd()) return { kind: "no_profile_scope" };
    let t = await dI(e, { atWall: true });
    if (!wmt(t))
      return (
        n("[juniper-tide] status fetch returned a fieldless or non-object body (in-band error)", { level: "warn" }),
        { kind: "failed" }
      );
    return { kind: "answered", status: M(t?.juniper_tide) };
  } catch (t) {
    if (
      (n(`[juniper-tide] status fetch failed: ${we(t).message}`, { level: "warn" }),
      Sp(t) && (t.response?.status === 401 || t.response?.status === 403))
    )
      return { kind: "answered", status: null };
    return { kind: "failed" };
  }
}
async function C(e) {
  let t = On()?.organizationUuid;
  if (!t)
    return n("[juniper-tide] no OAuth organization; cannot claim"), { result: "auth_error", nextAvailableAt: null };
  try {
    let r = await dh(
      () =>
        bt.post(
          `/api/organizations/${t}/reset_rate_limits`,
          { program: I },
          {
            auth: "async",
            headers: { "Content-Type": "application/json" },
            timeout: O,
            refreshOAuth: true,
            credentials: e,
          },
        ),
      { credentials: e },
    );
    if (!r.ok)
      return (
        n(`[juniper-tide] claim not sent: ${r.reason === "no-auth" ? r.detail : r.reason}`, { level: "warn" }),
        { result: r.reason === "no-auth" ? "auth_error" : "error", nextAvailableAt: null }
      );
    let a = F().safeParse(r.data);
    if (!a.success)
      return (
        n(`[juniper-tide] unreadable claim response: ${a.error.message}`, { level: "error" }),
        h(Error("[juniper-tide] unreadable claim response")),
        { result: "error", nextAvailableAt: null }
      );
    return { result: a.data.result, nextAvailableAt: a.data.next_available_at ?? null };
  } catch (r) {
    if (ic(r)) n(`[juniper-tide] claim failed: ${we(r).message}`, { level: "warn" });
    else h(we(r));
    if (Sp(r))
      switch (r.response?.status) {
        case 429:
          return { result: "rate_limited", nextAvailableAt: null };
        case 401:
        case 403:
          return { result: "auth_error", nextAvailableAt: null };
        default:
          break;
      }
    return { result: "error", nextAvailableAt: null };
  }
}
var U = 3,
  N = 12000,
  Q = 35000;
function R(e, t) {
  return t.resetsAt === e.wallResetsAt && e.accountEpoch === Xxe();
}
function T(e) {
  let t = mL();
  return t.phase === "answered" && R(t, e) ? t.status : void 0;
}
function k(e) {
  let t = mL();
  return t.phase === "failed" && R(t, e);
}
function Nke(e, t = Date.now()) {
  let r = T(e);
  return (
    bse(e) &&
    r !== void 0 &&
    r !== null &&
    r.arm === "reset" &&
    r.available &&
    e.resetsAt !== void 0 &&
    e.resetsAt * 1000 > t &&
    !aM() &&
    nDe()
  );
}
function Fke(e, t = Date.now()) {
  let r = T(e);
  if (
    !bse(e) ||
    r === void 0 ||
    r === null ||
    r.arm !== "reset" ||
    r.available ||
    r.nextAvailableAt === null ||
    e.resetsAt === void 0 ||
    e.resetsAt * 1000 <= t ||
    !nDe()
  )
    return;
  return gBt(T9().spentLine, S(r.nextAvailableAt));
}
function S(e) {
  if (e === null) return;
  let t = Date.parse(e);
  return Number.isFinite(t) ? ad(Math.floor(t / 1000), false, true, true) : void 0;
}
function yNn(e, t) {
  if (!nDe() || !bse(e)) return;
  let r = b();
  ne(r), (r.continuableWallResetsAt = e.resetsAt ?? null), x(e, t, "wall");
}
function x(e, t, r) {
  if (!nDe() || !bse(e)) return Promise.resolve();
  let a = e.resetsAt;
  if (a === void 0) return Promise.resolve();
  let o = b(),
    u = Xxe(),
    l = o.state,
    w = 0;
  if (l.phase !== "idle" && R(l, e))
    switch (l.phase) {
      case "answered":
        return Promise.resolve();
      case "asking":
        return o.pendingAsk ?? Promise.resolve();
      case "failed":
        if (r === "wall" && l.failures >= U) return Promise.resolve();
        w = l.failures;
    }
  _({ phase: "asking", wallResetsAt: a, accountEpoch: u });
  let d = xq(),
    p = jt(E(t), N)
      .then((A) => {
        P({ wallResetsAt: a, accountEpoch: u, failures: w, result: A ?? { kind: "failed" }, autoArmed: d });
      })
      .catch((A) => {
        h(we(A));
        try {
          P({ wallResetsAt: a, accountEpoch: u, failures: w, result: { kind: "failed" }, autoArmed: d });
        } catch (W) {
          h(we(W));
        }
      })
      .finally(() => {
        if (o.pendingAsk === p) o.pendingAsk = null;
      });
  return (o.pendingAsk = p), p;
}
function P({ wallResetsAt: e, accountEpoch: t, failures: r, result: a, autoArmed: o }) {
  let u = mL();
  if (u.phase !== "asking" || u.wallResetsAt !== e || u.accountEpoch !== t) return;
  let l = a.kind === "answered" ? a.status : null;
  if (a.kind === "failed") _({ phase: "failed", wallResetsAt: e, accountEpoch: t, failures: r + 1 });
  else _({ phase: "answered", wallResetsAt: e, accountEpoch: t, status: l });
  if (
    (s("tengu_juniper_tide_asked", {
      outcome: c(a.kind === "answered" ? (l === null ? "absent" : "block") : a.kind),
      attempt: r + 1,
      eligible: l?.eligible ?? false,
      ineligible_reason: ke(l?.ineligibleReason) ?? void 0,
      config_version: wft(),
    }),
    l === null || !l.eligible)
  )
    return;
  s("tengu_juniper_tide_wall", {
    in_experiment: l.inExperiment,
    arm: ke(l.arm) ?? void 0,
    available: l.available,
    tier: c(Xnt()),
    auto_armed: o,
    low_priority_active: aM(),
    config_version: wft(),
    surface: ke(l.eventProps?.surface) ?? void 0,
    server_tier: ke(l.eventProps?.tier) ?? void 0,
    tenure_bucket: ke(l.eventProps?.tenureBucket) ?? void 0,
    billing_path: ke(l.eventProps?.billingPath) ?? void 0,
    billing_period: ke(l.eventProps?.billingPeriod) ?? void 0,
    extra_usage_state: ke(l.eventProps?.extraUsageState) ?? void 0,
  });
}
function b2e(e, t) {
  let r = e.resetsAt ?? null,
    a = b();
  if (r === null || a.shownWallResetsAt === r) return;
  a.shownWallResetsAt = r;
  let o = T(e);
  s("tengu_juniper_tide_shown", { arm: ke(o?.arm) ?? void 0, surface: c(t), config_version: wft() });
}
function WYt(e, t) {
  if (k(e)) x(e, t, "dialog");
}
async function w2e(e, t) {
  try {
    return await B(e, t);
  } catch (r) {
    return h(we(r)), { outcome: "unavailable", text: T9().unavailableLine };
  }
}
async function B(e, t) {
  let r = b(),
    a = T9();
  if (T(Id()) === void 0) {
    let p = r.pendingAsk !== null;
    if ((await x(Id(), t, e), p && k(Id()))) await x(Id(), t, e);
  }
  let o = Id();
  if (!Nke(o) || o.resetsAt === void 0) {
    let p = Fke(o);
    if (p !== void 0) return { outcome: "spent", text: p };
    return k(o) ? { outcome: "unavailable", text: a.unavailableLine } : { outcome: "not_offered", text: j };
  }
  if (r.claiming) return { outcome: "unavailable", text: X };
  let u = o.resetsAt,
    l = wft();
  s("tengu_juniper_tide_selected", { entry: c(e), auto_armed: xq(), config_version: l });
  let w = Date.now(),
    d;
  r.claiming = true;
  try {
    d = (await jt(C(t), Q)) ?? { result: "error", nextAvailableAt: null };
  } finally {
    r.claiming = false;
  }
  switch (
    (s("tengu_juniper_tide_result", {
      result: c(d.result),
      entry: c(e),
      latency_ms: Date.now() - w,
      config_version: l,
    }),
    d.result)
  ) {
    case "reset":
    case "not_limited":
    case "already_used":
    case "ineligible":
      y("juniper_tide");
      break;
    case "unavailable":
    case "rate_limited":
    case "auth_error":
    case "error":
      g("juniper_tide", d.result);
      break;
  }
  switch (d.result) {
    case "reset":
    case "not_limited": {
      r.unsettledClaimWallResetsAt = null;
      let p = sVn() && r.continuableWallResetsAt === u;
      (r.continuableWallResetsAt = null), V(r, u, e, p);
      let A = gBt(a.successLine, d.result === "reset" ? S(d.nextAvailableAt) : void 0);
      return { outcome: "reset", text: p ? A : `${A} \xB7 send a message to continue` };
    }
    case "already_used": {
      if ((ee(u, d.nextAvailableAt), r.unsettledClaimWallResetsAt === u)) (r.unsettledClaimWallResetsAt = null), Z(t);
      return { outcome: "spent", text: gBt(a.spentLine, S(d.nextAvailableAt)) };
    }
    case "ineligible":
      return te(u), { outcome: "not_offered", text: j };
    case "auth_error":
      return { outcome: "unavailable", text: K };
    case "unavailable":
    case "rate_limited":
    case "error":
      if (d.result === "error") r.unsettledClaimWallResetsAt = u;
      return { outcome: "unavailable", text: a.unavailableLine };
  }
}
var j = "A session-limit reset isn't available right now.",
  X = "Your session limit is already being reset \xB7 one moment",
  K = "Couldn't reset your session limit with this login \xB7 run /login, then try again";
function V(e, t, r, a) {
  let o = [
    () => L0("juniper_tide"),
    () => {
      Tk("reset");
    },
    () => Y(t),
    () => {
      let u = mL();
      if (u.phase !== "idle" && u.wallResetsAt === t) _({ phase: "idle" });
    },
    () => {
      if (a) T2e();
    },
    () => e.events.emit({ type: "reset", entry: r }),
  ];
  for (let u of o)
    try {
      u();
    } catch (l) {
      h(we(l));
    }
}
function Y(e) {
  let t = Id();
  if (t.status !== "rejected" || t.rateLimitType !== "five_hour" || t.resetsAt !== e) return;
  S3e({ ...t, status: "allowed", rateLimitType: void 0, resetsAt: void 0 });
}
function Z(e) {
  if (xq()) {
    e0e();
    return;
  }
  Mct(e, void 0).catch((t) => {
    h(we(t));
  });
}
function ee(e, t) {
  let r = mL();
  if (r.phase !== "answered" || r.wallResetsAt !== e || r.status === null) return;
  _({ ...r, status: { ...r.status, available: false, nextAvailableAt: t ?? r.status.nextAvailableAt } });
}
function te(e) {
  let t = mL();
  if (t.phase !== "answered" || t.wallResetsAt !== e || t.status === null) return;
  _({ ...t, status: { ...t.status, eligible: false, available: false } });
}
function ne(e) {
  if (e.sessionSwitchSubscribed) return;
  (e.sessionSwitchSubscribed = true),
    au((t, r) => {
      if (n6e(r)) e.continuableWallResetsAt = null;
    });
}
export { mL, S2e, jYt, Nke, Fke, yNn, b2e, WYt, w2e };
