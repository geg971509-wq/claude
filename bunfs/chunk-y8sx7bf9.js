// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, jC, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { bo, Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { ne, jt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { hc } from "/$bunfs/root/chunk-492vgtnr.js";
import { w, c, ke } from "/$bunfs/root/chunk-4xj01xwv.js";
import { we, l, E, X, os } from "/$bunfs/root/chunk-ypdw393e.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { vt, b, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { ku, cx } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { hFe } from "/$bunfs/root/chunk-nqmqabr8.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Y } from "/$bunfs/root/chunk-s7e0px8j.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { cn, ii } from "/$bunfs/root/chunk-cf8qhmdc.js";
import { qe } from "/$bunfs/root/chunk-2masxyqj.js";
import { bt, Jl } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Gd } from "/$bunfs/root/chunk-tzhtxm67.js";
import { I6t, dht, WVe, q7n, pht, EOe, G7n, wM, gT, K9, O6t, L6t, TM, mht } from "/$bunfs/root/chunk-q2gyteg0.js";
import { ea } from "/$bunfs/root/chunk-9yzzw213.js";
import { hO } from "/$bunfs/root/chunk-6s9ybdq1.js";
import { i, f } from "/$bunfs/root/chunk-saay52v7.js";
import { Ft } from "/$bunfs/root/chunk-ef7xmm9b.js";
import { No } from "/$bunfs/root/chunk-ewy8x8d5.js";
import { Nn } from "/$bunfs/root/chunk-c48t1p6v.js";
import { zm } from "/$bunfs/root/chunk-13198prn.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { Q, te } from "/$bunfs/root/chunk-wag5ye9w.js";
import { ue } from "/$bunfs/root/chunk-yz031c9r.js";
var Yt = 8,
  omn =
    "File sync is not running for this session here: this process did not seed it from this checkout, so it has nothing to keep in sync",
  l_r = 2000;
