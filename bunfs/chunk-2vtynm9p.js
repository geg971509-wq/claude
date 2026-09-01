// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { ne, jt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { l, E } from "/$bunfs/root/chunk-ypdw393e.js";
import { vt, BC, b, Uf, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Y } from "/$bunfs/root/chunk-s7e0px8j.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { st } from "/$bunfs/root/chunk-qcx34e4j.js";
import { Ri } from "/$bunfs/root/chunk-rf51999f.js";
import { iWn, eT, z9n, V9n, Oye } from "/$bunfs/root/chunk-zze8764r.js";
import { rl, Jre } from "/$bunfs/root/chunk-4r03fm98.js";
import { Wi } from "/$bunfs/root/chunk-rsp0anqd.js";
import { cje } from "/$bunfs/root/chunk-vvzrkky4.js";
import { qot, R1 } from "/$bunfs/root/chunk-dtj9f22f.js";
import { yX } from "/$bunfs/root/chunk-z6m3k8w5.js";
import { Ja } from "/$bunfs/root/chunk-f7y0mdt6.js";
import { w8e, lre } from "/$bunfs/root/chunk-r6ppzf4r.js";
import { cR } from "/$bunfs/root/chunk-szz73wxx.js";
import { i, q, _e, H, f, un, De } from "/$bunfs/root/chunk-saay52v7.js";
import { Ka, Cg } from "/$bunfs/root/chunk-fxb0gsq0.js";
import { He } from "/$bunfs/root/chunk-79g5tayq.js";
import { randomUUID as re } from "crypto";
var x = 61440,
  pe = x - 4096;
function ve(e) {
  if (e.type !== "content_block_delta") return null;
  switch (e.delta.type) {
    case "text_delta":
      return { event: e, deltaType: "text_delta", chunk: e.delta.text, estimatedTokens: void 0 };
    case "input_json_delta":
      return { event: e, deltaType: "input_json_delta", chunk: e.delta.partial_json, estimatedTokens: void 0 };
    case "thinking_delta":
      return {
        event: e,
        deltaType: "thinking_delta",
        chunk: e.delta.thinking,
        estimatedTokens: e.delta.estimated_tokens ?? void 0,
      };
    case "citations_delta":
    case "signature_delta":
    case "compaction_delta":
      return null;
    default:
      return e.delta, null;
  }
}
function L(e) {
  if (e.count === 1) return e.first;
  let t;
  switch (e.deltaType) {
    case "text_delta":
      t = { type: "text_delta", text: e.accumulated };
      break;
    case "input_json_delta":
      t = { type: "input_json_delta", partial_json: e.accumulated };
      break;
    case "thinking_delta":
      t = { type: "thinking_delta", thinking: e.accumulated, estimated_tokens: e.estimatedTokens ?? null };
      break;
  }
  return { ...e.first, event: { ...e.firstEvent, delta: { ...e.firstEvent.delta, ...t } } };
}
function J(e) {
  if (e.length <= 1) return e;
  let t = [],
    r = null;
  for (let o of e) {
    let d = ve(o.event);
    if (d === null) {
      if (r !== null) t.push(L(r)), (r = null);
      t.push(o);
      continue;
    }
    let { event: u, deltaType: v, chunk: _, estimatedTokens: w } = d,
      S = Buffer.byteLength(Uf(_)) - 2;
    if (
      r !== null &&
      r.firstEvent.index === u.index &&
      r.deltaType === v &&
      r.first.parent_tool_use_id === o.parent_tool_use_id &&
      r.bytes + S <= pe
    ) {
      if (((r.accumulated += _), (r.bytes += S), (r.count += 1), typeof w === "number"))
        r.estimatedTokens = (r.estimatedTokens ?? 0) + w;
      continue;
    }
    if (r !== null) t.push(L(r));
    r = { first: o, firstEvent: u, deltaType: v, accumulated: _, estimatedTokens: w, bytes: S, count: 1 };
  }
  if (r !== null) t.push(L(r));
  return t;
}
var O = 1536;
function j(e) {
  return Array.isArray(e) && e.every((t) => typeof t === "string");
}
function Q(e, t = O) {
  let r = e.compactMetadata;
  if (!He(r)) return null;
  let o = r.preservedMessages;
  if (!He(o)) return null;
  let d = o.uuids;
  if (!j(d) || d.length <= t) return null;
  let u = d.slice(-t),
    v = u[0],
    _ = o.allUuids,
    w = j(_) ? _.indexOf(v) : -1,
    S = r.preservedSegment;
  return {
    ...e,
    compactMetadata: {
      ...r,
      preservedMessages: { ...o, uuids: u, ...(j(_) && { allUuids: w >= 0 ? _.slice(w) : _.slice(-t) }) },
      ...(He(S) && { preservedSegment: { ...S, headUuid: v } }),
    },
  };
}
class B extends Error {
  retryAfterMs;
  constructor(e, t) {
    super(e);
    this.retryAfterMs = t;
  }
}
class F {
  pending = [];
  pendingAtClose = 0;
  inFlight;
  undelivered = [];
  retaining = false;
  draining = false;
  closed = false;
  backpressureResolvers = [];
  sleepResolve = null;
  flushResolvers = [];
  droppedBatches = 0;
  config;
  constructor(e) {
    this.config = e;
  }
  get droppedBatchCount() {
    return this.droppedBatches;
  }
  get pendingCount() {
    return this.closed ? this.pendingAtClose : this.pending.length;
  }
  takeUndelivered() {
    let e = this.undelivered;
    return (this.undelivered = []), e;
  }
  peekUndelivered() {
    return this.undelivered;
  }
  discardUndelivered() {
    let e = this.undelivered.length;
    return (this.undelivered = []), (this.retaining = false), e;
  }
  async enqueue(e) {
    let t = Array.isArray(e) ? e : [e];
    if (t.length === 0) return;
    if (this.closed) {
      this.retainUndelivered(t);
      return;
    }
    if (t.length > this.config.maxQueueSize) {
      for (let r = 0; r < t.length; r += this.config.maxQueueSize)
        await this.enqueue(t.slice(r, r + this.config.maxQueueSize));
      return;
    }
    while (this.pending.length + t.length > this.config.maxQueueSize && !this.closed)
      await new Promise((r) => {
        this.backpressureResolvers.push(r);
      });
    if (this.closed) {
      this.retainUndelivered(t);
      return;
    }
    this.pending.push(...t), this.drain();
  }
  retainUndelivered(e) {
    if (!this.retaining) return;
    let t = this.config.maxQueueSize - this.undelivered.length;
    if (t <= 0) return;
    this.undelivered.push(...(e.length > t ? e.slice(0, t) : e));
  }
  flush() {
    if (this.pending.length === 0 && !this.draining) return Promise.resolve();
    return (
      this.drain(),
      new Promise((e) => {
        this.flushResolvers.push(e);
      })
    );
  }
  close(e) {
    if (this.closed) return;
    (this.closed = true),
      (this.pendingAtClose = this.pending.length),
      (this.retaining = e?.retainUndelivered === true),
      (this.undelivered = this.retaining ? (this.inFlight ?? []).concat(this.pending) : []),
      (this.inFlight = void 0),
      (this.pending = []),
      this.sleepResolve?.(),
      (this.sleepResolve = null);
    for (let t of this.backpressureResolvers) t();
    this.backpressureResolvers = [];
    for (let t of this.flushResolvers) t();
    this.flushResolvers = [];
  }
  async drain() {
    if (this.draining || this.closed) return;
    this.draining = true;
    let e = 0;
    try {
      while (this.pending.length > 0 && !this.closed) {
        let t = this.takeBatch();
        if (t.length === 0) continue;
        this.inFlight = t;
        try {
          await this.config.send(t), (e = 0);
        } catch (r) {
          if ((e++, this.closed)) break;
          if (this.config.maxConsecutiveFailures !== void 0 && e >= this.config.maxConsecutiveFailures) {
            this.droppedBatches++, this.config.onBatchDropped?.(t.length, e), (e = 0), this.releaseBackpressure();
            continue;
          }
          (this.inFlight = void 0), (this.pending = t.concat(this.pending));
          let o = r instanceof B ? r.retryAfterMs : void 0;
          await this.sleep(this.retryDelay(e, o));
          continue;
        } finally {
          this.inFlight = void 0;
        }
        this.releaseBackpressure();
      }
    } finally {
      if (((this.draining = false), this.pending.length === 0)) {
        for (let t of this.flushResolvers) t();
        this.flushResolvers = [];
      }
    }
  }
  takeBatch() {
    let { maxBatchSize: e, maxBatchBytes: t } = this.config;
    if (t === void 0) return this.pending.splice(0, e);
    let r = 0,
      o = 0;
    while (o < this.pending.length && o < e) {
      let d;
      try {
        d = Buffer.byteLength(b(this.pending[o]));
      } catch {
        this.pending.splice(o, 1);
        continue;
      }
      if (o > 0 && r + d > t) break;
      (r += d), o++;
    }
    return this.pending.splice(0, o);
  }
  retryDelay(e, t) {
    let r = Math.random() * this.config.jitterMs;
    if (t !== void 0 && Number.isFinite(t))
      return Math.max(this.config.baseDelayMs, Math.min(t, this.config.maxDelayMs)) + r;
    return Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs) + r;
  }
  releaseBackpressure() {
    let e = this.backpressureResolvers;
    this.backpressureResolvers = [];
    for (let t of e) t();
  }
  sleep(e) {
    return new Promise((t) => {
      (this.sleepResolve = t),
        setTimeout(
          (r, o) => {
            (r.sleepResolve = null), o();
          },
          e,
          this,
          t,
        );
    });
  }
}
var me = 1000,
  ge = 30000,
  Z = 45000,
  z = 30000,
  be = new Set([401, 403, 404]),
  Se = /\btext\/event-stream\b/i,
  N = 10,
  Ee = 500,
  ye = 8000;
function ke() {
  return true;
}
var Een = new Set(["workflow_launch", "queued_notification", "session_notice"]),
  Te = m(() => f({ event_type: i() })),
  we = "heartbeat_probe";
