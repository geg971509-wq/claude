// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $vn, Ab, Avn, BT, BW, Cvn, Eee, Evn, FL, Fvn, GTe, HE, HTn, Hvn, IX, Jgr, Kot, NB, Nvn, Ovn, QGn, Rvn, STn, Uxe, W0, WTn, YNt, YTn, Ygr, Zvn, _k, aEn, aTn, bTn, bce, bye, cTn, dTn, dst, evn, fTn, gEn, gTn, hTe, hTn, hvn, jTn, kst, mTn, nEn, nvn, pEn, rEn, rvn, tIe, ust, vG, vvn, xTn, ycn, yle, yx, zTn } from "/$bunfs/root/modules/chunk-zze8764r/core.js";
import { $4, $5t, $T, $Tn, $n, $yt, Ae, An, Atr, BM, Bar, Bh, Bl, Bot, Bvn, CC, CTn, Cs, Ctr, DLe, De, Dne, Dp, E, En, Err, Et, F6, FM, Fc, G, G6, GS, Ge, Gy, HP, He, I, I8e, IAe, JE, JEe, Je, K, K4t, KY, Kd, Kr, Kt, Kvn, LH, LM, LT, LTt, Le, Lqt, Ls, Lu, Lue, MEe, MM, Mpe, N1, N8n, NTn, Nd, Nue, O, O1, O_, On, Ope, Oqt, PAn, Q3t, QE, Qde, Qs, Qvn, R2, RSn, Ra, SCt, SV, Sa, Se, Su, Sue, Swt, Te, Tt, UTn, UXe, UY, Ut, V, Vn, Vy, Wn, X, XF, Xvn, YEe, Yt, Yvn, Z, _S, _e, _o, _t, a, aC, ae, af, ar, ax, b, bO, bT, bV, be, bie, bjt, bo, bwt, c, cU, ce, ci, dU, dh, ee, f, fJ, ft, fy, g, g4, gR, gt, gw, h, hQe, he, ho, htr, hwt, hxn, i, i0, iKn, ib, ie, iie, ir, jAt, jc, jh, jp, kC, ke, l, lA, lAt, le, ln, m$, mwt, mxn, n, ne, no, oKn, ow, ox, p, pZe, pde, pr, qd, qt, qze, rue, s, st, te, ts, tu, uY, uvn, uy, v, vP, vTn, ve, w, w_n, wd, xi, y, yH, yQe, yU, ya, ye, yt, zLe, zMe, zt } from "/$bunfs/root/modules/chunk-zze8764r/prelude.js";
import { NU, OR, OW, PL, X9e, XU, Xw, act, aye, bG, hv, uee } from "/$bunfs/root/modules/chunk-zze8764r/functions-001.js";
import { Bxe, iD } from "/$bunfs/root/modules/chunk-zze8764r/functions-004.js";
import { Ih, LB, Pj, Qf, ZE, b2e, iL, t3 } from "/$bunfs/root/modules/chunk-zze8764r/functions-005.js";
import { K_, MB, fL, lX, sC, vD, xb } from "/$bunfs/root/modules/chunk-zze8764r/functions-006.js";
import { _D, a9 } from "/$bunfs/root/modules/chunk-zze8764r/functions-007.js";
import { BSe, Zgr, nh, yi } from "/$bunfs/root/modules/chunk-zze8764r/functions-011.js";
import { eH, i9 } from "/$bunfs/root/modules/chunk-zze8764r/functions-012.js";
import { JC, JZ, YG, ZC } from "/$bunfs/root/modules/chunk-zze8764r/functions-013.js";
import { ITe, Jee, L7, ZZ, th, xTe } from "/$bunfs/root/modules/chunk-zze8764r/functions-014.js";
import { Ipt, is } from "/$bunfs/root/modules/chunk-zze8764r/functions-016.js";
import { OPe, nz } from "/$bunfs/root/modules/chunk-zze8764r/functions-018.js";
import { Cf, L1, Ou, Qc, RE, eX } from "/$bunfs/root/modules/chunk-zze8764r/functions-019.js";
import { Vpt, Wb } from "/$bunfs/root/modules/chunk-zze8764r/functions-020.js";

function $1t({ toolName: e, toolUseID: t, abortSignal: r, onProgress: o }) {
  if (e === yt) return nTn;
  let u = Date.now(),
    d = !1,
    _ = 0,
    C = setInterval(() => {
      try {
        if (d) return;
        if (r.aborted) {
          A();
          return;
        }
        o({
          type: "progress",
          toolUseID: `${t}-heartbeat-${_++}`,
          data: { type: "tool_heartbeat", toolName: e, elapsedTimeSeconds: Math.floor((Date.now() - u) / 1000) },
        });
      } catch (x) {
        h(x), A();
      }
    }, hTe);
  C.unref();
  function A() {
    if (d) return;
    (d = !0), clearInterval(C);
  }
  return A;
}

function nTn() {}

async function Not(e) {
  let t;
  do t = await e.next();
  while (!t.done);
  return t.value;
}

async function* WZ(e, t = 1 / 0) {
  let r = (d) => {
      let _ = d.next().then(({ done: C, value: A }) => ({ done: C, value: A, generator: d, promise: _ }));
      return _;
    },
    o = [...e],
    u = new Set();
  while (u.size < t && o.length > 0) {
    let d = o.shift();
    u.add(r(d));
  }
  while (u.size > 0) {
    let { done: d, value: _, generator: C, promise: A } = await Promise.race(u);
    if ((u.delete(A), !d)) {
      if ((u.add(r(C)), _ !== void 0)) yield _;
    } else if (o.length > 0) {
      let x = o.shift();
      u.add(r(x));
    }
  }
}

async function qye(e) {
  let t = [];
  for await (let r of e) t.push(r);
  return t;
}

async function* pan(e) {
  for (let t of e) yield t;
}

function rTn() {
  return a.CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY ?? 10;
}

async function* yTe(e, t, r, o) {
  let u = o;
  for (let { isConcurrencySafe: d, blocks: _ } of oTn(e, u))
    if (d) {
      let C = {};
      for await (let A of iTn(_, t, r, u)) {
        if (eH(A)) {
          yield A;
          continue;
        }
        if (A.contextLayers) {
          let { toolUseID: x, layers: M } = A.contextLayers;
          if (!C[x]) C[x] = [];
          C[x].push(...M);
        }
        yield { message: A.message, newContext: u };
      }
      for (let A of _) {
        let x = C[A.id];
        if (!x || x.length === 0) continue;
        u = Nue(u, x);
      }
      yield { newContext: u };
    } else
      for await (let C of sTn(_, t, r, u)) {
        if (eH(C)) {
          yield C;
          continue;
        }
        if (C.newContext) u = C.newContext;
        yield { message: C.message, newContext: u };
      }
}

function oTn(e, t) {
  return e.reduce((r, o) => {
    let u = no(t.options.tools, o.name, t.options.toolAliases),
      d = u?.inputSchema.safeParse(o.input),
      _ = d?.success
        ? (() => {
            try {
              return Boolean(u?.isConcurrencySafe(d.data));
            } catch {
              return !1;
            }
          })()
        : !1;
    if (_ && r.at(-1)?.isConcurrencySafe) r.at(-1).blocks.push(o);
    else r.push({ isConcurrencySafe: _, blocks: [o] });
    return r;
  }, []);
}

async function* sTn(e, t, r, o) {
  let u = o;
  for (let d of e) {
    for await (let _ of i9(
      d,
      t.find((C) => C.message.content.some((A) => A.type === "tool_use" && A.id === d.id)),
      r,
      u,
      () => new Date().toISOString(),
    )) {
      if (eH(_)) {
        yield _;
        continue;
      }
      if (_.contextLayers) u = Nue(u, _.contextLayers.layers);
      yield { message: _.message, newContext: u };
    }
    yield { type: "set_in_progress_tool_use_ids", op: { action: "remove", ids: [d.id] } };
  }
}

async function* iTn(e, t, r, o) {
  yield* WZ(
    e.map(async function* (u) {
      yield* i9(
        u,
        t.find((d) => d.message.content.some((_) => _.type === "tool_use" && _.id === u.id)),
        r,
        o,
        () => new Date().toISOString(),
      ),
        yield { type: "set_in_progress_tool_use_ids", op: { action: "remove", ids: [u.id] } };
    }),
    rTn(),
  );
}

function STe(e) {
  if (typeof e === "number") return Number.isFinite(e) ? e : void 0;
  if (typeof e === "string" && /^[-+]?\d+$/.test(e.trim())) return Number(e);
  return;
}

function zZ(e) {
  if (!He(e)) return null;
  let t = { ...e },
    r = [];
  if (Array.isArray(t.offset) && t.offset.length === 1) (t.offset = t.offset[0]), r.push("offset_array");
  if (Array.isArray(t.limit) && t.limit.length === 1) (t.limit = t.limit[0]), r.push("limit_array");
  let o = STe(t.offset);
  if (o !== void 0 && o < 0) delete t.offset, r.push("offset_neg");
  let u = STe(t.limit);
  if (u !== void 0 && u <= 0) delete t.limit, r.push("limit_dropped");
  if ("length" in t) {
    let d = STe(t.length);
    if (!("limit" in t) && d !== void 0 && d > 0) t.limit = d;
    delete t.length, r.push("length");
  }
  return r.length ? { input: t, shapeClass: r.join(",") } : null;
}

function $ot(e) {
  return e
    .replace(
      /\r\n?|[\v\f\u0085\u2028\u2029]/g,
      `
`,
    )
    .split(`
`)
    .map((t) => An(Kd(Et(t))));
}

function kTe(e) {
  let t = `${$ot(e.hookName).join(" ")} says: `;
  return $ot(e.content)
    .map((r) => t + r)
    .join(`
`);
}

function R3n(e) {
  return { type: "system", subtype: "informational", content: kTe(e), level: "notice" };
}

function k3n(e) {
  let t = aTn().safeParse(e);
  if (!t.success) {
    n(`Malformed bridge permission response ignored: ${t.error.issues[0]?.message ?? "unknown"}`, { level: "warn" }),
      p("permission_bridge_relay", "permission_response_malformed");
    return;
  }
  if (typeof e === "object" && e !== null && e.updatedPermissions !== void 0 && t.data.updatedPermissions === void 0)
    return { ...t.data, updatedPermissionsDropped: !0 };
  return t.data;
}

function Gye(e, t, r) {
  if (typeof e !== "string") return !1;
  if (e === t) return y("bridge_permission_toolname_check"), !1;
  return (
    n(`Ignoring can_use_tool control_response for request_id=${r}: toolName '${e}' does not match pending '${t}'`, {
      level: "warn",
    }),
    p("bridge_permission_toolname_check", "toolname_mismatch"),
    !0
  );
}

function YW(e) {
  return (e.split("__").pop() || e).replace(/_/g, " ").replace(/\b\w/g, (r) => r.toUpperCase());
}

function xN(e) {
  let t = e.toolDenialKind;
  if (t === void 0) return [];
  let r = e.message.content;
  if (!Array.isArray(r)) return [];
  let o = r.filter((d) => d.type === "tool_result");
  if (o.length !== 1) return [];
  let u = { id: o[0].tool_use_id, non_execution_kind: t };
  if (e.userFeedback !== void 0) u.user_feedback = e.userFeedback;
  return [u];
}

function Uot(e, t) {
  if (e.length === 0 || !Array.isArray(t)) return [];
  let r = new Set();
  for (let o of t)
    if (o != null && typeof o === "object") {
      let u = o;
      if (u.type === "tool_result" && typeof u.tool_use_id === "string") r.add(u.tool_use_id);
    }
  return e.filter((o) => r.has(o.id));
}

function MN(e, t) {
  if (!Array.isArray(e)) return [];
  let r = [];
  for (let o of e) {
    if (o == null || typeof o !== "object" || o.type !== "tool_use") continue;
    let { id: u, name: d } = o;
    if (typeof u !== "string" || typeof d !== "string") continue;
    let _ = t ? no(t, d)?.mcpInfo : void 0,
      C = _?.title || YW(d);
    if (C === d) continue;
    let A = { id: u, display_name: C };
    if (_) {
      if (((A.server_display_name = _.displayName || _.serverInfoName || _.serverName), _.iconUrl))
        A.icon_url = _.iconUrl;
    }
    r.push(A);
  }
  return r;
}

function Mut(e) {
  return e.flatMap((t) => {
    switch (t.type) {
      case "assistant":
        if (t.is_meta === !0) {
          if (typeof t.local_command_source === "string")
            return [
              {
                type: "system",
                subtype: "local_command",
                content: t.local_command_source,
                level: "info",
                timestamp: t.timestamp ?? new Date().toISOString(),
                uuid: t.uuid ?? O1(),
                isMeta: !1,
              },
            ];
          return [];
        }
        return [
          {
            type: "assistant",
            message: t.message.id ? t.message : { ...t.message, id: O1() },
            uuid: t.uuid ?? O1(),
            requestId: void 0,
            timestamp: t.timestamp ?? new Date().toISOString(),
            ...(t.resumed_from_incomplete_thinking === !0 && { resumedFromIncompleteThinking: !0 }),
            ...(t.is_virtual === !0 && { isVirtual: !0 }),
            ...(t.aborted === !0 && { isAbortedMidStream: !0 }),
            ...(t.is_api_error_message === !0 && { isApiErrorMessage: !0 }),
            ...(t.api_error !== void 0 && { apiError: t.api_error }),
            ...(t.batch_tool_uses !== void 0 && t.batch_tool_uses.length > 0 && { batchToolUses: t.batch_tool_uses }),
          },
        ];
      case "user":
        return [
          {
            type: "user",
            message: t.message,
            uuid: t.uuid ?? O1(),
            timestamp: t.timestamp ?? new Date().toISOString(),
            isMeta: t.isSynthetic,
            ...(t.is_virtual === !0 && { isVirtual: !0 }),
          },
        ];
      case "system":
        if (t.subtype === "compact_boundary")
          return [
            {
              type: "system",
              content: "Conversation compacted",
              level: "info",
              subtype: "compact_boundary",
              compactMetadata: U1t(t.compact_metadata),
              uuid: t.uuid,
              timestamp: new Date().toISOString(),
            },
          ];
        return [];
      default:
        return [];
    }
  });
}

function zye(e) {
  return e.isMeta || e.isVisibleInTranscriptOnly || e.isCompactSummary || void 0;
}

function Vye(e) {
  let { preservedSegment: t, preservedMessages: r } = e;
  return {
    trigger: e.trigger,
    pre_tokens: e.preTokens,
    ...(e.postTokens !== void 0 && { post_tokens: e.postTokens }),
    ...(e.cumulativeDroppedTokens !== void 0 && { cumulative_dropped_tokens: e.cumulativeDroppedTokens }),
    ...(e.durationMs !== void 0 && { duration_ms: e.durationMs }),
    ...(e.userContext !== void 0 && { user_context: e.userContext }),
    ...(e.messagesSummarized !== void 0 && { messages_summarized: e.messagesSummarized }),
    ...(e.precomputed !== void 0 && { precomputed: e.precomputed }),
    ...(e.preCompactDiscoveredTools !== void 0 && { pre_compact_discovered_tools: e.preCompactDiscoveredTools }),
    ...(t && { preserved_segment: { head_uuid: t.headUuid, anchor_uuid: t.anchorUuid, tail_uuid: t.tailUuid } }),
    ...(r && {
      preserved_messages: {
        anchor_uuid: r.anchorUuid,
        uuids: r.uuids,
        ...(r.allUuids !== void 0 && { all_uuids: r.allUuids }),
      },
    }),
  };
}

function U1t(e) {
  let { preserved_segment: t, preserved_messages: r } = e;
  return {
    trigger: e.trigger,
    preTokens: e.pre_tokens,
    ...(e.post_tokens !== void 0 && { postTokens: e.post_tokens }),
    ...(e.cumulative_dropped_tokens !== void 0 && { cumulativeDroppedTokens: e.cumulative_dropped_tokens }),
    ...(e.duration_ms !== void 0 && { durationMs: e.duration_ms }),
    ...(e.user_context !== void 0 && { userContext: e.user_context }),
    ...(e.messages_summarized !== void 0 && { messagesSummarized: e.messages_summarized }),
    ...(e.precomputed !== void 0 && { precomputed: e.precomputed }),
    ...(e.pre_compact_discovered_tools !== void 0 && {
      preCompactDiscoveredTools: [...e.pre_compact_discovered_tools],
    }),
    ...(t && { preservedSegment: { headUuid: t.head_uuid, anchorUuid: t.anchor_uuid, tailUuid: t.tail_uuid } }),
    ...(r && {
      preservedMessages: {
        anchorUuid: r.anchor_uuid,
        uuids: [...r.uuids],
        ...(r.all_uuids !== void 0 && { allUuids: [...r.all_uuids] }),
      },
    }),
  };
}

function Nut(e) {
  return {
    type: "system",
    subtype: "compact_boundary",
    content: "Conversation compacted",
    level: "info",
    compactMetadata: U1t(e.compact_metadata),
    ...(e.logical_parent_uuid !== void 0 && { logicalParentUuid: e.logical_parent_uuid }),
    uuid: e.uuid,
    timestamp: new Date().toISOString(),
  };
}

function Fut(e) {
  return {
    type: "system",
    subtype: "model_refusal_fallback",
    content: e.content,
    level: "warning",
    trigger: e.trigger,
    direction: e.direction,
    ...(e.scope !== void 0 && { scope: e.scope }),
    originalModel: e.original_model,
    fallbackModel: e.fallback_model,
    requestId: e.request_id,
    apiRefusalCategory: e.api_refusal_category,
    apiRefusalExplanation: e.api_refusal_explanation,
    ...(e.saw_cyber_refusal && { sawCyberRefusal: !0 }),
    ...(e.retracted_message_uuids !== void 0 && { retractedMessageUuids: e.retracted_message_uuids }),
    ...(e.refused_user_message_uuid !== void 0 && { refusedUserMessageUuid: e.refused_user_message_uuid }),
    ...(e.provisional && { provisional: e.provisional }),
    isMeta: !1,
    uuid: e.uuid,
    timestamp: new Date().toISOString(),
  };
}

function $ut(e) {
  return {
    type: "system",
    subtype: "model_refusal_no_fallback",
    content: e.content,
    level: "warning",
    originalModel: e.original_model,
    requestId: e.request_id,
    apiRefusalCategory: e.api_refusal_category,
    apiRefusalExplanation: e.api_refusal_explanation,
    refusedUserMessageUuid: e.refused_user_message_uuid,
    isMeta: !1,
    uuid: e.uuid,
    timestamp: new Date().toISOString(),
  };
}

function Uut(e) {
  return {
    type: "system",
    subtype: "model_fallback",
    content: e.content,
    level: "warning",
    trigger: e.trigger,
    originalModel: e.original_model,
    fallbackModel: e.fallback_model,
    isMeta: !1,
    uuid: e.uuid,
    timestamp: new Date().toISOString(),
  };
}

function But(e) {
  return {
    type: "system",
    subtype: "model_consent_fallback",
    content: e.content,
    level: "warning",
    choice: e.choice,
    originalModel: e.original_model,
    fallbackModel: e.fallback_model,
    persistedAsDefault: e.persisted_as_default,
    isMeta: !1,
    uuid: e.uuid,
    timestamp: new Date().toISOString(),
  };
}

function B1t(e) {
  return typeof e.key === "string" && typeof e.text === "string" && cTn.has(e.priority);
}

function j1t(e, t) {
  if (e.current?.key === t || e.queue.some((o) => o.key === t)) return null;
  let r = e.queue.filter((o) => o.key.startsWith("remote:"));
  return r.length >= hTn ? r[0].key : null;
}

function o4e(e, t = "local") {
  let r = Number.isFinite(e.timeout_ms) ? Math.min(Math.max(e.timeout_ms, 0), dTn) : void 0;
  return {
    key: t === "remote" ? `remote:${e.key.slice(0, fTn)}` : e.key,
    text: ce(Et(e.text), mTn).replace(/\s*[\r\n\v\f]+\s*/g, " "),
    priority: t === "remote" && e.priority === "immediate" ? "high" : e.priority,
    ...(typeof e.color === "string" && e.color.length <= gTn && !(e.color in Object.prototype) && { color: e.color }),
    ...(r !== void 0 && { timeoutMs: r }),
  };
}

