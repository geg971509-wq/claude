// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Xt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { j4 } from "/$bunfs/root/chunk-gcks6mn0.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { l, iK } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { Soe, boe, XY } from "/$bunfs/root/chunk-rf51999f.js";
import { ai } from "/$bunfs/root/chunk-56sxk8k2.js";
function d() {
  return j4(a.AWS_REGION) || j4(a.AWS_DEFAULT_REGION);
}
function PAe() {
  return d() || "us-east-1";
}
function s() {
  return `${a.AWS_CONFIG_FILE ?? ""}|${a.AWS_SHARED_CREDENTIALS_FILE ?? ""}|${a.AWS_PROFILE ?? ""}`;
}
class c {
  resolvedSharedConfigRegions = new Map();
  readAwsSharedConfigRegion = ai(async () => {
    let r = s(),
      e;
    try {
      let [t, o] = await Promise.all([
          import("/$bunfs/root/chunk-4n0ccx63.js"),
          import("/$bunfs/root/chunk-vaxf6b73.js"),
        ]),
        i = t.loadConfig ?? t.default?.loadConfig,
        A = o.NODE_REGION_CONFIG_FILE_OPTIONS ?? o.default?.NODE_REGION_CONFIG_FILE_OPTIONS,
        C = await i(
          {
            environmentVariableSelector: () => {
              return;
            },
            configFileSelector: (m) => m.region,
            default: () => {
              return;
            },
          },
          A,
        )();
      e = j4(C?.trim());
    } catch {
      e = void 0;
    }
    return this.resolvedSharedConfigRegions.set(r, e), e;
  }, s);
}
var p = new J(() => new c());
function u() {
  return p.of(G().host);
}
async function MT() {
  let r = d();
  if (r) return r;
  return (await u().readAwsSharedConfigRegion()) || PAe();
}
function Ewt() {
  return bTn().region;
}
function bTn() {
  let r = d();
  if (r) return { region: r, source: "env" };
  let e = u().resolvedSharedConfigRegions.get(s());
  if (e) return { region: e, source: "shared-config" };
  let t = !!(a.AWS_REGION || a.AWS_DEFAULT_REGION);
  return { region: PAe(), source: t ? "env-invalid" : "default" };
}
function J4t(r) {
  return iK(r, (e) => e.name === "CredentialsProviderError") !== void 0;
}
var h =
  /ExpiredToken|InvalidSignature|SignatureDoesNotMatch|UnrecognizedClient|InvalidClientTokenId|security token.*(invalid|expired)|signature we calculated does not match|Bearer Token has expired|Authentication failed.*API Key|Missing required parameters in the API Key/i;
function lP() {
  let r = a.ANTHROPIC_CUSTOM_HEADERS;
  if (!r) return !1;
  return r.split(/\n|\r\n/).some((e) => {
    let t = e.indexOf(":");
    return t !== -1 && e.slice(0, t).trim().toLowerCase() === "x-api-key";
  });
}
function Awt(r, e) {
  return h.test(`${r ?? ""} ${e ?? ""}`);
}
var _O = { __auth: { provider: null, tokenCache: null, resolution: null, error: null, extraHeaders: {} } };
function DAe() {
  let r = a.ANTHROPIC_AUTH_TOKEN;
  if (r) return `Bearer ${r}`;
  let e = a.ANTHROPIC_CUSTOM_HEADERS;
  if (!e) return;
  for (let t of e.split(/\n|\r\n/)) {
    let o = t.indexOf(":");
    if (o !== -1 && t.slice(0, o).trim().toLowerCase() === "authorization") {
      let i = t.slice(o + 1).trim();
      if (i) return i;
    }
  }
  return;
}
function f(r) {
  if (!r || typeof r !== "object") return !1;
  let e = r;
  return (
    typeof e.AccessKeyId === "string" &&
    typeof e.SecretAccessKey === "string" &&
    typeof e.SessionToken === "string" &&
    e.AccessKeyId.length > 0 &&
    e.SecretAccessKey.length > 0 &&
    e.SessionToken.length > 0
  );
}
function Hrr(r) {
  if (!r || typeof r !== "object") return null;
  let e = r;
  if (f(e.Credentials)) return e.Credentials;
  if (f(e)) return e;
  return null;
}
var g = 30000;
function S() {
  return a.CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS ?? 60000;
}
async function xrr() {
  let [{ STSClient: r, GetCallerIdentityCommand: e }, t] = await Promise.all([
      import("/$bunfs/root/chunk-vb3bjy55.js"),
      MT(),
    ]),
    o = new r({ region: t, ...(await boe({ url: Soe(t), region: t, requestTimeoutMs: g })) });
  await Xt(o.send(new e({})), S(), "AWS STS");
}
async function Irr() {
  try {
    n("Clearing AWS credential provider cache");
    let [{ fromIni: r }, e] = await Promise.all([import("/$bunfs/root/chunk-dbfgsxg1.js"), MT()]),
      t = await XY({ url: Soe(e), requestTimeoutMs: g }),
      o = r({
        ignoreCache: !0,
        ...(t && { clientConfig: { requestHandler: t }, parentClientConfig: { requestHandler: t, region: e } }),
      });
    await Xt(o(), S(), "AWS ini cache refresh"), n("AWS credential provider cache refreshed");
  } catch (r) {
    n(`Failed to refresh AWS credential cache: ${l(r)}`);
  }
}
export { PAe, MT, Ewt, bTn, J4t, lP, Awt, _O, DAe, Hrr, xrr, Irr };
