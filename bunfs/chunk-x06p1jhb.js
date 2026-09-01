// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { An } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { lYe, Vqt, cYe } from "/$bunfs/root/chunk-z2bvp3sv.js";
import { b } from "/$bunfs/root/chunk-fv016jr6.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { V6 } from "/$bunfs/root/chunk-amem41jf.js";
import { Ji } from "/$bunfs/root/chunk-3p0akcc3.js";
var C = /[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,
  N5e = 256,
  h_t = /[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;
function F5e(e) {
  return e.length > 0 && e.length <= 256 && !h_t.test(e);
}
function zE(e) {
  return m(e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
}
function m(e) {
  return e.replace(C, (n) => `&#${n.charCodeAt(0)};`);
}
function VX(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function _u(e) {
  return m(VX(String(e ?? "")));
}
function PTe(e) {
  return _u(e).replaceAll('"', "&quot;");
}
function S(e) {
  return k(e) || e === "synced";
}
function k(e) {
  return e === "inline";
}
var Nm = "inline",
  nu = "skills-dir",
  um = "synced",
  Uh = "builtin";
function uc(e) {
  return e === Nm || e === nu || e === um;
}
function BF(e) {
  let n = e.lastIndexOf("@");
  if (n <= 0) return e;
  return `${e.slice(0, n)}@${Ggn(e.slice(n + 1))}`;
}
function Ggn(e) {
  let n = e.toLowerCase();
  return cYe(n) ? n : e;
}
function Dne(e) {
  return MI(e) !== void 0;
}
function MI(e) {
  let n = Ud(e);
  if (uc(n)) return n;
  if (e.includes("@")) return;
  if (e.startsWith(`${Nm}[`)) return Nm;
  if (e.startsWith(`${um}[`)) return um;
  return;
}
function zgn(e, n) {
  return OTe(e, Vgn(n));
}
function Vgn(e) {
  return e.map((n) => (n === void 0 ? void 0 : Kgn(n)));
}
function Kgn(e) {
  let n = new Map();
  for (let [t, i] of Object.entries(e)) {
    if (i === void 0) continue;
    let s = fp(t),
      d = y(t, i),
      o = n.get(s);
    if (o === void 0 || o.enabled) n.set(s, { key: t, enabled: d && (o?.enabled ?? true) });
  }
  return { record: e, byFold: n };
}
function y(e, n) {
  if (n === void 0) return false;
  let t = Ud(BF(e));
  return t === Nm || t === nu ? n !== false : n === true;
}
function DTe(e) {
  let n = Ud(BF(e));
  return n === Nm || n === um;
}
function OTe(e, n) {
  if (!DTe(e)) {
    for (let [d, o] of n.entries()) {
      let l = o?.record[e];
      if (l !== void 0) return { index: d, enabled: y(e, l), key: e };
    }
    return;
  }
  let t = fp(e),
    i = BF(e),
    s = Ud(i) === um ? fp(`${i.slice(0, i.lastIndexOf("@"))}@${Nm}`) : void 0;
  for (let [d, o] of n.entries()) {
    if (o === void 0) continue;
    let l = o.byFold.get(t);
    if (l !== void 0) return { index: d, enabled: l.enabled, key: l.key };
    if (s !== void 0) {
      let c = o.byFold.get(s);
      if (c !== void 0 && !c.enabled) return { index: d, enabled: false, key: c.key };
    }
  }
  return;
}
function Xgn(e, n) {
  return zgn(e, n)?.enabled;
}
function mJn(e, n, t) {
  return Xgn(e, n) ?? t !== false;
}
function Ygn(e, n, t) {
  return OTe(e, n)?.enabled ?? t !== false;
}
function __t(e) {
  return uc(e) || e === Uh;
}
function LM(e) {
  return e.scope === "project" && e.source.endsWith(`@${nu}`);
}
var JOe = {
  policySettings: "managed",
  userSettings: "user",
  projectSettings: "project",
  localSettings: "local",
  flagSettings: "flag",
};
function Vt(e) {
  if (e.includes("@")) {
    let n = e.split("@");
    return { name: n[0] || "", marketplace: n[1] };
  }
  return { name: e };
}
function Zz(e) {
  let n = e.lastIndexOf("@");
  if (n < 0) return { name: e };
  return { name: e.slice(0, n), marketplace: e.slice(n + 1) };
}
function KX(e) {
  let n = BF(e),
    t = Zz(n);
  return uc(t.marketplace) ? t : Vt(n);
}
function y_t(e, n) {
  return n ? `${e}@${n}` : e;
}
function Ud(e) {
  let n = e.lastIndexOf("@");
  if (n < 0) return;
  let t = e.slice(n + 1);
  return t === "" ? void 0 : t;
}
function Vy(e, n) {
  return e === n || e.toLowerCase() === n.toLowerCase();
}
function fp(e) {
  return e.normalize("NFC").toLowerCase();
}
function NI(e, n) {
  return e.find((t) => t === n) ?? e.find((t) => Vy(t, n));
}
function Jgn(e, n) {
  return e.filter((t) => Vy(Vt(t).name, n));
}
function Pp(e) {
  return e !== void 0 && Vqt.has(e.toLowerCase());
}
function S_t(e) {
  return Pp(e) || (e !== void 0 && lYe.has(e.toLowerCase()));
}
var R = new Set([
  "anthropic-skills",
  "core",
  "cowork-plugin-management",
  "data",
  "design",
  "engineering",
  "enterprise-search",
  "figma",
  "finance",
  "human-resources",
  "internal-apps",
  "legal",
  "marketing",
  "operations",
  "product-management",
  "productivity",
  "sales",
  "small-business",
  "ai-governance-legal",
  "cocounsel-legal",
  "commercial-legal",
  "corporate-legal",
  "employment-legal",
  "ip-legal",
  "law-student",
  "legal-builder-hub",
  "legal-clinic",
  "litigation-legal",
  "privacy-legal",
  "product-legal",
  "regulatory-legal",
  "healthcare",
  "fhir-developer",
  "npi-registry",
  "icd10-codes",
  "pubmed",
  "prior-auth-review",
  "cms-coverage",
  "clinical-trial-protocol",
  "documents",
]);
function b_t(e, n) {
  return S(n) && R.has(e);
}
var P = { user: "userSettings", project: "projectSettings", local: "localSettings" };
function Gv(e) {
  if (e === "managed") throw Error("Cannot install plugins to managed scope");
  return P[e];
}
function Ujt(e) {
  return JOe[e];
}
var Nk = 1e6;
function A(e) {
  if (e.loadedFrom === void 0) return Boolean(e.isMcp);
  switch (e.loadedFrom) {
    case "skills":
    case "commands_DEPRECATED":
    case "plugin":
    case "managed":
    case "bundled":
      return false;
    case "syncedSkills":
    case "mcp":
    case "memoryStore":
      return true;
  }
}
function Vue(e) {
  if (e.loadedFrom === "syncedSkills") return !Qgn();
  return A(e);
}
function Qgn() {
  return Boolean(a.CLAUDE_CODE_REMOTE) || Boolean(a.CLAUDE_CODE_IS_COWORK) || V6();
}
function w_t() {
  return {
    hooks: void 0,
    allowedTools: [],
    disallowedTools: [],
    executionContext: void 0,
    agent: void 0,
    background: void 0,
    model: void 0,
    effort: void 0,
    shell: void 0,
    paths: void 0,
    fallback: void 0,
    createdBy: void 0,
    displayName: void 0,
    metadata: void 0,
  };
}
function QOe(e) {
  return {
    description: T_t(e.description),
    argumentHint: ZOe(e.argumentHint),
    whenToUse: ZOe(e.whenToUse),
    argumentNames: e.argumentNames.map(T_t),
  };
}
function ZOe(e) {
  return e === void 0 ? void 0 : T_t(e);
}
function T_t(e) {
  return VX(An(e));
}
function E_t(e) {
  return VX(
    e.replace(/\p{Cc}/gu, (n) =>
      n === "\t" ||
      n ===
        `
` ||
      n === "\r"
        ? n
        : "",
    ),
  );
}
class x {
  loaderSide = null;
  register(e) {
    this.loaderSide = e;
  }
}
var M = new x();
function gJn(e) {
  M.register(e);
}
function A_t() {
  let e = M.loaderSide;
  if (!e) throw Error("MCP skill builders not registered \u2014 loadSkillsDir.ts has not been evaluated yet");
  return e;
}
import { createHash as N } from "crypto";
function $5e(e) {
  return e.configErrorReason === "url_empty" || (!e.configError && "url" in e && e.url.trim() === "");
}
function MM(e) {
  let {
      scope: n,
      pluginSource: t,
      pluginPath: i,
      agentSource: s,
      declaredIn: d,
      configError: o,
      configErrorReason: l,
      ...c
    } = e,
    r = c;
  if (
    (delete r.tools,
    delete r.discoveryCache,
    delete r.cachedInitResponse,
    delete r.cachedDiscoverResponse,
    delete r.discoverSupport,
    delete r.eligible,
    delete r.ineligibleReason,
    delete r.enterpriseManaged,
    r.type === "stdio" || (r.type === void 0 && "command" in r))
  )
    (r.type = "stdio"), (r.args = r.args ?? []);
  if ($5e(e)) r.unconfigured = true;
  if (s !== void 0) r.agentSource = s;
  let E = b(r, (h, u) => {
    if (u && typeof u === "object" && !Array.isArray(u)) {
      let p = u,
        f = {};
      for (let g of Object.keys(p).sort()) f[g] = p[g];
      return f;
    }
    return u;
  });
  return N("sha256").update(E).digest("hex").slice(0, 16);
}
function ur(e, n) {
  return `${e}-${MM(n)}`;
}
function FI(e, n, t) {
  return import.meta.require("/$bunfs/root/chunk-qadpp1g1.js").mcpClientModule().invokeToolRaw(e.client, n, t);
}
function eLe(e, n, t) {
  return import.meta.require("/$bunfs/root/chunk-qadpp1g1.js").mcpClientModule().readResourceRaw(e.client, n, t);
}
function C_t(e, n) {
  return import.meta.require("/$bunfs/root/chunk-qadpp1g1.js").mcpClientModule().listToolsRaw(e.client, n);
}
function hH(e, n, t) {
  import.meta.require("/$bunfs/root/chunk-qadpp1g1.js").mcpClientModule().onMcpNotification(e, n, t);
}
function i3(e, n) {
  Ji(e.client).onclose = n;
}
function hJn(e, n) {
  let t = Ji(e.client),
    i = t.onclose;
  t.onclose = () => {
    i?.(), n();
  };
}
function _Jn(e) {
  let n = Ji(e.client);
  return n != null && "transport" in n && n.transport === void 0;
}
function yJn(e, n) {
  return Ji(e.client).notification(n);
}
function SJn(e, n) {
  Ji(e.client)?.transport?.onmessage?.(n);
}
export {
  N5e,
  h_t,
  F5e,
  zE,
  VX,
  _u,
  PTe,
  Nm,
  nu,
  um,
  Uh,
  uc,
  BF,
  Ggn,
  Dne,
  MI,
  zgn,
  Vgn,
  Kgn,
  DTe,
  OTe,
  Xgn,
  mJn,
  Ygn,
  __t,
  LM,
  JOe,
  Vt,
  Zz,
  KX,
  y_t,
  Ud,
  Vy,
  fp,
  NI,
  Jgn,
  Pp,
  S_t,
  b_t,
  Gv,
  Ujt,
  Nk,
  Vue,
  Qgn,
  w_t,
  QOe,
  ZOe,
  T_t,
  E_t,
  gJn,
  A_t,
  $5e,
  MM,
  ur,
  FI,
  eLe,
  C_t,
  hH,
  i3,
  hJn,
  _Jn,
  yJn,
  SJn,
};