function wTe(e) {
  let t = {
    aborted: e.isAbortedMidStream ? !0 : void 0,
    is_api_error_message: e.isApiErrorMessage === !0 ? !0 : void 0,
    api_error: e.apiError,
    resumed_from_incomplete_thinking: e.resumedFromIncompleteThinking === !0 ? !0 : void 0,
    is_virtual: e.isVirtual === !0 ? !0 : void 0,
    batch_tool_uses: e.batchToolUses !== void 0 && e.batchToolUses.length > 0 ? e.batchToolUses : void 0,
  };
  return Qs(t, (r) => r !== void 0);
}

function jut(e, t) {
  return {
    type: "user",
    message: { role: "user", content: e.prompt },
    session_id: K(),
    parent_tool_use_id: null,
    uuid: e.source_uuid || t.uuid,
    timestamp: t.timestamp,
    isReplay: !0,
    ...(e.fileAttachments?.length && { file_attachments: e.fileAttachments }),
    ...(e.origin && { origin: R2(e.origin) }),
  };
}

function H3n(e, t) {
  return e.flatMap((r) => {
    switch (r.type) {
      case "assistant": {
        let o = _Tn(r),
          u = MN(o.content, t);
        return [
          {
            type: "assistant",
            message: o,
            session_id: K(),
            parent_tool_use_id: null,
            uuid: r.uuid,
            timestamp: r.timestamp,
            error: r.error,
            ...(r.requestId !== void 0 && { request_id: r.requestId }),
            ...wTe(r),
            ...(u.length > 0 && { tool_use_meta: u }),
          },
        ];
      }
      case "user": {
        let o = xN(r);
        return [
          {
            type: "user",
            message: r.message,
            session_id: K(),
            parent_tool_use_id: null,
            uuid: r.uuid,
            timestamp: r.timestamp,
            isSynthetic: zye(r),
            ...(r.toolUseResult !== void 0 && { tool_use_result: r.toolUseResult }),
            ...(o.length > 0 && { tool_result_meta: o }),
            ...(r.origin !== void 0 && { origin: r.origin }),
          },
        ];
      }
      case "system":
        if (r.subtype === "compact_boundary" && r.compactMetadata)
          return [
            {
              type: "system",
              subtype: "compact_boundary",
              session_id: K(),
              uuid: r.uuid,
              compact_metadata: Vye(r.compactMetadata),
            },
          ];
        if (r.subtype === "local_command" && (r.content.includes(`<${jp}>`) || r.content.includes(`<${_S}>`))) {
          let o = i4e(r.content, r.uuid, r.timestamp, r.contextUsage);
          return o ? [o] : [];
        }
        return [];
      case "attachment":
        if (r.attachment.type === "hook_system_message")
          return [
            {
              type: "assistant",
              message: Qc({ content: kTe(r.attachment) }).message,
              parent_tool_use_id: null,
              is_meta: !0,
              session_id: K(),
              uuid: r.uuid,
              timestamp: r.timestamp,
            },
          ];
        if (r.attachment.type === "queued_command") return [jut(r.attachment, r)];
        if (r.attachment.type === "tool_host_result_lines") return [Wut(r.attachment, r.uuid, K())];
        return [];
      default:
        return [];
    }
  });
}

function Wut(e, t, r) {
  return {
    type: "system",
    subtype: "tool_host_result",
    tool_use_id: e.toolUseID,
    host: { name: e.host, ...(e.workingDir !== void 0 && { working_dir: e.workingDir }) },
    ...(e.disposition !== void 0 && { disposition: e.disposition }),
    ...(e.label !== void 0 && { label: e.label }),
    ...(e.unverified === !0 && { unverified: !0 }),
    lines: e.lines,
    uuid: t,
    session_id: r,
  };
}

function i4e(e, t, r, o) {
  let u = !1,
    d = !1,
    _ = Et(e)
      .replace(/<local-command-(stdout|stderr)>([\s\S]*?)<\/local-command-\1>/g, (A, x, M) => {
        if (x === "stdout" ? u : d) return A;
        if (x === "stdout") u = !0;
        else d = !0;
        return kC(M);
      })
      .trim();
  if (_ === "") return null;
  return {
    type: "assistant",
    message: { ...Qc({ content: _ }).message, stop_reason: "end_turn", stop_sequence: null },
    parent_tool_use_id: null,
    is_meta: !0,
    local_command_source: Et(e),
    session_id: K(),
    uuid: t,
    timestamp: r,
    ...(o !== void 0 && { context_usage: o }),
  };
}

function qut(e) {
  return {
    type: "system",
    subtype: "model_consent_fallback",
    choice: e.choice,
    original_model: e.originalModel,
    fallback_model: e.fallbackModel,
    persisted_as_default: e.persistedAsDefault,
    content: e.content,
  };
}

function Gut(e) {
  return { type: "tool_use_summary", summary: e.summary, preceding_tool_use_ids: e.precedingToolUseIds };
}

function yTn(e, { includeOverageInUse: t = !0, unifiedWindows: r } = {}) {
  if (!e) return;
  return {
    status: e.status,
    ...(e.resetsAt !== void 0 && { resetsAt: e.resetsAt }),
    ...(e.rateLimitType !== void 0 && { rateLimitType: e.rateLimitType }),
    ...(e.utilization !== void 0 && { utilization: e.utilization }),
    ...(e.overageStatus !== void 0 && { overageStatus: e.overageStatus }),
    ...(e.overageResetsAt !== void 0 && { overageResetsAt: e.overageResetsAt }),
    ...(e.overageDisabledReason !== void 0 && {
      overageDisabledReason:
        e.overageDisabledReason === "org_spend_cap_reached" ? "org_level_disabled_until" : e.overageDisabledReason,
    }),
    ...(e.isUsingOverage !== void 0 && { isUsingOverage: e.isUsingOverage }),
    ...(e.overageInUse !== void 0 && t && { overageInUse: e.overageInUse }),
    ...(e.surpassedThreshold !== void 0 && { surpassedThreshold: e.surpassedThreshold }),
    ...(e.rateLimitGraceActive === !0 && { rateLimitGraceActive: !0 }),
    ...(e.overagePeriodMonthly !== void 0 && { overagePeriodMonthly: e.overagePeriodMonthly }),
    ...(e.overagePeriodChannel !== void 0 && { overagePeriodChannel: e.overagePeriodChannel }),
    ...(e.errorCode !== void 0 && { errorCode: e.errorCode }),
    ...(e.canUserPurchaseCredits !== void 0 && { canUserPurchaseCredits: e.canUserPurchaseCredits }),
    ...(e.hasChargeableSavedPaymentMethod !== void 0 && {
      hasChargeableSavedPaymentMethod: e.hasChargeableSavedPaymentMethod,
    }),
    ...(r !== void 0 && { unifiedWindows: r }),
  };
}

function x3n(e) {
  return {
    status: e.status,
    resetsAt: e.resetsAt ?? null,
    rateLimitType: e.rateLimitType ?? null,
    isUsingOverage: e.isUsingOverage ?? !1,
  };
}

function I3n(e, t, r = {}) {
  let o = yTn(e, r);
  if (!o) return;
  return { type: "rate_limit_event", rate_limit_info: o, uuid: O1(), session_id: t };
}

function _Tn(e) {
  let t = e.message.content;
  if (!Array.isArray(t)) return e.message;
  let r = DLe(t).map((o) => {
    if (o.type !== "tool_use") return o;
    if (o.name === Su) {
      Dp(Bh());
      let u = BM();
      if (u) return { ...o, input: { ...o.input, plan: u } };
    }
    return o;
  });
  return { ...e.message, content: r };
}

function BL(e = v()) {
  return Sa(IN, e);
}

function IN(e) {
  if (typeof e === "string") {
    let t = e.trim();
    if (/^[-+]?\d+(\.\d+)?$/.test(t)) {
      let r = Number(t);
      if (Number.isFinite(r)) return r;
    }
  }
  return e;
}

function zut(e, t = null) {
  if (!e) return !1;
  if (e.type === "assistant") {
    let r = bO(e.message.content);
    return r?.type === "text" || r?.type === "thinking" || r?.type === "redacted_thinking";
  }
  if (e.type === "user") {
    let r = e.message.content;
    if (Array.isArray(r) && r.length > 0 && r.every((o) => "type" in o && o.type === "tool_result")) return !0;
  }
  return t === "end_turn";
}

function W1t(e, t) {
  let r = bO(e.message.content),
    o = bO(t?.message.content);
  return r?.type === "text" && !bce.has(r.text) && o?.type === "text" ? o.text : void 0;
}

function fan(e) {
  let t = yU(),
    r = e ? t.lastIndexOf(e) + 1 : 0;
  return t.slice(r).map((o) => o.error);
}

function Vut(e, t, r) {
  let o = e?.type ?? "undefined",
    u = e?.type === "assistant" ? (bO(e.message.content)?.type ?? "none") : "n/a";
  return [`[ede_diagnostic] result_type=${o} last_content_type=${u} stop_reason=${t}`, ...fan(r)];
}

function man(e) {
  return e.type === "progress" && (e.data.type === "agent_progress" || e.data.type === "skill_progress");
}

function kTn(e) {
  if (e.type !== "assistant" && e.type !== "user") return !1;
  let t = e.message.content;
  if (!Array.isArray(t)) return !1;
  let r = t[0];
  return r?.type === "tool_use" || r?.type === "tool_result";
}

function Kut(e, t) {
  return e.enabled && (e.forwardText || kTn(t));
}

function* gan(e, t) {
  let r = e.data.agentType,
    o = e.data.description;
  for (let u of Cf([e.data.message]))
    switch (u.type) {
      case "assistant":
        if (!eX(u)) break;
        {
          let d = MN(u.message.content, t),
            _ = DLe(u.message.content);
          yield {
            type: "assistant",
            message: _ === u.message.content ? u.message : { ...u.message, content: _ },
            parent_tool_use_id: e.parentToolUseID,
            session_id: K(),
            uuid: u.uuid,
            timestamp: u.timestamp,
            error: u.error,
            ...(u.requestId !== void 0 && { request_id: u.requestId }),
            ...(r !== void 0 && { subagent_type: r }),
            ...(o !== void 0 && { task_description: o }),
            ...(u.isApiErrorMessage === !0 && { is_api_error_message: !0 }),
            ...(e.data.message.type === "assistant" &&
              e.data.message.apiError !== void 0 && { api_error: e.data.message.apiError }),
            ...(d.length > 0 && { tool_use_meta: d }),
          };
        }
        break;
      case "user": {
        yield {
          type: "user",
          message: u.message,
          parent_tool_use_id: e.parentToolUseID,
          session_id: K(),
          uuid: u.uuid,
          timestamp: u.timestamp,
          isSynthetic: zye(u),
          tool_use_result: u.mcpMeta ? { content: u.toolUseResult, ...u.mcpMeta } : u.toolUseResult,
          ...(u.origin && { origin: u.origin }),
          ...(r !== void 0 && { subagent_type: r }),
          ...(o !== void 0 && { task_description: o }),
        };
        break;
      }
    }
}

function* p7(e, t, r) {
  switch (e.type) {
    case "assistant": {
      let o = e.supersedesUuids;
      for (let u of Cf([e])) {
        if (!eX(u)) continue;
        let d = o;
        o = void 0;
        let _ = MN(u.message.content, r);
        yield {
          type: "assistant",
          message: u.message,
          parent_tool_use_id: null,
          session_id: K(),
          uuid: u.uuid,
          timestamp: u.timestamp,
          error: u.error,
          ...(u.requestId !== void 0 && { request_id: u.requestId }),
          ...(d !== void 0 && d.length > 0 && { supersedes: d }),
          ...wTe(e),
          ...(_.length > 0 && { tool_use_meta: _ }),
        };
      }
      return;
    }
    case "progress":
      if (man(e)) yield* gan(e, r);
      else if (e.data.type === "repl_tool_call")
        yield {
          type: "tool_progress",
          tool_use_id: e.toolUseID,
          tool_name: "REPL",
          parent_tool_use_id: e.parentToolUseID,
          elapsed_time_seconds: 0,
          repl_call: {
            inner_tool_name: e.data.toolName,
            inner_tool_input: e.data.toolInput,
            inner_tool_use_id: e.data.toolUseId,
            phase: e.data.phase,
          },
          session_id: K(),
          uuid: e.uuid,
        };
      else if (e.data.type === "bash_progress" || e.data.type === "powershell_progress") {
        if (!a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_CONTAINER_ID) break;
        if (t.shouldEmit(e.parentToolUseID, Date.now(), bTn))
          yield {
            type: "tool_progress",
            tool_use_id: e.toolUseID,
            tool_name: e.data.type === "bash_progress" ? "Bash" : "PowerShell",
            parent_tool_use_id: e.parentToolUseID,
            elapsed_time_seconds: e.data.elapsedTimeSeconds,
            task_id: e.data.taskId,
            session_id: K(),
            uuid: e.uuid,
          };
      } else if (e.data.type === "tool_heartbeat")
        yield {
          type: "tool_progress",
          tool_use_id: e.toolUseID,
          tool_name: e.data.toolName,
          parent_tool_use_id: e.parentToolUseID,
          elapsed_time_seconds: e.data.elapsedTimeSeconds,
          heartbeat: !0,
          session_id: K(),
          uuid: e.uuid,
        };
      else if (e.data.type === "agent_api_retry")
        yield {
          type: "tool_progress",
          tool_use_id: e.toolUseID,
          tool_name: yt,
          parent_tool_use_id: e.parentToolUseID,
          elapsed_time_seconds: 0,
          session_id: K(),
          uuid: e.uuid,
          subagent_type: e.data.agentType,
          ...(e.data.resolved !== !0 && {
            subagent_retry: {
              agent_id: e.data.agentId,
              attempt: e.data.attempt,
              max_retries: e.data.maxRetries,
              retry_delay_ms: e.data.retryDelayMs,
              error_status: e.data.errorStatus ?? null,
              error_category: e.data.errorCategory,
            },
          }),
        };
      break;
    case "user": {
      let o = xN(e);
      for (let u of Cf([e])) {
        let d = Uot(o, u.message.content);
        yield {
          type: "user",
          message: u.message,
          parent_tool_use_id: null,
          session_id: K(),
          uuid: u.uuid,
          timestamp: u.timestamp,
          isSynthetic: zye(u),
          tool_use_result: u.mcpMeta ? { content: u.toolUseResult, ...u.mcpMeta } : u.toolUseResult,
          ...(d.length > 0 && { tool_result_meta: d }),
          ...(u.origin && { origin: u.origin }),
          ...(e.isVirtual === !0 && { is_virtual: !0 }),
        };
      }
      return;
    }
    default:
  }
}

async function* P3n(e, t, r, o) {
  let u = !ax(),
    d,
    _ = he(o).mode;
  if (_ !== e.permissionMode)
    n(
      `Deferred tool resume: permissionMode mismatch (deferred under '${e.permissionMode}', resuming under '${_}'). --resume does not restore permissionMode \u2014 pass --permission-mode ${e.permissionMode} to match.`,
      { level: "warn" },
    );
  let C = r.findLast(
    (F) =>
      F.type === "assistant" &&
      Array.isArray(F.message.content) &&
      F.message.content.some((U) => U.type === "tool_use" && U.id === e.toolUseID),
  );
  if (!C || C.type !== "assistant") {
    n(`Deferred tool resume: tool_use ${e.toolUseID} not found in transcript`, { level: "warn" });
    return;
  }
  let A = C.message.content.find((F) => F.type === "tool_use" && F.id === e.toolUseID);
  if (!A) return;
  n(`Deferred tool resume: re-emitting ${e.toolName} (${e.toolUseID}) through PreToolUse`);
  let x = oKn(e.traceparent),
    M = yTe([A], [C], t, o)[Symbol.asyncIterator]();
  try {
    while (!0) {
      let F = await iKn(x, () => M.next());
      if (F.done) break;
      let U = F.value;
      if (eH(U)) continue;
      if (U.message) {
        if ((r.push(U.message), u)) await Wb(r, void 0, void 0, void 0, o.storageV5);
        if (U.message.type === "progress") {
          yield* p7(U.message, o.session.toolProgressThrottle, o.options.refreshTools?.() ?? o.options.tools);
          continue;
        }
        if (U.message.type === "attachment" && U.message.attachment.type === "hook_deferred_tool")
          d = U.message.attachment;
        let B = U.message.type === "user" ? xN(U.message) : [];
        yield { ...U.message, session_id: K(), parent_tool_use_id: null, ...(B.length > 0 && { tool_result_meta: B }) };
      }
    }
  } catch (F) {
    try {
      await M.return?.(void 0);
    } catch {}
    throw F;
  } finally {
    await M.return?.(void 0);
  }
  return d;
}

async function* D3n(e, t, r, o) {
  let u = !ax(),
    { permissionResult: d, assistantMessage: _ } = e,
    { toolUseID: C } = d;
  if (!C) {
    n("handleOrphanedPermission: dropping orphaned permission \u2014 permissionResult is missing toolUseID", {
      level: "warn",
    });
    return;
  }
  let A = _.message.content,
    x;
  if (Array.isArray(A)) {
    for (let fe of A)
      if (fe.type === "tool_use" && fe.id === C) {
        x = fe;
        break;
      }
  }
  if (!x) {
    n(
      `handleOrphanedPermission: dropping orphaned permission for toolUseID=${C} \u2014 assistant message ${_.message.id} has no matching tool_use block`,
      { level: "warn" },
    );
    return;
  }
  let M = x.name,
    F = no(t, M, o.options.toolAliases);
  if (!F) {
    n(
      `handleOrphanedPermission: dropping orphaned permission for toolUseID=${C} \u2014 tool "${M}" not found in active tools (${t.length} available)`,
      { level: "warn" },
    );
    return;
  }
  let U;
  if (d.behavior === "allow") {
    let fe = d.updatedInput;
    if (fe && Object.keys(fe).length > 0) U = fe;
    else
      (U = {}),
        n(`Orphaned permission for ${M}: updatedInput is missing or empty, falling back to original tool input`, {
          level: "warn",
        });
    let me = d.updatedPermissions;
    if (Array.isArray(me))
      try {
        let ge =
          F.suppressesAllPermissionUpdates?.(x.input) === !0 || (F.mcpInfo?.serverName === uy && aC())
            ? _D(me)
            : a9(me, F, he(o));
        o.setSessionToolPermissionContext((Ce) => yH(Ce, ge)), await FM(ge, o.storageV5);
      } catch (ge) {
        n(`Orphaned permission for ${M}: malformed updatedPermissions ignored: ${ge}`, { level: "warn" });
      }
  }
  let B = async (fe, me, ge, Ce, Ie, Ee) =>
    Ee?.behavior === "ask" && Ee.forcedByCaller === !0
      ? Ee
      : { ...d, updatedInput: U, decisionReason: { type: "mode", mode: "default" } };
  if (
    !r.some(
      (fe) =>
        fe.type === "assistant" &&
        Array.isArray(fe.message.content) &&
        fe.message.content.some((me) => me.type === "tool_use" && "id" in me && me.id === C),
    )
  ) {
    if ((r.push(_), u)) await Wb(r, void 0, void 0, void 0, o.storageV5);
  }
  let z = MN(_.message.content, t);
  yield { ..._, session_id: K(), parent_tool_use_id: null, ...(z.length > 0 && { tool_use_meta: z }) };
  for await (let fe of yTe([x], [_], B, { ...o, requireCanUseTool: !0 })) {
    if (eH(fe)) continue;
    if (fe.message) {
      if ((r.push(fe.message), u)) await Wb(r, void 0, void 0, void 0, o.storageV5);
      if (fe.message.type === "progress") {
        yield* p7(fe.message, o.session.toolProgressThrottle, o.options.refreshTools?.() ?? t);
        continue;
      }
      let me = fe.message.type === "user" ? xN(fe.message) : [];
      yield {
        ...fe.message,
        session_id: K(),
        parent_tool_use_id: null,
        ...(me.length > 0 && { tool_result_meta: me }),
      };
    }
  }
}

