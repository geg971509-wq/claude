// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $5, $Re, $n, A, A5n, AKn, Aa, Ae, Ait, Aje, At, B, B9n, BC, C, CS, CSe, Cr, DNt, Da, Dd, Dt, E5n, EM, E_, Ee, Eit, Ex, F, FR, Fke, G$e, Gh, Got, Gye, H0t, Hl, Hme, IGe, ISn, IYt, Ite, Iu, Iye, JIn, Jdt, Jp, K, K0, KBt, KGe, Kce, Kf, Kot, Kut, L4e, Lh, Ln, Lrt, Lse, Lt, M0n, Mde, Mge, Mke, Msn, NEe, NK, NKt, NRe, Nke, Nt, O, OG, Oa, Oc, Omt, Or, Ot, P0, P9t, Pje, Q6e, Q8, QC, Qm, Qp, R$e, RG, RKn, RMe, RV, Rbe, Rit, Rje, Rr, Rx, S2e, SNn, Sf, Sse, T5n, T9, TQ, TUt, Ta, Tge, Tit, Tme, Trt, Tze, U, UFt, UXt, Ue, Un, V$e, V6e, V8, VI, VNn, Vf, Vgt, Vj, Vn, W, W$e, W7, WIe, We, Wt, Wzn, XBt, XSe, XV, Xce, Xe, Xh, Xn, Xqe, YSe, YW, Ybe, Yge, Yn, Yo, Yr, Yse, Z0e, Z6e, ZL, Zde, Ze, Zle, Zo, _, _1, _8e, _De, _i, a, aNn, aPn, ac, ad, aer, art, at, au, b, b2e, br, c, cPn, ce, cer, cet, ch, ci, cmt, cne, ct, d7e, d8e, dOe, dT, da, dd, det, dje, drt, dsn, dw, e, e1n, eHe, eIe, ee, ei, eje, el, ene, et, f2t, f8e, fet, fje, fr, fre, ft, fu, fv, g, gW, gan, ge, gl, gr, gz, h, h9, hIe, hJt, hSt, hW, hX, ha, hd, he, hn, iUn, io, j$e, j7, j9n, jNn, jU, jZe, jc, ji, jp, js, k1, k3n, kVe, ke, kje, kr, ks, kv, l, lMe, lPn, lT, lmt, m7, m7e, mL, mSt, mW, mY, man, mbe, mce, mje, mnt, mq, mu, n, nA, nRe, ng, nqe, o, oDe, oxt, oz, p, p8e, pMe, pet, pf, pje, pw, qbe, r, r5e, rH, rN, rRe, rW, rZ, rg, rq, rte, s, s0t, sc, sd, sl, sm, sn, ste, sze, t, tPt, tb, u, u2, ua, uet, uje, urt, uz, v0e, vce, vje, vse, vt, w, w4, wBt, wF, we, wk, wke, wt, x_, xe, xje, xp, xs, xt, y, y8e, yD, z, z$e, z8, zZe, zpt } from "/$bunfs/root/modules/chunk-rce59kvp/prelude.js";
import { _b, lx, mD } from "/$bunfs/root/modules/chunk-rce59kvp/module-001.js";
import { Rg, UD } from "/$bunfs/root/modules/chunk-rce59kvp/module-002.js";
import { $b, Ew, Hk, Tce, Zd, jy } from "/$bunfs/root/modules/chunk-rce59kvp/module-003.js";
import { R_e, _I } from "/$bunfs/root/modules/chunk-rce59kvp/module-005.js";

F();

function L_e(S, x) {
  A(() => {
    if (!S) return;
    function P(j) {
      let H = x();
      if (!H) return;
      let Z = nRe(j);
      if (Z) W$e(H, Z);
    }
    return z8(P);
  }, [S, x]);
}

function O_e(S) {
  (S ? Promise.resolve(0) : iUn())
    .then((x) => {
      if (x >= 2) p("bridge_repl", "multi_session_crash", { concurrent_bridge_sessions: x });
    })
    .catch(() => {});
}

var yHo = import.meta.require("/$bunfs/root/chunk-gpgdwqf2.js");

function Ort() {
  return import.meta.require("/$bunfs/root/chunk-qadpp1g1.js");
}

function IB() {
  return Ort().mcpAuthModule();
}

var Frt = 1e4;

function F_e(S) {
  try {
    let x = NEe().filter(hSt).map(j$e);
    if (x.length > 0) S.writeSdkMessages(x);
  } catch (x) {
    n(`[bridge:repl] queued SDK event forward failed: ${l(x)}`, { level: "error" });
  }
}

function B_e(S, x) {
  return !x && !S.outboundOnly && ISn((P) => P.type === "conversation_reset");
}

var O9 = "\x00baseline-pending",
  Brt = 10;

function Urt(S, x) {
  let P = Ex(S);
  if (!P) return null;
  let j = ua(P.commandName, x);
  if (!j || !Kce(j, P.args)) return null;
  let H = j.type === "local" && oDe(j) ? j : Rbe(j);
  if (!H || H.type !== "local") return null;
  return { target: H, args: P.args, displayName: ei(j) };
}

var jrt = 3;

