// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $9, $Zt, $he, $w, A9, Ann, Atn, B9, BX, BYe, BZt, Btn, C9e, Cnn, D9e, DX, DXe, DZt, Dhe, E9e, Ef, Enn, F9, FZt, Fhe, GX, GYe, GZt, Gen, Ghe, Gj, Gnn, Gtn, H9, HZt, Hd, I8, IX, IZt, Ib, Ihe, J1, JPe, Jtn, Ken, Kj, Ktn, LP, LXe, Lhe, MP, MZt, Mb, Mm, Mnn, N9, NK, NL, NZt, Nw, Ob, P9e, PZt, Pd, Ptn, Qj, Qtn, Rtn, SC, Sbe, T5e, TL, TYe, TZt, U9, UU, UZt, Ub, Uw, V9, VXe, VYe, Ven, Vj, Vtn, WZt, Wj, Wnn, X8, XZt, Xhe, Xj, Xtn, Y8, Yen, Yj, Ytn, _9e, _ee, _he, _i, _k, a8, aBt, aGe, aL, aQ, ann, atn, b5e, bbe, bnn, c8, cC, cW, dX, een, enn, etn, fnn, g9e, g_, hC, iBt, iQ, j9, jZt, jtn, ju, k8, l8, lQ, mL, m_, mft, mpe, n8, o9e, oS, onn, q9, qYe, qZt, qen, qhe, qtn, rE, sBt, tO, ten, tnn, tsn, ttn, u9e, uC, uQ, uS, unn, w5e, wC, wZt, wbe, wh, xP, xZt, xtn, y8, y9e, yGe, yL, ybe, z9, zX, zYe, zZt, zhe } from "/$bunfs/root/modules/chunk-zze8764r/core.js";
import { $Xe, $hn, $ht, Ae, Ay, BV, BXe, Bde, Bdn, Bn, Ctn, Cyt, D, DOe, DU, DV, Dn, Dte, ECt, EI, En, Eoe, Etn, Fbt, Fn, Ft, G, GBt, GEt, GFe, GI, GN, Gfn, Gt, He, Hr, I9e, IXe, JJn, JNe, JTe, Jt, KE, KV, Kk, Kpe, LU, Le, Lv, M6, MC, MU, Mbt, Mte, NP, Ne, Ns, OXe, On, Ot, Ote, Q, Q8e, QJn, QNe, QO, QSn, Qa, Qbe, Qdn, Qi, Qo, R, R5n, R7e, Rc, Re, S_, Se, Sm, Snn, Sp, Sre, St, TI, TLe, TT, Td, Tt, Ude, Udn, Ug, Ur, Utn, V, W5, WTe, Wce, Whn, Ww, XXe, X_t, Xfe, Xy, YI, YJn, Y_t, Ye, Yl, ZAn, Ze, _C, _Tt, _a, _nn, _r, a, a$, aA, aM, aWt, ao, ayt, b, bTe, bYe, bmt, bre, bt, c, c5e, cM, cs, cw, dI, dV, dgn, eb, ee, eo, f3, fa, fc, g, g5n, gm, h, h5n, hTt, he, hu, iO, ide, ie, imt, jdn, jf, jhn, jo, k0n, k5n, kL, kd, km, l, l9e, lH, lW, le, lne, lyt, m9e, mX, n, nQ, nc, ne, nwe, o6, oQn, osr, owe, p, p1e, p9e, pKe, pg, pl, pt, pze, qBt, qN, qTe, qce, qg, qne, rR, r_, ra, rf, rn, s, sA, sH, sKe, sW, sWt, s_e, se, smt, spe, tL, tQ, tR, tY, te, twe, tx, u2t, uOe, uf, ufe, ve, vf, w6, wLe, wb, wr, wu, xX, xa, xre, y, ye, ynn, yr, yt, yue, yze, z2, zBt, zTe, za } from "/$bunfs/root/modules/chunk-zze8764r/prelude.js";
import { IGe, Ia, Tee, VH, YH, qH, uu, v6 } from "/$bunfs/root/modules/chunk-zze8764r/functions-004.js";
import { $3, B3, Lj, Nj, U3, VVe, W3, YVe, _Ge, ahe, eYe, ihe, j3, lL, lhe, mhe, nYe, ohe, pd, rYe, rhe, rle, she } from "/$bunfs/root/modules/chunk-zze8764r/functions-005.js";
import { By, Gl } from "/$bunfs/root/modules/chunk-zze8764r/functions-007.js";
import { hSe } from "/$bunfs/root/modules/chunk-zze8764r/functions-012.js";
import { oC } from "/$bunfs/root/modules/chunk-zze8764r/functions-017.js";
import { Q7, qUt } from "/$bunfs/root/modules/chunk-zze8764r/functions-018.js";
import { Ko, zr } from "/$bunfs/root/modules/chunk-zze8764r/functions-019.js";

function lsn(e) {
  return Nw[e] || e;
}

function vZt(e, t) {
  let r = Date.now() / 1000,
    o = e - t,
    u = r - o;
  return Math.max(0, Math.min(1, u / t));
}

function kYe(e) {
  let t = e.headers?.get?.(h5n),
    r = e.headers?.get?.(zBt);
  if (!t && !r) return null;
  let o = { status: "rejected", unifiedRateLimitFallbackAvailable: false, isUsingOverage: false },
    u = e.headers?.get?.("anthropic-ratelimit-unified-reset");
  if (u) o.resetsAt = Math.round(Number(u));
  if (t) o.rateLimitType = t;
  if (r) o.overageStatus = r;
  let d = e.headers?.get?.("anthropic-ratelimit-unified-overage-reset");
  if (d) o.overageResetsAt = Math.round(Number(d));
  let _ = e.headers?.get?.(imt);
  if (_) o.overageDisabledReason = _;
  return Object.assign(o, wYe(e.headers)), o;
}

function wYe(e) {
  let t = g5n(e);
  if (!t) return {};
  let r = qBt(e),
    o = GBt(e);
  return {
    lowPriorityOffer: t,
    ...(r !== void 0 && { lowPriorityRetryAfterSeconds: r }),
    ...(o !== void 0 && { lowPriorityMaxWaitSeconds: o }),
  };
}

function hYe(e) {
  let t = {};
  for (let [r, o] of TYe) {
    let u = e.get(`anthropic-ratelimit-unified-${o}-utilization`),
      d = e.get(`anthropic-ratelimit-unified-${o}-reset`);
    if (u !== null && d !== null) t[r] = { utilization: Number(u), resets_at: Math.round(Number(d)) };
  }
  return t;
}

function cL(e) {
  return `${Math.round(e.utilization * 100)}@${e.resets_at}`;
}

function G8(e) {
  return e !== void 0 && Number.isFinite(e.utilization) && Number.isFinite(e.resets_at);
}

async function EZt(e, t) {
  let r = await cM({ maxRetries: 0, model: e, source: "quota_check", agentContext: _a(), credentials: t }),
    o = [{ role: "user", content: "quota" }],
    u = BV(e);
  return r.beta.messages
    .create({ model: YI(e), max_tokens: 1, messages: o, metadata: oC(), ...(u.length > 0 && { betas: _C(u) }) })
    .asResponse();
}

function CZt(e, t, r) {
  for (let [o, u] of Object.entries(TZt)) {
    if (r && u === "five_hour") continue;
    let d = e.get(`anthropic-ratelimit-unified-${o}-surpassed-threshold`);
    if (d !== null) {
      let _ = e.get(`anthropic-ratelimit-unified-${o}-utilization`),
        C = e.get(`anthropic-ratelimit-unified-${o}-reset`),
        A = _ ? Number(_) : void 0;
      return {
        status: "allowed_warning",
        resetsAt: C ? Math.round(Number(C)) : void 0,
        rateLimitType: u,
        utilization: A,
        unifiedRateLimitFallbackAvailable: t,
        isUsingOverage: false,
        surpassedThreshold: Number(d),
      };
    }
  }
  return null;
}

function AZt(e, t, r) {
  let { rateLimitType: o, claimAbbrev: u, windowSeconds: d, thresholds: _ } = t,
    C = e.get(`anthropic-ratelimit-unified-${u}-utilization`),
    A = e.get(`anthropic-ratelimit-unified-${u}-reset`);
  if (C === null || A === null) return null;
  let x = Number(C),
    M = Math.round(Number(A)),
    F = vZt(M, d);
  if (!_.some((B) => x >= B.utilization && F <= B.timePct)) return null;
  return {
    status: "allowed_warning",
    resetsAt: M,
    rateLimitType: o,
    utilization: x,
    unifiedRateLimitFallbackAvailable: r,
    isUsingOverage: false,
  };
}

function RZt(e, t) {
  let r = aM(),
    o = CZt(e, t, r);
  if (o) return o;
  for (let u of wZt) {
    if (r && u.rateLimitType === "five_hour") continue;
    let d = AZt(e, u, t);
    if (d) return d;
  }
  return null;
}

function Y3(e, t) {
  let r = e.get("anthropic-ratelimit-unified-status") || "allowed",
    o = e.get("anthropic-ratelimit-unified-reset"),
    u = o ? Math.round(Number(o)) : void 0,
    d = e.get("anthropic-ratelimit-unified-fallback") === "available",
    _ = e.get("anthropic-ratelimit-unified-representative-claim"),
    C = e.get("anthropic-ratelimit-unified-overage-status"),
    A = e.get("anthropic-ratelimit-unified-overage-reset"),
    x = A ? Math.round(Number(A)) : void 0,
    M = e.get("anthropic-ratelimit-unified-overage-disabled-reason"),
    F = e.get(smt) === "true",
    U = wYe(e),
    B = e.get("anthropic-ratelimit-unified-upgrade-paths"),
    W = B ? B.split(",").map((Pe) => Pe.trim()) : void 0,
    z = e.get("anthropic-ratelimit-unified-overage-period-monthly-utilization"),
    pe = z ? Number(z) : NaN,
    fe = Number.isFinite(pe) ? { utilization: pe } : void 0,
    me = e.get("anthropic-ratelimit-unified-overage-period-channel-utilization"),
    ge = me ? Number(me) : NaN,
    Ce = Number.isFinite(ge) ? { utilization: ge } : void 0,
    Ie = r === "rejected" && (C === "allowed" || C === "allowed_warning"),
    Ee = r;
  if (r === "allowed" || r === "allowed_warning") {
    let Pe = RZt(e, d);
    if (Pe)
      return {
        ...Pe,
        ...(W && { upgradePaths: W }),
        ...(F && { overageInUse: F }),
        ...(fe && { overagePeriodMonthly: fe }),
        ...(Ce && { overagePeriodChannel: Ce }),
        ...(t && { rateLimitGraceActive: true }),
      };
    Ee = "allowed";
  }
  return {
    status: Ee,
    resetsAt: u,
    unifiedRateLimitFallbackAvailable: d,
    ...(_ && { rateLimitType: _ }),
    ...(C && { overageStatus: C }),
    ...(x && { overageResetsAt: x }),
    ...(M && { overageDisabledReason: M }),
    ...(W && { upgradePaths: W }),
    isUsingOverage: Ie,
    ...(F && { overageInUse: F }),
    ...(fe && { overagePeriodMonthly: fe }),
    ...(Ce && { overagePeriodChannel: Ce }),
    ...(t && { rateLimitGraceActive: true }),
    ...U,
  };
}

function ghe(e) {
  let t = e.error?.error?.details;
  if (t?.error_code !== "credits_required") return {};
  return {
    errorCode: "credits_required",
    ...(typeof t.disabled_reason === "string" && { overageDisabledReason: t.disabled_reason }),
    ...(typeof t.can_user_purchase_credits === "boolean" && { canUserPurchaseCredits: t.can_user_purchase_credits }),
    ...(typeof t.has_chargeable_saved_payment_method === "boolean" && {
      hasChargeableSavedPaymentMethod: t.has_chargeable_saved_payment_method,
    }),
  };
}

function uL(e, t) {
  if (ie().cachedExtraUsageDisabledReason !== e) Ae((r) => ({ ...r, cachedExtraUsageDisabledReason: e }), t);
}

function yYe(e, t) {
  if (Ne() === "gateway") return;
  uL(e.get("anthropic-ratelimit-unified-overage-disabled-reason") ?? null, t);
}

function JWn(e, t, r) {
  let o = On()?.accountUuid;
  if (o !== t) return;
  let u = ie().cachedUsageUtilization,
    d = u && u.accountUuid === o ? Date.now() - u.fetchedAtMs : Number.POSITIVE_INFINITY;
  if (d >= 0 && d < xZt) return;
  Ae(
    (_) => ({
      ..._,
      cachedUsageUtilization: { fetchedAtMs: Date.now(), ...(o !== void 0 && { accountUuid: o }), utilization: e },
    }),
    r,
  );
}

function QWn(e) {
  let t = ie().cachedUsageUtilization;
  if (!t) return null;
  let r = MZt().safeParse(t);
  if (!r.success) return null;
  if (r.data.accountUuid !== On()?.accountUuid) return Ae((u) => ({ ...u, cachedUsageUtilization: void 0 }), e), null;
  let o = Date.now() - r.data.fetchedAtMs;
  if (o < 0 || o > PZt) return null;
  return { utilization: r.data.utilization, fetchedAtMs: r.data.fetchedAtMs };
}

function CYe(e) {
  let t = typeof e === "string" ? e.trim().toLowerCase() : e;
  return t === "wrap-up" || t === "next-steps" ? t : "off";
}

function RYe(e) {
  let t = typeof e === "string" ? e.trim() : "";
  return t === "" ? null : `[${t}]`;
}

function OZt(e) {
  switch (e) {
    case "default_claude_max_5x":
      return 0.99;
    case "default_claude_max_20x":
      return 0.9975;
    default:
      return IZt;
  }
}

function _Ye(e, t) {
  let r = e.get(t);
  if (r === null) return 0;
  let o = Number(r);
  return Number.isFinite(o) ? Math.max(0, Math.min(1, o)) : 0;
}

function SYe(e, t, r) {
  let o = Number(e.get(t) ?? NaN);
  return Number.isFinite(o) && o * 1000 > r ? Math.round(o) : void 0;
}

function Id() {
  return Mm.currentLimits;
}

function ML() {
  let e = Date.now() / 1000,
    t = e + 31536000,
    r = {};
  for (let [o] of TYe) {
    let u = Mm.rawUtilization[o];
    if (G8(u) && u.resets_at > e && u.resets_at < t) r[o] = u;
  }
  return r;
}

function Xxe() {
  return Mm.accountEpoch;
}

function Yxe() {
  return Mm.limitsObserved;
}

function z8(e) {
  return Mm.statusChanged.subscribe(e);
}

function ZWn(e) {
  return Mm.overageInUse.subscribe(e);
}

function e9n(e) {
  return Mm.quotaRejected.subscribe(e);
}

function t9n() {
  Mm.resetCurrentLimits();
}

function S3e(e) {
  Mm.emitStatusChange(e);
}

async function Mct(e, t) {
  await Mm.probeQuotaStatus(gm(), e, t);
}

function n9n(e, t, r) {
  return Mm.probeQuotaStatus(e, t, r);
}

function hhe(e, t, r = false, o = Date.now(), u, d) {
  Mm.extractQuotaStatusFromHeaders(e, t, r, o, u, d);
}

function yhe(e, t, r = Date.now(), o, u) {
  Mm.extractQuotaStatusFromError(e, t, r, o, u);
}

function DYe(e) {
  let t = Nj(e.headers ?? new globalThis.Headers());
  return LYe(Y3(t, false), e);
}

function LYe(e, t) {
  return { ...e, status: "rejected", ...ghe(t) };
}

function r9n() {
  Mm.resetGraceState();
}

function o9n() {
  Mm.resetNearLimitWrapUpState();
}

function FYe(e, t, r = Date.now(), o) {
  Mm.extractGraceStatusFromHeaders(e, t, r, o);
}

function NYe(e) {
  return Mm.consumePendingGraceWrapUpHint(e);
}

function Nct() {
  return Mm.getUsageLimitGrace();
}

function $Ye() {
  return Mm.consumePendingNearLimitWrapUpHint();
}

function UYe(e) {
  if (e.includes("request_too_large") || e.toLowerCase().includes("too much media") || pd(e, "media_budget"))
    return new Set(["document", "image"]);
  let t = X3(e);
  return t ? new Set([t.kind]) : void 0;
}

function X3(e) {
  if (pd(e, "image_block")) return { kind: "image" };
  if (pd(e, "document_block")) return { kind: "document" };
  if (pd(e, "media_budget")) return { kind: "document" };
  return ihe(e);
}

function Q3() {
  let e = `max ${osr} pages, ${Ft(GEt)}`;
  return Le()
    ? `PDF too large (${e}). Try reading the file a different way (e.g., extract text with pdftotext).`
    : `PDF too large (${e}). Double press esc to go back and try again, or use pdftotext to convert to text first.`;
}

function J3() {
  return Le()
    ? "PDF is password protected. Try using a CLI tool to extract or convert the PDF."
    : "PDF is password protected. Please double press esc to edit your message and try again.";
}

function Z3() {
  return Le()
    ? "The PDF file was not valid. Try converting it to text first (e.g., pdftotext)."
    : "The PDF file was not valid. Double press esc to go back and try again with a different file.";
}

function Uj() {
  return Le()
    ? "Image was too large. Try resizing the image or using a different approach."
    : "Image was too large. Double press esc to go back and try again with a smaller image.";
}

function _P(e) {
  let t = e === "document" ? "a document" : "an image",
    r = Le()
      ? "Re-read the file with a different approach if you still need it."
      : "Double press esc to edit your message, or re-read the file if you still need it.";
  return `${hu}: ${t} in the conversation could not be processed and was removed. ${r}`;
}

function Oun(e) {
  return [ybe, b5e, w5e, T5e].some((t) => e.startsWith(`${t} \xB7 `));
}

function vD(e) {
  return (
    e.startsWith(hu) ||
    e.startsWith(`Please run /login \xB7 ${hu}`) ||
    e.startsWith(zYe) ||
    e.startsWith(GYe) ||
    e.startsWith(qYe) ||
    e.startsWith(VYe)
  );
}

function xb(e) {
  if (!e.isApiErrorMessage) return false;
  let t = e.message.content;
  if (!Array.isArray(t)) return false;
  return t.some((r) => r.type === "text" && r.text.startsWith(_k));
}

function Bj(e) {
  let t = e.match(/prompt is too long[^0-9]*(\d+)\s*tokens?\s*>\s*(\d+)/i);
  return { actualTokens: t ? parseInt(t[1], 10) : void 0, limitTokens: t ? parseInt(t[2], 10) : void 0 };
}

function pL(e) {
  if (!xb(e) || !e.errorDetails) return;
  let { actualTokens: t, limitTokens: r } = Bj(e.errorDetails);
  if (t === void 0 || r === void 0) return;
  let o = t - r;
  return o > 0 ? o : void 0;
}

function YYe(e) {
  let { actualTokens: t, limitTokens: r, conversationTokensEstimate: o } = e;
  if (t === void 0 || r === void 0)
    return (
      `${_k} \xB7 this conversation is a single ` +
      "exchange and cannot be compacted \u2014 the request size comes mostly " +
      "from system prompt, tool definitions, or attachments."
    );
  if (o >= t * DZt)
    return `${_k} \xB7 the request is ~${t} tokens (limit ${r}) and this conversation's own content is most of it. A single-exchange conversation cannot be compacted; start with less content (smaller files or pasted text).`;
  return (
    `${_k} \xB7 the request is ~${t} tokens (limit ${r}) but this conversation is only ~${o} tokens \u2014 the rest is system prompt, ` +
    "tool definitions, and attachment content. A single-exchange conversation cannot be compacted; reduce attached files/tools or start with less context."
  );
}

function bhe(e, t, r) {
  return {
    ...Ko({ content: t, error: "invalid_request", errorDetails: e.errorDetails, now: r.now, uuid: r.uuid }),
    requestId: e.requestId,
    apiErrorStatus: e.apiErrorStatus,
  };
}

function LZt(e) {
  return e.includes("request_too_large") || X3(e) !== void 0;
}

function aX(e) {
  if (!(e instanceof Gt) || e.status !== 400) return;
  return X3(e.message);
}

function lX(e) {
  return e.isApiErrorMessage === true && e.errorDetails !== void 0 && LZt(e.errorDetails);
}

function bP(e) {
  if (!(e instanceof Error)) return false;
  return $3(e.message) || pd(e.message, "prompt_too_long");
}

function TP(e) {
  return e instanceof Error && (rhe(e.message) || pd(e.message, "max_tokens_context_overflow"));
}

function cX(e) {
  return e instanceof Error && e.message.toLowerCase().includes("credit balance is too low");
}

function uX(e) {
  return e instanceof Error && e.message.toLowerCase().includes("organization has been disabled");
}

function XYe(e) {
  return e instanceof tL || (e instanceof kd && e.message.toLowerCase().includes("timeout"));
}

function e5e(e) {
  return e instanceof Error && e.message.includes(dX);
}

function t5e(e) {
  return e instanceof Error && /maximum of \d+ PDF pages/.test(e.message);
}

function n5e(e) {
  return e instanceof Error && e.message.includes("The PDF specified is password protected");
}

function r5e(e) {
  return e instanceof Gt && e.status === 400 && e.message.includes("image exceeds") && e.message.includes("maximum");
}

function s5e(e) {
  return (
    e instanceof Gt &&
    e.status === 400 &&
    e.message.includes("image dimensions exceed") &&
    e.message.includes("many-image")
  );
}

function i5e(e) {
  return e instanceof Gt && e.status === 413;
}

function a5e(e) {
  return (
    e instanceof Gt &&
    e.status === 400 &&
    e.message.includes("`tool_use` ids were found without `tool_result` blocks immediately after")
  );
}

function l5e(e) {
  return e instanceof Gt && e.status === 400 && e.message.includes("unexpected `tool_use_id` found in `tool_result`");
}

function d5e(e) {
  return e instanceof Gt && e.status === 400 && e.message.includes("`tool_use` ids must be unique");
}

function p5e(e) {
  return e instanceof Gt && e.status === 400 && e.message.toLowerCase().includes("invalid model name");
}

function f5e(e) {
  return e instanceof Error && e.message.toLowerCase().includes("x-api-key");
}

function g5e(e) {
  return (
    e instanceof Gt &&
    (e.status === 401 || e.status === 403) &&
    e.message.includes("OAuth authentication is currently not allowed for this organization")
  );
}

function h5e(e) {
  return a.CLAUDE_CODE_USE_BEDROCK && e instanceof Error && e.message.toLowerCase().includes("model id");
}

function lBt() {
  let e = Ne();
  if (e === "firstParty") {
    if (jo()) return ` If it persists, check ${_he}.`;
    let t = a.ANTHROPIC_BASE_URL ?? "";
    return ` If it persists, check your inference gateway (${URL.parse(t)?.host || t}).`;
  }
  if (e === "anthropicAws") return ` If it persists, check ${_he}.`;
  if (e === "anthropicGoogleCloud") return ` If it persists, check ${_he} and Google Cloud's status page.`;
  return ` If it persists, check your ${sA[e]} service status.`;
}

function KZt() {
  return Le() ? "Your account does not have access to Claude. Please login again or contact your administrator." : yGe;
}

function VZt() {
  return qZt;
}

function HYe() {
  return a.CLAUDE_CODE_REMOTE;
}

function YZt(e, t, r) {
  try {
    let o = (U) => (U === "user" || U === "assistant" || U === "system" ? U : "unknown"),
      u = (U) => typeof U === "object" && U !== null,
      d = -1;
    for (let U = 0; U < r.length; U++) {
      let B = r[U];
      if (!B) continue;
      let W = B.message.content;
      if (Array.isArray(W)) {
        for (let z of W)
          if (u(z) && z.type === "tool_use" && "id" in z && z.id === e) {
            d = U;
            break;
          }
      }
      if (d !== -1) break;
    }
    let _ = -1;
    for (let U = 0; U < t.length; U++) {
      let B = t[U];
      if (!B) continue;
      if (B.type === "assistant" && "message" in B) {
        let W = B.message.content;
        if (Array.isArray(W)) {
          for (let z of W)
            if (u(z) && z.type === "tool_use" && "id" in z && z.id === e) {
              _ = U;
              break;
            }
        }
      }
      if (_ !== -1) break;
    }
    let C = [];
    for (let U = d + 1; U < r.length; U++) {
      let B = r[U];
      if (!B) continue;
      let W = B.message.content;
      if (Array.isArray(W))
        for (let z of W) {
          let pe = o(B.message.role);
          if (!u(z)) C.push(`${pe}:unknown`);
          else if (z.type === "tool_use" && "id" in z) C.push(`${pe}:tool_use:${ve(z.id) ?? "nonconforming"}`);
          else if (z.type === "tool_result" && "tool_use_id" in z)
            C.push(`${pe}:tool_result:${ve(z.tool_use_id) ?? "nonconforming"}`);
          else if (z.type === "text") C.push(`${pe}:text`);
          else if (z.type === "thinking") C.push(`${pe}:thinking`);
          else if (z.type === "image") C.push(`${pe}:image`);
          else C.push(`${pe}:${rle(z.type) ? z.type : "unknown"}`);
        }
      else if (typeof W === "string") C.push(`${o(B.message.role)}:string_content`);
    }
    let A = [];
    for (let U = _ + 1; U < t.length; U++) {
      let B = t[U];
      if (!B) continue;
      switch (B.type) {
        case "user":
        case "assistant": {
          if ("message" in B) {
            let W = B.message.content;
            if (Array.isArray(W))
              for (let z of W) {
                let pe = o(B.message.role);
                if (!u(z)) A.push(`${pe}:unknown`);
                else if (z.type === "tool_use" && "id" in z) A.push(`${pe}:tool_use:${ve(z.id) ?? "nonconforming"}`);
                else if (z.type === "tool_result" && "tool_use_id" in z)
                  A.push(`${pe}:tool_result:${ve(z.tool_use_id) ?? "nonconforming"}`);
                else if (z.type === "text") A.push(`${pe}:text`);
                else if (z.type === "thinking") A.push(`${pe}:thinking`);
                else if (z.type === "image") A.push(`${pe}:image`);
                else A.push(`${pe}:${rle(z.type) ? z.type : "unknown"}`);
              }
            else if (typeof W === "string") A.push(`${o(B.message.role)}:string_content`);
          }
          break;
        }
        case "attachment":
          if ("attachment" in B) A.push(`attachment:${_Ge(B.attachment.type)}`);
          break;
        case "system":
          if ("subtype" in B) A.push(`system:${_Ge(B.subtype)}`);
          break;
        case "progress": {
          let W = "data" in B ? B.data : void 0,
            z = typeof W === "object" && W !== null && "type" in W ? W.type : void 0;
          A.push(`progress:${_Ge(z)}`);
          break;
        }
      }
    }
    let x = (U) => {
        if (!U) return "<none>";
        let B = U.message.content;
        if (!Array.isArray(B)) return `${o(U.message.role)}:string`;
        return `${o(U.message.role)}:[${B.map((W) => (!u(W) ? "unknown" : W.type === "tool_use" ? `tool_use:${ve(W.id) ?? "nonconforming"}` : W.type === "tool_result" ? `tool_result:${ve(W.tool_use_id) ?? "nonconforming"}` : rle(W.type) ? W.type : "unknown")).join(",")}]`;
      },
      M = 0,
      F = 0;
    for (let U of r) {
      let B = U.message.content;
      if (!Array.isArray(B)) continue;
      for (let W of B) {
        if (!u(W)) continue;
        if (W.type === "tool_use" && W.id === e) M++;
        if (W.type === "tool_result" && W.tool_use_id === e) F++;
      }
    }
    s("tengu_tool_use_tool_result_mismatch_error", {
      toolUseId: ve(e),
      normalizedSequence: C.join(", "),
      preNormalizedSequence: A.join(", "),
      normalizedMessageCount: r.length,
      originalMessageCount: t.length,
      normalizedToolUseIndex: d,
      originalToolUseIndex: _,
      offendingMessageBlocks: x(r[d]),
      followingMessageBlocks: d === -1 ? "<none>" : x(r[d + 1]),
      toolUseOccurrences: M,
      toolResultOccurrences: F,
    });
  } catch (o) {}
}

function v5e(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "content" in e &&
    "model" in e &&
    "usage" in e &&
    Array.isArray(e.content) &&
    typeof e.model === "string" &&
    typeof e.usage === "object"
  );
}

function pX(e) {
  return !!rR && e instanceof Gt && e.status === 400 && fX(e.message, rR);
}

function khe(e) {
  return (
    e instanceof Gt &&
    e.status === 400 &&
    (e.message.includes("Advisor tool result content could not be processed") ||
      e.message.includes("found in advisor_tool_result blocks"))
  );
}

function Hj(e) {
  return e instanceof Gt && e.status === 400 && e.message.includes(XZt);
}

function whe(e) {
  return e instanceof Gt && e.status === 400 && fX(e.message, Bde);
}

function The(e) {
  if (!(e instanceof Gt) || e.status !== 400) return false;
  let t = e.message;
  if (t.includes(Ude.header)) return true;
  return t.includes("evict_on_complete") && t.includes("beta");
}

function vhe(e) {
  return (
    e instanceof Gt &&
    e.status === 400 &&
    (fX(e.message, DV) || /thinking\.(adaptive|enabled)\.display: Input should be /.test(e.message))
  );
}

function E5e(e) {
  if (!(e instanceof Gt) || e.status !== 400) return;
  let t = e.message;
  if (pg !== null && t.includes(`\`${pg.header}`) && t.includes("anthropic-beta")) return "category_beta_header";
  if (t.includes("`server-side-fallback-") && t.includes("anthropic-beta")) return "beta_header";
  if (t.includes("has no default fallback configuration")) return "default_unconfigured";
  if (/does not support the `fallbacks?` parameter/.test(t)) return "unsupported_primary";
  if (/The `fallbacks?` parameter is not supported/.test(t)) return "unsupported_primary";
  if (t.includes("is not a valid fallback target for")) return "invalid_target";
  if (t.includes("`fallback` and `fallbacks` cannot both be set")) return "param_shape";
  if (/`fallbacks?(\[\d+\])?\.[a-z_]+`?/.test(t)) return "param_shape";
  if (/target model '[^']*' is not compatible with/.test(t)) return "param_shape";
  if (t.includes("server-side fallback is not supported")) return "param_shape";
  if (/\bfallbacks?\.(messages|stream|fallback)\b is not supported/.test(t)) return "param_shape";
  if (/\bfallbacks?(\[\d+\])?: unknown field/.test(t)) return "param_shape";
  if (t.includes("Extra inputs are not permitted") && /\bfallbacks?(\[\d+\])?((\.|\s*->\s*)\w+)*\s*:/.test(t))
    return "extra_forbidden";
  return;
}

