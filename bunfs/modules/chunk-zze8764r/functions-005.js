// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $ge, A7t, AJt, Ab, B7t, BQt, Bge, C2e, Cge, Cye, E2e, E3, FJt, Fge, GIe, GJt, GVe, HJt, Hge, I7t, J7t, JJt, JQt, KJt, LJt, M7t, MJt, Nge, Nw, O3, O7t, OVe, Oge, Ree, Rge, S7, SFt, SJt, SVe, TJt, WJt, WVe, Wge, XJt, ZKe, aL, aZt, bce, bj, c2e, cZt, d2e, dYe, dZt, dhe, e7t, eZt, hP, hZt, jJt, jVe, jan, k7t, lZt, m2e, mYe, mZt, n3, n7t, nZt, q3, sJt, sYe, sZt, t7t, tZt, uJt, usn, vJt, xVe, y3e, yZt, z7t, zJt, zge } from "/$bunfs/root/modules/chunk-zze8764r/core.js";
import { $2e, $7t, $8e, $V, $Vt, $a, $e, $t, A2, AGe, Age, B5, BJ, Bn, Bt, C2, CKe, CQe, Cc, Cu, Cw, D, D3t, DEe, Dj, Dn, Dp, E, EY, Ej, F0n, F2e, F5, F7t, FEe, FQt, FT, Fer, Fk, Fn, Fo, Ft, G, G0n, Gpe, Gt, He, Hn, Ht, I, Il, JD, JE, JKe, JN, JO, Je, K, KSn, KVt, Kh, Kk, Kt, L0n, L7t, Le, Lo, Lp, Lte, M2e, Me, Mer, Ms, Mtr, N0n, N7t, Ne, O0n, On, Ot, P3t, PLe, Q, Qe, Qer, Qi, Ql, Qne, R5t, R7t, RFe, Rb, SEn, Se, Ser, Skn, St, Svn, Syt, TC, TF, Td, Te, Tg, Tge, U5, U7t, UFe, UHn, UVt, Ug, Vg, Vk, Vo, Vp, Vr, Vu, WCt, WLe, WVt, Wo, X, XI, XSt, Xg, Y, YNe, Ye, Yr, Z_, Zd, Zer, Zn, _j, _mt, _n, _oe, _r, _t, a, aY, ad, ae, as, au, b, bJ, be, bie, c, cV, cl, cm, cre, cyt, d7t, dU, dj, dl, e0n, eJe, eN, eV, eVt, eb, ee, ew, f0, f0n, f7t, fP, g, g$, gH, gJ, gNe, gbn, gt, gve, h, ha, he, hr, hve, iH, iJt, it, jLe, jVt, jc, jo, k, kd, kge, kr, kue, l, l4, lC, lOe, le, lg, m0, m7e, m7t, mJt, mP, mve, n, n0n, nL, nN, nVt, nY, ns, o$, o3, oJe, oc, ol, ovn, ow, p, p3t, p7t, pc, pj, pve, px, qce, qe, rCe, rU, rd, rx, s, sc, sn, tL, tN, td, te, tr, ts, tx, u2t, u6, uM, uU, uf, ure, uw, vOe, va, vd, ve, vf, vge, vu, w, wge, xCe, xi, y, yQn, yre, yze, zEe, zV, za, zp, zpe } from "/$bunfs/root/modules/chunk-zze8764r/prelude.js";
import { Bv, C0e, E0e, Ll, Yf, aee, qI } from "/$bunfs/root/modules/chunk-zze8764r/functions-001.js";
import { Xl } from "/$bunfs/root/modules/chunk-zze8764r/functions-002.js";
import { ID, W6, j6, xE } from "/$bunfs/root/modules/chunk-zze8764r/functions-004.js";
import { th } from "/$bunfs/root/modules/chunk-zze8764r/functions-014.js";
import { oL } from "/$bunfs/root/modules/chunk-zze8764r/functions-015.js";
import { sDe } from "/$bunfs/root/modules/chunk-zze8764r/functions-017.js";
import { Cj, I3, J_, qge } from "/$bunfs/root/modules/chunk-zze8764r/functions-018.js";
import { Ou, RE, il, uft } from "/$bunfs/root/modules/chunk-zze8764r/functions-019.js";
import { Ocn, ks, lzn } from "/$bunfs/root/modules/chunk-zze8764r/functions-020.js";

function tan(e, t) {
  let r = t.endsWith(JKe) ? t : t + JKe;
  if (D() === "windows") return e.toLowerCase().startsWith(r.toLowerCase());
  return e.startsWith(r);
}

function LQt(e) {
  return e.startsWith("/") ? "/" : "\\";
}

function BD(e, t, r) {
  let o = r ? e.toLowerCase() : e,
    u = r ? t.toLowerCase() : t;
  if (o === u) return !0;
  let d = LQt(u),
    _ = u.endsWith(d) ? u : u + d;
  return o.startsWith(_);
}

function LE(e) {
  let t = /^[\\/]{2}/.test(e);
  return (t ? "\\\\" : "") + (t ? e.replace(/^[\\/]{2,}/, "") : e).replace(/[\\/]+/g, "\\");
}

function p_(e, t, r) {
  return (
    n(`bg-containment: refusing ${t} spelling for containment: ${e}`, { level: "warn" }),
    r === void 0
      ? { lexical: e, canonical: null, skipped: !1 }
      : { lexical: e, canonical: null, skipped: !1, surfaced: r }
  );
}

function NQt(e) {
  if (!JO(e)) return e;
  let t = /^[\\/]{2}\?[\\/]([A-Za-z]:[\\/].*)$/.exec(e);
  if (t) return t[1];
  let r = /^[\\/]{2}\?[\\/]UNC[\\/](.+)$/i.exec(e);
  if (r) return "\\\\" + r[1];
  return null;
}

function $Qt(e, t = "darwin") {
  if (oc(e)) return p_(tr(e), "dot-segment");
  let r = tr(e);
  if (t === "win32") {
    if (((r = r.replace(/^([\\/])[\\/]{2,}/, (C, A) => A + A)), JO(r) || Dj(r))) return p_(r, "device-namespace");
    if (((r = R5t(r)), ZKe.test(r))) return p_(r, "trailing-dot-or-space");
    if (Qi(r)) return { lexical: LE(r), canonical: null, skipped: !0 };
    r = LE(r);
  } else {
    if (((r = r.replace(/\/{2,}/g, "/")), t === "darwin")) r = BJ(r);
    if (ns(r)) return { lexical: WCt(r, t), canonical: null, skipped: !0 };
  }
  let o = tx(le(), r, { surfaceDotDotTargets: !0 });
  if (o === void 0) return { lexical: r, canonical: r, skipped: !1 };
  let u = t === "win32" ? NQt(o) : o;
  if (u === null) return p_(r, "resolves-to-device-namespace");
  let d = t === "win32" ? u : t === "darwin" ? BJ(u.replace(/^\/{2,}/, "/")) : u.replace(/^\/{2,}/, "/");
  if (Qi(d) || ns(d)) return p_(r, "resolves-to-network", WCt(tr(t === "win32" ? LE(d) : d), t));
  if (oc(d)) return p_(r, "resolves-to-dot-segment");
  if (t === "win32" && ZKe.test(d)) return p_(r, "resolves-to-trailing-dot-or-space");
  let _ = t === "win32" ? LE(d) : d.replace(/\/{2,}/g, "/");
  return { lexical: r, canonical: tr(_), skipped: !1 };
}

function Jm(e, t = "darwin") {
  let o,
    u = e;
  try {
    for (let d = 0; d < 8; d++) {
      let _ = $Qt(u, t);
      if (((o ??= _), _.skipped)) return d === 0 ? _ : p_(o.lexical, "resolves-to-network");
      if (_.canonical === null) return d === 0 ? _ : { ..._, lexical: o.lexical };
      if (_.canonical === u) {
        try {
          if (le().lstatSync(u).isSymbolicLink())
            return p_(o.lexical, "resolution-not-convergent", u !== e ? u : void 0);
        } catch (C) {
          if (!X(C)) throw C;
          if (t === "win32")
            try {
              le().realpathSync(FQt.dirname(u));
            } catch (A) {
              if (!X(A)) return p_(o.lexical, "resolution-not-convergent", u !== e ? u : void 0);
            }
        }
        return { lexical: o.lexical, canonical: u, skipped: !1 };
      }
      u = _.canonical;
    }
  } catch {
    return p_(o?.lexical ?? tr(e), "resolution-error", u !== e ? u : void 0);
  }
  return p_(o.lexical, "resolution-not-convergent", u !== e ? u : void 0);
}

function Lw(e, t) {
  if (Kp(e)) return !0;
  if (Kp(t)) {
    if (e.skipped) return !0;
    if (dP(e.lexical, t.lexical) || (e.canonical !== null && dP(e.canonical, t.lexical))) return !0;
    if (t.surfaced !== void 0 && (dP(e.lexical, t.surfaced) || (e.canonical !== null && dP(e.canonical, t.surfaced))))
      return !0;
    return !1;
  }
  if (e.skipped && !t.skipped)
    return n(`bg-containment: denying network-shaped target against a local root: ${e.lexical}`, { level: "warn" }), !0;
  if (e.skipped || t.skipped) return dP(e.lexical, t.lexical);
  return dP(e.lexical, t.lexical) || dP(e.canonical, t.canonical) || jQt(e.canonical, t.canonical);
}

function dP(e, t) {
  return BD(e, t, !0);
}

function HQt() {
  return BQt.of(G().host);
}

function jQt(e, t) {
  if (D() !== "windows") return !1;
  let r = Skn(e),
    o = HQt().expand(t);
  if (r === e && o === t) return !1;
  return WQt(tr(LE(r)), tr(LE(o)));
}

function WQt(e, t) {
  return BD(e, t, !0);
}

function HD(e, t) {
  if (Kp(e) || Kp(t)) return !1;
  if (e.skipped !== t.skipped) return !1;
  if (e.skipped) return e2e(e.lexical, t.lexical);
  return e2e(e.canonical, t.canonical);
}

function e2e(e, t) {
  return BD(e, t, !1);
}

function Kp(e) {
  return e.canonical === null && !e.skipped;
}

function q6(e, t, r) {
  if (e === null || t === null) return "";
  if (BD(e, t, !0))
    return ` (this path differs from the registered spelling only by letter case \u2014 respell it to match ${r} exactly)`;
  return "";
}

function c7() {
  return Bv("WorktreeCreate").length > 0;
}

function b3n() {
  return Bv("WorktreeRemove").length > 0;
}

function Ble(e) {
  let t = e.agentWorktree;
  if (t !== void 0 && t !== "") return t;
  let r = ha()?.worktreePath;
  return r !== void 0 && r !== "" ? r : void 0;
}

function n2e(e, t) {
  {
    let r = K6(e, t);
    if (r.escaped) {
      if (Kp(r.dir))
        return `This command was blocked because its working directory is spelled in a form that cannot be safely resolved (for example through a symlink storing a raw dot segment, a network-share or device-namespace shape, or an unreadable ancestor directory). If the directory is inside the worktree ${t}, re-run the command from its direct symlink-free path.`;
      if (r.dir.skipped && !r.roots.some((d) => d.skipped || Kp(d)))
        return `This command was blocked because its working directory is network-shaped (a UNC share or /net automount spelling) while the protected checkout is local. If the directory is genuinely inside the worktree ${t}, re-run the command from its local, plainly-spelled path.`;
      let { noun: o, possessive: u } = lj(t);
      return `${o} is isolated in the worktree ${t}, but this command's working directory resolved to the shared checkout (${e}). Refusing to run it there \u2014 ${u} commands must run inside its worktree. Re-run the command from ${t}.${q6(r.dir.canonical, r.worktree.canonical, t)}`;
    }
  }
  return null;
}

function lj(e) {
  return ha()?.worktreePath === e
    ? { noun: "This session", possessive: "a worktree-isolated session's" }
    : { noun: "This agent", possessive: "a worktree-isolated agent's" };
}

function cj(e, t) {
  return K6(e, t).escaped;
}

function K6(e, t) {
  let r = Jm(e),
    o = ha(),
    u = null,
    d = te(
      (o !== null && o.worktreePath === t ? [o.originalCwd] : [Se(), o?.originalCwd]).filter(
        (W) => W !== void 0 && W !== "",
      ),
    ),
    _ = o?.liveLaunchAnchor !== void 0 && o.liveLaunchAnchor !== "" ? o.liveLaunchAnchor : void 0,
    C = _ !== void 0 && (Qi(_) || ns(_)),
    A = () => GQt(t),
    x = _ !== void 0 && !C ? [Hn(_), Vr(_)].filter((W) => W !== null && W !== void 0) : [],
    M = A(),
    F = x.length > 0,
    U = [
      ...d.flatMap((W) => (Qi(W) || ns(W) ? [W] : [Hn(W) ?? W, Vr(W)])),
      ...x,
      ...(_ !== void 0 && !F ? [_] : []),
      M,
    ],
    B = te(U.filter((W) => W !== null)).map((W) => Jm(W));
  if (!B.some((W) => Lw(r, W))) return { dir: r, worktree: u, roots: B, escaped: !1 };
  if (((u ??= Jm(t)), HD(r, u))) return { dir: r, worktree: u, roots: B, escaped: !1 };
  return { dir: r, worktree: u, roots: B, escaped: !0 };
}

function zQt(e) {
  if (!m0(e)) return f0;
  let t = Jm(e);
  if (!qQt(Hn(e), t.lexical)) return f0;
  return Vr(e) ?? f0;
}

function GQt(e) {
  let t = rU(vd().linkedFromRootByPin, e, zQt);
  return t === f0 ? null : t;
}

function qQt(e, t, r = "darwin") {
  if (e === null) return !1;
  let o = r === "darwin" ? BJ(e) : e;
  if (r !== "win32") o = WCt(o, r);
  else o = LE(R5t(o));
  return o === t;
}

function cge() {
  let e = a.CLAUDE_BG_ISOLATION;
  if (e === "worktree" || e === "none") return e;
  let t = Kh();
  if (t) return t.bgIsolation;
  return Je().worktree?.bgIsolation;
}

function iF(e, t) {
  {
    let r = Ble(t);
    if (r) {
      let A = K6(e, r);
      if (!A.escaped) return null;
      let x = r2e(A.dir, A.roots);
      if (x === "unresolvable") return o2e(r);
      if (x === "network") return s2e(r);
      let { noun: M } = lj(r);
      return `${M} is isolated in the worktree ${r}. Edit the worktree copy of this file instead of the shared-checkout path.${q6(A.dir.canonical, A.worktree.canonical, r)}`;
    }
    if (a.CLAUDE_CODE_SESSION_KIND !== "bg" && !Kh()) return null;
    if (cge() === "none") return null;
    let o = t.agentId ? Se() : ee(),
      u = Jm(e),
      d = Jm(o);
    if (!Lw(u, d)) return null;
    if (!Hn(o) && (!c7() || Mtr(o))) return null;
    if (m0(o)) return null;
    if (u.canonical !== null && Svn(u.canonical)) return null;
    let _ = r2e(u, d);
    if (_ === "unresolvable") return o2e();
    if (_ === "network") return s2e();
    let C = d.canonical !== null;
    if (t.agentId)
      return `This subagent's parent bg session hasn't isolated yet, so writes to the shared checkout are blocked. Re-spawn this agent with \`isolation: "worktree"\`${C ? `, have the parent call ${lC} before spawning, or make the edit inside a linked git worktree you create for this task with \`git worktree add\` \u2014 paths inside a worktree are accepted` : `, or have the parent call ${lC} before spawning`}. (To disable this guard for this repo, set \`"worktree": {"bgIsolation": "none"}\` in .claude/settings.json.)`;
    return `This background session hasn't isolated its changes yet. Call ${lC} first so edits land in a worktree instead of the shared checkout, then retry this edit using the worktree path${C ? " (a path inside a linked git worktree, including one you create with `git worktree add`, is accepted)" : ""}. (To disable this guard for this repo, set \`"worktree": {"bgIsolation": "none"}\` in .claude/settings.json.)`;
  }
  return null;
}

function r2e(e, t) {
  if (Kp(e)) return "unresolvable";
  let r = Array.isArray(t) ? t : [t];
  if (e.skipped && !r.some((o) => o.skipped || Kp(o))) return "network";
  return "contained";
}

function o2e(e) {
  return `This write was blocked because the path is spelled in a form that cannot be safely resolved (for example through a symlink storing a raw dot segment, a network-share or device-namespace shape, or an unreadable ancestor directory). ${e === void 0 ? "Retry the edit addressing the file by a direct, plainly-spelled path." : `If the file is inside the worktree ${e}, address it by its direct symlink-free path instead.`}`;
}

function s2e(e) {
  return `This write was blocked because the path is network-shaped (a UNC share or /net automount spelling) while this session's checkout is local. Isolating cannot unblock it. ${e === void 0 ? "If the file is genuinely local, retry the edit addressing it by its local, plainly-spelled path." : `If the file is genuinely inside the worktree ${e}, address it by its local, plainly-spelled path instead.`}`;
}

function uge(e, t) {
  let r;
  for (r = 0; r < e.length && r < t.length; r++) if (e[r] != t[r]) return e.slice(0, r);
  return e.slice(0, r);
}

function dge(e, t) {
  let r;
  if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
  for (r = 0; r < e.length && r < t.length; r++) if (e[e.length - (r + 1)] != t[t.length - (r + 1)]) return e.slice(-r);
  return e.slice(-r);
}

function X6(e, t, r) {
  if (e.slice(0, t.length) != t)
    throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);
  return r + e.slice(t.length);
}

function Q6(e, t, r) {
  if (!t) return e + r;
  if (e.slice(-t.length) != t)
    throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);
  return e.slice(0, -t.length) + r;
}

function GD(e, t) {
  return X6(e, t, "");
}

function uj(e, t) {
  return Q6(e, t, "");
}

function pge(e, t) {
  return t.slice(0, KQt(e, t));
}

function KQt(e, t) {
  let r = 0;
  if (e.length > t.length) r = e.length - t.length;
  let o = t.length;
  if (e.length < t.length) o = e.length;
  let u = Array(o),
    d = 0;
  u[0] = 0;
  for (let _ = 1; _ < o; _++) {
    if (t[_] == t[d]) u[_] = u[d];
    else u[_] = d;
    while (d > 0 && t[_] != t[d]) d = u[d];
    if (t[_] == t[d]) d++;
  }
  d = 0;
  for (let _ = r; _ < e.length; _++) {
    while (d > 0 && e[_] != t[d]) d = u[d];
    if (e[_] == t[d]) d++;
  }
  return d;
}

function mge(e, t) {
  let r = [];
  for (let o of Array.from(t.segment(e))) {
    let u = o.segment;
    if (r.length && /\s/.test(r[r.length - 1]) && /\s/.test(u)) r[r.length - 1] += u;
    else r.push(u);
  }
  return r;
}

function J6(e, t) {
  if (t) return qD(e, t)[1];
  let r;
  for (r = e.length - 1; r >= 0; r--) if (!e[r].match(/\s/)) break;
  return e.substring(r + 1);
}

function pP(e, t) {
  if (t) return qD(e, t)[0];
  let r = e.match(/^\s*/);
  return r ? r[0] : "";
}

function qD(e, t) {
  if (!t) return [pP(e), J6(e)];
  if (t.resolvedOptions().granularity != "word") throw Error('The segmenter passed must have a granularity of "word"');
  let r = mge(e, t),
    o = r[0],
    u = r[r.length - 1],
    d = /\s/.test(o) ? o : "",
    _ = /\s/.test(u) ? u : "";
  return [d, _];
}

