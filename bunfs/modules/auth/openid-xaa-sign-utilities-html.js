// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { CMt, ain, Cjn } from "/$bunfs/root/chunk-wz9hxxhj.js";
import { we, l } from "/$bunfs/root/chunk-ypdw393e.js";
import { V } from "/$bunfs/root/chunk-fv016jr6.js";
import { Z } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Hr } from "/$bunfs/root/chunk-ca80fke8.js";
import { Ri } from "/$bunfs/root/chunk-rf51999f.js";
import { vn } from "/$bunfs/root/chunk-k4a21mkt.js";
import { cE, b8 } from "/$bunfs/root/chunk-tcj8crqm.js";
import { Lr } from "/$bunfs/root/chunk-31xy83wr.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { randomBytes as k } from "crypto";
import { createServer as x } from "http";
import { parse as b } from "url";
var E = 300000,
  S = 30000,
  _ = 60;
function OWe(n) {
  try {
    let t = new URL(n);
    return (t.pathname = t.pathname.replace(/\/+$/, "")), (t.host = t.host.toLowerCase()), t.toString();
  } catch {
    return n.replace(/\/+$/, "");
  }
}
async function aat(n) {
  let r = (await vn().readAsync())?.mcpXaaIdp?.[OWe(n)];
  if (!r) return;
  if (r.expiresAt - Date.now() <= _ * 1000) return;
  return r.idToken;
}
async function A(n, t, e) {
  await vn().mutate((r) => ({ ...r, mcpXaaIdp: { ...r.mcpXaaIdp, [OWe(n)]: { idToken: t, expiresAt: e } } }));
}
async function SAr(n, t) {
  let e = C(t),
    r = e ? e * 1000 : Date.now() + 3600000;
  return await A(n, t, r), r;
}
async function eOt(n) {
  let t = OWe(n);
  try {
    await vn().mutate((e) => {
      if (!e.mcpXaaIdp?.[t]) return e;
      let r = { ...e.mcpXaaIdp };
      return delete r[t], { ...e, mcpXaaIdp: r };
    });
  } catch (e) {
    Z("xaa", `clearIdpIdToken(${t}) failed: ${l(e)}`);
  }
}
async function bAr(n, t) {
  try {
    return await vn().mutate((e) => ({
      ...e,
      mcpXaaIdpConfig: { ...e.mcpXaaIdpConfig, [OWe(n)]: { clientSecret: t } },
    }));
  } catch (e) {
    return { success: false, warning: l(e) };
  }
}
async function tOt(n) {
  return (await vn().readAsync())?.mcpXaaIdpConfig?.[OWe(n)]?.clientSecret;
}
async function wAr(n) {
  let t = OWe(n);
  try {
    await vn().mutate((e) => {
      if (!e.mcpXaaIdpConfig?.[t]) return e;
      let r = { ...e.mcpXaaIdpConfig };
      return delete r[t], { ...e, mcpXaaIdpConfig: r };
    });
  } catch (e) {
    Z("xaa", `clearIdpClientSecret(${t}) failed: ${l(e)}`);
  }
}
async function lat(n) {
  let t = n.endsWith("/") ? n : n + "/",
    e = new URL(".well-known/openid-configuration", t),
    r = await fetch(e, {
      ...Ri({ url: String(e) }),
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(S),
    });
  if (!r.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${r.status} at ${e}`);
  let o;
  try {
    o = await r.json();
  } catch {
    throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${e} (captive portal or proxy?)`);
  }
  let s = CMt.safeParse(o);
  if (!s.success) throw Error(`XAA IdP: invalid OIDC metadata: ${s.error.message}`);
  if (new URL(s.data.token_endpoint).protocol !== "https:")
    throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${s.data.token_endpoint}`);
  return s.data;
}
function C(n) {
  let t = n.split(".");
  if (t.length !== 3) return;
  try {
    let e = V(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0;
  } catch {
    return;
  }
}
function v(n, t, e, r) {
  let o = null,
    s = null,
    u = null,
    m = () => {
      if ((o?.removeAllListeners(), o?.on("error", () => {}), o?.close(), (o = null), s)) clearTimeout(s), (s = null);
      if (e && u) e.removeEventListener("abort", u), (u = null);
    };
  return new Promise((f, g) => {
    let p = false,
      h = (i) => {
        if (p) return;
        (p = true), m(), f(i);
      },
      d = (i) => {
        if (p) return;
        (p = true), m(), g(i);
      };
    if (e) {
      if (((u = () => d(Error("XAA IdP: login cancelled"))), e.aborted)) {
        u();
        return;
      }
      e.addEventListener("abort", u, { once: true });
    }
    (o = x((i, a) => {
      let c = b(i.url || "", true);
      if (c.pathname !== "/callback") {
        a.writeHead(404), a.end();
        return;
      }
      let I = c.query.code,
        P = c.query.state,
        w = c.query.error;
      if (w) {
        let y = c.query.error_description;
        a.writeHead(400, { "Content-Type": "text/html" }),
          a.end(
            cE({
              ok: false,
              heading: "Sign-in failed",
              message: "Close this tab and try again from Claude Code.",
              detail: `${w}: ${y ?? ""}`,
            }),
          ),
          d(Error(`XAA IdP: ${w}${y ? ` \u2014 ${y}` : ""}`));
        return;
      }
      if (P !== t) {
        a.writeHead(400, { "Content-Type": "text/html" }),
          a.end(cE({ ok: false, heading: "Sign-in failed", message: "State mismatch. Close this tab and try again." })),
          d(Error("XAA IdP: state mismatch (possible CSRF)"));
        return;
      }
      if (!I) {
        a.writeHead(400, { "Content-Type": "text/html" }),
          a.end(
            cE({
              ok: false,
              heading: "Sign-in failed",
              message: "No authorization code received. Close this tab and try again.",
            }),
          ),
          d(Error("XAA IdP: callback missing code"));
        return;
      }
      a.writeHead(200, { "Content-Type": "text/html" }),
        a.end(
          cE({ ok: true, heading: "Sign-in complete", message: "You can close this tab and return to Claude Code." }),
        ),
        h(I);
    })),
      o.on("error", (i) => {
        if (i.code === "EADDRINUSE") {
          let a = D() === "windows" ? `netstat -ano | findstr :${n}` : `lsof -ti:${n} -sTCP:LISTEN`;
          d(Error(`XAA IdP: callback port ${n} is already in use. Run \`${a}\` to find the holder.`));
        } else d(Error(`XAA IdP: callback server failed: ${i.message}`));
      }),
      o.listen(n, "127.0.0.1", () => {
        try {
          r();
        } catch (i) {
          d(we(i));
        }
      }),
      o.unref(),
      (s = setTimeout((i) => i(Error("XAA IdP: login timed out")), E, d)),
      s.unref();
  });
}
async function Brn(n) {
  return Hr("mcp_xaa_idp_login", async () => {
    let { idpIssuer: t, idpClientId: e } = n,
      r = await aat(t);
    if (r) return Z("xaa", `Using cached id_token for ${t}`), r;
    Z("xaa", `No cached id_token for ${t}; starting OIDC login`);
    let o = await lat(t),
      s = n.callbackPort ?? (await b8()),
      u = `http://localhost:${s}/callback`,
      m = k(32).toString("base64url"),
      f = { client_id: e, ...(n.idpClientSecret && { client_secret: n.idpClientSecret }) },
      { authorizationUrl: g, codeVerifier: p } = await ain(t, {
        metadata: o,
        clientInformation: f,
        redirectUrl: u,
        scope: "openid",
        state: m,
      }),
      h = await v(s, m, n.abortSignal, () => {
        if ((n.onAuthorizationUrl(g.toString()), !n.skipBrowserOpen))
          Z("xaa", "Opening browser to IdP authorization endpoint"), Lr(g.toString());
      }),
      d = await Cjn(t, {
        metadata: o,
        clientInformation: f,
        authorizationCode: h,
        codeVerifier: p,
        redirectUri: u,
        fetchFn: (c, I) => fetch(c, { ...I, ...Ri({ url: String(c) }), signal: AbortSignal.timeout(S) }),
      });
    if (!d.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let i = C(d.id_token),
      a = i ? i * 1000 : Date.now() + (d.expires_in ?? 3600) * 1000;
    try {
      await A(t, d.id_token, a), Z("xaa", `Cached id_token for ${t} (expires ${new Date(a).toISOString()})`);
    } catch (c) {
      Z("xaa", `id_token cache write failed: ${l(c)}`);
    }
    return d.id_token;
  });
}
export { OWe, aat, SAr, eOt, bAr, tOt, wAr, lat, Brn };