function C5e(e) {
  if (!(e instanceof Gt) || e.status !== 400) return;
  let t = e.message;
  if (t.includes("fallback-credit-") && (t.includes("anthropic-beta") || t.includes("anthropic_beta")))
    return "credit_beta_header";
  if (t.includes("fallback_credit_token: invalid or malformed")) return "credit_malformed";
  if (t.includes("fallback_credit_token: does not belong to this organization")) return "credit_wrong_org";
  if (t.includes("fallback_credit_token: has expired")) return "credit_expired";
  if (t.includes("fallback_credit_token: is not valid for model")) return "credit_invalid_model";
  if (t.includes("Extra inputs are not permitted") && /\bfallback_credit_token\s*:/.test(t))
    return "credit_extra_forbidden";
  if (/\bfallback_credit_token\s*:/.test(t)) return "credit_other";
  return;
}

function fX(e, t) {
  return B3(e, t.header) || pd(e, `beta_header:${t.header}`);
}

function gX(e) {
  if (!(e instanceof Gt) || e.status !== 400) return false;
  return ahe(e.message) || pd(e.message, "mid_conv_system") || pd(e.message, `beta_header:${Kk.header}`);
}

function Ehe(e) {
  if (!(e instanceof Gt) || e.status !== 400) return false;
  return lhe(e.message) || pd(e.message, "cache_control_field");
}

function Che(e) {
  if (!(e instanceof Gt) || e.status !== 400) return false;
  if (A5e(e) !== null) return false;
  let t = e.message;
  if (fX(t, GI)) return true;
  return t.includes("output_config") || pd(t, "effort_unsupported");
}

function hX(e) {
  if (!(e instanceof Gt) || e.status !== 400) return false;
  if (bX(e) !== null) return false;
  let t = e.message.toLowerCase();
  if (t.includes("effort parameter") && t.includes("not support")) return true;
  if (t.includes("output_config") && t.includes("effort") && t.includes("extra inputs are not permitted")) return true;
  return pd(e.message, "effort_unsupported");
}

function yX(e) {
  return false;
}

function jj(e) {
  if (!(e instanceof Gt) || e.status !== 400) return false;
  return ohe(e.message) || pd(e.message, "thinking_signature");
}

function bX(e) {
  if (!(e instanceof Gt) || e.status !== 400) return null;
  let t = she(e.message);
  if (t) return t;
  if (pd(e.message, "thinking_type:enabled")) return "enabled";
  if (pd(e.message, "thinking_type:adaptive")) return "adaptive";
  return null;
}

function A5e(e) {
  if (!(e instanceof Gt) || e.status !== 400) return null;
  return /effort '([a-z]+)' is not supported when thinking is disabled/i.exec(e.message)?.[1] ?? null;
}

function kX(e, t, r) {
  let o = QZt(e, t, r);
  if (e instanceof Gt) {
    let _ = yue(e) ? e.status : Gfn(e);
    if (_ !== void 0) o.apiErrorStatus = _;
  } else if (e instanceof Error && e.cause instanceof Gt) {
    let _ = Gfn(e.cause);
    if (_ !== void 0) o.apiErrorStatus = _;
  }
  let u = e instanceof Gt ? e : e instanceof Error && e.cause instanceof Gt ? e.cause : void 0,
    d = r?.requestId || (u ? u.requestID || u.error?.request_id : void 0);
  if (d) o.requestId = d;
  return o;
}

function QZt(e, t, r) {
  if (XYe(e)) return Ko({ content: wbe, error: "server_error" });
  if (e instanceof aL || e instanceof sH)
    return Ko({ content: Uj(), error: "invalid_request", errorDetails: e.message });
  if (yue(e)) return Ko({ content: `${hu}: ${uOe(e)}`, error: "invalid_request", apiError: lne });
  if (e instanceof Error && e.message.includes(Sbe)) return Ko({ content: Sbe, error: "rate_limit" });
  if (e instanceof Error && e.message.includes(bbe)) return Ko({ content: bbe, error: "rate_limit" });
  if (e instanceof Gt && e.status === 429) {
    let _ = lL(Tt()),
      C = kYe(e),
      A = ghe(e),
      x = _ && uf(t) && (C?.rateLimitType === "seven_day_overage_included" || A.errorCode === "credits_required");
    if (_ && C && !x) {
      let z = mhe(C, t);
      if (z) return Ko({ content: z, error: "rate_limit", quotaLimits: DYe(e) });
      return Ko({ content: tR, error: "rate_limit" });
    }
    if (_ && She(e.message) && !GFe())
      k0n(true), s("tengu_1m_credits_clamp_activated", {}), g("context_1m_entitlement", "credits_clamp_200k");
    if (x) {
      let z = e.headers?.get?.("anthropic-ratelimit-unified-overage-disabled-reason") ?? A.overageDisabledReason,
        pe = z ?? ie().cachedExtraUsageDisabledReason,
        fe = C?.rateLimitType === "seven_day_overage_included";
      if (!fe && C?.rateLimitType === void 0 && z !== "fetch_error" && z !== "unknown") ECt(true);
      return Ko({ content: ZZt(pe, fe), error: "rate_limit", errorDetails: e.message });
    }
    if (_ && She(e.message)) {
      let z = Le()
        ? `turn on usage credits at ${yze}, or use --model to switch to standard context`
        : eb()
          ? "run /usage-credits to turn them on, or /model to switch to standard context"
          : "run /model to switch to standard context";
      return Ko({
        content: `${hu}: Usage credits required for 1M context \xB7 ${z}`,
        error: "rate_limit",
        errorDetails: e.message,
      });
    }
    let M = e.message.replace(/^429\s+/, ""),
      F;
    try {
      let z = V(M),
        pe = z?.error?.message ?? z?.message;
      if (typeof pe === "string") F = pe;
    } catch {}
    let U = F || M;
    if (_ && e.headers?.get?.("anthropic-ratelimit-unified-overage-disabled-reason"))
      return Ko({ content: U, error: "rate_limit" });
    let B = _ ? GZt : "Request rejected (429)",
      W = `this may be a temporary capacity issue.${lBt()}`;
    return Ko({ content: `${hu}: ${B} \xB7 ${U || W}`, error: "rate_limit", apiErrorIsTransient: _ });
  }
  if (bP(e) || TP(e)) return Ko({ content: _k, error: "invalid_request", errorDetails: e.message });
  if (t5e(e)) return Ko({ content: Q3(), error: "invalid_request", errorDetails: e.message });
  if (n5e(e)) return Ko({ content: J3(), error: "invalid_request", errorDetails: e.message });
  if (e instanceof Error && e.message.includes("The PDF specified was not valid"))
    return Ko({ content: Z3(), error: "invalid_request", errorDetails: e.message });
  if (r5e(e)) return Ko({ content: Uj(), error: "invalid_request", errorDetails: e.message });
  if (s5e(e))
    return Ko({
      content: Le()
        ? "An image in the conversation exceeds the dimension limit for many-image requests (2000px). Start a new session with fewer images."
        : "An image in the conversation exceeds the dimension limit for many-image requests (2000px). Run /compact to remove old images from context, or start a new session.",
      error: "invalid_request",
      errorDetails: e.message,
    });
  {
    let _ = A5e(e);
    if (_ !== null && e instanceof Error) {
      let C = Le() ? "use --effort high (or the effortLevel setting)" : "run /effort high to continue",
        A = QSn();
      return Ko({
        content: `${hu}: Effort '${_}' isn't available with thinking turned off on this model \xB7 ${C}, or turn thinking back on (${A === "MAX_THINKING_TOKENS" ? "unset MAX_THINKING_TOKENS=0" : A === "alwaysThinkingEnabled" ? 'remove "alwaysThinkingEnabled": false from settings' : "start the session without thinking disabled"})`,
        error: "invalid_request",
        errorDetails: e.message,
      });
    }
  }
  if (Hj(e)) {
    let _ = Le()
      ? "change or unset the advisorModel setting (or the --advisor flag)"
      : "run /advisor to change or disable the advisor";
    return Ko({
      content: `${hu}: ${e.message.replace(/^400\s+/, "")} \xB7 The configured advisor model is not compatible with this request model \u2014 ${_}`,
      error: "invalid_request",
      errorDetails: e.message,
    });
  }
  {
    let _ = aX(e);
    if (_ && e instanceof Error) return Ko({ content: _P(_.kind), error: "invalid_request", errorDetails: e.message });
  }
  if (pX(e)) return Ko({ content: "Auto mode is unavailable for your plan", error: "invalid_request" });
  if (i5e(e)) {
    if (U3(e.message) || pd(e.message, "prompt_too_long"))
      return Ko({ content: _k, error: "invalid_request", errorDetails: e.message });
    if (VVe(e.error) && r?.messagesForAPI && W3()) {
      let C = JZt({ messagesForAPI: r.messagesForAPI });
      if (C?.kind === "unrecoverable") return Ko({ content: eYe(C), error: "invalid_request", errorDetails: rYe(C) });
      if (C?.kind === "strippable_media")
        return Ko({ content: nYe(C), error: "invalid_request", errorDetails: `request_too_large: ${e.message}` });
    }
    return Ko({ content: j3(), error: "invalid_request", errorDetails: `request_too_large: ${e.message}` });
  }
  if (a5e(e)) {
    if (r?.messages && r?.messagesForAPI) {
      let _ = e.message.match(/toolu_[A-Za-z0-9_]+/),
        C = _ ? _[0] : null;
      if (C) YZt(C, r.messages, r.messagesForAPI);
    }
    {
      let C = Le() ? "" : " Run /rewind to recover the conversation.";
      return Ko({ content: "API Error: 400 due to tool use concurrency issues." + C, error: "invalid_request" });
    }
  }
  if (l5e(e)) s("tengu_unexpected_tool_result", {});
  if (d5e(e)) {
    s("tengu_duplicate_tool_use_id", {});
    let _ = Le() ? "" : " Run /rewind to recover the conversation.";
    return Ko({
      content: `API Error: 400 duplicate tool_use ID in conversation history.${_}`,
      error: "invalid_request",
      errorDetails: e.message,
    });
  }
  if (Tt() && p5e(e) && (w6(Ye(t)) || t === "opus"))
    return Ko({
      content:
        "Claude Opus is not available with the Claude Pro plan. If you have updated your subscription plan recently, run /logout and /login for the plan to take effect.",
      error: "invalid_request",
    });
  if (cX(e)) return Ko({ content: mft, error: "billing_error" });
  if (e instanceof Gt && e.status === 400 && uX(e)) {
    let { source: _ } = qg();
    if (_ === "ANTHROPIC_API_KEY" && a.ANTHROPIC_API_KEY && !Tt()) {
      let C = Yl();
      return Ko({ error: "invalid_request", content: C ? iBt : sBt });
    }
  }
  if (e instanceof Gt && (e.status === 401 || e.status === 403) && Ne() === "firstParty" && xre()) {
    if (Mbt()) return Ko({ error: "invalid_request", content: zZt });
  }
  if (e instanceof iO) {
    if (e.source === "/login managed key" || e.source === "claude.ai")
      return Ko({ error: "authentication_failed", content: JPe });
    let _ = b5e;
    if (e.source === "ANTHROPIC_CUSTOM_HEADERS") _ = w5e;
    else if (!e.isUserSupplied) _ = hu;
    else if (e.header === "other") _ = T5e;
    else if (e.header === "X-Api-Key") _ = ybe;
    return Ko({ error: "invalid_request", content: `${_} \xB7 ${e.message}` });
  }
  if (f5e(e)) {
    if (HYe()) return Ko({ error: "authentication_failed", content: BYe });
    if (Ne() === "gateway") return Ko({ error: "invalid_request", content: aBt });
    let { source: _ } = qg();
    return Ko({
      error: "authentication_failed",
      content: _ === "ANTHROPIC_API_KEY" || _ === "apiKeyHelper" ? ybe : JPe,
    });
  }
  if (e instanceof pze)
    return Ko({
      error: "authentication_failed",
      content: Le() ? "Failed to authenticate: OAuth session expired and could not be refreshed" : BZt,
    });
  if (e instanceof nwe)
    return Ko({
      error: "server_error",
      content: Le()
        ? "Failed to refresh OAuth token: another Claude Code process is refreshing it or exited mid-refresh. This is usually transient; retry in a minute, and if it persists close other Claude Code processes or sign in again"
        : HZt,
    });
  let o = e instanceof Eoe ? e : Kpe(e);
  if (o) return Ko({ error: "account_on_hold", content: ZAn(o.url) });
  if (p1e(e)) return Ko({ error: "invalid_request", content: bYe() ? WZt : jZt });
  if (xX(e)) return Ko({ error: "authentication_failed", content: KZt() });
  if (g5e(e)) return Ko({ error: "oauth_org_not_allowed", content: VZt() });
  if (e instanceof Gt && e.status === 403 && e.message.toLowerCase().includes("api key authentication is disabled")) {
    let { source: _ } = qg();
    if (_ === "ANTHROPIC_API_KEY" && a.ANTHROPIC_API_KEY)
      return Ko({ error: "invalid_request", content: Yl() ? FZt : NZt });
    if (_ === "apiKeyHelper") return Ko({ error: "invalid_request", content: $Zt });
    if (_ === "/login managed key") return Ko({ error: "authentication_failed", content: UZt });
  }
  if (e instanceof Gt && (e.status === 401 || e.status === 403)) {
    if (HYe()) return Ko({ error: "authentication_failed", content: BYe });
    let _ = uOe(e),
      C = Ne(),
      A = (C === "bedrock" || C === "anthropicAws" || C === "mantle") && (!spe() || M6()) ? KV() : void 0;
    if (A) {
      let x = za(t),
        M = e.status === 401 && (x === "anthropicAws" || x === "mantle"),
        F = M ? zYe : GYe,
        U = M ? "" : " \xB7 if credentials are current, check AWS permissions and model access";
      return Ko({
        error: "authentication_failed",
        content: Le()
          ? `${F} \xB7 run \`${A}\` and retry${U} \xB7 ${hu}: ${_}`
          : `${F} \xB7 run /login and select "${sA.anthropicAws} \xB7 refresh credentials", or run \`${A}\` in another terminal${U} \xB7 ${hu}: ${_}`,
      });
    }
    if (C === "anthropicGoogleCloud") {
      let x = !a.CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH && !Rc(),
        M = x && (!Fbt() || M6()) ? R7e() : void 0,
        F = x ? (M ?? "gcloud auth application-default login") : void 0,
        U = e.status === 401,
        B = U ? qYe : VYe,
        W = F
          ? ` \xB7 run \`${F}\` and retry`
          : a.CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH
            ? " \xB7 refresh the gateway token provided via ANTHROPIC_AUTH_TOKEN/ANTHROPIC_CUSTOM_HEADERS and retry"
            : " \xB7 credentials are managed by this environment \u2014 retry, or contact your administrator";
      return Ko({
        error: "authentication_failed",
        content: `${B}${W}${U ? "" : " \xB7 if credentials are current, check GCP IAM permissions and workspace access"} \xB7 ${hu}: ${_}`,
      });
    }
    return Ko({
      error: "authentication_failed",
      content: Le() ? `Failed to authenticate. ${hu}: ${_}` : `Please run /login \xB7 ${hu}: ${_}`,
    });
  }
  if (h5e(e)) {
    let _ = jYe(),
      C = WYe(t);
    return Ko({
      content: C
        ? `${hu} (${t}): ${e.message}.${_ ? ` Try ${_} to switch to ${C}.` : ` Try switching to ${C}.`}`
        : `${hu} (${t}): ${e.message}.${_ ? ` Run ${_} to pick a different model.` : ""}`,
      error: "model_not_found",
    });
  }
  if (e instanceof Gt && e.status === 404) {
    let _ = jYe(),
      C = WYe(t);
    return Ko({
      content: C
        ? `The model ${t} is not available on your ${Ne()} deployment. ${_ ? `Try ${_} to switch to ${C}` : `Try switching to ${C}`}, or ask your admin to enable this model.`
        : `There's an issue with the selected model (${t}). It may not exist or you may not have access to it.${_ ? ` Run ${_} to pick a different model.` : ""}`,
      error: "model_not_found",
    });
  }
  let u = lBt();
  if (e5e(e))
    return Ko({
      content: `${hu}: ${dX}. The API is at capacity \u2014 this is usually temporary. Try again in a moment.${u}`,
      error: "server_error",
    });
  if (e instanceof Gt && typeof e.status === "number" && e.status >= 500) {
    let _ = uOe(e).replace(/[.!?\u2026]+$/, "");
    return Ko({
      content: `${hu}: ${_}. This is a server-side issue, usually temporary \u2014 try again in a moment.${u}`,
      error: "server_error",
    });
  }
  if (e instanceof kd) return Ko({ content: `${hu}: ${uOe(e)}`, error: "server_error" });
  if (e instanceof Gt) return Ko({ content: `${hu}: ${uOe(e)}`, error: "unknown" });
  let d = Ug(e);
  if (d && (lH.has(d.code) || EI.has(d.code)))
    return Ko({
      content: `${hu}: Connection to the API was lost (${d.code}). This is usually temporary \u2014 try again.`,
      error: "server_error",
    });
  if (e instanceof Error) return Ko({ content: `${hu}: ${e.message}`, error: "unknown" });
  return Ko({ content: hu, error: "unknown" });
}

function JZt(e) {
  try {
    return YVe(e);
  } catch (t) {
    n(`413 request_too_large: could not measure the rejected conversation (${l(t)}); keeping the generic handling`, {
      level: "error",
    });
    return;
  }
}

function jYe() {
  if (!Le()) return "/model";
  return Sm() === "sdk-cli" ? "--model" : void 0;
}

function WYe(e) {
  if (ra()) return;
  let t = e.toLowerCase();
  if (t.includes("fable-5") || t.includes("fable_5")) return a.ANTHROPIC_DEFAULT_OPUS_MODEL ?? fc().opus5;
  if (t.includes("opus-5") || t.includes("opus_5")) return fc().opus48;
  if (t.includes("opus-4-8") || t.includes("opus_4_8")) return fc().opus47;
  if (t.includes("opus-4-7") || t.includes("opus_4_7")) return fc().opus46;
  if (t.includes("opus-4-6") || t.includes("opus_4_6")) return fc().opus45;
  if (t.includes("opus-4-5") || t.includes("opus_4_5")) return fc().opus41;
  if (t.includes("sonnet-5") || t.includes("sonnet_5")) return fc().sonnet46;
  if (t.includes("sonnet-4-6") || t.includes("sonnet_4_6")) return fc().sonnet45;
  if (t.includes("sonnet-4-5") || t.includes("sonnet_4_5")) return fc().sonnet40;
  return;
}

function gte(e) {
  if (e instanceof Error && e.message === "Request was aborted.") return "aborted";
  if (e instanceof iO && e.isUserSupplied) return e.header === "other" ? "invalid_request_header" : "invalid_api_key";
  if (
    XYe(e) ||
    (e instanceof Error && (e.message.startsWith("Stream idle timeout") || e.name === "StreamIdleTimeoutError"))
  )
    return "api_timeout";
  if (yue(e)) return lne;
  if (e5e(e)) return "repeated_529";
  if (e instanceof Error && (e.message.includes(Sbe) || e.message.includes(bbe))) return "capacity_off_switch";
  if (e instanceof Gt && e.status === 429) return "rate_limit";
  if (TI(e)) return "server_overload";
  if (e instanceof Error && (e.message.toLowerCase().includes(_k.toLowerCase()) || bP(e) || TP(e)))
    return "prompt_too_long";
  if (t5e(e)) return "pdf_too_large";
  if (n5e(e)) return "pdf_password_protected";
  if (r5e(e)) return "image_too_large";
  if (s5e(e)) return "image_too_large";
  if (e instanceof Gt && e.status === 400 && e.message.includes("Could not process image"))
    return "image_unprocessable";
  if (e instanceof Gt && e.status === 400) {
    if (pd(e.message, "image_block")) return "image_unprocessable";
    if (pd(e.message, "document_block")) return "document_unprocessable";
    if (pd(e.message, "media_budget")) return "media_budget_exceeded";
    if (pd(e.message, "thinking_signature")) return "invalid_thinking_signature";
  }
  if (i5e(e)) return U3(e.message) || pd(e.message, "prompt_too_long") ? "prompt_too_long" : "request_too_large";
  if (a5e(e)) return "tool_use_mismatch";
  if (l5e(e)) return "unexpected_tool_result";
  if (d5e(e)) return "duplicate_tool_use_id";
  if (p5e(e)) return "invalid_model";
  if (e instanceof Gt && e.status === 404 && e.message.includes("not_found_error") && e.message.includes('"model: '))
    return "model_not_found";
  if (e instanceof Gt && e.status === 400 && /invalid `?signature`? in `?thinking`? block/i.test(e.message))
    return "invalid_thinking_signature";
  if (
    e instanceof Gt &&
    e.status === 400 &&
    (e.message.includes("text content blocks must be non-empty") ||
      e.message.includes("text content blocks must contain non-whitespace text"))
  )
    return "empty_text_block";
  if (e instanceof Gt && e.status === 400 && e.message.includes("diagnostics.previous_message_id"))
    return "previous_message_id_invalid";
  if (
    e instanceof Gt &&
    e.status === 400 &&
    e.message.includes(".tool_use_id") &&
    e.message.includes("String should match pattern")
  )
    return "tool_use_id_invalid";
  if (e instanceof Gt && e.status === 400 && e.message.includes("Grammar compilation")) return "grammar_compile_error";
  if (e instanceof Gt && e.status === 400 && e.message.toLowerCase().includes("request body is not valid json"))
    return "request_body_invalid_json";
  if (e instanceof Error && e.message.toLowerCase().includes(mft.toLowerCase())) return "credit_balance_low";
  if (f5e(e) || (e instanceof Error && e.message.toLowerCase().includes("not a valid api key for this workspace")))
    return "invalid_api_key";
  if (xX(e)) return "token_revoked";
  if (g5e(e)) return "oauth_org_not_allowed";
  if (e instanceof Gt && (e.status === 401 || e.status === 403)) return "auth_error";
  if (h5e(e)) return "bedrock_model_access";
  if (e instanceof Error && e.message.includes("Output blocked by content filtering policy"))
    return "output_content_filtered";
  if (e instanceof xa) return "wif_credential_error";
  if (e instanceof pze || e instanceof Eoe) return "auth_error";
  if (e instanceof nwe) return "oauth_refresh_lock_timeout";
  if (e instanceof Error && e.message.toLowerCase().includes("domains are not accessible to our user agent"))
    return "webfetch_domain_blocked";
  if (e instanceof Error) {
    let r = e.message.toLowerCase();
    if (uX(e)) return "org_disabled";
    if (r.includes("updated our consumer terms")) return "terms_not_accepted";
    if (
      r.includes("web search is not enabled for this organization") ||
      /is not enabled for (this|your) organization/.test(r)
    )
      return "feature_not_enabled_for_org";
    if (/reached your specified[\w\s-]*?usage limits/.test(r)) return "usage_cap_reached";
  }
  if (gX(e)) return "system_role_unsupported";
  if (
    e instanceof Gt &&
    e.status === 400 &&
    /`?(thinking|redacted_thinking)`?\s+(or\s+`?redacted_thinking`?\s+)?blocks?\s+.{0,60}cannot be modified/i.test(
      e.message,
    )
  )
    return "thinking_blocks_modified";
  if (e instanceof Gt && e.status === void 0 && e.type) return `in_band_${Lj(e.type)}`;
  if (e instanceof Gt) {
    let r = e.status;
    if (r >= 500) return "server_error";
    if (r >= 400) return "client_error";
  }
  if (e instanceof kd) {
    if (Ug(e)?.isSSLError) return "ssl_cert_error";
    return "connection_error";
  }
  let t = Ug(e);
  if (t && (lH.has(t.code) || EI.has(t.code))) return "connection_error";
  return "unknown";
}

function QPe(e) {
  if (e.status === 529 || e.message?.includes('"type":"overloaded_error"')) return "overloaded";
  if (e.status === 429) return "rate_limit";
  if (e.status === 401 || e.status === 403) return "authentication_failed";
  if (e.status !== void 0 && e.status >= 408) return "server_error";
  return "unknown";
}

function EP(e, t, r, o) {
  if (e !== "refusal") return;
  let u = t?.explanation?.trimEnd() ?? null;
  s("tengu_refusal_api_response", {
    has_explanation: Boolean(u),
    category: t?.category ? c(Dte(t.category)) : void 0,
    request_id: ve(r) || void 0,
    convolute_arcades: twe(),
  });
  let d = o != null && Qbe(o) ? cs(o) : void 0,
    _;
  if (d !== void 0) {
    let F = Le(),
      U = F
        ? "Try rephrasing the request in a new session or change your model."
        : "Double press esc to edit your last message, or try a different model with /model.",
      B = F ? `Learn more: ${Udn(o)}` : Ote(o),
      W = mX(t?.category)
        ? `${d}'s safeguards flagged this message (https://www.anthropic.com/legal/aup). ${jdn}`
        : `${d}'s safeguards flagged this message (https://www.anthropic.com/legal/aup). This sometimes happens with safe, normal conversations.`;
    _ = `${hu}: ${W} Claude Code can't respond to this message with ${d}.

${U}

${B}`;
  } else {
    let F = Le(),
      U = o != null ? cs(o) : "This model";
    if (t?.category === "cyber" && ra()) {
      let B = F || !Lv() ? `Learn more: ${Bdn}` : `Send feedback with /feedback or learn more: ${Bdn}`;
      _ = `${hu}: ${U}'s safeguards flagged this message. ${R5n} ${k5n} ${B}`;
    } else {
      let B = o != null ? cs(o) : "Claude",
        W =
          F || !Lv()
            ? "Learn more: https://www.anthropic.com/legal/aup"
            : "Send feedback with /feedback or learn more: https://www.anthropic.com/legal/aup";
      _ = `${hu}: ${B} can't help with this. Start a new session to continue.

${W}`;
    }
  }
  let C = Wce(t?.category),
    A = r != null && /^[A-Za-z0-9_-]{1,255}$/.test(r) ? r : void 0,
    x = A
      ? `

Request ID: ${A}`
      : "",
    M = Ko({ content: _ + C + x, error: "invalid_request" });
  return (M.requestId = r ?? void 0), (M.message.stop_reason = "refusal"), (M.message.stop_details = t ?? null), M;
}

function ZZt(e, t) {
  let r = t ? "You've reached your Fable 5 limit." : "Fable 5 requires usage credits.";
  if (Le()) {
    let u = Fn(),
      _ = u === "team" || u === "enterprise" ? "claude.ai/admin-settings/usage" : yze,
      C = vf() ? `, or manage usage credits at ${_},` : "";
    switch (e) {
      case "out_of_credits":
        return `You're out of usage credits. Switch to another model${C} to continue.`;
      case "org_spend_cap_reached":
      case "org_level_disabled_until":
        return `You've hit your monthly spend limit. Switch to another model${C} to continue.`;
      default:
        return `${r} Switch to another model${C} to continue.`;
    }
  }
  let o = vf() && eb();
  switch (e) {
    case "out_of_credits":
      return o
        ? "You're out of usage credits. Run /usage-credits to keep using Fable 5 or /model to switch models."
        : "You're out of usage credits. /model to switch models.";
    case "org_spend_cap_reached":
    case "org_level_disabled_until":
      return o
        ? "You've hit your monthly spend limit. Run /usage-credits to manage your limit and keep using Fable 5 or switch models to continue this chat."
        : "You've hit your monthly spend limit. /model to switch models.";
    case "org_level_disabled":
    case "org_service_level_disabled":
    case "seat_tier_level_disabled":
    case "seat_tier_zero_credit_limit":
    case "member_level_disabled":
    case "member_zero_credit_limit":
    case "group_zero_credit_limit":
      return o ? `${r} Run /usage-credits to continue or switch models with /model.` : `${r} /model to switch models.`;
    default:
      return o ? `${r} Run /usage-credits to continue or switch models with /model.` : `${r} /model to switch models.`;
  }
}

function She(e) {
  return (
    e.includes("Extra usage is required for long context") || e.includes("Usage credits are required for long context")
  );
}

function R5e(e) {
  return GFe() && e.isApiErrorMessage === true && e.errorDetails !== void 0 && She(e.errorDetails);
}

function h3e(e) {
  if (!Sp(e)) return null;
  let r = e.response?.data?.error;
  if (r?.details?.error_visibility !== "user_facing") return null;
  return r.message ?? null;
}

async function NNt(e) {
  let t = cw();
  if (t) return (t.isEnabled = true), await ne(300), y("api_overage_enable"), true;
  try {
    let r = await bt.post(
      "/api/oauth/organizations/:orgUUID/setup_overage_billing",
      { org_monthly_spend_limit: tsn },
      { auth: "teleport-org", timeout: 30000, credentials: e },
    );
    if (!r.ok) throw Error(`setup_overage_billing unavailable: ${r.reason}`);
    let o = await bt.put(
      "/api/oauth/organizations/:orgUUID/overage_spend_limit",
      { is_enabled: true },
      { auth: "teleport-org", credentials: e },
    );
    if (!o.ok) throw Error(`overage_spend_limit unavailable: ${o.reason}`);
    return y("api_overage_enable"), true;
  } catch (r) {
    if (Wj(r)) n(`overage setup failed: ${l(r)}`, { level: "error" });
    else h(r);
    return p("api_overage_enable", "request_failed"), false;
  }
}

