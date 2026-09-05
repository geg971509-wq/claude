// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { t } from "/$bunfs/root/chunk-he2phymk.js";
import { U, e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { Lb, ml, z_, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { fn } from "/$bunfs/root/chunk-yz031c9r.js";
F();
F();
function s(u) {
  return u !== "";
}
function d(p, c) {
  z_(p) ? (p.key ?? c) : c;
  return r(U, { children: [c > 0 && e(t, { dimColor: true, children: " \xB7 " }), p] });
}
function fe(h) {
  let y = _(5),
    { children: f } = h,
    m,
    n;
  if (y[0] !== f) {
    n = fn;
    bb0: {
      let g = Lb.toArray(f).filter(s);
      if (g.length === 0) {
        n = null;
        break bb0;
      }
      m = g.map(d);
    }
    (y[0] = f), (y[1] = m), (y[2] = n);
  } else (m = y[1]), (n = y[2]);
  if (n !== fn) return n;
  let i;
  if (y[3] !== m) (i = e(U, { children: m })), (y[3] = m), (y[4] = i);
  else i = y[4];
  return i;
}
export { fe };
