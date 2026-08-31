// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { bt, I, Ae, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { Mt } from "/$bunfs/root/chunk-fs02hzwy.js";
import { ZR } from "/$bunfs/root/chunk-zze8764r.js";
import { xD } from "/$bunfs/root/chunk-0b5b5vvk.js";
import { T } from "/$bunfs/root/chunk-ma6kk3k0.js";
var l = m(() =>
  T.object({
    reviews_used: T.number(),
    reviews_limit: T.number(),
    reviews_remaining: T.number(),
    is_overage: T.boolean(),
  }),
);
async function v(e) {
  let r = a.CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE;
  if (r)
    try {
      let t = l().safeParse(V(r));
      return t.success ? t.data : null;
    } catch (t) {
      return n(`fetchUltrareviewQuota fixture parse failed: ${t}`), null;
    }
  try {
    let t = await bt.get("/v1/ultrareview/quota", { auth: "teleport-org", timeout: 3000, credentials: e });
    if (!t.ok) return g("api_ultrareview_quota", "request_failed"), null;
    let o = l().safeParse(t.data);
    if (!o.success)
      return (
        n(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`),
        g("api_ultrareview_quota", "schema_mismatch"),
        null
      );
    return y("api_ultrareview_quota"), o.data;
  } catch (t) {
    return n(`fetchUltrareviewQuota failed: ${t}`), g("api_ultrareview_quota", "request_failed"), null;
  }
}
class f {
  quota = void 0;
  fetch = void 0;
}
var S = new J(() => new f());
function p() {
  return S.of(G().host);
}
async function eJt(e) {
  let r = p();
  (r.fetch ??= v(e)), (r.quota = await r.fetch);
}
function rrt(e) {
  let r = p();
  if (r.quota === void 0) return eJt(e), null;
  return r.quota;
}
function jke(e, r) {
  let t = ie().numStartups;
  Ae((o) => {
    let u = o.tipsHistory ?? {};
    if (u[e] === t) return o;
    let i = o.tipLifetimeShownCounts ?? {};
    return { ...o, tipsHistory: { ...u, [e]: t }, tipLifetimeShownCounts: { ...i, [e]: (i[e] ?? 0) + 1 } };
  }, r);
}
function FQ(e) {
  return ie().tipLifetimeShownCounts?.[e] ?? 0;
}
function vNn(e) {
  return ie().pluginSuggestionShownCounts?.[e] ?? 0;
}
function aB(e) {
  let r = ie(),
    t = r.tipsHistory?.[e];
  if (!t) return 1 / 0;
  return r.numStartups - t;
}
function RNn(e) {
  return ie().pluginSuggestionDiscoverShownCounts?.[e] ?? 0;
}
function kNn(e, r) {
  if (e.length === 0) return;
  Ae((t) => {
    let o = t.pluginSuggestionDiscoverShownCounts ?? {};
    if (e.every((i) => (o[i] ?? 0) > 0)) return t;
    let u = { ...o };
    for (let i of e) u[i] = (u[i] ?? 0) + 1;
    return { ...t, pluginSuggestionDiscoverShownCounts: u };
  }, r);
}
var h = "tengu_ultrareview_awareness";
function _() {
  return I(h, null) ?? {};
}
function NHt(e) {
  if (!ZR()) return !1;
  if (!Mt("allow_remote_sessions")) return !1;
  return _()[e] === !0;
}
function tJt() {
  return ie().hasRunUltrareview === !0;
}
function HNn(e) {
  Ae((r) => (r.hasRunUltrareview ? r : { ...r, hasRunUltrareview: !0 }), e);
}
function C(e) {
  s("tengu_ultrareview_awareness_shown", { surface: c(e) });
}
function nJt(e) {
  return `${e} free ${e === 1 ? "review" : "reviews"} left`;
}
function xNn(e) {
  if (e !== "ultrareview" && e !== xD) return "";
  if (!NHt("slash_menu")) return "";
  let r = rrt();
  if (r === null || r.reviews_remaining <= 0) return "";
  let t = r.reviews_remaining;
  return e === "ultrareview" ? `${t} free left \xB7 ` : `${t} free /ultrareview \xB7 `;
}
var R = "ultrareview-prose-pointer",
  U = "ultrareview-post-commit",
  b = 5;
function w(e, r, t, o, u) {
  if (!NHt(e)) return null;
  if (tJt()) return null;
  if (FQ(r) >= b) return null;
  if (aB(r) === 0) return null;
  jke(r, o), C(e);
  let i = rrt(u),
    d = i !== null && i.reviews_remaining > 0 ? ` \u2014 ${nJt(i.reviews_remaining)}` : "";
  return t(d);
}
function INn(e, r) {
  return w("prose_pointer", R, (t) => `Tip: For a deeper cloud-based review, try /ultrareview next time${t}.`, e, r);
}
function PNn(e) {
  return w(
    "post_commit",
    U,
    (r) => `Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`,
    e,
    void 0,
  );
}
export { eJt, rrt, jke, FQ, vNn, aB, RNn, kNn, NHt, tJt, HNn, nJt, xNn, INn, PNn };
