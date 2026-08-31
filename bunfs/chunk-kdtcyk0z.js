// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { RU, Ag, G5, exn, l5t, WQe, e$e, wve, c5t, qQe, txn, t$e, n$e, LCt, WO } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { y, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { kht } from "/$bunfs/root/chunk-avrc9gay.js";
import { Tte } from "/$bunfs/root/chunk-zk5v8tw6.js";
var w = import.meta.require("/$bunfs/root/chunk-jemhm57r.js"),
  _ = 60,
  b = 3600,
  O = 1200,
  D = 1;
function L(e, o) {
  s("tengu_loop_ended", { reason: c(e), ...o }), LCt(!0), n$e();
}
function Kun() {
  let e = Ag().find((o) => o.kind === "loop");
  if (e === void 0) return;
  return { at: e.scheduledFor, reason: e.reason, fires: t$e(), ...(e.keepalive && { keepalive: !0 }) };
}
function kVn() {
  let e = a.CLAUDE_CODE_LOOP_KEEPALIVE;
  if (e !== void 0) return e;
  return I("tengu_kairos_loop_keepalive", !0);
}
function HVn(e, o, t) {
  return E(e, o, { viaKeepalive: !1, reason: t });
}
function xVn(e) {
  if (c5t() >= D)
    return (
      n("[loop] keepalive budget exhausted (model declined to reschedule twice) \u2014 ending loop"),
      L("model_stopped", { via_keepalive: !0 }),
      null
    );
  return E(O, e, { viaKeepalive: !0 });
}
function Xun() {
  LCt(!1), n$e();
}
function IVn() {
  let e = txn(),
    o = Ag().filter((l) => l.kind === "loop"),
    t = e$e();
  wve(null), qQe(0), WO(o.map((l) => l.id));
  for (let l of o) WQe(l.prompt);
  if (t !== null) WQe(t);
  if (e)
    return (
      n("[loop] ScheduleWakeup({stop:true}) after loop already ended \u2014 cleanup only, terminal event suppressed"),
      o.length
    );
  return (
    n(
      `[loop] model called ScheduleWakeup({stop:true}) \u2014 ending loop (${o.length} pending wakeup(s) cancelled${t !== null ? ", tick in flight" : ""})`,
    ),
    L("model_stopped", { via_keepalive: !1 }),
    y("loop_schedule_wakeup"),
    o.length
  );
}
function E(e, o, t) {
  let { viaKeepalive: l, reason: i } = t;
  if (!l) qQe(0);
  let m = x(),
    r = Date.now(),
    d = exn(o),
    S = d !== void 0 && r > d.lastScheduledFor + b * 1000,
    u = d === void 0 || S ? r : d.startedAt,
    f = Tte().recurringMaxAgeMs;
  if (f > 0 && r - u >= f) {
    if (!d?.agedOut)
      l5t(o, { startedAt: u, lastScheduledFor: r - (b - _) * 1000, agedOut: !0 }),
        s("tengu_loop_dynamic_wakeup_aged_out", { loop_age_ms: r - u, max_age_ms: f }),
        L("aged_out", { via_keepalive: l }),
        g("loop_schedule_wakeup", "loop_wakeup_aged_out");
    return null;
  }
  let { clamped: p, wasClamped: h, targetMs: k, createdAt: C, target: v } = F(e),
    M = `${v.getMinutes()} ${v.getHours()} * * *`;
  if (
    (G5({
      id: T(),
      cron: M,
      prompt: o,
      createdAt: C,
      kind: "loop",
      scheduledFor: k,
      reason: i,
      ...(l && { keepalive: !0 }),
    }),
    l5t(o, { startedAt: u, lastScheduledFor: k }),
    RU(!0),
    LCt(!1),
    l)
  )
    return (
      qQe(c5t() + 1),
      n(`[loop] keepalive armed (model did not reschedule): ${p}s fallback`),
      s("tengu_loop_keepalive_fired", { clamped_delay_seconds: p, prompt_is_sentinel: w.isLoopDefaultSentinel(o) }),
      g("loop_schedule_wakeup", "model_no_reschedule"),
      { scheduledFor: k, clampedDelaySeconds: p, wasClamped: h }
    );
  return (
    n(`[loop] dynamic wakeup scheduled: ${p}s${h ? ` (clamped from ${e}s)` : ""}${i !== void 0 ? ` \u2014 ${i}` : ""}`),
    s("tengu_loop_dynamic_wakeup_scheduled", {
      chosen_delay_seconds: Number.isFinite(e) ? e : 0,
      clamped_delay_seconds: p,
      was_clamped: h,
      reason_length: i?.length ?? 0,
      superseded_count: m,
    }),
    y("loop_schedule_wakeup"),
    { scheduledFor: k, clampedDelaySeconds: p, wasClamped: h }
  );
}
function F(e) {
  let o;
  if (Number.isNaN(e)) o = _;
  else if (e === 1 / 0) o = b;
  else if (e === -1 / 0) o = _;
  else o = Math.round(e);
  let t = Math.max(_, Math.min(b, o)),
    l = !Number.isFinite(e) || o !== t,
    i = Date.now(),
    m = i + t * 1000,
    r = P(m),
    d = Tte().cacheLeadMs;
  if (d > 0 && t * 1000 <= kht) {
    let f = kht - d;
    while (r - i > f && r - 60000 >= i + _ * 1000) r -= 60000;
  }
  let S = new Date(r),
    u = m < r ? m : r - 1;
  return { clamped: t, wasClamped: l, targetMs: r, createdAt: u, target: S };
}
function P(e) {
  let o = new Date(e);
  if (o.getSeconds() > 0 || o.getMilliseconds() > 0) o.setMinutes(o.getMinutes() + 1);
  return o.setSeconds(0, 0), o.getTime();
}
function T() {
  return Math.floor(Math.random() * 4294967295)
    .toString(16)
    .padStart(8, "0");
}
function x() {
  let e = Ag()
    .filter((o) => o.kind === "loop")
    .map((o) => o.id);
  if (e.length === 0) return 0;
  return WO(e);
}
function aX() {
  return Ag().some((e) => e.kind === "loop");
}
function wBt() {
  let e = Ag().filter((t) => t.kind === "loop"),
    o = e$e();
  if ((wve(null), qQe(0), e.length === 0 && o === null)) return 0;
  WO(e.map((t) => t.id));
  for (let t of e) WQe(t.prompt);
  if (o !== null) WQe(o);
  return (
    n(
      `[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o !== null ? " (tick in flight)" : ""}`,
    ),
    L("user_abort", { loops_cancelled: e.length }),
    y("loop_cancel_all"),
    e.length
  );
}
export { Kun, kVn, HVn, xVn, Xun, IVn, aX, wBt };
