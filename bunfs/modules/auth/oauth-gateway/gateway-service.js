// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { A$, Awt, C$, D$, D2, DC, F$, FSn, Gt, HW, He, J6, K$, Kz, LV, NT, O3, P$, R, Ri, Ry, S$, S3, SC, T, Tin, UEe, V, VLt, Vz, X, Xt, Z$, ZAe, _O, a, aR, alt, b, bEn, bH, bp, cTt, ce, d9e, gre, hre, j, jMt, jm, k$, kMe, l, l3t, lP, llt, m, pP, pR, pc, pn, qZ, qpe, r3t, rNe, rlt, so, tCe, te, ud, uxe, vH, w3, wEn, x$, yh, zLt, zp } from "/$bunfs/root/modules/chunk-aestrhzj/prelude.js";
import { Lg } from "/$bunfs/root/modules/chunk-aestrhzj/module-001.js";
import { Ul } from "/$bunfs/root/modules/chunk-aestrhzj/module-002.js";
import { hk, lp } from "/$bunfs/root/modules/chunk-aestrhzj/module-004.js";

var mi = j(Lg(), 1);

var Tl = mi.default.Issuer,
  s5 = mi.default.Strategy,
  u5 = mi.default.TokenSet,
  c5 = mi.default.errors,
  Ko = mi.default.custom,
  Ni = mi.default.generators;

var Ug = 1;

function Ng(e) {
  return (Array.isArray(e) ? e : [e]).map((n) => {
    let i = S$("sha256").update(n).digest();
    return { kid: i.subarray(0, 8).toString("hex"), seal: i, sign: new TextEncoder().encode(n) };
  });
}

function Zg(e, t) {
  return (n) => {
    let i = n.kid === void 0 ? e[0] : e.find((r) => r.kid === n.kid);
    if (!i) throw Error("unknown kid");
    return i[t];
  };
}

var O$ = 300;

function Fg(e, t) {
  return Al("oauth_state", e, t, O$);
}

async function Bg(e, t) {
  return await Rl("oauth_state", e, t);
}

function Al(e, t, n, i) {
  return new alt({ ...t, kind: e })
    .setProtectedHeader({ alg: "dir", enc: "A256GCM", kid: n[0].kid })
    .setIssuedAt()
    .setExpirationTime(`${i}s`)
    .encrypt(n[0].seal);
}

async function Rl(e, t, n) {
  try {
    let { payload: i } = await VLt(t, Zg(n, "seal"), {
      keyManagementAlgorithms: ["dir"],
      contentEncryptionAlgorithms: ["A256GCM"],
    });
    return i.kind === e ? i : null;
  } catch {
    return null;
  }
}

var Kg = "claude-gateway";

function qg(e, t, n, i) {
  let r = new uxe(e)
    .setProtectedHeader({ alg: "HS256", typ: "JWT", kid: t[0].kid })
    .setAudience(Kg)
    .setIssuedAt()
    .setExpirationTime(`${n}h`);
  if (i) r.setIssuer(i);
  return r.sign(t[0].sign);
}

async function jl(e, t, n) {
  try {
    let { payload: i } = await d9e(e, Zg(t, "sign"), { algorithms: ["HS256"], audience: Kg, ...(n && { issuer: n }) });
    return i;
  } catch {
    return null;
  }
}

var Dl = "urn:ietf:params:oauth:grant-type:device_code",
  xl = 5,
  Zi = 600,
  Hg = "BCDFGHJKMNPQRSTVWXYZ",
  Cl = 8;

function Vg() {
  let e = P$(Cl),
    t = "";
  for (let n = 0; n < Cl; n++) {
    if (n === Cl / 2) t += "-";
    t += Hg[e[n] % Hg.length];
  }
  return t;
}

function Gg() {
  return Ni.random();
}

function E$(e) {
  return e.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function Ml(e, t) {
  return Al("device_grant", { r: e }, t, Zi);
}

async function zl(e, t) {
  let n = await Rl("device_grant", e, t);
  return n?.r ? n.r : null;
}

function Ll(e) {
  return `device:dc:${k$("sha256").update(e).digest("hex")}`;
}

function ts(e) {
  return `device:uc:${E$(e)}`;
}

function rs(e, t) {
  return `rl:${e}:${t}`;
}

var ns = { debug: 0, info: 1, warn: 2, error: 3 };

function $$() {
  let e = a.CLAUDE_GATEWAY_LOG_LEVEL?.toLowerCase();
  return e && e in ns ? ns[e] : ns.info;
}

var I$ = { "\n": "\\n", "\r": "\\r", "\t": "\\t" };

function T$(e) {
  return e.replace(
    /[\u0000-\u001f\u007f-\u009f\u2028\u2029]/g,
    (t) => I$[t] ?? `\\u${t.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );
}

function Z(e, t) {
  if (ns[e] < $$()) return;
  process.stderr.write(`[gateway] ${new Date().toISOString()} ${e} ${T$(t)}
`);
}

function wt(e, t) {
  process.stderr.write(`${JSON.stringify({ ts: new Date().toISOString(), evt: e, ...t })}
`);
}

function Wg(e, t) {
  process.stderr.write(
    `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
` +
      `\u2502  Claude Code Gateway                \u2502
` +
      `\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`,
  );
  let n = t.tls ? "https" : "http",
    i = ["metrics", "logs", "traces"].filter((r) => e.telemetry.forward_to.some((o) => o[r]));
  if ((Z("info", `claude gateway listening on ${n}://${t.hostname}:${t.port}`), e.listen.public_url))
    Z("info", `public_url ${e.listen.public_url}`);
  if (e.oidc) {
    Z("info", `oidc issuer ${e.oidc.issuer}`);
    let r = e.oidc.allowed_email_domains ?? [];
    Z("info", `email domains ${r.length > 0 ? r.join(",") : "(unrestricted)"}`);
    let o = e.oidc.allowed_groups ?? [];
    Z("info", `allowed groups ${o.length > 0 ? o.join(",") : "(unrestricted)"}`);
  } else Z("info", "oidc: not configured (customer-routed inference only)");
  if (e.cri?.enabled)
    Z(
      "info",
      `customer-routed inference: enabled (${e.cri.org_allowlist.length} allowed org(s), policy webhook ${e.cri.policy?.webhook ? "configured" : "not configured"})`,
    );
  Z("info", `upstreams ${e.upstreams.length}: ${e.upstreams.map((r) => `${r.name}(${r.provider})`).join(", ")}`),
    Z(
      "info",
      e.telemetry.forward_to.length === 0
        ? "telemetry relay: not configured"
        : `telemetry relay: ${e.telemetry.forward_to.length} destination(s), signals enabled: ${i.join(",") || "none"}`,
    ),
    Z("info", `managed settings: ${t.managed ? "configured" : "not configured"}`);
}

var Jg = "https://oauth2.googleapis.com/token",
  R$ = "https://admin.googleapis.com/admin/directory/v1/groups",
  j$ = "https://www.googleapis.com/auth/admin.directory.group.readonly";

async function Yg(e) {
  let t = await A$(e.service_account_json_path, "utf8"),
    n = V(t);
  if (typeof n.client_email !== "string" || typeof n.private_key !== "string")
    throw Error(
      `oidc.google_groups: ${e.service_account_json_path} is not a Google service-account key (missing client_email or private_key)`,
    );
  let i = await zLt(n.private_key, "RS256"),
    r;
  async function o() {
    let s = Math.floor(Date.now() / 1000);
    if (r && r.exp - 60 > s) return r.token;
    let u = await new uxe({ scope: j$ })
        .setProtectedHeader({ alg: "RS256", typ: "JWT" })
        .setIssuer(n.client_email)
        .setSubject(e.admin_email)
        .setAudience(Jg)
        .setIssuedAt(s)
        .setExpirationTime(s + 3600)
        .sign(i),
      c = await fetch(Jg, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: u }),
        signal: AbortSignal.timeout(1e4),
      });
    if (!c.ok) throw Error(`google token endpoint ${c.status}: ${(await c.text()).slice(0, 500)}`);
    let d = await c.json();
    if (typeof d.access_token !== "string") throw Error("google token endpoint returned no access_token");
    return (r = { token: d.access_token, exp: s + (d.expires_in ?? 3600) }), d.access_token;
  }
  return async function (u) {
    try {
      let c = await o(),
        d = [],
        f;
      for (let p = 0; p < 50; p++) {
        let h = new URL(R$);
        if ((h.searchParams.set("userKey", u), h.searchParams.set("maxResults", "200"), f))
          h.searchParams.set("pageToken", f);
        let y = await fetch(h, { headers: { authorization: `Bearer ${c}` }, signal: AbortSignal.timeout(1e4) });
        if (!y.ok) {
          if (y.status === 401) r = void 0;
          throw Error(`directory API ${y.status}: ${(await y.text()).slice(0, 500)}`);
        }
        let v = await y.json();
        for (let k of v.groups ?? []) if (typeof k.email === "string") d.push(k.email.toLowerCase());
        if (((f = v.nextPageToken), !f)) break;
      }
      return d;
    } catch (c) {
      let d = c instanceof Error ? c.message : String(c);
      throw (
        (Z("warn", `google_groups lookup failed: ${d}`),
        Object.assign(Error(`google_groups lookup failed: ${d}`), { code: "GOOGLE_GROUPS_UNAVAILABLE" }))
      );
    }
  };
}

var Vo = j(Ul(), 1);

var Nl = "ECONNREFUSED_SSRF: blocked (cloud metadata / link-local)";

function Ho() {
  return a.CLAUDE_GATEWAY_ALLOW_LOOPBACK;
}

function Go(e) {
  return Ho() && An(e);
}

function An(e) {
  try {
    let t = new URL(e).hostname
      .toLowerCase()
      .replace(/^\[|\]$/g, "")
      .replace(/\.$/, "");
    if (t === "localhost") return true;
    let n = Vo.parse(t).range();
    return n === "loopback" || n === "unspecified";
  } catch {
    return false;
  }
}

function Zl(e) {
  let t;
  try {
    t = Vo.parse(e.replace(/^\[|\]$/g, ""));
  } catch {
    return false;
  }
  if (t.kind() === "ipv6") {
    let r = t;
    if (r.isIPv4MappedAddress()) t = r.toIPv4Address();
    else {
      let o = r.range();
      if (o === "linkLocal") return true;
      if (o === "loopback" || o === "unspecified") return !Ho();
      if (r.toNormalizedString() === "fd00:ec2:0:0:0:0:0:254") return true;
      return false;
    }
  }
  let n = t.toString(),
    i = t.range();
  if (i === "linkLocal") return true;
  if (i === "unspecified") return !Ho();
  if (i === "loopback") return !Ho();
  if (n === "100.100.100.200") return true;
  return false;
}

var M$ = new Set(["metadata.google.internal", "metadata.goog", "metadata"]);

function mt(e) {
  try {
    let t = new URL(e);
    if (t.protocol !== "https:" && t.protocol !== "http:") return false;
    let n = t.hostname
      .toLowerCase()
      .replace(/^\[|\]$/g, "")
      .replace(/\.$/, "");
    if (M$.has(n)) return false;
    return !Zl(n);
  } catch {
    return false;
  }
}

var is = (e, t, n) => {
  let i = typeof t === "function" ? {} : t,
    r = typeof t === "function" ? t : n;
  D$(e, { ...i, all: true }, (o, s) => {
    if (o) return r(o);
    if (s.length === 0) return r(Object.assign(Error(`getaddrinfo ENOTFOUND ${e}`), { code: "ENOTFOUND" }));
    for (let { address: c } of s) if (Zl(c)) return r(Error(`${Nl}: ${e} \u2192 ${c}`));
    let u = s.find((c) => c.family === 4) ?? s[0];
    if (i.all) return r(null, [u]);
    return r(null, u.address, u.family);
  });
};

async function gi(e, t) {
  if (!mt(e)) throw Error(`${Nl}: ${e}`);
  let n = new URL(e),
    i = n.hostname.replace(/^\[|\]$/g, "").replace(/\.$/, ""),
    r = { ...t, redirect: "manual" };
  if (Vo.isValid(i)) return fetch(n, r);
  let o = await C$.lookup(i, { all: true });
  if (o.length === 0) throw Object.assign(Error(`getaddrinfo ENOTFOUND ${i}`), { code: "ENOTFOUND" });
  for (let { address: d } of o) if (Zl(d)) throw Error(`${Nl}: ${i} \u2192 ${d}`);
  let s = o.find((d) => d.family === 4) ?? o[0],
    u = n.host;
  n.hostname = s.family === 6 ? `[${s.address}]` : s.address;
  let c = new Headers(r.headers);
  return (
    c.set("host", u),
    fetch(n, {
      ...r,
      headers: c,
      ...(n.protocol === "https:" && { tls: { ...r.tls, serverName: i, checkServerIdentity: (d, f) => x$(i, f) } }),
    })
  );
}

async function Qg() {
  if (Ho()) return;
  try {
    await fetch("http://169.254.169.254/", { signal: AbortSignal.timeout(200), redirect: "manual" }),
      Z(
        "warn",
        "pod can reach cloud metadata endpoint (169.254.169.254); apply egress NetworkPolicy (see src/gateway/docs/docker/network-policy.yaml)",
      );
  } catch {}
}

function os(e, t, n, i) {
  return Xt(gi(e, { ...t, ...Ri({ url: e }), timeout: false, signal: AbortSignal.timeout(n) }), n + 500, i);
}

var Bl = "https://api.anthropic.com/api/oauth/cri",
  z5 = `${Bl}/jwks.json`,
  Kl = "cri+jwt";

function eh(e) {
  try {
    return llt(e).typ === Kl;
  } catch {
    return false;
  }
}

var as = "ES256",
  z$ = 60,
  L$ = 1e4,
  Fl = 21600000,
  U$ = 600000,
  N$ = 60000;

function th(e) {
  let t = new Set(e.orgAllowlist.map((v) => v.toLowerCase())),
    n = [...e.audience],
    i = e.issuer ?? Bl,
    r = e.jwksUrl ?? `${i}/jwks.json`;
  if (e.jwksUrl !== void 0) {
    if (!An(r))
      throw Error(
        "cri.jwks_url must be a loopback URL \u2014 it exists for tests against local mocks, and honoring an external URL here would let it substitute the admission authority (its keys would mint CRI principals). Remove it.",
      );
    if (!Go(r))
      throw Error(
        "cri.jwks_url targets loopback but CLAUDE_GATEWAY_ALLOW_LOOPBACK is not set \u2014 safeFetch would block every JWKS fetch at runtime. Set the escape (tests) or remove the override.",
      );
    Z(
      "warn",
      `cri.jwks_url is set \u2014 CRI JWT verification keys are NOT coming from ${i}/jwks.json. This override exists for tests; never set it in production.`,
    );
  } else if (i !== Bl) {
    if (!An(r)) {
      if (!r.startsWith("https://"))
        throw Error(
          "cri.issuer must be https:// (http:// allowed for loopback only) \u2014 the verification JWKS derives from it, and keys fetched over plaintext invite substitution.",
        );
      if (!mt(r))
        throw Error(
          "cri.issuer must not target a cloud metadata endpoint \u2014 the verification JWKS derives from it.",
        );
    } else if (!Go(r))
      throw Error(
        "cri.issuer targets loopback but CLAUDE_GATEWAY_ALLOW_LOOPBACK is not set \u2014 safeFetch would block every derived-JWKS fetch at runtime. Set the escape (tests) or remove the issuer override.",
      );
  }
  let o = new Map(),
    s = 0,
    u = 0,
    c = 0,
    d = null;
  async function f() {
    let v;
    try {
      v = await os(r, { method: "GET" }, L$, "JWKS fetch timed out");
    } catch (B) {
      return Z("warn", `cri jwks unreachable: ${l(B)}`), false;
    }
    if (!v.ok) return v.body?.cancel().catch(() => {}), Z("warn", `cri jwks fetch returned ${v.status}`), false;
    let k;
    try {
      k = await v.json();
    } catch {
      return Z("warn", "cri jwks fetch returned unparseable JSON"), false;
    }
    if (typeof k !== "object" || k === null || !Array.isArray(k.keys))
      return Z("warn", "cri jwks fetch returned a non-JWKS body"), false;
    let P = new Map();
    for (let B of k.keys) {
      if (typeof B !== "object" || B === null) continue;
      let Q = B;
      if (Q.kty !== "EC" || Q.crv !== "P-256" || typeof Q.kid !== "string" || Q.kid.length === 0) continue;
      try {
        let ge = await qZ({ ...Q, alg: as }, as);
        P.set(Q.kid, ge);
      } catch (ge) {
        Z("warn", `cri jwks key ${Q.kid} failed to import: ${l(ge)}`);
      }
    }
    if (P.size === 0) return Z("warn", "cri jwks fetch yielded no usable ES256 keys \u2014 keeping previous set"), false;
    return (o = P), (s = Date.now()), (u = s + p(v)), true;
  }
  function p(v) {
    let k = v.headers.get("cache-control") ?? "",
      P = /(?:^|[,\s])max-age=(\d+)/i.exec(k);
    if (!P) return U$;
    return Math.min(Number(P[1]) * 1000, Fl / 2);
  }
  function h(v = false) {
    if (d) return d;
    let k = Date.now();
    if (!v && k - c < N$) return Promise.resolve(false);
    return (
      (c = k),
      (d = f().finally(() => {
        d = null;
      })),
      d
    );
  }
  async function y() {
    let v = Date.now();
    if (o.size > 0 && v < u) return o;
    if (o.size > 0 && v - s <= Fl) return h().catch(() => {}), o;
    if ((await h(), o.size === 0)) return null;
    if (Date.now() - s > Fl) return null;
    return o;
  }
  return {
    async prime() {
      if (!(await h(true)))
        Z(
          "warn",
          "cri jwks prefetch failed \u2014 the CRI wall will answer 503 until the first successful fetch (non-CRI traffic is unaffected)",
        );
    },
    async authenticate(v, k, P, B) {
      let Q = (it, le) => (
          wt("auth.denied", {
            request_id: k,
            reason: `cri_${it}`,
            path: B,
            client_ip: P,
            ...(le !== void 0 && { org: le }),
          }),
          { ok: false, status: 401, reason: it, ...(le !== void 0 && { org: le }) }
        ),
        ge = await y();
      if (ge === null)
        return (
          wt("auth.denied", { request_id: k, reason: "cri_jwks_unavailable", path: B, client_ip: P }),
          { ok: false, status: 503, reason: "jwks_unavailable" }
        );
      let re;
      try {
        re = llt(v);
      } catch {
        return Q("invalid_token");
      }
      if (re.typ !== Kl || re.alg !== as) return Q("invalid_token");
      if (typeof re.kid !== "string" || re.kid.length === 0) return Q("invalid_token");
      let Se = ge.get(re.kid);
      if (Se === void 0) {
        if ((await h(), (Se = o.get(re.kid)), Se === void 0)) return Q("invalid_token");
      }
      let Ge;
      try {
        Ge = (
          await d9e(v, Se, {
            algorithms: [as],
            issuer: i,
            audience: n,
            typ: Kl,
            clockTolerance: z$,
            requiredClaims: ["exp", "iat", "aud", "sub", "org", "scope"],
          })
        ).payload;
      } catch (it) {
        if (it instanceof rlt.JWTClaimValidationFailed && it.claim === "aud" && it.reason === "check_failed")
          return Q("audience_mismatch");
        return Q("invalid_token");
      }
      if (Ge.scope !== "inference") return Q("scope_missing");
      let ve = typeof Ge.org === "string" ? Ge.org.toLowerCase() : null;
      if (ve === null || ve.length === 0) return Q("invalid_token");
      if (!t.has(ve)) return Q("org_not_allowed", ve);
      if (typeof Ge.sub !== "string" || Ge.sub.length === 0) return Q("invalid_token");
      let Oe = typeof Ge.act === "object" && Ge.act !== null && typeof Ge.act.sub === "string" ? Ge.act.sub : void 0;
      return {
        ok: true,
        claims: {
          sub: Ge.sub,
          cri: true,
          org: ve,
          ...(Oe !== void 0 && { act: { sub: Oe } }),
          ...(typeof Ge.exp === "number" && { exp: Ge.exp }),
          ...(typeof Ge.iat === "number" && { iat: Ge.iat }),
        },
      };
    },
  };
}

var rh = j(qpe(), 1);

class nh extends rh.HttpsProxyAgent {
  async connect(e, t) {
    let n = t.host,
      i = { ...t, checkServerIdentity: (r, o) => F$(n ?? "", o) };
    if (n && !Z$(n)) {
      let r = await new Promise((o, s) => is(n, {}, (u, c) => (u ? s(u) : o(c))));
      i = { ...i, host: r, servername: n };
    }
    return super.connect(e, i);
  }
}

function ih(e, t) {
  let n = new nh(e);
  if (t) n.options = { ...n.options, ca: t };
  return n;
}

function B$(e) {
  for (let t of [e.jwks_uri, e.token_endpoint, e.userinfo_endpoint])
    if (t && !mt(t)) throw Error(`OIDC discovery returned a blocked endpoint: ${t}`);
}

async function oh(e) {
  let t = e.ca_cert_pem ? Buffer.from(e.ca_cert_pem) : void 0,
    n = yh(),
    i = e.use_proxy ? n : void 0;
  if (e.use_proxy && !n)
    Z("warn", "oidc.use_proxy is set but no usable HTTPS_PROXY/HTTP_PROXY is set; IdP requests go direct");
  else if (e.use_proxy === void 0 && n && !DC(e.issuer))
    Z(
      "warn",
      "oidc: a proxy is set (HTTPS_PROXY/HTTP_PROXY) but IdP requests currently go direct; this will follow the proxy by default in a future release \u2014 set oidc.use_proxy: true to adopt now, or false to keep direct and silence this warning",
    );
  let r = i ? ih(i, t) : void 0;
  if (i) Z("info", `oidc: IdP requests use proxy ${new URL(i).host}; hosts in NO_PROXY go direct`);
  let o = (d, f) => ({ ...f, ...(r && !DC(d.href) ? { agent: r } : { lookup: is }), ...(t && { ca: t }) });
  Tl[Ko.http_options] = o;
  let s = await Tl.discover(e.discovery_url ?? e.issuer);
  (s[Ko.http_options] = o), B$(s.metadata);
  let u = s.metadata.token_endpoint_auth_methods_supported,
    c = new s.Client(
      {
        client_id: e.client_id,
        client_secret: e.client_secret,
        response_types: ["code"],
        token_endpoint_auth_method:
          e.token_endpoint_auth_method ??
          (u && !u.includes("client_secret_post") ? "client_secret_basic" : "client_secret_post"),
        ...(e.id_token_signed_response_alg && { id_token_signed_response_alg: e.id_token_signed_response_alg }),
      },
      void 0,
      e.additional_authorized_parties ? { additionalAuthorizedParties: e.additional_authorized_parties } : void 0,
    );
  if (((c[Ko.http_options] = o), e.clock_skew_seconds !== void 0)) c[Ko.clock_tolerance] = e.clock_skew_seconds;
  return c;
}

function ah(e, t) {
  let n = e.email_verified;
  if (n !== void 0 && n !== true && n !== "true") throw Error("id_token email is not verified");
  if (!t?.length) return;
  let i = e.email;
  if (typeof i !== "string" || !i.includes("@"))
    throw Error(
      "id_token missing email claim \u2014 configure your IdP to include `email` " +
        "in the id_token, or set oidc.email_claim if it uses a different claim name",
    );
  let r = i.slice(i.lastIndexOf("@") + 1).toLowerCase();
  if (!t.includes(r)) throw Error("email domain not allowed");
}

function sh(e, t) {
  if (!t?.length) return;
  let n = new Set(t);
  if (!e?.some((i) => n.has(i))) throw Error("user is not a member of an allowed group");
}

function ss(e, t) {
  if (!t.startsWith("/")) return e[t];
  let n = e;
  for (let i of t.slice(1).split("/")) {
    if (n === null || typeof n !== "object") return;
    let r = i.replace(/~1/g, "/").replace(/~0/g, "~");
    n = n[r];
  }
  return n;
}

function us(e, t) {
  let n = Array.isArray(t) ? t : [t];
  for (let i of n) {
    let r = ss(e, i);
    if (r !== void 0 && r !== null) return r;
  }
  return;
}

var q$ = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

function hi(e) {
  return e.replace(/[&<>"']/g, (t) => q$[t] ?? t);
}

var H$ = `
*,*::before,*::after{box-sizing:border-box}
html,body{margin:0;padding:0}
body{min-height:100vh;background:#FAF9F5;color:#141413;font:15px/1.5 ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px}
main{width:100%;max-width:560px}
.status{display:inline-flex;align-items:center;gap:8px;padding:4px 10px 4px 8px;border-radius:999px;background:rgba(85,138,66,.10);color:#345C28;font-size:12.5px;font-weight:500;letter-spacing:-.005em;margin-bottom:20px}
.status::before{content:"";width:6px;height:6px;border-radius:50%;background:#558A42;box-shadow:0 0 0 3px rgba(85,138,66,.18)}
.status.err{background:rgba(166,50,68,.08);color:#671D28}
.status.err::before{background:#A63244;box-shadow:0 0 0 3px rgba(166,50,68,.15)}
.status.warn{background:rgba(31,30,29,.06);color:#4D4C48}
.status.warn::before{background:#73726C;box-shadow:0 0 0 3px rgba(31,30,29,.12)}
h1{font-family:ui-serif,Charter,"Iowan Old Style",Georgia,serif;font-weight:400;font-size:32px;line-height:1.15;letter-spacing:-.02em;margin:0 0 10px;text-wrap:balance}
.sub{margin:0 0 28px;color:#4D4C48;font-size:15px;line-height:1.55;max-width:52ch}
.sub strong{color:#141413;font-weight:600}
.code-input{width:100%;font:24px/1 ui-monospace,"SF Mono",SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.25em;text-align:center;text-transform:uppercase;padding:18px 16px;border:.5px solid rgba(31,30,29,.25);border-radius:12px;background:#FFF;color:#141413;outline:none;margin-bottom:16px}
.code-input:focus{border-color:#2A78D6;box-shadow:0 0 0 3px rgba(42,120,214,.18)}
.code-display{font:28px/1 ui-monospace,"SF Mono",SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.3em;text-align:center;padding:22px 16px;border:.5px solid rgba(31,30,29,.15);border-radius:12px;background:#FFF;margin-bottom:8px}
button.go{appearance:none;border:none;width:100%;background:#141413;color:#FAF9F5;font:inherit;font-size:15px;font-weight:500;padding:14px 20px;border-radius:10px;cursor:pointer}
button.go:hover{background:#2A2926}
button.go:focus-visible{outline:2px solid #2A78D6;outline-offset:2px}
.error-card{background:#FFF;border:.5px solid rgba(31,30,29,.15);border-left:3px solid #A63244;border-radius:10px;padding:14px 16px;font-size:14px;line-height:1.5;display:flex;align-items:flex-start;gap:10px}
.error-card .bang{flex:none;width:18px;height:18px;border-radius:50%;background:#A63244;color:#FFF;font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;line-height:1;margin-top:1px}
.error-card .msg{color:#3D3D3A}
@media (max-width:520px){h1{font-size:26px}body{padding:32px 18px}.code-display,.code-input{font-size:22px}}
`,
  V$ = ` \u2590\u259B\u2588\u2588\u2588\u259B\u2588
\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2580
  \u259D\u259D \u259D\u259D`;

function cs(e, t) {
  let n = t?.script ? K$(16).toString("base64url") : void 0,
    i = t?.formAction ? `'self' ${t.formAction}` : "'self'";
  return new Response(
    `<!doctype html><html lang="en"><meta charset=utf-8><meta name="viewport" content="width=device-width,initial-scale=1"><title>Claude Code</title><style>${H$}</style><main>${e}</main>${t?.script ? `<script nonce="${n}">${t.script}</script>` : ""}`,
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Security-Policy": `default-src 'none'; style-src 'unsafe-inline'; ${n ? `script-src 'nonce-${n}'; ` : ""}frame-ancestors 'none'; form-action ${i}; base-uri 'none'`,
        "Cache-Control": "no-store",
        Pragma: "no-cache",
      },
    },
  );
}

