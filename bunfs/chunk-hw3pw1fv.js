// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { j0 } from "/$bunfs/root/chunk-pbmajbn7.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { $t } from "/$bunfs/root/chunk-2rx5nghb.js";
import { o, t, XZ } from "/$bunfs/root/chunk-he2phymk.js";
import { zj } from "/$bunfs/root/chunk-skd1pndb.js";
import { e } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { We, qn, fv, C, F } from "/$bunfs/root/chunk-twm95mhz.js";
function Gj(w) {
  let a = _(10),
    { elapsedTimeSeconds: b, timeoutMs: l } = w;
  if (b === void 0 && !l) {
    return null;
  }
  let v;
  if (a[0] !== l) (v = l ? $t(l, { hideTrailingZeros: true }) : void 0), (a[0] = l), (a[1] = v);
  else v = a[1];
  let x = v;
  if (b === void 0) {
    const m = `(timeout ${x})`;
    let p;
    if (a[2] !== m) (p = e(t, { dimColor: true, children: m })), (a[2] = m), (a[3] = p);
    else p = a[3];
    return p;
  }
  const m = b * 1000;
  let p;
  if (a[4] !== m) (p = $t(m)), (a[4] = m), (a[5] = p);
  else p = a[5];
  let O = p;
  if (x) {
    const u = `(${O} \xB7 timeout ${x})`;
    let d;
    if (a[6] !== u) (d = e(t, { dimColor: true, children: u })), (a[6] = u), (a[7] = d);
    else d = a[7];
    return d;
  }
  const u = `(${O})`;
  let d;
  if (a[8] !== u) (d = e(t, { dimColor: true, children: u })), (a[8] = u), (a[9] = d);
  else d = a[9];
  return d;
}
F();
function y() {
  let r = We(zj),
    [n, i, s, f] = XZ(),
    c = f() ?? i.isVisible;
  return [n, c || r, s];
}
function $_({ children: r }) {
  let n = We(j0),
    [i, s, f] = y(),
    c = C(r),
    [, z] = fv((T) => T + 1, 0),
    R = !s;
  if (!R) c.current = r;
  let V = n?.columns,
    L = n?.rows;
  return (
    qn(() => {
      if (R && f()) z();
    }, [V, L, R, f]),
    e(o, { ref: i, children: c.current })
  );
}
function yBe(r) {
  let [n, i] = y(),
    s = C(r);
  if (i) s.current = r;
  return [n, s.current];
}
export { $_, yBe, Gj };