function H_e(S, x, P, j, H, Z, re, ue, de, pe, Re) {
  let { storageV5: be, credentials: Pe } = ge(),
    Oe = Iu(),
    Ie = ct(),
    He = xt(),
    Fe = br(P),
    Ve = C(null),
    Ke = B(() => Ve.current, []);
  A(
    () => (
      (dT.of(Ie).remoteBridgeLive = () => Ve.current !== null),
      () => {
        dT.of(Ie).remoteBridgeLive = null;
      }
    ),
    [Ie],
  );
  let ot = C(void 0),
    st = C(null),
    nt = C(null),
    Pt = C(new WeakSet()),
    kt = C(0),
    Ht = C(new Set()),
    yt = C(new Map()),
    lt = C({}),
    Rt = C(false),
    to = C(false),
    so = C(false),
    jt = C(void 0);
  A(() => (TUt(() => ({ foreign: Rt.current || so.current, boundSid: jt.current })), () => TUt(void 0)), []);
  let Gt = C(void 0),
    vo = C(0),
    qt = C(void 0),
    lo = C(void 0),
    To = C(false),
    ao = C(void 0),
    jo = C(false);
  A(
    () =>
      $5(() => {
        if (Ve.current) jo.current = true;
      }),
    [],
  );
  let Qo = C(false),
    uo = C(a.CLAUDE_BRIDGE_REATTACH_SESSION !== void 0),
    Pn = C(void 0),
    Yt = C(void 0),
    No = C(void 0),
    cn = C(void 0),
    tn = C(void 0),
    nn = C(void 0),
    pn = C(void 0),
    Go = C(void 0),
    Oo = C(void 0),
    xo = C(false),
    dn = C(void 0),
    Xo = C(void 0),
    zo = C(0),
    en = C(0),
    un = C(0),
    Uo = C(void 0);
  function Rn({ archiveAbandoned: Mo }) {
    (qt.current = void 0),
      (lo.current = void 0),
      (Pn.current = void 0),
      (Yt.current = void 0),
      (No.current = void 0),
      (cn.current = void 0),
      (tn.current = void 0),
      (Uo.current = void 0),
      (ao.current = void 0);
    let Qt = nn.current;
    if (((nn.current = void 0), !Qt)) return false;
    if (Mo) return Qt.fire().finally(() => Qt.unregister()), true;
    return Qt.unregister(), false;
  }
  let mr = C([]);
  function Pr() {
    for (let Mo of mr.current) u2(Mo.sessionId, Mo.path, { targetExists: true }, be);
    mr.current = [];
  }
  let Ir = At(),
    An = br(() => j),
    Wr = br(() => H),
    Kn = br((Mo) => {
      if (!de) return false;
      let Qt = Urt(Mo, j);
      if (!Qt) return false;
      return (
        s("tengu_immediate_command_executed", { commandName: Qt.displayName, fromKeybinding: false, bridgeOrigin: true }),
        de(Qt.target, Qt.args, Qt.displayName),
        true
      );
    }),
    Tn = Xn(),
    tr = Vf(),
    { addNotification: hi, removeNotification: ti } = Or(),
    pr = W((Mo) => Mo.replBridgeEnabled),
    Wn = W((Mo) => Mo.replBridgeConnected),
    yi = W((Mo) => Mo.mcp.commands),
    Ki = W((Mo) => Mo.replBridgeSessionActive),
    Wi = W((Mo) => Mo.replBridgeError),
    Rs = W((Mo) => Mo.replBridgeErrorKind),
    us = W((Mo) => Mo.authChangeGeneration),
    Xr = W((Mo) => Mo.replBridgeOutboundOnly),
    as = W((Mo) => Mo.replBridgeInitialName),
    Li = W((Mo) => Mo.replBridgeSessionGroupingId),
    Bs = W((Mo) => Mo.toolPermissionContext.mode),
    Pl = W((Mo) => Mo.fastMode),
    Hr = Kf(),
    [, $i] = fv((Mo) => Mo + 1, 0),
    Zi = Wn && !Xr,
    Ca = Zi ? hW(at(), Hr) : null,
    [va, qo] = u(() => process.env.CLAUDE_BG_SOURCE === "spare");
  if (va && S.some(RV)) qo(false);
  A(() => (r5e(kVe), () => r5e(void 0)), []),
    A(() => {
      if (sn() || va) return;
      s("tengu_bridge_repl_evaluated", { would_auto_on: d8e(), repl_bridge_enabled: Tn.getState().replBridgeEnabled });
    }, [Tn, va]);
  let jn = br(() => {
    let Mo = Ve.current;
    if (!Mo) return;
    (async () => {
      try {
        let Qt = await vce(ee(), be),
          Jo = Tn.getState(),
          lr = performance.now(),
          Nn = uet({
            model: at(),
            permissionMode: Jo.toolPermissionContext.mode,
            commands: An(),
            agents: Jo.agentDefinitions.activeAgents,
            loadedSkills: Qt,
            mcpCommands: Jo.mcp.commands,
            fastMode: Jo.fastMode,
            effortValue: sl(Jo),
          });
        jZe(Nn, lr), Mo.writeSdkMessages([Nn]);
      } catch (Qt) {
        n(`[bridge:repl] Failed to send system/init: ${l(Qt)}`, { level: "error" });
      }
    })();
  });
  return (
    A(() => {
      if (!Zi) return;
      jn();
    }, [Zi, H, Bs, Pl, Ca, yi, j]),
    A(() => {
      if (!Zi) return;
      k1(at(), Tn.getState().sessionEffort);
    }, [Zi, Ca, Tn]),
    A(() => {
      if (!Zi) return;
      let Mo = RMe(() => {
          jn();
        }),
        Qt = DNt(() => {
          jn();
        });
      return () => {
        Mo(), Qt();
      };
    }, [Zi]),
    A(() => {
      if (!pr || sn() || va) return;
      let Mo = Xr;
      if (!Mo)
        ti(FR),
          Ir((Fr) =>
            Fr.replBridgeError === void 0 ? Fr : { ...Fr, replBridgeError: void 0, replBridgeErrorKind: void 0 },
          );
      let Qt = Tn.getState().replBridgeExplicit,
        Jo = uo.current;
      function lr(Fr, ai = false) {
        if ((n(`[bridge:repl] notifyBridgeFailed detail="${Fr}" outboundOnly=${Mo} wasConnected=${ai}`), Mo)) return;
        hi({
          key: FR,
          kind: "warning",
          segments: [
            { text: `Remote Control ${ai ? "disconnected" : "failed"}`, color: "error" },
            { text: ` \xB7 ${Fr || "/remote-control"}`, dim: true },
          ],
          priority: "immediate",
          requeueOnPreempt: true,
          invalidates: [FR],
        });
      }
      function Nn(Fr, ai) {
        if (Mo) return;
        let Dr =
            Fr === _De ||
            Fr?.includes("/login") ||
            Fr?.includes("/remote-control") ||
            Fr?.includes("restart") ||
            Fr?.includes("policy") ||
            Fr?.includes("update"),
          ki =
            ai === "auth"
              ? Fr?.includes("/login")
                ? ""
                : " \u2014 run /login to restore Remote Control"
              : ai === "ended_elsewhere" || Dr
                ? ""
                : " \u2014 run /remote-control to reconnect",
          Zr = `Remote Control disconnected${Fr ? ` \u2014 ${Fr}` : ""}${ki}`;
        x.replace((Ms) => {
          let Is = Ms.at(-1);
          if (Is?.type === "system" && Is.subtype === "informational" && Is.content === Zr) return Ms;
          return [...Ms, Dt(Zr, "warning")];
        });
      }
      function bn(Fr, ai = "terminal") {
        if ((lr(Fr), Nn(Fr, ai), Ir((Dr) => ({ ...Dr, replBridgeError: Fr, replBridgeErrorKind: ai })), ai === "auth"))
          Sn();
        Ac();
      }
      function Sn() {
        (Go.current = O9), (en.current = Tn.getState().authChangeGeneration);
        let Fr = ++un.current;
        XV(be, Pe)
          .catch(() => {
            return;
          })
          .then(async (ai) => {
            let Dr =
              ai !== void 0
                ? { accountUuid: ai.accountUuid, organizationUuid: ai.organizationUuid }
                : await tb(be).catch(() => {
                    return;
                  });
            if (un.current !== Fr) return;
            if (Tn.getState().authChangeGeneration !== en.current) {
              (Oo.current = Dr), (Go.current = void 0);
              return;
            }
            (Oo.current = Dr), (Go.current = ai?.accessToken);
          });
      }
      if (vo.current >= jrt && !xo.current) {
        n(`[bridge:repl] Hook: ${vo.current} consecutive init failures, not retrying this session`),
          lr(Mge),
          Nn(Mge, "terminal"),
          Ir((Fr) => {
            if (Fr.replBridgeError === Mge && !Fr.replBridgeEnabled) return Fr;
            return {
              ...Fr,
              replBridgeError: Mge,
              replBridgeErrorKind: "terminal",
              replBridgeEnabled: false,
              replBridgeSessionGroupingId: void 0,
            };
          });
        return;
      }
      if (!Mo)
        _8e((Fr) => {
          let { status: ai, payloadType: Dr, requestId: ki, windowCapped: Zr } = Fr;
          if (Zr) {
            let Xa = pMe(Fr);
            hi({
              key: "bridge-attestation-drop",
              kind: "warning",
              segments: [
                { text: "Remote Control: unsigned activity burst rejected", color: "error" },
                { text: " \xB7 further warnings suppressed", dim: true },
              ],
              priority: "immediate",
            }),
              x.replace(($a) => {
                let vs = $a.at(-1);
                if (vs?.type === "system" && vs.subtype === "informational" && vs.content === Xa) return $a;
                return [...$a, Dt(Xa, "warning")];
              });
            return;
          }
          let { what: Ms, hint: Is } = P9t(Fr);
          hi({
            key: "bridge-attestation-drop",
            kind: "warning",
            segments: [
              { text: `Remote Control: unsigned ${Ms} rejected`, color: "error" },
              { text: ` \xB7 attestation: ${ai}${Is ? ` \u2014 ${Is}` : ""}`, dim: true },
            ],
            priority: "immediate",
          });
          let Ra = pMe(Fr);
          if (
            (x.replace((Xa) => {
              let $a = Xa.at(-1);
              if ($a?.type === "system" && $a.subtype === "informational" && $a.content === Ra) return Xa;
              return [...Xa, Dt(Ra, "warning")];
            }),
            Dr === "control_request" && ki)
          )
            Ve.current?.sendControlResponse(
              { type: "control_response", response: { subtype: "error", request_id: ki, error: y8e(Fr) } },
              { skipStateReport: true },
            );
        });
      let Eo = false,
        Ho = S.length,
        Cn = false,
        Zn = K();
      jt.current = Zn;
      let Er = Hl(),
        Ai = Zn,
        ii = null,
        As = () => (Zn === K() ? (gl() ?? Er) : Er);
      if (tn.current !== void 0 && tn.current !== Zn) Rn({ archiveAbandoned: true });
      let Ss =
        (No.current !== void 0 && S[0]?.uuid !== No.current) ||
        (cn.current !== void 0 && S[cn.current.index]?.uuid !== cn.current.uuid);
      if (Ss) zpt();
      let Ii = !Ss && Yt.current !== void 0 ? Math.min(Yt.current, S.length) : void 0,
        Ha = false;
      function Ac() {
        let Fr = lt.current.head,
          ai = lt.current.eligible;
        Gt.current = He.setTimeout(() => {
          if (Eo) return;
          Gt.current = void 0;
          let Dr = Ve.current;
          if (Dr) {
            (qt.current = Dr.bridgeSessionId),
              (lo.current = Dr.getLastSequenceNum()),
              (ao.current = To.current ? Zn : void 0),
              (Pn.current = la.size > 0 ? new Set(la) : void 0),
              (Yt.current = kt.current),
              (No.current = Fr),
              (cn.current = ai),
              (tn.current = Zn),
              (Uo.current = pn.current),
              nn.current?.unregister();
            let ki = Uo.current,
              Zr = async () => {
                if (ki?.accountUuid === void 0) return;
                let Ms = await tb(be).catch(() => {
                  return;
                });
                if (!Xh(Ms, ki)) return;
                await Dr.archive?.().catch((Is) => {
                  n(`[bridge:repl] Deferred archive failed: ${l(Is)}`, { level: "error" });
                });
              };
            nn.current = Dr.archive ? { fire: Zr, unregister: vt(Zr) } : void 0;
          }
          Ir((ki) => {
            if (!ki.replBridgeError) return ki;
            return (
              (Ha = true),
              s("tengu_bridge_repl_auto_disabled", { had_session: Dr !== null }),
              {
                ...ki,
                replBridgeEnabled: false,
                replBridgeSessionGroupingId: void 0,
                ...(Dr && { replBridgeSkipNextArchive: true }),
              }
            );
          });
        }, Frt);
      }
      let Ja = new Map(),
        ns = new Map(),
        la = new Set();
      if (!Ss && qt.current !== void 0) for (let Fr of Pn.current ?? []) la.add(Fr);
      (Rt.current = false), (to.current = false);
      let bs = UD.of(Ie).subscribe(() => {
          if (Eo) return;
          if (Rt.current) {
            to.current = true;
            return;
          }
          (to.current = false), (so.current = false);
        }),
        wa = au((Fr, ai) => {
          if (Eo) return;
          let Dr = Ai;
          if (((Ai = Fr), ai !== "clear" && Dr !== Ai && Dr === Zn)) ii = gl();
          if (ai !== "clear") {
            switch (ai) {
              case "resume":
              case "spare_claim":
                Rt.current = Fr !== Zn;
                break;
              case "fork":
                if (!Rt.current && !so.current) jt.current = Fr;
                break;
              case "cd":
              case "remote_attach":
              case "hydrate":
              case "startup_custom_id":
                break;
            }
            return;
          }
          (Rt.current = false), (to.current = false), (so.current = false);
          try {
            if (!Mo) {
              let Zr = Dr === Zn ? gl() : ii;
              if (Zr !== null) mr.current.push({ sessionId: Zn, path: Zr });
            }
            (ii = null), (Zn = K()), (jt.current = Zn), (Er = Hl()), (kt.current = 0), (Cn = true);
            let ki = Ve.current;
            if (ki && !Mo)
              rH({
                bridgeSessionId: ki.bridgeSessionId,
                bridgeLastSeq: ki.getLastSequenceNum(),
                bridgeDialogKinds: [...la],
                bridgeSessionGroupingId: ki.sessionGroupingId,
                bridgeNoHistoryBackfill: To.current || void 0,
                bridgeOwnerAccountUuid: Xo.current?.accountUuid,
                bridgeOwnerOrganizationUuid: Xo.current?.organizationUuid,
              });
          } catch (ki) {
            n(`[bridge:repl] /clear repoint failed: ${l(ki)}`, { level: "error" }), h(ki);
          }
        });
      function Jl(Fr) {
        let ai = Fr.response?.request_id;
        if (!ai) return false;
        let Dr = ns.get(ai);
        if (Dr) {
          let Ms = Fr.response;
          if (Ms.subtype !== "success" || !Ms.response || !A5n(Ms.response))
            return (
              n(`[bridge:repl] Ignoring non-dialog-shaped control_response for pending dialog request_id=${ai}`, {
                level: "verbose",
              }),
              false
            );
          return ns.delete(ai), Dr.handler(Ms.response), true;
        }
        let ki = Ja.get(ai);
        if (!ki)
          return (
            n(
              `[bridge:repl] No handler for control_response request_id=${ai} (late response after local resolve, stale reattach dialog, or unknown id)`,
              { level: "verbose" },
            ),
            false
          );
        let Zr = Fr.response;
        if (Zr.subtype === "success" && Zr.response) {
          let Ms = k3n(Zr.response);
          if (!Ms) return false;
          if (Gye(Ms.toolName, ki.toolName, ai)) return false;
          return Ja.delete(ai), ki.handler(Ms), true;
        }
        return Ja.delete(ai), true;
      }
      let Au = false,
        ca = null,
        Al = void 0,
        ap;
      function nu(Fr, ai, Dr) {
        if (
          (n(
            `[bridge:repl] handleStateChange state=${Fr} detail="${ai}" kind=${Dr} cancelled=${Eo} outboundOnly=${Mo}`,
          ),
          Eo)
        )
          return;
        if (Fr === "policy_disabled") {
          ap = ai ?? "disabled by your organization's policy";
          return;
        }
        if (Mo) {
          if ((n(`[bridge:repl] Mirror state=${Fr}${ai ? ` detail=${ai}` : ""}`), Fr === "failed"))
            Ir((Zr) => {
              if (!Zr.replBridgeConnected) return Zr;
              return { ...Zr, replBridgeConnected: false };
            });
          else if (Fr === "ready" || Fr === "connected") {
            if (Fr === "connected" && Ve.current && !Tn.getState().replBridgeConnected) Hme(Ve.current);
            Ir((Zr) => {
              if (Zr.replBridgeConnected) return Zr;
              return { ...Zr, replBridgeConnected: true };
            });
          }
          return;
        }
        let ki = Ve.current;
        switch (Fr) {
          case "ready":
            ti(FR),
              (pn.current = Xo.current),
              Ir((Zr) => {
                let Ms = ki ? da(ki.bridgeSessionId, ki.sessionIngressUrl) : Zr.replBridgeSessionUrl,
                  Is = ki?.environmentId,
                  Ra = ki?.bridgeSessionId;
                if (
                  Zr.replBridgeConnected &&
                  !Zr.replBridgeSessionActive &&
                  !Zr.replBridgeReconnecting &&
                  Zr.replBridgeSessionUrl === Ms &&
                  Zr.replBridgeEnvironmentId === Is &&
                  Zr.replBridgeSessionId === Ra
                )
                  return Zr;
                return {
                  ...Zr,
                  replBridgeConnected: true,
                  replBridgeSessionActive: false,
                  replBridgeReconnecting: false,
                  replBridgeSessionUrl: Ms,
                  replBridgeEnvironmentId: Is,
                  replBridgeSessionId: Ra,
                  replBridgeError: void 0,
                  replBridgeErrorKind: void 0,
                };
              });
            break;
          case "connected": {
            if ((ti(FR), ki && !Tn.getState().replBridgeConnected)) Hme(ki);
            if (
              (Ir((Zr) => {
                if (Zr.replBridgeSessionActive) return Zr;
                return {
                  ...Zr,
                  replBridgeConnected: true,
                  replBridgeSessionActive: true,
                  replBridgeReconnecting: false,
                  replBridgeError: void 0,
                  replBridgeErrorKind: void 0,
                };
              }),
              jn(),
              ki && !Qo.current && !jo.current)
            ) {
              let Zr = aPn();
              if (Zr && lPn(Zr, Qt, Jo)) {
                if (((Qo.current = true), Zr.probability >= 1 || Math.random() < Zr.probability))
                  ki.writeSdkMessages([cer(JIn, K())]), cPn(Zr, be);
              }
            }
            break;
          }
          case "reconnecting":
            Ir((Zr) => {
              if (Zr.replBridgeReconnecting) return Zr;
              return { ...Zr, replBridgeReconnecting: true, replBridgeSessionActive: false };
            });
            break;
          case "failed": {
            Gt.current?.(), lr(ai, ki !== null);
            let Zr = Dr ?? (yc ? "auth" : "terminal");
            if (
              (Ir((Ms) => ({
                ...Ms,
                replBridgeError: ai,
                replBridgeErrorKind: Zr,
                replBridgeReconnecting: false,
                replBridgeSessionActive: false,
                replBridgeConnected: false,
              })),
              Zr === "auth")
            )
              Sn();
            Nn(ai, Zr), Ac();
            break;
          }
        }
      }
      let yc = xo.current;
      xo.current = false;
      let Qu = dn.current;
      dn.current = void 0;
      let Fa = Zn,
        Mu = gl(),
        ru = Mu !== null && !j7(Fa, Mu),
        Xl = ru ? void 0 : (Mu ?? Er);
      return (
        (async () => {
          try {
            if (ot.current)
              n("[bridge:repl] Hook: waiting for previous teardown to complete before re-init"),
                await ot.current,
                (ot.current = void 0),
                n("[bridge:repl] Hook: previous teardown complete, proceeding with re-init");
            if (Eo) return;
            let { initReplBridge: Fr, REPL_WORKSPACE_DIFF_COMPUTE_BUDGET: ai } = await import(
                "/$bunfs/root/chunk-6mqwse1h.js"
              ),
              Dr = false,
              ki = false,
              Zr;
            if (qt.current !== void 0) {
              let er = Uo.current,
                Nr = await XV(be, Pe).catch(() => {
                  return;
                });
              if (Nr?.accountUuid) Zr = { accountUuid: Nr.accountUuid, organizationUuid: Nr.organizationUuid };
              if (Eo) return;
              ki = !er?.accountUuid;
              let ui = Boolean(er?.accountUuid) && !Nr?.accountUuid,
                Ps = Boolean(er?.accountUuid) && Boolean(Nr?.accountUuid) && !Xh(Nr, er);
              if (Ps || ui) {
                if (yc) {
                  n("[bridge:repl] Auto-revive aborted: stash owner vs current account mismatch/unreadable at init"),
                    nn.current?.unregister(),
                    (nn.current = void 0),
                    (Ha = true),
                    Ir((Wa) => ({
                      ...Wa,
                      replBridgeEnabled: false,
                      replBridgeError: KGe,
                      replBridgeErrorKind: "terminal",
                    }));
                  return;
                }
                if (
                  (n(
                    Ps
                      ? "[bridge:repl] Reattach stash owner differs from current credential account \u2014 dropping stash, minting fresh (history not uploaded)"
                      : "[bridge:repl] Current account identity unreadable with an owned stash \u2014 dropping stash, minting fresh (history not uploaded)",
                  ),
                  (Dr = true),
                  nn.current?.unregister(),
                  (nn.current = void 0),
                  ZL(Ta(Fa)),
                  h9(Ta(Fa)),
                  ste(Ta(Fa)),
                  Ps && !ru)
                )
                  y("rc_cross_account_suppression");
                else g("rc_cross_account_suppression", ru ? "torn_entry_pair" : "identity_unreadable");
                if (Ps && !ru) await YSe(Fa, Xl, "chokepoint_veto", Nr?.accountUuid, be);
                else if (Ps)
                  n(
                    "[bridge:repl] Chokepoint veto under a TORN entry pair: precautionary suppression only, no permanent taint write",
                    { level: "warn" },
                  );
                if ((Rn({ archiveAbandoned: false }), la.clear(), K() === Fa)) zpt();
              }
            }
            let Ms = ao.current === Fa;
            To.current = Dr || Ms || (ki && Ss);
            let Is =
              Zr ??
              (await tb(be).catch(() => {
                return;
              }));
            if (Eo) return;
            Xo.current = Is;
            let Ra = ki && Ss,
              Xa = Ss ? void 0 : qt.current,
              $a,
              vs = await Fr({
                outboundOnly: Mo,
                suppressHistoryBackfill: Dr || Ms || Ra,
                onHistoryBackfillSuppressed: (er) => {
                  if (Eo) return;
                  if (er?.uncertaintyOnly) return;
                  (To.current = true), (ao.current = Fa);
                },
                reattachOrFail: (yc && qt.current !== void 0) || ki,
                reviveInitiated: yc,
                onReattachPointerDead: () => {
                  if ((Rn({ archiveAbandoned: false }), (ao.current = To.current ? Fa : void 0), wt())) U_e(be);
                },
                localHolderGuard:
                  !Qt || yc
                    ? {
                        mode: "decline",
                        onDeclined: (er) => {
                          $a = er;
                        },
                      }
                    : { mode: "observe" },
                expectedAccount: yc ? Qu : void 0,
                onAuthProven: () => {
                  zo.current = 0;
                },
                reattachSessionId: Xa,
                reattachSequenceNum: Ss ? void 0 : lo.current,
                tags: Mo ? [RKn] : [Qt ? AKn : Omt],
                getToolPermissionContext: () => Tn.getState().toolPermissionContext,
                host: Ie.host,
                workspaceDiffComputeBudget: ai,
                getTools: () => Z().tools,
                onInboundMessage: (er) =>
                  Hrt(
                    Oe,
                    er,
                    (Nr) => Kn(Nr),
                    void 0,
                    () => {
                      let Nr = T5n(ns, (ui) => Ve.current?.sendControlCancelRequest(ui));
                      for (let ui of Nr)
                        s("tengu_request_user_dialog_implicit_cancel", {
                          dialog_kind: Vn(ui),
                          reason: c("new_user_message"),
                          lane: w("repl_bridge"),
                        });
                    },
                    () => kv.of(Ie).tail,
                    be,
                    Pe,
                  ),
                onPermissionResponse: Jl,
                getInitializeState() {
                  return { current_model: Wr(), current_permission_mode: sd(Tn.getState().toolPermissionContext.mode) };
                },
                getCommands: () => det(An()),
                onClientInitialize: Mo ? void 0 : () => jn(),
                onDialogKindsDeclared: Mo
                  ? void 0
                  : (er, Nr) => {
                      pet(la, er, Nr, () => {
                        let ui = Ve.current;
                        if (ui)
                          XSe(
                            Zn,
                            ui.bridgeSessionId,
                            ui.getLastSequenceNum(),
                            As(),
                            [...la],
                            ui.sessionGroupingId,
                            To.current,
                            Xo.current,
                            void 0,
                            be,
                          );
                      });
                    },
                onInterrupt() {
                  wBt(), n("[bridge:repl] Remote interrupt \u2192 turn.cancel()"), Fe();
                },
                onStopTask: (er) =>
                  L4e(er, {
                    taskRegistry: tr,
                    setAppState: Ir,
                    session: Ie,
                    getAppState: Tn.getState,
                    source: "user",
                    storageV5: be,
                  }),
                onSetModel(er) {
                  let Nr = er == null || er.trim().toLowerCase() === "default",
                    ui = Nr ? el() : er,
                    Ps = (ur) => (Nr ? null : ur),
                    Wa = !Nr && !pf(ui) && !(nA(ui) ?? kr(ui)),
                    Zs = Wa ? E_(ui) : null,
                    Cs = Zs ?? ui;
                  if (Wa && Zs === null) {
                    let ur = Tn.getState(),
                      Vr = Lh(Cs, Ot(H0t(ur.mainLoopModelForSession, ur.mainLoopModel)));
                    return (
                      hi({
                        key: `model-restricted-bridge-${lT(Cs)}`,
                        kind: "warning",
                        text: Vr,
                        priority: "immediate",
                      }),
                      p("model_switch", "not_allowed"),
                      { ok: false, error: Vr }
                    );
                  }
                  let Sc = () => {
                      if (Zs !== null)
                        hi({
                          key: `model-restricted-bridge-${lT(ui)}`,
                          kind: "warning",
                          text: Lh(ui, Zs),
                          priority: "immediate",
                        });
                      if (Zs !== null) g("model_switch", "family_alias_stepped_down");
                      else y("model_switch");
                      if (Yr()) VI();
                      dd(Cs);
                      let ur, Vr;
                      if (
                        (Ir((Ji) => {
                          ur = !!Ji.fastMode;
                          let rs = Yr() ? dw(Cs, Ji.fastMode) : !!Ji.fastMode;
                          if (((Vr = rs), Ji.mainLoopModelForSession === Cs && rs === !!Ji.fastMode)) return Ji;
                          return { ...Ji, mainLoopModelForSession: Cs, ...(rs !== !!Ji.fastMode && { fastMode: rs }) };
                        }),
                        ur !== void 0 && Vr !== void 0)
                      ) {
                        pw(ur, Vr);
                        let Ji = e1n(ur, Vr, Cs);
                        if (Ji !== null)
                          hi({
                            key: "model-switch-fast-mode",
                            kind: "feedback",
                            text: Ji,
                            priority: "immediate",
                            timeoutMs: 3000,
                          });
                      }
                    },
                    Vo = Tn.getState();
                  if (!yD(Ie) && kv.of(Ie).pending === 0) {
                    ng(Ie, Vo, Ps(Cs), "sdk"), Sc();
                    return;
                  }
                  return rg(Ie, () =>
                    CS(Ie, Tn.getState, Ps(Cs), "sdk")
                      .then((ur) => {
                        if (ur.decision !== "proceed") {
                          g("model_switch", "blocked_by_hook");
                          let Vr = Yge(ur);
                          return (
                            hi({
                              key: "model-switch-blocked",
                              kind: "warning",
                              text: Vr,
                              color: "warning",
                              priority: "immediate",
                            }),
                            { ok: false, error: Vr }
                          );
                        }
                        if (ur.messages.length > 0)
                          hi({
                            key: "model-switch-hook-note",
                            kind: "feedback",
                            text: ur.messages.map(ac).join(" \xB7 "),
                            priority: "immediate",
                          });
                        return ng(Ie, Tn.getState(), Ps(Cs), "sdk"), Sc(), { ok: true, notices: ur.messages.map(ac) };
                      })
                      .catch((ur) => (h(we(ur)), { ok: false, error: "Model switch failed" })),
                  );
                },
                onSetMaxThinkingTokens(er) {
                  let Nr = er == null ? (pe ? pe.type !== "disabled" : rN()) : er !== 0;
                  Ir((ui) => {
                    if (ui.thinkingEnabled === Nr) return ui;
                    return { ...ui, thinkingEnabled: Nr };
                  });
                },
                onSetPermissionMode: (er) => Wrt(er, Tn, Ir),
                onApplyFlagSettings: (er) => {
                  let Nr = at(),
                    ui = hW(Nr, sl(Tn.getState())),
                    Ps = Kot(er, { model: Nr, getAppState: Tn.getState, setAppState: Ir, storageV5: be });
                  if (!Ps.ok) return Ps;
                  if (hW(Nr, sl(Tn.getState())) === ui) jn();
                  else $i();
                  return { ok: true };
                },
                onMcpStatus() {
                  return Tn.getState().mcp.clients.map((er) => {
                    let Nr;
                    if (er.config.type === "sse" || er.config.type === "http")
                      Nr = { type: er.config.type, url: er.config.url };
                    else if (er.config.type === "claudeai-proxy")
                      Nr = { type: "claudeai-proxy", url: er.config.url, id: er.config.id };
                    else if (er.config.type === "stdio" || er.config.type === void 0)
                      Nr = { type: "stdio", command: er.config.command, args: er.config.args };
                    return {
                      name: er.name,
                      status: Tme(er.type),
                      config: Nr,
                      scope: er.config.scope,
                      serverInfo: Zo(er) ? er.serverInfo : void 0,
                      error: er.type === "failed" ? er.error : void 0,
                    };
                  });
                },
                async onMcpAuthenticate(er, Nr) {
                  let ui = Tn.getState().mcp.clients,
                    Ps = ui.find((ur) => ur.name === er)?.config;
                  if (!Ps) throw new js(`MCP server "${Rr(er)}" not found`);
                  hJt(ui, er);
                  let Wa = vse();
                  if (!Wa)
                    throw new js(
                      "MCP controls aren't available right now \u2014 the terminal is still starting up or is showing another view",
                    );
                  if (Wa(er)) throw new js(_1(er), "MCP server disabled in another session; auth refused");
                  if (VNn()?.(er, Ps)) throw new js(drt(er), "MCP server blocked by managed policy; auth refused");
                  yt.current.delete(er);
                  let Zs = Rx(er, Ps);
                  if (Zs.kind === "claudeai-proxy") {
                    let ur = Q8(Zs.config);
                    if (!ur) throw new js("Unable to build claude.ai connector auth URL (missing org or server id)");
                    return (
                      s("tengu_claudeai_mcp_auth_started", {}),
                      { authUrl: ur, requiresUserAction: true, callbackExpected: false }
                    );
                  }
                  if (Zs.kind === "unsupported-transport")
                    throw new js(`Server type "${Zs.transport}" does not support OAuth authentication`);
                  if (Zs.kind === "anthropic-hosted") throw new js(Da(Zs.message, 1024, "none"));
                  let Cs = (ur) => {
                      let Vr,
                        Ji = new Promise((Ri) => {
                          Vr = Ri;
                        }),
                        rs,
                        Mr,
                        Kr = IB().performMCPOAuthFlow(er, Zs.config, (Ri) => Vr(Ri), void 0, {
                          skipBrowserOpen: true,
                          redirectUri: ur,
                          onWaitingForCallback: (Ri, ws, Sl) => {
                            (rs = ws), (Mr = Sl);
                          },
                        });
                      return (
                        IB().setActiveOAuthPromise(er, Kr),
                        Kr.then(
                          () => yt.current.set(er, Date.now()),
                          () => {},
                        ),
                        Promise.race([
                          Ji.then((Ri) => ({ authUrl: Ri, callbackPort: rs, state: Mr })),
                          Kr.then(() => null),
                        ])
                      );
                    },
                    Sc = null,
                    Vo = "localhost";
                  if (Nr && !Zs.config.oauth?.clientId)
                    try {
                      (Sc = await Cs(Nr)), (Vo = "custom");
                    } catch (ur) {
                      n(`[bridge:mcp] AS rejected custom redirectUri for ${er}; falling back to localhost: ${l(ur)}`);
                    }
                  if (Vo === "localhost") Sc = await Cs();
                  if (!Sc) return { requiresUserAction: false, callbackExpected: false };
                  return {
                    authUrl: Sc.authUrl,
                    requiresUserAction: true,
                    callbackExpected: true,
                    redirectScheme: Vo,
                    state: Sc.state,
                    ...(Vo === "localhost" && { callbackPort: Sc.callbackPort }),
                  };
                },
                async onMcpOauthCallbackUrl(er, Nr) {
                  let ui = IB().getOAuthCallbackSubmitter(er);
                  if (!ui) throw new js(`No OAuth flow in progress for "${Rr(er)}" \u2014 call mcp_authenticate first`);
                  if (!ui(Nr))
                    throw new js(
                      "Invalid callback URL \u2014 no authorization code. The flow is still open; retry with the full redirect URL.",
                    );
                  let Ps = IB().getActiveOAuthPromise(er);
                  if (Ps) await Ps;
                },
                async onMcpReconnect(er) {
                  let Nr = urt();
                  if (!Nr)
                    throw new js(
                      "MCP controls aren't available right now \u2014 the terminal is still starting up or is showing another view",
                    );
                  hJt(Tn.getState().mcp.clients, er);
                  let ui = await Nr(er, { discardDiscovery: !fet(yt.current, er) });
                  aer(ui.client);
                },
                async onGetContextUsage() {
                  if (ue && ue.turnCount() > 0) return ue.getContextUsage();
                  let { collectContextData: er } = await import("/$bunfs/root/chunk-9790be01.js"),
                    Nr = Tn.getState(),
                    { session: ui, tools: Ps, customSystemPrompt: Wa, appendSystemPrompt: Zs } = Z();
                  return er({
                    session: ui,
                    messages: x.getSnapshot(),
                    getAppState: Tn.getState,
                    getMcp: () => Tn.getState().mcp,
                    storageV5: be,
                    credentials: Pe,
                    options: {
                      mainLoopModel: Wr(),
                      tools: Ps,
                      agentDefinitions: Nr.agentDefinitions,
                      customSystemPrompt: Wa,
                      appendSystemPrompt: Zs,
                    },
                  });
                },
                async onGetUsage() {
                  let { collectUsageData: er } = await import("/$bunfs/root/chunk-fdmfg22q.js");
                  return er({ includeBehaviors: false, storageV5: be, credentials: Pe });
                },
                onSetColor(er) {
                  let Nr = er === "default";
                  if (!Nr && !Qp.includes(er))
                    return { ok: false, error: `Unknown color "${er}". Available: ${Qp.join(", ")}, default` };
                  let ui = Nr ? void 0 : er,
                    Ps = K();
                  Xqe(Ps, er, gl() ?? Hl(), be).catch((Cs) => {
                    n(`saveAgentColor: transcript append failed: ${l(Cs)}`);
                  });
                  let Wa = Tn.getState(),
                    Zs = Wa.agent ? Wa.agentDefinitions.activeAgents.find((Cs) => Cs.agentType === Wa.agent) : void 0;
                  return (
                    IGe(fu(), ene({ userOverride: ui, agentDefinitionColor: Zs?.color }), be),
                    Ir((Cs) => {
                      if (Cs.standaloneAgentContext?.color === ui) return Cs;
                      return {
                        ...Cs,
                        standaloneAgentContext: {
                          ...Cs.standaloneAgentContext,
                          name: Cs.standaloneAgentContext?.name ?? "",
                          color: ui,
                        },
                      };
                    }),
                    { ok: true }
                  );
                },
                onStateChange: nu,
                onBridgeInjectedMcp: Al,
                initialMessages: Dr || Ra ? void 0 : Ii !== void 0 ? S.slice(0, Ii) : S.length > 0 ? S : void 0,
                getMessages: x.getSnapshot,
                initialName: as,
                sessionGroupingId: Li,
                enableSessionPersistence: Mo || mY() || p8e(),
                storageV5: be,
                credentials: Pe,
                onTransportRebuilt: cet,
              });
            if (Eo) {
              if ((n("[bridge:repl] Hook: init cancelled during flight, tearing down"), vs)) vs.teardown();
              return;
            }
            if (!vs && $a) {
              if (
                (n(`[bridge:repl] Init declined: session held by local pid ${$a.pid}; leaving Remote Control off`), !Mo)
              ) {
                let er = aNn($a, { crossSessionMessaging: Yo() });
                x.replace((Nr) => {
                  let ui = Nr.at(-1);
                  if (
                    ui?.type === "system" &&
                    ui.subtype === "informational" &&
                    typeof ui.content === "string" &&
                    ui.content.startsWith(IYt)
                  )
                    return Nr;
                  return [...Nr, Dt(er, "warning")];
                });
              }
              Ir((er) =>
                er.replBridgeEnabled || er.replBridgeAutoOnByDefault
                  ? { ...er, replBridgeEnabled: false, replBridgeSessionGroupingId: void 0, replBridgeAutoOnByDefault: false }
                  : er,
              );
              return;
            }
            if (!vs && ap !== void 0) {
              let er = ap;
              if ((n("[bridge:repl] Init declined by org policy; leaving Remote Control off"), !Mo))
                x.replace((Nr) =>
                  Nr.some((ui) => ui.type === "system" && ui.subtype === "informational" && ui.content === er)
                    ? Nr
                    : [...Nr, Dt(er, "notice")],
                );
              Ir((Nr) =>
                Nr.replBridgeEnabled || Nr.replBridgeAutoOnByDefault
                  ? { ...Nr, replBridgeEnabled: false, replBridgeSessionGroupingId: void 0, replBridgeAutoOnByDefault: false }
                  : Nr,
              );
              return;
            }
            if (!vs) {
              if (!yc) vo.current++;
              if (
                (O_e(Mo),
                n(
                  `[bridge:repl] Init returned null (precondition or session creation failed); consecutive failures: ${vo.current}`,
                ),
                Gt.current?.(),
                Tn.getState().replBridgeError !== void 0)
              )
                Ac();
              else if (Qt && !Mo && ch()) bn(qbe, "auth");
              else
                Ir((er) =>
                  er.replBridgeEnabled ? { ...er, replBridgeEnabled: false, replBridgeSessionGroupingId: void 0 } : er,
                );
              return;
            }
            if (
              ((Ve.current = vs),
              Vgt(vs, be),
              mce(() => Oa()?.noHistoryBackfill === true),
              (pn.current = Xo.current),
              cne(Tn.getState().toolPermissionContext.mode),
              UFt("bridge_connected", Pe),
              k1(at(), Tn.getState().sessionEffort),
              V6e(dOe),
              R$e(Tn.getState()),
              Hme(vs),
              x_(),
              (vo.current = 0),
              !Mo)
            )
              ti(FR);
            if (Rn({ archiveAbandoned: Ss })) s("tengu_bridge_compacted_while_disabled_remint", {});
            if (
              ((kt.current = Cn ? 0 : Xa !== void 0 && vs.bridgeSessionId === Xa ? (Ii ?? Ho) : Ho),
              (Ht.current = new Set(S.slice(0, kt.current).map((er) => er.uuid))),
              (lt.current = kt.current > 0 ? { head: S[0]?.uuid } : {}),
              (so.current = false),
              wt())
            )
              Grt(
                vs.bridgeSessionId,
                Mo,
                vs.sessionGroupingId,
                Is && { accountUuid: Is.accountUuid, organizationUuid: Is.organizationUuid },
                To.current,
                be,
              );
            else if (!Mo)
              XSe(
                Zn,
                vs.bridgeSessionId,
                vs.getLastSequenceNum(),
                As(),
                [...la],
                vs.sessionGroupingId,
                To.current,
                Xo.current,
                void 0,
                be,
              );
            if (Mo)
              Ir((er) => {
                if (er.replBridgeConnected && er.replBridgeSessionId === vs.bridgeSessionId) return er;
                return {
                  ...er,
                  replBridgeConnected: true,
                  replBridgeSessionId: vs.bridgeSessionId,
                  replBridgeSessionUrl: void 0,
                  replBridgeConnectUrl: void 0,
                };
              }),
                n(`[bridge:repl] Mirror initialized, session=${vs.bridgeSessionId}`);
            else {
              re.connectBridge({ permission: qrt(vs, Ja), dialog: Vrt(vs, ns, la) });
              let er = da(vs.bridgeSessionId, vs.sessionIngressUrl);
              if (
                (Ir((Nr) => ({
                  ...Nr,
                  replBridgeConnected: true,
                  replBridgeSessionUrl: er,
                  replBridgeEnvironmentId: vs.environmentId,
                  replBridgeSessionId: vs.bridgeSessionId,
                  replBridgeError: void 0,
                  replBridgeErrorKind: void 0,
                })),
                Qt)
              )
                x.replace((Nr) =>
                  Nr.some((ui) => ui.type === "system" && ui.subtype === "bridge_status" && ui.url === er)
                    ? Nr
                    : [...Nr, Wzn(er)],
                );
              n(`[bridge:repl] Hook initialized, session=${vs.bridgeSessionId}`);
            }
          } catch (Fr) {
            if (Eo) return;
            if (!yc) vo.current++;
            O_e(Mo);
            let ai = l(Fr);
            if ((n(`[bridge:repl] Init failed: ${ai}; consecutive failures: ${vo.current}`), Gt.current?.(), Mo))
              Ir((Dr) =>
                Dr.replBridgeEnabled ? { ...Dr, replBridgeEnabled: false, replBridgeSessionGroupingId: void 0 } : Dr,
              );
            else bn(ai, yc ? "auth" : "terminal");
          }
        })(),
        () => {
          (Eo = true), wa(), bs(), _8e(void 0), Gt.current?.(), (Gt.current = void 0);
          let Fr = Tn.getState().replBridgeSkipNextArchive,
            ai = !Mo && ISn((Dr) => Dr.type === "conversation_reset");
          if (ai)
            g("bridge_conversation_reset", "undelivered_at_teardown"),
              Rn({ archiveAbandoned: Ve.current === null }),
              Pr();
          if (Fr)
            Ir((Dr) => {
              if (!Dr.replBridgeSkipNextArchive) return Dr;
              return { ...Dr, replBridgeSkipNextArchive: false };
            });
          if (Ve.current) {
            let Dr = Ve.current,
              ki = !Tn.getState().replBridgeEnabled && !Ha,
              Zr = (ki && !Fr) || ai,
              Ms = Fr && !(Ha && ai);
            if (!Ha) Rn({ archiveAbandoned: false });
            if (((pn.current = void 0), !Mo))
              if (Zr) {
                if ((u2(Zn, As(), void 0, be), Pr(), wt())) U_e(be);
              } else if (Fr && !Ha) zpt();
              else
                XSe(
                  Zn,
                  Dr.bridgeSessionId,
                  Dr.getLastSequenceNum(),
                  As(),
                  [...la],
                  Dr.sessionGroupingId,
                  To.current,
                  Xo.current,
                  void 0,
                  be,
                );
            let Is = Mo !== Tn.getState().replBridgeOutboundOnly && Tn.getState().replBridgeEnabled,
              Ra = Fr || Ha || Is ? void 0 : ki ? "remote_control_disabled" : "host_exit";
            n(
              `[bridge:repl] Hook cleanup: starting teardown for session=${Dr.bridgeSessionId}${Ms ? " (skipArchive)" : ""}${Ra ? ` reason=${Ra}` : ""}`,
            ),
              (ot.current = Dr.teardown({ skipArchive: Ms, reason: Ra })),
              (Ve.current = null),
              Vgt(null, be),
              mce(void 0);
          }
          if (!Ha && !Mo) ti(FR);
          re.disconnectBridge(),
            E5n(ns),
            Ir((Dr) => {
              let ki = Ha || Mo ? Dr.replBridgeError : void 0,
                Zr = Ha || Mo ? Dr.replBridgeErrorKind : void 0;
              if (
                !Dr.replBridgeConnected &&
                !Dr.replBridgeSessionActive &&
                !Dr.replBridgeReconnecting &&
                !Dr.replBridgeConnectUrl &&
                !Dr.replBridgeSessionUrl &&
                !Dr.replBridgeEnvironmentId &&
                !Dr.replBridgeSessionId &&
                Dr.replBridgeError === ki &&
                Dr.replBridgeErrorKind === Zr
              )
                return Dr;
              return {
                ...Dr,
                replBridgeConnected: false,
                replBridgeSessionActive: false,
                replBridgeReconnecting: false,
                replBridgeConnectUrl: void 0,
                replBridgeSessionUrl: void 0,
                replBridgeEnvironmentId: void 0,
                replBridgeSessionId: void 0,
                replBridgeError: ki,
                replBridgeErrorKind: Zr,
              };
            }),
            (kt.current = 0),
            (Ht.current = new Set()),
            (lt.current = {});
        }
      );
    }, [pr, Xr, va, Ir, x, hi, ti, He, be, Pe, Oe, Ie, re]),
    A(() => {
      if (!Wn) return;
      let Mo = Ve.current;
      if (!Mo) return;
      if (B_e(Mo, Ki)) return;
      let Qt = to.current;
      to.current = false;
      try {
        let Jo = Ht.current,
          { head: lr, tail: Nn, eligible: bn } = lt.current,
          Sn = lr === void 0 || S[0]?.uuid === lr,
          Eo = bn === void 0 || S[bn.index]?.uuid === bn.uuid,
          Ho = 0;
        if (Qt)
          (so.current = true),
            n(
              `[bridge:repl] Transcript replaced under a detached binding \u2014 ${S.length} message(s) accounted as seen, not uploaded`,
            );
        else {
          if (Sn && Eo) {
            if (Nn !== void 0 && S[Nn.index]?.uuid === Nn.uuid) Ho = Nn.index + 1;
            else if (bn !== void 0) Ho = bn.index + 1;
          }
          if (Ho === 0 && (Nn !== void 0 || bn !== void 0))
            n(`[bridge:repl] Transcript rewrite detected (messages.length=${S.length}), rescanning`);
        }
        let Cn = Ho > 0 ? bn : void 0,
          Zn = [],
          Er = [],
          Ai,
          ii = f8e();
        for (let Ss = Ho; Ss < S.length; Ss++) {
          let Ii = S[Ss];
          if (!Ii || !Mde(Ii)) {
            if (Ii && man(Ii) && !Jo.has(Ii.uuid)) {
              if ((Jo.add(Ii.uuid), !Qt && ii.enabled)) {
                Ai ??= Z().tools;
                for (let Ha of gan(Ii, Ai)) if (Kut(ii, Ha)) Er.push(Ha);
              }
            }
            continue;
          }
          if (((Cn = { index: Ss, uuid: Ii.uuid }), Jo.has(Ii.uuid))) continue;
          if ((Jo.add(Ii.uuid), Qt)) continue;
          if (mbe(Ii) && (so.current || W7())) continue;
          Zn.push(Ii);
        }
        kt.current = S.length;
        let As = S.at(-1);
        if (
          ((lt.current = { head: S[0]?.uuid, tail: As && { index: S.length - 1, uuid: As.uuid }, eligible: Cn }),
          F_e(Mo),
          Zn.length > 0)
        )
          Mo.writeMessages(Zn);
        if (Er.length > 0) Mo.writeSdkMessages(Er);
      } catch (Jo) {
        if (Qt) to.current = true;
        h(Jo);
      }
    }, [S, Wn, Ki]),
    A(() => {
      if (!Wn) return;
      let Mo = () => {
        let Qt = Ve.current;
        if (!Qt || B_e(Qt, Tn.getState().replBridgeSessionActive)) return;
        F_e(Qt);
      };
      return fre(Mo), Mo(), () => fre(null);
    }, [Wn, Ki]),
    L_e(Wn, Ke),
    A(() => {
      if (!pr) {
        let Mo = NEe(),
          Qt = false,
          Jo = false;
        for (let lr of Mo)
          if (lr.subtype === "task_notification") Qt = true;
          else if (lr.subtype === "background_tasks_changed") Jo = true;
        if (Qt || Jo)
          g(
            "ccr_task_status_publish",
            Tn.getState().replBridgeError !== void 0 ? "status_discarded_failed_init" : "status_discarded_user_disable",
            { has_terminal_bookend: Qt, has_level: Jo },
          );
      }
    }, [pr]),
    A(() => {
      if (pr || Wi === void 0 || Rs !== "auth" || Xr || !lMe()) return;
      let Mo = false,
        Qt,
        Jo = 300000;
      async function lr() {
        let Nn = Tn.getState().authChangeGeneration !== en.current,
          bn = !lMe(),
          Sn = bn || (!Nn && zo.current >= Brt);
        if (Sn)
          n(
            bn
              ? "[bridge:repl] Auth-revive watcher: kill switch off \u2014 still polling, no unattended revive"
              : "[bridge:repl] Auth-revive watcher: non-interactive revive brake engaged \u2014 still polling; an in-process /login bypasses",
          );
        let Eo = Go.current === O9,
          Ho;
        try {
          Ho = Sn || Eo ? void 0 : await XV(be, Pe);
        } catch {
          Ho = void 0;
        }
        if (Mo) return;
        let Cn = Go.current !== O9,
          Zn = Oo.current;
        if (
          Cn &&
          Ho !== void 0 &&
          Ho.accessToken !== Go.current &&
          Ho.accountUuid !== void 0 &&
          Zn?.accountUuid !== void 0
        ) {
          if (!Xh(Ho, Zn)) {
            n("[bridge:repl] Auth-revive watcher: credential belongs to a different account \u2014 disarming");
            return;
          }
          n("[bridge:repl] Auth-revive watcher: fresh same-account credential \u2014 re-enabling Remote Control");
          let Ai = false;
          if (
            (Ir((ii) => {
              if (ii.replBridgeEnabled || ii.replBridgeError === void 0) return ii;
              return (Ai = true), { ...ii, replBridgeEnabled: true, replBridgeError: void 0, replBridgeErrorKind: void 0 };
            }),
            Ai)
          )
            s("tengu_bridge_repl_auth_revive", {}),
              zo.current++,
              (xo.current = true),
              (dn.current = { accountUuid: Ho.accountUuid, organizationUuid: Ho.organizationUuid });
          return;
        }
        Qt = He.setTimeout(() => {
          lr();
        }, Jo);
      }
      return (
        lr(),
        () => {
          (Mo = true), Qt?.();
        }
      );
    }, [pr, Wi, Rs, us, Ir, He, Tn, Xr, be, Pe]),
    {
      sendBridgeResult: B((Mo) => {
        Ve.current?.sendResult(Mo);
      }, []),
    }
  );
}

