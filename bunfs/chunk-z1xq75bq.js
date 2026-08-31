// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { w, c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { js } from "/$bunfs/root/chunk-ypdw393e.js";
import { j5, DJ, XO, zC } from "/$bunfs/root/chunk-f9h0bg01.js";
import {
  _n,
  Yr,
  Zy,
  yC,
  CMe,
  dw,
  pw,
  VI,
  kr,
  zEe,
  wC,
  L3,
  I,
  Ae,
  ie,
  fNe,
  B3,
  ci,
} from "/$bunfs/root/chunk-8tgj5dp2.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { t_ } from "/$bunfs/root/chunk-gcks6mn0.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { eCe } from "/$bunfs/root/chunk-6k63g5t6.js";
import { Je, rn, X3, jAe, _Xe, WAe } from "/$bunfs/root/chunk-988p40e0.js";
import { _o } from "/$bunfs/root/chunk-0spqrdaj.js";
import { _R } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { gy, fP, yN, sd, Tw } from "/$bunfs/root/chunk-1yr12dqr.js";
import { z$, mTt, gTt, zXe } from "/$bunfs/root/chunk-2mmw62jx.js";
import { fN } from "/$bunfs/root/chunk-82w4mtvq.js";
import { TH } from "/$bunfs/root/chunk-5c5qq1s7.js";
import { YKe, pEe, Ade, Kyt, gZn, hZn } from "/$bunfs/root/chunk-s0xdwab3.js";
import { Zu, Pgn } from "/$bunfs/root/chunk-dd55s64p.js";
import { Pk, Mm, Gz } from "/$bunfs/root/chunk-83h0j7w2.js";
import { EG, X3e, A4e, tln, Udt, yD, ng, kv, rg, gPe, Ace, kce } from "/$bunfs/root/chunk-zze8764r.js";
import { ho } from "/$bunfs/root/chunk-37pvmyqb.js";
import { Nt } from "/$bunfs/root/chunk-z9bhq3k9.js";
import { u$ } from "/$bunfs/root/chunk-e17gvevg.js";
import { ch, Pyn } from "/$bunfs/root/chunk-hz299nfa.js";
import { Iht } from "/$bunfs/root/chunk-trte0v0g.js";
import { eMe, r9t } from "/$bunfs/root/chunk-mq8h2tk8.js";
import { H5n, dmt } from "/$bunfs/root/chunk-308krgtb.js";
import { fi } from "/$bunfs/root/chunk-8td9ks9h.js";
import { mH } from "/$bunfs/root/chunk-vx3kc9d2.js";
import { io } from "/$bunfs/root/chunk-rt5p4yax.js";
import { cy } from "/$bunfs/root/chunk-hkzwg35z.js";
import { Mb } from "/$bunfs/root/chunk-fwwvmbqn.js";
import { yrt } from "/$bunfs/root/chunk-9r67t977.js";
import { CJt } from "/$bunfs/root/chunk-g6n9wngt.js";
import { Pst, xrn, Irn } from "/$bunfs/root/chunk-fqek6yfz.js";
import { Nje } from "/$bunfs/root/chunk-yy9gw2sq.js";
import { kq } from "/$bunfs/root/chunk-t8z9rkkq.js";
import { GQ, CS, ac, BP, kJt, HJt, sW, aW, Jge } from "/$bunfs/root/chunk-ddrmb5hs.js";
import { tZ } from "/$bunfs/root/chunk-kt7pdq84.js";
import { Yot } from "/$bunfs/root/chunk-bcrwn930.js";
import { Jun, xft, Ete } from "/$bunfs/root/chunk-3qvtfvqg.js";
import { Qn } from "/$bunfs/root/chunk-9319g175.js";
import { bsr } from "/$bunfs/root/chunk-manh1369.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
function x(d, r) {
  return Ace() ? r : d;
}
function JHt(d) {
  switch (d) {
    case "terminal_bell":
      return "bell";
    case "iterm2_with_bell":
      return "iterm2+bell";
    case "notifications_disabled":
      return "none";
    default:
      return d;
  }
}
var X = ["never", "60s", "5m", "10m"],
  Z = ["default", "60s", "5m", "10m", "never"],
  ee = ["default", ...eCe];
function mrt() {
  return {
    askUserQuestionTimeout: jAe(),
    dialogExpiry: _Xe(),
    crossSessionInbound: oe("crossSessionInbound")?.value,
    modelProposedGoals: WAe(),
    enableArtifact: eMe().enabled,
  };
}
function oe(d) {
  return X3(d).find((r) => _o(r.source));
}
function K(d) {
  let r = oe(d)?.source;
  return r !== void 0 && r !== "userSettings";
}
function Yke() {
  let d = ie(),
    r = Je();
  return {
    ...d,
    theme: r.theme ?? d.theme,
    editorMode: r.editorMode ?? d.editorMode,
    verbose: r.verbose ?? d.verbose,
    preferredNotifChannel: r.preferredNotifChannel ?? d.preferredNotifChannel,
    autoCompactEnabled: r.autoCompactEnabled ?? d.autoCompactEnabled,
    autoScrollEnabled: r.autoScrollEnabled ?? d.autoScrollEnabled,
    fileCheckpointingEnabled: r.fileCheckpointingEnabled ?? d.fileCheckpointingEnabled,
    showTurnDuration: r.showTurnDuration ?? d.showTurnDuration,
    showMessageTimestamps: r.showMessageTimestamps ?? d.showMessageTimestamps,
    terminalProgressBarEnabled: r.terminalProgressBarEnabled ?? d.terminalProgressBarEnabled,
    todoFeatureEnabled: r.todoFeatureEnabled ?? d.todoFeatureEnabled,
    teammateMode: r.teammateMode ?? d.teammateMode,
    remoteControlAtStartup: fNe(),
    autoUploadSessions: r.autoUploadSessions ?? d.autoUploadSessions,
    inputNeededNotifEnabled: r.inputNeededNotifEnabled ?? d.inputNeededNotifEnabled,
    agentPushNotifEnabled: r.agentPushNotifEnabled ?? d.agentPushNotifEnabled,
  };
}
function we() {
  let d = zEe();
  return ["default", ...fN.filter((r) => (d || !r.includes("fable")) && !kJt(r) && !HJt(r) && kr(r))];
}
var Ee = new Map([
  ["jp", "ja"],
  ["kr", "ko"],
  ["cn", "zh"],
  ["tw", "zh-Hant"],
]);
function ve(d) {
  let r = Qn(d).trim();
  if (!r || r.toLowerCase() === "default") return "default";
  if (r.length <= 3) {
    let f = r.toLowerCase(),
      D = Ee.get(f) ?? f;
    try {
      let P = bsr().of(D);
      if (P && P !== D) return P;
    } catch {}
  }
  return r
    .split(/\s+/)
    .map((f) => f.charAt(0).toUpperCase() + f.slice(1).toLowerCase())
    .join(" ");
}
var H = () => {},
  XNn = { setGlobalConfig: H, setSettingsData: H, setChanges: H };
