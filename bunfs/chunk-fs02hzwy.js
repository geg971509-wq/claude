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
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { M_ } from "/$bunfs/root/chunk-qm65zb83.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { Ct } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Ut } from "/$bunfs/root/chunk-ntyhd04p.js";
import { p$, h$, jd, qg, Yt } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Ne, jo } from "/$bunfs/root/chunk-82w4mtvq.js";
import { Mrr, fR, Nrr } from "/$bunfs/root/chunk-e7rq8w09.js";
import { TAe, SNe, bNe, drr, prr } from "/$bunfs/root/chunk-4t3vsqt7.js";
import { i, q, _e, H, f, De } from "/$bunfs/root/chunk-saay52v7.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { readFileSync as h } from "fs";
import { join as g } from "path";
class s {
  notice = null;
  changed = Ue();
  replaceNotice(e) {
    if (this.notice === e) return;
    if (this.notice && e && this.notice.text === e.text && this.notice.url === e.url) return;
    (this.notice = e), this.changed.emit(this.notice);
  }
}
var d = new J(() => new s());
function l() {
  return d.of(G().host);
}
function a(e) {
  l().replaceNotice(e);
}
function kEe() {
  return l().notice;
}
function mer(e) {
  return l().changed.subscribe(e);
}
var lSn = { subscribe: (e) => l().changed.subscribe(e), getSnapshot: kEe };
var z9t = m(() =>
    f({
      restrictions: De(i(), f({ allowed: q() })),
      compliance_taints: H(i()).default([]),
      monitoring_notice: f({
        text: i()
          .max(500)
          .transform((e) => e.replace(/[\x00-\x1f\x7f-\x9f]/g, "")),
        url: i().url().startsWith("https://").nullish().catch(null),
      })
        .nullable()
        .default(null)
        .catch(null),
      defaults: De(i(), _e()).default({}).catch({}),
    }),
  ),
  cSn = { restrictions: {}, compliance_taints: [], monitoring_notice: null, defaults: {} },
  ger = ["invalid_request_error", "authentication_error", "permission_error", "not_found_error", "rate_limit_error"],
  her = [
    "ip_not_in_allowed_range",
    "claude_code_key_creator_not_member",
    "organization_disabled",
    "restricted_regime_endpoint",
    "oauth_not_allowed_for_organization",
  ];