function Xut(e, t, r = STn) {
  let o = GS(r),
    u = new Map(),
    d = new Map(),
    _ = new Map(),
    C = new Set();
  for (let A of e) {
    if (A.type === "attachment" && A.attachment.type === "read_truncation_notice") {
      C.add(A.attachment.toolUseID);
      continue;
    }
    if (A.type === "assistant" && Array.isArray(A.message.content))
      for (let x of A.message.content) {
        if (x.type !== "tool_use") continue;
        if (ow(x.input)) continue;
        try {
          if (x.name === _t) {
            let F = zZ(x.input)?.input ?? x.input,
              U = IN(F?.offset),
              B = IN(F?.limit);
            if (
              typeof F?.file_path === "string" &&
              (U === void 0 || (typeof U === "number" && Number.isInteger(U) && U >= 0)) &&
              (B === void 0 || (typeof B === "number" && Number.isInteger(B) && B >= 1))
            )
              u.set(x.id, { filePath: gt(F.file_path, t), offset: U, limit: B });
          } else if (x.name === ar) {
            let M = x.input;
            if (typeof M?.file_path === "string" && typeof M.content === "string")
              d.set(x.id, { filePath: gt(M.file_path, t), content: M.content });
          } else if (x.name === Kt) {
            let M = x.input;
            if (typeof M?.file_path === "string") _.set(x.id, gt(M.file_path, t));
          }
        } catch (M) {
          n(`extractReadFilesFromMessages: skipping malformed ${x.name} tool_use: ${M}`);
        }
      }
  }
  for (let A of e)
    if (A.type === "user" && Array.isArray(A.message.content)) {
      for (let x of A.message.content)
        if (x.type === "tool_result" && x.tool_use_id) {
          let M = u.get(x.tool_use_id);
          if (M && x.is_error !== !0 && typeof x.content === "string" && !bjt(x.content)) {
            let W =
                A.toolUseResult?.file?.truncatedByTokenCap === !0 ||
                C.has(x.tool_use_id) ||
                x.content.startsWith("<system-reminder>" + Lue),
              pe = x.content
                .replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g, "")
                .split(`
`)
                .map(Bar)
                .join(`
`)
                .trim();
            if (A.timestamp) {
              let fe = new Date(A.timestamp).getTime(),
                me = fJ(M.filePath);
              o.set(M.filePath, {
                content: pe,
                timestamp: fe,
                offset: me ? 1 : (M.offset ?? 1),
                limit: me ? void 0 : M.limit,
                ...(W && { isPartialView: !0 }),
              });
            }
          }
          let F = d.get(x.tool_use_id);
          if (F && x.is_error !== !0 && A.timestamp) {
            let B = new Date(A.timestamp).getTime();
            o.set(F.filePath, { content: QE(F.content), timestamp: B, offset: void 0, limit: void 0 });
          }
          let U = _.get(x.tool_use_id);
          if (U && x.is_error !== !0)
            try {
              let { content: B } = jAt(U);
              o.set(U, {
                content: JE(B),
                timestamp: dU(U),
                offset: void 0,
                limit: void 0,
                contentNotInModelContext: !0,
              });
            } catch (B) {
              n(`extractReadFilesFromMessages: skipping Edit disk read for ${U}: ${l(B)}`);
            }
        }
    }
  return o;
}

function O3n(e, t) {
  let r = [],
    o = [];
  for (let u of e) {
    if (u.type !== "attachment") continue;
    let d = u.attachment;
    if (d.type === "file") {
      let _ = d.content?.type;
      if (_ !== "image" && _ !== "pdf" && _ !== "parts")
        try {
          r.push(gt(d.filename, t));
        } catch (C) {
          n(`collectRewoundFileTrackingPaths: skipping malformed file attachment: ${l(C)}`);
        }
    } else if (d.type === "nested_memory") {
      if (typeof d.path === "string") o.push(d.path);
    } else if (d.type === "relevant_memories") {
      if (Array.isArray(d.memories)) {
        for (let _ of d.memories) if (typeof _?.path === "string") r.push(_.path);
      }
    } else if (d.type === "edited_text_file")
      try {
        r.push(gt(d.filename, t));
      } catch (_) {
        n(`collectRewoundFileTrackingPaths: skipping malformed edited_text_file attachment: ${l(_)}`);
      }
  }
  return { readFilePaths: r, nestedMemoryPaths: o };
}

function YB(e) {
  mxn().add(e);
}

function MTn() {
  return xTn.of(G().host).recording;
}

function jot(e) {
  Lu().dumpPrompts.stateByAgent.delete(e);
}

function L3n() {
  Lu().dumpPrompts.stateByAgent.clear();
}

function ITn(e) {
  return;
}

function OTn(e) {
  return CTn(be(), "dump-prompts", `${e ?? K()}.jsonl`);
}

function DTn(e, t, r) {
  if (r) {
    r.storageV5
      .append(r.key, [
        {
          data:
            t +
            `
`,
        },
      ])
      .catch(() => {});
    return;
  }
  Bot.mkdir(vTn(e), { recursive: !0 })
    .then(() =>
      Bot.appendFile(
        e,
        t +
          `
`,
      ),
    )
    .catch(() => {});
}

function LTn(e, t, r, o, u) {
  try {
    return;
  } catch {
  } finally {
    r.dumpInFlight = !1;
  }
}

function Wot(e, t) {
  if (!MTn()) return (u, d) => lAt(u, d);
  let r = OTn(e),
    o = O() && t !== void 0 ? { storageV5: t, key: Te.log(e, "apiDump") } : void 0;
  return async (u, d) => {
    let _ = Lu().dumpPrompts.stateByAgent,
      C = _.get(e) ?? { initialized: !1, lastInitDataHash: "", dumpInFlight: !1 };
    if ((_.set(e, C), d?.method === "POST" && d.body && !C.dumpInFlight)) {
      C.dumpInFlight = !0;
      let A = new Date().toISOString();
      setImmediate(LTn, d.body, A, C, r, o);
    }
    return lAt(u, d);
  };
}

function ETe() {
  return process.env.CLAUDE_CODE_ENTRYPOINT === "claude-desktop";
}

function QC() {
  if (a.CLAUDE_CODE_IS_COWORK) return !0;
  return ETe();
}

function UT() {
  return Lu().promptCacheBreak;
}

function Got() {
  return a.CLAUDE_CODE_IS_COWORK || ETe();
}

function qot() {
  let e = Kr(K());
  if (e === null) return null;
  return UTn(wd(), `cache-break-state-${e}.json`);
}

function GZ(e) {
  return Object.hasOwn(RSn, e);
}

function CTe() {
  let e = UT();
  if (e.hydrationAttempted || !Got()) return;
  e.hydrationAttempted = !0;
  let t = e.previousStateBySource;
  try {
    uY(wd());
    let r = qot();
    if (r === null) return;
    let o = Atr(r, HTn);
    if (o === null) return;
    let u = jTn().safeParse(V(o));
    if (!u.success) return;
    for (let [d, _] of Object.entries(u.data)) {
      if (t.size >= Kot) break;
      if (!GZ(d)) continue;
      if (t.has(d)) continue;
      t.set(d, {
        ..._,
        pendingChanges: null,
        baselineFromDisk: !0,
        content: () => ({ model: _.model, system: [], tools: [] }),
      });
    }
  } catch {}
}

function OT() {
  if (!Got()) return;
  try {
    let e = UT(),
      t = {};
    for (let [u, d] of e.previousStateBySource) {
      if (!GZ(u)) continue;
      let { content: _, pendingChanges: C, baselineFromDisk: A, baselineMessageHashes: x, ...M } = d;
      t[u] = M;
    }
    let r = qot();
    if (r === null) return;
    let o = Object.keys(t).length === 0 ? { action: "remove" } : { action: "write", payload: b(t) };
    (e.latestQueuedPersist = o),
      (e.pendingPersist = e.pendingPersist
        .then(async () => {
          if (o.action === "remove") {
            uY(wd()), await $Tn(r, { force: !0 });
            return;
          }
          if (e.latestQueuedPersist !== o) return;
          await NTn(wd(), { recursive: !0, mode: 448 }), uY(wd()), await Wn(r, o.payload);
        })
        .catch(() => {}));
  } catch {}
}

function GTn(e) {
  return e.includes("haiku");
}

function qZ(e, t) {
  if (e === "compact") return "repl_main_thread";
  for (let r of WTn) if (e.startsWith(r)) return t || e;
  return null;
}

function zot(e) {
  return e.map((t) => {
    if (!("cache_control" in t)) return t;
    let { cache_control: r, ...o } = t;
    return o;
  });
}

function Vot(e) {
  let t = e.text;
  return typeof t === "string" ? t : void 0;
}

