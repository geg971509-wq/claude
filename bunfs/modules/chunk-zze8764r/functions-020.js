// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $K, Aur, B7, Bur, Kur, Lce, M$e, N$e, Oce, Pzt, QMt, RUt, Rdr, SUt, TGt, Tdr, W$e, Wur, Xcr, ZM, ZWt, Zcr, aur, bK, dur, eur, ezt, gur, izn, izt, j$e, jur, lur, mue, ndr, nhr, oGt, ohr, our, pGt, pur, rhr, shr, tGt, thr, tue, tzn, uur, vdr, wK, xGt, yhr } from "/$bunfs/root/modules/chunk-zze8764r/core.js";
import { $f, $o, $s, AP, Al, Ao, Au, Ayt, BO, Bce, CK, Cm, Dy, E, EK, EVt, FEe, Ft, G, GJe, Ge, Goe, Gp, Gu, Gwe, He, Hl, Ht, Hte, IR, Jd, Jzt, K, KCe, KN, Kn, Kr, Mar, Me, Nc, Ng, Nl, No, Nt, Nu, O, O$e, P5, PFe, Ps, Q, Qce, Qzt, R, R5, RFe, Rg, SJ, SVn, Se, Sg, Sr, Sur, Szt, Te, Ty, U$e, UO, Ugn, Us, V, VCe, VJ, Vn, Vp, Vzt, Wi, Wn, Woe, X, Xoe, Xzt, Y, Yzt, Zd, Zt, Zzt, _6, _J, _b, _d, _kn, _ur, a, aI, aVt, ax, b, b4, bl, bp, bpe, bur, bzt, c, cJe, ce, co, cve, dj, dkn, e0e, eGt, fFe, fR, fU, fb, fie, h, hA, iu, iur, ive, j0, jRn, jce, jt, kJ, ke, kur, kzt, l, lI, lR, le, mFe, mp, n, nQe, nS, na, nmt, nur, nze, o1, pFe, pR, po, qJ, qJe, rur, s, sU, sh, t1, te, tmt, tr, tur, uP, uR, vt, vw, w, wa, yJ, yfe, zAt, zRn, zu } from "/$bunfs/root/modules/chunk-zze8764r/prelude.js";
import { LW, M0e, MI, NA, R0e, T0e, Tde, w0e, wde } from "/$bunfs/root/modules/chunk-zze8764r/functions-001.js";
import { $r, Ou, Ycr, gk, oBt } from "/$bunfs/root/modules/chunk-zze8764r/functions-019.js";

function Qcr(e) {
  return Xcr[e] ?? "accumulate";
}

function Jcr(e) {
  if (!e) return;
  let t = 0;
  while (e.charCodeAt(t) === 0) t++;
  try {
    return Ps(t > 0 ? e.slice(t) : e);
  } catch {
    return;
  }
}

function _K(e, t, r) {
  let o = t;
  while (o < r && e[o] === 0) o++;
  return o;
}

function SK(e, t = 0, r = e.length) {
  let o = _K(e, t, r);
  return r - o >= Oce.length && e.compare(Oce, 0, Oce.length, o, o + Oce.length) === 0;
}

function T$e(e) {
  let t = ZWt.length;
  if (e.length < t + ezt || e.compare(ZWt, 0, t, 0, t) !== 0) return null;
  let r = e.toString("latin1", t, t + ezt);
  return Kr(r) === null ? null : r;
}

function v$e(e, t) {
  let { artifacts: r } = e;
  if (typeof r !== "object" || r === null || Array.isArray(r)) return e;
  let o = new Map();
  for (let [u, d] of Object.entries(r)) o.set(u, w$e(d, t));
  return { ...e, artifacts: Object.fromEntries(o) };
}

function w$e(e, t) {
  return typeof e === "object" && e !== null && !Array.isArray(e)
    ? { ...e, stampHighWater: null, everBaselined: !1, threads: [], ...(t && { interrupted: !0 }) }
    : e;
}

function Dce(e) {
  let t = e?.savedAt;
  return typeof t === "number" && Number.isFinite(t) && t <= Date.now() + Zcr ? t : 0;
}

function tzt(e) {
  return e?.interrupted === !0;
}

function nzt(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return 0;
  let t = e;
  if (t.interrupted === !0) return 2;
  let r = t.threads === void 0 || (Array.isArray(t.threads) && t.threads.length === 0);
  return t.stampHighWater === null && r && t.everBaselined === !1 ? 1 : 0;
}

async function E$e(e) {
  let t = 0,
    r = -1,
    o,
    u = -1,
    d = new Map(),
    _ = new Map(),
    C = new Map(),
    A = new Set(),
    x = new Map(),
    M = new Set(),
    F = (pe) => {
      let fe = pe.type === "summary" ? pe.leafUuid : pe.sessionId;
      return `${pe.type}:${fe ?? ""}`;
    },
    U = new Lce(),
    B = !1;
  for await (let pe of e) {
    let fe = Jcr(pe);
    if (fe) {
      if (fe.type === "file-history-snapshot") _.set(fe.messageId, t);
      else if (fe.type === "file-history-delta") {
        let ge = C.get(fe.messageId);
        if (ge) ge.push(t);
        else C.set(fe.messageId, [t]);
      }
      let me = Qcr(fe.type);
      if (me === "transcript") {
        let ge = fe;
        if ((d.set(ge.uuid, { parent: ge.parentUuid, idx: t }), Ycr(ge))) {
          if (
            ((r = t),
            (o = ge.compactMetadata),
            !ge.compactMetadata?.preservedSegment && !ge.compactMetadata?.preservedMessages)
          )
            u = t;
        }
      } else if (me === "accumulate") A.add(t);
      else if (me === "last-wins")
        if (fe.type === "cost-state" && !$K().safeParse(fe).success) A.add(t);
        else {
          let ge = F(fe),
            Ce = x.get(ge);
          if (Ce && (fe.type === "attribution-snapshot" || fe.type === "artifact-autoreact-ledger")) M.add(Ce.idx);
          if (fe.type === "artifact-autoreact-ledger") U.add(fe, t);
          x.set(ge, { idx: t, line: pe, type: fe.type });
        }
    } else if (pe) {
      A.add(t);
      let me = Buffer.from(pe),
        ge = me.subarray(_K(me, 0, me.length)),
        Ce = SK(ge),
        Ie = Ce ? T$e(ge) : null;
      if (Ce) U.torn(Ie, t);
      B = Ie === null;
    }
    if (fe) B = !1;
    t++;
  }
  let W = new Map();
  for (let [pe, fe] of U.finish(B)) {
    let me = x.get(`artifact-autoreact-ledger:${pe}`);
    if (me === void 0) continue;
    (me.line = b(fe)), W.set(me.idx, me.line);
  }
  if (r < 0) return { kind: "skip" };
  if (o?.preservedMessages)
    for (let pe of o.preservedMessages.uuids) {
      let fe = d.get(pe);
      if (!fe) return { kind: "abort", reason: "preserved_uuid_missing" };
      A.add(fe.idx);
      let me = _.get(pe);
      if (me !== void 0) A.add(me);
      let ge = C.get(pe);
      if (ge) for (let Ce of ge) A.add(Ce);
    }
  else if (o?.preservedSegment) {
    let pe = o.preservedSegment,
      fe = pe.tailUuid,
      me = new Set();
    while (fe && !me.has(fe)) {
      me.add(fe);
      let ge = d.get(fe);
      if (ge) {
        A.add(ge.idx);
        let Ce = _.get(fe);
        if (Ce !== void 0) A.add(Ce);
        let Ie = C.get(fe);
        if (Ie) for (let Ee of Ie) A.add(Ee);
        if (fe === pe.headUuid) break;
      }
      fe = ge?.parent;
    }
    if (fe !== pe.headUuid) return { kind: "abort", reason: "preserved_walk_broken" };
  }
  let z = new Set();
  for (let { parent: pe, idx: fe } of d.values()) {
    if (!pe || fe < r) continue;
    let me = d.get(pe);
    if (me && me.idx < r && !A.has(me.idx)) z.add(me.idx);
  }
  for (let pe of z) A.add(pe);
  return {
    kind: "plan",
    plan: {
      lastBoundaryIdx: r,
      lastNonPreservedBoundaryIdx: u,
      keepIdx: A,
      supersededLastWins: M,
      lastMeta: x,
      ledgerSubstitutes: W,
    },
  };
}

function C$e(e) {
  return (t, r) => {
    let o = [];
    if ((t >= e.lastBoundaryIdx || e.keepIdx.has(t)) && !e.supersededLastWins.has(t))
      o.push(e.ledgerSubstitutes.get(t) ?? r);
    if (t === e.lastBoundaryIdx) {
      for (let { idx: u, line: d, type: _ } of e.lastMeta.values())
        if (u < e.lastBoundaryIdx && (_ !== "attribution-snapshot" || u > e.lastNonPreservedBoundaryIdx)) o.push(d);
    }
    return o;
  };
}

function A$e(e) {
  let t = 0;
  while (e.charCodeAt(t) === 0) t++;
  return t > 0 ? e.slice(t) : e;
}

function rzt(e) {
  let t = e.length;
  while (t > 0) {
    let r = e.lastIndexOf(
        `
`,
        t - 1,
      ),
      o = e.slice(r + 1, t);
    if (((t = r), o.includes('"timestamp":') && (o.includes('"type":"user"') || o.includes('"type":"assistant"'))))
      try {
        let u = eur().safeParse(Ps(o));
        if (u.success) {
          let d = Date.parse(u.data.timestamp);
          if (!Number.isNaN(d)) return d;
        }
      } catch {}
    if (r < 0) break;
  }
  return;
}

async function ozt(e, t, r, o) {
  if (!Us(r)) {
    await R$e(e, t, o);
    return;
  }
  let u = tmt(e, t);
  try {
    if (O() && o !== void 0) {
      let d = vw(u);
      if (d !== void 0) {
        let _ = await o.write(d, b({ customTitle: r }), { mode: 384 });
        if (!_.ok) n(`writeSessionTitleSidecar: ${_.error.code} via storage`, { level: "error" });
        return;
      }
    }
    await tur(rur(u), { recursive: !0, mode: 448 }), await Wn(u, b({ customTitle: r }), 384);
  } catch (d) {
    n(`writeSessionTitleSidecar: ${l(d)}`, { level: "error" });
  }
}

async function R$e(e, t, r) {
  try {
    if (O() && r !== void 0) {
      let o = vw(tmt(e, t));
      if (o !== void 0) {
        let u = await r.delete(o);
        if (!u.ok) n(`deleteSessionTitleSidecar: ${u.error.code} via storage`, { level: "error" });
        return;
      }
    }
    await nur(tmt(e, t), { force: !0 });
  } catch (o) {
    n(`deleteSessionTitleSidecar: ${l(o)}`, { level: "error" });
  }
}

async function* tNt(e, t) {
  let r,
    o,
    u = our,
    d = !1;
  for (;;) {
    let _ = await e.readRecords(
      t,
      d
        ? { order: "backward", limit: 2, fromSeq: r }
        : { order: "backward", maxBytes: u + (o?.byteLength ?? 0), ...(r !== void 0 && { fromSeq: r }) },
    );
    if (!_.ok) {
      if (_.error.code === "NotFound" && r === void 0)
        throw Object.assign(
          new R("ENOENT: no such file or directory, open (transcript stream)", "ENOENT: no such file or directory"),
          { code: "ENOENT", syscall: "open" },
        );
      throw (
        (n(`[transcript-reverse-read] stream read failed: ${Ge(_.error)}`), Error("v5 transcript stream read failed"))
      );
    }
    let C = _.value.items;
    if (o !== void 0) {
      let x = C[0];
      if (x === void 0 || x.seq !== r || Buffer.compare(o, x.data) !== 0)
        throw (
          (n("[transcript-reverse-read] transcript stream changed between pages; abandoning the scan"),
          Error("v5 transcript stream changed between pages"))
        );
      C = C.slice(1);
    }
    if (C.length === 0) {
      if (_.value.nextSeq === void 0) return;
      d = !0;
      continue;
    }
    d = !1;
    let A;
    for (let x of C) {
      let { data: M } = x,
        F = M.at(-1) === 10 ? M.length - 1 : M.length,
        U = Buffer.from(M.buffer, M.byteOffset, F).toString("utf8");
      if (U) (A = x), yield U;
    }
    if (_.value.nextSeq === void 0) return;
    if (A === void 0) {
      u += izt;
      continue;
    }
    (r = A.seq), (o = Buffer.from(A.data)), (u = izt);
  }
}

function azt(e) {
  return e !== void 0 ? { type: "ifMatch", version: e } : { type: "none" };
}

function lzt(e, t) {
  let r = Buffer.from(e.data.buffer, e.data.byteOffset, e.data.byteLength);
  if (!r.includes(`"uuid":"${t}"`)) return !1;
  try {
    let o = Ps(r.toString("utf8").replace(/\r?\n$/, ""));
    return typeof o === "object" && o !== null && "uuid" in o && o.uuid === t;
  } catch {
    return !1;
  }
}

async function czt(e, t, r, o) {
  for (let u = 1; u <= 3; u++) {
    let d = await e.statStream(t);
    if (!d.ok) {
      if (d.error.code !== "NotFound")
        n(`Tombstone removal abandoned: stream stat failed (${d.error.code})`, { level: "warn" });
      return;
    }
    let _ = azt(d.value.version),
      C = await e.readRecords(t, { order: "backward", maxBytes: o.windowBytes });
    if (!C.ok) {
      if (C.error.code !== "NotFound")
        n(`Tombstone removal abandoned: record page failed (${C.error.code})`, { level: "warn" });
      return;
    }
    let A = C.value.items.filter((B) => lzt(B, r)),
      x = A[0],
      M = C.value.items.length > 1 || (x !== void 0 && x.data.byteLength < o.windowBytes);
    if (x === void 0 || !M) return await sur(e, t, r, C.value, A, _, o);
    let F = await e.replaceRecords(t, [], {
      keepBefore: x.seq,
      preserveFrom: x.endSeq,
      publishDiscipline: "inPlace",
      precondition: _,
    });
    if (F.ok || F.error.code === "NotFound") return;
    if (
      !(F.error.code === "PreconditionFailed" || (F.error.code === "Unavailable" && F.error.retryAfterMs === void 0)) ||
      u === 3
    ) {
      n(`Tombstone removal abandoned after ${u} attempt(s) (${F.error.code})`, { level: "warn" });
      return;
    }
  }
}

async function sur(e, t, r, o, u, d, _) {
  let C = o.items.reduce((M, F) => M + F.data.byteLength, 0),
    A = [...u],
    x = o.nextSeq;
  while (x !== void 0) {
    if (C > _.maxReadBytes) {
      n(`Skipping tombstone removal: session stream too large (over ${Ft(_.maxReadBytes)} read)`, { level: "warn" });
      return;
    }
    let M = await e.readRecords(t, { order: "backward", fromSeq: x, maxBytes: _.pageBytes });
    if (!M.ok) {
      n(`Tombstone removal abandoned: paging failed (${M.error.code})`, { level: "warn" });
      return;
    }
    for (let U of M.value.items) if (((C += U.data.byteLength), lzt(U, r))) A.push(U);
    let F = M.value.nextSeq;
    if (F !== void 0 && F >= x) {
      n("Tombstone removal abandoned: the backward record cursor did not advance", { level: "warn" });
      return;
    }
    x = F;
  }
  for (let M of A) {
    let F = await e.replaceRecords(t, [], {
      keepBefore: M.seq,
      preserveFrom: M.endSeq,
      publishDiscipline: "inPlace",
      precondition: d,
    });
    if (!F.ok) {
      if (F.error.code !== "NotFound")
        n(`Tombstone removal abandoned on the paged path (${F.error.code})`, { level: "warn" });
      return;
    }
    d = azt(F.value.version);
  }
}

function cur(e, t) {
  if (e === void 0) return !1;
  return aur.has(e) || (t !== "win32" && lur.has(e));
}

function mur(e, t) {
  if (e.liveServing === null) return !1;
  if (t === e.liveServing.mainFile) return !0;
  if (e.liveServing.sidecarPrefix !== null && t.startsWith(e.liveServing.sidecarPrefix)) return !0;
  return e.liveServing.sidMarker !== null && t.includes(e.liveServing.sidMarker);
}

function fur(e, t) {
  if (e.abandonedPaths.has(t) || e.abandonedPendingPaths.has(t)) return !0;
  for (let r of e.abandonedPrefixes) if (t.startsWith(r)) return !0;
  return !1;
}

function sv(e, t, r, o, u = Date.now()) {
  let d = E(r);
  e.failureSeq++;
  let _ = o ?? bK,
    C = e.failuresByFile.get(_),
    x =
      C !== void 0 && u - C.lastAtMs < pur
        ? { consecutive: C.consecutive + 1, firstAtMs: C.firstAtMs, lastAtMs: u }
        : { consecutive: 1, firstAtMs: u, lastAtMs: u };
  if ((e.failuresByFile.set(_, x), !e.latchingEnabled && _ !== bK))
    e.abandonedPaths.add(_), e.abandonedPendingPaths.delete(_);
  if (e.degradedStore.getState() === null && _ !== bK && gur.has(t) && e.latchingEnabled && !fur(e, _)) {
    let M = x.consecutive >= uur && u - x.firstAtMs >= dur;
    if (cur(d, "darwin") || M) e.degradedStore.setState(() => ({ code: d ?? "unknown", source: t, filePath: _ }));
  }
  s("tengu_transcript_write_failed", {
    source: c(t),
    errno_code: Rg(r) ?? w("none"),
    errno_enospc: d === "ENOSPC",
    errno_emfile: d === "EMFILE",
    consecutive_failures: x.consecutive,
    degraded: e.degradedStore.getState() !== null,
  });
}

function hzt(e, t) {
  if ((e.failuresByFile.delete(t), mur(e, t))) e.abandonedPendingPaths.delete(t);
  let r = e.degradedStore.getState();
  if (r?.filePath === t)
    e.degradedStore.setState(() => null), s("tengu_transcript_writer_recovered", { source: c(r.source) });
}

function _zt(e, t, r, o = iur, u = []) {
  let d = (M) => (M.endsWith(".jsonl") ? `${M.slice(0, -6)}${o}` : null),
    _ = r === null ? null : d(r);
  if (r !== null) {
    if (((e.latchingEnabled = !0), e.abandonedPaths.delete(r), e.abandonedPendingPaths.delete(r), _ !== null))
      e.abandonedPrefixes.delete(_);
    let M = r.slice(r.lastIndexOf(o) + 1),
      F = M.endsWith(".jsonl") ? M.slice(0, -6) : null,
      U = F !== null ? `${o}${F}${o}` : null;
    if (U !== null) {
      for (let B of e.abandonedPaths) if (B.includes(U)) e.abandonedPaths.delete(B);
    }
    e.liveServing = { mainFile: r, sidecarPrefix: _, sidMarker: U };
  }
  if (t === null || t === r) {
    if (r === null) {
      (e.latchingEnabled = !1), (e.liveServing = null);
      for (let M of e.failuresByFile.keys()) if (M !== bK) e.abandonedPaths.add(M);
      for (let M of u) if (!e.failuresByFile.has(M)) e.abandonedPendingPaths.add(M);
      if ((e.failuresByFile.clear(), e.degradedStore.getState() !== null)) e.degradedStore.setState(() => null);
    }
    return;
  }
  let C = d(t);
  if (r === null) {
    if (
      ((e.latchingEnabled = !1),
      (e.liveServing = null),
      e.abandonedPaths.clear(),
      e.abandonedPrefixes.clear(),
      e.abandonedPendingPaths.clear(),
      e.abandonedPaths.add(t),
      C !== null)
    )
      e.abandonedPrefixes.add(C);
    for (let M of e.failuresByFile.keys()) if (M !== bK) e.abandonedPaths.add(M);
    for (let M of u) if (!e.failuresByFile.has(M)) e.abandonedPendingPaths.add(M);
    if ((e.failuresByFile.clear(), e.degradedStore.getState() !== null)) e.degradedStore.setState(() => null);
    return;
  }
  let A = (M) => {
    if (M === t) return r;
    if (C !== null && M.startsWith(C)) return _ === null ? null : _ + M.slice(C.length);
    return M;
  };
  for (let [M, F] of Array.from(e.failuresByFile.entries())) {
    let U = A(M);
    if (U !== M) {
      if ((e.failuresByFile.delete(M), U !== null)) e.failuresByFile.set(U, F);
    }
  }
  let x = e.degradedStore.getState();
  if (x !== null) {
    let M = A(x.filePath);
    if (M !== x.filePath) e.degradedStore.setState(() => (M === null ? null : { ...x, filePath: M }));
  }
}

function tI(e) {
  if (!He(e)) return !1;
  return e.type === "user" || e.type === "assistant" || e.type === "attachment" || e.type === "system";
}

function Nqe(e) {
  return typeof e === "object" && e !== null && "type" in e && "uuid" in e && typeof e.uuid === "string" && tI(e);
}

function Eur(e) {
  return He(e);
}

function bcn(e) {
  Ai().setLocalGcEnabled(e);
}

function dce(e) {
  return e.type !== "progress";
}

function Fqe(e, t, r) {
  if (!r) return e.length;
  for (let o = t; o < e.length; o++) {
    let u = e[o];
    if (u.type === "assistant" && u.message.stop_reason === null) return o;
  }
  return e.length;
}

function Rzt(e) {
  if (!Ai().claimLegacyProgressProbe(e)) return;
  s("tengu_dead_probe_legacy_progress_bridge", { signal: c(e) });
}

function Cur(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    e.type === "progress" &&
    "uuid" in e &&
    typeof e.uuid === "string"
  );
}

function wcn(e) {
  return typeof e === "string" && Aur.has(e);
}

function gl() {
  return Ai().project?.sessionFile ?? null;
}

function Tcn() {
  return Ai().project?.currentSessionLastPrompt !== void 0;
}

function im(e) {
  if (e === K()) return gl() ?? Hl();
  let t = bl(Se());
  return wa(t, `${e}.jsonl`);
}

function B$e(e) {
  return mp(e).replace(/\.jsonl$/, ".meta.json");
}

async function H$e(e, t) {
  if (O() && t !== void 0) {
    let r = cJe(e);
    if (r !== void 0) {
      let o = await t.read([r]);
      if (!o.ok) throw Error("readAgentMetadataAtPath: storage read failed", { cause: o.error });
      let [u] = o.value.items;
      if (!u.found) return null;
      return V(Buffer.from(u.value).toString("utf-8"));
    }
  }
  try {
    let r = await fR(e, "utf-8");
    return V(r);
  } catch (r) {
    if (Ht(r)) return null;
    throw r;
  }
}

async function nGt(e, t, r) {
  let o = t;
  if (M$e.some((C) => t[C] === void 0)) {
    let C = await H$e(e, r);
    if (C) {
      for (let A of M$e) if (t[A] === void 0 && C[A] !== void 0) o = { ...o, [A]: C[A] };
    }
  }
  let d = O() && r !== void 0 ? cJe(e) : void 0;
  if (r !== void 0 && d !== void 0) {
    let C = await r.write(d, b(o), { mode: 438 & ~process.umask() });
    if (!C.ok) throw Error("persistAgentMetadata: storage write failed", { cause: C.error });
  } else await pR(sh(e), { recursive: !0 }), await Wn(e, b(o));
  let _ = e.replace(/\.meta\.json$/, ".jsonl");
  qr().fireMirror(_, [
    {
      type: "agent_metadata",
      agentType: o.agentType,
      ...(o.isFork !== void 0 && { isFork: o.isFork }),
      ...(o.isBuiltIn !== void 0 && { isBuiltIn: o.isBuiltIn }),
      ...(o.worktreePath && { worktreePath: o.worktreePath }),
      ...(o.worktreeBranch && { worktreeBranch: o.worktreeBranch }),
      ...(o.cwd && { cwd: o.cwd }),
      ...(o.spawnMode && { spawnMode: o.spawnMode }),
      ...(o.description && { description: o.description }),
      ...(o.name && { name: o.name }),
      ...(o.toolUseId && { toolUseId: o.toolUseId }),
      ...(o.parentAgentId && { parentAgentId: o.parentAgentId }),
      ...(o.stoppedByUser && { stoppedByUser: !0 }),
      ...(o.spawnDepth !== void 0 && { spawnDepth: o.spawnDepth }),
      ...(o.taskKind && { taskKind: o.taskKind }),
      ...(o.teamName && { teamName: o.teamName }),
      ...(o.color && { color: o.color }),
      ...(o.planModeRequired !== void 0 && { planModeRequired: o.planModeRequired }),
      ...(o.customAgentType && { customAgentType: o.customAgentType }),
      ...(o.model && { model: o.model }),
      ...(o.permissionMode && { permissionMode: o.permissionMode }),
      ...Object.fromEntries(M$e.filter((C) => o[C] !== void 0).map((C) => [C, o[C]])),
    },
  ]);
}

async function WSe(e, t, r) {
  let o = B$e(e);
  await dj(o, () => nGt(o, t, r));
}

async function U7(e, t, r) {
  let o = B$e(e);
  await dj(o, async () => {
    let u = await H$e(o, r);
    if (!u && t.agentType === void 0) {
      n(`[updateAgentMetadata] dropped patch for ${e}: no existing sidecar and patch lacks agentType`);
      return;
    }
    let d = { ...u, ...t };
    await nGt(o, d, r);
  });
}

async function KA(e, t) {
  return H$e(B$e(e), t);
}

function sGt() {
  let e = Ty() ?? bl(Se());
  return wa(e, K(), "remote-agents");
}

function aGt(e) {
  return wa(sGt(), `remote-agent-${e}.meta.json`);
}

async function ZGn(e, t, r) {
  let o = aGt(e);
  if ((await pR(sh(o), { recursive: !0 }), O() && r !== void 0)) {
    let u = cJe(o);
    if (u !== void 0) {
      let d = await r.write(u, b(t), { publishDiscipline: "inPlace" });
      if (!d.ok) throw Error("writeRemoteAgentMetadata: storage write failed", { cause: d.error });
      return;
    }
  }
  await Jzt(o, b(t));
}

async function Ecn(e, t) {
  let r = aGt(e);
  if (O() && t !== void 0) {
    let o = cJe(r);
    if (o !== void 0) {
      let u = await t.delete(o);
      if (!u.ok) throw Error("deleteRemoteAgentMetadata: storage delete failed", { cause: u.error });
      return;
    }
  }
  try {
    await Xzt(r);
  } catch (o) {
    if (Ht(o)) return;
    throw o;
  }
}

async function f9(e, t) {
  try {
    await Ecn(e, t);
  } catch (r) {
    n(`removeRemoteAgentMetadata failed: ${String(r)}`);
  }
}

async function ezn(e) {
  let t = sGt();
  if (O() && e !== void 0) {
    let u = cJe(wa(t, "probe.meta.json"));
    if (u !== void 0 && u.namespace === "sidecar")
      return xur(e, {
        namespace: "sidecar",
        projectKey: u.projectKey,
        sessionId: u.sessionId,
        relPath: u.relPath.slice(0, -1),
      });
  }
  let r;
  try {
    r = await uR(t, { withFileTypes: !0 });
  } catch (u) {
    if (Ht(u)) return [];
    throw u;
  }
  let o = [];
  for (let u of r) {
    if (!u.isFile() || !u.name.endsWith(".meta.json")) continue;
    try {
      let d = await fR(wa(t, u.name), "utf-8"),
        _ = oGt().safeParse(V(d));
      if (!_.success) {
        n(`listRemoteAgentMetadata: skipping ${u.name}: ${String(_.error)}`);
        continue;
      }
      o.push(_.data);
    } catch (d) {
      n(`listRemoteAgentMetadata: skipping ${u.name}: ${String(d)}`);
    }
  }
  return o;
}

