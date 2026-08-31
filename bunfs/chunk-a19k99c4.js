// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Zt, Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import "/$bunfs/root/chunk-vfy57cpd.js";
import "/$bunfs/root/chunk-4xj01xwv.js";
import { X } from "/$bunfs/root/chunk-ypdw393e.js";
import "/$bunfs/root/chunk-tx16jn0x.js";
import { Wn } from "/$bunfs/root/chunk-nqmqabr8.js";
import "/$bunfs/root/chunk-f9h0bg01.js";
import "/$bunfs/root/chunk-qq1mdtb5.js";
import { Ge, b, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import "/$bunfs/root/chunk-gcks6mn0.js";
import "/$bunfs/root/chunk-qk7r0t2g.js";
import "/$bunfs/root/chunk-4ddxwr9r.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import "/$bunfs/root/chunk-eqdctte5.js";
import "/$bunfs/root/chunk-fec4384a.js";
import "/$bunfs/root/chunk-qm65zb83.js";
import "/$bunfs/root/chunk-wkxx62a2.js";
import "/$bunfs/root/chunk-0pgyw7te.js";
import { VN, aa, Cm } from "/$bunfs/root/chunk-f5hrzy3k.js";
import { $Tt } from "/$bunfs/root/chunk-492vgtnr.js";
import { i, v, H, f, dt, oe, N } from "/$bunfs/root/chunk-saay52v7.js";
import "/$bunfs/root/chunk-jzh4kg5x.js";
import "/$bunfs/root/chunk-7s7jqj2f.js";
import "/$bunfs/root/chunk-56sxk8k2.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import "/$bunfs/root/chunk-a4q326ap.js";
import { mkdir as k, readFile as h, stat as B, unlink as _ } from "fs/promises";
import { dirname as E, join as M } from "path";
var S = 50,
  x = 14400000,
  Z = 900000,
  I = 120000;
function ee(e, r, t) {
  return r - e <= t && e - r <= I;
}
var T = 64,
  p = m(() => i().max(256).refine($Tt)),
  z = m(() =>
    f({
      sessionId: dt([N(""), p()]),
      environmentId: p(),
      source: oe(["standalone", "repl"]),
      pid: v().optional(),
      procStart: i().optional(),
      activeSessionIds: H(p()).max(T).optional(),
      activeSessionIdsPersistedAt: v().int().min(0).max(8640000000000000).optional(),
    }),
  );
function g(e) {
  return M(aa(), Cm(e), "bridge-pointer.json");
}
function P(e) {
  let r = Cm(e);
  return Zt(r) ? Te.bridgePointer(r) : null;
}
async function re(e, r, t) {
  let o = g(e),
    a = O() && t !== void 0 ? P(e) : null;
  if (O() && t !== void 0 && a) {
    let l = await t.write(a, b(r), { mode: 438 & ~process.umask() });
    if (!l.ok) return n(`[bridge:pointer] write failed: ${Ge(l.error)}`, { level: "warn" }), !1;
    return n(`[bridge:pointer] wrote ${o}`), !0;
  }
  try {
    return await k(E(o), { recursive: !0 }), await Wn(o, b(r)), n(`[bridge:pointer] wrote ${o}`), !0;
  } catch (l) {
    return n(`[bridge:pointer] write failed: ${l}`, { level: "warn" }), !1;
  }
}
function te() {
  let e = Promise.resolve();
  return (r) => ((e = e.then(r, r)), e);
}
async function w(e, r, t) {
  let o = g(e),
    a,
    l,
    d = t ? P(e) : null;
  if (t && d) {
    let c = await t.read([d]);
    if (!c.ok || !c.value.items[0].found) return null;
    (l = c.value.items[0].mtimeMs), (a = Buffer.from(c.value.items[0].value).toString("utf8"));
  } else
    try {
      (l = (await B(o)).mtimeMs), (a = await h(o, "utf8"));
    } catch {
      return null;
    }
  let u = z().safeParse(R(a));
  if (!u.success) {
    if (!r?.noClear) n(`[bridge:pointer] invalid schema, clearing: ${o}`), await y(e, t);
    return null;
  }
  let s = Math.max(0, Date.now() - l);
  if (s > x) {
    if (!r?.noClear) n(`[bridge:pointer] stale (>4h mtime), clearing: ${o}`), await y(e, t);
    return null;
  }
  return { ...u.data, ageMs: s };
}
async function ne(e, r) {
  let t = await w(e, void 0, r);
  if (t) return { pointer: t, dir: e };
  let o = await VN(e);
  if (o.length <= 1) return null;
  if (o.length > S) return n(`[bridge:pointer] ${o.length} worktrees exceeds fanout cap ${S}, skipping`), null;
  let a = Cm(e),
    l = o.filter((s) => Cm(s) !== a),
    d = await Promise.all(
      l.map(async (s) => {
        let c = await w(s, void 0, r);
        return c ? { pointer: c, dir: s } : null;
      }),
    ),
    u = null;
  for (let s of d) if (s && (!u || s.pointer.ageMs < u.pointer.ageMs)) u = s;
  if (u) n(`[bridge:pointer] fanout found pointer in worktree ${u.dir} (ageMs=${u.pointer.ageMs})`);
  return u;
}
async function y(e, r) {
  let t = g(e),
    o = r ? P(e) : null;
  if (r && o) {
    let a = await r.delete(o);
    if (a.ok || a.error.code === "NotFound") n(`[bridge:pointer] cleared ${t}`);
    else n(`[bridge:pointer] clear failed: ${Ge(a.error)}`, { level: "warn" });
    return;
  }
  try {
    await _(t), n(`[bridge:pointer] cleared ${t}`);
  } catch (a) {
    if (!X(a)) n(`[bridge:pointer] clear failed: ${a}`, { level: "warn" });
  }
}
function R(e) {
  try {
    return V(e);
  } catch {
    return null;
  }
}
export {
  x as BRIDGE_POINTER_TTL_MS,
  T as MAX_POINTER_ACTIVE_SESSION_IDS,
  Z as PERSISTED_SESSION_RESUME_WINDOW_MS,
  I as PERSISTED_STAMP_FUTURE_SKEW_MS,
  y as clearBridgePointer,
  te as createBridgePointerWriteQueue,
  g as getBridgePointerPath,
  ee as isPersistedStampFresh,
  w as readBridgePointer,
  ne as readBridgePointerAcrossWorktrees,
  re as writeBridgePointer,
};
