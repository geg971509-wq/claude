// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { FV, cs, wt, eb } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { TDe } from "/$bunfs/root/chunk-86v6b72m.js";
import { tsn, gle, $Nt, csn, ji } from "/$bunfs/root/chunk-zze8764r.js";
import { C2, _mt, Mte, owe } from "/$bunfs/root/chunk-eb5y4yrx.js";
import { Iq } from "/$bunfs/root/chunk-9r67t977.js";
import { ge } from "/$bunfs/root/chunk-c3bffkxg.js";
import { o, t } from "/$bunfs/root/chunk-he2phymk.js";
import { hs, Vs, pi, Ti, Ce } from "/$bunfs/root/chunk-1y0jc48h.js";
import { bc } from "/$bunfs/root/chunk-42q7ctbx.js";
import { me } from "/$bunfs/root/chunk-489c3cyq.js";
import { ykt, Ctt } from "/$bunfs/root/chunk-26rqeg8y.js";
import { mQ, BUe } from "/$bunfs/root/chunk-bzrzj1sr.js";
import { tp } from "/$bunfs/root/chunk-1a0t5wmw.js";
import { rr } from "/$bunfs/root/chunk-0nfwsvfd.js";
import { Bge, g2e, jge } from "/$bunfs/root/chunk-tw0kgz4k.js";
import { U, e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { A, z, C, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { vf } from "/$bunfs/root/chunk-2am7kb6k.js";
F();
function Wme(D) {
  let { variant: v, onDone: P, startAtChooseForTesting: I } = D,
    _ = () => D.variant !== "mid-session" || D.accepts(),
    { storageV5: l, credentials: m } = ge(),
    i = z(() => Iq(P), [P]),
    [s, f] = u(I ? { s: "choose", blocked: !1, liveDefinite: !0, ...I } : { s: "loading" }),
    [Z, ee] = u(s.s),
    [E, ne] = u(0),
    [oe, L] = u(0);
  if (Z !== s.s) ee(s.s), ne(Date.now());
  let N = hs(),
    { refusedWithin: te, noteRefused: x, epoch: se } = pi(),
    M = C(!1),
    ae = Vs(`${E}:${se}`);
  function O() {
    return (E !== 0 && bc(E)) || te();
  }
  function re() {
    if (N() || O()) return x(), !0;
    return !1;
  }
  let R = C(null),
    q = C(null),
    V = C(!1);
  A(() => {
    if (s.s === "loading") {
      let n = !1;
      return (
        (R.current ??= Promise.all([gle(m).catch(() => null), $Nt(m, l).catch(() => "unknown")]).then(([a, c]) => ({
          balance: a,
          overagesEnabled: c === "enabled" || c === "blocked" || (c === "unknown" && owe()),
          blocked: c === "blocked",
          liveDefinite: c !== "unknown",
        }))),
        R.current.then((a) => {
          if (n) return;
          f({ s: "choose", ...a });
        }),
        () => {
          n = !0;
        }
      );
    }
    if (s.s === "buy-external") {
      let n = !1;
      return (
        (q.current ??= jge({ openInBrowser: !0 }, m)),
        q.current.then((a) => {
          if (n || V.current) return;
          if (((V.current = !0), a.type === "confirm-admin-request")) {
            if (wt()) {
              g("model_fable_consent", "overage_enable_deferred"),
                mQ(() => i("dismiss", eb() ? Bge : "Contact your admin to manage usage credit settings."));
              return;
            }
            f({ s: "confirm-admin-request", extraUsage: a.extraUsage, needsSetup: s.needsSetup });
            return;
          }
          g("model_fable_consent", "overage_enable_deferred"),
            mQ(() =>
              i(
                "dismiss",
                a.type === "message"
                  ? a.value
                  : a.opened
                    ? `Opened ${a.url} in your browser to ${s.needsSetup ? "turn on" : "manage"} usage credits. Once ${s.needsSetup ? "enabled" : "topped up"}, run /model to switch to Fable 5.`
                    : `Visit ${a.url} to ${s.needsSetup ? "turn on" : "manage"} usage credits. Once ${s.needsSetup ? "enabled" : "topped up"}, run /model to switch to Fable 5.`,
              ),
            );
        }),
        () => {
          n = !0;
        }
      );
    }
  }, [s.s, i, m, l]);
  function ie() {
    if (i("consent") === !1) return;
    Mte(l), y("model_fable_consent");
  }
  function le(n, a) {
    if (!_()) return;
    if (g2e()) f({ s: "buy", needsSetup: n, skipLiveCheck: n && a });
    else f({ s: "buy-external", needsSetup: n });
  }
  function ce() {
    if (!_()) return;
    if (M.current) return;
    (M.current = !0), f({ s: "reenabling", work: csn({ credentials: m, storageV5: l }) });
  }
  function ue() {
    if (i("switch") === !1) return;
    p("model_fable_consent", "declined");
  }
  function de(n) {
    if (i("dismiss", n) === !1) return;
    g("model_fable_consent", "upsell_selected");
  }
  function w() {
    if (N() || O()) {
      x();
      return;
    }
    if (i("dismiss") === !1) return;
    g("model_fable_consent", "dismissed");
  }
  let W = FV(),
    fe =
      v === "mid-session" && W !== null
        ? `Switch to ${cs(W)} and continue`
        : v === "mid-session"
          ? "Not now"
          : "No, keep my current model",
    [Y] = u(() => C2()),
    G = v === "mid-session" && !Y,
    [h] = u(() => (Y ? _mt() : null)),
    k =
      v === "picker"
        ? "Switch to Fable 5?"
        : G
          ? "You've reached your Fable 5 limit"
          : "Fable 5 now uses usage credits";
  switch (s.s) {
    case "loading":
      return e(me, {
        title: k,
        color: "warning",
        onCancel: w,
        children: e(rr, { message: "Checking usage credits\u2026" }),
      });
    case "choose": {
      let { balance: n, overagesEnabled: a, blocked: c, liveDefinite: he } = s,
        T = n?.amount ?? 0,
        pe = n?.currency ?? "USD",
        d = !a,
        b = d && T > 0,
        H = a && n === null,
        j = a && T > 0,
        J = !c && (j || H),
        S = g2e(),
        be = vf()
          ? d
            ? "Set up usage credits on claude.ai"
            : "Manage usage credits on claude.ai"
          : d
            ? "Request usage credits from your admin"
            : "Request more from your admin",
        Q = G
          ? "You've used your included Fable 5 usage for this week. Continuing on Fable 5 uses usage credits"
          : "Fable 5 runs on usage credits",
        we =
          (d && !b) || H
            ? `${Q}, purchased separately from your plan.`
            : `${Q} \u2014 you have ${ji(j || b ? T : 0, pe)} in credits.`,
        ye = J
          ? "Continue with Fable 5"
          : b && S
            ? "Yes, re-enable and continue"
            : S
              ? d
                ? "Yes, buy usage credits"
                : "Buy usage credits"
              : be,
        X = h?.option ? { label: h.option.label, value: "upsell" } : null;
      return e(me, {
        title: k,
        color: "warning",
        onCancel: w,
        children: r(o, {
          flexDirection: "column",
          gap: 1,
          marginBottom: 1,
          children: [
            e(t, { children: we }),
            h?.dialogNote && e(t, { dimColor: !0, children: h.dialogNote }),
            b
              ? e(t, { dimColor: !0, children: "Usage credits are turned off. Re-enable to use Fable 5." })
              : d
                ? r(U, {
                    children: [
                      e(t, { dimColor: !0, children: "You don't have usage credits yet." }),
                      S &&
                        r(U, {
                          children: [
                            r(t, {
                              dimColor: !0,
                              children: [
                                "Starts with a",
                                " ",
                                ji(tsn, "USD", "whole"),
                                " ",
                                "monthly limit \xB7 run /usage-credits to adjust",
                              ],
                            }),
                            r(t, {
                              dimColor: !0,
                              children: [
                                "By continuing, you agree to turn on usage credits per our Help Center: ",
                                TDe,
                              ],
                            }),
                          ],
                        }),
                    ],
                  })
                : e(tp, { url: TDe }),
            e(
              Ce,
              {
                options: [{ label: fe, value: "switch" }, { label: ye, value: "confirm" }, ...(X ? [X] : [])],
                selectedValue: Ti,
                refuseInput: re,
                hideIndexes: !0,
                defaultFocusValue: "switch",
                onChange: (K) => {
                  if (O()) {
                    L((B) => B + 1), x();
                    return;
                  }
                  if (!_()) {
                    L((B) => B + 1);
                    return;
                  }
                  if (K === "switch") return ue();
                  if (K === "upsell") return h?.option ? de(h.option.message) : void 0;
                  if (J) return ie();
                  if (b && S) return ce();
                  return le(d && !b, he);
                },
                onCancel: w,
              },
              `${oe}-${ae.remountKey}`,
            ),
          ],
        }),
      });
    }
    case "buy":
      return e(ykt, {
        initialStep: "buy_select",
        entryReason: "fable",
        onBeforePurchase: s.needsSetup
          ? () => csn({ skipLiveCheck: s.skipLiveCheck, credentials: m, storageV5: l })
          : void 0,
        onPurchaseSuccess: (n) => {
          Mte(l), y("model_fable_consent"), mQ(() => i("consent", n));
        },
        onDone: (n) => {
          if (typeof n === "string") {
            g("model_fable_consent", "buy_fallback"), mQ(() => i("dismiss", n));
            return;
          }
          (R.current = null), f({ s: "loading" });
        },
      });
    case "reenabling":
      return e(me, {
        title: k,
        color: "warning",
        onCancel: w,
        children: e(Ctt, {
          message: "Turning on usage credits\u2026",
          work: s.work,
          failure: !1,
          onDone: (n) => {
            if (n) Mte(l), y("model_fable_consent"), mQ(() => i("consent"));
            else
              g("model_fable_consent", "reenable_failed"),
                mQ(() => i("dismiss", "Couldn't turn on usage credits. Run /usage-credits to try again."));
          },
        }),
      });
    case "buy-external":
      return e(me, {
        title: k,
        color: "warning",
        onCancel: w,
        children: e(rr, { message: s.needsSetup ? "Setting up usage credits\u2026" : "Opening usage credits\u2026" }),
      });
    case "confirm-admin-request":
      return e(BUe, {
        extraUsage: s.extraUsage,
        accepts: _,
        onDone: (n) => i("dismiss", n),
        onOutcome: (n) => {
          switch (n) {
            case "filed":
              g("model_fable_consent", "overage_enable_deferred");
              return;
            case "failed":
              p("model_fable_consent", "admin_request_failed");
              return;
            case "cancelled":
              g("model_fable_consent", "dismissed");
              return;
          }
        },
      });
  }
}
export { Wme };