async function xur(e, t) {
  let r = [],
    o = await Ao(
      (_) => e.listEntries(t, { skipKeyStats: !0, skipScopeStats: !0, ...(_ !== void 0 && { cursor: _ }) }),
      (_) => {
        for (let C of _)
          if (
            C.kind === "key" &&
            C.key.namespace === "sidecar" &&
            C.key.relPath.length === t.relPath.length + 1 &&
            C.key.relPath[t.relPath.length].endsWith(".meta.json")
          )
            r.push(C.key);
      },
    );
  if (o.status !== "done") {
    if (o.status === "error")
      n(`listRemoteAgentMetadata: listing failed via storage (${o.error.code}) \u2014 empty restore`);
    return [];
  }
  if (r.length === 0) return [];
  let u = await e.readText(r);
  if (!u.ok) return n(`listRemoteAgentMetadata: read failed via storage (${u.error.code}) \u2014 empty restore`), [];
  let d = [];
  return (
    u.value.items.forEach((_, C) => {
      let A = r[C].relPath.at(-1);
      if (!_.found) return;
      try {
        let x = oGt().safeParse(V(_.value));
        if (!x.success) {
          n(`listRemoteAgentMetadata: skipping ${A}: ${String(x.error)}`);
          return;
        }
        d.push(x.data);
      } catch (x) {
        n(`listRemoteAgentMetadata: skipping ${A}: ${String(x)}`);
      }
    }),
    d
  );
}

function Opt(e) {
  let t = Ty() ?? bl(Se()),
    r = wa(t, `${e}.jsonl`),
    o = le();
  try {
    return o.statSync(r), !0;
  } catch {
    return !1;
  }
}

function ihr() {
  return "production";
}

function Xc() {
  return Lpt() !== null;
}

function Lpt() {
  if (ihr() === "test" && !a.TEST_ENABLE_SESSION_PERSISTENCE) return "test_env";
  if (ax()) return "explicit_disable";
  if (a.CLAUDE_CODE_SKIP_PROMPT_HISTORY) return "skip_prompt_history";
  if (bpe()) return "nested_marker";
  return null;
}

function Acn() {
  return "external";
}

function lGt() {
  return process.env.CLAUDE_CODE_ENTRYPOINT;
}

function pce() {
  return !0;
}

function cGt(e, t) {
  if (!O() || t === void 0 || sh(e) !== Nl()) return;
  let r = sU(e),
    o = Te.sessionAliases(r),
    u = { namespace: "transcript", projectKey: r };
  return Kn(o) === void 0 && Au(u) === void 0 ? { backend: t, key: o, folder: u } : void 0;
}

async function Mur(e, t, r) {
  let o = () =>
      e.backend.updateText(
        e.key,
        (d) =>
          d !== void 0 &&
          d.value
            .split(`
`)
            .includes(t)
            ? { skip: !0 }
            : {
                write:
                  (d?.value ?? "") +
                  t +
                  `
`,
              },
        { publishDiscipline: "inPlace", mode: 384 },
      ),
    u = await o();
  if (!u.ok && kJ(u.error)) {
    let d = await e.backend.ensureScope(e.folder);
    if (!d.ok) {
      let _ = gGt(d.error);
      if (Ht(_)) {
        n(`recordSessionAlias: mkdir failed for ${wa(r, j$e)}: ${_}`);
        return;
      }
      h(_);
      return;
    }
    u = await o();
  }
  if (!u.ok) n(`recordSessionAlias: update failed via storage (${Ge(u.error)})`, { level: "error" });
}

async function pUt(e, t) {
  if (Xc()) return;
  let r = e;
  try {
    if (O() && t !== void 0) {
      let C = await Gwe(t)(e);
      if (C.ok && C.value.found) r = tr(C.value.path);
      else if (!C.ok)
        n(`recordSessionAlias: realpath failed for ${e}: ${Ge(C.error)}`, { level: ive(C.error) ? "debug" : "error" });
    } else r = tr(await Yzt(e));
  } catch (C) {
    if (!X(C)) n(`recordSessionAlias: realpath failed for ${e}: ${C}`, { level: "error" });
  }
  let o = Ty() ?? bl(Se()),
    u = bl(r);
  if (u === o) return;
  let d = cGt(u, t);
  if (d !== void 0) {
    try {
      await Mur(d, o, u);
    } catch (C) {
      n(`recordSessionAlias: update threw via storage: ${C}`);
    }
    return;
  }
  let _ = wa(u, j$e);
  try {
    if (
      (await fR(_, "utf8"))
        .split(`
`)
        .includes(o)
    )
      return;
  } catch (C) {
    if (!X(C)) {
      if (Ht(C)) {
        n(`recordSessionAlias: read failed for ${_}: ${C}`);
        return;
      }
      h(C);
      return;
    }
    try {
      await pR(sh(_), { recursive: !0, mode: 448 });
    } catch (A) {
      if (Ht(A)) {
        n(`recordSessionAlias: mkdir failed for ${_}: ${A}`);
        return;
      }
      h(A);
      return;
    }
  }
  try {
    await O$e(
      _,
      o +
        `
`,
      { mode: 384 },
    );
  } catch (C) {
    if (Ht(C)) {
      n(`recordSessionAlias: append failed for ${_}: ${C}`);
      return;
    }
    h(C);
  }
}

async function uGt(e, t) {
  let r = cGt(bl(e), t);
  if (r !== void 0)
    try {
      let u = await r.backend.readText([r.key]);
      if (!u.ok) return n(`readSessionAliases: read failed via storage (${Ge(u.error)})`), [];
      let d = u.value.items[0];
      return d.found
        ? te(
            d.value
              .split(`
`)
              .filter((_) => _.length > 0),
          )
        : [];
    } catch (u) {
      return n(`readSessionAliases: read threw via storage: ${u}`), [];
    }
  let o = wa(bl(e), j$e);
  try {
    let u = await fR(o, "utf8");
    return te(
      u
        .split(`
`)
        .filter((d) => d.length > 0),
    );
  } catch (u) {
    if (!X(u))
      if (Ht(u)) n(`readSessionAliases: read failed for ${o}: ${u}`);
      else h(u);
    return [];
  }
}

function Ai() {
  return tzn.of(G()).current;
}

function fUt() {
  return Ai().writerHealth;
}

function nte() {
  return Ai().writerHealth.failureSeq;
}

function ahr() {
  return Ai().writerHealth.degradedStore.getState();
}

function Ccn() {
  if (wde() && !Tde()) return;
  let e = Ai();
  if (!e.claimExitReStamp()) return;
  try {
    e.project?.reAppendSessionMetadata();
  } catch {}
  let t = O() && e.takenForeignExitLines.size > 0 ? e.takenForeignExitLines : void 0,
    r = t !== void 0 ? new Set() : void 0;
  for (let o of e.foreignExitReStampProviders)
    try {
      for (let { path: u, entry: d, tornTailEntry: _ } of o())
        try {
          F$e(u, d, _), r?.add(Ozt(u, d));
        } catch {}
    } catch {}
  if (t !== void 0) {
    for (let { path: o, entry: u, tornTailEntry: d } of t) {
      if (r?.has(Ozt(o, u)) === !0) continue;
      try {
        F$e(o, u, d);
      } catch {}
    }
    t.clear();
  }
  for (let o of e.exitReStampProviders)
    try {
      let u = o();
      if (u !== void 0) e.project?.appendOwedEntryAtExit(u);
    } catch {}
}

function rte(e) {
  return (
    Ai().exitReStampProviders.add(e),
    () => {
      Ai().exitReStampProviders.delete(e);
    }
  );
}

function vcn(e) {
  return (
    Ai().exitDrains.add(e),
    () => {
      Ai().exitDrains.delete(e);
    }
  );
}

function Mpt(e) {
  return (
    Ai().foreignExitReStampProviders.add(e),
    () => {
      Ai().foreignExitReStampProviders.delete(e);
    }
  );
}

async function lhr() {
  if (wde() && !Tde()) return;
  let e = Ai();
  try {
    await jt(Promise.allSettled([...e.exitDrains].map((o) => Promise.resolve().then(o))), 500),
      await e.project?.flush(),
      await qpt();
    let t = e.project,
      r = t?.exitReStampSource();
    if (O() && t !== null && r !== void 0) {
      if (
        (await jt(
          t.reStampAtExitAsync(r).then(() => !0),
          Pzt,
        )) !== !0
      )
        n(
          `Exit re-stamp through the storage backend did not finish within ${Pzt} ms; the synchronous re-stamp runs instead`,
          { level: "warn" },
        );
    }
  } catch {
  } finally {
    Ccn();
    let t = ahr();
    if (t !== null)
      n(
        `flushSessionStorageAtExit: transcript writer degraded (${t.code} at ${t.source}) \u2014 entries since the failure window may be missing from the transcript`,
        { level: "error" },
      );
  }
}

function qr() {
  let e = Ai();
  if (!e.project) {
    if (((e.project = new pGt(e)), shr.of(G().host).claim())) {
      if ((vt(lhr), !process.listeners("exit").includes(Ccn))) process.on("exit", Ccn);
    }
  }
  return e.project;
}

function tCr() {
  Ai().project?._resetFlushState();
}

function nCr() {
  tzn.of(G()).current = new W$e(() => K());
}

function rCr(e, t, r, o) {
  return qr().performCompactTranscript(e, t, r, o);
}

function oCr(e) {
  qr().setSessionFile(e);
}

function iCr(e, t, r) {
  return _Gt(e, t, r);
}

async function sCr(e = !0, t) {
  await qr().reAppendSessionMetadataAsync(!1, e, t);
}

async function aCr(e, t, r) {
  await qr().appendEntry(e, t, void 0, r);
}

function mUt() {
  return qr().sessionFile;
}

function qSe(e) {
  return j7(e, qr().sessionFile);
}

function Rcn(e) {
  return Ai().sessionFileMaterialized.subscribe(e);
}

function lCr() {
  Ai().sessionFileMaterialized.emit();
}

function $qe(e) {
  qr().setInternalEventWriter(e);
}

function kcn() {
  qr().clearInternalEventWriter();
}

function Hcn() {
  qr().sealAppendsForShutdown();
}

function xcn(e) {
  qr().addMirror(e);
}

function cCr(e, t) {
  qr().fireMirror(e, t);
}

function Uqe(e, t, r, o = !1) {
  qr().setInternalEventReader(e),
    qr().setInternalSubagentEventReader(t),
    qr().setInternalAgentEventReader(r ?? null, o);
}

function uCr(e) {
  qr().setRemoteIngressUrl(e);
}

async function Wb(e, t, r, o, u) {
  let d = IPe(e, o),
    _ = K(),
    C = Gpt(Ta(_)),
    A = await Ai().sessionMessages(_, u),
    x = [],
    M = r;
  if (M && !Xc() && !A.has(M)) s("tengu_phantom_parent_hint", {});
  let F = !1;
  for (let B of d)
    if (A.has(B.uuid)) {
      if (!F && dce(B)) M = B.uuid;
    } else x.push(B), (F = !0);
  if (x.length > 0) await qr().insertMessageChain(x, !1, void 0, M, t, _, C, u);
  return x.findLast(dce)?.uuid ?? M ?? null;
}

async function GSe(e, t, r) {
  let o = qr();
  (o.currentSessionLeafUuid = e ?? void 0),
    (o.currentSessionLeafTs = new Date().toISOString()),
    await o.appendEntry(
      {
        type: "last-prompt",
        ...(o.currentSessionLastPrompt && { lastPrompt: o.currentSessionLastPrompt }),
        leafUuid: e,
        explicit: !0,
        ...(t?.rewound && { rewound: !0 }),
        sessionId: K(),
      },
      void 0,
      void 0,
      r,
    );
}

async function Npt(e, t) {
  let r = qr();
  await r.mirrorInternalEntry({
    type: "last-prompt",
    ...(r.currentSessionLastPrompt && { lastPrompt: r.currentSessionLastPrompt }),
    leafUuid: e,
    explicit: !0,
    ...(t?.rewound && { rewound: !0 }),
    sessionId: K(),
  });
}

function dCr() {
  return qr().hasInternalEventWriter();
}

function Icn(e, t, r) {
  return qr().mirrorWorkerEvent(e, t, r);
}

async function ote(e, t, r, o) {
  let u = K(),
    d = Gpt(Ta(u));
  await qr().insertMessageChain(IPe(e), !0, t, r, void 0, u, d, o);
}

async function nzn(e, t) {
  await qr().appendEntry({ type: "fork-context-ref", ...e }, void 0, void 0, t);
}

async function Pcn(e, t) {
  await qr().appendEntry(e, e.sessionId, void 0, t);
}

function chr(e, t) {
  qr()
    .appendEntry(e, e.sessionId, void 0, t)
    .catch(h);
}

async function rzn(e, t) {
  await qr().appendEntry({ type: "observer-ref", ...e, timestamp: new Date().toISOString() }, void 0, void 0, t);
}

async function ozn(e, t) {
  if (O() && t !== void 0)
    try {
      let r = Jh(mp(e));
      if (r !== void 0 && (await t.stat(r)).ok) return !0;
    } catch {}
  try {
    return await Dy(mp(e)), !0;
  } catch {
    return !1;
  }
}

function Jh(e) {
  let t = mGt(e);
  if (t === void 0) return;
  let [r, o] = t,
    u = t.at(-1);
  if (r === void 0 || o === void 0 || u === void 0) return;
  if (t.length === 2) {
    let A = /^(.+)\.jsonl$/.exec(u);
    if (A === null) return;
    let x = A[1];
    return Zt(r) && Zt(x) ? tU(Te.transcript(r, x)) : void 0;
  }
  if (t.length < 4 || t[2] !== "subagents") return;
  let d = /^agent-(.+)\.jsonl$/.exec(u);
  if (d === null) return;
  let _ = d[1],
    C = t.slice(3, -1);
  if (![r, o, _, ...C].every(Zt)) return;
  return tU(Te.transcript(r, o, _, C.length > 0 ? C : void 0));
}

function tU(e) {
  return Kn(e) === void 0 ? e : void 0;
}

function mGt(e) {
  let t = kur(Nl(), e);
  if (t === "" || t === ".." || t.startsWith(`..${kzt}`) || Zzt(t)) return;
  let r = t.split(kzt);
  return e === wa(Nl(), ...r) ? r : void 0;
}

function Our(e) {
  let t = mGt(e);
  if (t === void 0) return;
  let [r, o, u, ...d] = t,
    _;
  if (r !== void 0 && t.length === 1) _ = { namespace: "transcript", projectKey: r };
  else if (r !== void 0 && o !== void 0 && u === "subagents")
    _ = d.length > 0 ? { namespace: "transcript", projectKey: r, sessionId: o, agentRelPath: d } : Mar(r, o);
  else return;
  return Au(_) === void 0 ? _ : void 0;
}

function Dur(e) {
  let t = [],
    r = 0;
  while (r < e.length) {
    let o = e.indexOf(
        `
`,
        r,
      ),
      u = o === -1 ? e.length : o + 1;
    t.push({ data: e.slice(r, u) }), (r = u);
  }
  return t;
}

function Mzt(e) {
  if (e.namespace !== "transcript") throw Error("sessionScopeOf: not a transcript key");
  return { namespace: "transcript", projectKey: e.projectKey, sessionId: e.sessionId };
}

function I$e(e) {
  let t = e instanceof Error ? e.cause : void 0;
  return Xoe(t) && dkn(t) ? t : void 0;
}

function Lur(e) {
  let t = () =>
    Object.assign(new R(`transcript storage append failed (${Kce(e)})`, "transcript storage append failed"), {
      cause: e,
    });
  return dkn(e) ? t() : Vce(e, t, "write");
}

function Fce(e, t) {
  if ($o(t)) n(`${e} (${E(t)}): ${l(t)}; the synchronous re-stamp runs instead`, { level: "error" });
  else h(t);
}

function Ozt(e, t) {
  let r = "sessionId" in t ? t.sessionId : void 0;
  return `${e}
${t.type}
${String(r)}`;
}

function Fur(e) {
  if (e.code !== "Failed" || e.telemetryCode !== "AsideStranded") return;
  let t = "cause" in e ? e.cause : void 0;
  if (typeof t !== "object" || t === null || "moveError" in t) return;
  let r = "path" in t ? t.path : void 0;
  return { leftover: typeof r === "string" ? r : void 0 };
}

function fGt(e) {
  return Vce(
    e,
    () =>
      Object.assign(new R(`transcript storage move failed (${Kce(e)})`, "transcript storage move failed"), {
        cause: e,
      }),
    "rename",
  );
}

function gGt(e) {
  return Vce(
    e,
    () =>
      Object.assign(
        new R(`transcript storage folder creation failed (${Kce(e)})`, "transcript storage folder creation failed"),
        { cause: e },
      ),
    "mkdir",
  );
}

function Kce(e) {
  return "telemetryCode" in e && e.telemetryCode ? `${e.code} ${e.telemetryCode}` : e.code;
}

function Vce(e, t, r) {
  let o = "cause" in e ? e.cause : void 0;
  if ($o(o)) return o;
  let u = t(),
    d = Nur(e, o);
  if (d === void 0) return u;
  let _ = bur.errno;
  return Object.assign(u, { code: d, errno: -(_[d] ?? 0), syscall: r });
}

function Nur(e, t) {
  let r = iu(e);
  if (Dzt(r)) return r;
  let o = E(t);
  if (Dzt(o)) return o;
  switch (e.code) {
    case "NotFound":
      return "ENOENT";
    case "Unavailable":
      return "EAGAIN";
    default:
      return;
  }
}

function Dzt(e) {
  return e !== void 0 && /^E[A-Z0-9]+$/.test(e);
}

async function Uce(e, t, r, o, u) {
  let d = Ai(),
    _ = o !== !0 && d.project?.tornTailSealPending(e) === !0;
  if (_)
    t =
      `
` + t;
  let C = !1,
    A = r !== void 0 ? Jh(e) : void 0;
  if (O() && r !== void 0 && A !== void 0) {
    if (o === !0) {
      let M = await r.stat(A);
      if (!M.ok) {
        if (M.error.code === "NotFound") return "skipped";
        let F = M.error;
        throw Vce(
          F,
          () =>
            Object.assign(
              new R(
                `onlyIfExists stat failed (${Kce(F)}) \u2014 append withheld`,
                "onlyIfExists stat failed \u2014 append withheld",
              ),
              { cause: F },
            ),
          "write",
        );
      }
      if ((M.value.storedBytes ?? M.value.size) === 0) return "skipped";
      if ((M.value.tornTailBytes ?? 0) > 0)
        (t =
          `
` + (u ?? t)),
          (C = !0);
    }
    let x = await r.append(A, Dur(t), o === !0 ? { precondition: { type: "ifExists" } } : void 0);
    if (!x.ok) {
      if (o === !0 && x.error.code === "NotFound") return "skipped";
      throw Lur(x.error);
    }
    if (_) d.project?.tornTailSealLanded(e);
    return C ? "backend-torn" : "backend";
  }
  if (o === !0) {
    let x = await $ur(e, t, u);
    return x === !1 ? "skipped" : x === "torn" ? "direct-torn" : "direct";
  }
  try {
    await O$e(e, t, { mode: 384 });
  } catch {
    await pR(sh(e), { recursive: !0, mode: 448 }), await O$e(e, t, { mode: 384 });
  }
  if (_) d.project?.tornTailSealLanded(e);
  return "direct";
}

async function $ur(e, t, r) {
  let o;
  try {
    o = await lR(e, lI.O_RDWR | lI.O_APPEND);
  } catch (u) {
    let d = E(u);
    if (d === "ENOENT" || d === "ENOTDIR") return !1;
    throw u;
  }
  try {
    let { size: u } = await o.stat();
    if (u === 0) return !1;
    let d = Buffer.alloc(1),
      { bytesRead: _ } = await o.read(d, 0, 1, u - 1),
      C = _ === 1 && d[0] === 10,
      A = Buffer.from(
        C
          ? t
          : `
` + (r ?? t),
        "utf8",
      ),
      x = void 0,
      M = 0;
    while (M < A.length) {
      let { bytesWritten: F } = await o.write(A, M, A.length - M, x);
      if (F <= 0) throw Error("appendToExistingTranscript: short write");
      if (((M += F), x !== void 0)) x += F;
    }
    return C ? !0 : "torn";
  } finally {
    await o.close();
  }
}

async function Xce(e, t, r) {
  let o = Jh(e);
  if (o === void 0) return;
  let u = await szn(o, t, r);
  if (u === null) return null;
  if (!u.ok) return;
  return { content: u.content, cut: u.cut };
}

function szn(e, t, r) {
  return r.read([{ key: e, tail: t }]).then((o) => {
    if (!o.ok) return PFe(o.error) ? Hur(e, t, r) : { ok: !1, error: o.error };
    let [u] = o.value.items;
    if (!u.found) return null;
    return {
      ok: !0,
      content: Buffer.from(u.value.buffer, u.value.byteOffset, u.value.byteLength).toString("utf8"),
      totalBytes: u.totalBytes,
      byteLength: u.value.byteLength,
      cut: u.totalBytes > u.value.byteLength,
    };
  });
}

function Uur(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === "EFBIG";
}

function Lzt() {
  return Object.assign(Error("loadTranscriptFile: the paged transcript is too large"), { code: "EFBIG" });
}

async function Fzt(e, t, r) {
  let o;
  try {
    o = await e.stat(t);
  } catch (A) {
    if (r !== void 0) return;
    throw A;
  }
  if (!o.ok) {
    if (o.error.code === "NotFound") return null;
    if (r !== void 0) return;
    return { failure: o.error };
  }
  if (r !== void 0 && o.value.size > r) return;
  if (o.value.size > wK) throw Lzt();
  let u = Buffer.allocUnsafe(Math.min(o.value.size, wK)),
    d = 0,
    _ = 0,
    C;
  for (;;) {
    let A = await e.readRecords(t, { order: "forward", maxBytes: Bur, ...(C !== void 0 && { fromSeq: C }) });
    if (!A.ok) {
      if (A.error.code === "NotFound" && C === void 0) return null;
      return { failure: A.error };
    }
    for (let M of A.value.items) {
      let F = d + M.data.byteLength;
      if (F > wK) throw Lzt();
      if (F > u.length) {
        let U = Buffer.allocUnsafe(Math.min(Math.max(F, u.length * 2), wK));
        u.copy(U, 0, 0, d), (u = U);
      }
      u.set(M.data, d), (d = F), _++;
    }
    let x = A.value.nextSeq;
    if (x === void 0) break;
    if (C !== void 0 && x <= C) throw Error("loadTranscriptFile: the record cursor did not advance");
    C = x;
  }
  return (
    n(`loadTranscriptFile: read ${_} records (${d} bytes) by page`),
    {
      bytes: u.subarray(0, d),
      mtimeMs: o.value.mtimeMs,
      storedBytes: Math.max(o.value.size, d),
      tornTailBytes: o.value.tornTailBytes ?? 0,
    }
  );
}

async function Hur(e, t, r) {
  let o = await r.readRecords(e, { order: "backward", maxBytes: t });
  if (!o.ok) return o.error.code === "NotFound" ? null : { ok: !1, error: o.error };
  let u = Buffer.concat(o.value.items.map((d) => d.data).reverse());
  return { ok: !0, content: u.toString("utf8"), totalBytes: void 0, byteLength: u.byteLength, cut: !1 };
}

async function azn(e, t) {
  let r = e ? mp(e) : Hl(),
    o =
      !O() || t === void 0
        ? void 0
        : await Xce(r, izn, t).catch(() => {
            return;
          });
  if (o === null) return null;
  let u =
    o !== void 0
      ? o
      : await _b(r, izn).catch((_) => {
          if (Ht(_)) return null;
          throw _;
        });
  if (u == null) return null;
  let d = u.content.split(`
`);
  for (let _ = d.length - 1; _ >= 0; _--) {
    let C = d[_];
    if (!C || !C.includes('"observer-ref"')) continue;
    try {
      let A = V(C);
      if (A?.type === "observer-ref") return A;
    } catch {}
  }
  return null;
}

async function uhr(e, t = Wur, r) {
  let { forkContextHydrationCache: o, forkContextHydrationsInFlight: u } = Ai(),
    d = o.get(e.parentLastUuid);
  if (d) return o.delete(e.parentLastUuid), o.set(e.parentLastUuid, d), d.slice;
  let _ = u.get(e.parentLastUuid);
  if (_) return _;
  let C = zur(e, t, r).finally(() => u.delete(e.parentLastUuid));
  return u.set(e.parentLastUuid, C), C;
}

async function zur(e, t, r) {
  let { forkContextHydrationCache: o } = Ai(),
    u = im(e.parentSessionId),
    d = Nc(u, r),
    { messages: _ } = await K7(u, d && { storageV5: d }),
    C = _.get(e.parentLastUuid);
  if (!C)
    return (
      n(`[fork-context-ref] parent uuid ${e.parentLastUuid} not found in ${u}; returning empty prefix`, {
        level: "warn",
      }),
      []
    );
  let A = VSe(_, C)
      .filter((F) => !F.isSidechain)
      .map(({ isSidechain: F, parentUuid: U, promptId: B, ...W }) => W),
    x = A.reduce((F, U) => F + P5(U).length, 0);
  o.delete(e.parentLastUuid), o.set(e.parentLastUuid, { slice: A, bytes: x });
  let M = 0;
  for (let F of o.values()) M += F.bytes;
  for (let [F, U] of o) {
    if (o.size <= 1 || (o.size <= jur && M <= t)) break;
    (M -= U.bytes), o.delete(F);
  }
  return A;
}

async function Fpt(e, t) {
  await qr().insertQueueOperation(e, t);
}

async function Bqe(e, t) {
  let r = O() && t !== void 0 ? t : void 0;
  await qr().removeMessageByUuid(e, r);
}

async function Dcn(e, t) {
  let r = O() && t !== void 0 ? t : void 0;
  if (!(await Ai().sessionMessages(K(), r)).has(e)) return;
  await qr().removeMessageByUuid(e, r);
}

async function Ocn(e, t, r, o) {
  await qr().insertFileHistorySnapshot(e, t, r, o);
}

async function lzn(e, t, r, o, u) {
  await qr().insertFileHistoryDelta(
    {
      type: "file-history-delta",
      messageId: e,
      snapshotMessageId: t,
      trackingPath: r,
      backup: o,
      timestamp: new Date().toISOString(),
    },
    u,
  );
}

async function pCr(e, t) {
  await qr().insertAttributionSnapshot(e, t);
}

async function zSe(e, t, r) {
  await qr().insertContentReplacement(e, t, r);
}

async function JL() {
  qr().resetSessionFile();
}

function m9() {
  let e = qr(),
    t = Hl();
  e.setSessionFile(t);
  let r = new Date();
  Qzt(t, r, r).catch(() => {});
  try {
    e.reAppendSessionMetadata(!0);
  } catch (o) {
    let u = E(o);
    if ($o(o)) n(`Resume re-append failed (${u}): ${l(o)}`, { level: "error" });
    else h(o);
    sv(Ai().writerHealth, "adopt", o, e.sessionFile);
  }
}

async function g9(e) {
  let t = qr(),
    r = Hl();
  if ((t.setSessionFile(r), t.adoptAppendSource(e), hGt(r, e), Xc())) return;
  try {
    await t.reAppendSessionMetadataAsync(!0, !1, e, !0);
  } catch (o) {
    let u = E(o);
    if ($o(o)) n(`Resume re-append failed (${u}): ${l(o)}`, { level: "error" });
    else h(o);
    sv(Ai().writerHealth, "adopt", o, r);
  }
}

