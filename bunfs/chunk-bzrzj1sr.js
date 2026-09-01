// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { w } from "/$bunfs/root/chunk-4xj01xwv.js";
import { It } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { ge } from "/$bunfs/root/chunk-c3bffkxg.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { o, t } from "/$bunfs/root/chunk-he2phymk.js";
import { hs, Hm, Vs, pi } from "/$bunfs/root/chunk-1y0jc48h.js";
import { vb } from "/$bunfs/root/chunk-42q7ctbx.js";
import { me } from "/$bunfs/root/chunk-489c3cyq.js";
import { wn } from "/$bunfs/root/chunk-et3g0deq.js";
import { rr } from "/$bunfs/root/chunk-0nfwsvfd.js";
import { BYt } from "/$bunfs/root/chunk-tw0kgz4k.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { A, C, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
var ee = 40;
function mQ(i) {
  M(i, 1);
}
function M(i, l) {
  if (i() !== false) return;
  if (l >= ee) {
    n("resolveWhenTaken: gave up retrying a refused resolution", { level: "warn" });
    return;
  }
  setTimeout(oe, vb, i, l + 1);
}
function oe(i, l) {
  try {
    M(i, l);
  } catch (b) {
    if (It(b)) {
      n("resolveWhenTaken: retry abandoned, its flow aborted", { level: "debug" });
      return;
    }
    h(b);
  }
}
function ce() {
  s("tengu_usage_credits_admin_request_confirm_shown", {});
}
function BUe(ke) {
  let a = _(36),
    { extraUsage: q, onDone: v, onOutcome: y, accepts: P } = ke,
    { credentials: X } = ge(),
    [De, Oe] = u(false),
    O = C(false),
    c = hs(),
    { refusedWithin: m, noteRefused: f, epoch: We } = pi(),
    re;
  if (a[0] !== c || a[1] !== f || a[2] !== m)
    (re = function x() {
      if (c() || m()) {
        return f(), true;
      }
      return false;
    }),
      (a[0] = c),
      (a[1] = f),
      (a[2] = m),
      (a[3] = re);
  else re = a[3];
  let x = re,
    j = Hm(),
    z = Vs(We),
    ne;
  if (a[4] === d) (ne = []), (a[4] = ne);
  else ne = a[4];
  A(ce, ne);
  let te;
  if (a[5] !== P || a[6] !== X || a[7] !== q || a[8] !== c || a[9] !== f || a[10] !== v || a[11] !== y || a[12] !== m)
    (te = function R() {
      if (O.current) {
        return;
      }
      if (c() || m()) {
        f();
        return;
      }
      if (!P()) {
        return;
      }
      (O.current = true),
        s("tengu_usage_credits_admin_request_confirm_result", { action: w("confirmed") }),
        Oe(true),
        BYt(q, X).then((ie) => {
          y?.(ie.filed ? "filed" : "failed"), mQ(() => v(ie.value));
        });
    }),
      (a[5] = P),
      (a[6] = X),
      (a[7] = q),
      (a[8] = c),
      (a[9] = f),
      (a[10] = v),
      (a[11] = y),
      (a[12] = m),
      (a[13] = te);
  else te = a[13];
  let R = te,
    se;
  if (a[14] !== c || a[15] !== f || a[16] !== v || a[17] !== y || a[18] !== m)
    (se = function p() {
      if (O.current) {
        return;
      }
      if (c() || m()) {
        f();
        return;
      }
      if (v("No request sent to your admin.") === false) {
        return;
      }
      y?.("cancelled"),
        (O.current = true),
        s("tengu_usage_credits_admin_request_confirm_result", { action: w("cancelled") });
    }),
      (a[14] = c),
      (a[15] = f),
      (a[16] = v),
      (a[17] = y),
      (a[18] = m),
      (a[19] = se);
  else se = a[19];
  let p = se;
  if (De) {
    let g;
    if (a[20] === d)
      (g = e(o, { paddingTop: 1, children: e(rr, { message: "Sending request to your admin\u2026" }) })), (a[20] = g);
    else g = a[20];
    return g;
  }
  let J =
      q == null
        ? "turn on or increase your usage credits"
        : q.is_enabled
          ? "increase your usage credit limit"
          : "turn on usage credits",
    g;
  if (a[21] !== J)
    (g = r(t, { children: ["This will send a request to your organization's admins to ", J, "."] })),
      (a[21] = J),
      (a[22] = g);
  else g = a[22];
  let ae;
  if (a[23] === d)
    (ae = e(t, {
      dimColor: true,
      children:
        "Only send this if you're running into usage limits \u2014 your admins are notified and review each request.",
    })),
      (a[23] = ae);
  else ae = a[23];
  let W;
  if (a[24] !== z.remountKey || a[25] !== p || a[26] !== R || a[27] !== x || a[28] !== j)
    (W = e(
      wn,
      {
        refuseInput: x,
        windowAnchorMs: j,
        hideIndexes: true,
        confirmLabel: "Send request",
        cancelLabel: "Cancel",
        focus: "cancel",
        onConfirm: R,
        onCancel: p,
      },
      z.remountKey,
    )),
      (a[24] = z.remountKey),
      (a[25] = p),
      (a[26] = R),
      (a[27] = x),
      (a[28] = j),
      (a[29] = W);
  else W = a[29];
  let E;
  if (a[30] !== g || a[31] !== W)
    (E = r(o, { flexDirection: "column", gap: 1, children: [g, ae, W] })), (a[30] = g), (a[31] = W), (a[32] = E);
  else E = a[32];
  let ue;
  if (a[33] !== p || a[34] !== E)
    (ue = e(me, { title: "Request usage credits from your admin", onCancel: p, color: "suggestion", children: E })),
      (a[33] = p),
      (a[34] = E),
      (a[35] = ue);
  else ue = a[35];
  return ue;
}
export { mQ, BUe };
