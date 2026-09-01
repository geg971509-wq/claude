// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { Nve, wie, xa, S$e, U5t, TZe, b$e } from "/$bunfs/root/chunk-vfy57cpd.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { ft, we, l, $o, Ht } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p, Hr } from "/$bunfs/root/chunk-ca80fke8.js";
import { Kpe, p1e, cb, WTt } from "/$bunfs/root/chunk-ghara6r1.js";
import { Gi } from "/$bunfs/root/chunk-4rh74qms.js";
import { Vpe } from "/$bunfs/root/chunk-74qqwjhx.js";
import { Nn } from "/$bunfs/root/chunk-c48t1p6v.js";
import { mkdir as R, readFile as S, stat as F } from "fs/promises";
import { join as O } from "path";
import { dirname as P } from "path";
var I = { "fail-closed": 5, "fail-open": 15 };
function pGt(e, t, r) {
  return (o) => fGt(t, () => e(o), r);
}
async function fGt(e, t, r = "fail-closed") {
  let o = P(e),
    i = I[r],
    f;
  try {
    f = await E(o, i, r);
  } catch (d) {
    if (r === "fail-closed" || d instanceof xa) throw d;
    return (
      n(`wif: credentials lock unavailable at ${o} (${l(d)}); refreshing without cross-process serialization`), t()
    );
  }
  try {
    return s("tengu_wif_user_oauth_lock_acquired", { mode: c(r) }), await t();
  } finally {
    s("tengu_wif_user_oauth_lock_released", { mode: c(r) });
    try {
      await f();
    } catch (d) {
      if ($o(d)) n(`wif: lock release failed: ${d}`);
      else h(d);
    }
  }
}
async function E(e, t, r) {
  for (let o = 0; ; o++)
    try {
      return await Gi(e, {
        stale: 60000,
        update: 5000,
        onCompromised: (i) => n(`WIF credentials lock compromised: ${i}`, { level: "error" }),
      });
    } catch (i) {
      if (i.code !== "ELOCKED") throw i;
      if (o >= t)
        throw (
          (s("tengu_wif_user_oauth_lock_retry_limit", { attempt: o, mode: c(r) }),
          new xa(`Could not acquire credentials lock at ${e} after ${t} retries`))
        );
      s("tengu_wif_user_oauth_lock_retry", { attempt: o, mode: c(r) }), await ne(1000 + Math.random() * 1000);
    }
}
class xir {
  credentialsPromise = void 0;
  tokenCachePromise = void 0;
  resolvedBaseUrlSnapshot = void 0;
  failedAccessTokens = new Set();
  reset() {
    (this.credentialsPromise = void 0),
      (this.tokenCachePromise = void 0),
      (this.resolvedBaseUrlSnapshot = void 0),
      this.failedAccessTokens.clear();
  }
}
var cbr = new J(() => new xir());
function w() {
  return cbr.of(G().host);
}
var b = 20;
function Gpe() {
  return w().resolvedBaseUrlSnapshot;
}
function zpe() {
  return T(w());
}
function T(e) {
  if (e.credentialsPromise === void 0)
    e.credentialsPromise = Hr("wif_credentials_resolve", async () => {
      let t = await N();
      if (t === null) return (e.resolvedBaseUrlSnapshot = null), null;
      let r = a.ANTHROPIC_BASE_URL || t.base_url,
        o = r || "https://api.anthropic.com",
        i = cb() === "env-quad",
        f = i ? await D(t, o) : await TZe(t),
        d = {
          ...t,
          base_url: r,
          ...(t.authentication.credentials_path || f === null
            ? {}
            : { authentication: { ...t.authentication, credentials_path: f } }),
        },
        [{ getUserAgent: u }, { getProxyFetchOptions: m }] = await Promise.all([
          import("/$bunfs/root/chunk-n663asrq.js"),
          import("/$bunfs/root/chunk-pbr2aqke.js"),
        ]),
        _ = b$e(d, {
          baseURL: o,
          fetch: (g, v) =>
            fetch(g, { ...v, ...m({ forAnthropicAPI: true, url: String(g) }), signal: AbortSignal.timeout(1e4) }),
          userAgent: u(),
          onSafetyWarning: (g) => n(g, { level: "warn" }),
          onCacheWriteError: (g) => n(String(g), { level: "warn" }),
        });
      if (f && t.authentication.type === "user_oauth")
        _.provider = pGt(C(x(_.provider, f), f, "after-recorded-401", e.failedAccessTokens), f, "fail-closed");
      else if (f && i) _.provider = pGt(C(_.provider, f, "always", e.failedAccessTokens), f, "fail-open");
      return (e.resolvedBaseUrlSnapshot = _.baseURL ?? null), _;
    }).catch((t) => {
      throw (n(`WIF credential resolution failed: ${l(t)}`, { level: "error" }), t instanceof xa ? t : new xa(l(t)));
    });
  return e.credentialsPromise;
}
async function JAn(e) {
  let t = w(),
    r = await A(t).catch(() => null);
  if (r === null) return;
  if (e) {
    if ((t.failedAccessTokens.add(e), t.failedAccessTokens.size > b))
      for (let o of t.failedAccessTokens) {
        t.failedAccessTokens.delete(o);
        break;
      }
  }
  r.invalidate();
}
function d5() {
  return A(w());
}
function A(e) {
  return (
    (e.tokenCachePromise ??= T(e).then((t) => {
      if (t === null) return null;
      return new S$e(
        async (o) => {
          try {
            let i = await t.provider(o);
            return y("wif_token_exchange"), i;
          } catch (i) {
            let f = i instanceof xa ? i : new xa(i instanceof Error ? i.message : String(i), null);
            throw (p("wif_token_exchange", W(f)), f);
          }
        },
        (o) => n(String(o), { level: "warn" }),
      );
    })),
    e.tokenCachePromise
  );
}
function C(e, t, r, o) {
  return async (i) => {
    if (!i?.forceRefresh) return e(i);
    if (r === "always" || o.size > 0)
      try {
        let f = await import("fs"),
          d = JSON.parse(await f.promises.readFile(t, "utf-8")),
          u = d.access_token,
          m = d.expires_at;
        if (typeof u === "string" && u && !o.has(u) && (typeof m !== "number" || Date.now() / 1000 < m - Nve)) {
          let { logEvent: _ } = await import("/$bunfs/root/chunk-wzh402yr.js"),
            { fromEnum: g } = await import("/$bunfs/root/chunk-1f7egxxz.js");
          return (
            _("tengu_wif_user_oauth_refresh_race_resolved", { mode: g(r) }),
            n("wif: adopting sibling-rotated access token from credentials file; skipping refresh grant"),
            { token: u, expiresAt: typeof m === "number" ? m : null }
          );
        }
      } catch (f) {
        n(`wif: rotated-token adoption check failed: ${l(f)}`);
      }
    return e(i);
  };
}
function x(e, t) {
  let r = async () => {
    try {
      let o = await import("fs");
      return JSON.parse(await o.promises.readFile(t, "utf-8"));
    } catch {
      return null;
    }
  };
  return async (o) => {
    let f = (await r())?.refresh_token;
    try {
      return await e(o);
    } catch (d) {
      if (
        d instanceof xa &&
        (d.statusCode === 400 || d.statusCode === 401) &&
        typeof d.body === "string" &&
        d.body.includes('"invalid_grant"') &&
        Kpe(d) === null &&
        typeof f === "string" &&
        f
      )
        try {
          let u = await r();
          if (u && u.refresh_token === f) {
            let { logEvent: m } = await import("/$bunfs/root/chunk-wzh402yr.js");
            await wie(t, { ...u, refresh_token: void 0 }), m("tengu_wif_user_oauth_refresh_token_cleared", {});
          }
        } catch (u) {
          if (Ht(u)) n(`wif: refresh-token cleanup write failed: ${u}`);
          else h(ft(we(u), "WIF: failed to clear stale user_oauth refresh_token"));
        }
      throw d;
    }
  };
}
function W(e) {
  if (p1e(e)) return "no_refresh_available";
  if (Kpe(e)) return "account_on_hold";
  if (typeof e.body === "string" && e.body.includes('"invalid_grant"')) return "invalid_grant";
  if (typeof e.statusCode === "number") {
    if (e.statusCode >= 500) return "http_5xx";
    if (e.statusCode >= 400) return "http_4xx";
  }
  let t = e.message.toLowerCase();
  if (t.includes("parse") || t.includes("json")) return "parse_failed";
  return "network_error";
}
function mGt() {
  w().reset(), WTt();
}
var k = (e) => process.env[e]?.trim() || void 0;
async function N() {
  if (cb() === "env-quad") {
    let e = k("ANTHROPIC_FEDERATION_RULE_ID"),
      t = k("ANTHROPIC_ORGANIZATION_ID");
    if (e && t) {
      let r = k("ANTHROPIC_IDENTITY_TOKEN_FILE");
      return {
        organization_id: t,
        workspace_id: k("ANTHROPIC_WORKSPACE_ID"),
        base_url: k("ANTHROPIC_BASE_URL"),
        authentication: {
          type: "oidc_federation",
          federation_rule_id: e,
          service_account_id: k("ANTHROPIC_SERVICE_ACCOUNT_ID"),
          identity_token: r ? { source: "file", path: r } : void 0,
          scope: k("ANTHROPIC_SCOPE"),
        },
      };
    }
  }
  return U5t();
}
async function D(e, t) {
  if (e.authentication.type !== "oidc_federation") return null;
  let r = e.authentication.identity_token?.path,
    o;
  if (r)
    try {
      o = (await S(r, "utf-8")).trim();
    } catch (d) {
      return n(`wif: cannot read identity token at ${r} (${l(d)}); federation token cache disabled`), null;
    }
  else o = k("ANTHROPIC_IDENTITY_TOKEN");
  if (!o) return n("wif: no identity token; federation token cache disabled"), null;
  let i = Vpe();
  if (i === null) return n("wif: no config directory; federation token cache disabled"), null;
  try {
    await R(i, { recursive: true, mode: 448 });
    {
      let d = await F(i),
        u = d.mode & 511;
      if (u & 63)
        return (
          n(
            `wif: ${i} is mode 0o${u.toString(8)} (filesystem ignores modes, or directory pre-existed shared); federation token cache disabled`,
          ),
          null
        );
      let m = process.getuid?.();
      if (m !== void 0 && d.uid !== m)
        return n(`wif: ${i} is owned by uid ${d.uid}, not ${m}; federation token cache disabled`), null;
    }
  } catch (d) {
    return n(`wif: cannot prepare ${i} (${l(d)}); federation token cache disabled`), null;
  }
  let f = Nn(
    JSON.stringify([
      e.authentication.federation_rule_id,
      e.organization_id,
      e.workspace_id ?? "",
      e.authentication.service_account_id ?? "",
      e.authentication.scope ?? "",
      t,
      Nn(o),
    ]),
  );
  return O(i, `${f}.json`);
}
export { pGt, fGt, xir, cbr, Gpe, zpe, JAn, d5, mGt };