function gUt(e) {
  let t = qr().sessionFile;
  if (t === null) return;
  hGt(t, e);
}

function hGt(e, t) {
  if (O() && t !== void 0) {
    let o = Jh(e);
    if (o !== void 0) {
      try {
        t.touch(o).catch(() => {});
      } catch {}
      return;
    }
  }
  let r = new Date();
  Qzt(e, r, r).catch(() => {});
}

async function CPe(e) {
  let t = O() && e !== void 0 ? e : void 0,
    r = K(),
    o = bl(Se()),
    u = qr(),
    d = u.sessionFile;
  if (d === null || Xc()) {
    (u.currentSessionRelocatedCwd = Se()), Gp(r, "cd", o);
    return;
  }
  let _ = wa(o, `${r}.jsonl`);
  if (d === _) {
    Gp(r, "cd", o);
    let C = Se();
    if (u.currentSessionRelocatedCwd !== C) {
      u.currentSessionRelocatedCwd = C;
      let A = { type: "relocated", sessionId: r, relocatedCwd: C };
      u.beginTranscriptRelocation(), Uzt(d);
      try {
        if (
          (await u.flush(),
          await qpt(),
          await nze(
            d,
            b(A) +
              `
`,
            oU(d, t),
          ))
        )
          u.fireMirror(d, [A]);
      } catch (x) {
        n(`relocateSessionTranscript: same-target relocated stamp failed: ${x}`);
      } finally {
        Bzt(d), await u.endTranscriptRelocation();
      }
    }
    return;
  }
  u.beginTranscriptRelocation(), Uzt(d);
  try {
    await u.flush(), await qpt(), await pR(o, { recursive: !0, mode: 448 });
    let C = Nu(e),
      A = (await Al(sh(d), C)) === (await Al(o, C));
    if (!A)
      try {
        let [fe, me] = await Promise.all([Dy(sh(d), { bigint: !0 }), Dy(o, { bigint: !0 })]);
        A = fe.dev === me.dev && fe.ino === me.ino;
      } catch (fe) {
        if (!X(fe)) throw fe;
      }
    let x;
    if (!A) x = await D$e(_);
    let M = t && Jh(d),
      F = t && Jh(_),
      U = t !== void 0 && M !== void 0 && F !== void 0,
      B = !0;
    try {
      await Nzt(d, _, t, U ? { from: M, to: F } : void 0);
    } catch (fe) {
      if (X(fe)) {
        if (x !== void 0)
          throw (
            (await aI(x, _).catch((me) => {
              n(`relocateSessionTranscript: could not restore set-aside destination after ENOENT move: ${me}`, {
                level: "warn",
              });
            }),
            fe)
          );
        n(`relocateSessionTranscript: old file missing: ${fe}`), (B = !1);
      } else {
        if (x !== void 0)
          await aI(x, _).catch((me) => {
            n(`relocateSessionTranscript: could not restore set-aside destination after failed move: ${me}`, {
              level: "warn",
            });
          });
        throw fe;
      }
    }
    let W = wa(sh(d), r),
      z = wa(o, r),
      pe = !0;
    try {
      await Nzt(W, z, t, U ? { fromScope: Mzt(M), toScope: Mzt(F) } : void 0);
    } catch (fe) {
      if (((pe = !1), !X(fe))) h(fe);
    }
    if ((u.setSessionFile(_), Gp(r, "cd", o), (u.currentSessionRelocatedCwd = Se()), B))
      try {
        await pk(_, { type: "relocated", sessionId: r, relocatedCwd: u.currentSessionRelocatedCwd }, t);
      } catch (fe) {
        n(`relocateSessionTranscript: relocated stamp failed: ${fe}`);
      }
    if (pe)
      try {
        await import.meta.require("/$bunfs/root/chunk-z0va9p5k.js").repointTaskOutputSymlinks(W, z);
      } catch (fe) {
        h(fe);
      }
  } finally {
    Bzt(u.sessionFile ?? d), await u.endTranscriptRelocation();
  }
}

function hUt(e, t) {
  if (Zd(e) || Vp(e)) n(`${t}: transcript relocation failed (${E(e)}): ${l(e)}`, { level: "error" });
  else h(e);
  sv(Ai().writerHealth, "relocate", e);
}

function fCr() {
  qr().beginTranscriptRelocation();
}

async function mCr() {
  await qr().endTranscriptRelocation();
}

async function D$e(e) {
  let t = `${e}.superseded-${Date.now()}`;
  try {
    await aI(e, t);
  } catch (o) {
    if (X(o)) return;
    throw o;
  }
  let { isRetentionExemptionDisabled: r } = import.meta.require("/$bunfs/root/chunk-9dxxc10b.js");
  if (!r()) {
    let o = new Date();
    await Sur(t, o, o).catch((u) => {
      n(
        `relocateSessionTranscript: could not refresh the set-aside's mtime at ${t} (it ages from its old clock): ${u}`,
        { level: "warn" },
      );
    });
  }
  return n(`relocateSessionTranscript: existing destination set aside at ${t}`, { level: "warn" }), t;
}

async function Gur(e, t, r) {
  let o = await e.moveScope(t, r);
  if (!o.ok || o.value.published) return o;
  function u() {
    return Object.assign(Error("an occupant blocks the destination scope and could not be set aside"), {
      code: "EEXIST",
    });
  }
  let d =
    r.namespace === "transcript" && r.sessionId !== void 0
      ? { ...r, sessionId: `${r.sessionId}.superseded-${Date.now()}` }
      : void 0;
  if (d === void 0) throw u();
  let _ = await e.moveScope(r, d);
  if (!_.ok) throw fGt(_.error);
  if (!_.value.published) throw u();
  n(`renameWithFallbacks: existing destination scope set aside at ${d.sessionId}`, { level: "warn" });
  let C = await e.moveScope(t, r);
  if (C.ok && C.value.published) return C;
  if (
    (await e.moveScope(d, r).catch(() => {
      return;
    }),
    !C.ok)
  )
    return C;
  throw u();
}

async function Nzt(e, t, r, o) {
  if (O() && r !== void 0 && o !== void 0) {
    let d = "fromScope" in o ? await Gur(r, o.fromScope, o.toScope) : await r.move(o.from, o.to);
    if (d.ok) return;
    if (d.error.code === "NotFound" || d.error.code === "ScopeNotFound")
      throw Object.assign(Error("nothing to move at the old home"), { code: "ENOENT" });
    if (d.error.code === "Failed" && d.error.telemetryCode === "SameEntry") return;
    let _ = "fromScope" in o ? Fur(d.error) : void 0;
    if (_ !== void 0) {
      if (
        (n(
          `renameWithFallbacks: a scope move stood with its set-aside leftover stranded; left in place at ${_.leftover ?? "(unnamed)"}`,
          { level: "warn" },
        ),
        (await _ur(e).catch(() => {
          return;
        })) !== void 0)
      )
        n(`renameWithFallbacks: the session folder may also remain at ${e}; left in place`, { level: "warn" });
      return;
    }
    throw fGt(d.error);
  }
  async function u(d, _) {
    await pR(_, { recursive: !0, mode: 448 });
    for (let C of await uR(d, { withFileTypes: !0 }))
      if (C.isDirectory()) await u(wa(d, C.name), wa(_, C.name));
      else await Szt(wa(d, C.name), wa(_, C.name));
  }
  try {
    await aI(e, t);
    return;
  } catch (d) {
    let _ = E(d);
    if (_ === "EEXIST" || _ === "EPERM" || _ === "EBUSY" || _ === "ENOTEMPTY") {
      let C = await D$e(t).catch(() => {
        return;
      });
      try {
        await aI(e, t);
      } catch (A) {
        if (C !== void 0) await aI(C, t).catch(() => {});
        throw A;
      }
      return;
    }
    if (_ === "EXDEV") {
      try {
        await Szt(e, t);
      } catch (C) {
        let A = E(C);
        if (A === "EISDIR" || A === "ENOTSUP" || A === "EPERM") {
          let x = await D$e(t);
          try {
            await u(e, t);
          } catch (M) {
            if (x !== void 0)
              await bzt(t, { recursive: !0, force: !0 }).catch(() => {}), await aI(x, t).catch(() => {});
            throw M;
          }
        } else throw C;
      }
      await bzt(e, { recursive: !0, force: !0 });
      return;
    }
    throw d;
  }
}

async function gCr(e, t) {
  let r = K();
  if (!r) return;
  await qr().appendEntry({ type: "marble-origami-commit", sessionId: r, ...e }, void 0, void 0, t);
}

async function hCr(e, t) {
  let r = K();
  if (!r) return;
  await qr().appendEntry({ type: "marble-origami-snapshot", sessionId: r, ...e }, void 0, void 0, t);
}

async function _Cr(e, t) {
  let r = K();
  if (!r) return;
  await qr().appendEntry({ type: "marble-origami-reset", sessionId: r, ...e }, void 0, void 0, t);
}

async function hl() {
  await qr().flush();
}

function $pt(e, t, r) {
  let o = qr(),
    u = t ?? o.sessionFile;
  if (!u || Xc()) return;
  try {
    o.sealTornTailSync(u), F$e(u, e, r);
  } catch (d) {
    qur(d, u);
  }
}

function qur(e, t) {
  if ($o(e)) n(`Stop-gesture transcript append failed (${E(e)}): ${l(e)}`, { level: "error" });
  else h(e);
  sv(Ai().writerHealth, "stop_now", e, t);
}

function Lcn(e) {
  qr().sealTornTailOnNextAppend(e ?? im(K()));
}

function AK(e) {
  if (typeof e !== "object" || e === null) return !1;
  let t = e.type;
  return t === "user" || t === "assistant";
}

async function yGt(e) {
  let t = await lR(e, lI.O_RDONLY | KCe);
  try {
    if ((await t.stat()).isFile()) return t;
  } catch (r) {
    throw (await t.close().catch(() => {}), r);
  }
  return await t.close().catch(() => {}), null;
}

async function Upt(e, t) {
  if (O() && t !== void 0) return Vur(e, t);
  let r = 65536,
    o = null;
  try {
    if (((o = await yGt(e)), o === null)) return !1;
    let u = Buffer.allocUnsafe(r),
      d = new eGt("utf8"),
      _ = "";
    for (;;) {
      let { bytesRead: C } = await o.read(u, 0, r, null);
      if (C <= 0) break;
      let x = (_ + d.write(u.subarray(0, C))).split(`
`);
      _ = x.pop() ?? "";
      for (let M of x) if (vK(M)) return !0;
    }
    return vK(_ + d.end());
  } catch {
    return !1;
  } finally {
    if (o)
      try {
        await o.close();
      } catch {}
  }
}

async function Vur(e, t) {
  let r = Jh(e);
  if (r === void 0) return Upt(e);
  try {
    let o = await t.readRecords(r, { order: "forward", maxBytes: Kur });
    if (o.ok) {
      let u = new TextDecoder("utf-8", { ignoreBOM: !0 }),
        d = 0,
        _ = !0;
      for (let C of o.value.items) {
        if (C.truncated === !0) {
          _ = !1;
          break;
        }
        if (vK(u.decode(C.data))) return !0;
        d += C.data.byteLength;
      }
      if (_) return await Yur(e, d);
    }
  } catch {}
  return Upt(e);
}

async function Yur(e, t) {
  let o = null;
  try {
    if (((o = await yGt(e)), o === null)) return !1;
    let u = Buffer.allocUnsafe(65536),
      d = new eGt("utf8"),
      _ = "",
      C = t;
    for (;;) {
      let { bytesRead: A } = await o.read(u, 0, 65536, C);
      if (A <= 0) break;
      C += A;
      let M = (_ + d.write(u.subarray(0, A))).split(`
`);
      _ = M.pop() ?? "";
      for (let F of M) if (vK(F)) return !0;
    }
    return vK(_ + d.end());
  } catch {
    return !1;
  } finally {
    if (o)
      try {
        await o.close();
      } catch {}
  }
}

function vK(e) {
  if (
    !e.includes('"type":"user"') &&
    !e.includes('"type": "user"') &&
    !e.includes('"type":"assistant"') &&
    !e.includes('"type": "assistant"')
  )
    return !1;
  try {
    return AK(Ps(e));
  } catch {
    return !1;
  }
}

async function Mcn(e, t, r) {
  Gp(Gu(e), "hydrate");
  let o = qr();
  try {
    let u = (await R0e(e, t)) || [],
      d = bl(Se());
    await z$e(d, r);
    let _ = im(e);
    if (!u.some(AK) && (await Upt(_, r)))
      return (
        n(
          `Skipping remote hydration: server set of ${u.length} entries has no content-bearing entries but the local transcript does`,
        ),
        Y("info", "hydrate_skip_zero_content_replace", { path: "v1_session_ingress", server_entry_count: u.length }),
        !0
      );
    return await yJ(_, u, _d(oU(_, r))), n(`Hydrated ${u.length} entries from remote`), u.length > 0;
  } catch (u) {
    return n(`Error hydrating session from remote: ${u}`), Y("error", "hydrate_remote_session_fail"), !1;
  } finally {
    o.setRemoteIngressUrl(t);
  }
}

async function _Gt(e, t, r) {
  let o =
    O() && r !== void 0
      ? await Xur(e, t, r).catch((d) => {
          n(`hydrate tail: backend tail read threw, using the raw tail: ${l(d)}`, { level: "warn" });
          return;
        })
      : void 0;
  if (o !== void 0) return o;
  let u = await _b(e, t).catch(() => null);
  return (
    u && {
      content: u.content,
      bytesTotal: u.bytesTotal,
      endsOnLineBoundary: u.content.endsWith(`
`),
    }
  );
}

async function Xur(e, t, r) {
  let o = Jh(e);
  if (o === void 0) return;
  let [u, d] = await Promise.all([szn(o, t, r), r.stat(o)]);
  if (u === null) return null;
  if (!u.ok) {
    n(`hydrate tail: backend tail read failed (${u.error.code}), using the raw tail`, { level: "warn" });
    return;
  }
  if (!d.ok) {
    if (u.totalBytes === void 0)
      return {
        content: u.content,
        bytesTotal: u.byteLength,
        endsOnLineBoundary: u.content.endsWith(`
`),
      };
    n(`hydrate tail: backend stat failed (${d.error.code}), using the raw tail`, { level: "warn" });
    return;
  }
  let _ = d.value.tornTailBytes ?? 0;
  return {
    content: u.content,
    bytesTotal: (u.totalBytes ?? d.value.size) + _,
    endsOnLineBoundary:
      _ === 0 &&
      u.content.endsWith(`
`),
  };
}

async function z$e(e, t) {
  if (O() && t !== void 0) {
    let r = Our(e);
    if (r !== void 0) {
      let o = await t.ensureScope(r);
      if (!o.ok) throw gGt(o.error);
      return;
    }
  }
  await pR(e, { recursive: !0, mode: 448 });
}

function oU(e, t) {
  if (!O() || t === void 0) return;
  let r = Jh(e);
  return r === void 0 ? void 0 : { backend: t, key: r };
}

function fce(e) {
  return wa(sh(im(e)), e);
}

async function vPe(e) {
  await pR(sh(e), { recursive: !0, mode: 448 });
}

function SGt(e) {
  return wa(fce(e), "ccr-tip.json");
}

function Qur(e) {
  return fce(e) + ".ccr-tip.json";
}

async function dhr(e, t) {
  for (let r of [SGt(e), Qur(e)]) {
    let o = await Jur(r, t);
    if (o !== "absent") return o;
  }
  return null;
}

async function Jur(e, t) {
  let r = t !== void 0 ? vw(e) : void 0,
    o;
  if (O() && t !== void 0 && r !== void 0)
    try {
      let u = await t.readText([r]);
      if (!u.ok) return null;
      let d = u.value.items[0];
      if (!d.found) return "absent";
      o = d.value;
    } catch {
      return null;
    }
  else
    try {
      o = await fR(e, "utf-8");
    } catch (u) {
      return X(u) ? "absent" : null;
    }
  try {
    let u = V(o);
    if (typeof u === "object" && u !== null && "eventId" in u && typeof u.eventId === "string") return u;
    return null;
  } catch {
    return null;
  }
}

async function bGt(e, t, r) {
  let o = { eventId: t, updatedAt: new Date().toISOString() };
  try {
    let u = SGt(e),
      d = r !== void 0 ? vw(u) : void 0;
    if (O() && r !== void 0 && d !== void 0) {
      let _ = await r.write(d, b(o), { mode: 384 });
      if (!_.ok) n(`Failed to write CCR tip sidecar: ${Ge(_.error)}`);
      return;
    }
    await vPe(u), await Wn(u, b(o), 384);
  } catch (u) {
    n(`Failed to write CCR tip sidecar: ${u}`);
  }
}

async function Ncn(e, t) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (!o || o.session_agent_id) continue;
    if (Nqe(o.payload)) {
      await bGt(K(), o.payload.uuid, t);
      return;
    }
  }
}

function czn(e) {
  let t = new Set();
  for (let r of yfe(e)) {
    if (typeof r !== "object" || r === null) continue;
    let o = r.uuid;
    if (typeof o === "string") t.add(o);
  }
  return t;
}

async function _Ut(e, t, r, o) {
  if (!t) return { fallbackReason: "client-gated" };
  let [u, d] = await Promise.all([dhr(e, o), r !== void 0 ? r : yUt(e, o)]);
  if (!u) return { fallbackReason: "no-sidecar" };
  if (!d || !czn(d.content).has(u.eventId)) return { fallbackReason: "tip-not-in-tail" };
  return { eventId: u.eventId };
}

async function yUt(e, t) {
  let r = im(e);
  if (O() && t !== void 0) {
    let o = await Xce(r, 65536, t).catch(() => {
      return;
    });
    if (o !== void 0) return o;
  }
  return _b(r, 65536).catch(() => null);
}

function phr(e) {
  for (let t of kGt(e)) return t;
  return;
}

function* kGt(e) {
  let t = e.split(`
`);
  for (let r = t.length - 1; r >= 0; r--) {
    let o = t[r];
    if (!o) continue;
    let u;
    try {
      u = Ps(o);
    } catch {
      continue;
    }
    if (Nqe(u)) yield u.uuid;
  }
}

function fhr(e, t) {
  let r = 0;
  for (let o of kGt(e)) {
    if (t.has(o)) return { uuid: o, walkback: r };
    r++;
  }
  return;
}

async function uzn(e, t, r) {
  if (!EVt(e)) {
    Y("warn", "subagent_transcript_write_rejected", { reason: "unsafe_id", server_entry_count: t.length });
    return;
  }
  if (!t.some(AK)) {
    Y("info", "hydrate_skip_zero_content_replace", { path: "v2_subagent", server_entry_count: t.length });
    return;
  }
  let o = mp(po(e));
  try {
    await z$e(sh(o), r);
    let u = _d(oU(o, r));
    if (u) await yJ(o, t, u);
    else await Wn(o, _kn(t), 384);
  } catch (u) {
    if ($o(u)) n(`Subagent transcript write failed (${E(u)}): ${l(u)}`, { level: "error" });
    else h(u);
    throw (
      (Y("warn", "subagent_transcript_write_rejected", {
        reason: "write_failed",
        server_entry_count: t.length,
        errno: VJ(u),
      }),
      u)
    );
  }
}

function Bpt() {
  return qr().hasInternalAgentEventReader();
}

async function Fcn(e, t, r = !1, o = !1, u) {
  let d = Date.now();
  Gp(Gu(e), "hydrate");
  let _ = qr(),
    C = _.getInternalEventReader();
  if (!C) return n("No internal event reader registered for CCR v2 resume"), !1;
  try {
    let A = im(e),
      x = _Gt(A, 65536, u),
      M,
      F,
      U;
    if (t) (M = t[0]), (F = t[2]?.eventId), (U = t[2]?.fallbackReason);
    else {
      let tt = await _Ut(e, r, await x, u);
      (F = tt.eventId), (U = tt.fallbackReason);
      let lt = performance.now();
      (M = await C(F)), Wi("resume_hydrate_fetch_ms", performance.now() - lt, lt);
    }
    if (!M) return n("Failed to read internal events for resume"), Y("error", "hydrate_ccr_v2_read_fail"), !1;
    let { events: B, stats: W } = M,
      z = bl(Se());
    await z$e(z, u);
    let pe = await x,
      fe = pe?.bytesTotal ?? 0,
      me,
      ge,
      Ce;
    if (pe) {
      if (((me = phr(pe.content)), F === void 0)) {
        let tt = new Map();
        for (let lt = 0; lt < B.length; lt++) {
          let mt = B[lt]?.payload.uuid;
          if (typeof mt === "string") tt.set(mt, lt);
        }
        (ge = fhr(pe.content, tt)), (Ce = ge === void 0 ? void 0 : tt.get(ge.uuid));
      }
    }
    let Ie = Ce === void 0 ? B.length : B.length - 1 - Ce;
    SVn(fe, W?.bytesReceived ?? null, B.length, Ie, F !== void 0, ge?.walkback);
    let Ee = !1,
      Pe = M.anchorFallback !== void 0,
      Oe = F !== void 0 && !Pe && B.some((tt) => (tt.event_id !== void 0 ? tt.event_id === F : tt.payload.uuid === F)),
      Fe = F !== void 0 && pe ? czn(pe.content) : null,
      Be = F !== void 0 && pe !== null && Fe !== null && Fe.has(F) && pe.endsOnLineBoundary,
      ze = B;
    if (F && !Pe && !Oe) {
      if (!Be) {
        U = "tail-incoherent";
        let tt = await C();
        if (!tt)
          return (
            n("Failed to refetch full read after incoherent local tail"), Y("error", "hydrate_ccr_v2_read_fail"), !1
          );
        ze = tt.events;
      }
    }
    let We = !1;
    if (F && !Pe && !Oe && Be) {
      let tt = B.map((lt) => lt.payload).filter((lt) => {
        let mt = lt.uuid;
        return typeof mt !== "string" || !Fe.has(mt);
      });
      if (tt.length > 0) await jRn(A, tt, _d(oU(A, u)));
      if (((Ee = !0), (We = !0), Ai().localGcEnabled)) {
        let lt = 0;
        for (let mt of tt) lt += Buffer.byteLength(P5(mt), "utf8");
        if (fe + lt > ZM) qr().requestCompact(A, u);
      }
      n(`Hydrated delta: appended ${tt.length}/${B.length} foreground entries from CCR v2 internal events`);
    } else {
      if (F && U !== "tail-incoherent")
        U =
          M.anchorFallback === "rejected"
            ? "anchor-rejected"
            : M.anchorFallback === "not-found"
              ? "anchor-not-found"
              : "anchor-in-response";
      if (!ze.some((lt) => AK(lt.payload)) && (await Upt(A, u)))
        n(
          `Skipping CCR v2 foreground hydration: fetched set of ${ze.length} events has no content-bearing entries but the local transcript does`,
        ),
          Y("info", "hydrate_skip_zero_content_replace", { path: "v2_foreground", server_entry_count: ze.length });
      else
        await yJ(
          A,
          ze.map((lt) => lt.payload),
          _d(oU(A, u)),
        ),
          (We = !0),
          n(`Hydrated ${ze.length} foreground entries from CCR v2 internal events`);
    }
    let Ve = Ee ? B : ze;
    if (We)
      for (let tt = Ve.length - 1; tt >= 0; tt--) {
        let lt = Ve[tt];
        if (lt && Nqe(lt.payload)) {
          await bGt(e, lt.event_id ?? lt.payload.uuid, u);
          break;
        }
      }
    let Pt = 0,
      ct,
      ut = "none",
      nn = !(!t || t[1] === void 0)
        ? "eager"
        : _.isSubagentLazyHydrate() && (Ee || pe === null)
          ? "lazy"
          : o && Ee
            ? "skipped_delta"
            : "eager",
      xt = _.getInternalSubagentEventReader();
    if (xt && nn === "eager") {
      let tt = t && t[1] !== void 0 ? t[1] : await xt();
      (ct = tt?.stats), (ut = t && t[1] !== void 0 ? "prefetched" : "inline");
      let lt = tt !== null,
        mt = tt?.events;
      if (mt && mt.length > 0) {
        Pt = mt.length;
        let Xe = new Map();
        for (let nt of mt) {
          let ht = nt.session_agent_id || "";
          if (!ht) continue;
          let At = Xe.get(ht);
          if (!At) (At = []), Xe.set(ht, At);
          At.push(nt.payload);
        }
        for (let [nt, ht] of Xe)
          await uzn(nt, ht, u).catch(() => {
            lt = !1;
          });
        n(`Hydrated ${mt.length} subagent entries across ${Xe.size} agents`);
      }
      if (lt) _.setInternalAgentEventReader(null, !1);
    }
    return (
      Y("info", "hydrate_ccr_v2_completed", {
        duration_ms: Date.now() - d,
        event_count: Ve.length,
        subagent_event_count: Pt,
        page_count: W?.pageCount,
        bytes_received: W?.bytesReceived,
        content_encoding: W?.contentEncoding,
        subagent_page_count: ct?.pageCount,
        subagent_read: ut,
        subagent_bytes_received: ct?.bytesReceived,
        prefetched: t?.[0] != null,
        on_disk_bytes: fe,
        delta_events: Ie,
        delta_fetch_attempted: F !== void 0,
        delta_fetch_applied: Ee,
        subagent_skipped_local_reuse: nn === "skipped_delta",
        subagent_hydrate: nn,
        ...(U && { delta_fallback_reason: U }),
        delta_anchor: ge !== void 0 && ge.walkback > 0 ? "intersected" : "synced",
        on_disk_last_uuid: me,
        anchor_uuid: ge?.uuid,
        anchor_walkback: ge?.walkback,
        ccr_last_uuid: Ve.at(-1)?.payload.uuid,
      }),
      Ve.length > 0
    );
  } catch (A) {
    if (A instanceof Error && A.message === "CCRClient: Epoch mismatch (409)") throw A;
    return n(`Error hydrating session from CCR v2: ${A}`), Y("error", "hydrate_ccr_v2_fail"), !1;
  }
}

function G$e(e) {
  let t = jpt(e);
  if (t) {
    let r = t
      .replaceAll(
        `
`,
        " ",
      )
      .trim();
    if (r.length > 200) r = ce(r, 200).trim() + "\u2026";
    return r;
  }
  return "No prompt";
}

