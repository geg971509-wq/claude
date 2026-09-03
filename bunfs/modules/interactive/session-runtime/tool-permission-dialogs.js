// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $$e, $3e, $6e, $Pn, $s, A, AQt, Ae, Ag, Aot, At, Ate, B, B$e, B$n, B1t, BG, BPn, BXt, Bm, Bn, Bx, C, C3, CQt, CR, Cet, Cf, Cge, Ci, Cj, Cke, Co, Cq, Cr, Cxn, D7, DLn, Dee, Dft, Dt, E, EIe, EQt, EU, Ee, Ep, Et, F, FK, FPe, G, G6e, GMn, GYe, Ge, Gg, Gp, Gqn, Gr, Gs, Gu, HPe, Hot, Hte, I, ILe, ILn, IOe, IZ, Ih, Int, It, Iun, Iye, J, J4, JJ, JL, JQe, JXt, J_, Jc, Jfe, Jr, Jsn, Jve, K$, K8e, KPn, KRt, KUn, KXt, Kh, Kkn, Kqe, Ktt, Kve, L3t, LKt, LN, Lf, Lhe, Ln, Lt, MB, MG, MP, Mn, N4e, NUn, Nh, Nj, Nt, O, O0, O3n, OKt, OLe, OLn, Ohe, Oi, Oj, Or, P$e, P1, P7, PLn, PS, Pm, Pnt, Prt, Pse, Pun, Q, QE, QJ, QKt, QS, QSe, QXt, QYt, Qbt, Qc, Qn, Qve, Qvt, R$n, R9, RR, RZt, Ree, Ret, Rre, Ry, S$n, SHt, SK, SL, SLe, Sbn, Se, Si, Sit, Sut, Ta, Te, Tet, Tot, Tq, U3n, U4e, UPn, Ue, Un, Uq, Ure, Us, Uy, V$n, V0e, VPn, VXt, VZe, V_, Vc, Vtt, W, WMe, WMn, WO, WR, WXn, Wqe, Wt, X, X$e, X0, X6e, X8e, XA, XZe, Xe, Xn, Xon, Xt, Y6e, YB, YC, YG, YXt, Y_, Yc, Ycn, Ydt, Ye, Yp, Yqe, Yr, Z4, ZIe, ZIt, ZL, ZQ, ZSe, ZUn, ZXt, Zce, Zet, Zt, Zve, Zvt, _Le, _Oe, _S, _et, _he, _i, _r, _ut, a, a0, a1, a6, aRe, aRt, azt, b, b8e, bHt, bLe, bLn, ba, bet, bot, br, bvt, c, cI, cO, cVn, cae, ce, cnt, cr, ct, ctt, czt, dGe, dL, dRe, dbt, dd, dhe, dr, dse, dw, dxt, e1e, e8t, eBn, eDe, eDn, eHe, ePt, eQ, eRt, eYt, ei, et, ez, f, fGn, fKe, fbe, fd, fi, fit, fr, ft, fu, fut, g, g9, gFn, gH, gKt, gSe, gW, ge, ghe, gk, gl, go, gr, gt, h, h9, hEe, hGn, hO, ha, het, hle, hm, hpe, hr, iA, iLe, iRe, iYt, ibe, ie, ih, iie, il, io, iyt, j1t, jPn, j_, jl, jp, jr, jun, k, k0e, kBt, kDe, kLe, kPe, kWt, ke, kge, kie, kl, kn, kre, ks, l, lM, lPe, li, lte, ltn, lzt, m, m3n, m4e, m7, m9, mW, mYt, met, mgn, mh, mit, mn, ms, mu, n, n2e, n7, n8, nFt, nMe, nQ, nRt, nS, nYt, nc, ne, net, ng, nl, no, nr, o$n, o4e, oFt, oYt, oZ, oae, oe, oet, ohn, ow, oz, p, p6, pF, pK, pb, pd, po, pt, pw, qMn, qNt, qQ, qm, qn, qqn, r$n, r0, r8, rH, rLe, rQ, rRt, rYt, ra, ret, rie, ro, rt, rv, s, sGe, sP, sRe, sRt, sYt, sie, sm, sn, sv, t1n, t2e, tQ, tRt, tV, t_n, te, tre, tz, u, u$, u1, uB, uHt, uRe, v, vA, vEe, vQt, vet, vre, vt, vu, vun, w, w4, w6e, wIe, wNe, wO, wUt, we, wet, wt, wte, x2t, xF, xLn, xUn, xZ, xe, xme, xnt, xot, xp, xrt, xt, xun, xye, y, y0n, yK, yLe, yN, yee, yet, yhe, yie, ytn, z, z6e, zD, zIn, zPn, zT, zXt, zr, zsn, zx } from "/$bunfs/root/modules/chunk-rce59kvp/prelude.js";
import { Qre, n$ } from "/$bunfs/root/modules/chunk-rce59kvp/module-001.js";

async function ID(S) {
  let x = S.tool,
    P = { ...S, description: typeof S.description === "string" ? S.description : "" },
    j = typeof S.input === "object" && S.input !== null && !Array.isArray(S.input),
    H = { ...P, hasExternalRacer: true };
  if (!j)
    return {
      dialog: kre,
      descriptor: {
        ...WR(H),
        toolUseRenderFailed: true,
        renderedToolUseMessage: "parameters could not be rendered \u2014 deny unless expected",
      },
    };
  let Z = ltn(x);
  if (Z !== void 0) return { dialog: Z.dialog, descriptor: Z.build(H) };
  if (fit(x)) {
    let re = mit(x, S.input);
    if (re !== null) {
      let ue =
          S.remoteWorkspace === true && sLe(x) && !S.signal?.aborted
            ? aLe({ lookup: S.heldServedCall, tool: x, toolUseId: S.toolUseID, input: S.input, filePath: re })
            : void 0,
        de = async () =>
          Lhe({
            ...P,
            filePath: re,
            remoteWorkspace: S.remoteWorkspace === true,
            remoteOldContent: S.remoteWorkspace === true && NUn(x) && !S.signal?.aborted ? await dLe(re) : void 0,
          }),
        pe = () => Lhe({ ...P, filePath: re, remoteWorkspace: true, remoteOldContent: void 0 });
      try {
        let { descriptor: Re, outcome: be } =
          ue === void 0
            ? { descriptor: ow(S.input) ? await pe() : await de(), outcome: void 0 }
            : ue.preview === "local"
              ? await lLe({ args: P, filePath: re, startCwd: ue.startCwd })
              : { descriptor: await pe(), outcome: ue };
        if (be !== void 0) cLe(x, be);
        return { dialog: Ohe, descriptor: Re };
      } catch {
        return {
          dialog: kre,
          descriptor: {
            ...WR(H),
            toolUseRenderFailed: true,
            renderedToolUseMessage: "parameters could not be rendered \u2014 deny unless expected",
          },
        };
      }
    }
  }
  if (x === _i)
    return {
      dialog: V0e,
      descriptor: ZIt({ ...P, classifierState: "none", toolPermissionContext: S.toolPermissionContext }),
    };
  return { dialog: kre, descriptor: WR(H) };
}

function sLe(S) {
  return S === Y_ || S === Uy;
}

function aLe(S) {
  if (S.lookup === void 0 || !ow(S.input) || !Gs()) return;
  try {
    let x = S.lookup({ toolUseId: S.toolUseId, toolName: S.tool.name, input: S.input });
    return x.held ? { preview: "local", startCwd: x.startCwd } : { preview: "remote", reason: x.reason };
  } catch (x) {
    return h(x), { preview: "remote", reason: "lookup_error" };
  }
}

async function lLe(S) {
  let x = gt(S.filePath, String(S.startCwd)),
    P = { ...S.args, input: { ...S.args.input, file_path: x } };
  try {
    return {
      descriptor: {
        ...(await Lhe({ ...P, filePath: x, remoteWorkspace: false })),
        input: S.args.input,
        subtitle: nr(rLe(S.startCwd, x)),
        workingDir: S.startCwd,
      },
      outcome: { preview: "local", startCwd: S.startCwd },
    };
  } catch (j) {
    n(`buildForwardedPermissionDialog: local preview of a held call failed: ${l(j)}`, { level: "error" });
    let H = {
        ...(await Lhe({ ...P, filePath: x, remoteWorkspace: true, remoteOldContent: void 0 })),
        input: S.args.input,
      },
      Z = E(j);
    return {
      descriptor:
        H.content.kind === "no-changes" && Z !== void 0
          ? {
              ...H,
              content: {
                kind: "no-changes",
                message: `This machine could not read the file (${Z}) \u2014 approving will attempt the write anyway.`,
              },
            }
          : H,
      outcome: { preview: "remote", reason: "local_read_failed" },
    };
  }
}

function cLe(S, x) {
  s("tengu_remote_tool_served_preview", {
    tool: Un(S.name),
    preview: c(x.preview),
    reason: ke(x.preview === "remote" ? x.reason : void 0),
  });
}

var uLe = 1e4;

async function dLe(S) {
  if (!zT("fileRead")) return;
  try {
    let x = await Xt(
      Gr().sendControlRequest({ subtype: "read_file", path: S, max_bytes: bvt }),
      uLe,
      "remote read_file timed out",
    );
    if (x.truncated === true) return;
    return x.contents;
  } catch (x) {
    let P = x instanceof Error ? x.message : String(x);
    if (P.includes("ENOENT") || P.includes("no such file")) return null;
    n(`buildForwardedPermissionDialog: remote read_file failed for ${S}: ${P}`, { level: "error" });
    return;
  }
}

function mLe(S) {
  return kWt.includes(S);
}

function i$(S) {
  return Ci(Et(S));
}

class Ax {
  inputs;
  inFlight = new Map();
  constructor(S) {
    this.inputs = S;
  }
  setInputs(S) {
    this.inputs = S;
  }
  dispatch = (S) => {
    if (S.request.subtype !== "can_use_tool") return false;
    if (typeof S.request_id !== "string")
      return (
        n(
          "[TransportPermissionDispatcher] Dropping can_use_tool whose request_id is not a string \u2014 no response is possible",
          { level: "error" },
        ),
        false
      );
    if (!eDn(S.request)) {
      let be = S.request.tool_use_id;
      return (
        n(`[TransportPermissionDispatcher] Denying malformed can_use_tool ${S.request_id}`, { level: "error" }),
        this.inputs.sendResponse(S.request_id, {
          behavior: "deny",
          message: "Malformed permission request from worker",
          ...(typeof be === "string" && { toolUseID: be }),
        }),
        false
      );
    }
    let { request: P, request_id: j } = S,
      H = this.inFlight;
    if (H.has(j))
      return (
        n(
          `[TransportPermissionDispatcher] can_use_tool ${i$(j).slice(0, 80)} is already open here \u2014 not dispatching it again`,
          { level: "warn" },
        ),
        false
      );
    let { toolRegistry: Z, toolPermissionContext: re, theme: ue } = this.inputs,
      de = Qre(P.tool_name, Z),
      pe =
        P.description !== void 0 && P.decision_reason !== void 0 && i$(P.description) === i$(P.decision_reason)
          ? `${P.tool_name} requires permission`
          : (P.description ?? `${P.tool_name} requires permission`),
      Re = new AbortController();
    return (
      H.set(j, Re),
      ID({
        tool: de,
        input: P.input,
        description: pe,
        toolUseID: P.tool_use_id,
        permissionResult: {
          behavior: "ask",
          message: pe,
          suggestions: P.permission_suggestions,
          blockedPath: P.blocked_path,
          suppressAlwaysAllowRule: P.suppress_always_allow_rule,
          defaultToNo: P.default_to_no,
          ...(P.matched_ask_rule &&
            mLe(P.matched_ask_rule.source) && {
              matchedAskRule: {
                source: P.matched_ask_rule.source,
                ruleBehavior: "ask",
                ruleValue: {
                  toolName: Ci(Et(P.matched_ask_rule.tool_name)),
                  ...(P.matched_ask_rule.rule_content !== void 0 && {
                    ruleContent: Ci(Et(P.matched_ask_rule.rule_content)),
                  }),
                },
              },
            }),
          ...(P.decision_reason !== void 0 &&
            P.decision_reason_type !== "sandboxOverride" && {
              decisionReason:
                P.decision_reason_type === "safetyCheck" || P.decision_reason_type === "subcommandResults"
                  ? {
                      type: "safetyCheck",
                      reason: Ci(Et(P.decision_reason)),
                      classifierApprovable: P.classifier_approvable ?? false,
                    }
                  : {
                      type: "other",
                      reason:
                        P.decision_reason_type === "hook"
                          ? `A hook configured in the remote workspace requires confirmation: ${Ci(Et(P.decision_reason))}`
                          : P.decision_reason_type === "classifier"
                            ? `An automated safety classifier requires confirmation: ${Ci(Et(P.decision_reason))}`
                            : Ci(Et(P.decision_reason)),
                    },
            }),
        },
        assistantMessage: Qc({ content: [{ type: "tool_use", id: P.tool_use_id, name: P.tool_name, input: P.input }] }),
        theme: ue,
        toolPermissionContext: re,
        remoteWorkspace: sn(),
        heldServedCall: this.inputs.heldServedCall,
        signal: Re.signal,
      })
        .then(({ dialog: be, descriptor: Pe }) => {
          if (!H.has(j)) return Promise.resolve({ behavior: "cancelled" });
          return this.inputs.requestDialog(be, Pe, { signal: Re.signal, queueBehind: true });
        })
        .then((be) => {
          if (!H.delete(j)) return;
          let { sendResponse: Pe, canInterruptTurn: Oe } = this.inputs;
          switch (be.behavior) {
            case "allow":
              Pe(j, {
                behavior: "allow",
                updatedInput: be.updatedInput,
                ...(be.permissionUpdates?.length && { updatedPermissions: [...(be.permissionUpdates ?? [])] }),
                toolUseID: P.tool_use_id,
              });
              return;
            case "deny": {
              let Ie = Oe && ePt({ feedback: be.feedback, contentBlocks: be.contentBlocks, isSubagent: !!P.agent_id });
              Pe(j, {
                behavior: "deny",
                message: be.feedback ?? "User denied permission",
                ...(Ie && { interrupt: true }),
                toolUseID: P.tool_use_id,
              });
              return;
            }
            case "cancelled":
              Pe(j, {
                behavior: "deny",
                message: "User aborted",
                ...(Oe && { interrupt: true }),
                toolUseID: P.tool_use_id,
              });
              return;
          }
        })
        .catch((be) => {
          if (!H.delete(j)) return;
          this.inputs.sendResponse(j, {
            behavior: "deny",
            message: `Permission dialog failed: ${be instanceof Error ? be.message : String(be)}`,
            toolUseID: P.tool_use_id,
          });
        }),
      true
    );
  };
  cancel = (S) => {
    let x = this.inFlight.get(S);
    if (!x) return;
    this.inFlight.delete(S), x.abort();
  };
  drain() {
    for (let [S, x] of this.inFlight)
      this.inFlight.delete(S),
        this.inputs.sendResponse(S, { behavior: "deny", message: "Permission dispatcher unmounted" }),
        x.abort();
  }
}

var pLe = 100,
  zre = 8192,
  fLe = zre * 2;

class Fb {
  slots = new Map();
  reset() {
    this.slots.clear();
  }
  onInputJsonDelta(S, x, P) {
    if (!P || !P7()) return;
    let j = this.slots.get(S);
    if (!j) (j = { raw: "", flushedAt: 0 }), this.slots.set(S, j);
    if (j.raw.length < fLe) j.raw += x;
    let H = Date.now();
    if (H - j.flushedAt < pLe) return;
    j.flushedAt = H;
    let Z = bLn(j.raw).slice(0, zre);
    P((re) => {
      let ue = re.findIndex((de) => de.index === S);
      if (ue === -1 || re[ue].contentBlock.name !== $s) return re;
      return re.with(ue, { ...re[ue], contentBlock: { ...re[ue].contentBlock, input: { code: Z } } });
    });
  }
}

F();

var gLe = [1000, 3000, 9000];

function Yre(S, x) {
  S.lastBroadcast = { mode: x, seq: (S.lastBroadcast?.seq ?? 0) + 1 };
}

function Jre(S, x = gLe) {
  let P = Xe(S, (Ie) => Ie.activeRemote),
    j = S.modeWire,
    H = ct(),
    Z = W((Ie) => Ie.toolPermissionContext),
    re = Z.mode,
    ue = At(),
    de = Xn(),
    { addNotification: pe } = Or(),
    Re = C({ mode: re, context: Z }),
    be = C(null),
    Pe = C(null),
    Oe = C(null);
  A(
    () => () => {
      Oe.current = null;
    },
    [],
  ),
    A(() => {
      if (!P.isRemoteMode || !P.caps.controlChannel || P.viewerOnly) {
        Oe.current = null;
        return;
      }
      let Ie = Re.current;
      Re.current = { mode: re, context: Z };
      let He = j.applied;
      if (((j.applied = null), Ie.mode === re || re === "bubble")) return;
      if (((Oe.current = null), He === re)) {
        KRt(H, re);
        return;
      }
      let Fe = re,
        Ve = be.current === Fe;
      be.current = null;
      let Ke = j.lastBroadcast?.seq ?? 0,
        ot = (nt, Pt) => {
          P.sendControlRequest({ subtype: "set_permission_mode", mode: Fe })
            .then(() => {
              if (((Pe.current = { mode: Fe, afterBroadcastSeq: j.lastBroadcast?.seq ?? 0 }), KRt(H, Fe), !Pt))
                y("mode_switch");
            })
            .catch((kt) => {
              KRt(H, Fe, we(kt)), n(`[remote] set_permission_mode rejected: ${l(kt)}`);
              let Ht = kt instanceof qQ;
              if (Pt) {
                if (Ht) st(nt);
                return;
              }
              if ((p("mode_switch", O0(kt)), de.getState().toolPermissionContext.mode !== Fe)) return;
              let yt = j.lastBroadcast;
              if (yt && yt.seq > Ke && yt.mode === Fe) {
                n(
                  `[remote] set_permission_mode ${Fe} failed, but the worker has since reported ${Fe} itself \u2014 keeping it`,
                );
                return;
              }
              let lt = () =>
                  pe(
                    Ht
                      ? {
                          key: "remote-permission-mode-rejected",
                          kind: "feedback",
                          text: `Couldn't reach the cloud session to switch to ${Fe} mode`,
                          color: "warning",
                          priority: "immediate",
                        }
                      : Tv(Fe),
                  ),
                Rt = Pe.current,
                to = Rt && (!yt || yt.seq <= Rt.afterBroadcastSeq) ? Rt.mode : yt?.mode;
              if (to !== void 0 && to !== Ie.mode) {
                if (to === Fe) {
                  n(
                    `[remote] set_permission_mode ${Fe} failed; ${Fe} is the worker's last confirmed mode \u2014 keeping it and re-sending`,
                  ),
                    ot(0, true);
                  return;
                }
                if (
                  X0(to, de.getState().toolPermissionContext, (jt) => {
                    (be.current = to),
                      ue((Gt) =>
                        Gt.toolPermissionContext.mode !== Fe
                          ? Gt
                          : { ...Gt, toolPermissionContext: jt(Gt.toolPermissionContext) },
                      );
                  }).ok
                ) {
                  n(
                    `[remote] set_permission_mode ${Fe} failed; falling back to the worker's last confirmed mode ${to} (not the unconfirmed ${Ie.mode})`,
                  ),
                    lt();
                  return;
                }
              }
              (be.current = Ie.mode),
                ue((so) => {
                  if (so.toolPermissionContext.mode !== Fe) return so;
                  return { ...so, toolPermissionContext: Ie.context };
                }),
                lt();
            });
        },
        st = (nt) => {
          let Pt = x[nt];
          if (Pt === void 0) {
            n(`[remote] convergence push of ${Fe} mode still undelivered after ${nt + 1} attempts \u2014 giving up`, {
              level: "warn",
            }),
              pe({
                key: "remote-permission-mode-unsynced",
                kind: "feedback",
                text: "Couldn't reach the cloud session \u2014 permission mode may be out of sync \xB7 shift+tab to retry",
                color: "warning",
                priority: "immediate",
              });
            return;
          }
          let kt = { broadcastSeq: j.lastBroadcast?.seq ?? 0 };
          (Oe.current = kt),
            ne(Pt).then(() => {
              if (Oe.current !== kt) return;
              if (
                ((Oe.current = null),
                (j.lastBroadcast?.seq ?? 0) !== kt.broadcastSeq || de.getState().toolPermissionContext.mode !== Fe)
              )
                return;
              ot(nt + 1, true);
            });
        };
      ot(0, Ve);
    }, [H, re, Z, P, ue, pe, de, j, x]);
}

function Tv(S) {
  return {
    key: "remote-permission-mode-rejected",
    kind: "feedback",
    text: `Remote session couldn't switch to ${K$(S)} mode`,
    color: "warning",
    priority: "immediate",
  };
}