function i2e(e, t, r, o, u) {
  if (t && r) {
    let [d, _] = qD(t.value, u),
      [C, A] = qD(r.value, u);
    if (e) {
      let x = uge(d, C);
      (e.value = Q6(e.value, C, x)), (t.value = GD(t.value, x)), (r.value = GD(r.value, x));
    }
    if (o) {
      let x = dge(_, A);
      (o.value = X6(o.value, A, x)), (t.value = uj(t.value, x)), (r.value = uj(r.value, x));
    }
  } else if (r) {
    if (e) {
      let d = pP(r.value, u);
      r.value = r.value.substring(d.length);
    }
    if (o) {
      let d = pP(o.value, u);
      o.value = o.value.substring(d.length);
    }
  } else if (e && o) {
    let d = pP(o.value, u),
      [_, C] = qD(t.value, u),
      A = uge(d, _);
    t.value = GD(t.value, A);
    let x = dge(GD(d, A), C);
    (t.value = uj(t.value, x)),
      (o.value = X6(o.value, d, x)),
      (e.value = Q6(e.value, d, d.slice(0, d.length - x.length)));
  } else if (o) {
    let d = pP(o.value, u),
      _ = J6(t.value, u),
      C = pge(_, d);
    t.value = uj(t.value, C);
  } else if (e) {
    let d = J6(e.value, u),
      _ = pP(t.value, u),
      C = pge(d, _);
    t.value = GD(t.value, C);
  }
}

function Usn(e, t, r) {
  return c2e.diff(e, t, r);
}

function Lye(e, t, r) {
  return d2e.diff(e, t, r);
}

function XQt(e, t) {
  if (t.stripTrailingCr)
    e = e.replace(
      /\r\n/g,
      `
`,
    );
  let r = [],
    o = e.split(/(\n|\r\n)/);
  if (!o[o.length - 1]) o.pop();
  for (let u = 0; u < o.length; u++) {
    let d = o[u];
    if (u % 2 && !t.newlineIsToken) r[r.length - 1] += d;
    else r.push(d);
  }
  return r;
}

function Bsn(e, t, r) {
  return m2e.diff(e, t, r);
}

function Mye(e, t, r, o, u, d, _) {
  let C;
  if (!_) C = {};
  else if (typeof _ === "function") C = { callback: _ };
  else C = _;
  if (typeof C.context > "u") C.context = 4;
  let A = C.context;
  if (C.newlineIsToken)
    throw Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
  if (!C.callback) return x(Lye(r, o, C));
  else {
    let { callback: M } = C;
    Lye(
      r,
      o,
      Object.assign(Object.assign({}, C), {
        callback: (F) => {
          let U = x(F);
          M(U);
        },
      }),
    );
  }
  function x(M) {
    if (!M) return;
    M.push({ value: "", lines: [] });
    function F(me) {
      return me.map(function (ge) {
        return " " + ge;
      });
    }
    let U = [],
      B = 0,
      W = 0,
      z = [],
      pe = 1,
      fe = 1;
    for (let me = 0; me < M.length; me++) {
      let ge = M[me],
        Ce = ge.lines || QQt(ge.value);
      if (((ge.lines = Ce), ge.added || ge.removed)) {
        if (!B) {
          let Ie = M[me - 1];
          if (((B = pe), (W = fe), Ie)) (z = A > 0 ? F(Ie.lines.slice(-A)) : []), (B -= z.length), (W -= z.length);
        }
        for (let Ie of Ce) z.push((ge.added ? "+" : "-") + Ie);
        if (ge.added) fe += Ce.length;
        else pe += Ce.length;
      } else {
        if (B)
          if (Ce.length <= A * 2 && me < M.length - 2) for (let Ie of F(Ce)) z.push(Ie);
          else {
            let Ie = Math.min(Ce.length, A);
            for (let Pe of F(Ce.slice(0, Ie))) z.push(Pe);
            let Ee = { oldStart: B, oldLines: pe - B + Ie, newStart: W, newLines: fe - W + Ie, lines: z };
            U.push(Ee), (B = 0), (W = 0), (z = []);
          }
        (pe += Ce.length), (fe += Ce.length);
      }
    }
    for (let me of U)
      for (let ge = 0; ge < me.lines.length; ge++)
        if (
          me.lines[ge].endsWith(`
`)
        )
          me.lines[ge] = me.lines[ge].slice(0, -1);
        else me.lines.splice(ge + 1, 0, "\\ No newline at end of file"), ge++;
    return { oldFileName: e, newFileName: t, oldHeader: u, newHeader: d, hunks: U };
  }
}

function QQt(e) {
  let t = e.endsWith(`
`),
    r = e
      .split(`
`)
      .map(
        (o) =>
          o +
          `
`,
      );
  if (t) r.pop();
  else r.push(r.pop().slice(0, -1));
  return r;
}

function fge(e) {
  if (!("content" in e)) return;
  let t = e.content;
  if (typeof t !== "object" || t === null || !("type" in t)) return;
  return t;
}

function f2e(e) {
  let t = fge(e);
  if (t === void 0 || t.type !== "advisor_tool_result_error") return;
  if (!("error_code" in t) || typeof t.error_code !== "string") return "unknown";
  let r = t.error_code;
  return JQt.find((o) => o === r) ?? "unknown";
}

function gge(e) {
  let t = fge(e);
  if (t === void 0 || (t.type !== "advisor_result" && t.type !== "advisor_redacted_result")) return;
  if (!("stop_reason" in t) || typeof t.stop_reason !== "string") return;
  let r = t.stop_reason;
  return e7t.find((o) => o === r) ?? "unknown";
}

function vle(e) {
  return gge(e) === "refusal";
}

function N3e(e) {
  if (!vle(e)) return;
  let t = fge(e);
  if (t?.type !== "advisor_result" || !("text" in t)) return;
  let r = t.text;
  return typeof r === "string" && r ? r : void 0;
}

function uD() {
  if (a.CLAUDE_CODE_DISABLE_ADVISOR_TOOL) return !1;
  if (Ne() !== "firstParty" || !uw()) return !1;
  if (a.CLAUDE_CODE_ENABLE_EXPERIMENTAL_ADVISOR_TOOL) return !0;
  return I("tengu_sage_compass2", {}).enabled ?? !1;
}

function hge() {
  return a.CLAUDE_CODE_ENABLE_EXPERIMENTAL_ADVISOR_TOOL;
}

function yge(e) {
  return Ql(Ye(Ot(e)))?.advisor_rank;
}

function _ge(e) {
  let t = Ye(Ot(e));
  if (!Le()) {
    if (yre(t) && !zEe()) return;
    if ($8e(t) && !p3t()) return;
  }
  return Ql(t)?.advisor_rank;
}

function Z8(e) {
  if (hge()) return !0;
  return yge(e) !== void 0;
}

function iut(e) {
  return xee(hr(Ot(e)));
}

function _Ie() {
  return n7t.filter((e) => {
    let t = hr(Ot(e));
    return iut(e) || DG(t);
  });
}

function g2e(e) {
  if (hge()) return !0;
  let t = _ge(e);
  return t !== void 0 && t >= t7t;
}

function xee(e) {
  let t = Ot(e);
  if (!kr(e)) return !1;
  if (uf(t) && qce()) return !1;
  return g2e(e);
}

function DG(e) {
  let t = Ot(e);
  if (!uf(t) || !qce()) return !1;
  if (!kr(e)) return !1;
  if (u2t(Ye(t))) return !1;
  return g2e(e);
}

function Rle(e, t) {
  if (hge()) return !0;
  let r = yge(e),
    o = _ge(t);
  if (r === void 0 || o === void 0) return !0;
  return r <= o;
}

function h2e(e, t) {
  let r = yge(e),
    o = _ge(t);
  if (r === void 0 || o === void 0) return !0;
  return r <= o;
}

function m1t(e, t) {
  if (!uD() || !e) return;
  let r = hr(Ot(e));
  if (!Z8(t)) {
    if (
      (n(`[AdvisorTool] Skipping advisor - base model ${t} does not support advisor`),
      pc().claim("advisor_unranked_base_warning"))
    )
      console.warn(
        `Warning: Advisor disabled \u2014 base model '${t}' has no advisor rank in the model catalog. Switch to a public model alias (opus, sonnet, fable) or set CLAUDE_CODE_ENABLE_EXPERIMENTAL_ADVISOR_TOOL=1.`,
      );
    return;
  }
  if (!xee(r)) {
    n(`[AdvisorTool] Skipping advisor - ${r} is not a valid advisor model`);
    return;
  }
  if (!Rle(t, r)) {
    n(
      `[AdvisorTool] Skipping advisor - ${r} cannot advise ${t} (advisor must be at least as capable as the base model)`,
    );
    return;
  }
  return n(`[AdvisorTool] Server-side tool enabled with ${r} as the advisor model`), r;
}

function g1t() {
  if (!uD()) return;
  return Lsn(Je());
}

function Lsn(e) {
  return typeof e.advisorModel === "string" ? e.advisorModel : void 0;
}

function y2e(e) {
  return (e.iterations ?? []).filter((t) => t.type === "advisor_message");
}

function b2e(e, t) {
  return !t && (e.startsWith("repl_main_thread") || e === "sdk" || e === "compact");
}

function QD() {
  return usn.of(G());
}

function w2e(e, t) {
  try {
    return QD().record(e, t);
  } catch (r) {
    return h(r), null;
  }
}

function T2e(e, t) {
  try {
    QD().touch(e, t);
  } catch (r) {
    h(r);
  }
}

function t3(e = Ab, t = Date.now()) {
  try {
    QD().expectDrop(e, t);
  } catch (r) {
    h(r);
  }
}

function UNt(e = Ab, t = Date.now()) {
  return QD().summary(e, t);
}

function BNt(e = Ab) {
  return QD().estimateRecacheTokens(e);
}

function i9n() {
  return au((e, t) => {
    if (t === "cd" || t === "hydrate") return;
    QD().clear();
  });
}

function qB(e) {
  return e !== void 0 && !(dl() < e);
}

function sut(e) {
  if (Number.isNaN(dl()))
    return `Session cost is not a number (a usage or pricing fault upstream); refusing to continue under --max-budget-usd ${e}`;
  return `Reached maximum budget ($${e})`;
}

function s7t(e) {
  Iye(void 0, e);
}

function Msn() {
  if (!L0n()) return;
  return {
    type: "cost-state",
    sessionId: K(),
    totalCostUSD: dl(),
    totalAPIDuration: Xg(),
    totalAPIDurationWithoutRetries: $Vt(),
    totalToolDuration: UVt(),
    totalLinesAdded: U5(),
    totalLinesRemoved: B5(),
    totalDuration: Ej(),
    startTime: pve(),
    modelUsage: ts(Tg(), (e) => ({
      inputTokens: e.inputTokens,
      outputTokens: e.outputTokens,
      cacheReadInputTokens: e.cacheReadInputTokens,
      cacheCreationInputTokens: e.cacheCreationInputTokens,
      webSearchRequests: e.webSearchRequests,
      costUSD: e.costUSD,
    })),
    hasUnknownModelCost: WVt(),
  };
}

function xye(e) {
  let t = e.costState;
  if (!t) return N0n(), !1;
  return (
    F0n({
      totalCostUSD: t.totalCostUSD,
      totalAPIDuration: t.totalAPIDuration,
      totalAPIDurationWithoutRetries: t.totalAPIDurationWithoutRetries,
      totalToolDuration: t.totalToolDuration,
      totalLinesAdded: t.totalLinesAdded,
      totalLinesRemoved: t.totalLinesRemoved,
      lastDuration: t.totalDuration,
      startTime: t.startTime,
      modelUsage: ts(t.modelUsage, (r, o) => ({ ...r, contextWindow: Lp(o, zp()), maxOutputTokens: $V(o).default })),
      hasUnknownModelCost: t.hasUnknownModelCost,
    }),
    !0
  );
}

function Iye(e, t) {
  let r = Msn();
  if (r) O0n(r, t);
  jc(bge(e), t);
}

async function B9n(e, t) {
  await jc(bge(e), t);
}

function j9n(e) {
  gNe(bge(e));
}

function bge(e) {
  let t = {
    lastCost: dl(),
    lastAPIDuration: Xg(),
    lastAPIDurationWithoutRetries: $Vt(),
    lastToolDuration: UVt(),
    lastDuration: Ej(),
    lastStartTime: pve(),
    lastLinesAdded: U5(),
    lastLinesRemoved: B5(),
    lastTotalInputTokens: mve(),
    lastTotalOutputTokens: Cu(),
    lastTotalCacheCreationInputTokens: hve(),
    lastTotalCacheReadInputTokens: gve(),
    lastTotalWebSearchRequests: n0n(),
    lastFpsAverage: e?.averageFps,
    lastFpsLow1Pct: e?.low1PctFps,
    lastGracefulShutdown: ks(),
    lastVersionBase: m7e(),
    lastModelUsage: ts(Tg(), (r) => ({
      inputTokens: r.inputTokens,
      outputTokens: r.outputTokens,
      cacheReadInputTokens: r.cacheReadInputTokens,
      cacheCreationInputTokens: r.cacheCreationInputTokens,
      webSearchRequests: r.webSearchRequests,
      costUSD: r.costUSD,
    })),
    lastSessionId: K(),
  };
  return (r) => ({ ...r, ...t });
}

function v2e(e, t = 4) {
  return `$${e > 0.5 ? c7t(e, 100).toFixed(2) : e.toFixed(t)}`;
}

function i7t() {
  let e = Tg();
  if (Object.keys(e).length === 0) return "Usage:                 0 input, 0 output, 0 cache read, 0 cache write";
  let t = new Map();
  for (let [o, u] of Object.entries(e)) {
    let d = Ye(o),
      _ = t.get(d);
    if (!_)
      (_ = {
        inputTokens: 0,
        outputTokens: 0,
        cacheReadInputTokens: 0,
        cacheCreationInputTokens: 0,
        webSearchRequests: 0,
        costUSD: 0,
        contextWindow: 0,
        maxOutputTokens: 0,
      }),
        t.set(d, _);
    (_.inputTokens += u.inputTokens),
      (_.outputTokens += u.outputTokens),
      (_.cacheReadInputTokens += u.cacheReadInputTokens),
      (_.cacheCreationInputTokens += u.cacheCreationInputTokens),
      (_.webSearchRequests += u.webSearchRequests),
      (_.costUSD += u.costUSD);
  }
  let r = "Usage by model:";
  for (let [o, u] of t) {
    let d =
      `  ${Wo(u.inputTokens)} input, ${Wo(u.outputTokens)} output, ${Wo(u.cacheReadInputTokens)} cache read, ${Wo(u.cacheCreationInputTokens)} cache write` +
      (u.webSearchRequests > 0 ? `, ${Wo(u.webSearchRequests)} web search` : "") +
      ` (${v2e(u.costUSD)})`;
    r +=
      `
` +
      `${o}:`.padStart(21) +
      d;
  }
  return r;
}

function a7t(e) {
  if (e.includes("fable")) return "fable";
  if (e.includes("opus")) return "opus";
  if (e.includes("sonnet")) return "sonnet";
  if (e.includes("haiku")) return "haiku";
  return e;
}

function W9n() {
  let e = Tg(),
    t = Object.entries(e);
  if (t.length === 0) return null;
  let r = new Map(),
    o = 0,
    u = 0,
    d = 0,
    _ = 0;
  for (let [x, M] of t) {
    let F = a7t(Ye(x));
    r.set(F, (r.get(F) ?? 0) + M.costUSD),
      (o += M.costUSD),
      (u += M.inputTokens),
      (d += M.cacheReadInputTokens),
      (_ += M.cacheCreationInputTokens);
  }
  let C = [];
  if (o > 0) for (let [x, M] of [...r].sort((F, U) => U[1] - F[1])) C.push(`${x}: ${Math.round((M / o) * 100)}%`);
  let A = u + d + _;
  if (A > 0) C.push(`cache hit: ${Math.round((d / A) * 100)}%`);
  return C.length > 0 ? `breakdown \xB7 ${C.join(" \xB7 ")}` : null;
}

function OG() {
  let e = [
      WVt() && "costs may be inaccurate due to usage of unknown models",
      Mer() && "at your organization's configured rates",
    ].filter(Boolean),
    t = v2e(dl()) + (e.length > 0 ? ` (${e.join("; ")})` : ""),
    r = i7t(),
    o = l7t();
  return ae.dim(`Total cost:            ${t}
Total duration (API):  ${$t(Xg())}
Total duration (wall): ${$t(Ej())}
Total code changes:    ${U5()} ${U5() === 1 ? "line" : "lines"} added, ${B5()} ${B5() === 1 ? "line" : "lines"} removed
${r}${
  o
    ? `
${o}`
    : ""
}`);
}

function l7t(e = Date.now()) {
  let t = UNt(void 0, e);
  if (t.requests === 0 || t.lastRequest === null) return null;
  let r = [`${t.requests} ${t.requests === 1 ? "request" : "requests"}`];
  if (t.hitRatio !== null) r.push(`${Math.round(t.hitRatio * 100)}% of input tokens from cache`);
  if (
    (r.push(
      t.misses === 0
        ? "no misses"
        : `${t.misses} ${t.misses === 1 ? "miss" : "misses"} (last ${$t(e - (t.lastMissAt ?? e))} ago, ${Wo(t.missRecacheTokens)} tokens re-cached)`,
    ),
    t.expectedRebuilds > 0)
  )
    r.push(
      `${t.expectedRebuilds} expected ${t.expectedRebuilds === 1 ? "rebuild" : "rebuilds"} (compaction or tool-result clearing)`,
    );
  let o = $t(e - (t.lastActivityAt ?? t.lastRequest.at)),
    u = BNt();
  if (!t.cachingObserved) r.push("no prompt caching reported by the API");
  else
    r.push(
      t.warm
        ? `warm (${t.lastRequest.ttl} TTL, last activity ${o} ago)`
        : `cold \u2014 idle ${o}, ${u === null ? "next turn re-caches the compacted prompt" : `next turn re-caches ~${Wo(u)} tokens`}`,
    );
  return `Prompt cache (main):   ${r.join(" \xB7 ")}`;
}

function c7t(e, t) {
  return Math.round(e * t) / t;
}

function u7t(e, t, r) {
  let o = f0n(r) ?? {
    inputTokens: 0,
    outputTokens: 0,
    cacheReadInputTokens: 0,
    cacheCreationInputTokens: 0,
    webSearchRequests: 0,
    costUSD: 0,
    contextWindow: 0,
    maxOutputTokens: 0,
  };
  return (
    (o.inputTokens += t.input_tokens),
    (o.outputTokens += t.output_tokens),
    (o.cacheReadInputTokens += t.cache_read_input_tokens ?? 0),
    (o.cacheCreationInputTokens += t.cache_creation_input_tokens ?? 0),
    (o.webSearchRequests += t.server_tool_use?.web_search_requests ?? 0),
    (o.costUSD += e),
    (o.contextWindow = Lp(r, zp())),
    (o.maxOutputTokens = $V(r).default),
    (o.canonicalModel = Ye(r)),
    (o.provider = za(r)),
    (o.costBasis = Fer(r)),
    o
  );
}