function vTe(e) {
  if (!e.startsWith("mcp__")) return e;
  let t = e.split("__")[1];
  if (!t) return "mcp";
  if (process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent" || Q3t.has(t)) return `mcp__${t}`;
  return "mcp";
}

function qTn(e, t) {
  let r = {};
  for (let o = 0; o < e.length; o++) r[t[o] ?? `__idx_${o}`] = sC(e[o]);
  return r;
}

function KTn(e) {
  let t = 0;
  for (let r of e) t += Vot(r)?.length ?? 0;
  return t;
}

function Yot(e) {
  try {
    let {
        system: t,
        toolSchemas: r,
        anyDeferLoading: o = !1,
        querySource: u,
        model: d,
        agentId: _,
        fastMode: C,
        globalCacheStrategy: A = "",
        betas: x = [],
        autoModeActive: M = !1,
        isUsingOverage: F = !1,
        is1hCacheTTL: U = !1,
        queryDepth: B,
        cacheDiagnosis: W = !1,
        effortValue: z,
        extraBodyParams: pe,
        getMessageHashes: fe,
        messages: me,
      } = e,
      ge = qZ(u, _);
    if (!ge) return;
    let Ce = fe(),
      Ie = zot(t).filter((Pn) => !fL(Pn)),
      Ee = zot(r),
      Pe = sC(Ie),
      Oe = sC(Ee),
      Fe = sC(t.filter((Pn) => !fL(Pn)).map((Pn) => ("cache_control" in Pn ? Pn.cache_control : null))),
      Be = r.map((Pn) => ("name" in Pn ? Pn.name : "unknown")),
      ze = () => qTn(Ee, Be),
      We = () => Ie.map((Pn) => sC(Pn)),
      Ve = () => Ie.map((Pn) => Vot(Pn)?.length ?? 0),
      Pt = KTn(Ie),
      ct = void 0,
      ut = () => ({ model: d, system: t, tools: r, messages: ct }),
      en = C ?? !1,
      nn = [...x].sort(),
      xt = z === void 0 ? "" : String(z),
      tt = pe === void 0 ? 0 : sC(pe);
    CTe();
    let lt = UT().previousStateBySource,
      mt = lt.get(ge);
    if (!mt) {
      while (lt.size >= Kot) {
        let Pn = [...lt.keys()],
          nr = Pn.find((Rr) => !GZ(Rr)) ?? Pn[0];
        if (nr === void 0) break;
        lt.delete(nr);
      }
      lt.set(ge, {
        systemHash: Pe,
        toolsHash: Oe,
        cacheControlHash: Fe,
        toolNames: Be,
        systemCharCount: Pt,
        model: d,
        fastMode: en,
        globalCacheStrategy: A,
        betas: nn,
        autoModeActive: M,
        isUsingOverage: F,
        anyDeferLoading: o,
        is1hCacheTTL: U,
        queryDepth: B,
        cacheDiagnosis: W,
        effortValue: xt,
        extraBodyHash: tt,
        callCount: 1,
        pendingChanges: null,
        prevCacheReadTokens: null,
        cacheDeletionsPending: !1,
        baselineFromDisk: !1,
        messageHashes: Ce,
        content: ut,
        perToolHashes: ze(),
        perBlockHashes: We(),
        perBlockLengths: Ve(),
      }),
        OT();
      return;
    }
    mt.callCount++;
    let Xe = Pe !== mt.systemHash,
      nt = Oe !== mt.toolsHash,
      ht = d !== mt.model,
      At = en !== mt.fastMode,
      dn = Fe !== mt.cacheControlHash,
      Lt = A !== mt.globalCacheStrategy,
      fn = nn.length !== mt.betas.length || nn.some((Pn, nr) => Pn !== mt.betas[nr]),
      Sn = M !== mt.autoModeActive,
      bn = F !== mt.isUsingOverage,
      hn = W !== mt.cacheDiagnosis,
      Ke = xt !== mt.effortValue,
      mn = tt !== mt.extraBodyHash,
      yn = o !== mt.anyDeferLoading,
      er = Qot(mt.messageHashes, Ce),
      Cn = er !== -1;
    if (Xe || nt || ht || At || dn || Lt || fn || Sn || bn || hn || Ke || mn || yn || Cn) {
      let Pn = new Set(mt.toolNames),
        nr = new Set(Be),
        Rr = new Set(mt.betas),
        Lr = new Set(nn),
        Pr = Be.filter((Zr) => !Pn.has(Zr)),
        wn = mt.toolNames.filter((Zr) => !nr.has(Zr)),
        sr = [];
      if (nt) {
        let Zr = ze();
        for (let br of Be) {
          if (!Pn.has(br)) continue;
          if (Zr[br] !== mt.perToolHashes[br]) sr.push(br);
        }
        mt.perToolHashes = Zr;
      }
      let Jn = mt.perBlockHashes.length,
        jn = Ie.length,
        Ar = [],
        Tn = [];
      if (Xe) {
        let Zr = We(),
          br = Ve();
        if (jn === Jn) {
          for (let So = 0; So < jn; So++)
            if (Zr[So] !== mt.perBlockHashes[So]) Ar.push(So), Tn.push(br[So] - mt.perBlockLengths[So]);
        }
        (mt.perBlockHashes = Zr), (mt.perBlockLengths = br);
      }
      mt.pendingChanges = {
        systemPromptChanged: Xe,
        toolSchemasChanged: nt,
        modelChanged: ht,
        fastModeChanged: At,
        cacheControlChanged: dn,
        globalCacheStrategyChanged: Lt,
        betasChanged: fn,
        autoModeChanged: Sn,
        overageChanged: bn,
        cacheDiagnosisChanged: hn,
        effortChanged: Ke,
        extraBodyChanged: mn,
        deferLoadingPresenceChanged: yn,
        messagesHistoryChanged: Cn,
        firstChangedMessageIndex: er,
        prevMessageCount: mt.messageHashes.length,
        addedToolCount: Pr.length,
        removedToolCount: wn.length,
        addedTools: Pr,
        removedTools: wn,
        changedToolSchemas: sr,
        prevBlockCount: Jn,
        newBlockCount: jn,
        changedBlockIndices: Ar,
        changedBlockLengthDeltas: Tn,
        systemCharDelta: Pt - mt.systemCharCount,
        previousModel: mt.model,
        newModel: d,
        prevGlobalCacheStrategy: mt.globalCacheStrategy,
        newGlobalCacheStrategy: A,
        addedBetas: nn.filter((Zr) => !Rr.has(Zr)),
        removedBetas: mt.betas.filter((Zr) => !Lr.has(Zr)),
        prevEffortValue: mt.effortValue,
        newEffortValue: xt,
        prevContent: mt.content,
      };
    } else mt.pendingChanges = null;
    (mt.systemHash = Pe),
      (mt.toolsHash = Oe),
      (mt.cacheControlHash = Fe),
      (mt.toolNames = Be),
      (mt.systemCharCount = Pt),
      (mt.model = d),
      (mt.fastMode = en),
      (mt.globalCacheStrategy = A),
      (mt.betas = nn),
      (mt.autoModeActive = M),
      (mt.isUsingOverage = F),
      (mt.is1hCacheTTL = U),
      (mt.queryDepth = B),
      (mt.cacheDiagnosis = W),
      (mt.effortValue = xt),
      (mt.extraBodyHash = tt),
      (mt.anyDeferLoading = o),
      (mt.baselineMessageHashes = mt.messageHashes),
      (mt.messageHashes = Ce),
      (mt.content = ut),
      OT();
  } catch (t) {
    h(t);
  }
}

function Xot({ querySource: e, agentId: t, messages: r, getMessageHashes: o }) {
  try {
    let u = qZ(e, t),
      d = u ? UT().previousStateBySource.get(u) : void 0;
    if (!d) return;
    let _ = o();
    d.baselineMessageHashes ??= d.messageHashes;
    let { baselineMessageHashes: C, content: A } = d,
      { model: x, system: M, tools: F } = A(),
      U = void 0;
    (d.messageHashes = _), (d.content = () => ({ model: x, system: M, tools: F, messages: U }));
    let B = Qot(C, _),
      W = d.pendingChanges;
    if (W) {
      let z = { ...W, messagesHistoryChanged: B !== -1, firstChangedMessageIndex: B };
      d.pendingChanges = YTn.some((pe) => z[pe]) ? z : null;
    } else if (B !== -1)
      d.pendingChanges = {
        systemPromptChanged: !1,
        toolSchemasChanged: !1,
        modelChanged: !1,
        fastModeChanged: !1,
        cacheControlChanged: !1,
        globalCacheStrategyChanged: !1,
        betasChanged: !1,
        autoModeChanged: !1,
        overageChanged: !1,
        cacheDiagnosisChanged: !1,
        effortChanged: !1,
        extraBodyChanged: !1,
        deferLoadingPresenceChanged: !1,
        messagesHistoryChanged: !0,
        firstChangedMessageIndex: B,
        prevMessageCount: C.length,
        addedToolCount: 0,
        removedToolCount: 0,
        systemCharDelta: 0,
        addedTools: [],
        removedTools: [],
        changedToolSchemas: [],
        prevBlockCount: d.perBlockHashes.length,
        newBlockCount: d.perBlockHashes.length,
        changedBlockIndices: [],
        changedBlockLengthDeltas: [],
        previousModel: x,
        newModel: x,
        prevGlobalCacheStrategy: d.globalCacheStrategy,
        newGlobalCacheStrategy: d.globalCacheStrategy,
        addedBetas: [],
        removedBetas: [],
        prevEffortValue: d.effortValue,
        newEffortValue: d.effortValue,
        prevContent: A,
      };
    OT();
  } catch (u) {
    h(u);
  }
}

function Qot(e, t) {
  return e.findIndex((r, o) => r !== IX && t[o] !== r);
}

function XTn(e, t) {
  let r = [];
  if (e.modelChanged) r.push(`model changed (${t ? "hydrated baseline" : e.previousModel} \u2192 ${e.newModel})`);
  if (e.systemPromptChanged) {
    let o = e.systemCharDelta,
      u = o === 0 ? "" : o > 0 ? ` (+${o} chars)` : ` (${o} chars)`;
    r.push(`system prompt changed${u}`);
  }
  if (e.toolSchemasChanged) {
    let o =
      e.addedToolCount > 0 || e.removedToolCount > 0
        ? ` (+${e.addedToolCount}/-${e.removedToolCount} tools)`
        : " (tool prompt/schema changed, same tool set)";
    r.push(`tools changed${o}`);
  }
  if (e.fastModeChanged) r.push("fast mode toggled");
  if (e.globalCacheStrategyChanged)
    r.push(
      `global cache strategy changed (${e.prevGlobalCacheStrategy || "none"} \u2192 ${e.newGlobalCacheStrategy || "none"})`,
    );
  if (e.cacheControlChanged && !e.globalCacheStrategyChanged && !e.systemPromptChanged)
    r.push("cache_control changed (scope or TTL)");
  if (e.betasChanged) {
    let o = e.addedBetas.length ? `+${e.addedBetas.join(",")}` : "",
      u = e.removedBetas.length ? `-${t ? "hydrated baseline" : e.removedBetas.join(",")}` : "",
      d = [o, u].filter(Boolean).join(" ");
    r.push(`betas changed${d ? ` (${d})` : ""}`);
  }
  if (e.autoModeChanged) r.push("auto mode toggled");
  if (e.overageChanged) r.push("overage state changed (TTL flip expected)");
  if (e.cacheDiagnosisChanged) r.push("cache diagnosis toggled");
  if (e.effortChanged)
    r.push(
      `effort changed (${t ? "hydrated baseline" : e.prevEffortValue || "default"} \u2192 ${e.newEffortValue || "default"})`,
    );
  if (e.extraBodyChanged) r.push("extra body params changed");
  if (e.deferLoadingPresenceChanged) r.push("defer_loading presence flipped (deferred-tool hint section, inc-5316)");
  if (e.messagesHistoryChanged)
    r.push(`message history mutated at index ${e.firstChangedMessageIndex}/${e.prevMessageCount}`);
  return r;
}

async function Jot(e, t, r, o, u, d, _) {
  let C = qZ(e, u);
  if (!C) return;
  let A = UT().previousStateBySource.get(C);
  if (!A) return;
  if (GTn(A.model)) return;
  try {
    let x = A.prevCacheReadTokens;
    A.prevCacheReadTokens = t;
    let M = A.baselineFromDisk;
    A.baselineFromDisk = !1;
    let F = o.findLast((Ee) => Ee.type === "assistant"),
      U = F ? Date.now() - new Date(F.timestamp).getTime() : null;
    if (x === null) {
      A.pendingChanges = null;
      return;
    }
    let B = A.pendingChanges;
    if (A.cacheDeletionsPending) {
      (A.cacheDeletionsPending = !1),
        n(`[PROMPT CACHE] cache deletion applied, cache read: ${x} \u2192 ${t} (expected drop)`),
        (A.pendingChanges = null);
      return;
    }
    let W = x - t;
    if (t >= x * 0.95 || W < zTn) {
      A.pendingChanges = null;
      return;
    }
    let z = B ? XTn(B, M) : [],
      pe = U !== null && U > HE,
      fe = U !== null && U > vG,
      me;
    if (z.length > 0) me = z.join(", ");
    else if (fe) me = "possible 1h TTL expiry (prompt unchanged)";
    else if (pe) me = "possible 5min TTL expiry (prompt unchanged)";
    else if (U !== null) me = "likely server-side (prompt unchanged, <5min gap)";
    else me = "unknown cause";
    s("tengu_prompt_cache_break", {
      systemPromptChanged: B?.systemPromptChanged ?? !1,
      toolSchemasChanged: B?.toolSchemasChanged ?? !1,
      modelChanged: B?.modelChanged ?? !1,
      fastModeChanged: B?.fastModeChanged ?? !1,
      cacheControlChanged: B?.cacheControlChanged ?? !1,
      globalCacheStrategyChanged: B?.globalCacheStrategyChanged ?? !1,
      betasChanged: B?.betasChanged ?? !1,
      autoModeChanged: B?.autoModeChanged ?? !1,
      overageChanged: B?.overageChanged ?? !1,
      cacheDiagnosisChanged: B?.cacheDiagnosisChanged ?? !1,
      effortChanged: B?.effortChanged ?? !1,
      extraBodyChanged: B?.extraBodyChanged ?? !1,
      deferLoadingPresenceChanged: B?.deferLoadingPresenceChanged ?? !1,
      messagesHistoryChanged: B?.messagesHistoryChanged ?? !1,
      firstChangedMessageIndex: B?.firstChangedMessageIndex ?? -1,
      addedToolCount: B?.addedToolCount ?? 0,
      removedToolCount: B?.removedToolCount ?? 0,
      systemCharDelta: B?.systemCharDelta ?? 0,
      prevBlockCount: B?.prevBlockCount ?? 0,
      newBlockCount: B?.newBlockCount ?? 0,
      changedBlockIndices: $5t(B?.changedBlockIndices ?? []),
      changedBlockLengthDeltas: $5t(B?.changedBlockLengthDeltas ?? []),
      addedTools: (B?.addedTools ?? []).map(vTe).join(","),
      removedTools: (M ? [] : (B?.removedTools ?? [])).map(vTe).join(","),
      changedToolSchemas: (B?.changedToolSchemas ?? []).map(vTe).join(","),
      addedBetas: (B?.addedBetas ?? []).join(","),
      removedBetas: (M ? [] : (B?.removedBetas ?? [])).join(","),
      prevGlobalCacheStrategy: B?.prevGlobalCacheStrategy ?? "",
      newGlobalCacheStrategy: B?.newGlobalCacheStrategy ?? "",
      systemHash: A.systemHash,
      toolsHash: A.toolsHash,
      is1hCacheTTL: A.is1hCacheTTL,
      queryDepth: A.queryDepth,
      querySource: af(e),
      model: A.model,
      globalCacheStrategy: A.globalCacheStrategy,
      callNumber: A.callCount,
      prevCacheReadTokens: x,
      cacheReadTokens: t,
      cacheCreationTokens: r,
      timeSinceLastAssistantMsg: U ?? -1,
      lastAssistantMsgOver5minAgo: pe,
      lastAssistantMsgOver1hAgo: fe,
      isCowork: a.CLAUDE_CODE_IS_COWORK,
      isDesktop: ETe(),
      baselineFromDisk: M,
      requestId: ve(d) ?? w(""),
      previousMessageId: ve(_) ?? w(""),
    });
    let ge,
      Ce = ge ? `, diff: ${ge}` : "",
      Ie = `[PROMPT CACHE BREAK] ${me} [source=${e}, call #${A.callCount}, cache read: ${x} \u2192 ${t}, creation: ${r}${Ce}]`;
    n(Ie, { level: "warn" }), (A.pendingChanges = null);
  } catch (x) {
    h(x);
  } finally {
    OT();
  }
}

function Zot(e, t) {
  try {
    s("tengu_prompt_cache_diagnosis_received", {
      diagnosisType: e.type,
      tokensMissed: e.cache_missed_input_tokens ?? -1,
      requestId: ve(t.requestId) ?? w(""),
      previousMessageId: ve(t.previousMessageId) ?? w(""),
      model: t.model,
      isCowork: a.CLAUDE_CODE_IS_COWORK,
      is1hCacheTTL: t.is1hCacheTTL,
      querySource: af(t.querySource),
      queryDepth: t.queryDepth,
    });
  } catch (r) {
    h(r);
  }
}

function est(e, t) {
  if (b2e(e, t)) t3(Ab);
  if (!QC()) return;
  CTe();
  let r = qZ(e, t),
    o = r ? UT().previousStateBySource.get(r) : void 0;
  if (o) (o.cacheDeletionsPending = !0), OT();
}

function D1(e) {
  if (!QC()) return;
  CTe();
  let t = UT().previousStateBySource;
  if (e) {
    let o = t.get(e);
    if (o) (o.prevCacheReadTokens = null), OT();
    return;
  }
  let r = !1;
  for (let [o, u] of t) if (GZ(o)) (u.prevCacheReadTokens = null), (r = !0);
  if (r) OT();
}

function tst(e) {
  if (UT().previousStateBySource.delete(e)) OT();
}

function M3n(e) {
  let t = UT(),
    r = t.previousStateBySource.size === 0 && !t.hydrationAttempted;
  if (e?.size) {
    for (let o of [...t.previousStateBySource.keys()]) if (!e.has(o)) t.previousStateBySource.delete(o);
  } else t.previousStateBySource.clear(), (t.hydrationAttempted = !1);
  if (!r) OT();
}

function N3n(e, t) {
  if (e === void 0) return t;
  return e === "auto" ? void 0 : e;
}

function q1t(e) {
  return e;
}

function KZ(e) {
  let t = {
      toolRequests: new Map(),
      toolResults: new Map(),
      humanMessages: 0,
      assistantMessages: 0,
      localCommandOutputs: 0,
      other: 0,
      attachments: new Map(),
      duplicateFileReads: new Map(),
      total: 0,
    },
    r = new Map(),
    o = new Map(),
    u = new Map();
  return (
    e.forEach((_) => {
      if (_.type === "attachment") {
        let C = _.attachment.type || "unknown";
        t.attachments.set(C, (t.attachments.get(C) || 0) + 1);
      }
    }),
    RE(e).forEach((_) => {
      let { content: C } = _.message;
      if (typeof C === "string") {
        let A = Fc(C);
        if (
          ((t.total += A),
          _.type === "user" && (C.includes("local-command-stdout") || C.includes("local-command-stderr")))
        )
          t.localCommandOutputs += A;
        else t[_.type === "user" ? "humanMessages" : "assistantMessages"] += A;
      } else C.forEach((A) => QTn(A, _, t, r, o, u));
    }),
    u.forEach((_, C) => {
      if (_.count > 1) {
        let x = Math.floor(_.totalTokens / _.count) * (_.count - 1);
        t.duplicateFileReads.set(C, { count: _.count, tokens: x });
      }
    }),
    t
  );
}

function QTn(e, t, r, o, u, d) {
  let _ = Fc(b(e));
  switch (((r.total += _), e.type)) {
    case "text":
      if (
        t.type === "user" &&
        "text" in e &&
        (e.text.includes("local-command-stdout") || e.text.includes("local-command-stderr"))
      )
        r.localCommandOutputs += _;
      else r[t.type === "user" ? "humanMessages" : "assistantMessages"] += _;
      break;
    case "tool_use": {
      if ("name" in e && "id" in e) {
        let C = e.name || "unknown";
        if (
          (nst(r.toolRequests, C, _),
          o.set(e.id, C),
          C === "Read" && "input" in e && e.input && typeof e.input === "object" && "file_path" in e.input)
        ) {
          let A = String(e.input.file_path);
          u.set(e.id, A);
        }
      }
      break;
    }
    case "tool_result": {
      if ("tool_use_id" in e) {
        let C = o.get(e.tool_use_id) || "unknown";
        if ((nst(r.toolResults, C, _), C === "Read")) {
          let A = u.get(e.tool_use_id);
          if (A) {
            let x = d.get(A) || { count: 0, totalTokens: 0 };
            d.set(A, { count: x.count + 1, totalTokens: x.totalTokens + _ });
          }
        }
      }
      break;
    }
    case "image":
    case "server_tool_use":
    case "web_search_tool_result":
    case "search_result":
    case "document":
    case "thinking":
    case "redacted_thinking":
    case "code_execution_tool_result":
    case "mcp_tool_use":
    case "mcp_tool_result":
    case "container_upload":
    case "web_fetch_tool_result":
    case "bash_code_execution_tool_result":
    case "text_editor_code_execution_tool_result":
    case "tool_search_tool_result":
    case "advisor_tool_result":
    case "compaction":
    case "fallback":
    case "mid_conv_system":
      r.other += _;
      break;
  }
}

function nst(e, t, r) {
  e.set(t, (e.get(t) || 0) + r);
}

function VZ(e) {
  let t = {
    total_tokens: e.total,
    human_message_tokens: e.humanMessages,
    assistant_message_tokens: e.assistantMessages,
    local_command_output_tokens: e.localCommandOutputs,
    other_tokens: e.other,
  };
  e.attachments.forEach((o, u) => {
    t[`attachment_${u}_count`] = o;
  }),
    e.toolRequests.forEach((o, u) => {
      t[`tool_request_${u}_tokens`] = o;
    }),
    e.toolResults.forEach((o, u) => {
      t[`tool_result_${u}_tokens`] = o;
    });
  let r = [...e.duplicateFileReads.values()].reduce((o, u) => o + u.tokens, 0);
  if (((t.duplicate_read_tokens = r), (t.duplicate_read_file_count = e.duplicateFileReads.size), e.total > 0)) {
    (t.human_message_percent = Math.round((e.humanMessages / e.total) * 100)),
      (t.assistant_message_percent = Math.round((e.assistantMessages / e.total) * 100)),
      (t.local_command_output_percent = Math.round((e.localCommandOutputs / e.total) * 100)),
      (t.duplicate_read_percent = Math.round((r / e.total) * 100));
    let o = [...e.toolRequests.values()].reduce((d, _) => d + _, 0),
      u = [...e.toolResults.values()].reduce((d, _) => d + _, 0);
    (t.tool_request_percent = Math.round((o / e.total) * 100)),
      (t.tool_result_percent = Math.round((u / e.total) * 100)),
      e.toolRequests.forEach((d, _) => {
        t[`tool_request_${_}_percent`] = Math.round((d / e.total) * 100);
      }),
      e.toolResults.forEach((d, _) => {
        t[`tool_result_${_}_percent`] = Math.round((d / e.total) * 100);
      });
  }
  return t;
}

async function JTn() {
  return null;
}

async function ZTn() {
  return null;
}

function sst() {
  return evn.of(G().host);
}

function tvn() {
  return sst().ociContainerId();
}

async function s4e(e, t) {
  return;
}

function YZ() {
  return nvn.of(G().host);
}

function a4e() {
  YZ().setState(() => !0);
}

function ist() {
  YZ().setState(() => !1);
}

function F3n() {
  return YZ().getState();
}

function $3n(e) {
  return YZ().subscribe(e);
}

function ATe(e) {
  if (e?.reason !== "error" || !e.detail) return;
  return `${_k} \xB7 automatic compaction failed: ` + ir(e.detail, rvn, !0);
}

function ast(e) {
  return e?.type === "assistant" && xb(e);
}

function XZ(e) {
  return e?.type === "assistant" && lX(e);
}

function RTe(e) {
  return (
    !e.hasAttempted &&
    !iL(e.querySource) &&
    (e.hasPrecomputedSwap === !0 || !ZE(e.querySource)) &&
    Qf() &&
    LB() &&
    !e.aborted
  );
}

async function QZ(e) {
  let {
      hasAttempted: t,
      querySource: r,
      aborted: o,
      messages: u,
      cacheSafeParams: d,
      precomputed: _,
      precomputeOutcome: C,
      initialTokenGap: A,
      thresholdSource: x,
      spinnerHintText: M,
    } = e,
    F = C?.kind,
    U = C?.kind === "failed" ? C.failure.cause : void 0;
  if (!RTe({ hasAttempted: t, querySource: r, aborted: o, hasPrecomputedSwap: _ !== void 0 }))
    return { result: null, hookBlocked: !1 };
  let { toolUseContext: W } = d,
    z = Gy(W.options.mainLoopModel, tu(W));
  s("tengu_reactive_compact_triggered", {
    ...(z && { effort_level: c(z) }),
    querySource: af(r),
    precomputed: _ !== void 0,
    precomputedKind: ke(F),
    precomputedFailureCause: ke(U),
    thresholdSource: ke(x),
  }),
    s4e(he(W), "summary");
  let pe = e.userWaitStartedAt ?? performance.now(),
    fe = vP(),
    { hookResult: me, summarize: ge } = _
      ? {
          hookResult: { userDisplayMessage: _.preCompactHookDisplay, blockedBy: void 0 },
          summarize: () => (
            W.onCompactEvent?.({ type: "sdk_status", status: "compacting" }),
            G1t({
              compactResult: _.compactResult,
              messagesToPreserve: [..._.compactResult.messagesToPreserve, ..._.messagesSince],
              preCompactMessages: u,
              preCompactTokens: Ih(u),
              startTime: pe,
              cacheSafeParams: d,
              querySource: r,
              trigger: "auto",
              thresholdSource: x,
              precomputed: !0,
              precomputeTelemetry: {
                statusAtPTL: _.statusAtPTL,
                leadMs: _.leadMs,
                totalMs: _.totalMs,
                borrowed: _.borrowed,
                messagesSinceTokens: th(_.messagesSince),
              },
              mainChainTailAtStart: fe,
            })
          ),
        }
      : await (async () => {
          W.onCompactEvent?.({ type: "compact_progress", event: { type: "hooks_start", hookType: "pre_compact" } }),
            W.onCompactEvent?.({ type: "sdk_status", status: "compacting" });
          let Oe = await nz(
            W.session,
            { trigger: "auto", customInstructions: null },
            W,
            W.abortController.signal,
          ).catch((Fe) => (h(Fe), {}));
          return {
            hookResult: Oe,
            summarize: () =>
              han(u, d, {
                customInstructions: Oe.newCustomInstructions,
                userWaitStartedAt: pe,
                querySource: r,
                initialTokenGap: A,
                precomputedKind: F,
                precomputedFailureCause: U,
                thresholdSource: x,
              }),
          };
        })();
  if (me.blockedBy)
    return (
      n(`Reactive compact blocked by PreCompact hook: ${me.blockedBy}`),
      W.onCompactEvent?.({ type: "compact_progress", event: { type: "compact_end" } }),
      W.onCompactEvent?.({ type: "sdk_status", status: null }),
      { result: null, hookBlocked: !0 }
    );
  W.onCompactEvent?.({ type: "compact_progress", event: { type: "compact_start", hintText: M } });
  let Ce = await ge().catch((Oe) => {
    let Fe = l(Oe);
    if (vD(Fe)) n(`Reactive compact API call failed: ${Fe}`, { level: "error" });
    else h(Oe);
    return { ok: !1, reason: "error", detail: Fe };
  });
  W.onCompactEvent?.({ type: "compact_progress", event: { type: "compact_end" } });
  let Ie = Ih(u);
  if (!Ce.ok) {
    let Oe = Ce.reason === "error" ? (Ce.detail ?? Ce.reason) : Ce.reason;
    return (
      rue({ trigger: "auto", success: !1, durationMs: performance.now() - pe, preTokens: Ie, error: Oe }),
      W.onCompactEvent?.({ type: "sdk_status", status: null, metadata: { compactResult: "failed", compactError: Oe } }),
      { result: null, hookBlocked: !1, failure: { reason: Ce.reason, detail: Ce.detail } }
    );
  }
  let Ee = Ce.result.boundaryMarker;
  if (
    (rue({
      trigger: "auto",
      success: !0,
      durationMs: performance.now() - pe,
      preTokens: Ie,
      postTokens: Ou(Ee) ? Ee.compactMetadata.postTokens : void 0,
    }),
    W.onCompactEvent?.({ type: "sdk_status", status: null, metadata: { compactResult: "success" } }),
    YG(W.session, r, W.setAppState, W.agentId, d.stickyBetas, W.agentContext, W.storageV5),
    MEe(r) && !ZC(r, W.agentContext))
  )
    a4e();
  let Pe =
    [me.userDisplayMessage, Ce.result.userDisplayMessage].filter(Boolean).join(`
`) || void 0;
  return { result: { ...Ce.result, userDisplayMessage: Pe }, hookBlocked: !1 };
}

async function han(e, t, r) {
  let o = Ih(e),
    u = r?.userWaitStartedAt ?? performance.now(),
    d = r?.querySource,
    _ = r?.trigger ?? "auto",
    C = vP(),
    A = await JZ(e, t, { customInstructions: r?.customInstructions, initialTokenGap: r?.initialTokenGap });
  if (!A.ok) {
    let x = Gy(t.toolUseContext.options.mainLoopModel, tu(t.toolUseContext)),
      M = A.reason === "aborted" ? zLe(t.toolUseContext.abortController.signal.reason) : void 0;
    if (
      (s("tengu_reactive_compact_failed", {
        ...(x && { effort_level: c(x) }),
        querySource: af(d),
        reason: c(A.reason),
        abortKind: ke(M),
        detail: A.isDlpDenied ? Sue("dlp_request_denied", A.status) : A.detail ? m$(A.detail).slice(0, 80) : void 0,
        trigger: c(_),
        preCompactTokens: o,
        attempts: A.attempts,
        totalGroups: A.totalGroups,
        durationMs: Math.round(performance.now() - u),
        precomputedKind: ke(r?.precomputedKind),
        precomputedFailureCause: r?.precomputedFailureCause,
        thresholdSource: ke(r?.thresholdSource),
        manualPrecomputeReuse: ke(r?.manualPrecomputeReuse),
      }),
      M !== void 0)
    )
      if (w_n(M)) g("compact_reactive", "compact_reactive_aborted");
      else p("compact_reactive", `compact_reactive_aborted_${M}`);
    else p("compact_reactive", `compact_reactive_${A.reason}`);
    return { ok: !1, reason: A.reason, detail: A.detail };
  }
  return G1t({
    compactResult: A.result,
    messagesToPreserve: A.result.messagesToPreserve,
    preCompactMessages: e,
    preCompactTokens: o,
    startTime: u,
    cacheSafeParams: t,
    querySource: d,
    trigger: _,
    thresholdSource: r?.thresholdSource,
    precomputed: !1,
    manualPrecomputeReuse: r?.manualPrecomputeReuse,
    mainChainTailAtStart: C,
  });
}

async function G1t(e) {
  let {
      compactResult: t,
      preCompactMessages: r,
      startTime: o,
      cacheSafeParams: u,
      querySource: d,
      trigger: _,
      thresholdSource: C,
      precomputed: A,
      manualPrecomputeReuse: x,
      precomputeTelemetry: M,
      mainChainTailAtStart: F,
    } = e,
    { toolUseContext: U } = u,
    B = MEe(d),
    W = e.preCompactTokens ?? Ih(r),
    z = $yt(U.readFileState);
  if ((U.readFileState.clear(), U.loadedNestedMemoryPaths))
    for (let Ve of Object.keys(U.loadedNestedMemoryPaths)) delete U.loadedNestedMemoryPaths[Ve];
  if ((MB(U.memorySelector), D1(U.agentId), B && !ZC(d, U.agentContext)))
    await Vpt(U.storageV5), yQe(th([...t.summaryMessages, ...e.messagesToPreserve]));
  let pe = r.at(-1)?.uuid,
    fe = L1(_, W, pe);
  if (((fe.compactMetadata.durationMs = Math.round(performance.now() - o)), A)) fe.compactMetadata.precomputed = !0;
  let me = L7(r);
  if (me.size > 0) fe.compactMetadata.preCompactDiscoveredTools = [...me].sort();
  let ge = e.messagesToPreserve.map(Nle),
    Ce = await ZZ(z, U, ge, "reactive_compact", r, JC(d, U.agentContext, U.agentId)).catch((Ve) => ivn(Ve, U, r));
  U.onCompactEvent?.({ type: "compact_progress", event: { type: "hooks_start", hookType: "post_compact" } });
  let Ie = await OPe(U.session, { trigger: _, compactSummary: t.summaryText }, U, U.abortController.signal),
    Ee = xTe(fe, t.summaryMessages.at(-1).uuid, ge, r),
    Pe = {
      boundaryMarker: Ee,
      summaryMessages: t.summaryMessages,
      messagesToKeep: ge,
      attachments: Ce.attachments,
      hookResults: Ce.hookResults,
      userDisplayMessage: Ie.userDisplayMessage,
      preCompactTokenCount: W,
    },
    Oe = th(Jee(Pe));
  if (((Ee.compactMetadata.postTokens = Oe), Pj(Ee, r), B && !ZC(d, U.agentContext))) iie(Oe);
  let Fe = (() => {
      try {
        return VZ(KZ(r));
      } catch (Ve) {
        return h(Ve), {};
      }
    })(),
    Be = t.totalUsage,
    ze = Be.input_tokens + Be.cache_creation_input_tokens + Be.cache_read_input_tokens,
    We = Gy(U.options.mainLoopModel, tu(U));
  if ((y("compact_reactive"), B)) YB("compact");
  if (
    (s("tengu_reactive_compact_succeeded", {
      ...(We && { effort_level: c(We) }),
      querySource: af(d),
      attempts: t.attempt,
      groupsPreserved: t.groupsPreserved,
      totalGroups: t.totalGroups,
      preservedUuidCount: Ee.compactMetadata.preservedMessages?.uuids.length ?? 0,
      preservedMessageCount: ge.length,
      forkAssistantMessageCount: t.forkAssistantMessageCount,
      trigger: c(_),
      thresholdSource: ke(C),
      preCompactTokens: W,
      postCompactTokens: Oe,
      restoredAttachmentCount: Ce.attachments.length + Ce.hookResults.length,
      durationMs: Math.round(performance.now() - o),
      userWaitMs: Math.round(performance.now() - o),
      precomputed: A,
      manualPrecomputeReuse: ke(x),
      precomputeBorrowed: M?.borrowed,
      precomputeStatusAtPTL: ke(M?.statusAtPTL),
      precomputeLeadMs: M ? Math.round(M.leadMs) : void 0,
      precomputeTotalMs: M ? Math.round(M.totalMs) : void 0,
      messagesSincePrecompute: A ? ge.length - t.messagesToPreserve.length : void 0,
      messagesSinceTokens: M?.messagesSinceTokens,
      compactionInputTokens: Be.input_tokens,
      compactionOutputTokens: Be.output_tokens,
      compactionCacheReadTokens: Be.cache_read_input_tokens,
      compactionCacheCreationTokens: Be.cache_creation_input_tokens,
      compactionTotalTokens: ze + Be.output_tokens,
      cacheHitRate: ze > 0 ? Be.cache_read_input_tokens / ze : 0,
      ...Fe,
    }),
    JC(d, U.agentContext, U.agentId))
  )
    SCt(_ === "manual" ? "manual" : C !== void 0 ? "auto" : "reactive"), NU(F);
  return { ok: !0, result: Pe };
}

async function ivn(e, t, r) {
  h(e);
  let o = await ITe(t, r).catch((u) => (h(u), null));
  return { attachments: o ? [o] : [], hookResults: [] };
}

function Nle(e) {
  if (e.type !== "assistant") return e;
  return {
    ...e,
    message: {
      ...e.message,
      usage: {
        ...e.message.usage,
        input_tokens: 0,
        output_tokens: 0,
        cache_creation_input_tokens: 0,
        cache_read_input_tokens: 0,
      },
    },
  };
}

function cvn(e, t, r) {
  let o = t.compactMetadata.preservedMessages;
  if (!o) return null;
  let u = (o.allUuids ?? o.uuids)
    .map((d) => e.find((_) => _.uuid === d) ?? r?.find((_) => _.uuid === d))
    .filter((d) => d !== void 0)
    .map(Nle);
  return u.length > 0 ? { preserved: u, anchorUuid: o.anchorUuid } : null;
}

function Nee(e, t, r, o) {
  if (Ou(t)) {
    let u = cvn(e, t, o);
    if (u === null) return null;
    let d = new Set(u.preserved.map((C) => C.uuid)),
      _ = e.filter((C) => !d.has(C.uuid));
    if (((e.length = 0), e.push(..._), u.anchorUuid === t.uuid)) return e.push(...u.preserved), null;
    return u;
  }
  if (r?.anchorUuid === t.uuid) return e.push(...r.preserved), null;
  return r;
}

function U3n(e, t) {
  let r = e.messagesToKeep.map(Nle),
    o = t === "up_to" ? [...e.summaryMessages, ...r] : [...r, ...e.summaryMessages];
  return [e.boundaryMarker, ...o, ...e.attachments, ...e.hookResults];
}

async function lst(e, t, r, o, u) {
  try {
    n(`Loading MCP servers from MCPB: ${t}`);
    let d = e.repository,
      _ = await act(
        t,
        e.path,
        d,
        (x) => {
          n(`MCPB [${e.name}]: ${x}`);
        },
        void 0,
        void 0,
        o,
        u,
      );
    if ("status" in _ && _.status === "needs-config")
      return (
        n(
          `MCPB ${t} requires user configuration. ` +
            `User can configure via: /plugin \u2192 Manage plugins \u2192 ${e.name} \u2192 Configure`,
        ),
        null
      );
    let C = _,
      A = C.manifest.name;
    return n(`Loaded MCP server "${A}" from MCPB (extracted to ${C.extractedPath})`), { [A]: C.mcpConfig };
  } catch (d) {
    let _ = l(d);
    n(`Failed to load MCPB ${t}: ${_}`, { level: "error" });
    let C = e.repository;
    if (t.startsWith("http") && (_.includes("download") || _.includes("network")))
      r.push({ type: "mcpb-download-failed", source: C, plugin: e.name, url: t, reason: _ });
    else if (_.includes("manifest") || _.includes("user configuration"))
      r.push({ type: "mcpb-invalid-manifest", source: C, plugin: e.name, mcpbPath: t, validationError: _ });
    else r.push({ type: "mcpb-extract-failed", source: C, plugin: e.name, mcpbPath: t, reason: _ });
    return null;
  }
}

function dvn(e) {
  let t = a.CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS_EXCEPT;
  if (!t) return !1;
  let r = !LM(e);
  return t.split(",").some((o) => {
    let u = o.trim();
    if (!u) return !1;
    return u.includes("@") ? Vy(u, e.repository) : r && Vy(u, e.name);
  });
}

async function DL(e, t = [], r, o, { readOnlyListing: u = !1 } = {}) {
  if (e.isBuiltin) return;
  if (a.CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS) {
    if (!dvn(e)) {
      n(`Skipping plugin MCP server discovery for "${e.name}" (CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS is set)`);
      return;
    }
    n(
      `Loading MCP servers for "${e.name}" despite CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS (exempted via CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS_EXCEPT)`,
    );
  }
  if (e.skipMcpDiscovery) return {};
  let d = {},
    _ = LM(e),
    C = u && Dne(e.source),
    A = 0,
    x = (F) => {
      if (C) return A++, !0;
      if (!_) return !1;
      if (PL(F))
        return (
          n(
            `Skipping MCPB source "${F}" for directory-loaded plugin "${e.name}": ` +
              "not resolved without a pre-approval download here \u2014 declare MCP servers inline or via a local in-dir .mcp.json.",
            { level: "warn" },
          ),
          !0
        );
      if (g4(F) || F.split(/[/\\]/).some((U) => /^\.\. [ .]*$/.test(U)))
        return (
          n(
            `Skipping out-of-directory MCP source "${F}" for directory-loaded plugin "${e.name}": it may only reference files inside the plugin directory here.`,
            { level: "warn" },
          ),
          !0
        );
      return !1;
    },
    M = C ? null : await DTe(e, ".mcp.json", r, { confine: _ });
  if (M) d = { ...d, ...M };
  if (e.manifest.mcpServers) {
    let F = e.manifest.mcpServers;
    if (typeof F === "string")
      if (x(F));
      else if (PL(F)) {
        let U = await lst(e, F, t, r, o);
        if (U) d = { ...d, ...U };
      } else {
        let U = await DTe(e, F, r, { confine: _ });
        if (U) d = { ...d, ...U };
      }
    else if (Array.isArray(F)) {
      let U = await Promise.all(
        F.map(async (B) => {
          try {
            if (typeof B === "string") {
              if (x(B)) return null;
              if (PL(B)) return await lst(e, B, t, r, o);
              return await DTe(e, B, r, { confine: _ });
            }
            return B;
          } catch (W) {
            return n(`Failed to load MCP servers from spec for plugin ${e.name}: ${W}`, { level: "error" }), null;
          }
        }),
      );
      for (let B of U) if (B) d = { ...d, ...B };
    } else d = { ...d, ...F };
  }
  if (A > 0)
    n(
      `Read-only listing: omitted ${A} file / bundle MCP server source(s) of directory-loaded plugin "${e.name}" (inline declarations only; a session load resolves them).`,
    );
  return Object.keys(d).length > 0 ? d : void 0;
}

async function DTe(e, t, r, { confine: o = !1 } = {}) {
  let u = le(),
    d = uvn(e.path, t);
  if (o) {
    let A = await Bxe(e, t);
    if (A === null) return null;
    d = A;
  }
  let _,
    C = O() && r !== void 0 ? qze(d, XF()) : null;
  if (r !== void 0 && C !== null) {
    let A = await r.read([C]);
    if (!A.ok) return n(`Failed to load MCP servers from ${d}: ${Ge(A.error)}`, { level: "error" }), null;
    let x = A.value.items[0];
    if (!x?.found) return null;
    _ = Buffer.from(x.value).toString("utf-8");
  } else
    try {
      _ = await u.readFile(d, { encoding: "utf-8" });
    } catch (A) {
      if (X(A)) return null;
      return n(`Failed to load MCP servers from ${d}: ${A}`, { level: "error" }), null;
    }
  try {
    let A = V(_),
      x = A.mcpServers || A,
      M = {};
    for (let [F, U] of Object.entries(x)) {
      let B = KY().safeParse(U);
      if (B.success) M[F] = B.data;
      else n(`Invalid MCP server config for ${F} in ${d}: ${B.error.message}`, { level: "error" });
    }
    return M;
  } catch (A) {
    return n(`Failed to load MCP servers from ${d}: ${A}`, { level: "error" }), null;
  }
}

async function cNt(e, t) {
  let r = e.manifest.channels;
  if (!r || r.length === 0) return [];
  let o = e.repository,
    u = [];
  for (let d of r) {
    if (!d.userConfig || Object.keys(d.userConfig).length === 0) continue;
    let _ = (await aye(o, d.server, t)) ?? {};
    if (!uee(_, d.userConfig).valid)
      u.push({ server: d.server, displayName: Ope(d.displayName) ?? d.server, configSchema: d.userConfig });
  }
  return u;
}

function $in(e, t, r, o) {
  let u = {};
  for (let [d, _] of Object.entries(e)) {
    let C = `plugin:${t}:${d}`,
      A = { ..._, scope: "dynamic", pluginSource: r, pluginPath: o };
    u[C] = A;
  }
  return u;
}

async function mvn(e, t, r) {
  let o = e.manifest.userConfig,
    d = e.manifest.channels?.find((A) => A.server === t)?.userConfig;
  if (!o && !d) return;
  let _ = o ? await hv(Xw(e), r) : void 0,
    C = d ? ((await aye(e.repository, t, r)) ?? void 0) : void 0;
  return XU({ ..._, ...C }, { ...o, ...d });
}

function yvn(e, t, r, o, u, d) {
  let _ = [],
    C,
    A,
    x = [],
    M = (B) => {
      let W = bG(B, t);
      if (r) W = OR(W, r);
      let { expanded: z, missingVars: pe } = iD(W);
      return _.push(...pe), z;
    },
    F;
  switch (e.type) {
    case void 0:
    case "stdio": {
      let B = { ...e };
      if (B.command) B.command = M(B.command);
      if (B.args) B.args = B.args.map((z) => M(z));
      let W = { CLAUDE_PLUGIN_ROOT: t.path, CLAUDE_PLUGIN_DATA: pde(t.source), ...(B.env || {}) };
      for (let [z, pe] of Object.entries(W)) if (!hvn.has(z)) W[z] = M(pe);
      (B.env = W), (F = B);
      break;
    }
    case "sse":
    case "http":
    case "ws": {
      let B = { ...e };
      A = B.url;
      let W = _.length;
      if (B.url) B.url = M(B.url);
      if (((x = _.slice(W)), B.headers)) {
        let z = {};
        for (let [pe, fe] of Object.entries(B.headers)) z[pe] = M(fe);
        B.headers = z;
      }
      if (B.headersHelper)
        if (r && X9e(B.headersHelper, r)) {
          if (
            ((C = `headersHelper for MCP server '${d ?? "<unnamed>"}' references \${user_config.*}. The substituted value would be passed to a shell; read the value inside the helper script instead (e.g. from an env var set in the server's "env" block).`),
            o && u && d)
          )
            o.push({ type: "mcp-config-invalid", source: t.source, plugin: u, serverName: d, validationError: C });
        } else {
          let z = bG(B.headersHelper, t),
            { expanded: pe, missingVars: fe } = iD(z);
          _.push(...fe), (B.headersHelper = pe);
        }
      F = B;
      break;
    }
    case "sse-ide":
    case "ws-ide":
    case "sdk":
    case "claudeai-proxy":
      F = e;
      break;
  }
  if (o && _.length > 0) {
    let W = te(_).join(", ");
    if ((n(`Missing environment variables in plugin MCP config: ${W}`, { level: "warn" }), u && d))
      o.push({
        type: "mcp-config-invalid",
        source: t.source,
        plugin: u,
        serverName: d,
        validationError: `Missing environment variables: ${W}`,
      });
  }
  let U;
  if ((F.type === "sse" || F.type === "http" || F.type === "ws") && "url" in F) {
    let B = !1;
    try {
      new URL(F.url), (B = !0);
    } catch {}
    if (!B) {
      if (!A?.trim()) (U = "url_empty"), (C = "No URL configured for this server");
      else if (x.length > 0) (U = "env_missing"), (C = `Missing environment variables: ${te(x).join(", ")}`);
      else if (
        ((U = A.includes("${user_config.") ? "user_config_missing" : "url_invalid"),
        (C =
          U === "user_config_missing"
            ? `URL is unset or invalid \u2014 open /plugin manage and configure ${u ?? "the plugin"} options`
            : `Plugin ${u ?? t.source} has an invalid MCP url`),
        o && u && d)
      )
        o.push({ type: "mcp-config-invalid", source: t.source, plugin: u, serverName: d, validationError: C });
    }
  }
  return C ? { ...F, configError: C, configErrorReason: U } : F;
}

async function uNt(e, t = [], r, o) {
  if (!e.enabled) return;
  let u = e.mcpServers || (await DL(e, t, r, o));
  if (!u) return;
  let d = {};
  for (let [_, C] of Object.entries(u)) {
    let A = await mvn(e, _, o);
    try {
      d[_] = yvn(C, e, A, t, e.name, _);
    } catch (x) {
      t?.push({ type: "generic-error", source: _, plugin: e.name, error: gR(x) });
    }
  }
  return $in(d, e.name, e.source, e.path);
}

function eee(e, t) {
  let r = e.replaceAll("*", BT),
    o;
  try {
    o = new URL(r);
  } catch {
    let d = r.replace(new RegExp(`:(?:${BT}${t ? `|${t}` : ""})(?=[/?#]|$)`), ":0");
    if (d === r) return null;
    try {
      o = new URL(d);
    } catch {
      return null;
    }
  }
  let u = (d) => d.replaceAll(BT, "*");
  return {
    protocol: u(o.protocol),
    hostname: u(o.hostname),
    username: u(o.username),
    password: u(o.password),
    port: u(o.port),
    pathname: u(o.pathname),
    search: u(o.search),
    hash: u(o.hash),
  };
}

function F1(e, t) {
  if (t === "*") return !0;
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  let o = t.replaceAll("*", BT),
    u = !1,
    d;
  try {
    d = new URL(o);
  } catch {
    let M = o.replace(new RegExp(`:${BT}(?=[/?#]|$)`), ":0");
    if (M !== o)
      try {
        (d = new URL(M)), (u = !0);
      } catch {}
  }
  if (!d) {
    let M = `${r.protocol}//${r.host}${r.pathname}${r.search}`,
      F = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`^${F.replaceAll("*", "[^/]*")}$`).test(M);
  }
  if (d.protocol !== `${BT}:` && d.protocol !== r.protocol) return !1;
  let _ = r.hostname.replace(/\.$/, "").toLowerCase(),
    A = d.hostname
      .replace(/\.$/, "")
      .toLowerCase()
      .replaceAll(BT, "*")
      .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
      .replaceAll("*", "[^/]*");
  if (!new RegExp(`^${A}$`).test(_)) return !1;
  if (d.port === "" && d.hostname.includes(BT)) u = !0;
  if (!u && d.port !== r.port) return !1;
  if ((d.pathname === "/" || d.pathname === "") && d.search === "" && !o.endsWith("/")) return !0;
  let x = (d.pathname + d.search)
    .replaceAll(BT, "*")
    .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
    .replaceAll("*", ".*");
  return new RegExp(`^${x}$`).test(r.pathname + r.search);
}

