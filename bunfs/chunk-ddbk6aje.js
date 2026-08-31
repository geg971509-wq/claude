// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { E, X } from "/$bunfs/root/chunk-ypdw393e.js";
import { b, V, le } from "/$bunfs/root/chunk-fv016jr6.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { ype } from "/$bunfs/root/chunk-mznd09c6.js";
import { Wn, QH } from "/$bunfs/root/chunk-nqmqabr8.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { ai } from "/$bunfs/root/chunk-56sxk8k2.js";
var m = 65534,
  A = new Set([
    "/",
    "/dev",
    "/dev/shm",
    "/run",
    "/run/user",
    "/tmp",
    "/var",
    "/var/tmp",
    "/var/run",
    "/home",
    "/var/home",
    "/root",
    "/var/roothome",
    "/mnt",
    "/mnt/wslg",
  ]);
function ZVn() {
  return A;
}
import { readFile as P } from "fs/promises";
async function F() {
  return;
}
function R(e) {
  let t = [];
  for (let n of e.split(`
`)) {
    if (n.trim() === "") continue;
    let r = n.trim().split(/\s+/),
      o = Number(r[0]),
      s = Number(r[1]),
      u = Number(r[2]);
    if (
      r.length !== 3 ||
      !Number.isSafeInteger(o) ||
      o < 0 ||
      !Number.isSafeInteger(s) ||
      s < 0 ||
      !Number.isSafeInteger(u) ||
      u <= 0
    )
      return;
    t.push({ innerStart: o, hostStart: s, count: u });
  }
  return t;
}
function h(e) {
  return e.length === 1 && e[0].innerStart === 0 && e[0].count >= 4294967295;
}
async function S() {
  try {
    return I(await P("/proc/sys/kernel/overflowuid", "utf8"));
  } catch {
    return;
  }
}
function I(e) {
  let t = e.trim();
  if (!/^\d+$/.test(t)) return;
  let n = Number(t);
  return Number.isSafeInteger(n) ? n : void 0;
}
function B(e, t) {
  if (e.length === 0 || t === void 0) return;
  return e.some((r) => t >= r.innerStart && t < r.innerStart + r.count) ? void 0 : t;
}
async function e5n() {
  return;
}
async function L(e, t) {
  let n = await S(),
    r = n ?? m;
  return {
    unmappedOwnerUid: B(e, n),
    uidCollapses: e.length === 0 || (t !== void 0 && t === r),
    rootUidAmbiguous: n === 0,
  };
}
async function XGe() {
  let e = process.getuid?.();
  if (e === void 0) return;
  return e;
}
function FBt() {
  return (ype.uidsCollapse ??= j(le())), ype.uidsCollapse;
}
function j(e) {
  return !1;
}
import { createHash as K, randomBytes as x } from "crypto";
import { lstatSync as z, mkdirSync as W, readFileSync as H, rmSync as G, writeFileSync as Y } from "fs";
import { chmod as U, lstat as l, mkdir as d, readdir as y, readFile as O, rm as _, utimes as J } from "fs/promises";
import { connect as q } from "net";
import { basename as Q, dirname as T, join as i, resolve as Z } from "path";
function c() {
  return i(be(), "daemon");
}
function ee() {
  return K("sha256").update(Z(be())).digest("hex").slice(0, 8);
}
function dX() {
  let e = process.getuid?.() ?? 0,
    t = a.TERMUX_VERSION && a.PREFIX ? i(a.PREFIX, "tmp") : "/tmp";
  return i(t, `cc-daemon-${e}`, ee());
}
var te = /^[a-f0-9]{16}$/,
  ne = ai(
    () => {
      let e = i(c(), "pipe.key");
      for (let t = 0; t < 8; t++) {
        let n;
        try {
          let o = z(e);
          if (!o.isFile() || o.size > 4096) {
            try {
              G(e, { recursive: !0, force: !0 });
            } catch {}
            n = "invalid";
          } else n = H(e, "utf8").trim();
        } catch (o) {
          if (!X(o)) throw o;
        }
        if (n !== void 0) {
          if (te.test(n)) return n;
          if (n === "" && t < 3) continue;
          let o = x(8).toString("hex");
          return QH(e, o, 384), o;
        }
        let r = x(8).toString("hex");
        W(c(), { recursive: !0, mode: 448 });
        try {
          return Y(e, r, { flag: "wx", mode: 384 }), r;
        } catch (o) {
          if (E(o) !== "EEXIST") throw o;
        }
      }
      throw Error("daemon pipe.key is not a valid nonce");
    },
    () => be(),
  );
