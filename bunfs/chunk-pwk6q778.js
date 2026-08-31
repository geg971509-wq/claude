// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { wlt } from "/$bunfs/root/chunk-pbmajbn7.js";
import { Et } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { Dx, Lx } from "/$bunfs/root/chunk-he2phymk.js";
import { U, e } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { yn, qn, F } from "/$bunfs/root/chunk-twm95mhz.js";
F();
import { PassThrough as R } from "stream";
function l() {}
var bke = yn(!1);
function Cb(k) {
  let u = _(5),
    { children: s } = k,
    { exit: a } = Dx(),
    m,
    p;
  if (u[0] !== a)
    (m = () => {
      let y = setTimeout(a, 0);
      return () => clearTimeout(y);
    }),
      (p = [a]),
      (u[0] = a),
      (u[1] = m),
      (u[2] = p);
  else (m = u[1]), (p = u[2]);
  qn(m, p);
  let f;
  if (u[3] !== s) (f = e(U, { children: s })), (u[3] = s), (u[4] = f);
  else f = u[4];
  return f;
}
async function tv(r, t) {
  r.render(e(Cb, { children: t })), await r.waitUntilExit();
}
async function cse(r, { columns: t, storageV5: n }) {
  let i = "",
    c = !1,
    o = new R();
  if (t !== void 0) o.columns = t;
  return (
    o.on("data", (d) => {
      if (c) return;
      (c = !0), (i = d.toString());
    }),
    await (
      await Lx(
        e(Cb, { children: e(bke.Provider, { value: !0, children: e(wlt, { value: l, children: r }) }) }),
        { stdout: o, patchConsole: !1 },
        { storageV5: n },
      )
    ).waitUntilExit(),
    i
  );
}
async function knt(r, t) {
  let n = await cse(r, t);
  return Et(n);
}
export { bke, Cb, tv, cse, knt };