function zx() {
  return !1;
}

function kvn() {
  return {
    roots: { listChanged: !0 },
    elicitation: {},
    ...(zx() && { tasks: { requests: { elicitation: { create: {} } } } }),
  };
}

function wvn(e) {
  let t = e.tasks;
  if (!t?.requests?.elicitation) return e;
  let { elicitation: r, ...o } = t.requests,
    { requests: u, ...d } = t,
    { tasks: _, ...C } = e,
    A = { ...d, ...(Object.keys(o).length > 0 && { requests: o }) };
  return Object.keys(A).length > 0 ? { ...C, tasks: A } : C;
}

function uIe() {
  let e = kvn();
  return bT() === "v2" ? Tvn(wvn(e)) : e;
}

function Tvn(e) {
  if (!zx()) return e;
  return { ...e, extensions: { ...e.extensions, [N8n]: {} } };
}

function k3e() {
  return I("tengu_mcp_stateless_skip_init", !0);
}

function cst() {
  if (!k3e()) return {};
  let e = uIe(),
    t = Buffer.from(b(e)).toString("base64");
  if (Buffer.byteLength(t, "ascii") > vvn)
    return (
      n("[claudeai-mcp] client capabilities header exceeds size limit \u2014 omitting init-projection headers"), {}
    );
  return { "anthropic-mcp-client-capabilities": t, "MCP-Protocol-Version": YNt };
}