function Me(d) {
  return (fi.orgMemoryWritesRowSeen ||= d), fi.orgMemoryWritesRowSeen;
}
function ke(d) {
  return (fi.orgMemoryReadRowSeen ||= d), fi.orgMemoryReadRowSeen;
}
function Re(d) {
  return (fi.remoteHomeSettingsRowSeen ||= d), fi.remoteHomeSettingsRowSeen;
}
function Jke(d) {
  let {
    globalConfig: r,
    settingsData: f,
    themeSetting: D,
    currentOutputStyle: P,
    currentLanguage: te,
    externalIncludesApproved: ne,
    thinkingEnabled: se,
    verbose: ae,
    mainLoopModel: re,
    currentModel: W,
    isFastMode: le,
    promptSuggestionEnabled: de,
    awaySummaryEnabled: ue,
    showDefaultViewPicker: ce,
    pushTogglesVisible: ge,
    crossSessionInboxRowVisible: fe,
    isConnectedToIde: pe,
    isFileCheckpointingAvailable: me,
    workflowsToggleable: B,
    workflowSizeGuidelineToggleable: be,
    autoContinueAtUsageLimitToggleable: he,
    artifactToggleable: Se,
    shouldShowExternalIncludesToggle: Ce,
    autoUpdaterDisabledReason: ye,
    modelSwitchHooks: S,
    setAppState: A,
    setTheme: _e,
    setGlobalConfig: p,
    setSettingsData: m,
    setChanges: E,
    storageV5: v,
  } = d;
  function h(e) {
    return O() && v !== void 0 ? rn("userSettings", e, void 0, v) : rn("userSettings", e);
  }
  function U(e) {
    return O() && v !== void 0 ? rn("localSettings", e, void 0, v) : rn("localSettings", e);
  }
  function M(e, o) {
    if (O() && v !== void 0) TH(e, o, v);
    else TH(e, o);
  }
  function _(e) {
    if (O() && v !== void 0) Ae(e, v);
    else Ae(e);
  }
  async function V(e, o) {
    let t = re,
      i = Jge(e, o);
    s("tengu_config_model_changed", { from_model: _n(t), to_model: _n(e) });
    let l = aW(e),
      u = "";
    if (S) {
      let { session: k, readState: F } = S;
      if (yD(k) || kv.of(k).pending > 0) {
        let J = ++S.latestPick.current,
          T = await rg(k, () => CS(k, F, e, "command"));
        if (J !== S.latestPick.current) return;
        if (T.decision !== "proceed")
          return (
            g("model_switch", "blocked_by_hook"),
            {
              error: new js(
                BP(
                  e,
                  T.decision === "ask" ? `${T.reason ?? "confirmation required"} (run /model to confirm)` : T.reason,
                  T.messages,
                ),
                "model switch blocked by a PreModelSwitch hook",
              ),
            }
          );
        if (T.messages.length > 0) u = ` \xB7 ${T.messages.map(ac).join(" \xB7 ")}`;
      }
      ng(k, F(), e, "command");
    }
    if (i?.fromUltracode) Mm(v);
    else if (i !== void 0) Gz(i.level, sW(e), void 0, v);
    if ((j5(), Yr())) VI();
    let b = !1,
      C = !1;
    A(
      (k) => (
        (b = !!k.fastMode),
        (C = Yr() ? dw(e, k.fastMode) : b),
        {
          ...k,
          mainLoopModel: e,
          mainLoopModelForSession: null,
          ...(i !== void 0 && { sessionEffort: Pk(i.level), ultracode: i.ultracode }),
          ...(C !== b && { fastMode: C }),
        }
      ),
    ),
      pw(b, C);
    let R = GQ(b, C, e);
    E((k) => {
      let F = wC(e) + R + u + (l ? " \xB7 this session only \u2014 /model to set up" : "");
      if ("model" in k) {
        let { model: J, ...T } = k;
        return { ...T, model: F };
      }
      return { ...k, model: F };
    });
    let q = l ? void 0 : await h({ model: e ?? void 0 }),
      L = R + u;
    if (q?.error) return { error: q.error, ...(L && { messageSuffix: L }) };
    if (L) return { messageSuffix: L };
  }
  function j(e) {
    M("verbose", e),
      p((o) => ({ ...o, verbose: e })),
      A((o) => ({ ...o, verbose: e })),
      E((o) => {
        if ("verbose" in o) {
          let { verbose: t, ...i } = o;
          return i;
        }
        return { ...o, verbose: e };
      });
  }
  function G(e) {
    M("preferredNotifChannel", e), p((o) => ({ ...o, preferredNotifChannel: e }));
  }
  function z(e) {
    M("inputNeededNotifEnabled", e),
      p((o) => ({ ...o, inputNeededNotifEnabled: e })),
      CJt(),
      s("tengu_push_notif_pref_changed", { key: w("inputNeededNotifEnabled"), value: e });
  }
  function Q(e) {
    M("agentPushNotifEnabled", e),
      p((o) => ({ ...o, agentPushNotifEnabled: e })),
      CJt(),
      s("tengu_push_notif_pref_changed", { key: w("agentPushNotifEnabled"), value: e });
  }
  let Y = Ete(r.workflowSizeGuideline);
  return {
    settings: [
      {
        id: "autoCompact",
        label: "Auto-compact",
        value: r.autoCompactEnabled,
        type: "boolean",
        onChange(e) {
          M("autoCompactEnabled", e),
            p((o) => ({ ...o, autoCompactEnabled: e })),
            s("tengu_auto_compact_setting_changed", { enabled: e });
        },
      },
      ...(he
        ? [
            {
              id: "autoContinueAtUsageLimit",
              label: "Continue automatically at usage limit",
              value: f?.autoContinueAtUsageLimit ?? !0,
              type: "boolean",
              consentGated: !0,
              async onChange(e) {
                m((t) => ({ ...t, autoContinueAtUsageLimit: e }));
                let o = await h({ autoContinueAtUsageLimit: e });
                if (o?.error) {
                  let t = yrt();
                  return m((i) => ({ ...i, autoContinueAtUsageLimit: t })), { error: o.error };
                }
                s("tengu_quota_auto_resume_setting_changed", { enabled: e });
              },
            },
          ]
        : []),
      ...(Re(u$() || r.remoteHomeSettingsMode === "forward")
        ? [
            {
              id: "remoteHomeSettings",
              label: "Use this machine's settings in cloud sessions",
              value: r.remoteHomeSettingsMode === "forward",
              isDefaultValue: !mTt.some((e) => e === r.remoteHomeSettingsMode),
              consentGated: !0,
              type: "boolean",
              onChange(e) {
                if (e) return { error: new js("Turn this on from the /config panel, which shows what will be sent") };
                let o = "keep_local",
                  t = r.remoteHomeSettingsMode;
                return (
                  p((i) => ({ ...i, remoteHomeSettingsMode: o })),
                  X3e(o, O() ? v : void 0).then((i) => {
                    switch (i) {
                      case "written":
                        return;
                      case "unconfirmed":
                        return {
                          messageSuffix:
                            " (could not confirm it was written to the config file; check /config after restarting Claude Code)",
                        };
                      case "refused":
                        return (
                          p((l) => ({ ...l, remoteHomeSettingsMode: t })),
                          { error: new js("Cloud settings forwarding is not available right now; nothing was changed") }
                        );
                    }
                  })
                );
              },
            },
          ]
        : []),
      ...(dmt()
        ? [
            {
              id: "switchModelsOnFlag",
              label: H5n,
              value: f?.switchModelsOnFlag ?? !0,
              type: "boolean",
              onChange(e) {
                h({ switchModelsOnFlag: e }),
                  m((o) => ({ ...o, switchModelsOnFlag: e })),
                  s("tengu_refusal_fallback_setting_changed", { enabled: e });
              },
            },
          ]
        : []),
      {
        id: "tips",
        label: "Show tips",
        value: f?.spinnerTipsEnabled ?? !0,
        type: "boolean",
        onChange(e) {
          U({ spinnerTipsEnabled: e }),
            m((o) => ({ ...o, spinnerTipsEnabled: e })),
            s("tengu_tips_setting_changed", { enabled: e });
        },
      },
      ...(tln()
        ? [
            {
              id: "feedbackDrafts",
              label: "Claude-drafted feedback",
              value: f?.feedbackDrafts ?? "notify",
              options: ["notify", "quiet", "off"],
              type: "enum",
              onChange(e) {
                let o = e;
                Udt(o, { storageV5: v, via: "config" }), m((t) => ({ ...t, feedbackDrafts: o }));
              },
            },
          ]
        : []),
      {
        id: "reduceMotion",
        label: "Reduce motion",
        value: f?.prefersReducedMotion ?? !1,
        type: "boolean",
        onChange(e) {
          U({ prefersReducedMotion: e }),
            m((o) => ({ ...o, prefersReducedMotion: e })),
            A((o) => ({ ...o, settings: { ...o.settings, prefersReducedMotion: e } })),
            s("tengu_reduce_motion_setting_changed", { enabled: e });
        },
      },
      {
        id: "thinking",
        label: "Thinking mode",
        value: se ?? !0,
        type: "boolean",
        onChange(e) {
          A((o) => ({ ...o, thinkingEnabled: e })),
            h({ alwaysThinkingEnabled: e ? void 0 : !1 }),
            s("tengu_thinking_toggled", { enabled: e }),
            y("thinking_toggle");
        },
      },
      ...(Yr() && Zy()
        ? [
            {
              id: "fast",
              label: `Fast mode (${yC()})`,
              value: !!le,
              type: "boolean",
              async onChange(e) {
                let o = (t, i, l) => {
                  if (i) {
                    let b = !1;
                    if (
                      (A((C) => {
                        let R = kq(C);
                        return (b = R !== void 0 && R !== t), C;
                      }),
                      b)
                    )
                      return {
                        error: new js(
                          "Fast mode was not enabled: the model changed while PreModelSwitch hooks ran; try again",
                          "fast mode promotion stale after hooks",
                        ),
                      };
                  }
                  VI(), h({ fastMode: !0 });
                  let u;
                  return (
                    A((b) => {
                      let C = kq(b),
                        R = C !== void 0 && (!i || C === t);
                      if (R && S) ng(S.session, b, C, "command");
                      return (
                        (u = R ? C : void 0),
                        { ...b, ...(R && { mainLoopModel: C, mainLoopModelForSession: null }), fastMode: !0 }
                      );
                    }),
                    E((b) => ({ ...b, ...(u !== void 0 && { model: u ?? CMe() }), "Fast mode": "ON" })),
                    l ? { messageSuffix: l } : void 0
                  );
                };
                if (e && S && (yD(S.session) || kv.of(S.session).pending > 0)) {
                  let { session: t, readState: i } = S,
                    l = ++S.latestFastPick.current;
                  return rg(t, async () => {
                    let u = kq(i());
                    if (u === void 0 || !yD(t)) {
                      if (l !== S.latestFastPick.current) return;
                      return o(void 0, !1, "");
                    }
                    let b = await CS(t, i, u, "command");
                    if (l !== S.latestFastPick.current) return;
                    if (b.decision !== "proceed")
                      return (
                        g("model_switch", "blocked_by_hook"),
                        {
                          error: new js(
                            BP(
                              u,
                              b.decision === "ask"
                                ? `${b.reason ?? "confirmation required"} (run /model to switch, then enable fast mode)`
                                : b.reason,
                              b.messages,
                            ),
                            "model switch blocked by a PreModelSwitch hook",
                          ),
                        }
                      );
                    return o(u, !0, b.messages.length > 0 ? ` \xB7 ${b.messages.map(ac).join(" \xB7 ")}` : "");
                  });
                }
                if (e) return o(void 0, !1, "");
                else {
                  let t = () => {
                    VI(),
                      h({ fastMode: void 0 }),
                      A((i) => ({ ...i, fastMode: !1 })),
                      E((i) => ({ ...i, "Fast mode": "OFF" }));
                  };
                  if (S && kv.of(S.session).pending > 0) await rg(S.session, async () => t());
                  else t();
                }
              },
            },
          ]
        : []),
      ...(I("tengu_chomp_inflection", !1)
        ? [
            {
              id: "promptSuggestionEnabled",
              label: "Prompt suggestions",
              value: de,
              type: "boolean",
              onChange(e) {
                A((o) => ({ ...o, promptSuggestionEnabled: e })), h({ promptSuggestionEnabled: e ? void 0 : !1 });
              },
            },
          ]
        : []),
      {
        id: "recap",
        label: "Session recap",
        value: ue,
        type: "boolean",
        onChange(e) {
          A((o) => ({ ...o, awaySummaryEnabled: e })),
            h({ awaySummaryEnabled: e ? void 0 : !1 }),
            m((o) => ({ ...o, awaySummaryEnabled: e ? void 0 : !1 }));
        },
      },
      ...(me
        ? [
            {
              id: "checkpoints",
              label: "Rewind code (checkpoints)",
              value: r.fileCheckpointingEnabled,
              type: "boolean",
              onChange(e) {
                M("fileCheckpointingEnabled", e),
                  p((o) => ({ ...o, fileCheckpointingEnabled: e })),
                  s("tengu_file_history_snapshots_setting_changed", { enabled: e });
              },
            },
          ]
        : []),
      ...(ke(gZn())
        ? [
            {
              id: "orgMemoryRead",
              label: "Synced project memory (this directory; applies next session)",
              value: ci().orgMemoryRead ?? !0,
              type: "boolean",
              onChange(e) {
                hZn(e, v), p((o) => ({ ...o }));
              },
            },
          ]
        : []),
      ...(Me(!YKe() && (pEe() || ci().orgMemoryWrites === !0))
        ? [
            {
              id: "orgMemoryWrites",
              label:
                ci().orgMemoryRead === !1
                  ? "Synced project memory writes (enable reads first)"
                  : "Synced project memory writes (this directory; applies next session)",
              value: Ade(),
              canWithdraw: () => ci().orgMemoryWrites === !0,
              type: "boolean",
              consentGated: !0,
              onChange(e) {
                let o = e && !Ade() && ci().orgMemoryWrites === !0;
                Kyt(o ? !1 : e, v), p((t) => ({ ...t }));
              },
            },
          ]
        : []),
      ...(B
        ? [
            {
              id: "workflows",
              label: "Dynamic workflows",
              value: f?.disableWorkflows === !0 ? !1 : (f?.enableWorkflows ?? Pgn()),
              type: "boolean",
              onChange(e) {
                let o = e === Pgn() ? void 0 : e;
                h({ enableWorkflows: o, disableWorkflows: void 0 }),
                  m((t) => ({ ...t, enableWorkflows: o, disableWorkflows: void 0 })),
                  E((t) => ({ ...t, workflows: e ? "on" : "off" }));
              },
            },
            {
              id: "workflowKeywordTriggerEnabled",
              label: "Ultracode keyword trigger",
              value: f?.workflowKeywordTriggerEnabled ?? !0,
              type: "boolean",
              onChange(e) {
                let o = e ? void 0 : !1;
                h({ workflowKeywordTriggerEnabled: o }),
                  m((t) => ({ ...t, workflowKeywordTriggerEnabled: o })),
                  E((t) => ({ ...t, ultracodeKeywordTrigger: e ? "on" : "off" }));
              },
            },
          ]
        : []),
      ...(be && (B || Zu())
        ? [
            {
              id: "workflowSizeGuideline",
              label: "Dynamic workflow size",
              value: Y.size,
              isDefaultValue: Y.isDefault,
              options: [...Jun],
              type: "enum",
              onChange(e) {
                let o = xft(e) ?? "unrestricted";
                _((t) => {
                  if (t.workflowSizeGuideline === o) return t;
                  return { ...t, workflowSizeGuideline: o };
                }),
                  p((t) => ({ ...t, workflowSizeGuideline: o })),
                  E((t) => ({ ...t, workflowSizeGuideline: o }));
              },
            },
          ]
        : []),
      ...(Se
        ? [
            {
              id: "artifacts",
              label: "Artifacts",
              value: f?.enableArtifact ?? r9t(),
              type: "boolean",
              async onChange(e) {
                let o = e === r9t() ? void 0 : e;
                m((i) => ({ ...i, enableArtifact: e }));
                let t = await h({ enableArtifact: o, disableArtifact: void 0 });
                if (t?.error) return m((i) => ({ ...i, enableArtifact: eMe().enabled })), { error: t.error };
                E((i) => ({ ...i, artifacts: e ? "on" : "off" }));
              },
            },
          ]
        : []),
      { id: "verbose", label: x("Verbose output", "Verbose"), value: ae, type: "boolean", onChange: j },
      {
        id: "progressBar",
        label: "Terminal progress bar",
        value: r.terminalProgressBarEnabled,
        type: "boolean",
        onChange(e) {
          M("terminalProgressBarEnabled", e),
            p((o) => ({ ...o, terminalProgressBarEnabled: e })),
            s("tengu_terminal_progress_bar_setting_changed", { enabled: e });
        },
      },
      ...(I("tengu_terminal_sidebar", !1)
        ? [
            {
              id: "showStatusInTerminalTab",
              label: "Show status in terminal tab",
              value: r.showStatusInTerminalTab ?? !1,
              type: "boolean",
              onChange(e) {
                _((o) => ({ ...o, showStatusInTerminalTab: e })),
                  p((o) => ({ ...o, showStatusInTerminalTab: e })),
                  s("tengu_terminal_tab_status_setting_changed", { enabled: e });
              },
            },
          ]
        : []),
      {
        id: "turnDuration",
        label: "Show turn duration",
        value: r.showTurnDuration,
        type: "boolean",
        onChange(e) {
          M("showTurnDuration", e),
            p((o) => ({ ...o, showTurnDuration: e })),
            s("tengu_show_turn_duration_setting_changed", { enabled: e });
        },
      },
      ...(I("tengu_sepia_moth", !1)
        ? [
            {
              id: "precomputeCompactionEnabled",
              label: "Precompute compaction",
              value: f?.precomputeCompactionEnabled ?? gPe(),
              type: "boolean",
              onChange(e) {
                h({ precomputeCompactionEnabled: e }),
                  m((o) => ({ ...o, precomputeCompactionEnabled: e })),
                  s("tengu_precompute_compaction_setting_changed", { enabled: e });
              },
            },
          ]
        : []),
      ...(I("tengu_silk_hinge", !1)
        ? [
            {
              id: "timestamps",
              label: "Show message timestamps",
              value: r.showMessageTimestamps,
              type: "boolean",
              onChange(e) {
                M("showMessageTimestamps", e),
                  p((o) => ({ ...o, showMessageTimestamps: e })),
                  A((o) => ({ ...o, showMessageTimestamps: e })),
                  s("tengu_show_message_timestamps_setting_changed", { enabled: e });
              },
            },
          ]
        : []),
      {
        id: "permissionMode",
        label: "Default permission mode",
        value: f?.permissions?.defaultMode || "default",
        options: (() => {
          let e = ["default", "plan"],
            o = gy,
            t = ["bypassPermissions"];
          return [...e, ...o.filter((i) => !e.includes(i) && !t.includes(i))];
        })(),
        type: "enum",
        async onChange(e) {
          let o = Tw(e),
            t = yN(o) ? sd(o) : o,
            i = f?.permissions?.defaultMode;
          m((u) => ({ ...u, permissions: { ...u?.permissions, defaultMode: t } })),
            E((u) => ({ ...u, permissionMode: e }));
          let l = await h({ permissions: { defaultMode: t } });
          if (l.error)
            return (
              m((u) => ({ ...u, permissions: { ...u?.permissions, defaultMode: i } })),
              E((u) => {
                let { permissionMode: b, ...C } = u;
                return C;
              }),
              n(`Failed to update default permission mode setting: ${l.error.message}`, { level: "error" }),
              { error: l.error }
            );
        },
      },
      {
        id: "worktreeBaseRef",
        label: "Worktree base ref",
        value: f?.worktree?.baseRef ?? "fresh",
        options: ["fresh", "head"],
        type: "enum",
        async onChange(e) {
          let o = e,
            t = f?.worktree?.baseRef;
          m((l) => ({ ...l, worktree: { ...l?.worktree, baseRef: o } })), E((l) => ({ ...l, worktreeBaseRef: o }));
          let i = await h({ worktree: { baseRef: o } });
          if (i.error)
            return (
              m((l) => ({ ...l, worktree: { ...l?.worktree, baseRef: t } })),
              E((l) => {
                let { worktreeBaseRef: u, ...b } = l;
                return b;
              }),
              n(`Failed to update worktree.baseRef in user settings: ${i.error.message}`, { level: "error" }),
              { error: i.error }
            );
        },
      },
      {
        id: "useAutoModeDuringPlan",
        label: "Use auto mode during plan",
        value: f?.useAutoModeDuringPlan ?? !0,
        type: "boolean",
        onChange(e) {
          h({ useAutoModeDuringPlan: e }),
            m((o) => ({ ...o, useAutoModeDuringPlan: e })),
            A((o) => {
              let t = A4e(o.toolPermissionContext);
              if (t === o.toolPermissionContext) return o;
              return { ...o, toolPermissionContext: t };
            }),
            E((o) => ({ ...o, "Use auto mode during plan": e }));
        },
      },
      {
        id: "gitignore",
        label: "Respect .gitignore in file picker",
        value: r.respectGitignore,
        type: "boolean",
        onChange(e) {
          _((o) => ({ ...o, respectGitignore: e })),
            p((o) => ({ ...o, respectGitignore: e })),
            s("tengu_respect_gitignore_setting_changed", { enabled: e });
        },
      },
      {
        id: "copyFullResponse",
        label: "Skip the /copy picker",
        value: r.copyFullResponse,
        type: "boolean",
        onChange(e) {
          _((o) => ({ ...o, copyFullResponse: e })), p((o) => ({ ...o, copyFullResponse: e }));
        },
      },
      ...(Nt()
        ? [
            {
              id: "copyOnSelect",
              label: "Copy on select",
              value: r.copyOnSelect ?? !0,
              type: "boolean",
              onChange(e) {
                _((o) => ({ ...o, copyOnSelect: e })), p((o) => ({ ...o, copyOnSelect: e }));
              },
            },
            {
              id: "autoScroll",
              label: x("Auto-scroll", "Auto-scroll output"),
              value: r.autoScrollEnabled,
              type: "boolean",
              onChange(e) {
                M("autoScrollEnabled", e), p((o) => ({ ...o, autoScrollEnabled: e }));
              },
            },
          ]
        : []),
      ...(Ace()
        ? cy() || tZ()
          ? [
              {
                id: "agentsView",
                label: "Agents view",
                value:
                  (tZ() && (r.leftArrowOpensAgents ?? !0)) || (cy() && (r.defaultToAgentsView ?? !1)) ? "on" : "off",
                type: "managedEnum",
                onChange() {},
              },
            ]
          : []
        : [
            ...(cy()
              ? [
                  {
                    id: "defaultToAgentsView",
                    label: "Open agents view by default",
                    value: r.defaultToAgentsView ?? !1,
                    type: "boolean",
                    onChange(e) {
                      _((o) => ({ ...o, defaultToAgentsView: e })), p((o) => ({ ...o, defaultToAgentsView: e }));
                    },
                  },
                ]
              : []),
            ...(tZ()
              ? [
                  {
                    id: "leftArrowOpensAgents",
                    label: `${fP} opens agents`,
                    value: r.leftArrowOpensAgents ?? !0,
                    type: "boolean",
                    onChange(e) {
                      _((o) => ({ ...o, leftArrowOpensAgents: e })), p((o) => ({ ...o, leftArrowOpensAgents: e }));
                    },
                  },
                ]
              : []),
          ]),
      ...[],
      ye
        ? {
            id: "autoUpdatesChannel",
            label: "Auto-update channel",
            value: "disabled",
            type: "managedEnum",
            onChange() {},
          }
        : {
            id: "autoUpdatesChannel",
            label: "Auto-update channel",
            value: f?.autoUpdatesChannel === "rc" ? "slow" : (f?.autoUpdatesChannel ?? "latest"),
            type: "managedEnum",
            onChange() {},
          },
      {
        id: "theme",
        label: "Theme",
        value: ho("themes") && Mb(D) ? `${D} (disabled in safe mode)` : D,
        type: "managedEnum",
        options: gTt,
        optionsHint: "For custom themes, use /theme.",
        onChange: _e,
      },
      ...(Ace()
        ? [
            {
              id: "notifChannel",
              label: "Notifications",
              value: JHt(r.preferredNotifChannel),
              type: "managedEnum",
              options: [...z$],
              onChange: G,
            },
          ]
        : [
            {
              id: "notifChannel",
              label: "Local notifications",
              value: r.preferredNotifChannel,
              options: [...z$],
              type: "enum",
              onChange: G,
            },
            ...(ge
              ? [
                  ...(Iht()
                    ? [
                        {
                          id: "inputNeededNotifEnabled",
                          label: "Push when actions required",
                          value: r.inputNeededNotifEnabled ?? !1,
                          type: "boolean",
                          onChange: z,
                        },
                      ]
                    : []),
                  {
                    id: "agentPushNotifEnabled",
                    label: "Push when Claude decides",
                    value: r.agentPushNotifEnabled ?? !1,
                    type: "boolean",
                    onChange: Q,
                  },
                ]
              : []),
          ]),
      {
        id: "outputStyle",
        label: "Output style",
        value: ho("outputStyles") && !Object.hasOwn(EG, P) ? `${P} (disabled in safe mode)` : P,
        type: "managedEnum",
        options: Object.keys(EG),
        optionsHint: "For custom styles, open /config.",
        async onChange(e) {
          m((t) => ({ ...t, outputStyle: e })), XO().delete(kce), zC("output_style");
          let o = await U({ outputStyle: e });
          if (o?.error) return { error: o.error };
        },
      },
      ...(ce
        ? [
            {
              id: "defaultView",
              label: "Default view",
              value: f?.defaultView === void 0 ? "default" : String(f.defaultView),
              options: ["transcript", "chat", "default"],
              type: "enum",
              onChange(e) {
                let o = e === "default" ? void 0 : e;
                U({ defaultView: o }), m((i) => ({ ...i, defaultView: o }));
                let t = o === "chat";
                DJ(t),
                  A((i) => {
                    if (i.isBriefOnly === t) return i;
                    return { ...i, isBriefOnly: t };
                  }),
                  E((i) => ({ ...i, "Default view": e })),
                  s("tengu_default_view_setting_changed", { value: c(o ?? "unset") });
              },
            },
          ]
        : []),
      {
        id: "language",
        label: "Language",
        value: te ?? "Default (English)",
        type: "managedEnum",
        coerce: ve,
        optionsHint: "Any language name or ISO code (e.g. 'ja'); use 'default' for English.",
        async onChange(e) {
          let o = e.toLowerCase() === "default" ? void 0 : e;
          m((i) => ({ ...i, language: o }));
          let t = await h({ language: o });
          if (t?.error) return { error: t.error };
        },
      },
      {
        id: "editor",
        label: "Editor mode",
        value: r.editorMode === "emacs" ? "normal" : r.editorMode || "normal",
        options: ["normal", "vim"],
        type: "enum",
        onChange(e) {
          let o = e;
          M("editorMode", o),
            p((t) => ({ ...t, editorMode: o })),
            s("tengu_editor_mode_changed", { mode: c(o), source: w("config_panel") });
        },
      },
      ...(K("askUserQuestionTimeout")
        ? []
        : [
            {
              id: "askUserQuestionTimeout",
              label: "Question auto-continue timeout",
              consentGated: !0,
              value: f?.askUserQuestionTimeout ?? jAe() ?? "never",
              options: [...X],
              type: "enum",
              async onChange(e) {
                let o = X.find((l) => l === e);
                if (!o) return;
                let t = f.askUserQuestionTimeout;
                m((l) => ({ ...l, askUserQuestionTimeout: o }));
                let i = await h({ askUserQuestionTimeout: o });
                if (i?.error) return m((l) => ({ ...l, askUserQuestionTimeout: t })), { error: i.error };
                s("tengu_ask_user_question_timeout_changed", { value: c(o), source: w("config_panel") });
              },
            },
          ]),
      ...(Yot()
        ? [
            {
              id: "modelProposedGoals",
              label: "Claude-proposed goals",
              value: f?.modelProposedGoals ?? WAe(),
              options: [...zXe],
              type: "enum",
              consentGated: !0,
              async onChange(e) {
                let o = zXe.find((i) => i === e);
                if (!o) return;
                m((i) => ({ ...i, modelProposedGoals: o }));
                let t = await h({ modelProposedGoals: o });
                if (t?.error) return { error: t.error };
                s("tengu_model_proposed_goals_changed", { value: c(o), source: w("config_panel") });
              },
            },
          ]
        : []),
      {
        id: "externalEditorContext",
        label: x("Show last response in external editor", "Show responses in IDE"),
        value: r.externalEditorContext ?? !1,
        type: "boolean",
        onChange(e) {
          _((o) => ({ ...o, externalEditorContext: e })),
            p((o) => ({ ...o, externalEditorContext: e })),
            s("tengu_external_editor_context_changed", { enabled: e });
        },
      },
      {
        id: "prStatus",
        label: x("Show PR status footer", "Show PR status"),
        value: r.prStatusFooterEnabled ?? !0,
        type: "boolean",
        onChange(e) {
          _((o) => {
            if (o.prStatusFooterEnabled === e) return o;
            return { ...o, prStatusFooterEnabled: e };
          }),
            p((o) => ({ ...o, prStatusFooterEnabled: e })),
            s("tengu_pr_status_footer_setting_changed", { enabled: e });
        },
      },
      {
        id: "model",
        label: "Model",
        value: W === null ? "Default (recommended)" : _R(W),
        type: "managedEnum",
        options: we(),
        optionsHint: "For a specific model ID, use /model.",
        onChange(e) {
          let o = e === "default" ? null : e;
          if (aW(o))
            return (
              g("model_fable_consent", "config_shorthand_blocked"),
              { error: new js("needs usage-credits consent \u2014 run /model first") }
            );
          return V(o);
        },
      },
      ...(pe
        ? [
            {
              id: "diffTool",
              label: "Diff tool",
              value: r.diffTool ?? "auto",
              options: ["terminal", "auto"],
              type: "enum",
              onChange(e) {
                let o = e;
                _((t) => ({ ...t, diffTool: o })),
                  p((t) => ({ ...t, diffTool: o })),
                  s("tengu_diff_tool_changed", { tool: c(o), source: w("config_panel") });
              },
            },
          ]
        : []),
      ...(!mH()
        ? [
            {
              id: "autoConnectIde",
              label: "Auto-connect to IDE (external terminal)",
              value: r.autoConnectIde ?? !1,
              type: "boolean",
              onChange(e) {
                _((o) => ({ ...o, autoConnectIde: e })),
                  p((o) => ({ ...o, autoConnectIde: e })),
                  s("tengu_auto_connect_ide_changed", { enabled: e, source: w("config_panel") });
              },
            },
          ]
        : []),
      ...(mH()
        ? [
            {
              id: "autoInstallIdeExtension",
              label: "Auto-install IDE extension",
              value: r.autoInstallIdeExtension ?? !0,
              type: "boolean",
              onChange(e) {
                _((o) => ({ ...o, autoInstallIdeExtension: e })),
                  p((o) => ({ ...o, autoInstallIdeExtension: e })),
                  s("tengu_auto_install_ide_extension_changed", { enabled: e, source: w("config_panel") });
              },
            },
          ]
        : []),
      {
        id: "chrome",
        label: x("Claude in Chrome enabled by default", "Claude in Chrome"),
        value: r.claudeInChromeDefaultEnabled ?? !1,
        type: "boolean",
        onChange(e) {
          _((o) => ({ ...o, claudeInChromeDefaultEnabled: e })),
            p((o) => ({ ...o, claudeInChromeDefaultEnabled: e })),
            s("tengu_claude_in_chrome_setting_changed", { enabled: e });
        },
      },
      ...(io()
        ? (() => {
            let e = xrn();
            return [
              {
                id: "teammateMode",
                label: e ? `Teammate mode [overridden: ${e}]` : "Teammate mode",
                value: r.teammateMode ?? Pst,
                options: ["auto", "tmux", "iterm2", "in-process"],
                type: "enum",
                onChange(t) {
                  if (t !== "auto" && t !== "tmux" && t !== "iterm2" && t !== "in-process") return;
                  Irn(t),
                    Nje(),
                    M("teammateMode", t),
                    p((i) => ({ ...i, teammateMode: t })),
                    s("tengu_teammate_mode_changed", { mode: c(t) });
                },
              },
            ];
          })()
        : []),
      ...(ch()
        ? [
            {
              id: "remoteControl",
              label: "Enable Remote Control for all sessions",
              value: r.remoteControlAtStartup === void 0 ? "default" : String(r.remoteControlAtStartup),
              options: ["true", "false", "default"],
              type: "enum",
              onChange(e) {
                if (e === "default")
                  M("remoteControlAtStartup", void 0),
                    _((t) => {
                      if (t.remoteControlAtStartup === void 0) return t;
                      let i = { ...t };
                      return delete i.remoteControlAtStartup, i;
                    }),
                    p((t) => ({ ...t, remoteControlAtStartup: void 0 }));
                else {
                  let t = e === "true";
                  M("remoteControlAtStartup", t), p((i) => ({ ...i, remoteControlAtStartup: t }));
                }
                let o = B3();
                A((t) => Pyn(t, o));
              },
            },
          ]
        : []),
      ...(K("dialogExpiry")
        ? []
        : [
            {
              id: "dialogExpiry",
              label: "Dialog expiry",
              consentGated: !0,
              value: f.dialogExpiry ?? "default",
              options: [...Z],
              type: "enum",
              async onChange(e) {
                let o = Z.find((u) => u === e);
                if (!o) return;
                let t = o === "default" ? void 0 : o,
                  i = f.dialogExpiry;
                m((u) => ({ ...u, dialogExpiry: t }));
                let l = await h({ dialogExpiry: t });
                if (l?.error) return m((u) => ({ ...u, dialogExpiry: i })), { error: l.error };
                s("tengu_dialog_expiry_changed", { value: c(o), source: w("config_panel") });
              },
            },
          ]),
      ...(fe && !K("crossSessionInbound")
        ? [
            {
              id: "crossSessionInbound",
              label: "Messages from your other sessions",
              consentGated: !0,
              pickToCommit: !0,
              value: f.crossSessionInbound ?? "default",
              options: [...ee],
              type: "enum",
              async onChange(e) {
                let o = ee.find((u) => u === e);
                if (!o) return;
                let t = o === "default" ? void 0 : o,
                  i = f.crossSessionInbound;
                m((u) => ({ ...u, crossSessionInbound: t }));
                let l = await h({ crossSessionInbound: t });
                if (l?.error) return m((u) => ({ ...u, crossSessionInbound: i })), { error: l.error };
                s("tengu_cross_session_inbound_changed", { value: c(o), source: w("config_panel") });
              },
            },
          ]
        : []),
      ...[],
      ...(ch(), []),
      ...[],
      ...(Ce
        ? [
            {
              id: "showExternalIncludesDialog",
              label: x("External CLAUDE.md includes", "External CLAUDE.md files"),
              value: ne ? "true" : "false",
              type: "managedEnum",
              onChange() {},
            },
          ]
        : []),
      ...(a.ANTHROPIC_API_KEY && !t_()
        ? [
            {
              id: "apiKey",
              consentGated: !0,
              label: "Use custom API key: ",
              labelBoldSuffix: L3(a.ANTHROPIC_API_KEY),
              searchText: "Use custom API key",
              value: Boolean(
                a.ANTHROPIC_API_KEY && r.customApiKeyResponses?.approved?.includes(L3(a.ANTHROPIC_API_KEY)),
              ),
              type: "boolean",
              onChange(e) {
                _((o) => {
                  let t = { ...o };
                  if (!t.customApiKeyResponses) t.customApiKeyResponses = { approved: [], rejected: [] };
                  if (!t.customApiKeyResponses.approved)
                    t.customApiKeyResponses = { ...t.customApiKeyResponses, approved: [] };
                  if (!t.customApiKeyResponses.rejected)
                    t.customApiKeyResponses = { ...t.customApiKeyResponses, rejected: [] };
                  if (a.ANTHROPIC_API_KEY) {
                    let i = L3(a.ANTHROPIC_API_KEY);
                    if (e)
                      t.customApiKeyResponses = {
                        ...t.customApiKeyResponses,
                        approved: [...(t.customApiKeyResponses.approved ?? []).filter((l) => l !== i), i],
                        rejected: (t.customApiKeyResponses.rejected ?? []).filter((l) => l !== i),
                      };
                    else
                      t.customApiKeyResponses = {
                        ...t.customApiKeyResponses,
                        approved: (t.customApiKeyResponses.approved ?? []).filter((l) => l !== i),
                        rejected: [...(t.customApiKeyResponses.rejected ?? []).filter((l) => l !== i), i],
                      };
                  }
                  return t;
                }),
                  p(Yke());
              },
            },
          ]
        : []),
    ],
    helpers: {
      onChangeMainModelConfig: V,
      onChangeVerbose: j,
      changeNotifChannel: G,
      changeInputNeededNotif: z,
      changeAgentPushNotif: Q,
    },
  };
}
export { JHt, mrt, Yke, XNn, Jke };