function uh(e, t, n) {
  let i = hi(e),
    r = t === null ? "(none \u2014 customer-routed inference only)" : hi(new URL(t).hostname);
  return new Response(
    `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Claude gateway for Amazon Bedrock, Google Cloud, and Microsoft Foundry</title>
</head>
<body style="font-family: monospace; margin: 1em;">
<pre style="line-height: 1; margin: 0 0 1em 0;">${V$}</pre>
<pre style="margin: 0;">
<b>Claude gateway for Amazon Bedrock, Google Cloud, and Microsoft Foundry</b>

Running at ${i}

To connect from Claude Code:
  Your admin provisions this gateway URL via managed settings
  (forceLoginGatewayUrl) \u2014 then /login connects here directly.

Identity provider   ${r}
Discovery           <a href="/.well-known/oauth-authorization-server">/.well-known/oauth-authorization-server</a>
Version             ${hi(n)}
</pre>
</body>
</html>`,
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Security-Policy":
          "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'; form-action 'none'; base-uri 'none'",
        "Cache-Control": "no-store",
      },
    },
  );
}

function Wo(e) {
  let { prefill: t, error: n, idpOrigin: i } = e,
    r = n
      ? `<div class="error-card" style="margin-top:20px"><span class="bang" aria-hidden="true">!</span><span class="msg">${hi(n)}</span></div>`
      : "";
  if (t)
    return cs(
      `<span class="status warn">Confirm device</span>
<h1>Approve sign-in?</h1>
<p class="sub">A device is requesting access to Claude Code. <strong>Only continue if this code matches the one shown on your device.</strong> If you didn't start this, close this tab.</p>
<form method="post" action="/device">
  <div class="code-display">${hi(t)}</div>
  <input type="hidden" name="user_code" value="${hi(t)}">
  <button class="go" type="submit">This matches my device \u2014 continue</button>
</form>
${r}`,
      { formAction: i },
    );
  return cs(
    `<span class="status warn">Connect device</span>
<h1>Enter the code from your device.</h1>
<p class="sub">Claude Code shows a short code when you sign in. Enter it here to connect \u2014 then you'll sign in with your company identity provider.</p>
<form method="post" action="/device">
  <input class="code-input" name="user_code" inputmode="latin" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false" placeholder="XXXX-XXXX" maxlength="9" autofocus required>
  <button class="go" type="submit">Continue</button>
</form>
${r}`,
    { formAction: i },
  );
}

function _i(e) {
  if (e)
    return cs(`<span class="status err">Sign-in failed</span>
<h1>We couldn&rsquo;t finish signing you in.</h1>
<p class="sub">Close this tab and try signing in again. If the error persists, share the message below with your IT administrator.</p>
<div class="error-card"><span class="bang" aria-hidden="true">!</span><span class="msg">${hi(e)}</span></div>`);
  return cs(
    `<span class="status">Connected</span>
<h1>You&rsquo;re signed in.</h1>
<p class="sub">Return to your device \u2014 it should connect within a few seconds. You can close this tab.</p>`,
    { script: "setTimeout(function(){try{window.close()}catch(e){}}, 1500)" },
  );
}

var Dt = j(Ul(), 1);

function Vl(e) {
  if (e.includes("/")) {
    let [n, i] = Dt.parseCIDR(e);
    if (n instanceof Dt.IPv6 && n.isIPv4MappedAddress() && i >= 96) return [n.toIPv4Address(), i - 96];
    return [n, i];
  }
  let t = Dt.parse(e);
  if (t instanceof Dt.IPv6 && t.isIPv4MappedAddress()) return [t.toIPv4Address(), 32];
  return [t, t.kind() === "ipv6" ? 128 : 32];
}

function ls(e) {
  return e.map(Vl);
}

function ql(e) {
  try {
    let t = Dt.parse(e);
    if (t instanceof Dt.IPv6 && t.isIPv4MappedAddress()) return t.toIPv4Address();
    return t;
  } catch {
    return null;
  }
}

function Hl(e, t) {
  for (let [n, i] of t) {
    if (e instanceof Dt.IPv4 && n instanceof Dt.IPv4 && e.match(n, i)) return true;
    if (e instanceof Dt.IPv6 && n instanceof Dt.IPv6 && e.match(n, i)) return true;
  }
  return false;
}

function ch(e, t, n) {
  if (!e || n.length === 0) return e;
  let i = ql(e);
  if (!i || !Hl(i, n)) return e;
  if (!t) return e;
  let r = t
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
  for (let o = r.length - 1; o >= 0; o--) {
    let s = ql(r[o]);
    if (!s) return e;
    if (!Hl(s, n)) return s.toString();
  }
  return e;
}

function Gl(e, t) {
  if (!e || t.length === 0) return false;
  let n = ql(e);
  return n !== null && Hl(n, t);
}

function dh(e, t, n, i, r) {
  let o = W$(t),
    s = Fi(i, r, e, n),
    u = hre(e ?? "") ? e : hre(n ?? "") ? n : null,
    c = s ? G$(s) : u != null ? l3t(u, o) : kMe;
  return UEe(c, o) * 100 * (i?.multiplier ?? 1);
}

function G$(e) {
  return {
    inputTokens: e.input,
    outputTokens: e.output,
    promptCacheReadTokens: e.cache_read,
    promptCacheWriteTokens: e.cache_write,
    webSearchRequests: kMe.webSearchRequests,
  };
}

function Fi(e, t, n, i) {
  if (!e || !t) return;
  let r = e.overrides.filter((s) => s.upstream === t);
  if (r.length === 0) return;
  let o = lh(n) ?? lh(i);
  return (
    r.find((s) => Jl(s.model, n)) ?? r.find((s) => Jl(s.model, i)) ?? (o ? r.find((s) => Wl(s.model) === o) : void 0)
  );
}

function fh(e, t) {
  let n = Wl(e);
  return Jl(e, t) || (n !== null && n === Wl(t));
}

function Wl(e) {
  let t = pR(e);
  return t ? SC(t.firstParty) : null;
}

function lh(e) {
  if (!e) return null;
  let t = SC(e);
  return gre[t] !== void 0 ? t : null;
}

function Jl(e, t) {
  return t != null && e.toLowerCase() === t.toLowerCase();
}

function W$(e) {
  return {
    output_tokens_details: null,
    input_tokens: e.input_tokens,
    output_tokens: e.output_tokens,
    cache_creation_input_tokens: e.cache_creation_input_tokens ?? 0,
    cache_read_input_tokens: e.cache_read_input_tokens ?? 0,
    cache_creation: null,
    server_tool_use: { web_search_requests: e.server_tool_use?.web_search_requests ?? 0, web_fetch_requests: 0 },
    service_tier: null,
    inference_geo: null,
    iterations: null,
    speed: e.speed === "fast" ? "fast" : null,
  };
}

var Po = j(lp(), 1),
  Ic = j(hk(), 1);

function mp(e, t) {
  let n = (i) => Array.isArray(i) && i.every((r) => typeof r === "string");
  if (!n(e) || !n(t)) return;
  return te([...e, ...t]);
}

function _k(e, t) {
  let n = {},
    i = mp(e?.disabledBuiltinTools, t?.disabledBuiltinTools);
  if (i !== void 0) n.disabledBuiltinTools = i;
  let r = e?.builtinToolPolicy,
    o = t?.builtinToolPolicy;
  if (He(r) && He(o)) {
    let s = {};
    for (let [u, c] of Object.entries(r)) if (typeof c === "string") s[u] = c;
    for (let [u, c] of Object.entries(o)) if (typeof c === "string") s[u] = c;
    for (let [u, c] of Object.entries(r)) if (typeof c === "string" && c !== "allow") s[u] = c;
    n.builtinToolPolicy = s;
  }
  return n;
}

function yk(e, t) {
  let n = e.sandbox;
  if (!He(n)) return;
  let i = n.network;
  if (!He(i)) return;
  let r = i.allowedDomains;
  if (!Array.isArray(r)) return;
  if (r.length === 0) {
    Z(
      "warn",
      `${t}: sandbox.network.allowedDomains is explicitly empty \u2014 the derived coworkEgressAllowedHosts is not served (desktops treat absent and empty identically; a desktop: overlay value, when set, still serves); remove the key, or list the domains to allow`,
    );
    return;
  }
  Po.gatewayOverlayDropChecks().coworkEgressAllowedHosts?.(r, (o) => {
    Z(
      "warn",
      `${t}: desktop intake of the derived coworkEgressAllowedHosts \u2014 ${o} (the CLI sandbox still honors the entry; only desktops drop it)`,
    );
  });
}

function bk(e, t, n, i) {
  if (!He(e))
    throw new R(
      `${t} invalid: expected a mapping of desktop keys`,
      "desktop overlay invalid: expected a mapping of desktop keys",
    );
  let r = Ic.validateForGatewayServing(e, {
    trustedOrigin: n === void 0 ? void 0 : new URL(n).origin,
    includeInternal: false,
  }).map((s) => ({
    key: s.key,
    msg:
      s.kind === "explicit-empty" && KW(i, s.key)
        ? `${s.key}: explicitly empty \u2014 a role policy cannot unset a key the catch-all base sets; set an explicit value here, or remove the key to inherit the base value`
        : s.msg,
    severity: Ic.findingBlocksServing(s) ? "error" : "warn",
  }));
  for (let s of r) if (s.severity === "warn") Z("warn", `${t}: ${s.msg}`);
  let o = r.filter((s) => s.severity === "error");
  if (o.length > 0)
    throw new R(
      `${t} invalid:
${o
  .map((s) => `  ${s.msg}`)
  .join(`
`)}`,
      "desktop overlay invalid: refused or unparseable keys",
    );
  return Po.parseConfigRecord(e, { allowedKeys: qW() });
}

function KW(e, t) {
  if (e === void 0) return false;
  let n = e[t];
  return n !== void 0 && n !== null && n !== "";
}

var qW = m(() => Po.gatewayServableKeys({ includeInternal: false }));

var kk = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);

function VW(e) {
  return kk.has(e);
}

function gp(e) {
  return e === void 0 || !An(e) || Go(e);
}

function hp(e) {
  try {
    let t = new URL(e);
    if (t.protocol === "https:") return true;
    if (t.protocol === "http:" && kk.has(t.hostname)) return true;
    return false;
  } catch {
    return false;
  }
}

