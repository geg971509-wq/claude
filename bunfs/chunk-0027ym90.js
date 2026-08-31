// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Xt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { It, l } from "/$bunfs/root/chunk-ypdw393e.js";
import { b, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { ud, x5, Ife } from "/$bunfs/root/chunk-qm65zb83.js";
import { Ct } from "/$bunfs/root/chunk-wkxx62a2.js";
import { y, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { bt, C$, v$, oNe, iNe, Qk, Yt, dpe, x7e, Cs } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { pr } from "/$bunfs/root/chunk-82w4mtvq.js";
import { rl } from "/$bunfs/root/chunk-4r03fm98.js";
import { Mt } from "/$bunfs/root/chunk-fs02hzwy.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
var w = 30000,
  R = "/v2/ccr-sessions/-/chat-project";
function Gae() {
  return rl() !== null;
}
async function p(e, t, r, i, o) {
  let s = await bt.post(
    R,
    { op: e, ...t },
    { auth: "session-jwt", timeout: w, validateStatus: () => !0, signal: i, maxContentLength: o },
  );
  if (s.ok && s.status >= 300) throw new U9e(r, s.status, D(s.data));
  return u(s, r);
}
function D(e) {
  return e !== null && typeof e === "object" && "error" in e && typeof e.error === "string" ? e.error : e;
}
function d(e, t) {
  return {
    auth: "teleport-org",
    timeout: w,
    headers: { "anthropic-beta": ud },
    validateStatus: () => !0,
    signal: e,
    credentials: t,
  };
}
function f(e, t) {
  return `/api/organizations/:orgUUID/projects/${encodeURIComponent(e)}${t}`;
}
async function X_e(e, t, r) {
  if (Gae()) return p("detail", {}, "get project detail", t);
  let i = await bt.get(f(e, "/detail"), d(t, r));
  return u(i, "get project detail");
}
async function vjn(e, t, r, i) {
  if (Gae()) return p("read-doc", { doc_uuid: t }, "read doc", r);
  let o = await bt.get(f(e, `/docs/${encodeURIComponent(t)}`), d(r, i));
  return u(o, "read doc");
}
async function Rjn(e, t, r, i) {
  if (Gae()) return p("read-file", { file_uuid: t }, "read file", r);
  let o = await bt.get(f(e, `/files/${encodeURIComponent(t)}/extracted`), d(r, i));
  return u(o, "read file");
}
var xMt = 20971520,
  k = Math.ceil((xMt * 4) / 3) + 65536;
async function cin(e, t, r, i) {
  if (Gae()) return p("read-file-raw", { file_uuid: t }, "download file", r, k);
  let o = await bt.get(f(e, `/files/${encodeURIComponent(t)}/raw`), { ...d(r, i), maxContentLength: k });
  return u(o, "download file");
}
async function uin(e, t, r, i, o) {
  if (Gae()) return p("write-doc", { file_name: t, content: r }, "create doc", i);
  let s = await bt.post(f(e, "/docs"), { file_name: t, content: r }, d(i, o));
  return u(s, "create doc");
}
async function kjn(e, t, r, i, o) {
  let s = await bt.patch(f(e, `/docs/${encodeURIComponent(t)}`), { content: r }, d(i, o));
  return u(s, "update doc");
}
async function din(e, t, r, i) {
  if (Gae()) {
    await p("delete-doc", { doc_uuid: t }, "delete doc", r);
    return;
  }
  let o = await bt.delete(f(e, `/docs/${encodeURIComponent(t)}`), void 0, d(r, i));
  u(o, "delete doc");
}
async function Hjn(e, t, r, i, o) {
  if (Gae()) return S(await p("kb-search", { query: t, n: r }, "search knowledge base", i));
  let s = await bt.get(f(e, `/kb/search?query=${encodeURIComponent(t)}&n=${r}`), d(i, o));
  return S(u(s, "search knowledge base"));
}
function S(e) {
  if (typeof e === "string")
    try {
      return V(e);
    } catch {
      return e;
    }
  return e;
}
function xjn(e, t) {
  if (!t) return e;
  return e.split(t).join("[redacted-oauth-token]");
}
class U9e extends Error {
  action;
  status;
  body;
  constructor(e, t, r) {
    super(`Projects API: ${e} failed (HTTP ${t})${E(r)}`);
    this.action = e;
    this.status = t;
    this.body = r;
    this.name = "ProjectsApiError";
  }
}
function u(e, t) {
  if (!e.ok) throw new U9e(t, 0, e.reason === "no-auth" ? e.detail : e.reason);
  if (e.status < 200 || e.status >= 300) throw new U9e(t, e.status, e.data);
  return e.data;
}
function E(e) {
  if (e == null) return "";
  if (typeof e === "string") return e ? `: ${e.slice(0, 200)}` : "";
  try {
    return `: ${b(e).slice(0, 200)}`;
  } catch {
    return `: ${String(e).slice(0, 200)}`;
  }
}
var P = "user:projects:read",
  x = "user:projects:write";
async function IMt(e) {
  if (!Mt("allow_projects_tool")) return { ok: !1, reason: "policy_disabled" };
  if (!pr()) return { ok: !1, reason: "wrong_provider" };
  if (Ct()) return { ok: !1, reason: "essential_traffic_only" };
  let t = rl();
  if (t) return { ok: !0, accessToken: t, expanded: !1 };
  try {
    await Cs({ credentials: e });
  } catch {}
  let r = Yt();
  if (!r?.accessToken) return { ok: !1, reason: "no_token" };
  if (h(r.scopes)) return { ok: !0, accessToken: r.accessToken, expanded: !1 };
  if (r.clientId) return { ok: !1, reason: "custom_client" };
  if (!r.refreshToken) return { ok: !1, reason: "no_refresh" };
  if (await Qk(e)) return { ok: !1, reason: "no_refresh" };
  let i = !1;
  try {
    return await x7e(async ({ lockedTokens: o, isCompromised: s, signal: m }) => {
      if (!o?.refreshToken) return { ok: !1, reason: "no_refresh" };
      if (s()) return { ok: !1, reason: "lock_contended" };
      if (h(o.scopes) && o.accessToken) return { ok: !0, accessToken: o.accessToken, expanded: !1 };
      if (o.clientId) return { ok: !1, reason: "custom_client" };
      if (await Qk(e)) return { ok: !1, reason: "no_refresh" };
      let c;
      try {
        (i = !0),
          (c = await C$(o.refreshToken, {
            clientId: o.clientId,
            scopes: te([...x5, ...Ife(o.scopes), P, x]),
            signal: m,
            telemetryContext: "projects_scope_expansion",
          }));
      } catch (_) {
        if (v$(_) && !s()) await iNe(o.refreshToken, e);
        if (s() || It(_)) return { ok: !1, reason: "lock_contended" };
        throw _;
      }
      let j = await oNe({ isCompromised: s, postedRefreshToken: o.refreshToken, refreshedTokens: c, credentials: e });
      if (j === "adopted_sibling") return { ok: !1, reason: "lock_contended" };
      if (j === "save_failed") return g("projects_scope_expansion", "save_failed"), { ok: !1, reason: "save_failed" };
      if (!h(c.scopes))
        return (
          g("projects_scope_expansion", "expand_failed"),
          { ok: !1, reason: "expand_failed", detail: "refresh succeeded but projects scopes not granted" }
        );
      return y("projects_scope_expansion"), { ok: !0, accessToken: c.accessToken, expanded: !0 };
    }, e);
  } catch (o) {
    if (o instanceof dpe || It(o)) return { ok: !1, reason: "lock_contended" };
    if (!i) return { ok: !1, reason: "lock_contended", detail: l(o) };
    return g("projects_scope_expansion", "expand_failed"), { ok: !1, reason: "expand_failed", detail: l(o) };
  }
}
function h(e) {
  return !!e && e.includes(P) && e.includes(x);
}
var T = 50,
  v = { gdrive: "Google Drive", github: "GitHub", outlin: "Outline", mcpres: "MCP resource" },
  O = 5000;
async function xAr(e) {
  let t = a.CLAUDE_PROJECT_UUID;
  if (!t) return null;
  try {
    return await Xt(I(t, e), O, "project context fetch timed out");
  } catch (r) {
    return n(`project context fetch failed: ${l(r)}`, { level: "warn" }), null;
  }
}
async function I(e, t) {
  let r = await IMt(t);
  if (!r.ok) return n(`project context skipped: ${r.reason}`, { level: "verbose" }), null;
  return mmr(await X_e(e, void 0, t));
}
function kB(e) {
  return e.replace(/[\r\n]+/g, " ").replace(/`/g, "'");
}
function C(e) {
  let t = e.slice(0, T),
    r = e.length - t.length;
  return (
    t.join(`
`) +
    (r > 0
      ? `
- \u2026 and ${r} more \u2014 call \`project_info\` for the full list`
      : "")
  );
}
var A = 200;
function fmr(e) {
  let t = v[e.type ?? ""] ?? kB(e.type ?? "source"),
    r = kB(b(e.config)),
    i = [...r],
    o = i.length > A ? `${i.slice(0, A).join("")}\u2026` : r;
  return `${t}: \`${o}\``;
}
function mmr(e) {
  let t = e.documents.map((c) => c.file_name).filter((c) => c !== null),
    r = (e.files ?? []).filter((c) => c.file_name !== null),
    i = e.sync_sources ?? [],
    o = i.slice(0, T),
    s = i.length - o.length,
    m =
      o
        .map((c) => `- ${fmr(c)}`)
        .join(`
`) +
      (s > 0
        ? `
- \u2026 and ${s} more \u2014 call \`project_info\` for the full list`
        : "");
  return [
    `This session is attached to the Project **"${kB(e.name)}"**.`,
    "",
    ...(e.description ? ["## Project description", e.description, ""] : []),
    ...(e.prompt_template ? ["## Project instructions", e.prompt_template, ""] : []),
    `## Project docs (${t.length})`,
    C(t.map((c) => `- \`${kB(c)}\``)) || "(none yet)",
    "",
    ...(r.length > 0
      ? [`## Project files (${r.length})`, C(r.map((c) => `- \`${kB(c.file_name)}\` (${kB(c.file_kind)})`)), ""]
      : []),
    ...(i.length > 0
      ? [
          `## Synced sources (${i.length})`,
          m,
          "These are synced automatically \u2014 use the matching connector tool (Google Drive, GitHub, etc.) to read them.",
          "",
        ]
      : []),
    "## When to use the Projects tool",
    "- **Before answering questions about anything in the doc list above**, read or search the relevant doc with `project_read` or `project_search`. Do not Glob/Grep the local filesystem for these \u2014 they live in the project, not on disk.",
    "- **When you produce something durable and relevant to this project** \u2014 a new doc, an update to an existing one, a captured decision or finding the user or their team would look for here later \u2014 write it to the project with `project_write`. The project is what they see across Claude products. Be selective: write things that belong alongside the existing docs, not every artifact or note.",
    "- **To edit a project doc**, `project_read` it, make the change, and `project_write` the full updated content back to the same path. There is no in-place patch.",
    "- **You don't have to use the project for everything.** If the request is unrelated to it, answer normally without reading or writing the project.",
  ].join(`
`);
}
export { Gae, X_e, vjn, Rjn, xMt, cin, uin, kjn, din, Hjn, xjn, U9e, IMt, xAr, kB, fmr, mmr };