class b7n {
  #e = new Map();
  #t = new Map();
  #n;
  #r = new Map();
  #o = false;
  #s = false;
  #a = false;
  #l = false;
  #c = new Set();
  register(e, t) {
    let r = hc(e);
    this.#e.delete(r),
      [...this.#e.keys()].slice(0, Math.max(0, this.#e.size + 1 - Yt)).forEach((u) => {
        let d = this.#e.get(u);
        this.#e.delete(u),
          d?.then(
            (k) => this.retire(k.sessionId),
            () => {},
          );
      }),
      this.#e.set(r, t);
  }
  take(e) {
    let t = hc(e),
      r = this.#e.get(t);
    return this.#e.delete(t), r;
  }
  hold(e, t) {
    this.retire(e.sessionId),
      this.#r.set(e.sessionId, { unregister: vt(() => e.sync.shutdown(t)), sync: e.sync }),
      this.#i(e.sessionId);
  }
  retire(e) {
    let t = hc(e),
      r = this.#r.get(t);
    if (r === void 0) return;
    this.#r.delete(t), r.unregister(), r.sync.shutdown(0), this.#i(t);
  }
  watchState(e, t) {
    let r = hc(e),
      o = this.#t.get(r);
    if (o === void 0) (o = { changed: Ue(), listening: 0, last: Je(this.stateOf(r)) }), this.#t.set(r, o);
    let u = o,
      d = u.changed.subscribe(t);
    if (((u.listening += 1), this.#n === void 0))
      (this.#n = setInterval(() => {
        [...this.#t.keys()].forEach((S) => this.#i(S));
      }, l_r)),
        this.#n.unref?.();
    let k = true;
    return () => {
      if (!k) return;
      if (((k = false), d(), (u.listening -= 1), u.listening === 0 && this.#t.get(r) === u)) this.#t.delete(r);
      if (this.#t.size === 0 && this.#n !== void 0) clearInterval(this.#n), (this.#n = void 0);
    };
  }
  #i(e) {
    let t = this.#t.get(e);
    if (t === void 0) return;
    let r = this.stateOf(e),
      o = Je(r);
    if (o === t.last) return;
    t.last = o;
    try {
      t.changed.emit(r);
    } catch (u) {
      h(we(u));
    }
  }
  stateOf(e) {
    return this.#r.get(hc(e))?.sync.state();
  }
  syncOf(e) {
    return this.#r.get(hc(e))?.sync;
  }
  tellUnknownEngineWord() {
    if (this.#o) return false;
    return (this.#o = true), true;
  }
  sayUnknownEngineWord() {
    if (this.#s) return false;
    return (this.#s = true), true;
  }
  sayGitNotOnStartPath() {
    if (this.#a) return false;
    return (this.#a = true), true;
  }
  linkedWorktreesServed() {
    return this.#l;
  }
  serveLinkedWorktreesForTesting(e) {
    throw Error("serveLinkedWorktreesForTesting is test-only");
  }
  wholeListingOutgrew(e) {
    return this.#c.has(e);
  }
  noteWholeListingOutgrew(e) {
    this.#c.add(e);
  }
  get heldCount() {
    return this.#e.size;
  }
  get exitHookCount() {
    return this.#r.size;
  }
}
function c_r() {
  return new b7n();
}
var wue = new J(c_r);
function AI() {
  return wue.of(G().host);
}
function imn(e) {
  return AI().take(e);
}
function Je(e) {
  switch (e?.state) {
    case void 0:
      return "none";
    case "seeding":
      return "seeding";
    case "armed":
      return `armed:${e.engine}:${e.direction}`;
    case "off":
      return `off:${e.reason}`;
    case "stopped":
      return `stopped:${e.reason}`;
  }
}
import { constants as Z } from "fs";
import {
  link as rn,
  lstat as nt,
  mkdir as Fe,
  open as Re,
  readdir as on,
  realpath as fe,
  rename as sn,
  unlink as Pe,
  writeFile as an,
} from "fs/promises";
import { posix as ln } from "path";
import { posix as ie } from "path";
var bM = ".ccr-seed",
  T7n = 501,
  Tue = ie.join(bM, "manifest.json"),
  Ei = ie.join(bM, "ready.json"),
  pne = ie.join(bM, "laptop.json"),
  Eue = ie.join(bM, "worker.json"),
  mOe = ie.join(bM, "home", "pack.json"),
  k6t = ie.join(bM, "home", "ready.json"),
  DVe = ie.join(bM, "objects", "laptop.bundle"),
  OVe = ie.join(bM, "objects", "worker.bundle"),
  E7n = 20971520,
  LVe = 503316480,
  A7n = 120000,
  C7n = ie.join(bM, "overlay.bundle");
var amn = 256,
  lmn = 4,
  zt = 2,
  Vt = 1,
  Xt = lmn + zt + Vt,
  v7n = amn - Xt,
  H6t = 400,
  Ze = "/working";
function R7n(e) {
  let t = e.startsWith("/") ? e : `/${e}`,
    r = `${Ze}/`,
    o = t.startsWith(r) ? t.slice(r.length) : "";
  return o === "" ? null : o;
}
function cmn(e) {
  return ie.join(bM, "files", e);
}
function $D(e) {
  return !e.split("/").some((t) => t === "" || t === "." || t === "..");
}
function Jt(e) {
  return $D(e) && !e.includes("\\") && !e.includes("\x00") && ku(e);
}
function DF(e) {
  if (!Jt(e) || cx.test(e) || /%2f|%5c/i.test(e)) return "unsupported_characters";
  let t = ie.join(Ze, cmn(e));
  return Buffer.byteLength(t, "utf8") > H6t ? "too_long" : null;
}
var gOe = jC(() => be().rowStaged),
  qt = /^[A-Za-z_$][\w$.]{0,63}$/;
function Aue(e) {
  try {
    let t = e instanceof Error ? e.name : typeof e;
    return typeof t === "string" && qt.test(t) ? t : "unnamed";
  } catch {
    return "unnamed";
  }
}
function Zt(e, t) {
  if (e === void 0) return "deliver";
  if (t === e) return "repeat";
  return e === "served" && t === "refused" ? "deliver" : "out_of_order";
}
function Qe(e) {
  return typeof e === "object" && e !== null && "then" in e && typeof e.then === "function";
}
function Qt(e, t) {
  if (!Qe(e)) return;
  Promise.resolve(e).catch((r) => {
    try {
      t?.(Aue(r));
    } catch {}
  });
}
function en() {
  let e,
    t = [],
    r = false,
    o = [],
    u = (_) => () => {
      t = t.filter((R) => R !== _);
    },
    d = (_, R, O) => {
      try {
        return Qt(_.listener(R, u(_)), O), null;
      } catch (N) {
        return Aue(N);
      }
    },
    k = ({ verdict: _, onRejected: R }) => {
      e = _;
      let O = t,
        N = 0,
        T = [];
      for (let I of O) {
        if (!t.includes(I)) continue;
        N++;
        let v = d(I, _, R);
        if (v !== null) T.push(v);
      }
      if (_ !== "served") t = [];
      return { listeners: N, threw: T };
    },
    S = () => {
      let _ = [];
      while (o.length > 0) _.push(...k(o.shift()).threw);
      return _;
    };
  return {
    current: () => e,
    subscribe: (_) => {
      let R = { listener: _ },
        O = u(R);
      if (e === void 0) return (t = [...t, R]), O;
      let N = e;
      if (N === "served") t = [...t, R];
      let T = r;
      r = true;
      try {
        let I = _(N, O);
        if (Qe(I)) Promise.resolve(I).catch(() => {});
      } catch (I) {
        throw (O(), I);
      } finally {
        if (!T) S(), (r = false);
      }
      return O;
    },
    publish: (_, R) => {
      let O = o.at(-1)?.verdict ?? e,
        N = Zt(O, _);
      if (N === "repeat") return { kind: "repeat" };
      if (N === "out_of_order") return { kind: "out_of_order", basis: O };
      if ((o.push({ verdict: _, onRejected: R }), r)) return { kind: "queued" };
      r = true;
      try {
        let T = k(o.shift());
        return { kind: "delivered", listeners: T.listeners, threw: [...T.threw, ...S()] };
      } finally {
        (o.length = 0), (r = false);
      }
    },
    reset: () => {
      (e = void 0), (t = []), (r = false), (o.length = 0);
    },
  };
}
var nn = new J(() => ({ rowStaged: Ue(), verdict: en() }));
function be() {
  return nn.of(G().host);
}
var k7n = Object.freeze({ current: () => be().verdict.current(), subscribe: (e) => be().verdict.subscribe(e) }),
  H7n = (e, t) => be().verdict.publish(e, t);
var { basename: et, dirname: Se, isAbsolute: De, join: le, normalize: dn, relative: pe, sep: Oe } = ln,
  MVe = "/mnt/user-data/working",
  Iz = "/working",
  Lm = 26214400,
  x7n = 4096,
  un = 4,
  rt = 30000,
  I7n = 5000,
  u_r = 120000,
  d_r = 5,
  p_r = 2000,
  f_r = 3,
  m_r = 600000,
  fn = x7n;
class it {
  seenState = new Map();
  evictedEtag = new Map();
  lastSeenMtime = new Map();
  terminalRejects = new Map();
  inFlight = zm();
  retryableTransportFailures = 0;
  sessionTerminalRejects = 0;
  syncer = null;
  lateStartRoot = null;
  startInFlight = null;
  recordSeen(e, t, r) {
    this.seenState.set(e, { etag: t, localHash: r }), this.evictedEtag.delete(e);
  }
  forgetSeen(e) {
    this.seenState.delete(e), this.evictedEtag.delete(e);
  }
  recordEvictedEtag(e, t) {
    if (t === void 0) return;
    if ((this.evictedEtag.delete(e), this.evictedEtag.set(e, t), this.evictedEtag.size > fn)) {
      let r = this.evictedEtag.keys().next().value;
      if (r !== void 0) this.evictedEtag.delete(r);
    }
  }
  evictDeleted(e) {
    this.recordEvictedEtag(e, this.seenState.get(e)?.etag), this.seenState.delete(e);
  }
  recordSettledMtime(e, t) {
    this.lastSeenMtime.set(e, t);
  }
  reopenMtimeGate(e) {
    this.lastSeenMtime.delete(e);
  }
  recordTerminalReject(e) {
    let t = this.terminalRejects.get(e) ?? { consecutive: 0, latchedUntilMs: 0, suppressed: 0 };
    if ((t.consecutive++, this.terminalRejects.set(e, t), t.consecutive >= f_r))
      (t.latchedUntilMs = Date.now() + m_r),
        p("ccr_synced_file_push", "push_parked_terminal", {
          consecutive_rejects: t.consecutive,
          suppressed_pushes: t.suppressed,
        }),
        (t.suppressed = 0),
        Y("warn", "working_push_parked", { consecutive: t.consecutive });
  }
  resetTerminalRejectStreak(e) {
    let t = this.terminalRejects.get(e);
    if (t === void 0) return;
    if (t.suppressed === 0) {
      this.terminalRejects.delete(e);
      return;
    }
    (t.consecutive = 0), (t.latchedUntilMs = 0);
  }
  forgetTerminalReject(e) {
    this.terminalRejects.delete(e);
  }
  get transportFailureSeq() {
    return this.retryableTransportFailures;
  }
  get sessionTerminalRejectSeq() {
    return this.sessionTerminalRejects;
  }
  noteRetryableTransportFailure() {
    this.retryableTransportFailures++;
  }
  noteSessionTerminalReject() {
    this.sessionTerminalRejects++;
  }
  get activeSyncer() {
    return this.syncer;
  }
  syncerStarted(e) {
    this.syncer = e;
  }
  syncerStopped(e) {
    if (this.syncer === e) this.syncer = null;
  }
  armLateStart(e) {
    this.lateStartRoot = e;
  }
  async flush() {
    if (this.syncer === null) {
      if (this.lateStartRoot !== null && this.startInFlight === null) {
        let e = b_r(this.lateStartRoot);
        (this.startInFlight = e),
          e
            .finally(() => {
              if (this.startInFlight === e) this.startInFlight = null;
            })
            .catch(() => {});
      }
      await this.startInFlight?.catch(() => {});
    }
    await this.syncer?.flush();
  }
  reset() {
    this.seenState.clear(),
      this.lastSeenMtime.clear(),
      this.evictedEtag.clear(),
      this.terminalRejects.clear(),
      (this.lateStartRoot = null),
      (this.startInFlight = null);
  }
}
var g_r = new J(() => new it());
function j() {
  return g_r.of(G().host);
}
function NVe(e, t, r) {
  j().recordSeen(e, t, r);
}
function umn(e) {
  return j().seenState.get(e);
}
function WCr(e) {
  return j().evictedEtag.get(e);
}
function qCr(e) {
  return j().terminalRejects.get(e);
}
function GCr() {
  j().reset();
}
function zCr(e) {
  return j().lastSeenMtime.has(e);
}
function Ce(e, t) {
  return j().inFlight.run(e, t);
}
function VCr() {
  j().inFlight.clearForTest();
}
function Cue(e, t) {
  if (!De(e)) throw Error("syncDir must be absolute");
  if (t.includes("\x00")) throw Error("path contains null bytes");
  if (!De(t)) throw Error("path must be absolute");
  let r = pe(e, dn(t));
  if (r === "" || r === "." || hOe(r)) throw Error("path must be under the working sync dir");
  return r;
}
function hOe(e) {
  return De(e) || e.split(Oe).includes("..");
}
function vk(e) {
  for (let t of e.split(Oe))
    if (t.startsWith(".") || t.endsWith("~") || t.endsWith(".swp") || t.endsWith(".tmp")) return true;
  return false;
}
var rht = "synced_file_limit_exceeded",
  FVe = "synced_file_lane_denied",
  h_r = m(() => f({ error: f({ reason: i().optional() }) }));
function __r(e, t) {
  if (e === "timeout" || e === "network") return true;
  if (e === "auth" || e === "other") return false;
  if (t === void 0) return true;
  return t === 408 || t === 429 || t >= 500;
}
function ot(e, t) {
  let r = j(),
    { kind: o, status: u } = os(t),
    d = __r(o, u);
  if (d) r.noteRetryableTransportFailure();
  else if (o === "auth") r.noteSessionTerminalReject();
  let k = u === 400 ? pn(t) : void 0;
  return {
    kind: "error",
    message: `${e} failed: ${o}${u ? ` ${u}` : ""}`,
    retryable: d,
    errorKind: o,
    status: u,
    ...(k !== void 0 && { laneReason: k }),
  };
}
function pn(e) {
  let t = e?.response?.data,
    r = h_r().safeParse(t);
  return r.success ? r.data.error.reason : void 0;
}
function gn(e) {
  if (e.errorKind === "gated") return `put_gated_${(e.gateReason ?? "unknown").replaceAll("-", "_")}`;
  return e.status !== void 0 ? `put_rejected_${e.status}` : `put_rejected_${e.errorKind}`;
}
async function fne(e, t, r) {
  let o = j();
  try {
    let u = await bt.put(
      "/worker/synced_file",
      {
        path: `${Iz}/${e}`,
        content: t.toString("base64"),
        ...(r && { if_match_sha256: r }),
        worker_epoch: a.CLAUDE_CODE_WORKER_EPOCH ?? 0,
      },
      {
        auth: "session-jwt",
        host: "ccr-session",
        headers: { "anthropic-version": "2023-06-01" },
        timeout: rt,
        validateStatus: (d) => (d >= 200 && d < 300) || d === 409,
        maxBodyLength: Math.ceil((Lm * 4) / 3) + 1024,
      },
    );
    if (!u.ok)
      return (
        o.noteSessionTerminalReject(),
        {
          kind: "error",
          message: `put gated: ${u.reason}`,
          retryable: false,
          errorKind: "gated",
          status: void 0,
          gateReason: u.reason,
        }
      );
    if (u.status === 409) return { kind: "conflict" };
    return { kind: "ok", content_sha256: u.data.content_sha256 };
  } catch (u) {
    return ot("put", u);
  }
}
async function L2(e) {
  let t = j();
  try {
    let r = await bt.get(`/worker/synced_file?path=${encodeURIComponent(`${Iz}/${e}`)}`, {
      auth: "session-jwt",
      host: "ccr-session",
      headers: { "anthropic-version": "2023-06-01" },
      timeout: rt,
      maxContentLength: Math.ceil((Lm * 4) / 3) + 1024,
      validateStatus: (o) => (o >= 200 && o < 300) || o === 404,
    });
    if (!r.ok)
      return (
        t.noteSessionTerminalReject(),
        {
          kind: "error",
          message: `get gated: ${r.reason}`,
          retryable: false,
          errorKind: "gated",
          status: void 0,
          gateReason: r.reason,
        }
      );
    if (r.status === 404) return { kind: "not_found" };
    return { kind: "ok", buf: Buffer.from(r.data.content, "base64"), content_sha256: r.data.content_sha256 };
  } catch (r) {
    return ot("get", r);
  }
}
async function Ge(e, t, r) {
  let o = await fe(e),
    u = await fe(Se(t)),
    d = pe(o, u);
  if (hOe(d)) {
    let S = Error("dest parent escaped working sync dir");
    throw ((S.code = "WORKING_PARENT_ESCAPE"), S);
  }
  let k = d === "" ? et(t) : le(d, et(t));
  if (vk(k)) {
    let S = Error("dest resolves into an ignored path");
    throw ((S.code = "WORKING_DEST_IGNORED"), S);
  }
  if (r?.(k)) {
    let S = Error("dest resolves onto a path the caller refuses");
    throw ((S.code = "WORKING_DEST_REFUSED"), S);
  }
  try {
    if ((await nt(t)).isSymbolicLink()) {
      let _ = Error("dest is a symlink");
      throw ((_.code = "WORKING_DEST_SYMLINK"), _);
    }
  } catch (S) {
    if (!X(S)) throw S;
  }
}
var vue = 384;
async function _Oe(e, t, r, o = "replace", u) {
  await Fe(e).catch((_) => {
    if (E(_) !== "EEXIST") throw _;
  });
  let d = await fe(e),
    k = Se(t);
  for (;;)
    try {
      let _ = await fe(k),
        R = pe(d, _);
      if (hOe(R)) {
        let O = Error("dest ancestor escaped working sync dir");
        throw ((O.code = "WORKING_PARENT_ESCAPE"), O);
      }
      if (vk(R)) {
        let O = Error("dest ancestor resolves into an ignored path");
        throw ((O.code = "WORKING_DEST_IGNORED"), O);
      }
      if (u?.(le(R, pe(k, t))) === true) {
        let O = Error("dest resolves onto a path the caller refuses");
        throw ((O.code = "WORKING_DEST_REFUSED"), O);
      }
      break;
    } catch (_) {
      if (!X(_)) throw _;
      let R = Se(k);
      if (R === k) break;
      k = R;
    }
  await Fe(Se(t), { recursive: true }), await Ge(e, t, u);
  let S = `${t}.${process.hrtime.bigint().toString(36)}.tmp`;
  try {
    await hFe(S);
  } catch (_) {
    throw (tt(_), _);
  }
  try {
    await an(S, r, { mode: vue, flag: "wx" });
  } catch (_) {
    throw (tt(_), await Pe(S).catch(() => {}), _);
  }
  try {
    if (o === "create_only") await rn(S, t), await Pe(S);
    else await sn(S, t);
  } catch (_) {
    throw (await Pe(S).catch(() => {}), _);
  }
}
function tt(e) {
  if (E(e) !== "EEXIST") return;
  let t = Error("sibling tempfile name already taken", { cause: e });
  throw ((t.code = "WORKING_TMP_TAKEN"), t);
}
async function KCr(e, t, r) {
  let o;
  try {
    o = Cue(r, e.mount_path);
  } catch (d) {
    return p("ccr_synced_file_stage", "bad_mount_path"), { ok: false, error: d instanceof Error ? d.message : String(d) };
  }
  if (o === bM || o.startsWith(`${bM}/`)) return gOe.emit(o), { ok: true, noop: "dir_sync_lane_row" };
  if (vk(o)) return p("ccr_synced_file_stage", "ignored_path"), { ok: false, error: "mount_path is an ignored path" };
  let u = le(r, o);
  return Ce(o, async () => {
    let d, k;
    try {
      try {
        await Ge(r, u);
      } catch (I) {
        if (!X(I))
          return (
            p("ccr_synced_file_stage", "containment_failed"),
            { ok: false, error: `mount_path failed containment: ${E(I) ?? "unknown"}` }
          );
      }
      let S = null;
      try {
        let I = await Re(u, Z.O_RDONLY | Z.O_NOFOLLOW | Z.O_NONBLOCK);
        try {
          let v = await I.stat();
          if (v.isFile()) {
            if (v.size > Lm)
              return p("ccr_synced_file_stage", "too_large"), { ok: false, error: "local file too large to reconcile" };
            S = await I.readFile();
          }
        } finally {
          await I.close();
        }
      } catch (I) {
        let v = E(I);
        if (v !== "ENOENT" && v !== "ELOOP" && v !== "EMLINK") throw I;
      }
      let _ = S ? Nn(S) : void 0,
        R = umn(u);
      if (_ && R && R.localHash === _ && e.content_sha256 !== void 0 && R.etag === e.content_sha256)
        return y("ccr_synced_file_stage"), { ok: true, noop: "already_present" };
      let O = e.expected_local_sha256 || void 0,
        N = R && R.localHash === _ && (O === void 0 || R.etag === O);
      if (S && !N) {
        let I = await fne(o, S, O);
        if (I.kind === "error") return p("ccr_synced_file_stage", "push_failed"), { ok: false, error: I.message };
        let v = await L2(o);
        if (v.kind !== "ok")
          return (
            p("ccr_synced_file_stage", "reget_failed"),
            { ok: false, error: v.kind === "error" ? v.message : "get not_found after put" }
          );
        (d = v.buf), (k = v.content_sha256), Y("info", "working_stage_reconciled", { conflict: I.kind === "conflict" });
      } else {
        let I = await t(e.filestore_path);
        if (!I.ok) return p("ccr_synced_file_stage", "fetch_failed"), { ok: false, error: I.error };
        if (I.buf.length > Lm)
          return p("ccr_synced_file_stage", "too_large"), { ok: false, error: "staged content too large" };
        (d = I.buf), (k = e.content_sha256);
      }
      let T = null;
      try {
        let I = await Re(u, Z.O_RDONLY | Z.O_NOFOLLOW | Z.O_NONBLOCK);
        try {
          let v = await I.stat();
          if (v.isFile()) {
            if (v.size > Lm)
              return p("ccr_synced_file_stage", "too_large"), { ok: false, error: "local file too large to reconcile" };
            T = await I.readFile();
          }
        } finally {
          await I.close();
        }
      } catch (I) {
        let v = E(I);
        if (v !== "ENOENT" && v !== "ELOOP" && v !== "EMLINK") throw I;
      }
      if (T && Nn(T) !== _) {
        let I = await fne(o, T, k);
        if (I.kind === "error") return p("ccr_synced_file_stage", "push_failed"), { ok: false, error: I.message };
        let v = await L2(o);
        if (v.kind !== "ok")
          return (
            p("ccr_synced_file_stage", "reget_failed"),
            { ok: false, error: v.kind === "error" ? v.message : "get not_found after put" }
          );
        (d = v.buf),
          (k = v.content_sha256),
          Y("info", "working_stage_reconciled", { conflict: I.kind === "conflict", mid_window: true });
      }
    } catch (S) {
      return p("ccr_synced_file_stage", "reconcile_threw"), { ok: false, error: `reconcile failed: ${E(S) ?? "unknown"}` };
    }
    try {
      await _Oe(r, u, d);
    } catch (S) {
      return p("ccr_synced_file_stage", "write_failed"), { ok: false, error: `write failed: ${E(S) ?? "unknown"}` };
    }
    return NVe(u, k, Nn(d)), y("ccr_synced_file_stage"), Y("info", "working_stage_ok", { bytes: d.length }), { ok: true };
  });
}
async function y_r(e, t) {
  let r = j(),
    o = r.terminalRejects.get(t);
  if (o !== void 0 && o.latchedUntilMs !== 0) {
    if (Date.now() < o.latchedUntilMs) return o.suppressed++, true;
    o.latchedUntilMs = 0;
  }
  let u = le(e, t),
    d;
  try {
    d = await fe(u);
  } catch (v) {
    if (X(v)) return true;
    throw v;
  }
  let k;
  try {
    k = await fe(e);
  } catch {
    return false;
  }
  let S = pe(k, d);
  if (S !== t && (S === "" || hOe(S))) return g("ccr_synced_file_push", "symlink_escape"), true;
  let _;
  try {
    let v = await Re(u, Z.O_RDONLY | Z.O_NOFOLLOW | Z.O_NONBLOCK);
    try {
      let L = await v.stat();
      if (!L.isFile()) return true;
      if (L.size > Lm) return g("ccr_synced_file_push", "too_large"), true;
      _ = await v.readFile();
    } finally {
      await v.close();
    }
  } catch (v) {
    let L = E(v);
    if (L === "ELOOP" || L === "EMLINK") return g("ccr_synced_file_push", "symlink_escape"), true;
    return p("ccr_synced_file_push", "read_failed"), false;
  }
  let R = Nn(_),
    O = umn(u);
  if (R === O?.localHash) return true;
  let N = O === void 0 ? r.evictedEtag.get(u) : void 0;
  if (O === void 0 && N === void 0) {
    let v = await L2(t);
    if (v.kind === "error") {
      if ((p("ccr_synced_file_push", "seed_get_failed"), !v.retryable)) r.recordTerminalReject(t);
      return !v.retryable;
    }
    if (v.kind === "ok") {
      r.resetTerminalRejectStreak(t);
      let L = Nn(v.buf);
      if (L === R) return NVe(u, v.content_sha256, R), true;
      try {
        await _Oe(e, u, v.buf);
      } catch {
        return p("ccr_synced_file_push", "write_failed"), false;
      }
      return NVe(u, v.content_sha256, L), g("ccr_synced_file_push", "cold_renderer_wins"), true;
    }
  }
  let T = await fne(t, _, O?.etag ?? N);
  if (T.kind === "ok")
    return r.resetTerminalRejectStreak(t), NVe(u, T.content_sha256, R), y("ccr_synced_file_push"), true;
  if (T.kind === "error") {
    if (T.retryable) r.resetTerminalRejectStreak(t), p("ccr_synced_file_push", "put_failed");
    else p("ccr_synced_file_push", gn(T)), r.recordTerminalReject(t);
    return Y("warn", "working_push_failed", { reason: T.message, retryable: T.retryable }), !T.retryable;
  }
  r.resetTerminalRejectStreak(t);
  let I = await L2(t);
  if (I.kind === "error") {
    if ((p("ccr_synced_file_push", "reget_failed"), !I.retryable)) r.recordTerminalReject(t);
    return !I.retryable;
  }
  if (I.kind === "not_found") return r.forgetSeen(u), p("ccr_synced_file_push", "reget_failed"), false;
  try {
    await _Oe(e, u, I.buf);
  } catch {
    return p("ccr_synced_file_push", "write_failed"), false;
  }
  return NVe(u, I.content_sha256, Nn(I.buf)), g("ccr_synced_file_push", "conflict_overwritten"), true;
}
function XCr() {
  j().activeSyncer?.stop();
}
function S_r() {
  return j().flush();
}
async function YCr() {
  let e = j();
  await S_r();
  for (;;) {
    if (e.inFlight.size === 0 && (e.activeSyncer?.pendingCount() ?? 0) === 0) return;
    await e.inFlight.settle(), await new Promise((t) => setImmediate(t));
  }
}
async function b_r(e) {
  let t = j();
  t.armLateStart(null);
  for (let x = 1; ; x++)
    try {
      await Fe(e);
      break;
    } catch (M) {
      let C = E(M);
      if (C === "EEXIST") break;
      if (C === "ENOENT") {
        if (x < d_r) {
          await ne(p_r);
          continue;
        }
        return Y("info", "working_sync_parent_absent", {}), t.armLateStart(e), null;
      }
      return (
        g("ccr_synced_file_push", "sync_start_failed"),
        Y("warn", "working_sync_start_failed", { code: C ?? "unknown" }),
        null
      );
    }
  let r = 0,
    o = [],
    u = () => (r < un ? (r++, Promise.resolve()) : new Promise((x) => o.push(x))),
    d = () => {
      let x = o.shift();
      if (x) x();
      else r--;
    },
    k = new Set(),
    S = false,
    _ = false,
    R = 0,
    O = 0,
    N = async () => {
      let x = [],
        M = [""],
        C = new Set(),
        U = [...t.seenState.keys()],
        oe = t.transportFailureSeq,
        P = t.sessionTerminalRejectSeq,
        A = 0,
        K = false,
        ae = false;
      e: while (M.length && !S) {
        let re = M.shift(),
          W;
        try {
          W = await on(le(e, re), { withFileTypes: true });
        } catch (q) {
          Y("warn", "working_scan_readdir_failed", { code: E(q) ?? "unknown" }), (ae = true);
          continue;
        }
        for (let q of W) {
          if (++A > x7n) {
            if (((K = true), !_)) g("ccr_synced_file_push", "scan_cap_reached"), (_ = true);
            break e;
          }
          let z = re ? le(re, q.name) : q.name;
          if ((C.add(z), vk(z))) continue;
          if (q.isDirectory()) {
            M.push(z);
            continue;
          }
          if (!q.isFile()) continue;
          let xe;
          try {
            xe = (await nt(le(e, z))).mtimeMs;
          } catch {
            continue;
          }
          let Ae = t.terminalRejects.get(z);
          if (Ae !== void 0 && Ae.latchedUntilMs !== 0 && Date.now() >= Ae.latchedUntilMs) t.reopenMtimeGate(z);
          if (xe === t.lastSeenMtime.get(z)) continue;
          if (k.has(z) || t.inFlight.has(z)) continue;
          k.add(z),
            x.push(
              (async () => {
                await u();
                try {
                  if (await Ce(z, () => y_r(e, z))) t.recordSettledMtime(z, xe);
                } finally {
                  k.delete(z), d();
                }
              })().catch(($t) => Y("warn", "working_push_threw", { code: E($t) ?? "unknown" })),
            );
        }
      }
      if (!K && !ae && !S) {
        for (let W of t.lastSeenMtime.keys()) if (!C.has(W)) t.reopenMtimeGate(W);
        for (let W of t.terminalRejects.keys()) if (!C.has(W)) t.forgetTerminalReject(W);
        let re = e.endsWith(Oe) ? e : e + Oe;
        for (let W of U) if (W.startsWith(re) && !C.has(pe(e, W))) t.evictDeleted(W);
      }
      if ((await Promise.allSettled(x), t.transportFailureSeq > oe || t.sessionTerminalRejectSeq > P))
        (R = R === 0 ? 2 * I7n : Math.min(R * 2, u_r)), (O = Date.now() + R);
      else if (k.size === 0) (R = 0), (O = 0);
    },
    T = 0,
    I = async () => {
      T++;
      try {
        await N();
      } finally {
        T--;
      }
    },
    v = I(),
    L = setInterval(() => {
      if (T > 0 || Date.now() < O) return;
      I().catch((x) => Y("warn", "working_push_threw", { code: E(x) ?? "unknown" }));
    }, I7n);
  L.unref?.(), Y("info", "working_sync_started", {});
  let F = {
    initialReconcile: v,
    flush: I,
    pendingCount: () => k.size,
    pollBackoffUntilForTest: () => O,
    stop() {
      (S = true), clearInterval(L), t.syncerStopped(F);
    },
  };
  return t.syncerStarted(F), F;
}
async function dmn(e, t, r, o) {
  let u = j();
  if (r.length > Lm) return { ok: false, reason: "too_large", error: "content too large" };
  if (o !== void 0 && o.length === 0) return { ok: false, reason: "put_failed", error: "empty if_match", retryable: false };
  return Ce(t, async () => {
    let d = await fne(t, r, o);
    if (d.kind === "conflict") {
      if (o !== void 0) return { ok: false, reason: "conflict", error: "lane row changed since if_match", retryable: false };
      return { ok: false, reason: "put_failed", error: "put rejected (409 without if_match)", retryable: true };
    }
    if (d.kind === "error") return { ok: false, reason: "put_failed", error: d.message, retryable: d.retryable };
    if (!vk(t)) {
      let k = le(e, t),
        S = umn(k),
        _ = false;
      try {
        await Ge(e, k);
        let R = await Re(k, Z.O_RDONLY | Z.O_NOFOLLOW | Z.O_NONBLOCK);
        try {
          let O = await R.stat();
          if (O.isFile() && O.size <= Lm && S !== void 0) {
            let N = Number(O.size),
              T = Buffer.allocUnsafe(N + 1),
              I = 0;
            for (;;) {
              let { bytesRead: v } = await R.read(T, I, N + 1 - I, I);
              if (v === 0) break;
              if (((I += v), I > N)) break;
            }
            _ = I <= N && S.localHash === Nn(T.subarray(0, I));
          }
        } finally {
          await R.close();
        }
      } catch (R) {
        _ = X(R);
      }
      if (!_)
        return (
          u.recordEvictedEtag(k, d.content_sha256),
          Y("info", "worker_lane_mirror_skipped"),
          { ok: true, etag: d.content_sha256 }
        );
      try {
        await _Oe(e, k, r);
      } catch (R) {
        return (
          u.recordEvictedEtag(k, d.content_sha256),
          Y("warn", "worker_lane_mirror_skipped", { code: E(R) ?? "unknown" }),
          { ok: true, etag: d.content_sha256 }
        );
      }
      NVe(k, d.content_sha256, Nn(r));
    }
    return { ok: true, etag: d.content_sha256 };
  });
}
var st = new Set(["none", "off", "0", "false", "no"]),
  at = new Set(["git", "always-git", ...st]);
function lt() {
  let e = (a.CLAUDE_CODE_DIR_SYNC_ENGINE ?? "")
      .split(",")
      .map((r) => r.trim().toLowerCase())
      .filter((r) => r !== ""),
    t = e.filter((r) => !at.has(r));
  if (t.length > 0 && AI().tellUnknownEngineWord())
    n(
      `dir-sync: CLAUDE_CODE_DIR_SYNC_ENGINE has unrecognised word(s) ${t.join(", ")}; known: git, always-git (defaults), none/off/0/false/no (no directory sync)`,
      { level: "warn" },
    );
  return e;
}
function smn() {
  return lt().filter((e) => !at.has(e));
}
function ct() {
  return !lt().some((e) => st.has(e));
}
function zwe() {
  return ct();
}
function Vwe() {
  return AI().linkedWorktreesServed();
}
function PVe(e) {
  return e !== "linked" || Vwe();
}
function PX() {
  return ct();
}
function w7n() {
  return !bo(a.CLAUDE_CODE_DIR_SYNC_FFWD);
}
function nht() {
  return !bo(a.CLAUDE_CODE_DIR_SYNC_STREAM);
}
import { close as Sn, constants as H, fstat as wn } from "fs";
import { mkdtemp as Rn, rm as On, symlink as Tn } from "fs/promises";
import { tmpdir as In } from "os";
import { getSystemErrorName as vn, promisify as gt } from "util";
import { constants as dt } from "fs";
function mn(e) {
  switch (e) {
    case "ELOOP":
      return Error("not the regular file the name was screened as");
    case "WORKING_PARENT_ESCAPE":
      return Error("destination ancestor resolves outside the tree root");
    case "WORKING_DEST_IGNORED":
      return Error("destination resolves into an ignored path");
    case "WORKING_DEST_SYMLINK":
      return Error("destination is a symlink");
    case "WORKING_DEST_REFUSED":
      return Error("destination resolves onto a name the caller refuses");
    case "WORKING_TMP_TAKEN":
      return Error("sibling tempfile name already taken");
  }
}
function V(e) {
  let t = mn(e);
  return (t.code = e), t;
}
function Ne(e, t) {
  let { path: r, platform: o } = e,
    u = o() === "windows";
  return (
    r.isAbsolute(t) || (u ? t.split(/[\\/]/) : t.split(r.sep)).includes("..") || (u && /^(?:[\\/]|[a-zA-Z]:)/.test(t))
  );
}
function Te(e, t) {
  return t
    .split(e.path.sep)
    .some((r) => r.startsWith(".") || r.endsWith("~") || r.endsWith(".swp") || r.endsWith(".tmp"));
}
function _n(e, t, r) {
  let { isAbsolute: o, normalize: u, relative: d } = e.path;
  if (!o(t)) throw Error("tree root must be absolute");
  if (r.includes("\x00")) throw Error("path contains null bytes");
  if (!o(r)) throw Error("path must be absolute");
  let k = d(u(t), u(r));
  if (k === "" || k === "." || Ne(e, k)) throw Error("path must be under the tree root");
  return k;
}
function Me(e, t) {
  return e.path.sep === "/" ? t : t.split(e.path.sep).join("/");
}
var pmn = dt.O_RDONLY | dt.O_NONBLOCK;
async function fmn(e, t, r) {
  let o = await t.lstat(r);
  if (!o.isFile() || o.nlink > 1n) throw V("ELOOP");
  if (t.backend === "by_name" && (await We(e, t.realRoot, r))) throw V("ELOOP");
  let u = await t.open(r, pmn);
  try {
    let d = await u.stat({ bigint: true });
    if (!d.isFile() || d.nlink > 1n || d.dev !== o.dev || d.ino !== o.ino) throw V("ELOOP");
    return { handle: u, stats: d };
  } catch (d) {
    throw (await u.close(), d);
  }
}
async function We(e, t, r) {
  let { fs: o, path: u } = e,
    d = r.split("/"),
    k = u.relative(t, await o.realpath(u.join(t, ...d)));
  return Ne(e, k) || Te(e, k) || k !== u.join(...d);
}
async function hn(e, t, r, o) {
  let { fs: u, path: d } = e,
    { basename: k, dirname: S, join: _, relative: R } = d,
    O = R(t, await u.realpath(S(r)));
  if (Ne(e, O)) throw V("WORKING_PARENT_ESCAPE");
  let N = O === "" ? k(r) : _(O, k(r));
  if (Te(e, N)) throw V("WORKING_DEST_IGNORED");
  if (o?.(Me(e, N)) === true) throw V("WORKING_DEST_REFUSED");
  try {
    if ((await u.lstat(r)).isSymbolicLink()) throw V("WORKING_DEST_SYMLINK");
  } catch (T) {
    if (!X(T)) throw T;
  }
}
async function yn(e, t, r, o) {
  let { fs: u, path: d } = e,
    k = async (S) => {
      try {
        let _ = d.relative(t, await u.realpath(S));
        if (Ne(e, _)) throw V("WORKING_PARENT_ESCAPE");
        if (Te(e, _)) throw V("WORKING_DEST_IGNORED");
        if (o?.(Me(e, d.join(_, d.relative(S, r)))) === true) throw V("WORKING_DEST_REFUSED");
      } catch (_) {
        if (!X(_) && E(_) !== "ENOTDIR") throw _;
        let R = d.dirname(S);
        if (R !== S) await k(R);
      }
    };
  await k(d.dirname(r));
}
function kn(e) {
  return E(e) === "EEXIST" ? V("WORKING_TMP_TAKEN") : e;
}
async function P7n(e, t, r, o, u, d, k = vue) {
  let S = _n(e, r, o);
  if (Te(e, S)) throw V("WORKING_DEST_IGNORED");
  let _ = Me(e, S),
    R = e.path.posix.dirname(_),
    O = e.path.join(r, S);
  if (t.backend === "by_name") await yn(e, t.realRoot, O, d);
  if (R !== ".") await t.mkdirp(R);
  if (t.backend === "by_name") await hn(e, t.realRoot, O, d);
  else if (await En(t, _)) throw V("WORKING_DEST_SYMLINK");
  let N = `${_}.${process.hrtime.bigint().toString(36)}.tmp`;
  try {
    await t.create(N, u, k);
  } catch (T) {
    if (E(T) !== "EEXIST") await t.unlink(N).catch(() => {});
    throw kn(T);
  }
  try {
    await t.link(N, _);
  } finally {
    await t.unlink(N).catch(() => {});
  }
}
async function En(e, t) {
  try {
    return (await e.lstat(t)).isSymbolicLink();
  } catch (r) {
    if (X(r) || bn.has(E(r) ?? "")) return false;
    throw r;
  }
}
var bn = new Set(["EACCES", "EPERM", "ENXIO", "EOPNOTSUPP", "ENOTSUP"]);
function Ln(e) {
  switch (e) {
    case "WORKING_PARENT_NOT_DIRECTORY":
      return Error("a destination ancestor is a symlink or not a directory");
    case "WORKING_ANCHOR_UNAVAILABLE":
      return Error("files cannot be placed safely on this machine");
  }
}
function xn() {
  let e = Error("tree anchor root is not a canonical path");
  return (e.code = "WORKING_ROOT_NOT_CANONICAL"), e;
}
function ee(e) {
  let t = Ln(e);
  return (t.code = e), t;
}
var He = 536870912,
  An = 2097152,
  Pn = 128,
  de = 16777216,
  ye = H.O_RDONLY | H.O_DIRECTORY | H.O_NOFOLLOW | de,
  Le = H.O_WRONLY | H.O_CREAT | H.O_EXCL | de,
  mt = 511;
function he(e, t) {
  let r = e.split("/");
  if (e.includes("\x00") || r.some((o) => o === "" || o === "." || o === ".." || (t !== "/" && o.includes(t))))
    throw Error("anchored path must be relative, of plain segments");
  return r;
}
function Ie(e, t) {
  let r = he(e, t);
  return { dirs: r.slice(0, -1), leaf: r.at(-1) ?? "" };
}
function Be(e) {
  if ((e & H.O_CREAT) !== 0) throw Error("anchored open never creates");
  return e;
}
var Fn = H.O_WRONLY | H.O_RDWR | H.O_APPEND | H.O_TRUNC;
function Dn(e) {
  return (e & Fn) !== 0;
}
function je(e) {
  let t = E(e);
  return t === "ENOTDIR" || t === "ELOOP" ? ee("WORKING_PARENT_NOT_DIRECTORY") : e;
}
function _t(e, t, r, o, u, d) {
  let { sep: k } = t.path,
    S = null,
    _ = () => (S ??= r.close()),
    R = (L) => (L === o ? Promise.resolve() : d.closeDir(L)),
    O = async (L, F, x) => {
      try {
        return await d.openDir(L, F);
      } catch (M) {
        if (x === null || !X(M)) throw je(M);
        return (
          await d.mkdir(L, F, x).catch((C) => {
            if (E(C) !== "EEXIST") throw C;
          }),
          d.openDir(L, F).catch((C) => {
            throw je(C);
          })
        );
      }
    },
    N = () => {
      if (S !== null) throw Error("tree anchor is closed");
    },
    T = async (L, F) => {
      N();
      let x = o;
      try {
        for (let M of L) {
          N();
          let C = await O(x, M, F);
          await R(x), (x = C);
        }
        return x;
      } catch (M) {
        throw (await R(x), M);
      }
    },
    I = async (L, F) => {
      let { dirs: x, leaf: M } = Ie(L, k),
        C = await T(x, null);
      try {
        return N(), await F(C, M, x);
      } finally {
        await R(C);
      }
    },
    v = async (L, F, x) => {
      let M = Ie(F, k);
      return Ie(L, k).dirs.join("/") === M.dirs.join("/")
        ? I(L, (C, U) => x(C, U, C, M.leaf))
        : I(L, (C, U) => I(F, (oe, P) => x(C, U, oe, P)));
    };
  return {
    backend: e,
    byNameReason: null,
    rootOnly: false,
    realRoot: u,
    mkdirp: async (L, F = mt) => R(await T(he(L, k), F)),
    create: (L, F, x) => I(L, (M, C, U) => d.create(M, C, U, F, x)),
    link: (L, F) => v(L, F, d.link),
    rename: (L, F) => v(L, F, d.rename),
    unlink: (L) => I(L, d.unlink),
    rmdir: (L) => I(L, d.rmdir),
    lstat: (L) => (L === "" ? r.stat({ bigint: true }) : I(L, d.lstat)),
    open: async (L, F) => {
      let x = Be(F);
      if (d.openBeneath !== void 0) {
        let { dirs: M, leaf: C } = Ie(L, k);
        return N(), d.openBeneath(M, C, x);
      }
      return I(L, (M, C, U) => d.open(M, C, U, x));
    },
    holdOutside: (L) => Cn(t, L),
    moveOut: (L, F, x) => I(L, (M, C) => d.renameOut(M, C, me(F), ge(x))),
    moveIn: (L, F, x) => I(x, (M, C) => d.renameIn(me(L), ge(F), M, C)),
    linkIn: (L, F, x) => I(x, (M, C) => d.linkIn(me(L), ge(F), M, C)),
    statIn: (L, F) => d.statIn(me(L), ge(F)),
    openIn: (L, F, x) => d.openIn(me(L), ge(F), Be(x)),
    unlinkIn: (L, F) => d.unlinkIn(me(L), ge(F)),
    close: _,
    [Symbol.asyncDispose]: _,
  };
}
function ge(e) {
  if (e === "" || e === "." || e === ".." || e.includes("/") || e.includes("\\") || e.includes("\x00"))
    throw Error("a held-directory leaf must be one plain name");
  return e;
}
async function Cn(e, t) {
  let { fs: r } = e,
    o = await r.realpath(t).catch(() => null);
  if (o === null) return null;
  let u = await r.open(o, ye).catch(() => null);
  if (u === null) return null;
  try {
    let [S, _] = await Promise.all([u.stat({ bigint: true }), r.lstat(o, { bigint: true })]);
    if (!S.isDirectory() || !_.isDirectory() || S.ino === 0n || S.dev !== _.dev || S.ino !== _.ino)
      return await u.close().catch(() => {}), null;
  } catch {
    return await u.close().catch(() => {}), null;
  }
  let d = null,
    k = () => (d ??= u.close());
  return {
    realPath: o,
    handle: u,
    get closed() {
      return d !== null;
    },
    close: k,
    [Symbol.asyncDispose]: k,
  };
}
function me(e) {
  if (e.closed) throw Error("held directory is closed");
  return e;
}
async function Gn(e, t, r, o) {
  try {
    await e.writeFile(t), await e.chmod(r);
  } catch (u) {
    throw (await o().catch(() => {}), await e.close().catch(() => {}), u);
  }
  try {
    await e.close();
  } catch (u) {
    throw (await o().catch(() => {}), u);
  }
}
async function Ke(e, t, r, o, u) {
  let d = await e.stat({ bigint: true }).catch(() => null);
  return Gn(e, t, r, async () => {
    let k = await o();
    if (d !== null && d.ino !== 0n && k !== null && k.dev === d.dev && k.ino === d.ino) await u();
  });
}
async function ut(e, t, r) {
  try {
    let [o, u] = await Promise.all([e.fs.lstat(r, { bigint: true }), t.stat({ bigint: true })]);
    return o.dev === u.dev && o.ino === u.ino && u.ino !== 0n;
  } catch {
    return false;
  }
}
async function Mn(e, t) {
  try {
    let [r, o] = await Promise.all([e.fs.lstat(`/proc/self/fd/${t.fd}/.`, { bigint: true }), t.stat({ bigint: true })]);
    return r.dev === o.dev && r.ino === o.ino && o.ino !== 0n;
  } catch {
    return false;
  }
}
function Wn(e, t, r) {
  let { fs: o } = e,
    u = (d, k) => `/proc/self/fd/${d.fd}/${k}`;
  return _t("linux_procfd", e, t, t, r, {
    openDir: (d, k) => o.open(u(d, k), ye),
    mkdir: async (d, k, S) => {
      await o.mkdir(u(d, k), { mode: S });
    },
    closeDir: (d) => d.close(),
    create: async (d, k, S, _, R) =>
      Ke(
        await o.open(u(d, k), Le | H.O_NOFOLLOW, R),
        _,
        R,
        () => o.lstat(u(d, k), { bigint: true }).catch(() => null),
        () => o.unlink(u(d, k)),
      ),
    link: (d, k, S, _) => o.link(u(d, k), u(S, _)),
    rename: (d, k, S, _) => o.rename(u(d, k), u(S, _)),
    unlink: (d, k) => o.unlink(u(d, k)),
    rmdir: (d, k) => o.rmdir(u(d, k)),
    lstat: (d, k) => o.lstat(u(d, k), { bigint: true }),
    open: (d, k, S, _) => o.open(u(d, k), _ | H.O_NOFOLLOW | de),
    renameOut: (d, k, S, _) => o.rename(u(d, k), u(S.handle, _)),
    renameIn: (d, k, S, _) => o.rename(u(d.handle, k), u(S, _)),
    linkIn: (d, k, S, _) => o.link(u(d.handle, k), u(S, _)),
    statIn: (d, k) => o.lstat(u(d.handle, k), { bigint: true }),
    openIn: (d, k, S) => o.open(u(d.handle, k), S | H.O_NOFOLLOW | de),
    unlinkIn: (d, k) => o.unlink(u(d.handle, k)),
  });
}
var Hn = gt(wn),
  ft = gt(Sn),
  _e;
function ce(e) {
  return Buffer.from(e + "\x00");
}
function Bn() {
  if (_e !== void 0) return _e;
  try {
    let e = ue("bun:ffi"),
      r = e.dlopen("/usr/lib/libSystem.B.dylib", {
        openat: { args: ["i32", "ptr", "i32"], returns: "i32" },
        mkdirat: { args: ["i32", "ptr", "u32"], returns: "i32" },
        renameat: { args: ["i32", "ptr", "i32", "ptr"], returns: "i32" },
        linkat: { args: ["i32", "ptr", "i32", "ptr", "i32"], returns: "i32" },
        unlinkat: { args: ["i32", "ptr", "i32"], returns: "i32" },
        __error: { args: [], returns: "ptr" },
      }).symbols,
      o = (u, d) => {
        if (d >= 0) return d;
        let k = r.__error(),
          S = k === null ? 0 : e.read.i32(k, 0),
          _ = Error("libSystem call failed");
        throw ((_.errno = S), (_.code = S === 0 ? "EUNKNOWN" : vn(-S)), (_.syscall = u), _);
      };
    (_e = {
      openat: (u, d, k) => o("openat", r.openat(u, ce(d), k)),
      mkdirat: (u, d, k) => {
        o("mkdirat", r.mkdirat(u, ce(d), k));
      },
      renameat: (u, d, k, S) => {
        o("renameat", r.renameat(u, ce(d), k, ce(S)));
      },
      linkat: (u, d, k, S) => {
        o("linkat", r.linkat(u, ce(d), k, ce(S), 0));
      },
      unlinkat: (u, d) => {
        o("unlinkat", r.unlinkat(u, ce(d), 0));
      },
      rmdirat: (u, d) => {
        o("unlinkat", r.unlinkat(u, ce(d), Pn));
      },
    }),
      n("dirSync anchor: libSystem *at loaded through bun:ffi");
  } catch (e) {
    n(`dirSync anchor: bun:ffi unavailable (${l(e)})`, { level: "warn" }), (_e = null);
  }
  return _e;
}
function jn(e) {
  return (e.noFollowAnyEnforced ??= Un(e));
}
async function Un(e) {
  let { fs: t, path: r } = e,
    o = null;
  try {
    (o = await t.realpath(await Rn(r.join(In(), "claude-nfa-")))),
      await t.mkdir(r.join(o, "d")),
      await Tn(r.join(o, "d"), r.join(o, "l"));
    let u = Le | He;
    try {
      await (await t.open(r.join(o, "d", "control"), u, 384)).close();
    } catch (d) {
      if (E(d) === "EINVAL") return false;
      throw d;
    }
    try {
      return await (await t.open(r.join(o, "l", "probe"), u, 384)).close(), false;
    } catch (d) {
      if (E(d) === "ELOOP") return true;
      throw d;
    }
  } catch (u) {
    return n(`dirSync anchor: O_NOFOLLOW_ANY probe not run (${E(u) ?? "not an errno"})`), true;
  } finally {
    if (o !== null) await On(o, { recursive: true, force: true }).catch(() => {});
  }
}
var ve = H.O_RDONLY | An | H.O_NONBLOCK;
function Kn(e, t, r, o) {
  let { fs: u, path: d } = e,
    k = (_, R, O, N) => u.open(d.join(o, ..._, R), (O & ~H.O_NOFOLLOW) | He | de, N),
    S = async (_, R, O) => {
      let N = t.openat(_, R, O | de);
      try {
        return await Hn(N, { bigint: true });
      } finally {
        await ft(N);
      }
    };
  return _t("darwin_at", e, r, r.fd, o, {
    openDir: async (_, R) => t.openat(_, R, ye),
    mkdir: async (_, R, O) => t.mkdirat(_, R, O),
    closeDir: (_) => ft(_),
    create: async (_, R, O, N, T) => {
      let I = await k(O, R, Le, T).catch((v) => {
        throw je(v);
      });
      return Ke(
        I,
        N,
        T,
        () => S(_, R, ve).catch(() => null),
        () => t.unlinkat(_, R),
      );
    },
    link: async (_, R, O, N) => t.linkat(_, R, O, N),
    rename: async (_, R, O, N) => t.renameat(_, R, O, N),
    unlink: async (_, R) => t.unlinkat(_, R),
    rmdir: async (_, R) => t.rmdirat(_, R),
    lstat: (_, R) => S(_, R, ve),
    open: (_, R, O, N) => k(O, R, N),
    openBeneath: (_, R, O) => k(_, R, O),
    renameOut: async (_, R, O, N) => t.renameat(_, R, O.handle.fd, N),
    renameIn: async (_, R, O, N) => t.renameat(_.handle.fd, R, O, N),
    linkIn: async (_, R, O, N) => t.linkat(_.handle.fd, R, O, N),
    statIn: (_, R) => S(_.handle.fd, R, ve),
    openIn: async (_, R, O) => {
      let N = await u.open(d.join(_.realPath, R), (O & ~H.O_NOFOLLOW) | He | de);
      try {
        let [T, I] = await Promise.all([N.stat({ bigint: true }), S(_.handle.fd, R, ve)]);
        if (T.dev !== I.dev || T.ino !== I.ino)
          throw Object.assign(Error("not the file the held directory names"), { code: "ELOOP" });
        return N;
      } catch (T) {
        throw (await N.close().catch(() => {}), T);
      }
    },
    unlinkIn: async (_, R) => t.unlinkat(_.handle.fd, R),
  });
}
var pt = H.O_NOFOLLOW,
  $n = 0;
async function se(e, { gitRoot: t, realRoot: r }, o, u) {
  let { fs: d, path: k } = e,
    S = await d.lstat(r, { bigint: true }),
    _ = (O) => {
      let N = he(O, k.sep);
      if (u && N.length > 1) throw ee("WORKING_ANCHOR_UNAVAILABLE");
      return k.join(t, ...N);
    },
    R = (O) => {
      if (u) throw (he(O, k.sep), ee("WORKING_ANCHOR_UNAVAILABLE"));
      return _(O);
    };
  return {
    backend: "by_name",
    byNameReason: o,
    rootOnly: u,
    realRoot: r,
    mkdirp: async (O, N = mt) => {
      await d.mkdir(R(O), { recursive: true, mode: N }).catch((T) => {
        let I = E(T);
        throw I === "EEXIST" || I === "ENOTDIR" ? ee("WORKING_PARENT_NOT_DIRECTORY") : T;
      });
    },
    create: async (O, N, T) =>
      Ke(
        await d.open(R(O), Le | pt, T),
        N,
        T,
        () => d.lstat(R(O), { bigint: true }).catch(() => null),
        () => d.unlink(R(O)),
      ),
    link: async (O, N) => d.link(R(O), R(N)),
    rename: async (O, N) => d.rename(R(O), R(N)),
    unlink: async (O) => d.unlink(R(O)),
    rmdir: async (O) => {
      let N = R(O),
        T = he(O, k.sep).slice(0, -1).join("/"),
        I = (v) => {
          let L = E(v);
          throw L === "ENOTDIR" || L === "ELOOP" ? ee("WORKING_PARENT_NOT_DIRECTORY") : v;
        };
      if (T !== "" && (await We(e, r, T).catch(I))) throw ee("WORKING_PARENT_NOT_DIRECTORY");
      if (!(await d.lstat(N).catch(I)).isDirectory()) {
        let v = Error("not a directory");
        throw ((v.code = "ENOTDIR"), v);
      }
      await d.rmdir(N);
    },
    lstat: async (O) => (O === "" ? S : d.lstat(_(O), { bigint: true })),
    open: async (O, N) => {
      let T = Be(N);
      return d.open(Dn(T) ? R(O) : _(O), (T & ~$n) | pt | de);
    },
    holdOutside: async () => null,
    moveOut: async () => {
      throw ee("WORKING_ANCHOR_UNAVAILABLE");
    },
    moveIn: async () => {
      throw ee("WORKING_ANCHOR_UNAVAILABLE");
    },
    linkIn: async () => {
      throw ee("WORKING_ANCHOR_UNAVAILABLE");
    },
    statIn: async () => {
      throw ee("WORKING_ANCHOR_UNAVAILABLE");
    },
    openIn: async () => {
      throw ee("WORKING_ANCHOR_UNAVAILABLE");
    },
    unlinkIn: async () => {
      throw ee("WORKING_ANCHOR_UNAVAILABLE");
    },
    close: async () => {},
    [Symbol.asyncDispose]: async () => {},
  };
}
async function CI(e, t) {
  if (e.platform() === "windows") return se(e, t, "platform", false);
  if (a.CLAUDE_CODE_DIR_SYNC_DISABLE_ANCHORING) return se(e, t, "switched_off", false);
  switch (e.platform()) {
    case "windows":
      return se(e, t, "platform", false);
    case "linux":
    case "wsl": {
      let r = await e.fs.open(t.realRoot, ye);
      if (!(await ut(e, r, t.realRoot))) return await r.close(), se(e, t, "unstable_identity", true);
      if (await Mn(e, r)) return Wn(e, r, t.realRoot);
      return await r.close(), se(e, t, "no_procfs", true);
    }
    case "macos": {
      let r = Bn();
      if (r === null) return se(e, t, "no_ffi", true);
      if (!(await jn(e))) return se(e, t, "nofollow_any_unenforced", true);
      let o = await e.fs.open(t.realRoot, ye);
      try {
        if ((await e.fs.realpath(t.realRoot)) !== t.realRoot) throw xn();
        if (!(await ut(e, o, t.realRoot))) return await o.close(), se(e, t, "unstable_identity", true);
        return Kn(e, r, o, t.realRoot);
      } catch (u) {
        throw (await o.close().catch(() => {}), u);
      }
    }
    case "unknown":
      return se(e, t, "unsupported_platform", true);
  }
}
var $e = String.raw`\.sw[a-p]|\.un~|\.rej|\.save|\.tmp|\.temp|\.bak|\.old|\.orig|\.backup|\.~\d+~|~`;
var Yn = [".ssh", ".aws", ".azure", ".gnupg", ".kube", ".docker"],
  zn = [
    [".config", "git"],
    [".config", "gh"],
    [".config", "glab-cli"],
    [".config", "gcloud"],
    ["appdata", "roaming", "gcloud"],
    [".cargo", "credentials"],
    [".cargo", "credentials.toml"],
    [".gem", "credentials"],
    [".m2", "settings.xml"],
    [".gradle", "gradle.properties"],
    ["documents", "powershell", "profile.ps1"],
    ["documents", "windowspowershell", "profile.ps1"],
    [".config", "powershell", "profile.ps1"],
    [".claude", "settings.json"],
    [".claude", "settings.local.json"],
    ["appdata", "roaming", "github cli"],
    ["appdata", "roaming", "gh"],
    ["appdata", "roaming", "glab-cli"],
    ["appdata", "roaming", "gnupg"],
  ],
  Vn = [
    ".netrc",
    "_netrc",
    ".git-credentials",
    ".gitconfig",
    ".credentials.json",
    ".claude.json",
    ".envrc",
    ".mcp.json",
    ".npmrc",
    ".yarnrc",
    ".yarnrc.yml",
    ".pypirc",
    ".pgpass",
    ".my.cnf",
    ".mylogin.cnf",
    ".terraformrc",
    "terraform.rc",
    "credentials.tfrc.json",
    ".boto",
    ".s3cfg",
    "kubeconfig",
    "kubeconfig.yaml",
    "kubeconfig.yml",
    "kubeconfig.json",
    ".bashrc",
    ".bash_profile",
    ".bash_login",
    ".bash_logout",
    ".bash_aliases",
    ".profile",
    ".zshrc",
    ".zshenv",
    ".zprofile",
    ".zlogin",
    ".zlogout",
    "config.fish",
    "microsoft.powershell_profile.ps1",
    "microsoft.vscode_profile.ps1",
    "microsoft.powershellise_profile.ps1",
    ".bash_history",
    ".zsh_history",
    "fish_history",
    "consolehost_history.txt",
    ".python_history",
    ".node_repl_history",
    ".psql_history",
    ".mysql_history",
  ],
  Xn =
    /(?:\.(?:pem|key|p12|pfx|keystore|jks)|_(?:rsa|dsa|ecdsa|ed25519)(?:_sk(?:_rk(?:_.*)?)?)?|secrets?\.(?:ya?ml|json|toml))$/,
  Ee = ".env",
  Jn = ".claude.json",
  St = ["example", "sample", "template", "dist"],
  qn = new RegExp(`(?:${$e})$`, "i"),
  wt = 64,
  Zn = ".git",
  ht = "config";
function mmn(e) {
  let t = tr(e),
    r = t.map((u, d) => rr(u, { leadingDot: d === t.length - 1 })),
    o = r.at(-1) ?? [];
  return (
    r.some((u) => u.length > wt) ||
    r.some((u) => u.some((d) => Yn.includes(d))) ||
    zn.some((u) => nr(r, u)) ||
    o.some(or) ||
    (o.some(sr) && r.slice(0, -1).some((u) => u.some((d) => d.endsWith(Zn))))
  );
}
var Qn = new RegExp(`(?:\\.save\\.\\d+|${$e})$`, "i");
function yt(e) {
  let t = e;
  for (;;) {
    let r = t.replace(Qn, "");
    if (/^#.+#$/.test(r)) r = r.slice(1, -1);
    else if (r.startsWith(".#") && r.length > 2) r = r.slice(2);
    if (r === t) return t;
    t = r;
  }
}
function er(e) {
  let t = e.split("/"),
    r = t.at(-1) ?? "",
    o = t.slice(0, -1),
    u = o.map(yt),
    d = yt(r),
    k = (_) => _.replace(/^\.(?=.)/, ""),
    S = (_, R) => [..._, R].join("/");
  return te([S(o, d), S(o, k(r)), S(o, k(d)), S(u, r), S(u, d), S(u, k(d))]).filter((_) => _ !== e);
}
function vI(e) {
  return [e, ...er(e)].some(mmn);
}
function tr(e) {
  return e
    .split(D() === "windows" ? /[\\/]/ : "/")
    .filter((t) => t !== "")
    .map(Jl);
}
function nr(e, t) {
  return e.some((r, o) => t.every((u, d) => e[o + d]?.includes(u) === true));
}
function rr(e, { leadingDot: t = true } = {}) {
  let r = t ? [kt, Et, ir] : [kt, Et],
    o = (u, d) => {
      if (d.length === 0 || u.size > wt) return u;
      let k = te(d.flatMap((S) => r.map((_) => _(S)))).filter((S) => !u.has(S));
      return o(new Set([...u, ...k]), k);
    };
  return [...o(new Set([e]), [e])];
}
function kt(e) {
  let t = qn.exec(e);
  return t === null || t.index === 0 ? e : e.slice(0, t.index);
}
function Et(e) {
  return e.length > 2 && e.startsWith("#") && e.endsWith("#") ? e.slice(1, -1) : e;
}
function ir(e) {
  return e.replace(/^\.(?=.)/, "");
}
function or(e) {
  return (
    Vn.includes(e) ||
    Xn.test(e) ||
    e === Ee ||
    e.startsWith(`${Jn}.`) ||
    (e.startsWith(`${Ee}.`) && !St.includes(e.slice(Ee.length + 1))) ||
    ar(e) ||
    cr(e)
  );
}
function sr(e) {
  return e === ht || e.startsWith(`${ht}.`);
}
function ar(e) {
  return e.endsWith(Ee) && !Ot(e.slice(0, -Ee.length));
}
var lr = /^(.*)\.tfvars(?:\.json)?$/;
function cr(e) {
  let t = lr.exec(e)?.[1];
  return t !== void 0 && !Ot(t);
}
function Ot(e) {
  return St.includes(e.split(".").at(-1) ?? "");
}
function q9(e) {
  return e.normalize("NFC").toLowerCase().normalize("NFC");
}
var dr = /[\u017f\u212a\ufb00-\ufb06]/,
  ur = /[\u0131\u017f]/,
  fr = /[\u0131\u017f\u212a\u00df\u1e9e\ufb00-\ufb06]/;
function pr() {
  switch (D()) {
    case "windows":
    case "wsl":
      return ur;
    case "macos":
      return fr;
    default:
      return null;
  }
}
function oht(e) {
  return pr()?.test(e) ?? false;
}
var gr = /^\/mnt\/[a-z](?:\/|$)/i,
  mr = /^\/mnt(?:\/[a-z])?\/?$/i;
function gmn(e) {
  return D() === "wsl" && mr.test(e);
}
function iht(e) {
  switch (D()) {
    case "macos":
    case "windows":
      return true;
    case "wsl":
      return e !== void 0 && gr.test(e);
    default:
      return false;
  }
}
function Kwe(e) {
  return dr.test(e);
}
var Nt = /\p{Default_Ignorable_Code_Point}/gu,
  _r = /^[\x00-\x7f]*$/;
function Pz(e) {
  return e
    .replace(Nt, "")
    .normalize("NFKD")
    .toLowerCase()
    .toUpperCase()
    .toLowerCase()
    .replace(/i\u0307/g, "i")
    .replace(/\u03c2/g, "\u03C3")
    .normalize("NFC");
}
function G9(e) {
  return _r.test(e) ? e : e.replace(Nt, "").normalize("NFKC");
}
function hr(e, t) {
  if (t(e)) return true;
  let r = Pz(e);
  return r !== e && t(r);
}
function DX(e) {
  return hr(e, vI);
}
function Rt(e) {
  return e?.aborted === true;
}
function sht(e) {
  return new Promise((t) => {
    if (e === void 0) return;
    if (e.aborted) {
      t();
      return;
    }
    e.addEventListener("abort", () => t(), { once: true });
  });
}
import * as yr from "fs/promises";
import * as kr from "path";
function Bv(e = {}) {
  return { fs: yr, path: kr, platform: () => D(), ...e };
}
import { realpath as ze, stat as Er } from "fs/promises";
import { dirname as Tt, isAbsolute as Dt, join as br, sep as Ye } from "path";
var Ve = 15000,
  Sr = 8 * Ve,
  wr = 16777216,
  It = ["dirsync.pinprobe", "true"],
  Rr = new J(() => ({ laptop: new Map() }));
function Xwe(e) {
  let t = Rr.of(G().host).laptop,
    r = b([e, ...Lt()]),
    o = t.get(r);
  if (o !== void 0) return o;
  let u = { pins: { kind: "refused", why: "unread" }, settled: false },
    d = jt(Nr(e), Sr)
      .then((k) => k ?? u)
      .catch((k) => (h(k), { pins: { kind: "refused", why: "unexpected" }, settled: false }))
      .then((k) => {
        let S = r !== b([e, ...Lt()]);
        if (!k.settled || S) t.delete(r);
        return Fr(k), S ? u.pins : k.pins;
      });
  return t.set(r, d), d;
}
var Or =
  "GIT_CONFIG_GLOBAL GIT_CONFIG_SYSTEM GIT_CONFIG_NOSYSTEM HOME XDG_CONFIG_HOME HOMEDRIVE HOMEPATH USERPROFILE PROGRAMDATA PATH";
function Lt() {
  let e = TM(void 0);
  return Or.split(" ").map((t) => Gd(e, t) ?? null);
}
function x6t(e, { filterDriversOff: t }) {
  return e.names === null ? null : { ...e.layout, ...Ct([...e.names.hookPairs, ...(t ? e.names.filterPairs : [])]) };
}
function Ct(e) {
  return e.length === 0
    ? {}
    : Object.fromEntries([
        ["GIT_CONFIG_COUNT", String(e.length)],
        ...e.flatMap(([t, r], o) => [
          [`GIT_CONFIG_KEY_${o}`, t],
          [`GIT_CONFIG_VALUE_${o}`, r],
        ]),
      ]);
}
async function Nr(e) {
  let t = await ze(e).catch(() => null);
  if (t === null)
    return (
      n(`[dirSync] could not resolve ${e} itself; not running git there this time`),
      { pins: { kind: "refused", why: "unread" }, settled: false }
    );
  let r = wM(e, cH()),
    o = await q7n(e, t),
    u = o === null ? "unread" : await G7n(t, o);
  if (u === "unread")
    return (
      n(`[dirSync] could not examine ${e}'s .git just now; not running git there this time`),
      { pins: { kind: "refused", why: "unread" }, settled: false }
    );
  if (u === "refuse" || u === "refuse_common")
    return (
      n(
        `[dirSync] refusing to run git in ${e}: its .git (or the commondir it names) is not a shape git makes, or names a path that runs through the tree or must not be touched`,
        { level: "warn" },
      ),
      { pins: { kind: "refused", why: u === "refuse" ? "git_dir" : "common_dir" }, settled: true }
    );
  let d = await WVe(e, u, t),
    k = d === null ? null : await EOe(r, d, void 0, { secondNames: false }),
    S = k === false ? await ze(r).catch(() => null) : null;
  if (k === null || (k === false && S === null))
    return (
      n(`[dirSync] could not judge or resolve the git executable (${r}); not running git in ${e} this time`),
      { pins: { kind: "refused", why: "unread" }, settled: false }
    );
  if (k || [r, S].some((N) => N !== null && (gT(e, N) || gT(t, N))))
    return (
      n(
        `[dirSync] refusing to run git in ${e}: the git executable (${r}) lies inside the checkout or is reached through it`,
        { level: "warn" },
      ),
      { pins: { kind: "refused", why: "included_config" }, settled: true }
    );
  let _ = await K9(e, AbortSignal.timeout(Ve), { linkedTrees: true }),
    R = async (N) => {
      let T = await vr(e, N, t);
      if (T?.kind === "contributes")
        return (
          n(
            `[dirSync] refusing to run git in ${e}: ${T.file} contributes to its configuration (or would) and is, or could become, the session's to write`,
            { level: "warn" },
          ),
          { kind: "refused", why: "included_config" }
        );
      if (T?.kind === "unpinnable")
        return (
          n(
            `[dirSync] refusing to run git in ${e}: this git does not take configuration from the environment (older than 2.31), so no hook or filter driver could be switched off by name`,
            { level: "warn" },
          ),
          { kind: "refused", why: "old_git" }
        );
      if (T?.kind === "unexpandable")
        return (
          n(
            `[dirSync] refusing to run git in ${e}: an include names a file this read cannot follow (another user's home git could not expand, or a file this user may not read)`,
            { level: "warn" },
          ),
          { kind: "refused", why: "unexpandable_include" }
        );
      if (T?.kind === "unbounded")
        return (
          n(
            `[dirSync] refusing to run git in ${e}: its include chain is longer than this read follows (over ${Wt} files or ${Mt} deep)`,
            { level: "warn" },
          ),
          { kind: "refused", why: "too_many_includes" }
        );
      if (T?.kind === "not_text")
        return (
          n(
            `[dirSync] refusing to run git in ${e}: a configured hook or filter driver, or a configuration file's path, is not valid UTF-8 and cannot be named back to git`,
            { level: "warn" },
          ),
          { kind: "refused", why: "not_text" }
        );
      if (T === null) n(`[dirSync] configuration of ${e} unread; not running git there this time`);
      return { kind: "pinned", layout: N, names: T?.names ?? null };
    },
    O = (N) => ({ pins: N, settled: N.kind !== "pinned" || N.names !== null });
  switch (_.kind) {
    case "read":
      if (!PVe(_.layout.checkout))
        return (
          n(
            `[dirSync] not running git in ${e}: a linked working tree (directory sync does not run its own git in one yet)`,
          ),
          { pins: { kind: "refused", why: "linked_worktree" }, settled: true }
        );
      return O(await R(Dr(_.layout)));
    case "failed":
      return (
        n(`[dirSync] git layout of ${e} unread (${_.detail}); not running git there`),
        _.detail === L6t
          ? { pins: { kind: "refused", why: "not_text" }, settled: true }
          : { pins: { kind: "refused", why: "unread" }, settled: false }
      );
    case "tampered":
      if (_.commonDir.startsWith("--path-format=")) return { pins: { kind: "refused", why: "old_git" }, settled: true };
      switch (_.misplaced) {
        case "git_dir":
        case "common_dir":
          return (
            n(
              `[dirSync] refusing to run git in ${e}: its ${_.misplaced === "git_dir" ? "git dir" : "common dir"} is not where git keeps it for this checkout`,
              { level: "warn" },
            ),
            { pins: { kind: "refused", why: _.misplaced }, settled: true }
          );
        case "git_file":
        case "linked_worktree":
          return (
            n(
              `[dirSync] refusing to run git in ${e}: its .git file does not name a linked working tree this build vouches for (${_.misplaced === "linked_worktree" ? (_.detail ?? "unverified") : "not a linked working tree"})`,
              { level: "warn" },
            ),
            { pins: { kind: "refused", why: _.misplaced === "git_file" ? "submodule" : "git_dir" }, settled: true }
          );
        case "included_config":
          return (
            n(
              `[dirSync] refusing to run git in ${e}: a configuration file inside the work tree contributes to its configuration`,
              { level: "warn" },
            ),
            { pins: { kind: "refused", why: "included_config" }, settled: true }
          );
        case "many_includes":
          return (
            n(`[dirSync] refusing to run git in ${e}: its configuration includes more files than are followed`, {
              level: "warn",
            }),
            { pins: { kind: "refused", why: "too_many_includes" }, settled: true }
          );
        case "old_git":
        case "borrowed_objects":
        case "reftable":
        case "temp_root":
          return (
            n(`[dirSync] refusing to run git in ${e}: the checkout is not supported (${_.misplaced})`, {
              level: "warn",
            }),
            { pins: { kind: "refused", why: _.misplaced }, settled: true }
          );
        case "work_tree":
          return _.commonDir === _.gitDir
            ? O(await R({ GIT_DIR: _.gitDir, GIT_COMMON_DIR: _.gitDir }))
            : { pins: { kind: "refused", why: "common_dir" }, settled: true };
      }
  }
}
var Gt = String.raw`^(include|includeif\..*)\.path$`,
  xt = new RegExp(Gt, "s"),
  Tr = /^hook\.(.*)\.(?:command|event|enabled)$/s,
  Ir = /^filter\.(.*)\.(?:clean|smudge|process|required)$/s,
  Mt = 8,
  Wt = 128;
async function vr(e, t, r) {
  let o = TM(void 0),
    u = (P, A = false) =>
      qe(cH(), [...cn, ...P], {
        cwd: e,
        env: { ...Ar(t, o), ...Ct([It]), LC_ALL: "C", LANGUAGE: "C" },
        extendEnv: false,
        timeout: Ve,
        maxBuffer: wr,
        stdin: "ignore",
        preserveOutputOnError: A,
      }),
    d = async (P) => {
      let [A, K] = await Promise.all([
          u(["config", "-z", "--show-origin", ...P, "--list"], true),
          u(["config", "-z", "--show-origin", "--type=path", ...P, "--get-regexp", Gt]),
        ]),
        ae = P.length > 0 && A.exitCode === 128 && /bad config/.test(A.stderr);
      if (P.length > 0 && A.exitCode === 128 && /permission denied/i.test(A.stderr)) return { unexpandable: true };
      if ((A.code !== 0 && !ae) || (K.code !== 0 && K.exitCode === void 0)) return null;
      let re = ae ? [] : At(A.stdout);
      if (r !== null && K.code !== 0 && re.some(({ key: W, value: q }) => xt.test(W) && /^~[^/]+\//.test(q)))
        return { unexpandable: true };
      return {
        keys: re,
        targets: [
          ...re.filter(({ key: W }) => xt.test(W)).flatMap(({ origin: W, value: q }) => Pt(q, W, e, O, o)),
          ...(K.code === 0 ? At(K.stdout).flatMap(({ origin: W, value: q }) => Pt(q, W, e, O, o)) : []),
        ],
      };
    },
    k = (P) => (r === null ? Promise.resolve(null) : u(P)),
    [S, _, R] = await Promise.all([
      k(["var", "GIT_CONFIG_GLOBAL"]),
      k(["var", "GIT_CONFIG_SYSTEM"]),
      k(["--exec-path"]),
    ]);
  if ([S, _, R].some((P) => P !== null && P.code !== 0 && P.exitCode === void 0)) return null;
  let O = R?.code === 0 ? Tt(Tt(R.stdout.trim())) : null,
    N = await d([]);
  if (N === null) return null;
  if ("unexpandable" in N) return { kind: "unexpandable" };
  if (!N.keys.some(({ origin: P, key: A }) => P === "command line:" && A === It[0])) return { kind: "unpinnable" };
  let T = r === null ? null : await WVe(e, t, r);
  if (r !== null && T === null) return null;
  let I = (P) => (T === null ? Promise.resolve(void 0) : pht(T, P)),
    v = [
      ...N.keys.map(({ origin: P }) => xr(P, e)),
      ...(T === null
        ? []
        : I6t(
            [S, _].flatMap((P) =>
              P?.code === 0
                ? P.stdout.split(`
`)
                : [],
            ),
            e,
            O,
            o,
          )),
    ],
    L = (P) => P?.includes("\uFFFD") ?? false;
  if (v.some(L)) return { kind: "not_text" };
  if (T !== null) {
    let P = wM(e, cH()),
      A = await EOe(P, T, void 0, { secondNames: false });
    if (A !== false) return A === null ? null : { kind: "contributes", file: P };
    let K = await ze(P).catch(() => null);
    if (K === null) return null;
    let ae = [P, K].find((re) => T.roots.some((W) => gT(W, re)));
    if (ae !== void 0) return { kind: "contributes", file: ae };
  }
  let F = await I(v);
  if (F !== void 0) return F === null ? null : { kind: "contributes", file: F };
  let x = T === null ? { keys: [] } : await Lr(N.targets, (P) => d(["--file", P]), I);
  if (x === null) return null;
  if ("notText" in x) return { kind: "not_text" };
  if ("unbounded" in x) return { kind: "unbounded" };
  if ("unexpandable" in x) return { kind: "unexpandable" };
  if ("contributes" in x) return { kind: "contributes", file: x.contributes };
  let M = [...N.keys, ...x.keys],
    C = (P) =>
      te(
        M.flatMap(({ key: A }) => {
          let K = P.exec(A)?.[1];
          return K === void 0 ? [] : [K];
        }),
      ),
    U = C(Tr),
    oe = C(Ir);
  if ([...U, ...oe].some(L)) return { kind: "not_text" };
  return {
    kind: "names",
    names: {
      hookPairs: U.flatMap((P) => [
        [`hook.${P}.enabled`, "false"],
        [`hook.${P}.event`, ""],
      ]),
      filterPairs: oe.flatMap((P) => [
        [`filter.${P}.clean`, ""],
        [`filter.${P}.smudge`, ""],
        [`filter.${P}.process`, ""],
        [`filter.${P}.required`, "false"],
      ]),
    },
  };
}
async function Lr(e, t, r) {
  let o = (S) => typeof S === "string",
    u = new Set(e.filter(o)),
    d = [],
    k = [...u];
  for (let S = 0; k.length > 0; S += 1) {
    if (S === Mt || u.size > Wt) return { unbounded: true };
    if (k.some((T) => T.includes("\uFFFD"))) return { notText: true };
    let _ = await r(k);
    if (_ !== void 0) return _ === null ? null : { contributes: _ };
    let R = await Promise.all(
      k.map((T) =>
        Er(T).then(
          (I) => (I.isFile() ? T : null),
          (I) => {
            let v = E(I);
            return v === "ENOENT" || v === "ENOTDIR" ? null : void 0;
          },
        ),
      ),
    );
    if (R.includes(void 0)) return null;
    let O = await Promise.all(R.filter(o).map(t));
    if (O.some((T) => T === null)) return null;
    if (O.some((T) => T !== null && "unexpandable" in T)) return { unexpandable: true };
    let N = O.filter((T) => T !== null && "keys" in T);
    d.push(...N.flatMap((T) => T.keys)),
      (k = te(N.flatMap((T) => T.targets).filter(o)).filter((T) => !u.has(T))),
      k.forEach((T) => u.add(T));
  }
  return { keys: d };
}
function At(e) {
  let t = e.split("\x00");
  return Array.from({ length: Math.floor(t.length / 2) }, (r, o) => {
    let u = t[2 * o + 1],
      d = u.indexOf(`
`);
    return { origin: t[2 * o], key: d < 0 ? u : u.slice(0, d), value: d < 0 ? "" : u.slice(d + 1) };
  });
}
function Pt(e, t, r, o, u) {
  let d = /^~[^/]*\//.exec(e);
  return (
    d !== null
      ? dht(u).map((S) => `${S}${Ye}${e.slice(d[0].length)}`)
      : e.startsWith("%(prefix)/")
        ? [...(o === null ? [] : [`${o}${Ye}${e.slice(10)}`]), `.${Ye}${e}`]
        : [e]
  )
    .map((S) => O6t(S, t, r))
    .filter((S) => Dt(S));
}
function xr(e, t) {
  return e.startsWith("file:") ? wM(t, e.slice(5)) : null;
}
function Ar(e, t) {
  let r = Gd(t, "GIT_CONFIG_GLOBAL"),
    o = Gd(t, "GIT_CONFIG_SYSTEM");
  return {
    ...ii(
      { ...(r === void 0 ? {} : { GIT_CONFIG_GLOBAL: r }), ...(o === void 0 ? {} : { GIT_CONFIG_SYSTEM: o }), ...e },
      t,
    ),
    GIT_CONFIG: void 0,
  };
}
function cH() {
  let e = mht(TM(void 0));
  if (e === null) {
    if (AI().sayGitNotOnStartPath())
      n("[dirSync] git is not on the absolute entries of the PATH this process was started with; no sync git runs", {
        level: "warn",
      }),
        s("tengu_dir_sync_git_not_on_start_path", {});
    return Pr();
  }
  return e;
}
function Pr() {
  return "/nonexistent/git-not-on-the-PATH-this-process-was-started-with";
}
function Fr(e) {
  try {
    s("tengu_dir_sync_git_layout", {
      outcome: c(e.pins.kind),
      refused: c(e.pins.kind === "refused" ? e.pins.why : "none"),
      work_tree_pinned: e.pins.kind === "pinned" && "GIT_WORK_TREE" in e.pins.layout,
      names_read: e.pins.kind === "pinned" && e.pins.names !== null,
      settled: e.settled,
    });
  } catch {}
}
function Dr(e) {
  return { GIT_DIR: e.gitDir, GIT_COMMON_DIR: e.commonDir, GIT_WORK_TREE: e.workTree };
}
import { lstat as Ht, open as Cr, realpath as Bt } from "fs/promises";
import { isAbsolute as Gr, join as Ut, relative as Mr, sep as Wr } from "path";
function Xe(e) {
  return e.kind === "bundle" ? e.scope : void 0;
}
var Hr = 1,
  Br = 2,
  Ywe = 190,
  z9 = new Set(["node_modules", "venv", ".venv", "__pycache__", "build", "dist", "target", "vendor"]),
  jr = 5,
  Jwe = 104857600,
  Ur = 16777216,
  Kt = 8;
function D7n(e) {
  return e.overlay !== void 0 || (e.removed?.length ?? 0) > 0 || e.files.some((t) => t.base !== void 0) ? Br : Hr;
}
async function Ml(e, t, r, o = Ur, u = {}, d, { filterDriversOff: k = false } = {}) {
  let S = await Xwe(e),
    _ = S.kind === "pinned" ? x6t(S, { filterDriversOff: k }) : null;
  if (_ === null) return { code: 1, stdout: "" };
  return qe(cH(), [...mne, ...t], {
    cwd: e,
    abortSignal: r,
    maxBuffer: o,
    extendEnv: false,
    env: hmn(gne({ ..._, ...u })),
    ...(d !== void 0 && { input: d }),
  });
}
function hmn(e) {
  let t = new Set(["GIT_CONFIG", "GIT_ATTR_SOURCE"]);
  return {
    ...e,
    ...Object.fromEntries(
      Object.keys(e)
        .filter((r) => t.has(r.toUpperCase()))
        .map((r) => [r, void 0]),
    ),
    GIT_CONFIG: void 0,
    GIT_ATTR_SOURCE: void 0,
  };
}
var mne = [...cn, "-c", "safe.bareRepository=explicit", "-c", "submodule.recurse=false"];
function gne(e = {}) {
  let t = TM(void 0),
    r = Gd(t, "GIT_CONFIG_GLOBAL"),
    o = Gd(t, "GIT_CONFIG_SYSTEM");
  return {
    ...ii(
      {
        ...(r === void 0 ? {} : { GIT_CONFIG_GLOBAL: r }),
        ...(o === void 0 ? {} : { GIT_CONFIG_SYSTEM: o }),
        ...Kr,
        ...e,
      },
      t,
    ),
    GIT_CONFIG: void 0,
  };
}
var Kr = { GIT_ALLOW_PROTOCOL: "none", GIT_NO_LAZY_FETCH: "1", GIT_TERMINAL_PROMPT: "0" };
function yOe(e) {
  let t = G9(e);
  return t === e ? [e] : [e, t];
}
function aht(e, t = false) {
  let r = yOe(e);
  return r.some((o) => vk(o) || ((!t || r.length > 1) && SOe(o)));
}
function Dz(e, t, r = () => null, o = () => false) {
  return e.reduce(
    (u, d) => {
      let k = t(d),
        S = yOe(k);
      if (S.some(vk)) u.filtered.push(d);
      else if ((!o(d) || S.length > 1) && S.some(SOe)) u.dependency.push(d);
      else {
        let _ = r(d);
        if (_ === null) u.eligible.push(d);
        else u.withheld.push({ item: d, reason: _ });
      }
      return u;
    },
    { eligible: [], filtered: [], dependency: [], withheld: [] },
  );
}
async function Rk(e) {
  try {
    return await Bt(e);
  } catch {
    return null;
  }
}
async function O7n(e, t) {
  let r = await Ml(e, ["rev-parse", "--verify", "HEAD"], t);
  return r.code === 0 ? r.stdout.trim() : null;
}
async function $r(e, t) {
  let r = await Ml(e, ["ls-files", "--others", "--exclude-standard", "-z"], t);
  if (r.code !== 0) return null;
  return r.stdout.split("\x00").filter((o) => o.length > 0);
}
function Qwe(e) {
  if (e.isSymbolicLink()) return "symlink";
  if (!e.isFile()) return "not_regular_file";
  if (e.nlink > 1) return "hard_link";
  if (e.size > Lm) return "too_large";
  return null;
}
async function Yr(e, t) {
  try {
    let r = await Ht(Ut(e, t)),
      o = Qwe(r);
    if (o !== null) return { kind: "skip", skipped: { path: t, reason: o } };
    return { kind: "candidate", candidate: { path: t, size: r.size } };
  } catch {
    return { kind: "skip", skipped: { path: t, reason: "unreadable" } };
  }
}
function zr(e) {
  return e === "" || e === ".." || e.startsWith(`..${Wr}`) || Gr(e);
}
function SOe(e) {
  return e
    .split("/")
    .slice(0, -1)
    .some((t) => z9.has(t));
}
function Vr(e, t) {
  if (e.size !== t.size) return e.size - t.size;
  return e.path < t.path ? -1 : e.path > t.path ? 1 : 0;
}
async function hne(e, t) {
  let r = Buffer.allocUnsafe(t),
    o = 0;
  while (o < t) {
    let { bytesRead: u } = await e.read(r, o, t - o, o);
    if (u === 0) break;
    o += u;
  }
  return r.subarray(0, o);
}
async function OF(e, t, r, o = null) {
  try {
    if (o !== null && o.backend !== "by_name") return await Xr(o, r);
    if (o?.rootOnly && r.includes("/")) return { kind: "skip", skipped: { path: r, reason: "unreadable" } };
    let u = Ut(e, r),
      d = await Ht(u, { bigint: true }),
      k = Qwe(d);
    if (k !== null) return { kind: "skip", skipped: { path: r, reason: k } };
    if (zr(Mr(t, await Bt(u)))) return { kind: "skip", skipped: { path: r, reason: "outside_root" } };
    let S = await Cr(u, ea());
    try {
      let _ = await S.stat({ bigint: true });
      if (_.dev !== d.dev || _.ino !== d.ino) return { kind: "skip", skipped: { path: r, reason: "changed" } };
      if (_.size > Lm) return { kind: "skip", skipped: { path: r, reason: "too_large" } };
      return { kind: "read", content: await hne(S, Number(_.size)), mode: Number(_.mode) & 511 };
    } finally {
      await S.close();
    }
  } catch (u) {
    let d = E(u);
    return {
      kind: "skip",
      skipped: {
        path: r,
        reason: d === "ELOOP" || d === "EMLINK" || d === "WORKING_PARENT_NOT_DIRECTORY" ? "symlink" : "unreadable",
      },
    };
  }
}
async function Xr(e, t) {
  let r = await e.open(t, ea());
  try {
    let o = await r.stat({ bigint: true }),
      u = Qwe(o);
    if (u !== null) return { kind: "skip", skipped: { path: t, reason: u } };
    return { kind: "read", content: await hne(r, Number(o.size)), mode: Number(o.mode) & 511 };
  } finally {
    await r.close();
  }
}
async function Jr(e, t, r, o) {
  let u = await OF(e, t, r, o);
  if (u.kind === "skip") return u;
  return { kind: "hashed", file: { path: r, sha256: Nn(u.content), size: u.content.length, mode: u.mode } };
}
function B(e, t) {
  return Q(e, (r) => r.reason === t);
}
async function kk(e, t) {
  try {
    return await Promise.all(e);
  } catch (r) {
    if (Rt(t)) return null;
    throw r;
  }
}
function $Ve(e, t, r, o = "seed") {
  return (
    s("tengu_dir_sync_inventory", {
      outcome: c(e),
      origin_kind: c(t.kind),
      bundle_scope: ke(Xe(t)),
      duration_ms: Date.now() - r,
      ...(o !== "seed" && { purpose: c(o) }),
    }),
    { ok: false, reason: e }
  );
}
function UVe(e, t, r, o, u = "seed") {
  return (
    s("tengu_dir_sync_inventory", {
      outcome: w("refused"),
      refusal: c(e),
      refused_count: t,
      origin_kind: c(r.kind),
      bundle_scope: ke(Xe(r)),
      duration_ms: Date.now() - o,
      ...(u !== "seed" && { purpose: c(u) }),
    }),
    { ok: false, reason: "refused", refusal: e, count: t }
  );
}
function qr(e) {
  return {
    skipped_filtered: B(e, "filtered"),
    skipped_dependency_dir: B(e, "dependency_dir"),
    skipped_sensitive: B(e, "sensitive"),
    skipped_sensitive_tracked: B(e, "sensitive_tracked"),
    skipped_read_denied: B(e, "read_denied"),
    skipped_rules_unreadable: B(e, "rules_unreadable"),
    skipped_too_large: B(e, "too_large"),
    skipped_symlink: B(e, "symlink"),
    skipped_hard_link: B(e, "hard_link"),
    skipped_outside_root: B(e, "outside_root"),
    skipped_changed: B(e, "changed"),
    skipped_not_regular_file: B(e, "not_regular_file"),
    skipped_lane_path: B(e, "lane_path"),
    skipped_over_budget: B(e, "over_budget"),
    skipped_left_behind: B(e, "left_behind"),
    skipped_unreadable: B(e, "unreadable"),
    skipped_unpushed_only: B(e, "unpushed_only"),
    skipped_ignored: B(e, "ignored"),
    skipped_content_filter: B(e, "content_filter"),
  };
}
function L7n(
  e,
  { untrackedCount: t, trackedCount: r, removedCount: o, overlayBytes: u, untrackedLeftBehind: d, purpose: k = "seed" },
  S,
) {
  s("tengu_dir_sync_inventory", {
    outcome: w("ok"),
    ...(k !== "seed" && { purpose: c(k) }),
    origin_kind: c(e.originKind),
    bundle_scope: ke(e.bundleScope),
    untracked_count: t,
    carried_count: e.files.length,
    carried_bytes: e.files.reduce((_, R) => _ + R.size, 0),
    ...(r !== void 0 && { tracked_count: r }),
    ...(o !== void 0 && { removed_count: o }),
    ...(u !== void 0 && { overlay_bytes: u }),
    ...(d !== void 0 && { untracked_left_behind: c(d) }),
    ...qr(e.skipped),
    duration_ms: Date.now() - S,
  });
}
async function _mn({
  gitRoot: e,
  realRoot: t,
  signal: r,
  uploadFilter: o,
  rowBudget: u = Ywe,
  alreadyJudged: d,
  filterAttributed: k,
}) {
  let S = await $r(e, r);
  if (S === null) return { kind: "failed", reason: Rt(r) ? "aborted" : "ls_files_failed" };
  let _ = d === void 0 || d.size === 0 ? S : S.filter((A) => !d.has(A)),
    R = Dz(
      _,
      (A) => A,
      (A) => o(A, false),
    ),
    [O, N] = hO(R.eligible, (A) => !A.endsWith("/") && DF(A) !== null),
    T = [
      ...R.filtered.map((A) => ({ path: A, reason: "filtered" })),
      ...R.dependency.map((A) => ({ path: A, reason: "dependency_dir" })),
      ...R.withheld.map(({ item: A, reason: K }) => ({ path: A, reason: K })),
      ...O.map((A) => ({ path: A, reason: "lane_path" })),
    ],
    [I, v] = hO(N, (A) => A.endsWith("/"));
  if (v.length > Ywe * jr) {
    if (Rt(r)) return { kind: "failed", reason: "aborted" };
    return {
      kind: "too_many_untracked",
      untrackedCount: _.length,
      eligibleUntrackedCount: v.length,
      eligiblePaths: v,
      nameSkips: [...T, ...I.map((A) => ({ path: A, reason: "lane_path" }))],
    };
  }
  let L = k === void 0 ? new Set() : await k(N, r);
  if (L === null) return { kind: "failed", reason: Rt(r) ? "aborted" : "attributes_unreadable" };
  let [F, x] = hO(N, (A) => L.has(A)),
    M = [...T, ...F.map((A) => ({ path: A, reason: "content_filter" }))],
    C = No(Kt, async (A) => (r?.throwIfAborted(), Yr(e, A))),
    U = await kk(x.map(C), r);
  if (U === null) return { kind: "failed", reason: "aborted" };
  let oe = Math.max(0, u),
    P = U.flatMap((A) => (A.kind === "candidate" ? [A.candidate] : [])).toSorted(Vr);
  return {
    kind: "candidates",
    untrackedCount: _.length,
    eligibleUntrackedCount: x.length,
    nameSkips: M,
    statSkips: U.flatMap((A) => (A.kind === "skip" ? [A.skipped] : [])),
    chosen: P.slice(0, oe),
    overBudget: P.slice(oe),
  };
}
async function M7n({
  gitRoot: e,
  realRoot: t,
  anchor: r,
  signal: o,
  uploadFilter: u,
  rowBudget: d,
  alreadyJudged: k,
  filterAttributed: S,
}) {
  let _ = await _mn({
    gitRoot: e,
    realRoot: t,
    signal: o,
    uploadFilter: u,
    rowBudget: d,
    alreadyJudged: k,
    filterAttributed: S,
  });
  if (_.kind === "failed") return _;
  if (_.kind === "too_many_untracked")
    return { kind: "too_many", untrackedCount: _.untrackedCount, eligiblePaths: _.eligiblePaths, skipped: _.nameSkips };
  let R = No(Kt, async (N) => (o?.throwIfAborted(), Jr(e, t, N, r))),
    O = await kk(
      _.chosen.map((N) => R(N.path)),
      o,
    );
  if (O === null || Rt(o)) return { kind: "failed", reason: "aborted" };
  return {
    kind: "listed",
    untrackedCount: _.untrackedCount,
    files: O.flatMap((N) => (N.kind === "hashed" ? [N.file] : [])),
    skipped: [
      ..._.nameSkips,
      ..._.statSkips,
      ..._.overBudget.map((N) => ({ path: N.path, reason: "over_budget" })),
      ...O.flatMap((N) => (N.kind === "skip" ? [N.skipped] : [])),
    ],
  };
}
function N7n(e, t = Jwe) {
  let r =
    t < Jwe
      ? `the ${Ft(Math.max(0, t))} left for them at start (a cloud session takes ${Ft(Jwe)} in all, and your tracked changes and unpushed commits use the rest)`
      : `the ${Ft(Jwe)} a cloud session can take at start`;
  return `${Ft(e)} of untracked files exceed ${r}; add a .gitignore entry or commit the ones you need`;
}
function F7n(e, t) {
  return `${e} untracked ${e === 1 ? "file" : "files"} did not fit: after your tracked changes a cloud session can take only ${t} more at start (${Ywe} in all); add a .gitignore entry or commit the ones you need`;
}
function $7n(e) {
  return `${e} untracked files are more than the ${Ywe} a cloud session can take at start; add a .gitignore entry or commit the ones you need`;
}
function M2() {
  let e = D();
  return e === "windows" || e === "wsl";
}
var Zr = /^(con|prn|aux|nul|com[1-9\u00B9\u00B2\u00B3]|lpt[1-9\u00B9\u00B2\u00B3])(\..*)?$/i;
function LE(e) {
  return e.split("/").some((t) => t.includes(":") || t.endsWith(".") || t.endsWith(" ") || Zr.test(t));
}
var Qr = /^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;
function ymn(e) {
  let t = e.indexOf(":");
  return (t < 0 ? e : e.slice(0, t)).replace(/[. ]+$/, "");
}
function OX(e) {
  return e.split("/").some((t) => Qr.test(ymn(t)));
}
var tn = /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/,
  ei = /^0+$/;
function _ne(e) {
  return !ei.test(e);
}
var N2 = "refs/claude/",
  ti = 255,
  ni = /^refs(?:\/(?!\.)[A-Za-z0-9._-]+)+$/;
function BVe(e) {
  return (
    e.length <= ti &&
    ni.test(e) &&
    !e.includes("..") &&
    e.split("/").every((t) => !t.endsWith(".") && !t.endsWith(".lock"))
  );
}
function UD(e) {
  return e.startsWith(N2) && BVe(e);
}
var lht = /^[0-9a-f]{40}$/,
  ri = /^([0-7]{6}) ([a-z]+) ([0-9a-f]+)\t(.+)$/s,
  oi = new Set(["100644", "100755"]);
function Smn(e) {
  let t = [],
    r = [];
  for (let d of e.split("\x00")) {
    let [, k, S, _, R] = ri.exec(d) ?? [];
    if (k === void 0 || S === void 0 || _ === void 0 || R === void 0) continue;
    if (S === "blob" && oi.has(k) && tn.test(_)) t.push({ path: R, blobId: _, mode: parseInt(k, 8) & 511 });
    r.push(R);
  }
  let o = new Set(r),
    u = r.every((d, k) => k === 0 || r[k - 1] < d);
  return { files: t, entries: o, sortedEntries: u ? r : [...o].sort() };
}
function U7n(e) {
  return Smn(e).files;
}
var bmn = [2000, 5000, 1e4, 20000, 40000, 60000],
  B7n = bmn.reduce((e, t) => e + t, 0),
  ey = 16,
  ME = 32,
  jVe = 512,
  wmn = 1024,
  sC = 64,
  V9 = 16,
  LX = 16,
  Tmn = [
    "dot_path",
    "ignored_here",
    "credential_name",
    "read_denied",
    "rules_unreadable",
    "too_large",
    "unreadable",
    "unverified_object",
    "outside_checkout",
    "name_refused",
    "protected_name",
    "case_collision",
    "not_regular_file",
    "trash_refused",
    "changed_here",
    "stale_basis",
    "deferred",
    "held_delete",
    "other",
  ],
  Rue = 255,
  si = 255,
  j7n = 512,
  ai = /[\x00-\x20\x7f~^:?*[\\]/,
  li = /[\p{Cc}\p{Cf}\uFFFD]/u,
  ci = 250;
function BD(e) {
  return Buffer.byteLength(e, "utf8") <= si && Emn(e);
}
function Emn(e) {
  return (
    e.length > 0 &&
    e.length <= Rue &&
    e !== "@" &&
    e !== "HEAD" &&
    ku(e) &&
    !ai.test(e) &&
    !li.test(e) &&
    !e.startsWith("-") &&
    !e.endsWith(".") &&
    !e.includes("..") &&
    !e.includes("@{") &&
    e
      .split("/")
      .every((t) => t !== "" && !t.startsWith(".") && !t.endsWith(".lock") && Buffer.byteLength(t, "utf8") <= ci)
  );
}
function W7n({ isMonorepo: e, gitRoot: t, gitUsable: r }) {
  if (e) return { engine: "none", reason: "monorepo" };
  if (t === null) return { engine: "git" };
  return r ? { engine: "git" } : { engine: "none", reason: "git_unusable" };
}
function cht(e) {
  return Tmn.includes(e);
}
var uht = 2;
export {
  omn,
  l_r,
  b7n,
  c_r,
  wue,
  AI,
  imn,
  smn,
  zwe,
  Vwe,
  PVe,
  PX,
  w7n,
  nht,
  bM,
  T7n,
  Tue,
  pne,
  Eue,
  mOe,
  k6t,
  DVe,
  OVe,
  E7n,
  LVe,
  A7n,
  C7n,
  amn,
  lmn,
  v7n,
  H6t,
  R7n,
  cmn,
  $D,
  DF,
  gOe,
  Aue,
  k7n,
  H7n,
  MVe,
  Iz,
  Lm,
  x7n,
  I7n,
  u_r,
  d_r,
  p_r,
  f_r,
  m_r,
  g_r,
  NVe,
  umn,
  WCr,
  qCr,
  GCr,
  zCr,
  VCr,
  Cue,
  hOe,
  vk,
  rht,
  FVe,
  h_r,
  __r,
  fne,
  L2,
  vue,
  _Oe,
  KCr,
  y_r,
  XCr,
  S_r,
  YCr,
  b_r,
  dmn,
  pmn,
  fmn,
  P7n,
  CI,
  mmn,
  vI,
  q9,
  oht,
  gmn,
  iht,
  Kwe,
  Pz,
  G9,
  DX,
  Rt,
  sht,
  Bv,
  Xwe,
  x6t,
  cH,
  Ywe,
  z9,
  Jwe,
  D7n,
  Ml,
  hmn,
  mne,
  gne,
  yOe,
  aht,
  Dz,
  Rk,
  O7n,
  Qwe,
  SOe,
  hne,
  OF,
  kk,
  $Ve,
  UVe,
  L7n,
  _mn,
  M7n,
  N7n,
  F7n,
  $7n,
  M2,
  LE,
  ymn,
  OX,
  tn,
  _ne,
  N2,
  BVe,
  UD,
  lht,
  Smn,
  U7n,
  bmn,
  B7n,
  ey,
  ME,
  jVe,
  wmn,
  sC,
  V9,
  LX,
  Tmn,
  Rue,
  j7n,
  BD,
  Emn,
  W7n,
  cht,
  uht,
};