function DD({
  adapter: S,
  sink: x,
  isLoading: P,
  requestDialog: j,
  toolPermissionContext: H,
  tools: Z,
  onInit: re,
  turnStream: ue,
}) {
  let de = !!S,
    pe = ue?.streaming,
    Re = ue?.setStreamMode,
    be = ue?.setInProgressToolUseIDs,
    { setMessages: Pe, setIsLoading: Oe, onPermissionModeChange: Ie, onConversationReset: He, onTurnComplete: Fe } = x,
    Ve = C(null),
    Ke = C(false),
    ot = C(false),
    [st] = u(eRt),
    nt = P !== void 0,
    Pt = C(P ?? false);
  if (nt) Pt.current = P;
  let kt = B(
      (cn) => {
        if (cn && nt && Pt.current) return;
        (Pt.current = cn), Oe(cn);
      },
      [Oe, nt],
    ),
    Ht = C(false),
    yt = C(0),
    lt = B(() => {
      if (!Ht.current) yt.current++;
      (Ht.current = true), kt(false);
    }, [kt]),
    Rt = At(),
    to = Xn(),
    { addNotification: so, removeNotification: jt } = Or(),
    Gt = B((cn) => Rt((tn) => (tn.remoteConnectionStatus === cn ? tn : { ...tn, remoteConnectionStatus: cn })), [Rt]),
    vo = C(new Set()),
    qt = B(() => {
      let cn = vo.current.size;
      Rt((tn) => (tn.remoteBackgroundTaskCount === cn ? tn : { ...tn, remoteBackgroundTaskCount: cn }));
    }, [Rt]),
    lo = B(() => {
      vo.current.clear(), qt(), be?.({ action: "clear" }), st.inProgressToolUses.clear();
    }, [qt, be, st]),
    [To] = mn(),
    ao = {
      sendResponse: (cn, tn) => {
        let nn = Ve.current;
        if (!nn) return;
        if ((nn.respondToPermissionRequest(cn, tn), tn.behavior === "allow")) kt(true);
        else if (tn.interrupt) lt();
      },
      requestDialog: j,
      toolRegistry: Z,
      toolPermissionContext: H,
      theme: To,
      canInterruptTurn: !S?.readOnly,
    },
    [jo] = u(() => new Ax(ao));
  A(() => {
    jo.setInputs(ao);
  }),
    A(() => {
      if (!S) return;
      let { label: cn, createManager: tn, onDisconnected: nn, cleanup: pn } = S;
      Ke.current = false;
      let Go = false;
      (Ht.current = false), (yt.current = 0), n(`[${cn}] connecting`);
      function Oo(zo) {
        if (Go || S?.readOnly) return;
        let en = to.getState().toolPermissionContext.mode;
        if (en === "bubble") return;
        Go = true;
        let un = zo.sendControlRequest?.bind(zo);
        if (!un) {
          zo.setPermissionMode?.(en);
          return;
        }
        un({ subtype: "set_permission_mode", mode: en }).catch((Uo) => {
          if (Ve.current !== zo || O0(Uo) !== "server_error") return;
          if (
            (n(`[${cn}] connect-time set_permission_mode '${en}' refused by the worker: ${l(Uo)}`, { level: "warn" }),
            to.getState().toolPermissionContext.mode !== en)
          )
            return;
          Ie("default"),
            so(Tv(en)),
            un({ subtype: "set_permission_mode", mode: "default" }).catch((Rn) => {
              n(`[${cn}] convergence set_permission_mode 'default' failed: ${l(Rn)}`, { level: "warn" });
            });
        });
      }
      let xo = pe ? new Fb() : void 0,
        dn = tn({
          onMessage: (zo) => {
            if (!QJ(zo)) return;
            if (zo.type === "active_goal") {
              let Uo = Jve(zo.value);
              Rt((Rn) => (Rn.activeGoal === Uo ? Rn : { ...Rn, activeGoal: Uo })),
                s("tengu_remote_active_goal_adopted", { via: w("thin_client_stream"), active: Uo !== void 0 });
              return;
            }
            if (zo.type === "autocompact_state") {
              Qvt(Rt, zo.value, w("thin_client_stream"));
              return;
            }
            {
              let Uo = kie(zo);
              if (Uo)
                oet({ index: st, signal: Uo, surface: "thin_client", setMessages: Pe, setInProgressToolUseIDs: be });
            }
            if (Zvt(zo)) {
              if (yt.current > 0) yt.current--;
              else Fe?.();
              (Ht.current = false), kt(false);
            }
            if (
              !Ht.current &&
              (zo.type === "assistant" ||
                zo.type === "stream_event" ||
                (zo.type === "system" && zo.subtype === "status" && zo.status === "requesting"))
            )
              kt(true);
            if (zo.type === "system" && zo.subtype === "status") {
              let Uo = dbt(zo);
              if (Uo !== void 0) Ie(Uo);
            }
            if (zo.type === "system" && zo.subtype === "init") {
              if (Ke.current) return;
              (Ke.current = true), re?.(zo);
            }
            if (zo.type === "system") {
              if (zo.subtype === "task_started") {
                vo.current.add(zo.task_id), qt();
                return;
              }
              if (zo.subtype === "task_notification") {
                vo.current.delete(zo.task_id), qt();
                return;
              }
              if (zo.subtype === "task_progress" || zo.subtype === "task_updated") return;
              if (zo.subtype === "notification") {
                if (B1t(zo)) {
                  let Uo = o4e(zo, "remote"),
                    Rn = j1t(to.getState().notifications, Uo.key);
                  if (Rn !== null) jt(Rn);
                  so(Uo),
                    s("tengu_remote_notification_routed", { via: w("thin_client_stream"), priority: c(zo.priority) });
                } else n("[useThinClientSession] Dropping malformed notification frame");
                return;
              }
            }
            if (be && zo.type === "user") {
              let Uo = zo.message?.content;
              if (Array.isArray(Uo)) {
                let Rn = [];
                for (let mr of Uo) if (mr.type === "tool_result") Rn.push(mr.tool_use_id);
                if (Rn.length > 0)
                  be({ action: "remove", ids: Rn }),
                    ret(st, Rn),
                    rRt(st, Rn, "thin_client", typeof zo.uuid === "string" ? zo.uuid : null);
              }
            }
            if (S.interceptMessage?.(zo, { setMessages: Pe }) === "consumed") return;
            let en = null;
            if (en !== null) {
              if (typeof zo.uuid === "string" && $$e(st, zo.uuid, "thin_client")) return;
              if (en.length > 0) {
                if (typeof zo.uuid === "string")
                  tRt(
                    st,
                    zo.uuid,
                    en.map((Uo) => Uo.uuid),
                  );
                Pe((Uo) => {
                  let Rn = en.filter((mr) => !Uo.some((Pr) => Pr.uuid === mr.uuid));
                  return Rn.length === 0 ? Uo : [...Uo, ...Rn];
                });
              }
              return;
            }
            let un = JJ(zo, S.convertOpts);
            if (un.type === "conversation_reset") {
              pe?.setStreamingToolUses((Uo) => (Uo.length > 0 ? [] : Uo)),
                be?.({ action: "clear" }),
                st.inProgressToolUses.clear(),
                kt(false),
                He?.(un.newConversationId);
              return;
            }
            if (un.type === "message") {
              if (
                (pe?.setStreamingToolUses((Uo) => (Uo.length > 0 ? [] : Uo)), $$e(st, un.message.uuid, "thin_client"))
              )
                return;
              if (be && un.message.type === "assistant") {
                let Uo = un.message.message.content.filter((Rn) => Rn.type === "tool_use").map((Rn) => Rn.id);
                if (Uo.length > 0) be({ action: "add", ids: Uo }), nRt(st, un.message.uuid, Uo);
              }
              Pe((Uo) => [...Uo, un.message]);
            } else if (un.type === "stream_event")
              fbe(un.event, {
                onMessage: (Uo) => Pe((Rn) => [...Rn, Uo]),
                onUpdateLength: () => {},
                onSetStreamMode: Re ?? (() => {}),
                onStreamingToolUses: pe?.setStreamingToolUses ?? (() => {}),
                replInputAccumulator: xo,
                onApiMetrics: pe?.recordApiMetricsEvent,
              });
          },
          onPermissionRequest: (zo, en) => {
            if ((n(`[${cn}] permission request: ${zo.tool_name}`), S.readOnly)) {
              kt(false);
              return;
            }
            if (jo.dispatch({ type: "control_request", request_id: en, request: zo })) kt(false);
          },
          onPermissionCancelled: (zo, en) => {
            if ((n(`[${cn}] permission cancelled: ${zo}`), jo.cancel(zo), !Ht.current)) kt(true);
          },
          onConnected: () => {
            n(`[${cn}] connected`), (ot.current = true), Gt("connected"), Oo(dn);
          },
          onReconnecting: (zo, en) => {
            if (
              ((Go = false),
              n(`[${cn}] dropped, reconnecting${zo != null ? ` (${zo}/${en})` : ""}`),
              (ot.current = false),
              Gt("reconnecting"),
              !S.replaysOnReconnect)
            )
              kt(false);
            if (((Ht.current = false), (yt.current = 0), lo(), zo != null))
              Pe((un) => [...un, Dt(`Connection dropped \u2014 reconnecting (attempt ${zo}/${en})...`, "warning")]);
          },
          onDisconnected: () => {
            n(`[${cn}] disconnected`);
            let zo = ot.current;
            (ot.current = false), Gt("disconnected"), (Ht.current = false), (yt.current = 0), kt(false), lo(), nn(zo);
          },
          onError: (zo) => {
            n(`[${cn}] error: ${zo.message}`);
          },
        });
      (Ve.current = dn), dn.connect(), Oo(dn);
      let Xo = S.afterConnect?.(dn);
      return () => {
        n(`[${cn}] cleanup`),
          jo.drain(),
          Xo?.(),
          Rt((zo) => (zo.activeGoal === void 0 ? zo : { ...zo, activeGoal: void 0 })),
          Rt((zo) => (zo.remoteAutocompactState === void 0 ? zo : { ...zo, remoteAutocompactState: void 0 })),
          dn.disconnect(),
          pn?.(),
          (Ve.current = null);
      };
    }, [S, Pe, kt, re, Ie, pe, Re, be, He, Fe, Gt, qt, lo, jo, so, jt, to, st]);
  let Qo = B(
      async (cn, tn) => {
        let nn = Ve.current;
        if (!nn)
          return (
            Pe((Oo) => [...Oo, Dt("Not connected to the remote session \u2014 your message wasn't sent.", "warning")]),
            false
          );
        let pn = Ht.current;
        (Ht.current = false), kt(true);
        let Go = await nn.sendMessage(cn, tn);
        if (!Go.ok)
          return (
            (Ht.current = Ht.current || (pn && yt.current > 0)),
            Pe((Oo) => [
              ...Oo,
              Dt(
                `Couldn't send your message \u2014 ${Go.reason}. It wasn't delivered to the remote session.`,
                "warning",
              ),
            ]),
            kt(false),
            false
          );
        return true;
      },
      [kt, Pe],
    ),
    uo = B(() => {
      if (!S?.readOnly) {
        Ve.current?.sendInterrupt(), lt();
        return;
      }
      kt(false);
    }, [S, kt, lt]),
    Pn = B(() => {
      Ve.current?.disconnect(), (Ve.current = null), (ot.current = false);
    }, []),
    Yt = S?.label,
    No = B(
      (cn, tn) => {
        let nn = Ve.current;
        if (!nn) return Promise.reject(Error("Remote session is not connected \u2014 try again in a moment"));
        if (!nn.sendControlRequest)
          return Promise.reject(Error(`sendControlRequest not yet wired for ${Yt ?? "this"} transport`));
        return nn.sendControlRequest(cn, tn);
      },
      [Yt],
    );
  return z(
    () => ({ isRemoteMode: de, sendMessage: Qo, cancelRequest: uo, disconnect: Pn, sendControlRequest: No }),
    [de, Qo, uo, Pn, No],
  );
}

function Xre({ config: S, sink: x, requestDialog: P, toolPermissionContext: j, tools: H }) {
  let Z = z(() => {
    if (!S) return;
    return {
      label: "directConnect",
      createManager: (re) => new n$(S, re),
      onDisconnected: (re) => {
        process.stderr.write(
          re
            ? `
Server disconnected.
`
            : `
Failed to connect to server at ${S.wsUrl}
`,
        ),
          Ln(1);
      },
    };
  }, [S]);
  return DD({ adapter: Z, sink: x, requestDialog: P, toolPermissionContext: j, tools: H });
}

F();

function Zre(S, x, P, j = () => mgn({ bridgeStore: false }), H = kl) {
  if (H.isWatching()) return { subscribe: (de) => H.subscribe(de), dispose: () => Promise.resolve() };
  let Z = j();
  Z.initialize(S, x, { machineServesSession: true }).then(
    () => y("remote_served_settings_watch"),
    () => p("remote_served_settings_watch", "watch_failed_to_start"),
  );
  let re = Z.subscribe(() => hpe()),
    ue = Z.subscribe((de) => P.servedSettingsChanged.emit(de));
  return {
    subscribe: (de) => {
      let pe = [Z.subscribe(de), H.subscribe(de)];
      return () => pe.forEach((Re) => Re());
    },
    dispose: () => (re(), ue(), Z.dispose()),
  };
}

