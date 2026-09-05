// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { E } from "/$bunfs/root/chunk-ypdw393e.js";
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { tc, Pr, vJ, vm, ove, XT, bg, re, P, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { Bp } from "/$bunfs/root/chunk-z0z1xzkg.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { PU, qCt, bA } from "/$bunfs/root/chunk-56sxk8k2.js";
var M = new Set(["ENOENT", "ENOTDIR"]),
  N = new Set(["EAGAIN", "EBUSY", "EMFILE", "ENFILE", "ENOSPC", "EDQUOT", "ENOMEM"]);
function U(e) {
  let r = E(e);
  return r !== void 0 && M.has(r);
}
function Am(e, r) {
  return E(e) === r;
}
function R(e) {
  let r = E(e);
  return r !== void 0 && N.has(r);
}
function x(e) {
  return U(e) ? { kind: "absent" } : { kind: "fs", error: e };
}
function v5(e) {
  return e.kind === "fs" ? (E(e.error) ?? "unknown") : e.kind;
}
async function Ie(e) {
  try {
    return re(await e);
  } catch (r) {
    return P(x(r));
  }
}
async function $O(e) {
  try {
    return re(await e);
  } catch (r) {
    return P({ kind: "fs", error: r });
  }
}
function qar(e) {
  try {
    return re(e());
  } catch (r) {
    return P(x(r));
  }
}
function Ke(e, r) {
  switch (e.kind) {
    case "reentrant":
      return Pr("invariant", { telemetryCode: "ReentrantLock" });
    case "contended":
      return tc("unknown", { telemetryCode: "LockContended" });
    case "suspect":
      return tc("unknown", { telemetryCode: "LockSuspect" });
    case "corruptRecord":
      return Pr("invariant", { telemetryCode: "LiveRecordUnverified" });
    case "absent":
      return Pr("unknown", { telemetryCode: "UnexpectedAbsent" });
    case "classified":
      return e.error;
    case "fs":
    case "linkRefused":
      return lFe(e.error, r);
  }
}
function NC(e, r, t) {
  return e.kind === "absent" && !t ? bg(r) : Ke(e, r);
}
function lFe(e, r) {
  let t = E(e),
    o = XT(t);
  if (t !== void 0 && N.has(t)) return tc(o, { telemetryCode: t });
  return Pr(o, { cause: e, ...(r !== void 0 && { key: r }), ...(t !== void 0 && { telemetryCode: t }) });
}
import { constants as b } from "fs";
import { link as j, lstat as l, open as g, readlink as _, realpath as L, stat as H, unlink as B } from "fs/promises";
import { basename as Y, dirname as F, isAbsolute as K, join as W, parse as V } from "path";
var wy = 384,
  qCe = 438,
  h4 = 448,
  joe = 511,
  Gar = 493;
async function _4(e, r, t = wy) {
  let o = await Ie(l(e));
  if (!o.ok && o.error.kind !== "absent") return P(o.error);
  if (o.ok && !o.value.isFile()) return P(hJ(e, o.value));
  return Ie(g(e, r | Bp, t));
}
async function pb(e) {
  if (Bp === 0) return _4(e, b.O_RDONLY);
  return C(e, await Ie(g(e, b.O_RDONLY | Bp)));
}
async function zar(e) {
  if (Bp === 0) {
    let r = await $O(l(e));
    if (!r.ok) return P(r.error);
    if (!r.value.isFile()) return P(hJ(e, r.value));
    return $O(g(e, b.O_RDONLY | Bp));
  }
  return C(e, await $O(g(e, b.O_RDONLY | Bp)));
}
function C(e, r) {
  return !r.ok && r.error.kind === "fs" && Am(r.error.error, "ELOOP") ? P({ kind: "fs", error: Bs(e, "ELOOP") }) : r;
}
function Bs(e, r) {
  return Object.assign(X(r), { code: r, path: e });
}
function y4(e) {
  return { kind: "fs", error: Bs(e, vJ) };
}
function hJ(e, r) {
  return { kind: "fs", error: Bs(e, r.isSymbolicLink() ? "ELOOP" : "ENXIO") };
}
function X(e) {
  switch (e) {
    case "ELOOP":
      return Error("refusing a symlinked path");
    case "ENXIO":
      return Error("refusing a non-regular file");
    case "EISDIR":
      return Error("refusing a directory at the leaf");
    case "ENOTDIR":
      return Error("refusing a non-directory node on a write path");
    case "EFBIG":
      return Error("refusing a file over the size cap");
    case vJ:
      return Error("refusing a value that has a second name (hard link)");
    case vm:
      return Error("refusing a value whose opened object is no longer at its key");
    case ove:
      return Error("refusing a hardened read the host cannot verify");
  }
}
async function Var(e, r) {
  let t = await NRn();
  if (!t.ok) return t;
  if (t.value) {
    let s = await Ie(_(`/proc/self/fd/${e.fd}`));
    if (s.ok) return re(!s.value.endsWith(" (deleted)") && s.value === r);
    if (s.error.kind === "fs" && R(s.error.error)) return s;
    return s.error.kind === "fs" && Am(s.error.error, "ENAMETOOLONG") ? re(false) : re("unavailable");
  }
  let [o, i] = await Promise.all([Ie(l(r, { bigint: true })), Ie(e.stat({ bigint: true }))]);
  if (!i.ok) return i;
  let a = h(o, i.value);
  if (!a.ok || a.value !== true) return a;
  let f = await Ie(L(F(r)));
  if (!f.ok) return f.error.kind === "absent" ? re(false) : f;
  if (f.value !== F(r)) return re(false);
  let u = await Ie(l(r, { bigint: true })),
    c = h(u, i.value);
  if (!c.ok || c.value !== true) return c;
  return (o.ok && o.value.nlink > 1n) || (u.ok && u.value.nlink > 1n) || i.value.nlink > 1n ? re("otherNames") : re(true);
}
function h(e, r) {
  if (!e.ok) return e.error.kind === "absent" ? re(false) : e;
  if (!e.value.isFile()) return re(false);
  if (!Vm(r.ino) || !Vm(e.value.ino) || r.nlink === 0n || e.value.nlink === 0n) return re("unavailable");
  return re(e.value.ino === r.ino && e.value.dev === r.dev);
}
class T {
  available = void 0;
  probing = void 0;
  procUnreadableLogged = false;
}
var z = new J(() => new T());
function Q() {
  return z.of(G().host);
}
async function NRn() {
  let e = Q();
  if (e.available !== void 0) return re(e.available);
  return (e.available = false), re(false);
}
function Vm(e) {
  return e !== 0n && e !== -1n && e !== 0xffffffffffffffffn;
}
function GCe(e) {
  return Vm(e.inode) ? `${e.device}:${e.inode}` : void 0;
}
function FC(e) {
  let r = e / 1000000000n;
  if (r * 1000000000n > e) r -= 1n;
  return Number(r) * 1000 + Number(e - r * 1000000000n) / 1e6;
}
var FRn = "LinkMisdirected",
  qAt = "LinkUnverified",
  $Rn = "IdentityUnverified";
async function cFe(e, r, t) {
  if (!Vm(r.inode)) return P({ kind: "classified", error: tc("unknown", { telemetryCode: qAt }) });
  let o = await Ie(j(e, t));
  if (!o.ok) return o;
  let i = await Ie(l(t, { bigint: true }));
  if (!i.ok)
    return i.error.kind === "absent" ? P({ kind: "classified", error: tc("unknown", { telemetryCode: qAt }) }) : i;
  if (!Vm(i.value.ino)) return P({ kind: "classified", error: tc("unknown", { telemetryCode: qAt }) });
  if (p(i.value, r) || (await S(t, r))) return re(void 0);
  let a = { device: i.value.dev, inode: i.value.ino },
    [f, u] = await Promise.all([Ie(l(e, { bigint: true })), Ie(H(e, { bigint: true }))]),
    c = (f.ok && p(f.value, a)) || (u.ok && p(u.value, a));
  if (
    (n(
      `storage: a link publish landed on another object (expected ${r.device}:${r.inode}, found ${a.device}:${a.inode}, ${i.value.isSymbolicLink() ? "a symlink" : `nlink ${i.value.nlink}`}); ${c ? "the staged name was swapped \u2014 removing the entry" : "leaving the entry"}`,
      { level: "warn" },
    ),
    c)
  ) {
    let s = await Ie(l(t, { bigint: true }));
    if (s.ok && p(s.value, a)) await Ie(B(t));
  }
  return P({ kind: "classified", error: tc("unknown", { telemetryCode: FRn }) });
}
async function URn(e, r) {
  let t = await Ie(l(e, { bigint: true }));
  if (!t.ok) return false;
  return p(t.value, r) || S(e, r);
}
async function S(e, r) {
  let t = await Ie(g(e, b.O_RDONLY | Bp));
  if (!t.ok) return false;
  try {
    let o = await Ie(t.value.stat({ bigint: true }));
    return o.ok && p(o.value, r);
  } finally {
    await Ie(t.value.close());
  }
}
function p(e, r) {
  return Vm(e.ino) && e.dev === r.device && e.ino === r.inode;
}
async function GAt(e, r) {
  if (D() === "windows") return re(/^[\\/]/.test(e));
  if (bA(e)) return re(true);
  let t = e.startsWith("/"),
    o = y(r);
  if (t && !k(e, o) && !m(e)) return re(false);
  let i = await Ie(L(r));
  if (!i.ok) return i;
  let a = [...o, ...y(i.value)];
  if (t) return re(k(e, a) || m(e));
  return re(k(r + "/" + e, a) || k(i.value + "/" + e, a) || m(r + "/" + e) || m(i.value + "/" + e));
}
function A(e) {
  if (!e.startsWith("/")) return false;
  let r = [];
  for (let t of e.split("/")) {
    if (t === "" || t === ".") continue;
    if (t === "..") {
      r.pop();
      continue;
    }
    r.push(t);
  }
  return r.length === 1 && (r[0].toLowerCase() === "net" || r[0].toLowerCase() === "network");
}
function Z(e) {
  let r = /^[\\/]{2}([^\\/]+)[\\/]+([^\\/]+)/.exec(e);
  return r === null ? void 0 : `//${r[1].toLowerCase()}/${r[2].toLowerCase()}`;
}
function q(e, r) {
  if (r === void 0) return false;
  let t = e.replace(/\\/g, "/").toLowerCase();
  return t === r || t.startsWith(r + "/");
}
function y(e) {
  let r = PU(e);
  return r === null ? [] : [r.replace(/[A-Z]/g, (t) => t.toLowerCase())];
}
function k(e, r) {
  return qCt(e).some((t) => !r.includes(t));
}
function m(e) {
  if (!e.startsWith("/")) return false;
  let r = [];
  for (let t of e.split("/")) {
    if (t === "" || t === ".") continue;
    if (t === "..") {
      r.pop();
      continue;
    }
    if ((r.push(t), r.length === 2 && r[0].toLowerCase() === "network")) return true;
  }
  return false;
}
var oVt = 40;
async function iVt(e, r = []) {
  let t = D() === "windows" ? /[\\/]+/ : /\/+/,
    o = await Ie(L(F(e)));
  if (!o.ok) return o.error.kind === "absent" ? re("clear") : o;
  let i = o.value,
    a = y(o.value),
    f = Z(o.value),
    u = [Y(e), ...r],
    c = 0;
  while (u.length > 0) {
    let s = u.shift();
    if (s === "" || s === ".") continue;
    if (s === "..") {
      i = F(i);
      continue;
    }
    let v = W(i, s);
    if (ee(v, a, u[0], f)) return re("network");
    let w = await Ie(l(v));
    if (!w.ok) return w.error.kind === "absent" ? re("clear") : w;
    if (!w.value.isSymbolicLink()) {
      i = v;
      continue;
    }
    if (++c > oVt) return re("tooLong");
    let d = await Ie(_(v));
    if (!d.ok) return d.error.kind === "absent" ? re("clear") : d;
    let O = await GAt(d.value, i);
    if (!O.ok) return O;
    if (O.value) return re("network");
    let I = K(d.value);
    if (I) i = V(d.value).root;
    u.unshift(...d.value.slice(I ? i.length : 0).split(t));
  }
  return re("clear");
}
function ee(e, r, t, o) {
  if (A(e) && /(^|\/)net$/i.test(e)) return t === void 0 || k(`${e}/${t}`, r);
  if (q(e, o)) return false;
  return ne(e, r);
}
function ne(e, r = []) {
  return bA(e) || A(e) || k(e, r) || m(e);
}
export {
  Am,
  v5,
  Ie,
  $O,
  qar,
  Ke,
  NC,
  lFe,
  wy,
  qCe,
  h4,
  joe,
  Gar,
  _4,
  pb,
  zar,
  Bs,
  y4,
  hJ,
  Var,
  NRn,
  Vm,
  GCe,
  FC,
  FRn,
  qAt,
  $Rn,
  cFe,
  URn,
  GAt,
  oVt,
  iVt,
};