async function Hrt(S, x, P, j, H, Z, re, ue) {
  let { prior: de, release: pe } = S.takeInboundEnqueueTurn();
  try {
    let Re = fje(x);
    if (!Re) return;
    let { uuid: be } = Re;
    zZe(Re.clientPlatform, re);
    let Pe = dje(
      Re.content,
      Re.clientPlatform,
      Re.inboundOrigin,
      Re.receiverGroupingId,
      Re.slackOrigin,
      Re.activityObservation,
    );
    if (Q6e(Pe) === "ungated" && !mSt(Pe) && typeof Re.content === "string" && P(Re.content)) {
      n(`[bridge:repl] Ran immediate command without enqueue: ${Re.content.slice(0, 80)}${be ? ` uuid=${be}` : ""}`);
      return;
    }
    await de, await Z?.();
    let { resolveAndPrepend: Ie } = await import("/$bunfs/root/chunk-j1jcp5vr.js"),
      He = Re.content,
      Fe = v0e(Pe);
    if (Fe !== void 0) {
      rZ("bridge:repl: dropped before attachment materialization", Fe);
      return;
    }
    let { content: Ve, inlinedImagePaths: Ke } = await Ie(x, He, Got(Pe, Re.clientPlatform, Re.inboundOrigin), re, ue),
      ot = typeof Ve === "string" ? Ve.slice(0, 80) : `[${Ve.length} content blocks]`;
    n(`[bridge:repl] Injecting inbound user message: ${ot}${be ? ` uuid=${be}` : ""}`);
    let st,
      nt = false;
    if (Pe?.kind === "peer")
      st = { origin: Zde(Pe, Ve, Re.content), isMeta: true, skipAttachments: true, ...(V$e(S) && { priority: "later" }) };
    else {
      let Ht = pje(Pe, Re.clientPlatform, Re.inboundOrigin);
      (nt = Gh(Ht)),
        (st = {
          bridgeOrigin: true,
          clientPlatform: Re.clientPlatform,
          ...(Ht && { origin: Ht }),
          ...(Ht !== void 0 && !Gh(Ht) && { skipAttachments: true }),
          ...(Ht?.kind === "task-notification" && uje(void 0, Re.clientPlatform) === "later" && { priority: "later" }),
          ...(Yse(Re.clientPlatform, Re.inboundOrigin) && {
            priority: G$e(void 0, Ve, z$e(S)),
            verifiedSlackHumanTurn: true,
          }),
        });
    }
    let Pt = d7e(be, {
        isCrossSession: Z6e({ ingressOrigin: Pe, inboundOrigin: Re.inboundOrigin, envelopePeer: mje(Re.content) }),
      }),
      kt = {
        value: Ve,
        mode: "prompt",
        agentId: et(),
        uuid: be,
        ...(Pt && { turnAttributionKey: Pt }),
        ...(Ke.length > 0 && { inlinedImagePaths: Ke }),
        skipSlashCommands: true,
        ...st,
      };
    if (eje(Pe, kt) !== "accept") return;
    if (nt) (kt.uuid ??= Lrt()), Trt(kt.uuid);
    if ((S.enqueue(kt), !mSt(Pe))) H?.();
  } catch (Re) {
    n(`[bridge:repl] handleInboundMessage failed: ${Re}`, { level: "error" });
  } finally {
    de.then(pe, pe);
  }
}

