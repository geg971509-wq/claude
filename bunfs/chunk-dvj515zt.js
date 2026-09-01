// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { bt } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { i, q, H, f, un } from "/$bunfs/root/chunk-saay52v7.js";
var tae = m(() => un({ name: i().optional() })),
  d = m(() => f({ results: H(tae()), opt_in_required: q().optional(), message: i().nullish() }));
function o8(e) {
  return !Array.isArray(e) && e.opt_in_required === true;
}
class nae extends Error {
  constructor(e) {
    super(e);
    this.name = "ConnectorRegistryUnavailableError";
  }
}
var g = 15000,
  C = "/api/oauth/organizations/:orgUUID/mcp/connectors/search",
  _ = "/api/oauth/organizations/:orgUUID/mcp/connectors/suggest",
  S = "/api/oauth/organizations/:orgUUID/mcp/connectors/list";
async function u(e, r, s, t) {
  let o = await bt.post(e, r, { auth: "teleport-org", timeout: g, signal: s, credentials: t });
  if (!o.ok)
    throw Error(
      o.reason === "no-auth"
        ? "Not authenticated with a claude.ai account."
        : `connector route unavailable: ${o.reason}`,
    );
  if (o.status >= 400) {
    let c = f({ error: f({ type: i(), message: i() }) }).safeParse(o.data);
    throw Error(
      c.success
        ? `connector route ${o.status} ${c.data.error.type}: ${c.data.error.message}`
        : `connector route ${o.status}`,
    );
  }
  let a = d().safeParse(o.data);
  if (!a.success) throw Error("malformed connector response");
  if (a.data.opt_in_required)
    return {
      opt_in_required: true,
      message: a.data.message ?? "Enable connector suggestions in your Claude settings to use this.",
    };
  return a.data.results;
}
async function vUn(e, r, s) {
  let t = await u(C, { keywords: e, include_custom: true }, r, s);
  if (!o8(t)) y("connector_suggest_search");
  return t;
}
async function RUn(e, r, s) {
  let t = await u(_, { uuids: e }, r, s);
  if (!o8(t)) y("connector_suggest_lookup");
  return t;
}
function eit(e, r) {
  let s = new Set();
  for (let t of r) {
    if (t.type === "disabled") continue;
    let o = t.config,
      a = "headers" in o ? o.headers?.["X-MCP-Server-ID"] : void 0;
    if (a) s.add(a);
  }
  return e.map((t) => {
    let o = typeof t.installedServerId === "string" ? t.installedServerId : void 0;
    return { ...t, enabledInChat: o !== void 0 && s.has(o) };
  });
}
async function kUn(e, r) {
  let s = await u(S, {}, e, r);
  if (!o8(s)) y("connector_suggest_list");
  return s;
}
function khe(e, r) {
  n(`[connector-suggest] ${e} failed: ${l(r)}`, { level: "error" }),
    p(
      e === "search"
        ? "connector_suggest_search"
        : e === "lookup"
          ? "connector_suggest_lookup"
          : "connector_suggest_list",
      "fetch_failed",
    );
}
export { tae, o8, nae, vUn, RUn, eit, kUn, khe };