var GW = "https://api.anthropic.com",
  WW = m(() => {
    let e = T.string().optional(),
      t = T.discriminatedUnion("provider", [
        T.strictObject({
          name: e,
          provider: T.literal("anthropic"),
          base_url: T.string().default(GW).refine(mt, { message: "base_url targets a metadata endpoint" }),
          auth: T.union([
            T.object({ api_key: T.string().min(1) }).strict(),
            T.object({ oauth_token: T.string().min(1) }).strict(),
            T.object({
              federation_rule_id: T.string().min(1),
              organization_id: T.string().min(1),
              identity_token_file: T.string().min(1),
              service_account_id: T.string().optional(),
              workspace_id: T.string().optional(),
            }).strict(),
          ]),
          forward_user_identity: T.boolean().optional(),
        }),
        T.strictObject({
          name: e,
          provider: T.literal("bedrock"),
          region: T.string().min(1),
          base_url: T.string()
            .optional()
            .refine((i) => i === void 0 || mt(i), { message: "base_url targets a metadata endpoint" }),
          auth: T.strictObject({
            aws_access_key_id: T.string().min(1).optional(),
            aws_secret_access_key: T.string().min(1).optional(),
            aws_session_token: T.string().min(1).optional(),
            aws_bearer_token: T.string().min(1).optional(),
          })
            .default({})
            .refine((i) => !i.aws_access_key_id === !i.aws_secret_access_key, {
              message: "aws_access_key_id and aws_secret_access_key must be set together",
            })
            .refine((i) => !i.aws_session_token || !!i.aws_access_key_id, {
              message: "aws_session_token requires aws_access_key_id and aws_secret_access_key",
            }),
        }),
        T.strictObject({
          name: e,
          provider: T.literal("anthropicAws"),
          region: T.string().regex(/^[a-z0-9-]+$/, "must be an AWS region (lowercase alnum + hyphens)"),
          workspace_id: T.string()
            .min(1)
            .regex(/^[\x21-\x7e]+$/, "must be a valid header value"),
          base_url: T.string()
            .optional()
            .refine((i) => i === void 0 || mt(i), { message: "base_url targets a metadata endpoint" }),
          auth: T.strictObject({
            api_key: T.string().min(1).optional(),
            aws_access_key_id: T.string().min(1).optional(),
            aws_secret_access_key: T.string().min(1).optional(),
            aws_session_token: T.string().min(1).optional(),
          })
            .default({})
            .refine((i) => !i.aws_access_key_id === !i.aws_secret_access_key, {
              message: "aws_access_key_id and aws_secret_access_key must be set together",
            })
            .refine((i) => !i.aws_session_token || !!i.aws_access_key_id, {
              message: "aws_session_token requires aws_access_key_id and aws_secret_access_key",
            }),
        }),
        T.strictObject({
          name: e,
          provider: T.literal("vertex"),
          region: T.string().min(1),
          project_id: T.string().min(1),
          base_url: T.string()
            .optional()
            .refine((i) => i === void 0 || mt(i), { message: "base_url targets a metadata endpoint" }),
          auth: T.strictObject({
            service_account_json: T.string().optional(),
            access_token: T.string().optional(),
          }).default({}),
        }),
        T.strictObject({
          name: e,
          provider: T.literal("foundry"),
          resource: T.string().regex(/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i, "must be a valid DNS label"),
          base_url: T.string()
            .optional()
            .refine((i) => i === void 0 || mt(i), { message: "base_url targets a metadata endpoint" }),
          auth: T.union([
            T.strictObject({ api_key: T.string().min(1) }),
            T.strictObject({ use_azure_ad: T.literal(true) }),
          ]),
        }),
      ]),
      n = T.string().refine(
        (i) => {
          try {
            return Vl(i), true;
          } catch {
            return false;
          }
        },
        { message: "must be a valid IP or CIDR" },
      );
    return T.strictObject({
      $schema: T.string().optional(),
      listen: T.strictObject({
        host: T.string().default("0.0.0.0"),
        port: T.coerce.number().default(8080),
        tls: T.strictObject({ cert: T.string(), key: T.string() }).optional(),
        public_url: T.string()
          .url()
          .transform((i) => i.replace(/\/$/, ""))
          .optional(),
        trusted_proxies: T.array(n).default([]),
      }).refine((i) => i.public_url !== void 0 || VW(i.host), {
        path: ["public_url"],
        message:
          "listen.public_url is required when listen.host is not a " +
          "loopback address \u2014 set it to the externally-visible origin " +
          "(e.g. https://claude-gateway.corp.example.com). Without it the IdP redirect_uri and token issuer would be derived from the client-controlled Host header.",
      }),
      access_control: T.strictObject({
        allow_cidrs: T.array(n).default([]),
        deny_cidrs: T.array(n).default([]),
      }).default({}),
      limits: T.strictObject({
        max_request_bytes: T.coerce.number().int().positive().default(33554432),
        max_request_header_bytes: T.coerce.number().int().positive().optional(),
        max_url_length: T.coerce.number().int().positive().optional(),
      }).default({}),
      rate_limits: T.strictObject({
        device_authorization: T.strictObject({
          max: T.coerce.number().int().positive().default(30),
          window_seconds: T.coerce.number().int().positive().default(600),
        }).default({}),
        device_verify: T.strictObject({
          max: T.coerce.number().int().positive().default(10),
          window_seconds: T.coerce.number().int().positive().default(600),
        }).default({}),
      }).default({}),
      timeouts: T.strictObject({ upstream_ttfb_ms: T.coerce.number().int().positive().default(120000) }).default({}),
      upstreams: T.array(t)
        .min(1)
        .transform((i) => i.map((r) => ({ ...r, name: r.name ?? r.provider })))
        .superRefine((i, r) => {
          let o = new Set();
          for (let s of i) {
            if (o.has(s.name))
              r.addIssue({
                code: T.ZodIssueCode.custom,
                message: `duplicate upstream name '${s.name}' \u2014 set distinct 'name:' on each`,
              });
            o.add(s.name);
            let u =
              s.provider === "anthropic" && s.forward_user_identity && URL.canParse(s.base_url)
                ? new URL(s.base_url).hostname.replace(/\.$/, "")
                : "";
            if (
              u === "anthropic.com" ||
              u.endsWith(".anthropic.com") ||
              /^aws-external-anthropic\.[^.]+\.api\.aws$/.test(u)
            )
              r.addIssue({
                code: T.ZodIssueCode.custom,
                message: `upstream '${s.name}': forward_user_identity is for identifying users to a proxy you run at base_url; it is refused for ${u} so user emails are never sent to Anthropic`,
              });
          }
        }),
      auto_include_builtin_models: T.boolean().default(true),
      models: T.array(
        T.strictObject({
          id: T.string().min(1),
          label: T.string().optional(),
          description: T.string().optional(),
          upstream_model: T.record(T.string()).refine((i) => Object.keys(i).length > 0, {
            message: "upstream_model must set at least one upstream",
          }),
        }),
      ).default([]),
      oidc: T.strictObject({
        issuer: T.string().refine(mt, {
          message: "oidc.issuer must be an http(s) URL and not target a cloud metadata endpoint",
        }),
        client_id: T.string().min(1),
        client_secret: T.string().min(1),
        ca_cert_pem: T.string().optional(),
        groups_claim: T.string().min(1).default("groups"),
        email_claim: T.union([T.string().min(1), T.array(T.string().min(1)).min(1)]).default("email"),
        userinfo_fallback: T.boolean().default(false),
        use_pkce: T.boolean().default(true),
        clock_skew_seconds: T.coerce.number().int().nonnegative().optional(),
        token_endpoint_auth_method: T.enum(["client_secret_basic", "client_secret_post"]).optional(),
        id_token_signed_response_alg: T.enum([
          "RS256",
          "RS384",
          "RS512",
          "PS256",
          "PS384",
          "PS512",
          "ES256",
          "ES384",
          "ES512",
          "EdDSA",
        ]).optional(),
        additional_authorized_parties: T.array(T.string()).optional(),
        discovery_url: T.string()
          .url()
          .refine(mt, { message: "oidc.discovery_url must be an http(s) URL and not target a cloud metadata endpoint" })
          .refine(
            (i) => {
              try {
                return new URL(i).pathname.includes("/.well-known/");
              } catch {
                return false;
              }
            },
            {
              message:
                "oidc.discovery_url must point at the discovery document itself (path containing /.well-known/) \u2014 openid-client appends /.well-known/openid-configuration to any other path",
            },
          )
          .optional(),
        use_proxy: T.boolean().optional(),
        scopes: T.array(
          T.string()
            .trim()
            .min(1)
            .refine((i) => !/\s/.test(i), { message: "must be a single OAuth scope token (no whitespace)" }),
        )
          .optional()
          .refine((i) => i === void 0 || i.includes("openid"), {
            message: "oidc.scopes must include 'openid' \u2014 without it the IdP will not return an id_token",
          }),
        extra_auth_params: T.record(T.string().min(1), T.string())
          .default({})
          .refine(
            (i) =>
              !Object.keys(i).some((r) =>
                [
                  "redirect_uri",
                  "state",
                  "nonce",
                  "code_challenge",
                  "code_challenge_method",
                  "scope",
                  "response_type",
                  "response_mode",
                  "client_id",
                ].includes(r),
              ),
            {
              message:
                "oidc.extra_auth_params must not override protocol parameters the gateway manages (redirect_uri, state, nonce, code_challenge*, scope, response_type, response_mode, client_id) \u2014 use oidc.scopes for scope; the gateway callback only reads query-mode responses",
            },
          ),
        allowed_email_domains: T.array(T.string())
          .transform((i, r) => {
            let o = i.map((s) => s.trim().replace(/^@/, "").toLowerCase()).filter(Boolean);
            if (i.length > 0 && o.length === 0)
              r.addIssue({
                code: T.ZodIssueCode.custom,
                message: "allowed_email_domains contains only empty entries after normalization",
              });
            return o;
          })
          .optional(),
        form_action_origins: T.array(
          T.string().refine(mt, {
            message: "each form_action_origin must be an http(s) URL and not target a cloud metadata endpoint",
          }),
        )
          .transform((i) => i.map((r) => new URL(r).origin))
          .refine((i) => i.every((r) => !/[;,'"\s]/.test(r)), {
            message: "oidc.form_action_origins entries must not contain CSP delimiters (; , quotes or whitespace)",
          })
          .default([]),
        allowed_groups: T.array(T.string())
          .refine((i) => !i.length || i.some((r) => r.trim()), {
            message: "oidc.allowed_groups contains only empty entries",
          })
          .transform((i) => i.map((r) => r.trim()).filter(Boolean))
          .optional(),
        google_groups: T.strictObject({
          service_account_json_path: T.string().min(1),
          admin_email: T.string().email(),
        }).optional(),
      }).optional(),
      session: T.strictObject({
        jwt_secret: T.union([T.string().min(32), T.array(T.string().min(32)).min(1)]).transform((i) =>
          Array.isArray(i) ? i : [i],
        ),
        ttl_hours: T.coerce.number().default(1),
      }),
      store: T.strictObject({
        postgres_url: T.string().regex(/^postgres(ql)?:\/\//, "must be postgres:// or postgresql://"),
        username: T.string().optional(),
        password: T.string().optional(),
        max_connections: T.coerce.number().int().positive().default(5),
      }),
      telemetry: T.strictObject({
        forward_to: T.array(
          T.strictObject({
            url: T.string()
              .refine(hp, { message: "forward_to.url must be https:// (http:// allowed for loopback only)" })
              .refine(mt, { message: "forward_to.url must not target a cloud metadata endpoint" }),
            headers: T.record(T.string()).default({}),
            metrics: T.boolean().default(true),
            logs: T.boolean().default(false),
            traces: T.boolean().default(false),
          }),
        ).default([]),
      }).default({ forward_to: [] }),
      managed: T.strictObject({
        settings: T.string().optional(),
        policies: T.array(
          T.object({
            match: T.strictObject({
              groups: T.array(
                T.string().min(1, "match.groups contains an empty entry \u2014 set a group name or remove the entry"),
              )
                .min(
                  1,
                  "match.groups is empty \u2014 the policy would match no one (and is not a catch-all); list groups or remove the key",
                )
                .optional(),
              email_domain: T.string()
                .min(
                  1,
                  "match.email_domain is empty \u2014 an empty domain disables the match and the policy would apply to every authenticated user; set a domain or remove the key",
                )
                .transform((i) => i.trim().replace(/^@/, "").toLowerCase())
                .refine((i) => i.length > 0, {
                  message: "match.email_domain is blank after normalization \u2014 set a domain or remove the key",
                })
                .refine((i) => !/[@\s,]/.test(i), {
                  message:
                    'match.email_domain contains "@", whitespace, or "," \u2014 write one bare domain (e.g. acme.com, not a full email address or a list); the matcher compares a single domain exactly',
                })
                .optional(),
            }).default({}),
            cli: T.record(T.unknown()).optional(),
            settings: T.record(T.unknown()).optional(),
            desktop: T.record(T.unknown()).optional(),
          })
            .strict()
            .transform(({ match: i, cli: r, settings: o, desktop: s }) => ({
              match: i,
              cli: r ?? o ?? {},
              desktop: s,
            })),
        ).optional(),
      }).optional(),
      admin: T.strictObject({
        read_keys: T.array(T.strictObject({ id: T.string(), key: T.string().min(32) })).default([]),
        write_keys: T.array(T.strictObject({ id: T.string(), key: T.string().min(32) })).default([]),
        admin_groups: T.array(
          T.string().min(
            1,
            "admin.admin_groups contains an empty entry \u2014 an empty entry can pair with an empty IdP group claim and grant admin access; set a group name or remove the entry",
          ),
        ).default([]),
        blocked_message: T.string().optional(),
        audit_retention_days: T.coerce.number().int().positive().default(365),
        spend_retention_months: T.coerce.number().int().positive().default(13),
        identity_retention_days: T.coerce.number().int().positive().default(90),
        group_limit_mode: T.enum(["min", "max"]).default("min"),
      })
        .superRefine((i, r) => {
          let o = [...i.read_keys, ...i.write_keys].map((u) => u.id),
            s = o.find((u, c) => o.indexOf(u) !== c);
          if (s)
            r.addIssue({
              code: T.ZodIssueCode.custom,
              message: `admin key id '${s}' is repeated; key ids must be unique for audit attribution`,
            });
        })
        .optional(),
      enforcement: T.strictObject({ fail_closed_on_error: T.boolean().default(false) }).default({
        fail_closed_on_error: false,
      }),
      cri: T.strictObject({
        enabled: T.boolean().default(false),
        audience: T.array(T.string().trim().min(1)).default([]),
        jwks_url: T.string()
          .optional()
          .refine((i) => i === void 0 || An(i), {
            message:
              "cri.jwks_url must be a loopback URL \u2014 it exists for tests against local mocks, and honoring an external URL here would let it substitute the admission authority (its keys would mint CRI principals); remove it to use the pinned Anthropic JWKS",
          })
          .refine(gp, {
            message:
              "cri.jwks_url targets loopback but CLAUDE_GATEWAY_ALLOW_LOOPBACK is not set \u2014 safeFetch would block every JWKS fetch at runtime, so as configured the CRI wall could never admit anyone",
          }),
        issuer: T.string()
          .refine(hp, {
            message:
              "cri.issuer must be https:// (http:// allowed for loopback only) \u2014 the verification JWKS derives from it",
          })
          .refine((i) => An(i) || mt(i), { message: "cri.issuer must not target a cloud metadata endpoint" })
          .refine(gp, {
            message:
              "cri.issuer targets loopback but CLAUDE_GATEWAY_ALLOW_LOOPBACK is not set \u2014 safeFetch would block every derived-JWKS fetch at runtime, so as configured the CRI wall could never admit anyone",
          })
          .refine(
            (i) => {
              try {
                return new URL(i).href === i && !i.includes("?") && !i.includes("#");
              } catch {
                return false;
              }
            },
            {
              message:
                "cri.issuer must be a canonical URL with no query or fragment \u2014 the iss pin and the {issuer}/jwks.json derivation both use the exact configured string",
            },
          )
          .refine((i) => !i.endsWith("/"), {
            message:
              "cri.issuer must not end with '/' \u2014 the gateway pins the token's iss claim to this exact string and derives the verification JWKS URL as {issuer}/jwks.json",
          })
          .optional(),
        org_allowlist: T.array(
          T.string()
            .trim()
            .min(1)
            .transform((i) => i.toLowerCase()),
        ).default([]),
        policy: T.strictObject({
          webhook: T.strictObject({
            url: T.string()
              .refine(hp, { message: "cri.policy.webhook.url must be https:// (http:// allowed for loopback only)" })
              .refine((i) => An(i) || mt(i), {
                message: "cri.policy.webhook.url must not target a cloud metadata endpoint",
              })
              .refine(gp, {
                message:
                  "cri.policy.webhook.url targets loopback, which the gateway blocks at runtime unless CLAUDE_GATEWAY_ALLOW_LOOPBACK=1 is set \u2014 as configured, the policy webhook could never run",
              }),
            timeout_ms: T.coerce.number().int().positive().max(30000).default(2000),
            fail_closed: T.boolean().default(true),
          }),
        }).optional(),
      }).optional(),
      pricing: T.strictObject({
        multiplier: T.coerce.number().gt(0).lte(1).default(1),
        overrides: T.array(
          T.strictObject({
            upstream: T.string().min(1),
            model: T.string().min(1),
            input: T.coerce.number().positive().finite(),
            output: T.coerce.number().positive().finite(),
            cache_read: T.coerce.number().positive().finite(),
            cache_write: T.coerce.number().positive().finite(),
          }),
        ).default([]),
      }).optional(),
    }).superRefine((i, r) => {
      if (i.enforcement.fail_closed_on_error && i.admin === void 0)
        r.addIssue({
          code: T.ZodIssueCode.custom,
          path: ["enforcement", "fail_closed_on_error"],
          message:
            "has no effect without an `admin:` block \u2014 spend enforcement only runs when admin is configured",
        });
      let o = new Set(i.upstreams.map((c) => c.name));
      for (let [c, d] of i.models.entries())
        for (let f of Object.keys(d.upstream_model))
          if (!o.has(f))
            r.addIssue({
              code: T.ZodIssueCode.custom,
              path: ["models", c, "upstream_model", f],
              message: `references unknown upstream '${f}'`,
            });
      let s = i.cri?.enabled === true;
      if (s && (i.cri?.audience.length ?? 0) === 0)
        r.addIssue({
          code: T.ZodIssueCode.custom,
          path: ["cri", "audience"],
          message:
            "cri.audience must list at least one registered audience value when cri.enabled is true \u2014 the audience binding is what stops a CRI JWT minted for another org's gateway from replaying here, so a wall with no expected audience would admit no one",
        });
      if (s && (i.cri?.org_allowlist.length ?? 0) === 0)
        r.addIssue({
          code: T.ZodIssueCode.custom,
          path: ["cri", "org_allowlist"],
          message:
            "cri.org_allowlist must list at least one Claude Enterprise organization UUID when cri.enabled is true \u2014 an empty allowlist would admit no one",
        });
      if (i.oidc === void 0 && !s)
        r.addIssue({
          code: T.ZodIssueCode.custom,
          path: ["oidc"],
          message:
            "oidc is required \u2014 it may be omitted only for a customer-routed-inference-only deployment (cri.enabled: true)",
        });
      if (i.pricing !== void 0 && i.admin === void 0)
        r.addIssue({
          code: T.ZodIssueCode.custom,
          path: ["pricing"],
          message:
            "has no effect without an `admin:` block \u2014 only the spend meter reads pricing, and it only runs when admin is configured",
        });
      let u = i.pricing?.overrides ?? [];
      for (let [c, d] of u.entries()) {
        if (!o.has(d.upstream))
          r.addIssue({
            code: T.ZodIssueCode.custom,
            path: ["pricing", "overrides", c, "upstream"],
            message: `references unknown upstream '${d.upstream}'`,
          });
        let f = u.slice(0, c).find((p) => p.upstream === d.upstream && fh(p.model, d.model));
        if (f)
          r.addIssue({
            code: T.ZodIssueCode.custom,
            path: ["pricing", "overrides", c],
            message: `duplicates the pricing override for '${f.model}' on upstream '${d.upstream}'`,
          });
      }
    });
  });

async function _p(e) {
  if (typeof e === "string") {
    let t = e.match(/^\$\{file:(.+)\}$/);
    if (t) {
      let n = t[1];
      if (!HW(n)) throw Error(`\${file:} path must be absolute: ${n}`);
      return (await bp(n, "utf8")).trim();
    }
    return e.replace(/\$\{(\w+)\}/g, (n, i) => {
      let r = process.env[i];
      if (r === void 0) throw Error(`undefined env var in config: ${i}`);
      return r;
    });
  }
  if (Array.isArray(e)) return Promise.all(e.map(_p));
  if (e && typeof e === "object") {
    let t = {};
    for (let [n, i] of Object.entries(e)) t[n] = await _p(i);
    return t;
  }
  return e;
}

async function Pk(e) {
  let t = await bp(e, "utf8"),
    n = bH(t),
    i = await _p(n);
  if (typeof i === "object" && i !== null && "dev" in i)
    throw Error(
      "`dev:` was removed \u2014 the gateway is Postgres-only. Set store.postgres_url " +
        "(local: docker run --rm -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres)",
    );
  return WW().parse(i);
}

function JW(e) {
  let t = e.availableModels;
  return Array.isArray(t) && t.every((n) => typeof n === "string") ? t : void 0;
}

async function Ek(e) {
  let t = r2(e),
    n = e.managed,
    i;
  if (n?.policies) {
    let r = n.policies.some((u) => u.desktop !== void 0);
    if (e.listen.public_url === void 0 && r)
      Z(
        "warn",
        "managed.policies: listen.public_url is not set \u2014 origin-pin hygiene is skipped at boot, so an origin-pinned overlay value would be silently dropped by desktops",
      );
    let o = n.policies.find((u) => yp(u.match))?.desktop,
      s = [];
    if (
      ((i = n.policies.map((u, c) => {
        let d = `managed.policies[${c}].cli`,
          { cli: f, aliasIssues: p } = Sk(u.cli, d);
        try {
          Ok(f, d, p);
        } catch (y) {
          s.push(y instanceof Error ? y.message : String(y));
        }
        let h;
        if (u.desktop !== void 0)
          try {
            h = bk(
              u.desktop,
              `managed.policies[${c}].desktop`,
              e.listen.public_url,
              He(o) && !yp(u.match) ? o : void 0,
            );
          } catch (y) {
            s.push(y instanceof Error ? y.message : String(y));
          }
        return { match: u.match, cli: f, desktop: h };
      })),
      s.length > 0)
    )
      throw new R(
        s.join(`
`),
        "managed policies invalid: one or more policies failed validation",
      );
    i = YW(i);
    for (let [u, c] of i.entries())
      if (c.desktop !== void 0 && c.desktop.coworkEgressAllowedHosts === void 0)
        yk(c.cli, `managed.policies[${u}].cli`);
  } else if (n?.settings) {
    let { cli: r, aliasIssues: o } = Sk(await i2(n.settings), "managed settings");
    Ok(r, "managed settings", o), (i = [{ match: {}, cli: r }]);
  } else if (t) i = [{ match: {}, cli: {} }];
  else return null;
  return i.map(({ match: r, cli: o, desktop: s }) => {
    let u = t ? { ...o, env: { ...t, ...(He(o.env) ? o.env : {}) } } : o,
      c = cTt(u);
    return { match: r, payload: { uuid: c, checksum: c, settings: u }, availableModels: JW(u), desktop: s };
  });
}

function yp(e) {
  return e.groups === void 0 && e.email_domain === void 0;
}

function YW(e) {
  let t = e.findIndex((i) => yp(i.match));
  if (t === -1) return e;
  if (t !== e.length - 1)
    Z(
      "warn",
      `managed.policies[${t}] is a catch-all (match: {}) but is not the ` +
        "last entry \u2014 policies after it will never match. Move it to the end.",
    );
  let n = e[t];
  return e.map((i, r) => {
    if (r === t) return i;
    let o = XW(n.cli, i.cli);
    wk(`managed.policies[${r}] after merge with catch-all base`, o, i.cli);
    let s = n.desktop || i.desktop ? { ...n.desktop, ...i.desktop, ..._k(n.desktop, i.desktop) } : void 0;
    if (s !== void 0) wk(`managed.policies[${r}] desktop overlay after merge with catch-all base`, s, i.desktop);
    return { ...i, cli: o, desktop: s };
  });
}

function XW(e, t) {
  let n = { ...e, ...t };
  for (let i of QW) {
    let r = e[i],
      o = t[i];
    if (He(r) && He(o)) n[i] = { ...r, ...o };
  }
  for (let i of e2) n[i] = Ik(e[i], t[i]);
  return (n.permissions = vk(e.permissions, t.permissions, t2)), (n.hooks = vk(e.hooks, t.hooks)), $k(n);
}

function vk(e, t, n) {
  let i = He(e) ? e : void 0,
    r = He(t) ? t : void 0;
  if (!i && !r) return;
  let o = { ...(i ?? {}), ...(r ?? {}) };
  for (let s of n ?? Object.keys(o)) o[s] = Ik(i?.[s], r?.[s]);
  return $k(o);
}

function $k(e) {
  for (let t of Object.keys(e)) if (e[t] === void 0) delete e[t];
  return e;
}

var QW = ["env", "modelOverrides", "skillOverrides"],
  e2 = ["disabledMcpjsonServers", "deniedMcpServers", "blockedMarketplaces"],
  t2 = ["deny", "ask"];

function Ik(e, t) {
  let n = Array.isArray(e) ? e : [],
    i = Array.isArray(t) ? t : [];
  if (n.length === 0 && i.length === 0) return Array.isArray(e) || Array.isArray(t) ? [] : void 0;
  let r = new Set(),
    o = [];
  for (let s of [...n, ...i]) {
    let u = b(s);
    if (!r.has(u)) r.add(u), o.push(s);
  }
  return o;
}

function r2(e) {
  if (e.telemetry.forward_to.length === 0) return null;
  let t = e.listen.public_url;
  if (!t)
    return (
      Z(
        "warn",
        "telemetry.forward_to is configured but listen.public_url is not \u2014 " +
          "clients will not be told to export OTLP. Set listen.public_url so /managed/settings can push OTEL_EXPORTER_OTLP_ENDPOINT.",
      ),
      null
    );
  return {
    CLAUDE_CODE_ENABLE_TELEMETRY: "1",
    OTEL_METRICS_EXPORTER: "otlp",
    OTEL_LOGS_EXPORTER: "otlp",
    OTEL_TRACES_EXPORTER: "otlp",
    OTEL_EXPORTER_OTLP_ENDPOINT: t,
    OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
  };
}

function wk(e, t, n) {
  let i = (o) => {
      if (Array.isArray(o)) {
        let s = o.map(i);
        return s.every((u) => typeof u === "string") ? te(s).sort() : s;
      }
      if (He(o))
        return Object.fromEntries(
          Object.keys(o)
            .sort()
            .map((s) => [s, i(o[s])]),
        );
      return o;
    },
    r = Object.keys(t).filter((o) => b(i(t[o])) !== b(i(n?.[o])));
  if (r.length > 0) Z("info", `${e} \u2014 changed keys: ${r.join(", ")}`);
}

function Tc(e, t) {
  if (t.cri === true) return null;
  let n = t.groups ?? [],
    i = t.email?.includes("@") ? t.email.slice(t.email.lastIndexOf("@") + 1).toLowerCase() : void 0;
  for (let [r, o] of e.entries()) {
    let { groups: s, email_domain: u } = o.match;
    if (s && !s.some((c) => n.includes(c))) continue;
    if (u && i !== u) continue;
    return { index: r, policy: o };
  }
  return null;
}

var n2 = m(() => tCe(ZAe(), { strictPolicyHelperKeys: true }));

function Sk(e, t) {
  let n = { ...e },
    i = J6(n, t);
  return {
    cli: n,
    aliasIssues: i.map(
      (r) =>
        `  ${r.alias}: this document sets both "${r.alias}" and "${r.canonical}", which are the same setting \u2014 keep only "${r.canonical}"`,
    ),
  };
}

function Ok(e, t, n) {
  let i = n2(),
    r = i.safeParse(e),
    o = [...n];
  if (!r.success) o.push(...r.error.issues.map((u) => `  ${u.path.join(".")}: ${u.message}`));
  o.push(...bEn(e).map((u) => `  ${u}`));
  let s = wEn(e);
  if (s !== void 0) o.push(`  crossSessionInbound: ${s} \u2014 fix the value`);
  if (e !== null && typeof e === "object") {
    let u = new Set(Object.keys(i.shape));
    for (let [c, d] of Object.entries(e))
      if (c === "mcpServers") {
        if (d !== void 0)
          o.push("  mcpServers: not supported via gateway managed settings yet \u2014 remove it from the document");
      } else if (!u.has(c))
        o.push(
          `  ${c}: unknown settings key \u2014 fix the typo, upgrade the gateway if this key was added in a newer CLI, or set the gateway's matching env/build gate if the key is gated (e.g. CLAUDE_CODE_ENABLE_XAA for xaaIdp)`,
        );
  }
  if (o.length > 0)
    throw Error(`${t} invalid:
${o.join(`
`)}`);
}

async function i2(e) {
  if (!e) return {};
  let t;
  try {
    t = await bp(e, "utf8");
  } catch (i) {
    if (X(i)) return {};
    throw i;
  }
  let n = V(t);
  if (typeof n !== "object" || n === null || Array.isArray(n))
    throw Error(`Managed settings file ${e}: expected a JSON object, got ${Array.isArray(n) ? "array" : typeof n}`);
  return n;
}

function o2(e, t) {
  for (let n = e.indexOf(t); n !== -1; n = e.indexOf(t, n + 1)) {
    let i = n === 0 || !/[a-z0-9]/i.test(e[n - 1]),
      r = n + t.length,
      o = r === e.length || !/[a-z0-9]/i.test(e[r]);
    if (i && o) return true;
  }
  return false;
}

function Tk(e, t) {
  if (!e.startsWith(t)) return false;
  return e.length === t.length || e[t.length] === "-";
}

function Ak(e, t) {
  for (let n of t) {
    if (NT(n)) continue;
    let i = n.indexOf(e);
    if (i === -1) continue;
    let r = i + e.length;
    if (r === n.length || n[r] === "-") return true;
  }
  return false;
}

function vp(e, t) {
  if (t.length === 0) return false;
  let n = t.map((r) => pn(r.trim().toLowerCase())),
    i = pn(e.trim().toLowerCase());
  if (n.includes(i)) {
    if (!NT(i) || !Ak(i, n)) return true;
  }
  for (let r of n) if (NT(r) && !Ak(r, n) && o2(i, r)) return true;
  for (let r of n) {
    if (NT(r)) continue;
    if (Tk(i, r)) return true;
    if (!r.startsWith("claude-") && Tk(i, `claude-${r}`)) return true;
  }
  return false;
}

var a2 = new Set(["content-type", "accept", "accept-encoding", "anthropic-beta", "anthropic-version", "user-agent"]);

function s2(e) {
  let t = new Headers();
  return (
    e.forEach((n, i) => {
      let r = i.toLowerCase();
      if (a2.has(r) || r.startsWith("x-stainless-")) t.set(i, n);
    }),
    t
  );
}

function wp(e) {
  return { search: new URL(e.url).search, headers: s2(e.headers) };
}

var u2 = ["content-encoding", "content-length", "transfer-encoding", "connection", "cf-ray", "via", "request-id"],
  c2 = { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" },
  l2 = 15000,
  d2 = `event: ping
data: {"type": "ping"}

`,
  f2 = ["/v1/messages", "/v1/messages/count_tokens"];

async function Ck(e, t, n, i, r) {
  let o = typeof e.model === "string" ? e.model : null,
    s = { system: e.system, messages: e.messages, tools: e.tools };
  for (let u of t) {
    if (u.kind === "sdk" && u.provider === "bedrock") continue;
    let c = o ? Ca(o, u, n, i) : null;
    if (!c?.ok) continue;
    let d = { ...s, model: c.model };
    try {
      if (u.kind === "sdk") return (await u.client.messages.countTokens(d)).input_tokens;
      let f = new Headers({ "content-type": "application/json", "anthropic-version": "2023-06-01" });
      Lk(f, u, r), await u.applyAuth(f);
      let p = `${u.baseUrl.replace(/\/$/, "")}/v1/messages/count_tokens`,
        h = await gi(p, {
          method: "POST",
          headers: f,
          body: b(d),
          ...Ri({ url: p }),
          timeout: false,
          signal: AbortSignal.timeout(1e4),
        });
      if (!h.ok) continue;
      let y = await h.json();
      if (typeof y.input_tokens === "number") return y.input_tokens;
    } catch {}
  }
  for (let u of t) {
    if (u.kind !== "sdk" || u.provider !== "bedrock") continue;
    let c = o ? Ca(o, u, n, i) : null;
    if (!c?.ok) continue;
    try {
      return (await u.client.messages.create({ ...s, model: c.model, max_tokens: 1, stream: false })).usage.input_tokens;
    } catch {}
  }
  return Math.ceil(b(s).length / 4);
}

function Sp(e) {
  return f2.includes(e);
}

function p2(e, t) {
  let n = pR(e),
    i = e.toLowerCase();
  return t.find((r) => r.id.toLowerCase() === i || (n !== null && pR(r.id) === n));
}

function Eo(e) {
  let t = e.replace(/[^\x20-\x7e]/g, "");
  return t.length > 128 ? `${t.slice(0, 128)}...` : t;
}

function Ca(e, t, n, i = true, r = false) {
  let o = pR(e),
    s = p2(e, n),
    u = s?.upstream_model[t.name];
  if (u) return { ok: true, model: u };
  if (o && (i || s)) {
    let c = t.provider === "anthropic" ? o.firstParty : o[t.provider];
    if (!c)
      return {
        ok: false,
        error: r
          ? `model ${Eo(e)} is not available on this upstream`
          : `model ${Eo(e)} is not available on ${t.provider}`,
      };
    return { ok: true, model: c };
  }
  if (s)
    return {
      ok: false,
      error: r
        ? `model ${Eo(e)} is not configured for this upstream`
        : `model ${Eo(e)} has no upstream_model.${t.name} configured`,
    };
  return { ok: false, error: `model ${Eo(e)} is not in the operator's model allowlist` };
}

function Qe(e, t, n, i, r) {
  return Response.json(
    { type: "error", ...(i && { request_id: i }), error: { type: t, message: n } },
    { status: e, ...(r && { headers: r }) },
  );
}

function Op(e, t) {
  return t !== void 0 ? Tin(t) : (Rc[e] ?? "upstream error");
}

function m2(e, t) {
  let n = new Headers();
  return (
    e.forEach((i, r) => {
      let o = r.toLowerCase();
      if (!t.includes(o) && !o.startsWith("anthropic-ratelimit-")) n.set(r, i);
    }),
    n
  );
}

var g2 = ["x-gateway-upstream", "x-gateway-upstream-kind", "x-gateway-model", "x-gateway-upstream-model"];

function kp(e, t) {
  for (let n of g2) {
    let i = e.get(n);
    if (i !== null) t.set(n, i);
  }
}

function h2(e, t) {
  e.body?.cancel().catch(() => {});
  let n = Qe(e.status, Da(e.status), Rc[e.status] ?? "upstream error", t),
    i = e.headers.get("retry-after");
  if (e.status === 429 && i !== null) n.headers.set("retry-after", i);
  return kp(e.headers, n.headers), n;
}

async function _2(e, t) {
  if (!e) return "";
  let n = e.getReader(),
    i = [],
    r = 0;
  try {
    while (r < t) {
      let { done: o, value: s } = await n.read();
      if (o) break;
      i.push(s), (r += s.byteLength);
    }
  } catch {
  } finally {
    n.cancel().catch(() => {});
  }
  return new TextDecoder().decode(Buffer.concat(i)).slice(0, t);
}

var Dk = new Set([
  "invalid_request_error",
  "authentication_error",
  "permission_error",
  "not_found_error",
  "request_too_large",
  "rate_limit_error",
  "not_supported",
  "overloaded_error",
  "api_error",
  "billing_error",
  "policy_blocked",
]);

async function y2(e, t, n) {
  let i = await _2(e.body, 65536),
    r,
    o = i;
  try {
    let c = V(i);
    if (typeof c?.error?.message === "string") o = c.error.message;
    if (typeof c?.error?.type === "string" && Dk.has(c.error.type)) r = c.error.type;
  } catch {}
  let s = jMt(e.status, o, t?.split(","));
  Z(
    "warn",
    `upstream ${e.status} sanitized for CRI caller (${s ?? "no capability class"}) request_id=${n ?? "-"}: ${ce(o, 1000)}`,
  );
  let u = Qe(e.status, r ?? Da(e.status), Op(e.status, s), n);
  return kp(e.headers, u.headers), u;
}

async function xk(e, t, n) {
  if ((e.headers.delete("anthropic-organization-id"), e.status < 300 || e.headers.get("x-gateway-upstream") === null))
    return e;
  let i = Pp.get(e);
  if (i) {
    if (e.status === 400 || e.status === 413) {
      let r = jMt(e.status, i.message, t.headers.get("anthropic-beta")?.split(",")),
        o = Qe(e.status, Da(e.status), Op(e.status, r), n);
      return kp(e.headers, o.headers), o;
    }
    return e;
  }
  if (e.status === 400 || e.status === 413) return y2(e, t.headers.get("anthropic-beta") ?? void 0, n);
  return h2(e, n);
}

async function b2(e, t, n, i) {
  let r = new AbortController(),
    o = setTimeout((s) => s.abort(), i, r);
  try {
    return await gi(e, { ...t, signal: AbortSignal.any([n, r.signal]) });
  } finally {
    clearTimeout(o);
  }
}

var Ac = 3600000,
  Pp = new WeakMap();

async function Mk(e) {
  let t = (n) => {
    n.delete("authorization"), n.delete("x-api-key");
  };
  return Promise.all(
    e.map(async (n) => {
      switch (n.provider) {
        case "anthropic": {
          if ("api_key" in n.auth) {
            let u = n.auth.api_key;
            return {
              kind: "raw",
              name: n.name,
              provider: "anthropic",
              baseUrl: n.base_url,
              applyAuth: async (c) => {
                t(c), c.set("x-api-key", u);
              },
              forwardUserIdentity: n.forward_user_identity === true,
            };
          }
          if ("oauth_token" in n.auth) {
            let u = n.auth.oauth_token;
            return {
              kind: "raw",
              name: n.name,
              provider: "anthropic",
              baseUrl: n.base_url,
              applyAuth: async (c) => {
                t(c), c.set("Authorization", `Bearer ${u}`), c.append("anthropic-beta", ud);
              },
              forwardUserIdentity: n.forward_user_identity === true,
            };
          }
          let { resolveCredentialsFromConfig: i, TokenCache: r } = await import("/$bunfs/root/chunk-s49qq1he.js"),
            o = i(
              {
                organization_id: n.auth.organization_id,
                workspace_id: n.auth.workspace_id,
                base_url: n.base_url,
                authentication: {
                  type: "oidc_federation",
                  federation_rule_id: n.auth.federation_rule_id,
                  service_account_id: n.auth.service_account_id,
                  identity_token: { source: "file", path: n.auth.identity_token_file },
                },
              },
              {
                baseURL: n.base_url,
                fetch: (u, c) => gi(String(u), { ...c, ...Ri({ url: String(u) }), signal: AbortSignal.timeout(1e4) }),
              },
            ),
            s = new r(o.provider, (u) => Z("warn", `WIF advisory refresh (${n.name}): ${l(u)}`));
          return {
            kind: "raw",
            name: n.name,
            provider: "anthropic",
            baseUrl: n.base_url,
            applyAuth: async (u) => {
              t(u), u.set("Authorization", `Bearer ${await s.getToken()}`);
              for (let [c, d] of Object.entries(o.extraHeaders)) u.set(c, d);
              u.append("anthropic-beta", ud);
            },
            invalidateAuth: () => s.invalidate(),
            forwardUserIdentity: n.forward_user_identity === true,
          };
        }
        case "bedrock": {
          let { AnthropicBedrock: i } = await import("/$bunfs/root/chunk-eamq52pg.js"),
            r = {
              awsRegion: n.region,
              ...(n.base_url && { baseURL: n.base_url }),
              timeout: Ac,
              fetchOptions: { ...Ri({ url: void 0 }), timeout: false },
              maxRetries: 0,
            };
          if (
            !n.auth.aws_access_key_id !== !n.auth.aws_secret_access_key ||
            (n.auth.aws_session_token && !n.auth.aws_access_key_id)
          )
            throw Error(
              "bedrock upstream: aws_access_key_id and aws_secret_access_key must be set together (and are required with aws_session_token)",
            );
          let o = !n.auth.aws_bearer_token && !(n.auth.aws_access_key_id && n.auth.aws_secret_access_key),
            s = lP(),
            u = { authToken: null, defaultHeaders: { Authorization: null, ...(!s && { "X-Api-Key": null }) }, ..._O },
            c = n.auth.aws_bearer_token
              ? new i({
                  ...r,
                  apiKey: n.auth.aws_bearer_token,
                  defaultHeaders: {
                    Authorization: `Bearer ${n.auth.aws_bearer_token}`,
                    ...(!s && { "X-Api-Key": null }),
                  },
                })
              : n.auth.aws_access_key_id && n.auth.aws_secret_access_key
                ? new i({
                    ...r,
                    ...u,
                    awsAccessKey: n.auth.aws_access_key_id,
                    awsSecretKey: n.auth.aws_secret_access_key,
                    awsSessionToken: n.auth.aws_session_token,
                  })
                : new i({
                    ...r,
                    ...u,
                    ...(!a.CLAUDE_CODE_SKIP_AWS_CRED_CACHE && { providerChainResolver: () => aR(n.region) }),
                  });
          return {
            kind: "sdk",
            name: n.name,
            provider: "bedrock",
            client: c,
            ...(o && { invalidateAuth: () => rNe(n.region) }),
          };
        }
        case "anthropicAws": {
          let { AnthropicAws: i } = await import("/$bunfs/root/chunk-1zswy6bh.js"),
            r = {
              awsRegion: n.region,
              workspaceId: n.workspace_id,
              baseURL: n.base_url ?? `https://aws-external-anthropic.${n.region}.api.aws`,
              authToken: null,
              defaultHeaders: { Authorization: null },
              ..._O,
              timeout: Ac,
              fetchOptions: { ...Ri({ url: void 0 }), timeout: false },
              maxRetries: 0,
            },
            o;
          if (n.auth.api_key) o = new i({ ...r, apiKey: n.auth.api_key });
          else if (n.auth.aws_access_key_id || n.auth.aws_secret_access_key)
            o = new i({
              ...r,
              awsAccessKey: n.auth.aws_access_key_id,
              awsSecretAccessKey: n.auth.aws_secret_access_key,
              awsSessionToken: n.auth.aws_session_token,
            });
          else {
            let u = process.env.ANTHROPIC_AWS_API_KEY;
            delete process.env.ANTHROPIC_AWS_API_KEY;
            try {
              o = new i({
                ...r,
                ...(!a.CLAUDE_CODE_SKIP_AWS_CRED_CACHE && { providerChainResolver: () => aR(n.region) }),
              });
            } finally {
              if (u !== void 0) process.env.ANTHROPIC_AWS_API_KEY = u;
            }
          }
          let s = !n.auth.api_key && !n.auth.aws_access_key_id && !n.auth.aws_secret_access_key;
          return {
            kind: "sdk",
            name: n.name,
            provider: "anthropicAws",
            client: o,
            ...(s && { invalidateAuth: () => rNe(n.region) }),
          };
        }
        case "vertex": {
          let { AnthropicVertex: i } = await import("/$bunfs/root/chunk-msjfzscp.js"),
            r = {
              region: n.region,
              projectId: n.project_id,
              ...(n.base_url && { baseURL: n.base_url }),
              defaultHeaders: Kz(),
              timeout: Ac,
              fetchOptions: { ...Ri({ url: void 0 }), timeout: false },
              maxRetries: 0,
            };
          if (n.auth.access_token) {
            let o = n.auth.access_token;
            r.authClient = {
              projectId: n.project_id,
              getRequestHeaders: async () => ({ Authorization: `Bearer ${o}` }),
            };
          } else {
            let { GoogleAuth: o } = await import("/$bunfs/root/chunk-css5z0t2.js").then((m) => j(m.default, 1));
            r.googleAuth = new o({
              scopes: ["https://www.googleapis.com/auth/cloud-platform"],
              projectId: n.project_id,
              ...(n.auth.service_account_json && { keyFilename: n.auth.service_account_json }),
            });
          }
          return { kind: "sdk", name: n.name, provider: "vertex", client: Vz(new i(r)) };
        }
        case "foundry": {
          let { AnthropicFoundry: i } = await import("/$bunfs/root/chunk-hm2xvz6p.js"),
            r = {
              ...(n.base_url ? { baseURL: n.base_url } : { resource: n.resource }),
              timeout: Ac,
              fetchOptions: { ...Ri({ url: void 0 }), timeout: false },
              maxRetries: 0,
            };
          if ("api_key" in n.auth) r.apiKey = n.auth.api_key;
          else {
            let { DefaultAzureCredential: o } = await import("/$bunfs/root/chunk-3tzgyvp2.js"),
              s = new o();
            r.azureADTokenProvider = async () => {
              let u = await s.getToken("https://cognitiveservices.azure.com/.default");
              if (!u) throw Error("Azure AD token unavailable");
              return u.token;
            };
          }
          return { kind: "sdk", name: n.name, provider: "foundry", client: new i(r) };
        }
      }
    }),
  );
}

async function zk(e, t, n, i, r = true, o, s = 120000, u, c) {
  let d, f;
  if (c?.body) (d = c.body.buf), (f = c.body.parsed);
  else {
    d = await e.arrayBuffer();
    try {
      f = V(Buffer.from(d).toString("utf8"));
    } catch {
      return Qe(400, "invalid_request_error", "invalid JSON", u);
    }
  }
  if (typeof f !== "object" || f === null || Array.isArray(f))
    return Qe(400, "invalid_request_error", "request body must be a JSON object", u);
  if (!("model" in f) || f.model === "") return Qe(400, "invalid_request_error", "model is required", u);
  if (typeof f.model !== "string") return Qe(400, "invalid_request_error", "model must be a string", u);
  let p = f.model;
  if (o && !vp(p, o))
    return Qe(400, "invalid_request_error", `model ${Eo(p)} is not in your role's availableModels allowlist`, u);
  let h = [],
    y = [],
    v = () => {
      if (y.length === 0) return;
      Z("warn", `inference: model resolution failed request_id=${u ?? "-"}: ${y.join("; ")}`);
    },
    k = false,
    P = null,
    B = null,
    Q = null,
    ge = null,
    re = e.headers.get("anthropic-beta") ?? void 0,
    Se = {};
  e.headers.forEach((ve, Oe) => {
    if (Oe.toLowerCase().startsWith("x-stainless-")) Se[Oe] = ve;
  });
  let Ge = c?.criPrincipal === true;
  for (let ve of n) {
    if (e.signal.aborted) break;
    let Oe = Ca(p, ve, i, r, Ge);
    if (!Oe.ok) {
      h.push(Oe.error), y.push(`${ve.name}: ${Oe.error}`);
      continue;
    }
    let Mn = Oe.model,
      it = Mn === p ? f : { ...f, model: Mn };
    k = true;
    try {
      let le;
      if (ve.kind === "raw") {
        let Qt = it === f ? d : new TextEncoder().encode(b(it));
        if (((le = await Rk(e, t, Qt, ve, s, c?.user)), le.status === 401 && ve.invalidateAuth))
          ve.invalidateAuth(),
            Z("warn", `401 from ${ve.name}; invalidated WIF bearer cache, retrying request_id=${u ?? "-"}`),
            le.body?.cancel().catch(() => {}),
            (le = await Rk(e, t, Qt, ve, s, c?.user));
      } else {
        let Qt = Ge ? p : void 0;
        le = await jk(t, it, ve.provider, ve.client, re, Se, e.signal, u, Qt);
        let Di = Pp.get(le),
          $n = le.status === 401 || le.status === 403 ? ve.invalidateAuth : void 0,
          To = Di !== void 0 && Awt(Di.errorType, Di.message);
        if ($n && !To) $n();
        if ($n && To) {
          let Ao = $n();
          Z(
            "warn",
            `${le.status} from ${ve.name}; ${Ao ? "invalidated credential cache" : "credential invalidation debounced"}, retrying request_id=${u ?? "-"}`,
          ),
            le.body?.cancel().catch(() => {}),
            (le = await jk(t, it, ve.provider, ve.client, re, Se, e.signal, u, Qt));
        }
      }
      if (
        (le.headers.set("x-gateway-upstream", ve.name),
        le.headers.set("x-gateway-upstream-kind", "operator"),
        le.headers.set("x-gateway-model", p),
        le.headers.set("x-gateway-upstream-model", Mn),
        le.status >= 500 || le.status === 429 || le.status === 401 || le.status === 403 || le.status === 404)
      ) {
        if ((h.push(`${le.status} ${le.statusText}`), le.status === 501)) {
          if (P) P.body?.cancel().catch(() => {});
          P = le;
        } else if (le.status === 429) {
          if (B) B.body?.cancel().catch(() => {});
          B = le;
        } else if (le.status === 401 || le.status === 403) {
          if (Q) Q.body?.cancel().catch(() => {});
          Q = le;
        } else if (le.status === 404) {
          if (ge) ge.body?.cancel().catch(() => {});
          ge = le;
        } else le.body?.cancel().catch(() => {});
        continue;
      }
      for (let Qt of [P, B, Q, ge]) Qt?.body?.cancel().catch(() => {});
      if (le.status >= 300) v();
      return le;
    } catch (le) {
      let Qt = l(le);
      h.push(Qt), Z("warn", `upstream failed, trying next request_id=${u ?? "-"}: ${Qt}`);
    }
  }
  if (e.signal.aborted) {
    for (let ve of [P, B, Q, ge]) ve?.body?.cancel().catch(() => {});
    return Qe(499, "api_error", "client closed request", u);
  }
  if ((v(), !k)) return Qe(400, "invalid_request_error", h.join("; "), u);
  if (B) {
    for (let ve of [P, Q, ge]) ve?.body?.cancel().catch(() => {});
    return B;
  }
  if (Q) {
    for (let ve of [P, ge]) ve?.body?.cancel().catch(() => {});
    return Q;
  }
  if (ge) return P?.body?.cancel().catch(() => {}), ge;
  if (P) return P;
  return (
    Z("warn", `all upstreams failed request_id=${u ?? "-"}: ${h.join("; ")}`),
    Qe(502, "api_error", `all upstreams failed (${n.length} attempted)`, u)
  );
}

function Lk(e, t, n) {
  if (!t.forwardUserIdentity || !n) return;
  let i = (u) =>
      u === void 0 ? void 0 : Ry(u.trim()).replace(/[^\x21-\x7e]|%/gu, (c) => encodeURIComponent(c)) || void 0,
    r = i(n.email),
    o = i(n.sub),
    s = [
      ["x-litellm-end-user-id", r],
      ["x-claude-gateway-user-id", o],
      ["x-claude-gateway-user-email", r],
    ];
  for (let [u, c] of s) if (c) e.set(u, c);
}

async function Rk(e, t, n, i, r, o) {
  let s = wp(e),
    u = `${i.baseUrl.replace(/\/$/, "")}${t}${s.search}`,
    c = s.headers,
    d =
      typeof {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.252",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-08-31T16:02:57Z",
        GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      } < "u"
        ? {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.252",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-08-31T16:02:57Z",
            GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.VERSION
        : "unknown",
    f = c.get("user-agent");
  c.set("user-agent", f ? `${f} cc-gateway/${d}` : `cc-gateway/${d}`), Lk(c, i, o), await i.applyAuth(c);
  let p = await b2(
    u,
    { method: e.method, headers: c, body: n, duplex: "half", ...Ri({ url: u }), timeout: false },
    e.signal,
    r,
  );
  return new Response(p.body, { status: p.status, statusText: p.statusText, headers: m2(p.headers, u2) });
}

function v2(e, { requestId: t, wireModel: n, keepaliveIntervalMs: i = l2 } = {}) {
  let r = new TextEncoder(),
    o = r.encode(d2),
    s = e[Symbol.asyncIterator](),
    u = Date.now(),
    c = false,
    d;
  return new ReadableStream({
    start(f) {
      (d = setInterval(
        () => {
          if (!c && Date.now() - u >= i && (f.desiredSize ?? 0) > 0) f.enqueue(o), (u = Date.now());
        },
        Math.ceil(i / 3),
      )),
        d.unref?.();
    },
    async pull(f) {
      try {
        let { value: p, done: h } = await s.next();
        if (c) return;
        if (h) {
          (c = true), clearInterval(d), f.close();
          return;
        }
        let y = p,
          v =
            n !== void 0 && p.type === "message_start" && typeof y.message === "object" && y.message !== null
              ? { ...p, message: { ...y.message, model: n } }
              : p;
        f.enqueue(
          r.encode(`event: ${v.type}
data: ${b(v)}

`),
        ),
          (u = Date.now());
      } catch (p) {
        if (c) return;
        Z("warn", `upstream stream error request_id=${t ?? "-"}: ${l(p)}`);
        let h = p instanceof Gt ? (p.status ?? 500) : 500;
        f.enqueue(
          r.encode(`event: error
data: ${b({ type: "error", ...(t && { request_id: t }), error: { type: Da(h), message: Rc[h] ?? "upstream error" } })}

`),
        ),
          (c = true),
          clearInterval(d),
          f.close();
      }
    },
    async cancel() {
      (c = true), clearInterval(d), await s.return?.(void 0).catch(() => {});
    },
  });
}

function w2(e, t, n) {
  if (n !== "bedrock" || !t) return { body: e, betaHeader: t || void 0 };
  let i = [];
  for (let o of t.split(",")) {
    let s = o.trim();
    if (!s) continue;
    let u = r3t(s);
    i.push(u ? u.header : s);
  }
  if (i.length === 0) return { body: e, betaHeader: void 0 };
  let r = e.anthropic_beta;
  return { body: { ...e, anthropic_beta: te([...(Array.isArray(r) ? r : []), ...i]) }, betaHeader: void 0 };
}

async function jk(e, t, n, i, r, o, s, u, c) {
  let d = w2(t, r, n),
    f = d.body,
    p = { ...o, ...(d.betaHeader && { "anthropic-beta": d.betaHeader }) },
    h = { signal: s, ...(Object.keys(p).length > 0 && { headers: p }) };
  if (e === "/v1/messages/count_tokens" && n === "bedrock")
    return Qe(501, "not_supported", "count_tokens is not supported on Bedrock upstreams", u);
  try {
    switch (e) {
      case "/v1/messages": {
        if (f.stream) {
          let v = await i.messages.create({ ...f, stream: true }, h);
          return new Response(v2(v, { requestId: u, wireModel: c }), { headers: c2 });
        }
        let y = await i.messages.create(f, h);
        return Response.json(c !== void 0 ? { ...y, model: c } : y);
      }
      case "/v1/messages/count_tokens": {
        let y = await i.messages.countTokens(f, h);
        return Response.json(y);
      }
    }
  } catch (y) {
    if (y instanceof Gt) {
      let v = y.status ?? 500;
      Z("warn", `${n} upstream ${v} request_id=${u ?? "-"}: ${y.message}`);
      let k = Qe(v, Da(v), O2(v, y, r), u);
      return Pp.set(k, { errorType: y.headers?.get("x-amzn-errortype") ?? void 0, message: y.message }), k;
    }
    throw y;
  }
}

var S2 = {
    400: "invalid_request_error",
    401: "authentication_error",
    403: "permission_error",
    404: "not_found_error",
    413: "request_too_large",
    429: "rate_limit_error",
    501: "not_supported",
    529: "overloaded_error",
  },
  Rc = {
    400: "upstream rejected the request",
    401: "upstream authentication failed \u2014 check the gateway operator",
    403: "upstream denied the request \u2014 check the gateway operator",
    404: "upstream resource not found",
    413: "request too large for this upstream",
    429: "upstream rate limit exceeded",
    500: "upstream error",
    501: "upstream does not support this endpoint",
    529: "upstream overloaded",
  };

function Da(e) {
  return (e !== void 0 && S2[e]) || "api_error";
}

function O2(e, t, n) {
  if (e !== 400 && e !== 413) return Rc[e] ?? "upstream error";
  let i = t.error;
  if (
    i?.type === "error" &&
    typeof i.error?.message === "string" &&
    i.error.message !== "" &&
    typeof i.error.type === "string" &&
    Dk.has(i.error.type)
  )
    return ce(i.error.message, 1000);
  return Op(e, jMt(e, t.message, n?.split(",")));
}

var k2 = ["haiku45", "sonnet45", "sonnet46", "sonnet5", "opus41", "opus46", "opus47", "opus48", "opus5", "fable5"];

function Ep(e, t, n, i) {
  let r = new Map();
  for (let o of e)
    r.set(o.id, {
      type: "model",
      id: o.id,
      display_name: o.label ?? o.id,
      ...(o.description && { description: o.description }),
    });
  if (n) {
    let o = [FSn, vH, LV],
      s = k2.filter((u) => !o.includes(u)).reverse();
    for (let u of [...o, ...s]) {
      let c = so[u];
      if (r.has(c.firstParty)) continue;
      let d = false;
      for (let f of t)
        if (f === "anthropic" || c[f] !== null) {
          d = true;
          break;
        }
      if (d) r.set(c.firstParty, { type: "model", id: c.firstParty, display_name: c.firstParty });
    }
  }
  return i ? [...r.values()].filter((o) => vp(o.id, i)) : [...r.values()];
}

function Uk(e, t, n = true, i) {
  return Response.json({
    data: Ep(e, new Set(t.map((r) => r.provider)), n, i),
    has_more: false,
    first_id: null,
    last_id: null,
  });
}

var ji = { "Cache-Control": "no-store" },
  P2 = { 400: "invalid_request_error", 401: "authentication_error", 403: "permission_error", 404: "not_found_error" };

function et(e, t, n) {
  return Response.json({ type: "error", error: { type: P2[e], message: t }, request_id: n }, { status: e });
}

function xa(e, t) {
  let n = Number(e.get("limit") ?? t);
  if (!Number.isInteger(n) || n < 1 || n > 1000) return null;
  return n;
}

var $o = ["daily", "weekly", "monthly"];

function Ma(e = "monthly", t = new Date()) {
  if (e === "monthly") return t.toISOString().slice(0, 7);
  if (e === "daily") return t.toISOString().slice(0, 10);
  let n = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())),
    i = n.getUTCDay() || 7;
  n.setUTCDate(n.getUTCDate() + 4 - i);
  let r = n.getUTCFullYear(),
    o = Date.UTC(r, 0, 1),
    s = Math.ceil(((n.getTime() - o) / 86400000 + 1) / 7);
  return `${r}-W${String(s).padStart(2, "0")}`;
}

function Nk(e, t = new Date()) {
  let n = t.getUTCFullYear(),
    i = t.getUTCMonth(),
    r = t.getUTCDate();
  if (e === "monthly") return new Date(Date.UTC(n, i + 1, 1));
  if (e === "daily") return new Date(Date.UTC(n, i, r + 1));
  let o = 8 - (t.getUTCDay() || 7);
  return new Date(Date.UTC(n, i, r + o));
}

function jc(e, t) {
  if (e === "user") return { type: "user", user_id: t ?? "" };
  if (e === "rbac_group") return { type: "rbac_group", rbac_group_id: t ?? "" };
  return { type: "organization" };
}

async function Zk(e, t, n, i, r = new Date()) {
  return e`
    WITH pb AS (${Ip(e, $o, r)})
    SELECT pb.period, c.amount AS cap_cents, c.scope_type,
           coalesce(s.cents, 0)::float8 AS spent_cents
    FROM pb
    JOIN caps_by_period(${t}, ${e.array([...n], "TEXT")}, ${i}) c
      ON c.period = pb.period
    LEFT JOIN spend s ON s.principal = ${t} AND s.period = pb.bucket
    WHERE c.amount IS NOT NULL
    ORDER BY pb.ord
  `;
}

async function Fk(e, t, n) {
  let i = $o.map((o) => Ma(o)),
    r = () =>
      e.begin(async (o) => {
        await o`SET LOCAL statement_timeout = '2s'`,
          await o`
        INSERT INTO spend (principal, period, cents)
        SELECT DISTINCT ${t}, b, ${n}
        FROM unnest(${e.array(i, "TEXT")}) AS t(b)
        ORDER BY 2
        ON CONFLICT (principal, period) DO UPDATE
          SET cents = spend.cents + EXCLUDED.cents, updated_at = now()
      `;
      });
  try {
    await r();
  } catch (o) {
    let s = o ?? {};
    if (s.errno === "57014" || s.code === "57014") {
      await r();
      return;
    }
    throw o;
  }
}

async function Bk(e, t) {
  if (!t.email && !t.name && !t.groups) return;
  let n = t.email || null,
    i = t.name || null,
    r = t.groups ?? null;
  await e.begin(async (o) => {
    await o`SET LOCAL statement_timeout = '2s'`,
      await o`
      INSERT INTO principal_emails ${e({ principal: t.sub, email: n, name: i, groups: r })}
      ON CONFLICT (principal) DO UPDATE SET
        email = coalesce(${n}, principal_emails.email),
        name = coalesce(${i}, principal_emails.name),
        groups = coalesce(${r}, principal_emails.groups),
        updated_at = now()
    `;
  });
}

async function $p(e, t) {
  await e`INSERT INTO admin_audit ${e({ actor: t.actor, action: t.action, target: t.target, before: t.before ?? null, after: t.after ?? null, reason: t.reason ?? null })}`;
}

function Ip(e, t = $o, n = new Date()) {
  let i = t.map((r) => Ma(r, n));
  return e`
    SELECT period, bucket, ordinality AS ord
    FROM unnest(${e.array([...t], "TEXT")}, ${e.array(i, "TEXT")})
      WITH ORDINALITY AS t(period, bucket)
  `;
}

async function qk({ url: e, sql: t, requestId: n }, i) {
  let r = e.searchParams,
    o = xa(r, 20);
  if (o === null) return et(400, "limit: must be between 1 and 1000", n);
  let s = E2(r);
  if (s === null) return et(400, "period[]: must be one of daily, weekly, monthly", n);
  let u = r.getAll("user_ids[]");
  if (u.length > 100) return et(400, "user_ids[]: at most 100 entries per request", n);
  let c = r.get("q");
  if (c !== null && c.length > 256) return et(400, "q: too long", n);
  let d = r.get("sort");
  if (d !== null && d !== "spend_desc") return et(400, "sort: must be spend_desc", n);
  let f = d === "spend_desc";
  if (f && s.length !== 1) return et(400, "sort=spend_desc requires exactly one period[]", n);
  if (u.length > 0) {
    let P = await Kk(t, u, s, i);
    return Response.json({ data: P, next_page: null }, { headers: ji });
  }
  let p = r.get("page"),
    h;
  if (p !== null) {
    if (((h = T2(p, f)), h === void 0)) return et(400, "page: invalid page token", n);
  }
  let y = c === null ? null : `%${j2(c)}%`,
    v = f ? await A2(t, Ma(s[0]), h, y, o) : await R2(t, h, y, o),
    k = await Kk(t, v.subs, s, i);
  return Response.json({ data: k, next_page: v.nextToken }, { headers: ji });
}

function E2(e) {
  let t = e.getAll("period[]");
  if (t.length === 0) return $o;
  let n = [];
  for (let i of t) {
    if (i !== "daily" && i !== "weekly" && i !== "monthly") return null;
    if (!n.includes(i)) n.push(i);
  }
  return n;
}

var $2 = m(() => T.object({ p: T.string(), s: T.undefined() })),
  I2 = m(() => T.object({ p: T.string(), c: T.number(), s: T.literal(true) }));

function Hk(e) {
  return Buffer.from(JSON.stringify(e)).toString("base64url");
}

function T2(e, t) {
  let n = t ? I2() : $2();
  try {
    return n.parse(JSON.parse(Buffer.from(e, "base64url").toString()));
  } catch {
    return;
  }
}

async function A2(e, t, n, i, r) {
  let o = n?.p ?? null,
    s = n?.s === true ? n.c : null,
    u = await e`
    SELECT s.principal, s.cents FROM spend s
    LEFT JOIN principal_emails e ON e.principal = s.principal
    WHERE s.period = ${t}
      AND (${s}::float8 IS NULL
           OR s.cents < ${s}
           OR (s.cents = ${s} AND s.principal > ${o}))
      AND (${i}::text IS NULL OR s.principal ILIKE ${i}
           OR e.email ILIKE ${i} OR e.name ILIKE ${i})
    ORDER BY s.cents DESC, s.principal LIMIT ${r + 1}
  `,
    c = u.length > r,
    d = u.slice(0, r),
    f = d.at(-1);
  return {
    subs: d.map((p) => p.principal),
    nextToken: c && f !== void 0 ? Hk({ p: f.principal, c: f.cents, s: true }) : null,
  };
}

async function R2(e, t, n, i) {
  let r = t?.p ?? null,
    o = await e`
    SELECT s.principal FROM spend s
    LEFT JOIN principal_emails e ON e.principal = s.principal
    WHERE (${r}::text IS NULL OR s.principal > ${r})
      AND (${n}::text IS NULL OR s.principal ILIKE ${n}
           OR e.email ILIKE ${n} OR e.name ILIKE ${n})
    GROUP BY s.principal ORDER BY s.principal LIMIT ${i + 1}
  `,
    s = o.map((d) => d.principal).slice(0, i),
    u = o.length > i,
    c = s.at(-1);
  return { subs: s, nextToken: u && c !== void 0 ? Hk({ p: c }) : null };
}

function j2(e) {
  return e.replace(/[\\%_]/g, (t) => `\\${t}`);
}

async function Kk(e, t, n, i) {
  if (t.length === 0) return [];
  return (
    await e`
    WITH p AS (
      SELECT principal, ordinality AS ord
      FROM unnest(${e.array(t, "TEXT")}) WITH ORDINALITY AS t(principal)
    ),
    per AS (${Ip(e, n)})
    SELECT p.principal, per.period, cap.amount, cap.scope_type,
           cap.scope_id, cap.id AS spend_limit_id,
           coalesce(s.cents, 0) AS cents,
           e.email, e.name, e.groups
    FROM p
    CROSS JOIN per
    LEFT JOIN principal_emails e ON e.principal = p.principal
    LEFT JOIN LATERAL caps_by_period(
      p.principal,
      ARRAY(SELECT jsonb_array_elements_text(coalesce(e.groups, '[]'::jsonb))),
      ${i}
    ) cap ON cap.period = per.period
    LEFT JOIN spend s ON s.principal = p.principal AND s.period = per.bucket
    ORDER BY p.ord, per.ord
  `
  ).map((o) => C2(o));
}

function C2(e) {
  let t = e.scope_type === null ? null : jc(e.scope_type, e.scope_id);
  return {
    scope: { type: "user", user_id: e.principal },
    groups: e.groups ?? [],
    actor: {
      type: "user_actor",
      user_id: e.principal,
      name: e.name ?? null,
      email_address: e.email ?? null,
      deleted: false,
    },
    amount: e.amount,
    currency: "USD",
    period: e.period,
    source: t,
    spend_limit_id: e.spend_limit_id,
    period_to_date_spend: e.cents.toFixed(3).replace(/\.?0+$/, ""),
  };
}

var si = "/v1/organizations/spend_limits";

function Tp(e) {
  return e === si || e.startsWith(`${si}/`);
}

async function Gk(e, t, n, i, r, o, s = "min") {
  if (!Tp(t.pathname)) return null;
  let u = `req_${crypto.randomUUID().replace(/-/g, "")}`,
    c = await x2({ req: e, url: t, sql: n, keys: i, requestId: u, oidcAdmin: r, clientIp: o, groupLimitMode: s });
  return c.headers.set("request-id", u), Z("info", `admin ${e.method} ${t.pathname} -> ${c.status} (${u})`), c;
}

async function x2({ req: e, url: t, sql: n, keys: i, requestId: r, oidcAdmin: o, clientIp: s, groupLimitMode: u }) {
  let c = t.pathname,
    d = e.method,
    f = e.headers.get("x-api-key"),
    p = M2(f, i, o);
  if (!p)
    return (
      wt("admin.denied", {
        reason: f ? "invalid_key" : e.headers.get("authorization") ? "bearer_rejected" : "no_credentials",
        method: d,
        path: c,
        client_ip: s ?? null,
      }),
      et(401, "missing or invalid admin credentials", r)
    );
  let h = { req: e, url: t, sql: n, requestId: r, auth: p };
  if (c === `${si}/effective` && d === "GET") return qk(h, u);
  if (c === `${si}/audit` && d === "GET") return z2(h);
  if (c === si && d === "GET") return L2(h);
  if (c === si && d === "POST") return U2(h);
  if (c.startsWith(`${si}/`)) {
    let y;
    try {
      y = decodeURIComponent(c.slice(si.length + 1));
    } catch {
      return et(400, "malformed spend limit id", r);
    }
    if (d === "GET") return N2(h, y);
    if (d === "DELETE") return Z2(h, y);
    return et(404, "not found", r);
  }
  return et(404, "not found", r);
}

function M2(e, t, n) {
  if (!e) return n ? { canWrite: true, actor: `oidc:${n.sub}` } : null;
  let i = Vk(e, t.writeKeys),
    r = Vk(e, t.readKeys);
  if (i !== void 0) return { canWrite: true, actor: `admin-key:${i}` };
  if (r !== void 0) return { canWrite: false, actor: `admin-key:${r}` };
  return null;
}

function Vk(e, t) {
  let n = Buffer.from(e),
    i;
  for (let r of t) {
    let o = Buffer.from(r.key);
    if (o.length === n.length && D2(n, o)) i = r.id;
  }
  return i;
}

async function z2({ url: e, sql: t, requestId: n }) {
  let i = xa(e.searchParams, 100);
  if (i === null) return et(400, "limit: must be between 1 and 1000", n);
  let r = e.searchParams.get("after_id");
  if (r !== null && !/^\d{1,18}$/.test(r)) return et(400, "after_id: must be an audit event id", n);
  let o = await t`
    SELECT id, at, actor, action, target, before, after, reason
    FROM admin_audit
    WHERE (${r}::bigint IS NULL OR id < ${r}::bigint)
    ORDER BY id DESC LIMIT ${i + 1}
  `,
    s = o.length > i;
  return Response.json(
    {
      data: o.slice(0, i).map((u) => ({
        type: "audit_event",
        id: u.id,
        created_at: u.at.toISOString(),
        actor: u.actor,
        action: u.action,
        target_id: u.target,
        before: u.before ?? null,
        after: u.after ?? null,
        reason: u.reason ?? null,
      })),
      has_more: s,
    },
    { headers: ji },
  );
}

async function L2({ url: e, sql: t, requestId: n }) {
  let i = e.searchParams,
    r = xa(i, 20);
  if (r === null) return et(400, "limit: must be between 1 and 1000", n);
  let o = i.get("scope_type");
  if (o !== null && o !== "organization" && o !== "rbac_group" && o !== "user")
    return et(400, "scope_type: must be one of organization, rbac_group, user", n);
  let s = i.get("after_id"),
    u = i.get("before_id");
  if (s !== null && u !== null) return et(400, "after_id and before_id are mutually exclusive", n);
  let c = s ?? u,
    d;
  if (c !== null) {
    if (((d = (await t`SELECT created_at::text AS created_at, id FROM spend_limits WHERE id = ${c}`)[0]), !d))
      return et(400, `${s !== null ? "after_id" : "before_id"}: no spend limit with this id`, n);
  }
  let f = r + 1,
    p,
    h;
  if (u !== null && d) {
    let v = await t`
      SELECT * FROM spend_limits
      WHERE (created_at, id) < (${d.created_at}::timestamptz, ${d.id})
        AND (${o}::text IS NULL OR scope_type = ${o})
      ORDER BY created_at DESC, id DESC LIMIT ${f}
    `;
    (p = v.length > r), (h = v.slice(0, r).reverse().map(Io));
  } else {
    let v = d?.created_at ?? null,
      k = await t`
      SELECT * FROM spend_limits
      WHERE (${v}::timestamptz IS NULL
             OR (created_at, id) > (${v}::timestamptz, ${d?.id ?? null}))
        AND (${o}::text IS NULL OR scope_type = ${o})
      ORDER BY created_at, id LIMIT ${f}
    `;
    (p = k.length > r), (h = k.slice(0, r).map(Io));
  }
  let y = h.map(Ap);
  return Response.json(
    { data: y, has_more: p, first_id: y[0]?.id ?? null, last_id: y.at(-1)?.id ?? null },
    { headers: ji },
  );
}

async function U2({ req: e, sql: t, requestId: n, auth: i }) {
  if (!i.canWrite) return et(403, "requires write:spend_limits", n);
  let r = await K2(e, n);
  if (r instanceof Response) return r;
  let { scope: o, amount: s, period: u } = r,
    c = q2(o),
    d = `spend_limits:${o.type}:${c}:${u}`,
    f = {
      id: `spl_${crypto.randomUUID().replace(/-/g, "")}`,
      scope_type: o.type,
      scope_id: c,
      amount: s,
      period: u,
      created_by: i.actor,
    },
    { before: p, after: h } = await t.begin(async (y) => {
      await y`SELECT pg_advisory_xact_lock(hashtext(${d}))`;
      let [v] = await y`
      SELECT * FROM spend_limits
      WHERE scope_type = ${o.type} AND scope_id = ${c} AND period = ${u}
    `,
        [k] = await y`
      INSERT INTO spend_limits ${y(f)}
      ON CONFLICT (scope_type, scope_id, period) DO UPDATE
        SET amount = ${s}, updated_at = now()
      RETURNING *
    `,
        P = Io(k);
      return (
        await $p(y, { actor: i.actor, action: "spend_limit.upsert", target: P.id, before: v ? Io(v) : null, after: P }),
        { before: v, after: P }
      );
    });
  return (
    wt("admin.limit.upsert", {
      actor: i.actor,
      target: h.id,
      scope_type: o.type,
      scope_id: c,
      period: u,
      ...(p !== void 0 && { before_amount: p.amount }),
      amount: s,
    }),
    Response.json(Ap(h))
  );
}

async function N2({ sql: e, requestId: t }, n) {
  let r = (
    await e`
    SELECT id, scope_type, scope_id, amount, period, currency, created_at, updated_at FROM spend_limits WHERE id = ${n}
  `
  )[0];
  return r ? Response.json(Ap(Io(r)), { headers: ji }) : et(404, "spend limit not found", t);
}

async function Z2({ sql: e, requestId: t, auth: n }, i) {
  if (!n.canWrite) return et(403, "requires write:spend_limits", t);
  let r = await e.begin(async (o) => {
    let u = (
      await o`
      DELETE FROM spend_limits WHERE id = ${i} RETURNING id, scope_type, scope_id, amount, period, currency, created_at, updated_at
    `
    )[0];
    if (!u) return false;
    return await $p(o, { actor: n.actor, action: "spend_limit.delete", target: i, before: Io(u) }), u;
  });
  if (r)
    return (
      wt("admin.limit.delete", {
        actor: n.actor,
        target: i,
        scope_type: r.scope_type,
        scope_id: r.scope_id,
        period: r.period,
      }),
      Response.json({ type: "spend_limit_deleted", id: i })
    );
  return et(404, "spend limit not found", t);
}

var F2 = m(() =>
  T.object({
    scope: T.discriminatedUnion("type", [
      T.object({ type: T.literal("user"), user_id: T.string().min(1) }),
      T.object({ type: T.literal("rbac_group"), rbac_group_id: T.string().min(1) }),
      T.object({ type: T.literal("organization") }),
    ]),
    amount: T.string()
      .regex(/^\d{1,18}$/, "must be a whole-number decimal string of cents")
      .nullable(),
    period: T.enum(["daily", "weekly", "monthly"]).default("monthly"),
    currency: T.literal("USD").optional(),
  }),
);

function B2(e) {
  let t = e.issues[0];
  if (!t) return "invalid request body";
  let n = t.path.join(".");
  return n ? `${n}: ${t.message}` : t.message;
}

async function K2(e, t) {
  let n;
  try {
    n = await e.json();
  } catch {
    return et(400, "invalid JSON body", t);
  }
  let i = F2().safeParse(n);
  return i.success ? i.data : et(400, B2(i.error), t);
}

function q2(e) {
  switch (e.type) {
    case "user":
      return e.user_id;
    case "rbac_group":
      return e.rbac_group_id;
    case "organization":
      return "";
  }
}

function Io(e) {
  return {
    id: e.id,
    scope: jc(e.scope_type, e.scope_id),
    amount: e.amount,
    period: e.period,
    currency: e.currency,
    created_at: e.created_at.toISOString(),
    updated_at: e.updated_at.toISOString(),
  };
}

function Ap(e) {
  return {
    type: "spend_limit",
    id: e.id,
    created_at: e.created_at,
    updated_at: e.updated_at,
    scope: e.scope,
    amount: e.amount,
    currency: e.currency,
    period: e.period,
  };
}

function Xk(e, t, n, i = null, r) {
  if (!e.body || e.status >= 400) return e;
  let o = (e.headers.get("content-type") ?? "").includes("text/event-stream"),
    s = e.body.getReader(),
    u = H2(o, i, r),
    c = false;
  async function d() {
    if (c) return;
    c = true;
    try {
      let p = await u.usage();
      if (p) n(t(p));
    } catch (p) {
      Z("warn", `usage metering failed: ${l(p)}`);
    }
  }
  let f = new ReadableStream({
    async pull(p) {
      try {
        let h = await s.read();
        if (h.done) {
          d(), p.close();
          return;
        }
        u.push(h.value), p.enqueue(h.value);
      } catch (h) {
        d(), p.error(h);
      }
    },
    async cancel(p) {
      d(), await s.cancel(p);
    },
  });
  return new Response(f, { status: e.status, statusText: e.statusText, headers: e.headers });
}

var Wk = 8388608;

function H2(e, t, n) {
  let i = new TextDecoder();
  if (e) {
    let u = "",
      c = W2();
    return {
      push(d) {
        u += i.decode(d, { stream: true });
        let f = u.split(V2);
        u = f.pop() ?? "";
        for (let p of f) Jk(c, p);
        if (u.length > Wk) u = "";
      },
      async usage() {
        if (u !== "") Jk(c, u), (u = "");
        return J2(c);
      },
    };
  }
  let r = "",
    o = 0,
    s = false;
  return {
    push(u) {
      let c = i.decode(u, { stream: true });
      if (((o += c.length), s)) return;
      if (((r += c), r.length > Wk)) (s = true), (r = "");
    },
    async usage() {
      let u = s ? null : Y2(r);
      if (u) return u;
      if (o === 0) return null;
      return { input_tokens: (await t?.().catch(() => null)) ?? 0, output_tokens: Math.ceil(o / Qk), speed: n };
    },
  };
}

var V2 = /\r?\n\r?\n/,
  Qk = 4,
  G2 = 80;

function W2() {
  return { usage: { input_tokens: 0, output_tokens: 0 }, seen: false, estOutputChars: 0, sawOutputTokens: false };
}

function Jk(e, t) {
  let n = Rp(t, "event:"),
    i = n ? t.slice(n[0], n[1]).trim() : null;
  if (i === "content_block_delta") {
    Yk(e, t);
    return;
  }
  if (i !== null && i !== "message_start" && i !== "message_delta") return;
  if (i === null) {
    if (!t.includes('"usage"')) {
      if (t.includes('"content_block_delta"')) Yk(e, t);
      return;
    }
  }
  let r = Rp(t, "data:");
  if (!r) return;
  let o;
  try {
    o = JSON.parse(t.slice(r[0], r[1]).trim());
  } catch {
    return;
  }
  let s = X2().safeParse(o);
  if (!s.success) return;
  if (s.data.type === "message_start" && s.data.message?.usage) {
    eP(e.usage, s.data.message.usage), (e.seen = true);
    return;
  }
  if (s.data.type === "content_block_delta" && s.data.delta) {
    let u = s.data.delta;
    e.estOutputChars += (u.text?.length ?? 0) + (u.partial_json?.length ?? 0) + (u.thinking?.length ?? 0);
    return;
  }
  if (s.data.type === "message_delta" && s.data.usage) {
    if (s.data.usage.output_tokens !== void 0)
      (e.usage.output_tokens = s.data.usage.output_tokens), (e.sawOutputTokens = true);
    if (s.data.usage.server_tool_use !== void 0) e.usage.server_tool_use = s.data.usage.server_tool_use;
    e.seen = true;
  }
}

function Yk(e, t) {
  let n = Rp(t, "data:");
  if (n) e.estOutputChars += Math.max(0, n[1] - n[0] - G2);
}

function Rp(e, t) {
  let n = 0;
  while (true) {
    if (e.startsWith(t, n)) {
      let r = n + t.length;
      if (e.charCodeAt(r) === 32) r += 1;
      let o = e.indexOf(
        `
`,
        r,
      );
      return [r, o === -1 ? e.length : o];
    }
    let i = e.indexOf(
      `
`,
      n,
    );
    if (i === -1) return null;
    n = i + 1;
  }
}

function J2(e) {
  if (!e.sawOutputTokens && e.estOutputChars > 0)
    (e.usage.output_tokens = Math.ceil(e.estOutputChars / Qk)), (e.seen = true);
  return e.seen ? e.usage : null;
}

function Y2(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  let n = Q2().safeParse(t);
  if (!n.success || !n.data.usage) return null;
  let i = { input_tokens: 0, output_tokens: 0 };
  if (
    (eP(i, n.data.usage), (i.output_tokens = n.data.usage.output_tokens ?? 0), n.data.usage.server_tool_use !== void 0)
  )
    i.server_tool_use = n.data.usage.server_tool_use;
  return i;
}

function eP(e, t) {
  if (
    ((e.input_tokens = t.input_tokens ?? e.input_tokens),
    (e.cache_read_input_tokens = t.cache_read_input_tokens),
    (e.cache_creation_input_tokens = t.cache_creation_input_tokens),
    t.server_tool_use !== void 0)
  )
    e.server_tool_use = t.server_tool_use;
  if (t.speed !== void 0) e.speed = t.speed;
}

var jp = m(() =>
    T.object({
      input_tokens: T.number().optional(),
      output_tokens: T.number().optional(),
      cache_read_input_tokens: T.number().optional(),
      cache_creation_input_tokens: T.number().optional(),
      speed: T.string().nullable().optional(),
      server_tool_use: T.object({ web_search_requests: T.number().optional() }).passthrough().optional(),
    }).passthrough(),
  ),
  X2 = m(() =>
    T.object({
      type: T.string().optional(),
      usage: jp().optional(),
      message: T.object({ usage: jp().optional() }).passthrough().optional(),
      delta: T.object({
        text: T.string().optional(),
        partial_json: T.string().optional(),
        thinking: T.string().optional(),
      })
        .passthrough()
        .optional(),
    }).passthrough(),
  ),
  Q2 = m(() => T.object({ usage: jp().optional() }).passthrough());

var e3 = 2000;

function tP(e, t) {
  if (!t.admin) return null;
  let n = t.admin,
    i = new Set(),
    r = new Map(),
    o = 900000;
  async function s(p, h) {
    c(p);
    let y = new Date(),
      v;
    try {
      v = await Xt(
        e.begin(
          async (B) => (
            await B`SET LOCAL statement_timeout = '2s'`, Zk(B, p.sub, p.groups ?? [], n.group_limit_mode, y)
          ),
        ),
        e3 + 500,
        "spend precheck timed out",
      );
    } catch (B) {
      if ((Z("warn", `spend check failed: ${l(B)}`), !t.enforcement.fail_closed_on_error))
        return { blocked: null, headers: {} };
      return { blocked: u(p.sub, h, null, { "anthropic-ratelimit-unified-overage-disabled-reason": "fetch_error" }) };
    }
    let { binding: k, headers: P } = r3(v, y);
    if (!k?.exceeded) return { blocked: null, headers: P };
    return { blocked: u(p.sub, h, k, P) };
  }
  function u(p, h, y, v) {
    wt("spend.blocked", {
      request_id: h,
      sub: p,
      cause: y ? "over_limit" : "store_error",
      ...(y && { cap_cents: y.cap_cents, source: y.scope_type, period: y.period }),
    });
    let k = y
      ? `spend limit reached (${y.period}; resets ${y.resetsAt.toISOString().slice(0, 16).replace("T", " ")} UTC)`
      : "spend limit unavailable";
    return Response.json(
      {
        type: "error",
        error: { type: "billing_error", message: n.blocked_message ? `${k} \u2014 ${n.blocked_message}` : k },
      },
      { status: 429, headers: { ...v, "x-should-retry": "false" } },
    );
  }
  function c(p) {
    let h = `${p.sub}\x00${p.email ?? ""}\x00${p.name ?? ""}\x00${(p.groups ?? []).join(",")}`,
      y = r.get(h) ?? 0;
    if (Date.now() - y >= o) {
      if (r.size >= 1e4) r.clear();
      r.set(h, Date.now()), Bk(e, p).catch((v) => Z("warn", `identity record failed: ${l(v)}`));
    }
  }
  function d(p, h, y, v, k, P, B) {
    if (p.status < 400 && v !== null && !hre(k ?? "") && !Fi(t.pricing, y, v, k)) f(v);
    return Xk(
      p,
      (Q) => dh(v, Q, k, t.pricing, y),
      (Q) => {
        Fk(e, h.sub, Q).catch((ge) => Z("warn", `spend record failed: ${l(ge)}`));
      },
      P,
      B,
    );
  }
  function f(p) {
    if (hre(p) || i.has(p) || i.size >= 1000) return;
    i.add(p),
      Z("warn", `spend meter has no exact rates for model '${p}' \u2014 metering at the unknown-model default tier`);
  }
  return { precheck: s, meter: d };
}

var t3 = [0.95, 0.75];

function r3(e, t = new Date()) {
  let n = null;
  for (let i of e) {
    let r = Number(i.cap_cents),
      o = i.spent_cents >= r,
      s = { ...i, exceeded: o, utilization: r > 0 ? i.spent_cents / r : 1, resetsAt: Nk(i.period, t) };
    n = n ? n3(n, s) : s;
  }
  return { binding: n, headers: n ? i3(n, t) : {} };
}

function n3(e, t) {
  if (e.exceeded !== t.exceeded) return e.exceeded ? e : t;
  if (e.exceeded) return e.resetsAt.getTime() > t.resetsAt.getTime() ? e : t;
  return e.utilization > t.utilization ? e : t;
}

function i3(e, t) {
  let n = String(Math.floor(e.resetsAt.getTime() / 1000)),
    i = e.exceeded ? 1 : t3.find((c) => e.utilization > c),
    r = e.exceeded ? "rejected" : i ? "allowed_warning" : "allowed",
    o = Math.round(e.utilization * 100) / 100,
    s = e.exceeded ? o : Math.min(o, 0.99),
    u = {
      "anthropic-ratelimit-unified-status": r,
      "anthropic-ratelimit-unified-reset": n,
      "anthropic-ratelimit-unified-overage-reset": n,
      "anthropic-ratelimit-unified-overage-utilization": String(s),
    };
  if (i) u["anthropic-ratelimit-unified-overage-surpassed-threshold"] = String(i);
  if (e.exceeded)
    (u["anthropic-ratelimit-unified-overage-period"] = e.period),
      (u["anthropic-ratelimit-unified-overage-disabled-reason"] = "org_spend_cap_reached"),
      (u["retry-after"] = String(Math.max(1, Math.ceil((e.resetsAt.getTime() - t.getTime()) / 1000))));
  else
    (u["anthropic-ratelimit-unified-representative-claim"] = "overage"),
      (u["anthropic-ratelimit-unified-overage-status"] = r);
  return u;
}

function Cp(e, t) {
  return t !== void 0 && t.admin_groups.length > 0 && (e ?? []).some((n) => t.admin_groups.includes(n));
}

var rP = j(lp(), 1);

function nP(e, t, n, i) {
  let r = t?.payload.settings ?? {},
    o = a3(r),
    s = t?.desktop,
    u = mp(o.disabledBuiltinTools, s?.disabledBuiltinTools),
    c = u3(s === void 0 ? void 0 : { ...s, ...(u === void 0 ? {} : { disabledBuiltinTools: u }) }),
    d = e.telemetry.forward_to.length > 0 && e.listen.public_url;
  return {
    inferenceProvider: "gateway",
    inferenceGatewayBaseUrl: i,
    inferenceCredentialKind: "interactive",
    ...(d && {
      otlpEndpoint: i,
      otlpProtocol: "http/json",
      otlpResourceAttributes: { "enduser.id": n.email ?? n.sub },
    }),
    ...o3(e, t?.availableModels),
    ...o,
    ...s3(r),
    ...c,
    expiresAt: Math.floor(Date.now() / 1000) + e.session.ttl_hours * 3600,
  };
}

function o3(e, t) {
  let n = Ep(e.models, new Set(e.upstreams.map((i) => i.provider)), e.auto_include_builtin_models, t).map((i) => ({
    name: i.id,
    ...(i.display_name !== i.id && { labelOverride: i.display_name }),
  }));
  return n.length > 0 ? { inferenceModels: n } : {};
}

function a3(e) {
  let t = iP(e, ["permissions", "deny"]);
  if (!t) return {};
  let n = t.filter((i) => !i.includes("(") && !i.startsWith("mcp__"));
  return n.length > 0 ? { disabledBuiltinTools: n } : {};
}

function s3(e) {
  let t = iP(e, ["sandbox", "network", "allowedDomains"]);
  return t !== void 0 && t.length > 0 ? { coworkEgressAllowedHosts: t } : {};
}

function iP(e, t) {
  let n = e;
  for (let i of t) {
    if (n === null || typeof n !== "object") return;
    n = n[i];
  }
  return Array.isArray(n) && n.every((i) => typeof i === "string") ? n : void 0;
}

function u3(e) {
  if (!e) return e;
  let t = { ...e };
  for (let [n, i] of Object.entries(rP.LEGACY_WIRE_SHAPES)) if (t[n] !== void 0) t[n] = i.toLegacy(t[n]);
  return t;
}

var xp = { "/v1/metrics": "metrics", "/v1/logs": "logs", "/v1/traces": "traces" },
  c3 = 128,
  l3 = 5,
  d3 = 30000;

function Dp(e) {
  return String(e).replace(/(\b\w+:\/\/)[^@/]+@/g, "$1");
}

class Mp {
  inFlight = 0;
  dropped = 0;
  circuitBreakers = new Map();
  async fanout(e, t, n, i, r) {
    if (r.length === 0) return;
    if (this.inFlight >= c3) {
      if (this.dropped++ % 100 === 0) Z("warn", `otel fanout saturated (${this.inFlight} in flight); dropping`);
      return;
    }
    this.inFlight++;
    try {
      let o = Date.now(),
        s = r.map((c) => (this.circuitBreakers.get(c.url)?.openUntil ?? 0) > o);
      (
        await Promise.allSettled(
          r.map((c, d) => {
            if (s[d]) return Promise.reject(Error("circuit open"));
            return gi(`${c.url.replace(/\/$/, "")}${e}`, {
              method: "POST",
              body: t,
              headers: { "Content-Type": n, ...(i && { "Content-Encoding": i }), ...c.headers },
              signal: AbortSignal.timeout(1e4),
            }).then((f) => {
              if ((f.body?.cancel().catch(() => {}), !f.ok)) throw Error(`${f.status} ${f.statusText}`);
            });
          }),
        )
      ).forEach((c, d) => {
        if (s[d]) return;
        let f = r[d].url;
        if (c.status === "fulfilled") this.circuitBreakers.delete(f);
        else {
          let p = this.circuitBreakers.get(f) ?? { fails: 0, openUntil: 0 };
          if (++p.fails >= l3) (p.openUntil = Date.now() + d3), Z("warn", `otel dest ${Dp(f)} tripped; skipping 30s`);
          else Z("warn", `otel forward to ${Dp(f)} failed: ${Dp(c.reason)}`);
          this.circuitBreakers.set(f, p);
        }
      });
    } finally {
      this.inFlight--;
    }
  }
}

var aP = "blocked by your organization's policy",
  oP = 500;

function f3(e) {
  let t = e.replace(/[\p{Cc}\p{Cf}]+/gu, " ").trim();
  if (t.length === 0) return aP;
  let n = Array.from(t);
  return n.length > oP ? n.slice(0, oP).join("") + "\u2026" : t;
}

function sP(e) {
  let t = e.cri?.enabled ? e.cri.policy?.webhook : void 0;
  if (!t) return null;
  let { url: n, timeout_ms: i } = t,
    r = t.fail_closed !== false;
  function o(s, u, c, d, f, p, h, y) {
    return (
      wt("policy.blocked", {
        request_id: u,
        sub: s,
        cause: c,
        path: f,
        ...(p !== void 0 && { org: p }),
        ...(h !== void 0 && { act: h }),
        ...(y !== void 0 && { rule_id: y }),
      }),
      Qe(400, "policy_blocked", d, u, { "x-should-retry": "false" })
    );
  }
  return {
    async precheck(s, u, c, d, f, p) {
      let h,
        y = (v) => {
          wt("policy.skipped", {
            request_id: c,
            sub: s.sub,
            cause: v,
            path: d.path,
            ...(f !== void 0 && { org: f }),
            ...(p !== void 0 && { act: p }),
          });
        };
      try {
        let v = await os(
          n,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "x-request-id": c,
              "x-principal-sub": s.sub.replace(/[^\x21-\x7e]/g, ""),
            },
            body: b({ path: d.path, query: d.query, headers: d.headers, body: u }),
          },
          i,
          "policy webhook timed out",
        );
        if (!v.ok)
          throw (
            (v.body?.cancel().catch(() => {}),
            Z("warn", `policy check failed: webhook returned ${v.status}`),
            Error("policy webhook returned a non-OK status"))
          );
        let k = await v.json();
        if (typeof k !== "object" || k === null || Array.isArray(k))
          throw Error("policy webhook returned a non-object decision");
        if (((h = k), typeof h.block !== "boolean")) {
          if (r) throw Error("policy webhook decision has no boolean block field");
          return (
            Z("warn", "policy check: webhook decision has no boolean block field \u2014 allowing (fail-open)"),
            y("decision_shape"),
            null
          );
        }
      } catch (v) {
        if ((Z("warn", `policy check failed: ${l(v)}`), r))
          return o(s.sub, c, "engine_error", "policy check unavailable", d.path, f, p);
        return y("engine_error"), null;
      }
      if (h.block !== true) return null;
      return o(
        s.sub,
        c,
        "policy_hit",
        typeof h.reason === "string" && h.reason.length > 0 ? f3(h.reason) : aP,
        d.path,
        f,
        p,
        typeof h.rule_id === "string" ? h.rule_id : void 0,
      );
    },
  };
}

