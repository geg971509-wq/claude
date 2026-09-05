// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Hr } from "/$bunfs/root/chunk-ca80fke8.js";
import { hSn, Ter, bt, On, Fn, Ae, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
var sur = 14;
function pkt() {
  return On()?.claudeCodeTrialDurationDays ?? null;
}
var s = { status: "ineligible", daysRemaining: null };
function Ett() {
  let e = hSn();
  if (e) return o(true, e.endsAt);
  let t = On();
  if (!t || Fn() !== "pro") return s;
  let r = t.ccOnboardingFlags?.e10 === true;
  return o(r, t.claudeCodeTrialEndsAt ?? null);
}
async function fkt(e, t) {
  return Hr("api_pro_trial_start", async () => {
    if (hSn()) {
      let i = new Date(Date.now() + sur * 24 * 60 * 60 * 1000).toISOString();
      return Ter({ endsAt: i }), o(true, i);
    }
    let a = await bt.post(
      "/api/oauth/organizations/:orgUUID/claude_code/pro_trial",
      {},
      { auth: "teleport-org", credentials: t },
    );
    if (!a.ok) throw Error(a.reason === "no-auth" ? a.detail : `Pro trial start unavailable: ${a.reason}`);
    return n("Pro trial started", { level: "debug" }), l(a.data.ends_at, e), o(true, a.data.ends_at);
  });
}
function n7t() {
  if (Ett().status !== "expired") return false;
  return ie().cachedExtraUsageDisabledReason !== null;
}
function mkt(e) {
  switch (e.status) {
    case "active": {
      let t = e.daysRemaining ?? 0;
      return `Trial: ${t} ${t === 1 ? "day" : "days"} left`;
    }
    case "expired":
      return "Usage credits";
    case "ineligible":
    case "not_started":
      return null;
  }
}
function o(e, t) {
  if (!e) return s;
  if (!t) return { status: "not_started", daysRemaining: null };
  let r = new Date(t);
  if (Number.isNaN(r.getTime())) return h(Error(`Invalid claude_code_trial_ends_at: ${t}`)), s;
  let a = r.getTime() - Date.now();
  if (a <= 0) return { status: "expired", daysRemaining: 0 };
  return { status: "active", daysRemaining: Math.ceil(a / 86400000) };
}
function l(e, t) {
  Ae((r) => {
    if (!r.oauthAccount || r.oauthAccount.claudeCodeTrialEndsAt === e) return r;
    return { ...r, oauthAccount: { ...r.oauthAccount, claudeCodeTrialEndsAt: e } };
  }, t);
}
export { sur, pkt, Ett, fkt, n7t, mkt };
