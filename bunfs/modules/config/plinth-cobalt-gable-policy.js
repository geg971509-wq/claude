// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Le } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Me, bo } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { w, c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Ct } from "/$bunfs/root/chunk-wkxx62a2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { Sw } from "/$bunfs/root/chunk-6k63g5t6.js";
import { $T, ye, pqt, fy, xNe, INe, cS } from "/$bunfs/root/chunk-988p40e0.js";
import { _o } from "/$bunfs/root/chunk-0spqrdaj.js";
import { cAe, Fn, I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Ne } from "/$bunfs/root/chunk-82w4mtvq.js";
import { Sm, Uu, CNe, uP, N$, v_, qrr, Hwt, Grr } from "/$bunfs/root/chunk-amem41jf.js";
import { Df } from "/$bunfs/root/chunk-4t3vsqt7.js";
import { de } from "/$bunfs/root/chunk-xgfepdf4.js";
import { SZn } from "/$bunfs/root/chunk-r4m4cqz1.js";
import { hC, IEe, Mt, lw } from "/$bunfs/root/chunk-fs02hzwy.js";
import { vT, Rde } from "/$bunfs/root/chunk-51qp0385.js";
import { mEe, Jyt } from "/$bunfs/root/chunk-g5y4mxg8.js";
import { ay } from "/$bunfs/root/chunk-3fwkz19s.js";
var T = ["policySettings", "flagSettings", "userSettings"],
  h = ["localSettings", "projectSettings"];