function uP(e) {
  let t = e.oidcConfigured
    ? `# Claude Code gateway protocol

This is the wire contract the Claude Code CLI uses to talk to this gateway:
sign-in, inference, managed settings, and telemetry. It's served from the
gateway itself so it always matches the version you're running.

> **Stability:** this protocol exists to give you a more stable target than
> proxying raw CLI traffic. Auth is standard OAuth 2.0, inference is the
> Messages API, and headers are the lowest common denominator across
> backends. We keep it backwards compatible within reason to support older
> clients, but not forever \u2014 expect changes, managed settings in particular,
> with notice.

A developer points Claude Code at your gateway's base URL via \`/login\` and
the client does the rest. All paths below are relative to that base URL, and
the client does not follow cross-origin redirects.

## Flow

1. Client fetches \`GET {base}/.well-known/oauth-authorization-server\`.
2. On first contact, client fingerprints your TLS certificate and asks the
   user to trust it.
3. Client runs the RFC 8628 device flow: \`POST device_authorization_endpoint\`
   -> user approves in a browser at \`verification_uri\` -> client polls
   \`token_endpoint\` until it gets a bearer token.
4. Client sends \`Authorization: Bearer <token>\` on every subsequent request.
5. Client uses fixed paths under \`{base}\` for inference (\`/v1/messages\`),
   policy (\`/managed/settings\`), model discovery (\`/v1/models\`), and
   telemetry (\`/v1/{metrics,logs,traces}\`).
6. Before the token expires, client silently calls \`token_endpoint\` with
   \`grant_type=refresh_token\`. If you didn't issue a refresh token, the user
   is sent back through the browser flow instead.

## Discovery \u2014 required

\`GET /.well-known/oauth-authorization-server\` (unauthenticated)

RFC 8414 authorization server metadata. The client reads
\`device_authorization_endpoint\` and \`token_endpoint\` and ignores the rest;
both must be same-origin with \`{base}\`. \`authorization_endpoint\` is
intentionally absent.

    {
      "issuer": "https://gw.corp.example.com",
      "device_authorization_endpoint": "https://gw.corp.example.com/oauth/device_authorization",
      "token_endpoint": "https://gw.corp.example.com/oauth/token",
      "grant_types_supported": ["urn:ietf:params:oauth:grant-type:device_code", "refresh_token"]
    }

## Device authorization \u2014 required

\`POST {device_authorization_endpoint}\` (unauthenticated)

RFC 8628 \xA73.2. The client opens \`verification_uri_complete\` in the user's
browser and polls \`token_endpoint\` every \`interval\` seconds.

    {
      "device_code": "AbK9-s3n4C8H...",
      "user_code": "WDJB-MJHT",
      "verification_uri": "https://gw.corp.example.com/device",
      "verification_uri_complete": "https://gw.corp.example.com/device?user_code=WDJB-MJHT",
      "expires_in": 600,
      "interval": 5
    }

\`device_code\` should be >=256 bits, opaque, single-use. \`user_code\` should
use a base-20 charset (RFC 8628 \xA76.1).

The request body is form-encoded and may carry one extension parameter next
to RFC 8628 \xA73.1's: \`surface\`, a stable identifier of the client application
that is signing in. Claude Code sends \`surface=claude_code\`. Record it if you
attribute sessions by client; otherwise ignore it, as OAuth servers do for
any parameter they do not recognize (RFC 6749 \xA73.1, \xA73.2). Claude Code also sends \`User-Agent: claude-code/<version>\` on
the metadata, device, token and refresh requests.

## Verification page \u2014 required

\`GET/POST {verification_uri}\` (browser-facing; the client never calls this)

Accept the user code, authenticate the user against your IdP, and mark the
matching \`device_code\` approved so the next token poll succeeds. Apply a
per-IP rate limit (RFC 8628 \xA75.1) and don't auto-submit a pre-filled code
(\xA75.4).

## Token \u2014 required

\`POST {token_endpoint}\` (unauthenticated,
\`application/x-www-form-urlencoded\`)

**Device grant** (\`grant_type=urn:ietf:params:oauth:grant-type:device_code\`):

| Status | Body | Client reaction |
|---|---|---|
| 200 | \`{"access_token","token_type":"Bearer","expires_in","refresh_token"?}\` | Login complete. \`refresh_token\` is optional; omit it and the client re-runs the device flow on expiry. |
| 400 | \`{"error":"authorization_pending"}\` | Keep polling. |
| 400/429 | \`{"error":"slow_down"}\` | Add 5s to the poll interval. |
| 400 | \`{"error":"access_denied"}\` | Stop. |
| 400 | \`{"error":"expired_token"}\` | Stop. |

**Refresh grant** (\`grant_type=refresh_token\`): return a fresh
\`{"access_token","token_type","expires_in","refresh_token"}\` on 200. Return
\`401 {"error":"invalid_grant"}\` to force re-login \u2014 this is your
deprovisioning hook.

## Messages \u2014 required

\`POST /v1/messages\` and \`POST /v1/messages/count_tokens\` (bearer)

The Anthropic Messages API (https://platform.claude.com/docs/en/api/messages),
unchanged. Proxy to your upstream and stream the response back. Enforce your
model allowlist here, returning \`400 invalid_request_error\` for a denied
model. Don't buffer SSE on the \`stream: true\` path. The client always sets
\`Content-Length\`, so you may reject chunked-without-CL (\`411\`) and cap body
size (\`413\`). The client doesn't assume server-side tools are available. The
client also sends \`x-app\` and \`x-stainless-*\` headers \u2014 pass them through or
drop them, but don't reject the request because of them.

## Managed settings \u2014 optional

\`GET /managed/settings\` (bearer)

The authenticated user's Claude Code \`managed-settings.json\`; see
https://code.claude.com/docs/en/settings for the key reference. The client
polls about once an hour; support \`ETag\`/\`If-None-Match\` -> \`304\` to keep
that cheap. Return \`404\` for "no managed policy"; \`200 {}\` means "this user
has an empty policy" \u2014 they're not the same. **This is the endpoint most
likely to change.**

## Models \u2014 optional

\`GET /v1/models\` (bearer)

Anthropic models-list shape: \`{"data":[{"id","display_name"},...]}\`. Use
Anthropic-style IDs (\`claude-{family}-{major}-{minor}\`) \u2014 the client's
model-family logic keys on that shape. The client only calls this when
\`CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY\` is set on the client, which you
can push via the \`env\` block in \`/managed/settings\`. Return \`404\` to fall
back to the client's built-in list.

## Telemetry \u2014 optional

\`POST /v1/metrics\`, \`/v1/logs\`, \`/v1/traces\` (bearer)

OTLP/HTTP (protobuf or JSON). When connected to a gateway the client sends
telemetry here and ignores \`OTEL_EXPORTER_OTLP_*\` env vars. Return \`200\`
whether you forward or discard \u2014 \`404\` makes the client's exporter log an
error on every flush.

## Errors

OAuth endpoints use \`{"error":"...","error_description":"..."}\`
(RFC 6749/8628). Bearer-authenticated endpoints use the Anthropic envelope so
the SDK surfaces the message to the user:

    {"type":"error","error":{"type":"authentication_error","message":"..."}}

| HTTP | error.type | Use for |
|---|---|---|
| 400 | \`invalid_request_error\` | Denied model, malformed body, policy violation |
| 401 | \`authentication_error\` | Missing/expired/invalid bearer; client prompts re-login |
| 403 | \`permission_error\` | Authenticated but not allowed |
| 413 | \`request_too_large\` | Body over your cap |
| 429 | \`rate_limit_error\` | Throttling; include \`Retry-After\` |
| 429 | \`billing_error\` | The user's own cap on your gateway is reached; see Usage-limit headers below |
| 501 | \`not_supported\` | Endpoint not available on this backend |
| 529 | \`overloaded_error\` | Upstream at capacity; client backs off and retries |
| 5xx | \`api_error\` | Anything else |

## Usage-limit headers \u2014 optional

If you enforce a per-user spend or usage cap, report the caller's standing
against it on each successful \`POST /v1/messages\` response and Claude Code
(2.1.225 and later, when signed in to a gateway) shows its usual "You've used
NN% of your usage credits \xB7 resets \u2026" notice past 75% and again past 95%.
These are the same \`anthropic-ratelimit-unified-*\` headers api.anthropic.com
sends its subscribers, so strip the upstream's own \`anthropic-ratelimit-*\`
response headers first \u2014 otherwise your org-wide quota reaches users as if it
were theirs. Send none of these for a user with no cap.

| Header | Value |
|---|---|
| \`anthropic-ratelimit-unified-status\` | \`allowed\`, or \`allowed_warning\` once past a threshold |
| \`anthropic-ratelimit-unified-representative-claim\` | \`overage\` \u2014 the window-agnostic claim; \`5h\`/\`7d\` mean rolling 5-hour/7-day windows the client does time math on, so don't borrow them for a calendar budget |
| \`anthropic-ratelimit-unified-overage-status\` | Same value as \`-status\` |
| \`anthropic-ratelimit-unified-overage-utilization\` | Fraction of the cap used, two decimals, kept below \`1\` while you're still allowing requests (\`0.82\`) |
| \`anthropic-ratelimit-unified-overage-surpassed-threshold\` | \`0.75\` or \`0.95\` once utilization passes it \u2014 this header is what triggers the client's notice; omit it below 75% |
| \`anthropic-ratelimit-unified-reset\`, \`-overage-reset\` | When the cap resets, Unix seconds |

When the cap is reached, reject \`POST /v1/messages\` before proxying:

    HTTP/1.1 429
    retry-after: 37800
    x-should-retry: false
    anthropic-ratelimit-unified-status: rejected
    anthropic-ratelimit-unified-reset: 1786147200
    anthropic-ratelimit-unified-overage-reset: 1786147200
    anthropic-ratelimit-unified-overage-utilization: 1
    anthropic-ratelimit-unified-overage-surpassed-threshold: 1
    anthropic-ratelimit-unified-overage-period: daily
    anthropic-ratelimit-unified-overage-disabled-reason: org_spend_cap_reached

    {"type":"error","error":{"type":"billing_error","message":"spend limit reached (daily; resets 2026-08-08 00:00 UTC) \u2014 request an increase at https://go.corp.example.com/claude-limits"}}

Leave \`representative-claim\` and \`overage-status\` off the 429. With them the
client composes its own "You've hit your limit" line and drops your message;
without them it prints \`error.message\` as-is (older clients too, behind a
generic "API Error" prefix), so put the period, the reset time, and what the
user should do next in that one sentence. \`retry-after\` is seconds until the
reset; \`x-should-retry: false\` keeps the SDK from retrying into the block. If
you can't read your counter and choose to fail closed, send the 429 with
\`x-should-retry: false\`,
\`anthropic-ratelimit-unified-overage-disabled-reason: fetch_error\`, and a
message, nothing else. This gateway sends exactly the shapes above for caps
set through its admin API (\`overage-period\` is \`daily\`, \`weekly\`, or
\`monthly\`); when several caps apply it describes the fullest one, or once
blocked the one that resets last.

## Bearer token

Your \`access_token\` is opaque to the client \u2014 it stores it, sends it, and
refreshes it before \`expires_in\`, but never inspects the payload. Encode the
user's identity and groups in the token (or in server-side state keyed by it)
so you can apply per-user RBAC at \`/v1/messages\` and per-group policy at
\`/managed/settings\`. The same token must work across every
bearer-authenticated endpoint.

## TLS

\`https://\` is required; \`http://\` is accepted only for loopback during
development. The client pins the SHA-256 fingerprint of your TLS leaf
certificate per-hostname after the user confirms it on first connect, and
re-prompts on mismatch \u2014 rotating your certificate costs every user one
confirmation prompt.

## Client guarantees

- OAuth endpoint paths come from your discovery document; the client never
  hard-codes \`/oauth/token\`.
- Fixed-path endpoints are resolved against \`{base}\`, never a redirect.
- Every request body carries \`Content-Length\`.
- The OTLP exporter is locked to \`{base}/v1/{signal}\` regardless of the
  user's environment.
- \`404\` from \`/v1/models\` or \`/managed/settings\` is a clean "not
  implemented", with no retry storm.

## Proxying to Bedrock, Vertex, or Foundry

Proxying to \`api.anthropic.com\` is pass-through. Proxying to a cloud
provider's Claude endpoint needs translation:

- **Model IDs.** The client sends Anthropic-style IDs like
  \`claude-sonnet-4-5\`; translate to the upstream's form (Bedrock model ID or
  inference-profile ARN; Vertex \`@\`-versioned ID), or advertise
  upstream-native IDs from \`/v1/models\`.
- **\`anthropic-beta\`.** Bedrock rejects some betas in the *header*; move them
  into the request body as \`"anthropic_beta": [...]\`. Vertex and Foundry
  accept the header.
- **Streaming.** Bedrock's native stream is AWS binary event-stream, not SSE;
  decode and re-emit Anthropic-shaped \`text/event-stream\`. The provider SDKs
  handle this, but their stream iterators drop the upstream's \`ping\` events
  (and Bedrock sends none) \u2014 emit your own \`event: ping\` during silent gaps
  so long thinking pauses don't trip client or proxy idle timeouts.
- **\`count_tokens\`.** Bedrock has no count-tokens API. Return
  \`501 not_supported\`; the client falls back to a Haiku \`max_tokens:1\` probe.
- **Headers.** Forward \`content-type\`, \`accept\`, \`accept-encoding\`,
  \`anthropic-version\`, \`anthropic-beta\`, \`user-agent\`, and \`x-stainless-*\`;
  strip the client's \`Authorization\` and apply the upstream's own
  credentials. On the response, strip hop-by-hop headers
  (\`content-encoding\`, \`content-length\`, \`transfer-encoding\`, \`connection\`).
- **Errors.** Upstream error messages can carry your cloud account
  IDs/ARNs/project IDs \u2014 log them for the operator and return a generic
  message, keeping \`error.type\`. The exception is a 400/413 in Anthropic's
  own error envelope (e.g. \`prompt is too long: \u2026\`): relay that
  \`error.message\`, the client's recovery (auto-compact etc.) keys on it.

## References

RFC 6749 (OAuth 2.0), RFC 8414 (AS metadata), RFC 8628 (device grant),
Anthropic Messages API, Claude Code settings reference, OTLP spec.
`
    : `# Claude Code gateway protocol

This is the wire contract the Claude Code CLI uses to talk to this gateway:
sign-in, inference, managed settings, and telemetry. It's served from the
gateway itself so it always matches the version you're running.

> **Stability:** this protocol exists to give you a more stable target than
> proxying raw CLI traffic. Auth is standard OAuth 2.0, inference is the
> Messages API, and headers are the lowest common denominator across
> backends. We keep it backwards compatible within reason to support older
> clients, but not forever \u2014 expect changes, managed settings in particular,
> with notice.

A developer points Claude Code at your gateway's base URL via \`/login\` and
the client does the rest. All paths below are relative to that base URL, and
the client does not follow cross-origin redirects.

## Flow

1. Client fetches \`GET {base}/.well-known/oauth-authorization-server\`.
2. On first contact, client fingerprints your TLS certificate and asks the
   user to trust it.
3. Client runs the RFC 8628 device flow: \`POST device_authorization_endpoint\`
   -> user approves in a browser at \`verification_uri\` -> client polls
   \`token_endpoint\` until it gets a bearer token.
4. Client sends \`Authorization: Bearer <token>\` on every subsequent request.
5. Client uses fixed paths under \`{base}\` for inference (\`/v1/messages\`),
   policy (\`/managed/settings\`), model discovery (\`/v1/models\`), and
   telemetry (\`/v1/{metrics,logs,traces}\`).
6. Before the token expires, client silently calls \`token_endpoint\` with
   \`grant_type=refresh_token\`. If you didn't issue a refresh token, the user
   is sent back through the browser flow instead.

## Discovery \u2014 required

\`GET /.well-known/oauth-authorization-server\` (unauthenticated)

RFC 8414 authorization server metadata. The client reads
\`device_authorization_endpoint\` and \`token_endpoint\` and ignores the rest;
both must be same-origin with \`{base}\`. \`authorization_endpoint\` is
intentionally absent.

    {
      "issuer": "https://gw.corp.example.com",
      "device_authorization_endpoint": "https://gw.corp.example.com/oauth/device_authorization",
      "token_endpoint": "https://gw.corp.example.com/oauth/token",
      "grant_types_supported": ["urn:ietf:params:oauth:grant-type:device_code", "refresh_token"]
    }

## Device authorization \u2014 required

\`POST {device_authorization_endpoint}\` (unauthenticated)

RFC 8628 \xA73.2. The client opens \`verification_uri_complete\` in the user's
browser and polls \`token_endpoint\` every \`interval\` seconds.

    {
      "device_code": "AbK9-s3n4C8H...",
      "user_code": "WDJB-MJHT",
      "verification_uri": "https://gw.corp.example.com/device",
      "verification_uri_complete": "https://gw.corp.example.com/device?user_code=WDJB-MJHT",
      "expires_in": 600,
      "interval": 5
    }

\`device_code\` should be >=256 bits, opaque, single-use. \`user_code\` should
use a base-20 charset (RFC 8628 \xA76.1).

The request body is form-encoded and may carry one extension parameter next
to RFC 8628 \xA73.1's: \`surface\`, a stable identifier of the client application
that is signing in. Claude Code sends \`surface=claude_code\`. Record it if you
attribute sessions by client; otherwise ignore it, as OAuth servers do for
any parameter they do not recognize (RFC 6749 \xA73.1, \xA73.2). Claude Code also sends \`User-Agent: claude-code/<version>\` on
the metadata, device, token and refresh requests.

## Verification page \u2014 required

\`GET/POST {verification_uri}\` (browser-facing; the client never calls this)

Accept the user code, authenticate the user against your IdP, and mark the
matching \`device_code\` approved so the next token poll succeeds. Apply a
per-IP rate limit (RFC 8628 \xA75.1) and don't auto-submit a pre-filled code
(\xA75.4).

## Token \u2014 required

\`POST {token_endpoint}\` (unauthenticated,
\`application/x-www-form-urlencoded\`)

**Device grant** (\`grant_type=urn:ietf:params:oauth:grant-type:device_code\`):

| Status | Body | Client reaction |
|---|---|---|
| 200 | \`{"access_token","token_type":"Bearer","expires_in","refresh_token"?}\` | Login complete. \`refresh_token\` is optional; omit it and the client re-runs the device flow on expiry. |
| 400 | \`{"error":"authorization_pending"}\` | Keep polling. |
| 400/429 | \`{"error":"slow_down"}\` | Add 5s to the poll interval. |
| 400 | \`{"error":"access_denied"}\` | Stop. |
| 400 | \`{"error":"expired_token"}\` | Stop. |

**Refresh grant** (\`grant_type=refresh_token\`): return a fresh
\`{"access_token","token_type","expires_in","refresh_token"}\` on 200. Return
\`401 {"error":"invalid_grant"}\` to force re-login \u2014 this is your
deprovisioning hook.

## Messages \u2014 required

\`POST /v1/messages\` and \`POST /v1/messages/count_tokens\` (bearer)

The Anthropic Messages API (https://platform.claude.com/docs/en/api/messages),
unchanged. Proxy to your upstream and stream the response back. Enforce your
model allowlist here, returning \`400 invalid_request_error\` for a denied
model. Don't buffer SSE on the \`stream: true\` path. The client always sets
\`Content-Length\`, so you may reject chunked-without-CL (\`411\`) and cap body
size (\`413\`). The client doesn't assume server-side tools are available. The
client also sends \`x-app\` and \`x-stainless-*\` headers \u2014 pass them through or
drop them, but don't reject the request because of them.

## Managed settings \u2014 optional

\`GET /managed/settings\` (bearer)

The authenticated user's Claude Code \`managed-settings.json\`; see
https://code.claude.com/docs/en/settings for the key reference. The client
polls about once an hour; support \`ETag\`/\`If-None-Match\` -> \`304\` to keep
that cheap. Return \`404\` for "no managed policy"; \`200 {}\` means "this user
has an empty policy" \u2014 they're not the same. **This is the endpoint most
likely to change.**

## Models \u2014 optional

\`GET /v1/models\` (bearer)

Anthropic models-list shape: \`{"data":[{"id","display_name"},...]}\`. Use
Anthropic-style IDs (\`claude-{family}-{major}-{minor}\`) \u2014 the client's
model-family logic keys on that shape. The client only calls this when
\`CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY\` is set on the client, which you
can push via the \`env\` block in \`/managed/settings\`. Return \`404\` to fall
back to the client's built-in list.

## Telemetry \u2014 optional

\`POST /v1/metrics\`, \`/v1/logs\`, \`/v1/traces\` (bearer)

OTLP/HTTP (protobuf or JSON). When connected to a gateway the client sends
telemetry here and ignores \`OTEL_EXPORTER_OTLP_*\` env vars. Return \`200\`
whether you forward or discard \u2014 \`404\` makes the client's exporter log an
error on every flush.

## Errors

OAuth endpoints use \`{"error":"...","error_description":"..."}\`
(RFC 6749/8628). Bearer-authenticated endpoints use the Anthropic envelope so
the SDK surfaces the message to the user:

    {"type":"error","error":{"type":"authentication_error","message":"..."}}

| HTTP | error.type | Use for |
|---|---|---|
| 400 | \`invalid_request_error\` | Denied model, malformed body, policy violation |
| 401 | \`authentication_error\` | Missing/expired/invalid bearer; client prompts re-login |
| 403 | \`permission_error\` | Authenticated but not allowed |
| 413 | \`request_too_large\` | Body over your cap |
| 429 | \`rate_limit_error\` | Throttling; include \`Retry-After\` |
| 429 | \`billing_error\` | The user's own cap on your gateway is reached; see Usage-limit headers below |
| 501 | \`not_supported\` | Endpoint not available on this backend |
| 529 | \`overloaded_error\` | Upstream at capacity; client backs off and retries |
| 5xx | \`api_error\` | Anything else |

## Usage-limit headers \u2014 optional

If you enforce a per-user spend or usage cap, report the caller's standing
against it on each successful \`POST /v1/messages\` response and Claude Code
(2.1.225 and later, when signed in to a gateway) shows its usual "You've used
NN% of your usage credits \xB7 resets \u2026" notice past 75% and again past 95%.
These are the same \`anthropic-ratelimit-unified-*\` headers api.anthropic.com
sends its subscribers, so strip the upstream's own \`anthropic-ratelimit-*\`
response headers first \u2014 otherwise your org-wide quota reaches users as if it
were theirs. Send none of these for a user with no cap.

| Header | Value |
|---|---|
| \`anthropic-ratelimit-unified-status\` | \`allowed\`, or \`allowed_warning\` once past a threshold |
| \`anthropic-ratelimit-unified-representative-claim\` | \`overage\` \u2014 the window-agnostic claim; \`5h\`/\`7d\` mean rolling 5-hour/7-day windows the client does time math on, so don't borrow them for a calendar budget |
| \`anthropic-ratelimit-unified-overage-status\` | Same value as \`-status\` |
| \`anthropic-ratelimit-unified-overage-utilization\` | Fraction of the cap used, two decimals, kept below \`1\` while you're still allowing requests (\`0.82\`) |
| \`anthropic-ratelimit-unified-overage-surpassed-threshold\` | \`0.75\` or \`0.95\` once utilization passes it \u2014 this header is what triggers the client's notice; omit it below 75% |
| \`anthropic-ratelimit-unified-reset\`, \`-overage-reset\` | When the cap resets, Unix seconds |

When the cap is reached, reject \`POST /v1/messages\` before proxying:

    HTTP/1.1 429
    retry-after: 37800
    x-should-retry: false
    anthropic-ratelimit-unified-status: rejected
    anthropic-ratelimit-unified-reset: 1786147200
    anthropic-ratelimit-unified-overage-reset: 1786147200
    anthropic-ratelimit-unified-overage-utilization: 1
    anthropic-ratelimit-unified-overage-surpassed-threshold: 1
    anthropic-ratelimit-unified-overage-period: daily
    anthropic-ratelimit-unified-overage-disabled-reason: org_spend_cap_reached

    {"type":"error","error":{"type":"billing_error","message":"spend limit reached (daily; resets 2026-08-08 00:00 UTC) \u2014 request an increase at https://go.corp.example.com/claude-limits"}}

Leave \`representative-claim\` and \`overage-status\` off the 429. With them the
client composes its own "You've hit your limit" line and drops your message;
without them it prints \`error.message\` as-is (older clients too, behind a
generic "API Error" prefix), so put the period, the reset time, and what the
user should do next in that one sentence. \`retry-after\` is seconds until the
reset; \`x-should-retry: false\` keeps the SDK from retrying into the block. If
you can't read your counter and choose to fail closed, send the 429 with
\`x-should-retry: false\`,
\`anthropic-ratelimit-unified-overage-disabled-reason: fetch_error\`, and a
message, nothing else. This gateway sends exactly the shapes above for caps
set through its admin API (\`overage-period\` is \`daily\`, \`weekly\`, or
\`monthly\`); when several caps apply it describes the fullest one, or once
blocked the one that resets last.

## Bearer token

Your \`access_token\` is opaque to the client \u2014 it stores it, sends it, and
refreshes it before \`expires_in\`, but never inspects the payload. Encode the
user's identity and groups in the token (or in server-side state keyed by it)
so you can apply per-user RBAC at \`/v1/messages\` and per-group policy at
\`/managed/settings\`. The same token must work across every
bearer-authenticated endpoint.

## TLS

\`https://\` is required; \`http://\` is accepted only for loopback during
development. The client pins the SHA-256 fingerprint of your TLS leaf
certificate per-hostname after the user confirms it on first connect, and
re-prompts on mismatch \u2014 rotating your certificate costs every user one
confirmation prompt.

## Client guarantees

- OAuth endpoint paths come from your discovery document; the client never
  hard-codes \`/oauth/token\`.
- Fixed-path endpoints are resolved against \`{base}\`, never a redirect.
- Every request body carries \`Content-Length\`.
- The OTLP exporter is locked to \`{base}/v1/{signal}\` regardless of the
  user's environment.
- \`404\` from \`/v1/models\` or \`/managed/settings\` is a clean "not
  implemented", with no retry storm.

## Proxying to Bedrock, Vertex, or Foundry

Proxying to \`api.anthropic.com\` is pass-through. Proxying to a cloud
provider's Claude endpoint needs translation:

- **Model IDs.** The client sends Anthropic-style IDs like
  \`claude-sonnet-4-5\`; translate to the upstream's form (Bedrock model ID or
  inference-profile ARN; Vertex \`@\`-versioned ID), or advertise
  upstream-native IDs from \`/v1/models\`.
- **\`anthropic-beta\`.** Bedrock rejects some betas in the *header*; move them
  into the request body as \`"anthropic_beta": [...]\`. Vertex and Foundry
  accept the header.
- **Streaming.** Bedrock's native stream is AWS binary event-stream, not SSE;
  decode and re-emit Anthropic-shaped \`text/event-stream\`. The provider SDKs
  handle this, but their stream iterators drop the upstream's \`ping\` events
  (and Bedrock sends none) \u2014 emit your own \`event: ping\` during silent gaps
  so long thinking pauses don't trip client or proxy idle timeouts.
- **\`count_tokens\`.** Bedrock has no count-tokens API. Return
  \`501 not_supported\`; the client falls back to a Haiku \`max_tokens:1\` probe.
- **Headers.** Forward \`content-type\`, \`accept\`, \`accept-encoding\`,
  \`anthropic-version\`, \`anthropic-beta\`, \`user-agent\`, and \`x-stainless-*\`;
  strip the client's \`Authorization\` and apply the upstream's own
  credentials. On the response, strip hop-by-hop headers
  (\`content-encoding\`, \`content-length\`, \`transfer-encoding\`, \`connection\`).
- **Errors.** Upstream error messages can carry your cloud account
  IDs/ARNs/project IDs \u2014 log them for the operator and return a generic
  message, keeping \`error.type\`. The exception is a 400/413 in Anthropic's
  own error envelope (e.g. \`prompt is too long: \u2026\`): relay that
  \`error.message\`, the client's recovery (auto-compact etc.) keys on it.

## References

RFC 6749 (OAuth 2.0), RFC 8414 (AS metadata), RFC 8628 (device grant),
Anthropic Messages API, Claude Code settings reference, OTLP spec.
`.replace(
        "## Flow",
        `${`> **This deployment runs without an identity provider (\`oidc\` is not
> configured):** the device sign-in flow described below is unavailable \u2014
> every IdP-backed sign-in route returns 404 and the well-known document
> advertises no OAuth endpoints. Callers authenticate as customer-routed
> inference principals with a short-lived CRI JWT minted by Anthropic (see
> the customer-routed inference section).

`}## Flow`,
      );
  return e.criEnabled
    ? t +
        `
## Customer-routed inference

This deployment accepts customer-routed inference (CRI) callers: Claude
Enterprise clients that authenticate with a short-lived, audience-bound
CRI JWT minted by Anthropic instead of a gateway session token. These
rules are the contract any gateway (this one or third-party software)
must honor to serve such clients.

**Authentication.** The client sends \`Authorization: Bearer <token>\` where
the token is a compact JWS with header \`typ: "cri+jwt"\`, \`alg: ES256\`,
and a \`kid\` naming a key in Anthropic's published CRI JWKS. The issuer
is \`https://api.anthropic.com/api/oauth/cri\`: its OIDC-style discovery
document at \`{issuer}/.well-known/openid-configuration\` names the
\`jwks_uri\` (\`{issuer}/jwks.json\`), so configure your verifier from the
issuer alone or pin that JWKS URL directly. Verify each token
entirely offline \u2014 no per-request call to Anthropic \u2014 and admit the
caller only when ALL of: the ES256 signature verifies against Anthropic's
CRI JWKS (accept no other algorithm, and use no other key set for tokens
of this type); \`iss\` is exactly the issuer above; \`typ\` is
exactly \`cri+jwt\`; \`aud\` matches an audience value registered for YOUR
gateway (reject every other audience \u2014 this is what stops a token minted
for another org's gateway from replaying here); \`exp\`/\`nbf\` hold
(allow ~60s clock skew); \`scope\` is \`"inference"\`; and the token's
\`org\` claim is an organization you have explicitly allowlisted. Tokens
are short-lived (minutes) and carry the caller's identity in \`sub\`
(hosted sessions: \`sub = "ccr:<session>"\` with the acting user in
\`act.sub\`) \u2014 record them in your audit log. Verify at ADMISSION ONLY:
let an in-flight streaming response that crosses \`exp\` complete.
Refresh the JWKS periodically, honoring its cache headers, and refetch
(bounded by a cooldown) on an unknown \`kid\`; when you cannot obtain a
current-enough key set \u2014 never fetched, or stale past a hard ceiling
(hours) \u2014 fail CLOSED with \`503\` on the CRI paths, not \`401\`, so
clients back off instead of discarding tokens that may be fine. CRI
callers may use \`POST /v1/messages\` and
\`POST /v1/messages/count_tokens\` only.

**Forwarding.** Every upstream leg \u2014 Anthropic or cloud \u2014 runs on YOUR
OWN upstream credential. Never forward the caller's \`Authorization\`
header to any upstream: the CRI JWT is a gateway-admission credential
with no meaning beyond your wall, and nothing else the caller sends is a
credential at all. (The earlier revision of this contract had an
Anthropic-side credential-relay mode \u2014 "auth passthrough" \u2014 which is
REMOVED; per-user metering at Anthropic's edge is deferred to a future
token-exchange design.)

**Response hygiene.** On every response, strip the upstream's identity,
quota, and infra headers (\`request-id\`, \`anthropic-organization-id\`,
\`anthropic-ratelimit-*\`, \`cf-ray\`, \`via\`) before the wire: every
upstream answers as YOU, so those headers describe your deployment and
quota, never the caller's.

**Errors.** The HTTP status is always preserved. For CRI callers,
replace the error body with a generic envelope that keeps the status
and an accurate \`error.type\` \u2014 your upstream's raw error pages can
carry internal hostnames and banners, so never relay them. One
obligation comes with that: the client recovers from an upstream
rejecting a capability by matching \`status === 400\` (plus one 413
variant) and the upstream's own error wording, which your replacement
hides. So before replacing a \`400\` or \`413\` body, classify the
upstream's message and, when it matches a class below, make your
envelope's \`error.message\` the stable token
\`capability_rejected: <class>\` \u2014 the client matches the token exactly
as it would the wording, and the session self-heals instead of
stranding. A message matching no class gets your generic copy. (Where
your gateway authors the error body itself \u2014 e.g. a cloud-SDK leg \u2014
classify the SDK error's message the same way.)

| Class (in classification order) | Upstream meaning (what to classify) |
|---|---|
| \`mid_conv_system\` | A mid-conversation \`{role:"system"}\` message (or a cache breakpoint on one) was rejected |
| \`cache_control_field\` | The \`cache_control\` field itself was rejected by schema validation, with no system-message wording |
| \`thinking_signature\` | A thinking block's signature was rejected ("Invalid signature in thinking block", "\u2026cannot be modified", a \`\u2026thinking.signature: Field required\` path) \u2014 the client strips thinking blocks and retries |
| \`thinking_type:<enabled\\|adaptive>\` | The \`thinking.type\` value was rejected ("thinking.type: enabled \u2026is not supported", "adaptive thinking is not supported\u2026"); \`<enabled\\|adaptive>\` names the rejected value (lowercased) so the client can swap off it |
| \`effort_unsupported\` | The effort parameter / per-turn \`output_config\` was rejected ("This model does not support the effort parameter", \`output_config\u2026\` "Extra inputs are not permitted" / "requires a model that supports\u2026") \u2014 the client drops effort (and, from the next turn, the per-turn statements) |
| \`media_budget\` | The combined media budget was exceeded ("Too much media: N document pages + M images > B") \u2014 the client strips both media kinds |
| \`image_block\` | An image content block was rejected ("Could not process image", size/dimension limits, a \`messages.N.content.M.image\u2026\` path) |
| \`document_block\` | A PDF/document block was rejected ("Could not process PDF", page limits, a \`\u2026document\` path) |
| \`prompt_too_long\` | "Prompt is too long" / "Input is too long for requested model" (either status), or a 413 naming the model context window |
| \`max_tokens_context_overflow\` | "input length and \`max_tokens\` exceed context limit: \u2026" |
| \`beta_header:<value>\` | The upstream rejected an \`anthropic-beta\` value the caller sent; \`<value>\` is that caller-sent value, verbatim |

The token is the whole \`error.message\` \u2014 nothing else in it. The table
is ordered: where a wording matches more than one row, the earlier row
wins \u2014 in particular, a rejection of the mid-conversation-system beta
value classifies as \`mid_conv_system\`, not \`beta_header:\u2026\`. Classes are
append-only contract; classify conservatively (a wording you cannot
confidently classify takes the generic copy \u2014 a wrong token triggers
the wrong client recovery).

**Blocking.** To refuse a request on content policy, respond

    HTTP 400
    x-should-retry: false
    {"type":"error","request_id":"<id>","error":{"type":"policy_blocked","message":"<shown to the user>"}}

and do not forward it. Put the id your audit row is keyed by in
\`request_id\`: the message is rendered to a developer who cannot see your
logs, and the id is what they quote to you to find the block. The client
keys on \`error.type\` (any status, and a
status-less mid-stream \`event: error\` routes the same), renders the
message with no retry and no sign-in prompt, and never substitutes a
fallback model. Never rewrite a request or response body instead \u2014 blocking
substitutes the whole response; modification poisons prompt caching and
diverges the client's view of the conversation.

**Discovery additions.** This deployment's
\`/.well-known/oauth-authorization-server\` carries one extra field:
\`cri_enabled: true\` (CRI callers are accepted). The earlier
\`cri_passthrough\` and \`first_party_compatible\` fields are RETIRED with
the credential-relay mode \u2014 no deployment can truthfully advertise a
verbatim first-party wire surface when every request rides an operator
credential.

**Endpoint shape.** The client is configured with an origin-root base URL
and posts to fixed paths under it, with query strings it controls (e.g.
\`/v1/messages?beta=true\`) \u2014 match on the path, tolerate the query.
Clients also send telemetry to Anthropic directly; it does not traverse
this gateway.
`
    : t;
}

