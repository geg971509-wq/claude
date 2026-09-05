// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { OJ, sx, JFe, q5 } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { bt, ope, Jk, g7e, Ubn, h7e, f4t, Pre, IT, AC, qa, Xh, On, dO, Ae, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { l, ic } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { wX } from "/$bunfs/root/chunk-wjr8v4tx.js";
import { oW, srt } from "/$bunfs/root/chunk-r63fm4bg.js";
import { zK } from "/$bunfs/root/chunk-0b318m6z.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
async function f(e, o) {
  try {
    if (ie().claudeCodeFirstTokenDate !== void 0) {
      y("api_first_token_date_fetch");
      return;
    }
    let c = await bt.get("/api/organization/claude_code_first_token_date", {
      auth: "async",
      timeout: 1e4,
      credentials: o,
    });
    if (!c.ok) {
      if (c.reason === "no-auth")
        n(`Failed to get auth headers for first-token-date fetch: ${c.detail}`, { level: "error" }),
          p("api_first_token_date_fetch", "request_failed");
      return;
    }
    let r = c.data?.first_token_date ?? null;
    if (r !== null) {
      let i = new Date(r).getTime();
      if (isNaN(i)) {
        h(Error(`Received invalid first_token_date from API: ${r}`)), p("api_first_token_date_fetch", "invalid_date");
        return;
      }
    }
    await Ae((i) => ({ ...i, claudeCodeFirstTokenDate: r }), e), y("api_first_token_date_fetch");
  } catch (t) {
    if (ic(t)) n(`Failed to fetch first token date: ${l(t)}`, { level: "error" });
    else h(t);
    p("api_first_token_date_fetch", "request_failed");
  }
}
async function ose(e, { storageV5: o, credentials: t } = {}) {
  let c = await kXt(e, { storageV5: o, credentials: t }),
    r = await f4t(e, t);
  if ((AC(), process.env.CLAUDE_CODE_OAUTH_TOKEN))
    if (r.success) delete process.env.CLAUDE_CODE_OAUTH_TOKEN;
    else process.env.CLAUDE_CODE_OAUTH_TOKEN = e.accessToken;
  if (OJ()) sx(r.success ? null : e.accessToken), JFe(false);
  if (O() && t !== void 0) await m(t);
  if (r.warning) s("tengu_oauth_storage_warning", { warning: r.warning });
  if ((await g7e(e.accessToken, o).catch((i) => n(String(i), { level: "error" })), Jk(e.scopes)))
    await f(o, t).catch((i) => n(String(i), { level: "error" }));
  else if (!(await Ubn(e.accessToken, o)))
    throw Error("Unable to create API key. The server accepted the request but did not return a key.");
  await HXt({ storageV5: o, credentials: t, ...c });
}
async function kXt(e, { storageV5: o, credentials: t }) {
  let c = On(),
    r = {
      accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid,
      organizationUuid: e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid,
    },
    i = Xh(c, r),
    _ = Xh(dO(), r),
    u = await IT(t),
    d = _ && (u === "env" || u === "fd" || (u === "store" && i)) ? "same_account" : "account_switch";
  await oW({
    clearOnboarding: false,
    preserveInProcessTokens: true,
    preserveNonAnthropicAuth: true,
    storageV5: o,
    preserveQuotaAutoResume: i,
    artifactAccount: d,
    incomingIdentity: r,
    credentials: t,
  }),
    q5(null);
  let a = e.profile ?? (await ope(e.accessToken));
  if (a?.account && a.organization)
    h7e(
      {
        accountUuid: a.account.uuid,
        emailAddress: a.account.email,
        organizationUuid: a.organization.uuid,
        displayName: a.account.display_name || void 0,
        fullName: a.account.full_name || void 0,
        hasExtraUsageEnabled: a.organization.has_extra_usage_enabled ?? void 0,
        billingType: a.organization.billing_type ?? void 0,
        subscriptionCreatedAt: a.organization.subscription_created_at ?? void 0,
        accountCreatedAt: a.account.created_at,
        ccOnboardingFlags: a.organization.cc_onboarding_flags ?? {},
        claudeCodeTrialEndsAt: a.organization.claude_code_trial_ends_at ?? null,
        claudeCodeTrialDurationDays: a.organization.claude_code_trial_duration_days ?? null,
        seatTier: a.organization.seat_tier ?? null,
        profileFetchedAt: Date.now(),
      },
      o,
    );
  else if (e.tokenAccount)
    h7e(
      {
        accountUuid: e.tokenAccount.uuid,
        emailAddress: e.tokenAccount.emailAddress,
        organizationUuid: e.tokenAccount.organizationUuid,
      },
      o,
    );
  return (
    wX({ action: "login", success: true, authMethod: "oauth" }),
    { preserveQuotaAutoResume: i, artifactAccount: d, incomingIdentity: r }
  );
}
async function HXt({ storageV5: e, credentials: o, preserveQuotaAutoResume: t = false, incomingIdentity: c }) {
  if (
    (await srt(e, { preserveQuotaAutoResume: t, artifactAccount: "same_account", incomingIdentity: c }),
    O() && o !== void 0)
  )
    await m(o);
  await zK(e, o);
}
async function m(e) {
  Pre(), await qa(e);
}
export { ose, kXt, HXt };