class s$ {
  #e = [];
  noteSend(S) {
    if (S?.clearsConversation) {
      if (S.uuid !== void 0 && this.#e.some((P) => P.uuid === S.uuid)) return;
      if ((this.#e.push({ uuid: S.uuid, sends: new Set() }), this.#e.length > 20)) this.#e.shift();
      return;
    }
    let x = this.#e.at(-1);
    if (!x || !S?.uuid) return;
    if (x.sends.size >= 100) x.sends.clear();
    x.sends.add(S.uuid);
  }
  noteSendFailed(S) {
    let x = S?.uuid;
    if (S?.clearsConversation) {
      let P = x === void 0 ? this.#e.length - 1 : this.#e.findIndex((j) => j.uuid === x);
      if (P !== -1) this.#e.splice(P, 1);
      return;
    }
    if (x === void 0) return;
    for (let P of this.#e) P.sends.delete(x);
  }
  onResetFrame() {
    let S = this.#e.shift();
    if (!S) return { ownClear: false, preserved: new Set() };
    let x = new Set(S.sends);
    for (let P of this.#e) {
      if (P.uuid !== void 0) x.add(P.uuid);
      for (let j of P.sends) x.add(j);
    }
    return { ownClear: true, preserved: x };
  }
  forget() {
    this.#e = [];
  }
}

var hLe = {
  ...{
    [cI.kind]: async (S, x, P) => {
      let j = cI.payload().safeParse(x);
      if (!j.success) return { behavior: "cancelled" };
      let H = await S(cI, j.data, P);
      return H === "cancelled" ? { behavior: "cancelled" } : { behavior: "completed", result: H };
    },
  },
};

class a$ {
  inputs;
  inFlight = new Map();
  constructor(S) {
    this.inputs = S;
  }
  setInputs(S) {
    this.inputs = S;
  }
  dispatch = (S) => {
    if (S.request.subtype !== "request_user_dialog") return;
    let { request: x, request_id: P } = S,
      j = hLe[x.dialog_kind];
    if (!j) {
      this.inputs.sendResponse(P, { behavior: "cancelled" });
      return;
    }
    let H = this.inFlight,
      Z = new AbortController();
    H.set(P, Z),
      j(this.inputs.requestDialog, x.payload, { signal: Z.signal })
        .then((re) => {
          if (!H.delete(P)) return;
          this.inputs.sendResponse(P, re);
        })
        .catch(() => {
          if (!H.delete(P)) return;
          this.inputs.sendResponse(P, { behavior: "cancelled" });
        });
  };
  cancel = (S) => {
    let x = this.inFlight.get(S);
    if (!x) return;
    this.inFlight.delete(S), x.abort();
  };
  drain() {
    for (let [S, x] of this.inFlight) this.inFlight.delete(S), x.abort();
  }
}

var Mv = null,
  CLe = 750,
  eie = 3;

function tie({ config: S, sink: x, requestDialog: P, toolPermissionContext: j, tools: H }) {
  let Z = !!S,
    {
      setMessages: re,
      setIsLoading: ue,
      getIsLoading: de,
      onInit: pe,
      onPermissionModeChange: Re,
      streaming: be,
      setStreamMode: Pe,
      setInProgressToolUseIDs: Oe,
      onTurnComplete: Ie,
      onConversationReset: He,
      retraction: Fe,
    } = x,
    { credentials: Ve, storageV5: Ke } = ge(),
    ot = ct((Eo) => Eo.host),
    st = ct(),
    nt = C(void 0),
    Pt = br(() => H),
    kt = br((Eo) => P(Nj, _et(Eo), { signal: Eo.signal, queueBehind: true })),
    { columns: Ht } = Ee(),
    yt = br(() => Ht),
    lt = B(
      (Eo) => {
        if (Eo && de()) return;
        ue(Eo);
      },
      [de, ue],
    ),
    Rt = C(false),
    to = C(false),
    so = C(false),
    jt = C(0),
    Gt = B(() => {
      be.applyStreamingText(() => null), be.setStreamingToolUses((Eo) => (Eo.length > 0 ? [] : Eo));
    }, [be]),
    vo = xt(),
    qt = At(),
    lo = Xn(),
    To = Tq(),
    { addNotification: ao, removeNotification: jo } = Or(),
    Qo = B((Eo) => qt((Ho) => (Ho.remoteConnectionStatus === Eo ? Ho : { ...Ho, remoteConnectionStatus: Eo })), [qt]),
    uo = C(new Set()),
    Pn = B(() => {
      let Eo = uo.current.size;
      qt((Ho) => (Ho.remoteBackgroundTaskCount === Eo ? Ho : { ...Ho, remoteBackgroundTaskCount: Eo }));
    }, [qt]),
    Yt = C(null),
    No = B(() => {
      if (Yt.current) Yt.current(), (Yt.current = null);
    }, []),
    cn = C(0),
    tn = B(() => {
      cn.current++, No();
    }, [No]),
    nn = C(null),
    pn = C(Date.now()),
    Go = C(false),
    Oo = C(null),
    xo = C(null),
    dn = C(null),
    Xo = B(
      (Eo) => {
        (nn.current = Eo), qt((Ho) => (Ho.remoteBootstrap === Eo ? Ho : { ...Ho, remoteBootstrap: Eo }));
      },
      [qt],
    ),
    zo = B(
      (Eo) => {
        let Ho = nn.current;
        if ((Xo(Eo), (Ho === null || !Ho.terminal) && Eo.terminal)) {
          if ((Oo.current?.workerCameUp(), xo.current?.onWorkerUp(), Eo.hasStructuredSteps)) {
            if (!Eo.dismissed) re((Cn) => [...Cn, Dt(XZe(Eo), "info")]);
            if (!Eo.steps.some((Cn) => Cn.status === "failed")) y("remote_bootstrap");
          }
        }
      },
      [Xo, re],
    ),
    en = C(true),
    un = C([]),
    Uo = C(false),
    Rn = C(() => {}),
    [mr] = u(() => new s$()),
    Pr = B(
      (Eo = true) => {
        let Ho = un.current.length;
        if (((un.current = []), mr.forget(), Ho > 0)) {
          if (Eo) g("remote_bootstrap", "queue_dropped");
          re((Cn) => [
            ...Cn,
            Dt(
              `${Ho} queued ${k(Ho, "message")} not sent \u2014 the session disconnected before the container was ready.`,
              "warning",
            ),
          ]);
        }
        if (nn.current !== null && nn.current.queuedCount !== 0) Xo({ ...nn.current, queuedCount: 0 });
      },
      [re, Xo, mr],
    ),
    Ir = B(() => {
      let Eo = nn.current;
      if (Eo !== null && !Eo.terminal) zo(gKt(Eo, Date.now()));
      if (!en.current) {
        if (((so.current = false), (Rt.current = false), (jt.current = 0), (en.current = true), Eo === null))
          Oo.current?.workerCameUp(), xo.current?.onWorkerUp();
        let Ho = un.current.length === 0;
        if ((Rn.current(), Ho && de() && !S?.initialPromptUuid)) lt(false);
      }
    }, [zo, S, de, lt]),
    An = B(() => {
      if ((tn(), !Rt.current)) jt.current++;
      (Rt.current = true), (so.current = true), lt(false);
      let Eo = nn.current;
      if (Eo !== null && !Eo.terminal && !Eo.dismissed) Xo({ ...Eo, dismissed: true });
    }, [tn, lt, Xo]),
    Wr = C(yLe()),
    Kn = C(false),
    Tn = C(null),
    tr = C(false),
    hi = br((Eo, Ho) => {
      if (Rt.current) return;
      if (Ho === "provisioning" && tr.current) return;
      let Cn = To.get().overrideMessage;
      if (Cn === null || Cn === Tn.current) {
        let Zn = rt(Ho === "held" ? Eo.replace(/(\u2026|\.\.\.)$/, "") : Eo, Math.max(40, yt() - 8));
        To.main.setMessage(Zn), (Tn.current = Zn), (tr.current = Ho === "held");
      }
    }),
    ti = C(void 0),
    pr = C(null),
    Wn = B(() => {
      if (!S || S.viewerOnly || !Gs() || pr.current === null) return;
      let Eo = Oo.current,
        Ho = {
          projectFiles: ILn(
            S.dirSync?.sync.state() ?? {
              state: "absent",
              reason: S.isAttachToExisting ? "not_from_here" : "not_set_up",
            },
            Ktt(S.dirSync?.createFacts?.origin),
          ),
          settings: PLn(DLn(S.homeSeed, vLe(ot.launchOptions.mayForwardHomeSettings()), ti.current)),
          plugins: OLn(
            Eo !== null
              ? { kind: "attached", state: Eo.state() }
              : dn.current !== null
                ? { kind: "absent", reason: dn.current }
                : { kind: "pending" },
          ),
        };
      qt((Cn) =>
        Cn.cloudSessionSync !== void 0 && xLn(Cn.cloudSessionSync, Ho) ? Cn : { ...Cn, cloudSessionSync: Ho },
      );
    }, [S, ot, qt]),
    yi = B(() => {
      (ti.current = void 0), qt((Eo) => (Eo.cloudSessionSync === void 0 ? Eo : { ...Eo, cloudSessionSync: void 0 }));
    }, [qt]),
    Ki = B(() => {
      tr.current = false;
      let Eo = Tn.current;
      if (Eo === null) return;
      if (((Tn.current = null), To.get().overrideMessage === Eo)) To.main.setMessage(null);
    }, [To]),
    Wi = B(() => {
      if (tr.current) Ki();
    }, [Ki]),
    Rs = B(() => {
      if (!tr.current) Ki();
    }, [Ki]),
    us = B(() => {
      Qo("connecting"),
        Ki(),
        Xo(null),
        yi(),
        (Go.current = false),
        uo.current.clear(),
        Pn(),
        Oe({ action: "clear" }),
        (to.current = false),
        qt((Eo) => (Eo.hasRemoteReplyChannel ? { ...Eo, hasRemoteReplyChannel: false } : Eo)),
        qt((Eo) => (Eo.activeGoal === void 0 ? Eo : { ...Eo, activeGoal: void 0 })),
        qt((Eo) => (Eo.remoteAutocompactState === void 0 ? Eo : { ...Eo, remoteAutocompactState: void 0 }));
    }, [Qo, Ki, Xo, yi, Pn, Oe, qt]),
    Xr = C(0),
    as = C(0),
    Li = C(null),
    Bs = C(false),
    Pl = C(false),
    [Hr] = u(() => new vEe(50)),
    $i = C(0),
    Zi = C(new Set()),
    [Ca] = mn(),
    va = {
      sendResponse: (Eo, Ho) => {
        let Cn = pr.current;
        if (!Cn) return;
        if ((Cn.respondToPermissionRequest(Eo, Ho), Ho.behavior === "allow")) lt(true);
        else if (Ho.interrupt) An();
      },
      requestDialog: P,
      toolRegistry: H,
      toolPermissionContext: j,
      theme: Ca,
      canInterruptTurn: !S?.viewerOnly,
      heldServedCall: (Eo) => {
        let Ho = nt.current?.(Eo);
        if (Ho?.held) return Ho;
        let Cn = S?.heldServedCall?.(Eo);
        if (Cn?.held) return Cn;
        return [Ho, Cn].find((Zn) => Zn?.reason === "other_input") ?? Cn ?? Ho ?? Z4;
      },
    },
    [qo] = u(() => new Ax(va)),
    jn = {
      sendResponse: (Eo, Ho) => {
        pr.current?.respondToUserDialogRequest(Eo, Ho);
      },
      requestDialog: P,
    },
    [So] = u(() => new a$(jn));
  A(() => {
    qo.setInputs(va), So.setInputs(jn);
  }),
    A(() => {
      let Eo = [
        { feed: S?.dirSync?.status, key: "dir-sync" },
        { feed: S?.homeSeed?.status, key: "home-settings" },
      ].flatMap(({ feed: Zn, key: Er }) => (Zn === void 0 ? [] : [{ feed: Zn, key: Er }]));
      if (Eo.length === 0) return;
      let Ho =
          (Zn) =>
          ({ line: Er, level: Ai }) => {
            switch ((Wn(), Ai)) {
              case "progress":
                n(`[useRemoteSession] ${Zn}: ${Er}`), hi(Er, "held");
                return;
              case "debug":
                n(`[useRemoteSession] ${Zn}: ${Er}`), re((ii) => [...ii, Dt(Er, "info")]);
                return;
              case "info":
                re((ii) => [...ii, Dt(Er, "notice")]);
                return;
              case "warning":
                re((ii) => [...ii, Dt(Er, "warning")]),
                  ao({ key: `${Zn}:${Er}`, kind: "warning", text: Er, color: "warning", priority: "high" });
                return;
              default:
            }
          },
        Cn = Eo.map(({ feed: Zn, key: Er }) => {
          let Ai = Ho(Er),
            ii = Zn.subscribe(Ai);
          for (let As of Zn.takeBacklog()) Ai(As);
          return ii;
        });
      return () => Cn.forEach((Zn) => Zn());
    }, [S?.dirSync, S?.homeSeed, re, ao, Wn]),
    A(() => {
      let Eo = S?.deviceNotBoundNotice;
      if (!Eo) return;
      let Ho = true;
      return (
        Eo.then((Cn) => {
          if (!Ho || Cn === void 0) return;
          ao(m3n(Cn));
        }),
        () => {
          Ho = false;
        }
      );
    }, [S?.deviceNotBoundNotice, ao]),
    A(() => {
      if (!S) {
        if (Bs.current)
          (Bs.current = false),
            lt(false),
            (Pl.current = false),
            (Kn.current = false),
            (Rt.current = false),
            (so.current = false),
            (jt.current = 0),
            ($i.current = 0),
            (en.current = true),
            Pr(),
            us(),
            Fe.inProgressToolUses.clear(),
            Gt(),
            be.resetMetrics();
        return;
      }
      if (
        ((Bs.current = true),
        (en.current = Boolean(S.isAttachToExisting || S.viewerOnly)),
        Pr(),
        Xo(null),
        (Go.current = false),
        ($i.current = 0),
        (pn.current = Date.now()),
        S.initialPromptUuid)
      )
        Hr.add(S.initialPromptUuid);
      n(`[useRemoteSession] Initializing for session ${S.sessionId}`);
      let Eo = false,
        Ho = false,
        Cn = new Set(),
        Zn = false,
        Er = new Set(Mv !== null ? (S.seedReplyChannelToolUseIds ?? []) : []);
      to.current = Mv !== null && lo.getState().hasRemoteReplyChannel;
      let Ai = to.current;
      function ii() {
        let Vo = Ai;
        if (((Ai = false), to.current)) {
          if (Vo) s("tengu_remote_reply_channel_init", {});
          return;
        }
        (to.current = true),
          s("tengu_remote_reply_channel_init", {}),
          qt((ur) => (ur.hasRemoteReplyChannel ? ur : { ...ur, hasRemoteReplyChannel: true }));
      }
      if (S.seedActiveGoal !== void 0) {
        let Vo = S.seedActiveGoal ?? void 0;
        if ((qt((ur) => (ur.activeGoal === Vo ? ur : { ...ur, activeGoal: Vo })), Vo !== void 0))
          s("tengu_remote_active_goal_adopted", { via: w("seed"), active: true });
      }
      if (S.seedAutocompactState !== void 0) {
        let Vo = S.seedAutocompactState;
        qt((ur) => ({ ...ur, remoteAutocompactState: Vo })),
          s("tengu_remote_autocompact_state_adopted", {
            via: w("seed"),
            enabled: Vo.enabled,
            enforced: Vo.enforced,
            source: c(Vo.source),
          });
      }
      let As = new Fb(),
        Ss = null,
        Ii = false,
        Ha = ({ line: Vo, level: ur }) => {
          if (ur === "debug") n(`[useRemoteSession] hooks: ${Vo}`);
          re((Vr) => [...Vr, Dt(Vo, ur === "warning" ? "warning" : ur === "debug" ? "info" : "notice")]);
        },
        Ac = (() => {
          if (S.viewerOnly || !Gs()) return null;
          try {
            return Zre(Kve(st, Ke, Ve), Ke, a1.of(ot));
          } catch (Vo) {
            return h(Vo), null;
          }
        })(),
        Ja = (() => {
          if (S.servedTools === void 0 || S.viewerOnly || !Gs()) return null;
          try {
            let Vo = het({ sessionId: S.sessionId, manager: () => Ss, ...S.servedTools });
            nt.current = Vo.heldServedCall;
            let ur = vt(() => Vo.close());
            return {
              ...Vo,
              close: () => {
                ur();
                let Vr = Vo.close(),
                  Ji = vt(() => Vr);
                return Vr.finally(Ji), Vr;
              },
            };
          } catch (Vo) {
            return h(Vo), null;
          }
        })(),
        ns = (() => {
          if (Ac === null || S.viewerOnly || !ctt()) return null;
          try {
            return met({
              launchDir: Se(),
              cloudSessionId: S.sessionId,
              memory: a1.of(ot),
              getTools: () => Pt(),
              storageV5: Ke,
              manager: () => Ss,
              syncRoot: () => {
                let Vo = S.dirSync;
                if (!Vo) return null;
                let { state: ur } = Vo.sync.state();
                return ur === "armed" || ur === "seeding" ? Vo.gitRoot : null;
              },
              onLine: Ha,
              registerCleanup: vt,
              subscribeSettingsChanges: (Vo) => Ac.subscribe(Vo),
            });
          } catch (Vo) {
            return h(Vo), null;
          }
        })(),
        la = {
          ...S,
          keepUndeliveredResponses: S.keepUndeliveredResponses ?? Gs(),
          nameToolOnPermissionAllow: S.nameToolOnPermissionAllow ?? Gs(),
        };
      xo.current = ns;
      let Ic = new Set(),
        bs = new X$e(la, {
          onMessage: (Vo) => {
            if (!QJ(Vo)) return;
            let ur = [`type=${Vo.type}`];
            if ("subtype" in Vo) ur.push(`subtype=${Vo.subtype}`);
            if (Vo.type === "user") {
              let Mr = Vo.message?.content;
              ur.push(`content=${Array.isArray(Mr) ? Mr.map((Kr) => Kr.type).join(",") : typeof Mr}`);
            }
            n(`[useRemoteSession] Received ${ur.join(" ")}`), ai();
            let Vr = Rt.current || so.current || jt.current > 0;
            {
              let Mr = kie(Vo);
              if (Mr) oet({ index: Fe, signal: Mr, surface: "ccr", setMessages: re, setInProgressToolUseIDs: Oe });
            }
            if ((No(), Vo.type === "env_manager_log")) {
              let Mr = Date.now(),
                Kr = nn.current !== null && nn.current.hasStructuredSteps && !nn.current.terminal;
              if (en.current && !Kr && P$e(Vo, Mr)) return;
              let Ri = JJ(Vo);
              if (!Rt.current && Ri.type === "env_log" && Ri.message !== "") {
                if (!en.current) lt(true);
                hi(Ri.message, "provisioning");
              }
              {
                let ws = nn.current ?? pK(Mr),
                  Sl = VZe(ws, Vo, Ri.type === "env_log" ? Ri.message : "", Mr, pn.current);
                if (Sl !== nn.current) {
                  if (ws.terminal && !Sl.terminal && Sl.dismissed && !Go.current)
                    (Go.current = true), s("tengu_remote_bootstrap_cycle_hidden", {});
                  if (
                    (zo(Sl),
                    Sl.steps.some((ia) => ia.status === "failed") && !ws.steps.some((ia) => ia.status === "failed"))
                  ) {
                    if (
                      (p("remote_bootstrap", "step_failed"),
                      (Go.current = false),
                      Pr(false),
                      (en.current = true),
                      (so.current = false),
                      (Rt.current = false),
                      (jt.current = 0),
                      lt(false),
                      Sl.dismissed)
                    )
                      re((ia) => [
                        ...ia,
                        Dt("Cloud container provisioning failed \u2014 reconnect or check the session logs", "warning"),
                      ]);
                  }
                  if (Sl.terminal) (Go.current = false), Rs(), Ir();
                }
              }
              return;
            }
            if ((Rs(), Vo.type !== "user")) Ir();
            if (
              !Rt.current &&
              (Vo.type === "assistant" ||
                Vo.type === "stream_event" ||
                (Vo.type === "system" && Vo.subtype === "status" && Vo.status === "requesting"))
            )
              lt(true), ns?.onTurnInFlight();
            if (Vo.type === "tool_progress") ns?.onTurnInFlight();
            if (Vo.type === "user" && Vo.uuid && Hr.has(Vo.uuid)) {
              let Mr = Vo.uuid;
              if (Mr === S.initialPromptUuid) {
                let Ri = JJ(Vo, { convertUserTextMessages: true });
                re((ws) => (Ri.type !== "message" || ws.some((Sl) => Sl.uuid === Mr) ? ws : [...ws, Ri.message]));
                return;
              }
              let Kr = Zi.current.delete(Mr);
              re((Ri) => {
                let ws = Ri.findLastIndex((ia) => ia.uuid === Mr);
                if (ws === -1) {
                  if (!Kr) return Ri;
                  let ia = JJ(Vo, { convertUserTextMessages: true });
                  return ia.type === "message" ? [...Ri, ia.message] : Ri;
                }
                if (ws === Ri.length - 1) return Ri;
                let Sl = Ri[ws];
                return Ri.slice(0, ws).concat(Ri.slice(ws + 1), Sl);
              }),
                n(`[useRemoteSession] Reconciled echoed user message ${Mr} to canonical position`);
              return;
            }
            if (Vo.type === "system" && Vo.subtype === "init") {
              let Mr = net(Vo);
              if (
                (n(`[useRemoteSession] Init received with ${Mr.slashCommands?.length ?? "no"} slash commands`),
                Mv !== null)
              ) {
                if (Mv.hasReplyChannelInit({ mcp_servers: Mr.mcpServers, tools: Mr.tools })) ii();
                else if (!to.current || Ai)
                  (to.current = false),
                    (Ai = false),
                    qt((Kr) => (Kr.hasRemoteReplyChannel ? { ...Kr, hasRemoteReplyChannel: false } : Kr));
              }
              if (Mr.cwd)
                if (Bn(Mr.cwd) || vu(Mr.cwd) || vu(kLe.normalize(Mr.cwd)) || _r(Mr.cwd) || _r(bLe(Mr.cwd)))
                  n("[useRemoteSession] init reported a UNC cwd \u2014 not adopting", { level: "warn" });
                else rie(Mr.cwd);
              pe({ slash_commands: Mr.slashCommands, model: Mr.model }),
                ns?.onWorkerInit(),
                Ja?.requestAnnounce("worker_init", { workerEpoch: Mr.workerEpoch });
            }
            if (Vo.type === "result") ns?.onTurnEnded();
            if (Vo.type === "system" && "permissionMode" in Vo && Vo.permissionMode) {
              if (((ru = Lf(Vo.permissionMode) ?? ru), ru !== void 0)) Mu.add(ru);
              Fr(Vo.permissionMode), Re(Vo.permissionMode);
            }
            if (
              ((Vo.type === "system" && Vo.subtype === "init") || Vo.type === "result") &&
              Vo.fast_mode_state !== void 0
            ) {
              let Mr = Vo.fast_mode_state;
              if (Mr !== "on" && Mr !== "cooldown" && Mr !== "off")
                n("[useRemoteSession] Ignoring fast_mode_state that is not on/cooldown/off", { level: "error" });
              else {
                let Kr = Mr !== "off",
                  Ri = false;
                if (
                  (qt((ws) => {
                    if (!!ws.fastMode === Kr) return ws;
                    return (Ri = true), { ...ws, fastMode: Kr };
                  }),
                  Ri)
                )
                  s("tengu_fast_mode_toggled", { enabled: Kr, source: w("remote_wire_adopt"), remote: true });
              }
            }
            if (Vo.type === "active_goal") {
              let Mr = Jve(Vo.value);
              qt((Kr) => (Kr.activeGoal === Mr ? Kr : { ...Kr, activeGoal: Mr })),
                s("tengu_remote_active_goal_adopted", { via: w("stream"), active: Mr !== void 0 });
              return;
            }
            if (Vo.type === "autocompact_state") {
              Qvt(qt, Vo.value, w("stream"));
              return;
            }
            if (Vo.type === "system") {
              if (Vo.subtype === "plugin_install") Oo.current?.pluginInstallFrame();
              if (Vo.subtype === "task_started") {
                uo.current.add(Vo.task_id), Pn();
                return;
              }
              if (Vo.subtype === "task_notification") {
                uo.current.delete(Vo.task_id), Pn();
                return;
              }
              if (Vo.subtype === "task_progress" || Vo.subtype === "task_updated") return;
              if (Vo.subtype === "notification") {
                if (B1t(Vo)) {
                  let Mr = o4e(Vo, "remote"),
                    Kr = j1t(lo.getState().notifications, Mr.key);
                  if (Kr !== null) jo(Kr);
                  ao(Mr), s("tengu_remote_notification_routed", { via: w("stream"), priority: c(Vo.priority) });
                } else n("[useRemoteSession] Dropping malformed notification frame");
                return;
              }
              if (Vo.subtype === "status") {
                let Mr = Kn.current;
                if (((Kn.current = Vo.status === "compacting"), Mr && Kn.current)) return;
              }
              if (Vo.subtype === "compact_boundary") Kn.current = false;
            }
            if (Zvt(Vo))
              if (((Kn.current = false), (Rt.current = false), (so.current = false), lt(false), Gt(), be.resetMetrics(), Vr)) {
                if (jt.current > 0) jt.current--;
              } else Ie?.();
            if (Vo.type === "user") {
              let Mr = Vo.message?.content;
              if (Array.isArray(Mr)) {
                let Kr = [];
                for (let Ri of Mr) if (Ri.type === "tool_result") Kr.push(Ri.tool_use_id);
                if (Kr.length > 0)
                  Oe({ action: "remove", ids: Kr }),
                    ret(Fe, Kr),
                    rRt(Fe, Kr, "ccr", typeof Vo.uuid === "string" ? Vo.uuid : null);
              }
            }
            if (Mv !== null && Vo.type === "assistant" && !Vo.parent_tool_use_id)
              for (let Mr of Vo.message.content) {
                let Kr = Mv.replyChannelBlockKind(Mr);
                if (Kr === void 0) continue;
                if (Mr.type === "tool_use") {
                  if (Er.has(Mr.id)) {
                    ii();
                    continue;
                  }
                  Er.add(Mr.id);
                }
                ii(), s("tengu_remote_reply_channel_frame", { kind: c(Kr) });
              }
            let Ji = null;
            if (Ji !== null) {
              if (typeof Vo.uuid === "string" && $$e(Fe, Vo.uuid, "ccr")) return;
              if (Ji.length > 0) {
                if (typeof Vo.uuid === "string")
                  tRt(
                    Fe,
                    Vo.uuid,
                    Ji.map((Kr) => Kr.uuid),
                  );
                let Mr = Ji[0].parentToolUseID;
                if (!Cn.has(Mr)) Cn.add(Mr), s("tengu_remote_subagent_frame_nested", { frame_type: c(Vo.type) });
                re((Kr) => {
                  let Ri = Ji.filter((ws) => !Kr.some((Sl) => Sl.uuid === ws.uuid));
                  return Ri.length === 0 ? Kr : [...Kr, ...Ri];
                });
              }
              return;
            }
            let rs = JJ(Vo, { convertUserTextMessages: true });
            if (rs.type === "conversation_reset") {
              let { ownClear: Mr, preserved: Kr } = mr.onResetFrame();
              re((Ri) => {
                if (Zi.current.size > 100) Zi.current.clear();
                for (let ws of Ri)
                  if (ws.type === "user" && Hr.has(ws.uuid) && !Kr.has(ws.uuid)) Zi.current.add(ws.uuid);
                return Ri.filter((ws) => (ws.type === "user" && Kr.has(ws.uuid)) || (Mr && ws.type === "system"));
              }),
                be.setStreamingToolUses((Ri) => (Ri.length > 0 ? [] : Ri)),
                be.applyStreamingText(() => null),
                Oe({ action: "clear" }),
                Fe.inProgressToolUses.clear(),
                lt(false),
                He?.(rs.newConversationId);
              return;
            }
            if (rs.type === "message") {
              if ((be.setStreamingToolUses((Kr) => (Kr.length > 0 ? [] : Kr)), rs.message.type === "assistant"))
                be.applyStreamingText(() => null);
              if ($$e(Fe, rs.message.uuid, "ccr")) return;
              if (rs.message.type === "assistant") {
                let Kr = rs.message.message.content.filter((Ri) => Ri.type === "tool_use").map((Ri) => Ri.id);
                if (Kr.length > 0) Oe({ action: "add", ids: Kr }), nRt(Fe, rs.message.uuid, Kr);
              }
              if (!Zn && Vo.type === "user") {
                let Kr = Vo.message?.content;
                if (Array.isArray(Kr) && Kr.some((Ri) => Ri.type === "tool_result"))
                  (Zn = true),
                    s("tengu_remote_tool_result_rendered", { viewer_only: c(S.viewerOnly ? "true" : "false") });
              }
              let Mr = rs.message.uuid;
              re((Kr) => (Mr && Kr.some((Ri) => Ri.uuid === Mr) ? Kr : [...Kr, rs.message]));
            } else if (rs.type === "stream_event") {
              if (so.current) return;
              fbe(rs.event, {
                onMessage: (Mr) => re((Kr) => [...Kr, Mr]),
                onUpdateLength: be.addResponseLength,
                onSetStreamMode: Pe,
                onStreamingToolUses: be.setStreamingToolUses,
                replInputAccumulator: As,
                onApiMetrics: be.recordApiMetricsEvent,
                onStreamingText: (Mr) => {
                  if (!to.current) be.applyStreamingText(Mr);
                },
              });
            }
          },
          onPermissionRequest: (Vo, ur) => {
            if ((n(`[useRemoteSession] Permission request for tool: ${Vo.tool_name}`), S.viewerOnly)) {
              lt(false);
              return;
            }
            if (qo.dispatch({ type: "control_request", request_id: ur, request: Vo })) lt(false);
          },
          onPermissionCancelled: (Vo, ur) => {
            if ((n(`[useRemoteSession] Permission request cancelled: ${Vo}`), qo.cancel(Vo), !Rt.current)) lt(true);
          },
          onUserDialogRequest: (Vo, ur) => {
            if ((n(`[useRemoteSession] User dialog request: ${Vo.dialog_kind}`), lt(false), S.viewerOnly)) return;
            So.dispatch({ type: "control_request", request_id: ur, request: Vo });
          },
          onUserDialogCancelled: (Vo) => {
            n(`[useRemoteSession] User dialog request cancelled: ${Vo}`), So.cancel(Vo);
          },
          ...(ns !== null && ns.callbacks),
          ...(Ja !== null && Ja.callbacks),
          onWorkerLive: () => {
            Ja?.requestAnnounce(Ii ? "reconnected" : "attached"), Ja?.callbacks.onWorkerLive?.(), (Ii = true);
          },
          onConnected: () => {
            n("[useRemoteSession] Connected"), Qo("connected"), ns?.onStreamConnected(), Ms();
          },
          onReconnecting: () => {
            n("[useRemoteSession] Reconnecting"),
              Qo("reconnecting"),
              (Rt.current = false),
              (so.current = false),
              (jt.current = 0),
              uo.current.clear(),
              Pn(),
              Oe({ action: "clear" }),
              Fe.inProgressToolUses.clear();
          },
          onWithheldPromptSent: () => {
            Wi(), Oo.current?.messageSent();
          },
          onWithheldPromptFailed: (Vo, ur) => {
            if (
              (Wi(),
              re((Vr) => [
                ...Vr,
                Dt(
                  ur
                    ? `Couldn't confirm your first message (the one given on the command line) reached the cloud session \u2014 ${Vo.replace(/\.+$/, "")}. If Claude does not respond to it shortly, please send it again.`
                    : `Couldn't send your first message (the one given on the command line) \u2014 ${Vo.replace(/\.+$/, "")}. It wasn't delivered to the cloud session; please send it again.`,
                  "warning",
                ),
              ]),
              $i.current === 0)
            )
              lt(false);
          },
          onResponseUndelivered: (Vo, ur, Vr) => {
            if (Ic.has(ur)) return;
            if (Ic.size === 0) queueMicrotask(() => Ic.clear());
            Ic.add(ur), re((Ji) => [...Ji, Dt(Cet(ur, Vr), "warning")]);
          },
          onCatchUpTruncated: () => {
            if (
              (n("[useRemoteSession] Catch-up truncated \u2014 transcript gap"),
              mr.forget(),
              re((Vo) => [
                ...Vo,
                Dt("Some earlier messages from this session could not be loaded after reconnecting.", "warning"),
              ]),
              qt((Vo) => (Vo.remoteAutocompactState === void 0 ? Vo : { ...Vo, remoteAutocompactState: void 0 })),
              Eo)
            )
              Ho = true;
            else {
              Eo = true;
              let Vo = S.sessionId;
              (async () => {
                try {
                  do {
                    Ho = false;
                    try {
                      if ((await ur()) === "stale") return;
                    } catch {}
                  } while (Ho);
                } finally {
                  Eo = false;
                }
              })();
              async function ur() {
                let Vr = await xme(Vo, Ve);
                if (pr.current !== bs) return "stale";
                let Ji = await vet(Vr, void 0, { reportFeatureHealth: false }),
                  rs = 0,
                  Mr = 0;
                while (Ji && Mr < eie) {
                  if (pr.current !== bs) return "stale";
                  Mr++,
                    (rs += $Pn({
                      index: Fe,
                      events: Ji.events,
                      surface: "truncation_harvest",
                      setMessages: re,
                      setInProgressToolUseIDs: Oe,
                    })),
                    (Ji = Mr < eie && Ji.hasMore && Ji.firstId ? await Ret(Vr, Ji.firstId) : null);
                }
                if (pr.current !== bs) return "stale";
                return s("tengu_refusal_retraction_truncation_harvest", { signal_count: rs, page_count: Mr }), "done";
              }
            }
          },
          onDisconnected: (Vo) => {
            if (
              (n("[useRemoteSession] Disconnected"),
              Vo === "session_stale_relogin" || (Vo === "untrusted_device" && Gs() && C3()))
            )
              re((ur) => [...ur, Dt(r8({ terminal: true, reason: Vo }), "warning")]);
            tn(),
              Qo("disconnected"),
              (Rt.current = false),
              (so.current = false),
              (jt.current = 0),
              lt(false),
              Ki(),
              uo.current.clear(),
              Pn(),
              Oe({ action: "clear" }),
              Fe.inProgressToolUses.clear(),
              Gt(),
              be.resetMetrics();
          },
          onError: (Vo) => {
            n(`[useRemoteSession] Error: ${Vo.message}`);
          },
        }),
        wa = Boolean(S.isAttachToExisting) && !S.viewerOnly,
        Jl = !S.isAttachToExisting && !S.viewerOnly && Gs() ? S.createPermissionMode : void 0,
        Au = S.sessionId,
        ca = lo.getState().toolPermissionContext.mode,
        Al = Xr.current,
        ap = as.current;
      function nu(Vo) {
        Li.current = Vo;
        let ur = () => {
          if (Li.current === Vo) Li.current = null;
        };
        Vo.then(ur, ur);
      }
      function yc() {
        if (Jl !== void 0) {
          if (Jl.pushed) {
            n("[useRemoteSession] Create permission mode already pushed for this session");
            return;
          }
          Jl.pushed = true;
          let { mode: ur } = Jl,
            Vr = yet({
              manager: bs,
              mode: ur,
              surface: "terminal",
              sessionId: Au,
              superseded: () => pr.current !== bs || as.current !== ap,
              observedMode: () => ru,
              seededModeReported: () => Mu.has(ur),
              onRefused: (Ji) => {
                if ((nu(Ji), lo.getState().toolPermissionContext.mode === ur)) Re("default");
                ao(Tv(ur));
              },
              onGaveUp: (Ji) =>
                ao({
                  key: "remote-create-mode-unrecorded",
                  kind: "feedback",
                  text: Ji,
                  color: "warning",
                  priority: "immediate",
                }),
            });
          nu(Vr);
          return;
        }
        if (!wa || ca !== "plan") return;
        let Vo = ca;
        bs.sendControlRequest({ subtype: "set_permission_mode", mode: Vo }).then(
          () => {
            n(`[useRemoteSession] Applied launch permission mode: ${Vo}`), y("mode_switch");
          },
          (ur) => {
            let Vr = O0(ur);
            if (
              (n(`[useRemoteSession] Launch set_permission_mode rejected (${Vr}): ${l(ur)}`),
              p("mode_switch", Vr),
              pr.current !== bs ||
                Vr === "disconnected" ||
                Vr === "not_connected" ||
                Vr === "aborted" ||
                Xr.current !== Al)
            )
              return;
            if (lo.getState().toolPermissionContext.mode === Vo) Re("default");
            ao(Tv(Vo));
          },
        );
      }
      let Qu = wa && ca !== "default" && ca !== "plan" && yN(ca) && !(ca === "auto" && Gs() && a6()),
        Fa = null,
        Mu = new Set(),
        ru,
        Xl = null;
      function Fr(Vo) {
        if (!Qu) return;
        if (!wO.includes(Vo)) return;
        (Fa = Vo), ai();
      }
      function ai() {
        if (!Qu || Fa === null) return;
        Xl?.(), (Xl = vo.setTimeout(Dr, CLe));
      }
      function Dr() {
        if (((Xl = null), !Qu || pr.current !== bs)) return;
        if (((Qu = false), Fa === null || Fa === ca || Xr.current !== Al)) return;
        ao({
          key: "remote-launch-mode-not-applied",
          kind: "warning",
          text: `This cloud session is in ${Fa} mode; your ${ca} setting wasn't applied.`,
          color: "warning",
          priority: "high",
        });
      }
      let ki = S.seedPermissionMode,
        Zr = ki === void 0;
      function Ms() {
        if (Zr || pr.current !== bs) return;
        if (((Zr = true), ki === void 0 || !Gs())) return;
        try {
          let Vo = lo.getState().toolPermissionContext.mode;
          Re(ki),
            s("tengu_remote_permission_mode_adopted", {
              via: w("seed"),
              mode: c(ki),
              applied: Vo !== ki && lo.getState().toolPermissionContext.mode === ki,
            });
        } catch (Vo) {
          n(`[useRemoteSession] Seeded permission mode not adopted: ${l(Vo)}`, { level: "warn" });
        }
      }
      if (((pr.current = bs), (Ss = bs), ns !== null))
        bs.addSendGate((Vo) => Promise.race([ns.beforeSend(), Vo.released, Vo.withdrawn, Vo.decided]), {
          onRelease: "send",
        });
      bs.connect(), yc(), S.dirSync?.sync.activate();
      let Is = null;
      dn.current = S.viewerOnly
        ? null
        : a.CLAUDE_CODE_DISABLE_PLUGIN_FORWARDING
          ? "switched_off"
          : b8e()
            ? null
            : "not_enabled";
      try {
        Is =
          !S.viewerOnly && dn.current === null
            ? Vtt({
                sessionId: S.sessionId,
                reattach: Boolean(S.isAttachToExisting),
                manager: bs,
                memory: cnt.of(ot),
                storageV5: Ke,
                reach: { launchDir: Se(), ...(S.dirSync !== void 0 && { syncRoot: S.dirSync.gitRoot }) },
                say: ({ line: Vo, level: ur }) => {
                  if (ur === "debug") n(`[useRemoteSession] plugins: ${Vo}`);
                  re((Vr) => [...Vr, Dt(Vo, ur === "debug" ? "info" : ur)]);
                },
                onChange: () => Wn(),
              })
            : null;
      } catch (Vo) {
        h(Vo), (dn.current = "attach_failed");
      }
      if (
        ((Oo.current = Is),
        Wn(),
        S.homeSeed?.completion.then(() => {
          if (pr.current === bs) Wn();
        }),
        S.homeSeed?.readBack.then((Vo) => {
          if (pr.current === bs) (ti.current = Vo), Wn();
        }),
        S.isAttachToExisting)
      )
        Is?.workerKnownUp();
      else if (S.initialPromptUuid !== void 0 && S.withheldInitialPrompt === void 0) Is?.messageSent();
      let Ra = S.dirSync?.sync.seedGate?.bind(S.dirSync.sync);
      if (Ra !== void 0) bs.addSendGate((Vo) => Ra(Vo), { onRelease: "withhold" });
      let Xa = S.dirSync?.sync.onOffline?.((Vo) =>
          kt(Vo).then(
            (ur) => {
              let Vr = ur === "continue";
              if (
                (s("tengu_dir_sync_offline_told", {
                  via: c(Vr ? "dialog" : "dialog_unanswered"),
                  attempts: Vo.attempts,
                  surface: w("terminal"),
                }),
                Vr)
              )
                y("remote_sync_offline_dialog");
              else g("remote_sync_offline_dialog", "dialog_unanswered");
              return { acknowledged: Vr };
            },
            (ur) => {
              throw (
                (s("tengu_dir_sync_offline_told", { via: w("failed"), attempts: Vo.attempts, surface: w("terminal") }),
                g("remote_sync_offline_dialog", "failed"),
                ur)
              );
            },
          ),
        ),
        $a = (Vo) => (Vo === 1 ? "Your last message" : `Your last ${Vo} messages`),
        vs = (Vo) => {
          try {
            SLe(2, Vo);
          } catch {}
        },
        er = ({ unsent: Vo, refused: ur, unconfirmed: Vr }) => {
          if (Vo > 0)
            vs(`${$a(Vo)} ${Vo === 1 ? "was" : "were"} not sent: the cloud session had not yet received this machine's files or settings when you quit.
`);
          let Ji = new Map();
          for (let rs of ur) Ji.set(rs, (Ji.get(rs) ?? 0) + 1);
          for (let [rs, Mr] of Ji)
            vs(`${$a(Mr)} ${Mr === 1 ? "was" : "were"} not sent \u2014 ${rs}.
`);
          if (Vr > 0)
            vs(`${$a(Vr)} may not have reached the cloud session: ${Vr === 1 ? "it was" : "they were"} still being sent when you quit.
`);
        },
        Nr = { unsent: 0, refused: [], unconfirmed: 0 },
        ui = null,
        Ps = () =>
          (ui ?? Promise.resolve())
            .then(() => bs.releaseHeldSends(ui === null ? void 0 : 100, { exiting: true, final: true }))
            .then((Vo) =>
              er({
                unsent: Nr.unsent + Vo.unsent,
                refused: [...Nr.refused, ...Vo.refused],
                unconfirmed: Nr.unconfirmed + Vo.unconfirmed,
              }),
            ),
        Wa = vt(Ps),
        Zs = () => {
          Wa();
          let Vo = bs.releaseHeldSends(void 0, { exiting: true, final: ks() });
          ui = Vo.catch(() => {});
          let ur = vt(Ps);
          Vo.then((Vr) => {
            if (((Nr = Vr), Vr.unsent === 0 && Vr.refused.length === 0 && Vr.unconfirmed === 0 && Vr.stillHeld === 0))
              ur();
          }, ur);
        },
        Cs = Wr.current,
        Sc = Tet({
          report: () => WMe(S.sessionId, Cs),
          scheduleTimeout: vo.setTimeout,
          isStillConnected: () => pr.current === bs,
        });
      return (
        S.preflightCheck?.catch((Vo) => {
          if (pr.current !== bs) return;
          re((ur) => [...ur, Dt(l(Vo), "warning")]),
            Is?.teardown(),
            (Oo.current = null),
            ns?.dispose(),
            (xo.current = null),
            (nt.current = void 0),
            Ja?.close(),
            Ac?.dispose(),
            bs.disconnect(),
            (pr.current = null),
            yi(),
            tn(),
            Qo("disconnected"),
            lt(false),
            (Rt.current = false),
            (so.current = false),
            (jt.current = 0),
            Ki(),
            uo.current.clear(),
            Pn(),
            Oe({ action: "clear" }),
            Fe.inProgressToolUses.clear(),
            Gt(),
            be.resetMetrics();
        }),
        () => {
          n("[useRemoteSession] Cleanup - disconnecting"),
            qo.drain(),
            So.drain(),
            tn(),
            (Qu = false),
            Xl?.(),
            (Xl = null),
            Sc(),
            WMe(S.sessionId, Cs, true),
            X8e(S.sessionId),
            us(),
            Is?.teardown(),
            (Oo.current = null),
            Zs(),
            Xa?.(),
            ns?.dispose(),
            (xo.current = null),
            (nt.current = void 0),
            Ja?.close(),
            Ac?.dispose(),
            bs.disconnect(),
            (pr.current = null),
            yi();
        }
      );
    }, [
      S,
      re,
      lt,
      pe,
      Re,
      Ie,
      He,
      be,
      Pe,
      Oe,
      Qo,
      Pn,
      vo,
      Ve,
      st,
      ot,
      Ke,
      qo,
      So,
      No,
      tn,
      Gt,
      Ki,
      Wi,
      Rs,
      To,
      qt,
      lo,
      ao,
      jo,
      Wn,
      yi,
      Fe,
    ]);
  let Mo = B(
      (Eo) => {
        if (Pl.current || !S || S.initialPromptUuid || S.hasExplicitTitle || S.viewerOnly || S.isAttachToExisting)
          return;
        Pl.current = true;
        let Ho = S.sessionId,
          Cn = typeof Eo === "string" ? Eo : zr(Eo, " ");
        if (Cn)
          Cq(Cn, new AbortController().signal, Ve).then((Zn) => {
            K8e(Ho, Zn ?? rt(Cn, 75));
          });
      },
      [S, Ve],
    ),
    Qt = B(
      async (Eo, Ho) => {
        let Cn = pr.current;
        if (!Cn) return n("[useRemoteSession] Cannot send - no manager"), false;
        No();
        let Zn = cn.current,
          Er = Rt.current;
        if (((Rt.current = false), lt(true), Ho?.uuid)) Hr.add(Ho.uuid);
        mr.noteSend(Ho), Oo.current?.messageSent();
        let Ai = await Cn.sendMessage(Eo, Ho);
        if ((Wi(), !Ai.ok))
          return (
            (Rt.current = Rt.current || (Er && so.current)),
            mr.noteSendFailed(Ho),
            re((ii) => [...ii, Dt(wLe(Ai.reason), "warning")]),
            lt(false),
            false
          );
        if ((Mo(Eo), !S?.viewerOnly && cn.current === Zn)) {
          let ii = wet(Kn.current);
          Yt.current = vo.setTimeout(() => {
            n("[useRemoteSession] Response timeout - attempting reconnect");
            let As = Dt(bet, "warning");
            re((Ss) => [...Ss, As]), Cn.reconnect();
          }, ii);
        }
        return true;
      },
      [S, lt, re, vo, No, Wi, Mo, mr],
    ),
    Jo = B(async () => {
      if (Uo.current) return;
      Uo.current = true;
      try {
        while (un.current.length > 0) {
          let Eo = un.current.shift();
          if (Eo === void 0) break;
          let Ho = nn.current;
          if (Ho !== null && Ho.queuedCount !== un.current.length) Xo({ ...Ho, queuedCount: un.current.length });
          await Qt(Eo.content, Eo.opts);
        }
      } finally {
        Uo.current = false;
      }
    }, [Qt, Xo]);
  A(() => {
    Rn.current = () => {
      Jo().catch((Eo) => h(Eo));
    };
  }, [Jo]);
  let lr = B(
      async (Eo, Ho) => {
        if (!pr.current) return n("[useRemoteSession] Cannot send - no manager"), false;
        if ((($i.current += 1), !S?.viewerOnly && (!en.current || Uo.current || un.current.length > 0))) {
          if (Ho?.uuid) Hr.add(Ho.uuid);
          mr.noteSend(Ho), (Rt.current = false), lt(true), un.current.push({ content: Eo, opts: Ho });
          let Er = nn.current ?? pK(Date.now());
          return (
            Xo({ ...Er, queuedCount: un.current.length }),
            Mo(Eo),
            n(`[useRemoteSession] Queued message during bootstrap (${un.current.length} queued)`),
            true
          );
        }
        return Qt(Eo, Ho);
      },
      [S, lt, Xo, Mo, Qt, mr],
    ),
    Nn = B(() => {
      if ((Ki(), !S?.viewerOnly)) {
        pr.current?.cancelSession(), An();
        return;
      }
      tn(), lt(false);
    }, [S, lt, tn, An, Ki]),
    bn = B((Eo, Ho) => {
      let Cn = pr.current;
      if (!Cn)
        return Promise.reject(Error("[useRemoteSession] Cannot send control request (no manager): not connected"));
      let Zn = Eo.subtype === "set_permission_mode" ? Li.current : null,
        Er =
          Zn === null
            ? Cn.sendControlRequest(Eo, Ho)
            : Zn.then(() => {
                let Ai = pr.current;
                if (!Ai) throw Error("[useRemoteSession] Cannot send control request (no manager): not connected");
                return Ai.sendControlRequest(Eo, Ho);
              });
      if (Eo.subtype === "set_permission_mode")
        as.current++,
          Er.then(
            () => {
              Xr.current++;
            },
            () => {},
          );
      return Er;
    }, []),
    Sn = B(() => {
      tn(), pr.current?.disconnect(), (pr.current = null);
    }, [tn]);
  return z(
    () => ({ isRemoteMode: Z, sendMessage: lr, cancelRequest: Nn, disconnect: Sn, sendControlRequest: bn }),
    [Z, lr, Nn, Sn, bn],
  );
}

function vLe(S) {
  if (!u$()) return "not_enabled";
  if (!S) return "launch_keeps_them";
  switch (Jsn()) {
    case "keep_local":
      return "kept_on_this_machine";
    case "unspecified":
      return "not_decided";
    case "forward":
      return "not_sent";
  }
}

function wLe(S) {
  return `Couldn't send your message \u2014 ${S}. It wasn't delivered to the cloud session.`;
}

F();

function nie({ session: S, sink: x, requestDialog: P, toolPermissionContext: j, tools: H }) {
  let Z = z(() => {
    if (!S) return;
    return {
      label: "ssh",
      createManager: (re) => S.createManager(re),
      onDisconnected: (re) => {
        let ue = S.getStderrTail().trim(),
          de = S.proc.exitCode,
          pe = re ? "Remote session ended." : "SSH session failed before connecting.";
        if (ue && (!re || de !== 0))
          pe += `
Remote stderr (exit ${de ?? "signal " + S.proc.signalCode}):
${ue}`;
        Ln(1, "other", { finalMessage: pe });
      },
      cleanup: () => S.proxy?.stop(),
    };
  }, [S]);
  return DD({ adapter: Z, sink: x, requestDialog: P, toolPermissionContext: j, tools: H });
}

var l$ = [],
  TLe = new Set(),
  c$ = { messages: l$, inProgressToolUseIDs: TLe };

function ND(S, x, P) {
  let j = S[x] ?? c$,
    H = j.inProgressToolUseIDs,
    Z;
  switch (P.action) {
    case "add": {
      Z = new Set(H);
      for (let re of P.ids) Z.add(re);
      break;
    }
    case "remove": {
      Z = new Set(H);
      for (let re of P.ids) Z.delete(re);
      if (Z.size === H.size) return S;
      break;
    }
    case "clear":
      if (H.size === 0) return S;
      Z = new Set();
      break;
    default:
      return S;
  }
  return { ...S, [x]: { ...j, inProgressToolUseIDs: Z } };
}

function aie(S, x) {
  return { ...S, isMidTurn: x.isActive };
}

function lie({ ssh: S, direct: x, ccr: P, ccrViewerOnly: j, ccrSessionId: H }) {
  return S.isRemoteMode
    ? czt("ssh", S, false)
    : x.isRemoteMode
      ? czt("direct", x, false)
      : P.isRemoteMode
        ? czt("ccr", P, j, H)
        : azt;
}

class d$ {
  #e;
  #t = null;
  #o = { activeRemote: azt };
  #r = Ue();
  retraction = eRt();
  modeWire = { applied: null, lastBroadcast: null };
  #i = et();
  constructor(S) {
    this.#e = S;
  }
  subscribe = this.#r.subscribe;
  getSnapshot = () => this.#o;
  get activeRemote() {
    return this.#o.activeRemote;
  }
  bindHost(S) {
    this.#t = S;
  }
  #n() {
    if (this.#t === null) throw Error("RemoteTransport: used before its screen bound a host");
    return this.#t;
  }
  setActiveRemote(S) {
    let x = S.isRemoteMode ? S : null,
      P = S.isRemoteMode && S.caps.catchupReplay ? "ccr-api" : "local-jsonl",
      j = RR();
    if (j.remote !== x || j.transcriptSource !== P) Cxn({ ...j, remote: x, transcriptSource: P });
    if (S === this.#o.activeRemote) return;
    if (((this.#o = { activeRemote: S }), !S.isRemoteMode)) this.#e.workerCommands.setState(() => null);
    this.#r.emit();
  }
  setMessages = (S) => {
    this.#e.transcript.replace(S);
  };
  setIsLoading = (S) => {
    this.#e.turn.setExternalLoading(S);
  };
  getIsLoading = () => this.#e.turn.isExternalLoading;
  get streaming() {
    return this.#e.turn.stream;
  }
  setStreamMode = (S) => {
    this.#e.spinner.setMode(S);
  };
  setInProgressToolUseIDs = (S) => {
    this.#e.store.setState((x) => {
      let P = ND(x.transcripts, this.#i, S);
      return P === x.transcripts ? x : { ...x, transcripts: P };
    });
  };
  onTurnComplete = () => {
    this.#e.turn.markRemoteTurnComplete();
  };
  onConversationReset = (S) => {
    this.#e.applyConversationReset(S);
  };
  onInit = (S) => {
    let { workerCommands: x, setAppState: P } = this.#e;
    if (S.slash_commands !== void 0) {
      let H = new Set(S.slash_commands);
      x.setState(() => H);
    }
    let j = S.model;
    if (j !== void 0) P((H) => (H.mainLoopModel === j ? H : { ...H, mainLoopModel: j }));
  };
  onPermissionModeChange = (S) => {
    if (!wO.includes(S)) return;
    let { store: x, setAppState: P } = this.#e;
    if ((Yre(this.modeWire, S), x.getState().toolPermissionContext.mode === S)) return;
    let j = X0(S, x.getState().toolPermissionContext, (H) => {
      (this.modeWire.applied = S), P((Z) => ({ ...Z, toolPermissionContext: H(Z.toolPermissionContext) }));
    });
    if (!j.ok) {
      n(`[remote] Permission-mode broadcast '${S}' rejected locally: ${j.error}`, { level: "warn" });
      return;
    }
    n(`[remote] Applied permission-mode broadcast: ${S}`);
  };
  refuseSubmit(S, x) {
    if (!this.activeRemote.isRemoteMode) return false;
    if (!S.trim()) return true;
    if (x === "bash")
      return (
        this.#n().addNotification({
          key: "remote-bash-mode-unavailable",
          kind: "feedback",
          text: "'!' commands aren't available in cloud sessions yet",
          priority: "medium",
        }),
        true
      );
    return false;
  }
  submit(S, { pastedContents: x, fromKeybinding: P, recordHistory: j }) {
    let H = this.activeRemote;
    if (!H.isRemoteMode) return null;
    let { addNotification: Z } = this.#n(),
      { commands: re } = this.#e.scope,
      de = S.trim().startsWith("/") ? S.trim().slice(1).split(/\s/)[0] : void 0,
      pe = de ? re.find((Pe) => xp(Pe) && (Pe.name === de || Pe.aliases?.includes(de) || ei(Pe) === de)) : void 0,
      Re = pe ? jun(pe, ba()) : "post-text",
      be = Re === "unavailable" && pe ? pe.name : de && !pe && wte().has(de) ? de : void 0;
    if (be)
      return (
        p(w4(wte().has(be) ? be : "custom"), "remote_unavailable"),
        Z({
          key: `remote-slash-command-unavailable-${be}`,
          kind: "feedback",
          text: H.viewerOnly
            ? `/${be} isn't available while viewing read-only`
            : `/${be} isn't available in cloud sessions yet`,
          priority: "medium",
        }),
        j({ startsTurn: false }),
        Promise.resolve()
      );
    if (Re !== "post-text") return null;
    return this.#c(H, S, {
      pastedValues: P ? [] : Object.values(x),
      clearsConversation: pe?.name === "clear",
      recordHistory: j,
    });
  }
  async #c(S, x, { pastedValues: P, clearsConversation: j, recordHistory: H }) {
    let Z = P.filter((Pe) => Pe.type === "image"),
      re = Z.length > 0 ? Z.map((Pe) => Pe.id) : void 0,
      ue = x.trim(),
      de = ue,
      pe = ue;
    if (P.length > 0) {
      let Pe = [],
        Oe = [];
      if (ue) Pe.push({ type: "text", text: ue }), Oe.push({ type: "text", text: ue });
      for (let Ie of P)
        if (Ie.type === "image") {
          let He = { type: "base64", media_type: Ie.mediaType ?? "image/png", data: Ie.content };
          Pe.push({ type: "image", source: He }), Oe.push({ type: "image", source: He });
        } else if (Ie.type === "text")
          Pe.push({ type: "text", text: Ie.content }), Oe.push({ type: "text", text: Ie.content });
      (de = Pe), (pe = Oe);
    }
    let Re = xe({ content: de, imagePasteIds: re, origin: { kind: "human" } });
    if (
      (this.#e.transcript.replace((Pe) => [...Pe, Re]),
      this.#e.turn.stream.clearApiMetrics(),
      H({ startsTurn: true }),
      (await S.sendMessage(pe, { uuid: Re.uuid, ...(j && { clearsConversation: true }) })) && j)
    )
      this.#e.transcript.replace(() => []), this.#e.applyLocalConversationReset(_Le());
  }
  runBridgeImmediateCommand = (S, x, P) => {
    if (S.type !== "local") return;
    let { turn: j, transcript: H } = this.#e,
      Z = H.replace;
    (async () => {
      let re;
      try {
        let { mainLoopModel: ue } = this.#n(),
          de = aie(j.buildToolUseContext(H.getSnapshot(), [], gr(), ue), j.guard);
        re = de.session;
        let Re = await (await S.load()).call(x, de),
          be = Re.type === "text" || Re.type === "query" ? Re.value : void 0;
        Z((Pe) => [
          ...Pe,
          sm(oz(P, x)),
          ...(be
            ? [sm(`<${jp}>${Wt(be)}</${jp}>`, Re.type === "text" ? { contextUsage: Re.contextUsage } : void 0)]
            : []),
        ]);
      } catch (ue) {
        let de = It(ue);
        if (de) n(`bridge immediate command aborted: ${ue instanceof Error ? ue.message : String(ue)}`);
        else h(ft(we(ue), "bridge immediate command failed"));
        let pe = de ? jp : _S,
          Re = re ? oae(ue, S.name, re) : `${PS(Qn(S.name))} failed (detail withheld on this connection)`;
        Z((be) => [...be, sm(oz(P, x)), sm(`<${pe}>${Wt(Re)}</${pe}>`)]);
      }
    })();
  };
}

function RLe(S) {
  return S.isExternalLoading;
}

function xLe(S) {
  return S.combinedInitialTools;
}

function m$({
  remoteSessionConfig: S,
  directConnectConfig: x,
  sshSession: P,
  transcript: j,
  turn: H,
  scope: Z,
  spinner: re,
  applyConversationReset: ue,
  applyLocalConversationReset: de,
}) {
  let pe = Xn(),
    Re = At(),
    [be] = u(
      () =>
        new d$({
          store: pe,
          setAppState: Re,
          transcript: j,
          turn: H,
          scope: Z,
          spinner: re,
          applyConversationReset: ue,
          applyLocalConversationReset: de,
          workerCommands: Z.workerCommands,
        }),
    ),
    Pe = W((ot) => ot.toolPermissionContext),
    Oe = Xe(Z, xLe),
    Ie = Xe(H, RLe),
    He = tie({ config: S, sink: be, requestDialog: Z.requestDialog, toolPermissionContext: Pe, tools: Oe }),
    Fe = Xre({ config: x, sink: be, requestDialog: Z.requestDialog, toolPermissionContext: Pe, tools: Oe }),
    Ve = nie({ session: P, sink: be, requestDialog: Z.requestDialog, toolPermissionContext: Pe, tools: Oe }),
    Ke = z(
      () => lie({ ssh: Ve, direct: Fe, ccr: He, ccrViewerOnly: S?.viewerOnly ?? false, ccrSessionId: S?.sessionId }),
      [Ve, Fe, He, S?.viewerOnly, S?.sessionId],
    );
  return (
    qn(() => {
      be.setActiveRemote(Ke);
    }, [be, Ke]),
    Jre(be),
    { transport: be, activeRemote: Ke, cancellableExternalLoading: lzt(Ke, Ie) }
  );
}

F();

F();

function Lx() {
  return Lt(j_.subscribe, () => j_.getState().value);
}

function cie() {
  return Lt(j_.subscribe, () => j_.getState().vimMode);
}

function Bb() {
  return Lt(j_.subscribe, () => j_.getState().active);
}

function g$() {
  return Lt(j_.subscribe, () => j_.getState().launchWarning);
}

function Fx(S) {
  fi.legacyDialogFocus.setState((x) => (x.focus === S ? x : { focus: S }));
}

function Ux() {
  return fi.legacyDialogFocus.getState().focus !== null;
}

function LD() {
  return Lt(fi.legacyDialogFocus.subscribe, Ux);
}

function jx(S) {
  fi.blockingToolProgress.setState((x) => (x.active === S ? x : { active: S }));
}

function uie() {
  return fi.blockingToolProgress.getState().active;
}

function PLe() {
  return Lt(fi.blockingToolProgress.subscribe, uie);
}

function Hx(S) {
  fi.dialogHostlessScreen.setState((x) => (x.screen === S ? x : { screen: S }));
}

function die() {
  return fi.dialogHostlessScreen.getState().screen !== null;
}

function pie() {
  return Lt(fi.dialogHostlessScreen.subscribe, die);
}

function Gd() {
  let S = LD(),
    x = PLe(),
    P = Bb(),
    j = ALe(),
    H = MLe();
  return S ? "legacy-dialog" : x ? "progress" : j ? "panel" : H ? "draft" : P ? "typing" : null;
}

function ALe() {
  let S = qMn(),
    x = n2e();
  return x !== null && (x.parksBlockingDialogs === true || S);
}

function MLe() {
  let S = GMn();
  return Lt(j_.subscribe, () => S && j_.getState().value.trim() !== "");
}

function $x() {
  let S = FK(),
    x = n2e() !== null,
    P = Gd();
  if (x || (S && P === null)) return "visible";
  return S ? "suppressed" : "none";
}

function h$() {
  let S = WMn(),
    x = Gd(),
    P = pie();
  return x !== null || P ? null : S;
}

function y$() {
  let S = xnt(),
    x = Gd(),
    P = pie();
  return x !== null || P ? void 0 : S;
}

function fie(S) {
  return {
    subscribe(x) {
      let P = [
        S.subscribe(x),
        j_.subscribe(x),
        fi.legacyDialogFocus.subscribe(x),
        fi.blockingToolProgress.subscribe(x),
        fi.dialogHostlessScreen.subscribe(x),
      ];
      return () => {
        for (let j of P) j();
      };
    },
    get() {
      let x = S.getState(),
        P = u1(x),
        j = t2e(x),
        H = j !== null && (j.parksBlockingDialogs === true || P?.yieldsToPanels === true),
        Z = j_.getState(),
        re = Z.value.trim() !== "" && P?.yieldsToDraft === true;
      return Ux() || uie() || H || re || Z.active || die() ? void 0 : P?.kind;
    },
  };
}

var Rg = go({
  kind: "resume_return",
  payload: m(() => f({ sessionAgeMinutes: v(), estimatedTokens: v() })),
  result: m(() => oe(["compact", "continue", "dismiss", "never", "cancelled"])),
  default: "cancelled",
});

function gie(S, x) {
  if (!I("tengu_gleaming_fair", false)) return null;
  if (ie().resumeReturnDismissed) return null;
  let P = a.CLAUDE_CODE_RESUME_THRESHOLD_MINUTES ?? 70,
    j = a.CLAUDE_CODE_RESUME_TOKEN_THRESHOLD ?? 1e5,
    H = Date.now() - 60000,
    Z = S.findLast((de) => (de.type === "user" || de.type === "assistant") && Date.parse(de.timestamp) < H)?.timestamp;
  if (!Z) return null;
  let re = (Date.now() - Date.parse(Z)) / 60000;
  if (re < P) return null;
  let ue = x(S);
  if (ue < j) return null;
  return { sessionAgeMinutes: re, estimatedTokens: ue };
}

async function hie(S, x, { getMessageCount: P, storage: j, runCompact: H }) {
  let Z = await S(Rg, x);
  if (Z === "cancelled") return;
  if (
    (s("tengu_resume_return_action", {
      action: c(Z),
      sessionAgeMinutes: Math.round(x.sessionAgeMinutes),
      messageCount: P(),
      estimatedTokens: x.estimatedTokens,
    }),
    Z === "never")
  )
    await Ae((re) => {
      if (re.resumeReturnDismissed) return re;
      return { ...re, resumeReturnDismissed: true };
    }, j);
  if (Z === "compact") H();
}

var S$ = 1048576,
  DLe = 64;

async function Sie(S, x, P) {
  let j = new Map(),
    H = new Map(),
    Z,
    re = async () =>
      (Z ??= {
        getJobDir: (await import("/$bunfs/root/chunk-m43j1acx.js")).getJobDir,
        probeDaemonJob: (await import("/$bunfs/root/chunk-89azay9s.js")).probeDaemonJob,
        readRoster: (await import("/$bunfs/root/chunk-9bgt5v9e.js")).readRoster,
        staleMs: (await import("/$bunfs/root/chunk-w2x0643m.js")).STALE_THRESHOLD_MS,
        skewMs: (await import("/$bunfs/root/chunk-w2x0643m.js")).CLOCK_SKEW_ALLOWANCE_MS,
      });
  for (let [ue, de] of S) {
    if (de.state !== "armed" || de.holder !== "bg") continue;
    let { getJobDir: pe, probeDaemonJob: Re, readRoster: be, staleMs: Pe, skewMs: Oe } = await re();
    if (de.holderPidSpace !== Qbt().slice(0, 160)) {
      j.set(ue, "unproven");
      continue;
    }
    let Ie = (He, Fe) => {
      let Ve = H.get(He);
      if (Ve === void 0) (Ve = Fe()), H.set(He, Ve);
      return Ve;
    };
    j.set(
      ue,
      await S$n(de, ue, {
        pidViewTrusted: () => Ie("trusted", Rre),
        pidState: (He) => (ms(He) ? "alive" : Gg(He) ? "gone" : "unknown"),
        isSameProcess: r0,
        self: { pid: process.pid, token: Ure.token, actingAsJob: nl() },
        identityOf: (He) =>
          iA({
            ...(He.holderProcStart !== void 0 && { procStart: He.holderProcStart }),
            ...(He.holderProcStartFt !== void 0 && { procStartFt: He.holderProcStartFt }),
          }),
        jobDirExists: (He) =>
          Ie("dir:" + He, async () => {
            if (x !== void 0) return true;
            try {
              return await yie(pe(He)), true;
            } catch (Fe) {
              if (X(Fe)) return false;
              throw Fe;
            }
          }),
        jobDirTouchedRecently: (He) =>
          Ie("touched:" + He, async () => {
            try {
              let Fe = await yie(pe(He)),
                Ve = P - Fe.mtimeMs;
              return Ve <= Pe && -Ve <= Pe + Oe;
            } catch (Fe) {
              if (X(Fe)) return false;
              throw Fe;
            }
          }),
        jobPresent: (He) =>
          Ie("present:" + He, async () => {
            let Fe = await Re(He, x);
            if (Fe.daemonUp && Fe.present) return true;
            let Ve = await Ie("roster", () => be({ silent: true }, x));
            if (Ve.parseFailed === true || Ve.inspectFailed === true) throw Error("roster unreadable");
            return Ve.workers[He] !== void 0;
          }),
        freshConsentFor: (He, Fe) => Ie("consent:" + He + ":" + Fe, () => NLe(He, Fe, x, P, pe, Pe, Oe)),
      }),
    );
  }
  return j;
}

async function NLe(S, x, P, j, H, Z, re = 60000) {
  let ue;
  if (P !== void 0) {
    let de = await P.read([{ key: Te.job(S, ["adopt.json"]), offset: 0, length: S$ + 1 }]);
    if (!de.ok) return true;
    let pe = de.value.items[0];
    if (pe === void 0 || !pe.found) return false;
    if (pe.totalBytes > S$) return true;
    ue = Buffer.from(pe.value).toString("utf8");
  } else {
    let de = ILe(H(S), "adopt.json"),
      pe;
    try {
      let Re = await pb(de);
      if (!Re.ok) return Re.error.kind !== "absent";
      pe = Re.value;
      let be = await pe.stat();
      if (!be.isFile() || be.size > S$) return true;
      let Pe = Buffer.alloc(be.size),
        { bytesRead: Oe } = await pe.read(Pe, 0, be.size, 0);
      ue = Pe.subarray(0, Oe).toString("utf8");
    } catch (Re) {
      return !X(Re);
    } finally {
      await pe?.close().catch(() => {});
    }
  }
  try {
    let de = JSON.parse(ue);
    if (typeof de !== "object" || de === null || Array.isArray(de)) return true;
    let pe = de,
      Re = typeof pe.writtenAtMs === "number" ? pe.writtenAtMs : void 0;
    if (pe.frameLive === void 0) return false;
    if (!Array.isArray(pe.frameLive)) return true;
    if (pe.frameLive.length > DLe) return true;
    return pe.frameLive.some((be) => {
      if (typeof be !== "object" || be === null) return true;
      let Pe = be;
      if (Pe.slug !== x) return false;
      let Oe = typeof Pe.writtenAtMs === "number" ? Pe.writtenAtMs : Re;
      return Oe === void 0 || (j - Oe <= Z && Oe - j <= Z + re);
    });
  } catch {
    return true;
  }
}

var Wx = 5,
  Tie = Wx * 4,
  bie = Tie * 10,
  LLe = 28,
  wie = 2048,
  FLe = 50;

function _ie(S, x, P) {
  let j = S.find((H) => H.key === x);
  if (P === null) return j ? S.filter((H) => H.key !== x) : S;
  if (
    j &&
    j.url === P.url &&
    j.dedupUrl === P.dedupUrl &&
    j.label === P.label &&
    j.prefix === P.prefix &&
    j.color === P.color
  )
    return S;
  return [{ ...P, key: x }, ...S.filter((H) => H.key !== x && (H.key !== void 0 || !OD(H, P)))];
}

function b$(S, x) {
  if (!S || S.length === 0 || !x) return [];
  let P = qLe.of(G().host),
    j = [];
  for (let H of S) {
    if (H.type !== "regex") continue;
    let { pattern: Z, url: re, label: ue } = H;
    if (typeof Z !== "string" || typeof re !== "string" || (ue !== void 0 && typeof ue !== "string")) {
      P.warnUnreadableRegexEntry(`${typeof Z}/${typeof re}/${typeof ue}`);
      continue;
    }
    let de = P.compiledRegex(Z);
    if (!de) continue;
    let pe = P.templatePin(re);
    if (pe === null) continue;
    P.warnUnknownPlaceholders(Z, re, ue);
    let Re = 0,
      be = [],
      Pe = false,
      Oe = false,
      Ie = false,
      He = performance.now();
    try {
      for (let Ve of x.matchAll(de)) {
        if (++Re > bie) {
          n(
            `[footerLinks] pattern ${Z} exceeded ${bie} matches in one scan; stopping (newest matches beyond the ceiling are not collected)`,
            { level: "warn" },
          ),
            g("repl_footer_links", "scan_ceiling");
          break;
        }
        if ((be.push(Ve), be.length > Tie)) be.shift();
      }
      for (let Ve of be) {
        let Ke = Ve.groups ?? {},
          ot = jLe(re, Ke);
        if (ot !== null && ot.length > wie) {
          if (!Oe)
            (Oe = true),
              n(`[footerLinks] dropping over-length url (${ot.length} > ${wie} chars) for pattern ${Z}`, {
                level: "warn",
              }),
              g("repl_footer_links", "url_too_long");
          continue;
        }
        let st = ot === null ? null : xie(ot);
        if (ot === null || !st || Rie(st) !== pe) {
          if (!Pe)
            (Pe = true),
              n(
                `[footerLinks] dropping ${ot === null ? "dot-segment" : st ? "origin-shifted" : "unparseable"} url for pattern ${Z}`,
                { level: "warn" },
              ),
              g("repl_footer_links", ot === null ? "dot_segment_url" : st ? "origin_shifted" : "unparseable_url");
          continue;
        }
        let nt = rt($Le(ue ? WLe(ue, Ke) : Ve[0]).trim(), LLe);
        if (nt === "") {
          if (!Ie)
            (Ie = true),
              n(`[footerLinks] dropping match with empty label for pattern ${Z}`, { level: "warn" }),
              g("repl_footer_links", "empty_label");
          continue;
        }
        j.push({ index: Ve.index ?? 0, match: { url: ot, label: nt } });
      }
    } catch (Ve) {
      n(`[footerLinks] regex exec failed for ${Z}: ${l(Ve)}`, { level: "warn" }),
        g("repl_footer_links", "regex_exec_failed");
    }
    let Fe = performance.now() - He;
    if (Fe > FLe) n(`[footerLinks] slow pattern (${Math.round(Fe)}ms): ${Z}`, { level: "warn" });
  }
  return j.sort((H, Z) => H.index - Z.index).map((H) => H.match);
}

var FD = /\{([^{}]+)\}/g,
  BLe = /\(\?<([^>=!][^>]*)>/g,
  ULe = /^(?:\.|%2e){1,2}$/i;

function jLe(S, x) {
  let P = S.replace(FD, (Z, re) => encodeURIComponent(Ry(Object.hasOwn(x, re) ? (x[re] ?? "") : ""))),
    j = P.search(/[?#]/);
  return (j === -1 ? P : P.slice(0, j)).split(/[/\\]/).some((Z) => ULe.test(Z)) ? null : P;
}

var HLe = /[\x00-\x1f\x7f]/g;

function $Le(S) {
  return Et(S).replace(HLe, "");
}

function WLe(S, x) {
  return S.replace(FD, (P, j) => (Object.hasOwn(x, j) ? (x[j] ?? "") : ""));
}

function Rie(S) {
  return S.origin !== "null" ? S.origin : `${S.protocol}//${S.host}`;
}

function xie(S) {
  try {
    return new URL(S);
  } catch {
    return null;
  }
}

function k$(S, x) {
  if (x.length === 0) return S;
  let [P, j] = hO(S, (ue) => ue.key !== void 0),
    H = [];
  for (let ue of x) {
    if (H.some((de) => OD(de, ue)) || P.some((de) => OD(de, ue))) continue;
    H.push(ue);
  }
  if (H.length === 0) return S;
  let Z = j.filter((ue) => !H.some((de) => OD(de, ue))),
    re = [...P, ...[...H, ...Z].slice(0, Wx)];
  if (
    re.length === S.length &&
    re.every((ue, de) => {
      let pe = S[de];
      return (
        ue === pe ||
        (ue.url === pe.url &&
          ue.dedupUrl === pe.dedupUrl &&
          ue.label === pe.label &&
          ue.prefix === pe.prefix &&
          ue.key === pe.key &&
          ue.color === pe.color)
      );
    })
  )
    return S;
  return re;
}

function OD(S, x) {
  return (
    S.url === x.url ||
    S.url === x.dedupUrl ||
    S.dedupUrl === x.url ||
    (S.dedupUrl !== void 0 && S.dedupUrl === x.dedupUrl)
  );
}

class Pie {
  warnedUnreadableShapes = new Set();
  warnedPlaceholderConfigs = new Set();
  pinByTemplate = new Map();
  regexByPattern = new Map();
  warnUnreadableRegexEntry(S) {
    if (this.warnedUnreadableShapes.has(S)) return;
    n(
      `[footerLinks] skipping a 'regex' entry with non-string fields (pattern/url/label types: ${S}); the entry is preserved in settings`,
      { level: "warn" },
    ),
      g("repl_footer_links", "unreadable_entry"),
      this.warnedUnreadableShapes.add(S);
  }
  warnUnknownPlaceholders(S, x, P) {
    let j = `${S}\x00${x}\x00${P ?? ""}`;
    if (this.warnedPlaceholderConfigs.has(j)) return;
    let H = new Set([...S.matchAll(BLe)].map((re) => re[1])),
      Z = `${x}
${P ?? ""}`;
    for (let [, re] of Z.matchAll(FD))
      if (re !== void 0 && !H.has(re))
        n(`[footerLinks] template references {${re}} but pattern ${S} has no such named capture group`, {
          level: "warn",
        });
    this.warnedPlaceholderConfigs.add(j);
  }
  templatePin(S) {
    if (this.pinByTemplate.has(S)) return this.pinByTemplate.get(S) ?? null;
    let x = xie(S.replace(FD, "x"));
    if (!x || !Xon.has(x.protocol))
      return (
        n(
          `[footerLinks] url template "${S}" must have a literal origin with an allowlisted scheme (e.g. https://host/...); skipping`,
          { level: "warn" },
        ),
        g("repl_footer_links", "bad_url_template"),
        this.pinByTemplate.set(S, null),
        null
      );
    let P = Rie(x);
    return this.pinByTemplate.set(S, P), P;
  }
  compiledRegex(S) {
    if (this.regexByPattern.has(S)) return this.regexByPattern.get(S) ?? null;
    let x = null;
    try {
      x = new RegExp(S, "g");
    } catch (P) {
      n(`[footerLinks] invalid pattern ${S}: ${l(P)}`, { level: "warn" }), g("repl_footer_links", "invalid_pattern");
    }
    return this.regexByPattern.set(S, x), x;
  }
}

var qLe = new J(() => new Pie());

var Aie = 8192,
  C$ = 65536,
  VLe = 256;

function Eie() {
  let S = a0("footerLinksRegexes").flat();
  return S.length > 0 ? S : void 0;
}

function Die(S, x) {
  let P = Eie(),
    j = x.filter((Z) => Z.key !== void 0),
    H = !P || P.length === 0 ? j : GLe(S, P, j);
  if (
    x.length === H.length &&
    x.every((Z, re) => {
      let ue = H[re];
      return (
        ue !== void 0 &&
        Z.url === ue.url &&
        Z.dedupUrl === ue.dedupUrl &&
        Z.label === ue.label &&
        Z.prefix === ue.prefix &&
        Z.key === ue.key &&
        Z.color === ue.color
      );
    })
  )
    return null;
  return H;
}

function Lie(S, x) {
  try {
    let P = Eie();
    if (!P || P.length === 0) return;
    let j = Uie(QLe(S)),
      H = j ? b$(P, j).reverse() : [];
    if (H.length === 0) return;
    y("repl_footer_links"),
      x((Z) => {
        let re = k$(Z.footerLinks, H);
        return re === Z.footerLinks ? Z : { ...Z, footerLinks: re };
      });
  } catch (P) {
    h(P), p("repl_footer_links", "scan_failed");
  }
}

function GLe(S, x, P = []) {
  if (!x || x.length === 0) return P;
  let j = Uie(S);
  if (!j) return P;
  return k$(P, b$(x, j).reverse());
}

function Uie(S) {
  let x = "",
    P = 0;
  for (let j = S.length - 1; j >= 0 && x.length < C$ && P < VLe; j--) {
    let H = S[j];
    if (!KLe(H)) continue;
    P++;
    let Z = [];
    for (let re of Cf([H], true)) {
      let ue = JLe(re);
      if (ue) Z.push(ue);
    }
    if (Z.length > 0) {
      let re = Z.join(`
`);
      x = x
        ? re +
          `
` +
          x
        : re;
    }
  }
  return x.length > C$ ? x.slice(-C$) : x;
}

function KLe(S) {
  if (S.type === "assistant")
    return Array.isArray(S.message.content) && S.message.content.some((x) => x.type === "text");
  if (S.type === "user") {
    if (S.isMeta || !Array.isArray(S.message.content)) return false;
    return S.message.content.some(
      (x) =>
        x.type === "tool_result" &&
        (typeof x.content === "string" || (Array.isArray(x.content) && x.content.some((P) => P.type === "text"))),
    );
  }
  return false;
}

function QLe(S) {
  for (let x = S.length - 1; x >= 0; x--) {
    let P = S[x];
    if (P.type === "user" && !P.isMeta && !gk(P) && !zLe(P) && !YLe(P)) return S.slice(x + 1);
  }
  return S.slice();
}

function zLe(S) {
  if (S.type !== "user" || !Array.isArray(S.message.content)) return false;
  let x = S.message.content[0];
  return x?.type === "text" && (x.text === V_ || x.text === Vc);
}

var Iie = `<system-reminder>
`;

function YLe(S) {
  if (S.type !== "user") return false;
  let x = S.message.content,
    P = typeof x === "string" ? x : Array.isArray(x) && x[0]?.type === "text" ? x[0].text : "",
    j = P.startsWith(Iie) ? P.slice(Iie.length) : P;
  return j.startsWith(xun) || j.startsWith(Iun) || j.startsWith(Pun);
}

function JLe(S) {
  if (S.type === "assistant") {
    let x = S.message.content[0];
    return x.type === "text" ? v$(x.text) : "";
  }
  if (S.type === "user") {
    if (S.isMeta) return "";
    let x = S.message.content[0];
    if (x.type !== "tool_result") return "";
    if (typeof x.content === "string") return v$(x.content);
    if (Array.isArray(x.content))
      return v$(
        zr(
          x.content,
          `
`,
        ),
      );
    return "";
  }
  return "";
}

function v$(S) {
  return S.length > Aie ? S.slice(-Aie) : S;
}

function w$(S, x) {
  if (Co()) return x;
  let P = x,
    j = jie(() => Die(S, P.footerLinks));
  if (j !== null) P = { ...P, footerLinks: j };
  let H = jie(() => V$n(S, P.sendMessagePins));
  if (H !== null) P = { ...P, sendMessagePins: H };
  return P;
}

function jie(S) {
  try {
    return S();
  } catch (x) {
    let P = we(x);
    return n(`session rehydration threw: ${P.stack ?? P.message}`, { level: "error" }), null;
  }
}

function BD(S, x, P) {
  S((j) => ({ ...j, toolPermissionContext: { ...x, mode: P?.preserveMode ? j.toolPermissionContext.mode : x.mode } })),
    setImmediate(() => {
      m7.emit();
    });
}

var XLe = 1000;

class T$ {
  taskOutput;
  #e;
  #t;
  #o;
  #r = "backgrounded";
  #i = null;
  #n;
  result;
  constructor(S) {
    if (
      ((this.#e = S.pid),
      (this.#t = S.procStart),
      (this.#o = S.startTimeTicks),
      this.#t === void 0 && this.#o !== void 0)
    )
      mYt("liveness");
    (this.taskOutput = new Bx(S.taskId, null, true)),
      (this.result = new Promise((x) => {
        this.#n = x;
      })),
      (this.#i = setInterval(() => void this.#c(), XLe)),
      this.#i.unref();
  }
  async #c() {
    if (this.#r !== "backgrounded") return;
    let S = true;
    try {
      if ((process.kill(this.#e, 0), this.#t !== void 0)) {
        if (!(await Bm(this.#e, this.#t))) S = false;
      } else if (this.#o !== void 0) {
        let x = await Cke(this.#e);
        if (x !== null && x !== this.#o) S = false;
      }
    } catch {
      S = false;
    }
    if (!S) await this.#a(false);
  }
  async #a(S) {
    if (this.#r !== "backgrounded") return;
    if (this.#i) clearInterval(this.#i), (this.#i = null);
    this.#r = S ? "killed" : "completed";
    let x = this.#t !== void 0 || this.#o !== void 0,
      P = S
        ? x
          ? "[SIGTERM requested for detached process tree (sent if identity still matched) \u2014 adopted handle released]"
          : "[detached process still running \u2014 adopted handle released]"
        : "[process exited while detached; exit code unknown]";
    await iLe(this.taskOutput.path)
      .then(async (H) => {
        try {
          await H.appendFile(`
${P}
`);
        } finally {
          await H.close();
        }
      })
      .catch(() => {});
    let j = await this.taskOutput.getStdout();
    this.#n({ code: -1, stdout: j, stderr: "", interrupted: S, backgroundTaskId: this.taskOutput.taskId });
  }
  get status() {
    return this.#r;
  }
  background() {
    return true;
  }
  async kill() {
    kge(this.#e, this.#o, this.#t), await this.#a(true);
  }
  cleanup() {
    if (this.#i) clearInterval(this.#i), (this.#i = null);
    this.taskOutput.clear();
  }
  detach() {
    return this.#e;
  }
}

function $ie(S) {
  return S.type === "system" && S.subtype === "model_refusal_fallback";
}

function ZLe(S, x) {
  if (S == null) return false;
  let P = hr(S),
    j = hr(x);
  return P === j || Ye(P) === Ye(j);
}

function Wie(S) {
  let x = S.slicedMessages.filter($ie),
    P = x.at(-1);
  if (!P) return;
  let j = P.fallbackModel,
    H = (() => {
      if (!S.firstParty) return { action: "keep", reason: "not_first_party" };
      if (!ZLe(S.currentOverride, j)) return { action: "keep", reason: "writer_mismatch" };
      let Z = QKt(S.keptMessages, S.initialModel);
      if (Z != null) return { action: "restore", value: Z, restoredFrom: "transcript" };
      if (S.initialModel != null) return { action: "restore", value: S.initialModel, restoredFrom: "initial_model" };
      return { action: "restore", value: null, restoredFrom: "settings_fallthrough" };
    })();
  return {
    bannersSliced: x.length,
    clearLatch: S.latchActive && !S.keptMessages.some($ie),
    model: H,
    lastSlicedFallbackModel: j,
  };
}

var UD = new Mn(() => Ue());

function _$(S, x, P) {
  let j = () => {
    try {
      return x(S.getState());
    } catch {
      return false;
    }
  };
  if (j()) return Promise.resolve(true);
  return new Promise((H) => {
    let Z = setTimeout(() => {
        re(), H(false);
      }, P.timeoutMs),
      re = S.subscribe(() => {
        if (j()) clearTimeout(Z), re(), H(true);
      });
  });
}

function Sm(S, x, P) {
  let j = false,
    H = false,
    Z = x(),
    re = void 0,
    ue = () => {
      if (((H = false), j)) return;
      let be = x();
      if (be.every((Pe, Oe) => Object.is(Pe, Z[Oe]))) return;
      (Z = be), re?.(), (re = void 0), (re = P(...be));
    },
    de = () => {
      if (H || j) return;
      (H = true), queueMicrotask(ue);
    },
    pe = S.map((be) => be.subscribe(de)),
    Re = () => {
      if (j) return;
      j = true;
      for (let be of pe) be();
      re?.(), (re = void 0);
    };
  try {
    re = P(...Z);
  } catch (be) {
    throw (Re(), be);
  }
  return Re;
}

var x$ = 60000,
  oOe = x$;

function qie({ clock: S, store: x, queue: P, taskRegistry: j, dispatchWake: H }) {
  let Z = false,
    re = new Set(),
    ue = new Map(),
    de = (Re) => {
      if ((ue.delete(Re), Z || re.has(Re))) return;
      let be = B$e(P.getCommandQueueSnapshot(), x.getState().tasks).find((He) => He.agentId === Re);
      if (!be) return;
      re.add(Re);
      let Pe = S.setTimeout(() => {
          n(`[wakeRouter] dispatch for ${Re} exceeded ${x$}ms; releasing inFlight reservation`, { level: "warn" }),
            re.delete(Re);
        }, x$),
        Oe = () => {
          P.consume(be.consumedCommands, { reason: "delivered_to_agent" });
        },
        Ie = false;
      H(Re, be.prompt, Oe)
        .catch((He) => {
          if (((Ie = true), He instanceof SL || He instanceof yhe))
            P.remove(be.consumedCommands, { reason: "agent_stopped" }),
              D7(Re, j),
              n(`[wakeRouter] dropping ${be.consumedCommands.length} event(s) for ${Re}: ${l(He)}`);
          else if (He instanceof fd) n(`[wakeRouter] resume state error for ${Re}: ${l(He)}`);
          else h(He);
        })
        .finally(() => {
          if ((Pe(), re.delete(Re), !Ie)) P.recheckCommandQueue();
        });
    },
    pe = Sm(
      [P, x],
      () => [P.getCommandQueueSnapshot(), x.getState().tasks],
      (Re, be) => {
        if (Re.length === 0) return;
        let Oe = Re.some((Ie) => Ie.agentId && !mu(Ie) && Ie.mode === "task-notification")
          ? S.setTimeout(() => {
              P.recheckCommandQueue();
            }, oOe)
          : void 0;
        for (let { agentId: Ie } of B$e(Re, be)) {
          if (re.has(Ie) || ue.has(Ie)) continue;
          ue.set(Ie, setTimeout(de, 0, Ie));
        }
        return Oe;
      },
    );
  return () => {
    (Z = true), pe();
    for (let Re of ue.values()) clearTimeout(Re);
    ue.clear();
  };
}

function P$(S) {
  return S instanceof mW || S instanceof uB;
}

async function nOe(S, x, P) {
  let j = lPe(S, x),
    [H, ...Z] = j;
  if (H === void 0) return;
  let re = oFt(x.get(S), j);
  Ydt(S, Z, x);
  try {
    await P(H, re);
  } catch (ue) {
    let de = [H, ...lPe(S, x)];
    if (P$(ue)) throw (Ydt(S, de, x), ue);
    let pe = oFt(x.get(S), de);
    if (ue instanceof SL && pe && nFt(x.get(S), { userInitiated: true }))
      throw (
        (Ydt(S, de, x),
        new uB(
          `a message the user typed for agent ${S} arrived while a resume their stop refused was in flight; retrying with it`,
        ))
      );
    let Re = ue instanceof fd || !nFt(x.get(S), { userInitiated: pe });
    if (!Re) Ydt(S, de, x);
    throw (dr().agentResumeFailed.emit(S, { error: ue, undeliverable: Re ? de : [], terminal: Re }), ue);
  }
}

var R$ = 5,
  rOe = 2000,
  iOe = 60000;

function sOe(S, x = Math.random) {
  let P = Math.min(iOe, rOe * 2 ** Math.max(0, S - 1));
  return Math.round(P / 2 + (x() * P) / 2);
}

var aOe = { setTimeout: (S, x) => setTimeout(S, x), clearTimeout: (S) => clearTimeout(S) };

function lOe({ taskRegistry: S, resume: x, onFailed: P, timers: j = aOe, random: H = Math.random }) {
  let Z = new Map(),
    re = false,
    ue = (Re) => {
      let be = Z.get(Re)?.timer;
      if (be !== void 0) j.clearTimeout(be);
      Z.delete(Re);
    },
    de = async (Re) => {
      try {
        await nOe(Re, S, (be, Pe) => x(Re, be, Pe)), ue(Re);
      } catch (be) {
        let Pe = Z.get(Re);
        if ((ue(Re), !P$(be))) throw be;
        let Oe = { attempt: (Pe?.attempt ?? 0) + 1, transient: (Pe?.transient ?? 0) + (be instanceof uB ? 1 : 0) };
        if (Oe.transient > R$)
          throw (
            (dr().agentResumeFailed.emit(Re, { error: be, undeliverable: lPe(Re, S), terminal: true }),
            new fd(`still failing after ${R$} retries: ${l(be)}`))
          );
        let Ie = sOe(Oe.attempt, H);
        throw (
          (n(
            `stranded resume of ${Re} retries in ${Ie}ms (attempt ${Oe.attempt}, ${Oe.transient}/${R$} transient): ${l(be)}`,
          ),
          (Oe.timer = j.setTimeout(() => {
            Oe.timer = void 0;
            let He = S.get(Re);
            if (!Cr(He) || He.pendingMessages.length === 0) {
              ue(Re);
              return;
            }
            let Fe = oFt(He),
              { stoppedByUser: Ve, status: Ke } = He;
            if (!nFt(He, { userInitiated: Fe })) {
              ue(Re);
              let ot =
                Ve === true
                  ? new SL(`Agent ${Re} was stopped by the user and won't be resumed.`)
                  : new fd(`Agent ${Re} is ${Ke} and cannot take queued messages.`);
              dr().agentResumeFailed.emit(Re, { error: ot, undeliverable: lPe(Re, S), terminal: true }), P(Re, ot);
              return;
            }
            pe(Re);
          }, Ie)),
          Z.set(Re, Oe),
          be)
        );
      }
    },
    pe = async (Re) => {
      if (re) return;
      try {
        await de(Re);
      } catch (be) {
        P(Re, be);
      }
    };
  return {
    dispatch: pe,
    dispose: () => {
      re = true;
      for (let Re of [...Z.keys()]) ue(Re);
    },
  };
}

function Vie({ taskRegistry: S, getToolUseContext: x, getCanUseTool: P, addNotification: j }) {
  let H = lOe({
      taskRegistry: S,
      resume: (re, ue, de) =>
        gW({
          agentId: re,
          prompt: ue.text,
          promptOrigin: ue.origin,
          promptIsMeta: ue.isMeta,
          toolUseContext: x(),
          canUseTool: P(),
          userInitiated: de,
        }),
      onFailed: (re, ue) => {
        if (P$(ue) || ue instanceof SL) return;
        if (ue instanceof fd) n(`stranded resume of ${re} failed: ${l(ue)}`, { level: "warn" });
        else h(ue);
        j({
          key: `stranded-resume-failed-${re}`,
          kind: "warning",
          text: `Failed to deliver queued message to agent: ${l(ue)}`,
          color: "error",
          priority: "low",
        });
      },
    }),
    Z = dr().agentStrandedMessages.subscribe((re) => {
      H.dispatch(re);
    });
  return () => {
    Z(), H.dispose();
  };
}

function Kie({ transcript: S }) {
  {
    let x = (j) => {
        let H = Oi();
        return j.map((Z) => ro({ slug: Z, env: H }));
      },
      P = (j) => S.replace((H) => [...H, Dt(j, "notice")]);
    return vQt({
      yielded: (j, H, Z) => P(EQt(x(j), H, Z, Date.now())),
      reverted: (j) => P(AQt(x(j))),
      stoppedElsewhere: (j) => P(CQt(x(j))),
    });
  }
  return () => {};
}

var uOe = 500,
  Qie = 200;

function Xie({ clock: S, transcript: x, queue: P }) {
  {
    let j = zie(),
      H = () => {
        let ue = j;
        j = zie();
        for (let de of ["held", "denied", "expired", "delivered", "refused"]) {
          let pe = ue[de];
          if (pe.length === 0) continue;
          let Re = pe.length,
            be = Yie(pe);
          x.replace((Pe) => [
            ...Pe,
            Dt(`Cross-session ${Re === 1 ? "message" : `messages (${Re})`} ${mOe(de)}${be}. ${pOe(de)}`, "warning"),
          ]),
            P.enqueue({
              mode: "prompt",
              agentId: et(),
              value: fOe(de, Re, be),
              priority: "later",
              skipSlashCommands: true,
              isMeta: true,
            });
        }
        if (ue.dropped.length > 0) {
          let de = ue.dropped.reduce((be, Pe) => be + Pe.droppedCount, 0),
            pe = Yie(ue.dropped.map((be) => be.label)),
            Re = gOe(ue.dropped.map((be) => be.dropReason));
          x.replace((be) => [
            ...be,
            Dt(
              `Cross-session ${de === 1 ? "message was" : `messages (${de}) were`} dropped at the recipient session's inbox${pe} and not delivered${Re ? ` \u2014 ${Re}` : ""}. Claude was told not to resend right away.`,
              "warning",
            ),
          ]),
            P.enqueue({
              mode: "prompt",
              agentId: et(),
              value: hOe(de, pe, Re),
              priority: "later",
              skipSlashCommands: true,
              isMeta: true,
            });
        }
      },
      Z = null,
      re = () => {
        Z?.(),
          (Z = S.setTimeout(() => {
            (Z = null), H();
          }, uOe));
      };
    return (
      bHt((ue, de, pe) => {
        let Re = typeof de === "string" && vre(de) ? de : "";
        if (ue === "dropped") {
          let be = j.dropped;
          if (be.length < Qie) be.push({ label: Re, dropReason: pe?.dropReason, droppedCount: pe?.droppedCount ?? 1 });
        } else {
          let be = j[ue];
          if (be.length < Qie) be.push(Re);
        }
        re();
      }),
      () => {
        bHt(null), Z?.(), (Z = null);
      }
    );
  }
  return () => {};
}

function zie() {
  return { held: [], denied: [], expired: [], delivered: [], refused: [], dropped: [] };
}

function Yie(S) {
  let x = te(S.filter((P) => P !== ""));
  if (x.length === 0) return "";
  if (x.length === 1) return ` (recipient: ${x[0]})`;
  return ` (recipients: ${x.slice(0, 3).join(", ")}${x.length > 3 ? ", \u2026" : ""})`;
}

function mOe(S) {
  switch (S) {
    case "held":
      return "held for approval";
    case "denied":
      return "denied";
    case "expired":
      return "expired without approval";
    case "delivered":
      return "released after approval";
    case "refused":
      return "refused";
  }
}

function pOe(S) {
  switch (S) {
    case "held":
      return "The recipient's session has different permission-mode settings, so their user must approve it before Claude sees it.";
    case "denied":
      return "The recipient's user declined it; it was not delivered.";
    case "expired":
      return "The recipient's user did not respond in time; it was not delivered.";
    case "delivered":
      return "It was approved and released to that session (final delivery is up to their queue).";
    case "refused":
      return "That session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them); it was not delivered.";
  }
}

function fOe(S, x, P) {
  let j = x === 1 ? "Your message to another session" : `${x} of your messages to another session`,
    H = x === 1 ? "was" : "were";
  switch (S) {
    case "held":
      return `[Cross-session delivery notice] ${j} ${H} held for the recipient user's approval${P}. Not delivered to that session's Claude yet; its user must approve first. Do not wait for a reply; continue, or choose another approach.`;
    case "denied":
      return `[Cross-session delivery notice] ${j} ${H} denied by the recipient user${P}. Not delivered to that session's Claude. Do not wait for a reply; continue, or choose another approach.`;
    case "expired":
      return `[Cross-session delivery notice] ${j} ${H} not approved before expiry${P}. Not delivered to that session's Claude. Do not wait for a reply; continue, or choose another approach.`;
    case "delivered":
      return `[Cross-session delivery notice] ${j} ${H} approved and released to that session${P}.`;
    case "refused":
      return `[Cross-session delivery notice] ${j} ${H} refused${P}: that session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them). Not delivered to that session's Claude. Do not wait for a reply and do not resend; tell the user, or choose another approach.`;
  }
}

function gOe(S) {
  return te(
    S.map((P) => {
      switch (P) {
        case "rate-limited":
          return "you sent faster than that session accepts";
        case "duplicate":
          return "it repeated your previous message";
        case "hop-loop":
        case "hop-runaway":
          return "a relay loop between sessions was cut";
        case "queue-full":
          return "its queue of undelivered peer messages was full";
        case void 0:
          return "";
      }
    }),
  )
    .filter((P) => P !== "")
    .join("; ");
}

function hOe(S, x, P) {
  return `[Cross-session delivery notice] Do not resend now: ${S === 1 ? "one of your messages to another session was" : `${S} of your messages to another session were`} dropped at that session's inbox${x} and NOT delivered${P ? ` (${P})` : ""}. Treat them as unsent. If the content still matters, fold it into ONE later message after you have finished other work; never retry in a loop.`;
}

var Iv = go({
  kind: "peer_inbound_approval",
  payload: m(() => qm((S) => typeof S === "object" && S !== null && "holdCause" in S && "preview" in S)),
  result: m(() =>
    qm(
      (S) =>
        typeof S === "object" &&
        S !== null &&
        "behavior" in S &&
        (S.behavior === "approve" || S.behavior === "deny" || S.behavior === "cancelled"),
    ),
  ),
  default: { behavior: "cancelled" },
  yieldsToPanels: true,
});

function Zie({ clock: S, store: x, transcript: P, requestDialog: j, visibleDialog: H }) {
  let Z = () => H.get() !== Iv.kind,
    re = new Map(),
    ue = (Ie, He) => {
      let Fe = re.get(Ie);
      if (!Fe) return;
      (Fe.superseded = true), Fe.clearDeadline(), Fe.abort.abort(He), re.delete(Ie);
    };
  z6e((Ie, He, Fe) => {
    ue(Ie, "superseded");
    let Ve = SOe(Ie),
      Ke = Ve.claimedName ? ` (peer claims name: ${Ve.claimedName})` : "",
      ot = Ve.verifiedPeerPid ? ` [verified pid ${Ve.verifiedPeerPid}]` : "";
    if (
      (P.replace((st) => [
        ...st,
        Dt(
          `Held peer message \u2014 from ${Ve.address}${ot}${Ke}${Ve.preview || Ve.previewSummary ? `; preview: \xAB${Ve.preview}\xBB${Ve.previewSummary}` : ""} \u2014 not delivered to Claude (${He} held). ${kOe(Fe)}`,
          "warning",
        ),
      ]),
      j && (Fe === "mode-mismatch" || Fe === "no-mode-asserted"))
    ) {
      let st = new AbortController(),
        nt = false,
        Pt = R9(),
        kt = null,
        Ht = () => {
          if (Pt <= 0) return;
          kt = S.setTimeout(() => {
            if (hm() || Z()) {
              Ht();
              return;
            }
            if ((oZ("policy-accepts"), yt.superseded)) return;
            (nt = true), st.abort("expired");
          }, Pt);
        },
        yt = {
          abort: st,
          clearDeadline: () => {
            kt?.(), (kt = null);
          },
          rearmDeadline: () => {
            kt?.(), (kt = null), Ht();
          },
          superseded: false,
        };
      re.set(Ie, yt),
        Ht(),
        j(
          Iv,
          {
            fromAddress: Ve.address === "an unidentified session" ? void 0 : Ve.address,
            claimedName: Ve.claimedName || void 0,
            verifiedPeerPid: Ve.verifiedPeerPid,
            holdCause: Fe,
            preview: Ve.dialogBody,
          },
          { signal: st.signal, queueBehind: true },
        )
          .then((lt) => {
            if ((yt.clearDeadline(), yt.superseded)) return;
            re.delete(Ie);
            let Rt = lt.behavior === "cancelled" ? k0e(Ie, nt ? "cancelled" : "deny") : k0e(Ie, lt.behavior);
            if (Rt === "dropped" && lt.behavior === "approve")
              P.replace((to) => [
                ...to,
                Dt(
                  "That held message was NOT delivered: cross-session messaging was turned off (or set to refuse) while the prompt was open, so your approval could not apply \u2014 it was dropped.",
                  "warning",
                ),
              ]);
            if (Rt === "dropped-by-guard")
              P.replace((to) => [
                ...to,
                Dt(
                  "That held message was NOT delivered: this session's inbox guard (per-sender rate limit or queue capacity) had no room for it when you approved, so it was dropped. A sending Claude Code session on this machine is normally told it was dropped; if the message mattered, ask the sender to send it again later.",
                  "warning",
                ),
              ]);
            if (Rt === "gone" && lt.behavior !== "cancelled")
              P.replace((to) => [
                ...to,
                Dt(
                  `That held message was already resolved before your ${lt.behavior === "approve" ? "approval" : "denial"} (released or dropped by a mode/setting change) \u2014 no action taken.`,
                  "warning",
                ),
              ]);
          })
          .catch(() => {
            if ((yt.clearDeadline(), yt.superseded)) return;
            re.delete(Ie), k0e(Ie, nt ? "cancelled" : "deny");
          });
    }
  }),
    X6e((Ie) => {
      ue(Ie, "dropped");
    });
  let de = hm(),
    pe = Cj(() => {
      let Ie = hm();
      if (de && !Ie) for (let He of re.values()) He.rearmDeadline();
      de = Ie;
    });
  Y6e((Ie, He) => {
    for (let Fe of Ie) ue(Fe, "released");
    P.replace((Fe) => [
      ...Fe,
      Dt(
        `Released ${Ie.length} held cross-session ${k(Ie.length, "message")} to Claude's queue (${bOe(He)}).`,
        "warning",
      ),
    ]);
  }),
    G6e(() => {
      let { mode: Ie, isBypassPermissionsModeAvailable: He } = x.getState().toolPermissionContext;
      return { mode: Ie, isBypassPermissionsModeAvailable: He };
    });
  let Re = kl.subscribe(() => {
      oZ("policy-accepts");
    }),
    be = Sm(
      [x],
      () => {
        let { mode: Ie, isBypassPermissionsModeAvailable: He } = x.getState().toolPermissionContext;
        return [Ie, He];
      },
      () => {
        oZ("mode-changed");
      },
    ),
    Pe = Z(),
    Oe = Sm(
      [H],
      () => [Z()],
      (Ie) => {
        if (Pe && !Ie) for (let He of re.values()) He.rearmDeadline();
        Pe = Ie;
      },
    );
  return () => {
    Oe(), be(), Re(), G6e(null), z6e(null), Y6e(null), X6e(null), pe();
  };
}

var yOe = new RegExp(`[\\p{Ps}\\p{Pe}\\p{Pi}\\p{Pf}"'\u2212${wNe}]`, "gu");

function A$(S) {
  return GYe(S)
    .replace(yOe, "")
    .replace(/\p{Pd}/gu, (x) => (x === "-" ? "-" : ""));
}

function SOe(S) {
  let x = S.origin?.kind === "peer" ? S.origin : void 0,
    P = typeof x?.from === "string" && vre(x.from) ? A$(x.from) : "an unidentified session",
    j =
      typeof x?.verifiedPeerPid === "number" && Number.isInteger(x.verifiedPeerPid) && x.verifiedPeerPid > 0
        ? x.verifiedPeerPid
        : void 0,
    H = typeof x?.name === "string" ? A$(QS(x.name)) : "",
    Z =
      typeof x?.body === "string"
        ? x.body
        : typeof S.value === "string"
          ? S.value
          : Array.isArray(S.value) && S.value.length > 0
            ? `Unpreviewable content: ${S.value.length} ${k(S.value.length, "block")}, ~${b(S.value).length} chars. The FULL content is delivered on approve`
            : "",
    re =
      Z.length > 0
        ? Z.split(`
`)
        : [],
    ue = re.map((nt) => A$(nt)),
    de = ue.length,
    pe = Z.length,
    Re = re.some((nt, Pt) => ue[Pt] !== nt),
    be = ue.map((nt) => nt.replace(/\s+/g, " ").trim()).find((nt) => nt !== "") ?? "",
    Pe = LN(ce(be, L3t), Sbn),
    Oe = de > 1 || Re || Pe !== be,
    Ie = Pe,
    He = Oe ? ` \u2026[${de} ${k(de, "line")}, ${pe} chars total \u2014 expand to review before approving]` : "",
    Fe = 8,
    Ve = 72,
    Ke = ue.slice(0, 8).map((nt) => LN(ce(nt, 240), 72)),
    ot = de > 8 || Re || Ke.some((nt, Pt) => nt !== ue[Pt]),
    st =
      Ke.join(`
`) +
      (ot
        ? `
\u2026[${de} ${k(de, "line")}, ${pe} chars total \u2014 full body will be delivered on approve]`
        : "");
  return { address: P, verifiedPeerPid: j, claimedName: H, preview: Ie, previewSummary: He, dialogBody: st };
}

function bOe(S) {
  switch (S) {
    case "mode-changed":
      return "permissions are prompting again";
    case "policy-accepts":
      return "crossSessionInbound now accepts";
    case "approved":
      return "you approved it";
  }
}

function kOe(S) {
  switch (S) {
    case "bypass-default":
      return "It is being reviewed before delivery.";
    case "explicit-setting":
      return 'Your "crossSessionInbound" setting is "hold"; set it to "accept" to deliver held messages.';
    case "managed-setting":
      return `Your organization's managed settings set "crossSessionInbound" to "hold" (your own "accept" cannot override managed policy); ask your admin to change it.`;
    case "repo-setting":
      return `This repository's settings set "crossSessionInbound" to "hold" (a repo may only tighten, so your own "accept" cannot override it); remove the repo setting or exclude it with --setting-sources.`;
    case "invalid-setting":
      return 'A settings file has an unrecognized "crossSessionInbound" value (the settings warning names the file); messages are held while it is present \u2014 set it to "accept", "hold", or "refuse".';
    case "mode-unknown":
      return "It will be delivered once the session finishes starting up.";
    case "mode-mismatch":
      return `The sending session's permission mode class doesn't match this session's. Review it below, or set "crossSessionInbound" to "accept".`;
    case "no-mode-asserted":
      return 'The sender did not attest its permission mode and this session bypasses prompts. Review it below, or set "crossSessionInbound" to "accept".';
  }
}

var COe = 50,
  ese = new WeakMap();

async function vOe(S, x) {
  let P = await S.listEntries({ namespace: "job", jobId: x }, { limit: 1, skipKeyStats: true, skipScopeStats: true });
  if (!P.ok) return { refused: Ge(P.error) };
  return { present: P.value.items.length > 0 || P.value.cursor !== void 0 };
}

function wOe(S, x) {
  let P = ese.get(S);
  if (P === void 0) (P = new Map()), ese.set(S, P);
  let j = P.get(x);
  if (j !== void 0) return j;
  let H = P,
    Z = (ue) => {
      if (!(ue && "present" in ue && ue.present)) H.delete(x);
    },
    re = vOe(S, x);
  return re.then(Z, () => Z()), H.set(x, re), re;
}

function HD(S, x, P, j, H) {
  let Z = false,
    re,
    ue = 0,
    de = false,
    pe,
    Re = false,
    be = false,
    Pe = () => {
      if (H?.deferWhile?.()) {
        if (pe === void 0)
          (pe = setTimeout(() => {
            if (((pe = void 0), !Z)) Pe();
          }, COe)),
            pe.unref();
        return;
      }
      if (Re) {
        be = true;
        return;
      }
      (Re = true),
        Promise.resolve()
          .then(P)
          .catch((Ke) => {
            n(`${j} re-read failed: ${l(Ke)}`, { level: "warn" });
          })
          .finally(() => {
            if (((Re = false), be && !Z)) (be = false), Pe();
          });
    },
    Oe = (Ke) => {
      n(`${j} watch unavailable: ${Ke}`, { level: "warn" });
    },
    Ie = (Ke, ot) => {
      if (Z) return;
      if (Ke.ok) {
        Pe();
        return;
      }
      if (ot !== ue) return;
      if ((n(`${j} watch ended: ${Ge(Ke.error)}`, { level: "warn" }), (re = void 0), de)) {
        ue++;
        return;
      }
      (de = true), He();
    },
    He = () => {
      let Ke = ++ue,
        ot = (st) => {
          if (!st.ok) {
            Oe(Ge(st.error));
            return;
          }
          if (Z || Ke !== ue) {
            st.value.unsubscribe();
            return;
          }
          re = st.value;
        };
      try {
        S.subscribe({ target: "key", key: Dft(x) }, (st) => Ie(st, Ke)).then(ot, (st) => Oe(l(st)));
      } catch (st) {
        Oe(l(st));
      }
    },
    Fe = (Ke) => {
      n(`${j} watch skipped: ${Ke}`);
    };
  return (
    (async () => {
      let Ke;
      try {
        Ke = await wOe(S, x);
      } catch (ot) {
        Fe(l(ot));
        return;
      }
      if (Z) return;
      if ("refused" in Ke) {
        Fe(Ke.refused);
        return;
      }
      if (!Ke.present) {
        Fe("no job directory");
        return;
      }
      He();
    })(),
    () => {
      (Z = true), clearTimeout(pe), re?.unsubscribe(), (re = void 0);
    }
  );
}

function tse({ session: S, storageV5: x, credentials: P, setAppState: j, onYieldedName: H }) {
  let Z = [],
    re = () => {
      for (let ue = Z.length - 1; ue >= 0; ue--) Z[ue]();
    };
  try {
    Z.push(ROe({ session: S, storageV5: x, credentials: P, setAppState: j })),
      Z.push(xOe({ storageV5: x, credentials: P })),
      Z.push(POe({ session: S, storageV5: x, credentials: P, setAppState: j, onYieldedName: H }));
  } catch (ue) {
    throw (re(), ue);
  }
  return re;
}

function ROe({ session: S, storageV5: x, credentials: P, setAppState: j }) {
  if (sn()) return () => {};
  let H = fu(),
    Z = cr(H),
    re,
    ue = async () => {
      if (kBt()) return;
      let be = await fr(Z, x);
      if (!be) return;
      if (
        (j((He) => {
          let Fe = He.standaloneAgentContext,
            Ve = {};
          if (
            be.name &&
            (be.nameSource === "user" || (be.nameSource === "collision" && Us(be.name) === nS()?.name)) &&
            !Fe?.name
          ) {
            let Ke = Us(be.name);
            if (Ke) Ve.name = Ke;
          }
          if (xF(be.color) && !Fe?.color) Ve.color = be.color;
          return Pse(He, Ve);
        }),
        !be.name)
      )
        return;
      let Pe = Us(be.name);
      if (!Pe) return;
      if (Pe === ez() || Pe === Yc(S.id)) return;
      if (be.nameSource === "collision" && Pe !== nS()?.name) {
        n("[jobStateNameSync] ignoring a collision-suffixed name another process wrote to this job");
        return;
      }
      let Oe = be.nameSource ?? "auto";
      await ose(Pe, Oe === "user" ? "peer" : Oe, x, P);
    },
    de = false,
    pe = false,
    Re = async () => {
      if (de) {
        pe = true;
        return;
      }
      de = true;
      try {
        do (pe = false), await ue();
        while (pe);
      } finally {
        de = false;
      }
    };
  if (x && Zt(H)) return HD(x, H, Re, "[jobStateNameSync]", { deferWhile: kBt });
  try {
    (re = _Oe(Z, (be, Pe) => {
      if (Pe && !Pe.startsWith("state.json")) return;
      Re();
    })),
      re.on("error", (be) => n(`[jobStateNameSync] watcher error: ${l(be)}`, { level: "warn" })),
      re.unref();
  } catch (be) {
    return n(`[jobStateNameSync] watch skipped: ${be}`), () => {};
  }
  return Re(), () => re?.close();
}

function xOe({ storageV5: S, credentials: x }) {
  if (sn()) return () => {};
  return (
    SHt((P) => {
      let j = Us(P ?? "");
      if (!j || j === ez()) return;
      ose(j, "peer", S, x);
    }),
    () => SHt(null)
  );
}

function POe({ session: S, storageV5: x, credentials: P, setAppState: j, onYieldedName: H }) {
  let Z = (pe, Re) => {
      let be = Us(pe);
      if (!be || nS()?.name !== pe) return;
      if ((j((Pe) => Pse(Pe, { name: be })), !gl())) {
        if (HPe(S.id, Re, be)) pF(be), QSe(be);
      } else if (HPe(S.id, Re, be)) gSe(be, "collision", x, false, false, P);
      else ZIe(be, "collision", x, void 0, false, void 0, P);
      H?.(be, Re);
    },
    re = ih(),
    ue = x2t();
  if (ue) Z(...ue);
  re.hasAdopter = true;
  let de = re.yielded.subscribe((pe, Re) => {
    x2t(), Z(pe, Re);
  });
  return () => {
    (re.hasAdopter = false), de();
  };
}

function ose(S, x, P, j) {
  return N4e(S, x, P, false, false, j).then(
    () => {},
    (H) => h(H),
  );
}

var I$ = {
    feature_off: "Artifact watching is not available in this build.",
    fetch_gate: "Artifact watching is not available for this session.",
    arm_error: "Could not start the artifact watch.",
  },
  AOe = {
    flag_off: "Artifact watching is not available for this account yet.",
    remote: "Artifact watching isn't supported yet from remote sessions.",
    not_found: "Artifact not found \u2014 it may have been deleted or is not shared with you.",
    other_org:
      "This Artifact is in another of your organizations. Run /login and sign in to that organization to watch it.",
    no_subscription_token: "This artifact cannot be watched from this account.",
    boot_failed: "Could not start the watch for this artifact.",
    cp_override: "Artifact watching is disabled in this environment.",
    egress_denied: "Artifact watching is blocked by this sandbox's network policy.",
    watch_cap: "This session already watches the maximum number of artifacts.",
    ws_open_error: "Could not open the live connection to the artifact. Try again shortly.",
  },
  nse = "The artifact watch on ",
  rse = " could not be restarted \u2014 you are NOT currently watching it.";

function MOe(S) {
  return `${nse}${S}${rse}`;
}

function E$(S, x, P) {
  let j = MOe(x.url),
    H = Math.max(P(j), P(M$)),
    Z = S.metaMessage;
  if (Z !== void 0) {
    let ue = P(Z);
    return ue !== -1 && ue > H ? void 0 : Z;
  }
  let re = P(`The user started this session watching the artifact ${x.url} (via claude --watch-artifact)`);
  if (re !== -1 && re > H) return j;
  return;
}

var M$ =
  "The watch started with claude --watch-artifact earlier in this transcript does not carry into this session \u2014 you are NOT currently watching that artifact. Run claude --watch-artifact again to watch it from here. (Automatic version-change notices may still appear for artifacts this conversation worked on.)";

function D$(S, x, P) {
  for (let j = S.length - 1; j >= 0; j--) {
    let H = S[j];
    if (H.startsWith(M$) || (H.startsWith(nse) && H.includes(rse))) return;
    let Z = /^The user started this session watching the artifact (\S+) \(via claude --watch-artifact\)/.exec(H);
    if (Z !== null && x(Z[1]) && Z[1].toLowerCase() !== P?.toLowerCase()) return M$;
  }
  return;
}

function N$(S) {
  return S.flatMap((x) => Yp(x) ?? []);
}

function ise(S) {
  return (x) => {
    for (let P = S.length - 1; P >= 0; P--) if ((Yp(S[P]) ?? "").startsWith(x)) return P;
    return -1;
  };
}

function L$(S) {
  return jr.test(S.toLowerCase()) || kn(S.toLowerCase()) !== null;
}

async function sse(S) {
  let { target: x, tool: P, commentVerbsInSchema: j, getKnownVer: H, context: Z } = S,
    re = S.arm ?? RZt,
    ue = S.autoReactGate ?? pd,
    de = await re({ slug: x.slug, url: x.url, getKnownVer: H, tool: P, commentVerbsInSchema: j, context: Z });
  if (de.outcome === "skipped")
    return (
      (de.reason === "not_found" ||
        de.reason === "other_org" ||
        de.reason === "boot_failed" ||
        de.reason === "ws_open_error"
        ? p
        : g)("artifact_watch_startup", de.reason),
      { notificationText: AOe[de.reason] ?? `Could not start the artifact watch (${de.reason}).` }
    );
  let pe = P !== void 0 && j && ue() && !Pm(x.slug);
  y("artifact_watch_startup", { already_watching: de.outcome === "already_watching", comments: pe });
  let Re = pe ? "new versions and comments" : "new versions",
    be = cae();
  return {
    notificationText: `${jl} Watching artifact \u2014 you'll be notified about ${Re}.`,
    metaMessage: `The user started this session watching the artifact ${x.url} (via claude --watch-artifact). It is the current artifact of interest. ${be.contentReadsBlocked ?? `Re-read it before editing or republishing (${be.readRemedy}).`} You will be notified when it is republished${pe ? " and when it receives comments" : ""}.`,
  };
}

function ase({ initialMessages: S, transcript: x, store: P, storageV5: j, addNotification: H, artifactMountGate: Z }) {
  let re = S ?? [],
    ue = (Pe) => {
      if (Pe === void 0) return;
      x.replace((Oe) => [...Oe, xe({ content: Pe, isMeta: true })]);
    },
    de = r$n();
  if (de === null) {
    ue(D$(N$(re), L$));
    return;
  }
  if ((ue(D$(N$(re), L$, de.url)), de.autoReactDisarmed)) Tot({ storageV5: j });
  let pe = (Pe) => H({ key: "watch-artifact", kind: "feedback", text: Pe, priority: "immediate" }),
    Re = ise(re),
    be = () => {
      ue(E$({ notificationText: "" }, de, Re));
    };
  Z()
    .then(({ toolUseContext: Pe, allowed: Oe }) => {
      if (!Oe) {
        g("artifact_watch_startup", "fetch_gate"), pe(I$.fetch_gate), be();
        return;
      }
      let Ie = no(Pe.options.tools ?? [], Si);
      return sse({
        target: de,
        ...(Ie !== void 0 && { tool: Ie }),
        commentVerbsInSchema: vA(),
        getKnownVer: () => P1(P.getState(), de.slug),
        context: Pe,
      }).then((He) => {
        try {
          pe(He.notificationText), ue(E$(He, de, Re));
        } catch (Fe) {
          if (!It(Fe)) h(Fe);
        }
      });
    })
    .catch(() => {
      p("artifact_watch_startup", "arm_error"), pe(I$.arm_error);
      try {
        be();
      } catch (Pe) {
        if (!It(Pe)) h(Pe);
      }
    });
}

function lse({ store: S, dialogStore: x, queue: P }) {
  return () => {};
}

function cse({ store: S, setAppState: x, storageV5: P }) {
  return Sm(
    [S],
    () => {
      let { viewingAgentTaskId: j, tasks: H } = S.getState(),
        Z = j ? H[j] : void 0,
        re = Cr(Z) && Z.retain && !Z.diskLoaded;
      return [j, re];
    },
    (j, H) => {
      if (!j || !H) return;
      let Z = j;
      lte(po(Z), P)
        .then((re) => {
          x((ue) => {
            let de = ue.tasks[Z];
            if (!Cr(de) || de.diskLoaded || !de.retain) return ue;
            let pe = ue.transcripts[Z],
              Re = pe?.messages ?? [],
              be = new Set(Re.map((Oe) => Oe.uuid)),
              Pe = re ? re.messages.filter((Oe) => !be.has(Oe.uuid)) : [];
            return (
              Dee(Pe),
              {
                ...ue,
                tasks: { ...ue.tasks, [Z]: { ...de, diskLoaded: true } },
                transcripts: {
                  ...ue.transcripts,
                  [Z]: { inProgressToolUseIDs: new Set(), ...pe, messages: [...Pe, ...Re] },
                },
              }
            );
          });
        })
        .catch(h);
    },
  );
}

function mse() {
  return import.meta.require("/$bunfs/root/chunk-qadpp1g1.js").mcpTaskWatcherModule();
}

class $D {
  session;
  store;
  _setAppState;
  transcript;
  turn;
  draft;
  scope;
  engine;
  dialogStore;
  taskRegistry;
  messageQueue;
  storageV5;
  credentials;
  sessionHooks;
  initialMessages;
  initialMainThreadAgentDefinition;
  _resetReplTabToConvo;
  _resetTurnEventTail;
  _clock;
  _sandbox;
  _spinnerStore;
  _pendingHookMessages;
  _hookMessagesLanded;
  _disposed = false;
  adoptedPrefillRef;
  _adoptedPrefill = void 0;
  _adoptedFrameLive = void 0;
  _host = null;
  _snapshot;
  _changed = Ue();
  constructor({
    session: S,
    store: x,
    setAppState: P,
    transcript: j,
    turn: H,
    draft: Z,
    scope: re,
    engine: ue,
    dialogStore: de,
    taskRegistry: pe,
    messageQueue: Re,
    storageV5: be,
    credentials: Pe,
    sessionHooks: Oe,
    initialMessages: Ie,
    initialMainThreadAgentDefinition: He,
    resetReplTabToConvo: Fe,
    resetTurnEventTail: Ve,
    clock: Ke,
    sandbox: ot,
    spinnerStore: st,
    pendingHookMessages: nt,
  }) {
    (this.session = S),
      (this.store = x),
      (this._setAppState = P),
      (this.transcript = j),
      (this.turn = H),
      (this.draft = Z),
      (this.scope = re),
      (this.engine = ue),
      (this.dialogStore = de),
      (this.taskRegistry = pe),
      (this.messageQueue = Re),
      (this.storageV5 = be),
      (this.credentials = Pe),
      (this.sessionHooks = Oe),
      (this.initialMessages = Ie),
      (this.initialMainThreadAgentDefinition = He),
      (this._resetReplTabToConvo = Fe),
      (this._resetTurnEventTail = Ve),
      (this._clock = Ke),
      (this._sandbox = ot),
      (this._spinnerStore = st),
      (this._pendingHookMessages = nt ?? null),
      (this._hookMessagesLanded = !nt),
      (this._snapshot = { conversationId: dse(), haikuTitle: void 0 });
    let Pt = () => this._adoptedPrefill;
    this.adoptedPrefillRef = {
      get current() {
        return Pt();
      },
    };
  }
  subscribe = this._changed.subscribe;
  getSnapshot = () => this._snapshot;
  _publish(S) {
    let x = this._snapshot,
      P = { ...x, ...S };
    if (P.conversationId === x.conversationId && P.haikuTitle === x.haikuTitle) return;
    (this._snapshot = P), this._changed.emit();
  }
  bindHost(S) {
    this._host = S;
  }
  _requireHost() {
    if (this._host === null) throw Error("SessionController: used before its screen bound a host");
    return this._host;
  }
  _buildIdleToolUseContext() {
    return this.turn.buildToolUseContext(
      this.transcript.getSnapshot(),
      [],
      new AbortController(),
      this._requireHost().mainLoopModel,
    );
  }
  setHaikuTitle = (S) => {
    this._publish({ haikuTitle: S });
  };
  bumpConversationId = () => {
    this._publish({ conversationId: dse() });
  };
  applyConversationReset = (S) => {
    (this.turn.haikuTitleAttempted = false),
      this._publish({ conversationId: S, haikuTitle: void 0 }),
      this.turn.resetSessionSignals(),
      this.turn.clearBackgroundWaitAnchor(),
      this.turn.resetRateLimitAutoContinue(),
      dxt(),
      this._resetTurnEventTail();
  };
  maybePromptStaleResume(S) {
    let { transcript: x, storageV5: P } = this,
      j = gie(S, Ih);
    if (!j) return;
    hie(this.scope.requestDialog, j, {
      getMessageCount: () => x.getSnapshot().length,
      storage: P,
      runCompact: () =>
        void this._requireHost().onSubmit("/compact", {
          setCursorOffset: () => {},
          clearBuffer: () => {},
          resetHistory: () => {},
        }),
    });
  }
  resume = async (S, x, P) => {
    let {
        session: j,
        store: H,
        _setAppState: Z,
        turn: re,
        dialogStore: ue,
        taskRegistry: de,
        scope: pe,
        storageV5: Re,
        credentials: be,
        initialMainThreadAgentDefinition: Pe,
        draft: Oe,
      } = this,
      { mainLoopModel: Ie } = this._requireHost(),
      He = this.transcript.replace,
      Fe = performance.now();
    try {
      iRe(j.host);
      let Ve = { ...x, messages: _ut(x.messages) },
        Ke = Sut(Ve.messages);
      {
        let jt = import.meta.require("/$bunfs/root/chunk-gpgdwqf2.js").matchSessionMode(x.mode);
        if (jt) {
          let Gt = await yK(j.project.originalCwd, [], Re);
          Z((vo) => ({ ...vo, agentDefinitions: Gt })), Ke.push(Dt(jt, "warning"));
        }
      }
      let ot = sGe();
      await ibe(j, "resume", {
        sessionHooks: this.sessionHooks,
        getAppState: () => H.getState(),
        signal: AbortSignal.timeout(ot),
        storageV5: Re,
        credentials: be,
      });
      let st = await eQ(x.projectPath, Re),
        { agentDefinition: nt } = J4(x.agentSetting, Pe, H.getState().agentDefinitions, {
          sessionAgentDefinitions: st,
          sessionCwd: x.projectPath,
          onResolveMiss: (so) => Ke.push(Dt(so, "warning")),
        });
      pe.setMainThreadAgentDefinition(nt), Z((so) => ({ ...so, agent: nt?.agentType }));
      let Pt, kt;
      if (P !== "fork")
        kt = tQ(
          Ke,
          Ie,
          (so) => Ke.push(Dt(so, "warning")),
          (so) => {
            Pt = so;
          },
        );
      dRe(Ke);
      let Ht = await MG(j, P === "fork" ? "fork" : "resume", {
        sessionId: S,
        sessionTitle: x.customTitle,
        agentType: nt?.agentType,
        model: kt ?? Ie,
        resumedMessages: x.messages,
        storageV5: Re,
        credentials: be,
      });
      if ((Ke.push(...EIe(Ke, Ht)), P === "fork")) t_n(x, Gu(S), Re);
      else OLe(x, Gu(S), Re);
      if (x.fileHistorySnapshots) fut(x, Gu(S), Re);
      Z((so) => ({
        ...so,
        standaloneAgentContext: aRe(x.agentName, x.agentColor),
        sendMessagePins: {},
        agentNameRegistry: xrt(so.agentNameRegistry, so.tasks),
      })),
        this.restoreReadFileState(Ke, x.projectPath ?? j.project.originalCwd, P === "fork"),
        re.resetLoadingState(),
        re.setAbortController(null),
        this._publish({ conversationId: S }),
        this._resetTurnEventTail(),
        Iye(void 0, Re);
      let yt = Gu(S),
        lt = Ta(yt);
      if ((Gp(yt, P === "fork" ? "fork" : "resume", x.fullPath ? IOe(x.fullPath) : null), P !== "fork"))
        dr().inheritPredecessorLinks(ohn(yt), x.modified.getTime());
      if (P !== "fork") R$n(x.artifactCommentMonitor, { ...(Re !== void 0 && { storageV5: Re }) });
      if (kt) {
        let so = nQ(Ke, kt, false, Re, be);
        if (so)
          Z((jt) => {
            if (jt.mainLoopModel === so) return jt;
            return ng(j, jt, so, "resume"), { ...jt, mainLoopModel: so };
          });
      }
      rQ(Ke, P === "fork"), Pt?.();
      let { renameRecordingForSession: Rt } = await import("/$bunfs/root/chunk-f9pvzxd5.js");
      if ((await Rt(j, Re), await JL(), P !== "fork"))
        Zet(H.getState, H.setState, ue),
          hEe(),
          tre(),
          this.rehydrateResumedFrameState(Ke),
          JQe(),
          MB(pe.memorySelector);
      if (
        (sRe(Ve, H.setState, this.sessionHooks, { preserveLiveBudget: P === "fork" || P === "rewind_pre_clear" }),
        Wqe(Hte(x), Z),
        Kqe(),
        rH(P === "fork" ? kPe(x, { stripRelocatedCwd: true }) : { ...x, artifactCommentMonitor: void 0 }, {
          taintSid: lt,
          storageV5: Re,
        }),
        P === "fork")
      )
        if (x.precautionarySuppressionHeld) ZL(lt), h9(lt);
        else wUt(lt, Ta(Jc(x)));
      let to = wIe();
      if (to) ZSe(to);
      if ((Zce(x.agentName, Re, { autoOnly: !x.customTitle }), P !== "fork" && x.bridgeSessionId))
        Z((so) =>
          so.replBridgeEnabled && !so.replBridgeOutboundOnly
            ? so
            : { ...so, replBridgeEnabled: true, replBridgeOutboundOnly: false },
        );
      if (((re.haikuTitleAttempted = true), this._publish({ haikuTitle: void 0 }), P !== "fork")) {
        e8t(x.worktreeSession === void 0 ? x.projectPath : x.worktreeSession?.worktreePath, Re);
        let so = SK(dL.of(j.host), x.worktreeSession, x.projectPath, { storageV5: Re });
        if (so) Ke.push(Dt(uRe(so), "warning"));
        if ((this._resetReplTabToConvo(), (pe.isolationLatch.onLatch = void 0), O() && Re !== void 0)) await g9(Re);
        else m9();
        pe.reseatIsolationLatch(x.isolationLatch ?? U4e(Ke, pe.combinedInitialTools));
        {
          let jt = $6e({ ...(Re !== void 0 && { storageV5: Re }) }),
            Gt = [...Aot()];
          if (Gt.length > 0) {
            let qt = Oi();
            Ke.push(Dt(BPn(Gt.map((lo) => ro({ slug: lo, env: qt }))), "warning"));
          }
          let vo = jPn(jt, ZQ);
          if (vo.length > 0) {
            let qt = yt,
              lo = "unknown",
              To,
              ao = 0,
              jo = false;
            try {
              let { listRegisteredSessionRecords: Yt } = await import("/$bunfs/root/chunk-j0bs780t.js"),
                No = await ghe({
                  records: await Yt(),
                  sessionId: qt,
                  selfPid: process.pid,
                  isRunning: ms,
                  isSameProcess: r0,
                });
              (jo = true), (lo = No.verdict), (To = No.holder), (ao = No.otherHolders?.length ?? 0);
            } catch {
              g("artifact_live_subscribe", "holder_probe_failed");
            }
            let Qo = Oi(),
              uo = vo.map((Yt) => ro({ slug: Yt, env: Qo })),
              Pn = Date.now();
            if (lo !== "none" && jo)
              sRt(lo === "live" ? "held_by_live_session" : "holder_unknown", {
                path: "switch",
                probed: jo,
                liveHolder: To,
                otherHolders: ao,
                monitors: vo.length,
                jobStamped: [...jt.values()].some((Yt) => Yt.state === "armed" && Yt.holder === "bg"),
                jobHolder: "none",
                takeover: "not_attempted",
                now: Pn,
              });
            if (lo === "live") Ke.push(Dt(OKt(uo, To !== void 0 ? bot(To, ao, Pn) : void 0), "notice"));
            else Ke.push(Dt(UPn(uo), "notice"));
          }
        }
        if (($3e({ abortController: new AbortController(), taskRegistry: de, storageV5: Re, credentials: be }), zx()))
          mse().restoreMcpTasks({
            taskRegistry: de,
            getMcpClients: () => H.getState().mcp.clients,
            setAppState: Z,
            storageV5: Re,
            credentials: be,
          });
        WO(Ag().map((jt) => jt.id)), Zve(Ke, de, void 0, void 0, Re);
      } else {
        $6e({ ...(Re !== void 0 && { storageV5: Re }) });
        let so = ha();
        if (so) XA(so, Re);
        if (pe.isolationLatch.current) tz(pe.isolationLatch.current, Re);
      }
      {
        let { saveMode: so } = import.meta.require("/$bunfs/root/chunk-nx45wyht.js"),
          { isCoordinatorMode: jt } = import.meta.require("/$bunfs/root/chunk-gpgdwqf2.js");
        so(jt() ? "coordinator" : "normal");
      }
      if ((Jfe(), xye(x), P !== "fork")) pe.reconstructContentReplacementState(Ke, x.contentReplacements ?? []);
      if ((qNt(Ke), UD.of(j).emit(Gu(S)), n7(), He(() => Ke), P !== "fork")) Oe.replaceValue("");
      if (P !== "fork") this.maybePromptStaleResume(Ke);
      s("tengu_session_resumed", {
        entrypoint: c(P),
        success: true,
        resume_duration_ms: Math.round(performance.now() - Fe),
      });
    } catch (Ve) {
      throw (
        (s("tengu_session_resumed", {
          entrypoint: c(P),
          success: false,
          failure_reason: w("processing_error"),
          error_name: Oj(we(Ve)),
        }),
        Ve)
      );
    }
  };
  rehydrateResumedFrameState(S, x = false) {
    let { _setAppState: P } = this;
    dhe(P, nMe() ? w6e(S) : { frameUrls: {}, artifactReadVersions: {}, artifactRefs: [], createdFromType: {} }, {
      legacyConflict: sv(),
      continuesConversation: x,
    });
  }
  restoreReadFileState(S, x, P = false) {
    let { scope: j, turn: H, store: Z } = this;
    j.mergeReadFileStateFrom(S, x),
      H.resetSessionSignals(),
      H.absorbSessionSignals(S),
      this.rehydrateResumedFrameState(S, P),
      Z.setState((re) => w$(S, re));
  }
  start() {
    let S = [],
      x = () => {
        this._disposed = true;
        for (let P = S.length - 1; P >= 0; P--) S[P]();
        Ree.of(this.session).shutdown();
      };
    try {
      this._runStartSteps(S);
    } catch (P) {
      throw (x(), P);
    }
    return x;
  }
  _runStartSteps(S) {
    let { store: x, transcript: P, session: j, storageV5: H } = this;
    S.push(cse({ store: x, setAppState: x.setState, storageV5: H })),
      this._startFeeds(S),
      S.push(
        Ycn(() => {
          let ue = ez();
          if (!ue) return;
          x.setState((de) =>
            de.standaloneAgentContext?.name === ue
              ? de
              : { ...de, standaloneAgentContext: { ...de.standaloneAgentContext, name: ue } },
          );
        }),
      ),
      this._startPendingHookMessages();
    try {
      this.restoreOnMount();
    } catch (ue) {
      h(Error("SessionController.start: restoreOnMount threw", { cause: ue }));
    }
    try {
      this.rearmArtifactLiveOnMount();
    } catch (ue) {
      h(Error("SessionController.start: rearmArtifactLiveOnMount threw", { cause: ue }));
    }
    this.onInit().catch(h);
    let Z = this._sandbox.start();
    if ((S.push(Z.stop), Z.refused)) return;
    let re = Sit.of(j);
    re.registerSetter((ue, de) => BD(x.setState, ue, de)),
      S.push(() => re.unregisterSetter()),
      S.push(
        Sm(
          [x, this.turn],
          () => [x.getState().initialMessage, this.turn.getSnapshot().isLoading],
          (ue, de) => {
            if (ue && !de) this.turn.submitInitial(ue);
          },
        ),
      ),
      zIn(),
      cVn(j),
      ase({
        initialMessages: this.initialMessages,
        transcript: P,
        store: x,
        storageV5: H,
        addNotification: (ue) => this._requireHost().addNotification(ue),
        artifactMountGate: this.artifactMountGate,
      }),
      S.push(this._startUnattendedMonitoringWatch()),
      S.push(
        qie({
          clock: this._clock,
          store: x,
          queue: this.messageQueue,
          taskRegistry: this.taskRegistry,
          dispatchWake: async (ue, de, pe) => {
            await gW({
              agentId: ue,
              prompt: de,
              onDeliveryCommitted: pe,
              promptOrigin: { kind: "task-notification" },
              toolUseContext: this._buildIdleToolUseContext(),
              canUseTool: this._requireHost().canUseTool,
            });
          },
        }),
      ),
      S.push(dr().taskEvicted.subscribe(this._spinnerStore.evict)),
      S.push(kDe.subscribe(this._spinnerStore.applyEvent)),
      S.push(
        Vie({
          taskRegistry: this.taskRegistry,
          getToolUseContext: () => this._buildIdleToolUseContext(),
          getCanUseTool: () => this._requireHost().canUseTool,
          addNotification: (ue) => this._requireHost().addNotification(ue),
        }),
      );
  }
  _startUnattendedMonitoringWatch() {
    if (!wt()) return () => {};
    let { store: S, taskRegistry: x, storageV5: P } = this,
      j = () => {};
    {
      let re = Uq();
      j = B$n(() => {
        let ue = Uq();
        if (ue === re) return;
        if (((re = ue), ue)) this.discloseUnattendedActivity();
      });
    }
    let H = Q(Object.values(S.getState().tasks), MP),
      Z = Sm(
        [S],
        () => [Q(Object.values(S.getState().tasks), MP)],
        (re) => {
          if (re === H) return;
          (H = re), Ate(rv(x.all()), P);
        },
      );
    return () => {
      j(), Z();
    };
  }
  _startFeeds(S) {
    let { store: x, transcript: P, messageQueue: j } = this;
    S.push(
      Zie({
        clock: this._clock,
        store: x,
        transcript: P,
        requestDialog: this.scope.requestDialog,
        visibleDialog: fie(this.dialogStore),
      }),
    ),
      S.push(Xie({ clock: this._clock, transcript: P, queue: j })),
      S.push(Kie({ transcript: P })),
      S.push(
        tse({
          session: this.session,
          storageV5: this.storageV5,
          credentials: this.credentials,
          setAppState: x.setState,
          onYieldedName: (H, Z) => {
            let re = QYt(Z, H);
            if (!gl()) {
              this._requireHost().addNotification({
                key: "session-name-yielded",
                kind: "warning",
                text: re,
                color: "warning",
                priority: "immediate",
                timeoutMs: 15000,
              });
              return;
            }
            P.replace((ue) => [...ue, Dt(re, "notice")]);
          },
        }),
      ),
      S.push(lse({ store: x, dialogStore: this.dialogStore, queue: j })),
      S.push(li().ingress.messageDropped.subscribe((H) => P.replace((Z) => [...Z, Dt(WXn(H), "warning")])));
  }
  _startPendingHookMessages() {
    let S = this._pendingHookMessages;
    if (!S) return;
    S.then((x) => {
      if (this._disposed || this._hookMessagesLanded) return;
      this._landHookMessages(x);
    });
  }
  _landHookMessages(S) {
    if (((this._hookMessagesLanded = true), (this._pendingHookMessages = null), S.length > 0))
      this.transcript.replace((x) => [...S, ...x]);
  }
  awaitPendingHooks = () => {
    let S = this._pendingHookMessages;
    if (this._hookMessagesLanded || !S) return;
    return S.then((x) => {
      if (this._disposed || this._hookMessagesLanded) return;
      this._landHookMessages(x);
    });
  };
  restoreOnMount() {
    let {
      initialMessages: S,
      session: x,
      taskRegistry: P,
      storageV5: j,
      credentials: H,
      store: Z,
      scope: re,
      messageQueue: ue,
    } = this;
    if (S && S.length > 0) {
      if (
        (re.reseatIsolationLatch(Yqe() ?? U4e(S, re.combinedInitialTools)),
        this.restoreReadFileState(S, x.project.originalCwd),
        $3e({ abortController: new AbortController(), taskRegistry: P, storageV5: j, credentials: H }),
        zx())
      )
        mse().restoreMcpTasks({
          taskRegistry: P,
          getMcpClients: () => Z.getState().mcp.clients,
          setAppState: this._setAppState,
          storageV5: j,
          credentials: H,
        });
      if (nl()) {
        let de = cO(),
          pe = zXt(de, {
            waitMs: wt() || !Kh()?.expectHandoff ? 0 : BXt,
            extraShellOutputRoot: (() => {
              let Pe = Kh();
              if (!Pe?.adoptShellOutputRoot) {
                let Oe = dL.of(x.host).last;
                return Oe ? fKe(iyt(Oe.worktreePath)) : void 0;
              }
              return Pe.adoptShellOutputReadRoot
                ? [Pe.adoptShellOutputRoot, Pe.adoptShellOutputReadRoot]
                : Pe.adoptShellOutputRoot;
            })(),
          }),
          Re = Symbol("adopt-consume");
        (this._adoptedPrefill = pe
          .then((Pe) => Pe?.prefill)
          .catch(() => {
            return;
          })),
          (this._adoptedFrameLive = pe
            .then((Pe) => {
              if (Pe?.frameLive === void 0) return;
              if (de !== void 0) YXt(de, Pe.frameLive, Re);
              return { entries: Pe.frameLive, jobDir: de, owner: Re };
            })
            .catch(() => {
              return;
            }));
        let be = new Set();
        (async () => {
          try {
            let Pe = await pe;
            if (Pe) {
              let Oe = new Set(),
                Ie = [],
                He = [...(Pe.agents ?? [])].sort((Ve, Ke) => (Ve.spawnDepth ?? 0) - (Ke.spawnDepth ?? 0));
              for (let Ve of He) {
                if (Ve.parentAgentId !== void 0 && !Oe.has(Ve.parentAgentId)) {
                  Pnt(Ve, "owner not resumed", P, ue),
                    g("task_local_agent", "adopt_owner_skipped", { skipped_kind: c("agent") }),
                    n(`[adopt] agent ${Ve.agentId} skipped: parent ${Ve.parentAgentId} not registered`, {
                      level: "warn",
                    });
                  continue;
                }
                try {
                  let Ke = await eYt(Ve, { storageV5: j });
                  qqn({ ...Ve, forkedSkillName: Ve.forkedSkillName ?? Ke.forkedSkillNameFromSidecar }, P),
                    Oe.add(Ve.agentId),
                    Ie.push(Ve);
                } catch (Ke) {
                  let ot = iYt(Ve);
                  if (ot.emit) {
                    if ((Pnt(Ve, "transcript link failed", P, ue), ot.excludeFromReconcile)) be.add(Ve.agentId);
                  }
                  g("task_local_agent", "adopt_link_failed"),
                    n(`[adopt] agent ${Ve.agentId} skipped: ${Ke}`, { level: "warn" });
                }
              }
              for (let Ve of Pe.shells) {
                if (Ve.agentId !== void 0 && !Oe.has(Ve.agentId)) {
                  nYt(Ve),
                    g("task_local_agent", "adopt_owner_skipped", { skipped_kind: c("shell") }),
                    n(`[adopt] shell ${Ve.taskId} skipped: owner ${Ve.agentId} not registered`, { level: "warn" });
                  continue;
                }
                try {
                  await tV(Ve.taskId, Ve.outputPath, (Ke) =>
                    s("tengu_adopt_link", { kind: w("shell"), method: c(Ke) }),
                  ),
                    Gqn(
                      {
                        taskId: Ve.taskId,
                        command: Ve.command,
                        description: Ve.description,
                        lastReportedTotalLines: Ve.lastReportedTotalLines,
                        toolUseId: Ve.toolUseId,
                        kind: Ve.kind,
                        agentId: Ve.agentId,
                        shellCommand: new T$({
                          taskId: Ve.taskId,
                          pid: Ve.pid,
                          procStart: Ve.procStart,
                          startTimeTicks: Ve.startTimeTicks,
                        }),
                      },
                      P,
                    );
                } catch (Ke) {
                  n(`[adopt] shell ${Ve.taskId} skipped: ${Ke}`, { level: "warn" });
                }
              }
              sYt(
                Pe.cron.filter((Ve) => {
                  if (Ve.agentId !== void 0 && !Oe.has(Ve.agentId))
                    return g("task_local_agent", "adopt_owner_skipped", { skipped_kind: c("cron") }), false;
                  return true;
                }),
                Pe.loopWakeFires,
              );
              let Fe = [];
              for (let Ve of Pe.workflows ?? []) {
                let Ke;
                try {
                  (Ke = { ...Ve, scriptPath: oYt(Ve.scriptPath) }), await rYt(Ke), ytn(Ke, P), Fe.push(Ke);
                } catch (ot) {
                  if (Ke === void 0) {
                    let { scriptPath: st, ...nt } = Ve;
                    Int(nt, "adopt scriptPath rejected", ue),
                      g("task_local_workflow", "adopt_scriptpath_rejected"),
                      n(`[adopt] workflow ${Ve.taskId} skipped: scriptPath rejected`, { level: "warn" });
                  } else
                    Int(Ke, ot instanceof Error ? ot.message : "transcript link failed", ue),
                      g("task_local_workflow", "adopt_link_failed"),
                      n(`[adopt] workflow ${Ve.taskId} skipped: ${ot}`, { level: "warn" });
                }
              }
              if (de !== void 0) VXt(de, Ie, Fe, Re);
              this.resumeAdoptedAgents(Ie, Fe, de, Re);
            }
          } finally {
            await Zve(S, P, (Pe) => this.resumeOrphanedAgents(Pe, de), be, j);
          }
        })();
      } else Zve(S, P, void 0, void 0, j);
      if (Z.getState().initialMessage === null) this.maybePromptStaleResume(S);
    }
  }
  resumeAdoptedAgents(S, x, P, j) {
    let { store: H, taskRegistry: Z, storageV5: re, messageQueue: ue } = this;
    _$(H, uHt, { timeoutMs: Cge / 4 })
      .then(() => {
        if (!nl() || cO() !== P) {
          n("[adopt] deferred resume skipped: takeover released or replaced during MCP-settle wait");
          return;
        }
        if (P !== void 0 && (S.length > 0 || x.length > 0)) {
          let pe = KXt(P, j);
          if (pe.agents.length === 0 && pe.workflows.length === 0) {
            n("[adopt] deferred resume skipped: parked entries already taken by the exit handoff or a later consume");
            return;
          }
        }
        let { canUseTool: de } = this._requireHost();
        for (let pe of x)
          xUn({
            taskId: pe.taskId,
            workflowRunId: pe.workflowRunId,
            scriptPath: pe.scriptPath,
            scriptSha256: pe.scriptSha256,
            argsJson: pe.argsJson,
            startTime: pe.startTime,
            toolUseContext: this._buildIdleToolUseContext(),
            canUseTool: de,
          })
            .then(() => {
              Ate(rv(Z.all()), re);
            })
            .catch((Re) => {
              Z.remove(pe.taskId),
                Int(pe, Re instanceof Error ? Re.message : "resume failed", ue),
                g("task_local_workflow", "adopt_resume_failed"),
                h(Re);
            });
        for (let pe of S)
          gW({
            agentId: pe.agentId,
            prompt: pe.description ?? "(resumed agent)",
            continueInterruptedTurn: true,
            toolUseContext: this._buildIdleToolUseContext(),
            canUseTool: de,
          })
            .then((Re) => {
              if (!Re.alreadyCompleted) Ate(rv(Z.all()), re);
            })
            .catch((Re) => {
              if (
                (Z.remove(pe.agentId),
                Pnt(pe, "resume failed", Z, ue),
                g("task_local_agent", "adopt_resume_failed"),
                Re instanceof fd)
              ) {
                n(`[adopt] agent ${pe.agentId} resume skipped: ${Re.message}`, { level: "warn" });
                return;
              }
              h(Re);
            });
      })
      .catch(h);
  }
  resumeOrphanedAgents(S, x) {
    let { store: P, taskRegistry: j, storageV5: H } = this;
    _$(P, uHt, { timeoutMs: Cge / 4 })
      .then(() => {
        if (!nl() || cO() !== x) {
          n("[orphan-resume] deferred auto-resume skipped: takeover released or replaced during MCP-settle wait");
          return;
        }
        let { canUseTool: Z } = this._requireHost();
        for (let re of S)
          gW({
            agentId: re.agentId,
            prompt: re.description,
            continueInterruptedTurn: true,
            toolUseContext: this._buildIdleToolUseContext(),
            canUseTool: Z,
            isWebFetchLaunch: re.isWebFetchLaunch,
          })
            .then((ue) => {
              if (ue.alreadyCompleted) {
                VPn({ ...re, outputFile: re.outputFile ?? ue.outputFile }, j);
                return;
              }
              zPn(re), Ate(rv(j.all()), H);
            })
            .catch((ue) => {
              if ((g("task_local_agent", "orphan_auto_resume_failed"), KPn(re, l(ue)), ue instanceof fd)) {
                n(`[orphan-resume] agent ${re.agentId} auto-resume failed: ${ue.message}`, { level: "warn" });
                return;
              }
              h(ue);
            });
      })
      .catch(h);
  }
  artifactMountGate = async () => {
    await mh().catch(() => null);
    let S = this.turn.buildToolUseContext(
        this.initialMessages ?? [],
        [],
        new AbortController(),
        this._requireHost().mainLoopModel,
      ),
      x = await m4e(S.options.tools, this.store.getState().toolPermissionContext, { promptless: true });
    return { toolUseContext: S, allowed: x };
  };
  discloseUnattendedActivity = (S) => {
    let { taskRegistry: x } = this,
      P = this.transcript.replace,
      j = Hot();
    if (j.total === 0) return;
    let H = Object.values(x.all()).filter(MP),
      Z = Oi(),
      re = [...j.bySlug.keys()]
        .map((Re) => ({ slug: Re, url: ro({ slug: Re, env: Z }) }))
        .filter(({ slug: Re, url: be }) => kn(be)?.slug === Re)
        .map(({ url: Re }) => Re),
      ue = j.bySlug.size === 1 && re.length === 1 ? ` on ${re[0]}` : "",
      de = Nh("chat:killAgents", "Chat", "ctrl+x ctrl+k"),
      pe =
        H.length > 0 || S?.willRearm === true || _he().size > 0
          ? ` To turn off automatic replies, stop the Artifact comment monitor task, or press ${de} twice to turn them off for this session.`
          : "";
    P((Re) => [...Re, xot(j.total, { where: ue, stop: pe })]);
  };
  rearmArtifactLiveOnMount() {
    let { store: S, taskRegistry: x, storageV5: P } = this;
    LKt(
      { initialMessages: this.initialMessages, startupWatchSlug: o$n()?.slug, storageV5: P },
      {
        publishContext: wt() ? "bg_session" : "interactive",
        ui: "repl",
        emit: (j) => this.transcript.replace((H) => [...H, ...j]),
        killChord: () => Nh("chat:killAgents", "Chat", "ctrl+x ctrl+k"),
        gate: this.artifactMountGate,
        readFrameState: () => {
          let j = S.getState();
          return { artifactRefs: j.artifactRefs, artifactReadVersions: j.artifactReadVersions, frameUrls: j.frameUrls };
        },
        getKnownVer: (j) => P1(S.getState(), j),
        commentsGateOpen: () => import.meta.require("/$bunfs/root/chunk-5p4fbxb5.js").artifactCommentsPromptGateOpen(),
        mayRequestTakeover: () => n8(),
        jobHolderVerdicts: Sie,
        carried: {
          adopted: this._adoptedFrameLive?.then((j) => {
            if (j === void 0) return;
            let { entries: H, jobDir: Z, owner: re } = j;
            return {
              entries: H,
              park:
                Z === void 0
                  ? void 0
                  : { take: () => JXt(Z, re), repark: (ue) => QXt(Z, ue, re), release: (ue) => ZXt(Z, ue, re) },
            };
          }),
          discloseUnattended: (j) => this.discloseUnattendedActivity(j),
          onCarriedArmed: () => {
            if (wt()) Ate(rv(x.all()), P);
          },
        },
      },
    );
  }
  rewindConversationTo(S, x) {
    let { session: P, transcript: j, scope: H, store: Z, turn: re } = this,
      ue = j.getSnapshot(),
      de = ue.lastIndexOf(S);
    if (de === -1) return;
    let pe = ue.slice(0, de),
      Re = ue.slice(de);
    hle(Ep(), "rewind"), t1n(x);
    let be = Wie({
      keptMessages: pe,
      slicedMessages: Re,
      currentOverride: nc(),
      latchActive: EU() || sie(),
      firstParty: ra(),
      initialModel: CR(),
    });
    if ((H.evictRewoundFileTracking(O3n(Re)), x !== "auto_restore_cancel")) MB(H.memorySelector);
    if (
      (s("tengu_conversation_rewind", {
        preRewindMessageCount: ue.length,
        postRewindMessageCount: de,
        messagesRemoved: ue.length - de,
        rewindToMessageIndex: de,
        source: c(x),
      }),
      YB("rewind"),
      j.replace(pe),
      iie(zsn(pe)),
      this.bumpConversationId(),
      this._resetTurnEventTail(),
      re.clearBackgroundWaitAnchor(),
      Kkn(),
      be)
    ) {
      if (be.clearLatch) y0n();
      if (be.model.action === "restore") dd(be.model.value);
      s("tengu_refusal_fallback_rewind_unwind", {
        action: c(
          be.model.action === "restore"
            ? "model_restored"
            : be.model.reason === "not_first_party"
              ? "model_kept_3p"
              : "model_kept_writer_mismatch",
        ),
        ...(be.model.action === "restore" && { restored_from: c(be.model.restoredFrom) }),
        latch_cleared: be.clearLatch,
        banners_sliced: be.bannersSliced,
        model_scope: c(lM(be.lastSlicedFallbackModel)),
        source: c(x),
      });
    }
    let Pe = be && be.model.action === "restore" ? { mainLoopModel: be.model.value } : void 0,
      Oe = Z.getState().fastMode,
      Ie = Pe && Yr() ? dw(Pe.mainLoopModel, Oe) : void 0,
      He = x === "auto_restore_cancel" ? null : gFn(pe, sv(), nMe());
    if (
      (Z.setState((Fe) => ({
        ...(x === "auto_restore_cancel" ? Fe : w$(pe, Fe)),
        ...He,
        ...Pe,
        ...(Ie !== void 0 && { fastMode: Ie }),
        toolPermissionContext:
          S.permissionMode && Fe.toolPermissionContext.mode !== S.permissionMode
            ? { ...Fe.toolPermissionContext, mode: S.permissionMode }
            : Fe.toolPermissionContext,
        promptSuggestion: { status: "empty" },
      })),
      Ie !== void 0)
    )
      pw(Oe, Ie);
    y("repl_rewind_conversation");
  }
  restoreMessageSync = (S, x) => {
    let { _setAppState: P, draft: j } = this;
    this.rewindConversationTo(S, x);
    let H = vun(S);
    if (H) j.replaceValue(H.text), j.setMode(H.mode);
    if (Array.isArray(S.message.content) && S.message.content.some((Z) => Z.type === "image")) {
      let Z = S.message.content.filter((re) => re.type === "image");
      if (Z.length > 0) {
        let re = {},
          ue = {};
        Z.forEach((Pe, Oe) => {
          if (Pe.source.type === "base64") {
            let Ie = S.imagePasteIds?.[Oe],
              He = Ie ?? Oe + 1,
              Fe = Ie !== void 0 ? re : ue;
            Fe[He] = { id: He, type: "image", content: Pe.source.data, mediaType: Pe.source.media_type };
          }
        });
        let de = yee({ display: H?.text ?? "", pastedContents: ue, allowCurrentEpochSkip: false }),
          pe = yee({ display: de.display, pastedContents: re, allowCurrentEpochSkip: true }),
          Re = { ...de.pastedContents, ...pe.pastedContents };
        if (H && pe.display !== H.text) j.replaceValue(pe.display);
        let be = p6(P, "storedImagePaths");
        for (let Pe of Object.values(Re)) if (re[Pe.id] === void 0 && ue[Pe.id] === void 0) xZ(Pe, be), IZ(Pe, be);
        j.setPastedContents(Re);
      }
    }
  };
  handleRestoreMessage = async (S, x) => {
    setImmediate((P, j, H) => P(j, H), this.restoreMessageSync, S, x);
  };
  handleSummarize = async (S, x, P = "from") => {
    let { transcript: j, turn: H, _setAppState: Z, draft: re } = this,
      { mainLoopModel: ue, addNotification: de } = this._requireHost(),
      pe = j.replace,
      Re = il(j.getSnapshot()),
      be = Re.indexOf(S);
    if (be === -1) {
      pe((Ke) => [
        ...Ke,
        Dt("That message is no longer in the active context. Choose a more recent message.", "warning"),
      ]);
      return;
    }
    let Pe = gr(),
      Oe = H.buildToolUseContext(Re, [], Pe, ue),
      Ie = await Prt({
        toolUseContext: Oe,
        forkContextMessages: Re,
        mainThreadAgentDefinition: this.scope.mainThreadAgentDefinition,
      }),
      He = await fGn(Re, be, Oe, Ie, {
        userFeedback: x,
        direction: P,
        onNotification: de,
        onResponseLength: H.stream.onResponseLength,
      }),
      Fe = U3n(He, P);
    if (Nt() && P === "from")
      pe((Ke) => {
        let ot = Ke.findIndex((st) => st.uuid === S.uuid);
        return [...Ke.slice(0, ot === -1 ? 0 : ot), ...Fe];
      });
    else pe(Fe);
    if (
      (Z((Ke) => aRt(Ke, j.getSnapshot())),
      this.bumpConversationId(),
      YG(Oe.session, Oe.options.querySource, Z, void 0, void 0, void 0, Oe.storageV5),
      P === "from")
    ) {
      let Ke = vun(S);
      if (Ke) re.replaceValue(Ke.text), re.setMode(Ke.mode);
    }
    let Ve = Nh("app:toggleTranscript", "Global", "ctrl+o");
    de({
      key: "summarize-ctrl-o-hint",
      kind: "contextual",
      text: `Conversation summarized (${Ve} for history)`,
      priority: "medium",
      timeoutMs: 8000,
    });
  };
  async onInit() {
    let { session: S, scope: x, engine: P, storageV5: j, credentials: H } = this;
    x.apiKeyVerification.verify({ credentials: H, storageV5: j });
    let Z = gH() ? [] : await J_(S, false, j, H);
    if (Z.length > 0) {
      let ue = Z.map(
        (de) =>
          `  [${de.type}] ${de.path} (${de.content.length} chars)${de.parent ? ` (included by ${de.parent})` : ""}`,
      ).join(`
`);
      n(`Loaded ${Z.length} CLAUDE.md/rules files:
${ue}`);
    } else n("No CLAUDE.md/rules files found");
    let re = await Promise.all(
      Z.filter((ue) => !FPe(ue.path)).map(async (ue) => {
        let de = dGe(ue),
          pe = await hGn(ue, de, j);
        return { file: ue, injected: de, seedTs: pe };
      }),
    );
    for (let { file: ue, injected: de, seedTs: pe } of re)
      x.seedMemoryFile(ue.path, {
        content: ue.contentDiffersFromDisk ? (ue.rawContent ?? ue.content) : QE(ue.content),
        timestamp: pe,
        offset: void 0,
        limit: void 0,
        isPartialView: ue.contentDiffersFromDisk,
        seededFromContext: de,
        ...(!de && { contentNotInModelContext: true }),
        keepContent: true,
      }),
        P.seedReadState(ue.path, pe);
  }
}

class WD {
  #e;
  constructor(S) {
    this.#e = S;
  }
  start() {
    let { store: S, setAppState: x, isRemoteSession: P } = this.#e,
      j = pt.getSandboxUnavailableReason();
    if (j && pt.isSandboxRequired())
      return (
        process.stderr.write(
          `
Error: sandbox required but unavailable: ${j}
` +
            `  sandbox.failIfUnavailable is set \u2014 refusing to start without a working sandbox.

`,
        ),
        Jr(1, "other"),
        { stop: () => {}, refused: true }
      );
    if (j) n(`sandbox disabled: ${j}`, { level: "warn" });
    let H = j ? void 0 : pt.getMaskCredentialWarning();
    if (H) n(`sandbox: ${H}`, { level: "warn" });
    if (j || H)
      YC("sandbox", 1),
        x((re) => {
          if (re.setupIssues.sandboxIssueCount === 1) return re;
          return { ...re, setupIssues: { ...re.setupIssues, sandboxIssueCount: 1 } };
        });
    if (P) return { stop: () => {}, refused: false };
    return {
      stop: Sm(
        [S],
        () => [pt.isSandboxingEnabled()],
        (re) => {
          if (!re) return;
          pt.initialize(this.ask).catch((ue) => {
            process.stderr.write(`
\u274C Sandbox Error: ${l(ue)}
`),
              Jr(1, "other");
          });
        },
      ),
      refused: false,
    };
  }
  ask = async (S) => {
    let {
        store: x,
        setAppState: P,
        storageV5: j,
        credentials: H,
        scope: Z,
        getMessages: re,
        networkPrompts: ue,
      } = this.#e,
      de = x.getState(),
      { mode: pe, isBypassPermissionsModeAvailable: Re } = de.toolPermissionContext;
    switch (e1e(pe, Re)) {
      case "allow":
        return true;
      case "deny":
        return false;
      case "classify":
        return Z.sandboxClassifierVerdicts().getOrClassify(S.host, S.port, Qve(re()), () =>
          eDe(S.host, S.port, re(), Z.computeTools(), de.toolPermissionContext, new AbortController().signal, {
            isSubagentLoop: sP(void 0),
            recordPresumed: true,
            storageV5: j,
            credentials: H,
          }),
        );
      case "ask":
        break;
    }
    if (io() && eHe()) {
      if (zD(S.host))
        return (
          n(
            `[sandbox] Refusing to forward a worker ask for a host srt would re-spell: ${BG(S.host) ?? "(unshowable)"}`,
            { level: "warn" },
          ),
          false
        );
      let Pe = ZUn();
      if (!(await eBn(S.host, Pe, void 0, j))) return ue.ask(S, { forwardToBridge: false });
      return new Promise((Ie) => {
        KUn({ requestId: Pe, host: S.host, resolve: Ie }),
          P((He) => ({ ...He, pendingSandboxRequest: { requestId: Pe, host: S.host } }));
      });
    }
    return ue.ask(S);
  };
}

function O$({
  exitFlowActive: S,
  isPromptInputActive: x,
  hasBlockingToolProgress: P,
  hasLocalJsxPanel: j,
  hasElicitationRequest: H,
  leftArrowConfirmOpen: Z,
  isLoading: re,
  isBgSession: ue,
  hasEffortMediumNudge: de,
  hasOpenDialog: pe,
}) {
  if (S) return;
  if (x) return;
  let Re = !P && !j,
    be = Re && !pe;
  if (Z) return;
  if (Re && H) return "elicitation";
  if (ue) return;
  if (be && !re && de) return "effort-medium-nudge";
  return;
}

F();

export { $D, $x, BD, Bb, Fb, Fx, Gd, HD, Hx, ID, Iv, LD, Lie, Lx, ND, O$, Rg, UD, Ux, WD, Wx, _ie, c$, cie, g$, h$, jx, l$, m$, y$ };