async function _3e(e, t, r) {
  let o = cw();
  if (o)
    return (
      (o.spendLimitCents = e),
      await ne(300),
      y("api_spend_limit_update"),
      { ok: true, disabledUntil: null, usedCredits: o.usedCents ?? 0, reason: null }
    );
  try {
    let u = await bt.put(
      "/api/oauth/organizations/:orgUUID/overage_spend_limit",
      { is_enabled: true, monthly_credit_limit: e, currency: t },
      { auth: "teleport-org", credentials: r },
    );
    if (!u.ok) throw Error(`overage_spend_limit unavailable: ${u.reason}`);
    return (
      y("api_spend_limit_update"),
      { ok: true, disabledUntil: u.data?.disabled_until ?? null, usedCredits: u.data?.used_credits ?? null, reason: null }
    );
  } catch (u) {
    if (Wj(u)) n(`updateSpendLimit failed: ${l(u)}`, { level: "error" });
    else h(u);
    return (
      p("api_spend_limit_update", "request_failed"), { ok: false, disabledUntil: null, usedCredits: null, reason: h3e(u) }
    );
  }
}

async function qWn(e, t, r, o, u) {
  let d = cw();
  if (d) return (d.autoReload = e), await ne(300), y("api_auto_reload_update"), { ok: true, reason: null };
  try {
    let _ = await bt.put(
      "/api/oauth/organizations/:orgUUID/contracts/auto_reload_settings",
      {
        enabled: e,
        ...(t !== void 0 && { threshold_in_minor_units: t }),
        ...(r !== void 0 && { reload_to_in_minor_units: r }),
        currency: o,
      },
      { auth: "teleport-org", timeout: 30000, credentials: u },
    );
    if (!_.ok) throw Error(`auto_reload_settings unavailable: ${_.reason}`);
    return y("api_auto_reload_update"), { ok: true, reason: null };
  } catch (_) {
    if (Wj(_)) n(`auto_reload_settings update failed: ${l(_)}`, { level: "error" });
    else h(_);
    return p("api_auto_reload_update", "request_failed"), { ok: false, reason: h3e(_) };
  }
}

async function gle(e) {
  let t = cw();
  if (t)
    return (
      y("api_prepaid_balance_fetch"),
      {
        amount: t.balanceCents,
        currency: t.currency,
        auto_reload_settings: { enabled: t.autoReload },
        expiry_policy_months: t.expiryPolicyMonths ?? null,
      }
    );
  try {
    let r = await bt.get("/api/oauth/organizations/:orgUUID/prepaid/credits", {
      auth: "teleport-org",
      timeout: 5000,
      credentials: e,
    });
    if (!r.ok) throw Error(`prepaid/credits unavailable: ${r.reason}`);
    if (typeof r.data?.amount !== "number") return g("api_prepaid_balance_fetch", "not_supported"), null;
    return y("api_prepaid_balance_fetch"), r.data;
  } catch (r) {
    if (Wj(r)) n(`prepaid balance fetch failed: ${l(r)}`, { level: "error" });
    else h(r);
    return p("api_prepaid_balance_fetch", "request_failed"), null;
  }
}

function P5e(e) {
  return e.map(([t, r], o) => {
    let u = Math.round((t * r) / 100);
    return {
      id: `mock-${o}`,
      credit_minor_units: t,
      price_minor_units: t - u,
      discount_minor_units: u,
      local_credit_minor_units: t,
      local_price_minor_units: t - u,
    };
  });
}

async function zWn(e) {
  let t = cw();
  if (t)
    return (
      y("api_bundles_fetch"),
      {
        bundles: een[t.bundlePreset ?? "default"],
        bundle_paid_this_month_minor_units: 0,
        bundle_monthly_cap_minor_units: null,
        purchases_reset_at: new Date().toISOString(),
        currency: t.currency,
        stripe_product_id: "prod_mock",
        expiry_policy_months: t.expiryPolicyMonths ?? null,
      }
    );
  try {
    let r = await bt.get("/api/oauth/organizations/:orgUUID/prepaid/bundles", {
      auth: "teleport-org",
      timeout: 5000,
      credentials: e,
    });
    if (!r.ok) throw Error(`prepaid/bundles unavailable: ${r.reason}`);
    return y("api_bundles_fetch"), r.data;
  } catch (r) {
    if (Sp(r) && r.response?.status === 404) return y("api_bundles_fetch"), null;
    if (Wj(r)) n(`getAvailableBundles failed: ${l(r)}`, { level: "error" });
    else h(r);
    return g("api_bundles_fetch", "request_failed"), null;
  }
}

async function VWn(e) {
  return Hr("api_payment_method_fetch", async () => {
    let t = cw();
    if (t) return t.paymentMethod;
    let r = await bt.get("/api/oauth/organizations/:orgUUID/payment_method", {
      auth: "teleport-org",
      timeout: 5000,
      credentials: e,
    });
    if (!r.ok) throw Error(`payment_method unavailable: ${r.reason}`);
    return r.data ?? null;
  });
}

async function KWn(e, t) {
  return Hr("api_credits_purchase", async () => {
    let r = cw();
    if (r) {
      if ((await ne(500), r.purchaseOutcome === "3ds"))
        return { payment_status: "requires_action", payment_intent_client_secret: "pi_mock_secret" };
      if (r.purchaseOutcome === "poll")
        return (r.pollCount = 0), { payment_status: "pending_invoice", purchase_id: "mock-purchase-id" };
      return (
        (r.balanceCents += e.kind === "bundle" ? e.bundle.credit_minor_units : e.amountCents),
        { payment_status: "success" }
      );
    }
    let o =
        e.kind === "bundle"
          ? {
              amount: e.bundle.credit_minor_units,
              bundle_id: e.bundle.id,
              expected_price_minor_units: e.bundle.price_minor_units,
            }
          : { amount: e.amountCents },
      u = await bt.post("/api/oauth/organizations/:orgUUID/contracts/prepaid/credits", o, {
        auth: "teleport-org",
        timeout: 30000,
        credentials: t,
      });
    if (!u.ok) throw Error(`prepaid/credits purchase unavailable: ${u.reason}`);
    return u.data;
  });
}

async function nsn(e, t, r, o) {
  let u = cw();
  if (u) {
    if (u.taxBps === void 0) return g("api_purchase_tax_preview", "no_rate"), null;
    return (
      await ne(200),
      y("api_purchase_tax_preview"),
      { tax_minor_units: Math.round((e * u.taxBps) / 1e4), tax_rate_pct: u.taxBps / 100, tax_label: u.taxLabel ?? null }
    );
  }
  if (!r) return g("api_purchase_tax_preview", "no_product_id"), null;
  try {
    let d = await bt.post(
      "/api/oauth/organizations/:orgUUID/billing/tax_rate",
      { product_id: r, price: e, currency: t },
      { auth: "teleport-org", timeout: 5000, credentials: o },
    );
    if (!d.ok) throw Error(`billing/tax_rate unavailable: ${d.reason}`);
    let _ = d.data.tax_rate;
    if (_ == null) return g("api_purchase_tax_preview", "no_rate"), null;
    return (
      y("api_purchase_tax_preview"),
      { tax_minor_units: Math.round((e * _) / 100), tax_rate_pct: _, tax_label: d.data.tax_label ?? null }
    );
  } catch (d) {
    return n(`tax_rate preview unavailable: ${d}`), p("api_purchase_tax_preview", "request_failed"), null;
  }
}

async function rsn(e, t) {
  let r = cw();
  if (r) {
    r.pollCount = (r.pollCount ?? 0) + 1;
    let u = r.pollCount >= 2 ? "paid" : "pending";
    return { purchase_id: e, status: u, stripe_payment_intent_client_secret: null };
  }
  let o = await bt.get(`/api/oauth/organizations/:orgUUID/prepaid/commits/${e}`, {
    auth: "teleport-org",
    credentials: t,
  });
  if (!o.ok) throw Error(`prepaid/commits status unavailable: ${o.reason}`);
  return o.data;
}

function x5e(e) {
  if (e === void 0) return false;
  if (W5() && !(Xfe() ?? []).includes(_ee.kind)) return false;
  return true;
}

function PP(e, t) {
  return uf(e) && !u2t(Ye(e)) && qce() && x5e(t);
}

function M5e(e) {
  return e.isMainThread && x5e(e.requestDialog);
}

function I5e(e, t) {
  if (nc() !== void 0) return false;
  if (a.ANTHROPIC_MODEL) return false;
  let r = aA("model");
  if (r === null) {
    let o = Sre();
    if (o === null || !bre() || !uf(Ot(o))) return false;
  } else {
    if (r !== "userSettings") return false;
    let o = ye("userSettings")?.model;
    if (o === void 0 || !uf(Ot(o))) return false;
  }
  return rn("userSettings", { model: e }, void 0, t), true;
}

async function $Nt(e, t) {
  let r = cw();
  if (r) return uL(r.isEnabled ? null : "overage_not_provisioned", t), r.isEnabled ? "enabled" : "disabled";
  let o = null;
  try {
    o = await dI(e);
  } catch {
    return "unknown";
  }
  let u = o?.extra_usage;
  if (u?.is_enabled === true) return uL(null, t), "enabled";
  if (bmt(u)) return uL(u?.disabled_reason ?? null, t), "blocked";
  return u?.is_enabled === false ? "disabled" : "unknown";
}

async function csn({ skipLiveCheck: e = false, credentials: t, storageV5: r }) {
  if (!e) {
    let u = await $Nt(t, r);
    if (u === "enabled" || u === "blocked") return true;
  }
  let o = await NNt(t);
  if (o) uL(null, r);
  return o;
}

async function O5e(e, t) {
  if ((Mte(e), !owe())) await $Nt(t, e);
  return Qdn();
}

function lD() {
  return { stateByDir: {}, lastUsage: null };
}

function MB(e) {
  if (!e) return;
  (e.stateByDir = {}), (e.lastUsage = null);
}

function D5e(e, t) {
  return e.stateByDir[t];
}

function L5e(e, t, r, o, u, d) {
  let _ = {
    memories: r,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Available memories:
${o}`,
            ...(u && { cache_control: u }),
          },
        ],
      },
      ...(e.stateByDir[t]?.messages.slice(1) ?? []),
    ],
    hydrated: d,
  };
  return (e.stateByDir[t] = _), _;
}

function $5e(e, t, r, o) {
  let u = e.stateByDir[t];
  if (!u) return () => {};
  let d = { role: "assistant", content: [{ type: "text", text: o }] };
  return (
    (e.stateByDir[t] = { ...u, messages: [...u.messages, { role: "user", content: [{ type: "text", text: r }] }, d] }),
    () => {
      let _ = e.stateByDir[t];
      if (_?.messages.at(-1) === d) _.messages = _.messages.slice(0, -2);
    }
  );
}

function EX(e) {
  if (e.type !== "user" || !e.isMeta) return null;
  let t = e.message.content;
  if (typeof t === "string") return t;
  let r = t.filter((o) => o.type === "text");
  if (r.length !== t.length) return null;
  return r
    .map((o) => o.text)
    .join(`

`);
}

function b3e(e, t) {
  let r = false;
  for (let o = e.length - 1; o >= 0; o--) {
    let u = e[o];
    if (u.type === "attachment") {
      let d = u.attachment;
      if (!r && d.type === "invoked_skills" && d.skills.some((_) => _.content === t)) r = true;
      continue;
    }
    if (EX(u) === t) return "body";
  }
  return r ? "attachment" : null;
}

function fL(e) {
  let t = e.text;
  return typeof t === "string" && (t.startsWith(mL) || t === rE);
}

function sC(e) {
  let t = Bun.hash(b(e));
  return typeof t === "bigint" ? Number(t & 0xffffffffn) : t;
}

function Ahe(e, t) {
  if (typeof e === "string") {
    t.push("s", String(e.length), e.slice(0, 32), e.slice(-32));
    return;
  }
  switch (e.type) {
    case "text":
    case "image":
    case "document":
    case "search_result":
    case "thinking":
    case "redacted_thinking":
    case "tool_use":
    case "tool_result":
    case "tool_reference":
    case "server_tool_use":
    case "web_search_tool_result":
    case "web_fetch_tool_result":
    case "advisor_tool_result":
    case "code_execution_tool_result":
    case "bash_code_execution_tool_result":
    case "text_editor_code_execution_tool_result":
    case "tool_search_tool_result":
    case "mcp_tool_use":
    case "mcp_tool_result":
    case "container_upload":
    case "compaction":
    case "mid_conv_system":
    case "fallback":
      break;
    default: {
      let o = e;
      break;
    }
  }
  if ((t.push(e.type), "text" in e && typeof e.text === "string"))
    t.push("t", String(e.text.length), e.text.slice(0, 32), e.text.slice(-32));
  if ("thinking" in e && typeof e.thinking === "string") t.push("k", String(e.thinking.length));
  if ("id" in e && typeof e.id === "string") t.push("i", e.id);
  if ("tool_use_id" in e && typeof e.tool_use_id === "string") t.push("u", e.tool_use_id);
  if ("name" in e && typeof e.name === "string") t.push("n", e.name);
  if ("input" in e && e.input !== void 0) t.push("p", b(e.input));
  if ("source" in e && e.source && typeof e.source === "object") {
    let o = e.source;
    if ((t.push("m", String(o.type ?? ""), String(o.media_type ?? "")), typeof o.data === "string"))
      t.push(String(o.data.length));
  }
  let r = "content" in e ? e.content : void 0;
  if (Array.isArray(r)) {
    t.push("[", String(r.length));
    for (let o of r) Ahe(o, t);
    t.push("]");
  } else if (typeof r === "string") t.push("c", String(r.length), r.slice(0, 32), r.slice(-32));
  for (let [o, u] of Object.entries(e)) {
    if (ten.has(o) || u === void 0) continue;
    let d = typeof u === "string" ? u : b(u);
    t.push(o, d.length > 256 ? `len:${d.length}` : d);
  }
}

function U5e(e) {
  return e.map((t) => {
    if ((t.type === "api_system" || t.type === "user") && t.ephemeral) return IX;
    let r = [t.message.role];
    if (t.type === "api_system" && t.outputConfig !== void 0) r.push(`oc:${t.outputConfig.effort ?? ""}`);
    let o = t.message.content;
    if (Array.isArray(o)) {
      r.push(String(o.length));
      for (let d of o) Ahe(d, r);
    } else Ahe(o, r);
    let u = Bun.hash(r.join("|"));
    return typeof u === "bigint" ? Number(u & 0xffffffffn) : u;
  });
}

function B5e(e, t) {
  return e.slice(e.length - t);
}

function H5e(e, t, r) {
  return;
}

function j5e(e, t) {}

function hle(e, t) {}

function W5e(e) {
  return {};
}

function RG(e) {
  return (t) =>
    e((r) => {
      let o = t(r.classifierApprovals);
      if (o === r.classifierApprovals) return r;
      return { ...r, classifierApprovals: o };
    });
}

function dsn(e, t, r) {
  if (!e) return;
  e((o) => {
    if (o.approvals.get(t) === r) return o;
    let u = new Map(o.approvals);
    return u.set(t, r), { ...o, approvals: u };
  });
}

function psn(e, t) {
  return e.classifierApprovals.approvals.get(t);
}

function e6e(e, t) {
  if (!e) return;
  e((r) => {
    if (r.checking.has(t)) return r;
    let o = new Set(r.checking);
    return o.add(t), { ...r, checking: o };
  });
}

function V8(e, t) {
  if (!e) return;
  e((r) => {
    if (!r.checking.has(t)) return r;
    let o = new Set(r.checking);
    return o.delete(t), { ...r, checking: o };
  });
}

function fsn(e, t) {
  if (!e) return;
  e((r) => {
    if (!r.approvals.has(t)) return r;
    let o = new Map(r.approvals);
    return o.delete(t), { ...r, approvals: o };
  });
}

function t6e(e) {
  if (!e) return;
  e((t) => {
    if (t.approvals.size === 0 && t.checking.size === 0) return t;
    return { approvals: new Map(), checking: new Set() };
  });
}

function UX() {
  let e = [],
    t = [Gj.FALLBACK_RENDER_SITE],
    r = [];
  return {
    plugins: () => e,
    setPlugins: (o) => {
      e = o;
    },
    renderSites: () => t,
    setRenderSites: (o) => {
      t = o;
    },
    interfaces: () => r,
    setInterfaces: (o) => {
      r = o;
    },
  };
}

function i6e() {
  let e = {};
  for (let t of r_.EVENT_NAMES) e[t] = BX(t);
  return e;
}

function ien(e) {
  ju.latest.setPlugins(e.map(cC.copyPlugin)), ju.changed.emit(cC.devtoolsHooks());
}

function WX() {
  let e = new WeakMap(),
    t = 0;
  return {
    of: (r) => {
      let o = e.get(r);
      if (o === void 0) (t += 1), (o = t), e.set(r, o);
      return o;
    },
  };
}

function gL() {
  let e = Hd.hooksOn("prompt.submit");
  return e.length === 0 ? "" : JSON.stringify([zX.of(Hd.latest.plugins()), e.map((t) => [t.plugin, t.generation])]);
}

function Fct(e) {
  return e.kind === "loop" ? "loop_wakeup" : "schedule_wakeup";
}

function WNt({ promptSource: e, wakeupSource: t }) {
  if (t) return t;
  switch (e) {
    case "sdk":
      return "sdk";
    case "system":
      return "system";
    case "typed":
    case "queued":
    case "suggestion_accepted":
      return "user";
  }
}

function $ct({ isNonInteractive: e, isMeta: t, callerSource: r }) {
  if (e) return "sdk";
  if (t) return "system";
  return r ?? "typed";
}

async function W9({ text: e, context: t, result: r, promptSource: o, wakeupSource: u, tiers: d }) {
  let _,
    C = t.abortController.signal.aborted,
    A = () => C || A9(t.abortController.signal);
  try {
    for await (let x of hSe(e, he(t).mode, t, j9(o, u), d)) {
      if (x.message?.type === "progress") continue;
      if ($9(x, t.abortController.signal)) C = true;
      if (x.blockingError)
        return { blocked: yL(GX(Q7(x.blockingError), e, x.suppressOriginalPrompt)), ...(A() && { wasCancelled: true }) };
      if (x.preventContinuation) {
        let F = B9(x.stopReason);
        return (
          (r.messages = [...r.messages, H9(F), U9(F)]),
          (r.shouldQuery = false),
          (r.resultText = F),
          (r.allowedTools = void 0),
          { blocked: r, stopped: F, ...(A() && { wasCancelled: true }) }
        );
      }
      if (x.sessionTitle) _ = x.sessionTitle;
      if (x.additionalContexts && x.additionalContexts.length > 0)
        r.messages = [...r.messages, DX(x.additionalContexts)];
      let M = F9(x.message);
      if (M) r.messages = [...r.messages, M];
    }
  } catch (x) {
    if (!N9(x)) throw x;
    n("UserPromptSubmit hooks cancelled (control stream closed)");
  }
  return A() ? { sessionTitle: _, wasCancelled: true } : { sessionTitle: _ };
}

function y6e({ result: e, context: t, promptSource: r, wakeupSource: o }) {
  let u,
    d,
    _ = new Map();
  async function C(M, F) {
    let U = z9(F.managedHooksExcluded === true ? (d?.scratch ?? e) : e),
      B = q9(U, await W9({ text: M, context: t, result: U, promptSource: r, wakeupSource: o, tiers: F }));
    return _.set(M, B), B;
  }
  async function A(M) {
    let F = await C(M, aGe);
    return (d = F), (u = F.sessionTitle ?? u), F;
  }
  function x(M) {
    let F = _.get(M);
    if (!F) return;
    return (
      (e.messages = F.scratch.messages),
      (e.allowedTools = F.scratch.allowedTools),
      (e.shouldQuery = F.scratch.shouldQuery),
      (e.resultText = F.scratch.resultText),
      (u = F.sessionTitle ?? u),
      F
    );
  }
  return { managed: A, pass: C, commit: x, managedRun: () => d, sessionTitle: () => u };
}

function Mhe({ submission: { text: e, input: t, pastedContents: r }, origin: o, turnId: u, wait: d }) {
  let _ = [];
  if (typeof t !== "string") {
    for (let C of t)
      if (C.type === "image")
        _.push({ type: "image", mediaType: C.source.type === "base64" ? C.source.media_type : void 0 });
      else if (C.type === "document") _.push({ type: "document" });
  }
  for (let C of Object.values(r ?? {}))
    if (C.type === "image" || C.type === "audio")
      _.push({ type: C.type, mediaType: C.mediaType, filename: C.filename });
  return { text: e, wait: d, ...(_.length > 0 && { attachments: _ }), origin: o, ...(u !== void 0 && { turnId: u }) };
}

function uen(e) {
  let t = false;
  return {
    origin: e?.origin,
    settle(r) {
      (t = true), e?.settle(r);
    },
    [Symbol.dispose]() {
      if (!t) (t = true), e?.settle({ drop: m_.NEVER_SUBMITTED });
    },
  };
}

function e8(e, t, r) {
  let o = e.matchers.get(t);
  return o === void 0 ? true : e.hopKey.kind === "worker" ? wb.mayMatch(o, r) : wb.matches(o, r);
}

function t8(e, t) {
  let r = [];
  for (let o of e) {
    let u = o.status();
    if (u.kind !== "live") {
      n(
        `hooks module ${u.kind === "retiring" || (u.kind === "unloaded" && u.retired) ? `${o.name}: its environment was retired by a reload during ${t}` : u.kind === "unloaded" ? `${o.name}: its environment was unloaded (during ${t})` : `${o.name}: ${u.reason} (during ${t})`}; passing on`,
      );
      continue;
    }
    r.push(o);
  }
  return r;
}

async function S6e(e) {
  let { event: t, e: r, call: o, signal: u, origin: d } = e,
    _ = t8(e.members, t),
    C = _.findIndex((pe) => Pd.admits(pe, t, r)),
    A = C === -1 ? [] : _.slice(C),
    x = A[0]?.hopKey;
  if (x === void 0) return o(r);
  let M = A.map((pe) => pe.name).join("+");
  if (d !== void 0) n(`hooks module ${M}: ${t} nested in ${d.join(" > ")}`);
  let F = (pe, fe) => o(pe, fe),
    U = performance.now();
  for (let pe of A) pe.enter();
  let B;
  try {
    B = await x.dispatch(
      {
        id: x.nextDispatchId(),
        event: t,
        payload: r,
        environments: A.map((pe) => pe.environmentId),
        origin: Ay.originName(d),
        hookOrigin: d,
      },
      F,
      u,
    );
  } finally {
    for (let pe of A) pe.leave();
  }
  let z =
    typeof r === "object" && r !== null && "requestId" in r && typeof r.requestId === "string"
      ? ` key=${r.requestId}`
      : "";
  return (
    n(`hooks module ${M} ${t} settled in ${(performance.now() - U).toFixed(1)}ms (next() included)${z}`),
    Pd.narrow(B.result)
  );
}

function b6e(e, t) {
  let r = [],
    o = new Map();
  for (let u of Jt().loadedModules) {
    if (!u.events.has(e)) continue;
    if (t !== void 0 && t.includes(u.name)) {
      n(`hooks module ${u.name} ${e} skipped: re-entry (its own frame is being dispatched; origin ${t.join(" > ")})`);
      continue;
    }
    let d = {
      name: u.name,
      run: (_, C, A) => Mb.dispatchHop({ members: [u], event: e, e: _, call: A, signal: C.signal, origin: t }),
      hop: {
        key: u.hopKey,
        run: ({ members: _, e: C, call: A, signal: x }) =>
          Mb.dispatchHop({
            members: _.map((M) => {
              let F = o.get(M);
              if (F === void 0) throw new Re.HooksError(`${e}: a hop member is not one of these handlers`);
              return F;
            }),
            event: e,
            e: C,
            call: A,
            signal: x,
            origin: t,
          }),
      },
    };
    o.set(d, u), r.push(d);
  }
  return r;
}

function w6e(e, t) {
  let r = Jt().loadedModules,
    o = r.find((d) => d.name === t.plugin),
    u = [];
  if (o === void 0) return { environments: u };
  for (let d of r) {
    if (!d.events.has("ui.resolve") || d.status().kind !== "live" || d.hopKey !== o.hopKey || t.origin.includes(d.name))
      continue;
    if (!e8(d, "ui.resolve", e)) continue;
    u.push(d.environmentId);
  }
  return { environments: u };
}

function r8({ byDrawing: e, plugin: t, except: r, handle: o }) {
  for (let [u, d] of e)
    if (u !== r && u.startsWith(`${t}\x00`)) {
      let _ = d.get(o);
      if (_ !== void 0) return _;
    }
  return;
}

function Ohe() {
  let e = new Map(),
    t = new Map(),
    r = 0;
  return {
    heldPress: (o, u) => {
      let d = e.get(u);
      return d?.plugin === o ? d : void 0;
    },
    holdDrawing(o, u, d) {
      let _ = n8(o, u),
        C = t.get(_) ?? new Map(),
        A = new Map();
      for (let { handle: M, element: F } of d) {
        let U = C.get(M) ?? r8({ byDrawing: t, plugin: o, except: _, handle: M }) ?? ++r;
        A.set(M, U), e.set(U, { plugin: o, handle: M, element: F, ...u });
      }
      let x = [];
      for (let [M, F] of C)
        if (!A.has(M) && r8({ byDrawing: t, plugin: o, except: _, handle: M }) === void 0) e.delete(F), x.push(M);
      return A.size === 0 ? t.delete(_) : t.set(_, A), { hosted: A, released: x };
    },
    holdersOf: (o) =>
      Array.from(t.keys())
        .filter((u) => u.endsWith(n8("", o)))
        .map((u) => u.slice(0, u.indexOf("\x00"))),
    forgetPresses(o) {
      for (let [u, d] of e) if (d.plugin === o) e.delete(u);
      for (let u of t.keys()) if (u.startsWith(`${o}\x00`)) t.delete(u);
    },
    heldPressCount: () => e.size,
  };
}

function qj(e, t, r) {
  if (t.length === 0) return;
  let o = Jt().loadedModules.find((u) => u.name === e);
  if (o === void 0) {
    n(`ui.render (${r.component} ${r.requestId}): ${e} drew Buttons but is not loaded; nothing to release`);
    return;
  }
  o.releasePresses(t);
}

function pen(e, t) {
  let r = new Map();
  for (let { plugin: u, handle: d, element: _ } of MU.buttonsOf(e))
    r.set(u, [...(r.get(u) ?? []), { handle: d, element: _ }]);
  let o = new Map();
  for (let u of new Set([...uS.heldPresses.holdersOf(t), ...r.keys()])) {
    let { hosted: d, released: _ } = uS.heldPresses.holdDrawing(u, t, r.get(u) ?? []);
    o.set(u, d), qj(u, _, t);
  }
  return MU.renumberedTree(e, (u, d) => o.get(u)?.get(d));
}

function men(e, t) {
  let r = new Map();
  for (let { plugin: o, handle: u } of MU.buttonsOf(e)) r.set(o, [...(r.get(o) ?? []), u]);
  for (let [o, u] of r) qj(o, u, t);
}

async function fen({ plugin: e, handle: t, surface: r }) {
  let o = uS.heldPresses.heldPress(e, t);
  if (o === void 0) {
    n(`ui.press: no Button of ${e} is held under handle ${t}; nothing ran`);
    return;
  }
  let u = Dhe(o, r),
    d = performance.now(),
    _ = await QO.runChain({ e: u, handlers: [...Pd.moduleHandlersFor("ui.press"), Ihe(o)], site: Lhe });
  return (
    n(`ui.press ${e}/${u.element} in ${u.component} from ${r}: settled in ${(performance.now() - d).toFixed(1)}ms`), _
  );
}

function o8() {
  let e = new WeakMap();
  return {
    get: (t) => e.get(t),
    set: (t, r) => {
      e.set(t, r);
    },
  };
}

function i8(e) {
  let { props: t, press: r } = e;
  return !He(t) ||
    typeof t.key !== "string" ||
    t.key === "" ||
    typeof t.label !== "string" ||
    Object.keys(t).length !== 2
    ? "Button props must be { key, label }, both strings"
    : t.label.length > uC
      ? `Button "${t.key}" label longer than ${uC} characters`
      : He(r) &&
          typeof r.plugin === "string" &&
          r.plugin !== "" &&
          typeof r.handle === "number" &&
          Number.isInteger(r.handle)
        ? e.children === void 0
          ? void 0
          : `Button "${t.key}" takes no children`
        : `Button "${t.key}" is not held by a plugin of this chain`;
}

function B6e(e, t) {
  let r = Ef.PROP_VALUES[e];
  return r === void 0
    ? Ef.SIZE_PROPS.has(e)
      ? typeof t === "number"
        ? Number.isFinite(t) && t >= 0 && t <= Ef.SIZE_LIMIT
          ? void 0
          : `must be a finite number between 0 and ${Ef.SIZE_LIMIT}`
        : typeof t === "string" && /^\d{1,3}%$/.test(t)
          ? void 0
          : "must be a number or a percentage"
      : Ef.NUMBER_PROPS.has(e)
        ? typeof t === "number" && Number.isFinite(t) && Math.abs(t) <= Ef.SIZE_LIMIT
          ? void 0
          : `must be a finite number within ${Ef.SIZE_LIMIT}`
        : Ef.COLOR_PROPS.has(e)
          ? typeof t === "string" && /^[#a-zA-Z0-9_().,% -]{1,40}$/.test(t)
            ? void 0
            : "must be a color (a theme key, a name, or hex)"
          : c8.has(e)
            ? typeof t === "boolean"
              ? void 0
              : "must be a boolean"
            : "has no value rule"
    : typeof t === "string" && r.has(t)
      ? void 0
      : `must be one of ${[...r].join(", ")}`;
}

function j6e(e) {
  for (let t of e.split(";")) {
    let r = t.slice(0, t.indexOf(":")).trim().toLowerCase();
    if (Ib.CONCEALING_STYLE_PROPERTIES.has(r)) return `style property "${r}"`;
  }
  return;
}

function h8(e) {
  for (let t = 0; t < e.length; ) {
    Yj.lastIndex = t;
    let r = Yj.exec(e);
    if (r === null || r[0] === "") return false;
    t += r[0].length;
  }
  return true;
}

function G6e(e) {
  if (typeof e !== "string") return "style is not a string";
  if (e.length > 2000) return "style is longer than 2000 characters";
  if (/[{}<>]|\/\*|\\|@|javascript:|expression\s*\(/i.test(e))
    return "style carries an expression, an @-rule, a scheme, braces, a comment or an escape";
  for (let t of e.split(";")) {
    if (t.trim() === "") continue;
    let r = t.indexOf(":");
    if (r === -1) return `style declaration without a value: ${t.trim()}`;
    let o = t.slice(0, r).trim().toLowerCase(),
      u = t.slice(r + 1).trim();
    if (!y8.has(o)) return `style property not allowed: ${o}`;
    if (u === "" || $w.FETCHING_CALL.test(u) || !h8(u)) return `style value not allowed for ${o}: ${u}`;
  }
  return;
}

function q6e(e, t) {
  let r = t === g_.ONE_ENGINE_NODE_COMPONENT,
    o = 0,
    u = 0,
    d = 0,
    _ = 0,
    C = false;
  function A(M, { depth: F, inInline: U, concealedBy: B }) {
    if (++o > Vj) return `more than ${Vj} nodes`;
    if (F > Kj) return `deeper than ${Kj}`;
    if (((C ||= r && d > 0), typeof M === "string")) {
      if (F === 0) return "the root must be an element";
      if (M.length > uC) return `a text child longer than ${uC} characters`;
      return (
        (u += M.length),
        (_ +=
          (U ? 0 : 1) +
          Dn(
            M,
            `
`,
          ) +
          Math.floor(se(M) / g_.DIALOG_FRAME_COLUMNS)),
        u > g_.MAX_TREE_TEXT_CHARS ? `more than ${g_.MAX_TREE_TEXT_CHARS} characters of text` : void 0
      );
    }
    if (!He(M)) return `node is ${SC(M)}`;
    let W = M,
      { props: z, children: pe, ref: fe } = W;
    if (W.type === "engine")
      return (
        (d += 1),
        U
          ? "engine node inside an inline element"
          : B === void 0
            ? typeof fe === "number" && Number.isInteger(fe) && fe >= 0
              ? void 0
              : "engine node without a ref"
            : `engine node under a ${B}`
      );
    if (!a8(W.type)) return `unknown element type ${SC(W.type)}`;
    if (U && hC[W.type] === "block") return `${W.type} inside an inline element`;
    if (W.type === "Button") {
      let Ce = i8(W);
      if (Ce !== void 0) return Ce;
      return (
        (_ += 1),
        (u += l8(W.props)),
        u > g_.MAX_TREE_TEXT_CHARS ? `more than ${g_.MAX_TREE_TEXT_CHARS} characters of text` : void 0
      );
    }
    if (!U && hC[W.type] === "inline") _ += 1;
    let me = B,
      ge = 0;
    if (z !== void 0) {
      if (!He(z)) return `${W.type} props is ${SC(z)}`;
      for (let [Ce, Ie] of Object.entries(z)) {
        if (!Ef.RENDER_PROPS[W.type].has(Ce)) return `${W.type} prop "${Ce}" is not allowed`;
        if (typeof Ie !== "string" && typeof Ie !== "number" && typeof Ie !== "boolean")
          return `${W.type} prop "${Ce}" is ${SC(Ie)}`;
        if (Ce === "style") {
          let Ee = Xj.styleProblem(Ie);
          if (Ee !== void 0) return `${W.type} ${Ee}`;
          let Pe = typeof Ie === "string" ? $w.concealingStyleProperty(Ie) : void 0;
          if (Pe !== void 0) me ??= `${W.type} with ${Pe}`;
        } else {
          let Ee = Ib.propValueProblem(Ce, Ie);
          if (Ee !== void 0) return `${W.type} prop "${Ce}" ${Ee}`;
          if (r && Ef.SIZE_PROPS.has(Ce)) return `${W.type} prop "${Ce}" around the dialog`;
          if (Ib.CONCEALING_PROPS.has(Ce)) me ??= `${W.type} with prop "${Ce}"`;
          if (typeof Ie === "number")
            (_ += Math.abs(Ie) * (Ib.ROWS_PER_UNIT[Ce] ?? 0)),
              (ge += Ce === "gap" || Ce === "rowGap" ? Math.abs(Ie) : 0);
          else if (Ce === "borderStyle") _ += Ib.BORDER_ROWS;
        }
      }
    }
    if (pe !== void 0) {
      if (!Array.isArray(pe)) return `${W.type} children is ${SC(pe)}`;
      _ += ge * pe.length;
      for (let Ce of pe) {
        let Ie = A(Ce, { depth: F + 1, inInline: U || hC[W.type] === "inline", concealedBy: me });
        if (Ie !== void 0) return Ie;
      }
    }
    return;
  }
  let x = A(e, { depth: 0, inInline: false, concealedBy: void 0 });
  return x !== void 0 || !r
    ? x
    : d === 1
      ? C
        ? "draws below the dialog"
        : _ > g_.DIALOG_FRAME_ROWS_MAX
          ? `more than ${g_.DIALOG_FRAME_ROWS_MAX} rows around the dialog`
          : void 0
      : `${d} engine nodes; ${t} is drawn by exactly one`;
}

async function K6e({ input: e, signal: t, origin: r }) {
  let o = LU.ledger(),
    u = await QO.runChain({
      e,
      handlers: [...Pd.moduleHandlersFor(Uw, r), V9(o)],
      site: Fhe,
      signal: t,
      origin: Ay.originName(r),
    }),
    d = Qj.validateTree(u, e.component);
  if (d !== void 0)
    return (
      n(`ui.render (${e.component}): a hook returned a tree that does not validate (${d}); drawing the engine's own`, {
        level: "warn",
      }),
      X8.releaseRefused(u, e),
      Ns.RENDER_ENGINE_FALLBACK
    );
  return NL.heldByTree.set(u, o), u;
}

