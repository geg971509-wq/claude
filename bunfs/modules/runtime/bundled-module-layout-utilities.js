// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { eS, Ot, Yh } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { W } from "/$bunfs/root/chunk-ht28m404.js";
import { Ts } from "/$bunfs/root/chunk-b6a5y1qe.js";
import { A, z, fv, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { fPe, Yee } from "/$bunfs/root/chunk-zze8764r.js";
F();
function ZC() {
  let [o, e] = fv((r) => r + 1, 0);
  return A(() => Yh(e), []), o;
}
function fnt(o) {
  return ZC(), o();
}
F();
function H0t(o, e) {
  return fPe(o) ?? fPe(e) ?? eS();
}
function mnt(o) {
  return Ot(H0t(o.mainLoopModelForSession, o.mainLoopModel));
}
function IK() {
  let o = W((n) => n.mainLoopModel),
    e = W((n) => n.mainLoopModelForSession),
    r = ZC(),
    i = Ts();
  return z(() => Yee(e, o), [e, o, r, i]);
}
function gnt() {
  let o = W((n) => n.mainLoopModel),
    e = W((n) => n.mainLoopModelForSession),
    r = ZC(),
    i = Ts();
  return z(() => H0t(e, o), [e, o, r, i]);
}
function Oc() {
  let o = W((n) => n.mainLoopModel),
    e = W((n) => n.mainLoopModelForSession),
    r = ZC(),
    i = Ts();
  return z(() => mnt({ mainLoopModel: o, mainLoopModelForSession: e }), [e, o, r, i]);
}
export { ZC, fnt, H0t, mnt, IK, gnt, Oc };
