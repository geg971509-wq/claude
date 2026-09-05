// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, K, vQe, V0n, Le, mi, GC, $J } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Me } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { uo, IR, os } from "/$bunfs/root/chunk-ypdw393e.js";
import { V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Bc, Vh, p7e, On, dO, t0 } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Sm } from "/$bunfs/root/chunk-amem41jf.js";
import { Jbt } from "/$bunfs/root/chunk-4p81p1a6.js";
import { Li } from "/$bunfs/root/chunk-z5yhadgs.js";
import { T } from "/$bunfs/root/chunk-ma6kk3k0.js";
import { ai } from "/$bunfs/root/chunk-56sxk8k2.js";
import { j } from "/$bunfs/root/chunk-yz031c9r.js";
var v = m(() =>
  T.object({
    sub: T.string()
      .optional()
      .catch(void 0),
    email: T.string()
      .optional()
      .catch(void 0),
    groups: T.array(T.string())
      .optional()
      .catch(void 0),
  }).passthrough(),
);
function y(e) {
  let t = e.indexOf("."),
    r = e.indexOf(".", t + 1);
  if (t < 0 || r < 0) return null;
  try {
    let i = v().safeParse(V(Buffer.from(e.slice(t + 1, r), "base64url").toString("utf8")));
    return i.success ? i.data : null;
  } catch {
    return null;
  }
}
function e8n(e) {
  return GC(e) ? y(e.jwt)?.sub || void 0 : void 0;
}
var g = Object.freeze({}),
  D = new J(() => ({ jwt: void 0, attrs: g }));
function L2t() {
  let e = mi(),
    t = GC(e) ? e.jwt : void 0,
    r = D.of(G().host);
  if (t === r.jwt) return r.attrs;
  if (((r.jwt = t), !t)) return (r.attrs = g);
  let i = y(t);
  if (!i) return (r.attrs = g);
  let o = { "identity.source": "gateway-oidc" };
  if (i.sub) o["user.id"] = i.sub;
  if (i.email) o["user.email"] = i.email;
  if (i.groups && i.groups.length > 0) o["user.groups"] = i.groups.join(",");
  return (r.attrs = Object.freeze(o));
}
var k = {
  OTEL_METRICS_INCLUDE_SESSION_ID: true,
  OTEL_METRICS_INCLUDE_VERSION: false,
  OTEL_METRICS_INCLUDE_ACCOUNT_UUID: true,
  OTEL_METRICS_INCLUDE_ENTRYPOINT: false,
  OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES: true,
};
function p(e) {
  let t = k[e],
    r = process.env[e];
  if (r === void 0) return t;
  return Me(r);
}
function R(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r < 33 || r === 44 || r === 59 || r === 92 || r > 126) return false;
  }
  return true;
}
var b = 255,
  L = ai((e) => {
    if (!e) return {};
    let t = {};
    try {
      for (let r of e.split(",")) {
        let [i, o, ...u] = r.split("=");
        if (i === void 0 || o === void 0 || u.length > 0) continue;
        let s = i.trim(),
          c = o.trim().split(/^"|"$/).join("");
        if (s.length === 0 || s.length > b || !R(s)) throw Error("invalid resource attribute key");
        if (c.length > b || !R(c)) throw Error("invalid resource attribute value");
        t[s] = decodeURIComponent(c);
      }
    } catch {
      return {};
    }
    return t;
  });