function jpt(e) {
  for (let t of e) {
    if (t.type !== "user" || t.isMeta) continue;
    if ("isCompactSummary" in t && t.isCompactSummary) continue;
    let r = t.message?.content;
    if (!r) continue;
    let o = [];
    if (typeof r === "string") o.push(r);
    else if (Array.isArray(r)) {
      for (let u of r) if (u.type === "text" && u.text) o.push(u.text);
    }
    for (let u of o) {
      if (!u) continue;
      let d = $r(u, Sg);
      if (d) {
        let C = d.replace(/^\//, "");
        if (import.meta.require("/$bunfs/root/chunk-59z9est3.js").builtInCommandNames().has(C)) continue;
        else {
          let A = $r(u, "command-args")?.trim();
          if (!A) continue;
          return `${d} ${A}`;
        }
      }
      let _ = $r(u, "bash-input");
      if (_) return `! ${_}`;
      if (tGt.test(u)) continue;
      return u;
    }
  }
  return;
}

function Wpt(e) {
  return e.map((t) => {
    let { isSidechain: r, parentUuid: o, promptId: u, ...d } = t;
    return d;
  });
}

function Zur(e) {
  let t,
    r = -1,
    o = -1,
    u = new Map(),
    d = 0;
  for (let U of e.values()) {
    if ((u.set(U.uuid, d), Ou(U))) {
      o = d;
      let B = U.compactMetadata;
      if (B?.preservedMessages || B?.preservedSegment) (t = B), (r = d);
    }
    d++;
  }
  if (!t) return;
  let _ = r === o,
    C = _ ? edr(t, e) : void 0;
  if (_ && !C) return;
  let A = C && C.preserved.uuids.length > 0 ? C.preserved : void 0;
  if (A?.uuids.some((U) => !e.has(U))) {
    s("tengu_relink_walk_broken", {
      source: ke(C?.source),
      listed: A.uuids.length,
      present: Q(A.uuids, (U) => e.has(U)),
      anchorInTranscript: e.has(A.anchorUuid),
      transcriptSize: e.size,
    });
    return;
  }
  let x = A?.uuids ?? [],
    M = new Set(x);
  if (A) {
    let U = x.at(-1),
      B = A.anchorUuid;
    for (let W of x) {
      let z = e.get(W);
      e.set(W, { ...z, parentUuid: B }), (B = W);
    }
    for (let [W, z] of e) if (z.parentUuid === A.anchorUuid && W !== x[0]) e.set(W, { ...z, parentUuid: U });
    for (let W of x) {
      let z = e.get(W);
      if (z?.type !== "assistant") continue;
      e.set(W, {
        ...z,
        message: {
          ...z.message,
          usage: {
            ...z.message.usage,
            input_tokens: 0,
            output_tokens: 0,
            cache_creation_input_tokens: 0,
            cache_read_input_tokens: 0,
          },
        },
      });
    }
  }
  let F = [];
  for (let [U] of e) {
    let B = u.get(U);
    if (B !== void 0 && B < o && !M.has(U)) F.push(U);
  }
  for (let U of F) e.delete(U);
  if (A && F.length > 0) {
    let U = x.at(-1),
      B = new Set(F);
    for (let [W, z] of e)
      if ((z.type === "user" || z.type === "assistant") && z.parentUuid !== null && B.has(z.parentUuid))
        e.set(W, { ...z, parentUuid: U });
  }
  return x.at(-1);
}

function edr(e, t) {
  if (e.preservedMessages) return { preserved: e.preservedMessages, source: "list" };
  let r = e.preservedSegment;
  if (!r) return;
  let o = new Set(),
    u = [],
    d = t.get(r.tailUuid);
  while (d && !o.has(d.uuid)) {
    if ((o.add(d.uuid), u.push(d.uuid), d.uuid === r.headUuid))
      return u.reverse(), { preserved: { anchorUuid: r.anchorUuid, uuids: u }, source: "walk" };
    d = d.parentUuid ? t.get(d.parentUuid) : void 0;
  }
  s("tengu_relink_walk_broken", {
    source: w("walk"),
    tailInTranscript: t.has(r.tailUuid),
    headInTranscript: t.has(r.headUuid),
    anchorInTranscript: t.has(r.anchorUuid),
    walkSteps: o.size,
    transcriptSize: t.size,
  });
  return;
}

function cI(e, t) {
  let r,
    o = -1 / 0;
  for (let u of e) {
    if (!t(u)) continue;
    let d = Date.parse(u.timestamp);
    if (d > o) (o = d), (r = u);
  }
  return r;
}

function VSe(e, t, r) {
  let o = [],
    u = new Set(),
    d = t;
  while (d) {
    if (u.has(d.uuid)) {
      h(Error(`Cycle detected in parentUuid chain at message ${d.uuid}. Returning partial transcript.`)),
        s("tengu_chain_parent_cycle", {});
      break;
    }
    u.add(d.uuid), o.push(d);
    let C = d.parentUuid;
    if (!C) break;
    let A = e.get(C);
    if (!A || u.has(A.uuid)) {
      if (((A = rdr(e, d, u)), A)) s("tengu_chain_timestamp_fallback", {});
    }
    d = A;
  }
  o.reverse();
  let _ = odr(e, o, u);
  return tdr(t, _, u, r ?? wGt(e)), _;
}

function $cn(e, t, r) {
  let o = 0;
  for (let C of e.values()) {
    if (C.type !== "user" && C.type !== "assistant") continue;
    if (C.parentUuid) return;
    o++;
  }
  if (o <= 1) return;
  let u = r && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(r) ? r : void 0;
  if (u) {
    let { warnedUnchainedSessions: C } = Ai();
    if (C.has(u)) return;
    C.add(u);
  }
  let d = Q(t, (C) => C.type === "user" || C.type === "assistant"),
    _ = `Resume transcript${u ? ` (session ${u})` : ""} has ${o} user/assistant records but none carry parentUuid links; only ${d} reached the resumed conversation. Conversation reconstruction walks parentUuid from the last record, so unlinked records are dropped \u2014 the file's producer must chain records (parentUuid null on the first, the previous record's uuid on each subsequent one).`;
  if (
    (s("tengu_resume_unchained_transcript", { conversational_records: o, survived: d }),
    n(_, { level: "error" }),
    uP() || a.CLAUDE_CODE_ENTRYPOINT === "bench")
  )
    process.stderr.write(`Warning: ${_}
`);
}

function wGt(e) {
  let t = new Map();
  for (let r of e.values())
    if (r.parentUuid && r.type !== "user" && r.type !== "assistant") {
      let o = t.get(r.parentUuid);
      if (o) o.push(r);
      else t.set(r.parentUuid, [r]);
    }
  return t;
}

function tdr(e, t, r, o) {
  let u = [],
    d = [e.uuid];
  while (d.length > 0) {
    let _ = d.shift();
    for (let C of o.get(_) ?? []) {
      if (r.has(C.uuid)) continue;
      r.add(C.uuid), u.push(C), d.push(C.uuid);
    }
  }
  if (u.length > 1) u.sort((_, C) => (_.timestamp < C.timestamp ? -1 : _.timestamp > C.timestamp ? 1 : 0));
  t.push(...u);
}

function rdr(e, t, r) {
  let o = new Date(t.timestamp).getTime();
  if (Number.isNaN(o)) return;
  let u,
    d = 1 / 0;
  for (let _ of e.values()) {
    if (r.has(_.uuid)) continue;
    if (_.isSidechain !== t.isSidechain) continue;
    let C = new Date(_.timestamp).getTime();
    if (Number.isNaN(C)) continue;
    let A = o - C;
    if (A >= 0 && A <= ndr && A < d) (d = A), (u = _);
  }
  return u;
}

function odr(e, t, r) {
  let o = t.filter((F) => F.type === "assistant");
  if (o.length === 0) return t;
  let u = new Map();
  for (let F of o) if (F.message.id) u.set(F.message.id, F);
  let d = new Map(),
    _ = new Map();
  for (let F of e.values())
    if (F.type === "assistant" && F.message.id) {
      let U = d.get(F.message.id);
      if (U) U.push(F);
      else d.set(F.message.id, [F]);
    } else if (
      F.type === "user" &&
      F.parentUuid &&
      Array.isArray(F.message.content) &&
      F.message.content.some((U) => U.type === "tool_result")
    ) {
      let U = _.get(F.parentUuid);
      if (U) U.push(F);
      else _.set(F.parentUuid, [F]);
    }
  let C = new Set(),
    A = new Map(),
    x = 0;
  for (let F of o) {
    let U = F.message.id;
    if (!U || C.has(U)) continue;
    C.add(U);
    let B = d.get(U) ?? [F],
      W = B.filter((me) => !r.has(me.uuid)),
      z = [];
    for (let me of B) {
      let ge = _.get(me.uuid);
      if (!ge) continue;
      for (let Ce of ge) if (!r.has(Ce.uuid)) z.push(Ce);
    }
    if (W.length === 0 && z.length === 0) continue;
    W.sort((me, ge) => me.timestamp.localeCompare(ge.timestamp)),
      z.sort((me, ge) => me.timestamp.localeCompare(ge.timestamp));
    let pe = u.get(U),
      fe = [...W, ...z];
    for (let me of fe) r.add(me.uuid);
    (x += fe.length), A.set(pe.uuid, fe);
  }
  if (x === 0) return t;
  s("tengu_chain_parallel_tr_recovered", { recovered_count: x });
  let M = [];
  for (let F of t) {
    M.push(F);
    let U = A.get(F.uuid);
    if (U) M.push(...U);
  }
  return M;
}

function dzn(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (r.type !== "system" || r.subtype !== "turn_duration") continue;
    let o = r.messageCount;
    if (o === void 0) return;
    let u = t;
    s("tengu_resume_consistency_delta", {
      expected: o,
      actual: u,
      delta: u - o,
      chain_length: e.length,
      checkpoint_age_entries: e.length - 1 - t,
    });
    return;
  }
}

function Jce(e, t, r) {
  let o = [],
    u = new Map(),
    d = new Set();
  for (let _ of r) {
    let C = e.get(_.uuid);
    if (C) {
      let { snapshot: x, isSnapshotUpdate: M } = C,
        F = M ? u.get(x.messageId) : void 0;
      if (F === void 0) u.set(x.messageId, o.length), o.push(x);
      else (o[F] = x), d.delete(F);
    }
    let A = t.get(_.uuid);
    if (A)
      for (let x of A) {
        let M = u.get(x.snapshotMessageId);
        if (M === void 0)
          u.set(x.snapshotMessageId, o.length),
            d.add(o.length),
            o.push({
              messageId: x.snapshotMessageId,
              trackedFileBackups: { ...o.at(-1)?.trackedFileBackups, [x.trackingPath]: x.backup },
              timestamp: new Date(x.timestamp),
            });
        else {
          let F = o[M];
          if (!d.has(M)) (F = { ...F, trackedFileBackups: { ...F.trackedFileBackups } }), (o[M] = F), d.add(M);
          FEe(F.trackedFileBackups, x.trackingPath, x.backup);
        }
      }
  }
  return o.length > RFe ? o.slice(-RFe) : o;
}

function Zce(e, t) {
  return Array.from(e.values());
}

function KSe(e) {
  return Zzt(e) && e.endsWith(".jsonl");
}

function q$e(e, t, r) {
  let o = cI(e.messages.values(), () => !0)?.sessionId ?? r;
  return {
    ...t,
    messages: [],
    value: t.value ?? 0,
    firstPrompt: "",
    messageCount: 0,
    isSidechain: !1,
    sessionId: o,
    customTitle: e.customTitles.get(o) ?? t.customTitle,
    aiTitle: e.aiTitles.get(o) ?? t.aiTitle,
    tag: e.tags.get(o) ?? t.tag,
    agentName: e.agentNames.get(o) ?? t.agentName,
    agentColor: e.agentColors.get(o),
    agentSetting: e.agentSettings.get(o) ?? t.agentSetting,
    mode: e.modes.get(o),
    permissionMode: e.permissionModes.get(o),
    isolationLatch: e.isolationLatches.get(o),
    atisLatch: e.atisLatches.get(o),
    prNumber: e.prNumbers.get(o) ?? t.prNumber,
    prUrl: e.prUrls.get(o) ?? t.prUrl,
    prRepository: e.prRepositories.get(o) ?? t.prRepository,
    bridgeSessionId: e.bridgeSessionIds.get(o),
    bridgeLastSeq: e.bridgeLastSeqs.get(o),
    bridgeDialogKinds: e.bridgeDialogKindsBySession.get(o),
    bridgeSessionGroupingId: e.bridgeSessionGroupingIds.get(o),
    bridgeNoHistoryBackfill: e.bridgeNoBackfill.get(o),
    bridgeOwnerAccountUuid: e.bridgeOwnerAccountUuids.get(o),
    bridgeOwnerOrganizationUuid: e.bridgeOwnerOrganizationUuids.get(o),
    sessionHistorySuppressed: e.historySuppressed.has(o) ? !0 : void 0,
    worktreeSession: e.worktreeStates.has(o) ? e.worktreeStates.get(o) : t.worktreeSession,
    artifactCommentMonitor: e.artifactCommentMonitors.get(o),
    artifactAutoReactLedger: e.artifactAutoReactLedgers.get(o),
    costState: e.costStates.get(o),
    contentReplacements: e.contentReplacements.get(o) ?? [],
    contextCollapseCommits: e.contextCollapseCommits.filter((u) => u.sessionId === o),
    contextCollapseSnapshot: e.contextCollapseSnapshot?.sessionId === o ? e.contextCollapseSnapshot : void 0,
    rewindAnchorUuid: e.rewindAnchorUuid,
  };
}

async function jqe(e, t) {
  let r = O() && t !== void 0 ? Nc(e, t) : void 0;
  if (e.endsWith(".jsonl")) {
    let C = r ? void 0 : await Dy(e),
      A = await K7(e, r && { storageV5: r });
    if (A.servedBy === "absent")
      throw Object.assign(
        new R(`ENOENT: no such file or directory, stat '${e}'`, "ENOENT: no such file or directory"),
        { code: "ENOENT", syscall: "stat", path: e },
      );
    let {
      messages: x,
      summaries: M,
      customTitles: F,
      endedSessions: U,
      aiTitles: B,
      tags: W,
      relocatedCwds: z,
      fileHistorySnapshots: pe,
      fileHistoryDeltas: fe,
      attributionSnapshots: me,
      contextCollapseCommits: ge,
      contextCollapseSnapshot: Ce,
      leafUuids: Ie,
      contentReplacements: Ee,
      worktreeStates: Pe,
      artifactCommentMonitors: Oe,
      artifactAutoReactLedgers: Fe,
      costStates: Be,
      isolationLatches: ze,
      atisLatches: We,
      bridgeSessionIds: Ve,
      bridgeLastSeqs: Pt,
      bridgeDialogKindsBySession: ct,
      bridgeSessionGroupingIds: ut,
      bridgeNoBackfill: en,
      bridgeOwnerAccountUuids: nn,
      bridgeOwnerOrganizationUuids: xt,
      historySuppressed: tt,
      clearedToEmpty: lt,
    } = A;
    if (x.size === 0) throw new B7("No messages found in JSONL file", "no_messages");
    let mt =
      cI(x.values(), (Lt) => Ie.has(Lt.uuid)) ??
      (Ie.size === 0 && !lt ? cI(x.values(), (Lt) => !Lt.isSidechain) : void 0);
    if (!mt) {
      if (lt) {
        let Lt = C?.mtime ?? new Date(A.v5Read?.mtimeMs ?? 0);
        return q$e(A, { date: Lt.toISOString(), fullPath: e, created: Lt, modified: Lt });
      }
      throw new B7("No valid conversation chain found in JSONL file", "no_chain");
    }
    let Xe = VSe(x, mt);
    $cn(x, Xe, mt.sessionId);
    let nt = M.get(mt.uuid),
      ht = F.get(mt.sessionId),
      At = W.get(mt.sessionId),
      dn = mt.sessionId;
    return {
      ...L$e(Xe, 0, nt, ht, Jce(pe, fe, Xe), At, e, Zce(me, Xe), void 0, Ee.get(dn) ?? []),
      rewindAnchorUuid: A.rewindAnchorUuid,
      aiTitle: B.get(dn),
      relocatedCwd: z.get(dn),
      ...jce({}, U.has(dn)),
      contextCollapseCommits: ge.filter((Lt) => Lt.sessionId === dn),
      contextCollapseSnapshot: Ce?.sessionId === dn ? Ce : void 0,
      worktreeSession: Pe.has(dn) ? Pe.get(dn) : void 0,
      artifactCommentMonitor: Oe.get(dn),
      artifactAutoReactLedger: Fe.get(dn),
      costState: Be.get(dn),
      isolationLatch: ze.get(dn),
      atisLatch: aue(We, dn),
      bridgeSessionId: Ve.get(dn),
      bridgeLastSeq: Pt.get(dn),
      bridgeDialogKinds: ct.get(dn),
      bridgeSessionGroupingId: ut.get(dn),
      bridgeNoHistoryBackfill: en.get(dn),
      bridgeOwnerAccountUuid: nn.get(dn),
      bridgeOwnerOrganizationUuid: xt.get(dn),
      sessionHistorySuppressed: tt.has(dn) ? !0 : void 0,
    };
  }
  let o = await Dy(e);
  if (o.size > 268435456) throw new B7(`Transcript file too large to load as JSON (${o.size} bytes)`, "too_large");
  let u = await fR(e, { encoding: "utf-8" }),
    d;
  try {
    d = V(u);
  } catch (C) {
    throw new B7(`Invalid JSON in transcript file: ${C}`, "invalid_json");
  }
  let _;
  if (Array.isArray(d)) _ = d;
  else if (d && typeof d === "object" && "messages" in d) {
    if (!Array.isArray(d.messages)) throw new B7("Transcript messages must be an array", "bad_shape");
    _ = d.messages;
  } else throw new B7("Transcript must be an array of messages or an object with a messages array", "bad_shape");
  if (_.length === 0) throw new B7("No messages found in JSON file", "no_messages");
  return L$e(_, 0, void 0, void 0, void 0, void 0, e);
}

function sdr(e) {
  if (e.type !== "user") return !1;
  if (e.isMeta) return !1;
  let t = e.message?.content;
  if (!t) return !1;
  if (typeof t === "string") return t.trim().length > 0;
  if (Array.isArray(t)) return t.some((r) => r.type === "text" || r.type === "image" || r.type === "document");
  return !1;
}

function idr(e) {
  if (e.type !== "assistant") return !1;
  let t = e.message?.content;
  if (!t || !Array.isArray(t)) return !1;
  return t.some((r) => r.type === "text" && typeof r.text === "string" && r.text.trim().length > 0);
}

function K$e(e) {
  let t = 0;
  for (let r of e)
    switch (r.type) {
      case "user":
        if (sdr(r)) t++;
        break;
      case "assistant":
        if (idr(r)) t++;
        break;
      case "attachment":
      case "system":
      case "progress":
        break;
    }
  return t;
}

function L$e(e, t = 0, r, o, u, d, _, C, A, x) {
  let M = e.at(-1),
    F = e[0],
    U = G$e(e),
    B = new Date(F.timestamp),
    W = new Date(M.timestamp);
  return {
    date: M.timestamp,
    messages: Wpt(e),
    fullPath: _,
    value: t,
    created: B,
    modified: W,
    firstPrompt: U,
    messageCount: K$e(e),
    isSidechain: F.isSidechain,
    teamName: F.teamName,
    sessionKind: F.sessionKind,
    agentName: F.agentName,
    agentSetting: A,
    leafUuid: M.uuid,
    summary: r,
    customTitle: o,
    tag: d,
    fileHistorySnapshots: u,
    attributionSnapshots: C,
    contentReplacements: x,
    gitBranch: M.gitBranch,
    projectPath: F.cwd,
  };
}

async function adr(e) {
  let t = new Map(),
    r = 0;
  for (let _ of e) {
    let C = Jc(_);
    if (C) {
      let A = (t.get(C) || 0) + 1;
      t.set(C, A), (r = Math.max(A, r));
    }
  }
  if (r <= 1) return;
  let o = Array.from(t.values()).filter((_) => _ > 1),
    u = o.length,
    d = o.reduce((_, C) => _ + C, 0);
  s("tengu_session_forked_branches_fetched", {
    total_sessions: t.size,
    sessions_with_branches: u,
    max_branches_per_session: Math.max(...o),
    avg_branches_per_session: Math.round(d / u),
    total_transcript_count: e.length,
  });
}

async function Ucn(e, t) {
  let r = Se(),
    o = (await zRn(r, _d(Ng(t)))) ?? bl(r),
    [u, d] = await Promise.all([cte(o, e, r, t), uGt(r, t)]),
    _ = u;
  if (e !== void 0 && u.length === e && (await Gce(u, r, t))) {
    let C = await cte(o, void 0, r, t),
      A = Buffer.alloc(bp),
      x = [];
    for (let M of C)
      if (!(await IGt(M, r, A, t))) {
        if ((x.push(M), x.length === e)) break;
      }
    _ = x;
  }
  if (N$e.test(r) && (await Gce(_, r, t))) _ = await $$e(r, o, e, !1, void 0, t);
  if (d.length > 0) {
    let C = (await Promise.all(d.map((A) => cte(A, e, void 0, t)))).flat().map((A) => ({ ...A, isAlias: !0 }));
    if (((_ = TK(_.concat(C))), e !== void 0)) _ = _.slice(0, e);
  }
  return await adr(_), _;
}

function $zt(e, t) {
  if (Xc()) return;
  let r = le(),
    o =
      b(t) +
      `
`;
  try {
    r.appendFileSync(e, o, { mode: 384 });
  } catch {
    r.mkdirSync(sh(e), { mode: 448 }), r.appendFileSync(e, o, { mode: 384 });
  }
  qr().fireMirror(e, [t]);
}

function F$e(e, t, r) {
  if (Xc()) return;
  let o =
      b(t) +
      `
`,
    u;
  try {
    u = CK(e, lI.O_RDWR | lI.O_APPEND);
  } catch (d) {
    let _ = E(d);
    if (_ === "ENOENT" || _ === "ENOTDIR") return;
    throw d;
  }
  try {
    let { size: d } = U$e(u);
    if (d === 0) return;
    let _ = !fdr(u, d);
    if (_ && r !== void 0) t = r;
    let C = Buffer.from(
        _
          ? `
` +
              b(t) +
              `
`
          : o,
        "utf8",
      ),
      A = void 0,
      x = 0;
    while (x < C.length) {
      let M = Vzt(u, C, x, C.length - x, A);
      if (M <= 0) throw Error("appendEntryToExistingFileSync: short write");
      if (((x += M), A !== void 0)) A += M;
    }
  } finally {
    EK(u);
  }
  qr().fireMirror(e, [t]);
}

function ldr(e) {
  let t;
  try {
    t = CK(e, "r");
    let r = U$e(t),
      o = Math.max(0, r.size - bp),
      u = Buffer.allocUnsafe(Math.min(bp, r.size - o)),
      d = j0(t, u, 0, u.length, o);
    return u.toString("utf8", 0, d);
  } catch {
    return "";
  } finally {
    if (t !== void 0)
      try {
        EK(t);
      } catch {}
  }
}

function Uzt(e) {
  Ai().openAppendRelocationBracket(e);
}

function Bzt(e) {
  let t = Ai().closeAppendRelocationBracket();
  if (!t) return;
  for (let { entry: r, storageV5: o, opts: u, resolve: d, reject: _ } of t) pk(e, r, o, u).then(d, _);
}

function pk(e, t, r, o) {
  if (Xc()) return Promise.resolve();
  let { relocationParkedAppends: u, relocationParkedPath: d } = Ai();
  if (u !== null && e === d)
    return new Promise((x, M) => {
      u.push({ entry: t, storageV5: r, opts: o, resolve: x, reject: M });
    });
  let _ =
      b(t) +
      `
`,
    C =
      o?.tornTailEntry !== void 0
        ? b(o.tornTailEntry) +
          `
`
        : void 0,
    A = TGt.run(e, async () => {
      let x = await Uce(e, _, r, o?.onlyIfExists, C);
      if (x !== "skipped") {
        let M = (x === "direct-torn" || x === "backend-torn") && o?.tornTailEntry !== void 0 ? o.tornTailEntry : t;
        qr().fireMirror(e, [M]);
      }
    });
  return (
    A.catch((x) => {
      n(`appendEntryToFileAsync: append to ${e} failed: ${l(x)}`, { level: "error" });
    }),
    A
  );
}

async function qpt() {
  await TGt.settle();
}

async function cdr(e, t) {
  if (O() && t !== void 0 && Jh(e) !== void 0)
    return (
      (
        await Xce(e, bp, t).catch(() => {
          return;
        })
      )?.content ?? ""
    );
  let r;
  try {
    r = await lR(e, "r");
    let o = await r.stat(),
      u = Math.max(0, o.size - bp),
      d = Math.min(bp, o.size - u);
    if (d <= 0) return "";
    let _ = Buffer.allocUnsafe(d),
      { bytesRead: C } = await r.read(_, 0, d, u);
    return _.toString("utf8", 0, C);
  } catch {
    return "";
  } finally {
    if (r)
      try {
        await r.close();
      } catch {}
  }
}

async function Bcn(e, t) {
  if (Xc()) return;
  await pk(im(e), { type: "ended-by-model", timestamp: new Date().toISOString(), sessionId: e }, t).catch((r) => {
    n(`markSessionEndedByModel: transcript append failed: ${l(r)}`);
  });
}

function Wqe(e, t) {
  let r = Boolean(e);
  t((o) => (o.endedByModel === r ? o : { ...o, endedByModel: r }));
}

async function nI(e, t, r, o = "user", u) {
  let d = r ?? im(e);
  try {
    await pk(d, { type: "custom-title", customTitle: t, sessionId: e }, u);
  } catch (_) {
    if ($o(_)) n(`saveCustomTitle: transcript append failed (${E(_)}): ${l(_)}`, { level: "error" });
    else throw _;
  }
  if (!Xc()) {
    let _ = e === K() ? im(e) : d;
    await ozt(_, e, t, u);
  }
  if (e === K()) (qr().currentSessionTitle = t), Ai().sessionTitleChanged.emit();
  s("tengu_session_renamed", { source: c(o) });
}

function l2(e, t, r) {
  if (
    (pk(im(e), { type: "ai-title", aiTitle: t, sessionId: e }, r).catch((o) => {
      n(`saveAiGeneratedTitle: transcript append failed: ${l(o)}`);
    }),
    e === K())
  )
    (qr().currentSessionAiTitle = t), Ai().sessionTitleChanged.emit();
}

async function yCr(e, t, r, o, u, d) {
  let _ = u ?? im(e);
  try {
    await pk(
      _,
      { type: "pr-link", sessionId: e, prNumber: t, prUrl: r, prRepository: o, timestamp: new Date().toISOString() },
      d,
    ),
      s("tengu_session_linked_to_pr", { prNumber: t });
  } catch (C) {
    let A = E(C);
    if ($o(C)) n(`linkSessionToPR: failed to append pr-link entry to ${_} (${A}): ${l(C)}`, { level: "error" });
    else h(C);
    sv(Ai().writerHealth, "pr_link", C, _);
  }
  if (e === K()) {
    let C = qr();
    (C.currentSessionPrNumber = t), (C.currentSessionPrUrl = r), (C.currentSessionPrRepository = o);
  }
}

function vGt(e, t, r) {
  return Boolean(e.sessionFile) || (r?.targetExists === !0 && t !== void 0);
}

function XSe(e, t, r, o, u, d, _, C, A, x) {
  let M = qr();
  if (vGt(M, o, A))
    pk(
      o ?? im(e),
      {
        type: "bridge-session",
        sessionId: e,
        bridgeSessionId: t,
        lastSequenceNum: r,
        ...(u?.length && { declaredDialogKinds: u }),
        ...(d && { sessionGroupingId: d }),
        ...(_ && { noHistoryBackfill: !0 }),
        ...(C?.accountUuid && { ownerAccountUuid: C.accountUuid }),
        ...(C?.organizationUuid && { ownerOrganizationUuid: C.organizationUuid }),
      },
      x,
    ).catch((F) => {
      n(`saveBridgeSession: transcript append failed: ${l(F)}`);
    });
  if (e === K())
    (M.currentSessionBridgeId = t),
      (M.currentSessionBridgeSeq = r),
      (M.currentSessionBridgeDialogKinds = u?.length ? u : void 0),
      (M.currentSessionBridgeGroupingId = d),
      (M.currentSessionBridgeNoBackfill = _ ? !0 : void 0),
      (M.currentSessionBridgeOwnerAccountUuid = C?.accountUuid),
      (M.currentSessionBridgeOwnerOrganizationUuid = C?.organizationUuid);
}

function YSe(e, t, r, o, u) {
  let d = e ?? K();
  if (!d) return;
  let _;
  if (!Xc())
    _ = pk(t ?? im(d), R5(d, r, o), u).catch((C) => {
      n(`writeHistorySuppression: transcript append failed: ${l(C)}`);
    });
  if ((qcn(d), d === K())) qr().currentSessionHistorySuppressed = !0;
  return _;
}

