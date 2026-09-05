// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Ee } from "/$bunfs/root/chunk-rp246vnd.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { o, t } from "/$bunfs/root/chunk-he2phymk.js";
import { Pa } from "/$bunfs/root/chunk-kez2zndg.js";
import { rE } from "/$bunfs/root/chunk-1y0jc48h.js";
import { U, e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { Lb, ml, z_, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { se } from "/$bunfs/root/chunk-q1fyd2qk.js";
F();
F();
function ne(Ne) {
  return Lb.toArray(Ne.props.children);
}
function re(ge) {
  return ge.header !== void 0;
}
function oe(Ce) {
  return Ce.header;
}
var k = { start: "flex-start", center: "center", end: "flex-end" },
  H = 2;
function te(n) {
  if (typeof n === "string" || typeof n === "number") return true;
  if (z_(n) && n.type === ml) return true;
  return false;
}
function W(n, c, u) {
  if (!te(n)) return n;
  return e(t, { dimColor: c.dim && !u, bold: c.bold || u, children: n });
}
function I(n) {
  return se(rE(n));
}
function O(n, c, u, b) {
  let s = n.length,
    m = n.map((i, a) => {
      let f = u ? I(i.header) : 0;
      for (let l of c) f = Math.max(f, I(l[a]));
      return f;
    }),
    d = Array(s),
    h = [];
  for (let i = 0; i < s; i++) {
    let a = n[i].width;
    if (a === "fill") d[i] = 0;
    else if (typeof a === "number") d[i] = a;
    else if (a && "ratio" in a && a.ratio !== void 0) h.push(i), (d[i] = 0);
    else if (a) d[i] = Pa(m[i], a.min ?? 0, a.max ?? 1 / 0);
    else d[i] = m[i];
  }
  if (h.length > 0) {
    let i = d.reduce((l, p) => l + p, 0),
      a = Math.max(0, b - H * (s - 1) - i),
      f = h.reduce((l, p) => l + (n[p].width.ratio ?? 0), 0);
    for (let l of h) {
      let p = n[l].width,
        K = f > 0 ? Math.floor((a * (p.ratio ?? 0)) / f) : 0;
      d[l] = Pa(K, p.min ?? 1, p.max ?? 1 / 0);
    }
  }
  return d;
}
function R(he) {
  let q = _(11),
    { cells: w, columns: P, widths: N, isHeader: y } = he,
    A;
  if (q[0] !== w || q[1] !== P || q[2] !== y || q[3] !== N) {
    let g;
    if (q[5] !== w || q[6] !== y || q[7] !== N)
      (g = (C, S) =>
        r(U, {
          children: [
            S > 0 && e(o, { width: H, flexShrink: 0 }),
            C.width === "fill"
              ? e(o, {
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: 0,
                  minWidth: 1,
                  justifyContent: k[C.align ?? "start"],
                  children: W(w[S], C, y),
                })
              : e(o, {
                  width: N[S] || void 0,
                  flexShrink: 0,
                  justifyContent: k[C.align ?? "start"],
                  children: W(w[S], C, y),
                }),
          ],
        })),
        (q[5] = w),
        (q[6] = y),
        (q[7] = N),
        (q[8] = g);
    else g = q[8];
    A = P.map(g);
    (q[0] = w), (q[1] = P), (q[2] = y), (q[3] = N), (q[4] = A);
  } else A = q[4];
  let g;
  if (q[9] !== A) (g = e(o, { flexDirection: "row", children: A })), (q[9] = A), (q[10] = g);
  else g = q[10];
  return g;
}
function z(pe) {
  let be = _(2),
    { children: v } = pe,
    L;
  if (be[0] !== v) (L = e(U, { children: v })), (be[0] = v), (be[1] = L);
  else L = be[1];
  return L;
}
function D(xe) {
  let Q = _(12),
    { columns: x, children: B, forceWidth: we } = xe,
    { columns: ye } = Ee(),
    G = we ?? ye,
    T,
    M,
    j,
    E;
  if (Q[0] !== B || Q[1] !== x || Q[2] !== G) {
    let V = Lb.toArray(B).filter(z_);
    let X = V.map(ne);
    let Z = x.some(re);
    let J = O(x, X, Z, G);
    T = o;
    M = "column";
    j = Z && e(R, { cells: x.map(oe), columns: x, widths: J, isHeader: true });
    E = X.map((Re, Y) => e(R, { cells: Re, columns: x, widths: J, isHeader: false }, V[Y].key ?? Y));
    (Q[0] = B), (Q[1] = x), (Q[2] = G), (Q[3] = T), (Q[4] = M), (Q[5] = j), (Q[6] = E);
  } else (T = Q[3]), (M = Q[4]), (j = Q[5]), (E = Q[6]);
  let ee;
  if (Q[7] !== T || Q[8] !== M || Q[9] !== j || Q[10] !== E)
    (ee = r(T, { flexDirection: M, children: [j, E] })), (Q[7] = T), (Q[8] = M), (Q[9] = j), (Q[10] = E), (Q[11] = ee);
  else ee = Q[11];
  return ee;
}
var zs = Object.assign(D, { Row: z });
export { zs };
