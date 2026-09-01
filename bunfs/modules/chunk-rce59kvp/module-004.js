// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $e, $o, $w, A, Ab, Ae, At, Atn, Av, Ave, B, BB, BFe, BWn, Be, Bg, Bh, Bi, Bo, Bt, By, C, C$t, CUe, Cdt, Ce, Ci, Cie, Cje, Ct, Ctn, Cv, Dc, Dhe, Dm, Dn, Do, Dp, Ds, ELe, EWt, Ee, Ege, Eh, Etn, F, FBe, FK, Fg, Fi, Fie, Fj, Fo, GA, GIe, GL, GO, GRt, GV, Ghe, Gle, Gn, H0, H1, H9n, HK, HS, Hdt, Het, Hg, Hi, Hie, Hl, Hm, Hs, I, I4e, I9, IT, IV, IZ, Ice, Ih, Ije, Iu, Ive, Ix, Iy, Je, Jn, Jq, Jqn, K, K0e, KKt, Kit, Kt, Kun, L, LNt, Ldn, Lg, Lp, Lt, M, MBe, Ma, Me, Mie, Mt, NBe, NJ, Ne, Nf, Nh, Ni, Nie, Nj, Nt, Nte, O4, OK, OR, Oc, Od, Ohe, Om, On, Or, Ote, Ou, Ow, PJ, Pce, Phe, Po, Pv, Q, Q0, Q4n, QLt, Qe, Qi, Qm, Qr, R, R1n, RBe, Rne, Rze, SB, SN, SQ, Se, St, T7e, T8, TS, Tdt, Tee, Ti, Tl, Ts, Tt, Ttn, U, UG, URe, UUe, Ue, Ui, Un, Us, Ut, V0e, V5, VIe, VL, Vle, Vn, Vs, Vt, W, W1, WP, WRt, Wce, We, Wet, Wle, Wme, Wy, XKt, XPn, XQ, Xe, Xee, Xj, Xn, Xp, Y0t, Y1, YIe, Ya, Yc, Yl, Yn, Yq, Yqn, Yve, Yw, Z$e, Z4n, ZJ, ZS, Zin, Zne, _, _E, _Rt, __t, _be, _dt, _ee, _ft, _it, _p, _q, _r, _t, _v, a, aet, aft, at, ax, b, b3t, b9n, bE, bFt, bKe, bc, bdt, bi, br, bt, c, cI, cO, cRt, cSe, ce, co, cs, ct, d, di, dit, dxe, dy, dze, e, eUe, edn, ee, ege, eo, es, et, evt, f, fD, fH, fHe, fe, fi, fo, fs, fv, g, g7, g7t, gXt, gbt, gdt, ge, gi, git, go, gt, gx, h, hK, hRt, hYt, hbt, hit, hke, hn, hs, ht, i, i1, i9e, iM, ie, ihe, ile, io, iw, jAe, jFe, jIn, j_, jd, k, k4, k4e, kFt, kL, ke, ket, kg, kit, kj, ko, kre, l, l2, lOn, lQn, lW, l_, le, lk, m, mBt, mC, mX, ma, md, me, mn, n, n2, nX, ndt, nk, nke, nl, nm, nr, o, oN, o_, oe, oo, oq, oqe, os, p, p$, p6, p9n, pKe, pO, pi, pit, pt, q1, qO, qVt, qan, qet, qge, qk, ql, qle, qm, qn, r, r9e, rK, rZe, rt, rv, s, sOn, sSe, sZ, sd, se, sg, sl, ss, t, t2, t2e, t9, ta, tde, te, ts, tt, u, u1, uSe, uc, ul, ut, uu, uze, v5e, vS, vUe, vb, vdt, ve, vne, vsn, vtn, vv, w, w7e, w9n, wK, wT, wdt, wi, wn, wo, wr, wt, x5n, x8t, xZ, xd, xe, xg, xge, xn, xr, xt, y, y2, y7e, yRt, yf, yit, yl, yn, yo, yq, yr, z, z1, z7, zD, zL, zRt, zU, zan, zc, zh, zi, zk, zn, zp } from "/$bunfs/root/modules/chunk-rce59kvp/prelude.js";
import { Lb, NH, Ob, Tg, _x, hf, sf } from "/$bunfs/root/modules/chunk-rce59kvp/module-001.js";
import { Bb, Gd, Iv, Rg } from "/$bunfs/root/modules/chunk-rce59kvp/module-002.js";
import { $T, Bz, C2, Gk, LL, Nz, Sue, TP, Uz, aw, eO, gue, jL, nO, oO, pue, tO, yue, zfe } from "/$bunfs/root/modules/chunk-rce59kvp/module-003.js";

var XQe = 3000;

function xm({
  hideThanksAfterMs: S,
  otherSurveyActive: x = false,
  autoDismissAfterMs: P,
  onOpen: j,
  onSelect: H,
  onAutoDismiss: Z,
  onAbandon: re,
  shouldShowTranscriptPrompt: ue,
  onTranscriptPromptShown: de,
  onTranscriptSelect: pe,
  onShareConsent: Re,
  shouldShowFollowupPrompt: be,
  onFollowupPromptShown: Pe,
  onFollowupResolve: Oe,
}) {
  let Ie = xt(),
    [He, Fe] = u("closed"),
    [Ve, Ke] = u(null),
    [ot, st] = u(null),
    [nt, Pt] = u(true),
    kt = C(ege()),
    Ht = C(null),
    yt = C(null),
    lt = C(null);
  A(
    () => () => {
      yt.current?.();
    },
    [],
  );
  let [Rt, to] = u(false),
    so = B(
      (Yt = "digit") => {
        to(Yt === "followup"),
          Fe("thanks"),
          Ie.setTimeout(() => {
            Fe("closed"), Ke(null);
          }, S);
      },
      [Ie, S],
    ),
    jt = B(() => {
      Fe("submitted"), Ie.setTimeout(() => Fe("closed"), S);
    }, [Ie, S]),
    Gt = B(() => {
      Fe("share_failed"), Ie.setTimeout(() => Fe("closed"), S);
    }, [Ie, S]),
    vo = B(() => {
      if (He !== "closed") return;
      (qt.current = false), Fe("open"), (kt.current = ege()), j(kt.current);
    }, [He, j]),
    qt = C(false),
    lo = B(() => {
      if (He !== "open") return;
      Fe("closed"), Ke(null), re?.(kt.current);
    }, [He, re]);
  A(() => {
    if (x && He === "open" && !qt.current) Fe("closed");
  }, [x, He]),
    Yn(
      () => {
        Fe("closed"), Ke(null), Z?.(kt.current);
      },
      He === "open" && P ? P : null,
      [He, P],
    );
  let To = B(
      (Yt) => {
        if (((yt.current = null), H(kt.current, Yt), Yt === "dismissed")) Fe("closed"), Ke(null);
        else if (ue?.(Yt)) Fe("transcript_prompt"), de?.(kt.current, Yt);
        else if (be?.(Yt)) Fe("followup_prompt"), Pe?.(kt.current, Yt);
        else so();
      },
      [so, H, ue, de, be, Pe],
    ),
    ao = B(
      (Yt) => {
        if (((qt.current = true), Ke(Yt), (Ht.current = Yt), Yt === "dismissed")) {
          To(Yt);
          return;
        }
        Fe("pending"), (yt.current = Ie.setTimeout(() => To(Yt), XQe));
      },
      [Ie, To],
    ),
    jo = B(() => {
      yt.current?.(), (yt.current = null), Ke(null), (Ht.current = null), Fe("open");
    }, []),
    Qo = B(
      ({ success: Yt, bundlePath: No }) => {
        if (Yt) st(No ?? null), jt();
        else Gt();
      },
      [jt, Gt],
    ),
    uo = B(
      (Yt) => {
        let No = Ht.current,
          cn = No !== null && (be?.(No) ?? false);
        switch (Yt) {
          case "yes": {
            let tn = () =>
              (async () => {
                try {
                  let nn = await pe?.(kt.current, Yt, No);
                  return typeof nn === "object" ? nn : { success: nn ?? false, bundlePath: void 0 };
                } catch {
                  return { success: false, bundlePath: void 0 };
                }
              })();
            if (cn && No !== null) Re?.(kt.current, No), (lt.current = tn), Fe("followup_prompt"), Pe?.(kt.current, No);
            else Pt(true), Fe("submitting"), tn().then(Qo);
            break;
          }
          case "no":
          case "dont_ask_again":
            if ((pe?.(kt.current, Yt, No), cn && No !== null)) Fe("followup_prompt"), Pe?.(kt.current, No);
            else so();
            break;
        }
      },
      [so, Qo, pe, Re, be, Pe],
    ),
    Pn = B(
      (Yt) => {
        let No = Oe?.(kt.current, Yt, Ht.current),
          cn = No ? Promise.resolve(No).catch(() => {}) : null,
          tn = lt.current;
        if (((lt.current = null), tn)) Pt(true), Fe("submitting"), Promise.all([tn(), cn]).then(([nn]) => Qo(nn));
        else if (cn) Pt(false), Fe("submitting"), cn.then(() => so("followup"));
        else so("followup");
      },
      [Oe, Qo, so],
    );
  return {
    state: He,
    lastResponse: Ve,
    appearanceId: kt.current,
    transcriptBundlePath: ot,
    open: vo,
    abandon: lo,
    handleSelect: ao,
    handleUndo: jo,
    handleTranscriptSelect: uo,
    handleFollowupResolve: Pn,
    thanksFromFollowup: Rt,
    submittingShare: nt,
  };
}

function rO() {
  return false;
}

function tge() {
  return false;
}

function iS(S) {
  return Wy(S)?.message?.id || "unknown";
}

function v2(S) {
  return S === "good" ? "good_feedback_survey" : S === "fine" ? "fine_feedback_survey" : "bad_feedback_survey";
}

function w2({ turn: S, transcript: x, surveyType: P = "session", otherSurveyActive: j = false }) {
  let { storageV5: H, credentials: Z } = ge(),
    re = Xn(),
    ue = Xe(S, (Tn) => Tn.isLoading),
    de = Xe(S, (Tn) => Tn.submitCount),
    pe = Xe(x),
    [Re, be] = u(() => ({ timeLastShown: null, timeLastShownAtClock: null, submitCountAtLastAppearance: null })),
    Pe = Gk("tengu_feedback_survey_config", aet),
    Oe = Gk("tengu_bad_survey_transcript_ask_config", cRt),
    Ie = Gk("tengu_fine_survey_transcript_ask_config", cRt),
    He = Gk("tengu_good_survey_transcript_ask_config", cRt),
    [Fe, Ve] = u(Hie),
    [Ke, ot] = u(false),
    st = Je().feedbackSurveyRate,
    nt = xt(),
    Pt = C(nt.now()),
    kt = C(de),
    Ht = C(null),
    yt = C(null),
    lt = B(() => {
      (Ht.current = x.getSnapshot()), (yt.current = NJ());
    }, [x]),
    Rt = B(() => {
      (Ht.current = null), (yt.current = null);
    }, []),
    to = C(null),
    so = B(
      (Tn, tr) => {
        s("tengu_feedback_survey_event", {
          ...Tp(re),
          event_type: w("transcript_share_yes"),
          appearance_id: ve(Tn),
          last_assistant_message_id: ve(iS(x.getSnapshot())),
          survey_type: c(P),
          trigger: c(v2(tr)),
        }),
          (to.current = oO(x.getSnapshot(), H));
      },
      [P, H, re, x],
    ),
    jt = Xp(),
    Gt = Ege(),
    vo = W((Tn) => xA(Tn, Gt)),
    qt = C(false),
    lo = C(null),
    To = zfe(ue),
    ao = Bb(),
    jo = z(() => {
      let [Tn] = aft(pe, 1).messages;
      if (!Tn) return false;
      return /^[ \t]*\d{1,2}[.)][ \t]/m.test(Tn);
    }, [pe]),
    Qo = B(
      (Tn) => {
        let tr = Date.now(),
          hi = nt.now();
        if (
          (be((ti) => {
            if (ti.timeLastShown === tr && ti.submitCountAtLastAppearance === Tn) return ti;
            return { timeLastShown: tr, timeLastShownAtClock: hi, submitCountAtLastAppearance: Tn };
          }),
          ie().feedbackSurveyState?.lastShownTime !== tr)
        )
          Ae((ti) => ({ ...ti, feedbackSurveyState: { lastShownTime: tr } }), H);
      },
      [nt, H],
    ),
    uo = B(
      (Tn) => {
        Ve(Hie),
          ot(false),
          Rt(),
          (to.current = null),
          Qo(S.getSnapshot().submitCount),
          s("tengu_feedback_survey_event", {
            ...Tp(re),
            event_type: w("appeared"),
            appearance_id: ve(Tn),
            last_assistant_message_id: ve(iS(x.getSnapshot())),
            survey_type: c(P),
            prompt_index: Ave(),
          }),
          Po("feedback_survey", {
            event_type: "appeared",
            appearance_id: Tn,
            survey_type: P,
            enabled_via_override: p$(),
          });
      },
      [Qo, Rt, P, re, S, x],
    ),
    Pn = B(
      (Tn, tr) => {
        Qo(S.getSnapshot().submitCount),
          s("tengu_feedback_survey_event", {
            ...Tp(re),
            event_type: w("responded"),
            appearance_id: ve(Tn),
            response: c(tr),
            last_assistant_message_id: ve(iS(x.getSnapshot())),
            survey_type: c(P),
            prompt_index: Ave(),
          }),
          Po("feedback_survey", {
            event_type: "responded",
            appearance_id: Tn,
            response: tr,
            survey_type: P,
            enabled_via_override: p$(),
          });
      },
      [Qo, P, re, S, x],
    ),
    Yt = B(
      (Tn) => {
        s("tengu_feedback_survey_event", {
          ...Tp(re),
          event_type: w("abandoned"),
          appearance_id: ve(Tn),
          last_assistant_message_id: ve(iS(x.getSnapshot())),
          survey_type: c(P),
          prompt_index: Ave(),
        }),
          Po("feedback_survey", {
            event_type: "abandoned",
            appearance_id: Tn,
            survey_type: P,
            enabled_via_override: p$(),
          });
      },
      [P, re, x],
    ),
    No = B(
      (Tn) => {
        if (Tn !== "bad" && Tn !== "fine" && Tn !== "good") return false;
        if (Ct()) return false;
        if (!Mt("allow_product_feedback")) return false;
        if (Cie().kind === "disabled") return false;
        if (rO()) return true;
        if (ie().transcriptShareDismissed) return false;
        let tr = Tn === "bad" ? Oe.probability : Tn === "fine" ? Ie.probability : He.probability;
        return Math.random() <= tr;
      },
      [Oe.probability, Ie.probability, He.probability],
    ),
    cn = B(
      (Tn, tr) => {
        let hi = v2(tr);
        s("tengu_feedback_survey_event", {
          ...Tp(re),
          event_type: w("transcript_prompt_appeared"),
          appearance_id: ve(Tn),
          last_assistant_message_id: ve(iS(x.getSnapshot())),
          survey_type: c(P),
          trigger: c(hi),
        }),
          Po("feedback_survey", {
            event_type: "transcript_prompt_appeared",
            appearance_id: Tn,
            survey_type: P,
            enabled_via_override: p$(),
          });
      },
      [P, re, x],
    ),
    tn = B(
      async (Tn, tr, hi) => {
        let ti = v2(hi);
        if (!(tr === "yes" && to.current !== null))
          s("tengu_feedback_survey_event", {
            ...Tp(re),
            event_type: c(`transcript_share_${tr}`),
            appearance_id: ve(Tn),
            last_assistant_message_id: ve(iS(x.getSnapshot())),
            survey_type: c(P),
            trigger: c(ti),
          });
        if (tr === "dont_ask_again") await Ae((Wn) => ({ ...Wn, transcriptShareDismissed: true }), H);
        if (tr === "yes") {
          let Wn = to.current ?? oO(x.getSnapshot(), H);
          to.current = null;
          let yi = await C2(Wn, ti, Tn, Z);
          return (
            s("tengu_feedback_survey_event", {
              ...Tp(re),
              event_type: w(yi.success ? "transcript_share_submitted" : "transcript_share_failed"),
              appearance_id: ve(Tn),
              trigger: c(ti),
              error_code: yi.errorCode,
            }),
            yi
          );
        }
        return false;
      },
      [P, H, Z, re, x],
    ),
    nn = B(
      (Tn) => {
        if (Tn === "dismissed") return false;
        let tr = re.getState();
        if (
          S.getSnapshot().isLoading ||
          xA(tr, jt.getState().open.length > 0) ||
          Y0t(tr.activeOverlays) ||
          j_.getState().active ||
          XQ().trim() !== ""
        )
          return false;
        if (Ne() !== "firstParty") return false;
        let hi = Cie().kind;
        if (hi !== "post" && hi !== "share") return false;
        if (hi === "share" && IV().error) return false;
        if (tge()) return Ve({ ...Hie, enabled: true }), ot(true), lt(), true;
        let ti = I(XPn, Hie) ?? {},
          pr = (Ki, Wi) => (typeof Ki === "number" && Number.isFinite(Ki) && Ki > 0 ? Ki : Wi),
          Wn = (Ki, Wi) => (typeof Ki === "number" && Number.isFinite(Ki) && Ki >= gXt ? Ki : Wi),
          yi = {
            enabled: ti.enabled === true,
            maxChars: pr(ti.maxChars, Hie.maxChars),
            autoDismissAfterMs: Wn(ti.autoDismissAfterMs, Hie.autoDismissAfterMs),
          };
        if ((Ve(yi), ot(yi.enabled === true), yi.enabled === true)) lt();
        return yi.enabled === true;
      },
      [S, re, jt, lt],
    ),
    pn = B(
      (Tn, tr) => {
        s("tengu_feedback_survey_event", {
          ...Tp(re),
          event_type: w("followup_prompt_appeared"),
          appearance_id: ve(Tn),
          last_assistant_message_id: ve(iS(x.getSnapshot())),
          response: c(tr),
          survey_type: c(P),
        }),
          Po("feedback_survey", {
            event_type: "followup_prompt_appeared",
            appearance_id: Tn,
            survey_type: P,
            enabled_via_override: p$(),
          });
      },
      [P, re, x],
    ),
    Go = B(
      (Tn, tr, hi) => {
        if (tr.text === null) {
          s("tengu_feedback_survey_event", {
            ...Tp(re),
            event_type: w("followup_skipped"),
            appearance_id: ve(Tn),
            skip_method: c(tr.method),
            response: ke(hi),
            survey_type: c(P),
          }),
            Po("feedback_survey", {
              event_type: "followup_skipped",
              appearance_id: Tn,
              survey_type: P,
              enabled_via_override: p$(),
            }),
            Rt();
          return;
        }
        let ti = tr.text;
        s("tengu_feedback_survey_event", {
          ...Tp(re),
          event_type: w("followup_submitted"),
          appearance_id: ve(Tn),
          char_count: bi(Array.from(ti).length),
          response: ke(hi),
          survey_type: c(P),
        }),
          Po("feedback_survey", {
            event_type: "followup_submitted",
            appearance_id: Tn,
            survey_type: P,
            enabled_via_override: p$(),
          });
        let pr = Ht.current ?? x.getSnapshot(),
          Wn = yt.current;
        return (
          Rt(),
          jIn({
            description: ti,
            appearanceId: Tn,
            surveyResponse: hi ?? "bad",
            surveyType: P,
            messages: pr,
            lastInterruptedAssistantAPIMessageId: Wn,
            credentials: Z,
          })
            .then((yi) => {
              s("tengu_feedback_survey_event", {
                ...Tp(re),
                event_type: w(yi.success ? "followup_text_submitted" : "followup_text_failed"),
                appearance_id: ve(Tn),
                ...(yi.success
                  ? { feedback_id: ve(yi.feedbackId) }
                  : { error_code: ve(yi.failureReason ?? "unknown") }),
                survey_type: c(P),
              });
            })
            .catch(() => {})
        );
      },
      [P, Rt, re, x, Z],
    ),
    {
      state: Oo,
      lastResponse: xo,
      appearanceId: dn,
      transcriptBundlePath: Xo,
      open: zo,
      abandon: en,
      handleSelect: un,
      handleUndo: Uo,
      handleTranscriptSelect: Rn,
      handleFollowupResolve: mr,
      thanksFromFollowup: Pr,
      submittingShare: Ir,
    } = xm({
      otherSurveyActive: j,
      hideThanksAfterMs: Pe.hideThanksAfterMs,
      onOpen: uo,
      onSelect: Pn,
      onAbandon: Yt,
      shouldShowTranscriptPrompt: No,
      onTranscriptPromptShown: cn,
      onTranscriptSelect: tn,
      onShareConsent: so,
      shouldShowFollowupPrompt: nn,
      onFollowupPromptShown: pn,
      onFollowupResolve: Go,
    }),
    An = at(),
    Wr = z(() => {
      if (Pe.onForModels.length === 0) return false;
      if (Pe.onForModels.includes("*")) return true;
      return Pe.onForModels.includes(An);
    }, [Pe.onForModels, An]),
    Kn = z(() => {
      if (Oo !== "closed") return false;
      if (ue) return false;
      if (!To) return false;
      if (ao) return false;
      if (jo) return false;
      if (vo) return false;
      if (j) return false;
      if (a.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY) return false;
      if (zk()) return false;
      if (!Mt("allow_product_feedback")) return false;
      if (Me(process.env.CLAUDE_FORCE_DISPLAY_SURVEY) && !Re.timeLastShown) return true;
      if (!Wr) return false;
      let Tn = nt.now();
      if (Re.timeLastShownAtClock !== null) {
        if (Tn - Re.timeLastShownAtClock < Pe.minTimeBetweenFeedbackMs) return false;
        if (
          Re.submitCountAtLastAppearance !== null &&
          de < Re.submitCountAtLastAppearance + Pe.minUserTurnsBetweenFeedback
        )
          return false;
      } else {
        if (Tn - Pt.current < Pe.minTimeBeforeFeedbackMs) return false;
        if (de < kt.current + Pe.minUserTurnsBeforeFeedback) return false;
      }
      if (lo.current !== de) (lo.current = de), (qt.current = Math.random() <= (st ?? Pe.probability));
      if (!qt.current) return false;
      let tr = ie().feedbackSurveyState;
      if (tr?.lastShownTime) {
        if (Date.now() - tr.lastShownTime < Pe.minTimeBetweenGlobalFeedbackMs) return false;
      }
      return true;
    }, [
      nt,
      Oo,
      ue,
      To,
      ao,
      jo,
      vo,
      j,
      Wr,
      Re.timeLastShown,
      Re.timeLastShownAtClock,
      Re.submitCountAtLastAppearance,
      de,
      Pe.minTimeBetweenFeedbackMs,
      Pe.minTimeBetweenGlobalFeedbackMs,
      Pe.minUserTurnsBetweenFeedback,
      Pe.minTimeBeforeFeedbackMs,
      Pe.minUserTurnsBeforeFeedback,
      Pe.probability,
      st,
    ]);
  return (
    A(() => {
      if (Kn) zo();
    }, [Kn, zo]),
    {
      state: Oo,
      lastResponse: xo,
      appearanceId: dn,
      transcriptBundlePath: Xo,
      abandon: en,
      handleSelect: un,
      handleUndo: Uo,
      handleTranscriptSelect: Rn,
      handleFollowupResolve: mr,
      followupAskConfig: Fe,
      turnInProgress: ue,
      thanksFromFollowup: Pr,
      followupArmActive: Ke,
      submittingShare: Ir,
    }
  );
}

function Tp(S) {
  return Uz(sl(S.getState()));
}

function xA(S, x) {
  return x || S.elicitation.queue.length > 0;
}

F();

function wze(kao) {
  return kao.isLoading;
}

function _ze(Cao) {
  return Cao.submitCount;
}

var cge = 5000,
  uge = "tengu_long_context_survey_threshold",
  dge = "tengu_long_context_survey_question_variant",
  mge = "tengu_long_context_survey_trigger_mode",
  pge = "tengu_long_context_survey_probability",
  M2 = 0.2,
  gge = {
    generic: void 0,
    instruction_following:
      "How well is Claude following the instructions you gave earlier in this conversation? (optional)",
  };

function hge(S) {
  return S === "instruction_following" ? "instruction_following" : "generic";
}

function bge(S) {
  return S === "virtual_context" ? "virtual_context" : "cumulative";
}

function wge(S) {
  let x = Number(S);
  if (S === "" || !Number.isFinite(x)) return M2;
  return Math.min(1, Math.max(0, x));
}

function Pge(S) {
  if (!/^\d+$/.test(S)) return;
  let x = parseInt(S, 10);
  return x > 0 ? x : void 0;
}

function dO(uao) {
  let VT = _(31),
    {
      cumulativeSessionTokens: iO,
      turn: ZQe,
      transcript: dao,
      hasActivePrompt: eze,
      enabled: tze,
      otherSurveyActive: oze,
    } = uao,
    T2 = eze === void 0 ? false : eze,
    Kk = tze === void 0 ? true : tze,
    qT = oze === void 0 ? false : oze,
    _2 = Xe(ZQe, wze),
    sO = Xe(ZQe, _ze),
    PA = Xe(dao),
    [AA, mao] = u(void 0),
    [aO, pao] = u("generic"),
    [lO, fao] = u("cumulative"),
    [uO, gao] = u(M2),
    nze = C(false),
    hao = C(sO),
    P2 = C(null),
    rze;
  if (VT[0] === d)
    (rze = (ize) => {
      let Qk = P2.current;
      s("tengu_long_context_survey_event", {
        event_type: w("appeared"),
        question_variant: c(Qk?.variant ?? "generic"),
        trigger_mode: c(Qk?.triggerMode ?? "cumulative"),
        appearance_id: ve(ize),
        threshold: Qk?.threshold,
        token_count_at_trigger: Qk?.tokenCount,
        cumulative_tokens: Qk?.cumulativeTokens,
        virtual_context_tokens: Qk?.virtualContextTokens,
        survey_probability: Qk?.surveyProbability,
        last_assistant_message_id: ve(Qk?.lastAssistantId),
      }),
        Po("feedback_survey", { event_type: "appeared", appearance_id: ize, survey_type: "long_context" });
    }),
      (VT[0] = rze);
  else rze = VT[0];
  let yao = rze,
    aze;
  if (VT[1] === d)
    (aze = (lze, cze) => {
      let Jk = P2.current;
      s("tengu_long_context_survey_event", {
        event_type: w("responded"),
        question_variant: c(Jk?.variant ?? "generic"),
        trigger_mode: c(Jk?.triggerMode ?? "cumulative"),
        appearance_id: ve(lze),
        response: c(cze),
        threshold: Jk?.threshold,
        token_count_at_trigger: Jk?.tokenCount,
        cumulative_tokens: Jk?.cumulativeTokens,
        virtual_context_tokens: Jk?.virtualContextTokens,
        survey_probability: Jk?.surveyProbability,
        last_assistant_message_id: ve(Jk?.lastAssistantId),
      }),
        Po("feedback_survey", {
          event_type: "responded",
          appearance_id: lze,
          response: cze,
          survey_type: "long_context",
        });
    }),
      (VT[1] = aze);
  else aze = VT[1];
  let Sao = aze,
    pze;
  if (VT[2] === d)
    (pze = (fze) => {
      let Xk = P2.current;
      s("tengu_long_context_survey_event", {
        event_type: w("abandoned"),
        question_variant: c(Xk?.variant ?? "generic"),
        trigger_mode: c(Xk?.triggerMode ?? "cumulative"),
        appearance_id: ve(fze),
        threshold: Xk?.threshold,
        token_count_at_trigger: Xk?.tokenCount,
        cumulative_tokens: Xk?.cumulativeTokens,
        virtual_context_tokens: Xk?.virtualContextTokens,
        survey_probability: Xk?.surveyProbability,
        last_assistant_message_id: ve(Xk?.lastAssistantId),
      }),
        Po("feedback_survey", { event_type: "abandoned", appearance_id: fze, survey_type: "long_context" });
    }),
      (VT[2] = pze);
  else pze = VT[2];
  let bao = pze,
    gze;
  if (VT[3] !== qT)
    (gze = { hideThanksAfterMs: cge, otherSurveyActive: qT, onOpen: yao, onSelect: Sao, onAbandon: bao }),
      (VT[3] = qT),
      (VT[4] = gze);
  else gze = VT[4];
  let {
      state: GT,
      lastResponse: nge,
      appearanceId: rge,
      open: A2,
      abandon: ige,
      handleSelect: sge,
      handleUndo: age,
    } = xm(gze),
    hze,
    yze;
  if (VT[5] !== Kk)
    (hze = () => {
      if (!Kk) {
        return;
      }
      mao(Pge(I(uge, ""))), pao(hge(I(dge, ""))), fao(bge(I(mge, ""))), gao(wge(I(pge, "")));
    }),
      (yze = [Kk]),
      (VT[5] = Kk),
      (VT[6] = hze),
      (VT[7] = yze);
  else (hze = VT[6]), (yze = VT[7]);
  A(hze, yze);
  let Sze, bze;
  if (
    VT[8] !== iO ||
    VT[9] !== Kk ||
    VT[10] !== T2 ||
    VT[11] !== _2 ||
    VT[12] !== PA ||
    VT[13] !== A2 ||
    VT[14] !== qT ||
    VT[15] !== GT ||
    VT[16] !== sO ||
    VT[17] !== uO ||
    VT[18] !== AA ||
    VT[19] !== lO ||
    VT[20] !== aO
  )
    (Sze = () => {
      if (!Kk || nze.current) {
        return;
      }
      if (GT !== "closed" || _2 || T2) {
        return;
      }
      if (AA === void 0) {
        return;
      }
      if (zk()) {
        return;
      }
      if (!Mt("allow_product_feedback")) {
        return;
      }
      if (a.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY) {
        return;
      }
      if (sO <= hao.current) {
        return;
      }
      let kze = LNt(PA) + Ih(PA);
      let Cze = lO === "virtual_context" ? kze : iO;
      if (Cze < AA) {
        return;
      }
      if (qT) {
        return;
      }
      if (
        ((nze.current = true),
        (P2.current = {
          threshold: AA,
          tokenCount: Cze,
          triggerMode: lO,
          cumulativeTokens: iO,
          virtualContextTokens: kze,
          surveyProbability: uO,
          variant: aO,
          lastAssistantId: Wy(PA)?.message?.id,
        }),
        Math.random() < uO)
      )
        A2();
    }),
      (bze = [Kk, GT, _2, sO, T2, qT, AA, aO, lO, uO, iO, PA, A2]),
      (VT[8] = iO),
      (VT[9] = Kk),
      (VT[10] = T2),
      (VT[11] = _2),
      (VT[12] = PA),
      (VT[13] = A2),
      (VT[14] = qT),
      (VT[15] = GT),
      (VT[16] = sO),
      (VT[17] = uO),
      (VT[18] = AA),
      (VT[19] = lO),
      (VT[20] = aO),
      (VT[21] = Sze),
      (VT[22] = bze);
  else (Sze = VT[21]), (bze = VT[22]);
  A(Sze, bze);
  const lge = gge[aO];
  let vze;
  if (
    VT[23] !== ige ||
    VT[24] !== rge ||
    VT[25] !== sge ||
    VT[26] !== age ||
    VT[27] !== nge ||
    VT[28] !== GT ||
    VT[29] !== lge
  )
    (vze = {
      state: GT,
      lastResponse: nge,
      appearanceId: rge,
      question: lge,
      abandon: ige,
      handleSelect: sge,
      handleUndo: age,
    }),
      (VT[23] = ige),
      (VT[24] = rge),
      (VT[25] = sge),
      (VT[26] = age),
      (VT[27] = nge),
      (VT[28] = GT),
      (VT[29] = lge),
      (VT[30] = vze);
  else vze = VT[30];
  return vze;
}

F();

function mO() {
  return false;
}

var xze = 5000,
  Pze = 60000,
  Aze = "tengu_dunwich_bell",
  MA = "tengu_memory_survey_event",
  Mze = "tengu_velvet_moth",
  fO = "memory_survey",
  Age = 250,
  Ige = { bad: 1, fine: 2, good: 3 };

function Ize(S) {
  return S in Ige;
}

function Eze() {
  return I(Mze, 0.2);
}

function Dze() {
  return false;
}

function Nze() {
  return I(Aze, false) && ta() && !zk() && Mt("allow_product_feedback") && !a.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY;
}

function Lze(S) {
  let x = S.message.content;
  if (!Array.isArray(x)) return [];
  return x.filter((P) => typeof P === "object" && P !== null && P.type === "text").flatMap((P) => lQn(P.text));
}

function E2(S, x, P = false, { enabled: j = true, otherSurveyActive: H = false } = {}) {
  let { storageV5: Z, credentials: re } = ge(),
    ue = oqe.of(ct().host),
    de = At(),
    pe = C(new Set()),
    Re = C(null),
    be = C(S);
  be.current = S;
  let [Pe, Oe] = u(null),
    Ie = C(null),
    He = B((Gt, vo, qt) => {
      s(MA, { event_type: c(Gt), appearance_id: ve(vo), response: ke(qt) }),
        Po("feedback_survey", { event_type: Gt, appearance_id: vo, response: qt, survey_type: "memory" });
    }, []),
    Fe = B((Gt) => He("appeared", Gt), [He]),
    Ve = B((Gt) => He("timeout", Gt), [He]),
    Ke = B((Gt) => He("abandoned", Gt), [He]),
    ot = B(
      (Gt, vo) => {
        He("responded", Gt, vo);
        let qt = Ie.current;
        if (!Ize(vo) || !qt || qt.filenames.length === 0) return;
        pue(ue, qt.filenames, Ige[vo], Z)
          .then((lo) => {
            if (lo.length === 0) return;
            de((To) =>
              TP(
                To,
                lo.map((ao) => Rze(ao)),
                vo,
              ),
            );
          })
          .catch(h);
      },
      [He, ue, de, Z],
    ),
    st = B((Gt, vo) => {
      s(MA, { event_type: w("transcript_prompt_appeared"), appearance_id: ve(Gt), trigger: c(fO), response: ke(vo) }),
        Po("feedback_survey", {
          event_type: "transcript_prompt_appeared",
          appearance_id: Gt,
          survey_type: "memory",
          response: vo,
        });
    }, []),
    nt = B(
      async (Gt, vo, qt) => {
        if (
          (s(MA, { event_type: c(`transcript_share_${vo}`), appearance_id: ve(Gt), trigger: c(fO), response: ke(qt) }),
          vo === "dont_ask_again")
        )
          await Ae((lo) => ({ ...lo, transcriptShareDismissed: true }), Z);
        if (vo === "yes") {
          let lo = await nO(be.current, fO, Gt, Z, re);
          return (
            s(MA, {
              event_type: w(lo.success ? "transcript_share_submitted" : "transcript_share_failed"),
              appearance_id: ve(Gt),
              trigger: c(fO),
              error_code: lo.errorCode,
              response: ke(qt),
            }),
            lo.success
          );
        }
        return false;
      },
      [Z, re],
    ),
    {
      state: Pt,
      lastResponse: kt,
      appearanceId: Ht,
      open: yt,
      abandon: lt,
      handleSelect: Rt,
      handleUndo: to,
      handleTranscriptSelect: so,
    } = xm({
      otherSurveyActive: H,
      hideThanksAfterMs: xze,
      autoDismissAfterMs: Pze,
      onOpen: Fe,
      onSelect: ot,
      onAutoDismiss: Ve,
      onAbandon: Ke,
      shouldShowTranscriptPrompt: mO,
      onTranscriptPromptShown: st,
      onTranscriptSelect: nt,
    }),
    jt = z(() => Wy(S), [S]);
  return (
    A(() => {
      if (S.length === 0) {
        pe.current.clear(), (Re.current = null), Oe(null);
        return;
      }
      if (Re.current !== S[0].uuid) {
        (Re.current = S[0].uuid), pe.current.clear();
        for (let ao of S) if (ao.type === "assistant") pe.current.add(ao.uuid);
        return;
      }
      if (Pt !== "closed" || x || P) return;
      if (H) return;
      if (!j || !Nze()) return;
      if (!jt || pe.current.has(jt.uuid)) return;
      let Gt = Lze(jt);
      if (Gt.length === 0) return;
      pe.current.add(jt.uuid);
      let vo = Gt.filter((ao) => !ao.incomplete && ao.sentence.length <= Age && evt(ao.sentence, jL) === ao.sentence),
        qt = Gt.length - vo.length;
      if (qt > 0)
        s(MA, {
          event_type: w("citation_ineligible"),
          dropped_citation_count: qt,
          dropped_too_long_count: Q(Gt, (ao) => ao.sentence.length > Age),
          eligible_citation_count: vo.length,
        });
      let [lo] = vo;
      if (lo === void 0) return;
      if (!Dze() && Math.random() >= Eze()) return;
      let To = { sentence: lo.sentence, filenames: te(lo.filenames) };
      (Ie.current = To), Oe(To), yt();
    }, [j, H, Pt, x, P, jt, S, yt]),
    {
      state: Pt,
      lastResponse: kt,
      appearanceId: Ht,
      citation: Pe,
      abandon: lt,
      handleSelect: Rt,
      handleUndo: to,
      handleTranscriptSelect: so,
    }
  );
}

F();

var Fze = { enabled: false },
  Bze = "tengu_plugin_ratings_store_config",
  Uze = { auth: "teleport-org", isBackground: true, validateStatus: (S) => S < 500 },
  jze = 8;

function Dge(S, x, P, j) {
  return Fge(S, x, async () => {
    let H = await Oge(P, j);
    if (!H) return;
    await gO(
      "appearance",
      "post",
      "/api/oauth/organizations/:orgUUID/plugin_ratings/appearances",
      { marketplace_name: H.marketplaceName, plugin_name: H.pluginName, client_surface: "cli", appearance_id: x },
      j,
    );
  });
}

function Lge(S, x, P, j, H) {
  return Fge(S, x, async (Z) => {
    let re = await Oge(P, H);
    if (!re) return;
    switch (j) {
      case "bad":
      case "fine":
      case "good": {
        if (
          await gO(
            "submit",
            "post",
            "/api/oauth/organizations/:orgUUID/plugin_ratings",
            {
              marketplace_name: re.marketplaceName,
              plugin_name: re.pluginName,
              rating: j,
              client_surface: "cli",
              client_version: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.252",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-08-31T16:02:57Z",
                GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "darwin",
              }.VERSION,
              appearance_id: x,
            },
            H,
          )
        )
          Z.ratedInStore = true;
        return;
      }
      case "dismissed":
      case "not_sure": {
        if (
          (await gO(
            "outcome",
            "post",
            "/api/oauth/organizations/:orgUUID/plugin_ratings/appearances/outcome",
            {
              marketplace_name: re.marketplaceName,
              plugin_name: re.pluginName,
              outcome: j === "dismissed" ? "dismissed" : "unsure",
            },
            H,
          ),
          Z.ratedInStore)
        ) {
          if (
            await gO(
              "withdraw",
              "delete",
              `/api/oauth/organizations/:orgUUID/plugin_ratings?marketplace_name=${encodeURIComponent(re.marketplaceName)}&plugin_name=${encodeURIComponent(re.pluginName)}`,
              void 0,
              H,
            )
          )
            Z.ratedInStore = false;
        }
        return;
      }
    }
  });
}

function Hze() {
  if (!ZS() && jd()) return false;
  return Tt();
}

async function $ze(S) {
  let x = a.CLAUDE_CODE_ORGANIZATION_UUID,
    P = On()?.organizationUuid,
    j = await IT(S);
  if (j === "store") return !x || x === P;
  if (j === "env" || j === "fd") return Boolean(x);
  return false;
}

async function Oge(S, x) {
  if (a.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY) return null;
  if (zk()) return null;
  if (zh()) return null;
  if (!Mt("allow_product_feedback")) return null;
  if (Ct()) return null;
  if (Ne() !== "firstParty") return null;
  if (S.marketplace === void 0 || uc(S.marketplace)) return null;
  if (!Hze()) {
    if (Yl()) g("cli_plugin_rating_store", "skip_auth_org_mismatch");
    return null;
  }
  if (!(await $ze(x))) return g("cli_plugin_rating_store", "skip_org_unpinned"), null;
  if ((await pO(Bze, Fze)).enabled !== true) return null;
  return { marketplaceName: S.marketplace, pluginName: S.name };
}

function Fge(S, x, P) {
  let j = S.get(x);
  if (!j) {
    if (((j = { chain: Promise.resolve(), ratedInStore: false }), S.set(x, j), S.size > jze)) {
      for (let Z of S.keys())
        if (Z !== x) {
          S.delete(Z);
          break;
        }
    }
  }
  let H = j;
  return (
    (j.chain = j.chain.then(() =>
      P(H).catch((Z) => {
        h(Z), p("cli_plugin_rating_store", "chain_exception");
      }),
    )),
    j.chain
  );
}

async function gO(S, x, P, j, H) {
  let Z = { ...Uze, credentials: H },
    re;
  try {
    re = x === "post" ? await bt.post(P, j, Z) : await bt.delete(P, j, Z);
  } catch (ue) {
    let { kind: de, status: pe } = os(ue),
      Re =
        pe !== void 0
          ? `http_${pe}`
          : de === "other"
            ? "exception"
            : de === "http"
              ? (ue.code?.toLowerCase() ?? "no_response")
              : de;
    return (
      p("cli_plugin_rating_store", `${S}_${Re}`), n(`plugin rating store ${S} failed: ${Re}`, { level: "warn" }), false
    );
  }
  if (!re.ok) {
    let ue = re.reason === "no-auth" ? "auth_unavailable" : re.reason.replaceAll("-", "_");
    return g("cli_plugin_rating_store", `${S}_${ue}`), false;
  }
  if (re.status >= 200 && re.status < 300) return y("cli_plugin_rating_store"), true;
  if ([401, 403, 404, 409].includes(re.status))
    return (
      g("cli_plugin_rating_store", `${S}_http_${re.status}`),
      n(`plugin rating store ${S} skipped: http_${re.status}`),
      false
    );
  return (
    p("cli_plugin_rating_store", `${S}_http_${re.status}`),
    n(`plugin rating store ${S} failed: http_${re.status}`, { level: "warn" }),
    false
  );
}

var Wze = 3000,
  N2 = {
    probability: 0,
    minTimeBetweenGlobalMs: 86400000,
    minTimeBetweenPerPluginMs: 604800000,
    minActivityAgeMs: 21600000,
    enabledTriggers: ["skill", "subagent", "command", "mcp"],
    enabledScopes: void 0,
  },
  Bge = 32,
  qze = 3600000;

function jge(S, x, P = N2.enabledTriggers) {
  let j = (Z) => P.includes(Z),
    H = null;
  for (let Z of x) {
    if (__t(Z.marketplace)) continue;
    let re = nk(Z.name, Z.marketplace),
      ue = (H ?? S)[re],
      de = ue != null && typeof ue.ts === "number" && typeof ue.trigger === "string";
    if (de && Z.ts - ue.ts < qze) {
      if (j(Z.trigger) && !j(ue.trigger)) (H = H ?? { ...S }), (H[re] = { ts: ue.ts, trigger: Z.trigger });
      continue;
    }
    let pe = de && j(ue.trigger) && !j(Z.trigger);
    (H = H ?? { ...S }), (H[re] = { ts: Z.ts, trigger: pe ? ue.trigger : Z.trigger });
  }
  if (H && Object.keys(H).length > Bge) {
    let Z = Object.entries(H)
      .sort((re, ue) => (ue[1]?.ts ?? 0) - (re[1]?.ts ?? 0))
      .slice(0, Bge);
    H = Object.fromEntries(Z);
  }
  return H ?? S;
}

function Vze(S, x, P, j) {
  let H = Object.entries(S).filter(
    ([, ue]) =>
      ue !== null &&
      typeof ue === "object" &&
      typeof ue.ts === "number" &&
      typeof ue.trigger === "string" &&
      j - ue.ts >= x,
  );
  if (H.length === 0) return [];
  let Z = new Map();
  for (let ue of P()) {
    let de = Vt(ue);
    Z.set(nk(de.name, de.marketplace), de);
  }
  let re = [];
  for (let [ue, de] of H) {
    let pe = Z.get(ue);
    if (!pe || !b9n(de.trigger)) continue;
    re.push({ name: pe.name, marketplace: pe.marketplace, trigger: de.trigger, ts: de.ts });
  }
  return re.sort((ue, de) => de.ts - ue.ts);
}

function D2(S, x, P, j) {
  s("tengu_plugin_feedback_survey_event", {
    event_type: c(S),
    appearance_id: ve(x),
    trigger_type: c(P.trigger),
    ...(j && { response: c(j) }),
    ...z1(P.name, P.marketplace),
  });
  let H = q1(W1(P.name, P.marketplace, null)) || Tl();
  Po("feedback_survey", {
    event_type: S,
    appearance_id: x,
    survey_type: "plugin",
    trigger_type: P.trigger,
    ...(j && { response: j }),
    plugin_id_hash: nk(P.name, P.marketplace),
    "plugin.name": H ? P.name : Yw,
  });
}

function Gze(S, x, P, j, H) {
  let Z = new Set(x.enabledTriggers),
    re = x.enabledScopes && x.enabledScopes.length > 0 ? new Set(x.enabledScopes) : null,
    ue = null,
    de = new Set();
  for (let pe = S.length - 1; pe >= 0; pe--) {
    let Re = S[pe];
    if (!Z.has(Re.trigger)) continue;
    if (re && !re.has(W1(Re.name, Re.marketplace, j))) continue;
    let be = nk(Re.name, Re.marketplace);
    if (de.has(be)) continue;
    de.add(be);
    let Pe = P[be] ?? 0;
    if (H - Pe < x.minTimeBetweenPerPluginMs) continue;
    if (ue === null || Pe < ue.lastShown)
      ue = {
        subject: {
          name: Re.name,
          marketplace: Re.marketplace,
          trigger: Re.trigger,
          features: w9n(Re.name, Re.marketplace),
        },
        lastShown: Pe,
      };
  }
  return ue?.subject ?? null;
}

function L2({ turn: S, hasActivePrompt: x = false, enabled: P = true, otherSurveyActive: j = false }) {
  let { storageV5: H, credentials: Z } = ge(),
    re = Xe(S, (yt) => yt.isLoading),
    ue = Gk("tengu_plugin_feedback_survey_config", N2),
    de = z(() => ({ ...N2, ...ue }), [ue]),
    [pe, Re] = u(null),
    be = C(null),
    Pe = C(new Map()),
    Oe = C(Date.now()),
    Ie = C(re);
  A(() => {
    vsn(Number.POSITIVE_INFINITY);
  }, []);
  let He = B(
      (yt) => {
        let lt = be.current;
        if (!lt) return;
        let Rt = Date.now(),
          to = nk(lt.name, lt.marketplace);
        Ae((so) => {
          let { [to]: jt, ...Gt } = so.pluginSurveyState?.pending ?? {};
          return {
            ...so,
            pluginSurveyState: {
              ...so.pluginSurveyState,
              lastShownTime: Rt,
              perPlugin: { ...so.pluginSurveyState?.perPlugin, [to]: Rt },
              pending: Gt,
            },
          };
        }, H),
          D2("appeared", yt, lt),
          Dge(Pe.current, yt, lt, Z);
      },
      [H, Z],
    ),
    Fe = B(
      (yt, lt) => {
        let Rt = be.current;
        if (!Rt) return;
        D2("responded", yt, Rt, lt), Lge(Pe.current, yt, Rt, lt, Z);
      },
      [Z],
    ),
    Ve = B((yt) => {
      let lt = be.current;
      if (!lt) return;
      D2("abandoned", yt, lt);
    }, []),
    {
      state: Ke,
      lastResponse: ot,
      appearanceId: st,
      open: nt,
      abandon: Pt,
      handleSelect: kt,
      handleUndo: Ht,
    } = xm({ hideThanksAfterMs: Wze, otherSurveyActive: j, onOpen: He, onSelect: Fe, onAbandon: Ve });
  return (
    A(() => {
      let yt = Ie.current;
      if (((Ie.current = re), !yt || re)) return;
      if (x || Ke !== "closed") return;
      if (j) return;
      if (!P || de.probability <= 0) return;
      if (a.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY) return;
      if (zk()) return;
      if (!Mt("allow_product_feedback")) return;
      let lt = Date.now(),
        Rt = ie().pluginSurveyState,
        to = vsn(Oe.current);
      Oe.current = lt;
      let so = Rt?.pending ?? {},
        jt = jge(so, to, de.enabledTriggers);
      if (jt !== so)
        Ae(
          (qt) => ({
            ...qt,
            pluginSurveyState: {
              ...qt.pluginSurveyState,
              pending: jge(qt.pluginSurveyState?.pending ?? {}, to, de.enabledTriggers),
            },
          }),
          H,
        );
      if (Rt?.lastShownTime && lt - Rt.lastShownTime < de.minTimeBetweenGlobalMs) return;
      let Gt = Vze(jt, de.minActivityAgeMs, () => Object.keys(nm().plugins), lt);
      if (Gt.length === 0) return;
      let vo = Gze(Gt, de, Rt?.perPlugin ?? {}, xd(), lt);
      if (!vo) return;
      if (Math.random() >= de.probability) return;
      (be.current = vo), Re(vo), nt();
    }, [P, re, x, Ke, de, nt, j, H]),
    { state: Ke, subject: pe, lastResponse: ot, appearanceId: st, abandon: Pt, handleSelect: kt, handleUndo: Ht }
  );
}

F();

function v2e(h2e) {
  s("tengu_post_compact_survey_event", { event_type: w("appeared"), appearance_id: ve(h2e) }),
    Po("feedback_survey", { event_type: "appeared", appearance_id: h2e, survey_type: "post_compact" });
}

function w2e(y2e, k2e) {
  s("tengu_post_compact_survey_event", { event_type: w("responded"), appearance_id: ve(y2e), response: c(k2e) }),
    Po("feedback_survey", { event_type: "responded", appearance_id: y2e, response: k2e, survey_type: "post_compact" });
}

function T2e(C2e) {
  s("tengu_post_compact_survey_event", { event_type: w("abandoned"), appearance_id: ve(C2e) }),
    Po("feedback_survey", { event_type: "abandoned", appearance_id: C2e, survey_type: "post_compact" });
}

function _2e(rco) {
  return Ou(rco);
}

function R2e(ico) {
  return ico.uuid;
}

var ehe = 5000,
  the = "tengu_post_compact_survey",
  ohe = 0.2;

function nhe(S, x) {
  let P = S.findIndex((j) => j.uuid === x);
  if (P === -1) return false;
  for (let j = P + 1; j < S.length; j++) {
    let H = S[j];
    if (H && (H.type === "user" || H.type === "assistant")) return true;
  }
  return false;
}

function SO(KT, O2, Kze, F2) {
  let QT = _(26),
    B2 = Kze === void 0 ? false : Kze,
    Qze;
  if (QT[0] !== F2) (Qze = F2 === void 0 ? {} : F2), (QT[0] = F2), (QT[1] = Qze);
  else Qze = QT[1];
  let { enabled: zze } = Qze,
    Zk = zze === void 0 ? true : zze,
    [U2, Zlo] = u(null),
    Yze;
  if (QT[2] === d) (Yze = new Set()), (QT[2] = Yze);
  else Yze = QT[2];
  let Jze = C(Yze),
    j2 = C(null),
    eco = v2e,
    tco = w2e,
    oco = T2e,
    Xze;
  if (QT[3] === d) (Xze = { hideThanksAfterMs: ehe, onOpen: eco, onSelect: tco, onAbandon: oco }), (QT[3] = Xze);
  else Xze = QT[3];
  let {
      state: YT,
      lastResponse: Vge,
      appearanceId: Gge,
      open: H2,
      abandon: zge,
      handleSelect: Xge,
      handleUndo: Zge,
    } = xm(Xze),
    Zze,
    i2e;
  if (QT[4] !== Zk)
    (Zze = () => {
      if (!Zk) {
        return;
      }
      Zlo(I(the, false));
    }),
      (i2e = [Zk]),
      (QT[4] = Zk),
      (QT[5] = Zze),
      (QT[6] = i2e);
  else (Zze = QT[5]), (i2e = QT[6]);
  A(Zze, i2e);
  let l2e;
  if (QT[7] !== KT) (l2e = new Set(KT.filter(_2e).map(R2e))), (QT[7] = KT), (QT[8] = l2e);
  else l2e = QT[8];
  let yO = l2e,
    c2e,
    u2e;
  if (
    QT[9] !== yO ||
    QT[10] !== Zk ||
    QT[11] !== U2 ||
    QT[12] !== B2 ||
    QT[13] !== O2 ||
    QT[14] !== KT ||
    QT[15] !== H2 ||
    QT[16] !== YT
  )
    (u2e = () => {
      if (!Zk) {
        return;
      }
      if (YT !== "closed" || O2) {
        return;
      }
      if (B2) {
        return;
      }
      if (U2 !== true) {
        return;
      }
      if (zk()) {
        return;
      }
      if (!Mt("allow_product_feedback")) {
        return;
      }
      if (a.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY) {
        return;
      }
      if (j2.current !== null) {
        if (nhe(KT, j2.current)) {
          if (((j2.current = null), Math.random() < ohe)) H2();
          return;
        }
      }
      let d2e = Array.from(yO).filter((nco) => !Jze.current.has(nco));
      if (d2e.length > 0) (Jze.current = new Set(yO)), (j2.current = d2e.at(-1));
    }),
      (c2e = [Zk, yO, YT, O2, B2, U2, KT, H2]),
      (QT[9] = yO),
      (QT[10] = Zk),
      (QT[11] = U2),
      (QT[12] = B2),
      (QT[13] = O2),
      (QT[14] = KT),
      (QT[15] = H2),
      (QT[16] = YT),
      (QT[17] = c2e),
      (QT[18] = u2e);
  else (c2e = QT[17]), (u2e = QT[18]);
  A(u2e, c2e);
  let g2e;
  if (QT[19] !== zge || QT[20] !== Gge || QT[21] !== Xge || QT[22] !== Zge || QT[23] !== Vge || QT[24] !== YT)
    (g2e = { state: YT, lastResponse: Vge, appearanceId: Gge, abandon: zge, handleSelect: Xge, handleUndo: Zge }),
      (QT[19] = zge),
      (QT[20] = Gge),
      (QT[21] = Xge),
      (QT[22] = Zge),
      (QT[23] = Vge),
      (QT[24] = YT),
      (QT[25] = g2e);
  else g2e = QT[25];
  return g2e;
}

F();

function $2(S, x) {
  let P = At(),
    j = C(null),
    H = C(void 0),
    Z = W((pe) => pe.sessionMemories === void 0),
    re = B((pe) => BWn(x, pe), [x]),
    ue = Lt(re, () => Zin(x)),
    de = B(
      (pe) => {
        if (pe.length === 0) return;
        P((Re) => {
          let be = Sue(Re.sessionMemories ?? [], pe);
          if (be === Re.sessionMemories) return Re;
          return (H.current = be), { ...Re, sessionMemories: be };
        });
      },
      [P],
    );
  A(() => {
    if (!tde()) return;
    let pe = (j.current ??= new Set());
    if (Z && H.current !== void 0) pe.clear(), (H.current = void 0);
    let Re = S.filter((be) => {
      if (pe.has(be.uuid)) return false;
      return pe.add(be.uuid), true;
    });
    de(gue(Re));
  }, [S, Z, de]),
    A(() => {
      let pe = true;
      return (
        ue?.then((Re) => {
          if (pe && Zin(x) === ue) de(yue(Re));
        }),
        () => {
          pe = false;
        }
      );
    }, [ue, Z, de, x]);
}

function V2e(Dco) {
  return Dco.isLoading;
}

function G2e(Nco) {
  return Nco.elicitation;
}

function K2e(Bco) {
  return Bco.isLoading;
}

var H2e = { state: "closed", transcriptBundlePath: null, handleTranscriptSelect: () => {} },
  The = () => H2e,
  $2e = { postCompact: true, longContext: true, plugin: true, memory: true, feedback: true, frustration: true },
  W2e = Object.keys($2e);

class vO {
  #e = Ue();
  #t = null;
  subscribe = (S) => this.#e.subscribe(S);
  getSnapshot = () => this.#t;
  publish(S) {
    let x = this.#t;
    if (x !== null && W2e.every((P) => q2e(x[P], S[P]))) return;
    (this.#t = S), this.#e.emit();
  }
}

function q2e(S, x) {
  let P = Object.keys(S);
  return P.length === Object.keys(x).length && P.every((j) => Object.is(S[j], x[j]));
}

function TO(Ico) {
  let sh = _(42),
    { turn: Am, transcript: Im, isRemoteSession: W2, slot: rhe } = Ico,
    Eco = ct(),
    she = Xe(Im),
    x2e = Xe(Am, V2e),
    ahe = FK(),
    lhe = W(G2e),
    P2e;
  if (sh[0] !== lhe || sh[1] !== ahe)
    (P2e = xA({ elicitation: lhe }, ahe)), (sh[0] = lhe), (sh[1] = ahe), (sh[2] = P2e);
  else P2e = sh[2];
  let Uf = P2e,
    A2e;
  if (sh[3] !== Im) (A2e = () => new tO(Im)), (sh[3] = Im), (sh[4] = A2e);
  else A2e = sh[4];
  let [bO] = u(A2e),
    che = Xe(bO),
    M2e,
    I2e;
  if (sh[5] !== bO) (M2e = () => () => bO.dispose()), (I2e = [bO]), (sh[5] = bO), (sh[6] = M2e), (sh[7] = I2e);
  else (M2e = sh[6]), (I2e = sh[7]);
  A(M2e, I2e);
  const uhe = !W2;
  let E2e;
  if (sh[8] !== uhe) (E2e = { enabled: uhe }), (sh[8] = uhe), (sh[9] = E2e);
  else E2e = sh[9];
  let tC = SO(she, x2e, Uf, E2e);
  const mhe = !W2,
    phe = tC.state !== "closed";
  let D2e;
  if (sh[10] !== che || sh[11] !== Uf || sh[12] !== mhe || sh[13] !== phe || sh[14] !== Im || sh[15] !== Am)
    (D2e = {
      cumulativeSessionTokens: che,
      turn: Am,
      transcript: Im,
      hasActivePrompt: Uf,
      enabled: mhe,
      otherSurveyActive: phe,
    }),
      (sh[10] = che),
      (sh[11] = Uf),
      (sh[12] = mhe),
      (sh[13] = phe),
      (sh[14] = Im),
      (sh[15] = Am),
      (sh[16] = D2e);
  else D2e = sh[16];
  let JT = dO(D2e);
  const fhe = !W2,
    hhe = tC.state !== "closed" || JT.state !== "closed";
  let N2e;
  if (sh[17] !== Uf || sh[18] !== fhe || sh[19] !== hhe || sh[20] !== Am)
    (N2e = { turn: Am, hasActivePrompt: Uf, enabled: fhe, otherSurveyActive: hhe }),
      (sh[17] = Uf),
      (sh[18] = fhe),
      (sh[19] = hhe),
      (sh[20] = Am),
      (sh[21] = N2e);
  else N2e = sh[21];
  let IA = L2(N2e);
  const She = !W2,
    bhe = tC.state !== "closed" || JT.state !== "closed" || IA.state !== "closed";
  let L2e;
  if (sh[22] !== She || sh[23] !== bhe)
    (L2e = { enabled: She, otherSurveyActive: bhe }), (sh[22] = She), (sh[23] = bhe), (sh[24] = L2e);
  else L2e = sh[24];
  let kO = E2(she, x2e, Uf, L2e);
  $2(she, Eco);
  const khe = tC.state !== "closed" || JT.state !== "closed" || IA.state !== "closed" || kO.state !== "closed";
  let O2e;
  if (sh[25] !== khe || sh[26] !== Im || sh[27] !== Am)
    (O2e = { turn: Am, transcript: Im, otherSurveyActive: khe }),
      (sh[25] = khe),
      (sh[26] = Im),
      (sh[27] = Am),
      (sh[28] = O2e);
  else O2e = sh[28];
  let q2 = w2(O2e);
  const Che =
    q2.state !== "closed" ||
    tC.state !== "closed" ||
    JT.state !== "closed" ||
    IA.state !== "closed" ||
    kO.state !== "closed";
  let F2e;
  if (sh[29] !== Uf || sh[30] !== Che || sh[31] !== Im || sh[32] !== Am)
    (F2e = { turn: Am, transcript: Im, hasActivePrompt: Uf, otherSurveyActive: Che }),
      (sh[29] = Uf),
      (sh[30] = Che),
      (sh[31] = Im),
      (sh[32] = Am),
      (sh[33] = F2e);
  else F2e = sh[33];
  let vhe = The(F2e),
    B2e;
  if (
    sh[34] !== q2 ||
    sh[35] !== vhe ||
    sh[36] !== JT ||
    sh[37] !== kO ||
    sh[38] !== IA ||
    sh[39] !== tC ||
    sh[40] !== rhe
  )
    (B2e = () => {
      rhe.publish({ postCompact: tC, longContext: JT, plugin: IA, memory: kO, feedback: q2, frustration: vhe });
    }),
      (sh[34] = q2),
      (sh[35] = vhe),
      (sh[36] = JT),
      (sh[37] = kO),
      (sh[38] = IA),
      (sh[39] = tC),
      (sh[40] = rhe),
      (sh[41] = B2e);
  else B2e = sh[41];
  return qn(B2e), null;
}

function _O(Lco) {
  let CO = _(17),
    { slot: Oco, turn: Fco, draft: EA, submit: DA } = Lco,
    ku = Xe(Oco),
    whe = Xe(Fco, K2e),
    U2e;
  if (CO[0] !== ku)
    (U2e =
      ku !== null &&
      $T({
        postCompact: ku.postCompact.state,
        longContext: ku.longContext.state,
        plugin: ku.plugin.state,
        memory: ku.memory.state,
        feedback: ku.feedback.state,
        frustration: ku.frustration.state,
      }) !== null),
      (CO[0] = ku),
      (CO[1] = U2e);
  else U2e = CO[1];
  let NA = U2e,
    V2;
  if (CO[2] !== EA.replaceValue || CO[3] !== DA.submitSurveyFollowUp || CO[4] !== NA || CO[5] !== ku)
    (V2 =
      NA &&
      e(eO, {
        postCompactSurvey: ku.postCompact,
        longContextSurvey: ku.longContext,
        pluginSurvey: ku.plugin,
        memorySurvey: ku.memory,
        feedbackSurvey: ku.feedback,
        frustrationDetection: ku.frustration,
        setInputValue: EA.replaceValue,
        handleSurveyRequestFeedback: DA.submitSurveyFollowUp,
      })),
      (CO[2] = EA.replaceValue),
      (CO[3] = DA.submitSurveyFollowUp),
      (CO[4] = NA),
      (CO[5] = ku),
      (CO[6] = V2);
  else V2 = CO[6];
  let G2;
  if (CO[7] !== DA) (G2 = () => DA.submitSurveyFollowUp("/feedback")), (CO[7] = DA), (CO[8] = G2);
  else G2 = CO[8];
  let K2;
  if (CO[9] !== EA.replaceValue || CO[10] !== whe || CO[11] !== NA || CO[12] !== G2)
    (K2 = e(Bz, { isLoading: whe, surveyActive: NA, setInputValue: EA.replaceValue, onOpenFeedback: G2 })),
      (CO[9] = EA.replaceValue),
      (CO[10] = whe),
      (CO[11] = NA),
      (CO[12] = G2),
      (CO[13] = K2);
  else K2 = CO[13];
  let j2e;
  if (CO[14] !== V2 || CO[15] !== K2)
    (j2e = r(U, { children: [V2, K2] })), (CO[14] = V2), (CO[15] = K2), (CO[16] = j2e);
  else j2e = CO[16];
  return j2e;
}

function Y2e(zco) {
  return zco.isLoading;
}

function xO(Qco) {
  let Q2e = _(14),
    {
      turn: RO,
      transcript: Rhe,
      scope: xhe,
      draft: Q2,
      chrome: Ahe,
      gesture: Ihe,
      submitController: z2,
      surveySlot: Ehe,
      visible: Nhe,
      onBackgroundSession: Fhe,
    } = Qco,
    Bhe = Xe(RO, Y2e),
    Y2;
  if (
    Q2e[0] !== Ahe ||
    Q2e[1] !== Q2 ||
    Q2e[2] !== Ihe ||
    Q2e[3] !== Bhe ||
    Q2e[4] !== Fhe ||
    Q2e[5] !== xhe ||
    Q2e[6] !== z2 ||
    Q2e[7] !== Ehe ||
    Q2e[8] !== Rhe ||
    Q2e[9] !== RO ||
    Q2e[10] !== Nhe
  )
    (Y2 =
      Nhe &&
      r(U, {
        children: [
          e(_O, { slot: Ehe, turn: RO, draft: Q2, submit: z2 }),
          e(Nz, { turn: RO, transcript: Rhe, scope: xhe, draft: Q2, chrome: Ahe, gesture: Ihe, submit: z2 }),
          e(LL, { onBackgroundSession: Fhe, isLoading: Bhe }),
        ],
      })),
      (Q2e[0] = Ahe),
      (Q2e[1] = Q2),
      (Q2e[2] = Ihe),
      (Q2e[3] = Bhe),
      (Q2e[4] = Fhe),
      (Q2e[5] = xhe),
      (Q2e[6] = z2),
      (Q2e[7] = Ehe),
      (Q2e[8] = Rhe),
      (Q2e[9] = RO),
      (Q2e[10] = Nhe),
      (Q2e[11] = Y2);
  else Y2 = Q2e[11];
  let z2e;
  if (Q2e[12] !== Y2) (z2e = r(U, { children: [Y2, false] })), (Q2e[12] = Y2), (Q2e[13] = z2e);
  else z2e = Q2e[13];
  return z2e;
}

F();

F();

var J2e = 200;

function ah(S) {
  return yl(co(S).replace(/\s+/g, " ").trim(), J2e);
}

var X2e = new Set(["failed", "cancelled", "killed", "error"]);

function J2(S) {
  let x = [];
  for (let P of Object.values(S)) {
    let j = X2e.has(P.status);
    switch (P.type) {
      case "local_agent":
      case "in_process_teammate":
        x.push({
          id: P.id,
          kind: "agent",
          label: ah(P.description),
          startedAt: P.startTime,
          doneAt: P.endTime ?? (ndt(P) ? 0 : void 0),
          failed: j || void 0,
        });
        break;
      case "local_workflow": {
        let H = P.workflowProgress.filter(tYe);
        if (H.length === 0) {
          x.push({
            id: P.id,
            kind: "workflow",
            label: ah(P.title ?? P.workflowName ?? P.description),
            startedAt: P.startTime,
            doneAt: P.endTime,
            failed: j || void 0,
          });
          break;
        }
        for (let Z of H)
          x.push({
            id: Z.agentId ?? `${P.id}:${Z.index}`,
            kind: "workflow",
            label: ah(Z.label),
            group: Z.phaseTitle,
            startedAt: Z.startedAt ?? Z.queuedAt ?? P.startTime,
            doneAt:
              Z.state === "done" || Z.state === "error"
                ? (Z.lastProgressAt ??
                  (Z.startedAt !== void 0 && Z.durationMs !== void 0 ? Z.startedAt + Z.durationMs : void 0))
                : void 0,
            failed: Z.state === "error" || void 0,
          });
        break;
      }
      case "local_bash":
        x.push({
          id: P.id,
          kind: P.kind === "monitor" ? "monitor" : "shell",
          label: ah(P.kind === "monitor" ? P.description : P.command),
          startedAt: P.startTime,
          doneAt: P.endTime,
          failed: j || (P.result !== void 0 && P.result.code !== 0) || void 0,
        });
        break;
      case "monitor_mcp":
        x.push({
          id: P.id,
          kind: "monitor",
          label: ah(P.description || `${P.server} \xB7 ${P.tool}`),
          startedAt: P.startTime,
          doneAt: P.endTime,
          failed: j || void 0,
        });
        break;
      case "monitor_ws":
        if (P.ambient) break;
        x.push({
          id: P.id,
          kind: "monitor",
          label: ah(P.description || P.url),
          startedAt: P.startTime,
          doneAt: P.endTime,
          failed: j || void 0,
        });
        break;
      case "mcp_task":
        x.push({
          id: P.id,
          kind: "mcp",
          label: ah(P.statusMessage ?? `${sg(P.serverName) ?? ""} \xB7 ${sg(P.toolName) ?? ""}`),
          startedAt: P.startTime,
          doneAt: P.endTime,
          failed: j || P.mcpStatus === "failed" || void 0,
        });
        break;
      case "remote_agent":
      case "dream":
      case "auto_mode_scan":
        break;
      default:
    }
  }
  return x;
}

function tYe(S) {
  return S.type === "workflow_agent";
}

function eY(S) {
  if (!S || S.length === 0) return [];
  return S.map((x) => ({
    id: `todo:${k4(x.content).toString(36)}`,
    kind: "todo",
    label: ah(x.status === "in_progress" ? x.activeForm : x.content),
    startedAt: x.status === "pending" ? void 0 : 0,
    doneAt: x.status === "completed" ? 0 : void 0,
  }));
}

function tY(S) {
  if (!S || S.length === 0) return [];
  return S.map((x) => ({
    id: `todo:${x.id}`,
    kind: "todo",
    label: ah(x.status === "in_progress" ? (x.activeForm ?? x.subject) : x.subject),
    startedAt: x.status === "pending" ? void 0 : 0,
    doneAt: x.status === "completed" ? 0 : void 0,
  }));
}

function pYe(kuo) {
  return kuo.id;
}

function AO(huo) {
  let PO = _(19),
    { tasks: oY } = huo,
    oC = rv(oY),
    nY = Iu().getMainThreadQueueLength(),
    Uhe = ct(pYe),
    sYe;
  if (PO[0] !== Uhe) (sYe = (yuo) => yuo.todos[Uhe]), (PO[0] = Uhe), (PO[1] = sYe);
  else sYe = PO[1];
  let jhe = W(sYe),
    aYe;
  if (PO[2] !== jhe) (aYe = GL() ? jhe : void 0), (PO[2] = jhe), (PO[3] = aYe);
  else aYe = PO[3];
  let Hhe = aYe,
    $he = hYt(),
    lYe;
  if (PO[4] !== Hhe || PO[5] !== oY || PO[6] !== $he)
    (lYe = [...J2(oY), ...eY(Hhe), ...tY($he)]), (PO[4] = Hhe), (PO[5] = oY), (PO[6] = $he), (PO[7] = lYe);
  else lYe = PO[7];
  let iY = lYe,
    cYe;
  if (PO[8] !== iY) (cYe = Pce(iY)), (PO[8] = iY), (PO[9] = cYe);
  else cYe = PO[9];
  let Whe = cYe,
    uYe = jFe(),
    dYe = uYe !== null ? { spent: BFe(), target: uYe } : void 0,
    sY = Kun();
  const Suo = oC.count,
    qhe = oC.kinds.join(","),
    buo = oC.drainableMonitors,
    Vhe = sY?.at,
    Khe = sY?.fires,
    Qhe = sY?.keepalive,
    zhe = Ice(dYe);
  let mYe;
  if (
    PO[10] !== oC ||
    PO[11] !== Whe ||
    PO[12] !== nY ||
    PO[13] !== Qhe ||
    PO[14] !== zhe ||
    PO[15] !== qhe ||
    PO[16] !== Vhe ||
    PO[17] !== Khe
  )
    (mYe = [Suo, nY, qhe, buo, Vhe, Khe, Qhe, Whe, zhe]),
      (PO[10] = oC),
      (PO[11] = Whe),
      (PO[12] = nY),
      (PO[13] = Qhe),
      (PO[14] = zhe),
      (PO[15] = qhe),
      (PO[16] = Vhe),
      (PO[17] = Khe),
      (PO[18] = mYe);
  else mYe = PO[18];
  return (
    A(() => {
      edn({
        tasks: oC.count,
        queued: nY,
        kinds: oC.kinds,
        drainableMonitors: oC.drainableMonitors,
        wake: sY,
        items: iY,
        budget: dYe,
      });
    }, mYe),
    null
  );
}

F();

var MO = yn(null);

function aY() {
  return We(MO);
}

F();

F();

function dY(Nuo) {
  let nC = _(18),
    { currentMode: LA, onDone: Yhe } = Nuo,
    fYe;
  if (nC[0] !== LA)
    (fYe = () => {
      s("tengu_auto_default_nudge_shown", { current_mode: c(LA) });
    }),
      (nC[0] = LA),
      (nC[1] = fYe);
  else fYe = nC[1];
  Tg("impression", fYe), Hi();
  let [gYe, Luo] = u(null),
    hYe;
  if (nC[2] !== Yhe)
    (hYe = function rC(yYe) {
      if (Yhe(yYe) === false) Luo((Ouo) => ({ epoch: (Ouo?.epoch ?? 0) + 1, choice: yYe }));
    }),
      (nC[2] = Yhe),
      (nC[3] = hYe);
  else hYe = nC[3];
  let rC = hYe,
    SYe;
  if (nC[4] === d)
    (SYe = e(o, {
      marginBottom: 1,
      flexDirection: "column",
      children: e(t, {
        children:
          "Auto mode lets Claude handle permission prompts automatically. Claude checks each tool call for risky actions and prompt injection before executing, runs the ones it assesses as lower-risk, and blocks the rest.",
      }),
    })),
      (nC[4] = SYe);
  else SYe = nC[4];
  const Jhe = gYe?.epoch ?? 0,
    Xhe = gYe?.choice;
  let bYe;
  if (nC[5] === d)
    (bYe = { label: "Yes, set auto mode as my default permission mode", value: "accept" }), (nC[5] = bYe);
  else bYe = nC[5];
  let kYe;
  if (nC[6] !== LA) (kYe = SN(LA)), (nC[6] = LA), (nC[7] = kYe);
  else kYe = nC[7];
  const Zhe = `No, keep ${kYe}`;
  let lY;
  if (nC[8] !== Zhe) (lY = [bYe, { label: Zhe, value: "decline" }]), (nC[8] = Zhe), (nC[9] = lY);
  else lY = nC[9];
  let uY;
  if (nC[10] !== rC) (uY = () => rC("decline")), (nC[10] = rC), (nC[11] = uY);
  else uY = nC[11];
  let CYe;
  if (nC[12] !== rC || nC[13] !== uY || nC[14] !== Jhe || nC[15] !== Xhe || nC[16] !== lY)
    (CYe = e(di, {
      title: "Make auto mode your default permission mode?",
      children: r(o, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1,
        children: [
          SYe,
          e(o, { children: e(Ce, { defaultFocusValue: Xhe, options: lY, onChange: rC, onCancel: uY }, Jhe) }),
        ],
      }),
    })),
      (nC[12] = rC),
      (nC[13] = uY),
      (nC[14] = Jhe),
      (nC[15] = Xhe),
      (nC[16] = lY),
      (nC[17] = CYe);
  else CYe = nC[17];
  return CYe;
}

var sye = 30000,
  aye = 24;

function vY(zuo) {
  let Gc = _(38),
    { pluginName: eye, pluginDescription: pY, marketplaceName: tye, sourceCommand: Yuo, onResponse: XT } = zuo,
    fY = Yn(Fi),
    vYe;
  if (Gc[0] !== eye) (vYe = Q0(eye, "(unnamed plugin)")), (Gc[0] = eye), (Gc[1] = vYe);
  else vYe = Gc[1];
  let oye = vYe,
    wYe;
  if (Gc[2] !== tye) (wYe = Q0(tye, "(unnamed marketplace)")), (Gc[2] = tye), (Gc[3] = wYe);
  else wYe = Gc[3];
  let nye = wYe,
    Juo = Q0(Yuo, "(unnamed command)"),
    TYe;
  if (Gc[4] !== pY) (TYe = pY === void 0 ? void 0 : Mie(pY)), (Gc[4] = pY), (Gc[5] = TYe);
  else TYe = Gc[5];
  let gY = TYe,
    _Ye;
  if (Gc[6] !== XT) (_Ye = () => XT(dy() ? "cancelled" : "no")), (Gc[6] = XT), (Gc[7] = _Ye);
  else _Ye = Gc[7];
  let RYe;
  if (Gc[8] === d) (RYe = []), (Gc[8] = RYe);
  else RYe = Gc[8];
  Yn(_Ye, sye, RYe);
  let xYe;
  if (Gc[9] !== fY || Gc[10] !== XT)
    (xYe = function lh(Xuo) {
      if (!fY) {
        return;
      }
      if (dy()) {
        XT("cancelled");
        return;
      }
      XT(Xuo);
    }),
      (Gc[9] = fY),
      (Gc[10] = XT),
      (Gc[11] = xYe);
  else xYe = Gc[11];
  let lh = xYe,
    PYe;
  if (Gc[12] !== lh)
    (PYe = function IO(Zuo) {
      bb19: switch (Zuo) {
        case "yes": {
          lh("yes");
          break bb19;
        }
        case "disable": {
          lh("disable");
          break bb19;
        }
        default: {
          lh("no");
        }
      }
    }),
      (Gc[12] = lh),
      (Gc[13] = PYe);
  else PYe = Gc[13];
  let IO = PYe,
    rye = rt(Juo, aye),
    AYe;
  if (Gc[14] === d)
    (AYe = [
      { label: e(t, { children: "Yes, install" }), value: "yes" },
      { label: "No", value: "no" },
      { label: "No, and don't show plugin installation hints again", value: "disable" },
    ]),
      (Gc[14] = AYe);
  else AYe = Gc[14];
  let edo = AYe,
    hY;
  if (Gc[15] !== rye)
    (hY = e(o, {
      marginBottom: 1,
      children: r(t, {
        dimColor: true,
        wrap: "truncate-end",
        children: ["The ", e(t, { bold: true, children: rye }), " command suggests installing a plugin."],
      }),
    })),
      (Gc[15] = rye),
      (Gc[16] = hY);
  else hY = Gc[16];
  let MYe;
  if (Gc[17] === d)
    (MYe = e(o, { flexShrink: 0, children: e(t, { dimColor: true, children: "Plugin:" }) })), (Gc[17] = MYe);
  else MYe = Gc[17];
  let yY;
  if (Gc[18] !== oye)
    (yY = r(o, { children: [MYe, r(t, { wrap: "truncate-end", children: [" ", oye] })] })),
      (Gc[18] = oye),
      (Gc[19] = yY);
  else yY = Gc[19];
  let IYe;
  if (Gc[20] === d)
    (IYe = e(o, { flexShrink: 0, children: e(t, { dimColor: true, children: "Marketplace:" }) })), (Gc[20] = IYe);
  else IYe = Gc[20];
  let SY;
  if (Gc[21] !== nye)
    (SY = r(o, { children: [IYe, r(t, { wrap: "truncate-end", children: [" ", nye] })] })),
      (Gc[21] = nye),
      (Gc[22] = SY);
  else SY = Gc[22];
  let bY;
  if (Gc[23] !== gY)
    (bY =
      gY &&
      r(o, {
        children: [
          e(o, { flexShrink: 0, children: e(t, { dimColor: true, children: "Description:" }) }),
          r(t, { dimColor: true, wrap: "truncate-end", children: [" ", gY] }),
        ],
      })),
      (Gc[23] = gY),
      (Gc[24] = bY);
  else bY = Gc[24];
  let EYe;
  if (Gc[25] === d)
    (EYe = e(o, { marginTop: 1, children: e(t, { children: "Would you like to install it?" }) })), (Gc[25] = EYe);
  else EYe = Gc[25];
  const iye = !fY;
  let kY;
  if (Gc[26] !== lh) (kY = () => lh("no")), (Gc[26] = lh), (Gc[27] = kY);
  else kY = Gc[27];
  let CY;
  if (Gc[28] !== IO || Gc[29] !== iye || Gc[30] !== kY)
    (CY = e(o, { children: e(Ce, { options: edo, isDisabled: iye, onChange: IO, onCancel: kY }) })),
      (Gc[28] = IO),
      (Gc[29] = iye),
      (Gc[30] = kY),
      (Gc[31] = CY);
  else CY = Gc[31];
  let DYe;
  if (Gc[32] !== yY || Gc[33] !== SY || Gc[34] !== bY || Gc[35] !== CY || Gc[36] !== hY)
    (DYe = e(di, {
      title: "Plugin recommendation",
      children: r(o, { flexDirection: "column", paddingX: 2, paddingY: 1, children: [hY, yY, SY, bY, EYe, CY] }),
    })),
      (Gc[32] = yY),
      (Gc[33] = SY),
      (Gc[34] = bY),
      (Gc[35] = CY),
      (Gc[36] = hY),
      (Gc[37] = DYe);
  else DYe = Gc[37];
  return DYe;
}

function _Y(ldo) {
  let wY = _(7),
    { onDone: OA } = ldo,
    NYe;
  if (wY[0] === d)
    (NYe = r(o, {
      flexDirection: "column",
      children: [
        e(t, { children: "Learn more about how to monitor your spending:" }),
        e(ut, { url: "https://code.claude.com/docs/en/costs" }),
      ],
    })),
      (wY[0] = NYe);
  else NYe = wY[0];
  let LYe;
  if (wY[1] === d) (LYe = [{ value: "ok", label: "Got it, thanks!" }]), (wY[1] = LYe);
  else LYe = wY[1];
  let TY;
  if (wY[2] !== OA) (TY = e(Ce, { options: LYe, onChange: OA })), (wY[2] = OA), (wY[3] = TY);
  else TY = wY[3];
  let OYe;
  if (wY[4] !== OA || wY[5] !== TY)
    (OYe = r(me, { title: "You've spent $5 on the Anthropic API this session.", onCancel: OA, children: [NYe, TY] })),
      (wY[4] = OA),
      (wY[5] = TY),
      (wY[6] = OYe);
  else OYe = wY[6];
  return OYe;
}

var hye = 30000;

function LY(kdo) {
  let Bl = _(42),
    { pluginName: lye, pluginDescription: RY, marketplaceName: uye, fileExtension: dye, onResponse: ZT } = kdo,
    xY = Yn(Fi),
    FYe;
  if (Bl[0] !== lye) (FYe = Q0(lye, "(unnamed plugin)")), (Bl[0] = lye), (Bl[1] = FYe);
  else FYe = Bl[1];
  let mye = FYe,
    BYe;
  if (Bl[2] !== RY) (BYe = RY === void 0 ? void 0 : Mie(RY)), (Bl[2] = RY), (Bl[3] = BYe);
  else BYe = Bl[3];
  let PY = BYe,
    UYe;
  if (Bl[4] !== dye) (UYe = Q0(dye, "(unnamed extension)")), (Bl[4] = dye), (Bl[5] = UYe);
  else UYe = Bl[5];
  let pye = UYe,
    jYe;
  if (Bl[6] !== uye) (jYe = Q0(uye, "(unnamed marketplace)")), (Bl[6] = uye), (Bl[7] = jYe);
  else jYe = Bl[7];
  let fye = jYe,
    HYe;
  if (Bl[8] !== ZT) (HYe = () => ZT(dy() ? "cancelled" : "timeout")), (Bl[8] = ZT), (Bl[9] = HYe);
  else HYe = Bl[9];
  let $Ye;
  if (Bl[10] === d) ($Ye = []), (Bl[10] = $Ye);
  else $Ye = Bl[10];
  Yn(HYe, hye, $Ye);
  let WYe;
  if (Bl[11] !== xY || Bl[12] !== ZT)
    (WYe = function jf(Cdo) {
      if (!xY) {
        return;
      }
      if (dy()) {
        ZT("cancelled");
        return;
      }
      ZT(Cdo);
    }),
      (Bl[11] = xY),
      (Bl[12] = ZT),
      (Bl[13] = WYe);
  else WYe = Bl[13];
  let jf = WYe,
    qYe;
  if (Bl[14] !== jf)
    (qYe = function EO(vdo) {
      bb19: switch (vdo) {
        case "yes": {
          jf("yes");
          break bb19;
        }
        case "no": {
          jf("no");
          break bb19;
        }
        case "never": {
          jf("never");
          break bb19;
        }
        case "disable": {
          jf("disable");
        }
      }
    }),
      (Bl[14] = jf),
      (Bl[15] = qYe);
  else qYe = Bl[15];
  let EO = qYe,
    VYe;
  if (Bl[16] === d)
    (VYe = [
      { label: e(t, { children: "Yes, install" }), value: "yes" },
      { label: "No, not now", value: "no" },
      { label: e(t, { children: "Never for this plugin" }), value: "never" },
      { label: "Disable all LSP recommendations", value: "disable" },
    ]),
      (Bl[16] = VYe);
  else VYe = Bl[16];
  let wdo = VYe,
    KYe;
  if (Bl[17] === d)
    (KYe = e(o, {
      marginBottom: 1,
      children: e(t, {
        dimColor: true,
        children: "LSP provides code intelligence like go-to-definition and error checking",
      }),
    })),
      (Bl[17] = KYe);
  else KYe = Bl[17];
  let QYe;
  if (Bl[18] === d)
    (QYe = e(o, { flexShrink: 0, children: e(t, { dimColor: true, children: "Plugin:" }) })), (Bl[18] = QYe);
  else QYe = Bl[18];
  let AY;
  if (Bl[19] !== mye)
    (AY = r(o, { children: [QYe, r(t, { wrap: "truncate-end", children: [" ", mye] })] })),
      (Bl[19] = mye),
      (Bl[20] = AY);
  else AY = Bl[20];
  let zYe;
  if (Bl[21] === d)
    (zYe = e(o, { flexShrink: 0, children: e(t, { dimColor: true, children: "Marketplace:" }) })), (Bl[21] = zYe);
  else zYe = Bl[21];
  let MY;
  if (Bl[22] !== fye)
    (MY = r(o, { children: [zYe, r(t, { wrap: "truncate-end", children: [" ", fye] })] })),
      (Bl[22] = fye),
      (Bl[23] = MY);
  else MY = Bl[23];
  let YYe;
  if (Bl[24] === d)
    (YYe = e(o, { flexShrink: 0, children: e(t, { dimColor: true, children: "Triggered by:" }) })), (Bl[24] = YYe);
  else YYe = Bl[24];
  let IY;
  if (Bl[25] !== pye)
    (IY = r(o, { children: [YYe, r(t, { wrap: "truncate-end", children: [" ", pye, " files"] })] })),
      (Bl[25] = pye),
      (Bl[26] = IY);
  else IY = Bl[26];
  let EY;
  if (Bl[27] !== PY)
    (EY =
      PY &&
      r(o, {
        children: [
          e(o, { flexShrink: 0, children: e(t, { dimColor: true, children: "Description:" }) }),
          r(t, { dimColor: true, wrap: "truncate-end", children: [" ", PY] }),
        ],
      })),
      (Bl[27] = PY),
      (Bl[28] = EY);
  else EY = Bl[28];
  let JYe;
  if (Bl[29] === d)
    (JYe = e(o, { marginTop: 1, children: e(t, { children: "Would you like to install this LSP plugin?" }) })),
      (Bl[29] = JYe);
  else JYe = Bl[29];
  const gye = !xY;
  let DY;
  if (Bl[30] !== jf) (DY = () => jf("no")), (Bl[30] = jf), (Bl[31] = DY);
  else DY = Bl[31];
  let NY;
  if (Bl[32] !== EO || Bl[33] !== gye || Bl[34] !== DY)
    (NY = e(o, { children: e(Ce, { options: wdo, isDisabled: gye, onChange: EO, onCancel: DY }) })),
      (Bl[32] = EO),
      (Bl[33] = gye),
      (Bl[34] = DY),
      (Bl[35] = NY);
  else NY = Bl[35];
  let XYe;
  if (Bl[36] !== AY || Bl[37] !== MY || Bl[38] !== IY || Bl[39] !== EY || Bl[40] !== NY)
    (XYe = e(di, {
      title: "LSP plugin recommendation",
      children: r(o, { flexDirection: "column", paddingX: 2, paddingY: 1, children: [KYe, AY, MY, IY, EY, JYe, NY] }),
    })),
      (Bl[36] = AY),
      (Bl[37] = MY),
      (Bl[38] = IY),
      (Bl[39] = EY),
      (Bl[40] = NY),
      (Bl[41] = XYe);
  else XYe = Bl[41];
  return XYe;
}

function BY(Edo) {
  let n_ = _(14),
    { sessionAgeMinutes: Sye, estimatedTokens: bye, onDone: FA } = Edo,
    ZYe;
  if (n_[0] !== Sye) (ZYe = vye(Sye)), (n_[0] = Sye), (n_[1] = ZYe);
  else ZYe = n_[1];
  let Ddo = ZYe,
    e5e;
  if (n_[2] !== bye) (e5e = Gn(bye)), (n_[2] = bye), (n_[3] = e5e);
  else e5e = n_[3];
  const kye = `This session is ${Ddo} old and ${e5e} tokens.`;
  let OY;
  if (n_[4] !== FA) (OY = () => FA("dismiss")), (n_[4] = FA), (n_[5] = OY);
  else OY = n_[5];
  let t5e;
  if (n_[6] === d)
    (t5e = e(o, {
      flexDirection: "column",
      children: e(t, {
        children:
          "Resuming the full session will consume a substantial portion of your usage limits. We recommend resuming from a summary.",
      }),
    })),
      (n_[6] = t5e);
  else t5e = n_[6];
  let o5e;
  if (n_[7] === d)
    (o5e = [
      { value: "compact", label: "Resume from summary (recommended)" },
      { value: "continue", label: "Resume full session as-is" },
      { value: "never", label: "Don't ask me again" },
    ]),
      (n_[7] = o5e);
  else o5e = n_[7];
  let FY;
  if (n_[8] !== FA) (FY = e(Ce, { options: o5e, onChange: (Ndo) => FA(Ndo) })), (n_[8] = FA), (n_[9] = FY);
  else FY = n_[9];
  let n5e;
  if (n_[10] !== kye || n_[11] !== OY || n_[12] !== FY)
    (n5e = r(me, { title: kye, onCancel: OY, children: [t5e, FY] })),
      (n_[10] = kye),
      (n_[11] = OY),
      (n_[12] = FY),
      (n_[13] = n5e);
  else n5e = n_[13];
  return n5e;
}

function vye(S) {
  if (S < 60) return `${Math.floor(S)}m`;
  let x = Math.floor(S / 60);
  if (x < 24) {
    let H = Math.floor(S % 60);
    return H === 0 ? `${x}h` : `${x}h ${H}m`;
  }
  let P = Math.floor(x / 24),
    j = x % 24;
  return j === 0 ? `${P}d` : `${P}d ${j}h`;
}

F();

function A5e(Rmo, xmo) {
  return Rmo + xmo;
}

function M5e(_, Pmo) {
  return Pmo;
}

function E5e(Uye) {
  return Uye.resolved && !Uye.alreadyGranted ? [Uye.resolved.bundleId] : [];
}

function D5e(Amo) {
  return [Amo, true];
}

function N5e(P5e) {
  return r(t, { dimColor: true, children: ["  ", "\xB7 ", P5e] }, P5e);
}

var $O = { granted: [], denied: [], flags: kL },
  HO = 8,
  jye = 8;

function p5(tmo) {
  let jY = _(12),
    { reason: omo } = tmo,
    UY = es(omo),
    { columns: nmo } = Ee(),
    wye = Math.max(20, nmo - jye),
    i5e;
  if (jY[0] !== wye)
    (i5e = function Tye(rmo) {
      return Nf(rmo, wye, { trim: false, hard: true }).split(`
`);
    }),
      (jY[0] = wye),
      (jY[1] = i5e);
  else i5e = jY[1];
  let Tye = i5e,
    HY = UY.text
      .split(`
`)
      .flatMap(Tye),
    s5e = HY.length <= HO ? HY : HY.slice(0, HO - 1),
    DO = HY.length - s5e.length;
  const _ye = zi,
    imo = UY.needsGutter,
    Rye = t,
    smo = true,
    Pye = s5e.join(`
`);
  let $Y;
  if (jY[2] !== DO)
    ($Y =
      DO > 0
        ? `
\u2026 +${DO} more ${k(DO, "row")} not shown.`
        : ""),
      (jY[2] = DO),
      (jY[3] = $Y);
  else $Y = jY[3];
  let WY;
  if (jY[4] !== Rye || jY[5] !== Pye || jY[6] !== $Y)
    (WY = r(Rye, { dimColor: smo, children: [Pye, $Y] })), (jY[4] = Rye), (jY[5] = Pye), (jY[6] = $Y), (jY[7] = WY);
  else WY = jY[7];
  let a5e;
  if (jY[8] !== _ye || jY[9] !== UY || jY[10] !== WY)
    (a5e = e(_ye, { multiline: imo, children: WY })), (jY[8] = _ye), (jY[9] = UY), (jY[10] = WY), (jY[11] = a5e);
  else a5e = jY[11];
  return a5e;
}

function h5(amo) {
  let lmo = _(4),
    { request: NO, onDone: qY, accepts: VY } = amo,
    l5e;
  if (lmo[0] !== VY || lmo[1] !== qY || lmo[2] !== NO)
    (l5e = NO.tccState
      ? e(f5, { tccState: NO.tccState, onDone: () => qY($O), accepts: VY })
      : e(g5, { request: NO, onDone: qY, accepts: VY })),
      (lmo[0] = VY),
      (lmo[1] = qY),
      (lmo[2] = NO),
      (lmo[3] = l5e);
  else l5e = lmo[3];
  return l5e;
}

function f5(cmo) {
  let Em = _(39),
    { tccState: iC, onDone: BA, accepts: Aye } = cmo,
    aS = hs(),
    { refusedWithin: lS, noteRefused: cS } = pi(),
    c5e;
  if (Em[0] !== aS || Em[1] !== cS || Em[2] !== lS)
    (c5e = function LO() {
      if (aS() || lS()) {
        return cS(), true;
      }
      return false;
    }),
      (Em[0] = aS),
      (Em[1] = cS),
      (Em[2] = lS),
      (Em[3] = c5e);
  else c5e = Em[3];
  let LO = c5e,
    u5e;
  if (Em[4] !== aS || Em[5] !== cS || Em[6] !== BA || Em[7] !== lS)
    (u5e = function sC() {
      if (aS() || lS()) {
        cS();
        return;
      }
      BA();
    }),
      (Em[4] = aS),
      (Em[5] = cS),
      (Em[6] = BA),
      (Em[7] = lS),
      (Em[8] = u5e);
  else u5e = Em[8];
  let sC = u5e,
    d5e;
  if (Em[9] !== iC.accessibility || Em[10] !== iC.screenRecording) {
    let GY = [];
    if (!iC.accessibility) {
      let aC;
      if (Em[12] === d)
        (aC = { label: "Open System Settings \u2192 Accessibility", value: "open_accessibility" }), (Em[12] = aC);
      else aC = Em[12];
      GY.push(aC);
    }
    if (!iC.screenRecording) {
      let aC;
      if (Em[13] === d)
        (aC = { label: "Open System Settings \u2192 Screen Recording", value: "open_screen_recording" }), (Em[13] = aC);
      else aC = Em[13];
      GY.push(aC);
    }
    d5e = (GY.push({ label: "Try again", value: "retry" }), GY);
    (Em[9] = iC.accessibility), (Em[10] = iC.screenRecording), (Em[11] = d5e);
  } else d5e = Em[11];
  let Mye = d5e,
    aC;
  if (Em[14] !== Aye || Em[15] !== aS || Em[16] !== cS || Em[17] !== BA || Em[18] !== lS)
    (aC = function OO(umo) {
      if (aS() || lS()) {
        cS();
        return;
      }
      if (!Aye()) {
        return;
      }
      let m5e = fH();
      switch (umo) {
        case "open_accessibility": {
          m5e.tcc.requestAccessibility(),
            $e("open", ["x-apple.systempreferences:com.apple.preference.security?Privacy_Accessibility"], {
              useCwd: false,
            });
          return;
        }
        case "open_screen_recording": {
          m5e.tcc.requestScreenRecording(),
            $e("open", ["x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture"], {
              useCwd: false,
            });
          return;
        }
        case "retry": {
          BA();
          return;
        }
      }
    }),
      (Em[14] = Aye),
      (Em[15] = aS),
      (Em[16] = cS),
      (Em[17] = BA),
      (Em[18] = lS),
      (Em[19] = aC);
  else aC = Em[19];
  let OO = aC;
  const Eye = iC.accessibility ? `${L.tick} granted` : `${L.cross} not granted`;
  let KY;
  if (Em[20] !== Eye) (KY = r(t, { children: ["Accessibility:", " ", Eye] })), (Em[20] = Eye), (Em[21] = KY);
  else KY = Em[21];
  const Dye = iC.screenRecording ? `${L.tick} granted` : `${L.cross} not granted`;
  let QY;
  if (Em[22] !== Dye) (QY = r(t, { children: ["Screen Recording:", " ", Dye] })), (Em[22] = Dye), (Em[23] = QY);
  else QY = Em[23];
  let zY;
  if (Em[24] !== KY || Em[25] !== QY)
    (zY = r(o, { flexDirection: "column", children: [KY, QY] })), (Em[24] = KY), (Em[25] = QY), (Em[26] = zY);
  else zY = Em[26];
  let p5e;
  if (Em[27] === d)
    (p5e = e(t, {
      dimColor: true,
      children:
        'Grant the missing permissions in System Settings, then select "Try again". macOS may require you to restart Claude Code after granting Screen Recording.',
    })),
      (Em[27] = p5e);
  else p5e = Em[27];
  let YY;
  if (Em[28] !== sC || Em[29] !== OO || Em[30] !== Mye || Em[31] !== LO)
    (YY = e(Ce, { hideIndexes: true, refuseInput: LO, selectedValue: Ti, options: Mye, onChange: OO, onCancel: sC })),
      (Em[28] = sC),
      (Em[29] = OO),
      (Em[30] = Mye),
      (Em[31] = LO),
      (Em[32] = YY);
  else YY = Em[32];
  let JY;
  if (Em[33] !== YY || Em[34] !== zY)
    (JY = r(o, { flexDirection: "column", paddingX: 1, paddingY: 1, gap: 1, children: [zY, p5e, YY] })),
      (Em[33] = YY),
      (Em[34] = zY),
      (Em[35] = JY);
  else JY = Em[35];
  let f5e;
  if (Em[36] !== sC || Em[37] !== JY)
    (f5e = e(me, { title: "Computer Use needs macOS permissions", onCancel: sC, children: JY })),
      (Em[36] = sC),
      (Em[37] = JY),
      (Em[38] = f5e);
  else f5e = Em[38];
  return f5e;
}

var $ye = {
  shell: "equivalent to shell access",
  filesystem: "can read/write any file",
  system_settings: "can change system settings",
};

function Wye(S) {
  function x(j) {
    if (!j.resolved) return 0;
    let H = i9e(j.resolved.bundleId) ? 1 : 0;
    return 4 + (j.alreadyGranted ? 0 : 2) + H;
  }
  let P = new Map();
  for (let j of S) {
    let H = j.resolved?.bundleId ?? j.requestedName,
      Z = P.get(H);
    if (!Z || x(j) > x(Z)) P.set(H, j);
  }
  return [...P.values()];
}

function qye(S) {
  return S.resolved && !S.alreadyGranted && i9e(S.resolved.bundleId) ? 2 : 1;
}

function g5(dmo) {
  let ka = _(79),
    { request: Fu, onDone: XY } = dmo,
    g5e;
  if (ka[0] !== Fu.apps) (g5e = Wye(Fu.apps)), (ka[0] = Fu.apps), (ka[1] = g5e);
  else g5e = ka[1];
  let Cu = g5e,
    Nye;
  bb0: {
    let uh, FO;
    if (ka[2] !== Cu) (uh = Cu.map(qye)), (FO = uh.reduce(A5e, 0)), (ka[2] = Cu), (ka[3] = uh), (ka[4] = FO);
    else (uh = ka[3]), (FO = ka[4]);
    if (FO <= HK) {
      let Nm;
      if (ka[5] !== Cu) (Nm = { visibleApps: Cu, hiddenCount: 0 }), (ka[5] = Cu), (ka[6] = Nm);
      else Nm = ka[6];
      Nye = Nm;
      break bb0;
    }
    let lC;
    if (ka[7] !== Cu || ka[8] !== uh) {
      let Nm;
      if (ka[10] !== uh) (Nm = (h5e, y5e) => uh[y5e] - uh[h5e] || h5e - y5e), (ka[10] = uh), (ka[11] = Nm);
      else Nm = ka[11];
      let mmo = Cu.map(M5e).sort(Nm);
      lC = new Set();
      let ZY = 0;
      for (const Lye of mmo) {
        if (ZY + uh[Lye] > HK - 1) {
          continue;
        }
        lC.add(Lye), (ZY = ZY + uh[Lye]), ZY;
      }
      (ka[7] = Cu), (ka[8] = uh), (ka[9] = lC);
    } else lC = ka[9];
    let Nm;
    if (ka[12] !== Cu || ka[13] !== lC) {
      let dS;
      if (ka[15] !== lC) (dS = (__0, pmo) => lC.has(pmo)), (ka[15] = lC), (ka[16] = dS);
      else dS = ka[16];
      Nm = Cu.filter(dS);
      (ka[12] = Cu), (ka[13] = lC), (ka[14] = Nm);
    } else Nm = ka[14];
    const dS = Cu.length - lC.size;
    let BO;
    if (ka[17] !== Nm || ka[18] !== dS)
      (BO = { visibleApps: Nm, hiddenCount: dS }), (ka[17] = Nm), (ka[18] = dS), (ka[19] = BO);
    else BO = ka[19];
    Nye = BO;
  }
  let { visibleApps: mS, hiddenCount: UO } = Nye,
    FO;
  if (ka[20] !== mS) (FO = () => new Set(mS.flatMap(E5e))), (ka[20] = mS), (ka[21] = FO);
  else FO = ka[21];
  let [Lm] = u(FO),
    Nm;
  if (ka[22] === d) (Nm = ["clipboardRead", "clipboardWrite", "systemKeyCombos"]), (ka[22] = Nm);
  else Nm = ka[22];
  let fmo = Nm,
    dS;
  if (ka[23] !== Fu.requestedFlags)
    (dS = fmo.filter((gmo) => Fu.requestedFlags[gmo])), (ka[23] = Fu.requestedFlags), (ka[24] = dS);
  else dS = ka[24];
  let r_ = dS,
    UA = hs(),
    { refusedWithin: jA, noteRefused: HA, epoch: hmo } = pi(),
    BO;
  if (ka[25] !== UA || ka[26] !== HA || ka[27] !== jA)
    (BO = function jO() {
      if (UA() || jA()) {
        return HA(), true;
      }
      return false;
    }),
      (ka[25] = UA),
      (ka[26] = HA),
      (ka[27] = jA),
      (ka[28] = BO);
  else BO = ka[28];
  let jO = BO,
    Oye = Vs(hmo),
    S5e;
  if (ka[29] === d)
    (S5e = {
      label: r(t, {
        children: ["Deny, and tell Claude what to do differently ", e(t, { bold: true, children: "(esc)" })],
      }),
      value: "deny",
    }),
      (ka[29] = S5e);
  else S5e = ka[29];
  const ymo = Lm.size;
  let b5e;
  if (ka[30] !== Lm.size) (b5e = k(Lm.size, "app")), (ka[30] = Lm.size), (ka[31] = b5e);
  else b5e = ka[31];
  const Fye = `Allow for this session (${ymo} ${b5e})`;
  let k5e;
  if (ka[32] !== Fye) (k5e = [S5e, { label: Fye, value: "allow_all" }]), (ka[32] = Fye), (ka[33] = k5e);
  else k5e = ka[33];
  let Bye = k5e,
    C5e;
  if (
    ka[34] !== Cu ||
    ka[35] !== Lm ||
    ka[36] !== UA ||
    ka[37] !== HA ||
    ka[38] !== XY ||
    ka[39] !== jA ||
    ka[40] !== r_ ||
    ka[41] !== mS
  )
    (C5e = function pS(Smo) {
      if (UA() || jA()) {
        HA();
        return;
      }
      if (!Smo) {
        XY($O);
        return;
      }
      let bmo = Date.now();
      let kmo = Cu.flatMap((e5) =>
        e5.resolved && Lm.has(e5.resolved.bundleId)
          ? [{ bundleId: e5.resolved.bundleId, displayName: e5.resolved.displayName, grantedAt: bmo }]
          : [],
      );
      let Cmo = new Set(mS);
      let vmo = Cu.flatMap(($A) => {
        if (!$A.resolved) {
          return [{ bundleId: $A.requestedName, reason: "not_installed" }];
        }
        if (Lm.has($A.resolved.bundleId) || !Cmo.has($A) || $A.alreadyGranted) {
          return [];
        }
        return [{ bundleId: $A.resolved.bundleId, reason: "user_denied" }];
      });
      let wmo = { ...kL, ...Object.fromEntries(r_.map(D5e)) };
      XY({ granted: kmo, denied: vmo, flags: wmo });
    }),
      (ka[34] = Cu),
      (ka[35] = Lm),
      (ka[36] = UA),
      (ka[37] = HA),
      (ka[38] = XY),
      (ka[39] = jA),
      (ka[40] = r_),
      (ka[41] = mS),
      (ka[42] = C5e);
  else C5e = ka[42];
  let pS = C5e,
    t5;
  if (ka[43] !== pS) (t5 = () => pS(false)), (ka[43] = pS), (ka[44] = t5);
  else t5 = ka[44];
  let o5;
  if (ka[45] !== Fu.reason) (o5 = Fu.reason ? e(p5, { reason: Fu.reason }) : null), (ka[45] = Fu.reason), (ka[46] = o5);
  else o5 = ka[46];
  let n5;
  if (ka[47] !== Lm || ka[48] !== mS) {
    let i_;
    if (ka[50] !== Lm)
      (i_ = (r5) => {
        let a_ = r5.resolved;
        if (!a_) {
          return r(
            t,
            {
              dimColor: true,
              children: [
                "  ",
                L.circle,
                " ",
                Lg(r5.requestedName),
                " ",
                e(t, { dimColor: true, children: "(not installed)" }),
              ],
            },
            r5.requestedName,
          );
        }
        if (r5.alreadyGranted) {
          return r(
            t,
            {
              dimColor: true,
              children: [
                "  ",
                L.tick,
                " ",
                Lg(a_.displayName),
                " ",
                e(t, { dimColor: true, children: "(already granted)" }),
              ],
            },
            a_.bundleId,
          );
        }
        let w5e = i9e(a_.bundleId);
        let Tmo = Lm.has(a_.bundleId);
        return r(
          o,
          {
            flexDirection: "column",
            children: [
              r(t, { children: ["  ", Tmo ? L.circleFilled : L.circle, " ", Lg(a_.displayName)] }),
              w5e ? r(t, { bold: true, children: ["    ", L.warning, " ", $ye[w5e]] }) : null,
            ],
          },
          a_.bundleId,
        );
      }),
        (ka[50] = Lm),
        (ka[51] = i_);
    else i_ = ka[51];
    n5 = mS.map(i_);
    (ka[47] = Lm), (ka[48] = mS), (ka[49] = n5);
  } else n5 = ka[49];
  let i_;
  if (ka[52] !== UO)
    (i_ =
      UO > 0
        ? r(t, {
            bold: true,
            children: ["  ", "\u2026 +", UO, " more ", k(UO, "app"), " not shown, and not included in this grant."],
          })
        : null),
      (ka[52] = UO),
      (ka[53] = i_);
  else i_ = ka[53];
  let i5;
  if (ka[54] !== n5 || ka[55] !== i_)
    (i5 = r(o, { flexDirection: "column", children: [n5, i_] })), (ka[54] = n5), (ka[55] = i_), (ka[56] = i5);
  else i5 = ka[56];
  let s5;
  if (ka[57] !== r_)
    (s5 =
      r_.length > 0
        ? r(o, {
            flexDirection: "column",
            children: [e(t, { dimColor: true, children: "Also requested:" }), r_.map(N5e)],
          })
        : null),
      (ka[57] = r_),
      (ka[58] = s5);
  else s5 = ka[58];
  let a5;
  if (ka[59] !== Fu.willHide)
    (a5 =
      Fu.willHide && Fu.willHide.length > 0
        ? r(t, {
            dimColor: true,
            children: [
              Fu.willHide.length,
              " other",
              " ",
              k(Fu.willHide.length, "app"),
              " will be hidden while Claude works.",
            ],
          })
        : null),
      (ka[59] = Fu.willHide),
      (ka[60] = a5);
  else a5 = ka[60];
  let l5, u5;
  if (ka[61] !== pS)
    (l5 = (_mo) => pS(_mo === "allow_all")), (u5 = () => pS(false)), (ka[61] = pS), (ka[62] = l5), (ka[63] = u5);
  else (l5 = ka[62]), (u5 = ka[63]);
  let d5;
  if (ka[64] !== Oye.remountKey || ka[65] !== Bye || ka[66] !== jO || ka[67] !== l5 || ka[68] !== u5)
    (d5 = e(
      Ce,
      {
        hideIndexes: true,
        selectedValue: Ti,
        options: Bye,
        refuseInput: jO,
        defaultFocusValue: "deny",
        onChange: l5,
        onCancel: u5,
      },
      Oye.remountKey,
    )),
      (ka[64] = Oye.remountKey),
      (ka[65] = Bye),
      (ka[66] = jO),
      (ka[67] = l5),
      (ka[68] = u5),
      (ka[69] = d5);
  else d5 = ka[69];
  let m5;
  if (ka[70] !== o5 || ka[71] !== i5 || ka[72] !== s5 || ka[73] !== a5 || ka[74] !== d5)
    (m5 = r(o, { flexDirection: "column", paddingX: 1, paddingY: 1, gap: 1, children: [o5, i5, s5, a5, d5] })),
      (ka[70] = o5),
      (ka[71] = i5),
      (ka[72] = s5),
      (ka[73] = a5),
      (ka[74] = d5),
      (ka[75] = m5);
  else m5 = ka[75];
  let _5e;
  if (ka[76] !== t5 || ka[77] !== m5)
    (_5e = e(me, { title: "Computer Use wants to control these apps", onCancel: t5, children: m5 })),
      (ka[76] = t5),
      (ka[77] = m5),
      (ka[78] = _5e);
  else _5e = ka[78];
  return _5e;
}

F();

function $5e(rpo) {
  return rpo + 1;
}

var oSe = new Set(["addRules"]);

function _5(Jmo) {
  let Kc = _(44),
    { hostPattern: Xmo, requestSource: Vye, onUserResponse: Kye } = Jmo,
    { host: am } = Xmo,
    Zmo = vne(),
    L5e;
  if (Kc[0] !== am) (L5e = Om(am, { maxUnits: wdt(am) })), (Kc[0] = am), (Kc[1] = L5e);
  else L5e = Kc[1];
  let qA = L5e,
    KA;
  bb0: {
    if (Zmo) {
      KA = null;
      break bb0;
    }
    if (zD(am)) {
      KA = null;
      break bb0;
    }
    if (qA.kind !== "full") {
      KA = null;
      break bb0;
    }
    let VO;
    if (Kc[2] !== am) (VO = fD(am)), (Kc[2] = am), (Kc[3] = VO);
    else VO = Kc[3];
    let y5 = VO;
    if (y5 === null) {
      KA = null;
      break bb0;
    }
    let KO;
    if (Kc[4] !== am || Kc[5] !== y5) {
      let QO;
      if (Kc[7] !== am) (QO = Rne(am)), (Kc[7] = am), (Kc[8] = QO);
      else QO = Kc[8];
      KO = Ow(
        [
          {
            type: "addRules",
            rules: [{ toolName: Qr, ruleContent: `domain:${QO}` }],
            behavior: "allow",
            destination: "localSettings",
          },
        ],
        {
          displayedTypes: oSe,
          renderLabel: (O5e) => {
            let zO = O5e.length === 1 ? O5e[0] : void 0;
            if (
              zO === void 0 ||
              zO.type !== "addRules" ||
              zO.rules.length !== 1 ||
              zO.rules[0]?.toolName !== Qr ||
              zO.rules[0]?.ruleContent !== `domain:${Rne(am)}`
            ) {
              return null;
            }
            return r(t, { children: ["Yes, and don't ask again for", " ", e(t, { bold: true, children: y5.display })] });
          },
        },
      );
      (Kc[4] = am), (Kc[5] = y5), (Kc[6] = KO);
    } else KO = Kc[6];
    KA = KO;
  }
  let cC = KA,
    [Qye, epo] = u(0),
    [zye, Jye] = xge(),
    S5 = Yn(Fi),
    VO;
  if (Kc[9] !== S5 || Kc[10] !== Kye || Kc[11] !== Jye)
    (VO = function Hf(tpo, opo) {
      if (!S5) {
        return;
      }
      if (Kye(opo) === false) {
        epo($5e), Jye(tpo === "yes" ? "yes" : "no");
        return;
      }
    }),
      (Kc[9] = S5),
      (Kc[10] = Kye),
      (Kc[11] = Jye),
      (Kc[12] = VO);
  else VO = Kc[12];
  let Hf = VO,
    KO;
  if (Kc[13] !== cC || Kc[14] !== Hf)
    (KO = function YO(npo) {
      bb66: switch (npo) {
        case "yes": {
          Hf("yes", { allow: true, persistToSettings: false });
          break bb66;
        }
        case "yes-dont-ask-again": {
          if (cC !== null) Hf("yes-dont-ask-again", { allow: true, persistToSettings: true, persistRow: cC });
          else Hf("yes", { allow: true, persistToSettings: false });
          break bb66;
        }
        case "no": {
          Hf("no", { allow: false, persistToSettings: false });
        }
      }
    }),
      (Kc[13] = cC),
      (Kc[14] = Hf),
      (Kc[15] = KO);
  else KO = Kc[15];
  let YO = KO,
    QO;
  if (Kc[16] === d) (QO = { label: "Yes", value: "yes" }), (Kc[16] = QO);
  else QO = Kc[16];
  let b5;
  if (Kc[17] !== cC)
    (b5 = cC !== null ? [{ label: cC.node, value: "yes-dont-ask-again" }] : []), (Kc[17] = cC), (Kc[18] = b5);
  else b5 = Kc[18];
  let F5e;
  if (Kc[19] === d)
    (F5e = {
      label: r(t, { children: ["No, and tell Claude what to do differently ", e(t, { bold: true, children: "(esc)" })] }),
      value: "no",
    }),
      (Kc[19] = F5e);
  else F5e = Kc[19];
  let B5e;
  if (Kc[20] !== b5) (B5e = [QO, ...b5, F5e]), (Kc[20] = b5), (Kc[21] = B5e);
  else B5e = Kc[21];
  let Xye = B5e,
    U5e;
  if (Kc[22] === d) (U5e = e(t, { dimColor: true, children: "Host:" })), (Kc[22] = U5e);
  else U5e = Kc[22];
  const Zye = qA.kind === "full" && qA.needsGutter,
    eSe = qA.kind === "full" ? qA.text : qA.marker;
  let k5;
  if (Kc[23] !== eSe) (k5 = r(t, { children: [" ", eSe] })), (Kc[23] = eSe), (Kc[24] = k5);
  else k5 = Kc[24];
  let C5;
  if (Kc[25] !== Zye || Kc[26] !== k5)
    (C5 = r(o, { children: [U5e, e(zi, { multiline: Zye, children: k5 })] })),
      (Kc[25] = Zye),
      (Kc[26] = k5),
      (Kc[27] = C5);
  else C5 = Kc[27];
  let j5e;
  if (Kc[28] === d)
    (j5e = e(o, { marginTop: 1, children: e(t, { children: "Do you want to allow this connection?" }) })),
      (Kc[28] = j5e);
  else j5e = Kc[28];
  const tSe = !S5;
  let v5;
  if (Kc[29] !== Hf) (v5 = () => Hf("cancel", { allow: false, persistToSettings: false })), (Kc[29] = Hf), (Kc[30] = v5);
  else v5 = Kc[30];
  let w5;
  if (Kc[31] !== YO || Kc[32] !== Xye || Kc[33] !== zye || Kc[34] !== Qye || Kc[35] !== tSe || Kc[36] !== v5)
    (w5 = e(o, {
      children: e(Ce, { defaultFocusValue: zye, options: Xye, isDisabled: tSe, onChange: YO, onCancel: v5 }, Qye),
    })),
      (Kc[31] = YO),
      (Kc[32] = Xye),
      (Kc[33] = zye),
      (Kc[34] = Qye),
      (Kc[35] = tSe),
      (Kc[36] = v5),
      (Kc[37] = w5);
  else w5 = Kc[37];
  let T5;
  if (Kc[38] !== C5 || Kc[39] !== w5)
    (T5 = r(o, { flexDirection: "column", paddingX: 2, paddingY: 1, children: [C5, j5e, w5] })),
      (Kc[38] = C5),
      (Kc[39] = w5),
      (Kc[40] = T5);
  else T5 = Kc[40];
  let H5e;
  if (Kc[41] !== Vye || Kc[42] !== T5)
    (H5e = e(di, { title: "Network request outside of sandbox", requestSource: Vye, children: T5 })),
      (Kc[41] = Vye),
      (Kc[42] = T5),
      (Kc[43] = H5e);
  else H5e = Kc[43];
  return H5e;
}

F();

function nJe(Tpo) {
  return Tpo + 1;
}

function rJe() {}

var ySe = 24,
  bSe = 11;

function M5(Spo) {
  let Fm = _(43),
    { plan: nSe, onDone: rSe } = Spo;
  fs("ultraplan-choice");
  let [iSe, bpo] = u(0),
    [aSe, lSe] = xge(),
    W5e;
  if (Fm[0] !== rSe || Fm[1] !== lSe)
    (W5e = function JO(q5e) {
      if (rSe(q5e) === false) lSe(q5e), bpo(nJe);
    }),
      (Fm[0] = rSe),
      (Fm[1] = lSe),
      (Fm[2] = W5e);
  else W5e = Fm[2];
  let JO = W5e,
    { rows: kpo, columns: dSe } = Ee(),
    $f = Math.min(ySe, Math.max(1, Math.floor(kpo / 2) - bSe)),
    V5e;
  if (Fm[3] !== dSe || Fm[4] !== nSe)
    (V5e = l_(Ci(nSe), Math.max(1, dSe - 4), "wrap").split(`
`)),
      (Fm[3] = dSe),
      (Fm[4] = nSe),
      (Fm[5] = V5e);
  else V5e = Fm[5];
  let fS = V5e,
    uC = Math.max(0, fS.length - $f),
    [ph, G5e] = u(0),
    K5e,
    Q5e;
  if (Fm[6] !== uC)
    (K5e = () => G5e((Cpo) => Math.min(Cpo, uC))), (Q5e = [uC]), (Fm[6] = uC), (Fm[7] = K5e), (Fm[8] = Q5e);
  else (K5e = Fm[7]), (Q5e = Fm[8]);
  A(K5e, Q5e);
  let QA = fS.length > $f,
    z5e;
  if (Fm[9] !== uC || Fm[10] !== QA)
    (z5e = function gS(vpo) {
      if (!QA) {
        return;
      }
      G5e((wpo) => Math.max(0, Math.min(wpo + vpo, uC)));
    }),
      (Fm[9] = uC),
      (Fm[10] = QA),
      (Fm[11] = z5e);
  else z5e = Fm[11];
  let gS = z5e,
    Y5e;
  if (Fm[12] !== $f || Fm[13] !== gS)
    (Y5e = function XO(zA) {
      if (!zA.ctrl || zA.meta) {
        return;
      }
      let J5e = Math.max(1, Math.floor($f / 2));
      if (zA.key === "d") zA.preventDefault(), gS(J5e);
      else if (zA.key === "u") zA.preventDefault(), gS(-J5e);
    }),
      (Fm[12] = $f),
      (Fm[13] = gS),
      (Fm[14] = Y5e);
  else Y5e = Fm[14];
  let XO = Y5e,
    X5e;
  if (Fm[15] !== gS)
    (X5e = function ZO(Z5e) {
      Z5e.preventDefault(), gS(Z5e.deltaY > 0 ? 3 : -3);
    }),
      (Fm[15] = gS),
      (Fm[16] = X5e);
  else X5e = Fm[16];
  let ZO = X5e,
    eJe;
  if (Fm[17] !== fS || Fm[18] !== $f || Fm[19] !== ph)
    (eJe = fS.slice(ph, ph + $f).join(`
`)),
      (Fm[17] = fS),
      (Fm[18] = $f),
      (Fm[19] = ph),
      (Fm[20] = eJe);
  else eJe = Fm[20];
  let mSe = eJe,
    pSe = ph > 0,
    hSe = ph < uC,
    R5;
  if (Fm[21] !== mSe) (R5 = e(t, { children: mSe })), (Fm[21] = mSe), (Fm[22] = R5);
  else R5 = Fm[22];
  let x5;
  if (Fm[23] !== hSe || Fm[24] !== pSe || Fm[25] !== fS.length || Fm[26] !== $f || Fm[27] !== ph || Fm[28] !== QA)
    (x5 =
      QA &&
      r(t, {
        dimColor: true,
        children: [
          pSe ? L.arrowUp : " ",
          hSe ? L.arrowDown : " ",
          " ",
          ph + 1,
          "\u2013",
          Math.min(ph + $f, fS.length),
          " of",
          " ",
          fS.length,
          " \xB7 ctrl+u/ctrl+d to scroll",
        ],
      })),
      (Fm[23] = hSe),
      (Fm[24] = pSe),
      (Fm[25] = fS.length),
      (Fm[26] = $f),
      (Fm[27] = ph),
      (Fm[28] = QA),
      (Fm[29] = x5);
  else x5 = Fm[29];
  let P5;
  if (Fm[30] !== x5 || Fm[31] !== R5)
    (P5 = r(o, { flexDirection: "column", marginBottom: 1, children: [R5, x5] })),
      (Fm[30] = x5),
      (Fm[31] = R5),
      (Fm[32] = P5);
  else P5 = Fm[32];
  let tJe;
  if (Fm[33] === d)
    (tJe = [
      { label: "Implement here", value: "here", description: "Inject plan into the current conversation" },
      { label: "Start new session", value: "fresh", description: "Clear conversation and start with only the plan" },
      { label: "Cancel", value: "cancel", description: "Don't implement \u2014 save plan and return" },
    ]),
      (Fm[33] = tJe);
  else tJe = Fm[33];
  let A5;
  if (Fm[34] !== JO || Fm[35] !== iSe || Fm[36] !== aSe)
    (A5 = e(Ce, { defaultFocusValue: aSe, options: tJe, onChange: JO }, iSe)),
      (Fm[34] = JO),
      (Fm[35] = iSe),
      (Fm[36] = aSe),
      (Fm[37] = A5);
  else A5 = Fm[37];
  let oJe;
  if (Fm[38] !== XO || Fm[39] !== ZO || Fm[40] !== P5 || Fm[41] !== A5)
    (oJe = e(me, {
      title: "Ultraplan approved",
      subtitle: "How should the plan be implemented?",
      onCancel: rJe,
      isCancelActive: false,
      hideInputGuide: true,
      children: r(o, { flexDirection: "column", marginBottom: 1, onKeyDown: XO, onWheel: ZO, children: [P5, A5] }),
    })),
      (Fm[38] = XO),
      (Fm[39] = ZO),
      (Fm[40] = P5),
      (Fm[41] = A5),
      (Fm[42] = oJe);
  else oJe = Fm[42];
  return oJe;
}

F();

function QJe(Zpo, efo) {
  return e(t, { children: Zpo }, efo);
}

function pJ($po) {
  let Ul = _(91),
    { onDone: hS, tmuxAvailable: yS, accepts: fh } = $po,
    { storageV5: YA } = ge(),
    [Es, u_] = u("initial"),
    [Um, iJe] = u(null),
    [JA, kSe] = u(null),
    [Wpo, qpo] = u(Es),
    [I5, Vpo] = u(0);
  if (Wpo !== Es) qpo(Es), Vpo(Date.now());
  let Ap = hs(),
    { refusedWithin: yd, noteRefused: bd } = pi(),
    sJe;
  if (Ul[0] !== I5) (sJe = () => I5 !== 0 && bc(I5)), (Ul[0] = I5), (Ul[1] = sJe);
  else sJe = Ul[1];
  let kd = sJe,
    aJe;
  if (Ul[2] !== Ap || Ul[3] !== bd || Ul[4] !== yd || Ul[5] !== kd)
    (aJe = function Wf() {
      if (Ap() || kd() || yd()) {
        return bd(), true;
      }
      return false;
    }),
      (Ul[2] = Ap),
      (Ul[3] = bd),
      (Ul[4] = yd),
      (Ul[5] = kd),
      (Ul[6] = aJe);
  else aJe = Ul[6];
  let Wf = aJe,
    lJe,
    cJe;
  if (Ul[7] === d)
    (lJe = () => {
      kit().then((Gpo) => {
        iJe(Gpo);
      });
    }),
      (cJe = []),
      (Ul[7] = lJe),
      (Ul[8] = cJe);
  else (lJe = Ul[7]), (cJe = Ul[8]);
  A(lJe, cJe);
  let m_ = C(false),
    E5 = C(false),
    vSe = C(false),
    dJe;
  if (Ul[9] === d)
    (dJe = () => {
      m_.current = false;
    }),
      (Ul[9] = dJe);
  else dJe = Ul[9];
  A(dJe);
  let mJe;
  if (Ul[10] !== Ap || Ul[11] !== bd || Ul[12] !== hS || Ul[13] !== yd || Ul[14] !== kd)
    (mJe = () => {
      if (Ap() || kd() || yd()) {
        bd();
        return;
      }
      (E5.current = true), hS("cancelled");
    }),
      (Ul[10] = Ap),
      (Ul[11] = bd),
      (Ul[12] = hS),
      (Ul[13] = yd),
      (Ul[14] = kd),
      (Ul[15] = mJe);
  else mJe = Ul[15];
  let gh = mJe;
  const wSe = Es !== "installing" && Es !== "verifying" && Es !== "success";
  let pJe;
  if (Ul[16] !== wSe) (pJe = { context: "Confirmation", isActive: wSe }), (Ul[16] = wSe), (Ul[17] = pJe);
  else pJe = Ul[17];
  Be("confirm:no", gh, pJe);
  let fJe;
  if (Ul[18] !== hS)
    (fJe = () => {
      (E5.current = true), hS("installed");
    }),
      (Ul[18] = hS),
      (Ul[19] = fJe);
  else fJe = Ul[19];
  Yn(fJe, Es === "success" ? 1500 : null);
  let gJe;
  if (Ul[20] !== fh || Ul[21] !== bd || Ul[22] !== yd || Ul[23] !== kd || Ul[24] !== YA)
    (gJe = function dC() {
      if (kd() || yd()) {
        bd();
        return;
      }
      if (!fh()) {
        return;
      }
      if (m_.current) {
        return;
      }
      (m_.current = true),
        u_("verifying"),
        Etn().then((hJe) => {
          if (hJe.success) Ctn(YA), u_("success");
          else kSe(hJe.error), u_("failed");
        });
    }),
      (Ul[20] = fh),
      (Ul[21] = bd),
      (Ul[22] = yd),
      (Ul[23] = kd),
      (Ul[24] = YA),
      (Ul[25] = gJe);
  else gJe = Ul[25];
  let dC = gJe,
    yJe;
  if (Ul[26] !== dC || Ul[27] !== Es)
    (yJe = function eF(SJe) {
      if (Es === "api-instructions" && SJe.key === "return") SJe.preventDefault(), dC();
    }),
      (Ul[26] = dC),
      (Ul[27] = Es),
      (Ul[28] = yJe);
  else yJe = Ul[28];
  let eF = yJe,
    bJe;
  if (Ul[29] !== fh || Ul[30] !== Ap || Ul[31] !== bd || Ul[32] !== Um || Ul[33] !== yd || Ul[34] !== kd)
    (bJe = async function pC() {
      if (Ap() || kd() || yd()) {
        bd();
        return;
      }
      if (!fh()) {
        return;
      }
      if (m_.current || vSe.current) {
        return;
      }
      let oM = Um;
      if (!oM) {
        if (((vSe.current = true), (oM = await kit()), (vSe.current = false), E5.current || !fh())) {
          return;
        }
      }
      if (!oM) {
        kSe("No Python package manager found (uvx, pipx, or pip)"), u_("install-failed");
        return;
      }
      if (oM !== Um) iJe(oM);
      (m_.current = true), u_("installing");
      let kJe = await Ttn(oM);
      if (kJe.success) u_("api-instructions");
      else kSe(kJe.error), u_("install-failed");
    }),
      (Ul[29] = fh),
      (Ul[30] = Ap),
      (Ul[31] = bd),
      (Ul[32] = Um),
      (Ul[33] = yd),
      (Ul[34] = kd),
      (Ul[35] = bJe);
  else bJe = Ul[35];
  let pC = bJe,
    CJe;
  if (
    Ul[36] !== fh ||
    Ul[37] !== Ap ||
    Ul[38] !== bd ||
    Ul[39] !== hS ||
    Ul[40] !== yd ||
    Ul[41] !== kd ||
    Ul[42] !== YA
  )
    (CJe = function qf() {
      if (Ap() || kd() || yd()) {
        bd();
        return;
      }
      if (!fh()) {
        return;
      }
      if (m_.current) {
        return;
      }
      (m_.current = true), vtn(true, YA), (E5.current = true), hS("use-tmux");
    }),
      (Ul[36] = fh),
      (Ul[37] = Ap),
      (Ul[38] = bd),
      (Ul[39] = hS),
      (Ul[40] = yd),
      (Ul[41] = kd),
      (Ul[42] = YA),
      (Ul[43] = CJe);
  else CJe = Ul[43];
  let qf = CJe,
    vJe;
  if (Ul[44] === d)
    (vJe = e(t, { bold: true, color: "permission", children: "iTerm2 Split Pane Setup" })), (Ul[44] = vJe);
  else vJe = Ul[44];
  let D5;
  if (
    Ul[45] !== gh ||
    Ul[46] !== pC ||
    Ul[47] !== qf ||
    Ul[48] !== Um ||
    Ul[49] !== Wf ||
    Ul[50] !== Es ||
    Ul[51] !== yS
  )
    (D5 =
      Es === "initial" &&
      e(sJ, { refuseInput: Wf, packageManager: Um, tmuxAvailable: yS, onInstall: pC, onUseTmux: qf, onCancel: gh })),
      (Ul[45] = gh),
      (Ul[46] = pC),
      (Ul[47] = qf),
      (Ul[48] = Um),
      (Ul[49] = Wf),
      (Ul[50] = Es),
      (Ul[51] = yS),
      (Ul[52] = D5);
  else D5 = Ul[52];
  let N5;
  if (Ul[53] !== Um || Ul[54] !== Es)
    (N5 = Es === "installing" && e(aJ, { packageManager: Um })), (Ul[53] = Um), (Ul[54] = Es), (Ul[55] = N5);
  else N5 = Ul[55];
  let L5;
  if (
    Ul[56] !== JA ||
    Ul[57] !== gh ||
    Ul[58] !== pC ||
    Ul[59] !== qf ||
    Ul[60] !== Um ||
    Ul[61] !== Wf ||
    Ul[62] !== Es ||
    Ul[63] !== yS
  )
    (L5 =
      Es === "install-failed" &&
      e(lJ, {
        refuseInput: Wf,
        error: JA,
        packageManager: Um,
        tmuxAvailable: yS,
        onRetry: pC,
        onUseTmux: qf,
        onCancel: gh,
      })),
      (Ul[56] = JA),
      (Ul[57] = gh),
      (Ul[58] = pC),
      (Ul[59] = qf),
      (Ul[60] = Um),
      (Ul[61] = Wf),
      (Ul[62] = Es),
      (Ul[63] = yS),
      (Ul[64] = L5);
  else L5 = Ul[64];
  let O5;
  if (Ul[65] !== Es) (O5 = Es === "api-instructions" && e(cJ, {})), (Ul[65] = Es), (Ul[66] = O5);
  else O5 = Ul[66];
  let F5;
  if (Ul[67] !== Es) (F5 = Es === "verifying" && e(uJ, {})), (Ul[67] = Es), (Ul[68] = F5);
  else F5 = Ul[68];
  let H5;
  if (Ul[69] !== Es) (H5 = Es === "success" && e(dJ, {})), (Ul[69] = Es), (Ul[70] = H5);
  else H5 = Ul[70];
  let W5;
  if (
    Ul[71] !== JA ||
    Ul[72] !== gh ||
    Ul[73] !== qf ||
    Ul[74] !== dC ||
    Ul[75] !== Wf ||
    Ul[76] !== Es ||
    Ul[77] !== yS
  )
    (W5 =
      Es === "failed" &&
      e(mJ, { refuseInput: Wf, error: JA, tmuxAvailable: yS, onRetry: dC, onUseTmux: qf, onCancel: gh })),
      (Ul[71] = JA),
      (Ul[72] = gh),
      (Ul[73] = qf),
      (Ul[74] = dC),
      (Ul[75] = Wf),
      (Ul[76] = Es),
      (Ul[77] = yS),
      (Ul[78] = W5);
  else W5 = Ul[78];
  let q5;
  if (Ul[79] !== Es)
    (q5 =
      Es !== "installing" &&
      Es !== "verifying" &&
      Es !== "success" &&
      e(Ds, { children: e(M, { chord: "escape", action: "cancel" }) })),
      (Ul[79] = Es),
      (Ul[80] = q5);
  else q5 = Ul[80];
  let wJe;
  if (
    Ul[81] !== eF ||
    Ul[82] !== D5 ||
    Ul[83] !== N5 ||
    Ul[84] !== L5 ||
    Ul[85] !== O5 ||
    Ul[86] !== F5 ||
    Ul[87] !== H5 ||
    Ul[88] !== W5 ||
    Ul[89] !== q5
  )
    (wJe = e(fo, {
      color: "permission",
      children: r(o, {
        flexDirection: "column",
        gap: 1,
        paddingBottom: 1,
        tabIndex: 0,
        autoFocus: true,
        onKeyDown: eF,
        children: [vJe, D5, N5, L5, O5, F5, H5, W5, q5],
      }),
    })),
      (Ul[81] = eF),
      (Ul[82] = D5),
      (Ul[83] = N5),
      (Ul[84] = L5),
      (Ul[85] = O5),
      (Ul[86] = F5),
      (Ul[87] = H5),
      (Ul[88] = W5),
      (Ul[89] = q5),
      (Ul[90] = wJe);
  else wJe = Ul[90];
  return wJe;
}

function sJ(Kpo) {
  let p_ = _(18),
    { packageManager: TJe, tmuxAvailable: TSe, onInstall: _Se, onUseTmux: RSe, onCancel: sM, refuseInput: xSe } = Kpo;
  const ASe = TJe ? `Uses ${TJe} to install the it2 CLI tool` : "Requires Python (uvx, pipx, or pip)";
  let G5;
  if (p_[0] !== ASe)
    (G5 = { label: "Install it2 now", value: "install", description: ASe }), (p_[0] = ASe), (p_[1] = G5);
  else G5 = p_[1];
  let aM;
  if (p_[2] !== G5 || p_[3] !== TSe) {
    aM = [G5];
    if (TSe) {
      let fC;
      if (p_[5] === d)
        (fC = { label: "Use tmux instead", value: "tmux", description: "Opens teammates in a separate tmux session" }),
          (p_[5] = fC);
      else fC = p_[5];
      aM.push(fC);
    }
    let fC;
    if (p_[6] === d)
      (fC = { label: "Cancel", value: "cancel", description: "Skip teammate spawning for now" }), (p_[6] = fC);
    else fC = p_[6];
    aM.push(fC);
    (p_[2] = G5), (p_[3] = TSe), (p_[4] = aM);
  } else aM = p_[4];
  let fC, _Je;
  if (p_[7] === d)
    (fC = r(t, {
      children: [
        "To use native iTerm2 split panes for teammates, you need the",
        " ",
        e(t, { bold: true, children: "it2" }),
        " CLI tool.",
      ],
    })),
      (_Je = e(t, {
        dimColor: true,
        children: "This enables teammates to appear as split panes within your current window.",
      })),
      (p_[7] = fC),
      (p_[8] = _Je);
  else (fC = p_[7]), (_Je = p_[8]);
  let K5;
  if (p_[9] !== sM || p_[10] !== _Se || p_[11] !== RSe)
    (K5 = (Qpo) => {
      bb8: switch (Qpo) {
        case "install": {
          _Se();
          break bb8;
        }
        case "tmux": {
          RSe();
          break bb8;
        }
        case "cancel": {
          sM();
        }
      }
    }),
      (p_[9] = sM),
      (p_[10] = _Se),
      (p_[11] = RSe),
      (p_[12] = K5);
  else K5 = p_[12];
  let RJe;
  if (p_[13] !== sM || p_[14] !== aM || p_[15] !== xSe || p_[16] !== K5)
    (RJe = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [
        fC,
        _Je,
        e(o, {
          marginTop: 1,
          children: e(Ce, {
            refuseInput: xSe,
            hideIndexes: true,
            selectedValue: Ti,
            options: aM,
            onChange: K5,
            onCancel: sM,
          }),
        }),
      ],
    })),
      (p_[13] = sM),
      (p_[14] = aM),
      (p_[15] = xSe),
      (p_[16] = K5),
      (p_[17] = RJe);
  else RJe = p_[17];
  return RJe;
}

function aJ(zpo) {
  let Q5 = _(6),
    { packageManager: MSe } = zpo,
    xJe;
  if (Q5[0] === d) (xJe = e(wo, {})), (Q5[0] = xJe);
  else xJe = Q5[0];
  let z5;
  if (Q5[1] !== MSe)
    (z5 = r(o, { children: [xJe, r(t, { children: [" Installing it2 using ", MSe, "\u2026"] })] })),
      (Q5[1] = MSe),
      (Q5[2] = z5);
  else z5 = Q5[2];
  let PJe;
  if (Q5[3] === d) (PJe = e(t, { dimColor: true, children: "This may take a moment." })), (Q5[3] = PJe);
  else PJe = Q5[3];
  let AJe;
  if (Q5[4] !== z5) (AJe = r(o, { flexDirection: "column", gap: 1, children: [z5, PJe] })), (Q5[4] = z5), (Q5[5] = AJe);
  else AJe = Q5[5];
  return AJe;
}

function lJ(Ypo) {
  let hh = _(23),
    {
      error: Y5,
      packageManager: MJe,
      tmuxAvailable: ISe,
      onRetry: ESe,
      onUseTmux: NSe,
      onCancel: cM,
      refuseInput: LSe,
    } = Ypo,
    IJe;
  if (hh[0] === d) (IJe = { label: "Try again", value: "retry", description: "Retry the installation" }), (hh[0] = IJe);
  else IJe = hh[0];
  let mM;
  if (hh[1] !== ISe) {
    mM = [IJe];
    if (ISe) {
      let hC;
      if (hh[3] === d)
        (hC = { label: "Use tmux instead", value: "tmux", description: "Falls back to tmux for teammate panes" }),
          (hh[3] = hC);
      else hC = hh[3];
      mM.push(hC);
    }
    let hC;
    if (hh[4] === d)
      (hC = { label: "Cancel", value: "cancel", description: "Skip teammate spawning for now" }), (hh[4] = hC);
    else hC = hh[4];
    mM.push(hC);
    (hh[1] = ISe), (hh[2] = mM);
  } else mM = hh[2];
  let hC;
  if (hh[5] === d) (hC = e(t, { color: "error", children: "Installation failed" })), (hh[5] = hC);
  else hC = hh[5];
  let J5;
  if (hh[6] !== Y5) (J5 = Y5 && e(t, { dimColor: true, children: Y5 })), (hh[6] = Y5), (hh[7] = J5);
  else J5 = hh[7];
  const OSe = MJe === "uvx" ? "uv tool install it2" : MJe === "pipx" ? "pipx install it2" : "pip install --user it2";
  let X5;
  if (hh[8] !== OSe)
    (X5 = r(t, { dimColor: true, children: ["You can try installing manually:", " ", OSe] })),
      (hh[8] = OSe),
      (hh[9] = X5);
  else X5 = hh[9];
  let Z5;
  if (hh[10] !== cM || hh[11] !== ESe || hh[12] !== NSe)
    (Z5 = (Jpo) => {
      bb16: switch (Jpo) {
        case "retry": {
          ESe();
          break bb16;
        }
        case "tmux": {
          NSe();
          break bb16;
        }
        case "cancel": {
          cM();
        }
      }
    }),
      (hh[10] = cM),
      (hh[11] = ESe),
      (hh[12] = NSe),
      (hh[13] = Z5);
  else Z5 = hh[13];
  let eJ;
  if (hh[14] !== cM || hh[15] !== mM || hh[16] !== LSe || hh[17] !== Z5)
    (eJ = e(o, {
      marginTop: 1,
      children: e(Ce, {
        refuseInput: LSe,
        hideIndexes: true,
        selectedValue: Ti,
        options: mM,
        onChange: Z5,
        onCancel: cM,
      }),
    })),
      (hh[14] = cM),
      (hh[15] = mM),
      (hh[16] = LSe),
      (hh[17] = Z5),
      (hh[18] = eJ);
  else eJ = hh[18];
  let EJe;
  if (hh[19] !== J5 || hh[20] !== X5 || hh[21] !== eJ)
    (EJe = r(o, { flexDirection: "column", gap: 1, children: [hC, J5, X5, eJ] })),
      (hh[19] = J5),
      (hh[20] = X5),
      (hh[21] = eJ),
      (hh[22] = EJe);
  else EJe = hh[22];
  return EJe;
}

function cJ() {
  let DJe = _(6),
    NJe,
    LJe,
    OJe,
    FJe,
    jJe;
  if (DJe[0] === d) {
    let Xpo = Atn();
    NJe = o;
    LJe = "column";
    OJe = 1;
    FJe = r(t, {
      color: "success",
      children: [e(tt, { status: "success", withSpace: true }), "it2 installed successfully"],
    });
    jJe = e(o, { flexDirection: "column", marginTop: 1, children: Xpo.map(QJe) });
    (DJe[0] = NJe), (DJe[1] = LJe), (DJe[2] = OJe), (DJe[3] = FJe), (DJe[4] = jJe);
  } else (NJe = DJe[0]), (LJe = DJe[1]), (OJe = DJe[2]), (FJe = DJe[3]), (jJe = DJe[4]);
  let HJe;
  if (DJe[5] === d)
    (HJe = r(NJe, {
      flexDirection: LJe,
      gap: OJe,
      children: [
        FJe,
        jJe,
        e(o, { marginTop: 1, children: e(t, { dimColor: true, children: "Press Enter when ready to verify\u2026" }) }),
      ],
    })),
      (DJe[5] = HJe);
  else HJe = DJe[5];
  return HJe;
}

function uJ() {
  let tfo = _(1),
    $Je;
  if (tfo[0] === d)
    ($Je = r(o, { children: [e(wo, {}), e(t, { children: " Verifying it2 can communicate with iTerm2\u2026" })] })),
      (tfo[0] = $Je);
  else $Je = tfo[0];
  return $Je;
}

function dJ() {
  let ofo = _(1),
    WJe;
  if (ofo[0] === d)
    (WJe = r(o, {
      flexDirection: "column",
      children: [
        r(t, {
          color: "success",
          children: [e(tt, { status: "success", withSpace: true }), "iTerm2 split pane support is ready"],
        }),
        e(t, { dimColor: true, children: "Teammates will now appear as split panes." }),
      ],
    })),
      (ofo[0] = WJe);
  else WJe = ofo[0];
  return WJe;
}

function mJ(nfo) {
  let Gf = _(22),
    { error: tJ, tmuxAvailable: FSe, onRetry: BSe, onUseTmux: USe, onCancel: pM, refuseInput: jSe } = nfo,
    qJe;
  if (Gf[0] === d)
    (qJe = { label: "Try again", value: "retry", description: "Verify the connection again" }), (Gf[0] = qJe);
  else qJe = Gf[0];
  let fM;
  if (Gf[1] !== FSe) {
    fM = [qJe];
    if (FSe) {
      let yC;
      if (Gf[3] === d)
        (yC = { label: "Use tmux instead", value: "tmux", description: "Falls back to tmux for teammate panes" }),
          (Gf[3] = yC);
      else yC = Gf[3];
      fM.push(yC);
    }
    let yC;
    if (Gf[4] === d)
      (yC = { label: "Cancel", value: "cancel", description: "Skip teammate spawning for now" }), (Gf[4] = yC);
    else yC = Gf[4];
    fM.push(yC);
    (Gf[1] = FSe), (Gf[2] = fM);
  } else fM = Gf[2];
  let yC;
  if (Gf[5] === d) (yC = e(t, { color: "error", children: "Verification failed" })), (Gf[5] = yC);
  else yC = Gf[5];
  let nJ;
  if (Gf[6] !== tJ) (nJ = tJ && e(t, { dimColor: true, children: tJ })), (Gf[6] = tJ), (Gf[7] = nJ);
  else nJ = Gf[7];
  let VJe;
  if (Gf[8] === d) (VJe = e(t, { children: "Make sure:" })), (Gf[8] = VJe);
  else VJe = Gf[8];
  let GJe;
  if (Gf[9] === d)
    (GJe = r(o, {
      flexDirection: "column",
      paddingLeft: 2,
      children: [
        e(t, { children: "\xB7 Python API is enabled in iTerm2 preferences" }),
        e(t, { children: "\xB7 You may need to restart iTerm2 after enabling" }),
      ],
    })),
      (Gf[9] = GJe);
  else GJe = Gf[9];
  let rJ;
  if (Gf[10] !== pM || Gf[11] !== BSe || Gf[12] !== USe)
    (rJ = (rfo) => {
      bb8: switch (rfo) {
        case "retry": {
          BSe();
          break bb8;
        }
        case "tmux": {
          USe();
          break bb8;
        }
        case "cancel": {
          pM();
        }
      }
    }),
      (Gf[10] = pM),
      (Gf[11] = BSe),
      (Gf[12] = USe),
      (Gf[13] = rJ);
  else rJ = Gf[13];
  let iJ;
  if (Gf[14] !== pM || Gf[15] !== fM || Gf[16] !== jSe || Gf[17] !== rJ)
    (iJ = e(o, {
      marginTop: 1,
      children: e(Ce, {
        refuseInput: jSe,
        hideIndexes: true,
        selectedValue: Ti,
        options: fM,
        onChange: rJ,
        onCancel: pM,
      }),
    })),
      (Gf[14] = pM),
      (Gf[15] = fM),
      (Gf[16] = jSe),
      (Gf[17] = rJ),
      (Gf[18] = iJ);
  else iJ = Gf[18];
  let KJe;
  if (Gf[19] !== nJ || Gf[20] !== iJ)
    (KJe = r(o, { flexDirection: "column", gap: 1, children: [yC, nJ, VJe, GJe, iJ] })),
      (Gf[19] = nJ),
      (Gf[20] = iJ),
      (Gf[21] = KJe);
  else KJe = Gf[21];
  return KJe;
}

F();

F();

F();

var $Se = 2000,
  WSe = "(preview cannot be shown in full \u2014 compare the option labels and descriptions instead)";

F();

function sXe(Ifo) {
  return se(Ifo);
}

var Ia = {
  topLeft: "\u250C",
  topRight: "\u2510",
  bottomLeft: "\u2514",
  bottomRight: "\u2518",
  horizontal: "\u2500",
  vertical: "\u2502",
  teeLeft: "\u251C",
  teeRight: "\u2524",
};

function wJ(qSe) {
  let zJe = _(5),
    VSe = Ts(),
    YJe;
  if (zJe[0] !== VSe.syntaxHighlightingDisabled)
    (YJe = VSe.syntaxHighlightingDisabled ? null : OR()), (zJe[0] = VSe.syntaxHighlightingDisabled), (zJe[1] = YJe);
  else YJe = zJe[1];
  let GSe = YJe,
    JJe;
  if (zJe[2] !== GSe || zJe[3] !== qSe)
    (JJe = e(vJ, { ...qSe, highlight: GSe })), (zJe[2] = GSe), (zJe[3] = qSe), (zJe[4] = JJe);
  else JJe = zJe[4];
  return JJe;
}

function vJ(kfo) {
  let yh = _(37),
    { content: KSe, maxLines: Cfo, minHeight: zSe, minWidth: XJe, maxWidth: vfo, highlight: JSe } = kfo,
    ebe = XJe === void 0 ? 40 : XJe,
    { columns: wfo } = Ee(),
    [tbe] = mn(),
    fJ = vfo ?? wfo - 4,
    gM = Cfo ?? 20,
    ZJe;
  if (yh[0] !== KSe || yh[1] !== JSe || yh[2] !== tbe)
    (ZJe = RBe(KSe, tbe, JSe)), (yh[0] = KSe), (yh[1] = JSe), (yh[2] = tbe), (yh[3] = ZJe);
  else ZJe = yh[3];
  let obe = ZJe,
    hM = Math.max(1, fJ - 4),
    hJ,
    yJ,
    SJ,
    tF,
    bJ,
    oF;
  if (yh[4] !== gM || yh[5] !== fJ || yh[6] !== zSe || yh[7] !== ebe || yh[8] !== obe || yh[9] !== hM) {
    let g_;
    if (yh[16] !== hM)
      (g_ = (nbe) =>
        se(nbe) > hM
          ? Nf(nbe, hM, { hard: true, trim: false }).split(`
`)
          : nbe),
        (yh[16] = hM),
        (yh[17] = g_);
    else g_ = yh[17];
    let kJ = obe
      .split(`
`)
      .flatMap(g_);
    let rbe = kJ.length > gM;
    let sbe = rbe ? kJ.slice(0, gM) : kJ;
    let Tfo = Math.min(zSe ?? 0, gM);
    let eXe = Math.max(0, Tfo - sbe.length - (rbe ? 1 : 0));
    let tXe = eXe > 0 ? [...sbe, ...Array(eXe).fill("")] : sbe;
    let _fo = Math.max(ebe, ...tXe.map(sXe));
    let CJ = Math.max(4, Math.min(_fo + 4, fJ));
    let nF = CJ - 4;
    const SC = CJ - 2;
    let rF;
    if (yh[18] !== SC) (rF = gi(Ia.horizontal, SC)), (yh[18] = SC), (yh[19] = rF);
    else rF = yh[19];
    let abe = `${Ia.topLeft}${rF}${Ia.topRight}`;
    const lbe = CJ - 2;
    let oXe;
    if (yh[20] !== lbe) (oXe = gi(Ia.horizontal, lbe)), (yh[20] = lbe), (yh[21] = oXe);
    else oXe = yh[21];
    yJ = `${Ia.bottomLeft}${oXe}${Ia.bottomRight}`;
    oF = rbe
      ? (() => {
          let Rfo = kJ.length - gM;
          let nXe = `${Ia.horizontal.repeat(3)} \u2702 ${Ia.horizontal.repeat(3)} ${Rfo} lines hidden `;
          let xfo = se(nXe);
          let Pfo = Math.max(0, CJ - 2 - xfo);
          return `${Ia.teeLeft}${nXe}${Ia.horizontal.repeat(Pfo)}${Ia.teeRight}`;
        })()
      : null;
    hJ = o;
    SJ = "column";
    if (yh[22] !== abe) (tF = e(t, { dimColor: true, children: abe })), (yh[22] = abe), (yh[23] = tF);
    else tF = yh[23];
    let rXe;
    if (yh[24] !== nF)
      (rXe = (cbe, Afo) => {
        let iXe = se(cbe) > nF ? wT(cbe, 0, nF) : cbe;
        let Mfo = " ".repeat(Math.max(0, nF - se(iXe)));
        return r(
          o,
          {
            flexDirection: "row",
            children: [
              r(t, { dimColor: true, children: [Ia.vertical, " "] }),
              e(oo, { children: iXe }),
              r(t, { dimColor: true, children: [Mfo, " ", Ia.vertical] }),
            ],
          },
          Afo,
        );
      }),
        (yh[24] = nF),
        (yh[25] = rXe);
    else rXe = yh[25];
    bJ = tXe.map(rXe);
    (yh[4] = gM),
      (yh[5] = fJ),
      (yh[6] = zSe),
      (yh[7] = ebe),
      (yh[8] = obe),
      (yh[9] = hM),
      (yh[10] = hJ),
      (yh[11] = yJ),
      (yh[12] = SJ),
      (yh[13] = tF),
      (yh[14] = bJ),
      (yh[15] = oF);
  } else (hJ = yh[10]), (yJ = yh[11]), (SJ = yh[12]), (tF = yh[13]), (bJ = yh[14]), (oF = yh[15]);
  let g_;
  if (yh[26] !== oF) (g_ = oF && e(t, { color: "warning", children: oF })), (yh[26] = oF), (yh[27] = g_);
  else g_ = yh[27];
  let SC;
  if (yh[28] !== yJ) (SC = e(t, { dimColor: true, children: yJ })), (yh[28] = yJ), (yh[29] = SC);
  else SC = yh[29];
  let rF;
  if (yh[30] !== hJ || yh[31] !== SJ || yh[32] !== tF || yh[33] !== bJ || yh[34] !== g_ || yh[35] !== SC)
    (rF = r(hJ, { flexDirection: SJ, children: [tF, bJ, g_, SC] })),
      (yh[30] = hJ),
      (yh[31] = SJ),
      (yh[32] = tF),
      (yh[33] = bJ),
      (yh[34] = g_),
      (yh[35] = SC),
      (yh[36] = rF);
  else rF = yh[36];
  return rF;
}

F();

function dXe(ngo, rgo) {
  return ngo?.displayHeader || `Q${rgo + 1}`;
}

function mXe(igo) {
  return 4 + se(igo);
}

function pXe(sgo, ago) {
  return sgo + ago;
}

function kh($fo) {
  let Sh = _(39),
    { questions: wu, currentQuestionIndex: Ga, answers: iF, hideSubmitTab: aXe } = $fo,
    h_ = aXe === void 0 ? false : aXe,
    { columns: ube } = Ee(),
    aF;
  if (Sh[0] !== ube || Sh[1] !== Ga || Sh[2] !== h_ || Sh[3] !== wu) {
    bb0: {
      let Wfo = h_ ? "" : ` ${L.tick} Submit `;
      let qfo = se("\u2190 ") + se(" \u2192") + se(Wfo);
      let TJ = ube - qfo;
      if (TJ <= 0) {
        let bh;
        if (Sh[5] !== Ga || Sh[6] !== wu) {
          let y_;
          if (Sh[8] !== Ga)
            (y_ = (Vfo, lXe) => {
              let Gfo = Vfo?.displayHeader || `Q${lXe + 1}`;
              return lXe === Ga ? rt(Gfo, 3) : "";
            }),
              (Sh[8] = Ga),
              (Sh[9] = y_);
          else y_ = Sh[9];
          bh = wu.map(y_);
          (Sh[5] = Ga), (Sh[6] = wu), (Sh[7] = bh);
        } else bh = Sh[7];
        aF = bh;
        break bb0;
      }
      let _J = wu.map(dXe);
      if (_J.map(mXe).reduce(pXe, 0) <= TJ) {
        aF = _J;
        break bb0;
      }
      let Kfo = _J[Ga] || "";
      let Qfo = 4 + se(Kfo);
      let RJ = Math.min(Qfo, TJ / 2);
      let zfo = TJ - RJ;
      let Yfo = wu.length - 1;
      let dbe = Math.max(6, Math.floor(zfo / Math.max(Yfo, 1)));
      let bh;
      if (Sh[10] !== Ga || Sh[11] !== RJ || Sh[12] !== dbe)
        (bh = (cXe, Jfo) => {
          if (Jfo === Ga) {
            let Xfo = RJ - 2 - 2;
            return rt(cXe, Xfo);
          } else {
            let Zfo = dbe - 2 - 2;
            return rt(cXe, Zfo);
          }
        }),
          (Sh[10] = Ga),
          (Sh[11] = RJ),
          (Sh[12] = dbe),
          (Sh[13] = bh);
      else bh = Sh[13];
      aF = _J.map(bh);
    }
    (Sh[0] = ube), (Sh[1] = Ga), (Sh[2] = h_), (Sh[3] = wu), (Sh[4] = aF);
  } else aF = Sh[4];
  let lF = aF,
    yM = wu.length === 1 && h_,
    bh;
  if (Sh[14] !== Ga || Sh[15] !== yM)
    (bh = !yM && r(t, { color: Ga === 0 ? "inactive" : void 0, children: ["\u2190", " "] })),
      (Sh[14] = Ga),
      (Sh[15] = yM),
      (Sh[16] = bh);
  else bh = Sh[16];
  let y_;
  if (Sh[17] !== iF || Sh[18] !== Ga || Sh[19] !== wu || Sh[20] !== lF) {
    let S_;
    if (Sh[22] !== iF || Sh[23] !== Ga || Sh[24] !== lF)
      (S_ = (xJ, AJ) => {
        let ego = AJ === Ga;
        let tgo = xJ?.key && !!iF[xJ.key] ? L.checkboxOn : L.checkboxOff;
        let ogo = lF[AJ] || xJ?.displayHeader || `Q${AJ + 1}`;
        return e(
          o,
          { children: r(Dc, { color: ego ? "permission" : void 0, padded: true, children: [tgo, " ", ogo] }) },
          xJ?.key || `question-${AJ}`,
        );
      }),
        (Sh[22] = iF),
        (Sh[23] = Ga),
        (Sh[24] = lF),
        (Sh[25] = S_);
    else S_ = Sh[25];
    y_ = wu.map(S_);
    (Sh[17] = iF), (Sh[18] = Ga), (Sh[19] = wu), (Sh[20] = lF), (Sh[21] = y_);
  } else y_ = Sh[21];
  let S_;
  if (Sh[26] !== Ga || Sh[27] !== h_ || Sh[28] !== wu.length)
    (S_ =
      !h_ &&
      e(
        o,
        {
          children: r(Dc, {
            color: Ga === wu.length ? "permission" : void 0,
            padded: true,
            children: [L.tick, " Submit"],
          }),
        },
        "submit",
      )),
      (Sh[26] = Ga),
      (Sh[27] = h_),
      (Sh[28] = wu.length),
      (Sh[29] = S_);
  else S_ = Sh[29];
  let MJ;
  if (Sh[30] !== Ga || Sh[31] !== yM || Sh[32] !== wu.length)
    (MJ = !yM && r(t, { color: Ga === wu.length ? "inactive" : void 0, children: [" ", "\u2192"] })),
      (Sh[30] = Ga),
      (Sh[31] = yM),
      (Sh[32] = wu.length),
      (Sh[33] = MJ);
  else MJ = Sh[33];
  let uXe;
  if (Sh[34] !== bh || Sh[35] !== y_ || Sh[36] !== S_ || Sh[37] !== MJ)
    (uXe = r(o, { flexDirection: "row", marginBottom: 1, children: [bh, y_, S_, MJ] })),
      (Sh[34] = bh),
      (Sh[35] = y_),
      (Sh[36] = S_),
      (Sh[37] = MJ),
      (Sh[38] = uXe);
  else uXe = Sh[38];
  return uXe;
}

function IJ({
  accepts: S,
  question: x,
  questions: P,
  currentQuestionIndex: j,
  answers: H,
  questionStates: Z,
  hideSubmitTab: re = false,
  minContentWidth: ue,
  onUpdateQuestionState: de,
  onAnswer: pe,
  onTextInputFocus: Re,
  onCancel: be,
  onTabPrev: Pe,
  onTabNext: Oe,
  onRespondToClaude: Ie,
}) {
  let [He, Fe] = u(false),
    [Ve, Ke] = u(false),
    [ot, st] = u(0),
    nt = vS(),
    Pt = nt ? Bg(nt) : null,
    kt = x.key,
    Ht = Z[kt],
    yt = x.options,
    [lt, Rt] = u(0),
    to = C(kt);
  if (to.current !== kt) {
    to.current = kt;
    let Go = Ht?.selectedValue,
      Oo = Go ? yt.findIndex((xo) => xo.value === Go) : -1;
    Rt(Oo >= 0 ? Oo : 0);
  }
  let so = yt[lt],
    jt = Ht?.selectedValue,
    Gt = Ht?.textInputValue || "",
    vo = B(
      (Go) => {
        let Oo = yt[Go];
        if (!Oo) return;
        if ((Rt(Go), !S())) return;
        de(kt, { selectedValue: Oo.value }, false), pe(kt, Oo.value);
      },
      [S, yt, kt, de, pe],
    ),
    qt = B(
      (Go) => {
        if (Ve) return;
        let Oo;
        if (typeof Go === "number") Oo = Go;
        else if (Go === "up") Oo = lt > 0 ? lt - 1 : lt;
        else Oo = lt < yt.length - 1 ? lt + 1 : lt;
        if (Oo >= 0 && Oo < yt.length) Rt(Oo);
      },
      [lt, yt.length, Ve],
    );
  Be(
    "chat:externalEditor",
    async () => {
      if (!S()) return;
      let Go = Ht?.textInputValue || "",
        Oo = await WP(Go);
      if (Oo.content !== null && Oo.content !== Go) {
        if (!S()) return;
        de(kt, { textInputValue: Oo.content }, false);
      }
    },
    { context: "Chat", isActive: Ve && !!nt },
  ),
    ht({ "tabs:previous": Pe, "tabs:next": Oe }, { context: "Tabs", isActive: !Ve && !He });
  let lo = B(() => {
      Ke(false), Re(false);
    }, [Re]),
    To = B(() => {
      if ((lo(), !S())) return;
      if (jt) pe(kt, jt);
      else if (Gt.trim()) pe(kt, kFt);
    }, [lo, S, jt, Gt, kt, pe]),
    ao = B(() => {
      Fe(true);
    }, []),
    jo = B(() => {
      Fe(false);
    }, []),
    Qo = B(
      (Go) => {
        if (He) {
          if (Go.key === "up" || (Go.ctrl && Go.key === "p")) {
            Go.preventDefault(), jo();
            return;
          }
          if (Go.key === "return") {
            Go.preventDefault(), Ie();
            return;
          }
          if (Go.key === "escape") Go.preventDefault(), be();
          return;
        }
        if (Ve) {
          if (Go.key === "escape") Go.preventDefault(), lo();
          return;
        }
        if (Go.key === "up" || (Go.ctrl && Go.key === "p")) {
          if ((Go.preventDefault(), lt > 0)) qt("up");
        } else if (Go.key === "down" || (Go.ctrl && Go.key === "n"))
          if ((Go.preventDefault(), lt === yt.length - 1)) ao();
          else qt("down");
        else if (Go.key === "return") Go.preventDefault(), vo(lt);
        else if (Go.key === "n" && !Go.ctrl && !Go.meta) Go.preventDefault(), Ke(true), Re(true);
        else if (Go.key === "escape") Go.preventDefault(), be();
        else if (Go.key.length === 1 && Go.key >= "1" && Go.key <= "9") {
          Go.preventDefault();
          let Oo = parseInt(Go.key, 10) - 1;
          if (Oo < yt.length) qt(Oo);
        }
      },
      [He, Ve, lt, yt.length, jo, ao, qt, vo, lo, Ie, be, Re],
    ),
    uo = so?.preview === void 0 ? null : so.preview.kind === "full" ? so.preview.markdown : WSe,
    Pn = 30,
    Yt = 4,
    { columns: No, rows: cn } = Ee(),
    tn = No - Pn - Yt,
    pn = Math.max(1, cn - 26);
  return r(o, {
    flexDirection: "column",
    marginTop: 1,
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: Qo,
    children: [
      e(ql, { color: "inactive" }),
      r(o, {
        flexDirection: "column",
        paddingTop: 0,
        children: [
          e(kh, { questions: P, currentQuestionIndex: j, answers: H, hideSubmitTab: re }),
          e(zi, {
            multiline: x.displayQuestion.needsGutter,
            children: e(yq, { title: x.displayQuestion.text, color: "text" }),
          }),
          r(o, {
            flexDirection: "column",
            children: [
              r(o, {
                marginTop: 1,
                flexDirection: "row",
                gap: 4,
                children: [
                  e(o, {
                    flexDirection: "column",
                    width: 30,
                    children: yt.map((Go, Oo) => {
                      let xo = lt === Oo,
                        dn = jt === Go.value;
                      return r(
                        o,
                        {
                          flexDirection: "row",
                          children: [
                            xo ? e(t, { color: "suggestion", children: L.pointer }) : e(t, { children: " " }),
                            r(t, { dimColor: true, children: [" ", Oo + 1, "."] }),
                            r(t, {
                              color: dn ? "success" : xo ? "suggestion" : void 0,
                              bold: xo,
                              children: [" ", Go.displayLabel],
                            }),
                            dn && r(t, { color: "success", children: [" ", L.tick] }),
                          ],
                        },
                        Go.value,
                      );
                    }),
                  }),
                  r(o, {
                    flexDirection: "column",
                    flexGrow: 1,
                    children: [
                      e(wJ, { content: uo || "No preview available", maxLines: pn, minWidth: ue, maxWidth: tn }),
                      r(o, {
                        marginTop: 1,
                        flexDirection: "row",
                        gap: 1,
                        children: [
                          e(t, { color: "suggestion", children: "Notes:" }),
                          Ve
                            ? e(xn, {
                                value: Gt,
                                placeholder: "Add notes on this design\u2026",
                                onChange: (Go) => {
                                  if (!S()) return;
                                  de(kt, { textInputValue: Go }, false);
                                },
                                onSubmit: To,
                                onExit: lo,
                                focus: true,
                                showCursor: true,
                                columns: 60,
                                cursorOffset: ot,
                                onChangeCursorOffset: st,
                                disableEscapeDoublePress: true,
                              })
                            : e(t, { dimColor: true, italic: true, children: Gt || "press n to add notes" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              r(o, {
                flexDirection: "column",
                marginTop: 1,
                children: [
                  e(ql, { color: "inactive" }),
                  r(o, {
                    flexDirection: "row",
                    gap: 1,
                    children: [
                      He ? e(t, { color: "suggestion", children: L.pointer }) : e(t, { children: " " }),
                      e(t, { color: He ? "suggestion" : void 0, children: "Chat about this" }),
                    ],
                  }),
                ],
              }),
              e(o, {
                marginTop: 1,
                children: e(t, {
                  color: "inactive",
                  dimColor: true,
                  children: r(fe, {
                    children: [
                      e(M, { chord: "enter", action: "select" }),
                      e(M, { chord: ["up", "down"], action: "navigate" }),
                      e(M, { chord: "n", action: "add notes" }),
                      P.length > 1 && e(M, { chord: "tab", action: "switch questions" }),
                      Ve && Pt && e(M, { chord: "ctrl+g", action: `edit in ${Pt}` }),
                      e(M, { chord: "escape", action: "cancel" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function qXe(cho) {
  return cho.toolPermissionContext.mode;
}

function VXe(wbe) {
  return { type: "text", value: wbe.value, label: wbe.displayLabel, description: Bo(wbe.displayDescription) };
}

function GXe(uho) {
  return uho.preview !== void 0;
}

function KXe(dho) {
  return dho !== "__other__";
}

function mF(Ygo) {
  let Bu = _(65),
    {
      accepts: jm,
      question: ya,
      questions: Ch,
      currentQuestionIndex: b_,
      answers: SM,
      questionStates: bC,
      hideSubmitTab: fXe,
      planFilePath: EJ,
      minContentWidth: pbe,
      onUpdateQuestionState: zf,
      onAnswer: cF,
      onTextInputFocus: bM,
      onCancel: kC,
      onSubmit: Jgo,
      onTabPrev: gbe,
      onTabNext: ybe,
      onRespondToClaude: CC,
      canPasteImage: gXe,
      onImagePaste: yXe,
      pastedContents: bXe,
      onRemoveImage: kXe,
    } = Ygo,
    kM = fXe === void 0 ? false : fXe,
    Sbe = W(qXe) === "plan",
    vh = hn(),
    [SS, CXe] = u(false),
    [CM, Xgo] = u(false),
    vXe;
  if (Bu[0] === d) {
    let wXe = vS();
    vXe = wXe ? Bg(wXe) : null;
    Bu[0] = vXe;
  } else vXe = Bu[0];
  let TXe = vXe,
    _Xe;
  if (Bu[1] !== bM)
    (_Xe = (Zgo) => {
      let RXe = Zgo === "__other__";
      Xgo(RXe), bM(RXe);
    }),
      (Bu[1] = bM),
      (Bu[2] = _Xe);
  else _Xe = Bu[2];
  let xXe = _Xe,
    PXe;
  if (Bu[3] === d)
    (PXe = () => {
      CXe(true);
    }),
      (Bu[3] = PXe);
  else PXe = Bu[3];
  let AXe = PXe,
    MXe;
  if (Bu[4] === d)
    (MXe = () => {
      CXe(false);
    }),
      (Bu[4] = MXe);
  else MXe = Bu[4];
  let eho = MXe,
    k_ = ya.options.length + 1 + 1,
    IXe;
  if (Bu[5] !== k_ || Bu[6] !== SS || Bu[7] !== CM || Bu[8] !== vh || Bu[9] !== kC || Bu[10] !== CC)
    (IXe = (Yf) => {
      if (!SS) {
        if (!vh && !CM && H0(Yf.key) === String(k_)) Yf.preventDefault(), CC();
        return;
      }
      if (Yf.key === "up" || (Yf.ctrl && Yf.key === "p")) {
        Yf.preventDefault(), eho();
        return;
      }
      if (Yf.key === "return" || H0(Yf.key) === String(k_)) {
        Yf.preventDefault(), CC();
        return;
      }
      if (Yf.key === "escape") Yf.preventDefault(), kC();
    }),
      (Bu[5] = k_),
      (Bu[6] = SS),
      (Bu[7] = CM),
      (Bu[8] = vh),
      (Bu[9] = kC),
      (Bu[10] = CC),
      (Bu[11] = IXe);
  else IXe = Bu[11];
  let tho = IXe,
    oho = ya.options.map(VXe),
    Cd = ya.key,
    nho = bC[Cd],
    bbe = C(null),
    EXe;
  if (Bu[12] !== jm || Bu[13] !== zf || Bu[14] !== ya.multiSelect || Bu[15] !== Cd)
    (EXe = async (DXe, rho) => {
      if (!jm()) {
        return;
      }
      let DJ = await WP(DXe);
      if (DJ.content !== null && DJ.content !== DXe) {
        if (!jm()) {
          return;
        }
        rho(DJ.content), zf(Cd, { textInputValue: DJ.content }, ya.multiSelect ?? false);
      }
    }),
      (Bu[12] = jm),
      (Bu[13] = zf),
      (Bu[14] = ya.multiSelect),
      (Bu[15] = Cd),
      (Bu[16] = EXe);
  else EXe = Bu[16];
  let NXe = EXe;
  const kbe = ya.multiSelect ? "Type something" : "Type something.",
    Cbe = nho?.textInputValue ?? "";
  let LJ;
  if (Bu[17] !== jm || Bu[18] !== zf || Bu[19] !== ya.multiSelect || Bu[20] !== Cd)
    (LJ = (LXe) => {
      if (!jm()) {
        return false;
      }
      (bbe.current = { question: Cd, value: LXe }), zf(Cd, { textInputValue: LXe }, ya.multiSelect ?? false);
    }),
      (Bu[17] = jm),
      (Bu[18] = zf),
      (Bu[19] = ya.multiSelect),
      (Bu[20] = Cd),
      (Bu[21] = LJ);
  else LJ = Bu[21];
  let OXe;
  if (Bu[22] !== LJ || Bu[23] !== kbe || Bu[24] !== Cbe)
    (OXe = { type: "input", value: "__other__", label: "Other", placeholder: kbe, initialValue: Cbe, onChange: LJ }),
      (Bu[22] = LJ),
      (Bu[23] = kbe),
      (Bu[24] = Cbe),
      (Bu[25] = OXe);
  else OXe = Bu[25];
  let iho = OXe,
    FXe;
  if (Bu[26] !== vh || Bu[27] !== ya.multiSelect)
    (FXe = vh && !ya.multiSelect ? [{ type: "text", value: "__chat__", label: "Chat about this" }] : []),
      (Bu[26] = vh),
      (Bu[27] = ya.multiSelect),
      (Bu[28] = FXe);
  else FXe = Bu[28];
  let sho = FXe,
    BXe = [...oho, iho, ...sho];
  if (!ya.multiSelect && ya.options.some(GXe) && !vh) {
    let uF;
    if (
      Bu[29] !== jm ||
      Bu[30] !== SM ||
      Bu[31] !== b_ ||
      Bu[32] !== kM ||
      Bu[33] !== pbe ||
      Bu[34] !== cF ||
      Bu[35] !== kC ||
      Bu[36] !== CC ||
      Bu[37] !== ybe ||
      Bu[38] !== gbe ||
      Bu[39] !== bM ||
      Bu[40] !== zf ||
      Bu[41] !== ya ||
      Bu[42] !== bC ||
      Bu[43] !== Ch
    )
      (uF = e(IJ, {
        accepts: jm,
        question: ya,
        questions: Ch,
        currentQuestionIndex: b_,
        answers: SM,
        questionStates: bC,
        hideSubmitTab: kM,
        minContentWidth: pbe,
        onUpdateQuestionState: zf,
        onAnswer: cF,
        onTextInputFocus: bM,
        onCancel: kC,
        onTabPrev: gbe,
        onTabNext: ybe,
        onRespondToClaude: CC,
      })),
        (Bu[29] = jm),
        (Bu[30] = SM),
        (Bu[31] = b_),
        (Bu[32] = kM),
        (Bu[33] = pbe),
        (Bu[34] = cF),
        (Bu[35] = kC),
        (Bu[36] = CC),
        (Bu[37] = ybe),
        (Bu[38] = gbe),
        (Bu[39] = bM),
        (Bu[40] = zf),
        (Bu[41] = ya),
        (Bu[42] = bC),
        (Bu[43] = Ch),
        (Bu[44] = uF);
    else uF = Bu[44];
    return uF;
  }
  let uF;
  if (Bu[45] !== Sbe || Bu[46] !== EJ)
    (uF =
      Sbe &&
      EJ &&
      r(o, {
        flexDirection: "column",
        gap: 0,
        children: [
          e(ql, { color: "inactive" }),
          r(t, { color: "inactive", children: ["Planning: ", e(xg, { filePath: EJ })] }),
        ],
      })),
      (Bu[45] = Sbe),
      (Bu[46] = EJ),
      (Bu[47] = uF);
  else uF = Bu[47];
  let UXe;
  if (Bu[48] === d) (UXe = e(ql, { color: "inactive" })), (Bu[48] = UXe);
  else UXe = Bu[48];
  let jXe;
  if (Bu[49] !== SM || Bu[50] !== b_ || Bu[51] !== kM || Bu[52] !== Ch)
    (jXe = e(kh, { questions: Ch, currentQuestionIndex: b_, answers: SM, hideSubmitTab: kM })),
      (Bu[49] = SM),
      (Bu[50] = b_),
      (Bu[51] = kM),
      (Bu[52] = Ch),
      (Bu[53] = jXe);
  else jXe = Bu[53];
  let OJ;
  if (Bu[54] !== ya.displayQuestion.text)
    (OJ = e(yq, { title: ya.displayQuestion.text, color: "text" })), (Bu[54] = ya.displayQuestion.text), (Bu[55] = OJ);
  else OJ = Bu[55];
  let HXe;
  if (Bu[56] !== ya.displayQuestion.needsGutter || Bu[57] !== OJ)
    (HXe = e(zi, { multiline: ya.displayQuestion.needsGutter, children: OJ })),
      (Bu[56] = ya.displayQuestion.needsGutter),
      (Bu[57] = OJ),
      (Bu[58] = HXe);
  else HXe = Bu[58];
  let WXe;
  if (Bu[59] !== k_ || Bu[60] !== SS || Bu[61] !== CM || Bu[62] !== vh || Bu[63] !== Ch)
    (WXe =
      !vh &&
      r(U, {
        children: [
          r(o, {
            flexDirection: "column",
            children: [
              e(ql, { color: "inactive" }),
              r(o, {
                flexDirection: "row",
                gap: 1,
                children: [
                  SS ? e(t, { color: "suggestion", children: L.pointer }) : e(t, { children: " " }),
                  r(t, { color: SS ? "suggestion" : void 0, children: [k_, ". Chat about this"] }),
                ],
              }),
            ],
          }),
          e(o, {
            marginTop: 1,
            children: e(t, {
              color: "inactive",
              dimColor: true,
              children: r(fe, {
                children: [
                  e(M, { chord: "enter", action: "select" }),
                  Ch.length === 1
                    ? e(M, { chord: ["up", "down"], action: "navigate" })
                    : e(t, { children: "Tab/Arrow keys to navigate" }),
                  CM && TXe && e(M, { chord: "ctrl+g", action: `edit in ${TXe}` }),
                  e(M, { chord: "escape", action: "cancel" }),
                ],
              }),
            }),
          }),
        ],
      })),
      (Bu[59] = k_),
      (Bu[60] = SS),
      (Bu[61] = CM),
      (Bu[62] = vh),
      (Bu[63] = Ch),
      (Bu[64] = WXe);
  else WXe = Bu[64];
  return r(o, {
    flexDirection: "column",
    marginTop: 0,
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: tho,
    children: [
      uF,
      UXe,
      r(o, {
        flexDirection: "column",
        paddingTop: 0,
        children: [
          jXe,
          HXe,
          r(o, {
            flexDirection: "column",
            children: [
              e(o, {
                marginTop: 1,
                children: ya.multiSelect
                  ? e(
                      $w,
                      {
                        options: BXe,
                        defaultValue: bC[ya.key]?.selectedValue,
                        onChange: (vbe) => {
                          if (!jm()) {
                            return false;
                          }
                          zf(Cd, { selectedValue: vbe }, true);
                          let $Xe = vbe.includes("__other__")
                            ? bbe.current?.question === Cd
                              ? bbe.current.value
                              : bC[Cd]?.textInputValue
                            : void 0;
                          let aho = vbe.filter(KXe).concat($Xe ? [$Xe] : []);
                          cF(Cd, aho, void 0, false);
                        },
                        onFocus: xXe,
                        onCancel: kC,
                        submitButtonText: b_ === Ch.length - 1 ? "Submit" : "Next",
                        onSubmit: () => {
                          if (!jm()) {
                            return;
                          }
                          Jgo();
                        },
                        onDownFromLastItem: AXe,
                        isDisabled: SS,
                        onOpenEditor: NXe,
                        canPasteImage: gXe,
                        onImagePaste: yXe,
                        pastedContents: bXe,
                        onRemoveImage: kXe,
                      },
                      ya.key,
                    )
                  : e(
                      Ce,
                      {
                        options: BXe,
                        selectedValue: bC[ya.key]?.selectedValue ?? Ti,
                        onChange: (FJ) => {
                          if (!jm()) {
                            return false;
                          }
                          if (FJ === "__chat__") {
                            CC();
                            return;
                          }
                          zf(Cd, { selectedValue: FJ }, false);
                          let lho = FJ === "__other__" ? bC[Cd]?.textInputValue : void 0;
                          cF(Cd, FJ, lho);
                        },
                        onFocus: xXe,
                        onCancel: kC,
                        onDownFromLastItem: AXe,
                        isDisabled: SS,
                        layout: "compact-vertical",
                        onOpenEditor: NXe,
                        canPasteImage: gXe,
                        onImagePaste: yXe,
                        pastedContents: bXe,
                        onRemoveImage: kXe,
                      },
                      ya.key,
                    ),
              }),
              WXe,
            ],
          }),
        ],
      }),
    ],
  });
}

function gF(Rho) {
  let wh = _(24),
    {
      questions: vM,
      currentQuestionIndex: Tbe,
      answers: TC,
      allQuestionsAnswered: xbe,
      permissionResult: Pbe,
      onFinalResponse: BJ,
    } = Rho,
    QXe;
  if (wh[0] === d) (QXe = e(ql, { color: "inactive" })), (wh[0] = QXe);
  else QXe = wh[0];
  let UJ;
  if (wh[1] !== TC || wh[2] !== Tbe || wh[3] !== vM)
    (UJ = e(kh, { questions: vM, currentQuestionIndex: Tbe, answers: TC })),
      (wh[1] = TC),
      (wh[2] = Tbe),
      (wh[3] = vM),
      (wh[4] = UJ);
  else UJ = wh[4];
  let zXe;
  if (wh[5] === d) (zXe = e(yq, { title: "Review your answers", color: "text" })), (wh[5] = zXe);
  else zXe = wh[5];
  let jJ;
  if (wh[6] !== xbe)
    (jJ =
      !xbe &&
      e(o, {
        marginBottom: 1,
        children: e(yf, { status: "warning", children: "You have not answered all questions" }),
      })),
      (wh[6] = xbe),
      (wh[7] = jJ);
  else jJ = wh[7];
  let HJ;
  if (wh[8] !== TC || wh[9] !== vM)
    (HJ =
      Object.keys(TC).length > 0 &&
      e(o, {
        flexDirection: "column",
        marginBottom: 1,
        children: vM
          .filter((YXe) => YXe?.key && TC[YXe.key])
          .map(($J) => {
            let xho = TC[$J?.key];
            return r(
              o,
              {
                flexDirection: "column",
                marginLeft: 1,
                children: [
                  e(zi, {
                    multiline: $J?.displayQuestion.needsGutter ?? false,
                    children: e(zc, { children: $J?.displayQuestion.text || "Question" }),
                  }),
                  e(o, { marginLeft: 2, children: r(t, { color: "success", children: [L.arrowRight, " ", xho] }) }),
                ],
              },
              $J?.key || "answer",
            );
          }),
      })),
      (wh[8] = TC),
      (wh[9] = vM),
      (wh[10] = HJ);
  else HJ = wh[10];
  let WJ;
  if (wh[11] !== Pbe) (WJ = e(Hg, { permissionResult: Pbe, toolType: "tool" })), (wh[11] = Pbe), (wh[12] = WJ);
  else WJ = wh[12];
  let JXe;
  if (wh[13] === d) (JXe = e(t, { color: "inactive", children: "Ready to submit your answers?" })), (wh[13] = JXe);
  else JXe = wh[13];
  let qJ;
  if (wh[14] !== BJ)
    (qJ = e(o, {
      marginTop: 1,
      children: e(wn, {
        confirmLabel: "Submit answers",
        cancelLabel: "Cancel",
        onConfirm: () => BJ("submit"),
        onCancel: () => BJ("cancel"),
      }),
    })),
      (wh[14] = BJ),
      (wh[15] = qJ);
  else qJ = wh[15];
  let VJ;
  if (wh[16] !== jJ || wh[17] !== HJ || wh[18] !== WJ || wh[19] !== qJ)
    (VJ = r(o, { flexDirection: "column", marginTop: 1, children: [jJ, HJ, WJ, JXe, qJ] })),
      (wh[16] = jJ),
      (wh[17] = HJ),
      (wh[18] = WJ),
      (wh[19] = qJ),
      (wh[20] = VJ);
  else VJ = wh[20];
  let XXe;
  if (wh[21] !== UJ || wh[22] !== VJ)
    (XXe = r(o, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        QXe,
        r(o, {
          flexDirection: "column",
          borderTop: true,
          borderColor: "inactive",
          paddingTop: 0,
          children: [UJ, zXe, VJ],
        }),
      ],
    })),
      (wh[21] = UJ),
      (wh[22] = VJ),
      (wh[23] = XXe);
  else XXe = wh[23];
  return XXe;
}

F();

function ZXe(S, x) {
  switch (x.type) {
    case "next-question":
      return { ...S, currentQuestionIndex: S.currentQuestionIndex + 1, isInTextInput: false };
    case "prev-question":
      return { ...S, currentQuestionIndex: Math.max(0, S.currentQuestionIndex - 1), isInTextInput: false };
    case "update-question-state": {
      let P = S.questionStates[x.questionText],
        j = {
          selectedValue:
            ("selectedValue" in x.updates ? x.updates.selectedValue : P?.selectedValue) ??
            (x.isMultiSelect ? [] : void 0),
          textInputValue: x.updates.textInputValue ?? P?.textInputValue ?? "",
        };
      return { ...S, questionStates: { ...S.questionStates, [x.questionText]: j } };
    }
    case "set-answer": {
      let P = { ...S, answers: { ...S.answers, [x.questionText]: x.answer } };
      if (x.shouldAdvance) return { ...P, currentQuestionIndex: P.currentQuestionIndex + 1, isInTextInput: false };
      return P;
    }
    case "set-text-input-mode":
      return { ...S, isInTextInput: x.isInInput };
  }
}

var e3e = { currentQuestionIndex: 0, answers: {}, questionStates: {}, isInTextInput: false };

function GJ() {
  let [S, x] = fv(ZXe, e3e),
    P = B(() => {
      x({ type: "next-question" });
    }, []),
    j = B(() => {
      x({ type: "prev-question" });
    }, []),
    H = B((ue, de, pe) => {
      x({ type: "update-question-state", questionText: ue, updates: de, isMultiSelect: pe });
    }, []),
    Z = B((ue, de, pe = true) => {
      x({ type: "set-answer", questionText: ue, answer: de, shouldAdvance: pe });
    }, []),
    re = B((ue) => {
      x({ type: "set-text-input-mode", isInInput: ue });
    }, []);
  return {
    currentQuestionIndex: S.currentQuestionIndex,
    answers: S.answers,
    questionStates: S.questionStates,
    isInTextInput: S.isInTextInput,
    nextQuestion: P,
    prevQuestion: j,
    updateQuestionState: H,
    setAnswer: Z,
    setTextInputMode: re,
  };
}

F();

var t3e = qVt,
  o3e = 20000;

function KJ({ enabled: S, timeoutMs: x, countdownThresholdMs: P, onTimeout: j }) {
  (x = a.CLAUDE_AFK_TIMEOUT_MS ?? x ?? t3e), (P = Math.min(P ?? a.CLAUDE_AFK_COUNTDOWN_MS ?? o3e, x));
  let H = br(j),
    Z = Math.ceil(x / 1000),
    [re, ue] = u(Z),
    de = C(false),
    pe = C(Date.now());
  A(() => {
    if (!S) return;
    (pe.current = Date.now()), (de.current = false), ue(Z);
  }, [S, Z]),
    ko(
      () => {
        if (de.current) return;
        O4();
        let be = Date.now();
        if (PJ() === true) pe.current = be;
        let Pe = be - Math.max(Eh(), pe.current),
          Oe = Pe >= x - P ? Math.max(0, Math.ceil((x - Pe) / 1000)) : Z;
        if ((ue(Oe), Pe >= x)) {
          if (((de.current = true), H(x) === false)) (de.current = false), (pe.current = be), ue(Z);
        }
      },
      S ? 1000 : null,
    );
  let Re = re * 1000 <= P;
  return { remainingSeconds: re, showCountdown: Re, timeoutMs: x };
}

function T6e(nSo) {
  return Object.values(nSo);
}

function _6e(rSo) {
  return rSo.type === "image";
}

function x6e(iSo) {
  return iSo.toolPermissionContext.mode;
}

function P6e(sSo) {
  return sSo.textInputValue;
}

function A6e(aSo) {
  throw (p("ask_user_question_answer", "build_result_failed"), aSo);
}

function I6e(lSo) {
  return lSo.type === "image";
}

function E6e(cSo) {
  return h(cSo), false;
}

var bke = 40;

function kF(S) {
  return S.map((x) => {
    let P = x.options.map((H) => H.label),
      j = Av(P, (H) => Bo(es(H).text).replace(/\s+/g, " ").trim());
    return {
      key: x.question,
      displayQuestion: es(x.question),
      displayHeader: cSe(x.header) ? "" : t9(x.header),
      multiSelect: x.multiSelect ?? false,
      options: x.options.map((H, Z) => ({
        value: H.label,
        displayLabel: j[Z],
        displayDescription: es(H.description).text,
        preview:
          H.preview === void 0
            ? void 0
            : H.preview.length > $Se
              ? { kind: "withheld" }
              : !n2(H.preview)
                ? void 0
                : lk(H.preview)
                  ? { kind: "withheld" }
                  : { kind: "full", markdown: Cdt(H.preview) },
      })),
    };
  });
}

function vke(S, x) {
  return S.options.find((P) => P.value === x)?.displayLabel ?? x;
}

function _ke(S) {
  switch (S) {
    case "60s":
    case "5m":
    case "10m":
      return Ldn[S];
    case "never":
    case void 0:
      return null;
  }
}

function _X(xyo) {
  let zJ = _(12),
    { payload: $m, answer: Abe, accepts: Mbe } = xyo,
    Ebe = Ts(),
    n3e;
  if (zJ[0] !== Ebe.syntaxHighlightingDisabled)
    (n3e = Ebe.syntaxHighlightingDisabled ? null : OR()), (zJ[0] = Ebe.syntaxHighlightingDisabled), (zJ[1] = n3e);
  else n3e = zJ[1];
  let Dbe = n3e,
    r3e;
  if (zJ[2] === d) (r3e = _ke(jAe())), (zJ[2] = r3e);
  else r3e = zJ[2];
  let Pyo = r3e,
    i3e,
    a3e;
  if (zJ[3] !== $m)
    (i3e = () => ({
      requestId: $m.requestId,
      props: { toolName: $m.toolName, questions: $m.questions, metadataSource: $m.metadataSource },
    })),
      (a3e = [$m]),
      (zJ[3] = $m),
      (zJ[4] = i3e),
      (zJ[5] = a3e);
  else (i3e = zJ[4]), (a3e = zJ[5]);
  let Ayo = ss.useRenderInput("AskUserQuestion", i3e, a3e),
    XJ = GJ(),
    Nbe = C(void 0),
    c3e;
  if (zJ[6] !== Mbe || zJ[7] !== Abe || zJ[8] !== Dbe || zJ[9] !== $m || zJ[10] !== XJ)
    (c3e = (Lbe) => {
      let Obe = Nbe.current !== void 0 && Rke(XJ) ? Nbe.current : Pke(Lbe, $m.questions);
      return (
        (Nbe.current = Obe),
        e(vX, {
          payload: { ...$m, toolName: Lbe.props.toolName, questions: Obe, metadataSource: Lbe.props.metadataSource },
          asked: $m.questions,
          answer: (Myo) => Abe(xke(Myo, Obe, $m.questions)),
          accepts: Mbe,
          highlight: Dbe,
          afkTimeoutMs: Pyo,
          state: XJ,
        })
      );
    }),
      (zJ[6] = Mbe),
      (zJ[7] = Abe),
      (zJ[8] = Dbe),
      (zJ[9] = $m),
      (zJ[10] = XJ),
      (zJ[11] = c3e);
  else c3e = zJ[11];
  return ss.useRenderHook(Ayo, c3e);
}

function Rke(S) {
  return Object.keys(S.answers).length > 0 || Object.keys(S.questionStates).length > 0;
}

function xke(S, x, P) {
  if (S.behavior !== "allow" || x === P) return S;
  let j = (ue, de) => {
      if (ue === void 0) return ue;
      let pe = {};
      for (let [Re, be] of Object.entries(ue)) {
        let Pe = x.findIndex((Ie) => Ie.question === Re),
          Oe = Pe === -1 ? void 0 : P[Pe];
        pe[Oe?.question ?? Re] = Oe === void 0 ? be : de(be, Pe);
      }
      return pe;
    },
    H = S.updatedInput,
    Z = j(H.answers, (ue, de) => {
      let pe = x[de]?.options.findIndex((Re) => Re.label === ue) ?? -1;
      return pe === -1 ? ue : (P[de]?.options[pe]?.label ?? ue);
    }),
    re = j(H.annotations, (ue) => ue);
  return {
    ...S,
    updatedInput: { ...H, ...(Z !== void 0 && { answers: Z }), ...(re !== void 0 && { annotations: re }) },
  };
}

function Pke(S, x) {
  if (S.props.questions === x || b(S.props.questions) === b(x)) return x;
  let P = Gle.inputSchema.safeParse({ questions: S.props.questions });
  if (!P.success)
    return (
      n(
        `ui.render (AskUserQuestion): rewritten questions do not match the tool's input schema (${P.error.message}); drawing the original`,
        { level: "warn" },
      ),
      x
    );
  let j = C6e(P.data.questions, x);
  if (j !== void 0)
    return (
      n(`ui.render (AskUserQuestion): a rewrite may relabel the questions but not ${j}; drawing the original`, {
        level: "warn",
      }),
      x
    );
  return P.data.questions;
}

function C6e(S, x) {
  if (S.length !== x.length) return `change how many questions there are (${x.length} asked, ${S.length} drawn)`;
  for (let [P, j] of x.entries()) {
    let H = S[P];
    if (H === void 0) return `leave question ${P + 1} out`;
    if ((H.multiSelect ?? false) !== (j.multiSelect ?? false)) return `change whether question ${P + 1} is multi-select`;
    let Z = j.options.map((be) => be.label),
      re = H.options.map((be) => be.label);
    if (b(re) !== b(Z)) return `change question ${P + 1}'s options (asked ${b(Z)}, drawn ${b(re)})`;
    let ue = j.options.map((be) => be.preview),
      de = H.options.map((be) => be.preview);
    if (b(de) !== b(ue)) return `change question ${P + 1}'s previews`;
    let pe = (be, Pe) => Pe !== P && be.question === H.question,
      Re = b(H.question);
    if (S.some(pe)) return `give two questions one text (${Re})`;
    if (x.some(pe)) return `give question ${P + 1} another question's text (${Re})`;
  }
  return;
}

function vX(Iyo) {
  let sa = _(142),
    { payload: Il, asked: eX, answer: Mp, accepts: Ka, highlight: Fbe, afkTimeoutMs: wM, state: Eyo } = Iyo,
    ic = Il.metadataSource,
    [Bbe] = mn(),
    u3e;
  if (sa[0] !== Il.questions) (u3e = kF(Il.questions)), (sa[0] = Il.questions), (sa[1] = u3e);
  else u3e = sa[1];
  let Gi = u3e,
    d3e;
  if (sa[2] !== eX || sa[3] !== Il.questions || sa[4] !== Gi)
    (d3e = eX === Il.questions ? Gi : kF(eX)), (sa[2] = eX), (sa[3] = Il.questions), (sa[4] = Gi), (sa[5] = d3e);
  else d3e = sa[5];
  let Ube = d3e,
    tX;
  if (sa[6] !== Fbe || sa[7] !== Gi || sa[8] !== Bbe) {
    tX = bke;
    for (const Dyo of Gi) {
      for (const p3e of Dyo.options) {
        if (p3e.preview?.kind !== "full") {
          continue;
        }
        let Nyo = RBe(p3e.preview.markdown, Bbe, Fbe);
        for (const Lyo of Nyo.split(`
`))
          tX = Math.max(tX, se(Lyo));
      }
    }
    (sa[6] = Fbe), (sa[7] = Gi), (sa[8] = Bbe), (sa[9] = tX);
  } else tX = sa[9];
  let jbe = tX,
    f3e;
  if (sa[10] === d) (f3e = {}), (sa[10] = f3e);
  else f3e = sa[10];
  let [Np, h3e] = u(f3e),
    Hbe = At(),
    y3e;
  if (sa[11] !== Ka || sa[12] !== Np || sa[13] !== Hbe)
    (y3e = function hF($be, Oyo, Wbe) {
      if (!Ka()) {
        return;
      }
      let S3e = _v(void 0, Np[$be]);
      let Vbe = {
        id: S3e,
        type: "image",
        content: Oyo,
        mediaType: Wbe?.mediaType || "image/png",
        filename: Wbe?.filename || "Pasted image",
        dimensions: Wbe?.dimensions,
      };
      let b3e = p6(Hbe, "storedImagePaths");
      xZ(Vbe, b3e), IZ(Vbe, b3e), h3e((k3e) => ({ ...k3e, [$be]: { ...(k3e[$be] ?? {}), [S3e]: Vbe } }));
    }),
      (sa[11] = Ka),
      (sa[12] = Np),
      (sa[13] = Hbe),
      (sa[14] = y3e);
  else y3e = sa[14];
  let hF = y3e,
    C3e;
  if (sa[15] !== Ka)
    (C3e = (v3e, Fyo) => {
      if (!Ka()) {
        return false;
      }
      h3e((w3e) => {
        let T3e = { ...(w3e[v3e] ?? {}) };
        return delete T3e[Fyo], { ...w3e, [v3e]: T3e };
      });
    }),
      (sa[15] = Ka),
      (sa[16] = C3e);
  else C3e = sa[16];
  let Gbe = C3e,
    _3e;
  if (sa[17] !== Np) (_3e = Object.values(Np).flatMap(T6e).filter(_6e)), (sa[17] = Np), (sa[18] = _3e);
  else _3e = sa[18];
  let bS = _3e,
    Byo = W(x6e),
    Kbe = Oc(),
    R3e;
  if (sa[19] !== Kbe) (R3e = Ya(Kbe)), (sa[19] = Kbe), (sa[20] = R3e);
  else R3e = sa[20];
  let kS = R3e,
    Zc = Byo === "plan",
    x3e;
  if (sa[21] !== Zc) (x3e = Zc ? Bh() : void 0), (sa[21] = Zc), (sa[22] = x3e);
  else x3e = sa[22];
  let Qbe = x3e,
    {
      currentQuestionIndex: Wm,
      answers: Dl,
      questionStates: vd,
      isInTextInput: P3e,
      nextQuestion: TM,
      prevQuestion: zbe,
      updateQuestionState: C_,
      setAnswer: Jbe,
      setTextInputMode: Xbe,
    } = Eyo,
    A3e;
  if (sa[23] !== vd) (A3e = () => Object.values(vd).map(P6e)), (sa[23] = vd), (sa[24] = A3e);
  else A3e = sa[24];
  let Zbe = br(A3e),
    I3e;
  if (sa[25] !== Zbe) (I3e = () => Y1(() => Zbe())), (sa[25] = Zbe), (sa[26] = I3e);
  else I3e = sa[26];
  let E3e;
  if (sa[27] === d) (E3e = []), (sa[27] = E3e);
  else E3e = sa[27];
  A(I3e, E3e), fs("ask-user-question-text-input", P3e);
  let v_ = Wm < (Gi?.length || 0) ? Gi?.[Wm] : null,
    iX = Wm === (Gi?.length || 0),
    N3e;
  if (sa[28] !== Dl || sa[29] !== Gi)
    (N3e = Gi?.every((L3e) => L3e.key && !!Dl[L3e.key]) ?? false), (sa[28] = Dl), (sa[29] = Gi), (sa[30] = N3e);
  else N3e = sa[30];
  let tke = N3e,
    sX = Gi.length === 1 && !Gi[0]?.multiSelect,
    O3e;
  if (sa[31] !== Mp || sa[32] !== Zc || sa[33] !== ic || sa[34] !== Gi.length)
    (O3e = () => {
      if (Mp({ behavior: "deny" }) === false) {
        return;
      }
      if (ic)
        s("tengu_ask_user_question_rejected", { source_hash: Vn(ic), questionCount: Gi.length, isInPlanMode: Zc });
    }),
      (sa[31] = Mp),
      (sa[32] = Zc),
      (sa[33] = ic),
      (sa[34] = Gi.length),
      (sa[35] = O3e);
  else O3e = sa[35];
  let _M = O3e,
    Op = hn(),
    Th = C(false),
    uX = C("user"),
    oke = C(null),
    F3e;
  if (sa[36] === d)
    (F3e = function RM(H3e) {
      if (Th.current && (H3e === "afk" || uX.current !== "afk")) {
        return false;
      }
      return (Th.current = true), (uX.current = H3e), true;
    }),
      (sa[36] = F3e);
  else F3e = sa[36];
  let RM = F3e,
    W3e;
  if (
    sa[37] !== Ka ||
    sa[38] !== bS ||
    sa[39] !== Mp ||
    sa[40] !== Dl ||
    sa[41] !== Ube ||
    sa[42] !== kS ||
    sa[43] !== Zc ||
    sa[44] !== Op ||
    sa[45] !== ic ||
    sa[46] !== vd ||
    sa[47] !== Gi
  )
    (W3e = async () => {
      if (!Ka()) {
        return;
      }
      if (!RM("user")) {
        return;
      }
      let q3e = await Ike({
        questions: Gi,
        asked: Ube,
        answers: Dl,
        questionStates: vd,
        imageAttachments: bS,
        imageLimits: kS,
        isScreenReader: Op,
      }).catch((Uyo) => {
        (Th.current = false), p("ask_user_question_answer", "respond_build_failed"), h(Uyo);
      });
      if (q3e === void 0) {
        return;
      }
      if (Mp(q3e) === false) {
        Th.current = false;
        return;
      }
      if (ic)
        s("tengu_ask_user_question_respond_to_claude", {
          source_hash: Vn(ic),
          questionCount: Gi.length,
          isInPlanMode: Zc,
        });
    }),
      (sa[37] = Ka),
      (sa[38] = bS),
      (sa[39] = Mp),
      (sa[40] = Dl),
      (sa[41] = Ube),
      (sa[42] = kS),
      (sa[43] = Zc),
      (sa[44] = Op),
      (sa[45] = ic),
      (sa[46] = vd),
      (sa[47] = Gi),
      (sa[48] = W3e);
  else W3e = sa[48];
  let rke = W3e,
    V3e;
  if (sa[49] !== Zc || sa[50] !== ic || sa[51] !== Gi)
    (V3e = (jyo, Hyo) => {
      let G3e = Q(Gi, ($yo) => !jyo[$yo.key]);
      if (G3e === 0) {
        return;
      }
      s("tengu_ask_user_question_skipped", {
        ...(ic && { source_hash: Vn(ic) }),
        skippedCount: G3e,
        questionCount: Gi.length,
        reason: c(Hyo),
        isInPlanMode: Zc,
      });
    }),
      (sa[49] = Zc),
      (sa[50] = ic),
      (sa[51] = Gi),
      (sa[52] = V3e);
  else V3e = sa[52];
  let xM = V3e,
    K3e;
  if (
    sa[53] !== bS ||
    sa[54] !== Mp ||
    sa[55] !== kS ||
    sa[56] !== Zc ||
    sa[57] !== Op ||
    sa[58] !== xM ||
    sa[59] !== ic ||
    sa[60] !== Il.input ||
    sa[61] !== vd ||
    sa[62] !== Gi
  )
    (K3e = async (dX) => {
      let Wyo = await CF({
        questions: Gi,
        answersToSubmit: dX,
        questionStates: vd,
        input: Il.input,
        imageAttachments: bS,
        imageLimits: kS,
        isScreenReader: Op,
      }).catch(A6e);
      if (Mp(Wyo) === false) {
        return false;
      }
      if (ic)
        s("tengu_ask_user_question_accepted", {
          source_hash: Vn(ic),
          questionCount: Gi.length,
          answerCount: Object.keys(dX).length,
          isInPlanMode: Zc,
        });
      if ((xM(dX, "user_submit"), Q(Gi, (qyo) => !dX[qyo.key]) === 0))
        y("ask_user_question_answer", { questionCount: Gi.length });
      else g("ask_user_question_answer", "user_skipped_questions", { questionCount: Gi.length });
      return true;
    }),
      (sa[53] = bS),
      (sa[54] = Mp),
      (sa[55] = kS),
      (sa[56] = Zc),
      (sa[57] = Op),
      (sa[58] = xM),
      (sa[59] = ic),
      (sa[60] = Il.input),
      (sa[61] = vd),
      (sa[62] = Gi),
      (sa[63] = K3e);
  else K3e = sa[63];
  let PM = K3e,
    Q3e;
  if (sa[64] !== Dl || sa[65] !== Np || sa[66] !== Gi || sa[67] !== Jbe || sa[68] !== PM || sa[69] !== C_)
    (Q3e = (_C, yF, ike, SF) => {
      let z3e = SF === void 0 ? true : SF;
      let Y3e = Array.isArray(yF);
      let J3e = Object.values(Np[_C] ?? {}).some(I6e);
      let X3e = Gi.find((Vyo) => Vyo.key === _C);
      let e6e = (Z3e) => (X3e !== void 0 ? vke(X3e, Z3e) : Z3e);
      let RC;
      if (Y3e) RC = Hdt(yF.map(e6e));
      else if (ike) RC = J3e ? `${ike} (Image attached)` : ike;
      else if (yF === "__other__") RC = J3e ? "(Image attached)" : yF;
      else RC = e6e(yF);
      let Gyo = Gi.length === 1;
      if (!Y3e && Gyo && z3e) {
        let Kyo = { ...Dl, [_C]: RC };
        if (!RM("user")) {
          let o6e = oke.current;
          if (o6e?.question !== _C || o6e.answer !== RC) C_(_C, { selectedValue: void 0 }, false);
          return;
        }
        (oke.current = { question: _C, answer: RC }),
          PM(Kyo)
            .catch(E6e)
            .then((Qyo) => {
              if (!Qyo) (Th.current = false), (oke.current = null), C_(_C, { selectedValue: void 0 }, false);
            })
            .catch(h);
        return;
      }
      Jbe(_C, RC, z3e);
    }),
      (sa[64] = Dl),
      (sa[65] = Np),
      (sa[66] = Gi),
      (sa[67] = Jbe),
      (sa[68] = PM),
      (sa[69] = C_),
      (sa[70] = Q3e);
  else Q3e = sa[70];
  let ske = Q3e,
    SF;
  if (sa[71] !== Ka || sa[72] !== Dl || sa[73] !== _M || sa[74] !== PM)
    (SF = function bF(n6e) {
      if (n6e === "cancel") {
        _M();
        return;
      }
      if (n6e === "submit") {
        if (!Ka()) {
          return;
        }
        if (!RM("user")) {
          return;
        }
        PM(Dl)
          .then((zyo) => {
            if (!zyo) Th.current = false;
          })
          .catch((Yyo) => {
            h(Yyo), (Th.current = false);
          });
      }
    }),
      (sa[71] = Ka),
      (sa[72] = Dl),
      (sa[73] = _M),
      (sa[74] = PM),
      (sa[75] = SF);
  else SF = sa[75];
  let bF = SF,
    ake = sX ? (Gi?.length || 1) - 1 : Gi?.length || 0,
    r6e;
  if (sa[76] !== Ka || sa[77] !== Wm || sa[78] !== zbe)
    (r6e = () => {
      if (Wm > 0 && Ka()) zbe();
    }),
      (sa[76] = Ka),
      (sa[77] = Wm),
      (sa[78] = zbe),
      (sa[79] = r6e);
  else r6e = sa[79];
  let AM = r6e,
    s6e;
  if (sa[80] !== Ka || sa[81] !== Wm || sa[82] !== ake || sa[83] !== TM)
    (s6e = () => {
      if (Wm < ake && Ka()) TM();
    }),
      (sa[80] = Ka),
      (sa[81] = Wm),
      (sa[82] = ake),
      (sa[83] = TM),
      (sa[84] = s6e);
  else s6e = sa[84];
  let MM = s6e,
    a6e;
  if (sa[85] !== MM || sa[86] !== AM)
    (a6e = { "tabs:previous": AM, "tabs:next": MM }), (sa[85] = MM), (sa[86] = AM), (sa[87] = a6e);
  else a6e = sa[87];
  const lke = !(P3e && !iX);
  let l6e;
  if (sa[88] !== lke) (l6e = { context: "Tabs", isActive: lke }), (sa[88] = lke), (sa[89] = l6e);
  else l6e = sa[89];
  ht(a6e, l6e);
  let c6e;
  if (sa[90] !== wM || sa[91] !== Op || sa[92] !== Il.hasExternalRacer)
    (c6e = !Op && !Il.hasExternalRacer && !wt() && (wM !== null || a.CLAUDE_AFK_TIMEOUT_MS !== void 0)),
      (sa[90] = wM),
      (sa[91] = Op),
      (sa[92] = Il.hasExternalRacer),
      (sa[93] = c6e);
  else c6e = sa[93];
  let cke = c6e,
    m6e;
  if (
    sa[94] !== Ka ||
    sa[95] !== bS ||
    sa[96] !== Mp ||
    sa[97] !== Dl ||
    sa[98] !== kS ||
    sa[99] !== Zc ||
    sa[100] !== Op ||
    sa[101] !== xM ||
    sa[102] !== ic ||
    sa[103] !== Il.input ||
    sa[104] !== vd ||
    sa[105] !== Gi
  )
    (m6e = (p6e) => {
      if (!Ka()) {
        return false;
      }
      if (!RM("afk")) {
        return false;
      }
      let Jyo = Date.now();
      CF({
        questions: Gi,
        answersToSubmit: Dl,
        questionStates: vd,
        input: Il.input,
        imageAttachments: bS,
        imageLimits: kS,
        afkTimeoutMs: p6e,
        isScreenReader: Op,
      })
        .catch((Xyo) => {
          if (uX.current === "afk") Th.current = false;
          throw (p("ask_user_question_answer", "afk_build_failed"), Xyo);
        })
        .then((Zyo) => {
          if (uX.current !== "afk") {
            return;
          }
          if ((O4(), Eh() >= Jyo || PJ() === true)) {
            Th.current = false;
            return;
          }
          if (Mp(Zyo) === false) {
            Th.current = false;
            return;
          }
          s("tengu_ask_user_question_afk_auto_advance", {
            ...(ic && { source_hash: Vn(ic) }),
            timeoutMs: p6e,
            questionCount: Gi.length,
            hadPartialAnswers: Object.keys(Dl).length > 0,
            isInPlanMode: Zc,
          }),
            xM(Dl, "afk_timeout"),
            g("ask_user_question_answer", "afk_timeout", {
              questionCount: Gi.length,
              hadPartialAnswers: Object.keys(Dl).length > 0,
            });
        })
        .catch(h);
    }),
      (sa[94] = Ka),
      (sa[95] = bS),
      (sa[96] = Mp),
      (sa[97] = Dl),
      (sa[98] = kS),
      (sa[99] = Zc),
      (sa[100] = Op),
      (sa[101] = xM),
      (sa[102] = ic),
      (sa[103] = Il.input),
      (sa[104] = vd),
      (sa[105] = Gi),
      (sa[106] = m6e);
  else m6e = sa[106];
  let uke = m6e,
    pX;
  if (
    sa[107] !== Ka ||
    sa[108] !== tke ||
    sa[109] !== Dl ||
    sa[110] !== v_ ||
    sa[111] !== Wm ||
    sa[112] !== jbe ||
    sa[113] !== _M ||
    sa[114] !== bF ||
    sa[115] !== ske ||
    sa[116] !== rke ||
    sa[117] !== MM ||
    sa[118] !== AM ||
    sa[119] !== sX ||
    sa[120] !== iX ||
    sa[121] !== TM ||
    sa[122] !== hF ||
    sa[123] !== Gbe ||
    sa[124] !== Np ||
    sa[125] !== Il.permissionResult ||
    sa[126] !== Qbe ||
    sa[127] !== vd ||
    sa[128] !== Gi ||
    sa[129] !== Xbe ||
    sa[130] !== C_
  )
    (pX = v_
      ? e(mF, {
          accepts: Ka,
          question: v_,
          questions: Gi,
          currentQuestionIndex: Wm,
          answers: Dl,
          questionStates: vd,
          hideSubmitTab: sX,
          minContentWidth: jbe,
          planFilePath: Qbe,
          onUpdateQuestionState: C_,
          onAnswer: ske,
          onTextInputFocus: Xbe,
          onCancel: _M,
          onSubmit: TM,
          onTabPrev: AM,
          onTabNext: MM,
          onRespondToClaude: rke,
          canPasteImage: Ka,
          onImagePaste: (eSo, tSo) => hF(v_.key, eSo, tSo),
          pastedContents: Np[v_.key] ?? {},
          onRemoveImage: (oSo) => Gbe(v_.key, oSo),
        })
      : iX
        ? e(gF, {
            questions: Gi,
            currentQuestionIndex: Wm,
            answers: Dl,
            allQuestionsAnswered: tke,
            permissionResult: Il.permissionResult,
            onFinalResponse: bF,
          })
        : null),
      (sa[107] = Ka),
      (sa[108] = tke),
      (sa[109] = Dl),
      (sa[110] = v_),
      (sa[111] = Wm),
      (sa[112] = jbe),
      (sa[113] = _M),
      (sa[114] = bF),
      (sa[115] = ske),
      (sa[116] = rke),
      (sa[117] = MM),
      (sa[118] = AM),
      (sa[119] = sX),
      (sa[120] = iX),
      (sa[121] = TM),
      (sa[122] = hF),
      (sa[123] = Gbe),
      (sa[124] = Np),
      (sa[125] = Il.permissionResult),
      (sa[126] = Qbe),
      (sa[127] = vd),
      (sa[128] = Gi),
      (sa[129] = Xbe),
      (sa[130] = C_),
      (sa[131] = pX);
  else pX = sa[131];
  let fX;
  if (sa[132] !== cke || sa[133] !== wM || sa[134] !== uke)
    (fX = cke ? e(wX, { enabled: true, timeoutMs: wM ?? void 0, onTimeout: uke }) : null),
      (sa[132] = cke),
      (sa[133] = wM),
      (sa[134] = uke),
      (sa[135] = fX);
  else fX = sa[135];
  let yX;
  if (sa[136] !== Il.requestId) (yX = e(TX, { toolUseId: Il.requestId })), (sa[136] = Il.requestId), (sa[137] = yX);
  else yX = sa[137];
  let f6e;
  if (sa[138] !== pX || sa[139] !== fX || sa[140] !== yX)
    (f6e = r(OK, { children: [pX, fX, yX] })), (sa[138] = pX), (sa[139] = fX), (sa[140] = yX), (sa[141] = f6e);
  else f6e = sa[141];
  return f6e;
}

function wX(uSo) {
  let fke = _(9),
    { enabled: dke, timeoutMs: mke, onTimeout: pke } = uSo,
    g6e;
  if (fke[0] !== dke || fke[1] !== pke || fke[2] !== mke)
    (g6e = { enabled: dke, timeoutMs: mke, onTimeout: pke }),
      (fke[0] = dke),
      (fke[1] = pke),
      (fke[2] = mke),
      (fke[3] = g6e);
  else g6e = fke[3];
  let { remainingSeconds: gke, showCountdown: yke } = KJ(g6e),
    SX;
  if (fke[4] !== gke || fke[5] !== yke)
    (SX = yke
      ? r(t, { color: "inactive", dimColor: true, children: ["auto-continue in ", gke, "s \xB7 any key to stay"] })
      : null),
      (fke[4] = gke),
      (fke[5] = yke),
      (fke[6] = SX);
  else SX = fke[6];
  let h6e;
  if (fke[7] !== SX)
    (h6e = e(o, { height: 1, justifyContent: "flex-end", children: SX })), (fke[7] = SX), (fke[8] = h6e);
  else h6e = fke[8];
  return h6e;
}

function TX(dSo) {
  let bX = _(8),
    { toolUseId: Ske } = dSo,
    y6e;
  if (bX[0] === d) (y6e = BB.noticesStore()), (bX[0] = y6e);
  else y6e = bX[0];
  let S6e;
  if (bX[1] !== Ske) (S6e = (mSo) => mSo.get(Ske)), (bX[1] = Ske), (bX[2] = S6e);
  else S6e = bX[2];
  let w_ = Xe(y6e, S6e);
  if (w_ === void 0) {
    return null;
  }
  let CX;
  if (bX[3] !== w_.plugin || bX[4] !== w_.text)
    (CX = _be(w_.plugin, w_.text)), (bX[3] = w_.plugin), (bX[4] = w_.text), (bX[5] = CX);
  else CX = bX[5];
  let b6e;
  if (bX[6] !== CX)
    (b6e = e(o, {
      height: 1,
      justifyContent: "flex-end",
      children: e(t, { color: "inactive", dimColor: true, children: CX }),
    })),
      (bX[6] = CX),
      (bX[7] = b6e);
  else b6e = bX[7];
  return b6e;
}

async function CF(S) {
  let { questions: x, answersToSubmit: P, questionStates: j, input: H } = S,
    Z = {};
  for (let de of x) {
    let pe = P[de.key],
      Re = !S.isScreenReader && Dke(de),
      be = Re ? j[de.key]?.textInputValue : void 0,
      Pe = Re && pe ? de.options.find((Ie) => Ie.displayLabel === pe) : void 0,
      Oe = Pe?.preview?.kind === "full" ? Pe.preview.markdown : void 0;
    if (Oe || be?.trim()) Z[de.key] = { ...(Oe && { preview: Oe }), ...(be?.trim() && { notes: be.trim() }) };
  }
  let re = { ...H, answers: P, annotations: Z, ...(S.afkTimeoutMs && { afkTimeoutMs: S.afkTimeoutMs }) },
    ue = await Lke(S.imageAttachments, S.imageLimits);
  return { behavior: "allow", updatedInput: re, ...(ue && ue.length > 0 && { contentBlocks: ue }) };
}

async function Ike(S) {
  let { questions: x, asked: P, answers: j, questionStates: H } = S,
    re = `The user wants to clarify these questions.
    This means they may have additional information, context or questions for you.
    Take their response into account and then reformulate the questions if appropriate.
    Start by asking them what they would like to clarify.

    Questions asked:
${v6e(x, P, j, H, S.isScreenReader)}`,
    ue = await Lke(S.imageAttachments, S.imageLimits);
  return { behavior: "deny", feedback: re, ...(ue && ue.length > 0 && { contentBlocks: ue }) };
}

function v6e(S, x, P, j, H) {
  return S.map((Z, re) => {
    let ue = P[Z.key],
      de = !H && Dke(Z) ? j[Z.key]?.textInputValue?.trim() : void 0,
      Re = [`- "${(x[re] ?? Z).displayQuestion.text}"`];
    if ((Re.push(ue ? `  Answer: ${ue}` : "  (No answer provided)"), de)) Re.push(`  User notes: ${de}`);
    return Re.join(`
`);
  }).join(`
`);
}

function Dke(S) {
  return !S.multiSelect && S.options.some((x) => x.preview !== void 0);
}

async function Lke(S, x) {
  if (S.length === 0) return;
  return Promise.all(
    S.map(async (P) => {
      let { block: j } = await Fg({ data: P.content, mediaType: P.mediaType, limits: x });
      return j;
    }),
  );
}

F();

function n4e() {
  return null;
}

function r4e(xSo) {
  return wS.setState(() => xSo);
}

function i4e() {
  return null;
}

function NM() {
  let D6e = _(4),
    IM = xt(),
    N6e;
  if (D6e[0] !== IM) (N6e = IM.now()), (D6e[0] = IM), (D6e[1] = N6e);
  else N6e = D6e[1];
  let L6e = C(N6e),
    O6e;
  if (D6e[2] !== IM)
    (O6e = (wSo) => {
      let F6e = IM.now();
      let B6e = L6e.current;
      if (((L6e.current = Math.max(F6e, B6e)), F6e - B6e < Xj)) {
        return false;
      }
      return wSo(), true;
    }),
      (D6e[2] = IM),
      (D6e[3] = O6e);
  else O6e = D6e[3];
  return O6e;
}

var wS = Ma(null);

function UX(TSo) {
  let xX = _(14),
    { payload: Oke, answer: Bke } = TSo,
    RX = NM(),
    _So = Lt(wS.subscribe, wS.getState),
    U6e;
  if (xX[0] !== Bke)
    (U6e = (RSo) => {
      if (Bke(RSo) === false) {
        return;
      }
      wS.setState(n4e);
    }),
      (xX[0] = Bke),
      (xX[1] = U6e);
  else U6e = xX[1];
  let T_ = U6e;
  const Uke = _So ?? void 0;
  let PX, MX;
  if (xX[2] !== RX || xX[3] !== T_)
    (PX = () => RX(() => T_("accept"))),
      (MX = () => RX(() => T_("decline"))),
      (xX[2] = RX),
      (xX[3] = T_),
      (xX[4] = PX),
      (xX[5] = MX);
  else (PX = xX[4]), (MX = xX[5]);
  let IX;
  if (xX[6] !== T_) (IX = () => T_("cancelled")), (xX[6] = T_), (xX[7] = IX);
  else IX = xX[7];
  let j6e;
  if (xX[8] !== Oke || xX[9] !== Uke || xX[10] !== PX || xX[11] !== MX || xX[12] !== IX)
    (j6e = e(nke, {
      proposal: Oke,
      hideIndexes: true,
      defaultFocusValue: Uke,
      onFocus: r4e,
      onAccept: PX,
      onDecline: MX,
      onCancel: IX,
    })),
      (xX[8] = Oke),
      (xX[9] = Uke),
      (xX[10] = PX),
      (xX[11] = MX),
      (xX[12] = IX),
      (xX[13] = j6e);
  else j6e = xX[13];
  return j6e;
}

var Jf = Ma(null);

function jX(PSo) {
  let DM = _(24),
    { payload: EX, answer: $ke } = PSo,
    __ = NM(),
    _h = EX.runId,
    DX = Lt(Jf.subscribe, Jf.getState),
    H6e;
  if (DM[0] !== _h || DM[1] !== DX)
    (H6e = DX?.key === _h ? DX : { key: _h, picking: false, selection: [] }), (DM[0] = _h), (DM[1] = DX), (DM[2] = H6e);
  else H6e = DM[2];
  let Fp = H6e,
    K6e;
  if (DM[3] !== $ke)
    (K6e = (ASo) => {
      if ($ke(ASo) === false) {
        return;
      }
      Jf.setState(i4e);
    }),
      (DM[3] = $ke),
      (DM[4] = K6e);
  else K6e = DM[4];
  let NX = K6e,
    LX;
  if (DM[5] !== __ || DM[6] !== _h || DM[7] !== Fp)
    (LX = (MSo) =>
      __(() => {
        Jf.setState((J6e) => ({ ...(J6e?.key === _h ? J6e : Fp), picking: MSo }));
      })),
      (DM[5] = __),
      (DM[6] = _h),
      (DM[7] = Fp),
      (DM[8] = LX);
  else LX = DM[8];
  let OX;
  if (DM[9] !== _h || DM[10] !== Fp)
    (OX = (ISo) => {
      Jf.setState((e4e) => ({ ...(e4e?.key === _h ? e4e : Fp), selection: ISo }));
    }),
      (DM[9] = _h),
      (DM[10] = Fp),
      (DM[11] = OX);
  else OX = DM[11];
  let FX, BX;
  if (DM[12] !== __ || DM[13] !== NX)
    (FX = (ESo) => __(() => NX({ toRemove: ESo }))),
      (BX = () => __(() => NX("cancelled"))),
      (DM[12] = __),
      (DM[13] = NX),
      (DM[14] = FX),
      (DM[15] = BX);
  else (FX = DM[14]), (BX = DM[15]);
  let t4e;
  if (
    DM[16] !== EX.flagged ||
    DM[17] !== Fp.picking ||
    DM[18] !== Fp.selection ||
    DM[19] !== LX ||
    DM[20] !== OX ||
    DM[21] !== FX ||
    DM[22] !== BX
  )
    (t4e = e(MBe, {
      hideIndexes: true,
      flagged: EX.flagged,
      initialPicking: Fp.picking,
      onPickingChange: LX,
      initialSelection: Fp.selection,
      onSelectionChange: OX,
      onResolve: FX,
      onCancel: BX,
    })),
      (DM[16] = EX.flagged),
      (DM[17] = Fp.picking),
      (DM[18] = Fp.selection),
      (DM[19] = LX),
      (DM[20] = OX),
      (DM[21] = FX),
      (DM[22] = BX),
      (DM[23] = t4e);
  else t4e = DM[23];
  return t4e;
}

F();

var Wke = "\xB7 auto mode handles these prompts for you";

function WX() {
  let FSo = _(1),
    s4e;
  if (FSo[0] === d)
    (s4e = e(t, {
      bold: true,
      children: 'Tip: auto mode handles these prompts for you \u2014 choose "switch to auto mode" below',
    })),
      (FSo[0] = s4e);
  else s4e = FSo[0];
  return s4e;
}

function qX(S) {
  let { commandWithoutRedirections: x, redirections: P } = Tee(S);
  return P.length > 0 ? x : S;
}

function qke({
  suggestionsRow: S = null,
  decisionReason: x,
  onRejectFeedbackChange: P,
  onAcceptFeedbackChange: j,
  yesInputMode: H = false,
  noInputMode: Z = false,
  editablePrefix: re,
  onEditablePrefixChange: ue,
  hasBackendSuggestions: de,
  showEnableAutoModeOption: pe = false,
  enableAutoModeDescription: Re = Het,
}) {
  let be = [];
  if (H)
    be.push({
      type: "input",
      label: "Yes",
      value: "yes",
      placeholder: "and tell Claude what to do next",
      onChange: j,
      allowEmptySubmitToCancel: true,
    });
  else be.push({ label: "Yes", value: "yes" });
  if (ELe()) {
    let Pe =
      S !== null &&
      S.applies.some(
        (Ie) => Ie.type === "addDirectories" || (Ie.type === "addRules" && Ie.rules.some((He) => He.toolName !== Qe)),
      );
    if (re !== void 0 && ue && !Pe && (de ?? S !== null))
      be.push({
        type: "input",
        label: "Yes, and don\u2019t ask again for",
        value: "yes-prefix-edited",
        placeholder: "command prefix (e.g., npm run *)",
        initialValue: re,
        onChange: ue,
        allowEmptySubmitToCancel: true,
        showLabelWithValue: true,
        labelValueSeparator: ": ",
        resetCursorOnUpdate: true,
      });
    else if (S !== null) be.push({ label: S.node, value: "yes-apply-suggestions" });
  }
  if (pe) be.push({ label: KKt.workflow, description: Re, value: "yes-enable-auto-mode" });
  if (Z)
    be.push({
      type: "input",
      label: "No",
      value: "no",
      placeholder: "and tell Claude what to do differently",
      onChange: P,
      allowEmptySubmitToCancel: true,
    });
  else be.push({ label: "No", value: "no" });
  return be;
}

F();

var a4e = { LOW: 1, MEDIUM: 2, HIGH: 3 },
  l4e = 1,
  c4e = 2,
  u4e = 3,
  f4e = "Analyze shell commands and explain what they do, why you're running them, and potential risks.",
  g4e = {
    name: "explain_command",
    description: "Provide an explanation of a shell command",
    input_schema: {
      type: "object",
      properties: {
        explanation: { type: "string", description: "What this command does (1-2 sentences)" },
        reasoning: {
          type: "string",
          description: 'Why YOU are running this command. Start with "I" - e.g. "I need to check the file contents"',
        },
        risk: { type: "string", description: "What could go wrong, under 15 words" },
        riskLevel: {
          type: "string",
          enum: ["LOW", "MEDIUM", "HIGH"],
          description: "LOW (safe dev workflows), MEDIUM (recoverable changes), HIGH (dangerous/irreversible)",
        },
      },
      required: ["explanation", "reasoning", "risk", "riskLevel"],
    },
  },
  h4e = m(() => f({ riskLevel: oe(["LOW", "MEDIUM", "HIGH"]), explanation: i(), reasoning: i(), risk: i() }));

function y4e(S) {
  if (typeof S === "string") return S;
  try {
    return b(S, null, 2);
  } catch {
    return String(S);
  }
}

function S4e(S, x = 1000) {
  let P = S.filter((Z) => Z.type === "assistant").slice(-3),
    j = [],
    H = 0;
  for (let Z of P.reverse()) {
    let re = Z.message.content
      .filter((ue) => ue.type === "text")
      .map((ue) => ("text" in ue ? ue.text : ""))
      .join(" ");
    if (re && H < x) {
      let ue = x - H,
        de = re.length > ue ? ce(re, ue) + "..." : re;
      j.unshift(de), (H += de.length);
    }
  }
  return j.join(`

`);
}

function vF() {
  return ie().permissionExplainerEnabled !== false;
}

async function KX({ toolName: S, toolInput: x, toolDescription: P, messages: j, signal: H, credentials: Z }) {
  if (!vF()) return null;
  let re = Date.now();
  try {
    let ue = y4e(x),
      de = j.length ? S4e(j) : "",
      pe = `Tool: ${S}
${
  P
    ? `Description: ${P}
`
    : ""
}
Input:
${ue}
${
  de
    ? `
Recent conversation context:
${de}`
    : ""
}

Explain this command in context.`,
      Re = at(),
      be = await Pv({
        model: Re,
        system: f4e,
        messages: [{ role: "user", content: pe }],
        tools: [g4e],
        tool_choice: { type: "tool", name: "explain_command" },
        signal: H,
        querySource: "permission_explainer",
        credentials: Z,
      }),
      Pe = Date.now() - re;
    n(`Permission explainer: API returned in ${Pe}ms, stop_reason=${be.stop_reason}`);
    let Oe = be.content.find((Ie) => Ie.type === "tool_use");
    if (Oe && Oe.type === "tool_use") {
      n(`Permission explainer: tool input: ${b(Oe.input).slice(0, 500)}`);
      let Ie = h4e().safeParse(Oe.input);
      if (Ie.success) {
        let He = {
          riskLevel: Ie.data.riskLevel,
          explanation: Ie.data.explanation,
          reasoning: Ie.data.reasoning,
          risk: Ie.data.risk,
        };
        return (
          s("tengu_permission_explainer_generated", {
            tool_name: Un(S),
            risk_level: a4e[He.riskLevel],
            latency_ms: Pe,
          }),
          y("permission_explainer_generate"),
          n(`Permission explainer: ${He.riskLevel} risk for ${S} (${Pe}ms)`),
          He
        );
      }
    }
    return (
      s("tengu_permission_explainer_error", { tool_name: Un(S), error_type: l4e, latency_ms: Pe }),
      g("permission_explainer_generate", "parse_failed"),
      n("Permission explainer: no parsed output in response"),
      null
    );
  } catch (ue) {
    let de = Date.now() - re;
    if (H.aborted) return n(`Permission explainer: request aborted for ${S}`), null;
    return (
      n(`Permission explainer error: ${l(ue)}`, { level: "error" }),
      s("tengu_permission_explainer_error", {
        tool_name: Un(S),
        error_type: ue instanceof Error && ue.name === "AbortError" ? c4e : u4e,
        latency_ms: de,
      }),
      p("permission_explainer_generate", "api_error"),
      null
    );
  }
}

F();

function QX(S, x, P) {
  let j = S === "requesting" ? 50 : 200,
    [H, Z] = Bi(P ? null : j),
    re = z(() => se(x), [x]);
  if (P) return [H, -100];
  let ue = Math.floor(Z / j),
    de = re + 20;
  if (S === "requesting") return [H, (ue % de) - 10];
  return [H, re + 10 - (ue % de)];
}

function B4e() {
  return null;
}

function j4e(vbo) {
  return !vbo;
}

var _F = "Loading explanation\u2026";

function i3() {
  let Kke = _(7),
    [Vke, Gke] = QX("responding", _F, false),
    zX;
  if (Kke[0] !== Gke)
    (zX = _F
      .split("")
      .map((bbo, b4e) =>
        e(hke, { char: bbo, index: b4e, glimmerIndex: Gke, messageColor: "inactive", shimmerColor: "text" }, b4e),
      )),
      (Kke[0] = Gke),
      (Kke[1] = zX);
  else zX = Kke[1];
  let YX;
  if (Kke[2] !== zX) (YX = e(t, { children: zX })), (Kke[2] = zX), (Kke[3] = YX);
  else YX = Kke[3];
  let C4e;
  if (Kke[4] !== Vke || Kke[5] !== YX)
    (C4e = e(o, { ref: Vke, children: YX })), (Kke[4] = Vke), (Kke[5] = YX), (Kke[6] = C4e);
  else C4e = Kke[6];
  return C4e;
}

function Jke(S) {
  switch (S) {
    case "LOW":
      return "success";
    case "MEDIUM":
      return "warning";
    case "HIGH":
      return "error";
  }
}

function Xke(S) {
  switch (S) {
    case "LOW":
      return "Low risk";
    case "MEDIUM":
      return "Med risk";
    case "HIGH":
      return "High risk";
  }
}

function BM(LM) {
  let TF = _(13),
    v4e;
  if (TF[0] === d) (v4e = vF()), (TF[0] = v4e);
  else v4e = TF[0];
  let w4e = v4e,
    { credentials: zke } = ge(),
    Yke = uu("confirm:toggleExplanation", "Confirmation", "ctrl+e"),
    [OM, kbo] = u(false),
    [FM, Cbo] = u(null),
    T4e = C(null),
    _4e;
  if (TF[1] !== zke || TF[2] !== FM || TF[3] !== LM || TF[4] !== OM)
    (_4e = () => {
      if (!OM) {
        if ((s("tengu_permission_explainer_shortcut_used", {}), !FM)) {
          let R4e = new AbortController();
          (T4e.current = R4e),
            Cbo(
              KX({
                toolName: LM.toolName,
                toolInput: LM.toolInput,
                toolDescription: LM.toolDescription,
                messages: LM.messages ?? [],
                signal: R4e.signal,
                credentials: zke,
              }).catch(B4e),
            );
        }
      }
      kbo(j4e);
    }),
      (TF[1] = zke),
      (TF[2] = FM),
      (TF[3] = LM),
      (TF[4] = OM),
      (TF[5] = _4e);
  else _4e = TF[5];
  let x4e;
  if (TF[6] === d) (x4e = { context: "Confirmation", isActive: w4e }), (TF[6] = x4e);
  else x4e = TF[6];
  Be("confirm:toggleExplanation", _4e, x4e);
  let P4e, A4e;
  if (TF[7] === d) (P4e = () => () => T4e.current?.abort()), (A4e = []), (TF[7] = P4e), (TF[8] = A4e);
  else (P4e = TF[7]), (A4e = TF[8]);
  A(P4e, A4e);
  let M4e;
  if (TF[9] !== Yke || TF[10] !== FM || TF[11] !== OM)
    (M4e = { visible: OM, enabled: w4e, chord: Yke, promise: FM }),
      (TF[9] = Yke),
      (TF[10] = FM),
      (TF[11] = OM),
      (TF[12] = M4e);
  else M4e = TF[12];
  return M4e;
}

function s3(wbo) {
  let RS = _(21),
    { promise: Tbo } = wbo,
    Uu = zn(Tbo);
  if (!Uu) {
    let R_;
    if (RS[0] === d)
      (R_ = e(o, { marginTop: 1, children: e(t, { dimColor: true, children: "Explanation unavailable" }) })),
        (RS[0] = R_);
    else R_ = RS[0];
    return R_;
  }
  let R_;
  if (RS[1] !== Uu.explanation) (R_ = e(t, { children: Uu.explanation })), (RS[1] = Uu.explanation), (RS[2] = R_);
  else R_ = RS[2];
  let JX;
  if (RS[3] !== Uu.reasoning)
    (JX = e(o, { marginTop: 1, children: e(t, { children: Uu.reasoning }) })), (RS[3] = Uu.reasoning), (RS[4] = JX);
  else JX = RS[4];
  let XX;
  if (RS[5] !== Uu.riskLevel) (XX = Jke(Uu.riskLevel)), (RS[5] = Uu.riskLevel), (RS[6] = XX);
  else XX = RS[6];
  let ZX;
  if (RS[7] !== Uu.riskLevel) (ZX = Xke(Uu.riskLevel)), (RS[7] = Uu.riskLevel), (RS[8] = ZX);
  else ZX = RS[8];
  let e3;
  if (RS[9] !== XX || RS[10] !== ZX)
    (e3 = r(t, { color: XX, children: [ZX, ":"] })), (RS[9] = XX), (RS[10] = ZX), (RS[11] = e3);
  else e3 = RS[11];
  let t3;
  if (RS[12] !== Uu.risk) (t3 = r(t, { children: [" ", Uu.risk] })), (RS[12] = Uu.risk), (RS[13] = t3);
  else t3 = RS[13];
  let n3;
  if (RS[14] !== e3 || RS[15] !== t3)
    (n3 = e(o, { marginTop: 1, children: r(t, { children: [e3, t3] }) })), (RS[14] = e3), (RS[15] = t3), (RS[16] = n3);
  else n3 = RS[16];
  let E4e;
  if (RS[17] !== R_ || RS[18] !== JX || RS[19] !== n3)
    (E4e = r(o, { flexDirection: "column", marginTop: 1, children: [R_, JX, n3] })),
      (RS[17] = R_),
      (RS[18] = JX),
      (RS[19] = n3),
      (RS[20] = E4e);
  else E4e = RS[20];
  return E4e;
}

function UM(_bo) {
  let D4e = _(3),
    { visible: Rbo, promise: r3 } = _bo;
  if (!Rbo || !r3) {
    return null;
  }
  let O4e;
  if (D4e[0] === d) (O4e = e(o, { marginTop: 1, children: e(i3, {}) })), (D4e[0] = O4e);
  else O4e = D4e[0];
  let F4e;
  if (D4e[1] !== r3) (F4e = e(Jn, { fallback: O4e, children: e(s3, { promise: r3 }) })), (D4e[1] = r3), (D4e[2] = F4e);
  else F4e = D4e[2];
  return F4e;
}

var $4e = (S) => vUe(S, Qe, qX);

function W4e(S) {
  return Ow(S, { displayedTypes: GRt, labelPredicate: $4e, renderLabel: (x) => zRt(x, Qe, qX) });
}

function jM(S, x, P, j = {}) {
  switch (S) {
    case "yes":
      return { behavior: "allow", updatedInput: x.input, ...(j.feedback && { feedback: j.feedback }) };
    case "yes-apply-suggestions": {
      if (P === null || !kg(P)) return { behavior: "allow", updatedInput: x.input };
      return { behavior: "allow", updatedInput: x.input, permissionUpdates: P.applies };
    }
    case "yes-prefix-edited": {
      let H = _Rt(j.editablePrefixSeed, j.editablePrefix, Qe);
      if (H === null) return { behavior: "allow", updatedInput: x.input };
      return { behavior: "allow", updatedInput: x.input, permissionUpdates: H.applies };
    }
    case "yes-enable-auto-mode":
      return { behavior: "allow", updatedInput: x.input };
    case "no":
      return { behavior: "deny", ...(j.feedback && { feedback: j.feedback }) };
  }
}

function eCe({ payload: S, answer: x, accepts: P }) {
  let j = I4e.of(ct().host),
    H = S.command,
    Z = S.permissionResult.decisionReason,
    re = z(() => Om(S.input.command, { maxUnits: Dm }), [S.input.command]),
    ue = re.kind === "withheld" || typeof S.input.command !== "string",
    { requestedMachine: de, runsOnMachine: pe } = z(() => EWt(S.input), [S.input]),
    Re =
      By(Z, (Oo) => !Oo.classifierApprovable) !== void 0 || S.isAskCappedByOrg || GV(S.requestSource) || de !== void 0,
    be = z(() => (ue || Re ? null : W4e(S.permissionResult.suggestions)), [ue, Re, S.permissionResult.suggestions]),
    Pe = BM({ toolName: S.toolName, toolInput: S.input, toolDescription: S.description }),
    Oe = z(() => Un(S.toolName), [S.toolName]),
    {
      acceptFeedback: Ie,
      rejectFeedback: He,
      setAcceptFeedback: Fe,
      setRejectFeedback: Ve,
      acceptInputMode: Ke,
      rejectInputMode: ot,
      handleInputModeToggle: st,
      handleFocus: nt,
      logSubmitted: Pt,
      logEscape: kt,
      hintNode: Ht,
    } = ZJ({ feedbackTypeOf: eUe, toolName: Oe, isMcp: S.isMcp, initialFocusedType: "accept" }),
    yt = Z?.type === "subcommandResults",
    [lt, Rt] = u(() => {
      if (ue) return;
      if (yt) {
        let dn = pKe([...(be?.applies ?? [])]).filter((Xo) => Xo.toolName === Qe && Xo.ruleContent);
        if (dn.length === 1) return i1(dn[0].ruleContent);
        if (dn.length > 1) return;
      }
      let Oo = C$t(H);
      if (Oo) return i1(`${Oo} *`);
      let xo = Jqn(H);
      if (xo) return i1(`${xo} *`);
      return i1(H);
    }),
    to = C(void 0),
    so = C(false);
  if (!so.current) (so.current = true), (to.current = i1(lt));
  let jt = C(false),
    Gt = B((Oo) => {
      (jt.current = true), Rt(Oo);
    }, []);
  A(() => {
    if (yt || ue) return;
    let Oo = false;
    return (
      Z4n(j, H, () => false)
        .then(async (xo) => {
          if (Oo || jt.current) return;
          if (xo.length === 0 || !xo[0]) return;
          let dn = await zan(H, xo[0]);
          if (Oo || jt.current) return;
          if (!Yqn(dn)) {
            let Xo = i1(`${xo[0]} *`);
            if (Xo !== void 0) (to.current = Xo), Rt(Xo);
          }
        })
        .catch(() => {}),
      () => {
        Oo = true;
      }
    );
  }, [j, H, yt, ue]);
  let {
      destructiveWarning: vo,
      sandboxingEnabled: qt,
      isSandboxed: lo,
    } = z(() => {
      let Oo = typeof S.input.command === "string" ? S.input.command : H,
        xo = !ue && I("tengu_destructive_command_warning", false) ? p9n(Oo) : null,
        dn = pt.isSandboxingEnabled(),
        Xo =
          dn &&
          S.requestSource?.type !== "remote-agent" &&
          typeof S.input.command === "string" &&
          de === void 0 &&
          vv(S.input);
      return { destructiveWarning: xo, sandboxingEnabled: dn, isSandboxed: Xo };
    }, [H, S.input, S.requestSource, ue, de]),
    { offered: To, canOfferAutoMode: ao, enableAutoMode: jo } = Z$e(S.requestSource),
    Qo = Xee(Z) || S.permissionResult.matchedAskRule?.ruleBehavior === "ask" || Z?.type === "hook",
    uo = ao && !Qo,
    Pn = z(
      () =>
        qke({
          suggestionsRow: be,
          hasBackendSuggestions: !ue && !Re && (S.permissionResult.suggestions?.length ?? 0) > 0,
          decisionReason: Z,
          onRejectFeedbackChange: Ve,
          onAcceptFeedbackChange: Fe,
          yesInputMode: Ke,
          noInputMode: ot,
          editablePrefix: ue || Re ? void 0 : lt,
          onEditablePrefixChange: Gt,
          showEnableAutoModeOption: !ue && !Re && uo,
          enableAutoModeDescription: !To ? Wke : void 0,
        }),
      [be, ue, Re, S.permissionResult.suggestions, Z, Ke, ot, lt, Gt, To, uo],
    ),
    [Yt, No] = u(0),
    [cn, tn] = xge(),
    nn = B(
      (Oo) => {
        if (!P()) {
          No((xo) => xo + 1), tn(Oo === "yes" ? "yes" : "no");
          return;
        }
        if (
          (s("tengu_permission_request_option_selected", { option_index: Pn.findIndex((xo) => xo.value === Oo) + 1 }),
          Oo === "yes")
        ) {
          let xo = Ie.trim();
          Pt("accept", xo), x(jM("yes", S, be, { feedback: xo || void 0 }));
          return;
        }
        if (Oo === "no") {
          let xo = He.trim();
          Pt("reject", xo), x(jM("no", S, be, { feedback: xo || void 0 }));
          return;
        }
        if (Oo === "yes-prefix-edited") {
          x(jM("yes-prefix-edited", S, be, { editablePrefix: lt, editablePrefixSeed: to.current }));
          return;
        }
        if (Oo === "yes-enable-auto-mode") {
          jo(!To ? "bash_permission_prompt_upsell" : "workflow_permission_prompt"), x(jM("yes", S, be));
          return;
        }
        x(jM(Oo, S, be));
      },
      [x, P, S, be, Ie, He, lt, Pt, jo, To, Pn],
    ),
    pn = B(() => {
      if (!P()) return;
      kt(), x({ behavior: "deny" });
    }, [x, P, kt]),
    Go = z(() => (uo && !ue && !Re ? e(WX, {}) : void 0), [uo, ue, Re]);
  return r(di, {
    title: pe !== void 0 ? `Bash command (runs on ${pe})` : qt && !lo ? "Bash command (unsandboxed)" : "Bash command",
    subtitle: Go,
    requestSource: S.requestSource,
    children: [
      r(o, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1,
        children: [
          e(zi, {
            multiline: re.kind === "full" && re.needsGutter,
            children: e(t, { dimColor: Pe.visible, children: re.kind === "withheld" ? re.marker : re.text }),
          }),
          !Pe.visible &&
            e(zi, { multiline: bE(S.description), children: e(t, { dimColor: true, children: S.description }) }),
          e(UM, { visible: Pe.visible, promise: Pe.promise }),
        ],
      }),
      r(o, {
        flexDirection: "column",
        children: [
          e(Hg, { permissionResult: S.permissionResult, toolType: "command" }),
          vo && e(o, { marginBottom: 1, children: e(t, { color: "warning", children: vo }) }),
          e(t, { children: "Do you want to proceed?" }),
          e(
            Ce,
            {
              defaultFocusValue: cn,
              selectedValue: Ti,
              options: Pn,
              inlineDescriptions: true,
              onChange: nn,
              onCancel: pn,
              onFocus: nt,
              onInputModeToggle: st,
            },
            Yt,
          ),
        ],
      }),
      e(o, {
        justifyContent: "space-between",
        marginTop: 1,
        children: e(t, {
          dimColor: true,
          children: r(fe, {
            children: [
              e(M, { chord: "escape", action: "cancel" }),
              Ht,
              Pe.enabled && e(M, { chord: Pe.chord, action: Pe.visible ? "hide" : "explain" }),
            ],
          }),
        }),
      }),
    ],
  });
}

F();

function aCe(S, x, P) {
  switch (S) {
    case "allow":
      return { behavior: "allow", updatedInput: x.input };
    case "allow-domain":
      if (P === null || !kg(P)) return { behavior: "allow", updatedInput: x.input };
      return { behavior: "allow", updatedInput: x.input, permissionUpdates: P.applies };
    case "deny":
      return { behavior: "deny" };
  }
}

function lCe(S) {
  if (!S) return null;
  return Ow(
    [{ type: "addRules", rules: [{ toolName: Nte, ruleContent: S.host }], behavior: "allow", destination: "session" }],
    {
      displayedTypes: n8e,
      renderLabel: (x) => {
        let P = x.length === 1 ? x[0] : void 0;
        if (
          P === void 0 ||
          P.type !== "addRules" ||
          P.rules.length !== 1 ||
          P.rules[0]?.toolName !== Nte ||
          P.rules[0]?.ruleContent !== S.host
        )
          return null;
        let j = fD(S.host);
        if (j === null) return null;
        return r(t, {
          children: ["Allow all actions on ", e(t, { bold: true, children: j.display }), " for this session"],
        });
      },
    },
  );
}

var n8e = new Set(["addRules"]);

function cCe(S) {
  let x = S.permissionResult.behavior === "ask" ? S.permissionResult.decisionReason : void 0;
  if (x?.type === "safetyCheck" && !x.classifierApprovable) return false;
  return S.showAlwaysAllow && !S.isAskCappedByOrg && !!S.chrome && !S.chrome.host.includes("*");
}

function d3(Cko) {
  let Vm = _(36),
    { payload: lm, answer: HM } = Cko,
    { verbPhrase: G4e, chrome: cm } = lm,
    K4e;
  if (Vm[0] !== cm) (K4e = cm ? Om(cm.url, { maxUnits: Dm }) : null), (Vm[0] = cm), (Vm[1] = K4e);
  else K4e = Vm[1];
  let xS = K4e,
    tCe = xS !== null && xS.kind === "withheld",
    Q4e;
  if (Vm[2] !== cm || Vm[3] !== lm || Vm[4] !== tCe)
    (Q4e = cCe(lm) && !tCe ? lCe(cm) : null), (Vm[2] = cm), (Vm[3] = lm), (Vm[4] = tCe), (Vm[5] = Q4e);
  else Q4e = Vm[5];
  let AS = Q4e,
    Y4e;
  if (Vm[6] !== HM || Vm[7] !== AS || Vm[8] !== lm)
    (Y4e = (vko) => HM(aCe(vko, lm, AS))), (Vm[6] = HM), (Vm[7] = AS), (Vm[8] = lm), (Vm[9] = Y4e);
  else Y4e = Vm[9];
  let oCe = Y4e,
    J4e;
  if (Vm[10] !== HM)
    (J4e = () => {
      HM({ behavior: "cancelled" });
    }),
      (Vm[10] = HM),
      (Vm[11] = J4e);
  else J4e = Vm[11];
  let nCe = J4e,
    X4e;
  if (Vm[12] === d) (X4e = { label: "Allow", value: "allow" }), (Vm[12] = X4e);
  else X4e = Vm[12];
  let e8e;
  if (Vm[13] !== AS) {
    let rCe = [X4e];
    if (AS !== null) {
      let RF;
      if (Vm[15] !== AS.node) (RF = { label: AS.node, value: "allow-domain" }), (Vm[15] = AS.node), (Vm[16] = RF);
      else RF = Vm[16];
      rCe.push(RF);
    }
    e8e =
      (rCe.push({ label: r(t, { children: ["Deny ", e(t, { bold: true, children: "(esc)" })] }), value: "deny" }), rCe);
    (Vm[13] = AS), (Vm[14] = e8e);
  } else e8e = Vm[14];
  let iCe = e8e,
    RF;
  if (Vm[17] !== cm) (RF = cm ? fD(cm.host) : null), (Vm[17] = cm), (Vm[18] = RF);
  else RF = Vm[18];
  let t8e = RF;
  const sCe = t8e !== null ? `Claude in Chrome wants to ${G4e} on ${t8e.display}` : `Claude in Chrome wants to ${G4e}`;
  let a3;
  if (Vm[19] !== lm.permissionResult)
    (a3 =
      lm.permissionResult.denialLimitFallback !== void 0 &&
      e(Hg, { permissionResult: lm.permissionResult, toolType: "tool" })),
      (Vm[19] = lm.permissionResult),
      (Vm[20] = a3);
  else a3 = Vm[20];
  let l3;
  if (Vm[21] !== cm || Vm[22] !== xS)
    (l3 =
      cm && xS !== null
        ? xS.kind === "withheld"
          ? e(t, { dimColor: true, children: xS.marker })
          : e(zi, { multiline: xS.needsGutter, children: e(t, { dimColor: true, children: xS.text }) })
        : null),
      (Vm[21] = cm),
      (Vm[22] = xS),
      (Vm[23] = l3);
  else l3 = Vm[23];
  let c3;
  if (Vm[24] !== nCe || Vm[25] !== oCe || Vm[26] !== iCe)
    (c3 = e(Ce, { selectedValue: Ti, options: iCe, onChange: oCe, onCancel: nCe })),
      (Vm[24] = nCe),
      (Vm[25] = oCe),
      (Vm[26] = iCe),
      (Vm[27] = c3);
  else c3 = Vm[27];
  let u3;
  if (Vm[28] !== l3 || Vm[29] !== c3 || Vm[30] !== a3)
    (u3 = r(o, { flexDirection: "column", paddingY: 1, gap: 1, children: [a3, l3, c3] })),
      (Vm[28] = l3),
      (Vm[29] = c3),
      (Vm[30] = a3),
      (Vm[31] = u3);
  else u3 = Vm[31];
  let o8e;
  if (Vm[32] !== lm.requestSource || Vm[33] !== u3 || Vm[34] !== sCe)
    (o8e = e(di, { title: sCe, requestSource: lm.requestSource, children: u3 })),
      (Vm[32] = lm.requestSource),
      (Vm[33] = u3),
      (Vm[34] = sCe),
      (Vm[35] = o8e);
  else o8e = Vm[35];
  return o8e;
}

F();

var yCe = "deny";

function SCe(S) {
  switch (S) {
    case "mode-mismatch":
      return "The sending session's permission mode class doesn't match this session's, so it wasn't delivered automatically.";
    case "no-mode-asserted":
      return "The sender did not attest its permission mode, and this session bypasses permission prompts.";
    case "explicit-setting":
      return 'Your "crossSessionInbound" setting is "hold".';
    case "managed-setting":
      return `Your organization's managed settings set "crossSessionInbound" to "hold".`;
    case "repo-setting":
      return `This repository's settings set "crossSessionInbound" to "hold" (your own "accept" cannot override a repo tightening).`;
    case "invalid-setting":
      return 'A settings file has an unrecognized "crossSessionInbound" value (see the settings warning), so messages are held while it is present.';
    case "bypass-default":
      return "This session is not prompting for permissions.";
    case "mode-unknown":
      return "This session's permission mode could not be determined.";
  }
}

function v3(Eko) {
  let MS = _(29),
    { payload: Bp, answer: m3 } = Eko,
    r8e;
  if (MS[0] === d)
    (r8e = [
      { value: "deny", label: "Deny \u2014 drop it and tell the sender it was declined" },
      { value: "approve", label: "Deliver this message to Claude" },
    ]),
      (MS[0] = r8e);
  else r8e = MS[0];
  let Dko = r8e,
    uCe = hs(),
    { refusedWithin: dCe, noteRefused: mCe, epoch: Nko } = pi(),
    pCe = Vs(Nko),
    i8e;
  if (MS[1] !== uCe || MS[2] !== mCe || MS[3] !== dCe)
    (i8e = function IS() {
      if (uCe() || dCe()) {
        return mCe(), true;
      }
      return false;
    }),
      (MS[1] = uCe),
      (MS[2] = mCe),
      (MS[3] = dCe),
      (MS[4] = i8e);
  else i8e = MS[4];
  let IS = i8e,
    fCe = Bp.fromAddress ?? "an unidentified session",
    gCe = Bp.verifiedPeerPid !== void 0 ? ` [verified pid ${Bp.verifiedPeerPid}]` : "",
    hCe = Bp.claimedName ? ` (peer claims name: ${Bp.claimedName})` : "",
    f3;
  if (MS[5] !== hCe || MS[6] !== fCe || MS[7] !== gCe)
    (f3 = r(t, { children: ["Another Claude session sent a message: from ", fCe, gCe, hCe] })),
      (MS[5] = hCe),
      (MS[6] = fCe),
      (MS[7] = gCe),
      (MS[8] = f3);
  else f3 = MS[8];
  let g3;
  if (MS[9] !== Bp.holdCause) (g3 = SCe(Bp.holdCause)), (MS[9] = Bp.holdCause), (MS[10] = g3);
  else g3 = MS[10];
  let h3;
  if (MS[11] !== g3)
    (h3 = e(o, { marginTop: 1, children: e(t, { color: "inactive", children: g3 }) })), (MS[11] = g3), (MS[12] = h3);
  else h3 = MS[12];
  let y3;
  if (MS[13] !== Bp.preview)
    (y3 =
      Bp.preview !== "" &&
      r(o, {
        marginTop: 1,
        flexDirection: "column",
        children: [
          e(t, { color: "inactive", children: "Message body (this is what will be delivered):" }),
          r(t, { children: ["\xAB", Bp.preview, "\xBB"] }),
        ],
      })),
      (MS[13] = Bp.preview),
      (MS[14] = y3);
  else y3 = MS[14];
  let S3, b3;
  if (MS[15] !== m3 || MS[16] !== IS)
    (S3 = (Lko) => {
      if (IS()) {
        return;
      }
      m3({ behavior: Lko });
    }),
      (b3 = () => {
        if (IS()) {
          return;
        }
        m3({ behavior: "cancelled" });
      }),
      (MS[15] = m3),
      (MS[16] = IS),
      (MS[17] = S3),
      (MS[18] = b3);
  else (S3 = MS[17]), (b3 = MS[18]);
  let k3;
  if (MS[19] !== pCe.remountKey || MS[20] !== IS || MS[21] !== S3 || MS[22] !== b3)
    (k3 = e(o, {
      marginTop: 1,
      children: e(
        Ce,
        {
          selectedValue: Ti,
          options: Dko,
          defaultFocusValue: yCe,
          hideIndexes: true,
          refuseInput: IS,
          onChange: S3,
          onCancel: b3,
        },
        pCe.remountKey,
      ),
    })),
      (MS[19] = pCe.remountKey),
      (MS[20] = IS),
      (MS[21] = S3),
      (MS[22] = b3),
      (MS[23] = k3);
  else k3 = MS[23];
  let s8e;
  if (MS[24] !== f3 || MS[25] !== h3 || MS[26] !== y3 || MS[27] !== k3)
    (s8e = e(di, {
      color: "warning",
      title: "Held message from another session",
      children: r(o, { flexDirection: "column", marginTop: 1, paddingX: 1, children: [f3, h3, y3, k3] }),
    })),
      (MS[24] = f3),
      (MS[25] = h3),
      (MS[26] = y3),
      (MS[27] = k3),
      (MS[28] = s8e);
  else s8e = MS[28];
  return s8e;
}

F();

var w3 = { value: "skip", label: "Continue without browser tools", description: "Finish setup later with /chrome" };

function bCe({ payload: S, answer: x }) {
  let { phase: P, installPageOpened: j } = S,
    H = C(P),
    Z = C(Date.now()),
    { refusedWithin: re, noteRefused: ue } = pi();
  if (H.current !== P) (H.current = P), (Z.current = Date.now());
  function de() {
    if (bc(Z.current, Fi) || re(Fi)) return ue(), true;
    return false;
  }
  function pe(Oe) {
    if (de()) return;
    x(Oe);
  }
  let Re = P !== "waiting_install",
    be = P === "connected" ? "success" : P === "failed" ? "error" : Re ? "loading" : "pending",
    Pe =
      P === "connected"
        ? [
            {
              value: "continue",
              label: "Continue with browser tools",
              description: "Claude picks the task back up in your browser",
            },
            w3,
          ]
        : P === "stalled"
          ? [
              { value: "keep_waiting", label: "Keep waiting", description: "Setup keeps checking for the connection" },
              w3,
            ]
          : [w3];
  return e(di, {
    color: "permission",
    title: "Setting up Claude in Chrome",
    children: r(o, {
      flexDirection: "column",
      marginTop: 1,
      paddingX: 1,
      gap: 1,
      children: [
        P !== "connected" &&
          P !== "failed" &&
          e(t, {
            dimColor: true,
            children:
              "Finish setup in Chrome. This screen follows along and updates on its own as each step completes.",
          }),
        r(o, {
          flexDirection: "column",
          children: [
            r(t, { children: [e(tt, { status: Re ? "success" : "loading", withSpace: true }), "Install the extension"] }),
            !Re &&
              e(o, {
                paddingLeft: 3,
                children: e(t, {
                  dimColor: true,
                  children: j
                    ? "Add Claude in Chrome from the page that just opened in Chrome."
                    : `Add Claude in Chrome from ${Ix}.`,
                }),
              }),
            r(t, { children: [e(tt, { status: be, withSpace: true }), "Connect to Chrome"] }),
            P === "stalled" &&
              e(o, {
                paddingLeft: 3,
                children: e(t, {
                  dimColor: true,
                  children:
                    "Taking longer than expected. Check that the extension is added and that you're signed in to it in Chrome.",
                }),
              }),
            P === "failed" &&
              e(o, {
                paddingLeft: 3,
                children: e(t, {
                  dimColor: true,
                  children: "Couldn't connect to the extension. Finish setup later with /chrome.",
                }),
              }),
            P === "connected" &&
              e(o, {
                paddingLeft: 3,
                children: e(t, {
                  dimColor: true,
                  children:
                    "Browser tools are ready. Continuing keeps them enabled for future sessions too \u2014 manage anytime with /chrome.",
                }),
              }),
          ],
        }),
        e(
          Ce,
          {
            hideIndexes: true,
            selectedValue: Ti,
            options: Pe,
            refuseInput: de,
            onChange: pe,
            onCancel: () => pe("cancelled"),
          },
          P,
        ),
      ],
    }),
  });
}

F();

var TCe = 72;

function I3(sCo) {
  let wd = _(34),
    { payload: ju, answer: kCe } = sCo,
    a8e;
  if (wd[0] === d) (a8e = Date.now()), (wd[0] = a8e);
  else a8e = wd[0];
  let aCo = C(a8e),
    l8e = C(false),
    c8e;
  if (wd[1] !== kCe)
    (c8e = function xC(lCo) {
      if (l8e.current || bc(aCo.current, Fi)) {
        return;
      }
      (l8e.current = true), kCe(lCo);
    }),
      (wd[1] = kCe),
      (wd[2] = c8e);
  else c8e = wd[2];
  let xC = c8e,
    u8e;
  if (wd[3] !== xC) (u8e = () => xC("continue")), (wd[3] = xC), (wd[4] = u8e);
  else u8e = wd[4];
  let CCe = u8e,
    m8e;
  if (wd[5] !== xC) (m8e = () => xC("unanswered")), (wd[5] = xC), (wd[6] = m8e);
  else m8e = wd[6];
  let $M = m8e,
    g8e;
  if (wd[7] !== ju.folder) (g8e = ul(nr(ju.folder).replace(/\s+/g, " "), TCe)), (wd[7] = ju.folder), (wd[8] = g8e);
  else g8e = wd[8];
  let vCe = g8e,
    h8e;
  if (wd[9] !== ju.lastError)
    (h8e = ju.lastError === void 0 ? void 0 : Jq(ju.lastError.replace(/[\p{Cc}\p{Cf}]+/gu, " "), Yq)),
      (wd[9] = ju.lastError),
      (wd[10] = h8e);
  else h8e = wd[10];
  let S8e = h8e,
    k8e;
  if (wd[11] === d)
    (k8e = r(fe, {
      children: [e(M, { chord: "enter", action: "continue" }), e(M, { chord: "escape", action: "dismiss" })],
    })),
      (wd[11] = k8e);
  else k8e = wd[11];
  let T3;
  if (wd[12] !== ju.body) (T3 = e(t, { children: ju.body })), (wd[12] = ju.body), (wd[13] = T3);
  else T3 = wd[13];
  let _3;
  if (wd[14] !== vCe) (_3 = r(t, { dimColor: true, children: ["Directory: ", vCe] })), (wd[14] = vCe), (wd[15] = _3);
  else _3 = wd[15];
  const wCe = S8e === void 0 ? "" : ` (last: ${S8e})`;
  let x3;
  if (wd[16] !== ju.attempts || wd[17] !== wCe)
    (x3 = r(t, { dimColor: true, children: ["File sync gave up after ", ju.attempts, " tries", wCe, "."] })),
      (wd[16] = ju.attempts),
      (wd[17] = wCe),
      (wd[18] = x3);
  else x3 = wd[18];
  let P3;
  if (wd[19] !== x3 || wd[20] !== _3)
    (P3 = r(o, { flexDirection: "column", children: [_3, x3] })), (wd[19] = x3), (wd[20] = _3), (wd[21] = P3);
  else P3 = wd[21];
  let A3;
  if (wd[22] !== P3 || wd[23] !== T3)
    (A3 = r(o, { flexDirection: "column", gap: 1, children: [T3, P3] })), (wd[22] = P3), (wd[23] = T3), (wd[24] = A3);
  else A3 = wd[24];
  let C8e;
  if (wd[25] === d) (C8e = [{ label: "Continue without file sync", value: "continue" }]), (wd[25] = C8e);
  else C8e = wd[25];
  let M3;
  if (wd[26] !== CCe || wd[27] !== $M)
    (M3 = e(Ce, { options: C8e, onChange: CCe, onCancel: $M })), (wd[26] = CCe), (wd[27] = $M), (wd[28] = M3);
  else M3 = wd[28];
  let v8e;
  if (wd[29] !== $M || wd[30] !== ju.title || wd[31] !== A3 || wd[32] !== M3)
    (v8e = r(me, { title: ju.title, onCancel: $M, inputGuide: k8e, children: [A3, M3] })),
      (wd[29] = $M),
      (wd[30] = ju.title),
      (wd[31] = A3),
      (wd[32] = M3),
      (wd[33] = v8e);
  else v8e = wd[33];
  return v8e;
}

F();

function M8e() {
  s("tengu_chrome_install_upsell_shown", {});
}

var ACe = [
  { value: "install", label: "Install extension", description: "Opens the install page in Chrome" },
  { value: "not_now", label: "Not now", description: "Continue without browser tools" },
  { value: "dont_ask_again", label: "Don't ask again", description: "Revisit anytime with /chrome" },
];

function D3(CCo) {
  let P_ = _(16),
    { answer: _Ce } = CCo,
    w8e;
  if (P_[0] === d) (w8e = []), (P_[0] = w8e);
  else w8e = P_[0];
  A(M8e, w8e);
  let T8e;
  if (P_[1] === d) (T8e = Date.now()), (P_[1] = T8e);
  else T8e = P_[1];
  let vCo = C(T8e),
    { refusedWithin: RCe, noteRefused: xCe, epoch: wCo } = pi(),
    R8e;
  if (P_[2] !== xCe || P_[3] !== RCe)
    (R8e = function AC() {
      if (bc(vCo.current, Fi) || RCe(Fi)) {
        return xCe(), true;
      }
      return false;
    }),
      (P_[2] = xCe),
      (P_[3] = RCe),
      (P_[4] = R8e);
  else R8e = P_[4];
  let AC = R8e,
    x8e;
  if (P_[5] !== _Ce || P_[6] !== AC)
    (x8e = function MC(TCo) {
      if (AC()) {
        return;
      }
      _Ce(TCo);
    }),
      (P_[5] = _Ce),
      (P_[6] = AC),
      (P_[7] = x8e);
  else x8e = P_[7];
  let MC = x8e,
    PCe = Vs(wCo, Fi),
    P8e;
  if (P_[8] === d)
    (P8e = e(t, {
      children:
        "This task could use your Chrome browser. The Claude in Chrome extension lets Claude navigate sites, click buttons, and fill forms in your existing session.",
    })),
      (P_[8] = P8e);
  else P8e = P_[8];
  let E3;
  if (P_[9] !== MC) (E3 = () => MC("cancelled")), (P_[9] = MC), (P_[10] = E3);
  else E3 = P_[10];
  let A8e;
  if (P_[11] !== MC || P_[12] !== PCe.remountKey || P_[13] !== AC || P_[14] !== E3)
    (A8e = e(di, {
      color: "permission",
      title: "Claude wants to use your browser",
      children: r(o, {
        flexDirection: "column",
        marginTop: 1,
        paddingX: 1,
        children: [
          P8e,
          e(o, {
            marginTop: 1,
            children: e(
              Ce,
              {
                hideIndexes: true,
                selectedValue: Ti,
                refuseInput: AC,
                defaultFocusValue: "not_now",
                options: ACe,
                onChange: MC,
                onCancel: E3,
              },
              PCe.remountKey,
            ),
          }),
        ],
      }),
    })),
      (P_[11] = MC),
      (P_[12] = PCe.remountKey),
      (P_[13] = AC),
      (P_[14] = E3),
      (P_[15] = A8e);
  else A8e = P_[15];
  return A8e;
}

var Rh = go({
  kind: "cost_threshold",
  payload: m(() => f({})),
  result: m(() => oe(["acknowledged", "cancelled"])),
  default: "cancelled",
  yieldsToPanels: true,
});

async function MCe(S, x) {
  if ((await S(Rh, {})) === "cancelled") return;
  Ae((j) => ({ ...j, hasAcknowledgedCostThreshold: true }), x), s("tengu_cost_threshold_acknowledged", {});
}

F();

function U8e(GCo) {
  return GCo.toolPermissionContext.mode;
}

function FCe(S, x) {
  switch (S) {
    case "yes": {
      if (x === null || !kg(x)) return { behavior: "deny" };
      return { behavior: "allow", updatedInput: {}, permissionUpdates: x.applies };
    }
    case "no":
      return { behavior: "deny" };
  }
}

function U3(qCo) {
  let NS = _(27),
    { payload: ICe, answer: ECe, accepts: DCe } = qCo,
    WM = hs(),
    { refusedWithin: qM, noteRefused: VM, epoch: VCo } = pi(),
    I8e;
  if (NS[0] !== WM || NS[1] !== VM || NS[2] !== qM)
    (I8e = function PF() {
      if (WM() || qM()) {
        return VM(), true;
      }
      return false;
    }),
      (NS[0] = WM),
      (NS[1] = VM),
      (NS[2] = qM),
      (NS[3] = I8e);
  else I8e = NS[3];
  let PF = I8e,
    NCe = Hm(),
    LCe = Vs(VCo),
    OCe = W(U8e),
    E8e;
  if (NS[4] === d) (E8e = hK("plan")), (NS[4] = E8e);
  else E8e = NS[4];
  let N3 = E8e,
    D8e;
  if (NS[5] !== DCe || NS[6] !== ECe || NS[7] !== WM || NS[8] !== VM || NS[9] !== qM || NS[10] !== OCe)
    (D8e = (N8e) => {
      if (WM() || qM()) {
        VM();
        return;
      }
      if (!DCe()) {
        return;
      }
      if (N8e === "yes" && N3 !== null) s("tengu_plan_enter", { entryMethod: w("tool") }), V5(OCe, "plan");
      ECe(FCe(N8e, N3));
    }),
      (NS[5] = DCe),
      (NS[6] = ECe),
      (NS[7] = WM),
      (NS[8] = VM),
      (NS[9] = qM),
      (NS[10] = OCe),
      (NS[11] = D8e);
  else D8e = NS[11];
  let L3 = D8e,
    L8e;
  if (NS[12] === d)
    (L8e = e(t, { children: "Claude wants to enter plan mode to explore and design an implementation approach." })),
      (NS[12] = L8e);
  else L8e = NS[12];
  let O8e;
  if (NS[13] === d)
    (O8e = r(o, {
      marginTop: 1,
      flexDirection: "column",
      children: [
        e(t, { dimColor: true, children: "In plan mode, Claude will:" }),
        e(t, { dimColor: true, children: " \xB7 Explore the codebase thoroughly" }),
        e(t, { dimColor: true, children: " \xB7 Identify existing patterns" }),
        e(t, { dimColor: true, children: " \xB7 Design an implementation strategy" }),
        e(t, { dimColor: true, children: " \xB7 Present a plan for your approval" }),
      ],
    })),
      (NS[13] = O8e);
  else O8e = NS[13];
  let F8e;
  if (NS[14] === d)
    (F8e = e(o, {
      marginTop: 1,
      children: e(t, { dimColor: true, children: "No code changes will be made until you approve the plan." }),
    })),
      (NS[14] = F8e);
  else F8e = NS[14];
  let O3, F3;
  if (NS[15] !== L3) (O3 = () => L3("yes")), (F3 = () => L3("no")), (NS[15] = L3), (NS[16] = O3), (NS[17] = F3);
  else (O3 = NS[16]), (F3 = NS[17]);
  let B3;
  if (NS[18] !== LCe.remountKey || NS[19] !== PF || NS[20] !== NCe || NS[21] !== O3 || NS[22] !== F3)
    (B3 = r(o, {
      flexDirection: "column",
      marginTop: 1,
      paddingX: 1,
      children: [
        L8e,
        O8e,
        F8e,
        e(o, {
          marginTop: 1,
          children: e(
            wn,
            {
              refuseInput: PF,
              windowAnchorMs: NCe,
              hideIndexes: true,
              confirmLabel: N3 !== null ? N3.node : "Yes, enter plan mode",
              cancelLabel: "No, start implementing now",
              onConfirm: O3,
              onCancel: F3,
            },
            LCe.remountKey,
          ),
        }),
      ],
    })),
      (NS[18] = LCe.remountKey),
      (NS[19] = PF),
      (NS[20] = NCe),
      (NS[21] = O3),
      (NS[22] = F3),
      (NS[23] = B3);
  else B3 = NS[23];
  let B8e;
  if (NS[24] !== ICe.requestSource || NS[25] !== B3)
    (B8e = e(di, { color: "planMode", title: "Enter plan mode?", requestSource: ICe.requestSource, children: B3 })),
      (NS[24] = ICe.requestSource),
      (NS[25] = B3),
      (NS[26] = B8e);
  else B8e = NS[26];
  return B8e;
}

F();

lOn({
  isPlanArtifactEnabled: Zne,
  publishPlanArtifact: (S, x, P) => Kit(S, qk(), x, P),
  workshopVerifiedSlugsWith: Ghe,
});

var q_ = 300,
  S7e =
    "I'm sending this plan to Ultraplan to be refined remotely. Let me know it's been handed off and that a web link will appear here in a moment \u2014 I can use that to edit and iterate on the plan in the browser once the plan has been generated. I can continue to work here in the meantime; Claude Code will notify me when the cloud plan is ready for review, and I have the option to teleport the plan back here for implementation post-approval.",
  cve = 200000,
  uve =
    "(the plan is too large to be shown in full \u2014 approval is withheld; send feedback asking for a shorter plan, or press Esc)";

function yve(S) {
  return [{ type: "setMode", mode: sd(S), destination: "session" }];
}

function dve(S, x, P, j, H) {
  if (ax()) return;
  if (!P && Yc(K())) return;
  let Z;
  if (nl()) {
    let re = cO();
    if (re) Z = y7e(re);
  }
  qge([xe({ content: S.slice(0, 1000) })], new AbortController().signal, { credentials: H })
    .then(async (re) => {
      let ue = re ? Us(re) : "";
      if (!ue || Yc(K())) return;
      let de = K(),
        pe = Hl();
      if ((l2(de, ue, j), await z7(de, ue, pe, "auto", j), oN(ue, j, "auto"), Z)) await iM(Z, ue, "auto", j);
      x((Re) => {
        if (Re.standaloneAgentContext?.name === ue) return Re;
        return { ...Re, standaloneAgentContext: { ...Re.standaloneAgentContext, name: ue } };
      });
    })
    .catch(h);
}

var mve = [
    { label: "Review plan as artifact", value: "review-artifact" },
    { label: "Skip", value: "skip" },
  ],
  l6 = "Couldn't publish plan \u2014 run /plan share to retry, or --debug for details.",
  c6 = "Publishing plans isn't available right now \u2014 the plan was not published.",
  u6 = " \u2014 after exiting, /plan share publishes the updated plan";

function Gm(S) {
  return S.status !== "idle";
}

function pve(S) {
  switch (S.status) {
    case "idle":
      return null;
    case "publishing":
      return { text: "Publishing plan for review\u2026", dim: true };
    case "done":
      return { text: `Review your plan: ${S.url}`, dim: false };
    case "failed":
      return { text: l6, dim: false };
    case "unavailable":
      return { text: c6, dim: false };
    case "stale":
      return { text: `Review your plan: ${S.url} (plan changed since publish${u6})`, dim: false };
  }
}

function fve({
  showClearContext: S,
  showUltraplan: x,
  usedPercent: P,
  isAutoModeAvailable: j,
  isBypassPermissionsModeAvailable: H,
  autoModeGateSnapshot: Z,
  approvalsWithheld: re = false,
  onFeedbackChange: ue,
}) {
  let de = [],
    pe = {},
    Re = {},
    be = P !== null ? ` (${P}% used)` : "",
    Pe = Boolean(j) && Z;
  if (!re && S)
    if (H) de.push({ label: `Yes, clear context${be} and bypass permissions`, value: "yes-bypass-permissions" });
    else if (Pe) de.push({ label: `Yes, clear context${be} and use auto mode`, value: "yes-auto-clear-context" });
    else de.push({ label: `Yes, clear context${be} and auto-accept edits`, value: "yes-accept-edits" });
  if (!re) {
    if (H) {
      let Ie = hK("bypassPermissions", { isBypassPermissionsModeAvailable: H });
      if (Ie !== null)
        (pe["yes-accept-edits-keep-context"] = Ie),
          (Re["yes-accept-edits-keep-context"] = "bypassPermissions"),
          de.push({ label: Ie.node, value: "yes-accept-edits-keep-context" });
    } else if (Pe) {
      let Ie = ket("exit-plan-resume");
      (pe["yes-resume-auto-mode"] = Ie),
        (Re["yes-resume-auto-mode"] = "auto"),
        de.push({ label: Ie.node, value: "yes-resume-auto-mode" });
    } else {
      let Ie = hK("acceptEdits", { labelVariant: "plan-keep-context" });
      if (Ie !== null)
        (pe["yes-accept-edits-keep-context"] = Ie),
          (Re["yes-accept-edits-keep-context"] = "acceptEdits"),
          de.push({ label: Ie.node, value: "yes-accept-edits-keep-context" });
    }
    let Oe = hK("default", { labelVariant: "plan-keep-context" });
    if (Oe !== null)
      (pe["yes-default-keep-context"] = Oe),
        (Re["yes-default-keep-context"] = "default"),
        de.push({ label: Oe.node, value: "yes-default-keep-context" });
  }
  if (x) de.push({ label: "No, refine with Ultraplan on Claude Code on the web", value: "ultraplan" });
  return (
    de.push({
      type: "input",
      label: "No, keep planning",
      value: "no",
      placeholder: "Tell Claude what to change",
      ...(re ? {} : { description: "shift+tab to approve with this feedback" }),
      onChange: ue,
    }),
    { options: de, keepContextRows: pe, keepContextModes: Re, autoModeGateSnapshot: Z }
  );
}

function gve(S, x) {
  if (!S) return null;
  let P = _p({ permissionMode: x, mainLoopModel: at(), exceeds200kTokens: false }),
    j = Lp(P, zp()),
    { used: H } = b3t(
      {
        input_tokens: S.input_tokens,
        cache_creation_input_tokens: S.cache_creation_input_tokens ?? 0,
        cache_read_input_tokens: S.cache_read_input_tokens ?? 0,
      },
      j,
    );
  return H;
}

function hve(S, x) {
  let {
      currentPlan: P,
      planEditedLocally: j,
      acceptFeedback: H,
      trimmedFeedback: Z,
      hasImages: re,
      imageBlocks: ue,
      showClearContext: de,
      keepContextRow: pe,
    } = x,
    Re = j ? { plan: P } : {};
  if (S === "ultraplan") return { behavior: "deny", feedback: S7e };
  if (de && (S === "yes-bypass-permissions" || S === "yes-accept-edits" || S === "yes-auto-clear-context"))
    return { behavior: "deny" };
  if (S === "yes-accept-edits-keep-context" || S === "yes-default-keep-context" || S === "yes-resume-auto-mode") {
    if (pe === null || !kg(pe)) return { behavior: "deny" };
    return { behavior: "allow", updatedInput: Re, permissionUpdates: pe.applies, feedback: H };
  }
  if (S === "no") {
    if (!Z && !re) return null;
    return {
      behavior: "deny",
      feedback: Z || (re ? "(See attached image)" : void 0),
      contentBlocks: ue && ue.length > 0 ? ue : void 0,
    };
  }
  return null;
}

function Sve({ payload: S, answer: x, accepts: P }) {
  let j = W((Qt) => Qt.toolPermissionContext),
    H = At(),
    Z = Xn(),
    { storageV5: re, credentials: ue } = ge(),
    de = Iu(),
    pe = ct(),
    { addNotification: Re } = Or(),
    [be, Pe] = u(""),
    [Oe, Ie] = u({}),
    He = br(() => [be]);
  A(() => Y1(() => He()), []);
  let Fe = W((Qt) => Qt.settings.showClearContextOnPlanAccept) ?? false,
    Ve = W((Qt) => Qt.ultraplanSessionUrl),
    Ke = W((Qt) => Qt.ultraplanLaunching),
    ot = Oc(),
    st = aY(),
    nt = y2() && Mt("allow_remote_sessions") && !Ve && !Ke && st !== null,
    { mode: Pt, isAutoModeAvailable: kt, isBypassPermissionsModeAvailable: Ht } = j,
    { plan: yt, planFilePath: lt, usage: Rt } = S,
    [to, so] = u(() => (yt && yt.length > 0 ? yt : "No plan found. Please write your plan to the plan file first.")),
    jt = C(to);
  function Gt(Qt) {
    (jt.current = Qt), so(Qt);
  }
  let vo = !yt || yt.trim() === "",
    [qt] = u(() => Zne() && !vo),
    [lo, To] = u(() => (qt ? "review" : "proceed")),
    [ao, jo] = u({ status: "idle" }),
    Qo = C(ao);
  function uo(Qt) {
    (Qo.current = Qt), jo(Qt);
  }
  let Pn = z(() => _E(), []),
    Yt = to.length <= cve,
    No = z(() => Yt && !lk(to), [Yt, to]),
    cn = z(() => (No ? Cdt(to) : null), [No, to]),
    tn = z(() => hK("default"), []),
    nn = z(
      () =>
        fve({
          showClearContext: Fe,
          showUltraplan: nt,
          usedPercent: Fe ? gve(Rt, Pt) : null,
          isAutoModeAvailable: kt,
          isBypassPermissionsModeAvailable: Ht,
          autoModeGateSnapshot: Pn,
          approvalsWithheld: !No,
          onFeedbackChange: Pe,
        }),
      [Fe, nt, Rt, Pt, kt, Ht, Pn, No],
    ),
    pn = nn.options,
    Go = W((Qt) => Qt.proactivityLevel),
    Oo = void 0,
    xo = C(false);
  A(() => {
    if (xo.current) return;
    (xo.current = true),
      s("tengu_plan_exit_dialog_shown", {
        planLengthChars: yt?.length ?? 0,
        isEmptyPlan: vo,
        publishOptionVisible: qt,
      });
  }, [vo, qt, yt]);
  let [dn, Xo] = u(false),
    [zo, en] = u(false);
  Yn(() => Xo(false), dn ? 5000 : null, [dn]);
  function un(Qt, Jo) {
    let lr = _v(void 0, Oe),
      Nn = {
        id: lr,
        type: "image",
        content: Qt,
        mediaType: Jo?.mediaType || "image/png",
        filename: Jo?.filename || "Pasted image",
        dimensions: Jo?.dimensions,
      },
      bn = p6(H, "storedImagePaths");
    xZ(Nn, bn), IZ(Nn, bn), Ie((Sn) => ({ ...Sn, [lr]: Nn }));
  }
  let Uo = B((Qt) => {
      Ie((Jo) => {
        let lr = { ...Jo };
        return delete lr[Qt], lr;
      });
    }, []),
    Rn = Object.values(Oe).filter((Qt) => Qt.type === "image"),
    mr = Rn.length > 0,
    Pr = T8(),
    Ir = dxe(),
    An = C(null),
    [Wr, Kn] = u(0);
  qn(() => {
    let Qt = An.current ? HS(An.current).height : 0;
    if (Qt !== Wr) Kn(Qt);
  }),
    qn(() => {
      if (!Ir) return;
      return Ir(Wr), () => Ir(null);
    }, [Ir, Wr]);
  let { rows: Tn } = Ui({ rows: 0, columns: 0 }),
    tr = Ee(),
    hi = Ir !== null && Pr !== null,
    ti = hi ? Math.max(1, Tn - Wr) : Math.max(1, tr.rows - Wr - 4),
    pr = vS(),
    Wn = pr ? Bg(pr) : null,
    yi = C(false),
    Ki = C(Date.now()),
    Wi = hs(),
    Rs = C(null),
    { refusedWithin: us, noteRefused: Xr } = pi();
  function as() {
    let Qt = Rs.current,
      Jo = Qt === null ? vb : q_;
    if (Wi() || (Qt !== null && bc(Qt, Jo)) || us(Jo)) return Xr(), true;
    return false;
  }
  function Li(Qt) {
    de.enqueuePendingNotification({ agentId: et(), value: Qt, mode: "task-notification" });
  }
  function Bs(Qt) {
    Li(Qt),
      de.enqueuePendingNotification({
        agentId: et(),
        value:
          "The ultraplan note above reports what happened to the plan. Do not respond to it \u2014 wait for the user\u2019s next message.",
        mode: "task-notification",
        isMeta: true,
      });
  }
  function Pl() {
    (Rs.current = Date.now()), To("proceed");
  }
  let Hr = C(false);
  function $i(Qt, Jo) {
    if (Hr.current) return;
    (Hr.current = true),
      s("tengu_plan_review_step", { choice: c(Qt), msSinceShown: Date.now() - Ki.current, viaChord: Jo });
  }
  function Zi(Qt) {
    if (Wi() || us()) {
      Xr();
      return;
    }
    if (!P()) return;
    if (yi.current) return;
    if (((yi.current = true), $i(Qt, false), Qt === "review-artifact")) {
      if (!Zne() || !to.trim()) {
        n("plan artifact: unavailable at review selection (gate off or empty plan)"),
          uo({ status: "unavailable" }),
          Li(c6),
          Pl();
        return;
      }
      uo({ status: "publishing" });
      let Jo = () => {
          uo({ status: "failed" }), Li(l6);
        },
        lr = to;
      Kit(lr, qk(), fHe(Z.getState, Z.setState), ue)
        .then((Nn) => {
          if (Nn.url)
            if (
              (H((bn) => {
                let Sn = Ghe(bn.workshopVerifiedSlugs, Nn);
                return Sn === null ? bn : { ...bn, workshopVerifiedSlugs: Sn };
              }),
              jt.current !== lr)
            )
              uo({ status: "stale", url: Nn.url }),
                Li(`Published plan: ${Nn.url} (the plan changed during publish${u6})`);
            else uo({ status: "done", url: Nn.url }), Li(`Published plan: ${Nn.url}`);
          else n(`plan artifact: publish returned ${Nn.err}`), Jo();
        })
        .catch((Nn) => {
          h(Nn), Jo();
        });
    }
    Pl();
  }
  async function Ca(Qt) {
    let Jo = Rs.current,
      lr = Jo === null ? vb : q_;
    if (Wi() || (Jo !== null && bc(Jo, lr)) || us(lr)) {
      Xr();
      return;
    }
    if (!P()) return;
    let Nn = be.trim(),
      bn = Nn || void 0,
      Sn = (ii) =>
        hve(Qt, {
          currentPlan: to,
          planEditedLocally: zo,
          acceptFeedback: bn,
          trimmedFeedback: Nn,
          hasImages: mr,
          imageBlocks: ii,
          showClearContext: Fe,
          keepContextRow: nn.keepContextRows[Qt] ?? null,
        });
    if (Qt === "ultraplan" && st) {
      s("tengu_plan_exit", { planLengthChars: to.length, outcome: w("ultraplan"), publishRequested: Gm(Qo.current) }),
        x(Sn()),
        mBt({
          arg: "",
          source: "exit_plan_mode",
          seedPlan: to,
          getAppState: Z.getState,
          setAppState: Z.setState,
          signal: new AbortController().signal,
          queue: de,
          surface: { ...st, note: Bs, queue: de, session: pe },
          onStatusMessage: Li,
          storageV5: re,
          credentials: ue,
        })
          .then(Li)
          .catch(h);
      return;
    }
    let Ho =
      Qt === "yes-accept-edits-keep-context" || Qt === "yes-default-keep-context" || Qt === "yes-resume-auto-mode";
    if (Ho && nn.keepContextRows[Qt] === void 0) {
      x(Sn());
      return;
    }
    let Cn = (Qt === "yes-resume-auto-mode" || Qt === "yes-auto-clear-context") && nn.autoModeGateSnapshot,
      Zn = iw();
    if (Qt !== "no" && !Cn && Zn)
      mC(false),
        GO(true),
        H((ii) => ({ ...ii, toolPermissionContext: { ...g7(ii.toolPermissionContext), prePlanMode: void 0 } }));
    if (Qt !== "no") dve(to, H, !Ho, re, ue);
    if (Fe && (Qt === "yes-bypass-permissions" || Qt === "yes-accept-edits" || Qt === "yes-auto-clear-context")) {
      let ii = "default";
      if (Qt === "yes-bypass-permissions") ii = "bypassPermissions";
      else if (Qt === "yes-accept-edits") ii = "acceptEdits";
      else if (Qt === "yes-auto-clear-context" && nn.autoModeGateSnapshot) (ii = "auto"), mC(true);
      s("tengu_plan_exit", {
        planLengthChars: to.length,
        outcome: c(Qt),
        clearContext: true,
        hasFeedback: !!bn,
        publishRequested: Gm(Qo.current),
      }),
        I9({ from: "plan", to: ii, trigger: "exit_plan_mode" });
      let Ss = `

If you need specific details from before exiting plan mode (like exact code snippets, error messages, or content you generated), read the full transcript at: ${Hl()}`,
        Ii = gdt(io()),
        Ha = bn
          ? `

User feedback on this plan: ${bn}`
          : "";
      H((Ac) => ({
        ...Ac,
        initialMessage: {
          message: {
            ...xe({
              content: `Implement the following plan:

${to}${Ss}${Ii}${Ha}`,
              origin: { kind: "auto-continuation" },
            }),
            planContent: to,
            queueSkipAttachments: true,
          },
          clearContext: true,
          mode: ii,
        },
      })),
        qO(true),
        x({ behavior: "deny" });
      return;
    }
    if (Qt === "yes-resume-auto-mode" && nn.autoModeGateSnapshot) {
      s("tengu_plan_exit", {
        planLengthChars: to.length,
        outcome: c(Qt),
        clearContext: false,
        hasFeedback: !!bn,
        publishRequested: Gm(Qo.current),
      }),
        qO(true),
        kj(true),
        mC(true),
        I9({ from: "plan", to: "auto", trigger: "exit_plan_mode" }),
        H((ii) => {
          let As = { ...ii.toolPermissionContext, mode: "auto", prePlanMode: void 0 };
          return { ...ii, toolPermissionContext: zL(As) };
        }),
        x(Sn());
      return;
    }
    if (Ho) {
      let ii = nn.keepContextRows[Qt] ?? null,
        As = nn.keepContextModes[Qt];
      if (ii === null || As === void 0 || !kg(ii)) {
        x(Sn());
        return;
      }
      I9({ from: "plan", to: As, trigger: "exit_plan_mode" }),
        s("tengu_plan_exit", {
          planLengthChars: to.length,
          outcome: c(Qt),
          clearContext: false,
          hasFeedback: !!bn,
          publishRequested: Gm(Qo.current),
        }),
        qO(true),
        kj(true),
        x(Sn());
      return;
    }
    if (Qt === "no") {
      if (!Nn && !mr) return;
      let ii;
      if (mr)
        ii = await Promise.all(
          Rn.map(async (As) => {
            let { block: Ss } = await Fg({ data: As.content, mediaType: As.mediaType, limits: Ya(ot) });
            return Ss;
          }),
        );
      if (x(Sn(ii)) === false) return;
      s("tengu_plan_exit", { planLengthChars: to.length, outcome: w("no"), publishRequested: Gm(Qo.current) });
      return;
    }
  }
  let va = B(() => {
    let Qt = Rs.current,
      Jo = Qt === null ? vb : q_;
    if (Wi() || (Qt !== null && bc(Qt, Jo)) || us(Jo)) {
      Xr();
      return;
    }
    if (!P()) return;
    s("tengu_plan_exit", { planLengthChars: to.length, outcome: w("no"), publishRequested: Gm(Qo.current) }),
      x({ behavior: "deny" });
  }, [x, P, to.length]);
  function qo(Qt) {
    if (Wi() || us()) {
      Xr();
      return;
    }
    if (!P()) return;
    if (Qt === "yes") {
      if (tn === null || !kg(tn)) {
        x({ behavior: "deny" });
        return;
      }
      if ((s("tengu_plan_exit", { planLengthChars: 0, outcome: w("yes-default"), publishRequested: false }), iw()))
        mC(false),
          GO(true),
          H((lr) => ({ ...lr, toolPermissionContext: { ...g7(lr.toolPermissionContext), prePlanMode: void 0 } }));
      qO(true), kj(true), x({ behavior: "allow", updatedInput: {}, permissionUpdates: tn.applies });
      return;
    }
    s("tengu_plan_exit", { planLengthChars: 0, outcome: w("no"), publishRequested: false }), x({ behavior: "deny" });
  }
  function jn() {
    let Qt = Qo.current;
    if (Qt.status === "done") uo({ status: "stale", url: Qt.url });
  }
  let So = (Qt) => {
    if (Qt.ctrl && Qt.key === "g") {
      if ((Qt.preventDefault(), Wi() || us())) {
        Xr();
        return;
      }
      if (!P()) return;
      s("tengu_plan_external_editor_used", {}),
        (async () => {
          if (lt) {
            let Jo = await lW(lt);
            if ((Dp(lt), Jo.error))
              Re({ key: "external-editor-error", kind: "warning", text: Jo.error, color: "warning", priority: "high" });
            if (Jo.content !== null) {
              if (Jo.content !== to) en(true), jn();
              Gt(Jo.content), Xo(true);
            }
          } else {
            let Jo = await WP(to);
            if (Jo.error)
              Re({ key: "external-editor-error", kind: "warning", text: Jo.error, color: "warning", priority: "high" });
            if (Jo.content !== null && Jo.content !== to) jn(), Gt(Jo.content), Xo(true);
          }
        })();
      return;
    }
    if (Qt.shift && Qt.key === "tab") {
      if ((Qt.preventDefault(), !No)) return;
      let Jo = Fe
        ? (["yes-bypass-permissions", "yes-auto-clear-context", "yes-accept-edits"].find((lr) =>
            pn.some((Nn) => Nn.value === lr),
          ) ?? null)
        : nn.keepContextRows["yes-accept-edits-keep-context"] !== void 0
          ? "yes-accept-edits-keep-context"
          : nn.keepContextRows["yes-resume-auto-mode"] !== void 0
            ? "yes-resume-auto-mode"
            : nn.keepContextRows["yes-default-keep-context"] !== void 0
              ? "yes-default-keep-context"
              : null;
      if (Jo === null) return;
      if (lo === "review") $i("skip", true);
      Ca(Jo);
      return;
    }
  };
  if (vo)
    return e(di, {
      color: "planMode",
      title: "Exit plan mode?",
      requestSource: S.requestSource,
      children: r(o, {
        flexDirection: "column",
        paddingX: 1,
        marginTop: 1,
        children: [
          e(t, { children: "Claude wants to exit plan mode" }),
          e(o, {
            marginTop: 1,
            children: e(Ce, {
              refuseInput: as,
              selectedValue: Ti,
              options: [
                { label: tn !== null ? tn.node : "Yes", value: "yes" },
                { label: "No", value: "no" },
              ],
              onChange: qo,
              onCancel: () => qo("no"),
            }),
          }),
        ],
      }),
    });
  let Mo = pve(ao);
  return r(xr, {
    onKeyDown: So,
    children: [
      e(Ab, {
        ref: Pr?.attach,
        flexDirection: "column",
        height: hi ? ti : void 0,
        stickyScroll: false,
        children: e(di, {
          color: "planMode",
          title: "Ready to code?",
          innerPaddingX: 0,
          requestSource: S.requestSource,
          children: r(o, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              e(o, { paddingX: 1, flexDirection: "column", children: e(t, { children: "Here is Claude's plan:" }) }),
              e(Iy, {
                marginBottom: 1,
                children: cn !== null ? e(Ni, { children: cn }) : e(t, { dimColor: true, children: uve }),
              }),
              e(o, {
                flexDirection: "column",
                paddingX: 1,
                children: e(Hg, { permissionResult: S.permissionResult, toolType: "tool" }),
              }),
            ],
          }),
        }),
      }),
      r(o, {
        ref: An,
        flexDirection: "column",
        borderStyle: "round",
        borderColor: "planMode",
        borderLeft: false,
        borderRight: false,
        borderBottom: false,
        paddingX: 1,
        flexShrink: 0,
        children: [
          lo === "review"
            ? r(U, {
                children: [
                  e(t, {
                    dimColor: true,
                    children: "Claude has written up a plan. Would you like to review it as an artifact first?",
                  }),
                  e(o, {
                    marginTop: 1,
                    children: e(Ce, {
                      refuseInput: as,
                      selectedValue: Ti,
                      options: mve,
                      onChange: Zi,
                      onCancel: va,
                      onImagePaste: un,
                      pastedContents: Oe,
                      onRemoveImage: Uo,
                    }),
                  }),
                ],
              })
            : r(U, {
                children: [
                  Mo && e(o, { marginBottom: 1, children: e(t, { dimColor: Mo.dim, children: Mo.text }) }),
                  e(t, {
                    dimColor: true,
                    children: "Claude has written up a plan and is ready to execute. Would you like to proceed?",
                  }),
                  e(o, {
                    marginTop: 1,
                    children: e(Ce, {
                      refuseInput: as,
                      selectedValue: Ti,
                      options: pn,
                      defaultFocusValue: Oo,
                      onChange: (Qt) => void Ca(Qt),
                      onCancel: va,
                      onImagePaste: un,
                      pastedContents: Oe,
                      onRemoveImage: Uo,
                    }),
                  }),
                ],
              }),
          Wn &&
            e(o, {
              marginTop: 1,
              children: r(t, {
                children: [
                  r(t, {
                    dimColor: true,
                    children: [e(M, { chord: "ctrl+g", action: `edit in ${Wn}` }), lt && ` \xB7 ${Fo(lt)}`],
                  }),
                  dn &&
                    r(U, {
                      children: [
                        e(t, { dimColor: true, children: " \xB7 " }),
                        r(t, {
                          color: "success",
                          children: [e(tt, { status: "success", withSpace: true }), "Plan saved!"],
                        }),
                      ],
                    }),
                ],
              }),
            }),
        ],
      }),
    ],
  });
}

F();

F();

function f6(Md) {
  let bve = _(9),
    b7e;
  if (bve[0] !== Md.edits || bve[1] !== Md.file_path || bve[2] !== Md.remoteOldContent || bve[3] !== Md.skipLocalRead)
    (b7e = () => Rve(Md.file_path, Md.edits, Md.remoteOldContent, Md.skipLocalRead ?? false).then(xve)),
      (bve[0] = Md.edits),
      (bve[1] = Md.file_path),
      (bve[2] = Md.remoteOldContent),
      (bve[3] = Md.skipLocalRead),
      (bve[4] = b7e);
  else b7e = bve[4];
  let [kve] = u(b7e),
    k7e;
  if (bve[5] === d)
    (k7e = e(Iy, { paddingX: 0, children: e(t, { dimColor: true, children: "\u2026" }) })), (bve[5] = k7e);
  else k7e = bve[5];
  let C7e;
  if (bve[6] !== kve || bve[7] !== Md.file_path)
    (C7e = e(Jn, { fallback: k7e, children: e(m6, { promise: kve, file_path: Md.file_path }) })),
      (bve[6] = kve),
      (bve[7] = Md.file_path),
      (bve[8] = C7e);
  else C7e = bve[8];
  return C7e;
}

function m6(CTo) {
  let wTo = _(6),
    { promise: vTo, file_path: Cve } = CTo,
    { patch: vve, firstLine: wve, fileContent: Tve } = zn(vTo),
    { columns: _ve } = Ee(),
    v7e;
  if (wTo[0] !== _ve || wTo[1] !== Tve || wTo[2] !== Cve || wTo[3] !== wve || wTo[4] !== vve)
    (v7e = e(Iy, {
      paddingX: 0,
      children: e(SQ, { hunks: vve, dim: false, width: _ve, filePath: Cve, firstLine: wve, fileContent: Tve }),
    })),
      (wTo[0] = _ve),
      (wTo[1] = Tve),
      (wTo[2] = Cve),
      (wTo[3] = wve),
      (wTo[4] = vve),
      (wTo[5] = v7e);
  else v7e = wTo[5];
  return v7e;
}

async function Rve(S, x, P, j) {
  let H = x.filter((re) => re.old_string != null && re.new_string != null),
    Z = H.length === 1 ? H[0] : void 0;
  if (P === void 0 && !j) {
    if (Z && Z.old_string.length >= sSe) return G_(S, [Z]);
  }
  try {
    if (P !== void 0) {
      let ue = H.map((de) => d6(P, de));
      return { patch: VL({ filePath: S, fileContents: P, edits: ue }), firstLine: wr(P), fileContent: P };
    }
    if (j) return G_(S, H);
    let re = await k4e(S);
    if (re === null) return G_(S, H);
    try {
      if (!Z || Z.old_string === "") {
        let Re = await bdt(re);
        if (Re === null) return G_(S, H);
        let be = H.map((Pe) => d6(Re, Pe));
        return { patch: VL({ filePath: S, fileContents: Re, edits: be }), firstLine: wr(Re), fileContent: Re };
      }
      let ue = await qan(re, Z.old_string, GIe);
      if (ue.truncated || ue.content === "") return G_(S, [Z]);
      let de = d6(ue.content, Z),
        pe = VL({ filePath: S, fileContents: ue.content, edits: [de] });
      return {
        patch: _dt(pe, ue.lineOffset - 1),
        firstLine: ue.lineOffset === 1 ? wr(ue.content) : null,
        fileContent: ue.content,
      };
    } finally {
      await re.close();
    }
  } catch (re) {
    if ($o(re)) n(`FileEditToolDiff: fs error computing diff for ${S}: ${re.message}`, { level: "error" });
    else h(re);
    return G_(S, H);
  }
}

function G_(S, x) {
  return {
    patch: x.flatMap((P) => VL({ filePath: S, fileContents: P.old_string, edits: [P] })),
    firstLine: null,
    fileContent: void 0,
  };
}

function xve(S) {
  return {
    patch: S.patch.map((x) => ({ ...x, lines: x.lines.map(Pve) })),
    firstLine: S.firstLine === null ? null : Pve(S.firstLine),
    fileContent: S.fileContent,
  };
}

function Pve(S) {
  return Od(Hs(S));
}

function d6(S, x) {
  let P = Vle(S, x.old_string) || x.old_string,
    j = YIe(x.old_string, P, x.new_string);
  return { ...x, old_string: P, new_string: j };
}

function _7e(S) {
  let x = gt(S),
    P = gt(`${Se()}/.claude`),
    j = yr(x),
    H = yr(P);
  return j.startsWith(H + Ive.toLowerCase()) || j.startsWith(H + "/");
}

function R7e(S) {
  let x = gt(S),
    P = T7e(w7e(), ".claude"),
    j = yr(x),
    H = yr(P);
  return j.startsWith(H + Ive.toLowerCase()) || j.startsWith(H + "/");
}

var Mve = new Set(["addRules"]),
  x7e = "(file family: no shell tool)";

function A7e(S) {
  let x = S.filter((Z) => Z.type === "addRules").flatMap((Z) => Z.rules);
  if (x.length === 0 || x.length > wK) return null;
  let P = [];
  for (let Z of x) {
    if (Z.toolName !== _t || Z.ruleContent === void 0 || !CUe(Z.ruleContent) || !UG(Z.ruleContent)) return null;
    P.push(Z.ruleContent);
  }
  let j = te(P),
    H = VIe(j, (Z) => TS(CUe(Z)));
  if (se(H.join(" and ")) > Nie) return null;
  return r(t, { children: ["Yes, allow reading from ", Fie(H), " during this session"] });
}

function M7e(S, x, P) {
  let j = _7e(S),
    H = R7e(S);
  if ((j || H) && x !== "read") {
    let Pe = H ? hbt : gbt,
      Oe = Ow(
        [{ type: "addRules", rules: [{ toolName: Kt, ruleContent: Pe }], behavior: "allow", destination: "session" }],
        {
          displayedTypes: Mve,
          renderLabel: (Ie) => {
            let He = Ie.length === 1 ? Ie[0] : void 0;
            if (
              He === void 0 ||
              He.type !== "addRules" ||
              He.rules.length !== 1 ||
              He.rules[0]?.toolName !== Kt ||
              He.rules[0]?.ruleContent !== Pe
            )
              return null;
            return "Yes, and allow Claude to edit its own settings for this session";
          },
        },
      );
    return Oe === null ? null : { row: Oe, value: "yes-claude-folder" };
  }
  let Z = bKe(S, x, P),
    re = [],
    ue = Z.find((Pe) => Pe.type === "setMode");
  if (ue?.type === "setMode" && ue.mode === "acceptEdits") {
    let Pe = hK("acceptEdits");
    if (Pe !== null) re.push(Pe);
  }
  let de = Z.find((Pe) => Pe.type === "addDirectories");
  if (de?.type === "addDirectories") {
    let Pe = hRt(de.directories);
    if (Pe !== null) re.push(Pe);
  }
  let pe = Z.filter((Pe) => Pe.type === "addRules");
  if (pe.length > 0) {
    let Pe = Ow(pe, { displayedTypes: Mve, labelPredicate: (Oe) => vUe(Oe, x7e), renderLabel: A7e });
    if (Pe !== null) re.push(Pe);
  }
  let [Re, ...be] = re;
  if (Re === void 0) return null;
  return { row: be.length === 0 ? Re : yRt(Re, ...be), value: "yes-session" };
}

function Eve({
  filePath: S,
  toolPermissionContext: x,
  operationType: P = "write",
  onRejectFeedbackChange: j,
  onAcceptFeedbackChange: H,
  yesInputMode: Z = false,
  noInputMode: re = false,
  standingRowVetoed: ue = false,
}) {
  let de = [],
    pe = Nh("confirm:cycleMode", "Confirmation", "shift+tab");
  if (Z && H)
    de.push({
      type: "input",
      label: "Yes",
      value: "yes",
      placeholder: "and tell Claude what to do next",
      onChange: H,
      allowEmptySubmitToCancel: true,
      option: { type: "accept-once" },
    });
  else de.push({ label: "Yes", value: "yes", option: { type: "accept-once" } });
  let Re = ue ? null : M7e(S, P, x);
  if (Re !== null) {
    let Pe =
      Re.value === "yes-session" && P !== "read"
        ? r(t, { children: [Re.row.node, " ", r(t, { bold: true, children: ["(", pe, ")"] })] })
        : Re.row.node;
    de.push({ label: Pe, value: Re.value, option: { type: "accept-session", row: Re.row } });
  }
  if (re && j)
    de.push({
      type: "input",
      label: "No",
      value: "no",
      placeholder: "and tell Claude what to do differently",
      onChange: j,
      allowEmptySubmitToCancel: true,
      option: { type: "reject" },
    });
  else de.push({ label: "No", value: "no", option: { type: "reject" } });
  return de;
}

F();

function L7e(N7e) {
  return { ...N7e, lines: N7e.lines.map(Hs) };
}

function O7e(o_o) {
  return e(md, { fromLeftEdge: true, children: e(t, { dimColor: true, children: "..." }) }, `ellipsis-${o_o}`);
}

function S6(t_o) {
  let jF = _(18),
    { file_path: K_, content: $S, fileExists: g6, oldContent: Q_ } = t_o,
    { columns: Dve } = Ee(),
    Nve;
  bb0: {
    if (!g6) {
      Nve = null;
      break bb0;
    }
    let HF;
    if (jF[0] !== $S || jF[1] !== K_ || jF[2] !== Q_)
      (HF = VL({ filePath: K_, fileContents: Q_, edits: [{ old_string: Q_, new_string: $S, replace_all: false }] }).map(
        L7e,
      )),
        (jF[0] = $S),
        (jF[1] = K_),
        (jF[2] = Q_),
        (jF[3] = HF);
    else HF = jF[3];
    Nve = HF;
  }
  let h6 = Nve,
    HF;
  if (jF[4] !== $S || jF[5] !== g6) (HF = g6 ? null : Hs($S)), (jF[4] = $S), (jF[5] = g6), (jF[6] = HF);
  else HF = jF[6];
  let Lve = HF,
    I7e;
  if (jF[7] !== $S) (I7e = Hs(wr($S))), (jF[7] = $S), (jF[8] = I7e);
  else I7e = jF[8];
  let Ove = I7e,
    y6;
  if (jF[9] !== Dve || jF[10] !== Lve || jF[11] !== K_ || jF[12] !== Ove || jF[13] !== h6 || jF[14] !== Q_)
    (y6 = h6
      ? rK(
          h6.map((E7e) =>
            e(gx, { patch: E7e, dim: false, filePath: K_, firstLine: Ove, fileContent: Q_, width: Dve - 2 }, E7e.newStart),
          ),
          O7e,
        )
      : e(o_, { code: Lve || "(No content)", filePath: K_ })),
      (jF[9] = Dve),
      (jF[10] = Lve),
      (jF[11] = K_),
      (jF[12] = Ove),
      (jF[13] = h6),
      (jF[14] = Q_),
      (jF[15] = y6);
  else y6 = jF[15];
  let D7e;
  if (jF[16] !== y6) (D7e = e(Iy, { paddingX: 1, children: y6 })), (jF[16] = y6), (jF[17] = D7e);
  else D7e = jF[17];
  return D7e;
}

F();

function Z7e(H7e) {
  return H7e.length > Cv ? { notebook: null, tooLargeForPreview: true } : zm(qF(H7e.toString("utf-8")));
}

function eZe() {
  return zm(null);
}

function tZe(I_o) {
  return I_o.project.cwd;
}

function oZe(J7e) {
  return { ...J7e, lines: J7e.lines.map(Hs) };
}

function nZe(E_o) {
  return e(md, { fromLeftEdge: true, children: e(t, { dimColor: true, children: "..." }) }, `ellipsis-${E_o}`);
}

function zm(S) {
  return { notebook: S, tooLargeForPreview: false };
}

function qF(S) {
  let x = Ut(S);
  return uSe(x) ? x : null;
}

function Xve(S) {
  let x = ce(S, GA);
  if (!n2(x)) return "(unnamed cell)";
  let P = Bo(Hs(x)),
    j = Od(P);
  if (!t2(j)) return "(unnamed cell)";
  return rt(Tdt(j, j, j !== P || x.length < S.length), Wle);
}

function N6(lc) {
  let F7e = _(8),
    B7e;
  if (
    F7e[0] !== lc.notebook_path ||
    F7e[1] !== lc.oldCellSource ||
    F7e[2] !== lc.remoteOldContent ||
    F7e[3] !== lc.skipLocalRead
  )
    (B7e =
      lc.oldCellSource !== void 0
        ? Promise.resolve(zm(null))
        : lc.remoteOldContent !== void 0
          ? Promise.resolve(zm(qF(lc.remoteOldContent)))
          : lc.skipLocalRead || Qi(lc.notebook_path) || _r(lc.notebook_path)
            ? Promise.resolve(zm(null))
            : le()
                .stat(lc.notebook_path)
                .then((U7e) =>
                  !U7e.isFile()
                    ? zm(null)
                    : U7e.size > Cv
                      ? { notebook: null, tooLargeForPreview: true }
                      : le()
                          .readFileBytes(lc.notebook_path, Cv + 1)
                          .then(Z7e),
                )
                .catch(eZe)),
      (F7e[0] = lc.notebook_path),
      (F7e[1] = lc.oldCellSource),
      (F7e[2] = lc.remoteOldContent),
      (F7e[3] = lc.skipLocalRead),
      (F7e[4] = B7e);
  else B7e = F7e[4];
  let Fve = B7e,
    j7e;
  if (F7e[5] !== Fve || F7e[6] !== lc)
    (j7e = e(Jn, { fallback: null, children: e(D6, { ...lc, promise: Fve, resolvedOldSource: lc.oldCellSource }) })),
      (F7e[5] = Fve),
      (F7e[6] = lc),
      (F7e[7] = j7e);
  else j7e = F7e[7];
  return j7e;
}

function D6(T_o) {
  let Hu = _(51),
    {
      notebook_path: Km,
      cell_id: Nd,
      new_source: WS,
      cell_type: z_,
      edit_mode: $7e,
      verbose: Bve,
      width: Uve,
      promise: __o,
      resolvedOldSource: k6,
    } = T_o,
    Zf = $7e === void 0 ? "replace" : $7e,
    Hve = ct(tZe),
    { notebook: qS, tooLargeForPreview: R_o } = zn(__o),
    $F;
  bb0: {
    if (k6 !== void 0) {
      $F = k6;
      break bb0;
    }
    if (!qS || !Nd) {
      $F = "";
      break bb0;
    }
    let VS;
    if (Hu[0] !== Nd || Hu[1] !== qS.cells) {
      let KS;
      if (Hu[3] !== Nd) (KS = (x_o) => x_o.id === Nd), (Hu[3] = Nd), (Hu[4] = KS);
      else KS = Hu[4];
      VS = qS.cells.find(KS);
      (Hu[0] = Nd), (Hu[1] = qS.cells), (Hu[2] = VS);
    } else VS = Hu[2];
    let W7e = VS;
    let q7e = W7e === void 0 ? qle(Nd) : void 0;
    let eI = W7e ?? (q7e !== void 0 ? qS.cells[q7e] : void 0);
    if (!eI) {
      $F = "";
      break bb0;
    }
    let KS;
    if (Hu[5] !== eI.source)
      (KS = Array.isArray(eI.source) ? eI.source.join("") : eI.source), (Hu[5] = eI.source), (Hu[6] = KS);
    else KS = Hu[6];
    $F = KS;
  }
  let eg = $F,
    VS;
  bb1: {
    if (Zf === "insert" || k6 !== void 0) {
      VS = void 0;
      break bb1;
    }
    if (R_o) {
      VS =
        "notebook too large for preview \u2014 the current cell contents cannot be shown; the edit applies to the real cell on approval";
      break bb1;
    }
    if (!qS) {
      VS =
        "notebook preview unavailable \u2014 the current cell contents cannot be shown; the edit applies to the real cell on approval";
      break bb1;
    }
    if (eg === "" && Nd) {
      let A_o = qS.cells.some((P_o) => P_o.id === Nd);
      let V7e = qle(Nd);
      let M_o = V7e !== void 0 && qS.cells[V7e] !== void 0;
      if (!A_o && !M_o) {
        VS = "cell not found in the notebook preview \u2014 the current cell contents cannot be shown";
        break bb1;
      }
    }
    VS = void 0;
  }
  let C6 = VS,
    KS;
  bb2: {
    if (!(k6 !== void 0 || qS !== null) || Zf === "insert" || Zf === "delete") {
      KS = null;
      break bb2;
    }
    let WF;
    if (Hu[7] !== WS || Hu[8] !== Km || Hu[9] !== eg)
      (WF = VL({
        filePath: Km,
        fileContents: eg,
        edits: [{ old_string: eg, new_string: WS, replace_all: false }],
        ignoreWhitespace: false,
      }).map(oZe)),
        (Hu[7] = WS),
        (Hu[8] = Km),
        (Hu[9] = eg),
        (Hu[10] = WF);
    else WF = Hu[10];
    KS = WF;
  }
  let v6 = KS,
    WF;
  if (Hu[11] !== Zf || Hu[12] !== eg) (WF = Zf === "delete" ? Hs(eg) : ""), (Hu[11] = Zf), (Hu[12] = eg), (Hu[13] = WF);
  else WF = Hu[13];
  let $ve = WF,
    G7e;
  if (Hu[14] !== WS) (G7e = Hs(WS)), (Hu[14] = WS), (Hu[15] = G7e);
  else G7e = Hu[15];
  let w6 = G7e,
    K7e;
  if (Hu[16] !== WS) (K7e = Hs(wr(WS))), (Hu[16] = WS), (Hu[17] = K7e);
  else K7e = Hu[17];
  let Vve = K7e,
    tI;
  bb3: switch (Zf) {
    case "insert": {
      tI = "Insert new cell";
      break bb3;
    }
    case "delete": {
      tI = "Delete cell";
      break bb3;
    }
    default: {
      tI = "Replace cell contents";
    }
  }
  let T6;
  if (Hu[18] !== Hve || Hu[19] !== Km || Hu[20] !== Bve)
    (T6 = Bve ? Km : Yve(Hve, Km)), (Hu[18] = Hve), (Hu[19] = Km), (Hu[20] = Bve), (Hu[21] = T6);
  else T6 = Hu[21];
  let _6;
  if (Hu[22] !== T6) (_6 = nr(T6)), (Hu[22] = T6), (Hu[23] = _6);
  else _6 = Hu[23];
  let R6;
  if (Hu[24] !== _6) (R6 = e(t, { bold: true, children: _6 })), (Hu[24] = _6), (Hu[25] = R6);
  else R6 = Hu[25];
  let x6;
  if (Hu[26] !== Nd) (x6 = Nd ? Xve(Nd) : Nd), (Hu[26] = Nd), (Hu[27] = x6);
  else x6 = Hu[27];
  const Gve = z_ === "code" || z_ === "markdown" ? ` (${z_})` : "";
  let P6;
  if (Hu[28] !== tI || Hu[29] !== x6 || Hu[30] !== Gve)
    (P6 = r(t, { dimColor: true, wrap: "truncate-end", children: [tI, " for cell", " ", x6, Gve] })),
      (Hu[28] = tI),
      (Hu[29] = x6),
      (Hu[30] = Gve),
      (Hu[31] = P6);
  else P6 = Hu[31];
  let M6;
  if (Hu[32] !== C6) (M6 = C6 !== void 0 && e(t, { dimColor: true, children: C6 })), (Hu[32] = C6), (Hu[33] = M6);
  else M6 = Hu[33];
  let I6;
  if (Hu[34] !== R6 || Hu[35] !== P6 || Hu[36] !== M6)
    (I6 = r(o, { paddingBottom: 1, flexDirection: "column", children: [R6, P6, M6] })),
      (Hu[34] = R6),
      (Hu[35] = P6),
      (Hu[36] = M6),
      (Hu[37] = I6);
  else I6 = Hu[37];
  let E6;
  if (
    Hu[38] !== z_ ||
    Hu[39] !== Vve ||
    Hu[40] !== w6 ||
    Hu[41] !== $ve ||
    Hu[42] !== Zf ||
    Hu[43] !== v6 ||
    Hu[44] !== Km ||
    Hu[45] !== eg ||
    Hu[46] !== Uve
  )
    (E6 =
      Zf === "delete"
        ? e(o, { flexDirection: "column", paddingLeft: 2, children: e(o_, { code: $ve, filePath: Km }) })
        : Zf === "insert"
          ? e(o, {
              flexDirection: "column",
              paddingLeft: 2,
              children: e(o_, { code: w6, filePath: z_ === "markdown" ? "file.md" : Km }),
            })
          : v6
            ? rK(
                v6.map((Q7e) =>
                  e(
                    gx,
                    { patch: Q7e, dim: false, width: Uve, filePath: Km, firstLine: Vve, fileContent: eg },
                    Q7e.newStart,
                  ),
                ),
                nZe,
              )
            : e(o_, { code: w6, filePath: z_ === "markdown" ? "file.md" : Km })),
      (Hu[38] = z_),
      (Hu[39] = Vve),
      (Hu[40] = w6),
      (Hu[41] = $ve),
      (Hu[42] = Zf),
      (Hu[43] = v6),
      (Hu[44] = Km),
      (Hu[45] = eg),
      (Hu[46] = Uve),
      (Hu[47] = E6);
  else E6 = Hu[47];
  let Y7e;
  if (Hu[48] !== I6 || Hu[49] !== E6)
    (Y7e = e(o, { flexDirection: "column", children: r(wi, { children: [I6, E6] }) })),
      (Hu[48] = I6),
      (Hu[49] = E6),
      (Hu[50] = Y7e);
  else Y7e = Hu[50];
  return Y7e;
}

function iZe(S, x, P) {
  switch (S.type) {
    case "accept-once":
      return { behavior: "allow", updatedInput: x.input, ...(P && { feedback: P }) };
    case "accept-session": {
      if (!kg(S.row)) return { behavior: "allow", updatedInput: x.input };
      return { behavior: "allow", updatedInput: x.input, permissionUpdates: S.row.applies };
    }
    case "reject":
      return { behavior: "deny", ...(P && { feedback: P }) };
  }
}

function sZe(S) {
  if (S.kind === "plain") return e(t, { children: S.text });
  return r(t, { children: ["Do you want to ", S.verbPhrase, " ", e(t, { bold: true, children: S.fileName }), "?"] });
}

function aZe(S, x, P) {
  let j = S.content;
  switch (j.kind) {
    case "file-edit-diff":
      return e(f6, {
        file_path: j.filePath,
        edits: [...j.edits],
        remoteOldContent: j.remoteOldContent,
        skipLocalRead: j.skipLocalRead,
      });
    case "file-write-diff":
      return r(o, {
        flexDirection: "column",
        children: [
          j.notice === void 0 ? null : e(t, { dimColor: true, children: j.notice }),
          e(S6, { file_path: j.filePath, content: j.content, fileExists: j.fileExists, oldContent: j.oldContent }),
        ],
      });
    case "notebook-edit-diff":
      return e(N6, {
        notebook_path: j.notebookPath,
        cell_id: j.cellId,
        new_source: j.newSource,
        cell_type: j.cellType,
        edit_mode: j.editMode,
        verbose: true,
        width: 120,
        remoteOldContent: j.remoteOldContent,
        skipLocalRead: j.skipLocalRead,
        oldCellSource: j.oldCellSource,
      });
    case "tool-use-line": {
      let H = S.renderedToolUseMessage;
      if (typeof H === "string") {
        if (P !== null)
          return e(o, {
            flexDirection: "column",
            paddingX: 2,
            paddingY: 1,
            children: e(t, { dimColor: true, children: P }),
          });
        H = Bo(H);
      }
      if (H == null)
        try {
          let Z = ts(S.input, (re) => (typeof re === "string" ? Od(nr(re)) : re));
          H = URe(S.toolName, Z, { theme: x, verbose: true });
        } catch (Z) {
          h(
            new R(
              `Error rendering tool use line for ${S.toolName}: ${Z}`,
              "Error rendering tool use line (file consent dialog fallback)",
            ),
          ),
            (H = nr(S.filePath));
        }
      return e(o, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1,
        children: r(t, { children: [S.userFacingName, "(", H, ")"] }),
      });
    }
    case "no-changes":
      return e(t, { dimColor: true, children: j.message });
  }
}

function ewe({ payload: S, answer: x }) {
  let P = W((so) => so.toolPermissionContext),
    [j] = mn(),
    H = z(() => {
      if (S.content.kind !== "tool-use-line" || typeof S.renderedToolUseMessage !== "string") return null;
      let so = Om(S.renderedToolUseMessage);
      return so.kind === "withheld" ? String(so.marker) : null;
    }, [S.content.kind, S.renderedToolUseMessage]),
    Z = z(
      () =>
        S.content.kind === "tool-use-line" &&
        S.renderedToolUseMessage == null &&
        Object.values(S.input).some((so) => {
          if (typeof so !== "string") return false;
          let jt = nr(so);
          return Od(jt) !== jt;
        }),
      [S.content.kind, S.renderedToolUseMessage, S.input],
    ),
    re = z(() => aZe(S, j, H), [S, j, H]),
    ue = z(() => Un(S.toolName), [S.toolName]),
    { requestedMachine: de, runsOnMachine: pe } = z(() => EWt(S.input), [S.input]),
    {
      acceptFeedback: Re,
      rejectFeedback: be,
      setAcceptFeedback: Pe,
      setRejectFeedback: Oe,
      acceptInputMode: Ie,
      rejectInputMode: He,
      handleInputModeToggle: Fe,
      handleFocus: Ve,
      logSubmitted: Ke,
      logEscape: ot,
      hintNode: st,
    } = ZJ({ feedbackTypeOf: eUe, toolName: ue, isMcp: S.isMcp, initialFocusedType: "accept" }),
    nt = S.permissionResult.behavior === "ask" ? S.permissionResult.decisionReason : void 0,
    Pt =
      (nt?.type === "safetyCheck" && !nt.classifierApprovable) ||
      S.isAskCappedByOrg ||
      GV(S.requestSource) ||
      S.contentWithheld === true ||
      H !== null ||
      Z ||
      de !== void 0,
    kt = z(
      () =>
        Eve({
          filePath: S.filePath,
          toolPermissionContext: P,
          operationType: S.operationType,
          onRejectFeedbackChange: Oe,
          onAcceptFeedbackChange: Pe,
          yesInputMode: Ie,
          noInputMode: He,
          standingRowVetoed: Pt,
        }),
      [S.filePath, S.operationType, Pt, P, Ie, He],
    ),
    Ht = B(
      (so, jt) => {
        if (x(iZe(so, S, jt)) === false) return false;
        if (so.type === "reject") Ke("reject", jt);
        else if (so.type === "accept-once") Ke("accept", jt);
        return true;
      },
      [x, S, Ke],
    ),
    yt = B(() => {
      if (Ie) {
        Fe("yes");
        return;
      }
      if (He) {
        Fe("no");
        return;
      }
      let so = kt.find((jt) => jt.option.type === "accept-session");
      if (so) Ht(so.option);
    }, [Ie, He, Fe, kt, Ht]);
  ht({ "confirm:cycleMode": yt }, { context: "Confirmation" });
  let lt = S.symlinkTarget
      ? e(o, {
          paddingX: 1,
          marginBottom: 1,
          children: e(t, {
            color: "warning",
            children: rZe(S.workingDir ?? ee(), S.symlinkTarget).startsWith("..")
              ? `This will modify ${nr(S.symlinkTarget)} (outside working directory) via a symlink`
              : `Symlink target: ${nr(S.symlinkTarget)}`,
          }),
        })
      : null,
    Rt = B(
      (so) => {
        let jt = kt.find((Gt) => Gt.value === so);
        if (!jt) return false;
        if (jt.option.type === "reject") {
          let Gt = be.trim();
          return Ht(jt.option, Gt || void 0);
        }
        if (jt.option.type === "accept-once") {
          let Gt = Re.trim();
          return Ht(jt.option, Gt || void 0);
        }
        return Ht(jt.option);
      },
      [kt, be, Re, Ht],
    ),
    to = B(() => {
      if (Ht({ type: "reject" }) === false) return;
      ot();
    }, [ot, Ht]);
  return r(U, {
    children: [
      r(di, {
        title: S.showingDiffInIDE
          ? Q4n`Opened changes in ${t9(S.ideName ?? "IDE")} \u29C9`
          : pe !== void 0
            ? `${S.title} (runs on ${pe})`
            : S.title,
        subtitle: S.subtitle,
        innerPaddingX: 0,
        requestSource: S.requestSource,
        children: [
          lt,
          S.permissionResult.denialLimitFallback !== void 0 &&
            e(o, { paddingX: 1, children: e(Hg, { permissionResult: S.permissionResult, toolType: "edit" }) }),
          S.showingDiffInIDE
            ? v5e() &&
              e(o, {
                paddingX: 1,
                marginBottom: 1,
                children: e(t, { dimColor: true, children: "Save file to continue\u2026" }),
              })
            : re,
          r(o, {
            flexDirection: "column",
            paddingX: 1,
            children: [
              sZe(S.question),
              e(Ce, {
                selectedValue: Ti,
                options: kt,
                inlineDescriptions: true,
                onChange: Rt,
                onCancel: to,
                onFocus: Ve,
                onInputModeToggle: Fe,
              }),
            ],
          }),
        ],
      }),
      e(o, {
        paddingX: 1,
        marginTop: 1,
        children: e(t, {
          dimColor: true,
          children: r(fe, { children: [e(M, { chord: "escape", action: "cancel" }), st] }),
        }),
      }),
    ],
  });
}

F();

F();

function owe(S) {
  fi.mainLoopBusy.setState((x) => (x.busy === S ? x : { busy: S }));
}

function F6() {
  return Lt(fi.mainLoopBusy.subscribe, twe, twe);
}

function twe() {
  return fi.mainLoopBusy.getState().busy;
}

function gZe(MRo) {
  return MRo.activeGoal;
}

function G6(RRo) {
  let tg = _(31),
    { payload: nwe, answer: rwe } = RRo,
    B6 = W(gZe),
    xRo = F6(),
    lZe;
  if (tg[0] !== nwe.condition) (lZe = Ci(nwe.condition)), (tg[0] = nwe.condition), (tg[1] = lZe);
  else lZe = tg[1];
  let iwe = lZe,
    cZe;
  if (tg[2] === d) (cZe = Date.now()), (tg[2] = cZe);
  else cZe = tg[2];
  let uZe = C(cZe),
    { refusedWithin: oI, noteRefused: nI, epoch: PRo } = pi(),
    swe = Hm(),
    dZe;
  if (tg[3] !== nI || tg[4] !== oI)
    (dZe = function VF() {
      if (bc(uZe.current, Fi) || oI(Fi)) {
        return nI(), true;
      }
      return false;
    }),
      (tg[3] = nI),
      (tg[4] = oI),
      (tg[5] = dZe);
  else dZe = tg[5];
  let VF = dZe,
    mZe;
  if (tg[6] !== rwe || tg[7] !== nI || tg[8] !== oI)
    (mZe = function rI(ARo) {
      if (bc(uZe.current, Fi) || oI(Fi)) {
        nI();
        return;
      }
      rwe(ARo);
    }),
      (tg[6] = rwe),
      (tg[7] = nI),
      (tg[8] = oI),
      (tg[9] = mZe);
  else mZe = tg[9];
  let rI = mZe,
    cwe = Vs(PRo, Fi),
    pZe;
  if (tg[10] === d) (pZe = e(t, { bold: true, color: "permission", children: "Claude proposes a goal" })), (tg[10] = pZe);
  else pZe = tg[10];
  let U6;
  if (tg[11] !== iwe) (U6 = e(o, { paddingX: 1, children: e(t, { children: iwe }) })), (tg[11] = iwe), (tg[12] = U6);
  else U6 = tg[12];
  const uwe = xRo
    ? "Claude continues with the current work while you decide."
    : "Claude has finished its current work \u2014 approving starts it working again, toward this goal. Esc dismisses without setting it.";
  let H6;
  if (tg[13] !== uwe)
    (H6 = r(t, {
      dimColor: true,
      children: [
        "Approving sets this as the session goal, like running /goal: after each turn a separate check decides whether the condition is met, and Claude keeps working until it is.",
        " ",
        uwe,
      ],
    })),
      (tg[13] = uwe),
      (tg[14] = H6);
  else H6 = tg[14];
  let $6;
  if (tg[15] !== B6)
    ($6 =
      B6 !== void 0 &&
      r(t, { dimColor: true, children: ["Approving replaces the current goal:", " ", sZ(wr(B6.condition), 200)] })),
      (tg[15] = B6),
      (tg[16] = $6);
  else $6 = tg[16];
  let W6, q6;
  if (tg[17] !== rI)
    (W6 = () => rI({ approved: true, explicit: true })),
      (q6 = () => rI({ approved: false, explicit: true })),
      (tg[17] = rI),
      (tg[18] = W6),
      (tg[19] = q6);
  else (W6 = tg[18]), (q6 = tg[19]);
  let V6;
  if (tg[20] !== cwe.remountKey || tg[21] !== VF || tg[22] !== swe || tg[23] !== W6 || tg[24] !== q6)
    (V6 = e(
      wn,
      {
        refuseInput: VF,
        windowAnchorMs: swe,
        confirmLabel: "Set this goal",
        cancelLabel: "Not now",
        hideIndexes: true,
        cancelFirst: true,
        focus: "cancel",
        onConfirm: W6,
        onCancel: q6,
        windowMs: Fi,
      },
      cwe.remountKey,
    )),
      (tg[20] = cwe.remountKey),
      (tg[21] = VF),
      (tg[22] = swe),
      (tg[23] = W6),
      (tg[24] = q6),
      (tg[25] = V6);
  else V6 = tg[25];
  let fZe;
  if (tg[26] !== V6 || tg[27] !== U6 || tg[28] !== H6 || tg[29] !== $6)
    (fZe = e(fo, {
      color: "permission",
      children: r(o, { flexDirection: "column", gap: 1, paddingBottom: 1, children: [pZe, U6, H6, $6, V6] }),
    })),
      (tg[26] = V6),
      (tg[27] = U6),
      (tg[28] = H6),
      (tg[29] = $6),
      (tg[30] = fZe);
  else fZe = tg[30];
  return fZe;
}

var UC = go({
  kind: "ide_onboarding",
  payload: m(() => f({ installationStatus: qm((S) => typeof S === "object" && S !== null).nullable() })),
  result: m(() => oe(["dismissed", "cancelled"])),
  default: "cancelled",
  yieldsToPanels: true,
});

F();

function Swe(S, x, P, j) {
  switch (S) {
    case "yes":
      return { behavior: "allow", updatedInput: x.input, ...(j && { feedback: j }) };
    case "yes-apply-suggestions": {
      if (P === null || !kg(P)) return { behavior: "allow", updatedInput: x.input };
      return { behavior: "allow", updatedInput: x.input, permissionUpdates: P.applies };
    }
    case "no":
      return { behavior: "deny", ...(j && { feedback: j }) };
  }
}

function vZe(S) {
  let x = S.filter((H) => H.type === "addRules").flatMap((H) => H.rules);
  if (x.length === 0 || x.length > wK) return null;
  let P;
  try {
    P = x.map((H) =>
      eo(H.ruleContent === void 0 ? { toolName: H.toolName } : { toolName: H.toolName, ruleContent: H.ruleContent }),
    );
  } catch {
    return null;
  }
  let j = Av(te(P), (H) => TS(H));
  if (se(j.join(" and ")) > Nie) return null;
  return r(t, { children: ["Yes, and don't ask again for ", Fie(j)] });
}

function bwe(S) {
  let x = "suggestions" in S.permissionResult ? S.permissionResult.suggestions : void 0;
  if (!Array.isArray(x) || x.length === 0) return null;
  let P = [],
    j = Ow(x, { displayedTypes: sOn, renderLabel: vZe });
  if (j !== null) P.push(j);
  let H = [],
    Z = false;
  try {
    let de = x.length;
    if (((Z = typeof de === "number" && Number.isSafeInteger(de) && de >= 0 && de <= oq), Z)) {
      let pe = oq * wK;
      for (let Re = 0; Re < de && Z; Re++)
        try {
          let be = x[Re];
          if (be === null || typeof be !== "object" || be.type !== "addDirectories") continue;
          let Pe = be.directories;
          if (!Array.isArray(Pe)) continue;
          let Oe = Pe.length;
          if (typeof Oe !== "number" || !Number.isSafeInteger(Oe) || Oe < 0) continue;
          if (((pe -= Oe), pe < 0)) {
            Z = false;
            break;
          }
          for (let Ie = 0; Ie < Oe; Ie++) H.push(Pe[Ie]);
        } catch {}
    }
  } catch {
    Z = false;
  }
  if (Z && H.length > 0) {
    let de = hRt(H);
    if (de !== null) P.push(de);
  }
  let [re, ...ue] = P;
  if (re === void 0) return null;
  return ue.length === 0 ? re : yRt(re, ...ue);
}

function Cwe(S) {
  let x = S.permissionResult.behavior === "ask" ? S.permissionResult.decisionReason : void 0;
  return By(x, (P) => !P.classifierApprovable) !== void 0 || S.isAskCappedByOrg;
}

function vwe(S) {
  return (
    S.command?.kind === "withheld" ||
    S.mcp?.argsDisplay?.kind === "withheld" ||
    S.ws?.url.kind === "withheld" ||
    (S.command === void 0 && S.mcp === void 0 && S.ws === void 0)
  );
}

function X_(S) {
  return S.kind === "full" ? S.text : S.marker;
}

function o4(exo) {
  let Ld = _(42),
    { payload: qi, answer: iI } = exo,
    hZe;
  if (Ld[0] !== qi) (hZe = qi.showAlwaysAllow && !Cwe(qi) && !vwe(qi) ? bwe(qi) : null), (Ld[0] = qi), (Ld[1] = hZe);
  else hZe = Ld[1];
  let zS = hZe,
    yZe;
  if (Ld[2] !== iI || Ld[3] !== qi || Ld[4] !== zS)
    (yZe = (txo, oxo) => iI(Swe(txo, qi, zS, oxo))), (Ld[2] = iI), (Ld[3] = qi), (Ld[4] = zS), (Ld[5] = yZe);
  else yZe = Ld[5];
  let dwe = yZe,
    SZe;
  if (Ld[6] !== iI) (SZe = () => iI({ behavior: "deny" })), (Ld[6] = iI), (Ld[7] = SZe);
  else SZe = Ld[7];
  let mwe = SZe,
    bZe;
  if (Ld[8] === d) (bZe = { label: "Yes", value: "yes", feedbackConfig: { type: "accept" } }), (Ld[8] = bZe);
  else bZe = Ld[8];
  let kZe;
  if (Ld[9] !== zS) {
    let pwe = [bZe];
    if (zS !== null) {
      let K6;
      if (Ld[11] !== zS.node)
        (K6 = { label: zS.node, value: "yes-apply-suggestions" }), (Ld[11] = zS.node), (Ld[12] = K6);
      else K6 = Ld[12];
      pwe.push(K6);
    }
    kZe = (pwe.push({ label: "No", value: "no", feedbackConfig: { type: "reject" } }), pwe);
    (Ld[9] = zS), (Ld[10] = kZe);
  } else kZe = Ld[10];
  let gwe = kZe;
  const K6 = qi.requestSource;
  let Q6;
  if (Ld[13] !== qi.command || Ld[14] !== qi.intervalMs || Ld[15] !== qi.mcp || Ld[16] !== qi.ws)
    (Q6 = qi.mcp
      ? r(U, {
          children: [
            r(t, {
              children: [
                "Poll",
                " ",
                r(t, { bold: true, children: [qi.mcp.server, "/", qi.mcp.tool] }),
                " ",
                "every ",
                qi.intervalMs / 1000,
                "s",
              ],
            }),
            qi.mcp.argsDisplay !== void 0
              ? e(zi, {
                  multiline: qi.mcp.argsDisplay.kind === "full" && qi.mcp.argsDisplay.needsGutter,
                  children: r(t, { dimColor: true, children: ["args: ", X_(qi.mcp.argsDisplay)] }),
                })
              : null,
          ],
        })
      : qi.ws
        ? r(U, {
            children: [
              e(zi, {
                multiline: qi.ws.url.kind === "full" && qi.ws.url.needsGutter,
                children: r(t, { children: ["Open WebSocket ", e(t, { bold: true, children: X_(qi.ws.url) })] }),
              }),
              qi.ws.protocolsWithheld === true
                ? r(t, {
                    children: [
                      "subprotocols:",
                      " ",
                      e(t, { bold: true, children: "(cannot be shown in full \u2014 deny unless expected)" }),
                    ],
                  })
                : qi.ws.protocols !== void 0 && qi.ws.protocols.length > 0
                  ? r(t, { children: ["subprotocols:", " ", e(t, { bold: true, children: Ije(qi.ws.protocols) })] })
                  : null,
            ],
          })
        : qi.command
          ? e(zi, {
              multiline: qi.command.kind === "full" && qi.command.needsGutter,
              children: e(t, { children: X_(qi.command) }),
            })
          : null),
      (Ld[13] = qi.command),
      (Ld[14] = qi.intervalMs),
      (Ld[15] = qi.mcp),
      (Ld[16] = qi.ws),
      (Ld[17] = Q6);
  else Q6 = Ld[17];
  const hwe = qi.monitorDescription ?? "";
  let z6;
  if (Ld[18] !== hwe) (z6 = bE(hwe)), (Ld[18] = hwe), (Ld[19] = z6);
  else z6 = Ld[19];
  let Y6;
  if (Ld[20] !== qi.monitorDescription)
    (Y6 = e(t, { dimColor: true, children: qi.monitorDescription })), (Ld[20] = qi.monitorDescription), (Ld[21] = Y6);
  else Y6 = Ld[21];
  let J6;
  if (Ld[22] !== Y6 || Ld[23] !== z6)
    (J6 = e(zi, { multiline: z6, children: Y6 })), (Ld[22] = Y6), (Ld[23] = z6), (Ld[24] = J6);
  else J6 = Ld[24];
  let X6;
  if (Ld[25] !== J6 || Ld[26] !== Q6)
    (X6 = r(o, { flexDirection: "column", paddingX: 2, paddingY: 1, children: [Q6, J6] })),
      (Ld[25] = J6),
      (Ld[26] = Q6),
      (Ld[27] = X6);
  else X6 = Ld[27];
  const ywe = qi.mcp || qi.ws ? "tool" : "command";
  let Z6;
  if (Ld[28] !== qi.permissionResult || Ld[29] !== ywe)
    (Z6 = e(Hg, { permissionResult: qi.permissionResult, toolType: ywe })),
      (Ld[28] = qi.permissionResult),
      (Ld[29] = ywe),
      (Ld[30] = Z6);
  else Z6 = Ld[30];
  let e4;
  if (Ld[31] !== mwe || Ld[32] !== dwe || Ld[33] !== gwe)
    (e4 = e(Fj, { options: gwe, onSelect: dwe, onCancel: mwe })),
      (Ld[31] = mwe),
      (Ld[32] = dwe),
      (Ld[33] = gwe),
      (Ld[34] = e4);
  else e4 = Ld[34];
  let t4;
  if (Ld[35] !== Z6 || Ld[36] !== e4)
    (t4 = r(o, { flexDirection: "column", children: [Z6, e4] })), (Ld[35] = Z6), (Ld[36] = e4), (Ld[37] = t4);
  else t4 = Ld[37];
  let CZe;
  if (Ld[38] !== qi.requestSource || Ld[39] !== X6 || Ld[40] !== t4)
    (CZe = r(di, { title: ma, requestSource: K6, children: [X6, t4] })),
      (Ld[38] = qi.requestSource),
      (Ld[39] = X6),
      (Ld[40] = t4),
      (Ld[41] = CZe);
  else CZe = Ld[41];
  return CZe;
}

F();

function wwe({
  suggestionsRow: S = null,
  onRejectFeedbackChange: x,
  onAcceptFeedbackChange: P,
  yesInputMode: j = false,
  noInputMode: H = false,
  editablePrefix: Z,
  onEditablePrefixChange: re,
  hasBackendSuggestions: ue,
}) {
  let de = [];
  if (j)
    de.push({
      type: "input",
      label: "Yes",
      value: "yes",
      placeholder: "and tell Claude what to do next",
      onChange: P,
      allowEmptySubmitToCancel: true,
    });
  else de.push({ label: "Yes", value: "yes" });
  let pe = ue ?? S !== null;
  if (ELe() && pe) {
    let Re =
      S !== null &&
      S.applies.some(
        (be) => be.type === "addDirectories" || (be.type === "addRules" && be.rules.some((Pe) => Pe.toolName !== Bt)),
      );
    if (Z !== void 0 && re && !Re)
      de.push({
        type: "input",
        label: "Yes, and don\u2019t ask again for",
        value: "yes-prefix-edited",
        placeholder: "command prefix (e.g., Get-Process *)",
        initialValue: Z,
        onChange: re,
        allowEmptySubmitToCancel: true,
        showLabelWithValue: true,
        labelValueSeparator: ": ",
        resetCursorOnUpdate: true,
      });
    else if (S !== null) de.push({ label: S.node, value: "yes-apply-suggestions" });
  }
  if (H)
    de.push({
      type: "input",
      label: "No",
      value: "no",
      placeholder: "and tell Claude what to do differently",
      onChange: x,
      allowEmptySubmitToCancel: true,
    });
  else de.push({ label: "No", value: "no" });
  return de;
}

function wZe(S) {
  let x = [];
  for (let P of S.statements) for (let j of P.commands) if (j.elementType === "CommandAst") x.push(j);
  return x;
}

async function Twe(S, x) {
  if (x.nameType === "application") return null;
  let P = x.name;
  if (!P) return null;
  if (!/^[A-Za-z0-9_+-]+$/.test(P)) return null;
  if (R1n.has(P.toLowerCase())) return null;
  if (x.nameType === "cmdlet") return P;
  if (x.elementTypes?.[0] !== "StringConstant") return null;
  for (let ue = 0; ue < x.args.length; ue++) {
    let de = x.elementTypes[ue + 1];
    if (de !== "StringConstant" && de !== "Parameter") return null;
  }
  let j = P.toLowerCase(),
    H = await S.get(j),
    Z = await bFt(P, x.args, H),
    re = 0;
  for (let ue of Z.split(" ").slice(1)) {
    if (ue.includes("\\")) return null;
    while (re < x.args.length) {
      let de = x.args[re];
      if (de === ue) break;
      if (de.startsWith("-")) {
        if ((re++, H?.options && re < x.args.length && x.args[re] !== ue && !x.args[re].startsWith("-"))) {
          let pe = de.toLowerCase();
          if (H.options.find((be) => (Array.isArray(be.name) ? be.name.includes(pe) : be.name === pe))?.args) re++;
        }
        continue;
      }
      return null;
    }
    if (re >= x.args.length) return null;
    re++;
  }
  if (!Z.includes(" ") && (H?.subcommands?.length || Object.hasOwn(vdt, j))) return null;
  return Z;
}

async function _we(S, x, P) {
  let j = await ile(x);
  if (!j.valid) return [];
  let H = wZe(j);
  if (H.length <= 1) {
    let de = H[0] ? await Twe(S, H[0]) : null;
    return de ? [de] : [];
  }
  let Z = [];
  for (let de of H) {
    if (P?.(de)) continue;
    let pe = await Twe(S, de);
    if (pe) Z.push(pe);
  }
  if (Z.length === 0) return [];
  let re = new Map();
  for (let de of Z) {
    let pe = St(de, " ").toLowerCase(),
      Re = re.get(pe);
    if (Re) Re.push(de);
    else re.set(pe, [de]);
  }
  let ue = [];
  for (let [de, pe] of re) {
    let Re = TZe(pe);
    if ((Re === "" ? 0 : Dn(Re, " ") + 1) <= 1) {
      if ((await S.get(de))?.subcommands?.length || Object.hasOwn(vdt, de)) continue;
    }
    ue.push(Re);
  }
  return ue;
}

function TZe(S) {
  if (S.length === 0) return "";
  if (S.length === 1) return S[0];
  let x = S[0].split(" "),
    P = x.length;
  for (let j = 1; j < S.length; j++) {
    let H = S[j].split(" "),
      Z = 0;
    while (Z < P && Z < H.length && H[Z].toLowerCase() === x[Z].toLowerCase()) Z++;
    if (((P = Z), P === 0)) break;
  }
  return x.slice(0, P).join(" ");
}

var _Ze = (S) => vUe(S, Bt);

function RZe(S) {
  return Ow(S, { displayedTypes: GRt, labelPredicate: _Ze, renderLabel: (x) => zRt(x, Bt) });
}

function GF(S, x, P, j = {}) {
  switch (S) {
    case "yes":
      return { behavior: "allow", updatedInput: x.input, ...(j.feedback && { feedback: j.feedback }) };
    case "yes-apply-suggestions": {
      if (P === null || !kg(P)) return { behavior: "allow", updatedInput: x.input };
      return { behavior: "allow", updatedInput: x.input, permissionUpdates: P.applies };
    }
    case "yes-prefix-edited": {
      let H = _Rt(j.editablePrefixSeed, j.editablePrefix, Bt);
      if (H === null) return { behavior: "allow", updatedInput: x.input };
      return { behavior: "allow", updatedInput: x.input, permissionUpdates: H.applies };
    }
    case "no":
      return { behavior: "deny", ...(j.feedback && { feedback: j.feedback }) };
  }
}

function xwe({ payload: S, answer: x, accepts: P }) {
  let j = I4e.of(ct().host),
    H = S.command,
    Z = BM({ toolName: S.toolName, toolInput: S.input, toolDescription: S.description }),
    re = z(() => Un(S.toolName), [S.toolName]),
    {
      acceptFeedback: ue,
      rejectFeedback: de,
      setAcceptFeedback: pe,
      setRejectFeedback: Re,
      acceptInputMode: be,
      rejectInputMode: Pe,
      handleInputModeToggle: Oe,
      handleFocus: Ie,
      logSubmitted: He,
      logEscape: Fe,
      hintNode: Ve,
    } = ZJ({ feedbackTypeOf: eUe, toolName: re, isMcp: S.isMcp, initialFocusedType: "accept" }),
    Ke = typeof S.input.command !== "string" || S.input.command.length > Dm,
    [ot, st] = u(() => (Ke ? void 0 : i1(H))),
    nt = C(void 0),
    Pt = C(false);
  if (!Pt.current) (Pt.current = true), (nt.current = i1(ot));
  let kt = C(false);
  A(() => {
    if (Ke) return;
    let To = false;
    return (
      _we(j, H, (ao) => ihe(ao, ao.text))
        .then((ao) => {
          if (To || kt.current) return;
          if (ao.length > 0) {
            let jo = i1(`${ao[0]} *`);
            if (jo !== void 0) (nt.current = jo), st(jo);
          }
        })
        .catch(() => {}),
      () => {
        To = true;
      }
    );
  }, [j, H, Ke]);
  let Ht = B((To) => {
      (kt.current = true), st(To);
    }, []),
    { sandboxingEnabled: yt, isSandboxed: lt } = z(() => {
      let To = pt.isSandboxingEnabled(),
        ao =
          To &&
          S.requestSource?.type !== "remote-agent" &&
          vv({
            command: typeof S.input.command === "string" ? S.input.command : H,
            dangerouslyDisableSandbox: S.input.dangerouslyDisableSandbox === true,
            shellType: "powershell",
          });
      return { sandboxingEnabled: To, isSandboxed: ao };
    }, [H, S.input, S.requestSource]),
    Rt = z(() => Om(S.input.command, { maxUnits: Dm }), [S.input.command]),
    to = Rt.kind === "withheld" || typeof S.input.command !== "string",
    so = z(() => {
      if (to || !I("tengu_destructive_command_warning", false)) return null;
      let To = typeof S.input.command === "string" ? S.input.command : H;
      return H9n(To);
    }, [H, S.input, to]),
    jt =
      By(S.permissionResult.decisionReason, (To) => !To.classifierApprovable) !== void 0 ||
      S.isAskCappedByOrg ||
      GV(S.requestSource),
    Gt = z(() => (to || jt ? null : RZe(S.permissionResult.suggestions)), [to, jt, S.permissionResult.suggestions]),
    vo = z(
      () =>
        wwe({
          suggestionsRow: Gt,
          hasBackendSuggestions: !to && !jt && (S.permissionResult.suggestions?.length ?? 0) > 0,
          onRejectFeedbackChange: Re,
          onAcceptFeedbackChange: pe,
          yesInputMode: be,
          noInputMode: Pe,
          editablePrefix: to || jt ? void 0 : ot,
          onEditablePrefixChange: Ht,
        }),
      [Gt, to, jt, S.permissionResult.suggestions, be, Pe, ot, Ht],
    ),
    qt = B(
      (To) => {
        if (!P()) return false;
        if (
          (s("tengu_permission_request_option_selected", {
            option_index: { yes: 1, "yes-apply-suggestions": 2, "yes-prefix-edited": 2, no: 3 }[To],
          }),
          To === "yes")
        ) {
          let jo = ue.trim();
          He("accept", jo), x(GF("yes", S, Gt, { feedback: jo || void 0 }));
          return;
        }
        if (To === "no") {
          let jo = de.trim();
          He("reject", jo), x(GF("no", S, Gt, { feedback: jo || void 0 }));
          return;
        }
        if (To === "yes-prefix-edited") {
          x(GF("yes-prefix-edited", S, Gt, { editablePrefix: ot, editablePrefixSeed: nt.current }));
          return;
        }
        x(GF(To, S, Gt));
      },
      [x, P, S, Gt, ue, de, ot, He],
    ),
    lo = B(() => {
      if (!P()) return;
      Fe(), x({ behavior: "deny" });
    }, [x, P, Fe]);
  return r(di, {
    title: yt && !lt ? "PowerShell command (unsandboxed)" : "PowerShell command",
    requestSource: S.requestSource,
    children: [
      r(o, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1,
        children: [
          e(zi, {
            multiline: Rt.kind === "full" && Rt.needsGutter,
            children: e(t, { dimColor: Z.visible, children: Rt.kind === "withheld" ? Rt.marker : Rt.text }),
          }),
          !Z.visible &&
            e(zi, { multiline: bE(S.description), children: e(t, { dimColor: true, children: S.description }) }),
          e(UM, { visible: Z.visible, promise: Z.promise }),
        ],
      }),
      r(o, {
        flexDirection: "column",
        children: [
          e(Hg, { permissionResult: S.permissionResult, toolType: "command" }),
          so && e(o, { marginBottom: 1, children: e(t, { color: "warning", children: so }) }),
          e(t, { children: "Do you want to proceed?" }),
          e(Ce, {
            selectedValue: Ti,
            options: vo,
            inlineDescriptions: true,
            onChange: qt,
            onCancel: lo,
            onFocus: Ie,
            onInputModeToggle: Oe,
          }),
        ],
      }),
      e(o, {
        justifyContent: "space-between",
        marginTop: 1,
        children: e(t, {
          dimColor: true,
          children: r(fe, {
            children: [
              e(M, { chord: "escape", action: "cancel" }),
              Ve,
              Z.enabled && e(M, { chord: Z.chord, action: Z.visible ? "hide" : "explain" }),
            ],
          }),
        }),
      }),
    ],
  });
}

var Fh = go({
    kind: "lsp_recommendation",
    payload: m(() =>
      f({ pluginName: i(), pluginDescription: i().optional(), marketplaceName: i(), fileExtension: i() }),
    ),
    result: m(() => oe(["yes", "no", "timeout", "never", "disable", "cancelled"])),
    default: "cancelled",
    yieldsToPanels: true,
    yieldsToDraft: true,
  }),
  Uh = go({
    kind: "plugin_hint",
    payload: m(() =>
      f({ pluginName: i(), pluginDescription: i().optional(), marketplaceName: i(), sourceCommand: i() }),
    ),
    result: m(() => oe(["yes", "no", "disable", "cancelled"])),
    default: "cancelled",
    yieldsToPanels: true,
    yieldsToDraft: true,
  });

var jh = new Set([Fh.kind, Uh.kind, sf.kind, H1.kind, zU.kind, "ultraplan_choice"]);

function Up(S) {
  return S.open.findLast((x) => x.userInvoked !== true && !jh.has(x.kind)) ?? null;
}

F();

function Mwe(S, x) {
  let P = Wce(x),
    j = cs(S);
  if (!n2(j)) return `${x5n} ${Ote(S)}${P}`;
  let H = t9(j);
  return `${mX(x) ? uze(H) : dze(H)} ${Ote(S)}${P}`;
}

function Iwe(S, x) {
  let P = cs(x),
    j = cs(S);
  return {
    retry_fallback: n2(P) ? `Switch to ${t9(P)}` : "Switch to the fallback model",
    edit_prompt: n2(j) ? `Edit prompt and retry with ${t9(j)}` : "Edit prompt and retry",
  };
}

function h4(uPo) {
  let og = _(46),
    { payload: dc, answer: aI } = uPo,
    xZe;
  if (og[0] !== dc.fallbackModel || og[1] !== dc.originalModel)
    (xZe = Iwe(dc.originalModel, dc.fallbackModel)),
      (og[0] = dc.fallbackModel),
      (og[1] = dc.originalModel),
      (og[2] = xZe);
  else xZe = og[2];
  let lI = xZe,
    n4;
  if (og[3] !== lI.retry_fallback)
    (n4 = { value: "retry_fallback", label: lI.retry_fallback }), (og[3] = lI.retry_fallback), (og[4] = n4);
  else n4 = og[4];
  let r4;
  if (og[5] !== lI.edit_prompt)
    (r4 = { value: "edit_prompt", label: lI.edit_prompt }), (og[5] = lI.edit_prompt), (og[6] = r4);
  else r4 = og[6];
  let PZe;
  if (og[7] !== n4 || og[8] !== r4) (PZe = [n4, r4]), (og[7] = n4), (og[8] = r4), (og[9] = PZe);
  else PZe = og[9];
  let Pwe = PZe,
    i4,
    s4,
    a4,
    l4,
    u4,
    d4,
    m4,
    KF,
    p4;
  if (og[10] !== dc.apiRefusalCategory || og[11] !== dc.guidanceText || og[12] !== dc.originalModel) {
    let Awe = dc.guidanceText === void 0 ? "" : yo(dc.guidanceText, { maxCodeUnits: 512 });
    s4 = di;
    a4 = "warning";
    l4 = "Session paused";
    i4 = o;
    u4 = "column";
    d4 = 1;
    m4 = 1;
    let YS;
    if (og[22] !== dc.apiRefusalCategory || og[23] !== dc.originalModel)
      (YS = Mwe(dc.originalModel, dc.apiRefusalCategory)),
        (og[22] = dc.apiRefusalCategory),
        (og[23] = dc.originalModel),
        (og[24] = YS);
    else YS = og[24];
    if (og[25] !== YS) (KF = e(_q, { children: YS })), (og[25] = YS), (og[26] = KF);
    else KF = og[26];
    p4 =
      Awe !== "" &&
      e(o, {
        marginTop: 1,
        children: e(zi, { multiline: bE(Awe), children: e(t, { color: "inactive", children: Awe }) }),
      });
    (og[10] = dc.apiRefusalCategory),
      (og[11] = dc.guidanceText),
      (og[12] = dc.originalModel),
      (og[13] = i4),
      (og[14] = s4),
      (og[15] = a4),
      (og[16] = l4),
      (og[17] = u4),
      (og[18] = d4),
      (og[19] = m4),
      (og[20] = KF),
      (og[21] = p4);
  } else
    (i4 = og[13]),
      (s4 = og[14]),
      (a4 = og[15]),
      (l4 = og[16]),
      (u4 = og[17]),
      (d4 = og[18]),
      (m4 = og[19]),
      (KF = og[20]),
      (p4 = og[21]);
  let YS;
  if (og[27] !== aI) (YS = () => aI("cancelled")), (og[27] = aI), (og[28] = YS);
  else YS = og[28];
  let f4;
  if (og[29] !== aI || og[30] !== Pwe || og[31] !== YS)
    (f4 = e(o, { marginTop: 1, children: e(Ce, { selectedValue: Ti, options: Pwe, onChange: aI, onCancel: YS }) })),
      (og[29] = aI),
      (og[30] = Pwe),
      (og[31] = YS),
      (og[32] = f4);
  else f4 = og[32];
  let g4;
  if (
    og[33] !== i4 ||
    og[34] !== f4 ||
    og[35] !== u4 ||
    og[36] !== d4 ||
    og[37] !== m4 ||
    og[38] !== KF ||
    og[39] !== p4
  )
    (g4 = r(i4, { flexDirection: u4, marginTop: d4, paddingX: m4, children: [KF, p4, f4] })),
      (og[33] = i4),
      (og[34] = f4),
      (og[35] = u4),
      (og[36] = d4),
      (og[37] = m4),
      (og[38] = KF),
      (og[39] = p4),
      (og[40] = g4);
  else g4 = og[40];
  let AZe;
  if (og[41] !== s4 || og[42] !== a4 || og[43] !== l4 || og[44] !== g4)
    (AZe = e(s4, { color: a4, title: l4, children: g4 })),
      (og[41] = s4),
      (og[42] = a4),
      (og[43] = l4),
      (og[44] = g4),
      (og[45] = AZe);
  else AZe = og[45];
  return AZe;
}

F();

function Fwe(S, x, P, j) {
  switch (S) {
    case "yes":
      return { behavior: "allow", updatedInput: x.input, ...(j && { feedback: j }) };
    case "yes-exact": {
      if (P.exactRow === null || !kg(P.exactRow)) return { behavior: "allow", updatedInput: x.input };
      return { behavior: "allow", updatedInput: x.input, permissionUpdates: P.exactRow.applies };
    }
    case "yes-prefix": {
      if (P.prefixRow === null || !kg(P.prefixRow)) return { behavior: "allow", updatedInput: x.input };
      return { behavior: "allow", updatedInput: x.input, permissionUpdates: P.prefixRow.applies };
    }
    case "no":
      return { behavior: "deny", ...(j && { feedback: j }) };
  }
}

function Wwe(S) {
  let x = S.indexOf(" ");
  if (x <= 0) return null;
  let P = S.substring(0, x);
  if ((P.startsWith("/") ? P.substring(1) : P) === "" || P.includes("*") || P.includes(":")) return null;
  return P;
}

function Bwe(S, x) {
  return Ow(
    [
      {
        type: "addRules",
        rules: [{ toolName: Do, ruleContent: S.skill }],
        behavior: "allow",
        destination: "localSettings",
      },
    ],
    {
      displayedTypes: qwe,
      renderLabel: (P) => {
        let j = P.length === 1 ? P[0] : void 0;
        if (
          j === void 0 ||
          j.type !== "addRules" ||
          j.rules.length !== 1 ||
          j.rules[0]?.toolName !== Do ||
          j.rules[0]?.ruleContent !== S.skill
        )
          return null;
        let H = fD(S.skill);
        if (H === null) return null;
        return r(t, {
          children: [
            "Yes, and don't ask again for ",
            e(t, { bold: true, children: H.display }),
            " ",
            "in ",
            e(t, { bold: true, children: nr(x) }),
          ],
        });
      },
    },
  );
}

function Uwe(S, x) {
  let P = Wwe(S.skill);
  if (P === null) return null;
  return Ow(
    [
      {
        type: "addRules",
        rules: [{ toolName: Do, ruleContent: `${P}:*` }],
        behavior: "allow",
        destination: "localSettings",
      },
    ],
    {
      displayedTypes: qwe,
      renderLabel: (j) => {
        let H = j.length === 1 ? j[0] : void 0;
        if (
          H === void 0 ||
          H.type !== "addRules" ||
          H.rules.length !== 1 ||
          H.rules[0]?.toolName !== Do ||
          H.rules[0]?.ruleContent !== `${P}:*`
        )
          return null;
        let Z = fD(P);
        if (Z === null) return null;
        return r(t, {
          children: [
            "Yes, and don't ask again for",
            " ",
            e(t, { bold: true, children: `${Z.display}:*` }),
            " commands in",
            " ",
            e(t, { bold: true, children: nr(x) }),
          ],
        });
      },
    },
  );
}

var qwe = new Set(["addRules"]);

function Vwe(S) {
  let x = S.permissionResult.decisionReason,
    P = x?.type === "safetyCheck" && !x.classifierApprovable;
  return S.showAlwaysAllow && !P && !S.isAskCappedByOrg;
}

function jwe(S) {
  return Vwe(S) && S.skill !== "" && !S.skill.endsWith(":*") && !S.skill.endsWith(" *");
}

function $we(S) {
  if (!Vwe(S)) return false;
  return Wwe(S.skill) !== null;
}

function T4(RPo) {
  let xc = _(47),
    { payload: aa, answer: uI } = RPo,
    MZe;
  if (xc[0] === d) (MZe = Se()), (xc[0] = MZe);
  else MZe = xc[0];
  let IZe = MZe,
    EZe;
  if (xc[1] !== aa) (EZe = jwe(aa) ? Bwe(aa, IZe) : null), (xc[1] = aa), (xc[2] = EZe);
  else EZe = xc[2];
  let JS = EZe,
    DZe;
  if (xc[3] !== aa) (DZe = $we(aa) ? Uwe(aa, IZe) : null), (xc[3] = aa), (xc[4] = DZe);
  else DZe = xc[4];
  let XS = DZe,
    NZe;
  if (xc[5] !== aa.skillDescription)
    (NZe = aa.skillDescription ? es(aa.skillDescription) : void 0), (xc[5] = aa.skillDescription), (xc[6] = NZe);
  else NZe = xc[6];
  let QF = NZe,
    LZe;
  if (xc[7] === d) (LZe = { label: "Yes", value: "yes", feedbackConfig: { type: "accept" } }), (xc[7] = LZe);
  else LZe = xc[7];
  let OZe;
  if (xc[8] !== JS || xc[9] !== XS) {
    let y4 = [LZe];
    if (JS !== null) {
      let $h;
      if (xc[11] !== JS.node) ($h = { label: JS.node, value: "yes-exact" }), (xc[11] = JS.node), (xc[12] = $h);
      else $h = xc[12];
      y4.push($h);
    }
    if (XS !== null) {
      let $h;
      if (xc[13] !== XS.node) ($h = { label: XS.node, value: "yes-prefix" }), (xc[13] = XS.node), (xc[14] = $h);
      else $h = xc[14];
      y4.push($h);
    }
    OZe = (y4.push({ label: "No", value: "no", feedbackConfig: { type: "reject" } }), y4);
    (xc[8] = JS), (xc[9] = XS), (xc[10] = OZe);
  } else OZe = xc[10];
  let Ewe = OZe,
    $h;
  if (xc[15] !== aa.toolName) ($h = Un(aa.toolName)), (xc[15] = aa.toolName), (xc[16] = $h);
  else $h = xc[16];
  let FZe;
  if (xc[17] !== aa.isMcp || xc[18] !== $h)
    (FZe = { toolName: $h, isMcp: aa.isMcp }), (xc[17] = aa.isMcp), (xc[18] = $h), (xc[19] = FZe);
  else FZe = xc[19];
  let Dwe = FZe,
    BZe;
  if (xc[20] !== uI || xc[21] !== JS || xc[22] !== aa || xc[23] !== XS)
    (BZe = (xPo, PPo) => uI(Fwe(xPo, aa, { exactRow: JS, prefixRow: XS }, PPo))),
      (xc[20] = uI),
      (xc[21] = JS),
      (xc[22] = aa),
      (xc[23] = XS),
      (xc[24] = BZe);
  else BZe = xc[24];
  let Nwe = BZe,
    UZe;
  if (xc[25] !== uI) (UZe = () => uI({ behavior: "deny" })), (xc[25] = uI), (xc[26] = UZe);
  else UZe = xc[26];
  let Lwe = UZe,
    HZe;
  if (xc[27] !== aa.skill) (HZe = fD(aa.skill)), (xc[27] = aa.skill), (xc[28] = HZe);
  else HZe = xc[28];
  let $Ze = HZe;
  const Owe = $Ze !== null ? `Use skill "${$Ze.display}"?` : "Use this skill?";
  let WZe;
  if (xc[29] === d)
    (WZe = e(t, { children: "Claude may use instructions, code, or files from this Skill." })), (xc[29] = WZe);
  else WZe = xc[29];
  let S4;
  if (xc[30] !== QF)
    (S4 =
      QF !== void 0
        ? e(o, {
            flexDirection: "column",
            paddingX: 2,
            paddingY: 1,
            children: e(zi, { multiline: QF.needsGutter, children: e(t, { dimColor: true, children: QF.text }) }),
          })
        : null),
      (xc[30] = QF),
      (xc[31] = S4);
  else S4 = xc[31];
  let b4;
  if (xc[32] !== aa.permissionResult)
    (b4 = e(Hg, { permissionResult: aa.permissionResult, toolType: "tool" })),
      (xc[32] = aa.permissionResult),
      (xc[33] = b4);
  else b4 = xc[33];
  let C4;
  if (xc[34] !== Lwe || xc[35] !== Nwe || xc[36] !== Ewe || xc[37] !== Dwe)
    (C4 = e(Fj, { options: Ewe, onSelect: Nwe, onCancel: Lwe, toolAnalyticsContext: Dwe })),
      (xc[34] = Lwe),
      (xc[35] = Nwe),
      (xc[36] = Ewe),
      (xc[37] = Dwe),
      (xc[38] = C4);
  else C4 = xc[38];
  let v4;
  if (xc[39] !== b4 || xc[40] !== C4)
    (v4 = r(o, { flexDirection: "column", children: [b4, C4] })), (xc[39] = b4), (xc[40] = C4), (xc[41] = v4);
  else v4 = xc[41];
  let qZe;
  if (xc[42] !== aa.requestSource || xc[43] !== Owe || xc[44] !== S4 || xc[45] !== v4)
    (qZe = r(di, { title: Owe, requestSource: aa.requestSource, children: [WZe, S4, v4] })),
      (xc[42] = aa.requestSource),
      (xc[43] = Owe),
      (xc[44] = S4),
      (xc[45] = v4),
      (xc[46] = qZe);
  else qZe = xc[46];
  return qZe;
}

F();

function Jwe(S, x, P) {
  switch (S) {
    case "yes":
      return { behavior: "allow", updatedInput: x.input };
    case "yes-dont-ask-again-domain":
      if (P === null || !kg(P)) return { behavior: "allow", updatedInput: x.input };
      return { behavior: "allow", updatedInput: x.input, permissionUpdates: P.applies };
    case "no":
      return { behavior: "deny" };
  }
}

function Xwe(S) {
  return Ow(
    [
      {
        type: "addRules",
        rules: [{ toolName: S.toolName, ruleContent: `domain:${S.hostname}` }],
        behavior: "allow",
        destination: "localSettings",
      },
    ],
    {
      displayedTypes: xet,
      renderLabel: (x) => {
        let P = x.length === 1 ? x[0] : void 0;
        if (
          P === void 0 ||
          P.type !== "addRules" ||
          P.rules.length !== 1 ||
          P.rules[0]?.toolName !== S.toolName ||
          P.rules[0]?.ruleContent !== `domain:${S.hostname}`
        )
          return null;
        let j = fD(S.hostname);
        if (j === null) return null;
        return r(t, { children: ["Yes, and don't ask again for ", e(t, { bold: true, children: j.display })] });
      },
    },
  );
}

var xet = new Set(["addRules"]);

function Zwe(S) {
  let x = S.permissionResult.decisionReason,
    P = x?.type === "safetyCheck" && !x.classifierApprovable;
  return S.showAlwaysAllow && !P && !S.isAskCappedByOrg && S.hostname !== "" && !S.hostname.includes("*");
}

function U4($Po) {
  let mc = _(53),
    { payload: La, answer: dI } = $Po,
    _4;
  if (mc[0] !== La.input.url)
    (_4 = typeof La.input.url === "string" ? K0e(La.input.url) : La.input.url), (mc[0] = La.input.url), (mc[1] = _4);
  else _4 = mc[1];
  let GZe;
  if (mc[2] !== _4) (GZe = Om(_4, { maxUnits: Dm })), (mc[2] = _4), (mc[3] = GZe);
  else GZe = mc[3];
  let Ym = GZe,
    Gwe = Ym.kind === "withheld",
    KZe;
  if (mc[4] !== La.input.prompt) (KZe = es(La.input.prompt)), (mc[4] = La.input.prompt), (mc[5] = KZe);
  else KZe = mc[5];
  let eR = KZe,
    QZe;
  if (mc[6] !== La || mc[7] !== Gwe)
    (QZe = Zwe(La) && !Gwe ? Xwe(La) : null), (mc[6] = La), (mc[7] = Gwe), (mc[8] = QZe);
  else QZe = mc[8];
  let eb = QZe,
    YZe;
  if (mc[9] !== dI || mc[10] !== eb || mc[11] !== La)
    (YZe = (WPo) => dI(Jwe(WPo, La, eb))), (mc[9] = dI), (mc[10] = eb), (mc[11] = La), (mc[12] = YZe);
  else YZe = mc[12];
  let Kwe = YZe,
    JZe;
  if (mc[13] !== dI)
    (JZe = () => {
      dI({ behavior: "cancelled" });
    }),
      (mc[13] = dI),
      (mc[14] = JZe);
  else JZe = mc[14];
  let Qwe = JZe,
    ZZe;
  if (mc[15] === d) (ZZe = { label: "Yes", value: "yes" }), (mc[15] = ZZe);
  else ZZe = mc[15];
  let eet;
  if (mc[16] !== eb) {
    let zwe = [ZZe];
    if (eb !== null) {
      let R4;
      if (mc[18] !== eb.node)
        (R4 = { label: eb.node, value: "yes-dont-ask-again-domain" }), (mc[18] = eb.node), (mc[19] = R4);
      else R4 = mc[19];
      zwe.push(R4);
    }
    eet =
      (zwe.push({
        label: r(t, {
          children: ["No, and tell Claude what to do differently ", e(t, { bold: true, children: "(esc)" })],
        }),
        value: "no",
      }),
      zwe);
    (mc[16] = eb), (mc[17] = eet);
  } else eet = mc[17];
  let Ywe = eet;
  const R4 = La.requestSource;
  let x4;
  if (mc[20] !== Ym.kind || mc[21] !== Ym.marker || mc[22] !== Ym.needsGutter || mc[23] !== Ym.text)
    (x4 =
      Ym.kind === "full"
        ? e(zi, { multiline: Ym.needsGutter, children: r(t, { children: ["url: ", Ym.text] }) })
        : e(t, { dimColor: true, children: Ym.marker })),
      (mc[20] = Ym.kind),
      (mc[21] = Ym.marker),
      (mc[22] = Ym.needsGutter),
      (mc[23] = Ym.text),
      (mc[24] = x4);
  else x4 = mc[24];
  let P4;
  if (mc[25] !== eR.needsGutter || mc[26] !== eR.text)
    (P4 =
      eR.text !== ""
        ? e(zi, { multiline: eR.needsGutter, children: r(t, { children: ["prompt: ", eR.text] }) })
        : null),
      (mc[25] = eR.needsGutter),
      (mc[26] = eR.text),
      (mc[27] = P4);
  else P4 = mc[27];
  let A4;
  if (mc[28] !== La.description) (A4 = bE(La.description)), (mc[28] = La.description), (mc[29] = A4);
  else A4 = mc[29];
  let M4;
  if (mc[30] !== La.description)
    (M4 = e(t, { dimColor: true, children: La.description })), (mc[30] = La.description), (mc[31] = M4);
  else M4 = mc[31];
  let I4;
  if (mc[32] !== A4 || mc[33] !== M4)
    (I4 = e(zi, { multiline: A4, children: M4 })), (mc[32] = A4), (mc[33] = M4), (mc[34] = I4);
  else I4 = mc[34];
  let E4;
  if (mc[35] !== x4 || mc[36] !== P4 || mc[37] !== I4)
    (E4 = r(o, { flexDirection: "column", paddingX: 2, paddingY: 1, children: [x4, P4, I4] })),
      (mc[35] = x4),
      (mc[36] = P4),
      (mc[37] = I4),
      (mc[38] = E4);
  else E4 = mc[38];
  let N4;
  if (mc[39] !== La.permissionResult)
    (N4 = e(Hg, { permissionResult: La.permissionResult, toolType: "tool" })),
      (mc[39] = La.permissionResult),
      (mc[40] = N4);
  else N4 = mc[40];
  let tet;
  if (mc[41] === d) (tet = e(t, { children: "Do you want to allow Claude to fetch this content?" })), (mc[41] = tet);
  else tet = mc[41];
  let F4;
  if (mc[42] !== Qwe || mc[43] !== Kwe || mc[44] !== Ywe)
    (F4 = e(Ce, { selectedValue: Ti, options: Ywe, onChange: Kwe, onCancel: Qwe })),
      (mc[42] = Qwe),
      (mc[43] = Kwe),
      (mc[44] = Ywe),
      (mc[45] = F4);
  else F4 = mc[45];
  let B4;
  if (mc[46] !== N4 || mc[47] !== F4)
    (B4 = r(o, { flexDirection: "column", children: [N4, tet, F4] })), (mc[46] = N4), (mc[47] = F4), (mc[48] = B4);
  else B4 = mc[48];
  let get;
  if (mc[49] !== La.requestSource || mc[50] !== E4 || mc[51] !== B4)
    (get = r(di, { title: "Fetch", requestSource: R4, children: [E4, B4] })),
      (mc[49] = La.requestSource),
      (mc[50] = E4),
      (mc[51] = B4),
      (mc[52] = get);
  else get = mc[52];
  return get;
}

var lTe = null,
  YF = null,
  cTe = import.meta.require("/$bunfs/root/chunk-kh3y424k.js").WorkflowPermissionDialog,
  JF = import.meta.require("/$bunfs/root/chunk-d8cf5aj4.js").workflowPermissionDialog,
  tR = null,
  uTe = null,
  XF = null,
  ob = null,
  Xet = ({ payload: S, answer: x, accepts: P }) => e(pJ, { tmuxAvailable: S.tmuxAvailable, onDone: x, accepts: P }),
  ett = ({ payload: S, answer: x, accepts: P }) => e(h5, { request: S, onDone: x, accepts: P }),
  ttt = ({ answer: S }) => e(_Y, { onDone: () => S("acknowledged") }),
  ott = ({ payload: S, answer: x }) =>
    e(BY, { sessionAgeMinutes: S.sessionAgeMinutes, estimatedTokens: S.estimatedTokens, onDone: x }),
  ntt = ({ payload: S, answer: x }) => e(dY, { currentMode: S.currentMode, onDone: x }),
  rtt = ({ payload: S, answer: x }) =>
    e(QLt, { installationStatus: S.installationStatus, onDone: () => x("dismissed") }),
  itt = ({ payload: S, answer: x }) =>
    e(_5, {
      hostPattern: { host: S.host, port: S.port },
      requestSource: S.forwardedFromWorker ? { type: "subagent", agentName: S.workerName } : void 0,
      onUserResponse: x,
    }),
  utt = ({ payload: S, answer: x }) =>
    e(g7t, {
      summary: S.summary,
      carryOverCount: S.carryOverCount,
      monitorParkCount: S.monitorParkCount,
      workflowAgents: S.workflowAgents,
      onConfirm: () => x("confirm"),
      onCancel: () => x("stay"),
    }),
  dtt = ({ payload: S, answer: x }) =>
    e(LY, {
      pluginName: S.pluginName,
      pluginDescription: S.pluginDescription,
      marketplaceName: S.marketplaceName,
      fileExtension: S.fileExtension,
      onResponse: x,
    }),
  mtt = ({ payload: S, answer: x }) =>
    e(vY, {
      pluginName: S.pluginName,
      pluginDescription: S.pluginDescription,
      marketplaceName: S.marketplaceName,
      sourceCommand: S.sourceCommand,
      onResponse: x,
    });

function mTe(yMo) {
  let Aet = _(6),
    { answer: eTe } = yMo,
    [Pet, SMo] = u(null);
  const tTe = `remote-callout-${Pet?.epoch ?? 0}`,
    oTe = Pet?.choice;
  let j4;
  if (Aet[0] !== eTe)
    (j4 = (Met) => {
      if (!eTe(Met)) SMo((bMo) => ({ epoch: (bMo?.epoch ?? 0) + 1, choice: Met }));
    }),
      (Aet[0] = eTe),
      (Aet[1] = j4);
  else j4 = Aet[1];
  let Iet;
  if (Aet[2] !== tTe || Aet[3] !== oTe || Aet[4] !== j4)
    (Iet = e(WRt, { defaultFocusValue: oTe, onDone: j4 }, tTe)),
      (Aet[2] = tTe),
      (Aet[3] = oTe),
      (Aet[4] = j4),
      (Aet[5] = Iet);
  else Iet = Aet[5];
  return Iet;
}

var ptt = ({ payload: S, answer: x, accepts: P }) =>
    e(x8t, {
      promptIdentifier: S.promptIdentifier,
      showTerms: S.showTerms,
      prompt: S.prompt,
      deliveredByRelay: S.deliveredByRelay,
      onDone: x,
      accepts: P,
    }),
  ftt = ({ payload: S, answer: x }) => e(M5, { plan: S.plan, onDone: x }),
  gtt = ({ payload: S, answer: x, accepts: P }) =>
    e(UUe, {
      settings: S.settings,
      baseline: S.baseline,
      reveal: S.reveal,
      onAccept: () => x("approved"),
      onReject: () => x("rejected"),
      accepts: P,
    }),
  htt = ({ payload: S, answer: x, accepts: P }) => {
    let j = {
      serverName: S.serverName,
      requestId: `dialog-${S.params.elicitationId}`,
      params: S.params,
      signal: new AbortController().signal,
      waitingState: { actionLabel: "Retry now", showCancel: true },
      respond: () => {},
    };
    return e(aw, {
      event: j,
      onResponse: (H, Z) => {
        if (H === "accept" && S.params.mode === "url") return;
        x({ action: H, content: Z });
      },
      onWaitingDismiss: (H) => {
        x({ action: H === "retry" ? "accept" : "cancel" });
      },
      accepts: P,
    });
  };

function pTe(kMo) {
  let Eet = _(6),
    { answer: nTe, accepts: rTe } = kMo,
    { addNotification: iTe } = Or(),
    H4;
  if (Eet[0] !== iTe || Eet[1] !== nTe)
    (H4 = (Det, Net) => {
      let Let = nTe(Det === "consent" ? "consent" : Det === "switch" ? "switch_default" : "cancelled");
      if (Let && Net !== void 0) iTe({ kind: "feedback", key: "fable-consent-result", text: Net, priority: "high" });
      return Let;
    }),
      (Eet[0] = iTe),
      (Eet[1] = nTe),
      (Eet[2] = H4);
  else H4 = Eet[2];
  let Oet;
  if (Eet[3] !== rTe || Eet[4] !== H4)
    (Oet = e(Wme, { variant: "mid-session", accepts: rTe, onDone: H4 })), (Eet[3] = rTe), (Eet[4] = H4), (Eet[5] = Oet);
  else Oet = Eet[5];
  return Oet;
}

var mI = yn(null);

function fTe(CMo) {
  let vMo = _(2),
    { payload: sTe } = CMo,
    Fet = We(mI);
  if (!Fet) {
    throw ReferenceError("A local_jsx dialog cannot render outside of a LocalJsxRegistryContext provider");
  }
  let Bet;
  if (vMo[0] !== sTe.nodeId) (Bet = (wMo) => wMo.get(sTe.nodeId) ?? null), (vMo[0] = sTe.nodeId), (vMo[1] = Bet);
  else Bet = vMo[1];
  return Xe(Fet, Bet);
}

var pI = {
  [Cje.kind]: "modal",
  [nX.kind]: "modal",
  [Qm.kind]: (S) => (Nt() ? "modal" : gTe(S)?.immediate ? "bottom" : "inline"),
};

function gTe(S) {
  let x = Qm.payload().safeParse(S);
  return x.success ? x.data : null;
}

function $p(S, x) {
  let P = S[x.kind];
  if (P === void 0) return "inline";
  return typeof P === "function" ? P(x.payload) : P;
}

var ytt = { [Qm.kind]: (S) => gTe(S)?.hidesPrompt === false };

function Stt(S) {
  return ytt[S.kind]?.(S.payload) ?? false;
}

function eB() {
  let TMo = _(3),
    W4 = Xp(),
    aTe = Gd() !== null,
    Uet;
  if (TMo[0] !== W4 || TMo[1] !== aTe)
    (Uet = () => {
      let jet = W4.getState();
      return ZF(jet) || (!aTe && u1(jet) !== null);
    }),
      (TMo[0] = W4),
      (TMo[1] = aTe),
      (TMo[2] = Uet);
  else Uet = TMo[2];
  let $et = Uet;
  return Lt(W4.subscribe, $et, $et);
}

function tB() {
  let _Mo = _(2),
    q4 = Xp(),
    Get;
  if (_Mo[0] !== q4) (Get = () => ZF(q4.getState())), (_Mo[0] = q4), (_Mo[1] = Get);
  else Get = _Mo[1];
  let Ket = Get;
  return Lt(q4.subscribe, Ket, Ket);
}

function ZF(S) {
  let x = t2e(S);
  return x !== null && !Stt(x);
}

var Hp = "Claude needs your permission",
  G4 = {
    [kre.kind]: Hp,
    [yit.kind]: Hp,
    [_it.kind]: Hp,
    [hit.kind]: Hp,
    [Ohe.kind]: Hp,
    [Dhe.kind]: Hp,
    [pit.kind]: "Claude Code wants to enter plan mode",
    [Cje.kind]: "Claude Code needs your approval for the plan",
    [git.kind]: Hp,
    [V0e.kind]: Hp,
    ...{ [cI.kind]: "Session paused" },
    [_ee.kind]: "Session paused",
    [dit.kind]: Hp,
    [Iv.kind]: "A message from another session needs your approval",
    [Wet.kind]: "Claude wants to use your browser",
    [qet.kind]: "Setting up Claude in Chrome",
    [NBe.kind]: "Auto-mode setup proposal is ready for review",
    [FBe.kind]: "Auto-mode setup flagged some permission rules for review",
    [H1.kind]: "Claude proposed a session goal",
    ...(YF && { [YF.kind]: "Claude needs your approval for a review artifact" }),
    ...(JF && { [JF.kind]: Hp }),
    ...(ob && XF && { [ob.slackConnectOfferDialog.kind]: XF.CONSENT_OFFER_NOTIFICATION }),
    [hf.kind]: "A sandboxed command needs network access",
    [Ob.kind]: "Managed settings need your review before they apply",
    [r9e.kind]: Hp,
    [Phe.kind]: "Teammate setup needs your input",
    [SB.kind]: "An MCP server needs your input",
    [Nj.kind]: "File sync is offline \u2014 your message is waiting",
  },
  K4 = {
    [SB.kind]: "elicitation_url_dialog",
    [Phe.kind]: "agent_needs_input",
    ...(ob && Object.fromEntries(ob.slackConnectDialogs.map((S) => [S.kind, "agent_needs_input"]))),
    [Nj.kind]: "agent_needs_input",
  },
  btt = {
    [Dhe.kind]: "input needed",
    [Phe.kind]: "input needed",
    [hf.kind]: "sandbox request",
    [SB.kind]: "input needed",
    ...{ [cI.kind]: "dialog open" },
    [_ee.kind]: "dialog open",
    [H1.kind]: "goal proposal",
    [Rh.kind]: "dialog open",
    [Rg.kind]: "dialog open",
    [Ob.kind]: "dialog open",
    [sf.kind]: "dialog open",
    [zU.kind]: "dialog open",
    [_ft.kind]: "dialog open",
    [nX.kind]: "dialog open",
    [_x.kind]: "dialog open",
    [UC.kind]: "dialog open",
    [Lb.kind]: "dialog open",
    ...(tR && { [tR.startupModelSwitchDialog.kind]: "dialog open" }),
    [Fh.kind]: "dialog open",
    [Uh.kind]: "dialog open",
    ...(ob && Object.fromEntries(ob.slackConnectDialogs.map((S) => [S.kind, "dialog open"]))),
    [Nj.kind]: "dialog open",
  },
  Ctt = new Set([
    Rh.kind,
    Rg.kind,
    nX.kind,
    _x.kind,
    UC.kind,
    Lb.kind,
    ...(tR ? [tR.startupModelSwitchDialog.kind] : []),
    Fh.kind,
    Uh.kind,
  ]);

function Q4(S) {
  return S.open.some((x) => x.userInvoked !== true && !Ctt.has(x.kind) && !jh.has(x.kind));
}

function vtt(S) {
  return S === void 0 ? void 0 : (btt[S] ?? "permission prompt");
}

function z4(S, x) {
  let P = x ? Up(S) : u1(S);
  return vtt(P?.kind);
}

function oB() {
  let RMo = _(2),
    V4 = Xp(),
    Yet;
  if (RMo[0] !== V4) (Yet = () => dTe(V4.getState())), (RMo[0] = V4), (RMo[1] = Yet);
  else Yet = RMo[1];
  let Jet = Yet;
  return Lt(V4.subscribe, Jet, Jet);
}

function dTe(S) {
  let x = u1(S),
    P = t2e(S);
  return (x !== null && $p(pI, x) === "modal") || (P !== null && $p(pI, P) === "modal");
}

function gs(S, x) {
  return { [S.kind]: x };
}

var Y4 = {
  ...gs(Qm, fTe),
  ...gs(Phe, Xet),
  ...gs(r9e, ett),
  ...gs(Rh, ttt),
  ...gs(Rg, ott),
  ...gs(Ob, gtt),
  ...gs(UC, rtt),
  ...gs(hf, itt),
  ...gs(sf, utt),
  ...gs(zU, mTe),
  ...gs(_ft, ptt),
  ...gs(nX, ftt),
  ...gs(Fh, dtt),
  ...gs(Uh, mtt),
  ...gs(_x, ntt),
  ...gs(Lb, NH),
  ...(tR && uTe ? gs(tR.startupModelSwitchDialog, uTe) : {}),
  ...gs(SB, htt),
  ...gs(kre, XKt),
  ...gs(yit, U4),
  ...gs(_it, T4),
  ...gs(hit, xwe),
  ...gs(Ohe, ewe),
  ...gs(Dhe, _X),
  ...gs(pit, U3),
  ...gs(H1, G6),
  ...gs(Cje, Sve),
  ...gs(git, o4),
  ...gs(V0e, eCe),
  ...gs(cI, h4),
  ...gs(_ee, pTe),
  ...gs(dit, d3),
  ...gs(Iv, v3),
  ...gs(Wet, D3),
  ...gs(qet, bCe),
  ...gs(Nj, I3),
  ...(lTe && YF ? gs(YF, lTe) : {}),
  ...(cTe && JF ? gs(JF, cTe) : {}),
  ...(XF && ob ? Object.assign({}, ...ob.slackConnectDialogs.map((S) => gs(S, XF.SlackConnectConsentDialog))) : {}),
  ...gs(NBe, UX),
  ...gs(FBe, jX),
};

F();

export { $p, AO, Fh, G4, K4, MCe, MO, Q4, Rh, TO, UC, Uh, Up, Y4, eB, jh, mI, mO, oB, owe, pI, tB, vO, xO, yve, z4 };