function _8() {
  let e = new WeakMap();
  return (t) => {
    let r = e.get(t);
    if (r !== void 0) return r;
    let o = pl.stableKey(t);
    return e.set(t, o), o;
  };
}

function b8({ bumped: e, plugin: t, now: r, event: o }) {
  e.set(t, { lastAt: r(), pending: void 0 }), xP(o);
}

function Q6e(e = Date.now) {
  let t = new Map();
  return {
    invalidate: (r, o) => {
      let u = t.get(r) ?? { lastAt: Number.NEGATIVE_INFINITY, pending: void 0 };
      if (u.pending !== void 0) return;
      let d = e(),
        _ = $he - (d - u.lastAt);
      if (_ <= 0) {
        t.set(r, { lastAt: d, pending: void 0 }), xP(o);
        return;
      }
      let C = setTimeout(b8, _, { bumped: t, plugin: r, now: e, event: o });
      C.unref(), t.set(r, { lastAt: u.lastAt, pending: C });
    },
  };
}

function gen() {
  for (let e of MP.RENDER_EVENTS) xP(e);
}

function nXe() {
  let e = new Map(),
    t,
    r = 0,
    o = 0;
  return {
    get: (u) => e.get(u),
    set: (u, d) => {
      if (d.versions !== t || d.version !== r) e.clear(), (t = d.versions), (r = d.version);
      e.delete(u), e.set(u, d);
      for (let _ of e.keys()) {
        if (e.size <= k8) break;
        e.delete(_);
      }
    },
    drop: (u, d) => {
      if (e.get(u) === d) e.delete(u);
    },
    size: () => e.size,
    reused: () => o,
    countReuse: () => {
      o += 1;
    },
  };
}

function Uhe() {
  let e = wh.sharedDrawStore();
  async function t(o, { signal: u, origin: d }) {
    let _ = Y8.renderInstanceKey(o),
      C = wh.sharedPropsKey(o, d),
      A = wh.currentVersion(),
      x = o.requestId === "" ? void 0 : e.get(_);
    if (x !== void 0 && wh.answers(x, C, A))
      return (
        e.countReuse(),
        n(
          `ui.render (${o.component} ${o.requestId}): ${o.surface} reuses the other surface's evaluation (one dispatch per draw)`,
        ),
        wh.heldFor(o, x.drawn)
      );
    let M = Y8.dispatchRenderSite({ input: o, signal: u, origin: d });
    if (o.requestId !== "") {
      let F = wh.sharedDrawOf(C, A, M);
      e.set(_, F),
        M.then(
          (U) => {
            F.settled = U;
          },
          (U) => n(`ui.render (${o.component} ${o.requestId}): evaluation failed: ${l(U)}`, { level: "error" }),
        ),
        u.addEventListener(
          "abort",
          () => {
            if (F.settled === void 0) e.drop(_, F);
          },
          { once: true },
        );
    }
    return wh.heldFor(o, M);
  }
  function r(o, u) {
    if (o.requestId === "") return;
    let d = e.get(Y8.renderInstanceKey(o));
    return d !== void 0 && wh.answers(d, wh.sharedPropsKey(o, u), wh.currentVersion()) ? d.settled : void 0;
  }
  return { uiRender: t, settled: r, reuseCount: e.reused, sharedCount: e.size };
}

function hen(e) {
  if (e?.type !== "user") return false;
  let t = e.message.content.at(0);
  if (t?.type !== "tool_result" || t.is_error !== true) return false;
  if (e.toolUseResult === UU) return true;
  let r = t.content;
  return typeof r === "string" && NK.some((o) => r.startsWith(o));
}

function ben() {
  let e;
  return {
    set: (t) => {
      e = t;
    },
    get: () => e,
  };
}

function Bhe(e) {
  let t = wC.createLateState(e);
  return {
    install: (r) => {
      t.installed.set(r);
      for (let o of t.pending) t.attached.set(o, r.onInvalidate(o));
      t.pending.clear();
    },
    render: wC.renderOver(t),
  };
}

function uXe(e) {
  if (typeof e === "string") return;
  if (e.type === "engine") return e.ref === 0 ? void 0 : e.ref;
  if (e.type === "Button") return;
  for (let t of e.children ?? []) {
    let r = uXe(t);
    if (r !== void 0) return r;
  }
  return;
}

async function ven(e) {
  let t = await Promise.all(
    e.map((r) =>
      Pd.hasModuleHandlers("agent.offer", { agent: r.agentType })
        ? Ub.eventCall("agent.offer", {})({ agent: r.agentType, description: r.whenToUse ?? "", source: r.source })
        : { offered: true },
    ),
  );
  return e.filter((r, o) => t[o]?.offered === true);
}

async function Pen(e, t) {
  if (!Pd.hasModuleHandlers("skill.prompt", { skill: e })) return [...t];
  let r = t
      .flatMap((u) => (u.type === "text" ? [u.text] : []))
      .join(`
`),
    o = await Ub.eventCall("skill.prompt", {})({ skill: e, text: r });
  return o.text === r ? [...t] : [{ type: "text", text: o.text }, ...t.filter((u) => u.type !== "text")];
}

function Len(e) {
  let t = LU.ledger();
  return {
    core: {
      name: "core",
      core: true,
      budgetMs: 0,
      run(o) {
        let u = { model: e(o.model) };
        return t.keep(o, u), Promise.resolve(u);
      },
    },
    runs: t,
  };
}

function gXe({ result: e, runs: t, input: r, resolveModel: o, signal: u }) {
  if (e.deny !== void 0 && u.aborted) throw new Ze();
  if (e.deny !== void 0) return n(`agent.spawn ${r.subagentType}: denied by a hook (${e.deny})`), { deny: e.deny };
  if (typeof e.model !== "string") return { deny: zhe };
  let d = t.last(),
    _ = Ghe(e.model, d);
  if (_ !== r.model)
    n(
      `agent.spawn ${r.subagentType}: model ${r.model ?? "(inherit)"} -> ${_ ?? "(inherit)"} by a hook (resolves to ${_ === d?.input.model && d !== void 0 ? d.made.model : o(_)})`,
    );
  return { model: _ };
}

function Khe(e, t) {
  let r = t.deny ?? e.deny,
    o = t.ask ?? e.ask,
    u =
      typeof r === "string"
        ? { deny: r }
        : typeof o === "string"
          ? { ask: o }
          : e.allow || t.allow
            ? { allow: true }
            : {},
    d = t.updatedInput ?? e.updatedInput;
  if (d !== void 0) u.updatedInput = d;
  if (e.additionalContext || t.additionalContext)
    u.additionalContext = (e.additionalContext ?? []).concat(t.additionalContext ?? []);
  return u;
}

function bXe(e) {
  let t = e.ask === void 0 ? {} : { ask: e.ask };
  if (e.updatedInput !== void 0) t.updatedInput = e.updatedInput;
  if (e.additionalContext !== void 0) t.additionalContext = e.additionalContext;
  return t;
}

async function Vhe(e, t, r) {
  let o = { kind: "none" },
    u,
    d;
  for await (let C of e) {
    let {
      permissionBehavior: A,
      hookPermissionDecisionReason: x,
      blockingError: M,
      updatedInput: F,
      additionalContexts: U,
      ...B
    } = C;
    if (M) o = { kind: "deny", reason: qUt(`PreToolUse:${t}`, M) };
    let W = Ob.RANK[o.kind];
    switch (A) {
      case "deny":
        if (W < Ob.RANK.deny) o = { kind: "deny", reason: x ?? "denied" };
        break;
      case "ask":
        if (W < Ob.RANK.ask) o = { kind: "ask", reason: x ?? "" };
        break;
      case "allow":
        if (W < Ob.RANK.allow) o = { kind: "allow" };
        break;
      case "defer":
        r({ permissionBehavior: A, hookSource: B.hookSource });
        break;
      case "passthrough":
      case void 0:
        break;
    }
    if (F !== void 0) u = F;
    if (U && U.length > 0) d = (d ?? []).concat(U);
    if (Object.keys(B).some((z) => z !== "hookSource")) r(B);
  }
  let _ =
    o.kind === "deny"
      ? { deny: o.reason }
      : o.kind === "ask"
        ? { ask: o.reason }
        : o.kind === "allow"
          ? { allow: true }
          : {};
  if (u !== void 0) _.updatedInput = u;
  if (d !== void 0) _.additionalContext = d;
  return _;
}

async function tW(e, t) {
  let r = [];
  return {
    result: await Vhe(e, t, (u) => {
      r.push(u);
    }),
    yields: r,
  };
}

function Nen(e, t) {
  let r = t,
    o;
  return {
    managed: {
      name: qhe,
      managed: true,
      budgetMs: 0,
      async run(u, d) {
        let _ = jf.toolArgsOf(u);
        r ??= await tW(e(_, { managedHooksOnly: true }), u.tool);
        let C = r.result;
        if (C.deny !== void 0) return C;
        o = pl.stableKey(C.updatedInput ?? _);
        let A = await d(C.updatedInput === void 0 ? u : jf.toolEventInput(u.tool, u.tool_use_id, C.updatedInput));
        return Khe(A.updatedInput !== void 0 && pl.stableKey(A.updatedInput) !== o ? Ob.undecided(C) : C, A);
      },
    },
    pass: () => r,
    covers: (u) => o !== void 0 && pl.stableKey(u) === o,
  };
}

function $en(e, t) {
  let r = LU.ledger();
  return {
    core: {
      name: "core",
      core: true,
      budgetMs: 0,
      async run(u) {
        let d = jf.toolArgsOf(u),
          _ = await tW(e(d, { managedHooksExcluded: t(d) }), u.tool);
        return r.keep(d, _), _.result;
      },
    },
    runs: r,
  };
}

function E8() {
  let e = new Map();
  function t(u) {
    let d = e.get(u);
    return e.delete(u), d;
  }
  function r(u, d) {
    for (let _ of u) {
      if (_.uuid === void 0) continue;
      t(_.uuid)?.settle(d(_));
    }
  }
  let o = false;
  return {
    record: (u, d) => {
      if (!o)
        (o = true),
          tO.subscribe((_) => r(_, () => ({ drop: "the prompt was removed from the queue before it ran" }))),
          mpe.subscribe((_) =>
            r(_, (C) => ({
              text:
                typeof C.value === "string"
                  ? C.value
                  : zr(
                      C.value,
                      `
`,
                    ),
            })),
          );
      e.set(u, d);
    },
    take: t,
    settleEach: r,
  };
}

function Uen(e) {
  let t = LU.ledger(),
    r,
    o = J1.managedMember(e, (_) => {
      r = _;
    });
  async function u(_, C) {
    let A = await e(_, _ === r ? { managedHooksExcluded: true } : {}),
      x = A.drop === void 0 && C !== void 0 ? { text: A.text, origin: C } : A;
    return t.keep(_, x), x;
  }
  let d = J1.coreMember(u);
  return { managed: o, core: d, runs: t, rerun: u };
}

async function Ben({ chained: e, core: { runs: t, rerun: r }, originalText: o }) {
  let u = e;
  if (u.drop === void 0) {
    let { text: d, context: _, origin: C } = u,
      A = t.last((x) => x.input === d) !== void 0;
    if (!t.ran())
      n(
        "prompt.submit: the chain answered without running core; running the UserPromptSubmit settings hooks over its text",
      ),
        (u = J1.withContext(await r(d, C), _));
    else if (!A)
      n(
        "prompt.submit: the chain answered a text core did not run on; running the UserPromptSubmit settings hooks over it",
      ),
        (u = J1.withContext(await r(d, C), _));
  }
  if (u.drop !== void 0) n(`prompt.submit: dropped (${u.drop})`);
  else if (u.text !== o) n(`prompt.submit: text rewritten by a hook (${o.length} -> ${u.text.length} chars)`);
  return u;
}

function PC({ message: e }, t) {
  if (e.type !== "user" || typeof e.message.content === "string") return;
  for (let r of e.message.content) if (r.type === "tool_result" && r.tool_use_id === t) return r;
  return;
}

function RXe(e, t, r) {
  let o = e.find((u) => PC(u, t) !== void 0)?.message;
  return o?.type !== "user" || typeof o.message.content === "string"
    ? { content: [r] }
    : {
        content: o.message.content.map((u) => (u.type === "tool_result" && u.tool_use_id === t ? r : u)),
        imagePasteIds: o.imagePasteIds,
        mcpMeta: o.mcpMeta,
        toolEndsTurn: o.toolEndsTurn,
      };
}

function PXe(e, t) {
  for (let r of e) {
    let o = PC(r, t);
    if (o !== void 0) return { text: jf.toolResultText(o.content), ...(o.is_error === true && { isError: true }) };
  }
  return { text: "" };
}

function xXe(e) {
  for (let { message: t } of e) if (t.type === "user" && t.toolUseResult !== void 0) return t.toolUseResult;
  return;
}

function MXe(e, t) {
  let r = e.findIndex((o) => PC(o, t) !== void 0);
  return e.filter((o, u) => u !== r);
}

function Bct(e) {
  if (e?.type === "rule") return true;
  if (e?.type === "subcommandResults") return [...e.reasons.values()].every((t) => Bct(t.decisionReason));
  return false;
}

function Yhe(e) {
  switch (e) {
    case "allow":
      return "allowed";
    case "deny":
      return "denied";
    default:
      return "asked for confirmation for";
  }
}

function E3e(e) {
  if (!e) return;
  switch (e.type) {
    case "rule":
    case "mode":
    case "subcommandResults":
    case "permissionPromptTool":
      return;
    case "classifier":
    case "hook":
    case "asyncAgent":
    case "sandboxOverride":
    case "workingDir":
    case "safetyCheck":
    case "other":
      return e.reason;
  }
}

function K_(e) {
  return e.name?.startsWith("mcp__") || e.isMcp === true;
}

function _L(e) {
  return e.mcpInfo?.serverName ?? (e.name?.startsWith("mcp__") ? e.name.split("__")[1] : void 0);
}

function bee(e) {
  if (e === void 0) return {};
  if (!e.includes("*")) return null;
  let t;
  for (let r of e) {
    if (r === "*") continue;
    let { toolName: o, ruleContent: u } = Ur(r);
    if (o !== yt || !u) return null;
    (t ??= []),
      t.push(
        ...u
          .split(",")
          .map((d) => d.trim())
          .filter(Boolean),
      );
  }
  return t ? { allowedAgentTypes: t } : {};
}

function HXe(e) {
  let t = e.length > 1e4 ? e.slice(0, 1e4) : e;
  for (let r of Gen) if (r.pattern.test(t)) return r;
  return null;
}

function p9n(e) {
  return HXe(e)?.warning ?? null;
}

function Db(e) {
  return HXe(e)?.category ?? null;
}

function wee(e, t, r) {
  if (r === null || !Yen.has(r)) return "none";
  if (e.length > 2000) return "unknown";
  try {
    let o = Xen(e, t),
      u = Qen(e),
      d = Jen(e);
    if (u === null && d === null) return "unknown";
    if (u === "unknown" || d === "unknown") return "unknown";
    let _ = [...(u ?? []), ...(d ?? [])];
    if (_.length === 0) return "unknown";
    let C = new Set();
    for (let A of _) {
      let x = Zen(A, t, o);
      if (x === "unknown") return "unknown";
      C.add(x);
    }
    if (C.size > 1) return "mixed";
    return C.values().next().value ?? "unknown";
  } catch (o) {
    return (
      h(new R(`destructive-target-scope parse failed: ${l(o)}`, "destructive-target-scope parse failed")), "unknown"
    );
  }
}

function Xen(e, t) {
  if (!DXe.test(e)) return t;
  let r = t.startsWith("/") ? $Xe.resolve : BXe,
    o = t,
    u = e,
    d = false;
  for (let _ = LXe.exec(u); _ !== null; _ = LXe.exec(u)) {
    let C = _[1];
    if (C.startsWith("-") || Xhe.test(C)) return null;
    let A = C.replace(/\\(.)/g, "$1");
    if (A.startsWith("~")) {
      if (A !== "~" && !A.startsWith("~/")) return null;
      o = A;
    } else if (o.startsWith("~"))
      if (A.startsWith("/")) o = r(A);
      else o = `${o}/${A}`;
    else o = r(o, A);
    (u = u.slice(_[0].length)), (d = true);
  }
  if (!d || DXe.test(u)) return null;
  return o;
}