async function cP(e) {
  let t = await e.reserve();
  try {
    Z(
      "info",
      "waiting for migration lock (another replica may be migrating; check pg_locks for key 6775156 if this persists)",
    ),
      await t`SELECT pg_advisory_lock(6775156)`;
    try {
      await t`CREATE TABLE IF NOT EXISTS _migrations (
        version    INTEGER PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )`;
      let n = await t`SELECT coalesce(max(version), 0) AS v FROM _migrations`,
        i = Number(n[0].v);
      while (true) {
        i += 1;
        let r = false;
        if (
          (await t.begin(async (o) => {
            switch (i) {
              case 1:
                await o`CREATE TABLE kv (
                key        TEXT PRIMARY KEY,
                value      TEXT NOT NULL,
                expires_at TIMESTAMPTZ
              )`,
                  await o`CREATE INDEX kv_expires_at ON kv (expires_at)
                       WHERE expires_at IS NOT NULL`;
                break;
              case 2:
                await o`CREATE TABLE spend_limits (
                id          TEXT PRIMARY KEY,
                scope_type  TEXT NOT NULL
                            CHECK (scope_type IN ('user', 'rbac_group', 'organization')),
                scope_id    TEXT NOT NULL DEFAULT '',
                amount      BIGINT,
                period      TEXT NOT NULL DEFAULT 'monthly'
                            CHECK (period IN ('daily', 'weekly', 'monthly')),
                currency    TEXT NOT NULL DEFAULT 'USD'
                            CHECK (currency = 'USD'),
                created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
                updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
                created_by  TEXT
              )`,
                  await o`CREATE UNIQUE INDEX spend_limits_scope
                       ON spend_limits (scope_type, scope_id, period)`,
                  await o`
                CREATE OR REPLACE FUNCTION caps_by_period(p_principal text, p_groups text[], p_mode text)
                RETURNS TABLE(period text, amount bigint, scope_type text, scope_id text, id text)
                LANGUAGE sql STABLE AS $$
                  SELECT DISTINCT ON (period) period, amount, scope_type, scope_id, id
                  FROM spend_limits
                  WHERE (scope_type = 'user' AND scope_id = p_principal)
                     OR (scope_type = 'rbac_group' AND scope_id = ANY(p_groups))
                     OR scope_type = 'organization'
                  -- The sort order IS the precedence (DISTINCT ON keeps the
                  -- first row). User beats group beats org. Within that, the
                  -- boolean-equals on the next line isn't a typo: it sorts a
                  -- real cap ahead of "unlimited" when mode is 'min', and the
                  -- other way for 'max' (or anything else). Then the smallest
                  -- or largest group cap wins.
                  ORDER BY period,
                    CASE scope_type WHEN 'user' THEN 0 WHEN 'rbac_group' THEN 1 ELSE 2 END,
                    (amount IS NULL) = (p_mode = 'min'),
                    CASE WHEN scope_type = 'rbac_group'
                         THEN CASE WHEN p_mode = 'min' THEN amount ELSE -amount END END,
                    id
                $$`;
                break;
              case 3:
                await o`CREATE TABLE admin_audit (
                id      BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                at      TIMESTAMPTZ NOT NULL DEFAULT now(),
                actor   TEXT NOT NULL,
                action  TEXT NOT NULL,
                target  TEXT NOT NULL,
                before  JSONB,
                after   JSONB,
                reason  TEXT
              )`,
                  await o`CREATE INDEX admin_audit_at ON admin_audit (at)`;
                break;
              case 4:
                await o`CREATE TABLE spend (
                principal  TEXT NOT NULL,
                period     TEXT NOT NULL,  -- bucket key: YYYY-MM | YYYY-MM-DD | YYYY-Www
                cents      DOUBLE PRECISION NOT NULL DEFAULT 0,
                updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
                PRIMARY KEY (principal, period)
              )`,
                  await o`CREATE INDEX spend_updated_at ON spend (updated_at)`;
                break;
              case 5:
                await o`CREATE TABLE principal_emails (
                principal  TEXT PRIMARY KEY,
                email      TEXT,
                name       TEXT,
                groups     JSONB,
                updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
              )`,
                  await o`CREATE INDEX principal_emails_updated_at ON principal_emails (updated_at)`;
                break;
              case 6:
                await o`CREATE INDEX spend_period_cents
                       ON spend (period, cents DESC, principal)`;
                break;
              default:
                return;
            }
            await o`INSERT INTO _migrations (version) VALUES (${i})`, (r = true);
          }),
          !r)
        )
          break;
        Z("info", `migration ${i} applied`);
      }
    } finally {
      await t`SELECT pg_advisory_unlock(6775156)`;
    }
  } finally {
    t.release();
  }
}

