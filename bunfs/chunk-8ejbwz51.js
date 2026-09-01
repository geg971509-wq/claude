// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { bzt, vvn } from "/$bunfs/root/chunk-rgw52f13.js";
import { Jr, lut } from "/$bunfs/root/chunk-zze8764r.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { Ua } from "/$bunfs/root/chunk-8ktvd0rh.js";
import { ge } from "/$bunfs/root/chunk-c3bffkxg.js";
import { o, t } from "/$bunfs/root/chunk-he2phymk.js";
import { Be } from "/$bunfs/root/chunk-ek4tmwbt.js";
import { vp } from "/$bunfs/root/chunk-ph2x1s8t.js";
import { lv, Px, me } from "/$bunfs/root/chunk-489c3cyq.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { wo } from "/$bunfs/root/chunk-hyj9nfhh.js";
import { DK } from "/$bunfs/root/chunk-kb0t60a2.js";
import { sr } from "/$bunfs/root/chunk-vnpdqx6v.js";
import { wn } from "/$bunfs/root/chunk-et3g0deq.js";
import { U, e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { B, A, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { L } from "/$bunfs/root/chunk-v4qqyykc.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
F();
function R({ onStashAndContinue: h, onCancel: m }) {
  let [g, S] = u(null),
    f = g !== null ? [...g.tracked, ...g.untracked] : [],
    [E, T] = u(true),
    [w, y] = u(false),
    [s, c] = u(null);
  A(() => {
    (async () => {
      try {
        let i = await bzt();
        S(i);
      } catch (i) {
        let C = i instanceof Error ? i.message : String(i);
        n(`Error getting changed files: ${C}`, { level: "error" }), c("Failed to get changed files");
      } finally {
        T(false);
      }
    })();
  }, []);
  let b = async () => {
    y(true);
    try {
      if ((n("Stashing changes before teleport..."), await vvn("Teleport auto-stash")))
        n("Successfully stashed changes"), h();
      else c("Failed to stash changes");
    } catch (a) {
      let i = a instanceof Error ? a.message : String(a);
      n(`Error stashing changes: ${i}`, { level: "error" }), c("Failed to stash changes");
    } finally {
      y(false);
    }
  };
  if (E)
    return e(o, {
      flexDirection: "column",
      padding: 1,
      children: r(o, {
        marginBottom: 1,
        children: [e(wo, {}), r(t, { children: [" Checking git status", L.ellipsis] })],
      }),
    });
  if (s)
    return r(o, {
      flexDirection: "column",
      padding: 1,
      children: [
        r(t, { bold: true, color: "error", children: ["Error: ", s] }),
        e(o, {
          marginTop: 1,
          children: e(t, { dimColor: true, children: e(M, { chord: "escape", action: "cancel", bold: true }) }),
        }),
      ],
    });
  let v = f.length > 8;
  return r(me, {
    title: "Working directory has changes",
    onCancel: m,
    children: [
      e(t, { children: "Teleport will switch git branches. The following changes were found:" }),
      e(o, {
        flexDirection: "column",
        paddingLeft: 2,
        children:
          f.length > 0
            ? v
              ? r(t, { children: [f.length, " files changed"] })
              : f.map((a, i) => e(t, { children: a }, i))
            : e(sr, { children: "No changes detected" }),
      }),
      e(t, { children: "Would you like to stash these changes and continue with teleport?" }),
      w
        ? r(o, { children: [e(wo, {}), e(t, { children: " Stashing changes..." })] })
        : e(wn, {
            confirmLabel: "Stash changes and continue",
            cancelLabel: "Exit",
            onConfirm: () => void b(),
            onCancel: m,
          }),
    ],
  });
}
function le() {
  Jr(0);
}
var J = new Set();
function ett($e) {
  let p = _(23),
    { onComplete: N, errorsToIgnore: V, isStandalone: X } = $e,
    W = V === void 0 ? J : V,
    qe = X === void 0 ? false : X,
    [q, Z] = u(null),
    [k, j] = u(false),
    z = Ua(),
    { credentials: H } = ge(),
    ee;
  if (p[0] !== H || p[1] !== W || p[2] !== N)
    (ee = async () => {
      let ze = await lut(H);
      let K = new Set(Array.from(ze).filter((He) => !W.has(He)));
      if (K.size === 0) {
        N();
        return;
      }
      if (K.has("needsLogin")) Z("needsLogin");
      else if (K.has("needsGitStash")) Z("needsGitStash");
    }),
      (p[0] = H),
      (p[1] = W),
      (p[2] = N),
      (p[3] = ee);
  else ee = p[3];
  let l = ee,
    oe,
    te;
  if (p[4] !== l)
    (oe = () => {
      l();
    }),
      (te = [l]),
      (p[4] = l),
      (p[5] = oe),
      (p[6] = te);
  else (oe = p[5]), (te = p[6]);
  A(oe, te);
  let D = le,
    re;
  if (p[7] !== l)
    (re = () => {
      j(false), l();
    }),
      (p[7] = l),
      (p[8] = re);
  else re = p[8];
  let I = re,
    ne;
  if (p[9] === d)
    (ne = () => {
      j(true);
    }),
      (p[9] = ne);
  else ne = p[9];
  let Ke = ne,
    ie;
  if (p[10] !== l)
    (ie = () => {
      l();
    }),
      (p[10] = l),
      (p[11] = ie);
  else ie = p[11];
  let O = ie;
  const Y = qe && q === "needsGitStash";
  let se;
  if (p[12] !== Y) (se = { context: "Confirmation", isActive: Y }), (p[12] = Y), (p[13] = se);
  else se = p[13];
  if ((Be("confirm:no", D, se), !q)) {
    return null;
  }
  switch (q) {
    case "needsGitStash": {
      let x;
      if (p[14] !== O) (x = e(R, { onStashAndContinue: O, onCancel: D })), (p[14] = O), (p[15] = x);
      else x = p[15];
      return x;
    }
    case "needsLogin": {
      const x = k ? I : D;
      let P;
      if (p[16] !== I || p[17] !== z || p[18] !== k)
        (P = k
          ? e(DK, { onDone: I, mode: "login", forceLoginMethod: "claudeai", urlOutdent: z ? Px : lv })
          : r(U, {
              children: [
                r(o, {
                  flexDirection: "column",
                  children: [
                    e(t, { dimColor: true, children: "Teleport requires a Claude.ai account." }),
                    e(t, { dimColor: true, children: "Your Claude Pro/Max subscription will be used by Claude Code." }),
                  ],
                }),
                e(wn, { confirmLabel: "Login with Claude account", cancelLabel: "Exit", onConfirm: Ke, onCancel: D }),
              ],
            })),
          (p[16] = I),
          (p[17] = z),
          (p[18] = k),
          (p[19] = P);
      else P = p[19];
      let ae;
      if (p[20] !== x || p[21] !== P)
        (ae = e(me, { title: "Log in to Claude", onCancel: x, children: P })), (p[20] = x), (p[21] = P), (p[22] = ae);
      else ae = p[22];
      return ae;
    }
  }
}
function rTr(h, m) {
  return new Promise((g) => {
    h.render(
      e(
        vp,
        { session: G(), children: e(ett, { errorsToIgnore: m, onComplete: () => void g(), isStandalone: true }) },
        "teleport-errors",
      ),
    );
  });
}
export { ett, rTr };
