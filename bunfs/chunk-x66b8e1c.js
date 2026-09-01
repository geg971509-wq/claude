// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { cf, qde, Fn } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Ct } from "/$bunfs/root/chunk-wkxx62a2.js";
import { ad } from "/$bunfs/root/chunk-2rx5nghb.js";
import { Id, z8, Dt, RD } from "/$bunfs/root/chunk-zze8764r.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { N1, Wae, KR } from "/$bunfs/root/chunk-syabrr2b.js";
import { Or } from "/$bunfs/root/chunk-cmhbx7me.js";
import { dE } from "/$bunfs/root/chunk-pbmajbn7.js";
import { ge } from "/$bunfs/root/chunk-c3bffkxg.js";
import { t, ko } from "/$bunfs/root/chunk-he2phymk.js";
import { _rt, Hq, Zke, DJt, LJt, NJt } from "/$bunfs/root/chunk-9r67t977.js";
import { ev } from "/$bunfs/root/chunk-e3ft6dg4.js";
import { e } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { B, We, A, z, u, Lt, F } from "/$bunfs/root/chunk-twm95mhz.js";
var BRe = "tengu_pewter_summit";
F();
function QC() {
  let [o, n] = u({ ...Id() });
  return (
    A(
      () =>
        z8((i) => {
          n({ ...i });
        }),
      [],
    ),
    o
  );
}
function Vkt(o) {
  return RD.isEnabled() && (o === void 0 || o.includes("overage"));
}
function Xtt(o) {
  let n = Fn(),
    i = n === "team" || n === "enterprise";
  return Vkt(o) && !i && !Ct() && qde(cf()) === null;
}
F();
var et = 30000;
function $7t(o, n, i) {
  let r = false,
    s = () => {},
    l = () => {
      if (r) return;
      let d = o - Date.now();
      if (d <= 0) {
        i();
        return;
      }
      s = n(l, Math.min(d, et));
    };
  return (
    l(),
    () => {
      (r = true), s();
    }
  );
}
function mq(o) {
  let i = We(KR)?.setTimeout ?? N1,
    r = z(() => {
      if (o === null) return Wae;
      return (s) => $7t(o, i, s);
    }, [o, i]);
  return Lt(r, () => o !== null && Date.now() >= o);
}
F();
F();
function P0(o, n, i, r, s) {
  let { addNotification: l, removeNotification: d } = Or();
  A(() => {
    if (i === null) {
      d(o);
      return;
    }
    l({ key: o, kind: s?.kind ?? "warning", color: s?.color, priority: n, pinned: true, jsx: r(i) });
  }, [i, o, n, r, s, l, d]);
}
var I = 30000,
  O = "quota-auto-resume",
  j = "quota-auto-resume-credits",
  x = "quota-auto-resume-cap",
  Kkt = "quota-auto-resume-cancelled",
  Xkt = "Automatic continue cancelled \xB7 /rate-limit-options to re-arm",
  Ykt = "/usage-credits to continue now",
  T = { kind: "event", color: "text" };
