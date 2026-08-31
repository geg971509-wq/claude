// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { nc, CR } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Me, bo } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { OV, HSn, I, $l } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { ol } from "/$bunfs/root/chunk-gcks6mn0.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { eEn, xNe } from "/$bunfs/root/chunk-988p40e0.js";
import { hr, Ne, jo } from "/$bunfs/root/chunk-82w4mtvq.js";
import { pc } from "/$bunfs/root/chunk-1pn2pk9v.js";
function BLe(e, r) {
  let t = /^claude-([a-z]+)-(\d+(?:-\d+)*)$/.exec(e),
    i = t?.[1],
    l = t?.[2];
  if (!i || !l) return !1;
  let o = r.find(([s]) => s === i)?.[1];
  if (!o) return !1;
  let c = l.split("-").map(Number);
  for (let s = 0; s < Math.max(c.length, o.length); s++) {
    let f = (c[s] ?? 0) - (o[s] ?? 0);
    if (f !== 0) return f > 0;
  }
  return !0;
}
var d = "force";
function u() {
  try {
    if (HSn()) return !1;
    if (Ne() !== "firstParty") return !1;
    let e = xNe("ENABLE_TOOL_SEARCH");
    if (e === d) return !0;
    if (eEn() !== d) return !1;
    if (Me(xNe("CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS"))) return !1;
    return e === void 0 || !p(e);
  } catch (e) {
    return n(`isToolSearchForceOverride: settings read failed: ${e}`, { level: "error" }), !1;
  }
}
function p(e) {
  if (e.startsWith("auto:")) {
    let r = ol(e.slice(5));
    return !isNaN(r) && r >= 100;
  }
  return bo(e);
}
function UKe() {
  return OV() && !u();
}
function __n(e) {
  if (!e.startsWith("auto:")) return null;
  let r = e.slice(5),
    t = ol(r);
  if (isNaN(t)) return n(`Invalid ENABLE_TOOL_SEARCH value "${e}": expected auto:N where N is a number.`), null;
  return Math.max(0, Math.min(100, t));
}
function m(e) {
  if (!e) return !1;
  return e === "auto" || e.startsWith("auto:");
}
function BKe() {
  if (UKe()) return "standard";
  if (u()) return "tst";
  let e = process.env.ENABLE_TOOL_SEARCH,
    r = e ? __n(e) : null;
  if (r === 0) return "tst";
  if (r === 100) return "standard";
  if (m(e)) return "tst-auto";
  if (Me(e)) return "tst";
  if (bo(e)) return "standard";
  return "tst";
}
var E = ["claude-3-5-haiku", "claude-3-haiku"],
  _ = [
    ["opus", [4, 5]],
    ["sonnet", [4, 5]],
    ["haiku", [4, 5]],
  ];
function l6(e) {
  if (Ne() !== "vertex") return !1;
  let r = hr(e).replace(/[@-]\d{8}$/, "");
  if (/^claude-3(-|$)/.test(r)) return !0;
  return /^claude-(opus|sonnet|haiku)-\d/.test(r) && !BLe(r, _);
}
function g() {
  try {
    let e = I("tengu_tool_search_unsupported_models", null);
    if (Array.isArray(e)) return e;
  } catch {}
  return E;
}
var h = [];
function A(e) {
  if (e === null || Array.isArray(e) || typeof e !== "object") return e;
  let r = e,
    t = nc(),
    i = t !== void 0 ? t : CR();
  if (typeof i === "string") {
    let l = i.toLowerCase();
    for (let o of Object.keys(r)) if (o !== "*" && o.length > 0 && l.includes(o.toLowerCase())) return r[o];
  }
  return r["*"];
}
function PQn() {
  let e = new Set();
  try {
    let r = A(I("tengu_non_deferrable_builtins", null));
    if (Array.isArray(r)) {
      for (let t of r) if (typeof t === "string") e.add(t);
    }
  } catch {}
  try {
    let r = $l()?.non_deferrable_builtins;
    if (Array.isArray(r)) {
      for (let t of r) if (typeof t === "string") e.add(t);
    }
  } catch {}
  if (e.size === 0) return h;
  return [...e];
}
function c6(e) {
  let r = e.toLowerCase(),
    t = g();
  for (let i of t) if (r.includes(i.toLowerCase())) return !1;
  return !0;
}
function b_() {
  let e = BKe();
  if (e === "standard") {
    if (pc().claim("tool_search_optimistic_decision"))
      n(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${a.ENABLE_TOOL_SEARCH}, result=false`);
    return !1;
  }
  if (!a.ENABLE_TOOL_SEARCH && !u() && Ne() === "firstParty" && !jo()) {
    if (pc().claim("tool_search_optimistic_decision"))
      n(
        `[ToolSearch:optimistic] disabled: ANTHROPIC_BASE_URL=${a.ANTHROPIC_BASE_URL} is not a first-party Anthropic host. Set ENABLE_TOOL_SEARCH=true (or auto / auto:N) if your proxy forwards tool_reference blocks.`,
      );
    return !1;
  }
  if (pc().claim("tool_search_optimistic_decision"))
    n(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${a.ENABLE_TOOL_SEARCH}, result=true`);
  return !0;
}
function jKe() {
  return I("tengu_surface_failed_mcp_servers", !0);
}
export { UKe, BLe, __n, BKe, l6, PQn, c6, b_, jKe };
