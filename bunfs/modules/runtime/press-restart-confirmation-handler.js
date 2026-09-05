// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { o, t, Dx } from "/$bunfs/root/chunk-he2phymk.js";
import { Be } from "/$bunfs/root/chunk-ek4tmwbt.js";
import { Xn } from "/$bunfs/root/chunk-ht28m404.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
function TUe(k) {
  let n = _(17),
    { Wizard: f, cancelledEvent: v, onDone: C } = k,
    g = Dx(),
    x = Xn(),
    [a, A] = u(null),
    E;
  if (n[0] !== g || n[1] !== x)
    (E = () => {
      g.exit();
      let { proactivityLevel: B, toolPermissionContext: j } = x.getState();
      import("/$bunfs/root/chunk-e11r672p.js").then((q) =>
        q.execRelaunch({ proactivity: { proactivityLevel: B, toolPermissionContext: j } }),
      );
    }),
      (n[0] = g),
      (n[1] = x),
      (n[2] = E);
  else E = n[2];
  const y = a !== null;
  let J;
  if (n[3] !== y) (J = { context: "Confirmation", isActive: y }), (n[3] = y), (n[4] = J);
  else J = n[4];
  if ((Be("confirm:yes", E, J), a !== null)) {
    let i;
    if (n[5] !== a) (i = e(t, { color: "success", children: a })), (n[5] = a), (n[6] = i);
    else i = n[6];
    let c;
    if (n[7] === d)
      (c = r(t, {
        dimColor: true,
        children: ["Press ", e(t, { bold: true, children: "Enter" }), " to restart Claude Code."],
      })),
        (n[7] = c);
    else c = n[7];
    let l;
    if (n[8] !== i)
      (l = r(o, { flexDirection: "column", gap: 1, marginTop: 1, children: [i, c] })), (n[8] = i), (n[9] = l);
    else l = n[9];
    return l;
  }
  let i;
  if (n[10] === d) (i = (G) => A(G)), (n[10] = i);
  else i = n[10];
  let c;
  if (n[11] !== v || n[12] !== C)
    (c = () => {
      s(v, {}), C();
    }),
      (n[11] = v),
      (n[12] = C),
      (n[13] = c);
  else c = n[13];
  let l;
  if (n[14] !== f || n[15] !== c) (l = e(f, { onComplete: i, onCancel: c })), (n[14] = f), (n[15] = c), (n[16] = l);
  else l = n[16];
  return l;
}
export { TUe };
