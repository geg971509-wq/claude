// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { K } from "/$bunfs/root/chunk-f9h0bg01.js";
import { E, X } from "/$bunfs/root/chunk-ypdw393e.js";
import { b, le, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { an } from "/$bunfs/root/chunk-c47snwm2.js";
import { Ut } from "/$bunfs/root/chunk-ntyhd04p.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { Ac } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Mo, Qre, ob } from "/$bunfs/root/chunk-988p40e0.js";
import { tT, Dqe, kp } from "/$bunfs/root/chunk-zze8764r.js";
import { i, v, q, _e, H, f, De, oe, N } from "/$bunfs/root/chunk-saay52v7.js";
import { mkdir as D, open as k } from "fs/promises";
import { join as d } from "path";
var h = "image-cache",
  F = 200;
function y() {
  return d(be(), h, K());
}
async function O() {
  let e = y();
  await D(e, { recursive: !0 });
}
function z(e, t) {
  let o = t.split("/")[1] || "png";
  return d(y(), `${e}.${o}`);
}
function xZ(e, t) {
  if (e.type !== "image") return null;
  let o = z(e.id, e.mediaType || "image/png");
  return t((r) => g(r, e.id, o)), o;
}
async function IZ(e, t) {
  let o = await C(e);
  if (o) t((r) => g(r, e.id, o));
  return o;
}
async function t6n(e, t) {
  let o = new Map();
  for (let [r, a] of Object.entries(e))
    if (a.type === "image") {
      let s = await C(a);
      if (s) o.set(Number(r), s);
    }
  if (o.size > 0)
    t((r) => {
      let a = r;
      for (let [s, l] of o) a = g(a, s, l);
      return a;
    });
  return o;
}
async function C(e) {
  if (e.type !== "image") return null;
  try {
    await O();
    let t = z(e.id, e.mediaType || "image/png"),
      o = await k(t, "w", 384);
    try {
      await o.writeFile(e.content, { encoding: "base64" }), await o.datasync();
    } finally {
      await o.close();
    }
    return n(`Stored image ${e.id} to ${t}`), t;
  } catch (t) {
    return n(`Failed to store image: ${t}`), null;
  }
}
function g(e, t, o) {
  if (e.get(t) === o) return e;
  let r = new Map(e);
  if (!r.has(t))
    while (r.size >= F) {
      let a = r.keys().next().value;
      if (a === void 0) break;
      r.delete(a);
    }
  return r.set(t, o), r;
}
async function n6n() {
  let e = le(),
    t = d(be(), h),
    o = K();
  try {
    let r;
    try {
      r = await e.readdir(t);
    } catch {
      return;
    }
    for (let a of r) {
      if (a.name === o) continue;
      let s = d(t, a.name);
      try {
        await e.rm(s, { recursive: !0, force: !0 }), n(`Cleaned up old image cache: ${s}`);
      } catch {}
    }
    try {
      if ((await e.readdir(t)).length === 0) await e.rmdir(t);
    } catch {}
  } catch {}
}
import { join as A } from "path";
var w = ["cc", "ccr", "ccd"],
  DDt = 2097152,
  V = /^(?:W\/)?"[!#-~\x80-\xff]*"$/,
  L = 256;
function ODt(e) {
  return typeof e === "string" && e.length > 0 && e.length <= L && V.test(e);
}
var _ = m(() =>
    f({
      title: i().nullish(),
      text: i().nullish(),
      cta: f({ copy: i().nullish(), intent: i().nullish(), redirect_hint: i().nullish() }).loose().nullish(),
      is_dismissible: q().nullish(),
    }).loose(),
  ),
  x = m(() => f({ id: i().optional(), name: i().optional(), description: i().optional() }).loose()),
  B = m(() =>
    f({
      type: i().optional(),
      description: i().optional(),
      effort_options: H(x()).optional(),
      mode_options: H(x()).optional(),
      always_on: q().optional(),
    }).loose(),
  ),
  W = m(() =>
    f({
      max_input_tokens: v().optional(),
      max_output_tokens: v().optional(),
      effort_levels: H(i()).optional(),
      default_effort: i().optional(),
      capabilities: H(i()).optional(),
      family: i().optional(),
      knowledge_cutoff: i().optional(),
    }).loose(),
  ),
  Y = m(() =>
    f({
      id: i(),
      name: i().optional(),
      short_name: i().optional(),
      description: i().optional(),
      section: i().optional(),
      disabled: q().optional(),
      confidential: q().optional(),
      notice: _().nullish(),
      selection_notice: _().nullish(),
      badge: f({ message: i().optional(), variant: i().optional() }).loose().nullish(),
      tooltip: f({ content: i().optional() }).loose().nullish(),
      capabilities: De(i(), q()).optional(),
      thinking: B().optional(),
      fast_mode: f({}).loose().optional(),
      hard_limit: v().optional(),
      context_window: v().optional(),
      quick_select: q().optional(),
      runtime: W().optional(),
    }).loose(),
  ),
  p = m(() =>
    f({ id: i(), models: H(Y()).optional(), description: i().optional(), auto_compact_window: v().optional() }).loose(),
  ),
  u = m(() =>
    f({
      id: i(),
      model: i().optional(),
      selection_source: i().optional(),
      org_enforced_default_model: i().optional(),
      thinking: _e().optional(),
      thinking_by_model: _e().optional(),
    }).loose(),
  ),
  r6n = m(() => f({ model_selector_state: H(u()).optional(), model_selector_config: H(p()).optional() }).loose());
function o6n(e, t) {
  let o = e.model_selector_config?.find((a) => a.id === t);
  if (!o) return null;
  let r = e.model_selector_state?.find((a) => a.id === t);
  return { surface: t, config: o, ...(r && { state: r }) };
}
var P = 1,
  T = 3600000,
  M = 0.1,
  J = m(() =>
    f({
      version: N(P),
      fetchedAt: v(),
      staleAt: v(),
      etag: i().refine(ODt).optional(),
      catalog: f({ surface: oe(w), config: p(), state: u().optional() }).nullable(),
    }),
  );
function LDt() {
  return A(be(), "cache", "model-catalog");
}
function I(e, t) {
  return A(LDt(), `${e}-${t}.json`);
}
function c() {
  return Ac().servedCatalogByKey;
}
function MDt(e, t) {
  return `${e}:${t}`;
}
var R = DDt + 4096;
async function i6n(e, t) {
  let o = MDt(e, t),
    r = c().get(o);
  if (r !== void 0) return r ?? void 0;
  let a = I(e, t),
    s;
  try {
    s = await an().readRange(a, 0, R + 1);
  } catch (S) {
    if (!X(S)) n(`[servedCatalog] cache read failed: ${E(S) ?? "unknown"}`);
    c().set(o, null);
    return;
  }
  let l = s.length > R ? void 0 : J().safeParse(Ut(s.toString("utf8"), !1));
  if (!l?.success || (l.data.catalog !== null && l.data.catalog.surface !== t)) {
    n(`[servedCatalog] cache file ${l === void 0 ? "oversized" : "invalid"}, discarding`), c().set(o, null);
    try {
      await an().delete(a);
    } catch {}
    return;
  }
  return c().set(o, l.data), l.data;
}
async function Ern(e, t, o) {
  c().set(MDt(e, t), o);
  try {
    let r = an();
    await r.mkdir(LDt()), await r.atomicWrite(I(e, t), b(o), 384);
  } catch (r) {
    n(`[servedCatalog] cache write failed: ${E(r) ?? "unknown"}`);
  }
}
function s6n({ catalog: e, etag: t, now: o = Date.now(), random: r = Math.random() }) {
  return { version: P, fetchedAt: o, staleAt: j(o, r), ...(t !== void 0 && { etag: t }), catalog: e };
}
function a6n(e, t = Date.now(), o = Math.random()) {
  return { ...e, fetchedAt: t, staleAt: j(t, o) };
}
function j(e, t) {
  let o = 1 + M * (2 * t - 1);
  return e + Math.round(T * o);
}
function l6n(e, t = Date.now()) {
  let o = e.fetchedAt + T * (1 + M);
  return t < e.fetchedAt || t >= e.staleAt || e.staleAt > o;
}
function eG() {
  let e = ob(),
    t = Dqe.flatMap((o) => kp(o).errors.map((r) => (r.file ? r : { ...r, file: tT(o) })));
  return { settings: e.settings, errors: [...e.errors, ...t] };
}
function d_e() {
  let e = Mo("localSettings");
  return [...eG().errors.filter((o) => !o.mcpErrorMetadata && o.severity !== "warning" && o.file !== e), ...Qre()];
}
export { xZ, IZ, t6n, n6n, DDt, ODt, r6n, o6n, LDt, MDt, i6n, Ern, s6n, a6n, l6n, eG, d_e };
