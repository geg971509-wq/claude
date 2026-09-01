// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $Kt, $Yt, $qt, AKt, Aue, BMt, Bx, CI, CKt, CUe, Cin, Csn, Cue, DBe, DKt, DW, Due, Dv, E2, EYt, F0e, FK, FVt, G2t, GBe, GU, GUe, Gqt, Gue, H2t, HK, IL, IYt, JI, JVt, Jde, K2, KU, L0e, L2t, Mqt, NK, NUe, NYt, OBe, OI, OKt, OYt, PI, PR, QKt, Qqt, RBe, RKt, RR, Rde, SYt, Sde, Sin, T2t, TUe, Tqt, UK, UKt, UYt, VKt, XGt, XVt, Xde, Xqt, YGt, Yw, ZKt, ZVt, _2t, _ce, a2t, b0e, bYt, cde, dYt, dqt, eKt, f2t, fKt, gqt, hBe, iVt, jI, jK, jKt, jU, jUe, k2t, kVt, l9, mBe, mKt, mYt, oKt, oun, pKt, pNt, pYt, qU, qqt, r2t, rBe, rD, rKt, rYt, rqt, t_, uUe, ude, uqt, vVt, vYt, vin, vqt, w2t, wYt, wqt, xBe, xYt, y2t, yVt, yde } from "/$bunfs/root/modules/chunk-zze8764r/core.js";
import { $Be, $u, AYt, Ae, BBe, BC, BCt, BI, BKt, Bte, CYt, Csr, D, DE, DVt, Dde, Di, Dl, Dqt, Dr, E, EBe, EUe, Exn, FBe, FXe, Fa, Ff, Fp, Fv, G, GAe, GGt, Ge, Go, He, Hk, Hqt, Hu, Hw, I, Il, Iqt, Is, JS, Jqt, Jt, K, KGt, KUe, Kd, Kv, Kxn, Ky, LVt, Lu, M2, M6, MDe, MVt, MYt, Me, Mo, NBe, Na, O, O0e, O9, OVt, Ode, Oh, PYt, Po, Pp, Q, QVt, Ql, Que, R, R2t, RUe, RYt, Rnr, SM, SVt, SX, S_t, St, Te, Tl, Tu, UBe, UH, UI, U_t, Ud, Uh, Uv, V, VGt, VO, V_t, Va, Vd, Vg, Vo, Vt, W7e, WBe, WGt, WUe, Wde, X, XKt, XO, XQe, Xb, Y, Y2, YD, YE, YQe, Ye, Z6, ZU, Ze, Zqt, _0, _Ue, __t, _de, _u, _y, a, aqt, as, b, b2, b3, b7e, bBt, bUe, bVt, b_t, be, bs, c, cb, ce, cqt, die, dxn, e1, e7e, eB, eKe, ede, ee, fM, f_, fme, ft, fvn, g, g4, gc, gn, goe, gvn, h, ha, hde, ho, iAt, iJ, ie, iqt, it, iy, jD, jF, jTe, jpn, kKt, kSn, kU, kUe, kf, l, lYe, le, ln, lqt, m0, n, nKt, nLe, nTe, nde, ne, nf, o0e, oAt, oi, ol, or, p, pde, pvn, pxn, qF, qGt, qe, qi, qpn, r1e, rl, rn, rt, s, s0e, se, sqt, st, tKt, te, tr, tw, uc, us, vP, ve, vn, vpe, vt, vxn, w, w3, wCt, wKt, we, whn, x2t, xVt, xi, xl, y, yO, yUe, yV, ye, zE, zF, zGt, zKt, zde, zt, zv } from "/$bunfs/root/modules/chunk-zze8764r/prelude.js";

async function HB(e, t = 0, r, o, u, d) {
  u?.throwIfAborted();
  let _ = d?.truncateOnByteLimit ?? !1,
    C = d?.maxSelectedBytes,
    A = d?.handle,
    x = A ? await A.stat() : await KGt(e);
  if (C !== void 0 && x.isFile() && x.size <= C) C = void 0;
  if (x.isDirectory())
    throw Object.assign(Error(`EISDIR: illegal operation on a directory, read '${e}'`), {
      code: "EISDIR",
      errno: -21,
      syscall: "read",
      path: e,
    });
  if (x.isFile() && x.size < YGt) {
    if (!_ && o !== void 0 && x.size > o) throw new RR(x.size, o);
    let M = A ? await A.readFile({ signal: u }) : await VGt(e, { signal: u });
    if (!_ && o !== void 0) {
      if (M.length > o) throw new RR(M.length, o);
    }
    let F = M.toString("utf8");
    return QGt(F, x.size, x.mtimeMs, t, r, _ ? o : void 0, C);
  }
  return nqt(
    e,
    t,
    r,
    o,
    C,
    x.isFile() ? void 0 : XGt,
    _,
    u,
    A ? { handle: A, mtimeMs: x.mtimeMs, positional: x.isFile() } : void 0,
  );
}

function QGt(e, t, r, o, u, d, _) {
  let C = e.charCodeAt(0) === 65279;
  if (C) t -= 3;
  let A = C ? e.slice(1) : e;
  if (o === 0 && u === void 0 && d === void 0 && _ === void 0) {
    let me = A.includes("\r")
      ? A.replaceAll(
          `\r
`,
          `
`,
        )
      : A;
    if (me.endsWith("\r")) me = me.slice(0, -1);
    let ge = 1,
      Ce = me.indexOf(`
`);
    while (Ce !== -1)
      ge++,
        (Ce = me.indexOf(
          `
`,
          Ce + 1,
        ));
    return {
      content: me,
      lineCount: ge,
      totalLines: ge,
      totalBytes: t,
      readBytes: Buffer.byteLength(me, "utf8"),
      mtimeMs: r,
      truncatedByBytes: !1,
    };
  }
  let x = u !== void 0 ? o + u : 1 / 0,
    M = [],
    F = 0,
    U = 0,
    B,
    W = 0,
    z = !1;
  function pe(me) {
    if (_ !== void 0 || d !== void 0) {
      let ge = M.length > 0 ? 1 : 0,
        Ce = W + ge + Buffer.byteLength(me);
      if (d !== void 0 && Ce > d) return (z = !0), !1;
      if (_ !== void 0 && Ce > _) throw new CI(Ce, _);
      W = Ce;
    }
    return M.push(me), !0;
  }
  while (
    (B = A.indexOf(
      `
`,
      U,
    )) !== -1
  ) {
    if (F >= o && F < x && !z) {
      let me = A.slice(U, B);
      if (me.endsWith("\r")) me = me.slice(0, -1);
      pe(me);
    }
    F++, (U = B + 1);
  }
  if (F >= o && F < x && !z) {
    let me = A.slice(U);
    if (me.endsWith("\r")) me = me.slice(0, -1);
    pe(me);
  }
  F++;
  let fe = M.join(`
`);
  return {
    content: fe,
    lineCount: M.length,
    totalLines: F,
    totalBytes: t,
    readBytes: Buffer.byteLength(fe, "utf8"),
    mtimeMs: r,
    truncatedByBytes: z,
  };
}

function JGt(e) {
  qGt(e, (t, r) => {
    this.resolveMtime(t ? 0 : r.mtimeMs);
  });
}

function ZGt(e) {
  let t = e;
  if (this.isFirstChunk) {
    if (((this.isFirstChunk = !1), t.charCodeAt(0) === 65279)) t = t.slice(1);
  }
  let r = Buffer.byteLength(t);
  if (((this.totalBytesRead += r), this.hardCapBytes !== void 0 && this.totalBytesRead > this.hardCapBytes)) {
    this.stream.destroy(new RR(this.totalBytesRead, this.hardCapBytes));
    return;
  }
  if (!this.truncateOnByteLimit && this.maxBytes !== void 0 && this.totalBytesRead > this.maxBytes) {
    this.stream.destroy(new RR(this.totalBytesRead, this.maxBytes));
    return;
  }
  let o = this.partial.length > 0 ? this.partial + t : t,
    u = this.partialBytes + r;
  (this.partial = ""), (this.partialBytes = 0);
  let d = 0,
    _;
  while (
    (_ = o.indexOf(
      `
`,
      d,
    )) !== -1
  ) {
    if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) {
      let C = o.slice(d, _);
      if (C.endsWith("\r")) C = C.slice(0, -1);
      let A = this.truncateOnByteLimit && this.maxBytes !== void 0;
      if (A || this.maxSelectedBytes !== void 0) {
        let x = this.selectedLines.length > 0 ? 1 : 0,
          M = this.selectedBytes + x + Buffer.byteLength(C);
        if (A && M > this.maxBytes) (this.truncatedByBytes = !0), (this.endLine = this.currentLineIndex);
        else if (this.maxSelectedBytes !== void 0 && M > this.maxSelectedBytes) {
          this.stream.destroy(new CI(M, this.maxSelectedBytes));
          return;
        } else (this.selectedBytes = M), this.selectedLines.push(C);
      } else this.selectedLines.push(C);
    }
    this.currentLineIndex++, (d = _ + 1);
  }
  if (d < o.length) {
    if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) {
      let C = o.slice(d),
        A = d === 0 ? u : Buffer.byteLength(C),
        x = this.truncateOnByteLimit && this.maxBytes !== void 0;
      if (x || this.maxSelectedBytes !== void 0) {
        let M = this.selectedLines.length > 0 ? 1 : 0,
          F = this.selectedBytes + M + A;
        if (x && F > this.maxBytes) {
          (this.truncatedByBytes = !0), (this.endLine = this.currentLineIndex);
          return;
        }
        if (this.maxSelectedBytes !== void 0 && F > this.maxSelectedBytes) {
          this.stream.destroy(new CI(F, this.maxSelectedBytes));
          return;
        }
      }
      (this.partial = C), (this.partialBytes = A);
    }
  }
}

function tqt() {
  let e = this.partial;
  if (e.endsWith("\r")) e = e.slice(0, -1);
  if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine)
    if (this.truncateOnByteLimit && this.maxBytes !== void 0) {
      let o = this.selectedLines.length > 0 ? 1 : 0;
      if (this.selectedBytes + o + Buffer.byteLength(e) > this.maxBytes) this.truncatedByBytes = !0;
      else this.selectedLines.push(e);
    } else this.selectedLines.push(e);
  this.currentLineIndex++;
  let t = this.selectedLines.join(`
`),
    r = this.truncatedByBytes;
  this.mtimeReady.then((o) => {
    this.resolve({
      content: t,
      lineCount: this.selectedLines.length,
      totalLines: this.currentLineIndex,
      totalBytes: this.totalBytesRead,
      readBytes: Buffer.byteLength(t, "utf8"),
      mtimeMs: o,
      truncatedByBytes: r,
    });
  });
}

function nqt(e, t, r, o, u, d, _, C, A) {
  return new Promise((x, M) => {
    let F = {
      stream: A
        ? Eue(A.handle, A.positional, C)
        : GGt(e, { encoding: "utf8", highWaterMark: 524288, ...(C ? { signal: C } : void 0) }),
      offset: t,
      endLine: r !== void 0 ? t + r : 1 / 0,
      maxBytes: o,
      maxSelectedBytes: u,
      hardCapBytes: d,
      truncateOnByteLimit: _,
      resolve: x,
      totalBytesRead: 0,
      selectedBytes: 0,
      truncatedByBytes: !1,
      currentLineIndex: 0,
      selectedLines: [],
      partial: "",
      partialBytes: 0,
      isFirstChunk: !0,
      resolveMtime: () => {},
      mtimeReady: null,
    };
    if (
      ((F.mtimeReady = new Promise((U) => {
        F.resolveMtime = U;
      })),
      A)
    )
      F.resolveMtime(A.mtimeMs);
    else F.stream.once("open", JGt.bind(F));
    F.stream.on("data", ZGt.bind(F)), F.stream.once("end", tqt.bind(F)), F.stream.once("error", M);
  });
}

function Eue(e, t, r, o = !1) {
  let d = o ? null : new WGt("utf8"),
    _ = Buffer.allocUnsafe(524288),
    C = t ? 0 : null,
    A = !1,
    x = new zGt({
      ...(o ? {} : { encoding: "utf8" }),
      read() {
        if (A) return;
        (A = !0),
          e.read(_, 0, 524288, C).then(
            ({ bytesRead: M }) => {
              if (((A = !1), x.destroyed)) return;
              if (M === 0) {
                let U = d?.end();
                if (U) x.push(U);
                x.push(null);
                return;
              }
              if (C !== null) C += M;
              let F = Buffer.from(_.subarray(0, M));
              x.push(d ? d.write(F) : F);
            },
            (M) => {
              (A = !1), x.destroy(we(M));
            },
          );
      },
    });
  if (r) {
    let M = () => {
      x.destroy(r.reason instanceof Error ? r.reason : new Ze());
    };
    if (r.aborted) M();
    else r.addEventListener("abort", M, { once: !0 }), x.once("close", () => r.removeEventListener("abort", M));
  }
  return x;
}

function lb(e) {
  return e
    .normalize("NFC")
    .replace(/[. ]+$/, "")
    .toLowerCase();
}

function tD(e) {
  let t = e.split("/");
  if (t.length === 0) return !0;
  if (t.some((r) => r.startsWith("."))) return !0;
  return PI.includes(lb(t[0]));
}

function FU(e) {
  if (e == null) return "absent";
  let t = w3(e);
  return t === void 0 ? "malformed" : t ? "true" : "false";
}

function r0e(e) {
  return {
    candidates: e
      .filter((t) => t.pinnedState === "true")
      .toSorted((t, r) => r.modifiedMs - t.modifiedMs)
      .slice(0, rqt),
    pinnedCount: Q(e, (t) => t.pinnedState === "true"),
    malformedCount: Q(e, (t) => t.pinnedState === "malformed"),
  };
}

function Jlt() {
  let e;
  try {
    e = Y2();
  } catch {
    return null;
  }
  if (e === null) return null;
  let t = new Set(["MEMORY.md"]),
    r = [];
  for (let o of e) {
    for (let d of o.skillsDirs ?? []) {
      let _ = d.split("/");
      r.push((o.scope === "user" ? cb(..._) : cb("team", o.mount, ..._)) + cqt);
    }
    if (o.promptIndex === void 0) continue;
    let u = o.promptIndex.split("/");
    t.add(o.scope === "user" ? cb(...u) : cb("team", o.mount, ...u));
  }
  return { excluded: t, excludedPrefixes: r };
}

function oye(e) {
  if (o0e(e) !== o0e(Di())) return null;
  let t = new Set();
  try {
    for (let r of Y2() ?? []) if (r.scope === "team") t.add(r.mount);
  } catch {}
  return t;
}

function z9e(e, t) {
  if (t === null) return !0;
  let r = e.split(/[\\/]/);
  if (lb(r[0]) === "team") return r.length < 3 || t.has(r[1]);
  return !tD(r.join("/"));
}

function Ein(e, t, r) {
  return (
    e.endsWith(".md") &&
    (t ? !t.excluded.has(e) && !t.excludedPrefixes.some((o) => e.startsWith(o)) : iqt(e) !== "MEMORY.md") &&
    z9e(e, r)
  );
}

function Kjn(e) {
  let t = Di(),
    r = lqt(t, e);
  return r.endsWith(".md") && !r.startsWith("..") && !aqt(r) && Ein(r, Jlt(), oye(t));
}

