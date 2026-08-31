// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { R } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { eD, $x, Mlt, Nlt } from "/$bunfs/root/chunk-debmm3sq.js";
import { ODe } from "/$bunfs/root/chunk-gdk3p0b3.js";
import { Pue } from "/$bunfs/root/chunk-5xr818a0.js";
import { i, v, H, f } from "/$bunfs/root/chunk-saay52v7.js";
import { Nn } from "/$bunfs/root/chunk-c48t1p6v.js";
import { Ru } from "/$bunfs/root/chunk-56sxk8k2.js";
import { randomUUID as L } from "crypto";
import { lstat as I, mkdir as O, open as B, readdir as C, stat as T, unlink as N, writeFile as M } from "fs/promises";
import { basename as b, dirname as U, isAbsolute as j, join as F, resolve as X } from "path";
var Y = Nlt * 24 * 60 * 60 * 1000,
  k = "file-transfers";
function S(t) {
  n(`[peer-file-transfer] ${t}`);
}
function EWe(t) {
  let e = b(t).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment",
    r = e.lastIndexOf("."),
    o = r > 0 && e.length - r <= 16 ? e.slice(r) : "",
    a = o ? e.slice(0, r) : e,
    l = 200 - o.length;
  return (a.length > l ? a.slice(0, l) : a) + o;
}
function Hst(t, e) {
  return `[SendFile: "${EWe(t)}" was not delivered \u2014 ${e}]`;
}
function xst(t) {
  return `[SendFile: ${t} additional attachment(s) were dropped \u2014 max ${$x} per message]`;
}
function FDt(t, e) {
  if (typeof e.file_size === "number" && t.length !== e.file_size) return !1;
  return Nn(t) === e.sha256;
}
function $Dt(t, e, r) {
  if ((s("tengu_send_file_received", { transport: c(t), file_count: e, verified_count: r }), r === e))
    y("peer_file_receive");
  else if (r > 0) g("peer_file_receive", "partial_failed");
  else p("peer_file_receive", "all_failed");
}
async function Ist(t, e) {
  try {
    let o = await T(t);
    if (!o.isFile() || o.size > e) return null;
  } catch {
    return null;
  }
  let r;
  try {
    r = await B(t, "r");
  } catch {
    return null;
  }
  try {
    let o = await r.stat();
    if (!o.isFile() || o.size > e) return null;
    return await r.readFile();
  } catch {
    return null;
  } finally {
    await r.close().catch(() => {});
  }
}
function UDt(t, e) {
  if (!e) return t;
  let r = /^<cross-session-message\b[^>]*>\n?/.exec(t);
  return r ? r[0] + e + t.slice(r[0].length) : e + t;
}
function AWe() {
  return F(be(), k);
}
function Ffr() {
  return Pue();
}
var G = /^[0-9a-f]{64}$/,
  V = m(() =>
    f({
      path: i(),
      file_name: i(),
      file_size: v().int().nonnegative(),
      sha256: i().regex(G),
      media_type: i().optional(),
    }),
  ),
  Z = m(() => H(V()));
async function vrn(t) {
  let e = await Ist(t, eD);
  if (e === null) throw new R(Mlt, "peer file transfer: source unreadable or over the size limit");
  let r = Nn(e),
    o = AWe();
  await O(o, { recursive: !0, mode: 448 });
  let a = b(t),
    l = F(o, `${r.slice(0, 8)}-${L().slice(0, 8)}-${EWe(a)}`);
  return await M(l, e, { mode: 384 }), { path: l, file_name: a, file_size: e.length, sha256: r, media_type: ODe(a) };
}
async function Rrn() {
  let t = AWe();
  try {
    let e = await C(t),
      r = Date.now() - Y;
    for (let o of e.slice(0, 200)) {
      let a = F(t, o);
      try {
        let l = await T(a);
        if (l.isFile() && l.mtimeMs < r) await N(a);
      } catch {}
    }
  } catch {}
}
var q = { prefix: "", received: 0, verified: 0 };
async function GEr(t) {
  let e = Z().safeParse(t);
  if (!e.success || e.data.length === 0) {
    if (!e.success) S(`ignoring malformed file_attachments: ${e.error.message}`);
    return q;
  }
  let r = [],
    o = e.data;
  if (o.length > $x) r.push(xst(o.length - $x)), (o = o.slice(0, $x));
  let a = Ffr(),
    l = AWe(),
    x = !1,
    z = [],
    D = 0;
  for (let u of o) {
    let d = (_) => {
      S(`${u.file_name}: ${_}`), r.push(Hst(u.file_name, _));
    };
    if (Ru(u.path) || !j(u.path)) {
      d("invalid transfer path");
      continue;
    }
    let h = X(u.path),
      P = U(h);
    if (Ru(h) || b(P) !== k) {
      d("transfer path is outside the file-transfer spool");
      continue;
    }
    try {
      if (!(await I(P)).isDirectory() || !(await I(h)).isFile()) {
        d("the transfer copy is not a regular file");
        continue;
      }
    } catch {
      d("the transfer copy could not be read (it may have expired)");
      continue;
    }
    let w = await Ist(h, eD);
    if (w === null) {
      d("the transfer copy could not be read (it may have expired)");
      continue;
    }
    if (!FDt(w, u)) {
      d("it failed integrity verification");
      continue;
    }
    let E = F(a, `${u.sha256.slice(0, 8)}-${L().slice(0, 8)}-${EWe(u.file_name)}`);
    try {
      if (!x) await O(a, { recursive: !0, mode: 448 }), (x = !0);
      await M(E, w, { mode: 384, flag: "wx" });
    } catch (_) {
      d("it could not be written to the uploads directory"), S(`write ${E} failed: ${_}`);
      continue;
    }
    if ((D++, z.push(`@"${E}"`), P === l)) N(h).catch(() => {});
  }
  let A = [...z, ...r];
  return { prefix: A.length > 0 ? A.join(" ") + " " : "", received: o.length, verified: D };
}
export { EWe, Hst, xst, FDt, $Dt, Ist, UDt, AWe, Ffr, vrn, Rrn, GEr };
