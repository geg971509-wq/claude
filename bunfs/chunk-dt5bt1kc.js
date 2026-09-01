// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { zEt, I_, SP, nU } from "/$bunfs/root/chunk-rgw52f13.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { we } from "/$bunfs/root/chunk-ypdw393e.js";
import { an } from "/$bunfs/root/chunk-c47snwm2.js";
import { Ge, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { ce, St } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { de } from "/$bunfs/root/chunk-xgfepdf4.js";
import { CO } from "/$bunfs/root/chunk-rf51999f.js";
import { Ut } from "/$bunfs/root/chunk-ntyhd04p.js";
import { CVe, Uwe, FD, jgt } from "/$bunfs/root/chunk-tveh0k24.js";
import { xz } from "/$bunfs/root/chunk-2c0fc0a1.js";
import { or } from "/$bunfs/root/chunk-z2bvp3sv.js";
import { i, f, dt } from "/$bunfs/root/chunk-saay52v7.js";
import { Ft } from "/$bunfs/root/chunk-ef7xmm9b.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
import { join as F } from "path";
function m6t(e) {
  if (!e) return "bin";
  switch (St(e, ";").trim().toLowerCase()) {
    case "application/pdf":
      return "pdf";
    case "application/json":
      return "json";
    case "text/csv":
      return "csv";
    case "text/plain":
      return "txt";
    case "text/html":
      return "html";
    case "text/markdown":
      return "md";
    case "application/zip":
      return "zip";
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "docx";
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "xlsx";
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return "pptx";
    case "application/msword":
      return "doc";
    case "application/vnd.ms-excel":
      return "xls";
    case "audio/mpeg":
      return "mp3";
    case "audio/wav":
      return "wav";
    case "audio/ogg":
      return "ogg";
    case "video/mp4":
      return "mp4";
    case "video/webm":
      return "webm";
    case "image/png":
      return "png";
    case "image/jpeg":
      return "jpg";
    case "image/gif":
      return "gif";
    case "image/webp":
      return "webp";
    case "image/svg+xml":
      return "svg";
    default:
      return "bin";
  }
}
var _ue = zEt;
async function Qb(e, t, r, o, a) {
  if (e.length > _ue) return { error: `content is ${e.length} bytes, over the ${_ue} byte persist limit` };
  let d = I_();
  if (O() && a !== void 0) {
    let h = await T(a, d, e, t, r, o);
    if (h !== void 0) return h;
  }
  await nU(d, a);
  let u = m6t(t),
    l = F(d, `${r}.${u}`);
  try {
    await an().writeBytes(l, e);
  } catch (h) {
    let b = we(h);
    return n(`Failed to persist binary content to ${l}: ${b.message}`, { level: "error" }), { error: b.message };
  }
  return (
    CVe(o, l),
    s("tengu_binary_content_persisted", { sizeBytes: e.length, ext: c(u) }),
    { filepath: l, size: e.length, ext: u }
  );
}
function yVe(e, t) {
  let r = (o) => o.replace(/[^\w-]/g, "");
  return `artifact-${r(e).slice(0, 8)}-${r(t)}`;
}
async function T(e, t, r, o, a, d) {
  let u = m6t(o),
    l = `${a}.${u}`,
    h = SP(t, l);
  if (h === void 0) return;
  let b = F(t, l),
    x = await e.write(h, r, { mode: 438 & ~process.umask() });
  if (!x.ok) {
    let w = Ge(x.error);
    return (
      n(`Failed to persist binary content to ${b}: ${w}`, { level: "error" }), { error: `storage write failed (${w})` }
    );
  }
  return (
    CVe(d, b),
    s("tengu_binary_content_persisted", { sizeBytes: r.length, ext: c(u) }),
    { filepath: b, size: r.length, ext: u }
  );
}
function P2(e, t, r, o) {
  return `${o}Binary content (${t || "unknown type"}, ${Ft(r)}) saved to ${e}`;
}
function qr(e) {
  return de().shareStatus.bySlug.get(e);
}
function Ogt(e) {
  return e !== void 0 && (e.capabilities !== void 0 || e.lastCapsIssuedAt !== void 0);
}
function SVe(e) {
  let { bySlug: t, filePathToSlug: r } = de().shareStatus,
    o = r.get(e);
  return o !== void 0 ? t.get(o) : void 0;
}
function Pwe(e, t) {
  let { bySlug: r } = de().shareStatus,
    o = r.get(e);
  r.set(e, {
    ...(o?.artifactKind !== void 0 && !("artifactKind" in t) && { artifactKind: o.artifactKind }),
    ...(o?.livePaths !== void 0 && !("livePaths" in t) && { livePaths: o.livePaths }),
    ...(o?.livePathsIssuedAt !== void 0 && !("livePathsIssuedAt" in t) && { livePathsIssuedAt: o.livePathsIssuedAt }),
    ...(o?.role !== void 0 && { role: o.role }),
    ...(o?.cowritten !== void 0 && { cowritten: o.cowritten }),
    ...(o?.title !== void 0 && { title: o.title }),
    ...(o?.capabilities !== void 0 && { capabilities: o.capabilities }),
    ...(o?.capabilitiesUnknown && { capabilitiesUnknown: true }),
    ...(o?.lastCapsReadToolUseId && { lastCapsReadToolUseId: o.lastCapsReadToolUseId }),
    ...(o?.lastProbeToolUseId && { lastProbeToolUseId: o.lastProbeToolUseId }),
    ...(o?.lastProbeAt !== void 0 && { lastProbeAt: o.lastProbeAt }),
    ...(o?.lastCapsReadAt !== void 0 && { lastCapsReadAt: o.lastCapsReadAt }),
    ...(o?.lastProbeLandedAt !== void 0 && { lastProbeLandedAt: o.lastProbeLandedAt }),
    ...(o?.lastCapsLandedAt !== void 0 && { lastCapsLandedAt: o.lastCapsLandedAt }),
    ...(o?.lastProbeIssuedAt !== void 0 && { lastProbeIssuedAt: o.lastProbeIssuedAt }),
    ...(o?.lastCapsIssuedAt !== void 0 && { lastCapsIssuedAt: o.lastCapsIssuedAt }),
    ...(o?.storedContract !== void 0 && { storedContract: o.storedContract }),
    ...(o?.typeLock !== void 0 && { typeLock: o.typeLock }),
    ...(o?.lastPinReadToolUseId && { lastPinReadToolUseId: o.lastPinReadToolUseId }),
    ...t,
  });
}
function bVe(e, t, r) {
  let { bySlug: o } = de().shareStatus,
    a = o.get(e) ?? { mode: "owner", isSharedLive: false },
    { capabilitiesUnknown: d, lastCapsReadAt: u, lastCapsLandedAt: l, lastCapsIssuedAt: h, ...b } = a,
    x = r?.source,
    w =
      x === void 0
        ? {
            ...(u !== void 0 && { lastCapsReadAt: u }),
            ...(l !== void 0 && { lastCapsLandedAt: l }),
            ...(h !== void 0 && { lastCapsIssuedAt: h }),
          }
        : x === "published"
          ? { lastCapsIssuedAt: Date.now() }
          : {
              ...((x.readAt ?? u) !== void 0 && { lastCapsReadAt: x.readAt ?? u }),
              lastCapsLandedAt: x.readAt ?? Date.now(),
              lastCapsIssuedAt: x.issuedAt,
            };
  o.set(e, {
    ...b,
    capabilities: t,
    ...(r?.unknown && { capabilitiesUnknown: true }),
    ...(r?.toolUseId && { lastCapsReadToolUseId: r.toolUseId }),
    ...w,
    ...(r?.storedContract !== void 0 && {
      storedContract: r.storedContract,
      ...(r.typeLock !== void 0 && { typeLock: r.typeLock }),
      ...(r?.toolUseId && { lastPinReadToolUseId: r.toolUseId }),
    }),
  });
}
function sOe(e, t) {
  de().shareStatus.filePathToSlug.set(e, t);
}
function U9(e) {
  de().shareStatus.filePathToSlug.delete(e);
}
function Lgt(e) {
  let t = de().shareStatus.filePathToSlug;
  for (let r of [...t.keys()]) if (!e.has(r)) t.delete(r);
}
function $8n(e, t) {
  let { bySlug: r } = de().shareStatus,
    o = r.get(e) ?? t,
    { lastProbeAt: a, lastProbeLandedAt: d, ...u } = o;
  r.set(e, { ...u, ...P(t, o), lastProbeIssuedAt: Date.now() });
}
function P(e, t) {
  return { mode: e.mode === "owner" ? t.mode : e.mode, isSharedLive: e.isSharedLive || t.isSharedLive };
}
function $fn(e, t, r) {
  let o = t !== void 0 && e < t,
    a = o || e === t || (r !== void 0 && e <= r);
  return { olderIssued: o, overlapped: a, joinedIssuedAt: Math.max(e, t ?? e) };
}
function Ufn(e, t, r) {
  let o = r.consumedByCheck && r.toolUseId !== void 0 ? { lastProbeToolUseId: r.toolUseId } : {},
    a = ine(r.issuedAt) ? { err: "the signed-in account changed while probing", errorCode: D } : t,
    d = qr(e),
    { olderIssued: u, overlapped: l, joinedIssuedAt: h } = $fn(r.issuedAt, d?.lastProbeIssuedAt, d?.lastProbeLandedAt),
    b = Date.now();
  if (a.err !== null) {
    if ((n(`[artifact] ${r.debugLabel} share probe failed: ${a.err}`), u && d !== void 0)) {
      if (o.lastProbeToolUseId !== void 0) Pwe(e, { ...d, ...o });
      if (r.consumedByCheck) C(d);
      return;
    }
    if (r.consumedByCheck) p("artifact_share_status", a.errorCode);
    Pwe(e, {
      mode: d?.mode ?? "owner",
      isSharedLive: d?.isSharedLive ?? false,
      probeFailed: true,
      probeErrorCode: a.errorCode,
      ...o,
      lastProbeAt: b,
      lastProbeLandedAt: b,
      lastProbeIssuedAt: r.issuedAt,
    });
    return;
  }
  let x = TVe(a.mode, a.shared),
    w = typeof a.title === "string" ? { title: a.title } : {},
    _ =
      !l || d === void 0
        ? {
            ...x,
            role: E(a.role),
            cowritten: d?.cowritten === true || a.cowritten === true,
            ...w,
            ...o,
            lastProbeAt: b,
            lastProbeLandedAt: b,
            lastProbeIssuedAt: r.issuedAt,
          }
        : {
            ...(u ? { ...d, ...P(d, x) } : { ...P(x, d), role: E(a.role), ...w }),
            cowritten: d.cowritten === true || a.cowritten === true,
            ...(d.probeFailed && { probeFailed: true }),
            ...o,
            ...(!u && { lastProbeAt: b }),
            lastProbeLandedAt: b,
            lastProbeIssuedAt: h,
          };
  if (r.consumedByCheck) C(_);
  Pwe(e, _);
}
function Mgt(e, t) {
  if (typeof t !== "string" || !Uwe.test(t)) return;
  let r = qr(e);
  Pwe(e, {
    mode: r?.mode ?? "owner",
    isSharedLive: r?.isSharedLive ?? false,
    ...(r?.probeFailed && { probeFailed: true }),
    artifactKind: t,
  });
}
function U8n(e, t) {
  if (t !== true) return;
  let r = qr(e);
  if (r?.cowritten === true) return;
  Pwe(e, {
    mode: r?.mode ?? "owner",
    isSharedLive: r?.isSharedLive ?? false,
    ...(r?.probeFailed && { probeFailed: true }),
    cowritten: true,
  });
}
function wVe(e, t, r = Date.now()) {
  if (t === void 0 || ine(r)) return;
  let o = qr(e);
  if (o?.livePathsIssuedAt !== void 0 && r < o.livePathsIssuedAt) return;
  Pwe(e, {
    mode: o?.mode ?? "owner",
    isSharedLive: o?.isSharedLive ?? false,
    ...(o?.probeFailed && { probeFailed: true }),
    livePaths: te(t.map((a) => a.path)),
    livePathsIssuedAt: r,
  });
}
function Bfn(e) {
  let t = qr(e);
  if (t?.livePaths !== void 0) return t.livePaths;
  return t?.artifactKind === FD ? [jgt] : [];
}
function C(e) {
  if (e.probeFailed) p("artifact_share_status", "probe_failed");
  else if (e.mode === "unknown") g("artifact_share_status", "unknown_share_mode");
  else if (e.role === "unknown") g("artifact_share_status", "unknown_share_role");
  else y("artifact_share_status");
}
function TVe(e, t) {
  if (e === void 0 || e === "" || e === "owner") return { mode: "owner", isSharedLive: false };
  if (e === "users" || e === "org") return { mode: e, isSharedLive: (t ?? "") === "" };
  if (e === "public") return { mode: "public", isSharedLive: true };
  if (e === "agent_scoped") return { mode: "agent_scoped", isSharedLive: (t ?? "") === "" };
  return { mode: "unknown", isSharedLive: true };
}
function jfn(e) {
  if (e === "live") return "viewers see updates immediately";
  if (e === "pinned-current")
    return "viewers currently see this version, but will not see future publishes until the share pin is moved";
  return "viewers see a pinned earlier version, not this live version";
}
function wI(e) {
  if (e === "org") return "your organization";
  if (e === "users") return "specific users";
  if (e === "public") return "anyone with the link";
  if (e === "agent_scoped") return "everyone with access to the agent that created it";
  return "others (unrecognized share mode \u2014 treating as shared)";
}
function E(e) {
  if (e === void 0 || e === "") return;
  if (e === "owner" || e === "writer" || e === "reader" || e === "commenter" || e === "viewer") return e;
  return "unknown";
}
function Zc(e) {
  if (e === void 0) return "";
  if (e.probeFailed || e.role === void 0 || e.role === "unknown") return " (ownership unconfirmed)";
  return e.role === "owner" ? "" : " (someone else's artifact)";
}
var EVe = "boot_org_mismatch",
  D = "account_changed";
function ine(e) {
  let { accountBoundaryAt: t } = de().shareStatus;
  return t !== void 0 && e <= t;
}
function B8n(e) {
  return e?.probeFailed === true && e.probeErrorCode === EVe;
}
function B9(e) {
  let t = Zc(e);
  if (t === "") return "";
  return t === " (someone else's artifact)" ? " [ownership: someone else's]" : " [ownership: unconfirmed]";
}
function Fh(e) {
  if (e?.probeFailed) return " [shared: unknown]";
  return e !== void 0 && e.mode !== "owner" ? ` [shared: ${e.mode}]` : "";
}
function sne(e) {
  if (e?.probeFailed) return "share status unconfirmed";
  return e !== void 0 && e.mode !== "owner" ? `visible to ${wI(e.mode)}` : "visible to viewers of the artifact";
}
function vz(e) {
  if (e?.probeFailed) return " (share status unconfirmed)";
  return e !== void 0 && e.mode !== "owner" ? ` (shared with ${wI(e.mode)})` : "";
}
function Rz(e) {
  return e !== void 0 && !e.probeFailed && e.role === "owner";
}
function Dwe(e) {
  return e !== void 0 && !e.probeFailed && e.role !== void 0 && e.role !== "unknown" && e.role !== "owner";
}
function j8n(e) {
  return Dwe(e)
    ? "Claude wants to read this artifact's database \u2014 someone else's artifact, written by its collaborators. Covers this artifact for the rest of the conversation."
    : "Claude wants to read this artifact's database \u2014 written by its collaborators, and ownership couldn't be confirmed. Covers this artifact for the rest of the conversation.";
}
function Ngt(e, t = "their database", r = "write into") {
  if (e === void 0) return "";
  if (e.probeFailed || e.role === void 0 || e.role === "unknown")
    return " Couldn't confirm whether this artifact is yours.";
  return e.role === "owner" ? "" : ` This artifact belongs to someone else \u2014 approving will ${r} ${t}.`;
}
function yM(e) {
  de().shareStatus.pendingNoticeSlugs.add(e);
}
function Ck(e) {
  return de().shareStatus.pendingNoticeSlugs.has(e);
}
function IF(e) {
  de().shareStatus.pendingNoticeSlugs.delete(e);
}
import { STATUS_CODES as U } from "http";
var AVe = 1e5,
  Fgt = xz - 2000;
function Owe(e) {
  return U[e] ?? "Unknown Status";
}
var A = 8192,
  B = 512,
  I = 200,
  N = 120,
  z = m(() =>
    f({
      message: i()
        .optional()
        .catch(void 0),
      error: dt([i(), f({ message: i() })])
        .optional()
        .catch(void 0),
      detail: i()
        .optional()
        .catch(void 0),
    }),
  );
function g6t(e, t, r) {
  let o = H(e);
  return { mediaType: o, ...K(o, t, r), proxyError: M(e, r), requestId: j(e, r) };
}
function M(e, t) {
  let r = e?.["x-proxy-error"];
  return typeof r === "string" ? v(k(r), t, N) : void 0;
}
function j(e, t) {
  let r = e?.["x-request-id"];
  return typeof r === "string" && /^[A-Za-z0-9._:-]{1,128}$/.test(r) && t(r) === r ? r : void 0;
}
function H(e) {
  let t = e?.["content-type"];
  if (typeof t !== "string") return "";
  let r = t.indexOf(";");
  return (r === -1 ? t : t.slice(0, r))
    .replace(/^[\t\n\f\r ]+|[\t\n\f\r ]+$/g, "")
    .replace(/[A-Z]/g, (o) => o.toLowerCase());
}
var S = { reason: void 0, code: void 0 };
function K(e, t, r) {
  let o = e === "application/json" || e.endsWith("+json"),
    a = typeof t === "string" ? k(t) : W(t);
  if (a !== void 0) {
    let { text: d, truncated: u } = a;
    if (d.includes("\uFFFD") || d.includes("\x00")) return S;
    if (o || (e === "" && d.trimStart().startsWith("{"))) return u ? S : R(Ut(d, false), r);
    return { reason: e === "text/plain" ? v(a, r, I) : void 0, code: void 0 };
  }
  if (t !== null && typeof t === "object") return R(t, r);
  return S;
}
function R(e, t) {
  let r = z().safeParse(e);
  if (!r.success) return S;
  let { message: o, error: a, detail: d } = r.data,
    u = typeof a === "string" ? a : a?.message,
    l = [o, u, d].find((h) => h !== void 0 && h.trim() !== "");
  return {
    reason: l === void 0 ? void 0 : v(k(l), t, I),
    code: typeof a === "string" && /^[a-z0-9_]{1,64}$/.test(a) ? a : void 0,
  };
}
function v({ text: e, truncated: t }, r, o) {
  let a = r(e),
    d = t ? ce(a, a.length - B) : a,
    u = or(d, o);
  return u === "" ? void 0 : u;
}
function k(e) {
  return { text: ce(e, A), truncated: e.length > A };
}
function W(e) {
  let t;
  if (e instanceof ArrayBuffer) t = new Uint8Array(e);
  else if (ArrayBuffer.isView(e)) t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  else return;
  let r = t.byteLength > A,
    o = r ? X(t, A) : t.byteLength;
  return { text: new TextDecoder("utf-8").decode(t.subarray(0, o)), truncated: r };
}
function X(e, t) {
  let r = t - 1,
    o = 0;
  while (r >= 0 && o < 3 && ((e[r] ?? 0) & 192) === 128) r--, o++;
  if (r < 0) return t;
  let a = e[r] ?? 0,
    d = a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
  return o + 1 < d ? r : t;
}
function D2(e, t) {
  return e === 403 && (t?.["x-proxy-error"] === "blocked-by-allowlist" || t?.["x-deny-reason"] === "host_not_allowed");
}
function $gt(e) {
  let t = CO(e);
  return t !== void 0 && D2(t.connectStatus, t.headers);
}
function Wfn(e, t) {
  if (e !== 403) return;
  if (t.code !== "content_scan_blocked") return;
  return t.reason?.endsWith("(fail closed)") ? "content_scan_transient" : "content_scan_permanent";
}
function Ugt({ status: e, headers: t, data: r, redact: o, label: a }) {
  if (e !== 403) return;
  let d = g6t(t, r, o),
    u = Wfn(e, d);
  if (u !== void 0) n(`${a}: sandbox proxy denied, ${u} (${d.reason ?? "no reason"})`);
  return u;
}
var Lwe = {
  content_scan_transient:
    "artifact content fetch blocked: the sandbox proxy's content scan was unavailable (HTTP 403). This is transient; retry.",
  content_scan_permanent:
    "artifact content fetch blocked: the sandbox proxy's content scan refused this content (HTTP 403); retrying will not help.",
  proxy_denied: "artifact content fetch blocked by the sandbox proxy's policy (HTTP 403); retrying will not help.",
};
function h6t(e) {
  return e !== void 0 && e >= 400 && e < 500 && e !== 408 && e !== 429;
}
function L(e, t, r) {
  let o = e?.[t];
  return typeof o === "string" && o.length <= 64 && r.test(o) ? o : void 0;
}
function Mwe(e) {
  return L(e, "x-proxy-error", /^[a-z0-9_-]+$/);
}
function j9(e) {
  return L(e, "x-deny-reason", /^[a-z0-9_]+$/);
}
export {
  m6t,
  _ue,
  Qb,
  yVe,
  P2,
  qr,
  Ogt,
  SVe,
  Pwe,
  bVe,
  sOe,
  U9,
  Lgt,
  $8n,
  $fn,
  Ufn,
  Mgt,
  U8n,
  wVe,
  Bfn,
  TVe,
  jfn,
  wI,
  Zc,
  EVe,
  ine,
  B8n,
  B9,
  Fh,
  sne,
  vz,
  Rz,
  Dwe,
  j8n,
  Ngt,
  yM,
  Ck,
  IF,
  AVe,
  Fgt,
  Owe,
  g6t,
  D2,
  $gt,
  Wfn,
  Ugt,
  Lwe,
  h6t,
  Mwe,
  j9,
};
