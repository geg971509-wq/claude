// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Cl, Cj, iHn, sHn } from "/$bunfs/root/chunk-f9h0bg01.js";
import { k } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { wt } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { r8e, de, Zyt } from "/$bunfs/root/chunk-xgfepdf4.js";
import { jL, lp, Pm, cp, Uee } from "/$bunfs/root/chunk-zze8764r.js";
function Uq() {
  if (!wt()) return true;
  return Cl() !== null && iHn();
}
function B$n(e) {
  let t = Cj(e),
    n = sHn(e);
  return () => {
    t(), n();
  };
}
function _he() {
  if (de().autoReact.enabledMemo !== true) return new Set();
  return new Set(Array.from(u(), (e) => e.slug));
}
function eZ() {
  let { autoReact: e, durable: t, live: n, wakes: r } = de(),
    i = new Set();
  if (e.enabledMemo === false || e.userDisarmed) return i;
  for (let [o, s] of n.bootingWiredArms) {
    if (s.scanGeneration !== r.scanGeneration || n.retiredInFlightArms.has(o) || t.stopLatches.isStopped(o)) continue;
    if (!lp(o) || (s.freshPublish && cp(o) && s.stopGeneration === jL(o))) i.add(o);
  }
  return i;
}
function* u() {
  for (let e of de().live.supervisors.values()) if (!e.stopped && e.autoReactWiring !== void 0 && !Pm(e.slug)) yield e;
}
function jZt(e) {
  let { live: t } = de();
  for (let n of u()) if (e?.reconnecting !== true || n.timer !== void 0 || t.inFlightSubscribes.has(n.slug)) return true;
  return false;
}
function j$n() {
  return de().autoReact.enabledMemo === true && jZt({ reconnecting: true });
}
function kot(e) {
  let t = de().live;
  for (let n of e) {
    let r = t.supervisors.get(n);
    if (r !== void 0) r8e(r), t.supervisors.delete(n);
    Zyt(n);
  }
  l(e);
}
function l(e) {
  let t = de().live;
  for (let n of e)
    if (t.inFlightSubscribes.has(n) && !t.supervisors.has(n))
      t.retiredInFlightArms.add(n), t.bootingWiredArms.delete(n), t.inFlightWiredIntent.delete(n);
}
var b0e = 1e4;
function a() {
  return de().autoReact.unattendedReplies;
}
function WZt(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, b0e));
}
function qZt(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, b0e));
  }
}
function W$n(e) {
  let t = a(),
    n = t.get(e) ?? 0;
  return t.delete(e), n;
}
function Hot() {
  let e = de().autoReact,
    t = e.unattendedReplies;
  e.unattendedReplies = new Map();
  let n = 0;
  for (let r of t.values()) n += r;
  return { total: n, bySlug: t };
}
function xot(e, { where: t, stop: n }) {
  return Uee(`Claude auto-replied to ${e} ${k(e, "comment")}${t} while you were away.${n}`, "notice");
}
export { Uq, B$n, _he, eZ, jZt, j$n, kot, b0e, WZt, qZt, W$n, Hot, xot };
