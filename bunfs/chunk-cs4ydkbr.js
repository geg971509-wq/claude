// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Cu } from "/$bunfs/root/chunk-f9h0bg01.js";
import "/$bunfs/root/chunk-qq1mdtb5.js";
import "/$bunfs/root/chunk-tx16jn0x.js";
import "/$bunfs/root/chunk-r53tkxrh.js";
import "/$bunfs/root/chunk-4xj01xwv.js";
import { g } from "/$bunfs/root/chunk-ca80fke8.js";
import "/$bunfs/root/chunk-gcks6mn0.js";
import "/$bunfs/root/chunk-bzx56g36.js";
import "/$bunfs/root/chunk-eqdctte5.js";
import "/$bunfs/root/chunk-fec4384a.js";
import "/$bunfs/root/chunk-qm65zb83.js";
import "/$bunfs/root/chunk-vfy57cpd.js";
import "/$bunfs/root/chunk-ypdw393e.js";
import "/$bunfs/root/chunk-fv016jr6.js";
import "/$bunfs/root/chunk-qk7r0t2g.js";
import { k, wr } from "/$bunfs/root/chunk-4ddxwr9r.js";
import "/$bunfs/root/chunk-wkxx62a2.js";
import "/$bunfs/root/chunk-ps6pc7xd.js";
import "/$bunfs/root/chunk-qd35gw0c.js";
import "/$bunfs/root/chunk-mhf4d4sa.js";
import "/$bunfs/root/chunk-pbmajbn7.js";
import "/$bunfs/root/chunk-htrft0p0.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import "/$bunfs/root/chunk-c3bffkxg.js";
import "/$bunfs/root/chunk-d1d8xqks.js";
import "/$bunfs/root/chunk-jpf4kat5.js";
import "/$bunfs/root/chunk-37pvmyqb.js";
import "/$bunfs/root/chunk-nqmqabr8.js";
import "/$bunfs/root/chunk-386w1sy8.js";
import "/$bunfs/root/chunk-2mmw62jx.js";
import "/$bunfs/root/chunk-fwwvmbqn.js";
import "/$bunfs/root/chunk-8tgj5dp2.js";
import "/$bunfs/root/chunk-amem41jf.js";
import "/$bunfs/root/chunk-0pgyw7te.js";
import "/$bunfs/root/chunk-ax6dy60b.js";
import "/$bunfs/root/chunk-6k63g5t6.js";
import "/$bunfs/root/chunk-4fwj3vnx.js";
import "/$bunfs/root/chunk-q14dgq5g.js";
import "/$bunfs/root/chunk-f5hrzy3k.js";
import "/$bunfs/root/chunk-s7e0px8j.js";
import "/$bunfs/root/chunk-s28wf80n.js";
import "/$bunfs/root/chunk-3bbym8ct.js";
import "/$bunfs/root/chunk-cf8qhmdc.js";
import "/$bunfs/root/chunk-2masxyqj.js";
import "/$bunfs/root/chunk-rgw52f13.js";
import { $t, Gn } from "/$bunfs/root/chunk-2rx5nghb.js";
import "/$bunfs/root/chunk-z0z1xzkg.js";
import "/$bunfs/root/chunk-c47snwm2.js";
import "/$bunfs/root/chunk-s4vc7est.js";
import "/$bunfs/root/chunk-hyh5wcm1.js";
import "/$bunfs/root/chunk-ntyhd04p.js";
import "/$bunfs/root/chunk-8qsdea2c.js";
import "/$bunfs/root/chunk-988p40e0.js";
import "/$bunfs/root/chunk-0spqrdaj.js";
import "/$bunfs/root/chunk-5rt2mvvk.js";
import { nYe } from "/$bunfs/root/chunk-1yr12dqr.js";
import "/$bunfs/root/chunk-z2bvp3sv.js";
import "/$bunfs/root/chunk-keb644xg.js";
import "/$bunfs/root/chunk-bj904w9w.js";
import "/$bunfs/root/chunk-18bck2pp.js";
import "/$bunfs/root/chunk-dwwpyy7b.js";
import "/$bunfs/root/chunk-jck8t8fq.js";
import "/$bunfs/root/chunk-qcx34e4j.js";
import "/$bunfs/root/chunk-psdymar6.js";
import "/$bunfs/root/chunk-0r9wzh7g.js";
import "/$bunfs/root/chunk-sxxp6vcr.js";
import "/$bunfs/root/chunk-rf51999f.js";
import "/$bunfs/root/chunk-82w4mtvq.js";
import "/$bunfs/root/chunk-v7yhn7cf.js";
import "/$bunfs/root/chunk-kxyny47c.js";
import "/$bunfs/root/chunk-e7rq8w09.js";
import "/$bunfs/root/chunk-fbp3w46j.js";
import "/$bunfs/root/chunk-gtv2468w.js";
import "/$bunfs/root/chunk-4r03fm98.js";
import "/$bunfs/root/chunk-s4smmnta.js";
import "/$bunfs/root/chunk-z9ex1x2t.js";
import "/$bunfs/root/chunk-k4a21mkt.js";
import "/$bunfs/root/chunk-4rh74qms.js";
import "/$bunfs/root/chunk-r3qa2s4k.js";
import "/$bunfs/root/chunk-1evht33z.js";
import "/$bunfs/root/chunk-gkfy5ggn.js";
import "/$bunfs/root/chunk-qk6zade1.js";
import "/$bunfs/root/chunk-4t3vsqt7.js";
import "/$bunfs/root/chunk-ejdwrhgv.js";
import "/$bunfs/root/chunk-zkvj62rn.js";
import "/$bunfs/root/chunk-492vgtnr.js";
import "/$bunfs/root/chunk-0g6cj4h1.js";
import "/$bunfs/root/chunk-a48rnvhj.js";
import "/$bunfs/root/chunk-tzhtxm67.js";
import "/$bunfs/root/chunk-mznd09c6.js";
import "/$bunfs/root/chunk-ghara6r1.js";
import "/$bunfs/root/chunk-97wwdfyx.js";
import "/$bunfs/root/chunk-167jjb66.js";
import "/$bunfs/root/chunk-5c5qq1s7.js";
import { o, t, ko } from "/$bunfs/root/chunk-he2phymk.js";
import "/$bunfs/root/chunk-ka74qrx3.js";
import "/$bunfs/root/chunk-kez2zndg.js";
import "/$bunfs/root/chunk-2wxj9m3z.js";
import "/$bunfs/root/chunk-z45ex17x.js";
import "/$bunfs/root/chunk-tbbqkkg3.js";
import "/$bunfs/root/chunk-z9bhq3k9.js";
import "/$bunfs/root/chunk-0m39033q.js";
import "/$bunfs/root/chunk-v94qfg1j.js";
import "/$bunfs/root/chunk-q04k5ycg.js";
import "/$bunfs/root/chunk-c76q2y0e.js";
import "/$bunfs/root/chunk-2204t1q0.js";
import "/$bunfs/root/chunk-e28mhr30.js";
import "/$bunfs/root/chunk-ky33xsw7.js";
import "/$bunfs/root/chunk-8td9ks9h.js";
import "/$bunfs/root/chunk-zk5d9rtp.js";
import "/$bunfs/root/chunk-syabrr2b.js";
import "/$bunfs/root/chunk-1pn2pk9v.js";
import "/$bunfs/root/chunk-93max1bs.js";
import "/$bunfs/root/chunk-8cv6dqkz.js";
import { fe } from "/$bunfs/root/chunk-rycvm63e.js";
import "/$bunfs/root/chunk-8ktvd0rh.js";
import "/$bunfs/root/chunk-f9km17e9.js";
import "/$bunfs/root/chunk-ek4tmwbt.js";
import "/$bunfs/root/chunk-59pkbjrf.js";
import "/$bunfs/root/chunk-tmxtk606.js";
import { me } from "/$bunfs/root/chunk-489c3cyq.js";
import "/$bunfs/root/chunk-tspcysj2.js";
import "/$bunfs/root/chunk-jmrpkgzd.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import "/$bunfs/root/chunk-rp246vnd.js";
import { tt } from "/$bunfs/root/chunk-s8gya298.js";
import "/$bunfs/root/chunk-gtwaztzc.js";
import { W } from "/$bunfs/root/chunk-ht28m404.js";
import { BDe, hwe, Gpn, ngt, _we, ywe } from "/$bunfs/root/chunk-btcxpqw5.js";
import "/$bunfs/root/chunk-k8xha1qv.js";
import { sr } from "/$bunfs/root/chunk-vnpdqx6v.js";
import "/$bunfs/root/chunk-4kafv9jq.js";
import "/$bunfs/root/chunk-7d0my7mt.js";
import "/$bunfs/root/chunk-wnc75h2x.js";
import "/$bunfs/root/chunk-1fwtbc4t.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import "/$bunfs/root/chunk-tfb5y7hy.js";
import "/$bunfs/root/chunk-d5bnjcbw.js";
import { u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import "/$bunfs/root/chunk-31xy83wr.js";
import "/$bunfs/root/chunk-g732bkj4.js";
import "/$bunfs/root/chunk-zgfc288e.js";
import "/$bunfs/root/chunk-fveqn4y7.js";
import "/$bunfs/root/chunk-m1andcps.js";
import "/$bunfs/root/chunk-5tdaspnd.js";
import "/$bunfs/root/chunk-8sbwe0jk.js";
import "/$bunfs/root/chunk-nwb64bac.js";
import "/$bunfs/root/chunk-szz73wxx.js";
import "/$bunfs/root/chunk-b40bn863.js";
import "/$bunfs/root/chunk-6mgs10s2.js";
import "/$bunfs/root/chunk-6s9ybdq1.js";
import "/$bunfs/root/chunk-1hh0bg14.js";
import "/$bunfs/root/chunk-052zvbpg.js";
import "/$bunfs/root/chunk-werv747a.js";
import "/$bunfs/root/chunk-jzh4kg5x.js";
import "/$bunfs/root/chunk-7s7jqj2f.js";
import "/$bunfs/root/chunk-56sxk8k2.js";
import "/$bunfs/root/chunk-a4q326ap.js";
import { d, fn } from "/$bunfs/root/chunk-yz031c9r.js";
F();
function V(ht) {
  return ht.activeGoal;
}
function Y(Ct) {
  return Ct + 1;
}
function T(ut) {
  let s = _(38),
    { messages: X, onDone: m } = ut,
    i = W(V),
    [, ft] = u(0),
    q;
  if (s[0] === d) (q = () => ft(Y)), (s[0] = q);
  else q = s[0];
  if ((ko(q, i ? 1000 : null), i)) {
    const A = Date.now() - i.setAt;
    let h;
    if (s[1] !== A) (h = $t(A, { mostSignificantOnly: !0 })), (s[1] = A), (s[2] = h);
    else h = s[2];
    let gt = h;
    const G = Cu() - i.tokensAtStart;
    let C;
    if (s[3] !== G) (C = Gn(G)), (s[3] = G), (s[4] = C);
    else C = s[4];
    let yt = C;
    const S = `running ${gt}`;
    let O;
    if (s[5] !== i.iterations)
      (O = i.iterations > 0 && `${i.iterations} ${k(i.iterations, "turn")}`), (s[5] = i.iterations), (s[6] = O);
    else O = s[6];
    const B = `${yt} tokens`;
    let z;
    if (s[7] !== S || s[8] !== O || s[9] !== B)
      (z = [S, O, B].filter(Boolean)), (s[7] = S), (s[8] = O), (s[9] = B), (s[10] = z);
    else z = s[10];
    let Gt = z;
    const I = Gt.join(" \xB7 ");
    let D;
    if (s[11] === d)
      (D = r(fe, {
        children: [e(t, { children: "/goal clear to stop early" }), e(M, { chord: "escape", action: "dismiss" })],
      })),
        (s[11] = D);
    else D = s[11];
    let R;
    if (s[12] !== i.condition) (R = e(N, { label: "Goal", children: i.condition })), (s[12] = i.condition), (s[13] = R);
    else R = s[13];
    let b;
    if (s[14] !== i.lastReason)
      (b = i.lastReason ? e(N, { label: "Last check", children: wr(i.lastReason.trim()) }) : null),
        (s[14] = i.lastReason),
        (s[15] = b);
    else b = s[15];
    let w;
    if (s[16] !== R || s[17] !== b)
      (w = r(o, { flexDirection: "column", children: [R, b] })), (s[16] = R), (s[17] = b), (s[18] = w);
    else w = s[18];
    let K;
    if (s[19] !== m || s[20] !== I || s[21] !== w)
      (K = e(me, { title: `${nYe} Goal active`, subtitle: I, onCancel: m, inputGuide: D, children: w })),
        (s[19] = m),
        (s[20] = I),
        (s[21] = w),
        (s[22] = K);
    else K = s[22];
    return K;
  }
  let A;
  if (s[23] !== X || s[24] !== m) {
    A = fn;
    bb0: {
      let c = Gpn(X);
      if (c) {
        let v = [];
        if (c.durationMs !== void 0) v.push($t(c.durationMs, { mostSignificantOnly: !0 }));
        if (c.iterations !== void 0) v.push(`${c.iterations} ${k(c.iterations, "turn")}`);
        if (c.tokens !== void 0) v.push(`${Gn(c.tokens)} tokens`);
        let h;
        if (s[26] === d)
          (h = r(t, { children: [e(tt, { status: "success", withSpace: !0 }), "Goal achieved"] })), (s[26] = h);
        else h = s[26];
        const G = v.join(" \xB7 ");
        let C;
        if (s[27] === d)
          (C = r(fe, {
            children: [
              e(t, { children: "/goal <condition> to set another" }),
              e(M, { chord: "escape", action: "dismiss" }),
            ],
          })),
            (s[27] = C);
        else C = s[27];
        let S;
        if (s[28] !== c) (S = e(N, { label: "Goal", children: c.condition })), (s[28] = c), (s[29] = S);
        else S = s[29];
        let O;
        if (s[30] !== m || s[31] !== G || s[32] !== S)
          (O = e(me, { title: h, subtitle: G, color: "success", onCancel: m, inputGuide: C, children: S })),
            (s[30] = m),
            (s[31] = G),
            (s[32] = S),
            (s[33] = O);
        else O = s[33];
        A = O;
        break bb0;
      }
    }
    (s[23] = X), (s[24] = m), (s[25] = A);
  } else A = s[25];
  if (A !== fn) return A;
  let h, G;
  if (s[34] === d)
    (h = e(M, { chord: "escape", action: "dismiss" })),
      (G = e(sr, { hint: "/goal <condition> to set one", children: "No goal set" })),
      (s[34] = h),
      (s[35] = G);
  else (h = s[34]), (G = s[35]);
  let C;
  if (s[36] !== m) (C = e(me, { title: "Goal", onCancel: m, inputGuide: h, children: G })), (s[36] = m), (s[37] = C);
  else C = s[37];
  return C;
}
function N(kt) {
  let E = _(7),
    { label: P, children: j } = kt,
    x;
  if (E[0] !== P)
    (x = e(o, { flexShrink: 0, children: r(t, { dimColor: !0, children: [P, ": "] }) })), (E[0] = P), (E[1] = x);
  else x = E[1];
  let L;
  if (E[2] !== j) (L = e(o, { flexGrow: 1, children: e(t, { wrap: "wrap", children: j }) })), (E[2] = j), (E[3] = L);
  else L = E[3];
  let U;
  if (E[4] !== x || E[5] !== L)
    (U = r(o, { flexDirection: "row", children: [x, L] })), (E[4] = x), (E[5] = L), (E[6] = U);
  else U = E[6];
  return U;
}
var Rt = async (p, f, l) => {
  let y = l.trim();
  if (y === "") return e(T, { messages: f.messages, onDone: () => p(void 0, { display: "skip" }) });
  if (hwe(y)) {
    let n = ywe(f);
    return p(n === null ? "No goal set" : `Goal cleared: ${n}`, { display: "system" }), null;
  }
  if (y.length > BDe)
    return (
      g("goal_set", "too_long"),
      p(`Goal condition is limited to ${BDe} characters (got ${y.length})`, { display: "system" }),
      null
    );
  let a = _we(y, f);
  if (a !== null) return p(a, { display: "system" }), null;
  return p(`Goal set: ${y}`, { shouldQuery: !0, metaMessages: [ngt(y)] }), null;
};
export { Rt as call };