function QL() {
  return qr().currentSessionHistorySuppressed === !0;
}

async function jcn(e) {
  let t = K(),
    r = gl(),
    o = Boolean(t) && r !== null && !j7(t, r);
  try {
    let u = o ? qqe(t) : (r ?? Hl()),
      d = await pzn(u, { sid: t || void 0 }, e);
    return o && d === "clean" ? "torn" : d;
  } catch (u) {
    if (X(u)) {
      if (o) return "torn";
      return mhr() ? "read-error" : "clean";
    }
    return "read-error";
  }
}

function mhr() {
  return qr().isTranscriptRelocationInProgress();
}

function SCr(e) {
  return qr().mirrorInternalEntry(e);
}

async function pzn(e, t, r) {
  let o = O() && r !== void 0 ? Nc(e, r) : void 0,
    u = o !== void 0 ? tNt(o.backend, o.key) : cve(e),
    d = 0;
  for await (let _ of u) {
    if (bUt(_, t)) return "found";
    if (++d >= SUt) return "budget-exhausted";
  }
  return "clean";
}

function j7(e, t) {
  return e !== void 0 && t != null && sU(t) === `${e}.jsonl`;
}

function qqe(e) {
  return wa(bl(Se()), `${e}.jsonl`);
}

function bUt(e, t = {}) {
  if (!e.includes('"history-suppression"')) return !1;
  try {
    let r = V(e);
    return r.type === "history-suppression" && (t.sid === void 0 || r.sessionId === t.sid);
  } catch {
    return !1;
  }
}

function kPe(e, t = {}) {
  return {
    ...e,
    ...(t.stripWorktreeSession && { worktreeSession: void 0 }),
    ...(t.stripRelocatedCwd && { relocatedCwd: void 0 }),
    artifactCommentMonitor: void 0,
    artifactAutoReactLedger: void 0,
    bridgeSessionId: void 0,
    bridgeLastSeq: void 0,
    bridgeDialogKinds: void 0,
    bridgeSessionGroupingId: void 0,
    bridgeNoHistoryBackfill: void 0,
    bridgeOwnerAccountUuid: void 0,
    bridgeOwnerOrganizationUuid: void 0,
  };
}

async function ite(e, t) {
  let r = t.destSid ?? Ta(K()),
    o = e.sessionHistorySuppressed === !0 || ZG(Ta(e.sessionId));
  if (o) await YSe(r, void 0, "fork_inherit", void 0, t.storageV5);
  rH(kPe(o && !e.sessionHistorySuppressed ? { ...e, sessionHistorySuppressed: !0 } : e, t), {
    taintSid: r,
    storageV5: t.storageV5,
  }),
    wUt(r, Ta(e.sessionId));
}

function Wcn() {
  qr().currentSessionHistorySuppressed = !0;
}

function Gqe(e) {
  if ((qcn(e), e !== void 0 && e === K())) qr().currentSessionHistorySuppressed = !0;
}

function qcn(e) {
  if (e === void 0) return;
  let t = qr();
  (t.knownTaintedSessionIds ??= new Set()), t.knownTaintedSessionIds.add(e);
}

function ZG(e) {
  return e !== void 0 && qr().knownTaintedSessionIds?.has(e) === !0;
}

function Gcn() {
  qr().currentSessionHistorySuppressed = void 0;
}

function Ta(e) {
  return e;
}

function ZL(e) {
  if (!e) return;
  let t = qr();
  (t.currentSessionPrecautionarySuppression ??= new Set()), t.currentSessionPrecautionarySuppression.add(e);
}

function bCr() {
  (qr().currentSessionPrecautionarySuppression = void 0),
    (qr().clearResilientPrecautionSids = void 0),
    (qr().scanUncertaintyHoldSids = void 0);
}

function zcn(e) {
  let t = qr();
  if (e && !t.clearResilientPrecautionSids?.has(e)) t.currentSessionPrecautionarySuppression?.delete(e);
}

function h9(e) {
  if (e === void 0) return;
  let t = qr();
  (t.clearResilientPrecautionSids ??= new Set()), t.clearResilientPrecautionSids.add(e);
}

function zqe(e) {
  if (e === void 0) return;
  let t = qr();
  (t.scanUncertaintyHoldSids ??= new Set()), t.scanUncertaintyHoldSids.add(e);
}

function Vcn(e) {
  return e !== void 0 && qr().scanUncertaintyHoldSids?.has(e) === !0;
}

function ste(e) {
  if (e === void 0) return;
  qr().scanUncertaintyHoldSids?.delete(e);
}

function Kcn(e) {
  if (e === void 0) return;
  let t = qr();
  if (!t.scanUncertaintyHoldSids?.has(e)) return;
  t.scanUncertaintyHoldSids.delete(e),
    t.clearResilientPrecautionSids?.delete(e),
    t.currentSessionPrecautionarySuppression?.delete(e);
}

function ghr() {
  return c2(Ta(K()));
}

function c2(e) {
  return e !== void 0 && qr().currentSessionPrecautionarySuppression?.has(e) === !0;
}

function wUt(e, t) {
  if (!e || !t) return;
  let r = qr(),
    o = r.currentSessionPrecautionarySuppression;
  if (o?.has(t)) {
    if ((o.add(e), r.clearResilientPrecautionSids?.has(t))) r.clearResilientPrecautionSids.add(e);
  }
}

function mce(e) {
  Ai().setLiveSuppressionProbe(e);
}

function hhr() {
  return Ai().liveSuppressionProbe?.() === !0;
}

function gce() {
  return tue?.().foreign === !0;
}

function Gpt(e) {
  let t = tue?.();
  if (t?.foreign !== !0) return !1;
  if (!e || !t.boundSid) return !0;
  return e !== t.boundSid;
}

function Xcn() {
  return tue?.().boundSid;
}

function W7() {
  return QL() || dF()?.noHistoryBackfill === !0 || hhr() || ghr();
}

function q7(e) {
  return Gpt(e) || W7() || c2(e) || ZG(e);
}

function EUt(e) {
  return W7() || c2(e) || ZG(e);
}

function zpt() {
  V$e(qr());
}

function V$e(e) {
  (e.currentSessionBridgeId = void 0),
    (e.currentSessionBridgeSeq = void 0),
    (e.currentSessionBridgeDialogKinds = void 0),
    (e.currentSessionBridgeGroupingId = void 0),
    (e.currentSessionBridgeNoBackfill = void 0),
    (e.currentSessionBridgeOwnerAccountUuid = void 0),
    (e.currentSessionBridgeOwnerOrganizationUuid = void 0);
}

function u2(e, t, r, o) {
  let u = e ?? K(),
    d = qr();
  if (vGt(d, t, r))
    pk(t ?? im(u), { type: "bridge-session", sessionId: u, bridgeSessionId: "", lastSequenceNum: 0 }, o).catch((_) => {
      n(`clearBridgeSession: transcript append failed: ${l(_)}`);
    });
  if (u === K()) V$e(d);
}

function dF() {
  let e = qr();
  return e.currentSessionBridgeId
    ? {
        id: e.currentSessionBridgeId,
        seq: e.currentSessionBridgeSeq ?? 0,
        declaredDialogKinds: e.currentSessionBridgeDialogKinds,
        groupingId: e.currentSessionBridgeGroupingId,
        noHistoryBackfill: e.currentSessionBridgeNoBackfill,
        ownerAccountUuid: e.currentSessionBridgeOwnerAccountUuid,
        ownerOrganizationUuid: e.currentSessionBridgeOwnerOrganizationUuid,
      }
    : void 0;
}

function Yc(e) {
  if (e === K()) return qr().currentSessionTitle;
  return;
}

function d2(e) {
  if (e === K()) return qr().currentSessionAiTitle;
  return;
}

function G7(e) {
  return Yc(e) ?? d2(e);
}

function AUt() {
  return nS()?.name ?? G7(K());
}

function CUt() {
  let e = nS();
  return (e !== void 0 && e.source !== "derived" ? e.name : void 0) ?? G7(K());
}

function Vqe(e) {
  return e === "bridge" ? CUt() : AUt();
}

function hce() {
  return qr().currentSessionAgentColor;
}

function ez() {
  return qr().currentSessionAgentName;
}

function rH(e, t) {
  let r = qr();
  if (e.customTitle) r.currentSessionTitle ??= e.customTitle;
  if (e.aiTitle) r.currentSessionAiTitle ??= e.aiTitle;
  if (e.customTitle || e.aiTitle) Ai().sessionTitleChanged.emit();
  if (e.tag !== void 0) r.currentSessionTag = e.tag || void 0;
  if (e.relocatedCwd) r.currentSessionRelocatedCwd ??= e.relocatedCwd;
  if (e.agentName) r.currentSessionAgentName ??= e.agentName;
  if (e.agentColor) r.currentSessionAgentColor ??= e.agentColor;
  if (e.agentSetting) r.currentSessionAgentSetting = e.agentSetting;
  if (e.mode) r.currentSessionMode = e.mode;
  if (e.permissionMode) r.currentSessionPermissionMode = e.permissionMode;
  if (e.isolationLatch) r.currentSessionIsolationLatch = e.isolationLatch;
  if (e.atisLatch !== void 0) fie(e.atisLatch);
  if (e.worktreeSession !== void 0) r.currentSessionWorktree = e.worktreeSession;
  if (e.artifactCommentMonitor !== void 0) r.resumedArtifactCommentMonitor = e.artifactCommentMonitor;
  if (e.artifactAutoReactLedger !== void 0) r.resumedArtifactAutoReactLedger = e.artifactAutoReactLedger;
  if (e.prNumber !== void 0) r.currentSessionPrNumber = e.prNumber;
  if (e.prUrl) r.currentSessionPrUrl = e.prUrl;
  if (e.prRepository) r.currentSessionPrRepository = e.prRepository;
  if (e.artifactCount !== void 0) r.currentSessionArtifactCount = e.artifactCount;
  if (e.bridgeSessionId)
    (r.currentSessionBridgeId = e.bridgeSessionId),
      (r.currentSessionBridgeSeq = e.bridgeLastSeq),
      (r.currentSessionBridgeDialogKinds = e.bridgeDialogKinds?.length ? e.bridgeDialogKinds : void 0),
      (r.currentSessionBridgeGroupingId = e.bridgeSessionGroupingId),
      (r.currentSessionBridgeNoBackfill = e.bridgeNoHistoryBackfill ? !0 : void 0),
      (r.currentSessionBridgeOwnerAccountUuid = e.bridgeOwnerAccountUuid),
      (r.currentSessionBridgeOwnerOrganizationUuid = e.bridgeOwnerOrganizationUuid);
  if (e.sessionHistorySuppressed) {
    let o = t?.taintSid ?? Ta(K()),
      u = o !== void 0 && o === K(),
      d = u && !r.currentSessionHistorySuppressed;
    if (u) r.currentSessionHistorySuppressed = !0;
    if ((qcn(o), d && o !== void 0)) {
      let _ = gl();
      if (!(_ !== null && !j7(o, _))) {
        let A = _ ?? im(o),
          x = t?.storageV5;
        (async () => {
          if ((await pzn(A, { sid: o }, x)) === "clean") await YSe(o, A, "meta_seed", void 0, x);
        })().catch((M) => {
          n(`restoreSessionMetadata meta_seed failed: ${l(M)}`);
        });
      }
    }
  }
  if (e.lastPrompt !== void 0) r.currentSessionLastPrompt = e.lastPrompt;
  if (e.leafUuid !== void 0) r.currentSessionLeafUuid = e.leafUuid;
  if (e.leafTs !== void 0) r.currentSessionLeafTs = e.leafTs;
}

function wCr() {
  let e = qr();
  return {
    customTitle: e.currentSessionTitle,
    aiTitle: e.currentSessionAiTitle,
    tag: e.currentSessionTag,
    relocatedCwd: e.currentSessionRelocatedCwd,
    agentName: e.currentSessionAgentName,
    agentColor: e.currentSessionAgentColor,
    agentSetting: e.currentSessionAgentSetting,
    mode: e.currentSessionMode,
    permissionMode: e.currentSessionPermissionMode,
    isolationLatch: e.currentSessionIsolationLatch,
    atisLatch: t1(),
    worktreeSession: e.currentSessionWorktree,
    artifactCommentMonitor: e.resumedArtifactCommentMonitor,
    artifactAutoReactLedger: e.resumedArtifactAutoReactLedger,
    prNumber: e.currentSessionPrNumber,
    prUrl: e.currentSessionPrUrl,
    prRepository: e.currentSessionPrRepository,
    artifactCount: e.currentSessionArtifactCount,
    bridgeSessionId: e.currentSessionBridgeId,
    bridgeLastSeq: e.currentSessionBridgeSeq,
    bridgeDialogKinds: e.currentSessionBridgeDialogKinds,
    bridgeSessionGroupingId: e.currentSessionBridgeGroupingId,
    bridgeNoHistoryBackfill: e.currentSessionBridgeNoBackfill,
    bridgeOwnerAccountUuid: e.currentSessionBridgeOwnerAccountUuid,
    bridgeOwnerOrganizationUuid: e.currentSessionBridgeOwnerOrganizationUuid,
    sessionHistorySuppressed: e.currentSessionHistorySuppressed ? !0 : void 0,
    lastPrompt: e.currentSessionLastPrompt,
    leafUuid: e.currentSessionLeafUuid,
    leafTs: e.currentSessionLeafTs,
  };
}

function Kqe() {
  let e = qr(),
    t = e.currentSessionTitle !== void 0 || e.currentSessionAiTitle !== void 0;
  if (
    ((e.currentSessionTitle = void 0),
    (e.currentSessionAiTitle = void 0),
    (e.currentSessionTag = void 0),
    (e.currentSessionRelocatedCwd = void 0),
    (e.currentSessionAgentName = void 0),
    (e.currentSessionAgentColor = void 0),
    (e.currentSessionLastPrompt = void 0),
    (e.currentSessionLeafUuid = void 0),
    (e.currentSessionLeafTs = void 0),
    (e.currentSessionAgentSetting = void 0),
    (e.currentSessionMode = void 0),
    (e.currentSessionPermissionMode = void 0),
    (e.currentSessionIsolationLatch = void 0),
    fie(void 0),
    (e.currentSessionWorktree = void 0),
    (e.resumedArtifactCommentMonitor = void 0),
    (e.resumedArtifactAutoReactLedger = void 0),
    (e.currentSessionPrNumber = void 0),
    (e.currentSessionPrUrl = void 0),
    (e.currentSessionPrRepository = void 0),
    (e.currentSessionArtifactCount = void 0),
    V$e(e),
    (e.currentSessionHistorySuppressed = void 0),
    t)
  )
    Ai().sessionTitleChanged.emit();
}

function _hr() {
  qr().reAppendSessionMetadata(!1, !0);
}

async function Vpt(e) {
  if (O() && e !== void 0) {
    if (Xc()) return;
    await qr().reAppendSessionMetadataAsync(!1, !0, e, !0);
    return;
  }
  await qpt(), _hr();
}

function Ycn(e) {
  return Ai().sessionAgentNameChanged.subscribe(e);
}

async function z7(e, t, r, o = "user", u) {
  let d = r ?? im(e);
  try {
    await pk(d, { type: "agent-name", agentName: t, sessionId: e }, u);
  } catch (_) {
    if ($o(_)) n(`saveAgentName: transcript append failed (${E(_)}): ${l(_)}`, { level: "error" });
    else throw _;
  }
  if (e === K()) (qr().currentSessionAgentName = t), Ai().sessionAgentNameChanged.emit();
  s("tengu_agent_name_set", { source: c(o) });
}

async function Xqe(e, t, r, o) {
  let u = r ?? im(e);
  try {
    await pk(u, { type: "agent-color", agentColor: t, sessionId: e }, o);
  } catch (d) {
    if ($o(d)) n(`saveAgentColor: transcript append failed (${E(d)}): ${l(d)}`, { level: "error" });
    else throw d;
  }
  if (e === K()) qr().currentSessionAgentColor = t;
  s("tengu_agent_color_set", {});
}

function JSe(e) {
  qr().currentSessionAgentSetting = e;
}

function Jcn(e) {
  return Ai().sessionTitleChanged.subscribe(e);
}

function pF(e) {
  (qr().currentSessionTitle = e), Ai().sessionTitleChanged.emit();
}

function TCr(e) {
  (qr().currentSessionAiTitle = e), Ai().sessionTitleChanged.emit();
}

function QSe(e) {
  (qr().currentSessionAgentName = e), Ai().sessionAgentNameChanged.emit();
}

function HPe(e, t, r) {
  let o = Yc(e),
    u = o && Us(o);
  if (!u) return !0;
  let d = Sr(u);
  return d === Sr(t) || (r !== void 0 && d === Sr(r));
}

function ZSe(e) {
  if (na()) return;
  let t = Us(e);
  if (!t) return;
  let r = Yc(K()),
    o = r && Us(r);
  if (t === o || Qce(t, o || void 0) !== void 0) return;
  n(`Hook sessionTitle cached (${[...t].length} chars)`), pF(t), QSe(t);
}

function ate(e) {
  qr().currentSessionMode = e;
}

function vUt(e) {
  qr().currentSessionPermissionMode = e;
}

function tz(e, t) {
  let r = qr();
  if (r.currentSessionIsolationLatch === e) return;
  if (((r.currentSessionIsolationLatch = e), r.sessionFile)) {
    let o = r.sessionFile;
    pk(o, { type: "isolation-latch", side: e, sessionId: K() }, t).catch((u) => {
      let d = E(u);
      if ($o(u))
        n(`saveIsolationLatch: failed to append isolation-latch entry to ${o} (${d}): ${l(u)}`, { level: "error" });
      else h(u);
      sv(Ai().writerHealth, "isolation_latch", u, o);
    });
  }
}

function Yqe() {
  return qr().currentSessionIsolationLatch;
}

async function Qcn(e, t) {
  await qr().appendEntry(e, void 0, void 0, t);
}

function Zcn() {
  let e = qr(),
    t = e.resumedArtifactCommentMonitor;
  return (e.resumedArtifactCommentMonitor = void 0), t;
}

function eun() {
  let e = qr(),
    t = e.resumedArtifactAutoReactLedger;
  return (e.resumedArtifactAutoReactLedger = void 0), t;
}

function tun() {
  return qr().resumedArtifactAutoReactLedger;
}

function aue(e, t) {
  return e.get(t) ?? yhr;
}

function XA(e, t) {
  let r = e
      ? {
          originalCwd: e.originalCwd,
          preEnterOriginalCwd: e.preEnterOriginalCwd,
          worktreePath: e.worktreePath,
          worktreeName: e.worktreeName,
          worktreeBranch: e.worktreeBranch,
          originalBranch: e.originalBranch,
          originalHeadCommit: e.originalHeadCommit,
          sessionId: e.sessionId,
          tmuxSessionName: e.tmuxSessionName,
          hookBased: e.hookBased,
          enteredExisting: e.enteredExisting,
        }
      : null,
    o = qr();
  if (((o.currentSessionWorktree = r), RUt.of(G().host).emit(r), o.sessionFile)) {
    let u = o.sessionFile;
    pk(u, { type: "worktree-state", worktreeSession: r, sessionId: K() }, t).catch((d) => {
      n(`saveWorktreeState: transcript append failed: ${l(d)}`);
    });
  }
}

function Jc(e) {
  if (e.sessionId) return e.sessionId;
  return e.messages[0]?.sessionId;
}

function p2(e) {
  return e.messages.length === 0 && e.sessionId !== void 0;
}

async function V7(e, t) {
  if (!p2(e)) return e;
  let r = e.fullPath;
  if (!r) return e;
  try {
    let o = Nc(r, t?.storageV5),
      u = await K7(r, o && { storageV5: o }),
      {
        messages: d,
        summaries: _,
        customTitles: C,
        endedSessions: A,
        aiTitles: x,
        tags: M,
        relocatedCwds: F,
        agentNames: U,
        agentColors: B,
        agentSettings: W,
        prNumbers: z,
        prUrls: pe,
        prRepositories: fe,
        bridgeSessionIds: me,
        bridgeLastSeqs: ge,
        bridgeDialogKindsBySession: Ce,
        bridgeSessionGroupingIds: Ie,
        bridgeNoBackfill: Ee,
        bridgeOwnerAccountUuids: Pe,
        bridgeOwnerOrganizationUuids: Oe,
        historySuppressed: Fe,
        modes: Be,
        permissionModes: ze,
        isolationLatches: We,
        atisLatches: Ve,
        worktreeStates: Pt,
        artifactCommentMonitors: ct,
        artifactAutoReactLedgers: ut,
        costStates: en,
        fileHistorySnapshots: nn,
        fileHistoryDeltas: xt,
        attributionSnapshots: tt,
        contentReplacements: lt,
        contextCollapseCommits: mt,
        contextCollapseSnapshot: Xe,
        leafUuids: nt,
        clearedToEmpty: ht,
      } = u;
    if (d.size === 0) return e;
    let At = cI(d.values(), (fn) => nt.has(fn.uuid) && (fn.type === "user" || fn.type === "assistant"));
    if (!At) {
      if (ht) return q$e(u, e, e.sessionId);
      return e;
    }
    let dn = VSe(d, At);
    $cn(d, dn, At.sessionId);
    let Lt = At.sessionId;
    return {
      ...e,
      rewindAnchorUuid: u.rewindAnchorUuid,
      messages: Wpt(dn),
      firstPrompt: G$e(dn),
      messageCount: K$e(dn),
      summary: At ? _.get(At.uuid) : e.summary,
      customTitle: Lt ? C.get(Lt) : e.customTitle,
      ...jce({}, Lt ? A.has(Lt) : Hte(e)),
      aiTitle: Lt ? x.get(Lt) : e.aiTitle,
      tag: Lt ? M.get(Lt) : e.tag,
      relocatedCwd: Lt ? F.get(Lt) : e.relocatedCwd,
      agentName: Lt ? U.get(Lt) : e.agentName,
      agentColor: Lt ? B.get(Lt) : e.agentColor,
      agentSetting: Lt ? W.get(Lt) : e.agentSetting,
      mode: Lt ? Be.get(Lt) : e.mode,
      permissionMode: Lt ? ze.get(Lt) : e.permissionMode,
      isolationLatch: Lt ? We.get(Lt) : e.isolationLatch,
      atisLatch: Lt ? aue(Ve, Lt) : e.atisLatch,
      worktreeSession: Lt && Pt.has(Lt) ? Pt.get(Lt) : e.worktreeSession,
      artifactCommentMonitor: Lt ? ct.get(Lt) : e.artifactCommentMonitor,
      artifactAutoReactLedger: Lt ? ut.get(Lt) : e.artifactAutoReactLedger,
      costState: Lt ? en.get(Lt) : e.costState,
      prNumber: Lt ? z.get(Lt) : e.prNumber,
      prUrl: Lt ? pe.get(Lt) : e.prUrl,
      prRepository: Lt ? fe.get(Lt) : e.prRepository,
      bridgeSessionId: Lt ? me.get(Lt) : e.bridgeSessionId,
      bridgeLastSeq: Lt ? ge.get(Lt) : e.bridgeLastSeq,
      bridgeDialogKinds: Lt ? Ce.get(Lt) : e.bridgeDialogKinds,
      bridgeSessionGroupingId: Lt ? Ie.get(Lt) : e.bridgeSessionGroupingId,
      bridgeNoHistoryBackfill: Lt ? Ee.get(Lt) : e.bridgeNoHistoryBackfill,
      bridgeOwnerAccountUuid: Lt ? Pe.get(Lt) : e.bridgeOwnerAccountUuid,
      bridgeOwnerOrganizationUuid: Lt ? Oe.get(Lt) : e.bridgeOwnerOrganizationUuid,
      sessionHistorySuppressed: Lt ? (Fe.has(Lt) ? !0 : void 0) : e.sessionHistorySuppressed,
      gitBranch: At?.gitBranch ?? e.gitBranch,
      isSidechain: dn[0]?.isSidechain ?? e.isSidechain,
      teamName: dn[0]?.teamName ?? e.teamName,
      sessionKind: dn[0]?.sessionKind ?? e.sessionKind,
      leafUuid: At?.uuid ?? e.leafUuid,
      fileHistorySnapshots: Jce(nn, xt, dn),
      attributionSnapshots: Zce(tt, dn),
      contentReplacements: Lt ? (lt.get(Lt) ?? []) : e.contentReplacements,
      contextCollapseCommits: Lt ? mt.filter((fn) => fn.sessionId === Lt) : void 0,
      contextCollapseSnapshot: Lt && Xe?.sessionId === Lt ? Xe : void 0,
    };
  } catch (o) {
    if (Zd(o) || Vp(o))
      n(`loadFullLog: transcript unreadable (${E(o)}): ${l(o)}`, { level: "error" }),
        t?.onTranscriptUnreadable?.(VJ(o));
    else h(o);
    return e;
  }
}

async function eM(e, t, r) {
  let { limit: o, exact: u } = t || {},
    d = await LW(Se()),
    _ = await MGt(d, void 0, r),
    { logs: C } = await ute(_, 0, _.length, r),
    A = e.toLowerCase().trim(),
    x = C.filter((U) => {
      let B = (U.customTitle ?? U.aiTitle)?.toLowerCase().trim();
      if (!B) return !1;
      return u ? B === A : B.includes(A);
    }),
    M = new Map();
  for (let U of x) {
    let B = Jc(U);
    if (B) {
      let W = M.get(B);
      if (!W || U.modified > W.modified) M.set(B, U);
    }
  }
  let F = Array.from(M.values());
  if ((F.sort((U, B) => B.modified.getTime() - U.modified.getTime()), o)) return F.slice(0, o);
  return F;
}

function udr(e, t, r, o) {
  let A = o[0],
    x = o.length,
    M = 0,
    F = !1,
    U = !1;
  for (let B = t; B < r; B++) {
    let W = e[B];
    if (U) {
      U = !1;
      continue;
    }
    if (F) {
      if (W === 92) U = !0;
      else if (W === 34) F = !1;
      continue;
    }
    if (M === 1 && W === A && B + x <= r && e.compare(o, 0, x, B, B + x) === 0) return B;
    if (W === 34) F = !0;
    else if (W === 123) M++;
    else if (W === 125) M--;
  }
  return -1;
}

function EGt(e, t, r) {
  let C = 0,
    A = !1,
    x = !1,
    M = 0;
  for (let F = t; M < r.length; F++) {
    if (F === r[M]) {
      if (C === 1 && !A) return r[M];
      M++;
    }
    let U = e[F];
    if (x) x = !1;
    else if (A) {
      if (U === 92) x = !0;
      else if (U === 34) A = !1;
    } else if (U === 34) A = !0;
    else if (U === 123) C++;
    else if (U === 125) C--;
  }
  return r.at(-1);
}

