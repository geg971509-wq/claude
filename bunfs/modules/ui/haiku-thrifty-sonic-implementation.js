// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Me, bo } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { _n, at, Wde, tN, Ye, bC, I, $l } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { pn, z6, hh, ra } from "/$bunfs/root/chunk-82w4mtvq.js";
import { Fa } from "/$bunfs/root/chunk-97wwdfyx.js";
import { i, H } from "/$bunfs/root/chunk-saay52v7.js";
import { ai } from "/$bunfs/root/chunk-56sxk8k2.js";
var Kl = "ToolSearch",
  sEe = "DeferredToolPlaceholder",
  Dyt = "Reserved placeholder that keeps deferred tool loading active; never call this tool.";
function DQn(e) {
  return false;
}
function OQn(e) {
  return pn(e) === "claude-opus-4-8";
}
function LQn(e) {
  return false;
}
var R = new Set([
  "claude-opus-4-6",
  "claude-haiku-4-5",
  "claude-opus-4-5",
  "claude-opus-4-1",
  "claude-opus-4-0",
  "claude-sonnet-4-5",
  "claude-sonnet-4-0",
  "claude-3-7-sonnet",
  "claude-3-5-sonnet",
  "claude-3-5-haiku",
]);
function jLe(e) {
  return R.has(pn(e));
}
function Vne(e) {
  return /-eap($|\[)/i.test(e);
}
var E = "tengu_loggia_roster",
  g = [],
  D = m(() => H(i().trim())),
  L;
function S() {
  let e = I(E, g),
    o = L;
  if (o !== void 0 && o.raw === e) return o.ids;
  let r = D().safeParse(e);
  if (!r.success) n(`GrowthBook: ${E} is not a JSON array of model ids; treating it as empty`, { level: "warn" });
  let t = r.success ? r.data : g;
  return (L = { raw: e, ids: t }), t;
}
function NWt(e) {
  return S().some((o) => z6(e, o));
}
function A(e, o) {
  let r = $l()?.[e];
  return typeof r === "object" && r !== null && Object.entries(r).some(([t, u]) => u === true && o.includes(t));
}
function MQn(e) {
  return a.CLAUDE_CODE_BASALT_COVE || A("basalt_cove", e);
}
var O = "tengu_thrifty_sonic";
function F() {
  return d().bashFirstSessionAssignment();
}
function M() {
  let e = gV(at());
  if ($l()?.[O] === true || hh(Ye(e), "thrifty_sonic") === true) return "forced";
  return Wde(e) ? "cohort" : "none";
}
function FWt() {
  if (a.CLAUDE_CODE_THRIFTY_SONIC !== void 0) return a.CLAUDE_CODE_THRIFTY_SONIC;
  switch (F()) {
    case "forced":
      return true;
    case "none":
      return false;
    case "cohort":
      return I(O, false);
  }
}
var T = "tengu_gault_kestrel",
  P = "tengu_gorse_plover",
  h = "tengu_amber_astrolabe",
  y = "tengu_bison_cairn",
  x = "tengu_larch_cistern",
  N = "tengu_parchment_fern",
  f = "tengu_willow_tern",
  v = "tengu_fennel_godwit";
function $Wt(e) {
  if (e === void 0) return false;
  if (hh(Ye(e), "opus_5_prompt_bundle") !== true) return false;
  return !I(v, false);
}
function l(e, o, r) {
  return e || $Wt(r) || $l()?.[o] === true || I(o, false);
}
function NQn(e) {
  return l(a.CLAUDE_CODE_GAULT_KESTREL, T, e);
}
function FQn() {
  let e = Fa();
  return (e.bashActFirstEnabled ??= l(a.CLAUDE_CODE_GORSE_PLOVER, P, void 0)), e.bashActFirstEnabled;
}
function $Qn() {
  return l(a.CLAUDE_CODE_AMBER_ASTROLABE, h, void 0);
}
function UQn(e) {
  return l(a.CLAUDE_CODE_BISON_CAIRN, y, e);
}
function BQn(e) {
  return l(a.CLAUDE_CODE_LARCH_CISTERN, x, e);
}
function WKe() {
  let e = $l()?.[f];
  if (typeof e === "boolean") return e;
  if (e !== void 0) {
    let o = d();
    if (!o.unusableWritingOverrideTold)
      (o.unusableWritingOverrideTold = true),
        n(`willow_tern: ignoring non-boolean clientData ${f} value of type ${typeof e}`);
  }
  return;
}
function Oyt(e) {
  if (a.CLAUDE_CODE_WILLOW_TERN) return true;
  let o = WKe();
  if (o !== void 0) return o;
  if (e === void 0) return false;
  if (hh(Ye(e), "opus_5_prompt_bundle") !== true) return false;
  return I(f, false);
}
function u6() {
  return a.CLAUDE_CODE_SIMPLE;
}
function WLe(e) {
  return d().preReadLineDropped(e);
}
function U(e) {
  if (e === void 0) return false;
  if (jLe(Ye(e))) return false;
  return l(a.CLAUDE_CODE_PARCHMENT_FERN, N, void 0);
}
function w(e) {
  if (Vne(e)) return false;
  let o = Ye(e);
  if (hh(o, "lean_prompt") || o === "claude-mythos-5") return false;
  if (
    o.includes("claude-3-") ||
    o.includes("haiku") ||
    o.includes("sonnet") ||
    o === "claude-opus-4-0" ||
    o === "claude-opus-4-1" ||
    o === "claude-opus-4-5" ||
    o === "claude-opus-4-6" ||
    o === "claude-opus-4-7"
  )
    return true;
  return !ra();
}
function td(e) {
  return d().leanPrompt(e);
}
function B(e) {
  if (!e) return false;
  if (Me(a.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return true;
  if (bo(a.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return false;
  if (!w(e)) return true;
  if (I("tengu_velvet_tide", false)) return true;
  return A("simple_system_prompt", Ye(e));
}
var k = "breezy_horizon";
function gV(e) {
  return e === void 0 ? void 0 : d().modelForPrompt(e);
}
function z(e) {
  let o = a.CLAUDE_CODE_BREEZY_HORIZON;
  if (bo(o)) return e;
  let r = bC(e),
    t = $l()?.[k],
    u = o ?? (typeof t === "object" && t !== null ? Object.entries(t).find(([C]) => C === r)?.[1] : void 0);
  if (u === void 0) return e;
  let _ = o !== void 0 ? "env" : "client_data";
  if (typeof u !== "string" || !tN(u))
    return n(`[breezy_horizon] ${_}: ignoring unrecognized model id ${String(u)} for ${r}`, { level: "warn" }), e;
  let p = bC(u);
  if (p === r) return e;
  return s("tengu_breezy_horizon", { from_model: _n(r), to_model: _n(p), source: c(_) }), u;
}
class b {
  bashFirstSessionAssignment = ai(M);
  preReadLineDropped = ai(U);
  leanPrompt = ai(B);
  modelForPrompt = ai(z);
  unusableWritingOverrideTold = false;
}
var Y = new J(() => new b());
function d() {
  return Y.of(G().host);
}
export {
  Kl,
  sEe,
  Dyt,
  DQn,
  OQn,
  LQn,
  jLe,
  Vne,
  NWt,
  MQn,
  FWt,
  $Wt,
  NQn,
  FQn,
  $Qn,
  UQn,
  BQn,
  WKe,
  Oyt,
  u6,
  WLe,
  td,
  gV,
};
