// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ce } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { WNe } from "/$bunfs/root/chunk-6k63g5t6.js";
import { ye } from "/$bunfs/root/chunk-988p40e0.js";
import { Et } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { eo } from "/$bunfs/root/chunk-bj904w9w.js";
import { Qe, CC } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { ryt, GTe } from "/$bunfs/root/chunk-2n1hsggr.js";
import { isAbsolute as j } from "path";
function S() {
  return { sources: m(), read: ye, rules: GTe };
}
var m = () => {
  let { gateProject: t } = ryt(),
    e = CC({ onIndeterminate: "tracked" });
  return [
    ...(t ? [["projectSettings", ".claude/settings.json"]] : []),
    ...(e ? [["localSettings", ".claude/settings.local.json"]] : []),
  ];
};
function b0t(t) {
  if (t === null) return false;
  if (t.statusLine) return true;
  if (t.fileSuggestion) return true;
  if (t.subagentStatusLine) return true;
  if (!t.hooks) return false;
  for (let e of Object.values(t.hooks)) if (e.length > 0) return true;
  return false;
}
function tXt(
  t = {
    sources: [
      ["projectSettings", ".claude/settings.json"],
      ["localSettings", ".claude/settings.local.json"],
    ],
    read: ye,
    rules: GTe,
  },
) {
  let e = [];
  for (let [s, r] of t.sources) if (b0t(t.read(s))) e.push(r);
  return e;
}
function l(t) {
  return t.some(
    (e) => e.ruleBehavior === "allow" && (e.ruleValue.toolName === Qe || e.ruleValue.toolName.startsWith(Qe + "(")),
  );
}
var R = /[\x00-\x1f\x7f-\x9f\u2028\u2029]|\p{Cf}/gu,
  a = 60;
function d(t) {
  let e = Et(t).replace(R, "").trim();
  return e.length > a ? `${ce(e, a)}\u2026` : e;
}
var x = new Set([Qe, "PowerShell", "Write", "Edit", "MultiEdit", "NotebookEdit", "WebFetch", "WebSearch"]);
function g(t) {
  let { toolName: e, ruleContent: s } = t.ruleValue,
    r = x.has(e) || e.startsWith("mcp__"),
    i = s === void 0;
  if (r) return i ? 0 : 1;
  return i ? 2 : 3;
}
function JRe(t = S()) {
  let e = [],
    s = [];
  for (let [o, n] of t.sources) {
    let u = t.rules(o).filter((h) => h.ruleBehavior === "allow");
    if (u.length > 0) e.push(n), s.push(...u);
  }
  let r = s.length;
  s.sort((o, n) => g(o) - g(n));
  let i = new Set(),
    c = [];
  for (let o of s) {
    let n = d(eo(o.ruleValue));
    if (n.length > 0 && !i.has(n)) i.add(n), c.push(n);
  }
  return { rules: c, sources: e, rawCount: r };
}
function p(t) {
  if (j(t) || t.startsWith("~")) return 0;
  if (t.includes("..")) return 1;
  return 2;
}
function QRe(t = S()) {
  let e = [],
    s = [];
  for (let [o, n] of t.sources) {
    let u = t.read(o)?.permissions?.additionalDirectories ?? [];
    if (u.length > 0) e.push(n), s.push(...u);
  }
  let r = s.length,
    i = new Set(),
    c = [];
  for (let o of s) {
    let n = d(o);
    if (n.length > 0 && !i.has(n)) i.add(n), c.push(n);
  }
  return c.sort((o, n) => p(o) - p(n)), { dirs: c, sources: e, rawCount: r };
}
function nXt() {
  let t = [],
    e = GTe("projectSettings");
  if (l(e)) t.push(".claude/settings.json");
  let s = GTe("localSettings");
  if (l(s)) t.push(".claude/settings.local.json");
  return t;
}
function Eb(t, e) {
  if (t.length === 0) return "";
  let s = e === 0 ? void 0 : e;
  if (!s || t.length <= s) {
    if (t.length === 1) return t[0];
    if (t.length === 2) return `${t[0]} and ${t[1]}`;
    let c = t.at(-1);
    return `${t.slice(0, -1).join(", ")}, and ${c}`;
  }
  let r = t.slice(0, s),
    i = t.length - s;
  if (r.length === 1) return `${r[0]} and ${i} more`;
  return `${r.join(", ")}, and ${i} more`;
}
function w0t(t) {
  return !!t?.otelHeadersHelper;
}
function rXt() {
  let t = [],
    e = ye("projectSettings");
  if (w0t(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (w0t(s)) t.push(".claude/settings.local.json");
  return t;
}
function oXt() {
  let t = [];
  if (ye("projectSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.json");
  if (ye("localSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.local.json");
  return t;
}
function T0t(t) {
  return !!t?.apiKeyHelper;
}
function iXt() {
  let t = [],
    e = ye("projectSettings");
  if (T0t(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (T0t(s)) t.push(".claude/settings.local.json");
  return t;
}
function E0t(t) {
  return !!(t?.awsAuthRefresh || t?.awsCredentialExport);
}
function sXt() {
  let t = [],
    e = ye("projectSettings");
  if (E0t(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (E0t(s)) t.push(".claude/settings.local.json");
  return t;
}
function A0t(t) {
  return !!t?.gcpAuthRefresh;
}
function aXt() {
  let t = [],
    e = ye("projectSettings");
  if (A0t(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (A0t(s)) t.push(".claude/settings.local.json");
  return t;
}
function C0t(t) {
  return !!t?.proxyAuthHelper;
}
function lXt() {
  let t = [],
    e = ye("projectSettings");
  if (C0t(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (C0t(s)) t.push(".claude/settings.local.json");
  return t;
}
function f(t) {
  if (!t?.env) return false;
  return Object.entries(t.env).some(([e, s]) => !WNe(e, s));
}
function cXt() {
  let t = [],
    e = ye("projectSettings");
  if (f(e)) t.push(".claude/settings.json");
  let s = ye("localSettings");
  if (f(s)) t.push(".claude/settings.local.json");
  return t;
}
export { b0t, tXt, JRe, QRe, nXt, Eb, w0t, rXt, oXt, T0t, iXt, E0t, sXt, A0t, aXt, C0t, lXt, cXt };