var p3 = 30000,
  m3 = 3600000;

async function fP(e, t) {
  if (typeof Bun > "u") throw Error("claude gateway requires the native binary");
  let n = false,
    i = () => n,
    r = new Bun.SQL(e, {
      connectionTimeout: 5,
      max: t?.maxConnections ?? 5,
      ...(t?.username !== void 0 && { username: t.username }),
      ...(t?.password !== void 0 && { password: t.password }),
      onclose: (c) => {
        if (c && n) Z("warn", `postgres connection closed: ${c.message}`);
      },
    });
  try {
    await cP(r);
  } catch (c) {
    throw (r.close({ timeout: 0 }).catch(() => {}), c);
  }
  (n = true),
    r`SHOW server_version_num`
      .then((c) => {
        let d = Number(c[0]?.server_version_num);
        if (n && Number.isFinite(d) && d < 140000)
          Z(
            "warn",
            `Postgres ${Math.floor(d / 1e4)} is below the supported floor (14) \u2014 upgrade; PostgreSQL ${Math.floor(d / 1e4)} is past upstream end-of-life`,
          );
      })
      .catch(() => {});
  let o = setInterval(y3, p3, r, i);
  o.unref?.();
  let s = {
    auditRetentionDays: t?.auditRetentionDays,
    spendRetentionMonths: t?.spendRetentionMonths,
    identityRetentionDays: t?.identityRetentionDays,
  };
  dP(r, s, i);
  let u = setInterval(dP, m3, r, s, i);
  return (
    u.unref?.(),
    {
      sql: r,
      async set(c, d, f) {
        await r`
        INSERT INTO kv (key, value, expires_at)
        VALUES (${c}, ${d}, now() + make_interval(secs => ${f}))
        ON CONFLICT (key) DO UPDATE
        SET value = ${d}, expires_at = now() + make_interval(secs => ${f})
      `;
      },
      async get(c) {
        let d = await r`
        SELECT value FROM kv
        WHERE key = ${c} AND (expires_at IS NULL OR expires_at > now())
      `;
        return d.length > 0 ? d[0].value : null;
      },
      async del(c) {
        await r`DELETE FROM kv WHERE key = ${c}`;
      },
      async incr(c, d) {
        let f = await r`
        INSERT INTO kv (key, value, expires_at)
        VALUES (${c}, '1', now() + make_interval(secs => ${d}))
        ON CONFLICT (key) DO UPDATE SET
          value = CASE
            WHEN kv.expires_at IS NOT NULL AND kv.expires_at <= now() THEN '1'
            ELSE (kv.value::bigint + 1)::text
          END,
          expires_at = CASE
            WHEN kv.expires_at IS NOT NULL AND kv.expires_at <= now()
              THEN now() + make_interval(secs => ${d})
            ELSE kv.expires_at
          END
        RETURNING value
      `;
        return Number(f[0].value);
      },
      close() {
        (n = false), clearInterval(o), clearInterval(u), r.close().catch(() => {});
      },
    }
  );
}