function v(e) {
  return `\\\\.\\pipe\\cc-daemon-${ne()}-${e}`;
}
function p_(e) {
  return e.replace(/cc-daemon-[0-9a-f]{16}/g, "cc-daemon-*");
}
function yDe(e) {
  if (e instanceof Error) {
    if (((e.message = p_(e.message)), typeof e.stack === "string")) e.stack = p_(e.stack);
  }
  return e;
}
function k() {
  return i(c(), "control.key");
}
async function t5n() {
  let e = k();
  try {
    let n = await l(e);
    if (n.isFile() && n.size <= 4096) {
      let r = (await O(e, "utf8")).trim();
      if (r) return r;
    } else await _(e, { recursive: !0, force: !0 }).catch(() => {});
  } catch (n) {
    if (!X(n)) throw n;
  }
  let t = x(16).toString("hex");
  return await d(c(), { recursive: !0, mode: 448 }), await Wn(e, t, 384), t;
}
async function Rte() {
  try {
    let e = await l(k());
    if (!e.isFile() || e.size > 4096) return;
    return (await O(k(), "utf8")).trim() || void 0;
  } catch {
    return;
  }
}
async function n5n() {
  let e = c();
  if (D() === "windows") {
    await d(e, { recursive: !0 }), await U(e, 448).catch(() => {});
    return;
  }
  await d(e, { recursive: !0, mode: 448 }), N();
  let t = process.getuid?.(),
    n = await l(e);
  if (t !== void 0 && n.uid !== t) throw Error(`refusing to use daemon dir: ${e} is owned by uid ${n.uid}`);
  if ((n.mode & 511) !== 448) await U(e, 448);
}
async function YGe() {
  if (D() === "windows") return;
  let e = dX();
  await d(e, { recursive: !0, mode: 448 });
  let t = new Date();
  await J(e, t, t).catch(() => {}), await C([T(e), e]);
}
var $Bt = "ENOTOWNED";
async function C(e) {
  let t = process.getuid?.();
  N();
  for (let n of e) {
    let r = await l(n);
    if (t !== void 0 && r.uid !== t)
      throw Object.assign(Error(`refusing to bind: ${n} is owned by uid ${r.uid}`), { code: $Bt });
    if ((r.mode & 511) !== 448) await U(n, 448);
  }
}
var Cdn =
  "refusing to use the daemon socket: this process runs in a user namespace without a uid mapping, so directory and peer ownership cannot be verified (start it with a mapping, e.g. unshare -Ur)";
