// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { R, E, X } from "/$bunfs/root/chunk-ypdw393e.js";
import { b, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { k, rs, ce } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { a, mb } from "/$bunfs/root/chunk-fec4384a.js";
import {
  Vn,
  t7e,
  QEe,
  S$,
  n7e,
  btr,
  wtr,
  ybt,
  VMe,
  mf,
  xH,
  r7e,
  AY,
  tl,
  Tbt,
  P3,
  tS,
  Htr,
  vbn,
  xtr,
  U3t,
  Rre,
  G3t,
  Abt,
  I,
  OH,
} from "/$bunfs/root/chunk-8tgj5dp2.js";
import { g } from "/$bunfs/root/chunk-ca80fke8.js";
import { DT } from "/$bunfs/root/chunk-v7yhn7cf.js";
import { ms, Gg, wAe, Bm, r0 } from "/$bunfs/root/chunk-tzhtxm67.js";
import { LY } from "/$bunfs/root/chunk-mznd09c6.js";
import { li } from "/$bunfs/root/chunk-a6xhjq7b.js";
import { Uz } from "/$bunfs/root/chunk-3dh32z3c.js";
import { GD } from "/$bunfs/root/chunk-n8ecp4gs.js";
import { v, f } from "/$bunfs/root/chunk-saay52v7.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { te, lu } from "/$bunfs/root/chunk-wag5ye9w.js";
function G(e) {
  if (D() === "windows") return null;
  let t = Y(e);
  if (t < 0) return null;
  try {
    return Bun.ant.getPeerUid(t);
  } catch (r) {
    return n(`[daemon] peer uid lookup failed: ${r instanceof Error ? r.message : String(r)}`, { level: "warn" }), null;
  }
}
function BXn(e, t = G) {
  let r = process.getuid?.();
  if (r == null) return null;
  let i = t(e);
  if (i == null) return null;
  if (i === r) return null;
  let s = `permission denied: connecting uid ${i} != daemon uid ${r} (retry without sudo, or as the daemon owner)`;
  return n(`[daemon] rejecting control connection: ${s}`, { level: "error" }), s;
}
function Pht(e) {
  if (D() === "windows") return;
  let t = Y(e);
  try {
    let r = t < 0 ? null : Bun.ant.getPeerPid(t);
    if (r !== null && r > 0) return r;
    n(`[peer-cred] peer pid unavailable (fd=${t}, got=${r})`, { level: "warn" });
    return;
  } catch (r) {
    n(`[peer-cred] peer pid lookup failed: ${r instanceof Error ? r.message : String(r)}`, { level: "warn" });
    return;
  }
}
function Y(e) {
  let t = e._handle;
  return typeof t?.fd === "number" ? t.fd : -1;
}
import { lstat as Ce, readdir as Me, unlink as ue } from "fs/promises";
import { connect as pe } from "net";
import { basename as Ue, dirname as ae, join as He } from "path";
var n5e = 1048576;
import { randomBytes as Pe } from "crypto";
var _e = Pe(32);
function pTe(e) {
  return btr(e, _e);
}
function N(e, t, r, i, s) {
  let p = Math.max(0, r - t) / 1000;
  return Math.min(i, e + p * s);
}
function M(e) {
  return e >= 1;
}
function U(e, t, r, i, s = () => true) {
  let p = e.get(t);
  if (p !== void 0) return e.delete(t), e.set(t, p), p;
  while (e.size >= Math.max(1, r)) {
    let d;
    for (let [u, c] of e)
      if (s(c)) {
        d = u;
        break;
      }
    if (((d ??= e.keys().next().value), d === void 0)) break;
    e.delete(d);
  }
  let o = i();
  return e.set(t, o), o;
}
var Dht = {
  bucketCapacity: 30,
  refillPerSecond: 0.5,
  dedupWindowMs: 30000,
  maxSelfHops: 10,
  maxChainLength: 28,
  maxTrackedSenders: 256,
};
function we(e, t) {
  if (!e || t.size === 0) return 0;
  let r = 0;
  for (let i of e) if (t.has(i)) r++;
  return r;
}
function Zmn(e = {}, t) {
  let r = { ...Dht, now: () => Date.now(), ...e },
    i = () => (t ? { ...r, ...t() } : r),
    s = new Map();
  function p(u, c) {
    return U(s, u, c.maxTrackedSenders, () => ({
      tokens: c.bucketCapacity,
      lastRefill: c.now(),
      lastBody: void 0,
      lastBodyAt: 0,
    }));
  }
  function o(u, c) {
    let _ = i();
    if (u !== void 0 && u.length > _.maxChainLength) return { admitted: false, reason: "hop-runaway" };
    if (we(u, c) >= _.maxSelfHops) return { admitted: false, reason: "hop-loop" };
    return;
  }
  function d(u) {
    let c = i(),
      _ = c.now(),
      A = o(u.hopChain, u.ownTokens);
    if (A) return A;
    let w = p(u.senderKey, c);
    if (w.lastBody !== void 0 && w.lastBody === u.body && _ - w.lastBodyAt < c.dedupWindowMs)
      return { admitted: false, reason: "duplicate" };
    if (
      ((w.tokens = N(w.tokens, w.lastRefill, _, c.bucketCapacity, c.refillPerSecond)), (w.lastRefill = _), !M(w.tokens))
    )
      return { admitted: false, reason: "rate-limited" };
    return (w.tokens -= 1), (w.lastBody = u.body), (w.lastBodyAt = _), { admitted: true };
  }
  return { admit: d, checkHopChain: o, trackedSenderCount: () => s.size };
}
var he = { "rate-limited": true, duplicate: true, "hop-loop": true, "hop-runaway": true, "queue-full": true };
function ke(e) {
  return typeof e === "string" && Object.hasOwn(he, e);
}
function jXn(e) {
  return ke(e) ? e : void 0;
}
var egn = 256,
  H = 60000,
  J = 256,
  Re = 20;
function tgn(e) {
  li().ingress.ownUdsHopToken = e === void 0 ? void 0 : pTe(e);
}
function r5e(e) {
  li().ingress.ownBridgePeerAddressResolver = e;
}
function ngn() {
  let { ownUdsHopToken: e, ownBridgePeerAddressResolver: t } = li().ingress,
    r = new Set();
  if (e) r.add(e);
  let i = t?.();
  if (i) r.add(pTe(i));
  let s = Uz();
  if (s) r.add(pTe(QEe(s)));
  return r;
}
var xe = {
  "rate-limited": "sender exceeded the peer message rate limit",
  duplicate: "identical to the previous message from this sender",
  "hop-loop": "message has already passed through this session (a peer messaging loop)",
  "hop-runaway": "peer relay chain is too long (runaway forwarding)",
  "queue-full": "this session has too many undelivered peer messages queued",
};
function j(e) {
  return { from: wtr(e.from) ? e.from : "(unrenderable sender address)", name: e.name ? t7e(e.name) : "" };
}
function WXn(e) {
  let { from: t } = j(e),
    { name: r } = j(e),
    i = r ? `@${r} (${t})` : t,
    s = e.suppressed > 0 ? ` (+${e.suppressed} similar ${k(e.suppressed, "drop")} suppressed)` : "";
  return `Dropped a peer message from ${i}: ${xe[e.reason]}.${s}`;
}
var Ee = 500,
  Ie = 5000,
  Ae = 40;
function K(e, t) {
  if (e.timer !== void 0) clearTimeout(e.timer), (e.timer = void 0);
  let { pending: r, pendingIds: i, pendingSend: s } = e;
  if (((e.pending = 0), (e.pendingIds = []), (e.pendingSend = void 0), r > 0 && s && t())) return s(i);
}
function rgn({ trailMs: e = Ie } = {}) {
  let t = new Map(),
    r = 0,
    i = 0;
  function s(l = Date.now()) {
    if (l - r >= H) (r = l), (i = 0);
    if (i >= Ae) return false;
    return i++, true;
  }
  function p(l, P, y, h = Date.now()) {
    let S = t.get(l);
    if (S === void 0)
      S = { lastImmediateAt: Number.NEGATIVE_INFINITY, pendingIds: [], pending: 0, timer: void 0, pendingSend: void 0 };
    if ((t.delete(l), t.set(l, S), t.size > J)) {
      let x = t.keys().next().value;
      if (x !== void 0 && x !== l) {
        let T = t.get(x);
        if ((t.delete(x), T !== void 0)) K(T, () => s(h));
      }
    }
    if (h - S.lastImmediateAt >= H && S.pending === 0) {
      if (((S.lastImmediateAt = h), s(h))) y([]);
      return;
    }
    if ((S.pending++, P !== void 0 && S.pendingIds.length < egn)) S.pendingIds.push(P);
    if (((S.pendingSend = y), S.timer === void 0)) (S.timer = setTimeout(K, e, S, s)), S.timer.unref?.();
  }
  let o = new Map(),
    d = 0,
    u = 0,
    c = 0;
  function _(l, P = Date.now()) {
    let y = j(l);
    n(`[peer-guard] drop ${l.reason} from ${y.from}${y.name ? ` (@${y.name})` : ""}`);
    let h = `${l.from}\x00${l.reason}`,
      S = o.get(h);
    if (S && P - S.lastReportAt < H) {
      S.suppressed++;
      return;
    }
    if (P - d >= H) (d = P), (u = 0);
    if (u >= Re) {
      c++;
      return;
    }
    u++;
    let x = (S?.suppressed ?? 0) + c;
    if (((c = 0), o.delete(h), o.set(h, { lastReportAt: P, suppressed: 0 }), o.size > J)) {
      let q = o.keys().next().value;
      if (q !== void 0) o.delete(q);
    }
    let T = { ...l, suppressed: x };
    n(
      `[peer-guard] Dropped peer message from ${y.from}${y.name ? ` (@${y.name})` : ""}: ${l.reason}${x > 0 ? ` (+${x} suppressed)` : ""}`,
      { level: "warn" },
    ),
      g("peer_loop_guard", l.reason),
      li().ingress.messageDropped.emit(T);
  }
  async function A(l = Ee) {
    let P = [];
    for (let y of t.values())
      if (y.pending > 0) P.push(K(y, s));
      else if (y.timer !== void 0) clearTimeout(y.timer), (y.timer = void 0);
    if (P.length === 0) return;
    await Promise.race([Promise.allSettled(P), ne(l, void 0, { unref: true })]);
  }
  function w() {
    for (let l of t.values()) if (l.timer !== void 0) clearTimeout(l.timer);
    t.clear();
  }
  return { report: _, noteDropForReceipt: p, flushPendingReceipts: A, dispose: w };
}
var ve = 50,
  W = { ...Dht, maxQueuedPeerMessages: ve },
  L = W,
  De = m(() =>
    f({
      bucketCapacity: v().min(5).max(500).catch(L.bucketCapacity),
      refillPerSecond: v().min(0.05).max(50).catch(L.refillPerSecond),
      dedupWindowMs: v().int().min(0).max(600000).catch(L.dedupWindowMs),
      maxSelfHops: v().int().min(3).max(n7e).catch(L.maxSelfHops),
      maxChainLength: v()
        .int()
        .min(8)
        .max(n7e - 1)
        .catch(L.maxChainLength),
      maxTrackedSenders: v().int().min(16).max(1e5).catch(L.maxTrackedSenders),
      maxQueuedPeerMessages: v().int().min(10).max(5000).catch(L.maxQueuedPeerMessages),
    }),
  ),
  Le = 300000;
function o5e() {
  let e = OH("tengu_harbor_kite_limits", W, Le),
    t = De().safeParse(e);
  if (!t.success)
    return n("[peer-guard] tengu_harbor_kite_limits is not an object; using defaults", { level: "warn" }), W;
  return t.data;
}
function Q(e, t = Date.now) {
  let r = new Map();
  function i(d, u) {
    let { bucketCapacity: c, refillPerSecond: _, maxTrackedSenders: A } = e(),
      w = false,
      l = U(
        r,
        d,
        A,
        () => ((w = true), { tokens: c, updatedAt: u, sentInBurst: 0, burstStartedAt: u }),
        (P) => N(P.tokens, P.updatedAt, u, c, _) >= c,
      );
    if (!w) {
      (l.tokens = N(l.tokens, l.updatedAt, u, c, _)), (l.updatedAt = u);
      let P = (c / Math.max(_, 0.000000001)) * 1000;
      if (l.tokens >= c || u - l.burstStartedAt > P) (l.sentInBurst = 0), (l.burstStartedAt = u);
    }
    return l;
  }
  function s(d) {
    let u = i(d, t());
    if (!M(u.tokens)) return { ok: false, sentInBurst: u.sentInBurst };
    (u.tokens -= 1), (u.sentInBurst += 1);
    let c = u,
      _ = false;
    return {
      ok: true,
      refund: () => {
        if (_) return;
        (_ = true),
          (c.tokens = Math.min(e().bucketCapacity, c.tokens + 1)),
          (c.sentInBurst = Math.max(0, c.sentInBurst - 1));
      },
    };
  }
  function p(d) {
    let u = i(d, t());
    (u.tokens = Math.min(e().bucketCapacity, u.tokens + 1)), (u.sentInBurst = Math.max(0, u.sentInBurst - 1));
  }
  function o(d) {
    let u = i(d, t());
    (u.tokens = Math.max(0, u.tokens - 1)), (u.sentInBurst += 1);
  }
  return { reserve: s, credit: p, debit: o };
}
var Oe = /[0-9a-f]{32,}/gi;
function Z(e) {
  return e.replace(Oe, (t) => `<hex:${Vn(t)}>`);
}
function Fu(e, t = 120) {
  if (/token/i.test(e)) return "(withheld)";
  return rs(Z(e), t);
}
function II(e) {
  if (/token/i.test(e)) return "(redacted: fragment may carry an auth token)";
  return rs(Z(e), 200);
}
var ee = "no_live_inbox",
  re = "ENOINBOX",
  oe = "message_too_large";
function ie(e, t) {
  return new R(
    `Message too large for cross-session delivery: the serialized message is ${e.toLocaleString("en-US")} characters and the limit is ${t.toLocaleString("en-US")}. Shorten the message text \u2014 put bulk content in a file the recipient can read rather than in the message \u2014 or split it into smaller messages.`,
    "cross-session message exceeds the line cap",
    oe,
  );
}
function fTe(e) {
  return e instanceof R && e.errorClass === oe;
}
var se = "sender_paced";
function de(e) {
  return new R(
    `Too many messages to this session just now: ${e} were sent recently and more would be dropped by its rate limit, so this one was not sent. Batch what remains into one message, or wait a little before sending more.`,
    "cross-session sends to one target outpaced its inbox rate limit",
    se,
  );
}
function mTe(e) {
  return e instanceof R && e.errorClass === se;
}
function J6t(e) {
  let t = E(e);
  return t === "ENOENT" || t === "ECONNREFUSED" || (e instanceof R && e.errorClass === ee);
}
class B extends R {
  kind;
  constructor(e, t) {
    super(t, "no live inbox registered for the target pipe", ee);
    (this.name = "NoLiveInboxError"), (this.kind = e);
  }
}
function Q6t(e) {
  return e instanceof B && e.kind === "unusable";
}
function $z(e) {
  if (Q6t(e)) return "busy";
  if (J6t(e)) return "gone";
  let t = E(e);
  return t === "EBUSY" || t === "EAGAIN" ? "busy" : "other";
}
function gTe(e) {
  return ` \u2014 the peer process may have restarted, so this socket path is stale. Call ${e} to get the current address.`;
}
var ogn = " \u2014 the peer is alive but its pipe is momentarily busy. Retry the same address shortly.",
  Fe =
    " \u2014 this machine's session registry could not be read just now (a transient local condition). Retry the same address shortly.";
function Oht(e) {
  return Q6t(e) ? Fe : ogn;
}
class HM extends Error {
  refusal;
  constructor(e, t) {
    super(t);
    (this.name = "UdsSendRefusedError"), (this.refusal = e);
  }
}
function qD(e) {
  if (e instanceof HM || J6t(e) || mTe(e) || fTe(e)) return true;
  let t = E(e);
  return t === "EBUSY" || t === "EAGAIN" || t === "EACCES";
}
var Be = ["interactive", "bg", "daemon", "daemon-worker"];
function $e(e) {
  return Be.includes(e) ? e : void 0;
}
var Ge = ["busy", "shell", "idle", "waiting"];
function Ke(e) {
  return Ge.includes(e) ? e : void 0;
}
function je(e) {
  if (typeof e !== "object" || e === null) return false;
  let { name: t, until: r } = e;
  return typeof t === "string" && Lht(r);
}
function We(e) {
  if (!Array.isArray(e)) return [];
  return e
    .filter(je)
    .slice(0, U3t)
    .map(({ name: t, until: r }) => ({ name: ce(t, DT), until: r }));
}
function Xe() {
  return (li().outbound.pacer ??= Q(o5e));
}
var ze = { ok: true, refund: () => {} };
function E_r() {
  if (a.CLAUDE_CODE_HARBOR_KITE_PACING_OFF) return false;
  return !I("tengu_harbor_kite_pacing_off", false);
}
function ign(e) {
  fe(e, (t, r) => t.credit(r));
}
function Z6t(e) {
  fe(e, (t, r) => t.debit(r));
}
function fe(e, t) {
  let r = li().outbound.pacer;
  if (!r) return;
  let { scheme: i, target: s } = mf(e);
  if (i !== "uds") return;
  t(r, tS(s) ?? s);
}
async function i5e(e, t, r, i, s, p, o, { trackReceipts: d = true, expectPeerPid: u, expectPeerProcStart: c } = {}) {
  let _ = MF(),
    A = _ ? S$(_) : void 0,
    w = VMe(A, i, t, void 0, ybt(p, A ? pTe(A) : void 0), o),
    l = GD(),
    P = {
      ...l,
      type: "user",
      message: { role: "user", content: w },
      priority: "next",
      from: A,
      ...((s?.length ?? 0) > 0 && { file_attachments: s }),
    },
    y = le(P),
    S = (A !== void 0 || D() !== "windows") && E_r() ? Xe().reserve(tS(e) ?? e) : ze;
  if (!S.ok)
    throw (
      (n(
        `[uds-client] paced: not sending to ${Fu(e)} \u2014 ${S.sentInBurst} sent this burst; its inbox rate limit would drop more`,
      ),
      de(S.sentInBurst))
    );
  if ((n(`[uds-client] Sending ${t.length} chars to ${Fu(e)}`), d)) A_r(l.msg_id, S$(e));
  try {
    await ge(e, P, r, {
      noFollowSymlink: true,
      preflightedJson: y,
      ...(u !== void 0 && { expectPeerPid: u }),
      ...(c !== void 0 && { expectPeerProcStart: c }),
    });
  } catch (x) {
    if (qD(x)) {
      if ((S.refund(), d)) C_r(l.msg_id);
    }
    throw x;
  }
  return { msgId: l.msg_id };
}
var me = 200;
function A_r(e, t) {
  let r = li().receipts.outstandingSends;
  if (r.length >= me) r.shift();
  r.push({ msgId: e, to: t });
}
function C_r(e) {
  let t = li().receipts.outstandingSends,
    r = t.findIndex((i) => i.msgId === e);
  if (r !== -1) t.splice(r, 1);
}
function sgn(e, t) {
  if (typeof e !== "string") return;
  let { outstandingSends: r, awaitingTerminal: i } = li().receipts,
    s = r.findIndex((o) => o.msgId === e);
  if (s !== -1) {
    let [o] = r.splice(s, 1);
    if (!o) return;
    if (t === "held") {
      if (i.length >= me) i.shift();
      i.push(o);
    }
    return { destination: o.to, wasHeld: false };
  }
  let p = i.findIndex((o) => o.msgId === e);
  if (p !== -1 && t !== "held") {
    let [o] = i.splice(p, 1);
    return o ? { destination: o.to, wasHeld: true } : void 0;
  }
  return;
}
function agn(e) {
  let t = new Map();
  if (e.length === 0) return t;
  let r = new Set(e),
    { outstandingSends: i, awaitingTerminal: s } = li().receipts;
  for (let p of [i, s]) {
    let o = p === s;
    for (let d = 0; d < p.length; ) {
      let u = p[d];
      if (r.delete(u.msgId)) {
        p.splice(d, 1);
        let c = t.get(u.to) ?? { dropped: 0, wereHeld: 0 };
        if ((c.dropped++, o)) c.wereHeld++;
        t.set(u.to, c);
      } else d++;
    }
  }
  return t;
}
function t3(e, t, r = {}) {
  return POe(e, t, GD(), r).then(() => {});
}
async function POe(e, t, r = GD(), { expectPeerPid: i, expectPeerProcStart: s, storageV5: p } = {}) {
  return (
    n(`[uds-client] Sending control:${t.action} to ${Fu(e)}`),
    await ge(e, { type: "control", ...t, ...r }, p, {
      noFollowSymlink: true,
      ...(i !== void 0 && { expectPeerPid: i }),
      ...(s !== void 0 && { expectPeerProcStart: s }),
    }),
    { msgId: r.msg_id }
  );
}
var Ve = 150;
async function s5e(e) {
  let t = tS(e);
  if (t === void 0) return;
  for (let r of await F()) {
    if (!r.sock || tS(r.sock) !== t) continue;
    if (await z(r))
      return { pid: r.pid, features: r.peerFeatures, sessionId: r.sessionId, procStart: r.procStartFt ?? r.procStart };
  }
  return;
}
async function lgn(e) {
  let t = te(e),
    r = new Map();
  if (t.length === 0) return r;
  let i = P3(),
    p = (await Promise.all(t.map((d) => be(i, `${d}.json`)))).filter((d) => d !== null && Boolean(d.sock)),
    o = await Promise.all(p.map((d) => z(d)));
  return (
    p.forEach((d, u) => {
      if (o[u] && d.sock) r.set(d.pid, d.sock);
    }),
    r
  );
}
async function z(e) {
  let t = e.procStartFt ?? e.procStart;
  if (t === void 0 || Gg(e.pid)) return false;
  return (await r0(e.pid, t)) === true;
}
function le(e) {
  let t = b(e),
    r = xtr + t.length + 1;
  if (r > n5e) throw ie(r, n5e);
  return t;
}
async function qe(e) {
  let t = tS(e);
  if (t === void 0) return false;
  for (let r of await F()) {
    if (!r.sock || tS(r.sock) !== t) continue;
    if (Gg(r.pid)) continue;
    if ((r.procStartFt ?? r.procStart) !== void 0) {
      if (await z(r)) return true;
      continue;
    }
    if (ms(r.pid)) return true;
  }
  return false;
}
async function ge(
  e,
  t,
  r,
  { noFollowSymlink: i = false, expectPeerPid: s, expectPeerProcStart: p, preflightedJson: o } = {},
) {
  let d = o ?? le(t);
  if (!xH(e))
    throw new HM(
      "non-local",
      `Refusing to connect: not a usable local IPC path (remote/UNC host, or a pipe name with extra segments or a trailing dot/space): ${e}`,
    );
  let u = Tbt(),
    c = await Htr(e, r, { requireLiveOwner: u }),
    _ = c.kind === "token" ? c.token : void 0;
  if (u && c.kind !== "token") {
    if (!(c.kind === "no-key" && (await qe(e))))
      throw new B(
        c.kind,
        `No running session has registered an inbox at ${e} (${re}: ${c.kind}) \u2014 refusing to send to an unvouched pipe`,
      );
    _ = void 0;
  }
  let A = _ !== void 0 ? vbn(_) : "";
  if (i && !(D() === "windows" && AY(e) !== void 0)) {
    let l;
    try {
      l = (await Ce(e)).isSymbolicLink();
    } catch (P) {
      if (X(P)) throw P;
      throw (
        (n(`[uds-client] reply target unvettable: ${E(P) ?? "lstat failed"}`),
        new HM("unvettable", "Refusing to send: cannot vet reply target"))
      );
    }
    if (l) throw new HM("symlink", "Refusing to send: reply target is a symlink");
  }
  let w =
    A +
    d +
    `
`;
  return new Promise((l, P) => {
    let y = pe({ path: e }),
      h = false;
    y.setTimeout(5000, () => {
      (h = true), y.destroy(), P(Error(`Timed out sending to ${e}`));
    }),
      y.on("error", (S) => {
        (h = true), P(S);
      }),
      y.on("connect", () => {
        if (s !== void 0 && D() !== "windows") {
          let S = Pht(y);
          if (S === void 0) {
            (h = true),
              y.destroy(),
              P(new HM("endpoint-unverifiable", "Refusing to send: connected endpoint identity could not be read"));
            return;
          }
          if (S !== s) {
            (h = true),
              y.destroy(),
              n(`[uds-client] connected endpoint is pid ${S}, expected ${s} \u2014 refusing to write`),
              P(new HM("wrong-endpoint", "Refusing to send: connected endpoint is not the expected process"));
            return;
          }
          let x = process.getuid?.(),
            T = G(y);
          if (x !== void 0 && T === null) {
            (h = true),
              y.destroy(),
              P(new HM("endpoint-unverifiable", "Refusing to send: connected endpoint owner could not be read"));
            return;
          }
          if (x !== void 0 && T !== x) {
            (h = true),
              y.destroy(),
              n(`[uds-client] connected endpoint is owned by uid ${T}, not ours \u2014 refusing to write`),
              P(new HM("wrong-endpoint", "Refusing to send: connected endpoint is not owned by this user"));
            return;
          }
          if (p !== void 0 && wAe(S) !== p) {
            (h = true),
              y.destroy(),
              n(
                `[uds-client] connected endpoint pid ${S} is not the process that wrote to us (start token differs \u2014 recycled pid) \u2014 refusing to write`,
              ),
              P(
                new HM(
                  "wrong-endpoint",
                  "Refusing to send: connected endpoint is a different process with the expected pid",
                ),
              );
            return;
          }
        }
        if ((y.write(w), D() === "macos"))
          setTimeout(
            (S) => {
              if (!S.destroyed) S.end();
            },
            Ve,
            y,
          );
        else y.end();
      }),
      y.on("close", () => {
        if (!h) n(`[uds-client] Sent to ${Fu(e)}`);
        l();
      });
  });
}
function Se(e) {
  return new Promise((t) => {
    if (!xH(e)) {
      t(false);
      return;
    }
    let r = pe({ path: e }),
      i = (s) => {
        r.destroy(), t(s);
      };
    r.on("connect", () => i(true)), r.on("error", (s) => i(E(s) === "EBUSY")), r.setTimeout(250, () => i(false));
  });
}
var v_r = 4000000000000000;
function Lht(e) {
  return typeof e === "number" && Number.isFinite(e) && e >= 0 && e <= v_r;
}
function C(e) {
  return Lht(e) ? e : void 0;
}
class Mht extends Error {
  code;
  constructor(e) {
    super("session records directory unreadable");
    this.code = e;
    this.name = "SessionRecordsUnreadableError";
  }
}
async function F(e) {
  let t = P3(),
    r;
  try {
    r = await Me(t);
  } catch (s) {
    if (e?.rejectUnreadable && !X(s)) throw new Mht(E(s));
    return [];
  }
  return (await Promise.all(r.filter((s) => /^\d+\.json$/.test(s)).map((s) => be(t, s)))).filter((s) => s !== null);
}
async function be(e, t) {
  try {
    let r = t.replace(/\.json$/, ""),
      i = parseInt(r, 10);
    if (isNaN(i)) return null;
    let s = He(e, t);
    if (String(i) !== r) return ue(s).catch(() => {}), null;
    let p = await tl(s, 262144);
    if (p === null) return null;
    let o = V(p);
    return {
      sock: typeof o.messagingSocketPath === "string" ? o.messagingSocketPath : "",
      cwd: typeof o.cwd === "string" ? o.cwd : "?",
      startedAt: C(o.startedAt) ?? 0,
      ...(C(o.nameSince) !== void 0 && { nameSince: C(o.nameSince) }),
      procStart: typeof o.procStart === "string" ? o.procStart : void 0,
      ...(typeof o.procStartFt === "string" && { procStartFt: o.procStartFt }),
      name: typeof o.name === "string" ? o.name : void 0,
      nameSource:
        o.nameSource === "user" ||
        o.nameSource === "peer" ||
        o.nameSource === "derived" ||
        o.nameSource === "collision" ||
        o.nameSource === "auto" ||
        o.nameSource === "hook"
          ? o.nameSource
          : void 0,
      formerNames: We(o.formerNames),
      kind: $e(o.kind),
      sessionId: typeof o.sessionId === "string" ? o.sessionId : void 0,
      jobId: typeof o.jobId === "string" ? o.jobId : void 0,
      parkedJobId: typeof o.parkedJobId === "string" ? o.parkedJobId : void 0,
      spare: o.spare === true,
      bridgeSessionId: typeof o.bridgeSessionId === "string" ? o.bridgeSessionId : void 0,
      logPath: typeof o.logPath === "string" ? o.logPath : void 0,
      status: Ke(o.status),
      waitingFor: typeof o.waitingFor === "string" ? o.waitingFor : void 0,
      updatedAt: C(o.updatedAt),
      statusUpdatedAt: C(o.statusUpdatedAt),
      entrypoint: typeof o.entrypoint === "string" ? o.entrypoint : void 0,
      ...(typeof o.pidDomain === "string" && { pidDomain: o.pidDomain }),
      agent: typeof o.agent === "string" ? o.agent : void 0,
      state: typeof o.state === "string" ? o.state : void 0,
      detail: typeof o.detail === "string" ? o.detail : void 0,
      tempo: o.tempo === "active" || o.tempo === "idle" || o.tempo === "blocked" ? o.tempo : void 0,
      needs: typeof o.needs === "string" ? o.needs : void 0,
      peerProtocol: typeof o.peerProtocol === "number" ? o.peerProtocol : void 0,
      ...(Array.isArray(o.peerFeatures) && { peerFeatures: Ye(o.peerFeatures) }),
      ...{},
      tmux: typeof o.tmux === "string" ? o.tmux : void 0,
      pid: i,
      file: s,
    };
  } catch {
    return null;
  }
}
async function a5e() {
  return (await F({ rejectUnreadable: true })).map(({ file: e, ...t }) => t);
}
function ye(e, t, r, i) {
  if (O() && i !== void 0) {
    i.delete(Te.session(Ue(e)))
      .then((s) => (s.ok && s.value.existed ? G3t(ae(e), t, r, i) : void 0))
      .catch(() => {});
    return;
  }
  ue(e)
    .then(() => G3t(ae(e), t, r, i))
    .catch(() => {});
}
async function LF(e) {
  let t = await F(),
    r = t.map((d) => ms(d.pid)),
    i = await Promise.all(t.map((d, u) => r[u] && Bm(d.pid, d.procStartFt ?? d.procStart))),
    s = await Rre(),
    p = s ? await LY() : "",
    o = [];
  for (let d = 0; d < t.length; d++) {
    let { file: u, ...c } = t[d];
    if (i[d]) o.push(c);
    else if (s && Abt(c, p) && Gg(c.pid)) ye(u, c.pid, p, e);
  }
  return o;
}
function MF() {
  return mb.CLAUDE_CODE_MESSAGING_SOCKET;
}
async function cgn(e) {
  let t = MF(),
    r = (await F({ rejectUnreadable: true })).filter((d) => d.sock && !(t && r7e(d.sock, t)) && !d.spare),
    i = await Promise.all(r.map((d) => Se(d.sock))),
    s = await Rre(),
    p = s ? await LY() : "",
    o = [];
  for (let d = 0; d < r.length; d++) {
    let { file: u, ...c } = r[d];
    if (i[d]) o.push(c);
    else if (s && Abt(c, p) && Gg(c.pid)) ye(u, c.pid, p, e);
  }
  return o;
}
async function ugn(e) {
  let t = MF(),
    r = (await F()).filter((i) => i.sessionId === e && i.sock && !(t && r7e(i.sock, t)) && !i.spare);
  for (let i of r) {
    let { file: s, ...p } = i;
    if (await Se(p.sock)) return p;
  }
  return null;
}
function Ye(e) {
  return lu(e)
    .filter((t) => /^[a-z0-9_]{1,32}$/.test(t))
    .slice(0, 16);
}
export {
  Fu,
  II,
  BXn,
  Pht,
  n5e,
  pTe,
  Dht,
  Zmn,
  jXn,
  egn,
  tgn,
  r5e,
  ngn,
  WXn,
  rgn,
  o5e,
  fTe,
  mTe,
  J6t,
  Q6t,
  $z,
  gTe,
  ogn,
  Oht,
  HM,
  qD,
  E_r,
  ign,
  Z6t,
  i5e,
  A_r,
  C_r,
  sgn,
  agn,
  t3,
  POe,
  s5e,
  lgn,
  v_r,
  Lht,
  Mht,
  a5e,
  LF,
  MF,
  cgn,
  ugn,
};