function qW(e, t, r, o, u, d, _, C, A) {
  let x = u7t(e, t, r);
  e0n(e, x, r);
  let M = Il(o),
    F = {
      model: r,
      ...(Yr() && t.speed === "fast" && { speed: "fast" }),
      ...(M && { query_source: M }),
      ...(u && { effort: u }),
      ...qI(o, Yf(o, d, _, C, A)),
    };
  G0n()?.add(e, F),
    CQe()?.add(t.input_tokens, { ...F, type: "input" }),
    CQe()?.add(t.output_tokens, { ...F, type: "output" }),
    CQe()?.add(t.cache_read_input_tokens ?? 0, { ...F, type: "cacheRead" }),
    CQe()?.add(t.cache_creation_input_tokens ?? 0, { ...F, type: "cacheCreation" });
  let U = e;
  for (let B of y2e(t)) {
    let W = {
        output_tokens_details: null,
        cache_creation: B.cache_creation,
        cache_creation_input_tokens: B.cache_creation_input_tokens,
        cache_read_input_tokens: B.cache_read_input_tokens,
        inference_geo: t.inference_geo ?? null,
        input_tokens: B.input_tokens,
        iterations: null,
        output_tokens: B.output_tokens,
        server_tool_use: null,
        service_tier: null,
        speed: null,
      },
      z = eN(B.model, W);
    s("tengu_advisor_tool_token_usage", {
      advisor_model: _n(B.model),
      input_tokens: B.input_tokens,
      output_tokens: B.output_tokens,
      cache_read_input_tokens: B.cache_read_input_tokens,
      cache_creation_input_tokens: B.cache_creation_input_tokens,
      cost_usd_micros: Math.round(z * 1e6),
    }),
      (U += qW(z, W, B.model, o, void 0, d, _, C, A));
  }
  return U;
}

function _dt(e, t) {
  if (t === 0) return e;
  return e.map((r) => ({ ...r, oldStart: r.oldStart + t, newStart: r.newStart + t }));
}

function gj(e) {
  return e.replaceAll("&", E2e).replaceAll("$", C2e);
}

function A2e(e) {
  return e.replaceAll(E2e, "&").replaceAll(C2e, "$");
}

function hj(e, t, r, o) {
  let u = 0,
    d = 0;
  if (e.length === 0 && (r || o))
    (u = r
      ? Dn(
          r,
          `
`,
        ) + 1
      : 0),
      (d = o
        ? Dn(
            o,
            `
`,
          ) + 1
        : 0);
  else
    (u = e.reduce((_, C) => _ + Q(C.lines, (A) => A.startsWith("+")), 0)),
      (d = e.reduce((_, C) => _ + Q(C.lines, (A) => A.startsWith("-")), 0));
  jVt(u, d),
    KVt()?.add(u, { type: "added", model: t }),
    KVt()?.add(d, { type: "removed", model: t }),
    s("tengu_file_changed", { lines_added: u, lines_removed: d });
}

function iSe({
  filePath: e,
  oldContent: t,
  newContent: r,
  ignoreWhitespace: o = !1,
  singleHunk: u = !1,
  convertTabs: d = !1,
}) {
  let _ = d ? (A) => gj(pj(A)) : gj,
    C = Mye(e, e, _(t), _(r), void 0, void 0, { ignoreWhitespace: o, context: u ? 1e5 : GIe, timeout: n3 });
  if (!C) return [];
  return C.hunks.map((A) => ({ ...A, lines: A.lines.map(A2e) }));
}

function VL({ filePath: e, fileContents: t, edits: r, ignoreWhitespace: o = !1 }) {
  let u = gj(pj(t)),
    d = Mye(
      e,
      e,
      u,
      r.reduce((_, C) => {
        let { old_string: A, new_string: x } = C,
          M = "replace_all" in C ? C.replace_all : !1,
          F = gj(pj(A)),
          U = gj(pj(x));
        if (M) return _.replaceAll(F, () => U);
        else return _.replace(F, () => U);
      }, u),
      void 0,
      void 0,
      { context: GIe, ignoreWhitespace: o, timeout: n3 },
    );
  if (!d) return [];
  return d.hunks.map((_) => ({ ..._, lines: _.lines.map(A2e) }));
}

function LG(e, t, r) {
  switch (t.kind) {
    case "track":
      try {
        let o = e.snapshots.at(-1);
        if (!o) return e;
        let u = (e.trackSequence ?? 0) + 1;
        if (Td(o.trackedFileBackups, t.trackingPath)) return { ...e, trackSequence: u };
        let d = e.trackedFiles.has(t.trackingPath) ? e.trackedFiles : new Set(e.trackedFiles).add(t.trackingPath),
          _ = { ...o, trackedFileBackups: { ...o.trackedFileBackups, [t.trackingPath]: t.backup } },
          C = {
            ...e,
            snapshots: (() => {
              let A = e.snapshots.slice();
              return (A[A.length - 1] = _), A;
            })(),
            trackedFiles: d,
            trackSequence: u,
          };
        return (
          x2e(C),
          lzn(t.messageId, o.messageId, t.trackingPath, t.backup, r).catch((A) => {
            h(Error(`FileHistory: Failed to record delta: ${A}`));
          }),
          s("tengu_file_history_track_edit_success", { isNewFile: t.isAddingFile, version: t.backup.version }),
          n(`FileHistory: Tracked file modification for ${t.filePath}`),
          C
        );
      } catch (o) {
        return h(o), s("tengu_file_history_track_edit_failed", {}), e;
      }
    case "snapshot":
      try {
        let o = { ...t.trackedFileBackups },
          u = e.snapshots.at(-1);
        if (u)
          for (let F of e.trackedFiles) {
            if (Object.hasOwn(o, F)) continue;
            let U = Td(u.trackedFileBackups, F);
            if (U) FEe(o, F, U);
          }
        let d = new Date(),
          _ = {
            messageId: t.messageId,
            trackedFileBackups: o,
            timestamp: d,
            ...(t.preCheckpoint && { preCheckpoint: !0 }),
          },
          A = [
            ...(t.preCheckpoint
              ? e.snapshots.map((F) => {
                  if (F.messageId !== t.messageId || !F.preCheckpoint) return F;
                  let { preCheckpoint: U, ...B } = F;
                  return B;
                })
              : e.snapshots),
            _,
          ],
          x = A;
        if (A.length > RFe) (x = A.slice(-RFe)), g7t(A.slice(0, A.length - RFe), x, r).catch(h);
        let M = { ...e, snapshots: x, snapshotSequence: (e.snapshotSequence ?? 0) + 1 };
        return (
          x2e(M),
          C7t(e, M).catch(h),
          Ocn(t.messageId, _, !1, r).catch((F) => {
            h(Error(`FileHistory: Failed to record snapshot: ${F}`));
          }),
          n(`FileHistory: Added snapshot for ${t.messageId}, tracking ${e.trackedFiles.size} files`),
          s("tengu_file_history_snapshot_success", {
            trackedFilesCount: e.trackedFiles.size,
            snapshotCount: M.snapshots.length,
          }),
          M
        );
      } catch (o) {
        return h(o), s("tengu_file_history_snapshot_failed", {}), e;
      }
    case "touch":
      return { ...e, trackSequence: (e.trackSequence ?? 0) + 1 };
  }
}

async function g7t(e, t, r) {
  let o = K(),
    u = new Set();
  for (let _ of t)
    for (let C of Object.values(_.trackedFileBackups)) if (C.backupFileName !== null) u.add(C.backupFileName);
  let d = new Set();
  for (let _ of e)
    for (let C of Object.values(_.trackedFileBackups))
      if (C.backupFileName !== null && !u.has(C.backupFileName) && C.version !== 1 && k7t.test(C.backupFileName))
        d.add(C.backupFileName);
  for (let _ of d)
    try {
      if (r) {
        let C = await r.delete(w7t(_, o));
        if (!C.ok) n(`FileHistory: failed to delete evicted backup ${_}: ${C.error.code}`, { level: "error" });
      } else await Tge(qE(_, o));
    } catch (C) {
      if (!X(C)) n(`FileHistory: failed to delete evicted backup ${_}: ${C}`, { level: "error" });
    }
}

function Fy() {
  if (sn()) return !1;
  if (Le()) return h7t();
  return Lo("fileCheckpointingEnabled", !0).value && !a.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING;
}

function h7t() {
  return a.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING && !a.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING;
}

async function Nye(e, t, r, o) {
  if (!Fy()) {
    t({ kind: "touch" });
    return;
  }
  let u = L2e(r),
    d = e();
  if (!d) {
    t({ kind: "touch" });
    return;
  }
  let _ = d.snapshots.at(-1);
  if (!_) {
    n("FileHistory: Missing most recent snapshot", { level: "error" }),
      s("tengu_file_history_track_edit_failed", {}),
      t({ kind: "touch" });
    return;
  }
  if (Td(_.trackedFileBackups, u)) {
    t({ kind: "touch" });
    return;
  }
  for (let x of d.snapshots)
    if (Td(x.trackedFileBackups, u)) {
      t({ kind: "touch" });
      return;
    }
  let C;
  try {
    C = await O2e(r, 1);
  } catch (x) {
    n(`FileHistory: failed to back up ${r}: ${x instanceof Error ? x.message : String(x)}`, { level: "error" }),
      s("tengu_file_history_track_edit_failed", {}),
      t({ kind: "touch" });
    return;
  }
  let A = C.backupFileName === null;
  t({ kind: "track", trackingPath: u, filePath: r, backup: C, messageId: o, isAddingFile: A });
}

async function zW(e, t, r, o) {
  if (!Fy()) return;
  let u = e();
  if (!u) return;
  if (!o?.preCheckpoint && u.snapshots.some((C) => C.messageId === r && C.preCheckpoint)) return;
  let d = {},
    _ = u.snapshots.at(-1);
  if (_)
    n(`FileHistory: Making snapshot for message ${r}`),
      await Promise.all(
        Array.from(u.trackedFiles, async (C) => {
          try {
            let A = a3(C),
              x = Td(_.trackedFileBackups, C),
              M = P2e(x?.backupFileName),
              F = 0;
            for (let z of u.snapshots) {
              let pe = Td(z.trackedFileBackups, C);
              if (pe && i3(pe.version)) F = Math.max(F, pe.version);
              let fe = P2e(pe?.backupFileName);
              if (fe !== void 0) F = Math.max(F, fe);
            }
            let U = F + 1;
            if (!i3(U)) throw Error("FileHistory: no usable next version");
            let B;
            try {
              B = await JD(A);
            } catch (z) {
              if (!X(z)) throw z;
            }
            if (!B) {
              FEe(d, C, { backupFileName: null, version: U, backupTime: new Date(), realParentDir: await Sj(A) }),
                s("tengu_file_history_backup_deleted_file", { version: U }),
                n(`FileHistory: Missing tracked file: ${C}`);
              return;
            }
            let W = M !== void 0 ? M : x && i3(x.version) ? x.version : void 0;
            if (
              x &&
              typeof x.backupFileName === "string" &&
              bJ.test(x.backupFileName) &&
              W !== void 0 &&
              !(await Q9n(A, x.backupFileName, B))
            ) {
              FEe(
                d,
                C,
                x.realParentDir !== void 0 && W === x.version
                  ? x
                  : { ...x, version: W, realParentDir: x.realParentDir !== void 0 ? x.realParentDir : await Sj(A) },
              );
              return;
            }
            FEe(d, C, await O2e(A, U));
          } catch (A) {
            n(`FileHistory: Failed to back up ${C}: ${A}`, { level: "error" }),
              s("tengu_file_history_backup_file_failed", {});
          }
        }),
      );
  t({ kind: "snapshot", messageId: r, trackedFileBackups: d, ...(o?.preCheckpoint && { preCheckpoint: !0 }) });
}

async function U3e(e, t) {
  if (!Fy()) return;
  let r = e();
  if (!r) return;
  let o = r.snapshots.findLast((u) => u.messageId === t);
  if (!o)
    throw (
      (h(Error(`FileHistory: Snapshot for ${t} not found`)),
      s("tengu_file_history_rewind_failed", { trackedFilesCount: r.trackedFiles.size, snapshotFound: !1 }),
      Error("The selected snapshot was not found"))
    );
  try {
    n(`FileHistory: [Rewind] Rewinding to snapshot for ${t}`);
    let { filesChanged: u, skippedLinks: d } = await y7t(r, o);
    return (
      n(`FileHistory: [Rewind] Finished rewinding to ${t}`),
      s("tengu_file_history_rewind_success", {
        trackedFilesCount: r.trackedFiles.size,
        filesChangedCount: u.length,
        skippedLinksCount: d,
      }),
      { skippedLinks: d }
    );
  } catch (u) {
    throw (
      (h(u), s("tengu_file_history_rewind_failed", { trackedFilesCount: r.trackedFiles.size, snapshotFound: !0 }), u)
    );
  }
}

function B3e(e, t) {
  if (!Fy()) return !1;
  return e.snapshots.some((r) => r.messageId === t);
}

async function SIe(e, t) {
  if (!Fy()) return;
  let r = e.snapshots.findLast((C) => C.messageId === t);
  if (!r) return;
  let o = await Promise.all(
      Array.from(e.trackedFiles, async (C) => {
        try {
          let A = a3(C),
            x = Td(r.trackedFileBackups, C),
            M = x ? x.backupFileName : D2e(C, e)?.backupFileName;
          if (M === void 0)
            return (
              n("FileHistory: Error finding the backup file to apply", { level: "error" }),
              s("tengu_file_history_rewind_restore_file_failed", { dryRun: !0 }),
              null
            );
          let F = await S7t(A, M === null ? void 0 : M);
          if (F?.insertions || F?.deletions) return { filePath: A, stats: F };
          if (M === null && (await $a(A))) return { filePath: A, stats: F };
          return null;
        } catch (A) {
          return h(A), s("tengu_file_history_rewind_restore_file_failed", { dryRun: !0 }), null;
        }
      }),
    ),
    u = [],
    d = 0,
    _ = 0;
  for (let C of o) {
    if (!C) continue;
    u.push(C.filePath), (d += C.stats?.insertions || 0), (_ += C.stats?.deletions || 0);
  }
  return { filesChanged: u, insertions: d, deletions: _ };
}

async function y7t(e, t) {
  let r = [],
    o = 0;
  for (let u of e.trackedFiles)
    try {
      let d = a3(u),
        _ = Td(t.trackedFileBackups, u) ?? D2e(u, e),
        C = _?.backupFileName;
      if (C === void 0) {
        n("FileHistory: Error finding the backup file to apply", { level: "error" }),
          s("tengu_file_history_rewind_restore_file_failed", { dryRun: !1 });
        continue;
      }
      let A = await T7t(d, _?.realParentDir);
      if (A.verdict === "refused") {
        o++,
          s("tengu_file_history_rewind_restore_file_failed", { dryRun: !1 }),
          n(`FileHistory: [Rewind] Refusing to touch ${d}: ${A.detail}`, { level: "error" });
        continue;
      }
      if (C === null) {
        try {
          await Tge(d), n(`FileHistory: [Rewind] Deleted ${d}`), r.push(d);
        } catch (x) {
          let M = E(x);
          if (M === "ENOTDIR" || M === "ELOOP" || M === "EISDIR") {
            o++,
              s("tengu_file_history_rewind_restore_file_failed", { dryRun: !1 }),
              n(
                `FileHistory: [Rewind] Refusing to delete ${d}: path does not resolve or is not a regular file (${M})`,
                { level: "error" },
              );
            continue;
          }
          if (M === "EPERM") {
            let F = await mP(d).catch(() => {
              return;
            });
            if (F !== void 0 && !F.isFile()) {
              o++,
                s("tengu_file_history_rewind_restore_file_failed", { dryRun: !1 }),
                n(`FileHistory: [Rewind] Refusing to delete ${d}: destination is not a regular file (EPERM)`, {
                  level: "error",
                });
              continue;
            }
          }
          if (!X(x)) throw x;
        }
        continue;
      }
      if (await Q9n(d, C)) {
        let x = await v7t(d, C, _?.realParentDir);
        if (x === "restored") n(`FileHistory: [Rewind] Restored ${d} from ${C}`), r.push(d);
        else if (x === "refused") o++;
      }
    } catch (d) {
      n(`FileHistory: [Rewind] Failed to restore ${u}: ${d instanceof Error ? d.message : String(d)}`, {
        level: "error",
      }),
        s("tengu_file_history_rewind_restore_file_failed", { dryRun: !1 });
    }
  return CKe(), { filesChanged: r, skippedLinks: o };
}

async function Q9n(e, t, r) {
  let o = qE(t),
    u = r ?? null;
  if (!u)
    try {
      u = await JD(e);
    } catch (_) {
      if (!X(_)) return !0;
    }
  let d = null;
  try {
    d = await JD(o);
  } catch (_) {
    if (!X(_)) return !0;
  }
  return _7t(u, d, async () => {
    let [_, C] = await Promise.all([eL(e), eL(o, { noFollow: !0 })]);
    if (_ === null || C === null) return !0;
    return _ !== C;
  });
}

function _7t(e, t, r) {
  if ((e === null) !== (t === null)) return !0;
  if (e === null || t === null) return !1;
  if (!e.isFile() || !t.isFile()) return !0;
  if (e.mode !== t.mode || e.size !== t.size) return !0;
  if (e.mtimeMs < t.mtimeMs) return !1;
  return r();
}

async function S7t(e, t) {
  let r = [],
    o = 0,
    u = 0;
  try {
    let d = t ? qE(t) : void 0,
      [_, C] = await Promise.all([eL(e), d ? eL(d, { noFollow: !0 }) : null]);
    if (_ === null && C === null) return { filesChanged: r, insertions: o, deletions: u };
    r.push(e),
      Lye(_ ?? "", C ?? "").forEach((x) => {
        if (x.added) o += x.count || 0;
        if (x.removed) u += x.count || 0;
      });
  } catch (d) {
    h(Error(`FileHistory: Error generating diffStats: ${d}`));
  }
  return { filesChanged: r, insertions: o, deletions: u };
}

function b7t(e, t) {
  return `${d7t("sha256").update(e).digest("hex").slice(0, 16)}@v${t}`;
}

function R2e(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 1;
}

function i3(e) {
  return R2e(e) && R2e(e + 1);
}

function P2e(e) {
  if (typeof e !== "string") return;
  let t = e.match(/@v(\d+)$/),
    r = t ? Number(t[1]) : void 0;
  return r !== void 0 && i3(r) ? r : void 0;
}

function I2e(e, t) {
  if (typeof e !== "string" || !bJ.test(e)) throw Error("FileHistory: invalid backup file name");
  if (t && !JN(t)) throw Error("FileHistory: invalid session id");
}

function qE(e, t) {
  I2e(e, t);
  let r = be();
  return nL(r, "file-history", t || K(), e);
}

function w7t(e, t) {
  return I2e(e, t), Te.fileHistory(t || K(), e);
}

async function Sj(e) {
  let t = fP(e);
  try {
    return await _j(t);
  } catch (o) {
    if (!X(o)) throw o;
  }
  let r = t;
  for (;;) {
    let o = fP(r);
    if (o === r) return;
    r = o;
    try {
      await mP(r);
    } catch (u) {
      if (!X(u)) throw u;
      continue;
    }
    return _j(r)
      .then((u) => nL(u, vge(r, t)))
      .catch((u) => {
        if (X(u)) return;
        throw u;
      });
  }
}

async function O2e(e, t) {
  let r = b7t(e, t),
    o = qE(r),
    u;
  try {
    u = await JD(e);
  } catch (_) {
    if (X(_)) return { backupFileName: null, version: t, backupTime: new Date(), realParentDir: await Sj(e) };
    throw _;
  }
  if (!u.isFile()) throw Error("FileHistory: tracked path is not a regular file");
  await Tge(o).catch((_) => {
    if (!X(_)) throw _;
  });
  try {
    await kge(e, o);
  } catch (_) {
    if (!X(_)) throw _;
    await wge(fP(o), { recursive: !0 }), await kge(e, o);
  }
  await p7t(o, u.mode);
  let d = await Sj(e);
  return (
    s("tengu_file_history_backup_file_created", { version: t, fileSize: u.size }),
    { backupFileName: r, version: t, backupTime: new Date(), realParentDir: d }
  );
}

