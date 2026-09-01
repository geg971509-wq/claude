// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _De, NBt, Tdn, Edn, $ce } from "/$bunfs/root/chunk-vm4xrmr7.js";
import { $5 } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c, ke } from "/$bunfs/root/chunk-4xj01xwv.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { Qe, Bt, I, Ae, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { YO } from "/$bunfs/root/chunk-gcks6mn0.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { vt, co, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { k } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { Ct, h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Y } from "/$bunfs/root/chunk-s7e0px8j.js";
import { ir } from "/$bunfs/root/chunk-2rx5nghb.js";
import { P$ } from "/$bunfs/root/chunk-a48rnvhj.js";
import { oi, Tr } from "/$bunfs/root/chunk-492vgtnr.js";
import { Fwn, Zbt } from "/$bunfs/root/chunk-v7yhn7cf.js";
import { DTn, Iwt } from "/$bunfs/root/chunk-4r03fm98.js";
import { ms, Gg, Bm, RC } from "/$bunfs/root/chunk-tzhtxm67.js";
import { gmt } from "/$bunfs/root/chunk-308krgtb.js";
import { Yi } from "/$bunfs/root/chunk-98tgyb1d.js";
import { aut, $y, oBt } from "/$bunfs/root/chunk-zze8764r.js";
import { lMe, b9t, EEe, w9t, xyn, A3 } from "/$bunfs/root/chunk-hz299nfa.js";
import { KS } from "/$bunfs/root/chunk-k7v7xwvs.js";
import { w2t } from "/$bunfs/root/chunk-dzv4k86d.js";
import { Mde, H9t, ier, ser, ler, jyn, Wyn, vEe, SSt, bSt, wSt } from "/$bunfs/root/chunk-dc4hb8f7.js";
import { CV, C3, uh, cMe, Lde } from "/$bunfs/root/chunk-z9jgt14c.js";
import { lre, L9t, M9t, N9t, v3, tO, F9t, Kyn, $9t } from "/$bunfs/root/chunk-r6ppzf4r.js";
import { Vfn, Jfn } from "/$bunfs/root/chunk-nfmyt8cw.js";
import { s3, Lne } from "/$bunfs/root/chunk-gmj1vprd.js";
import { vpn } from "/$bunfs/root/chunk-z6m3k8w5.js";
import { Ien } from "/$bunfs/root/chunk-qnzms7dq.js";
import { sje, aje, lUn, lje, Bot } from "/$bunfs/root/chunk-2vtynm9p.js";
import { zot } from "/$bunfs/root/chunk-swz9hbyx.js";
import { Qse, Ahe } from "/$bunfs/root/chunk-mgzr1m12.js";
import { jot, Wot, Ehe } from "/$bunfs/root/chunk-cw1vmt6d.js";
import { gUn } from "/$bunfs/root/chunk-dp9rvsnb.js";
import { Che } from "/$bunfs/root/chunk-avdt70rq.js";
import { Wh } from "/$bunfs/root/chunk-h6vcz0m0.js";
import { _Ae } from "/$bunfs/root/chunk-szz73wxx.js";
import { Q } from "/$bunfs/root/chunk-wag5ye9w.js";
class Kr {
  _active = false;
  _pending = [];
  get active() {
    return this._active;
  }
  get pendingCount() {
    return this._pending.length;
  }
  start() {
    this._active = true;
  }
  end() {
    return (this._active = false), this._pending.splice(0);
  }
  enqueue(...i) {
    if (!this._active) return false;
    return this._pending.push(...i), true;
  }
  drop() {
    this._active = false;
    let i = this._pending.length;
    return (this._pending.length = 0), i;
  }
  deactivate() {
    this._active = false;
  }
}
var An = 3,
  Mn = 3600000,
  On = 24 * An,
  io = 24 * Mn,
  oo = 600000,
  Pn = 30000,
  yt = 300000,
  In = 5000,
  so = 14,
  ao = "could not reach the Remote Control server for about 30 minutes",
  Dn = "the connection to the Remote Control server kept dropping after each reconnect",
  jn = `the connection to the Remote Control server dropped more than ${On} times in 24 hours`,
  Bn = { attempts: so, exhaustedDetail: ao };
function $n() {
  let i = [],
    u = Number.NEGATIVE_INFINITY;
  return {
    charge(f, v) {
      if (((i = i.filter((R) => f - R < io)), v && i.length >= On)) return "daily_exhausted";
      if (Q(i, (R) => f - R < Mn && (!v || R >= u)) >= An) return "hourly_exhausted";
      return i.push(f), "charged";
    },
    noteHealthyBeat(f) {
      let v = i.at(-1);
      if (v !== void 0 && f - v >= oo) u = f;
    },
  };
}
var lo = 300000,
  uo = 2592000000,
  Fn = 20,
  fo = 15000,
  _o = /^(session|cse)_[A-Za-z0-9_-]+$/;
async function Nn() {
  if (Ct()) return false;
  let { getFeatureValue_CACHED_MAY_BE_STALE: i } = await import("/$bunfs/root/chunk-2sq45cbb.js");
  return i("tengu_bridge_placeholder_sweep", true);
}
function xn(i) {
  let u = oi();
  return (u.placeholderWriteChain = u.placeholderWriteChain.then(i, i)), u.placeholderWriteChain;
}
function Hn(i, u) {
  return xn(async () => {
    if (!(await Nn())) return;
    let f = await RC(),
      v = { pid: process.pid, procStart: f, createdAt: Date.now() };
    await Ae((T) => {
      let R = Object.entries(T.replBridgePlaceholders ?? {}).filter(([A]) => !Un(A, i));
      R.push([i, v]), R.sort((A, D) => D[1].createdAt - A[1].createdAt);
      let F = R.slice(Fn);
      if (F.length > 0)
        n(`[bridge:placeholder] evicting ${F.length} record(s) past cap: ${F.map(([A]) => A).join(", ")}`);
      return { ...T, replBridgePlaceholders: Object.fromEntries(R.slice(0, Fn)) };
    }, u);
  });
}
async function iUn() {
  try {
    let i = Object.values(ie().replBridgePlaceholders ?? {}),
      u = 1,
      f = new Set();
    for (let v of i) {
      if (v.pid === process.pid || f.has(v.pid)) continue;
      if (v.procStart !== void 0 ? ms(v.pid) && (await Bm(v.pid, v.procStart)) : ms(v.pid)) f.add(v.pid), u++;
    }
    return u;
  } catch {
    return 0;
  }
}
function vr(i, u) {
  return xn(async () => {
    await Ae((f) => {
      let v = Object.keys(f.replBridgePlaceholders ?? {}).filter((R) => Un(R, i));
      if (v.length === 0) return f;
      let T = { ...f.replBridgePlaceholders };
      for (let R of v) delete T[R];
      return { ...f, replBridgePlaceholders: T };
    }, u);
  });
}
function Un(i, u) {
  return Tr(i) === Tr(u);
}
async function go(i) {
  if (Gg(i.pid)) return true;
  return ms(i.pid) && !(await Bm(i.pid, i.procStart));
}
function wt(i) {
  if (i === "invalid" || i === "skipped_superseded" || i === "skipped_owner_changed") return true;
  return typeof i === "number" && i < 500 && i !== 401 && i !== 408 && i !== 429;
}
async function po(i, u, f) {
  if (!(await go(u))) return "keep";
  let { session: v, notFound: T } = await w2t(i, { baseUrl: f.baseUrl, getAccessToken: f.getAccessToken });
  if (T) return "remove";
  if (!v) return "keep";
  if (!v.created_at || !v.updated_at)
    return n(`[bridge:placeholder] session GET carried no timestamps for ${i}; keeping`), "keep";
  if (v.updated_at !== v.created_at) return s("tengu_bridge_placeholder_used_session", { v2: true }), "remove";
  let R = await f.archive(i);
  if (!wt(R)) return p("bridge_placeholder_sweep", typeof R === "number" ? `http_${R}` : R), "keep";
  return (
    y("bridge_placeholder_sweep"), n(`[bridge:placeholder] archived orphaned placeholder ${i} (status=${R})`), "remove"
  );
}
function qn(i) {
  let u = oi();
  if (u.placeholderSweepStarted) return Promise.resolve();
  return (
    (u.placeholderSweepStarted = true),
    (async () => {
      if ((await ne(i.startDelayMs ?? fo), !(await Nn()))) return;
      let f = ie().replBridgePlaceholders;
      if (!f) return;
      let v = i.skipSessionId ? Tr(i.skipSessionId) : void 0,
        T = [];
      for (let [R, F] of Object.entries(f)) {
        let A = Date.now() - F.createdAt;
        if (Math.abs(A) < lo || Tr(R) === v) continue;
        if (!_o.test(R)) {
          T.push(R);
          continue;
        }
        if ((await po(R, F, i)) === "remove" || A > uo) T.push(R);
      }
      if (T.length > 0)
        await Ae((R) => {
          if (!R.replBridgePlaceholders) return R;
          let F = { ...R.replBridgePlaceholders };
          for (let A of T) delete F[A];
          return { ...R, replBridgePlaceholders: F };
        }, i.storageV5);
    })().catch((f) => {
      n(`[bridge:placeholder] sweep failed: ${l(f)}`, { level: "error" });
    })
  );
}
var Et = 180000,
  ho = 90000;
function St(i, u, f) {
  switch (i) {
    case void 0:
      return "no close code received";
    case 4090:
      switch (u) {
        case "superseded_by_worker":
          return "another connection took over this session (usually another device or Claude Code session) \u2014 this device is standing down (code 4090)";
        case "session_not_active":
          return "this session was ended or archived from another device or app (code 4090)";
        case "session_not_found":
          return "the server no longer reports this session \u2014 it may have been deleted from another device or app (code 4090)";
        case "epoch_stale":
          return "the session worker registration went stale \u2014 no active worker holds it (code 4090)";
        default:
          return "this connection is no longer the active worker for the session (code 4090)";
      }
    case 4091:
      return "transport init failed (code 4091)";
    case 4092:
      return "connection dropped \u2014 no close reason from server (code 4092)";
    case 4093:
      return "presence heartbeats to the server kept failing (code 4093)";
    case 4094:
      return "worker credential expired or rejected (code 4094)";
    case 401:
      return "auth token expired (code 401)";
    case 403: {
      if (!lre(f?.rejectSource)) return "server rejected connection (code 403)";
      let v = L9t(f.rejectSource);
      if (f.streak === void 0) return v;
      let T = Math.max(1, Math.round(f.streak.streakMs / 60000));
      return `${v}, and kept refusing for ${T} ${k(T, "minute")}`;
    }
    case 404:
      return "session not found on server (code 404)";
    case 1002:
      return "server rejected the connection handshake (code 1002)";
    case 4001:
      return "session expired or not found on server (code 4001)";
    case 4003:
      return "server rejected credentials (code 4003)";
    default:
      return `code ${i}`;
  }
}
async function Tt(i) {
  let { sessionUrl: u, ingressToken: f, sessionId: v, initialSequenceNum: T, getAuthToken: R } = i,
    F;
  if (R) F = () => DTn(R());
  else Iwt(f);
  let A = i.epoch ?? (await Ahe(u, f));
  n(
    `[bridge:repl] CCR v2: worker sessionId=${v} epoch=${A}${i.epoch !== void 0 ? " (from /bridge)" : " (via registerWorker)"}`,
  );
  let D = new URL(u);
  D.pathname = D.pathname.replace(/\/$/, "") + "/worker/events/stream";
  let K = new sje(D, {}, { sessionId: v, initialSequenceNum: T, getAuthHeaders: F }),
    oe = !i.outboundOnly,
    ve = (i.selfHealHeartbeats ?? false) && oe,
    Fe = (i.nonOrigin403Retry ?? false) && oe,
    se = Fe && ve;
  if (Fe) K.setNonOriginRejectionPolicy({ windowMs: Et, maxGapMs: ho, onRecovered: i.onNonOriginRejectionRecovered });
  let br,
    Z = false;
  function z(M, ee, Pe) {
    if (Z) return;
    Z = true;
    try {
      x.close({ goodbye: false, retainUndeliveredClientEvents: i.retainUndeliveredOnClose === true }), K.close();
    } catch (fe) {
      h(fe);
    }
    try {
      br?.(M, ee, Pe);
    } catch (fe) {
      h(fe);
    }
  }
  let x = new lje(K, new URL(u), {
    getAuthHeaders: F,
    heartbeatIntervalMs: i.heartbeatIntervalMs,
    heartbeatJitterFraction: i.heartbeatJitterFraction,
    advertiseHeartbeatProbeSupport: (i.advertiseHeartbeatProbeSupport ?? false) && oe,
    beatOnStaleReconnect: (i.beatOnStaleReconnect ?? false) && oe,
    idleTracker: i.idleTracker,
    beatOnReactivation: (i.beatOnReactivation ?? false) && oe,
    streamEventFlushIntervalMs: i.streamEventFlushIntervalMs,
    gzipRequestBodyFetch: i.gzipRequestBodyFetch,
    noSubscriberStreamEventFlushIntervalMs: i.noSubscriberStreamEventFlushIntervalMs,
    nonOrigin403Transient: se,
    onEpochMismatch: (M) => {
      let ee = i.causeTypedCloseCodes ? lUn[M] : 4090;
      throw (
        (n(
          `[bridge:repl] CCR v2: terminal request-path condition (${M}) \u2014 closing with ${ee} for ${ee === 4094 ? "auth recovery" : "poll-loop recovery"}`,
        ),
        z(ee, M),
        Error("terminal request-path condition"))
      );
    },
    onRequestAuthOk: i.onRequestAuthOk,
    ...(ve && {
      onHeartbeatLost: () => {
        if (Z) return;
        n("[bridge:repl] CCR v2: heartbeats failing while SSE healthy \u2014 closing for transport rebuild", {
          level: "warn",
        }),
          z(4093);
      },
    }),
  });
  K.setOnEvent((M) => {
    x.reportDelivery(M.event_id, "received"), x.reportDelivery(M.event_id, "processed");
  }),
    K.setEventFilter(wSt);
  let Ge,
    We = false;
  return {
    write(M) {
      return x.writeEvent(M);
    },
    writeBatch(M) {
      return x.writeEvents(M);
    },
    close(M) {
      if (
        ((Z = true),
        x.close({ goodbye: M?.goodbye, retainUndeliveredClientEvents: M?.retainUndelivered }),
        !M?.retainUndelivered)
      )
        x.discardUndeliveredClientEvents();
      K.close();
    },
    takeUndeliveredEvents() {
      return x.takeUndeliveredClientEvents();
    },
    discardUndeliveredEvents() {
      return x.discardUndeliveredClientEvents();
    },
    adoptUndeliveredEvents(M) {
      x.adoptClientEvents(M);
    },
    flushGoodbye() {
      return x.flushGoodbye();
    },
    isConnectedStatus() {
      return We;
    },
    getStateLabel() {
      if (K.isClosedStatus()) return "closed";
      if (K.isConnectedStatus()) return We ? "connected" : "init";
      return "connecting";
    },
    setOnData(M) {
      K.setOnData(M);
    },
    setOnClose(M) {
      (br = M),
        K.setOnClose((ee, Pe) => {
          z(ee ?? 4092, void 0, Pe);
        });
    },
    setOnConnect(M) {
      Ge = M;
    },
    getLastSequenceNum() {
      return K.getLastSequenceNum();
    },
    getEpoch() {
      return A;
    },
    reportState(M, ee) {
      x.reportState(M, ee);
    },
    reportMetadata(M) {
      x.reportMetadata(M);
    },
    reportDelivery(M, ee) {
      x.reportDelivery(M, ee);
    },
    flush() {
      return x.flush();
    },
    flushInternalEvents() {
      return x.flushInternalEvents();
    },
    getInternalEventBacklog() {
      return { pending: x.internalEventsPending, droppedBatches: x.droppedInternalBatches };
    },
    getInternalEventWriter() {
      return (M, ee, Pe) => x.writeInternalEvent(M, ee, Pe);
    },
    getInternalEventReaders() {
      return { readMain: () => x.readInternalEvents(), readSubagents: () => x.readSubagentInternalEvents() };
    },
    getInternalEventsPort() {
      return {
        epoch: () => x.getWorkerEpoch(),
        postBatch: (M, ee) => x.postInternalEventsBatch(M, ee),
        listPage: (M, ee) => x.getInternalEventsPage(M, ee),
      };
    },
    connect() {
      if (!i.outboundOnly) K.connect();
      x.initialize(A).then(
        () => {
          if (Z) return;
          (We = true),
            n(
              `[bridge:repl] v2 transport ready for writes (epoch=${A}, sse=${K.isConnectedStatus() ? "open" : "opening"})`,
            ),
            Ge?.();
        },
        (M) => {
          n(`[bridge:repl] CCR v2 initialize failed: ${l(M)}`, { level: "error" }), z(4091);
        },
      );
    },
  };
}
var Ln = null,
  kt = 300;
async function sUn(i) {
  let {
      baseUrl: u,
      orgUUID: f,
      title: v,
      reattachOrFail: T,
      reattachOrigin: R,
      reviveInitiated: F,
      neverArchive: A,
      onAuthProven: D,
      noHistoryBackfill: K,
      onReattachGoneBounce: oe,
      neutralFallbackTitle: ve,
      onReattachPointerDead: Fe,
      ownerPin: se,
      onOwnerChanged: br,
      getAccessToken: Z,
      onAuth401: z,
      classifyFailedOAuthRefresh: x,
      onReadFreshOAuthToken: Ge,
      onClassifyMissingOAuthToken: We,
      onProactiveRefresh: M,
      toSDKMessages: ee,
      initialHistoryCap: Pe,
      initialMessages: fe,
      onInboundMessage: zn,
      onUserMessage: Mt,
      onSessionEstablished: Yn,
      onBeforePushTriggeringState: Ot,
      onPermissionResponse: Pt,
      onInterrupt: Jn,
      onStopTask: Xn,
      getInitializeState: Qn,
      getCommands: Zn,
      onDialogKindsDeclared: ei,
      onClientInitialize: ri,
      onSetModel: ti,
      onSetMaxThinkingTokens: ni,
      onSetPermissionMode: ii,
      onApplyFlagSettings: si,
      onRenameSession: ai,
      onSetColor: di,
      onFileSuggestions: ci,
      onReadFile: li,
      onGetWorkspaceDiff: ui,
      onGetContextUsage: fi,
      onGetUsage: _i,
      onMcpAuthenticate: gi,
      onMcpOauthCallbackUrl: pi,
      onMcpReconnect: hi,
      onMcpStatus: mi,
      onStateChange: de,
      onBridgeInjectedMcp: wo,
      outboundOnly: Rr,
      tags: vi,
      sessionGroupingId: It,
      requestedSessionGroupingId: cr,
      gitRepoUrl: Ne = null,
      branch: Dt = "",
      defaultBranch: jt = null,
      onTransportPersistenceReady: $t,
      onTransportPersistenceTeardown: yr,
      onTransportRebuilt: bi,
      reattachSessionId: Ee,
      reattachSequenceNum: Ri,
      livePreviewPorts: Eo,
      credentialsStore: lr,
      workSecretCredentials: be,
      storageV5: he,
    } = i,
    xe = be !== void 0 ? true : A,
    Ft = v,
    te = !!Ee,
    O = await Ien(),
    Nt = false,
    wr = (e) => {
      if (!be) se?.noteAcceptedToken(e);
    },
    xt = "work-secret-lane",
    Ht = () => (be ? xt : Z()),
    Er = be
      ? () => {
          let e = Nt ? "refresh" : "initial";
          return be
            .register(e, {
              stillWanted: () => !m && re === void 0,
              reuseHeldAboveS: Math.ceil(O.token_refresh_buffer_ms / 1000) + 60,
            })
            .then((r) => {
              if (r !== null && !v3(r)) Nt = true;
              return r;
            });
        }
      : bo,
    Sr = Z();
  if (!Sr) return n("[remote-bridge] No OAuth token"), p("bridge_connect", "bridge_connect_no_token"), null;
  let ur = () => Z() ?? Sr,
    Ut = () => se?.ownerToken() ?? Z() ?? Sr,
    Yr = new Set(),
    { getOriginalCwd: Jr } = await import("/$bunfs/root/chunk-bb8gz7wa.js"),
    { getMainLoopModel: yi } = await import("/$bunfs/root/chunk-5a8dj187.js"),
    Cr = cr ?? It,
    kr = It;
  async function qt() {
    let e = {},
      r = async () => {
        if (Ne) {
          let { buildGitSessionContext: a } = await import("/$bunfs/root/chunk-6ah045r1.js"),
            { reportGitSessionContext: d } = await import("/$bunfs/root/chunk-hajhjxmj.js"),
            { report: E } = await a(Ne, Dt, jt ?? void 0);
          d(E);
        }
      },
      o = (a) =>
        At(
          (d, E) =>
            N9t(
              u,
              d,
              Ft,
              O.http_timeout_ms,
              vi,
              Ne ? { gitRepoUrl: Ne, branch: Dt, defaultBranch: jt ?? void 0 } : void 0,
              Jr(),
              yi(),
              a,
              e,
              E,
            ).then((b) => {
              if (typeof b === "string") se?.noteAcceptedToken(d);
              return b;
            }),
          "createCodeSession",
          O,
          { getAccessToken: ur, onAuth401: z, recoveryAttemptedTokens: Yr },
        ),
      t = await o(Cr);
    if (M9t(t) && t.reason === "grouping_rejected" && cr === void 0 && Cr !== void 0) {
      let a = await o(void 0);
      if (typeof a === "string")
        return (
          (kr = void 0),
          await r(),
          Y("info", "bridge_repl_v2_grouping_dropped", { status: t.status }),
          n("[bridge:core] persisted Project no longer available; recreated session outside it"),
          n(`[remote-bridge] Created session ${a}`),
          Y("info", "bridge_repl_v2_session_created"),
          a
        );
      return t;
    }
    if (typeof t === "string")
      (kr = Cr), await r(), n(`[remote-bridge] Created session ${t}`), Y("info", "bridge_repl_v2_session_created");
    return t;
  }
  function wi(e) {
    if (e?.reason === "grouping_rejected" && Cr !== void 0) {
      let r = e.detail ? `: ${e.detail}` : "";
      return cr !== void 0
        ? `Couldn't create a session in the requested Project (server ${e.status}${r}). The Project may not exist or may not be available to you.`
        : `Couldn't recreate the session in its previous Project (server ${e.status}${r}) \u2014 the Project may have been deleted or is no longer available.`;
    }
    if (e?.reason === "request_rejected") return `Session creation failed (server ${e.status}) \u2014 see debug log`;
    if (e?.reason === "malformed_response") return _De;
    return "Session creation failed \u2014 see debug log";
  }
  function Lt(e) {
    if (e !== null && e.terminal === false) {
      de?.("failed", Xr, "auth"),
        KS("v2_session_create_oauth_rejected", void 0, true),
        p("bridge_connect", "bridge_connect_create_oauth_rejected");
      return;
    }
    de?.("failed", wi(M9t(e) ? e : null)),
      KS("v2_session_create_failed", void 0, true),
      p("bridge_connect", "bridge_connect_session_create_failed");
  }
  let Ei = "JWT refresh failed: no OAuth token \u2014 run /login",
    Xr = "Claude.ai login was rejected \u2014 run /login, then /remote-control",
    Si = "Claude.ai login expired \u2014 run /login, then /remote-control",
    Ci = "Claude.ai login expired \u2014 run /login to restore Remote Control",
    Ti = "Signed out of Claude \u2014 run /login, then /remote-control",
    Qr = false,
    Zr = false;
  if (Ee && $y(Ee)) {
    if (T)
      return (
        n(`[remote-bridge] Reattach-or-fail: ${Ee} is teleported; failing terminally instead of minting fresh`),
        Y("info", "bridge_repl_v2_revive_reattach_teleported"),
        Fe?.(),
        de?.("failed", $ce, "terminal"),
        KS("v2_revive_reattach_teleported", void 0, true),
        p("bridge_connect", "bridge_connect_reattach_teleported"),
        null
      );
    n(`[remote-bridge] Reattach suppressed for teleported session ${Ee} \u2014 minting fresh`), (Qr = true), (te = false);
  }
  let _;
  if (be) {
    if (!Ee || Qr)
      return (
        n("[remote-bridge] Work-secret attach has no session to reattach; failing", { level: "error" }),
        de?.(
          "failed",
          "Remote Control could not attach: the host supplied a session credential but no session to attach to",
          "terminal",
        ),
        KS("v2_work_secret_no_session", void 0, true),
        p("bridge_connect", "bridge_connect_work_secret_no_session"),
        null
      );
    (_ = Ee),
      n(`[remote-bridge] Attaching to session ${_} with the host's work secret`),
      Y("info", "bridge_repl_v2_work_secret_attach");
  } else if (Ee && !Qr) {
    (_ = Ee), n(`[remote-bridge] Reattaching to session ${_}`), Y("info", "bridge_repl_v2_session_reattached");
    let e = await At((r, o) => Ro(_, u, r, f, O.http_timeout_ms, o, lr), "unarchiveSession", O, {
      getAccessToken: ur,
      onAuth401: z,
      recoveryAttemptedTokens: Yr,
    });
    if (e?.outcome === "elevated_auth") {
      n(
        `[remote-bridge] Reattach ${_}: unarchive elevated-auth (${e.reason}) \u2014 surfacing auth failure, pointer preserved`,
      ),
        Y("info", "bridge_repl_v2_reattach_elevated_auth");
      let o =
        e.reason === "untrusted_device" && !C3()
          ? { terminal: true, reason: "request_rejected", status: 403 }
          : { terminal: true, reason: e.reason };
      return (
        de?.("failed", r8(o), $e(o)),
        KS("v2_reattach_elevated_auth", void 0, true),
        p("bridge_connect", "bridge_connect_reattach_elevated_auth"),
        null
      );
    }
    if (e?.outcome === "gone" && T)
      return (
        n(
          `[remote-bridge] Reattach-or-fail: ${_} gone (unarchive ${e.status}); failing terminally instead of minting fresh`,
        ),
        Y("info", "bridge_repl_v2_revive_reattach_gone"),
        oe(),
        Fe?.(),
        de?.("failed", $ce, "terminal"),
        KS("v2_revive_reattach_gone", void 0, true, { reattach_origin: ke(R), revive_initiated: F === true }),
        p("bridge_connect", "bridge_connect_reattach_gone"),
        null
      );
    if (e?.outcome === "gone") {
      n(`[remote-bridge] Reattach ${_} gone (unarchive ${e.status}); minting fresh session`),
        (Zr = true),
        oe(),
        (Ft = ve ?? `${Lne()}-${P$()}`),
        Y("info", "bridge_repl_v2_reattach_fallback", { via: "unarchive", status: e.status }),
        s("tengu_bridge_repl_env_expired_fresh_session", {
          v2: true,
          via: c("unarchive"),
          status: typeof e.status === "number" ? e.status : c(e.status),
          reattach_origin: ke(R),
          revive_initiated: F === true,
        });
      let r = await qt();
      if (typeof r !== "string") return Lt(r), null;
      (_ = r), (te = false);
    }
  } else {
    if (T)
      return (
        n(
          "[remote-bridge] Reattach-or-fail: no reattach pointer for this init; failing terminally instead of minting fresh",
        ),
        Y("info", "bridge_repl_v2_revive_fresh_refused"),
        oe(),
        de?.("failed", $ce, "terminal"),
        KS("v2_revive_fresh_refused", void 0, true),
        p("bridge_connect", "bridge_connect_revive_fresh_refused"),
        null
      );
    let e = await qt();
    if (typeof e !== "string") return Lt(e), null;
    _ = e;
  }
  if (te && cr !== void 0 && cr !== kr)
    n("[bridge:core] --project ignored: reattached to existing session (Project is fixed at create)");
  if (xe && te) vr(_, he);
  else if (!Rr) Hn(_, he);
  qn({
    baseUrl: u,
    getAccessToken: ur,
    skipSessionId: _,
    archive: (e) => Le(e, u, ur(), f, O.http_timeout_ms, void 0, he),
    storageV5: he,
  });
  let ki = yt + 60000,
    Se;
  function et() {
    Se = void 0;
  }
  function rt(e) {
    if (!v3(e) || !zr(e)) {
      if (e !== null && !v3(e) && !tO(e)) et();
      return e;
    }
    if (!b9t()) return e;
    let r = Date.now();
    if (Se === void 0 || r - Se.lastAtMs > ki) Se = { startedAtMs: r, lastAtMs: r, refusals: 0 };
    (Se.lastAtMs = r), Se.refusals++;
    let o = r - Se.startedAtMs;
    if (Se.refusals > 1 && o >= Et)
      return (
        n(
          `[remote-bridge] /bridge refused by ${e.source} ${Se.refusals}\xD7 over ${Math.round(o / 1000)}s with nothing reaching Anthropic since \u2014 treating as a verdict`,
        ),
        e
      );
    return (
      n(`[remote-bridge] /bridge 403 not written by Anthropic's origin (${e.source}) \u2014 treating as unreachable`),
      Y("warn", "bridge_repl_v2_bridge_403_nonorigin", { source: e.source }),
      null
    );
  }
  function Ar(e, r) {
    if (m || re !== void 0 || N !== r) return Promise.resolve(null);
    let o = () =>
      Er(_, u, e, O.http_timeout_ms, void 0, lr).then((t) => {
        if (N !== r) return t;
        let a = rt(t);
        if (a !== null && !v3(a) && !tO(a)) wr(e), gt();
        return a;
      });
    if (!er()) return o();
    return rr("owner_changed_recovery").then((t) => (t || m || re !== void 0 || N !== r ? null : o()));
  }
  let Gt = Sr,
    H = await At((e, r) => ((Gt = e), Er(_, u, e, O.http_timeout_ms, r, lr)), "fetchRemoteCredentials", O, {
      getAccessToken: ur,
      onAuth401: z,
      recoveryAttemptedTokens: Yr,
    });
  if (te && H === null)
    n(`[remote-bridge] Reattach ${_}: /bridge failed after unarchive; surfacing retry prompt`),
      Y("info", "v2_remote_creds_reattach_transient");
  if (!H || v3(H) || tO(H)) {
    let e =
        H === null
          ? te
            ? "Couldn't reconnect to your Remote Control session. Retry, or start a fresh session without --resume."
            : "Remote credentials fetch failed \u2014 see debug log"
          : tO(H)
            ? Si
            : r8(H),
      r = H === null ? (F ? "auth" : "terminal") : tO(H) ? "auth" : $e(H),
      o =
        H === null
          ? te
            ? "v2_remote_creds_reattach_transient"
            : "v2_remote_creds_failed"
          : tO(H)
            ? "v2_remote_creds_oauth_rejected"
            : zr(H)
              ? `v2_remote_creds_request_rejected_${H.source}`
              : `v2_remote_creds_${H.reason}`;
    if (
      (n(`[remote-bridge] Creds failed; onStateChange ${de ? "set" : "UNSET"}, msg="${e}"`),
      de?.("failed", e, r),
      KS(o, void 0, true),
      p("bridge_connect", "bridge_connect_creds_failed"),
      !te)
    )
      Le(_, u, Ut(), f, O.http_timeout_ms, void 0, he);
    return null;
  }
  n(`[remote-bridge] Fetched bridge credentials (expires_in=${H.expires_in}s)`), wr(Gt), Yn?.(_);
  let Wt = Qse(H.api_base_url, _);
  n(`[remote-bridge] v2 session URL: ${Wt}`);
  function Ai() {
    return I("tengu_bridge_selfheal_heartbeats", true);
  }
  function tt() {
    return I("tengu_bridge_recovery_patience", true);
  }
  function Kt() {
    return I("tengu_dazzling_garden", true);
  }
  function Mi() {
    return I("tengu_ccr_stream_event_flush_ms", aje);
  }
  function Oi() {
    return I("tengu_ccr_no_subscriber_flush_ms", 0);
  }
  function Pi() {
    return I("tengu_ccr_idle_heartbeat", false);
  }
  function Ii() {
    return I("tengu_ccr_reconnect_beat", false);
  }
  function Di() {
    return I("tengu_ccr_reactivation_beat", false);
  }
  let fr = Bot(),
    ji = gmt("ccr_worker", he);
  function Vt() {
    return {
      heartbeatIntervalMs: O.heartbeat_interval_ms,
      heartbeatJitterFraction: O.heartbeat_jitter_fraction,
      onRequestAuthOk: qi,
      causeTypedCloseCodes: true,
      selfHealHeartbeats: Ai(),
      advertiseHeartbeatProbeSupport: Pi(),
      beatOnStaleReconnect: Ii(),
      idleTracker: fr,
      beatOnReactivation: Di(),
      streamEventFlushIntervalMs: Mi(),
      gzipRequestBodyFetch: ji,
      noSubscriberStreamEventFlushIntervalMs: Oi(),
      outboundOnly: Rr,
      nonOrigin403Retry: b9t(),
      onNonOriginRejectionRecovered: Li,
      retainUndeliveredOnClose: true,
    };
  }
  let S;
  try {
    S = await Tt({
      ...Vt(),
      sessionUrl: Wt,
      ingressToken: H.worker_jwt,
      sessionId: _,
      epoch: H.worker_epoch,
      initialSequenceNum: te ? Ri : void 0,
      getAuthToken: () => H.worker_jwt,
    });
  } catch (e) {
    if (
      (n(`[remote-bridge] v2 transport setup failed: ${l(e)}`, { level: "error" }),
      de?.("failed", `Transport setup failed: ${l(e)}`),
      KS("v2_transport_setup_failed", void 0, true),
      p("bridge_connect", "bridge_connect_transport_failed"),
      !te)
    )
      Le(_, u, Ut(), f, O.http_timeout_ms, void 0, he);
    return null;
  }
  n(`[remote-bridge] v2 transport created (epoch=${H.worker_epoch})`), de?.("ready");
  let { worker_jwt: nt, api_base_url: zt } = H,
    So = null,
    Co = new Set();
  function Bi() {
    return false;
  }
  function $i(e, r) {
    return { added: [], removed: [] };
  }
  if (Bi() && Ln) {
    if (H.mcp_config !== void 0) {
      let e = Ln.deriveBridgeInjectedMcpServers({
        payload: H.mcp_config,
        apiBaseUrl: zt,
        sessionId: _,
        getBearerToken: () => nt,
      });
      if (e)
        try {
          $i(e, "handshake");
        } catch (r) {
          h(r), p("bridge_webagent_mcp_inject", "handshake_threw");
        }
      else p("bridge_webagent_mcp_inject", "payload_rejected");
    }
  }
  function Fi(e) {}
  let Ni = void 0;
  function Mr() {
    try {
      xi();
    } catch (e) {
      h(e), p("bridge_webagent_mcp_inject", "relinquish_threw");
    }
  }
  function xi() {}
  let it = null,
    _r = new vEe(O.uuid_dedup_buffer_size),
    Yt = new Set();
  if (fe) for (let e of fe) Yt.add(e.uuid), _r.add(e.uuid);
  let Hi = new vEe(O.uuid_dedup_buffer_size),
    ot = new vEe(O.uuid_dedup_buffer_size),
    _e = new Kr(),
    ce = new Kr(),
    st = 0,
    Ke = false,
    at = te,
    m = false,
    Or,
    le = false,
    Jt = 0,
    N = 0;
  function Xt() {
    return Jt++, (N = Jt), (le = true), (Ve = Date.now()), (gr = false), N;
  }
  function Qt(e) {
    if (N !== e) return false;
    return (N = 0), (le = false), (Ve = 0), true;
  }
  function Zt() {
    (N = 0), (le = false), (Ve = 0);
  }
  let Ve = 0,
    gr = false,
    en = O.init_retry_max_attempts * O.http_timeout_ms + (O.init_retry_max_attempts - 1) * O.init_retry_max_delay_ms,
    Ui = O.oauth_retry_base_delay_ms * (2 ** O.oauth_retry_max_attempts - 1) + O.oauth_retry_max_attempts * en,
    rn = 2 * (15000 + en + Ui),
    ze = 0,
    tn = 3,
    Pr = 0,
    nn = $n();
  function qi() {
    (Pr = 0), nn.noteHealthyBeat(Date.now()), et(), D?.();
  }
  let Ir = false,
    Ie;
  function Ye() {
    clearTimeout(Ie), (Ie = void 0);
  }
  let Je = false;
  function Dr(e) {
    (Je = false), de?.("reconnecting", e);
  }
  function jr() {
    (Je = false), de?.("connected");
  }
  function G(e, r = "terminal") {
    (Je = true), Ye(), (Re = void 0), Br(), de?.("failed", e, r);
  }
  function Br() {
    let e = _e.end(),
      r = ce.end().map((o) => o.frame);
    (Ke = false), on(e.length + r.length, r, S.discardUndeliveredEvents?.() ?? []);
  }
  function on(e, r, o) {
    if (e === 0 && o.length === 0) return;
    Y("warn", "bridge_repl_v2_client_events_lost", { queued: e, undelivered: o.length }),
      g("bridge_repl", "client_events_lost_at_dead_end", { queued: e, undelivered: o.length });
    let t = [
        ...o.map((E) => E.payload.subtype),
        ...r.map((E) => (E.type === "system" && "subtype" in E ? E.subtype : void 0)),
      ],
      a = t.includes("task_notification"),
      d = t.includes("background_tasks_changed");
    if (a || d)
      g("ccr_task_status_publish", "status_events_lost_at_dead_end", { has_terminal_bookend: a, has_level: d });
  }
  let W,
    re,
    He = false,
    Xe,
    De,
    Re,
    V = false,
    U = false,
    pr;
  function Ze() {
    return true;
  }
  function Ce(e, r, o = true) {
    if (o) (Xe = void 0), (De = void 0);
    if (!He || !Ze()) return false;
    if (r === void 0) g("bridge_presence", e);
    else g("bridge_presence", e, r);
    return true;
  }
  function J(e, r) {
    if (((Xe = void 0), (De = void 0), (V = true), !Ze())) return false;
    if (!He) return p("bridge_connect", "bridge_connect_died_before_presence"), false;
    if (r === void 0) p("bridge_presence", e);
    else p("bridge_presence", e, r);
    return true;
  }
  let $r = false;
  function Li(e) {
    if (m || U || V) return;
    if (
      (n(
        `[remote-bridge] SSE stream live again after ${e.attempts} non-origin 403(s) over ${Math.round(e.streakMs / 1000)}s (source=${e.source})`,
      ),
      Ce(
        vo[e.source],
        { attempts: e.attempts, streak_s: Math.round(e.streakMs / 1000), first_in_episode: $r ? 0 : 1 },
        false,
      ))
    )
      $r = true;
  }
  function dt(e) {
    if (!lre(e?.rejectSource)) {
      J(Gn(e));
      return;
    }
    if (
      J(Gn(e), {
        ...(e.streak !== void 0 && { attempts: e.streak.attempts, streak_s: Math.round(e.streak.streakMs / 1000) }),
        first_in_episode: $r ? 0 : 1,
      })
    )
      $r = true;
  }
  function sn(e) {
    if ($y(_)) return;
    let r = W === void 0 ? void 0 : Wn(W.code, W.cause);
    if (re !== void 0 || W === void 0 || r === void 0 || (gr && Kn(r))) return;
    if (
      ((re = r),
      n(
        `[remote-bridge] ${e} latched a stashed supersession close (${W.code}/${W.cause ?? "uncaused"}) \u2014 archive suppressed`,
      ),
      !V)
    ) {
      if (W.code === 403) dt(W.detail);
      else if (W.code === 404) J("transport_closed_404");
      else Ce("transport_closed_4090"), (V = true);
      Re = void 0;
    }
  }
  function ct(e) {
    if (!Ze()) return;
    switch (e.leg) {
      case "ok":
        y("bridge_token_refresh");
        return;
      case "sad":
        g("bridge_token_refresh", e.code);
        return;
      case "bad":
        p("bridge_token_refresh", e.code);
        return;
    }
  }
  function an(e) {
    if (!w9t()) return;
    let r = Fwn();
    if (r === void 0 || r.generation <= e) return cn();
    return dn(r.reason);
  }
  function dn(e) {
    switch (e) {
      case "signed_out":
        return "host_signed_out";
      case "identity_changed":
        return "host_account_changed";
      case "transient":
      case "refresh_failed":
        return;
    }
  }
  function cn() {
    if (De === void 0) return;
    if (De.generation === Zbt()) return De.code;
    let e = Fwn();
    return e === void 0 ? void 0 : dn(e.reason);
  }
  function ln(e) {
    return e === "host_signed_out" ? Tdn : Edn;
  }
  function un(e) {
    return e === "host_signed_out" ? "auth" : "terminal";
  }
  function fn() {
    return se !== void 0 && !m && !U && EEe();
  }
  function er() {
    return fn() && se !== void 0 && se.identityLooksChanged();
  }
  async function Gi(e, r) {
    if (U) return "changed";
    if (!fn() || se === void 0) return "unchanged";
    let o = await se.confirmChanged(r);
    if (o === "changed") return await Wi(e), "changed";
    return U ? "changed" : o;
  }
  async function rr(e) {
    return (await Gi(e)) === "changed";
  }
  async function hr(e, r) {
    if (er() && (await rr(e))) return true;
    return m || N !== r;
  }
  async function Wi(e) {
    if (m || U || se === void 0) return;
    if (
      ((U = true),
      pr?.(),
      (pr = void 0),
      sr.cancelAll(),
      Zt(),
      br?.(),
      (Ir = false),
      sn("owner_changed"),
      (W = void 0),
      clearTimeout(or),
      Ye(),
      Nr?.(),
      (Nr = void 0),
      pn(),
      it?.stop(),
      $y(_))
    ) {
      n(`[remote-bridge] Signed-in account changed under teleported session ${_} (${e}) \u2014 latched only`),
        Br(),
        yr?.(),
        Mr(),
        S.close();
      return;
    }
    let r = V || re !== void 0;
    if (
      (n(
        `[remote-bridge] Signed-in account changed under ${_} (${e}${r ? ", episode already dead" : ""}) \u2014 stopping`,
      ),
      Y("info", "bridge_repl_v2_owner_changed"),
      !r)
    )
      Ce(e),
        (V = true),
        G(NBt, "terminal"),
        S.write(Wyn(_, "account_changed")),
        await Promise.race([
          S.flush().catch(() => {
            return;
          }),
          ne(kt),
        ]);
    else if (!Je) G(NBt, "terminal");
    else Br();
    if ((yr?.(), Mr(), !m)) S.close();
    if (re !== void 0) return;
    let o;
    if (xe)
      (o = "skipped_host_owned"), n(`[remote-bridge] Owner-changed settle left host-owned session ${_} unarchived`);
    else {
      let t = await Le(_, u, se.ownerToken(), f, O.teardown_archive_timeout_ms, void 0, he);
      (o = Vn(t, re)),
        n(`[remote-bridge] Owner-changed settle archived ${_} with the owner's credential (archive=${t})`);
    }
    if (Ze()) s("tengu_bridge_owner_changed", { site: c(e), archive_status: c(o), episode_already_dead: r });
  }
  function _n() {
    if (re !== void 0) return re;
    if (U) return "owner_changed";
    return;
  }
  function lt() {
    if (se !== void 0 && EEe() && se.identityLooksChanged()) return { token: se.ownerToken(), source: "pinned_owner" };
    return { token: Z(), source: "current" };
  }
  let Fr = te,
    ge = new Map(),
    tr = new Set();
  function ut(e, r) {
    if ((tr.delete(e), ge.delete(e) && r)) bSt(e);
  }
  let ye = (e, r) => {
    if (Ot && !U && (e === "requires_action" || e === "idle")) Ot();
    if ((S.reportState(e, r), e === "requires_action" && r)) {
      Fr = true;
      let o = [...ge.values()].flatMap((t) => (t.details ? [t.details] : [])).reverse();
      S.reportMetadata({
        pending_action: r,
        pending_actions: vpn(
          r,
          o.filter((t) => t !== r),
        ),
      });
    } else if (Fr) (Fr = false), S.reportMetadata({ pending_action: null, pending_actions: null });
  };
  function Ki() {
    return tr.clear(), [...ge.values()].map((e) => e.request);
  }
  let Nr, gn, xr;
  if (Ne)
    (async () => {
      let { parseGitRemote: e, parseGitHubRepository: r } = await import("/$bunfs/root/chunk-q9mtfzh4.js"),
        {
          addWatchedRepo: o,
          removeWatchedRepo: t,
          getCachedBranchForRepo: a,
          onRepoBranchChange: d,
          getRemoteUrlForDir: E,
        } = await import("/$bunfs/root/chunk-bn317y1c.js"),
        b = await import("/$bunfs/root/chunk-pynmqz4t.js"),
        w = e(Ne),
        C = w ? `${w.owner}/${w.name}` : r(Ne);
      if (!C) return;
      let j = w ? `${w.host}/${w.owner}/${w.name}` : `github.com/${C}`,
        q = Jr();
      if ((await o(q), m || U)) {
        t(q);
        return;
      }
      let P,
        L = te,
        ae = te,
        ue = 0,
        Me = false,
        Oe = false,
        je = async () => {
          if (Me) {
            Oe = true;
            return;
          }
          Me = true;
          try {
            do {
              Oe = false;
              let qe = ue;
              if (m || U) return;
              let X = Jr();
              if (X !== q) {
                if ((t(q), (q = X), await o(X), m || U)) {
                  t(X);
                  return;
                }
              }
              let Be = await a(X);
              if (qe !== ue) {
                Oe = true;
                continue;
              }
              if (m || Te("branch_metadata")) return;
              if (Be === void 0) {
                if (P !== null)
                  if (((P = null), L))
                    (L = false), S.reportMetadata({ current_branches: { [C]: null }, worktree_state: { [C]: null } });
                  else S.reportMetadata({ current_branches: { [C]: null } });
                continue;
              }
              if (b && I("tengu_ccr_handoff_metadata", false)) {
                let [no, Gr] = await Promise.all([
                  b.collectWorktreeState(X, Be),
                  b.withCollectTimeout(E(X)).catch(() => null),
                ]);
                if (qe !== ue) {
                  Oe = true;
                  continue;
                }
                if (m || Te("branch_metadata")) return;
                let Wr = Gr ? e(Gr) : null,
                  Cn = Gr ? r(Gr) : null,
                  Tn = (Wr ? `${Wr.host}/${Wr.owner}/${Wr.name}` : Cn ? `github.com/${Cn}` : null) === j,
                  Rt = Tn ? Be : null,
                  me = Tn ? no : null,
                  kn = me
                    ? JSON.stringify([
                        Rt,
                        me.head_sha,
                        me.unpushed_count,
                        me.is_dirty,
                        me.mid_operation,
                        me.upstream_exists,
                        me.has_submodules,
                        me.has_lfs,
                      ])
                    : JSON.stringify([Rt]);
                if (kn === P) continue;
                if (
                  ((P = kn),
                  n(`[remote-bridge] worktree_state \u2192 ${C}: ${JSON.stringify(me)}`),
                  (L = me !== null),
                  me !== null)
                )
                  ae = true;
                S.reportMetadata({ current_branches: { [C]: Rt }, worktree_state: { [C]: me } });
                continue;
              }
              if (L) {
                (L = false), (P = Be), S.reportMetadata({ current_branches: { [C]: Be }, worktree_state: { [C]: null } });
                continue;
              }
              if (Be === P) continue;
              (P = Be), S.reportMetadata({ current_branches: { [C]: Be } });
            } while (Oe);
          } catch (qe) {
            n(`[remote-bridge] current_branches emit failed: ${l(qe)}`);
          } finally {
            Me = false;
          }
        };
      (gn = () => {
        if (((P = void 0), (L = ae), ue++, Me)) Oe = true;
      }),
        (xr = () => void je());
      let we = d(xr);
      (Nr = () => {
        we(), t(q);
      }),
        je();
    })().catch((e) => n(`[remote-bridge] current_branches setup failed: ${l(e)}`));
  let pn = $5(() => fr.noteActivity()),
    nr = new Map(),
    hn = !Mt,
    Hr = "initial",
    ft = 0,
    or;
  function mn(e) {
    if (m) return;
    if (
      (s("tengu_bridge_repl_connect_timeout", { v2: true, elapsed_ms: O.connect_timeout_ms, cause: c(e) }),
      p("bridge_connect", "bridge_connect_timeout"),
      V)
    );
    else if (Object.values(pe).some((r) => r.cause === e)) Re = "recovery_connect_timeout";
    else if (e === "proactive_refresh") Re = "refresh_connect_timeout";
  }
  async function Vi(e) {
    if (!z) return "rejected";
    try {
      if (await z(e)) return "recovered";
    } catch (r) {
      n(`[remote-bridge] Proactive forced OAuth refresh threw: ${l(r)}`, { level: "error" });
    }
    if (!Kt() || !x) return "rejected";
    return x();
  }
  let zi = 3,
    _t,
    Ur = 0;
  function gt() {
    (_t = void 0), (Ur = 0);
  }
  function vn(e) {
    return e !== void 0 && e === _t && Kt();
  }
  let sr = _Ae({
    refreshBufferMs: O.token_refresh_buffer_ms,
    onExhausted: (e) => {
      if (!m && !V) ct({ leg: "bad", code: "chain_exhausted_no_oauth" });
      if (le || m) return;
      if (Je) {
        n(
          `[remote-bridge] Token refresh chain exhausted for ${e} \u2014 terminal state already showing, not repainting`,
        );
        return;
      }
      n(`[remote-bridge] Token refresh chain exhausted for ${e} \u2014 surfacing auth failure`, { level: "error" }),
        de?.("failed", "OAuth token unavailable \u2014 run /login to restore Remote Control", "auth");
    },
    getAccessToken: async () => {
      if (U) return;
      if (er()) {
        let o = V;
        if (await rr("owner_changed_refresh")) {
          if (U && !o) ct({ leg: "sad", code: "owner_changed" });
          return;
        }
      }
      if (be) return xt;
      let e = Z(),
        r = vn(e);
      try {
        if (r) await Ge?.();
        else await M?.();
      } catch (o) {
        n(`[remote-bridge] scheduler token refresh failed: ${l(o)}`, { level: "error" });
      }
      return Z() ?? e;
    },
    onRefresh: (e, r) => {
      (async () => {
        if (re !== void 0 || U) {
          n(`[remote-bridge] Proactive refresh skipped: session ${U ? "stopped for an owner change" : "superseded"}`);
          return;
        }
        if (le || m) {
          n("[remote-bridge] Recovery already in flight, skipping proactive refresh");
          return;
        }
        if ($y(e)) {
          n(`[remote-bridge] Proactive refresh suppressed for teleported session ${e}`);
          return;
        }
        let o = Xt(),
          t = V,
          a = false,
          d,
          E,
          b,
          w,
          C = false;
        function j(P, L, ae = "refresh_credentials_rejected", ue) {
          if (m) return;
          if (Re !== void 0 && W === void 0) J(Re), (Re = void 0);
          else if (!t) (Xe = ae), (De = ue === void 0 ? void 0 : { code: ue, generation: Zbt() });
          (d = P), (E = "refresh_credentials_rejected"), (b = L);
        }
        async function q() {
          if (!(await hr("owner_changed_refresh", o))) return false;
          if (U) w = { leg: "sad", code: "owner_changed" };
          return true;
        }
        try {
          if (await q()) return;
          let P = vn(r);
          if (!P) gt();
          let L = await dr(
            () => {
              if (P) return Promise.resolve({ terminal: false, reason: "oauth_rejected" });
              if (m || re !== void 0 || N !== o) return Promise.resolve(null);
              return Er(e, u, r, O.http_timeout_ms, void 0, lr).then((ue) => (m || N !== o ? ue : rt(ue)));
            },
            "fetchRemoteCredentials (proactive)",
            O,
          );
          if (m || N !== o) return;
          if (tO(L)) {
            if (
              (n(
                P
                  ? "[remote-bridge] Proactive cycle: bearer already rejected by /bridge \u2014 retrying the forced OAuth refresh without re-registering"
                  : "[remote-bridge] Proactive /bridge re-mint rejected (oauth_rejected) \u2014 attempting forced OAuth refresh",
              ),
              !P)
            )
              Y("error", "bridge_repl_v2_proactive_oauth_rejected");
            if (await q()) return;
            let ue = Zbt(),
              Me = await Vi(r),
              Oe = Z() ?? r;
            if (await q()) return;
            if (Me === "unreachable") {
              if (
                (n(
                  "[remote-bridge] Proactive forced OAuth refresh got no verdict (token endpoint unreachable); keeping transport, a later cycle retries the refresh",
                ),
                !P)
              )
                w = { leg: "sad", code: "refresh_deferred_transient" };
              _t = r;
              let X = Ur < zi;
              if ($y(e)) X = false;
              if (X) Ur++, sr.scheduleFromExpiresIn(e, 0);
              Y("info", "bridge_repl_v2_proactive_refresh_unreachable", { early_retry: Ur, rearmed: X });
              return;
            }
            let je = Me === "recovered";
            if (je) gt();
            let we = je
              ? await dr(
                  () => {
                    if (m || re !== void 0 || N !== o) return Promise.resolve(null);
                    return Er(e, u, Oe, O.http_timeout_ms, void 0, lr).then((X) => (m || N !== o ? X : rt(X)));
                  },
                  "fetchRemoteCredentials (proactive post-refresh)",
                  O,
                )
              : null;
            if (m || N !== o) return;
            if (je && we === null) {
              if (
                (n("[remote-bridge] Proactive post-refresh re-mint failed (transient); fallback refresh will retry"),
                re === void 0)
              )
                w = { leg: "sad", code: "post_refresh_remint_null" };
              return;
            }
            if (v3(we)) {
              (w = { leg: "bad", code: `post_refresh_credentials_${$e(we)}` }), j(r8(we), $e(we), Vr("refresh", we));
              return;
            }
            if (we === null || tO(we)) {
              let X = je ? void 0 : an(ue);
              if (X !== void 0) {
                (w = { leg: "sad", code: X }),
                  Y("info", "bridge_repl_v2_proactive_host_declined"),
                  j(ln(X), un(X), "refresh_credentials_rejected", X);
                return;
              }
              (w = {
                leg: "bad",
                code: je
                  ? "oauth_rejected_after_refresh"
                  : z
                    ? "oauth_rejected_refresh_failed"
                    : "oauth_rejected_no_refresh_path",
              }),
                j(Ci, "auth");
              return;
            }
            wr(Oe);
            let qe = await pt(we, "proactive_refresh", 0);
            if (qe === "suppressed_teleported") C = true;
            if (qe === "rebuilt")
              (a = true),
                (w = { leg: "sad", code: "oauth_rejected_recovered" }),
                n("[remote-bridge] Transport rebuilt (proactive refresh after forced OAuth refresh)");
            return;
          }
          if (!L) {
            if (
              (n("[remote-bridge] Proactive /bridge re-mint failed (transient); fallback refresh will retry"),
              Y("warn", "bridge_repl_v2_proactive_remint_null"),
              re === void 0)
            )
              w = { leg: "sad", code: "remint_null" };
            return;
          }
          if (v3(L)) {
            (w = { leg: "bad", code: `credentials_${$e(L)}` }), j(r8(L), $e(L), Vr("refresh", L));
            return;
          }
          wr(r);
          let ae = await pt(L, "proactive_refresh", 0);
          if (ae === "suppressed_teleported") C = true;
          if (ae === "rebuilt")
            (a = true), (w = { leg: "ok" }), n("[remote-bridge] Transport rebuilt (proactive refresh)");
        } catch (P) {
          if (
            (n(`[remote-bridge] Proactive refresh rebuild failed: ${l(P)}`, { level: "error" }),
            Y("error", "bridge_repl_v2_proactive_refresh_failed"),
            !m && !U)
          )
            (d = `Refresh failed: ${l(P)}`),
              (E = "refresh_rebuild_failed"),
              (b = "terminal"),
              (w = { leg: "bad", code: "rebuild_threw" });
        } finally {
          if (w !== void 0 && !t && !m) ct(w);
          if (!Qt(o)) return;
          let P = W;
          W = void 0;
          let L = C;
          if ($y(e)) L = true;
          if (L) {
            if (P !== void 0 && !m) G("Session teleported to cloud");
          } else if (P !== void 0 && !a && !m && !V) {
            let ae = qr(P.code, P.cause, P.detail, true);
            if (d !== void 0 && !ae && !m && !le) G(d, b);
          } else if (P !== void 0 && a && !m) {
            if (yn(P.code) && !t) Ce(pe[P.code].recoveredCode);
          } else if (d !== void 0 && !m) {
            if ((G(d, b), E !== void 0 && E !== "refresh_credentials_rejected" && !t)) J(E);
          }
        }
      })();
    },
    label: "remote",
  });
  if (
    (sr.scheduleFromExpiresIn(_, H.expires_in),
    (pr = se?.subscribe(() => {
      rr("owner_changed");
    })),
    er())
  )
    rr("owner_changed");
  let Ue;
  function bn() {
    S.setOnConnect(() => {
      if (U) return;
      if (
        (clearTimeout(or),
        (ze = 0),
        (Re = void 0),
        (V = false),
        (Xe = void 0),
        (De = void 0),
        (Je = false),
        et(),
        (re = void 0),
        ge.size > 0)
      ) {
        let o = [...ge.values()].findLast((t) => t.details !== void 0);
        ye("requires_action", o?.details), tr.clear();
      }
      if ((n("[remote-bridge] v2 transport connected"), Y("info", "bridge_repl_v2_transport_connected"), $t)) {
        let o = S.getInternalEventWriter?.(),
          t = S.getInternalEventReaders?.();
        if (o && t) $t(o, t);
      }
      if (
        (s("tengu_bridge_repl_ws_connected", { v2: true, cause: c(Hr), ...(ft > 0 && { remint_attempts: ft }) }),
        !He && Ze())
      )
        (He = true), y("bridge_presence");
      if (!at && fe && fe.length > 0 && !Zr) {
        at = true;
        let o = S;
        eo(fe)
          .catch((t) => n(`[remote-bridge] flushHistory failed: ${t}`))
          .finally(() => {
            if (S !== o || m || U || le) return;
            mr(), jr();
          });
      } else if ((_e.active || ce.active) && !le) Ye(), mr(), jr();
      else if (!_e.active) jr();
    }),
      S.setOnData((o) => {
        if (U) return;
        if (Ue !== void 0) {
          Ue.push(o);
          return;
        }
        if (!er()) {
          r(o);
          return;
        }
        (Ue = [o]), e();
      }),
      S.setOnClose(qr);
    function e() {
      rr("owner_changed").then((o) => {
        let t = Ue;
        if (t === void 0) return;
        if (o || m) {
          Ue = void 0;
          return;
        }
        let a = t.length;
        while (t.length > 0) {
          if (U || m) {
            Ue = void 0;
            return;
          }
          if (a === 0 && er()) {
            e();
            return;
          }
          a = Math.max(0, a - 1);
          let d = t.shift();
          if (d !== void 0) r(d);
        }
        Ue = void 0;
      });
    }
    function r(o) {
      ser(
        o,
        _r,
        Hi,
        (t) => {
          if (zot(t, "bridge")) fr.noteActivity();
          return zn?.(t);
        },
        Pt
          ? (t) => {
              if (Pt(t)) {
                let a = t.response.subtype === "success" && !!t.response.response;
                if (a) fr.noteActivity();
                ut(t.response.request_id, a), ye("running");
              }
            }
          : void 0,
        (t) => {
          if (Wot(t)) fr.noteActivity();
          ler(t, {
            transport: S,
            sessionId: _,
            onInterrupt: Jn,
            onStopTask: Xn,
            getInitializeState: Qn,
            getCommands: Zn,
            getPendingPrompts: Ki,
            onDialogKindsDeclared: ei,
            onClientInitialize: ri,
            onSetModel: ti,
            onSetMaxThinkingTokens: ni,
            onSetPermissionMode: ii,
            onApplyFlagSettings: si,
            onRenameSession: ai,
            onSetColor: di,
            onFileSuggestions: ci,
            onReadFile: li,
            onGetWorkspaceDiff: ui,
            onGetContextUsage: fi,
            onGetUsage: _i,
            onMcpAuthenticate: gi,
            onMcpOauthCallbackUrl: pi,
            onMcpReconnect: hi,
            onMcpStatus: mi,
            onMcpSetServers: Ni,
            outboundOnly: Rr,
          });
        },
      );
    }
  }
  function qr(e, r, o, t = false) {
    let a = false;
    if ((clearTimeout(or), m || U)) return on(0, [], S.discardUndeliveredEvents?.() ?? []), false;
    if (!t)
      n(`[remote-bridge] v2 transport closed (code=${e}${o ? ` source=${o.rejectSource}` : ""})`),
        s("tengu_bridge_repl_ws_closed", {
          code: e,
          v2: true,
          close_cause: ke(r),
          recovery_in_flight: le,
          ...(o !== void 0 && { reject_source: c(o.rejectSource) }),
        });
    if (le) {
      let C = Ve ? Date.now() - Ve : 0;
      if (C <= rn) return (W = { code: e ?? 4092, cause: r, detail: o }), false;
      n(
        `[remote-bridge] authRecoveryInFlight held ${Math.round(C / 1000)}s (> ceiling ${Math.round(rn / 1000)}s) \u2014 treating as leaked, handling close directly`,
        { level: "error" },
      ),
        Y("error", "bridge_repl_v2_recovery_flag_leaked"),
        Zt(),
        (W = void 0),
        (a = true);
    }
    if (yn(e)) {
      if (ze >= tn) {
        if (
          (n(`[remote-bridge] ${e} recovery exhausted after ${ze} attempts`, { level: "error" }),
          G(`Transport recovery exhausted (code ${e})`),
          !V)
        )
          J("recovery_exhausted", { close_code: e });
        return false;
      }
      if (e === 4094 && !t) {
        if (Pr >= tn) {
          if (
            (n(
              `[remote-bridge] worker-credential recovery exhausted after ${Pr} attempts with no successful heartbeat between them`,
              { level: "error" },
            ),
            G("Transport recovery exhausted (worker credential failures)", "auth"),
            !V)
          )
            J("cred_recovery_exhausted");
          return false;
        }
        Pr++;
      }
      if (e === 4093 && !t) {
        let C = nn.charge(Date.now(), tt());
        switch (C) {
          case "hourly_exhausted":
          case "daily_exhausted": {
            let j = C === "hourly_exhausted" ? 1 : 24;
            if (
              (n(`[remote-bridge] heartbeat recovery budget exhausted (${j}h window)`, { level: "error" }),
              G(C === "hourly_exhausted" ? Dn : jn),
              !V)
            )
              J("heartbeat_budget_exhausted", { window_h: j });
            return false;
          }
          case "charged":
            break;
        }
      }
      return ze++, Qi(e), false;
    }
    let d = (t || a) && gr,
      E = Wn(e, r);
    if (E !== void 0 && !(d && Kn(E))) re = E;
    let b = d && r === "superseded_by_worker" ? void 0 : r,
      w = e === 4090 && (b === "superseded_by_worker" || b === "session_not_active" || b === "session_not_found");
    if ((G(w ? St(e, b) : `Transport closed: ${St(e, b, o)}`, w ? "ended_elsewhere" : "terminal"), V)) return w;
    if (e === 4090)
      if (t && gr) J("transport_closed_4090");
      else Ce("transport_closed_4090"), (V = true);
    else if (e === 403) dt(o);
    else J(e === 404 ? "transport_closed_404" : "transport_closed_other");
    return w;
  }
  async function pt(e, r, o) {
    if ($y(_)) return n(`[remote-bridge] Rebuild suppressed for teleported session ${_}`), "suppressed_teleported";
    (Hr = r), (ft = o), (re = void 0), (gr = true), (Fr = false), gn?.(), yr?.(), _e.start(), ce.start();
    try {
      let t = S,
        a = t.getLastSequenceNum();
      if (
        (t.close({ goodbye: false, retainUndelivered: true }),
        (S = await Tt({
          ...Vt(),
          sessionUrl: Qse(e.api_base_url, _),
          ingressToken: e.worker_jwt,
          sessionId: _,
          epoch: e.worker_epoch,
          initialSequenceNum: a,
          getAuthToken: () => e.worker_jwt,
        })),
        m)
      )
        return S.close(), "rebuilt";
      if (U) return S.close(), "suppressed_owner_changed";
      bn(),
        S.connect(),
        Zi(t),
        xr?.(),
        Vfn(),
        Jfn(),
        gUn(),
        bi?.(),
        (or = setTimeout(mn, O.connect_timeout_ms, Hr)),
        sr.scheduleFromExpiresIn(_, e.expires_in),
        (nt = e.worker_jwt),
        (zt = e.api_base_url);
      try {
        Fi(e);
      } catch (d) {
        h(d), p("bridge_webagent_mcp_inject", "refresh_threw");
      }
      it?.updateAccessToken(e.worker_jwt), mr();
    } finally {
      _e.deactivate(), ce.deactivate();
    }
    return "rebuilt";
  }
  async function Rn(e, r, o) {
    let t = !o && We !== void 0 && Ze() && xyn(),
      a = t ? await We(e) : void 0;
    if (t && (m || N !== r)) return;
    if (a === "signed_out") {
      if (
        (n(`[remote-bridge] Signed out on this machine under ${_} (${e}) \u2014 stopping`),
        Y("info", "bridge_repl_v2_signed_out"),
        Ce("signed_out"),
        !He)
      )
        g("bridge_connect", "signed_out");
      (V = true), G(Ti, "auth");
      return;
    }
    if ((G(Ei, "auth"), !o)) J("recovery_no_oauth_token");
  }
  async function Ji(e, r, o, t) {
    let a = Date.now();
    Y("info", "bridge_repl_v2_remint_loop_entered"), (Ir = true);
    let d = 0;
    try {
      let E = false,
        b = 0;
      for (let w = 1; !m; w++) {
        if (N !== r) return { creds: null, attempts: d };
        let C = Math.round((Date.now() - a) / 60000);
        Dr(
          `${be ? "Remote Control credentials unavailable" : "Remote Control server unreachable"} \u2014 retrying (attempt ${w}${C > 0 ? `, ${C}m elapsed` : ""})`,
        );
        let j = Math.min(Pn * 2 ** (w - 1), yt);
        if ((await ne(Math.max(Math.random() * j, In)), m)) break;
        if (N !== r) return { creds: null, attempts: d };
        if (((Ve = Date.now()), $y(_)))
          return (
            G("Session teleported to cloud"),
            Y("info", "bridge_repl_v2_remint_loop_teleported"),
            { creds: null, attempts: d }
          );
        let q = Ht();
        if (!q)
          return (
            Y("info", "bridge_repl_v2_remint_loop_no_oauth"),
            await Rn("remint_loop", r, o),
            { creds: null, attempts: d }
          );
        let P = await Ar(q, r);
        if (((d = w), m)) break;
        if (N !== r) return { creds: null, attempts: d };
        if (P === null) {
          if ((b++, t === void 0 || b < t.attempts)) continue;
          if (
            (n(
              `[remote-bridge] Re-mint loop exhausted (code ${e}): ${b} unreachable attempts, ${Math.round((Date.now() - a) / 1000)}s`,
              { level: "error" },
            ),
            Y("info", "bridge_repl_v2_remint_loop_exhausted", {
              attempts: d,
              elapsed_ms: Date.now() - a,
              queued_writes_dropped: _e.pendingCount + ce.pendingCount,
            }),
            G(t.exhaustedDetail),
            !o)
          )
            J("recovery_exhausted", { close_code: e, remint_attempts: d });
          return { creds: null, attempts: d };
        }
        if (tO(P)) {
          if (z && !E) {
            if (await hr("owner_changed_recovery", r)) return { creds: null, attempts: d };
            E = true;
            let L = false;
            try {
              L = await z(q);
            } catch (ae) {
              n(`[remote-bridge] Re-mint loop OAuth refresh threw: ${l(ae)}`, { level: "error" });
            }
            if (m) break;
            if (N !== r) return { creds: null, attempts: d };
            if (L) {
              n(
                "[remote-bridge] Re-mint rejected after outage \u2014 OAuth refresh succeeded; retrying with the refreshed credential",
              );
              continue;
            }
          }
          if ((G(Xr, "auth"), !o)) J("recovery_credentials_rejected");
          return Y("info", "bridge_repl_v2_remint_loop_rejected"), { creds: null, attempts: d };
        }
        if (v3(P)) {
          if ((G(r8(P), $e(P)), !o)) J(Vr("recovery", P));
          return Y("info", "bridge_repl_v2_remint_loop_denied"), { creds: null, attempts: d };
        }
        return (
          n(
            `[remote-bridge] Re-mint loop succeeded (code ${e}, attempt ${w}, ${Math.round((Date.now() - a) / 1000)}s)`,
          ),
          Y("info", "bridge_repl_v2_remint_loop_recovered", { attempts: w, elapsed_ms: Date.now() - a }),
          { creds: P, attempts: d }
        );
      }
      return { creds: null, attempts: d };
    } finally {
      if (N === r) Ir = false;
    }
  }
  let pe = {
    401: {
      reconnectingDetail: "JWT expired \u2014 refreshing",
      cause: "auth_401_recovery",
      failureDiagnostic: "bridge_repl_v2_jwt_refresh_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_auth_401",
      needsOAuthRefresh: true,
    },
    4091: {
      reconnectingDetail: "CCR init failed \u2014 retrying",
      cause: "init_4091_recovery",
      failureDiagnostic: "bridge_repl_v2_4091_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_init_4091",
      needsOAuthRefresh: false,
    },
    4093: {
      reconnectingDetail: "presence heartbeats failing \u2014 reconnecting",
      cause: "heartbeat_4093_recovery",
      failureDiagnostic: "bridge_repl_v2_4093_recovery_failed",
      fetchFailure: "retry",
      remintCap: Bn,
      recoveredCode: "recovered_heartbeat_4093",
      needsOAuthRefresh: false,
    },
    4094: {
      reconnectingDetail: "worker credential expired \u2014 re-minting",
      cause: "cred_4094_recovery",
      failureDiagnostic: "bridge_repl_v2_4094_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_cred_4094",
      needsOAuthRefresh: true,
    },
  };
  function yn(e) {
    if (e === 4094) return lMe();
    return e === 401 || e === 4091 || e === 4093;
  }
  let wn = 30000,
    Xi = 5000;
  function En(e, r) {
    if (pe[e].fetchFailure === "terminal") {
      G(r);
      return;
    }
    _e.start(),
      ce.start(),
      Dr("presence recovery failed \u2014 retrying"),
      n(`[remote-bridge] ${e} recovery fetch failed \u2014 retrying in ${wn}ms`),
      Ye();
    let o = S;
    function t() {
      if (((Ie = void 0), m)) return;
      if (ze === 0) {
        if (_e.active || ce.active) {
          if (le) {
            Ie = setTimeout(t, Xi);
            return;
          }
          mr(), jr();
        }
        return;
      }
      if (S !== o) return;
      qr(e, void 0, void 0, true);
    }
    Ie = setTimeout(t, wn);
  }
  async function Qi(e) {
    let r = V;
    if ($y(_)) {
      G("Session teleported to cloud");
      return;
    }
    if (le) return;
    let o = Xt();
    _e.start(),
      ce.start(),
      Dr(pe[e].reconnectingDetail),
      n(`[remote-bridge] ${e} on transport \u2014 attempting credential refresh + rebuild`);
    try {
      if (await hr("owner_changed_recovery", o)) return;
      let t = Z(),
        a = true,
        d = Zbt();
      if (!be && pe[e].needsOAuthRefresh && z)
        try {
          a = await z(t ?? "");
        } catch (j) {
          (a = false), n(`[remote-bridge] ${e} recovery OAuth refresh threw: ${l(j)}`, { level: "error" });
        }
      else if (!be && M)
        try {
          await M();
        } catch (j) {
          n(`[remote-bridge] pre-recovery token refresh failed: ${l(j)}`, { level: "error" });
        }
      if (N !== o) return;
      let E = Ht() ?? t;
      if (!E || m) {
        if (!m) await Rn("recovery", o, r);
        return;
      }
      if ($y(_)) {
        G("Session teleported to cloud");
        return;
      }
      let b = await dr(() => Ar(E, o), "fetchRemoteCredentials (recovery)", O);
      if (N !== o) return;
      if ((!b || tO(b)) && !m && pe[e].needsOAuthRefresh && z && !a) {
        let j = false;
        for (let q = 1; q <= O.oauth_retry_max_attempts && !m; q++) {
          Dr(`OAuth refresh failed \u2014 waiting for a fresh login (${q}/${O.oauth_retry_max_attempts})`);
          let P = O.oauth_retry_base_delay_ms * 2 ** (q - 1),
            L = P * O.init_retry_jitter_fraction * (2 * Math.random() - 1);
          if ((await ne(P + L), await hr("owner_changed_recovery", o))) return;
          let ae;
          try {
            ae = Ge ? await Ge() : (await z(t ?? "")) ? Z() : void 0;
          } catch (Me) {
            n(`[remote-bridge] Adopt-loop token read threw (attempt ${q}): ${l(Me)}`, { level: "error" });
          }
          if (m || N !== o) return;
          let ue = ae !== void 0 && ae !== (t ?? "") ? ae : void 0;
          if (!ue) continue;
          if (((j = true), $y(_))) {
            G("Session teleported to cloud");
            return;
          }
          b = await dr(() => Ar(ue, o), "fetchRemoteCredentials (recovery re-poll)", O);
          break;
        }
        if (N !== o) return;
        if (tO(b) && !j) {
          if (!m) {
            let q = an(d);
            if (q !== void 0) {
              if ((Y("info", "bridge_repl_v2_recovery_host_declined"), G(ln(q), un(q)), !r))
                if (He) Ce(q), (V = true);
                else J("recovery_reauth_required");
              return;
            }
            if ((G("OAuth token refresh failed \u2014 run /login to re-authenticate", "auth"), !r))
              J("recovery_reauth_required");
          }
          return;
        }
      }
      if (m) return;
      if (!b && pe[e].fetchFailure === "retry" && !tt()) {
        En(e, `could not fetch fresh session credentials after code ${e}`);
        return;
      }
      if (tO(b) && !pe[e].needsOAuthRefresh && z) {
        if (await hr("owner_changed_recovery", o)) return;
        let j = false;
        try {
          j = await z(t ?? "");
        } catch (q) {
          n(`[remote-bridge] ${e} late OAuth refresh threw: ${l(q)}`, { level: "error" });
        }
        if (m || N !== o) return;
        if (j) {
          if (
            ((b = await dr(() => Ar(Z() ?? t ?? "", o), `fetchRemoteCredentials (${e} late refresh)`, O)), m || N !== o)
          )
            return;
        }
      }
      if (tO(b)) {
        if ((G(Xr, "auth"), !r)) J("recovery_credentials_rejected");
        return;
      }
      let w = 0;
      if (!b) {
        let j = await Ji(e, o, r, tt() ? pe[e].remintCap : void 0);
        if (((b = j.creds), (w = j.attempts), !b || m || N !== o)) return;
      }
      if (v3(b)) {
        if (!m) {
          if ((G(r8(b), $e(b)), !r)) J(Vr("recovery", b));
        }
        return;
      }
      if (N !== o) return;
      at = te;
      let C = await pt(b, pe[e].cause, w);
      if (C === "suppressed_teleported") {
        G("Session teleported to cloud");
        return;
      }
      if (C === "suppressed_owner_changed") return;
      if ((n(`[remote-bridge] Transport rebuilt after ${e}`), !m)) {
        if (!r) Ce(pe[e].recoveredCode, w > 0 ? { remint_attempts: w } : void 0);
      }
    } catch (t) {
      if (
        (n(`[remote-bridge] ${e} recovery failed: ${l(t)}`, { level: "error" }),
        Y("error", pe[e].failureDiagnostic),
        !m && !U)
      ) {
        if ((En(e, `Transport recovery failed (${e}): ${l(t)}`), pe[e].fetchFailure === "terminal" && !r))
          J("recovery_failed");
      }
    } finally {
      if (Qt(o)) {
        if (Ie !== void 0 && W !== void 0) {
          Ye();
          let t = W;
          (W = void 0), qr(t.code, t.cause, t.detail, true);
        } else W = void 0;
        if (Ie === void 0 && !le) _e.drop(), ce.drop(), (Ke = false);
      }
    }
  }
  if ((bn(), !te && fe && fe.length > 0)) _e.start(), ce.start();
  S.connect(), (or = setTimeout(mn, O.connect_timeout_ms, Hr));
  function ht(e) {
    return ee(e).map((r) => ({ ...r, session_id: _ }));
  }
  function mr() {
    let e = _e.end(),
      r = ce.end(),
      o = Ke;
    if (((Ke = false), e.length === 0 && r.length === 0)) return;
    let t = [],
      a = [],
      d = () => {
        if (a.length > 0) t.push(...ht(a)), (a = []);
      },
      E = 0,
      b = 0;
    while (E < e.length || b < r.length) {
      let w = e[E],
        C = r[b];
      if (w && (!C || w.seq < C.seq)) _r.add(w.message.uuid), a.push(w.message), E++;
      else if (C) {
        d();
        let j = C.frame;
        if ("uuid" in j && typeof j.uuid === "string") ot.add(j.uuid);
        t.push(Object.assign({}, j, { session_id: _ })), b++;
      }
    }
    if ((d(), o && ge.size === 0)) ye("running");
    n(
      `[remote-bridge] Drained ${e.length} queued message(s) and ${r.length} SDK event(s) / control frame(s) after flush`,
    ),
      S.writeBatch(t);
  }
  function Zi(e) {
    let r = e.takeUndeliveredEvents?.() ?? [];
    if (r.length === 0) return;
    n(`[remote-bridge] Carrying ${r.length} undelivered client event(s) over to the rebuilt transport`),
      Y("info", "bridge_repl_v2_events_carried_over", { count: r.length }),
      s("tengu_bridge_repl_events_carried_over", { count: r.length }),
      S.adoptUndeliveredEvents?.(r);
  }
  function Lr(e, r) {
    if (ce.enqueue({ seq: st++, frame: e })) {
      n(`[remote-bridge] Queued ${r} during flush`);
      return;
    }
    S.write(e), n(`[remote-bridge] Sent ${r}`);
  }
  async function eo(e) {
    let r = e.filter(Mde),
      o = yo(r, Pe);
    if (o.length < r.length) n(`[remote-bridge] Capped initial flush: ${r.length} -> ${o.length} (cap=${Pe})`);
    let t = ht(o).map((d) => ({ ...d, historical: true }));
    if (t.length === 0) return;
    let a = r.findLast((d) => d.type !== "attachment");
    if (a && H9t(a) && ge.size === 0) ye("running");
    n(`[remote-bridge] Flushing ${t.length} history events`), await S.writeBatch(t);
  }
  let mt = xe === true,
    ar;
  function ro(e) {
    if (e?.skipArchive) mt = true;
    if (e?.reason) ar = e.reason;
    if (Or) return Or;
    return (m = true), (Or = to()), Or;
  }
  async function to() {
    sn("teardown");
    let e = Re ?? Xe;
    if (e !== void 0) {
      if (!$y(_)) {
        let C = Re === void 0 ? cn() : void 0;
        if (C !== void 0 && He && w9t()) Ce(C);
        else J(e);
      }
      (Re = void 0), (Xe = void 0), (De = void 0);
    } else if (!V && W?.code === 403 && !$y(_)) dt(W.detail);
    else if (!V && ((ze > 0 && (Ie !== void 0 || le)) || (W !== void 0 && W.code !== 4090)) && !$y(_))
      J("recovery_abandoned_at_teardown");
    if (
      (Nr?.(),
      pn(),
      pr?.(),
      (pr = void 0),
      yr?.(),
      Mr(),
      it?.stop(),
      sr.cancelAll(),
      clearTimeout(or),
      Ye(),
      Br(),
      ye("idle"),
      ar !== void 0)
    )
      S.write(Wyn(_, ar));
    if ((S.write(jyn(_)), mt || (Ir && ar !== "remote_control_disabled"))) {
      let C = xe ? "skipped_host_owned" : mt ? "skipped_teleport" : "skipped_remint_loop";
      if (ar !== void 0) await Promise.race([S.flush(), ne(kt)]);
      S.close(),
        await S.flushGoodbye(),
        n(`[remote-bridge] Teardown complete (skipArchive): session=${_}`),
        Y("info", "bridge_repl_v2_teardown"),
        s("tengu_bridge_repl_teardown", { v2: true, archive_status: c(C), archive_ok: false }),
        Sn();
      return;
    }
    let r = O.teardown_archive_timeout_ms,
      o = Date.now(),
      t = _n(),
      a = t === void 0 ? lt() : void 0,
      d = a?.token,
      E = await Le(_, u, d, f, r, t, he),
      b = r - (Date.now() - o);
    if (E === 401 && a?.source === "current" && z && b >= 200)
      try {
        await Promise.race([z(d ?? ""), ne(b)]),
          (a = lt()),
          (d = a.token),
          (E = await Le(_, u, d, f, Math.max(1, r - (Date.now() - o)), t, he));
      } catch (C) {
        n(`[remote-bridge] Teardown 401 retry threw: ${l(C)}`, { level: "error" });
      }
    if (ar !== void 0) await Promise.race([S.flush(), ne(kt)]);
    S.close(), await S.flushGoodbye();
    let w = Vn(E, re);
    n(`[remote-bridge] Torn down (archive=${E})`),
      Y("info", "bridge_repl_v2_teardown"),
      s("tengu_bridge_repl_teardown", {
        v2: true,
        archive_status: c(w),
        archive_credential: ke(a?.source),
        archive_ok: typeof E === "number" && E < 400,
        archive_http_status: typeof E === "number" ? E : E === "untrusted_device" ? 403 : void 0,
        archive_timeout: E === "timeout",
        archive_no_token: E === "no_token",
      }),
      Sn();
  }
  s("tengu_bridge_repl_started", {
    has_initial_messages: !!(fe && fe.length > 0),
    v2: true,
    expires_in_s: H.expires_in,
    inProtectedNamespace: YO(),
    ...Che(),
  }),
    y("bridge_connect");
  function Te(e) {
    if (!U) return false;
    return n(`[remote-bridge] Dropping ${e} after owner change`), true;
  }
  let bt = {
    bridgeSessionId: _,
    titleWriter: i.titleWriter,
    noHistoryBackfill: K || Zr,
    detachForHandoff: () => {
      sr.cancelAll(), Mr();
    },
    sessionGroupingId: kr,
    outboundOnly: Rr ?? false,
    environmentId: "",
    sessionIngressUrl: H.api_base_url,
    ...(be && { getWorkerBearerToken: () => (m ? null : nt) }),
    getLastSequenceNum: () => S.getLastSequenceNum(),
    flush: () => (mr(), S.flush()),
    writeMessages(e) {
      if (Te("writeMessages")) return;
      let r = e.filter((t) => Mde(t) && !Yt.has(t.uuid) && !_r.has(t.uuid));
      if (r.length === 0) return;
      if (!hn)
        for (let t of r) {
          let a = ier(t);
          if (a !== void 0 && Mt?.(a, _)) {
            hn = true;
            break;
          }
        }
      if (_e.enqueue(...r.map((t) => ({ seq: st++, message: t })))) {
        if (r.some(H9t)) Ke = true;
        n(`[remote-bridge] Queued ${r.length} message(s) during flush`);
        return;
      }
      for (let t of r) _r.add(t.uuid);
      let o = ht(r);
      if (r.some(H9t) && ge.size === 0) ye("running");
      n(`[remote-bridge] Sending ${r.length} message(s)`), S.writeBatch(o);
    },
    reportMetadata(e) {
      if (Te("reportMetadata")) return;
      S.reportMetadata(e);
    },
    refreshGitBranch() {
      xr?.();
    },
    writeSdkMessages(e) {
      if (Te("writeSdkMessages")) return;
      let r = e.filter((t) => !t.uuid || !ot.has(t.uuid));
      if (r.length === 0) return;
      if (ce.active) {
        let t = r.filter((d) => d.type !== "stream_event"),
          a = r.length - t.length;
        if (a > 0) n(`[remote-bridge] Dropped ${a} stream_event frame(s) during flush`);
        if (t.length > 0)
          ce.enqueue(...t.map((d) => ({ seq: st++, frame: d }))),
            n(`[remote-bridge] Queued ${t.length} SDK event(s) during flush`);
        return;
      }
      for (let t of r) if (t.uuid) ot.add(t.uuid);
      let o = r.map((t) => ({ ...t, session_id: _ }));
      S.writeBatch(o);
    },
    sendControlRequest(e) {
      SSt(e.request_id, { automated: !Ehe(e) });
      let r = e.request;
      if (r.subtype === "can_use_tool" || r.subtype === "request_user_dialog")
        ge.delete(e.request_id), ge.set(e.request_id, { request: e }), tr.delete(e.request_id);
      if (r.subtype === "request_user_dialog" && (ce.active || le))
        return (
          tr.add(e.request_id),
          n(
            `[remote-bridge] Not forwarding request_user_dialog while writes are gated / transport recovering (local-only): ${e.request_id}`,
          ),
          false
        );
      if (Te("control_request")) return false;
      let o = { ...e, session_id: _ };
      if (r.subtype === "can_use_tool") {
        let t;
        if (I("tengu_bridge_requires_action_details", false)) {
          let a = r.tool_name === Qe || r.tool_name === Bt,
            d;
          if (r.tool_name === Yi) {
            let w = Array.isArray(r.input?.questions) ? r.input.questions : [],
              C = w[0],
              j = C?.header || C?.question;
            d = { label: "Question", body: j ? j + (w.length > 1 ? ` (+${w.length - 1} more)` : "") : "Tap to answer" };
          } else if (r.tool_name === Wh) d = { label: "Plan", body: "Plan ready for review" };
          if (!d && r.requires_user_interaction) d = { label: r.display_name ?? r.tool_name, body: "" };
          let E = a && typeof r.input?.command === "string" ? co(r.input.command) : void 0,
            b = a && typeof r.input?.description === "string" ? r.input.description : void 0;
          t = {
            tool_name: r.tool_name,
            display_tool_name: d?.label ?? r.display_name ?? r.tool_name,
            action_description: d?.body ?? co(r.description || b || (E && ir(E, 120)) || ""),
            raw_command: d ? void 0 : E,
            tool_use_id: r.tool_use_id,
            request_id: d ? "" : e.request_id,
            ...(d && e.request_id && { suppressed_request_id: e.request_id }),
            input: r.input,
          };
        }
        if (t) ge.set(e.request_id, { request: e, details: t });
        ye("requires_action", t);
      } else if (r.subtype === "request_user_dialog") {
        let t;
        if (I("tengu_bridge_requires_action_details", false))
          t = jot(r.dialog_kind, r.payload, e.request_id, r.tool_use_id);
        if (t) ge.set(e.request_id, { request: e, details: t });
        ye("requires_action", t);
      }
      return Lr(o, `control_request request_id=${e.request_id}`), true;
    },
    sendControlResponse(e, r) {
      if (!r?.skipStateReport) ut(e.response.request_id, true);
      if (Te("control_response")) return;
      let o = { ...e, session_id: _ };
      if (!r?.skipStateReport) ye("running");
      Lr(o, "control_response");
    },
    sendControlCancelRequest(e) {
      if (tr.delete(e)) {
        ge.delete(e), n(`[remote-bridge] Local-only retract of a declined dialog forward request_id=${e}`);
        return;
      }
      if ((ut(e, true), Te("control_cancel_request"))) return;
      let r = { type: "control_cancel_request", request_id: e, session_id: _ };
      ye("running"), Lr(r, `control_cancel_request request_id=${e}`);
    },
    sendResult(e) {
      if (((Ke = false), Te("result"))) return;
      ye("idle"), Lr(jyn(_, e), `result${e ? ` user_message_uuid=${e}` : ""}`);
    },
    async subscribePR(e, r, o) {
      if (U) return { ok: false, reason: "owner_changed" };
      let t = `${e}#${r}`,
        a = nr.get(t);
      if (o) nr.set(t, { agentId: o, repo: e, prNumber: r });
      let d = await aut("subscribe", {
        sessionId: _,
        repo: e,
        prNumber: r,
        baseUrl: u,
        getAccessToken: Z,
        getTrustedDeviceToken: uh,
      });
      if (!d.ok && o)
        if (a) nr.set(t, a);
        else nr.delete(t);
      return d;
    },
    async unsubscribePR(e, r) {
      if (U) return { ok: false, reason: "owner_changed" };
      let o = await aut("unsubscribe", {
        sessionId: _,
        repo: e,
        prNumber: r,
        baseUrl: u,
        getAccessToken: Z,
        getTrustedDeviceToken: uh,
      });
      if (o.ok) nr.delete(`${e}#${r}`);
      return o;
    },
    async fetchInboxMessage(e) {
      let r = (o) => (p("bridge_inbox_fetch", o), { ok: false, reason: o });
      if (m) return r("no_bridge");
      if (U) return r("owner_changed");
      return r("feature_disabled");
    },
    getPRWebhookTargets() {
      return [...nr.values()];
    },
    teardown: ro,
    neverArchive: xe,
    async archive() {
      if (xe) return;
      let e = _n();
      await Le(_, u, e === void 0 ? lt().token : void 0, f, O.teardown_archive_timeout_ms, e, he);
    },
    [Symbol.asyncDispose]() {
      return bt.teardown({ reason: "host_exit" });
    },
  };
  if (xe && !te) vr(_, he);
  let Sn = vt(bt);
  return bt;
}
async function dr(i, u, f) {
  let v = f.init_retry_max_attempts;
  for (let T = 1; T <= v; T++) {
    let R = await i();
    if (R !== null) return R;
    if (T < v) {
      let F = f.init_retry_base_delay_ms * 2 ** (T - 1),
        A = F * f.init_retry_jitter_fraction * (2 * Math.random() - 1),
        D = Math.min(F + A, f.init_retry_max_delay_ms);
      n(`[remote-bridge] ${u} failed (attempt ${T}/${v}), retrying in ${Math.round(D)}ms`), await ne(D);
    }
  }
  return null;
}
async function At(i, u, f, v) {
  let T = false,
    R = false,
    F = await dr(
      async () => {
        if (T) R = true;
        let A = v.getAccessToken(),
          D = false,
          K = await i(A, () => {
            D = true;
          }),
          oe = tO(K);
        if ((K === null || oe) && D && v.onAuth401 && !T && !v.recoveryAttemptedTokens.has(A)) {
          v.recoveryAttemptedTokens.add(A);
          let ve = false;
          try {
            ve = await v.onAuth401(A);
          } catch (Fe) {
            n(`[remote-bridge] ${u} 401 \u2014 OAuth refresh threw: ${l(Fe)}`, { level: "error" });
          }
          if (
            ((T = ve),
            n(
              `[remote-bridge] ${u} 401 \u2014 OAuth ${ve ? "refreshed; retrying with the fresh token" : "refresh unavailable"}`,
            ),
            Y("info", "bridge_repl_v2_init_401_refresh", { refreshed: ve }),
            T && oe)
          )
            return null;
        }
        return K;
      },
      u,
      f,
    );
  if (F === null && T && !R)
    return (
      n(`[remote-bridge] ${u} refreshed on the final attempt; one extra try with the fresh token`),
      i(v.getAccessToken(), () => {})
    );
  return F;
}
function mo(i) {
  if (i.reason === "untrusted_device") return !CV();
  return i.reason === "session_stale_relogin";
}
function $e(i) {
  return mo(i) ? "auth" : "terminal";
}
function zr(i) {
  return i.reason === "request_rejected" && i.status === 403 && lre(i.source);
}
function Vr(i, u) {
  return zr(u) ? `${i}_credentials_rejected_nonorigin` : `${i}_credentials_rejected`;
}
var vo = { nonorigin_cf: "recovered_403_nonorigin_cf", nonorigin_other: "recovered_403_nonorigin_other" };
function Gn(i) {
  switch (i?.rejectSource) {
    case "nonorigin_cf":
      return "transport_closed_403_nonorigin_cf";
    case "nonorigin_other":
      return "transport_closed_403_nonorigin_other";
    case "origin":
    case void 0:
      return "transport_closed_403";
  }
}
function r8(i) {
  switch (i.reason) {
    case "untrusted_device":
      return Lde();
    case "session_stale_relogin":
      return "session expired for trusted-device check \u2014 run /login to re-authenticate";
    case "invalid_session_id":
      return "session id contains unsupported characters \u2014 check the --session-id value";
    case "request_rejected":
      if (zr(i)) return `${L9t(i.source)} \u2014 run /remote-control to retry`;
      return `Remote Control server rejected the request (HTTP ${i.status}) \u2014 run /remote-control to retry`;
    case "malformed_response":
      return _De;
  }
}
async function bo(i, u, f, v, T, R) {
  let F = await uh(),
    A = await F9t(i, u, f, v, F, T);
  if (v3(A) && A.reason === "untrusted_device") A = (await cMe(F, (D) => F9t(i, u, f, v, D, T), R)) ?? A;
  if (!A) return null;
  if (tO(A)) return A;
  if (v3(A)) {
    if (A.reason === "untrusted_device" && !C3()) return { terminal: true, reason: "request_rejected", status: 403 };
    return A;
  }
  return s3() ? { ...A, api_base_url: u } : A;
}
function Wn(i, u) {
  if (i === 403 || i === 404) return "superseded_unknown";
  if (i !== 4090) return;
  switch (u) {
    case "superseded_by_worker":
      return "superseded";
    case "session_not_active":
      return "session_archived";
    case "epoch_conflict":
    case void 0:
      return "superseded_unknown";
    case "epoch_stale":
    case "session_not_found":
    case "token_expired":
    case "auth_exhausted":
      return;
  }
}
function Kn(i) {
  return i !== "session_archived";
}
function Vn(i, u) {
  return i === "skipped_superseded"
    ? u === "session_archived"
      ? "skipped_archived"
      : "skipped_superseded"
    : i === "skipped_owner_changed"
      ? "skipped_owner_changed"
      : i === "no_token"
        ? "skipped_no_token"
        : i === "invalid"
          ? "invalid_id"
          : i === "untrusted_device"
            ? "server_403_untrusted"
            : i === "timeout" || i === "error"
              ? "network_error"
              : i >= 500
                ? "server_5xx"
                : i >= 400
                  ? "server_4xx"
                  : "ok";
}
async function Le(i, u, f, v, T, R, F) {
  if ($y(i)) return n(`[remote-bridge] Archive suppressed for teleported session ${i}`), vr(i, F), 200;
  if (R === "owner_changed")
    return (
      n(`[remote-bridge] Archive suppressed for owner-changed session ${i}`),
      Y("info", "bridge_repl_archive_suppressed_owner_changed"),
      "skipped_owner_changed"
    );
  if (R !== void 0)
    return (
      n(`[remote-bridge] Archive suppressed for ${R} session ${i}`),
      Y(
        "info",
        R === "superseded"
          ? "bridge_repl_archive_suppressed_superseded"
          : R === "session_archived"
            ? "bridge_repl_archive_suppressed_archived"
            : "bridge_repl_archive_suppressed_superseded_unknown",
      ),
      "skipped_superseded"
    );
  if (!f) return "no_token";
  let A = await uh().catch(() => {
      return;
    }),
    D = await Kyn(u, f, i, T, { useV2: A3(), orgUUID: v, trustedDeviceToken: A });
  if (wt(D)) vr(i, F);
  return D;
}
async function Ro(i, u, f, v, T, R, F) {
  if (!f) return { outcome: "ok" };
  let A = await uh().catch(() => {
      return;
    }),
    D = await $9t(u, f, i, T, { useV2: A3(), orgUUID: v, trustedDeviceToken: A });
  if (D === "invalid") return Y("info", "bridge_repl_v2_unarchive_invalid_id"), { outcome: "gone", status: "invalid" };
  if (D === "untrusted_device" || D === "session_stale_relogin") {
    if (D === "untrusted_device") {
      let oe = await cMe(A, (ve) => $9t(u, f, i, T, { useV2: A3(), orgUUID: v, trustedDeviceToken: ve }), F);
      if (typeof oe === "number" && (oe < 300 || oe === 409))
        return Y("info", "bridge_repl_v2_unarchive_ok"), { outcome: "ok" };
    }
    return Y("info", "bridge_repl_v2_unarchive_elevated_auth"), { outcome: "elevated_auth", reason: D };
  }
  if (typeof D !== "number") return Y("info", "bridge_repl_v2_unarchive_failed"), null;
  let K = D < 300 || D === 409;
  if ((Y("info", K ? "bridge_repl_v2_unarchive_ok" : "bridge_repl_v2_unarchive_failed"), K)) return { outcome: "ok" };
  if (D === 400 || D === 403 || D === 404) return { outcome: "gone", status: D };
  if (D === 401) R?.();
  return null;
}
function yo(i, u) {
  if (u <= 0 || i.length <= u) return i;
  let f = i.length - u;
  for (let { fromIdx: v, toIdx: T } of oBt(i))
    if (f > v && f <= T) {
      f = v;
      break;
    }
  return i.slice(f);
}
export { iUn, sUn, r8 };