function Wrt(S, x, P) {
  let j = WIe(S, x.getState().toolPermissionContext);
  if (!j.ok) return j;
  let H = j.mode;
  return (
    P((Z) => {
      let re = Z.toolPermissionContext.mode;
      if (re === H) return Z;
      let ue = K0(re, H, Z.toolPermissionContext);
      return { ...Z, toolPermissionContext: { ...ue, mode: H } };
    }),
    setImmediate(() => {
      m7.emit();
    }),
    { ok: true }
  );
}

function qrt(S, x) {
  return {
    sendRequest(P, j, H, Z, re, ue, de, pe) {
      S.sendControlRequest({
        type: "control_request",
        request_id: P,
        request: {
          subtype: "can_use_tool",
          tool_name: j,
          display_name: YW(j),
          input: H,
          tool_use_id: Z,
          description: re,
          ...(ue && { permission_suggestions: ue }),
          ...(de && { blocked_path: de }),
          requires_user_interaction: pe || void 0,
        },
      });
    },
    sendResponse(P, j) {
      let H = { ...j };
      S.sendControlResponse({ type: "control_response", response: { subtype: "success", request_id: P, response: H } });
    },
    cancelRequest(P) {
      S.sendControlCancelRequest(P), x.delete(P);
    },
    onResponse(P, j, H) {
      return (
        x.set(P, { toolName: j, handler: H }),
        () => {
          x.delete(P);
        }
      );
    },
  };
}

