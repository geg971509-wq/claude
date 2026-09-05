// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { os } from "/$bunfs/root/chunk-ypdw393e.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { Y } from "/$bunfs/root/chunk-s7e0px8j.js";
import { Je, rn } from "/$bunfs/root/chunk-988p40e0.js";
import { bt, Tt, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Ma } from "/$bunfs/root/chunk-nwb64bac.js";
import { i, v, q, H, f } from "/$bunfs/root/chunk-saay52v7.js";
var _ = m(() => {
  let e = f({ enable_email: q().nullish(), enable_push: q().nullish() }),
    t = f({ bogosort: e.nullish(), code_requires_action: e.nullish() }),
    r = f({
      has_active_channel: q(),
      platforms: H(i())
        .nullish()
        .transform((n) => n ?? []),
      most_recent_token_refresh: i().nullish(),
    });
  return f({
    account_id: v().nullish(),
    organization_id: v().nullish(),
    preferences: f({ feature_preference: t.nullish() }).nullish(),
    push_reachability: r.nullish(),
  });
});
var b = 1e4,
  S = new J(() => ({ reachability: Ma(void 0), hydrated: Ue() }));
function o() {
  return S.of(G().host);
}
function grt() {
  return o().reachability.getState();
}
function hrt(e) {
  return o().reachability.subscribe(e);
}
function YNn(e) {
  return o().hydrated.subscribe(e);
}
function P() {
  let e = Je(),
    t = ie();
  return {
    agentPushNotifEnabled: e.agentPushNotifEnabled ?? t.agentPushNotifEnabled,
    inputNeededNotifEnabled: e.inputNeededNotifEnabled ?? t.inputNeededNotifEnabled,
  };
}
var N = "/api/claude_code/notification/preferences";
function l() {
  return Tt();
}
async function E() {
  if (!l()) return { ok: false, reason: "no_auth" };
  try {
    let e = await bt.get(N, { timeout: b });
    if (!e.ok) return { ok: false, reason: "fetch_failed" };
    let t = _().safeParse(e.data);
    if (!t.success)
      return (
        Y("warn", "notif_prefs_fetch_parse_failed", { issues: t.error.issues.map((r) => r.path.join(".")).join(",") }),
        { ok: false, reason: "parse_failed" }
      );
    return { ok: true, prefs: t.data };
  } catch (e) {
    let { kind: t } = os(e);
    return Y("warn", "notif_prefs_fetch_failed", { kind: t }), { ok: false, reason: "fetch_failed" };
  }
}
async function k(e) {
  if (!l()) return;
  try {
    if (!(await bt.patch(N, e, { timeout: b })).ok) {
      g("notif_prefs_patch", "no_auth");
      return;
    }
    Y("info", "notif_prefs_patch_ok", {}), y("notif_prefs_patch");
  } catch (t) {
    let { kind: r } = os(t);
    Y("warn", "notif_prefs_patch_failed", { kind: r }), p("notif_prefs_patch", "http_error");
  }
}
function CJt() {
  let e = P(),
    t = {};
  if (typeof e.agentPushNotifEnabled === "boolean") t.bogosort = { enable_push: e.agentPushNotifEnabled };
  if (typeof e.inputNeededNotifEnabled === "boolean")
    t.code_requires_action = { enable_push: e.inputNeededNotifEnabled };
  if (Object.keys(t).length === 0) return;
  k({ preferences: { feature_preference: t } });
}
async function JNn(e) {
  if (!l()) {
    g("notif_prefs_hydrate", "no_auth"),
      o().reachability.setState(() => null),
      Y("info", "notif_prefs_hydrate_skipped", { reason: "no_auth" });
    return;
  }
  let t = await E();
  if (!t.ok) {
    p("notif_prefs_hydrate", t.reason),
      o().reachability.setState(() => null),
      Y("info", "notif_prefs_hydrate_skipped", { reason: t.reason });
    return;
  }
  let r = t.prefs,
    n = r.push_reachability ?? null;
  if ((o().reachability.setState(() => n), n))
    s("tengu_push_reachability", { has_active_channel: n.has_active_channel, platform_count: n.platforms.length });
  let h = r.preferences?.feature_preference,
    c = h?.bogosort?.enable_push,
    u = h?.code_requires_action?.enable_push,
    d = P(),
    a = {};
  if (d.agentPushNotifEnabled === void 0 && typeof c === "boolean") a.agentPushNotifEnabled = c;
  if (d.inputNeededNotifEnabled === void 0 && typeof u === "boolean") a.inputNeededNotifEnabled = u;
  if (
    (Y("info", "notif_prefs_hydrate_result", {
      has_active_channel: n?.has_active_channel,
      server_bogosort: c,
      server_code_requires_action: u,
      seeded: Object.keys(a).length > 0,
    }),
    Object.keys(a).length === 0)
  ) {
    y("notif_prefs_hydrate");
    return;
  }
  await rn("userSettings", a, void 0, e), o().hydrated.emit(), y("notif_prefs_hydrate");
}
export { grt, hrt, YNn, CJt, JNn };
