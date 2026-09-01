// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { JN, Kr, K } from "/$bunfs/root/chunk-f9h0bg01.js";
import { R, l, E, n1 } from "/$bunfs/root/chunk-ypdw393e.js";
import { Qo, ao, le, Ffe, _b, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Nl } from "/$bunfs/root/chunk-c6k0ecxv.js";
import { g } from "/$bunfs/root/chunk-ca80fke8.js";
import { dr, Kh } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Gm, mJ } from "/$bunfs/root/chunk-q14dgq5g.js";
import { wd, Vv, yr } from "/$bunfs/root/chunk-2n1hsggr.js";
import { JV } from "/$bunfs/root/chunk-4p81p1a6.js";
import { War } from "/$bunfs/root/chunk-052zvbpg.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { Bn, _r, Ms } from "/$bunfs/root/chunk-56sxk8k2.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
function ct(t) {
  if (!JN(t)) return false;
  if (Kr(t)) return true;
  return /^[A-Za-z0-9][A-Za-z0-9_]*$/.test(t) && JV(t) !== void 0;
}
function Ut(t, e = {}) {
  return e.acceptCustomIds ? JN(t) : ct(t);
}
function H_t(t, e, i = {}) {
  if (e) return { adoptedSessionId: null, effectiveFork: true };
  if (t === void 0) return { adoptedSessionId: null, effectiveFork: false };
  if (Ut(t, i)) return { adoptedSessionId: t, effectiveFork: false };
  return (
    n(
      `resume: transcript session id (${typeof t}) rejected by the adoption gate; continuing as a fork under the fresh session id`,
    ),
    g("session_resume", "unadoptable_session_id"),
    { adoptedSessionId: null, effectiveFork: true }
  );
}
import { constants as _, fstat as jt } from "fs";
import {
  lstat as G,
  mkdir as Dt,
  open as gt,
  readdir as Vt,
  readlink as lt,
  realpath as wt,
  symlink as Et,
  unlink as ht,
} from "fs/promises";
import { basename as pt, dirname as x, isAbsolute as xt, join as H, resolve as ot, sep as V } from "path";
import { constants as v } from "fs";
import { lstat as J, mkdir as Mt, open as rt, readlink as Tt } from "fs/promises";
import { basename as ut, dirname as L, isAbsolute as Yt, join as b } from "path";
function nt(t, e) {
  return (e === "windows" && Bn(t) && !Ms(t)) || _r(t);
}
async function Ot(t, e, i, o, r) {
  r?.throwIfAborted();
  let s = o ? a3(t, e, i) : rt(t, e);
  if (!r) return s;
  let c,
    a = new Promise((u, f) => {
      (c = () => f(r.reason ?? Error("aborted"))), r.addEventListener("abort", c, { once: true });
    });
  try {
    return await Promise.race([s, a]);
  } catch (u) {
    throw (
      (s.then(
        (f) => f.close(),
        () => {},
      ),
      u)
    );
  } finally {
    if (c) r.removeEventListener("abort", c);
  }
}
var _t = 536870912,
  zt = /^(?:\/dev\/(?:stdin|stdout|stderr|fd\/\d+)|\/proc\/self\/fd\/\d+)$/;
