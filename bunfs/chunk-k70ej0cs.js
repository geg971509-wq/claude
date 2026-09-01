// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $n } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { wJ, zt } from "/$bunfs/root/chunk-qm65zb83.js";
import { p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { le, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { C$, rS, iN, v$ } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { vn } from "/$bunfs/root/chunk-k4a21mkt.js";
import { Gi } from "/$bunfs/root/chunk-4rh74qms.js";
import { UT } from "/$bunfs/root/chunk-r3qa2s4k.js";
import { jR } from "/$bunfs/root/chunk-czh9aynm.js";
import { join as O } from "path";
async function Rhe(r) {
  try {
    return (await vn().readAsync(r))?.designOauth ?? null;
  } catch (t) {
    return n(`Failed to read design OAuth tokens: ${l(t)}`, { level: "error" }), null;
  }
}
async function Qot(r, t) {
  try {
    let o = false,
      s = await vn().mutate((e) => {
        if (t?.onlyIf && !t.onlyIf(e.designOauth)) return (o = true), e;
        return { ...e, designOauth: r };
      });
    return o ? { ...s, raced: true } : s;
  } catch (o) {
    return (
      n(`Failed to save design OAuth tokens: ${l(o)}`, { level: "error" }),
      { success: false, warning: "Failed to save design OAuth tokens" }
    );
  }
}
async function d(r) {
  try {
    await vn().mutate((t) => {
      if (!t.designOauth) return t;
      if (!r(t.designOauth)) return t;
      let o = { ...t };
      return delete o.designOauth, o;
    });
  } catch (t) {
    n(`Failed to clear design OAuth tokens: ${l(t)}`, { level: "error" });
  }
}
var D = ".design_oauth_refresh.lock",
  w = 5;
class T extends Error {
  constructor() {
    super("Design OAuth lock contention: another process is holding the refresh lock");
    this.name = "DesignOauthLockContendedError";
  }
}
async function y(r) {
  let t = UT();
  await le().mkdir(t);
  let o = O(t, D),
    s = false,
    e,
    c = 0;
  while (!e) {
    c++;
    try {
      e = await Gi(o, {
        lockfilePath: o,
        realpath: false,
        stale: 60000,
        update: 5000,
        onCompromised: (i) => {
          (s = true), n(`Design OAuth refresh lock compromised: ${i.message}`, { level: "error" });
        },
      });
    } catch (i) {
      if (i.code === "ELOCKED") {
        if (c < w) {
          await ne(1000 + Math.random() * 1000);
          continue;
        }
        throw new T();
      }
      throw i;
    }
  }
  let u = { isCompromised: () => s };
  try {
    return await r(u);
  } finally {
    try {
      await e();
    } catch (i) {
      n(`Design OAuth refresh lock release failed: ${l(i)}`, { level: "error" });
    }
  }
}
async function m() {
  let r = vn();
  return r.invalidateCache?.(), (await r.readAsync())?.designOauth ?? null;
}
async function Den(r) {
  let t = await Rhe(r);
  if (!t?.accessToken) return { ok: false, reason: "needs_design_login" };
  if (!iN(t.expiresAt)) return { ok: true, accessToken: t.accessToken };
  try {
    return await y(async (o) => {
      let s = await m();
      if (!s?.accessToken) return { ok: false, reason: "needs_design_login" };
      if (!iN(s.expiresAt)) return { ok: true, accessToken: s.accessToken };
      if (!s.refreshToken) {
        let e = s.refreshToken;
        return await d((c) => c.refreshToken === e), { ok: false, reason: "needs_design_login" };
      }
      if (!Array.isArray(s.scopes) || s.scopes.length === 0) {
        let e = s.refreshToken;
        return await d((c) => c.refreshToken === e), { ok: false, reason: "needs_design_login" };
      }
      if (o.isCompromised())
        return (
          g("oauth_token_refresh", "design_oauth_refresh_lock_compromised"),
          { ok: false, reason: "design_refresh_failed", detail: "another process is refreshing the design token" }
        );
      try {
        let e = await C$(s.refreshToken, { clientId: s.clientId, scopes: s.scopes, skipProfileFetch: true });
        if (!e.refreshToken || !e.expiresAt) {
          if (e.refreshToken && e.refreshToken !== s.refreshToken) await rS(e.refreshToken, s.clientId);
          return {
            ok: false,
            reason: "design_refresh_failed",
            detail: "refresh response missing refresh_token or expiry",
          };
        }
        if (!wJ.every((i) => e.scopes.includes(i))) {
          if (e.refreshToken) await rS(e.refreshToken, s.clientId);
          let i = s.refreshToken;
          return (
            await d((f) => f.refreshToken === i),
            { ok: false, reason: "needs_design_login", detail: "refresh response missing design scopes" }
          );
        }
        let c = s.refreshToken,
          u = await Qot(
            {
              accessToken: e.accessToken,
              refreshToken: e.refreshToken,
              expiresAt: e.expiresAt,
              scopes: e.scopes.filter((i) => wJ.some((f) => f === i)),
              clientId: s.clientId,
            },
            { onlyIf: (i) => i?.refreshToken === c },
          );
        if (u.raced) {
          await rS(e.refreshToken, s.clientId);
          let i = await m();
          return i?.accessToken && !iN(i.expiresAt)
            ? { ok: true, accessToken: i.accessToken }
            : { ok: false, reason: "needs_design_login" };
        }
        if (!u.success)
          n("Design OAuth refresh succeeded but persist failed; continuing with in-memory token.", { level: "error" });
        return { ok: true, accessToken: e.accessToken };
      } catch (e) {
        if (o.isCompromised()) {
          let c = await m();
          if (c?.accessToken && !iN(c.expiresAt)) return { ok: true, accessToken: c.accessToken };
          if (!v$(e)) g("oauth_token_refresh", "design_oauth_refresh_lock_compromised");
          return { ok: false, reason: "design_refresh_failed", detail: "another process is refreshing the design token" };
        }
        if (v$(e)) {
          let c = s.refreshToken;
          return (
            await d((u) => u.refreshToken === c),
            { ok: false, reason: "needs_design_login", detail: "design authorization expired" }
          );
        }
        return { ok: false, reason: "design_refresh_failed", detail: l(e) };
      }
    });
  } catch (o) {
    if (o instanceof T) g("oauth_token_refresh", "design_oauth_refresh_lock_contention");
    else h(o), p("oauth_token_refresh", "design_oauth_refresh_lock_error");
    return { ok: false, reason: "design_refresh_failed", detail: l(o) };
  }
}
function Zot() {
  return a.CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID ?? zt().DESIGN_CLIENT_ID;
}
function B0e() {
  return !Zot().startsWith("00000000-");
}
async function NIt(r, t) {
  let o = wJ.filter((s) => !r.scopes.includes(s));
  if (o.length > 0) {
    if (r.refreshToken) await rS(r.refreshToken, t);
    return {
      ok: false,
      message: `The authorization server did not grant the design scopes (missing: ${o.join(", ")}) \u2014 the Claude Design app registration may be incomplete or out of date.`,
    };
  }
  if (!r.refreshToken || !r.expiresAt) {
    if (r.refreshToken) await rS(r.refreshToken, t);
    return {
      ok: false,
      message:
        "The token response was missing a refresh token or expiry \u2014 cannot store a usable design credential.",
    };
  }
  return {
    ok: true,
    slot: {
      accessToken: r.accessToken,
      refreshToken: r.refreshToken,
      expiresAt: r.expiresAt,
      scopes: r.scopes.filter((s) => wJ.some((e) => e === s)),
      clientId: t,
    },
  };
}
function Oen() {
  return a.isSSH() || a.CLAUDE_CODE_REMOTE === true || $n();
}
var A = 300000;
async function TUn(r) {
  if (r?.aborted) return { ok: false, message: "Design login was interrupted." };
  if (!B0e())
    return {
      ok: false,
      message:
        "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client.",
    };
  if (Oen())
    return {
      ok: false,
      message:
        "This session is remote, so the browser can't reach the local sign-in listener. Run /design-login instead \u2014 it supports pasting the authorization code manually.",
    };
  let t = Zot(),
    o = new jR(),
    s = false,
    e = false,
    c;
  try {
    let u = o.startOAuthFlow(async () => {}, {
      loginWithClaudeAi: true,
      oauthClient: { clientId: t, scopes: wJ },
      skipProfileFetch: true,
      successRedirectUrl: zt().CLAUDEAI_SUCCESS_URL,
    });
    u.then((k) => {
      if (e && k.refreshToken) rS(k.refreshToken, t);
    }).catch(() => {});
    let i = await Promise.race([
        u,
        new Promise((k, _) => {
          (c = setTimeout(() => {
            (s = true), (e = true), _(Error("design login timed out"));
          }, A)),
            r?.addEventListener(
              "abort",
              () => {
                (e = true), _(Error("design login interrupted"));
              },
              { once: true },
            );
        }),
      ]),
      f = await NIt(i, t);
    if (!f.ok) return { ok: false, message: f.message };
    if (!(await Qot(f.slot)).success)
      return (
        await rS(f.slot.refreshToken, f.slot.clientId),
        { ok: false, message: "Could not save the design credential to secure storage. Retry, or run /design-login." }
      );
    return { ok: true, accessToken: f.slot.accessToken };
  } catch (u) {
    if (((e = true), r?.aborted)) return { ok: false, message: "Design login was interrupted." };
    if (s)
      return {
        ok: false,
        message:
          "The browser authorization timed out after 5 minutes. Retry, or run /design-login for the manual flow.",
      };
    return {
      ok: false,
      message: `The browser authorization failed (${l(u)}). Run /design-login to retry with the manual flow.`,
    };
  } finally {
    if (c !== void 0) clearTimeout(c);
    o.cleanup();
  }
}
export { Rhe, Qot, Den, Zot, B0e, NIt, Oen, TUn };