function Vrt(S, x, P) {
  return {
    supportsKind(j) {
      return P.has(j);
    },
    sendRequest(j, H, Z, re) {
      return S.sendControlRequest({
        type: "control_request",
        request_id: j,
        request: { subtype: "request_user_dialog", dialog_kind: H, payload: Z, ...(re && { tool_use_id: re }) },
      });
    },
    cancelRequest(j) {
      S.sendControlCancelRequest(j), x.delete(j);
    },
    onResponse(j, H, Z) {
      return (
        x.set(j, { kind: H, handler: Z }),
        () => {
          x.delete(j);
        }
      );
    },
  };
}

async function U_e(S) {
  let x = process.env.CLAUDE_JOB_DIR;
  if (!x) return;
  try {
    let P = await fr(x, S);
    if (!P || P.bridgeSessionId === void 0) return;
    hd(x);
    let j = (await fr(x, S)) ?? P;
    await xs(
      x,
      {
        ...j,
        bridgeSessionId: void 0,
        bridgeOutboundOnly: void 0,
        bridgeSessionSeq: void 0,
        bridgeSessionGroupingId: void 0,
        bridgeOwnerAccountUuid: void 0,
        bridgeOwnerOrganizationUuid: void 0,
        bridgeNoHistoryBackfill: void 0,
        updatedAt: new Date().toISOString(),
      },
      S,
    );
  } catch (P) {
    Aa(P);
  }
}

async function Grt(S, x, P, j, H, Z) {
  let re = process.env.CLAUDE_JOB_DIR;
  if (!re) return;
  try {
    let ue = await fr(re, Z);
    if (
      !ue ||
      (ue.bridgeSessionId === S &&
        ue.bridgeOutboundOnly === x &&
        ue.bridgeSessionGroupingId === P &&
        ue.bridgeOwnerAccountUuid === j?.accountUuid &&
        ue.bridgeOwnerOrganizationUuid === j?.organizationUuid &&
        (ue.bridgeNoHistoryBackfill ?? false) === H)
    )
      return;
    hd(re);
    let de = (await fr(re, Z)) ?? ue;
    await xs(
      re,
      {
        ...de,
        bridgeSessionId: S,
        bridgeOutboundOnly: x,
        bridgeSessionGroupingId: P,
        bridgeOwnerAccountUuid: j?.accountUuid,
        bridgeOwnerOrganizationUuid: j?.organizationUuid,
        bridgeNoHistoryBackfill: H || void 0,
        bridgeSessionSeq: de.bridgeSessionId === S ? de.bridgeSessionSeq : void 0,
        updatedAt: new Date().toISOString(),
      },
      Z,
    );
  } catch (ue) {
    Aa(ue);
  }
}

function B9({
  turn: S,
  transcript: x,
  scope: P,
  permissionRelays: j,
  engine: H,
  transport: Z,
  spawnThinkingConfig: re,
  customSystemPrompt: ue,
  appendSystemPrompt: de,
}) {
  let pe = ct(),
    Re = Xe(x),
    be = Xe(P, (Ie) => Ie.commands),
    Pe = Oc(),
    Oe = B(() => S.cancel("remote"), [S]);
  return H_e(
    Re,
    x,
    Oe,
    be,
    Pe,
    () => ({ session: pe, tools: P.computeTools(), customSystemPrompt: ue, appendSystemPrompt: de }),
    j,
    H,
    Z.runBridgeImmediateCommand,
    re,
    P.updateDynamicMcpConfig,
  );
}

function EB(AHo) {
  let Qrt = _(5),
    { hideSessionTitle: Krt } = AHo,
    $_e = Krt === void 0 ? false : Krt,
    zrt;
  if (Qrt[0] !== $_e) (zrt = { hideSessionTitle: $_e }), (Qrt[0] = $_e), (Qrt[1] = zrt);
  else zrt = Qrt[1];
  let U9 = $b(zrt),
    { columns: W_e } = Ee();
  if (!U9) {
    return null;
  }
  let Yrt;
  if (Qrt[2] !== U9 || Qrt[3] !== W_e)
    (Yrt = e(Hk, { banner: U9, columns: W_e, fastModeTag: void 0 })), (Qrt[2] = U9), (Qrt[3] = W_e), (Qrt[4] = Yrt);
  else Yrt = Qrt[4];
  return Yrt;
}

F();

var DB = 30000,
  Jrt = 60000,
  Xrt = "https://claude.ai/settings/usage",
  pR = "fotw-claim";

function j9(S, x) {
  let P = W((ue) => ue.fotwClaim),
    j = At(),
    { credentials: H } = ge();
  A(() => {
    Rit(H);
  }, [H]);
  let Z = P?.phase;
  Yn(() => j((ue) => (ue.fotwClaim ? { ...ue, fotwClaim: void 0 } : ue)), Z === void 0 || Z === "pending" ? null : DB, [
    Z,
  ]),
    A(() => {
      if (!P) {
        x(pR);
        return;
      }
      let ue = ji(P.amountMinorUnits, P.currency, "precise");
      switch ((x(pR), P.phase)) {
        case "pending":
          S({
            key: pR,
            text: `Thanks for trying the feature of the week. ${ue} in usage credits on its way!`,
            priority: "immediate",
            requeueOnPreempt: true,
            timeoutMs: Jrt,
          });
          return;
        case "granted":
          S({
            key: pR,
            text: `${ue} in usage credits added to your account \xB7 expires in 90 days`,
            color: "success",
            priority: "immediate",
            requeueOnPreempt: true,
            timeoutMs: DB,
          });
          return;
        case "failed":
          S({
            key: pR,
            text: "Something went wrong when adding your usage credits. Contact support for help.",
            color: "error",
            priority: "immediate",
            requeueOnPreempt: true,
            timeoutMs: DB,
          });
          return;
        case "needs_payment_setup":
          S({
            key: pR,
            text: `To claim ${ue} in usage credits, add a payment method at ${Xrt}, then run /${P.command} again to claim (claiming turns on extra usage billing)`,
            priority: "immediate",
            requeueOnPreempt: true,
            timeoutMs: DB,
          });
          return;
      }
    }, [P, S, x]);
}