function S(e) {
  let t = [];
  if (e.envDisableVar !== void 0 && D(e.envDisableVar)) t.push({ layer: "env", via: "envVar" });
  let n;
  for (let r of T) {
    let d = p(r, e);
    if (
      (g(t, r, r === "policySettings" ? [...d, ...INe()] : d, e),
      n === void 0 && !(r === "policySettings" && cS() === "hkcu") && d.some((C) => C?.[e.enableKey] === true))
    )
      n = r;
  }
  let o = t.some((r) => r.layer === "env" || r.layer === "policySettings" || r.layer === "flagSettings");
  for (let r of h) g(t, r, p(r, e), e);
  let i = t.some((r) => r.layer === "localSettings" || r.layer === "projectSettings");
  return {
    enabled: t.length === 0 && (e.defaultOn || n !== void 0),
    decidedBy: t[0]?.layer ?? n ?? "default",
    offSources: t,
    lockedAboveUser: o,
    userControllable: !o && !i && _o("userSettings"),
  };
}
function p(e, t) {
  if (e === "policySettings") return [...fy(), ye("policySettings")];
  if (!_o(e)) return [];
  if (e === "localSettings") return [ye(e), pqt()];
  let n = ye(e);
  if (e === "projectSettings" && k(n, t) && _o("userSettings") && $T()) return [];
  return [n];
}
function k(e, t) {
  return e?.[t.enableKey] !== void 0 || (t.legacyDisableKey !== void 0 && e?.[t.legacyDisableKey] !== void 0);
}
function g(e, t, n, o) {
  if (n.some((l) => l?.[o.enableKey] === false)) e.push({ layer: t, via: "enableKey" });
  let i = o.legacyDisableKey;
  if (i !== void 0 && n.some((l) => l?.[i] === true)) e.push({ layer: t, via: "legacyDisableKey" });
}
function D(e) {
  if (a[e] || Me(b(vT(), e)) || Me(xNe(e)) || Me(b(Rde(), e))) return true;
  for (let t of ["flagSettings", "userSettings"]) if (_o(t) && Me(b(ye(t)?.env, e))) return true;
  return false;
}
function b(e, t) {
  if (e === void 0) return;
  if (t in e) return e[t];
  for (let [n, o] of Object.entries(e)) if (n.toUpperCase() === t) return o;
  return;
}
var m = {
  enableKey: "enableArtifact",
  legacyDisableKey: "disableArtifact",
  envDisableVar: "CLAUDE_CODE_DISABLE_ARTIFACT",
  defaultOn: true,
};
function eMe() {
  return S(m);
}
function u() {
  return !eMe().enabled;
}
function Z_r() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return uP() || e === "claude-code-github-action" || e === "mcp";
}
function A(e) {
  return e === "local-agent" || e?.startsWith("claude-coworker") === true;
}
function jI() {
  return N$() === "local-agent" && v_() && !Hwt() && Grr();
}
function lY() {
  return (CNe() && qrr()) || jI();
}
function eyr() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  if (e === "local-agent" && jI()) return false;
  return A(e);
}
function ZKe() {
  return A(N$()) && !jI();
}
function O() {
  return mEe() && E();
}
function E() {
  if (Ne() !== "firstParty") return false;
  if (Ct()) return false;
  if (bo(a.CLAUDE_CODE_ARTIFACT)) return false;
  if (!Me(a.CLAUDE_CODE_ARTIFACT) && Z_r()) return false;
  return true;
}
function _() {
  return mEe() && f();
}
function f() {
  return !eyr() && E();
}
function _vr() {
  if (u()) return false;
  return _();
}
function P() {
  let e = IEe();
  return e === void 0 || e === "prosumer_oauth" || e === "no_auth";
}
function y() {
  return (Me(a.CLAUDE_CODE_ARTIFACT) && false) || I("tengu_cobalt_plinth", P());
}
function v() {
  return y() && W_n();
}
function L() {
  if (!y()) return false;
  return Jyt() || W_n();
}
function Zv() {
  if (Df() !== null) return YM();
  return mEe() && YM() && W_n();
}
function YM() {
  if (u()) return false;
  if (Df() !== null) return true;
  if (!f()) return false;
  return L();
}
function yvr() {
  if (u()) return false;
  if (!O()) return false;
  return v();
}
function R() {
  let e = new Set(),
    t = false,
    n = false;
  for (let i of eMe().offSources)
    switch (i.layer) {
      case "env":
        e.add("env");
        break;
      case "userSettings":
        e.add(i.via === "legacyDisableKey" ? "setting" : "config_pref");
        break;
      case "policySettings":
      case "flagSettings":
        t = true;
        break;
      case "localSettings":
      case "projectSettings":
        n = true;
        break;
    }
  if (t) e.delete("setting"), e.delete("config_pref");
  if (e.size > 1) return "multiple";
  let [o] = e;
  if (o !== void 0) return o;
  return t || n ? "admin_managed" : null;
}
function U() {
  return R() !== null && _() && v();
}
function j_n() {
  let e = de();
  if (e.artifactDisabledSessionEvaluated) return;
  if (Sw() === null) return;
  if (((e.artifactDisabledSessionEvaluated = true), !U())) return;
  let t = R();
  if (t === null) return;
  s("tengu_artifact_disabled_session", {
    mechanism: c(t),
    session_interactivity: !Le() || Sm() === "claude-vscode" || Uu() ? w("interactive") : w("noninteractive"),
  });
}
function r9t() {
  return m.defaultOn;
}
function tyr() {
  return f() && L();
}
function e8e() {
  return tyr() && eMe().userControllable;
}
function W_n() {
  if (Jyt()) return Yyt() === null;
  let e = Fn();
  if (e !== "team" && e !== "enterprise" && e !== "pro" && e !== "max" && e != null) return false;
  return Mt("allow_cobalt_plinth");
}
function Yyt() {
  if (!Jyt()) return null;
  let e = cAe();
  if (e === null) return "plan_unreadable";
  if (e !== "pro" && e !== "max") return "org_policy_unverifiable";
  if (!hC()) return "policy_unavailable";
  if (Mt("allow_cobalt_plinth")) return null;
  return lw() === null ? "cache_miss" : "org_denied";
}
function Zne() {
  return false;
}
function qk() {
  return Zv() && I("tengu_gable_onyx_sluice", false);
}
SZn(qk);
function q_n() {
  return YM() && I("tengu_gable_onyx_sluice", false);
}
function Svr() {
  return false;
}
function G_n() {
  return false;
}
function z_n() {
  return false;
}
function o9t() {
  return false;
}
function V_n() {
  return Zv() && I("tengu_ethereal_nova", true);
}
function bvr() {
  return false;
}
function K_n() {
  return qk() && !ay() && !I("tengu_cedar_transom", false) && I("tengu_larch_pavise", false);
}
function X_n() {
  return o9t() && !ay();
}
function Y_n() {
  return false;
}
function J_n() {
  return false;
}
function Q_n() {
  return I("tengu_cobalt_plinth_thrift", false) === true;
}
var nyr = "tengu_russet_pergola";
function Z_n() {
  return false;
}
function i9t() {
  return false;
}
function eyn() {
  return i9t() && I("tengu_walnut_sconce", false);
}
function Y() {
  return false;
}
function ere() {
  let e = de();
  if (e.prReviewComposeLatch === null) e.prReviewComposeLatch = Y();
  return e.prReviewComposeLatch;
}
function tMe() {
  return Zv();
}
function nMe() {
  return !u() && f();
}
export {
  eMe,
  Z_r,
  jI,
  lY,
  eyr,
  ZKe,
  _vr,
  Zv,
  YM,
  yvr,
  j_n,
  r9t,
  tyr,
  e8e,
  W_n,
  Yyt,
  Zne,
  qk,
  q_n,
  Svr,
  G_n,
  z_n,
  o9t,
  V_n,
  bvr,
  K_n,
  X_n,
  Y_n,
  J_n,
  Q_n,
  nyr,
  Z_n,
  i9t,
  eyn,
  ere,
  tMe,
  nMe,
};