function Hzt(e) {
  let u = Buffer.from('{"parentUuid":'),
    d = Buffer.from('"uuid":"'),
    _ = Buffer.from('"isSidechain":true'),
    C = 36,
    A = Buffer.from('","timestamp":"'),
    x = A.length,
    M = u.length,
    F = d.length,
    U = [],
    B = [],
    W = new Map(),
    z = 0,
    pe = e.length;
  while (z < pe) {
    let Oe = e.indexOf(10, z),
      Fe = Oe === -1 ? pe : Oe + 1;
    if (Fe - z > M && e[z] === 123 && e.compare(u, 0, M, z, z + M) === 0) {
      let Be = e[z + M] === 34 ? z + M + 1 : -1,
        ze = -1,
        We = -1,
        Ve,
        Pt = z;
      for (;;) {
        let ut = e.indexOf(d, Pt);
        if (ut < 0 || ut >= Fe) break;
        if (ze < 0) ze = ut;
        let en = ut + F + 36;
        if (en + x <= Fe && e.compare(A, 0, x, en, en + x) === 0)
          if (We < 0) We = ut;
          else (Ve ??= [We]).push(ut);
        Pt = ut + F;
      }
      let ct = Ve ? EGt(e, z, Ve) : We >= 0 ? We : ze;
      if (ct >= 0) {
        let ut = ct + F,
          en = e.toString("latin1", ut, ut + 36);
        W.set(en, U.length), U.push(z, Fe, Be);
      } else B.push(z, Fe);
    } else B.push(z, Fe);
    z = Fe;
  }
  let fe = -1;
  for (let Oe = U.length - 3; Oe >= 0; Oe -= 3) {
    let Fe = e.indexOf(_, U[Oe]);
    if (Fe === -1 || Fe >= U[Oe + 1]) {
      fe = Oe;
      break;
    }
  }
  if (fe < 0) return e;
  let me = new Set(),
    ge = new Set(),
    Ce = 0,
    Ie = fe;
  while (Ie !== void 0) {
    if (me.has(Ie)) break;
    me.add(Ie), ge.add(U[Ie]), (Ce += U[Ie + 1] - U[Ie]);
    let Oe = U[Ie + 2];
    if (Oe < 0) break;
    let Fe = e.toString("latin1", Oe, Oe + 36);
    Ie = W.get(Fe);
  }
  if (pe - Ce < pe >> 1) return e;
  let Ee = [],
    Pe = 0;
  for (let Oe = 0; Oe < U.length; Oe += 3) {
    let Fe = U[Oe];
    while (Pe < B.length && B[Pe] < Fe) Ee.push(e.subarray(B[Pe], B[Pe + 1])), (Pe += 2);
    if (ge.has(Fe)) Ee.push(e.subarray(Fe, U[Oe + 1]));
  }
  while (Pe < B.length) Ee.push(e.subarray(B[Pe], B[Pe + 1])), (Pe += 2);
  return Buffer.concat(Ee);
}

function ddr(e, t) {
  let u = Buffer.allocUnsafe(1048576),
    d = CK(e, "r"),
    _ = Buffer.allocUnsafe(65536);
  function C(A, x) {
    let M = -1,
      F = 0;
    while (F < t) {
      let U = j0(d, u, 0, Math.min(1048576, t - F), F);
      if (U === 0) break;
      let B = 0;
      while (B < U) {
        let W = u.indexOf(10, B);
        if (W < 0 || W >= U) break;
        if (M >= 0) {
          if (x === void 0 || x(M)) {
            let z = F + W - M;
            if (z > _.length) _ = Buffer.allocUnsafe(z);
            j0(d, _, 0, z, M), A(_, 0, z, M);
          }
          M = -1;
        } else if (W > B) {
          let z = F + B;
          if (x === void 0 || x(z)) A(u, B, W - B, z);
        }
        B = W + 1;
      }
      if (B < U && M < 0) M = F + B;
      F += U;
    }
    if (M >= 0 && (x === void 0 || x(M))) {
      let U = t - M;
      if (U > _.length) _ = Buffer.allocUnsafe(U);
      j0(d, _, 0, U, M), A(_, 0, U, M);
    }
  }
  return { scan: C, close: () => EK(d) };
}

function pdr(e) {
  return {
    scan(t, r) {
      let o = 0;
      while (o < e.length) {
        let u = e.indexOf(10, o);
        if (u < 0) u = e.length;
        if (u > o && (r === void 0 || r(o))) t(e, o, u - o, o);
        o = u + 1;
      }
    },
    close() {},
  };
}

function CGt(e, t, r, o) {
  let d = Buffer.from('{"type":"attribution-snapshot"'),
    _ = Buffer.from('{"parentUuid":'),
    C = Buffer.from('"parentUuid":'),
    A = Buffer.from('"uuid":"'),
    x = Buffer.from('","timestamp":"'),
    M = Buffer.from('"isSidechain":true'),
    F = Buffer.from('"compact_boundary"'),
    U = Buffer.from('"type":"last-prompt"'),
    B = 36,
    W = _.length,
    z = A.length,
    pe = x.length,
    fe = [],
    me = [],
    ge = [],
    Ce = new Map(),
    Ie = [],
    Ee = new Set(),
    Pe = !1,
    Oe = -1,
    Fe = 0,
    Be = [],
    ze = { offset: -1, length: 0 },
    We,
    Ve = thr,
    Pt = nhr,
    ct = rhr;
  function ut(nn, xt) {
    let tt = -1,
      lt = -1,
      mt,
      Xe = 0;
    for (;;) {
      let nt = nn.indexOf(A, Xe);
      if (nt < 0) break;
      if (tt < 0) tt = nt;
      let ht = nt + z + 36;
      if (ht + pe <= xt && nn.compare(x, 0, pe, ht, ht + pe) === 0)
        if (lt < 0) lt = nt;
        else (mt ??= [lt]).push(nt);
      Xe = nt + z;
    }
    return mt ? EGt(nn, 0, mt) : lt >= 0 ? lt : tt;
  }
  function en(nn, xt, tt, lt) {
    let mt = nn.subarray(xt, xt + tt);
    if (((ze.offset = lt), (ze.length = tt), tt >= d.length && mt.compare(d, 0, d.length, 0, d.length) === 0)) {
      (Oe = lt), (Fe = tt);
      return;
    }
    if (SK(mt, 0, tt)) {
      Be.push({ offset: lt, length: tt });
      return;
    }
    if (tt < ct && mt.subarray(0, Math.min(tt, ohr)).includes(U)) {
      let Sn;
      try {
        Sn = V(mt.toString("utf8", 0, tt));
      } catch {
        return;
      }
      if (Sn?.type === "last-prompt") {
        if (Sn.leafUuid) We = Sn.leafUuid;
        Ie.push(lt);
        return;
      }
    }
    if ((tt <= Pt ? mt : mt.subarray(0, Pt)).includes(F)) {
      let Sn;
      try {
        Sn = V(mt.toString("utf8"));
      } catch {
        Sn = null;
      }
      if (Sn?.type === "system" && Sn.subtype === "compact_boundary")
        if (Sn.compactMetadata?.preservedSegment || Sn.compactMetadata?.preservedMessages) Pe = !0;
        else
          Ee.add(lt),
            (fe.length = 0),
            (me.length = 0),
            (ge.length = 0),
            Ce.clear(),
            (Pe = !1),
            (Oe = -1),
            (Fe = 0),
            (We = void 0);
    }
    let nt;
    if (tt > W && mt.compare(_, 0, W, 0, W) === 0) nt = W;
    else {
      if (((nt = udr(mt, 0, tt, C)), nt < 0)) {
        Ie.push(lt);
        return;
      }
      nt += C.length;
    }
    let ht = mt[nt] === 34 ? mt.toString("latin1", nt + 1, nt + 1 + 36) : null,
      At = ut(mt, tt);
    if (At < 0) {
      Ie.push(lt);
      return;
    }
    let dn = mt.toString("latin1", At + z, At + z + 36),
      fn = (tt <= Ve ? mt : mt.subarray(0, Ve)).includes(M);
    Ce.set(dn, fe.length), fe.push(lt), me.push(ht), ge.push(fn);
  }
  try {
    e.scan(en);
    let nn = null;
    if (!o && !Pe) {
      let lt = -1;
      for (let At = fe.length - 1; At >= 0; At--)
        if (!ge[At]) {
          lt = At;
          break;
        }
      nn = new Set();
      let mt = new Set(),
        Xe = !1,
        nt = (At) => {
          let dn = At;
          while (dn !== void 0 && !mt.has(dn)) {
            mt.add(dn), nn.add(fe[dn]);
            let Lt = me[dn];
            if (Lt == null) {
              dn = void 0;
              break;
            }
            let fn = Ce.get(Lt);
            if (fn === void 0) {
              Xe = !0;
              break;
            }
            dn = fn;
          }
        };
      nt(lt >= 0 ? lt : void 0);
      let ht = We ? Ce.get(We) : void 0;
      if ((nt(ht), Xe))
        s("tengu_transcript_phantom_parent", { total_offsets: fe.length, walked_slots: nn.size }), (nn = null);
    }
    let xt = nn ?? new Set(fe);
    for (let lt of Ie) xt.add(lt);
    using tt = Jd`transcript load pass2 (${xt.size} lines)`;
    e.scan(
      (lt, mt, Xe, nt) => {
        if (Ee.has(nt)) r();
        let ht = mt,
          At = mt + Xe;
        while (ht < At && lt[ht] === 0) ht++;
        if (ht === At) return;
        let dn;
        try {
          dn = Ps(lt.toString("utf8", ht, At));
        } catch {
          return;
        }
        if (dn) t(dn);
      },
      (lt) => xt.has(lt),
    );
  } finally {
    e.close();
  }
  return { lastAttributionOffset: Oe, lastAttributionLength: Fe, ledgerLines: Be, finalLine: ze };
}

function mdr(e, t, r, o, u) {
  return CGt(ddr(e, t), r, o, u);
}

function fdr(e, t) {
  let r = Buffer.alloc(1);
  return j0(e, r, 0, 1, t - 1) === 1 && r[0] === 10;
}

async function gdr(e, t) {
  if (t === 0) return !0;
  let r = await lR(e, "r");
  try {
    let o = Buffer.alloc(1),
      { bytesRead: u } = await r.read(o, 0, 1, t - 1);
    return u === 1 && o[0] === 10;
  } finally {
    await r.close();
  }
}

function hdr(e, t, r) {
  return ydr(e, t, r);
}

function ydr(e, t, r) {
  if (t < 0 || r <= 0) return null;
  let [o] = RGt(e, [{ offset: t, length: r }]);
  return AGt(o);
}

function AGt(e) {
  if (!e) return null;
  try {
    return V(e.toString("utf8"));
  } catch {
    return null;
  }
}

function _dr(e, t, r) {
  if (t < 0 || r <= 0) return null;
  return AGt(e.subarray(t, t + r));
}

function RGt(e, t) {
  if (t.length === 0) return [];
  let r = CK(e, "r");
  try {
    return t.map(({ offset: o, length: u }) => {
      if (o < 0 || u <= 0) return null;
      let d = Buffer.allocUnsafe(u);
      return j0(r, d, 0, u, o) < u ? null : d;
    });
  } finally {
    EK(r);
  }
}

function Sdr(e, t, r) {
  let o = t === null ? null : t.subarray(_K(t, 0, t.length)),
    u = null;
  if (o !== null)
    try {
      u = V(o.toString("utf8"));
    } catch {
      u = null;
    }
  if (u !== null && typeof u === "object") {
    e.add(u, r);
    return;
  }
  e.torn(o === null ? null : T$e(o), r);
}

function Nce(e, t, r) {
  let o = new Lce(),
    u = 0;
  for (let d of e) Sdr(o, d, u++);
  t.clear();
  for (let [d, _] of o.finish(r)) t.set(d, _);
}

function $ce(e) {
  if (e === null) return !0;
  if (SK(e)) return !1;
  try {
    let t = V(e.toString("utf8", _K(e, 0, e.length)));
    return t === null || typeof t !== "object";
  } catch {
    return !0;
  }
}

function jzt(e) {
  let t = e.length;
  while (t > 0 && e[t - 1] === 10) t--;
  let r = t === 0 ? 0 : e.lastIndexOf(10, t - 1) + 1;
  return e.subarray(r, t);
}

function* Wzt(e) {
  let t = 0;
  while (t < e.length) {
    let r = e.indexOf(10, t);
    if (r === -1) r = e.length;
    if (r > t && SK(e, t, r)) yield e.subarray(t, r);
    t = r + 1;
  }
}

function zzt(e) {
  return typeof e === "object" && e !== null;
}

function Gzt(e) {
  return typeof e.writtenAtMs === "number" && Number.isFinite(e.writtenAtMs) ? e.writtenAtMs : Number.POSITIVE_INFINITY;
}

function kK(e) {
  return typeof e.writtenAtMs === "number" && Number.isFinite(e.writtenAtMs) ? e.writtenAtMs : Number.NEGATIVE_INFINITY;
}

function kUt(e, t) {
  let r = t.artifacts,
    o = e.artifacts;
  if (typeof r !== "object" || r === null)
    return typeof o === "object" && o !== null ? (e.crossLineMerged === !0 ? e : { ...e, crossLineMerged: !0 }) : t;
  let u = new Map(Object.entries(r));
  if (typeof o === "object" && o !== null)
    for (let [C, A] of Object.entries(o)) {
      if (!zzt(A)) continue;
      let x = u.get(C),
        M = zzt(x);
      if (A.state !== "stopped") {
        if (
          A.state === "armed" &&
          A.holder !== void 0 &&
          M &&
          x.state === "armed" &&
          (x.holder === void 0 ? kK(x) <= kK(A) : kK(x) < kK(A))
        ) {
          let { holderPid: B, holderProcStart: W, holderProcStartFt: z, holderJob: pe, holderPidSpace: fe, ...me } = x;
          u.set(C, {
            ...me,
            writtenAtMs: A.writtenAtMs,
            holder: A.holder,
            ...(A.holderPid !== void 0 && { holderPid: A.holderPid }),
            ...(A.holderProcStart !== void 0 && { holderProcStart: A.holderProcStart }),
            ...(A.holderProcStartFt !== void 0 && { holderProcStartFt: A.holderProcStartFt }),
            ...(A.holderJob !== void 0 && { holderJob: A.holderJob }),
            ...(A.holderPidSpace !== void 0 && { holderPidSpace: A.holderPidSpace }),
          });
        }
        continue;
      }
      let F = Gzt(A);
      if (!u.has(C) || !M) {
        u.set(C, A);
        continue;
      }
      let U = x.state === "stopped" ? Gzt(x) : x.state === "armed" ? kK(x) : Number.NEGATIVE_INFINITY;
      if (x.state === "stopped" ? F > U : F >= U) u.set(C, A);
    }
  let d = Object.keys(r),
    _ = u.size === d.length && d.every((C) => u.get(C) === r[C]);
  if (_ && t.crossLineMerged === void 0) return t;
  return { ...t, ...(_ ? {} : { crossLineMerged: !0 }), artifacts: Object.fromEntries(u) };
}

function PGt(e) {
  let t = new Map(),
    r = new Map(),
    o = new Map(),
    u = new Set(),
    d = new Map(),
    _ = new Map(),
    C = new Map(),
    A = new Map(),
    x = new Map(),
    M = new Map(),
    F = new Map(),
    U = new Map(),
    B = new Map(),
    W = new Map(),
    z = new Map(),
    pe = new Map(),
    fe = new Map(),
    me = new Map(),
    ge = new Map(),
    Ce = new Map(),
    Ie = new Set(),
    Ee = new Map(),
    Pe = new Map(),
    Oe = new Map(),
    Fe = new Map(),
    Be = new Map(),
    ze = new Map(),
    We = new Map(),
    Ve = new Map(),
    Pt = new Map(),
    ct = new Map(),
    ut = new Map(),
    en = new Map(),
    nn = new Map(),
    xt = new Map(),
    tt = [],
    lt,
    mt = !1,
    Xe,
    nt,
    ht = !1,
    At = !1,
    dn = !1,
    Lt = new Map();
  return {
    processEntry: (hn) => {
      if (!Eur(hn)) return;
      let Ke = hn;
      if (Cur(Ke)) {
        Rzt("seen");
        let mn = Ke.parentUuid;
        Lt.set(Ke.uuid, mn && Lt.has(mn) ? (Lt.get(mn) ?? null) : mn);
        return;
      }
      if (tI(Ke)) {
        if (Ke.parentUuid && Lt.has(Ke.parentUuid)) Rzt("rewrote"), (Ke.parentUuid = Lt.get(Ke.parentUuid) ?? null);
        if ((qJ(Ke), t.set(Ke.uuid, Ke), !Ke.isSidechain)) (Xe = Ke.uuid), (ht = !1), (At = !1), (dn = !1);
        if (Ou(Ke)) (tt.length = 0), (lt = void 0), (nt = void 0), (ht = !1);
      } else if (Ke.type === "summary" && Ke.leafUuid) r.set(Ke.leafUuid, Ke.summary);
      else if (Ke.type === "last-prompt") {
        if (Ke.leafUuid)
          (ht = Ke.explicit === !0 || (ht && Ke.leafUuid === nt)),
            (dn = Ke.rewound === !0 || (dn && Ke.leafUuid === nt)),
            (nt = Ke.leafUuid),
            (At = !1);
        else if (Ke.leafUuid === null && Ke.explicit === !0) (At = !0), (nt = void 0), (ht = !1), (dn = !1);
      } else if (Ke.type === "custom-title" && Ke.sessionId) o.set(Ke.sessionId, Ke.customTitle);
      else if (Ke.type === "ended-by-model" && Ke.sessionId && !nmt()) u.add(Ke.sessionId);
      else if (Ke.type === "ai-title" && Ke.sessionId) d.set(Ke.sessionId, Ke.aiTitle);
      else if (Ke.type === "tag" && Ke.sessionId) _.set(Ke.sessionId, Ke.tag);
      else if (Ke.type === "relocated" && Ke.sessionId) C.set(Ke.sessionId, Ke.relocatedCwd);
      else if (Ke.type === "agent-name" && Ke.sessionId) A.set(Ke.sessionId, Ke.agentName);
      else if (Ke.type === "agent-color" && Ke.sessionId) x.set(Ke.sessionId, Ke.agentColor);
      else if (Ke.type === "agent-setting" && Ke.sessionId) M.set(Ke.sessionId, Ke.agentSetting);
      else if (Ke.type === "mode" && Ke.sessionId) Ee.set(Ke.sessionId, Ke.mode);
      else if (Ke.type === "permission-mode" && Ke.sessionId) Pe.set(Ke.sessionId, Ke.permissionMode);
      else if (Ke.type === "isolation-latch" && Ke.sessionId) Oe.set(Ke.sessionId, Ke.side);
      else if (Ke.type === "atis-latch" && Ke.sessionId) {
        if (typeof Ke.atis === "string" && /^[\x21-\x7e]*$/.test(Ke.atis)) Fe.set(Ke.sessionId, Ke.atis);
      } else if (Ke.type === "worktree-state" && Ke.sessionId) Be.set(Ke.sessionId, Ke.worktreeSession);
      else if (Ke.type === "artifact-comment-monitor" && Ke.sessionId) {
        let mn = ze.get(Ke.sessionId);
        ze.set(Ke.sessionId, mn === void 0 ? Ke : kUt(mn, Ke));
      } else if (Ke.type === "artifact-autoreact-ledger" && Ke.sessionId) We.set(Ke.sessionId, Ke);
      else if (Ke.type === "cost-state" && Ke.sessionId) {
        let mn = $K().safeParse(Ke);
        if (mn.success) Ve.set(Ke.sessionId, { ...mn.data, sessionId: Ke.sessionId });
      } else if (Ke.type === "pr-link" && Ke.sessionId)
        F.set(Ke.sessionId, Ke.prNumber), U.set(Ke.sessionId, Ke.prUrl), B.set(Ke.sessionId, Ke.prRepository);
      else if (Ke.type === "bridge-session" && Ke.sessionId) {
        if ((W.set(Ke.sessionId, Ke.bridgeSessionId), z.set(Ke.sessionId, Ke.lastSequenceNum), Ke.sessionGroupingId))
          fe.set(Ke.sessionId, Ke.sessionGroupingId);
        else fe.delete(Ke.sessionId);
        if (Ke.noHistoryBackfill) me.set(Ke.sessionId, !0);
        else me.delete(Ke.sessionId);
        {
          let { ownerAccountUuid: yn, ownerOrganizationUuid: er } = Ke,
            Cn = (yn !== void 0 && !VCe(yn)) || (er !== void 0 && !VCe(er));
          if (!Cn && yn) ge.set(Ke.sessionId, yn);
          else ge.delete(Ke.sessionId);
          if (!Cn && er) Ce.set(Ke.sessionId, er);
          else Ce.delete(Ke.sessionId);
        }
        let mn = _6(Ke.declaredDialogKinds);
        if (mn.length > 0) pe.set(Ke.sessionId, mn);
        else pe.delete(Ke.sessionId);
      } else if (Ke.type === "history-suppression" && Ke.sessionId) Ie.add(Ke.sessionId);
      else if (Ke.type === "file-history-snapshot") Pt.set(Ke.messageId, Ke);
      else if (Ke.type === "file-history-delta") {
        let mn = ct.get(Ke.messageId);
        if (mn) mn.push(Ke);
        else ct.set(Ke.messageId, [Ke]);
      } else if (Ke.type === "attribution-snapshot") ut.clear(), ut.set(Ke.messageId, Ke);
      else if (Ke.type === "content-replacement")
        if (Ke.agentId) {
          let mn = nn.get(Ke.agentId) ?? [];
          nn.set(Ke.agentId, mn), mn.push(...Ke.replacements);
        } else {
          let mn = en.get(Ke.sessionId) ?? [];
          en.set(Ke.sessionId, mn), mn.push(...Ke.replacements);
        }
      else if (Ke.type === "fork-context-ref") xt.set(Ke.agentId, Ke);
      else if (Ke.type === "marble-origami-commit") tt.push(Ke);
      else if (Ke.type === "marble-origami-snapshot") lt = Ke;
      else if (Ke.type === "marble-origami-reset") {
        if (tt.length > 0 || lt)
          n(`[marble-origami] reset tombstone (${Ke.reason}): discarding ${tt.length} pre-reset commit entries`);
        (tt.length = 0), (lt = void 0);
      }
    },
    dropPreBoundaryEntries: () => {
      t.clear(), Pt.clear(), ct.clear(), Lt.clear();
    },
    attributionSnapshots: ut,
    artifactCommentMonitors: ze,
    artifactAutoReactLedgers: We,
    setTailTorn: (hn) => {
      mt = hn;
    },
    finish: () => Sn(Zur(t)),
  };
  function Sn(hn) {
    if (mt) for (let [nr, Rr] of ze) ze.set(nr, { ...Rr, tailTorn: !0 });
    if (!e && At) return bn(new Set());
    let Ke = new Set(),
      mn = ht && nt && t.has(nt) && !t.get(nt)?.isSidechain;
    if (!e && (!hn || mn)) {
      let nr = nt && t.has(nt) ? nt : void 0;
      if (nr && !ht && Xe && t.has(Xe) && Xe !== nr) {
        let Rr = Xe,
          Lr = new Set();
        while (Rr && !Lr.has(Rr)) {
          if (Rr === nr) {
            nr = Xe;
            break;
          }
          Lr.add(Rr), (Rr = t.get(Rr)?.parentUuid ?? void 0);
        }
      }
      if (!hn) nr ??= Xe;
      if (nr && t.has(nr)) {
        let Rr = new Set(),
          Lr = t.get(nr);
        while (Lr) {
          if (Rr.has(Lr.uuid)) {
            s("tengu_transcript_parent_cycle", {});
            break;
          }
          if ((Rr.add(Lr.uuid), Lr.type === "user" || Lr.type === "assistant")) {
            Ke.add(Lr.uuid);
            break;
          }
          Lr = Lr.parentUuid ? t.get(Lr.parentUuid) : void 0;
        }
        if (Ke.size === 1) return bn(Ke);
      }
    }
    let yn = new Set(),
      er = new Set();
    for (let nr of t.values())
      if (nr.parentUuid !== null) {
        if ((yn.add(nr.parentUuid), nr.type === "user" || nr.type === "assistant")) er.add(nr.parentUuid);
      }
    let Cn = [];
    for (let nr of t.values()) if (!yn.has(nr.uuid)) Cn.push(nr);
    let Pn = !1;
    for (let nr of Cn) {
      let Rr = new Set(),
        Lr = nr;
      while (Lr) {
        if (Rr.has(Lr.uuid)) {
          Pn = !0;
          break;
        }
        if ((Rr.add(Lr.uuid), Lr.type === "user" || Lr.type === "assistant")) {
          if (!er.has(Lr.uuid)) Ke.add(Lr.uuid);
          break;
        }
        Lr = Lr.parentUuid ? t.get(Lr.parentUuid) : void 0;
      }
    }
    if (Pn) s("tengu_transcript_parent_cycle", {});
    if (!e && Ke.size > 1) {
      let nr = nt && Ke.has(nt) ? nt : Xe;
      if (!nr || !t.has(nr)) return bn(Ke);
      let Rr = new Set(),
        Lr = t.get(nr);
      while (Lr) {
        if (Rr.has(Lr.uuid)) break;
        if ((Rr.add(Lr.uuid), Lr.type === "user" || Lr.type === "assistant")) {
          Ke.clear(), Ke.add(Lr.uuid);
          break;
        }
        Lr = Lr.parentUuid ? t.get(Lr.parentUuid) : void 0;
      }
    }
    return bn(Ke);
  }
  function bn(hn) {
    return {
      messages: t,
      summaries: r,
      customTitles: o,
      endedSessions: u,
      aiTitles: d,
      tags: _,
      relocatedCwds: C,
      agentNames: A,
      agentColors: x,
      agentSettings: M,
      prNumbers: F,
      prUrls: U,
      prRepositories: B,
      bridgeSessionIds: W,
      bridgeLastSeqs: z,
      bridgeDialogKindsBySession: pe,
      bridgeSessionGroupingIds: fe,
      bridgeNoBackfill: me,
      bridgeOwnerAccountUuids: ge,
      bridgeOwnerOrganizationUuids: Ce,
      historySuppressed: Ie,
      modes: Ee,
      permissionModes: Pe,
      isolationLatches: Oe,
      atisLatches: Fe,
      worktreeStates: Be,
      artifactCommentMonitors: ze,
      artifactAutoReactLedgers: We,
      costStates: Ve,
      fileHistorySnapshots: Pt,
      fileHistoryDeltas: ct,
      attributionSnapshots: ut,
      contentReplacements: en,
      agentContentReplacements: nn,
      forkContextRefs: xt,
      contextCollapseCommits: tt,
      contextCollapseSnapshot: lt,
      leafUuids: hn,
      clearedToEmpty: !e && At,
      rewindAnchorUuid: dn ? nt : void 0,
    };
  }
}

function ECr(e, t) {
  let r = PGt(t?.keepAllLeaves ?? !1);
  for (let o of e) r.processEntry(o);
  return r.finish();
}

