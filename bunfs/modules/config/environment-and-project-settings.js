// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Me } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { ai, tr, bS } from "/$bunfs/root/chunk-56sxk8k2.js";
var f = /^[a-z]{2,}(?:-[a-z0-9]+){0,4}$/i;
function m(e) {
  return !!e && f.test(e);
}
function j4(e) {
  return m(e) ? e : void 0;
}
var l = /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?\d+$/,
  c = /^[+-]?\d{1,3}([_,\u00A0\u202F ])\d{3}(?:\1\d{3})*$/,
  E = /[_,\u00A0\u202F ]/g;
function N(e) {
  if (e.length <= 32) {
    if (l.test(e)) {
      let n = Number(e);
      return Number.isInteger(n) ? n : NaN;
    }
    if (c.test(e)) return parseInt(e.replace(E, ""), 10);
  }
  return;
}
function ol(e) {
  let n = String(e).trim();
  return N(n) ?? parseInt(n, 10);
}
function kR(e) {
  let n = Number(e);
  if (!Number.isNaN(n)) return n;
  let r = String(e).trim();
  return r.length <= 32 && c.test(r) ? parseInt(r.replace(E, ""), 10) : NaN;
}
import { homedir as g } from "os";
import { basename as R, dirname as O, join as i, resolve as t } from "path";
var d = [
  ["claude-3-5-sonnet", "VERTEX_REGION_CLAUDE_3_5_SONNET"],
  ["claude-3-7-sonnet", "VERTEX_REGION_CLAUDE_3_7_SONNET"],
  ["claude-sonnet-4-5", "VERTEX_REGION_CLAUDE_4_5_SONNET"],
  ["claude-sonnet-4-6", "VERTEX_REGION_CLAUDE_4_6_SONNET"],
  ["claude-3-5-haiku", "VERTEX_REGION_CLAUDE_3_5_HAIKU"],
  ["claude-haiku-4-5", "VERTEX_REGION_CLAUDE_HAIKU_4_5"],
  ["claude-opus-4-1", "VERTEX_REGION_CLAUDE_4_1_OPUS"],
  ["claude-opus-4-5", "VERTEX_REGION_CLAUDE_4_5_OPUS"],
  ["claude-opus-4-6", "VERTEX_REGION_CLAUDE_4_6_OPUS"],
  ["claude-opus-4-7", "VERTEX_REGION_CLAUDE_4_7_OPUS"],
  ["claude-opus-4-8", "VERTEX_REGION_CLAUDE_4_8_OPUS"],
  ["claude-sonnet-4", "VERTEX_REGION_CLAUDE_4_0_SONNET"],
  ["claude-sonnet-5", "VERTEX_REGION_CLAUDE_5_SONNET"],
  ["claude-fable-5", "VERTEX_REGION_CLAUDE_FABLE_5"],
  ["claude-opus-4", "VERTEX_REGION_CLAUDE_4_0_OPUS"],
  ["claude-opus-5", "VERTEX_REGION_CLAUDE_5_OPUS"],
];
function s() {
  return process.env.CLAUDE_CONFIG_DIR;
}
var be = ai(() => (s() ?? i(g(), ".claude")).normalize("NFC"), s);
function lme(e) {
  return t(be()) === t(e);
}
function cme() {
  return i(be(), "teams");
}
function _() {
  return process.env.CLAUDE_CODE_PROJECT_DIR_NAME;
}
var D = /^[A-Za-z0-9_-]{1,64}$/,
  C = /^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;
function Gxn(e) {
  if (!e || !D.test(e) || C.test(e)) return;
  return e;
}
function I() {
  return `${s() ?? ""}\x00${_() ?? ""}`;
}
var Jlr = ai(() => (s() ? Gxn(_()) : void 0), I);
function Y5(e) {
  let n = be();
  if (t(e) === t(n)) return true;
  return p(e) === p(n);
}
function p(e) {
  let n = t(e),
    r = O(n),
    o = bS(r) ?? r;
  return tr(i(o, R(n)));
}
function a$e(e) {
  let n = process.env.NODE_OPTIONS;
  if (!n) return false;
  return n.split(/\s+/).includes(e);
}
function ume(e, n) {
  if (e === void 0) return n;
  let r = ol(e);
  return Number.isNaN(r) ? n : r;
}
function Qlr(e) {
  if (e !== void 0) return e;
  let n = process.env.CLAUDE_CODE_MAX_TURNS?.trim();
  if (!n) return;
  let r = kR(n);
  if (!Number.isInteger(r) || r <= 0) throw Error(`CLAUDE_CODE_MAX_TURNS must be a positive integer; got "${n}"`);
  return r;
}
function a(e) {
  let n = process.argv.indexOf("--");
  return (n === -1 ? process.argv : process.argv.slice(0, n)).includes(e);
}
function Co() {
  return Me(process.env.CLAUDE_CODE_SIMPLE) || a("--bare");
}
function Dr() {
  return Me(process.env.CLAUDE_CODE_SAFE_MODE) || a("--safe-mode");
}
function xj() {
  return Me(process.env.CLAUDE_CODE_RESTRICTED);
}
function _f() {
  return a("--safe-mode") ? "restart without --safe-mode" : "unset CLAUDE_CODE_SAFE_MODE";
}
function eZe() {
  return Me(process.env.CLAUDE_CODE_SUPERVISED);
}
function Zlr(e) {
  let n = {};
  if (e)
    for (let r of e) {
      let [o, ...u] = r.split("=");
      if (!o || u.length === 0)
        throw Error(
          `Invalid environment variable format: ${r}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`,
        );
      n[o] = u.join("=");
    }
  return n;
}
function A5t() {
  return j4(process.env.CLOUD_ML_REGION?.trim()) || "us-east5";
}
function Cve(e) {
  switch (e) {
    case "global":
      return "https://aiplatform.googleapis.com";
    case "us":
    case "eu":
      return `https://aiplatform.${e}.rep.googleapis.com`;
    default:
      return `https://${e}-aiplatform.googleapis.com`;
  }
}
function ecr() {
  return Me(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR);
}
function t_() {
  return false;
}
function YO() {
  return false;
}
function tcr() {
  return { namespace: void 0, cluster: void 0 };
}
function J5(e) {
  if (e) {
    let n = d.find(([r]) => e.startsWith(r));
    if (n) return j4(process.env[n[1]]?.trim()) || A5t();
  }
  return A5t();
}
export {
  j4,
  ol,
  kR,
  be,
  lme,
  cme,
  Gxn,
  Jlr,
  Y5,
  a$e,
  ume,
  Qlr,
  Co,
  Dr,
  xj,
  _f,
  eZe,
  Zlr,
  A5t,
  Cve,
  ecr,
  t_,
  YO,
  tcr,
  J5,
};
