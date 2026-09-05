// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { Hoe } from "/$bunfs/root/chunk-2rx5nghb.js";
import { t } from "/$bunfs/root/chunk-he2phymk.js";
import { uu } from "/$bunfs/root/chunk-jmrpkgzd.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { zj } from "/$bunfs/root/chunk-skd1pndb.js";
import { U, e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { yn, We, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
F();
var n = yn(false);
function VRe(L) {
  let S = _(2),
    { children: m } = L,
    x;
  if (S[0] !== m) (x = e(n.Provider, { value: true, children: m })), (S[0] = m), (S[1] = x);
  else x = S[1];
  return x;
}
function Gc() {
  let b = _(3),
    V = We(n),
    q = We(zj),
    l = uu("app:toggleTranscript", "Global", "ctrl+o");
  if (V || q) {
    return null;
  }
  let g;
  if (b[0] === d) (g = { keyCase: "lower" }), (b[0] = g);
  else g = b[0];
  let N;
  if (b[1] !== l)
    (N = e(t, { dimColor: true, children: e(M, { chord: l, action: "expand", parens: true, format: g }) })),
      (b[1] = l),
      (b[2] = N);
  else N = b[2];
  return N;
}
function Jm(K) {
  let u = _(8),
    { count: c, unit: P, expandable: h } = K,
    s = P === void 0 ? "line" : P,
    R = h === void 0 ? false : h;
  if (c <= 0) {
    return null;
  }
  let p;
  if (u[0] !== c || u[1] !== s) (p = Hoe(c, s)), (u[0] = c), (u[1] = s), (u[2] = p);
  else p = u[2];
  let f;
  if (u[3] !== R) (f = R && r(U, { children: [" ", e(Gc, {})] })), (u[3] = R), (u[4] = f);
  else f = u[4];
  let v;
  if (u[5] !== p || u[6] !== f) (v = r(t, { dimColor: true, children: [p, f] })), (u[5] = p), (u[6] = f), (u[7] = v);
  else v = u[7];
  return v;
}
export { VRe, Gc, Jm };