async function K7(e, t) {
  let r = PGt(t?.keepAllLeaves ?? !1),
    { processEntry: o, artifactCommentMonitors: u, artifactAutoReactLedgers: d } = r,
    _ = Me(process.env.CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP);
  if (O() && t?.storageV5) {
    let { backend: C, key: A } = t.storageV5,
      x = await C.read([A]),
      M = x.ok ? void 0 : PFe(x.error) ? await Fzt(C, A) : Uur(x.error) ? await Fzt(C, A, wK) : void 0,
      F = x.ok ? void 0 : M === void 0 ? x.error : M !== null && "failure" in M ? M.failure : void 0;
    if (F !== void 0) {
      if (F.code === "Failed" && F.failureClass === "permission")
        return (
          n("loadTranscriptFile: v5 read inaccessible (permission) \u2014 empty result"),
          Object.assign(r.finish(), { servedBy: "inaccessible" })
        );
      n(`loadTranscriptFile: v5 read failed (${F.code})`, { level: "error" });
      let fe = o1("telemetryCode" in F ? F.telemetryCode : void 0);
      throw Object.assign(
        Error("loadTranscriptFile: transcript unreadable via storage backend", { cause: F }),
        fe === void 0 ? {} : { code: fe },
      );
    }
    let U = x.ok ? x.value.items[0] : void 0,
      B = M !== void 0 && M !== null && "bytes" in M ? M : void 0,
      W = U?.found
        ? { servedBy: "v5", v5Read: { mtimeMs: U.mtimeMs } }
        : B
          ? { servedBy: "v5-records", v5Read: { mtimeMs: B.mtimeMs } }
          : { servedBy: "absent" },
      z = U?.found ? U.value : B?.bytes,
      pe = U?.found ? U.storedBytes : B?.storedBytes;
    if (z !== void 0) {
      let fe = Buffer.from(z.buffer, z.byteOffset, z.byteLength),
        me = async () => {
          if (B !== void 0) return B.tornTailBytes > 0;
          let Ce = await C.stat(A);
          return Ce.ok && (Ce.value.tornTailBytes ?? 0) > 0;
        };
      if (!_ && (pe ?? fe.length) > b4) {
        let Ce = CGt(pdr(fe), o, r.dropPreBoundaryEntries, t?.keepAllLeaves ?? !1),
          Ie = _dr(fe, Ce.lastAttributionOffset, Ce.lastAttributionLength);
        if (Ie) r.attributionSnapshots.set(Ie.messageId, Ie);
        let Ee =
            Ce.finalLine.offset >= 0 &&
            Ce.ledgerLines.at(-1)?.offset !== Ce.finalLine.offset &&
            (Ce.ledgerLines.length > 0 || d.size > 0),
          Pe = (Ee ? [...Ce.ledgerLines, Ce.finalLine] : Ce.ledgerLines).map(({ offset: Fe, length: Be }) =>
            fe.subarray(Fe, Fe + Be),
          ),
          Oe = Ee && $ce(Pe.pop() ?? null);
        if ((Nce(Pe, d, Oe), u.size > 0 || d.size > 0)) {
          let Fe = await me();
          if ((r.setTailTorn(Fe), Fe)) for (let [Be, ze] of d) d.set(Be, v$e(ze, !1));
        }
        return Object.assign(r.finish(), W);
      }
      let ge = $ce(jzt(fe));
      if (!t?.keepAllLeaves && fe.length > b4) fe = Hzt(fe);
      for (let Ce of yfe(fe)) o(Ce);
      if ((Nce(Wzt(fe), d, ge), u.size > 0 || d.size > 0)) {
        let Ce = await me();
        if ((r.setTailTorn(Ce), Ce)) for (let [Ie, Ee] of d) d.set(Ie, v$e(Ee, !1));
      }
    }
    return Object.assign(r.finish(), W);
  }
  try {
    if (!_) {
      let { size: x } = await Dy(e);
      if (x > b4) {
        let M = mdr(e, x, o, r.dropPreBoundaryEntries, t?.keepAllLeaves ?? !1),
          F = hdr(e, M.lastAttributionOffset, M.lastAttributionLength);
        if (F) r.attributionSnapshots.set(F.messageId, F);
        let U =
            M.finalLine.offset >= 0 &&
            M.ledgerLines.at(-1)?.offset !== M.finalLine.offset &&
            (M.ledgerLines.length > 0 || d.size > 0),
          B = RGt(e, U ? [...M.ledgerLines, M.finalLine] : M.ledgerLines),
          W = U && $ce(B.pop() ?? null);
        if ((Nce(B, d, W), u.size > 0)) r.setTailTorn(!(await gdr(e, x)));
        return r.finish();
      }
    }
    let C = await fR(e),
      A = $ce(jzt(C));
    if ((r.setTailTorn(C.length > 0 && C.at(-1) !== 10), !t?.keepAllLeaves && C.length > b4)) C = Hzt(C);
    for (let x of yfe(C)) o(x);
    Nce(Wzt(C), d, A);
  } catch (C) {
    if (!Ht(C)) {
      if (Zd(C) || Vp(C)) n(`loadTranscriptFile: transcript unreadable (${E(C)}): ${l(C)}`, { level: "error" });
      else h(C);
      throw C;
    }
  }
  return r.finish();
}

async function Y$e(e, t, r) {
  if (O() && r !== void 0)
    if (t === void 0) {
      let d = await bdr(e, r);
      if (d !== void 0) {
        let _ = await K7(d.path, { storageV5: { backend: r, key: d.key } });
        return Object.assign(_, { sessionFile: d.path });
      }
    } else {
      let d = Nc(t, r);
      if (d !== void 0) {
        let _ = await K7(t, { storageV5: d });
        return Object.assign(_, { sessionFile: t });
      }
    }
  let o = t ?? (await kdr(e)),
    u = await K7(o);
  return Object.assign(u, { sessionFile: o });
}

async function bdr(e, t) {
  if (!Zt(e)) return;
  let r = Ty();
  if (r !== null) {
    let A = sU(r);
    if (sh(r) !== Nl() || !Zt(A)) return;
    let x = tU(Te.transcript(A, e));
    if (x === void 0) return;
    return { key: x, path: wa(r, `${e}.jsonl`) };
  }
  let o = Se(),
    u = Cm(o),
    d = [u],
    _ = GJe(o);
  if (_ !== void 0) d.push(_);
  else if (u.length > UO) {
    let x = (fe) => fe,
      M = x(u.slice(0, UO) + "-"),
      F = x(u),
      U = new Set(),
      B = [],
      W,
      z = 0;
    try {
      do {
        let fe = await t.listEntries(
          { namespace: "transcript" },
          { skipScopeStats: !0, ...(W !== void 0 && { cursor: W }) },
        );
        if (!fe.ok) break;
        for (let me of fe.value.items)
          if (
            me.kind === "scope" &&
            me.scope.namespace === "transcript" &&
            me.scope.projectKey !== void 0 &&
            x(me.scope.projectKey).startsWith(M) &&
            x(me.scope.projectKey) !== F &&
            Zt(me.scope.projectKey) &&
            !U.has(x(me.scope.projectKey))
          )
            U.add(x(me.scope.projectKey)), B.push(me.scope.projectKey);
        W = fe.value.cursor;
      } while (W && ++z < aVt);
    } catch {}
    let pe = { backend: t, transcriptKey: Te.transcript, isKeySegment: Zt, realWorkspacePath: Gwe(t) };
    for (let fe of B) if (await SJ(wa(Nl(), fe), o, !1, _d(pe))) d.push(fe);
  }
  for (let A of d) {
    let x = tU(Te.transcript(A, e));
    if (x === void 0) continue;
    if ((await t.stat(x)).ok) return { key: x, path: wa(Nl(), A, `${e}.jsonl`) };
  }
  let C = tU(Te.transcript(u, e));
  return C === void 0 ? void 0 : { key: C, path: wa(Nl(), u, `${e}.jsonl`) };
}

async function kdr(e) {
  let t = Ty(),
    r = Se(),
    o = `${e}.jsonl`,
    u = wa(t ?? bl(r), o);
  if (t !== null) return u;
  for (let d of await fb(r)) {
    let _ = wa(d, o);
    try {
      return await Dy(_), _;
    } catch {}
  }
  return u;
}

function fzn() {
  Ai().clearSessionMessagesCache();
}

function HUt(e, t) {
  Ai().primeSessionMessagesCache(e, t);
}

async function Kpt(e, t, r) {
  return (await Ai().sessionMessages(e, r)).has(t);
}

async function Jqe(e, t, r) {
  try {
    let { messages: o } = await Y$e(e, void 0, r);
    return Shr([...o.values()], t);
  } catch (o) {
    return (
      n(`isMessageTurnUnanswered: loadSessionFile failed: ${o instanceof Error ? o.message : String(o)}`, {
        level: "error",
      }),
      !1
    );
  }
}

function Shr(e, t) {
  let r = e.findIndex((d) => d.uuid === t);
  if (r === -1) return !1;
  let o = [];
  for (let d = r + 1; d < e.length; d++) {
    let _ = e[d];
    if ((_.type === "user" || _.type === "assistant") && !_.isSidechain) o.push(_);
  }
  if (o.length === 0) return !0;
  let u = o.at(-1);
  if (!(u.type === "user" && u.interruptedByShutdown === !0)) return !1;
  for (let d = o.length - 2; d >= 0; d--) {
    let _ = o[d];
    if (_.type === "assistant") continue;
    if (("isCompactSummary" in _ && _.isCompactSummary === !0) || NA(_) || gk(_) || M0e(_)) continue;
    return !1;
  }
  return !0;
}

async function X7(e, t, r) {
  let o = await Y$e(e, t, r),
    { sessionFile: u, v5Read: d } = o;
  return bhr(e, o, { path: u, modifiedAt: async () => (d !== void 0 ? new Date(d.mtimeMs) : (await Dy(u)).mtime) });
}

async function bhr(e, t, r) {
  let {
    messages: o,
    summaries: u,
    customTitles: d,
    endedSessions: _,
    aiTitles: C,
    tags: A,
    relocatedCwds: x,
    agentNames: M,
    agentColors: F,
    agentSettings: U,
    prNumbers: B,
    prUrls: W,
    prRepositories: z,
    bridgeSessionIds: pe,
    bridgeLastSeqs: fe,
    bridgeDialogKindsBySession: me,
    bridgeSessionGroupingIds: ge,
    bridgeNoBackfill: Ce,
    bridgeOwnerAccountUuids: Ie,
    bridgeOwnerOrganizationUuids: Ee,
    historySuppressed: Pe,
    modes: Oe,
    permissionModes: Fe,
    isolationLatches: Be,
    atisLatches: ze,
    worktreeStates: We,
    artifactCommentMonitors: Ve,
    artifactAutoReactLedgers: Pt,
    costStates: ct,
    fileHistorySnapshots: ut,
    fileHistoryDeltas: en,
    attributionSnapshots: nn,
    contentReplacements: xt,
    contextCollapseCommits: tt,
    contextCollapseSnapshot: lt,
    leafUuids: mt,
    clearedToEmpty: Xe,
  } = t;
  if (o.size === 0) return null;
  if (r === void 0) Ai().primeFilelessResume(e, o.keys());
  else HUt(e, o.keys());
  let nt =
    cI(o.values(), (Ke) => mt.has(Ke.uuid) && !Ke.isSidechain && (Ke.type === "user" || Ke.type === "assistant")) ??
    (mt.size === 0 && !Xe ? cI(o.values(), (Ke) => !Ke.isSidechain) : void 0);
  if (!nt) {
    if (Xe && r !== void 0) {
      let Ke = await r.modifiedAt();
      return q$e(t, { date: Ke.toISOString(), fullPath: r.path, created: Ke, modified: Ke }, e);
    }
    return null;
  }
  let ht = VSe(o, nt);
  $cn(o, ht, nt.sessionId);
  let At = nt.sessionId,
    dn = u.get(nt.uuid),
    Lt = d.get(At),
    fn = A.get(At),
    Sn = U.get(At),
    bn = L$e(ht, 0, dn, Lt, Jce(ut, en, ht), fn, r?.path, Zce(nn, ht), Sn, xt.get(At) ?? []),
    hn = x.get(At);
  return {
    ...bn,
    ...(r === void 0 && { sessionId: e }),
    projectPath: hn ?? bn.projectPath,
    rewindAnchorUuid: t.rewindAnchorUuid,
    aiTitle: C.get(At),
    relocatedCwd: hn,
    ...jce({}, _.has(At)),
    agentName: M.get(At) ?? bn.agentName,
    agentColor: F.get(At),
    mode: Oe.get(At),
    permissionMode: Fe.get(At),
    isolationLatch: Be.get(At),
    atisLatch: aue(ze, At),
    prNumber: B.get(At),
    prUrl: W.get(At),
    prRepository: z.get(At),
    bridgeSessionId: pe.get(At),
    bridgeLastSeq: fe.get(At),
    bridgeDialogKinds: me.get(At),
    bridgeSessionGroupingId: ge.get(At),
    bridgeNoHistoryBackfill: Ce.get(At),
    bridgeOwnerAccountUuid: Ie.get(At),
    bridgeOwnerOrganizationUuid: Ee.get(At),
    sessionHistorySuppressed: Pe.has(At) ? !0 : void 0,
    worktreeSession: We.get(At),
    artifactCommentMonitor: Ve.get(At),
    artifactAutoReactLedger: Pt.get(At),
    costState: ct.get(At),
    contextCollapseCommits: tt.filter((Ke) => Ke.sessionId === At),
    contextCollapseSnapshot: lt?.sessionId === At ? lt : void 0,
  };
}

async function whr(e, t) {
  let r = await Ucn(e, t),
    { logs: o } = await ute(r, 0, r.length, t),
    u = BO(o);
  return (
    u.forEach((d, _) => {
      d.value = _;
    }),
    u
  );
}

async function mzn(e, t, r) {
  let o = Buffer.alloc(bp);
  for (let u of e) {
    let d = await FGt(u, o, r);
    if (d && t(d)) return d;
  }
  return null;
}

async function ACr(e, t) {
  if (t?.skipIndex) return wdr(e, t.storageV5);
  return (await xPe(e, t?.initialEnrichCount ?? mue, t?.storageV5)).logs;
}

async function pue(e) {
  let t = new Set(),
    r,
    o = 0;
  try {
    do {
      let u = await e.listEntries(
        { namespace: "transcript" },
        { skipScopeStats: !0, ...(r !== void 0 && { cursor: r }) },
      );
      if (!u.ok) return;
      for (let d of u.value.items) {
        let _ = fU(d, Zt);
        if (_ !== void 0) t.add(_);
      }
      r = u.value.cursor;
    } while (r && ++o < xGt);
    if (r) return;
  } catch {
    return;
  }
  return [...t];
}

async function wdr(e, t) {
  let r = Nl(),
    o = O() && t ? await pue(t) : void 0;
  if (t && o !== void 0) {
    let M = await Promise.all(o.map((B) => qzt(wa(r, B), e, { backend: t, projectKey: B }))),
      F = new Map();
    for (let B of M.flat()) {
      let W = `${B.sessionId ?? ""}:${B.leafUuid ?? ""}`,
        z = F.get(W);
      if (!z || B.modified.getTime() > z.modified.getTime()) F.set(W, B);
    }
    let U = BO([...F.values()]);
    return (
      U.forEach((B, W) => {
        B.value = W;
      }),
      U
    );
  }
  let u;
  try {
    u = await uR(r, { withFileTypes: !0 });
  } catch {
    return [];
  }
  let d = u.filter((M) => M.isDirectory()).map((M) => wa(r, M.name)),
    C = (await Promise.all(d.map((M) => qzt(M, e)))).flat(),
    A = new Map();
  for (let M of C) {
    let F = `${M.sessionId ?? ""}:${M.leafUuid ?? ""}`,
      U = A.get(F);
    if (!U || M.modified.getTime() > U.modified.getTime()) A.set(F, M);
  }
  let x = BO([...A.values()]);
  return (
    x.forEach((M, F) => {
      M.value = F;
    }),
    x
  );
}

async function xPe(e, t = mue, r) {
  let o = Nl(),
    u = O() && r ? await pue(r) : void 0,
    d;
  if (u !== void 0) d = u.map((M) => wa(o, M));
  else {
    let M;
    try {
      M = await uR(o, { withFileTypes: !0 });
    } catch {
      return { logs: [], allStatLogs: [], nextIndex: 0 };
    }
    d = M.filter((F) => F.isDirectory()).map((F) => wa(o, F.name));
  }
  let _ = await Promise.all(d.map((M) => cte(M, e, void 0, r))),
    C = TK(_.flat()),
    { logs: A, nextIndex: x } = await ute(C, 0, t, r);
  return (
    BO(A).forEach((M, F) => {
      M.value = F;
    }),
    { logs: A, allStatLogs: C, nextIndex: x }
  );
}

async function Qqe(e, t, r = mue, o) {
  return (await ebe(e, t, r, o)).logs;
}

async function ebe(e, t, r = mue, o) {
  n(`/resume: loading sessions for cwd=${Se()}, worktrees=[${e.join(", ")}]`);
  let u = await MGt(e, t, o);
  n(`/resume: found ${u.length} session files on disk`);
  let { logs: d, nextIndex: _ } = await ute(u, 0, r, o);
  return (
    BO(d).forEach((C, A) => {
      C.value = A;
    }),
    { logs: d, allStatLogs: u, nextIndex: _ }
  );
}

async function MGt(e, t, r) {
  let o = Nl(),
    u = Se(),
    d,
    _ = (Fe) => (d ??= pue(Fe)),
    C = X$e,
    A = C(u),
    x = e
      .filter((Fe) => {
        let Be = C(Fe);
        return A === Be || A.startsWith(Be + "/");
      })
      .sort((Fe, Be) => Be.length - Fe.length)[0],
    F = te((await Promise.all((x && x !== u ? [u, x] : [u]).map((Fe) => uGt(Fe, r)))).flat()),
    U =
      F.length > 0
        ? (await Promise.all(F.map((Fe) => cte(Fe, t, void 0, r)))).flat().map((Fe) => ({ ...Fe, isAlias: !0 }))
        : [];
  if (e.length <= 1) {
    let Fe = bl(u),
      Be = await cte(Fe, void 0, u, r),
      ze = N$e.test(u) && (await Gce(Be, u, r)) ? await $$e(u, Fe, t, !1, void 0, r, _) : [],
      We = x ?? u,
      Ve = !1,
      ct = `${hA(We)}--claude-worktrees-`,
      ut = [],
      en = O() && r ? await _(r) : void 0;
    if (en !== void 0)
      ut = (await Promise.all(en.filter((nn) => nn.startsWith(ct)).map((nn) => cte(wa(o, nn), t, void 0, r)))).flat();
    else
      try {
        let nn = await uR(o, { withFileTypes: !0 });
        ut = (
          await Promise.all(
            nn
              .filter((xt) => xt.isDirectory() && xt.name.startsWith(ct))
              .map((xt) => cte(wa(o, xt.name), t, void 0, r)),
          )
        ).flat();
      } catch (nn) {
        n(`Failed to sweep .claude/worktrees project dirs under ${o}: ${nn}`);
      }
    if (U.length > 0 || ze.length > 0 || ut.length > 0) return TK([...Be, ...ze, ...ut, ...U]);
    return Be;
  }
  let B = !1,
    W = e.map((Fe) => {
      let Be = Cm(Fe),
        ze = B ? Be.toLowerCase() : Be;
      return { path: Fe, exactName: ze, truncatedPrefix: Be.length > UO ? ze.slice(0, UO) : void 0 };
    });
  W.sort((Fe, Be) => Be.exactName.length - Fe.exactName.length);
  let z = new Set(),
    pe,
    fe = O() && r ? await _(r) : void 0;
  if (fe !== void 0) pe = fe;
  else {
    let Fe;
    try {
      Fe = await uR(o, { withFileTypes: !0 });
    } catch (Be) {
      n(`Failed to read projects dir ${o}, falling back to current project: ${Be}`);
      let ze = bl(Se()),
        We = await cte(ze, t, Se(), r);
      return U.length > 0 ? TK(We.concat(U)) : We;
    }
    pe = Fe.filter((Be) => Be.isDirectory()).map((Be) => Be.name);
  }
  let me = x === void 0 ? [u, ...e] : e,
    ge = [];
  if (x === void 0) {
    let Fe = bl(u),
      Be = sU(Fe);
    z.add(B ? Be.toLowerCase() : Be), ge.push({ projectDir: Fe, wtPath: u });
  }
  for (let Fe of pe) {
    let Be = B ? Fe.toLowerCase() : Fe;
    if (z.has(Be)) continue;
    for (let { path: ze, exactName: We, truncatedPrefix: Ve } of W)
      if (
        Be === We ||
        (Ve !== void 0
          ? Be.startsWith(Ve + "-") && (await SJ(wa(o, Fe), ze, B, _d(Ng(r))))
          : We.length < UO && Be.startsWith(We + "-"))
      ) {
        z.add(Be), ge.push({ projectDir: wa(o, Fe), wtPath: ze });
        break;
      }
  }
  let Ce = await Promise.all(ge.map(({ projectDir: Fe, wtPath: Be }) => cte(Fe, void 0, Be, r, me))),
    Ie = new Map();
  for (let Fe = 0; Fe < ge.length; Fe++) {
    let Be = ge[Fe].wtPath,
      ze = Ie.get(Be) ?? [];
    ze.push(...Ce[Fe]), Ie.set(Be, ze);
  }
  let Ee = [];
  for (let Fe of me) if (N$e.test(Fe) && (await Gce(Ie.get(Fe) ?? [], Fe, r, me))) Ee.push(Fe);
  let Pe = Ee.length > 0 ? await OGt(r, _) : [],
    Oe = await Promise.all(
      Ee.map(async (Fe) => {
        let Be = Fe;
        try {
          if (O() && r !== void 0) {
            let ze = await Gwe(r)(Fe);
            if (ze.ok && ze.value.found) Be = tr(ze.value.path);
            else if (!ze.ok)
              n(
                `/resume: worktree path not resolved through the storage backend (${Ge(ze.error)}); using it as registered`,
              );
          } else Be = tr(await Yzt(Fe));
        } catch {}
        return $$e(Be, bl(Fe), t, !0, Pe, r);
      }),
    );
  return TK(Ce.flat().concat(Oe.flat(), U));
}

function X$e(e) {
  return pFe(e, !1);
}

async function Gce(e, t, r, o) {
  let u = Buffer.alloc(bp);
  for (let d of e) if (!(await IGt(d, t, u, r, o))) return !1;
  return !0;
}

async function IGt(e, t, r, o, u) {
  if (!e.fullPath) return !1;
  let d = await Q$e(e.fullPath, e.fileSize ?? 0, r, o),
    _ = d.relocatedCwd ?? d.headCwdStrict;
  if (_ === void 0) return !1;
  if (mFe(_, u, Goe())) return !1;
  return fFe(_, t, Goe(), nQe, Nu(o));
}

async function OGt(e, t) {
  let r = Nl(),
    o,
    u = O() && e ? await (t ?? pue)(e) : void 0;
  if (u !== void 0) o = u;
  else {
    let C;
    try {
      C = await uR(r, { withFileTypes: !0 });
    } catch {
      return [];
    }
    o = C.filter((A) => A.isDirectory()).map((A) => A.name);
  }
  let d = No(Tdr, async (C) => {
    let A = wa(r, C),
      M = [...(await PPe(A, e)).values()].sort((U, B) => B.mtime - U.mtime)[0];
    if (!M) return null;
    let F = Buffer.allocUnsafe(bp);
    try {
      let U = await Q$e(M.path, M.size, F, e),
        B = U.relocatedCwd ?? U.headCwdStrict;
      if (B) return { projectDir: A, recordedCwd: X$e(B) };
    } catch {}
    return null;
  });
  return (await Promise.all(o.map((C) => d(C)))).filter((C) => C !== null);
}

async function $$e(e, t, r, o = !1, u, d, _) {
  let C = u ?? (await OGt(d, _)),
    A = X$e(e),
    x = [];
  for (let { projectDir: F, recordedCwd: U } of C) {
    if (F === t) continue;
    if (U !== A && !(o && U.startsWith(A + "/"))) continue;
    let W = [...(await PPe(F, d)).entries()].sort((z, pe) => pe[1].mtime - z[1].mtime);
    if (r && W.length > r) W = W.slice(0, r);
    for (let [z, pe] of W)
      x.push({
        date: new Date(pe.mtime).toISOString(),
        messages: [],
        isLite: !0,
        fullPath: pe.path,
        value: 0,
        created: new Date(pe.ctime),
        modified: new Date(pe.mtime),
        firstPrompt: "",
        messageCount: 0,
        fileSize: pe.size,
        isSidechain: !1,
        sessionId: z,
        projectPath: e,
      });
  }
  let M = BO(x);
  return (
    M.forEach((F, U) => {
      F.value = U;
    }),
    M
  );
}

async function lte(e, t, r) {
  let o = mp(e);
  await qr().hydrateAgentTranscriptOnDemand(e, t, r?.signal);
  let u = t === void 0 ? void 0 : Jh(o),
    d = !O() || t === void 0 || u === void 0 ? void 0 : { storageV5: { backend: t, key: u } };
  if (O() && t !== void 0 && d === void 0)
    n("getAgentTranscript: agent transcript path is outside the storage keyspace; reading it raw");
  try {
    let _ = await K7(o, d);
    if (_.servedBy === "absent")
      return n("getAgentTranscript: the storage backend does not hold this agent transcript"), null;
    if (_.servedBy === "inaccessible")
      return (
        n("getAgentTranscript: the storage backend cannot serve this agent transcript (permission); not resumable"),
        null
      );
    let { messages: C, agentContentReplacements: A, forkContextRefs: x } = _,
      M = Array.from(C.values()).filter((me) => me.agentId === e && me.isSidechain);
    if (M.length === 0) return null;
    let F = new Set(M.map((me) => me.parentUuid)),
      U = cI(
        M,
        (me) => !F.has(me.uuid) && !(me.type === "system" && "subtype" in me && me.subtype === "compact_boundary"),
      );
    if (!U) return null;
    let z = VSe(C, U)
        .filter((me) => me.agentId === e)
        .map(({ isSidechain: me, parentUuid: ge, promptId: Ce, ...Ie }) => Ie),
      pe = x.get(e);
    return { messages: pe === void 0 ? z : (await uhr(pe, void 0, t)).concat(z), contentReplacements: A.get(e) ?? [] };
  } catch (_) {
    if (d !== void 0) {
      let C = _ instanceof Error && typeof _.cause === "object" && _.cause !== null ? _.cause : {};
      n(
        C.failureClass === void 0
          ? "getAgentTranscript: cannot resume this agent transcript flag-on (thrown while loading)"
          : `getAgentTranscript: the storage backend cannot serve this agent transcript (${[C.failureClass, C.telemetryCode].filter((A) => A !== void 0).join("/")}); not resumable`,
      );
    }
    return null;
  }
}

function nun(e) {
  let t = [];
  for (let r of e)
    if (
      r.type === "progress" &&
      r.data &&
      typeof r.data === "object" &&
      "type" in r.data &&
      (r.data.type === "agent_progress" || r.data.type === "skill_progress") &&
      "agentId" in r.data &&
      typeof r.data.agentId === "string"
    )
      t.push(r.data.agentId);
  return te(t);
}

async function xUt(e, t) {
  let r = await Promise.all(
    e.filter(EVt).map(async (o) => {
      try {
        let u = await lte(po(o), t);
        if (u && u.messages.length > 0) return { agentId: o, transcript: u.messages };
        return null;
      } catch {
        return null;
      }
    }),
  );
  return Object.fromEntries(r.filter((o) => o !== null).map((o) => [o.agentId, o.transcript]));
}

async function run(e) {
  return xUt(await Ayt(O() && e !== void 0 ? e : void 0), e);
}

function tM(e) {
  if (e.type === "progress") return !1;
  if (
    e.type === "attachment" &&
    e.attachment.type === "hook_success" &&
    !e.attachment.content &&
    !e.attachment.stdout?.trim() &&
    !e.attachment.stderr?.trim()
  )
    return !1;
  if (e.type === "attachment" && Acn() !== "ant" && vdr.has(e.attachment.type)) return !1;
  return !0;
}

function IUt(e, t = new Set()) {
  for (let r of e)
    if (r.type === "assistant" && Array.isArray(r.message.content)) {
      for (let o of r.message.content) if (o.type === "tool_use" && o.name === $s) t.add(o.id);
    }
  return t;
}

