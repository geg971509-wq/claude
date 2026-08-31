// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { y, p, g, Hr } from "/$bunfs/root/chunk-ca80fke8.js";
import { R, we, l, ic } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { st } from "/$bunfs/root/chunk-qcx34e4j.js";
import { zt } from "/$bunfs/root/chunk-qm65zb83.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { ye } from "/$bunfs/root/chunk-988p40e0.js";
import { xi } from "/$bunfs/root/chunk-0spqrdaj.js";
import { dh, JS, oP, Yt, Ae, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Ne } from "/$bunfs/root/chunk-82w4mtvq.js";
import { $m } from "/$bunfs/root/chunk-k7v7xwvs.js";
import { Vyn } from "/$bunfs/root/chunk-ht15rw3x.js";
import { Npn } from "/$bunfs/root/chunk-gay9hbs8.js";
import { H, f, qm } from "/$bunfs/root/chunk-saay52v7.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
var AKn = "remote-control-repl",
  CKn = "remote-control-cli",
  vKn = "remote-control-sdk",
  Omt = "remote-control-auto",
  RKn = "ccr-mirror";
var Lmt = "workflow-remote-agent",
  b2t = "client-directory-sync";
function H9(e) {
  return e?.kind === "self_hosted_pool";
}
function ID(e) {
  return e.kind === "self_hosted_pool" ? e.pool_id : e.environment_id;
}
function AF(e) {
  return e !== void 0 && e.startsWith("ccpool_");
}
var K = ["policySettings", "flagSettings", "userSettings"];
function PD() {
  let e,
    t = xi();
  for (let o = t.length - 1; o >= 0; o--) {
    let r = t[o],
      s = ye(r)?.remote?.defaultEnvironmentId;
    if (s === void 0) continue;
    if (AF(s) && !K.includes(r)) {
      e ??= { id: s, source: r };
      continue;
    }
    return { id: s, source: r, ignoredUntrustedPool: e?.id === s ? void 0 : e };
  }
  return { id: void 0, source: void 0, ignoredUntrustedPool: e };
}
function Rze(e) {
  return e.startsWith("ccpool_") ? { self_hosted_runner_pool_id: e } : { environment_id: e };
}
var V = m(() => f({ environments: H(qm((e) => typeof e === "object" && e !== null && !Array.isArray(e))) }));
function X(e) {
  if (typeof e === "string" && e.trim().length === 0)
    return new R(
      "The cloud environments service returned an empty response (HTTP 200 with no body). This is usually temporary \u2014 try again in a moment.",
      "fetchEnvironments: HTTP 200 with an empty body",
    );
  if (typeof e === "string")
    return new R(
      "The cloud environments service returned a response in an unexpected format (HTTP 200 with a non-JSON body). This is usually temporary \u2014 try again in a moment.",
      "fetchEnvironments: HTTP 200 with a non-JSON body",
    );
  return new R(
    "The cloud environments service returned a response in an unexpected format (HTTP 200 without a usable environments list). This is usually temporary \u2014 try again in a moment.",
    "fetchEnvironments: HTTP 200 JSON body without a valid environments array",
  );
}
async function DD(e, t, o) {
  return Hr(
    "teleport_environments_list",
    async () => {
      if (Ne() !== "firstParty")
        throw Error("Remote environments are only available on the first-party Anthropic API provider.");
      let s = e ?? Yt()?.accessToken;
      if (!s)
        throw Error(
          "Claude Code web sessions require authentication with a Claude.ai account. API key authentication is not sufficient. Please run /login to authenticate, or check your authentication status with /status.",
        );
      let i = await oP();
      if (!i) throw Error("Unable to get organization UUID");
      let c = `${zt().BASE_API_URL}/v1/environment_providers`;
      try {
        let a = await dh(
          () => st.get(c, { headers: { ...JS(Yt()?.accessToken ?? s), "x-organization-uuid": i }, timeout: 15000 }),
          { credentials: o },
        );
        if (a.status !== 200) throw Error(`Failed to fetch environments: ${a.status} ${a.statusText}`);
        let u = V().safeParse(a.data);
        if (!u.success) throw X(a.data);
        let _ = u.data.environments,
          d = _.length > 0;
        if (ie().hasRemoteEnvironment !== d)
          await Ae((S) => (S.hasRemoteEnvironment === d ? S : { ...S, hasRemoteEnvironment: d }), t);
        return _;
      } catch (a) {
        let u = we(a);
        if (ic(a)) n(`fetchEnvironments failed: ${u.message}`, { level: "error" });
        else h(u);
        throw u;
      }
    },
    J,
  );
}
function J(e) {
  return e instanceof R ? "malformed_response" : "error";
}
async function _X(e = "Default", t, o) {
  return Hr("teleport_default_environment_create", async () => {
    if (Ne() !== "firstParty")
      throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let r = o ?? Yt()?.accessToken;
    if (!r) throw Error("No access token available");
    let s = await oP();
    if (!s) throw Error("Unable to get organization UUID");
    let i = `${zt().BASE_API_URL}/v1/environment_providers/cloud/create`;
    return (
      await st.post(
        i,
        {
          name: e,
          kind: "anthropic_cloud",
          description: "Default - trusted network access",
          config: {
            environment_type: "anthropic",
            cwd: "/home/user",
            init_script: null,
            environment: {},
            languages: [
              { name: "python", version: "3.11" },
              { name: "node", version: "20" },
            ],
            network_config: { allowed_hosts: [], allow_default_hosts: !0 },
          },
        },
        {
          headers: { ...JS(r), "anthropic-beta": "ccr-byoc-2025-07-29", "x-organization-uuid": s },
          timeout: 15000,
          signal: t,
        },
      )
    ).data;
  });
}
async function Mmt(e, t) {
  {
    if (Ne() !== "firstParty") return [];
    let o = e ?? Yt()?.accessToken;
    if (!o) return [];
    let r = await oP();
    if (!r) return [];
    let s = `${zt().BASE_API_URL}/v1/code/runners/self-hosted/pools`;
    try {
      let i = await dh(
        () =>
          st.get(s, {
            headers: {
              ...JS(Yt()?.accessToken ?? o),
              "anthropic-beta": "ccr-byoc-2025-07-29",
              "x-organization-uuid": r,
            },
            timeout: 15000,
          }),
        { credentials: t },
      );
      if (i.status !== 200)
        return (
          n(`fetchSelfHostedPools: ${i.status} ${i.statusText}`, { level: "error" }),
          g("teleport_self_hosted_pool_list", "non_200"),
          []
        );
      return Hr("teleport_self_hosted_pool_list", async () =>
        (i.data.pools ?? []).map((c) => ({
          kind: "self_hosted_pool",
          pool_id: c.pool_id,
          name: c.name,
          created_at: c.created_at,
          alive_runner_count: c.alive_runner_count ?? 0,
        })),
      );
    } catch (i) {
      let c = we(i);
      if (ic(i))
        n(`fetchSelfHostedPools failed: ${c.message}`, { level: "error" }),
          g("teleport_self_hosted_pool_list", "api_error");
      else h(c), g("teleport_self_hosted_pool_list", "unexpected");
      return [];
    }
  }
  return [];
}
async function PCr({
  environmentId: e,
  title: t,
  events: o,
  gitRepoUrl: r,
  branch: s,
  defaultBranch: i,
  signal: c,
  baseUrl: a,
  getAccessToken: u,
  credentials: _,
  permissionMode: d,
  tags: S,
}) {
  let { getClaudeAIOAuthTokens: T, getClaudeAIOAuthTokensAsync: A } = await import("/$bunfs/root/chunk-r7k9wyxs.js"),
    { getOrganizationUUID: U } = await import("/$bunfs/root/chunk-y4z68yqf.js"),
    { getOauthConfig: C } = await import("/$bunfs/root/chunk-79hv0fh4.js"),
    { getOAuthHeaders: x } = await import("/$bunfs/root/chunk-f3y3fqnb.js"),
    { getMainLoopModel: N } = await import("/$bunfs/root/chunk-5a8dj187.js"),
    { getOriginalCwd: D } = await import("/$bunfs/root/chunk-bb8gz7wa.js"),
    { default: F } = await import("/$bunfs/root/chunk-hyt3xshs.js"),
    { isFirstPartyProvider: L } = await import("/$bunfs/root/chunk-efkq16zj.js");
  if (!L())
    return (
      n("[bridge] Session create skipped on non-firstParty provider"),
      p("bridge_session_create", "bridge_session_create_3p_provider"),
      null
    );
  let P = u?.() ?? (O() && _ !== void 0 ? (await A(_))?.accessToken : T()?.accessToken);
  if (!P)
    return (
      n("[bridge] No access token for session creation"),
      p("bridge_session_create", "bridge_session_create_no_token"),
      null
    );
  let I = await U();
  if (!I)
    return (
      n("[bridge] No org UUID for session creation"), p("bridge_session_create", "bridge_session_create_no_org"), null
    );
  let { sources: B, outcomes: G, report: M } = await Vyn(r, s, i),
    z = {
      ...(t !== void 0 && { title: t }),
      events: o,
      session_context: { sources: B, outcomes: G, model: N(), cwd: D(), reuse_outcome_branches: !0 },
      ...Rze(e),
      source: "remote-control",
      ...(d && { permission_mode: d }),
      ...(S?.length && { tags: S }),
    },
    j = { ...x(P), "anthropic-beta": "ccr-byoc-2025-07-29", "x-organization-uuid": I },
    q = `${a ?? C().BASE_API_URL}/v1/sessions`,
    v;
  try {
    v = await F.post(q, z, { headers: j, signal: c, validateStatus: (E) => E < 500 });
  } catch (E) {
    return (
      n(`[bridge] Session creation request failed: ${l(E)}`),
      p("bridge_session_create", "bridge_session_create_request_failed"),
      null
    );
  }
  if (!(v.status === 200 || v.status === 201)) {
    let E = $m(v.data);
    return (
      n(`[bridge] Session creation failed with status ${v.status}${E ? `: ${E}` : ""}`),
      p("bridge_session_create", "bridge_session_create_http_error"),
      null
    );
  }
  let b = v.data;
  if (!b || typeof b !== "object" || !("id" in b) || typeof b.id !== "string")
    return (
      n("[bridge] No session ID in response"), p("bridge_session_create", "bridge_session_create_bad_response"), null
    );
  return Npn(M), y("bridge_session_create"), b.id;
}
async function uwe(e, t) {
  return (await w2t(e, t)).session;
}
async function w2t(e, t) {
  let { getClaudeAIOAuthTokens: o, getClaudeAIOAuthTokensAsync: r } = await import("/$bunfs/root/chunk-r7k9wyxs.js"),
    { getOauthConfig: s } = await import("/$bunfs/root/chunk-79hv0fh4.js"),
    { getCodeSession: i } = await import("/$bunfs/root/chunk-rnbgmv20.js"),
    { isCcrV2SessionCrudEnabled: c } = await import("/$bunfs/root/chunk-g1dxqg0t.js"),
    a =
      t?.getAccessToken?.() ??
      (O() && t?.credentials !== void 0 ? (await r(t.credentials))?.accessToken : o()?.accessToken);
  if (!a)
    return (
      n("[bridge] No access token for session fetch"),
      p("bridge_session_get", "bridge_session_get_no_token"),
      { session: null, notFound: !1 }
    );
  let u = c(),
    _;
  if (!u) {
    let { getOrganizationUUID: S } = await import("/$bunfs/root/chunk-y4z68yqf.js");
    if (((_ = (await S()) ?? void 0), !_))
      return (
        n("[bridge] No org UUID for session fetch"),
        p("bridge_session_get", "bridge_session_get_no_org"),
        { session: null, notFound: !1 }
      );
  }
  let d = await i(t?.baseUrl ?? s().BASE_API_URL, a, e, 1e4, { useV2: u, orgUUID: _ });
  if (typeof d !== "object")
    return (
      p(
        "bridge_session_get",
        d === "invalid"
          ? "bridge_session_get_invalid_id"
          : typeof d === "number"
            ? "bridge_session_get_http_error"
            : "bridge_session_get_request_failed",
      ),
      { session: null, notFound: d === 404 }
    );
  return (
    y("bridge_session_get"),
    {
      session: {
        environment_id: d.environment_id,
        title: d.title,
        status: d.status,
        created_at: d.created_at,
        updated_at: d.updated_at,
        tags: d.tags,
      },
      notFound: !1,
    }
  );
}
async function k(e, t, o, r) {
  let { getClaudeAIOAuthTokens: s, getClaudeAIOAuthTokensAsync: i } = await import("/$bunfs/root/chunk-r7k9wyxs.js"),
    { getOauthConfig: c } = await import("/$bunfs/root/chunk-79hv0fh4.js"),
    { updateCodeSession: a } = await import("/$bunfs/root/chunk-rnbgmv20.js"),
    { isCcrV2SessionCrudEnabled: u } = await import("/$bunfs/root/chunk-g1dxqg0t.js"),
    _ =
      r?.getAccessToken?.() ??
      (O() && r?.credentials !== void 0 ? (await i(r.credentials))?.accessToken : s()?.accessToken);
  if (!_) return n(`[bridge] No access token for session ${o} update`), "failed";
  let d = u(),
    S;
  if (!d) {
    let { getOrganizationUUID: A } = await import("/$bunfs/root/chunk-y4z68yqf.js");
    if (((S = (await A()) ?? void 0), !S)) return n(`[bridge] No org UUID for session ${o} update`), "failed";
  }
  n(`[bridge] Updating session ${o}: ${e}`);
  let T = await a(r?.baseUrl ?? c().BASE_API_URL, _, e, t, 1e4, { useV2: d, orgUUID: S });
  if (T === "invalid") return p("bridge_session_patch", "bridge_session_patch_invalid_id"), "rejected";
  else if (typeof T !== "number") return p("bridge_session_patch", "bridge_session_patch_request_failed"), "failed";
  else if (T === 200) return n(`[bridge] Session ${o} updated successfully`), y("bridge_session_patch"), "landed";
  else return g("bridge_session_patch", "bridge_session_patch_http_error"), "failed";
}
async function wpn(e, t, o) {
  return k(e, { title: t }, "title", o);
}
var kKn = "color:";
async function Tpn(e, t, o, r) {
  let s = t === "default",
    i = o.filter((a) => s || a !== t).map((a) => kKn + a),
    c = s ? void 0 : [kKn + t];
  await k(e, { add_tags: c, remove_tags: i }, "color tag", r);
}
async function DCr(e, t, o) {
  return !1;
}
export { AKn, CKn, vKn, Omt, RKn, Lmt, b2t, H9, ID, AF, PD, Rze, DD, _X, Mmt, PCr, uwe, w2t, wpn, kKn, Tpn, DCr };
