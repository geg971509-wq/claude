// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { G, Yfe, sx, MJ, q5 } from "/$bunfs/root/chunk-f9h0bg01.js";
import { M_, XN } from "/$bunfs/root/chunk-qm65zb83.js";
import { y } from "/$bunfs/root/chunk-ca80fke8.js";
import { Ac, d$, h$, wt, rS, M3, a4t, Ybn, Pre, b4t, U3, Ae } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { wie, fcr, wZe } from "/$bunfs/root/chunk-vfy57cpd.js";
import { R, l, E, Ht, Vp } from "/$bunfs/root/chunk-ypdw393e.js";
import { V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { sA, Ne, FT } from "/$bunfs/root/chunk-82w4mtvq.js";
import { qTt, ej } from "/$bunfs/root/chunk-ghara6r1.js";
import { Eu, kEn, For, WY, vn } from "/$bunfs/root/chunk-k4a21mkt.js";
import { CEe } from "/$bunfs/root/chunk-z9jgt14c.js";
import { KM } from "/$bunfs/root/chunk-s0xdwab3.js";
import { ok, t9n, r9n, o9n } from "/$bunfs/root/chunk-zze8764r.js";
import { wX } from "/$bunfs/root/chunk-wjr8v4tx.js";
import { _5n, Tk } from "/$bunfs/root/chunk-308krgtb.js";
import { vZn } from "/$bunfs/root/chunk-xgfepdf4.js";
import { fGt, mGt } from "/$bunfs/root/chunk-9y48by1e.js";
import { lB, jK, vq } from "/$bunfs/root/chunk-zs44arwe.js";
import { DFn } from "/$bunfs/root/chunk-kckam25t.js";
import { L0 } from "/$bunfs/root/chunk-9r67t977.js";
import { nSn } from "/$bunfs/root/chunk-2qsjxthp.js";
import { lrt } from "/$bunfs/root/chunk-xvbmqp62.js";
import { Gke } from "/$bunfs/root/chunk-5g93ntvv.js";
import { i, un } from "/$bunfs/root/chunk-saay52v7.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { mkdir as T, readFile as b, unlink as K, writeFile as M } from "fs/promises";
import { join as C } from "path";
var Wke = "41077d10-94b8-4194-be48-d251e9eb21b4",
  LNn = [XN, M_],
  x = /^[A-Za-z0-9_.-]+$/,
  v = { created_by: "claude-code" },
  z = m(() =>
    un({
      created_by: i().optional(),
      base_url: i().optional(),
      authentication: un({ type: i(), client_id: i().optional(), credentials_path: i().optional() }),
    }),
  ),
  B = m(() => un({ created_by: i().optional() })),
  N = {
    no_config_dir: true,
    invalid_profile_name: true,
    foreign_profile: true,
    custom_credentials_path: true,
    api_key_env_nondispatching: true,
    wif_env_quad: false,
    third_party_provider: false,
    api_key_env: false,
    env_credential_shadow: false,
    other_deployment_profile: false,
    federation_profile: false,
    unreadable_profile: false,
  };
function j(e) {
  return Object.hasOwn(N, e);
}
function MNn(e) {
  if (!(e instanceof R) || e.errorClass === void 0 || !j(e.errorClass)) return null;
  return N[e.errorClass];
}
var L = {
  no_config_dir: "no Anthropic config directory was found",
  invalid_profile_name: "the configured profile name isn't valid",
  foreign_profile: "the profile on this machine belongs to another tool",
  custom_credentials_path: "the existing profile keeps its sign-in somewhere custom",
  api_key_env_nondispatching: "ANTHROPIC_API_KEY is set in this environment",
};
function NNn(e) {
  if (!(e instanceof R) || e.errorClass === void 0 || !Y(e.errorClass)) return null;
  return L[e.errorClass];
}
function Y(e) {
  return Object.hasOwn(L, e);
}
async function UHt() {
  if (!F(a.ANTHROPIC_PROFILE) && a.ANTHROPIC_FEDERATION_RULE_ID && a.ANTHROPIC_ORGANIZATION_ID)
    throw new R(
      "Workload identity federation is configured in this environment (ANTHROPIC_FEDERATION_RULE_ID and ANTHROPIC_ORGANIZATION_ID), and it takes precedence over the default profile. Set ANTHROPIC_PROFILE to a profile name to sign in with a profile that outranks it.",
      "Console profile login refused: env-quad federation outranks the implicit profile",
      "wif_env_quad",
    );
  let e = Ne();
  if (e !== "firstParty")
    throw new R(
      `This session uses ${sA[e]}, which does not use Anthropic Console sign-in.`,
      "This session uses a third-party provider, which does not use Anthropic Console sign-in.",
      "third_party_provider",
    );
  let o = a.ANTHROPIC_API_KEY;
  if (o) {
    let c = await b4t({ skipRetrievingKeyFromApiKeyHelper: true });
    if (c.source === "ANTHROPIC_API_KEY" && c.key === o)
      throw new R(
        "ANTHROPIC_API_KEY is set in this environment and takes precedence over a profile, so a profile sign-in would not be used. Unset it to sign in this way.",
        "Console profile login refused: env credential shadows the profile",
        "api_key_env",
      );
  }
  if (a4t())
    throw new R(
      "Something in this environment \u2014 an API key helper, an injected token, or a third-party provider setting \u2014 takes precedence over a profile sign-in, so it would not be used here.",
      "Console profile login refused: env credential shadows the profile",
      "env_credential_shadow",
    );
  let t = ej();
  if (t === null)
    throw new R(
      "Cannot locate the Anthropic config directory. Set ANTHROPIC_CONFIG_DIR (or HOME) and try again.",
      "Console profile login refused: no config directory",
      "no_config_dir",
    );
  let s = A(t),
    f = await k(C(t, "configs", `${s}.json`));
  if (f !== null) {
    if (f.base_url && !FT(f.base_url))
      throw new R(
        "This profile is bound to a different Anthropic deployment, so Claude Code will not replace it here. Sign out of it with the tool that created it, then try again.",
        "Console profile login refused: profile bound to another deployment",
        "other_deployment_profile",
      );
    if (f.authentication.type === "oidc_federation")
      throw new R(
        "This machine is set up for workload identity federation, which signs in on its own. If you need a different sign-in, ask whoever configured it.",
        "Console profile login refused: federation profile",
        "federation_profile",
      );
    if (f.authentication.type !== "user_oauth")
      throw new R(
        "Claude Code cannot read the existing sign-in on this machine, so it will not overwrite it. Check the permissions on your Anthropic config directory, then try again.",
        "Console profile login refused: unreadable or unrecognized profile config",
        "unreadable_profile",
      );
    if (f.authentication.client_id !== Wke)
      throw new R(
        "This machine already has a sign-in from another tool that Claude Code cannot replace. Sign out with that tool, then try again.",
        "Console profile login refused: profile is not a same-client login",
        "foreign_profile",
      );
    if (f.authentication.credentials_path)
      throw new R(
        "This profile keeps its sign-in somewhere custom, so Claude Code cannot replace it. Sign out of it with the tool that created it, then try again.",
        "Console profile login refused: custom credentials_path",
        "custom_credentials_path",
      );
  }
  if (o)
    throw new R(
      "ANTHROPIC_API_KEY is set in this environment. Unset it to sign in without an API key.",
      "Console profile login refused: non-dispatching env API key present",
      "api_key_env_nondispatching",
    );
  return { profile: s, configDir: t, isNewProfile: f === null };
}
async function FNn(e) {
  let o = await UHt();
  return (
    await T(C(o.configDir, "credentials"), { recursive: true, mode: 448 }), fGt(w(o.configDir, o.profile), () => W(e))
  );
}
async function W(e) {
  let { profile: o, configDir: t, isNewProfile: s } = await UHt(),
    f = C(t, "configs", `${o}.json`);
  await T(C(t, "configs"), { recursive: true, mode: 448 });
  let c = {
    version: fcr,
    organization_id: e.organizationUuid,
    workspace_id: e.workspaceId,
    authentication: { type: "user_oauth", client_id: Wke },
    ...v,
  };
  await wie(f, c);
  let g = s,
    p = {
      version: wZe,
      type: "oauth_token",
      access_token: e.accessToken,
      refresh_token: e.refreshToken,
      expires_at: Math.floor(e.expiresAtMs / 1000),
      scope: e.scopes.join(" "),
      organization_uuid: e.organizationUuid,
      organization_name: e.organizationName,
      account_email: e.accountEmail,
    };
  await wie(w(t, o), { ...p, workspace_id: e.workspaceId, workspace_name: e.workspaceName, ...v });
  let I = await Z(
    C(t, "active_config"),
    o +
      `
`,
  );
  return (
    n(
      `Console profile login: wrote credentials for profile ${o}${g ? " (new profile)" : ""}${I ? " (set active)" : ""}`,
    ),
    mGt(),
    { profile: o, configDir: t }
  );
}
async function D({ revoke: e } = {}) {
  try {
    let o = ej();
    if (o === null) return { removed: false };
    let t;
    try {
      t = A(o);
    } catch {
      return { removed: false };
    }
    let s = await k(C(o, "configs", `${t}.json`));
    if (s === null || !H(s)) return { removed: false };
    if ((await S(w(o, t))) === null) return { removed: false };
    return await fGt(w(o, t), () => q(e));
  } catch (o) {
    if (E(o) === "ENOENT") return { removed: false };
    return n(`Logout: profile credential removal failed: ${l(o)}`, { level: "error" }), { removed: false };
  }
}
async function q(e) {
  let o = ej();
  if (o === null) return { removed: false };
  let t;
  try {
    t = A(o);
  } catch {
    return { removed: false };
  }
  let s = await k(C(o, "configs", `${t}.json`));
  if (s === null || !H(s)) return { removed: false };
  let f = w(o, t),
    c = await S(f);
  if (c === null) return { removed: false };
  let g = { refreshToken: c.refreshToken, clientId: Wke };
  if (e && g.refreshToken) await e({ refreshToken: g.refreshToken, clientId: g.clientId });
  try {
    await K(f);
  } catch (p) {
    return n(`Logout: could not remove profile credentials: ${l(p)}`, { level: "error" }), { removed: false, ...g };
  }
  return n(`Logout: removed credentials for profile ${t}`), mGt(), { removed: true, ...g };
}
function A(e) {
  let o = a.ANTHROPIC_PROFILE || qTt(e);
  if (!F(o))
    throw new R(
      `ANTHROPIC_PROFILE "${o}" is not a valid profile name (letters, digits, '_', '.', '-')`,
      "ANTHROPIC_PROFILE is not a valid profile name",
      "invalid_profile_name",
    );
  return o;
}
function F(e) {
  return !!e && x.test(e) && e !== "." && e !== "..";
}
function w(e, o) {
  return C(e, "credentials", `${o}.json`);
}
async function k(e) {
  let o;
  try {
    o = await b(e, "utf-8");
  } catch (f) {
    if (E(f) === "ENOENT") return null;
    if (Ht(f)) return { authentication: { type: "unreadable" } };
    throw f;
  }
  let t;
  try {
    t = V(o);
  } catch (f) {
    return n(`Profile config is not JSON, treating as foreign: ${l(f)}`), { authentication: { type: "unreadable" } };
  }
  let s = z().safeParse(t);
  return s.success ? s.data : { authentication: { type: "unreadable" } };
}
function H(e) {
  return e.created_by === v.created_by && e.authentication.type === "user_oauth" && e.authentication.client_id === Wke;
}
async function S(e) {
  let o;
  try {
    o = await b(e, "utf-8");
  } catch (c) {
    if (Ht(c)) return null;
    throw c;
  }
  let t;
  try {
    t = V(o);
  } catch {
    return null;
  }
  let s = B().safeParse(t);
  if (!s.success || s.data.created_by !== v.created_by) return null;
  let f = s.data.refresh_token;
  return { refreshToken: typeof f === "string" ? f : void 0 };
}
async function $Nn(e) {
  let o = ej();
  if (o === null) return false;
  try {
    let t = await S(w(o, A(o)));
    return t !== null && t.refreshToken === e;
  } catch {
    return true;
  }
}
async function Z(e, o) {
  try {
    return await M(e, o, { flag: "wx", mode: 420 }), true;
  } catch (t) {
    if (E(t) === "EEXIST") return false;
    throw t;
  }
}
async function oW({
  clearOnboarding: e = false,
  preserveInProcessTokens: o = false,
  preserveNonAnthropicAuth: t = false,
  storageV5: s,
  preserveQuotaAutoResume: f = false,
  artifactAccount: c = "signed_out",
  incomingIdentity: g,
  credentials: p,
}) {
  let { flushTelemetry: I } = await import("/$bunfs/root/chunk-j25xhhry.js");
  if ((await I(), wt())) {
    await srt(s, { preserveQuotaAutoResume: f, artifactAccount: c, incomingIdentity: g });
    return;
  }
  if (!o && Ne() === "firstParty") {
    let d = vn();
    d.invalidateCache?.();
    let r = await d.readAsync(p),
      u = r?.claudeAiOauth;
    if (u?.refreshToken) await rS(u.refreshToken, u.clientId);
    let P = r?.designOauth;
    if (P?.refreshToken) await rS(P.refreshToken, P.clientId);
  }
  if (!o) a.unset("CLAUDE_CODE_OAUTH_TOKEN"), sx(null);
  await Ybn(s),
    await D({ revoke: !o && Ne() === "firstParty" ? ({ refreshToken: d, clientId: r }) => rS(d, r) : void 0 });
  let _ = vn();
  if (t) {
    if (Ne() === "firstParty") {
      _.invalidateCache?.();
      let d = (await _.readAsync(p))?.designOauth;
      if (d?.refreshToken) await rS(d.refreshToken, d.clientId);
    }
    await _.mutate((d) => {
      let r = { ...d };
      return (
        delete r.claudeAiOauth,
        delete r.organizationUuid,
        delete r.trustedDeviceToken,
        delete r.enterpriseGateway,
        delete r.designOauth,
        r
      );
    }, p).catch((d) => {
      let r = E(d);
      if (r === "EPERM" || r === "ENOENT" || Vp(d)) {
        n(`[performLogout] re-login secure-storage prune failed (${r}): ${l(d)}`, { level: "error" });
        return;
      }
      h(d);
    });
  } else {
    let d = false,
      r = async () => {
        d = true;
        let u = await J(_, p);
        if ((await _.delete(p), u && Object.keys(u).length > 0)) await Q(_, u, p);
      };
    await kEn(r).catch((u) => {
      if (d) throw u;
      return h(u), For(r);
    });
  }
  MJ(null),
    q5(null),
    await srt(s, { preserveQuotaAutoResume: f, artifactAccount: c, incomingIdentity: g, credentials: p }),
    await Ae((d) => {
      let r = { ...d };
      if (e) {
        if (
          ((r.hasCompletedOnboarding = false),
          (r.subscriptionNoticeCount = 0),
          (r.hasAvailableSubscription = false),
          r.customApiKeyResponses?.approved)
        )
          r.customApiKeyResponses = { ...r.customApiKeyResponses, approved: [] };
        let u = Gke;
        if (r.seenNotifications?.[u] !== void 0) {
          let { [u]: P, ...U } = r.seenNotifications;
          r.seenNotifications = U;
        }
      }
      return (
        (r.oauthAccount = void 0),
        (r.additionalModelOptionsCache = void 0),
        (r.additionalModelCostsCache = void 0),
        (r.modelAccessCache = void 0),
        (r.orgModelDefaultCache = void 0),
        (r.lastSeenOrgDefaultUpdatedAt = void 0),
        (r.clientDataCache = void 0),
        (r.clientDataCacheSlots = void 0),
        (r.autoCompactWindowsCache = void 0),
        (r.cachedUsageUtilization = void 0),
        r
      );
    }, s),
    Yfe(void 0),
    y("oauth_logout");
}
async function srt(
  e,
  { preserveQuotaAutoResume: o = false, artifactAccount: t = "signed_out", incomingIdentity: s, credentials: f } = {},
) {
  if ((Pre(), O() && f === void 0)) WY();
  CEe(), h$(), Ac().providerCache.modelConfigs.clear(), M3(), KM();
  let c = G();
  if (
    (DFn(c.host),
    vZn(t, s),
    vq.of(c.host).clear(),
    d$(),
    ok(c, "account_change"),
    U3(),
    jK.cache?.clear?.(),
    lB.cache?.clear?.(),
    await lrt(e),
    await nSn(),
    r9n(),
    o9n(),
    !o)
  )
    L0("account_switch"), Tk("account_switch"), _5n();
  t9n();
}
async function eEr({ exit: e, setError: o, setInfo: t, storageV5: s, credentials: f }) {
  t("Signing out\u2026"), wX({ action: "logout", success: true, authMethod: "oauth" });
  try {
    await oW({ clearOnboarding: true, storageV5: s, credentials: f }), e();
  } catch (c) {
    h(c), o(`Couldn't sign out \u2014 ${c instanceof Error ? c.message : String(c)}`);
  }
}
async function Q(e, o, t) {
  let s;
  for (let f = 0; f < 2; f++)
    try {
      let c = await e.mutate(() => ({ coworkRemoteDevice: o }), t);
      if (c.success) return;
      if (
        ((s = Error("logout: the device identity could not be written back after the credential wipe")), !c.transient)
      )
        break;
    } catch (c) {
      s = c;
    }
  h(s);
}
async function J(e, o) {
  for (let t = 0; t < 2; t++) {
    let s = await (e.readAsyncStrict?.(o) ?? e.readAsync(o));
    if (s !== Eu) return s?.coworkRemoteDevice;
  }
  h(Error("logout: secure storage could not be read, so the device identity is not carried across the wipe"));
  return;
}
export { Wke, LNn, MNn, NNn, UHt, FNn, $Nn, oW, srt, eEr };