function Swe() {
  let e = t0(),
    t = K(),
    r = L2t(),
    i = Object.keys(r).length > 0,
    o = {};
  if (p("OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES"))
    for (let [s, c] of Object.entries(L(a.OTEL_RESOURCE_ATTRIBUTES))) {
      if (i && (s.startsWith("user.") || s.startsWith("identity."))) continue;
      o[s] = c;
    }
  if (((o["user.id"] = e), p("OTEL_METRICS_INCLUDE_SESSION_ID"))) {
    if (((o["session.id"] = t), a.CLAUDE_CODE_REMOTE_SESSION_ID)) o["ccr.session.id"] = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  }
  if (p("OTEL_METRICS_INCLUDE_VERSION"))
    o["app.version"] = {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.252",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-08-31T16:02:57Z",
      GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
      HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "darwin",
    }.VERSION;
  if (p("OTEL_METRICS_INCLUDE_ENTRYPOINT")) {
    let s = Sm();
    if (s) o["app.entrypoint"] = s;
  }
  let u = dO() ?? On() ?? U();
  if (u) {
    let { organizationUuid: s, emailAddress: c, accountUuid: f } = u;
    if (s) o["organization.id"] = s;
    if (c) o["user.email"] = c;
    if (f && p("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
      o["user.account_uuid"] = f;
      let l = a.CLAUDE_CODE_ACCOUNT_TAGGED_ID || Jbt("user", f);
      if (l) o["user.account_id"] = l;
    }
  }
  if ((Object.assign(o, r), Vh.terminal)) o["terminal.type"] = Vh.terminal;
  return o;
}
function U() {
  if (!a.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let e = a.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (!e) return null;
  let r = e.replace(/^sk-ant-[a-z0-9]+-/, "").split(".");
  if (r.length !== 3 || !r[1]) return null;
  let i;
  try {
    i = JSON.parse(Buffer.from(r[1], "base64url").toString("utf8"));
  } catch {
    return null;
  }
  let o = (s) => (typeof s === "string" && s.length > 0 ? s : void 0),
    u = i.act ?? {};
  return {
    organizationUuid: o(i.organization_uuid),
    accountUuid: o(i.account_uuid),
    emailAddress: o(i.account_email) ?? o(u.email),
  };
}
var E = j(Li(), 1);
import { AsyncLocalStorage as N } from "async_hooks";
class I {
  als = new N();
  active() {
    return this.als.getStore() ?? E.ROOT_CONTEXT;
  }
  with(e, t, r, ...i) {
    let o = r == null ? t : t.bind(r);
    return this.als.run(e, o, ...i);
  }
  enterWith(e) {
    this.als.enterWith(e);
  }
  bind(e, t) {
    if (typeof t === "function") {
      let r = (...i) => this.with(e, () => t(...i));
      return Object.defineProperty(r, "length", { configurable: true, enumerable: false, writable: false, value: t.length }), r;
    }
    return t;
  }
  enable() {
    return this;
  }
  disable() {
    return this.als.disable(), this;
  }
}
var bX = new I();
class h {
  current = void 0;
}
var A = new J(() => new h());
function Kpn(e) {
  A.of(G().host).current = e;
}
function Xpn() {
  return A.of(G().host).current;
}
function M2t() {
  let e = bX.active();
  if (e !== E.ROOT_CONTEXT) return e;
  return Xpn() ?? e;
}
var d = j(Li(), 1),
  O = j(Bc(), 1);
class x {
  nextSequence = 0;
  warnedNoEventLogger = false;
}
var M = new J(() => new x());
function P() {
  return a.OTEL_LOG_USER_PROMPTS;
}
function $ze(e) {
  return P() ? e : "<REDACTED>";
}
function t8n() {
  return a.OTEL_LOG_ASSISTANT_RESPONSES ?? a.OTEL_LOG_USER_PROMPTS;
}
var F = new O.W3CTraceContextPropagator();
function z() {
  let e = M2t(),
    t = d.trace.getSpanContext(e);
  if (t && d.isSpanContextValid(t)) return e;
  if (Le() && a.TRACEPARENT)
    return F.extract(e, { traceparent: a.TRACEPARENT, tracestate: a.TRACESTATE }, d.defaultTextMapGetter);
  return;
}
async function Po(e, t = {}, r) {
  let i = M.of(G().host),
    o = { ...Swe(), "event.name": e, "event.timestamp": new Date().toISOString(), "event.sequence": i.nextSequence++ },
    u = $J();
  if (u) o["prompt.id"] = u;
  let s = a.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
  if (s) o["workspace.host_paths"] = s.split("|");
  Object.assign(o, p7e(r));
  for (let [w, C] of Object.entries(t)) if (C !== void 0) o[w] = C;
  let c = new Date(),
    f = z(),
    l = { timestamp: c, observedTimestamp: c, body: `claude_code.${e}`, attributes: o, ...(f && { context: f }) },
    S = vQe();
  if (S) {
    S.emit(l);
    return;
  }
  if (!V0n(l) && !i.warnedNoEventLogger)
    (i.warnedNoEventLogger = true),
      n(`[3P telemetry] Event dropped (no event logger initialized): ${e}`, { level: "warn" });
}
function I9(e) {
  if (e.from === e.to) return;
  Po("permission_mode_changed", { from_mode: e.from, to_mode: e.to, ...(e.trigger && { trigger: e.trigger }) });
}
function rue(e) {
  Po("compaction", {
    trigger: e.trigger,
    success: String(e.success),
    duration_ms: String(Math.round(e.durationMs)),
    ...(e.preTokens !== void 0 && { pre_tokens: String(e.preTokens) }),
    ...(e.postTokens !== void 0 && { post_tokens: String(e.postTokens) }),
    ...(e.error && { error: e.error }),
    ...(e.precomputeReuse && { precompute_reuse: e.precomputeReuse }),
  });
}
function Ypn(e) {
  Po("retention_sweep", {
    result: e.result,
    period_days: String(e.periodDays),
    used_default: String(e.usedDefault),
    ...(e.skipReason && { skip_reason: e.skipReason }),
    ...(e.transcriptsDeleted !== void 0 && { transcripts_deleted: String(e.transcriptsDeleted) }),
    ...(e.transcriptsExemptedDesktop !== void 0 && {
      transcripts_exempted_desktop: String(e.transcriptsExemptedDesktop),
    }),
    ...(e.sessionFilesDeleted !== void 0 && { session_files_deleted: String(e.sessionFilesDeleted) }),
    ...(e.artifactsDeleted !== void 0 && { artifacts_deleted: String(e.artifactsDeleted) }),
    ...(e.filesRetainedFresh !== void 0 && { files_retained_fresh: String(e.filesRetainedFresh) }),
    ...(e.filesPastCutoff !== void 0 && { files_past_cutoff: String(e.filesPastCutoff) }),
    ...(e.errorCount !== void 0 && { error_count: String(e.errorCount) }),
  });
}
var _ = false;
function n8n(e) {
  if (_) return;
  _ = true;
  try {
    let t = e.name !== "Error" ? e.name : e.constructor?.name || "Error";
    Po("internal_error", { error_name: IR(t) ?? "Error", error_code: uo(e) });
  } finally {
    _ = false;
  }
}
function $v(e) {
  Po("at_mention", { mention_type: e.mentionType, success: String(e.success) });
}
function wX(e) {
  let t = e.error !== void 0 ? os(e.error) : null;
  Po("auth", {
    action: e.action,
    success: String(e.success),
    auth_method: e.authMethod,
    ...(t && { error_category: t.kind, ...(t.status !== void 0 && { status_code: String(t.status) }) }),
  });
}
export { e8n, L2t, Swe, bX, Kpn, Xpn, M2t, $ze, t8n, Po, I9, rue, Ypn, n8n, $v, wX };