function Xt(t) {
  return zt.test(t) || (/^\/proc\/\d+\/fd\/\d+$/.test(t) && t.startsWith(`/proc/${process.pid}/fd/`));
}
var Kt = 2097152;
async function a3(t, e, i) {
  if (i !== "macos") return rt(t, e);
  try {
    return await rt(t, (e & ~v.O_NOFOLLOW) | _t);
  } catch (o) {
    if (E(o) === "EINVAL") return rt(t, e);
    throw o;
  }
}
async function Lt(t, e, i) {
  if (i !== "macos") return false;
  for (let r = t; ; r = L(r)) {
    try {
      if (!(await J(r)).isDirectory()) return false;
    } catch {
      return false;
    }
    if (L(r) === r) break;
  }
  let o;
  try {
    o = await rt(t, v.O_RDONLY | v.O_DIRECTORY | _t);
  } catch {
    return false;
  }
  try {
    let [r, s] = await Promise.all([o.stat({ bigint: true }), e.stat({ bigint: true })]);
    return r.ino === s.ino && r.dev === s.dev;
  } catch {
    return false;
  } finally {
    await o.close();
  }
}
function Y(t) {
  return new mJ(
    `Refusing to read ${t}: its symlink resolution changed after permission was checked. If a link in the working directory is being rewritten concurrently, stop that and retry.`,
  );
}
async function Wjt(t, e, i) {
  let o = new Set(e);
  for (let m of ao(t)) if (!o.has(m)) throw Y(t);
  let r = D(),
    s = r === "windows" ? v.O_RDONLY : v.O_RDONLY | v.O_NOCTTY,
    c = r === "windows" ? s : s | v.O_NOFOLLOW,
    a = async (m, y) => {
      if ((await J(m)).isSymbolicLink()) throw Y(t);
      let T = await Ot(m, c, r, !y, i);
      if (r === "linux" || r === "wsl") {
        let M = null;
        try {
          M = await Tt(`/proc/self/fd/${T.fd}`);
        } catch {}
        if (M !== null && M !== m && !o.has(M)) throw (await T.close(), Y(t));
        if (M !== null)
          return { ioPath: `/proc/${process.pid}/fd/${T.fd}`, canonicalPath: m, handle: T, close: () => T.close() };
      }
      return { ioPath: m, canonicalPath: m, handle: T, close: () => T.close() };
    };
  if (nt(t, r)) return a(t, false);
  let u = Qo(le(), t),
    f = Xt(t) && !Yt(u.resolvedPath) && /^(?:pipe|socket|anon_inode):\[/.test(u.resolvedPath) && o.has(u.resolvedPath);
  if (!u.isCanonical && !f) {
    if (u.isSymlink || u.resolvedPath !== t) {
      if (o.has(u.resolvedPath) && nt(u.resolvedPath, r)) {
        let y = r === "macos" ? await a(u.resolvedPath, false) : await a(t, true),
          T = Qo(le(), t);
        if (T.isCanonical || T.resolvedPath !== u.resolvedPath) throw (await y.close(), Y(t));
        return y;
      }
      throw Y(t);
    }
    throw (await (await Ot(t, s, r, false, i)).close(), Y(t));
  }
  if (!o.has(u.resolvedPath)) throw Y(t);
  let d = f ? t : u.resolvedPath,
    k;
  try {
    k = await Ot(d, f ? c & ~v.O_NOFOLLOW : c, r, !f, i);
  } catch (m) {
    if (E(m) === "ELOOP") throw Y(t);
    throw m;
  }
  try {
    let m = d;
    if (r === "linux" || r === "wsl") {
      let T = null;
      try {
        T = await Tt(`/proc/self/fd/${k.fd}`);
      } catch {}
      if (T !== null) {
        if (T !== (f ? u.resolvedPath : d)) throw Y(t);
        m = `/proc/${process.pid}/fd/${k.fd}`;
      }
    }
    if (m === d) {
      for (let T of ao(t)) if (!o.has(T)) throw Y(t);
    }
    let y = k;
    return { canonicalPath: d, ioPath: m, handle: y, close: () => y.close() };
  } catch (m) {
    throw (await k.close().catch(() => {}), m);
  }
}
function A(t) {
  return new Gm(
    `Refusing to write ${t}: its parent-directory symlink resolution changed after permission was checked.`,
  );
}
async function it(t, e, i, o, r = false) {
  let s = () => new Gm(`Refusing to write ${e}: it is a symbolic link. Write to the link's target path instead.`);
  if (i === "windows")
    try {
      if ((await J(t)).isSymbolicLink()) throw s();
    } catch (u) {
      if (E(u) === "ENOENT") return null;
      throw u;
    }
  let c = i === "windows" ? v.O_RDONLY : v.O_RDONLY | v.O_NOFOLLOW | v.O_NONBLOCK | (v.O_NOCTTY ?? 0),
    a;
  try {
    a = r ? await rt(t, c) : await a3(t, c, i);
  } catch (u) {
    let f = E(u);
    if (f === "ENOENT") return null;
    if (f === "ELOOP" || f === "EMLINK" || f === "EFTYPE") throw s();
    throw u;
  }
  try {
    return await War(a, e, o);
  } finally {
    await a.close();
  }
}
async function Fk(t, e, i) {
  let o = new Set(e),
    r = ut(t),
    s = D(),
    c = () => (i?.leaf === "replace" ? ao(L(t)).map((O) => b(O, r)) : ao(t)).every((O) => o.has(O)),
    a = () => {
      if (!c()) throw A(t);
    },
    u = c();
  if (!u && !(s === "macos" && !nt(t, s))) throw A(t);
  let f = async (w, O, p) => {
      if (!(await Lt(w, p, s)))
        return (
          n(`pinWriteTarget: ${w} resolves to ${O}: not the same directory by a link-free route; refused`, {
            level: "warn",
          }),
          false
        );
      return (
        n(`pinWriteTarget: ${w} is rendered ${O} by realpath; same directory (device and inode), treated as an alias`),
        true
      );
    },
    d = (w) => o.has(b(w, r)),
    k = (w) => {
      let O = Qo(le(), w);
      if (!O.isCanonical) throw A(t);
      return O.resolvedPath;
    },
    m = (w) => {
      let O = Qo(le(), w);
      return O.isCanonical ? O.resolvedPath : w;
    };
  if (nt(t, s) && s !== "linux" && s !== "wsl") {
    let w = async (p) => {
      if (s !== "macos") return;
      for (let S = p; ; S = L(S))
        try {
          await (await a3(S, v.O_RDONLY | v.O_DIRECTORY, s)).close();
          return;
        } catch (C) {
          let U = E(C);
          if (U === "ELOOP") throw A(t);
          if (U !== "ENOENT" || L(S) === S) throw C;
        }
    };
    if ((await w(L(t)), i?.createParents)) await le().mkdir(L(t)), await w(L(t));
    let O = async () => {
      if ((a(), s !== "macos")) return;
      try {
        await (await a3(L(t), v.O_RDONLY | v.O_DIRECTORY, s)).close();
      } catch (p) {
        throw E(p) === "ELOOP" ? A(t) : p;
      }
    };
    return {
      ioPath: t,
      canonicalPath: t,
      readExisting: async (p) => {
        await O();
        let S = await it(t, t, s, p, false);
        return await O(), S;
      },
      recheckBeforeWrite: O,
      close: async () => {},
    };
  }
  let y = async () => {
    if (i?.createParents) await le().mkdir(L(t)), a();
    let w = Qo(le(), L(t));
    if (!w.isCanonical && !(w.isSymlink && d(w.resolvedPath) && nt(b(w.resolvedPath, r), s))) {
      if (!w.isSymlink) await J(L(t));
      throw A(t);
    }
    let O = !w.isCanonical,
      p = w.resolvedPath;
    if (!d(p)) throw A(t);
    return {
      ioPath: t,
      canonicalPath: b(p, r),
      readExisting: async (S) => {
        a();
        let C = await it(t, t, s, S, O);
        if ((a(), O && Qo(le(), L(t)).resolvedPath !== p)) throw A(t);
        return C;
      },
      recheckBeforeWrite: a,
      close: async () => {},
    };
  };
  if (s === "windows") return y();
  let M = s === "linux" || s === "wsl" ? Kt | v.O_DIRECTORY : v.O_RDONLY | v.O_DIRECTORY,
    W = L(t),
    Z = [],
    F,
    tt = "";
  for (;;)
    try {
      (tt = s === "macos" ? m(W) : W), (F = await a3(tt, M, s));
      break;
    } catch (w) {
      let O = E(w),
        p = L(W),
        S = O === "ELOOP" && s === "macos" && tt === W && !Qo(le(), W).isCanonical;
      if (O === "ELOOP" && !S) {
        let C = Qo(le(), L(t));
        if (u && !C.isCanonical && C.isSymlink && d(C.resolvedPath) && nt(b(C.resolvedPath, r), s)) return y();
        throw A(t);
      }
      if (S && !i?.createParents) {
        let C = [ut(W)];
        for (let U = p; ; U = L(U)) {
          let N = Qo(le(), U);
          if (N.isCanonical) {
            await J(b(N.resolvedPath, C[0]));
            break;
          }
          if (L(U) === U) break;
          C.unshift(ut(U));
        }
        throw A(t);
      }
      if ((O === "ENOENT" || S) && i?.createParents && p !== W) {
        Z.unshift(ut(W)), (W = p);
        continue;
      }
      throw w;
    }
  try {
    let w = false,
      O = async (N, B) => {
        if (s === "linux" || s === "wsl")
          try {
            let z = await Tt(`/proc/self/fd/${N.fd}`);
            return (w = true), z;
          } catch {}
        return k(B);
      },
      p = await O(F, W);
    if (!w && p !== W && !d(b(p, ...Z)) && d(b(W, ...Z)) && (await f(W, p, F))) p = W;
    let S = b(p, ...Z);
    if (!d(S)) {
      if (
        Z.length === 0 &&
        (await J(b(w ? `/proc/self/fd/${F.fd}` : p, r)).then(
          (B) => B.isSymbolicLink(),
          () => false,
        ))
      )
        throw new Gm(`Refusing to write ${t}: it is a symbolic link. Write to the link's target path instead.`);
      throw A(t);
    }
    for (let N of Z) {
      let B = w ? `/proc/self/fd/${F.fd}` : p,
        z = null;
      try {
        await Mt(b(B, N));
      } catch (j) {
        if (((z = j), E(j) !== "EEXIST")) eV(j, { ioPath: b(B, N), canonicalPath: b(p, N) }, b(p, N));
      }
      let X;
      try {
        X = await a3(b(B, N), M | v.O_NOFOLLOW, s);
      } catch (j) {
        if (E(j) === "ELOOP" || E(j) === "ENOTDIR") throw A(t);
        eV(E(j) === "ENOENT" && z !== null ? z : j, { ioPath: b(B, N), canonicalPath: b(p, N) }, b(p, N));
      }
      await F.close(), (F = X);
      let et = b(p, N);
      if (((p = await O(F, et)), p !== et)) {
        if (w || !(await f(et, p, F))) throw A(t);
        p = et;
      }
    }
    if (!w) {
      let N = F,
        B = async () => {
          if (c()) return;
          if (!(await Lt(S, N, s))) throw A(t);
          if (
            i?.leaf !== "replace" &&
            (await J(b(S, r)).then(
              (X) => X.isSymbolicLink(),
              (X) => E(X) !== "ENOENT",
            ))
          )
            throw A(t);
        };
      await B();
      let z = b(S, r);
      return {
        ioPath: z,
        canonicalPath: z,
        readExisting: async (X) => {
          await B();
          let et = await it(z, t, s, X);
          return await B(), et;
        },
        recheckBeforeWrite: B,
        close: () => N.close(),
      };
    }
    let C = F,
      U = `/proc/self/fd/${C.fd}/${r}`;
    return {
      ioPath: U,
      canonicalPath: b(S, r),
      readExisting: (N) => it(U, t, s, N),
      recheckBeforeWrite: () => {},
      close: () => C.close(),
    };
  } catch (w) {
    throw (await F.close().catch(() => {}), w);
  }
}
function eV(t, e, i) {
  if (t instanceof Error) {
    let o = t.message;
    for (let r of [e.ioPath, e.canonicalPath]) if (r !== i) o = o.split(r).join(i);
    if (o !== t.message) t.message = o;
  }
  throw t;
}
var st = _.O_NOFOLLOW ?? 0,
  Wt = 8388608,
  nLe = 5368709120,
  qjt = "5GB",
  NTe = 67108864;
function q5e() {
  return wd();
}
function rLe() {
  let t = Kh()?.adoptShellOutputRoot;
  if (t !== void 0) return H(t, K(), "tasks");
  let e = dr();
  if (e.outputDir === void 0) e.outputDir = H(Vv(), K(), "tasks");
  return e.outputDir;
}
function ohn(t) {
  return H(Vv(), t, "tasks");
}
function ihn() {
  return Kh()?.adoptShellOutputRoot !== void 0 ? rLe() : (dr().outputDir ?? H(Vv(), K(), "tasks"));
}
function Gt() {
  let t = dr();
  if (t.outputDir === void 0) {
    if (Kh() !== null) return H(Vv(), K(), "tasks");
    t.outputDir = H(Vv(), K(), "tasks");
  }
  return t.outputDir;
}
function G5e(t) {
  let e = dr().outputPathBindings.get(t);
  if (e !== void 0) return e;
  let i = H(rLe(), `${t}.output`);
  return dr().outputPathBindings.set(t, i), i;
}
function Sl(t) {
  let e = dr().outputPathBindings.get(t);
  if (e !== void 0) return e;
  return H(Gt(), `${t}.output`);
}
function mt(t) {
  let e = dr().pendingOutputOps;
  return e.add(t), t.finally(() => e.delete(t)).catch(() => {}), t;
}
var Zt = 16777216,
  ft = `
[output omitted: it could not be written to disk]
`;
class x_t {
  #u;
  #n = null;
  #t = [];
  #f = 0;
  #o = false;
  #e = 0;
  #s = 0;
  #i = false;
  #a = new Set();
  #l = false;
  #r = null;
  #c = null;
  constructor(t, e) {
    this.#u = e ?? G5e(t);
  }
  append(t) {
    if (this.#o) return;
    if (((this.#f += t.length), this.#f > nLe)) this.#o = true;
    let e = this.#o
      ? `
[output truncated: exceeded ${qjt} disk cap]
`
      : t;
    if ((this.#t.push(e), (this.#e += e.length), !this.#r))
      (this.#r = new Promise((i) => {
        this.#c = i;
      })),
        mt(this.#g());
  }
  flush() {
    return this.#r ?? Promise.resolve();
  }
  get failing() {
    return this.#i;
  }
  get lostOutput() {
    return this.#l;
  }
  get unwrittenChars() {
    return this.#e;
  }
  cancel() {
    (this.#s += 1), (this.#t.length = 0), (this.#e = 0);
  }
  async #d() {
    while (true) {
      try {
        if (!this.#n) this.#n = await iLe(this.#u);
        while (true) {
          let t = this.#s;
          try {
            await this.#h();
          } catch (e) {
            if (this.#s === t) (this.#l = true), this.#t.unshift(ft), (this.#e += ft.length);
            throw e;
          }
          if (this.#t.length === 0) break;
        }
      } finally {
        if (this.#n) {
          let t = this.#n;
          (this.#n = null), await t.close();
        }
      }
      if (this.#t.length) continue;
      break;
    }
  }
  #h() {
    return this.#n.appendFile(this.#p());
  }
  #p() {
    let t = this.#t.splice(0, this.#t.length);
    this.#e = 0;
    let e = 0;
    for (let r of t) e += Buffer.byteLength(r, "utf8");
    let i = Buffer.allocUnsafe(e),
      o = 0;
    for (let r of t) o += i.write(r, o, "utf8");
    return i;
  }
  async #g() {
    try {
      await this.#d(), this.#w();
    } catch (t) {
      if (!this.#i) (this.#i = true), n(`Task output drain failed (will retry once): ${t}`, { level: "error" });
      if (this.#t.length > 0)
        try {
          await this.#d(), this.#w();
        } catch (e) {
          this.#m(e);
        }
    } finally {
      let t = this.#c;
      (this.#r = null), (this.#c = null), t();
    }
  }
  #w() {
    (this.#i = false), this.#a.clear();
  }
  #m(t) {
    let e = E(t),
      i = e !== void 0 && n1.has(e) ? "exhaustion" : "unexpected",
      o = `${i}:${e ?? "no errno"}`;
    if (!this.#a.has(o))
      switch ((this.#a.add(o), i)) {
        case "exhaustion":
          n(`Task output drain retry failed (${e}): ${t}`, { level: "error" });
          break;
        case "unexpected":
          h(t);
          break;
      }
    if (this.#e > Zt)
      n(`Task output still cannot be written (${e ?? "no errno"}); dropped ${this.#e} chars of unwritten output`, {
        level: "error",
      }),
        (this.#l = true),
        (this.#t.length = 0),
        this.#t.push(ft),
        (this.#e = ft.length);
  }
}
function Jt(t) {
  let e = dr().diskOutputs.get(t);
  if (!e) (e = new x_t(t)), dr().diskOutputs.set(t, e);
  return e;
}
function oLe(t, e) {
  Jt(t).append(e);
}
async function pvr(t) {
  let e = dr().diskOutputs.get(t);
  if (e) await e.flush();
}
function bd(t) {
  return mt(
    (async () => {
      let e = dr(),
        i = e.diskOutputs.get(t);
      if (i) {
        if ((await i.flush(), i.failing && i.unwrittenChars > 0))
          n(`Task output writer evicted while failing; discarded ${i.unwrittenChars} chars of unwritten output`, {
            level: "error",
          });
        e.diskOutputs.delete(t);
      }
      z5e(t);
    })(),
  );
}
function z5e(t) {
  let e = dr().outputPathBindings.get(t);
  if (e !== void 0 && Kh() === null && e === H(rLe(), `${t}.output`)) dr().outputPathBindings.delete(t);
}
async function shn(t, e, i = Wt) {
  try {
    let o = await XX(Sl(t));
    if (!o) return { content: "", newOffset: e };
    let r;
    try {
      r = await Ffe(o, e, i);
    } finally {
      await o.close();
    }
    if (!r) return { content: "", newOffset: e };
    return { content: r.content, newOffset: e + r.bytesRead };
  } catch (o) {
    let r = E(o);
    if (r === "ENOENT") return { content: "", newOffset: e };
    if (r && n1.has(r)) n(`getTaskOutputDelta failed (${r}): ${o}`, { level: "error" });
    else h(o);
    return { content: "", newOffset: e };
  }
}
async function I_t(t, e = Wt) {
  try {
    let i = await XX(Sl(t));
    if (!i) return "";
    let o;
    try {
      o = await _b(i, e);
    } finally {
      await i.close();
    }
    let { content: r, bytesTotal: s, bytesRead: c } = o;
    if (s > c)
      return `[${Math.round((s - c) / 1024)}KB of earlier output omitted]
${r}`;
    return r;
  } catch (i) {
    let o = E(i);
    if (o === "ENOENT") return "";
    if (o && n1.has(o)) n(`getTaskOutput failed (${o}): ${i}`, { level: "error" });
    else h(i);
    return "";
  }
}
async function P_t(t) {
  try {
    let e = await XX(Sl(t));
    if (!e) return 0;
    try {
      return (await e.stat()).size;
    } finally {
      await e.close();
    }
  } catch (e) {
    if (O_t(e)) throw e;
    let i = E(e);
    if (i === "ENOENT") return 0;
    if (i === "EACCES" || i === "EPERM") {
      let o = await G(Sl(t)).catch(() => null);
      if (o !== null && o.isFile() && (o.mode & 256) === 0) return o.size;
      P(Sl(t), `output no longer measurable (${i})`);
    }
    if (i && n1.has(i)) n(`getTaskOutputSize failed (${i}): ${e}`, { level: "error" });
    else h(e);
    return 0;
  }
}
async function fvr(t) {
  let e = dr().diskOutputs.get(t);
  if (e) e.cancel(), dr().diskOutputs.delete(t);
  let i = Sl(t);
  dr().outputPathBindings.delete(t);
  try {
    await Gjt(i);
  } catch (o) {
    let r = E(o);
    if (r === "ENOENT") return;
    if (r && n1.has(r)) n(`cleanupTaskOutput failed (${r}): ${o}`, { level: "error" });
    else h(o);
  }
}
async function mvr(t, e) {
  let i = dr(),
    o = te([...(i.outputDir !== void 0 ? [i.outputDir] : []), ...[...i.outputPathBindings.values()].map((s) => x(s))]);
  if (o.length === 0) return;
  let r = t + V;
  for (let s of o) {
    let c;
    try {
      c = await Vt(s);
    } catch (a) {
      let u = E(a);
      if (u !== "ENOENT")
        if (u && n1.has(u)) n(`repointTaskOutputSymlinks readdir failed (${u}): ${a}`, { level: "error" });
        else h(a);
      continue;
    }
    await Qt(s, c, r, t, e);
  }
}
async function Qt(t, e, i, o, r) {
  let s = dr().linkedOutputs;
  for (let c of e) {
    if (!c.endsWith(".output")) continue;
    let a = H(t, c),
      u = s.get(a),
      f;
    try {
      f = D() === "windows" ? void 0 : await q(a, { replaceLeaf: true });
      let d = f?.ioPath ?? a;
      if (u === void 0 && t === dr().outputDir)
        u = await Ct(a, d).catch(() => {
          return;
        });
      if (u === void 0 || !u.startsWith(i)) continue;
      let k = r + u.slice(o.length);
      if ((await lt(d)) !== u) P(a, "output symlink was re-pointed");
      await f?.recheckBeforeWrite(), await ht(d), await f?.recheckBeforeWrite(), await Et(k, d), await St(a, k);
    } catch (d) {
      if (E(d) !== "ENOENT") h(d);
    } finally {
      await f?.close();
    }
  }
}
async function at(t, e, i = 0) {
  if (D() === "windows") return await Dt(x(t), { recursive: true }), gt(t, e.windowsFlags);
  let o = await q(t, { replaceLeaf: true });
  try {
    let r = await Ft(o.ioPath);
    if (r?.isSymbolicLink()) {
      let a = await Pt(t, o.ioPath);
      if (e.exclusive || i > 0 || !Q(a)) P(t, "output link is not appendable");
      return await at(a, e, i + 1);
    }
    if (r !== null && (!r.isFile() || (r.nlink !== 1 && i === 0))) P(t, "existing output is not a plain file");
    await o.recheckBeforeWrite();
    let s = e.exclusive || r === null,
      c;
    try {
      c = await a3(o.ioPath, _.O_WRONLY | _.O_APPEND | (s ? _.O_CREAT | _.O_EXCL : 0) | st | (_.O_NONBLOCK ?? 0), D());
    } catch (a) {
      if (!e.exclusive && E(a) === "EEXIST" && !e.retried) return await o.close(), at(t, { ...e, retried: true }, i);
      throw a;
    }
    if (i > 0 && r === null) {
      let a = await c.stat();
      yt.set(t, { dev: a.dev, ino: a.ino });
    }
    try {
      await Nt(c, r, t, { registeredIdentity: i > 0 ? At(t) : void 0 });
    } catch (a) {
      throw (await c.close().catch(() => {}), a);
    }
    return c;
  } catch (r) {
    throw kt(r, t);
  } finally {
    await o.close();
  }
}
async function XX(t, e = 0) {
  if (D() === "windows") {
    let o = await Ft(t);
    if (o === null) return null;
    if (o.isSymbolicLink()) {
      let s = await Pt(t, t);
      return $t(s, e, t);
    }
    if (!o.isFile()) P(t, "not a regular file");
    let r = await gt(t, "r");
    return await Nt(r, o, t, { anyLinkCount: true }), r;
  }
  let i;
  try {
    i = await q(t, { replaceLeaf: true, create: false });
  } catch (o) {
    if (E(o) === "ENOENT") return null;
    throw o;
  }
  try {
    let o = await Ft(i.ioPath);
    if (o === null) return null;
    if (o.isSymbolicLink()) {
      let s = await Pt(t, i.ioPath);
      return await $t(s, e, t);
    }
    if (!o.isFile() || (o.nlink !== 1 && e === 0)) P(t, "not a regular nlink-1 file");
    await i.recheckBeforeWrite();
    let r = await a3(i.ioPath, _.O_RDONLY | st | (_.O_NONBLOCK ?? 0), D());
    try {
      await Nt(r, o, t, { registeredIdentity: e > 0 ? At(t) : void 0 });
    } catch (s) {
      throw (await r.close().catch(() => {}), s);
    }
    return r;
  } catch (o) {
    if (E(o) === "ENOENT") return null;
    throw kt(o, t);
  } finally {
    await i.close();
  }
}
async function Ct(t, e) {
  let i = await lt(e),
    o = xt(i) && ot(i).startsWith(ot(Nl()) + V);
  if (!xt(i) || (!Q(i) && !o)) return P(t, "output is an unregistered symlink of a shape this session does not create");
  let r = await G(e);
  if (!r.isSymbolicLink() || r.ctimeMs >= dr().linksInheritedBeforeFor(x(t)))
    return P(t, "output is an unregistered symlink made during this session");
  return await St(t, i), i;
}
async function Pt(t, e) {
  let i = dr().linkedOutputs.get(t);
  if (i === void 0) {
    if (!V5e(t)) return P(t, "output is an unregistered symlink outside any tasks directory");
    i = await Ct(t, e);
  }
  if ((await lt(e)) !== i) return P(t, "output symlink was re-pointed");
  return i;
}
async function $t(t, e, i) {
  if (Q(t)) {
    if (e > 0) return P(i, "output links chain");
    return XX(t, e + 1);
  }
  let o, r;
  try {
    let s = await wt(t);
    if (Q(s)) return P(i, "output link leads back into the tasks tree");
    (r = await G(s)), (o = await a3(s, _.O_RDONLY | st | (_.O_NONBLOCK ?? 0), D()));
  } catch (s) {
    if (O_t(s)) throw s;
    if (E(s) === "ENOENT") return null;
    throw kt(s, i);
  }
  try {
    let s = await o.stat();
    if (!s.isFile() || s.ino !== r.ino || s.dev !== r.dev) P(i, "link target is not a regular file");
  } catch (s) {
    throw (await o.close().catch(() => {}), s);
  }
  return o;
}
function Q(t) {
  let e = wd();
  return t === e || t.startsWith(e.endsWith(V) ? e : e + V);
}
async function Ft(t) {
  try {
    return await G(t);
  } catch (e) {
    if (E(e) === "ENOENT") return null;
    throw e;
  }
}
var yt = new Map();
function At(t) {
  let e = yt.get(t);
  if (e === void 0) return P(t, "link target identity was never recorded");
  return e;
}
async function St(t, e) {
  if (Q(e)) await It(e);
  dr().linkedOutputs.set(t, e);
}
async function It(t) {
  let e = await q(t, { replaceLeaf: true, create: false });
  try {
    let i = await a3(e.ioPath, _.O_RDONLY | st | (_.O_NONBLOCK ?? 0), D()).catch((o) => {
      throw kt(o, t);
    });
    try {
      let o = await i.stat();
      if (!o.isFile() || o.nlink !== 1) P(t, "link target is not a regular single-link file");
      yt.set(t, { dev: o.dev, ino: o.ino });
    } finally {
      await i.close();
    }
  } finally {
    await e.close();
  }
}
async function Nt(t, e, i, o) {
  try {
    let r = await t.stat(),
      s = o?.registeredIdentity;
    if (
      !r.isFile() ||
      (s !== void 0 ? r.ino !== s.ino || r.dev !== s.dev : !o?.anyLinkCount && r.nlink !== 1) ||
      (e !== null && (r.ino !== e.ino || r.dev !== e.dev))
    )
      P(i, "output file identity changed");
  } catch (r) {
    throw (await t.close().catch(() => {}), r);
  }
}
function kt(t, e) {
  let i = E(t);
  if (i === "ELOOP" || i === "EISDIR" || i === "ENOTDIR" || i === "ENXIO" || i === "EOPNOTSUPP" || i === "ENOTSUP")
    try {
      P(e, `open refused a swapped leaf (${i})`);
    } catch (o) {
      return o;
    }
  return t;
}
function qt(t) {
  let e = Rt(),
    i = ot(t);
  if (i.startsWith(e + V)) return i;
  let o = le(),
    r = x(x(x(x(i)))),
    { resolvedPath: s } = Qo(o, r);
  return yr(s) === yr(e) ? H(e, i.slice(r.length + 1)) : i;
}
function Rt() {
  return x(x(x(ot(rLe()))));
}
function V5e(t) {
  let e = Rt(),
    i = le(),
    o = new Set([e, Qo(i, e).resolvedPath].map((r) => yr(r)));
  return ao(t).some((r) => {
    let s = x(ot(r));
    return yr(pt(s)) === "tasks" && Bt(pt(x(s))) && o.has(yr(x(x(x(s)))));
  });
}
function vt() {
  let t = ["????????-????-????-????-????????????", "session_*", "cse_*"],
    e = K();
  if (!ct(e) && /^[A-Za-z0-9._-]+$/.test(e)) t.push(e);
  return t;
}
function Bt(t) {
  return ct(t) || t === K();
}
function ahn(t) {
  let e = Rt(),
    i = le(),
    o = te([e, Qo(i, e).resolvedPath]),
    r = new Set(),
    s = (a, u) => {
      let f = a.endsWith(V) ? a : a + V;
      return yr(u).startsWith(yr(f)) ? u.slice(f.length) : null;
    },
    c = (a) => a.replaceAll("\\", "/");
  for (let a of ao(t)) {
    let u = ot(a);
    for (let f of o) {
      let d = pt(f);
      if (yr(u) === yr(f)) {
        for (let y of vt()) r.add(`!/*/${y}/tasks/**`), r.add(`!**/${d}/*/${y}/tasks/**`);
        continue;
      }
      let k = s(u, f);
      if (k !== null) {
        for (let y of vt()) r.add(`!/${c(k)}/*/${y}/tasks/**`), r.add(`!**/${d}/*/${y}/tasks/**`);
        continue;
      }
      let m = s(f, u);
      if (m !== null) {
        let y = m.split(V);
        if (y.length === 1) for (let T of vt()) r.add(`!/${T}/tasks/**`), r.add(`!**/${d}/${c(m)}/${T}/tasks/**`);
        else if (!Bt(y[1] ?? ""));
        else if (y.length === 2) r.add("!/tasks/**"), r.add(`!**/${d}/${c(m)}/tasks/**`);
        else if (yr(y[2] ?? "") === "tasks") r.add("!**");
      }
    }
  }
  return [...r];
}
async function D_t(t) {
  t = qt(t);
  let e = await XX(t);
  if (e === null)
    throw (
      (await G(t),
      new R(
        `task output ${t} is no longer available (the file it pointed to was removed)`,
        "task output link target removed",
      ))
    );
  let i = D();
  return {
    ioPath:
      (i === "linux" || i === "wsl") &&
      (await lt(`/proc/self/fd/${e.fd}`).then(
        () => true,
        () => false,
      ))
        ? `/proc/${process.pid}/fd/${e.fd}`
        : i === "macos"
          ? `/dev/fd/${e.fd}`
          : t,
    canonicalPath: t,
    handle: e,
    close: () => e.close(),
  };
}
async function Mne(t, e) {
  let i = await XX(t);
  if (i === null) return { content: "", bytesRead: 0, bytesTotal: 0 };
  try {
    return await _b(i, e);
  } finally {
    await i.close();
  }
}
async function Gjt(t) {
  let e = dr().linkedOutputs.get(t);
  if ((dr().linkedOutputs.delete(t), e !== void 0)) yt.delete(e);
  if (D() === "windows") {
    await ht(t);
    return;
  }
  let i;
  try {
    i = await q(t, { replaceLeaf: true, create: false });
  } catch (o) {
    if (E(o) === "ENOENT") return;
    throw o;
  }
  try {
    await i.recheckBeforeWrite(), await ht(i.ioPath);
  } finally {
    await i.close();
  }
}
async function lhn(t, e) {
  let i = await at(t, { exclusive: false, windowsFlags: "w" });
  try {
    await i.truncate(0), await i.writeFile(e);
  } finally {
    await i.close();
  }
}
async function q(t, e) {
  let i = x(t),
    o = pt(t),
    r = I.get(i);
  if (r !== void 0) {
    let f = await r.catch(() => null);
    if (f !== null) {
      let k = (await Promise.all([f.handleStat(), G(i)]).then(
        ([m, y]) => m.nlink > 0 && y.isDirectory() && y.ino === m.ino && y.dev === m.dev,
        () => false,
      ))
        ? f.viewFor(o)
        : null;
      if (k !== null) return k;
      if (I.get(i) === r) I.delete(i);
      await f.release();
    } else if (I.get(i) === r) I.delete(i);
  }
  let s = I.get(i);
  if (s !== void 0 && s !== r) return q(t, e);
  let c = (async () => {
      let f;
      try {
        f = await Fk(t, [t], { createParents: e?.create ?? true, ...(e?.replaceLeaf && { leaf: "replace" }) });
      } catch (F) {
        if (F instanceof Gm) {
          if (!(await ee())) {
            if (e?.create ?? true) await Dt(x(t), { recursive: true, mode: 448 });
            return {
              ioPath: t,
              canonicalPath: t,
              readExisting: () => Promise.resolve(null),
              recheckBeforeWrite: () => {},
              close: async () => {},
            };
          }
          n(`task output: pin of ${x(t)} refused: ${l(F)}`, { level: "warn" }),
            P(
              t,
              "tasks dir moved or linked",
              `restart Claude Code with CLAUDE_CODE_TMPDIR set to a fresh directory; or, if ${Vv().replace(/[\\/]+$/, "")} is a stray directory or a symbolic link that should not be there, remove that entry itself (not what it points to) and restart`,
            );
        }
        throw F;
      }
      let d = /^\/proc\/self\/fd\/(\d+)\//.exec(f.ioPath);
      if (d === null) return f;
      let k = f.ioPath.slice(0, f.ioPath.length - o.length - 1),
        m = Number(d[1]),
        y = 0,
        T = false,
        M = false,
        W = async () => {
          if (T && y === 0 && !M) (M = true), await f.close();
        };
      return {
        handleStat: () => ne(m),
        release: () => ((T = true), W()),
        viewFor: (F) => {
          if (T) return null;
          y++;
          let tt = false;
          return {
            ioPath: `${k}/${F}`,
            canonicalPath: H(i, F),
            readExisting: (w) => it(`${k}/${F}`, H(i, F), D(), w),
            recheckBeforeWrite: () => {},
            close: async () => {
              if (!tt) (tt = true), y--, await W();
            },
          };
        },
      };
    })(),
    a = c.then((f) => ("viewFor" in f ? f : Promise.reject(Error("not held"))));
  a.catch(() => {}), I.set(i, a);
  let u;
  try {
    u = await c;
  } catch (f) {
    if (I.get(i) === a) I.delete(i);
    throw f;
  }
  if (!("viewFor" in u)) {
    if (I.get(i) === a) I.delete(i);
    return u;
  }
  if (I.size > ie) {
    for (let [f, d] of I)
      if (f !== i) {
        I.delete(f),
          d.then(
            (k) => k.release(),
            () => {},
          );
        break;
      }
  }
  return u.viewFor(o) ?? Promise.reject(Error("unreachable: fresh hold retired"));
}
var bt;
async function ee() {
  let t = wd();
  if (bt?.root === t) return bt.ok;
  let e = await wt(t).then(
    () => true,
    (i) => E(i) !== "EPERM",
  );
  if (e) bt = { root: t, ok: Promise.resolve(true) };
  return e;
}
var I = new Map();
function ne(t) {
  return new Promise((e, i) => jt(t, (o, r) => (o ? i(o) : e(r))));
}
var ie = 8;
function iLe(t, e = "a") {
  return at(t, { exclusive: false, windowsFlags: e });
}
function FTe(t) {
  return mt(
    (async () => {
      let e = G5e(t);
      return await (await at(e, { exclusive: true, windowsFlags: "wx" })).close(), e;
    })(),
  );
}
var Ht = Symbol("taskOutputSwapRefused");
function O_t(t) {
  return t instanceof Error && Ht in t;
}
function P(t, e, i) {
  let o = `task output swap refused (${e}): ${t}` + (i === void 0 ? "" : `. To recover: ${i}.`),
    r = Object.assign(new R(o, "task output swap refused"), { [Ht]: true });
  n(o, { level: "error" });
  let s = `${e}\x00${t}`;
  if (!dt.has(s)) {
    if (dt.size >= re) dt.clear();
    dt.add(s), h(r);
  }
  throw r;
}
var dt = new Set(),
  re = 256;
async function L_t(t, e) {
  let i;
  try {
    i = await G(t);
  } catch (c) {
    let a = E(c);
    if (a === "ELOOP" || a === "ENOTDIR") P(t, `lstat refused a swapped path (${a})`);
    throw c;
  }
  if (!i.isFile() || i.nlink !== 1) P(t, "not a regular nlink-1 file");
  let o = false,
    r = i.size > e,
    s;
  try {
    s = await gt(t, o ? (r ? "r+" : "r") : (r ? _.O_RDWR : _.O_RDONLY) | st | (_.O_NONBLOCK ?? 0));
  } catch (c) {
    let a = E(c);
    if (a === "ELOOP" || a === "EISDIR" || a === "ENOTDIR" || a === "ENXIO" || a === "EOPNOTSUPP" || a === "ENOTSUP")
      P(t, `open refused a swapped path (${a})`);
    throw c;
  }
  try {
    let c = await s.stat();
    if (!c.isFile() || c.dev !== i.dev || c.ino !== i.ino || c.nlink !== 1) P(t, "file changed between lstat and open");
    if (r && c.size > e) await s.truncate(e);
    return { handle: s, size: c.size };
  } catch (c) {
    throw (await s.close(), c);
  }
}
async function chn(t, e) {
  let i;
  try {
    i = await L_t(Sl(t), nLe);
  } catch (s) {
    if (E(s) === "ENOENT") return { content: "", omittedBytes: 0 };
    throw s;
  }
  let { handle: o } = i,
    r = Math.min(i.size, nLe);
  try {
    let s = Math.max(0, r - e),
      c = Buffer.allocUnsafe(r - s),
      a = 0;
    while (a < c.length) {
      let { bytesRead: f } = await o.read(c, a, c.length - a, s + a);
      if (f === 0) break;
      a += f;
    }
    let u = 0;
    while (s > 0 && u < a && (c[u] & 192) === 128) u++;
    return { content: c.toString("utf8", u, a), omittedBytes: s + u };
  } finally {
    await o.close();
  }
}
async function K5e(t, e, i) {
  let { handle: r, size: s } = await L_t(t, i);
  try {
    let c = await gt(e, _.O_WRONLY | _.O_CREAT | _.O_TRUNC | st);
    try {
      let a = Buffer.alloc(1048576),
        u = 0;
      while (u < i) {
        let f = Math.min(a.length, i - u),
          { bytesRead: d } = await r.read(a, 0, f, u);
        if (d === 0) break;
        let k = 0;
        while (k < d) {
          let { bytesWritten: m } = await c.write(a, k, d - k, u + k);
          k += m;
        }
        u += d;
      }
    } finally {
      await c.close();
    }
    return s;
  } finally {
    await r.close();
  }
}
async function oe(t, e, i = t) {
  if (t === e) return true;
  try {
    if (!(await G(i)).isFile()) return false;
    return (await wt(i)) === (await wt(e));
  } catch {
    return false;
  }
}
function tV(t, e, i) {
  return mt(
    (async () => {
      try {
        let o = G5e(t),
          r = await q(o, { replaceLeaf: true });
        try {
          if (await oe(o, e, r.ioPath)) {
            let s = await lt(r.ioPath).catch(() => e);
            return await St(o, Q(s) ? s : e), i?.("noop"), o;
          }
          if (Q(e)) await It(e);
          try {
            await r.recheckBeforeWrite(), await Et(e, r.ioPath);
          } catch (s) {
            if (E(s) !== "EEXIST") throw s;
            await r.recheckBeforeWrite(), await ht(r.ioPath), await r.recheckBeforeWrite(), await Et(e, r.ioPath);
          }
          dr().linkedOutputs.set(o, e);
        } finally {
          await r.close();
        }
        return i?.("symlink"), o;
      } catch (o) {
        let r = E(o);
        if ((r && n1.has(r)) || r === "EROFS") n(`initTaskOutputAsSymlink failed (${r}): ${o}`, { level: "error" });
        else h(o);
        return FTe(t);
      }
    })(),
  );
}
export {
  H_t,
  a3,
  Wjt,
  Fk,
  eV,
  nLe,
  qjt,
  NTe,
  q5e,
  rLe,
  ohn,
  ihn,
  G5e,
  Sl,
  x_t,
  oLe,
  pvr,
  bd,
  z5e,
  shn,
  I_t,
  P_t,
  fvr,
  mvr,
  XX,
  V5e,
  ahn,
  D_t,
  Mne,
  Gjt,
  lhn,
  iLe,
  FTe,
  O_t,
  L_t,
  chn,
  K5e,
  tV,
};
