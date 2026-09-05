// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Io } from "/$bunfs/root/chunk-q04k5ycg.js";
import { CB, fG, LA, E9e, q_e, Xa, j0, Nx } from "/$bunfs/root/chunk-pbmajbn7.js";
import { F1, x8 } from "/$bunfs/root/chunk-e28mhr30.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { e } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { We, qae, F } from "/$bunfs/root/chunk-twm95mhz.js";
F();
function nq(q) {
  let d = _(11),
    { children: m, mouseTracking: w, background: s } = q,
    n = w === void 0 ? "full" : w,
    C = We(j0),
    t = We(Nx),
    A,
    S;
  if (d[0] !== s || d[1] !== t)
    (A = () => {
      let p = Io.get(process.stdout);
      if (!t || !s) {
        return;
      }
      return (
        t(E9e(s)),
        p?.setAltScreenBackground(s),
        () => {
          if (p ? !p.isAltScreenActive : false) {
            return;
          }
          p?.setAltScreenBackground(void 0), t(q_e());
        }
      );
    }),
      (S = [t, s]),
      (d[0] = s),
      (d[1] = t),
      (d[2] = A),
      (d[3] = S);
  else (A = d[2]), (S = d[3]);
  qae(A, S);
  let v, y;
  if (d[4] !== n || d[5] !== t)
    (v = () => {
      let f = Io.get(process.stdout);
      if (!t) {
        return;
      }
      return (
        t(fG() + x8(n)),
        f?.setAltScreenActive(true, n),
        () => {
          let D = f ? !f.isAltScreenActive : false;
          if ((f?.setAltScreenActive(false), f?.clearTextSelection(), D)) {
            t(n !== "off" ? F1 : "");
            return;
          }
          t((n !== "off" ? F1 : "") + LA() + (f?.hasUnmounted ? "" : CB()));
        }
      );
    }),
      (y = [t, n]),
      (d[4] = n),
      (d[5] = t),
      (d[6] = v),
      (d[7] = y);
  else (v = d[6]), (y = d[7]);
  qae(v, y);
  const a = C?.rows ?? 24;
  let P;
  if (d[8] !== m || d[9] !== a)
    (P = e(Xa, { flexDirection: "column", height: a, width: "100%", flexShrink: 0, children: m })),
      (d[8] = m),
      (d[9] = a),
      (d[10] = P);
  else P = d[10];
  return P;
}
export { nq };