function Qen(e) {
  let t = false,
    r = [];
  for (let o of e.matchAll(qen)) {
    let u = o[1] ?? "";
    if (!/(?:^|\s)-[a-zA-Z]/.test(u)) continue;
    if (/(?:^|\s)-(Recurse|Force|Path|LiteralPath)\b/i.test(u)) continue;
    t = true;
    let d = u
        .replace(/(?:^|\s)#.*$/, "")
        .replace(/\d{0,4}>{1,2}\s*\S*/g, " ")
        .replace(/\d{0,4}<{1,2}\s*\S*/g, " "),
      _ = rW(d, true);
    if (_ === "unknown") return "unknown";
    let C = false;
    for (let A of _) {
      if (!C && A === "--") {
        C = true;
        continue;
      }
      if (!C && A.startsWith("-")) continue;
      r.push(A);
    }
  }
  return t ? r : null;
}

function Jen(e) {
  let t = false,
    r = [],
    o = (u) => {
      if (u.includes(",")) {
        for (let d of u.split(",")) if (d !== "") r.push(d.trim());
      } else r.push(u);
    };
  for (let u of e.matchAll(Ken)) {
    let d = u[1] ?? "";
    if (!/(?:^|\s)-(Recurse|Force)\b/i.test(d)) continue;
    if (((t = true), /[()]/.test(d))) return "unknown";
    let _ = d
        .replace(/(?:^|\s)#.*$/, "")
        .replace(/\*>{1,2}&?\d?\s*\S*/g, " ")
        .replace(/\d{0,4}>{1,2}\s*\S*/g, " "),
      C = rW(_, false);
    if (C === "unknown") return "unknown";
    for (let A = 0; A < C.length; A++) {
      let x = C[A];
      if (x.startsWith("-")) {
        let M = x.indexOf(":"),
          F = (M >= 0 ? x.slice(1, M) : x.slice(1)).toLowerCase(),
          U = M >= 0 ? x.slice(M + 1) : void 0;
        if (F === "path" || F === "literalpath")
          if (U !== void 0 && U !== "") o(U);
          else {
            let B = C[A + 1];
            if (B !== void 0 && !B.startsWith("-")) o(B), A++;
          }
        else if (U !== void 0 && U !== "");
        else if (U === "") {
          if (C[A + 1] !== void 0 && !C[A + 1].startsWith("-")) A++;
        } else if (!Ven.has(F)) {
          if (C[A + 1] !== void 0 && !C[A + 1].startsWith("-")) A++;
        }
        continue;
      }
      o(x);
    }
  }
  return t ? r : null;
}

function rW(e, t) {
  let r = [],
    o = "",
    u = 0;
  while (u < e.length) {
    let d = e[u];
    if (d === " " || d === "\t") {
      if (o !== "") r.push(o), (o = "");
      u++;
      continue;
    }
    if (d === "`") return "unknown";
    if (d === '"' || d === "'") {
      let _ = d;
      u++;
      while (u < e.length && e[u] !== _) {
        if (t && _ === '"' && e[u] === "\\" && u + 1 < e.length && '$`"\\\n'.includes(e[u + 1])) {
          (o += e[u + 1]), (u += 2);
          continue;
        }
        (o += e[u]), u++;
      }
      if (u >= e.length) return "unknown";
      u++;
      continue;
    }
    if (t && d === "\\" && u + 1 < e.length) {
      (o += e[u + 1]), (u += 2);
      continue;
    }
    (o += d), u++;
  }
  if (o !== "") r.push(o);
  return r;
}

function Zen(e, t, r) {
  if (e === "") return "unknown";
  if (e.includes("$(")) return "unknown";
  if (e.includes("`")) return "unknown";
  if (/^\$TMPDIR(?:[\\/]|$)/.test(e)) return "tmp";
  if (/^\$\{TMPDIR\}(?:[\\/]|$)/.test(e)) return "tmp";
  if (/^%TE?MP%(?:[\\/]|$)/i.test(e)) return "tmp";
  if (/^\$env:TE?MP(?:[\\/]|$)/i.test(e)) return "tmp";
  if (e.includes("$")) return "unknown";
  if (/%[^%]+%/.test(e)) return "unknown";
  if (e.startsWith("*") || e.startsWith("?")) return "unknown";
  if (e.includes("{")) return "unknown";
  if (e.startsWith("~")) return e === "~" || e.startsWith("~/") || e.startsWith("~\\") ? "outside_cwd" : "unknown";
  let o = Xhe.test(e) || e.startsWith("\\\\");
  if (!IXe(e) && !o) {
    if (r === null) return "unknown";
    if (r.startsWith("~")) return "outside_cwd";
    let u = r.startsWith("/") ? $Xe.resolve(r, e) : BXe(r, e);
    if (!OXe(t, u).startsWith("..")) return "cwd";
    if (NXe(u)) return "tmp";
    return "outside_cwd";
  }
  if (!o || Xhe.test(t) || t.startsWith("\\\\")) {
    let u = OXe(t, e);
    if (u === "" || (!u.startsWith("..") && !IXe(u))) return "cwd";
  }
  if (NXe(e)) return "tmp";
  return "outside_cwd";
}

function DP(e, t) {
  if (t === null || !ttn.has(t)) return "none";
  if (e.length > 2000) return "unknown";
  try {
    switch (t) {
      case "git_force_push":
        return ntn(e);
      case "git_reset_hard":
        return rtn(e);
      case "git_branch_force_delete":
        return otn(e);
      case "git_commit_amend":
        return stn(e);
      default:
        return "none";
    }
  } catch (r) {
    return h(new R(`git-destructive-target parse failed: ${l(r)}`, "git-destructive-target parse failed")), "unknown";
  }
}

function Qhe(e) {
  return e.includes("$") || e.includes("`");
}

function jXe(e) {
  let t = e.replace(/^refs\/heads\//, "");
  return etn.test(t) ? "main_like" : "feature";
}

function Jhe(e, t, r) {
  for (let o of e.matchAll(t)) {
    let u = o[1] ?? "";
    if (r(u)) return u;
  }
  return;
}

function ntn(e) {
  let t = Jhe(e, /\bgit[ \t]+push\b([^;&|\n]*)/g, (C) =>
    /(?:^|[ \t])(?:--force(?:-with-lease|-if-includes)?|-f)\b/.test(C),
  );
  if (t === void 0) return "unknown";
  if (Qhe(t)) return "unknown";
  let r = rW(t, true);
  if (r === "unknown") return "unknown";
  let o = new Set(["-o", "--push-option", "--repo", "--receive-pack", "--exec"]),
    u = [],
    d = false;
  for (let C = 0; C < r.length; C++) {
    let A = r[C];
    if (!d && A === "--") {
      d = true;
      continue;
    }
    if (!d && A.startsWith("-")) {
      let x = A.indexOf("="),
        M = x >= 0 ? A.slice(0, x) : A;
      if (x < 0 && o.has(M)) C++;
      continue;
    }
    u.push(A);
  }
  if (u.length <= 1) return "implicit";
  let _ = "feature";
  for (let C of u.slice(1)) {
    if (C === "" || /[*?[\]]/.test(C)) return "unknown";
    let A = C.replace(/^\+/, ""),
      x = A.lastIndexOf(":"),
      M = x >= 0 ? A.slice(x + 1) : A;
    if (M === "" || M === "HEAD") return "unknown";
    if (jXe(M) === "main_like") _ = "main_like";
  }
  return _;
}

function rtn(e) {
  let t = e.match(/\bgit[ \t]+reset[ \t]+--hard\b([^;&|\n]*)/);
  if (!t) return "unknown";
  let r = t[1] ?? "";
  if (Qhe(r)) return "unknown";
  let o = rW(r, true);
  if (o === "unknown") return "unknown";
  let u;
  for (let d of o) {
    if (d === "--") continue;
    if (d.startsWith("-")) continue;
    u = d;
    break;
  }
  if (u === void 0 || u === "") return "bare";
  if (/^(HEAD|@)([~^].*)?$/.test(u) || /^(HEAD|@)@\{.*\}$/.test(u)) return "head_relative";
  if (/^[A-Z_]+_HEAD$/.test(u)) return "head_relative";
  if (/^(origin|upstream)\//.test(u) || /^refs\/remotes\//.test(u) || /^[A-Za-z0-9_.-]+\/(main|master)$/.test(u))
    return "remote_ref";
  return "other";
}

function otn(e) {
  let t = Jhe(
    e,
    /\bgit[ \t]+branch\b([^;&|\n]*)/g,
    (d) => /(?:^|[ \t])-D\b/.test(d) || (/--delete\b/.test(d) && /--force\b/.test(d)),
  );
  if (t === void 0) return "unknown";
  if (Qhe(t)) return "unknown";
  let r = rW(t, true);
  if (r === "unknown") return "unknown";
  let o = [],
    u = false;
  for (let d of r) {
    if (!u && d === "--") {
      u = true;
      continue;
    }
    if (!u && d.startsWith("-")) continue;
    o.push(d);
  }
  if (o.length === 0) return "unknown";
  for (let d of o) if (jXe(d) === "main_like") return "main_like";
  return "feature";
}

function stn(e) {
  let t = Jhe(e, /\bgit[ \t]+commit\b([^;&|\n]*)/g, (r) => /--amend\b/.test(r));
  if (t === void 0) return "unknown";
  if (/--no-edit\b/.test(t)) return "no_edit";
  if (/(?:^|[ \t])-[a-zA-Z]*m\b|--message\b/.test(t)) return "with_message";
  return "interactive";
}

function NXe(e) {
  if (
    /^\/tmp(?:\/|$)/.test(e) ||
    /^\/var\/tmp(?:\/|$)/.test(e) ||
    /^\/var\/folders\//.test(e) ||
    /^\/private\/tmp(?:\/|$)/.test(e) ||
    /^\/private\/var\/tmp(?:\/|$)/.test(e) ||
    /^\/private\/var\/folders\//.test(e)
  )
    return true;
  if (/[\\/]claude[^\\/]*[\\/](?:[^\\/]+[\\/])+scratchpad(?:[\\/]|$)/i.test(e)) return true;
  let t = e.replace(/\//g, "\\");
  if (
    /^[A-Za-z]:\\Temp(?:\\|$)/i.test(t) ||
    /^[A-Za-z]:\\Windows\\Temp(?:\\|$)/i.test(t) ||
    /\\AppData\\Local\\Temp(?:\\|$)/i.test(t)
  )
    return true;
  return false;
}

function R8() {
  return atn.of(G().host);
}

function P8(e) {
  R8().markSnapshotAvailable(e);
}

function zXe(e) {
  R8().replaceSessionEnvVarKeys(e);
}

function x8(e) {
  R8().replaceProbedEnvKeys(e);
}

function oW() {
  return R8().spawnEnvKeys();
}

function Zhe(e, t, r) {
  switch (e.type) {
    case "raw_string":
      t.raw.push([e.startIndex, e.endIndex]);
      return;
    case "ansi_c_string":
      t.ansiC.push([e.startIndex, e.endIndex]);
      return;
    case "string":
      if (!r) t.double.push([e.startIndex, e.endIndex]);
      for (let o of e.children) if (o) Zhe(o, t, true);
      return;
    case "heredoc_redirect": {
      let o = false;
      for (let u of e.children)
        if (u && u.type === "heredoc_start") {
          let d = u.text[0];
          o = d === "'" || d === '"' || d === "\\";
          break;
        }
      if (o) {
        t.heredoc.push([e.startIndex, e.endIndex]);
        return;
      }
      break;
    }
  }
  for (let o of e.children) if (o) Zhe(o, t, r);
}

function ltn(e) {
  let t = new Set();
  for (let [r, o] of e) for (let u = r; u < o; u++) t.add(u);
  return t;
}

function GXe(e) {
  return e.filter((t, r) => !e.some((o, u) => u !== r && o[0] <= t[0] && o[1] >= t[1] && (o[0] < t[0] || o[1] > t[1])));
}

function ctn(e, t) {
  if (t.length === 0) return e;
  let r = GXe(t).sort((u, d) => d[0] - u[0]),
    o = e;
  for (let [u, d] of r) o = o.slice(0, u) + o.slice(d);
  return o;
}

function utn(e, t) {
  if (t.length === 0) return e;
  let r = GXe(t).sort((u, d) => d[0] - u[0]),
    o = e;
  for (let [u, d, _, C] of r) o = o.slice(0, u) + _ + C + o.slice(d);
  return o;
}

function dtn(e, t) {
  let r = { raw: [], ansiC: [], double: [], heredoc: [] };
  Zhe(e, r, false);
  let { raw: o, ansiC: u, double: d, heredoc: _ } = r,
    C = [...o, ...u, ...d, ..._],
    A = ltn([...o, ...u, ..._]),
    x = new Set();
  for (let [W, z] of d) x.add(W), x.add(z - 1);
  let M = "";
  for (let W = 0; W < t.length; W++) {
    if (A.has(W)) continue;
    if (x.has(W)) continue;
    M += t[W];
  }
  let F = ctn(t, C),
    U = [];
  for (let [W, z] of o) U.push([W, z, "'", "'"]);
  for (let [W, z] of u) U.push([W, z, "$'", "'"]);
  for (let [W, z] of d) U.push([W, z, '"', '"']);
  for (let [W, z] of _) U.push([W, z, "", ""]);
  let B = utn(t, U);
  return { withDoubleQuotes: M, fullyUnquoted: F, unquotedKeepQuoteChars: B };
}

function ptn(e, t) {
  let r = e,
    o = [],
    u = [],
    d = false,
    _ = false,
    C = false,
    A = new Set([
      "if_statement",
      "while_statement",
      "for_statement",
      "c_style_for_statement",
      "case_statement",
      "function_definition",
      "do_group",
      "elif_clause",
      "else_clause",
    ]);
  function x(M) {
    for (let F of M.children) {
      if (!F) continue;
      if (F.type === "list")
        for (let U of F.children) {
          if (!U) continue;
          if (U.type === "&&" || U.type === "||") o.push(U.type);
          else if (
            U.type === "list" ||
            U.type === "redirected_statement" ||
            U.type === "pipeline" ||
            U.type === "negated_command" ||
            A.has(U.type)
          )
            x({ ...M, children: [U] });
          else if (U.type === "subshell") (d = true), u.push(U.text);
          else if (U.type === "compound_statement") (_ = true), u.push(U.text);
          else u.push(U.text);
        }
      else if (F.type === ";") o.push(";");
      else if (F.type === "pipeline") (C = true), u.push(F.text), x(F);
      else if (F.type === "subshell") (d = true), u.push(F.text);
      else if (F.type === "compound_statement") (_ = true), u.push(F.text);
      else if (F.type === "command" || F.type === "declaration_command" || F.type === "variable_assignment")
        u.push(F.text);
      else if (F.type === "redirected_statement") {
        let U = false;
        for (let B of F.children) {
          if (!B || B.type === "file_redirect") continue;
          (U = true), x({ ...F, children: [B] });
        }
        if (!U) u.push(F.text);
      } else if (F.type === "negated_command") u.push(F.text), x(F);
      else if (A.has(F.type)) {
        if (F.type !== "do_group" && F.type !== "elif_clause" && F.type !== "else_clause") u.push(F.text);
        x(F);
      } else if (F.children.length > 0) x(F);
    }
  }
  if ((x(r), u.length === 0)) u.push(t);
  return {
    hasCompoundOperators: o.length > 0,
    hasPipeline: C,
    hasSubshell: d,
    hasCommandGroup: _,
    operators: o,
    segments: u,
  };
}

function mtn(e) {
  let t = e;
  function r(o) {
    if (o.type === ";" || o.type === "&&" || o.type === "||") return true;
    if (o.type === "list") return true;
    for (let u of o.children) if (u && r(u)) return true;
    return false;
  }
  return r(t);
}

function ftn(e) {
  let t = e,
    r = false,
    o = false,
    u = false,
    d = false,
    _ = false;
  function C(A) {
    switch (A.type) {
      case "command_substitution":
        r = true;
        break;
      case "process_substitution":
        o = true;
        break;
      case "expansion":
        u = true;
        break;
      case "heredoc_redirect":
        d = true;
        break;
      case "comment":
        _ = true;
        break;
    }
    for (let x of A.children) if (x) C(x);
  }
  return (
    C(t),
    { hasCommandSubstitution: r, hasProcessSubstitution: o, hasParameterExpansion: u, hasHeredoc: d, hasComment: _ }
  );
}

function qXe(e, t) {
  return {
    quoteContext: dtn(e, t),
    compoundStructure: ptn(e, t),
    hasActualOperatorNodes: mtn(e),
    dangerousPatterns: ftn(e),
  };
}

function eye(e, t) {
  t(e);
  for (let r of e.children) eye(r, t);
}

function gtn(e) {
  let t = [];
  return (
    eye(e, (r) => {
      if (r.type === "pipeline") {
        for (let o of r.children) if (o.type === "|" || o.type === "|&") t.push([o.startIndex, o.endIndex]);
      }
    }),
    t.sort((r, o) => r[0] - o[0])
  );
}

function htn(e) {
  let t = [];
  return (
    eye(e, (r) => {
      if (r.type === "file_redirect") {
        let o = r.children,
          u = o.findIndex((C) => C.type === ">" || C.type === ">>"),
          d = o[u],
          _ = u >= 0 ? o[u + 1] : void 0;
        if (d && _) t.push({ startIndex: r.startIndex, endIndex: _.endIndex, target: _.text, operator: d.type });
      }
    }),
    t
  );
}

function tye(e, t) {
  let r = gtn(t),
    o = htn(t),
    u = qXe(t, e);
  return new VXe(e, r, o, u);
}

async function ytn(e) {
  if (!e) return null;
  try {
    let { parseCommand: t } = await import("/$bunfs/root/chunk-tqzb8nf1.js"),
      r = await t(e);
    if (r) return tye(e, r.rootNode);
  } catch {}
  return null;
}

function r9e(e, t) {
  for (let r of e)
    if (r.startsWith("-") && !r.startsWith("--") && r.length > 2)
      for (let o = 1; o < r.length; o++) {
        let u = "-" + r[o];
        if (!t.includes(u)) return false;
      }
    else if (!t.includes(r)) return false;
  return true;
}

function ZXe(e, t) {
  let r = uu(e);
  if (r[0] !== "sed") return false;
  let u = r.slice(1).filter((C) => C.startsWith("-") && C !== "--");
  if (!r9e(u, ["-n", "--quiet", "--silent", "-E", "--regexp-extended", "-r", "-z", "--zero-terminated", "--posix"]))
    return false;
  let _ = false;
  for (let C of u) {
    if (C === "-n" || C === "--quiet" || C === "--silent") {
      _ = true;
      break;
    }
    if (C.startsWith("-") && !C.startsWith("--") && C.includes("n")) {
      _ = true;
      break;
    }
  }
  if (!_) return false;
  if (t.length === 0) return false;
  for (let C of t) {
    let A = C.split(";");
    for (let x of A) if (!_tn(x.trim())) return false;
  }
  return true;
}

function _tn(e) {
  if (!e) return false;
  return /^(?:\d+|\d+,\d+)?p$/.test(e);
}

function e9e(e, t, r, o) {
  let u = o?.allowFileWrites ?? false;
  if (!u && r) return false;
  let d = uu(e);
  if (d[0] !== "sed") return false;
  let C = d.slice(1).filter((fe) => fe.startsWith("-") && fe !== "--"),
    A = ["-E", "--regexp-extended", "-r", "--posix"];
  if (u) A.push("-i", "--in-place");
  if (!r9e(C, A)) return false;
  if (t.length !== 1) return false;
  let x = t[0].trim();
  if (!x.startsWith("s")) return false;
  let M = x.match(/^s\/(.*?)$/);
  if (!M) return false;
  let F = M[1],
    U = 0,
    B = -1,
    W = 0;
  while (W < F.length) {
    if (F[W] === "\\") {
      W += 2;
      continue;
    }
    if (F[W] === "/") U++, (B = W);
    W++;
  }
  if (U !== 2) return false;
  let z = F.slice(B + 1);
  if (!/^[gpimIM]*[1-9]?[gpimIM]*$/.test(z)) return false;
  return true;
}

function bL(e, t) {
  let r = t?.allowFileWrites ?? false;
  if (v6(e) || Qa(e)) return false;
  let o;
  try {
    o = ktn(e);
  } catch (A) {
    return false;
  }
  let u = Stn(e),
    d = false,
    _ = false;
  if (r) (d = ZXe(e, o)), (_ = e9e(e, o, u, { allowFileWrites: true }));
  else (d = ZXe(e, o)), (_ = e9e(e, o, u));
  if (!d && !_) return false;
  for (let A of o) if (_ && A.includes(";")) return false;
  for (let A of o) if (t9e(A)) return false;
  let C = btn(e);
  if (C !== null) {
    if (C === o9e) return false;
    if (t9e(C)) return false;
    let A = C.trimStart();
    if (/^[sy][^a-zA-Z0-9]/.test(A)) return false;
    if (/^[\\$:={]/.test(A)) return false;
    if (/^\d+[ \t]*[,!~=aAcCdDegGhHiIlnNpPqQrRsStTwWxyz]/.test(A)) return false;
    if (/^[aAcCdDgGhHiIlnNpPqQtTwWxz=]([\s\\;]|$)/.test(A)) return false;
    if (/^[rR]([\s\\;/]|\.{1,2}\/|$)/.test(A)) return false;
    if (
      /^\/(?:[^/\\]|\\.)*\/[IMim]*[ \t]*([aAcCdDgGhHiIlnNpPqQtTwWxz=]([\s\\;]|$)|[rR]([\s\\;/]|\.{1,2}\/|$)|[sy][^a-zA-Z0-9]|[,!~])/.test(
        A,
      )
    )
      return false;
    let x = A.replace(/^(\.{1,2}\/)+/, "");
    if (A.includes(";") || A.includes("[") || A.includes("\\") || x.includes("..")) return false;
  }
  return true;
}

function Stn(e) {
  let t = uu(e);
  if (t[0] !== "sed") return false;
  let r = t.slice(1),
    o = 0,
    u = false;
  for (let d = 0; d < r.length; d++) {
    let _ = r[d];
    if ((_ === "-e" || _ === "--expression") && d + 1 < r.length) {
      (u = true), d++;
      continue;
    }
    if (_.startsWith("--expression=")) {
      u = true;
      continue;
    }
    if (_.startsWith("-e=")) {
      u = true;
      continue;
    }
    if (_.startsWith("-")) continue;
    if ((o++, u)) return true;
    if (o > 1) return true;
  }
  return false;
}

function btn(e) {
  let t = uu(e);
  if (t[0] !== "sed") return null;
  let r = t.slice(1),
    o = [];
  for (let _ = 0; _ < r.length; _++) {
    let C = r[_];
    if (C === "-i" || /^-[Er]+i$/.test(C)) o.push(_);
  }
  if (o.length === 0) return null;
  if (o.length > 1) return o9e;
  let u = o[0],
    d = r[u + 1];
  if (d === void 0) return null;
  if (d === "" || d.startsWith(".") || d.startsWith("-")) return null;
  for (let _ = u + 2; _ < r.length; _++) {
    let C = r[_];
    if (C === "-e" || C === "--expression") return r[_ + 1] ?? null;
    if (C.startsWith("--expression=")) return C.slice(13);
    if (C.startsWith("-")) continue;
    return C;
  }
  return null;
}

function ktn(e) {
  let t = [],
    r = uu(e);
  if (r[0] !== "sed") return t;
  let o = r.slice(1);
  if (o.some((u) => /^-e[wWe]/.test(u) || /^-w[eE]/.test(u))) throw Error("Dangerous flag combination detected");
  if (o.length === 0) throw Error("No sed arguments");
  try {
    let u = false,
      d = false;
    for (let _ = 0; _ < o.length; _++) {
      let C = o[_];
      if (typeof C !== "string") continue;
      if ((C === "-e" || C === "--expression") && _ + 1 < o.length) {
        u = true;
        let A = o[_ + 1];
        if (typeof A === "string") t.push(A), _++;
        continue;
      }
      if (C.startsWith("--expression=")) {
        (u = true), t.push(C.slice(13));
        continue;
      }
      if (C.startsWith("-e=")) {
        (u = true), t.push(C.slice(3));
        continue;
      }
      if (C.startsWith("-")) continue;
      if (!u && !d) {
        t.push(C), (d = true);
        continue;
      }
      break;
    }
  } catch (u) {
    throw Error(`Failed to parse sed command: ${u instanceof Error ? u.message : "Unknown error"}`);
  }
  return t;
}

function t9e(e) {
  let t = e.trim();
  if (!t) return false;
  if (/[^\x01-\x7F]/.test(t)) return true;
  if (t.includes("{") || t.includes("}")) return true;
  if (
    t.includes(`
`) ||
    t.includes("\r")
  )
    return true;
  let r = t.indexOf("#");
  if (r !== -1 && !(r > 0 && t[r - 1] === "s")) return true;
  if (/^!/.test(t) || /[/\d$]!/.test(t)) return true;
  if (/\d\s*~\s*\d|,\s*~\s*\d|\$\s*~\s*\d/.test(t)) return true;
  if (/^,/.test(t)) return true;
  if (/,\s*[+-]/.test(t)) return true;
  if (/s\\/.test(t) || /\\[|#%@]/.test(t)) return true;
  if (/\\\/.*[wW]/.test(t)) return true;
  if (/\/[^/]*\s+[wWeE]/.test(t)) return true;
  if (/^s\//.test(t) && !/^s\/[^/]*\/[^/]*\/[^/]*$/.test(t)) return true;
  if (/^s./.test(t) && /[wWeE]$/.test(t)) {
    if (!/^s([^\\\n]).*?\1.*?\1[^wWeE]*$/.test(t)) return true;
  }
  if (
    /^[wW]\s*\S+/.test(t) ||
    /^\d+\s*[wW]\s*\S+/.test(t) ||
    /^\$\s*[wW]\s*\S+/.test(t) ||
    /^\/[^/]*\/[IMim]*\s*[wW]\s*\S+/.test(t) ||
    /^\d+,\d+\s*[wW]\s*\S+/.test(t) ||
    /^\d+,\$\s*[wW]\s*\S+/.test(t) ||
    /^\/[^/]*\/[IMim]*,\/[^/]*\/[IMim]*\s*[wW]\s*\S+/.test(t)
  )
    return true;
  if (
    /^e/.test(t) ||
    /^\d+\s*e/.test(t) ||
    /^\$\s*e/.test(t) ||
    /^\/[^/]*\/[IMim]*\s*e/.test(t) ||
    /^\d+,\d+\s*e/.test(t) ||
    /^\d+,\$\s*e/.test(t) ||
    /^\/[^/]*\/[IMim]*,\/[^/]*\/[IMim]*\s*e/.test(t)
  )
    return true;
  let o = t.match(/s([^\\\n]).*?\1.*?\1(.*?)$/);
  if (o) {
    let d = o[2] || "";
    if (d.includes("w") || d.includes("W")) return true;
    if (d.includes("e") || d.includes("E")) return true;
  }
  if (t.match(/y([^\\\n])/)) {
    if (/[wWeE]/.test(t)) return true;
  }
  return false;
}

function s9e(e, t) {
  let r = Ia(e.command),
    o;
  for (let u of r) {
    let d = i9e(u);
    if (d === null) continue;
    let _ = t.mode === "acceptEdits";
    if (((o ??= rye(e, t)), o.behavior === "ask")) return o;
    if (!bL(d, { allowFileWrites: _ }))
      return {
        behavior: "ask",
        message: "sed command requires approval (contains potentially dangerous operations)",
        decisionReason: {
          type: "other",
          reason:
            "sed command contains operations that require explicit approval (e.g., write commands, execute commands)",
          bashMissKind: "sed-dangerous",
        },
      };
  }
  return { behavior: "passthrough", message: "No dangerous sed operations detected" };
}

function nye(e) {
  return i9e(e) !== null;
}

function i9e(e) {
  let t = e.trim();
  if (!t) return null;
  let r = wtn(t);
  if (r !== null) return r;
  if (vh(t).split(/\s+/)[0] === "sed") return SL(t);
  return null;
}

function wtn(e) {
  let t = (C) => (C.split(/\s+/)[0] === "sed" ? C : null);
  if (e.length > oS) return t(SL(e));
  if (qH(e)) return t(SL(e));
  let r = KE().parse(e);
  if (!r || VH(r)) return t(SL(e));
  let o = r.children.filter((C) => C.type !== "comment");
  if (
    o.length !== 1 ||
    (o[0].type !== "command" &&
      !(o[0].type === "redirected_statement" && o[0].children.some((C) => C.type === "command")))
  )
    return t(SL(e));
  let u = dV(r, null);
  if (!u) return null;
  let d = u.children.find((C) => C.type === "command_name");
  if (!d) return null;
  let _ = Buffer.from(e, "utf8").subarray(d.startIndex).toString("utf8");
  return t(SL(_));
}

function SL(e) {
  let t = e.trim();
  for (;;) {
    let r = Ttn(vh(t));
    if (r === t) break;
    t = r;
  }
  return t;
}

function Ttn(e) {
  let t = e;
  for (;;) {
    if (t.startsWith("<<<") && t[3] !== "<" && t[3] !== "(") {
      let _ = t.slice(3),
        C = _.startsWith(" ") || _.startsWith("\t") ? _.trimStart() : _;
      if (!C) return t;
      let A = n9e(C);
      if (A === null) return t;
      t = C.slice(A).trimStart();
      continue;
    }
    let r = /^(?:\d*|&)(?:>>(?!\()|>\|(?!\()|>&(?!\()|<&(?!\()|<>(?!\()|>(?![>|&(])|<(?![<>&(]))/.exec(t);
    if (!r) return t;
    let o = t.slice(r[0].length),
      u = o.startsWith(" ") || o.startsWith("\t") ? o.trimStart() : o;
    if (!u) return t;
    let d = n9e(u);
    if (d === null) return t;
    t = u.slice(d).trimStart();
  }
}

function n9e(e) {
  let t = 0;
  while (t < e.length) {
    let r = e[t];
    if (r === " " || r === "\t") break;
    if (r === "\\" && t + 1 < e.length) {
      t += 2;
      continue;
    }
    if (r === "'") {
      let o = e.indexOf("'", t + 1);
      if (o === -1) return null;
      t = o + 1;
      continue;
    }
    if (r === '"') {
      let o = t + 1;
      for (;;) {
        if (o >= e.length) return null;
        if (e[o] === "\\" && o + 1 < e.length) {
          o += 2;
          continue;
        }
        if (e[o] === '"') break;
        o++;
      }
      t = o + 1;
      continue;
    }
    t++;
  }
  return t;
}

function rye(e, t, r) {
  let o = (u) => nye(u) && !(r?.has(u.trim()) ?? false);
  if (e.command.length > oS || qH(e.command))
    return {
      behavior: "ask",
      message: "sed command requires approval (contains potentially dangerous operations)",
      decisionReason: {
        type: "other",
        reason:
          "sed command could not be statically validated (command is over-length or contains characters bash and the analyzer tokenize differently)",
        bashMissKind: "sed-dangerous",
      },
    };
  if (IGe(e.command, o))
    return {
      behavior: "ask",
      message: "sed command requires approval (contains potentially dangerous operations)",
      decisionReason: {
        type: "other",
        reason:
          "sed command carries redirect-borne content that cannot be statically validated (swallowed arguments, unanalyzable heredoc, or expansion in a redirect target)",
        bashMissKind: "sed-dangerous",
      },
    };
  return { behavior: "passthrough", message: "No redirect-borne sed risk detected" };
}

function jw(e, t, r) {
  return {
    behavior: "ask",
    message: t,
    decisionReason: {
      type: "safetyCheck",
      reason: `Dangerous ${e} operation ${r}`,
      classifierApprovable: false,
      circuitBreaker: "dangerousRemoval",
    },
    suggestions: [],
  };
}

function wL(e, t, r, o, u) {
  let d = TL[e],
    _ = d(t),
    { resolvedPath: C } = Qo(le(), r),
    A = C === r ? [r] : [r, C],
    x = te(
      [...A, ...(o ? TT(o) : [])].flatMap((M) => {
        let { resolvedPath: F } = Qo(le(), M);
        return F === M ? [M] : [M, F];
      }),
    );
  for (let M of _) {
    let F = km(M),
      U = kL(F) ? F : l9e(r, F),
      B = U;
    for (let pe = ""; pe !== B; ) {
      pe = B;
      let fe = B.replace(/([\\/]\*+)+[\\/]*$/, "") || "/";
      if (fe !== B) B = /[\\/]/.test(fe) ? Etn(fe) : fe;
    }
    let W = B !== U;
    if (u && W && !kL(F) && /[\\/]\*$/.test(U))
      return jw(
        e,
        `Dangerous ${e} operation detected: '${U}'

This command changes directories before the removal, so the relative glob target cannot be statically resolved. This requires explicit approval and cannot be auto-allowed by permission rules.`,
        `on statically-unresolvable target: ${U}`,
      );
    let z = B;
    if (!kL(F)) {
      let pe = /[\\/]$/.test(r) ? r : r + Ctn;
      if (B.startsWith(pe)) z = B.slice(pe.length);
      else if (B === r) z = "";
    }
    if (
      W &&
      (c5e(F) ||
        Qa(U) ||
        F.startsWith("~") ||
        Bn(F) ||
        (!kL(F) && /(^|[\\/])\.\.([\\/]|$)/.test(F) && /[\\/]\*$/.test(U)) ||
        (e === "rmdir" && /[\\/]\*$/.test(U) && t.some((pe) => /^--p/.test(pe) || /^-[a-z]*p/.test(pe))) ||
        (!kL(F) && /\*[\\/]+$/.test(F) && /[\\/]\*$/.test(U)))
    )
      return jw(
        e,
        `Dangerous ${e} operation detected: '${U}'

This command's removal target cannot be statically resolved to a directory. This requires explicit approval and cannot be auto-allowed by permission rules.`,
        `on statically-unresolvable target: ${U}`,
      );
    if (!W || !/[*?[]/.test(z)) {
      let pe = [B];
      if (B !== U) {
        let { resolvedPath: fe } = Qo(le(), B);
        if (fe !== B) pe.push(fe);
      }
      for (let fe of pe) {
        if (bTe(fe))
          return jw(
            e,
            `Dangerous ${e} operation detected: '${U}'

This command would remove a critical system directory. This requires explicit approval and cannot be auto-allowed by permission rules.`,
            `on critical path: ${U}`,
          );
        if ((W ? x : A).some((ge) => rf(ge, fe)))
          return jw(
            e,
            `Dangerous ${e} operation detected: '${U}'

This command would remove a workspace directory (the working directory, an additional working directory, or one of their parent directories). This requires explicit approval and cannot be auto-allowed by permission rules.`,
            `on working directory or its ancestor: ${U}`,
          );
      }
    }
    if (W && /[\\/]\*$/.test(U)) {
      let pe = Q(U.split(/[\\/]+/), (me) => me && me !== ".") - Q(B.split(/[\\/]+/), (me) => me && me !== "."),
        fe = Q(z.split(/[\\/]+/), (me) => /[*?[]/.test(me));
      if (pe + fe > 1)
        return jw(
          e,
          `Dangerous ${e} operation detected: '${U}'

This command's glob pattern traverses directories that cannot be statically enumerated. This requires explicit approval and cannot be auto-allowed by permission rules.`,
          `on statically-unresolvable target: ${U}`,
        );
    }
  }
  return { behavior: "passthrough", message: `No dangerous removals detected for ${e} command` };
}

function t_e(e) {
  if (!e.includes("$") || !/\brm(?:dir)?\b/.test(e)) return null;
  for (let t of Ia(e)) {
    let r = t
      .replace(/\\\r?\n/g, " ")
      .replace(/`[^`]*`/g, " ")
      .trimStart();
    while (r.startsWith("(") || r.startsWith("{")) r = r.slice(1).trimStart();
    for (let o = ""; o !== r; ) (o = r), (r = r.replace(/\$\([^()]*\)/g, " ").replace(/(?<!\$)\([^()]*\)/g, " "));
    r = r.replace(/(?<![<>&])&(?![<>&])/g, ";");
    for (let o of r.split(/[;|\n\r]|&&/)) {
      let u = o.trimStart(),
        d = u.match(Rtn);
      if (d === null) continue;
      let _ = d[1] === "rmdir" ? "rmdir" : "rm",
        C = u.slice(d[0].length).split(/\s+/);
      for (let A = 0; A < C.length; A++) {
        let x = C[A].replace(/[)\]}]+$/, "");
        if (x === "" || x.startsWith("-") || x.startsWith("'")) continue;
        if (/^[\d&]*[<>]/.test(x)) {
          if (/^(?:[0-9]+|&)?(?:>>?[|&]?|<<?<?|<>)$/.test(x)) A++;
          continue;
        }
        if (Atn.test(x)) return { command: _, target: x };
      }
    }
  }
  return null;
}

function zc(e) {
  let t = [],
    r = false,
    o = false;
  for (let u of e)
    if (r || o) t.push(u);
    else if (u === "--") r = true;
    else if (u === "-" || !u?.startsWith("-")) t.push(u), (o = true);
  return t;
}

function e_e(e) {
  return (t) => {
    let r = [],
      o = false,
      u = false;
    for (let d = 0; d < t.length; d++) {
      let _ = t[d];
      if (_ === void 0 || _ === null) continue;
      if (o || u) r.push(_);
      else if (_ === "--") o = true;
      else if (_ !== "-" && _.startsWith("-")) {
        if (e.has(_)) d++;
      } else r.push(_), (u = true);
    }
    return r;
  };
}

function a9e(e, t, r = []) {
  let o = [],
    u = false,
    d = false,
    _ = false;
  for (let C = 0; C < e.length; C++) {
    let A = e[C];
    if (A === void 0 || A === null) continue;
    if (!d && !_ && A === "--") {
      d = true;
      continue;
    }
    if (!d && !_ && A !== "-" && A.startsWith("-")) {
      let x = A.indexOf("="),
        M = x >= 0 ? A.slice(0, x) : A;
      if (["-e", "--regexp", "-f", "--file"].includes(M)) {
        if (((u = true), M === "-f" || M === "--file")) {
          let F = x >= 0 ? A.slice(x + 1) : e[C + 1];
          if (F) o.push(F);
        }
      }
      if (t.has(M) && x < 0) C++;
      continue;
    }
    if (_ && !d) {
      let x = c9e(A, ["-f", "--file"]);
      if (x !== void 0) o.push(x);
    }
    if (((_ = true), !u)) {
      u = true;
      continue;
    }
    o.push(A);
  }
  return o.length > 0 ? o : r;
}

function c9e(e, t) {
  if (!e.startsWith("-")) return;
  let r = e.indexOf("=");
  if (r >= 0) {
    if (t.includes(e.slice(0, r))) return e.slice(r + 1);
    return;
  }
  for (let o of t) if (o.length === 2 && o[0] === "-" && e.startsWith(o) && e !== o) return e.slice(2);
  return;
}

function Mtn(e, t, r, o, u, d) {
  let _ = TL[e],
    C = _(t),
    A = d ?? LP[e];
  if (A !== "read" && C.some((F) => Qa(F)))
    return {
      behavior: "ask",
      message: `${e} target contains command-substitution or untracked-variable output \u2014 the path is runtime-determined and cannot be validated`,
      decisionReason: {
        type: "other",
        reason: `${e} path argument is runtime-determined`,
        bashMissKind: "shell-expansion",
      },
    };
  let x = xtn[e];
  if (x && !x(t)) {
    if (e === "cd")
      return {
        behavior: "ask",
        message: `cd with two or more directory arguments requires manual approval. zsh's "cd OLD NEW" form substitutes OLD\u2192NEW in $PWD, producing a target path that cannot be statically validated.`,
        decisionReason: {
          type: "other",
          reason: "cd with two or more directory arguments",
          bashMissKind: "cd-multi-positional",
        },
      };
    return {
      behavior: "ask",
      message: `${e} with flags requires manual approval to ensure path safety. For security, Claude Code cannot automatically validate ${e} commands that use flags, as some flags like --target-directory=PATH can bypass path validation.`,
      decisionReason: {
        type: "other",
        reason: `${e} command with flags requires manual approval`,
        bashMissKind: "flag-validation",
      },
    };
  }
  if (u && A !== "read")
    return {
      behavior: "ask",
      message:
        "Commands that change directories and perform write operations require explicit approval to ensure paths are evaluated correctly. For security, Claude Code cannot automatically determine the final working directory when 'cd' is used in compound commands.",
      decisionReason: {
        type: "other",
        reason:
          "Compound command contains cd with write operation - manual approval required to prevent path resolution bypass",
        bashMissKind: "cd-compound-write",
      },
    };
  let M;
  for (let F of C) {
    let { allowed: U, resolvedPath: B, decisionReason: W, isInWorkingDir: z } = $ht(F, r, o, A);
    if (!U) {
      let pe = Array.from(TT(o)),
        fe = dgn(pe),
        me =
          W?.type === "other" || W?.type === "safetyCheck"
            ? W.reason
            : `${e} in '${B}' was blocked. For security, Claude Code may only ${Ptn[e]} the allowed working directories for this session: ${fe}.`;
      if (W?.type === "rule") return { behavior: "deny", message: me, decisionReason: W };
      let ge = z === true && W === void 0,
        Ce = { behavior: "ask", message: me, blockedPath: B, decisionReason: W, bashAllowRuleOverridable: ge };
      if (ge) {
        M ??= Ce;
        continue;
      }
      return Ce;
    }
  }
  if (M) return M;
  return { behavior: "passthrough", message: `Path validation passed for ${e} command` };
}

function d9e(e, t) {
  return (r, o, u, d) => {
    let _ = Mtn(e, r, o, u, d, t);
    if (_.behavior === "deny") return _;
    if (e === "rm" || e === "rmdir") {
      let C = wL(e, r, o, u, d);
      if (C.behavior !== "passthrough") return C;
    }
    if (_.behavior === "passthrough") return _;
    if (_.behavior === "ask") {
      let C = t ?? LP[e],
        A = [];
      if (_.blockedPath)
        if (C === "read") {
          let M = GN(_.blockedPath),
            F = zTe(M, "session");
          if (F) A.push(F);
        } else A.push({ type: "addDirectories", directories: [GN(_.blockedPath)], destination: "session" });
      let x =
        u.mode === "plan" &&
        (u.prePlanMode === "auto" ||
          u.prePlanMode === "bypassPermissions" ||
          u.prePlanMode === "acceptEdits" ||
          u.prePlanMode === "dontAsk");
      if ((C === "write" || C === "create") && (u.mode === "default" || u.mode === "plan") && !x)
        A.push({ type: "setMode", mode: "acceptEdits", destination: "session" });
      _.suggestions = A;
    }
    return _;
  };
}

function Itn(e) {
  return uu(e);
}

function Otn(e, t, r, o) {
  let u = vh(e),
    d = Itn(u);
  if (d.length === 0) return { behavior: "passthrough", message: "Empty command - no paths to validate" };
  let [_, ...C] = d,
    A = H8(_);
  if (!A || !u9e.includes(A))
    return { behavior: "passthrough", message: `Command '${A}' is not a path-restricted command` };
  let x = A === "sed" && bL(u) ? "read" : void 0;
  return d9e(A, x)(C, t, r, o);
}

function Dtn(e, t, r, o) {
  let u = Lb(e.argv);
  if (u.length === 0) return { behavior: "passthrough", message: "Empty command - no paths to validate" };
  let [d, ..._] = u,
    C = H8(d);
  if (!C || !u9e.includes(C))
    return { behavior: "passthrough", message: `Command '${C}' is not a path-restricted command` };
  let A = C === "sed" && bL(vh(e.text)) ? "read" : void 0;
  return d9e(C, A)(_, t, r, o);
}

function H8(e) {
  if (!e) return e;
  let t = e.replace(/^.*[\\/]/, "");
  return t === "rm" || t === "rmdir" ? t : e;
}

function Ltn(e, t, r, o) {
  if (o && e.some((u) => u.target !== "/dev/null"))
    return {
      behavior: "ask",
      message:
        "Commands that change directories and write via output redirection require explicit approval to ensure paths are evaluated correctly. For security, Claude Code cannot automatically determine the final working directory when 'cd' is used in compound commands.",
      decisionReason: {
        type: "other",
        reason:
          "Compound command contains cd with output redirection - manual approval required to prevent path resolution bypass",
        bashMissKind: "cd-compound-redirect",
      },
    };
  for (let { target: u } of e) {
    if (u === "/dev/null") continue;
    let { allowed: d, resolvedPath: _, decisionReason: C } = $ht(u, t, r, "create");
    if (!d) {
      let A = Array.from(TT(r)),
        x = dgn(A),
        M =
          C?.type === "other" || C?.type === "safetyCheck"
            ? C.reason
            : C?.type === "rule"
              ? `Output redirection to '${_}' was blocked by a deny rule.`
              : `Output redirection to '${_}' was blocked. For security, Claude Code may only write to files in the allowed working directories for this session: ${x}.`;
      if (C?.type === "rule") return { behavior: "deny", message: M, decisionReason: C };
      return {
        behavior: "ask",
        message: M,
        blockedPath: _,
        decisionReason: C,
        suggestions: [{ type: "addDirectories", directories: [GN(_)], destination: "session" }],
      };
    }
  }
  return { behavior: "passthrough", message: "No unsafe redirections found" };
}

function eQ(e, t, r, o, u, d) {
  if (!d && />>\s*>\s*\(|>\s*>\s*\(|<\s*\(/.test(e.command))
    return {
      behavior: "ask",
      message: "Process substitution (>(...) or <(...)) can execute arbitrary commands and requires manual approval",
      decisionReason: {
        type: "other",
        reason: "Process substitution requires manual approval",
        bashMissKind: "process-substitution",
      },
    };
  let _ = u ? Ftn(u) : void 0,
    { redirections: C, hasDangerousRedirection: A, dangerousRedirectionReason: x } = _ ?? Tee(e.command);
  if (A) {
    let W;
    if (_ !== void 0) {
      let pe = [..._.denyCheckOutputRedirections, ...C];
      for (let fe of pe) {
        let me = [],
          ge = km(fe.target);
        if (ge !== fe.target) me.push({ path: ge, cwdIndependent: true });
        if (!fe.target.startsWith("~")) me.push({ path: l9e(t, fe.target), cwdIndependent: kL(fe.target) });
        for (let Ce of me) {
          let Ie = ao(Ce.path);
          for (let Ee of Ie) {
            let Pe = fa(Ee, r, "edit", "deny");
            if (Pe !== null) {
              if (Ce.cwdIndependent || !o)
                return {
                  behavior: "deny",
                  message: `Output redirection to '${Ee}' was blocked by a deny rule.`,
                  decisionReason: { type: "rule", rule: Pe },
                };
            }
          }
          if (W === void 0 || (W.decisionReason?.type === "safetyCheck" && W.decisionReason.classifierApprovable)) {
            let Ee = tY(Ce.path, Ie);
            if (!Ee.safe && (W === void 0 || !Ee.classifierApprovable))
              W = {
                behavior: "ask",
                message: Ee.message,
                decisionReason: {
                  type: "safetyCheck",
                  reason: Ee.message,
                  ...(r.restricted
                    ? { classifierApprovable: false, circuitBreaker: "restrictedMode" }
                    : { classifierApprovable: Ee.classifierApprovable, circuitBreaker: Ee.circuitBreaker }),
                },
              };
          }
        }
      }
    }
    if (W !== void 0) return W;
    let z =
      x === "network_device"
        ? "Redirect involving /dev/tcp or /dev/udp opens a network connection"
        : x === "unc_path"
          ? "Redirect target is a Windows UNC path \u2014 opening it triggers an SMB connection"
          : "Shell expansion syntax in paths requires manual approval";
    return {
      behavior: "ask",
      message: z,
      decisionReason: {
        type: "other",
        reason: z,
        bashMissKind: x === "network_device" || x === "unc_path" ? "net-redirect" : "shell-expansion",
      },
    };
  }
  let M;
  function F(W) {
    if (W.behavior === "deny") return W;
    if (W.behavior === "ask") {
      if (W.bashAllowRuleOverridable) {
        M ??= W;
        return;
      }
      return W;
    }
    return;
  }
  let U = Ltn(C, t, r, o),
    B = F(U);
  if (B) return B;
  if (d)
    for (let W of d) {
      let z = F(Dtn(W, t, r, o));
      if (z) return z;
    }
  else {
    let W = Ia(e.command);
    for (let z of W) {
      let pe = F(Otn(z, t, r, o));
      if (pe) return pe;
    }
  }
  if (M) return M;
  return { behavior: "passthrough", message: "All path commands validated successfully" };
}

function Ftn(e) {
  let t = [],
    r = [],
    o = false,
    u;
  for (let d of e) {
    if (/^\/dev\/(tcp|udp)\//.test(d.target)) {
      (o = true), (u = "network_device");
      continue;
    }
    if (S_(d.target.replace(/\\/g, "/"), true)) {
      if (((o = true), u !== "network_device")) u = "unc_path";
      continue;
    }
    if (
      (d.op === ">" || d.op === ">|" || d.op === "&>" || d.op === ">>" || d.op === "&>>" || d.op === ">&") &&
      (d.target.startsWith("~") || DU(d.target) !== -1)
    ) {
      if (((o = true), u !== "network_device" && u !== "unc_path")) u = "shell_expansion";
      r.push({ target: d.target, operator: d.op === ">>" || d.op === "&>>" ? ">>" : ">" });
      continue;
    }
    switch (d.op) {
      case ">":
      case ">|":
      case "&>":
        t.push({ target: d.target, operator: ">" });
        break;
      case ">>":
      case "&>>":
        t.push({ target: d.target, operator: ">>" });
        break;
      case ">&":
        if (!/^\d+$/.test(d.target)) t.push({ target: d.target, operator: ">" });
        break;
      case "<":
      case "<&":
      case "<<":
      case "<<<":
        break;
    }
  }
  return { redirections: t, hasDangerousRedirection: o, dangerousRedirectionReason: u, denyCheckOutputRedirections: r };
}

function Ntn(e) {
  let t = 1;
  while (t < e.length) {
    let r = e[t];
    if (/^-[ioe]$/.test(r) && e[t + 1]) t += 2;
    else if (/^-[ioe]./.test(r)) t++;
    else if (/^--(input|output|error)=/.test(r)) t++;
    else if (r.startsWith("-")) return -1;
    else break;
  }
  return t > 1 && t < e.length ? t : -1;
}

function $tn(e) {
  let t = 1;
  while (t < e.length) {
    let r = e[t];
    if (r.includes("=") && !r.startsWith("-")) t++;
    else if (r === "-i" || r === "-0" || r === "-v") t++;
    else if (r === "-u" && e[t + 1]) t += 2;
    else if (r.startsWith("-")) return -1;
    else break;
  }
  return t < e.length ? t : -1;
}

function Lb(e) {
  let t = e;
  for (;;) {
    let r = t[0]?.replace(/^.*[\\/]/, ""),
      o =
        r === "time" ||
        r === "nohup" ||
        r === "timeout" ||
        r === "nice" ||
        r === "stdbuf" ||
        r === "env" ||
        r === "command"
          ? r
          : t[0];
    if (o === "time" || o === "nohup") t = t.slice(t[1] === "--" ? 2 : 1);
    else if (o === "timeout") {
      let u = n_e(t);
      if (u < 0 || !t[u] || !/^\d+(?:\.\d+)?[smhd]?$/.test(t[u])) return t;
      t = t.slice(u + 1);
    } else if (o === "nice")
      if (t[1] === "-n" && t[2] && /^-?\d+$/.test(t[2])) t = t.slice(t[3] === "--" ? 4 : 3);
      else if (t[1] && /^-\d+$/.test(t[1])) t = t.slice(t[2] === "--" ? 3 : 2);
      else t = t.slice(t[1] === "--" ? 2 : 1);
    else if (o === "stdbuf") {
      let u = Ntn(t);
      if (u < 0) return t;
      t = t.slice(u);
    } else if (o === "env") {
      let u = $tn(t);
      if (u < 0) return t;
      t = t.slice(u);
    } else if (o === "command") {
      let u = 1;
      while (t[u] !== void 0 && /^-p+$/.test(t[u])) u++;
      if (t[u] === "--") u++;
      if (u >= t.length || t[u].startsWith("-")) return t;
      t = t.slice(u);
    } else if (t[0] === "builtin") {
      let u = t[1] === "--" ? 2 : 1;
      if (u >= t.length) return t;
      t = t.slice(u);
    } else if (t[0] === "noglob") {
      if (t.length <= 1) return t;
      t = t.slice(1);
    } else return t;
  }
}

function Htn() {
  let e = Btn;
  if (D() === "windows") {
    let { xargs: t, ...r } = e;
    e = r;
  }
  return e;
}

function Wtn(e) {
  let t = uu(e);
  if (t.length === 0) return false;
  let r,
    o = 0,
    u = Htn();
  for (let [d] of Object.entries(u)) {
    let _ = d.split(" ");
    if (t.length >= _.length) {
      let C = true;
      for (let A = 0; A < _.length; A++)
        if (t[A] !== _[A]) {
          C = false;
          break;
        }
      if (C) {
        (r = u[d]), (o = _.length);
        break;
      }
    }
  }
  if (!r) return false;
  if (t[0] === "git" && t[1] === "ls-remote") {
    if (t.some((_) => _ === "-o" || _ === "--server-option" || _.startsWith("--server-option="))) return false;
    let d = false;
    for (let _ = 2; _ < t.length; _++) {
      let C = t[_];
      if (!C) continue;
      if (!d && C === "--") {
        d = true;
        continue;
      }
      if (d || C === "-" || !C.startsWith("-")) return false;
    }
  }
  for (let d = o; d < t.length; d++) {
    let _ = t[d];
    if (!_) continue;
    if (_.includes("$")) return false;
    if (_.includes("{") && (_.includes(",") || _.includes(".."))) return false;
  }
  if (!TLe(t, o, r, { commandName: t[0], rawCommand: e, xargsTargetCommands: t[0] === "xargs" ? jtn : void 0 }))
    return false;
  if (r.regex && !r.regex.test(e)) return false;
  if (!r.regex && /`/.test(e)) return false;
  if (!r.regex && (t[0] === "rg" || t[0] === "grep" || t[0] === "egrep" || t[0] === "fgrep") && /[\n\r]/.test(e))
    return false;
  if (r.additionalCommandIsDangerousCallback && r.additionalCommandIsDangerousCallback(e, t.slice(o))) return false;
  return true;
}

function ztn(e) {
  return new RegExp(`^${e}(?:\\s|$)[^<>()$\`|{}&;\\n\\r]*$`);
}

function Ztn(e) {
  if (e.length === 0) return false;
  let t = e[0];
  if (Ytn.has(t)) return e.length === 1;
  for (let o of Jtn) if (e.length === o.length && e.every((u, d) => u === o[d])) return true;
  if (Gtn.has(t)) return true;
  for (let o of qtn) {
    let u = o.split(" ");
    if (e.length >= u.length && u.every((d, _) => e[_] === d)) {
      if (u[0] === "docker" && (aWt(e) || e.slice(u.length).some(Qa))) return false;
      return true;
    }
  }
  if (t === "echo") return true;
  let r = /^[-+]?(0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)$/;
  if (t === "printf") {
    if (e[1]?.startsWith("-") && e[1] !== "--") return false;
    let o = e[1] === "--" ? 2 : 1,
      u = e[o] ?? "";
    if (Qa(u)) return false;
    if (u.includes("$")) return false;
    let d = u.replace(/%%/g, "");
    if (Xtn.test(d) || /\\[uU]/.test(d)) return false;
    if (Qtn.test(d) || /%[^%a-zA-Z]*\*/.test(d))
      for (let _ = o + 1; _ < e.length; _++) {
        let C = e[_];
        if (C.includes("[") || C.includes("`") || C.includes("$(") || Qa(C) || !r.test(C)) return false;
      }
    return true;
  }
  if (t === "[[") {
    for (let o = 1; o < e.length; o++) {
      let u = e[o],
        d = e[o + 1];
      if ((u === "-v" || u === "-R" || u === "-t") && d !== void 0 && (d.includes("[") || Qa(d))) return false;
      if (u === "-t" && d !== void 0 && !wLe.test(d)) return false;
      if (sKe.has(u)) {
        for (let _ of [e[o - 1], e[o + 1]]) if (_ !== void 0 && (_.includes("[") || !wLe.test(_))) return false;
      }
    }
    return true;
  }
  if (t === "ls") return true;
  if (t === "cd") return e.length <= 2;
  if (t === "find") {
    for (let o = 1; o < e.length; o++) {
      let u = e[o];
      if (Ktn.has(u)) return false;
      if (Vtn.has(u) || Y_t.test(u)) {
        o++;
        continue;
      }
      if (Qa(u)) return false;
    }
    return true;
  }
  if (t === "history") return e.length === 1 || (e.length === 2 && /^\d+$/.test(e[1]));
  if (t === "arch") return e.length === 1 || (e.length === 2 && (e[1] === "-h" || e[1] === "--help"));
  if (t === "ifconfig") return e.length === 1 || (e.length === 2 && /^[a-zA-Z]/.test(e[1]));
  return null;
}

function i_e(e) {
  let t = false,
    r = false,
    o = false,
    u = false,
    d = false,
    _ = false,
    C = true;
  for (let A = 0; A < e.length; A++) {
    let x = e[A];
    if (u) {
      (u = false), (C = false);
      continue;
    }
    if (x === "\\" && !t) {
      if (
        e[A + 1] ===
        `
`
      ) {
        A++;
        continue;
      }
      u = true;
      continue;
    }
    if (o) {
      if (x === "`") (o = false), (C = false);
      continue;
    }
    if (x === "`" && !t) {
      (o = true), (C = false);
      continue;
    }
    if (x === "#" && C && !t && !r) {
      while (
        A < e.length &&
        e[A] !==
          `
`
      )
        A++;
      C = true;
      continue;
    }
    if (x === "'" && !r) {
      (t = !t), (C = false);
      continue;
    }
    if (x === '"' && !t) {
      (r = !r), (C = false);
      continue;
    }
    if (t) continue;
    if (x === "$") {
      let M = e[A + 1];
      if (M && /[A-Za-z_@*#?!$0-9-]/.test(M)) return "variable";
    }
    if (r) continue;
    if (
      x === " " ||
      x === "\t" ||
      x ===
        `
` ||
      x === "|" ||
      x === "&" ||
      x === ";" ||
      x === "(" ||
      x === ")" ||
      x === "<" ||
      x === ">"
    ) {
      (_ = false), (C = true);
      continue;
    }
    if (((C = false), x === "?" || x === "*")) {
      d = true;
      continue;
    }
    if (x === "[") {
      _ = true;
      continue;
    }
    if (x === "]" && _) d = true;
  }
  return d ? "glob" : false;
}

function nnn(e) {
  let t = e.trim();
  if (t.endsWith(" 2>&1")) t = t.slice(0, -5).trim();
  if (S_(t)) return false;
  if (i_e(t) === "variable") return false;
  if (Wtn(t)) return true;
  for (let r of enn)
    if (r.test(t)) {
      if (t.startsWith("find")) {
        let o = t.replace(/['"\\]/g, "");
        if (/-delete\b|-exec\b|-execdir\b|-ok\b|-okdir\b|-fprint0?\b|-fls\b|-fprintf\b|-files0-from\b/.test(o))
          return false;
      }
      if (t.includes("git") && /\s-c[\s=]/.test(t)) return false;
      if (t.includes("git") && /\s--exec-path[\s=]/.test(t)) return false;
      if (t.includes("git") && /\s--config-env[\s=]/.test(t)) return false;
      return true;
    }
  return false;
}

function o_e(e) {
  let t = Utn.normalize(e.replace(/\/+/g, "/"));
  return (
    (t = t
      .replace(/^\.?\//, "")
      .toLowerCase()
      .replace(/\u0131/g, "i")
      .replace(/\u017f/g, "s")),
    y9e.some((r) => r.test(t))
  );
}

function rnn(e) {
  let t = Lb(uu(e));
  if (t.length === 0) return [];
  let r = t[0]?.replace(/[\\'"]/g, "");
  if (!r) return [];
  if (!Object.hasOwn(LP, r)) return [];
  let o = LP[r];
  if ((o !== "write" && o !== "create") || _9e.has(r)) return [];
  let u = TL[r];
  if (!u) return [];
  return u(t.slice(1));
}

function iW(e) {
  let t = Ia(e);
  for (let o of t) {
    let u = o.trim(),
      d = rnn(u),
      C = Lb(uu(u))[0]?.replace(/[\\'"]/g, ""),
      A = C === "cp" || C === "mv",
      x = d.at(-1),
      M = x !== void 0 && (x === "." || x === "./" || x === "" || /^(?:\.\.\/)*\.\.\/?$/.test(x));
    for (let F of d) {
      if (o_e(F)) return true;
      if (A && M && F !== x) {
        let U = F.replace(/\/+$/, "").split("/").pop() ?? "";
        if (o_e(U)) return true;
      }
    }
  }
  let { redirections: r } = Tee(e);
  for (let { target: o } of r) if (o_e(o)) return true;
  return false;
}

function S9e(e, t) {
  return Qi(t) ? t : (tx(e, t) ?? t);
}

function rQ(e, t) {
  if (e === "") return false;
  if (e.startsWith("~")) {
    let r = km(e);
    if (r.startsWith("~")) return true;
    return vL(r, t) || vL(e, t);
  }
  return vL(e, t);
}

function vL(e, t) {
  let r = le();
  if ((!Qi(e) || true) && !_r(e) && /(^|[/\\])\.\.(?:[/\\]|$)/.test(e)) {
    let U = /\/+/,
      B = tQ(e) ? m9e(e).root : "",
      W = B ? m9e(s_e(t, e)).root : t,
      z = (B ? e.slice(B.length) : e).split(U),
      pe = W;
    for (let fe = 0; fe < z.length; fe++) {
      let me = z[fe];
      if (me === "" || me === ".") continue;
      if (me === "..") {
        pe = sW(pe);
        continue;
      }
      if (((pe = pe.endsWith(Ww) ? pe + me : pe + Ww + me), _r(pe))) break;
      try {
        if (r.lstatSync(pe).isSymbolicLink() && z.slice(fe + 1).includes("..")) return true;
      } catch {}
    }
  }
  let o = s_e(t, e),
    u = S9e(r, o).normalize("NFC"),
    d = (tx(r, t) ?? t).normalize("NFC");
  function _(U) {
    let B = nQ(U, u);
    if (B === "" || B.startsWith(".." + Ww) || tQ(B)) return false;
    let W = B.split(Ww)
      .join("/")
      .toLowerCase()
      .replace(/\u0131/g, "i")
      .replace(/\u017f/g, "s");
    return y9e.some((z) => z.test(W));
  }
  if (_(d)) return true;
  if (!nQ(d, u).startsWith(".." + Ww)) return false;
  let A = Se(),
    x = (tx(r, A) ?? A).normalize("NFC"),
    M = nQ(x, u);
  if (M === "" || M.startsWith(".." + Ww) || tQ(M)) return false;
  let F = d;
  do if (((F = sW(F)), _(F))) return true;
  while (F !== x && F !== sW(F));
  return false;
}

function snn(e, t) {
  if (rQ(e, t)) return true;
  for (let r = 1; r < e.length; r++) {
    let o = e[r],
      u = e[r - 1];
    if ((o === "/" || o === Ww) && u !== "/" && u !== Ww) {
      if (rQ(e.slice(0, r), t)) return true;
    }
  }
  return false;
}

function inn(e, t) {
  let r = e.toLowerCase();
  if (r === t.toLowerCase()) return true;
  let o = le(),
    u = (tx(o, Se()) ?? Se()).normalize("NFC"),
    d = nQ(u, t);
  if (d === ".." || d.startsWith(".." + Ww) || tQ(d)) return false;
  let _ = t;
  for (;;) {
    if (_.toLowerCase() === r) return true;
    if (_ === u || _ === sW(_)) return false;
    _ = sW(_);
  }
}

function oQ(e, t) {
  for (let r of e) {
    if (!r) continue;
    for (let A of r.redirects) {
      if (onn.has(A.op)) continue;
      if (Qa(A.target)) return true;
      if (rQ(A.target, t)) return true;
    }
    let o = Lb(r.argv),
      u = o[0];
    if (u !== void 0 && Qa(u)) return true;
    if (!u || !Object.hasOwn(LP, u)) continue;
    let d = LP[u];
    if ((d !== "write" && d !== "create") || _9e.has(u)) continue;
    let _ = TL[u](o.slice(1)),
      C =
        u === "mkdir" &&
        o.slice(1).some((A) => /^-[^-]*p/.test(A) || (A.startsWith("--p") && "--parents".startsWith(A)));
    for (let A of _) {
      if (Qa(A)) return true;
      if (C ? snn(A, t) : rQ(A, t)) return true;
    }
    if ((u === "cp" || u === "mv") && _.length >= 1) {
      let A = o.slice(1),
        x = A.some((U) => {
          if (/^-[^-]*t/.test(U)) return true;
          let B = U.indexOf("="),
            W = B >= 0 ? U.slice(0, B) : U;
          return W.startsWith("--t") && "--target-directory".startsWith(W);
        }),
        M = A.some((U) => /^-[^-]*T/.test(U) || (U.startsWith("--n") && "--no-target-directory".startsWith(U))),
        F = false;
      if (!x && _.length >= 2) {
        let U = _.at(-1),
          B = [U];
        if (U.startsWith("~")) {
          let W = km(U);
          if (W.startsWith("~")) F = true;
          else B.push(W);
        }
        if (!F) {
          let W = le(),
            z = (tx(W, t) ?? t).normalize("NFC");
          for (let pe of B) {
            let fe = s_e(t, pe),
              me = S9e(W, fe).normalize("NFC");
            if (inn(me, z)) {
              F = true;
              break;
            }
          }
        }
      }
      if (x || F) {
        let U = x ? _ : _.slice(0, -1);
        if (M) return true;
        for (let B of U) {
          if (DU(B) !== -1 || Qa(B)) return true;
          let W = p9e(B);
          if (W === "." || W === "..") return true;
          if (B.startsWith("~")) {
            let z = km(B);
            if (z.startsWith("~")) return true;
            if (vL(p9e(z), t) || vL(W, t)) return true;
          } else if (vL(W, t)) return true;
        }
      }
    }
  }
  return false;
}

function lnn(e) {
  let t = e.slice();
  for (;;)
    if (t[0] === "command") {
      let r = 1;
      while (t[r] !== void 0 && /^-p+$/.test(t[r])) r++;
      if (t[r] === "--") r++;
      if (r >= t.length || t[r].startsWith("-")) return t;
      t = t.slice(r);
    } else if (t[0] === "builtin") {
      let r = t[1] === "--" ? 2 : 1;
      if (r >= t.length) return t;
      t = t.slice(r);
    } else if (t[0] === "noglob") {
      if (t.length <= 1) return t;
      t = t.slice(1);
    } else return t;
}

function cnn(e) {
  let t = e;
  while (g9e.test(t)) t = t.replace(g9e, "");
  return t;
}

function b9e(e) {
  if (e.type === "subshell" || e.type === "compound_statement") return true;
  for (let t of e.children) if (t && b9e(t)) return true;
  return false;
}

function k9e(e) {
  if (!unn.has(e.type)) return false;
  for (let t of e.children) {
    if (!t) continue;
    if (t.type === "&") return true;
    if (k9e(t)) return true;
  }
  return false;
}

function w9e(e, t) {
  let { command: r } = e;
  if (r.length > oS) return { behavior: "passthrough", message: "Command too long for read-only analysis" };
  let o = KE().parse(r),
    u = o ? WTe(r, o) : { kind: "simple", commands: [], bareAssignmentNames: [] };
  if (u.kind === "too-complex")
    return { behavior: "passthrough", message: `Not a simple read-only command: ${u.reason}` };
  if (o && b9e(o)) return { behavior: "passthrough", message: "Not a simple read-only command: contains a subshell" };
  if (o && k9e(o))
    return {
      behavior: "passthrough",
      message: "Not a simple read-only command: `&` defers execution past approval-time checks",
    };
  let d = oW();
  if (u.bareAssignmentNames.some((F) => !zw(F) && (d === null || d.has(F))))
    return {
      behavior: "passthrough",
      message: "Bare assignment to a non-allowlisted environment variable can alter behavior of subsequent commands",
    };
  let _ = i_e(r);
  if (_ === "variable") return { behavior: "passthrough", message: "Command contains unquoted variable expansion" };
  if (S_(r))
    return { behavior: "ask", message: "Command contains Windows UNC path that could be vulnerable to WebDAV attacks" };
  let C = u.commands.some((F) => FP(F.text));
  if ((t || u.commands.some((F) => Hb(F.text))) && C)
    return {
      behavior: "passthrough",
      message: "Compound commands with cd and git require permission checks for enhanced security",
    };
  let x = C && ufe();
  if (x)
    return {
      behavior: "passthrough",
      message:
        x === "bare-indicators"
          ? "The current directory has bare-repo indicators (HEAD/objects/refs outside a .git/ directory). Git may treat it as a git dir and run config/hooks from here, so git commands need approval."
          : "The .git file or symlink here redirects to a location Claude cannot verify is safe (it may have been planted by an untrusted archive). Git commands need approval.",
    };
  if (C && iW(r))
    return {
      behavior: "passthrough",
      message:
        "Compound commands that create git internal files and run git require permission checks for enhanced security",
    };
  if (C && pt.isSandboxingEnabled() && ee() !== Se())
    return {
      behavior: "passthrough",
      message: "Git commands outside the original working directory require permission checks when sandbox is enabled",
    };
  if (
    u.commands.length > 0 &&
    u.commands.every((F) => {
      if (
        F.redirects.some(
          (W) => !ann.has(W.op) && W.target !== "/dev/null" && !(W.op === ">&" && /^\d+$/.test(W.target)),
        )
      )
        return false;
      if (F.redirects.some((W) => /^\/dev\/(tcp|udp)\//.test(W.target))) return false;
      if (F.redirects.some((W) => W.op === "<" && S_(W.target, true))) return false;
      if (
        D() === "windows" &&
        F.redirects.some((W) => W.op === "<" && /(?<![:\w])[\\/]{2,}[^ \t\r\n\f\v\\/]/.test(W.target))
      )
        return false;
      if (F.envVars.some((W) => !zw(W.name))) return false;
      if (F.argv.some((W) => S_(W, true))) return false;
      if (D() === "windows" && F.argv.some((W) => /(?<![:\w])[\\/]{2,}[^ \t\r\n\f\v\\/]/.test(W))) return false;
      let U = lnn(F.argv);
      if (i_e(F.text) === "glob" || (_ === "glob" && F.argv.some((W) => /[*?]|\[.*\]/.test(W))))
        return tnn.has(U[0] ?? "");
      let B = Ztn(U);
      if (B !== null) return B;
      return nnn(cnn(F.text));
    })
  )
    return { behavior: "allow", updatedInput: e };
  return { behavior: "passthrough", message: "Command is not read-only, requires further permission checks" };
}

async function dnn(e, t, r, o, u, d, _) {
  let C = new Map();
  for (let B = 0; B < t.length; B++) {
    let W = t[B].trim();
    if (!W) {
      let pe = r[B],
        fe = await o({ ...e, command: pe });
      C.set(
        pe,
        fe.behavior === "passthrough"
          ? {
              behavior: "allow",
              updatedInput: { ...e, command: pe },
              decisionReason: { type: "other", reason: "Bare output redirection with no command; path layer approved" },
            }
          : fe,
      );
      continue;
    }
    let z = await o({ ...e, command: W });
    C.set(W, z);
  }
  let A = Array.from(C.entries()).find(([, B]) => B.behavior === "deny");
  if (A) {
    let [B, W] = A;
    return {
      behavior: "deny",
      message: W.behavior === "deny" ? W.message : `Permission denied for: ${B}`,
      decisionReason: { type: "subcommandResults", reasons: C },
    };
  }
  if (
    t.filter((B) => {
      let W = B.trim();
      return u.isNormalizedCdCommand(W);
    }).length > 1
  ) {
    for (let [, W] of C) if (W.behavior === "ask" && By(W.decisionReason, hTt)) return W;
    let B = {
      type: "other",
      reason: "Multiple directory changes in one command require approval for clarity",
      bashMissKind: "multi-cd",
    };
    return { behavior: "ask", decisionReason: B, message: Gl(_i.name, B) };
  }
  {
    let B, W;
    if (d)
      (B = d.some((pe) => u.isNormalizedCdCommand(pe.text))), (W = d.some((pe) => u.isNormalizedGitCommand(pe.text)));
    else {
      (B = false), (W = false);
      for (let pe of t)
        for (let fe of Ia(pe)) {
          let me = fe.trim();
          if (u.isNormalizedCdCommand(me)) B = true;
          if (u.isNormalizedGitCommand(me)) W = true;
        }
    }
    if (W && (d ? oQ(d, ee()) : iW(e.command))) {
      let pe = {
        type: "other",
        reason:
          "This command creates git repository structure files (HEAD/objects/refs/hooks) and then runs git, which can execute hooks/fsmonitor from the created files.",
        bashMissKind: "cd-git-compound",
      };
      return { behavior: "ask", decisionReason: pe, message: Gl(_i.name, pe) };
    }
    if (B && W) {
      let pe = [];
      for (let me of t) for (let ge of Ia(me)) pe.push(ge.trim());
      if (!(_ ? await _(pe) : false)) {
        let me = {
          type: "other",
          reason:
            "This command changes directory before running git, which can execute untrusted hooks from the target directory. Approve only if you trust it.",
          bashMissKind: "cd-git-compound",
        };
        return { behavior: "ask", decisionReason: me, message: Gl(_i.name, me) };
      }
    }
  }
  if (Array.from(C.values()).every((B) => B.behavior === "allow"))
    return { behavior: "allow", updatedInput: e, decisionReason: { type: "subcommandResults", reasons: C } };
  let F = [];
  for (let [, B] of C) if (B.behavior !== "allow" && "suggestions" in B && B.suggestions) F.push(...B.suggestions);
  let U = { type: "subcommandResults", reasons: C };
  return { behavior: "ask", message: Gl(_i.name, U), decisionReason: U, suggestions: F.length > 0 ? F : void 0 };
}

async function pnn(e) {
  if (!e.includes(">")) return e;
  return (await I8.parse(e))?.withoutOutputRedirections() ?? e;
}

async function T9e(e, t, r, o, u, d) {
  let _ = o && o !== f3 ? tye(e.command, o) : await I8.parse(e.command);
  if (!_) return { behavior: "passthrough", message: "Failed to parse command" };
  return mnn(e, t, r, _, u, d);
}

async function mnn(e, t, r, o, u, d) {
  let _ = o.getTreeSitterAnalysis();
  if (_ ? _.compoundStructure.hasSubshell || _.compoundStructure.hasCommandGroup : Ia(e.command).length > 1) {
    let M = {
      type: "other",
      reason: "This command uses shell operators that require approval for safety",
      bashMissKind: "shell-operators",
    };
    return { behavior: "ask", message: Gl(_i.name, M), decisionReason: M };
  }
  let A = o.getPipeSegments();
  if (A.length <= 1) return { behavior: "passthrough", message: "No pipes found in command" };
  let x = await Promise.all(A.map((M) => pnn(M)));
  return dnn(e, x, A, t, r, u, d);
}

function gnn(e) {
  return fnn.includes(e);
}

function hnn(e, t) {
  let r = vh(e),
    [o] = r.split(/\s+/);
  if (!o) return { behavior: "passthrough", message: "Base command not found" };
  if (t.mode === "acceptEdits" && gnn(o))
    return { behavior: "allow", updatedInput: { command: e }, decisionReason: { type: "mode", mode: "acceptEdits" } };
  return { behavior: "passthrough", message: `No mode-specific handling for '${o}' in ${t.mode} mode` };
}

function v9e(e, t) {
  if (t.mode === "bypassPermissions")
    return { behavior: "passthrough", message: "Bypass mode is handled in main permission flow" };
  if (t.mode === "dontAsk")
    return { behavior: "passthrough", message: "DontAsk mode is handled in main permission flow" };
  let r = Ia(e.command),
    o = false;
  for (let u of r) {
    let d = hnn(u, t);
    if (d.behavior === "ask" || d.behavior === "deny") return d;
    if (d.behavior === "passthrough")
      return { behavior: "passthrough", message: "No mode-specific validation required" };
    o = true;
  }
  if (o) return { behavior: "allow", updatedInput: e, decisionReason: { type: "mode", mode: t.mode } };
  return { behavior: "passthrough", message: "No mode-specific validation required" };
}

function C$t(e) {
  let t = e.trim().split(/\s+/).filter(Boolean);
  if (t.length === 0) return null;
  let r = 0;
  while (r < t.length && iQ.test(t[r])) {
    let d = St(t[r], "="),
      _ = false;
    if (!cW.has(d)) return null;
    r++;
  }
  let o = t.slice(r);
  if (o.length < 2) return null;
  if (aQ.has(o[0].split("/").pop())) return null;
  let u = o[1];
  if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(u)) return null;
  return o.slice(0, 2).join(" ");
}

function Yqn(e) {
  let t = cQ(e.trim()).split(/\s+/),
    r = 0;
  while (r < t.length && iQ.test(t[r])) r++;
  let o = t[r];
  return !!o && aQ.has(o.split("/").pop());
}

function Jqn(e) {
  let t = e.trim().split(/\s+/).filter(Boolean),
    r = 0;
  while (r < t.length && iQ.test(t[r])) {
    let u = St(t[r], "="),
      d = false;
    if (!cW.has(u)) return null;
    r++;
  }
  let o = t[r];
  if (!o) return null;
  if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(o)) return null;
  if (aQ.has(o)) return null;
  return o;
}

function aqe(e) {
  let t = knn(e);
  if (t) return lyt(_i.name, t);
  if (
    e.includes(`
`)
  ) {
    let o = wr(e).trim();
    if (o) return lyt(_i.name, o);
  }
  let r = C$t(e);
  if (r) return lyt(_i.name, r);
  return ayt(_i.name, e);
}

function knn(e) {
  if (!e.includes("<<")) return null;
  let t = e.indexOf("<<");
  if (t <= 0) return null;
  let r = e.substring(0, t).trim();
  if (!r) return null;
  let o = C$t(r);
  if (o) return o;
  let u = r.split(/\s+/).filter(Boolean),
    d = 0;
  while (d < u.length && iQ.test(u[d])) {
    let _ = St(u[d], "="),
      C = false;
    if (!cW.has(_)) return null;
    d++;
  }
  if (d >= u.length) return null;
  if (aQ.has(u[d].split("/").pop())) return null;
  return u.slice(d, d + 2).join(" ") || null;
}

function wnn(e) {
  return lyt(_i.name, e);
}

function $P(e, t) {
  return o6(e, t, false, true);
}

function zw(e) {
  return cW.has(e) || false;
}

function sQ(e) {
  let r = e
    .split(`
`)
    .filter((o) => !o.trim().startsWith("#"));
  if (r.length === 0) return e;
  return r.join(`
`);
}

function vh(e) {
  let t = [
      /^timeout[ \t]+(?:(?:--(?:foreground|preserve-status|verbose)|--(?:kill-after|signal)=[A-Za-z0-9_.+-]+|--(?:kill-after|signal)[ \t]+[A-Za-z0-9_.+-]+|-v|-[ks][ \t]+[A-Za-z0-9_.+-]+|-[ks][A-Za-z0-9_.+-]+)[ \t]+)*(?:--[ \t]+)?\d+(?:\.\d+)?[smhd]?[ \t]+/,
      /^time[ \t]+(?:--[ \t]+)?/,
      /^nice(?:[ \t]+-n[ \t]+-?\d+|[ \t]+-\d+)?[ \t]+(?:--[ \t]+)?/,
      /^stdbuf(?:[ \t]+-[ioe][LN0-9]+)+[ \t]+(?:--[ \t]+)?/,
      /^nohup[ \t]+(?:--[ \t]+)?/,
      /^command(?:[ \t]+-p+)*(?:[ \t]+--)?[ \t]+(?!-)/,
      /^builtin(?:[ \t]+--)?[ \t]+(?!-)/,
      /^noglob[ \t]+(?!-)/,
    ],
    r = /^([A-Za-z_][A-Za-z0-9_]*)=([A-Za-z0-9_./:-]+)[ \t]+/,
    o = e,
    u = "";
  while (o !== u) {
    (u = o), (o = sQ(o));
    let _ = o.match(r);
    if (_) {
      let C = _[1],
        A = false;
      if (cW.has(C)) o = o.replace(r, "");
    }
  }
  function d(_) {
    let C = _.match(/^([^\s]+)([\s\S]*)$/);
    if (!C) return _;
    let A = C[1],
      x = null,
      M = false,
      F = "";
    for (let U = 0; U < A.length; U++) {
      let B = A[U];
      if (((M = false), x === "'"))
        if (B === "'") x = null;
        else F += B;
      else if (x === '"')
        if (B === "\\") {
          let W = A[U + 1];
          if (W === "$" || W === "`" || W === '"' || W === "\\") (F += W), U++;
          else if (W === void 0) M = true;
          else F += B;
        } else if (B === '"') x = null;
        else F += B;
      else if (B === "\\") {
        let W = A[U + 1];
        if (W === void 0) M = true;
        else (F += W), U++;
      } else if (B === '"' || B === "'") x = B;
      else F += B;
    }
    if (x !== null || M) return _;
    return F + C[2];
  }
  (o = d(sQ(o))), (u = "");
  while (o !== u) {
    u = o;
    for (let _ of t) o = o.replace(_, "");
    if (o !== u) o = d(sQ(o));
  }
  return o.trim();
}

function n_e(e) {
  let t = 1;
  while (t < e.length) {
    let r = e[t],
      o = e[t + 1];
    if (r === "--foreground" || r === "--preserve-status" || r === "--verbose") t++;
    else if (/^--(?:kill-after|signal)=[A-Za-z0-9_.+-]+$/.test(r)) t++;
    else if ((r === "--kill-after" || r === "--signal") && o && E9e.test(o)) t += 2;
    else if (r === "--") {
      t++;
      break;
    } else if (r.startsWith("--")) return -1;
    else if (r === "-v") t++;
    else if ((r === "-k" || r === "-s") && o && E9e.test(o)) t += 2;
    else if (/^-[ks][A-Za-z0-9_.+-]+$/.test(r)) t++;
    else if (r.startsWith("-")) return -1;
    else break;
  }
  return t;
}

function Tnn(e) {
  let t = e;
  for (;;)
    if (t[0] === "time" || t[0] === "nohup") t = t.slice(t[1] === "--" ? 2 : 1);
    else if (t[0] === "timeout") {
      let r = n_e(t);
      if (r < 0 || !t[r] || !/^\d+(?:\.\d+)?[smhd]?$/.test(t[r])) return t;
      t = t.slice(r + 1);
    } else if (t[0] === "nice" && t[1] === "-n" && t[2] && /^-?\d+$/.test(t[2])) t = t.slice(t[3] === "--" ? 4 : 3);
    else return t;
}

function vnn(e, t) {
  if (t) return t.envVars.some((d) => !zw(d.name));
  let r = /^([A-Za-z_][A-Za-z0-9_]*)\+?=/,
    o = /^[A-Za-z_][A-Za-z0-9_]*\+?=(?:"[^"$`\\]*"|'[^']*'|[A-Za-z0-9_./:+-]*)[ \t]+/,
    u = e.command;
  for (;;) {
    let d = u.match(r);
    if (!d) return false;
    if (!zw(d[1])) return true;
    let _ = u.match(o);
    if (!_) return true;
    u = u.slice(_[0].length);
  }
}

function cQ(e, t) {
  let r =
      /^([A-Za-z_][A-Za-z0-9_]*(?:\[[^\]]*\])?)\+?=(?:'[^'\n\r]*'|"(?:\\.|[^"$`\\\n\r])*"|\\.|[^ \t\n\r$`;|&()<>\\\\'"])*[ \t]+/,
    o = e,
    u = "";
  while (o !== u) {
    (u = o), (o = sQ(o));
    let d = o.match(r);
    if (!d) continue;
    if (t?.test(d[1])) break;
    o = o.slice(d[0].length);
  }
  return o.trim();
}

function Rnn(e) {
  let t = e.slice();
  for (;;) {
    while (t[0] !== void 0 && C9e.test(t[0])) t = t.slice(1);
    t = Tnn(t);
    let r = t[0];
    if (r === void 0) return t;
    let o = Td(Enn, r);
    if (o === void 0) return t;
    let u = Td(Cnn, r),
      d = Td(Ann, r),
      _ = 1,
      C,
      A = false;
    while (_ < t.length) {
      let x = t[_];
      if (x === "--") {
        if ((_++, !A && d !== void 0 && _ + 1 < t.length && d(t[_]))) {
          (A = true), _++;
          continue;
        }
        break;
      }
      if (u !== void 0) {
        if (u.has(x) && t[_ + 1] !== void 0) {
          let F = t[_ + 1].trim();
          if (F !== "") {
            C = F;
            break;
          }
          _ += 2;
          continue;
        }
        let M = x.indexOf("=");
        if (M > 0 && u.has(x.slice(0, M))) {
          let F = x.slice(M + 1).trim();
          if (F !== "") {
            C = F;
            break;
          }
          _++;
          continue;
        }
        if (x.length > 2 && x[1] !== "-" && u.has(x.slice(0, 2))) {
          let F = x.slice(2).trim();
          if (F !== "") {
            C = F;
            break;
          }
          _++;
          continue;
        }
      }
      if (x.startsWith("-") && (x !== "-" || d === void 0)) {
        if (r === "command" && /^-[pvV]+$/.test(x) && /[vV]/.test(x)) return t;
        _ += o.has(x) && _ + 1 < t.length ? 2 : 1;
        continue;
      }
      if (r === "env" && C9e.test(x)) {
        _++;
        continue;
      }
      if (!A && d?.(x) && _ + 1 < t.length) {
        (A = true), _++;
        continue;
      }
      break;
    }
    if (C !== void 0) {
      if (((t = C.trim().split(/\s+/)), t.length === 0 || t[0] === "")) return e.slice();
      continue;
    }
    if (_ >= t.length) return t;
    t = t.slice(_);
  }
}

function aW(e, t, r, { stripAllEnvVars: o = false, skipCompoundCheck: u = false, astCommand: d, ruleBehavior: _ } = {}) {
  let C = e.command.trim(),
    A = Tee(C).commandWithoutRedirections,
    M = (r === "exact" ? [C, A] : [A]).flatMap((U) => {
      let B = vh(U);
      return B !== U ? [U, B] : [U];
    });
  if (o) {
    let U = d?.argv ?? uu(A),
      B = Rnn(U);
    if (B.length > 0 && B[0] !== U[0]) M.push(B.join(" "));
    let W = new Set(M),
      z = 0;
    while (z < M.length) {
      let pe = M.length;
      for (let fe = z; fe < pe; fe++) {
        let me = M[fe];
        if (!me) continue;
        let ge = cQ(me);
        if (!W.has(ge)) M.push(ge), W.add(ge);
        let Ce = vh(me);
        if (!W.has(Ce)) M.push(Ce), W.add(Ce);
      }
      z = pe;
    }
  }
  let F = new Map();
  if (r === "prefix" && !u) {
    for (let U of M) if (!F.has(U)) F.set(U, Ia(U).length > 1);
  }
  return Array.from(t.entries())
    .filter(([U]) => {
      let B = lQ(U);
      return M.some((W) => {
        switch (B.type) {
          case "exact":
            return B.command === W;
          case "prefix": {
            let z = B.prefix.replace(/[ \t]+/g, " "),
              pe = W.replace(/[ \t]+/g, " ");
            switch (r) {
              case "exact":
                return z === pe;
              case "prefix": {
                if (F.get(W)) return false;
                if (pe === z) return true;
                if (pe.startsWith(z + " ")) return true;
                let fe = "xargs " + z;
                if (pe === fe) return true;
                return pe.startsWith(fe + " ");
              }
            }
            break;
          }
          case "wildcard":
            if (r === "exact") return false;
            if (F.get(W)) return false;
            if ($P(B.pattern, W)) return true;
            if (_ !== "deny" && _ !== "ask" && !oQn(B.pattern)) return false;
            return $P(`xargs ${B.pattern}`, W);
        }
      });
    })
    .map(([, U]) => U);
}

function Gw(e, t, r, { skipCompoundCheck: o = false, astCommand: u } = {}) {
  let d = qne(t, _i, "deny"),
    _ = aW(e, d, r, { stripAllEnvVars: true, skipCompoundCheck: true, astCommand: u, ruleBehavior: "deny" }),
    C = qne(t, _i, "ask"),
    A = aW(e, C, r, { stripAllEnvVars: true, skipCompoundCheck: true, astCommand: u, ruleBehavior: "ask" }),
    x = qne(t, _i, "allow"),
    M = aW(e, x, r, { skipCompoundCheck: o, ruleBehavior: "allow" });
  return { matchingDenyRules: _, matchingAskRules: A, matchingAllowRules: M };
}

async function Pnn(e, t) {
  if (t.length === 0) return null;
  let r = { span: e.command.trim(), group: t[0] ?? [], kind: "unverifiable" },
    o = await JTe(e.command);
  if (o === f3) return r;
  let u = o ? WTe(e.command, o) : { kind: "simple", commands: [], bareAssignmentNames: [] };
  if (u.kind === "too-complex") return r;
  let d = YH(e.command);
  if (d === null || d.length === 0) return r;
  let _ = te([...d, ...u.commands.map((C) => C.text)]);
  for (let C of t) {
    let A = new Map();
    for (let x of C) {
      let M = Ur(x);
      if (M.toolName !== _i.name || M.ruleContent === void 0 || M.ruleContent === "") continue;
      A.set(M.ruleContent, { source: "session", ruleBehavior: "allow", ruleValue: M });
    }
    for (let x of _) {
      let M = { ...e, command: x };
      if (
        !(
          aW(M, A, "exact", { ruleBehavior: "allow" }).length > 0 ||
          aW(M, A, "prefix", { ruleBehavior: "allow" }).length > 0
        )
      )
        return { span: x, group: C, kind: "unmatched" };
    }
  }
  return null;
}

function Qqn(e, t) {
  let r = he(t).bashCommandClamps;
  if (r !== void 0 && r.length > 0)
    return {
      behavior: "deny",
      message:
        `Permission to use ${e} has been denied: this agent carries a per-spawn bashCommandClamp, which scopes shell ` +
        "execution to a fixed set of Bash command forms \u2014 this surface " +
        "cannot match them. Use the clamped Bash forms instead.",
      decisionReason: { type: "other", reason: QNe },
    };
  return;
}

function v$t(e, t) {
  let r = he(t).bashCommandClamps;
  if (r !== void 0 && r.length > 0)
    return {
      behavior: "deny",
      message: `The ${e} permission check crashed and this agent carries a per-spawn bashCommandClamp; denying rather than running an unverified command.`,
      decisionReason: { type: "other", reason: XXe },
    };
  return;
}

async function A9e(e, t, r, o, u, d, _ = []) {
  let C = uQ(e, t);
  if (C.behavior === "deny" || C.behavior === "ask") return C;
  let A = D9e(e, t, o, u, d, _);
  if (A.behavior === "deny" || A.behavior === "ask") return A;
  if (A.behavior === "allow") return A;
  let x = r?.commandPrefix ? wnn(r.commandPrefix) : aqe(e.command);
  return { ...A, suggestions: x };
}

function R9e(e, t, r, o) {
  if (!pt.isSandboxingEnabled() || !pt.isAutoAllowBashIfSandboxedEnabled() || !vv(e) || Q8e(t)) return null;
  let u = Onn(e, t, r);
  if (u.behavior === "passthrough") return null;
  let d = oW(),
    _ =
      o.some((M) => !zw(M) && (d === null || d.has(M))) ||
      r.some(
        (M) =>
          M.envVars.some((F) => !zw(F.name)) ||
          M.argv.some((F) => {
            if (!F.includes("=") || F.startsWith("-")) return false;
            let U = F.indexOf("="),
              B = F[U - 1] === "+" ? F.slice(0, U - 1) : F.slice(0, U);
            return !zw(B);
          }),
      ),
    C = r.some((M) => M.redirects.some((F) => /^\/dev\/(tcp|udp)\//.test(F.target)));
  if (_ || C) return null;
  let A = false,
    x = false;
  for (let M of r) {
    let [F, ...U] = Lb(M.argv),
      B = F?.replace(/^.*[\\/]/, "");
    if (B === "cd" || B === "pushd" || B === "popd" || B === "chdir") {
      A = true;
      continue;
    }
    if (B !== "rm" && B !== "rmdir") continue;
    if (((x = true), wL(B, U, ee(), t).behavior !== "passthrough")) return null;
  }
  if (A && x) return null;
  return u;
}

function xnn(e, t, r) {
  if (!pt.isSandboxingEnabled() || !pt.isAutoAllowBashIfSandboxedEnabled() || !vv(e) || Q8e(t)) return null;
  if (r === void 0 || r === "PARSE_ABORT" || r === "ERROR") return null;
  if (/(?<!<)<<(?!<)/.test(e.command)) return null;
  if (/\$\{[\s|]/.test(e.command.replace(/['"\\]/g, ""))) return null;
  if (/\$\{![A-Za-z_0-9]/.test(e.command.replace(/['"\\]/g, ""))) return null;
  if (/\/proc\/.*\/environ/.test(e.command.replace(/['"\\]/g, ""))) return null;
  let o = YH(e.command);
  if (o === null || o.length === 0) return null;
  let u;
  for (let d of o) {
    let { matchingDenyRules: _, matchingAskRules: C } = Gw({ ...e, command: d }, t, "prefix");
    if (_[0] !== void 0)
      return {
        behavior: "deny",
        message: `Permission to use ${_i.name} with command ${e.command.trim()} has been denied.`,
        decisionReason: { type: "rule", rule: _[0] },
      };
    u ??= C[0];
  }
  for (let d of o) {
    let _ = d.trim().split(/\s+/).filter(Boolean),
      C = Inn(_);
    if (C === null) return null;
    if (C.length === 0) continue;
    let A = Lb(C),
      x = C.slice(0, C.length - A.length);
    if (x.some((W) => /["'`$\\(){}|;&<>*?[\]]/.test(W))) return null;
    if (
      x.some((W) => {
        let z = W.match(/^([A-Za-z_]\w*)\+?=/);
        return z !== null && qTe(z[1]);
      })
    )
      return null;
    let M = A.map((W) => W.replace(/['"\\]/g, ""));
    if (
      M.some((W) => {
        let z = W.match(/^([A-Za-z_]\w*)\+?=/);
        return z !== null && qTe(z[1]);
      })
    )
      return null;
    let F = A.some((W, z) => {
        if (z === 0) return false;
        if ((W.includes("$'") && !/^'[^']*\$'$/.test(W)) || (W.includes('$"') && !/^"[^"]*\$"$/.test(W))) return true;
        let pe = M[z];
        return (
          pe.includes("`") ||
          /\$\((?!\()/.test(pe) ||
          (/\$[^(\s]/.test(pe) && pe.includes("-")) ||
          /\$\{[^}]*:?[+=]/.test(pe) ||
          /\{[^\s]*(,|\.\.)/.test(W) ||
          (pe.match(/\{/g) ?? []).length !== (pe.match(/\}/g) ?? []).length
        );
      }),
      U = M.some((W, z) => z > 0 && W.includes("$")),
      B = A[0];
    if (
      B === void 0 ||
      !/^[A-Za-z0-9._/~+][A-Za-z0-9._/~+-]*$/.test(B) ||
      JJn(B) ||
      P9e.has(B) ||
      P9e.has(B.replace(/^.*[\\/]/, "")) ||
      (Mnn.has(B) && (F || M.some((W) => W.includes("[") && /[$`]/.test(W)))) ||
      (B === "test" && (F || M.some((W) => W === "-t" || sKe.has(W)))) ||
      B === "jq" ||
      sWt.has(B) ||
      (B === "find" &&
        (F ||
          (() => {
            for (let W = 1; W < M.length; W++) {
              let z = M[W];
              if ($hn.has(z)) return true;
              if (X_t.has(A[W]) || Y_t.test(A[W])) {
                let pe = M[W + 1];
                if (
                  pe !== void 0 &&
                  (!pe.includes("$") || (/^["'].*["']$/.test(A[W + 1]) && /^\$\{?[A-Za-z_]\w*\}?$/.test(pe)))
                ) {
                  W++;
                  continue;
                }
              }
              if (z.includes("$") || /[[\]*?]/.test(z)) return true;
            }
            return false;
          })())) ||
      (B === "jobs" && (F || U || M.some((W) => /^-[^-]*x/.test(W)))) ||
      (B === "set" &&
        (F ||
          (() => {
            for (let W = 1; W < M.length; W++) {
              let z = M[W];
              if (z === "--") return false;
              if (z.includes("$")) return true;
              if (!/^[-+]/.test(z)) continue;
              for (let pe = 1; pe < z.length; pe++) {
                let fe = z[pe];
                if (fe === "o") {
                  let me = pe < z.length - 1 ? z.slice(pe + 1) : M[W + 1];
                  if (me !== void 0 && me !== "" && !jhn.has(me.toLowerCase().replace(/[_-]/g, ""))) return true;
                  break;
                }
                if (fe === "A") break;
                if (!Whn.has(fe)) return true;
              }
            }
            return false;
          })()))
    )
      return null;
  }
  if (u) return { behavior: "ask", message: Gl(_i.name), decisionReason: { type: "rule", rule: u } };
  return { behavior: "allow", updatedInput: e, decisionReason: { type: "other", reason: JNe } };
}

function Inn(e) {
  let t = 0;
  while (t < e.length) {
    let o = e[t].match(/^([A-Za-z_][A-Za-z0-9_]*)\+?=(.*)$/);
    if (o === null) break;
    if (qTe(o[1])) return null;
    if (/["'`$\\(){}|;&<>*?[\]]/.test(o[2])) return null;
    t++;
  }
  return t === 0 ? e : e.slice(t);
}

function Onn(e, t, r) {
  let o = e.command.trim(),
    { matchingDenyRules: u, matchingAskRules: d } = Gw(e, t, "prefix", { astCommand: r.length === 1 ? r[0] : void 0 });
  if (u[0] !== void 0)
    return {
      behavior: "deny",
      message: `Permission to use ${_i.name} with command ${o} has been denied.`,
      decisionReason: { type: "rule", rule: u[0] },
    };
  if (r.length > 1) {
    let _;
    for (let C of r) {
      let A = Gw({ command: C.text }, t, "prefix", { astCommand: C });
      if (A.matchingDenyRules[0] !== void 0)
        return {
          behavior: "deny",
          message: `Permission to use ${_i.name} with command ${o} has been denied.`,
          decisionReason: { type: "rule", rule: A.matchingDenyRules[0] },
        };
      _ ??= A.matchingAskRules[0];
    }
    if (_) return { behavior: "ask", message: Gl(_i.name), decisionReason: { type: "rule", rule: _ } };
  }
  if (d[0] !== void 0) return { behavior: "ask", message: Gl(_i.name), decisionReason: { type: "rule", rule: d[0] } };
  return { behavior: "allow", updatedInput: e, decisionReason: { type: "other", reason: JNe } };
}

function Dnn(e, t, r, o) {
  let u = [],
    d = [];
  for (let _ = 0; _ < e.length; _++) {
    let C = e[_],
      A = t?.[_];
    if (
      ((C === `cd ${r}` && x9e(r)) || (C === `cd ${o}` && x9e(o))) &&
      A !== void 0 &&
      A.argv.length === 2 &&
      A.argv[0] === "cd" &&
      A.envVars.length === 0 &&
      A.redirects.length === 0 &&
      !/[*?[\]]/.test(A.argv[1]) &&
      !Qa(A.argv[1])
    )
      continue;
    u.push(C), d.push(A);
  }
  return { subcommands: u, astCommandsByIdx: d };
}

function x9e(e) {
  return !/[\s\\$`'"*?[\]{}<>|&;()]/.test(e);
}

function Lnn(e) {
  if (e.includes("||") || e.includes(";")) return false;
  if (
    e.includes(`
`)
  )
    return false;
  if (e.replaceAll("&&", "").includes("&")) return false;
  return true;
}

function Fnn(e, t, r) {
  if (!e) return null;
  if (e.envVars.length > 0 || e.redirects.length > 0) return null;
  if (e.argv.length !== 2 || e.argv[0] !== "cd") return null;
  let o = e.argv[1];
  if (Qa(o)) return null;
  if (o.startsWith("-")) return null;
  if (!F9e(o)) return null;
  if (!lW(o) && o.split(/[\\/]/).includes("..")) return null;
  if (D() === "windows" && !$9e(o, t)) return null;
  if (/[*?[\]]/.test(o)) return null;
  let { allowed: u, resolvedPath: d } = $ht(o, t, r, "read");
  if (!u) return null;
  if (!Xy(d, r, [d])) return null;
  return d;
}

async function Nnn(e, t, r) {
  let o = await l_e(r);
  if (o === null) return false;
  if (Q(t, (_) => Hb(_)) > 1) return false;
  let d = false;
  for (let _ = 0; _ < t.length; _++) {
    if (!Hb(t[_])) continue;
    d = true;
    let C = e[_];
    if (!C) return false;
    if (C.envVars.length > 0 || C.redirects.length > 0) return false;
    if (C.argv.length !== 2 || C.argv[0] !== "cd") return false;
    if (Qa(C.argv[1])) return false;
    let A = D() === "windows" ? L9e(t[_]) : C.argv[1];
    if (A === null) return false;
    if (!(await N9e(A, r, o))) return false;
  }
  return d;
}

async function $nn(e, t) {
  let r = await l_e(t);
  if (r === null) return false;
  if (Q(e, (d) => Hb(d.trim())) > 1) return false;
  let u = false;
  for (let d of e) {
    let _ = d.trim();
    if (!Hb(_)) continue;
    u = true;
    let C = L9e(_);
    if (C === null) return false;
    if (!(await N9e(C, t, r))) return false;
  }
  return u;
}

function L9e(e) {
  let t = e.trim();
  if (!t.startsWith("cd ")) return null;
  let r = t.slice(3).trim();
  if (r.length === 0) return null;
  let o = r[0];
  if (o === '"' || o === "'") {
    if (r.length < 2 || r.at(-1) !== o) return null;
    let u = r.slice(1, -1);
    if (u.includes(o)) return null;
    if (o === '"' && u.includes("\\") && D() !== "windows") return null;
    if (/[\x00-\x1f\x7f]/.test(u)) return null;
    return u;
  }
  if (/\s/.test(r)) return null;
  if (/['"]/.test(r)) return null;
  if (r.includes("\\")) return null;
  if (/[<>|&;(){}]/.test(r)) return null;
  return r;
}

function F9e(e) {
  return lW(e) || e.startsWith("./") || e.startsWith("../") || e === "." || e === "..";
}

async function N9e(e, t, r) {
  if (e.startsWith("-")) return false;
  if (!F9e(e)) return false;
  if (
    e.includes("$") ||
    e.includes("`") ||
    /[*?[]/.test(e) ||
    (D() !== "windows" && e.includes("\\")) ||
    (D() === "windows" && e.includes("%"))
  )
    return false;
  if (S_(e) || (D() === "windows" && /^[\\/]{2}/.test(e))) return false;
  if (D() === "windows" && !$9e(e, t)) return false;
  {
    let d = lW(e),
      _ = false;
    for (let C of e.split(/[\\/]/)) {
      if (C === "" || C === ".") continue;
      if (C === "..") {
        if (!d || _) return false;
        continue;
      }
      _ = true;
    }
  }
  let o = lW(e) ? e : I9e(t, e),
    u = await l_e(o);
  if (u === null) return false;
  return u === r;
}

function $9e(e, t) {
  let r = e,
    o,
    u = /^[A-Za-z]:[\\/]/.exec(e);
  if (u) (r = e.slice(u[0].length)), (o = 0);
  else if (/^[\\/]/.test(e) || e.includes("\\")) return false;
  else {
    if (/^[\\/]{2}/.test(t)) return false;
    o = 0;
    for (let C of t.replace(/^[A-Za-z]:/, "").split(/[\\/]/)) {
      if (C === "" || C === ".") continue;
      o += C === ".." ? -1 : 1;
    }
  }
  let d = !u,
    _ = false;
  for (let C of r.split(/[\\/]/)) {
    if (C === "" || C === ".") continue;
    if (C === "..") {
      if (o === 0) return false;
      (o -= 1), (_ = true);
      continue;
    }
    if (d && _) return false;
    if (C.includes(":") || /[ .]$/.test(C)) return false;
    o += 1;
  }
  return true;
}

async function l_e(e) {
  if (D() === "windows") {
    let t = e.split(/[\\/]/);
    for (let o = 0; o < t.length; o++) {
      let u = t[o];
      if (u === "." || u === "..") continue;
      if (/[ .]$/.test(u)) return null;
      if (u.includes(":") && !(o === 0 && /^[A-Za-z]:$/.test(u))) return null;
    }
    let r = await _nn(e, { bigint: true }).catch(() => null);
    if (r === null || r.ino === 0n || r.ino === 0xffffffffffffffffn) return null;
    return `${r.dev}:${r.ino}`;
  }
  return await ynn(e).catch(() => null);
}

function U9e(e, t) {
  let { matchingDenyRules: r, matchingAskRules: o } = Gw(e, t, "prefix");
  if (r[0] !== void 0)
    return {
      behavior: "deny",
      message: `Permission to use ${_i.name} with command ${e.command} has been denied.`,
      decisionReason: { type: "rule", rule: r[0] },
    };
  let u = uQ(e, t);
  if (u.behavior === "deny") return u;
  if (o[0] !== void 0) return { behavior: "ask", message: Gl(_i.name), decisionReason: { type: "rule", rule: o[0] } };
  if (u.behavior !== "passthrough") return u;
  return null;
}

async function Unn(e, t, r) {
  let o = U9e(e, t);
  if (o?.behavior === "deny") return o;
  for (let _ of Ia(e.command)) {
    let C = Gw({ ...e, command: _ }, t, "prefix").matchingDenyRules[0];
    if (C !== void 0)
      return {
        behavior: "deny",
        message: `Permission to use ${_i.name} with command ${e.command} has been denied.`,
        decisionReason: { type: "rule", rule: C },
      };
  }
  let u = t_e(e.command);
  if (u !== null) {
    s("tengu_bash_dangerous_rm_too_complex", {});
    let { command: _, target: C } = u;
    return jw(
      _,
      `Dangerous ${_} operation detected: '${C}'

This target is a shell variable expansion that points at the filesystem ` +
        "root (or a top-level directory) when the variable is unset or empty \u2014 " +
        "e.g. `rm -rf $UNSET/*` becomes `rm -rf /*`. This requires explicit approval and cannot be auto-allowed by permission rules.",
      `on possibly-empty variable path: ${C}`,
    );
  }
  if (r && r !== f3) {
    let _ = await Bnn(r, ee(), t);
    if (_ !== null) return s("tengu_bash_dangerous_rm_too_complex", {}), _;
  }
  if (o === null || o.behavior !== "allow") return o;
  return (o.decisionReason?.type === "rule" ? o.decisionReason.rule.ruleValue.ruleContent : void 0) === e.command.trim()
    ? o
    : null;
}

async function Bnn(e, t, r) {
  let o = [],
    u = (_) => {
      let C = _.text,
        A = (_.type === "expansion" || _.type === "ERROR") && /^\$\{[ \t\n|]/.test(C);
      if (_.type === "command_substitution" || _.type === "process_substitution" || A) {
        let M =
            C.startsWith("$(") || C.startsWith("<(") || C.startsWith(">(") || C.startsWith("${")
              ? 2
              : C.startsWith("`")
                ? 1
                : 0,
          F = C.endsWith(")") || C.endsWith("`") || C.endsWith("}") ? C.length - 1 : C.length,
          U = C.slice(M, F).trim();
        if (A) U = U.replace(/^\|/, "").replace(/;$/, "").trim();
        o.push(U);
      }
      for (let x of _.children) if (x) u(x);
    };
  if ((u(e), o.length > 64)) {
    if (/\brm(?:dir)?\b/.test(e.text))
      return jw(
        "rm",
        `This command contains ${o.length} command substitutions \u2014 too many to analyze for catastrophic removals. This requires explicit approval.`,
        `\u2014 too many command substitutions to analyze (${o.length})`,
      );
    return null;
  }
  let d = EL(e.text) || o.some((_) => EL(_));
  for (let _ of [e.text, ...o]) {
    let C;
    try {
      C = Ia(_);
    } catch {
      C = [_];
    }
    for (let A of C) {
      let x = A.trim();
      if ((x.startsWith("{") && /;?\s*\}$/.test(x)) || (x.startsWith("(") && x.endsWith(")")))
        x = x
          .slice(1)
          .replace(/;?\s*[)}]$/, "")
          .trim();
      let M = t_e(x);
      if (M !== null)
        return jw(
          M.command,
          `Dangerous ${M.command} operation detected inside command substitution: '${M.target}'

This target is a shell variable expansion that points at the filesystem root (or a top-level directory) when the variable is unset or empty. This requires explicit approval and cannot be auto-allowed by permission rules.`,
          `on possibly-empty variable path inside command substitution: ${M.target}`,
        );
      let F = x.replace(/`[^`]*`/g, "__CMDSUB__");
      for (let W = "", z = 0; W !== F && z < 16; z++) (W = F), (F = F.replace(/\$\([^()]*\)/g, "__CMDSUB__"));
      let U = F !== x,
        B = await ide(F);
      if (B.kind === "simple")
        for (let W of B.commands) {
          let z = Lb(W.argv),
            pe = H8(z[0]);
          if (pe !== "rm" && pe !== "rmdir") continue;
          let fe = z.slice(1),
            me = wL(pe, fe, t, r, d);
          if (me.behavior === "ask") return me;
          if (U && fe.some((ge) => /.__CMDSUB__\/?\*?$/.test(ge))) {
            let ge = fe.map((Ie) => Ie.replace(/(.)__CMDSUB__\/?\*?$/, "$1")),
              Ce = wL(pe, ge, t, r, d);
            if (Ce.behavior === "ask") return Ce;
          }
        }
    }
  }
  return null;
}

function Hnn(e, t, r) {
  let o = U9e(e, t);
  if (o?.behavior === "deny") return o;
  for (let u of r) {
    let d = Gw({ ...e, command: u.text }, t, "prefix", { astCommand: u }).matchingDenyRules[0];
    if (d !== void 0)
      return {
        behavior: "deny",
        message: `Permission to use ${_i.name} with command ${e.command} has been denied.`,
        decisionReason: { type: "rule", rule: d },
      };
  }
  if (o?.behavior === "allow") {
    if ((o.decisionReason?.type === "rule" ? o.decisionReason.rule.ruleValue.ruleContent : void 0) === e.command.trim())
      return o;
  }
  if (o?.behavior === "ask") return o;
  return null;
}

function B9e(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.type === "ERROR") return true;
    if (t.type === "&") {
      if (e.type !== "binary_expression") return true;
      continue;
    }
    if (B9e(t)) return true;
  }
  return false;
}

function M9e(e, t, r) {
  if (e.behavior !== "ask" || e.matchedAskRule !== void 0 || !Cyt(r)) return e;
  if (By(e.decisionReason, _Tt) === void 0) return e;
  let u = new Set([t.command]);
  for (let d of Ia(t.command)) u.add(d);
  if (e.decisionReason?.type === "subcommandResults") for (let d of e.decisionReason.reasons.keys()) u.add(d);
  for (let d of u) {
    let { matchingAskRules: _ } = Gw({ ...t, command: d }, r, "prefix"),
      C = _[0];
    if (C !== void 0) return { ...e, matchedAskRule: C };
  }
  return e;
}

async function tpt(e, t, r) {
  let o = he(t).bashCommandClamps;
  if (o !== void 0 && o.length > 0) {
    let C = await Pnn(e, o);
    if (C !== null)
      return (
        s("tengu_bash_command_clamp_denied", { groupCount: o.length }),
        {
          behavior: "deny",
          message:
            `Permission to use ${_i.name} with command ${e.command.trim()} has been denied: this agent's Bash use is clamped to a fixed set of command forms (per-spawn bashCommandClamp), and ` +
            (C.kind === "unverifiable"
              ? "the command has structure the clamp cannot verify " +
                "(substitution, control flow, or an undecomposable compound) \u2014 " +
                "no clamp rule can admit it. Issue plain commands matching the clamped forms."
              : `the span ${b(C.span)} matches none of them. Allowed forms: ${C.group.join(", ")}`),
          decisionReason: { type: "other", reason: QNe },
        }
      );
  }
  let u = await jnn(e, t, r);
  if (u.behavior !== "allow" || !e.command.includes("&")) return M9e(u, e, he(t));
  if (u.decisionReason?.type === "other" && u.decisionReason.reason === JNe) return u;
  let d = await JTe(e.command);
  if (d && d !== f3 && !B9e(d)) return u;
  let _ = {
    type: "safetyCheck",
    reason:
      "This command uses the `&` background operator, which defers execution past approval-time safety checks. Approve only if you trust it.",
    classifierApprovable: false,
    circuitBreaker: "backgroundOperator",
  };
  return M9e({ behavior: "ask", decisionReason: _, message: Gl(_i.name, _) }, e, he(t));
}

async function jnn(e, t, r) {
  let o = he(t);
  zXe(t.sessionEnvVars?.keys() ?? []);
  let u = await JTe(e.command),
    d = u ? WTe(e.command, u) : { kind: "simple", commands: [], bareAssignmentNames: [] };
  if (d.kind === "too-complex") {
    let Xe = await Unn(e, o, u);
    if (Xe !== null) return Xe;
    let nt = t.forRemoteExecution === true ? null : xnn(e, o, d.nodeType);
    if (nt !== null) return nt;
    let ht = { type: "other", reason: d.reason, bashMissKind: "too-complex" };
    return (
      s("tengu_bash_ast_too_complex", { nodeTypeId: YJn(d.nodeType) }),
      { behavior: "ask", decisionReason: ht, message: Gl(_i.name, ht), suggestions: [] }
    );
  }
  let _ = d.commands,
    C = QJn(_);
  if (!C.ok) {
    let Xe = Hnn(e, o, _);
    if (Xe !== null) return Xe;
    if (C.kind === "newline-hash" && t.forRemoteExecution !== true) {
      let ht = R9e(e, o, _, d.bareAssignmentNames);
      if (ht) return ht;
    }
    let nt = { type: "other", reason: C.reason, bashMissKind: "semantics" };
    return { behavior: "ask", decisionReason: nt, message: Gl(_i.name, nt), suggestions: [] };
  }
  let A = _.map((Xe) => Xe.text),
    x = _.flatMap((Xe) => Xe.redirects),
    M = t.forRemoteExecution === true ? null : R9e(e, o, _, d.bareAssignmentNames);
  if (M) return M;
  let F = uQ(e, o);
  if (F.behavior === "deny") return F;
  let U = await T9e(
    e,
    (Xe) => tpt(Xe, t, r),
    { isNormalizedCdCommand: Hb, isNormalizedGitCommand: FP },
    u,
    _,
    (Xe) => $nn(Xe, ee()),
  );
  if (U.behavior !== "passthrough") {
    if (U.behavior === "allow") {
      o = he(t);
      let Xe = eQ(e, ee(), o, EL(e.command), x, _);
      if (Xe.behavior === "deny" || (Xe.behavior === "ask" && !Xe.bashAllowRuleOverridable)) return Xe;
    }
    return U;
  }
  let B = ee(),
    W = D() === "windows" ? MC(B) : B,
    { subcommands: z, astCommandsByIdx: pe } = Dnn(A, _, B, W),
    fe = z.filter((Xe) => Hb(Xe));
  if (fe.length > 1) {
    let nt = te(
        [B, ...TT(he(t))]
          .flatMap((hn) => {
            let { resolvedPath: Ke } = Qo(le(), hn);
            return Ke === hn ? [hn] : [hn, Ke];
          })
          .map((hn) => NP(hn)),
      ).map((hn) => ({ exact: yr(hn), prefix: yr(/[\\/]$/.test(hn) ? hn : hn + Snn) })),
      ht = (hn) => {
        let Ke = yr(NP(hn));
        return nt.some((mn) => Ke === mn.exact || Ke.startsWith(mn.prefix));
      },
      dn = !/[;|\n&]/.test(e.command.replace(/&&/g, "")),
      { resolvedPath: Lt } = Qo(le(), B),
      fn = te([NP(B), NP(Lt)]),
      Sn = [];
    for (let hn of _) {
      let [Ke, ...mn] = Lb(hn.argv),
        yn = Ke?.replace(/^.*[\\/]/, "");
      if (yn === "cd" || yn === "chdir" || yn === "pushd" || yn === "popd") {
        if (yn === "popd")
          if (mn.length === 0 && Sn.length > 0) fn = Sn.pop();
          else dn = false;
        else {
          let Cn = mn.filter((Lr) => Lr !== "--" && (Lr === "-" || !Lr.startsWith("-"))),
            Pn = Cn.length === 1 ? Cn[0] : void 0,
            nr = false,
            Rr = [];
          if (
            Pn !== void 0 &&
            Pn !== "-" &&
            !/^[+-]\d+$/.test(Pn) &&
            !Pn.startsWith("~") &&
            !/[*?[]/.test(Pn) &&
            !Qa(Pn) &&
            !/(^|[\\/])\.\.([\\/]|$)/.test(Pn)
          ) {
            nr = true;
            for (let Lr of fn) {
              let Pr = lW(Pn) ? NP(Pn) : I9e(Lr, Pn),
                { resolvedPath: wn } = Qo(le(), Pr);
              if (!ht(Pr) || !ht(wn)) {
                nr = false;
                break;
              }
              Rr.push(NP(Pr), NP(wn));
            }
          }
          if (((dn &&= nr), nr)) {
            if (yn === "pushd") Sn.push(fn);
            fn = te(Rr);
          }
        }
        continue;
      }
      if (yn !== "rm" && yn !== "rmdir") continue;
      let er = wL(yn, mn, B, he(t), !dn);
      if (er.behavior !== "passthrough") return er;
    }
    let bn = {
      type: "other",
      reason: "Multiple directory changes in one command require approval for clarity",
      bashMissKind: "multi-cd",
    };
    return { behavior: "ask", decisionReason: bn, message: Gl(_i.name, bn) };
  }
  let me = fe.length > 0,
    ge = B,
    Ce = me,
    Ie = false;
  if (t.forRemoteExecution !== true && me && z.length > 1 && z.length === A.length && Hb(z[0]) && Lnn(e.command)) {
    let Xe = Fnn(pe[0], B, o);
    if (Xe !== null) (ge = Xe), (Ce = false), (Ie = true);
  }
  let Ee;
  if (me) {
    if (z.some((nt) => FP(nt.trim())) && !(await Nnn(pe, z, B))) {
      let nt = {
        type: "other",
        reason:
          "This command changes directory before running git, which can execute untrusted hooks from the target directory. Approve only if you trust it.",
        bashMissKind: "cd-git-compound",
      };
      Ee = { behavior: "ask", decisionReason: nt, message: Gl(_i.name, nt) };
    }
  }
  let Pe;
  if (z.some((nt) => FP(nt.trim())) && (oQ(pe, ge) || iW(e.command))) {
    let nt = {
      type: "other",
      reason:
        "This command creates git repository structure files (HEAD/objects/refs/hooks) and then runs git, which can execute hooks/fsmonitor from the created files.",
      bashMissKind: "cd-git-compound",
    };
    Pe = { behavior: "ask", decisionReason: nt, message: Gl(_i.name, nt) };
  }
  o = he(t);
  let Oe = z.map((Xe, nt) => D9e({ command: Xe }, o, Ce, pe[nt], Ie && nt === 0 ? B : ge, d.bareAssignmentNames));
  if (Oe.find((Xe) => Xe.behavior === "deny") !== void 0)
    return {
      behavior: "deny",
      message: `Permission to use ${_i.name} with command ${e.command} has been denied.`,
      decisionReason: { type: "subcommandResults", reasons: new Map(Oe.map((Xe, nt) => [z[nt], Xe])) },
    };
  let Be = pe.slice(Ie ? 1 : 0).filter((Xe) => Xe !== void 0),
    ze = eQ(e, ge, o, Ce, x, Be);
  if (ze.behavior === "deny") return ze;
  if (
    ze.behavior === "ask" &&
    ze.decisionReason?.type === "safetyCheck" &&
    ze.decisionReason.classifierApprovable === false
  )
    return ze;
  if (Ee !== void 0) return Ee;
  if (Pe !== void 0) return Pe;
  let We = z
    .map((Xe, nt) => [Xe, nt])
    .filter(([Xe]) => nye(Xe))
    .map(([, Xe]) => Xe);
  if (We.length > 0) {
    let Xe = We.every((At) => {
        let dn = Oe[At];
        return dn?.behavior === "allow" && dn.decisionReason?.type === "rule";
      }),
      nt = Oe.some((At) => At.behavior !== "allow"),
      ht = ze.behavior === "ask" && !ze.bashAllowRuleOverridable;
    if (!Xe && !nt && !ht && F.behavior !== "allow") {
      let At = new Set(
          We.filter((Lt) => {
            let fn = Oe[Lt];
            return fn?.behavior === "allow" && fn.decisionReason?.type === "rule";
          }).map((Lt) => z[Lt].trim()),
        ),
        dn = rye(e, o, At);
      if (dn.behavior === "ask") return dn;
    }
  }
  let Ve = Oe.find((Xe) => Xe.behavior === "ask"),
    Pt = Q(Oe, (Xe) => Xe.behavior !== "allow");
  if (ze.behavior === "ask" && Ve === void 0 && !ze.bashAllowRuleOverridable) return ze;
  if (Ve !== void 0 && Pt === 1) return Ve;
  if (F.behavior === "allow") return F;
  if (Oe.every((Xe) => Xe.behavior === "allow"))
    return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: { type: "subcommandResults", reasons: new Map(Oe.map((Xe, nt) => [z[nt], Xe])) },
    };
  let ct = null;
  if (r) {
    if (
      ((ct = await r(e.command, t.abortController.signal, t.options.isNonInteractiveSession)),
      t.abortController.signal.aborted)
    )
      throw new Ze();
  }
  if (((o = he(t)), z.length === 1)) return await A9e({ command: z[0] }, o, ct, Ce, pe[0], ge, d.bareAssignmentNames);
  let ut = [];
  for (let Xe = 0; Xe < z.length; Xe++) {
    let nt = z[Xe];
    ut.push(
      await A9e(
        { ...e, command: nt },
        o,
        ct?.subcommandPrefixes.get(nt),
        Ce,
        pe[Xe],
        Ie && Xe === 0 ? B : ge,
        d.bareAssignmentNames,
      ),
    );
  }
  let en = { deny: 3, ask: 2, passthrough: 1, allow: 0 },
    nn = new Map();
  for (let Xe = 0; Xe < z.length; Xe++) {
    let nt = z[Xe],
      ht = ut[Xe],
      At = nn.get(nt),
      dn = en[ht.behavior],
      Lt = At ? en[At.behavior] : -1;
    if (!At || dn > Lt || (dn === Lt && By(ht.decisionReason) !== void 0 && By(At.decisionReason) === void 0))
      nn.set(nt, ht);
  }
  if (ut.every((Xe) => Xe.behavior === "allow"))
    return { behavior: "allow", updatedInput: e, decisionReason: { type: "subcommandResults", reasons: nn } };
  let xt = new Map();
  for (let Xe = 0; Xe < ut.length; Xe++) {
    let nt = z[Xe],
      ht = ut[Xe];
    if (ht.behavior === "ask" || ht.behavior === "passthrough") {
      let At = "suggestions" in ht ? ht.suggestions : void 0,
        dn = pKe(At);
      for (let Lt of dn) {
        let fn = eo(Lt);
        xt.set(fn, Lt);
      }
      if (ht.behavior === "ask" && dn.length === 0 && ht.decisionReason?.type !== "rule")
        for (let Lt of pKe(aqe(nt))) {
          let fn = eo(Lt);
          xt.set(fn, Lt);
        }
    }
  }
  let tt = { type: "subcommandResults", reasons: nn },
    lt = Array.from(xt.values()).slice(0, bnn),
    mt = lt.length > 0 ? [{ type: "addRules", rules: lt, behavior: "allow", destination: "localSettings" }] : void 0;
  return {
    behavior: Ve !== void 0 ? "ask" : "passthrough",
    message: Gl(_i.name, tt),
    decisionReason: tt,
    suggestions: mt,
  };
}

function FP(e) {
  if (e.startsWith("git ") || e === "git") return true;
  let t = vh(e),
    r = uu(t);
  if (r[0] === "git") return true;
  if (r[0] === "xargs" && r.includes("git")) return true;
  return false;
}

function Hb(e) {
  let t = uu(vh(e))[0];
  return t === "cd" || t === "pushd" || t === "popd" || t === "chdir";
}

function EL(e) {
  return Ia(e).some((t) => Hb(t.trim()));
}

function znn(e) {
  let r = En().sandbox?.excludedCommands ?? [];
  if (r.length === 0) return false;
  let o;
  try {
    o = Ia(e);
  } catch {
    o = [e];
  }
  for (let u of o) {
    let _ = [u.trim()],
      C = new Set(_),
      A = 0;
    while (A < _.length) {
      let x = _.length;
      for (let M = A; M < x; M++) {
        let F = _[M],
          U = cQ(F, Wnn);
        if (!C.has(U)) _.push(U), C.add(U);
        let B = vh(F);
        if (!C.has(B)) _.push(B), C.add(B);
      }
      A = x;
    }
    for (let x of r) {
      let M = lQ(x);
      for (let F of _) if (H9e(M, F)) return true;
    }
  }
  return false;
}

function Zqn(e) {
  let t = DOe().flatMap((o) => o?.sandbox?.excludedCommands ?? []),
    r = e.trim();
  if (t.length === 0 || !r || Gnn.test(r)) return false;
  return t.some((o) => H9e(lQ(o), r));
}

function H9e(e, t) {
  switch (e.type) {
    case "prefix":
      return t === e.prefix || t.startsWith(e.prefix + " ");
    case "exact":
      return t === e.command;
    case "wildcard":
      return $P(e.pattern, t);
  }
}

function vv(e, t) {
  if (wu() && a$()) return true;
  if (!pt.isSandboxingEnabled()) return false;
  if ((e.shellType ?? "bash") === "bash" && D() === "windows" && qN() === null) return false;
  let r = t?.disableUnsandboxedCommands === true || z2().unsandboxedCommandsDisabled || a.CLAUDE_CODE_EVAL_CONFINED;
  if (e.dangerouslyDisableSandbox && !r && pt.areUnsandboxedCommandsAllowed()) return false;
  if (!e.command) return Boolean(r);
  if (!r && znn(e.command)) return false;
  return true;
}

export { $5e, $Nt, $P, $Ye, $ct, $en, B5e, B6e, Bct, Ben, Bhe, Bj, C$t, C5e, CYe, Che, D5e, DP, Db, E3e, E5e, E8, EL, EP, EX, EZt, Ehe, FP, FYe, Fct, G6e, G8, Gw, H5e, Hj, I5e, Id, J3, JWn, Jqn, K6e, KWn, K_, Khe, L5e, LYe, Len, M5e, MB, ML, MXe, Mct, Mhe, NNt, NYe, Nct, Nen, O5e, OZt, Ohe, Oun, P5e, P8, PC, PP, PXe, Pen, Q3, Q6e, QPe, QWn, Qqn, R5e, RG, RXe, RYe, S3e, S6e, SYe, TP, The, U5e, UX, UYe, Uen, Uhe, Uj, V8, VWn, Vhe, W5e, W9, WNt, WX, Xxe, Y3, YYe, Yhe, Yqn, Yxe, Z3, ZWn, Zqn, _3e, _8, _L, _P, _Ye, a9e, aX, aqe, b3e, b6e, b8, bL, bP, bX, bXe, bee, ben, bhe, c9e, cL, cX, csn, dsn, e6e, e8, e9n, eQ, e_e, fL, fen, fsn, gL, gX, gXe, gen, gle, gte, h3e, h8, hX, hYe, hen, hhe, hle, i6e, i8, ien, j5e, j6e, jj, kX, khe, lBt, lD, lX, lsn, men, n9n, nXe, nsn, o8, o9n, oW, p9n, pL, pX, pen, psn, q6e, qWn, qj, r8, r9n, rsn, s9e, sC, t6e, t8, t9n, tW, tpt, uX, uXe, uen, v$t, v5e, v9e, vD, ven, vhe, vnn, vv, w6e, w9e, wee, whe, x8, xXe, xb, y6e, yX, yYe, yhe, ytn, z8, zWn, zc, ztn, zw };
