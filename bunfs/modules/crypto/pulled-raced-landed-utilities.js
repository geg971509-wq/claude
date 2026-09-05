// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { E, X } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { N7e, Jl } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { SH } from "/$bunfs/root/chunk-2n1hsggr.js";
import {
  cmn,
  DF,
  Lm,
  Cue,
  hOe,
  vk,
  vue,
  pmn,
  fmn,
  P7n,
  q9,
  G9,
  DX,
  Bv,
  z9,
  Qwe,
  SOe,
  M2,
  LE,
  OX,
} from "/$bunfs/root/chunk-y8sx7bf9.js";
import { x2n } from "/$bunfs/root/chunk-c95fzke8.js";
import { Gw } from "/$bunfs/root/chunk-802k7j4j.js";
import { frn, kA, s_e, IHe } from "/$bunfs/root/chunk-es5p3spb.js";
import { TW } from "/$bunfs/root/chunk-r8n98t6s.js";
import { Nn } from "/$bunfs/root/chunk-c48t1p6v.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
import { lstat as K, realpath as J } from "fs/promises";
import { basename as le, dirname as Ae, join as C, posix as Te, relative as W, sep as P } from "path";
import { posix as x } from "path";
var Jnn = "Claude's conflicted copy",
  Qnn = 100,
  Ee = 255,
  Se = Ee - 32;