async function T7t(e, t) {
  let r = (o) => ({ verdict: "refused", detail: o });
  try {
    let o = await mP(e);
    if (o.isSymbolicLink()) return r("destination is a symlink");
    if (!o.isFile()) return r("destination is not a regular file");
    if (o.nlink > 1) return r(`destination is hard-linked (nlink=${o.nlink})`);
  } catch (o) {
    let u = E(o);
    if (u === "ELOOP" || u === "ENOTDIR") return r(`destination path does not resolve (${u})`);
    if (!X(o)) throw o;
  }
  if (t !== void 0) {
    let o = fP(e),
      u;
    try {
      u = await _j(o);
    } catch (_) {
      let C = E(_);
      if (C === "ELOOP" || C === "ENOTDIR") return r(`parent path does not resolve (${C})`);
      if (!X(_)) throw _;
      try {
        if ((await mP(o)).isSymbolicLink()) return r("parent directory is a dangling symlink");
      } catch (x) {
        if (!X(x)) throw x;
      }
      let A = o;
      for (;;) {
        let x = fP(A);
        if (x === A) break;
        A = x;
        try {
          await mP(A);
        } catch (M) {
          if (!X(M)) throw M;
          continue;
        }
        u = await _j(A)
          .then((M) => nL(M, vge(A, o)))
          .catch((M) => {
            if (X(M)) return;
            throw M;
          });
        break;
      }
    }
    if (u !== t) return r(`parent directory moved (${u} != ${t})`);
    let d = await JD(o).catch((_) => {
      if (X(_)) return;
      throw _;
    });
    if (d !== void 0 && !d.isDirectory()) return r("parent path is not a directory");
  }
  return { verdict: "safe" };
}

async function v7t(e, t, r) {
  let o = qE(t),
    u = (x) => (
      s("tengu_file_history_rewind_restore_file_failed", { dryRun: !1 }),
      n(`FileHistory: [Rewind] Refusing to restore ${e}: ${x}`, { level: "error" }),
      "refused"
    ),
    d;
  try {
    d = await JD(o);
  } catch (x) {
    if (X(x))
      return (
        s("tengu_file_history_rewind_restore_file_failed", { dryRun: !1 }),
        n(`FileHistory: [Rewind] Backup file not found: ${o}`, { level: "error" }),
        "backup-missing"
      );
    throw x;
  }
  if (!d.isFile()) return u("backup source is not a regular file");
  let _ = Rb.O_NONBLOCK ?? 0,
    C = Rb.O_NOFOLLOW ?? 0,
    A;
  try {
    A = await o3(o, Rb.O_RDONLY | _ | C);
  } catch (x) {
    let M = E(x);
    if (M === "ELOOP" || M === "EMLINK") return u("backup source became a symlink (O_NOFOLLOW)");
    throw x;
  }
  try {
    if (!(await A.stat()).isFile()) return u("backup source is not a regular file");
    let M = Rb.O_NOFOLLOW ?? 0,
      F = Rb.O_NONBLOCK ?? 0,
      U = Rb.O_WRONLY | Rb.O_CREAT | M | F,
      B = (me) => {
        let ge = E(me);
        return ge === "ELOOP" || ge === "EMLINK";
      },
      W = (me) => E(me) === "ENXIO",
      z = (me) => {
        let ge = E(me);
        return ge === "EISDIR" || ge === "ENOTDIR";
      },
      pe = d.mode & 511,
      fe;
    try {
      fe = await o3(e, U, pe);
    } catch (me) {
      if (B(me)) return u("destination became a symlink (O_NOFOLLOW)");
      if (W(me)) return u("destination became a FIFO (ENXIO)");
      if (z(me)) return u(`destination path was changed during restore (${E(me)})`);
      if (!X(me)) throw me;
      if (r !== void 0) {
        if (
          (await Sj(e).catch(() => {
            return;
          })) !== r
        )
          return u("parent chain changed before directory creation");
      }
      try {
        await wge(fP(e), { recursive: !0 });
      } catch (ge) {
        if (z(ge) || E(ge) === "EEXIST") return u(`destination path was changed during restore (${E(ge)})`);
        throw ge;
      }
      try {
        fe = await o3(e, U, pe);
      } catch (ge) {
        if (B(ge)) return u("destination became a symlink (O_NOFOLLOW)");
        if (W(ge)) return u("destination became a FIFO (ENXIO)");
        if (z(ge)) return u(`destination path was changed during restore (${E(ge)})`);
        throw ge;
      }
    }
    try {
      let me = await fe.stat({ bigint: !0 });
      if (!me.isFile()) return u("destination is not a regular file");
      if (me.nlink > 1) return u(`destination is hard-linked (nlink=${me.nlink})`);
      if (r !== void 0) {
        if (
          (await _j(fP(e)).catch(() => {
            return;
          })) !== r
        )
          return u("parent directory changed during restore");
      }
      let ge = await mP(e, { bigint: !0 }).catch(() => {
        return;
      });
      if (ge === void 0 || !ge.isFile() || ge.dev !== me.dev || (me.ino !== 0n && ge.ino !== me.ino))
        return u("destination changed identity during restore (fd/path mismatch)");
      await fe.truncate(0);
      let Ce = Buffer.allocUnsafe(65536);
      for (;;) {
        let { bytesRead: Ie } = await A.read(Ce, 0, Ce.length, null);
        if (Ie === 0) break;
        let Ee = 0;
        while (Ee < Ie) {
          let { bytesWritten: Pe } = await fe.write(Ce, Ee, Ie - Ee);
          if (Pe === 0) throw Error("write returned 0 bytes with data remaining");
          Ee += Pe;
        }
      }
      await fe.chmod(d.mode);
    } finally {
      await fe.close();
    }
  } finally {
    await A.close();
  }
  return "restored";
}

function D2e(e, t) {
  for (let r of t.snapshots) {
    let o = Td(r.trackedFileBackups, e);
    if (o !== void 0 && o.version === 1) return o;
  }
  return;
}

function L2e(e) {
  if (!M2e(e)) return e;
  let t = Se();
  if (e.startsWith(t)) return vge(t, e);
  return e;
}

function a3(e) {
  if (M2e(e)) return e;
  return nL(Se(), e);
}

function j3e(e, t) {
  if (!Fy()) return;
  let r = [],
    o = new Set();
  for (let u of e) {
    let d = {};
    for (let [_, C] of Object.entries(u.trackedFileBackups ?? {})) {
      let A = L2e(_);
      o.add(A), FEe(d, A, C);
    }
    r.push({ ...u, trackedFileBackups: d });
  }
  t({ snapshots: r, trackedFiles: o, snapshotSequence: r.length });
}

async function E7t(e, t, r, o) {
  let u = qE(e, t),
    d = nL(r, e),
    _;
  try {
    _ = await mP(u);
  } catch (C) {
    if (X(C))
      n(`FileHistory: Failed to copy backup ${e} on restore (backup file does not exist in ${t})`, { level: "error" });
    throw C;
  }
  if (!_.isFile()) throw Error("FileHistory: backup source is not a regular file");
  try {
    await m7t(u, d);
  } catch (C) {
    let A = E(C);
    if (A === "EEXIST") return;
    if (A === "ENOENT")
      throw (
        (n(`FileHistory: Failed to copy backup ${e} on restore (backup file does not exist in ${t})`, {
          level: "error",
        }),
        C)
      );
    n(`FileHistory: hard link failed (${A}), falling back to copy: ${u} -> ${d}`, { level: "error" });
    try {
      await kge(u, d);
    } catch (x) {
      if (Ht(x)) throw (n(`FileHistory: copy fallback failed for ${u}: ${x}`), x);
      throw (h(Error("FileHistory: Error copying over backup from previous session")), x);
    }
  }
  n(`FileHistory: Copied backup ${e} from session ${t} to ${o}`);
}

async function fut(e, t, r) {
  if (!Fy()) return;
  let o = e.fileHistorySnapshots;
  if (!o || e.messages.length === 0) return;
  let d = e.messages.at(-1)?.sessionId;
  if (!d) {
    h(Error("FileHistory: Failed to copy backups on restore (no previous session id)"));
    return;
  }
  let _ = t ?? K();
  if (d === _) {
    n(`FileHistory: No need to copy file history for resuming with same session id: ${_}`);
    return;
  }
  if (!JN(_)) {
    n("FileHistory: refusing to copy backups on restore (invalid target session id)", { level: "warn" });
    return;
  }
  try {
    let C = nL(be(), "file-history", _);
    await wge(C, { recursive: !0 });
    let A = 0;
    if (
      (await Promise.allSettled(
        o.map(async (x) => {
          let M = Object.values(x.trackedFileBackups).filter((B) => B.backupFileName !== null);
          if (
            !(await Promise.allSettled(M.map(({ backupFileName: B }) => E7t(B, d, C, _)))).some(
              (B) => B.status === "rejected",
            )
          )
            Ocn(x.messageId, x, !1, r).catch((B) => {
              h(Error("FileHistory: Failed to record copy backup snapshot"));
            });
          else A++;
        }),
      ),
      A > 0)
    )
      s("tengu_file_history_resume_copy_failed", { numSnapshots: o.length, failedSnapshots: A });
  } catch (C) {
    if (Zd(C) || Vp(C)) {
      n(`FileHistory: backup-dir mkdir failed for session ${_}: ${C}`, { level: "error" });
      return;
    }
    h(C);
  }
}

async function C7t(e, t) {
  let r = e.snapshots.at(-1),
    o = t.snapshots.at(-1);
  if (!o) return;
  for (let u of t.trackedFiles)
    try {
      let d = a3(u),
        _ = r ? Td(r.trackedFileBackups, u) : void 0,
        C = Td(o.trackedFileBackups, u);
      if (_?.backupFileName === C?.backupFileName && _?.version === C?.version) continue;
      let A = null;
      if (_?.backupFileName) {
        let M = qE(_.backupFileName);
        A = await eL(M, { noFollow: !0 });
      }
      let x = null;
      if (C?.backupFileName) {
        let M = qE(C.backupFileName);
        x = await eL(M, { noFollow: !0 });
      }
      if (A !== x) xE(d, A, x);
    } catch (d) {
      if (d instanceof Error && d.message.startsWith("FileHistory: invalid"))
        n(`FileHistory: skipping snapshot notification for ${u}: ${d.message}`, { level: "error" });
      else h(d);
    }
}

async function eL(e, t) {
  try {
    let r = Rb.O_NONBLOCK ?? 0,
      o = t?.noFollow ? (Rb.O_NOFOLLOW ?? 0) : 0,
      u = await o3(e, Rb.O_RDONLY | r | o);
    try {
      if (!(await u.stat()).isFile()) return null;
      return await u.readFile({ encoding: "utf-8" });
    } finally {
      await u.close();
    }
  } catch {
    return null;
  }
}

function x2e(e) {
  if (A7t) console.error(f7t(e, !1, 5));
}

function P7t(e) {
  return Vo(F2e("sha256").update(e).digest("hex").slice(0, 16));
}

function x7t(e) {
  return Vo(F2e("sha256").update(e).digest("hex"));
}

function D7t(e, t = R7t()) {
  let r = O7t.exec(e);
  if (r?.index === void 0) return {};
  let o = r[1] ?? r[2];
  if (o === void 0) return {};
  let u = e.slice(0, r.index);
  return {
    skill_file_name: Vo(I7t.has(o) ? o : "custom"),
    skill_file_scope: c(t.length > 0 && u === t ? "user" : "project"),
  };
}

function aS(e) {
  let t = { operation: c(e.operation), tool: c(e.tool), filePathHash: P7t(e.filePath) };
  if (e.content !== void 0 && e.content.length <= M7t) t.contentHash = x7t(e.content);
  if (e.type !== void 0) t.type = c(e.type);
  if (e.operation !== "read") {
    let r = D7t(e.filePath);
    if (r.skill_file_name !== void 0) t.skill_file_name = r.skill_file_name;
    if (r.skill_file_scope !== void 0) t.skill_file_scope = r.skill_file_scope;
  }
  s("tengu_file_operation", t);
}

async function ydt(e, t, r = "auto") {
  if (!(await Vg())) return null;
  if (await B2e()) return null;
  if (r === "branch") return N2e(e, t, !0);
  let u = await g3("HEAD", t);
  if (u === null) return Ege(t);
  if (u.stats.filesCount > bj) return { ...u, hunks: new Map(), source: { kind: "working-tree" } };
  if (r === "session")
    return (
      await Promise.all([H7t(u), p3(u, t, void 0, !0)]), { ...u, hunks: new Map(), source: { kind: "working-tree" } }
    );
  let d = await p3(u, t);
  if (r === "uncommitted" || u.stats.filesCount > 0)
    return { ...u, hunks: new Map(), source: { kind: "working-tree" } };
  let _ = await N2e(e, t, !1, d);
  if (_ === null || _.stats.filesCount === 0) return { ...u, hunks: new Map(), source: { kind: "working-tree" } };
  return _;
}

async function N2e(e, t, r, o) {
  let u = await G7t(e, t);
  if (u.kind === "error") return r ? Ege(t) : null;
  let d, _;
  if (u.kind !== "merge-base") {
    if (!r) return null;
    (d = await g3("HEAD", t)),
      (_ =
        u.kind === "head-is-base"
          ? { kind: "branch", baseBranch: u.baseBranch, baseRef: "HEAD" }
          : { kind: "working-tree" });
  } else (d = await g3(u.mergeBase, t)), (_ = { kind: "branch", baseBranch: u.baseBranch, baseRef: u.mergeBase });
  if (d === null) return u.kind === "merge-base" ? null : Ege(t);
  if (d.stats.filesCount <= bj) await p3(d, t, o);
  return { ...d, hunks: new Map(), source: _ };
}

async function H7t(e) {
  if (e.perFileStats.size === 0) return;
  let t = Hn(ee()) ?? ee(),
    r = pve();
  await Promise.all(
    Array.from(e.perFileStats, async ([o, u]) => {
      try {
        let d = await $2e(Age(t, o));
        if (Math.max(d.mtimeMs, d.ctimeMs) < r) u.preSession = !0;
      } catch {}
    }),
  );
}

async function p3(e, t, r, o = !1) {
  let u = Rge - e.perFileStats.size;
  if (u <= 0) return null;
  let d = r !== void 0 ? r : await K7t(u, t, o);
  if (d)
    for (let [_, C] of d) {
      if (e.perFileStats.has(_)) continue;
      e.perFileStats.set(_, C), (e.stats.filesCount += 1);
    }
  return d;
}

async function Ege(e) {
  if (
    (
      await $e(it(), ["--no-optional-locks", "rev-parse", "--verify", "--quiet", "HEAD"], {
        timeout: S7,
        preserveOutputOnError: !1,
        abortSignal: e,
      })
    ).exitCode !== 1
  )
    return null;
  let r = {
      stats: { filesCount: 0, linesAdded: 0, linesRemoved: 0 },
      perFileStats: new Map(),
      hunks: new Map(),
      source: { kind: "working-tree" },
      noCommits: !0,
    },
    o = await g3("--cached", e);
  if (o !== null) {
    if (((r.stats = o.stats), (r.perFileStats = o.perFileStats), o.stats.filesCount > bj)) return r;
    if (o.stats.filesCount > 0) await j7t(r, e);
  }
  return await p3(r, e), r;
}

async function j7t(e, t) {
  let r = await U2e(t);
  if (r === null) return;
  for (let [o, u] of r.perFileStats) {
    let d = e.perFileStats.get(o);
    if (d === void 0) continue;
    let _ = d.isBinary || u.isBinary,
      C = _ ? 0 : Math.max(0, d.added + u.added - u.removed);
    (e.stats.linesAdded += C - d.added), e.perFileStats.set(o, { added: C, removed: 0, isBinary: _, isUntracked: !1 });
  }
}

async function U2e(e) {
  let t = await $e(it(), ["--no-optional-locks", "-c", "diff.relative=false", "diff", "--numstat"], {
    timeout: S7,
    preserveOutputOnError: !1,
    abortSignal: e,
  });
  if (t.code !== 0) return null;
  return zIe(t.stdout, Number.POSITIVE_INFINITY);
}

async function g3(e, t) {
  let { stdout: r, code: o } = await $e(
    it(),
    ["--no-optional-locks", "-c", "diff.relative=false", "diff", e, "--shortstat"],
    { timeout: S7, preserveOutputOnError: !1, abortSignal: t },
  );
  if (o === 0) {
    let _ = Sdt(r);
    if (_ && _.filesCount > bj) return { stats: _, perFileStats: new Map() };
  }
  let { stdout: u, code: d } = await $e(
    it(),
    ["--no-optional-locks", "-c", "diff.relative=false", "diff", e, "--numstat"],
    { timeout: S7, preserveOutputOnError: !1, abortSignal: t },
  );
  if (d !== 0) return null;
  return zIe(u);
}

function R4e(e) {
  if (e.noCommits) return "--cached";
  return e.source.kind === "branch" ? e.source.baseRef : "HEAD";
}

async function V4n(e, t = "HEAD") {
  if (!(await Vg())) return null;
  if (await B2e()) return null;
  let { stdout: o, code: u } = await $e(
    it(),
    ["--no-optional-locks", "-c", "diff.relative=false", "diff", t, "--shortstat"],
    { timeout: S7, preserveOutputOnError: !1, abortSignal: e },
  );
  if (u === 0) {
    let A = Sdt(o);
    if (A && A.filesCount > bj) return { hunks: new Map(), skippedLarge: new Set() };
  }
  let { stdout: d, code: _ } = await $e(it(), ["--no-optional-locks", "-c", "diff.relative=false", "diff", ...oJe, t], {
    timeout: S7,
    preserveOutputOnError: !1,
    abortSignal: e,
  });
  if (_ !== 0) return null;
  let C = W7t(d);
  if (t === "--cached" && C.hunks.size > 0) {
    let A = await U2e(e);
    if (A === null) return null;
    for (let x of A.perFileStats.keys()) C.hunks.delete(x);
  }
  return C;
}

async function Wan(e) {
  let { stdout: t, code: r } = await $e(it(), ["--no-optional-locks", "rev-parse", "--show-toplevel"], {
    timeout: S7,
    preserveOutputOnError: !1,
    abortSignal: e,
  });
  if (r !== 0 || t.trim() === "") return null;
  return t.trim();
}

function zIe(e, t = Rge) {
  let r = e
      .trim()
      .split(`
`)
      .filter(Boolean),
    o = 0,
    u = 0,
    d = 0,
    _ = new Map();
  for (let C of r) {
    let A = C.split("\t");
    if (A.length < 3) continue;
    d++;
    let x = A[0],
      M = A[1],
      F = A.slice(2).join("\t"),
      U = x === "-" || M === "-",
      B = U ? 0 : parseInt(x ?? "0", 10) || 0,
      W = U ? 0 : parseInt(M ?? "0", 10) || 0;
    if (((o += B), (u += W), _.size < t)) _.set(F, { added: B, removed: W, isBinary: U, isUntracked: !1 });
  }
  return { stats: { filesCount: d, linesAdded: o, linesRemoved: u }, perFileStats: _ };
}

function W7t(e) {
  let t = new Map(),
    r = new Set();
  if (!e.trim()) return { hunks: t, skippedLarge: r };
  let o = e.split(/^diff --git /m).filter(Boolean);
  for (let u of o) {
    if (t.size + r.size >= Rge) break;
    let d = u.indexOf(`
`),
      C = (d === -1 ? u : u.slice(0, d)).match(/^a\/(.+?) b\/(.+)$/);
    if (!C) continue;
    let A = C[2] ?? C[1] ?? "";
    if (u.length > SFt) {
      r.add(A);
      continue;
    }
    let x = u.split(`
`),
      M = [],
      F = null,
      U = 0;
    for (let B = 1; B < x.length; B++) {
      let W = x[B] ?? "",
        z = W.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      if (z) {
        if (F) M.push(F);
        F = {
          oldStart: parseInt(z[1] ?? "0", 10),
          oldLines: parseInt(z[2] ?? "1", 10),
          newStart: parseInt(z[3] ?? "0", 10),
          newLines: parseInt(z[4] ?? "1", 10),
          lines: [],
        };
        continue;
      }
      if (
        W.startsWith("index ") ||
        W.startsWith("---") ||
        W.startsWith("+++") ||
        W.startsWith("new file") ||
        W.startsWith("deleted file") ||
        W.startsWith("old mode") ||
        W.startsWith("new mode") ||
        W.startsWith("Binary files")
      )
        continue;
      if (F && (W.startsWith("+") || W.startsWith("-") || W.startsWith(" ") || W === "")) {
        if (U >= jan) continue;
        F.lines.push("" + W), U++;
      }
    }
    if (F) M.push(F);
    if (M.length > 0) t.set(A, M);
  }
  return { hunks: t, skippedLarge: r };
}

