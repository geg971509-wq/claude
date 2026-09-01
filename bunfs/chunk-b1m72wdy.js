// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Vh, Ae, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { ge } from "/$bunfs/root/chunk-c3bffkxg.js";
import { y } from "/$bunfs/root/chunk-ca80fke8.js";
import { o, t } from "/$bunfs/root/chunk-he2phymk.js";
import { ht } from "/$bunfs/root/chunk-ek4tmwbt.js";
import { Jz, Ijt, Bg } from "/$bunfs/root/chunk-vx3kc9d2.js";
import { me } from "/$bunfs/root/chunk-489c3cyq.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { Hh } from "/$bunfs/root/chunk-rwpk2km7.js";
import { zc } from "/$bunfs/root/chunk-ktmq03vw.js";
import { U, e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
function QLt(no) {
  let n = _(22),
    { onDone: l, installationStatus: c } = no,
    { storageV5: eo } = ge();
  B(eo);
  let w;
  if (n[0] !== l) (w = { "confirm:yes": l, "confirm:no": l }), (n[0] = l), (n[1] = w);
  else w = n[1];
  let k;
  if (n[2] === d) (k = { context: "Confirmation" }), (n[2] = k);
  else k = n[2];
  ht(w, k);
  let E;
  if (n[3] !== c?.ideType) (E = c?.ideType ?? Ijt()), (n[3] = c?.ideType), (n[4] = E);
  else E = n[4];
  let f = E,
    to = Jz(f),
    O;
  if (n[5] !== f) (O = Bg(f)), (n[5] = f), (n[6] = O);
  else O = n[6];
  let C = O,
    D = c?.installedVersion,
    io = to ? "plugin" : "extension",
    ro = a.platform === "darwin" ? "Cmd+Option+K" : "Ctrl+Alt+K",
    R;
  if (n[7] === d) (R = e(t, { color: "claude", children: "\u273B " })), (n[7] = R);
  else R = n[7];
  let u;
  if (n[8] !== C)
    (u = r(U, { children: [R, r(t, { children: ["Welcome to Claude Code for ", C] })] })), (n[8] = C), (n[9] = u);
  else u = n[9];
  const x = D ? `installed ${io} v${D}` : void 0;
  let G;
  if (n[10] === d) (G = e(t, { color: "suggestion", children: "\u29C9 open files" })), (n[10] = G);
  else G = n[10];
  let P;
  if (n[11] === d)
    (P = r(zc, {
      children: [
        "Claude has context of ",
        G,
        " ",
        "and ",
        e(t, { color: "suggestion", children: "\u29C9 selected lines" }),
      ],
    })),
      (n[11] = P);
  else P = n[11];
  let T;
  if (n[12] === d)
    (T = r(zc, {
      children: ["Review Claude Code's changes", " ", e(Hh, { added: 11, removed: 22 }), " in the comfort of your IDE"],
    })),
      (n[12] = T);
  else T = n[12];
  let V;
  if (n[13] === d)
    (V = r(zc, { children: ["Cmd+Esc", e(t, { dimColor: true, children: " for Quick Launch" })] })), (n[13] = V);
  else V = n[13];
  let K;
  if (n[14] === d)
    (K = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [
        P,
        T,
        V,
        r(zc, { children: [ro, e(t, { dimColor: true, children: " to reference files or lines in your input" })] }),
      ],
    })),
      (n[14] = K);
  else K = n[14];
  let p;
  if (n[15] !== l || n[16] !== u || n[17] !== x)
    (p = e(me, { title: u, subtitle: x, color: "ide", onCancel: l, hideInputGuide: true, children: K })),
      (n[15] = l),
      (n[16] = u),
      (n[17] = x),
      (n[18] = p);
  else p = n[18];
  let N;
  if (n[19] === d)
    (N = e(o, {
      paddingX: 1,
      children: r(t, { dimColor: true, italic: true, children: ["Press ", e(M, { chord: "enter", action: "continue" })] }),
    })),
      (n[19] = N);
  else N = n[19];
  let A;
  if (n[20] !== p) (A = r(U, { children: [p, N] })), (n[20] = p), (n[21] = A);
  else A = n[21];
  return A;
}
function umr() {
  let i = ie(),
    s = Vh.terminal || "unknown";
  return i.hasIdeOnboardingBeenShown?.[s] === true;
}
function B(i) {
  if (umr()) return;
  let s = Vh.terminal || "unknown";
  Ae((m) => ({ ...m, hasIdeOnboardingBeenShown: { ...m.hasIdeOnboardingBeenShown, [s]: true } }), i),
    y("onboarding_ide_dialog_shown");
}
export { QLt, umr };