function i0e(e) {
  for (let t of e.split(`
`)) {
    let r = t.replace(/^#{1,6}\s+/, "").trim();
    if (r) return r.slice(0, dqt);
  }
  return null;
}

async function Ain(e, t, r = {}, o) {
  if (o) {
    let x = zF(e);
    if (x !== void 0 && (await jTe(e))) return await _qt(o, x, e, t, r.regularFilesOnly ?? !1);
  }
  let u = Jlt(),
    d = oye(e),
    C = (await pqt(e, r.regularFilesOnly ?? !1)).filter((x) => Ein(x, u, d));
  return (
    await Promise.allSettled(
      C.map(async (x) => {
        let M = cb(e, x),
          { content: F, mtimeMs: U } = await HB(M, 0, b3, yV, t, { truncateOnByteLimit: !0 }),
          { frontmatter: B, body: W } = zv(F, M),
          z = Que(B, "modified"),
          pe = z === null ? NaN : Date.parse(z);
        return {
          filename: x,
          filePath: M,
          mtimeMs: U,
          modifiedMs: Number.isNaN(pe) ? U : pe,
          description: B.description ?? (u ? i0e(W) : null),
          type: whn(Que(B, "type")),
          pinnedState: FU(B.metadata.pinned),
        };
      }),
    )
  )
    .filter((x) => x.status === "fulfilled")
    .map((x) => x.value)
    .sort((x, M) => M.mtimeMs - x.mtimeMs);
}

async function WMt(e, t, r) {
  try {
    let o = (await Ain(e, t, {}, r)).slice(0, uqt);
    return y("memory_scan"), o;
  } catch (o) {
    return g("memory_scan", o instanceof Cue ? "memory_scan_storage_list_failed" : "memory_scan_readdir_failed"), [];
  }
}

async function pqt(e, t) {
  return t ? await a0e(e, "") : await s0e(e, { recursive: !0 });
}

async function a0e(e, t) {
  let r = await s0e(cb(e, t), { withFileTypes: !0 });
  return (
    await Promise.all(
      r.map(async (u) => {
        let d = t ? cb(t, u.name) : u.name,
          _ = await fqt(e, d, u);
        if (_ === "directory") return await a0e(e, d).catch(mqt);
        return _ === "file" ? [d] : [];
      }),
    )
  ).flat();
}

function mqt(e) {
  if (X(e)) return [];
  throw e;
}

async function fqt(e, t, r) {
  if (r.isFile()) return "file";
  if (r.isDirectory()) return "directory";
  if (r.isSymbolicLink() || r.isBlockDevice() || r.isCharacterDevice() || r.isFIFO() || r.isSocket()) return "other";
  let o = await sqt(cb(e, t)).catch((u) => {
    if (X(u)) return null;
    throw u;
  });
  if (!o) return "other";
  return o.isFile() ? "file" : o.isDirectory() ? "directory" : "other";
}

async function hqt(e, t, r) {
  let o = [],
    u;
  do {
    let d = await e.listRecursive({ namespace: "memory", projectKey: t }, { cursor: u, skipKeyStats: !0 });
    if (!d.ok) throw new Cue(`memory scan listing failed: ${Ge(d.error)}`, "memory scan listing failed (storage v5)");
    for (let _ of d.value.items) {
      if (_.key.namespace !== "memory" || (r && _.viaSymlink === !0)) continue;
      o.push({ relativePath: cb(..._.key.relPath), key: _.key });
    }
    u = d.value.cursor;
  } while (u !== void 0);
  return o;
}

function yqt(e, t) {
  let r = t <= e.byteLength,
    o = Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8"),
    d = o.charCodeAt(0) === 65279 ? o.slice(1) : o,
    _ = [],
    C = 0,
    A = !1;
  function x(B) {
    let W = _.length > 0 ? 1 : 0,
      z = C + W + Buffer.byteLength(B);
    if (z > yV) {
      A = !0;
      return;
    }
    (C = z), _.push(B);
  }
  let M = 0,
    F = 0,
    U;
  while (
    (U = d.indexOf(
      `
`,
      F,
    )) !== -1
  ) {
    if (M < b3 && !A) {
      let B = d.slice(F, U);
      if (B.endsWith("\r")) B = B.slice(0, -1);
      x(B);
    }
    M++, (F = U + 1);
  }
  if (M < b3 && !A)
    if (r) {
      let B = d.slice(F);
      if (B.endsWith("\r")) B = B.slice(0, -1);
      x(B);
    } else A = !0;
  return _.join(`
`);
}

async function _qt(e, t, r, o, u) {
  let d = Jlt(),
    _ = oye(r),
    A = (await hqt(e, t, u)).filter((M) => Ein(M.relativePath, d, _));
  return (
    await Promise.allSettled(
      A.map(async (M) => {
        o.throwIfAborted();
        let F = cb(r, M.relativePath),
          U = await e.read([{ key: M.key, offset: 0, length: gqt }]);
        if ((o.throwIfAborted(), !U.ok))
          throw new R(`memory head read failed: ${Ge(U.error)}`, "memory head read failed (storage v5)");
        let B = U.value.items[0];
        if (!B.found) throw Error("memory file vanished between list and read");
        if (!Number.isFinite(B.mtimeMs)) throw Error("memory head read carried no mtime");
        let W = yqt(B.value, B.totalBytes),
          { frontmatter: z, body: pe } = zv(W, F),
          fe = Que(z, "modified"),
          me = fe === null ? NaN : Date.parse(fe);
        return {
          filename: M.relativePath,
          filePath: F,
          mtimeMs: B.mtimeMs,
          modifiedMs: Number.isNaN(me) ? B.mtimeMs : me,
          description: z.description ?? (d ? i0e(pe) : null),
          type: whn(Que(z, "type")),
          pinnedState: FU(z.metadata.pinned),
        };
      }),
    )
  )
    .filter((M) => M.status === "fulfilled")
    .map((M) => M.value)
    .sort((M, F) => F.mtimeMs - M.mtimeMs);
}

function qMt(e) {
  return e
    .map((t) => {
      let r = t.type ? `[${t.type}] ` : "",
        o = new Date(t.mtimeMs).toISOString(),
        u = `- ${r}${t.filename} (${o})`;
      return t.description ? `${u}: ${t.description}` : u;
    })
    .join(`
`);
}

function xB() {
  return wqt.of(G().host);
}

function Zjn(e) {
  xB().track(e);
}

function d0e() {
  return xB().hasPending();
}

function p0e() {
  return xB().drain();
}

function m0e(e, t) {
  if (!t) return;
  s("tengu_cache_eviction_hint", { scope: c(e), last_request_id: ve(t) });
}

function f0e(e) {
  m0e("subagent_end", e);
}

function cct(e) {
  m0e(e, vP()), wCt();
}

function NU(e) {
  if (e !== void 0 && vP() === e) cct("compaction");
}

function g0e(e) {
  try {
    let t = e.code;
    if (t === "ERR_HTTP2_STREAM_ERROR")
      return typeof e.message === "string" && Tqt.test(e.message) && Aue(e.stack, "emitStreamErrorNT (node:http2:");
    if (t === "ERR_HTTP2_GOAWAY_SESSION")
      return (
        e.message === "New streams cannot be created after receiving a GOAWAY" &&
        Aue(e.stack, "streamRejectedByGoawaySession (node:http2:")
      );
    if (t === "ERR_HTTP2_SESSION_ERROR")
      return typeof e.message === "string" && vqt.test(e.message) && Aue(e.stack, "goaway (node:http2:");
    return !1;
  } catch {
    return !1;
  }
}

function Cqt(e, t) {
  return (
    e.addEventListener("abort", t, { once: !0 }),
    {
      [Symbol.dispose]() {
        e.removeEventListener("abort", t);
      },
    }
  );
}

function aee(e, t, r, o) {
  if (!t) return { effective: r, status: "valid" };
  let u = ol(t);
  if (isNaN(u) || u <= 0) {
    let d = { effective: r, status: "invalid", message: `Invalid value "${t}" (using default: ${r})` };
    return n(`${e} ${d.message}`), d;
  }
  if (u > o) {
    let d = { effective: o, status: "capped", message: `Capped from ${u} to ${o}` };
    return n(`${e} ${d.message}`), d;
  }
  return { effective: u, status: "valid" };
}

function iye() {
  return aee("BASH_MAX_OUTPUT_LENGTH", process.env.BASH_MAX_OUTPUT_LENGTH, vin, Cin).effective;
}

function DK() {
  return Mqt.of(G().host);
}

function Mue() {
  return $qt.of(G().host);
}

async function Oue() {
  await Promise.allSettled(Array.from(Mue().pendingKillBackstops));
}

function Zlt() {
  for (let e of Array.from(Mue().liveShellCommands)) if (e.status === "running") e.kill();
}

async function Bqt(e) {
  try {
    let t = Dqt(e),
      r = await Iqt(t, { bigint: !0 }),
      o = (r.bavail * r.bsize) / (1024n * 1024n),
      u = "Free up space or set CLAUDE_CODE_TMPDIR to a directory on a filesystem with room.";
    if (o < 0n) return null;
    if (o < 10n)
      return `Command output was lost: the temp filesystem at ${t} is full (${o}MB free). The child process's stdout/stderr writes failed with ENOSPC. Free up space or set CLAUDE_CODE_TMPDIR to a directory on a filesystem with room.`;
    if (r.files > 0n && r.ffree < 1000n)
      return `Command output was lost: the temp filesystem at ${t} is out of inodes (${r.ffree} free). The child process's stdout/stderr writes failed with ENOSPC. Free up space or set CLAUDE_CODE_TMPDIR to a directory on a filesystem with room.`;
  } catch {}
  return null;
}

function LK(e, t, r, o, u = !1, d = nLe, _ = "inner") {
  return new Due(e, t, r, o, u, d, _);
}

function Fue() {
  return new b0e();
}

function _0e(e) {
  for (let t of [-e, e])
    try {
      return process.kill(t, 0), !1;
    } catch (r) {
      if (E(r) !== "ESRCH") return !1;
    }
  return !0;
}

function Zk(e) {
  let t = new Bx(Oh("local_bash"), null);
  return {
    status: "completed",
    result: Promise.resolve({ code: 1, stdout: "", stderr: e, interrupted: !1, preSpawnError: e }),
    taskOutput: t,
    background() {
      return !1;
    },
    kill() {
      return Promise.resolve();
    },
    cleanup() {},
  };
}

function k0e() {
  return {
    scrolls: 0,
    pageJumps: 0,
    jumpToBottomClicks: 0,
    reachedScrollbackCap: !1,
    scrolledUpMs: 0,
    unpinnedSince: null,
  };
}

function XMt(e = PR) {
  e.scrolls++;
}

function YMt(e = PR) {
  e.pageJumps++;
}

function Iin(e = PR) {
  e.jumpToBottomClicks++;
}

function uct(e = PR) {
  e.reachedScrollbackCap = !0;
}

function Pin(e, t = Date.now(), r = PR) {
  if (e) {
    if (r.unpinnedSince !== null) (r.scrolledUpMs += Math.max(0, t - r.unpinnedSince)), (r.unpinnedSince = null);
  } else if (r.unpinnedSince === null) r.unpinnedSince = t;
}

function w0e(e = Date.now(), t = PR) {
  let r = t.scrolledUpMs;
  if (t.unpinnedSince !== null) r += Math.max(0, e - t.unpinnedSince);
  let o = {
    scrolls: t.scrolls,
    scroll_up_seconds: Math.round(r / 1000),
    jump_to_bottom_clicks: t.jumpToBottomClicks,
    page_jumps: t.pageJumps,
    reached_scrollback_cap: t.reachedScrollbackCap,
  };
  return Object.assign(t, k0e()), o;
}

function T0e(e = PR) {
  return (
    e.scrolls > 0 ||
    e.pageJumps > 0 ||
    e.jumpToBottomClicks > 0 ||
    e.reachedScrollbackCap ||
    e.scrolledUpMs > 0 ||
    e.unpinnedSince !== null
  );
}

function v0e(e) {
  let t = new Map();
  if (!e) return t;
  try {
    let r = V(e);
    if (r && typeof r === "object") {
      for (let [o, u] of Object.entries(r)) if (typeof u === "string") t.set(o, u);
    }
  } catch (r) {
    n(`[repo-checkouts] Failed to parse env map: ${l(r)}`, { level: "error" });
  }
  return t;
}

function $ue() {
  let e = oi().repoCheckouts;
  if (e.checkouts) return e.checkouts;
  let t = a.CLAUDE_CODE_REPO_CHECKOUTS;
  if (!t) return (e.checkouts = new Map([["", ee()]])), e.checkouts;
  return (e.checkouts = v0e(t)), e.checkouts;
}

function E0e() {
  let e = oi().repoCheckouts;
  if (e.baseRefs) return e.baseRefs;
  return (e.baseRefs = v0e(a.CLAUDE_CODE_BASE_REFS)), e.baseRefs;
}

function C0e(e) {
  for (let [t, r] of $ue()) if (e === r || e.startsWith(r + Hqt)) return t;
  return;
}

async function Jjn(e) {
  oi().repoCheckouts.onMetadataChanged = e;
  for (let [, t] of $ue()) await pvn(t);
  fvn(() => void Uue());
}

async function Uue() {
  let e = $ue();
  if (e.size === 0) return;
  let t = {};
  for (let [o, u] of e) {
    let d = await gvn(u);
    if (d !== void 0) t[o] = d;
  }
  let r = oi().repoCheckouts;
  if (bs(t, r.lastEmittedBranches)) return;
  (r.lastEmittedBranches = t), r.onMetadataChanged?.({ current_branches: t });
}

async function Kqt(e, t, r, o) {
  let u = Lu().lastIngressUuidBySession;
  for (let d = 1; d <= FK; d++) {
    try {
      let C = u.get(e),
        A = { ...o };
      if (C) A["Last-Uuid"] = C;
      let x = await st.put(r, t, { headers: A, timeout: 30000, validateStatus: (M) => M < 500 });
      if (x.status === 200 || x.status === 201)
        return u.set(e, t.uuid), n(`Successfully persisted session log entry for session ${e}`), !0;
      if (x.status === 409) {
        let M = x.headers["x-last-uuid"];
        if (M === t.uuid)
          return (
            u.set(e, t.uuid),
            n(`Session entry ${t.uuid} already present on server, recovering from stale state`),
            Y("info", "session_persist_recovered_from_409"),
            !0
          );
        if (M) u.set(e, M), n(`Session 409: adopting server lastUuid=${M} from header, retrying entry ${t.uuid}`);
        else {
          let F = await Bue(e, r, o),
            U = Vqt(F);
          if (U)
            u.set(e, U),
              n(`Session 409: re-fetched ${F.length} entries, adopting lastUuid=${U}, retrying entry ${t.uuid}`);
          else {
            let W = x.data.error?.message || "Concurrent modification detected";
            return (
              n(`Session persistence conflict: UUID mismatch for session ${e}, entry ${t.uuid}. ${W}`, {
                level: "error",
              }),
              Y("error", "session_persist_fail_concurrent_modification"),
              !1
            );
          }
        }
        Y("info", "session_persist_409_adopt_server_uuid");
        continue;
      }
      if (x.status === 401)
        return n("Session token expired or invalid"), Y("error", "session_persist_fail_bad_token"), !1;
      n(`Failed to persist session log: ${x.status} ${x.statusText}`),
        Y("error", "session_persist_fail_status", { status: x.status, attempt: d });
    } catch (C) {
      n(`Error persisting session log: ${l(C)}`, { level: "error" }),
        Y("error", "session_persist_fail_status", { status: st.isAxiosError(C) ? C.status : void 0, attempt: d });
    }
    if (d === FK)
      return (
        n(`Remote persistence failed after ${FK} attempts`),
        Y("error", "session_persist_error_retries_exhausted", { attempt: d }),
        !1
      );
    let _ = Math.min(Gqt * Math.pow(2, d - 1), 8000);
    n(`Remote persistence attempt ${d}/${FK} failed, retrying in ${_}ms\u2026`), await ne(_);
  }
  return !1;
}

async function A0e(e, t, r) {
  let o = rl();
  if (!o)
    return n("No session token available for session persistence"), Y("error", "session_persist_fail_jwt_no_token"), !1;
  let u = { Authorization: `Bearer ${o}`, "Content-Type": "application/json" };
  return qqt.run(e, () => Kqt(e, t, r, u));
}

async function R0e(e, t) {
  let r = rl();
  if (!r)
    return n("No session token available for fetching session logs"), Y("error", "session_get_fail_no_token"), null;
  let o = { Authorization: `Bearer ${r}` },
    u = await Bue(e, t, o);
  if (u && u.length > 0) {
    let d = u.at(-1);
    if (d && "uuid" in d && d.uuid) Lu().lastIngressUuidBySession.set(e, d.uuid);
  }
  return u;
}

async function P0e(e, t, r) {
  let o = `${zt().BASE_API_URL}/v1/session_ingress/session/${e}`;
  n(`[session-ingress] Fetching session logs from: ${o}`);
  let u = { ...JS(t), "x-organization-uuid": r };
  return await Bue(e, o, u);
}

async function x0e(e, t, r, o) {
  let u = `${zt().BASE_API_URL}/v1/code/sessions/${e}/teleport-events`,
    d = { ...JS(t), "x-organization-uuid": r };
  if (o) d["X-Trusted-Device-Token"] = o;
  n(`[teleport] Fetching events from: ${u}`);
  let _ = [],
    C,
    A = 0,
    x = 100;
  while (A < x) {
    let M = { limit: 1000 };
    if (C !== void 0) M.cursor = C;
    let F;
    try {
      F = await st.get(u, { headers: d, params: M, timeout: 20000, validateStatus: (W) => W < 500 });
    } catch (W) {
      return (
        h(ft(Error(`Teleport events fetch failed: ${l(W)}`), "Teleport events fetch failed")),
        Y("error", "teleport_events_fetch_fail"),
        p("api_teleport_events_fetch", "network_error"),
        null
      );
    }
    if (F.status === 404)
      return (
        n(`[teleport] Session ${e} not found (page ${A})`),
        Y("warn", "teleport_events_not_found"),
        g("api_teleport_events_fetch", "not_found"),
        A === 0 ? null : _
      );
    if (F.status === 401) {
      Y("error", "teleport_events_bad_token"), g("api_teleport_events_fetch", "auth_expired");
      let W = "Your session has expired. Please run /login to sign in again.";
      throw new Hu(W, W);
    }
    if (F.status === 403) {
      Y("error", "teleport_events_forbidden"), g("api_teleport_events_fetch", "forbidden");
      let W = F.data;
      if (W?.error?.resource === "untrusted_device")
        throw new Hu(
          "This session requires a trusted device. Run /login to enroll this device, then retry.",
          "This session requires a trusted device. Run /login to enroll this device, then retry.",
        );
      if (W?.error?.resource === "session_stale_relogin")
        throw new Hu(
          "Your session has expired for the trusted-device check. Run /login to re-authenticate, then retry.",
          "Your session has expired for the trusted-device check. Run /login to re-authenticate, then retry.",
        );
      let z = W?.error?.message ?? "Access denied fetching session events";
      throw new Hu(z, z);
    }
    if (F.status !== 200)
      return (
        h(Error(`Teleport events returned ${F.status}`)),
        Y("error", "teleport_events_bad_status"),
        p("api_teleport_events_fetch", "bad_status"),
        null
      );
    let { data: U, next_cursor: B } = F.data ?? {};
    if (!Array.isArray(U))
      return (
        h(Error(`Teleport events invalid response shape (data is ${U === null ? "null" : typeof U})`)),
        Y("error", "teleport_events_invalid_shape"),
        p("api_teleport_events_fetch", "bad_status"),
        null
      );
    for (let W of U) if (W.payload !== null) _.push(W.payload);
    if ((A++, B == null)) break;
    C = B;
  }
  if (A >= x)
    h(ft(Error(`Teleport events hit page cap (${x}) for ${e}`), `teleport_events_page_cap ${x}`)),
      Y("warn", "teleport_events_page_cap"),
      g("api_teleport_events_fetch", "page_cap");
  else y("api_teleport_events_fetch");
  return n(`[teleport] Fetched ${_.length} events over ${A} page(s) for ${e}`), _;
}

async function Bue(e, t, r) {
  try {
    let o = await st.get(t, {
      headers: r,
      timeout: 20000,
      validateStatus: (u) => u < 500,
      params: Me(process.env.CLAUDE_AFTER_LAST_COMPACT) ? { after_last_compact: !0 } : void 0,
    });
    if (o.status === 200) {
      let u = o.data;
      if (!u || typeof u !== "object" || !Array.isArray(u.loglines))
        return (
          h(Error("Invalid session logs response format")),
          Y("error", "session_get_fail_invalid_response"),
          p("api_session_logs_fetch", "invalid_response"),
          null
        );
      let d = u.loglines;
      return n(`Fetched ${d.length} session logs for session ${e}`), y("api_session_logs_fetch"), d;
    }
    if (o.status === 404)
      return (
        n(`No existing logs for session ${e}`),
        Y("warn", "session_get_no_logs_for_session"),
        y("api_session_logs_fetch"),
        []
      );
    if (o.status === 401)
      throw (
        (n("Auth token expired or invalid"),
        Y("error", "session_get_fail_bad_token"),
        g("api_session_logs_fetch", "auth_expired"),
        Error("Your session has expired. Please run /login to sign in again."))
      );
    return (
      n(`Failed to fetch session logs: ${o.status} ${o.statusText}`),
      Y("error", "session_get_fail_status", { status: o.status }),
      p("api_session_logs_fetch", "bad_status"),
      null
    );
  } catch (o) {
    if (!st.isAxiosError(o)) throw o;
    return (
      n(`Error fetching session logs: ${o.message}`, { level: "error" }),
      Y("error", "session_get_fail_status", { status: o.status }),
      p("api_session_logs_fetch", "network_error"),
      null
    );
  }
}

function Vqt(e) {
  if (!e) return;
  let t = e.findLast((r) => "uuid" in r && r.uuid);
  return t && "uuid" in t ? t.uuid : void 0;
}

function Qjn() {
  Lu().lastIngressUuidBySession.clear();
}

function NA(e) {
  if (e.type !== "user") return !1;
  let t = e.message?.content;
  if (typeof t === "string") return NK.some((r) => t.startsWith(r));
  if (!Array.isArray(t)) return !1;
  return (
    t.length > 0 &&
    t.every((r) => {
      let o = r.type === "text" ? r.text : r.type === "tool_result" && r.is_error === !0 ? r.content : void 0;
      return typeof o === "string" && NK.some((u) => o.startsWith(u));
    })
  );
}

function MI(e) {
  if (e.type !== "user" || e.interruptedByShutdown !== !0) return !1;
  let t = e.message?.content;
  return Array.isArray(t) && t.some((r) => r.type === "tool_result");
}

function BU(e, t) {
  return `${e}${BMt}${t}`;
}

function M0e(e) {
  if (e.type !== "user" || e.isMeta !== !0) return !1;
  let t = e.message?.content,
    r = Array.isArray(t) ? t[0] : void 0,
    o = typeof t === "string" ? t : r?.type === "text" && typeof r.text === "string" ? r.text : void 0;
  if (typeof o !== "string") return !1;
  if (Xqt.some((u) => o.startsWith(u))) return !0;
  if (Qqt.includes(o)) return !0;
  return Sin.some((u) => o.startsWith(`${u}${BMt}`));
}

async function LW(e) {
  let t = Date.now(),
    { stdout: r, code: o } = await qe(
      it(),
      ["-c", "core.hooksPath=/dev/null", "-c", "core.fsmonitor=", "worktree", "list", "--porcelain"],
      { cwd: e, preserveOutputOnError: !1 },
    ),
    u = Date.now() - t;
  if (o !== 0) return s("tengu_worktree_detection", { duration_ms: u, worktree_count: 0, success: !1 }), [];
  let d = r
    .split(`
`)
    .filter((A) => A.startsWith("worktree "))
    .map((A) => tr(A.slice(9)));
  s("tengu_worktree_detection", { duration_ms: u, worktree_count: d.length, success: !0 });
  let _ = d.find((A) => e === A || e.startsWith(A + Jqt)),
    C = d.filter((A) => A !== _).sort((A, x) => A.localeCompare(x));
  return _ ? [_, ...C] : C;
}

function I0e(e) {
  return UK.includes(e);
}

function Vjn(e, t) {
  let r = UK.indexOf(e),
    o = Math.max(0, Math.min(UK.length - 1, r + t));
  return UK[o];
}

function BK(e) {
  return {
    type: "api_system",
    message: { role: "system", content: e },
    uuid: Zqt(),
    timestamp: new Date().toISOString(),
  };
}

function xm(e) {
  return e.flatMap((t) => (Array.isArray(t) ? t.map((r) => `  - ${r}`) : [` - ${t}`]));
}

function Ll() {
  let e = Fa();
  return (e.staticSystemPromptEnabled ??= a.CLAUDE_CODE_CARVED_SLATE ?? I(eKt, !1)), e.staticSystemPromptEnabled;
}

function $0e() {
  let e = Fa();
  return (e.shellDescription ??= sKt()), e.shellDescription;
}

function sKt() {
  let e = a.SHELL || "unknown",
    t = e.includes("zsh") ? "zsh" : e.includes("bash") ? "bash" : e;
  if (a.platform === "win32") {
    if (!as()) return "PowerShell";
    if (Hk())
      return "PowerShell (primary); Bash tool also available for POSIX scripts \u2014 each takes its own syntax.";
    return t;
  }
  return t;
}

function iKt() {
  let e = Fa();
  return (e.agentProxyNote ??= bBt() ?? null), e.agentProxyNote;
}

function U0e() {
  return `Shell: ${$0e()}`;
}

function jue() {
  if (a.platform === "win32") return `${nKt()} ${O0e()}`;
  return `${tKt()} ${O0e()}`;
}

async function Wue({ cwd: e, additionalWorkingDirectories: t }) {
  let [r, o] = await Promise.all([Vg(), jue()]),
    u = aKt();
  return {
    workingDirectory: e,
    isWorktree: ha() !== null || m0(e),
    isGitRepo: r,
    additionalWorkingDirectories: [...(t ?? [])],
    platform: a.platform,
    shell: $0e(),
    osVersion: o,
    ...(u && { scratchpadDirectory: u }),
  };
}

function aKt() {
  if (!Ll() || !Kv() || a.CLAUDE_CODE_SESSION_KIND === "bg") return;
  return YD() ?? void 0;
}

function B0e(e) {
  return `Scratchpad directory: ${e} \u2014 always use it for temporary files (intermediate results, scripts, outputs that don't belong in the project) instead of \`/tmp\` or other system temp directories; it is session-specific, isolated from the project, and can generally be used without permission prompts. Only use \`/tmp\` if the user explicitly asks.`;
}

function H0e(e, t) {
  let r = t ? _u : (u) => u,
    o = [
      `Primary working directory: ${r(e.workingDirectory)}`,
      e.isWorktree ? F0e : null,
      e.isWorktree ? L0e : null,
      `Is a git repository: ${e.isGitRepo}`,
      e.additionalWorkingDirectories.length > 0 ? "Additional working directories:" : null,
      e.additionalWorkingDirectories.length > 0 ? e.additionalWorkingDirectories.map(r) : null,
      `Platform: ${r(e.platform)}`,
      `Shell: ${r(e.shell)}`,
      `OS Version: ${r(e.osVersion)}`,
      e.scratchpadDirectory !== void 0 ? B0e(r(e.scratchpadDirectory)) : null,
      iKt(),
    ].filter((u) => u !== null);
  return xm(o).join(`
`);
}

async function zue(e) {
  return H0e(await Wue(e), !1);
}

function j0e(e) {
  return [jU, jK, H0e(e, !0)].join(`
`);
}

function W0e(e, t) {
  return e.platform === t.platform && e.shell === t.shell && e.osVersion === t.osVersion;
}

function z0e(e, t) {
  let r = [];
  if (t.workingDirectory !== e.workingDirectory) r.push({ field: "workingDirectory", from: e.workingDirectory });
  if (t.isWorktree !== e.isWorktree) r.push({ field: "isWorktree" });
  if (t.isGitRepo !== e.isGitRepo) r.push({ field: "isGitRepo" });
  let o = new Set(e.additionalWorkingDirectories),
    u = new Set(t.additionalWorkingDirectories),
    d = t.additionalWorkingDirectories.filter((C) => !o.has(C)),
    _ = e.additionalWorkingDirectories.filter((C) => !u.has(C));
  if (d.length > 0 || _.length > 0) r.push({ field: "additionalWorkingDirectories", added: d, removed: _ });
  if (t.scratchpadDirectory !== e.scratchpadDirectory) r.push({ field: "scratchpadDirectory" });
  return r;
}

function G0e(e, t) {
  let r = [];
  for (let o of t)
    switch (o.field) {
      case "workingDirectory":
        r.push(`Primary working directory: ${_u(e.workingDirectory)} (was ${_u(o.from)})`);
        break;
      case "isWorktree":
        if (e.isWorktree) r.push(F0e, L0e);
        else r.push(oKt);
        break;
      case "isGitRepo":
        r.push(`Is a git repository: ${e.isGitRepo} (was ${!e.isGitRepo})`);
        break;
      case "additionalWorkingDirectories":
        if (o.added.length > 0) r.push("Additional working directories added:", o.added.map(_u));
        if (o.removed.length > 0) r.push("Additional working directories removed:", o.removed.map(_u));
        break;
      case "scratchpadDirectory":
        r.push(
          e.scratchpadDirectory !== void 0
            ? B0e(_u(e.scratchpadDirectory))
            : "The scratchpad directory announced earlier is no longer available; use it no further.",
        );
        break;
    }
  if (r.length === 0) return "";
  return [rKt, ...xm(r)].join(`
`);
}

function D0e(e) {
  return e.type === "attachment" && e.attachment.type === "environment";
}

function WK(e) {
  let t = HK().safeParse(e.findLast(D0e)?.attachment.snapshot).data,
    r = e.some((o) => D0e(o) && !Array.isArray(o.attachment.changes) && HK().safeParse(o.attachment.snapshot).success);
  return { latest: t, hasFullCopy: r };
}

function q0e() {
  let e = b7e(),
    t = b7e();
  return {
    setPromptSectionResolver: e.set,
    resolvePromptSection: (r, o) => e.get()?.(r, o) ?? Promise.resolve(o),
    setPromptSectionInvalidator: t.set,
    invalidatePromptSections: () => t.get()?.(),
  };
}

function bc(e, t) {
  return { name: e, compute: t, cacheBreak: !1 };
}

async function K0e(e, t, r) {
  let o = e1(),
    u = await t_.resolvePromptSection(t, await r());
  if (e1() === o) vxn(e, u);
  return u;
}

async function V0e(e) {
  let t = XO();
  return Promise.all(
    e.map((r) =>
      r.cacheBreak || !t.has(r.name) ? K0e(r.name, r.name, r.compute) : Promise.resolve(t.get(r.name) ?? null),
    ),
  );
}

function zK(e, t) {
  let r = `${e}${pKt}${JSON.stringify(t)}`,
    o = XO();
  return o.has(r) ? Promise.resolve(o.get(r) ?? null) : K0e(r, e, () => t);
}

function yG(e) {
  YQe(e), BCt(), Rnr();
}

function gKt(e) {
  return Ql(Ye(e))?.knowledge_cutoff ?? null;
}

function zU(e) {
  return { modelId: e, marketingName: $u(e) ?? null, knowledgeCutoff: gKt(e) };
}

function GK(e) {
  return e.marketingName
    ? `You are powered by the model named ${e.marketingName}. The exact model ID is ${e.modelId}.`
    : `You are powered by the model ${e.modelId}.`;
}

function qK(e) {
  return e.knowledgeCutoff ? `Assistant knowledge cutoff is ${e.knowledgeCutoff}.` : null;
}

function Y0e(e) {
  return [GK(e), qK(e)].filter((t) => t !== null).join(" ");
}

async function X0e(e) {
  let t = await zK(mKt, Y0e(e));
  return { type: "model", identity: e, text: t };
}

function Q0e(e) {
  let t = fKt().safeParse(e.text);
  return t.success && t.data !== void 0 ? t.data : Y0e(e.identity);
}

function J0e(e, t) {
  return e.modelId === t.modelId && e.marketingName === t.marketingName && e.knowledgeCutoff === t.knowledgeCutoff;
}

function hKt(e) {
  return e.type === "attachment" && e.attachment.type === "model";
}

function que(e) {
  let t = e.findLast(hKt)?.attachment,
    r = Gue().safeParse(t?.identity);
  return r.success ? { type: "model", identity: r.data, text: t?.text } : void 0;
}

function Kue(e) {
  return que(e)?.identity;
}

function Yue(e, t) {
  return `# Output Style: ${e}
${t}`;
}

function Z0e(e) {
  if (e === null) return "The output style was reset to the default. Respond in your usual style.";
  return Yue(zE(e.name), e.prompt);
}

function eUe(e) {
  if (e === null) return "The language preference was cleared. Match the user's language.";
  return Xue(zE(e));
}

function Xue(e) {
  return `# Language
Always respond in ${e}. Use ${e} for all explanations, comments, and communications with the user. Technical terms and code identifiers should remain in their original form.
Maintain full orthographic correctness for ${e}, including all required diacritical marks, accents, and special characters. Never substitute accented characters with their ASCII equivalents (e.g., never write "nao" for "n\xE3o", "fur" for "f\xFCr", or "loeschen" for "l\xF6schen").`;
}

function tUe(e, t) {
  return e === null || t === null ? e === t : e.name === t.name && e.prompt === t.prompt;
}

function tde(e, t, r) {
  if (e === void 0) return t === null ? void 0 : { value: t };
  return r(e.value, t) ? void 0 : { value: t };
}

function yKt(e) {
  return e.type === "attachment" && e.attachment.type === "output_style_instructions";
}

function _Kt(e) {
  return e.type === "attachment" && e.attachment.type === "language";
}

function KK(e) {
  let t = e.findLast(yKt);
  if (!t) return;
  let r = GU().safeParse(t.attachment.style);
  return r.success ? { value: r.data } : void 0;
}

function VK(e) {
  let t = e.findLast(_Kt);
  if (!t) return;
  let r = qU().safeParse(t.attachment.language);
  return r.success ? { value: r.data } : void 0;
}

function nUe(e, t) {
  let r = [];
  if (!KK(t)) {
    let o = KK(e)?.value;
    if (o) r.push({ type: "output_style_instructions", style: o });
  }
  if (!VK(t)) {
    let o = VK(e)?.value;
    if (o) r.push({ type: "language", language: o });
  }
  return r;
}

function II(e) {
  switch (e) {
    case "session_start":
      return "when this session started";
    case "compaction":
      return "after the conversation was compacted";
    case "policy_refresh":
      return "after the organization's managed settings changed";
    case "directory_added":
      return "after a working directory was added";
    case "settings_sync":
      return "after settings were synced onto this machine";
    case "account_change":
      return "after the account changed";
  }
}

function oUe(e, t, r) {
  let o = KU.flatMap((d) =>
    e[d]
      ? [
          `# ${d}
${e[d]}`,
        ]
      : [],
  );
  if (o.length === 0)
    return t
      ? `The session context was re-read${r ? ` ${II(r)}` : ""}; the values announced earlier (account, project, git status) no longer apply.`
      : "";
  return `${t ? (r ? `The session context was re-read ${II(r)}; these values replace the earlier ones:` : "The session context has changed; these values replace the earlier ones:") : "As you answer the user's questions, you can use the following context:"}
${o.join(`
`)}

IMPORTANT: this context may or may not be relevant to your tasks. You should not respond to this context unless it is highly relevant to your task.`;
}

function sUe(e) {
  return e.changed
    ? `The date has changed. Today's date is now ${e.date}. No need to announce the new date \u2014 the user's own clock shows it.`
    : `Today's date is ${e.date}.`;
}

function iUe(e, t) {
  return KU.every((r) => e[r] === t[r]);
}

function SKt(e) {
  return e.type === "attachment" && e.attachment.type === "session_context";
}

function bKt(e) {
  return e.type === "attachment" && e.attachment.type === "date";
}

function aUe(e) {
  return cde().safeParse(e.findLast(SKt)?.attachment.context).data;
}

function lUe(e) {
  return ude().safeParse(e.findLast(bKt)?.attachment).data?.date;
}

function cUe(e) {
  if (!e.includes("<!--")) return { content: e, stripped: !1 };
  return gde(new SM({ gfm: !1 }).lex(e));
}

function gde(e) {
  let t = "",
    r = !1,
    o = /<!--[\s\S]*?-->/g;
  for (let u of e) {
    if (u.type === "html") {
      let d = u.raw.trimStart();
      if (d.startsWith("<!--") && d.includes("-->")) {
        let _ = u.raw.replace(o, "");
        if (((r = !0), _.trim().length > 0)) t += _;
        continue;
      }
    }
    t += u.raw;
  }
  return { content: t, stripped: r };
}

function XK() {
  return nde();
}

async function LKt(e) {
  let t = [],
    r = 0,
    o = !1,
    u = async (d, _, C) => {
      if (C >= AKt) {
        o = !0;
        return;
      }
      let A = await kKt(d, { withFileTypes: !0 }).catch((x) => {
        if (C > 0) return [];
        throw x;
      });
      for (let x of A) {
        if (++r > RKt) {
          o = !0;
          return;
        }
        let M = _ === "" ? x.name : `${_}/${x.name}`;
        if (x.isDirectory() && !OKt(x.name)) await u(hde(d, x.name), M, C + 1);
        else if (x.isFile() && /\.md$/i.test(x.name) && !DKt(x.name)) t.push(M);
      }
    };
  try {
    return await u(e, "", 0), { files: t, listingFailed: !1, walkTruncated: o };
  } catch (d) {
    if (E(d) !== "ENOENT") n(`assembleMemoryIndex: readdir ${e} failed: ${d}`);
    return { files: t, listingFailed: E(d) !== "ENOENT", walkTruncated: o };
  }
}

async function mUe(e, t = yde) {
  let r = Date.now(),
    { files: o, listingFailed: u, walkTruncated: d } = await LKt(e),
    _ = (
      await Xb(
        o,
        async (pe) => {
          let fe = await wKt(hde(e, pe)).catch(() => null);
          return fe && fe.size <= CKt ? { rel: pe, mtimeMs: fe.mtimeMs } : null;
        },
        { concurrency: uUe },
      )
    ).flatMap((pe) => (pe === null ? [] : [pe])),
    C = _.sort((pe, fe) => fe.mtimeMs - pe.mtimeMs).slice(0, t),
    A = (await Xb(C, (pe) => $Kt(e, pe.rel, pe.mtimeMs).catch(() => null), { concurrency: uUe })).flatMap((pe) =>
      pe === null ? [] : [pe],
    ),
    x = A.map(UKt),
    M = _.length > t,
    F = M
      ? [`... ${_.length - A.length} more memories not listed (showing the ${A.length} most recently modified).`]
      : [],
    U = [...x, ...F].join(`
`),
    B = U.lastIndexOf(
      `
`,
      qF,
    ),
    W = U.length > qF;
  return {
    content: W
      ? U.slice(0, B > 0 ? B : qF) +
        `
... (truncated)`
      : U,
    entries: A,
    scanned: o.length,
    readErrors: C.length - A.length,
    capped: M,
    byteTruncated: W,
    listingFailed: u,
    walkTruncated: d,
    durationMs: Date.now() - r,
  };
}

function fUe(e, t, r) {
  let o = (u) => Q(e.entries, (d) => d[u] === null);
  s("tengu_memdir_index_assembled", {
    memory_scope: c(t),
    listing_failed: e.listingFailed,
    walk_truncated: e.walkTruncated,
    file_count: e.entries.length,
    scanned_count: e.scanned,
    read_error_count: e.readErrors,
    capped: e.capped,
    byte_truncated: e.byteTruncated,
    byte_count: e.content.length,
    duration_ms: e.durationMs,
    missing_type_count: o("type"),
    missing_description_count: o("description"),
    fallback_name_count: Q(e.entries, (u) => !u.nameFromFrontmatter),
    fallback_description_count: Q(e.entries, (u) => u.description !== null && !u.descriptionFromFrontmatter),
    kindling: yO(),
    disk_index_superseded: r,
  });
}

function WKt(e, t) {
  return [...e.matchAll(jKt)]
    .map((r) => r[1].trim())
    .filter((r) => !yUe(r) && !/^[a-z][a-z0-9+.-]*:/i.test(r) && !r.split(/[\\/]/).includes(".."))
    .map((r) => _Ue(t, r));
}

function fv(e) {
  return BKt(e).normalize("NFC").toLowerCase();
}

function JK() {
  return Di();
}

async function GKt(e) {
  let t;
  try {
    t = await ede();
  } catch (r) {
    let o = E(r);
    if (o === "ENOENT" || o === "ENOTDIR") return !0;
    return !1;
  }
  if (e === t) return !0;
  return e.startsWith(t + _de);
}

async function wUe(e) {
  if ((eKe(e), tD(e))) throw new iy(`Key targets an excluded personal-memory subtree: "${e}"`);
  let t = JK(),
    r = bUe(t, e),
    o = kUe(r);
  if (!o.startsWith(t)) throw new iy(`Key escapes personal memory directory: "${e}"`);
  let u = await U_t(o);
  if (!(await GKt(u))) throw new iy(`Key escapes personal memory directory via symlink: "${e}"`);
  for (let d of await qKt())
    if (u === d || u.startsWith(d + _de))
      throw new iy(`Key resolves into an excluded subtree (${PI.join("/, ")}/): "${e}"`);
  return o;
}

async function qKt() {
  let e = PI.map((r) => (r === "team" ? Ky().replace(/[/\\]+$/, "") : bUe(Di(), r))),
    t = [];
  for (let r of e)
    try {
      t.push(await zKt(r));
    } catch {}
  return t;
}

function MR(e) {
  let t = kUe(e).normalize("NFC").toLowerCase(),
    r = JK().normalize("NFC").toLowerCase();
  if (!t.startsWith(r)) return !1;
  let o = t.slice(r.length).replaceAll(_de, "/");
  return !tD(o);
}

function Qlt(e) {
  return Sde.compileErrorMessage(e);
}

function KKt(e) {
  try {
    return TUe.default().add([e]).test("probe"), null;
  } catch (t) {
    return t instanceof Error ? t.message : String(t);
  }
}

function YKt(e, t) {
  if (Sde.hasWarnedDroppedPattern(e, t)) return;
  n(`[${e}] gitignore-style pattern failed to compile (${Qlt(t)}); treating it as matching nothing: ${t}`, {
    level: "warn",
  }),
    s("tengu_uncompilable_ignore_pattern", { site: VKt[e] }),
    Sde.markDroppedPatternWarned(e, t);
}

function L8(e, t) {
  return e.filter((r) => {
    if (Qlt(r) === null) return !0;
    return YKt(t, r), !1;
  });
}

function GMt(e) {
  return e.split(/\r?\n/).filter(Boolean);
}

function ZK(e, t) {
  let r = e.lastIndexOf(" -");
  if (r > 0) {
    let o = e.substring(0, r),
      u = e.substring(r + 1);
    return `${Go([o])} ${u} ${Go([t])}`;
  } else return `${Go([e])} ${Go([t])}`;
}

function xUe() {
  return QKt.of(G().host);
}

async function bde() {
  let e = b2(be(), "session-env", K());
  return await le().mkdir(e), e;
}

function MUe(e, t) {
  return Te.userConfigDir("session-env", [e, t]);
}

async function IUe(e, t) {
  let r = [],
    o;
  do {
    let u = await e.listEntries(
      { namespace: "userConfigDir", dir: "session-env", relPath: [t] },
      o === void 0 ? void 0 : { cursor: o },
    );
    if (!u.ok) return { error: u.error };
    for (let d of u.value.items) {
      if (d.kind !== "key" || d.key.namespace !== "userConfigDir") continue;
      let _ = d.key.relPath.at(-1);
      if (_ !== void 0) r.push(_);
    }
    o = u.value.cursor;
  } while (o !== void 0);
  return r;
}

async function OUe(e, t) {
  let r = e.toLowerCase();
  return b2(await bde(), `${r}-hook-${t}.sh`);
}

async function DUe(e) {
  if (O() && e !== void 0) {
    let t = K(),
      r = await IUe(e, t);
    if (!Array.isArray(r)) {
      n(`Failed to clear cwd env files: ${Ge(r.error)}`);
      return;
    }
    let o = r.filter((d) => (d.startsWith("filechanged-hook-") || d.startsWith("cwdchanged-hook-")) && OI.test(d)),
      u = await Promise.all(o.map((d) => e.write(MUe(t, d), "", { publishDiscipline: "inPlace" })));
    for (let d of u) if (!d.ok) n(`Failed to clear cwd env files: ${Ge(d.error)}`);
    return;
  }
  try {
    let t = await bde(),
      r = await RUe(t);
    await Promise.all(
      r
        .filter((o) => (o.startsWith("filechanged-hook-") || o.startsWith("cwdchanged-hook-")) && OI.test(o))
        .map((o) => XKt(b2(t, o), "")),
    );
  } catch (t) {
    if (E(t) !== "ENOENT") n(`Failed to clear cwd env files: ${l(t)}`);
  }
}

function DI() {
  n("Invalidating session environment cache"), xUe().reset();
}

async function LUe(e) {
  let t = K(),
    r = xUe();
  if (r.script !== void 0 && r.owner === t) return r.script;
  let o = [],
    u = a.CLAUDE_ENV_FILE;
  if (u)
    try {
      let _ = (await EUe(u, "utf8")).trim();
      if (_) o.push(_), n(`Session environment loaded from CLAUDE_ENV_FILE: ${u} (${_.length} chars)`);
    } catch (_) {
      if (E(_) !== "ENOENT") n(`Failed to read CLAUDE_ENV_FILE: ${l(_)}`);
    }
  if (O() && e !== void 0) {
    let _ = await IUe(e, t);
    if (!Array.isArray(_)) n(`Failed to load session environment from hooks: ${Ge(_.error)}`);
    else {
      let A = _.filter((x) => OI.test(x)).sort(AUe);
      if (A.length > 0) {
        let x = await Promise.all(A.map((M) => e.read([MUe(t, M)])));
        for (let M = 0; M < A.length; M++) {
          let F = x[M];
          if (!F.ok) {
            n(`Failed to read hook file ${A[M]}: ${Ge(F.error)}`);
            continue;
          }
          let U = F.value.items[0];
          if (!U?.found) continue;
          let B = Buffer.from(U.value).toString("utf-8").trim();
          if (B) o.push(B);
        }
        n(`Session environment loaded from ${A.length} hook file(s)`);
      }
    }
    if (o.length === 0) return n("No session environment scripts found"), r.store(null, t), null;
    let C = o.join(`
`);
    return r.store(C, t), n(`Session environment script ready (${C.length} chars total)`), C;
  }
  try {
    let _ = await bde(),
      A = (await RUe(_)).filter((x) => OI.test(x)).sort(AUe);
    for (let x of A) {
      let M = b2(_, x);
      try {
        let F = (await EUe(M, "utf8")).trim();
        if (F) o.push(F);
      } catch (F) {
        if (E(F) !== "ENOENT") n(`Failed to read hook file ${M}: ${l(F)}`);
      }
    }
    if (A.length > 0) n(`Session environment loaded from ${A.length} hook file(s)`);
  } catch (_) {
    if (E(_) !== "ENOENT") n(`Failed to load session environment from hooks: ${l(_)}`);
  }
  if (o.length === 0) return n("No session environment scripts found"), r.store(null, t), null;
  let d = o.join(`
`);
  return r.store(d, t), n(`Session environment script ready (${d.length} chars total)`), d;
}

function AUe(e, t) {
  let r = e.match(OI),
    o = t.match(OI),
    u = r?.[1] || "",
    d = o?.[1] || "";
  if (u !== d) return (CUe[u] ?? 99) - (CUe[d] ?? 99);
  let _ = parseInt(r?.[2] || "0", 10),
    C = parseInt(o?.[2] || "0", 10);
  return _ - C;
}

function kde(e, t) {
  let r = !1;
  for (let o of e) {
    let u = o.deref();
    if (u === void 0) e.delete(o);
    else if (u === t) r = !0;
  }
  if (r) return !1;
  return e.add(new WeakRef(t)), !0;
}

function w2(e) {
  let t = [];
  for (let r of e) {
    let o = r.deref();
    if (o === void 0) e.delete(r);
    else t.push(o);
  }
  return t;
}

function wde() {
  return r2t;
}

function Tde() {
  return ZKt.getStore() !== void 0;
}

function d2t() {
  return Hw(a2t);
}

function FUe() {
  let e = [];
  for (let t of w2(d2t())) {
    let r = t.session?.hookRegistry;
    e.push(r ? r.holder().registeredHooks : t.registeredHooks, r ? r.mainThreadAgentHooks() : t.mainThreadAgentHooks);
  }
  return e;
}

function T2(e, t) {
  if (e.type !== t.type) return !1;
  let r = (o, u) => (o.if ?? "") === (u.if ?? "");
  switch (e.type) {
    case "command": {
      let o = jD();
      return (
        t.type === "command" &&
        e.command === t.command &&
        b(e.args ?? null) === b(t.args ?? null) &&
        (e.shell ?? o) === (t.shell ?? o) &&
        r(e, t)
      );
    }
    case "prompt":
      return t.type === "prompt" && e.prompt === t.prompt && r(e, t);
    case "agent":
      return t.type === "agent" && e.prompt === t.prompt && r(e, t);
    case "http":
      return t.type === "http" && e.url === t.url && r(e, t);
    case "mcp_tool":
      return (
        t.type === "mcp_tool" &&
        e.server === t.server &&
        e.tool === t.tool &&
        b(e.input ?? {}) === b(t.input ?? {}) &&
        r(e, t)
      );
    case "function":
      return !1;
  }
}

function p2t(e) {
  return e.map((t) => ({
    matcher: t.matcher,
    skillRoot: t.skillRoot,
    hooks: t.hooks.map((r) => r.hook).filter((r) => r.type !== "function"),
  }));
}

function m2t(e) {
  return e
    .map((t) => ({ matcher: t.matcher, hooks: t.hooks.map((r) => r.hook).filter((r) => r.type === "function") }))
    .filter((t) => t.hooks.length > 0);
}

function $Ue() {
  return Hw(f2t);
}

function g2t(e) {
  kde($Ue(), e);
}

function UUe() {
  let e = [];
  for (let t of w2($Ue()))
    for (let r of t.values())
      for (let o of _y)
        for (let u of r.hooks[o] ?? [])
          for (let { hook: d } of u.hooks) if (d.type !== "function") e.push({ event: o, hook: d });
  return e;
}

function nD() {
  return new NUe();
}

function V9e(e) {
  return E2.has(e) ? qi("hooks") : {};
}

function* h2t() {
  yield* qpn(), yield dxn(), yield Exn(), yield* FUe();
}

function ole(e) {
  for (let { event: t, hook: r } of UUe()) if (!E2.has(t) && r.type === "mcp_tool" && r.server === e) return !0;
  for (let t of h2t()) {
    if (!t) continue;
    for (let [r, o] of Object.entries(t)) {
      if (E2.has(r) || !o) continue;
      for (let u of o) for (let d of u.hooks ?? []) if (d.type === "mcp_tool" && d.server === e) return !0;
    }
  }
  return !1;
}

function vde() {
  return Hw(_2t);
}

function ect(e, t, r = oAt) {
  try {
    let o = vde();
    o.unsubscribe ??= pxn(S2t);
    let u = r.readStarttime(t);
    if (u === void 0) return;
    if ((Ade(o), ole(e) && iAt(t, u, r))) return;
    if (o.servers.length >= y2t) {
      let d = iAt(t, u, r);
      n(`tool cgroup: mcp pid ${t} not tracked (full); ${d ? "released instead" : "release refused"}`);
      return;
    }
    o.servers.push({ name: e, pid: t, starttime: u, fs: r });
  } catch (o) {
    n(`tool cgroup: mcp pid ${t} not tracked (${o})`);
  }
}

function S2t() {
  try {
    let e = vde();
    Ade(e), (e.servers = e.servers.filter((t) => !(ole(t.name) && iAt(t.pid, t.starttime, t.fs))));
  } catch (e) {
    n(`tool cgroup: mcp release recheck skipped (${e})`);
  }
}

function HUe(e, t) {
  if (E2.has(t)) return;
  try {
    let r = vde();
    if (!r.servers.some((o) => o.name === e)) return;
    Ade(r),
      (r.servers = r.servers.filter((o) => {
        if (o.name !== e) return !0;
        let u = iAt(o.pid, o.starttime, o.fs);
        return (
          n(
            `tool cgroup: mcp server backing a ${t} hook was still capped at fire time; ${u ? "released now" : "release refused"}`,
          ),
          !u
        );
      }));
  } catch (r) {
    n(`tool cgroup: mcp release at hook fire skipped (${r})`);
  }
}

function Ade(e) {
  e.servers = e.servers.filter((t) => t.fs.readStarttime(t.pid) === t.starttime);
}

function Oxe(e) {
  let t = {
    CLAUDECODE: "1",
    CLAUDE_CODE_SESSION_ID: e.sessionId,
    CLAUDE_CODE_CHILD_SESSION: "1",
    CLAUDE_PID: String(process.pid),
  };
  if (e.source === "agent") t.AI_AGENT = Kxn("agent");
  if (e.effortLevel !== void 0) t.CLAUDE_EFFORT = e.effortLevel;
  if (vpe()) {
    let r = Bte();
    if (r !== void 0) t.TRACEPARENT = r;
  }
  return t;
}

function lee(e) {
  return { sessionId: e.session_id, effortLevel: e.effort?.level, source: "harness" };
}

function tct(e, t) {
  if (!e.includes("<claude-code-hint")) return { hints: [], stripped: e };
  let r = C2t(t),
    o = [],
    u = e.replace(jUe, (_) => {
      let C = v2t(_),
        A = Number(C.v),
        x = C.type,
        M = C.value;
      if (!k2t.has(A)) return n(`[claudeCodeHints] dropped hint with unsupported v=${C.v}`), "";
      if (!x || !w2t.has(x)) return n(`[claudeCodeHints] dropped hint with unsupported type=${x}`), "";
      if (!M) return n("[claudeCodeHints] dropped hint with empty value"), "";
      return o.push({ v: A, type: x, value: M, sourceCommand: r }), "";
    }),
    d =
      o.length > 0 || u !== e
        ? u.replace(
            /\n{3,}/g,
            `

`,
          )
        : u;
  return { hints: o, stripped: d };
}

function x2(e) {
  if (!e.includes("<claude-code-hint")) return e;
  return e.replace(jUe, "").replace(
    /\n{3,}/g,
    `

`,
  );
}

function v2t(e) {
  let t = {};
  for (let r of e.matchAll(T2t)) t[r[1]] = r[2] ?? r[3] ?? "";
  return t;
}

function C2t(e) {
  let t = e.trim(),
    r = t.search(/\s/);
  return r === -1 ? t : t.slice(0, r);
}

async function LI(e) {
  try {
    return (await x2t(e)).isFile() ? e : null;
  } catch {
    return null;
  }
}

async function M2t(e) {
  let t;
  try {
    t = await R2t(e);
  } catch {
    return null;
  }
  return LI(t);
}

async function D2t() {
  let e = await Va("pwsh");
  if (e) {
    if (D() === "linux") {
      let r = await WUe(e).catch(() => e);
      if (e.startsWith("/snap/") || r.startsWith("/snap/")) {
        let o = (await LI("/opt/microsoft/powershell/7/pwsh")) ?? (await LI("/usr/bin/pwsh"));
        if (o) {
          let u = await WUe(o).catch(() => o);
          if (!o.startsWith("/snap/") && !u.startsWith("/snap/"))
            return g("shell_powershell_detect", "snap_workaround"), o;
        }
      }
    }
    return y("shell_powershell_detect"), e;
  }
  if (D() === "windows") {
    let r = a.ProgramFiles,
      o = a.LOCALAPPDATA,
      u = a.USERPROFILE,
      d =
        (r ? await LI(M2(r, "PowerShell", "7", "pwsh.exe")) : null) ??
        (o ? await M2t(M2(o, "Microsoft", "WindowsApps", "pwsh.exe")) : null) ??
        (u ? await LI(M2(u, ".dotnet", "tools", "pwsh.exe")) : null);
    if (d) return g("shell_powershell_detect", "windows_fallback_path"), d;
  }
  let t = await Va("powershell");
  if (t) return g("shell_powershell_detect", "fell_back_to_powershell_5"), t;
  if (D() === "windows") {
    let r = a.SYSTEMROOT ?? "C:\\Windows",
      o = await LI(M2(r, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"));
    if (o) return g("shell_powershell_detect", "fell_back_to_powershell_5"), o;
  }
  return null;
}

function gv() {
  if (!_0.powerShellPath) {
    _0.resolvedPowerShellPath = void 0;
    let e = D2t().then((t) => {
      if (_0.powerShellPath === e) _0.resolvedPowerShellPath = t;
      return t;
    });
    _0.powerShellPath = e;
  }
  return _0.powerShellPath;
}

function Xjn() {
  return _0.resolvedPowerShellPath;
}

async function nct() {
  let e = await gv();
  if (!e) return null;
  return e
    .split(/[/\\]/)
    .pop()
    .toLowerCase()
    .replace(/\.exe$/, "") === "pwsh"
    ? "core"
    : "desktop";
}

function F2t() {
  let e = a.CLAUDE_CODE_PWSH_PARSE_TIMEOUT_MS;
  if (e !== void 0 && e > 0) return e;
  return L2t;
}

function q2t(e) {
  return e + Math.min(e, G2t);
}

function Ov(e, t, r) {
  return { ...iVt, errors: [{ message: t, errorId: r }], originalCommand: e };
}

function M8(e) {
  return e.replace(/[\u2013\u2014\u2015]/g, "-");
}

function I2(e) {
  if (typeof Buffer < "u") return Buffer.from(e, "utf16le").toString("base64");
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let o = e.charCodeAt(r);
    t.push(o & 255, (o >> 8) & 255);
  }
  return btoa(t.map((r) => String.fromCharCode(r)).join(""));
}

function cVt(e) {
  return `$EncodedCommand = '${typeof Buffer < "u" ? Buffer.from(e, "utf8").toString("base64") : btoa(new TextEncoder().encode(e).reduce((r, o) => r + String.fromCharCode(o), ""))}'
${GUe}`;
}

function ry(e) {
  if (e === void 0 || e === null) return [];
  return Array.isArray(e) ? e : [e];
}

function uVt(e) {
  switch (e) {
    case "PipelineAst":
      return "PipelineAst";
    case "PipelineChainAst":
      return "PipelineChainAst";
    case "AssignmentStatementAst":
      return "AssignmentStatementAst";
    case "IfStatementAst":
      return "IfStatementAst";
    case "ForStatementAst":
      return "ForStatementAst";
    case "ForEachStatementAst":
      return "ForEachStatementAst";
    case "WhileStatementAst":
      return "WhileStatementAst";
    case "DoWhileStatementAst":
      return "DoWhileStatementAst";
    case "DoUntilStatementAst":
      return "DoUntilStatementAst";
    case "SwitchStatementAst":
      return "SwitchStatementAst";
    case "TryStatementAst":
      return "TryStatementAst";
    case "TrapStatementAst":
      return "TrapStatementAst";
    case "FunctionDefinitionAst":
      return "FunctionDefinitionAst";
    case "DataStatementAst":
      return "DataStatementAst";
    default:
      return "UnknownStatementAst";
  }
}

function YU(e, t) {
  switch (e) {
    case "ScriptBlockExpressionAst":
      return "ScriptBlock";
    case "SubExpressionAst":
    case "ArrayExpressionAst":
      return "SubExpression";
    case "ExpandableStringExpressionAst":
      return "ExpandableString";
    case "InvokeMemberExpressionAst":
    case "MemberExpressionAst":
      return "MemberInvocation";
    case "VariableExpressionAst":
      return "Variable";
    case "StringConstantExpressionAst":
    case "ConstantExpressionAst":
      return "StringConstant";
    case "CommandParameterAst":
      return "Parameter";
    case "ParenExpressionAst":
      return "SubExpression";
    case "CommandExpressionAst":
      if (t) return YU(t);
      return "Other";
    default:
      return "Other";
  }
}

function Rin(e) {
  if (/^[A-Za-z]+-[A-Za-z][A-Za-z0-9_]*$/.test(e)) return "cmdlet";
  if (/[.\\/]/.test(e)) return "application";
  return "unknown";
}

function zMt(e) {
  let t = e.lastIndexOf("\\");
  if (t < 0) return e;
  if (/^[A-Za-z]:/.test(e) || e.startsWith("\\\\") || e.startsWith(".\\") || e.startsWith("..\\")) return e;
  let r = e.substring(t + 1);
  if (r === "") return e;
  return r;
}

function zUe(e) {
  let t = ry(e.commandElements),
    r = "",
    o = [],
    u = [],
    d = [],
    _ = !1,
    C = "unknown";
  if (t.length > 0) {
    let M = t[0],
      B = (
        (M.type === "StringConstantExpressionAst" || M.type === "ExpandableStringExpressionAst") &&
        typeof M.value === "string"
          ? M.value
          : M.text
      ).replace(/^['"]|['"]$/g, "");
    if (/[\u0080-\uFFFF]/.test(B)) C = "application";
    else C = Rin(B);
    (r = M8(zMt(B))), u.push(YU(M.type, M.expressionType));
    for (let W = 1; W < t.length; W++) {
      let z = t[W],
        pe = z.type === "StringConstantExpressionAst" || z.type === "ExpandableStringExpressionAst";
      o.push(M8(pe && z.value != null ? z.value : z.text)), u.push(YU(z.type, z.expressionType));
      let fe = ry(z.children);
      if (fe.length > 0) (_ = !0), d.push(fe.map((me) => ({ type: YU(me.type), text: M8(me.text) })));
      else d.push(void 0);
    }
  }
  let A = {
      name: r,
      nameType: C,
      elementType: "CommandAst",
      args: o,
      text: M8(e.text),
      elementTypes: u,
      ...(_ && { children: d }),
    },
    x = ry(e.redirections);
  if (x.length > 0) A.redirections = x.map(VU);
  return A;
}

function dVt(e) {
  let t = e.type === "ParenExpressionAst" ? "ParenExpressionAst" : "CommandExpressionAst",
    r = [YU(e.type, e.expressionType)];
  return { name: M8(e.text), nameType: "unknown", elementType: t, args: [], text: M8(e.text), elementTypes: r };
}

function VU(e) {
  if (e.type === "MergingRedirectionAst") return { operator: "2>&1", target: "", isMerging: !0 };
  let t = e.append ?? !1,
    r = e.fromStream ?? "Output",
    o;
  if (t)
    switch (r) {
      case "Error":
        o = "2>>";
        break;
      case "All":
        o = "*>>";
        break;
      default:
        o = ">>";
        break;
    }
  else
    switch (r) {
      case "Error":
        o = "2>";
        break;
      case "All":
        o = "*>";
        break;
      default:
        o = ">";
        break;
    }
  return { operator: o, target: e.locationText ?? "", isMerging: !1 };
}

function pVt(e) {
  let t = uVt(e.type),
    r = [],
    o = [];
  if (e.elements) {
    for (let A of ry(e.elements))
      if (A.type === "CommandAst") {
        r.push(zUe(A));
        for (let x of ry(A.redirections)) o.push(VU(x));
      } else {
        r.push(dVt(A));
        for (let x of ry(A.redirections)) o.push(VU(x));
      }
    let C = new Set(o.map((A) => `${A.operator}\x00${A.target}`));
    for (let A of ry(e.redirections)) {
      let x = VU(A),
        M = `${x.operator}\x00${x.target}`;
      if (!C.has(M)) C.add(M), o.push(x);
    }
  } else {
    r.push({ name: M8(e.text), nameType: "unknown", elementType: "CommandExpressionAst", args: [], text: M8(e.text) });
    for (let C of ry(e.redirections)) o.push(VU(C));
  }
  let u,
    d = ry(e.nestedCommands);
  if (d.length > 0) u = d.map(zUe);
  let _ = { statementType: t, commands: r, redirections: o, text: M8(e.text), nestedCommands: u };
  if (e.securityPatterns) _.securityPatterns = e.securityPatterns;
  return _;
}

function mVt(e) {
  let t = {
      valid: e.valid,
      errors: ry(e.errors),
      statements: ry(e.statements).map(pVt),
      variables: ry(e.variables),
      hasStopParsing: e.hasStopParsing,
      originalCommand: e.originalCommand,
    },
    r = ry(e.typeLiterals);
  if (r.length > 0) t.typeLiterals = r;
  if (e.hasUsingStatements) t.hasUsingStatements = !0;
  if (e.hasScriptRequirements) t.hasScriptRequirements = !0;
  if (e.hasBackgroundJob) t.hasBackgroundJob = !0;
  return t;
}

async function fVt(e) {
  let t = Buffer.byteLength(e, "utf8");
  if (t > Rde)
    return (
      n(`PowerShell parser: command too long (${t} bytes, max ${Rde})`),
      Ov(e, `Command too long for parsing (${t} bytes). Maximum supported length is ${Rde} bytes.`, "CommandTooLong")
    );
  if (/`u\{[0-9A-Fa-f]/.test(e))
    return Ov(
      e,
      "PowerShell `u{HEX} codepoint escape is runtime-resolved and cannot be statically validated.",
      "UnicodeCodepointEscape",
    );
  let r = await gv();
  if (!r) return Ov(e, "PowerShell is not available", "NoPowerShell");
  let o = cVt(e),
    d = ["-NoProfile", "-NonInteractive", "-NoLogo", "-EncodedCommand", I2(o)],
    _ = F2t(),
    C = q2t(_),
    A = "",
    x = "",
    M = null,
    F = !1,
    U = null;
  for (let W = 0; W < H2t; W++) {
    (U = null), (F = !1);
    let z;
    try {
      let pe = Ff(r, d, { timeout: _, reject: !1, useToolMemoryCgroup: !1 }),
        fe = await Promise.race([
          pe,
          new Promise((me) => {
            z = setTimeout((ge) => ge(null), C, me);
          }),
        ]);
      if (fe === null) pe.catch(() => {}), (F = !0), (M = 1);
      else (A = fe.stdout), (x = fe.stderr), (F = fe.timedOut), (M = fe.failed ? (fe.exitCode ?? 1) : 0);
    } catch (pe) {
      (U = pe instanceof Error ? pe.message : String(pe)), (M = null);
    } finally {
      clearTimeout(z);
    }
    if (M === 0) break;
    n(
      `PowerShell parser: ${U ? `failed to spawn pwsh: ${U}` : F ? `pwsh timed out after ${_}ms` : `pwsh exited ${M}: ${x}`} (attempt ${W + 1})`,
    );
  }
  if (U) return Ov(e, `Failed to spawn PowerShell: ${U}`, "PwshSpawnError");
  if (F) return Ov(e, `pwsh timed out after ${_}ms (2 attempts)`, "PwshTimeout");
  if (M !== 0)
    return (
      n(`PowerShell parser: pwsh exited with code ${M}, stderr: ${x}`),
      Ov(e, `pwsh exited with code ${M}: ${x}`, "PwshError")
    );
  let B = A.trim();
  if (!B)
    return n("PowerShell parser: empty stdout from pwsh"), Ov(e, "No output from PowerShell parser", "EmptyOutput");
  try {
    let W = V(B);
    return mVt(W);
  } catch {
    return (
      n(`PowerShell parser: invalid JSON output: ${B.slice(0, 200)}`),
      Ov(e, "Invalid JSON from PowerShell parser", "InvalidJson")
    );
  }
}

function ile(e) {
  return yVt.of(G().host).parse(e);
}

function kin(e) {
  let t = [];
  for (let r of e.statements) {
    for (let o of r.commands) t.push(o.name.toLowerCase());
    if (r.nestedCommands) for (let o of r.nestedCommands) t.push(o.name.toLowerCase());
  }
  return t;
}

function tk(e) {
  let t = [];
  for (let r of e.statements) {
    for (let o of r.commands) t.push(o);
    if (r.nestedCommands) for (let o of r.nestedCommands) t.push(o);
  }
  return t;
}

function _Vt(e) {
  let t = [];
  for (let r of e.statements) {
    for (let o of r.redirections) t.push(o);
    if (r.nestedCommands) {
      for (let o of r.nestedCommands) if (o.redirections) for (let u of o.redirections) t.push(u);
    }
  }
  return t;
}

function Yjn(e, t) {
  let r = t.toLowerCase() + ":";
  return e.variables.filter((o) => o.path.toLowerCase().startsWith(r));
}

function Hin(e, t) {
  let r = t.toLowerCase(),
    o = DW[r]?.toLowerCase();
  for (let u of kin(e)) {
    if (u === r) return !0;
    let d = DW[u]?.toLowerCase();
    if (d === r) return !0;
    if (o && u === o) return !0;
    if (d && o && d === o) return !0;
  }
  return !1;
}

function cee(e, t) {
  if (t !== void 0) return t === "Parameter";
  return e.length > 0 && rD.has(e[0]);
}

function xin(e, t, r) {
  let o = t.toLowerCase(),
    u = r.toLowerCase();
  return e.args.some((d) => {
    let _ = d.indexOf(":", 1),
      A = (_ > 0 ? d.slice(0, _) : d)
        .replace(/`[\r\n]+\s*/g, "")
        .replaceAll("`", "")
        .toLowerCase();
    return A.startsWith(u) && o.startsWith(A) && A.length <= o.length;
  });
}

function rct(e) {
  return e.statements;
}

function Lxe(e) {
  let t = e.trim().toLowerCase();
  return t === "$null" || t === "${null}";
}

function oct(e) {
  return _Vt(e).filter((t) => !t.isMerging && !Lxe(t.target));
}

function j1(e) {
  let t = {
    hasSubExpressions: !1,
    hasScriptBlocks: !1,
    hasSplatting: !1,
    hasExpandableStrings: !1,
    hasMemberInvocations: !1,
    hasAssignments: !1,
    hasStopParsing: e.hasStopParsing,
  };
  function r(o) {
    if (!o.elementTypes) return;
    for (let u of o.elementTypes)
      switch (u) {
        case "ScriptBlock":
          t.hasScriptBlocks = !0;
          break;
        case "SubExpression":
          t.hasSubExpressions = !0;
          break;
        case "ExpandableString":
          t.hasExpandableStrings = !0;
          break;
        case "MemberInvocation":
          t.hasMemberInvocations = !0;
          break;
      }
  }
  for (let o of e.statements) {
    if (o.statementType === "AssignmentStatementAst") t.hasAssignments = !0;
    for (let u of o.commands) r(u);
    if (o.nestedCommands) for (let u of o.nestedCommands) r(u);
    if (o.securityPatterns) {
      if (o.securityPatterns.hasMemberInvocations) t.hasMemberInvocations = !0;
      if (o.securityPatterns.hasSubExpressions) t.hasSubExpressions = !0;
      if (o.securityPatterns.hasExpandableStrings) t.hasExpandableStrings = !0;
      if (o.securityPatterns.hasScriptBlocks) t.hasScriptBlocks = !0;
    }
  }
  for (let o of e.variables)
    if (o.isSplatted) {
      t.hasSplatting = !0;
      break;
    }
  return t;
}

function Pde() {
  let e = ["-NoProfile", "-NonInteractive"];
  if (!a.CLAUDE_CODE_POWERSHELL_RESPECT_EXECUTION_POLICY) e.push("-ExecutionPolicy", "Bypass");
  return e;
}

function ict(e) {
  return [...Pde(), "-Command", e];
}

function VUe(e, t) {
  return { binShell: { exe: e, args: [...Pde(), "-EncodedCommand"] }, command: I2(t) };
}

function wVt(e) {
  let t = 0;
  for (;;) {
    while (t < e.length && /[\s;]/.test(e[t])) t++;
    if (e[t] === "#") {
      while (
        t < e.length &&
        e[t] !==
          `
`
      )
        t++;
      continue;
    }
    if (e.startsWith("<#", t)) {
      let o = e.indexOf("#>", t + 2);
      t = o === -1 ? e.length : o + 2;
      continue;
    }
    break;
  }
  let r = e.slice(t);
  return (
    /^using\s+(namespace|module|assembly)\b/i.test(r) ||
    /^param\s*\(/i.test(r) ||
    /^(begin|process|end|clean|dynamicparam)\s*\{/i.test(r) ||
    (/^\[\w/.test(r) && !/^\[[\w.]+\]::/.test(r))
  );
}

function YUe(e) {
  let t;
  return {
    type: "powershell",
    shellPath: e,
    detached: !1,
    stdin: "ignore",
    async buildExecCommand(r, o) {
      t = o.useSandbox ? o.sandboxTmpDir : void 0;
      let u;
      if (o.useSandbox && o.sandboxTmpDir)
        u = (D() === "windows" ? KUe : bVt)(o.sandboxTmpDir, `claude-pwd-ps-${o.id}`);
      else {
        let M = xl();
        await SVt(M, { recursive: !0, mode: 448 }).catch(() => {}), (u = KUe(M, `claude-pwd-ps-${o.id}`));
      }
      let _ = `
; $_ec = if ($null -ne $LASTEXITCODE) { $LASTEXITCODE } elseif ($?) { 0 } else { 1 }
; (Get-Location).Path | Out-File -FilePath ${MDe(u, "the temp-directory path (override with CLAUDE_CODE_TMPDIR)")} -Encoding utf8 -NoNewline
; if ($ExecutionContext.SessionState.LanguageMode -eq 'FullLanguage') { $host.SetShouldExit($_ec) } else { exit $_ec }`,
        A = (wVt(r) ? "" : kVt) + r + _;
      return {
        commandString:
          o.useSandbox && D() !== "windows"
            ? [`'${e.replace(/'/g, "'\\''")}'`, ...Pde(), "-EncodedCommand", I2(A)].join(" ")
            : A,
        cwdFilePath: u,
      };
    },
    getSpawnArgs(r) {
      return ict(r);
    },
    async getEnvironmentOverrides(r, o, u) {
      let d = { ...Csr(process.env) },
        _ = process.env.FORCE_COLOR !== void 0 || u?.has("FORCE_COLOR");
      for (let [C, A] of Object.entries(vVt)) {
        if (process.env[C] !== void 0) continue;
        if (C === "NO_COLOR" && _) continue;
        d[C] = A;
      }
      if (u) for (let [C, A] of u) d[C] = A;
      if (t) (d.TMPDIR = t), (d.CLAUDE_CODE_TMPDIR = xl());
      return d;
    },
  };
}

async function RVt(e) {
  let { McpbManifestSchema: t } = await import("/$bunfs/root/chunk-hk4f5a1c.js"),
    r = t.safeParse(e);
  if (!r.success) {
    let o = r.error.flatten(),
      u = [...Object.entries(o.fieldErrors).map(([d, _]) => `${d}: ${_?.join(", ")}`), ...(o.formErrors || [])]
        .filter(Boolean)
        .join("; ");
    throw new R(`Invalid manifest: ${u}`, "MCPB manifest schema validation failed");
  }
  return r.data;
}

async function PVt(e) {
  let t;
  try {
    t = V(e);
  } catch (r) {
    throw Error(`Invalid JSON in manifest.json: ${l(r)}`);
  }
  return RVt(t);
}

async function xde(e) {
  let t = new TextDecoder().decode(e);
  return PVt(t);
}

function Mde(e) {
  if (g4(e)) return !1;
  for (let r of e.split(/[/\\]/)) if (/^\.\. [ .]*$/.test(r)) return !1;
  let t = MVt(e);
  if (xVt(t)) return !1;
  return !0;
}

function IVt(e, t) {
  t.fileCount++;
  let r;
  if (t.fileCount > Dv.MAX_FILE_COUNT)
    r = `Archive contains too many files: ${t.fileCount} (max: ${Dv.MAX_FILE_COUNT})`;
  let o = or(e.name, 120);
  if (!Mde(e.name)) r = `Unsafe file path detected: "${o}". Path traversal or absolute paths are not allowed.`;
  let u = e.originalSize || 0;
  if (u > Dv.MAX_FILE_SIZE)
    r = `File "${o}" is too large: ${Math.round(u / 1024 / 1024)}MB (max: ${Math.round(Dv.MAX_FILE_SIZE / 1024 / 1024)}MB)`;
  if (((t.totalUncompressedSize += u), t.totalUncompressedSize > Dv.MAX_TOTAL_SIZE))
    r = `Archive total size is too large: ${Math.round(t.totalUncompressedSize / 1024 / 1024)}MB (max: ${Math.round(Dv.MAX_TOTAL_SIZE / 1024 / 1024)}MB)`;
  let d = t.totalUncompressedSize / t.compressedSize;
  if (d > Dv.MAX_COMPRESSION_RATIO)
    r = `Suspicious compression ratio detected: ${d.toFixed(1)}:1 (max: ${Dv.MAX_COMPRESSION_RATIO}:1). This may be a zip bomb.`;
  return r ? { isValid: !1, error: r } : { isValid: !0 };
}

async function sye(e) {
  let { unzipSync: t } = await import("/$bunfs/root/chunk-y69hp76g.js"),
    o = { fileCount: 0, totalUncompressedSize: 0, compressedSize: e.length, errors: [] },
    u = t(new Uint8Array(e), {
      filter: (d) => {
        let _ = IVt(d, o);
        if (!_.isValid) throw new R(_.error, "MCPB zip entry validation failed");
        return !0;
      },
    });
  return (
    n(`Zip extraction completed: ${o.fileCount} files, ${Math.round(o.totalUncompressedSize / 1024)}KB uncompressed`), u
  );
}

function NI(e) {
  let t = Buffer.from(e.buffer, e.byteOffset, e.byteLength),
    r = {},
    o = Math.max(0, t.length - 22 - 65535),
    u = -1;
  for (let C = t.length - 22; C >= o; C--)
    if (t.readUInt32LE(C) === 101010256) {
      u = C;
      break;
    }
  if (u < 0) return r;
  let d = t.readUInt16LE(u + 10),
    _ = t.readUInt32LE(u + 16);
  for (let C = 0; C < d; C++) {
    if (_ + 46 > t.length || t.readUInt32LE(_) !== 33639248) break;
    let A = t.readUInt16LE(_ + 4),
      x = t.readUInt16LE(_ + 28),
      M = t.readUInt16LE(_ + 30),
      F = t.readUInt16LE(_ + 32),
      U = t.readUInt32LE(_ + 38),
      B = t.toString("utf8", _ + 46, _ + 46 + x);
    if (A >> 8 === 3) {
      let W = (U >>> 16) & 65535;
      if (W) r[B] = W;
    }
    _ += 46 + x + M + F;
  }
  return r;
}

function XUe(e) {
  let t = e?.platform ?? D(),
    r = e?.homedir ?? OVt(),
    o = e?.env ?? process.env,
    u = { HOME: r, DESKTOP: BI(r, "Desktop"), DOCUMENTS: BI(r, "Documents"), DOWNLOADS: BI(r, "Downloads") };
  switch (t) {
    case "windows": {
      let d = o.USERPROFILE || r;
      return { HOME: r, DESKTOP: BI(d, "Desktop"), DOCUMENTS: BI(d, "Documents"), DOWNLOADS: BI(d, "Downloads") };
    }
    case "linux":
    case "wsl":
      return {
        HOME: r,
        DESKTOP: o.XDG_DESKTOP_DIR || u.DESKTOP,
        DOCUMENTS: o.XDG_DOCUMENTS_DIR || u.DOCUMENTS,
        DOWNLOADS: o.XDG_DOWNLOAD_DIR || u.DOWNLOADS,
      };
    case "macos":
    default: {
      if (t === "unknown") n("Unknown platform detected, using default paths");
      return u;
    }
  }
}

function O2(e) {
  let t = new Set(xi()),
    r,
    o;
  for (let u of IL) {
    if (!t.has(u)) continue;
    let d = ye(u)?.pluginConfigs?.[e];
    if (d?.options) r = { ...r, ...d.options };
    if (d?.mcpServers) {
      o = o ?? {};
      for (let [_, C] of Object.entries(d.mcpServers)) o[_] = { ...o[_], ...C };
    }
  }
  return { options: r, mcpServers: o };
}

function VMt(e) {
  let t = new Set(xi()),
    r;
  for (let o of IL) {
    if (!t.has(o)) continue;
    let u = ye(o)?.enabledPlugins?.[e];
    if (u !== void 0) r = u;
  }
  return r;
}

function PL(e) {
  return e.endsWith(".mcpb") || e.endsWith(".dxt");
}

function QUe(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}

function JUe(e) {
  return Uv(e, ".mcpb-cache");
}

function NVt(e, t) {
  let r = Ode("md5").update(t).digest("hex").substring(0, 8);
  return Uv(e, `${r}.metadata.json`);
}

function ZUe(e, t) {
  return jF(NVt(e, t), () => FVt().nullable(), { defaultValue: null, indent: 2 });
}

function eBe(e, t) {
  return `${e}/${t}`;
}

async function aye(e, t, r) {
  try {
    let o = O2(e).mcpServers?.[t],
      u = (await vn().readAsync(r))?.pluginSecrets?.[eBe(e, t)];
    if (!o && !u) return null;
    return n(`Loaded user config for ${e}/${t} (settings + secureStorage)`), { ...o, ...u };
  } catch (o) {
    return n(`Failed to load user config for ${e}/${t}: ${o}`, { level: "error" }), null;
  }
}

async function sct(e, t, r, o, u, d) {
  try {
    let _ = {},
      C = {};
    for (let [z, pe] of Object.entries(r))
      if (o[z]?.sensitive === !0) C[z] = String(pe);
      else _[z] = pe;
    let A = new Set(Object.keys(C)),
      x = new Set(Object.keys(_)),
      M = eBe(e, t),
      F = 0,
      U = await vn().mutate((z) => {
        let pe = z.pluginSecrets?.[M],
          fe = pe ? gc(pe, (me, ge) => x.has(ge)) : void 0;
        if (
          ((F = fe && pe ? Object.keys(pe).length - Object.keys(fe).length : 0), Object.keys(C).length === 0 && F === 0)
        )
          return z;
        return { ...z, pluginSecrets: { ...z.pluginSecrets, [M]: { ...fe, ...C } } };
      }, d);
    if (!U.success) throw Error(`Failed to save sensitive config to secure storage for ${M}`);
    if (U.warning) n(`Server secrets save warning: ${U.warning}`, { level: "warn" });
    if (F > 0) n(`saveMcpServerUserConfig: scrubbed ${F} stale non-sensitive key(s) from secureStorage for ${M}`);
    let B = ye("userSettings")?.pluginConfigs?.[e]?.mcpServers?.[t] ?? {},
      W = Object.keys(B).filter((z) => A.has(z));
    if (Object.keys(_).length > 0 || W.length > 0) {
      let z = Object.fromEntries(W.map((fe) => [fe, void 0])),
        pe = await rn("userSettings", { pluginConfigs: { [e]: { mcpServers: { [t]: { ..._, ...z } } } } }, void 0, u);
      if (pe.error) throw pe.error;
      if (W.length > 0)
        n(`saveMcpServerUserConfig: scrubbed ${W.length} plaintext sensitive key(s) from settings.json for ${e}/${t}`);
    }
    n(`Saved user config for ${e}/${t} (${Object.keys(_).length} non-sensitive, ${Object.keys(C).length} sensitive)`);
  } catch (_) {
    let C = we(_);
    throw (
      (n(`Failed to save user config for ${e}/${t}: ${C.message}`, { level: "error" }),
      Error(`Failed to save user configuration for ${e}/${t}: ${C.message}`))
    );
  }
}

function uee(e, t) {
  let r = [];
  for (let [o, u] of Object.entries(t)) {
    let d = e[o];
    if (u.required && (d === void 0 || d === "")) {
      r.push(`${u.title || o} is required but not provided`);
      continue;
    }
    if (d === void 0 || d === "") continue;
    if (u.type === "string") {
      if (Array.isArray(d)) {
        if (!u.multiple) r.push(`${u.title || o} must be a string, not an array`);
        else if (!d.every((_) => typeof _ === "string")) r.push(`${u.title || o} must be an array of strings`);
      } else if (typeof d !== "string") r.push(`${u.title || o} must be a string`);
    } else if (u.type === "number" && typeof d !== "number") r.push(`${u.title || o} must be a number`);
    else if (u.type === "boolean" && typeof d !== "boolean") r.push(`${u.title || o} must be a boolean`);
    else if ((u.type === "file" || u.type === "directory") && typeof d !== "string")
      r.push(`${u.title || o} must be a path string`);
    if (u.type === "number" && typeof d === "number") {
      if (u.min !== void 0 && d < u.min) r.push(`${u.title || o} must be at least ${u.min}`);
      if (u.max !== void 0 && d > u.max) r.push(`${u.title || o} must be at most ${u.max}`);
    }
  }
  return { valid: r.length === 0, errors: r };
}

async function L2(e, t, r = {}) {
  let { getMcpConfigForManifest: o } = await import("/$bunfs/root/chunk-hk4f5a1c.js"),
    u = await o({ manifest: e, extensionPath: t, systemDirs: XUe(), userConfig: r, pathSeparator: "/" });
  if (!u) {
    let d = ft(
      Error(`Failed to generate MCP server configuration from manifest "${e.name}"`),
      "MCPB manifest: failed to generate MCP server configuration",
    );
    throw (h(d), d);
  }
  return u;
}

async function tBe(e, t) {
  try {
    return await ZUe(e, t).read();
  } catch (r) {
    return n(`Failed to load MCPB cache metadata: ${r}`, { level: "error" }), null;
  }
}

async function Ide(e, t, r) {
  await le().mkdir(e), await ZUe(e, t).write(r);
}

async function HVt(e, t, r) {
  if ((n(`Downloading MCPB from ${e}`), r)) r(`Downloading ${e}...`);
  let o = performance.now(),
    u = !1;
  try {
    let _ = await (iJ(e) ? O9.get : Dl.get)(e, {
        timeout: 120000,
        responseType: "arraybuffer",
        maxRedirects: 5,
        onDownloadProgress: (A) => {
          if (A.total && r) {
            let x = Math.round((A.loaded / A.total) * 100);
            r(`Downloading... ${x}%`);
          }
        },
      }),
      C = new Uint8Array(_.data);
    if (
      (DE("mcpb", e, "success", performance.now() - o),
      (u = !0),
      await Dde(t, Buffer.from(C)),
      n(`Downloaded ${C.length} bytes to ${t}`),
      r)
    )
      r("Download complete");
    return C;
  } catch (d) {
    if (!u) DE("mcpb", e, "failure", performance.now() - o, fM(d));
    let _ = l(d),
      C = Error(`Failed to download MCPB file from ${e}: ${_}`);
    throw (n(`Failed to download MCPB file from ${e}: ${_}`, { level: "error" }), C);
  }
}

async function zVt(e, t, r, o) {
  if (o) o("Extracting files...");
  await le().mkdir(t);
  let u = 0,
    d = Object.entries(e).filter(([C]) => !C.endsWith("/")),
    _ = d.length;
  for (let [C, A] of d) {
    let x = Uv(t, C),
      M = LVt(x);
    if (M !== t) await le().mkdir(M);
    if (
      C.endsWith(".json") ||
      C.endsWith(".js") ||
      C.endsWith(".ts") ||
      C.endsWith(".txt") ||
      C.endsWith(".md") ||
      C.endsWith(".yml") ||
      C.endsWith(".yaml")
    ) {
      let B = new TextDecoder().decode(A);
      await Dde(x, B, "utf-8");
    } else await Dde(x, Buffer.from(A));
    let U = r[C];
    if (U && U & 73) await DVt(x, U & 511).catch(() => {});
    if ((u++, o && u % 10 === 0)) o(`Extracted ${u}/${_} files`);
  }
  if ((n(`Extracted ${u} files to ${t}`), o)) o(`Extraction complete (${u} files)`);
}

async function GVt(e, t) {
  let r = le(),
    o = JUe(t),
    u = await tBe(o, e);
  if (!u) return !0;
  try {
    await r.stat(u.extractedPath);
  } catch (d) {
    if (E(d) === "ENOENT") n(`MCPB extraction path missing: ${u.extractedPath}`);
    else n(`MCPB extraction path inaccessible: ${u.extractedPath}: ${d}`, { level: "error" });
    return !0;
  }
  if (!QUe(e)) {
    let d = Uv(t, e),
      _;
    try {
      _ = await r.stat(d);
    } catch (A) {
      if (E(A) === "ENOENT") n(`MCPB source file missing: ${d}`);
      else n(`MCPB source file inaccessible: ${d}: ${A}`, { level: "error" });
      return !0;
    }
    if (u.sourceMtimeMs === void 0) return !0;
    let C = Math.floor(_.mtimeMs);
    if (C !== u.sourceMtimeMs)
      return (
        n(
          `MCPB file modified: mtime ${new Date(C).toISOString()} != cached ${new Date(u.sourceMtimeMs).toISOString()}`,
        ),
        !0
      );
  }
  return !1;
}

async function act(e, t, r, o, u, d, _, C) {
  let A = le(),
    x = JUe(t);
  await A.mkdir(x), n(`Loading MCPB from source: ${e}`);
  let M = await tBe(x, e);
  if (M && !(await GVt(e, t))) {
    n(`Using cached MCPB from ${M.extractedPath} (hash: ${M.contentHash})`);
    let Ee = Uv(M.extractedPath, "manifest.json"),
      Pe;
    try {
      Pe = await A.readFile(Ee, { encoding: "utf-8" });
    } catch (ze) {
      if (X(ze)) {
        let We = Error(`Cached manifest not found: ${Ee}`);
        throw (h(We), We);
      }
      throw ze;
    }
    let Oe = new TextEncoder().encode(Pe),
      Fe = await xde(Oe);
    if (Fe.user_config && Object.keys(Fe.user_config).length > 0) {
      let ze = Fe.name,
        We = await aye(r, ze, C),
        Ve = u || We || {},
        Pt = uee(Ve, Fe.user_config);
      if (d || !Pt.valid)
        return {
          status: "needs-config",
          manifest: Fe,
          extractedPath: M.extractedPath,
          contentHash: M.contentHash,
          configSchema: Fe.user_config,
          existingConfig: We || {},
          validationErrors: Pt.valid ? [] : Pt.errors,
        };
      if (u) await sct(r, ze, u, Fe.user_config ?? {}, _, C);
      let ct = await L2(Fe, M.extractedPath, Ve);
      return { manifest: Fe, mcpConfig: ct, extractedPath: M.extractedPath, contentHash: M.contentHash };
    }
    let Be = await L2(Fe, M.extractedPath);
    return { manifest: Fe, mcpConfig: Be, extractedPath: M.extractedPath, contentHash: M.contentHash };
  }
  let F, U, B;
  if (QUe(e)) {
    let Ee = Ode("md5").update(e).digest("hex").substring(0, 8);
    (U = Uv(x, `${Ee}.mcpb`)), (F = await HVt(e, U, o));
  } else {
    let Ee = Uv(t, e);
    if (o) o(`Loading ${e}...`);
    try {
      (F = await A.readFileBytes(Ee)), (U = Ee), (B = Math.floor((await A.stat(Ee)).mtimeMs));
    } catch (Pe) {
      if (X(Pe)) {
        let Oe = Error(`MCPB file not found: ${Ee}`);
        throw (n(`MCPB file not found: ${Ee}`, { level: "error" }), Oe);
      }
      throw Pe;
    }
  }
  let W = Ode("sha256").update(F).digest("hex").substring(0, 16);
  if ((n(`MCPB content hash: ${W}`), o)) o("Extracting MCPB archive...");
  let z = await sye(Buffer.from(F)),
    pe = NI(F),
    fe = z["manifest.json"];
  if (!fe) {
    let Ee = Error("No manifest.json found in MCPB file");
    throw (n(`No manifest.json found in MCPB file: ${U}`, { level: "error" }), Ee);
  }
  let me = await xde(fe);
  if ((n(`MCPB manifest: ${me.name} v${me.version} by ${me.author.name}`), !me.server)) {
    let Ee = ft(
      Error(`MCPB manifest for "${me.name}" does not define a server configuration`),
      "MCPB manifest does not define a server configuration",
    );
    throw (h(Ee), Ee);
  }
  let ge = Uv(x, W);
  if ((await zVt(z, ge, pe, o), me.user_config && Object.keys(me.user_config).length > 0)) {
    let Ee = me.name,
      Pe = await aye(r, Ee, C),
      Oe = u || Pe || {},
      Fe = uee(Oe, me.user_config);
    if (!Fe.valid) {
      let We = {
        source: e,
        contentHash: W,
        extractedPath: ge,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: B,
      };
      return (
        await Ide(x, e, We),
        {
          status: "needs-config",
          manifest: me,
          extractedPath: ge,
          contentHash: W,
          configSchema: me.user_config,
          existingConfig: Pe || {},
          validationErrors: Fe.errors,
        }
      );
    }
    if (u) await sct(r, Ee, u, me.user_config ?? {}, _, C);
    if (o) o("Generating MCP server configuration...");
    let Be = await L2(me, ge, Oe),
      ze = {
        source: e,
        contentHash: W,
        extractedPath: ge,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: B,
      };
    return await Ide(x, e, ze), { manifest: me, mcpConfig: Be, extractedPath: ge, contentHash: W };
  }
  if (o) o("Generating MCP server configuration...");
  let Ce = await L2(me, ge),
    Ie = {
      source: e,
      contentHash: W,
      extractedPath: ge,
      cachedAt: new Date().toISOString(),
      lastChecked: new Date().toISOString(),
      sourceMtimeMs: B,
    };
  return (
    await Ide(x, e, Ie),
    n(`Successfully loaded MCPB: ${me.name} (extracted to ${ge})`),
    { manifest: me, mcpConfig: Ce, extractedPath: ge, contentHash: W }
  );
}

function Xw(e) {
  return e.source;
}

function lct(e, t) {
  return e.find((r) => r.repository === t || r.source === t);
}

function hv(e, t) {
  let { optionValues: r } = Jt(),
    o = r.get(e);
  if (o !== void 0) return o;
  let u = qVt(e, t);
  return (
    r.set(e, u),
    u.catch(() => {
      if (r.get(e) === u) r.delete(e);
    }),
    u
  );
}

async function qVt(e, t) {
  let r = O2(e).options ?? {},
    o = (await vn().readAsync(t))?.pluginSecrets?.[e] ?? {};
  return { ...r, ...o };
}

function HI() {
  Jt().optionValues.clear();
}

async function lye(e, t, r, o, u) {
  let d = {},
    _ = {};
  for (let [U, B] of Object.entries(t))
    if (r[U]?.sensitive === !0) _[U] = String(B);
    else d[U] = B;
  let C = new Set(Object.keys(_)),
    A = new Set(Object.keys(d)),
    x = await vn().mutate((U) => {
      let B = U.pluginSecrets?.[e],
        W = B ? gc(B, (pe, fe) => A.has(fe)) : void 0,
        z = W && B && Object.keys(W).length !== Object.keys(B).length;
      if (Object.keys(_).length === 0 && !z) return U;
      return { ...U, pluginSecrets: { ...U.pluginSecrets, [e]: { ...W, ..._ } } };
    }, u);
  if (!x.success) {
    let U = Error(`Failed to save sensitive plugin options for ${e} to secure storage`);
    throw (n(U.message, { level: "error" }), U);
  }
  if (x.warning) n(`Plugin secrets save warning: ${x.warning}`, { level: "warn" });
  let M = ye("userSettings")?.pluginConfigs?.[e]?.options ?? {},
    F = Object.keys(M).filter((U) => C.has(U));
  if (Object.keys(d).length > 0 || F.length > 0) {
    let U = Object.fromEntries(F.map((W) => [W, void 0])),
      B = await rn("userSettings", { pluginConfigs: { [e]: { options: { ...d, ...U } } } }, void 0, o);
    if (B.error)
      throw (
        (n(`Failed to save plugin options for ${e} to settings.json: ${l(B.error)}`, { level: "error" }),
        Error(`Failed to save plugin options for ${e}: ${B.error.message}`))
      );
  }
  HI();
}

async function K9e(e, t, r) {
  if (ye("userSettings")?.pluginConfigs?.[e]) {
    let u = { [e]: void 0 },
      { error: d } = await rn("userSettings", { pluginConfigs: u }, void 0, t);
    if (d) n(`deletePluginOptions: failed to clear settings.pluginConfigs[${e}]: ${d.message}`, { level: "warn" });
  }
  try {
    if (
      !(
        await vn().mutate((d) => {
          if (!d.pluginSecrets) return d;
          let _ = `${e}/`,
            C = Object.entries(d.pluginSecrets).filter(([A]) => A !== e && !A.startsWith(_));
          if (C.length === Object.keys(d.pluginSecrets).length) return d;
          return { ...d, pluginSecrets: C.length > 0 ? Object.fromEntries(C) : void 0 };
        }, r)
      ).success
    )
      n(`deletePluginOptions: failed to clear pluginSecrets for ${e} from keychain`, { level: "warn" });
  } catch (u) {
    n(`deletePluginOptions: storage lock unavailable for ${e}: ${l(u)}`, { level: "warn" });
  }
  HI();
}

async function Mxe(e, t) {
  let r = e.manifest.userConfig;
  if (!r || Object.keys(r).length === 0) return {};
  let o = await hv(Xw(e), t),
    u = {};
  for (let [d, _] of Object.entries(r)) {
    let C = o[d];
    if (C === void 0 || C === "" || (_.sensitive !== !0 && !uee({ [d]: C }, { [d]: _ }).valid)) u[d] = _;
  }
  return u;
}

function XU(e, t) {
  let r = {};
  for (let [o, u] of Object.entries(t)) {
    if (u.required && u.default === void 0) continue;
    r[o] = u.default ?? "";
  }
  return { ...r, ...e };
}

function bG(e, t) {
  let r = (u) => u,
    o = e.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, () => r(t.path));
  if (((o = o.replace(/\$\{CLAUDE_PROJECT_DIR\}/g, () => r(gn()))), t.source)) {
    let u = t.source;
    o = o.replace(/\$\{CLAUDE_PLUGIN_DATA\}/g, () => r(pde(u)));
  }
  return o;
}

function OR(e, t) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (r, o) => {
    let u = t[o];
    if (u === void 0)
      throw Error(
        `Plugin option "${o}" isn't set. Open /plugin manage to configure it, or check that the plugin's userConfig schema declares "${o}".`,
      );
    return String(u);
  });
}

function X9e(e, t) {
  try {
    return OR(e, t) !== e;
  } catch {
    return !0;
  }
}

function N2(e, t, r, o) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (u, d) => {
    if (r[d]?.sensitive === !0) return `[sensitive option '${d}' not available in skill content]`;
    let _ = t[d];
    if (_ === void 0) return u;
    let C = String(_);
    return o ? o(C) : C;
  });
}

function cye(e) {
  return f_() ? ye("policySettings")?.statusLine : e;
}

function KMt(e) {
  if (Fv()) return;
  if (!M6()) return;
  return f_() ? ye("policySettings")?.fileSuggestion : e;
}

function xd() {
  let e = ye("policySettings")?.enabledPlugins;
  if (!e) return null;
  let t = new Set();
  for (let [r, o] of Object.entries(e)) {
    if (typeof o !== "boolean" || !r.includes("@")) continue;
    let u = St(r, "@");
    if (u) t.add(u);
  }
  return t.size > 0 ? t : null;
}

function OW() {
  let e = ye("policySettings")?.enabledPlugins;
  if (!e) return null;
  let t = new Set();
  for (let [r, o] of Object.entries(e)) if (o === !0 && r.includes("@")) t.add(r);
  return t.size > 0 ? t : null;
}

function Bv(e) {
  if (ho("hooks")) return [];
  let t = VO()?.[e] ?? [];
  if (Fv()) return t.filter((d) => !("pluginRoot" in d) && !("deviceOwner" in d));
  let r = f_(),
    o = r && !Dr() ? OW() : null,
    u = jpn();
  return [
    ...(SX()?.[e] ?? []),
    ...(r ? [] : (die()?.[e] ?? [])),
    ...t.filter((d) => !(r && "pluginRoot" in d && !o?.has(d.pluginId)) && !(u && "deviceOwner" in d)),
  ];
}

function sBe(e) {
  jI.flushers = e;
  let t = ub();
  if (t.pendingUsage.size > 0) iBe(t, e);
}

function ub() {
  return rBe.of(G().host);
}

function Jw(e) {
  let t = Date.now(),
    r = ub(),
    o = r.pendingUsage.get(e);
  if (o) o.count++, (o.lastUsedAt = t);
  else r.pendingUsage.set(e, { count: 1, lastUsedAt: t });
  if (jI.flushers) iBe(r, jI.flushers);
}

function iBe(e, t) {
  if (!jI.exitFlushRegistered) (jI.exitFlushRegistered = !0), process.on("exit", t.flushAtExit);
  if (!e.flushTimer) (e.flushTimer = setTimeout(t.flush, XVt)), e.flushTimer.unref?.();
}

function aBe(e) {
  ub().exitFlushesInFlight.push(e);
}

function lBe(e) {
  let t = ub().exitFlushesInFlight,
    r = t.indexOf(e);
  if (r !== -1) t.splice(r, 1);
}

function cBe() {
  let e = ub(),
    t = e.exitFlushesInFlight.flat();
  return (e.exitFlushesInFlight = []), t.length > 0 ? t : null;
}

function uBe(e) {
  ub().flushStorageV5 = e;
}

function dBe() {
  return ub().flushStorageV5;
}

function U2() {
  let e = ub();
  if (e.flushTimer) clearTimeout(e.flushTimer), (e.flushTimer = null);
  if (e.pendingUsage.size === 0) return null;
  let t = [...e.pendingUsage.entries()];
  return e.pendingUsage.clear(), t;
}

function Uin(e) {
  return ub().pendingUsage.has(e);
}

function pBe(e) {
  let { pendingUsage: t } = ub();
  for (let r of t.keys()) if (e.has(r.toLowerCase())) t.delete(r);
}

function DR(e) {
  return QVt("sha256")
    .update(e + JVt)
    .digest("hex")
    .slice(0, 16);
}

function V2() {
  return ZVt.of(G().host);
}

function gBe(e, t) {
  V2().firstPartyPlugins.set(e, t);
}

function eYt(e) {
  return V2().firstPartyPlugins.get(e);
}

function yct(e) {
  V2().loggableMcpServers.add(e);
}

function Yf(e, t, r, o, u) {
  try {
    let d = tYt(e, t, r);
    if (o) {
      let _ = Il(e);
      if (_ === "main" || _ === "subagent") {
        if (((d.attributionMcpServer = o), u)) d.attributionMcpTool = u;
      }
    }
    return d;
  } catch (d) {
    return h(d), {};
  }
}

function tYt(e, t, r) {
  if (!e) return {};
  if (e.startsWith("agent:builtin:")) return { attributionAgent: e.slice(14), ...q2(t) };
  if (e.startsWith("agent:custom:")) {
    let o = e.slice(13);
    return { attributionAgent: o, ...q2(t, kSn(o)) };
  }
  if (e.startsWith("agent:")) return q2(t);
  if (Il(e) === "main" && r) return q2(r);
  return {};
}

function q2(e, t) {
  if (!e) return t ? { attributionPlugin: t } : {};
  let r = kSn(e) ?? t;
  return { attributionSkill: e, ...(r && { attributionPlugin: r }) };
}

function JU(e, t) {
  let r = yBe(e, t),
    o = {};
  if (r.attributionAgent !== void 0) {
    o.attributionAgent = WI(r.attributionAgent);
    let u = QU(t.attributionAgent, r.attributionAgent, hBe);
    if (u !== void 0) o.attributionAgentHash = u;
  }
  if (r.attributionSkill !== void 0) {
    o.attributionSkill = WI(r.attributionSkill);
    let u = QU(t.attributionSkill, r.attributionSkill, Yw);
    if (u !== void 0) o.attributionSkillHash = u;
  }
  if (r.attributionPlugin !== void 0) {
    o.attributionPlugin = WI(r.attributionPlugin);
    let u = QU(t.attributionPlugin, r.attributionPlugin, Yw);
    if (u !== void 0) o.attributionPluginHash = u;
  }
  if (r.attributionMcpServer !== void 0) {
    o.attributionMcpServer = WI(r.attributionMcpServer);
    let u = QU(t.attributionMcpServer, r.attributionMcpServer, K2);
    if (u !== void 0) o.attributionMcpServerHash = u;
  }
  if (r.attributionMcpTool !== void 0) {
    o.attributionMcpTool = WI(r.attributionMcpTool);
    let u = QU(t.attributionMcpTool, r.attributionMcpTool, K2);
    if (u !== void 0) o.attributionMcpToolHash = u;
  }
  return o;
}

function QU(e, t, r) {
  if (t !== r || e === void 0 || e === r) return;
  return WI(DR(e));
}

function qI(e, t) {
  let {
      attributionAgent: r,
      attributionSkill: o,
      attributionPlugin: u,
      attributionMcpServer: d,
      attributionMcpTool: _,
    } = yBe(e, t),
    C = u ? eYt(u) : void 0;
  return {
    ...(r && { "agent.name": r }),
    ...(o && { "skill.name": o }),
    ...(u && { "plugin.name": u }),
    ...(C && { "marketplace.name": C }),
    ...(d && { "mcp_server.name": d }),
    ...(_ && { "mcp_tool.name": _ }),
  };
}

function yBe(e, t) {
  try {
    return nYt(e, t);
  } catch (r) {
    return h(r), {};
  }
}

function nYt(e, t) {
  let {
      attributionAgent: r,
      attributionSkill: o,
      attributionPlugin: u,
      attributionMcpServer: d,
      attributionMcpTool: _,
    } = t,
    { firstPartyPlugins: C, loggableMcpServers: A } = V2(),
    x = {};
  if (d !== void 0) {
    let M = A.has(d);
    if (((x.attributionMcpServer = M ? ln(d) : K2), _ !== void 0)) {
      let F = M ? e7e(d) : void 0,
        U = M && (F === void 0 || F.has(ln(_)));
      x.attributionMcpTool = U ? ln(_) : K2;
    }
  }
  if (r !== void 0)
    if (e?.startsWith("agent:builtin:")) x.attributionAgent = r;
    else {
      let M = u !== void 0 && C.has(u);
      x.attributionAgent = M ? r : hBe;
    }
  if (u !== void 0) {
    if (C.has(u)) {
      if (((x.attributionPlugin = u), o !== void 0)) x.attributionSkill = o;
    } else if (((x.attributionPlugin = Yw), o !== void 0)) x.attributionSkill = Yw;
  } else if (o !== void 0) x.attributionSkill = o;
  return x;
}

function WI(e) {
  return Vo(e);
}

function _Be(e, t) {
  return t ? `${e}@${t.toLowerCase()}` : e;
}

function X2() {
  return rYt.of(G().host);
}

function bBe() {
  return X2().generation();
}

function kBe(e, t, r, o) {
  X2().register(e, t, r, o);
}

function Lde(e, t) {
  return X2().get(e, t);
}

function wBe() {
  X2().clear();
}

function oYt() {
  let e = U2();
  if (!e) return;
  Ae(Fde(e), dBe());
}

async function TBe(e) {
  let t = U2();
  if (!t) return;
  aBe(t), await Ae(Fde(t), e), lBe(t);
}

function sWn(e) {
  if (O() && e !== void 0) uBe(e), vt(() => TBe(e)), BC(() => TBe(e));
}

function sYt() {
  let e = [...(cBe() ?? []), ...(U2() ?? [])];
  if (e.length === 0) return;
  W7e(Fde(e));
}

function Fde(e) {
  return (t) => {
    let r = { ...t.pluginUsage };
    for (let [o, u] of e) {
      let d = r[o];
      r[o] = {
        usageCount: (d?.usageCount ?? 0) + u.count,
        lastUsedAt: u.lastUsedAt,
        lastUsedNumStartups: t.numStartups,
      };
    }
    return { ...t, pluginUsage: r };
  };
}

function fNt(e, t) {
  let r = Date.now();
  Ae((o) => {
    let u = e.filter((_) => !o.pluginUsage?.[_]);
    if (u.length === 0) return o;
    let d = { ...o.pluginUsage };
    for (let _ of u) d[_] = { usageCount: 0, lastUsedAt: r, lastUsedNumStartups: o.numStartups };
    return { ...o, pluginUsage: d };
  }, t);
}

function Z9e(e, t) {
  let r = new Set(e.map((o) => o.toLowerCase()));
  pBe(r),
    Ae((o) => {
      let d = Object.keys(o.pluginUsage ?? {}).filter((C) => r.has(C.toLowerCase()));
      if (d.length === 0) return o;
      let _ = { ...o.pluginUsage };
      for (let C of d) delete _[C];
      return { ...o, pluginUsage: _ };
    }, t);
}

function Sct(e) {
  return ie().pluginUsage?.[e];
}

function aWn(e, t) {
  let r = Date.now();
  Ae((o) => {
    let u = e.filter((_) => o.pluginUsage?.[_]);
    if (u.length === 0) return o;
    let d = { ...o.pluginUsage };
    for (let _ of u) {
      let C = d[_];
      if (!C) continue;
      d[_] = { ...C, lastUsedAt: r, lastUsedNumStartups: o.numStartups };
    }
    return { ...o, pluginUsage: d };
  }, t);
}

function vBe(e, t) {
  let r = ie().pluginUsageLspGraceAppliedIds;
  if (e.every((u) => r?.includes(u))) return;
  let o = Date.now();
  Ae((u) => {
    let d = new Set(u.pluginUsageLspGraceAppliedIds),
      _ = e.filter((A) => !d.has(A));
    if (_.length === 0) return u;
    let C = { ...u.pluginUsage };
    for (let A of _) {
      let x = C[A];
      if (!x || x.usageCount > 0) continue;
      C[A] = { ...x, lastUsedAt: o, lastUsedNumStartups: u.numStartups };
    }
    return { ...u, pluginUsage: C, pluginUsageLspGraceAppliedIds: [...d, ..._] };
  }, t);
}

function bct(e, t, r) {
  return {
    sessionsSinceLastUse: Math.max(0, t - e.lastUsedNumStartups),
    daysSinceLastUse: Math.max(0, Math.floor((r - e.lastUsedAt) / 86400000)),
  };
}

function nk(e, t) {
  let r = Lde(e, t) ?? t,
    o = r ? `${e}@${r.toLowerCase()}` : e;
  return Vo(DR(o));
}

function lWn(e) {
  let { marketplace: t } = Vt(e);
  return S_t(t) ? Vo(e) : w("third-party");
}

function W1(e, t, r) {
  if (t === Uh) return "default-bundle";
  if (Pp(t)) return "official";
  if (t !== void 0 && lYe.has(t.toLowerCase())) return "community";
  if (r?.has(e)) return "org";
  return "user-local";
}

function q1(e) {
  return e === "official" || e === "default-bundle";
}

function iYt(e) {
  return q1(e) || e === "community";
}

function e3e(e, t, r) {
  let o = t?.type === "prompt" ? t.source : void 0,
    u = t?.type === "prompt" ? t.pluginInfo : void 0,
    d = u ? Vt(u.repository).marketplace : void 0,
    C = o === "builtin" || o === "bundled" || (o === "plugin" && Pp(d)) || Tl();
  Po("skill_activated", {
    "skill.name": C ? e : "custom_skill",
    invocation_trigger: r,
    ...(o && { "skill.source": o }),
    ...(t?.kind && { "skill.kind": t.kind }),
    ...(C && u && { "plugin.name": u.pluginManifest.name }),
    ...(C && d && { "marketplace.name": d }),
  });
}

function $8(e, t, r, o) {
  return {
    ...(e && { skill_source: c(e) }),
    ...(t && { skill_loaded_from: c(t) }),
    ...(r && { skill_kind: c(r) }),
    ...(o && { skill_created_by: c(o) }),
  };
}

function Bin(e) {
  return { skill_name_hash: Vo(DR(e)) };
}

function Nde(e, t) {
  if (!e) return {};
  return { parent_skill_name_hash: Vo(DR(e)), parent_command_name: Vo(t ? e : "custom") };
}

function G1({ rawName: e, canonicalName: t, isMcp: r, isBuiltIn: o, isBundled: u, isOfficial: d }) {
  let _ = r ? "mcp" : o || u || d ? e : "custom";
  return { sanitizedName: Vo(_), skillNameHash: _ === "custom" ? Bin(t) : {} };
}

function VI(e) {
  if (e.source !== "plugin" || !e.pluginInfo?.repository) return !1;
  return Pp(Vt(e.pluginInfo.repository).marketplace);
}

function jin(e, t, r) {
  if (e.isBuiltin) return "default-enable";
  if (t?.has(e.name)) return "org-policy";
  if (e.installationPreference === "required" || e.installationPreference === "auto_install") return "admin-install";
  if (r.some((o) => e.path.startsWith(o.endsWith(EBe) ? o : o + EBe))) return "seed-mount";
  return "user-install";
}

function aYt(e, t, r = null) {
  let o = W1(e, t, r),
    u = iYt(o) || b_t(e, t);
  return {
    plugin_id_hash: nk(e, t),
    plugin_scope: c(o),
    plugin_name_redacted: u ? e : Yw,
    marketplace_name_redacted: u && t ? t : Yw,
    is_official_plugin: q1(o),
  };
}

function z1(e, t, r = null) {
  let o = Lde(e, t) ?? t;
  return { _PROTO_plugin_name: e, ...(o && { _PROTO_marketplace_name: o }), ...aYt(e, t, r) };
}

function CBe(e) {
  if (e === void 0 || !V_t(e)) return;
  return Vo(e);
}

function iV(e, t, r) {
  s("tengu_plugin_folder_shadowed", { component: c(r), ...z1(e, t) });
}

function mV(e, t, r) {
  s("tengu_plugin_renamed", {
    outcome: c(r.kind),
    chain_depth: r.kind === "unresolved" ? void 0 : r.chainDepth,
    reason: r.kind === "unresolved" ? c(r.reason) : void 0,
    ...z1(e, t),
  });
}

function qv(e, t, r) {
  let o = new Map();
  for (let { name: u, source: d } of t) {
    let _ = o.get(u);
    if (_ === void 0) o.set(u, [d]);
    else _.push(d);
  }
  for (let [u, d] of o) {
    let _ = te(d);
    if (_.length < 2) continue;
    s("tengu_plugin_name_collision", {
      item_type: c(e),
      _PROTO_skill_name: u,
      item_name_hash: nk(u),
      source_count: _.length,
      sources: _.sort().join(","),
      ...(r.resolves && { winner_source: d.at(-1) }),
    });
  }
}

function Nb(e, t = null) {
  let { name: r, marketplace: o } = Vt(e);
  return z1(r, o, t);
}

function U8(e, t = xd()) {
  let { marketplace: r } = Vt(e.repository),
    o = CBe(e.serverPluginId);
  return { ...z1(e.pluginManifest.name, r, t), ...(o !== void 0 && { server_plugin_id: o }) };
}

function cWn(e, t) {
  for (let r of e)
    try {
      let { marketplace: o } = Vt(r.repository);
      if (q1(W1(r.name, o, t))) gBe(r.name, o);
    } catch (o) {
      h(o);
    }
}

function ABe(e) {
  let t = Ud(e);
  return t === void 0 || uc(t);
}

function lYt(e) {
  return e.isBuiltin === !0 || ABe(e.repository);
}

function Win(e) {
  return e.type === "prompt" && e.loadedFrom === "plugin" && e.pluginInfo !== void 0 && !ABe(e.pluginInfo.repository);
}

function uWn(e) {
  let t = new Map();
  for (let r of e) {
    if (!Win(r)) continue;
    let o = t.get(r.pluginInfo.repository);
    if (o) o.push(r.name);
    else t.set(r.pluginInfo.repository, [r.name]);
  }
  return t;
}

function cYt(e, t) {
  if (e === null) return {};
  let r = e.get(t) ?? [];
  return {
    skill_name_hash_count: r.length,
    ...(r.length > 0 && {
      skill_name_hashes: Vo(
        r
          .map((o) => DR(o))
          .sort()
          .join(","),
      ),
    }),
  };
}

function dWn(e, t, r, o, u) {
  let d = Tl(),
    _ = ie().numStartups,
    C = Date.now(),
    A = [],
    x = e.filter((M) => M.lspServers && Object.keys(M.lspServers).length > 0).map((M) => M.repository);
  if (x.length > 0) vBe(x, u);
  for (let M of e) {
    let F = Ud(M.repository),
      U = Sct(M.repository);
    if (!U) A.push(M.repository);
    let { sessionsSinceLastUse: B, daysSinceLastUse: W } = U
        ? bct(U, _, C)
        : { sessionsSinceLastUse: 0, daysSinceLastUse: 0 },
      z = W1(M.name, F, t),
      pe = jin(M, t, r),
      fe = (M.skillsPath ? 1 : 0) + (M.skillsPaths?.length ?? 0),
      me = (M.commandsPath ? 1 : 0) + (M.commandsPaths?.length ?? 0),
      ge = (M.agentsPath ? 1 : 0) + (M.agentsPaths?.length ?? 0),
      Ce = CBe(M.serverPluginId),
      Ie = q1(z) || d;
    Po("plugin_loaded", {
      "plugin.name": Ie ? M.name : Yw,
      ...(F && { "marketplace.name": Ie ? F : Yw }),
      ...(Ie && M.manifest.version && { "plugin.version": M.manifest.version }),
      "plugin.scope": z,
      enabled_via: pe,
      plugin_id_hash: nk(M.name, F),
      has_hooks: M.hooksConfig !== void 0,
      has_mcp: !M.skipMcpDiscovery && M.mcpServers !== void 0,
      host_owned_mcp: M.skipMcpDiscovery === !0,
      skill_path_count: fe,
      command_path_count: me,
      agent_path_count: ge,
      safe_mode: String(Dr()),
    }),
      s("tengu_plugin_enabled_for_session", {
        ...z1(M.name, F, t),
        ...(Ce !== void 0 && { server_plugin_id: Ce }),
        enabled_via: c(pe),
        ...(M.installationPreference !== void 0 && { installation_preference: c(M.installationPreference) }),
        skill_path_count: fe,
        command_path_count: me,
        agent_path_count: ge,
        ...cYt(lYt(M) ? null : o, M.repository),
        has_mcp: !M.skipMcpDiscovery && M.mcpServers !== void 0,
        host_owned_mcp: M.skipMcpDiscovery === !0,
        has_lsp: M.lspServers !== void 0,
        has_hooks: M.hooksConfig !== void 0,
        has_settings: M.settings !== void 0,
        sessions_since_last_use: B,
        days_since_last_use: W,
        safe_mode: Dr(),
        ...(M.settings && { settings_keys: Object.keys(M.settings).sort().join(",") }),
        ...(M.manifest.version && { version: us(M.manifest.version) }),
      });
  }
  if (A.length > 0) fNt(A, u);
}

function V1(e) {
  let t = String(e?.message ?? e),
    r = fme(e);
  if (typeof r === "string" && (mBe.has(r) || r.startsWith(pNt))) return "policy";
  if (
    /ENOTFOUND|ECONNREFUSED|EAI_AGAIN|ETIMEDOUT|ECONNRESET|network|Could not resolve|Connection refused|timed out/i.test(
      t,
    )
  )
    return "network";
  if (/\b404\b|not found|does not exist|no such plugin/i.test(t)) return "not-found";
  if (/\b40[13]\b|EACCES|EPERM|permission denied|unauthorized/i.test(t)) return "permission";
  if (/blocked by your organization'?s policy/i.test(t)) return "policy";
  if (
    /(?:the command|it|nothing) was not run|nothing was run|command that installs it was not run|is ignored inside a Claude Code session|Command-sourced plugins are disabled|not supported on Windows yet/i.test(
      t,
    )
  )
    return "policy";
  if (/invalid|malformed|schema|validation|parse error/i.test(t)) return "validation";
  return "unknown";
}

function uYt(e) {
  let t = e.toLowerCase();
  return goe.has(t) ? Vo(t) : w(Yw);
}

function pWn(e, t, r) {
  for (let o of e) {
    let { name: u, marketplace: d } = Vt(o.source),
      _ = "plugin" in o && o.plugin ? o.plugin : u;
    s("tengu_plugin_load_failed", {
      error_category: c(o.type),
      cache_only: r?.cacheOnly ?? !1,
      ...("component" in o && { component: c(o.component) }),
      ...("errno" in o && o.errno && { errno: o.errno }),
      ...z1(_, d, t),
      ...(o.type === "marketplace-load-failed" &&
        o.untrustedReservedName === !0 && {
          plugin_name_redacted: w(Yw),
          marketplace_name_redacted: uYt(o.marketplace),
          plugin_scope: c("user-local"),
          is_official_plugin: !1,
        }),
    });
  }
}

function b9n(e) {
  return dYt.includes(e);
}

function ble(e, t) {
  let r = Kd(Fp(e)),
    o = ce(r, mYt);
  return rt(o, Math.max(pYt - t, 1));
}

function fYt({ kind: e, name: t }) {
  switch (e) {
    case "skill":
      return `${ble(t, se(" skill"))} skill`;
    case "command": {
      let u = se("/") + se(" command");
      return `/${ble(t, u)} command`;
    }
    case "workflow": {
      let u = se("/") + se(" workflow");
      return `/${ble(t, u)} workflow`;
    }
    case "agent":
      return `${ble(t, se(" agent"))} agent`;
    case "hook":
      return `${ble(t, se(" hook"))} hook`;
    case "mcp-server": {
      let r = FXe(t)?.serverName ?? t,
        o = " MCP server";
      return `${ble(r, se(" MCP server"))} MCP server`;
    }
  }
}

function gYt(e, t) {
  return t && e.startsWith(t) ? e.slice(t.length) : e;
}

function v3e(e, t) {
  let r = e.kind === "workflow" ? `${t}:` : e.name.slice(0, e.name.lastIndexOf(":") + 1),
    o = e.userFacingName?.() ?? e.name,
    u = gYt(o, r);
  return { kind: e.kind === "workflow" ? "workflow" : e.loadedFrom === "plugin" ? "skill" : "command", name: u };
}

function PBe(e, t) {
  return `${e}\x00${(t ?? "").toLowerCase()}`;
}

function sk(e, t, r) {
  let o = Jt(),
    { name: u, marketplace: d } = Vt(e);
  if (r.kind !== "hook" && !__t(d)) {
    let _ = fYt(r),
      C = PBe(u, d),
      x = (o.pluginActivityFeatures.get(C) ?? []).filter((M) => M !== _);
    x.push(_), o.pluginActivityFeatures.set(C, x.slice(-Csn));
  }
  if (
    (t === "hook" || t === "mcp") &&
    o.recentActivity.some((_) => _.trigger === t && _.name === u && _.marketplace === d)
  )
    return;
  if ((o.recentActivity.push({ name: u, marketplace: d, trigger: t, ts: Date.now() }), o.recentActivity.length > RBe))
    o.recentActivity = o.recentActivity.slice(-RBe);
  n(`pluginActivity: recorded ${t} for ${u}`, { level: "verbose" });
}

function w9n(e, t) {
  return Jt().pluginActivityFeatures.get(PBe(e, t)) ?? [];
}

function vsn(e) {
  let t = Jt(),
    r = t.recentActivity.filter((o) => o.ts > e);
  return (t.recentActivity = []), r;
}

function ip(e) {
  return !("async" in e && e.async === !0);
}

function G_(e) {
  return "async" in e && e.async === !0;
}

function CD(e) {
  return SYt.has(e);
}

function hzn(e) {
  return CD(e) ? null : bYt[e];
}

function $de(e, t) {
  if (e === void 0) return !1;
  let r = Vd(e);
  return xBe.has(r) || Z6(r, t).some((o) => xBe.has(Vd(o)));
}

function _zn(e, t) {
  switch (e.hook_event_name) {
    case "PostToolUse":
    case "PostToolUseFailure":
      return $de(e.tool_name, t);
    case "PostToolBatch":
      return (e.tool_calls ?? []).some((r) => $de(r.tool_name, t));
    default:
      return !1;
  }
}

function yzn(e, t, r) {
  if (e !== "PostToolUse" && e !== "PostToolUseFailure") return !1;
  if (!t || t === "*" || !_ce.test(t)) return !1;
  let o = t
    .split(/[|,]/)
    .map((u) => u.trim())
    .filter(Boolean)
    .flatMap((u) => r1e(Vd(u), r));
  return o.length > 0 && o.every((u) => $de(u, r));
}

function tbe(e) {
  return !e || e === "*" || e === ".*";
}

function PUt(e, t) {
  if (e === void 0 || tbe(e)) return !0;
  if (tbe(t) || !_ce.test(t) || !_ce.test(e)) return !1;
  let r = new Set(
      e
        .split(/[|,]/)
        .map((u) => Vd(u.trim()))
        .filter(Boolean),
    ),
    o = t
      .split(/[|,]/)
      .map((u) => Vd(u.trim()))
      .filter(Boolean);
  return o.length > 0 && o.every((u) => r.has(u));
}

function Hde(e) {
  return typeof e === "object" && e !== null && "deviceOwner" in e && typeof e.deviceOwner === "string";
}

function MBe(e, t, r) {
  if (!Hde(e) || e.deviceOwner !== t) return !1;
  let o = e.deviceTemplate !== void 0;
  return r === "both" || (r === "templates") === o;
}

function IBe(e, t) {
  let r = VO() ?? {},
    o = {};
  for (let [u, d] of Object.entries(r)) {
    let _ = (d ?? []).filter(e);
    if (_.length > 0) o[u] = _;
  }
  for (let [u, d] of Object.entries(t)) if (d !== void 0 && d.length > 0) o[u] = [...(o[u] ?? []), ...d];
  if ((XQe(), Object.keys(o).length > 0)) kU(o);
}

function Ypt(e, t, r, o) {
  let u = {};
  for (let [d, _] of Object.entries(t)) {
    if (!CD(d)) continue;
    u[d] = (_ ?? []).map((C) => ({
      ...{
        ...(C.matcher !== void 0 && { matcher: C.matcher }),
        hooks: C.hooks.map(({ callback: x, timeout: M }) => ({
          type: "callback",
          callback: x,
          ...(M !== void 0 && { timeout: M }),
        })),
      },
      deviceOwner: e,
      ...(r === "templates" && { deviceTemplate: o?.(d, C) ?? "template" }),
    }));
  }
  IBe((d) => !MBe(d, e, r), u);
}

function Jpt(e, t) {
  IBe((r) => !MBe(r, e, t), {});
}

function DPe(e) {
  let t = [e.launchDir, e.launchDirReal, e.syncRoot, e.syncRootReal, ...(e.extra ?? [])].filter((r) => r !== void 0);
  return t.some((r) => !r.startsWith("/")) ? [OBe] : te(t);
}

function rh(e, t) {
  return e.some((r) => t.some((o) => nTe(r, o)));
}

async function eGe({
  stickyRoots: e,
  pinnedScopes: t,
  pinnedRoots: r,
  baseRoots: o,
  reachBaseline: u,
  scopeSettingsFile: d,
  realpath: _,
  commonRoots: C,
  scopeRoots: A,
}) {
  let x = new Map(),
    M = new Set();
  for (let W of Is) {
    let z = d(W);
    if (z !== null) {
      let pe = [z];
      await _(z).then(
        (fe) => pe.push(fe),
        () => {
          if (W !== "policySettings") M.add(W);
        },
      ),
        x.set(W, pe);
    }
  }
  let F = (W, z) => rh(x.get(W) ?? [], z),
    U = (W) => {
      t.add(W);
      let z = r.get(W);
      if (z === void 0) (z = A(W, u.get(W) ?? [])), r.set(W, z);
      for (let pe of z) e.add(pe);
    };
  for (let W of [...o, ...C()]) e.add(W);
  for (let W of Is) if (t.has(W) || wYt.includes(W) || M.has(W)) U(W);
  let B = new Set();
  for (;;) {
    let W = () => Is.filter((me) => !t.has(me) && !B.has(me));
    for (let me = !0; me; ) {
      me = !1;
      let ge = [...e, ...[...t].flatMap((Ce) => A(Ce, null))];
      for (let Ce of W()) if (F(Ce, [...ge, ...A(Ce, u.get(Ce) ?? [])])) U(Ce), (me = !0);
    }
    let z = W();
    if (z.length === 0) return [...e];
    let pe = new Map(z.map((me) => [me, A(me, null)])),
      fe = z.filter((me) => !z.some((ge) => ge !== me && F(me, [...(pe.get(ge) ?? []), ...A(ge, u.get(ge) ?? [])])));
    if (fe.length === 0) {
      for (let me of z) U(me);
      return [...e];
    }
    for (let me of fe) {
      B.add(me);
      for (let ge of pe.get(me) ?? []) e.add(ge);
    }
  }
}

function LBe(e) {
  let t = e.toUpperCase().replace(/-/g, "_");
  return EYt.has(t) || vYt.test(t);
}

async function Y7(e) {
  let t = "";
  for (let r = e; ; )
    try {
      let o = await RYt(r);
      if (!eB(o)) return "unreadable";
      return Wde(o, t);
    } catch (o) {
      let u = E(o);
      if (u !== "ENOENT" && u !== "ENOTDIR") return "unreadable";
      if (
        await NBe(r).then(
          (_) => _.isSymbolicLink(),
          () => !1,
        )
      )
        return "unreadable";
      let d = BBe(r);
      if (d === r) return "absent";
      (t = Wde(UBe(r), t)), (r = d);
    }
}

async function DUt(e, t = Na(), r = t) {
  let o = async (M) => {
      if (!eB(M)) return !1;
      let F = await Y7(M);
      return F !== "unreadable" && !rh([M, ...(F === "absent" ? [] : [F])].map(kf), e);
    },
    u = async (M) => {
      if (!eB(M)) return !1;
      let F = await Y7(M);
      return F === "unreadable" || rh([M, ...(F === "absent" ? [] : [F])].map(kf), e);
    },
    d = async (M) => (await Promise.all(M.split(ZU).map(u))).some(Boolean),
    _ = async (M) => (await Promise.all(M.split(ZU).map(async (F) => ((await o(F)) ? [F] : [])))).flat(),
    C = new Set(DBe),
    A = {},
    x = [];
  for (let M of Object.keys(t)) {
    let F = t[M];
    if (F === void 0) continue;
    if (C.has(M)) {
      let U = await _(F);
      if (M === "PATH") A.PATH = U.length > 0 ? U.join(ZU) : oun;
      else if (U.length > 0) A[M] = U.join(ZU);
      else x.push(M);
    } else if (LBe(M)) x.push(M);
    else if (await d(F)) x.push(M);
    else if (r[M] !== F) A[M] = F;
  }
  for (let M of Object.keys(r)) if (r[M] !== void 0 && t[M] === void 0) x.push(M);
  return { base: t, extra: A, omit: x };
}

async function tGe(e, t, r, o = 0) {
  for (let u of t.split(ZU)) {
    if (!eB(u)) return "in_reach";
    let d = Wde(u, e);
    if (
      !(await CYt(d, FBe.X_OK).then(
        () => !0,
        () => !1,
      ))
    ) {
      if (
        await NBe(d).then(
          (M) => M.isSymbolicLink(),
          () => !1,
        )
      ) {
        let M = await AYt(d).then(
            (U) => PYt(BBe(d), U),
            () => {
              return;
            },
          ),
          F = M === void 0 ? "unreadable" : await Y7(M);
        if (F === "unreadable" || rh([d, ...(M === void 0 ? [] : [M]), ...(F === "absent" ? [] : [F])].map(kf), r))
          return "in_reach";
      }
      continue;
    }
    let C = await Y7(d);
    if (C === "unreadable") return "in_reach";
    let A =
      C === "absent"
        ? void 0
        : await zde(C).catch((x) => (x.code === "ENOENT" || x.code === "ENOTDIR" ? void 0 : "unreadable"));
    if (A === "unreadable") return "in_reach";
    if (!A?.isFile()) continue;
    if (rh([d, C].map(kf), r)) return "in_reach";
    if (A.nlink > 1 && !(await qde(C))) return "in_reach";
    if (o <= 1) {
      if ((await LR(d, t, r, o)) !== void 0) return "in_reach";
    } else if (await HBe(C)) return "in_reach";
    return d;
  }
  return;
}

async function Szn(e) {
  let t = await zde(e).catch((r) => (r.code === "ENOENT" || r.code === "ENOTDIR" ? "absent" : "unreadable"));
  if (t === "absent") return !1;
  return t === "unreadable" || (t.nlink > 1 && !(await qde(e)));
}

async function qde(e) {
  let t = await $Be(e, "r").catch(() => {
    return;
  });
  if (t === void 0) return !1;
  try {
    let r = Buffer.alloc(4),
      { bytesRead: o } = await t.read(r, 0, 4, 0);
    if (o < 4) return !1;
    let u = r.readUInt32BE(0);
    return (
      u === 2135247942 ||
      u === 4277009102 ||
      u === 4277009103 ||
      u === 3472551422 ||
      u === 3489328638 ||
      u === 3405691582
    );
  } finally {
    await t.close();
  }
}

async function HBe(e) {
  let t = await jBe(e, 2);
  return t === void 0 || t.startsWith("#!");
}

function iun(e) {
  return e === "-" || e === "--" || /^--[a-z][a-z-]*$/.test(e) || (/^-[A-Za-z]{1,3}$/.test(e) && !/^-[IMmr]./.test(e));
}

async function LR(e, t, r, o = 0) {
  let u = await Y7(e);
  if (u === "unreadable") return "unreadable";
  let d =
    u === "absent"
      ? "absent"
      : await zde(u).catch((U) => (U.code === "ENOENT" || U.code === "ENOTDIR" ? "absent" : void 0));
  if (d === void 0) return "unreadable";
  if (d === "absent" || !d.isFile()) return;
  if (d.nlink > 1 && !(await qde(u))) return "program_unresolved";
  let _ = await jBe(u, 512);
  if (_ === void 0) return o === 0 ? "unreadable" : void 0;
  if (!_.startsWith("#!")) return;
  let C = _.slice(
      2,
      _.includes(`
`)
        ? _.indexOf(`
`)
        : void 0,
    )
      .replace(/^[ \t]+|[ \t]+$/g, "")
      .split(/[ \t]+/),
    A = C[0];
  if (A === void 0 || !eB(A)) return "shebang_in_reach";
  if (C.some((U) => /[^\x21-\x7e]/.test(U))) return "program_unresolved";
  let x = iun,
    M = kf(A) === "/usr/bin/env" || kf(A) === "/bin/env";
  if (kf(UBe(A)) === "env" && !M) return "program_unresolved";
  if (M) {
    let U = C.slice(1).flatMap((pe) => pe.split(/[ \t]+/)),
      B = U[0] === "-S" ? U.slice(1) : U,
      W = B[0];
    if (W === void 0 || W.startsWith("-") || W.includes("=") || W.includes("/") || !B.slice(1).every(x))
      return "program_unresolved";
    let z = await tGe(W, t, r, o + 1);
    return z === void 0 ? "program_unresolved" : z === "in_reach" ? "shebang_in_reach" : void 0;
  }
  if (!C.slice(1).every(x)) return "program_unresolved";
  let F = await Y7(A);
  if (F === "unreadable") return "unreadable";
  if (F !== "absent" && rh([A, F].map(kf), r)) return "shebang_in_reach";
  if (F === "absent") return;
  if (o < 2) return LR(A, t, r, o + 1);
  return (await HBe(F)) ? "program_unresolved" : void 0;
}

async function jBe(e, t) {
  let r = await $Be(e, "r").catch(() => {
    return;
  });
  if (r === void 0) return;
  try {
    let o = Buffer.alloc(t),
      { bytesRead: u } = await r.read(o, 0, t, 0);
    return o.subarray(0, u).toString("utf8");
  } finally {
    await r.close();
  }
}

function Vde(e, t, r) {
  return `A ${e} ${t} hook on this machine was not run for this call: ${xYt[r]}. Its output is not part of this result.`;
}

function zBe(e, t) {
  return e.endsWith(WBe) ? e + t : e + WBe + t;
}

function _9(e) {
  switch (e.type) {
    case "command":
      return e.args ? [e.command, ...e.args].join(" ") : e.command;
    case "prompt":
      return e.prompt;
    case "agent":
      return e.prompt;
    case "http":
      return e.url;
    case "mcp_tool":
      return `${e.server}/${e.tool}`;
    case "callback":
      return "callback";
    case "function":
      return "function";
  }
}

function fk(e) {
  if ("statusMessage" in e && e.statusMessage) return e.statusMessage;
  return _9(e);
}

function bzn(e) {
  let t = [];
  if (ye("policySettings")?.allowManagedHooksOnly !== !0) {
    let d = UH,
      _ = new Set();
    for (let C of d) {
      let A = Mo(C);
      if (A) {
        let M = MYt(A);
        if (_.has(M)) continue;
        _.add(M);
      }
      let x = ye(C);
      if (!x?.hooks) continue;
      for (let [M, F] of Object.entries(x.hooks))
        for (let U of F) for (let B of U.hooks) t.push({ event: M, config: B, matcher: U.matcher, source: C });
    }
  }
  let u = K();
  for (let [d, _] of e.get(u).entries())
    for (let C of _) for (let A of C.hooks) t.push({ event: d, config: A, matcher: C.matcher, source: "sessionHook" });
  return t;
}

function sun(e) {
  return Xde[e]?.description ?? e;
}

function Qpt(e) {
  return Xde[e]?.header ?? e;
}

function aun(e) {
  return Xde[e]?.inline ?? e;
}

function wzn(e, t, r) {
  let o = GAe.reduce((u, d, _) => ((u[d] = _), u), {});
  return [...e].sort((u, d) => {
    let _ = t[r]?.[u] || [],
      C = t[r]?.[d] || [],
      A = te(_.map((B) => B.source)),
      x = te(C.map((B) => B.source)),
      M = (B) => (B === "pluginHook" || B === "builtinHook" ? 999 : o[B]),
      F = Math.min(...A.map(M)),
      U = Math.min(...x.map(M));
    if (F !== U) return F - U;
    return u.localeCompare(d);
  });
}

function QBe(e) {
  let t = Math.max(0, Math.ceil((e - 50000) / 50000));
  return Math.min(JI, Jde + t * 1e4);
}

function CV() {
  return I("tengu_disable_live_host_context", !1);
}

function tpe(e) {
  try {
    let t = new URL(e),
      r = t.origin === "null" ? `${t.protocol}//${t.host}` : t.origin;
    return ce(r, GBe);
  } catch {
    return ce(e, GBe);
  }
}

function DYt(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let o = e.charCodeAt(r);
    if (o >= 32 && o !== 127 && !(o >= 128 && o <= 159)) t += e[r];
  }
  return t;
}

function LYt(e) {
  if (/^4;[0-4](;(100|\d{1,2})?)?$/.test(e)) return !0;
  return !/^[\s\u180e\u200b]*[+-]?\p{Nd}/u.test(e);
}

function FYt(e) {
  if (e.length === 0) return null;
  if (Buffer.byteLength(e, "utf8") > OYt) return null;
  let t = [],
    r = 0;
  while (r < e.length) {
    let o = e[r];
    if (o === YE) {
      t.push({ kind: "bel" }), r++;
      continue;
    }
    if (o !== UI || e[r + 1] !== "]") return null;
    let u = r + 2,
      d = -1,
      _ = 0;
    while (u < e.length) {
      if (e[u] === YE) {
        (d = u), (_ = 1);
        break;
      }
      if (e[u] === UI && e[u + 1] === "\\") {
        (d = u), (_ = 2);
        break;
      }
      if (e[u] === UI) return null;
      u++;
    }
    if (d === -1) return null;
    let C = e.slice(r + 2, d),
      A = C.indexOf(";"),
      x = A === -1 ? C : C.slice(0, A),
      M = A === -1 ? "" : C.slice(A + 1);
    if (!/^\d+$/.test(x)) return null;
    let F = Number(x);
    if (!IYt.has(F)) return null;
    let U = DYt(M);
    if (F === 9 && !LYt(U)) return null;
    t.push({ kind: "osc", ps: F, payload: U }), (r = d + _);
  }
  return t;
}

function npe(e) {
  let t = FYt(e);
  if (t === null) return null;
  return t.map((r) => (r.kind === "bel" ? YE : tw(nf(r.ps, r.payload)))).join("");
}

function AV() {
  return NYt.of(G().host);
}

function Tzn(e) {
  if (e === null) {
    AV().reset();
    return;
  }
  AV().register(e);
}

function Ezn(e) {
  AV().unregister(e);
}

function ope(e) {
  AV().write(e);
}

function tHe() {
  return UYt.of(G().host);
}

function xV(e) {
  if ($Yt.includes(e)) return !0;
  return tHe().allHookEventsEnabled && _y.includes(e);
}

function MV(e, t, r) {
  if (!xV(r)) return;
  Tu({ type: "system", subtype: "hook_started", hook_id: e, hook_name: t, hook_event: r });
}

function BYt(e) {
  if (!xV(e.hookEvent)) return;
  Tu({
    type: "system",
    subtype: "hook_progress",
    hook_id: e.hookId,
    hook_name: e.hookName,
    hook_event: e.hookEvent,
    stdout: e.stdout,
    stderr: e.stderr,
    output: e.output,
  });
}

function IV(e) {
  if (!xV(e.hookEvent)) return () => {};
  let t = "",
    r = setInterval(() => {
      e.getOutput().then(({ stdout: o, stderr: u, output: d }) => {
        if (d === t) return;
        (t = d),
          BYt({ hookId: e.hookId, hookName: e.hookName, hookEvent: e.hookEvent, stdout: o, stderr: u, output: d });
      });
    }, e.intervalMs ?? 1000);
  return r.unref(), () => clearInterval(r);
}

function cu(e) {
  let t = e.stdout || e.stderr || e.output;
  if (t)
    n(`Hook ${e.hookName} (${e.hookEvent}) ${e.outcome}:
${t}`);
  if (!xV(e.hookEvent)) return;
  Tu({
    type: "system",
    subtype: "hook_response",
    hook_id: e.hookId,
    hook_name: e.hookName,
    hook_event: e.hookEvent,
    output: e.output,
    stdout: e.stdout,
    stderr: e.stderr,
    ...(e.exitCode !== void 0 && { exit_code: e.exitCode }),
    outcome: e.outcome,
  });
}

function SGn(e) {
  tHe().setAllHookEventsEnabled(e);
}

function LV(e, t) {
  if (!e || typeof e !== "object" || Array.isArray(e) || !t || typeof t !== "object") return;
  let r = [],
    o = new Set(Object.keys(t));
  for (let C of Object.keys(e)) if (!o.has(C)) r.push(C);
  let u = e.hookSpecificOutput,
    d = "hookSpecificOutput" in t ? t.hookSpecificOutput : void 0;
  if (u && typeof u === "object" && !Array.isArray(u) && d && typeof d === "object") {
    let C = new Set(Object.keys(d));
    for (let A of Object.keys(u)) if (!C.has(A)) r.push(`hookSpecificOutput.${A}`);
  }
  if (r.length === 0) return;
  let _ = r.includes("additionalContext")
    ? " Did you mean hookSpecificOutput.additionalContext (with a hookEventName)?"
    : "";
  n(`Hook JSON output had unrecognized keys (ignored): ${r.join(", ")}.${_}`);
}

function nHe(e, t) {
  if (!He(e))
    return n(`${t} async hook JSON output must be an object, got ${tB(e)} \u2014 ignored`, { level: "error" }), {};
  let r = l9().safeParse(e);
  if (r.success && ip(r.data)) return LV(e, r.data), r.data;
  let o = [],
    u = {};
  if ("systemMessage" in e)
    if (typeof e.systemMessage === "string") u.systemMessage = e.systemMessage;
    else o.push(`systemMessage (${tB(e.systemMessage)})`);
  if ("metrics" in e)
    if (He(e.metrics)) {
      let C = Object.entries(e.metrics).filter((A) => typeof A[1] === "boolean" || typeof A[1] === "number");
      u.metrics = Object.fromEntries(C);
    } else o.push(`metrics (${tB(e.metrics)})`);
  if ("hookSpecificOutput" in e)
    if (He(e.hookSpecificOutput)) {
      let { additionalContext: C, ...A } = e.hookSpecificOutput,
        x = typeof C === "string";
      if (!x && C !== void 0) o.push(`hookSpecificOutput.additionalContext (${tB(C)})`);
      u.hookSpecificOutput = x ? e.hookSpecificOutput : A;
    } else o.push(`hookSpecificOutput (${tB(e.hookSpecificOutput)})`);
  let d = r.success ? void 0 : r.error.issues[0],
    _ = d
      ? `${d.path.join(".") || "(root)"}: ${d.message}`
      : "async-marker response where a sync response was expected";
  return (
    n(
      `${t} async hook JSON output failed schema validation (${_})` +
        (o.length > 0 ? `; ignored malformed field(s): ${o.join(", ")}` : "; delivering recognized fields as-is"),
      { level: o.length > 0 ? "error" : "debug" },
    ),
    u
  );
}

function tB(e) {
  if (e === null) return "null";
  if (Array.isArray(e)) return "an array";
  return `a ${typeof e}`;
}

export { $8, A0e, Ain, BK, BU, Bin, Bqt, Bv, C0e, CD, CV, Cqt, DI, DK, DPe, DUe, DUt, E0e, Ein, Eue, Ezn, FU, Fue, G0e, G1, GK, GMt, G_, HB, HI, HUe, Hde, Hin, I0e, II, IV, Iin, J0e, JK, JU, Jjn, Jlt, Jpt, Jw, K9e, KK, KKt, KMt, Kjn, Kue, L8, LK, LR, LUe, LV, LW, Ll, Lxe, M0e, M8, MI, MR, MV, Mde, Mue, Mxe, N2, NA, NI, NU, Nb, Nde, OR, OUe, OW, Oue, Oxe, P0e, PL, PUt, Pin, Q0e, QBe, Qjn, Qlt, Qpt, R0e, Rin, SGn, Sct, Szn, T0e, T2, Tde, Tzn, U0e, U8, Uin, Uue, V0e, V1, V9e, VI, VK, VMt, VUe, Vde, Vjn, W0e, W1, WK, WKt, WMt, Win, Wue, X0e, X9e, XK, XMt, XU, Xjn, Xue, Xw, Y7, YMt, YUe, Yf, Yjn, Ypt, Yue, Z0e, Z9e, ZK, Zjn, Zk, Zlt, _0e, _9, _Be, _zn, aUe, aWn, act, aee, aun, aye, b9n, bBe, bG, bc, bct, ble, bzn, cUe, cWn, cct, cee, cu, cye, d0e, dWn, e3e, eGe, eUe, ect, f0e, fNt, fUe, fVt, fk, fv, g0e, g2t, gde, gv, hv, hzn, iUe, iV, ict, ile, ip, iun, iye, j0e, j1, jin, jue, k0e, kBe, kin, lUe, lWn, lb, lct, lee, lye, m2t, mUe, mV, nD, nHe, nUe, nct, nk, npe, oUe, oYt, oct, ole, ope, oye, p0e, p2t, pWn, q0e, q1, qI, qK, qMt, que, qv, r0e, rct, rh, sBe, sUe, sWn, sYt, sct, sk, sun, sye, tD, tGe, tUe, tbe, tct, tde, tk, tpe, uWn, uct, uee, v3e, vsn, w0e, w9n, wBe, wUe, wde, wzn, x0e, x2, xB, xd, xin, xm, yG, yct, yzn, z0e, z1, z9e, zBe, zK, zMt, zU, zue };