async function B2e() {
  let e = await l4(ee());
  if (!e) return !1;
  return (
    await Promise.all(
      ["MERGE_HEAD", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD"].map((o) =>
        L7t(Age(e, o))
          .then(() => !0)
          .catch(() => !1),
      ),
    )
  ).some(Boolean);
}

async function G7t(e, t) {
  let r = z7t.of(e),
    o = await q7t(t);
  if (o.kind === "error") {
    if (!r.baseResolveSadLogged) r.markBaseResolveSadLogged(), g("diff_base_resolve", o.reason);
  } else if (!r.baseResolveOkLogged) r.markBaseResolveOkLogged(), y("diff_base_resolve", { outcome: c(o.kind) });
  return o;
}

async function q7t(e) {
  let [t, r] = await Promise.all([cl(), Cw()]);
  if (!t || t === "HEAD") return { kind: "none" };
  if (r.startsWith("-")) return { kind: "none" };
  if (t === r) return { kind: "head-is-base", baseBranch: r };
  let o = { timeout: S7, preserveOutputOnError: !1, abortSignal: e },
    u = !1,
    d = await j2e(r, async (C) => {
      let A = await $e(it(), C, o);
      if (A.exitCode === 1) u = !0;
      return A;
    });
  if (!d) {
    if (u) return { kind: "none" };
    for (let C of [`refs/remotes/origin/${r}`, `refs/heads/${r}`]) {
      let A = await $e(it(), ["--no-optional-locks", "show-ref", "--verify", "--quiet", C], o);
      if (A.exitCode === 0 || A.exitCode === void 0) return { kind: "error", reason: "merge_base_failed" };
    }
    return { kind: "none" };
  }
  let _ = await $e(it(), ["--no-optional-locks", "rev-parse", "HEAD"], o);
  if (_.code !== 0) return { kind: "error", reason: "head_rev_parse_failed" };
  if (_.stdout.trim() === d) return { kind: "head-is-base", baseBranch: r };
  return { kind: "merge-base", mergeBase: d, baseBranch: r };
}

async function K7t(e, t, r = !1) {
  let { stdout: o, code: u } = await $e(
    it(),
    ["--no-optional-locks", "ls-files", "--others", "--exclude-standard", "--full-name"],
    { timeout: S7, preserveOutputOnError: !1, abortSignal: t },
  );
  if (u !== 0 || !o.trim()) return null;
  let d = o
    .trim()
    .split(`
`)
    .filter(Boolean);
  if (d.length === 0) return null;
  let _ = Hn(ee()) ?? ee(),
    C = pve(),
    A = await Promise.all(
      d.slice(0, B7t).map(async (F) => {
        try {
          let U = await $2e(Age(_, F));
          return { filePath: F, preSession: Math.max(U.mtimeMs, U.ctimeMs) < C };
        } catch {
          return { filePath: F, preSession: !1 };
        }
      }),
    ),
    x = A.filter((F) => !F.preSession);
  if (r) x.push(...A.filter((F) => F.preSession));
  if (x.length === 0) return null;
  let M = new Map();
  for (let { filePath: F, preSession: U } of x.slice(0, e))
    M.set(F, { added: 0, removed: 0, isBinary: !1, isUntracked: !0, ...(U && { preSession: U }) });
  return M;
}

function Sdt(e) {
  let t = e.match(/(\d+)\s+files?\s+changed(?:,\s+(\d+)\s+insertions?\(\+\))?(?:,\s+(\d+)\s+deletions?\(-\))?/);
  if (!t) return null;
  return {
    filesCount: parseInt(t[1] ?? "0", 10),
    linesAdded: parseInt(t[2] ?? "0", 10),
    linesRemoved: parseInt(t[3] ?? "0", 10),
  };
}

async function y3(e) {
  let t = Hn(N7t(e));
  if (!t) return null;
  let r = $7t(t, e).split(U7t).join("/"),
    o = ovn(),
    { code: u } = await qe(it(), ["--no-optional-locks", "ls-files", "--error-unmatch", "--", r], {
      cwd: t,
      timeout: Cge,
    });
  if (u === 0) {
    let _ = await Y7t(t),
      { stdout: C, code: A } = await qe(it(), ["--no-optional-locks", "diff", ...oJe, _, "--", r], {
        cwd: t,
        timeout: Cge,
      });
    if (A !== 0) return null;
    if (!C) return null;
    return { ...V7t(r, C, "modified"), repository: o };
  }
  let d = await X7t(r, e);
  if (!d) return null;
  return { ...d, repository: o };
}

function V7t(e, t, r) {
  let o = t.split(`
`),
    u = [],
    d = !1,
    _ = 0,
    C = 0;
  for (let A of o) {
    if (A.startsWith("@@")) d = !0;
    if (d) {
      if ((u.push(A), A.startsWith("+") && !A.startsWith("+++"))) _++;
      else if (A.startsWith("-") && !A.startsWith("---")) C++;
    }
  }
  return {
    filename: e,
    status: r,
    additions: _,
    deletions: C,
    changes: _ + C,
    patch: u.join(`
`),
  };
}

async function j2e(e, t) {
  let r = [];
  for (let _ of [`origin/${e}`, e]) {
    let { stdout: C, code: A } = await t(["--no-optional-locks", "merge-base", "HEAD", _]);
    if (A === 0 && C.trim()) r.push(C.trim());
  }
  let [o, u] = r;
  if (!o) return null;
  if (!u || o === u) return o;
  let { code: d } = await t(["--no-optional-locks", "merge-base", "--is-ancestor", o, u]);
  return d === 0 ? u : o;
}

async function Y7t(e) {
  let t = C0e(e),
    r = (t !== void 0 ? E0e().get(t) : void 0) || a.CLAUDE_CODE_BASE_REF;
  function o(C) {
    return qe(it(), C, { cwd: e, timeout: Cge });
  }
  if (!r) {
    let C = await Cw();
    if (C.startsWith("-")) return "HEAD";
    return (await j2e(C, o)) ?? "HEAD";
  }
  let u = r.startsWith("-") ? "HEAD" : r,
    { stdout: d, code: _ } = await o(["--no-optional-locks", "merge-base", "HEAD", u]);
  if (_ === 0 && d.trim()) return d.trim();
  return "HEAD";
}

async function X7t(e, t) {
  try {
    if (!(await nVt(t, SFt))) return null;
    let o = (await F7t(t, "utf-8")).split(`
`);
    if (o.length > 0 && o.at(-1) === "") o.pop();
    let u = o.length,
      d = o
        .map((C) => `+${C}`)
        .join(`
`),
      _ = `@@ -0,0 +1,${u} @@
${d}`;
    return { filename: e, status: "added", additions: u, deletions: 0, changes: u, patch: _ };
  } catch {
    return null;
  }
}

async function _3(e, t, r) {
  let o = AGe().remote;
  if (o === void 0 || !o.applies(e))
    return Tj(e) && ow(t) ? { where: "refused", message: vOe() ? yQn() : Syt() } : { where: "here", input: t };
  let u = await o.route(e, t, r);
  return u.kind === "local" ? { where: "here", input: u.input } : { where: "elsewhere", route: u, hosts: o };
}

function Tj(e) {
  return !1;
}

function rL(e) {
  return;
}

function k3() {
  return Q7t().value;
}

function Q7t() {
  let e = Zn.CLAUDE_CODE_AUTO_MODE_EDIT_REMOVAL;
  if (e !== void 0) return { value: e, src: "env" };
  let t = Xl();
  return typeof t?.editRemovalVisibility === "boolean"
    ? { value: t.editRemovalVisibility, src: "gb" }
    : { value: !1, src: "default" };
}

function W2e() {
  return Z7t().value;
}

function Z7t() {
  let e = Zn.CLAUDE_CODE_AUTO_MODE_EDIT_REMOVAL_CAP;
  if (e !== void 0) return { value: e, src: "env" };
  let r = Xl()?.editRemovalCap;
  return typeof r === "number" && Number.isFinite(r) ? { value: r, src: "gb" } : { value: J7t, src: "default" };
}

function z2e(e, t, r) {
  if (!cyt(e)) return null;
  if (!SEn(t).isValid) return null;
  let u = r(),
    d = SEn(u);
  if (!d.isValid)
    return {
      result: !1,
      message: `Claude Code settings.json validation failed after edit:
${d.error}

Full schema:
${d.fullSchema}
IMPORTANT: Do not update the env unless explicitly instructed to do so.`,
      errorCode: 10,
    };
  return null;
}

function G2e(e) {
  if (!He(e)) return null;
  let t = { ...e },
    r = [];
  if ("replace_name" in t) {
    let o = t.replace_name;
    if (!("replace_all" in t)) t.replace_all = o === !0 || o === "true";
    delete t.replace_name, r.push("alias_replace_name");
  }
  if ("path" in t && !("file_path" in t) && typeof t.path === "string")
    (t.file_path = t.path), delete t.path, r.push("path");
  if ("old_str" in t && !("old_string" in t) && typeof t.old_str === "string")
    (t.old_string = t.old_str), delete t.old_str, r.push("old_str");
  if ("new_str" in t && !("new_string" in t) && typeof t.new_str === "string")
    (t.new_string = t.new_str), delete t.new_str, r.push("new_str");
  return r.length ? { input: t, shapeClass: r.join(",") } : null;
}

function eJt() {
  return `
- You must use your \`${_t}\` tool at least once in the conversation before editing. This tool will error if you attempt an edit without reading the file.`;
}

function tJt() {
  return `
- If the file is outside the working directory, you must use your \`${_t}\` tool to read it before editing. This tool will error if you edit such a file without reading it first.`;
}

function q2e(e) {
  return nJt(e);
}

function nJt(e) {
  let t = lOe(),
    r = !u6() && WLe(e);
  if (td(e)) {
    let d = t ? "line number + a single tab or `:`" : "line number + tab";
    return `Performs exact string replacement in a file.
${
  r
    ? `
- If the file is outside the working directory, you must ${_t} it in this conversation before editing, or the call will fail.`
    : `
- You must ${_t} the file in this conversation before editing, or the call will fail.`
}
- \`old_string\` must match the file exactly, including indentation, and be unique \u2014 the edit fails otherwise. Strip the Read line prefix (${d}) before matching.
- \`replace_all: true\` replaces every occurrence instead.`;
  }
  let o = t ? "line number + a single separator character (a tab or `:`)" : "line number + tab",
    u = I("tengu_edit_minimalanchor_jrn", !1)
      ? "\n- Keep `old_string` minimal \u2014 usually 1-3 lines, only enough to be unique in the file. Including excess context wastes tokens and is an error.\n- The edit will FAIL if `old_string` is not unique in the file. In that case, add the minimum extra context needed for uniqueness, or use `replace_all` to change every instance."
      : "\n- The edit will FAIL if `old_string` is not unique in the file. Either provide a larger string with more surrounding context to make it unique or use `replace_all` to change every instance of `old_string`.";
  return `Performs exact string replacements in files.

Usage:${r ? tJt() : eJt()}
- When editing text from Read tool output, ensure you preserve the exact indentation (tabs/spaces) as it appears AFTER the line number prefix. The line number prefix format is: ${o}. Everything after that is the actual file content to match. Never include any part of the line number prefix in the old_string or new_string.
- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required.
- Only use emojis if the user explicitly requests it. Avoid adding emojis to files unless asked.${u}
- Use \`replace_all\` for replacing and renaming strings across the file. This parameter is useful if you want to rename a variable for instance.`;
}

function v3(e) {
  if (!e) return "Update";
  if (e.file_path?.startsWith(va())) return "Updated plan";
  if (e.edits != null) return "Update";
  if (e.old_string === "") return "Create";
  return "Update";
}

function Mge(e) {
  if (!e?.file_path) return null;
  return Fo(e.file_path);
}

function Ige(e) {
  let { content: t } = sJt.of(G().host).readFile(e);
  return t;
}

function Y2e(e) {
  return e.replaceAll(Fge, "'").replaceAll(E3, "'").replaceAll(Nge, '"').replaceAll($ge, '"');
}

function Uge(e) {
  let t = e.split(/(\r\n|\n|\r)/),
    r = "";
  for (let o = 0; o < t.length; o++) {
    let u = t[o];
    if (u !== void 0)
      if (o % 2 === 0) r += u.replace(/\s+$/, "");
      else r += u;
  }
  return r;
}

function Dge(e) {
  return e.replace(/(\\\\)|\\u([0-9a-fA-F]{4})/g, (t, r, o) =>
    r !== void 0 ? t : String.fromCharCode(parseInt(o, 16)),
  );
}

function X2e(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let o = e.charCodeAt(r);
    if (o >= 128) {
      t += "\\\\u";
      for (let u of o.toString(16).padStart(4, "0")) t += u >= "a" ? `[${u}${u.toUpperCase()}]` : u;
    } else t += Vu(e[r]);
  }
  return t;
}

function Q2e(e) {
  return Bge.test(e) || Hge.test(e);
}

function J2e(e, t, r) {
  if (e === t) return r;
  if (Hge.test(e) && new RegExp(`^${X2e(e)}$`).test(t)) {
    let o = new Map(),
      u = 0,
      d = 0;
    for (let _ = 0, C = 0; _ < e.length; _++) {
      let A = e.charCodeAt(_);
      if (A >= 128) {
        let x = t.slice(C + 2, C + 6);
        o.set(A, x);
        for (let M of x)
          if (M >= "a" && M <= "f") d++;
          else if (M >= "A" && M <= "F") u++;
        C += 6;
      } else C += 1;
    }
    return r.replace(/[\u0080-\uffff]/g, (_) => {
      let C = _.charCodeAt(0),
        A = o.get(C);
      if (A !== void 0) return "\\u" + A;
      let x = C.toString(16).padStart(4, "0");
      return "\\u" + (u > d ? x.toUpperCase() : x);
    });
  }
  if (Bge.test(e) && Dge(e) === t) return Dge(r);
  return r;
}

function Vle(e, t) {
  if (e.includes(t)) return t;
  let r = Y2e(t),
    u = Y2e(e).indexOf(r);
  if (u !== -1) return e.substring(u, u + t.length);
  if (Bge.test(t)) {
    let d = Dge(t);
    if (d !== t && e.includes(d)) return d;
  }
  if (Hge.test(t)) {
    let d = e.match(new RegExp(X2e(t)));
    if (d) return d[0];
  }
  return null;
}

function YIe(e, t, r) {
  if (e === t) return r;
  let o = t.includes(Nge) || t.includes($ge),
    u = t.includes(Fge) || t.includes(E3);
  if (!o && !u) return r;
  let d = r;
  if (o) d = aJt(d);
  if (u) d = lJt(d);
  return d;
}

function Z2e(e, t) {
  if (t === 0) return !0;
  let r = e[t - 1];
  return (
    r === " " ||
    r === "\t" ||
    r ===
      `
` ||
    r === "\r" ||
    r === "(" ||
    r === "[" ||
    r === "{" ||
    r === "\u2014" ||
    r === "\u2013"
  );
}

function aJt(e) {
  let t = [...e],
    r = [];
  for (let o = 0; o < t.length; o++)
    if (t[o] === '"') r.push(Z2e(t, o) ? Nge : $ge);
    else r.push(t[o]);
  return r.join("");
}

function lJt(e) {
  let t = [...e],
    r = [];
  for (let o = 0; o < t.length; o++)
    if (t[o] === "'") {
      let u = o > 0 ? t[o - 1] : void 0,
        d = o < t.length - 1 ? t[o + 1] : void 0,
        _ = u !== void 0 && /\p{L}/u.test(u),
        C = d !== void 0 && /\p{L}/u.test(d);
      if (_ && C) r.push(E3);
      else r.push(Z2e(t, o) ? Fge : E3);
    } else r.push(t[o]);
  return r.join("");
}

function cJt(e, t, r, o = !1) {
  let u = o ? (_, C, A) => _.replaceAll(C, () => A) : (_, C, A) => _.replace(C, () => A);
  if (r !== "") return u(e, t, r);
  return !t.endsWith(`
`) &&
    e.includes(
      t +
        `
`,
    )
    ? u(
        e,
        t +
          `
`,
        r,
      )
    : u(e, t, r);
}

function Idt({ filePath: e, fileContents: t, oldString: r, newString: o, replaceAll: u = !1 }) {
  return Kan({ filePath: e, fileContents: t, edits: [{ old_string: r, new_string: o, replace_all: u }] });
}

function Kan({ filePath: e, fileContents: t, edits: r }) {
  if (tVe(t, r))
    return {
      patch: VL({ filePath: e, fileContents: t, edits: [{ old_string: t, new_string: t, replace_all: !1 }] }),
      updatedFile: "",
    };
  let o = Lge(t, r);
  return { patch: iSe({ filePath: e, oldContent: pj(t), newContent: pj(o) }), updatedFile: o };
}

function tVe(e, t) {
  return !e && t.length === 1 && t[0] !== void 0 && t[0].old_string === "" && t[0].new_string === "";
}

function Lge(e, t) {
  if (tVe(e, t)) return "";
  let r = e,
    o = [];
  for (let u of t) {
    let d = u.old_string.replace(/\n+$/, "");
    for (let C of o)
      if (d !== "" && C.includes(d))
        throw Error("Cannot edit file: old_string is a substring of a new_string from a previous edit.");
    let _ = r;
    if (((r = u.old_string === "" ? u.new_string : cJt(r, u.old_string, u.new_string, u.replace_all)), r === _))
      throw new EY("String not found in file. Failed to apply edit.");
    o.push(u.new_string);
  }
  if (r === e) throw Error("Original and edited file match exactly. Failed to apply edit.");
  return r;
}

function nVe(e, t) {
  let r = Mye("file.txt", "file.txt", e, t, void 0, void 0, { context: 8, timeout: n3 });
  if (!r) return "";
  let o = lOe(),
    u = r.hunks
      .map((F) => ({
        startLine: F.oldStart,
        content: F.lines
          .filter((U) => !U.startsWith("-") && !U.startsWith("\\"))
          .map((U) => U.slice(1))
          .join(`
`),
        tabAwareSeparator: o,
      }))
      .map(eVt)
      .join(`
...
`);
  if (u.length <= Oge) return u;
  let d = u.lastIndexOf(
      `
`,
      Oge,
    ),
    _ = d > 0 ? u.slice(0, d) : u.slice(0, Oge),
    C = 1,
    A = 1,
    M =
      Dn(
        u,
        `
`,
        _.length + C,
      ) + A;
  return `${_}

... [${M} lines truncated] ...`;
}

function lqn(e) {
  return e.map((t) => {
    let r = [],
      o = [];
    for (let u of t.lines)
      if (u.startsWith(" ")) r.push(u.slice(1)), o.push(u.slice(1));
      else if (u.startsWith("-")) r.push(u.slice(1));
      else if (u.startsWith("+")) o.push(u.slice(1));
    return {
      old_string: r.join(`
`),
      new_string: o.join(`
`),
      replace_all: !1,
    };
  });
}

function dJt(e) {
  let t = e,
    r = [];
  for (let [o, u] of Object.entries(uJt)) {
    let d = t;
    if (((t = t.replaceAll(o, u)), d !== t)) r.push({ from: o, to: u });
  }
  return { result: t, appliedReplacements: r };
}