function N() {
  if (FBt()) throw Object.assign(Error(Cdn), { code: $Bt });
}
async function r5n(e) {
  if (D() === "windows") {
    await d(e, { recursive: !0 }).catch(() => {});
    return;
  }
  await YGe();
  let t = [Vbe(), UBt()];
  for (let n of t) await d(n, { recursive: !0, mode: 448 });
  if (!t.includes(e)) {
    if (
      await d(e, { recursive: !0, mode: 448 }).then(
        () => !0,
        () => !1,
      )
    )
      t.push(e);
  }
  await C(t);
}
function o5n() {
  if (D() === "windows") return;
  let e = dX(),
    t = T(e),
    n = Q(e);
  y(t, { withFileTypes: !0 })
    .then(async (r) => {
      for (let o of r) {
        if (!o.isDirectory() || o.name === n) continue;
        let s = i(t, o.name);
        if (!(await re(i(s, "control.sock")))) continue;
        let u = await l(s).catch(() => null);
        if (!u || Date.now() - u.mtimeMs < 1e4) continue;
        let p = await y(i(s, "rv")).catch(() => []),
          g = await y(i(s, "pty")).catch(() => []),
          w = await y(i(s, "spare")).catch(() => []);
        if (p.length || g.length || w.length) continue;
        await _(s, { recursive: !0, force: !0 }).catch(() => {});
      }
    })
    .catch(() => {});
}
function re(e) {
  let t,
    n = new Promise((o) => {
      t = o;
    }),
    r = q(e);
  return (
    r.setTimeout(1000, () => {
      r.destroy(), t(!1);
    }),
    r.on("error", (o) => {
      let s = E(o);
      t(s === "ENOENT" || s === "ECONNREFUSED" || s === "ENOTSOCK");
    }),
    r.once("connect", () => {
      r.end(`{"op":"ping"}
`),
        t(!1);
    }),
    n
  );
}
function kte() {
  return i(c(), "dispatch");
}
function vdn() {
  return i(c(), "dispatch", "rejected");
}
function bF() {
  return i(c(), "roster.json");
}
var Jft = "attach-journal";
function A9() {
  return i(c(), Jft);
}
function UBt() {
  return i(dX(), "rv");
}
function Qft() {
  return i(c(), "auth");
}
function Gbe(e) {
  return i(Qft(), `${e}.json`);
}
function JGe() {
  return i(c(), "host-managed");
}
function pX(e) {
  return i(JGe(), e);
}
function zbe(e) {
  return i(Qft(), `${e}.tokens.json`);
}
function QGe(e) {
  if (D() === "windows") return v(`rv-${e}`);
  return i(UBt(), `${e}.sock`);
}
function Vbe() {
  return i(dX(), "pty");
}
function oh(e) {
  if (D() === "windows") return v(`pty-${e}`);
  return i(Vbe(), `${e}.sock`);
}
function E2() {
  return i(dX(), "spare");
}
function i5n(e) {
  return i(E2(), `${e}.pty.sock`);
}
function s5n(e) {
  return i(E2(), `${e}.claim.sock`);
}
function Uce() {
  return i(c(), "pty-pids");
}
function C9(e) {
  return i(Uce(), `${e}.pid`);
}
function Mh(e) {
  return M(e, "err");
}
function uT(e) {
  return M(e, "late");
}
function M(e, t) {
  if (D() === "windows") return i(Uce(), `${e.split("\\").pop()}.${t}`);
  return `${e}.${t}`;
}
function sM(e) {
  if (D() === "windows") return i(Uce(), `${e.split("\\").pop()}.exec-exit`);
  return `${e}.exec-exit`;
}
function lI() {
  if (D() === "windows") return v("control");
  return N(), i(dX(), "control.sock");
}
var Kbe = 0,
  Zft = 1,
  ZGe = 262144,
  f = 5,
  eze = 1048576,
  fX = 1e4;
function tze(e) {
  let t = typeof e === "string" ? Buffer.from(e, "utf8") : e,
    n = Buffer.allocUnsafe(f + t.length);
  return n.writeUInt32BE(t.length, 0), n.writeUInt8(Kbe, 4), t.copy(n, f), n;
}
function tC(e) {
  let t = Buffer.from(b(e), "utf8"),
    n = Buffer.allocUnsafe(f + t.length);
  return n.writeUInt32BE(t.length, 0), n.writeUInt8(Zft, 4), t.copy(n, f), n;
}
function emt(e, t) {
  let n = Buffer.alloc(0),
    r = !1;
  return (o) => {
    if (r) return;
    n = n.length === 0 ? o : Buffer.concat([n, o]);
    while (n.length >= f) {
      let s = n.readUInt32BE(0);
      if (s > eze) {
        (r = !0), t(`frame too large (${s} > ${eze})`);
        return;
      }
      let u = f + s;
      if (n.length < u) return;
      let p = n.readUInt8(4),
        g = n.subarray(f, u);
      if (((n = n.subarray(u)), p === Kbe)) e({ kind: Kbe, payload: Buffer.from(g) });
      else if (p === Zft) {
        let w;
        try {
          w = V(g.toString("utf8"));
        } catch {
          (r = !0), t("bad ctrl json");
          return;
        }
        e({ kind: Zft, ctrl: w });
      } else {
        (r = !0), t(`unknown frame kind ${p}`);
        return;
      }
    }
  };
}
export {
  ZVn,
  e5n,
  XGe,
  FBt,
  dX,
  p_,
  yDe,
  t5n,
  Rte,
  n5n,
  YGe,
  $Bt,
  Cdn,
  r5n,
  o5n,
  kte,
  vdn,
  bF,
  Jft,
  A9,
  UBt,
  Qft,
  Gbe,
  JGe,
  pX,
  zbe,
  QGe,
  Vbe,
  oh,
  E2,
  i5n,
  s5n,
  Uce,
  C9,
  Mh,
  uT,
  sM,
  lI,
  Kbe,
  Zft,
  ZGe,
  eze,
  fX,
  tze,
  tC,
  emt,
};