function Edr(e, t) {
  let r = new Set();
  if (e.some((o) => o.type === "assistant" && o.resumedFromIncompleteThinking === !0))
    for (let { fromIdx: o, toIdx: u } of oBt(e)) for (let d = o; d <= u; d++) r.add(d);
  return e.flatMap((o, u) => {
    if (o.type === "assistant" && Array.isArray(o.message.content)) {
      let d = o.message.content,
        C = d.some((A) => A.type === "tool_use" && A.name === $s)
          ? d.filter((A) => !(A.type === "tool_use" && A.name === $s))
          : d;
      if (C.length === 0) return [];
      if (o.isVirtual && !r.has(u) && o.virtualInResumeRun !== !0) {
        let { isVirtual: A, ...x } = o;
        return [{ ...x, message: { ...o.message, content: C } }];
      }
      if (C !== d) return [{ ...o, message: { ...o.message, content: C } }];
      return [o];
    }
    if (o.type === "user" && Array.isArray(o.message.content)) {
      let d = o.message.content,
        C = d.some((A) => A.type === "tool_result" && t.has(A.tool_use_id))
          ? d.filter((A) => !(A.type === "tool_result" && t.has(A.tool_use_id)))
          : d;
      if (C.length === 0) return [];
      if (o.isVirtual && !r.has(u) && o.virtualInResumeRun !== !0) {
        let { isVirtual: A, ...x } = o;
        return [{ ...x, message: { ...o.message, content: C } }];
      }
      if (C !== d) return [{ ...o, message: { ...o.message, content: C } }];
      return [o];
    }
    if (
      "isVirtual" in o &&
      o.isVirtual &&
      !r.has(u) &&
      ("virtualInResumeRun" in o ? o.virtualInResumeRun !== !0 : !0)
    ) {
      let { isVirtual: d, ..._ } = o;
      return [_];
    }
    return [o];
  });
}

function IPe(e, t = e) {
  let r = e.filter(tM);
  if (Acn() === "ant") return r;
  let o = t instanceof Set ? t : IUt(t);
  return Edr(r, o);
}

async function CCr(e, t) {
  return (await whr(void 0, t))[e] || null;
}

function Thr(e, t) {
  let r = null;
  for (let o of e)
    if (o.type === "assistant") {
      let u = o.message.content;
      if (Array.isArray(u)) {
        for (let d of u)
          if (d.type === "tool_use" && d.id === t) {
            r = o;
            break;
          }
      }
    } else if (o.type === "user") {
      if (MI(o)) continue;
      let u = o.message.content;
      if (Array.isArray(u)) {
        for (let d of u) if (d.type === "tool_result" && d.tool_use_id === t) return null;
      }
    }
  return r;
}

async function Xpt(e, t) {
  let r;
  try {
    r = Hl();
    let o = Nc(r, t),
      { messages: u } = await K7(r, o && { storageV5: o }),
      d = Thr(u.values(), e);
    if (!d)
      n(
        `findUnresolvedToolUse: no unresolved tool_use ${e} \u2014 not found in transcript or already resolved by a tool_result (${r}, ${u.size} messages)`,
        { level: "warn" },
      );
    return d;
  } catch (o) {
    return (
      n(`findUnresolvedToolUse: failed to read transcript${r ? ` ${r}` : ""} for tool_use ${e}: ${o}`, {
        level: "warn",
      }),
      null
    );
  }
}

async function gzn(e, t) {
  try {
    let r =
      !O() || t === void 0
        ? void 0
        : await Xce(e, 1048576, t).catch(() => {
            return;
          });
    if (r === null) return null;
    let o;
    if (r !== void 0) {
      if (
        ((o = r.content.split(`
`)),
        r.cut)
      )
        o.shift();
    } else {
      let { content: C, bytesRead: A, bytesTotal: x } = await _b(e, 1048576);
      if (
        ((o = C.split(`
`)),
        A < x)
      )
        o.shift();
    }
    let u = null,
      d = -1;
    for (let C = o.length - 1; C >= 0; C--) {
      let A = o[C].trim();
      if (!A.includes('"hook_deferred_tool"')) continue;
      let x = V(A);
      if (x?.type === "attachment" && x.attachment?.type === "hook_deferred_tool") {
        (u = x.attachment), (d = C);
        break;
      }
    }
    if (!u) return null;
    let _ = `"tool_use_id":"${u.toolUseID}"`;
    for (let C = d + 1; C < o.length; C++) if (o[C].includes(_)) return null;
    return u;
  } catch {
    return null;
  }
}

async function DGt(e, t) {
  let r = new Map();
  try {
    return (
      await Ao(
        (u) =>
          e.listEntries(
            { namespace: "transcript", projectKey: t },
            { skipScopeStats: !0, ...(u !== void 0 && { cursor: u }) },
          ),
        (u) => {
          for (let d of u) {
            if (
              d.kind !== "key" ||
              d.key.namespace !== "transcript" ||
              d.key.projectKey !== t ||
              d.key.agentId !== void 0 ||
              d.key.agentRelPath !== void 0 ||
              d.mtimeMs === void 0
            )
              continue;
            let _ = Kr(d.key.sessionId);
            if (_ === null || r.has(_)) continue;
            let C = tU(Te.transcript(t, _));
            if (C === void 0) continue;
            r.set(_, { key: C, mtimeMs: d.mtimeMs, createdMs: d.createdMs, size: d.size });
          }
        },
        { maxPages: xGt },
      )
    ).status === "done"
      ? r
      : void 0;
  } catch {
    return;
  }
}

async function Cdr(e, t) {
  let r = sU(e);
  if (sh(e) !== Nl() || !Zt(r)) return;
  let o = await DGt(t, r);
  if (o === void 0) return;
  let u = new Map();
  for (let [d, _] of o)
    u.set(d, { path: wa(e, `${d}.jsonl`), mtime: _.mtimeMs, ctime: _.createdMs ?? _.mtimeMs, size: _.size ?? 0 });
  return u;
}

async function PPe(e, t) {
  let r = O() && t ? await Cdr(e, t) : void 0;
  if (r !== void 0) return r;
  let o = new Map(),
    u;
  try {
    u = await uR(e, { withFileTypes: !0 });
  } catch {
    return o;
  }
  let d = [];
  for (let _ of u) {
    if (!_.isFile() || !_.name.endsWith(".jsonl")) continue;
    let C = Kr(sU(_.name, ".jsonl"));
    if (!C) continue;
    d.push({ sessionId: C, filePath: wa(e, _.name) });
  }
  return (
    await Promise.all(
      d.map(async ({ sessionId: _, filePath: C }) => {
        try {
          let A = await Dy(C);
          o.set(_, { path: C, mtime: A.mtime.getTime(), ctime: A.birthtime.getTime(), size: A.size });
        } catch {
          n(`Failed to stat session file: ${C}`);
        }
      }),
    ),
    o
  );
}

async function Zqe(e, t, r) {
  let {
    messages: o,
    summaries: u,
    customTitles: d,
    endedSessions: _,
    aiTitles: C,
    tags: A,
    relocatedCwds: x,
    agentNames: M,
    agentColors: F,
    agentSettings: U,
    prNumbers: B,
    prUrls: W,
    prRepositories: z,
    modes: pe,
    permissionModes: fe,
    isolationLatches: me,
    atisLatches: ge,
    fileHistorySnapshots: Ce,
    fileHistoryDeltas: Ie,
    attributionSnapshots: Ee,
    contentReplacements: Pe,
    leafUuids: Oe,
  } = await K7(e, O() && r ? { keepAllLeaves: !0, storageV5: r } : { keepAllLeaves: !0 });
  if (o.size === 0) return [];
  let Fe = [];
  for (let We of o.values()) if (Oe.has(We.uuid)) Fe.push(We);
  let Be = wGt(o),
    ze = [];
  for (let We of Fe) {
    let Ve = VSe(o, We, Be);
    if (Ve.length === 0) continue;
    let Pt = Ve[0],
      ct = We.sessionId;
    ze.push({
      date: We.timestamp,
      messages: Wpt(Ve),
      fullPath: e,
      value: 0,
      created: new Date(Pt.timestamp),
      modified: new Date(We.timestamp),
      firstPrompt: G$e(Ve),
      messageCount: K$e(Ve),
      isSidechain: Pt.isSidechain ?? !1,
      sessionId: ct,
      leafUuid: We.uuid,
      summary: u.get(We.uuid),
      customTitle: d.get(ct),
      ...jce({}, _.has(ct)),
      aiTitle: C.get(ct),
      tag: A.get(ct),
      relocatedCwd: x.get(ct),
      agentName: M.get(ct),
      agentColor: F.get(ct),
      agentSetting: U.get(ct),
      mode: pe.get(ct),
      permissionMode: fe.get(ct),
      isolationLatch: me.get(ct),
      atisLatch: aue(ge, ct),
      prNumber: B.get(ct),
      prUrl: W.get(ct),
      prRepository: z.get(ct),
      gitBranch: We.gitBranch,
      projectPath: t ?? Pt.cwd,
      fileHistorySnapshots: Jce(Ce, Ie, Ve),
      attributionSnapshots: Zce(Ee, Ve),
      contentReplacements: Pe.get(ct) ?? [],
    });
  }
  return ze;
}

async function Adr(e, t, r) {
  let o = await DGt(t, r);
  return o === void 0
    ? void 0
    : Array.from(o, ([u, d]) => ({ path: wa(e, `${u}.jsonl`), mtime: d.mtimeMs, key: d.key }));
}

async function qzt(e, t, r) {
  if (O() && r) {
    let { backend: _, projectKey: C } = r,
      A = await Adr(e, _, C);
    if (A !== void 0) {
      if (A.length === 0) return [];
      let x = t && A.length > t ? [...A].sort((F, U) => U.mtime - F.mtime).slice(0, t) : A,
        M = [];
      for (let F of x)
        try {
          let U = await Zqe(F.path, void 0, { backend: _, key: F.key });
          M.push(...U);
        } catch {
          n(`Failed to load session file: ${F.path}`);
        }
      return M;
    }
  }
  let o = await PPe(e);
  if (o.size === 0) return [];
  let u;
  if (t && o.size > t) u = [...o.values()].sort((_, C) => C.mtime - _.mtime).slice(0, t);
  else u = [...o.values()];
  let d = [];
  for (let _ of u)
    try {
      let C = await Zqe(_.path);
      d.push(...C);
    } catch {
      n(`Failed to load session file: ${_.path}`);
    }
  return d;
}

async function Q$e(e, t, r, o) {
  let { head: u, tail: d } = await qJe(e, t, r, _d(Nc(e, o)));
  if (!u) return { firstPrompt: "", isSidechain: !1 };
  let _ = u.includes('"isSidechain":true') || u.includes('"isSidechain": true'),
    C = KN(u, "cwd"),
    A = _J(u, "cwd"),
    x = KN(u, "teamName"),
    M =
      u
        .split(`
`)
        .find((Pt) => Pt.includes('"parentUuid":')) ?? u,
    F = KN(M, "sessionKind"),
    U = F === "bg" || F === "daemon" || F === "daemon-worker" ? F : void 0,
    B = KN(u, "agentSetting"),
    W = KN(u, "entrypoint") ?? $f(d, "entrypoint"),
    z = Pdr(u),
    pe = $f(d, "lastPrompt") || xdr(u) || Kzt(u, "content", 200) || Kzt(u, "text", 200) || "",
    fe = $f(d, "customTitle"),
    me = fe ?? $f(u, "customTitle"),
    ge = $f(d, "aiTitle") ?? $f(u, "aiTitle"),
    Ce = Mdr(d, "summary", "summary"),
    Ie = $f(d, "tag"),
    Ee = Woe(d, "relocated", "relocatedCwd"),
    Pe = $f(d, "gitBranch") ?? KN(u, "gitBranch"),
    Oe = $f(d, "prUrl"),
    Fe = $f(d, "prRepository"),
    Be,
    ze = $f(d, "prNumber");
  if (ze) Be = parseInt(ze, 10) || void 0;
  if (!Be) {
    let Pt = d.lastIndexOf('"prNumber":');
    if (Pt >= 0) {
      let ct = d.slice(Pt + 11, Pt + 25),
        ut = parseInt(ct.trim(), 10);
      if (ut > 0) Be = ut;
    }
  }
  let We = LGt(d),
    Ve = rzt(d);
  return {
    firstPrompt: pe,
    gitBranch: Pe,
    isSidechain: _,
    projectPath: C,
    headCwdStrict: A,
    relocatedCwd: Ee,
    teamName: x,
    sessionKind: U,
    isLoopSession: z,
    customTitle: me,
    customTitleFromTail: fe,
    aiTitle: ge,
    summary: Ce,
    tag: Ie,
    agentSetting: B,
    entrypoint: W,
    prNumber: Be,
    prUrl: Oe,
    prRepository: Fe,
    artifactCount: We,
    lastMessageAtMs: Ve,
  };
}

function LGt(e) {
  if (!e.includes('"type":"frame-link"')) return;
  let t = 0,
    r = new Set();
  for (let u of e.split(`
`)) {
    if (!u.includes('"type":"frame-link"')) continue;
    let d;
    try {
      d = Ps(u);
    } catch {
      continue;
    }
    let _ = Rdr().safeParse(d);
    if (!_.success) continue;
    if (_.data.artifactCount !== void 0 && _.data.artifactCount > t) t = _.data.artifactCount;
    if (_.data.frameUrl !== void 0) r.add(_.data.frameUrl);
  }
  let o = Math.max(t, r.size);
  return o > 0 ? o : void 0;
}

function Pdr(e) {
  let r = 0;
  while (r < e.length) {
    let o = e.indexOf(
        `
`,
        r,
      ),
      u = o >= 0 ? e.slice(r, o) : e.slice(r),
      d = o < 0;
    if (((r = o >= 0 ? o + 1 : e.length), !u.includes('"type":"user"') && !u.includes('"type": "user"'))) continue;
    if (u.includes('"tool_result"')) continue;
    let _;
    try {
      _ = V(u);
    } catch {
      if (d) return u.includes("<command-name>/loop</command-name>");
      continue;
    }
    if (_.type !== "user") continue;
    if (_.isMeta === !0 || _.isCompactSummary === !0) continue;
    let C = _.message;
    if (!C) continue;
    let A = C.content,
      x = [];
    if (typeof A === "string") x.push(A);
    else if (Array.isArray(A)) {
      let M = !1;
      for (let F of A) {
        if (!F || typeof F !== "object") continue;
        if (F.type === "tool_result") {
          M = !0;
          break;
        }
        if (F.type === "text" && typeof F.text === "string") x.push(F.text);
      }
      if (M) continue;
    }
    return x.some((M) => M.includes("<command-name>/loop</command-name>"));
  }
  return !1;
}

function xdr(e) {
  let t = 0,
    r = !1,
    o = "";
  while (t < e.length) {
    let u = e.indexOf(
        `
`,
        t,
      ),
      d = u >= 0 ? e.slice(t, u) : e.slice(t);
    if (((t = u >= 0 ? u + 1 : e.length), !d.includes('"type":"user"') && !d.includes('"type": "user"'))) continue;
    if (d.includes('"tool_result"')) continue;
    if (d.includes('"isMeta":true') || d.includes('"isMeta": true')) continue;
    try {
      let _ = V(d);
      if (_.type !== "user") continue;
      let C = _.message;
      if (!C) continue;
      let A = C.content,
        x = [];
      if (typeof A === "string") x.push(A);
      else if (Array.isArray(A))
        for (let M of A) {
          let F = M;
          if (F.type === "text" && typeof F.text === "string") x.push(F.text);
        }
      for (let M of x) {
        if (!M) continue;
        let F = M.replaceAll(
            `
`,
            " ",
          ).trim(),
          U = $r(F, Sg);
        if (U) {
          let W = U.replace(/^\//, ""),
            z = $r(F, "command-args")?.trim() || "";
          if (import.meta.require("/$bunfs/root/chunk-59z9est3.js").builtInCommandNames().has(W) || !z) {
            if (!o) o = U;
            continue;
          }
          return z ? `${U} ${z}` : U;
        }
        let B = $r(F, "bash-input");
        if (B) return `! ${B}`;
        if (tGt.test(F)) {
          if (F.startsWith(`<${AP}>`)) r = !0;
          continue;
        }
        if (F.length > 200) F = ce(F, 200).trim() + "\u2026";
        return F;
      }
    } catch {
      continue;
    }
  }
  if (o) return o;
  if (r) return "Proactive session";
  return "";
}

function Mdr(e, t, r) {
  let o = `"type":"${t}"`,
    u = `"${r}":`,
    d = e.length;
  while (d > 0) {
    let _ = e.lastIndexOf(
        `
`,
        d - 1,
      ),
      C = e.slice(_ + 1, d);
    if (((d = _), C.includes(o) && C.includes(u))) {
      let A = KN(C, r);
      if (A !== void 0) return A;
    }
    if (_ < 0) break;
  }
  return;
}

function Kzt(e, t, r) {
  let o = [`"${t}":"`, `"${t}": "`];
  for (let u of o) {
    let d = e.indexOf(u);
    if (d < 0) continue;
    let _ = d + u.length,
      C = _,
      A = 0;
    while (C < e.length && A < r) {
      if (e[C] === "\\") {
        (C += 2), A++;
        continue;
      }
      if (e[C] === '"') break;
      C++, A++;
    }
    return e.slice(_, C).replaceAll("\\n", " ").replaceAll("\\t", " ").trim();
  }
  return "";
}

function TK(e) {
  let t = new Map();
  for (let r of e) {
    if (!r.sessionId) continue;
    let o = t.get(r.sessionId);
    if (!o || r.modified.getTime() > o.modified.getTime()) t.set(r.sessionId, r);
  }
  return BO([...t.values()]).map((r, o) => ({ ...r, value: o }));
}

async function cte(e, t, r, o, u) {
  let _ = [...(await PPe(e, o)).entries()].sort((x, M) => M[1].mtime - x[1].mtime);
  if (t && _.length > t) _ = _.slice(0, t);
  let C = [];
  for (let [x, M] of _)
    C.push({
      date: new Date(M.mtime).toISOString(),
      messages: [],
      isLite: !0,
      fullPath: M.path,
      value: 0,
      created: new Date(M.ctime),
      modified: new Date(M.mtime),
      firstPrompt: "",
      messageCount: 0,
      fileSize: M.size,
      isSidechain: !1,
      sessionId: x,
      projectPath: r,
      ownWorktrees: u,
    });
  let A = BO(C);
  return (
    A.forEach((x, M) => {
      x.value = M;
    }),
    A
  );
}

async function FGt(e, t, r) {
  if (!e.isLite || !e.fullPath) return e;
  let o = await Q$e(e.fullPath, e.fileSize ?? 0, t, r),
    u = o.relocatedCwd ?? o.headCwdStrict;
  if (
    e.projectPath !== void 0 &&
    u !== void 0 &&
    !mFe(u, e.ownWorktrees, Goe()) &&
    (await fFe(u, e.projectPath, Goe(), nQe, Nu(r)))
  )
    return (
      n(
        `Session ${e.sessionId} filtered from /resume: recorded cwd is a different directory with the same project slug`,
      ),
      null
    );
  let d = (U) => U,
    _ = o.projectPath !== void 0 && d(sh(e.fullPath)) === d(bl(o.projectPath)),
    C = o.relocatedCwd ?? (_ || e.projectPath === void 0 ? (o.projectPath ?? e.projectPath) : e.projectPath),
    A = o.customTitleFromTail;
  if (A === void 0) A = (e.sessionId !== void 0 ? await Bce(e.fullPath, e.sessionId, r) : void 0) ?? o.customTitle;
  let x = o.lastMessageAtMs !== void 0 ? new Date(Math.min(o.lastMessageAtMs, e.modified.getTime())) : void 0,
    M = {
      ...e,
      ...(x !== void 0 && { date: x.toISOString(), modified: x }),
      isLite: !1,
      firstPrompt: o.firstPrompt,
      gitBranch: o.gitBranch,
      isSidechain: o.isSidechain,
      teamName: o.teamName,
      sessionKind: o.sessionKind,
      customTitle: A,
      aiTitle: o.aiTitle,
      summary: o.summary,
      tag: o.tag,
      agentSetting: o.agentSetting,
      prNumber: o.prNumber,
      prUrl: o.prUrl,
      prRepository: o.prRepository,
      artifactCount: o.artifactCount,
      projectPath: C,
    };
  if (!M.firstPrompt && !M.customTitle && !M.aiTitle) M.firstPrompt = "(session)";
  if (M.isSidechain) return n(`Session ${e.sessionId} filtered from /resume: isSidechain=true`), null;
  if (M.teamName) return n(`Session ${e.sessionId} filtered from /resume: teamName=${M.teamName}`), null;
  if (M.sessionKind === "daemon" || M.sessionKind === "daemon-worker")
    return n(`Session ${e.sessionId} filtered from /resume: sessionKind=${M.sessionKind}`), null;
  let F = zAt.has(lGt() ?? "");
  if (!F && zAt.has(o.entrypoint ?? ""))
    return n(`Session ${e.sessionId} filtered from /resume: entrypoint=${o.entrypoint}`), null;
  if (!F && o.isLoopSession) return n(`Session ${e.sessionId} filtered from /resume: /loop session`), null;
  return M;
}

async function ute(e, t, r, o) {
  let u = [],
    d = Buffer.alloc(bp),
    _ = t;
  while (_ < e.length && u.length < r) {
    let x = e[_];
    _++;
    let M = await FGt(x, d, o);
    if (M) u.push(M);
  }
  let C = _ - t,
    A = C - u.length;
  if (A > 0)
    n(`/resume: enriched ${C} sessions, ${A} filtered out, ${u.length} visible (${e.length - _} remaining on disk)`);
  return { logs: u, nextIndex: _ };
}

function MW() {
  Ugn()?.cleanupTerminalModes();
}

function NGt(e) {
  let t = Amr(e);
  if (!(!t && e instanceof Error)) {
    if (typeof e === "string") return { error_name: "string", error_message: co(e).slice(0, 2000), isHostError: !1 };
    let C = t ? Din(e, "name") : Cmr(e, "name"),
      A = Din(e, "message"),
      x = [];
    if (C !== void 0) x.push(C);
    if (A !== void 0) x.push(A);
    let M = x.length > 0 ? co(x.join(": ")).slice(0, 2000) : void 0,
      F = Din(e, "stack");
    return {
      error_name: "non-error",
      error_message: M,
      error_stack: F !== void 0 ? co(F).slice(0, 4000) : void 0,
      isHostError: !1,
    };
  }
  let o = e,
    u,
    d,
    _;
  try {
    u = o.name;
  } catch {}
  try {
    d = o.message;
  } catch {}
  try {
    _ = o.stack;
  } catch {}
  return {
    error_name: typeof u === "string" ? u : "Error",
    error_message: typeof d === "string" ? co(d).slice(0, 2000) : void 0,
    error_stack: typeof _ === "string" ? co(_).slice(0, 4000) : void 0,
    isHostError: !0,
  };
}

function Amr(e) {
  if (e === null || (typeof e !== "object" && typeof e !== "function")) return !1;
  let t = e;
  for (let r = 0; r < 128; r++) {
    if (t === null) return !1;
    if (e0e.isProxy(t)) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !0;
}

function Din(e, t) {
  if (e === null || typeof e !== "object") return;
  if (e0e.isProxy(e)) return;
  let r = Object.getOwnPropertyDescriptor(e, t);
  return r && "value" in r && typeof r.value === "string" ? r.value : void 0;
}

function Cmr(e, t) {
  if (e === null || typeof e !== "object") return;
  let r = e;
  for (let o = 0; o < 128; o++) {
    if (r === null) return;
    if (e0e.isProxy(r)) return;
    let u = Object.getOwnPropertyDescriptor(r, t);
    if (u) return "value" in u && typeof u.value === "string" ? u.value : void 0;
    r = Object.getPrototypeOf(r);
  }
  return;
}

function vmr(e) {
  try {
    if (!(e instanceof Error)) return !1;
    let t = e.code;
    return (
      (e.name === "McpError" && t === -32000) ||
      (e.name === "SdkError" && t === "CONNECTION_CLOSED") ||
      (e.name === "ProtocolError" && t === -32000)
    );
  } catch {
    return !1;
  }
}

function JMt() {
  try {
    if (zu() && T0e()) s("tengu_scroll_summary", { ...w0e(), fullscreen: Nt() });
  } catch {}
}

async function sle() {
  try {
    let { flushAnalyticsSinks: e } = await import("/$bunfs/root/chunk-1q43pjq6.js");
    await e();
  } catch {}
}

function $Gt(e) {
  if (!e.error_message) return {};
  return { error_message_hash: Vn(e.error_message) };
}

function Z$e(e) {
  if (!e.isHostError) return e.error_name === "string" ? w("string") : w("non-error");
  return IR(e.error_name) ?? w("Error");
}

function B_() {
  return QMt.of(G().host);
}

function Oin(e) {
  B_().install(e);
}

function Y9e() {
  B_().markPrintModeSignalHandlersRegistered();
}

function ZMt() {
  B_().markOwnsControllingTerminal();
}

function Lin(e) {
  B_().markStartupActionStarted(e);
}

function PAr(e) {
  B_().exitIfStartupNeverMounted(e);
}

async function Ln(e = 0, t = "other", r) {
  return B_().shutdown(e, t, r);
}

function Jr(e = 0, t = "other") {
  B_().shutdownSync(e, t);
}

function ks() {
  return B_().isShuttingDown();
}

function J9e() {
  B_().claimShutdown();
}

function Min() {
  B_().releaseShutdownClaim();
}

function eNt(e) {
  B_().registerBeforeInteractiveShutdown(e);
}

function Nin() {
  B_().clearBeforeInteractiveShutdown();
}

export { $Gt, $cn, $pt, $qe, $zt, A$e, ACr, AK, AUt, Acn, Amr, Bcn, Bpt, Bqe, C$e, CCr, CPe, CUt, Ccn, Cmr, Dce, Dcn, Din, E$e, ECr, EUt, Ecn, Fce, Fcn, Fpt, Fqe, G7, GSe, Gcn, Gpt, Gqe, HPe, HUt, Hcn, I$e, IPe, IUt, Icn, J9e, JL, JMt, JSe, Jc, Jcn, Jh, Jqe, Jr, K7, KA, KSe, Kcn, Kpt, Kqe, LGt, Lcn, Lin, Ln, Lpt, MW, Mcn, Min, Mpt, NGt, Ncn, Nin, Npt, Nqe, Ocn, Oin, Opt, PAr, PPe, Pcn, QL, QSe, Qcn, Qqe, R$e, Rcn, SCr, Shr, TCr, Ta, Tcn, Thr, U7, Uce, Ucn, Upt, Uqe, V7, VSe, Vcn, Vpt, Vqe, W7, WSe, Wb, Wcn, Wpt, Wqe, X7, XA, XSe, Xc, Xcn, Xpt, Xqe, Y$e, Y9e, YSe, Yc, Ycn, Yqe, Z$e, ZG, ZGn, ZL, ZMt, ZSe, Zcn, Zqe, _Cr, _Ut, _hr, _zt, aCr, ahr, ate, azn, bCr, bUt, bcn, bhr, c2, cCr, cdr, chr, cte, czn, czt, d2, dCr, dF, dce, dhr, dzn, eM, eNt, ebe, eun, ez, ezn, f9, fCr, fUt, fce, fhr, fzn, g9, gCr, gUt, gce, ghr, gl, gzn, h9, hCr, hUt, hce, hhr, hl, hzt, iCr, ihr, im, ite, j7, jcn, jpt, jqe, kPe, kUt, kcn, ks, l2, lCr, lGt, ldr, lhr, lte, lzn, m9, mCr, mUt, mce, mhr, mzn, nCr, nI, nte, nun, nzn, nzt, oCr, oU, ote, ozn, p2, pCr, pF, pUt, pce, phr, pk, pzn, q7, qSe, qcn, qpt, qqe, rCr, rH, rte, run, rzn, sCr, sle, ste, sv, szn, tCr, tI, tM, tNt, tun, tz, tzt, u2, uCr, uhr, ute, uzn, vPe, vUt, vcn, vmr, w$e, wCr, wUt, wcn, whr, xPe, xUt, xcn, yCr, yUt, z7, zSe, zcn, zpt, zqe };
