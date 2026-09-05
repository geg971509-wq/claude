// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { c1e, YY } from "/$bunfs/root/chunk-ghara6r1.js";
import { t, ut } from "/$bunfs/root/chunk-he2phymk.js";
import { e } from "/$bunfs/root/chunk-8s7kcbyw.js";
function Kj(T) {
  let y = _(9),
    { children: o, color: f, bold: x } = T,
    r;
  if (y[0] !== o) {
    r = [];
    let s = 0;
    for (const a of o.matchAll(c1e)) {
      let m = YY(a[0]);
      if (a.index > s) r.push(o.slice(s, a.index));
      r.push(e(ut, { url: m, children: m }, a.index)), (s = a.index + m.length);
    }
    let c;
    if (y[2] !== o || y[3] !== s) (c = o.slice(s)), (y[2] = o), (y[3] = s), (y[4] = c);
    else c = y[4];
    r.push(c);
    (y[0] = o), (y[1] = r);
  } else r = y[1];
  let c;
  if (y[5] !== x || y[6] !== f || y[7] !== r)
    (c = e(t, { color: f, bold: x, children: r })), (y[5] = x), (y[6] = f), (y[7] = r), (y[8] = c);
  else c = y[8];
  return c;
}
export { Kj };
