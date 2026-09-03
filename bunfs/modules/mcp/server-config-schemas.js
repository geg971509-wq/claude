// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { i, v, q, _e, H, f, dt, De, oe, N } from "/$bunfs/root/chunk-saay52v7.js";
var PAn = m(() => oe(["local", "user", "project", "dynamic", "enterprise", "claudeai", "managed", "agent"])),
  g = m(() => oe(["stdio", "sse", "sse-ide", "http", "ws", "sdk"])),
  t = m(() =>
    N("comms")
      .optional()
      .catch(void 0),
  ),
  o = m(() => v().int().positive()),
  s = 300000,
  n = m(() =>
    v()
      .int()
      .positive()
      .optional()
      .catch(void 0)
      .describe("@internal CCR backend wire hint; folded into timeout at parse."),
  );
function oGt({ request_timeout_ms: e, ...r }) {
  return { ...r, ...(r.timeout === void 0 && e !== void 0 && { timeout: Math.min(e, s) }) };
}
var fYe = m(() =>
    f({
      type: N("stdio").optional(),
      command: i().min(1, "Command cannot be empty"),
      args: H(i()).default([]),
      env: De(i(), i()).optional(),
      timeout: o().optional(),
      alwaysLoad: q().optional(),
      role: t(),
    }),
  ),
  c = m(() => q()),
  a = m(() =>
    f({
      clientId: i().optional(),
      callbackPort: v().int().positive().optional(),
      authServerMetadataUrl: i()
        .url()
        .startsWith("https://", { message: "authServerMetadataUrl must use https://" })
        .optional(),
      scopes: i().min(1).optional(),
      xaa: c().optional(),
    }),
  ),
  p = m(() => f({ name: i(), permission_policy: oe(["always_allow", "always_ask", "always_deny"]).optional() })),
  DAn = m(() =>
    f({
      type: N("sse"),
      url: i(),
      headers: De(i(), i()).optional(),
      headersHelper: i().optional(),
      oauth: a().optional(),
      timeout: o().optional(),
      request_timeout_ms: n(),
      tools: H(p()).optional(),
      alwaysLoad: q().optional(),
      discoveryCache: q().optional(),
      role: t(),
      toolPermissions: De(i(), LTt()).optional(),
    }).transform(oGt),
  ),
  l = m(() =>
    f({
      type: N("sse-ide"),
      url: i(),
      ideName: i(),
      ideRunningInWindows: q().optional(),
      timeout: o().optional(),
      alwaysLoad: q().optional(),
      role: t(),
    }),
  ),
  d = m(() =>
    f({
      type: N("ws-ide"),
      url: i(),
      ideName: i(),
      authToken: i().optional(),
      ideRunningInWindows: q().optional(),
      timeout: o().optional(),
      alwaysLoad: q().optional(),
      role: t(),
    }),
  ),
  iGt = m(() =>
    f({
      type: oe(["http", "streamable-http"]).transform(() => "http"),
      url: i(),
      headers: De(i(), i()).optional(),
      headersHelper: i().optional(),
      oauth: a().optional(),
      timeout: o().optional(),
      request_timeout_ms: n(),
      tools: H(p()).optional(),
      alwaysLoad: q().optional(),
      discoveryCache: q().optional(),
      role: t(),
      toolPermissions: De(i(), LTt()).optional(),
    }).transform(oGt),
  ),
  OAn = m(() =>
    f({
      type: N("ws"),
      url: i(),
      headers: De(i(), i()).optional(),
      headersHelper: i().optional(),
      timeout: o().optional(),
      alwaysLoad: q().optional(),
      role: t(),
    }),
  ),
  LAn = m(() => f({ type: N("sdk"), name: i(), timeout: o().optional(), alwaysLoad: q().optional() })),
  LTt = m(() => oe(["allow", "ask", "blocked"])),
  MAn = m(() =>
    f({
      type: N("claudeai-proxy"),
      url: i(),
      id: i(),
      displayName: i().optional(),
      iconUrl: i().optional(),
      timeout: o().optional(),
      alwaysLoad: q().optional(),
      toolPermissions: De(i(), LTt()).optional(),
      stateless: q().optional(),
      cachedInitResponse: De(i(), _e()).nullish(),
      discoverSupport: oe(["supported", "legacy", "unknown"])
        .optional()
        .catch(void 0),
      cachedDiscoverResponse: De(i(), _e()).nullish(),
      eligible: q().nullish(),
      ineligibleReason: i().nullish(),
      enterpriseManaged: q().optional(),
    }),
  ),
  KY = m(() => dt([fYe(), DAn(), l(), d(), iGt(), OAn(), LAn(), MAn()]));
function gCe(e) {
  return e?.pluginSource !== void 0;
}
function NAn(e) {
  if (e.type !== "claudeai-proxy") return false;
  return e.scope === "claudeai" || (e.scope === "dynamic" && !gCe(e));
}
var y = m(() => f({ mcpServers: De(i(), KY()) }));
function Zo(e) {
  return e.type === "connected" || e.type === "cached";
}
function mYe(e, r) {
  if (r.type !== "cached" || !e) return true;
  return !(e.type === "connected" || e.type === "disabled" || e.type === "needs-auth");
}
export { PAn, oGt, fYe, DAn, iGt, OAn, LAn, LTt, MAn, KY, gCe, NAn, Zo, mYe };
