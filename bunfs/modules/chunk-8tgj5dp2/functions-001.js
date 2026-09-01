// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $6, $N, $X, $n, A3, AN, AX, B2, B4, BX, C3, CX, Cr, DSt, DX, Dk, Dx, EX, Eo, FX, G6, GEe, GI, GN, Gc, Gk, Gx, H8e, HX, Hl, I4, Ik, Ix, J3, J4, J6, JN, JX, Jp, K2, K6, KN, KX, Kk, Kw, Kx, LEe, LX, Lw, MX, Mt, Mx, NN, Nx, O4, P4, PN, PV, PX, Px, Q4, Q6, QX, Qc, Qf, Rl, Ro, S3, SX, T4, TMe, TX, Ts, U4, UX, Ux, V4, V6, VN, Vk, Vl, Vt, W6, WN, WX, Wl, X6, XX, Y3, YN, YX, Z3, Z6, Zc, Ze, Zr, _6, aR, a_, ak, as, bN, bX, br, c3, c4, cX, ck, f6, fX, fi, fk, g$, gN, gX, ge, gl, gre, gx, h3, hX, i3, iO, iQ, iX, ii, ir, j2, j4, j6, jN, jn, jw, jx, k4, kMe, kX, lX, lr, ls, lw, m6, m_, ml, mx, n3, n4, nX, nk, o4, o6, oX, o_, ow, p4, p6, pX, pk, pt, q6, q8e, qN, qX, r4, r6, rQ, s6, sQ, sX, sk, sr, sw, t3, t6, tQ, tf, u3, uO, uX, v3, vk, vo, vr, vs, w3, w4, wi, wk, xX, xk, xx, y3, ySn, yX, yr, zX, zl, zs, zx } from "/$bunfs/root/modules/chunk-8tgj5dp2/core.js";
import { $Y, ACt, ATn, B0n, BT, C0n, CR, CTn, Cpe, Ct, Drr, En, Ep, Ewt, F2, FT, G, G3, GFe, Gkn, H, HTn, Ha, Hqt, Iqt, Je, Ka, L$, Le, MT, Me, NH, NQe, NT, Ne, Nw, O, Q3, Q4t, Ql, R, Ri, Rwt, Ry, SO, TQe, Te, Ut, V3, VFe, Vo, WH, Wkn, X3, Yfe, Z4t, ZTn, _N, _R, _h, a, a3, aA, b, bFe, ba, be, boe, bs, c, cS, eX, f, fN, g, gj, h, hh, hr, iw, j, jH, jkn, jm, jo, jxn, kTn, ke, l3, mN, mi, n, n5, nc, oK, ob, ol, p, pR, pie, pn, pr, qkn, r0n, ra, rn, rw, s, s0, sn, so, st, uXe, ud, vTn, vwt, w, xi, xqt, xw, y, yA, ye, yj, z6, za, zg, zp, zt } from "/$bunfs/root/modules/chunk-8tgj5dp2/prelude.js";
import { $3, $l, A7e, Ae, Dre, Fn, H6, I, I7e, Lbt, Obt, Rc, Tt, Vbn, Wd, Yl, Yt, ZS, ape, eb, fpe, ie, jd, py, qbt, uAe, unr, xwn, ym } from "/$bunfs/root/modules/chunk-8tgj5dp2/functions-002.js";

function mSn() {
  return {
    validatedModels: new Set(),
    bedrockInferenceProfiles: void 0,
    inferenceProfileBackingModels: new Map(),
    modelConfigs: new Map(),
    capabilityOverrides: new Map(),
    probeResults: new Map(),
    preconnectFired: !1,
  };
}

function _l() {
  return {
    allModelBetas: new Map(),
    modelBetas: new Map(),
    bedrockExtraBodyParamsBetas: new Map(),
    midConversationSystem: new Map(),
  };
}

function pN() {
  return {
    providerCache: mSn(),
    betas: _l(),
    fablePromo: { launchConfig: null, planLimitsEndDate: null, creditsOnlyTiers: null, upgradeUpsell: null },
    lastGoodAntOverrideConfig: null,
    antCapabilitiesByModelId: new Map(),
    warnedEnforcementMessages: new Set(),
    resolvingBestModel: !1,
    modelCapabilitiesByCachePath: new Map(),
    gatewayModelsByCachePath: new Map(),
    modelCapabilitiesStorageV5: void 0,
    gatewayModelsStorageV5: void 0,
    servedCatalogByKey: new Map(),
    servedCatalogRefreshes: new Map(),
    servedCatalogShadowStarted: !1,
  };
}

function Ac() {
  return gN.of(G());
}

function kSt() {
  let e = Ac().providerCache;
  if (e.bedrockInferenceProfiles === void 0) e.bedrockInferenceProfiles = hN();
  return e.bedrockInferenceProfiles;
}

async function hN() {
  let [e, { ListInferenceProfilesCommand: t }] = await Promise.all([qp(), import("/$bunfs/root/chunk-ggtehb62.js")]),
    r = [],
    o;
  try {
    do {
      let u = new t({ ...(o && { nextToken: o }), typeEquals: "SYSTEM_DEFINED" }),
        d = await e.send(u, { abortSignal: AbortSignal.timeout(8000) });
      if (d.inferenceProfileSummaries) r.push(...d.inferenceProfileSummaries);
      o = d.nextToken;
    } while (o);
    return r
      .filter((u) => u.inferenceProfileId?.includes("anthropic"))
      .map((u) => u.inferenceProfileId)
      .filter(Boolean);
  } catch (u) {
    throw (
      (n(`Bedrock ListInferenceProfiles failed: ${u instanceof Error ? u.message : String(u)}`, { level: "error" }), u)
    );
  }
}

function Nde(e, t, r) {
  if (r) {
    let o = e.find((u) => u.startsWith(`${r}.`) && u.includes(t));
    if (o) return o;
  }
  return e.find((o) => o.includes(t)) ?? null;
}

async function qp() {
  let { BedrockClient: e } = await import("/$bunfs/root/chunk-ggtehb62.js"),
    t = await MT(),
    r = a.CLAUDE_CODE_SKIP_BEDROCK_AUTH,
    o = {
      region: t,
      ...(a.ANTHROPIC_BEDROCK_BASE_URL && { endpoint: a.ANTHROPIC_BEDROCK_BASE_URL }),
      ...(await boe({ url: a.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock.${t}.amazonaws.com` })),
      ...(r && {
        requestHandler: new ml.NodeHttpHandler(),
        httpAuthSchemes: [
          { schemeId: "smithy.api#noAuth", identityProvider: () => async () => ({}), signer: new (await Xp())() },
        ],
        httpAuthSchemeProvider: () => [{ schemeId: "smithy.api#noAuth" }],
      }),
    };
  if (!r && !a.AWS_BEARER_TOKEN_BEDROCK)
    if (Rc()) o.credentials = H6("Bedrock").credentials;
    else {
      let u = await uO();
      if (u)
        o.credentials = {
          accessKeyId: u.accessKeyId,
          secretAccessKey: u.secretAccessKey,
          sessionToken: u.sessionToken,
        };
      else if (!a.CLAUDE_CODE_SKIP_AWS_CRED_CACHE) o.credentials = async (d) => (await aR(t))(d);
    }
  return new e(o);
}

async function yer() {
  let { BedrockRuntimeClient: e } = await import("/$bunfs/root/chunk-gyxp9h18.js"),
    t = await MT(),
    r = a.CLAUDE_CODE_SKIP_BEDROCK_AUTH,
    o = {
      region: t,
      ...(a.ANTHROPIC_BEDROCK_BASE_URL && { endpoint: a.ANTHROPIC_BEDROCK_BASE_URL }),
      ...(await boe({ url: a.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${t}.amazonaws.com` })),
      ...(r && {
        requestHandler: new ml.NodeHttpHandler(),
        httpAuthSchemes: [
          { schemeId: "smithy.api#noAuth", identityProvider: () => async () => ({}), signer: new (await Xp())() },
        ],
        httpAuthSchemeProvider: () => [{ schemeId: "smithy.api#noAuth" }],
      }),
    };
  if (!r && !a.AWS_BEARER_TOKEN_BEDROCK)
    if (Rc()) o.credentials = H6("Bedrock").credentials;
    else {
      let u = await uO();
      if (u)
        o.credentials = {
          accessKeyId: u.accessKeyId,
          secretAccessKey: u.secretAccessKey,
          sessionToken: u.sessionToken,
        };
      else if (!a.CLAUDE_CODE_SKIP_AWS_CRED_CACHE) o.credentials = async (d) => (await aR(t))(d);
    }
  return new e(o);
}

function gY(e) {
  let t = hr(e),
    r = Ac().providerCache.inferenceProfileBackingModels,
    o = r.get(t);
  if (o === void 0) (o = EN(t)), r.set(t, o);
  return o;
}

function ure(e) {
  return e.includes("application-inference-profile") && typeof pie(hr(e)) !== "string";
}

async function EN(e) {
  let t = null;
  try {
    let [r, { GetInferenceProfileCommand: o }] = await Promise.all([qp(), import("/$bunfs/root/chunk-ggtehb62.js")]),
      d = (await r.send(new o({ inferenceProfileIdentifier: e }), { abortSignal: AbortSignal.timeout(8000) }))
        .models?.[0]?.modelArn;
    if (d) {
      let _ = d.lastIndexOf("/");
      t = _ >= 0 ? d.substring(_ + 1) : d;
    }
  } catch (r) {
    n(
      `Failed to resolve Bedrock inference profile backing model for ${e}: ${r instanceof Error ? r.message : String(r)}`,
      { level: "error" },
    );
  }
  return jxn(e, t), t;
}

function gSn(e) {
  return e.startsWith("anthropic.");
}

function SN(e) {
  if (!e.startsWith("arn:")) return e;
  let t = e.lastIndexOf("/");
  if (t === -1) return e;
  return e.substring(t + 1);
}

function X9t(e) {
  let t = SN(e);
  for (let r of gj) if (t.startsWith(`${r}.anthropic.`)) return r;
  return;
}

function dre(e, t) {
  let r = X9t(e);
  if (r) return e.replace(`${r}.`, `${t}.`);
  if (gSn(e)) return `${t}.${e}`;
  return e;
}

function PEe(e) {
  let t = e ?? "";
  if (t.startsWith("us-gov-")) return "us-gov";
  if (t.startsWith("us-")) return "us";
  if (t.startsWith("eu-")) return "eu";
  if (t.startsWith("ap-")) return "apac";
  return "global";
}

function R8e(e) {
  if (e?.startsWith("us-gov-")) return "us-gov";
  return a.ANTHROPIC_BEDROCK_REGION_PREFIX ?? PEe(e);
}

async function Xp() {
  let e = await import("/$bunfs/root/chunk-f2eab3vn.js").then((m) => j(m.default, 1));
  return e.NoAuthSigner ?? e.default?.NoAuthSigner;
}

function XS(e) {
  return e;
}

function zr(e, t) {
  let r = gl.find((d) => so[d][e] !== null),
    o = e === "bedrock" ? R8e(t ?? Ewt()) : void 0,
    u = {};
  for (let d of gl) {
    let _ = so[d][e] ?? (r ? so[r][e] : so[d].firstParty);
    u[d] = XS(o ? dre(_, o) : _);
  }
  return u;
}

async function TN() {
  let e = await MT(),
    t = R8e(e),
    r = PEe(e),
    o = zr("bedrock", e),
    u = () => {
      if (t !== r)
        n(
          `ANTHROPIC_BEDROCK_REGION_PREFIX=${t} is being applied without an availability check (inference-profile discovery is unavailable). If requests 400, ensure ${t}.* cross-region inference profiles are enabled in this account, or unset the variable to fall back to ${r}.*.`,
          { level: "warn" },
        );
    },
    d;
  try {
    d = await kSt();
  } catch (C) {
    return (
      n(
        `Failed to list Bedrock inference profiles, falling back to hardcoded models: ${C instanceof Error ? C.message : String(C)}`,
        { level: "error" },
      ),
      u(),
      o
    );
  }
  if (!d?.length) return u(), o;
  let _ = {},
    A = [];
  for (let C of gl) {
    let k = so[C].firstParty,
      M = Nde(d, k, t) || o[C];
    if (((_[C] = XS(M)), t !== r && !M.startsWith(`${t}.`))) A.push(k);
  }
  if (A.length > 0)
    n(
      `ANTHROPIC_BEDROCK_REGION_PREFIX=${t}: ${A.length} model(s) resolved to a different prefix (no ${t}.* profile in this account): ${A.join(", ")}. This is a preference, not a residency guarantee.`,
      { level: "warn" },
    );
  return _;
}

function Qp(e) {
  let t = Je().modelOverrides;
  if (!t) return e;
  let r = { ...e };
  for (let [o, u] of Object.entries(t)) {
    let d = L$[o];
    if (d && u) r[d] = XS(u);
  }
  return r;
}

function SMe(e) {
  let t;
  try {
    t = Je().modelOverrides;
  } catch {
    return e;
  }
  if (!t) return e;
  for (let [r, o] of Object.entries(t)) if (o === e) return r;
  return e;
}

function hl() {
  if (VFe() !== null) return;
  if (Ne() !== "bedrock") {
    ACt(zr(Ne()));
    return;
  }
  Jp();
}

function fc() {
  let e = VFe();
  if (e === null) return hl(), Qp(zr(Ne()));
  return Qp(e);
}

function Pt() {
  let e = VFe();
  if (e === null) return hl(), zr(Ne());
  return e;
}

async function HSt(e) {
  if (VFe() !== null) return;
  if (Ne() !== "bedrock") {
    ACt(zr(Ne()));
    return;
  }
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && e?.sessionModelIsProviderId) {
    await MT(), hl();
    return;
  }
  await Jp();
}

function Ft() {
  return bN.of(G().host);
}

function yN() {
  let e = Ft();
  return e.enabled, null;
  return e.headers;
}

function Ser(e) {
  let t = yN();
  if (!t) return e;
  let r = new globalThis.Headers(e);
  return (
    Object.entries(t).forEach(([o, u]) => {
      if (u !== void 0) r.set(o, u);
    }),
    r
  );
}

function DEe() {
  return !1;
}

function Sl() {
  let e = Ft();
  return e.enabled, null;
  return e.rateLimitTier;
}

function Al() {
  let e = Ft();
  return e.enabled, null;
  return e.subscriptionType || AN;
}

function bl() {
  let e = Ft();
  return e.enabled && e.subscriptionType !== null && !1;
}

function ber() {
  return null;
}

function cw() {
  return null;
}

function hSn() {
  return null;
  switch (t) {
    case "not-started":
      return { endsAt: null };
    case "expired":
      return { endsAt: new Date(Date.now() - r).toISOString() };
    default: {
      let o = Number(t);
      return Number.isFinite(o) && o > 0 ? { endsAt: new Date(Date.now() + o * r).toISOString() } : null;
    }
  }
}

function wer() {
  return null;
}

function Ter(e) {
  return;
}

function Fr() {
  return tf;
}

function yl(e) {
  let t = 2166136261,
    r = e.length;
  for (let o = 0; o < r; o++) (t ^= e.charCodeAt(o)), (t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24));
  return t >>> 0;
}

function Br(e, t, r) {
  if (r === 2) return (yl(yl(e + t) + "") % 1e4) / 1e4;
  if (r === 1) return (yl(t + e) % 1000) / 1000;
  return null;
}

function RN(e) {
  if (e <= 0) return [];
  return Array(e).fill(1 / e);
}

function ni(e, t) {
  return e >= t[0] && e < t[1];
}

function nf(e, t) {
  let r = Br("__" + t[0], e, 1);
  if (r === null) return !1;
  return r >= t[1] && r < t[2];
}

function rf(e, t) {
  for (let r = 0; r < t.length; r++) if (ni(e, t[r])) return r;
  return -1;
}