function Pvn(e) {
  if (!st.isAxiosError(e)) return !1;
  let t = e.response?.status;
  if (t !== void 0) return t >= 500 && t < 600;
  return e.code !== void 0 && Rvn.has(e.code);
}

function Rsn() {
  let e = qt(),
    t = e.pendingCrossOrgNotice;
  return (e.pendingCrossOrgNotice = void 0), t;
}

function H3e() {
  let e = Rsn();
  if (!e) return;
  let t = e.level === "error" ? ae.red(e.message) : ae.yellow(`\u26A0 ${e.message}`);
  process.stderr.write(`${t}
`);
}

function xvn(e) {
  let t = {};
  for (let r of e ?? []) {
    if (r.effective_max_permission === void 0) continue;
    let o = LTt().safeParse(r.effective_max_permission);
    t[r.name] = o.success ? o.data : "blocked";
  }
  return Object.keys(t).length > 0 ? t : void 0;
}

function Mvn(e) {
  try {
    return new URL(e).href.replace(/\/+$/, "");
  } catch {
    return e;
  }
}

function Tle(e) {
  let t = qt();
  if (t.claudeAiConfigsFetch === null) t.claudeAiConfigsFetch = Ivn(e);
  return t.claudeAiConfigsFetch;
}

async function Ivn(e) {
  let t = 0,
    r = qt();
  r.pendingCrossOrgNotice = void 0;
  try {
    let o = bo(process.env.ENABLE_CLAUDEAI_MCP_SERVERS),
      u = UY();
    if (o || u)
      return (
        n(`[claudeai-mcp] Disabled via ${o ? "env var" : "disableClaudeAiConnectors setting"}`),
        s("tengu_claudeai_mcp_eligibility", { state: o ? w("disabled_env_var") : w("disabled_setting") }),
        {}
      );
    if (ho("mcpClaudeAi"))
      return (
        n("[claudeai-mcp] Disabled in safe mode"), s("tengu_claudeai_mcp_eligibility", { state: w("safe_mode") }), {}
      );
    if (!pr())
      return (
        n("[claudeai-mcp] Disabled on third-party provider"),
        s("tengu_claudeai_mcp_eligibility", { state: w("third_party_provider") }),
        {}
      );
    if (!Tt()) {
      if (
        (n("[claudeai-mcp] Disabled: API-key auth precedence active"),
        s("tengu_claudeai_mcp_eligibility", { state: w("api_key_precedence") }),
        Yt()?.scopes?.includes("user:mcp_servers"))
      )
        r.pendingCrossOrgNotice = {
          level: "warn",
          message:
            "claude.ai connectors are disabled because ANTHROPIC_API_KEY or another auth source is set and takes precedence over your claude.ai login \xB7 Unset it to load your organization's connectors",
        };
      return {};
    }
    await Cs({ credentials: e });
    let d = Yt();
    if (!d?.accessToken)
      return (
        n("[claudeai-mcp] No access token"), s("tengu_claudeai_mcp_eligibility", { state: w("no_oauth_token") }), {}
      );
    if (!d.scopes?.includes("user:mcp_servers")) {
      let W = a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE
        ? "[claudeai-mcp] inference token lacks user:mcp_servers scope \u2014 claude.ai org connectors disabled (locally-configured MCP servers in managed-mcp.json / .claude.json / .mcp.json are NOT affected by this check)"
        : `[claudeai-mcp] Missing user:mcp_servers scope (scopes=${d.scopes?.join(",") || "none"})`;
      return n(W), s("tengu_claudeai_mcp_eligibility", { state: w("missing_scope") }), {};
    }
    let C = `${zt().BASE_API_URL}/v1/mcp_servers?limit=1000`;
    n(`[claudeai-mcp] Fetching from ${C}`);
    let A = () =>
        dh(
          () =>
            st.get(C, {
              headers: {
                Authorization: `Bearer ${Yt()?.accessToken ?? d.accessToken}`,
                "Content-Type": "application/json",
                "anthropic-beta": I8e.header,
                "anthropic-version": "2023-06-01",
                ...cst(),
              },
              timeout: ust,
            }),
          { credentials: e },
        ),
      x = Date.now(),
      M;
    while (!0) {
      t++;
      try {
        M = await A();
        break;
      } catch (W) {
        if (t >= dst || !Pvn(W)) throw W;
        let z = Evn * Cvn ** (t - 1);
        if (Date.now() - x + z + ust >= Avn)
          throw (n(`[claudeai-mcp] Retry budget exhausted after ${t} attempt(s)`), W);
        let pe = st.isAxiosError(W) ? (W.response?.status ?? W.code ?? "unknown") : "unknown";
        n(`[claudeai-mcp] Transient fetch error (${pe}), retrying in ${z}ms (attempt ${t}/${dst})`), await ne(z);
      }
    }
    let F = new Map();
    for (let W of M.data.data) {
      let z = Mvn(W.url),
        pe = F.get(z);
      if (pe) {
        n(`[claudeai-mcp] Dropping duplicate upstream ${z}: keeping ${pe.id}, dropping ${W.id}`);
        continue;
      }
      F.set(z, W);
    }
    let U = {},
      B = new Set();
    for (let W of F.values()) {
      let z = `claude.ai ${W.display_name}`,
        pe = z,
        fe = ln(pe),
        me = 1;
      while (B.has(fe)) me++, (pe = `${z} (${me})`), (fe = ln(pe));
      if (me > 1) n(`[claudeai-mcp] Display-name collision on distinct upstreams: "${pe}" (${W.id}, ${W.url})`);
      B.add(fe),
        (U[pe] = {
          type: "claudeai-proxy",
          url: W.url,
          id: W.id,
          displayName: W.display_name,
          iconUrl: W.icon_url,
          scope: "claudeai",
          toolPermissions: xvn(W.tools),
          stateless: W.stateless,
          cachedInitResponse: W.cached_init_response,
          discoverSupport: W.discover_support,
          cachedDiscoverResponse: W.cached_discover_response,
          eligible: W.eligible,
          ineligibleReason: W.eligibility_reason,
          enterpriseManaged: W.enterprise_managed,
        });
    }
    return (
      n(`[claudeai-mcp] Fetched ${Object.keys(U).length} servers`),
      s("tengu_claudeai_mcp_eligibility", { state: w("eligible") }),
      y("mcp_claudeai_fetch_configs"),
      U
    );
  } catch (o) {
    let u = st.isAxiosError(o) ? o : void 0,
      d = u?.response?.status,
      _ = u?.code,
      C = String(d ?? _ ?? "unknown");
    if (
      (n(`[claudeai-mcp] Fetch failed (${C}) after ${t} attempt(s)`),
      s("tengu_claudeai_mcp_eligibility", {
        state: w("fetch_failed"),
        status: HP(d) ?? bie(_) ?? w("unknown"),
        attempts: t,
      }),
      C === "401" || C === "403")
    )
      g("mcp_claudeai_fetch_configs", "fetch_needs_auth");
    else if (C === "429") g("mcp_claudeai_fetch_configs", "fetch_rate_limited");
    else if (C === "ECONNABORTED" || C === "ETIMEDOUT") g("mcp_claudeai_fetch_configs", "fetch_timeout");
    else if (/^\d+$/.test(C)) p("mcp_claudeai_fetch_configs", `fetch_failed_http_${C}`);
    else if (C !== "unknown") g("mcp_claudeai_fetch_configs", "fetch_network_error");
    else p("mcp_claudeai_fetch_configs", "fetch_failed");
    return (r.claudeAiConfigsFetch = null), {};
  }
}

function zct() {
  let e = qt();
  (e.claudeAiConfigsFetch = null), (e.pendingCrossOrgNotice = void 0);
}

function dIe(e, t) {
  qt().claudeAiConnectedThisSession.add(e),
    Ae((r) => {
      let o = r.claudeAiMcpEverConnected ?? [];
      if (o.includes(e)) return r;
      return { ...r, claudeAiMcpEverConnected: [...o, e] };
    }, t);
}

function pIe(e) {
  return qt().claudeAiConnectedThisSession.has(e);
}

function Vct() {
  qt().claudeAiConnectedThisSession.clear();
}

function fIe(e) {
  return (ie().claudeAiMcpEverConnected ?? []).includes(e);
}

function Kct() {
  return new Set(ie().claudeAiMcpEverConnected ?? []);
}

function PG() {
  return `${zt().CLAUDE_AI_ORIGIN}/customize/connectors`;
}

function ksn(e) {
  return e.startsWith("mcprs") ? `mcpsrv${e.slice(5)}` : e;
}

function Q8(e) {
  let t = On()?.organizationUuid;
  if (!t || !e.id) return null;
  let r = zt().CLAUDE_AI_ORIGIN,
    o = ksn(e.id),
    u = encodeURIComponent(a.CLAUDE_CODE_ENTRYPOINT || "cli");
  return `${r}/api/organizations/${t}/mcp/start-auth/${o}?product_surface=${u}`;
}

function Uvn(e) {
  return (
    ("errorCode" in e && typeof e.errorCode === "string" ? e.errorCode : E(e)) !== void 0 &&
    /^HTTP 40[13]\b/.test(e.message)
  );
}

function IG(e) {
  return pst(e, !1);
}

function pst(e, t) {
  let r = e !== null && typeof e === "object" && "mcpErrorSource" in e ? e.mcpErrorSource : void 0;
  if (typeof r === "string" && Fvn.has(r)) return r;
  if (e instanceof DOMException) return e.name === "TimeoutError" ? "downstream_unreachable" : "other";
  if (!(e instanceof Error)) return "other";
  if (e instanceof FL || e instanceof yle) return "user_auth";
  if (e instanceof W0) return e.expiryKind === "connection_closed_http" ? "downstream_unreachable" : "downstream_error";
  if (e instanceof Eee || e instanceof tIe) return "downstream_error";
  if (Uvn(e)) return "user_auth";
  let o =
    "code" in e && typeof e.code === "number"
      ? e.code
      : "status" in e && typeof e.status === "number"
        ? e.status
        : void 0;
  if (o !== void 0) {
    if (o === NB || o === Ovn) return "other";
    if (o === -32001 || o === -32000) return "downstream_unreachable";
    if (o < -32000) return "downstream_error";
    if (o === 401 || o === 403)
      return e.name === "McpError" || e.name === "ProtocolError" || o === 403 ? "downstream_error" : "user_auth";
    if (o >= 400 && o <= 599) return "downstream_error";
    return e.name === "McpError" || e.name === "ProtocolError" ? "downstream_error" : "other";
  }
  let u = E(e);
  if (u !== void 0) {
    if (u === "CLAUDEAI_BEARER_REJECTED") return "user_auth";
    if (Nvn.has(u) || u.includes("CERT") || u.startsWith("UNABLE_TO_")) return "user_config";
    if (bye.has(u) || $vn.has(u)) return "downstream_unreachable";
  }
  if (e.message.startsWith(pZe)) return "downstream_unreachable";
  if (!t) {
    let d = e.cause;
    for (let _ = 0; _ < 4 && d !== void 0; _++) {
      let C = pst(d, !0);
      if (C !== "other") return C;
      d = d instanceof Error ? d.cause : void 0;
    }
  }
  return "other";
}

function Cee(e) {
  if (e.type !== "failed") return !1;
  let t = e.config.type ?? "";
  if (!Hvn.has(t)) return !1;
  if (e.errorCode !== void 0) return GTe.has(e.errorCode);
  return t === "sse";
}

function $L(e, t) {
  let r = `mcp__${ln(t)}__`;
  return e.filter((o) => o.name?.startsWith(r));
}

function u_(e, t) {
  let r = ln(t),
    o = e.name;
  if (!o) return !1;
  return o.startsWith(`mcp__${r}__`) || o.startsWith(`${r}:`);
}

function eg(e, t, r) {
  if (e.mcpInfo?.serverName !== void 0) return e.mcpInfo.serverName === t;
  return e.name.startsWith(r ?? Bl(t));
}

function JNt(e, t) {
  return e.filter((r) => u_(r, t) && !(r.type === "prompt" && r.loadedFrom === "mcp"));
}

function QNt(e, t) {
  let r = Bl(t);
  return e.filter((o) => !eg(o, t, r));
}

function oIe(e, t) {
  return e.filter((r) => !u_(r, t));
}

function iIe(e, t) {
  let r = { ...e };
  return delete r[t], r;
}

function sIe(e) {
  return e === BW ? w(BW) : w("notification");
}

function wsn(e, t) {
  return (e.scope === "project" || e.scope === "local") && e.declaredIn !== void 0 && e.declaredIn !== t;
}

function Tsn(e, t) {
  let r = e.clients.filter(t);
  if (r.length === 0) return { ...e, stale: [] };
  let { tools: o, commands: u, resources: d } = e,
    _ = { ...e.resourceTemplates };
  for (let A of r) (o = QNt(o, A.name)), (u = oIe(u, A.name)), (d = iIe(d, A.name)), delete _[A.name];
  let C = new Set(r.map((A) => A.name));
  return {
    clients: e.clients.filter((A) => !C.has(A.name)),
    tools: o,
    commands: u,
    resources: d,
    resourceTemplates: _,
    stale: r,
  };
}

function _9n(e, t, r) {
  return Tsn(e, (o) => {
    if (r !== void 0 && wsn(o.config, r))
      return Z(o.name, "excludeStalePluginClients: marking stale (declared under a previous workspace root)"), !0;
    let u = t[o.name];
    if (!u) {
      if (o.config.scope === "dynamic") return Z(o.name, "excludeStalePluginClients: marking stale (removed)"), !0;
      return !1;
    }
    if (MM(o.config) !== MM(u)) return Z(o.name, "excludeStalePluginClients: marking stale (config hash changed)"), !0;
    return !1;
  });
}

function tT(e) {
  switch (e) {
    case "user":
      return Ls();
    case "project":
      return Bvn(ee(), ".mcp.json");
    case "local":
      return `${Ls()} [project: ${ee()}]`;
    case "dynamic":
      return "Dynamically configured";
    case "enterprise":
      return aUt();
    case "claudeai":
      return "claude.ai";
    case "agent":
      return "agent frontmatter";
    default:
      return e;
  }
}

function aIe(e) {
  switch (e) {
    case "local":
      return "Local config (private to you in this project)";
    case "project":
      return "Project config (shared via .mcp.json)";
    case "user":
      return "User config (available in all your projects)";
    case "dynamic":
      return "Dynamic config (from command line)";
    case "enterprise":
      return "Enterprise config (managed by your organization)";
    case "claudeai":
      return "claude.ai config";
    case "agent":
      return "Agent config (from agent frontmatter)";
    default:
      return e;
  }
}

function lIe(e) {
  if (!e) return "local";
  if (!PAn().options.includes(e)) throw Error(`Invalid scope: ${e}. Must be one of: ${PAn().options.join(", ")}`);
  return e;
}

function y9n(e) {
  if (!e) return "stdio";
  if (e === "streamable-http") return "http";
  if (e !== "stdio" && e !== "sse" && e !== "http")
    throw Error(`Invalid transport type: ${e}. Must be one of: stdio, sse, http (or streamable-http)`);
  return e;
}

function S9n(e) {
  let t = {};
  for (let r of e) {
    let o = r.indexOf(":");
    if (o === -1) throw Error(`Invalid header format: "${r}". Expected format: "Header-Name: value"`);
    let u = r.substring(0, o).trim(),
      d = r.substring(o + 1).trim();
    if (!u) throw Error(`Invalid header: "${r}". Header name cannot be empty.`);
    t[u] = d;
  }
  return t;
}

function mst(e) {
  let t = gw();
  if (hQe().some((u) => u.workspaceKey === t && Mpe(u.name, e))) return !0;
  let r = !$T(),
    o = CC({ onIndeterminate: "tracked" });
  for (let u of xi()) {
    if (u === "projectSettings" && r) continue;
    if (u === "localSettings" && o) continue;
    let d = ye(u);
    if (!d) continue;
    if (d.enableAllProjectMcpServers) return !0;
    if (d.enabledMcpjsonServers?.some((_) => Mpe(_, e))) return !0;
  }
  return !1;
}

function wye(e) {
  let t = En();
  if (t?.disabledMcpjsonServers?.some((r) => Mpe(r, e))) return "rejected";
  if (!qd()) return mst(e) ? "approved" : "pending";
  if (t?.enabledMcpjsonServers?.some((r) => Mpe(r, e)) || t?.enableAllProjectMcpServers) return "approved";
  return "pending";
}

function fst(e) {
  if (En()?.disabledMcpjsonServers?.some((r) => Mpe(r, e))) return "rejected";
  return mst(e) ? "approved" : "pending";
}

function Sle(e) {
  let t = wye(e);
  if (t !== "pending") return t;
  if ($4() && lA() && _o("projectSettings")) return "approved";
  if (Le() && _o("projectSettings")) return "approved";
  return "pending";
}

function jvn(e) {
  if (!K_({ name: e })) return null;
  let t = ya(e);
  if (!t) return null;
  let r = eI(t.serverName);
  if (!r && t.serverName.startsWith("claude_ai_")) return "claudeai";
  return r?.scope ?? null;
}

function KTe(e) {
  if (!K_(e)) return null;
  return e.mcpInfo?.scope ?? jvn(e.name);
}

function Wvn(e) {
  return e.type === "stdio" || e.type === void 0;
}

function zvn(e) {
  return e.type === "sse";
}

function Gvn(e) {
  return e.type === "http";
}

function qvn(e) {
  return e.type === "ws";
}

function Esn(e) {
  switch (e.type) {
    case void 0:
    case "stdio":
    case "sse":
    case "http":
    case "sdk":
      return !0;
    case "ws":
    case "sse-ide":
    case "ws-ide":
    case "claudeai-proxy":
      return !1;
    default:
      return !1;
  }
}

function Asn(e) {
  let t = new Map();
  for (let o of e) {
    if (!o.mcpServers?.length) continue;
    for (let u of o.mcpServers) {
      if (typeof u === "string") continue;
      let d = Object.entries(u);
      if (d.length !== 1) continue;
      let [_, C] = d[0],
        A = t.get(_);
      if (A) {
        if (!A.sourceAgents.includes(o.agentType)) A.sourceAgents.push(o.agentType);
      } else t.set(_, { config: { ...C, name: _ }, sourceAgents: [o.agentType] });
    }
  }
  let r = [];
  for (let [o, { config: u, sourceAgents: d }] of t)
    if (Wvn(u)) r.push({ name: o, sourceAgents: d, transport: "stdio", command: u.command, needsAuth: !1 });
    else if (zvn(u)) r.push({ name: o, sourceAgents: d, transport: "sse", url: u.url, needsAuth: !0 });
    else if (Gvn(u)) r.push({ name: o, sourceAgents: d, transport: "http", url: u.url, needsAuth: !0 });
    else if (qvn(u)) r.push({ name: o, sourceAgents: d, transport: "ws", url: u.url, needsAuth: !1 });
  return r.sort((o, u) => o.name.localeCompare(u.name));
}

function gg(e) {
  return e ? Vn(e) : void 0;
}

function Og(e) {
  return gg(IAe(e));
}

function aUt() {
  return N1(ib(), "managed-mcp.json");
}

function uF() {
  return Object.create(null);
}

function tee(e, t, r) {
  let o = uF();
  if (e)
    for (let [u, d] of Object.entries(e)) o[u] = r === void 0 ? { ...d, scope: t } : { ...d, scope: t, declaredIn: r };
  return o;
}

