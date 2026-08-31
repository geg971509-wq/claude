// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { po, I4 } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { Nmt } from "/$bunfs/root/chunk-y79sc2hm.js";
import { w, c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { b, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { ys, Pf, fw, vc } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { TO } from "/$bunfs/root/chunk-z2bvp3sv.js";
import { Qnr } from "/$bunfs/root/chunk-0g6cj4h1.js";
import { hLe, FM } from "/$bunfs/root/chunk-2n1hsggr.js";
import { S3 } from "/$bunfs/root/chunk-z15hpjf9.js";
import { gr } from "/$bunfs/root/chunk-dck778n3.js";
import {
  ek,
  _ye,
  Ih,
  lD,
  RG,
  si,
  q1t,
  Nee,
  IIe,
  eFt,
  $le,
  c4n,
  V0,
  rdt,
  $b,
  B4n,
  m$t,
  g$t,
  Kdt,
  h$t,
  a9,
  _D,
  CSe,
  _qe,
  Jee,
  $$t,
  rI,
  S9,
  Tun,
  Ko,
  xe,
  OS,
} from "/$bunfs/root/chunk-zze8764r.js";
import { FE, X9, $E } from "/$bunfs/root/chunk-anwgkcw5.js";
import {
  pue,
  $g,
  e6t,
  Qte,
  oVe,
  Zte,
  m_,
  Rgt,
  ZDe,
  kwe,
  eOe,
  tOe,
  lVe,
  cVe,
  bI,
  uVe,
} from "/$bunfs/root/chunk-da857b4g.js";
import { bd } from "/$bunfs/root/chunk-6a5ggyw4.js";
import { zce } from "/$bunfs/root/chunk-kbyvkqye.js";
import { he } from "/$bunfs/root/chunk-h605j25g.js";
import { rgt } from "/$bunfs/root/chunk-pzvxycbq.js";
import { nne, iC, O8n } from "/$bunfs/root/chunk-z9rrv31w.js";
import { mVe } from "/$bunfs/root/chunk-5djs3wbb.js";
import { Aje, vje, Rje, FUn, Mhe, Sit } from "/$bunfs/root/chunk-1r1g3xwj.js";
import { atn } from "/$bunfs/root/chunk-ksj158tv.js";
import { bit } from "/$bunfs/root/chunk-tzcvnv1n.js";
import { Tit, kje, Hje } from "/$bunfs/root/chunk-q389k5tv.js";
import { iPt } from "/$bunfs/root/chunk-em2p93p3.js";
import { Z0e, Eit, Ait } from "/$bunfs/root/chunk-kw6hqsgh.js";
import { hT } from "/$bunfs/root/chunk-8spbv9dy.js";
import { Xr } from "/$bunfs/root/chunk-p8c745fb.js";
import { vi } from "/$bunfs/root/chunk-75bjbbtd.js";
import { Q, te } from "/$bunfs/root/chunk-wag5ye9w.js";
var qe = 500;
function Be(r, e, t, P) {
  return async (l, m, T, d, R, x) => {
    let i = x ?? (await CSe(l, m, T, d, R, void 0, P));
    if (i.behavior !== "ask") return i;
    let k = i.updatedInput ?? m;
    if (e.signal.aborted) return { behavior: "ask", message: rI };
    let E = he(T),
      U = () =>
        l.description(k, {
          isNonInteractiveSession: T.options.isNonInteractiveSession,
          toolPermissionContext: E,
          tools: T.options.tools,
        });
    if (T.requestDialog !== void 0) {
      let _ = Sit.of(T.session).permissionContextSetter,
        J = vje(l, m, T, d, R, P, (N) => {
          _?.(N, { preserveMode: !0 });
        }),
        L = await Aje({ ctx: J, updatedInput: i.updatedInput, suggestions: i.suggestions, permissionMode: E.mode });
      if (L) return L;
      if (e.signal.aborted) return { behavior: "ask", message: rI };
      let A = await U();
      if (e.signal.aborted) return { behavior: "ask", message: rI };
      let a = Date.now();
      try {
        return await new Promise((N, W) => {
          Rje({ ctx: J, description: A, result: i, awaitAutomatedChecksBeforeDialog: !0 }, N).catch(W);
        });
      } finally {
        t(Date.now() - a);
      }
    }
    if (i.localDisplayOnly || i.forcedByCaller === !0)
      return bit(l.name, "the teammate mailbox (a static-description wire)");
    let Y = await U();
    if (e.signal.aborted) return { behavior: "ask", message: rI };
    return new Promise((_) => {
      let M = Eit({
        toolName: l.name,
        toolUseId: R,
        input: k,
        description: Y,
        permissionSuggestions: i.suggestions,
        workerId: r.agentId,
        workerName: r.agentName,
        workerColor: r.color,
        teamName: r.teamName,
      });
      Tit({
        requestId: M.id,
        toolUseId: R,
        toolName: M.toolName,
        inputDigest: Z0e(M.toolName, k),
        onAllow(a, N, W, D) {
          A();
          let z =
            l.suppressesAllPermissionUpdates?.(k) === !0
              ? _D(N)
              : l.suppressesAlwaysAllowRule?.(k) === !0 || i.suppressAlwaysAllowRule === !0
                ? a9(N, l, he(T))
                : N;
          FM(z, T.storageV5).catch(h);
          let V = a && Object.keys(a).length > 0 ? a : k;
          _({ behavior: "allow", updatedInput: V, userModified: !1, ...(D && D.length > 0 && { contentBlocks: D }) });
        },
        onReject(a, N) {
          A();
          let W = a ? `${S9}${a}` : rI;
          _({ behavior: "ask", message: W, contentBlocks: N });
        },
        onRefuse(a) {
          A(), _({ behavior: "ask", message: a });
        },
        onUnboundVerdict() {},
      }),
        Ait(M, T.storageV5).then((a) => {
          if (!a)
            A(),
              _({
                behavior: "ask",
                message:
                  "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call.",
              });
        });
      let J = setInterval(
          async (a, N, W, D, z, V) => {
            if (a.signal.aborted) {
              N(), W({ behavior: "ask", message: rI });
              return;
            }
            let ae = await pue(D.agentName, D.teamName, V);
            for (let K of ae)
              if (K && !K.read) {
                let u = eOe(K.text);
                if (u && u.request_id === z.id) {
                  if ((await e6t(D.agentName, D.teamName, K, V), K.from !== vi)) {
                    n(`[InProcessRunner] Ignoring permission response from non-team-lead: ${K.from}`, {
                      level: "warn",
                    });
                    continue;
                  }
                  if (u.subtype === "success")
                    Hje({
                      requestId: u.request_id,
                      toolUseId: u.tool_use_id,
                      approvedRequest: u.approved_request,
                      decision: "approved",
                      updatedInput: u.response?.updated_input,
                      permissionUpdates: u.response?.permission_updates,
                    });
                  else
                    Hje({
                      requestId: u.request_id,
                      toolUseId: u.tool_use_id,
                      approvedRequest: u.approved_request,
                      decision: "rejected",
                      feedback: u.error,
                    });
                  return;
                }
              }
          },
          qe,
          e,
          A,
          _,
          r,
          M,
          T.storageV5,
        ),
        L = () => {
          A(), _({ behavior: "ask", message: rI });
        };
      e.signal.addEventListener("abort", L, { once: !0 });
      function A() {
        clearInterval(J), kje(M.id), e.signal.removeEventListener("abort", L);
      }
    });
  };
}
function F(r, e, t) {
  t.update(r, (P) => (P.type === "in_process_teammate" ? e(P) : P));
}
async function We(r, e, t, P, l) {
  return $g(vi, { from: r, text: e, timestamp: new Date().toISOString(), color: t }, P, l);
}
async function _e(r, e, t, P, l) {
  let m = ZDe(r, P),
    T;
  try {
    T = await We(r, b(m), e, t, l);
  } finally {
    kwe(m, P?.result, T);
  }
  return T !== void 0;
}
function je(r) {
  let e = new Set(r.filter((t) => t.status !== "completed").map((t) => t.id));
  return r.find((t) => {
    if (t.status !== "pending") return !1;
    if (t.owner) return !1;
    return t.blockedBy.every((P) => !e.has(P));
  });
}
function Ge(r) {
  let e = `Complete all open tasks. Start with task #${r.id}: 

 ${r.subject}`;
  if (r.description)
    e += `

${r.description}`;
  return e;
}
async function ve(r, e, t, P) {
  if (!t) return;
  try {
    let l = await iC(r, P),
      m = je(l);
    if (!m) return;
    let T = await O8n(r, m.id, e, void 0, P);
    if (!T.success) {
      n(`[inProcessRunner] Failed to claim task #${m.id}: ${T.reason}`);
      return;
    }
    return (
      await nne(r, m.id, { status: "in_progress" }, P),
      n(`[inProcessRunner] Claimed task #${m.id}: ${m.subject}`),
      Ge(m)
    );
  } catch (l) {
    n(`[inProcessRunner] Error checking task list: ${l}`);
    return;
  }
}
async function Ee(r, e, t, P) {
  let l = await pue(r.agentName, r.teamName, P),
    m = -1,
    T = null;
  for (let i = 0; i < l.length; i++) {
    let k = l[i];
    if (k && !k.read) {
      let E = tOe(k.text);
      if (E) {
        (m = i), (T = E);
        break;
      }
    }
  }
  if (m !== -1) {
    let i = l[m],
      k = Q(l.slice(0, m), (E) => !E.read);
    return (
      n(
        `[inProcessRunner] ${r.agentName} received shutdown request from ${T?.from} (prioritized over ${k} unread messages)`,
      ),
      await e6t(r.agentName, r.teamName, i, P),
      { type: "shutdown_request", request: T, originalMessage: i.text, entryFrom: i.from }
    );
  }
  let d = [],
    R = [];
  for (let i of l) {
    if (!i || i.read) continue;
    if (bI(i.text)) d.push(i);
    else R.push(i);
  }
  let x = null;
  if (d.length > 0) {
    for (let i of d) {
      let k = lVe(i.text);
      if (k && i.from === vi) {
        let E = B4n(e, k, t, P);
        if (E)
          n(`[inProcessRunner] ${r.agentName} applied lead plan_approval_response: approved=${E.approved}`),
            (x = uVe(E));
        else n(`[inProcessRunner] ${r.agentName} ignoring stale plan_approval_response (not awaiting approval)`);
        continue;
      }
      if (cVe(i.text)) {
        n(
          `[inProcessRunner] ${r.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`,
          { level: "warn" },
        );
        continue;
      }
      n(`[inProcessRunner] ${r.agentName} dropping protocol frame from ${i.from}: ${i.text.substring(0, 80)}`, {
        level: "warn",
      });
    }
    await Qte(r.agentName, r.teamName, d, P);
  }
  if (x) return { type: "new_message", message: x, from: vi };
  if (R.length > 0)
    return (
      n(`[inProcessRunner] ${r.agentName} draining ${R.length} message(s) from ${te(R.map((i) => i.from)).join(", ")}`),
      await Qte(r.agentName, r.teamName, R, P),
      { type: "new_messages", messages: R }
    );
  return null;
}
async function Ve(r, e, t, P, l, m, T, d, R = !1, x) {
  n(`[inProcessRunner] ${r.agentName} starting poll loop (abort=${e.signal.aborted})`);
  let k = Date.now(),
    E = !1,
    U = 0;
  while (!e.signal.aborted) {
    if (U > 0) await ne(500);
    U++;
    let Y = P(),
      _ = Y.tasks[t];
    if (_ && _.type === "in_process_teammate" && _.pendingUserMessages.length > 0) {
      let A = _.pendingUserMessages[0];
      return (
        F(t, (a) => ({ ...a, pendingUserMessages: a.pendingUserMessages.slice(1) }), l),
        n(`[inProcessRunner] ${r.agentName} found pending user message (poll #${U})`),
        { type: "new_message", message: A.text, origin: A.origin, from: "user" }
      );
    }
    let M = r.resumableAgentId !== void 0 && IIe(r.resumableAgentId, l);
    if (
      R ||
      (_?.type === "in_process_teammate" && _.awaitingPlanApproval) ||
      Y.viewingAgentTaskId === t ||
      rdt(Y.tasks, t) ||
      M
    )
      k = Date.now();
    if (R && _?.type === "in_process_teammate" && _.evictAfter !== void 0)
      F(t, (A) => ({ ...A, evictAfter: void 0 }), l);
    if (
      _?.type === "in_process_teammate" &&
      _.evictAfter !== void 0 &&
      ((M && _.evictAfter <= Date.now() + 500) || (E && !M))
    )
      F(t, (A) => ({ ...A, evictAfter: Date.now() + V0 }), l);
    if (((E = M), e.signal.aborted))
      return n(`[inProcessRunner] ${r.agentName} aborted while waiting (poll #${U})`), { type: "aborted" };
    if (T) continue;
    n(`[inProcessRunner] ${r.agentName} poll #${U}: checking mailbox`);
    try {
      let A = await Ee(r, t, l, x);
      if (A) return A;
    } catch (A) {
      n(`[inProcessRunner] ${r.agentName} poll error: ${A}`);
    }
    let L = await ve(m, r.agentName, d, x);
    if (L) return { type: "new_message", message: L, from: "task-list" };
  }
  return (
    n(`[inProcessRunner] ${r.agentName} exiting poll loop (abort=${e.signal.aborted}, polls=${U})`), { type: "aborted" }
  );
}
async function spr(r) {
  let {
      identity: e,
      taskId: t,
      prompt: P,
      description: l,
      agentDefinition: m,
      teammateContext: T,
      toolUseContext: d,
      abortController: R,
      model: x,
      systemPrompt: i,
      systemPromptMode: k,
      allowedTools: E,
      allowPermissionPrompts: U,
      invokingRequestId: Y,
      standalone: _ = !1,
      resumeMessages: M,
      resumeReplacementState: J,
      initialFrom: L,
    } = r,
    { setAppState: A, taskRegistry: a } = d,
    N = Nmt(t);
  n(`[inProcessRunner] Starting agent loop for ${e.agentId}`);
  let W = {
      agentId: e.agentId,
      parentAgentId: d.agentId,
      depth: vc(d.agentContext),
      parentSessionId: e.parentSessionId,
      agentName: e.agentName,
      teamName: e.teamName,
      agentColor: e.color,
      planModeRequired: e.planModeRequired,
      isTeamLead: !1,
      agentType: "teammate",
      invokingRequestId: Y,
      invocationKind: "spawn",
      invocationEmitted: !1,
      isBackgroundAgent: !0,
    },
    { tools: D, mainLoopModel: z } = d.rootToolSurface,
    V;
  if (k === "replace" && i) V = i;
  else {
    let q = [...(await OS(D, z, void 0, { teammate: !0 })).filter((O) => O !== TO), atn];
    if (m) {
      let O = m.getSystemPrompt({ toolUseContext: d, primedAgentMemory: await hLe(m, d.storageV5) });
      if (O)
        q.push(`
# Custom Agent Instructions
${O}`);
      if (m.memory) s("tengu_agent_memory_loaded", { ...!1, scope: c(m.memory), source: w("in-process-teammate") });
    }
    if (k === "append" && i) q.push(i);
    V = q.join(`
`);
  }
  let ae = T.hasTaskListTools,
    K = {
      agentType: e.agentName,
      whenToUse: `In-process teammate: ${e.agentName}`,
      getSystemPrompt: () => V,
      tools: m?.tools ? te([...m.tools, Xr, ...(ae ? [FE, X9, hT, $E] : [])]) : ["*"],
      source: "projectSettings",
      permissionMode: "default",
      ...(m?.model && { model: m.model }),
    },
    u = M ? [...M] : [],
    ye = new Set(M?.map((S) => S.uuid)),
    Ne = {
      taskKind: "in_process_teammate",
      teamName: e.teamName,
      color: e.color,
      planModeRequired: e.planModeRequired,
      ...(m && { customAgentType: m.agentType }),
      ...(x && { model: x }),
    },
    Pe = oVe({ from: L ?? vi, text: P, summary: l }),
    j = Pe,
    ie = void 0,
    le = !1,
    se = !1,
    Se = (M?.length ?? 0) > 0,
    Ie = !1,
    ue = M ? Mhe(M).result : void 0,
    pe = !1,
    Ae = async (S) => {
      switch (((se = !1), S.type)) {
        case "shutdown_request":
          n(`[inProcessRunner] ${e.agentId} received shutdown request - passing to model`),
            (j = oVe({
              from: typeof S.entryFrom === "string" && S.entryFrom !== "" ? S.entryFrom : m_,
              text: Rgt(S.originalMessage, S.entryFrom) ?? S.originalMessage,
            })),
            (ie = void 0),
            iPt(t, xe({ content: j }), a);
          break;
        case "new_message":
          if ((n(`[inProcessRunner] ${e.agentId} received new message from ${S.from}`), S.from === "user"))
            (j = S.message), (ie = S.origin);
          else
            (j = oVe({ from: S.from, text: S.message, color: S.color, summary: S.summary })),
              (ie = void 0),
              iPt(t, xe({ content: j }), a);
          break;
        case "new_messages":
          n(`[inProcessRunner] ${e.agentId} received ${S.messages.length} drained message(s)`),
            (j = Zte(S.messages, { recipientIsLead: !1 })),
            (ie = void 0),
            iPt(t, xe({ content: j }), a);
          break;
        case "aborted":
          n(`[inProcessRunner] ${e.agentId} aborted while waiting`), (le = !0);
          break;
        case "idle_timeout":
          if ((n(`[inProcessRunner] ${e.agentId} idle timeout \u2014 exiting loop`), !_))
            d.agentLifecycle.setTeammate(e.agentId, void 0),
              await mVe(e.teamName, e.agentId, { onlyIfJoinedBefore: Date.now() }, d.storageV5);
          le = !0;
          break;
      }
    };
  if (!_) await ve(e.parentSessionId, e.agentName, ae, d.storageV5);
  try {
    a.updateTranscript(t, (I) => {
      let G = I.messages;
      if (M) for (let ge of M.slice(-eFt)) G = $le(G, ge);
      return { ...I, messages: $le(G, xe({ content: Pe })) };
    });
    let S = d.contentReplacementState ? (J ?? rgt()) : void 0,
      q = I4(),
      O = Ue();
    while (!R.signal.aborted && !le) {
      n(`[inProcessRunner] ${e.agentId} processing prompt: ${j.substring(0, 50)}...`);
      let I = gr();
      I.signal.addEventListener("abort", () => {
        pe = !0;
      }),
        F(t, (o) => ({ ...o, currentWorkAbortController: I, retryWake: O }), a);
      let G = xe({ content: j, origin: ie }),
        ge = [G],
        me = u,
        be = Ih(u, Pf(z));
      if (be > _ye(z, q1t(d.options.autoCompactWindow))) {
        n(`[inProcessRunner] ${e.agentId} compacting history (${be} tokens)`);
        let o = {
          ...d,
          abortController: R,
          agentId: po(e.agentId),
          readFileState: S3(d.readFileState, { stripSeededFromContext: !0 }),
          memorySelector: lD(),
          loadedNestedMemoryPaths: {},
          onCompactEvent: void 0,
          onRetryStatus: N.setRetryStatus,
        };
        try {
          let f = await $$t(
            u,
            o,
            { systemPrompt: si([]), userContext: {}, systemContext: {}, toolUseContext: o, forkContextMessages: u },
            !0,
            { isAutoCompact: !0 },
          );
          if (((me = Jee(f)), S)) S = rgt();
          (u.length = 0), u.push(...me), ye.clear(), a.updateTranscript(t, (C) => ({ ...C, messages: [...me, G] }));
        } catch (f) {
          if (f instanceof Error && f.message.startsWith(_qe))
            n(`[inProcessRunner] ${e.agentId} compaction blocked by PreCompact hook; continuing uncompacted`),
              (Ie = !0);
          else if (R.signal.aborted || (f instanceof Error && f.message === ek)) {
            n(`[inProcessRunner] ${e.agentId} aborted during compaction`), (le = !0);
            break;
          } else throw f;
        }
      }
      let Ce = me.length > 0 ? [...me] : void 0;
      u.push(G), (ue = void 0), (pe = I.signal.aborted);
      let Re = m$t(),
        $e = h$t(D),
        de = [],
        fe = d.getAppState().tasks[t],
        Me = fe && fe.type === "in_process_teammate" ? fe.permissionMode : "default",
        De = { ...K, permissionMode: Me },
        ke = !1,
        X = null;
      if (
        (await Qnr(T, async () =>
          fw(W, async () => {
            F(t, (o) => ({ ...o, status: "running", isIdle: !1, evictAfter: void 0 }), a),
              a.updateTranscript(t, (o) => ({ ...o, turnStartTime: Date.now() })),
              N.setMode("responding");
            for await (let o of $b({
              agentDefinition: De,
              promptMessages: ge,
              toolUseContext: d,
              canUseTool: Be(
                e,
                I,
                (f) => {
                  F(t, (C) => ({ ...C, totalPausedMs: (C.totalPausedMs ?? 0) + f }), a);
                },
                RG(A),
              ),
              isAsync: !0,
              canShowPermissionPrompts: U ?? !0,
              forkContextMessages: Ce,
              querySource: "agent:custom",
              override: {
                abortController: I,
                agentContext: W,
                onRetryStatus: N.setRetryStatus,
                subscribeRetryWake: O.subscribe,
                ...(e.resumableAgentId && { agentId: e.resumableAgentId }),
              },
              ...(e.resumableAgentId && {
                recordedUuids: ye,
                name: e.agentName,
                description: l,
                extraMetadata: { ...Ne, permissionMode: Me },
              }),
              model: x,
              preserveToolUseResults: !0,
              availableTools: D,
              allowedTools: E,
              contentReplacementState: S,
              stickyBetas: q,
              isTeammate: !0,
              teammateContext: T,
            })) {
              if (R.signal.aborted) {
                n(`[inProcessRunner] ${e.agentId} lifecycle aborted`);
                break;
              }
              if (I.signal.aborted) {
                if (
                  (n(`[inProcessRunner] ${e.agentId} current work aborted (Escape pressed)`),
                  o.type === "assistant" || o.type === "user")
                )
                  de.push(o), u.push(o), (X = Nee(u, o, X));
                ke = !0;
                break;
              }
              if (o.type === "spinner_mode") {
                N.setMode(o.mode);
                continue;
              }
              if (o.type === "api_metrics") continue;
              if (o.type === "query_model_change") continue;
              if (o.type === "set_in_progress_tool_use_ids") {
                if (o.op.action !== "remove") continue;
                let C = o.op.ids;
                a.updateTranscript(t, (B) => {
                  let H = new Set(B.inProgressToolUseIDs),
                    ee = !1;
                  for (let ce of C) if (H.delete(ce)) ee = !0;
                  return ee ? { ...B, inProgressToolUseIDs: H } : B;
                });
                continue;
              }
              de.push(o), u.push(o), (X = Nee(u, o, X)), g$t(Re, o, $e, D);
              let f = Kdt(Re);
              F(t, (C) => ({ ...C, progress: f }), a),
                a.updateTranscript(t, (C) => {
                  let B = C.inProgressToolUseIDs;
                  if (o.type === "assistant") {
                    for (let H of o.message.content) if (H.type === "tool_use") B = new Set([...B, H.id]);
                  } else if (o.type === "user") {
                    let H = o.message.content;
                    if (Array.isArray(H)) {
                      for (let ee of H)
                        if (typeof ee === "object" && "type" in ee && ee.type === "tool_result") {
                          let ce = new Set(B);
                          ce.delete(ee.tool_use_id), (B = ce);
                        }
                    }
                  }
                  return { ...C, messages: c4n(C.messages, o), inProgressToolUseIDs: B };
                });
            }
            return { success: !0, messages: de };
          }),
        ).finally(() => {
          if (X) u.push(...X.preserved), (X = null);
        }),
        F(t, (o) => ({ ...o, currentWorkAbortController: void 0 }), a),
        R.signal.aborted)
      )
        break;
      let oe = ke || I.signal.aborted;
      if (oe) {
        (pe = !0), n(`[inProcessRunner] ${e.agentId} work interrupted, returning to idle`);
        let o = Ko({ content: ek });
        a.updateTranscript(t, (f) => ({ ...f, messages: $le(f.messages, o) }));
      }
      Se ||= de.some((o) => (o.type === "assistant" && !o.isApiErrorMessage) || o.type === "user");
      let Z = !oe ? Tun(de) : void 0;
      if (((se = Z?.isTransient === !0 && !_ && Se), !_ && !oe)) {
        let o = null;
        try {
          o = await Ee(e, t, a, d.storageV5);
        } catch (f) {
          n(`[inProcessRunner] ${e.agentName} turn-end mailbox check failed: ${f}`);
        }
        if (o) {
          try {
            let { result: f, summary: C } = Mhe(u, { emitTelemetry: !0 });
            if (f !== void 0 || Z !== void 0) {
              if (
                (await _e(
                  e.agentName,
                  e.color,
                  e.teamName,
                  {
                    idleReason: Z !== void 0 ? "failed" : void 0,
                    summary: C,
                    failureReason: Z?.reason,
                    result: f,
                    senderReachable: !0,
                  },
                  d.storageV5,
                )) &&
                f !== void 0
              )
                ue = f;
            }
          } catch (f) {
            n(`[inProcessRunner] ${e.agentName} turn-end result delivery failed: ${f}`);
          }
          await Ae(o);
          continue;
        }
      }
      if (Z?.isTransient)
        s("tengu_teammate_transient_turn_failure", { error_kind: c(Z.errorKind ?? "unknown"), hold_evict: se });
      let we = d.getAppState().tasks[t],
        Oe = we?.type === "in_process_teammate" && we.isIdle;
      F(
        t,
        (o) => (
          o.onIdleCallbacks?.forEach((f) => f()),
          { ...o, isIdle: !0, evictAfter: se ? void 0 : Date.now() + V0, onIdleCallbacks: [] }
        ),
        a,
      );
      let Te = Z?.reason;
      if (!Oe && !_) {
        let o = Mhe(u, { emitTelemetry: !oe }),
          f = oe ? void 0 : o.result,
          C = await _e(
            e.agentName,
            e.color,
            e.teamName,
            {
              idleReason: oe ? "interrupted" : Te !== void 0 ? "failed" : "available",
              summary: o.summary,
              failureReason: Te,
              result: f,
              senderReachable: Te === void 0 || se,
            },
            d.storageV5,
          );
        if (f !== void 0 && C) ue = f;
      } else n(`[inProcessRunner] Skipping duplicate idle notification for ${e.agentName}`);
      n(`[inProcessRunner] ${e.agentId} finished prompt, waiting for next`);
      let Fe = await Ve(e, R, t, d.getAppState, a, e.parentSessionId, _, ae, se, d.storageV5);
      await Ae(Fe);
    }
    let re = !1,
      v;
    if (
      (F(
        t,
        (I) => {
          if (I.status !== "running") return (re = !0), I;
          return (
            (v = I.toolUseId),
            I.onIdleCallbacks?.forEach((G) => G()),
            {
              ...I,
              status: "completed",
              notified: !0,
              endTime: Date.now(),
              pendingUserMessages: [],
              abortController: void 0,
              currentWorkAbortController: void 0,
              retryWake: void 0,
              onIdleCallbacks: [],
            }
          );
        },
        a,
      ),
      !re)
    )
      a.updateTranscript(t, (I) => ({
        ...I,
        messages: I.messages.length ? [I.messages.at(-1)] : [],
        inProgressToolUseIDs: new Set(),
      }));
    if ((bd(t), a.evictTerminal(t), !re)) ys(t, "completed", { toolUseId: v, summary: e.agentId });
    if ((zce(e.agentId), Ie)) g("swarm_in_process_run", "compact_blocked_by_hook");
    else y("swarm_in_process_run");
    return { success: !0, messages: u };
  } catch (S) {
    let q = S instanceof Error ? S.message : "Unknown error";
    n(`[inProcessRunner] Agent ${e.agentId} failed: ${q}`);
    let O = !1,
      re;
    if (
      (F(
        t,
        (v) => {
          if (v.status !== "running") return (O = !0), v;
          return (
            (re = v.toolUseId),
            v.onIdleCallbacks?.forEach((I) => I()),
            {
              ...v,
              status: "failed",
              notified: !0,
              error: q,
              isIdle: !0,
              endTime: Date.now(),
              onIdleCallbacks: [],
              pendingUserMessages: [],
              abortController: void 0,
              currentWorkAbortController: void 0,
              retryWake: void 0,
            }
          );
        },
        a,
      ),
      !O)
    )
      a.updateTranscript(t, (v) => ({
        ...v,
        messages: v.messages.length ? [v.messages.at(-1)] : [],
        inProgressToolUseIDs: new Set(),
      }));
    if ((bd(t), a.evictTerminal(t), !O)) ys(t, "failed", { toolUseId: re, summary: e.agentId });
    if (!_) {
      let v;
      try {
        v = pe ? void 0 : FUn(u);
      } catch (I) {
        n(`[inProcessRunner] ${e.agentName} failed to extract partial result: ${I}`);
      }
      if (v !== void 0 && v === ue) v = void 0;
      await _e(
        e.agentName,
        e.color,
        e.teamName,
        { idleReason: "failed", completedStatus: "failed", failureReason: q, result: v },
        d.storageV5,
      );
    }
    return zce(e.agentId), p("swarm_in_process_run", "agent_loop_failed"), { success: !1, error: q, messages: u };
  }
}
function stn(r) {
  let e = r.identity.agentId;
  spr(r).catch((t) => {
    n(`[inProcessRunner] Unhandled error in ${e}: ${t}`);
  });
}
export { spr, stn };
