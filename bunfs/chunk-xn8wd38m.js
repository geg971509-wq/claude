// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Mp } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { ce } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { ee } from "/$bunfs/root/chunk-4fwj3vnx.js";
import { Hn } from "/$bunfs/root/chunk-rgw52f13.js";
import { rt } from "/$bunfs/root/chunk-2rx5nghb.js";
import { x_ } from "/$bunfs/root/chunk-s4smmnta.js";
import { q9n, X4n, t2, Gee, w9, yft } from "/$bunfs/root/chunk-zze8764r.js";
import { W } from "/$bunfs/root/chunk-ht28m404.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { fs } from "/$bunfs/root/chunk-ngn87vcm.js";
import { o, t, ut } from "/$bunfs/root/chunk-he2phymk.js";
import { hs, pi, Ce } from "/$bunfs/root/chunk-1y0jc48h.js";
import { me } from "/$bunfs/root/chunk-489c3cyq.js";
import { U, e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { Jn, zn, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { qo } from "/$bunfs/root/chunk-3s6zpzqb.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
async function yUe() {
  let [n, s] = await Promise.all([x_(), Mp("tengu_ccr_bundle_seed_enabled")]),
    i = Hn(ee()) !== null && (a.CCR_ENABLE_BUNDLE || s);
  if (!i) return { cloneViable: false, bundleSeedEnabled: i };
  return { cloneViable: n !== null && (!qo(n.host) || (await q9n(n.owner, n.name))), bundleSeedEnabled: i };
}
F();
var Ee = 160,
  Ne = 1024;
function Mie(n) {
  let s = ce(n, Ne),
    i = Gee(s.replace(/[\r\n\t ]+/g, " "));
  if (!t2(i)) return "";
  let c = X4n(i.replace(/\s+/g, " ").trim()).trimEnd();
  if (!t2(c)) return "";
  return rt(s.length < n.length ? `${c}\u2026` : c, Ee);
}
function He(fo) {
  return fo.replBridgeEnabled;
}
function We() {
  return ve;
}
function Jet(n) {
  if (!n.bundleSeedEnabled) return null;
  return n.cloneViable
    ? "This will try to clone your git remote and fall back to uploading this repository."
    : "This will upload your repository to Claude Code on the web.";
}
var ve = { cloneViable: false, bundleSeedEnabled: true },
  Ie = "(nothing printable)";
function x8t(po) {
  let p = _(27),
    { promptIdentifier: Z, showTerms: g, prompt: J, deliveredByRelay: oe, onDone: te, accepts: ne } = po;
  fs("ultraplan-launch");
  let Pe;
  if (p[0] !== Z) (Pe = yft(Z)), (p[0] = Z), (p[1] = Pe);
  else Pe = p[1];
  let R = Pe,
    re = W(He),
    Te;
  if (p[2] !== g) (Te = () => (g ? yUe().catch(We) : null)), (p[2] = g), (p[3] = Te);
  else Te = p[3];
  let [le] = u(Te),
    ie = hs(),
    { refusedWithin: ae, noteRefused: se } = pi(),
    _e;
  if (p[4] !== te)
    (_e = function m(mo) {
      te(mo);
    }),
      (p[4] = te),
      (p[5] = _e);
  else _e = p[5];
  let m = _e,
    De;
  if (p[6] !== ne || p[7] !== ie || p[8] !== se || p[9] !== ae)
    (De = function N() {
      if (ie() || ae()) {
        return se(), true;
      }
      return ne?.() === false;
    }),
      (p[6] = ne),
      (p[7] = ie),
      (p[8] = se),
      (p[9] = ae),
      (p[10] = De);
  else De = p[10];
  let N = De,
    x;
  if (p[11] !== m) (x = () => m("cancel")), (p[11] = m), (p[12] = x);
  else x = p[12];
  let Le;
  if (p[13] === d) (Le = e(t, { dimColor: true, children: "Loading\u2026" })), (p[13] = Le);
  else Le = p[13];
  let A;
  if (
    p[14] !== m ||
    p[15] !== R ||
    p[16] !== oe ||
    p[17] !== J ||
    p[18] !== N ||
    p[19] !== re ||
    p[20] !== g ||
    p[21] !== le
  )
    (A = e(Jn, {
      fallback: Le,
      children: e(z, {
        showTerms: g,
        prompt: J,
        deliveredByRelay: oe,
        sourcePromise: le,
        copy: R,
        replBridgeEnabled: re,
        onChoice: m,
        refuseInput: N,
      }),
    })),
      (p[14] = m),
      (p[15] = R),
      (p[16] = oe),
      (p[17] = J),
      (p[18] = N),
      (p[19] = re),
      (p[20] = g),
      (p[21] = le),
      (p[22] = A);
  else A = p[22];
  let Be;
  if (p[23] !== R.timeEstimate || p[24] !== x || p[25] !== A)
    (Be = e(me, { title: "Run ultraplan in the cloud?", subtitle: R.timeEstimate, onCancel: x, children: A })),
      (p[23] = R.timeEstimate),
      (p[24] = x),
      (p[25] = A),
      (p[26] = Be);
  else Be = p[26];
  return Be;
}
function z(ho) {
  let l = _(41),
    {
      showTerms: P,
      prompt: ue,
      deliveredByRelay: bo,
      sourcePromise: xe,
      copy: b,
      replBridgeEnabled: T,
      onChoice: de,
      refuseInput: pe,
    } = ho,
    k = xe ? zn(xe) : null,
    Ue;
  if (l[0] !== k) (Ue = k && Jet(k)), (l[0] = k), (l[1] = Ue);
  else Ue = l[1];
  let O = Ue,
    Ae;
  if (l[2] !== ue) (Ae = Mie(ue)), (l[2] = ue), (l[3] = Ae);
  else Ae = l[3];
  let ke = Ae,
    fe = hs(),
    { refusedWithin: he, noteRefused: be } = pi(),
    Oe;
  if (l[4] !== fe || l[5] !== be || l[6] !== he)
    (Oe = function f() {
      if (fe() || he()) {
        return be(), true;
      }
      return false;
    }),
      (l[4] = fe),
      (l[5] = be),
      (l[6] = he),
      (l[7] = Oe);
  else Oe = l[7];
  let f = Oe;
  const ye = bo ? "Prompt (sent from a connected channel): " : "Prompt: ";
  let V;
  if (l[8] !== ye) (V = e(t, { dimColor: true, children: ye })), (l[8] = ye), (l[9] = V);
  else V = l[9];
  const ge = ke === "" ? Ie : ke;
  let G;
  if (l[10] !== V || l[11] !== ge)
    (G = r(t, { wrap: "truncate-end", children: [V, ge] })), (l[10] = V), (l[11] = ge), (l[12] = G);
  else G = l[12];
  let H;
  if (l[13] !== b.dialogBody || l[14] !== b.dialogPipeline || l[15] !== T || l[16] !== P || l[17] !== O)
    (H = P
      ? r(U, {
          children: [
            e(t, { dimColor: true, children: b.dialogBody }),
            r(o, {
              flexDirection: "column",
              children: [
                O && e(t, { dimColor: true, children: O }),
                r(t, { dimColor: true, children: ["More information: ", e(ut, { url: w9, children: w9 })] }),
              ],
            }),
            e(t, { children: "Proceed?" }),
          ],
        })
      : r(U, {
          children: [
            r(o, {
              flexDirection: "column",
              children: [
                e(t, { dimColor: true, children: b.dialogBody }),
                T && e(t, { dimColor: true, children: "This will disable Remote Control for this session." }),
              ],
            }),
            !T && e(t, { dimColor: true, children: b.dialogPipeline }),
          ],
        })),
      (l[13] = b.dialogBody),
      (l[14] = b.dialogPipeline),
      (l[15] = T),
      (l[16] = P),
      (l[17] = O),
      (l[18] = H);
  else H = l[18];
  let j;
  if (l[19] !== f || l[20] !== pe) (j = () => f() || pe()), (l[19] = f), (l[20] = pe), (l[21] = j);
  else j = l[21];
  const Re = P ? "Yes" : "Run ultraplan",
    Se = T ? "Disable remote control and launch in Claude Code on the web" : "launch in Claude Code on the web";
  let M;
  if (l[22] !== Re || l[23] !== Se)
    (M = { label: Re, value: "run", description: Se }), (l[22] = Re), (l[23] = Se), (l[24] = M);
  else M = l[24];
  const we = P ? "No" : "Not now";
  let X;
  if (l[25] !== we) (X = { label: we, value: "cancel" }), (l[25] = we), (l[26] = X);
  else X = l[26];
  let K;
  if (l[27] !== M || l[28] !== X) (K = [M, X]), (l[27] = M), (l[28] = X), (l[29] = K);
  else K = l[29];
  let Y;
  if (l[30] !== de || l[31] !== f)
    (Y = (Ve) => {
      if (f()) {
        return;
      }
      if (Ve !== "cancelled") de(Ve);
    }),
      (l[30] = de),
      (l[31] = f),
      (l[32] = Y);
  else Y = l[32];
  let q;
  if (l[33] !== K || l[34] !== Y || l[35] !== j)
    (q = e(Ce, { refuseInput: j, selectedValue: "cancelled", options: K, onChange: Y })),
      (l[33] = K),
      (l[34] = Y),
      (l[35] = j),
      (l[36] = q);
  else q = l[36];
  let Ge;
  if (l[37] !== q || l[38] !== G || l[39] !== H)
    (Ge = r(o, { flexDirection: "column", gap: 1, children: [G, H, q] })),
      (l[37] = q),
      (l[38] = G),
      (l[39] = H),
      (l[40] = Ge);
  else Ge = l[40];
  return Ge;
}
export { Mie, yUe, Jet, x8t };
