// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { o, t, QP } from "/$bunfs/root/chunk-he2phymk.js";
import { Be } from "/$bunfs/root/chunk-ek4tmwbt.js";
import { xn } from "/$bunfs/root/chunk-hb6grkjg.js";
import { ct } from "/$bunfs/root/chunk-pc41wsq4.js";
import { tSe, nSe } from "/$bunfs/root/chunk-zze8764r.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { Ce } from "/$bunfs/root/chunk-1y0jc48h.js";
import { fe } from "/$bunfs/root/chunk-rycvm63e.js";
import { me } from "/$bunfs/root/chunk-489c3cyq.js";
import { xK } from "/$bunfs/root/chunk-rce983ky.js";
import { IBe } from "/$bunfs/root/chunk-qknhnjcs.js";
import { xr } from "/$bunfs/root/chunk-r9qj0qxk.js";
import { Br } from "/$bunfs/root/chunk-2ffqgskx.js";
import { ze } from "/$bunfs/root/chunk-4kafv9jq.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { B, A, z, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { L } from "/$bunfs/root/chunk-v4qqyykc.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
function We() {}
var W = [
  { value: "yes-session", label: "Yes, for this session" },
  { value: "yes-remember", label: "Yes, and remember this directory" },
  { value: "no", label: "No" },
];
function x() {
  let uo = _(1),
    ke;
  if (uo[0] === d)
    (ke = e(t, {
      dimColor: !0,
      children: "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on.",
    })),
      (uo[0] = ke);
  else ke = uo[0];
  return ke;
}
function X(go) {
  let se = _(5),
    { path: re } = go,
    I;
  if (se[0] !== re) (I = e(t, { color: "permission", children: re })), (se[0] = re), (se[1] = I);
  else I = se[1];
  let xe;
  if (se[2] === d) (xe = e(x, {})), (se[2] = xe);
  else xe = se[2];
  let we;
  if (se[3] !== I) (we = r(o, { flexDirection: "column", gap: 1, children: [I, xe] })), (se[3] = I), (se[4] = we);
  else we = se[4];
  return we;
}
function Z(fo) {
  let N = _(14),
    { value: K, onChange: ie, onSubmit: le, error: ce, suggestions: O, selectedSuggestion: ae } = fo,
    De;
  if (N[0] === d) (De = e(t, { children: "Enter the path to the directory:" })), (N[0] = De);
  else De = N[0];
  let V;
  if (N[1] !== ie || N[2] !== le || N[3] !== K)
    (V = e(o, {
      borderDimColor: !0,
      borderStyle: "round",
      marginTop: 1,
      paddingLeft: 1,
      children: e(xn, {
        showCursor: !0,
        placeholder: `Directory path${L.ellipsis}`,
        value: K,
        onChange: ie,
        onSubmit: le,
        columns: 80,
        cursorOffset: K.length,
        onChangeCursorOffset: We,
      }),
    })),
      (N[1] = ie),
      (N[2] = le),
      (N[3] = K),
      (N[4] = V);
  else V = N[4];
  let j;
  if (N[5] !== ae || N[6] !== O)
    (j =
      O.length > 0 &&
      e(o, { marginBottom: 1, children: e(xK, { suggestions: O, selectedSuggestion: ae, noPad: !0 }) })),
      (N[5] = ae),
      (N[6] = O),
      (N[7] = j);
  else j = N[7];
  let E;
  if (N[8] !== ce) (E = e(Br, { error: ce })), (N[8] = ce), (N[9] = E);
  else E = N[9];
  let Re;
  if (N[10] !== V || N[11] !== j || N[12] !== E)
    (Re = r(o, { flexDirection: "column", children: [De, V, j, E] })),
      (N[10] = V),
      (N[11] = j),
      (N[12] = E),
      (N[13] = Re);
  else Re = N[13];
  return Re;
}
function mge(po) {
  let l = _(37),
    { onAddDirectory: b, onCancel: y, permissionContext: ue, directoryPath: i } = po,
    ge = ct(),
    [h, Ne] = u(""),
    [pe, Te] = u(null),
    Ie;
  if (l[0] === d) (Ie = []), (l[0] = Ie);
  else Ie = l[0];
  let [g, Ke] = u(Ie),
    [v, G] = u(0),
    Fe;
  if (l[1] !== ge)
    (Fe = async (Oe) => {
      if (!Oe) {
        Ke([]), G(0);
        return;
      }
      let bo = await IBe(ge, Oe);
      Ke(bo), G(0);
    }),
      (l[1] = ge),
      (l[2] = Fe);
  else Fe = l[2];
  let Y = QP(Fe, 100),
    Ve,
    je;
  if (l[3] !== Y || l[4] !== h)
    (Ve = () => {
      Y(h);
    }),
      (je = [h, Y]),
      (l[3] = Y),
      (l[4] = h),
      (l[5] = Ve),
      (l[6] = je);
  else (Ve = l[5]), (je = l[6]);
  A(Ve, je);
  let Ee;
  if (l[7] === d)
    (Ee = (yo) => {
      let ho = yo.id + "/";
      Ne(ho), Te(null);
    }),
      (l[7] = Ee);
  else Ee = l[7];
  let vo = Ee,
    Ge;
  if (l[8] !== b || l[9] !== ue)
    (Ge = async (So) => {
      let de = await tSe(So, ue);
      if (de.resultType === "success") b(de.absolutePath, !1);
      else Te(nSe(de));
    }),
      (l[8] = b),
      (l[9] = ue),
      (l[10] = Ge);
  else Ge = l[10];
  let C = Ge,
    Le;
  if (l[11] === d) (Le = { context: "Settings" }), (l[11] = Le);
  else Le = l[11];
  Be("confirm:no", y, Le);
  let Ye;
  if (l[12] !== C || l[13] !== v || l[14] !== g)
    (Ye = (c) => {
      if (g.length > 0) {
        if (c.key === "tab") {
          c.preventDefault();
          let $e = g[v];
          if ($e) vo($e);
          return;
        }
        if (c.key === "return") {
          c.preventDefault();
          let qe = g[v];
          if (qe) C(qe.id + "/");
          return;
        }
        if (c.key === "up" || (c.ctrl && c.key === "p")) {
          c.preventDefault(), G((Ae) => (Ae <= 0 ? g.length - 1 : Ae - 1));
          return;
        }
        if (c.key === "down" || (c.ctrl && c.key === "n")) {
          c.preventDefault(), G((Je) => (Je >= g.length - 1 ? 0 : Je + 1));
          return;
        }
      }
    }),
      (l[12] = C),
      (l[13] = v),
      (l[14] = g),
      (l[15] = Ye);
  else Ye = l[15];
  let be = Ye,
    Qe;
  if (l[16] !== i || l[17] !== b || l[18] !== y)
    (Qe = (ko) => {
      if (!i) {
        return;
      }
      bb74: switch (ko) {
        case "yes-session": {
          b(i, !1);
          break bb74;
        }
        case "yes-remember": {
          b(i, !0);
          break bb74;
        }
        case "no": {
          y();
        }
      }
    }),
      (l[16] = i),
      (l[17] = b),
      (l[18] = y),
      (l[19] = Qe);
  else Qe = l[19];
  let q = Qe,
    J;
  if (l[20] !== i)
    (J = i
      ? void 0
      : r(fe, {
          children: [
            e(M, { chord: "tab", action: "complete" }),
            e(M, { chord: "enter", action: "add" }),
            e(ze, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" }),
          ],
        })),
      (l[20] = i),
      (l[21] = J);
  else J = l[21];
  let Q;
  if (l[22] !== h || l[23] !== i || l[24] !== pe || l[25] !== q || l[26] !== C || l[27] !== v || l[28] !== g)
    (Q = i
      ? r(o, {
          flexDirection: "column",
          gap: 1,
          children: [e(X, { path: i }), e(Ce, { options: W, onChange: q, onCancel: () => q("no") })],
        })
      : r(o, {
          flexDirection: "column",
          gap: 1,
          children: [
            e(x, {}),
            e(Z, { value: h, onChange: Ne, onSubmit: C, error: pe, suggestions: g, selectedSuggestion: v }),
          ],
        })),
      (l[22] = h),
      (l[23] = i),
      (l[24] = pe),
      (l[25] = q),
      (l[26] = C),
      (l[27] = v),
      (l[28] = g),
      (l[29] = Q);
  else Q = l[29];
  let U;
  if (l[30] !== y || l[31] !== J || l[32] !== Q)
    (U = e(me, {
      title: "Add directory to workspace",
      onCancel: y,
      color: "permission",
      isCancelActive: !1,
      inputGuide: J,
      children: Q,
    })),
      (l[30] = y),
      (l[31] = J),
      (l[32] = Q),
      (l[33] = U);
  else U = l[33];
  let Ue;
  if (l[34] !== be || l[35] !== U)
    (Ue = e(xr, { onKeyDown: be, children: U })), (l[34] = be), (l[35] = U), (l[36] = Ue);
  else Ue = l[36];
  return Ue;
}
export { mge };