var g3 = 13,
  h3 = 90,
  _3 = 365,
  Cc = 1e4;

function y3(e, t) {
  e`DELETE FROM kv WHERE expires_at IS NOT NULL AND expires_at <= now()`.catch((n) => {
    if (t()) Z("warn", `kv cleanup failed: ${l(n)}`);
  });
}

function dP(e, t, n = () => true) {
  let i = (u, c) =>
      void (async () => {
        for (let d = 0; d < 50 && n(); d++)
          if ((await e.begin(async (p) => (await p`SET LOCAL statement_timeout = '30s'`, c(p)))).length < Cc) return;
      })().catch((d) => {
        if (n()) b3(u, d);
      }),
    r = t?.auditRetentionDays ?? _3;
  i(
    "admin_audit",
    (u) => u`DELETE FROM admin_audit WHERE ctid = ANY(ARRAY(
        SELECT ctid FROM admin_audit
        WHERE at < now() - make_interval(days => ${r})
        LIMIT ${Cc}
      )) RETURNING 1`,
  );
  let o = t?.spendRetentionMonths ?? g3;
  i(
    "spend",
    (u) => u`DELETE FROM spend WHERE ctid = ANY(ARRAY(
        SELECT ctid FROM spend
        WHERE updated_at < now() - make_interval(months => ${o})
        LIMIT ${Cc}
      )) RETURNING 1`,
  );
  let s = t?.identityRetentionDays ?? h3;
  i(
    "principal_emails",
    (u) => u`DELETE FROM principal_emails WHERE ctid = ANY(ARRAY(
        SELECT ctid FROM principal_emails
        WHERE updated_at < now() - make_interval(days => ${s})
        LIMIT ${Cc}
      )) RETURNING 1`,
  );
}

function b3(e, t) {
  if (v3(t) === "42501") {
    if (pc().claim(`gateway_sweep_denied:${e}`))
      Z(
        "warn",
        `${e} retention sweep failed: the database role lacks DELETE on ${e} \u2014 grant it (see the docs' restricted-role grant list) or rows will outlive their retention window. Warning once.`,
      );
    return;
  }
  Z("warn", `${e} cleanup failed: ${l(t)}`);
}

function v3(e) {
  if (typeof e === "object" && e !== null) {
    if ("errno" in e && typeof e.errno === "string") return e.errno;
    if ("code" in e && typeof e.code === "string") return e.code;
  }
  return;
}

var Ci = { "Cache-Control": "no-store", Pragma: "no-cache" };

function vr(e, t = 400) {
  return Response.json({ error: e }, { status: t, headers: Ci });
}

function za() {
  return new Response("not found", { status: 404 });
}

function mP(e, t) {
  return e !== null ? { cri: true, org: e.org, act: e.act?.sub ?? null, upstream_kind: t } : {};
}

function k3() {
  if (typeof Bun > "u")
    throw Error("claude gateway requires the native binary. Install via https://claude.ai/install.sh instead of npm.");
}

var P3 = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "no-referrer",
  "Cross-Origin-Opener-Policy": "same-origin",
};

function gP(e, t) {
  for (let [n, i] of Object.entries(P3)) if (!e.headers.has(n)) e.headers.set(n, i);
  if (t && !e.headers.has("Strict-Transport-Security"))
    e.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  return e;
}

var E3 = "x-client-request-id",
  $3 = "x-request-id",
  I3 = /^[A-Za-z0-9._-]{1,64}$/;