async function yst(e) {
  let t = N1(ee(), ".mcp.json");
  await O_(t, b(e, null, 2), { encoding: "utf-8", mode: 420, stagingDir: N1(ee(), ".claude", cU) });
}

function kte(e) {
  if (e.type !== void 0 && e.type !== "stdio") return null;
  let t = e;
  return [t.command, ...(t.args ?? [])];
}

function _st(e, t) {
  if (e.length !== t.length) return !1;
  return e.every((r, o) => r === t[o]);
}

function nee(e) {
  return iD(e).expanded;
}

function Sst() {
  let e = {};
  for (let t of fy()) for (let [r, o] of Object.entries(bV(t.env))) e[r] ??= o;
  return { ...SV(), ...e };
}

function Jvn() {
  let e = {};
  return (
    Object.assign(
      e,
      bV(ie().env, "globalConfig"),
      _o("userSettings") ? bV(ye("userSettings")?.env, "userSettings") : {},
      bV(ye("flagSettings")?.env, "flagSettings"),
      bV(ye("policySettings")?.env, "policySettings"),
    ),
    { env: Sst(), fallbackEnv: e }
  );
}

function bst(e, t, r) {
  let { expanded: o, missingVars: u } = iD(e, t, r);
  if (u.length > 0)
    n(
      `MCP policy predicate references environment variable(s) not present in the policy expansion env: ${u.join(", ")}`,
    );
  return { expanded: o, missingVars: u };
}

function ZTe(e) {
  let t = /\.+$/.exec(e)?.[0];
  if (t && e.length > t.length) return `${ZTe(e.slice(0, -t.length))}${t}`;
  if (/^[0-9]+(\.[0-9]+)*$/.test(e)) return e.replace(/[0-9]+/g, "0");
  if (e.includes(":") && /^[0-9a-fA-F:.]+$/.test(e)) return "::";
  return Zvn;
}

function eEn(e, t) {
  let r = [];
  for (let C of e.matchAll(new RegExp(Uxe, "g"))) {
    let A = C[1];
    if (!r.includes(A) && Object.hasOwn(t, A) && typeof t[A] === "string") r.push(A);
  }
  let o = new Map(),
    u = (C, A) => {
      let x = `zzv${r.indexOf(C)}zz`,
        M = new Proxy(
          {},
          {
            get: (B, W) => {
              if (typeof W !== "string") return;
              if (W === C) return x;
              if (!Object.hasOwn(t, W) || typeof t[W] !== "string") return;
              return A.has(W) ? String(t[W]) : ZTe(String(t[W]));
            },
          },
        ),
        F = iD(e, M).expanded,
        U = eee(F, yx);
      if (U === null) return "authority";
      if (U.protocol.includes(x)) return "scheme";
      if (U.username.includes(x) || U.password.includes(x) || U.hostname.includes(x) || U.port.includes(x))
        return "authority";
      if (U.pathname.includes(x) || U.search.includes(x) || U.hash.includes(x)) return "rest";
      return "scheme";
    },
    d = new Set(),
    _ = new Set(r.filter((C) => u(C, d) === "scheme"));
  for (let C of r) o.set(C, _.has(C) ? "scheme" : u(C, _));
  return o;
}

function oEn(e, t) {
  for (let [r, o] of e) {
    if (o === "rest") continue;
    let u = t[r];
    if (typeof u === "string" && (o === "scheme" ? rEn : nEn).test(u)) return !0;
  }
  return !1;
}

