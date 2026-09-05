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
import { zue, a_t, h_ } from "/$bunfs/root/chunk-ky33xsw7.js";
import { xt } from "/$bunfs/root/chunk-8cv6dqkz.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { e } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { B, A, C, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
var g = 2000,
  x = 2000;
function Yj(r) {
  let s = xt(),
    [P, a] = u(null),
    n = C(null),
    l = C(null),
    o = C(null),
    p = C(0),
    f = C(true),
    m = B(() => {
      (p.current += 1),
        o.current?.(),
        (o.current = null),
        (l.current = null),
        n.current?.(),
        (n.current = null),
        a(null);
    }, []);
  A(() => {
    if ((m(), r !== null)) a_t();
  }, [r, m]),
    A(
      () => (
        (f.current = true),
        () => {
          (f.current = false), o.current?.(), (o.current = null), (l.current = null), n.current?.(), (n.current = null);
        }
      ),
      [],
    );
  let v = B(
    (b) => {
      if (l.current === b) return;
      (l.current = b),
        o.current?.(),
        (o.current = s.setTimeout(() => {
          (o.current = null), (l.current = null);
        }, g));
      let y = zue(),
        R = p.current;
      h_(b).then((h) => {
        if (!f.current || R !== p.current) return;
        if (h) process.stdout.write(h);
        if ((n.current?.(), (n.current = null), a(y), y === "native"))
          n.current = s.setTimeout(() => {
            (n.current = null), a(null);
          }, x);
      });
    },
    [s],
  );
  return { copiedVia: P, copy: v, reset: m };
}
function cL(W) {
  let L = _(2),
    { via: k } = W;
  if (k === "native") {
    let c;
    if (L[0] === d) (c = e(t, { color: "success", children: "(Copied!)" })), (L[0] = c);
    else c = L[0];
    return c;
  }
  if (k === null) {
    let c;
    if (L[1] === d)
      (c = e(t, { dimColor: true, children: e(M, { chord: "c", action: "copy", parens: true }) })), (L[1] = c);
    else c = L[1];
    return c;
  }
  return null;
}
function uL(G) {
  let E = _(2),
    { via: U } = G;
  if (U === "tmux-buffer") {
    let i;
    if (E[0] === d)
      (i = e(t, { dimColor: true, children: "(Copied to tmux buffer \xB7 select the URL manually if paste fails)" })),
        (E[0] = i);
    else i = E[0];
    return i;
  }
  if (U === "osc52") {
    let i;
    if (E[1] === d)
      (i = e(t, { dimColor: true, children: "(Sent via OSC 52 \xB7 select the URL manually if paste fails)" })),
        (E[1] = i);
    else i = E[1];
    return i;
  }
  return null;
}
export { Yj, cL, uL };