function vl(e) {
  try {
    let t = e.replace(/([^\\])\//g, "$1\\/");
    return new RegExp(t);
  } catch (t) {
    console.error(t);
    return;
  }
}

function jr(e, t) {
  if (!t.length) return !1;
  let r = !1,
    o = !1;
  for (let u = 0; u < t.length; u++) {
    let d = ON(e, t[u].type, t[u].pattern);
    if (t[u].include === !1) {
      if (d) return !1;
    } else if (((r = !0), d)) o = !0;
  }
  return o || !r;
}

function CN(e, t, r) {
  try {
    let o = t.replace(/[*.+?^${}()|[\]\\]/g, "\\$&").replace(/_____/g, ".*");
    if (r) o = "\\/?" + o.replace(/(^\/|\/$)/g, "") + "\\/?";
    return new RegExp("^" + o + "$", "i").test(e);
  } catch (o) {
    return !1;
  }
}

function vN(e, t) {
  try {
    let r = new URL(t.replace(/^([^:/?]*)\./i, "https://$1.").replace(/\*/g, "_____"), "https://_____"),
      o = [
        [e.host, r.host, !1],
        [e.pathname, r.pathname, !0],
      ];
    if (r.hash) o.push([e.hash, r.hash, !1]);
    return (
      r.searchParams.forEach((u, d) => {
        o.push([e.searchParams.get(d) || "", u, !1]);
      }),
      !o.some((u) => !CN(u[0], u[1], u[2]))
    );
  } catch (r) {
    return !1;
  }
}

function ON(e, t, r) {
  try {
    let o = new URL(e, "https://_");
    if (t === "regex") {
      let u = vl(r);
      if (!u) return !1;
      return u.test(o.href) || u.test(o.href.substring(o.origin.length));
    } else if (t === "simple") return vN(o, r);
    return !1;
  } catch (o) {
    return !1;
  }
}

function of(e, t, r) {
  if (((t = t === void 0 ? 1 : t), t < 0)) t = 0;
  else if (t > 1) t = 1;
  let o = RN(e);
  if (((r = r || o), r.length !== e)) r = o;
  let u = r.reduce((_, A) => A + _, 0);
  if (u < 0.99 || u > 1.01) r = o;
  let d = 0;
  return r.map((_) => {
    let A = d;
    return (d += _), [A, A + t * _];
  });
}

function sf(e, t, r) {
  if (!t) return null;
  let o = t.split("?")[1];
  if (!o) return null;
  let u = o
    .replace(/#.*/, "")
    .split("&")
    .map((d) => d.split("=", 2))
    .filter((d) => {
      let [_] = d;
      return _ === e;
    })
    .map((d) => {
      let [, _] = d;
      return parseInt(_);
    });
  if (u.length > 0 && u[0] >= 0 && u[0] < r) return u[0];
  return null;
}

function _f(e) {
  try {
    return e();
  } catch (t) {
    return console.error(t), !1;
  }
}

async function Cn(e, t, r) {
  if (((t = t || ""), (r = r || (globalThis.crypto && globalThis.crypto.subtle) || tf.SubtleCrypto), !r))
    throw Error("No SubtleCrypto implementation found");
  try {
    let o = await r.importKey("raw", Rl(t), { name: "AES-CBC", length: 128 }, !0, ["encrypt", "decrypt"]),
      [u, d] = e.split("."),
      _ = await r.decrypt({ name: "AES-CBC", iv: Rl(u) }, o, Rl(d));
    return new TextDecoder().decode(_);
  } catch (o) {
    throw Error("Failed to decrypt");
  }
}

function Wr(e) {
  if (typeof e === "string") return e;
  return JSON.stringify(e);
}

function lt(e) {
  if (typeof e === "number") e = e + "";
  if (!e || typeof e !== "string") e = "0";
  let t = e.replace(/(^v|\+.*$)/g, "").split(/[-.]/);
  if (t.length === 3) t.push("~");
  return t.map((r) => (r.match(/^[0-9]+$/) ? r.padStart(5, " ") : r)).join("-");
}

function gf() {
  let e;
  try {
    e = "1.6.1";
  } catch (t) {
    e = "";
  }
  return e;
}

function hf(e, t) {
  let r, o;
  try {
    (r = new URL(e)), (o = new URL(t));
  } catch (u) {
    return console.error(`Unable to merge query strings: ${u}`), t;
  }
  return (
    r.searchParams.forEach((u, d) => {
      if (o.searchParams.has(d)) return;
      o.searchParams.set(d, u);
    }),
    o.toString()
  );
}

function ef(e) {
  return typeof e === "object" && e !== null;
}

function $r(e) {
  if (e.urlPatterns && e.variations.some((t) => ef(t) && "urlRedirect" in t)) return "redirect";
  else if (e.variations.some((t) => ef(t) && (t.domMutations || "js" in t || "css" in t))) return "visual";
  return "unknown";
}

async function oi(e, t) {
  return new Promise((r) => {
    let o = !1,
      u,
      d = (_) => {
        if (o) return;
        (o = !0), u && clearTimeout(u), r(_ || null);
      };
    if (t) u = setTimeout(() => d(), t);
    e.then((_) => d(_)).catch(() => d());
  });
}

function kl(e) {
  if ((Object.assign(Ze, e), !Ze.backgroundSync)) IN();
}

async function Tf(e) {
  let { instance: t, timeout: r, skipCache: o, allowStale: u, backgroundSync: d } = e;
  if (!d) Ze.backgroundSync = !1;
  return wN({ instance: t, allowStale: u, timeout: r, skipCache: o });
}

function kN(e) {
  let t = qr(e),
    r = ir.get(t) || new Set();
  r.add(e), ir.set(t, r);
}

function Af(e) {
  ir.forEach((t) => t.delete(e));
}

function bf() {
  sr.forEach((e) => {
    if (!e) return;
    (e.state = "idle"), Nl(e);
  });
}

function yf() {
  sr.forEach((e) => {
    if (!e) return;
    if (e.state !== "idle") return;
    xl(e);
  });
}

async function Sf() {
  try {
    if (!Mt.localStorage) return;
    await Mt.localStorage.setItem(Ze.cacheKey, JSON.stringify(Array.from(Vt.entries())));
  } catch (e) {}
}

async function wN(e) {
  let { instance: t, allowStale: r, timeout: o, skipCache: u } = e,
    d = qr(t),
    _ = Pl(t),
    A = new Date(),
    C = new Date(A.getTime() - Ze.maxAge + Ze.staleTTL);
  await PN();
  let k = !Ze.disableCache && !u ? Vt.get(_) : void 0;
  if (k && (r || k.staleAt > A) && k.staleAt > C) {
    if (k.sse) lr.add(d);
    if (k.staleAt < A) Ol(t);
    else Ml(t);
    return { data: k.data, success: !0, source: "cache" };
  } else return (await oi(Ol(t), o)) || { data: null, success: !1, source: "timeout", error: Error("Timeout") };
}

function qr(e) {
  let [t, r] = e.getApiInfo();
  return `${t}||${r}`;
}

function Pl(e) {
  let t = qr(e);
  if (!("isRemoteEval" in e) || !e.isRemoteEval()) return t;
  let r = e.getAttributes(),
    o = e.getCacheKeyAttributes() || Object.keys(e.getAttributes()),
    u = {};
  o.forEach((A) => {
    u[A] = r[A];
  });
  let d = e.getForcedVariations(),
    _ = e.getUrl();
  return `${t}||${JSON.stringify({ ca: u, fv: d, url: _ })}`;
}

function Rf() {
  let e = Array.from(Vt.entries())
      .map((r) => {
        let [o, u] = r;
        return { key: o, staleAt: u.staleAt.getTime() };
      })
      .sort((r, o) => r.staleAt - o.staleAt),
    t = Math.min(Math.max(0, Vt.size - Ze.maxEntries), Vt.size);
  for (let r = 0; r < t; r++) Vt.delete(e[r].key);
}

function Cf(e, t, r) {
  let o = r.dateUpdated || "",
    u = new Date(Date.now() + Ze.staleTTL),
    d = !Ze.disableCache ? Vt.get(t) : void 0;
  if (d && o && d.version === o) {
    (d.staleAt = u), Sf();
    return;
  }
  if (!Ze.disableCache) Vt.set(t, { data: r, version: o, staleAt: u, sse: lr.has(e) }), Rf();
  Sf();
  let _ = ir.get(e);
  _ && _.forEach((A) => MN(A, r));
}

async function MN(e, t) {
  await e.setPayload(t || e.getPayload());
}

async function Ol(e) {
  let { apiHost: t, apiRequestHeaders: r } = e.getApiHosts(),
    o = e.getClientKey(),
    u = "isRemoteEval" in e && e.isRemoteEval(),
    d = qr(e),
    _ = Pl(e),
    A = ii.get(_);
  if (!A)
    (A = (
      u
        ? pt.fetchRemoteEvalCall({
            host: t,
            clientKey: o,
            payload: {
              attributes: e.getAttributes(),
              forcedVariations: e.getForcedVariations(),
              forcedFeatures: Array.from(e.getForcedFeatures().entries()),
              url: e.getUrl(),
            },
            headers: r,
          })
        : pt.fetchFeaturesCall({ host: t, clientKey: o, headers: r })
    )
      .then((k) => {
        if (!k.ok) throw Error(`HTTP error: ${k.status}`);
        if (k.headers.get("x-sse-support") === "enabled") lr.add(d);
        return k.json();
      })
      .then((k) => (Cf(d, _, k), Ml(e), ii.delete(_), { data: k, success: !0, source: "network" }))
      .catch((k) => (ii.delete(_), { data: null, source: "error", success: !1, error: k }))),
      ii.set(_, A);
  return A;
}

function Ml(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    r = qr(e),
    o = Pl(e),
    { streamingHost: u, streamingHostRequestHeaders: d } = e.getApiHosts(),
    _ = e.getClientKey();
  if (t) lr.add(r);
  if (Ze.backgroundSync && lr.has(r) && Mt.EventSource) {
    if (sr.has(r)) return;
    let A = {
      src: null,
      host: u,
      clientKey: _,
      headers: d,
      cb: (C) => {
        try {
          if (C.type === "features-updated") {
            let k = ir.get(r);
            k &&
              k.forEach((M) => {
                Ol(M);
              });
          } else if (C.type === "features") {
            let k = JSON.parse(C.data);
            Cf(r, o, k);
          }
          A.errors = 0;
        } catch (k) {
          vf(A);
        }
      },
      errors: 0,
      state: "active",
    };
    sr.set(r, A), xl(A);
  }
}

function vf(e) {
  if (e.state === "idle") return;
  if ((e.errors++, e.errors > 3 || (e.src && e.src.readyState === 2))) {
    let t = Math.pow(3, e.errors - 3) * (1000 + Math.random() * 1000);
    Nl(e),
      setTimeout(
        () => {
          if (["idle", "active"].includes(e.state)) return;
          xl(e);
        },
        Math.min(t, 300000),
      );
  }
}

function Nl(e) {
  if (!e.src) return;
  if (((e.src.onopen = null), (e.src.onerror = null), e.src.close(), (e.src = null), e.state === "active"))
    e.state = "disabled";
}

function xl(e) {
  (e.src = pt.eventSourceCall({ host: e.host, clientKey: e.clientKey, headers: e.headers })),
    (e.state = "active"),
    e.src.addEventListener("features", e.cb),
    e.src.addEventListener("features-updated", e.cb),
    (e.src.onerror = () => vf(e)),
    (e.src.onopen = () => {
      e.errors = 0;
    });
}

function DN(e, t) {
  Nl(e), sr.delete(t);
}

function IN() {
  lr.clear(), sr.forEach(DN), ir.clear(), pt.stopIdleListener();
}

function si(e, t) {
  if (t.streaming) {
    if (!e.getClientKey()) throw Error("Must specify clientKey to enable streaming");
    if (t.payload) Ml(e, !0);
    kN(e);
  }
}

function xN(e) {
  return e === "html"
    ? { childList: !0, subtree: !0, attributes: !0, characterData: !0 }
    : { childList: !1, subtree: !1, attributes: !0, attributeFilter: [e] };
}

function _i(e) {
  var t = fi.get(e);
  if (!t) (t = { element: e, attributes: {} }), fi.set(e, t);
  return t;
}

function gi(e, t, r, o, u) {
  var d = r(e),
    _ = {
      isDirty: !1,
      originalValue: d,
      virtualValue: d,
      mutations: [],
      el: e,
      _positionTimeout: null,
      observer: new MutationObserver(function () {
        if (t === "position" && _._positionTimeout) return;
        else if (t === "position")
          _._positionTimeout = setTimeout(function () {
            _._positionTimeout = null;
          }, 1000);
        var A = r(e);
        if (
          t === "position" &&
          A.parentNode === _.virtualValue.parentNode &&
          A.insertBeforeNode === _.virtualValue.insertBeforeNode
        )
          return;
        if (A === _.virtualValue) return;
        (_.originalValue = A), u(_);
      }),
      mutationRunner: u,
      setValue: o,
      getCurrentValue: r,
    };
  if (t === "position" && e.parentNode)
    _.observer.observe(e.parentNode, { childList: !0, subtree: !0, attributes: !1, characterData: !1 });
  else _.observer.observe(e, xN(t));
  return _;
}

function hi(e, t) {
  var r = t.getCurrentValue(t.el);
  if (((t.virtualValue = e), e && typeof e !== "string")) {
    if (!r || e.parentNode !== r.parentNode || e.insertBeforeNode !== r.insertBeforeNode) (t.isDirty = !0), Of();
  } else if (e !== r) (t.isDirty = !0), Of();
}

function LN(e) {
  var t = e.originalValue;
  e.mutations.forEach(function (r) {
    return (t = r.mutate(t));
  }),
    hi(JN(t), e);
}

function UN(e) {
  var t = new Set(e.originalValue.split(/\s+/).filter(Boolean));
  e.mutations.forEach(function (r) {
    return r.mutate(t);
  }),
    hi(Array.from(t).filter(Boolean).join(" "), e);
}

function FN(e) {
  var t = e.originalValue;
  e.mutations.forEach(function (r) {
    return (t = r.mutate(t));
  }),
    hi(t, e);
}

function BN(e) {
  var { parentSelector: t, insertBeforeSelector: r } = e,
    o = document.querySelector(t);
  if (!o) return null;
  var u = r ? document.querySelector(r) : null;
  if (r && !u) return null;
  return { parentNode: o, insertBeforeNode: u };
}

function HN(e) {
  var t = e.originalValue;
  e.mutations.forEach(function (r) {
    var o = r.mutate(),
      u = BN(o);
    t = u || t;
  }),
    hi(t, e);
}

function wf(e) {
  var t = _i(e);
  if (!t.html) t.html = gi(e, "html", VN, GN, LN);
  return t.html;
}

function Mf(e) {
  var t = _i(e);
  if (!t.position) t.position = gi(e, "position", KN, jN, HN);
  return t.position;
}

function Df(e) {
  var t = _i(e);
  if (!t.classes) t.classes = gi(e, "class", YN, WN, UN);
  return t.classes;
}

function If(e, t) {
  var r = _i(e);
  if (!r.attributes[t]) r.attributes[t] = gi(e, t, $N(t), qN(t), FN);
  return r.attributes[t];
}

function QN(e, t) {
  var r = fi.get(e);
  if (!r) return;
  if (t === "html") {
    var o, u;
    (o = r.html) == null || (u = o.observer) == null || u.disconnect(), delete r.html;
  } else if (t === "class") {
    var d, _;
    (d = r.classes) == null || (_ = d.observer) == null || _.disconnect(), delete r.classes;
  } else if (t === "position") {
    var A, C;
    (A = r.position) == null || (C = A.observer) == null || C.disconnect(), delete r.position;
  } else {
    var k, M, x;
    (k = r.attributes) == null || (M = k[t]) == null || (x = M.observer) == null || x.disconnect(),
      delete r.attributes[t];
  }
}

function di(e, t, r) {
  if (!r.isDirty) return;
  r.isDirty = !1;
  var o = r.virtualValue;
  if (!r.mutations.length) QN(e, t);
  r.setValue(e, o);
}

function ZN(e, t) {
  e.html && di(t, "html", e.html),
    e.classes && di(t, "class", e.classes),
    e.position && di(t, "position", e.position),
    Object.keys(e.attributes).forEach(function (r) {
      di(t, r, e.attributes[r]);
    });
}

function Of() {
  fi.forEach(ZN);
}

function ex(e, t) {
  var r = null;
  if (e.kind === "html") r = wf(t);
  else if (e.kind === "class") r = Df(t);
  else if (e.kind === "attribute") r = If(t, e.attribute);
  else if (e.kind === "position") r = Mf(t);
  if (!r) return;
  r.mutations.push(e), r.mutationRunner(r);
}

function tx(e, t) {
  var r = null;
  if (e.kind === "html") r = wf(t);
  else if (e.kind === "class") r = Df(t);
  else if (e.kind === "attribute") r = If(t, e.attribute);
  else if (e.kind === "position") r = Mf(t);
  if (!r) return;
  var o = r.mutations.indexOf(e);
  if (o !== -1) r.mutations.splice(o, 1);
  r.mutationRunner(r);
}

function Nf(e) {
  if (e.kind === "position" && e.elements.size === 1) return;
  var t = new Set(e.elements),
    r = document.querySelectorAll(e.selector);
  r.forEach(function (o) {
    if (!t.has(o)) e.elements.add(o), ex(e, o);
  });
}

function nx(e) {
  e.elements.forEach(function (t) {
    return tx(e, t);
  }),
    e.elements.clear(),
    Hl.delete(e);
}

function kf() {
  Hl.forEach(Nf);
}

function Ei(e) {
  if (typeof document > "u") return zl;
  return (
    Hl.add(e),
    Nf(e),
    {
      revert: function () {
        nx(e);
      },
    }
  );
}

function Ul(e, t) {
  return Ei({ kind: "html", elements: new Set(), mutate: t, selector: e });
}

function xf(e, t) {
  return Ei({ kind: "position", elements: new Set(), mutate: t, selector: e });
}

function Xr(e, t) {
  return Ei({ kind: "class", elements: new Set(), mutate: t, selector: e });
}

function pi(e, t, r) {
  if (!NN.test(t)) return zl;
  if (t === "class" || t === "className")
    return Xr(e, function (o) {
      var u = r(Array.from(o).join(" "));
      if ((o.clear(), !u)) return;
      u.split(/\s+/g)
        .filter(Boolean)
        .forEach(function (d) {
          return o.add(d);
        });
    });
  return Ei({ kind: "attribute", attribute: t, elements: new Set(), mutate: r, selector: e });
}

function ix(e) {
  var { selector: t, action: r, value: o, attribute: u, parentSelector: d, insertBeforeSelector: _ } = e;
  if (u === "html") {
    if (r === "append")
      return Ul(t, function (A) {
        return A + (o != null ? o : "");
      });
    else if (r === "set")
      return Ul(t, function () {
        return o != null ? o : "";
      });
  } else if (u === "class") {
    if (r === "append")
      return Xr(t, function (A) {
        if (o) A.add(o);
      });
    else if (r === "remove")
      return Xr(t, function (A) {
        if (o) A.delete(o);
      });
    else if (r === "set")
      return Xr(t, function (A) {
        if ((A.clear(), o)) A.add(o);
      });
  } else if (u === "position") {
    if (r === "set" && d)
      return xf(t, function () {
        return { insertBeforeSelector: _, parentSelector: d };
      });
  } else if (r === "append")
    return pi(t, u, function (A) {
      return A !== null ? A + (o != null ? o : "") : o != null ? o : "";
    });
  else if (r === "set")
    return pi(t, u, function () {
      return o != null ? o : "";
    });
  else if (r === "remove")
    return pi(t, u, function () {
      return null;
    });
  return zl;
}

function mn(e, t, r) {
  r = r || {};
  for (let [o, u] of Object.entries(t))
    switch (o) {
      case "$or":
        if (!zf(e, u, r)) return !1;
        break;
      case "$nor":
        if (zf(e, u, r)) return !1;
        break;
      case "$and":
        if (!_x(e, u, r)) return !1;
        break;
      case "$not":
        if (mn(e, u, r)) return !1;
        break;
      default:
        if (!Qr(u, lx(e, o), r)) return !1;
    }
  return !0;
}

function lx(e, t) {
  let r = t.split("."),
    o = e;
  for (let u = 0; u < r.length; u++)
    if (o && typeof o === "object" && r[u] in o) o = o[r[u]];
    else return null;
  return o;
}

function cx(e) {
  if (!Vl[e]) Vl[e] = new RegExp(e.replace(/([^\\])\//g, "$1\\/"));
  return Vl[e];
}

function Qr(e, t, r) {
  if (typeof e === "string") return t + "" === e;
  if (typeof e === "number") return t * 1 === e;
  if (typeof e === "boolean") return t !== null && !!t === e;
  if (e === null) return t === null;
  if (Array.isArray(e) || !Bf(e)) return JSON.stringify(t) === JSON.stringify(e);
  for (let o in e) if (!fx(o, t, e[o], r)) return !1;
  return !0;
}

function Bf(e) {
  let t = Object.keys(e);
  return t.length > 0 && t.filter((r) => r[0] === "$").length === t.length;
}

function ux(e) {
  if (e === null) return "null";
  if (Array.isArray(e)) return "array";
  let t = typeof e;
  if (["string", "number", "boolean", "object", "undefined"].includes(t)) return t;
  return "unknown";
}

function dx(e, t, r) {
  if (!Array.isArray(e)) return !1;
  let o = Bf(t) ? (u) => Qr(t, u, r) : (u) => mn(u, t, r);
  for (let u = 0; u < e.length; u++) if (e[u] && o(e[u])) return !0;
  return !1;
}

function Ti(e, t) {
  if (Array.isArray(e)) return e.some((r) => t.includes(r));
  return t.includes(e);
}

function fx(e, t, r, o) {
  switch (e) {
    case "$veq":
      return lt(t) === lt(r);
    case "$vne":
      return lt(t) !== lt(r);
    case "$vgt":
      return lt(t) > lt(r);
    case "$vgte":
      return lt(t) >= lt(r);
    case "$vlt":
      return lt(t) < lt(r);
    case "$vlte":
      return lt(t) <= lt(r);
    case "$eq":
      return t === r;
    case "$ne":
      return t !== r;
    case "$lt":
      return t < r;
    case "$lte":
      return t <= r;
    case "$gt":
      return t > r;
    case "$gte":
      return t >= r;
    case "$exists":
      return r ? t != null : t == null;
    case "$in":
      if (!Array.isArray(r)) return !1;
      return Ti(t, r);
    case "$inGroup":
      return Ti(t, o[r] || []);
    case "$notInGroup":
      return !Ti(t, o[r] || []);
    case "$nin":
      if (!Array.isArray(r)) return !1;
      return !Ti(t, r);
    case "$not":
      return !Qr(r, t, o);
    case "$size":
      if (!Array.isArray(t)) return !1;
      return Qr(r, t.length, o);
    case "$elemMatch":
      return dx(t, r, o);
    case "$all":
      if (!Array.isArray(t)) return !1;
      for (let u = 0; u < r.length; u++) {
        let d = !1;
        for (let _ = 0; _ < t.length; _++)
          if (Qr(r[u], t[_], o)) {
            d = !0;
            break;
          }
        if (!d) return !1;
      }
      return !0;
    case "$regex":
      try {
        return cx(r).test(t);
      } catch (u) {
        return !1;
      }
    case "$type":
      return ux(t) === r;
    default:
      return console.error("Unknown operator: " + e), !1;
  }
}

function zf(e, t, r) {
  if (!t.length) return !0;
  for (let o = 0; o < t.length; o++) if (mn(e, t[o], r)) return !0;
  return !1;
}

function _x(e, t, r) {
  for (let o = 0; o < t.length; o++) if (!mn(e, t[o], r)) return !1;
  return !0;
}

function hx(e) {
  let t = new Map();
  if (e.global.forcedFeatureValues) e.global.forcedFeatureValues.forEach((r, o) => t.set(o, r));
  if (e.user.forcedFeatureValues) e.user.forcedFeatureValues.forEach((r, o) => t.set(o, r));
  return t;
}

function Ex(e) {
  if (e.global.forcedVariations && e.user.forcedVariations)
    return { ...e.global.forcedVariations, ...e.user.forcedVariations };
  else if (e.global.forcedVariations) return e.global.forcedVariations;
  else if (e.user.forcedVariations) return e.user.forcedVariations;
  else return {};
}

async function cr(e) {
  try {
    await e();
  } catch (t) {}
}

function Hf(e, t, r) {
  if (e.user.trackedExperiments) {
    let u = Ci(t, r);
    if (e.user.trackedExperiments.has(u)) return [];
    e.user.trackedExperiments.add(u);
  }
  if (e.user.enableDevMode && e.user.devLogs)
    e.user.devLogs.push({ experiment: t, result: r, timestamp: Date.now().toString(), logType: "experiment" });
  let o = [];
  if (e.global.trackingCallback) {
    let u = e.global.trackingCallback;
    o.push(cr(() => u(t, r, e.user)));
  }
  if (e.user.trackingCallback) {
    let u = e.user.trackingCallback;
    o.push(cr(() => u(t, r)));
  }
  if (e.global.eventLogger) {
    let u = e.global.eventLogger;
    o.push(
      cr(() =>
        u(
          gx,
          { experimentId: t.key, variationId: r.key, hashAttribute: r.hashAttribute, hashValue: r.hashValue },
          e.user,
        ),
      ),
    );
  }
  return o;
}

function Sx(e, t, r) {
  if (e.user.trackedFeatureUsage) {
    let o = JSON.stringify(r.value);
    if (e.user.trackedFeatureUsage[t] === o) return;
    if (((e.user.trackedFeatureUsage[t] = o), e.user.enableDevMode && e.user.devLogs))
      e.user.devLogs.push({ featureKey: t, result: r, timestamp: Date.now().toString(), logType: "feature" });
  }
  if (e.global.onFeatureUsage) {
    let o = e.global.onFeatureUsage;
    cr(() => o(t, r, e.user));
  }
  if (e.user.onFeatureUsage) {
    let o = e.user.onFeatureUsage;
    cr(() => o(t, r));
  }
  if (e.global.eventLogger) {
    let o = e.global.eventLogger;
    cr(() =>
      o(
        mx,
        {
          feature: t,
          source: r.source,
          value: r.value,
          ruleId: r.source === "defaultValue" ? "$default" : r.ruleId || "",
          variationId: r.experimentResult ? r.experimentResult.key : "",
        },
        e.user,
      ),
    );
  }
}

function Ai(e, t) {
  if (t.stack.evaluatedFeatures.has(e)) return hn(t, e, null, "cyclicPrerequisite");
  t.stack.evaluatedFeatures.add(e), (t.stack.id = e);
  let r = hx(t);
  if (r.has(e)) return hn(t, e, r.get(e), "override");
  if (!t.global.features || !t.global.features[e]) return hn(t, e, null, "unknownFeature");
  let o = t.global.features[e];
  if (o.rules) {
    let u = new Set(t.stack.evaluatedFeatures);
    e: for (let d of o.rules) {
      if (d.parentConditions)
        for (let C of d.parentConditions) {
          t.stack.evaluatedFeatures = new Set(u);
          let k = Ai(C.id, t);
          if (k.source === "cyclicPrerequisite") return hn(t, e, null, "cyclicPrerequisite");
          let M = { value: k.value };
          if (!mn(M, C.condition || {})) {
            if (C.gate) return hn(t, e, null, "prerequisite");
            continue e;
          }
        }
      if (d.filters && Kf(d.filters, t)) continue;
      if ("force" in d) {
        if (d.condition && !Gf(d.condition, t)) continue;
        if (
          !Tx(
            t,
            d.seed || e,
            d.hashAttribute,
            t.user.saveStickyBucketAssignmentDoc && !d.disableStickyBucketing ? d.fallbackAttribute : void 0,
            d.range,
            d.coverage,
            d.hashVersion,
          )
        )
          continue;
        if (d.tracks)
          d.tracks.forEach((C) => {
            if (!Hf(t, C.experiment, C.result).length && t.global.saveDeferredTrack)
              t.global.saveDeferredTrack({ experiment: C.experiment, result: C.result });
          });
        return hn(t, e, d.force, "force", d.id);
      }
      if (!d.variations) continue;
      let _ = { variations: d.variations, key: d.key || e };
      if ("coverage" in d) _.coverage = d.coverage;
      if (d.weights) _.weights = d.weights;
      if (d.hashAttribute) _.hashAttribute = d.hashAttribute;
      if (d.fallbackAttribute) _.fallbackAttribute = d.fallbackAttribute;
      if (d.disableStickyBucketing) _.disableStickyBucketing = d.disableStickyBucketing;
      if (d.bucketVersion !== void 0) _.bucketVersion = d.bucketVersion;
      if (d.minBucketVersion !== void 0) _.minBucketVersion = d.minBucketVersion;
      if (d.namespace) _.namespace = d.namespace;
      if (d.meta) _.meta = d.meta;
      if (d.ranges) _.ranges = d.ranges;
      if (d.name) _.name = d.name;
      if (d.phase) _.phase = d.phase;
      if (d.seed) _.seed = d.seed;
      if (d.hashVersion) _.hashVersion = d.hashVersion;
      if (d.filters) _.filters = d.filters;
      if (d.condition) _.condition = d.condition;
      let { result: A } = yi(_, e, t);
      if ((t.global.onExperimentEval && t.global.onExperimentEval(_, A), A.inExperiment && !A.passthrough))
        return hn(t, e, A.value, "experiment", d.id, _, A);
    }
  }
  return hn(t, e, o.defaultValue === void 0 ? null : o.defaultValue, "defaultValue");
}

function yi(e, t, r) {
  let o = e.key,
    u = e.variations.length;
  if (u < 2) return { result: Fe(r, e, -1, !1, t) };
  if (r.global.enabled === !1 || r.user.enabled === !1) return { result: Fe(r, e, -1, !1, t) };
  if (((e = Ax(e, r)), e.urlPatterns && !jr(r.user.url || "", e.urlPatterns))) return { result: Fe(r, e, -1, !1, t) };
  let d = sf(o, r.user.url || "", u);
  if (d !== null) return { result: Fe(r, e, d, !1, t) };
  let _ = Ex(r);
  if (o in _) {
    let F = _[o];
    return { result: Fe(r, e, F, !1, t) };
  }
  if (e.status === "draft" || e.active === !1) return { result: Fe(r, e, -1, !1, t) };
  let { hashAttribute: A, hashValue: C } = kn(
    r,
    e.hashAttribute,
    r.user.saveStickyBucketAssignmentDoc && !e.disableStickyBucketing ? e.fallbackAttribute : void 0,
  );
  if (!C) return { result: Fe(r, e, -1, !1, t) };
  let k = -1,
    M = !1,
    x = !1;
  if (r.user.saveStickyBucketAssignmentDoc && !e.disableStickyBucketing) {
    let { variation: F, versionIsBlocked: Q } = Rx({
      ctx: r,
      expKey: e.key,
      expBucketVersion: e.bucketVersion,
      expHashAttribute: e.hashAttribute,
      expFallbackAttribute: e.fallbackAttribute,
      expMinBucketVersion: e.minBucketVersion,
      expMeta: e.meta,
    });
    (M = F >= 0), (k = F), (x = !!Q);
  }
  if (!M) {
    if (e.filters) {
      if (Kf(e.filters, r)) return { result: Fe(r, e, -1, !1, t) };
    } else if (e.namespace && !nf(C, e.namespace)) return { result: Fe(r, e, -1, !1, t) };
    if (e.include && !_f(e.include)) return { result: Fe(r, e, -1, !1, t) };
    if (e.condition && !Gf(e.condition, r)) return { result: Fe(r, e, -1, !1, t) };
    if (e.parentConditions) {
      let F = new Set(r.stack.evaluatedFeatures);
      for (let Q of e.parentConditions) {
        r.stack.evaluatedFeatures = new Set(F);
        let ee = Ai(Q.id, r);
        if (ee.source === "cyclicPrerequisite") return { result: Fe(r, e, -1, !1, t) };
        let de = { value: ee.value };
        if (!mn(de, Q.condition || {})) return { result: Fe(r, e, -1, !1, t) };
      }
    }
    if (e.groups && !yx(e.groups, r)) return { result: Fe(r, e, -1, !1, t) };
  }
  if (e.url && !bx(e.url, r)) return { result: Fe(r, e, -1, !1, t) };
  let z = Br(e.seed || o, C, e.hashVersion || 1);
  if (z === null) return { result: Fe(r, e, -1, !1, t) };
  if (!M) {
    let F = e.ranges || of(u, e.coverage === void 0 ? 1 : e.coverage, e.weights);
    k = rf(z, F);
  }
  if (x) return { result: Fe(r, e, -1, !1, t, void 0, !0) };
  if (k < 0) return { result: Fe(r, e, -1, !1, t) };
  if ("force" in e) return { result: Fe(r, e, e.force === void 0 ? -1 : e.force, !1, t) };
  if (r.global.qaMode || r.user.qaMode) return { result: Fe(r, e, -1, !1, t) };
  if (e.status === "stopped") return { result: Fe(r, e, -1, !1, t) };
  let W = Fe(r, e, k, !0, t, z, M);
  if (r.user.saveStickyBucketAssignmentDoc && !e.disableStickyBucketing) {
    let { changed: F, key: Q, doc: ee } = vx(r, A, Wr(C), { [Gl(e.key, e.bucketVersion)]: W.key });
    if (F)
      (r.user.stickyBucketAssignmentDocs = r.user.stickyBucketAssignmentDocs || {}),
        (r.user.stickyBucketAssignmentDocs[Q] = ee),
        r.user.saveStickyBucketAssignmentDoc(ee);
  }
  let U = Hf(r, e, W);
  if (U.length === 0 && r.global.saveDeferredTrack) r.global.saveDeferredTrack({ experiment: e, result: W });
  let B = !U.length ? void 0 : U.length === 1 ? U[0] : Promise.all(U).then(() => {});
  return (
    "changeId" in e && e.changeId && r.global.recordChangeId && r.global.recordChangeId(e.changeId),
    { result: W, trackingCall: B }
  );
}

function hn(e, t, r, o, u, d, _) {
  let A = { value: r, on: !!r, off: !r, source: o, ruleId: u || "" };
  if (d) A.experiment = d;
  if (_) A.experimentResult = _;
  if (o !== "override") Sx(e, t, A);
  return A;
}

function Vf(e) {
  return { ...e.user.attributes, ...e.user.attributeOverrides };
}

function Gf(e, t) {
  return mn(Vf(t), e, t.global.savedGroups || {});
}

function Kf(e, t) {
  return e.some((r) => {
    let { hashValue: o } = kn(t, r.attribute);
    if (!o) return !0;
    let u = Br(r.seed, o, r.hashVersion || 2);
    if (u === null) return !0;
    return !r.ranges.some((d) => ni(u, d));
  });
}

function Tx(e, t, r, o, u, d, _) {
  if (!u && d === void 0) return !0;
  if (!u && d === 0) return !1;
  let { hashValue: A } = kn(e, r, o);
  if (!A) return !1;
  let C = Br(t, A, _ || 1);
  if (C === null) return !1;
  return u ? ni(C, u) : d !== void 0 ? C <= d : !0;
}

function Fe(e, t, r, o, u, d, _) {
  let A = !0;
  if (r < 0 || r >= t.variations.length) (r = 0), (A = !1);
  let { hashAttribute: C, hashValue: k } = kn(
      e,
      t.hashAttribute,
      e.user.saveStickyBucketAssignmentDoc && !t.disableStickyBucketing ? t.fallbackAttribute : void 0,
    ),
    M = t.meta ? t.meta[r] : {},
    x = {
      key: M.key || "" + r,
      featureId: u,
      inExperiment: A,
      hashUsed: o,
      variationId: r,
      value: t.variations[r],
      hashAttribute: C,
      hashValue: k,
      stickyBucketUsed: !!_,
    };
  if (M.name) x.name = M.name;
  if (d !== void 0) x.bucket = d;
  if (M.passthrough) x.passthrough = M.passthrough;
  return x;
}

function Ax(e, t) {
  let r = e.key,
    o = t.global.overrides;
  if (o && o[r]) {
    if (((e = Object.assign({}, e, o[r])), typeof e.url === "string")) e.url = vl(e.url);
  }
  return e;
}

function kn(e, t, r) {
  let o = t || "id",
    u = "",
    d = Vf(e);
  if (d[o]) u = d[o];
  if (!u && r) {
    if (d[r]) u = d[r];
    if (u) o = r;
  }
  return { hashAttribute: o, hashValue: u };
}

function bx(e, t) {
  let r = t.user.url;
  if (!r) return !1;
  let o = r.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
  if (e.test(r)) return !0;
  if (e.test(o)) return !0;
  return !1;
}

function yx(e, t) {
  let r = t.global.groups || {};
  for (let o = 0; o < e.length; o++) if (r[e[o]]) return !0;
  return !1;
}

function Rx(e) {
  let {
    ctx: t,
    expKey: r,
    expBucketVersion: o,
    expHashAttribute: u,
    expFallbackAttribute: d,
    expMinBucketVersion: _,
    expMeta: A,
  } = e;
  (o = o || 0), (_ = _ || 0), (u = u || "id"), (A = A || []);
  let C = Gl(r, o),
    k = Cx(t, u, d);
  if (_ > 0)
    for (let z = 0; z <= _; z++) {
      let W = Gl(r, z);
      if (k[W] !== void 0) return { variation: -1, versionIsBlocked: !0 };
    }
  let M = k[C];
  if (M === void 0) return { variation: -1 };
  let x = A.findIndex((z) => z.key === M);
  if (x < 0) return { variation: -1 };
  return { variation: x };
}

function Gl(e, t) {
  return (t = t || 0), `${e}__${t}`;
}

function Kl(e, t) {
  return `${e}||${t}`;
}

function Cx(e, t, r) {
  if (!e.user.stickyBucketAssignmentDocs) return {};
  let { hashAttribute: o, hashValue: u } = kn(e, t),
    d = Kl(o, Wr(u)),
    { hashAttribute: _, hashValue: A } = kn(e, r),
    C = A ? Kl(_, Wr(A)) : null,
    k = {};
  if (C && e.user.stickyBucketAssignmentDocs[C])
    Object.assign(k, e.user.stickyBucketAssignmentDocs[C].assignments || {});
  if (e.user.stickyBucketAssignmentDocs[d]) Object.assign(k, e.user.stickyBucketAssignmentDocs[d].assignments || {});
  return k;
}

function vx(e, t, r, o) {
  let u = Kl(t, r),
    d =
      e.user.stickyBucketAssignmentDocs && e.user.stickyBucketAssignmentDocs[u]
        ? e.user.stickyBucketAssignmentDocs[u].assignments || {}
        : {},
    _ = { ...d, ...o },
    A = JSON.stringify(d) !== JSON.stringify(_);
  return { key: u, doc: { attributeName: t, attributeValue: r, assignments: _ }, changed: A };
}

function Ox(e, t) {
  let r = new Set(),
    o = t && t.features ? t.features : e.global.features || {},
    u = t && t.experiments ? t.experiments : e.global.experiments || [];
  return (
    Object.keys(o).forEach((d) => {
      let _ = o[d];
      if (_.rules) {
        for (let A of _.rules)
          if (A.variations) {
            if ((r.add(A.hashAttribute || "id"), A.fallbackAttribute)) r.add(A.fallbackAttribute);
          }
      }
    }),
    u.map((d) => {
      if ((r.add(d.hashAttribute || "id"), d.fallbackAttribute)) r.add(d.fallbackAttribute);
    }),
    Array.from(r)
  );
}

async function jf(e, t, r) {
  let o = jl(e, r);
  return t.getAllAssignments(o);
}

function jl(e, t) {
  let r = {};
  return (
    Ox(e, t).forEach((u) => {
      let { hashValue: d } = kn(e, u);
      r[u] = Wr(d);
    }),
    r
  );
}

async function Wf(e, t, r) {
  if (((e = { ...e }), e.encryptedFeatures)) {
    try {
      e.features = JSON.parse(await Cn(e.encryptedFeatures, t, r));
    } catch (o) {
      console.error(o);
    }
    delete e.encryptedFeatures;
  }
  if (e.encryptedExperiments) {
    try {
      e.experiments = JSON.parse(await Cn(e.encryptedExperiments, t, r));
    } catch (o) {
      console.error(o);
    }
    delete e.encryptedExperiments;
  }
  if (e.encryptedSavedGroups) {
    try {
      e.savedGroups = JSON.parse(await Cn(e.encryptedSavedGroups, t, r));
    } catch (o) {
      console.error(o);
    }
    delete e.encryptedSavedGroups;
  }
  return e;
}

function Yf(e) {
  let t = e.apiHost || "https://cdn.growthbook.io";
  return {
    apiHost: t.replace(/\/*$/, ""),
    streamingHost: (e.streamingHost || t).replace(/\/*$/, ""),
    apiRequestHeaders: e.apiHostRequestHeaders,
    streamingHostRequestHeaders: e.streamingHostRequestHeaders,
  };
}

function Ci(e, t) {
  return t.hashAttribute + t.hashValue + e.key + t.variationId;
}

function qf(e) {
  return Dt().swapRemoteGateReader(e);
}

function Dt() {
  return Px.of(G().host);
}

function fg() {
  return Dt().isEnabled();
}

function Snr() {
  {
    let e = Dt();
    if (e.isEnabled()) {
      let t = e.activationSource();
      return t ? `[Screen Reader Mode: on via ${t}]` : "[Screen Reader Mode: on]";
    }
  }
  return null;
}

function bnr() {
  Dt().markAnnouncementWritten(Date.now());
}

function A4t() {
  Dt().endStartupQuiet();
}

function wnr() {
  {
    let e = Dt().startupQuietOpenedAtMs();
    if (e === null) return 0;
    let t = Math.min(a.CLAUDE_AX_STARTUP_QUIET_MS ?? Mx, Dx),
      r = e + t - Date.now();
    return r > 0 ? r : 0;
  }
  return 0;
}

function Tnr() {
  return Math.min(a.CLAUDE_AX_PREPARK_MS ?? Ix, Nx);
}

function O6() {
  if (Dt().isEnabled()) return { CLAUDE_AX_SCREEN_READER: "1" };
  return {};
}

function Enr() {
  {
    let e = Dt();
    if (e.isEnabled()) return { screenReaderMode: !0, screenReaderActivationSource: ke(e.activationSource()) };
  }
  return {};
}

function L6(e) {
  Dt().queueAnnouncement(e);
}

function Anr() {
  return Dt().drainAnnouncements();
}

function Pi() {
  return xx.of(G());
}

function e_(e) {
  return wi.registerClientData(e);
}

function n_(e) {
  return wi.registerFeature(e);
}

function Cnr(e) {
  return Pi().registerModelFloor(e);
}

function vnr(e) {
  Pi().recordPromptModel(e);
}

function ki(e) {
  return e === "default" || e === "no_nudges" || e === "counter_steer" ? e : void 0;
}

function Lx(e) {
  let t = ki(a.CLAUDE_CODE_THISTLE_GREBE);
  if (t) return { steer: t, source: "env" };
  let r;
  try {
    r = ki(wi.clientData?.()?.[Qf]);
  } catch {}
  if (r) return { steer: r, source: "clientData" };
  let o = ki(wi.feature?.(Qf, null));
  if (o) return { steer: o, source: "growthbook" };
  let { promptModel: u } = e;
  if (u !== void 0) {
    let d = ki(e.modelSteerFloor?.(u));
    if (d) return { steer: d, source: "model" };
  }
  return { steer: "default", source: "default" };
}

function e0() {
  let e = Pi();
  if (e.latched !== void 0) return e.latched;
  let { steer: t, source: r } = Lx(e);
  if ((e.latch(t), t !== "default")) s("tengu_subagent_steer_applied", { steer: c(t), source: c(r) });
  return t;
}

function Rnr() {
  Pi().resetLatch();
}

function i_(e) {
  return o_.register(e);
}

function C4t() {
  let e = qkn();
  if (e !== null) return e;
  let t = o_.reader;
  if (!t) return !1;
  let { value: r, source: o } = t(Ux, !1);
  if (o === "fallback") return r;
  return Gkn(r), r;
}

function l_(e) {
  return a_.register(e);
}

function aNe() {
  let e = jkn();
  if (e !== null) return e;
  let t = a_.reader;
  if (!t) return !1;
  let { value: r, source: o } = t(zx, !1);
  if (o === "fallback") return r;
  return Wkn(r), r;
}

function b7e() {
  let e = null;
  return {
    get: () => e,
    set: (t) => {
      e = t;
    },
  };
}

function c_() {
  let e = b7e(),
    t = b7e();
  return {
    setToolDescribeResolver: e.set,
    resolveToolDescription: (r, o) => e.get()?.(r, o) ?? Promise.resolve(o),
    setToolDescribeInvalidator: t.set,
    invalidateToolDescriptions: () => t.get()?.(),
  };
}

function wn() {
  return Gx.of(G().host);
}

function M3() {
  wn().invalidateAll();
}

function d_() {
  wn().dropInFlightComposes();
}

function f_() {
  let e = wn();
  if (e.keepAcrossTokenChanges !== void 0) return e.keepAcrossTokenChanges;
  let t = Wl?.(Kx, !1);
  if (t === void 0) return !1;
  return (e.keepAcrossTokenChanges = t), t;
}

function g_(e) {
  return m_.register(e);
}

function Hnr() {
  let e = m_.reader;
  if (!e) return !0;
  try {
    return e("tengu_foamy_spring", !0) !== !1;
  } catch {
    return !0;
  }
}

function Q9t() {
  return Zr().init();
}

function d$() {
  Zr().reset();
}

function Mi(e) {
  return Zr().coreUserData(e);
}

function b_() {
  return Mi(!0);
}

function pre() {
  return Zr().gitEmail();
}

function Eer() {
  return Zr().gitUserName();
}

function S_(e) {
  return typeof e === "string" && e.length >= jx ? e : void 0;
}

function ql(e, t) {
  return e === null ? t : e;
}

function R_(e) {
  try {
    Promise.resolve(e()).catch((t) => {
      h(t);
    });
  } catch (t) {
    h(t);
  }
}

function KO(e, t, r) {
  return (o) => (o === e ? t : r);
}

function WO() {
  return {
    forceFlushTimeoutMillis: 30000,
    logRecordLimits: {
      attributeValueLengthLimit: jn.getNumberFromEnv("OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
      attributeCountLimit: jn.getNumberFromEnv("OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT") ?? 128,
    },
    includeTraceContext: !0,
  };
}

function YO(e) {
  return {
    attributeCountLimit:
      e.attributeCountLimit ??
      jn.getNumberFromEnv("OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT") ??
      jn.getNumberFromEnv("OTEL_ATTRIBUTE_COUNT_LIMIT") ??
      128,
    attributeValueLengthLimit:
      e.attributeValueLengthLimit ??
      jn.getNumberFromEnv("OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
      jn.getNumberFromEnv("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ??
      1 / 0,
  };
}

function QO(e, t) {
  let r = e.export.bind(e),
    o = e.forceFlush?.bind(e),
    u = e.shutdown.bind(e);
  if (
    ((e.export = (d, _) =>
      r(d, (A) => {
        if (A.code !== Gc.ExportResultCode.SUCCESS) t.record(A.error?.message ?? "unknown error");
        _({ code: Gc.ExportResultCode.SUCCESS });
      })),
    o)
  )
    e.forceFlush = async () => {
      await o(), t.logSummary();
    };
  return (
    (e.shutdown = async () => {
      await u(), t.logSummary();
    }),
    e
  );
}

function O2() {
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return !1;
  return !pr();
}

function JO() {
  return a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && !a.CLAUDE_CODE_BYOC_ENABLE_DATADOG;
}

function k2() {
  return a.CLAUDE_CODE_CUSTOM_OAUTH_URL !== void 0;
}

function zh() {
  return O2() || mi() !== null || yj() || k2();
}

function p$() {
  return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL;
}

function zk() {
  if (p$()) return !1;
  return yj();
}

function w2() {
  return { seconds: 0, nanos: 0 };
}

function ZO(e) {
  return e !== null && e !== void 0;
}

function P2() {
  return { account_id: 0, organization_uuid: "", account_uuid: "" };
}

function M2() {
  return { account_uuid: void 0, organization_uuid: void 0 };
}

function So(e) {
  return e !== null && e !== void 0;
}

function D2() {
  return { actor_id: "", repository_id: "", repository_owner_id: "" };
}

function I2() {
  return {
    platform: "",
    node_version: "",
    terminal: "",
    package_managers: "",
    runtimes: "",
    is_running_with_bun: !1,
    is_ci: !1,
    is_claubbit: !1,
    is_github_action: !1,
    is_claude_code_action: !1,
    is_claude_ai_auth: !1,
    version: "",
    github_event_name: "",
    github_actions_runner_environment: "",
    github_actions_runner_os: "",
    github_action_ref: "",
    wsl_version: "",
    github_actions_metadata: void 0,
    arch: "",
    is_claude_code_remote: !1,
    remote_environment_type: "",
    claude_code_container_id: "",
    claude_code_remote_session_id: "",
    tags: [],
    deployment_environment: "",
    is_conductor: !1,
    version_base: "",
    coworker_type: "",
    build_time: "",
    is_local_agent_mode: !1,
    linux_distro_id: "",
    linux_distro_version: "",
    linux_kernel: "",
    vcs: "",
    platform_raw: "",
    shell: "",
  };
}

function N2() {
  return { slack_team_id: "", is_enterprise_install: !1, trigger: "", creation_method: "" };
}

function x2() {
  return {
    event_name: "",
    client_timestamp: void 0,
    model: "",
    session_id: "",
    user_type: "",
    betas: "",
    env: void 0,
    entrypoint: "",
    agent_sdk_version: "",
    is_interactive: !1,
    client_type: "",
    process: void 0,
    additional_metadata: void 0,
    auth: void 0,
    server_timestamp: void 0,
    event_id: "",
    device_id: "",
    swe_bench_run_id: "",
    swe_bench_instance_id: "",
    swe_bench_task_id: "",
    email: "",
    agent_id: "",
    parent_session_id: "",
    agent_type: "",
    slack: void 0,
    team_name: "",
    skill_name: "",
    plugin_name: "",
    marketplace_name: "",
    head_sha: "",
    client_reported_auth: void 0,
    event_metadata_vars: void 0,
    mcp_server_name: "",
    mcp_tool_name: "",
  };
}

function L2(e) {
  let t = (e.seconds || 0) * 1000;
  return (t += (e.nanos || 0) / 1e6), new globalThis.Date(t);
}

function ek(e) {
  if (e instanceof globalThis.Date) return e;
  else if (typeof e === "string") return new globalThis.Date(e);
  else return L2(Eo.fromJSON(e));
}

function se(e) {
  return e !== null && e !== void 0;
}

function U2() {
  return {
    event_id: "",
    timestamp: void 0,
    experiment_id: "",
    variation_id: 0,
    variation_key: void 0,
    environment: "",
    user_attributes: void 0,
    experiment_metadata: void 0,
    device_id: "",
    auth: void 0,
    session_id: "",
    anonymous_id: "",
    event_metadata_vars: void 0,
    server_timestamp: void 0,
    client_reported_auth: void 0,
  };
}

function z2(e) {
  let t = (e.seconds || 0) * 1000;
  return (t += (e.nanos || 0) / 1e6), new globalThis.Date(t);
}

function tk(e) {
  if (e instanceof globalThis.Date) return e;
  else if (typeof e === "string") return new globalThis.Date(e);
  else return z2(Eo.fromJSON(e));
}

function nt(e) {
  return e !== null && e !== void 0;
}

function PSt(e) {
  return (
    e +
    `
` +
    Array.from({ length: Math.floor(Math.random() * 257) }, () => (Math.random() < 0.5 ? " " : "\t")).join("")
  );
}

function e3t({ url: e, payload: t, storageV5: r }) {
  if (as === null) return null;
  let o = b(t);
  if (typeof o !== "string") return null;
  let u = as(e, o, r);
  if (u === void 0 || !u.gzip) return null;
  return { body: F2(PSt(o)), headers: { "Content-Encoding": "gzip" } };
}

function t3t(e, t) {
  let r = e.toLowerCase();
  for (let o of t) if (typeof o === "string" && o.length > 0 && r.includes(o.toLowerCase())) return !0;
  return !1;
}

function H2(e) {
  let t = B2.exec(e)?.[1] ?? e;
  return [t, ...gj.map((r) => `${r}.${t}`)];
}

function V2(e) {
  if (!e.startsWith(nk)) return;
  let t = e.slice(nk.length);
  return ls.test(t) ? t : void 0;
}

function G2() {
  let e = [...fN];
  for (let t of Z4t.models) {
    e.push(t.id);
    for (let [r, o] of Object.entries(t.provider_ids)) {
      if (typeof o !== "string" || o === "") continue;
      if (r === "bedrock") e.push(...H2(o));
      else e.push(o);
    }
  }
  for (let t of [...e]) {
    let r = V2(t);
    if (r !== void 0) e.push(r);
  }
  return e;
}

function rk(e) {
  return K2.has(e.replace(j2, ""));
}

function Wc() {
  return _h("hipaa");
}

function fs(e, t) {
  let r = {};
  if (!e) return r;
  for (let o of Object.keys(e)) {
    let u = e[o];
    if (u === void 0 || u === "" || (Array.isArray(u) && u.length === 0)) continue;
    let d = Object.hasOwn(t, o) ? t[o] : void 0;
    if (d !== void 0) {
      if (d(u)) r[o] = u;
    } else if (typeof u === "string") r[o] = ak;
    else if (Array.isArray(u) && u.every((_) => typeof _ === "string")) r[o] = [ak];
  }
  return r;
}

function Yc(e) {
  return { ...fs(e, ck), env: fs(e.env, n4), auth: fs(e.auth, r4), additional_metadata: e.additional_metadata };
}

function $c(e) {
  return fs(e, c4);
}

function qc(e, t) {
  let r = {};
  if (!e) return r;
  for (let u of o4) {
    let d = e[u];
    if (typeof d === "number") r[u] = d;
  }
  let o = t !== void 0 && Object.hasOwn(sk, t) ? sk[t] : void 0;
  if (o)
    for (let [u, d] of Object.entries(o)) {
      let _ = Object.hasOwn(e, u) ? e[u] : void 0;
      if ((typeof _ === "number" || typeof _ === "boolean" || typeof _ === "string") && d(_)) r[u] = _;
    }
  return r;
}

function u4(e) {
  try {
    let t = JSON.parse(Buffer.from(e, "base64").toString("utf-8")),
      r = qc(t);
    if (Object.keys(r).length === 0) return;
    return Buffer.from(JSON.stringify(r)).toString("base64");
  } catch {
    return;
  }
}

function d4(e, t) {
  try {
    if (t === null || typeof t !== "object" || Array.isArray(t)) return;
    if (e === "ClaudeCodeInternalEvent") {
      let r = Yc(br.fromJSON(t));
      if (r.additional_metadata !== void 0) r.additional_metadata = u4(r.additional_metadata);
      return br.toJSON(r);
    }
    if (e === "GrowthbookExperimentEvent") return yr.toJSON($c(yr.fromJSON(t)));
  } catch {
    return;
  }
  return;
}

function _s(e) {
  if (!Wc()) return [...e];
  let t = [];
  for (let r of e) {
    if (!r || typeof r !== "object") continue;
    let o = d4(r.event_type, r.event_data);
    if (o !== void 0) {
      let u = { event_type: r.event_type, event_data: o };
      t.push(u);
    }
  }
  return t;
}

function _4(e) {
  let t = g4();
  return Xc(t, e) && Xc(m4(t), e);
}

function m4(e) {
  return uk();
}

function g4() {
  if (a.ANTHROPIC_BASE_URL) return gs(a.ANTHROPIC_BASE_URL);
  return p4;
}

function h4(e) {
  return Xc(uk(), e);
}

function uk() {
  try {
    return gs(zt().BASE_API_URL);
  } catch {
    return;
  }
}

function OEe(e, t) {
  if (!(("x-api-key" in e.headers && !_4(t)) || ("Authorization" in e.headers && !h4(t)))) return e;
  return {
    headers: {},
    error: "credential withheld: this telemetry endpoint is not the host it belongs to",
    reasonCode: "misrouted_credential",
  };
}

function Xc(e, t) {
  let r = E4(t) ? gs(t) : void 0;
  return e !== void 0 && e === r && S4(r);
}

function E4(e) {
  try {
    return new URL(e).protocol === "https:";
  } catch {
    return !1;
  }
}

function gs(e) {
  if (!e) return;
  try {
    return new URL(e).host;
  } catch {
    return;
  }
}

function S4(e) {
  return FT(`https://${e}`) || bFe.some((t) => gs(t) === e);
}

function hY(e) {
  return Ry(e.slice(0, ySn));
}

function yo() {
  return T4.of(G().host);
}

function b4() {
  return !1;
}

function y4() {
  return !1;
}

function he(e, t) {
  return Object.freeze({ name: e, header: t });
}

function r3t(e) {
  return pk.get(e);
}

function Jc(e) {
  return pk.get(e) ?? Object.freeze({ name: e, header: e });
}

function _C(e) {
  return e.map((t) => t.header);
}

function jde(e) {
  if (e === void 0) return !0;
  if (e.startsWith("agent:")) return !0;
  return O4.has(e);
}

function Il(e) {
  if (e === void 0) return;
  if (e.startsWith("repl_main_thread") || e === "sdk") return "main";
  if (e.startsWith("agent:") || e === "hook_agent") return "subagent";
  return "auxiliary";
}

function MEe(e) {
  return e === void 0 || Il(e) === "main";
}

function kSn(e) {
  let t = e.indexOf(":");
  return t > 0 ? e.slice(0, t) : void 0;
}

function af(e) {
  if (e?.startsWith("agent:custom:")) return "agent:custom";
  return e;
}

function As() {
  let e = Ne();
  return e === "firstParty" || NH(e) || e === "foundry";
}

function OV() {
  return a.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS || HSn();
}

function HSn() {
  return _h("hipaa");
}

function uw() {
  return As() && !OV();
}

function MSt(e, t) {
  if (!uw() || !s0(za(e))) return !1;
  if (hh(t, "per_turn_effort") === !0) return !0;
  return fk?.(t) === !0;
}

function ver(e, t) {
  if (!MSt(e, t)) return !1;
  let r = Ep();
  return !yA(r, GI) && !yA(r, Kk);
}

function _k(e) {
  uXe().mainLoopCanonical = e;
}

function AMe() {
  return uXe().mainLoopCanonical?.();
}

function _n(e) {
  if (e == null) return;
  return k4.test(e) || w4.test(e) ? Vo(e) : w("nonconforming");
}

function Rer(e, t) {
  return Vo(
    e
      .slice(0, t)
      .map((r) => _n(r))
      .join(","),
  );
}

function o3t(e) {
  let t = e
    .replace(/\[1m\]$/i, "")
    .replace(/^claude-/, "")
    .replaceAll("-", "_");
  return /^[a-z0-9_]{1,40}$/.test(t) ? Vo(t) : w("nonconforming");
}

function dr() {
  return P4.of(G().host);
}

function Ek(e) {
  if (dr().terminalEmitClaims.has(e)) return !1;
  return dr().terminalEmitClaims.add(e), !0;
}

function xSn(e) {
  return dr().terminalEmitClaims.delete(e);
}

function Or() {
  return I4.of(G().host);
}

function N4() {
  return Or().currentKey();
}

function fre(e) {
  Or().setEnqueueListener(e);
}

function Tu(e) {
  Or().enqueue(e);
}

function ISn(e) {
  return Or().hasQueued(e);
}

function NEe() {
  return Or().drain();
}

function PSn(e) {
  return Or().drainForSession(e);
}

function ys(e, t, r) {
  if (!Ek(e)) return;
  Tu({
    type: "system",
    subtype: "task_notification",
    task_id: e,
    tool_use_id: r?.toolUseId,
    status: t,
    output_file: r?.outputFile ?? "",
    summary: r?.summary ?? "",
    usage: r?.usage,
    ...(r?.skipTranscript !== void 0 && { skip_transcript: r.skipTranscript }),
    ...(r?.ambient && { ambient: !0 }),
  });
}

function Yr() {
  if (Ne() !== "firstParty") return !1;
  return !a.CLAUDE_CODE_DISABLE_FAST_MODE;
}

function Rs() {
  return a.CLAUDE_CODE_SKIP_FAST_MODE_ORG_CHECK;
}

function Zy(e) {
  if (!Yr()) return !1;
  return f$(e) === null;
}

function bk() {
  return eb()
    ? "Fast mode requires usage credits \xB7 /usage-credits to turn them on"
    : "Fast mode requires usage credits";
}

function Ak(e, t) {
  switch (e) {
    case "free":
      return t === "oauth"
        ? "Fast mode requires a paid subscription"
        : "Fast mode unavailable during evaluation. Please purchase credits.";
    case "preference":
      return "Fast mode has been disabled by your organization";
    case "extra_usage_disabled":
      return bk();
    case "network_error":
      return "Fast mode unavailable due to network connectivity issues";
    case "unknown":
      return "Fast mode is currently unavailable";
  }
}

function kT(e) {
  if (!Yr()) return Ne() !== "firstParty" ? "not_first_party" : "disabled_by_env";
  if (I("tengu_penguins_off", null) !== null) return "unknown";
  if (!kr(CMe())) {
    let r = e !== void 0 ? (e ?? eS()) : at();
    if (!(!ba() && lf(r) && kr(r))) return "model_not_allowed";
  }
  let t = ye("flagSettings")?.fastMode === !0;
  if (Le() && NQe() && !t) return "sdk_opt_in_required";
  if (ge.orgStatus.status === "pending" && !Rs() && !t) return "pending";
  if (ge.orgStatus.status === "disabled" && !Rs()) {
    if (Rk(ge.orgStatus.reason) && (a.CLAUDE_CODE_SKIP_FAST_MODE_NETWORK_ERRORS || t)) return null;
    return ge.orgStatus.reason;
  }
  return null;
}

function f$(e) {
  let t = kT(e);
  if (t === null) return null;
  let r = x4(t);
  return n(`Fast mode unavailable: ${r}`), r;
}

function x4(e) {
  switch (e) {
    case "not_first_party":
      return "Fast mode is only available when using the Anthropic API directly";
    case "disabled_by_env":
      return "Fast mode is not available";
    case "model_not_allowed":
      return `${yC()} is not in your organization's allowed models`;
    case "sdk_opt_in_required":
      return "Fast mode is not available in the Agent SDK";
    case "pending":
      return "Checking fast mode availability";
    case "unknown":
      return I("tengu_penguins_off", null) ?? Ak("unknown", "oauth");
    case "free":
    case "preference":
    case "extra_usage_disabled":
    case "network_error":
      return Ak(e, Yt() !== null ? "oauth" : "api-key");
  }
}

function yC() {
  return "Opus 5";
}

function CMe() {
  return "opus" + (YS() ? "[1m]" : "");
}

function Her(e, t) {
  if (!Yr()) return !1;
  return !!e && (sn() || Zy() || t);
}

function NSt(e) {
  if (!Yr()) return !1;
  if (!Zy(e)) return !1;
  if (!lf(e)) return !1;
  return DSn(Je());
}

function DSn(e) {
  if (e.fastMode !== !0) return !1;
  if (!e.fastModePerSessionOptIn) return !0;
  if (ye("policySettings")?.fastModePerSessionOptIn === !0) return !1;
  return ye("flagSettings")?.fastMode === !0;
}

function lf(e) {
  if (!Yr()) return !1;
  let t = e ?? eS(),
    r = Ot(t);
  if (hh(Ye(r), "fast_mode")) return !0;
  let o = r.toLowerCase();
  return o.includes("opus-4-8") || o.includes("opus-5");
}

function dw(e, t) {
  if (sn()) {
    if (e === null) return !!t;
    return !!t && lf(e);
  }
  if (!lf(e)) return !1;
  return !!t || NSt(e);
}

function pw(e, t) {
  if (!!e === t) return;
  s("tengu_fast_mode_toggled", {
    enabled: t,
    source: c(t ? "model_switch_restore" : "model_switch_downgrade"),
    remote: ba(),
  });
}

function xer(e) {
  return ge.cooldownTriggered.subscribe(e);
}

function Ier(e) {
  return ge.cooldownExpired.subscribe(e);
}

function s3t() {
  let e = ge.runtimeState;
  if (e.status === "cooldown" && Date.now() >= e.resetAt) {
    if (Yr() && !ge.hasLoggedCooldownExpiry)
      n("Fast mode cooldown expired, re-enabling fast mode"), ge.markCooldownExpiryLogged(), ge.cooldownExpired.emit();
    ge.clearCooldown();
  }
  return ge.runtimeState;
}

function Per(e, t) {
  if (!Yr()) return;
  ge.enterCooldown(e, t);
  let r = e - Date.now();
  n(`Fast mode cooldown triggered (${t}), duration ${Math.round(r / 1000)}s`),
    s("tengu_fast_mode_fallback_triggered", { cooldown_duration_ms: r, cooldown_reason: c(t) }),
    ge.cooldownTriggered.emit(e, t);
}

function VI() {
  ge.clearCooldown();
}

function Der(e) {
  if (ge.orgStatus.status === "disabled" && ge.orgStatus.source === "server" && !Rk(ge.orgStatus.reason)) return;
  ge.replaceOrgStatus({ status: "disabled", reason: "preference", source: "server" }),
    rn("userSettings", { fastMode: void 0 }, void 0, e),
    Ae((t) => (t.penguinModeOrgEnabled === !1 ? t : { ...t, penguinModeOrgEnabled: !1 }), e),
    ge.orgFastModeChange.emit(!1);
}

function Oer(e) {
  return ge.overageRejection.subscribe(e);
}

function L4(e) {
  switch (e) {
    case "out_of_credits":
      return "Fast mode disabled \xB7 usage credits exhausted";
    case "org_level_disabled":
    case "org_service_level_disabled":
      return "Fast mode disabled \xB7 usage credits turned off by your organization";
    case "org_level_disabled_until":
    case "org_spend_cap_reached":
      return "Fast mode disabled \xB7 usage credit limit reached";
    case "member_level_disabled":
      return "Fast mode disabled \xB7 usage credits turned off for your account";
    case "seat_tier_level_disabled":
    case "seat_tier_zero_credit_limit":
    case "member_zero_credit_limit":
      return "Fast mode disabled \xB7 usage credits not available for your plan";
    case "overage_not_provisioned":
    case "no_limits_configured":
      return bk();
    default:
      return "Fast mode disabled \xB7 usage credits not available";
  }
}

function D8e(e) {
  return e === "org_level_disabled_until" || e === "org_spend_cap_reached" || e === "out_of_credits";
}

function vMe() {
  ge.rearmCreditsExhaustedNotice();
}

function Ler(e, t) {
  let r = L4(e);
  if (
    (n(`Fast mode overage rejection: ${e ?? "unknown"} \u2014 ${r}`),
    s("tengu_fast_mode_overage_rejected", { overage_disabled_reason: oK(e ?? "unknown") }),
    D8e(e))
  ) {
    if (!ge.claimCreditsExhaustedNotice()) {
      n("Fast mode credits rejection already surfaced this turn, suppressing repeat");
      return;
    }
    Tu({
      type: "system",
      subtype: "notification",
      key: "fast-mode-overage-rejected",
      text: r,
      priority: "immediate",
      color: "error",
    });
  } else
    rn("userSettings", { fastMode: void 0 }, void 0, t),
      Ae((o) => (o.penguinModeOrgEnabled === !1 ? o : { ...o, penguinModeOrgEnabled: !1 }), t),
      ge.replaceOrgStatus({ status: "disabled", reason: "extra_usage_disabled", source: "server" }),
      ge.orgFastModeChange.emit(!1);
  ge.overageRejection.emit(r);
}

function R3() {
  return s3t().status === "cooldown";
}

function tA(e, t) {
  let r = Yr() && Zy() && !!t && lf(e);
  if (r && R3()) return "cooldown";
  if (r) return "on";
  return "off";
}

function z4(e) {
  return e !== null && e !== void 0 && U4.has(e) ? e : e === null || e === void 0 ? "preference" : "unknown";
}

function RMe(e) {
  return ge.orgFastModeChange.subscribe(e);
}

function a3t() {
  return ge.orgStatus.status === "disabled" && ge.orgStatus.source === "server";
}

function Rk(e) {
  return e === "network_error" || e === "unknown";
}

function eu(e) {
  let t = ge.replaceOrgStatus(e);
  if (e.status === "pending") return;
  let r = t.status !== "pending" ? t.status === "enabled" : ie().penguinModeOrgEnabled === !0,
    o = e.status === "enabled",
    u = t.status === "disabled" && e.status === "disabled" && t.reason !== e.reason;
  if (r !== o || u) ge.orgFastModeChange.emit(o);
}

async function F4(e) {
  let t = `${zt().BASE_API_URL}/api/claude_code_penguin_mode`,
    r =
      "accessToken" in e
        ? { Authorization: `Bearer ${e.accessToken}`, "anthropic-beta": ud }
        : { "x-api-key": e.apiKey };
  return (await st.get(t, { headers: r })).data;
}

function OSn() {
  if (!Yr()) return;
  if (ge.orgStatus.status !== "pending") return;
  if (Rs()) {
    ge.replaceOrgStatus({ status: "enabled" });
    return;
  }
  let e = !1,
    t = ie().penguinModeOrgEnabled === !0;
  ge.replaceOrgStatus(e || t ? { status: "enabled" } : { status: "disabled", reason: "unknown", source: "guess" });
}

async function mre(e, t) {
  if ((OSn(), Ct())) return;
  if (!Yr()) return;
  if (Rs()) {
    ge.replaceOrgStatus({ status: "enabled" });
    return;
  }
  if (ge.inflightPrefetch) return n("Fast mode prefetch in progress, returning in-flight promise"), ge.inflightPrefetch;
  let r = ZS();
  if (!(Yt()?.accessToken && Wd()) && !r) {
    if (a3t()) return;
    let A = !1,
      C = ie().penguinModeOrgEnabled === !0;
    eu(A || C ? { status: "enabled" } : { status: "disabled", reason: "preference", source: "guess" });
    return;
  }
  if (!ge.beginPrefetchWindow(Date.now(), B4)) {
    n("Skipping fast mode prefetch, fetched recently");
    return;
  }
  let u = async () => {
    let A = Yt(),
      C = A?.accessToken && Wd() ? { accessToken: A.accessToken } : r ? { apiKey: r } : null;
    if (!C) throw Error("No auth available");
    return F4(C);
  };
  async function d() {
    try {
      let A;
      try {
        A = await u();
      } catch (k) {
        if (
          st.isAxiosError(k) &&
          (k.response?.status === 401 ||
            (k.response?.status === 403 &&
              typeof k.response?.data === "string" &&
              k.response.data.includes("OAuth token has been revoked")))
        ) {
          let x = Yt()?.accessToken;
          if (x) await ym(x, t, e), (A = await u());
          else throw k;
        } else throw k;
      }
      let C = ge.orgStatus.status !== "pending" ? ge.orgStatus.status === "enabled" : ie().penguinModeOrgEnabled;
      if (
        (eu(
          A.enabled ? { status: "enabled" } : { status: "disabled", reason: z4(A.disabled_reason), source: "server" },
        ),
        C !== A.enabled)
      ) {
        if (!A.enabled) await rn("userSettings", { fastMode: void 0 }, void 0, e);
        await Ae((k) => ({ ...k, penguinModeOrgEnabled: A.enabled }), e);
      }
      n(`Org fast mode: ${A.enabled ? "enabled" : `disabled (${A.disabled_reason ?? "preference"})`}`);
    } catch (A) {
      let k = ie().penguinModeOrgEnabled === !0;
      if (!a3t()) eu(k ? { status: "enabled" } : { status: "disabled", reason: "network_error", source: "guess" });
      let M = ge.orgStatus.status === "disabled" ? `disabled (${ge.orgStatus.reason})` : "enabled (cached)";
      n(`Failed to fetch org fast mode status, standing on ${M}: ${A}`, { level: "error" }),
        s("tengu_org_penguin_mode_fetch_failed", {});
    }
  }
  let _ = d();
  return ge.trackInflightPrefetch(_), _.finally(() => ge.clearInflightPrefetch(_)), _;
}

function FEe(e, t, r) {
  Object.defineProperty(e, t, { value: r, enumerable: !0, writable: !0, configurable: !0 });
}

function Td(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0;
}

function $Ee(e) {
  if (!Yr()) return gre[e] ?? kMe;
  if (e === "claude-opus-4-8" || e === "claude-opus-5") return vs;
  return vk;
}

function Ok(e) {
  let t = Ql(e),
    r = t === void 0 ? void 0 : CTn(t);
  return r === void 0 ? void 0 : _re(kk(e, r));
}

function kk(e, t) {
  let { input: r, output: o, cache_write_5m: u, cache_write_1h: d, cache_read: _, web_search: A } = t;
  if (u === void 0 || _ === void 0 || A === void 0)
    throw new R(
      `model catalog entry '${e}' has incomplete pricing \u2014 baked entries need the full ModelCosts shape`,
      "model catalog entry has incomplete pricing",
    );
  return {
    inputTokens: r,
    outputTokens: o,
    promptCacheWriteTokens: u,
    ...(d !== void 0 && { promptCacheWrite1hTokens: d }),
    promptCacheReadTokens: _,
    webSearchRequests: A,
  };
}

function tu(e) {
  return V4.has(e);
}

function G4() {
  let e = {};
  for (let t of mN().models) {
    let r = CTn(t);
    if (r === void 0) continue;
    if (!tu(t.id))
      throw new R(
        `model catalog id '${t.id}' missing from CATALOG_MODEL_IDS \u2014 regenerate with 'bun run generate:model-catalog'`,
        "model catalog id missing from CATALOG_MODEL_IDS",
      );
    e[t.id] = kk(t.id, r);
  }
  return e;
}

function K4(e, t) {
  let r = t.cache_creation_input_tokens ?? 0,
    o = e.promptCacheWrite1hTokens,
    u = Math.min(t.cache_creation?.ephemeral_1h_input_tokens ?? 0, r);
  if (o === void 0 || u <= 0) return (r / 1e6) * e.promptCacheWriteTokens;
  return (u / 1e6) * o + ((r - u) / 1e6) * e.promptCacheWriteTokens;
}

function W4(e) {
  return e.inference_geo === "us" ? j4 : 1;
}

function UEe(e, t) {
  let r =
      (t.input_tokens / 1e6) * e.inputTokens +
      (t.output_tokens / 1e6) * e.outputTokens +
      ((t.cache_read_input_tokens ?? 0) / 1e6) * e.promptCacheReadTokens +
      K4(e, t),
    o = (t.server_tool_use?.web_search_requests ?? 0) * e.webSearchRequests;
  return r * W4(t) + o;
}

function l3t(e, t) {
  let r = Ye(e);
  if (t.speed === "fast") {
    if (r === "claude-opus-4-8" || r === "claude-opus-5") return vs;
    if (r === "claude-opus-4-6" || r === "claude-opus-4-7") return vk;
  }
  let o = gre[r];
  if (o) return o;
  let u = ie().additionalModelCostsCache,
    d = u ? (Td(u, e) ?? Td(u, r)) : void 0;
  if (d) return d;
  return Y4(e, r), gre[Ye(el())] ?? kMe;
}

function Y4(e, t) {
  s("tengu_unknown_model_cost", { model: _n(e), shortName: _n(t) }), r0n();
}

function Os() {
  let e = !1;
  try {
    let t = Ha().policy.orgPricing;
    if (t !== void 0) return t.value;
    let r = ye("policySettings"),
      o = Ha().policy;
    if (o.orgPricing === void 0) {
      let u = { value: void 0 };
      o.orgPricing = u;
      let d = cS(),
        _ = WH(d) || (d === "remote" && (_N() || BT() !== void 0)),
        A = _ ? r?.modelPricing : void 0,
        C = SO().length > 0 && !n5(),
        k = r?.modelPricing !== void 0 ? A : C ? void 0 : ZTn();
      if (((e = !0), (u.value = k && $4(k, r?.modelOverrides)), u.value))
        y("settings_model_pricing", {
          rows: u.value.exact.size,
          multiplier: u.value.multiplier,
          host: r?.modelPricing === void 0,
        });
      else if (!_ && r?.modelPricing)
        g("settings_model_pricing", d === "remote" ? "unverified_remote_cache" : "untrusted_origin");
    }
    return o.orgPricing.value;
  } catch (t) {
    if ((n(`modelPricing: ${t instanceof Error ? t.message : String(t)}; pricing at list`, { level: "error" }), e))
      p("settings_model_pricing", "compile_threw");
    return;
  }
}

function $4(e, t) {
  let r = new Map(),
    o = new Map();
  for (let [u, d] of Object.entries(e.overrides ?? {})) {
    let _ = {
        inputTokens: d.input,
        outputTokens: d.output,
        promptCacheReadTokens: d.cacheRead,
        promptCacheWriteTokens: d.cacheWrite,
        webSearchRequests: kMe.webSearchRequests,
      },
      A = hr(u).toLowerCase();
    if (r.has(A)) {
      n(`modelPricing: override '${u}' repeats an earlier row's key; the earlier row is used`, { level: "warn" });
      continue;
    }
    r.set(A, _);
    let C = q4(A);
    if (C === null) continue;
    if (o.has(C)) {
      n(
        `modelPricing: override '${u}' spells the same built-in model as an earlier row; it prices only its exact spelling, other spellings use the earlier row`,
        { level: "warn" },
      );
      continue;
    }
    o.set(C, _);
  }
  if (r.size === 0 && (e.multiplier ?? 1) === 1) return;
  return { multiplier: e.multiplier ?? 1, exact: r, builtin: o, adminOverrides: t };
}

function q4(e) {
  if (tu(e)) return e;
  let t = gj.find((o) => o !== "us" && e.startsWith(`${o}.anthropic.`)),
    r = Cpe(t ? `us${e.slice(t.length)}` : e) ?? (e.startsWith("anthropic.") ? Cpe(`us.${e}`) : void 0);
  return r !== void 0 && tu(r) ? r : null;
}

function nu(e, t) {
  return (
    e.exact.get(hr(t).toLowerCase()) ??
    (e.builtin.size > 0 ? e.builtin.get(Ye(t, { overridesMap: e.adminOverrides ?? $Y() ?? {} })) : void 0)
  );
}

function Mer() {
  return Os() !== void 0;
}

function Ner(e, t) {
  let r = Os(),
    o = r?.multiplier ?? 1,
    u = r ? nu(r, e) : void 0;
  if (u) return { usd: UEe(u, { ...t, inference_geo: null }) * o, pricing: "configured" };
  let d = X4(e);
  if (d) return { usd: UEe(d, t) * o, pricing: o !== 1 ? "configured" : "catalog" };
  return { usd: UEe(kMe, t) * o, pricing: "default" };
}

function hre(e) {
  let t = Ye(e);
  if (gre[t] !== void 0) return !0;
  let r = ie().additionalModelCostsCache;
  return !!r && (Td(r, e) !== void 0 || Td(r, t) !== void 0);
}

function Fer(e) {
  let t = Os(),
    r = e.includes("application-inference-profile") ? (pie(hr(e)) ?? e) : e;
  if (t && nu(t, r) !== void 0) return "managed";
  if (!hre(r)) return "unknown";
  return t && t.multiplier !== 1 ? "managed" : "list";
}

function eN(e, t) {
  let r = Os();
  if (!r) return UEe(l3t(e, t), t);
  let o = nu(r, e);
  return (o ? UEe(o, { ...t, inference_geo: null }) : UEe(l3t(e, t), t)) * r.multiplier;
}

function BEe(e, t, r) {
  let o = {
    input_tokens: t.inputTokens,
    output_tokens: t.outputTokens,
    cache_read_input_tokens: t.cacheReadInputTokens,
    cache_creation_input_tokens: t.cacheCreationInputTokens,
    ...(r?.speed !== void 0 && { speed: r.speed }),
    ...(r?.inferenceGeo !== void 0 && { inference_geo: r.inferenceGeo }),
    ...(r?.serverToolUse !== void 0 && { server_tool_use: r.serverToolUse }),
  };
  return eN(e, o);
}

function Ck(e) {
  if (Number.isInteger(e)) return `$${e}`;
  return `$${e.toFixed(2)}`;
}

function _re(e) {
  return `${Ck(e.inputTokens)}/${Ck(e.outputTokens)} per Mtok`;
}

function $er(e) {
  let t = Ye(e),
    r = gre[t];
  if (!r) return;
  return _re(r);
}

function Uer(e) {
  let { primaryUsage: t, usage: r, model: o, fallbackFrom: u } = e,
    d =
      t && r
        ? {
            inputTokens: r.inputTokens - t.inputTokens,
            outputTokens: r.outputTokens - t.outputTokens,
            cacheReadInputTokens: r.cacheReadInputTokens - t.cacheReadInputTokens,
            cacheCreationInputTokens: r.cacheCreationInputTokens - t.cacheCreationInputTokens,
          }
        : r;
  if (!d || !o) return;
  return BEe(o, d) + (t && u ? BEe(u, t) : 0);
}

function X4(e) {
  let t = Ye(e),
    r = gre[t];
  if (r) return r;
  let o = ie().additionalModelCostsCache;
  return (o ? (Td(o, e) ?? Td(o, t)) : void 0) || void 0;
}

function c3t({
  apiKey: e,
  getApiKeySource: t,
  authToken: r,
  getAuthTokenSource: o,
  defaultHeaders: u,
  authorizationSource: d,
  customHeaderNames: _,
  envSuppliedHeaderNames: A,
}) {
  if (e !== null && ru("x-api-key", e)) {
    let C = t();
    throw new iO(`Invalid X-Api-Key header value${vo[C]}: ${An(e)}.`, "X-Api-Key", C);
  }
  for (let [C, k] of Object.entries(u)) {
    if (typeof k !== "string" || !ru(C, k)) continue;
    let M = _.indexOf(C),
      x = `distinct header ${M + 1} of ${_.length} parsed from ANTHROPIC_CUSTOM_HEADERS`;
    if (Z4(C))
      throw new iO(
        M === -1
          ? `Invalid request header name: the HTTP runtime does not accept it (${ou(C.length)}).`
          : `Invalid name for ${x}: the HTTP runtime does not accept it (${ou(C.length)}).`,
        "other",
        M === -1 ? "claude-code" : "ANTHROPIC_CUSTOM_HEADERS",
      );
    let z = J4[C];
    if (z !== void 0 && A.has(C)) throw new iO(`Invalid ${C} header value${vo[z]}: ${An(k)}.`, "other", z);
    let W = C === "Authorization" && d !== null;
    if (C.toLowerCase() === "authorization") {
      let U = W ? d : M === -1 ? "unknown" : "ANTHROPIC_CUSTOM_HEADERS",
        B = W && k.startsWith("Bearer ") ? k.slice(7) : k;
      throw new iO(`Invalid Authorization header value${vo[U]}: ${An(B)}.`, "Authorization", U);
    }
    if (M !== -1)
      throw new iO(
        `Invalid value for ${x}: ${An(k)}.`,
        C.toLowerCase() === "x-api-key" ? "X-Api-Key" : "other",
        "ANTHROPIC_CUSTOM_HEADERS",
      );
    if (z !== void 0) throw new iO(`Invalid ${C} header value${vo[z]}: ${An(k)}.`, "other", z);
    throw new iO(
      Q4.has(C) ? `Invalid ${C} header value: ${An(k)}.` : `Invalid request header value: ${An(k)}.`,
      "other",
      "claude-code",
    );
  }
  if (r !== null && ru("authorization", `Bearer ${r}`)) {
    let C = o();
    throw new iO(`Invalid Authorization header value${vo[C]}: ${An(r)}.`, "Authorization", C);
  }
}

function ru(e, t) {
  try {
    return new Headers([[e, t]]), !1;
  } catch {
    return !0;
  }
}

function Z4(e) {
  try {
    return new Headers([[e, "x"]]), !1;
  } catch {
    return !0;
  }
}

function An(e) {
  let t = Hqt(e),
    r = xqt(e);
  return t === null ? `it contains a character the HTTP runtime does not accept (${ou(r.length)})` : Iqt(t, r);
}

function ou(e) {
  return e === 1 ? "1 character" : `${e} characters`;
}

function tX(e) {
  let t = e,
    r = "";
  try {
    r = eX();
  } catch {}
  if (r) t = t.replaceAll(r + "/", "~/").replaceAll(r + "\\", "~\\");
  let o = (u, d) => /https?:\/\/[^\s'",;|()]*$/i.test(u.slice(0, d));
  return (
    (t = t
      .replace(/([/\\](?:Users|home)[/\\])[^/\\\n]+/gi, (u, d, _, A) => (o(A, _) ? u : `${d}<user>`))
      .replace(/(\/(?:Volumes|mnt|media)\/)[^/\n]+/g, (u, d, _, A) => (o(A, _) ? u : `${d}<vol>`))
      .replace(/\b([A-Za-z]):[\\/]/g, "<drv>:\\")
      .replace(/\\\\[^\\]+\\[^\\\s'",:()]+/g, "<unc>")),
    t
  );
}

function rX(e) {
  return e.replace(nX, "<email>");
}

function aX(e) {
  return e.replace(oX, "<ip>").replace(iX, (t) => (sX.test(t) ? t : "<ip>"));
}

function dX(e) {
  return e
    .replace(lX, (t, r, o) => (o.replace(/\D/g, "").length >= 7 && !cX.test(o) ? `${r}<phone>` : `${r}${o}`))
    .replace(uX, "<phone>");
}

function Nk(e, t, r, o) {
  let u = [t, r, o];
  return u.reduce((_, A) => _ + (A.match(pX)?.length ?? 0), 0) >= 5
    ? `${e}:<redacted>`
    : `${e}:${u.join(":")}:<redacted>`;
}

function _X(e) {
  let t = e;
  for (let [r, o] of fX) t = typeof o === "string" ? t.replace(r, o) : t.replace(r, o);
  return t;
}

function mX(e) {
  return e
    .replace(/https?:\/\/\S+/gi, "<url>")
    .replace(
      /\b(?:ssh|git|gs|s3|file|s?ftp|wss?|postgres(?:ql)?|mysql|mongodb(?:\+srv)?|rediss?|amqps?):\/\/\S+/gi,
      "<url>",
    )
    .replace(/\b[\w.-]+\.(?:ant\.dev|anthropic\.com)\b[^\s"')\]]*/gi, "<url>");
}

function RX(e) {
  return e
    .replace(yX, "$1<path>'")
    .replace(gX, "~/<path>")
    .replace(hX, "<path>")
    .replace(EX, "<path>")
    .replace(SX, "<path>")
    .replace(TX, "<path>")
    .replace(AX, "<path>")
    .replace(bX, "<path>");
}

function vX(e) {
  return e.replace(CX, "<api-error-body>");
}

function OX(e) {
  return e
    .replace(/\bmcp__[A-Za-z0-9_-]+__([A-Za-z0-9_-]+)/g, "mcp__<server>__$1")
    .replace(/\bmcp__[A-Za-z0-9_-]+/g, "mcp__<server>")
    .replace(/\bplugin:[^\s:"')\],]+:[^\s"')\],]*/g, "plugin:<server>");
}

function wX(e) {
  try {
    return e.replace(kX, (t, r) => `${r}<http-body.${t.length - r.length}>`);
  } catch {
    return e;
  }
}

function cu(e) {
  return e.replace(PX, "$1<redacted>").replace(MX, "$1<redacted>$2");
}

function Lk(e) {
  return `<non-identifier.${e}>`;
}

function Uk(e) {
  return (e.length <= xk && DX.test(e)) || (e.length <= LX && xX.test(e)) ? e : Lk(e.length);
}

function Fk(e, t) {
  let r = e.slice(-HX),
    o = e.length - r.length + r.search(BX);
  return e.endsWith(t, o) ? o - t.length : -1;
}

function VX(e) {
  let t = Fk(e, UX);
  if (t < 0) return e;
  return (t <= xk ? Uk(e.slice(0, t)) : Lk(t)) + e.slice(t);
}

function GX(e) {
  let t = e.indexOf(wk),
    r = t + wk.length,
    o = Fk(e, zX),
    u = t < 0 ? e : Pk(e, r, o < r ? e.length : o);
  return FX.reduce((d, _) => {
    let A = d.indexOf(_);
    return A < 0 ? d : Pk(d, A + _.length, d.length);
  }, u);
}

function Pk(e, t, r) {
  return e.slice(0, t) + Uk(e.slice(t, r)) + e.slice(r);
}

function jX(e) {
  return e.replace(
    KX,
    (t, r, o, u) => `${r}${o || ": "}${u === void 0 ? "<redacted>" : `<domains.${u.split("', '").length}>`}`,
  );
}

function jk(e) {
  return Gk.some((t) => e.includes(` in ${t}: `));
}

function ZX(e) {
  return jk(e) ? e.replace(YX, "$1<redacted>'$2") : e;
}

function e6(e) {
  return (
    jk(e)
      ? e
          .replace(WX, (r, o, u, d) => `${o}<redacted>'${u}${d ?? "<redacted>"}`)
          .replace($X, (r, o, u) => `${o}${u ?? "<redacted>"}`)
      : e
  )
    .replace(qX, (r, o, u) => `${o}<redacted>${u ?? ""}`)
    .replace(XX, (r, o, u) => `${o}<redacted>'${u ?? ""}`)
    .replace(QX, "$1<redacted>")
    .replace(JX, (r, o, u) => `${o}<redacted>${u ?? ""}`);
}

function n6(e) {
  return e.replace(t6, (t, r, o, u, d) => Nk(r, o, u, d));
}

function i6(e) {
  let t = e.replace(r6, "$1's altnames: <redacted>"),
    r = o6.exec(t);
  if (!r) return t;
  let [, o, u, d, _, A] = r,
    C = t.slice(0, r.index);
  if (o !== void 0) return `${C}${o}<host>${u}<redacted>`;
  if (d !== void 0) return `${C}${d}<ip>${_}<redacted>`;
  return `${C}${A === void 0 ? "" : `${A} `}<redacted>`;
}

function a6(e) {
  return e.replace(s6, "$1<redacted>");
}

function g6(e) {
  return (m6.test(e) ? e.replace(p6, "$1<redacted>$2") : e).replace(f6, "$1<redacted>$2");
}

function h6(e) {
  let t = e.includes("spawn") ? g6(e) : e;
  return t.includes("Executable not found in $PATH: ") ? t.replace(_6, "$1<redacted>") : t;
}

function iu(e) {
  let t = e.search(G6) + 1;
  if (t === 0) return e;
  let r = e.slice(0, t),
    o = e.slice(t),
    u = K6.exec(r);
  if (u) return `<ip>${u[1] ?? ""}${o}`;
  if (Dk.test(r)) return `<ip>${o}`;
  if (Dk.test(e)) return "<ip>";
  if (j6.test(r)) return e;
  return `<host>${W6.exec(r)?.[0] ?? ""}${o}`;
}

function e3(e, t) {
  if (e.includes("://")) return -1;
  let r = e.search(X6);
  if (r > 0) return r;
  let o = e.search(Q6);
  if (o >= 0) return o;
  let u = t ? e.search(J6) : -1;
  if (u >= 0) return u;
  let d = e.search(Z6);
  return d > 0 ? d : -1;
}

function su(e, t) {
  if ($6.test(e)) return e;
  let r = e3(e, t);
  if (r >= 0) return iu(e.slice(0, r)) + e.slice(r);
  let o = q6.exec(e);
  if (o) {
    let [, u = "", d = "", _ = ""] = o;
    return (u === "" ? "" : iu(u)) + d + _;
  }
  return iu(e);
}

function r3(e, t, r) {
  let o = t3.exec(t);
  return o !== null && o.index < e.length ? su(e.slice(0, o.index), !1) + e.slice(o.index) : su(e, r);
}

function o3(e) {
  return e.replace(V6, (t, r, o, u, d, _) => {
    let A = _ + t.length,
      C = e[A] === "\\";
    return (
      r +
      (o ?? "") +
      su(u, d === void 0 && C) +
      (d === void 0 ? "" : ` ${r3(d.slice(1), e.slice(A - d.length + 1, A + n3), C)}`)
    );
  });
}

function s3(e) {
  return e.replace(i3, "$1<path>");
}

function Ber(e, t) {
  let r = e;
  return [r?.path, r?.dest]
    .filter((o) => typeof o === "string" && o.length > 0)
    .sort((o, u) => u.length - o.length)
    .reduce((o, u) => o.split(u).join("<path>"), t);
}

function m$(e) {
  let t = VX(e),
    r = t.length > Ik ? t.slice(0, Ik) + "\u2026<truncated>" : t,
    o = ZX(r),
    u = wX(o),
    d = jX(u),
    _ = cu(d),
    A = GX(_),
    C = i6(A),
    k = a6(C),
    M = h6(k),
    z = o3(M)
      .replace(/:\/\/[^\s/]*@(?=[^@\s]*(?:[/:\s]|$))/g, "://<userinfo>@")
      .replace(/\b[\w][\w.+-]*@[\w.-]+:[^\s"')\]]*(?:\/[^\s"')\]]*|\.git\b)/gi, "<url>"),
    W = OX(dX(_X(aX(rX(tX(z))))));
  return n6(s3(e6(RX(mX(vX(W))))));
}

function _u() {
  if (!a.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY) return !1;
  if (Ne() !== "firstParty") return !1;
  if (jo()) return !1;
  if (!a.ANTHROPIC_BASE_URL) return !1;
  return !0;
}

function pu() {
  return iw(be(), "cache");
}

function mu() {
  return iw(pu(), "gateway-models.json");
}

function fu() {
  return Te.cache("gateway-models", "gateway-models.json");
}

function Is(e) {
  let t = u3().safeParse(Ut(e, !1));
  return t.success ? t.data : null;
}

function Oo() {
  return Ac().gatewayModelsByCachePath;
}

function aw(e, t = Ac().gatewayModelsStorageV5) {
  let r = Oo();
  if (r.has(e)) return r.get(e) ?? null;
  if (t) return null;
  let o;
  try {
    let u = a3(e, "utf-8");
    o = Is(u);
  } catch {
    o = null;
  }
  return r.set(e, o), o;
}

async function jer(e) {
  if (!e || !_u()) return;
  let t = mu();
  if (Oo().has(t)) return;
  let r = await e.read([fu()]);
  if (!r.ok) {
    n(`[gatewayDiscovery] prime read failed: ${r.error.code}`);
    return;
  }
  let o = r.value.items[0];
  if (!o.found) return;
  let u = Is(Buffer.from(o.value).toString("utf-8"));
  if (u === null) return;
  let d = Ac();
  if (!d.gatewayModelsByCachePath.has(t)) d.gatewayModelsByCachePath.set(t, u);
  d.gatewayModelsStorageV5 = e;
}

function jEe() {
  if (!_u()) return [];
  let e = aw(mu());
  if (!e || e.baseUrl !== a.ANTHROPIC_BASE_URL) return [];
  let t = ow.get(e);
  if (t) return t;
  let r = e.models.map((o) => ({
    value: o.id,
    label: _R(o.display_name ?? "") || _R(o.id),
    description: "From gateway",
  }));
  return ow.set(e, r), r;
}

async function Wer(e) {
  if (!_u()) {
    if (a.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY) {
      let t = Ne();
      n(
        `[gatewayDiscovery] skipped: ${t !== "firstParty" ? `provider is ${t}` : a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL ? "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL is set" : a.ANTHROPIC_BASE_URL ? "ANTHROPIC_BASE_URL is a first-party host" : "ANTHROPIC_BASE_URL is unset"}`,
      );
    }
    return;
  }
  if (Ct()) {
    n("[gatewayDiscovery] skipped: nonessential traffic is disabled");
    return;
  }
  try {
    let t = a.ANTHROPIC_BASE_URL;
    if (!t) return;
    let r = a.ANTHROPIC_AUTH_TOKEN,
      o = Vbn(),
      u = r || !o ? void 0 : (await ape(Le()))?.trim(),
      d = r || u,
      _ = ZS()?.trim() || u;
    if (!d && !_) {
      n(
        o
          ? "[gatewayDiscovery] skipped: no credential (ANTHROPIC_AUTH_TOKEN, apiKeyHelper, or API key)"
          : "[gatewayDiscovery] skipped: apiKeyHelper requires workspace trust",
      );
      return;
    }
    let A = {};
    for (let ee of (a.ANTHROPIC_CUSTOM_HEADERS ?? "").split(/\r?\n/)) {
      let de = ee.indexOf(":");
      if (de <= 0) continue;
      let me = ee.slice(0, de).trim(),
        Ce = ee.slice(de + 1).trim();
      if (me && Ce) A[me] = Ce;
    }
    let C = {
      ...(d && { Authorization: `Bearer ${d}` }),
      ...(_ && { "x-api-key": _ }),
      "anthropic-version": "2023-06-01",
      "User-Agent": Ka(),
    };
    for (let [ee, de] of Object.entries(A)) {
      for (let me of Object.keys(C)) if (me.toLowerCase() === ee.toLowerCase()) delete C[me];
      C[ee] = de;
    }
    let k = Object.keys(A),
      M = new Set(k.map((ee) => ee.toLowerCase()));
    c3t({
      apiKey: M.has("x-api-key") ? null : _ || null,
      getApiKeySource: () => {
        let { source: ee } = py({ skipRetrievingKeyFromApiKeyHelper: !0 });
        return ee !== "none" ? ee : u ? "apiKeyHelper" : "unknown";
      },
      authToken: null,
      getAuthTokenSource: () => "unknown",
      defaultHeaders: C,
      authorizationSource: !d || M.has("authorization") ? null : r ? "ANTHROPIC_AUTH_TOKEN" : "apiKeyHelper",
      customHeaderNames: k,
      envSuppliedHeaderNames: new Set(),
    });
    let x = `${t.replace(/\/+$/, "")}/v1/models?limit=1000`,
      z = await fetch(x, {
        method: "GET",
        headers: C,
        redirect: "error",
        signal: AbortSignal.timeout(c3),
        ...Ri({ url: x }),
      });
    if (!z.ok) {
      n(`[gatewayDiscovery] non-OK status ${z.status}`);
      return;
    }
    let W = await z.json(),
      U = f({ data: H(sw()) }).safeParse(W);
    if (!U.success) {
      n("[gatewayDiscovery] response body failed validation");
      return;
    }
    let B = U.data.data.filter((ee) => /(claude|anthropic)/i.test(ee.id));
    if (B.length === 0) {
      n("[gatewayDiscovery] 0 usable models after filter");
      return;
    }
    let F = mu();
    if (O() && e !== void 0) {
      let ee = await e.read([fu()]),
        de = ee.ok && ee.value.items[0]?.found ? Is(Buffer.from(ee.value.items[0].value).toString("utf-8")) : null;
      if (!ee.ok) n(`[gatewayDiscovery] cache read failed: ${ee.error.code}`);
      else Oo().set(F, de);
      if (de && de.baseUrl === t && bs(de.models, B)) return;
      let me = b({ baseUrl: t, fetchedAt: Date.now(), models: B });
      try {
        await rw(pu(), { recursive: !0 });
      } catch (Ie) {
        n(`[gatewayDiscovery] cache folder could not be made: ${Ie instanceof Error ? Ie.message : "unknown"}`);
        return;
      }
      let Ce = await e.write(fu(), me, { publishDiscipline: "inPlace", mode: 384 });
      if (!Ce.ok) {
        n(`[gatewayDiscovery] cache write failed: ${Ce.error.code}`);
        return;
      }
      Oo().set(F, Is(me)), n(`[gatewayDiscovery] cached ${B.length} models`);
      return;
    }
    let Q = aw(F);
    if (Q && Q.baseUrl === t && bs(Q.models, B)) return;
    await rw(pu(), { recursive: !0 }),
      await l3(F, b({ baseUrl: t, fetchedAt: Date.now(), models: B }), { encoding: "utf-8", mode: 384 }),
      Oo().delete(F),
      n(`[gatewayDiscovery] cached ${B.length} models`);
  } catch (t) {
    n(
      t instanceof iO
        ? `[gatewayDiscovery] skipped: ${t.message}`
        : `[gatewayDiscovery] failed: ${t instanceof Error ? cu(t.message) : "unknown"}`,
    );
  }
}

function ko(e) {
  let t = Ye(pn(e)),
    r = Ne(),
    o = e.trim().toLowerCase(),
    u = Cc(o) ? pn(o).trim() : o,
    d = ra() && zde(u) && LMe(),
    _ = Object.hasOwn(lw, t) ? lw[t] : void 0;
  if (_) {
    let A = _.retirementDates[r];
    if (A || d) {
      let C = { kind: "none" };
      if (d && _.remappedTo) C = { kind: "remap", remappedTo: _.remappedTo };
      else if (A) {
        let k = new Date(A);
        C = { kind: "retirement", retirementDate: A, isPast: !Number.isNaN(k.getTime()) && k < new Date() };
      }
      return { isDeprecated: !0, modelName: _.modelName, copy: C };
    }
  }
  return { isDeprecated: !1 };
}

function _w(e) {
  return ko(e).isDeprecated;
}

function _Y(e) {
  if (ra() && zde(Ye(pn(e))) && LMe()) return !0;
  let t = ko(e);
  if (!t.isDeprecated) return !1;
  switch (t.copy.kind) {
    case "remap":
      return !0;
    case "retirement":
      return t.copy.isPast;
    case "none":
      return !1;
  }
}

function qer(e) {
  if (!e) return null;
  let t = ko(e);
  if (!t.isDeprecated) return null;
  switch (t.copy.kind) {
    case "remap":
      return { message: `${t.modelName} now runs as ${t.copy.remappedTo}`, action: "/model to change" };
    case "retirement":
      return {
        message: `${t.modelName} ${t.copy.isPast ? "retired" : "retires"} ${t.copy.retirementDate}`,
        action: "/model to switch",
      };
    case "none":
      return null;
  }
}

function FSt(e) {
  if (!e) return null;
  let t = ko(e);
  if (!t.isDeprecated || t.copy.kind !== "remap") return LSn(e);
  let r = wl(),
    o = $u(r) ?? r;
  return `\u26A0 ${t.modelName.replace(/^Claude /, "")} remaps to ${o}. CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP=1 opts out`;
}

function LSn(e) {
  if (!e) return null;
  let t = ko(e);
  if (!t.isDeprecated) return null;
  switch (t.copy.kind) {
    case "remap": {
      let r = wl(),
        o = $u(r) ?? r;
      return `\u26A0 ${e.trim()} is automatically remapped to ${o} (${t.copy.remappedTo}). Set CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP=1 to keep the requested model.`;
    }
    case "retirement": {
      let r = t.copy.isPast ? "was retired on" : "will be retired on";
      return `\u26A0 ${t.modelName} ${r} ${t.copy.retirementDate}. Consider switching to a newer model.`;
    }
    case "none":
      return null;
  }
}

function bw(e) {
  return Ye(pn(e.trim().toLowerCase()));
}

function MSn(e) {
  let t = new Set();
  for (let r of e ?? []) if (!r.entitled) t.add(bw(r.apiName));
  return t;
}

function d3() {
  let e;
  try {
    e = Je().modelOverrides;
  } catch {
    e = void 0;
  }
  return [e, $Y()];
}

function p3(e, t) {
  for (let r of d3()) {
    if (r === void 0) continue;
    for (let [o, u] of Object.entries(r)) {
      if (!z6(u, e)) continue;
      if (t.has(bw(o))) return !0;
    }
  }
  return !1;
}

function EH(e, t) {
  if (t.size === 0) return !1;
  let r = pn(e.trim().toLowerCase()),
    o = jm(r) ? Ot(r) : r;
  return t.has(Ye(o)) || p3(o, t);
}

function AH() {
  let e = Ne();
  if (e !== "firstParty" && e !== "gateway") return new Set();
  return MSn(A7e());
}

function WEe() {
  return Ne() === "firstParty" && Yl() && !Wd() && ZS() === null && A7e().length === 0;
}

function qEe() {
  if (Ne() !== "firstParty") return null;
  return Obt();
}

function $St(e) {
  let t = Object.keys(so);
  for (let r = t.length - 1; r >= 0; r--) {
    let o = so[t[r]].firstParty;
    if (gu(Ye(o), e) && kr(o) && !_Y(o) && !_w(o)) return o;
  }
  return null;
}

function gu(e, t) {
  for (let r = e.indexOf(t); r !== -1; r = e.indexOf(t, r + 1)) {
    let o = r === 0 || !/[a-z0-9]/i.test(e[r - 1]),
      u = r + t.length,
      d = u === e.length || !/[a-z0-9]/i.test(e[u]);
    if (o && d) return !0;
  }
  return !1;
}

function f3(e, t, r) {
  if (jm(e)) {
    let o = r ? g3t(e) : Ot(e).toLowerCase();
    return o !== null && gu(o, t);
  }
  return gu(e, t);
}

function hw(e, t) {
  if (!e.startsWith(t)) return !1;
  return e.length === t.length || e[t.length] === "-";
}

function _3(e, t) {
  let r = jm(e) ? Ot(e).toLowerCase() : e;
  if (hw(r, t)) return !0;
  if (!t.startsWith("claude-") && hw(r, `claude-${t}`)) return !0;
  return !1;
}

function Tw(e, t) {
  for (let r of t) {
    if (NT(r)) continue;
    let o = r.indexOf(e);
    if (o === -1) continue;
    let u = o + e.length;
    if (u === r.length || r[u] === "-") return !0;
  }
  return !1;
}

function Aw(e, t) {
  for (let [r, o] of Object.entries(t)) if (z6(o, e)) return r;
  return e;
}

function Ns(e, t) {
  let r = pn(Ot(e).trim().toLowerCase()),
    o = g3t(e);
  if (o !== null && pn(o) === r) return !0;
  if (jm(r)) return !1;
  return kr(r, { ...t, envFreeAliasResolution: !0 });
}

function kr(e, t) {
  if (t?.allowlist === void 0) {
    try {
      if (SO().length > 0 && !n5()) return !1;
    } catch {
      return !1;
    }
    if (!t?.skipEntitlementDenyOverlay && EH(e, AH())) return !1;
  }
  let r = En() || {},
    o = t?.allowlist ?? r.availableModels;
  if (!o) return !0;
  if (o.length === 0) return !1;
  let u = o.map((C) => pn(C.trim().toLowerCase())),
    d = pn(e.trim().toLowerCase());
  if (u.includes(d) && !NT(d)) {
    if (t?.envFreeAliasResolution || !jm(d) || Ns(d, t)) return !0;
  }
  let _;
  if (t?.overridesMap !== void 0) _ = Aw(e, t.overridesMap);
  else if (t?.ignoreModelOverrides) _ = e;
  else {
    let C;
    try {
      C = ye("policySettings");
    } catch {
      return !1;
    }
    _ = C?.availableModels !== void 0 ? Aw(e, C.modelOverrides ?? $Y() ?? {}) : SMe(e);
  }
  let A = pn(_.trim().toLowerCase());
  if (u.includes(A)) {
    if (!NT(A) || !Tw(A, u)) {
      if (t?.envFreeAliasResolution || A !== d || !jm(A) || Ns(A, t)) return !0;
    }
  }
  for (let C of u) if (NT(C) && !Tw(C, u) && f3(A, C, t?.envFreeAliasResolution)) return !0;
  if (jm(A)) {
    let C = Ot(A).toLowerCase();
    if (u.includes(C)) return !0;
  }
  for (let C of u)
    if (!NT(C) && jm(C)) {
      let k = t?.envFreeAliasResolution ? g3t(C) : Ot(C).toLowerCase();
      if (k !== null && pn(k) === A) return !0;
    }
  for (let C of u)
    if (!NT(C) && !jm(C)) {
      if (_3(A, C)) return !0;
    }
  return !1;
}

function yw() {
  let e = ie().cachedExtraUsageDisabledReason;
  if (e === void 0) return !1;
  if (e === null) return !0;
  switch (e) {
    case "out_of_credits":
      return !0;
    case "overage_not_provisioned":
    case "org_level_disabled":
    case "org_level_disabled_until":
    case "seat_tier_level_disabled":
    case "member_level_disabled":
    case "seat_tier_zero_credit_limit":
    case "group_zero_credit_limit":
    case "member_zero_credit_limit":
    case "org_service_level_disabled":
    case "no_limits_configured":
    case "fetch_error":
    case "unknown":
      return !1;
    default:
      return !1;
  }
}

function Rw() {
  return Tt() && (!!a.ANTHROPIC_UNIX_SOCKET || jo());
}

function CH() {
  if (nN()) return !1;
  if (Rw()) return yw();
  return !0;
}

function sO() {
  if (nN()) return !1;
  if (Rw()) return yw();
  return !0;
}

function Ow() {
  return (
    B0n() ?? {
      sonnet:
        a.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 &&
        a.ANTHROPIC_DEFAULT_SONNET_MODEL !== a.CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT,
      opus:
        a.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 &&
        a.ANTHROPIC_DEFAULT_OPUS_MODEL !== a.CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT,
    }
  );
}

function kw() {
  let e = Ow(),
    t = wo().state !== "inactive" || En()?.enforceAvailableModels === !0;
  return e.sonnet && !e.opus && !t;
}

function xMe() {
  if (a.ANTHROPIC_SMALL_FAST_MODEL !== void 0) return !0;
  let e = Ne(),
    t = (e === "firstParty" && (jo() || unr())) || NH(e);
  return a.ANTHROPIC_DEFAULT_HAIKU_MODEL !== void 0 || t;
}

function gm() {
  let e = a.ANTHROPIC_SMALL_FAST_MODEL;
  if (e !== void 0) return XS(e);
  if (!xMe()) {
    let t = Ne();
    if ((t === "bedrock" || t === "vertex") && cf() == null && !bre()) {
      let r = Ow();
      if (!r.opus || r.sonnet) {
        let o = df();
        if ((nA(o) ?? kr(o)) && !EH(o, AH())) return o;
      }
    }
    return at();
  }
  return MV();
}

function Bs(e, t) {
  return Ql(e)?.family === t;
}

function O8e(e) {
  return Bs(e, "fable");
}

function L8e(e) {
  return Bs(e, "mythos");
}

function IMe(e, t) {
  let r = zp();
  return Lp(t, r) < Lp(e, r);
}

function u3t(e, t) {
  let r = zp(),
    o = Lp(e, r);
  if (Lp(t, r) >= o) {
    if (Cc(t)) {
      if (!Cc(e)) {
        let d = JI(t);
        return Lp(d, r) >= o ? d : void 0;
      }
      if (Ver(t)) return;
    }
    return t;
  }
  if (!Cc(e)) return;
  let u = Xe(t);
  return k3(u) && Lp(u, r) >= o ? u : void 0;
}

function w6(e) {
  return Bs(e, "opus");
}

function NSn(e) {
  return Bs(e, "sonnet");
}

function cf() {
  let e = nc();
  if (e !== void 0) return USt(e);
  return d3t();
}

function d3t() {
  let e = CR(),
    t = process.env.ANTHROPIC_MODEL,
    r = e !== void 0 ? e : t || En()?.model || void 0;
  return USt(r);
}

function USt(e) {
  if (e && !kr(e)) return E_(e) ?? void 0;
  return e;
}

function at() {
  let e = cf();
  if (e !== void 0 && e !== null) return Ot(e);
  return el();
}

function ww() {
  let e = mN().best;
  if (e !== void 0 && Object.hasOwn(zs, e) && zs[e]?.available()) return e;
  return "opus";
}

function eSr() {
  let e = zs[ww()];
  if (e !== void 0) {
    let t = e.defaultModel(),
      r = Ac();
    if (r.resolvingBestModel) return t;
    r.resolvingBestModel = !0;
    try {
      if (kr(t)) return t;
    } finally {
      r.resolvingBestModel = !1;
    }
  }
  return wl();
}

function yre(e) {
  return e.includes("claude-fable-5");
}

function $8e(e) {
  return e.includes("claude-mythos-5");
}

function zEe() {
  if (
    Ne() === "firstParty" &&
    jo() &&
    $3().some((t) => t.disabled === !0 && typeof t.value === "string" && yre(t.value))
  )
    return !1;
  if (a.ANTHROPIC_DEFAULT_FABLE_MODEL) return !0;
  let e = Ne();
  if (e !== "firstParty" && e !== "gateway") return !1;
  if (e === "firstParty" && !jo()) return !1;
  return $3().some((t) => t.disabled !== !0 && typeof t.value === "string" && yre(t.value));
}

function p3t() {
  if (Ne() !== "firstParty" || !jo()) return !1;
  return ($3() ?? []).some((e) => e.disabled !== !0 && typeof e.value === "string" && $8e(e.value));
}

function KI(e) {
  let t = a.ANTHROPIC_DEFAULT_FABLE_MODEL;
  if (!t) return !1;
  return pn(e) === pn(t);
}

function uf(e) {
  return pn(Ye(e)) === "claude-fable-5" || KI(e);
}

function U8e(e) {
  return pn(Ye(e)) === "claude-mythos-5";
}

function Wde(e) {
  return pn(Ye(e)) === "claude-opus-5";
}

function B8e(e) {
  let t = a.ANTHROPIC_DEFAULT_OPUS_MODEL;
  if (t === void 0) {
    let r = fc();
    if (((t = r.opus5), Ne() === "firstParty")) t = vTn.map((o) => r[o]).find((o) => kr(o)) ?? r.opus5;
  }
  return Pw(XS(t), e);
}

function Pw(e, t) {
  if ((Cc(t) || A_(t)) && !Cc(e) && !Vde(Ye(e))) return XS(e + "[1m]");
  return e;
}

function $Sn(e) {
  let t = bC(e);
  if (t === "claude-sonnet-4-6" || t === "claude-sonnet-4-5" || t.startsWith("claude-haiku-")) return;
  let r = a.ANTHROPIC_DEFAULT_SONNET_MODEL,
    u = r !== void 0 && r === a.CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT ? void 0 : r;
  if (u !== void 0 && !((nA(u) ?? kr(u)) && !EH(u, AH()))) return;
  if (u === void 0) {
    let d = fc().sonnet5;
    if (!kr(d)) return;
    u = d;
  }
  return Pw(XS(u), e);
}

function pRr() {
  return XS(fc().sonnet5 + "[1m]");
}

function USn() {
  let e = fc();
  return vTn.map((t) => e[t]);
}

function T6(e, t) {
  if (Ne() !== "firstParty" || !jo()) return null;
  let r = jm(e.toLowerCase().trim()) ? Ot(e) : e,
    o = t?.ignoreModelOverrides ? (C) => SC(pn(C.toLowerCase()).trim()) : m3,
    u = o(e),
    d = o(r),
    _ = $3().find((C) => C.disabled === !0 && typeof C.value === "string" && (o(C.value) === u || o(C.value) === d));
  if (_) return { reason: "disabled", description: _.description };
  let A = t?.ignoreModelOverrides ? SC(r) : Ye(r);
  if (!zEe() && A === "claude-fable-5") return { reason: "absent", displayName: XI(r) ?? "That model" };
  if (!p3t() && L8e(A)) return { reason: "absent", displayName: XI(r) ?? "That model" };
  return null;
}

function m3(e) {
  return Ye(pn(e.toLowerCase()).trim());
}

function g3(e) {
  return e.toLowerCase().includes("fable");
}

function BSn(e) {
  return;
}

function fRr(e) {
  return;
}

function BSt(e) {
  return !1;
}

function Hs(e, t, r = Ne()) {
  let o = Drr(e, h3[r]);
  if (o === void 0) return;
  let u = Ql(o)?.provider_ids.first_party,
    d = u !== void 0 ? L$[u] : void 0;
  return d !== void 0 ? t[d] : void 0;
}

function jSt() {
  let e = a.ANTHROPIC_DEFAULT_FABLE_MODEL ?? Su();
  return XS(zg() ? JI(e) : e);
}

function Su(e = fc()) {
  let t = Hs("fable", e) ?? e.fable5;
  return zg() ? JI(t) : t;
}

function wl() {
  let e = a.ANTHROPIC_DEFAULT_OPUS_MODEL;
  if (e !== void 0) return XS(e);
  return Nt();
}

function Nt(e = fc()) {
  return Hs("opus", e) ?? e.opus5;
}

function jSn() {
  return Nt(Pt());
}

function df() {
  let e = a.ANTHROPIC_DEFAULT_SONNET_MODEL;
  if (e !== void 0) return XS(e);
  return Fs();
}

function Fs(e = fc()) {
  return Hs("sonnet", e) ?? e.sonnet46;
}

function MV() {
  let e = a.ANTHROPIC_DEFAULT_HAIKU_MODEL;
  if (e !== void 0) return XS(e);
  return Au();
}

function Au(e = fc()) {
  return Hs("haiku", e) ?? e.haiku45;
}

function oR(e) {
  return e === "opusplan" || e === "haiku";
}

function qde(e) {
  if (e === "opusplan" || e === "opusplan[1m]") return "opus";
  if (e === "haiku") return "sonnet";
  return null;
}

function Ger(e) {
  return !1;
}

function E_(e) {
  let t = e.trim().toLowerCase(),
    r = pn(t).trim();
  if (!NT(r) || !ra()) return null;
  let o = AH();
  if (!(En() || {}).availableModels && o.size === 0) return null;
  let u = $St(r);
  if (u === null || !(nA(u) ?? kr(u)) || EH(u, o)) return null;
  if (r === t) return u;
  return (r === "opus" ? CH() : r === "sonnet" ? sO() : !0) && k3(u) ? `${u}[1m]` : u;
}

function f3t(e) {
  let t = qde(e);
  if (t === null || e === void 0 || e === null) return null;
  let r = t === "opus" && (e === "opusplan[1m]" || YS()),
    o = t === "opus" ? (r ? Xe(wl()) : wl()) : df();
  if ((nA(o) ?? kr(o)) && !EH(o, AH())) return { model: o, clamp: "none" };
  let d = E_(t === "opus" ? (r ? "opus[1m]" : "opus") : "sonnet");
  if (d !== null) return { model: d, clamp: "stepDown" };
  return { model: Ot(e), clamp: "resting" };
}

function _p(e) {
  let { permissionMode: t, mainLoopModel: r, exceeds200kTokens: o = !1 } = e;
  if (t !== "plan") return r;
  let u = cf(),
    d = qde(u);
  if (d === null || (d === "opus" && o)) return r;
  let _ = f3t(u);
  if (_ === null) return r;
  if (_.clamp !== "none") {
    let A = d === "opus" ? "opusplan upgrade" : "haiku plan upgrade",
      C =
        _.clamp === "stepDown"
          ? `Plan mode: the ${A} model is not permitted by the org model restrictions (availableModels allowlist or model_access entitlement); planning uses the newest permitted ${d === "opus" ? "Opus" : "Sonnet"} instead`
          : `Plan mode: the ${A} model is not permitted by the org model restrictions (availableModels allowlist or model_access entitlement); planning uses the resting model instead`;
    if (!it().has(C)) it().add(C), n(C, { level: "warn" });
  }
  return _.model;
}

function Xe(e) {
  return e.replace(/(\[1m\])+$/i, "") + "[1m]";
}

function yY() {
  let e = qEe();
  if (!e) return null;
  return Mw(e.name);
}

function zer() {
  return !1;
}

function Mw(e) {
  if (zer()) return null;
  let t = qSn(e, null) ?? e,
    r = WSn(t) ?? t;
  return T6(r, { ignoreModelOverrides: !0 }) === null ? r : null;
}

function eS() {
  return NV().setting;
}

function WSt(e) {
  switch (e) {
    case "org":
      return " \xB7 Org default";
    case "enforced":
    case "entitlement":
      return " \xB7 Set by your organization";
    case "env":
      return " \xB7 Set by ANTHROPIC_DEFAULT_MODEL";
    case "tier":
      return "";
  }
}

function NV() {
  let e = TQe(),
    t;
  if (e === void 0) {
    if (((t = yY()), t !== null)) Yfe(t);
  } else if (e === null) t = null;
  else t = Mw(e);
  if (t !== null) return { setting: t, attribution: "org" };
  let r = Sre();
  if (r !== null) return { setting: r, attribution: "env" };
  let { setting: o, envFamily: u, concreteBaseline: d } = Dw(),
    _ = qSn(o, u, d),
    A = _ ?? o,
    C = WSn(A);
  if (_ !== null) return { setting: C ?? _, attribution: "enforced" };
  if (C !== null) return { setting: C, attribution: "entitlement" };
  return { setting: A, attribution: "tier" };
}

function WSn(e) {
  let t = AH();
  if (t.size === 0 || !EH(e, t)) return null;
  let r = [
      { family: "opus", model: wl() },
      { family: "sonnet", model: df() },
      { family: "haiku", model: MV() },
    ],
    o = Ye(Ot(e)),
    u = r.findIndex((_) => o.includes(_.family)),
    d = u !== -1 ? u : uf(Ot(e)) ? 0 : 1;
  for (let { family: _, model: A } of r.slice(d)) {
    if (kr(A)) return A;
    let C = $St(_);
    if (C !== null) return C;
  }
  return null;
}

function Sre() {
  let e = C0n(),
    t = e === void 0 ? a.ANTHROPIC_DEFAULT_MODEL : e;
  if (t == null) return null;
  let r = t.trim().toLowerCase();
  if (r === "default" || r === "inherit") return null;
  if (oR(pn(r))) return null;
  if (Ger(r)) return null;
  if (zer()) return null;
  if (wo().state !== "inactive" || En()?.enforceAvailableModels === !0) return null;
  if (!kr(t)) return null;
  if (T6(t, { ignoreModelOverrides: !0 }) !== null) return null;
  return t;
}

function bre() {
  return cf() == null && NV().attribution === "env";
}

function Dw() {
  if (Tt()) {
    if (VSt()) return { setting: YS() ? Xe(wl()) : wl(), envFamily: "opus" };
  } else if (ra()) return { setting: YS() ? Xe(wl()) : wl(), envFamily: "opus" };
  let e = Ne();
  if (e === "mantle") return { setting: fc()[GEe], envFamily: null, concreteBaseline: String(Pt()[GEe]) };
  if (e === "bedrock" || e === "vertex") {
    if (kw()) return { setting: df(), envFamily: "sonnet" };
    return { setting: wl(), envFamily: "opus" };
  }
  return { setting: df(), envFamily: "sonnet" };
}

function qSn(e, t, r) {
  let o = En() || {},
    u = o.availableModels,
    d = o.enforceAvailableModels,
    _ = {},
    A = wo();
  if (A.state === "refused") return null;
  let C = A.state === "inactive" && A.cascadeTrusted;
  if (A.state === "active") (u = A.allowlist), (d = !0), (_ = A.overridesMap);
  else if (!A.cascadeTrusted) return null;
  if (!d) return null;
  if (C && Object.keys(_).length === 0 && o.modelOverrides) _ = o.modelOverrides;
  if (!u || u.length === 0) return null;
  let k = { overridesMap: _, envFreeAliasResolution: !0, allowlist: u },
    M = { overridesMap: _ },
    x = (Ve) => {
      let xe = SC(pn(Ve));
      for (let [Pe, Oe] of Object.entries(_)) if (SC(pn(Pe)) === xe) return Oe;
      return;
    },
    z = (Ve, xe) => {
      let Pe = pn(Ve);
      if (xe?.isConcreteEntry) return Ve;
      let Oe = x(Pe);
      if (!Oe?.trim()) return Ve;
      Oe = Oe.trim();
      {
        let ze = pn(Oe).trim().toLowerCase(),
          Re = Cc(Oe),
          Ke = jm(ze) ? xs(ze) : null;
        if (Ke !== null) Oe = Re ? Xe(Ke) : Ke;
        else {
          let fn = ze.startsWith("claude-") ? ze : `claude-${ze}`;
          if (zde(fn) && ra()) {
            let rr = Nt(Pt());
            Oe = Re ? Xe(rr) : rr;
          }
        }
      }
      if (T6(pn(Oe), { ignoreModelOverrides: !0 }) !== null) {
        let ze = `enforceAvailableModels: the managed modelOverrides target "${Oe}" is server-unavailable; using the unmapped candidate`;
        if (!it().has(ze)) it().add(ze), n(ze, { level: "warn" });
        return Ve;
      }
      if (Pe !== Ve) return k3(Oe, M) ? Xe(Oe) : JI(Oe);
      if (Cc(Oe) && !k3(Oe, M)) return JI(Oe);
      return Oe;
    },
    W = null,
    U = String(e),
    B = pn(U.trim().toLowerCase()),
    F = Cc(e),
    Q = B.startsWith("claude-") ? B : `claude-${B}`,
    ee = zde(Q) ? Nt(Pt()) : xs(B);
  if (ee !== null) {
    let xe = B !== U.trim().toLowerCase() && k3(ee, M) ? Xe(ee) : pn(ee),
      Pe = Ot(U);
    if (pn(Pe) !== pn(ee)) W = xe;
    if (kr(xe, k))
      if (pn(Pe) !== pn(ee)) {
        if (T6(xe, { ignoreModelOverrides: !0 }) === null) return z(xe);
      } else return null;
  } else {
    let Ve = Pt(),
      xe = E3(Ve);
    if (t !== void 0) {
      if (t !== null) {
        let Pe = xe.find(([Re]) => Re === t);
        if (Pe === void 0) throw Error(`steeringVarTable has no row for tier family "${t}"`);
        let Oe = Pe[3],
          ze = Oe();
        if (typeof ze === "string" && pn(ze).toLowerCase() !== B) {
          let Re = Oe();
          W = F && k3(Re, M) ? Xe(Re) : Re;
        }
      }
      if (t === null && r !== void 0 && pn(r).toLowerCase() !== B) W = r;
    } else {
      let Pe = (() => {
          for (let [, , ze, Re] of xe) {
            let Ke = Re();
            if (typeof Ke === "string" && pn(Ke).toLowerCase() === B) return ze;
          }
          return null;
        })(),
        Oe = xe;
      for (let [, ze, Re, Ke] of Oe) {
        if (ze === void 0 || pn(ze.trim().toLowerCase()) !== B) continue;
        if (Pe !== null && Pe <= Re) continue;
        {
          let fn = Ke();
          W = F && k3(fn, M) ? Xe(fn) : fn;
        }
        break;
      }
    }
    if (kr(e, k)) return null;
  }
  let de = [];
  for (let Ve of u) {
    let xe = Ve.trim();
    if (!xe) continue;
    let Pe = xe.toLowerCase(),
      Oe = pn(Pe),
      ze = xs(Oe);
    if (ze !== null) {
      let Ur = Pe !== Oe && k3(ze, M) ? Xe(ze) : ze;
      if (Cw(Ur) && kr(Ur, k)) {
        if (T6(Ur, { ignoreModelOverrides: !0 }) === null) return z(Ur);
        de.push(xe);
      }
      continue;
    }
    let Re = pn(Pe),
      Ke = Re.startsWith("claude-") ? Re : `claude-${Re}`;
    if (zde(Ke) && ra()) {
      let Rn = Nt(Pt()),
        $p = Pe !== Re && k3(Rn, M) ? Xe(Rn) : Rn;
      if (T6($p, { ignoreModelOverrides: !0 }) === null) return z($p);
      de.push(xe);
      continue;
    }
    let fn = Ne() !== "foundry" && !Pe.startsWith("claude-") && ls.test(Pe),
      rr = fn || (Ne() !== "foundry" && Pe.startsWith("claude-")),
      Lt = Ot(fn ? `claude-${Pe}` : rr ? Pe : xe),
      ti = pn(Lt).toLowerCase();
    if (rr && !/[-@]\d{8}$/.test(ti) && SC(ti) !== ti) continue;
    if (!Cw(Lt)) continue;
    let Yp = !rr || /[-@]\d{8}$/.test(ti);
    if (kr(Lt, k)) {
      if (T6(Lt, { ignoreModelOverrides: !0 }) === null) {
        let Rn = JI(Lt);
        if (Rn !== Lt) return z(k3(Lt, M) ? Lt : Rn, { isConcreteEntry: Yp });
        return z(Lt, { isConcreteEntry: Yp });
      }
      de.push(xe);
    }
  }
  let me = W !== null ? x(W) : void 0,
    Ce = me !== void 0 && pn(me).trim().toLowerCase() === pn(e).trim().toLowerCase(),
    Ie =
      W !== null
        ? Ce
          ? "tier default is the admin-mapped value \u2014 pinning its canonical builtin (the policy mapping re-applies at the exit)"
          : "user steering detected \u2014 pinning the env-free tier builtin (policy-mapped if applicable)"
        : "keeping the tier default",
    ut =
      de.length > 0
        ? `enforceAvailableModels: no availableModels entry survived; ${de.length} entr${de.length === 1 ? "y was" : "ies were"} allowed but skipped as server-unavailable (${de.join(", ")}); ${Ie}`
        : `enforceAvailableModels: no availableModels entry expands to an allowed model; ${Ie}`;
  if (!it().has(ut)) it().add(ut), n(ut, { level: "warn" });
  return W !== null ? z(W) : null;
}

function k3(e, t) {
  if (Ver(e, t)) return !1;
  let r = SC(JI(e).trim());
  if (!r.startsWith("claude-")) return !0;
  return r.includes("opus") && ra() ? YS() : !0;
}

function Ver(e, t) {
  let r = e.trim(),
    o = JI(r).trim(),
    u = SC(o);
  if (u.startsWith("claude-")) return Vde(u);
  if (Vde(Ye(o, t))) return !0;
  return o !== r && t?.overridesMap === void 0 && Vde(Ye(r));
}

function E3(e) {
  return [
    ["haiku", a.ANTHROPIC_DEFAULT_HAIKU_MODEL, 0, () => Au(e)],
    ["sonnet", a.ANTHROPIC_DEFAULT_SONNET_MODEL, 1, () => Fs(e)],
    ["opus", a.ANTHROPIC_DEFAULT_OPUS_MODEL, 2, () => Nt(e)],
  ];
}

function it() {
  return Ac().warnedEnforcementMessages;
}

function wo() {
  try {
    let e = SO(),
      t = ye("policySettings"),
      r = (_) => {
        if (!t || e.length === 0) return;
        let A = _
          ? "enforceAvailableModels: an admin policy source failed to load; enforcing the surviving admin tier (the failed source may carry a different policy \u2014 fix it to restore full coverage)"
          : "enforceAvailableModels: an admin policy source failed to load and the surviving admin tier carries no model policy \u2014 model enforcement is OFF; the failed source may have carried it";
        if (!it().has(A)) it().add(A), n(A, { level: "warn" });
      };
    if (e.length > 0 && !n5()) {
      if (
        !it().has(
          "enforceAvailableModels: a policy source exists but failed to load; refusing cascade-trust mode (model enforcement from user/project settings is disabled until the policy source is fixed)",
        )
      )
        it().add(
          "enforceAvailableModels: a policy source exists but failed to load; refusing cascade-trust mode (model enforcement from user/project settings is disabled until the policy source is fixed)",
        ),
          n(
            "enforceAvailableModels: a policy source exists but failed to load; refusing cascade-trust mode (model enforcement from user/project settings is disabled until the policy source is fixed)",
            { level: "warn" },
          );
      return { state: "refused" };
    }
    if (!t) return { state: "inactive", cascadeTrusted: !0 };
    let { availableModels: o, enforceAvailableModels: u, modelOverrides: d } = t;
    if (e.length === 0 && o === void 0 && u === void 0 && d === void 0 && (cS() === "hkcu" || cS() === "parent"))
      return { state: "inactive", cascadeTrusted: !0 };
    if (u && o === void 0) {
      if (
        !it().has(
          "enforceAvailableModels: the policy view sets the enforce flag but not availableModels; enforcement is disabled (the flag requires a policy-owned allowlist)",
        )
      )
        it().add(
          "enforceAvailableModels: the policy view sets the enforce flag but not availableModels; enforcement is disabled (the flag requires a policy-owned allowlist)",
        ),
          n(
            "enforceAvailableModels: the policy view sets the enforce flag but not availableModels; enforcement is disabled (the flag requires a policy-owned allowlist)",
            { level: "warn" },
          );
      return r(!1), { state: "inactive", cascadeTrusted: !1 };
    }
    if (u !== !0 || o === void 0 || o.length === 0) return r(!1), { state: "inactive", cascadeTrusted: !1 };
    return r(!0), { state: "active", allowlist: o, overridesMap: d ?? $Y() ?? {} };
  } catch (e) {
    let t = `enforceAvailableModels: policy-tier settings read failed; refusing cascade-trust mode: ${e instanceof Error ? e.message : String(e)}`;
    if (!it().has(t)) it().add(t), n(t, { level: "warn" });
    return { state: "refused" };
  }
}

function nA(e) {
  let t = wo();
  if (t.state === "refused") return !1;
  if (t.state === "inactive") return null;
  let r = { allowlist: t.allowlist, overridesMap: t.overridesMap, envFreeAliasResolution: !0 };
  if (!kr(e, r)) return !1;
  let o = e.trim().toLowerCase(),
    u = /\[1m\]/i.test(o) ? pn(o).trim() : o;
  return !(jm(u) || (ra() && zde(u))) || Ns(u, r);
}

function m3t(e) {
  return (nA(e) ?? kr(e)) && !EH(e, AH());
}

function mRr() {
  it().clear();
}

function tSr(e) {
  return pn(Ot(e)).toLowerCase() === pn(el()).toLowerCase();
}

function pf(e) {
  let t = pn(e.trim().toLowerCase());
  if (oR(t)) return !1;
  if (t === "best") return !1;
  return tSr(e);
}

function GSn(e) {
  if (!pf(e)) return !1;
  let t = e.trim().toLowerCase();
  return Ot(e).toLowerCase() === el().toLowerCase() || (jm(t) && t === pn(t));
}

function g3t(e) {
  let t = pn(e),
    r = xs(t);
  if (r !== null) return r.toLowerCase();
  let o = t.startsWith("claude-") ? t : `claude-${t}`;
  if (ra() && zde(o)) return Nt(Pt()).toLowerCase();
  return null;
}

function Cw(e) {
  let t = e.toLowerCase();
  if (S3.test(t)) return !0;
  if (t.startsWith("arn:aws:bedrock:")) return !0;
  if (Ne() === "foundry") return !0;
  return !1;
}

function xs(e) {
  let t = Pt();
  switch (e) {
    case "opus":
      return Nt(t);
    case "sonnet":
      return Fs(t);
    case "haiku":
      return Au(t);
    case "fable":
      return Su(t);
    case "opusplan":
      return Fs(t);
    case "best": {
      let r = zs[ww()];
      return r !== void 0 ? r.builtinDefault(t) : Nt(t);
    }
    default:
      return Ger(e) ? Nt(t) : null;
  }
}

function zSn() {
  let e = Dw();
  if (qSn(e.setting, e.envFamily, e.concreteBaseline) !== null) return !0;
  return WSn(e.setting) !== null;
}

function el() {
  return Ot(eS());
}

function E6() {
  return a.CLAUDE_CODE_NO_MODEL_FALLBACK === !0;
}

function qSt() {
  throw Error(
    "CLAUDE_CODE_NO_MODEL_FALLBACK tripwire: a model-fallback pivot was attempted " +
      "while the no-fallback guarantee is active. This branch should be unreachable \u2014 " +
      "the availability chain must be built via buildAvailabilityFallbackChain() so it collapses to [primary] under the env var. The stack trace identifies the call site.",
  );
}

function GSt(e, t) {
  if (E6()) return [e];
  return [e, ...t.filter((r) => r !== e)];
}

function FV() {
  if (E6()) return null;
  let e = el();
  if (!uf(e)) return e;
  for (let t of [wl(), df(), MV()]) {
    if (uf(t)) continue;
    if (nA(t) ?? kr(t)) return t;
  }
  return null;
}

function SC(e) {
  e = e.toLowerCase();
  let t = Cpe(e);
  if (t !== void 0) return t;
  for (let o of gj)
    if (o !== "us" && e.startsWith(`${o}.anthropic.`)) {
      let u = Cpe(`us${e.slice(o.length)}`);
      if (u !== void 0) return u;
      break;
    }
  let r = vwt(e);
  if (Rwt(r)) return T3(r) ?? vw(r.base);
  if (e.includes("claude-fable-5")) return "claude-fable-5";
  if (e.includes("claude-mythos-5")) return "claude-mythos-5";
  if (e.includes("claude-opus-5")) return "claude-opus-5";
  if (e.includes("claude-opus-4-8")) return "claude-opus-4-8";
  if (e.includes("claude-opus-4-7")) return "claude-opus-4-7";
  if (e.includes("claude-opus-4-6")) return "claude-opus-4-6";
  if (e.includes("claude-opus-4-5")) return "claude-opus-4-5";
  if (e.includes("claude-opus-4-1")) return "claude-opus-4-1";
  if (/claude-opus-4(?!-\d(?!\d))/.test(e)) return "claude-opus-4-0";
  if (e.includes("claude-sonnet-5")) return "claude-sonnet-5";
  if (e.includes("claude-sonnet-4-6")) return "claude-sonnet-4-6";
  if (e.includes("claude-sonnet-4-5")) return "claude-sonnet-4-5";
  if (/claude-sonnet-4(?!-\d(?!\d))/.test(e)) return "claude-sonnet-4-0";
  if (e.includes("claude-haiku-4-5")) return "claude-haiku-4-5";
  if (e.includes("claude-3-7-sonnet")) return "claude-3-7-sonnet";
  if (e.includes("claude-3-5-sonnet")) return "claude-3-5-sonnet";
  if (e.includes("claude-3-5-haiku")) return "claude-3-5-haiku";
  if (e.includes("claude-3-opus")) return "claude-3-opus";
  if (e.includes("claude-3-sonnet")) return "claude-3-sonnet";
  if (e.includes("claude-3-haiku")) return "claude-3-haiku";
  return vw(e);
}

function vw(e) {
  return e.replace(/-\d{8}$/, "");
}

function T3(e) {
  let t = [...ATn().models.map((r) => r.id), ...Iw()];
  for (let r of t) {
    let o = vwt(r);
    if (Rwt(o) && o.family === e.family && o.legacyVersionFirst === e.legacyVersionFirst && kTn(o, e) === 0) return r;
  }
  return;
}

function Iw() {
  return ["claude-3-opus", "claude-3-sonnet", "claude-3-haiku"];
}

function PMe(e) {
  let t = pn(e);
  return Ql(t) !== void 0 || A3.has(t) || t === Q4t;
}

function tN(e, t = Ye(e)) {
  return PMe(t);
}

function hu(e, t, r) {
  if (e === void 0) return;
  for (let [o, u] of Object.entries(e)) {
    if (!(r ? z6(u, t) : u === t)) continue;
    let _ = SC(o);
    if (tN(_, _)) return _;
  }
  return;
}

function b3() {
  try {
    return Je().modelOverrides;
  } catch {
    return;
  }
}

function Ye(e, t) {
  let r = t?.overridesMap !== void 0 ? hu(t.overridesMap, e, !0) : hu(b3(), e, !1);
  if (r === void 0 && t?.overridesMap === void 0) {
    let o = $Y();
    r = hu(o, e, !0);
  }
  if (r !== void 0) return r;
  if (!t?.deterministic && e.includes("application-inference-profile")) {
    let o = pie(hr(e));
    if (o) return SC(o);
  }
  return SC(e);
}

function DMe(e) {
  let t = e ?? at(),
    r = pn(Ye(t));
  return Cc(t) ? [`${r}[1m]`, r] : [r];
}

function bC(e) {
  return pn(Ye(e));
}

function Gde(e) {
  return pn(Ye(e, { overridesMap: $Y() ?? {} }));
}

function OMe(e) {
  return PMe(e);
}

function Pf(e) {
  if (!e) return 4;
  let t = Ot(e),
    r = pn(Ye(t)).replace(/[._]/g, "-");
  return y3.has(r) ? 4 : 3;
}

function h3t(e = !1) {
  let { setting: t, attribution: r } = NV();
  if (r !== "tier") return `${$u(hr(Ot(t))) ?? cs(t)}${WSt(r)}`;
  if (VSt()) {
    let u = wl(),
      d = $u(hr(u)) ?? "Opus",
      _ = e && lf(u);
    if (YS()) return `${d} with 1M context \xB7 Best for everyday, complex tasks${_ ? zSt(!0, u) : ""}`;
    return `${d} \xB7 Best for everyday, complex tasks${_ ? zSt(!0, u) : ""}`;
  }
  return `${$u(hr(df())) ?? "Sonnet"} \xB7 Efficient for routine tasks`;
}

function j8e(e) {
  if (e === "opusplan") return "Opus in plan mode, else Sonnet";
  return cs(Ot(e));
}

function zSt(e, t) {
  if (!HTn()) return "";
  let r = SC(t),
    o = e ? _re($Ee(r)) : Ok(r);
  if (o === void 0) return "";
  return ` \xB7${e ? ` (${Q3})` : ""} ${o}`;
}

function VSt() {
  if (uAe() || qbt() || I7e()) return !0;
  return fpe() && !kw();
}

function YS() {
  if (nN() || Dre() || Ne() !== "firstParty") return !1;
  if (Tt() && Fn() === null) return !1;
  return !0;
}

function aO(e) {
  if (e === "opusplan") return "Opus Plan";
  if (jm(e)) return cs(Ot(e));
  return cs(e);
}

function KSt() {
  if (nc() !== void 0) return "";
  if (a.ANTHROPIC_MODEL) return "";
  switch (aA("model")) {
    case "projectSettings":
      return ` (from ${jH("projectSettings")})`;
    case "policySettings":
      return " (from managed settings)";
    default:
      return "";
  }
}

function XI(e) {
  let t = Ye(e),
    r = Ql(t);
  if (!r) return null;
  let o = e.endsWith("[1m]") && r.context?.supports_1m_suffix ? " (1M context)" : "";
  return r.display_name + o;
}

function VEe() {
  let e = xi(),
    t = X3("modelPicker").find((r) => e.includes(r.source));
  return t ? { picker: t.value, source: t.source } : void 0;
}

function nSr(e) {
  let t = e.trim(),
    r = VEe()
      ?.picker.options.find((o) => o.model.trim() === t)
      ?.label?.trim();
  return r === "" ? void 0 : r;
}

function cs(e) {
  let t = nSr(e);
  if (t !== void 0) return t;
  let r = hr(e);
  if (pR(r) === null) {
    let u = [...jEe(), ...$3()].find((d) => typeof d.value === "string" && hr(d.value) === r);
    if (u?.label) return u.label;
  }
  let o = XI(e);
  if (o) return o;
  return _R(e) || "unknown model";
}

function _3t(e) {
  let t = XI(e);
  if (t) return `Claude ${t}`;
  return `Claude (${e})`;
}

function Ot(e) {
  let t = e.trim(),
    r = t.toLowerCase(),
    o = Cc(r),
    u = o ? pn(r).trim() : r;
  if (jm(u))
    switch (u) {
      case "fable": {
        let d = jSt();
        return XS(d + (o && !zg() && !Cc(d) ? "[1m]" : ""));
      }
      case "opusplan":
        return o ? XS(Xe(df())) : df();
      case "sonnet":
        return o ? XS(Xe(df())) : df();
      case "haiku":
        return o ? XS(Xe(MV())) : MV();
      case "opus":
        return o ? XS(Xe(wl())) : wl();
      case "best":
        return eSr();
      default:
    }
  if (ra() && zde(u) && LMe()) return o ? XS(Xe(wl())) : wl();
  if (o && zg() && g3(u) && A_(u)) return XS(t.replace(/(\[1m\])+$/i, "").trim());
  if (o) return XS(t.replace(/(\[1m\])+$/i, "").trim() + "[1m]");
  return XS(t);
}

function SY(e) {
  return e === "inherit" ? void 0 : e;
}

function W8e(e, t) {
  let r = Ot(e);
  if (!pf(r) && !kr(r))
    return (
      n(`Skill/command model "${e}" is not in the availableModels allowlist; keeping the session model`, {
        level: "warn",
      }),
      t
    );
  let o = Cc(t) || A_(t) || BSt(t);
  if (Cc(e) || !o) return e;
  let u = Ot(e);
  if (A_(u)) return u;
  if (BSt(u)) return u;
  if (TC(u)) return e + "[1m]";
  return e;
}

function zde(e) {
  return C3.includes(e);
}

function LMe() {
  return !a.CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP;
}

function wC(e) {
  if (e === null) {
    if (Tt()) return `Default (${h3t()})`;
    return `Default (${el()})`;
  }
  let t = Ot(e);
  return _R(e === t ? t : `${e} (${t})`) || "unknown model";
}

function $u(e) {
  if (Ne() === "foundry") return;
  let t = Ye(e),
    r = w3.get(t);
  if (r !== void 0) return r;
  let o = Ql(t);
  if (!o) return;
  return e.toLowerCase().includes("[1m]") && v3.has(t) ? `${o.display_name} (1M context)` : o.display_name;
}

function VSn(e) {
  let t = hr(e).trim().toLowerCase();
  return jm(t) || Object.hasOwn(L$, t);
}

function YI(e) {
  let t = hr(e),
    r = t.toLowerCase();
  if (!Object.hasOwn(L$, r)) return t;
  let o = L$[r];
  if (o === void 0) return t;
  let u = Pt()[o];
  if (wo().state === "refused") return t;
  let _;
  try {
    _ = ye("policySettings");
  } catch {
    return t;
  }
  let A = _?.availableModels,
    C = _?.modelOverrides ?? $Y() ?? {},
    k,
    M;
  if (A === void 0) (k = fc()[o]), (M = k !== u);
  else {
    if (!kr(r, { allowlist: A, overridesMap: C, envFreeAliasResolution: !0 })) return t;
    let z = z3(C, o);
    (k = z ?? u), (M = z !== void 0);
  }
  let x = Ne();
  if (M || (x !== "foundry" && so[o][x] !== null)) return hr(k);
  return t;
}

function z3(e, t) {
  for (let [r, o] of Object.entries(e)) if (Object.hasOwn(L$, r) && L$[r] === t && o) return o;
  return;
}

function JI(e) {
  return e.replace(/\[1m\]/gi, "");
}

function Ker(e) {
  let t = Lw().safeParse(e);
  return t.success ? t.data : void 0;
}

function bu() {
  return xw(be(), "cache");
}

function Cu() {
  return xw(bu(), "model-capabilities.json");
}

function yu() {
  return Te.cache("model-capabilities", "model-capabilities.json");
}

function Vs(e) {
  let t = Y3().safeParse(Ut(e, !1));
  return t.success ? t.data.models : null;
}

function y3t() {
  return !1;
}

function q3(e) {
  return [...e].sort((t, r) => r.id.length - t.id.length || t.id.localeCompare(r.id));
}

function Po() {
  return Ac().modelCapabilitiesByCachePath;
}

function Uw(e, t = Ac().modelCapabilitiesStorageV5) {
  let r = Po();
  if (r.has(e)) return r.get(e) ?? null;
  if (t) return null;
  let o;
  try {
    let u = V3(e, "utf-8");
    o = Vs(u);
  } catch {
    o = null;
  }
  return r.set(e, o), o;
}

async function Xer(e) {
  if (!e || !y3t()) return;
  let t = Cu();
  if (Po().has(t)) return;
  let r = await e.read([yu()]);
  if (!r.ok) {
    n(`[modelCapabilities] prime read failed: ${r.error.code}`);
    return;
  }
  let o = r.value.items[0];
  if (!o.found) return;
  let u = Vs(Buffer.from(o.value).toString("utf-8"));
  if (u === null) return;
  let d = Ac();
  if (!d.modelCapabilitiesByCachePath.has(t)) d.modelCapabilitiesByCachePath.set(t, u);
  d.modelCapabilitiesStorageV5 = e;
}

function zw(e) {
  if (!y3t()) return;
  let t = Uw(Cu());
  if (!t || t.length === 0) return;
  let r = e.toLowerCase(),
    o = t.find((u) => u.id.toLowerCase() === r);
  if (o) return o;
  return t.find((u) => r.includes(u.id.toLowerCase()));
}

async function Yer(e, t) {
  let r = Cu(),
    o = q3(e);
  if (O() && t !== void 0) {
    let u = await t.read([yu()]),
      d = u.ok && u.value.items[0]?.found ? Vs(Buffer.from(u.value.items[0].value).toString("utf-8")) : null;
    if (!u.ok) n(`[modelCapabilities] cache read failed: ${u.error.code}`);
    else Po().set(r, d);
    if (bs(d, o)) {
      n("[modelCapabilities] cache unchanged, skipping write");
      return;
    }
    let _ = b({ models: o, timestamp: Date.now() });
    try {
      await Nw(bu(), { recursive: !0 });
    } catch (C) {
      n(`[modelCapabilities] cache folder could not be made: ${C instanceof Error ? C.message : "unknown"}`);
      return;
    }
    let A = await t.write(yu(), _, { publishDiscipline: "inPlace", mode: 384 });
    if (!A.ok) {
      n(`[modelCapabilities] cache write failed: ${A.error.code}`);
      return;
    }
    Po().set(r, Vs(_)), n(`[modelCapabilities] cached ${o.length} models`);
    return;
  }
  if (bs(Uw(r), o)) {
    n("[modelCapabilities] cache unchanged, skipping write");
    return;
  }
  await Nw(bu(), { recursive: !0 }),
    await G3(r, b({ models: o, timestamp: Date.now() }), { encoding: "utf-8", mode: 384 }),
    Po().delete(r),
    n(`[modelCapabilities] cached ${o.length} models`);
}

function nN() {
  return a.CLAUDE_CODE_DISABLE_1M_CONTEXT;
}

function Cc(e) {
  if (nN()) return !1;
  return /\[1m\]/i.test(e);
}

function Bw(e) {
  let t = pn(e),
    r = Ye(t);
  if (Fw(r)) return r;
  if (t === e) return;
  let o = Ye(e);
  if (Fw(o)) return o;
  return;
}

function Fw(e) {
  let t = pn(e);
  return Ql(t)?.context?.native_1m === !0 || t === Q4t;
}

function XSt(e) {
  return Bw(e) !== void 0;
}

function Jer(e) {
  if (Me(process.env.DISABLE_COMPACT)) return !0;
  return Hw(e);
}

function Hw(e) {
  let t = Ot(e);
  return !t.startsWith("claude-") && !PMe(Ye(t));
}

function A_(e) {
  if (nN()) return !1;
  let t = Bw(e);
  if (t === void 0) return !1;
  let r = Ql(pn(t))?.context,
    o = za(e);
  if ((o === "firstParty" && jo()) || NH(o) || o === "mantle") return !0;
  return eQ(o, r);
}

function eQ(e, t) {
  let r = t?.native_1m_3p;
  switch (e) {
    case "bedrock":
    case "vertex":
    case "foundry":
      return r?.[e] === !0;
    case "gateway":
      return r?.bedrock === !0 && r?.vertex === !0 && r?.foundry === !0;
    default:
      return !1;
  }
}

function Vde(e) {
  return (
    e.includes("claude-3-") ||
    e === "claude-opus-4-0" ||
    e === "claude-opus-4-1" ||
    e === "claude-opus-4-5" ||
    e === "claude-haiku-4-5"
  );
}

function TC(e) {
  if (nN()) return !1;
  let t = Ye(e);
  if (Vde(t)) return !1;
  if (Ql(t)?.context?.supports_1m_beta) return !0;
  return s0(za(e));
}

function Lp(e, t) {
  let r = Vw();
  if (r !== void 0) return r;
  if (KSn(e, t)) return g$;
  return Gw(e, t);
}

function Vw() {
  if (Me(process.env.DISABLE_COMPACT)) {
    let e = a.CLAUDE_CODE_MAX_CONTEXT_TOKENS;
    if (e !== void 0 && e > 0) return e;
  }
  return;
}

function KSn(e, t) {
  return GFe() && Vw() === void 0 && Gw(e, t) > g$;
}

function Gw(e, t) {
  if (Cc(e)) return 1e6;
  if (t?.includes(Vk.header) && TC(e)) return 1e6;
  if (A_(e)) return 1e6;
  let r = S3t(e);
  if (r !== null) return r;
  let o = a.CLAUDE_CODE_MAX_CONTEXT_TOKENS;
  if (o !== void 0 && o > 0 && Hw(e)) return o;
  return q8e;
}

function Qer() {
  return xwn();
}

function Zer() {
  if (Ne() !== "firstParty") return null;
  return ie().autoCompactWindowsCache ?? null;
}

function S3t(e) {
  if (nN()) return null;
  if (Cc(e)) return null;
  if (Ye(e) !== "claude-sonnet-4-6") return null;
  let t = xwn()?.kelp_forest_sonnet;
  if (typeof t !== "string") return null;
  let r = parseInt(t, 10);
  if (!Number.isFinite(r) || r <= q8e || r > tQ) return null;
  return r;
}

function b3t(e, t) {
  if (!e) return { used: null, remaining: null };
  let r = e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens,
    o = Math.round((r / t) * 100),
    u = Math.min(100, Math.max(0, o));
  return { used: u, remaining: 100 - u };
}

function nQ(e) {
  let t = $l()?.heather_vale;
  if (typeof t !== "object" || t === null || Array.isArray(t)) return null;
  let r = t[e];
  if (typeof r !== "number" || !Number.isInteger(r) || r <= 0) return null;
  return r;
}

function $V(e) {
  let t,
    r,
    o = Ye(e),
    u = Ql(o)?.max_output_tokens;
  if (u) (t = u.default), (r = u.upper);
  else if (o === "claude-3-opus" || o === "claude-3-haiku") (t = 4096), (r = 4096);
  else if (o === "claude-3-sonnet") (t = 8192), (r = 8192);
  else (t = J3), (r = Z3);
  let d = nQ(o);
  if (d !== null) t = Math.min(d, r);
  let _ = zw(e);
  if (_?.max_tokens && _.max_tokens >= 4096) (r = _.max_tokens), (t = Math.min(t, r));
  return { default: t, upperLimit: r };
}

function etr(e) {
  return $V(e).upperLimit - 1;
}

function bY(e, t) {
  let r = e.toLowerCase(),
    o = `${r}:${t}`,
    u = Ac().providerCache.capabilityOverrides;
  if (u.has(o)) return u.get(o);
  let d = oQ(r, t);
  return u.set(o, d), d;
}

function oQ(e, t) {
  if (ra()) return;
  for (let r of rQ) {
    let o = process.env[r.modelEnvVar]?.trim(),
      u = process.env[r.capabilitiesEnvVar];
    if (!o || u === void 0) continue;
    if (e !== o.toLowerCase()) continue;
    return u
      .toLowerCase()
      .split(",")
      .map((d) => d.trim())
      .includes(t);
  }
  return;
}

function YSt() {
  return Je().showThinkingSummaries ?? !1;
}

function XSn({ explicitDisplay: e, isNonInteractive: t, outputFormat: r, verbose: o }) {
  if (e) return e;
  if (!t) return YSt() ? "summarized" : void 0;
  if (YSn({ isNonInteractive: t, outputFormat: r, verbose: o })) return "omitted";
  return;
}

function YSn({ isNonInteractive: e, outputFormat: t, verbose: r }) {
  return e && (t === "text" || (t === "json" && !r));
}

function ttr(e, t) {
  if (e === !1) return { type: "disabled" };
  if (t.type !== "disabled") return t;
  let r = XSn({ explicitDisplay: void 0, isNonInteractive: !1, outputFormat: "text", verbose: !1 });
  return r ? { type: "adaptive", display: r } : { type: "adaptive" };
}

function ntr(
  e,
  { useExactTools: t, forwardSubagentText: r, isAsync: o, isNonInteractiveSession: u, sessionDisplayExplicit: d },
) {
  if (d || !u || t || r || o || e.type === "disabled" || e.display === "omitted") return e;
  return { ...e, display: "omitted", displayExplicit: !1 };
}

function UV() {
  return I("tengu_turtle_carbon", !0);
}

function G8e(e) {
  return /\bultrathink\b/i.test(e);
}

function z8e(e) {
  let t = [],
    r = e.matchAll(/\bultrathink\b/gi);
  for (let o of r) if (o.index !== void 0) t.push({ word: o[0], start: o.index, end: o.index + o[0].length });
  return t;
}

function RH(e, t = !1) {
  let r = t ? sQ : iQ;
  return r[e % r.length];
}

function JSn(e) {
  let t = bY(e, "thinking");
  if (t !== void 0) return t;
  return !Ye(e).includes("claude-3-");
}

function MMe(e) {
  let t = Ye(e);
  if (
    t.includes("claude-3-") ||
    t === "claude-opus-4-0" ||
    t === "claude-opus-4-1" ||
    t === "claude-opus-4-5" ||
    t === "claude-opus-4-6" ||
    t === "claude-opus-4-7" ||
    t === "claude-opus-4-8" ||
    t === "claude-opus-5" ||
    t === "claude-sonnet-4-0" ||
    t === "claude-sonnet-4-5" ||
    t === "claude-sonnet-4-6" ||
    t === "claude-sonnet-5" ||
    t === "claude-haiku-4-5"
  )
    return !1;
  if (hh(t, "rejects_disabled_thinking")) return !0;
  return s0(za(e));
}

function H3(e) {
  if (MMe(e)) return [void 0, 2048];
  return [!1, 0];
}

function KEe(e) {
  let t = bY(e, "adaptive_thinking");
  if (t !== void 0) return t;
  let r = Ye(e);
  if (
    r.includes("claude-3-") ||
    r === "claude-opus-4-0" ||
    r === "claude-opus-4-1" ||
    r === "claude-opus-4-5" ||
    r === "claude-sonnet-4-0" ||
    r === "claude-sonnet-4-5" ||
    r === "claude-haiku-4-5"
  )
    return !1;
  if (hh(r, "adaptive_thinking") || r === "claude-mythos-5") return !0;
  return s0(za(e));
}

function QSn() {
  if (process.env.MAX_THINKING_TOKENS) return ol(process.env.MAX_THINKING_TOKENS) > 0 ? null : "MAX_THINKING_TOKENS";
  let { settings: e } = ob();
  return e.alwaysThinkingEnabled === !1 ? "alwaysThinkingEnabled" : null;
}

function rN() {
  if (QSn() !== null) return !1;
  return !0;
}

function aQ(e) {
  let t = [],
    r = [];
  for (let o of e) {
    let u = r3t(o);
    if (u && Kw.has(u)) t.push(o);
    else r.push(o);
  }
  return { allowed: t, disallowed: r };
}

function rtr(e) {
  if (!e || e.length === 0) return;
  if (Tt()) {
    console.warn("Warning: Custom betas are only available for API key users. Ignoring provided betas.");
    return;
  }
  let { allowed: t, disallowed: r } = aQ(e);
  for (let o of r)
    console.warn(
      `Warning: Beta header '${o}' is not allowed. Only the following betas are supported: ${_C([...Kw]).join(", ")}`,
    );
  return t.length > 0 ? t : void 0;
}

function JSt(e) {
  let t = bY(e, "interleaved_thinking");
  if (t !== void 0) return t;
  let r = Ye(e),
    o = za(e);
  if (o === "foundry") return !0;
  if (s0(o)) return !r.includes("claude-3-");
  if (r === "claude-haiku-4-5" || r.includes("claude-3-")) return !1;
  return !0;
}

function lQ(e) {
  return (
    e === "claude-fable-5" ||
    e === "claude-mythos-5" ||
    e === "claude-opus-4-0" ||
    e === "claude-opus-4-1" ||
    e === "claude-opus-4-5" ||
    e === "claude-opus-4-6" ||
    e === "claude-opus-4-7" ||
    e === "claude-opus-4-8" ||
    e === "claude-opus-5" ||
    e === "claude-sonnet-4-0" ||
    e === "claude-sonnet-4-5" ||
    e === "claude-sonnet-4-6" ||
    e === "claude-sonnet-5" ||
    e === "claude-haiku-4-5"
  );
}

function cQ(e) {
  let t = Ye(e),
    r = za(e);
  if (r === "foundry") return !0;
  if (s0(r)) return !t.includes("claude-3-");
  return hh(t, "context_management") || t === "claude-mythos-5";
}

function QSt(e) {
  let t = Ye(e),
    r = za(e);
  if (!s0(r)) return !1;
  if (t.includes("claude-3-") || t === "claude-opus-4-0" || t === "claude-sonnet-4-0") return !1;
  return !0;
}

function Gs() {
  return Ac().betas;
}

function Ks(e, t, r) {
  let o = e.get(t);
  if (o !== void 0) return o;
  let u = r();
  return e.set(t, u), u;
}

function NMe(e) {
  return Ks(Gs().midConversationSystem, e, () => uQ(e));
}

function uQ(e) {
  if (_h("hipaa")) return !1;
  if (a.CLAUDE_CODE_FORCE_MID_CONVERSATION_SYSTEM) return !0;
  let t = bY(e, "mid_conversation_system");
  if (t !== void 0) return t;
  let r = Ye(e);
  if (
    r.includes("claude-3-") ||
    r === "claude-opus-4-0" ||
    r === "claude-opus-4-1" ||
    r === "claude-opus-4-5" ||
    r === "claude-opus-4-6" ||
    r === "claude-opus-4-7" ||
    r === "claude-sonnet-4-0" ||
    r === "claude-sonnet-4-5" ||
    r === "claude-sonnet-4-6" ||
    r === "claude-haiku-4-5"
  )
    return !1;
  if (hh(r, "mid_conv_system") || r === "claude-mythos-5") return !0;
  return s0(za(e));
}

function w3t(e) {
  return Ye(e) === "claude-sonnet-5";
}

function T3t(e) {
  let t = bY(e, "temperature");
  if (t !== void 0) return t;
  let r = Ye(e);
  if (
    r.includes("claude-3-") ||
    r === "claude-opus-4-0" ||
    r === "claude-opus-4-1" ||
    r === "claude-opus-4-5" ||
    r === "claude-opus-4-6" ||
    r === "claude-sonnet-4-0" ||
    r === "claude-sonnet-4-5" ||
    r === "claude-sonnet-4-6" ||
    r === "claude-haiku-4-5"
  )
    return !0;
  return !1;
}

function E3t() {
  let e = Ne();
  return e !== "firstParty" && !NH(e);
}

function ZSn() {
  return uw() || E3t();
}

function wY(e) {
  let t = Ye(e),
    r = Ne();
  if (
    t.includes("claude-3-") ||
    t === "claude-opus-4-0" ||
    t === "claude-opus-4-1" ||
    t === "claude-opus-4-5" ||
    t === "claude-sonnet-4-0" ||
    t === "claude-sonnet-4-5" ||
    t === "claude-haiku-4-5"
  )
    return !1;
  if (r !== "firstParty" && !NH(r) && (t === "claude-opus-4-6" || t === "claude-sonnet-4-6" || t.includes("haiku")))
    return !1;
  return !0;
}

function otr() {
  let e = Ne();
  if (e === "vertex" || e === "bedrock" || e === "mantle" || e === "gateway") return vr;
  if (OV()) return vr;
  return Qc;
}

function FMe(e = Ne()) {
  if (e === "anthropicAws") return a.ANTHROPIC_AWS_BASE_URL === void 0;
  return e === "firstParty" && jo();
}

function Kde() {
  if (!uw()) return !1;
  if (!jo()) return !1;
  let e = Ne();
  return e === "firstParty" || e === "anthropicAws";
}

function vu(e) {
  return Ks(Gs().allModelBetas, e, () => dQ(e));
}

function dQ(e) {
  let t = [],
    r = Ye(e),
    o = r.includes("haiku"),
    u = Ne(),
    d = uw();
  if (!o) t.push($n);
  if (Tt() || (As() && !Lbt() && jd())) t.push(LEe);
  if (Cc(e)) t.push(Vk);
  if (!a.DISABLE_INTERLEAVED_THINKING && JSt(e)) t.push(Cr);
  if (d && JSt(e) && !Le() && !YSt()) t.push(DSt);
  if (Ts && d && JSt(e) && Ne() === "firstParty") t.push(Ts);
  let _ = a.USE_API_CONTEXT_MANAGEMENT && !1,
    A = cQ(e);
  if (s0(za(e)) && !OV() && (_ || A)) t.push(TMe);
  let C = I("tengu_tool_pear", !1);
  if (s0(za(e)) && !OV() && QSt(e) && C) t.push(PV);
  if (u === "vertex" && lQ(r)) t.push(Ro);
  if (u === "foundry") t.push(Ro);
  if (d) t.push(H8e);
  if (NMe(e)) t.push(Kk);
  let k = a.ANTHROPIC_BETAS;
  if (k)
    t.push(
      ...k
        .split(",")
        .map((M) => M.trim())
        .filter(Boolean)
        .map(Jc),
    );
  return t;
}

function BV(e) {
  return Ks(Gs().modelBetas, e, () => {
    let t = vu(e);
    if (za(e) === "bedrock") return t.filter((r) => !Zc.has(r));
    return t;
  });
}

function itr(e) {
  return Ks(Gs().bedrockExtraBodyParamsBetas, e, () => vu(e).filter((t) => Zc.has(t)));
}

function ZSt(e, t) {
  let r = [...BV(e)];
  if (t?.isAgenticQuery) {
    if (!r.includes($n)) r.push($n);
  }
  if (MSt(e, Ye(e)) && !r.includes(GI)) r.push(GI);
  let o = zp();
  if (!o || o.length === 0) return r;
  let u = o.map(Jc);
  if (!uw())
    u = u.filter((d) => {
      if (jw.has(d)) return !0;
      return n(`SDK beta '${d.header}' dropped on 3P`, { level: "debug" }), !1;
    });
  return [...r, ...u.filter((d) => !r.includes(d))];
}

function ebt(e) {
  return vu(e).includes(PV);
}

function h$() {
  Ac().betas = _l();
}

function ebn(e) {
  if (As()) return e;
  return e.filter((t) => jw.has(t));
}

export { $8e, $Ee, $Sn, $St, $V, $c, $er, $r, $u, A4t, AH, AMe, A_, Ac, Af, Ai, Al, Anr, B8e, BEe, BSn, BSt, BV, Ber, C4t, CH, CMe, Cc, Ci, Cn, Cnr, D2, D8e, DEe, DMe, DSn, Der, E3t, E6, EH, E_, Eer, Enr, FEe, FMe, FSt, FV, Fe, Fer, Fr, G2, G4, G8e, GSn, GSt, Gde, Ger, H3, HSn, HSt, Her, Hnr, I2, IMe, ISn, Ier, Il, Iw, JI, JO, JSn, JSt, Jer, KEe, KI, KO, KSn, KSt, Kde, Ker, L6, L8e, LMe, LSn, Ler, Lp, M2, M3, MEe, MMe, MSn, MSt, MV, Mer, Mi, N2, N4, NEe, NMe, NSn, NSt, NV, Nde, Ner, Nk, O6, O8e, OEe, OMe, OSn, OV, Oer, Ot, P2, PEe, PMe, PSn, PSt, Per, Pf, Q9t, QO, QSn, QSt, Qer, R3, R8e, RH, RMe, R_, Rer, Rf, Rnr, S3t, SC, SMe, SY, S_, Ser, Sl, Snr, So, Sre, Su, T3t, T6, TC, TN, Td, Ter, Tf, Tnr, Tu, U2, U8e, UEe, USn, USt, UV, Uer, Ul, VEe, VI, VSn, VSt, Vde, Ver, W8e, WEe, WO, WSn, WSt, Wc, Wde, Wer, Wf, X9t, XI, XS, XSn, XSt, Xer, Xr, YI, YO, YS, YSn, YSt, Yc, Ye, Yer, Yf, Yr, ZO, ZSn, ZSt, Zer, Zy, _3t, _C, _Y, _k, _n, _p, _re, _s, a3t, aNe, aO, af, at, b3t, b4, b7e, bC, bY, b_, ber, bf, bl, bnr, bre, c3t, c_, cf, cs, cw, d$, d3t, d_, df, dr, dre, dw, e0, e3t, eN, eS, eSr, e_, ebn, ebt, ek, el, etr, f$, f3t, fRr, f_, fc, fg, fre, g3t, gSn, gY, g_, gf, gm, h$, h3t, hSn, hY, he, hf, hre, i_, itr, ix, j8e, jEe, jSn, jSt, jde, jer, jf, jl, jr, k3, kSn, kSt, kT, kf, kl, kr, l3t, l_, lf, m$, m3t, mRr, mSn, mre, nA, nN, nSr, n_, nt, ntr, o3t, oR, oi, otr, p$, p3t, pN, pRr, pf, pi, pre, pw, qEe, qSn, qSt, qc, qde, qer, qf, ql, r3t, rN, rk, rtr, s3t, sO, se, si, t3t, tA, tN, tSr, tk, ttr, u3t, uf, ure, uw, vMe, ver, vnr, w2, w3t, w6, wC, wY, wer, wl, wn, wnr, x2, xMe, xSn, xer, xf, y3t, y4, yC, yY, yer, yf, yi, yo, yre, ys, z8e, zEe, zSn, zSt, zde, zer, zh, zk };
