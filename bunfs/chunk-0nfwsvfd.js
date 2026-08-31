// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { o, t } from "/$bunfs/root/chunk-he2phymk.js";
import { wo } from "/$bunfs/root/chunk-hyj9nfhh.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
function rr(S) {
  let a = _(10),
    { message: m, bold: b, dimColor: C, subtitle: i } = S,
    s = b === void 0 ? !1 : b,
    p = C === void 0 ? !1 : C,
    R;
  if (a[0] === d) (R = e(wo, {})), (a[0] = R);
  else R = a[0];
  let l;
  if (a[1] !== s || a[2] !== p || a[3] !== m)
    (l = r(o, { flexDirection: "row", children: [R, r(t, { bold: s, dimColor: p, children: [" ", m] })] })),
      (a[1] = s),
      (a[2] = p),
      (a[3] = m),
      (a[4] = l);
  else l = a[4];
  let n;
  if (a[5] !== i) (n = i && e(t, { dimColor: !0, children: i })), (a[5] = i), (a[6] = n);
  else n = a[6];
  let y;
  if (a[7] !== l || a[8] !== n)
    (y = r(o, { flexDirection: "column", children: [l, n] })), (a[7] = l), (a[8] = n), (a[9] = y);
  else y = a[9];
  return y;
}
export { rr };