function C3({ file_path: e, edits: t }) {
  if (t.length === 0) return { file_path: e, edits: t };
  let r = /\.(md|mdx)$/i.test(e);
  try {
    let o = gt(e);
    if (((Bn(e) || Bn(o)) && !(Ms(e) || Ms(o))) || vu(e) || vu(o) || _r(e) || _r(o)) return { file_path: e, edits: t };
    let u = Ige(o);
    return {
      file_path: e,
      edits: t.map(({ old_string: d, new_string: _, replace_all: C }) => {
        let A = r ? _ : Uge(_);
        if (u.includes(d)) return { old_string: d, new_string: A, replace_all: C };
        let { result: x, appliedReplacements: M } = dJt(d);
        if (u.includes(x)) {
          let F = A;
          for (let { from: U, to: B } of M) F = F.replaceAll(U, B);
          return { old_string: x, new_string: F, replace_all: C };
        }
        return { old_string: d, new_string: A, replace_all: C };
      }),
    };
  } catch (o) {
    if (!X(o))
      n(`Failed to read ${e} for edit normalization: ${o instanceof Error ? o.message : String(o)}`, {
        level: "error",
      });
  }
  return { file_path: e, edits: t };
}

function pJt(e, t, r) {
  if (
    e.length === t.length &&
    e.every((C, A) => {
      let x = t[A];
      return (
        x !== void 0 &&
        C.old_string === x.old_string &&
        C.new_string === x.new_string &&
        C.replace_all === x.replace_all
      );
    })
  )
    return !0;
  let o = null,
    u = null,
    d = null,
    _ = null;
  try {
    o = Lge(r, e);
  } catch (C) {
    u = l(C);
  }
  try {
    d = Lge(r, t);
  } catch (C) {
    _ = l(C);
  }
  if (u !== null && _ !== null) return u === _;
  if (u !== null || _ !== null) return !1;
  return o === d;
}

function oVe(e, t) {
  if (e.file_path !== t.file_path) return !1;
  if (
    e.edits.length === t.edits.length &&
    e.edits.every((o, u) => {
      let d = t.edits[u];
      return (
        d !== void 0 &&
        o.old_string === d.old_string &&
        o.new_string === d.new_string &&
        o.replace_all === d.replace_all
      );
    })
  )
    return !0;
  let r = "";
  if ((!Bn(e.file_path) || Ms(e.file_path)) && !vu(e.file_path) && !_r(e.file_path) && !_r(iJt(e.file_path)))
    try {
      r = Ige(e.file_path);
    } catch (o) {
      if (!X(o)) throw o;
    }
  return pJt(e.edits, t.edits, r);
}

function cVe(e, t) {
  if (t.remoteCall === void 0) return e;
  let { file_path: r, edits: o } = C3({
      file_path: e.file_path,
      edits: [{ old_string: e.old_string, new_string: e.new_string, replace_all: e.replace_all ?? !1 }],
    }),
    [u] = o;
  return u === void 0 ? e : { ...e, file_path: r, old_string: u.old_string, new_string: u.new_string };
}

async function fJt(e, t, r) {
  let {
      options: o,
      permissionLayers: u,
      readFileState: d,
      userModified: _,
      getFileHistoryState: C,
      applyFileHistoryOp: A,
      dynamicSkillDirTriggers: x,
    } = t,
    { file_path: M, replace_all: F = !1 } = e,
    { old_string: U, new_string: B } = e,
    W = gt(M),
    z = uU(t, W);
  if (PLe(W, he(t))) throw new EY(gbn);
  if ((({ old_string: U, new_string: B } = cVe(e, t)), !a.CLAUDE_CODE_SIMPLE && t.remoteCall === void 0))
    await oL(t.session.host, W, x, t.storageV5);
  if (t.remoteCall === void 0) await Ree.of(t.session).beforeFileEdited(W);
  await Nye(C, A, W, r.uuid);
  let {
      originalFileContents: pe,
      actualOldString: fe,
      updatedFile: me,
      patch: ge,
      staleRecovered: Ce,
      memdirStamped: Ie,
    } = await dj(W, async () => {
      let Fe = await Fk(W, z, { createParents: U === "" });
      try {
        let { content: Be, fileExists: ze, encoding: We, lineEndings: Ve } = await gJt(Fe),
          Pt = d.get(W),
          ct =
            ze &&
            hJt({
              absoluteFilePath: W,
              fileContents: Be,
              lastRead: Pt,
              oldString: U,
              replaceAll: F,
              model: Ye(cm({ options: o, permissionLayers: u })),
              servedCall: t.remoteCall !== void 0,
              readNotAutoAllowed: () => !nY(Kt, W, t, he(t)),
            }),
          ut = Vle(Be, U) || U,
          en = J2e(U, ut, YIe(U, ut, B)),
          nn = Idt({ filePath: W, fileContents: Be, oldString: ut, newString: en, replaceAll: F }),
          xt = ID(W, nn.updatedFile),
          tt = xt !== nn.updatedFile,
          lt = !tt ? nn.patch : iSe({ filePath: W, oldContent: Be, newContent: xt, convertTabs: !0 }),
          mt;
        await Fe.recheckBeforeWrite();
        try {
          mt = await gJ(Fe.ioPath, xt, We, Ve);
        } catch (nt) {
          throw (Dp(W), nt);
        }
        let Xe = _ || tt || (ze && (!aY(Pt) || ct));
        if (
          (d.set(W, {
            content: JE(xt),
            timestamp: mt,
            offset: void 0,
            limit: void 0,
            ...(Xe && { contentNotInModelContext: !0 }),
          }),
          We === "utf8" && Ve !== "CRLF")
        )
          cV(W, xt);
        else Dp(W);
        return {
          originalFileContents: Be,
          actualOldString: ut,
          updatedFile: xt,
          patch: lt,
          staleRecovered: ct,
          memdirStamped: tt,
        };
      } catch (Be) {
        eV(Be, Fe, W);
      } finally {
        await Fe.close();
      }
    }),
    Ee = t.remoteCall === void 0 ? Cye() : void 0;
  if (Ee)
    j6(t.session, W),
      W6(t.session, W),
      Ee.changeFile(W, me).catch((Fe) => {
        n(`LSP: Failed to notify server of file change for ${W}: ${Fe.message}`, { level: "error" });
      }),
      Ee.saveFile(W).catch((Fe) => {
        n(`LSP: Failed to notify server of file save for ${W}: ${Fe.message}`, { level: "error" });
      });
  if ((xE(W, pe, me), W.endsWith(`${mJt}CLAUDE.md`))) s("tengu_write_claudemd", {});
  hj(ge, r.message.model),
    aS({ operation: "edit", tool: "FileEditTool", filePath: W }),
    s("tengu_edit_string_lengths", {
      oldStringBytes: Buffer.byteLength(U, "utf8"),
      newStringBytes: Buffer.byteLength(B, "utf8"),
      replaceAll: F,
    });
  let Pe;
  if (a.CLAUDE_CODE_REMOTE) {
    let Fe = Date.now(),
      Be = await y3(W);
    if (Be) Pe = Be;
    s("tengu_tool_use_diff_computed", { isEditTool: !0, durationMs: Date.now() - Fe, hasDiff: !!Be });
  }
  return {
    data: {
      filePath: M,
      oldString: fe,
      newString: B,
      originalFile: pe,
      structuredPatch: ge,
      userModified: _ ?? !1,
      replaceAll: F,
      ...(Ce && { staleRecovered: !0 }),
      ...(Ie && { memdirStamped: !0 }),
      ...(Pe && { gitDiff: Pe }),
    },
  };
}

async function gJt(e) {
  let t = await e.readExisting();
  if (t === null) return { content: "", fileExists: !1, encoding: "utf8", lineEndings: "LF" };
  return { ...t, fileExists: !0 };
}

function jge(e, t, r) {
  if (t === "") return "no_match";
  let o = Vle(e, t);
  if (!o) return "no_match";
  if (!r) {
    let u = e.indexOf(o);
    if (e.indexOf(o, u + o.length) !== -1) return "ambiguous";
  }
  return "applies";
}

function hJt({
  absoluteFilePath: e,
  fileContents: t,
  lastRead: r,
  oldString: o,
  replaceAll: u,
  model: d,
  servedCall: _,
  readNotAutoAllowed: C,
}) {
  if (!r) {
    if ((_ || !jLe(d)) && !C()) return !1;
    throw new EY(P3t);
  }
  if (dU(e) <= r.timestamp) return !1;
  if (Qne(r) && o$(r, JE(t))) return !1;
  if (jge(t, o, u) === "applies" && !C()) return !0;
  throw new EY(D3t);
}

function lVe(e) {
  switch (e) {
    case "no_match":
      return w("errorCode8");
    case "ambiguous":
      return w("errorCode9");
    case "applies":
      return w("success");
  }
}

function yJt(e) {
  return Math.max(0, Math.floor((Date.now() - e) / 86400000));
}

function uVe(e) {
  let t = yJt(e);
  if (t <= 1) return "";
  return (
    `This memory is ${t} days old. ` +
    "Memories are point-in-time observations, not live state \u2014 " +
    "claims about code behavior or file:line citations may be outdated. Verify against current code before asserting as fact."
  );
}

function fVe(e) {
  let t = uVe(e);
  if (!t) return "";
  return `<system-reminder>${t}</system-reminder>
`;
}

function P3(e, t) {
  let r = uVe(t);
  return r
    ? `${r}

Memory: ${e}:`
    : `Memory: ${e}:`;
}

function _Jt(e, t) {
  var r = {};
  return (
    (t = rx(t, 3)),
    UFe(e, function (o, u, d) {
      F5(r, t(o, u, d), o);
    }),
    r
  );
}

async function gVe() {
  let e = Date.now();
  Y("info", "git_status_started");
  let t = Date.now(),
    r = await Vg();
  if ((Y("info", "git_is_git_check_completed", { duration_ms: Date.now() - t, is_git: r }), !r))
    return Y("info", "git_status_skipped_not_git", { duration_ms: Date.now() - e }), y("context_git_detect"), null;
  try {
    let o = Date.now(),
      [u, d, _, C, A] = await Promise.all([
        cl(),
        Cw(),
        $e(it(), ["--no-optional-locks", "status", "--short"], { preserveOutputOnError: !1 }).then(({ stdout: F }) =>
          F.trim(),
        ),
        $e(it(), ["--no-optional-locks", "log", "--oneline", "-n", "5"], { preserveOutputOnError: !1 }).then(
          ({ stdout: F }) => F.trim(),
        ),
        $e(it(), ["config", "user.name"], { preserveOutputOnError: !1 }).then(({ stdout: F }) => F.trim()),
      ]);
    Y("info", "git_commands_completed", { duration_ms: Date.now() - o, status_length: _.length });
    let x = as() ? Qe : Bt,
      M =
        _.length > Wge
          ? _.substring(0, Wge) +
            `
... (truncated because it exceeds 2k characters. If you need more information, run "git status" using ${x})`
          : _;
    return (
      Y("info", "git_status_completed", { duration_ms: Date.now() - e, truncated: _.length > Wge }),
      y("context_git_detect"),
      [
        "This is the git status at the start of the conversation. Note that this status is a snapshot in time, and will not update during the conversation.",
        `Current branch: ${u}`,
        `Main branch (you will usually use this for PRs): ${d}`,
        ...(A ? [`Git user: ${A}`] : []),
        `Status:
${M || "(clean)"}`,
        `Recent commits:
${C}`,
      ].join(`

`)
    );
  } catch (o) {
    return (
      Y("error", "git_status_failed", { duration_ms: Date.now() - e }),
      g("context_git_detect", "git_cmd_failed"),
      n(`Failed to get git status for system context: ${l(o)}`, { level: "error" }),
      null
    );
  }
}

function vj() {
  let e = a.CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS;
  if (e !== void 0) return !e;
  return Je().includeGitInstructions ?? !0;
}

function M3(e) {
  let t = hP.of(e).byId,
    r = t.get(e.id);
  if (!r)
    (r = {
      gitStatus: void 0,
      userContext: void 0,
      userContextMemoryFiles: void 0,
      userContextInstructionFiles: void 0,
      refreshReason: "session_start",
      systemContextByPhrase: new Map(),
    }),
      t.set(e.id, r);
  return r;
}

function bJt(e) {
  let t = M3(e);
  return (t.gitStatus ??= gVe()), t.gitStatus;
}

function xh(e, t) {
  let r = M3(e),
    o = t ?? "",
    u = r.systemContextByPhrase.get(o);
  if (!u) (u = kJt(e, t)), r.systemContextByPhrase.set(o, u);
  return u;
}

async function kJt(e, t) {
  let r = Date.now();
  Y("info", "system_context_started");
  let o = a.CLAUDE_CODE_REMOTE || !vj() ? null : await bJt(e);
  return (
    Y("info", "system_context_completed", {
      duration_ms: Date.now() - r,
      has_git_status: o !== null,
      has_injection: t !== void 0,
    }),
    {
      ...(o && { gitStatus: o }),
      ...(Me(a.CLAUDE_CODE_PERFORCE_MODE) && {
        perforceMode: `This is a Perforce workspace. Files not yet opened for edit are read-only; if a file is read-only, run \`p4 edit <file>\` via ${as() ? Qe : Bt} to check it out before modifying. Files that are already writable have been opened and can be edited directly.`,
      }),
      ...{},
    }
  );
}

function Zw(e, t, r) {
  let o = M3(e);
  if (o.userContext === void 0) {
    let u = wJt(e, t, r);
    (o.userContext = u.then(({ blocks: d }) => d)),
      (o.userContextMemoryFiles = u.then(
        ({ memoryFiles: d }) => d,
        () => zge,
      )),
      (o.userContextInstructionFiles = u.then(
        ({ instructionFiles: d }) => d,
        () => {
          return;
        },
      )),
      Gge(e);
  }
  return o.userContext;
}

function Gge(e) {
  try {
    hP.peek(e)?.builds.emit();
  } catch (t) {
    h(t);
  }
}

function yVe(e, t, r) {
  return Zw(e, t, r).catch(() => {}), M3(e).userContextInstructionFiles ?? Promise.resolve(void 0);
}

function Zin(e) {
  return hP.peek(e)?.byId.get(e.id)?.userContextMemoryFiles;
}

function BWn(e, t) {
  let r = hP.of(e).builds.subscribe(t),
    o = e.subscribe(t);
  return () => {
    r(), o();
  };
}

async function wJt(e, t, r) {
  let o = Date.now();
  Y("info", "user_context_started");
  let u = gH(),
    d = null,
    _ = zge,
    C = zge;
  try {
    if (!u) (_ = I3(await J_(e, !1, t))), (C = qge(_)), (d = Cj(C));
  } catch (F) {
    throw (p("context_claude_md_load", "load_threw"), F);
  }
  if (!u) y("context_claude_md_load");
  UHn(d || null);
  let A = a.ANTHROPIC_UNIX_SOCKET ? void 0 : On()?.emailAddress,
    x = await SJt(r);
  return (
    Y("info", "user_context_completed", {
      duration_ms: Date.now() - o,
      claudemd_length: d?.length ?? 0,
      claudemd_disabled: Boolean(u),
      has_user_email: Boolean(A),
      has_project_context: Boolean(x),
    }),
    {
      blocks: {
        ...(d ? { claudeMd: d } : Ll() && { claudeMd: "" }),
        ...(A && {
          userEmail: `The user's email address is ${A}. Use it only to identify the user, such as for authorship, attribution, or filtering their own work. Never send it to an unrelated service, such as in a request header, URL, or payload, unless the user explicitly asks.`,
        }),
        ...(x && { attachedProject: x }),
        currentDate: `Today's date is ${kue()}.`,
      },
      memoryFiles: _,
      instructionFiles: C,
    }
  );
}

function jWn(e) {
  let t = hP.peek(e);
  if (!t) return;
  t.byId.clear(), Gge(e);
}

function ok(e, t) {
  let r = hP.peek(e);
  if (!r) return;
  for (let o of r.byId.values()) {
    let u = o.userContext !== void 0;
    if (((o.userContext = void 0), (o.userContextMemoryFiles = void 0), (o.userContextInstructionFiles = void 0), u))
      o.refreshReason = t;
  }
  Gge(e);
}

function _Ve(e) {
  return hP.peek(e)?.byId.get(e.id)?.refreshReason;
}

async function* sL(e, t) {
  let r = new Z_(),
    o = { ...t, onCompactEvent: (C) => r.enqueue(C) },
    u = (C) => {
      r.enqueue({ type: "notification", notification: C });
    },
    d = (C) => {
      r.enqueue(C);
    },
    _;
  return (
    e(o, u, d).then(
      (C) => {
        (_ = C), r.done();
      },
      (C) => r.error(C),
    ),
    yield* r,
    _
  );
}

function bVe() {
  return I("tengu_amber_redwood2", "") || I("tengu_amber_redwood3", "");
}

function kVe() {
  return Boolean(Me(process.env.DISABLE_COMPACT) || a.DISABLE_AUTO_COMPACT);
}

function Qf() {
  if (kVe()) return !1;
  return Lo("autoCompactEnabled", !0).value;
}

function esn() {
  if (kVe()) return !1;
  let e = Lo("autoCompactEnabled", !0);
  if (e.value) return !1;
  if (e.source === "userSettings") return !0;
  if (e.source === "legacyGlobalConfig") return xi().includes("userSettings");
  return !1;
}

function LB() {
  if (a.CLAUDE_CODE_REMOTE) {
    if (!TJt.isOpen()) return !1;
  }
  return !0;
}

function ZE(e) {
  return e !== void 0 && vJt.has(e);
}

function iL(e) {
  if (e === "compact") return !0;
  return !1;
}

function TVe(e) {
  return typeof e === "number" && Number.isFinite(e) && e >= 0 && e < 1 ? e : null;
}

function EJt(e) {
  if (typeof e !== "object" || e === null) return null;
  let t = e,
    r = TVe(t.repl),
    o = TVe(t.sdk);
  return r === null || o === null ? null : { repl: r, sdk: o };
}

function RVe(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let t = [],
    r = null;
  for (let [o, u] of Object.entries(e)) {
    let d = EJt(u);
    if (d === null) return null;
    if (o === "default") {
      r = d;
      continue;
    }
    let _ = Number(o);
    if (!Number.isSafeInteger(_) || _ <= 0) return null;
    t.push({ windowSize: _, ...d });
  }
  if (t.length === 0 && r === null) return null;
  return { entries: t, defaultEntry: r };
}

function PVe(e, t) {
  let r = e.entries.find((o) => o.windowSize === t);
  if (r !== void 0) return { kind: "exact", entry: r };
  return e.defaultEntry === null ? null : { kind: "default", entry: e.defaultEntry };
}

function D3(e, t) {
  let r = e - 13000,
    o = t.testPctOverride;
  if (o !== void 0 && !isNaN(o) && o > 0 && o <= 100) return Math.min(Math.floor(e * (o / 100)), r);
  return r;
}

function Kge(e, t) {
  return Math.min(e - Math.round(e * t.precomputeBufferFraction), D3(e, t));
}

function Vge(e, t, r, o = t, u) {
  let d = u ?? D3(t, r),
    _ = r.enabled ? d : t,
    C = _ - 20000,
    A = r.testBlockingOverride,
    x = A !== void 0 && !isNaN(A) && A > 0 ? A : o - 3000,
    M = Math.max(0, Math.round(((_ - e) / _) * 100));
  if (e >= x) return { level: "blocked", pctLeft: M };
  if (r.enabled && e >= d) return { level: "compact", pctLeft: M };
  if (e >= C) return { level: "warn", pctLeft: M };
  return { level: "ok" };
}

