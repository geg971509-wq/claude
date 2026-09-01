// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { Uv, xF } from "/$bunfs/root/chunk-d5s7a9by.js";
import { bbn, t7e } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { o, t } from "/$bunfs/root/chunk-he2phymk.js";
import { uu } from "/$bunfs/root/chunk-jmrpkgzd.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { yn, We, z, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { L } from "/$bunfs/root/chunk-v4qqyykc.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
F();
var s = yn(false);
function gBe(J) {
  let K = _(2),
    { children: x } = J,
    y;
  if (K[0] !== x) (y = e(s.Provider, { value: true, children: x })), (K[0] = x), (K[1] = y);
  else y = K[1];
  return y;
}
function YU(Q, V) {
  let W = We(s);
  return Boolean(Q || V || W);
}
var G = "cyan_FOR_SUBAGENTS_ONLY";
function ES(n) {
  if (!n) return G;
  if (xF(n)) return Uv[n];
  return `ansi:${n}`;
}
F();
var A = { keyCase: "lower" };
function JU(po) {
  let a = _(18),
    { displayName: C, count: k, addMargin: B, fallbackLabel: O, body: c } = po,
    S = k === void 0 ? 1 : k,
    mo = B === void 0 ? true : B,
    E = uu("app:toggleTranscript", "Global", "ctrl+o"),
    H;
  if (a[0] !== C || a[1] !== O) (H = t7e(C) || O), (a[0] = C), (a[1] = O), (a[2] = H);
  else H = a[2];
  let N = H,
    U;
  if (a[3] !== c) (U = c ? bbn(c) : ""), (a[3] = c), (a[4] = U);
  else U = a[4];
  let f = U;
  const P = mo ? 1 : 0;
  let w;
  if (a[5] === d) (w = r(t, { "aria-hidden": true, children: [L.pointerSmall, " "] })), (a[5] = w);
  else w = a[5];
  const h = S === 1 ? "Message" : `${S} messages`;
  let l;
  if (a[6] !== f) (l = f ? r(t, { italic: true, children: [": ", f] }) : ""), (a[6] = f), (a[7] = l);
  else l = a[7];
  let T;
  if (a[8] !== E) (T = e(M, { chord: E, action: "expand", parens: true, format: A })), (a[8] = E), (a[9] = T);
  else T = a[9];
  let R;
  if (a[10] !== N || a[11] !== h || a[12] !== l || a[13] !== T)
    (R = r(t, { dimColor: true, children: [w, h, " from @", N, l, " ", T] })),
      (a[10] = N),
      (a[11] = h),
      (a[12] = l),
      (a[13] = T),
      (a[14] = R);
  else R = a[14];
  let D;
  if (a[15] !== R || a[16] !== P) (D = e(o, { marginTop: P, children: R })), (a[15] = R), (a[16] = P), (a[17] = D);
  else D = a[17];
  return D;
}
export { gBe, YU, ES, JU };