function sEn(e, t) {
  for (let r of e.matchAll(new RegExp(Uxe, "g"))) {
    let o = t[r[1]];
    if (typeof o !== "string") continue;
    if (/[?#]/.test(o)) return !0;
    let u = o
      .replace(/[\t\n\r]/g, "")
      .replaceAll("\\", "/")
      .replace(/%2e/gi, ".");
    if (kst.test(u)) return !0;
  }
  return !1;
}

function iEn(e) {
  let t = 0,
    r = e.length;
  while (t < r && e.charCodeAt(t) <= 32) t++;
  while (r > t && e.charCodeAt(r - 1) <= 32) r--;
  let o = e
      .slice(t, r)
      .replace(/[\t\n\r]/g, "")
      .replaceAll("\\", "/")
      .replace(/%2e/gi, "."),
    u = o.search(/[?#]/),
    d = u === -1 ? o : o.slice(0, u);
  return kst.test(d);
}

function wst(e, t, r) {
  let o = e.replace(/[\t\n\r]/g, ""),
    u = o.replaceAll("*", yx),
    d = iD(u, t, r),
    _ = new Proxy(
      {},
      { get: (pe, fe) => (typeof fe === "string" && Object.hasOwn(t, fe) ? ZTe(String(t[fe])) : void 0) },
    ),
    C = iD(u, _),
    A = eee(d.expanded, yx),
    x = eee(C.expanded, yx),
    M = A?.hostname ?? null,
    F = x?.hostname ?? null,
    U = C.expanded !== u,
    B = U ? eEn(u, t) : new Map(),
    W = o.includes("$") && iEn(d.expanded),
    z =
      d.wildcardVars.length > 0 ||
      (U && oEn(B, t)) ||
      (M === null) !== (F === null) ||
      (U && M === null) ||
      (A !== null && ((A.hash !== "" && (x?.hash ?? "") === "") || (A.search !== "" && (x?.search ?? "") === ""))) ||
      (U && sEn(u, t)) ||
      W ||
      (M !== null &&
        ((M.includes("*") && !(F ?? "").includes("*")) ||
          (M.endsWith(".") && !(F ?? "").endsWith(".")) ||
          (M.includes(yx) && !(F ?? "").includes(yx))));
  if (d.missingVars.length > 0)
    n(
      `MCP policy predicate references environment variable(s) not present in the policy expansion env: ${d.missingVars.join(", ")}`,
    );
  if (z) {
    let pe =
        d.wildcardVars.length > 0
          ? d.wildcardVars
          : [
              ...Object.keys(t).filter((me) => e.includes("${" + me + "}") || e.includes("${" + me + ":")),
              ...d.missingVars,
            ],
      fe = new RegExp(Uxe).test(o);
    n(
      `MCP policy URL predicate expansion was unsafe \u2014 ${d.wildcardVars.length > 0 ? "a value injected wildcard semantics" : W ? `the expanded entry's path carries a dot segment ('..' or '.') that URL parsing would collapse \u2014 remove dot segments from the pattern${fe ? ", or set the referenced variable(s)" : " (the pattern's '$' text is not a ${NAME} reference, so environment values cannot affect it)"}` : "a value restructured the URL, or the expansion is unparseable as a URL (e.g. a whole-URL ${VAR}: rewrite as https://${HOST}/path \u2014 hostname-position variables are fully supported)"} (variables: ${pe.join(", ") || "unknown"}) \u2014 allowlist URL entries using it fail closed; denylist entries are unaffected`,
    );
  }
  return { expanded: d.expanded.replaceAll(yx, "*"), unsafeExpansion: z, missingVars: d.missingVars };
}

function Tte(e) {
  return "url" in e ? e.url : null;
}

function lUt(e) {
  if (!K4t.some((t) => e.includes(t))) return e;
  try {
    return new URL(e).searchParams.get("mcp_url") || e;
  } catch {
    return e;
  }
}

function a2(e, t) {
  if ("configError" in e && e.configError) return null;
  let r = kte(e);
  if (r) {
    if (t?.includeEnv === !1) return `stdio:${b(r)}`;
    let d = Object.entries(e.env ?? {})
        .filter(([C]) => !aEn.has(C))
        .sort(([C], [A]) => (C < A ? -1 : C > A ? 1 : 0)),
      _ = d.length > 0 ? `:${b(Object.fromEntries(d))}` : "";
    return `stdio:${b(r)}${_}`;
  }
  let o = Tte(e);
  if (o) return `url:${lUt(o)}`;
  return null;
}

function Xgr(e, t) {
  let r = new Map();
  for (let [_, C] of Object.entries(t)) {
    let A = a2(C, { includeEnv: !1 });
    if (A && !r.has(A)) r.set(A, _);
  }
  let o = {},
    u = [],
    d = new Map();
  for (let [_, C] of Object.entries(e)) {
    let A = a2(C);
    if (A === null) {
      o[_] = C;
      continue;
    }
    let x = a2(C, { includeEnv: !1 }),
      M = x !== null ? r.get(x) : void 0;
    if (M !== void 0) {
      n(`Suppressing plugin MCP server "${_}": duplicates manually-configured "${M}"`),
        u.push({ name: _, duplicateOf: M });
      continue;
    }
    let F = d.get(A);
    if (F !== void 0) {
      n(`Suppressing plugin MCP server "${_}": duplicates earlier plugin server "${F}"`),
        u.push({ name: _, duplicateOf: F });
      continue;
    }
    d.set(A, _), (o[_] = C);
  }
  return { servers: o, suppressed: u };
}

function lEn(e) {
  let t = Tte(e);
  if (t) return t;
  let r = kte(e);
  if (r) return r.join(" ");
  return e.type ?? "unknown";
}

function cUt(e) {
  let t = new Map();
  for (let { scope: o, servers: u, displayServers: d } of e)
    for (let [_, C] of Object.entries(u)) {
      let A = a2(C, { includeEnv: !1 });
      if (!A) continue;
      let x = t.get(_);
      if (!x) t.set(_, (x = []));
      let M = d[_];
      x.push({ scope: o, sig: A, endpoint: M ? lEn(M) : (C.type ?? "unknown") });
    }
  let r = [];
  for (let [o, u] of t) {
    if (u.length < 2) continue;
    if (new Set(u.map((_) => _.sig)).size < 2) continue;
    let d = u.map((_) => Ra("mcp remove", o, `-s ${_.scope}`)).filter((_) => _ !== null);
    r.push({
      path: `mcpServers.${o}`,
      message: `Server "${o}" is defined in multiple scopes with different endpoints: ${u.map((_) => `${_.scope} (${_.endpoint})`).join(", ")}. OAuth tokens are stored per endpoint, so authenticating in one context will not carry over.`,
      severity: "warning",
      suggestion:
        d.length > 0
          ? `Keep the correct endpoint and remove the others: ${d.map((_) => `\`${_}\``).join(" or ")}`
          : "Keep the correct endpoint and remove the others from the scopes listed above.",
      mcpErrorMetadata: { scope: u[0].scope, serverName: o, severity: "warning" },
    });
  }
  return r;
}

function Pqe(e, t) {
  return (
    e.length === t.length &&
    e.every(
      (r, o) =>
        r.name === t[o]?.name && r.duplicateOf === t[o]?.duplicateOf && r.duplicateOfScope === t[o]?.duplicateOfScope,
    )
  );
}

async function APe(e, t) {
  let r = await YEe(),
    o = new Map();
  for (let [_, C] of Object.entries(t)) {
    if (yi(_)) continue;
    if ((C.type === "sse" || C.type === "http") && (JEe(_, C, r) || htr(_, C, r))) continue;
    let A = a2(C);
    if (A && !o.has(A)) o.set(A, { name: _, scope: C.scope });
  }
  let u = {},
    d = [];
  for (let [_, C] of Object.entries(e)) {
    let A = a2(C),
      x = A !== null ? o.get(A) : void 0;
    if (x !== void 0) {
      n(`Suppressing claude.ai connector "${_}": duplicates manually-configured "${x.name}"`),
        d.push({ name: _, duplicateOf: x.name, duplicateOfScope: x.scope });
      continue;
    }
    u[_] = C;
  }
  return { servers: u, suppressed: d };
}

function cEn() {
  if (Zgr()) return ye("policySettings") ?? {};
  return Je();
}

function uEn() {
  return Je();
}

function ree(e) {
  let t = hxn();
  if (t.has(e)) return;
  if ((t.add(e), e === "ok")) y("mcp_policy_predicate");
  else g("mcp_policy_predicate", e);
}

function gst(e, t) {
  if (e) ree("missing_policy_var");
  if (t) ree("unsafe_expansion");
}

function cce(e, t) {
  let r = uEn();
  if (!r.deniedMcpServers) return !1;
  for (let o of r.deniedMcpServers) if (UXe(o) && o.serverName === e) return !0;
  if (t) {
    let { env: o, fallbackEnv: u } = Jvn(),
      d = kte(t);
    if (d) {
      let C = d.map(nee);
      for (let A of r.deniedMcpServers)
        if (
          Oqt(A) &&
          _st(
            A.serverCommand.map((x) => bst(x, o, u).expanded),
            C,
          )
        )
          return !0;
    }
    let _ = Tte(t);
    if (_) {
      let C = nee(_);
      for (let A of r.deniedMcpServers) if (Lqt(A) && F1(C, wst(A.serverUrl, o, u).expanded)) return !0;
    }
  }
  return !1;
}

function p9(e, t) {
  if (cce(e, t)) return !1;
  let r = cEn();
  if (!r.allowedMcpServers) return !0;
  if (r.allowedMcpServers.length === 0) return !1;
  let o = r.allowedMcpServers.some(Oqt),
    u = r.allowedMcpServers.some(Lqt);
  if (t) {
    let d = Sst(),
      _ = kte(t),
      C = Tte(t);
    if (_)
      if (o) {
        let A = _.map(nee),
          x = !1;
        for (let M of r.allowedMcpServers)
          if (Oqt(M)) {
            let F = M.serverCommand.map((U) => {
              let B = bst(U, d);
              return (x ||= B.missingVars.length > 0), B.expanded;
            });
            if (_st(F, A)) return ree("ok"), !0;
          }
        return gst(x, !1), !1;
      } else {
        for (let A of r.allowedMcpServers) if (UXe(A) && A.serverName === e) return !0;
        return !1;
      }
    else if (C)
      if (u) {
        let A = nee(C),
          x = !1,
          M = !1;
        for (let F of r.allowedMcpServers) {
          if (!Lqt(F)) continue;
          let { expanded: U, unsafeExpansion: B, missingVars: W } = wst(F.serverUrl, d);
          if (((x ||= W.length > 0), (M ||= B), B)) continue;
          if (F1(A, U)) return ree("ok"), !0;
        }
        return gst(x, M), !1;
      } else {
        for (let A of r.allowedMcpServers) if (UXe(A) && A.serverName === e) return !0;
        return !1;
      }
    else {
      for (let A of r.allowedMcpServers) if (UXe(A) && A.serverName === e) return !0;
      return !1;
    }
  }
  for (let d of r.allowedMcpServers) if (UXe(d) && d.serverName === e) return !0;
  return !1;
}

function Ppt(e) {
  return LH(e) || F6(e);
}

function Zx(e) {
  let t = {},
    r = [];
  for (let [o, u] of Object.entries(e)) {
    let d = u;
    if (d.type === "sdk" || p9(o, d)) t[o] = u;
    else r.push(o);
  }
  return { allowed: t, blocked: r };
}

function As(e, t) {
  if (!pEn.has(t.scope)) return !1;
  if (t.scope === "claudeai" && UY()) return !0;
  if (t.type === "sdk") return !1;
  if (Ppt(e) || LT(t) || t.type === "sse-ide" || t.type === "ws-ide") return cce(e, t);
  return !p9(e, t);
}

function USe(e) {
  if (!e) return { configs: {}, blocked: [] };
  let t = {},
    r = [];
  for (let [o, u] of Object.entries(e))
    if (As(o, u)) r.push(o);
    else t[o] = u;
  return { configs: t, blocked: r };
}

function mEn(e) {
  let t = [],
    r = !1;
  function o(d) {
    let { expanded: _, missingVars: C } = iD(d);
    return t.push(...C), _;
  }
  let u;
  switch (e.type) {
    case void 0:
    case "stdio": {
      let d = e;
      u = { ...d, command: o(d.command), args: d.args.map(o), env: d.env ? ts(d.env, o) : void 0 };
      break;
    }
    case "sse":
    case "http":
    case "ws": {
      let d = e,
        _ = o(d.url);
      (r = d.url.trim() !== "" && _.trim() === ""),
        (u = { ...d, url: _, headers: d.headers ? ts(d.headers, o) : void 0 });
      break;
    }
    case "sse-ide":
    case "ws-ide":
      u = e;
      break;
    case "sdk":
      u = e;
      break;
    case "claudeai-proxy":
      u = e;
      break;
  }
  return { expanded: u, missingVars: te(t), urlExpandedToEmpty: r };
}

async function YL(e, t, r, o) {
  if (e.match(/[^a-zA-Z0-9_-]/))
    throw ft(Error(`Invalid name ${e}. Names can only contain letters, numbers, hyphens, and underscores.`), Ygr);
  if (Qde(e)) throw ft(Error(`Cannot add MCP server "${e}": this name is reserved.`), Jgr);
  if (nh())
    throw Error(
      "Cannot add MCP server: enterprise MCP configuration is active and has exclusive control over MCP servers",
    );
  let u = KY().safeParse(t);
  if (!u.success) {
    let _ = u.error.issues.map((C) => `${C.path.join(".")}: ${C.message}`).join(", ");
    throw ft(Error(`Invalid configuration: ${_}`), "Invalid configuration: <redacted>");
  }
  let d = u.data;
  if (cce(e, d))
    throw ft(
      Error(`Cannot add MCP server "${e}": server is explicitly blocked by enterprise policy`),
      "Cannot add MCP server: server is explicitly blocked by enterprise policy",
    );
  if (!p9(e, d))
    throw ft(
      Error(`Cannot add MCP server "${e}": not allowed by enterprise policy`),
      "Cannot add MCP server: not allowed by enterprise policy",
    );
  switch (r) {
    case "project": {
      let _ = await uce();
      if (Object.hasOwn(_, e))
        throw ft(Error(`MCP server ${e} already exists in .mcp.json`), "MCP server already exists in .mcp.json");
      break;
    }
    case "user": {
      if (ie().mcpServers?.[e])
        throw ft(Error(`MCP server ${e} already exists in user config`), "MCP server already exists in user config");
      break;
    }
    case "local": {
      if (ci().mcpServers?.[e])
        throw ft(Error(`MCP server ${e} already exists in local config`), "MCP server already exists in local config");
      break;
    }
    case "dynamic":
      throw Error("Cannot add MCP server to scope: dynamic");
    case "enterprise":
      throw Error("Cannot add MCP server to scope: enterprise");
    case "claudeai":
      throw Error("Cannot add MCP server to scope: claudeai");
  }
  switch (r) {
    case "project": {
      let _ = await uce();
      _[e] = d;
      try {
        await yst({ mcpServers: _ });
      } catch (C) {
        throw (p("mcp_config_add", "mcp_config_write_failed"), Error(`Failed to write to .mcp.json: ${C}`));
      }
      break;
    }
    case "user": {
      await Ae((_) => ({ ..._, mcpServers: { ..._.mcpServers, [e]: d } }), o);
      break;
    }
    case "local": {
      await jc((_) => ({ ..._, mcpServers: { ..._.mcpServers, [e]: d } }), o);
      break;
    }
    default:
      throw Error(`Cannot add MCP server to scope: ${r}`);
  }
  y("mcp_config_add");
}

async function uUt(e, t, r) {
  switch (t) {
    case "project": {
      let o = await uce();
      if (!Object.hasOwn(o, e)) throw Error(`No MCP server named "${e}" in .mcp.json`);
      delete o[e];
      try {
        await yst({ mcpServers: o });
      } catch (u) {
        throw (p("mcp_config_remove", "mcp_config_write_failed"), Error(`Failed to remove from .mcp.json: ${u}`));
      }
      break;
    }
    case "user": {
      if (!ie().mcpServers?.[e]) throw Error(`No MCP server named "${e}" in user scope`);
      await Ae((u) => {
        let { [e]: d, ..._ } = u.mcpServers ?? {};
        return { ...u, mcpServers: _ };
      }, r);
      break;
    }
    case "local": {
      if (!ci().mcpServers?.[e]) throw Error(`No MCP server named "${e}" in local scope`);
      await jc((u) => {
        let { [e]: d, ..._ } = u.mcpServers ?? {};
        return { ...u, mcpServers: _ };
      }, r);
      break;
    }
    default:
      throw Error(`Cannot remove MCP server from scope: ${t}`);
  }
  y("mcp_config_remove");
}

function Dpt(e) {
  return ie().mcpServers?.[e] !== void 0;
}

async function uce() {
  let e = N1(ee(), ".mcp.json"),
    t;
  try {
    t = await Yvn(e, "utf8");
  } catch (o) {
    if (E(o) === "ENOENT") return {};
    throw o;
  }
  if (!t.trim()) return {};
  let r = f({ mcpServers: De(i(), _e()).default({}) }).safeParse(Ut(t, !1));
  if (!r.success) throw Error(".mcp.json is malformed (not valid JSON, or mcpServers is not an object)");
  return r.data.mcpServers;
}

function kp(e, { expandVars: t = !0 } = {}) {
  if ($n()) return { servers: uF(), errors: [] };
  return Tst(e, { expandVars: t });
}

function Tst(e, { expandVars: t = !0 } = {}) {
  let r = { project: "projectSettings", user: "userSettings", local: "localSettings" };
  if (e in r && !_o(r[e])) return { servers: uF(), errors: [] };
  switch (e) {
    case "project": {
      let o = uF(),
        u = [],
        d = [],
        _ = Se(),
        C = _;
      while (C !== Qvn(C).root) d.push(C), (C = Xvn(C));
      for (let A of d.reverse()) {
        let x = N1(A, ".mcp.json"),
          { config: M, errors: F } = Lqe({ filePath: x, expandVars: t, scope: "project" });
        if (!M) {
          let U = F.filter((B) => !B.message.startsWith("MCP config file not found"));
          if (U.length > 0)
            n(`MCP config errors for ${x}: ${b(U.map((B) => B.message))}`, { level: "error" }), u.push(...U);
          continue;
        }
        if (M.mcpServers) Object.assign(o, tee(M.mcpServers, e, _));
        if (F.length > 0) u.push(...F);
      }
      return { servers: o, errors: u };
    }
    case "user": {
      let o = ie().mcpServers;
      if (!o) return { servers: uF(), errors: [] };
      let { config: u, errors: d } = Oqe({ configObject: { mcpServers: o }, expandVars: t, scope: "user" });
      return { servers: tee(u?.mcpServers, e), errors: d };
    }
    case "local": {
      let o = ci().mcpServers;
      if (!o) return { servers: uF(), errors: [] };
      let { config: u, errors: d } = Oqe({ configObject: { mcpServers: o }, expandVars: t, scope: "local" });
      return { servers: tee(u?.mcpServers, e, Se()), errors: d };
    }
    case "enterprise": {
      let o = aUt(),
        { config: u, errors: d } = Lqe({ filePath: o, expandVars: t, scope: "enterprise" });
      if (!u) {
        let _ = d.filter((C) => !C.message.startsWith("MCP config file not found"));
        if (_.length > 0)
          return (
            n(`Enterprise MCP config errors for ${o}: ${b(_.map((C) => C.message))}`, { level: "error" }),
            { servers: uF(), errors: _ }
          );
        return { servers: uF(), errors: [] };
      }
      return { servers: tee(u.mcpServers, e), errors: d };
    }
  }
}

function eI(e) {
  let { servers: t } = kp("enterprise");
  if (Nd("mcp")) return t[e] ?? null;
  let { servers: r } = kp("user"),
    { servers: o } = kp("project"),
    { servers: u } = kp("local");
  if (t[e]) return t[e];
  if (u[e]) return u[e];
  if (o[e] && Sle(e) === "approved") return o[e];
  if (r[e]) return r[e];
  return null;
}

async function nH(e = {}, t = {}) {
  if (ho("mcpAutoDiscovered"))
    return {
      servers: uF(),
      pendingProjectServers: new Set(),
      rejectedProjectServers: new Set(),
      errors: [],
      warnings: [],
    };
  let r = t.purpose === "deviceBridge" ? Tst : kp,
    { servers: o } = r("enterprise");
  if (nh()) {
    let Be = uF();
    for (let [ze, We] of Object.entries(o)) {
      if (!p9(ze, We)) continue;
      Be[ze] = We;
    }
    return {
      servers: Be,
      pendingProjectServers: new Set(),
      rejectedProjectServers: new Set(),
      errors: [],
      warnings: [],
    };
  }
  let u = Nd("mcp"),
    d = { servers: uF() },
    { servers: _ } = u ? d : r("user"),
    { servers: C } = u ? d : r("project"),
    { servers: A } = u ? d : r("local"),
    x = uF(),
    M = t.pluginLoadResult ?? (await is(t.storageV5, t.credentials)),
    F = [],
    U = [];
  if (M.errors.length > 0)
    for (let Be of M.errors)
      if (
        Be.type === "mcp-config-invalid" ||
        Be.type === "mcpb-download-failed" ||
        Be.type === "mcpb-extract-failed" ||
        Be.type === "mcpb-invalid-manifest"
      ) {
        let ze = `Plugin MCP loading error - ${Be.type}: ${jh(Be)}`;
        n(ze, { level: "error" });
      } else {
        let ze = Be.type;
        n(`Plugin not available for MCP: ${Be.source} - error type: ${ze}`);
      }
  let B = new Set(),
    W = new Set(),
    z =
      t.purpose === "deviceBridge"
        ? fst
        : t.includePendingProjectServers || t.includeRejectedProjectServers
          ? wye
          : Sle,
    pe = t.purpose === "deviceBridge" ? OW() : null,
    fe = await Promise.all(
      M.enabled.map(async (Be) => {
        let ze = await uNt(Be, F, t.storageV5);
        if (ze && t.purpose === "deviceBridge" && pe?.has(Be.source))
          return ts(ze, (Ve) => ({ ...Ve, scope: "managed" }));
        if (!ze || !LM(Be)) return ze;
        let We = Qs(ze, (Ve, Pt) => {
          let ct = z(Pt);
          if (ct === "approved") return !0;
          if (ct === "pending" && t.includePendingProjectServers) return B.add(Pt), !0;
          if (ct === "rejected" && t.includeRejectedProjectServers) return W.add(Pt), !0;
          return !1;
        });
        return t.purpose === "deviceBridge" ? ts(We, (Ve) => ({ ...Ve, scope: "project" })) : We;
      }),
    );
  for (let Be of fe) if (Be) Object.assign(x, Be);
  if (F.length > 0)
    for (let Be of F) {
      let ze = `Plugin MCP server error - ${Be.type}: ${jh(Be)}`;
      n(ze, { level: "error" });
    }
  let me = uF();
  for (let [Be, ze] of Object.entries(C)) {
    let We = z(Be);
    if (We === "approved") {
      me[Be] = ze;
      continue;
    }
    if (Be in A || Be in _ || Be in x) continue;
    if (We === "pending" && t.includePendingProjectServers) (me[Be] = ze), B.add(Be);
    else if (We === "rejected" && t.includeRejectedProjectServers) (me[Be] = ze), W.add(Be);
  }
  let ge = {};
  for (let [Be, ze] of Object.entries({ ..._, ...me, ...A, ...e }))
    if (!yi(Be) && !B.has(Be) && !W.has(Be) && p9(Be, ze)) ge[Be] = ze;
  let Ce = {},
    Ie = {};
  for (let [Be, ze] of Object.entries(x))
    if (yi(Be) || B.has(Be) || W.has(Be) || !p9(Be, ze)) Ie[Be] = ze;
    else Ce[Be] = ze;
  let { servers: Ee, suppressed: Pe } = Xgr(Ce, ge);
  Object.assign(Ee, Ie);
  for (let { name: Be, duplicateOf: ze } of Pe) {
    let We = Be.split(":");
    if (We[0] !== "plugin" || We.length < 3) continue;
    U.push({
      type: "mcp-server-suppressed-duplicate",
      source: Be,
      plugin: We[1],
      serverName: We.slice(2).join(":"),
      duplicateOf: ze,
    });
  }
  let Oe = Object.assign({}, Ee, _, me, A),
    Fe = uF();
  for (let [Be, ze] of Object.entries(Oe)) {
    if (!p9(Be, ze)) continue;
    Fe[Be] = ze;
  }
  for (let Be of [B, W])
    for (let ze of Be) {
      let We = Fe[ze]?.scope;
      if (We !== "project" && We !== "dynamic") Be.delete(ze);
    }
  return { servers: Fe, pendingProjectServers: B, rejectedProjectServers: W, errors: F, warnings: U };
}

async function EE(e = {}) {
  if (BSe()) return nH({}, e);
  let t = Tle(),
    { servers: r, pendingProjectServers: o, rejectedProjectServers: u, errors: d, warnings: _ } = await nH({}, e),
    { allowed: C } = Zx((await t) ?? {});
  H3e();
  let A =
      e.includePendingProjectServers || e.includeRejectedProjectServers ? Qs(r, (F, U) => !o.has(U) && !u.has(U)) : r,
    { servers: x } = await APe(C, A),
    M = Object.assign(uF(), x, r);
  for (let F of [o, u]) for (let U of F) if (Object.hasOwn(x, U)) (M[U] = x[U]), F.delete(U);
  return { servers: M, pendingProjectServers: o, rejectedProjectServers: u, errors: d, warnings: _ };
}

async function gcn(e = {}, t, r = () => Ipt(t)) {
  if (ox()) return new Set();
  let o = await r(),
    { servers: u } = await nH(e, { pluginLoadResult: o, storageV5: t }),
    d = new Set();
  for (let [_, C] of Object.entries(u)) if (C.pluginSource !== void 0) d.add(_);
  return d;
}

function fEn(e) {
  let t = [];
  function r(o, u) {
    if (u !== u.trim()) t.push(o);
  }
  if ("command" in e) r("command", e.command);
  if ("url" in e) r("url", e.url);
  if ("args" in e && e.args) e.args.forEach((o, u) => r(`args[${u}]`, o));
  if ("env" in e && e.env)
    for (let [o, u] of Object.entries(e.env)) {
      if (o !== o.trim()) t.push(`env name ${b(o)}`);
      r(`env.${o}`, u);
    }
  if ("headers" in e && e.headers)
    for (let [o, u] of Object.entries(e.headers)) {
      if (o !== o.trim()) t.push(`header name ${b(o)}`);
      r(`headers.${o}`, u);
    }
  return t;
}

function hcn() {
  if (i0.isBridgeCarrierChild) a.set("CLAUDE_CODE_BRIDGE_MCP_CARRIER", Err);
}

function _cn(e) {
  let t = a.CLAUDE_CODE_BRIDGE_PROMPT_SHA256;
  if (
    (a.unset("CLAUDE_CODE_BRIDGE_PROMPT_SHA256"),
    t === void 0 ? !i0.isBridgeCarrierChild : Kvn("sha256").update(e).digest("hex") === t.toLowerCase())
  )
    return e.toString("utf8");
  n("[bridge:carrier] --append-system-prompt-file does not match the prompt the daemon wrote; dropped", {
    level: "error",
  });
  return;
}

function hEn(e, t, r) {
  if (e !== G6) return { drop: "bridge_carrier_foreign_entry" };
  if (t.type !== "http") return { drop: "bridge_carrier_not_http" };
  let o = bwt(i0.atStartup);
  if (!o) return { drop: "bridge_carrier_no_ingress_origin" };
  if (!r) return { drop: "bridge_carrier_no_session_id" };
  let u = Swt(t.url, o, r);
  if (!u) return { drop: "bridge_carrier_url_mismatch" };
  return { url: u, sessionId: r };
}

function Oqe(e) {
  let { configObject: t, expandVars: r, scope: o, filePath: u, bridgeSessionId: d } = e,
    _ = f({ mcpServers: De(i(), _e()) }).safeParse(t);
  if (!_.success) {
    let U = t !== null && typeof t === "object" && "servers" in t && !("mcpServers" in t);
    return {
      config: null,
      errors: _.error.issues.map((B) => ({
        ...(u && { file: u }),
        path: B.path.join("."),
        message: U
          ? 'Missing "mcpServers" \u2014 found "servers" instead. Claude Code reads MCP servers from the "mcpServers" key.'
          : B.message,
        ...(U && { suggestion: `Rename the top-level "servers" key to "mcpServers" in ${u ?? "your MCP config"}.` }),
        mcpErrorMetadata: { scope: o, severity: "fatal" },
      })),
    };
  }
  let C = [],
    A = {};
  function x(U, B, W, z) {
    C.push({
      ...(u && { file: u }),
      path: `mcpServers.${U}`,
      message: An(B),
      ...(W && { suggestion: An(W) }),
      mcpErrorMetadata: { scope: o, serverName: U, severity: "warning", ...(z && { skipReason: z }) },
    });
  }
  function M(U, B) {
    if (B.length > 0)
      x(
        U,
        `Missing environment variables: ${B.join(", ")}`,
        `Set the following environment variables: ${B.join(", ")}`,
      );
  }
  let F = t.mcpServers;
  if (Object.hasOwn(F, "__proto__") && !Object.hasOwn(_.data.mcpServers, "__proto__"))
    x(
      "__proto__",
      '"__proto__" is a reserved MCP server name and was not loaded',
      'Rename this server in your MCP config \u2014 "__proto__" cannot be used as a server name',
      "reserved_name",
    );
  for (let [U, B] of Object.entries(_.data.mcpServers)) {
    let W = B && typeof B === "object" && "type" in B && typeof B.type === "string" ? B.type : "stdio",
      z = Object.hasOwn(QGn, W) ? QGn[W] : void 0;
    if (!z) {
      x(
        U,
        `Skipped \u2014 unknown MCP server type "${W}" for server "${U}"`,
        "Valid types are: stdio, sse, http (or streamable-http), ws, sdk",
        "unknown_type",
      );
      continue;
    }
    let pe = z().safeParse(B);
    if (!pe.success) {
      if (B !== null && typeof B === "object" && !("type" in B) && "url" in B && !("command" in B)) {
        x(
          U,
          `Skipped \u2014 MCP server "${U}" has a "url" but no "type"; add "type": "http" (or "sse" / "ws") to this entry`,
          void 0,
          "url_missing_type",
        );
        continue;
      }
      let Pe = pe.error.issues
        .map((Oe) => {
          let Fe = Oe.message.replace(/^Invalid input: /, "");
          return `${Oe.path.join(".") || "(root)"}: ${Fe}`;
        })
        .join("; ");
      x(U, `Skipped \u2014 invalid MCP server config for "${U}": ${Pe}`, void 0, "invalid_config");
      continue;
    }
    let fe = pe.data;
    if (o === "dynamic" && i0.isBridgeCarrierChild) {
      let Ee = hEn(U, fe, d);
      if ("drop" in Ee) {
        x(U, `"${U}" ${gEn[Ee.drop]}`, void 0, Ee.drop);
        continue;
      }
      A[U] = mwt(hwt(Ee.url, Ee.sessionId));
      continue;
    }
    let me = o === "dynamic" && a.CLAUDE_CODE_REMOTE,
      ge = r ? mEn(fe) : void 0;
    if (Qde(U, { hostCarrier: me, config: ge?.expanded ?? fe }) && fe.type !== "sdk") {
      if (me && zMe.has(U)) {
        M(U, ge?.missingVars ?? []),
          x(
            U,
            `"${U}" on a hosted session is reserved except as an http server on a loopback IP literal (e.g. http://127.0.0.1:PORT/mcp) and was not loaded`,
            `Point "${U}" at the in-container listener over plain http by loopback IP literal, or rename this server`,
            "reserved_name",
          );
        continue;
      }
      x(
        U,
        `"${U}" is a reserved MCP server name and was not loaded`,
        `Rename this server in your MCP config \u2014 "${U}" is reserved for internal use`,
        "reserved_name",
      );
      continue;
    }
    let Ce = fEn(fe);
    if (Ce.length > 0)
      x(
        U,
        `Leading or trailing whitespace in: ${Ce.join(", ")}`,
        `Remove the whitespace from these values in the "${U}" entry \u2014 they are used exactly as written`,
      );
    let Ie = fe;
    if (ge) {
      let { expanded: Ee, missingVars: Pe, urlExpandedToEmpty: Oe } = ge;
      if ((M(U, Pe), (Ie = Ee), Oe && "url" in fe))
        Ie = {
          ...Ee,
          configError: `'url' ${b(fe.url)} expanded to an empty string. Set the referenced environment variable, or update the server's config and reconnect.`,
          configErrorReason: "url_invalid",
        };
    }
    A[U] = Ie;
  }
  return { config: { mcpServers: A }, errors: C };
}

function Lqe(e) {
  let { filePath: t, expandVars: r, scope: o, bridgeSessionId: u } = e,
    d = le(),
    _;
  try {
    let A = o === "dynamic" ? d.readFileSync(t, { encoding: "utf8" }) : Ctr(d, t, ycn);
    if (A === null)
      return (
        n(`MCP config skipped for ${t} (scope=${o}): not a regular file or exceeds ${ycn} byte limit`, {
          level: "warn",
        }),
        p("mcp_config_parse", "mcp_config_shape_gate"),
        {
          config: null,
          errors: [
            {
              file: t,
              path: "",
              message: `MCP config is not a regular file or exceeds ${ycn} bytes: ${t}`,
              suggestion: "Check that the path is a plain JSON file (not a device, FIFO, or symlink to one)",
              mcpErrorMetadata: { scope: o, severity: "fatal" },
            },
          ],
        }
      );
    _ = A;
  } catch (A) {
    if (E(A) === "ENOENT")
      return {
        config: null,
        errors: [
          {
            file: t,
            path: "",
            message: `MCP config file not found: ${t}`,
            suggestion: "Check that the file path is correct",
            mcpErrorMetadata: { scope: o, severity: "fatal" },
          },
        ],
      };
    return (
      n(`MCP config read error for ${t} (scope=${o}): ${A}`, { level: "error" }),
      p("mcp_config_parse", "mcp_config_read_failed"),
      {
        config: null,
        errors: [
          {
            file: t,
            path: "",
            message: `Failed to read file: ${A}`,
            suggestion: "Check file permissions and ensure the file exists",
            mcpErrorMetadata: { scope: o, severity: "fatal" },
          },
        ],
      }
    );
  }
  let C = Ut(_, !1);
  if (!C)
    return (
      n(`MCP config is not valid JSON: ${t} (scope=${o}, length=${_.length}, first100=${b(_.slice(0, 100))})`, {
        level: "error",
      }),
      p("mcp_config_parse", "mcp_config_invalid_json"),
      {
        config: null,
        errors: [
          {
            file: t,
            path: "",
            message: "MCP config is not a valid JSON",
            suggestion: "Fix the JSON syntax errors in the file",
            mcpErrorMetadata: { scope: o, severity: "fatal" },
          },
        ],
      }
    );
  return y("mcp_config_parse"), Oqe({ configObject: C, expandVars: r, scope: o, filePath: t, bridgeSessionId: u });
}

export { $1t, $3n, $L, $in, $ut, APe, ATe, As, Asn, B1t, BL, But, Cee, D1, D3n, DL, Dpt, EE, Esn, F1, F3n, Fut, G1t, Gut, Gye, H3e, H3n, I3n, IG, IN, JNt, JTn, Jot, KTe, KZ, Kct, Kut, L3n, Lqe, M3n, Mut, N3n, Nee, Nle, Not, Nut, O3n, Og, Oqe, P3n, PG, Ppt, Pqe, Q8, QC, QNt, QZ, R3n, RTe, Rsn, S9n, Sle, Tle, Tsn, U1t, U3n, USe, Uut, VZ, Vct, Vut, Vye, W1t, WZ, Wot, Wut, XZ, Xgr, Xot, Xut, YB, YL, YW, Yot, ZTn, Zot, Zx, _9n, _cn, a2, a4e, aIe, aUt, ast, cNt, cUt, cce, dIe, eI, eg, est, fIe, fan, gan, gcn, gg, han, hcn, i4e, iIe, ist, j1t, jot, jut, k3e, k3n, kp, ksn, lIe, lUt, man, nH, o4e, oIe, p7, p9, pIe, pan, q1t, qut, qye, s4e, sIe, tT, tst, uF, uIe, uNt, uUt, u_, uce, wsn, wye, x3n, y9n, zZ, zct, zut, zx, zye };
