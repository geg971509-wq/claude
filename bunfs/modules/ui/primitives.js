// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { o, t, hn, ut } from "/$bunfs/root/chunk-he2phymk.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";

// Consolidated from chunk-vnpdqx6v.js
function sr(x) {
  let d = _(9),
    { children: a, hint: R } = x;
  if (!R) {
    let c;
    if (d[0] !== a) (c = e(t, { dimColor: true, children: a })), (d[0] = a), (d[1] = c);
    else c = d[1];
    return c;
  }
  let c;
  if (d[2] !== a) (c = e(t, { dimColor: true, children: a })), (d[2] = a), (d[3] = c);
  else c = d[3];
  let i;
  if (d[4] !== R) (i = e(t, { dimColor: true, children: R })), (d[4] = R), (d[5] = i);
  else i = d[5];
  let m;
  if (d[6] !== c || d[7] !== i)
    (m = r(o, { flexDirection: "column", children: [c, i] })), (d[6] = c), (d[7] = i), (d[8] = m);
  else m = d[8];
  return m;
}
export { sr };

// Consolidated from chunk-1ckq10h3.js
function Dc(R) {
  let u = _(7),
    { children: d, color: e, textColor: k, padded: x, bold: l, wrap: s } = R,
    o = x ? " " : "";
  const m = k ?? (e ? "inverseText" : void 0);
  let h;
  if (u[0] !== l || u[1] !== d || u[2] !== e || u[3] !== o || u[4] !== m || u[5] !== s)
    (h = r(t, { backgroundColor: e, color: m, bold: l, wrap: s, children: [o, d, o] })),
      (u[0] = l),
      (u[1] = d),
      (u[2] = e),
      (u[3] = o),
      (u[4] = m),
      (u[5] = s),
      (u[6] = h);
  else h = u[6];
  return h;
}
export { Dc };

// Consolidated from chunk-rwpk2km7.js
function Hh(m) {
  let u = _(10),
    { added: o, removed: f, bold: e } = m;
  if (o === 0 && f === 0) {
    return null;
  }
  let p;
  if (u[0] !== o || u[1] !== e)
    (p = o > 0 && r(t, { color: "diffAddedWord", bold: e, children: ["+", o] })), (u[0] = o), (u[1] = e), (u[2] = p);
  else p = u[2];
  const R = o > 0 && f > 0 && " ";
  let b;
  if (u[3] !== e || u[4] !== f)
    (b = f > 0 && r(t, { color: "diffRemovedWord", bold: e, children: ["-", f] })), (u[3] = e), (u[4] = f), (u[5] = b);
  else b = u[5];
  let d;
  if (u[6] !== p || u[7] !== R || u[8] !== b)
    (d = r(t, { children: [p, R, b] })), (u[6] = p), (u[7] = R), (u[8] = b), (u[9] = d);
  else d = u[9];
  return d;
}
export { Hh };

// Consolidated from chunk-5ypr8mk6.js
function wi(g) {
  let y = _(10),
    { children: f, color: d, title: m } = g,
    s = hn();
  const i = s ? void 0 : "round",
    R = s ? 0 : 1,
    h = m ? 1 : 0;
  let p;
  if (y[0] !== d || y[1] !== m)
    (p = m && e(t, { bold: true, color: d, children: m })), (y[0] = d), (y[1] = m), (y[2] = p);
  else p = y[2];
  let T;
  if (y[3] !== f || y[4] !== d || y[5] !== i || y[6] !== R || y[7] !== h || y[8] !== p)
    (T = r(o, { borderStyle: i, borderColor: d, flexDirection: "column", paddingX: R, gap: h, children: [p, f] })),
      (y[3] = f),
      (y[4] = d),
      (y[5] = i),
      (y[6] = R),
      (y[7] = h),
      (y[8] = p),
      (y[9] = T);
  else T = y[9];
  return T;
}
export { wi };

// Consolidated from chunk-7sf2fttr.js
function Iy(R) {
  let u = _(6),
    { children: r, paddingX: b, marginTop: t, marginBottom: d } = R,
    n = b === void 0 ? 1 : b;
  const a = hn() ? void 0 : "dashed";
  let l;
  if (u[0] !== r || u[1] !== d || u[2] !== t || u[3] !== n || u[4] !== a)
    (l = e(o, {
      borderStyle: a,
      borderColor: "subtle",
      borderLeft: false,
      borderRight: false,
      flexDirection: "column",
      overflow: "hidden",
      paddingX: n,
      marginTop: t,
      marginBottom: d,
      children: r,
    })),
      (u[0] = r),
      (u[1] = d),
      (u[2] = t),
      (u[3] = n),
      (u[4] = a),
      (u[5] = l);
  else l = u[5];
  return l;
}
export { Iy };

// Consolidated from chunk-ebn06b52.js
function DR(d) {
  let f = _(2),
    { children: e, when: p } = d;
  if (!(p === void 0 ? true : p)) {
    return null;
  }
  let a;
  if (f[0] !== e) (a = r(t, { dimColor: true, children: [" (", e, ")"] })), (f[0] = e), (f[1] = a);
  else a = f[1];
  return a;
}
export { DR };

// Consolidated from chunk-1a0t5wmw.js
function tp(n) {
  let s = _(2),
    { url: o } = n,
    a;
  if (s[0] !== o) (a = r(t, { dimColor: true, children: ["Learn more: ", e(ut, { url: o })] })), (s[0] = o), (s[1] = a);
  else a = s[1];
  return a;
}
export { tp };

// Consolidated from chunk-r9qj0qxk.js
function xr(D) {
  let K = _(7),
    { onKeyDown: t, flexDirection: f, gap: n, tabIndex: s, autoFocus: v, children: r } = D,
    a = f === void 0 ? "column" : f,
    c = s === void 0 ? 0 : s,
    p = v === void 0 ? true : v,
    l;
  if (K[0] !== p || K[1] !== r || K[2] !== a || K[3] !== n || K[4] !== t || K[5] !== c)
    (l = e(o, { flexDirection: a, gap: n, tabIndex: c, autoFocus: p, onKeyDown: t, children: r })),
      (K[0] = p),
      (K[1] = r),
      (K[2] = a),
      (K[3] = n),
      (K[4] = t),
      (K[5] = c),
      (K[6] = l);
  else l = K[6];
  return l;
}
export { xr };

// Consolidated from chunk-dytkb9e7.js
function Pc(x) {
  let f = _(7),
    { children: p, subtitle: c } = x,
    a;
  if (f[0] !== p) (a = e(t, { bold: true, children: p })), (f[0] = p), (f[1] = a);
  else a = f[1];
  let R;
  if (f[2] !== c) (R = c && e(t, { dimColor: true, children: c })), (f[2] = c), (f[3] = R);
  else R = f[3];
  let l;
  if (f[4] !== a || f[5] !== R)
    (l = r(o, { flexDirection: "column", children: [a, R] })), (f[4] = a), (f[5] = R), (f[6] = l);
  else l = f[6];
  return l;
}
export { Pc };