class sje {
  url;
  state = "idle";
  onData;
  onCloseCallback;
  onEventCallback;
  eventFilter;
  onEventVetoed;
  onHeartbeatProbe;
  onReconnected;
  onDiagnostic;
  headers;
  sessionId;
  refreshHeaders;
  getAuthHeaders;
  abortController = null;
  lastSequenceNum = 0;
  seenSequenceNums = new Set();
  reconnectAttempts = 0;
  hasEverConnected = false;
  reconnectStartTime = null;
  reconnectTimer = null;
  connectErrorsSeen = new Set();
  livenessTimer = null;
  lastLivenessEvidenceAtMs = 0;
  nonOriginPolicy;
  nonOriginStreak = null;
  postUrl;
  constructor(e, t = {}, { sessionId: r, refreshHeaders: o, initialSequenceNum: d, getAuthHeaders: u } = {}) {
    this.url = e;
    if (
      ((this.headers = t),
      (this.sessionId = r),
      (this.refreshHeaders = o),
      (this.getAuthHeaders = u ?? Jre),
      (this.postUrl = Re(e)),
      d !== void 0 && d > 0)
    )
      this.lastSequenceNum = d;
    n(`SSETransport: SSE URL = ${e.href}`),
      n(`SSETransport: POST URL = ${this.postUrl}`),
      Y("info", "cli_sse_transport_initialized");
  }
  getLastSequenceNum() {
    return this.lastSequenceNum;
  }
  async connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") {
      n(`SSETransport: Cannot connect, current state is ${this.state}`, { level: "error" }),
        Y("error", "cli_sse_connect_failed");
      return;
    }
    this.state = "reconnecting";
    let e = Date.now(),
      t = new URL(this.url.href);
    if (this.lastSequenceNum > 0) t.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    let r = this.getAuthHeaders(),
      o = {
        ...this.headers,
        ...r,
        Accept: "text/event-stream",
        "anthropic-version": "2023-06-01",
        "anthropic-client-platform": Cg(),
        "User-Agent": Ka(),
      };
    if ((ee(o, r), this.lastSequenceNum > 0)) o["Last-Event-ID"] = String(this.lastSequenceNum);
    n(`SSETransport: Opening ${t.href}`), Y("info", "cli_sse_connect_opening");
    let d = new AbortController();
    this.abortController = d;
    try {
      let u = await fetch(t.href, { headers: o, signal: d.signal });
      if (!u.ok) {
        let S = u.status === 403 ? w8e((M) => u.headers.get(M)) : void 0;
        if ((await R1(u, { timeoutMs: qot }), d.signal.aborted)) return;
        let T = Date.now(),
          R = this.advanceNonOriginStreak(S, T),
          k = R !== null && this.nonOriginPolicy !== void 0 && T - R.startedAtMs < this.nonOriginPolicy.windowMs,
          A = be.has(u.status) && !k;
        if (
          (n(
            `SSETransport: HTTP ${u.status}${A ? " (permanent)" : ""}${S ? ` source=${S}` : ""}${k ? ` (not origin \u2014 retrying; attempt ${R?.attempts})` : ""}`,
            { level: "error" },
          ),
          Y("error", "cli_sse_connect_http_error", {
            status: u.status,
            ...(S !== void 0 && { source: S }),
            ...(R !== null && { retried: k }),
          }),
          this.connectErrorsSeen.add(`http_${u.status}`),
          this.diagConnectFailure(`HTTP ${u.status}${A ? " (permanent)" : ""}`, e),
          A)
        ) {
          (this.nonOriginStreak = null),
            (this.state = "closed"),
            this.onCloseCallback?.(
              u.status,
              S === void 0
                ? void 0
                : R === null
                  ? { rejectSource: S }
                  : {
                      rejectSource: R.source,
                      streak: { source: R.source, attempts: R.attempts, streakMs: T - R.startedAtMs },
                    },
            );
          return;
        }
        this.handleConnectionError();
        return;
      }
      if (!u.body) {
        n("SSETransport: No response body"),
          this.connectErrorsSeen.add("no_response_body"),
          this.diagConnectFailure("no response body", e),
          this.handleConnectionError();
        return;
      }
      let v = Date.now() - e;
      if (
        (n("SSETransport: Connected"),
        Y("info", "cli_sse_connect_connected", { duration_ms: v }),
        this.reconnectAttempts === 0)
      )
        Wi("sse_connect_ms", v, e - performance.timeOrigin);
      if (this.reconnectAttempts > 0) {
        let S = this.reconnectStartTime ? Math.round((Date.now() - this.reconnectStartTime) / 1000) : 0;
        this.onDiagnostic?.(
          `SSE reconnected after ${this.reconnectAttempts} attempt(s), ${S}s downtime` +
            (this.connectErrorsSeen.size > 0 ? `, errors=[${[...this.connectErrorsSeen].join(",")}]` : ""),
        );
      } else this.onDiagnostic?.(`SSE connected in ${v}ms`);
      this.connectErrorsSeen.clear();
      let _ = this.hasEverConnected;
      (this.hasEverConnected = true),
        (this.state = "connected"),
        (this.reconnectAttempts = 0),
        (this.reconnectStartTime = null),
        this.resetLivenessTimer();
      let w = Se.test(u.headers.get("content-type") ?? "");
      if (_)
        try {
          this.onReconnected?.();
        } catch (S) {
          n(`SSETransport: onReconnected handler threw: ${l(S)}`, { level: "error" }),
            Y("error", "cli_sse_reconnected_handler_threw");
        }
      await this.readStream(u.body, w);
    } catch (u) {
      if (this.abortController?.signal.aborted) return;
      n(`SSETransport: Connection error: ${l(u)}`, { level: "error" }),
        Y("error", "cli_sse_connect_error"),
        this.connectErrorsSeen.add("fetch_failed"),
        this.diagConnectFailure(l(u), e),
        this.handleConnectionError();
    }
  }
  advanceNonOriginStreak(e, t) {
    let r = this.nonOriginPolicy;
    if (r === void 0 || e === void 0) return null;
    if (!lre(e)) return (this.nonOriginStreak = null), null;
    let o = this.nonOriginStreak;
    if (o === null || t - o.lastAtMs > r.maxGapMs)
      (o = { source: e, startedAtMs: t, lastAtMs: t, attempts: 0 }), (this.nonOriginStreak = o);
    return o.attempts++, (o.lastAtMs = t), o;
  }
  settleNonOriginStreakRecovered() {
    let e = this.nonOriginStreak;
    if (e === null) return;
    this.nonOriginStreak = null;
    let t = { source: e.source, attempts: e.attempts, streakMs: Date.now() - e.startedAtMs };
    Y("info", "cli_sse_nonorigin_403_recovered", { source: t.source, attempts: t.attempts, streak_ms: t.streakMs });
    try {
      this.nonOriginPolicy?.onRecovered?.(t);
    } catch (r) {
      n(`SSETransport: onRecovered handler threw: ${l(r)}`, { level: "error" });
    }
  }
  diagConnectFailure(e, t) {
    if (!this.onDiagnostic) return;
    let r = this.reconnectAttempts + 1;
    if (r > 3 && r % 10 !== 0) return;
    let o = Date.now() - t,
      d = this.reconnectStartTime ? `, ${Math.round((Date.now() - this.reconnectStartTime) / 1000)}s reconnecting` : "",
      u = this.connectErrorsSeen.size > 1 ? `, errors=[${[...this.connectErrorsSeen].join(",")}]` : "";
    this.onDiagnostic(`SSE connect failed (${e}) attempt=${r} took=${o}ms${d}${u}`);
  }
  async readStream(e, t) {
    let r = e.getReader(),
      o = new cje();
    try {
      while (true) {
        let { done: d, value: u } = await r.read();
        if (d) break;
        for (let v of o.push(u)) {
          if ((this.resetLivenessTimer(), this.nonOriginStreak !== null && t)) this.settleNonOriginStreakRecovered();
          if (v.id && v.event !== "ephemeral_event") {
            let _ = parseInt(v.id, 10);
            if (!isNaN(_)) {
              if (this.seenSequenceNums.has(_))
                n(
                  `SSETransport: DUPLICATE frame seq=${_} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`,
                  { level: "warn" },
                ),
                  Y("warn", "cli_sse_duplicate_sequence");
              else if ((this.seenSequenceNums.add(_), this.seenSequenceNums.size > 1000)) {
                let w = this.lastSequenceNum - 200;
                for (let S of this.seenSequenceNums) if (S < w) this.seenSequenceNums.delete(S);
              }
              if (_ > this.lastSequenceNum) this.lastSequenceNum = _;
            }
          }
          if (v.event && v.data) this.handleSSEFrame(v.event, v.data);
          else if (v.data)
            n("SSETransport: Frame has data: but no event: field \u2014 dropped", { level: "warn" }),
              Y("warn", "cli_sse_frame_missing_event_field");
        }
      }
    } catch (d) {
      if (this.abortController?.signal.aborted) return;
      n(`SSETransport: Stream read error: ${l(d)}`, { level: "error" }), Y("error", "cli_sse_stream_read_error");
    } finally {
      r.releaseLock();
    }
    if (this.state !== "closing" && this.state !== "closed") {
      if ((n("SSETransport: Stream ended, reconnecting"), this.state === "connected"))
        this.connectErrorsSeen.add("stream_ended"), this.onDiagnostic?.("SSE stream ended by server, reconnecting");
      this.handleConnectionError();
    }
  }
  handleSSEFrame(e, t) {
    if (e === "ephemeral_event") {
      this.handleEphemeralFrame(t);
      return;
    }
    if (e !== "client_event") {
      n(`SSETransport: Unexpected SSE event type '${e}' on worker stream`, { level: "warn" }),
        Y("warn", "cli_sse_unexpected_event_type", { event_type: e });
      return;
    }
    let r;
    try {
      r = V(t);
    } catch (d) {
      n(`SSETransport: Failed to parse client_event data: ${l(d)}`, { level: "error" });
      return;
    }
    let o = r.payload;
    if (o && typeof o === "object" && "type" in o) {
      let d = this.sessionId ? ` session=${this.sessionId}` : "",
        u = r.device_attestation_status ? ` attestation=${r.device_attestation_status}` : "";
      if (
        (n(
          `SSETransport: Event seq=${r.sequence_num} event_id=${r.event_id} event_type=${r.event_type} payload_type=${String(o.type)}${u}${d}`,
        ),
        Y("info", "cli_sse_message_received"),
        this.eventFilter?.(r))
      )
        Y("warn", "cli_sse_event_filtered");
      else if (typeof o.type === "string" && Een.has(o.type) && r.event_type !== o.type)
        Y("warn", "cli_sse_server_only_event_type_mismatch", { event_type: r.event_type, payload_type: o.type }),
          this.onEventVetoed?.(r);
      else if (o.type === "control_request" && r.source === "worker")
        Y("warn", "cli_sse_worker_control_request_dropped");
      else
        this.onData?.(
          b(o) +
            `
`,
        );
    } else n(`SSETransport: Ignoring client_event with no type in payload: event_id=${r.event_id}`);
    this.onEventCallback?.(r);
  }
  handleEphemeralFrame(e) {
    let t;
    try {
      t = V(e);
    } catch (o) {
      n(`SSETransport: Failed to parse ephemeral_event data: ${l(o)}`, { level: "error" });
      return;
    }
    let r = Te().safeParse(t);
    if (!r.success || r.data.event_type !== we) {
      Y("warn", "cli_sse_unexpected_ephemeral_type", { event_type: r.success ? r.data.event_type : "unparseable" });
      return;
    }
    Y("info", "cli_sse_heartbeat_probe_received");
    try {
      this.onHeartbeatProbe?.();
    } catch (o) {
      n(`SSETransport: onHeartbeatProbe handler threw: ${l(o)}`, { level: "error" }),
        Y("error", "cli_sse_heartbeat_probe_handler_threw");
    }
  }
  handleConnectionError() {
    if ((this.clearLivenessTimer(), this.state === "closing" || this.state === "closed")) return;
    this.abortController?.abort(), (this.abortController = null);
    let e = Date.now();
    if (!this.reconnectStartTime) this.reconnectStartTime = e;
    let t = e - this.reconnectStartTime;
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), (this.reconnectTimer = null);
    if (this.refreshHeaders) {
      let d = this.refreshHeaders();
      Object.assign(this.headers, d), ee(this.headers, d), n("SSETransport: Refreshed headers for reconnect");
    }
    (this.state = "reconnecting"), this.reconnectAttempts++;
    let r = Math.min(me * Math.pow(2, this.reconnectAttempts - 1), ge),
      o = Math.max(0, r + r * 0.25 * (2 * Math.random() - 1));
    n(
      `SSETransport: Reconnecting in ${Math.round(o)}ms (attempt ${this.reconnectAttempts}, ${Math.round(t / 1000)}s elapsed)`,
    ),
      Y("error", "cli_sse_reconnect_attempt", { reconnectAttempts: this.reconnectAttempts }),
      (this.reconnectTimer = setTimeout(() => {
        (this.reconnectTimer = null), this.connect();
      }, o));
  }
  onLivenessTimeout = () => {
    (this.livenessTimer = null),
      n("SSETransport: Liveness timeout, reconnecting", { level: "error" }),
      Y("error", "cli_sse_liveness_timeout"),
      this.connectErrorsSeen.add("liveness_timeout"),
      this.onDiagnostic?.(`SSE liveness timeout \u2014 no frame in ${Z / 1000}s, reconnecting`),
      this.abortController?.abort(),
      this.handleConnectionError();
  };
  resetLivenessTimer() {
    (this.lastLivenessEvidenceAtMs = Date.now()),
      this.clearLivenessTimer(),
      (this.livenessTimer = setTimeout(this.onLivenessTimeout, Z));
  }
  clearLivenessTimer() {
    if (this.livenessTimer) clearTimeout(this.livenessTimer), (this.livenessTimer = null);
  }
  async write(e) {
    let t = this.getAuthHeaders();
    if (Object.keys(t).length === 0) {
      n("SSETransport: No session token available for POST"), Y("warn", "cli_sse_post_no_token");
      return;
    }
    let r = {
      ...t,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": Cg(),
      "User-Agent": Ka(),
    };
    n(`SSETransport: POST body keys=${Object.keys(e).join(",")}`);
    for (let o = 1; o <= N; o++) {
      try {
        let u = await st.post(this.postUrl, e, { headers: r, validateStatus: ke });
        if (u.status === 200 || u.status === 201) {
          n(`SSETransport: POST success type=${e.type}`);
          return;
        }
        if (
          (n(`SSETransport: POST ${u.status} body=${b(u.data).slice(0, 200)}`),
          u.status >= 400 && u.status < 500 && u.status !== 429)
        ) {
          n(`SSETransport: POST returned ${u.status} (client error), not retrying`),
            Y("warn", "cli_sse_post_client_error", { status: u.status });
          return;
        }
        n(`SSETransport: POST returned ${u.status}, attempt ${o}/${N}`),
          Y("warn", "cli_sse_post_retryable_error", { status: u.status, attempt: o });
      } catch (u) {
        n(`SSETransport: POST error: ${l(u)}, attempt ${o}/${N}`),
          Y("warn", "cli_sse_post_network_error", { attempt: o });
      }
      if (o === N) {
        n(`SSETransport: POST failed after ${N} attempts, continuing`), Y("warn", "cli_sse_post_retries_exhausted");
        return;
      }
      let d = Math.min(Ee * Math.pow(2, o - 1), ye);
      await ne(d);
    }
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  isReadStreamRecentlyAlive() {
    return this.state === "connected" && Date.now() - this.lastLivenessEvidenceAtMs < z;
  }
  isClosedStatus() {
    return this.state === "closed";
  }
  setOnData(e) {
    this.onData = e;
  }
  setOnClose(e) {
    this.onCloseCallback = e;
  }
  setNonOriginRejectionPolicy(e) {
    this.nonOriginPolicy = e;
  }
  setOnEvent(e) {
    this.onEventCallback = e;
  }
  setOnDiagnostic(e) {
    this.onDiagnostic = e;
  }
  setEventFilter(e) {
    this.eventFilter = e;
  }
  setOnEventVetoed(e) {
    this.onEventVetoed = e;
  }
  setOnHeartbeatProbe(e) {
    this.onHeartbeatProbe = e;
  }
  setOnReconnected(e) {
    this.onReconnected = e;
  }
  close() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), (this.reconnectTimer = null);
    this.clearLivenessTimer(),
      (this.state = "closing"),
      (this.nonOriginStreak = null),
      this.abortController?.abort(),
      (this.abortController = null);
  }
  [Symbol.dispose]() {
    this.close();
  }
}
function ee(e, t) {
  if (t.Cookie) delete e.Authorization;
  if (t.Authorization) delete e.Cookie, delete e["X-Organization-Uuid"];
}
function Re(e) {
  let t = e.pathname;
  if (t.endsWith("/stream")) t = t.slice(0, -7);
  return `${e.protocol}//${e.host}${t}`;
}
class W {
  inflight = null;
  pending = null;
  closed = false;
  config;
  constructor(e) {
    this.config = e;
  }
  enqueue(e) {
    if (this.closed) return;
    (this.pending = this.pending ? te(this.pending, e) : e), this.drain();
  }
  close() {
    (this.closed = true), (this.pending = null);
  }
  async flush() {
    while (!this.closed)
      if (this.inflight) await this.inflight;
      else if (this.pending) await this.drain();
      else return true;
    return false;
  }
  async drain() {
    if (this.inflight || this.closed) return;
    if (!this.pending) return;
    let e = this.pending;
    (this.pending = null),
      (this.inflight = this.sendWithRetry(e).then(() => {
        if (((this.inflight = null), this.pending && !this.closed)) this.drain();
      }));
  }
  async sendWithRetry(e) {
    let t = e,
      r = 0;
    while (!this.closed) {
      if (await this.config.send(t)) return;
      if ((r++, await ne(this.retryDelay(r)), this.pending && !this.closed))
        (t = te(t, this.pending)), (this.pending = null);
    }
  }
  retryDelay(e) {
    let t = Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs),
      r = Math.random() * this.config.jitterMs;
    return t + r;
  }
}
function te(e, t) {
  let r = { ...e };
  for (let [o, d] of Object.entries(t))
    if (
      (o === "external_metadata" || o === "internal_metadata") &&
      r[o] &&
      typeof r[o] === "object" &&
      typeof d === "object" &&
      d !== null
    )
      r[o] = { ...r[o], ...d };
    else r[o] = d;
  return r;
}
var le = 20000,
  se = 1e4,
  ce = 15000,
  de = 5000,
  ue = de,
  Me = 5000,
  Ae = 300000,
  Ce = 2000,
  Ie = ce + ue + 2 * le,
  Pe = 5000,
  Be = 1.5,
  xe = 3,
  Oe = new Set([401, 403, 404, 429]),
  aje = 100;