function p3e(e) {
  let t = e.trim().toLowerCase();
  if (t === "auto") return "auto";
  let r;
  if (t.endsWith("m")) r = parseFloat(t) * 1e6;
  else if (t.endsWith("k")) r = parseFloat(t) * 1000;
  else {
    let o = ol(t);
    r = o >= 100 && o <= 1000 ? o * 1000 : o;
  }
  if (!Number.isFinite(r) || r < rCe || r > YNe) return;
  return Math.round(r);
}

function Xge(e) {
  if (!Qf()) return;
  if (Le()) return;
  if (e !== SVe) return;
  let t = bVe();
  if (!t) return;
  let r = p3e(t);
  return typeof r === "number" ? r : void 0;
}

function MVe(e, t) {
  if (t && Object.hasOwn(e, t)) return e[t];
  return e.default;
}

function DVe(e) {
  if (typeof e === "number") return e;
  if (typeof e !== "object" || e === null || Array.isArray(e)) return;
  let { surfaces: t, ...r } = e,
    o = Fn(),
    u = a.CLAUDE_CODE_ENTRYPOINT,
    d = u && t && Object.hasOwn(t, u) ? t[u] : void 0;
  if (d) {
    let _ = MVe(d, o);
    if (_ !== void 0) return _;
  }
  return MVe(r, o);
}

function CJt(e) {
  if (!Qf()) return;
  if (!Object.hasOwn(xVe, e)) return;
  return DVe(xVe[e]);
}

function RJt(e) {
  return nN() && XSt(e);
}

function PJt(e, t) {
  return Cc(e) || (t?.includes(Vk.header) === !0 && TC(e));
}

function xJt(e) {
  if (!Qf()) return { window: null, replacesDefault: !1 };
  let t = (d) => (typeof d === "number" && Number.isInteger(d) && d >= rCe && d <= YNe ? d : null),
    r = (d) => {
      if (typeof d !== "object" || d === null || Array.isArray(d)) return { window: null, present: !1 };
      if (!Object.hasOwn(d, e)) return { window: null, present: !1 };
      return { window: t(DVe(d[e])), present: !0 };
    },
    o = r(Qer()?.rowan_thicket),
    u = r(Zer());
  return { window: o.window ?? u.window, replacesDefault: u.present };
}

function $A(e, t, r = zp()) {
  let o = Ye(e),
    u = Lp(e, r);
  if (process.env.CLAUDE_CODE_AUTO_COMPACT_WINDOW) {
    let A = aee("CLAUDE_CODE_AUTO_COMPACT_WINDOW", process.env.CLAUDE_CODE_AUTO_COMPACT_WINDOW, rCe, YNe);
    if (A.status !== "invalid") {
      let x = Math.max(rCe, A.effective);
      return { window: Math.min(u, x), configured: x, source: "env" };
    }
  }
  if (t !== void 0) return { window: Math.min(u, t), configured: t, source: "settings" };
  let d = xJt(o);
  if (d.window !== null) return { window: Math.min(u, d.window), configured: d.window, source: "clientdata" };
  let _ = Xge(o);
  if (_ !== void 0) return { window: Math.min(u, _), configured: _, source: "experiment" };
  if (u < 1e6 && (AJt.has(o) || RJt(e) || KSn(e, r)))
    return { window: Math.min(u, g$), configured: g$, source: "model-default" };
  let C = d.replacesDefault ? void 0 : CJt(o);
  if (C !== void 0) return { window: Math.min(u, C), configured: C, source: "model-default" };
  if (Qf() && !a.CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT && !PJt(e, r) && !ure(e) && !tN(e, o))
    return { window: u, configured: u, source: "unknown-model" };
  return { window: u, configured: u, source: "auto" };
}

function CG(e, t) {
  return $A(e, t).source !== "auto";
}

function f3e(e, t) {
  return $A(e, t).source;
}

function K1(e, t) {
  let r = Math.min(sDe(e), OVe),
    o = Qf() ? t : void 0,
    { window: u } = $A(e, o);
  return u - r;
}

function IVe(e) {
  let t = Math.min(sDe(e), OVe);
  return Lp(e, zp()) - t;
}

function IJt(e) {
  if (!pc().claim("precompute_arm_table_malformed")) return;
  s("tengu_precompute_arm_table_malformed", { payloadType: e });
}

function Yge() {
  let e = I("tengu_amber_rokovoko", O3);
  return typeof e === "number" && Number.isFinite(e) && e >= 0 && e < 1 ? e : O3;
}

function Qge(e, t, r) {
  let o = I(MJt, null);
  if (o === null || o === void 0) return { fraction: Yge(), source: "scalar" };
  let u = RVe(o);
  if (u === null) return IJt(c(Array.isArray(o) ? "array" : typeof o)), { fraction: Yge(), source: "malformed" };
  let d = Qf() ? t : void 0,
    { window: _ } = $A(e, d),
    C = PVe(u, _);
  if (C === null) return { fraction: Yge(), source: "table_no_match" };
  let A = r === "sdk" ? "sdk" : "repl",
    x = C.entry[A];
  return C.kind === "exact"
    ? { fraction: x, source: "table_exact", matchedWindowKey: C.entry.windowSize }
    : { fraction: x, source: "table_default" };
}

function OJt(e, t, r) {
  return Qge(e, t, r).fraction;
}

function Jge(e, t, r) {
  let o = process.env.CLAUDE_AUTOCOMPACT_PCT_OVERRIDE,
    u = process.env.CLAUDE_CODE_BLOCKING_LIMIT_OVERRIDE;
  return {
    enabled: Qf(),
    precomputeBufferFraction: OJt(e, t, r),
    testPctOverride: o ? parseFloat(o) : void 0,
    testBlockingOverride: u ? ol(u) : void 0,
  };
}

function _ye(e, t) {
  return D3(K1(e, t), Jge(e, t));
}

function hee(e, t, r, o) {
  if (o !== void 0)
    return Vge(
      e,
      o.effectiveWindow,
      { enabled: o.enabled, precomputeBufferFraction: O3, testPctOverride: void 0, testBlockingOverride: void 0 },
      IVe(t),
      o.threshold,
    );
  let u = Jge(t, r),
    d = u.enabled ? r : void 0;
  return Vge(e, K1(t, d), u, IVe(t));
}

function NVe(e, t, r, o) {
  let u = Jge(t, r, o),
    d = u.enabled ? r : void 0,
    _ = K1(t, d);
  if (!CG(t, r)) return e >= Kge(_, u);
  let { window: C } = $A(t, d);
  if (C < g$) return !1;
  return e >= Kge(_, u);
}

function DJt(e) {
  return e?.compacted === !0 && e.turnCounter < 3 ? (e?.consecutiveRapidRefills ?? 0) + 1 : 0;
}

function L3(e) {
  let t = DJt(e);
  return { action: t >= 3 ? "trip" : "proceed", consecutiveRapidRefills: t };
}

function Zge(e, t) {
  return { compacted: !0, turnId: e, turnCounter: 0, consecutiveFailures: 0, consecutiveRapidRefills: t };
}

function kh(e) {
  if (
    e?.type === "assistant" &&
    "usage" in e.message &&
    !(e.message.content[0]?.type === "text" && bce.has(e.message.content[0].text)) &&
    e.message.model !== rd
  )
    return e.message.usage;
  return;
}

function the(e) {
  if (e?.type === "assistant" && "id" in e.message && e.message.model !== rd) return e.message.id;
  return;
}

function FW(e) {
  return e.input_tokens + (e.cache_creation_input_tokens ?? 0) + (e.cache_read_input_tokens ?? 0) + e.output_tokens;
}

function Rj(e) {
  if (FW(e) === 0) return 0;
  let t = e.iterations?.findLast((r) => r.type === "message" || r.type === "fallback_message");
  if (t && (t.type === "message" || t.type === "fallback_message"))
    return t.input_tokens + (t.cache_creation_input_tokens ?? 0) + (t.cache_read_input_tokens ?? 0) + t.output_tokens;
  return FW(e);
}

function LL(e) {
  let t = e.length - 1;
  while (t >= 0) {
    let r = e[t],
      o = r ? kh(r) : void 0;
    if (o) return FW(o);
    t--;
  }
  return 0;
}

function m3e(e) {
  return LL(il(e));
}

function nhe(e) {
  let t = e.length - 1;
  while (t >= 0) {
    let r = e[t],
      o = r ? kh(r) : void 0;
    if (o) {
      let u = o.iterations?.at(-1);
      if (u) return u.input_tokens + u.output_tokens;
      return o.input_tokens + o.output_tokens;
    }
    t--;
  }
  return 0;
}

function g3e(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t],
      o = r ? kh(r) : void 0;
    if (o)
      return {
        input_tokens: o.input_tokens,
        output_tokens: o.output_tokens,
        cache_creation_input_tokens: o.cache_creation_input_tokens ?? 0,
        cache_read_input_tokens: o.cache_read_input_tokens ?? 0,
      };
  }
  return null;
}

function WWn(e, t) {
  let r = 0;
  for (let o of e) {
    let u = kh(o);
    if (!u) continue;
    let d = the(o);
    if (!d || t.has(d)) continue;
    t.add(d), (r += u.input_tokens + (u.cache_creation_input_tokens ?? 0) + u.output_tokens);
  }
  return r;
}

function LNt(e) {
  let t = 0;
  for (let r of e)
    if (r && Ou(r)) {
      let { cumulativeDroppedTokens: o, preTokens: u, postTokens: d } = r.compactMetadata,
        _ = o ?? Math.max(0, u - (d ?? 0));
      if (_ > t) t = _;
    }
  return t;
}

function Pj(e, t) {
  let r = LNt(t),
    { preTokens: o, postTokens: u } = e.compactMetadata;
  e.compactMetadata.cumulativeDroppedTokens = r + Math.max(0, o - (u ?? 0));
}

function q8(e) {
  let r = e.findLast((u) => u.type === "assistant");
  if (!r) return !1;
  let o = kh(r);
  return o ? FW(o) > 200000 : !1;
}

function MNt(e) {
  let t = 0;
  for (let r of e.message.content)
    if (r.type === "text") t += r.text?.length ?? 0;
    else if (r.type === "thinking") t += uft(r.signature?.length ?? 0);
    else if (r.type === "redacted_thinking") t += r.data?.length ?? 0;
    else if (r.type === "tool_use") t += b(r.input).length;
  return t;
}

function Ih(e, t) {
  let r = UVe(e);
  if (!r) return th(e, t);
  return FW(r.usage) + th(e.slice(r.anchorIndex + 1), t);
}

function UVe(e) {
  let t = e.length - 1;
  while (t >= 0) {
    let r = e[t],
      o = r ? kh(r) : void 0;
    if (r && o) {
      let u = the(r);
      if (u) {
        let d = t - 1;
        while (d >= 0) {
          let _ = e[d],
            C = _ ? the(_) : void 0;
          if (C === u) t = d;
          else if (C !== void 0) break;
          d--;
        }
      }
      return { usage: o, anchorIndex: t };
    }
    t--;
  }
  return null;
}

function BVe(e, t) {
  let r = UVe(e),
    o = r ? e.slice(r.anchorIndex + 1) : [...e];
  return th(RE(o), t);
}

function Tin(e) {
  return `${jVe}${e}`;
}

function pd(e, t) {
  let r = Tin(t),
    o = 0;
  for (;;) {
    let u = e.indexOf(r, o);
    if (u === -1) return !1;
    let d = e[u + r.length];
    if (d === void 0 || !/[A-Za-z0-9_:.-]/.test(d)) return !0;
    o = u + 1;
  }
}

function zjn(e) {
  return e.includes(`${jVe}beta_header:`);
}

function $3(e) {
  let t = e.toLowerCase();
  return t.includes("prompt is too long") || t.includes("input is too long for requested model");
}

function U3(e) {
  return e.toLowerCase().includes("context window");
}

function rhe(e) {
  return e.toLowerCase().includes("input length and `max_tokens` exceed context limit");
}

function ohe(e) {
  let t = e.toLowerCase().replaceAll("`", "");
  if (t.includes("signature in thinking block")) return !0;
  if (t.includes("thinking.signature") && t.includes("field required")) return !0;
  return (
    (t.includes("thinking block") || t.includes("redacted_thinking")) &&
    (t.includes("cannot be modified") || t.includes("invalid signature"))
  );
}

function she(e) {
  let t =
    /thinking\.type[^a-z]{1,8}(enabled|adaptive)[^]*?not supported/i.exec(e) ??
    /\b(adaptive) thinking is not supported/i.exec(e);
  return t?.[1] ? t[1].toLowerCase() : void 0;
}

function NJt(e) {
  let t = e.toLowerCase();
  if (t.includes("effort parameter") && t.includes("not support")) return !0;
  return (
    t.includes("output_config") &&
    (t.includes("extra inputs are not permitted") || t.includes("requires a model that supports"))
  );
}

function $Jt(e) {
  return e.toLowerCase().includes("too much media");
}

function ihe(e) {
  let t = e.match(
    /messages[.[](\d+)[\].]+content[.[](\d+)[\].]+(?:tool_result[.[]content[.[](\d+)[\].]+)?(image|document|pdf)/,
  );
  if (t)
    return {
      messageIdx: Number(t[1]),
      contentIdx: Number(t[2]),
      ...(t[3] !== void 0 && { nestedContentIdx: Number(t[3]) }),
      kind: t[4] === "image" ? "image" : "document",
    };
  let r = e.toLowerCase();
  if (LJt.some((o) => r.includes(o))) return { kind: "image" };
  if (FJt.some((o) => r.includes(o))) return { kind: "document" };
  return;
}

function B3(e, t) {
  return e.includes(t) && e.includes("anthropic-beta");
}

function ahe(e) {
  if (B3(e, Kk.header)) return !0;
  if (e.includes("Unexpected role") && e.includes("input message role")) return !0;
  if (e.includes("cache_control") && WVe.test(e)) return !0;
  return e.includes("not supported") && /role .{0,2}system/i.test(e);
}

function lhe(e) {
  if (!e.includes("cache_control")) return !1;
  if (WVe.test(e)) return !1;
  if (e.includes("empty text block")) return !1;
  if (/\bsystem\.\d+\./.test(e) || e.includes("tool_result")) return !1;
  if (/\bttl\b/i.test(e)) return !1;
  let t = e.toLowerCase();
  return (
    t.includes("not permitted") ||
    t.includes("cannot be set") ||
    t.includes("unknown name") ||
    t.includes("unknown field") ||
    t.includes("unrecognized") ||
    t.includes("additional propert")
  );
}

function jMt(e, t, r) {
  if (e === 413) return U3(t) || $3(t) ? "prompt_too_long" : void 0;
  if (e !== 400) return;
  if (ahe(t)) return "mid_conv_system";
  if (lhe(t)) return "cache_control_field";
  if (ohe(t)) return "thinking_signature";
  let o = she(t);
  if (o) return `thinking_type:${o}`;
  if (NJt(t)) return "effort_unsupported";
  if ($Jt(t)) return "media_budget";
  let u = ihe(t);
  if (u) return u.kind === "image" ? "image_block" : "document_block";
  if ($3(t)) return "prompt_too_long";
  if (rhe(t)) return "max_tokens_context_overflow";
  for (let d of r ?? []) {
    let _ = d.trim();
    if (_ && B3(t, _)) return `beta_header:${_}`;
  }
  return;
}

function rle(e) {
  return typeof e === "string" && HJt.has(e);
}

function _Ge(e) {
  return typeof e === "string" && jJt.test(e) ? e : "unknown";
}

function Kzn(e) {
  return WJt.test(e) ? e : "unknown";
}

function qJt() {
  let e = GJt().safeParse(I(zJt, eJe));
  return e.success ? Math.max(eJe, e.data) : eJe;
}

function VVe(e) {
  let t = KJt().safeParse(e);
  return t.success ? t.data : void 0;
}

function VJt(e) {
  return e.reduce(
    (t, r) =>
      r.type === "user" && Array.isArray(r.message.content) ? r.message.content.reduce((o, u) => o + YJt(u), t) : t,
    0,
  );
}

function YJt(e) {
  if (GVe(e)) return che(e);
  if (e.type === "tool_result" && Array.isArray(e.content))
    return e.content.reduce((t, r) => (GVe(r) ? t + che(r) : t), 0);
  return 0;
}

function che(e) {
  return Buffer.byteLength(b(e), "utf8");
}

function YVe({ messagesForAPI: e, limitBytes: t = qJt() }) {
  let r = VJt(e),
    o = che(e.map((u) => u.message.content));
  return {
    kind: o - r > t ? "unrecoverable" : r > 0 ? "strippable_media" : "compactable",
    bodyBytes: o,
    mediaBytes: r,
    limitBytes: t,
  };
}

function uhe(e) {
  return e < 1024 ? "less than 1KB" : Ft(e);
}

function ZVe(e) {
  let t = Ft(e.bodyBytes),
    r = e.bodyBytes - e.limitBytes;
  return t === Ft(e.limitBytes) && r > 0 ? `${t} (${uhe(r)} over it)` : t;
}

function eYe(e) {
  let t = Ft(e.limitBytes),
    o = `this conversation is about ${ZVe(e)}`,
    u =
      e.mediaBytes === 0
        ? "none of it is images or documents that could be removed"
        : `only ${uhe(e.mediaBytes)} of it is images or documents that could be removed`,
    d = `Request too large for the API's ${t} request limit: ${o}, and ${u}, so removing attachments or compacting cannot make it fit.`;
  return Le()
    ? `${d} Reduce the input (large tool results or pasted content) or start a new session; this conversation cannot continue as is.`
    : `${d} Double press esc to go back past the large content, or /clear to start a new conversation.`;
}

function tYe() {
  return Le()
    ? "Accumulated images and attachments in the conversation pushed the request over the limit. Remove older images or compact the conversation."
    : "Accumulated images and attachments in the conversation pushed the request over the limit. Run /compact, or double press esc to go back and remove attachments.";
}

function j3() {
  return `Request too large (max ${Ft(eJe)}). ${tYe()}`;
}

function nYe(e) {
  let t = Ft(e.limitBytes),
    r = `${uhe(e.mediaBytes)} of about ${ZVe(e)} is images or documents`;
  return `Request too large (max ${t}; ${r}). ${tYe()}`;
}

function rYe(e) {
  return `request_body_over_limit: body=${e.bodyBytes}B (messages only) media=${e.mediaBytes}B limit=${e.limitBytes}B`;
}

function W3(e = Ne()) {
  if (e !== "firstParty" || !jo()) return !1;
  if (a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL || a.ANTHROPIC_BASE_URL !== void 0 || !zV()) return !0;
  let t = Gpe();
  return t === null || (t !== void 0 && FT(t));
}

async function oYe(e = Ne()) {
  if (
    e !== "firstParty" ||
    a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL ||
    a.ANTHROPIC_BASE_URL !== void 0 ||
    Gpe() !== void 0 ||
    !zV()
  )
    return;
  try {
    await zpe();
  } catch {}
}

function Ij({ headers: e, baseUrl: t }) {
  if (e) {
    let r = [];
    e.forEach((o, u) => r.push(u));
    for (let [o, { headerPrefixes: u }] of dhe) if (u?.some((d) => r.some((_) => _.startsWith(d)))) return o;
  }
  if (t)
    try {
      let r = new URL(t).hostname.toLowerCase();
      for (let [o, { hostSuffixes: u }] of dhe) if (u?.some((d) => r.endsWith(d))) return o;
    } catch {}
  return;
}

function Lj(e) {
  return XJt.find((t) => t === e) ?? "other";
}

function z3(e) {
  return cre(e) ? (ve(e) ?? null) : null;
}

function QJt(e) {
  let t = e ? St(e, ";").trim().toLowerCase() : "";
  switch (t) {
    case "":
      return "none";
    case "application/json":
      return "json";
    case "text/event-stream":
      return "event-stream";
    case "text/html":
    case "application/xhtml+xml":
      return "html";
    case "text/plain":
      return "text";
    case "application/xml":
    case "text/xml":
      return "xml";
    case "application/vnd.amazon.eventstream":
      return "aws-eventstream";
    default:
      return t.endsWith("+json") ? "json" : "other";
  }
}

function ZJt(e) {
  if (!e) return "absent";
  let t = e.toLowerCase();
  return JJt.find(([, r]) => r.test(t))?.[0] ?? "other";
}

function rZt(e) {
  if (!e) return null;
  let t = e.trim().toLowerCase();
  return eZt.find((r) => r === t) ?? "other";
}

function oZt(e) {
  if (!e) return null;
  let t = e.trim(),
    r = tZt.find((d) => d === t);
  if (r) return r;
  let o = St(t, "."),
    u = nZt.find((d) => d === o);
  return u ? `${u}.other` : "other";
}

function iZt(e) {
  if (typeof e !== "string") return null;
  return sZt.test(e) ? e : "nonconforming";
}

function Mj(e, t) {
  let r = new Set();
  t?.forEach((x, M) => {
    if (aZt.has(M)) {
      r.add(M);
      return;
    }
    let F = lZt.find((U) => M.startsWith(U));
    if (F) r.add(F + "*");
  });
  let o = Number.parseInt(t?.get("content-length") ?? "", 10),
    u = t?.get("request-id"),
    d = z3(u),
    _ = Ij({ headers: t }) ?? null,
    A = (_ ? sYe[_] : void 0)?.versionHeader;
  return {
    status: e ?? null,
    content_type: QJt(t?.get("content-type")),
    content_length: Number.isFinite(o) && o >= 0 ? o : null,
    request_id: d,
    request_id_header: d ? "anthropic" : u ? "other" : "absent",
    server: ZJt(t?.get("server")),
    apigee_fault_source: rZt(t?.get("x-apigee-fault-source")),
    apigee_fault_code: oZt(t?.get("x-apigee-fault-code")),
    intermediary_headers: [...r].sort(),
    gateway: _,
    gateway_version: iZt(A ? t?.get(A) : void 0),
  };
}

function uZt(e) {
  if (e === null || e === void 0) return "empty";
  if (typeof e === "string") {
    let t = e.trimStart().slice(0, 16);
    if (t.length === 0) return "empty";
    if (cZt.test(t)) return "event-stream";
    if (t.startsWith("<")) return t.startsWith("<?xml") ? "xml" : "html";
    if (t.startsWith("{") || t.startsWith("[")) return "json-text";
    return "other-text";
  }
  return typeof e === "object" ? "json-not-message" : "other";
}

function G3(e) {
  return dZt.find((t) => t === e) ?? "other";
}

function tC(e, t, r) {
  let o = Ug(e),
    u = e instanceof Gt ? e : void 0,
    d = u?.status ?? r?.status,
    _ = u?.headers ?? r?.headers;
  return {
    error_kind: t,
    error_class:
      e instanceof sc
        ? "user_abort"
        : e instanceof tL
          ? "connection_timeout"
          : e instanceof kd
            ? "connection_error"
            : u
              ? "api_error"
              : e instanceof Error
                ? "error"
                : "non_error",
    error_name: px(e) ?? null,
    cause_name: e instanceof Error ? (px(e.cause) ?? null) : null,
    api_error_type: u?.type ? Lj(u.type) : null,
    connection_code: bie(o?.code) ?? null,
    ssl_error: o?.isSSLError ?? !1,
    ...(e instanceof q3
      ? { response: e.response, body_kind: e.bodyKind, body_bytes: e.bodyBytes }
      : { response: d !== void 0 || _ ? Mj(d, _) : null }),
  };
}

function Fj() {
  let e = Ne(),
    t = pZt(e);
  return {
    provider: e,
    base_url: !t ? "default" : xCe(t) ? "anthropic" : "custom",
    base_url_gateway: Ij({ baseUrl: t }) ?? null,
    https_proxy: _oe() !== void 0,
    custom_headers: Boolean(a.ANTHROPIC_CUSTOM_HEADERS),
    extra_ca_certs: Boolean(a.NODE_EXTRA_CA_CERTS),
    client_cert: Boolean(a.CLAUDE_CODE_CLIENT_CERT),
  };
}

function pZt(e) {
  switch (e) {
    case "firstParty":
    case "gateway":
      return a.ANTHROPIC_BASE_URL;
    case "bedrock":
      return a.ANTHROPIC_BEDROCK_BASE_URL;
    case "mantle":
      return a.ANTHROPIC_BEDROCK_MANTLE_BASE_URL;
    case "anthropicAws":
      return a.ANTHROPIC_AWS_BASE_URL;
    case "anthropicGoogleCloud":
      return a.ANTHROPIC_GOOGLE_CLOUD_BASE_URL;
    case "vertex":
      return a.ANTHROPIC_VERTEX_BASE_URL;
    case "foundry":
      return a.ANTHROPIC_FOUNDRY_BASE_URL;
  }
}

function fZt({ data: e, status: t, headers: r, originating: o }) {
  try {
    let u = Mj(t, r),
      d = uZt(e),
      _ = typeof e === "string" ? Buffer.byteLength(e, "utf8") : d === "empty" ? 0 : u.content_length,
      C = [
        ` Response: content-type ${u.content_type}`,
        mZt[d],
        _ === null ? "size unknown" : `${_} bytes`,
        `request-id ${u.request_id ?? (u.request_id_header === "other" ? "present but not Anthropic-issued" : "absent")}`,
        ...(u.server === "absent" ? [] : [`server ${u.server}`]),
        ...(u.intermediary_headers.length > 0 ? [`intermediary headers ${u.intermediary_headers.join(" ")}`] : []),
      ].join(", "),
      A = o ? [o.cause, o.errorName, o.connectionCode].filter((U) => U && U !== "Error").join(", ") : "",
      x = o?.stall,
      M = x
        ? `; ${[`${x.events_received} stream ${k(x.events_received, "event")} received`, ...(x.ms_to_first_event === null ? [] : [`first after ${x.ms_to_first_event} ms`]), ...(x.ms_since_last_event === null ? [] : [`none in the final ${x.ms_since_last_event} ms`])].join(", ")}`
        : "",
      F = o
        ? ` This was the non-streaming retry of streaming request ${o.requestId ?? "(no Anthropic request-id)"}, which failed with: ${A}${M}.`
        : "";
    return { summary: `${C}.${F}`, bodyKind: d, bodyBytes: _, response: u };
  } catch (u) {
    return (
      n(`unexpected-response description failed: ${l(u)}`, { level: "error" }),
      { summary: "", bodyKind: "other", bodyBytes: null, response: Mj(void 0, void 0) }
    );
  }
}

function iYe(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e) || e.type !== "image") return !1;
  if (!("source" in e) || typeof e.source !== "object" || e.source === null) return !1;
  let t = e.source;
  return "type" in t && t.type === "base64" && "data" in t && typeof t.data === "string";
}

