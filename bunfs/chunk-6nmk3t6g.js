// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { mf, bbt, Sr, nS, a7e, oN, I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { l, E } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { ce } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { P$, nrr } from "/$bunfs/root/chunk-a48rnvhj.js";
import { DT, Us } from "/$bunfs/root/chunk-v7yhn7cf.js";
import { Yo } from "/$bunfs/root/chunk-nf8aaj8a.js";
import { Fu, i5e, LF, MF } from "/$bunfs/root/chunk-qnrh4abv.js";
var b = 16,
  A = 64;
function OKn(e, i) {
  if (e.startedAt !== i.startedAt) return e.startedAt < i.startedAt;
  let s = e.procStart ?? "",
    t = i.procStart ?? "";
  if (s !== t) return s < t;
  return e.pid < i.pid;
}
function Vhr(e, i, s) {
  return i.filter((t) => t.pid !== s && t.name !== void 0 && t.procStart !== void 0 && Sr(t.name) === e);
}
function R(e) {
  return new Set(e.flatMap((i) => (i.name === void 0 ? [] : [Sr(i.name)])));
}
function Khr(e, i, s = P$) {
  let t = (r) => `${ce(e, DT - r.length - 1)}-${r}`;
  for (let r = 0; r < b; r++) {
    let o = t(s());
    if (!i.has(Sr(o))) return o;
  }
  for (let r = 2; ; r++) {
    let o = t(`${s()}-${r}`);
    if (!i.has(Sr(o))) return o;
  }
}
function Xhr(e) {
  let { desiredName: i, self: s, live: t, moment: r, slug: o } = e,
    a = e.suffixBase ?? i,
    c = Sr(i);
  if (!c) return { kind: "keep" };
  let d = Vhr(c, t, s.pid),
    u =
      r === "rename"
        ? d
        : r === "startup"
          ? d.filter((f) => OKn(f, s))
          : d.filter((f) =>
              OKn({ ...f, startedAt: f.nameSince ?? f.startedAt }, { ...s, startedAt: s.nameSince ?? s.startedAt }),
            );
  if (u.length === 0) return { kind: "keep" };
  return { kind: "yield", newName: Khr(a, R(t), o), holders: u };
}
class LKn {
  correspondents = new Map();
  senderMode = null;
  userTypedName = void 0;
  hasAdopter = !1;
  lastYield = void 0;
  yielded = Ue();
  pendingYield = void 0;
  noteCorrespondent(e, i, s) {
    if (!e || mf(e).scheme !== "uds") return;
    if (
      (this.correspondents.delete(e),
      this.correspondents.set(e, { pid: i, procStart: s }),
      this.correspondents.size > A)
    ) {
      let t = this.correspondents.keys().next().value;
      if (t !== void 0) this.correspondents.delete(t);
    }
  }
  announceYield(e, i) {
    (this.pendingYield = [e, i]), this.yielded.emit(e, i);
  }
  reset() {
    this.correspondents.clear(),
      (this.lastYield = void 0),
      this.yielded.clear(),
      (this.pendingYield = void 0),
      (this.senderMode = null),
      (this.userTypedName = void 0),
      (this.hasAdopter = !1);
  }
}
var Yhr = new J(() => new LKn());
function ih() {
  return Yhr.of(G().host);
}
function xpn(e, i, s) {
  ih().noteCorrespondent(e, i, s);
}
function x2t() {
  let e = ih(),
    i = e.pendingYield;
  return (e.pendingYield = void 0), i;
}
var w = { whenRegistered: a7e, listLive: LF };
function Ipn() {
  return I("tengu_session_name_uniqueness", !0);
}
async function Dze(e, i, s = w, t = e) {
  if (!Ipn()) return { name: e, yielded: !1 };
  if (((t = Ppn(t) ?? t), !(await s.whenRegistered()))) return { name: e, yielded: !1 };
  try {
    let r = await s.listLive(),
      o = r.find((u) => u.pid === process.pid);
    if (!o) return { name: e, yielded: !1 };
    let a = Xhr({ desiredName: e, self: o, live: r, moment: i, slug: s.slug, suffixBase: t });
    if (a.kind === "keep") return { name: e, yielded: !1 };
    let c = _(e, o),
      d = Us(c !== void 0 && Sr(c) !== Sr(e) ? c : a.newName) || a.newName;
    return (
      n(`[session-name] "${e}" is held by live pid ${a.holders[0]?.pid}; this session takes "${d}"`, { level: "info" }),
      y("session_name_collision"),
      (ih().lastYield = { base: Sr(t), name: d }),
      { name: d, yielded: !0 }
    );
  } catch (r) {
    return (
      n(`[session-name] uniqueness check failed, keeping "${e}": ${l(r)}`, { level: "warn" }),
      p("session_name_collision", "check_failed"),
      { name: e, yielded: !1 }
    );
  }
}
function _(e, i) {
  let s = Qce(e, i.name);
  if (s !== void 0) return s;
  let t = i.name,
    r = t === void 0 ? void 0 : C(t);
  if (t === void 0 || r === void 0) return;
  let o = Ppn(e) ?? e,
    a = ce(o, DT - r.suffix.length - 1);
  return r.base.toLowerCase() === a.toLowerCase() ? t : void 0;
}
function C(e) {
  let i = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
  if (!i || !nrr(i[1].toLowerCase())) return;
  let s = e.slice(0, e.length - i[0].length);
  return s.length > 0 ? { base: s, suffix: i[0].slice(1) } : void 0;
}
function Qce(e, i) {
  if (!Ipn()) return;
  let s = ih().lastYield,
    t = Ppn(e) ?? e;
  return s !== void 0 && i !== void 0 && Sr(s.name) === Sr(i) && s.base === Sr(t) ? i : void 0;
}
function h(e) {
  let i = nS();
  return i !== void 0 && Sr(i.name) === Sr(e);
}
function Ppn(e) {
  return C(e)?.base;
}
var M = 3000;
function k(e) {
  setTimeout(e, M).unref();
}
async function Dpn(e) {
  let { sessionNameArg: i, interactive: s, writeName: t, onRenamed: r, deps: o } = e,
    a = e.scheduleRecheck ?? k;
  if (i) await t(i, e.sessionNameArgSource ?? "user");
  let c = nS();
  if (!s || !c || c.source === "derived") return;
  if (i) ih().userTypedName = i;
  let d = async (u, f, g = u) => {
    if (f && !h(u)) return;
    let m = await Dze(u, f ? "recheck" : "startup", o, g);
    if (!h(u)) return;
    if (!m.yielded) {
      if (!f) a(() => void d(u, !0));
      return;
    }
    if ((await t(m.name, "collision"), ih().userTypedName === u)) ih().userTypedName = m.name;
    if ((r?.(m.name, u), ih().announceYield(m.name, u), !f)) a(() => void d(m.name, !0, u));
  };
  await d(c.name, !1);
}
function zmt(e) {
  let { name: i, onYield: s, deps: t } = e,
    r = e.suffixBase ?? i;
  (e.scheduleRecheck ?? k)(() => {
    (async () => {
      if (!h(i)) return;
      let a = await Dze(i, "recheck", t, r);
      if (!a.yielded || !h(i)) return;
      if (ih().userTypedName === i) ih().userTypedName = a.name;
      await s(a.name, i);
    })();
  });
}
function I2t(e, i, s) {
  let t = nS();
  if (t === void 0 || t.source === "derived") return;
  if (t.source === "collision" && Qce(e?.name ?? i, t.name) !== void 0) return;
  let r = Sr(t.name);
  if ((e !== void 0 && r === Sr(e.name)) || r === Sr(i) || r === Sr(s)) return;
  return t;
}
async function Zce(e, i, s = {}) {
  let t = s.deps ?? w,
    r = e ? Us(e) : "";
  if (!r || !(await t.whenRegistered())) return;
  if (s.autoOnly) {
    await oN(r, i, "auto");
    return;
  }
  let o = nS();
  if (o !== void 0 && o.source !== "auto" && o.source !== "derived" && Sr(o.name) === Sr(r)) return;
  let a = await Dze(r, "rename", t);
  if (I2t(o, r, a.name)) return;
  let c = async (d, u) => {
    await oN(d, i, "collision"), ih().announceYield(d, u);
  };
  if (!a.yielded) {
    await oN(r, i), zmt({ name: r, deps: t, onYield: c });
    return;
  }
  if ((await oN(a.name, i, "collision"), zmt({ name: a.name, suffixBase: r, deps: t, onYield: c }), a.name === o?.name))
    return;
  ih().announceYield(a.name, r);
}
async function Opn(e, i, s, t, r = i5e, o = w.listLive) {
  if (!Ipn() || !Yo() || ih().correspondents.size === 0) return;
  let a = MF(),
    [c, d, u] = [e, i, s].map(Us),
    f = `This session was renamed from "${c}" to "${d}" ("${u}" is held by another live session on this machine). Address this one as "${d}" from now on.`,
    g;
  try {
    g = new Map((await o(t)).map((m) => [m.pid, m.sock]));
  } catch (m) {
    n(`[session-name] rename notice skipped: registry unreadable (${E(m) ?? l(m)})`);
    return;
  }
  await Promise.all(
    [...ih().correspondents].map(async ([m, { pid: v, procStart: x }]) => {
      let { scheme: P, target: S } = mf(m);
      if (P !== "uds" || !S || (a !== void 0 && bbt(S, a)) || g.get(v) !== S) return;
      try {
        await r(S, f, t, d, void 0, void 0, ih().senderMode?.(), {
          trackReceipts: !1,
          expectPeerPid: v,
          ...(x !== void 0 && { expectPeerProcStart: x }),
        });
      } catch (N) {
        n(`[session-name] rename notice to ${Fu(m)} failed: ${E(N) ?? "send error"}`);
      }
    }),
  );
}
export { OKn, Vhr, Khr, Xhr, LKn, Yhr, ih, xpn, x2t, Ipn, Dze, Qce, Ppn, Dpn, zmt, I2t, Zce, Opn };
