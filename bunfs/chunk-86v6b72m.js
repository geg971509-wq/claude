// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { Hr } from "/$bunfs/root/chunk-ca80fke8.js";
import { dh, D8e, bt, Tt, Wd, I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Lk } from "/$bunfs/root/chunk-qd35gw0c.js";
import { i, H, f, qm } from "/$bunfs/root/chunk-saay52v7.js";
function bmt(e) {
  if (e?.is_enabled === !0) return !0;
  return D8e(e?.disabled_reason ?? null);
}
var l = [
  "five_hour",
  "seven_day",
  "seven_day_oauth_apps",
  "seven_day_opus",
  "seven_day_sonnet",
  "cinder_cove",
  "extra_usage",
  "limits",
];
function z5n(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function wmt(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && l.some((r) => r in e);
}
var u = "tengu_usage_overage_included_models";
function TF() {
  let e = I(u, []);
  return Array.isArray(e) ? e.filter((r) => typeof r === "string") : [];
}
var _ = "tengu_rate_limit_promo_notices",
  p = m(() =>
    H(
      f({
        bar: i(),
        text: i(),
        variant: qm((e) => typeof e === "string" && Object.hasOwn(Lk("dark"), e))
          .optional()
          .catch(void 0),
      }),
    ),
  );
function cpn() {
  let e = I(_, []),
    r = p().safeParse(e);
  return r.success ? r.data : [];
}
function Gce(e, r) {
  let o = r.map((t) => t.toLowerCase());
  if (o.length === 0) return [];
  return (e ?? [])
    .filter((t) => t.kind === "weekly_scoped" && t.scope?.model && o.includes(t.scope.model.display_name.toLowerCase()))
    .map((t) => ({
      title: `Current week (${t.scope?.model?.display_name})`,
      displayName: t.scope?.model?.display_name ?? "",
      limit: { utilization: t.percent, resets_at: t.resets_at },
    }));
}
async function dI(e, { atWall: r = !1 } = {}) {
  return Hr(r ? "api_usage_fetch_at_wall" : "api_usage_fetch", async () => {
    if (!Tt() || !Wd()) return {};
    let o = r ? "/api/oauth/usage?at_wall=1&skip_spend=1" : "/api/oauth/usage",
      t = 0,
      s = await dh(async () => {
        t++, n(`fetchUtilization: GET ${o} (attempt ${t})`);
        let a = await bt.get(o, {
          timeout: 5000,
          headers: { "Content-Type": "application/json" },
          refreshOAuth: !0,
          credentials: e,
        });
        if (!a.ok) throw Error(`Auth error: ${a.reason === "no-auth" ? a.detail : a.reason}`);
        return a;
      });
    return (
      n(`fetchUtilization: 200 after ${t} attempt(s)${t > 1 ? " (401\u2192refresh\u2192retry succeeded)" : ""}`), s.data
    );
  });
}
var TDe = "https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans";
var Tmt = "https://claude.ai/settings/usage?from=cc_cli_limit_message",
  yze = "claude.ai/settings/usage?from=cc_cli_limit_message",
  V5n = "https://support.claude.com/en/articles/12429409";
export { bmt, z5n, wmt, TF, cpn, Gce, dI, TDe, Tmt, yze, V5n };