function gZt(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e) || e.type !== "tool_result") return !1;
  return "content" in e && Array.isArray(e.content);
}

function aYe(e, t, r, o) {
  let u = e.source.data.length;
  if (u > r)
    s("tengu_image_api_validation_failed", { base64_size_bytes: u, max_bytes: r }), o.push({ index: t, size: u });
}

function K3(e, t) {
  let r = [],
    o = 0;
  for (let u of e) {
    if (typeof u !== "object" || u === null) continue;
    if (!("type" in u) || u.type !== "user") continue;
    if (!("message" in u) || typeof u.message !== "object" || u.message === null) continue;
    let d = u.message;
    if (!("content" in d) || !Array.isArray(d.content)) continue;
    for (let _ of d.content) {
      if (iYe(_)) {
        aYe(_, ++o, t, r);
        continue;
      }
      if (gZt(_)) {
        for (let C of _.content) if (iYe(C)) aYe(C, ++o, t, r);
      }
    }
  }
  if (r.length > 0) throw new aL(r, t);
}

function Nj(e) {
  if (DEe()) return Ser(e);
  return e;
}

function lL(e) {
  return e || Ne() === "gateway" || DEe();
}

function cYe(e) {
  return DEe() && e.status === 429;
}

function $j() {
  return I("tengu_vellum_anchor", !1);
}

function osn(e) {
  return yZt.some((t) => e.startsWith(t));
}

function FNt(e) {
  let t = e.resetsAt ? ad(e.resetsAt, !0) : void 0;
  if (!t) return null;
  switch (e.rateLimitType) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
      return { limitName: Nw[e.rateLimitType], resetTime: t };
    case "seven_day_sonnet":
      return { limitName: fhe(), resetTime: t };
    case "seven_day_overage_included":
    case "overage":
    case void 0:
      return null;
    default:
      return null;
  }
}

function gYe(e, t) {
  if (e.isUsingOverage) {
    if (e.overageStatus === "allowed_warning")
      return { message: `You're close to your ${iH() ? "usage limit" : "usage credit limit"}`, severity: "warning" };
    return null;
  }
  if (e.status === "rejected") return { message: _Zt(e, t), severity: "error" };
  if (e.status === "allowed_warning") {
    if (e.utilization !== void 0 && e.utilization < dYe) return null;
    let r = Fn(),
      o = r === "team" || r === "enterprise",
      u = On()?.hasExtraUsageEnabled === !0;
    if (o && u && !vf()) return null;
    let d = bZt(e);
    if (d) return { message: d, severity: "warning" };
  }
  return null;
}

function mhe(e, t) {
  let r = gYe(e, t);
  if (r && r.severity === "error") return r.message;
  return null;
}

function isn(e, t) {
  let r = gYe(e, t);
  if (r && r.severity === "warning") return r.message;
  return null;
}

function _Zt(e, t) {
  let r = iH(),
    o = vf(),
    u = o ? "" : " \xB7 contact your admin to increase it",
    d = e.resetsAt,
    _ = d ? ad(d, !0) : void 0,
    C = e.overageResetsAt ? ad(e.overageResetsAt, !0) : void 0,
    A = _ ? ` \xB7 resets ${_}` : "",
    x,
    M = () => {
      if (x === void 0) x = SZt(e, A, t);
      return x;
    },
    F =
      e.rateLimitType === "five_hour" ||
      e.rateLimitType === "seven_day" ||
      e.rateLimitType === "seven_day_opus" ||
      e.rateLimitType === "seven_day_sonnet" ||
      e.rateLimitType === "seven_day_overage_included",
    U = () => e.rateLimitType === "seven_day_overage_included" || !(uf(t) && Lte() && !uM());
  if (!r && e.overageDisabledReason && F && !y3e.has(e.overageDisabledReason) && U()) {
    let B = M();
    if (B !== null) return B;
  }
  if (!r && e.overageDisabledReason && y3e.has(e.overageDisabledReason)) {
    let B = e.overageDisabledReason === "org_spend_cap_reached",
      W = Fn(),
      z = W === "team" || W === "enterprise",
      pe = FNt(e),
      fe = pe && U() ? pe : null,
      me = fe ? ` \xB7 your ${fe.limitName} resets ${fe.resetTime}` : "";
    if (z) {
      let Ie = o
        ? eb()
          ? " \xB7 run /usage-credits to raise it, or visit claude.ai/admin-settings/usage"
          : " \xB7 visit claude.ai/admin-settings/usage to raise it"
        : phe();
      return Pb(B ? mYe : "org's monthly spend limit", `${Ie}${me}`, t);
    }
    let ge = o ? "monthly spend limit" : B ? mYe : "org's monthly spend limit",
      Ce = o ? ` \xB7 raise it at ${yze}` : ` \xB7 ask your admin to raise it at ${yze}`;
    return Pb(ge, `${Ce}${me}`, t);
  }
  if (e.overageStatus === "rejected") {
    let B = "";
    if (d && e.overageResetsAt)
      if (d < e.overageResetsAt) B = ` \xB7 resets ${_}`;
      else B = ` \xB7 resets ${C}`;
    else if (_) B = ` \xB7 resets ${_}`;
    else if (C) B = ` \xB7 resets ${C}`;
    if (e.overageDisabledReason === "out_of_credits") {
      if (r)
        return o
          ? "Your org is out of usage \xB7 add funds to continue"
          : "Your org is out of usage \xB7 contact your admin";
      let W = B !== "" && $j() ? " \xB7 progress saved" : "";
      return `You're out of usage credits${B}${W}`;
    }
    if (e.overageDisabledReason && y3e.has(e.overageDisabledReason)) {
      let W = C ? ` \xB7 resets ${C}` : "";
      return Pb(e.overageDisabledReason === "org_spend_cap_reached" ? hZt : "org's monthly usage limit", W, t);
    }
    if (
      e.overageDisabledReason === "seat_tier_level_disabled" ||
      e.overageDisabledReason === "seat_tier_zero_credit_limit"
    )
      return `Your seat type doesn't include ${r ? "usage" : "usage credits"}`;
    if (e.overageDisabledReason === "org_service_level_disabled") return "This service is disabled for your org";
    if (e.overageDisabledReason === "member_level_disabled" || e.overageDisabledReason === "member_zero_credit_limit")
      return `Your usage allocation has been disabled by your admin${phe()}`;
    if (e.overageDisabledReason === "group_zero_credit_limit") return `Your group's usage limit is set to $0${phe()}`;
    if (r) return Pb("usage limit", u, t);
    return Pb("limit", B, t, { progressSavedSuffix: B !== "" && $j() });
  }
  if (F) {
    let B = M();
    if (B !== null) return B;
  }
  if (r) return Pb("usage limit", u, t);
  return Pb("usage limit", A, t, { progressSavedSuffix: A !== "" && $j() });
}

function SZt(e, t, r) {
  switch (e.rateLimitType) {
    case "seven_day_sonnet":
      return Pb(fhe(), t, r, { progressSavedSuffix: $j() });
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
      return Pb(Nw[e.rateLimitType], t, r, { progressSavedSuffix: $j() });
    case "seven_day_overage_included":
      return Pb(Nw[e.rateLimitType], t, r);
    default:
      return null;
  }
}

function bZt(e) {
  let t = null;
  switch (e.rateLimitType) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
    case "seven_day_sonnet":
    case "seven_day_overage_included":
      t = Nw[e.rateLimitType];
      break;
    case "overage":
      t = iH() ? "usage" : "usage credits";
      break;
    case void 0:
      return null;
  }
  let r = e.utilization ? Math.floor(e.utilization * 100) : void 0,
    o = e.rateLimitType === "overage" && iH(),
    u = e.resetsAt && !o ? ad(e.resetsAt, !0) : void 0,
    d = ssn(e.rateLimitType);
  if (r && u) {
    let C = `You've used ${r}% of your ${t} \xB7 resets ${u}`;
    return d ? `${C} \xB7 ${d}` : C;
  }
  if (r) {
    let C = `You've used ${r}% of your ${t}`;
    return d ? `${C} \xB7 ${d}` : C;
  }
  if (e.rateLimitType === "overage") t = iH() ? "usage limit" : "usage credit limit";
  if (u) {
    let C = `Approaching ${t} \xB7 resets ${u}`;
    return d ? `${C} \xB7 ${d}` : C;
  }
  let _ = `Approaching ${t}`;
  return d ? `${_} \xB7 ${d}` : _;
}

function ssn(e) {
  let t = Fn(),
    r = On()?.hasExtraUsageEnabled === !0,
    o = vf();
  if (t === "team" || t === "enterprise") {
    if (!r && eb())
      return o
        ? "Run /usage-credits to turn on extra usage for your org"
        : "Run /usage-credits to ask your admin for more";
    if (r && e === "overage") {
      if (eb()) return o ? "Run /usage-credits to raise the cap" : "Run /usage-credits to ask your admin for more";
      return o ? "Raise the cap at claude.ai/admin-settings/usage" : "Ask your admin for more";
    }
    return null;
  }
  if (e === "five_hour" && (t === "pro" || t === "max") && A2()) return "/upgrade to keep using Claude Code";
  return null;
}

function XWn(e) {
  if (!kZt(e)) return null;
  let t = C2() ? _mt()?.subline : void 0;
  if (t) return t;
  if (!eb()) return "Switch models to keep working.";
  if (!vf()) return "Switch models to keep working.";
  return "Buy more to keep using Fable 5, or switch models to keep working.";
}

function kZt(e) {
  return e !== null && uf(Ot(e)) && Lte() && !uM();
}

function YWn(e, t, r) {
  if (Fn() !== "pro") return null;
  if (e.rateLimitType !== "seven_day") return null;
  if (t.includes("fable")) return { lever: "model", text: "try /model opus \xB7 more runway" };
  if (t.includes("opus")) return { lever: "model", text: "try /model sonnet \xB7 ~2\xD7 runway" };
  if (!lg(t)) return null;
  let o = ew(t, r);
  if (o === "high" || o === "xhigh" || o === "max") return { lever: "effort", text: "try /effort medium" };
  return null;
}

function asn(e, t) {
  let r = e.resetsAt ? ad(e.resetsAt, !0) : "",
    o = "";
  switch (e.rateLimitType) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
      o = Nw[e.rateLimitType];
      break;
    case "seven_day_sonnet":
      o = fhe();
      break;
    case "seven_day_overage_included":
    case "overage":
    case void 0:
      break;
  }
  let u = iH();
  if (!o && !u && t) {
    let C = XI(Ot(t));
    if (C && TF().includes(C)) {
      let A = r ? ` \xB7 Your ${C} limit resets ${r}` : "";
      return `Now using usage credits for ${C}${A}`;
    }
  }
  let d = u ? "your usage allocation" : "usage credits";
  if (!o) return `Now using ${d}`;
  let _ = r && !u ? ` \xB7 Your ${o} resets ${r}` : "";
  return `You're now using ${d}${_}`;
}

function fhe() {
  let e = Fn();
  return e === "pro" || e === "enterprise" ? Nw.seven_day : Nw.seven_day_sonnet;
}

function phe() {
  return eb()
    ? " \xB7 run /usage-credits to ask your admin for a higher limit"
    : " \xB7 ask your admin for a higher limit";
}

function Pb(e, t, r, o) {
  let u = o?.progressSavedSuffix ? " \xB7 progress saved" : "";
  return `You've hit your ${e}${t}${u}`;
}

export { $3, $A, B3, B3e, B9n, BNt, BVe, BWn, Ble, Bsn, C3, CG, DG, FNt, FW, Fj, Fy, G2e, G3, HD, Idt, Ih, Ij, Iye, Jm, K1, K3, Kan, Kp, Kzn, L3, LB, LG, LL, LNt, Lj, Lsn, Lw, Lye, MNt, Mge, Mj, Msn, Mye, N3e, NVe, Nj, Nye, OG, P3, Pj, Q2e, Q9n, Qf, Qge, R4e, Rj, Rle, SIe, Sdt, T2e, Tin, Tj, U3, U3e, UNt, Uge, Usn, V4n, VL, VVe, Vle, W2e, W3, W9n, WWn, Wan, XQt, XWn, Xge, YIe, YVe, YWn, Z8, ZE, Zge, Zin, Zw, _3, _Ge, _Ie, _Jt, _Ve, _dt, _ye, aS, ahe, asn, b2e, b3n, c7, cVe, cYe, cge, cj, eYe, esn, f2e, f3e, fJt, fVe, fZt, fut, g1t, g3e, gge, h2e, hee, hj, i2e, i9n, iF, iL, iSe, ihe, isn, iut, j3, j3e, j9n, jMt, jWn, jge, k3, kh, lL, lVe, lhe, lj, lqn, m1t, m3e, mge, mhe, n2e, nVe, nYe, nhe, oVe, oYe, ohe, ok, osn, p3e, pd, q2e, q8, qB, qW, rL, rYe, rhe, rle, s7t, sL, she, ssn, sut, t3, tC, tan, uD, v3, vj, vle, w2e, xee, xh, xye, y3, yVe, ydt, z2e, z3, zIe, zW, zjn };