function D(e) {
  return e === 400 || e === 413 || e === 422;
}
var Fe = 60000,
  Ne = new Set(["remote_tool_call", "remote_plumbing_call"]);
function $e(e) {
  let t = e.payload.type === "control_request" ? e.payload.request : void 0;
  return typeof t === "object" && t !== null && "subtype" in t && Ne.has(t.subtype);
}
function U(e) {
  let t = E(e);
  if (t) return t;
  if (e && typeof e === "object" && "name" in e && typeof e.name === "string") return e.name;
  return;
}
class The extends Error {
  reason;
  httpStatus;
  constructor(e, t) {
    super(`CCRClient init failed: ${e}`);
    this.reason = e;
    this.httpStatus = t;
  }
}
function aUn(e) {
  return e instanceof The && e.reason === "worker_register_failed" && !D(e.httpStatus);
}
var Le = 10,
  lUn = {
    epoch_conflict: 4090,
    superseded_by_worker: 4090,
    session_not_active: 4090,
    epoch_stale: 4090,
    session_not_found: 4090,
    token_expired: 4094,
    auth_exhausted: 4094,
  },
  qe = {
    epoch_conflict: true,
    superseded_by_worker: true,
    session_not_active: true,
    epoch_stale: true,
    session_not_found: false,
    token_expired: false,
    auth_exhausted: false,
  },
  je = 3,
  ze = 10,
  We = 3,
  Ge = 1e4;
function ie(e) {
  return e !== void 0 && e >= 400 && e < 500 ? "not_accepted" : "indeterminate";
}
function G(e) {
  let t = false,
    r = false;
  for (let o of e)
    if (o.payload.subtype === "task_notification") t = true;
    else if (o.payload.subtype === "background_tasks_changed") r = true;
  return t || r ? { has_terminal_bookend: t, has_level: r } : null;
}
function Ve(e) {
  let t = new Set(),
    r = 0;
  for (let o = 0; o < e.length; ) {
    let d = e[o];
    if (d.ephemeral || typeof d.payload.uuid !== "string") {
      o++;
      continue;
    }
    if (t.has(d.payload.uuid)) {
      e.splice(o, 1), r++;
      continue;
    }
    t.add(d.payload.uuid), o++;
  }
  return r;
}
function he(e) {
  return {
    tool_name: e.tool_name,
    display_tool_name: e.display_tool_name,
    action_description: e.action_description,
    raw_command: e.raw_command,
    request_id: e.request_id,
    tool_use_id: e.tool_use_id,
  };
}
var Ke = m(() =>
    f({
      tool_name: i().refine((e) => !e.startsWith("dialog:")),
      display_tool_name: i().nullish(),
      action_description: i(),
      raw_command: i().nullish(),
      request_id: i(),
      tool_use_id: i().min(1),
      suppressed_request_id: i().nullish(),
    }),
  ),
  Ye = m(() =>
    f({
      data: H(
        un({
          event_id: i(),
          event_type: i(),
          payload: De(i(), _e()),
          event_metadata: De(i(), _e()).nullish(),
          is_compaction: q(),
          created_at: i(),
          session_agent_id: i().optional(),
        }),
      ),
      next_cursor: i().optional(),
    }),
  ),
  Xe = m(() => f({ results: H(f({ event_id: i(), duplicate: q() })) }));