var y = "policy-limits.json";
class _er {
  sessionCache = null;
  storageV5 = void 0;
  replaceSessionCache(e) {
    let o = this.sessionCache?.compliance_taints ?? [],
      t = e?.compliance_taints ?? [];
    if (
      ((this.sessionCache = e),
      Mrr(t),
      a(e?.monitoring_notice ?? null),
      o.length !== t.length || t.some((r) => !o.includes(r)))
    )
      h$();
  }
}
var Zyr = new J(() => new _er());
function n() {
  return Zyr.of(G().host);
}
function HEe(e) {
  n().replaceSessionCache(e);
}
function uSn() {
  n().storageV5 = void 0;
}
function CSt() {
  return n().sessionCache;
}
function xEe() {
  return g(be(), y);
}
function hC() {
  return IEe() === void 0;
}
function IEe(e = {}) {
  if (Ne() !== "firstParty") return "third_party_provider";
  if (!e.skipBaseUrlCheck && !jo()) return "custom_base_url";
  try {
    let { key: t } = qg({ skipRetrievingKeyFromApiKeyHelper: true });
    if (t) return;
  } catch {}
  if (jd()) return;
  let o = Yt();
  if (!o?.accessToken) return "no_auth";
  if (!o.scopes?.includes(M_)) return "oauth_no_inference_scope";
  if (o.subscriptionType == null) return;
  if (o.subscriptionType !== "enterprise" && o.subscriptionType !== "team") return "prosumer_oauth";
  return;
}
function vSt() {
  let e = n();
  if (O() && e.storageV5 !== void 0 && e.sessionCache) return e.sessionCache;
  try {
    let o = h(xEe(), "utf-8");
    return V9t(o);
  } catch {
    return null;
  }
}
function V9t(e) {
  let o = Ut(e, false),
    t = z9t().safeParse(o);
  return t.success ? t.data : null;
}
function K9t(e, o) {
  let t = n();
  if (((t.storageV5 = e), o !== null && t.sessionCache === null)) t.replaceSessionCache(o);
}
var w = [
    ["hipaa", "allow_web_fetch"],
    ["hipaa", "allow_memory_sync"],
    ["zdr", "allow_memory_sync"],
    ["hipaa", "allow_design_sync"],
    ["hipaa", "allow_projects_tool"],
    ["hipaa", "allow_remote_sessions"],
    ["hipaa", "allow_remote_control"],
    ["hipaa", "allow_cobalt_plinth"],
    ["zdr", "allow_cobalt_plinth"],
    ["hipaa", "allow_team_onboarding"],
    ["hipaa", "allow_error_reporting"],
    ["hipaa", "allow_auto_mode_sibling_docs"],
    ["zdr", "allow_error_reporting"],
    ["hipaa", "allow_desktop_handoff"],
    ["hipaa", "allow_send_file"],
    ["zdr", "allow_send_file"],
    ["hipaa", "allow_plugin_skill_search"],
    ["hipaa", "allow_account_skills_sync"],
    ["hipaa", "allow_account_plugins_sync"],
    ["hipaa", "allow_usage_transcript_scan"],
    ["hipaa", "allow_skill_doctor_transcript_scan"],
    ["hipaa", "allow_model_catalog"],
    ["hipaa", "allow_heap_dump"],
    ["zdr", "allow_heap_dump"],
    ["hipaa", "allow_local_checkpoint_commit"],
    ["zdr", "allow_local_checkpoint_commit"],
    ["hipaa", "allow_mycelium"],
    ["zdr", "allow_mycelium"],
    ...[],
    ...[],
  ],
  S = new Set([
    "allow_product_feedback",
    "allow_remote_sessions",
    "allow_remote_control",
    "allow_cobalt_plinth",
    "allow_error_reporting",
    "allow_desktop_handoff",
    "allow_auto_mode_sibling_docs",
    "allow_plugin_skill_search",
    "allow_account_skills_sync",
    "allow_account_plugins_sync",
    "allow_send_file",
    "allow_heap_dump",
    "allow_local_checkpoint_commit",
    ...[],
    "allow_usage_transcript_scan",
    "allow_skill_doctor_transcript_scan",
  ]),
  R = new Set(["allow_product_feedback"]);
function Mt(e) {
  let o = _();
  if (!o) {
    if (S.has(e)) {
      if (hC()) return false;
      if (R.has(e) && Ct() && !(e === "allow_product_feedback" && p$())) return false;
    }
    return true;
  }
  let t = o[e];
  if (t) return t.allowed;
  let r = lw()?.compliance_taints ?? [];
  for (let [p, u] of w) if (u === e && r.includes(p)) return false;
  return true;
}
Nrr({ isPolicyAllowed: (e) => Mt(e), policyDenyKind: (e) => nO(e), policyDeniedReason: (e, o, t) => od(e, o, t) });
function od(e, o, t, r) {
  if (Mt(e)) return null;
  if (r !== void 0 && !RSt()) return r;
  if (lw() === null) return bNe(o);
  return SNe(o, t, fR());
}
function RSt() {
  return TAe(fR()).length > 0;
}
function nO(e) {
  if (Mt(e)) return null;
  return lw() === null ? "cache_miss" : "org_denied";
}
function dSn(e, o) {
  let t = nO(e);
  if (t === null) return null;
  if (o !== void 0 && !RSt()) return o;
  return t === "cache_miss" ? prr() : drr(fR());
}
function pSn(e) {
  return _()?.[e]?.allowed === true;
}
function fSn(e) {
  let o = lw()?.defaults[e];
  return typeof o === "boolean" ? o : void 0;
}
function lw() {
  if (!hC()) return null;
  let e = n();
  if (e.sessionCache) return e.sessionCache;
  let o = vSt();
  if (o) return e.replaceSessionCache(o), o;
  return null;
}
function _() {
  return lw()?.restrictions ?? null;
}
export {
  kEe,
  mer,
  lSn,
  z9t,
  cSn,
  ger,
  her,
  _er,
  Zyr,
  HEe,
  uSn,
  CSt,
  xEe,
  hC,
  IEe,
  vSt,
  V9t,
  K9t,
  Mt,
  od,
  RSt,
  nO,
  dSn,
  pSn,
  fSn,
  lw,
};