function c1() {
  return Lt(DJt, Hq, Hq);
}
function Q(o, n) {
  let i = o.phase === "armed" ? o.resetsAtSeconds : 0,
    r = i * 1000 > n ? ad(i) : void 0;
  return r ? `at ${r}` : "shortly";
}
function G(o, n) {
  return "Usage limit reached \xB7 continuing automatically " + Q(o, n) + " \xB7 esc or type to cancel";
}
function H(o, n) {
  return (
    "Usage limit reached again after you continued \xB7 continuing automatically " +
    Q(o, n) +
    " \xB7 the automatic-continue setting no longer ends this wait (esc or /rate-limit-options still can)"
  );
}
function Ytt(o, n) {
  if (o.phase === "stale") return "Your usage limit has reset \xB7 press enter to continue";
  if (o.phase !== "armed") return "";
  if (n) return "Usage limit reached \xB7 continuing shortly \xB7 esc to cancel";
  let i = ad(o.resetsAtSeconds);
  return i
    ? "Usage limit reached \xB7 continuing automatically at " + i + " \xB7 esc to cancel"
    : "Usage limit reached \xB7 continuing automatically when it resets \xB7 esc to cancel";
}
function Jtt(o, n, i) {
  return o.phase === "armed" && !n && i;
}
function K() {
  return Xtt(Id().upgradePaths);
}
function V() {
  return e(J, {});
}
function X() {
  return Ykt;
}
function cge(C) {
  return mq(C.phase === "armed" ? Math.min(C.fireAtMs, C.resetsAtSeconds * 1000) : null);
}
function J() {
  let ot = _(5),
    U = c1();
  const v = cge(U);
  let nt;
  if (ot[0] !== U || ot[1] !== v) (nt = Ytt(U, v)), (ot[0] = U), (ot[1] = v), (ot[2] = nt);
  else nt = ot[2];
  let N = nt,
    [S, Xt] = u(N);
  if (N !== "" && N !== S) Xt(N);
  let it;
  if (ot[3] !== S) (it = e(t, { children: S })), (ot[3] = S), (ot[4] = it);
  else it = ot[4];
  return it;
}
function Jkt($t) {
  let w = _(23),
    { isLoading: E, transcript: L } = $t,
    { addNotification: R, removeNotification: y } = Or(),
    { storageV5: g, credentials: q } = ge(),
    D = dE(),
    h = c1(),
    M = Lt(z8, K),
    zt = h.phase === "armed" || h.phase === "stale",
    P = cge(h);
  P0(O, "high", zt || null, V, T);
  let rt;
  if (w[0] !== h || w[1] !== M || w[2] !== P)
    (rt = Jtt(h, P, M) || null), (w[0] = h), (w[1] = M), (w[2] = P), (w[3] = rt);
  else rt = w[3];
  P0(j, "medium", rt, X, T);
  let at, st;
  if (w[4] !== g)
    (at = () => {
      NJt(g);
    }),
      (st = [g]),
      (w[4] = g),
      (w[5] = at),
      (w[6] = st);
  else (at = w[5]), (st = w[6]);
  A(at, st);
  let ut;
  if (w[7] !== L) (ut = (Ft, Qt) => L.replace((Jt) => [...Jt, Dt(Ft, Qt)])), (w[7] = L), (w[8] = ut);
  else ut = w[8];
  let a = ut,
    ct;
  if (w[9] !== q || w[10] !== g || w[11] !== D)
    (ct = (Yt, Zt) => void ev({ message: Yt, notificationType: Zt }, D, { storageV5: g, credentials: q })),
      (w[9] = q),
      (w[10] = g),
      (w[11] = D),
      (w[12] = ct);
  else ct = w[12];
  let m = ct,
    mt,
    lt;
  if (w[13] !== R || w[14] !== a || w[15] !== m || w[16] !== y)
    (mt = () =>
      Zke((Wt) => {
        switch (Wt) {
          case "armed":
          case "rearmed": {
            y(x), y(Kkt);
            return;
          }
          case "taken-over": {
            a(H(Hq(), Date.now()), "notice");
            return;
          }
          case "cancelled": {
            a(Xkt, "notice");
            return;
          }
          case "auto-armed": {
            a(G(Hq(), Date.now()), "notice");
            return;
          }
          case "fired-now": {
            a("Usage limit available again \xB7 continuing now", "notice"),
              m("Usage limit available \u2014 Claude is continuing your task", "quota_auto_resume_fired");
            return;
          }
          case "stale": {
            a("Usage limit has reset \xB7 press enter to continue", "notice"),
              m("Usage limit reset \u2014 press enter to continue", "quota_auto_resume_stale");
            return;
          }
          case "disabled": {
            a(
              `Automatic continue was turned off \xB7 this task will not resume on its own${_rt() ? " (/rate-limit-options to wait anyway)" : ""}`,
              "warning",
            ),
              m(
                "Automatic continue was turned off \u2014 the task will not resume on its own",
                "quota_auto_resume_disabled",
              );
            return;
          }
          case "horizon-exceeded": {
            a(
              "Automatic continue stopped \xB7 the usage limit now resets more than 24 hours out, so this task will not resume on its own (/rate-limit-options to wait anyway)",
              "warning",
            ),
              m(
                "Automatic continue stopped \u2014 the usage limit now resets more than 24 hours out; the task will not resume on its own",
                "quota_auto_resume_disabled",
              );
            return;
          }
          case "continuation-dropped": {
            a(
              "Automatic continue did not run \xB7 the continuation was blocked before it reached the model, so this task did not resume on its own \xB7 send a prompt to continue",
              "warning",
            ),
              m(
                "Automatic continue did not run \u2014 the continuation was blocked before it reached the model; send a prompt to continue",
                "quota_auto_resume_disabled",
              );
            return;
          }
          case "cap-exhausted": {
            a(
              "Automatic continue stopped after repeated usage-limit hits \xB7 this task will not resume on its own (/rate-limit-options to try again)",
              "warning",
            ),
              m(
                "Automatic continue stopped after repeated usage-limit hits \u2014 the task will not resume on its own",
                "quota_auto_resume_disabled",
              ),
              R({
                key: x,
                kind: "warning",
                text: "Automatic continue stopped after repeated usage-limit hits \xB7 /rate-limit-options to try again",
                color: "warning",
                priority: "high",
                timeoutMs: 20000,
              });
            return;
          }
          default:
        }
      })),
      (lt = [R, y, a, m]),
      (w[13] = R),
      (w[14] = a),
      (w[15] = m),
      (w[16] = y),
      (w[17] = mt),
      (w[18] = lt);
  else (mt = w[17]), (lt = w[18]);
  A(mt, lt);
  let dt;
  if (w[19] !== a || w[20] !== E || w[21] !== m)
    (dt = () => {
      if (LJt(Date.now(), E) === "fired")
        a("Usage limit reset \xB7 continuing automatically", "notice"),
          m("Usage limit reset \u2014 Claude is continuing your task", "quota_auto_resume_fired");
    }),
      (w[19] = a),
      (w[20] = E),
      (w[21] = m),
      (w[22] = dt);
  else dt = w[22];
  ko(dt, h.phase === "armed" ? I : null);
}
export { BRe, QC, P0, Vkt, Xtt, $7t, mq, Kkt, Xkt, Ykt, c1, Ytt, Jtt, cge, Jkt };