function Je(e) {
  let t = Ke().safeParse(e);
  if (!t.success) return;
  let r = t.data,
    o = yX(r);
  if (o === void 0) return;
  return {
    requestId: o,
    details: he({
      tool_name: r.tool_name,
      display_tool_name: r.display_tool_name ?? void 0,
      action_description: r.action_description,
      raw_command: r.raw_command ?? void 0,
      request_id: r.request_id,
      tool_use_id: r.tool_use_id,
    }),
  };
}
function Qe(e) {
  if (e === "pending") return { status: "idle", reason: "get_pending" };
  if (e.readFailed) return { status: "idle", reason: "get_failed" };
  let t = e.external?.pending_action;
  if (t === void 0 || t === null) return { status: "idle", reason: "no_pending_action" };
  let r = Je(t);
  if (!r) return { status: "idle", reason: "not_reportable" };
  return { status: "requires_action", reason: "park", ...r };
}
function Ze(e, t) {
  if (e === "requires_action") return { reported: e };
  let r = t.external?.pending_actions;
  return {
    reported: e,
    pendingActionOutstanding:
      t.readFailed === true ||
      (t.external?.pending_action !== void 0 && t.external.pending_action !== null) ||
      (Array.isArray(r) && r.length > 0),
  };
}
function Aen() {
  return a.CLAUDE_CODE_WORKER_EPOCH ?? NaN;
}
class lje {
  workerEpoch = 0;
  heartbeatIntervalMs;
  heartbeatJitterFraction;
  seedHeartbeatIntervalMs;
  advertiseHeartbeatProbeSupport;
  maxAdvisedIntervalMs;
  beatOnStaleReconnect;
  beatOnReactivation;
  idleTracker;
  unsubscribeIdleTracker;
  probeBeatSpacingMs;
  heartbeatTimer = null;
  heartbeatInFlight = false;
  lastHeartbeatSentAtMs = 0;
  lastHeartbeatSuccessAtMs = Date.now();
  lastHeartbeat429AtMs = 0;
  idleGrantLatched = false;
  reactivationBeatArmed = false;
  pendingForcedBeat = false;
  probeBeatTimer = null;
  pendingBeatTrigger = null;
  closed = false;
  goodbyeFlushed = Promise.resolve();
  epochSuperseded = false;
  lastEpochMismatchCause;
  epochMismatchCount = 0;
  consecutiveAuthFailures = 0;
  lastAuthRefreshBadReason = null;
  consecutiveNotFound = 0;
  consecutiveHeartbeatFailures = 0;
  currentState = null;
  reportParkAtInit;
  initStateGetOrderingBoundMs;
  parkReportedAtInitRequestId = void 0;
  sessionBaseUrl;
  sessionId;
  streamEventBuffer = [];
  streamEventTimer = null;
  streamEventFlushIntervalMs;
  noSubscriberStreamEventFlushIntervalMs = 0;
  lastReportedHasSubscribers;
  hasSubscribersReports = 0;
  streamedEphemeralSinceLastAssistant = false;
  workerState;
  eventUploader;
  internalEventUploader;
  onInternalBatchAcked;
  onInternalEventLaneClosed;
  deliveryUploader;
  pendingProcessingAcks = [];
  onEpochMismatch;
  onDurableEventsDropped;
  onDurableEventsUpload;
  getAuthHeaders;
  onDiagnostic;
  onRequestAuthOk;
  onHeartbeatLost;
  readTransport;
  nonOrigin403Transient;
  heartbeatStreakStartedAtMs = 0;
  heartbeatLostFiredForStreak = false;
  adoptRefreshedAuth;
  gzipRequestBodyFetch;
  constructor(e, t, r) {
    if (
      ((this.onDurableEventsDropped = r?.onDurableEventsDropped),
      (this.onDurableEventsUpload = r?.onDurableEventsUpload),
      (this.onEpochMismatch =
        r?.onEpochMismatch ??
        (() => {
          process.exit(1);
        })),
      (this.onHeartbeatLost = r?.onHeartbeatLost),
      (this.readTransport = e),
      (this.nonOrigin403Transient = r?.nonOrigin403Transient ?? false),
      (this.heartbeatIntervalMs = r?.heartbeatIntervalMs ?? le),
      (this.seedHeartbeatIntervalMs = this.heartbeatIntervalMs),
      (this.advertiseHeartbeatProbeSupport = r?.advertiseHeartbeatProbeSupport ?? false),
      (this.beatOnStaleReconnect = r?.beatOnStaleReconnect ?? false),
      (this.idleTracker = r?.idleTracker),
      (this.beatOnReactivation = (r?.beatOnReactivation ?? false) && this.idleTracker !== void 0),
      (this.probeBeatSpacingMs = r?.probeBeatSpacingMs ?? Pe),
      (this.heartbeatJitterFraction = r?.heartbeatJitterFraction ?? 0),
      (this.maxAdvisedIntervalMs = this.advertiseHeartbeatProbeSupport
        ? Math.floor(eT / (1 + this.heartbeatJitterFraction))
        : Ae),
      (this.streamEventFlushIntervalMs = ae("streamEventFlushIntervalMs", r?.streamEventFlushIntervalMs, aje)),
      this.setNoSubscriberStreamEventFlushIntervalMs(r?.noSubscriberStreamEventFlushIntervalMs),
      (this.getAuthHeaders = r?.getAuthHeaders ?? Jre),
      (this.onDiagnostic = r?.onDiagnostic),
      (this.onRequestAuthOk = r?.onRequestAuthOk),
      (this.adoptRefreshedAuth = r?.adoptRefreshedAuth),
      (this.gzipRequestBodyFetch = r?.gzipRequestBodyFetch),
      (this.reportParkAtInit = r?.reportParkAtInit ?? false),
      (this.initStateGetOrderingBoundMs = r?.initStateGetOrderingBoundMs ?? Ge),
      t.protocol !== "http:" && t.protocol !== "https:")
    )
      throw Error(`CCRClient: Expected http(s) URL, got ${t.protocol}`);
    let o = t.pathname.replace(/\/$/, "");
    (this.sessionBaseUrl = `${t.protocol}//${t.host}${o}`),
      (this.sessionId = o.split("/").pop() || ""),
      (this.workerState = new W({
        send: async (d) => {
          let u = await this.request("put", "/worker", { worker_epoch: this.workerEpoch, ...d }, "PUT worker");
          if (u.ok) {
            if (d.worker_status !== void 0) y("ccr_worker_state_publish");
            return true;
          }
          if (D(u.status)) {
            if (
              (Y("warn", "cli_worker_state_4xx_dropped", { status: u.status }),
              this.droppedWorkerStatePatchCount++,
              d.worker_status !== void 0)
            )
              g("ccr_worker_state_publish", "state_4xx_dropped");
            return true;
          }
          return false;
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
      })),
      (this.eventUploader = new F({
        maxBatchSize: 100,
        maxBatchBytes: 10485760,
        maxQueueSize: 1e5,
        send: async (d) => {
          let u = Ve(d);
          if (u > 0) n(`CCRClient: dropped ${u} repeated-uuid durable event(s) from one /worker/events POST`);
          let v = d.some($e) ? Fe : void 0;
          this.reportDurableUpload(d, "sending");
          let _ = this.noSubscriberStreamEventFlushIntervalMs > 0,
            w = this.hasSubscribersReports,
            S = await this.request(
              "post",
              "/worker/events",
              { worker_epoch: this.workerEpoch, events: d },
              "client events",
              { timeout: v, parseBody: _ },
            );
          if (S.ok) {
            let T = G(d);
            if (T) y("ccr_task_status_publish", T);
            if ((this.reportDurableUpload(d, "accepted"), _ && w === this.hasSubscribersReports))
              this.setHasSubscribers(S.data?.has_subscribers);
            return;
          }
          if ((this.reportDurableUpload(d, ie(S.status)), D(S.status))) {
            let T = d.filter((M) => !M.ephemeral),
              R = d.length - T.length,
              k = S.status;
            if (R > 0) {
              if (
                (n(
                  `CCRClient: client event POST rejected (${S.status}) \u2014 dropping ${R} ephemeral event(s), retrying ${T.length} durable event(s)`,
                  { level: "warn" },
                ),
                g("ccr_partial_messages", "ephemeral_dropped_on_4xx"),
                d.splice(0, d.length, ...T),
                T.length === 0)
              )
                return;
              this.reportDurableUpload(T, "sending");
              let M = await this.request(
                "post",
                "/worker/events",
                { worker_epoch: this.workerEpoch, events: T },
                "client events (durable retry)",
                { timeout: v },
              );
              if (M.ok) {
                let C = G(T);
                if (C) y("ccr_task_status_publish", C);
                this.reportDurableUpload(T, "accepted");
                return;
              }
              if ((this.reportDurableUpload(T, ie(M.status)), !D(M.status)))
                throw new B("client event POST failed", M.retryAfterMs);
              k = M.status;
            }
            if (T.length > 0) {
              this.droppedDurableEventBatches++;
              try {
                this.onDurableEventsDropped?.(T, k);
              } catch (M) {
                n(`CCRClient: onDurableEventsDropped threw; batch still dropped: ${l(M)}`, { level: "warn" });
              }
            }
            Y("warn", "cli_worker_events_4xx_dropped", { status: k, count: T.length });
            let A = G(T);
            if (A) p("ccr_task_status_publish", "status_events_4xx_dropped", A);
            return;
          }
          throw new B("client event POST failed", S.retryAfterMs);
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
      })),
      (this.internalEventUploader = new F({
        maxBatchSize: 100,
        maxBatchBytes: 10485760,
        maxQueueSize: 200,
        send: async (d) => {
          let u = await this.request(
            "post",
            "/worker/internal-events",
            { worker_epoch: this.workerEpoch, events: d },
            "internal events",
          );
          if (u.ok) {
            Promise.resolve()
              .then(() => this.onInternalBatchAcked?.(d))
              .catch(() => {});
            return;
          }
          if (D(u.status)) {
            this.droppedInternalEventBatches++,
              Y("warn", "cli_worker_internal_events_4xx_dropped", { status: u.status, count: d.length });
            return;
          }
          throw new B("internal event POST failed", u.retryAfterMs);
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
      })),
      (this.deliveryUploader = new F({
        maxBatchSize: 64,
        maxQueueSize: 64,
        send: async (d) => {
          let u = await this.request(
            "post",
            "/worker/events/delivery",
            { worker_epoch: this.workerEpoch, updates: d.map((v) => ({ event_id: v.eventId, status: v.status })) },
            "delivery batch",
          );
          if (u.ok) return;
          if (D(u.status)) {
            Y("warn", "cli_worker_delivery_4xx_dropped", { status: u.status, count: d.length });
            return;
          }
          throw new B("delivery POST failed", u.retryAfterMs);
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
      })),
      e.setOnEvent((d) => {
        this.reportDelivery(d.event_id, "received");
      }),
      e.setOnHeartbeatProbe(() => {
        this.setHasSubscribers(void 0), this.heartbeatNow("probe");
      }),
      e.setOnReconnected(() => this.resyncAfterReconnect()),
      (this.unsubscribeIdleTracker = this.beatOnReactivation
        ? this.idleTracker?.onActivity(() => this.sendReactivationBeat())
        : void 0);
  }
  async initialize(e) {
    let t = Date.now();
    if (Object.keys(this.getAuthHeaders()).length === 0) throw new The("no_auth_headers");
    if (e === void 0) e = Aen();
    if (isNaN(e)) throw new The("missing_epoch");
    this.workerEpoch = e;
    let r = this.getWorkerState(),
      o = await Promise.race([
        r.then(
          (A) => A.metadata,
          () => ({ external: null, internal: null, readFailed: true }),
        ),
        ne(this.initStateGetOrderingBoundMs).then(() => "pending"),
      ]),
      d = this.reportParkAtInit ? Qe(o) : void 0,
      u = { worker_status: "idle", worker_epoch: this.workerEpoch, external_metadata: { task_summary: null } },
      v =
        d === void 0
          ? {
              worker_status: "idle",
              worker_epoch: this.workerEpoch,
              external_metadata: { pending_action: null, pending_actions: null, task_summary: null },
            }
          : d.status === "requires_action"
            ? { ...u, worker_status: "requires_action", requires_action_details: d.details }
            : u,
      _ = { ok: false },
      w = new Set(),
      S = 10,
      T = 0;
    for (let A = 1; A <= S; A++) {
      if (((T = A), (_ = await this.request("put", "/worker", v, "PUT worker (init)")), _.ok || this.closed)) break;
      if (_.reason) w.add(_.reason);
      if (
        (this.onDiagnostic?.(
          `PUT /worker failed (${_.reason ?? "unknown"}) attempt=${A}/${S}, ${Math.round((Date.now() - t) / 1000)}s elapsed`,
        ),
        D(_.status))
      ) {
        if (d?.status === "requires_action") {
          (d = { status: "idle", reason: "park_rejected" }), (v = u), A--;
          continue;
        }
        break;
      }
      if (A < S) {
        let M = Math.min(500 * 2 ** (A - 1), 30000) + Math.random() * 500;
        await ne(M);
      }
    }
    if (!_.ok) {
      if (!this.closed)
        Y("error", "cli_worker_init_put_retries_exhausted"),
          this.onDiagnostic?.(
            `PUT /worker retries exhausted: ${T} attempts over ${Math.round((Date.now() - t) / 1000)}s, errors=[${[...w].join(",") || "unknown"}]`,
          );
      throw new The("worker_register_failed", _.status);
    }
    if (
      ((this.currentState = d?.status ?? "idle"),
      (this.parkReportedAtInitRequestId = d?.status === "requires_action" ? d.requestId : void 0),
      this.startHeartbeat(),
      !this.closed)
    )
      z9n(() => {
        this.writeEvent({ type: "keep_alive" });
      });
    if (
      (n(`CCRClient: initialized, epoch=${this.workerEpoch}`),
      Y("info", "cli_worker_lifecycle_initialized", {
        epoch: this.workerEpoch,
        duration_ms: Date.now() - t,
        reported_status: this.currentState,
      }),
      d)
    )
      s("tengu_ccr_init_park_report", { reported: c(d.status), reason: c(d.reason) });
    let { metadata: R, durationMs: k } = await r;
    if (!this.closed)
      Y("info", "cli_worker_state_restored", {
        duration_ms: k,
        had_state: R.external !== null || R.internal !== null,
        read_failed: R.readFailed === true,
      });
    return d ? { ...R, initParkReport: Ze(d.status, R) } : R;
  }
  async getWorkerState(e = "worker_state") {
    let t = Date.now(),
      r = this.getAuthHeaders();
    if (Object.keys(r).length === 0)
      return { metadata: { external: null, internal: null, readFailed: true }, durationMs: 0 };
    let o = await this.getWithRetry(`${this.sessionBaseUrl}/worker`, r, e);
    return {
      metadata: {
        external: o?.worker?.external_metadata ?? null,
        internal: o?.worker?.internal_metadata ?? null,
        ...(o === null && { readFailed: true }),
      },
      durationMs: Date.now() - t,
    };
  }
  async readWorkerState() {
    return (await this.getWorkerState("worker_state_reread")).metadata;
  }
  async request(e, t, r, o, { timeout: d = 1e4, parseBody: u = false, countTowardEscalation: v = true, signal: _ } = {}) {
    let w = this.getAuthHeaders();
    if (Object.keys(w).length === 0) return { ok: false, reason: "no_auth_headers" };
    let S = `${this.sessionBaseUrl}${t}`,
      T = _ ? Ja(_, { timeoutMs: d, refTimer: true }) : void 0;
    try {
      let R = {
          method: e.toUpperCase(),
          headers: {
            ...w,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": Cg(),
            "User-Agent": Ka(),
          },
          body: b(r),
          signal: T?.signal ?? AbortSignal.timeout(d),
          ...Ri({ url: S }),
        },
        k = this.gzipRequestBodyFetch ? await this.gzipRequestBodyFetch(S, R, (I) => fetch(S, I)) : await fetch(S, R);
      if (k.ok) {
        if (((this.consecutiveAuthFailures = 0), (this.consecutiveNotFound = 0), u))
          try {
            return { ok: true, data: await k.json() };
          } catch {
            return { ok: true };
          }
        return await R1(k), { ok: true };
      }
      let A;
      if (k.status === 409 && !this.closed) A = await K(k);
      else await R1(k);
      if (this.closed) return { ok: false, status: k.status, reason: `http_${k.status}` };
      if (k.status === 409) this.handleEpochMismatch(A);
      if (k.status === 404 && v) {
        if ((this.consecutiveNotFound++, this.consecutiveNotFound >= je))
          n(`CCRClient: ${this.consecutiveNotFound} consecutive 404s \u2014 session gone, exiting`, { level: "error" }),
            Y("error", "cli_worker_session_not_found"),
            this.onDiagnostic?.(`${this.consecutiveNotFound} consecutive 404s on ${t} \u2014 session gone, exiting`),
            this.escalateEpochMismatch("session_not_found");
      }
      let M = k.status === 403 ? w8e((I) => k.headers.get(I)) : void 0,
        C = this.nonOrigin403Transient && lre(M);
      if (k.status === 401 || k.status === 403) {
        let I = rl(),
          P = I ? cR(I) : null;
        if (P !== null && P * 1000 < Date.now())
          n(
            `CCRClient: session_token expired (exp=${new Date(P * 1000).toISOString()}) \u2014 no refresh was delivered, exiting`,
            { level: "error" },
          ),
            Y("error", "cli_worker_token_expired_no_refresh"),
            this.onDiagnostic?.(
              `session_token expired (exp=${new Date(P * 1000).toISOString()}) \u2014 no refresh delivered, exiting`,
            ),
            this.escalateEpochMismatch("token_expired");
        if (v && !C) {
          if ((this.consecutiveAuthFailures++, this.consecutiveAuthFailures >= Le))
            n(
              `CCRClient: ${this.consecutiveAuthFailures} consecutive auth failures with a valid-looking token \u2014 server-side auth unrecoverable, exiting`,
              { level: "error" },
            ),
              Y("error", "cli_worker_auth_failures_exhausted"),
              this.onDiagnostic?.(
                `${this.consecutiveAuthFailures} consecutive auth failures (HTTP ${k.status}) with valid-looking token \u2014 exiting`,
              ),
              this.escalateEpochMismatch("auth_exhausted");
        }
      }
      if (
        (n(`CCRClient: ${o} returned ${k.status}`, { level: "warn" }),
        Y("warn", "cli_worker_request_failed", {
          method: e,
          path: t,
          status: k.status,
          ...(M !== void 0 && { source: M }),
        }),
        k.status === 429)
      ) {
        let I = k.headers.get("retry-after"),
          P = I ? parseInt(I, 10) : NaN;
        if (!isNaN(P) && P >= 0)
          return { ok: false, retryAfterMs: P * 1000, status: k.status, reason: `http_${k.status}` };
      }
      return { ok: false, status: k.status, reason: `http_${k.status}`, ...(C && { nonOriginRefusal: C }) };
    } catch (R) {
      return (
        n(`CCRClient: ${o} failed: ${l(R)}`, { level: "warn" }),
        Y("warn", "cli_worker_request_error", { method: e, path: t, error_code: U(R) }),
        { ok: false, reason: `fetch_failed:${U(R)}` }
      );
    } finally {
      T?.cleanup();
    }
  }
  reportState(e, t) {
    if (e === this.currentState && !t) return;
    let r = this.parkReportedAtInitRequestId;
    if (
      ((this.parkReportedAtInitRequestId = void 0),
      r !== void 0 && e === "requires_action" && this.currentState === "requires_action" && yX(t) === r)
    )
      return;
    (this.currentState = e), this.workerState.enqueue({ worker_status: e, requires_action_details: t ? he(t) : null });
  }
  reportMetadata(e) {
    this.workerState.enqueue({ external_metadata: tt(e) });
  }
  reportInternalMetadata(e) {
    this.workerState.enqueue({ internal_metadata: e });
  }
  handleEpochMismatch(e) {
    let t = e ?? "epoch_conflict",
      r = e ?? "unattributed";
    n(`CCRClient: Epoch mismatch (409, reason=${r}), shutting down`, { level: "error" }),
      Y(
        "error",
        t === "epoch_stale"
          ? "cli_worker_epoch_stale"
          : t === "session_not_active"
            ? "cli_worker_session_not_active"
            : "cli_worker_epoch_mismatch",
        { reason: r },
      );
    let o =
      t === "epoch_stale"
        ? "stale registration (no live successor)"
        : t === "session_not_active"
          ? "session archived or no longer active"
          : t === "superseded_by_worker"
            ? "superseded by a newer worker"
            : "unattributed conflict, treated as superseded";
    this.onDiagnostic?.(`worker epoch mismatch (409) reason=${r} epoch=${this.workerEpoch} \u2014 ${o}, exiting`),
      this.escalateEpochMismatch(t);
  }
  escalateEpochMismatch(e) {
    return (
      (this.lastEpochMismatchCause = e), this.epochMismatchCount++, (this.epochSuperseded = true), this.onEpochMismatch(e)
    );
  }
  startHeartbeat() {
    if ((this.stopHeartbeat(), this.closed)) return;
    let e = () => {
        let r = this.heartbeatIntervalMs * this.heartbeatJitterFraction * (2 * Math.random() - 1);
        this.heartbeatTimer = setTimeout(t, this.heartbeatIntervalMs + r);
      },
      t = () => {
        if ((this.sendHeartbeat(), this.heartbeatTimer === null)) return;
        e();
      };
    e();
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) clearTimeout(this.heartbeatTimer), (this.heartbeatTimer = null);
  }
  clearProbeBeatTimer() {
    if (this.probeBeatTimer) clearTimeout(this.probeBeatTimer), (this.probeBeatTimer = null);
  }
  sendGoodbye() {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    if (this.currentState === "running") {
      Y("info", "cli_worker_goodbye_skipped_mid_turn");
      return;
    }
    this.goodbyeFlushed = this.request(
      "put",
      "/worker",
      { worker_epoch: this.workerEpoch, connection_status: "disconnected" },
      "PUT worker (goodbye)",
      { timeout: Ce, countTowardEscalation: false },
    )
      .then((e) => {
        if (e.ok) y("ccr_worker_goodbye");
        else if (e.status !== 409) g("ccr_worker_goodbye", e.status !== void 0 ? `http_${e.status}` : "send_failed");
      })
      .catch(() => {
        g("ccr_worker_goodbye", "send_threw");
      });
  }
  heartbeatNow(e = "probe") {
    if (this.closed) return;
    if (
      e === "probe"
        ? this.pendingBeatTrigger === "reactivate"
        : e === "reactivate" && this.pendingBeatTrigger === "probe"
    )
      this.restoreReactivationArm();
    if (
      e === "probe" ||
      this.pendingBeatTrigger === null ||
      (e === "reactivate" && this.pendingBeatTrigger !== "probe")
    )
      this.pendingBeatTrigger = e;
    if (this.heartbeatInFlight) {
      this.pendingForcedBeat = true;
      return;
    }
    let r = Date.now() - this.lastHeartbeatSentAtMs;
    if (r < this.probeBeatSpacingMs) {
      if (this.probeBeatTimer) return;
      this.probeBeatTimer = setTimeout(() => {
        (this.probeBeatTimer = null), this.refireForcedBeat();
      }, this.probeBeatSpacingMs - r);
      return;
    }
    let o = this.pendingBeatTrigger ?? e;
    (this.pendingBeatTrigger = null), this.clearProbeBeatTimer(), this.sendHeartbeat(o);
  }
  refireForcedBeat() {
    let e = this.pendingBeatTrigger ?? "probe";
    if (e === "resync_stale" && !this.staleReconnectBeatWanted()) {
      (this.pendingBeatTrigger = null), this.clearProbeBeatTimer();
      return;
    }
    if (e === "reactivate") {
      if ((this.restoreReactivationArm(), !this.reactivationBeatWanted())) {
        (this.pendingBeatTrigger = null), this.clearProbeBeatTimer();
        return;
      }
      this.reactivationBeatArmed = false;
    }
    this.heartbeatNow(e);
  }
  reactivationBeatWanted() {
    return (
      this.beatOnReactivation &&
      this.reactivationBeatArmed &&
      this.isIdleAdvised() &&
      Date.now() - this.lastHeartbeat429AtMs > this.seedHeartbeatIntervalMs
    );
  }
  restoreReactivationArm() {
    this.reactivationBeatArmed = this.idleGrantLatched;
  }
  armReactivationIfEarned(e, t) {
    if (this.beatOnReactivation && e !== void 0 && e >= t) this.reactivationBeatArmed = true;
  }
  sendReactivationBeat() {
    if (!this.reactivationBeatWanted()) return;
    (this.reactivationBeatArmed = false), this.heartbeatNow("reactivate");
  }
  isIdleAdvised() {
    return this.advertiseHeartbeatProbeSupport && this.idleGrantLatched;
  }
  applyShorterIntervalNow(e) {
    if (e >= this.heartbeatIntervalMs) return;
    if (((this.heartbeatIntervalMs = e), this.heartbeatTimer !== null)) this.startHeartbeat();
  }
  clampToTokenLifetime(e) {
    if (!this.advertiseHeartbeatProbeSupport || !this.adoptRefreshedAuth) return e;
    let t = rl(),
      r = t ? cR(t) : null;
    if (r === null) return e;
    let o = r * 1000 - Date.now() - Ie;
    if (o >= e) return e;
    return Math.max(se, o);
  }
  reclampCurrentIntervalToTokenLifetime() {
    let e = this.clampToTokenLifetime(this.heartbeatIntervalMs);
    if (e < this.heartbeatIntervalMs)
      Y("info", "cli_heartbeat_interval_updated", { from_ms: this.heartbeatIntervalMs, to_ms: e }),
        this.applyShorterIntervalNow(e);
  }
  resyncAfterReconnect() {
    if (this.isIdleAdvised()) {
      this.heartbeatNow("resync");
      return;
    }
    if (this.staleReconnectBeatWanted()) this.heartbeatNow("resync_stale");
  }
  staleReconnectBeatWanted() {
    if (!this.beatOnStaleReconnect || this.heartbeatIntervalMs <= this.seedHeartbeatIntervalMs) return false;
    let e = Date.now();
    if (e - this.lastHeartbeatSuccessAtMs <= this.heartbeatIntervalMs * Be) return false;
    return e - this.lastHeartbeat429AtMs > this.heartbeatIntervalMs;
  }
  resetHeartbeatStreak() {
    (this.consecutiveHeartbeatFailures = 0), (this.heartbeatLostFiredForStreak = false);
  }
  async sendHeartbeat(e) {
    if (this.closed) {
      this.stopHeartbeat();
      return;
    }
    if (this.heartbeatInFlight) return;
    if (((this.heartbeatInFlight = true), (this.lastHeartbeatSentAtMs = Date.now()), e === "resync_stale"))
      Y("info", "cli_heartbeat_reconnect_stale_beat", {
        gap_ms: this.lastHeartbeatSentAtMs - this.lastHeartbeatSuccessAtMs,
        interval_ms: this.heartbeatIntervalMs,
      });
    try {
      if (e === "reactivate") Y("info", "cli_heartbeat_reactivation_beat", { interval_ms: this.heartbeatIntervalMs });
      let t = this.idleTracker?.sampleIdleSeconds(),
        r = this.advertiseHeartbeatProbeSupport ? t : void 0,
        o = await this.request(
          "post",
          "/worker/heartbeat",
          {
            session_id: this.sessionId,
            worker_epoch: this.workerEpoch,
            ...(this.advertiseHeartbeatProbeSupport && {
              supports_heartbeat_probe: true,
              current_interval_seconds: Math.round(this.heartbeatIntervalMs / 1000),
              ...(r !== void 0 && { idle_seconds: r }),
            }),
          },
          "Heartbeat",
          {
            timeout: Math.max(Me, Math.min(ce, this.heartbeatIntervalMs * (1 - this.heartbeatJitterFraction) - de)),
            parseBody: true,
            countTowardEscalation: e === void 0,
          },
        );
      if (!o.ok) {
        if (e === "probe") p("ccr_heartbeat_probe", "beat_failed");
        else if (e === "resync_stale") p("ccr_reconnect_beat", "beat_failed");
        else if (e === "reactivate") p("ccr_reactivation_beat", "beat_failed");
        if (o.status === 429) {
          if (((this.lastHeartbeat429AtMs = Date.now()), e === "reactivate")) this.restoreReactivationArm();
        }
        if (this.isIdleAdvised() && o.status !== 429)
          Y("warn", "cli_heartbeat_idle_reverted_on_failure", { status: o.status }),
            (this.idleGrantLatched = false),
            (this.reactivationBeatArmed = false),
            this.applyShorterIntervalNow(this.seedHeartbeatIntervalMs);
        if (
          (this.reclampCurrentIntervalToTokenLifetime(), o.status !== void 0 && Oe.has(o.status) && !o.nonOriginRefusal)
        ) {
          this.resetHeartbeatStreak();
          return;
        }
        if (!this.readTransport.isReadStreamRecentlyAlive()) {
          this.resetHeartbeatStreak();
          return;
        }
        if (this.consecutiveHeartbeatFailures === 0) this.heartbeatStreakStartedAtMs = Date.now();
        if (
          (this.consecutiveHeartbeatFailures++,
          !this.heartbeatLostFiredForStreak &&
            this.consecutiveHeartbeatFailures >= xe &&
            Date.now() - this.heartbeatStreakStartedAtMs >= z)
        ) {
          this.heartbeatLostFiredForStreak = true;
          try {
            this.onHeartbeatLost?.();
          } catch (v) {
            h(v);
          }
        }
        return;
      }
      if (
        (this.resetHeartbeatStreak(),
        (this.lastHeartbeatSuccessAtMs = this.lastHeartbeatSentAtMs),
        this.onRequestAuthOk?.(),
        e === "probe")
      )
        y("ccr_heartbeat_probe");
      else if (e === "resync_stale") y("ccr_reconnect_beat");
      else if (e === "reactivate") y("ccr_reactivation_beat");
      if ((n("CCRClient: Heartbeat sent"), o.data?.refreshed_auth && this.adoptRefreshedAuth))
        try {
          let v = false,
            _ = this.adoptRefreshedAuth(o.data.refreshed_auth.expires_in_seconds);
          _.then(
            (T) => {
              if (v && T.adopted)
                (this.lastAuthRefreshBadReason = null),
                  y("ccr_worker_auth_refresh"),
                  Y("info", "cli_heartbeat_refreshed_auth_late_adopted");
            },
            () => {},
          );
          let w = await jt(_, Math.min(ue, this.heartbeatIntervalMs)),
            S;
          if (w === void 0) (v = true), (S = { adopted: false, reason: "adopt_timeout" });
          else S = w;
          if (
            (Y("info", "cli_heartbeat_refreshed_auth_signal", {
              adopted: S.adopted,
              reason: S.reason,
              expires_in_seconds: o.data.refreshed_auth.expires_in_seconds,
            }),
            S.adopted)
          )
            y("ccr_worker_auth_refresh"), (this.lastAuthRefreshBadReason = null);
          else if (S.reason && S.reason !== "unchanged" && S.reason !== this.lastAuthRefreshBadReason)
            (this.lastAuthRefreshBadReason = S.reason), p("ccr_worker_auth_refresh", S.reason);
        } catch {
          if (this.lastAuthRefreshBadReason !== "adopt_threw")
            (this.lastAuthRefreshBadReason = "adopt_threw"), p("ccr_worker_auth_refresh", "adopt_threw");
          Y("error", "cli_heartbeat_refreshed_auth_adopt_threw");
        }
      let d = o.data?.heartbeat_interval_seconds;
      if (typeof d !== "number" || !Number.isFinite(d) || d <= 0) {
        if (this.idleGrantLatched) this.armReactivationIfEarned(r, this.heartbeatIntervalMs / 1000);
        this.reclampCurrentIntervalToTokenLifetime();
        return;
      }
      if (this.advertiseHeartbeatProbeSupport) {
        let v = d * 1000 > this.seedHeartbeatIntervalMs;
        if (v) this.armReactivationIfEarned(r, d);
        else this.reactivationBeatArmed = false;
        this.idleGrantLatched = v;
      }
      let u = this.clampToTokenLifetime(Math.min(Math.max(d * 1000, se), this.maxAdvisedIntervalMs));
      if (u === this.heartbeatIntervalMs) return;
      if (
        (Y("info", "cli_heartbeat_interval_updated", { from_ms: this.heartbeatIntervalMs, to_ms: u }),
        u < this.heartbeatIntervalMs)
      )
        this.applyShorterIntervalNow(u);
      else this.heartbeatIntervalMs = u;
    } finally {
      if (((this.heartbeatInFlight = false), this.pendingForcedBeat && !this.closed))
        (this.pendingForcedBeat = false), this.refireForcedBeat();
    }
  }
  reportDurableUpload(e, t) {
    if (this.onDurableEventsUpload === void 0) return;
    let r = e.filter((o) => !o.ephemeral);
    if (r.length === 0) return;
    try {
      this.onDurableEventsUpload(r, t);
    } catch (o) {
      n(`CCRClient: onDurableEventsUpload(${t}) threw; the batch's fate is unchanged: ${l(o)}`, { level: "warn" });
    }
  }
  writeEvent(e) {
    return this.writeEvents([e]);
  }
  async writeEvents(e) {
    let t = [];
    for (let r of e) {
      if (this.noSubscriberStreamEventFlushIntervalMs > 0 && this.streamEventFlushIntervalMs > 0 && oe(r)) {
        this.bufferEphemeral(r);
        continue;
      }
      if (r.type === "stream_event") {
        if (((this.streamedEphemeralSinceLastAssistant = true), this.streamEventFlushIntervalMs <= 0)) {
          if (Buffer.byteLength(b(r)) <= x) t.push({ payload: r, ephemeral: true });
          else g("ccr_partial_messages", "oversize_ephemeral_skipped");
          continue;
        }
        this.bufferEphemeral(r);
        continue;
      }
      if ((t.push(...this.takeStreamEventBuffer()), r.type === "assistant" && this.streamedEphemeralSinceLastAssistant))
        y("ccr_partial_messages"), (this.streamedEphemeralSinceLastAssistant = false);
      t.push(this.toClientEvent(r));
    }
    if (t.length > 0) await this.eventUploader.enqueue(t);
  }
  toClientEvent(e) {
    let t = e,
      r = t.historical === true,
      o = oe(e);
    return {
      payload: { ...t, uuid: typeof t.uuid === "string" ? t.uuid : re() },
      ...(r && { historical: true }),
      ...(o && { ephemeral: true }),
    };
  }
  setNoSubscriberStreamEventFlushIntervalMs(e) {
    let t = ae("noSubscriberStreamEventFlushIntervalMs", e, 0);
    if (t === this.noSubscriberStreamEventFlushIntervalMs) return;
    (this.noSubscriberStreamEventFlushIntervalMs = t), this.setHasSubscribers(void 0);
  }
  bufferEphemeral(e) {
    if ((this.streamEventBuffer.push(e), !this.streamEventTimer))
      this.streamEventTimer = setTimeout(
        () => void this.flushStreamEventBuffer(),
        this.lastReportedHasSubscribers === false
          ? Math.max(this.noSubscriberStreamEventFlushIntervalMs, this.streamEventFlushIntervalMs)
          : this.streamEventFlushIntervalMs,
      );
  }
  setHasSubscribers(e) {
    this.hasSubscribersReports++;
    let t = typeof e === "boolean" ? e : void 0,
      r = this.lastReportedHasSubscribers;
    if (((this.lastReportedHasSubscribers = t), r === false && t !== false && this.streamEventTimer))
      this.flushStreamEventBuffer();
  }
  async flushStreamEventBuffer() {
    let e = this.takeStreamEventBuffer();
    if (e.length > 0) await this.eventUploader.enqueue(e);
  }
  takeStreamEventBuffer() {
    if (this.streamEventTimer) clearTimeout(this.streamEventTimer), (this.streamEventTimer = null);
    if (this.streamEventBuffer.length === 0) return [];
    let e = [],
      t,
      r = 0;
    for (let v of this.streamEventBuffer) {
      if (v.type === "stream_event") {
        e.push(v);
        continue;
      }
      (r =
        (t !== void 0 && v.estimated_tokens - v.estimated_tokens_delta === t.estimated_tokens ? r : 0) +
        v.estimated_tokens_delta),
        (t = v);
    }
    this.streamEventBuffer = [];
    let u = J(e)
      .filter((v) => {
        if (Buffer.byteLength(b(v)) <= x) return true;
        return (
          n(`CCRClient: dropping oversize ephemeral stream_event (>${x} bytes)`, { level: "warn" }),
          g("ccr_partial_messages", "oversize_ephemeral_skipped"),
          false
        );
      })
      .map((v) => ({ payload: v, ephemeral: true }));
    if (t) u.push(this.toClientEvent({ ...t, estimated_tokens_delta: r }));
    return u;
  }
  async writeInternalEvent(e, t, { isCompaction: r = false, agentId: o, preservedEventIds: d } = {}) {
    let u = d,
      v = Q(t);
    if (u && u.length > O)
      s("tengu_ccr_preserved_event_ids_clamped", { originalCount: u.length, cap: O, payloadClamped: v !== null }),
        (u = u.slice(-O));
    let _ = v ?? t,
      w = {
        payload: { type: e, ..._, uuid: typeof _.uuid === "string" ? _.uuid : re() },
        ...(r && { is_compaction: true }),
        ...(o && { session_agent_id: o }),
        ...(u?.length && { preserved_event_ids: u }),
      };
    await this.internalEventUploader.enqueue(w);
  }
  flushInternalEvents() {
    return this.internalEventUploader.flush();
  }
  async postInternalEventsBatch(e, t = {}) {
    let r = this.refuseInternalEventsCall(true);
    if (r) return r;
    let o = this.epochMismatchCount;
    try {
      let d = await this.request(
        "post",
        "/worker/internal-events",
        { worker_epoch: this.workerEpoch, events: e },
        "internal events batch",
        { parseBody: true, countTowardEscalation: false, signal: t.signal },
      );
      if (d.ok) {
        let u = Xe().safeParse(d.data);
        return { ok: true, results: u.success ? u.data.results : void 0 };
      }
      return this.internalEventsFailure(d, o);
    } catch (d) {
      return this.internalEventsFailure({ reason: `fetch_failed:${U(d)}` }, o);
    }
  }
  async getInternalEventsPage(e, t = {}) {
    let r = this.refuseInternalEventsCall(false);
    if (r) return r;
    let o = new URL(`${this.sessionBaseUrl}/worker/internal-events`);
    if (e.limit !== void 0) o.searchParams.set("limit", String(e.limit));
    if (e.agentId) o.searchParams.set("session_agent_id", e.agentId);
    if (e.subagents) o.searchParams.set("subagents", "true");
    if (e.cursor) o.searchParams.set("cursor", e.cursor);
    else if (e.afterEventId) o.searchParams.set("after_event_id", e.afterEventId);
    let d = this.epochMismatchCount,
      u;
    try {
      let v = this.getAuthHeaders();
      if (Object.keys(v).length === 0) return { ok: false, reason: "no_auth_headers" };
      u = t.signal ? Ja(t.signal, { timeoutMs: 30000, refTimer: true }) : void 0;
      let _ = await fetch(o, {
        headers: { ...v, "anthropic-version": "2023-06-01", "anthropic-client-platform": Cg(), "User-Agent": Ka() },
        signal: u?.signal ?? AbortSignal.timeout(30000),
        ...Ri({ url: o.toString() }),
      });
      if (_.ok) {
        let k;
        try {
          k = await _.json();
        } catch (C) {
          if (!(C instanceof SyntaxError)) throw C;
        }
        let A = Ye().safeParse(k);
        if (!A.success)
          return (
            Y("warn", "cli_worker_internal_events_page_foreign"), { ok: false, status: _.status, reason: "foreign_body" }
          );
        let M = Number(_.headers.get("content-length") ?? Number.NaN);
        return {
          ok: true,
          data: A.data.data,
          ...(A.data.next_cursor && { nextCursor: A.data.next_cursor }),
          bytes: Number.isFinite(M) ? M : null,
        };
      }
      let w, S, T, R;
      if (_.status === 409) {
        let k = await K(_);
        if (this.closed) R = k ?? this.lastEpochMismatchCause ?? "epoch_conflict";
        else
          try {
            this.handleEpochMismatch(k);
          } catch (A) {
            n(`CCRClient: onEpochMismatch threw during a page read: ${l(A)}`);
          }
      } else if (_.status === 404)
        try {
          let k = await _.json();
          if (typeof k?.error?.type === "string") w = k.error.type;
          if (typeof k?.error?.resource_type === "string") S = k.error.resource_type;
        } catch {}
      else {
        if (_.status === 429) {
          let k = parseInt(_.headers.get("retry-after") ?? "", 10);
          if (!isNaN(k) && k >= 0) T = k * 1000;
        }
        _.body?.cancel();
      }
      return (
        n(`CCRClient: internal events page returned ${_.status}`, { level: "warn" }),
        Y("warn", "cli_worker_request_failed", { method: "get", path: "/worker/internal-events", status: _.status }),
        this.internalEventsFailure({ status: _.status, retryAfterMs: T, reason: `http_${_.status}` }, d, {
          errorType: w,
          resourceType: S,
          closedConflict: R,
        })
      );
    } catch (v) {
      return (
        n(`CCRClient: internal events page failed: ${l(v)}`, { level: "warn" }),
        this.internalEventsFailure({ reason: `fetch_failed:${U(v)}` }, d)
      );
    } finally {
      u?.cleanup();
    }
  }
  refuseInternalEventsCall(e) {
    if (this.closed)
      return {
        ok: false,
        reason: "client_closed",
        ...(this.lastEpochMismatchCause && { conflict: this.lastEpochMismatchCause }),
      };
    if (e && this.workerEpoch <= 0) return { ok: false, reason: "not_initialized" };
    return;
  }
  internalEventsFailure(e, t, { errorType: r, resourceType: o, closedConflict: d } = {}) {
    let u =
        d ??
        (this.epochMismatchCount > t
          ? this.lastEpochMismatchCause
          : e.status === 409
            ? (this.lastEpochMismatchCause ?? "epoch_conflict")
            : void 0),
      v = e.status ?? (u && qe[u] ? 409 : void 0);
    return {
      ok: false,
      reason: v === 409 ? "http_409" : (e.reason ?? "unknown"),
      ...(v !== void 0 && { status: v }),
      ...(e.retryAfterMs !== void 0 && { retryAfterMs: e.retryAfterMs }),
      ...(u && { conflict: u }),
      ...(r && { errorType: r }),
      ...(o && { resourceType: o }),
    };
  }
  droppedInternalEventBatches = 0;
  get droppedInternalBatches() {
    return this.droppedInternalEventBatches;
  }
  flushDeliveryAcks() {
    return this.deliveryUploader.flush();
  }
  async flush() {
    return await this.flushStreamEventBuffer(), this.eventUploader.flush();
  }
  droppedDurableEventBatches = 0;
  get droppedDurableBatches() {
    return this.droppedDurableEventBatches;
  }
  takeUndeliveredClientEvents() {
    return this.eventUploader.takeUndelivered().filter((e) => !e.ephemeral);
  }
  discardUndeliveredClientEvents() {
    let e = this.eventUploader.peekUndelivered().filter((t) => !t.ephemeral);
    return this.eventUploader.discardUndelivered(), e;
  }
  adoptClientEvents(e) {
    if (e.length === 0) return;
    this.eventUploader.enqueue(e);
  }
  async flushWorkerState() {
    return this.workerState.flush();
  }
  droppedWorkerStatePatchCount = 0;
  get droppedWorkerStatePatches() {
    return this.droppedWorkerStatePatchCount;
  }
  async readInternalEvents(e) {
    return this.paginatedGet(
      "/worker/internal-events",
      { limit: "1000", ...(e && { after_event_id: e }) },
      "internal_events",
    );
  }
  async readSubagentInternalEvents() {
    return this.paginatedGet("/worker/internal-events", { subagents: "true", limit: "1000" }, "subagent_events");
  }
  async readAgentInternalEvents(e, t) {
    return this.paginatedGet("/worker/internal-events", { session_agent_id: e, limit: "1000" }, "agent_events", {
      maxAttempts: We,
      signal: t,
    });
  }
  async paginatedGet(e, t, r, o = {}) {
    let d = this.getAuthHeaders();
    if (Object.keys(d).length === 0) return null;
    let u = [],
      v,
      _ = 0,
      w = 0,
      S = null;
    do {
      let T = new URL(`${this.sessionBaseUrl}${e}`);
      for (let [M, C] of Object.entries(t)) T.searchParams.set(M, C);
      if (v) T.searchParams.set("cursor", v), T.searchParams.delete("after_event_id");
      let R = !v && t.after_event_id !== void 0,
        k,
        A = await this.getWithRetry(
          T.toString(),
          d,
          r,
          (M) => {
            _++, (S ??= M.headers.get("content-encoding"));
            let C = M.headers.get("content-length");
            if (C !== null && w !== null) w += Number(C);
            else w = null;
          },
          (M, C) => {
            if (!R) return;
            if (M === 400) k = "rejected";
            else if (C === "after_event_id_not_found") k = "not-found";
          },
          o,
        );
      if (!A) {
        if (k) {
          n(
            `CCRClient: after_event_id ${k === "rejected" ? "rejected by server (gate off)" : "not found (stale anchor)"} \u2014 refetching without anchor`,
            { level: "warn" },
          ),
            Y("warn", k === "rejected" ? "cli_worker_after_event_id_rejected" : "cli_worker_after_event_id_not_found", {
              context: r,
            });
          let { after_event_id: M, ...C } = t,
            I = await this.paginatedGet(e, C, r, o);
          if (!I) return null;
          return { ...I, anchorFallback: k };
        }
        return null;
      }
      for (let M of A.data ?? []) if (!iWn(M.payload)) u.push(M);
      v = A.next_cursor;
    } while (v);
    return (
      n(`CCRClient: Read ${u.length} internal events from ${e}${t.subagents ? " (subagents)" : ""}`),
      { events: u, stats: { pageCount: _, bytesReceived: w, contentEncoding: S ?? "none" } }
    );
  }
  async getWithRetry(e, t, r, o, d, { maxAttempts: u = ze, signal: v } = {}) {
    for (let _ = 1; _ <= u; _++) {
      if (v?.aborted) return null;
      let w;
      try {
        if (
          ((w = await fetch(e, {
            headers: { ...t, "anthropic-version": "2023-06-01", "anthropic-client-platform": Cg(), "User-Agent": Ka() },
            signal: v ? AbortSignal.any([AbortSignal.timeout(30000), v]) : AbortSignal.timeout(30000),
            ...Ri({ url: e }),
          })),
          w.ok)
        ) {
          let T = await w.json();
          return o?.(w), T;
        }
      } catch (T) {
        if (v?.aborted) return null;
        if ((n(`CCRClient: GET ${e} failed (attempt ${_}/${u}): ${l(T)}`, { level: "warn" }), _ < u)) {
          let R = Math.min(500 * 2 ** (_ - 1), 30000) + Math.random() * 500;
          await ne(R, v);
        }
        continue;
      }
      let S;
      if (w.status === 404 && d)
        try {
          let T = await w.json();
          if (typeof T?.error?.type === "string") S = T.error.type;
        } catch {}
      else if (w.status === 409) {
        if (this.closed) return await R1(w), null;
        let T = await K(w);
        if (!this.closed) this.handleEpochMismatch(T);
        return null;
      } else await R1(w);
      if (D(w.status) || S === "after_event_id_not_found")
        return (
          n(`CCRClient: GET ${e} returned ${w.status} \u2014 permanent, not retrying`, { level: "warn" }),
          d?.(w.status, S),
          null
        );
      if ((n(`CCRClient: GET ${e} returned ${w.status} (attempt ${_}/${u})`, { level: "warn" }), _ < u)) {
        let T = Math.min(500 * 2 ** (_ - 1), 30000) + Math.random() * 500;
        await ne(T, v);
      }
    }
    return (
      n("CCRClient: GET retries exhausted", { level: "error" }),
      Y("error", "cli_worker_get_retries_exhausted", { context: r }),
      null
    );
  }
  reportDelivery(e, t) {
    if (t === "received") this.setHasSubscribers(void 0);
    if (t === "processing") {
      if (this.closed) return;
      if (this.pendingProcessingAcks.push(e) === 1)
        queueMicrotask(() => {
          let r = this.pendingProcessingAcks;
          if (((this.pendingProcessingAcks = []), this.closed || r.length === 0)) return;
          this.request(
            "post",
            "/worker/events/delivery",
            { worker_epoch: this.workerEpoch, updates: r.map((o) => ({ event_id: o, status: "processing" })) },
            "processing ack",
          );
        });
      return;
    }
    this.deliveryUploader.enqueue({ eventId: e, status: t });
  }
  getWorkerEpoch() {
    return this.workerEpoch;
  }
  get internalEventsPending() {
    return this.internalEventUploader.pendingCount;
  }
  close(e) {
    this.closeExceptInternalEvents(e), this.internalEventUploader.close();
  }
  flushGoodbye() {
    return this.goodbyeFlushed;
  }
  closeExceptInternalEvents(e) {
    let t = this.closed;
    if (((this.closed = true), !t && e?.goodbye !== false)) this.sendGoodbye();
    if (
      (this.stopHeartbeat(), this.clearProbeBeatTimer(), this.unsubscribeIdleTracker?.(), V9n(), this.streamEventTimer)
    )
      clearTimeout(this.streamEventTimer), (this.streamEventTimer = null);
    (this.streamEventBuffer = []),
      (this.pendingProcessingAcks = []),
      this.workerState.close(),
      this.eventUploader.close({ retainUndelivered: e?.retainUndeliveredClientEvents === true }),
      this.deliveryUploader.close();
  }
  registerShutdownCleanup(e = { registerCleanup: vt, registerPreExitFlush: BC }) {
    e.registerCleanup(() => this.closeExceptInternalEvents()),
      e.registerPreExitFlush(async () => {
        await this.flushGoodbye();
        try {
          await jt(this.flushInternalEvents(), et);
        } finally {
          this.close(), this.onInternalEventLaneClosed?.();
        }
      });
  }
}
var et = 3000;
function tt(e) {
  let t = e.post_turn_summary;
  if (!rt(t) || t.status_category !== "blocked") return e;
  return { ...e, post_turn_summary: { ...t, status_category: "need_input" } };
}
function rt(e) {
  return e !== null && typeof e === "object" && "status_category" in e && typeof e.status_category === "string";
}
async function K(e) {
  let t = X(e.headers.get("x-ccr-conflict-reason"));
  if (t !== void 0) return await R1(e), t;
  try {
    let r = await e.json();
    return X(r?.error?.reason ?? r?.reason) ?? X(r?.error?.type);
  } catch {}
  return;
}
function X(e) {
  switch (e) {
    case "superseded_by_worker":
    case "epoch_stale":
    case "session_not_active":
      return e;
    default:
      return;
  }
}
function ae(e, t, r) {
  let o = typeof t === "string" ? Number(t) : t;
  if (typeof o === "number" && Number.isFinite(o)) return Math.min(Math.max(o, 0), 60000);
  if (t !== void 0) n(`CCRClient: non-finite ${e} (${typeof t}) \u2014 using ${r}ms`, { level: "warn" });
  return r;
}
function oe(e) {
  return e.type === "system" && "subtype" in e && e.subtype === "thinking_tokens";
}
function Bot(e) {
  let t = e?.isTurnRunning ?? (() => Oye() > 0),
    r = Ue(),
    o = Date.now();
  return {
    noteActivity() {
      o = Date.now();
      try {
        r.emit();
      } catch (d) {
        h(d);
      }
    },
    sampleIdleSeconds() {
      let d = Date.now();
      if (t()) return (o = d), 0;
      return Math.max(0, Math.floor((d - o) / 1000));
    },
    onActivity: r.subscribe,
  };
}
export { Een, sje, aje, The, aUn, lUn, Aen, lje, Bot };
