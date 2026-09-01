// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { o, t, hn } from "/$bunfs/root/chunk-he2phymk.js";
import { Vs, XBe, pi, Ti, Ce } from "/$bunfs/root/chunk-1y0jc48h.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { fe } from "/$bunfs/root/chunk-rycvm63e.js";
import { $w } from "/$bunfs/root/chunk-q5hmd7j9.js";
import { me } from "/$bunfs/root/chunk-489c3cyq.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { z, C, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { Av, Bo } from "/$bunfs/root/chunk-zze8764r.js";
import { go } from "/$bunfs/root/chunk-gpvgrng0.js";
import { i, H, f, dt, oe, N } from "/$bunfs/root/chunk-saay52v7.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
var Xj = 250;
F();
function MBe({
  flagged: s,
  initialPicking: g,
  onPickingChange: R,
  initialSelection: A,
  onSelectionChange: S,
  onResolve: c,
  onCancel: y,
  hideIndexes: b,
}) {
  let { epoch: v, noteAttempt: w } = XBe(),
    I = Vs(v, Xj),
    [P, T] = u(g),
    k = Vs(P, Xj),
    xe = hn(),
    { refusedWithin: Ae, noteRefused: Se } = pi();
  function ze() {
    if (!k.settled || Ae(Xj)) return Se(), true;
    return false;
  }
  function _e() {
    if (!I.settled) return w(), true;
    return false;
  }
  let V = C(A),
    le = z(() => Av(s), [s]),
    de = r(fe, {
      children: [
        e(t, { children: "Your setup is saved either way" }),
        e(M, { chord: "enter", action: "confirm" }),
        e(M, { chord: "escape", action: "skip" }),
      ],
    });
  function D() {
    w(), y();
  }
  if (P)
    return e(me, {
      title: "Pick which to remove",
      onCancel: D,
      inputGuide: de,
      children: e(
        $w,
        {
          refuseInput: ze,
          hideIndexes: b,
          options: le.map((p, L) => ({ value: s[L], label: String(p) })),
          defaultValue: V.current,
          onChange: (p) => {
            if (!k.settled) return;
            (V.current = p), S(p);
          },
          submitButtonText: "Remove selected",
          onSubmit: () => {
            w(), c(V.current);
          },
          onCancel: D,
        },
        xe ? "screen-reader" : k.remountKey,
      ),
    });
  return e(me, {
    title: "Review rules that skip checks",
    onCancel: D,
    inputGuide: de,
    children: r(o, {
      flexDirection: "column",
      gap: 1,
      children: [
        e(t, {
          dimColor: true,
          children:
            "These permissions.allow entries in your user settings are broad enough that auto mode either ignores them at runtime, or auto-approves destructive commands with no check. Removing one means matching commands prompt again outside auto mode too.",
        }),
        e(o, { flexDirection: "column", children: le.map((p, L) => r(t, { children: [" \xB7 ", String(p)] }, s[L])) }),
        e(t, { dimColor: true, children: "Removed entries can be restored by re-adding them verbatim." }),
        e(
          Ce,
          {
            refuseInput: _e,
            selectedValue: Ti,
            defaultFocusValue: "all",
            hideIndexes: b,
            options: [
              { value: "all", label: "Remove them all" },
              { value: "pick", label: "Pick which to remove" },
              { value: "leave", label: "Leave them" },
            ],
            onChange: (p) => {
              if ((w(), p === "all")) c(s);
              else if (p === "pick") {
                if (R(true) === false) return;
                T(true);
              } else c([]);
            },
            onCancel: D,
          },
          I.remountKey,
        ),
      ],
    }),
  });
}
F();
function Be(gt) {
  return Bo(gt);
}
function nke(lt) {
  let n = _(49),
    { proposal: a, hideIndexes: ue, defaultFocusValue: W, onFocus: ce, onAccept: pe, onDecline: ge, onCancel: E } = lt,
    { epoch: ut, noteAttempt: h } = XBe(),
    j = Vs(ut, Xj),
    Me;
  if (n[0] !== j.settled || n[1] !== h)
    (Me = function B() {
      if (!j.settled) {
        return h(), true;
      }
      return false;
    }),
      (n[0] = j.settled),
      (n[1] = h),
      (n[2] = Me);
  else Me = n[2];
  let B = Me,
    G = W === "decline" && !j.settled,
    Pe = C(false),
    Ee;
  if (n[3] === d)
    (Ee = r(fe, {
      children: [e(M, { chord: "enter", action: "confirm" }), e(M, { chord: "escape", action: "cancel" })],
    })),
      (n[3] = Ee);
  else Ee = n[3];
  let K;
  if (n[4] !== a.environment)
    (K = e(l, { label: "Environment", entries: a.environment, headers: true })), (n[4] = a.environment), (n[5] = K);
  else K = n[5];
  let O;
  if (n[6] !== a.allow) (O = x(a.allow)), (n[6] = a.allow), (n[7] = O);
  else O = n[7];
  let Y;
  if (n[8] !== O)
    (Y = e(l, {
      label: "Allow carve-outs",
      entries: O,
      empty: "none suggested \u2014 defaults look like they cover your usage",
    })),
      (n[8] = O),
      (n[9] = Y);
  else Y = n[9];
  let U;
  if (n[10] !== a.soft_deny) (U = x(a.soft_deny)), (n[10] = a.soft_deny), (n[11] = U);
  else U = n[11];
  let q;
  if (n[12] !== U)
    (q = e(l, { label: "Extra soft blocks", entries: U, empty: "none suggested" })), (n[12] = U), (n[13] = q);
  else q = n[13];
  let X;
  if (n[14] !== a.hard_deny) (X = x(a.hard_deny)), (n[14] = a.hard_deny), (n[15] = X);
  else X = n[15];
  let J;
  if (n[16] !== X)
    (J = e(l, { label: "Extra hard blocks", entries: X, empty: "none suggested" })), (n[16] = X), (n[17] = J);
  else J = n[17];
  let Q;
  if (n[18] !== a.notes)
    (Q = e(l, { label: "Notes", entries: a.notes, empty: "none", dim: true })), (n[18] = a.notes), (n[19] = Q);
  else Q = n[19];
  const he = G ? "held" : "settled";
  let Fe;
  if (n[20] === d)
    (Fe = [
      { value: "accept", label: "Looks good \u2014 save it" },
      { value: "decline", label: "Discard and exit" },
    ]),
      (n[20] = Fe);
  else Fe = n[20];
  let Z;
  if (n[21] !== G || n[22] !== ce)
    (Z = (ct) => {
      if (G) {
        return;
      }
      if (!Pe.current) {
        Pe.current = true;
        return;
      }
      ce?.(ct);
    }),
      (n[21] = G),
      (n[22] = ce),
      (n[23] = Z);
  else Z = n[23];
  let ee;
  if (n[24] !== h || n[25] !== pe || n[26] !== ge)
    (ee = (mt) => {
      if ((h(), mt === "accept")) pe();
      else ge();
    }),
      (n[24] = h),
      (n[25] = pe),
      (n[26] = ge),
      (n[27] = ee);
  else ee = n[27];
  let te;
  if (n[28] !== h || n[29] !== E)
    (te = () => {
      h(), E();
    }),
      (n[28] = h),
      (n[29] = E),
      (n[30] = te);
  else te = n[30];
  let ne;
  if (n[31] !== W || n[32] !== ue || n[33] !== B || n[34] !== he || n[35] !== Z || n[36] !== ee || n[37] !== te)
    (ne = e(
      Ce,
      {
        refuseInput: B,
        selectedValue: Ti,
        options: Fe,
        hideIndexes: ue,
        defaultFocusValue: W,
        onFocus: Z,
        onChange: ee,
        onCancel: te,
      },
      he,
    )),
      (n[31] = W),
      (n[32] = ue),
      (n[33] = B),
      (n[34] = he),
      (n[35] = Z),
      (n[36] = ee),
      (n[37] = te),
      (n[38] = ne);
  else ne = n[38];
  let ie;
  if (n[39] !== Q || n[40] !== ne || n[41] !== K || n[42] !== Y || n[43] !== q || n[44] !== J)
    (ie = r(o, { flexDirection: "column", gap: 1, children: [K, Y, q, J, Q, ne] })),
      (n[39] = Q),
      (n[40] = ne),
      (n[41] = K),
      (n[42] = Y),
      (n[43] = q),
      (n[44] = J),
      (n[45] = ie);
  else ie = n[45];
  let Ie;
  if (n[46] !== E || n[47] !== ie)
    (Ie = e(me, { title: "Review proposed auto-mode setup", onCancel: E, inputGuide: Ee, children: ie })),
      (n[46] = E),
      (n[47] = ie),
      (n[48] = Ie);
  else Ie = n[48];
  return Ie;
}
function l(pt) {
  let ke = _(10),
    { label: ye, entries: re, empty: be, dim: ve, headers: we } = pt,
    se;
  if (ke[0] !== ye) (se = e(t, { bold: true, children: ye })), (ke[0] = ye), (ke[1] = se);
  else se = ke[1];
  let ae;
  if (ke[2] !== ve || ke[3] !== be || ke[4] !== re || ke[5] !== we)
    (ae =
      re.length === 0
        ? r(t, { dimColor: true, children: [" ", be ?? "nothing found"] })
        : re.map((Re, Te) => {
            let De = Be;
            return we && Re.startsWith("### ")
              ? r(t, { dimColor: true, children: ["  ", De(Re.slice(4))] }, Te)
              : r(t, { dimColor: ve, children: ["  \xB7 ", De(Re)] }, Te);
          })),
      (ke[2] = ve),
      (ke[3] = be),
      (ke[4] = re),
      (ke[5] = we),
      (ke[6] = ae);
  else ae = ke[6];
  let Ne;
  if (ke[7] !== se || ke[8] !== ae)
    (Ne = r(o, { flexDirection: "column", children: [se, ae] })), (ke[7] = se), (ke[8] = ae), (ke[9] = Ne);
  else Ne = ke[9];
  return Ne;
}
function x(s) {
  return s.filter((g) => g !== "$defaults");
}
var NBe = go({
    kind: "auto_mode_setup_review",
    payload: m(() =>
      f({
        environment: H(i()),
        allow: H(i()),
        soft_deny: H(i()),
        hard_deny: H(i()),
        remove_from_permissions_allow: H(i()),
        notes: H(i()),
        mode: oe(["append", "replace"]),
      }),
    ),
    result: m(() => oe(["accept", "decline", "cancelled"])),
    default: "cancelled",
    yieldsToPanels: true,
  }),
  FBe = go({
    kind: "auto_mode_flagged_allow",
    payload: m(() => f({ flagged: H(i()), runId: i() })),
    result: m(() => dt([f({ toRemove: H(i()) }), N("cancelled")])),
    default: "cancelled",
    yieldsToPanels: true,
  });
export { Xj, MBe, nke, NBe, FBe };
