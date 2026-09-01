// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { QZ, Ef } from "/$bunfs/root/chunk-93max1bs.js";
import { y, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { pc } from "/$bunfs/root/chunk-1pn2pk9v.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { t, ut } from "/$bunfs/root/chunk-he2phymk.js";
import { W } from "/$bunfs/root/chunk-ht28m404.js";
import { jB } from "/$bunfs/root/chunk-zze8764r.js";
import { U, e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { A, F } from "/$bunfs/root/chunk-twm95mhz.js";
F();
F();
var F7t = "current-pr";
function NLn(o, i) {
  if (!o || !i) return null;
  let l = o.kind === "cr" && false,
    p = o.kind === "mr";
  return {
    prefix: p ? "MR" : "PR",
    label: `${p ? "!" : "#"}${o.number}`,
    url: i,
    dedupUrl: o.url,
    color: te(o.reviewState),
  };
}
function te(o) {
  switch (o) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
function v(o, i, l) {
  return;
}
function FLn(o, i, l) {
  A(() => {
    if (i === void 0) return;
    v(o, i, l === "cr" || l === "mr");
  }, [o, i, l]);
}
function de(Le) {
  return Le.settings?.prUrlTemplate;
}
function qj(Ee) {
  let m = _(41),
    {
      number: S,
      url: c,
      reviewState: Y,
      bold: u,
      color: D,
      dimColor: O,
      inverse: d,
      underline: oe,
      hidePrefix: I,
      kind: ie,
    } = Ee,
    he = oe === void 0 ? true : oe,
    f = ie === "cr" && false,
    s = ie === "mr",
    C = s ? "!" : "#",
    j = W(de),
    se;
  if (m[0] !== f || m[1] !== s || m[2] !== j || m[3] !== c)
    (se = f || s ? c : jB(c, j)), (m[0] = f), (m[1] = s), (m[2] = j), (m[3] = c), (m[4] = se);
  else se = m[4];
  let R = se,
    ue,
    le;
  if (m[5] !== f || m[6] !== s || m[7] !== c || m[8] !== R)
    (ue = () => {
      v(R, c, f || s);
    }),
      (le = [R, c, f, s]),
      (m[5] = f),
      (m[6] = s),
      (m[7] = c),
      (m[8] = R),
      (m[9] = ue),
      (m[10] = le);
  else (ue = m[9]), (le = m[10]);
  A(ue, le);
  let ae;
  if (m[11] !== D || m[12] !== Y) (ae = D ?? J(Y)), (m[11] = D), (m[12] = Y), (m[13] = ae);
  else ae = m[13];
  let b = ae,
    k = !d && (O || (!b && !u)),
    pe;
  if (m[14] !== u || m[15] !== k || m[16] !== C || m[17] !== d || m[18] !== S || m[19] !== b)
    (pe = r(t, { color: b, dimColor: k, bold: u, inverse: d, children: [C, S] })),
      (m[14] = u),
      (m[15] = k),
      (m[16] = C),
      (m[17] = d),
      (m[18] = S),
      (m[19] = b),
      (m[20] = pe);
  else pe = m[20];
  let q = pe,
    M;
  if (m[21] !== u || m[22] !== O || m[23] !== I || m[24] !== s)
    (M = !I && r(U, { children: [e(t, { dimColor: O || !u, children: s ? "MR" : "PR" }), " "] })),
      (m[21] = u),
      (m[22] = O),
      (m[23] = I),
      (m[24] = s),
      (m[25] = M);
  else M = m[25];
  const K = !d && he;
  let w;
  if (m[26] !== u || m[27] !== k || m[28] !== C || m[29] !== d || m[30] !== S || m[31] !== b || m[32] !== K)
    (w = r(t, { color: b, dimColor: k, underline: K, bold: u, inverse: d, children: [C, S] })),
      (m[26] = u),
      (m[27] = k),
      (m[28] = C),
      (m[29] = d),
      (m[30] = S),
      (m[31] = b),
      (m[32] = K),
      (m[33] = w);
  else w = m[33];
  let x;
  if (m[34] !== q || m[35] !== w || m[36] !== R)
    (x = e(ut, { url: R, fallback: q, assumeSupport: true, children: w })),
      (m[34] = q),
      (m[35] = w),
      (m[36] = R),
      (m[37] = x);
  else x = m[37];
  let ce;
  if (m[38] !== x || m[39] !== M) (ce = r(t, { children: [M, x] })), (m[38] = x), (m[39] = M), (m[40] = ce);
  else ce = m[40];
  return ce;
}
function J(o) {
  switch (o) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
export { F7t, NLn, FLn, qj };