async function jX(e) {
  k3();
  let t = await Pk(e);
  wt("config.load", { path: e, sha256: zp("sha256").update(JSON.stringify(t)).digest("hex") });
  let n = ls(t.listen.trusted_proxies),
    i = ls(t.access_control.allow_cidrs),
    r = ls(t.access_control.deny_cidrs),
    o = new Mp(),
    s = await fP(t.store.postgres_url, {
      auditRetentionDays: t.admin?.audit_retention_days,
      maxConnections: t.store.max_connections,
      username: t.store.username,
      password: t.store.password,
      spendRetentionMonths: t.admin?.spend_retention_months,
      identityRetentionDays: t.admin?.identity_retention_days,
    }).catch((K) => {
      let _e = l(K);
      if (/connect|ECONNREFUSED|ENOTFOUND|ETIMEDOUT/i.test(_e))
        throw Error(`could not connect to Postgres: ${_e}. Check store.postgres_url in ${e}`);
      throw K;
    }),
    u = { readKeys: t.admin?.read_keys ?? [], writeKeys: t.admin?.write_keys ?? [] },
    c = tP(s.sql, t),
    d = t.cri?.enabled === true,
    f =
      d && t.cri
        ? th({
            audience: t.cri.audience,
            orgAllowlist: t.cri.org_allowlist,
            jwksUrl: t.cri.jwks_url,
            issuer: t.cri.issuer,
          })
        : null;
  if (f !== null) await f.prime();
  let p = sP(t),
    h = Ng(t.session.jwt_secret),
    y = t.listen.public_url,
    v = t.oidc?.groups_claim ?? "groups",
    k = t.oidc?.email_claim ?? "email",
    P;
  function B(K) {
    return typeof K === "string" && K.length > 0 ? K : void 0;
  }
  function Q(K) {
    let _e = ss(K, v);
    if (typeof _e === "string") return _e.length > 0 ? [_e] : void 0;
    if (!Array.isArray(_e)) return;
    let ke = _e.filter((Re) => typeof Re === "string" && Re.length > 0);
    return ke.length > 0 ? ke : void 0;
  }
  function ge(K) {
    return ss(K, v) !== void 0;
  }
  function re(K) {
    return us(K, k) !== void 0;
  }
  async function Se(K, _e, ke, Re, yt) {
    Z(
      "debug",
      `oidc id_token claim names request_id=${Re}: ${Object.keys(K).sort().join(",")}` +
        (yt ? `; userinfo claim names: ${Object.keys(yt).sort().join(",")}` : ""),
    );
    let Kt = re(K) ? us(K, k) : yt ? us(yt, k) : void 0;
    ah({ email: Kt, email_verified: K.email_verified ?? yt?.email_verified }, t.oidc?.allowed_email_domains);
    let $t = B(K.sub);
    if ($t === void 0) throw Error("IdP claims missing required `sub`");
    let je = typeof Kt === "string" ? Kt : void 0,
      It;
    if (P) {
      if (je === void 0)
        throw Object.assign(
          Error(
            "oidc.google_groups is configured but the id_token has no email \u2014 check oidc.email_claim and that the email scope is requested",
          ),
          { code: "GOOGLE_GROUPS_UNAVAILABLE" },
        );
      It = await P(je);
    } else It = ge(K) ? Q(K) : yt ? Q(yt) : void 0;
    sh(It, t.oidc?.allowed_groups);
    let Ro = B(K.name) ?? B(yt?.name),
      jo = await qg({ sub: $t, email: je, name: Ro, groups: It }, h, t.session.ttl_hours, y);
    return (
      wt(_e, { request_id: Re, result: "success", sub: $t, email: je, client_ip: ke, ttl_hours: t.session.ttl_hours }),
      jo
    );
  }
  let Ge = t.oidc?.google_groups;
  if (Ge) P = await Yg(Ge);
  let ve = t.listen.tls,
    [Oe, Mn, it, le] = await Promise.all([
      t.oidc ? oh(t.oidc) : Promise.resolve(null),
      Mk(t.upstreams),
      Ek(t),
      ve
        ? Promise.all([pP(ve.cert, "utf8"), pP(ve.key, "utf8")]).then(([K, _e]) => ({ cert: K, key: _e }))
        : Promise.resolve(void 0),
    ]),
    Qt = it?.some((K) => K.desktop !== void 0) ?? false;
  async function Di(K, _e) {
    if (!t.oidc?.userinfo_fallback || !_e || !Oe) return;
    if (re(K) && (P !== void 0 || ge(K))) return;
    let ke = await Oe.userinfo(_e);
    if (typeof ke.sub !== "string" || ke.sub !== K.sub)
      throw Error("userinfo sub missing or does not match id_token sub");
    return ke;
  }
  if (
    Oe &&
    t.oidc?.scopes &&
    !t.oidc.scopes.includes("offline_access") &&
    Array.isArray(Oe.issuer.metadata.scopes_supported) &&
    Oe.issuer.metadata.scopes_supported.includes("offline_access")
  )
    Z(
      "warn",
      "oidc.scopes omits offline_access but the IdP advertises it \u2014 refresh tokens " +
        `will not be issued; developers re-run the browser login every ${t.session.ttl_hours}h (session.ttl_hours)`,
    );
  if (
    Oe &&
    t.oidc &&
    (Oe.issuer.metadata.issuer ?? "").startsWith("https://accounts.google.com") &&
    (t.oidc.extra_auth_params.access_type !== "offline" ||
      !(t.oidc.extra_auth_params.prompt ?? "").split(" ").includes("consent"))
  )
    Z(
      "warn",
      "oidc.issuer is accounts.google.com \u2014 Google ignores offline_access and needs " +
        `extra_auth_params: { access_type: offline, prompt: consent } and scopes: [openid, profile, email] for refresh tokens. Without both params developers re-run the browser login every ${t.session.ttl_hours}h (session.ttl_hours); without prompt: consent specifically, refresh tokens ` +
        "are issued only on each user\u2019s first login.",
    );
  if (
    Oe &&
    (Oe.issuer.metadata.issuer ?? "").startsWith("https://accounts.google.com") &&
    (t.oidc?.allowed_groups?.length ?? 0) > 0 &&
    !t.oidc?.google_groups
  )
    Z(
      "warn",
      "oidc.allowed_groups is set but Google ID tokens do not carry a groups claim \u2014 " +
        "every login will be denied. Set oidc.google_groups to fetch Workspace groups via the Admin SDK, or use allowed_email_domains instead.",
    );
  if (Oe && t.oidc?.google_groups && !(Oe.issuer.metadata.issuer ?? "").startsWith("https://accounts.google.com"))
    Z(
      "warn",
      "oidc.google_groups is set but oidc.issuer is not accounts.google.com \u2014 " +
        "the Directory API only returns groups for Google Workspace users, so every login will be refused",
    );
  let $n =
      Oe && t.oidc
        ? te([
            new URL(Oe.issuer.metadata.authorization_endpoint ?? t.oidc.issuer).origin,
            ...t.oidc.form_action_origins,
          ]).join(" ")
        : "",
    To = Boolean(le) || (t.listen.public_url !== void 0 && new URL(t.listen.public_url).protocol === "https:"),
    Ao = To ? "__Host-gw_dev" : "gw_dev",
    Lp = `HttpOnly; SameSite=Lax; Path=/${To ? "; Secure" : ""}`;
  function hP(K) {
    let _e = K.headers.get("cookie") ?? "";
    for (let ke of _e.split(";")) {
      let Re = ke.indexOf("=");
      if (Re > 0 && ke.slice(0, Re).trim() === Ao) return ke.slice(Re + 1).trim();
    }
    return null;
  }
  async function _P(K, _e, ke) {
    let Re = (se, Ue) => wt(se, { request_id: ke, ...Ue }),
      { pathname: yt } = new URL(K.url);
    if (Gl(_e, r))
      return Re("access.denied", { reason: "ip_denylist", client_ip: _e }), new Response("forbidden", { status: 403 });
    if (K.method === "GET" && yt === "/healthz") return new Response("ok", { status: 200 });
    if (K.method === "GET" && yt === "/readyz")
      try {
        return await s.get("__readyz_probe__"), new Response("ready", { status: 200 });
      } catch {
        return new Response("store unavailable", { status: 503 });
      }
    if (i.length > 0 && !Gl(_e, i))
      return (
        Re("access.denied", { reason: "ip_not_allowlisted", client_ip: _e }), new Response("forbidden", { status: 403 })
      );
    let Kt = t.limits;
    if (Kt.max_url_length !== void 0 && K.url.length > Kt.max_url_length)
      return new Response("uri too long", { status: 414 });
    if (Kt.max_request_header_bytes !== void 0) {
      let se = 0;
      for (let [Ue, Ee] of K.headers) se += Ue.length + Ee.length + 4;
      if (se > Kt.max_request_header_bytes) return new Response("request header fields too large", { status: 431 });
    }
    let $t = new URL(K.url),
      je = $t.pathname,
      It = t.listen.public_url ?? $t.origin;
    if (je === "/" && K.method === "GET")
      return uh(
        It,
        t.oidc?.issuer ?? null,
        typeof {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.252",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-08-31T16:02:57Z",
          GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
          HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        } < "u"
          ? {
              ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.252",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-08-31T16:02:57Z",
              GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
              HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "darwin",
            }.VERSION
          : "unknown",
      );
    if (je === "/.well-known/oauth-authorization-server")
      return Response.json({
        issuer: It,
        ...(t.oidc !== void 0
          ? {
              device_authorization_endpoint: `${It}/oauth/device_authorization`,
              token_endpoint: `${It}/oauth/token`,
              grant_types_supported: [Dl, "refresh_token"],
            }
          : { grant_types_supported: [] }),
        response_types_supported: [],
        token_endpoint_auth_methods_supported: ["none"],
        scopes_supported: ["openid", "profile", "email"],
        gateway_protocol_version: Ug,
        ...(d && { cri_enabled: true }),
      });
    if (je === "/protocol" && K.method === "GET")
      return new Response(uP({ oidcConfigured: t.oidc !== void 0, criEnabled: d }), {
        headers: { "content-type": "text/markdown; charset=utf-8" },
      });
    let Ro = K.headers.get("content-length");
    if (Ro === null && K.headers.get("transfer-encoding")) return new Response("length required", { status: 411 });
    if (Ro !== null) {
      let se = Number(Ro);
      if (!Number.isFinite(se) || se < 0 || se > t.limits.max_request_bytes)
        return new Response("payload too large", { status: 413 });
    }
    if (t.admin && Tp(je)) {
      let se = t.admin,
        Ue = K.headers.get("authorization"),
        Ee = null;
      if (se.admin_groups.length > 0 && !K.headers.get("x-api-key") && Ue?.startsWith("Bearer ")) {
        let Ae = await jl(Ue.slice(7), h, y);
        if (Ae && Cp(Ae.groups, se)) Ee = { sub: Ae.sub };
      }
      let Te = await Gk(K, $t, s.sql, u, Ee, _e, se.group_limit_mode);
      if (Te) return Te;
    }
    if (je === "/oauth/device_authorization" && K.method === "POST") {
      if (!Oe) return za();
      if (
        (await s.incr(rs("devauth", _e ?? "unknown"), t.rate_limits.device_authorization.window_seconds)) >
        t.rate_limits.device_authorization.max
      )
        return Re("device.authorize", { result: "rate_limited", client_ip: _e }), vr("slow_down", 429);
      let Ue = Gg(),
        Ee = Vg(),
        Te = { status: "pending", user_code: Ee, created_at: Date.now(), client_ip: _e },
        Ae = Ll(Ue);
      return (
        await Promise.all([s.set(Ae, await Ml(Te, h), Zi), s.set(ts(Ee), Ae, Zi)]),
        Re("device.authorize", { result: "success", client_ip: _e }),
        Response.json(
          {
            device_code: Ue,
            user_code: Ee,
            verification_uri: `${It}/device`,
            verification_uri_complete: `${It}/device?user_code=${encodeURIComponent(Ee)}`,
            expires_in: Zi,
            interval: xl,
          },
          { headers: Ci },
        )
      );
    }
    if (je === "/device" && K.method === "GET") {
      if (!Oe) return za();
      let se = $t.searchParams.get("user_code") ?? void 0;
      return Wo({ prefill: se, idpOrigin: $n });
    }
    if (je === "/device" && K.method === "POST") {
      let se = t.oidc;
      if (!Oe || !se) return za();
      let Ue = K.headers.get("origin"),
        Ee = K.headers.get("sec-fetch-site");
      if (!(Ee !== null ? Ee === "same-origin" || Ee === "none" : Ue !== null && Ue === It))
        return (
          Re("device.verify", { result: "csrf_rejected", client_ip: _e }),
          Wo({
            idpOrigin: $n,
            error: "This request came from another site and was blocked. Open the verification link directly.",
          })
        );
      if (
        (await s.incr(rs("device", _e ?? "unknown"), t.rate_limits.device_verify.window_seconds)) >
        t.rate_limits.device_verify.max
      )
        return (
          Re("device.verify", { result: "rate_limited", client_ip: _e }),
          Wo({ idpOrigin: $n, error: "Too many attempts. Wait a few minutes and try again." })
        );
      let Ne;
      try {
        Ne = (await K.formData()).get("user_code")?.toString() ?? null;
      } catch {
        Ne = null;
      }
      let qt = Ne ? await s.get(ts(Ne)) : null;
      if (!qt)
        return (
          Re("device.verify", { result: "unknown_code", client_ip: _e }),
          Wo({
            idpOrigin: $n,
            error: "That code was not recognized \u2014 it may have expired. Check your device and try again.",
          })
        );
      let dr = Ni.codeVerifier(),
        zn = Ni.nonce(),
        Xe = w3(32).toString("base64url"),
        ui = zp("sha256").update(Xe).digest("hex"),
        fr = await Fg({ deviceCodeKey: qt, idpCodeVerifier: dr, nonce: zn, browserHash: ui }, h),
        xi = te(se.scopes ?? ["openid", "profile", "email", "offline_access"]).join(" ");
      return (
        Re("device.verify", { result: "redirect", client_ip: _e }),
        new Response(null, {
          status: 302,
          headers: {
            "Set-Cookie": `${Ao}=${Xe}; Max-Age=600; ${Lp}`,
            Location: Oe.authorizationUrl({
              ...se.extra_auth_params,
              redirect_uri: `${It}/oauth/callback`,
              state: fr,
              nonce: zn,
              ...(se.use_pkce && { code_challenge: Ni.codeChallenge(dr), code_challenge_method: "S256" }),
              scope: xi,
              response_mode: "query",
            }),
          },
        })
      );
    }
    if (je === "/oauth/callback") {
      let se = t.oidc;
      if (!Oe || !se) return za();
      let Ue = $t.searchParams.get("error");
      if (Ue) {
        let vt = $t.searchParams.get("error_description");
        return _i(vt ? `${Ue}: ${vt}` : `Identity provider returned: ${Ue}`);
      }
      let Ee = $t.searchParams.get("code"),
        Te = $t.searchParams.get("state"),
        Ae = Te ? await Bg(Te, h) : null;
      if (!Ee || !Ae) return _i("This sign-in link has expired. Try again from your device.");
      let Ne = `${Ao}=; Max-Age=0; ${Lp}`,
        qt = hP(K),
        dr = Buffer.from(Ae.browserHash ?? "", "hex"),
        zn = qt ? zp("sha256").update(qt).digest() : Buffer.alloc(0);
      if (dr.length !== 32 || zn.length !== dr.length || !O3(zn, dr)) {
        Re("device.callback", { result: "browser_mismatch", client_ip: _e });
        let vt = _i(
          "This sign-in link was started in a different browser. Open the verification link on the same device that showed the code.",
        );
        return vt.headers.set("Set-Cookie", Ne), vt;
      }
      let Xe = Ae.deviceCodeKey,
        ui = await s.get(Xe),
        fr = ui ? await zl(ui, h) : null;
      if (!fr || fr.status !== "pending") return _i("This device code has already been used or has expired.");
      async function xi(vt) {
        await Promise.all([s.set(Xe, await Ml(vt, h), Zi), s.del(ts(vt.user_code))]);
      }
      try {
        let vt = $t.searchParams.get("iss"),
          ot = await Oe.callback(
            `${It}/oauth/callback`,
            { code: Ee, ...(vt && { iss: vt }) },
            { ...(se.use_pkce && { code_verifier: Ae.idpCodeVerifier }), nonce: Ae.nonce },
          ),
          ci = ot.claims(),
          yP = await Se(ci, "session.mint", _e, ke, await Di(ci, ot.access_token));
        await xi({
          status: "complete",
          user_code: fr.user_code,
          created_at: fr.created_at,
          access_token: yP,
          ...(ot.refresh_token && { refresh_token: ot.refresh_token }),
          expires_in: t.session.ttl_hours * 3600,
        });
        let Zp = _i(null);
        return Zp.headers.set("Set-Cookie", Ne), Zp;
      } catch (vt) {
        let ot = l(vt);
        return (
          Z("warn", `token exchange failed request_id=${ke}: ${ot}`),
          Re("session.mint", { result: "fail", client_ip: _e, err: ot }),
          await xi({ status: "denied", user_code: fr.user_code, created_at: fr.created_at }),
          _i("Sign-in could not be completed.")
        );
      }
    }
    if (je === "/oauth/token" && K.method === "POST") {
      if (!Oe) return za();
      let se;
      try {
        se = await K.formData();
      } catch {
        return vr("invalid_request");
      }
      let Ue = se.get("grant_type")?.toString();
      if (Ue === Dl) {
        let Ee = se.get("device_code")?.toString();
        if (!Ee) return vr("invalid_request");
        let Te = Ll(Ee),
          Ae = await s.get(Te),
          Ne = Ae ? await zl(Ae, h) : null;
        if (!Ne) return vr("expired_token");
        if (Ne.status === "pending") {
          if ((await s.incr(rs("poll", Te), xl - 1)) > 1) return vr("slow_down", 429);
          return vr("authorization_pending");
        }
        if (Ne.status === "denied") return await s.del(Te), vr("access_denied");
        return (
          await s.del(Te),
          Response.json(
            {
              access_token: Ne.access_token,
              refresh_token: Ne.refresh_token,
              token_type: "Bearer",
              expires_in: Ne.expires_in,
            },
            { headers: Ci },
          )
        );
      }
      if (Ue === "refresh_token") {
        let Ee = se.get("refresh_token")?.toString();
        if (!Ee) return vr("invalid_request");
        try {
          let Te = await Oe.refresh(Ee),
            Ae;
          try {
            Ae = Te.claims();
          } catch {
            Ae = void 0;
          }
          let Ne, qt;
          if (Ae === void 0) {
            if (!Te.access_token) throw Error("IdP refresh response had neither id_token nor access_token");
            Ne = await Oe.userinfo(Te.access_token);
          } else (Ne = Ae), (qt = await Di(Ae, Te.access_token));
          let dr = await Se(Ne, "session.refresh", _e, ke, qt);
          return Response.json(
            {
              access_token: dr,
              refresh_token: Te.refresh_token ?? Ee,
              token_type: "Bearer",
              expires_in: t.session.ttl_hours * 3600,
            },
            { headers: Ci },
          );
        } catch (Te) {
          let Ae = l(Te);
          Z("warn", `refresh failed request_id=${ke}: ${Ae}`),
            Re("session.refresh", { result: "fail", client_ip: _e, err: Ae });
          let Ne = Te.response !== void 0 || typeof Te.code === "string" || Te.name === "RPError",
            qt = Te.error === "invalid_grant";
          if (Ne && !qt) return vr("temporarily_unavailable", 503);
          return vr("invalid_grant", 401);
        }
      }
      return vr("unsupported_grant_type");
    }
    let jo = K.headers.get("authorization"),
      Ua = jo?.startsWith("Bearer ") ? jo.slice(7) : null,
      ze = null,
      bt = null,
      Up = false;
    if (Ua !== null)
      if (f !== null && Sp(je) && K.method === "POST" && eh(Ua)) {
        Up = true;
        let se = await f.authenticate(Ua, ke, _e, je);
        if (!se.ok && se.status === 503)
          return Qe(
            503,
            "api_error",
            "customer-routed inference is temporarily unavailable: the gateway cannot obtain current verification keys",
            ke,
            { "retry-after": "30" },
          );
        (bt = se.ok ? se.claims : null), (ze = bt);
      } else ze = await jl(Ua, h, y);
    if (!ze) {
      if (!Up) Re("auth.denied", { reason: jo ? "invalid_token" : "missing_token", path: je, client_ip: _e });
      return Qe(401, "authentication_error", "invalid token", ke);
    }
    if (je === "/managed/settings") {
      if (!it) return new Response("not configured", { status: 404 });
      let se = Tc(it, ze);
      if (!se)
        return (
          Z(
            "warn",
            `no managed policy matched for sub=${ze.sub} (groups: ${(ze.groups ?? []).join(",") || "none"}) request_id=${ke}`,
          ),
          new Response("no policy matched", { status: 404 })
        );
      let { payload: Ue } = se.policy,
        Ee = `"${Ue.checksum}"`,
        Te = {
          "x-cc-gateway-version":
            typeof {
              ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.252",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-08-31T16:02:57Z",
              GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
              HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "darwin",
            } < "u"
              ? {
                  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                  PACKAGE_URL: "@anthropic-ai/claude-code",
                  README_URL: "https://code.claude.com/docs/en/overview",
                  VERSION: "2.1.252",
                  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                  BUILD_TIME: "2026-08-31T16:02:57Z",
                  GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
                  HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                  DD_SOURCEMAP_GROUP: "darwin",
                }.VERSION
              : "unknown",
        };
      if (K.headers.get("if-none-match") === Ee) return new Response(null, { status: 304, headers: Te });
      return (
        Re("managed.serve", { sub: ze.sub, email: ze.email, policy_index: se.index, checksum: Ue.checksum }),
        Response.json(Ue, { headers: { ETag: Ee, ...Te } })
      );
    }
    if (je === "/user/bootstrap" && K.method === "GET") {
      if (!it || !Qt)
        return (
          Re("desktop_bootstrap.denied", { reason: "not_configured", sub: ze.sub, email: ze.email }),
          Qe(
            404,
            "not_found_error",
            'Claude Desktop is not configured on this gateway \u2014 add a "desktop:" block to a managed policy',
            ke,
            Ci,
          )
        );
      let se = Tc(it, ze);
      if (!se || se.policy.desktop === void 0)
        return (
          Z(
            "warn",
            `no desktop-enabled managed policy matched for sub=${ze.sub} (groups: ${(ze.groups ?? []).join(",") || "none"}) request_id=${ke}`,
          ),
          Re("desktop_bootstrap.denied", {
            reason: se ? "policy_not_opted_in" : "no_policy_matched",
            sub: ze.sub,
            email: ze.email,
          }),
          Qe(
            404,
            "not_found_error",
            se
              ? 'the policy matching this user does not opt into desktop \u2014 add a "desktop:" block to it'
              : "no policy matched",
            ke,
            Ci,
          )
        );
      let Ue = nP(t, se.policy, ze, It),
        Ee = Cp(ze.groups, t.admin);
      return (
        Re("desktop_bootstrap.serve", { sub: ze.sub, email: ze.email, policy_index: se.index }),
        Response.json(Ue, { headers: { ...Ci, "x-gateway-spend-admin": String(Ee) } })
      );
    }
    if (je in xp && K.method === "POST") {
      let se = xp[je],
        Ue = t.telemetry.forward_to.filter((Ne) => Ne[se]);
      if (Ue.length === 0) return new Response(null, { status: 200 });
      let Ee = await K.arrayBuffer(),
        Te = K.headers.get("content-type") ?? "application/x-protobuf",
        Ae = K.headers.get("content-encoding");
      return o.fanout(je, Ee, Te, Ae, Ue), new Response(null, { status: 200 });
    }
    let Np = bt !== null ? void 0 : it ? Tc(it, ze)?.policy.availableModels : void 0;
    if (je === "/v1/models" && K.method === "GET") return Uk(t.models, Mn, t.auto_include_builtin_models, Np);
    if (Sp(je) && K.method === "POST") {
      let se = {};
      if (c && je === "/v1/messages" && bt === null) {
        let ot = await c.precheck(ze, ke);
        if (ot.blocked) return ot.blocked;
        se = ot.headers;
      }
      let Ue = performance.now(),
        Ee = () => {
          Re("inference", {
            sub: ze.sub,
            email: ze.email,
            path: je,
            model: null,
            upstream: null,
            ...mP(bt, null),
            status: 400,
            ms: Math.round(performance.now() - Ue),
          });
        },
        Te = await K.arrayBuffer(),
        Ae;
      try {
        Ae = V(Buffer.from(Te).toString("utf8"));
      } catch {
        return Ee(), Qe(400, "invalid_request_error", "invalid JSON", ke);
      }
      if (typeof Ae !== "object" || Ae === null || Array.isArray(Ae))
        return Ee(), Qe(400, "invalid_request_error", "request body must be a JSON object", ke);
      let Ne = { buf: Te, parsed: Ae };
      if (p || bt !== null) {
        let ot;
        try {
          ot = new TextEncoder().encode(b(Ne.parsed));
        } catch {
          return Ee(), Qe(400, "invalid_request_error", "request body cannot be re-serialized", ke);
        }
        Ne.buf = ot.slice().buffer;
      }
      if (p) {
        let ot = wp(K),
          ci = await p.precheck(
            ze,
            Ne.parsed,
            ke,
            { path: je, query: ot.search, headers: Object.fromEntries(ot.headers.entries()) },
            bt?.org,
            bt !== null ? (bt.act?.sub ?? null) : void 0,
          );
        if (ci) return ci;
      }
      let qt = performance.now(),
        dr = null,
        zn;
      if (c && je === "/v1/messages" && Ne.parsed.stream !== true && bt === null)
        (dr = Ne.parsed), (zn = Ne.parsed.speed === "fast" ? "fast" : void 0);
      let Xe = await zk(K, je, Mn, t.models, t.auto_include_builtin_models, Np, t.timeouts.upstream_ttfb_ms, ke, {
        body: Ne,
        ...(bt !== null && { criPrincipal: true }),
        ...(bt === null && { user: { sub: ze.sub, email: ze.email } }),
      });
      if (bt !== null) Xe = await xk(Xe, K, ke);
      let ui = Xe.headers.get("x-gateway-model"),
        fr = Xe.headers.get("x-gateway-upstream"),
        xi = Xe.headers.get("x-gateway-upstream-model"),
        vt = Xe.headers.get("x-gateway-upstream-kind");
      if (
        (Re("inference", {
          sub: ze.sub,
          email: ze.email,
          path: je,
          model: ui,
          upstream: fr,
          ...mP(bt, vt),
          status: Xe.status,
          ms: Math.round(performance.now() - qt),
        }),
        Xe.headers.delete("x-gateway-upstream"),
        Xe.headers.delete("x-gateway-model"),
        Xe.headers.delete("x-gateway-upstream-model"),
        Xe.headers.delete("x-gateway-upstream-kind"),
        Xe.headers.delete("x-cri-upstream-kind"),
        bt !== null)
      ) {
        if (vt !== null) Xe.headers.set("x-cri-upstream-kind", "cloud");
      }
      if (Xe.ok) for (let [ot, ci] of Object.entries(se)) Xe.headers.set(ot, ci);
      if (Xe.status >= 500) Z("warn", `upstream ${Xe.status} on ${je} request_id=${ke}`);
      if (c && je === "/v1/messages" && bt === null) {
        let ot = dr;
        return c.meter(
          Xe,
          ze,
          fr,
          xi,
          ui,
          ot ? () => Ck(ot, Mn, t.models, t.auto_include_builtin_models, { sub: ze.sub, email: ze.email }) : null,
          zn,
        );
      }
      return Xe;
    }
    return new Response("not found", { status: 404 });
  }
  let La = Bun.serve({
    hostname: t.listen.host,
    port: t.listen.port,
    idleTimeout: 0,
    development: false,
    ...(le && { tls: le }),
    fetch: async (K, _e) => {
      let ke = ch(_e.requestIP(K)?.address, K.headers.get("x-forwarded-for"), n),
        Re = K.headers.get(E3),
        yt = Re && I3.test(Re) ? Re : S3(),
        Kt;
      try {
        Kt = await _P(K, ke, yt);
      } catch ($t) {
        Z("error", `unhandled request_id=${yt}: ${l($t)}`), (Kt = Qe(500, "api_error", "internal server error", yt));
      }
      return Kt.headers.set($3, yt), gP(Kt, !!le);
    },
    error: (K) => (Z("error", `unhandled: ${l(K)}`), gP(Qe(500, "api_error", "internal server error"), !!le)),
  });
  Wg(t, { tls: !!le, hostname: La.hostname ?? t.listen.host, port: La.port ?? t.listen.port, managed: !!it });
  for (let K of T3(t, it)) Z("warn", K);
  return (
    Qg(),
    {
      port: La.port ?? t.listen.port,
      stop: () => {
        La.stop(true), s.close();
      },
    }
  );
}

function T3(e, t = null) {
  let n = [],
    i = new Set(e.upstreams.filter((s) => s.provider === "vertex").map((s) => s.name));
  if (i.size > 0) {
    let s = [so.sonnet45, so.sonnet40],
      u = [];
    for (let c of e.models)
      for (let [d, f] of Object.entries(c.upstream_model)) {
        let p = pR(f);
        if (i.has(d) && p && s.includes(p)) u.push(c.id);
      }
    if (e.auto_include_builtin_models) u.push("claude-sonnet-4-5 (via auto_include_builtin_models)");
    if (u.length > 0)
      n.push(
        `vertex upstream serves ${te(u).join(", ")}: Sonnet 4.5/Sonnet 4 do not support 1M context on Vertex \u2014 requests with the context-1m beta (the [1m] model suffix) for these models will be rejected with a 400. Vertex 1M lineup: Opus 4.6+/Sonnet 4.6.`,
      );
  }
  for (let [s, u] of (t ?? []).entries()) {
    let c = u.availableModels;
    if (!c) continue;
    let d = c.filter((f) => jm(f.trim().toLowerCase()) && !NT(f.trim().toLowerCase()));
    if (d.length > 0) {
      let f =
        d.length === c.length
          ? "so every inference request for this role will be rejected"
          : "so these entries never match (other entries in the list still do)";
      n.push(
        `managed policy ${s} availableModels contains ${d.map((p) => `'${p}'`).join(", ")} \u2014 the CLI resolves these aliases when picking a model, but the gateway matches the raw request string, ${f}. List concrete model ids or family aliases (fable/opus/sonnet/haiku) instead.`,
      );
    }
  }
  let r = e.upstreams.flatMap((s) => (s.provider === "anthropic" && s.forward_user_identity ? [s] : []));
  if (e.oidc !== void 0)
    for (let s of r)
      n.push(
        `upstream '${s.name}' has forward_user_identity: true \u2014 every forwarded request carries the signed-in developer's IdP subject and email as headers to ${s.base_url} (x-litellm-end-user-id is the email and is omitted for a user whose IdP token has none; set oidc.email_claim if your IdP puts it under another claim name)`,
      );
  if (e.cri && !e.cri.enabled)
    n.push(
      "a cri: block is present but cri.enabled is not true \u2014 customer-routed inference is OFF and the block (org_allowlist, policy webhook) is inert",
    );
  if (e.oidc === void 0) {
    let s = [];
    if (t && t.length > 0)
      s.push("managed: policies (no session principal can ever reach /managed/settings or /user/bootstrap)");
    if (e.admin)
      s.push(
        "admin: spend limits (the spend limits it manages bind session principals only, and no session principal can exist)",
      );
    if (e.telemetry.forward_to.length > 0) s.push("telemetry.forward_to (the OTLP relay sits behind the session wall)");
    if (r.length > 0)
      s.push(
        `forward_user_identity on upstream ${r.map((u) => `'${u.name}'`).join(", ")} (identity headers name a signed-in developer, and no session principal can exist, so none are ever sent)`,
      );
    if (s.length > 0)
      n.push(
        `oidc is not configured (CRI-only deployment), so no gateway session JWT can ever be minted and these configured sections are inert: ${s.join("; ")}. Remove them, or configure oidc if developer sign-in is intended.`,
      );
  }
  let o = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  if (e.cri) {
    for (let s of e.cri.org_allowlist)
      if (!o.test(s))
        n.push(
          `cri.org_allowlist entry '${s}' does not look like a UUID (8-4-4-4-12) \u2014 Anthropic organization identifiers are canonical UUIDs, so this entry will almost certainly never match any caller's signed org claim, and every caller from the intended org will be denied (cri_org_not_allowed)`,
        );
  }
  if (t && !t.some((s) => s.desktop !== void 0))
    n.push(
      "no managed policy carries a desktop: block \u2014 Claude Desktop clients will be rejected by /user/bootstrap until a policy opts in",
    );
  if (e.admin) {
    let s = [];
    for (let u of e.models)
      for (let [c, d] of Object.entries(u.upstream_model))
        if (!hre(d) && !hre(u.id) && !Fi(e.pricing, c, d, u.id)) s.push(`${u.id} (${d})`);
    if (s.length > 0)
      n.push(
        `spend meter has no exact rates for ${te(s).join(", ")} \u2014 these will be metered at the unknown-model default tier`,
      );
    for (let u of e.pricing?.overrides ?? []) {
      let c = e.upstreams.find((p) => p.name === u.upstream),
        d = (p) => {
          if (!c) return false;
          let h = Ca(p, c, e.models, e.auto_include_builtin_models);
          return h.ok && Fi(e.pricing, u.upstream, h.model, p) === u;
        },
        f = pR(u.model)?.firstParty ?? u.model;
      if (!d(f) && !e.models.some((p) => d(p.id)))
        n.push(
          `pricing override for '${u.model}' on upstream '${u.upstream}' will never apply \u2014 no model a client can request there is priced by it (a typo, a model not in models[], or a more specific row covers it)`,
        );
    }
  }
  return n;
}

export { T3, jX };