var Zrt = { debug: true, embedded: true, onDetachToCaller: true, hasSuppressedDialogs: true },
  eit = Object.keys(Zrt),
  q_e = { kind: "none" };

class NB {
  #e = Ue();
  #t;
  #o;
  #r;
  #i;
  exitReaders;
  #n;
  #c = null;
  constructor({ isRemoteSession: S, addNotification: x, store: P, storageV5: j, exitReaders: H, ...Z }) {
    (this.#t = S),
      (this.#o = x),
      (this.#r = P),
      (this.#i = j),
      (this.exitReaders = H),
      (this.#n = { ...Z, ideSelection: void 0, bashesDialog: false, exit: q_e });
  }
  subscribe = (S) => this.#e.subscribe(S);
  getSnapshot = () => this.#n;
  #a(S) {
    (this.#n = S), this.#e.emit();
  }
  setView(S) {
    let x = this.#n;
    if (eit.every((P) => Object.is(S[P], x[P]))) return;
    this.#a({ ...x, ...S });
  }
  setIdeSelection = (S) => {
    if (Object.is(S, this.#n.ideSelection)) return;
    this.#a({ ...this.#n, ideSelection: S });
  };
  offerIdeSelection = (S) => {
    if (this.#n.ideSelection?.source === "diff" && !S.text) return;
    this.setIdeSelection(S);
  };
  openBashesDialog = (S) => {
    this.#s(S ?? true);
  };
  closeBashesDialog = () => {
    this.#s(false);
  };
  #s(S) {
    if (S === this.#n.bashesDialog) return;
    this.#a({ ...this.#n, bashesDialog: S });
  }
  openMessageSelector = () => {
    if (this.#t) {
      this.#o({
        key: "remote-rewind-unavailable",
        kind: "feedback",
        text: "Rewind is not yet available in cloud sessions",
        priority: "medium",
      });
      return;
    }
    this.#d().openMessageSelector();
  };
  requestExit = () => {
    let { onDetachToCaller: S } = this.#n;
    if (S) {
      S();
      return;
    }
    if (wt()) {
      Vj();
      return;
    }
    let x = ha() !== null,
      P = SNn(this.#r.getState().tasks);
    if (x || P.length > 0) {
      this.#a({
        ...this.#n,
        exit: {
          kind: "interstitial",
          showWorktree: x,
          backgroundItems: P,
          messages: this.exitReaders.getMessages(),
          isMidTurn: this.exitReaders.isMidTurn(),
        },
      });
      return;
    }
    this.#a({ ...this.#n, exit: { kind: "shutting-down" } }),
      rW(this.exitReaders.getMessages(), { responseStreaming: this.exitReaders.isResponseStreaming() }, this.#i)
        .catch((j) => (h(j), Ln(0, "prompt_input_exit")))
        .catch(h);
  };
  cancelExit = () => {
    if (this.#n.exit.kind === "none") return;
    this.#a({ ...this.#n, exit: q_e });
  };
  bindHost(S) {
    this.#c = S;
  }
  #d() {
    if (this.#c === null) throw Error("ComposerChrome: used before its screen bound a host");
    return this.#c;
  }
  openSessionMemories = (S) => {
    this.#d().openSessionMemories(S);
  };
}

function LB(S) {
  return S.name === "compact";
}

class OB {
  #e;
  #t = null;
  constructor(S) {
    this.#e = S;
  }
  bindHost(S) {
    this.#t = S;
  }
  #o() {
    if (!this.#t) throw Error("PromptSubmitController used before its host was bound");
    return this.#t;
  }
  submit = async (S, x, P) => {
    let {
        store: j,
        setAppState: H,
        setSessionState: Z,
        session: re,
        storageV5: ue,
        dialogStore: de,
        spinnerStore: pe,
        transcript: Re,
        turn: be,
        draft: Pe,
        messageQueue: Oe,
        chrome: Ie,
        scope: He,
        sessionController: Fe,
        idleNudge: Ve,
        transport: Ke,
        scrollPin: ot,
        addNotification: st,
      } = this.#e,
      { mainLoopModel: nt, canUseTool: Pt, onBeforeQuery: kt } = this.#o(),
      Ht = Pe.mode,
      yt = P?.pastedContentsOverride ?? Pe.pastedContents,
      lt = be.getSnapshot().isLoading,
      Rt = He.commands,
      to = Ie.getSnapshot().ideSelection;
    ot.repin(false, "onSubmit"), de.dismissKind(Rg.kind);
    let so = P?.fromKeybinding ? void 0 : { display: Lse(S, Ht), pastedContents: yt };
    if (S.trim().startsWith("/")) {
      let jo = gz(S, yt).trim(),
        { name: Qo, args: uo } = Xce(jo),
        Pn = ua(Qo, Rt),
        Yt = Pn && xp(Pn) ? Pn : void 0;
      if (Yt?.name === "clear") Ve.onClearSubmitted();
      let No = Kce(Yt, uo),
        cn = be.guard.isActive && (No || P?.fromKeybinding);
      if (Yt && cn && Yt.type === "local-jsx") {
        if (Pje(Yt, j.getState().endedByModel)) {
          st({
            key: "immediate-ended-by-model",
            kind: "feedback",
            text: wk("Claude ended this conversation. Start a new session (or /clear) to continue."),
            priority: "immediate",
          });
          return;
        }
        let tn = _b(Yt);
        if (!tn) {
          p(w4(Yt.name), "cmd_local_jsx_no_dialog_resolution"),
            st({ key: `immediate-${Yt.name}`, kind: "feedback", text: lx(Yt), priority: "immediate" });
          return;
        }
        if (S.trim() === Pe.value.trim()) Pe.clear(), x.clearBuffer();
        if (so) Tze(so, ue, Ht);
        let nn = Jp(S).filter((Oo) => yt[Oo.id]?.type === "text" && !yt[Oo.id]?.unavailable),
          pn = nn.length,
          Go = nn.reduce((Oo, xo) => Oo + (yt[xo.id]?.content.length ?? 0), 0);
        s("tengu_paste_text", { pastedTextCount: pn, pastedTextBytes: Go }),
          s("tengu_immediate_command_executed", { commandName: Yt.name, fromKeybinding: P?.fromKeybinding ?? false }),
          this.#r({
            command: Yt,
            commandName: Qo,
            commandArgs: uo,
            dispatchedAsImmediate: No,
            loadDialog: tn,
            mainLoopModel: nt,
          });
        return;
      }
    }
    if (Ke.refuseSubmit(S, Ht)) return;
    let jt = Ke.activeRemote.isRemoteMode,
      Gt = !lt || jt;
    if (!P?.fromKeybinding && Ht === "bash" && !Jp(S).some((jo) => !jo.match.startsWith("[Image"))) Tce(re, S.trim());
    let vo = S.trim().startsWith("/");
    if (Pe.stashedPrompt !== void 0 && !vo && Gt)
      Pe.popStash("outside"),
        st({ key: "stash-restored", kind: "feedback", text: "Draft restored", priority: "high", timeoutMs: 5000 });
    else if (Gt) {
      if (!P?.fromKeybinding) Pe.clear();
    }
    if (Gt) {
      if ((Pe.setMode("prompt"), to?.source !== "diff" || (!vo && Ht !== "bash"))) Ie.setIdeSelection(void 0);
      if ((be.markSubmit(), x.clearBuffer(), !vo && Ht === "prompt" && !jt))
        be.stream.setUserInputOnProcessing(S, { kind: "human" }), be.resetTiming();
    }
    let qt = Ke.submit(S, {
      pastedContents: yt,
      fromKeybinding: P?.fromKeybinding ?? false,
      recordHistory: ({ startsTurn: jo }) => {
        if (!so) return;
        if (jo) hX(so, ue, { submitMode: Ht });
        else Tze(so, ue, Ht);
      },
    });
    if (qt) {
      await qt;
      return;
    }
    let lo = Fe.awaitPendingHooks();
    if (lo) await lo;
    let To = kv.of(re);
    if (To.pending > 0) await To.tail;
    let ao = mnt(j.getState());
    if (
      (await _I({
        input: S,
        helpers: x,
        turn: be,
        queue: Oe,
        mode: Ht,
        commands: Rt,
        onInputChange: Pe.replaceValue,
        getCurrentInput: () => Pe.value,
        setPastedContents: Pe.setPastedContents,
        messages: Re.getSnapshot(),
        mainLoopModel: ao,
        suppressWorkflowKeyword: P?.suppressWorkflowKeyword,
        resumesStaleQuotaWait: P?.resumesStaleQuotaWait,
        wait: P?.wait,
        inputSource: P?.inputSource,
        pastedContents: yt,
        historyEntry: so,
        onSubmitProceed: Gt ? void 0 : () => Pe.setMode("prompt"),
        ideSelection: to,
        getAppState: () => j.getState(),
        setAppState: Z,
        querySource: hIe(),
        onBeforeQuery: kt,
        canUseTool: Pt,
        addNotification: st,
        setMessages: Re.replace,
        streamMode: pe.get().mode,
        deferSlashToEngine: LB,
        storageV5: ue,
      }),
      (vo || lt) && Pe.stashedPrompt !== void 0 && Pe.value.trim() === "")
    )
      Pe.popStash("outside"),
        st({ key: "stash-restored", kind: "feedback", text: "Draft restored", priority: "high", timeoutMs: 5000 });
  };
  async #r({ command: S, commandName: x, commandArgs: P, dispatchedAsImmediate: j, loadDialog: H, mainLoopModel: Z }) {
    let { transcript: re, turn: ue, draft: de, messageQueue: pe, scope: Re, addNotification: be } = this.#e,
      Pe = Re.localJsx,
      Oe = false,
      Ie,
      He = (ot, st) => {
        (Oe = true), Ie?.close();
        let nt = [];
        if (ot && st?.shouldQuery)
          pe.enqueue({ agentId: et(), value: ot, mode: "prompt", origin: { kind: "auto-continuation" } });
        else if (ot && st?.display !== "skip") {
          if ((be({ key: `immediate-${S.name}`, kind: "feedback", text: Ew(ot), priority: "immediate" }), !Nt()))
            nt.push(sm(oz(ei(S), P)), sm(`<${jp}>${Wt(ot)}</${jp}>`));
        }
        if (st?.metaMessages?.length) nt.push(...st.metaMessages.map((Pt) => xe({ content: Pt, isMeta: true })));
        if (nt.length) re.replace((Pt) => [...Pt, ...nt]);
        if (de.stashedPrompt !== void 0 && de.value.trim() === "") {
          if ((de.popStash("outside"), !st?.nextInput))
            be({ key: "stash-restored", kind: "feedback", text: "Draft restored", priority: "high", timeoutMs: 5000 });
        }
        if (st?.nextInput)
          if (st.submitNextInput)
            pe.enqueue({ agentId: et(), value: st.nextInput, mode: "prompt", origin: { kind: "auto-continuation" } });
          else de.replaceValue(st.nextInput);
      },
      Fe = ue.buildToolUseContext(re.getSnapshot(), [], gr(), Z),
      Ke = await (await H()).call(He, { ...Fe, isMidTurn: true, dispatchedAsImmediate: j }, P, x);
    if ((y(w4(S.name)), Ke && !Oe))
      Ie = Pe.show(Ke, { commandName: ei(S), immediate: true, hidesPrompt: false, retireAtTurnBoundary: true });
  }
  submitEmpty = () => {
    let { store: S, spinnerStore: x, turn: P, draft: j, messageQueue: H } = this.#e,
      { mainLoopModel: Z } = this.#o();
    return R_e({
      mode: j.mode,
      turn: P,
      queue: H,
      interruptRunningTurn: P.interruptForSubmit,
      streamMode: x.get().mode,
      mainLoopModel: Z,
      getAppState: () => S.getState(),
    });
  };
  submitToAgent = async (S, x, P, j) => {
    let { taskRegistry: H, transcript: Z, turn: re, draft: ue, addNotification: de } = this.#e,
      { mainLoopModel: pe, canUseTool: Re } = this.#o(),
      be = gz(S, j ?? ue.pastedContents);
    if (Cr(x))
      if ((Jdt(x.id, xe({ content: be, origin: { kind: "human" } }), H), x.status === "running"))
        nqe(x.id, be, H, { isMeta: true, origin: { kind: "human" } });
      else
        gW({
          agentId: x.id,
          prompt: be,
          promptIsMeta: true,
          promptOrigin: { kind: "human" },
          toolUseContext: re.buildToolUseContext(Z.getSnapshot(), [], new AbortController(), pe),
          canUseTool: Re,
          userInitiated: true,
        }).catch((Pe) => {
          if (Pe instanceof mW) {
            if (Zle(x.id, be, H, { isMeta: true, origin: { kind: "human" }, userInitiated: true })) {
              n("resumeAgentBackground lost the resume lock; typed message queued");
              return;
            }
            de({
              key: `resume-agent-failed-${x.id}`,
              kind: "warning",
              text: "Failed to resume agent: it is no longer running; message not delivered",
              color: "error",
              priority: "low",
            });
            return;
          }
          n(`resumeAgentBackground failed: ${l(Pe)}`),
            de({
              key: `resume-agent-failed-${x.id}`,
              kind: "warning",
              text: `Failed to resume agent: ${l(Pe)}`,
              color: "error",
              priority: "low",
            });
        });
    else xje(x.id, be, H, { kind: "human" });
    ue.clear(), P.clearBuffer();
  };
  submitSurveyFollowUp = (S) => {
    this.submit(S, jy).catch((x) => {
      n(`Survey feedback request failed: ${x instanceof Error ? x.message : String(x)}`);
    });
  };
  popQueuedIntoDraft = () => {
    let { draft: S, setAppState: x, messageQueue: P } = this.#e,
      j = P.popAllEditable(S.value, 0, S.pastedContents);
    if (!j) return;
    if (
      (S.replaceValue(j.text),
      S.setMode(j.mode),
      x((H) => (H.queueEditIndex === null ? H : { ...H, queueEditIndex: null })),
      j.images.length > 0)
    )
      S.setPastedContents((H) => {
        let Z = { ...H };
        for (let re of j.images) Z[re.id] = re;
        return Z;
      });
  };
  cancelAndDrainPending = () => {
    let { turn: S, messageQueue: x } = this.#e,
      P = S.stream.getSnapshot().userInputOnProcessing,
      j = S.stream.placeholderTracker.pending && P ? P : void 0,
      H = [];
    for (let ue = x.popEditableAt(0, "", 0); ue; ue = x.popEditableAt(0, "", 0)) if (ue.text) H.push(ue.text);
    let Z =
      H.join(`
`) || void 0;
    return (
      S.cancel("local"),
      [j, Z].filter(Boolean).join(`

`) || void 0
    );
  };
}

F();

function H9(S) {
  let x = hn(),
    { storageV5: P } = ge();
  A(() => {
    if ($n()) return;
    let j = ci(),
      H = m7e();
    if (j.lastGracefulShutdown !== false || j.lastVersionBase !== H)
      jc((de) => ({ ...de, lastGracefulShutdown: false, lastVersionBase: H }), P);
    let Z = false,
      re =
        O() && P !== void 0
          ? BC(async () => {
              await B9n(S?.(), P), (Z = true);
            })
          : void 0;
    M0n(), rte(Msn);
    let ue = () => {
      if (f2t()) {
        let de = x ? "Cost: " : "";
        process.stdout.write(
          `
` +
            de +
            OG() +
            `
`,
        );
      }
      if (!Z) j9n(S?.());
    };
    return (
      process.on("exit", ue),
      () => {
        if ((re?.(), ks())) Iye(S?.(), P);
        process.off("exit", ue);
      }
    );
  }, [x, P]);
}

F();

function $9() {
  let S = At(),
    x = W((pe) => pe.viewingAgentTaskId),
    P = W((pe) => (pe.viewingAgentTaskId ? pe.tasks[pe.viewingAgentTaskId] : void 0)),
    j = P && Dd(P) ? P : void 0,
    H = j?.status,
    Z = j?.error,
    re = P !== void 0,
    ue = C(void 0);
  if (Cr(P)) ue.current = P.parentAgentId;
  else if (P !== void 0) ue.current = void 0;
  let de = W((pe) => (ue.current ? pe.tasks[ue.current] !== void 0 : false));
  A(() => {
    if (!x) return;
    if (!re) {
      let pe = ue.current;
      if (((ue.current = void 0), pe && de)) rq(pe, S);
      else jU(S);
      return;
    }
    if (!j) return;
    if (H === "killed" || H === "failed" || Z || (H !== "running" && H !== "completed" && H !== "pending")) {
      jU(S);
      return;
    }
  }, [x, re, de, j, H, Z, S]);
}

F();

async function W9(S) {
  if (!io() || !eHe()) return null;
  let { ctx: x, description: P, updatedInput: j, suggestions: H } = S,
    { askSuppressesAlwaysAllowRule: Z, matchedAskRule: re } = S,
    ue = j ?? x.input;
  try {
    let de = () => x.toolUseContext.setAppState((Oe) => ({ ...Oe, pendingWorkerRequest: null })),
      pe = false,
      Re = null,
      be = false,
      Pe = await new Promise((Oe) => {
        let { resolve: Ie, claim: He, isResolved: Fe } = tPt(Oe),
          Ve = Eit({
            toolName: x.tool.name,
            toolUseId: x.toolUseID,
            input: ue,
            description: P,
            permissionSuggestions: H,
          });
        Tit({
          requestId: Ve.id,
          toolUseId: x.toolUseID,
          toolName: Ve.toolName,
          inputDigest: Z0e(Ve.toolName, ue),
          onAllow(Ke, ot, st, nt) {
            if (!He()) return;
            de();
            let Pt = Ke && Object.keys(Ke).length > 0 ? Ke : ue;
            Ie(
              x.handleUserAllow(Pt, ot, {
                feedback: st,
                contentBlocks: nt,
                askSuppressesAlwaysAllowRule: Z,
                matchedAskRule: re,
              }),
            );
          },
          onReject(Ke, ot) {
            if (!He()) return;
            de(),
              x.logDecision({ decision: "reject", source: { type: "user_reject", hasFeedback: !!Ke } }),
              Ie(x.cancelAndAbort(Ke, void 0, ot));
          },
          onRefuse(Ke, ot) {
            if (!He()) return;
            de(), (Re = ot), Ie({ behavior: "ask", message: Ke });
          },
          onUnboundVerdict() {
            if (Fe()) return;
            be = true;
          },
        }),
          Ait(Ve, x.toolUseContext.storageV5).then((Ke) => {
            if (Ke || !He()) return;
            kje(Ve.id),
              (pe = true),
              de(),
              Ie({
                behavior: "ask",
                message:
                  "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call, or ask the lead directly.",
              });
          }),
          x.toolUseContext.setAppState((Ke) => ({
            ...Ke,
            pendingWorkerRequest: { toolName: x.tool.name, toolUseId: x.toolUseID, description: P },
          })),
          x.toolUseContext.abortController.signal.addEventListener(
            "abort",
            () => {
              if (!He()) return;
              kje(Ve.id), de(), x.logCancelled(), Ie(x.cancelAndAbort(void 0, true));
            },
            { once: true },
          );
      });
    if (pe) p("permission_swarm_forward", "mailbox_write_failed");
    else if (Re !== null)
      g("permission_swarm_forward", Re === "denial" ? "denial_binding_mismatch" : "approval_binding_mismatch");
    else if (be) g("permission_swarm_forward", "verdict_unbound");
    else y("permission_swarm_forward");
    return Pe;
  } catch (de) {
    return p("permission_swarm_forward", "permission_swarm_forward_failed"), h(we(de)), null;
  }
}

function Iit(Q9) {
  let Mit = Q9.autoModeEnvSetup?.denials ?? 0;
  if (Mit >= mD) {
    return Q9;
  }
  return { ...Q9, autoModeEnvSetup: { ...Q9.autoModeEnvSetup, denials: Mit + 1 } };
}

function HB(S, x) {
  return EM.includes(S) ? b({ command: x.command }) : b(x);
}

function X_e() {
  let oit = _(9),
    { recordDenial: V_e, getDenials: G_e, removeDenial: K_e } = NK(),
    { storageV5: Q_e } = ge(),
    { addNotification: q9 } = Or(),
    z_e = At(),
    nit;
  if (oit[0] !== z_e) (nit = RG(z_e)), (oit[0] = z_e), (oit[1] = nit);
  else nit = oit[1];
  let RI = nit,
    rit;
  if (oit[2] !== q9 || oit[3] !== G_e || oit[4] !== V_e || oit[5] !== K_e || oit[6] !== RI || oit[7] !== Q_e)
    (rit = async (Vp, WC, hR, iit, V9, sit) => {
      let Y_e;
      let ait = G_e();
      if (ait.length > 0) {
        let MWo = HB(Vp.name, WC);
        Y_e = ait.find((lit) => lit.toolName === Vp.name && lit.inputKey === MWo);
      }
      let wit = new Promise((dg) => {
        let Xm = vje(Vp, WC, hR, iit, V9, RI);
        if (Xm.resolveIfAborted(dg)) {
          return;
        }
        return (sit !== void 0 ? Promise.resolve(sit) : CSe(Vp, WC, hR, iit, V9, q9, RI))
          .then(async (Gl) => {
            if (Gl.behavior === "allow") {
              if (Xm.resolveIfAborted(dg)) {
                return;
              }
              if (Gl.decisionReason?.type === "classifier" && Gl.decisionReason.classifier === "auto-mode")
                dsn(RI, V9, Gl.decisionReason.reason);
              Xm.logDecision({ decision: "accept", source: "config" }, { input: Gl.updatedInput ?? WC }),
                dg(
                  Xm.buildAllow(Gl.updatedInput ?? WC, {
                    decisionReason: Gl.decisionReason,
                    matchedAskRule: Gl.matchedAskRule,
                  }),
                );
              return;
            }
            let G9 = he(hR);
            let J_e = await Vp.description(WC, {
              isNonInteractiveSession: hR.options.isNonInteractiveSession,
              toolPermissionContext: G9,
              tools: hR.options.tools,
            });
            if (Xm.resolveIfAborted(dg)) {
              return;
            }
            let uit = (K9) => {
              if (
                K9.decisionReason?.type !== "classifier" ||
                K9.decisionReason.classifier !== "auto-mode" ||
                K9.decisionReason.noVerdict
              ) {
                return;
              }
              let cit = K9.decisionReason.reason ?? "";
              V_e({ toolName: Vp.name, display: J_e, inputKey: HB(Vp.name, WC), reason: cit, timestamp: Date.now() }),
                Ae(Iit, Q_e);
              let FB = cit;
              if (FB.length > 80) FB = `${ce(FB, 79)}\u2026`;
              q9({
                key: "auto-mode-denied",
                kind: "warning",
                priority: "immediate",
                segments: [
                  { text: `${(Vp.userFacingName(WC) || Vp.name).toLowerCase()} denied by auto mode`, color: "error" },
                  ...(FB ? [{ text: ` \xB7 ${FB}`, dim: true }] : []),
                  { text: " \xB7 /permissions", dim: true },
                ],
              });
            };
            switch (Gl.behavior) {
              case "deny": {
                Xm.logDecision({ decision: "reject", source: "config" }), uit(Gl), dg(Gl);
                return;
              }
              case "ask": {
                if (G9.awaitAutomatedChecksBeforeDialog) {
                  let bit = await Aje({
                    ctx: Xm,
                    updatedInput: Gl.updatedInput,
                    suggestions: Gl.suggestions,
                    permissionMode: G9.mode,
                  });
                  if (bit) {
                    dg(bit);
                    return;
                  }
                }
                if (Xm.resolveIfAborted(dg)) {
                  return;
                }
                let Cit =
                  Gl.localDisplayOnly ||
                  Gl.forcedByCaller === true ||
                  Gl.denialLimitFallback !== void 0 ||
                  hR.forRemoteExecution === true
                    ? null
                    : await W9({
                        ctx: Xm,
                        description: J_e,
                        updatedInput: Gl.updatedInput,
                        suggestions: Gl.suggestions,
                        askSuppressesAlwaysAllowRule: Gl.suppressAlwaysAllowRule === true,
                        matchedAskRule: Gl.matchedAskRule,
                      });
                if (Cit) {
                  dg(Cit);
                  return;
                }
                let vit = hR.permissionRelays;
                return Rje(
                  {
                    ctx: Xm,
                    description: J_e,
                    result: Gl,
                    awaitAutomatedChecksBeforeDialog: G9.awaitAutomatedChecksBeforeDialog,
                    bridgeCallbacks: vit.bridge?.permission,
                    channelCallbacks: vit.channel,
                    onClassifierDenyDelivered: uit,
                  },
                  dg,
                );
              }
            }
          })
          .catch((UB) => {
            if (UB instanceof Ze || UB instanceof sc)
              n(`Permission check threw ${UB.constructor.name} for tool=${Vp.name}: ${UB.message}`),
                Xm.logCancelled(),
                dg(Xm.cancelAndAbort(void 0, true));
            else h(ft(we(UB), "useCanUseTool permission flow failed")), dg(Xm.cancelAndAbort(void 0, true));
          })
          .finally(() => {
            V8(RI, V9);
          });
      });
      if (Y_e) {
        let xit = Y_e;
        wit.then((Pit) => {
          if (Pit.behavior === "allow")
            s("tengu_auto_mode_subsequent_approval", {
              toolName: Un(Vp.name),
              isMcp: Vp.isMcp ?? false,
              msSinceDeny: Date.now() - xit.timestamp,
              allowReasonType: ke(Pit.decisionReason?.type),
            }),
              K_e(xit);
        });
      }
      return wit;
    }),
      (oit[2] = q9),
      (oit[3] = G_e),
      (oit[4] = V_e),
      (oit[5] = K_e),
      (oit[6] = RI),
      (oit[7] = Q_e),
      (oit[8] = rit);
  else rit = oit[8];
  return rit;
}

var z9 = X_e;

F();

var mRe = "low-priority-offer",
  pRe = "low-priority-active",
  $B = { kind: "event", color: "text" };

function AI() {
  return Lt(cmt, Ybe, Ybe);
}

function fRe() {
  return wF().noticeLine;
}

function hRe() {
  return e(CRe, {});
}

function CRe() {
  let Dit = _(5),
    oRe = AI(),
    lRe = Lt(cmt, lmt, lmt),
    Y9;
  if (Dit[0] !== lRe || Dit[1] !== oRe) (Y9 = yRe(oRe, lRe)), (Dit[0] = lRe), (Dit[1] = oRe), (Dit[2] = Y9);
  else Y9 = Dit[2];
  let Nit;
  if (Dit[3] !== Y9) (Nit = e(t, { children: Y9 })), (Dit[3] = Y9), (Dit[4] = Nit);
  else Nit = Dit[4];
  return Nit;
}

function yRe(S, x) {
  let P = wF(),
    j = S.phase === "active" ? ad(S.resetsAtSeconds, false) : void 0,
    H = P.statusLine.includes("{reset}")
      ? P.statusLine.replace("{reset}", j ?? "your usage limit resets")
      : P.statusLine,
    Z = x === void 0 ? "" : ` \xB7 ${P.allowanceNote.replace("{percent}", `${x}%`)}`;
  return `${H}${Z} \xB7 /${uz} to stop`;
}

function bRe(S, x = Ite()) {
  switch (S) {
    case "reset":
    case "user":
    case "conversation_reset":
    case "account_switch":
      return null;
    case "weekly":
      return "Lower-priority mode ended \xB7 you have reached your weekly usage limit";
    case "budget":
      return `${wF().budgetExhaustedCopy} \xB7 lower-priority mode ended; it is offered again after your weekly limit resets`;
    case "off":
    case "ineligible":
    case "wall":
      return "Lower-priority mode is no longer available \xB7 it has ended; new messages wait for your usage limit to reset";
    case "extra_usage":
      return "Extra usage is now covering your requests \xB7 lower-priority mode ended";
    case "max_wait": {
      let P = x === void 0 ? void 0 : ad(Math.ceil(x / 1000), false);
      return `No room for lower-priority work for a while \xB7 lower-priority mode stopped; new messages wait for your usage limit to reset${P ? ` \xB7 /${uz} again after ${P}` : ""}`;
    }
  }
}

function qB(WWo) {
  let PI = _(23),
    { transcript: J9 } = WWo,
    dm = QC(),
    Fd = AI(),
    Lit;
  if (PI[0] !== dm || PI[1] !== Fd.phase)
    (Lit = Fd.phase === "idle" && Sse(dm)), (PI[0] = dm), (PI[1] = Fd.phase), (PI[2] = Lit);
  else Lit = PI[2];
  let mg = Lit,
    Oit;
  if (PI[3] !== dm || PI[4] !== mg || PI[5] !== Fd.phase)
    (Oit = Fd.phase === "idle" && !mg && dm.lowPriorityOffer === "treatment" ? Ite() : void 0),
      (PI[3] = dm),
      (PI[4] = mg),
      (PI[5] = Fd.phase),
      (PI[6] = Oit);
  else Oit = PI[6];
  let cRe = Oit,
    Fit;
  if (PI[7] !== dm || PI[8] !== mg || PI[9] !== Fd || PI[10] !== cRe)
    (Fit = Fd.phase === "active" ? KBt(Fd) : mg && dm.resetsAt !== void 0 ? dm.resetsAt * 1000 : (cRe ?? null)),
      (PI[7] = dm),
      (PI[8] = mg),
      (PI[9] = Fd),
      (PI[10] = cRe),
      (PI[11] = Fit);
  else Fit = PI[11];
  let X9 = mq(Fit),
    Bit,
    Uit;
  if (PI[12] !== X9 || PI[13] !== Fd.phase)
    (Bit = () => {
      if (X9 && Fd.phase === "active") XBt();
    }),
      (Uit = [X9, Fd.phase]),
      (PI[12] = X9),
      (PI[13] = Fd.phase),
      (PI[14] = Bit),
      (PI[15] = Uit);
  else (Bit = PI[14]), (Uit = PI[15]);
  A(Bit, Uit), P0(mRe, "medium", mg || null, fRe, $B), P0(pRe, "high", Fd.phase === "active" || null, hRe, $B);
  let jit, Hit;
  if (PI[16] !== dm || PI[17] !== mg)
    (jit = () => {
      if (mg) Mke(dm, "notice");
    }),
      (Hit = [mg, dm]),
      (PI[16] = dm),
      (PI[17] = mg),
      (PI[18] = jit),
      (PI[19] = Hit);
  else (jit = PI[18]), (Hit = PI[19]);
  A(jit, Hit);
  let $it, Wit;
  if (PI[20] !== J9)
    ($it = () =>
      sze((qit) => {
        if (qit.type !== "ended") {
          return;
        }
        let Vit = bRe(qit.reason);
        if (Vit === null) {
          return;
        }
        J9.replace((qWo) => [...qWo, Dt(Vit, "notice")]);
      })),
      (Wit = [J9]),
      (PI[20] = J9),
      (PI[21] = $it),
      (PI[22] = Wit);
  else ($it = PI[21]), (Wit = PI[22]);
  A($it, Wit);
}

F();

var Git = "juniper-tide-offer",
  Qit = "juniper-tide-spent",
  zit = { kind: "event", color: "text" },
  Yit = { kind: "event", color: "inactive" };

function Jit() {
  return T9().noticeLine;
}

function Xit(S) {
  return S;
}

function Z9() {
  let S = QC();
  Lt(S2e, mL, mL);
  let x = Nke(S),
    P = x ? void 0 : Fke(S);
  mq((x || P !== void 0) && S.resetsAt !== void 0 ? S.resetsAt * 1000 : null),
    P0(Git, "high", x || null, Jit, zit),
    P0(Qit, "medium", P ?? null, Xit, Yit),
    A(() => {
      if (x) b2e(S, "notice");
    }, [x, S]);
}

F();

function wRe(S) {
  if (S.skipSlashCommands && mSt(S.origin)) return false;
  if (typeof S.value === "string") return S.value.trim().startsWith("/");
  for (let x of S.value) if (x.type === "text") return x.text.trim().startsWith("/");
  return false;
}

function e7({ queue: S, executeInput: x }) {
  if (S.getCommandQueue().find(eIe)?.screeningPending === true) return { processed: false };
  let P = NKt(S, eIe);
  if (!P) return { processed: false };
  if (wRe(P) || P.mode === "bash") {
    let de = [S.dequeue((pe) => pe === P)];
    return S.setInFlightDrainBatch(de), x(de).finally(() => S.clearInFlightDrainBatch(de)), { processed: true };
  }
  let j = P.mode,
    H = false,
    Z = 0,
    re = S.dequeueAllMatching((ue) => {
      if (H) return false;
      if (mu(ue) && ue.screeningPending === true) return (H = true), false;
      if (mu(ue) && (ue.promptSubmitted !== void 0 || ue.drainOnly === true)) {
        if (((H = true), Z > 0)) return false;
      }
      let de = mu(ue) && !wRe(ue) && ue.passive !== true && ue.mode === j;
      if (de) Z++;
      return de;
    });
  if (re.length === 0) return { processed: false };
  return S.setInFlightDrainBatch(re), x(re).finally(() => S.clearInFlightDrainBatch(re)), { processed: true };
}

var Zit = () => () => {},
  est = new Set(["managed_settings_security", "sandbox_network_access", "mcp_url_elicitation"]);

function t7({ turn: S, hasActiveLocalJsxUI: x }) {
  let P = S.guard,
    j = Lt(P.subscribe, P.getSnapshot),
    H = Iu(),
    Z = Zd(),
    re = We(Tge),
    ue = B(() => re !== null && re.getState().open.some((Oe) => Oe.userInvoked !== true && est.has(Oe.kind)), [re]),
    de = Lt(re?.subscribe ?? Zit, ue, ue),
    pe = Lt(jNn, art, art),
    Re = ct(),
    [be, Pe] = u(0);
  A(() => {
    if (j || P.isActive) return;
    if (x && !H.getCommandQueueSnapshot().every((Ie) => !eIe(Ie) || oxt(Ie.uuid))) return;
    if (de || ue() || pe || art()) return;
    if (Z.length === 0) return;
    let Oe = kv.of(Re);
    if (Oe.pending > 0) {
      let Ie = true;
      return (
        Oe.tail.then(() => {
          if (!Ie) return;
          if (
            !P.isActive &&
            Oe.pending === 0 &&
            !ue() &&
            !art() &&
            !(re !== null && wke(re.getState(), Qm.kind)) &&
            H.getCommandQueue().length > 0
          )
            e7({ queue: H, executeInput: S.executeQueuedInput });
          Pe((He) => He + 1);
        }),
        () => {
          Ie = false;
        }
      );
    }
    e7({ queue: H, executeInput: S.executeQueuedInput });
  }, [H, Z, j, S, x, de, ue, pe, P, Re, be]);
}

F();

function r7(S) {
  let x = UXt(),
    P = Xe(S, (re) => re.isLoading),
    j = z(() => x.subscribe.bind(x), [x]),
    H = B(() => x.revision, [x]),
    Z = Lt(j, H);
  A(() => {
    if (P) return;
    let re = x.poll();
    if (re) S.submitIncomingPrompt(re.content);
  }, [P, Z, x, S]);
}

class VB {
  #e;
  #t;
  #o = Ue();
  constructor({ initial: S, project: x }) {
    (this.#e = S), (this.#t = x);
  }
  getSnapshot = () => this.#e;
  subscribe = (S) => this.#o.subscribe(S);
  replace = (S) => {
    let x = this.#e,
      P = typeof S === "function" ? S(x) : S;
    if (((this.#e = P), this.#t(P, x), P !== x)) this.#o.emit();
  };
  apply = (S) => {
    this.replace((x) => rRe(x, S));
  };
}

F();

function u7(I1o) {
  let ARe = _(8),
    { input: E1o, progress: yR, verbose: a7 } = I1o;
  const PRe = `<bash-input>${E1o}</bash-input>`;
  let l7;
  if (ARe[0] !== PRe)
    (l7 = e(NRe, { addMargin: false, param: { text: PRe, type: "text" } })), (ARe[0] = PRe), (ARe[1] = l7);
  else l7 = ARe[1];
  let c7;
  if (ARe[2] !== yR || ARe[3] !== a7)
    (c7 = yR
      ? e(TQ, {
          fullOutput: yR.fullOutput,
          output: yR.output,
          elapsedTimeSeconds: yR.elapsedTimeSeconds,
          totalLines: yR.totalLines,
          verbose: a7,
        })
      : Sf(_i, "renderToolUseProgressMessage")?.([], { verbose: a7, tools: [], terminalSize: void 0 })),
      (ARe[2] = yR),
      (ARe[3] = a7),
      (ARe[4] = c7);
  else c7 = ARe[4];
  let tst;
  if (ARe[5] !== l7 || ARe[6] !== c7)
    (tst = r(o, { flexDirection: "column", marginTop: 1, children: [l7, c7] })),
      (ARe[5] = l7),
      (ARe[6] = c7),
      (ARe[7] = tst);
  else tst = ARe[7];
  return tst;
}

var ost = { background_hint: false, bash_mode_progress: true, agent_progress: false };

function d7(S) {
  for (let x of S.values()) if (ost[x.kind]) return true;
  return false;
}

function p7(S) {
  let x = [],
    P = false;
  for (let j of S.values()) {
    if (j.kind === "background_hint") {
      if (P) continue;
      P = true;
    }
    x.push(j);
  }
  return x;
}

var S7 = {
  background_hint: () => e(s0t, {}),
  bash_mode_progress: (S) => e(u7, { input: S.input, progress: S.progress, verbose: S.verbose }),
  agent_progress: (S, { tools: x }) => $Re(S.progressMessages, { tools: x, verbose: false }),
};

function IRe(S, x) {
  switch (S.kind) {
    case "background_hint":
      return S7.background_hint(S, x);
    case "bash_mode_progress":
      return S7.bash_mode_progress(S, x);
    case "agent_progress":
      return S7.agent_progress(S, x);
    default: {
      let P = S;
      return null;
    }
  }
}

function zB($1o) {
  let MRe = _(7),
    { progress: f7, tools: GB } = $1o;
  if (f7.size === 0) {
    return null;
  }
  let y7;
  if (MRe[0] !== f7 || MRe[1] !== GB) {
    let KB;
    if (MRe[3] !== GB) (KB = (W1o) => e(U, { children: IRe(W1o, { tools: GB }) })), (MRe[3] = GB), (MRe[4] = KB);
    else KB = MRe[4];
    y7 = p7(f7).map(KB);
    (MRe[0] = f7), (MRe[1] = GB), (MRe[2] = y7);
  } else y7 = MRe[2];
  let KB;
  if (MRe[5] !== y7)
    (KB = e(o, { flexDirection: "column", width: "100%", children: y7 })), (MRe[5] = y7), (MRe[6] = KB);
  else KB = MRe[6];
  return KB;
}

F();

function b7(S, x, P, j) {
  A(() => {
    return;
  }, [S, x, P, j]);
}

F();

export { $9, B9, EB, H9, LB, NB, OB, VB, Z9, b7, d7, j9, qB, r7, t7, z9, zB };