function ie(e, t) {
  if (e === void 0) return t === null ? "unchanged" : "changed";
  if (t === null) return "changed";
  return IHe(e.agreed, t) ? "unchanged" : "changed";
}
function oe({ localChange: e, localSha256: t, localMode: r, incomingSha256: a, incomingMode: i }) {
  if (t === a) return r !== null && Gw(r) === Gw(i) ? "already_equal" : "apply";
  return e === "unchanged" ? "apply" : "conflict";
}
function _e(e) {
  let t = String(e.getFullYear()),
    r = String(e.getMonth() + 1).padStart(2, "0"),
    a = String(e.getDate()).padStart(2, "0");
  return `${t}-${r}-${a}`;
}
function Znn(e, t, r) {
  let a = x.dirname(e),
    i = x.basename(e),
    o = x.extname(i),
    c = Array.from(i.slice(0, i.length - o.length)),
    s = r > 0 ? ` (${r})` : "",
    d = ` (${Jnn} ${_e(t)})${s}${o}`,
    u = (l) => {
      let p = `${c.slice(0, l).join("")}${d}`;
      return a === "." ? p : x.join(a, p);
    },
    f = Array.from({ length: c.length }, (l, p) => c.length - p).find((l) => {
      let p = u(l);
      return Buffer.byteLength(x.basename(p), "utf8") <= Se && DF(p) === null && !(M2() && LE(p));
    });
  return f === void 0 ? null : u(f);
}
async function se({ path: e, now: t, tryCandidate: r, maxAttempts: a = Qnn }) {
  for (let i = 0; i < a; i++) {
    let o = Znn(e, t, i);
    if (o === null) return null;
    if (await r(o)) return o;
  }
  return null;
}
function pWe(e) {
  let t = e.split("/");
  return t.slice(0, -1).map((r, a) => t.slice(0, a + 1).join("/"));
}
function z(e, t) {
  let r = q9(t);
  if (!e.has(r)) e.set(r, t);
}
function T2n(e, t) {
  let r = new Set(t),
    a = new Map(),
    i = new Map(),
    o = new Set(),
    c = (s) => {
      let d = [];
      for (let u = s.lastIndexOf("/"); u >= 0 && !o.has(s.slice(0, u)); u = u === 0 ? -1 : s.lastIndexOf("/", u - 1))
        d.push(s.slice(0, u));
      for (let u of d.reverse()) o.add(u), z(i, u);
    };
  for (let s of r) z(a, s), c(s);
  return e.toSorted().reduce(
    (s, d) => {
      let u = q9(d),
        f = a.get(u),
        l = i.get(u),
        p = pWe(d)
          .filter((m) => !o.has(m))
          .map((m) => {
            let L = q9(m);
            return { held: i.get(L) ?? a.get(L) };
          })
          .find(({ held: m }) => m !== void 0),
        _ = r.has(d) ? null : f !== void 0 && f !== d ? f : (l ?? p?.held ?? null);
      if (_ !== null) return s.colliding.push({ path: d, collidesWith: _ }), s;
      return z(a, d), c(d), s.clear.push(d), s;
    },
    { clear: [], colliding: [] },
  );
}
function ke(e) {
  return { sha256: e.sha256, gitBlobId: e.gitBlobId, mode: e.mode };
}
function de(e, t) {
  return { size: Number(e.size), mtimeMs: Number(e.mtimeMs), mode: Number(e.mode) & 511, observedAtMs: t };
}
async function fe(e, t, r) {
  try {
    let { handle: a } = await fmn(e, t, r);
    try {
      let i = Date.now();
      return de(await a.stat(), i);
    } finally {
      await a.close();
    }
  } catch {
    return null;
  }
}
async function M(e, t, r, a) {
  await H(e, t);
  let { handle: i } = await fmn(e, t, r);
  try {
    await i.chmod(a);
    let o = Date.now();
    return de(await i.stat(), o);
  } finally {
    await i.close();
  }
}
async function pe(e, t, r, a) {
  try {
    return await M(e, t, r, a);
  } catch (i) {
    return n(`dirSync pull: mode not applied (${E(i) ?? "not an errno"})`), null;
  }
}
function j(e, t) {
  return e.backend === "by_name" ? vue : t;
}
async function ue(e, t, r, a) {
  return t.backend === "by_name" ? M(e, t, r, a) : fe(e, t, r);
}
async function me(e) {
  try {
    return await K(e), true;
  } catch (t) {
    return E(t) !== "ENOENT";
  }
}
async function Le(e, t, r, a) {
  let i = await a(e, t, r);
  if (i !== null) return { kind: "present", digest: ke(i) };
  return (await me(C(e, r))) ? { kind: "unreadable" } : { kind: "absent" };
}
async function Ne(e) {
  try {
    return Qwe(await K(e)) !== null ? "refused" : "present";
  } catch {
    return "absent";
  }
}
function F(e, t, r = null) {
  if (e === null) return Gw(t);
  if (r !== null && Gw(e) !== Gw(r)) return e & 511;
  let a = Gw(t) === 493;
  return (e & 438) | (a ? (e & 292) >> 2 : 0);
}
async function Y(e) {
  try {
    return await e(), true;
  } catch (t) {
    let r = E(t);
    if (r === "EEXIST" || r === "WORKING_DEST_SYMLINK") return false;
    throw t;
  }
}
var Ce = /[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g;
function yDt(e) {
  let t = Jl(e);
  return t === ".git" || /^git~\d+$/.test(t);
}
var Oe = ".claude",
  Ie = new Set([".mcp.json", ".claude.json"]);
function vHe(e, t) {
  let r = e.map(Jl);
  return r.includes(Oe) || (t === "file" && Ie.has(r.at(-1) ?? ""));
}
var Pe = new Set(
  [...N7e, ...z9]
    .filter((e) => e.startsWith(".") || e.length > 8)
    .map((e) =>
      e
        .replace(/^\.+/, "")
        .replace(/[^a-z0-9_~!#$%&'()@^{}-]/g, "")
        .slice(0, 6),
    )
    .filter((e) => e.length > 0),
);
function ern(e) {
  let t = ge(e);
  return t !== null && Pe.has(t);
}
function ge(e) {
  return /^(.{1,6})~\d+$/.exec(Jl(e))?.[1] ?? null;
}
function mst(e, t = false) {
  return RHe(e, "/", "file", t);
}
function E2n(e) {
  return RHe(e, "/", "directory");
}
function RHe(e, t, r, a = false) {
  let i = t === "/" ? e : e.split(t).join("/"),
    o = te([i.replace(Ce, ""), G9(i)]);
  return (
    De.test(e) ||
    vk(i) ||
    o.some((c) => {
      let s = c.split("/");
      return (
        vk(c) ||
        vHe(s, r) ||
        (!(
          a &&
          o.length === 1 &&
          c === i &&
          s.slice(0, -1).every((d) => {
            let u = Jl(d);
            return !z9.has(u) || u === d;
          })
        ) &&
          SOe(s.map(Jl).join("/"))) ||
        s.some(yDt) ||
        (r === "file" && Jl(s.at(-1) ?? "") === "head") ||
        (r === "file" ? s.slice(0, -1) : s).some((d) => ge(d) !== null) ||
        (r === "file" && s.slice(-1).some(ern)) ||
        (D() === "wsl" && OX(c))
      );
    })
  );
}
var De = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/;
async function trn(e, t, r, a = false) {
  return !(await Be(e, t, r, a)) && !Sae(r);
}
async function Be(e, t, r, a = false) {
  return (await gst(e, t, r, a)) !== null;
}
async function gst(e, t, r, a = false) {
  let i = C(e, r);
  try {
    if (Cue(e, i).split(P).join("/") !== r) return "place";
  } catch {
    return "place";
  }
  if (RHe(r, "/", "file", a) || DX(r)) return "name";
  return (await he(i, e, t, a ? r : null)) ? "place" : null;
}
function Sae(e) {
  return te([e, G9(e)]).some((t) => {
    let r = Jl(t.split("/").at(-1) ?? "");
    return SH.has(r) || Fe.has(xe(r) ?? "");
  });
}
function xe(e) {
  let t = /^([^.~]{1,6})~\d+(\.[^.]{1,3})?$/.exec(e);
  return t === null ? null : (t[1] ?? "") + (t[2] ?? "");
}
var Fe = new Set(
  [...SH].map((e) => {
    let t = e.replace(/^\.+/, ""),
      r = t.lastIndexOf("."),
      a = (r < 0 ? t : t.slice(0, r)).replace(/[^a-z0-9_!#$%&'()@^{}-]/g, ""),
      i = r < 0 ? "" : "." + t.slice(r + 1, r + 4);
    return a.slice(0, 6) + i;
  }),
);
async function he(e, t, r, a = null) {
  let i = W(t, Ae(e)).split(P).filter(Boolean),
    o = i.map((f, l) => C(t, ...i.slice(0, l + 1))),
    c = async (f) => {
      try {
        if ((await K(f)).isSymbolicLink()) return "link";
      } catch (l) {
        return E(l) === "ENOENT" ? "absent" : "plain";
      }
      return (await nrn(f)) ? "repository" : "plain";
    },
    s = async (f, l) => {
      let [p, ..._] = f;
      if (p === void 0) return { refused: false, deepest: l };
      let m = await c(p);
      if (m === "absent") return { refused: false, deepest: l };
      return m === "plain" ? s(_, p) : { refused: true, deepest: p };
    },
    { refused: d, deepest: u } = await s(o, t);
  if (d) return true;
  try {
    let f = W(r, await J(u)),
      l = W(t, u);
    return f !== "" && V(f, "directory", a !== null && f === l ? f.split(P).join("/") : null);
  } catch {
    return false;
  }
}
function V(e, t, r = null) {
  return hOe(e) || RHe(e, P, t, r !== null && e.split(P).join("/") === r) || (t === "file" && DX(e));
}
async function nrn(e) {
  try {
    return !(await K(C(e, "HEAD"))).isDirectory();
  } catch (t) {
    let r = E(t);
    return r !== "ENOENT" && r !== "ENOTDIR";
  }
}
function U(e) {
  let t =
    e === "WORKING_LANDED_OUTSIDE"
      ? Error("write landed outside the sync tree")
      : Error("destination resolves outside the sync tree");
  return (t.code = e), t;
}
async function R(e, t, r = null) {
  if (e.backend === "by_name" && V(W(e.realRoot, await J(t)), "file", r)) throw U("WORKING_RESOLVES_OUTSIDE");
}
async function v(e, t, r, a = null) {
  if (e.backend !== "by_name") {
    if (
      !(
        await e.lstat(t.rel).catch((o) => {
          throw X(o) ? U("WORKING_LANDED_OUTSIDE") : o;
        })
      ).isFile()
    )
      throw U("WORKING_LANDED_OUTSIDE");
    return;
  }
  if (!V(W(e.realRoot, await J(t.abs)), "file", a)) return;
  if (await Re(e, t.rel, r)) await e.unlink(t.rel).catch(() => {});
  throw U("WORKING_LANDED_OUTSIDE");
}
async function Re(e, t, r) {
  try {
    if (!(await e.lstat(t)).isFile()) return false;
    let a = await e.open(t, pmn);
    try {
      let i = await a.stat({ bigint: true });
      if (!i.isFile() || i.size !== BigInt(r.length)) return false;
      return (await a.readFile()).equals(r);
    } finally {
      await a.close();
    }
  } catch {
    return false;
  }
}
var ye = 255,
  We = ye - 32,
  Me = 96;
function Ge(e, t) {
  return Array.from(e).reduce(
    (r, a) =>
      !r.done && Buffer.byteLength(r.text + a) <= t ? { text: r.text + a, done: false } : { text: r.text, done: true },
    { text: "", done: false },
  ).text;
}
function Ue(e) {
  let r = `${Ge(le(e.abs), Me)}.incoming-${process.hrtime.bigint().toString(36).slice(-8)}`;
  return { abs: e.abs.slice(0, -le(e.abs).length) + r, rel: e.rel.slice(0, -Te.basename(e.rel).length) + r };
}
function ve(e, t, r) {
  return {
    agreed: { kind: "sha256", sha256: e.sha256 },
    stat: r !== null && Gw(r.mode) === e.mode && r.size === e.size ? r : null,
    etag: t,
    origin: "pulled",
    ...(e.gen !== void 0 && { peerGen: e.gen }),
  };
}
function Ke(e, t, r) {
  return {
    ...frn(e),
    agreed: { kind: "sha256", sha256: t.sha256 },
    stat: null,
    etag: r,
    ...(t.gen !== void 0 && { peerGen: t.gen }),
  };
}
function He(e, t) {
  return {
    agreed: { kind: "sha256", sha256: e.sha256 },
    stat: null,
    etag: t,
    origin: "pulled",
    ...(e.gen !== void 0 && { peerGen: e.gen }),
  };
}
function $e(e) {
  switch (e.kind) {
    case "unauthorized":
    case "lane_unavailable":
      return { status: "deferred", laneLost: e.kind };
    case "aborted":
      return { status: "deferred", laneLost: null };
    case "failed":
      return {
        status:
          e.status !== void 0 && e.status >= 400 && e.status < 500 && e.status !== 408 && e.status !== 429
            ? "failed"
            : "deferred",
        laneLost: null,
      };
  }
}
async function A2n({
  entry: e,
  gitRoot: t,
  realRoot: r,
  anchor: a,
  baseEntry: i,
  trackedHere: o = false,
  recreates: c = null,
  deps: s,
  signal: d,
  kept: u,
}) {
  let f = s.host ?? Bv(),
    l = i,
    p = Ye(f, s.writeFile ?? ((y, A, N, S, we) => P7n(f, S, y, A, N, DX, we))),
    _ = 0,
    m = false,
    L = false,
    h = (y, A = null, N = {}) => ({
      change: { path: e.path, status: y, copyPath: null },
      entry: A,
      localAbsent: L,
      bytesWritten: 0,
      bytesFetched: _,
      understated: false,
      refused: false,
      laneLost: null,
      credentialRefused: false,
      filterSettled: m,
      replacedUnkept: false,
      ...N,
    }),
    w = { abs: C(t, e.path), rel: e.path };
  try {
    if (Cue(t, w.abs).split(P).join("/") !== w.rel) return h("failed");
  } catch {
    return h("failed");
  }
  if (RHe(e.path, "/", "file", o)) return h("failed");
  let O = o ? e.path : null;
  if (e.size > Lm) return h("failed");
  if (a.rootOnly) return h("failed", null, { refused: true });
  let T = await Ne(w.abs),
    B = e.path.split("/");
  if (
    T === "refused" ||
    B.slice(0, -1).some((y) => Buffer.byteLength(y) > ye) ||
    (T === "absent" && l === void 0 && Buffer.byteLength(B.at(-1) ?? "") > We)
  )
    return h("failed");
  if (await he(w.abs, t, r, O)) return h("failed", null, { refused: true });
  if (DX(e.path)) return h("failed", null, { credentialRefused: true });
  let g = await (s.fetchContent !== void 0 ? s.fetchContent(e, d) : s.client.getLaneFile(cmn(e.path), d, e.size));
  if (g.kind !== "ok" && g.kind !== "not_found") {
    let { status: y, laneLost: A } = $e(g);
    return h(y, null, { laneLost: A });
  }
  if (
    ((_ = g.kind === "ok" ? g.content.length : 0),
    g.kind === "not_found" || g.content.length !== e.size || Nn(g.content) !== e.sha256)
  )
    return h("stale_entry", null, {
      understated: g.kind === "ok" && g.content.length > e.size && !(l !== void 0 && IHe(l.agreed, s_e(g.content))),
    });
  let I = s.digestFile ?? ((y, A, N) => TW(y, A, N, a)),
    k = await Le(t, r, e.path, I);
  if (k.kind === "unreadable") return h("failed");
  let b = k.kind === "present" ? k.digest : null;
  L = b === null;
  let q = c !== null && b === null && IHe(c, { sha256: e.sha256, gitBlobId: kA(g.content) });
  if (b === null && (l?.trashedAt !== void 0 || (c !== null && !q))) l = void 0;
  if (b !== null && l?.trashedAt !== void 0) {
    let { trashedAt: y, ...A } = l;
    l = { ...A, agreed: { kind: "unknown" } };
  }
  let Q = ie(l, b);
  m =
    Q === "changed" &&
    b !== null &&
    l !== void 0 &&
    s.cleanFilterBlobIds !== void 0 &&
    (await x2n(l.agreed, e.path, s.cleanFilterBlobIds, d));
  let be = m ? "unchanged" : Q,
    G = async (y) => (await H(f, a), y),
    Z = (y) => {
      let A = E(y);
      return (
        n(`dirSync pull: row not applied (${A ?? "not an errno"})`), h("failed", null, { refused: ze.has(A ?? "") })
      );
    };
  if (
    !q &&
    l !== void 0 &&
    (b === null || b.sha256 !== e.sha256) &&
    IHe(l.agreed, { sha256: e.sha256, gitBlobId: kA(g.content) })
  ) {
    let y = m && b !== null && Gw(b.mode) === e.mode;
    return G(
      h(
        "already_equal",
        y ? { ...frn(l), etag: g.etag, ...(e.gen !== void 0 && { peerGen: e.gen }) } : Ke(l, e, g.etag),
      ),
    ).catch(Z);
  }
  let ee = oe({
      localChange: be,
      localSha256: b?.sha256 ?? null,
      localMode: b?.mode ?? null,
      incomingSha256: e.sha256,
      incomingMode: e.mode,
    }),
    ne = Sae(e.path),
    re = ee === "apply" && ne ? "conflict" : ee;
  if (re === "conflict" && !ne && s.bothChanged === "skip") return h("skipped_local_change");
  let ae = b?.mode ?? null;
  try {
    let y = (S) => (l?.sent?.includes(e.sha256) === true ? { ...S, origin: "pushed" } : S),
      A = (S) => y(ve(e, g.etag, S));
    switch (re) {
      case "already_equal":
        return await G(h("already_equal", A(await fe(f, a, w.rel))));
      case "apply": {
        let S = await je({
          host: f,
          anchor: a,
          entry: e,
          gitRoot: t,
          realRoot: r,
          dest: w,
          trackedRel: O,
          localDigest: b,
          agreedMode: l?.stat?.mode ?? null,
          content: g.content,
          writeFile: p,
          digestFile: I,
          kept: u,
        });
        if (S.kind !== "raced")
          return await G(
            h("applied", A(S.stat), {
              bytesWritten: S.kind === "written" ? g.content.length : 0,
              replacedUnkept: S.kind === "written" && S.replacedUnkept,
              ...(S.kind === "written" &&
                S.keptAt !== null && {
                  change: {
                    path: e.path,
                    status: "applied",
                    copyPath: null,
                    keptAt: S.keptAt,
                    ...(l !== void 0 && b !== null && IHe(l.agreed, b) && Ve(l) && { keptEarlierCloudVersion: true }),
                  },
                }),
            }),
          );
        if (s.bothChanged === "skip") return h("skipped_local_change");
        (ae = S.observedMode), (L = S.observedMode === null);
        break;
      }
      case "conflict":
        break;
    }
    let N = await Je({
      host: f,
      anchor: a,
      entry: e,
      gitRoot: t,
      realRoot: r,
      trackedHere: o,
      content: g.content,
      shadowedMode: ae,
      deps: s,
      writeFile: p,
      digestFile: I,
    });
    return N === null
      ? h("failed")
      : await G(
          h("conflict", y(He(e, g.etag)), {
            change: { path: e.path, status: "conflict", copyPath: N.copyPath },
            bytesWritten: N.written ? g.content.length : 0,
          }),
        );
  } catch (y) {
    return Z(y);
  }
}
var ze = new Set([
  "WORKING_ANCHOR_UNAVAILABLE",
  "WORKING_DEST_REFUSED",
  "WORKING_LANDED_OUTSIDE",
  "WORKING_PARENT_ESCAPE",
  "WORKING_PARENT_NOT_DIRECTORY",
  "WORKING_RESOLVES_OUTSIDE",
]);
async function je({
  host: e,
  anchor: t,
  entry: r,
  gitRoot: a,
  realRoot: i,
  dest: o,
  trackedRel: c,
  localDigest: s,
  agreedMode: d,
  content: u,
  writeFile: f,
  digestFile: l,
  kept: p,
}) {
  if (s === null) {
    let w = F(null, r.mode);
    if (!(await Y(() => f(a, o.abs, u, t, j(t, w))))) {
      let T = await l(a, i, r.path);
      if (T === null) return await ce(o.abs), { kind: "raced", observedMode: null };
      if (T.sha256 !== r.sha256) return { kind: "raced", observedMode: T.mode };
      return await R(t, o.abs, c), { kind: "mode_only", stat: await M(e, t, o.rel, F(T.mode, r.mode, d)) };
    }
    return await v(t, o, u, c), { kind: "written", stat: await ue(e, t, o.rel, w), keptAt: null, replacedUnkept: false };
  }
  if (s.sha256 === r.sha256)
    return await R(t, o.abs, c), { kind: "mode_only", stat: await M(e, t, o.rel, F(s.mode, r.mode, d)) };
  let _ = s.mode & 511,
    m = Ue(o);
  if (!(await Y(() => f(a, m.abs, u, t, j(t, _))))) {
    let w = Error("staging name taken");
    throw ((w.code = "EEXIST"), w);
  }
  let h = () => t.unlink(m.rel).catch(() => {});
  try {
    await v(t, m, u, c === null ? null : m.rel);
    let w = await ue(e, t, m.rel, _).catch(() => null);
    if (w === null) {
      if (!(await t.lstat(m.rel)).isFile()) return await h(), { kind: "raced", observedMode: s.mode };
      throw Error("staged file could not be read back");
    }
    let O = await p.shouldKeep(r.path, s),
      T = await l(a, i, r.path),
      B = O && T !== null && T.sha256 === s.sha256,
      g = B ? await p.keep(r.path, T.content, T.mode) : null,
      I = false;
    try {
      let k = B ? await l(a, i, r.path) : T;
      if (k !== null && k.sha256 === r.sha256)
        return await h(), await R(t, o.abs, c), { kind: "mode_only", stat: await M(e, t, o.rel, F(k.mode, r.mode, d)) };
      if (k === null) return await h(), await ce(o.abs), { kind: "raced", observedMode: null };
      if (k.sha256 !== s.sha256) return await h(), { kind: "raced", observedMode: k.mode };
      let b = k.mode === s.mode ? w : await pe(e, t, m.rel, k.mode & 511);
      if (b === null) throw Error("staged file did not take the mode it replaces");
      return (
        await R(t, o.abs, c),
        await H(e, t),
        await t.rename(m.rel, o.rel),
        (I = true),
        await v(t, o, u, c),
        { kind: "written", stat: b, keptAt: g, replacedUnkept: O && g === null }
      );
    } finally {
      if (!I && g !== null) await p.discard(g).catch(() => {});
    }
  } catch (w) {
    throw (await h(), w);
  }
}
async function H(e, t) {
  let r = (o) => {
      if (X(o) || E(o) === "ENOTDIR") return null;
      throw o;
    },
    [a, i] = await Promise.all([e.fs.lstat(t.realRoot, { bigint: true }).catch(r), t.lstat("").catch(r)]);
  if (a === null || i === null || !a.isDirectory() || a.dev !== i.dev || a.ino !== i.ino) {
    let o = Error("sync root is gone");
    throw ((o.code = "WORKING_ROOT_GONE"), o);
  }
}
function Ye(e, t) {
  return async (r, a, i, o, c) => (await H(e, o), t(r, a, i, o, c));
}
async function ce(e) {
  if (await me(e)) {
    let t = Error("local file unreadable");
    throw ((t.code = "WORKING_LOCAL_UNREADABLE"), t);
  }
}
async function Je({
  host: e,
  anchor: t,
  entry: r,
  gitRoot: a,
  realRoot: i,
  trackedHere: o = false,
  content: c,
  shadowedMode: s,
  deps: d,
  writeFile: u,
  digestFile: f,
}) {
  let l = F(s, r.mode),
    p = false,
    _ = await se({
      path: r.path,
      now: d.now(),
      tryCandidate: async (L) => (
        (p = await Y(() => u(a, C(a, L), c, t, j(t, l)))), p || (await f(a, i, L))?.sha256 === r.sha256
      ),
    });
  if (_ === null) return null;
  let m = { abs: C(a, _), rel: _ };
  if (p) await v(t, m, c, o ? m.rel : null);
  else await R(t, m.abs, o ? m.rel : null);
  if (!p || t.backend === "by_name") await pe(e, t, m.rel, l);
  return { copyPath: _, written: p };
}
function Ve(e) {
  return e.origin === "pulled" && e.gen === void 0 && (e.sent === void 0 || e.sent.length === 0);
}
export { Jnn, Qnn, Znn, pWe, T2n, yDt, vHe, ern, mst, E2n, RHe, trn, gst, Sae, nrn, A2n };
