// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { S } from "/$bunfs/root/modules/chunk-aestrhzj/prelude.js";
import { Jo, Xl } from "/$bunfs/root/modules/chunk-aestrhzj/module-002.js";
import { Td } from "/$bunfs/root/modules/chunk-aestrhzj/module-003.js";

var st = S(function (Mt) {
  var Fv =
      (Mt && Mt.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: true,
                get: function () {
                  return t[n];
                },
              };
            Object.defineProperty(e, i, r);
          }
        : function (e, t, n, i) {
            if (i === void 0) i = n;
            e[i] = t[n];
          }),
    nZ =
      (Mt && Mt.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    iZ =
      (Mt && Mt.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Fv(t, e, n);
        }
        return nZ(t, e), t;
      },
    oZ =
      (Mt && Mt.__exportStar) ||
      function (e, t) {
        for (var n in e) if (n !== "default" && !Object.prototype.hasOwnProperty.call(t, n)) Fv(t, e, n);
      };
  Object.defineProperty(Mt, "__esModule", { value: true });
  Mt.z = void 0;
  var Bv = iZ(Td());
  Mt.z = Bv;
  oZ(Td(), Mt);
  Mt.default = Bv;
});

var ht = S(function (Wv) {
  Object.defineProperty(Wv, "__esModule", { value: true });
  Wv.DEPENDENCY_INSTALL_DOMAINS =
    Wv.PYTHON_EXTENSION_RUNTIME_HOSTS =
    Wv.AWS_REGION_RE =
    Wv.VERTEX_AUTH_HOSTS =
    Wv.DATADOG_INTAKE_HOSTS =
    Wv.GOOGLE_IAMCRED_HOST =
    Wv.GOOGLE_STS_HOST =
    Wv.GOOGLE_OAUTH2_HOST =
    Wv.GOOGLE_ACCOUNTS_HOST =
    Wv.MICROSOFT_LOGIN_HOST =
    Wv.SENTRY_INGEST_HOST =
    Wv.SENTRY_WILDCARD_HOST =
    Wv.ANTHROPIC_ASSETS_HOST =
    Wv.MCP_APP_SANDBOX_WILDCARD_HOST =
    Wv.ARTIFACT_IFRAME_HOST =
    Wv.GSTATIC_WILDCARD =
    Wv.FAVICON_PROXY_HOST =
    Wv.SEGMENT_API_HOST =
    Wv.SEGMENT_CDN_HOST =
    Wv.PLATFORM_CLAUDE_HOST =
    Wv.ANTHROPIC_API_HOST =
    Wv.UPDATE_FEED_HOST =
    Wv.VM_BUNDLE_HOST =
    Wv.MINIMAL_EGRESS_DOMAINS =
      void 0;
  Wv.isAnthropicHost = aZ;
  Wv.safeHostname = Ad;
  Wv.vertexInferenceHost = sZ;
  Wv.bedrockRuntimeHost = Kv;
  Wv.mantleRuntimeHost = uZ;
  Wv.bedrockControlPlaneHost = qv;
  Wv.awsSsoOidcHost = Hv;
  Wv.awsSsoPortalHost = Vv;
  Wv.bedrockSsoHosts = Gv;
  Wv.bedrockHosts = cZ;
  Wv.parseEgressHostEntry = Rd;
  Wv.stripEgressEntryPort = pZ;
  Wv.dropPortScopedEgressEntries = mZ;
  Wv.MINIMAL_EGRESS_DOMAINS = ["*.anthropic.com", "anthropic.com", "claude.com", "*.claude.com"];
  Wv.VM_BUNDLE_HOST = "downloads.claude.ai";
  Wv.UPDATE_FEED_HOST = "releases.claude.com";
  Wv.ANTHROPIC_API_HOST = "api.anthropic.com";
  function aZ(e) {
    let t = e.replace(/\.$/, "").toLowerCase();
    return t === "anthropic.com" || t.endsWith(".anthropic.com");
  }
  Wv.PLATFORM_CLAUDE_HOST = "platform.claude.com";
  Wv.SEGMENT_CDN_HOST = "a-cdn.anthropic.com";
  Wv.SEGMENT_API_HOST = "a-api.anthropic.com";
  Wv.FAVICON_PROXY_HOST = "www.google.com";
  Wv.GSTATIC_WILDCARD = "*.gstatic.com";
  Wv.ARTIFACT_IFRAME_HOST = "www.claudeusercontent.com";
  Wv.MCP_APP_SANDBOX_WILDCARD_HOST = "*.claudemcpcontent.com";
  Wv.ANTHROPIC_ASSETS_HOST = "assets.claude.ai";
  Wv.SENTRY_WILDCARD_HOST = "*.sentry.io";
  Wv.SENTRY_INGEST_HOST = "o1158394.ingest.us.sentry.io";
  Wv.MICROSOFT_LOGIN_HOST = "login.microsoftonline.com";
  Wv.GOOGLE_ACCOUNTS_HOST = "accounts.google.com";
  Wv.GOOGLE_OAUTH2_HOST = "oauth2.googleapis.com";
  Wv.GOOGLE_STS_HOST = "sts.googleapis.com";
  Wv.GOOGLE_IAMCRED_HOST = "iamcredentials.googleapis.com";
  Wv.DATADOG_INTAKE_HOSTS = [
    "browser-intake-datadoghq.com",
    "browser-intake-us3-datadoghq.com",
    "browser-intake-us5-datadoghq.com",
    "browser-intake-ap1-datadoghq.com",
    "browser-intake-ap2-datadoghq.com",
    "browser-intake-datadoghq.eu",
    "browser-intake-ddog-gov.com",
  ];
  Wv.VERTEX_AUTH_HOSTS = [Wv.GOOGLE_OAUTH2_HOST, Wv.GOOGLE_STS_HOST, Wv.GOOGLE_ACCOUNTS_HOST, Wv.GOOGLE_IAMCRED_HOST];
  function Ad(e) {
    if (typeof e !== "string" || e === "") return;
    let t = /^[a-z][a-z0-9+.-]*:\/\//i.test(e) ? e : `https://${e}`;
    try {
      return new URL(t).hostname || void 0;
    } catch (n) {
      return;
    }
  }
  function sZ(e, t) {
    var n;
    return (n = Ad(t)) !== null && n !== void 0
      ? n
      : e === "global"
        ? "aiplatform.googleapis.com"
        : e === "eu" || e === "us"
          ? `aiplatform.${e}.rep.googleapis.com`
          : `${e}-aiplatform.googleapis.com`;
  }
  function Kv(e) {
    return `bedrock-runtime${e.startsWith("us-gov-") ? "-fips" : ""}.${e}.amazonaws.com`;
  }
  function uZ(e) {
    return `bedrock-mantle.${e}.api.aws`;
  }
  function qv(e) {
    return `bedrock${e.startsWith("us-gov-") ? "-fips" : ""}.${e}.amazonaws.com`;
  }
  Wv.AWS_REGION_RE = /^[a-z]{2}(-[a-z]+)+-\d{1,2}$/;
  function Hv(e) {
    return `oidc.${e}.amazonaws.com`;
  }
  function Vv(e) {
    return `portal.sso.${e}.amazonaws.com`;
  }
  function Gv(e) {
    return [Vv(e), Hv(e)];
  }
  function cZ(e, t, n, i = true) {
    var r;
    let o = (r = Ad(n)) !== null && r !== void 0 ? r : Kv(e),
      s = i ? [qv(e)] : [];
    if (t) return [o, ...s];
    return [o, ...s, "sts.amazonaws.com", `sts.${e}.amazonaws.com`, ...Gv(e)];
  }
  Wv.PYTHON_EXTENSION_RUNTIME_HOSTS = [
    "github.com",
    "objects.githubusercontent.com",
    "pypi.org",
    "files.pythonhosted.org",
  ];
  Wv.DEPENDENCY_INSTALL_DOMAINS = [
    "registry.npmjs.org",
    "npmjs.com",
    "www.npmjs.com",
    "npmjs.org",
    "www.npmjs.org",
    "yarnpkg.com",
    "registry.yarnpkg.com",
    "pypi.org",
    "files.pythonhosted.org",
    "pythonhosted.org",
    "github.com",
    "objects.githubusercontent.com",
    "archive.ubuntu.com",
    "security.ubuntu.com",
    "crates.io",
    "index.crates.io",
    "static.crates.io",
    "playwright.download.prss.microsoft.com",
    "cdn.playwright.dev",
  ];
  var lZ = /^[a-z0-9_-]+(?:\.[a-z0-9_-]+)*$/i,
    dZ = /^[1-9][0-9]{0,4}$/;
  function fZ(e) {
    if (e === "localhost") return true;
    let t = e.startsWith("*.") ? e.slice(2) : e;
    return lZ.test(t) && t.includes(".");
  }
  function Rd(e) {
    let t = e,
      n,
      i = e.lastIndexOf(":");
    if (i !== -1) {
      let o = e.slice(i + 1);
      if (!dZ.test(o)) return null;
      if (((n = Number(o)), n > 65535)) return null;
      t = e.slice(0, i);
    }
    if (t === "*") return n === void 0 ? { host: t } : null;
    if (!fZ(t)) return null;
    let r = t.toLowerCase();
    return n === void 0 ? { host: r } : { host: r, port: n };
  }
  function pZ(e) {
    var t, n;
    return (n = (t = Rd(e)) === null || t === void 0 ? void 0 : t.host) !== null && n !== void 0 ? n : e;
  }
  function mZ(e) {
    return e === null || e === void 0
      ? void 0
      : e.filter((t) => {
          let n = Rd(t);
          return n ? n.port === void 0 : !t.includes(":");
        });
  }
});

var zu = S(function (tw) {
  Object.defineProperty(tw, "__esModule", { value: true });
  tw.KIND_PRECEDENCE =
    tw.INFERENCE_CREDENTIAL_KINDS =
    tw.getProviderLabel =
    tw.DEFAULT_INFERENCE_PROVIDER =
    tw.PROVIDERS =
    tw.PROVIDER_DISPLAY =
      void 0;
  tw.PROVIDER_DISPLAY = {
    gateway: "Gateway",
    anthropic: "Claude API",
    bedrock: "Bedrock",
    mantle: "Bedrock Mantle",
    vertex: "Vertex AI",
    foundry: "Foundry",
  };
  tw.PROVIDERS = Object.keys(tw.PROVIDER_DISPLAY);
  tw.DEFAULT_INFERENCE_PROVIDER = "gateway";
  var GZ = (e) => (e ? tw.PROVIDER_DISPLAY[e] : "");
  tw.getProviderLabel = GZ;
  tw.INFERENCE_CREDENTIAL_KINDS = ["static", "helper-script", "interactive", "vendor-profile", "oauth", "workforce"];
  tw.KIND_PRECEDENCE = ["interactive", "workforce", "oauth", "vendor-profile", "helper-script", "static"];
});

var Ze = S(function (Kn) {
  Object.defineProperty(Kn, "__esModule", { value: true });
  Kn.ZodKind =
    Kn.SHORT_DESCRIPTION_MAX_LENGTH =
    Kn.PROVIDERS =
    Kn.PROVIDER_DISPLAY =
    Kn.KIND_PRECEDENCE =
    Kn.INFERENCE_CREDENTIAL_KINDS =
    Kn.getProviderLabel =
    Kn.DEFAULT_INFERENCE_PROVIDER =
      void 0;
  Kn.effectiveVisibility = iw;
  Kn.compareDesktopVersions = ow;
  Kn.min3pAvailableInVersion = QZ;
  Kn.isUnreleasedVersion = Cd;
  Kn.supportEntries = Dd;
  Kn.isFullyUnreleasedSupport = e4;
  Kn.isReleasedFor3p = t4;
  Kn.presetForItem = r4;
  Kn.shortDescription = n4;
  Kn.longDescription = i4;
  Kn.deriveSubFieldControlType = aw;
  Kn.runtimeDefault = o4;
  Kn.displayDefault = a4;
  Kn.annotate = bi;
  Kn.annotationsOf = Bn;
  Kn.filePath = s4;
  Kn.folderPath = u4;
  Kn.urlString = c4;
  Kn.notHostedServable = l4;
  Kn.globPattern = d4;
  Kn.redact = f4;
  Kn.redactPolicyOf = p4;
  Kn.pathKindOf = m4;
  Kn.acceptsWildcard = g4;
  Kn.isUrlString = h4;
  Kn.isNotGatewayServable = _4;
  Kn.isNotHostedServable = y4;
  Kn.groupOverrideOf = b4;
  Kn.remotePolicyOf = v4;
  Kn.field = w4;
  Kn.fieldMetaForNode = xd;
  Kn.subfield = S4;
  Kn.subfieldMetaForNode = Lu;
  Kn.variantMeta = O4;
  Kn.variantMetaForNode = k4;
  Kn.localExecSubfieldKeys = P4;
  Kn.consentRequiringSubfieldKeys = E4;
  Kn.zodKind = ut;
  Kn.unwrapStep = Yi;
  Kn.unwrapZod = wn;
  Kn.pipeSidesOf = I4;
  Kn.unionOptionsOf = Uu;
  Kn.arrayElementOf = Md;
  Kn.recordKeyTypeOf = T4;
  Kn.recordValueTypeOf = A4;
  Kn.numberIsInt = R4;
  Kn.numberBoundsOf = j4;
  Kn.findDefaultValue = C4;
  Kn.discriminatorArmsOf = x4;
  Kn.discriminatorKeyOf = M4;
  Kn.literalValueOf = z4;
  Kn.dropUndefined = L4;
  Kn.enumOptionsOf = Nu;
  Kn.recordValueEnumOf = uw;
  Kn.subFieldsOf = cw;
  var nw = st(),
    Xi = zu();
  Object.defineProperty(Kn, "DEFAULT_INFERENCE_PROVIDER", {
    enumerable: true,
    get: function () {
      return Xi.DEFAULT_INFERENCE_PROVIDER;
    },
  });
  Object.defineProperty(Kn, "getProviderLabel", {
    enumerable: true,
    get: function () {
      return Xi.getProviderLabel;
    },
  });
  Object.defineProperty(Kn, "INFERENCE_CREDENTIAL_KINDS", {
    enumerable: true,
    get: function () {
      return Xi.INFERENCE_CREDENTIAL_KINDS;
    },
  });
  Object.defineProperty(Kn, "KIND_PRECEDENCE", {
    enumerable: true,
    get: function () {
      return Xi.KIND_PRECEDENCE;
    },
  });
  Object.defineProperty(Kn, "PROVIDER_DISPLAY", {
    enumerable: true,
    get: function () {
      return Xi.PROVIDER_DISPLAY;
    },
  });
  Object.defineProperty(Kn, "PROVIDERS", {
    enumerable: true,
    get: function () {
      return Xi.PROVIDERS;
    },
  });
  function iw(e) {
    var t, n;
    return (n = (t = e.support) === null || t === void 0 ? void 0 : t.visibility) !== null && n !== void 0
      ? n
      : "public";
  }
  function ow(e, t) {
    var n, i;
    let r = (u) =>
        u.split(".").map((c) => {
          let d = Number(c);
          return Number.isFinite(d) ? d : 0;
        }),
      o = r(e),
      s = r(t);
    for (let u = 0; u < Math.max(o.length, s.length); u++) {
      let c = ((n = o[u]) !== null && n !== void 0 ? n : 0) - ((i = s[u]) !== null && i !== void 0 ? i : 0);
      if (c !== 0) return c < 0 ? -1 : 1;
    }
    return 0;
  }
  function QZ(e) {
    return (Array.isArray(e) ? e : [e])
      .filter((n) => n.scopes.includes("3p"))
      .map((n) => n.availableInVersion)
      .sort(ow)[0];
  }
  function Cd(e) {
    return e === "@next";
  }
  function Dd(e) {
    let t = e.support.enabled;
    return Array.isArray(t) ? t : [t];
  }
  function e4(e) {
    let t = Dd(e);
    return t.length > 0 && t.every((n) => Cd(n.availableInVersion));
  }
  function t4(e) {
    return Dd(e).some((t) => t.scopes.includes("3p") && !Cd(t.availableInVersion));
  }
  function r4(e, t, n) {
    return e === null || e === void 0
      ? void 0
      : e.find((i) =>
          Object.entries(i.item).every(([r, o]) => r === n || (typeof o === "object" && o !== null) || t[r] === o),
        );
  }
  Kn.SHORT_DESCRIPTION_MAX_LENGTH = 160;
  function n4(e, t) {
    return { text: e, ...t };
  }
  function i4(e, t) {
    return { text: e, ...t };
  }
  function aw(e, t) {
    if (t.control) return t.control;
    let n = ut(wn(e));
    if (n === Kn.ZodKind.ZodBoolean) return "bool";
    if (n === Kn.ZodKind.ZodNumber) return "int";
    if (n === Kn.ZodKind.ZodEnum || n === Kn.ZodKind.ZodLiteral) return "select";
    if (n === Kn.ZodKind.ZodRecord) return "record";
    if (n === Kn.ZodKind.ZodDiscriminatedUnion) return "union";
    if (n === Kn.ZodKind.ZodArray || n === Kn.ZodKind.ZodObject) return "json";
    return "text";
  }
  function o4(e) {
    let t = e.default;
    return t === void 0 || typeof t === "object" ? void 0 : t;
  }
  function a4(e) {
    let t = e.default;
    return t !== void 0 && typeof t === "object" ? t.displayOnly : t;
  }
  function bi(e, t) {
    let n = e;
    return (n.__antAnn = { ...n.__antAnn, ...t }), e;
  }
  function Bn(e) {
    let t = {},
      n = new Set(),
      i = (r) => {
        if (n.has(r)) return;
        n.add(r);
        let o = r.__antAnn;
        if (o) {
          for (let u of Object.keys(o)) if (t[u] === void 0) t[u] = o[u];
        }
        if (ut(r) === Kn.ZodKind.ZodPipeline) {
          let u = Rt(r),
            c = Yi(r);
          if (c !== r) i(c);
          for (let d of [u.in, u.out]) if (d && d !== c) i(d);
          return;
        }
        let s = Yi(r);
        if (s !== r) i(s);
      };
    return i(e), t;
  }
  function s4(e = nw.z.string()) {
    return bi(e, { pathKind: "file" });
  }
  function u4(e = nw.z.string()) {
    return bi(e, { pathKind: "folder" });
  }
  function c4(e) {
    return bi(e, { url: true });
  }
  function l4(e) {
    return bi(e, { hostedServable: false });
  }
  function d4(e) {
    return bi(e, { glob: true });
  }
  function f4(e, t = "drop") {
    return bi(e, { redact: t });
  }
  function p4(e) {
    return Bn(e).redact;
  }
  function m4(e) {
    let t = Bn(e).pathKind;
    if (t) return t;
    let n = wn(e),
      i = Md(n);
    return i ? Bn(i).pathKind : void 0;
  }
  function g4(e) {
    return Bn(e).glob === true;
  }
  function h4(e) {
    return Bn(e).url === true;
  }
  function _4(e) {
    return Bn(e).gatewayServable === false;
  }
  function y4(e) {
    return Bn(e).hostedServable === false;
  }
  function b4(e) {
    var t;
    return (t = xd(e)) === null || t === void 0 ? void 0 : t.groupOverride;
  }
  function v4(e) {
    var t, n, i;
    return (n = (t = xd(e)) === null || t === void 0 ? void 0 : t.remotePolicy) !== null && n !== void 0
      ? n
      : (i = Lu(e)) === null || i === void 0
        ? void 0
        : i.remotePolicy;
  }
  function w4(e, t) {
    return (e.__antFieldMeta = t), e;
  }
  function xd(e) {
    return e === null || e === void 0 ? void 0 : e.__antFieldMeta;
  }
  function S4(e, t) {
    return (e.__antSubFieldMeta = t), e;
  }
  function Lu(e) {
    return e === null || e === void 0 ? void 0 : e.__antSubFieldMeta;
  }
  function O4(e, t) {
    return (e.__antVariantMeta = t), e;
  }
  function k4(e) {
    return e === null || e === void 0 ? void 0 : e.__antVariantMeta;
  }
  function sw(e, t) {
    let n = new Set(),
      i = (r, o) => {
        var s;
        let u = wn(r),
          c = ut(u);
        if (c === Kn.ZodKind.ZodObject)
          for (let [d, f] of Object.entries(u.shape)) {
            let p = f,
              h = o ? `${o}.${d}` : d,
              y = (s = Lu(p)) === null || s === void 0 ? void 0 : s.remotePolicy;
            if (y && t(y)) n.add(h);
            i(p, h);
          }
        else if (c === Kn.ZodKind.ZodUnion || c === Kn.ZodKind.ZodDiscriminatedUnion) for (let d of Uu(u)) i(d, o);
        else if (c === Kn.ZodKind.ZodArray) {
          let d = Md(u);
          if (d) i(d, o);
        }
      };
    return i(e, ""), n;
  }
  function P4(e) {
    return sw(e, (t) => t.type === "remote-disabled");
  }
  function E4(e) {
    return sw(e, (t) => t.requiresUserConsent === true);
  }
  Kn.ZodKind = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBoolean: "boolean",
    ZodUndefined: "undefined",
    ZodNever: "never",
    ZodLiteral: "literal",
    ZodEnum: "enum",
    ZodObject: "object",
    ZodArray: "array",
    ZodRecord: "record",
    ZodUnion: "union",
    ZodDiscriminatedUnion: "discriminatedUnion",
    ZodOptional: "optional",
    ZodDefault: "default",
    ZodPrefault: "prefault",
    ZodNullable: "nullable",
    ZodCatch: "catch",
    ZodReadonly: "readonly",
    ZodPipeline: "pipe",
    ZodTransform: "transform",
  };
  function Rt(e) {
    return e._zod.def;
  }
  function ut(e) {
    var t;
    let n = (t = e === null || e === void 0 ? void 0 : e._zod) === null || t === void 0 ? void 0 : t.def;
    if (!(n === null || n === void 0 ? void 0 : n.type)) return;
    if (n.type === Kn.ZodKind.ZodUnion && n.discriminator !== void 0) return Kn.ZodKind.ZodDiscriminatedUnion;
    return n.type;
  }
  var $4 = new Set([
    Kn.ZodKind.ZodOptional,
    Kn.ZodKind.ZodDefault,
    Kn.ZodKind.ZodPrefault,
    Kn.ZodKind.ZodNullable,
    Kn.ZodKind.ZodCatch,
    Kn.ZodKind.ZodReadonly,
  ]);
  function Yi(e) {
    var t;
    let n = ut(e);
    if (n && $4.has(n)) return (t = Rt(e).innerType) !== null && t !== void 0 ? t : e;
    if (n === Kn.ZodKind.ZodPipeline) {
      let i = Rt(e);
      if (!i.in || !i.out) return e;
      return ut(i.out) === Kn.ZodKind.ZodTransform ? i.in : i.out;
    }
    return e;
  }
  function wn(e) {
    let t = e;
    for (;;) {
      let n = Yi(t);
      if (!n || n === t) return t;
      t = n;
    }
  }
  function I4(e) {
    if (ut(e) !== Kn.ZodKind.ZodPipeline) return;
    let t = Rt(e);
    return t.in && t.out ? { in: t.in, out: t.out } : void 0;
  }
  function Uu(e) {
    var t;
    let n = ut(e);
    if (n === Kn.ZodKind.ZodUnion || n === Kn.ZodKind.ZodDiscriminatedUnion)
      return (t = Rt(e).options) !== null && t !== void 0 ? t : [];
    return [];
  }
  function Md(e) {
    return ut(e) === Kn.ZodKind.ZodArray ? Rt(e).element : void 0;
  }
  function T4(e) {
    return ut(e) === Kn.ZodKind.ZodRecord ? Rt(e).keyType : void 0;
  }
  function A4(e) {
    return ut(e) === Kn.ZodKind.ZodRecord ? Rt(e).valueType : void 0;
  }
  function R4(e) {
    return ut(e) === Kn.ZodKind.ZodNumber && e.isInt === true;
  }
  function j4(e) {
    if (ut(e) !== Kn.ZodKind.ZodNumber) return { min: void 0, max: void 0 };
    let t = e._zod.def.checks,
      n,
      i;
    for (let r of t !== null && t !== void 0 ? t : []) {
      let o = r._zod.def;
      if (typeof o.value !== "number") continue;
      if (o.check === "greater_than") n = { value: o.value, inclusive: o.inclusive === true };
      else if (o.check === "less_than") i = { value: o.value, inclusive: o.inclusive === true };
    }
    return { min: n, max: i };
  }
  function C4(e) {
    let t = e;
    for (;;) {
      let n = ut(t);
      if (n === Kn.ZodKind.ZodDefault || n === Kn.ZodKind.ZodPrefault) return Rt(t).defaultValue;
      let i = Yi(t);
      if (i === t) return;
      t = i;
    }
  }
  function D4(e) {
    let t = e;
    for (;;) {
      if (ut(t) === Kn.ZodKind.ZodOptional) return true;
      let n = Yi(t);
      if (n === t) return false;
      t = n;
    }
  }
  function x4(e) {
    var t;
    let n = wn(e);
    if (ut(n) !== Kn.ZodKind.ZodDiscriminatedUnion) return [];
    let i = Rt(n).discriminator,
      r = [];
    if (D4(e)) r.push({ id: "" });
    for (let o of Uu(n)) {
      let s = o.shape[i];
      for (let u of (t = Nu(s)) !== null && t !== void 0 ? t : []) r.push({ id: u, schema: o });
    }
    return r;
  }
  function M4(e) {
    let t = wn(e);
    return ut(t) === Kn.ZodKind.ZodDiscriminatedUnion ? Rt(t).discriminator : void 0;
  }
  function z4(e) {
    var t;
    let n = e ? wn(e) : void 0;
    return n && ut(n) === Kn.ZodKind.ZodLiteral
      ? (t = Rt(n).values) === null || t === void 0
        ? void 0
        : t[0]
      : void 0;
  }
  function L4(e) {
    let t = { ...e };
    for (let n of Object.keys(t)) if (t[n] === void 0) delete t[n];
    return t;
  }
  function Nu(e) {
    var t, n;
    let i = wn(e),
      r = ut(i);
    if (r === Kn.ZodKind.ZodEnum) return Object.values((t = Rt(i).entries) !== null && t !== void 0 ? t : {});
    if (r === Kn.ZodKind.ZodLiteral) return (n = Rt(i).values) !== null && n !== void 0 ? n : [];
    return;
  }
  function uw(e) {
    let t = wn(e),
      n = ut(t) === Kn.ZodKind.ZodRecord ? Rt(t).valueType : void 0;
    return n ? Nu(n) : void 0;
  }
  function cw(e) {
    var t, n, i, r;
    if (!e) return [];
    let o = wn(e),
      s = Uu(o);
    if (s.length > 0) {
      let c = new Map(),
        d = new Map(),
        f = false;
      for (let h of s)
        for (let y of cw(h)) {
          let v = c.get(y.key);
          if (!v) c.set(y.key, y);
          else
            c.set(y.key, {
              ...v,
              ...(y.options && y.options.length > 0
                ? { options: [...new Set([...((t = v.options) !== null && t !== void 0 ? t : []), ...y.options])] }
                : {}),
              ...(y.optionLabels ? { optionLabels: { ...y.optionLabels, ...v.optionLabels } } : {}),
            });
          if (iw(y) === "public") {
            let k = (n = d.get(y.key)) !== null && n !== void 0 ? n : new Set();
            for (let P of (i = y.options) !== null && i !== void 0 ? i : []) k.add(P);
            d.set(y.key, k);
          } else f = true;
        }
      let p = [...c.values()];
      if (!f) return p;
      return p.map((h) => {
        var y;
        let v = d.get(h.key);
        if (!v) return h;
        let k = (y = h.options) === null || y === void 0 ? void 0 : y.filter((P) => !v.has(P));
        return {
          ...h,
          support: void 0,
          ...((k === null || k === void 0 ? void 0 : k.length) ? { nonPublicOptions: k } : {}),
        };
      });
    }
    if (ut(o) !== Kn.ZodKind.ZodObject) return [];
    let u = [];
    for (let [c, d] of Object.entries(o.shape)) {
      let f = d,
        p = Lu(f);
      if (p) {
        let h = aw(f, p);
        u.push({
          key: c,
          ...p,
          node: f,
          type: h,
          options: Nu(f),
          ...(h === "record" && { valueOptions: (r = p.optionValues) !== null && r !== void 0 ? r : uw(f) }),
        });
      }
    }
    return u;
  }
});

var pt = S(function (lw) {
  Object.defineProperty(lw, "__esModule", { value: true });
  lw.msg = void 0;
  var Z6 = (e) => e;
  lw.msg = Z6;
});

var Zu = S(function (gw) {
  Object.defineProperty(gw, "__esModule", { value: true });
  gw.TOOL_POLICY_EDITOR_VALUES = gw.TOOL_POLICY_VALUES = void 0;
  gw.strictestToolPolicy = pw;
  gw.isApprovalRequiredToolPolicy = F6;
  gw.toolPolicyKeyGlobMatch = mw;
  gw.lookupMcpToolPolicy = B6;
  gw.TOOL_POLICY_VALUES = ["allow", "ask", "ask-session", "blocked"];
  gw.TOOL_POLICY_EDITOR_VALUES = ["allow", "ask", "blocked"];
  var fw = { blocked: 3, ask: 2, "ask-session": 1, allow: 0 };
  function pw(e, t) {
    if (!e) return t;
    if (!t) return e;
    return fw[e] >= fw[t] ? e : t;
  }
  function F6(e) {
    return e === "ask" || e === "ask-session";
  }
  function mw(e, t) {
    let n = 0,
      i = 0,
      r = -1,
      o = -1;
    while (i < t.length)
      if (n < e.length && e[n] === "*") (r = n), (o = i), n++;
      else if (n < e.length && e[n] === t[i]) n++, i++;
      else if (r >= 0) o++, (n = r + 1), (i = o);
      else return false;
    while (n < e.length && e[n] === "*") n++;
    return n === e.length;
  }
  function B6(e, t) {
    if (!e) return;
    if (Object.hasOwn(e, t)) return e[t];
    let n;
    for (let [i, r] of Object.entries(e)) if (i.includes("*") && mw(i, t)) n = pw(n, r);
    return n;
  }
});

var Wt = S(function (Gn) {
  Object.defineProperty(Gn, "__esModule", { value: true });
  Gn.GatewayOidc =
    Gn.BootstrapFetchOidc =
    Gn.BootstrapOidc =
    Gn.ManagedMcpServers =
    Gn.GITHUB_IRREVERSIBLE_WRITE_TOOLS =
    Gn.M365_IRREVERSIBLE_WRITE_TOOLS =
    Gn.BUILTIN_DEFAULT_TOOL_POLICY =
    Gn.DirectMcpServerConfig =
    Gn.M365_DEFAULT_DELEGATED_SCOPES =
    Gn.M365_ADMIN_CONSENT_SCOPES =
    Gn.M365_ALWAYS_REQUESTED_SCOPES =
    Gn.M365_WRITE_DELEGATED_SCOPES =
    Gn.M365_GRANTABLE_DELEGATED_SCOPES =
    Gn.AZURE_CLOUD_HOSTS =
    Gn.AZURE_CLOUDS =
    Gn.WEB_SEARCH_PROVIDER_HOSTS =
    Gn.WEB_SEARCH_PROVIDERS =
    Gn.BUILTIN_MCP_SERVERS =
    Gn.RemoteDirectMcpServerConfig =
    Gn.McpOauth =
    Gn.ByoOauth =
    Gn.ORG_PLUGIN_SETTINGS_PARSE_FAILED =
    Gn.OrgPluginSettings =
    Gn.LegacyOrgPluginSettings =
    Gn.OrgPluginServerValue =
    Gn.TOOL_POLICY_LABEL =
    Gn.TOOL_POLICY_OPTION_LABELS =
    Gn.LenientToolPolicy =
    Gn.ToolPolicySchema =
    Gn.CALLBACK_HOST_OPTIONS =
    Gn.httpsUrl =
    Gn.LOOPBACK_HOSTS =
    Gn.toolPolicyKeyGlobMatch =
    Gn.TOOL_POLICY_VALUES =
    Gn.TOOL_POLICY_EDITOR_VALUES =
    Gn.strictestToolPolicy =
    Gn.lookupMcpToolPolicy =
    Gn.isApprovalRequiredToolPolicy =
      void 0;
  Gn.urlSchema = ma;
  Gn.isOrgPluginSettingsParseFailed = X6;
  Gn.orgPluginSettingsToPolicyMap = Nd;
  Gn.orgPluginSettingsToLegacyRecord = Q6;
  Gn.orgPluginSettingsFromPolicyMap = eF;
  Gn.resolveByoAsSelection = Pw;
  Gn.byoAsSelectionUrls = tF;
  Gn.isSafeMcpCommand = Iw;
  Gn.isManagedMcpEntryMemberConsumed = _F;
  Gn.isBuiltinMcpEntry = ro;
  Gn.hostsForBuiltinMcpEntry = yF;
  Gn.findWebSearchBuiltin = bF;
  Gn.isBuiltinMcpItem = vF;
  Gn.resolveEffectiveMcpToolPolicy = Hd;
  Gn.builtinWriteToolCoverageGaps = jw;
  Gn.unlistedBuiltinWriteTools = SF;
  Gn.resolveMcpToolPolicies = Cw;
  Gn.resolveManagedToolPolicy = OF;
  Gn.adaptPluginMcp = kF;
  Gn.hasOAuthConfig = PF;
  Gn.wantsOAuthProvider = EF;
  Gn.relevantMcpEntryIssues = Dw;
  Gn.checkManagedMcpServersForDrops = TF;
  Gn.checkOrgPluginSettingsForDrops = jF;
  Gn.resolveOidcEndpointSelection = CF;
  Gn.oidcEndpointSelectionUrls = DF;
  Gn.scopesIncludeResourceScope = LF;
  var C = st(),
    W6 = ht(),
    z = Ze(),
    E = pt(),
    zt = Zu(),
    no = Zu();
  Object.defineProperty(Gn, "isApprovalRequiredToolPolicy", {
    enumerable: true,
    get: function () {
      return no.isApprovalRequiredToolPolicy;
    },
  });
  Object.defineProperty(Gn, "lookupMcpToolPolicy", {
    enumerable: true,
    get: function () {
      return no.lookupMcpToolPolicy;
    },
  });
  Object.defineProperty(Gn, "strictestToolPolicy", {
    enumerable: true,
    get: function () {
      return no.strictestToolPolicy;
    },
  });
  Object.defineProperty(Gn, "TOOL_POLICY_EDITOR_VALUES", {
    enumerable: true,
    get: function () {
      return no.TOOL_POLICY_EDITOR_VALUES;
    },
  });
  Object.defineProperty(Gn, "TOOL_POLICY_VALUES", {
    enumerable: true,
    get: function () {
      return no.TOOL_POLICY_VALUES;
    },
  });
  Object.defineProperty(Gn, "toolPolicyKeyGlobMatch", {
    enumerable: true,
    get: function () {
      return no.toolPolicyKeyGlobMatch;
    },
  });
  Gn.LOOPBACK_HOSTS = new Set(["127.0.0.1", "localhost", "[::1]"]);
  function ma(e = {}) {
    return (0, z.annotate)(
      C.z.preprocess(
        (t) => {
          if (typeof t !== "string") return t;
          let n = t.trim();
          return n && !/^[a-z][a-z0-9+.-]*:\/\//i.test(n) ? `https://${n}` : n;
        },
        C.z
          .string()
          .trim()
          .url()
          .refine(
            (t) => {
              try {
                let { protocol: n, hostname: i } = new URL(t);
                if (n === "https:") return !e.rejectLoopback || !Gn.LOOPBACK_HOSTS.has(i);
                return !!e.allowLoopbackHttp && n === "http:" && Gn.LOOPBACK_HOSTS.has(i);
              } catch (n) {
                return false;
              }
            },
            {
              message: e.rejectLoopback
                ? "must use https with a non-loopback host"
                : e.allowLoopbackHttp
                  ? "must use https (or http on loopback)"
                  : "must use https",
            },
          ),
      ),
      { url: true },
    );
  }
  Gn.httpsUrl = ma({ allowLoopbackHttp: true });
  Gn.CALLBACK_HOST_OPTIONS = ["127.0.0.1", "localhost"];
  Gn.ToolPolicySchema = C.z.record(C.z.string(), C.z.enum(zt.TOOL_POLICY_VALUES));
  Gn.LenientToolPolicy = C.z.preprocess((e) => {
    if (!e || typeof e !== "object") return e;
    let t = new Set(zt.TOOL_POLICY_VALUES);
    return Object.fromEntries(Object.entries(e).filter(([, n]) => typeof n === "string" && t.has(n)));
  }, Gn.ToolPolicySchema);
  Gn.TOOL_POLICY_OPTION_LABELS = {
    allow: (0, E.msg)({ defaultMessage: "Always allow", id: "yj3vT8BAIa" }),
    ask: (0, E.msg)({ defaultMessage: "Ask each time", id: "IeOHqi8Fbf" }),
    "ask-session": (0, E.msg)({ defaultMessage: "Ask once per session", id: "MBqBb4XNI5" }),
    blocked: (0, E.msg)({ defaultMessage: "Blocked", id: "qqZPUhaHMm" }),
  };
  Gn.TOOL_POLICY_LABEL = (0, E.msg)({ defaultMessage: "Tool policy", id: "uSQ/bLKBIp" });
  Gn.OrgPluginServerValue = C.z.object({ toolPolicy: Gn.LenientToolPolicy.optional() });
  Gn.LegacyOrgPluginSettings = C.z.object({
    mcpServers: C.z.record(C.z.string(), Gn.OrgPluginServerValue.catch({})).optional(),
  });
  function Sw(e) {
    var t;
    if (Array.isArray(e)) return e;
    let n = Gn.LegacyOrgPluginSettings.safeParse(e);
    if (!n.success) return e;
    return Object.entries((t = n.data.mcpServers) !== null && t !== void 0 ? t : {}).map(([i, r]) => {
      var o;
      return {
        serverName: i,
        tools: Object.entries((o = r.toolPolicy) !== null && o !== void 0 ? o : {}).map(([s, u]) => ({
          toolName: s,
          permission: u,
        })),
      };
    });
  }
  var Ow = C.z.object({
      toolName: (0, z.subfield)(C.z.string().min(1), {
        label: (0, E.msg)({ defaultMessage: "Tool", id: "FWLX0PGi80" }),
        placeholder: (0, E.msg)({ defaultMessage: "tool name", id: "rhPs8UtdHq" }),
      }),
      permission: (0, z.subfield)(C.z.enum(zt.TOOL_POLICY_VALUES), {
        label: (0, E.msg)({ defaultMessage: "Permission", id: "y4JnQ5QsBK" }),
        optionLabels: Gn.TOOL_POLICY_OPTION_LABELS,
        optionValues: zt.TOOL_POLICY_EDITOR_VALUES,
      }),
    }),
    Y6 = C.z.object({
      serverName: (0, z.subfield)(C.z.string().min(1), {
        label: (0, E.msg)({ defaultMessage: "Server name", id: "SsD9TTwUkB" }),
        isPrimaryKey: true,
        placeholder: (0, E.msg)({ defaultMessage: "server-name", id: "EvwX+qKToR" }),
      }),
      tools: (0, z.subfield)(
        C.z
          .array(Ow.nullable().catch(null))
          .transform((e) => e.filter((t) => t !== null))
          .default([]),
        { label: Gn.TOOL_POLICY_LABEL },
      ),
    });
  Gn.OrgPluginSettings = C.z.preprocess(
    Sw,
    C.z.array(Y6.nullable().catch(null)).transform((e) => e.filter((t) => t !== null)),
  );
  Gn.ORG_PLUGIN_SETTINGS_PARSE_FAILED = [];
  function X6(e) {
    return e === Gn.ORG_PLUGIN_SETTINGS_PARSE_FAILED;
  }
  function Nd(e) {
    var t;
    let n = Object.create(null),
      i = Array.isArray(e) ? e : Sw(e);
    if (!Array.isArray(i)) return n;
    for (let r of i) {
      let o = Object.hasOwn(n, r.serverName) ? n[r.serverName] : Object.create(null);
      for (let s of r.tools)
        o[s.toolName] =
          (t = (0, zt.strictestToolPolicy)(o[s.toolName], s.permission)) !== null && t !== void 0 ? t : s.permission;
      n[r.serverName] = o;
    }
    return n;
  }
  function Q6(e) {
    let t = Object.create(null);
    for (let [n, i] of Object.entries(Nd(e))) t[n] = { toolPolicy: { ...i } };
    return { mcpServers: t };
  }
  function eF(e) {
    return Object.entries(e).map(([t, n]) => ({
      serverName: t,
      tools: Object.entries(n).map(([i, r]) => ({ toolName: i, permission: r })),
    }));
  }
  var Vn = (e) => e.server !== void 0,
    Qi = (e) => Vn(e) && e.server === "microsoft365",
    qn = (e) => Vn(e) && e.server === "github",
    eo = (e) => e.transport === "stdio",
    to = (e) => !eo(e) && !Vn(e),
    Zd = (0, z.subfield)(C.z.string().min(1), {
      label: (0, E.msg)({ defaultMessage: "Name", id: "HAlOn1ZsuY" }),
      isPrimaryKey: true,
      placeholder: (0, E.msg)({ defaultMessage: "github", id: "Zejj2Gw5fy" }),
    }),
    ga = (0, z.subfield)(Gn.ToolPolicySchema.optional(), {
      label: Gn.TOOL_POLICY_LABEL,
      optionValues: zt.TOOL_POLICY_EDITOR_VALUES,
      placeholder: (0, E.msg)({ defaultMessage: "toolName", id: "iFhBHMeCjp" }),
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage: "Lock the approval state for specific tools. Unlisted tools stay user-controlled.",
            id: "bS7WElxrrh",
          }),
        ),
      },
    }),
    kw = {
      server: C.z
        .never({ error: "server is only valid on built-in entries, which must not set transport/url/command" })
        .optional(),
    },
    zd =
      'clientId must be a non-empty string (a pre-registered client requires it; for automatic registration use `"oauth": true` or an object with only scope/appendOfflineAccess/additionalRedirectReferrerHosts)',
    Ku = (0, z.subfield)(C.z.string().optional(), {
      label: (0, E.msg)({ defaultMessage: "Additional redirect referrer hosts", id: "sxWy/sz/Fr" }),
      mono: true,
      placeholder: (0, E.msg)({ defaultMessage: "(authorization URL host only)", id: "7lyDghlOiR" }),
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage:
              "Space-separated hostnames also accepted as the referrer of the sign-in callback. Only needed when the IdP completes sign-in from a different host.",
            id: "kux1XwHSoN",
          }),
        ),
        long: (0, z.longDescription)(
          "Only needed when the IdP completes sign-in from a host other than the authorization URL\u2019s. When a callback is rejected for a referrer mismatch, the rejected host is named in the app log \u2014 add that hostname here.",
        ),
      },
    }),
    Fd = C.z
      .never({ error: "scopes must be an array of scope-name strings (or use the space-separated `scope` field)" })
      .optional(),
    Bu = ["common", "organizations", "consumers"];
  Gn.ByoOauth = C.z.object({
    clientId: (0, z.subfield)(C.z.string().trim().min(1, { error: zd }).optional(), {
      label: (0, E.msg)({ defaultMessage: "Client ID", id: "U5+MBCY8VU" }),
      mono: true,
      placeholder: (0, E.msg)({ defaultMessage: "From your IdP app registration", id: "UBXsZZ/YgR" }),
    }),
    clientSecret: (0, z.subfield)((0, z.annotate)(C.z.string().min(1).optional(), { redact: "drop" }), {
      label: (0, E.msg)({ defaultMessage: "Client secret", id: "B7p2EChIPJ" }),
      mono: true,
      predicates: { show: (e) => Boolean(e.clientSecret) || !e.clientSecretHelper },
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage:
              "Only for IdPs whose token endpoint requires a client secret (e.g. Box). Leave blank for PKCE-only public clients.",
            id: "DH95pCwIsJ",
          }),
        ),
      },
    }),
    clientSecretHelper: (0, z.subfield)(C.z.string().min(1).optional(), {
      label: (0, E.msg)({ defaultMessage: "Client secret helper script", id: "97Wza/xUot" }),
      mono: true,
      remotePolicy: { requiresUserConsent: true },
      predicates: { show: (e) => Boolean(e.clientSecretHelper) || !e.clientSecret },
      placeholder: (0, E.msg)({ defaultMessage: "Absolute path", id: "StnRZmM3Xn" }),
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage: "Executable that prints the client secret on stdout. Overrides the inline value.",
            id: "nqAdNRIB3s",
          }),
        ),
      },
    }),
    authorizationServer: (0, z.subfield)(C.z.array(ma()).min(1).optional(), {
      label: (0, E.msg)({ defaultMessage: "Authorization server", id: "la+WYl1g5R" }),
      mono: true,
      placeholder: (0, E.msg)({ defaultMessage: '["https://api.box.com"]', id: "Kq/aajRMhf" }),
      predicates: { required: (e) => Boolean(e.clientSecret) || Boolean(e.clientSecretHelper) },
      requiredMessage: (0, E.msg)({
        defaultMessage: 'Required when a client secret is configured. For mcp.box.com use ["https://api.box.com"].',
        id: "8A1Nf0mHyK",
      }),
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage:
              "Issuer URLs the OAuth sign-in may use, as a JSON array. Pre-filled by presets; ask your IdP admin if unsure.",
            id: "03A87ql5DH",
          }),
        ),
      },
    }),
    authorizationUrl: (0, z.subfield)(Gn.httpsUrl.optional(), {
      label: (0, E.msg)({ defaultMessage: "Authorization URL", id: "uiL7XCPiaV" }),
      mono: true,
      predicates: {
        show: (e) => !e.tenantId && !(Array.isArray(e.authorizationServer) && e.authorizationServer.length > 0),
      },
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage:
              "Only for IdPs that don\u2019t serve a .well-known discovery document. Set together with Token URL; requires Client ID.",
            id: "Hf6aQERhbF",
          }),
        ),
      },
    }),
    tokenUrl: (0, z.subfield)(Gn.httpsUrl.optional(), {
      label: (0, E.msg)({ defaultMessage: "Token URL", id: "PJhe0HJqkm" }),
      mono: true,
      predicates: {
        show: (e) => !e.tenantId && !(Array.isArray(e.authorizationServer) && e.authorizationServer.length > 0),
      },
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage:
              "Only for IdPs that don\u2019t serve a .well-known discovery document. Set together with Authorization URL; requires Client ID.",
            id: "JZIh/4to9Z",
          }),
        ),
      },
    }),
    tenantId: (0, z.subfield)(C.z.union([C.z.guid(), C.z.enum(Bu)]).optional(), {
      label: (0, E.msg)({ defaultMessage: "Tenant ID", id: "VdfqU5wMCX" }),
      mono: true,
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage:
              "Required for single-tenant Entra apps. Leave blank for multi-tenant or non-Microsoft IdPs.",
            id: "SnxeYJYoto",
          }),
        ),
      },
    }),
    authFlow: (0, z.subfield)(C.z.enum(["browser", "broker"]).optional(), {
      label: (0, E.msg)({ defaultMessage: "Sign-in flow", id: "nt5Vq+fIlk" }),
      optionLabels: {
        browser: (0, E.msg)({ defaultMessage: "System browser", id: "H8jfEPcL/x" }),
        broker: (0, E.msg)({ defaultMessage: "OS identity broker (WAM / Company Portal)", id: "dkv7ZXazC0" }),
      },
      predicates: { show: (e) => Boolean(e.tenantId) || Boolean(e.authFlow) },
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage:
              "How Entra sign-in runs for this server: the system browser (default) or the OS identity broker.",
            id: "GsolzpV43N",
          }),
        ),
        long: (0, z.longDescription)(
          "- **`browser`** (default) \u2014 opens the system browser for an authorization-code (PKCE) sign-in on the loopback redirect URI.\n" +
            "- **`broker`** \u2014 signs in through the OS identity broker (Web Account Manager on Windows, the Company Portal SSO extension on macOS), so it can satisfy Conditional Access policies that require a compliant or managed device or token protection. Requires **Tenant ID**, **Client ID**, and **Scope**. The app registration must list the broker redirect URIs `ms-appx-web://Microsoft.AAD.BrokerPlugin/{client-id}` (Windows) and `msauth.com.anthropic.claudefordesktop://auth` (macOS) under the **Mobile and desktop applications** platform, and the device must be Entra-registered (macOS also needs the Company Portal SSO extension). Not supported on Linux. When the broker is not available on a device, sign-in falls back to the system browser.\n\n" +
            "App versions that predate this key always use the system browser.",
        ),
      },
    }),
    scope: (0, z.subfield)(C.z.string().min(1).optional(), {
      label: (0, E.msg)({ defaultMessage: "Scope", id: "nso3MjkMl+" }),
      mono: true,
      placeholder: (0, E.msg)({ defaultMessage: "api://\u2026/access_as_user offline_access", id: "1fPbl8sb8U" }),
      predicates: { required: (e) => typeof e.tenantId === "string" && e.tenantId.trim() !== "" },
      requiredMessage: (0, E.msg)({ defaultMessage: "Scope is required when Tenant ID is set.", id: "EThsmphP7E" }),
    }),
    appendOfflineAccess: (0, z.subfield)(C.z.boolean().optional(), {
      label: (0, E.msg)({ defaultMessage: "Request offline_access", id: "pQQw6aWtUt" }),
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage:
              "Adds offline_access to the authorize request so the IdP returns a refresh token for silent renewal.",
            id: "RI6UfcnlXY",
          }),
        ),
        long: (0, z.longDescription)(
          "Leave off if Scope already includes `offline_access` or the server rejects it.\n\nWith explicit endpoints (Authorization URL / Token URL, no discovery) this toggle can\u2019t take effect on its own \u2014 the app can\u2019t confirm the AS advertises `offline_access`, so include `offline_access` in **Scope** instead for silent refresh.",
        ),
      },
    }),
    callbackHost: (0, z.subfield)(C.z.enum(Gn.CALLBACK_HOST_OPTIONS).optional(), {
      label: (0, E.msg)({ defaultMessage: "Callback host", id: "P+/GQ+gmAe" }),
      placeholder: (0, E.msg)({ defaultMessage: "127.0.0.1", id: "L4dIq9u0LB" }),
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage: "Use localhost only if your IdP\u2019s registered redirect URI specifies it.",
            id: "CncIVWXmvt",
          }),
        ),
      },
    }),
    callbackPort: (0, z.subfield)(C.z.number().int().min(1024).max(65535).optional(), {
      label: (0, E.msg)({ defaultMessage: "Callback port", id: "XVLCaBkgOo" }),
      placeholder: (0, E.msg)({ defaultMessage: "53280", id: "RaVP62wW+g" }),
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage: "Only set if your IdP requires an exact-match redirect port. Entra accepts any.",
            id: "4hrAYpn2S6",
          }),
        ),
      },
    }),
    additionalRedirectReferrerHosts: Ku,
    scopes: Fd,
  });
  function Pw(e) {
    if (e.tenantId) return { via: "tenant", tenantId: e.tenantId };
    if (e.authorizationServer && e.authorizationServer.length > 0)
      return { via: "issuer", authorizationServer: e.authorizationServer };
    if (e.authorizationUrl && e.tokenUrl)
      return { via: "explicit", authorizationUrl: e.authorizationUrl, tokenUrl: e.tokenUrl };
    return { via: "prm" };
  }
  function tF(e) {
    switch (e.via) {
      case "issuer":
        return e.authorizationServer;
      case "explicit":
        return [e.authorizationUrl, e.tokenUrl];
      case "tenant":
      case "prm":
        return [];
    }
  }
  function rF(e, t) {
    var n, i, r, o;
    if (e.authFlow === "broker") {
      if (!e.tenantId)
        t.addIssue({
          code: C.z.ZodIssueCode.custom,
          path: ["tenantId"],
          message:
            'tenantId is required when authFlow is "broker" (OS-brokered sign-in targets the tenant-specific Entra authority of the registered app)',
        });
      if (e.tenantId !== void 0 && Bu.includes(e.tenantId))
        t.addIssue({
          code: C.z.ZodIssueCode.custom,
          path: ["tenantId"],
          message:
            'authFlow "broker" needs a tenant GUID \u2014 the "common"/"organizations"/"consumers" aliases are not a tenant the OS broker can sign in against',
        });
    }
    if (e.tenantId && !e.scope)
      t.addIssue({
        code: C.z.ZodIssueCode.custom,
        path: ["scope"],
        message:
          "scope is required when tenantId is set (a tenant-pinned app must state its resource scopes explicitly; include offline_access if silent refresh is needed)",
      });
    if (
      !e.clientId &&
      (e.clientSecret ||
        e.clientSecretHelper ||
        e.tenantId ||
        e.callbackHost ||
        e.callbackPort !== void 0 ||
        e.authFlow ||
        ((i = (n = e.authorizationServer) === null || n === void 0 ? void 0 : n.length) !== null && i !== void 0
          ? i
          : 0) > 0)
    )
      t.addIssue({
        code: C.z.ZodIssueCode.custom,
        path: ["clientId"],
        message:
          "clientId is required when clientSecret/clientSecretHelper/tenantId/callbackHost/callbackPort/authFlow/authorizationServer is set (only scope/appendOfflineAccess/additionalRedirectReferrerHosts can be configured without a pre-registered client)",
      });
    if (!e.authorizationUrl !== !e.tokenUrl)
      t.addIssue({
        code: C.z.ZodIssueCode.custom,
        path: [e.authorizationUrl ? "tokenUrl" : "authorizationUrl"],
        message:
          "both authorizationUrl and tokenUrl are required when either is set (explicit endpoints replace .well-known discovery as a pair)",
      });
    if ((e.authorizationUrl || e.tokenUrl) && !e.clientId)
      t.addIssue({
        code: C.z.ZodIssueCode.custom,
        path: ["clientId"],
        message:
          "clientId is required when authorizationUrl/tokenUrl are set (dynamic client registration never runs against manually-configured endpoints)",
      });
    if (
      (e.clientSecret || e.clientSecretHelper) &&
      !(
        ((o = (r = e.authorizationServer) === null || r === void 0 ? void 0 : r.length) !== null && o !== void 0
          ? o
          : 0) > 0
      )
    )
      t.addIssue({
        code: C.z.ZodIssueCode.custom,
        path: ["authorizationServer"],
        message:
          'authorizationServer is required when a client secret is configured (for mcp.box.com use ["https://api.box.com"])',
      });
  }
  function Ew(e) {
    if (typeof e !== "object" || e === null) return e ? true : void 0;
    let t = {};
    for (let [n, i] of Object.entries(e)) if (i !== null && i !== void 0) t[n] = i;
    if ((delete t.asSelection, Array.isArray(t.scope) && t.scope.every((n) => typeof n === "string"))) {
      let n = t.scope.join(" ");
      if (n === "") delete t.scope;
      else t.scope = n;
    }
    if (typeof t.scope === "string" && t.scope.trim() === "") delete t.scope;
    if (t.scope !== void 0) delete t.scopes;
    else if (Array.isArray(t.scopes)) {
      if (t.scopes.every((n) => typeof n === "string")) {
        let n = t.scopes.join(" ");
        if ((delete t.scopes, n !== "")) t.scope = n;
      }
    } else if (t.scopes !== void 0) (t.scope = t.scopes), delete t.scopes;
    if (typeof t.scope === "string" && t.scope.trim() === "") delete t.scope;
    if (typeof t.additionalRedirectReferrerHosts === "string" && t.additionalRedirectReferrerHosts.trim() === "")
      delete t.additionalRedirectReferrerHosts;
    return t;
  }
  var nF = C.z.strictObject({
      scope: Gn.ByoOauth.shape.scope,
      appendOfflineAccess: Gn.ByoOauth.shape.appendOfflineAccess,
      scopes: Gn.ByoOauth.shape.scopes,
      additionalRedirectReferrerHosts: Gn.ByoOauth.shape.additionalRedirectReferrerHosts,
    }),
    iF = Gn.ByoOauth.extend({
      clientId: C.z.string({ error: zd }).trim().min(1, { error: zd }),
      mode: C.z.never().optional(),
    }),
    _w = C.z
      .discriminatedUnion("mode", [
        C.z.strictObject({ mode: C.z.literal("dcr") }),
        C.z.object({ mode: C.z.literal("byo"), ...(0, z.unwrapZod)(Gn.ByoOauth).shape }),
      ])
      .superRefine((e, t) => {
        if (e.mode === "byo") rF(e, t);
      });
  Gn.McpOauth = C.z.preprocess(
    Ew,
    C.z
      .union([
        C.z.literal(true).transform(() => ({ mode: "dcr" })),
        nF.transform((e) =>
          e.scope !== void 0 || e.appendOfflineAccess !== void 0 || e.additionalRedirectReferrerHosts !== void 0
            ? { ...e, mode: "byo" }
            : { mode: "dcr" },
        ),
        iF.transform((e) => ({ ...e, mode: "byo" })),
        _w,
      ])
      .pipe(_w)
      .transform(oF)
      .optional(),
  );
  function oF(e) {
    if (e.mode !== "byo") return e;
    return { ...e, asSelection: Pw(e) };
  }
  Gn.RemoteDirectMcpServerConfig = C.z.object({
    name: Zd,
    ...kw,
    transport: (0, z.subfield)(C.z.enum(["http", "sse"]), {
      label: (0, E.msg)({ defaultMessage: "Transport", id: "KwHBKRwf8M" }),
      optionLabels: {
        http: (0, E.msg)({ defaultMessage: "Streamable HTTP", id: "xWvR0pm1jC" }),
        sse: (0, E.msg)({ defaultMessage: "SSE (legacy)", id: "micfwa1L0h" }),
        stdio: (0, E.msg)({ defaultMessage: "Local command (stdio)", id: "JJVljnyegG" }),
      },
      predicates: { show: (e) => !Vn(e) },
    }),
    url: (0, z.subfield)(Gn.httpsUrl, {
      label: (0, E.msg)({ defaultMessage: "URL", id: "bWjdfaXOzU" }),
      mono: true,
      predicates: { show: to },
    }),
    oauth: (0, z.subfield)(Gn.McpOauth, {
      label: (0, E.msg)({ defaultMessage: "OAuth", id: "Z9SEbF2UCN" }),
      optionLabels: {
        "": (0, E.msg)({ defaultMessage: "None", id: "450Fty8ldn" }),
        dcr: (0, E.msg)({ defaultMessage: "Auto-register (dynamic client registration)", id: "N5hOiMqiZn" }),
        byo: (0, E.msg)({ defaultMessage: "Bring your own client", id: "SZXkm24sDA" }),
      },
      predicates: { show: to },
    }),
    headers: (0, z.subfield)((0, z.annotate)(C.z.record(C.z.string(), C.z.string()).optional(), { redact: "drop" }), {
      label: (0, E.msg)({ defaultMessage: "Headers", id: "Wm+KUdH7c0" }),
      placeholder: {
        key: (0, E.msg)({ defaultMessage: "Authorization", id: "zgMsosqNrx" }),
        value: (0, E.msg)({ defaultMessage: "Bearer \u2026", id: "aj5POhAKey" }),
      },
      predicates: { show: to },
    }),
    headersHelper: (0, z.subfield)(C.z.string().min(1).optional(), {
      label: (0, E.msg)({ defaultMessage: "Headers helper script", id: "x+MG25XWVf" }),
      placeholder: (0, E.msg)({ defaultMessage: "Absolute path", id: "StnRZmM3Xn" }),
      mono: true,
      remotePolicy: { requiresUserConsent: true },
      predicates: { show: to },
    }),
    headersHelperTtlSec: (0, z.subfield)(C.z.number().int().positive().optional(), {
      label: (0, E.msg)({ defaultMessage: "Helper cache TTL (sec)", id: "HIjCnaQF93" }),
      placeholder: (0, E.msg)({ defaultMessage: "3600", id: "knMPP8lqSe" }),
      predicates: { show: (e) => Boolean(e.headersHelper) },
    }),
    headersHelperRefreshBufferSec: (0, z.subfield)(C.z.number().int().positive().optional(), {
      label: (0, E.msg)({ defaultMessage: "Helper refresh buffer (sec)", id: "3p+PBJPMTa" }),
      placeholder: (0, E.msg)({ defaultMessage: "60", id: "JjROJwgJI2" }),
      predicates: { show: (e) => Boolean(e.headersHelper) },
    }),
    toolPolicy: ga,
  });
  var aF = /^[A-Za-z0-9][A-Za-z0-9._-]*$/,
    $w = /(^|\/)\.\.($|\/)/,
    sF = /[\t\n\r\0;|`$<>"]/;
  function Iw(e) {
    if (e.length === 0 || e !== e.trim()) return false;
    if (e.startsWith("~")) return false;
    if (aF.test(e)) return true;
    let t = e.replace(/\\/g, "/");
    if (t.startsWith("//")) return false;
    if (sF.test(t)) return false;
    if ($w.test(t)) return false;
    return t.startsWith("/") || /^[A-Za-z]:\//.test(t);
  }
  var uF = /["%\r\n\u0000]/,
    cF = /[. ]$/;
  function lF(e) {
    if (e !== e.trim() || e.startsWith("~")) return false;
    if (uF.test(e) || cF.test(e)) return false;
    let t = e.replace(/\\/g, "/");
    if (t.startsWith("//")) return false;
    if ($w.test(t)) return false;
    return t.startsWith("/") || /^[A-Za-z]:\//.test(t);
  }
  var dF = C.z.object({
    name: Zd,
    ...kw,
    transport: (0, z.subfield)(C.z.literal("stdio"), {
      label: (0, E.msg)({ defaultMessage: "Transport", id: "KwHBKRwf8M" }),
    }),
    command: (0, z.subfield)(
      C.z.string().min(1).refine(Iw, {
        message:
          "must be a bare command name (e.g. npx) or a local absolute path (Windows: C:/... or C:\\...); no ~, .., UNC, or control characters",
      }),
      {
        label: (0, E.msg)({ defaultMessage: "Command", id: "9WyylR0I6U" }),
        mono: true,
        placeholder: (0, E.msg)({ defaultMessage: "/usr/local/bin/uvx", id: "lKL06F7LOG" }),
        description: {
          short: (0, z.shortDescription)(
            (0, E.msg)({
              defaultMessage: "Absolute path to the server executable, run on the user\u2019s machine.",
              id: "AjJRgsQw1w",
            }),
          ),
        },
        remotePolicy: { requiresUserConsent: true },
        predicates: { show: eo },
      },
    ),
    args: (0, z.subfield)(C.z.array(C.z.string()).optional(), {
      label: (0, E.msg)({ defaultMessage: "Arguments", id: "nc7BrwYVL+" }),
      mono: true,
      remotePolicy: { requiresUserConsent: true },
      placeholder: (0, E.msg)({ defaultMessage: '["mcp-server-fetch"]', id: "xtIyoIFEkB" }),
      predicates: { show: eo },
    }),
    env: (0, z.subfield)((0, z.annotate)(C.z.record(C.z.string(), C.z.string()).optional(), { redact: "drop" }), {
      label: (0, E.msg)({ defaultMessage: "Environment variables", id: "jvB4W9FV2m" }),
      placeholder: {
        key: (0, E.msg)({ defaultMessage: "API_KEY", id: "H/zM1IFCUA" }),
        value: (0, E.msg)({ defaultMessage: "value", id: "7CyD7ey2Aw" }),
      },
      remotePolicy: { requiresUserConsent: true },
      predicates: { show: eo },
    }),
    envHelper: (0, z.subfield)(
      C.z
        .string()
        .min(1)
        .refine(lF, {
          message:
            'must be a local absolute path (Windows: C:/... or C:\\...) with no ~, .., or UNC, not containing " % CR LF NUL, and not ending with a dot or space',
        })
        .optional(),
      {
        label: (0, E.msg)({ defaultMessage: "Environment helper script", id: "bzigWDMKGz" }),
        placeholder: (0, E.msg)({ defaultMessage: "Absolute path", id: "StnRZmM3Xn" }),
        description: {
          short: (0, z.shortDescription)(
            (0, E.msg)({
              defaultMessage:
                "Script that prints environment variables as a JSON object to stdout. Runs when the local server starts (cached for the TTL below).",
              id: "eFAGgyRLfK",
            }),
          ),
          long: (0, z.longDescription)(
            'Absolute path to an executable that prints a single JSON object of environment variables to stdout, e.g. `{"API_KEY": "\u2026"}`. The app runs it before spawning the server and merges the result over `env` (the helper wins on conflict). Use this to pull secrets from a secrets manager instead of storing them inline in `env`.\n\n' +
              "- If the helper fails, the server does not start; the failure names the helper path in the app log and the diagnostics report.\n- A helper with nothing to set must print `{}`. Empty stdout is treated as a failure.\n" +
              "- A helper-emitted `PATH` replaces the static map\u2019s `PATH` and supports the same `${PATH}` placeholder expansion as a static entry.",
          ),
        },
        mono: true,
        remotePolicy: { requiresUserConsent: true },
        predicates: { show: eo },
      },
    ),
    envHelperTtlSec: (0, z.subfield)(C.z.coerce.number().int().positive().optional(), {
      label: (0, E.msg)({ defaultMessage: "Helper cache TTL (sec)", id: "HIjCnaQF93" }),
      default: 300,
      placeholder: (0, E.msg)({ defaultMessage: "300", id: "ady/daA2aj" }),
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage:
              "Maximum age of a cached helper result, in seconds (default 300). Applies when the server starts or restarts.",
            id: "3eavQfVJJd",
          }),
        ),
        long: (0, z.longDescription)(
          "How long the app may reuse the helper's output before running it again. The check happens only when the server process is (re)started. Environment variables are fixed at process creation, and a running server never sees refreshed values until its next restart. Set this at or below your token lifetime: a server that crash-loops because its token expired can be respawned with the same cached environment until the TTL lapses. Default: 300 seconds.",
        ),
      },
      predicates: { show: (e) => Boolean(e.envHelper) },
    }),
    startupTimeoutSec: (0, z.subfield)(C.z.coerce.number().int().min(5).max(600).optional(), {
      label: (0, E.msg)({ defaultMessage: "Startup timeout", id: "BeAzXifBDP" }),
      suffix: (0, E.msg)({ defaultMessage: "seconds", id: "8TQoLRh7Ea" }),
      default: 120,
      placeholder: (0, E.msg)({ defaultMessage: "120", id: "PbcmBNPg4G" }),
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage: "Maximum wait in seconds for the server to start and list its tools.",
            id: "msICdyCWVb",
          }),
        ),
      },
      predicates: { show: eo },
    }),
    toolPolicy: ga,
  });
  Gn.BUILTIN_MCP_SERVERS = ["microsoft365", "websearch", "github"];
  Gn.WEB_SEARCH_PROVIDERS = ["brave", "tavily", "exa", "custom"];
  Gn.WEB_SEARCH_PROVIDER_HOSTS = { brave: "api.search.brave.com", tavily: "api.tavily.com", exa: "api.exa.ai" };
  Gn.AZURE_CLOUDS = ["global", "us-gov-high", "us-gov-dod"];
  Gn.AZURE_CLOUD_HOSTS = {
    global: { authority: "login.microsoftonline.com", graph: "graph.microsoft.com" },
    "us-gov-high": { authority: "login.microsoftonline.us", graph: "graph.microsoft.us" },
    "us-gov-dod": { authority: "login.microsoftonline.us", graph: "dod-graph.microsoft.us" },
  };
  var Tw = [
    { scope: "User.Read", kind: "always" },
    { scope: "offline_access", kind: "always" },
    { scope: "Mail.Read", kind: "read" },
    { scope: "Mail.Read.Shared", kind: "read" },
    { scope: "Calendars.Read", kind: "read" },
    { scope: "Calendars.Read.Shared", kind: "read" },
    { scope: "Files.Read.All", kind: "read" },
    { scope: "Sites.Read.All", kind: "read" },
    { scope: "Chat.Read", kind: "read" },
    { scope: "ChannelMessage.Read.All", kind: "admin" },
    { scope: "OnlineMeetings.Read", kind: "read" },
    { scope: "OnlineMeetingTranscript.Read.All", kind: "admin" },
    { scope: "MailboxSettings.Read", kind: "read" },
    { scope: "People.Read", kind: "read" },
    { scope: "Team.ReadBasic.All", kind: "read" },
    { scope: "Channel.ReadBasic.All", kind: "read" },
    { scope: "Mail.Send", kind: "write" },
    { scope: "Mail.ReadWrite", kind: "write" },
    { scope: "Calendars.ReadWrite", kind: "write" },
    { scope: "Files.ReadWrite.All", kind: "write" },
    { scope: "Sites.ReadWrite.All", kind: "write" },
    { scope: "ChatMessage.Send", kind: "write" },
    { scope: "ChannelMessage.Send", kind: "write" },
    { scope: "Chat.Create", kind: "write" },
    { scope: "MailboxSettings.ReadWrite", kind: "write" },
  ];
  function Bd(e) {
    return Tw.filter((t) => t.kind === e).map((t) => t.scope);
  }
  Gn.M365_GRANTABLE_DELEGATED_SCOPES = Tw.map((e) => e.scope);
  var yw = new Set(Gn.M365_GRANTABLE_DELEGATED_SCOPES);
  Gn.M365_WRITE_DELEGATED_SCOPES = Bd("write");
  Gn.M365_ALWAYS_REQUESTED_SCOPES = Bd("always");
  Gn.M365_ADMIN_CONSENT_SCOPES = Bd("admin");
  Gn.M365_DEFAULT_DELEGATED_SCOPES = [
    "User.Read",
    "offline_access",
    "Mail.Read",
    "Calendars.Read",
    "Calendars.Read.Shared",
    "Files.Read.All",
    "Sites.Read.All",
    "Chat.Read",
    "Mail.Read.Shared",
    "OnlineMeetings.Read",
  ];
  var ar = (e) => C.z.never({ error: `built-in entries (with \`server\`) must not set ${e}` }).optional(),
    Kd = {
      name: Zd,
      transport: C.z
        .never({
          error:
            "built-in entries (with `server`) must not set transport \u2014 built-in is provenance, not a transport",
        })
        .optional(),
      url: ar("url"),
      command: ar("command"),
      oauth: ar("oauth"),
      headers: ar("headers"),
      headersHelper: ar("headersHelper"),
      headersHelperTtlSec: ar("headersHelperTtlSec"),
      headersHelperRefreshBufferSec: ar("headersHelperRefreshBufferSec"),
      args: ar("args"),
      env: ar("env"),
      envHelper: ar("envHelper"),
      envHelperTtlSec: ar("envHelperTtlSec"),
      startupTimeoutSec: ar("startupTimeoutSec"),
    };
  function qd(e, t, n) {
    return (0, z.subfield)(C.z.literal(e), {
      label: (0, E.msg)({ defaultMessage: "Server", id: "McpBuiltinServerLabel" }),
      optionLabels: { [e]: t },
      predicates: { show: Vn, disabled: Vn },
      ...(n ? { support: n } : {}),
    });
  }
  function Fu(e) {
    return C.z.preprocess((t) => (typeof t === "string" && t.trim() === "" ? void 0 : t), e);
  }
  function Ld(e, t, n, i) {
    return (Array.isArray(e) ? e : [])
      .filter((o) => !t(o))
      .slice(0, 5)
      .map((o) => (o.length > n ? `${o.slice(0, i)}\u2026` : o))
      .join(", ");
  }
  function Aw(e) {
    if (!e || typeof e !== "object" || Array.isArray(e)) return e;
    let t = e;
    if (
      t.azureCloud === void 0 &&
      typeof t.authorityHost === "string" &&
      t.authorityHost.includes("login.microsoftonline.us")
    )
      return { ...t, azureCloud: "us-gov-high" };
    return e;
  }
  var fF = C.z.preprocess(
      Aw,
      C.z
        .object({
          ...Kd,
          server: qd("microsoft365", (0, E.msg)({ defaultMessage: "Microsoft 365", id: "McpBuiltinServerM365Opt" })),
          tenantId: (0, z.subfield)(
            C.z.union([
              C.z.string().trim().guid(),
              C.z
                .string()
                .trim()
                .pipe(C.z.enum(Bu))
                .meta({ enum: [...Bu] }),
            ]),
            {
              label: (0, E.msg)({ defaultMessage: "Tenant ID", id: "McpBuiltinTenantId" }),
              mono: true,
              placeholder: (0, E.msg)({
                defaultMessage: "00000000-0000-0000-0000-000000000000",
                id: "McpBuiltinTenantIdPh",
              }),
              description: {
                short: (0, z.shortDescription)(
                  (0, E.msg)({
                    defaultMessage: "Your organization\u2019s Microsoft Entra directory (tenant) ID.",
                    id: "McpBuiltinTenantIdHint",
                  }),
                ),
              },
              predicates: { show: Qi, required: Qi },
              requiredMessage: (0, E.msg)({
                defaultMessage: "Required for the built-in Microsoft 365 server.",
                id: "McpBuiltinTenantIdReq",
              }),
            },
          ),
          clientId: (0, z.subfield)(C.z.string().trim().min(1), {
            label: (0, E.msg)({ defaultMessage: "Client ID", id: "McpBuiltinClientId" }),
            mono: true,
            description: {
              short: (0, z.shortDescription)(
                (0, E.msg)({
                  defaultMessage: "OAuth app client ID for this built-in server.",
                  id: "McpBuiltinClientIdHint2",
                }),
              ),
            },
            predicates: { show: (e) => Qi(e) || qn(e), required: (e) => Qi(e) || qn(e) },
            requiredMessage: (0, E.msg)({
              defaultMessage: "Required for this built-in server.",
              id: "McpBuiltinClientIdReq2",
            }),
          }),
          azureCloud: (0, z.subfield)(C.z.enum(Gn.AZURE_CLOUDS).optional(), {
            label: (0, E.msg)({ defaultMessage: "Azure cloud", id: "McpBuiltinAzureCloud" }),
            placeholder: (0, E.msg)({ defaultMessage: "global", id: "McpBuiltinAzureCloudPh" }),
            description: {
              short: (0, z.shortDescription)(
                (0, E.msg)({
                  defaultMessage:
                    "Microsoft cloud for sign-in and Graph. Leave as global for commercial Microsoft 365; US Government clouds require your own app registration (Client ID).",
                  id: "McpBuiltinAzureCloudHint",
                }),
              ),
            },
            predicates: { show: Qi },
          }),
          scope: (0, z.subfield)(
            Fu(
              C.z
                .string()
                .trim()
                .transform((e) => e.split(/\s+/))
                .refine((e) => e.every((t) => yw.has(t)), {
                  error: (e) =>
                    `unknown scope(s) ${Ld(e.input, (t) => yw.has(t), 40, 40)} \u2014 grantable scopes: ${Gn.M365_GRANTABLE_DELEGATED_SCOPES.join(", ")}`,
                })
                .transform((e) => e.join(" "))
                .optional(),
            ),
            {
              label: (0, E.msg)({ defaultMessage: "Access", id: "McpBuiltinScope" }),
              control: "m365Scopes",
              description: {
                short: (0, z.shortDescription)(
                  (0, E.msg)({
                    defaultMessage:
                      "What the server may request at sign-in. If blank, Desktop\u2019s default read set is used.",
                    id: "McpBuiltinScopeHint",
                  }),
                ),
              },
              predicates: { show: Qi },
            },
          ),
          toolPolicy: ga,
          scopes: Fd,
        })
        .superRefine((e, t) => {
          if (e.azureCloud !== void 0 && e.azureCloud !== "global" && !e.clientId)
            t.addIssue({
              code: C.z.ZodIssueCode.custom,
              path: ["clientId"],
              message: "clientId is required when azureCloud is a US Government cloud",
            });
        }),
    ),
    vi = (e) => Vn(e) && e.server === "websearch",
    Rw = (e) => e !== null && typeof e === "object" && Object.keys(e).length > 0,
    bw = (e) => vi(e) && e.provider !== "custom" && !Rw(e.headers) && !e.headersHelper,
    pF = C.z
      .object({
        ...Kd,
        server: qd("websearch", (0, E.msg)({ defaultMessage: "Web search", id: "McpBuiltinServerWebSearchOpt" })),
        provider: (0, z.subfield)(C.z.enum(Gn.WEB_SEARCH_PROVIDERS), {
          label: (0, E.msg)({ defaultMessage: "Search provider", id: "McpBuiltinWebSearchProvider" }),
          description: {
            short: (0, z.shortDescription)(
              (0, E.msg)({
                defaultMessage:
                  "Runs search from the desktop, for inference providers without native web search. Set the provider\u2019s auth header below.",
                id: "bCPLE+aN2t",
              }),
            ),
            long: (0, z.longDescription)(
              `For inference providers without native web search (Bedrock, custom gateways). On Anthropic API and Vertex, the model\u2019s built-in web search is available without this.

` +
                `Set the provider\u2019s auth header:
` +
                "- **Brave** \u2014 `X-Subscription-Token`\n" +
                "- **Exa** \u2014 `x-api-key`\n" +
                "- **Tavily** \u2014 `Authorization` (Bearer \u2026)",
            ),
          },
          predicates: { show: vi, required: vi },
        }),
        headers: (0, z.subfield)(
          (0, z.annotate)(C.z.record(C.z.string(), C.z.string()).optional(), { redact: "drop" }),
          {
            label: (0, E.msg)({ defaultMessage: "Headers", id: "Wm+KUdH7c0" }),
            placeholder: {
              key: (0, E.msg)({ defaultMessage: "Authorization", id: "zgMsosqNrx" }),
              value: (0, E.msg)({ defaultMessage: "Bearer \u2026", id: "aj5POhAKey" }),
            },
            predicates: { show: (e) => vi(e) || to(e), required: bw },
          },
        ),
        headersHelper: (0, z.subfield)(C.z.string().min(1).optional(), {
          label: (0, E.msg)({ defaultMessage: "Headers helper script", id: "x+MG25XWVf" }),
          placeholder: (0, E.msg)({ defaultMessage: "Absolute path", id: "StnRZmM3Xn" }),
          description: {
            short: (0, z.shortDescription)(
              (0, E.msg)({
                defaultMessage:
                  "Script that prints the auth header as a JSON object to stdout. Runs before each request (cached for the TTL below).",
                id: "Qhgv6SfKH6",
              }),
            ),
            long: (0, z.longDescription)(
              'Absolute path to an executable that prints a single JSON object of request headers to stdout, e.g. `{"X-Subscription-Token": "\u2026"}`. The app runs it before each request and caches the result for the TTL below. Use this to pull the key from a secrets manager instead of storing it inline in `headers`.',
            ),
          },
          mono: true,
          remotePolicy: { requiresUserConsent: true },
          predicates: { show: (e) => vi(e) || to(e), required: bw },
        }),
        headersHelperTtlSec: (0, z.subfield)(C.z.number().int().positive().optional(), {
          label: (0, E.msg)({ defaultMessage: "Helper cache TTL (sec)", id: "HIjCnaQF93" }),
          placeholder: (0, E.msg)({ defaultMessage: "3600", id: "knMPP8lqSe" }),
          predicates: { show: (e) => Boolean(e.headersHelper) },
        }),
        headersHelperRefreshBufferSec: (0, z.subfield)(C.z.number().int().positive().optional(), {
          label: (0, E.msg)({ defaultMessage: "Helper refresh buffer (sec)", id: "3p+PBJPMTa" }),
          placeholder: (0, E.msg)({ defaultMessage: "60", id: "JjROJwgJI2" }),
          predicates: { show: (e) => Boolean(e.headersHelper) },
        }),
        customUrl: (0, z.subfield)(ma().optional(), {
          label: (0, E.msg)({ defaultMessage: "Custom URL", id: "McpBuiltinWebSearchCustomUrl" }),
          mono: true,
          description: {
            short: (0, z.shortDescription)(
              (0, E.msg)({
                defaultMessage:
                  "POST endpoint accepting {q} JSON and returning a results[] array. Only used when provider is Custom.",
                id: "McpBuiltinWebSearchCustomUrlHint",
              }),
            ),
          },
          predicates: {
            show: (e) => vi(e) && e.provider === "custom",
            required: (e) => vi(e) && e.provider === "custom",
          },
        }),
        toolPolicy: ga,
      })
      .superRefine((e, t) => {
        if (e.provider === "custom" && !e.customUrl)
          t.addIssue({
            code: C.z.ZodIssueCode.custom,
            path: ["customUrl"],
            message: "customUrl is required when provider is custom",
          });
        if (e.provider !== "custom" && !Rw(e.headers) && !e.headersHelper)
          t.addIssue({
            code: C.z.ZodIssueCode.custom,
            path: ["headers"],
            message: `headers or headersHelper is required for provider "${e.provider}"`,
          });
      }),
    vw = /^[a-z_]{1,32}(?::[a-z_]{1,32})?$/,
    ww = /^[a-z][a-z0-9_]{0,31}$/,
    mF = /^[A-Za-z0-9._-]{1,36}$/,
    gF = C.z.object({
      ...Kd,
      server: qd("github", (0, E.msg)({ defaultMessage: "GitHub", id: "McpBuiltinServerGithubOpt" })),
      clientId: (0, z.subfield)(
        C.z
          .string()
          .trim()
          .refine((e) => mF.test(e), {
            error: "clientId must be the GitHub app's client ID (letters, digits, or ._- \u2014 at most 36 characters)",
          }),
        {
          label: (0, E.msg)({ defaultMessage: "Client ID", id: "McpBuiltinClientId" }),
          mono: true,
          description: {
            short: (0, z.shortDescription)(
              (0, E.msg)({
                defaultMessage: "GitHub OAuth app client ID (device flow must be enabled on the app).",
                id: "McpBuiltinGithubClientIdHint",
              }),
            ),
          },
          predicates: { show: qn, required: qn },
          requiredMessage: (0, E.msg)({
            defaultMessage: "Required for this built-in server.",
            id: "McpBuiltinClientIdReq2",
          }),
        },
      ),
      host: (0, z.subfield)(
        Fu(
          ma({ rejectLoopback: true })
            .transform((e, t) => {
              try {
                return new URL(e).origin;
              } catch (n) {
                return t.addIssue("must use https with a non-loopback host"), C.z.NEVER;
              }
            })
            .optional(),
        ),
        {
          label: (0, E.msg)({ defaultMessage: "GitHub Enterprise Server URL", id: "McpBuiltinGithubHost" }),
          mono: true,
          placeholder: (0, E.msg)({ defaultMessage: "https://github.example.com", id: "McpBuiltinGithubHostPh" }),
          description: {
            short: (0, z.shortDescription)(
              (0, E.msg)({
                defaultMessage:
                  "Leave blank for github.com. For GitHub Enterprise Server, your instance\u2019s base URL.",
                id: "McpBuiltinGithubHostHint",
              }),
            ),
          },
          predicates: { show: qn },
        },
      ),
      scope: (0, z.subfield)(
        Fu(
          C.z
            .string()
            .trim()
            .transform((e) => e.split(/\s+/))
            .refine((e) => e.every((t) => vw.test(t)), {
              error: (e) =>
                `invalid GitHub scope token(s) ${Ld(e.input, (t) => vw.test(t), 20, 12)} \u2014 expected lowercase scope names like "repo read:org"`,
            })
            .transform((e) => e.join(" "))
            .optional(),
        ),
        {
          label: (0, E.msg)({ defaultMessage: "Access", id: "McpBuiltinGithubScope" }),
          mono: true,
          placeholder: (0, E.msg)({ defaultMessage: "repo read:org", id: "McpBuiltinGithubScopePh" }),
          description: {
            short: (0, z.shortDescription)(
              (0, E.msg)({
                defaultMessage:
                  "Space-separated GitHub OAuth scopes. If blank, Desktop\u2019s default read set is used. Ignored for GitHub Apps (permissions come from the app registration).",
                id: "McpBuiltinGithubScopeHint",
              }),
            ),
          },
          predicates: { show: qn },
        },
      ),
      toolsets: (0, z.subfield)(
        Fu(
          C.z
            .string()
            .trim()
            .transform((e) =>
              e
                .split(",")
                .map((t) => t.trim())
                .filter((t) => t !== ""),
            )
            .refine((e) => e.length > 0 && e.every((t) => ww.test(t)), {
              error: (e) => {
                if ((Array.isArray(e.input) ? e.input : []).length === 0)
                  return "toolsets must name at least one toolset (or be omitted)";
                return `invalid toolset token(s) ${Ld(e.input, (n) => ww.test(n), 20, 12)} \u2014 expected comma-separated ids like "repos,issues"`;
              },
            })
            .transform((e) => e.join(","))
            .optional(),
        ),
        {
          label: (0, E.msg)({ defaultMessage: "Toolsets", id: "McpBuiltinGithubToolsets" }),
          mono: true,
          placeholder: (0, E.msg)({
            defaultMessage: "context,repos,issues,pull_requests",
            id: "McpBuiltinGithubToolsetsPh",
          }),
          description: {
            short: (0, z.shortDescription)(
              (0, E.msg)({
                defaultMessage:
                  "Comma-separated github-mcp-server toolsets to enable. If blank, the bundled server\u2019s default toolsets are used.",
                id: "McpBuiltinGithubToolsetsHint",
              }),
            ),
          },
          predicates: { show: qn },
        },
      ),
      readOnly: (0, z.subfield)(
        C.z.preprocess((e) => (e === "true" ? true : e === "false" ? false : e), C.z.boolean().optional()),
        {
          label: (0, E.msg)({ defaultMessage: "Read-only", id: "McpBuiltinGithubReadOnly" }),
          description: {
            short: (0, z.shortDescription)(
              (0, E.msg)({
                defaultMessage: "Offer only read tools \u2014 the server registers no write tools at all.",
                id: "McpBuiltinGithubReadOnlyHint",
              }),
            ),
          },
          predicates: { show: qn },
        },
      ),
      toolPolicy: ga,
      scopes: Fd,
    }),
    hF = C.z.union([fF, pF, gF]);
  Gn.DirectMcpServerConfig = C.z.preprocess(
    (e) => {
      if (!e || typeof e !== "object") return e;
      let t = e;
      if (t.transport === "builtin") {
        let { transport: n, ...i } = t;
        if (((t = i), t.server === void 0)) return t;
      }
      if (t.server !== void 0) {
        if (t.scope === null || (typeof t.scope === "string" && t.scope.trim() === "")) {
          let { scope: n, ...i } = t;
          t = i;
        }
        if (t.scopes === null) {
          let { scopes: n, ...i } = t;
          t = i;
        }
        if (Array.isArray(t.scopes) && t.scopes.every((n) => typeof n === "string")) {
          let n = t.scopes.join(" "),
            { scopes: i, ...r } = t;
          if (t.scope !== void 0) t = r;
          else t = n === "" ? r : { ...r, scope: n };
        }
        return t;
      }
      if (t.transport === void 0 || t.transport === null) return { ...t, transport: "http" };
      return t;
    },
    C.z.union([hF, C.z.discriminatedUnion("transport", [Gn.RemoteDirectMcpServerConfig, dF])]),
  );
  function _F(e, t, n) {
    if (t === "source") return e.source === "managed" || e.source === "org-plugin" || e.source === "user";
    if (e.server === void 0) return false;
    switch (t) {
      case "transport":
        return e.transport === "builtin";
      case "scope":
        return e.scope === null || (typeof e.scope === "string" && e.scope.trim() === "");
      case "scopes":
        if (e.scopes === null) return true;
        if (!Array.isArray(e.scopes) || !e.scopes.every((i) => typeof i === "string")) return false;
        return e.scopes.join(" ") === "" || n.has("scope");
      case "authorityHost":
        return Aw(e) !== e && n.has("azureCloud");
      default:
        return false;
    }
  }
  function ro(e) {
    return e.server !== void 0;
  }
  function yF(e) {
    var t, n;
    switch (e.server) {
      case "microsoft365": {
        let i = Gn.AZURE_CLOUD_HOSTS[(t = e.azureCloud) !== null && t !== void 0 ? t : "global"];
        return [i.graph, i.authority];
      }
      case "websearch": {
        if (e.provider === "custom")
          try {
            return [new URL((n = e.customUrl) !== null && n !== void 0 ? n : "").hostname];
          } catch (i) {
            return [];
          }
        return [Gn.WEB_SEARCH_PROVIDER_HOSTS[e.provider]];
      }
      case "github": {
        let i = typeof e.host === "string" ? e.host.trim() : "";
        if (i === "") return ["github.com", "api.github.com"];
        let r = (0, W6.safeHostname)(i);
        if (r === void 0) return [];
        return r === "github.com" ? ["github.com", "api.github.com"] : [r];
      }
    }
  }
  function bF(e) {
    return e === null || e === void 0 ? void 0 : e.find((t) => ro(t) && t.server === "websearch");
  }
  function vF(e) {
    return !!e && Vn(e);
  }
  Gn.BUILTIN_DEFAULT_TOOL_POLICY = {
    microsoft365: {
      outlook_send_mail: "ask",
      outlook_forward_mail: "ask",
      outlook_send_draft: "ask",
      outlook_create_draft: "ask",
      outlook_create_reply_draft: "ask",
      outlook_create_reply_all_draft: "ask",
      outlook_update_draft: "ask",
      outlook_delete_draft: "ask",
      outlook_batch_delete_messages: "ask",
      outlook_trash_thread: "ask",
      outlook_untrash_thread: "ask",
      outlook_create_event: "ask",
      outlook_update_event: "ask",
      outlook_delete_event: "ask",
      outlook_respond_to_event: "ask",
      outlook_create_label: "ask",
      outlook_update_label: "ask",
      outlook_delete_label: "ask",
      outlook_modify_labels: "ask",
      outlook_modify_thread_labels: "ask",
      outlook_batch_modify_labels: "ask",
      outlook_create_filter: "ask",
      outlook_delete_filter: "ask",
      outlook_set_vacation: "ask",
      sharepoint_upload_file: "ask",
      sharepoint_update_file: "ask",
      sharepoint_create_folder: "ask",
      sharepoint_rename_item: "ask",
      sharepoint_move_item: "ask",
      sharepoint_copy_item: "ask",
      sharepoint_delete_item: "ask",
      teams_send_chat_message: "ask",
      teams_send_channel_message: "ask",
      teams_reply_channel_message: "ask",
      teams_create_chat: "ask",
    },
    github: {
      create_or_update_file: "ask",
      delete_file: "ask",
      push_files: "ask",
      create_repository: "ask",
      fork_repository: "ask",
      create_branch: "ask",
      create_issue: "ask",
      update_issue: "ask",
      add_issue_comment: "ask",
      add_sub_issue: "ask",
      remove_sub_issue: "ask",
      reprioritize_sub_issue: "ask",
      assign_copilot_to_issue: "ask",
      create_pull_request: "ask",
      update_pull_request: "ask",
      update_pull_request_branch: "ask",
      merge_pull_request: "ask",
      create_and_submit_pull_request_review: "ask",
      create_pending_pull_request_review: "ask",
      add_comment_to_pending_review: "ask",
      submit_pending_pull_request_review: "ask",
      delete_pending_pull_request_review: "ask",
      request_copilot_review: "ask",
      run_workflow: "ask",
      rerun_workflow_run: "ask",
      rerun_failed_jobs: "ask",
      cancel_workflow_run: "ask",
      delete_workflow_run_logs: "ask",
      dismiss_notification: "ask",
      mark_all_notifications_read: "ask",
      manage_notification_subscription: "ask",
      manage_repository_notification_subscription: "ask",
      create_gist: "ask",
      update_gist: "ask",
      add_project_item: "ask",
      delete_project_item: "ask",
    },
  };
  Gn.M365_IRREVERSIBLE_WRITE_TOOLS = new Set([
    "outlook_send_mail",
    "outlook_send_draft",
    "outlook_forward_mail",
    "outlook_create_event",
    "outlook_update_event",
    "teams_send_chat_message",
    "teams_send_channel_message",
    "teams_reply_channel_message",
  ]);
  Gn.GITHUB_IRREVERSIBLE_WRITE_TOOLS = new Set([
    "merge_pull_request",
    "push_files",
    "create_or_update_file",
    "delete_file",
    "run_workflow",
    "rerun_workflow_run",
    "rerun_failed_jobs",
    "delete_workflow_run_logs",
  ]);
  var wF = { microsoft365: Gn.M365_IRREVERSIBLE_WRITE_TOOLS, github: Gn.GITHUB_IRREVERSIBLE_WRITE_TOOLS };
  function Hd(e) {
    var t, n;
    let i = ro(e) ? Gn.BUILTIN_DEFAULT_TOOL_POLICY[e.server] : void 0,
      r = ro(e) ? wF[e.server] : void 0;
    if (!i && !e.toolPolicy) return;
    let o = Object.assign(Object.create(null), e.toolPolicy),
      s = e.toolPolicy !== void 0 && Object.hasOwn(e.toolPolicy, "*");
    for (let [u, c] of Object.entries(i !== null && i !== void 0 ? i : {})) {
      let d = e.toolPolicy !== void 0 && Object.hasOwn(e.toolPolicy, u),
        f = (0, zt.lookupMcpToolPolicy)(e.toolPolicy, u);
      if (r === null || r === void 0 ? void 0 : r.has(u)) {
        let p = (t = (0, zt.strictestToolPolicy)(c, f)) !== null && t !== void 0 ? t : c;
        if (d || p !== f) o[u] = p;
      } else if (!d && !s) o[u] = (n = (0, zt.strictestToolPolicy)(c, f)) !== null && n !== void 0 ? n : c;
    }
    return o;
  }
  function jw(e, t) {
    var n, i, r;
    let o = [],
      s = [];
    if (!ro(e)) return { uncovered: o, globAllowOnly: s };
    let u = Gn.BUILTIN_DEFAULT_TOOL_POLICY[e.server];
    for (let c of t) {
      if (
        ((n = c.annotations) === null || n === void 0 ? void 0 : n.readOnlyHint) === true ||
        Object.hasOwn(u !== null && u !== void 0 ? u : {}, c.name)
      )
        continue;
      let d = (0, zt.lookupMcpToolPolicy)(e.toolPolicy, c.name);
      if (d === void 0) o.push(c.name);
      else if (
        d === "allow" &&
        !Object.hasOwn((i = e.toolPolicy) !== null && i !== void 0 ? i : {}, c.name) &&
        !Object.hasOwn((r = e.toolPolicy) !== null && r !== void 0 ? r : {}, "*")
      )
        s.push(c.name);
    }
    return { uncovered: o, globAllowOnly: s };
  }
  function SF(e, t) {
    return jw(e, t).uncovered;
  }
  function Cw(e) {
    var t;
    let n = Nd(e.orgPluginSettings);
    for (let i of Object.keys(n)) if (Object.keys(n[i]).length === 0) delete n[i];
    for (let i of (t = e.managedMcpServers) !== null && t !== void 0 ? t : []) {
      delete n[i.name];
      let r = Hd(i);
      if (r && Object.keys(r).length > 0) n[i.name] = r;
    }
    return n;
  }
  function OF(e, t) {
    let n = t.poolConfig ? Hd(t.poolConfig) : void 0,
      i = t.freshConfig ? Cw(t.freshConfig)[e] : void 0;
    if (!n && !i) return;
    let r = n !== null && n !== void 0 ? n : {},
      o = i !== null && i !== void 0 ? i : {},
      s = Object.create(null);
    for (let c of new Set([...Object.keys(r), ...Object.keys(o)])) {
      if (c === "*") continue;
      let d = (0, zt.strictestToolPolicy)((0, zt.lookupMcpToolPolicy)(r, c), (0, zt.lookupMcpToolPolicy)(o, c));
      if (d) s[c] = d;
    }
    let u = (0, zt.strictestToolPolicy)(r["*"], o["*"]);
    if (u !== void 0 && (u !== "allow" || r["*"] !== void 0)) s["*"] = u;
    return Object.keys(s).length > 0 ? s : void 0;
  }
  function kF(e, t) {
    return { name: t, transport: e.type, url: e.url, headers: e.headers, oauth: e.oauth };
  }
  function PF(e) {
    return (e.transport === "http" || e.transport === "sse") && Boolean(e.oauth);
  }
  function EF(e) {
    var t;
    if (e.transport !== "http" && e.transport !== "sse") return false;
    if (e.oauth) return true;
    if (e.headersHelper) return false;
    return !Object.keys((t = e.headers) !== null && t !== void 0 ? t : {}).some(
      (n) => n.toLowerCase() === "authorization",
    );
  }
  Gn.ManagedMcpServers = C.z
    .array(Gn.DirectMcpServerConfig.nullable().catch(null))
    .transform((e) => e.filter((t) => t !== null))
    .refine((e) => new Set(e.map((t) => t.name)).size === e.length, { message: "MCP server names must be unique" })
    .refine((e) => e.filter((t) => ro(t) && t.server === "websearch").length <= 1, {
      message: "At most one WebSearch built-in entry is allowed",
    });
  var $F = new Set([
    "clientId",
    "clientSecret",
    "clientSecretHelper",
    "authorizationServer",
    "tenantId",
    "callbackHost",
    "callbackPort",
    "authorizationUrl",
    "tokenUrl",
  ]);
  function IF(e) {
    if (e === null || typeof e !== "object") return 0;
    let t = e;
    if ("mode" in t) return 3;
    return Object.keys(t).some((n) => $F.has(n)) ? 2 : 1;
  }
  function Dw(e, t) {
    let n = t && typeof t === "object" ? t : void 0,
      i = n !== void 0 && (n.server !== void 0 || n.transport === "builtin"),
      r =
        (n === null || n === void 0 ? void 0 : n.server) === "websearch"
          ? 1
          : (n === null || n === void 0 ? void 0 : n.server) === "github"
            ? 2
            : 0,
      o = (u, c) => c.reduce((d, f) => (d !== null && typeof d === "object" ? d[f] : void 0), u),
      s = (u, c, d) =>
        u.flatMap((f) => {
          var p, h;
          if (f.code !== C.z.ZodIssueCode.invalid_union) return [f];
          let y = (p = f.errors) !== null && p !== void 0 ? p : [],
            k = f.path[f.path.length - 1] === "oauth" ? IF(Ew(o(d, f.path))) : c === 0 ? (i ? 0 : 1) : r,
            P = (h = y[k]) !== null && h !== void 0 ? h : y[0];
          if (!P) return [f];
          let B = s(P, c + 1, o(d, f.path));
          return f.path.length === 0 ? B : B.map((Q) => ({ ...Q, path: [...f.path, ...Q.path] }));
        });
    return s(e.issues, 0, t);
  }
  function TF(e, t) {
    if (!Array.isArray(e)) return;
    e.forEach((n, i) => {
      let r = Gn.DirectMcpServerConfig.safeParse(n);
      if (r.success) return;
      let o = n && typeof n === "object" ? n.name : void 0,
        s = typeof o === "string" ? `"${o}"` : `[${i}]`,
        u = Dw(r.error, n)
          .map((c) => `${c.path.join(".") || "."}: ${c.message}`)
          .join("; ");
      t(`managedMcpServers entry ${s} dropped \u2014 ${u}`);
    });
  }
  var AF = C.z.object({ toolPolicy: Gn.ToolPolicySchema.optional() }),
    RF = C.z.object({ serverName: C.z.string().min(1), tools: C.z.array(Ow).default([]) });
  function jF(e, t) {
    if (Array.isArray(e)) {
      e.forEach((i, r) => {
        let o = RF.safeParse(i);
        if (o.success) return;
        let s = i && typeof i === "object" ? i.serverName : void 0,
          u = typeof s === "string" && s ? `"${s}"` : `[${r}]`;
        for (let c of o.error.issues) {
          let d = c.path.join(".");
          t(
            d
              ? `orgPluginSettings entry ${u}.${d} dropped \u2014 ${c.message}`
              : `orgPluginSettings entry ${u} dropped \u2014 ${c.message}`,
          );
        }
      });
      return;
    }
    if (!e || typeof e !== "object") return;
    let n = e.mcpServers;
    if (!n || typeof n !== "object") return;
    for (let [i, r] of Object.entries(n)) {
      let o = AF.safeParse(r);
      if (o.success) continue;
      for (let s of o.error.issues) {
        let u = s.path.join(".");
        t(
          u
            ? `orgPluginSettings.mcpServers["${i}"].${u} dropped \u2014 ${s.message}`
            : `orgPluginSettings.mcpServers["${i}"] reset to {} \u2014 ${s.message}`,
        );
      }
    }
  }
  var Vd = [
    (e) => !!e.issuer || !!(e.authorizationUrl && e.tokenUrl),
    { message: "either issuer, or both authorizationUrl and tokenUrl, required" },
  ];
  function CF(e) {
    if (e.issuer) return { via: "issuer", issuer: e.issuer };
    if (e.authorizationUrl && e.tokenUrl)
      return { via: "explicit", authorizationUrl: e.authorizationUrl, tokenUrl: e.tokenUrl };
    return;
  }
  function DF(e) {
    return e.via === "issuer" ? [e.issuer] : [e.authorizationUrl, e.tokenUrl];
  }
  var xF = (0, E.msg)({ defaultMessage: "https://login.microsoftonline.com/TENANT/v2.0", id: "NUASktdfTk" }),
    pa = {
      clientId: (0, z.subfield)(C.z.string().min(1), {
        label: (0, E.msg)({ defaultMessage: "Client ID", id: "U5+MBCY8VU" }),
        mono: true,
      }),
      issuer: (0, z.subfield)(Gn.httpsUrl.optional(), {
        label: (0, E.msg)({ defaultMessage: "Issuer URL", id: "159pClRrG6" }),
        mono: true,
      }),
      authorizationUrl: (0, z.subfield)(Gn.httpsUrl.optional(), {
        label: (0, E.msg)({ defaultMessage: "Authorization URL", id: "uiL7XCPiaV" }),
        mono: true,
        predicates: { show: (e) => !e.issuer },
      }),
      tokenUrl: (0, z.subfield)(Gn.httpsUrl.optional(), {
        label: (0, E.msg)({ defaultMessage: "Token URL", id: "PJhe0HJqkm" }),
        mono: true,
        predicates: { show: (e) => !e.issuer },
      }),
    },
    xw = (0, z.subfield)(Gn.httpsUrl.optional(), {
      label: (0, E.msg)({ defaultMessage: "Issuer URL", id: "159pClRrG6" }),
      mono: true,
      placeholder: xF,
    }),
    Gd = (0, z.subfield)(C.z.number().int().min(1024).max(65535).optional(), {
      label: (0, E.msg)({ defaultMessage: "Redirect port", id: "A9/lbJqU6I" }),
      placeholder: (0, E.msg)({ defaultMessage: "(ephemeral)", id: "ErCpG12/4F" }),
    }),
    MF = (0, z.subfield)(C.z.boolean().optional(), {
      label: (0, E.msg)({ defaultMessage: "Omit offline_access", id: "rXMEZQ7FqD" }),
      description: {
        short: (0, z.shortDescription)(
          (0, E.msg)({
            defaultMessage:
              "Only enable if your IdP rejects the offline_access scope on this client. Without it the app prompts for sign-in each time the token expires.",
            id: "pkUlgTwVU2",
          }),
        ),
      },
    });
  Gn.BootstrapOidc = C.z
    .object({
      ...pa,
      scopes: (0, z.subfield)(C.z.string().min(1).optional(), {
        label: (0, E.msg)({ defaultMessage: "Scopes", id: "joDyyj/N+j" }),
        placeholder: (0, E.msg)({ defaultMessage: "openid profile email offline_access", id: "TVC7JJ1/zv" }),
      }),
      redirectPort: Gd,
      omitOfflineAccess: MF,
      additionalRedirectReferrerHosts: Ku,
    })
    .refine(...Vd);
  Gn.BootstrapFetchOidc = C.z
    .object({
      ...pa,
      issuer: xw,
      scopes: (0, z.subfield)(C.z.string().min(1).optional(), {
        label: (0, E.msg)({ defaultMessage: "Scopes", id: "joDyyj/N+j" }),
        description: {
          short: (0, z.shortDescription)(
            (0, E.msg)({
              defaultMessage:
                "Space-separated; the token\u2019s audience must match what your bootstrap server validates.",
              id: "eWCA/3rEU6",
            }),
          ),
        },
        placeholder: (0, E.msg)({ defaultMessage: "openid offline_access CLIENT_ID/.default", id: "fSKoqI4XSt" }),
        predicates: { required: (e) => Boolean(e.clientId || e.issuer || e.authorizationUrl || e.tokenUrl) },
        requiredMessage: (0, E.msg)({
          defaultMessage: "Required. Set the scope your bootstrap server accepts as the token audience.",
          id: "WtkDPX8usa",
        }),
      }),
      redirectPort: Gd,
      additionalRedirectReferrerHosts: Ku,
    })
    .refine(...Vd)
    .refine(
      (e) => {
        var t;
        return !!((t = e.scopes) === null || t === void 0 ? void 0 : t.trim());
      },
      { message: "required", path: ["scopes"] },
    );
  var zF = new Set(["openid", "profile", "email", "address", "phone", "offline_access"]);
  function LF(e) {
    if (typeof e !== "string") return false;
    return e
      .split(/\s+/)
      .filter(Boolean)
      .some((t) => !zF.has(t));
  }
  var UF = (0, z.subfield)(C.z.string().min(1).optional(), {
    label: (0, E.msg)({ defaultMessage: "Scopes", id: "joDyyj/N+j" }),
    placeholder: (0, E.msg)({ defaultMessage: "openid profile email offline_access", id: "TVC7JJ1/zv" }),
    predicates: { required: (e) => e.bearerTokenType === "access_token" },
    requiredMessage: (0, E.msg)({
      defaultMessage:
        "Required for access-token mode. Set the gateway\u2019s API scope (e.g. api://gateway/.default). offline_access is appended automatically for silent refresh unless disabled below.",
      id: "1h3eSFXQWm",
    }),
  });
  Gn.GatewayOidc = C.z
    .object({
      clientId: pa.clientId,
      issuer: xw,
      authorizationUrl: pa.authorizationUrl,
      tokenUrl: pa.tokenUrl,
      bearerTokenType: (0, z.subfield)(C.z.enum(["id_token", "access_token"]).default("id_token"), {
        label: (0, E.msg)({ defaultMessage: "Bearer token", id: "q3e4cfMU7E" }),
        optionLabels: {
          id_token: (0, E.msg)({ defaultMessage: "ID token (default)", id: "ECdFElAw3s" }),
          access_token: (0, E.msg)({ defaultMessage: "Access token", id: "uTSSg3isX7" }),
        },
        description: {
          short: (0, z.shortDescription)(
            (0, E.msg)({
              defaultMessage:
                "Which token to send as the gateway bearer. Use access token for gateways that validate as an OAuth resource server.",
              id: "LChYqT/3kH",
            }),
          ),
          long: (0, z.longDescription)(
            "In **access-token** mode the token's audience must be your gateway. On IdPs where the requested scopes decide the audience (**Entra ID**), include the gateway's API resource scope in `scopes` \u2014 `api://<gateway-app-id>/.default`, or a named delegated scope you exposed via *Expose an API*. With only the standard OIDC scopes (`openid profile email offline_access`) Entra returns a v1.0 Microsoft Graph token whose issuer (`https://sts.windows.net/<tenant>/`) doesn't match the v2.0 issuer configured here, so a gateway that validates `iss` rejects it. On IdPs that set the access-token audience out-of-band (Keycloak audience mapper, Auth0 default audience, Okta custom authorization server), a resource scope in `scopes` isn't required \u2014 the audience comes from the IdP-side configuration.",
          ),
        },
      }),
      scopes: UF,
      appendOfflineAccess: (0, z.subfield)(C.z.boolean().default(true), {
        label: (0, E.msg)({ defaultMessage: "Append offline_access", id: "aZEuarDLlh" }),
        default: true,
        predicates: { show: (e) => e.bearerTokenType === "access_token" },
        description: {
          short: (0, z.shortDescription)(
            (0, E.msg)({
              defaultMessage:
                "Automatically append offline_access to scopes so the IdP returns a refresh token for silent refresh.",
              id: "ojtzwQNuA9",
            }),
          ),
          long: (0, z.longDescription)(
            "Turn off only if your authorization server rejects `offline_access` as an unknown scope; include the server\u2019s own refresh-token scope in **Scopes** instead.",
          ),
        },
      }),
      redirectPort: Gd,
      additionalRedirectReferrerHosts: Ku,
    })
    .refine(...Vd)
    .refine(
      (e) => {
        var t;
        return e.bearerTokenType !== "access_token" || !!((t = e.scopes) === null || t === void 0 ? void 0 : t.trim());
      },
      { message: "scopes is required when bearerTokenType is access_token", path: ["scopes"] },
    );
});

var Lt = S(function (Qw) {
  Object.defineProperty(Qw, "__esModule", { value: true });
  Qw._test =
    Qw.MODELS_GROUP =
    Qw.HELPER_SCRIPT_GROUP =
    Qw.credentialHelperCommandOf =
    Qw.credentialKindOf =
    Qw.hasActiveBootstrap =
    Qw.urlWithSchemeCoercion =
    Qw.lenientEnumArray =
    Qw.kvRecord =
    Qw.COWORK_3P_DOCS_BASE =
      void 0;
  Qw.oidcEgressHosts = PB;
  var Wn = st(),
    SB = ht(),
    OB = Ze(),
    Yw = pt();
  Qw.COWORK_3P_DOCS_BASE = "https://claude.com/docs/third-party/claude-desktop";
  function Xw(e) {
    if (e === null || e === void 0) return e;
    if (typeof e === "object" && !Array.isArray(e)) return e;
    let t = {},
      n = (i, r) => {
        if (typeof i !== "string") return;
        let o = i.indexOf(r);
        if (o <= 0) return;
        let s = i.slice(0, o).trim(),
          u = i.slice(o + 1).trim();
        if (s && u) t[s] = u;
      };
    if (Array.isArray(e)) for (let i of e) n(i, ":");
    else if (typeof e === "string") for (let i of e.split(",")) n(i, "=");
    else return e;
    return t;
  }
  Qw.kvRecord = Wn.z.preprocess(Xw, Wn.z.record(Wn.z.string(), Wn.z.string()));
  var kB = (e) => Wn.z.array(Wn.z.enum(e).catch(void 0)).transform((t) => t.filter((n) => n !== void 0));
  Qw.lenientEnumArray = kB;
  Qw.urlWithSchemeCoercion = (0, OB.annotate)(
    Wn.z.preprocess(
      (e) => (typeof e === "string" && e && !/^[a-z][a-z0-9+.-]*:\/\//i.test(e) ? `https://${e}` : e),
      Wn.z.string().url(),
    ),
    { url: true },
  );
  function PB(e) {
    let t = e;
    if (typeof t === "string")
      try {
        t = JSON.parse(t);
      } catch (n) {
        return [];
      }
    if (!t || typeof t !== "object") return [];
    return [t.issuer, t.authorizationUrl, t.tokenUrl].map(SB.safeHostname).filter((n) => !!n);
  }
  var EB = (e) => {
    var t, n;
    return (
      Boolean((t = e.bootstrap) === null || t === void 0 ? void 0 : t.url) &&
      ((n = e.bootstrap) === null || n === void 0 ? void 0 : n.enabled) !== false
    );
  };
  Qw.hasActiveBootstrap = EB;
  var $B = (e) => {
    var t, n;
    return (n = (t = e.inference) === null || t === void 0 ? void 0 : t.credential) === null || n === void 0
      ? void 0
      : n.kind;
  };
  Qw.credentialKindOf = $B;
  var IB = (e) => {
    var t, n;
    return ((n = (t = e.inference) === null || t === void 0 ? void 0 : t.credential) === null || n === void 0
      ? void 0
      : n.kind) === "helper-script"
      ? e.inference.credential.command
      : void 0;
  };
  Qw.credentialHelperCommandOf = IB;
  Qw.HELPER_SCRIPT_GROUP = (0, Yw.msg)({ defaultMessage: "Helper script", id: "DnXPcFgmqb" });
  Qw.MODELS_GROUP = (0, Yw.msg)({ defaultMessage: "Models", id: "blWvagsLt7" });
  Qw._test = { coerceKvRecord: Xw };
});

var On = S(function (sS) {
  Object.defineProperty(sS, "__esModule", { value: true });
  sS.providerHasDiscovery =
    sS.isBedrockFamily =
    sS.PROVIDER_CLI_FLAG =
    sS.CREDENTIAL_KINDS_FOR_PROVIDER =
    sS.PROVIDER_ARMS =
    sS.InferenceConfig =
    sS.AwsSigV4Credential =
    sS.HelperScriptCreds =
      void 0;
  sS.providerCliFlagEnv = dK;
  sS.kindSupportsDiscovery = aS;
  var F = st(),
    Sn = ht(),
    D = Ze(),
    $e = Lt(),
    x = pt(),
    Qd = Wt(),
    UB = (0, D.field)((0, D.annotate)($e.kvRecord.optional(), { redact: "drop" }), {
      flatKey: "inferenceCustomHeaders",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.8089.0" } },
      title: (0, x.msg)({ defaultMessage: "Custom inference headers", id: "6T78KTXhBM" }),
      legacyFlatKey: "inferenceGatewayHeaders",
      category: "connection",
      order: 80,
      addLabel: (0, x.msg)({ defaultMessage: "Add header", id: "IxbsWX4wj4" }),
      placeholder: {
        key: (0, x.msg)({ defaultMessage: "X-Header-Name", id: "+gBb3x0fj/" }),
        value: (0, x.msg)({ defaultMessage: "value", id: "7CyD7ey2Aw" }),
      },
      description: {
        short: (0, D.shortDescription)(
          (0, x.msg)({
            defaultMessage:
              "Extra HTTP headers sent on every inference request to the configured provider. For tenant routing, org IDs, Bedrock Guardrails, etc.",
            id: "0hPFsTuQ1X",
          }),
        ),
        long: (0, D.longDescription)(
          "Sent on every inference and model-discovery request (joined into the CLI's `ANTHROPIC_CUSTOM_HEADERS`).\n\nUse this for fleet-wide constants. For per-user or per-session values, have the **credential helper script** emit JSON with a `headers` field; those are merged over these static entries (helper wins on conflict).",
        ),
      },
    }),
    NB = (0, D.field)(F.z.coerce.number().int().positive().optional(), {
      flatKey: "inferenceSessionLifetimeSec",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.14271.0" } },
      title: (0, x.msg)({ defaultMessage: "Sign-in session lifetime", id: "InfSessLifetime" }),
      category: "connection",
      suffix: (0, x.msg)({ defaultMessage: "seconds", id: "8TQoLRh7Ea" }),
      predicates: {
        show: (e) => {
          var t, n;
          let i =
            (n = (t = e.inference) === null || t === void 0 ? void 0 : t.credential) === null || n === void 0
              ? void 0
              : n.kind;
          return i === "interactive" || i === "oauth" || i === "workforce";
        },
      },
      description: {
        short: (0, D.shortDescription)(
          (0, x.msg)({
            defaultMessage:
              "How long a sign-in stays valid under your IdP\u2019s session policy. Shows a re-authenticate banner before it expires.",
            id: "InfSessLifeHint",
          }),
        ),
      },
    }),
    io = { customHeaders: UB, sessionLifetimeSec: NB },
    ZB = (0, D.field)((0, D.annotate)(F.z.string().trim().optional(), { pathKind: "file" }), {
      flatKey: "inferenceCredentialHelper",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      remotePolicy: { requiresUserConsent: true },
      title: (0, x.msg)({ defaultMessage: "Helper script", id: "DnXPcFgmqb" }),
      category: "connection",
      group: $e.HELPER_SCRIPT_GROUP,
      order: -10,
      predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
      placeholder: (0, x.msg)({ defaultMessage: "/usr/local/bin/corp-cred-helper", id: "19vfTFVJFY" }),
      description: {
        short: (0, D.shortDescription)(
          (0, x.msg)({
            defaultMessage:
              "Absolute path to an executable that prints the credential, optionally with per-request headers.",
            id: "pBgZotXlmX",
          }),
        ),
        long: (0,
        D.longDescription)(`Claude runs the executable with no arguments and reads **stdout** (trimmed). Exit code must be \`0\`; any output on **stderr** is logged but ignored. **Stdout must contain only one of the formats below** (no banners, prompts, or log lines).

**Output format** is either:
- a single bare token (the API key / bearer token), or
- a JSON object \`{"token": "...", "headers": {"Name": "Value", ...}}\` when per-request headers are needed (merged over **Custom inference headers**, helper wins on conflict)

Result is cached for the TTL below. On TTL expiry the helper is re-invoked transparently (no user prompt, no relaunch).

**Expiry and refresh:** the app checks the active credential's expiry before each turn and refreshes silently when possible (re-runs the helper, or uses the stored refresh token for interactive sign-in kinds). If the provider returns HTTP 401 mid-turn, the same silent refresh is attempted before surfacing an error. When silent refresh fails, a prompt appears with a provider-specific action (re-sign-in for interactive kinds; admin-contact for static credentials). Applies to all providers, and to both Cowork and Code.

**Typical use:** a shell script that pulls from Keychain, 1Password CLI, or an internal secret broker. Example:

\`security find-generic-password -s anthropic-api -w\`

If this field is set, static credential fields (API key, bearer token) are ignored. The helper always wins.`),
      },
    }),
    FB = (0, D.field)(F.z.coerce.number().int().positive().optional(), {
      flatKey: "inferenceCredentialHelperTtlSec",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      remotePolicy: { requiresUserConsent: true },
      title: (0, x.msg)({ defaultMessage: "Helper script TTL", id: "RtLYfLZ2bT" }),
      default: 3600,
      category: "connection",
      group: $e.HELPER_SCRIPT_GROUP,
      order: -9,
      suffix: (0, x.msg)({ defaultMessage: "seconds", id: "8TQoLRh7Ea" }),
      description: {
        short: (0, D.shortDescription)(
          (0, x.msg)({
            defaultMessage:
              "Helper output is cached for this many seconds. Re-runs at the next session start after expiry.",
            id: "TGyeqFZWHH",
          }),
        ),
      },
      predicates: { show: (e) => Boolean((0, $e.credentialHelperCommandOf)(e)) },
    }),
    BB = (0, D.field)(F.z.coerce.number().int().positive().max(600).optional(), {
      flatKey: "inferenceCredentialHelperTimeoutSec",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.8089.0" } },
      remotePolicy: { requiresUserConsent: true },
      title: (0, x.msg)({ defaultMessage: "Credential helper timeout", id: "x8r3+rMaHq" }),
      default: 60,
      category: "connection",
      group: $e.HELPER_SCRIPT_GROUP,
      order: -8,
      suffix: (0, x.msg)({ defaultMessage: "seconds", id: "8TQoLRh7Ea" }),
      description: {
        short: (0, D.shortDescription)(
          (0, x.msg)({
            defaultMessage:
              "Maximum wait for the helper executable to finish. Raise this if the helper opens a browser for interactive sign-in.",
            id: "mWsGjRx48v",
          }),
        ),
      },
      predicates: { show: (e) => Boolean((0, $e.credentialHelperCommandOf)(e)) },
    }),
    KB = (0, D.field)(F.z.boolean().optional(), {
      flatKey: "inferenceCredentialHelperSilentRefreshEnabled",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } },
      remotePolicy: { requiresUserConsent: true },
      title: (0, x.msg)({ defaultMessage: "Re-run helper for silent refresh", id: "iLlsz1BLkf" }),
      default: true,
      failClosedValue: false,
      category: "connection",
      group: $e.HELPER_SCRIPT_GROUP,
      order: -7,
      description: {
        short: (0, D.shortDescription)(
          (0, x.msg)({
            defaultMessage:
              "On credential expiry, re-run the helper (CLAUDE_HELPER_CONTEXT=mid-session-refresh) to recover silently. Turn off if the helper can\u2019t run non-interactively.",
            id: "8KuyIP86Pe",
          }),
        ),
      },
      predicates: { show: (e) => Boolean((0, $e.credentialHelperCommandOf)(e)) },
    }),
    qB = (0, D.field)((0, D.annotate)(F.z.string().optional(), { redact: "hash" }), {
      flatKey: "inferenceBedrockProfile",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      remotePolicy: { requiresUserConsent: true },
      title: (0, x.msg)({ defaultMessage: "AWS profile name", id: "7vTavgWpok" }),
      category: "connection",
      placeholder: (0, x.msg)({ defaultMessage: "default", id: "FiXNt10l2f" }),
      description: {
        short: (0, D.shortDescription)(
          (0, x.msg)({
            defaultMessage: "AWS named profile to use for Bedrock inference credentials.",
            id: "InfBedrockProfileHint",
          }),
          { docsOnly: true },
        ),
      },
    }),
    HB = (0, D.field)((0, D.annotate)(F.z.string().optional(), { pathKind: "folder" }), {
      flatKey: "inferenceBedrockAwsDir",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      remotePolicy: { requiresUserConsent: true },
      title: (0, x.msg)({ defaultMessage: "AWS config directory", id: "+/yYn89HLV" }),
      category: "connection",
      placeholder: (0, x.msg)({ defaultMessage: "~/.aws", id: "pz/AYYggAV" }),
      description: {
        short: (0, D.shortDescription)(
          (0, x.msg)({
            defaultMessage: "Folder with AWS config/credentials. Defaults to ~/.aws when no bearer token is set.",
            id: "+iG8JNhLmB",
          }),
        ),
      },
    }),
    VB = (0, D.field)((0, D.annotate)(F.z.string().trim().optional(), { pathKind: "file" }), {
      flatKey: "inferenceBedrockAwsCliPath",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.13576.0" } },
      remotePolicy: { requiresUserConsent: true },
      title: (0, x.msg)({ defaultMessage: "AWS CLI path", id: "tiw5Kg3lNu" }),
      category: "connection",
      placeholder: (0, x.msg)({ defaultMessage: "/usr/local/bin/aws", id: "r5vv3VwyH+" }),
      description: {
        short: (0, D.shortDescription)(
          (0, x.msg)({
            defaultMessage: "Absolute path to the aws executable. Leave unset to find it on PATH.",
            id: "aGOycTUbE0",
          }),
        ),
      },
    }),
    tS = (0, D.field)((0, D.annotate)(F.z.string().optional(), { redact: "keep" }), {
      flatKey: "inferenceBedrockRegion",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      title: (0, x.msg)({ defaultMessage: "AWS region", id: "idJaPSX8EP" }),
      egressRequirements: (e, t) => {
        var n, i, r, o;
        if (!e) return [];
        if (((n = t.inference) === null || n === void 0 ? void 0 : n.provider) === "mantle")
          return [
            (i = (0, Sn.safeHostname)(t.inference.baseUrl)) !== null && i !== void 0 ? i : (0, Sn.mantleRuntimeHost)(e),
          ];
        if (((r = t.inference) === null || r === void 0 ? void 0 : r.provider) !== "bedrock") return [];
        return (0, Sn.bedrockHosts)(
          e,
          ((o = t.inference.credential) === null || o === void 0 ? void 0 : o.kind) === "static",
          t.inference.baseUrl,
        );
      },
      category: "connection",
      predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
      placeholder: (0, x.msg)({ defaultMessage: "us-west-2", id: "QxWCILUZ/n" }),
      description: {
        short: (0, D.shortDescription)(
          (0, x.msg)({ defaultMessage: "AWS region for the Bedrock runtime endpoint.", id: "Sijf7QyRi3" }),
        ),
      },
    }),
    rS = (0, D.field)((0, D.annotate)($e.urlWithSchemeCoercion.optional(), { redact: "hostname" }), {
      flatKey: "inferenceBedrockBaseUrl",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      remotePolicy: { rejectLoopback: true, originPinned: { carries: "local-credential" } },
      title: (0, x.msg)({ defaultMessage: "Bedrock base URL", id: "GzwfABozww" }),
      category: "connection",
      placeholder: (e, t) => {
        var n;
        return ((n = t.inference) === null || n === void 0 ? void 0 : n.provider) === "mantle"
          ? e.formatMessage({ defaultMessage: "https://bedrock-mantle.us-east-1.api.aws/anthropic", id: "LpWFX2Ofrj" })
          : e.formatMessage({
              defaultMessage: "https://vpce-0123-abcd.bedrock-runtime.us-east-1.vpce.amazonaws.com",
              id: "pl7XHUmb+2",
            });
      },
      description: {
        short: (0, D.shortDescription)((e, t) => {
          var n;
          return ((n = t.inference) === null || n === void 0 ? void 0 : n.provider) === "mantle"
            ? e.formatMessage({
                defaultMessage:
                  "Full SDK base URL including the /anthropic path (replaces bedrock-mantle.REGION.api.aws/anthropic).",
                id: "6XeDArE1XW",
              })
            : e.formatMessage({
                defaultMessage: "For VPC endpoints or gateway proxies. Host origin only.",
                id: "k/mN+Jo2Rg",
              });
        }),
      },
    }),
    GB = (0, D.field)((0, D.annotate)(F.z.string().optional(), { redact: "drop" }), {
      flatKey: "inferenceBedrockBearerToken",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      title: (0, x.msg)({ defaultMessage: "AWS bearer token", id: "6eMQjpT3Y9" }),
      category: "connection",
      predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
      description: {
        short: (0, D.shortDescription)(
          (0, x.msg)({
            defaultMessage:
              "Static bearer token for inference. For providers that support profile or helper-script credentials, prefer those.",
            id: "InfBedrockBearerHint",
          }),
          { docsOnly: true },
        ),
      },
    }),
    WB = F.z.object({
      profile: (0, D.subfield)(F.z.string().optional(), {
        label: (0, x.msg)({ defaultMessage: "AWS profile name", id: "7vTavgWpok" }),
        flatKey: "inferenceBedrockProfile",
      }),
      awsDir: (0, D.subfield)(F.z.string().optional(), {
        label: (0, x.msg)({ defaultMessage: "AWS config directory", id: "+/yYn89HLV" }),
        flatKey: "inferenceBedrockAwsDir",
      }),
      awsCliPath: (0, D.subfield)(F.z.string().optional(), {
        label: (0, x.msg)({ defaultMessage: "AWS CLI path", id: "tiw5Kg3lNu" }),
        flatKey: "inferenceBedrockAwsCliPath",
      }),
      region: (0, D.subfield)(F.z.string().optional(), {
        label: (0, x.msg)({ defaultMessage: "AWS region", id: "+x+1RE2/ti" }),
        flatKey: "inferenceBedrockRegion",
      }),
    }),
    nS = {
      kind: F.z.literal("helper-script"),
      command: ZB,
      ttlSec: FB,
      timeoutSec: BB,
      silentRefreshEnabled: KB,
      awsEnv: WB.optional(),
    };
  sS.HelperScriptCreds = F.z.object(nS);
  var iS = (0, D.field)(
      F.z
        .preprocess((e) => (e === "auto" ? "bearer" : e === "sso" ? void 0 : e), F.z.enum(["bearer", "x-api-key"]))
        .optional(),
      {
        flatKey: "inferenceGatewayAuthScheme",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.3036.0" } },
        title: (0, x.msg)({ defaultMessage: "Gateway auth scheme", id: "tmwK1KjFte" }),
        default: "bearer",
        category: "connection",
        predicates: {
          show: (e) => {
            var t, n;
            let i =
              (n = (t = e.inference) === null || t === void 0 ? void 0 : t.credential) === null || n === void 0
                ? void 0
                : n.kind;
            return i === "static" || i === "helper-script";
          },
        },
        description: {
          short: (0, D.shortDescription)(
            (0, x.msg)({
              defaultMessage:
                "How the gateway credential is sent on the wire (Authorization: Bearer vs x-api-key header).",
              id: "WsT/E/qNoC",
            }),
          ),
        },
      },
    ),
    JB = F.z.object({
      kind: F.z.literal("static"),
      apiKey: (0, D.field)((0, D.annotate)(F.z.string().optional(), { redact: "drop" }), {
        flatKey: "inferenceGatewayApiKey",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
        title: (0, x.msg)({ defaultMessage: "Gateway API key", id: "NA4SBfPMeA" }),
        category: "connection",
        predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
        description: {
          short: (0, D.shortDescription)(
            (0, x.msg)({ defaultMessage: "API key for the configured inference gateway.", id: "InfGatewayApiKeyHint" }),
            { docsOnly: true },
          ),
        },
      }),
      authScheme: iS,
    }),
    YB = F.z.object({ ...nS, authScheme: iS }),
    XB = F.z.discriminatedUnion("kind", [
      JB,
      F.z.object({
        kind: F.z.literal("interactive"),
        authFlow: (0, D.field)(F.z.enum(["browser", "broker"]).optional(), {
          flatKey: "inferenceGatewayOidcAuthFlow",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.25927.0" } },
          title: (0, x.msg)({ defaultMessage: "Gateway sign-in flow", id: "InfGatewayOidcAuthFlow" }),
          category: "connection",
          notAPresenceSignal: true,
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage: "How the IdP sign-in runs: system browser (default) or the OS Microsoft Entra broker.",
                id: "InfGatewayOidcAuthFlowShort",
              }),
            ),
            long: (0, D.longDescription)(
              "- **`browser`** (default) \u2014 opens the system browser for an authorization-code (PKCE) sign-in on a loopback redirect URI. See the **IdP setup** notes on `inferenceGatewayOidc` for redirect-URI registration.\n" +
                "- **`broker`** \u2014 signs in through the OS identity broker (Web Account Manager on Windows, Company Portal on macOS). Requires the IdP to be **Microsoft Entra ID** \u2014 the `issuer` on `inferenceGatewayOidc` must be `https://login.microsoftonline.com/{tenant-id}/v2.0`. The broker satisfies Conditional Access policies that require a compliant/managed device or token protection, and needs no `127.0.0.1/callback` loopback redirect. The Entra app registration must include the broker redirect URIs `ms-appx-web://Microsoft.AAD.BrokerPlugin/{client-id}` (Windows) and `msauth.com.anthropic.claudefordesktop://auth` (macOS) under the **Mobile and desktop applications** platform. Not supported on Linux.\n\n" +
                "Broker mode mints a token in the customer's own Entra tenant with the customer-configured `scopes`, and forwards it to the customer's own gateway; both endpoints of that trust relationship are inside the customer's control.",
            ),
          },
        }),
        oidc: (0, D.field)(Qd.GatewayOidc.optional(), {
          flatKey: "inferenceGatewayOidc",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.6889.0" } },
          remotePolicy: { requiresUserConsent: true },
          title: (0, x.msg)({ defaultMessage: "Gateway SSO IdP (OIDC)", id: "FcISn6aVjf" }),
          predicates: {
            warn: (e) =>
              (e === null || e === void 0 ? void 0 : e.bearerTokenType) === "access_token" &&
              !(0, Qd.scopesIncludeResourceScope)(e.scopes)
                ? (0, x.msg)({
                    defaultMessage:
                      "No API resource scope set. On IdPs where the requested scopes decide the access-token audience (e.g. Entra ID), this yields a token for the IdP\u2019s own APIs \u2014 not your gateway. Add the gateway\u2019s API scope (Entra: api://GATEWAY_APP_ID/.default). Ignore this if your IdP sets the token audience out-of-band (Keycloak audience mapper, Auth0 default audience, Okta custom-AS audience).",
                    id: "GwScopeNoResourceWarn",
                  })
                : null,
          },
          egressRequirements: (e, t) => {
            var n, i;
            return ((n = t.inference) === null || n === void 0 ? void 0 : n.provider) === "gateway" &&
              ((i = t.inference.credential) === null || i === void 0 ? void 0 : i.kind) === "interactive"
              ? (0, $e.oidcEgressHosts)(e)
              : [];
          },
          egressRequirementsLabel: (0, x.msg)({ defaultMessage: "Gateway sign-in (OIDC)", id: "L+geN0DrtO" }),
          category: "connection",
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage:
                  "External IdP for gateway sign-in. The user\u2019s token from this issuer is sent to the gateway as the Bearer credential.",
                id: "pRQIKI2d3D",
              }),
            ),
            long: (0, D.longDescription)(
              "**External IdP mode.** The app discovers `<issuer>/.well-known/openid-configuration`, runs an OIDC authorization-code-with-PKCE flow in the system browser with `clientId`, and sends the resulting token as `Authorization: Bearer` on every inference request \u2014 see **Bearer token type** below for how the gateway validates it.\n\n**Bearer token type.** `id_token` (the default) sends the OIDC ID token \u2014 the gateway validates signature + `iss` + `aud`, where `aud` is the `clientId` configured here. `access_token` sends the OAuth access token \u2014 the gateway validates as an OAuth resource server against the audience/scope the IdP issued the token for; set `scopes` to the gateway's registered API scope (required in this mode). Use `access_token` for gateways that expect a resource-server token (Portkey, Kong, Envoy JWT filter, AWS API Gateway authorizers).\n\n**The gateway MUST validate `iss` AND `aud`, not just the signature.** Signature + issuer alone accepts *any* token from the same tenant, including tokens issued to unrelated apps. In `id_token` mode the audience is the `clientId`:\n```yaml\n# LiteLLM example \u2014 `audience` is REQUIRED, not optional\ngeneral_settings:\n  litellm_jwtauth:\n    public_key_url: https://login.microsoftonline.com/<tenant>/discovery/v2.0/keys\n    audience: <clientId>           # \u26A0 omitting this accepts any token from the tenant\n```\n\n**IdP setup.** The app's loopback callback binds `http://127.0.0.1:<port>/callback` (RFC 8252 \xA77.3). Register `127.0.0.1`; most IdPs do **not** treat `localhost` and `127.0.0.1` as interchangeable. **Entra:** register a public-client app, add a *Mobile and desktop applications* redirect URI of `http://127.0.0.1/callback`. (Microsoft's docs say the path is wildcarded for loopback; in practice it is not: `http://127.0.0.1` without `/callback` fails with `AADSTS50011`. The port IS wildcarded.) Grant `openid profile email offline_access` (delegated, no admin consent); in `access_token` mode **also** add the gateway API's delegated permission under *API permissions* (and ensure the gateway's own app registration exposes that scope via *Expose an API*) \u2014 without it Entra rejects the sign-in with `AADSTS65001`. **Okta:** register a *Native* app with the exact redirect URI `http://127.0.0.1:<port>/callback` and set `redirectPort` here to that port (Okta requires an exact match).\n\n**Refresh:** `offline_access` returns a refresh token; the app refreshes the bearer silently before expiry. When refresh fails (revoked, idle past the IdP's window), the user re-authenticates in the browser. **Google Workspace caveat (`id_token` mode only):** Google never returns `id_token` on a refresh-token grant, so a Google-backed gateway in `id_token` mode will prompt a browser sign-in roughly once per ID-token TTL (~1h). Entra and Okta return a fresh `id_token` and are unaffected; `access_token` mode is unaffected on all IdPs.\n\n**Leave this unset** for a gateway that hosts its own RFC 8414 metadata at `<baseUrl>/.well-known/oauth-authorization-server` (the original gateway-as-AS path).",
            ),
          },
        }),
      }),
      YB,
    ]),
    QB = F.z.object({
      provider: F.z.literal("gateway"),
      baseUrl: (0, D.field)((0, D.annotate)($e.urlWithSchemeCoercion.optional(), { redact: "hostname" }), {
        flatKey: "inferenceGatewayBaseUrl",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
        remotePolicy: {
          rejectLoopback: true,
          originPinned: { carries: "server-issued-credential" },
          requiresUserConsent: true,
        },
        title: (0, x.msg)({ defaultMessage: "Gateway base URL", id: "JQs8c3pGcl" }),
        egressRequirements: (e, t) => {
          var n;
          if (((n = t.inference) === null || n === void 0 ? void 0 : n.provider) !== "gateway") return [];
          let i = (0, Sn.safeHostname)(e);
          return i ? [i] : [];
        },
        category: "connection",
        predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
        placeholder: (0, x.msg)({ defaultMessage: "https://llm-gateway.example.com", id: "we1m4ZIlaP" }),
        description: {
          short: (0, D.shortDescription)(
            (0, x.msg)({ defaultMessage: "Full URL of the inference gateway endpoint.", id: "6cmRKZgiFv" }),
          ),
        },
      }),
      ...io,
      credential: XB.optional(),
    }),
    eK = F.z.discriminatedUnion("kind", [
      F.z.object({
        kind: F.z.literal("static"),
        apiKey: (0, D.field)((0, D.annotate)(F.z.string().optional(), { redact: "drop" }), {
          flatKey: "inferenceAnthropicApiKey",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.8089.0" } },
          title: (0, x.msg)({ defaultMessage: "Claude API key", id: "5ykkZh9itH" }),
          category: "connection",
          placeholder: (0, x.msg)({ defaultMessage: "sk-ant-\u2026", id: "yWgQU4eQPw" }),
          predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage:
                  "Leave blank to fetch a key via browser sign-in, or to supply the key via a credential helper.",
                id: "LqkJ93Y17Y",
              }),
            ),
          },
        }),
      }),
      F.z.object({ kind: F.z.literal("interactive") }),
      sS.HelperScriptCreds,
    ]),
    tK = F.z.object({ provider: F.z.literal("anthropic"), ...io, credential: eK.optional() });
  sS.AwsSigV4Credential = F.z.discriminatedUnion("kind", [
    F.z.object({
      kind: F.z.literal("interactive"),
      ssoStartUrl: (0, D.field)($e.urlWithSchemeCoercion.optional(), {
        flatKey: "inferenceBedrockSsoStartUrl",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.6259.0" } },
        remotePolicy: { rejectLoopback: true, requiresUserConsent: true },
        title: (0, x.msg)({ defaultMessage: "AWS SSO start URL", id: "M1ekod7Ohm" }),
        category: "connection",
        predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
        placeholder: (0, x.msg)({ defaultMessage: "https://d-1234567890.awsapps.com/start", id: "RFFH1lyEc7" }),
        description: {
          short: (0, D.shortDescription)(
            (0, x.msg)({
              defaultMessage: "Enables in-app AWS sign-in (no AWS CLI needed). Set with the three SSO fields below.",
              id: "Ahe51s8B/N",
            }),
          ),
        },
      }),
      ssoRegion: (0, D.field)(
        F.z.string().trim().regex(Sn.AWS_REGION_RE, "must be a valid AWS region (e.g. us-east-1)").optional(),
        {
          flatKey: "inferenceBedrockSsoRegion",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.6259.0" } },
          remotePolicy: { requiresUserConsent: true },
          title: (0, x.msg)({ defaultMessage: "AWS SSO region", id: "fVSO74vxG+" }),
          egressRequirements: (e, t) => {
            var n;
            return ((n = t.inference) === null || n === void 0 ? void 0 : n.provider) === "bedrock" && e
              ? [...(0, Sn.bedrockSsoHosts)(e)]
              : [];
          },
          category: "connection",
          predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
          placeholder: (0, x.msg)({ defaultMessage: "us-east-1", id: "TR4NZQsAzg" }),
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({ defaultMessage: "IAM Identity Center home region.", id: "hrhyvgzlp8" }),
            ),
          },
        },
      ),
      ssoAccountId: (0, D.field)(F.z.string().trim().min(1).optional(), {
        flatKey: "inferenceBedrockSsoAccountId",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.6259.0" } },
        remotePolicy: { requiresUserConsent: true },
        title: (0, x.msg)({ defaultMessage: "AWS SSO account ID", id: "SM396mPAdJ" }),
        category: "connection",
        predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
        placeholder: (0, x.msg)({ defaultMessage: "123456789012", id: "UGEnd0JtKP" }),
        description: {
          short: (0, D.shortDescription)(
            (0, x.msg)({
              defaultMessage: "12-digit AWS account ID assigned to users in IAM Identity Center.",
              id: "5ZymBsxYIf",
            }),
          ),
        },
      }),
      ssoRoleName: (0, D.field)(F.z.string().trim().min(1).optional(), {
        flatKey: "inferenceBedrockSsoRoleName",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.6259.0" } },
        remotePolicy: { requiresUserConsent: true },
        title: (0, x.msg)({ defaultMessage: "AWS SSO role name", id: "Us/KWk8ZwZ" }),
        category: "connection",
        predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
        placeholder: (0, x.msg)({ defaultMessage: "BedrockInference", id: "vgSQNDrmBi" }),
        description: {
          short: (0, D.shortDescription)(
            (0, x.msg)({
              defaultMessage:
                "IAM Identity Center permission-set name granting bedrock:InvokeModel* on the account above.",
              id: "vZ6g+h2+rD",
            }),
          ),
        },
      }),
    }),
    F.z.object({ kind: F.z.literal("vendor-profile"), profile: qB, awsDir: HB, awsCliPath: VB }),
  ]);
  var oS = F.z.object({ kind: F.z.literal("static"), bearerToken: GB }),
    rK = F.z.discriminatedUnion("kind", [oS, ...sS.AwsSigV4Credential.options, sS.HelperScriptCreds]),
    nK = F.z.object({
      provider: F.z.literal("bedrock"),
      region: tS,
      baseUrl: rS,
      serviceTier: (0, D.field)(F.z.enum(["flex", "priority"]).optional(), {
        flatKey: "inferenceBedrockServiceTier",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.5186.0" } },
        title: (0, x.msg)({ defaultMessage: "Bedrock service tier", id: "RcMetnFGHz" }),
        category: "connection",
        placeholder: (0, x.msg)({ defaultMessage: "(on-demand)", id: "7KENh/cIdm" }),
        description: {
          short: (0, D.shortDescription)(
            (0, x.msg)({
              defaultMessage: "Sent as the X-Amzn-Bedrock-Service-Tier header. Leave unset for on-demand.",
              id: "/jpohGWrkJ",
            }),
          ),
          long: (0, D.longDescription)(
            "Tier availability varies by model and region. Reserved capacity uses a provisioned-throughput ARN as the model ID instead of this setting. Older bundled Claude Code CLI versions ignore this key.",
          ),
        },
      }),
      ...io,
      credential: rK.optional(),
    }),
    iK = F.z.discriminatedUnion("kind", [oS, sS.HelperScriptCreds]),
    oK = F.z.object({ provider: F.z.literal("mantle"), region: tS, baseUrl: rS, ...io, credential: iK.optional() }),
    aK = F.z.discriminatedUnion("kind", [
      F.z.object({
        kind: F.z.literal("oauth"),
        clientId: (0, D.field)(F.z.string().trim().min(1).optional(), {
          flatKey: "inferenceVertexOAuthClientId",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
          remotePolicy: { requiresUserConsent: true },
          title: (0, x.msg)({ defaultMessage: "Vertex OAuth client ID", id: "uV5y1u6H7A" }),
          category: "connection",
          predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
          placeholder: (0, x.msg)({ defaultMessage: "NNN.apps.googleusercontent.com", id: "p/4qG0gjyQ" }),
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage:
                  "Desktop-app OAuth client ID. Enables Sign in with Google instead of a credentials file.",
                id: "uksEExpTuY",
              }),
            ),
          },
        }),
        clientSecret: (0, D.field)((0, D.annotate)(F.z.string().trim().min(1).optional(), { redact: "drop" }), {
          flatKey: "inferenceVertexOAuthClientSecret",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
          title: (0, x.msg)({ defaultMessage: "Vertex OAuth client secret", id: "SM8Ak39Vjh" }),
          category: "connection",
          placeholder: (0, x.msg)({ defaultMessage: "GOCSPX-...", id: "2pwaqX5iEv" }),
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({ defaultMessage: "Secret for the Desktop-app OAuth client above.", id: "4tBI+hIy1i" }),
            ),
          },
        }),
        scopes: (0, D.field)(F.z.string().trim().min(1).optional(), {
          flatKey: "inferenceVertexOAuthScopes",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
          title: (0, x.msg)({ defaultMessage: "Vertex OAuth scopes", id: "Wl626GK45n" }),
          category: "connection",
          placeholder: (0, x.msg)({
            defaultMessage: "openid email https://www.googleapis.com/auth/cloud-platform",
            id: "1QdLfinpa0",
          }),
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage: "Override the Google OAuth scopes (space-separated). Leave blank for the default.",
                id: "6NwjCQmCZB",
              }),
            ),
          },
        }),
        loginHint: (0, D.field)((0, D.annotate)(F.z.string().trim().min(1).optional(), { redact: "presence" }), {
          flatKey: "inferenceVertexOAuthLoginHint",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.12603.0" } },
          title: (0, x.msg)({ defaultMessage: "Vertex OAuth login hint", id: "HhOWSUTxff" }),
          category: "connection",
          placeholder: (0, x.msg)({ defaultMessage: "'{username}'@example.com", id: "SiQK5/KBQz" }),
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage:
                  "Pre-fill Google's account chooser and forward to your federated IdP. '{username}' expands to the OS login name.",
                id: "XLMVwXPbz1",
              }),
            ),
          },
        }),
      }),
      F.z.object({
        kind: F.z.literal("workforce"),
        audience: (0, D.field)(F.z.string().trim().min(1).optional(), {
          flatKey: "inferenceVertexWorkforceAudience",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } },
          remotePolicy: { requiresUserConsent: true },
          title: (0, x.msg)({ defaultMessage: "Workforce Identity audience", id: "B9l27BNEGU" }),
          egressRequirements: (e, t) => {
            var n, i;
            return ((n = t.inference) === null || n === void 0 ? void 0 : n.provider) === "vertex" &&
              ((i = t.inference.credential) === null || i === void 0 ? void 0 : i.kind) === "workforce" &&
              e
              ? [Sn.GOOGLE_STS_HOST]
              : [];
          },
          egressRequirementsLabel: (0, x.msg)({ defaultMessage: "Workforce Identity (STS)", id: "dKEgofbwpe" }),
          category: "connection",
          predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
          placeholder: (0, x.msg)({
            defaultMessage: "//iam.googleapis.com/locations/global/workforcePools/POOL/providers/PROVIDER",
            id: "EBQHEgxMx3",
          }),
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage:
                  "Workforce-pool provider audience. When set, sign-in uses your own IdP plus a GCP STS exchange instead of a Google identity.",
                id: "cc4tPynCta",
              }),
            ),
          },
        }),
        userProject: (0, D.field)((0, D.annotate)(F.z.string().trim().min(1).optional(), { redact: "hash" }), {
          flatKey: "inferenceVertexWorkforceUserProject",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } },
          title: (0, x.msg)({ defaultMessage: "Workforce Identity billing project", id: "T8t7Fu+JhP" }),
          category: "connection",
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage: "GCP project for STS billing and quota. Defaults to the Vertex project ID above.",
                id: "BCq+xoiDzP",
              }),
            ),
          },
        }),
        authFlow: (0, D.field)(F.z.enum(["browser", "broker"]).optional(), {
          flatKey: "inferenceVertexWorkforceAuthFlow",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.25927.0" } },
          title: (0, x.msg)({ defaultMessage: "Workforce Identity sign-in flow", id: "InfVertexWifAuthFlow" }),
          category: "connection",
          notAPresenceSignal: true,
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage: "How the IdP sign-in runs: system browser (default) or the OS Microsoft Entra broker.",
                id: "InfVertexWifAuthFlowShort",
              }),
            ),
            long: (0, D.longDescription)(
              "- **`browser`** (default) \u2014 opens the system browser for an authorization-code (PKCE) sign-in on a loopback redirect URI. See the **IdP setup** notes on `inferenceGatewayOidc` for redirect-URI registration; the same rules apply here.\n" +
                "- **`broker`** \u2014 signs in through the OS identity broker (Web Account Manager on Windows, Company Portal on macOS). Requires the workforce-pool IdP to be **Microsoft Entra ID** \u2014 the `issuer` on `inferenceVertexWorkforceOidc` must be `https://login.microsoftonline.com/{tenant-id}/v2.0`. The broker satisfies Conditional Access policies that require a compliant/managed device or token protection, and needs no `127.0.0.1/callback` loopback redirect. The Entra app registration must include the broker redirect URIs `ms-appx-web://Microsoft.AAD.BrokerPlugin/{client-id}` (Windows) and `msauth.com.anthropic.claudefordesktop://auth` (macOS) under the **Mobile and desktop applications** platform. Not supported on Linux.\n\n" +
                "The GCP STS token-exchange step is unchanged in either flow; only how the Entra id_token is acquired differs.",
            ),
          },
        }),
        oidc: (0, D.field)(Qd.BootstrapOidc.optional(), {
          flatKey: "inferenceVertexWorkforceOidc",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } },
          remotePolicy: { requiresUserConsent: true },
          title: (0, x.msg)({ defaultMessage: "Workforce Identity IdP (OIDC)", id: "8uN+pRpuBV" }),
          egressRequirements: (e, t) => {
            var n, i;
            return ((n = t.inference) === null || n === void 0 ? void 0 : n.provider) === "vertex" &&
              ((i = t.inference.credential) === null || i === void 0 ? void 0 : i.kind) === "workforce"
              ? (0, $e.oidcEgressHosts)(e)
              : [];
          },
          egressRequirementsLabel: (0, x.msg)({
            defaultMessage: "Workforce Identity sign-in (OIDC)",
            id: "YfucG+3eg9",
          }),
          category: "connection",
          predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage:
                  "Your organization\u2019s OIDC IdP. The app runs an authorization-code-with-PKCE flow against this issuer and exchanges the returned ID token at GCP STS.",
                id: "GKRkihdCmn",
              }),
            ),
          },
        }),
      }),
      F.z.object({
        kind: F.z.literal("vendor-profile"),
        credentialsFile: (0, D.field)((0, D.annotate)(F.z.string().optional(), { pathKind: "file" }), {
          flatKey: "inferenceVertexCredentialsFile",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
          remotePolicy: { requiresUserConsent: true },
          title: (0, x.msg)({ defaultMessage: "GCP credentials file path", id: "vr+XA6xjAJ" }),
          category: "connection",
          placeholder: (0, x.msg)({ defaultMessage: "/etc/claude/vertex-sa.json", id: "p8Z4FQ25gZ" }),
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage: "Absolute path to service-account JSON. Leave blank to fall back to ADC.",
                id: "g7d9j8Vr7D",
              }),
            ),
          },
        }),
      }),
      sS.HelperScriptCreds,
    ]),
    sK = F.z.object({
      provider: F.z.literal("vertex"),
      projectId: (0, D.field)((0, D.annotate)(F.z.string().optional(), { redact: "hash" }), {
        flatKey: "inferenceVertexProjectId",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
        title: (0, x.msg)({ defaultMessage: "GCP project ID", id: "725LtLiE2E" }),
        category: "connection",
        predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
        placeholder: (0, x.msg)({ defaultMessage: "my-gcp-project", id: "BfHrtKLzKn" }),
        description: {
          short: (0, D.shortDescription)(
            (0, x.msg)({
              defaultMessage: "Google Cloud project ID for Vertex AI inference.",
              id: "InfVertexProjectIdHint",
            }),
            { docsOnly: true },
          ),
        },
      }),
      region: (0, D.field)((0, D.annotate)(F.z.string().optional(), { redact: "keep" }), {
        flatKey: "inferenceVertexRegion",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
        title: (0, x.msg)({ defaultMessage: "GCP region", id: "dpoHgMeiUG" }),
        egressRequirements: (e, t) => {
          var n, i;
          if (((n = t.inference) === null || n === void 0 ? void 0 : n.provider) !== "vertex" || !e) return [];
          let r = (0, Sn.vertexInferenceHost)(e, t.inference.baseUrl),
            o = (i = t.inference.credential) === null || i === void 0 ? void 0 : i.kind;
          return o === "helper-script" || o === "workforce" ? [r] : [r, ...Sn.VERTEX_AUTH_HOSTS];
        },
        category: "connection",
        predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
        placeholder: (0, x.msg)({ defaultMessage: "us-east5", id: "r8UhFrWBXI" }),
        description: {
          short: (0, D.shortDescription)(
            (0, x.msg)({
              defaultMessage: "GCP region where your Vertex AI Claude models are deployed.",
              id: "YvJKUek0yj",
            }),
          ),
        },
      }),
      baseUrl: (0, D.field)((0, D.annotate)($e.urlWithSchemeCoercion.optional(), { redact: "hostname" }), {
        flatKey: "inferenceVertexBaseUrl",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
        remotePolicy: { rejectLoopback: true, originPinned: { carries: "local-credential" } },
        title: (0, x.msg)({ defaultMessage: "Vertex AI base URL", id: "TAuycZeIjw" }),
        category: "connection",
        placeholder: (0, x.msg)({
          defaultMessage: "https://REGION-aiplatform-ENDPOINT_ID.p.googleapis.com",
          id: "NHvtv6jJcx",
        }),
        description: {
          short: (0, D.shortDescription)(
            (0, x.msg)({ defaultMessage: "PSC endpoint, if using one.", id: "xHHO70UFYc" }),
          ),
        },
      }),
      ...io,
      credential: aK.optional(),
    }),
    uK = F.z.discriminatedUnion("kind", [
      F.z.object({
        kind: F.z.literal("static"),
        apiKey: (0, D.field)((0, D.annotate)(F.z.string().optional(), { redact: "drop" }), {
          flatKey: "inferenceFoundryApiKey",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
          title: (0, x.msg)({ defaultMessage: "Azure AI Foundry API key", id: "JqaU0qkb9c" }),
          category: "connection",
          predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({ defaultMessage: "API key for Azure AI Foundry inference.", id: "InfFoundryApiKeyHint" }),
              { docsOnly: true },
            ),
          },
        }),
      }),
      F.z.object({
        kind: F.z.literal("interactive"),
        tenantId: (0, D.field)(F.z.string().trim().min(1).optional(), {
          flatKey: "inferenceFoundryTenantId",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.9255.0" } },
          remotePolicy: { requiresUserConsent: true },
          title: (0, x.msg)({ defaultMessage: "Entra ID tenant ID", id: "Ah1hvJZNYr" }),
          egressRequirements: (e, t) => {
            var n;
            return ((n = t.inference) === null || n === void 0 ? void 0 : n.provider) === "foundry" && e
              ? [Sn.MICROSOFT_LOGIN_HOST]
              : [];
          },
          category: "connection",
          predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
          placeholder: (0, x.msg)({ defaultMessage: "00000000-0000-0000-0000-000000000000", id: "oT3AdLMVZK" }),
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage:
                  "Directory (tenant) ID of the Entra ID app registration that has the Cognitive Services scope.",
                id: "7sqrf3CZ6B",
              }),
            ),
          },
        }),
        clientId: (0, D.field)(F.z.string().trim().min(1).optional(), {
          flatKey: "inferenceFoundryClientId",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.9255.0" } },
          remotePolicy: { requiresUserConsent: true },
          title: (0, x.msg)({ defaultMessage: "Entra ID client ID", id: "bLvD/3lRxB" }),
          category: "connection",
          predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
          placeholder: (0, x.msg)({ defaultMessage: "11111111-1111-1111-1111-111111111111", id: "Ck5uU8xAnb" }),
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage:
                  "Application (client) ID of the Entra ID app registration. Device-code sign-in requires the app to allow public client flows.",
                id: "InfFoundryClientIdHint",
              }),
            ),
          },
        }),
        authFlow: (0, D.field)(F.z.enum(["device-code", "browser", "broker"]).optional(), {
          flatKey: "inferenceFoundryAuthFlow",
          support: { enabled: { scopes: ["3p"], availableInVersion: "1.19367.0" } },
          title: (0, x.msg)({ defaultMessage: "Entra ID sign-in flow", id: "InfFoundryAuthFlow" }),
          category: "connection",
          placeholder: (0, x.msg)({ defaultMessage: "device-code", id: "InfFoundryAuthFlowPh" }),
          description: {
            short: (0, D.shortDescription)(
              (0, x.msg)({
                defaultMessage:
                  "How Entra sign-in runs: device code (default), system browser, or the OS identity broker.",
                id: "qCKLNhSFcP",
              }),
            ),
            long: (0, D.longDescription)(
              "- **`device-code`** (default) \u2014 shows a code to enter at microsoft.com/devicelogin. The app registration must have **Allow public client flows** enabled.\n" +
                "- **`browser`** \u2014 opens the system browser for an authorization-code (PKCE) sign-in on a loopback redirect URI. The app registration must include `http://127.0.0.1/callback` under the **Mobile and desktop applications** platform (Entra ignores the loopback port, but not the path). Works with **Allow public client flows** disabled, and is unaffected by Conditional Access policies that block device-code authentication.\n" +
                "- **`broker`** \u2014 signs in through the OS identity broker (Web Account Manager on Windows, Company Portal on macOS), so it can satisfy Conditional Access policies that require a compliant/managed device or token protection. The app registration must include the broker redirect URIs `ms-appx-web://Microsoft.AAD.BrokerPlugin/{client-id}` (Windows) and `msauth.com.anthropic.claudefordesktop://auth` (macOS) under the **Mobile and desktop applications** platform. Not supported on Linux.\n\n" +
                "App versions that predate this key always use device code; versions that predate the broker option treat `broker` as unset and use device code.",
            ),
          },
        }),
      }),
      sS.HelperScriptCreds,
    ]),
    cK = F.z.object({
      provider: F.z.literal("foundry"),
      resource: (0, D.field)(F.z.string().optional(), {
        flatKey: "inferenceFoundryResource",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
        title: (0, x.msg)({ defaultMessage: "Azure AI Foundry resource name", id: "tdj4b/xhUV" }),
        egressRequirements: (e, t) => {
          var n;
          return ((n = t.inference) === null || n === void 0 ? void 0 : n.provider) === "foundry" && e
            ? [`${e}.services.ai.azure.com`]
            : [];
        },
        category: "connection",
        predicates: { required: (e) => !(0, $e.hasActiveBootstrap)(e) },
        placeholder: (0, x.msg)({ defaultMessage: "my-foundry-resource", id: "CWxAZo6MyF" }),
        description: {
          short: (0, D.shortDescription)(
            (0, x.msg)({
              defaultMessage: "Azure AI Foundry resource name used to construct the endpoint URL.",
              id: "XfOmm8BNBA",
            }),
          ),
        },
      }),
      ...io,
      credential: uK.optional(),
    });
  sS.InferenceConfig = F.z.discriminatedUnion("provider", [
    (0, D.variantMeta)(QB, {}),
    (0, D.variantMeta)(tK, {}),
    (0, D.variantMeta)(nK, {
      cliFlag: "CLAUDE_CODE_USE_BEDROCK",
      bedrockFamily: true,
      noDiscoveryFor: ["interactive", "vendor-profile"],
    }),
    (0, D.variantMeta)(oK, {
      cliFlag: "CLAUDE_CODE_USE_MANTLE",
      bedrockFamily: true,
      noDiscoveryFor: ["static", "helper-script"],
    }),
    (0, D.variantMeta)(sK, {
      cliFlag: "CLAUDE_CODE_USE_VERTEX",
      noDiscoveryFor: ["oauth", "workforce", "helper-script", "vendor-profile"],
    }),
    (0, D.variantMeta)(cK, {
      cliFlag: "CLAUDE_CODE_USE_FOUNDRY",
      noDiscoveryFor: ["static", "helper-script", "interactive"],
    }),
  ]);
  sS.PROVIDER_ARMS = new Map(sS.InferenceConfig.options.map((e) => [e.shape.provider.value, e]));
  var tf = (e) => {
    var t;
    return (t = (0, D.variantMetaForNode)(sS.PROVIDER_ARMS.get(e))) !== null && t !== void 0 ? t : {};
  };
  sS.CREDENTIAL_KINDS_FOR_PROVIDER = Object.fromEntries(
    D.PROVIDERS.map((e) => [
      e,
      (0, D.discriminatorArmsOf)(sS.PROVIDER_ARMS.get(e).shape.credential)
        .filter((t) => t.id)
        .map((t) => t.id),
    ]),
  );
  sS.PROVIDER_CLI_FLAG = Object.fromEntries(
    D.PROVIDERS.flatMap((e) => {
      let t = tf(e).cliFlag;
      return t ? [[e, t]] : [];
    }),
  );
  var lK = (e) => e !== void 0 && tf(e).bedrockFamily === true;
  sS.isBedrockFamily = lK;
  function dK(e) {
    let t = {};
    for (let i of Object.values(sS.PROVIDER_CLI_FLAG)) t[i] = "";
    let n = e && sS.PROVIDER_CLI_FLAG[e];
    if (n) t[n] = "1";
    return t;
  }
  function aS(e, t) {
    if (!e) return true;
    let n = sS.CREDENTIAL_KINDS_FOR_PROVIDER[e];
    if (n.length === 0) return false;
    let i = tf(e).noDiscoveryFor;
    if (t === void 0) return n.some((r) => !(i === null || i === void 0 ? void 0 : i.includes(r)));
    return n.includes(t) && !(i === null || i === void 0 ? void 0 : i.includes(t));
  }
  var fK = (e) => {
    var t;
    return aS((t = e.inference) === null || t === void 0 ? void 0 : t.provider, (0, $e.credentialKindOf)(e));
  };
  sS.providerHasDiscovery = fK;
});

var Si = S(function (fS) {
  Object.defineProperty(fS, "__esModule", { value: true });
  fS.GROUP_DESCRIPTIONS =
    fS.BOOTSTRAP_GROUP =
    fS.MCP_SERVERS_GROUP =
    fS.ANTHROPIC_TELEMETRY_GROUP =
    fS.GENERAL_RESTRICTIONS_GROUP =
      void 0;
  var ha = pt();
  fS.GENERAL_RESTRICTIONS_GROUP = (0, ha.msg)({ defaultMessage: "General restrictions", id: "fHh9zisMLR" });
  fS.ANTHROPIC_TELEMETRY_GROUP = (0, ha.msg)({ defaultMessage: "Anthropic telemetry", id: "auYj3lyf1+" });
  fS.MCP_SERVERS_GROUP = (0, ha.msg)({ defaultMessage: "MCP servers", id: "K9q4XwLJd2" });
  fS.BOOTSTRAP_GROUP = (0, ha.msg)({ defaultMessage: "Bootstrap config URL", id: "MPdK0gXvRA" });
  fS.GROUP_DESCRIPTIONS = {
    [fS.GENERAL_RESTRICTIONS_GROUP.id]: (0, ha.msg)({
      defaultMessage: "These apply regardless of which surfaces are enabled.",
      id: "kTD7aU+1xd",
    }),
  };
});

var Vu = S(function (_S) {
  Object.defineProperty(_S, "__esModule", { value: true });
  _S.FeatureDiscoveryConfig =
    _S.AutoUpdateConfig =
    _S.ExtensionsConfig =
    _S.ChatSurfaceConfig =
    _S.CodeSurfaceConfig =
    _S.CoworkSurfaceConfig =
    _S.TokenLimitsConfig =
    _S.OtlpConfig =
    _S.OTLP_CONTENT_CATEGORIES =
      void 0;
  var rt = st(),
    hS = ht(),
    oe = Ze(),
    Hu = Lt(),
    J = pt(),
    Oi = (0, J.msg)({ defaultMessage: "OpenTelemetry", id: "dYlenA3UP7" });
  _S.OTLP_CONTENT_CATEGORIES = ["userPrompts", "assistantResponses", "toolDetails", "toolContent", "rawApiBodies"];
  _S.OtlpConfig = rt.z.object({
    endpoint: (0, oe.field)(
      (0, oe.annotate)(Hu.urlWithSchemeCoercion.optional(), { redact: "hostname", gatewayServable: false }),
      {
        flatKey: "otlpEndpoint",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
        remotePolicy: { rejectLoopback: true },
        title: (0, J.msg)({ defaultMessage: "OpenTelemetry collector endpoint", id: "xovdJlXIM6" }),
        egressRequirements: (e) => {
          let t = (0, hS.safeHostname)(e);
          return t ? [t] : [];
        },
        category: "telemetry",
        group: Oi,
        order: 10,
        placeholder: (0, J.msg)({ defaultMessage: "https://otel.example.com", id: "b7vgLij1HS" }),
        description: {
          short: (0, oe.shortDescription)(
            (0, J.msg)({
              defaultMessage: "Where Cowork sends OpenTelemetry logs and metrics. Leave blank to disable.",
              id: "uRCffDWQcJ",
            }),
          ),
        },
      },
    ),
    protocol: (0, oe.field)(
      (0, oe.annotate)(rt.z.enum(["http/protobuf", "http/json", "grpc"]).optional(), { gatewayServable: false }),
      {
        flatKey: "otlpProtocol",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
        title: (0, J.msg)({ defaultMessage: "OpenTelemetry exporter protocol", id: "jETNRIFigw" }),
        default: "http/protobuf",
        category: "telemetry",
        group: Oi,
        order: 11,
        description: {
          short: (0, oe.shortDescription)((0, J.msg)({ defaultMessage: "grpc or http/protobuf.", id: "cVMpuel8sz" })),
        },
        predicates: {
          show: (e) => {
            var t;
            return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
          },
        },
      },
    ),
    headers: (0, oe.field)((0, oe.annotate)(Hu.kvRecord.optional(), { redact: "drop", gatewayServable: false }), {
      flatKey: "otlpHeaders",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      title: (0, J.msg)({ defaultMessage: "OpenTelemetry exporter headers", id: "fO2poeLmt6" }),
      category: "telemetry",
      group: Oi,
      order: 12,
      placeholder: {
        key: (0, J.msg)({ defaultMessage: "Authorization", id: "zgMsosqNrx" }),
        value: (0, J.msg)({ defaultMessage: "Bearer \u2026", id: "aj5POhAKey" }),
      },
      addLabel: (0, J.msg)({ defaultMessage: "Add header", id: "IxbsWX4wj4" }),
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({ defaultMessage: "Optional auth headers for the collector.", id: "8F+30bQ20n" }),
        ),
      },
      predicates: {
        show: (e) => {
          var t;
          return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
        },
      },
    }),
    resourceAttributes: (0, oe.field)(
      (0, oe.annotate)(Hu.kvRecord.optional(), { redact: "presence", gatewayServable: false }),
      {
        flatKey: "otlpResourceAttributes",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.5354.0" } },
        title: (0, J.msg)({ defaultMessage: "OpenTelemetry resource attributes", id: "JgRwRuBWFK" }),
        category: "telemetry",
        group: Oi,
        order: 13,
        placeholder: {
          key: (0, J.msg)({ defaultMessage: "enduser.id", id: "QkbhtcTa4t" }),
          value: (0, J.msg)({ defaultMessage: "alice@example.com", id: "KER1zNW5fX" }),
        },
        addLabel: (0, J.msg)({ defaultMessage: "Add attribute", id: "fkzH83T+V/" }),
        description: {
          short: (0, oe.shortDescription)(
            (0, J.msg)({
              defaultMessage:
                "Extra resource attributes to attach to every span/metric. A static enduser.id set here always wins over the runtime identity.",
              id: "avoHZ0YdKZ",
            }),
          ),
          long: (0, oe.longDescription)(
            "Extra resource attributes to attach to every span, metric, and log sent to your collector. When End-user attribution is on and no `enduser.id` is set here, the desktop fills it with the signed-in user's runtime identity; a value you set here always wins. `process.owner` (the OS login name) is always emitted; set it here to override.",
          ),
        },
        predicates: {
          show: (e) => {
            var t;
            return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
          },
        },
      },
    ),
    desktopLogLevel: (0, oe.field)(rt.z.enum(["off", "error", "warn", "info", "debug"]).optional(), {
      flatKey: "otlpDesktopLogLevel",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.9255.0" } },
      title: (0, J.msg)({ defaultMessage: "Desktop telemetry export level", id: "TcONUV0eiZ" }),
      default: "error",
      category: "telemetry",
      group: Oi,
      order: 14,
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage:
              "Controls the Claude Desktop application\u2019s events, separate from Cowork and Code sessions. Defaults to error.",
            id: "wkZUOJzo5S",
          }),
        ),
      },
      predicates: {
        show: (e) => {
          var t;
          return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
        },
      },
    }),
    contentCapture: (0, oe.field)(
      (0, oe.annotate)((0, Hu.lenientEnumArray)(_S.OTLP_CONTENT_CATEGORIES).optional(), { redact: "keep" }),
      {
        flatKey: "otlpContentCapture",
        failClosedValue: [],
        support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.15962.0" } },
        title: (0, J.msg)({ defaultMessage: "Content capture categories", id: "OtlpContentCaptureTitle" }),
        category: "telemetry",
        group: Oi,
        order: 15,
        description: {
          short: (0, oe.shortDescription)(
            (0, J.msg)({
              defaultMessage:
                "Content categories the desktop exporter sends unredacted to your collector. Leave empty to redact all content (default).",
              id: "OtlpContentCaptureHint",
            }),
          ),
          long: (0, oe.longDescription)(
            `Each category enables a class of raw content in OpenTelemetry events sent to your collector (this data never reaches Anthropic):
` +
              "- `userPrompts` \u2014 user-typed prompt text\n" +
              "- `assistantResponses` \u2014 assistant message text\n" +
              "- `toolDetails` \u2014 tool input arguments, e.g. the web-search query string\n" +
              "- `toolContent` \u2014 tool output content, e.g. fetched page text or command stdout\n" +
              "- `rawApiBodies` \u2014 full inference API request and response bodies\n\n" +
              "These mirror Claude Code's `OTEL_LOG_*` env vars; see the [Claude Code monitoring docs](https://code.claude.com/docs/en/monitoring-usage).",
          ),
        },
        predicates: {
          show: (e) => {
            var t;
            return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
          },
        },
      },
    ),
    tracesEnabled: (0, oe.field)(rt.z.boolean().optional(), {
      flatKey: "otlpTracesEnabled",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.22209.0" } },
      title: (0, J.msg)({ defaultMessage: "Export traces (beta)", id: "OtlpTracesEnabledTitle" }),
      category: "telemetry",
      group: Oi,
      order: 16,
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage:
              "Also export OpenTelemetry traces from Cowork tasks and Code sessions. Uses Claude Code\u2019s session-tracing beta.",
            id: "OtlpTracesEnabledHint",
          }),
        ),
        long: (0, oe.longDescription)(
          "Enables Claude Code's session-tracing beta (`CLAUDE_CODE_ENHANCED_TELEMETRY_BETA=1` + `OTEL_TRACES_EXPORTER=otlp`) in spawned Cowork tasks and Code sessions. Each user interaction exports a trace whose spans and events carry `trace_id`/`span_id`, enabling end-to-end correlation in your observability backend (metrics do not carry trace context; correlate those via `session.id`). Traces go to the collector endpoint and protocol configured above. While the Claude Code feature is in beta the span structure may evolve; see the [Claude Code monitoring docs](https://code.claude.com/docs/en/monitoring-usage).",
        ),
      },
      predicates: {
        show: (e) => {
          var t;
          return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
        },
      },
    }),
  });
  var gS = (e) => {
    var t;
    return ((t = e.tokenLimits) === null || t === void 0 ? void 0 : t.maxPerWindow) !== void 0;
  };
  _S.TokenLimitsConfig = rt.z.object({
    maxPerWindow: (0, oe.field)(rt.z.coerce.number().int().positive().optional(), {
      flatKey: "inferenceMaxTokensPerWindow",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      title: (0, J.msg)({ defaultMessage: "Max tokens per window", id: "aTTY7rU6Bh" }),
      groupOverride: "verbatim",
      category: "limits",
      suffix: (0, J.msg)({ defaultMessage: "tokens", id: "ZON8uMn14w" }),
      placeholder: (0, J.msg)({ defaultMessage: "5000000", id: "1yRrT11eFX" }),
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage:
              "Per-user soft cap, counted client-side over the duration below. Not a server-enforced quota.",
            id: "ozzKmITBMv",
          }),
        ),
        long: (0, oe.longDescription)(
          "Requires `inferenceTokenWindowHours` to also be set \u2014 without a window length the cap is inert and no limit is enforced.",
        ),
      },
    }),
    windowHours: (0, oe.field)(rt.z.coerce.number().int().positive().lte(720).optional(), {
      flatKey: "inferenceTokenWindowHours",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      title: (0, J.msg)({ defaultMessage: "Token cap window", id: "FSyyISlTnS" }),
      groupOverride: "verbatim",
      category: "limits",
      suffix: (0, J.msg)({ defaultMessage: "hours", id: "4MengK4xQ/" }),
      placeholder: (0, J.msg)({ defaultMessage: "24", id: "wAM7X1pIFa" }),
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage: "Tumbling window length for the token cap. Max 720 hours (30 days).",
            id: "3iLLaW8pc5",
          }),
        ),
        long: (0, oe.longDescription)(
          "Required when `inferenceMaxTokensPerWindow` is set \u2014 the cap only takes effect once both are configured.",
        ),
      },
      predicates: { show: gS, required: gS },
    }),
  });
  var sf = (0, J.msg)({ defaultMessage: "Allowed surfaces", id: "XhBz9JhRHE" }),
    bK = (0, J.msg)({ defaultMessage: "Chat restrictions", id: "Ztk/Zc3utE" }),
    nf = {
      coworkSurface: (e) => {
        var t;
        return ((t = e.coworkSurface) === null || t === void 0 ? void 0 : t.enabled) !== false;
      },
      codeSurface: (e) => {
        var t;
        return ((t = e.codeSurface) === null || t === void 0 ? void 0 : t.enabled) !== false;
      },
      chatSurface: (e) => {
        var t;
        return ((t = e.chatSurface) === null || t === void 0 ? void 0 : t.enabled) === true;
      },
    },
    vK = (0, J.msg)({ defaultMessage: "At least one surface must remain enabled.", id: "LastSurfaceReason" });
  function uf(e, t) {
    if (!nf[t](e)) return false;
    for (let n of Object.keys(nf)) if (n !== t && nf[n](e)) return false;
    return vK;
  }
  _S.CoworkSurfaceConfig = rt.z.object({
    enabled: (0, oe.field)(rt.z.boolean().optional(), {
      flatKey: "coworkTabEnabled",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.9659.0" } },
      title: (0, J.msg)({
        defaultMessage: "Allow Cowork",
        description:
          "\u201CCowork\u201D is a product name \u2014 keep it untranslated in Latin script; translate the rest of the sentence naturally.",
        id: "pq8krELyA1",
      }),
      default: true,
      groupOverride: "verbatim",
      category: "sandbox",
      group: sf,
      label: (0, J.msg)({
        defaultMessage: "Cowork",
        description: "[no-translate] Product name; must remain exactly \u201CCowork\u201D in every locale.",
        id: "+MH0VdRCHz",
      }),
      order: 0,
      predicates: { disabled: (e) => uf(e, "coworkSurface") },
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage: "Enable Cowork. Claude works on longer tasks like research, analysis, and documents.",
            description:
              "\u201CCowork\u201D is a product name \u2014 keep it untranslated in Latin script; translate the rest of the sentence naturally.",
            id: "N8nKVnjFDF",
          }),
        ),
      },
    }),
  });
  _S.CodeSurfaceConfig = rt.z.object({
    enabled: (0, oe.field)(rt.z.boolean().optional(), {
      flatKey: "isClaudeCodeForDesktopEnabled",
      support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } },
      title: (0, J.msg)({ defaultMessage: "Allow Code", id: "5fWJP5tZx6" }),
      default: true,
      groupOverride: "verbatim",
      category: "sandbox",
      group: sf,
      label: (0, J.msg)({ defaultMessage: "Code", id: "h2vipunVVd" }),
      order: 1,
      predicates: { disabled: (e) => uf(e, "codeSurface") },
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({ defaultMessage: "Enable Code. Claude writes and runs code.", id: "/vs1W12TA0" }),
        ),
      },
    }),
  });
  _S.ChatSurfaceConfig = rt.z.object({
    enabled: (0, oe.field)(rt.z.boolean().optional(), {
      flatKey: "chatTabEnabled",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.13576.0" } },
      title: (0, J.msg)({ defaultMessage: "Allow Chat", id: "0Cc9oG2J04" }),
      groupOverride: "verbatim",
      category: "sandbox",
      group: sf,
      label: (0, J.msg)({ defaultMessage: "Chat", id: "WTrOy36sdu" }),
      order: 2,
      predicates: { disabled: (e) => uf(e, "chatSurface") },
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({ defaultMessage: "Enable Chat. Quick questions and drafting.", id: "z2x73mCBZ9" }),
        ),
      },
    }),
    advancedFileAnalysis: (0, oe.field)(rt.z.boolean().optional(), {
      flatKey: "chatAdvancedFileAnalysisEnabled",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.14271.0" } },
      groupOverride: "verbatim",
      title: (0, J.msg)({ defaultMessage: "Advanced file analysis", id: "ChatAdvancedFileAnalysisEnabled" }),
      category: "sandbox",
      group: bK,
      order: 20,
      predicates: {
        show: (e) => {
          var t;
          return ((t = e.chatSurface) === null || t === void 0 ? void 0 : t.enabled) !== false;
        },
      },
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage:
              "Allow Claude to run code in a local sandbox to analyze attached files it can\u2019t read natively \u2014 like Excel and PowerPoint. Off by default.",
            id: "EC49vAdH1s",
          }),
        ),
        long: (0, oe.longDescription)(
          "Also enables inline data analysis. The sandbox can only read files attached to the conversation and has no network access.",
        ),
      },
    }),
  });
  var of = (0, J.msg)({ defaultMessage: "Extensions", id: "nb2FlN/G2m" });
  _S.ExtensionsConfig = rt.z.object({
    enabled: (0, oe.field)(rt.z.boolean().optional(), {
      flatKey: "isDesktopExtensionEnabled",
      support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } },
      title: (0, J.msg)({ defaultMessage: "Allow desktop extensions", id: "knHnvzpkOf" }),
      default: false,
      groupOverride: "verbatim",
      legacyFlatKey: "isDxtEnabled",
      egressRequirements: (e) => (e === false ? [] : hS.PYTHON_EXTENSION_RUNTIME_HOSTS),
      egressRequirementsLabel: (0, J.msg)({ defaultMessage: "Desktop extensions (Python runtime)", id: "8Jc9WEC0S8" }),
      category: "connectors",
      group: of,
      order: 11,
      description: {
        short: (0, oe.shortDescription)((0, J.msg)({ defaultMessage: ".dxt and .mcpb installs.", id: "2IB0Hxh1vO" })),
        long: (0, oe.longDescription)(
          "1P builds default to enabled at runtime unless this is explicitly set. In 3P, enabling this allows loading extensions; local install additionally requires an org policy backend.",
        ),
      },
    }),
    directoryEnabled: (0, oe.field)(rt.z.boolean().optional(), {
      flatKey: "isDesktopExtensionDirectoryEnabled",
      support: { enabled: { scopes: ["1p"], availableInVersion: "1.2581.0" } },
      groupOverride: "verbatim",
      title: (0, J.msg)({ defaultMessage: "Show extension directory", id: "bqOLf0vLQm" }),
      default: { displayOnly: true },
      legacyFlatKey: "isDxtDirectoryEnabled",
      category: "connectors",
      group: of,
      order: 12,
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage: "The in-app catalogue of installable extensions. Hide to allow sideload only.",
            id: "g8s4jWgsLf",
          }),
        ),
      },
      predicates: {
        show: (e) => {
          var t;
          return ((t = e.extensions) === null || t === void 0 ? void 0 : t.enabled) !== false;
        },
      },
    }),
    signatureRequired: (0, oe.field)(rt.z.boolean().optional(), {
      flatKey: "isDesktopExtensionSignatureRequired",
      support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } },
      title: (0, J.msg)({ defaultMessage: "Require signed extensions", id: "bmP92ZCban" }),
      default: false,
      groupOverride: "verbatim",
      legacyFlatKey: "isDxtSignatureRequired",
      category: "connectors",
      group: of,
      order: 13,
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage: "Reject desktop extensions that are not signed by a trusted publisher.",
            id: "DY0aw7svrD",
          }),
        ),
      },
      predicates: {
        show: (e) => {
          var t;
          return ((t = e.extensions) === null || t === void 0 ? void 0 : t.enabled) !== false;
        },
      },
    }),
  });
  var af = (0, J.msg)({ defaultMessage: "Updates", id: "recCg9im82" });
  _S.AutoUpdateConfig = rt.z.object({
    disabled: (0, oe.field)(rt.z.boolean().optional(), {
      flatKey: "disableAutoUpdates",
      support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } },
      appBehaviorOnly: true,
      title: (0, J.msg)({ defaultMessage: "Block auto-updates", id: "OX1+jdVwLL" }),
      default: false,
      category: "telemetry",
      group: af,
      order: 20,
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage: "Stop Cowork from fetching updates. You\u2019ll need to push new versions yourself.",
            id: "DkzS21HYVH",
          }),
        ),
      },
      predicates: {
        warn: (e) =>
          e === true
            ? (0, J.msg)({
                defaultMessage:
                  "Security and compatibility fixes will not install automatically. Make sure IT has another distribution path.",
                id: "1oztgcYddf",
              })
            : null,
      },
    }),
    enforcementHours: (0, oe.field)(rt.z.coerce.number().int().gt(0).lte(72).optional(), {
      flatKey: "autoUpdaterEnforcementHours",
      support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } },
      appBehaviorOnly: true,
      title: (0, J.msg)({ defaultMessage: "Auto-update enforcement window", id: "jJz20QocAd" }),
      category: "telemetry",
      group: af,
      order: 21,
      suffix: (0, J.msg)({ defaultMessage: "hours", id: "4MengK4xQ/" }),
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage: "Hours before a downloaded update force-installs. Blank = 72-hour default.",
            id: "5WLafALiPe",
          }),
        ),
      },
      predicates: {
        show: (e) => {
          var t;
          return ((t = e.autoUpdate) === null || t === void 0 ? void 0 : t.disabled) !== true;
        },
      },
    }),
    viaUpdatesHost: (0, oe.field)(rt.z.boolean().optional(), {
      flatKey: "updateViaUpdatesHost",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.26832.0" } },
      appBehaviorOnly: true,
      title: (0, J.msg)({ defaultMessage: "Check for updates on releases.claude.com", id: "UpdateViaUpdatesHost" }),
      default: false,
      category: "telemetry",
      group: af,
      order: 22,
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage: "Read the update feed from releases.claude.com so api.anthropic.com can stay blocked.",
            id: "UpdateViaUpdatesHostShort",
          }),
        ),
        long: (0, oe.longDescription)(
          "By default the app asks `api.anthropic.com` which version to install. That host also serves the model APIs, so organizations that block un-approved LLM endpoints at the network edge end up blocking updates too.\n\nTurn this on to read the same feed from `releases.claude.com`, a hostname that serves only the desktop update-check route and carries no model API. `api.anthropic.com` can then stay blocked without breaking auto-update. Rollout behavior is unchanged; the installer download still comes from `downloads.claude.ai` as before.",
        ),
      },
      predicates: {
        show: (e) => {
          var t;
          return ((t = e.autoUpdate) === null || t === void 0 ? void 0 : t.disabled) !== true;
        },
      },
    }),
  });
  var wK = (0, J.msg)({ defaultMessage: "Feature announcements", id: "FeatureAnnouncementsGroup" });
  _S.FeatureDiscoveryConfig = rt.z.object({
    disabled: (0, oe.field)(rt.z.boolean().optional(), {
      flatKey: "disableFeatureDiscovery",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.21459.0" } },
      title: (0, J.msg)({ defaultMessage: "Hide feature announcements", id: "DisableFeatureDiscoveryTitle" }),
      default: false,
      failClosedValue: true,
      category: "appearance",
      group: wK,
      order: 10,
      description: {
        short: (0, oe.shortDescription)(
          (0, J.msg)({
            defaultMessage:
              "Suppress unprompted feature-announcement UI: the post-update \u201CWhat\u2019s new\u201D nudge and new-feature tips. Users can still open release notes themselves.",
            id: "DisableFeatureDiscoveryHint",
          }),
        ),
        long: (0, oe.longDescription)(
          `Covers the version-shipped announcement UI baked into each release: the **What's new** button that appears on its own after an update, and the one-time **New feature** tips (coach-marks) that point out newly shipped capabilities. Useful when your organization gates feature availability and doesn't want the app advertising capabilities you haven't rolled out.

` +
            "User-initiated surfaces stay: the What's-new menu item and header button still open the release notes on demand. Auto-update behavior is unaffected \u2014 that is governed by `disableAutoUpdates` and `autoUpdaterEnforcementHours`.",
        ),
      },
    }),
  });
});

var lf = S(function (SS) {
  Object.defineProperty(SS, "__esModule", { value: true });
  SS.BootstrapConfig = void 0;
  var cf = st(),
    TK = ht(),
    kn = Ze(),
    vS = Lt(),
    gr = pt(),
    wS = Wt(),
    Gu = Si();
  SS.BootstrapConfig = cf.z.object({
    enabled: (0, kn.field)(cf.z.boolean().optional(), {
      flatKey: "bootstrapEnabled",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } },
      remotePolicy: { type: "remote-disabled" },
      title: (0, gr.msg)({ defaultMessage: "Use bootstrap config", id: "Q6zr1vGzlF" }),
      default: true,
      category: "source",
      group: Gu.BOOTSTRAP_GROUP,
      description: {
        short: (0, kn.shortDescription)(
          (0, gr.msg)({
            defaultMessage:
              "Fetch and apply the URL above at launch. Turn off to keep the URL saved but skip the fetch.",
            id: "0Nsvk4xG6E",
          }),
        ),
      },
      predicates: {
        show: (e) => {
          var t;
          return Boolean((t = e.bootstrap) === null || t === void 0 ? void 0 : t.url);
        },
      },
    }),
    url: (0, kn.field)((0, kn.annotate)(wS.httpsUrl.optional(), { redact: "hostname" }), {
      flatKey: "bootstrapUrl",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } },
      remotePolicy: { type: "remote-disabled" },
      title: (0, gr.msg)({ defaultMessage: "Bootstrap config URL", id: "MPdK0gXvRA" }),
      egressRequirements: (e, t) => {
        var n;
        if (((n = t.bootstrap) === null || n === void 0 ? void 0 : n.enabled) === false) return [];
        let i = (0, TK.safeHostname)(e);
        return i ? [i] : [];
      },
      egressRequirementsLabel: (0, gr.msg)({ defaultMessage: "Bootstrap config server", id: "qjMZL1XFnR" }),
      category: "source",
      group: Gu.BOOTSTRAP_GROUP,
      placeholder: (0, gr.msg)({ defaultMessage: "https://config.example.com/claude-desktop", id: "IHENczwSR2" }),
      description: {
        short: (0, kn.shortDescription)(
          (0, gr.msg)({
            defaultMessage:
              "HTTPS endpoint that returns a per-user JSON config overlay. Values from the response override local settings and become read-only.",
            id: "5SJ4ZG3Kp2",
          }),
        ),
      },
    }),
    oidc: (0, kn.field)(wS.BootstrapFetchOidc.optional(), {
      flatKey: "bootstrapOidc",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } },
      remotePolicy: { type: "remote-disabled" },
      title: (0, gr.msg)({ defaultMessage: "Bootstrap OIDC parameters", id: "zS5yI0rzXy" }),
      egressRequirements: (e, t) => {
        var n;
        return ((n = t.bootstrap) === null || n === void 0 ? void 0 : n.enabled) === false
          ? []
          : (0, vS.oidcEgressHosts)(e);
      },
      egressRequirementsLabel: (0, gr.msg)({ defaultMessage: "Bootstrap sign-in (OIDC)", id: "q2PtfeOums" }),
      category: "source",
      group: Gu.BOOTSTRAP_GROUP,
      description: {
        short: (0, kn.shortDescription)(
          (0, gr.msg)({
            defaultMessage:
              "When set, the bootstrap request sends a Bearer token from a browser sign-in (authorization-code-with-PKCE).",
            id: "USlfHdFqDQ",
          }),
        ),
        long: (0, kn.longDescription)(
          "Set this to use a separate identity provider (Microsoft Entra ID, Okta, Ping, or any compliant OIDC provider) for the bootstrap sign-in. The app runs an authorization-code-with-PKCE flow in the system browser. Omit to use device-code mode against the bootstrap server's own origin.\n\nThis is an **object-typed key** \u2014 in an MDM profile it is a single JSON-string value, not separate keys with dotted names like `bootstrapOidc.clientId`. Writing the sub-fields as separate registry values causes the app to silently fall through to device-code mode.",
          { docsUrl: `${vS.COWORK_3P_DOCS_BASE}/bootstrap` },
        ),
      },
      predicates: {
        show: (e) => {
          var t;
          return Boolean((t = e.bootstrap) === null || t === void 0 ? void 0 : t.url);
        },
      },
    }),
    trustBootstrapDelivery: (0, kn.field)(cf.z.boolean().optional(), {
      flatKey: "trustBootstrapDelivery",
      legacyFlatKey: "trustBootstrapLocalExec",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.25927.0" } },
      title: (0, gr.msg)({ defaultMessage: "Trust bootstrap-delivered settings", id: "vRHCNG9xkY" }),
      default: false,
      category: "source",
      group: Gu.BOOTSTRAP_GROUP,
      remotePolicy: { type: "remote-disabled" },
      description: {
        short: (0, kn.shortDescription)(
          (0, gr.msg)({
            defaultMessage:
              "Skip the per-user consent prompt for sign-in targets, helper scripts, and connectors the bootstrap server delivers.",
            id: "HtPqh1w8OM",
          }),
        ),
      },
      predicates: {
        show: (e) => {
          var t;
          return Boolean((t = e.bootstrap) === null || t === void 0 ? void 0 : t.url);
        },
      },
    }),
  });
});

var ff = S(function (PS) {
  Object.defineProperty(PS, "__esModule", { value: true });
  PS.ModelsConfig = PS.InferenceModel = void 0;
  PS.modelDiscoveryUrlHint = df;
  var Jt = st(),
    AK = Xl(),
    kS = ht(),
    Ot = Ze(),
    _a = Lt(),
    Ut = pt(),
    Wu = On(),
    RK = Jo();
  PS.InferenceModel = Jt.z.object({
    name: (0, Ot.subfield)(Jt.z.string().trim().min(1), {
      label: (0, Ut.msg)({ defaultMessage: "Model ID", id: "/m0q/Dre6A" }),
      isPrimaryKey: true,
      mono: true,
      placeholder: (0, Ut.msg)({ defaultMessage: "claude-opus-4", id: "s+j6yEtVLW" }),
    }),
    labelOverride: (0, Ot.subfield)(
      Jt.z
        .string()
        .trim()
        .transform((e) => e || void 0)
        .optional(),
      {
        label: (0, Ut.msg)({ defaultMessage: "Display name", id: "dOQCL8n7dZ" }),
        placeholder: (0, Ut.msg)({ defaultMessage: "Claude Opus 4", id: "c1LGvG2F3D" }),
        description: {
          short: (0, Ot.shortDescription)(
            (0, Ut.msg)({
              defaultMessage: "Shown in the model picker. Leave blank to auto-format from the ID.",
              id: "y8c8KzJEws",
            }),
          ),
        },
      },
    ),
    supports1m: (0, Ot.subfield)(
      Jt.z
        .boolean()
        .optional()
        .catch(void 0),
      { label: (0, Ut.msg)({ defaultMessage: "Offer 1M-context variant", id: "a87VTwtQw3" }) },
    ),
    prefer1m: (0, Ot.subfield)(
      Jt.z
        .boolean()
        .optional()
        .catch(void 0),
      {
        label: (0, Ut.msg)({ defaultMessage: "Default to 1M context", id: "Y4hvizKRhU" }),
        description: {
          short: (0, Ot.shortDescription)(
            (0, Ut.msg)({
              defaultMessage:
                "Make the 1M-context variant the default picker selection when this model is the default (first) entry. Users can still choose the standard variant.",
              id: "F5y8z7XWom",
            }),
          ),
        },
        predicates: { show: (e) => Boolean(e.supports1m) },
      },
    ),
    anthropicFamilyTier: (0, Ot.subfield)(
      Jt.z
        .preprocess((e) => (typeof e === "string" ? e.trim().toLowerCase() : e), Jt.z.enum(RK.ANTHROPIC_TIER_NAMES))
        .optional()
        .catch(void 0),
      {
        label: (0, Ut.msg)({ defaultMessage: "Tier alias", id: "y8qYHNqpeo" }),
        description: {
          short: (0, Ot.shortDescription)(
            (0, Ut.msg)({
              defaultMessage:
                "Which Claude tier this model stands in for. Pins the bare alias (e.g. \u2018opus\u2019) and, for opus/fable, the refusal fallback.",
              id: "AJudB3RUvn",
            }),
          ),
        },
      },
    ),
    isFamilyDefault: (0, Ot.subfield)(
      Jt.z
        .boolean()
        .optional()
        .catch(void 0),
      {
        label: (0, Ut.msg)({ defaultMessage: "Default for tier", id: "0yJnYjaXIK" }),
        predicates: { show: (e) => Boolean(e.anthropicFamilyTier) },
      },
    ),
  });
  var jK = (e) => {
    var t;
    return (
      ((t = e.inference) === null || t === void 0 ? void 0 : t.provider) !== void 0 &&
      !Wu.PROVIDER_CLI_FLAG[e.inference.provider]
    );
  };
  function df(e, t) {
    let n = t.inference;
    switch (n === null || n === void 0 ? void 0 : n.provider) {
      case "anthropic":
        return `https://${kS.ANTHROPIC_API_HOST}/v1/models`;
      case "gateway":
        return n.baseUrl ? `${n.baseUrl.replace(/\/+$/, "")}/v1/models` : "/v1/models";
      case "bedrock":
        return n.region
          ? (0, kS.bedrockControlPlaneHost)(n.region)
          : e.formatMessage({ defaultMessage: "the Bedrock control-plane", id: "+aUKGm2IHp" });
      default:
        return e.formatMessage({ defaultMessage: "the provider", id: "QL5gWJ5JBl" });
    }
  }
  PS.ModelsConfig = Jt.z.object({
    discoveryEnabled: (0, Ot.field)(Jt.z.boolean().optional(), {
      flatKey: "modelDiscoveryEnabled",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.8089.0" } },
      default: { displayOnly: true },
      title: (0, Ut.msg)({ defaultMessage: "Model discovery", id: "jU4z+3Uk7+" }),
      category: "connection",
      group: _a.MODELS_GROUP,
      order: -1,
      predicates: { show: (e) => (0, Wu.providerHasDiscovery)(e) },
      description: {
        short: (0, Ot.shortDescription)((e, t) =>
          jK(t)
            ? e.formatMessage(
                {
                  defaultMessage:
                    "Auto-populate the model picker from {url} at launch; when this key isn\u2019t set in the config, discovery is skipped if the model list below makes it unnecessary.",
                  id: "b/YbjgdGIX",
                },
                { url: df(e, t) },
              )
            : e.formatMessage(
                { defaultMessage: "Auto-populate the model picker from {url} at launch.", id: "xWiIy0pAlB" },
                { url: df(e, t) },
              ),
        ),
        long: (0, Ot.longDescription)(
          "Auto-populate the model picker from the provider's model-list endpoint at launch. For gateway and Anthropic providers, a config that doesn't set this key skips discovery automatically when the model list below already makes it unnecessary; the toggle here only sets it explicitly on or off. Turn off if the endpoint isn't reachable from your network, or to use a fixed list. When off, the model list below is required and must use full model IDs (aliases like sonnet/opus are resolved via discovery).",
          { docsUrl: `${_a.COWORK_3P_DOCS_BASE}/configuration#models` },
        ),
      },
    }),
    list: (0, Ot.field)(
      (0, Ot.annotate)(
        Jt.z
          .array(Jt.z.union([Jt.z.string().trim().min(1), PS.InferenceModel]))
          .min(1)
          .transform((e) =>
            e.map((t) => {
              let n = typeof t === "string" ? { name: t } : t,
                i = n.name.match(/^(.+?)\[1m\]$/i);
              return i ? { ...n, name: i[1].trim(), supports1m: true } : n;
            }),
          )
          .optional(),
        { redact: "hash", gatewayServable: false },
      ),
      {
        flatKey: "inferenceModels",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
        title: (0, Ut.msg)({ defaultMessage: "Model list", id: "hv0F38ESRM" }),
        groupOverride: "nameSubset",
        category: "connection",
        group: _a.MODELS_GROUP,
        order: 0,
        addLabel: (0, Ut.msg)({ defaultMessage: "Add model", id: "zUO6Ii5EAT" }),
        description: {
          short: (0, Ot.shortDescription)((e, t) => {
            var n;
            return ((n = t.models) === null || n === void 0 ? void 0 : n.discoveryEnabled) === false ||
              !(0, Wu.providerHasDiscovery)(t)
              ? e.formatMessage({
                  defaultMessage: "Models to show in the picker. First entry is the default.",
                  id: "i8fSuvZDK/",
                })
              : e.formatMessage({
                  defaultMessage: "Override the auto-discovered model list. First entry is the default.",
                  id: "G/QQvx0Tsd",
                });
          }),
          long: (0, Ot.longDescription)(
            'Use the **provider\'s exact model ID**: Vertex publisher IDs (`claude-sonnet-5`), Bedrock inference-profile IDs (`us.anthropic.claude-sonnet-5`), or Foundry deployment names. The first entry is the default. Entries may be plain ID strings or objects.\n\n**Gateway:** the `name` must be the exact ID your gateway\'s `/v1/models` endpoint returns. If you set `supports1m` on an alias (`sonnet`) but discovery returns the full ID, the variant won\'t appear.\n\n**Extended context** (`supports1m`) is a capability assertion you make about your deployment; only set it for models you\'ve confirmed support the 1M-token window:\n```json\n[{"name": "claude-sonnet-5", "supports1m": true}, "claude-opus-4-8"]\n```\n\n**Default to 1M context** (`prefer1m`) makes the 1M-context variant the default picker selection when this entry is the default model (the first entry); users can still switch to the standard variant, and an explicit user pick is always kept. No effect without `supports1m`. Under dynamic discovery (no explicit list), the equivalent flat key in the **Models** group applies instead:\n```json\n[{"name": "claude-opus-4-8", "supports1m": true, "prefer1m": true}]\n```\n\n**Display label** (`labelOverride`) is for IDs the picker can\'t derive a friendly name from (Bedrock ARNs, gateway routing aliases). Display-only; `name` is still what the app sends:\n```json\n[{"name": "arn:aws:bedrock:us-east-1:123:application-inference-profile/abc", "labelOverride": "Claude Opus (Prod)"}]\n```\n\n**Tier mapping** (`anthropicFamilyTier`) tells the app which Claude tier (`haiku`/`sonnet`/`opus`/`fable`/`mythos`) an entry stands in for, so bare tier aliases (e.g. in Code sessions) resolve to your model. `isFamilyDefault: true` picks the winner when several entries share a tier:\n```json\n[{"name": "us.anthropic.claude-opus-4-8", "anthropicFamilyTier": "opus"}]\n```',
            { docsUrl: `${_a.COWORK_3P_DOCS_BASE}/configuration#models` },
          ),
        },
        predicates: {
          required: (e) => {
            var t;
            return (
              !(0, _a.hasActiveBootstrap)(e) &&
              (((t = e.models) === null || t === void 0 ? void 0 : t.discoveryEnabled) === false ||
                !(0, Wu.providerHasDiscovery)(e))
            );
          },
          warn: (e, t, n) => {
            var i;
            let r = typeof e.name === "string" ? e.name.trim() : "";
            if (!r || !((i = t.inference) === null || i === void 0 ? void 0 : i.provider)) return null;
            let o = (0, AK.checkModel)(t.inference.provider, r);
            return o.ok
              ? null
              : n.formatMessage(
                  { defaultMessage: "Doesn\u2019t look like an Anthropic model: {reason}", id: "3RoY+bkhPc" },
                  { reason: o.reason },
                );
          },
        },
      },
    ),
  });
});

var Ju = S(function (CS) {
  Object.defineProperty(CS, "__esModule", { value: true });
  CS.PluginsConfig =
    CS.AllowedPluginMarketplace =
    CS.MARKETPLACE_CREDENTIAL_KINDS =
    CS.MARKETPLACE_INSTALL_PREFS =
      void 0;
  var Nt = st(),
    IS = ht(),
    Ke = Ze(),
    DK = Lt(),
    qe = pt(),
    ya = Wt();
  CS.MARKETPLACE_INSTALL_PREFS = ["available", "auto_install", "required"];
  CS.MARKETPLACE_CREDENTIAL_KINDS = ["anonymous", "userGit", "credentialHelper"];
  var TS = (e) => e.source === "github",
    AS = (e) => e.source === "git",
    RS = {
      ref: (0, Ke.subfield)(Nt.z.string().min(1).optional(), {
        label: (0, qe.msg)({ defaultMessage: "Ref", id: "Yz6RnPXq2r" }),
        placeholder: (0, qe.msg)({ defaultMessage: "40-char commit SHA", id: "kn7rB8OEmj" }),
        description: {
          short: (0, Ke.shortDescription)(
            (0, qe.msg)({
              defaultMessage: "Commit SHA, branch, or tag. Leave empty to track the default branch.",
              id: "pMktRefDs1",
            }),
          ),
        },
      }),
      path: (0, Ke.subfield)(Nt.z.string().min(1).optional(), {
        label: (0, qe.msg)({ defaultMessage: "Subpath", id: "Hy0W3kYc6J" }),
        description: {
          short: (0, Ke.shortDescription)(
            (0, qe.msg)({
              defaultMessage:
                "Folder within the repository that contains the marketplace, when it isn\u2019t at the root.",
              id: "pMktPathD1",
            }),
          ),
        },
      }),
      expectedName: (0, Ke.subfield)(
        Nt.z
          .string()
          .regex(
            /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/,
            "Expected name must start with a letter or number and may contain only letters, numbers, dots, underscores, and hyphens (128 characters max)",
          )
          .optional(),
        {
          label: (0, qe.msg)({ defaultMessage: "Expected name", id: "pMktExpNm1" }),
          description: {
            short: (0, Ke.shortDescription)(
              (0, qe.msg)({
                defaultMessage: "Rejects the marketplace if its manifest name differs.",
                id: "pMktExpNm3",
              }),
            ),
            long: (0, Ke.longDescription)(
              "When set, each clone is rejected if the repository's `manifest.name` differs, so an upstream rename cannot silently replace another configured marketplace.",
            ),
          },
        },
      ),
      installationPreference: (0, Ke.subfield)(Nt.z.enum(CS.MARKETPLACE_INSTALL_PREFS).optional(), {
        label: (0, qe.msg)({ defaultMessage: "Installation", id: "47svuNMHCd" }),
        description: {
          short: (0, Ke.shortDescription)(
            (0, qe.msg)({
              defaultMessage: "Whether users install plugins themselves or get them automatically.",
              id: "pMktInstD1",
            }),
          ),
          long: (0, Ke.longDescription)(
            "`available` (the default) lets users install from the Directory's Organization tab. `auto_install` installs automatically once per pinned commit; a plugin the user removes stays removed until the pin changes. `required` reinstalls on every sync, so it cannot stay removed.",
          ),
        },
      }),
      credentialKind: (0, Ke.subfield)(Nt.z.enum(CS.MARKETPLACE_CREDENTIAL_KINDS).optional(), {
        label: (0, qe.msg)({ defaultMessage: "Auth", id: "JUCpMnAOZ/" }),
        description: {
          short: (0, Ke.shortDescription)(
            (0, qe.msg)({
              defaultMessage:
                "How clones authenticate: anonymously, with the user\u2019s git credentials, or via a helper executable.",
              id: "pMktAuthD1",
            }),
          ),
        },
      }),
      credentialHelper: (0, Ke.subfield)((0, Ke.annotate)(Nt.z.string().min(1).optional(), { redact: "drop" }), {
        label: (0, qe.msg)({ defaultMessage: "Credential helper", id: "9bQZ2JN+mX" }),
        remotePolicy: { requiresUserConsent: true },
        description: {
          short: (0, Ke.shortDescription)(
            (0, qe.msg)({
              defaultMessage: "Executable that prints an access token for this repository.",
              id: "pMktHlprD1",
            }),
          ),
        },
        predicates: { show: (e) => e.credentialKind === "credentialHelper" },
      }),
    },
    jS = {
      label: (0, qe.msg)({ defaultMessage: "Source", id: "cc9hc4+0K4" }),
      optionLabels: {
        github: (0, qe.msg)({ defaultMessage: "GitHub", id: "SYEyDpPjNk" }),
        git: (0, qe.msg)({ defaultMessage: "Git URL", id: "TpLDdW3nvS" }),
      },
      predicates: { required: () => true },
    };
  CS.AllowedPluginMarketplace = Nt.z
    .discriminatedUnion("source", [
      Nt.z.object({
        source: (0, Ke.subfield)(Nt.z.literal("github"), jS),
        repo: (0, Ke.subfield)(
          Nt.z
            .string()
            .regex(/^[^\s/]+\/[^\s/]+$/, "Repository must be in the form owner/repo, e.g. anthropics/skills")
            .transform((e) => e.toLowerCase()),
          {
            label: (0, qe.msg)({ defaultMessage: "Repository", id: "ZHK3DVhcxt" }),
            isPrimaryKey: true,
            placeholder: (0, qe.msg)({ defaultMessage: "owner/repo", id: "3pZ8Ut7zIL" }),
            predicates: { show: TS, required: TS },
          },
        ),
        ...RS,
      }),
      Nt.z.object({
        source: (0, Ke.subfield)(Nt.z.literal("git"), jS),
        url: (0, Ke.subfield)((0, ya.urlSchema)({ allowLoopbackHttp: true }), {
          label: (0, qe.msg)({ defaultMessage: "URL", id: "5M+YdqOWGS" }),
          predicates: { show: AS, required: AS },
        }),
        ...RS,
      }),
    ])
    .refine(
      (e) => {
        var t, n;
        return (
          ((t = e.installationPreference) !== null && t !== void 0 ? t : "available") === "available" ||
          /^[0-9a-f]{40}$/i.test((n = e.ref) !== null && n !== void 0 ? n : "")
        );
      },
      {
        message: "Ref must be a full 40-character commit SHA when Installation is auto_install or required",
        path: ["ref"],
      },
    )
    .refine(
      (e) => {
        var t;
        return (
          (((t = e.credentialKind) !== null && t !== void 0 ? t : "anonymous") === "credentialHelper") ===
          (e.credentialHelper !== void 0)
        );
      },
      {
        message: "Credential helper is required when Auth is credentialHelper, and must be empty otherwise",
        path: ["credentialHelper"],
      },
    );
  CS.PluginsConfig = Nt.z.object({
    remoteUrl: (0, Ke.field)((0, Ke.annotate)((0, ya.urlSchema)().optional(), { redact: "hostname" }), {
      flatKey: "organizationPluginsUrl",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" }, visibility: "public-undocumented" },
      remotePolicy: { rejectLoopback: true, originPinned: { carries: "local-credential" } },
      title: (0, qe.msg)({ defaultMessage: "Organization plugins endpoint", id: "OrgPluginsUrl" }),
      egressRequirements: (e, t) => {
        var n;
        if (((n = t.bootstrap) === null || n === void 0 ? void 0 : n.enabled) === false) return [];
        let i = (0, IS.safeHostname)(e);
        return i ? [i] : [];
      },
      egressRequirementsLabel: (0, qe.msg)({ defaultMessage: "Organization plugins index", id: "OrgPluginsUrlEgress" }),
      category: "plugins",
      predicates: {
        show: (e) => {
          var t;
          return ((t = e.plugins) === null || t === void 0 ? void 0 : t.remoteUrl) !== void 0;
        },
      },
      description: {
        short: (0, Ke.shortDescription)(
          (0, qe.msg)({
            defaultMessage: "Typically supplied by your bootstrap server. Ignored when bootstrap is disabled.",
            id: "0PDitvSoS4",
          }),
        ),
      },
    }),
    settings: (0, Ke.field)((0, Ke.annotate)(ya.OrgPluginSettings.optional(), { redact: "keep" }), {
      flatKey: "orgPluginSettings",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.8089.0" } },
      title: (0, qe.msg)({ defaultMessage: "Organization plugin settings", id: "hD0T/0cTEY" }),
      failClosedValue: ya.ORG_PLUGIN_SETTINGS_PARSE_FAILED,
      checkDropped: ya.checkOrgPluginSettingsForDrops,
      category: "plugins",
      customRenderer: "orgPluginSettings",
      description: {
        short: (0, Ke.shortDescription)(
          (0, qe.msg)({ defaultMessage: "Admin policy applied to plugin-delivered MCP servers.", id: "MW4a5sB6yS" }),
        ),
        long: (0, Ke.longDescription)(
          'Applies `toolPolicy` locks to MCP servers that arrive via the org-plugins directory, keyed by server name. Either shape is accepted; when hand-authoring a profile, use the legacy record shape until your fleet floor parses the canonical array form:\n```json\n{"mcpServers": {"internal-search": {"toolPolicy": {"delete_document": "blocked"}}}}\n```\n\nIf a Managed MCP servers entry and an org-plugin server share a name, the Managed MCP servers entry wins and its `toolPolicy` (if any) applies; the entry here for that name is ignored.',
          { docsUrl: `${DK.COWORK_3P_DOCS_BASE}/configuration#orgpluginsettings` },
        ),
      },
    }),
    marketplaces: (0, Ke.field)(
      (0, Ke.annotate)(Nt.z.array(CS.AllowedPluginMarketplace).optional(), { redact: "presence" }),
      {
        flatKey: "allowedPluginMarketplaces",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.17377.1" } },
        betaFeatureKey: "pluginMarketplaces",
        remotePolicy: { marketplaceUrlHygiene: true },
        title: (0, qe.msg)({ defaultMessage: "Plugin marketplaces", id: "SbDWhfly4c" }),
        description: {
          short: (0, Ke.shortDescription)(
            (0, qe.msg)({
              defaultMessage:
                "Git repositories to surface as plugin marketplaces in the Directory\u2019s Organization tab. The app re-clones each periodically.",
              id: "osT32ayMX/",
            }),
          ),
        },
        failClosedValue: [],
        egressRequirements: (e) =>
          Array.isArray(e)
            ? e.map((t) => (t.source === "github" ? "github.com" : (0, IS.safeHostname)(t.url))).filter((t) => !!t)
            : [],
        egressRequirementsLabel: (0, qe.msg)({ defaultMessage: "Plugin marketplaces", id: "SbDWhfly4c" }),
        category: "plugins",
        group: (0, qe.msg)({ defaultMessage: "Plugin marketplaces", id: "SbDWhfly4c" }),
        addLabel: (0, qe.msg)({ defaultMessage: "Add marketplace", id: "u1Y1OE1uGp" }),
        presets: [
          { label: "GitHub repo", item: { source: "github", repo: "" } },
          { label: "Git URL", item: { source: "git", url: "" } },
        ],
      },
    ),
  });
});

var pf = S(function (US) {
  Object.defineProperty(US, "__esModule", { value: true });
  US.TelemetryConfig = void 0;
  var ba = st(),
    Yt = Ze(),
    LS = Lt(),
    sr = pt(),
    Yu = Si();
  US.TelemetryConfig = ba.z.object({
    orgUuid: (0, Yt.field)((0, Yt.annotate)(ba.z.string().optional(), { redact: "keep" }), {
      flatKey: "deploymentOrganizationUuid",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      title: (0, sr.msg)({ defaultMessage: "Organization UUID", id: "EATQrlttOw" }),
      category: "telemetry",
      group: Yu.ANTHROPIC_TELEMETRY_GROUP,
      order: -1,
      placeholder: (0, sr.msg)({ defaultMessage: "00000000-0000-0000-0000-000000000000", id: "oT3AdLMVZK" }),
      description: {
        short: (0, Yt.shortDescription)(
          (0, sr.msg)({
            defaultMessage:
              "A UUID you generate. Tags telemetry so Anthropic support can locate your fleet\u2019s events, and namespaces each user\u2019s local data. Not used for auth.",
            id: "gvBRfDvKmN",
          }),
        ),
        long: (0, Yt.longDescription)(
          "If unset, a shared placeholder UUID is used: telemetry can\u2019t be distinguished from other unconfigured deployments, and local data is stored under the placeholder. **Changing this value orphans data** stored under the previous value (sessions, skills, plugins).",
        ),
      },
    }),
    disableEssential: (0, Yt.field)(ba.z.boolean().optional(), {
      flatKey: "disableEssentialTelemetry",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      remotePolicy: { default: true },
      title: (0, sr.msg)({ defaultMessage: "Block essential telemetry", id: "rdKIIOydC8" }),
      default: false,
      category: "telemetry",
      group: Yu.ANTHROPIC_TELEMETRY_GROUP,
      order: 0,
      description: {
        short: (0, Yt.shortDescription)(
          (0, sr.msg)({ defaultMessage: "Crash and performance reports to Anthropic.", id: "EGOuVJosgc" }),
        ),
        long: (0, Yt.longDescription)(
          `"Essential" means the signals Anthropic needs to keep your deployment working: **crash stacks**, **startup failure reasons**, and **version/OS metadata**. No prompts, completions, file contents, or identifiers beyond a random install ID.

**What you lose when this is on:** when a Cowork build hits a bug that only reproduces on your OS version or locale, Anthropic can't see it unless a user manually reports. Fixes ship slower.

**Why this is discouraged, not blocked:** some air-gapped environments require zero outbound telemetry as a matter of policy. The switch exists for them. If you don't have that constraint, leave it off.`,
          { docsUrl: `${LS.COWORK_3P_DOCS_BASE}/telemetry#essential-telemetry` },
        ),
      },
      predicates: {
        warn: (e) =>
          e === true
            ? (0, sr.msg)({
                defaultMessage:
                  "Crash and error reports are how we diagnose failures specific to your inference setup. Support turnaround will be slower without them.",
                id: "ek/rdG0G9V",
              })
            : null,
      },
    }),
    disableNonessential: (0, Yt.field)(ba.z.boolean().optional(), {
      flatKey: "disableNonessentialTelemetry",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      remotePolicy: { default: true },
      title: (0, sr.msg)({ defaultMessage: "Block nonessential telemetry", id: "oo4Av05fBn" }),
      default: false,
      category: "telemetry",
      group: Yu.ANTHROPIC_TELEMETRY_GROUP,
      order: 1,
      description: {
        short: (0, Yt.shortDescription)(
          (0, sr.msg)({
            defaultMessage: "Product-usage analytics and diagnostic-report uploads. No message content.",
            id: "0X/lTj2Hvv",
          }),
        ),
        long: (0, Yt.longDescription)(
          '"Nonessential" covers two things: **product-usage analytics** (which features get used, navigation patterns; no prompts or completions) and the **Send** action in Help \u2192 Generate Diagnostic Report. Turning this on stops both.\n\nDestination for both: `claude.ai`. Already listed under Egress Requirements \u2192 Nonessential telemetry.',
          { docsUrl: `${LS.COWORK_3P_DOCS_BASE}/telemetry#non-essential-telemetry` },
        ),
      },
      predicates: {
        warn: (e) =>
          e === true
            ? (0, sr.msg)({
                defaultMessage:
                  "Usage analytics help us prioritize improvements for third-party inference. Diagnostic-report uploads will also be blocked. No message content is included in either.",
                id: "XtXm3euW3d",
              })
            : null,
      },
    }),
    disableNonessentialServices: (0, Yt.field)(ba.z.boolean().optional(), {
      flatKey: "disableNonessentialServices",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      title: (0, sr.msg)({ defaultMessage: "Block nonessential services", id: "HA2UIzGsaT" }),
      default: false,
      category: "telemetry",
      group: Yu.ANTHROPIC_TELEMETRY_GROUP,
      order: 2,
      description: {
        short: (0, Yt.shortDescription)(
          (0, sr.msg)({
            defaultMessage:
              "Connector favicons, the connector directory (MCP registry) lookup, and the artifact-preview and MCP Apps widget iframe origins. Artifacts will not render.",
            id: "WYeOrDqSJT",
          }),
        ),
        long: (0,
        Yt.longDescription)(`"Nonessential services" covers four outbound fetches the app runs without: **connector favicons** (the icon proxy), the **connector directory** lookup (the Anthropic MCP registry), the **artifact-preview** iframe origin, and the **MCP Apps widget** iframe origin (\`*.claudemcpcontent.com\`). Turning this on blocks all four.

**What you lose when this is on:** connectors show without icons, the connector directory can't be fetched, artifacts do not render in conversations, and connectors that return MCP Apps show the text tool result instead of the widget.

Destinations are listed under Egress Requirements \u2192 Nonessential services.`),
      },
      predicates: {
        warn: (e) =>
          e === true
            ? (0, sr.msg)({
                defaultMessage:
                  "This disables connector icons, the connector directory lookup, artifact previews, and MCP Apps widgets. Artifacts will not render in conversations, and connectors that return MCP Apps show the text tool result instead of the widget.",
                id: "RITPevvR6h",
              })
            : null,
      },
    }),
  });
});

var mf = S(function (FS) {
  Object.defineProperty(FS, "__esModule", { value: true });
  FS.MANAGED_MCP_PRESETS = void 0;
  FS.isAnthropicM365ConnectorUrl = ZS;
  FS.isAnthropicM365Connector = zK;
  var xK = "07c030f6-5743-41b7-ba00-0a6e85f37c17",
    MK = [".claude.com", ".fedstart.com"];
  function ZS(e) {
    if (!e) return false;
    if (!MK.some((t) => e.hostname.endsWith(t))) return false;
    return e.hostname.startsWith("microsoft365.mcp.") || e.pathname.includes("/m365/");
  }
  function zK(e) {
    if (!(e === null || e === void 0 ? void 0 : e.url) || e.custom_oauth_client_id) return false;
    try {
      return ZS(new URL(e.url));
    } catch (t) {
      return false;
    }
  }
  FS.MANAGED_MCP_PRESETS = [
    {
      label: "Microsoft 365",
      item: {
        name: "m365",
        url: "https://microsoft365.mcp.claude.com/mcp",
        transport: "http",
        oauth: { scope: `api://${xK}/access_as_user offline_access` },
      },
    },
    {
      label: "Box",
      item: {
        name: "box",
        url: "https://mcp.box.com",
        transport: "http",
        oauth: { authorizationServer: ["https://api.box.com"] },
      },
    },
    { label: "Microsoft 365", kind: "builtin", item: { name: "Microsoft 365", server: "microsoft365" } },
    { label: "Web search", kind: "builtin", item: { name: "Web search", server: "websearch", provider: "brave" } },
    {
      label: "GitHub",
      kind: "builtin",
      betaFeatureKey: "githubLocalConnector",
      item: { name: "GitHub", server: "github" },
    },
  ];
});

var yf = S(function (qS) {
  Object.defineProperty(qS, "__esModule", { value: true });
  qS.McpConfig = void 0;
  qS.isMcpPersistentAlwaysAllowEnabled = FK;
  var gf = st(),
    hf = ht(),
    Cn = Ze(),
    KS = Lt(),
    Jn = pt(),
    NK = mf(),
    ao = Wt(),
    _f = Si();
  function ZK(e, t) {
    var n;
    let i = typeof t.url === "string" ? t.url.trim() : "",
      r = t.headers && typeof t.headers === "object" ? t.headers : void 0,
      o = [],
      s;
    try {
      s = i ? new URL(i) : void 0;
    } catch (c) {}
    if ((s === null || s === void 0 ? void 0 : s.protocol) === "http:") {
      let c = s.hostname;
      if (c !== "localhost" && c !== "127.0.0.1")
        o.push(
          e.formatMessage({
            defaultMessage: "Endpoint is plain HTTP; auth credentials travel in cleartext.",
            id: "sqfi+II5M9",
          }),
        );
    }
    let u = r
      ? (n = Object.entries(r).find(([c]) => c.toLowerCase() === "authorization")) === null || n === void 0
        ? void 0
        : n[1]
      : void 0;
    if (typeof u === "string" && /^Bearer\s+\S{12,}$/i.test(u))
      o.push(
        e.formatMessage({
          defaultMessage: "Shared bearer token: every org member authenticates as the same identity.",
          id: "y4dl3eyfcO",
        }),
      );
    return o.length > 0 ? o.join(" ") : null;
  }
  qS.McpConfig = gf.z.object({
    managedServers: (0, Cn.field)((0, Cn.annotate)(ao.ManagedMcpServers.optional(), { redact: "presence" }), {
      flatKey: "managedMcpServers",
      groupOverride: "nameSubset",
      support: {
        enabled: [
          { scopes: ["3p"], availableInVersion: "1.2581.0" },
          { scopes: ["1p"], availableInVersion: "1.24012.11" },
        ],
      },
      remotePolicy: { mcpUrlHygiene: true },
      title: (0, Jn.msg)({ defaultMessage: "Managed MCP servers", id: "DC+lIM7C8k" }),
      checkDropped: ao.checkManagedMcpServersForDrops,
      failClosedValue: [],
      egressRequirements: (e) =>
        Array.isArray(e)
          ? e
              .flatMap((t) => {
                var n;
                if ((0, ao.isBuiltinMcpEntry)(t)) return [...(0, ao.hostsForBuiltinMcpEntry)(t)];
                if (t.transport === "stdio") return [];
                let i = [(0, hf.safeHostname)(t.url)];
                if (((n = t.oauth) === null || n === void 0 ? void 0 : n.mode) === "byo") {
                  let r = (0, ao.resolveByoAsSelection)(t.oauth);
                  if (r.via === "tenant") i.push("login.microsoftonline.com");
                  i.push(...(0, ao.byoAsSelectionUrls)(r).map(hf.safeHostname));
                }
                return i;
              })
              .filter((t) => !!t)
          : [],
      category: "connectors",
      group: _f.MCP_SERVERS_GROUP,
      order: 0,
      addLabel: (0, Jn.msg)({ defaultMessage: "Add server", id: "pOeEMxHCXp" }),
      customRenderer: "mcpProbe",
      description: {
        short: (0, Cn.shortDescription)(
          (0, Jn.msg)({
            defaultMessage:
              "Org-pushed MCP servers: remote (HTTP/SSE) or local (stdio command). May embed bearer tokens.",
            id: "wG2dpZSzTk",
          }),
        ),
        long: (0, Cn.longDescription)(
          'For OAuth-authenticated entries, the app builds the redirect URI as `http://<callbackHost>:<callbackPort>/callback`; register that exact value with the OAuth provider. Tokens refresh automatically during a session, so users aren\'t interrupted when the initial access token expires.\n\n`toolPolicy` locks the per-tool approval state, keyed by tool name. Keys may contain `*` wildcards (`"read_*"` matches every tool whose name starts with `read_`; matching is anchored and `*` is the only wildcard, identical to Claude Code permission-rule globs). An exact-name key wins over matching wildcard keys, with two exceptions in the stricter direction: in Code sessions, forwarded `blocked`/`ask` wildcard rules take precedence over a less strict exact key, and in chat approval flows and always-allow persistence a wildcard `ask` key keeps every matching tool behind a per-call prompt (no persistent always-allow), and a wildcard `ask-session` key likewise keeps every matching tool on the ask-session clamp, even when a more permissive exact-name key matches \u2014 for direct (imperative) tool invocations such as artifact or widget tool calls, the exact-name key still decides. When several wildcard keys match a tool, the strictest applies (blocked > ask > ask-session > allow). `"blocked"` removes the tool from the session and labels it admin-blocked. `"ask"` requires approval on every call (Allow once / Deny only; no persistent always-allow). `"ask-session"` requires approval on the tool\'s first use per session; a session-scoped **Allow for this task** covers the rest of that session, a new session re-prompts, and persistent always-allow stays unavailable. Scheduled tasks do not honor ask-session grants: every run prompts and blocks until attended, exactly as `ask` (use `allow` for tools that must run unattended). `"allow"` pre-approves. Tools **not listed** follow the user\'s choice: the prompt offers a persistent Always allow, except for tools that can modify data, which instead show a session-scoped **Allow for this task** alongside **Allow for all tasks** with a malicious-instruction warning. In Code sessions, `blocked`/`ask`/`ask-session` are forwarded as Claude Code permission rules (`ask-session` as an ask rule, with the once-per-session behavior applied by the desktop); `allow` is not.\n\nFor the bundled Microsoft 365 connector, the send tools (`outlook_send_mail`, `outlook_send_draft`, `outlook_forward_mail`, `outlook_create_event`, `outlook_update_event`, `teams_send_chat_message`, `teams_send_channel_message`, `teams_reply_channel_message`) cannot be loosened below `ask` \u2014 an `allow` setting resolves to `ask`.',
          { docsUrl: `${KS.COWORK_3P_DOCS_BASE}/configuration#managedmcpservers` },
        ),
      },
      presets: NK.MANAGED_MCP_PRESETS,
      predicates: { warn: (e, t, n) => ZK(n, e) },
    }),
    persistentAlwaysAllowEnabled: (0, Cn.field)(gf.z.boolean().optional(), {
      flatKey: "mcpPersistentAlwaysAllowEnabled",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.24012.9" } },
      groupOverride: "verbatim",
      title: (0, Jn.msg)({ defaultMessage: "Allow persistent tool approvals", id: "OmQqCV/O12" }),
      default: true,
      failClosedValue: false,
      category: "connectors",
      group: _f.MCP_SERVERS_GROUP,
      order: 1,
      description: {
        short: (0, Cn.shortDescription)(
          (0, Jn.msg)({
            defaultMessage:
              "Offer the persistent \u201CAlways allow\u201D approval options for MCP tools. Disable to keep tool approvals per-call or session-scoped only.",
            id: "GXMHY2UvCF",
          }),
        ),
        long: (0, Cn.longDescription)(
          "When enabled (the default), approval prompts for tools without a `toolPolicy` entry offer a persistent grant \u2014 **Always allow**, or **Allow for all tasks** for tools that can modify data \u2014 the Tool permissions picker in Connector settings lets users pre-approve tools, and those grants persist across sessions with no expiry.\n\nWhen disabled, the persistent options are hidden from approval prompts and from the Connector settings picker, previously stored persistent grants stop being honored, and scheduled-task runs no longer record or replay cross-run tool approvals. Session-scoped approvals are unchanged: users can still approve each call, and tools that can modify data keep the session-scoped **Allow for this task** option.\n\nA per-tool `toolPolicy` entry on `managedMcpServers` always takes precedence over this key: `blocked`, `ask`, `ask-session`, and `allow` behave exactly as documented there whether this key is enabled or not.\n\nThis key governs the chat and Cowork surfaces. Code sessions use a separate permission path this key does not cover \u2014 govern Code tool approvals with per-tool `toolPolicy` entries, whose `blocked` and `ask` values are forwarded there.",
          { docsUrl: `${KS.COWORK_3P_DOCS_BASE}/configuration#mcppersistentalwaysallowenabled` },
        ),
      },
    }),
    localStdioEnabled: (0, Cn.field)(gf.z.boolean().optional(), {
      flatKey: "isLocalDevMcpEnabled",
      support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } },
      title: (0, Jn.msg)({ defaultMessage: "Allow user-added MCP servers", id: "1QKV7FS8FM" }),
      default: true,
      groupOverride: "verbatim",
      egressRequirements: (e) => (e === false ? [] : hf.PYTHON_EXTENSION_RUNTIME_HOSTS),
      egressRequirementsLabel: (0, Jn.msg)({ defaultMessage: "User-added MCP (Python runtime)", id: "O0zxaLsWs9" }),
      category: "connectors",
      group: _f.MCP_SERVERS_GROUP,
      order: 2,
      description: {
        short: (0, Cn.shortDescription)(
          (0, Jn.msg)({
            defaultMessage:
              "Local stdio servers added via the Developer settings. Remote servers come from the managed list above or organization plugins.",
            id: "1NMgra1xGv",
          }),
        ),
      },
    }),
  });
  function FK(e) {
    var t;
    return ((t = e.mcp) === null || t === void 0 ? void 0 : t.persistentAlwaysAllowEnabled) !== false;
  }
});

var ec = S(function (XS) {
  Object.defineProperty(XS, "__esModule", { value: true });
  XS.WorkspaceConfig = XS.BUILTIN_ASK_POLICY_VALUES = XS.BUILTIN_TOOL_NAMES = XS.AllowedWorkspaceFolder = void 0;
  XS.checkBuiltinToolPolicyForDrops = GS;
  XS.checkEgressHostsForDrops = WS;
  XS.resolveDisabledBuiltinTools = vf;
  XS.isChatTabEnabled = HK;
  XS.isSkillCreationEnabled = VK;
  XS.isChatAdvancedFileAnalysisEnabled = GK;
  XS.resolveBuiltinAskTools = WK;
  var Ve = st(),
    Xu = ht(),
    fe = Ze(),
    ki = Lt(),
    be = pt(),
    VS = On(),
    KK = Wt(),
    Dn = Si();
  XS.AllowedWorkspaceFolder = Ve.z.object({
    path: (0, fe.subfield)((0, fe.annotate)(Ve.z.string().min(1), { pathKind: "folder" }), {
      label: (0, be.msg)({ defaultMessage: "Path", id: "P6LP7JosNq" }),
      isPrimaryKey: true,
      mono: true,
      placeholder: (0, be.msg)({ defaultMessage: "~/Documents/work", id: "/dk65J5QxC" }),
    }),
    isDefaultSelected: (0, fe.subfield)(Ve.z.boolean().optional(), {
      label: (0, be.msg)({ defaultMessage: "Pre-select on new task", id: "Dk3pnI8vXq" }),
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage:
              "Shows as a folder chip on the new-task page and skips the trust prompt. Users can remove it.",
            id: "P3a+4xY9Hb",
          }),
        ),
      },
    }),
    mode: (0, fe.subfield)(Ve.z.enum(["rw", "ro"]).optional(), {
      label: (0, be.msg)({ defaultMessage: "Access mode", id: "Dt4A+S9duA" }),
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage:
              "Read-only folders can be viewed and searched but not modified in Cowork. In Code, applies to file tools only; Bash and SSH do not yet enforce read-only.",
            id: "XMxsnX6Se9",
          }),
        ),
        long: (0, fe.longDescription)(
          `Read-only folders can be viewed and searched but not modified in Cowork (by Claude or via the UI). Bash runs in Cowork's isolated workspace where the folder is mounted read-only at the OS level; file-tool writes (Edit, Write) are blocked in-process by Claude Desktop.

In Code, read-only applies to Claude file tools only; Bash in Code sessions and SSH sessions do **not** yet enforce read-only mode. ` +
            "A read-only folder that contains Claude's own data directory (for example the home folder) is enforced in Cowork only \u2014 configure narrower folders for Code coverage.",
        ),
      },
    }),
  });
  XS.BUILTIN_TOOL_NAMES = [
    "Bash",
    "Read",
    "Write",
    "Edit",
    "Glob",
    "Grep",
    "NotebookEdit",
    "WebFetch",
    "WebSearch",
    "Task",
    "TodoWrite",
    "TaskCreate",
    "TaskUpdate",
    "TaskGet",
    "TaskList",
    "TaskStop",
    "Skill",
    "REPL",
    "JavaScript",
    "AskUserQuestion",
    "ToolSearch",
    "SendUserMessage",
  ];
  var bf = new Set(XS.BUILTIN_TOOL_NAMES),
    qK = Object.fromEntries(XS.BUILTIN_TOOL_NAMES.map((e) => [e, { id: `builtinTool.${e}`, defaultMessage: e }]));
  XS.BUILTIN_ASK_POLICY_VALUES = ["allow", "ask"];
  function GS(e, t) {
    if (!e || typeof e !== "object") return;
    for (let [n, i] of Object.entries(e))
      if (!bf.has(n)) t(`builtinToolPolicy["${n}"] dropped: unknown built-in tool`, "drop");
      else if (i === "blocked") t(`builtinToolPolicy["${n}"]: "blocked" ignored. Use disabledBuiltinTools`, "drop");
      else if (i === "ask-session")
        t(`builtinToolPolicy["${n}"]: "ask-session" is not supported for built-in tools; treated as "ask"`, "clamp");
      else if (i !== "allow" && i !== "ask")
        t(`builtinToolPolicy["${n}"] dropped: unrecognized policy "${String(i)}"`, "drop");
  }
  function WS(e, t) {
    if (!Array.isArray(e)) return;
    for (let n of e)
      if (typeof n !== "string" || (0, Xu.parseEgressHostEntry)(n) === null)
        t(
          `coworkEgressAllowedHosts entry ${JSON.stringify(n)} dropped: must be \`*\`, \`localhost\`, \`host[:port]\`, or \`*.host[:port]\` (port 1-65535; no port on bare \`*\`; no scheme, path, or IPv6 literal)`,
        );
  }
  XS.WorkspaceConfig = Ve.z.object({
    disabledBuiltinTools: (0, fe.field)(
      Ve.z
        .preprocess((e) => (Array.isArray(e) ? e.filter((t) => typeof t === "string") : e), Ve.z.array(Ve.z.string()))
        .optional(),
      {
        flatKey: "disabledBuiltinTools",
        optionLabels: qK,
        groupOverride: "verbatim",
        support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } },
        title: (0, be.msg)({ defaultMessage: "Disabled built-in tools", id: "iGPHC9Tm20" }),
        category: "sandbox",
        group: Dn.GENERAL_RESTRICTIONS_GROUP,
        order: 3,
        description: {
          short: (0, fe.shortDescription)(
            (0, be.msg)({ defaultMessage: "Built-in tools removed from Cowork.", id: "1v9Ga0vYPM" }),
          ),
        },
        predicates: {
          locked: [
            {
              when: (e) => {
                var t;
                return (0, VS.isBedrockFamily)((t = e.inference) === null || t === void 0 ? void 0 : t.provider);
              },
              append: ["WebSearch"],
            },
          ],
        },
      },
    ),
    disableBundledSkills: (0, fe.field)(Ve.z.boolean().optional(), {
      flatKey: "disableBundledSkills",
      support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.15962.0" } },
      groupOverride: "verbatim",
      title: (0, be.msg)({ defaultMessage: "Disable bundled skills and workflows", id: "kpCOjtwfPF" }),
      category: "sandbox",
      group: Dn.GENERAL_RESTRICTIONS_GROUP,
      order: 6,
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage:
              "Disables Claude Code\u2019s bundled skills and workflows (deep-research and similar). Use where WebFetch/WebSearch aren\u2019t available.",
            id: "Q90IY9SGu1",
          }),
        ),
      },
    }),
    skillCreationEnabled: (0, fe.field)(Ve.z.boolean().optional(), {
      flatKey: "skillCreationEnabled",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.25927.0" } },
      groupOverride: "verbatim",
      title: (0, be.msg)({ defaultMessage: "Allow user-created skills", id: "y486fMBVj/" }),
      default: { displayOnly: true },
      failClosedValue: false,
      category: "sandbox",
      group: Dn.GENERAL_RESTRICTIONS_GROUP,
      order: 6.5,
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage:
              "Allow users to create and upload their own skills. When off, the creation and upload surfaces are hidden and the agent\u2019s skill-creation tools are disabled.",
            id: "Cpqtiix6lD",
          }),
        ),
        long: (0, fe.longDescription)(
          "When on (default), users can create new skills and upload skill files in the app. Set to `false` to block user skill creation: the skill-creation and upload surfaces are hidden (the `skill_creation` feature is served as blocked by the organization), and the agent's skill-creation tools (saving skills from a conversation, skill proposals) are not offered in sessions \u2014 the same effect as turning off the **User-created skills** organization setting available to claude.ai enterprise admins.\n\nThis is a feature-availability control enforced in the app's UI, not a data boundary: skills are files on the user's machine, and files already present there (or placed there outside the app) are not removed or blocked by this key. Skills themselves remain usable; organization-distributed plugins and bundled skills are unaffected (to disable bundled skills, use `disableBundledSkills`).",
          { docsUrl: `${ki.COWORK_3P_DOCS_BASE}/configuration#skillcreationenabled` },
        ),
      },
    }),
    builtinToolPolicy: (0, fe.field)(
      (0, fe.annotate)(
        Ve.z
          .preprocess(
            (e) =>
              e && typeof e === "object" && !Array.isArray(e)
                ? Object.fromEntries(
                    Object.entries(e)
                      .filter(([t, n]) => bf.has(t) && (n === "allow" || n === "ask" || n === "ask-session"))
                      .map(([t, n]) => (n === "ask-session" ? [t, "ask"] : [t, n])),
                  )
                : e,
            Ve.z.partialRecord(Ve.z.enum(XS.BUILTIN_TOOL_NAMES), Ve.z.enum(XS.BUILTIN_ASK_POLICY_VALUES)),
          )
          .optional(),
        { redact: "keep" },
      ),
      {
        flatKey: "builtinToolPolicy",
        support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.8089.0" } },
        title: (0, be.msg)({ defaultMessage: "Built-in tool policy", id: "hhKxQ3MtxT" }),
        failClosedValue: {},
        checkDropped: GS,
        category: "sandbox",
        group: Dn.GENERAL_RESTRICTIONS_GROUP,
        order: 4,
        addLabel: (0, be.msg)({ defaultMessage: "Add policy", id: "6TgDeF8iRs" }),
        description: {
          short: (0, fe.shortDescription)(
            (0, be.msg)({
              defaultMessage:
                "Per-tool approval policy for built-in tools. \u201Cask\u201D requires user approval before each call; \u201Callow\u201D is the default.",
              id: "R7m6lzXKYR",
            }),
          ),
          long: (0, fe.longDescription)(
            "`ask-session` applies to connector tool policies only \u2014 written here it is treated as `ask`. To remove a tool entirely, use **Disabled built-in tools** instead.",
          ),
        },
      },
    ),
    autoModeEnabled: (0, fe.field)(Ve.z.boolean().optional(), {
      flatKey: "autoModeEnabled",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } },
      title: (0, be.msg)({ defaultMessage: "Allow Auto mode", id: "0QsHlMb8HD" }),
      default: false,
      groupOverride: "verbatim",
      category: "sandbox",
      group: Dn.GENERAL_RESTRICTIONS_GROUP,
      order: 5,
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage:
              "Offer Auto mode in the Cowork and Code permission selectors. Claude decides which actions need approval.",
            id: "Aba2uTiXAG",
          }),
        ),
        long: (0, fe.longDescription)(
          `When enabled, users can select **Auto mode** (Code) / **Automatically approve** (Cowork). Claude runs a safety classifier on each action and only prompts for approval on actions it judges risky, instead of following the static per-tool policy.

Requires a model that supports the safety classifier \u2014 which models qualify depends on the deployment's provider and the app version. Models without support show the option greyed out. \`builtinToolPolicy\` and this key may both be set; Auto mode is a user-selectable option alongside the default policy, not a replacement for it.

In Code sessions, a separately deployed Claude Code [managed-settings](${ki.COWORK_3P_DOCS_BASE}/code#interaction-with-claude-code%E2%80%99s-own-managed-settings) file that sets \`disableAutoMode\` to \`"disable"\` overrides this key and keeps Auto mode hidden.`,
          { docsUrl: `${ki.COWORK_3P_DOCS_BASE}/configuration#automodeenabled` },
        ),
      },
    }),
    toolSearchEnabled: (0, fe.field)(Ve.z.boolean().optional(), {
      flatKey: "toolSearchEnabled",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.21459.0" } },
      title: (0, be.msg)({ defaultMessage: "Enable tool search", id: "3b6nGnLx6b" }),
      default: false,
      category: "sandbox",
      group: Dn.GENERAL_RESTRICTIONS_GROUP,
      order: 10,
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage:
              "Load MCP tool schemas on demand (tool search) instead of inlining every schema into context.",
            id: "jPPLehrZ3d",
          }),
        ),
        long: (0, fe.longDescription)(
          "When enabled, Cowork and Code sessions load MCP tool schemas on demand (\"tool search\"): only tool names are placed in context up front, and Claude fetches a tool's full schema the first time it needs it. Use this when many MCP tools are configured and their inlined schemas crowd out the context window (sessions that compact every turn or two). Equivalent to running terminal Claude Code with `ENABLE_TOOL_SEARCH=true` against the same endpoint.\n\n**Enabling this key causes sessions to send experimental `anthropic-beta` request headers, and the beta request fields that ride with them, to your inference endpoint** \u2014 tool search (`advanced-tool-use`, with `tool_reference` content blocks and deferred tool loading) and context management (a `context_management` request field on supported models) among them. Enable it only if your gateway forwards and accepts these; when it does not, requests fail with HTTP 400 on the beta header or fields. A practical preflight: run terminal Claude Code through the same gateway with `ENABLE_TOOL_SEARCH=true` \u2014 Claude Desktop then sends the same request surface, so if the terminal works, Desktop will too. **Do not enable this on Vertex-provider deployments** \u2014 Vertex rejects the tool-search beta header, and this key overrides the protection Claude Code applies to Vertex by default, turning working (inlined) MCP tools into failing requests.\n\nClaude Desktop otherwise suppresses **all** of Claude Code's experimental beta features on 3P deployments (it pins `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` into session environments, because strict gateways reject unrecognized beta headers and fields). Enabling this key lifts that suppression, so other experimental betas \u2014 for example, on gateway- and Foundry-backed deployments, `context_management` request fields on models that support them \u2014 are re-enabled as well. This matches the request surface terminal Claude Code presents through the same gateway by default. Leave unset to keep the conservative default.",
          { docsUrl: `${ki.COWORK_3P_DOCS_BASE}/configuration#tool-search` },
        ),
      },
      predicates: {
        warn: (e, t) => {
          var n;
          return e === true && ((n = t.inference) === null || n === void 0 ? void 0 : n.provider) === "vertex"
            ? (0, be.msg)({
                defaultMessage:
                  "Not supported on Vertex \u2014 enabling this will cause tool-search requests to fail instead of degrading. See the description above.",
                id: "BlstwxmSEI",
              })
            : null;
        },
      },
    }),
    allowedFolders: (0, fe.field)(
      (0, fe.annotate)(
        Ve.z
          .array(Ve.z.union([Ve.z.string().min(1), XS.AllowedWorkspaceFolder]))
          .transform((e) => e.map((t) => (typeof t === "string" ? { path: t } : t)))
          .optional(),
        { pathKind: "folder", hostedServable: false },
      ),
      {
        flatKey: "allowedWorkspaceFolders",
        support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } },
        title: (0, be.msg)({ defaultMessage: "Allowed workspace folders", id: "y3gym+4SMI" }),
        failClosedValue: [],
        category: "sandbox",
        group: Dn.GENERAL_RESTRICTIONS_GROUP,
        order: 2,
        addLabel: (0, be.msg)({ defaultMessage: "Add folder", id: "kjqTjJbwtK" }),
        description: {
          short: (0, fe.shortDescription)(
            (0, be.msg)({
              defaultMessage:
                "Folders where Claude may work. Applies to both Cowork and Code sessions. Leave unset for unrestricted access.",
              id: "vDcS6jXepg",
            }),
          ),
          long: (0, fe.longDescription)(
            'Paths can reference `~` and these environment variables, expanded per user: `%OneDrive%`, `%OneDriveCommercial%`, `%OneDriveConsumer%`, `%APPDATA%`, `%LOCALAPPDATA%`, `%USERNAME%`, `%XDG_DOCUMENTS_DIR%`. The set is fixed; an entry that references any other `%VAR%`, or one that is unset on the device, is ignored.\n\nEach folder is interpreted on the machine the session runs on. For a Code session on an SSH host, `~` means the remote user\'s home, an entry that references a `%VAR%` is ignored there (environment variables belong to the machine that defines them), and the session\'s working directory must fall inside one of the folders as they exist on that host. One list serves every machine: `["/Users", "~"]` governs `/Users` on a managed Mac and the signed-in user\'s home on a Linux host. A folder that names nothing real on a given machine simply allows nothing there.',
            { docsUrl: `${ki.COWORK_3P_DOCS_BASE}/configuration#sandbox-%26-workspace` },
          ),
        },
      },
    ),
    disableWslSessions: (0, fe.field)(Ve.z.boolean().optional(), {
      flatKey: "disableWslSessions",
      support: {
        enabled: { scopes: ["3p", "1p"], availableInVersion: "1.19367.0" },
        visibility: "public-undocumented",
      },
      appBehaviorOnly: true,
      title: (0, be.msg)({ defaultMessage: "Block WSL sessions", id: "DpHm4YbvWC" }),
      category: "sandbox",
      group: Dn.GENERAL_RESTRICTIONS_GROUP,
      order: 7,
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage:
              "Block Code sessions that run inside a WSL distro. Windows endpoint policy does not reach inside WSL.",
            id: "722/v6Am9J",
          }),
        ),
        long: (0, fe.longDescription)(
          "Sessions started inside a WSL distro run Claude Code where Windows host endpoint policy (this managed configuration, and Claude Code's own managed-settings.json) does not apply. On a device with any managed configuration present, WSL sessions are blocked unless this key is explicitly set to `false`. Set to `true` to block WSL sessions unconditionally; set to `false` to allow them on managed devices; leave unset to block whenever the device is managed.\n\nThis key is honored only when deployed through machine-scoped management \u2014 MDM on macOS, the HKLM policy hive on Windows, the root-owned `/etc` file on Linux \u2014 never via the in-app Setup panel or user-writable stores; in particular, an explicit `false` written to the user-writable HKCU hive is ignored (and its presence still marks the device as managed). Because the key is grouped with the other app-behavior keys, deploying it claims that whole group: the auto-update keys (`disableAutoUpdates`, `autoUpdaterEnforcementHours`, \u2026) are then resolved from the managed tier alone, and any local- or remote-tier values for them stop applying.",
        ),
      },
    }),
    allowedEgressHosts: (0, fe.field)(
      (0, fe.annotate)(
        Ve.z.preprocess(
          (e) =>
            Array.isArray(e) ? e.filter((t) => typeof t === "string" && (0, Xu.parseEgressHostEntry)(t) !== null) : e,
          Ve.z.array(Ve.z.string().min(1)).optional(),
        ),
        { glob: true },
      ),
      {
        checkDropped: WS,
        flatKey: "coworkEgressAllowedHosts",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
        title: (0, be.msg)({ defaultMessage: "Allowed egress hosts", id: "5oTa1gWQsk" }),
        egressRequirements: (e) => (!Array.isArray(e) ? [] : e.includes("*") ? Xu.DEPENDENCY_INSTALL_DOMAINS : e),
        egressRequirementsLabel: (0, be.msg)({
          defaultMessage: "Tool egress (Cowork tasks and Code sessions)",
          id: "hzwBI5sR1r",
        }),
        category: "sandbox",
        group: Dn.GENERAL_RESTRICTIONS_GROUP,
        order: 1,
        placeholder: (0, be.msg)({ defaultMessage: "*.corp.example.com", id: "UkBVDCUMyP" }),
        description: {
          short: (0, fe.shortDescription)(
            (0, be.msg)({
              defaultMessage:
                "Hostnames the agent\u2019s tools may reach from Cowork and Code sessions. Also surfaced under Egress Requirements.",
              id: "hOkbU+XfaP",
            }),
          ),
          long: (0, fe.longDescription)(
            `Applies to **both** Cowork and Code. In Cowork it governs the sandbox's web fetch, shell commands, and package installs. In Code sessions it is [translated into Claude Code's network sandbox allowlist](${ki.COWORK_3P_DOCS_BASE}/code#applied-as-managed-policy); a separately deployed Claude Code managed-settings file on the endpoint takes precedence by default.

Does **not** apply to Web Search, which runs server-side at your inference provider rather than from the sandbox.

Only affects **tool calls**. Inference and MCP traffic are covered by their own allowlists elsewhere. When unset, only the inference endpoint is reachable from the sandbox; the agent's package installs (pip/npm) and web fetches will fail with a 403.

Accepts exact hostnames (\`api.github.com\`), wildcards (\`*.corp.com\` matches subdomains at any depth \u2014 \`docs.corp.com\` and \`a.b.corp.com\` both match), and \`*\` to allow all. \`*.corp.com\` does not match \`corp.com\` itself; add both if you need the apex. IP addresses only match when listed exactly \u2014 wildcards never match IP addresses, so an unlisted IP destination is blocked. \`localhost\` and private-network addresses are blocked in the sandbox's web fetch regardless of this list; shell commands and package installs run inside a network sandbox that can only reach hosts on this list (plus your inference provider's endpoints). With \`*\`, the network sandbox is disabled and web fetch still blocks private addresses.

Any entry except bare \`*\` may carry a \`:port\` suffix (\`internal.corp.com:8443\`, \`*.corp.com:8443\`) restricting that entry to the named port; an entry with no port allows any port. A port on a wildcard applies to every matched subdomain. IPv6 literals are not supported. Entries outside this grammar are dropped individually, with a warning naming the entry in the app log; the remaining valid entries keep working. Port restrictions are enforced for the Cowork sandbox's web fetch today. The sandbox's shell and package-install egress enforces them once the app ships a VM image whose sandbox runtime supports ports; until then a port-scoped host is unreachable from shell (fails closed). Plugin CLIs additionally keep their own stricter in-VM filter and treat port-scoped entries as absent for now. In Code sessions, the Claude Code translation treats a port-restricted entry as its bare host (any port). The \`:port\` syntax requires the Claude Desktop release it first shipped in or newer \u2014 hold off deploying port-scoped entries until your whole fleet is on that build (note \`disableAutoUpdates\` pins builds); on older builds a port-scoped entry invalidates the sandbox's whole shell and package-install allowlist for the session (the older sandbox runtime rejects the entire list), and web fetch simply never matches it.

Hosts you add here also need to be open on your network firewall, on the listed ports. See **Egress Requirements** for the full allowlist.`,
            { docsUrl: `${ki.COWORK_3P_DOCS_BASE}/configuration#workspace-restrictions` },
          ),
        },
      },
    ),
    secureVmEnabled: (0, fe.field)(Ve.z.boolean().optional(), {
      flatKey: "secureVmFeaturesEnabled",
      support: { enabled: { scopes: ["1p"], availableInVersion: "1.2581.0" } },
      title: (0, be.msg)({ defaultMessage: "Secure VM features", id: "+AQagzW8cG" }),
      category: "sandbox",
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage: "Enable additional VM-level isolation for the Cowork sandbox.",
            id: "SecureVmFeaturesHint",
          }),
          { docsOnly: true },
        ),
      },
    }),
    hardwareBuddyEnabled: (0, fe.field)(Ve.z.boolean().optional(), {
      flatKey: "hardwareBuddyEnabled",
      support: { enabled: { scopes: ["1p"], availableInVersion: "1.18286.0" } },
      title: (0, be.msg)({ defaultMessage: "Allow Hardware Buddy devices", id: "HardwareBuddyEnabled" }),
      default: true,
      category: "connectors",
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage: "Allow pairing Hardware Buddy Bluetooth devices in Cowork.",
            id: "HardwareBuddyHint",
          }),
          { docsOnly: true },
        ),
      },
    }),
    requireFullVmSandbox: (0, fe.field)(Ve.z.boolean().optional(), {
      flatKey: "requireCoworkFullVmSandbox",
      support: {
        enabled: { scopes: ["1p"], availableInVersion: "1.2581.0" },
        deprecated: { scopes: ["3p"], availableInVersion: "1.2581.0" },
      },
      title: (0, be.msg)({ defaultMessage: "Require full VM sandbox", id: "wQRUBw9rk7" }),
      default: false,
      category: "sandbox",
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage:
              "Runs tools inside an isolated VM instead of the host. Stronger isolation; slower file access and no host-process tools.",
            id: "LVgbWJo83E",
          }),
        ),
      },
      predicates: {
        warn: (e) =>
          e === true
            ? (0, be.msg)({
                defaultMessage:
                  "The default host-native mode starts faster and works behind restricted networks. Shell commands run inside the VM; file tools run on the host with path-based access control. Enable this only if your security review requires the agent loop itself to run in the VM.",
                id: "05sWumUU1+",
              })
            : null,
      },
    }),
    endUserAttribution: (0, fe.field)(Ve.z.boolean().optional(), {
      flatKey: "endUserAttribution",
      legacyFlatKey: "enduserAttribution",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.24012.0" } },
      failClosedValue: false,
      default: { displayOnly: true },
      title: (0, be.msg)({ defaultMessage: "End-user attribution", id: "enduserAttrTtl" }),
      category: "appearance",
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage:
              "Show the signed-in user\u2019s identity-provider identity in the sidebar and account menu, and emit it as the OpenTelemetry enduser.id resource attribute.",
            id: "enduserAttrHnt",
          }),
        ),
        long: (0, fe.longDescription)(
          "When on (default), the app resolves the signed-in user's identity from the configured credential source (the identity provider claim, or the OS login name when no claim is available) and shows it in the sidebar footer, the account menu, and the Code session greeting. If an OpenTelemetry collector is configured, the same identity is also emitted as the `enduser.id` resource attribute on every span, metric, and log sent to your collector \u2014 unless you have set a static `enduser.id` under OpenTelemetry resource attributes, in which case your static value is kept and the runtime identity is not emitted. When off, no identity is shown in the app and no runtime `enduser.id` is emitted; a static `enduser.id` under OpenTelemetry resource attributes still passes through unchanged. This setting does not gate the `process.owner` resource attribute (the OS login name), which is standard OpenTelemetry process metadata and is always emitted \u2014 set a static `process.owner` under OpenTelemetry resource attributes to override it. Applies to both Cowork tasks and Code sessions.",
        ),
      },
    }),
    userContentRendererUrl: (0, fe.field)((0, KK.urlSchema)({ rejectLoopback: true }).optional(), {
      flatKey: "userContentRendererUrl",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.24012.0" } },
      remotePolicy: { rejectLoopback: true },
      title: (0, be.msg)({ defaultMessage: "Artifact preview iframe origin", id: "ucrUrlTitle" }),
      category: "connection",
      egressRequirements: (e) => [(0, Xu.safeHostname)(e)].filter((t) => !!t),
      egressRequirementsLabel: (0, be.msg)({ defaultMessage: "Artifact preview iframe", id: "ucrUrlEgrs" }),
      description: {
        short: (0, fe.shortDescription)(
          (0, be.msg)({
            defaultMessage:
              "HTTPS origin of the user-content-renderer deployment used for artifact and file previews. Defaults to the commercial host when unset.",
            id: "ucrUrlHint",
          }),
        ),
      },
    }),
  });
  var JS = { Bash: "mcp__workspace__bash", WebFetch: "mcp__workspace__web_fetch" };
  function YS(e) {
    for (let [t, n] of Object.entries(JS)) if (e.has(t)) e.add(n);
    return [...e];
  }
  function vf(e) {
    var t, n, i;
    let r = new Set(
      (n = (t = e.workspace) === null || t === void 0 ? void 0 : t.disabledBuiltinTools) !== null && n !== void 0
        ? n
        : [],
    );
    if ((0, VS.isBedrockFamily)((i = e.inference) === null || i === void 0 ? void 0 : i.provider)) r.add("WebSearch");
    return YS(r);
  }
  function HK(e) {
    var t;
    return ((t = e.chatSurface) === null || t === void 0 ? void 0 : t.enabled) === true;
  }
  function VK(e) {
    var t;
    return ((t = e.workspace) === null || t === void 0 ? void 0 : t.skillCreationEnabled) !== false;
  }
  function GK(e) {
    var t;
    return (
      ((t = e.chatSurface) === null || t === void 0 ? void 0 : t.advancedFileAnalysis) === true &&
      !vf(e).includes(JS.Bash)
    );
  }
  function WK(e) {
    var t, n;
    let i = new Set(vf(e)),
      r = new Set();
    for (let [o, s] of Object.entries(
      (n = (t = e.workspace) === null || t === void 0 ? void 0 : t.builtinToolPolicy) !== null && n !== void 0 ? n : {},
    ))
      if ((s === "ask" || s === "ask-session") && bf.has(o) && !i.has(o)) r.add(o);
    return YS(r);
  }
});

var Sf = S(function (rO) {
  Object.defineProperty(rO, "__esModule", { value: true });
  rO.AuthenticationConfig = void 0;
  var Pi = st(),
    ur = Ze(),
    Zt = pt(),
    nq = Wt(),
    wf = Si();
  rO.AuthenticationConfig = Pi.z.object({
    disableClaudeAiSignIn: (0, ur.field)(Pi.z.boolean().optional(), {
      flatKey: "disableDeploymentModeChooser",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.3834.0" } },
      title: (0, Zt.msg)({ defaultMessage: "Disable Claude.ai sign-in", id: "DHdnIxD7G9" }),
      default: false,
      category: "sandbox",
      group: wf.GENERAL_RESTRICTIONS_GROUP,
      order: 8,
      description: {
        short: (0, ur.shortDescription)(
          (0, Zt.msg)({
            defaultMessage:
              "Users see only this provider at the login screen. The option to sign in to Claude.ai is hidden.",
            id: "hesC0E8eFo",
          }),
        ),
      },
    }),
    forceLoginOrgUUID: (0, ur.field)(Pi.z.string().optional(), {
      flatKey: "forceLoginOrgUUID",
      support: { enabled: { scopes: ["1p"], availableInVersion: "1.2581.0" } },
      title: (0, Zt.msg)({ defaultMessage: "Required organization", id: "b6/n7wQhfO" }),
      category: "connection",
      description: {
        short: (0, ur.shortDescription)(
          (0, Zt.msg)({
            defaultMessage: "Restricts login to specific org UUID(s). Single UUID string or JSON array.",
            id: "Rio+Mmk17s",
          }),
        ),
      },
      placeholder: (0, Zt.msg)({ defaultMessage: "00000000-0000-0000-0000-000000000000", id: "oT3AdLMVZK" }),
    }),
    ssoOrgDomain: (0, ur.field)(Pi.z.string().optional(), {
      flatKey: "loginSsoOrgDomain",
      support: { enabled: { scopes: ["1p"], availableInVersion: "1.10628.0" } },
      title: (0, Zt.msg)({ defaultMessage: "SSO login domain", id: "RyA8yzgAlp" }),
      category: "connection",
      description: {
        short: (0, ur.shortDescription)(
          (0, Zt.msg)({
            defaultMessage:
              "Surfaces one-click SSO for this email domain on the login screen, without restricting login.",
            id: "1fy7qkmmCd",
          }),
        ),
      },
      placeholder: (0, Zt.msg)({ defaultMessage: "example.com", id: "YKl6sxhgrC" }),
    }),
    disableDeepLinks: (0, ur.field)(Pi.z.boolean().optional(), {
      flatKey: "disableDeepLinkRegistration",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.6889.0" } },
      title: (0, Zt.msg)({ defaultMessage: "Disable claude:// deep-link handling", id: "CCUxBOb3va" }),
      default: false,
      category: "sandbox",
      group: wf.GENERAL_RESTRICTIONS_GROUP,
      order: 9,
      description: {
        short: (0, ur.shortDescription)(
          (0, Zt.msg)({
            defaultMessage: "Stop external apps and websites from opening Cowork via claude:// links.",
            id: "Yk0+YjpaDc",
          }),
        ),
      },
    }),
    microsoftAuthBroker: (0, ur.field)(Pi.z.enum(["auto", "disabled"]).optional(), {
      flatKey: "microsoftAuthBroker",
      support: {
        enabled: [
          { scopes: ["3p"], availableInVersion: "1.19367.0" },
          { scopes: ["1p"], availableInVersion: "1.24012.11" },
        ],
      },
      failClosedValue: "disabled",
      title: (0, Zt.msg)({ defaultMessage: "Microsoft 365 native sign-in broker", id: "1r8dFJPLbj" }),
      default: "auto",
      category: "connectors",
      group: wf.MCP_SERVERS_GROUP,
      order: 2,
      predicates: {
        show: (e) => {
          var t, n;
          return (
            (n = (t = e.mcp) === null || t === void 0 ? void 0 : t.managedServers) !== null && n !== void 0 ? n : []
          ).some((i) => (0, nq.isBuiltinMcpEntry)(i) && i.server === "microsoft365");
        },
      },
      description: {
        short: (0, ur.shortDescription)(
          (0, Zt.msg)({
            defaultMessage:
              "Set to \u201Cdisabled\u201D to force browser-based Microsoft 365 sign-in instead of the native Company Portal / Windows account broker.",
            id: "9z0qahX2K6",
          }),
        ),
      },
    }),
    allowOptionalClientAuth: (0, ur.field)(Pi.z.boolean().optional(), {
      flatKey: "allowOptionalClientAuth",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.17377.1" }, visibility: "public-undocumented" },
      description: {
        short: (0, ur.shortDescription)(
          (0, Zt.msg)({
            defaultMessage: "Allow optional client-certificate fallback for mTLS endpoints.",
            id: "AllowOptionalClientAuthHint",
          }),
          { docsOnly: true },
        ),
      },
      title: (0, Zt.msg)({ defaultMessage: "Allow optional client-certificate fallback", id: "auto" }),
      category: "connection",
    }),
  });
});

var kf = S(function (oO) {
  Object.defineProperty(oO, "__esModule", { value: true });
  oO.AppearanceConfig = void 0;
  var Of = st(),
    Yn = Ze(),
    va = pt(),
    iO = (0, va.msg)({ defaultMessage: "Deployment identity", id: "dplIdntGrp" });
  oO.AppearanceConfig = Of.z.object({
    deploymentDisplayName: (0, Yn.field)(
      (0, Yn.annotate)(Of.z.string().trim().min(1).max(60).optional(), { redact: "keep" }),
      {
        flatKey: "deploymentDisplayName",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.24012.0" } },
        groupOverride: "verbatim",
        title: (0, va.msg)({ defaultMessage: "Deployment display name", id: "dplDsNmTtl" }),
        category: "appearance",
        group: iO,
        description: {
          short: (0, Yn.shortDescription)(
            (0, va.msg)({
              defaultMessage:
                "Overrides the provider label shown in the sidebar footer, user-menu header, and connection-error banner.",
              id: "dplDsNmHnt",
            }),
          ),
          long: (0, Yn.longDescription)(
            'Set this to the name users should see for this deployment (for example, "Claude for Government"). When unset, the desktop shows the default provider label. Maximum 60 characters.',
          ),
        },
      },
    ),
    deploymentDisplaySubtitle: (0, Yn.field)(
      (0, Yn.annotate)(Of.z.string().trim().min(1).max(60).optional(), { redact: "keep" }),
      {
        flatKey: "deploymentDisplaySubtitle",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.24012.0" } },
        groupOverride: "verbatim",
        title: (0, va.msg)({ defaultMessage: "Deployment display subtitle", id: "dplDsSbTtl" }),
        category: "appearance",
        group: iO,
        description: {
          short: (0, Yn.shortDescription)(
            (0, va.msg)({
              defaultMessage: "Optional detail shown after the deployment display name in the account-menu header.",
              id: "dplDsSbHn2",
            }),
          ),
          long: (0, Yn.longDescription)(
            'Optional detail shown after the deployment display name in the account-menu header (for example, "Claude for Veterans Affairs \xB7 Claude for Government"). Shown only when the display name is also set. Maximum 60 characters.',
          ),
        },
        predicates: {
          show: (e) => {
            var t, n;
            return (
              ((n = (t = e.appearance) === null || t === void 0 ? void 0 : t.deploymentDisplayName) !== null &&
              n !== void 0
                ? n
                : ""
              ).trim().length > 0
            );
          },
        },
      },
    ),
  });
});

var tc = S(function (uO) {
  Object.defineProperty(uO, "__esModule", { value: true });
  uO.MAX_BANNER_TEXT_CHARS = uO.BANNER_DEFAULT_TEXT_COLOR = uO.BANNER_DEFAULT_BACKGROUND_COLOR = void 0;
  uO.isValidBannerHexColor = Pf;
  uO.isValidBannerLinkUrl = sO;
  uO.resolveBannerConfig = oq;
  uO.toRenderableBannerConfig = aq;
  uO.BANNER_DEFAULT_BACKGROUND_COLOR = "#F5F5F5";
  uO.BANNER_DEFAULT_TEXT_COLOR = "#000000";
  uO.MAX_BANNER_TEXT_CHARS = 200;
  var iq = /^#[0-9A-Fa-f]{6}$/;
  function Pf(e) {
    return typeof e === "string" && iq.test(e);
  }
  function sO(e) {
    if (typeof e !== "string") return false;
    if (!e.startsWith("https://")) return false;
    try {
      return new URL(e), true;
    } catch (t) {
      return false;
    }
  }
  function oq(e) {
    var t, n;
    if (!e || Object.keys(e).length === 0) return { renders: false, reason: "absent" };
    if (e.enabled !== true) return { renders: false, reason: "disabled" };
    let i = typeof e.text === "string" ? e.text.trim() : "";
    if (i.length === 0 || i.length > uO.MAX_BANNER_TEXT_CHARS) return { renders: false, reason: "invalid", field: "text" };
    let r = (t = e.backgroundColor) !== null && t !== void 0 ? t : uO.BANNER_DEFAULT_BACKGROUND_COLOR;
    if (!Pf(r)) return { renders: false, reason: "invalid", field: "backgroundColor" };
    let o = (n = e.textColor) !== null && n !== void 0 ? n : uO.BANNER_DEFAULT_TEXT_COLOR;
    if (!Pf(o)) return { renders: false, reason: "invalid", field: "textColor" };
    let s = { renders: true, text: i, backgroundColor: r.toUpperCase(), textColor: o.toUpperCase() };
    if (sO(e.linkUrl)) s.linkUrl = e.linkUrl;
    return s;
  }
  function aq(e) {
    if (!e.renders) return null;
    return { text: e.text, backgroundColor: e.backgroundColor, textColor: e.textColor, linkUrl: e.linkUrl };
  }
});

var nc = S(function (pO) {
  Object.defineProperty(pO, "__esModule", { value: true });
  pO.PASSTHROUGH_FIELDS = pO.CLAUDE_AI_IMPORT_SHAPE = pO.BannerConfig = void 0;
  var Pn = st(),
    dO = tc(),
    dq = ht(),
    ct = Ze(),
    We = pt(),
    fO = Wt(),
    wa = (e) => e.enabled === true;
  pO.BannerConfig = Pn.z.object({
    enabled: (0, ct.subfield)(Pn.z.boolean().optional(), {
      label: (0, We.msg)({ defaultMessage: "Show banner", id: "+zZ6KeQPTP" }),
    }),
    text: (0, ct.subfield)(Pn.z.string().optional(), {
      label: (0, We.msg)({ defaultMessage: "Banner text", id: "Wfk3Mut5XF" }),
      placeholder: (0, We.msg)({ defaultMessage: "Internal use only", id: "xg5Va4c/VJ" }),
      description: {
        short: (0, ct.shortDescription)(
          (0, We.msg)({
            defaultMessage: "Single line, truncated on overflow. Maximum 200 characters.",
            id: "47aHGyWFid",
          }),
        ),
      },
      predicates: { show: wa, required: wa },
    }),
    backgroundColor: (0, ct.subfield)(Pn.z.string().optional(), {
      label: (0, We.msg)({ defaultMessage: "Background color", id: "CMansqNBPw" }),
      control: "color",
      default: dO.BANNER_DEFAULT_BACKGROUND_COLOR,
      placeholder: (0, We.msg)({
        defaultMessage: "#F5F5F5",
        description: "Default hex color value \u2014 DO NOT TRANSLATE",
        id: "oqBUnTcd78",
      }),
      description: {
        short: (0, ct.shortDescription)(
          (0, We.msg)({
            defaultMessage: "Six-digit hex (#RRGGBB). Applied exactly as configured; not theme-adapted.",
            id: "WbM+LbvT9p",
          }),
        ),
      },
      predicates: { show: wa },
    }),
    textColor: (0, ct.subfield)(Pn.z.string().optional(), {
      label: (0, We.msg)({ defaultMessage: "Text color", id: "jGi3Y4Pu/z" }),
      control: "color",
      default: dO.BANNER_DEFAULT_TEXT_COLOR,
      placeholder: (0, We.msg)({
        defaultMessage: "#000000",
        description: "Default hex color value \u2014 DO NOT TRANSLATE",
        id: "mMxRbpUjV1",
      }),
      description: {
        short: (0, ct.shortDescription)(
          (0, We.msg)({
            defaultMessage: "Six-digit hex (#RRGGBB). Applied exactly as configured; not theme-adapted.",
            id: "WbM+LbvT9p",
          }),
        ),
      },
      predicates: { show: wa },
    }),
    linkUrl: (0, ct.subfield)(Pn.z.string().optional(), {
      label: (0, We.msg)({ defaultMessage: "Link URL", id: "1e9zwhbnvk" }),
      placeholder: (0, We.msg)({ defaultMessage: "https://intranet.example.com/usage-policy", id: "7U5OZwbVj5" }),
      description: {
        short: (0, ct.shortDescription)(
          (0, We.msg)({
            defaultMessage: "Optional HTTPS URL. The banner text becomes a link when set.",
            id: "HuIg1+BeMP",
          }),
        ),
      },
      mono: true,
      predicates: { show: wa },
    }),
  });
  var rc = (e) => Boolean(e.url || e.oauthIssuer || e.oauthClientId),
    $f = (0, We.msg)({
      defaultMessage: "Required. The export URL, OAuth issuer, and client ID are set together or left entirely empty.",
      id: "c4gImpReq0",
    });
  pO.CLAUDE_AI_IMPORT_SHAPE = {
    url: (0, ct.subfield)((0, fO.urlSchema)({ allowLoopbackHttp: true }).optional(), {
      label: (0, We.msg)({ defaultMessage: "Export URL", id: "c4gImpUrl0" }),
      mono: true,
      predicates: { required: rc },
      requiredMessage: $f,
    }),
    oauthIssuer: (0, ct.subfield)((0, fO.urlSchema)({ allowLoopbackHttp: true }).optional(), {
      label: (0, We.msg)({ defaultMessage: "OAuth issuer", id: "c4gImpIss0" }),
      mono: true,
      predicates: { required: rc },
      requiredMessage: $f,
    }),
    oauthClientId: (0, ct.subfield)(Pn.z.string().trim().min(1).optional(), {
      label: (0, We.msg)({ defaultMessage: "OAuth client ID", id: "c4gImpCli0" }),
      predicates: { required: rc },
      requiredMessage: $f,
    }),
    enabled: (0, ct.subfield)(Pn.z.boolean().default(false), {
      label: (0, We.msg)({ defaultMessage: "Enable import", id: "c4gImpEnbl" }),
    }),
    bannerBehavior: (0, ct.subfield)(Pn.z.enum(["off", "detect", "show"]).optional(), {
      label: (0, We.msg)({ defaultMessage: "Import prompt banner", id: "c4gImpBnr0" }),
    }),
  };
  pO.PASSTHROUGH_FIELDS = {
    claudeAiImport: (0, ct.field)(
      Pn.z
        .object(pO.CLAUDE_AI_IMPORT_SHAPE)
        .refine((e) => !rc(e) || Boolean(e.url && e.oauthIssuer && e.oauthClientId), {
          message:
            "url, oauthIssuer and oauthClientId are required together (an import endpoint is unusable without all three)",
        })
        .optional(),
      {
        flatKey: "claudeAiImport",
        support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } },
        title: (0, We.msg)({ defaultMessage: "Claude.ai data import", id: "c4gImpTitl" }),
        egressRequirements: (e) =>
          [e === null || e === void 0 ? void 0 : e.url, e === null || e === void 0 ? void 0 : e.oauthIssuer]
            .map(dq.safeHostname)
            .filter((t) => !!t),
        egressRequirementsLabel: (0, We.msg)({ defaultMessage: "Claude.ai data import", id: "c4gImpEgrs" }),
        category: "connectors",
        predicates: { show: () => false },
        group: (0, We.msg)({ defaultMessage: "Claude.ai data import", id: "c4gImpGrp0" }),
        description: {
          short: (0, ct.shortDescription)(
            (0, We.msg)({
              defaultMessage:
                "Export endpoint and OAuth client for importing a user\u2019s Claude.ai conversation history into this deployment.",
              id: "c4gImpHint2",
            }),
          ),
        },
      },
    ),
    banner: (0, ct.field)((0, ct.annotate)(pO.BannerConfig.optional(), { redact: "keep" }), {
      flatKey: "banner",
      support: { enabled: { scopes: ["1p", "3p"], availableInVersion: "1.7196.0" } },
      title: (0, We.msg)({ defaultMessage: "Organization banner", id: "bU34Yscprn" }),
      groupOverride: "verbatim",
      category: "appearance",
      group: (0, We.msg)({ defaultMessage: "Organization banner", id: "bU34Yscprn" }),
      description: {
        short: (0, ct.shortDescription)(
          (0, We.msg)({
            defaultMessage: "A persistent banner across the top of the app window after sign-in.",
            id: "UQLzOZq7h3",
          }),
        ),
        long: (0, ct.longDescription)(
          "Use this for compliance notices, an internal-support link, or to identify the deployment. The banner is shown on every page after sign-in and cannot be dismissed by the user. Colors are six-digit hex (`#RRGGBB`); when `linkUrl` is set the banner text becomes an HTTPS link.",
        ),
      },
    }),
  };
});

var uo = S(function (vO) {
  Object.defineProperty(vO, "__esModule", { value: true });
  vO.ManagedConfig = vO.DISCRIMINATORS = void 0;
  var If = st(),
    yO = ht(),
    Qn = Ze(),
    bO = Lt(),
    hr = pt(),
    fq = On(),
    pq = kf(),
    mq = Sf(),
    gq = lf(),
    hq = yf(),
    _q = ff(),
    yq = nc(),
    bq = Ju(),
    Xn = Vu(),
    vq = pf(),
    wq = ec(),
    Sq = (0, Qn.field)(If.z.enum(Qn.PROVIDERS).optional(), {
      flatKey: "inferenceProvider",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } },
      title: (0, hr.msg)({ defaultMessage: "Inference provider", id: "QQpUrtO7kr" }),
      egressRequirements: (e) => (e === "anthropic" ? [yO.ANTHROPIC_API_HOST, yO.PLATFORM_CLAUDE_HOST] : []),
      egressRequirementsLabel: (0, hr.msg)({ defaultMessage: "Claude API", id: "Fo2tzWOJzu" }),
      category: "connection",
      customRenderer: "providerSelect",
      description: {
        short: (0, Qn.shortDescription)(
          (0, hr.msg)({
            defaultMessage: "Selects the inference backend. Setting this key activates third-party mode.",
            id: "aRuqK/KXrl",
          }),
        ),
        long: (0, Qn.longDescription)(
          "The app activates 3P mode only when this is set and the required credential keys for the selected provider are present and valid; otherwise it launches in standard mode. Keys for providers other than the selected one are ignored. Each provider's required keys are documented on its dedicated page under Inference providers.",
        ),
      },
    }),
    Oq = (0, Qn.field)(If.z.enum(Qn.INFERENCE_CREDENTIAL_KINDS).optional(), {
      flatKey: "inferenceCredentialKind",
      support: { enabled: { scopes: ["3p"], availableInVersion: "1.8555.0" } },
      title: (0, hr.msg)({ defaultMessage: "Credential kind", id: "g8BMTiGHB6" }),
      category: "connection",
      order: 90,
      predicates: { required: (e) => (0, bO.credentialKindOf)(e) === void 0 && !(0, bO.hasActiveBootstrap)(e) },
      optionLabels: {
        static: (0, hr.msg)({ defaultMessage: "Static API key", id: "kgHEpmxl05" }),
        "helper-script": (0, hr.msg)({ defaultMessage: "Helper script", id: "DnXPcFgmqb" }),
        interactive: (0, hr.msg)({ defaultMessage: "Interactive sign-in", id: "8c6iN3kiDX" }),
        "vendor-profile": (0, hr.msg)({ defaultMessage: "Cloud vendor profile", id: "4ZsAJlUXHL" }),
        oauth: (0, hr.msg)({ defaultMessage: "Google sign-in (OAuth)", id: "VtxOAuthKind" }),
        workforce: (0, hr.msg)({ defaultMessage: "Workforce Identity", id: "VtxWorkforceKind" }),
      },
      description: {
        short: (0, Qn.shortDescription)(
          (0, hr.msg)({
            defaultMessage: "Selects the credential source. When set, only that source is used (no fallback).",
            id: "xXr+rGIv+A",
          }),
        ),
      },
    });
  vO.DISCRIMINATORS = {
    inferenceProvider: { node: Sq, nestedPath: ["inference", "provider"], discriminates: "provider" },
    inferenceCredentialKind: {
      node: Oq,
      nestedPath: ["inference", "credential", "kind"],
      discriminates: "credentialKind",
    },
  };
  vO.ManagedConfig = If.z.object({
    inference: (0, Qn.annotate)(fq.InferenceConfig.optional(), { gatewayServable: false }),
    otlp: Xn.OtlpConfig.optional(),
    tokenLimits: Xn.TokenLimitsConfig.optional(),
    coworkSurface: Xn.CoworkSurfaceConfig.optional(),
    codeSurface: Xn.CodeSurfaceConfig.optional(),
    chatSurface: Xn.ChatSurfaceConfig.optional(),
    extensions: Xn.ExtensionsConfig.optional(),
    autoUpdate: Xn.AutoUpdateConfig.optional(),
    featureDiscovery: Xn.FeatureDiscoveryConfig.optional(),
    bootstrap: gq.BootstrapConfig.optional(),
    models: _q.ModelsConfig.optional(),
    plugins: bq.PluginsConfig.optional(),
    telemetry: vq.TelemetryConfig.optional(),
    mcp: hq.McpConfig.optional(),
    workspace: wq.WorkspaceConfig.optional(),
    authentication: mq.AuthenticationConfig.optional(),
    appearance: pq.AppearanceConfig.optional(),
    ...yq.PASSTHROUGH_FIELDS,
  });
});

var lo = S(function (kO) {
  Object.defineProperty(kO, "__esModule", { value: true });
  kO.isStaticTier3pKey =
    kO.staticTierKeys =
    kO.nonBootstrapableKeys =
    kO.bootstrapableKeys =
    kO.isBootstrapable =
    kO.allKeys =
    kO.FlatManagedConfig =
    kO.FLAT_KEY_TO_NESTED_PATH =
    kO.fieldProviders =
    kO.INFERENCE_LEAF_MEMBERSHIP =
    kO.RETIRED_FLAT_KEYS =
    kO.FLAT_KEYS =
      void 0;
  kO.requiredProviderLeaves = Iq;
  kO.getFieldMeta = cr;
  kO.tryGetFieldMeta = Rq;
  kO.flatConfigKeys = ei;
  kO.enabledScopes = Af;
  kO.deprecatedScopes = Dq;
  kO.materializeDefaults = xq;
  kO.defaultedFlatKeys = Mq;
  kO.keysWithRemotePolicy = zq;
  kO.appBehaviorMdmKeys = Lq;
  kO.remotePolicyDefaults = Fq;
  var Pq = st(),
    Ie = Ze(),
    co = uo();
  function Eq(e) {
    let t = new Map(),
      n = (i, r, o) => {
        var s, u, c;
        let d = (0, Ie.fieldMetaForNode)(i);
        if (d) {
          let h =
            (s = t.get(d.flatKey)) !== null && s !== void 0
              ? s
              : t
                  .set(d.flatKey, {
                    node: i,
                    path: r,
                    providers: new Set(),
                    credentialKinds: new Set(),
                    kindAgnostic: false,
                  })
                  .get(d.flatKey);
          if (o === null || o === void 0 ? void 0 : o.provider)
            if ((h.providers.add(o.provider), o.kind)) h.credentialKinds.add(o.kind);
            else h.kindAgnostic = true;
          return;
        }
        let f = (0, Ie.unwrapZod)(i),
          p = (0, Ie.zodKind)(f);
        if (p === Ie.ZodKind.ZodObject) {
          let h = f.shape,
            y =
              (u = (0, Ie.literalValueOf)(h.provider)) !== null && u !== void 0
                ? u
                : o === null || o === void 0
                  ? void 0
                  : o.provider,
            v =
              (c = (0, Ie.literalValueOf)(h.kind)) !== null && c !== void 0
                ? c
                : o === null || o === void 0
                  ? void 0
                  : o.kind,
            k = y || v ? { provider: y, kind: v } : o;
          for (let [P, B] of Object.entries(h)) n(B, [...r, P], k);
        } else if (p === Ie.ZodKind.ZodDiscriminatedUnion || p === Ie.ZodKind.ZodUnion)
          for (let h of (0, Ie.unionOptionsOf)(f)) n(h, r, o);
      };
    return (
      n(e, []),
      new Map(
        [...t].map(([i, r]) => [
          i,
          {
            node: r.node,
            path: r.path,
            armContext:
              r.providers.size > 0
                ? { providers: [...r.providers], credentialKinds: r.kindAgnostic ? [] : [...r.credentialKinds] }
                : void 0,
          },
        ]),
      )
    );
  }
  var Sa = Eq(co.ManagedConfig);
  kO.FLAT_KEYS = [...Sa.keys(), ...Object.keys(co.DISCRIMINATORS)];
  kO.RETIRED_FLAT_KEYS = ["disableMobileSimulatorTools"];
  var SO = Object.fromEntries(
    kO.FLAT_KEYS.map((e) => {
      var t, n;
      return [
        e,
        (n = (t = co.DISCRIMINATORS[e]) === null || t === void 0 ? void 0 : t.node) !== null && n !== void 0
          ? n
          : Sa.get(e).node,
      ];
    }),
  );
  kO.INFERENCE_LEAF_MEMBERSHIP = new Map([...Sa].filter(([, e]) => e.armContext).map(([e, t]) => [e, t.armContext]));
  var $q = (e) => {
    var t, n;
    let i =
      (n = (t = kO.INFERENCE_LEAF_MEMBERSHIP.get(e)) === null || t === void 0 ? void 0 : t.providers) !== null &&
      n !== void 0
        ? n
        : [];
    return i.length === Ie.PROVIDERS.length ? [] : i;
  };
  kO.fieldProviders = $q;
  function Iq(e) {
    var t;
    let n = [];
    for (let [i, r] of kO.INFERENCE_LEAF_MEMBERSHIP)
      if (
        r.credentialKinds.length === 0 &&
        r.providers.includes(e) &&
        ((t = cr(i).predicates) === null || t === void 0 ? void 0 : t.required)
      )
        n.push(i);
    return n;
  }
  kO.FLAT_KEY_TO_NESTED_PATH = new Map([
    ...[...Sa].map(([e, t]) => [e, t.path]),
    ...Object.entries(co.DISCRIMINATORS).map(([e, t]) => [e, t.nestedPath]),
  ]);
  function Tq() {
    for (let e of Object.keys(co.DISCRIMINATORS))
      if (Sa.has(e)) throw Error(`flat schema drift: discriminator "${e}" is also a canonical leaf`);
    for (let [e, t] of Object.entries(SO)) {
      let n = (0, Ie.fieldMetaForNode)(t);
      if ((n === null || n === void 0 ? void 0 : n.flatKey) !== e)
        throw Error(`flat schema drift: "${e}" flatKey is "${n === null || n === void 0 ? void 0 : n.flatKey}"`);
    }
  }
  Tq();
  function Aq() {
    let e = new Set([Ie.ZodKind.ZodLiteral, Ie.ZodKind.ZodUndefined, Ie.ZodKind.ZodNever]),
      t = new Set([Ie.ZodKind.ZodObject, Ie.ZodKind.ZodArray, Ie.ZodKind.ZodUnion, Ie.ZodKind.ZodDiscriminatedUnion]),
      n = (i, r, o) => {
        let s = (0, Ie.unwrapZod)(i),
          u = (0, Ie.zodKind)(s);
        if (u === Ie.ZodKind.ZodArray) {
          let c = (0, Ie.arrayElementOf)(s);
          if (c) n(c, `${r}[]`, o);
          return;
        }
        if (u === Ie.ZodKind.ZodUnion || u === Ie.ZodKind.ZodDiscriminatedUnion) {
          for (let c of (0, Ie.unionOptionsOf)(s)) n(c, r, o);
          return;
        }
        if (u !== Ie.ZodKind.ZodObject) return;
        for (let [c, d] of Object.entries(s.shape)) {
          let f = d,
            p = `${r}.${c}`,
            h = (0, Ie.zodKind)((0, Ie.unwrapZod)(f)),
            y = (0, Ie.fieldMetaForNode)(f) !== void 0,
            v = (0, Ie.subfieldMetaForNode)(f) !== void 0;
          if (o) {
            if (!v && !e.has(h)) throw Error(`subfield coverage drift: "${p}" lacks subfield() metadata`);
          } else if (!y && !v && !e.has(h) && !t.has(h))
            throw Error(`field coverage drift: "${p}" is a primitive leaf with no field()/subfield() metadata`);
          n(f, p, o || y);
        }
      };
    n(co.ManagedConfig, "ManagedConfig", false);
  }
  Aq();
  kO.FlatManagedConfig = Pq.z.object(SO);
  kO.allKeys = Object.keys(kO.FlatManagedConfig.shape);
  var Tf = new Map(
    kO.allKeys.map((e) => {
      let t = (0, Ie.fieldMetaForNode)(kO.FlatManagedConfig.shape[e]);
      if (!t) throw Error(`No field() metadata for key: ${e}`);
      return [e, t];
    }),
  );
  function cr(e) {
    let t = Tf.get(e);
    if (!t) throw Error(`No field() metadata for key: ${String(e)}`);
    return t;
  }
  function Rq(e) {
    return Tf.get(e);
  }
  var jq = kO.allKeys.filter((e) => (0, Ie.effectiveVisibility)(Tf.get(e)) !== "internal-only");
  function ei(e) {
    return e.includeInternal ? kO.allKeys : jq;
  }
  var Cq = (e) => (e === void 0 ? [] : "scopes" in e ? [e] : e),
    OO = (e) => Cq(e).flatMap((t) => t.scopes);
  function Af(e) {
    return OO(e.support.enabled);
  }
  function Dq(e) {
    return OO(e.support.deprecated);
  }
  function xq(e, t) {
    for (let n of ei(t)) {
      if (e[n] !== void 0 || kO.INFERENCE_LEAF_MEMBERSHIP.has(n)) continue;
      let i = (0, Ie.runtimeDefault)(cr(n));
      if (i !== void 0) e[n] = i;
    }
    return e;
  }
  function Mq(e) {
    return ei(e).filter((t) => !kO.INFERENCE_LEAF_MEMBERSHIP.has(t) && (0, Ie.runtimeDefault)(cr(t)) !== void 0);
  }
  function zq(e) {
    return kO.allKeys.filter((t) => {
      var n;
      return (n = cr(t).remotePolicy) === null || n === void 0 ? void 0 : n[e];
    });
  }
  function Lq(e) {
    return new Set(ei(e).filter((t) => cr(t).appBehaviorOnly));
  }
  var Uq = (e) => {
    var t;
    return (
      Af(cr(e)).includes("3p") &&
      ((t = cr(e).remotePolicy) === null || t === void 0 ? void 0 : t.type) !== "remote-disabled"
    );
  };
  kO.isBootstrapable = Uq;
  var Nq = (e) => ei(e).filter(kO.isBootstrapable);
  kO.bootstrapableKeys = Nq;
  var Zq = (e) => ei(e).filter((t) => !kO.isBootstrapable(t));
  kO.nonBootstrapableKeys = Zq;
  function Fq(e) {
    var t;
    let n = {};
    for (let i of ei(e)) {
      let r = (t = cr(i).remotePolicy) === null || t === void 0 ? void 0 : t.default;
      if (r !== void 0) n[i] = r;
    }
    return n;
  }
  var Bq = (e) =>
    ei(e).filter((t) => {
      var n;
      return ((n = cr(t).remotePolicy) === null || n === void 0 ? void 0 : n.type) !== "remote-only";
    });
  kO.staticTierKeys = Bq;
  var Kq = (e) => {
    var t;
    return (
      Af(cr(e)).includes("3p") &&
      ((t = cr(e).remotePolicy) === null || t === void 0 ? void 0 : t.type) !== "remote-only"
    );
  };
  kO.isStaticTier3pKey = Kq;
});

var Lf = S(function ($O) {
  Object.defineProperty($O, "__esModule", { value: true });
  $O.CREDENTIAL_SPEC = void 0;
  $O.credentialSpecCell = xf;
  $O.validateCredentialConfig = cH;
  $O.kindIsPresent = Mf;
  $O.deriveInferenceCredentialKind = lH;
  $O.presentCredentialKinds = dH;
  var ic = Ze(),
    Cf = On(),
    Df = (e) => (typeof e === "string" ? e.trim().length > 0 : e !== void 0 && e !== null);
  function uH() {
    var e, t, n, i, r;
    let o = {};
    for (let s of Cf.InferenceConfig.options) {
      let u = s.shape.provider.value,
        c = {},
        d = {};
      for (let p of (0, ic.discriminatorArmsOf)(s.shape.credential)) {
        let h = p.id;
        if (!h || !p.schema) continue;
        let y = (e = c[h]) !== null && e !== void 0 ? e : (c[h] = new Set()),
          v = (t = d[h]) !== null && t !== void 0 ? t : (d[h] = new Set());
        for (let k of Object.values(p.schema.shape)) {
          let P = (0, ic.fieldMetaForNode)(k);
          if (!P || P.notAPresenceSignal) continue;
          if ((v.add(P.flatKey), (n = P.predicates) === null || n === void 0 ? void 0 : n.required)) y.add(P.flatKey);
        }
      }
      let f = {};
      for (let p of Cf.CREDENTIAL_KINDS_FOR_PROVIDER[u]) {
        let h = (0, Cf.kindSupportsDiscovery)(u, p);
        f[p] = {
          requiredLeaves: [...((i = c[p]) !== null && i !== void 0 ? i : [])],
          presenceLeaves: [...((r = d[p]) !== null && r !== void 0 ? r : [])],
          ...(h === false && { supportsDiscovery: false }),
        };
      }
      o[u] = f;
    }
    return o;
  }
  $O.CREDENTIAL_SPEC = uH();
  function xf(e, t) {
    let n = $O.CREDENTIAL_SPEC[e];
    return n === null || n === void 0 ? void 0 : n[t];
  }
  function cH(e, t, n) {
    let i = xf(t, n);
    if (!i) return `inferenceCredentialKind "${n}" is not supported for provider "${t}"`;
    if (!i.requiredLeaves.length) return null;
    let r = i.requiredLeaves.filter((s) => !Df(e[s]));
    if (r.length === 0) return null;
    let o = r.length > 1 ? "are" : "is";
    return `inferenceCredentialKind is "${n}" but ${r.join(", ")} ${o} not set`;
  }
  function Mf(e, t, n) {
    let i = xf(t, n);
    if (!i) return false;
    return i.requiredLeaves.length > 0
      ? i.requiredLeaves.every((r) => Df(e[r]))
      : i.presenceLeaves.some((r) => Df(e[r]));
  }
  function lH(e) {
    let t = e.inferenceProvider;
    if (!t) return;
    for (let n of ic.KIND_PRECEDENCE) if (Mf(e, t, n)) return n;
    if (t === "vertex") {
      if (e.inferenceVertexWorkforceAudience !== void 0) return "workforce";
      if (e.inferenceVertexOAuthClientId !== void 0) return "oauth";
      return "vendor-profile";
    }
    if (t === "anthropic") return "interactive";
    return;
  }
  function dH(e) {
    let t = e.inferenceProvider;
    if (!t) return [];
    return ic.KIND_PRECEDENCE.filter((n) => Mf(e, t, n));
  }
});

var oc = S(function (jO) {
  Object.defineProperty(jO, "__esModule", { value: true });
  jO._test = void 0;
  jO.toBoolean = Uf;
  jO.normalizeWinPathJSON = Nf;
  jO.assignParsedKey = TO;
  jO.resolveLegacyFlatKeys = AO;
  jO.legacyFlatKeyWarning = RO;
  jO.parseConfigRecord = OH;
  jO.stripEmptyKeys = kH;
  jO.parseForceLoginOrgUUIDs = PH;
  jO.enforceConfigurationValues = EH;
  jO.configurationWarnings = $H;
  var _H = ht(),
    Ei = Ze(),
    yH = Lt(),
    wH = Jo(),
    IO = Lf(),
    _t = lo();
  function Uf(e) {
    if (e === null || e === void 0) return;
    if (typeof e === "boolean") return e;
    if (typeof e === "number") {
      if (e === 1) return true;
      if (e === 0) return false;
      return;
    }
    if (typeof e !== "string") return;
    let t = e.trim().replace(/\r/g, "").toLowerCase();
    if (t === "true" || t === "1") return true;
    if (t === "false" || t === "0") return false;
    return;
  }
  function Nf(e) {
    return e.replace(/\\(?!["\\/bfnrtu])/g, "\\\\");
  }
  function SH(e) {
    var t, n, i;
    if (e.code === "invalid_value")
      return ((n = (t = e.values) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) === 1
        ? "invalid_literal"
        : "invalid_enum_value";
    if (e.code === "invalid_format") return "invalid_string";
    if (e.code === "invalid_union" && e.discriminator !== void 0) return "invalid_union_discriminator";
    return (i = e.code) !== null && i !== void 0 ? i : "unknown";
  }
  function TO(e, t, n, i) {
    var r, o;
    if (n === null || n === void 0) return;
    if (n === "") return;
    let s = _t.FlatManagedConfig.shape[t],
      u = (0, Ei.unwrapZod)(s);
    if ((0, Ei.zodKind)(u) === Ei.ZodKind.ZodBoolean) {
      let h = Uf(n);
      if (h !== void 0) e[t] = h;
      else {
        i(`Managed config "${t}" is not a valid boolean`);
        let y = (0, _t.getFieldMeta)(t);
        if ("failClosedValue" in y) e[t] = y.failClosedValue;
      }
      return;
    }
    let c = n;
    if (
      typeof n === "string" &&
      (0, Ei.zodKind)(u) !== Ei.ZodKind.ZodString &&
      (0, Ei.zodKind)(u) !== Ei.ZodKind.ZodEnum
    )
      try {
        c = JSON.parse(n);
      } catch (h) {
        try {
          c = JSON.parse(Nf(n));
        } catch (y) {}
      }
    if (c instanceof Date || c instanceof Map || c instanceof Set) {
      i(`Failed to parse managed config "${t}": .: invalid_type`);
      let h = (0, _t.getFieldMeta)(t);
      if ("failClosedValue" in h) e[t] = h.failClosedValue;
      return;
    }
    let d = s.safeParse(c);
    if (d.success) {
      (e[t] = d.data), (o = (r = (0, _t.getFieldMeta)(t)).checkDropped) === null || o === void 0 || o.call(r, c, i);
      return;
    }
    let f = d.error.issues
      .map((h) =>
        h.code === "custom" ? `${h.path.join(".") || "."}: ${h.message}` : `${h.path.join(".") || "."}: ${SH(h)}`,
      )
      .join("; ");
    i(`Failed to parse managed config "${t}": ${f}`);
    let p = (0, _t.getFieldMeta)(t);
    if ("failClosedValue" in p) e[t] = p.failClosedValue;
  }
  function AO(e, t) {
    let n = { ...e };
    for (let i of _t.allKeys) {
      let r = (0, _t.getFieldMeta)(i).legacyFlatKey;
      if (r && r in n) {
        if (n[i] === void 0) t === null || t === void 0 || t(RO(r, i)), (n[i] = n[r]);
        delete n[r];
      }
    }
    if (n.inferenceGatewayAuthScheme === "sso") {
      if (n.inferenceProvider === "gateway" && n.inferenceCredentialKind === void 0)
        t === null ||
          t === void 0 ||
          t('inferenceGatewayAuthScheme: "sso" is deprecated; set inferenceCredentialKind: "interactive" instead.'),
          (n.inferenceCredentialKind = "interactive");
      delete n.inferenceGatewayAuthScheme;
    }
    if (n.inferenceProvider === "vertex" && n.inferenceCredentialKind === "interactive")
      n.inferenceCredentialKind = n.inferenceVertexWorkforceAudience !== void 0 ? "workforce" : "oauth";
    return n;
  }
  function RO(e, t) {
    return `${e} is a deprecated name for ${t}. Update your configuration to use ${t}.`;
  }
  function OH(e, t) {
    var n;
    let i = AO(e, t === null || t === void 0 ? void 0 : t.onWarn),
      r = {};
    for (let o of (n = t === null || t === void 0 ? void 0 : t.allowedKeys) !== null && n !== void 0 ? n : _t.allKeys)
      TO(r, o, i[o], (s) => {
        var u;
        return (u = t === null || t === void 0 ? void 0 : t.onInvalid) === null || u === void 0
          ? void 0
          : u.call(t, o, s);
      });
    return r;
  }
  function kH(e, t) {
    var n;
    let i = {};
    for (let r of _t.allKeys) {
      if (t === null || t === void 0 ? void 0 : t.scope) {
        let s = (0, _t.getFieldMeta)(r);
        if (!(0, _t.enabledScopes)(s).includes(t.scope)) continue;
        if (((n = s.remotePolicy) === null || n === void 0 ? void 0 : n.type) === "remote-only") continue;
      }
      let o = e[r];
      if (o === void 0 || o === null || o === "") continue;
      if (Array.isArray(o) && o.length === 0) continue;
      if (typeof o === "object" && Object.keys(o).length === 0) continue;
      i[r] = o;
    }
    return i;
  }
  function PH(e, t) {
    if (!e) return null;
    let n = e.trim();
    if (!n) return null;
    if (n.startsWith("[")) {
      try {
        let i = JSON.parse(n);
        if (Array.isArray(i) && i.length > 0 && i.every((r) => typeof r === "string"))
          return i.map((r) => r.trim().toLowerCase());
        if (Array.isArray(i) && i.length === 0) return null;
      } catch (i) {
        return t(`Managed config forceLoginOrgUUID has malformed JSON, ignoring policy: ${e}`), null;
      }
      return t(`Managed config forceLoginOrgUUID is not a valid JSON string array, ignoring policy: ${e}`), null;
    }
    return [n.toLowerCase()];
  }
  function EH(e, t) {
    let n = { ...e };
    if (t === null || t === void 0 ? void 0 : t.mode) {
      for (let i of _t.allKeys)
        if ((0, _t.deprecatedScopes)((0, _t.getFieldMeta)(i)).includes(t.mode) && n[i] !== void 0) delete n[i];
    }
    if (n.coworkTabEnabled === false && n.isClaudeCodeForDesktopEnabled === false && n.chatTabEnabled !== true)
      n.coworkTabEnabled = true;
    return n;
  }
  function $H(e, t) {
    var n;
    let i = [],
      r = { ...e };
    if (t === null || t === void 0 ? void 0 : t.mode) {
      for (let o of _t.allKeys)
        if ((0, _t.deprecatedScopes)((0, _t.getFieldMeta)(o)).includes(t.mode) && r[o] !== void 0)
          i.push(`${o} is deprecated for ${t.mode} mode and is being ignored. Remove it from your configuration.`),
            delete r[o];
    }
    if (
      r.modelDiscoveryEnabled === false &&
      ((n = r.inferenceModels) === null || n === void 0
        ? void 0
        : n.some(
            (o) =>
              typeof (o === null || o === void 0 ? void 0 : o.name) === "string" &&
              wH.ANTHROPIC_TIER_NAMES.some((s) => s === o.name.toLowerCase()),
          ))
    )
      i.push("Aliases like 'sonnet' are resolved via model discovery. Use the full model ID.");
    if (!r.inferenceCredentialKind && r.inferenceProvider) {
      let o = (0, IO.presentCredentialKinds)(r);
      if (o.length > 1) {
        let s = (0, IO.deriveInferenceCredentialKind)(r);
        i.push(
          `Multiple credential methods configured (${o.join(", ")}); using ${s}. Clear unused fields or set Credential kind explicitly to avoid ambiguity.`,
        );
      }
    }
    if (r.inferenceProvider === "gateway" && r.inferenceGatewayAuthScheme !== "x-api-key" && r.inferenceGatewayBaseUrl)
      try {
        if ((0, _H.isAnthropicHost)(new URL(r.inferenceGatewayBaseUrl).hostname))
          i.push(
            "Gateway baseUrl is an anthropic.com host but authScheme is not x-api-key. Consider switching to inferenceProvider: anthropic",
          );
      } catch (o) {}
    if (r.coworkTabEnabled === false && r.isClaudeCodeForDesktopEnabled === false && r.chatTabEnabled !== true)
      i.push("At least one surface must remain enabled; Cowork has been re-enabled.");
    return i;
  }
  jO._test = { toBoolean: Uf, normalizeWinPathJSON: Nf, coerceKvRecord: yH._test.coerceKvRecord };
});

var UO = S(function (LO) {
  var ac, Zf, Ff;
  Object.defineProperty(LO, "__esModule", { value: true });
  LO.isSensitiveDropped = MO;
  LO.resolveRedactPolicy = zO;
  LO.redactedSnapshot = ZH;
  LO.redactSensitiveKeys = FH;
  var DO = ht(),
    $i = Ze(),
    sc = lo();
  function MO(e) {
    let t = (0, $i.redactPolicyOf)(sc.FlatManagedConfig.shape[e]);
    return t === "drop" || t === "presence";
  }
  var LH =
    ((Ff =
      (Zf = (ac = globalThis.crypto) === null || ac === void 0 ? void 0 : ac.randomUUID) === null || Zf === void 0
        ? void 0
        : Zf.call(ac)) !== null && Ff !== void 0
      ? Ff
      : String(Math.random())) + ":";
  function zO(e) {
    let t = sc.FlatManagedConfig.shape[e],
      n = (0, $i.redactPolicyOf)(t);
    if (n !== void 0) return n;
    let i = (0, $i.zodKind)((0, $i.unwrapZod)(t));
    return i === $i.ZodKind.ZodBoolean || i === $i.ZodKind.ZodEnum || i === $i.ZodKind.ZodNumber ? "keep" : "presence";
  }
  function UH(e) {
    let t = 0;
    for (let n = 0; n < e.length; n++) (t = (t << 5) - t + e.charCodeAt(n)), (t = t & t);
    return ((t & 4294967295) >>> 0).toString();
  }
  var xO = (e) => UH(LH + (typeof e === "string" ? e : JSON.stringify(e)));
  function NH(e, t) {
    var n;
    switch (e) {
      case "keep":
        return t;
      case "hash":
        return Array.isArray(t) ? t.map(xO) : xO(t);
      case "hostname":
        return Array.isArray(t)
          ? t.map((i) => {
              var r;
              return (r = (0, DO.safeHostname)(i)) !== null && r !== void 0 ? r : null;
            })
          : (n = (0, DO.safeHostname)(t)) !== null && n !== void 0
            ? n
            : null;
      case "presence":
        if (Array.isArray(t)) return { count: t.length };
        if (t && typeof t === "object") return { keys: Object.keys(t) };
        return t !== null && t !== void 0;
      case "drop":
        return;
    }
  }
  function ZH(e) {
    let t = {};
    for (let n of sc.allKeys) {
      let i = e[n];
      if (i === void 0) continue;
      let r = NH(zO(n), i);
      if (r !== void 0) t[n] = r;
    }
    return t;
  }
  function FH(e) {
    let t = { ...e };
    for (let n of sc.allKeys) {
      let i = e[n];
      if (i === void 0 || !MO(n)) continue;
      t[n] = Array.isArray(i)
        ? ["[redacted]"]
        : i && typeof i === "object"
          ? Object.fromEntries(Object.keys(i).map((r) => [r, "[redacted]"]))
          : "[redacted]";
    }
    return t;
  }
});

var _r = S(function (ee) {
  var VH =
      (ee && ee.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: true,
                get: function () {
                  return t[n];
                },
              };
            Object.defineProperty(e, i, r);
          }
        : function (e, t, n, i) {
            if (i === void 0) i = n;
            e[i] = t[n];
          }),
    kt =
      (ee && ee.__exportStar) ||
      function (e, t) {
        for (var n in e) if (n !== "default" && !Object.prototype.hasOwnProperty.call(t, n)) VH(t, e, n);
      };
  Object.defineProperty(ee, "__esModule", { value: true });
  ee.MODELS_GROUP =
    ee.HELPER_SCRIPT_GROUP =
    ee.hasActiveBootstrap =
    ee.credentialKindOf =
    ee.COWORK_3P_DOCS_BASE =
    ee.providerHasDiscovery =
    ee.providerCliFlagEnv =
    ee.PROVIDER_CLI_FLAG =
    ee.kindSupportsDiscovery =
    ee.isBedrockFamily =
    ee.CREDENTIAL_KINDS_FOR_PROVIDER =
    ee.PROVIDERS =
    ee.PROVIDER_DISPLAY =
    ee.KIND_PRECEDENCE =
    ee.INFERENCE_CREDENTIAL_KINDS =
    ee.getProviderLabel =
    ee.DEFAULT_INFERENCE_PROVIDER =
    ee.unwrapZod =
      void 0;
  var NO = Wt(),
    GH = Ze();
  Object.defineProperty(ee, "unwrapZod", {
    enumerable: true,
    get: function () {
      return GH.unwrapZod;
    },
  });
  var fo = zu();
  Object.defineProperty(ee, "DEFAULT_INFERENCE_PROVIDER", {
    enumerable: true,
    get: function () {
      return fo.DEFAULT_INFERENCE_PROVIDER;
    },
  });
  Object.defineProperty(ee, "getProviderLabel", {
    enumerable: true,
    get: function () {
      return fo.getProviderLabel;
    },
  });
  Object.defineProperty(ee, "INFERENCE_CREDENTIAL_KINDS", {
    enumerable: true,
    get: function () {
      return fo.INFERENCE_CREDENTIAL_KINDS;
    },
  });
  Object.defineProperty(ee, "KIND_PRECEDENCE", {
    enumerable: true,
    get: function () {
      return fo.KIND_PRECEDENCE;
    },
  });
  Object.defineProperty(ee, "PROVIDER_DISPLAY", {
    enumerable: true,
    get: function () {
      return fo.PROVIDER_DISPLAY;
    },
  });
  Object.defineProperty(ee, "PROVIDERS", {
    enumerable: true,
    get: function () {
      return fo.PROVIDERS;
    },
  });
  var po = On();
  Object.defineProperty(ee, "CREDENTIAL_KINDS_FOR_PROVIDER", {
    enumerable: true,
    get: function () {
      return po.CREDENTIAL_KINDS_FOR_PROVIDER;
    },
  });
  Object.defineProperty(ee, "isBedrockFamily", {
    enumerable: true,
    get: function () {
      return po.isBedrockFamily;
    },
  });
  Object.defineProperty(ee, "kindSupportsDiscovery", {
    enumerable: true,
    get: function () {
      return po.kindSupportsDiscovery;
    },
  });
  Object.defineProperty(ee, "PROVIDER_CLI_FLAG", {
    enumerable: true,
    get: function () {
      return po.PROVIDER_CLI_FLAG;
    },
  });
  Object.defineProperty(ee, "providerCliFlagEnv", {
    enumerable: true,
    get: function () {
      return po.providerCliFlagEnv;
    },
  });
  Object.defineProperty(ee, "providerHasDiscovery", {
    enumerable: true,
    get: function () {
      return po.providerHasDiscovery;
    },
  });
  var Pa = Lt();
  Object.defineProperty(ee, "COWORK_3P_DOCS_BASE", {
    enumerable: true,
    get: function () {
      return Pa.COWORK_3P_DOCS_BASE;
    },
  });
  Object.defineProperty(ee, "credentialKindOf", {
    enumerable: true,
    get: function () {
      return Pa.credentialKindOf;
    },
  });
  Object.defineProperty(ee, "hasActiveBootstrap", {
    enumerable: true,
    get: function () {
      return Pa.hasActiveBootstrap;
    },
  });
  Object.defineProperty(ee, "HELPER_SCRIPT_GROUP", {
    enumerable: true,
    get: function () {
      return Pa.HELPER_SCRIPT_GROUP;
    },
  });
  Object.defineProperty(ee, "MODELS_GROUP", {
    enumerable: true,
    get: function () {
      return Pa.MODELS_GROUP;
    },
  });
  NO.BootstrapOidc;
  NO.GatewayOidc;
  kt(Si(), ee);
  kt(Vu(), ee);
  kt(lf(), ee);
  kt(ff(), ee);
  kt(Ju(), ee);
  kt(pf(), ee);
  kt(yf(), ee);
  kt(ec(), ee);
  kt(Sf(), ee);
  kt(kf(), ee);
  kt(nc(), ee);
  kt(uo(), ee);
  kt(lo(), ee);
  kt(Lf(), ee);
  kt(oc(), ee);
  kt(UO(), ee);
});

var lc = S(function (FO) {
  Object.defineProperty(FO, "__esModule", { value: true });
  FO.pruneSchema = WH;
  FO.emitTypeSource = mo;
  FO.leafPaths = cc;
  var go = st(),
    pe = Ze();
  function WH(e, t, n) {
    var i;
    return (i = uc(e, t, n)) !== null && i !== void 0 ? i : go.z.object({});
  }
  function uc(e, t, n) {
    let i = n === null || n === void 0 ? void 0 : n(e);
    if (i !== void 0) return Ea(e, i);
    if (t(e)) return;
    let r = (0, pe.unwrapZod)(e);
    if (r !== e && t(r)) return;
    let o = (0, pe.zodKind)(r);
    if (o === pe.ZodKind.ZodObject) {
      let s = r.shape,
        u = {};
      for (let [c, d] of Object.entries(s)) {
        let f = uc(d, t, n);
        if (f !== void 0) u[c] = f;
      }
      if (Object.keys(u).length === 0 && Object.keys(s).length > 0) return;
      return Ea(e, go.z.object(u));
    }
    if (o === pe.ZodKind.ZodDiscriminatedUnion || o === pe.ZodKind.ZodUnion) {
      let s = (0, pe.discriminatorKeyOf)(r),
        u = [];
      for (let d of (0, pe.unionOptionsOf)(r)) {
        let f = uc(d, t, n);
        if (f !== void 0) u.push(f);
      }
      if (u.length === 0) return;
      let c = s && u.length > 1 ? go.z.discriminatedUnion(s, u) : u.length === 1 ? u[0] : go.z.union(u);
      return Ea(e, c);
    }
    if (o === pe.ZodKind.ZodArray) {
      let s = (0, pe.arrayElementOf)(r),
        u = s ? uc(s, t, n) : void 0;
      return u === void 0 ? void 0 : Ea(e, go.z.array(u));
    }
    return (0, pe.findDefaultValue)(e) !== void 0 ? Ea(e, r) : e;
  }
  function Ea(e, t) {
    let n = ZO(e) ? t.optional() : t,
      i = e,
      r = n;
    for (let o of ["__antAnn", "__antFieldMeta", "__antSubFieldMeta", "__antVariantMeta"])
      if (i[o] !== void 0) r[o] = i[o];
    return n;
  }
  function ZO(e) {
    return go.z.object({ k: e }).safeParse({}).success;
  }
  function mo(e, t = 0) {
    var n;
    let i = "  ".repeat(t),
      r = (0, pe.unwrapZod)(e);
    switch ((0, pe.zodKind)(r)) {
      case pe.ZodKind.ZodString:
        return "string";
      case pe.ZodKind.ZodNumber:
        return "number";
      case pe.ZodKind.ZodBoolean:
        return "boolean";
      case pe.ZodKind.ZodNever:
        return "never";
      case pe.ZodKind.ZodUndefined:
        return "undefined";
      case pe.ZodKind.ZodLiteral:
        return JSON.stringify((0, pe.literalValueOf)(r));
      case pe.ZodKind.ZodEnum:
        return (
          ((n = (0, pe.enumOptionsOf)(r)) !== null && n !== void 0 ? n : [])
            .map((u) => JSON.stringify(u))
            .join(" | ") || "never"
        );
      case pe.ZodKind.ZodRecord: {
        let s = (0, pe.recordKeyTypeOf)(r),
          u = (0, pe.recordValueTypeOf)(r),
          c = s ? mo(s, t) : "string",
          d = u ? mo(u, t) : "unknown";
        return s && (0, pe.zodKind)((0, pe.unwrapZod)(s)) === pe.ZodKind.ZodEnum
          ? `Partial<Record<${c}, ${d}>>`
          : `Record<${c}, ${d}>`;
      }
      case pe.ZodKind.ZodArray: {
        let s = (0, pe.arrayElementOf)(r);
        return `ReadonlyArray<${s ? mo(s, t) : "unknown"}>`;
      }
      case pe.ZodKind.ZodObject: {
        let s = r.shape,
          u = Object.entries(s);
        if (u.length === 0) return "Record<string, never>";
        return `{
${u
  .map(([d, f]) => {
    let p = f,
      h = ZO(p) ? "?" : "";
    return `${i}  readonly ${JSON.stringify(d)}${h}: ${mo(p, t + 1)};`;
  })
  .join(`
`)}
${i}}`;
      }
      case pe.ZodKind.ZodDiscriminatedUnion:
      case pe.ZodKind.ZodUnion: {
        let s = (0, pe.unionOptionsOf)(r).map((u) => mo(u, t + 2));
        return `(
${i}    | ${s.join(`
${i}    | `)}
${i}  )`;
      }
      default:
        return "unknown";
    }
  }
  function cc(e, t = []) {
    let n = (0, pe.unwrapZod)(e),
      i = (0, pe.zodKind)(n);
    if (i === pe.ZodKind.ZodObject) return Object.entries(n.shape).flatMap(([r, o]) => cc(o, [...t, r]));
    if (i === pe.ZodKind.ZodDiscriminatedUnion || i === pe.ZodKind.ZodUnion) {
      let r = (0, pe.discriminatorKeyOf)(n);
      return (0, pe.unionOptionsOf)(n).flatMap((o) => {
        let s = r ? (0, pe.literalValueOf)(o.shape[r]) : void 0;
        return cc(o, typeof s === "string" ? [...t, `<${s}>`] : t);
      });
    }
    if (i === pe.ZodKind.ZodArray) {
      let r = (0, pe.arrayElementOf)(n);
      return r ? cc(r, [...t, "[]"]) : [t.join(".")];
    }
    return i === pe.ZodKind.ZodNever ? [] : [t.join(".")];
  }
});

var Bf = S(function (KO) {
  Object.defineProperty(KO, "__esModule", { value: true });
  KO.GroupSettings = KO.GroupServableConfig = void 0;
  KO.buildGroupServableSchema = BO;
  var yr = st(),
    ti = Ze(),
    QH = uo(),
    eV = lc(),
    tV = new Set([ti.ZodKind.ZodObject, ti.ZodKind.ZodUnion, ti.ZodKind.ZodDiscriminatedUnion, ti.ZodKind.ZodArray]),
    rV = (e) => {
      var t;
      return !tV.has((t = (0, ti.zodKind)((0, ti.unwrapZod)(e))) !== null && t !== void 0 ? t : "");
    },
    nV = (e) => {
      let t = (0, ti.groupOverrideOf)(e);
      if (t === "verbatim") return (0, ti.unwrapZod)(e);
      if (t === "nameSubset") return yr.z.array(yr.z.string()).max(200);
      return;
    };
  function BO() {
    return (0, eV.pruneSchema)(QH.ManagedConfig, rV, nV)
      .extend({
        models: yr.z.array(yr.z.string()).min(1).max(200).optional(),
        tokenLimits: yr.z
          .object({ maxPerWindow: yr.z.number().int().positive(), windowHours: yr.z.number().int().min(1).max(720) })
          .optional(),
      })
      .refine((t) => Object.keys(t).length > 0, { message: "A group override must state at least one cluster" });
  }
  KO.GroupServableConfig = BO();
  KO.GroupSettings = yr.z.object({
    entries: yr.z.array(yr.z.object({ group_id: yr.z.string().uuid(), config: KO.GroupServableConfig })).max(100),
  });
});

var XO = S(function (WO) {
  Object.defineProperty(WO, "__esModule", { value: true });
  WO.HYBRID_SERVABLE_PROVIDERS = WO.HYBRID_SERVABLE_CREDENTIAL_KINDS = WO.refuseForHybrid = void 0;
  WO.buildHybridServableSchema = GO;
  WO.emitHybridServableConfigSource = dV;
  var ri = Ze(),
    VO = On(),
    oV = uo(),
    aV = Bf(),
    Kf = lc(),
    sV = (e) => {
      var t;
      return (
        (0, ri.redactPolicyOf)(e) === "drop" ||
        ((t = (0, ri.remotePolicyOf)(e)) === null || t === void 0 ? void 0 : t.type) === "remote-disabled" ||
        (0, ri.isNotHostedServable)(e)
      );
    };
  WO.refuseForHybrid = sV;
  function GO() {
    return (0, Kf.pruneSchema)(oV.ManagedConfig, WO.refuseForHybrid);
  }
  var uV = ["anthropic"];
  function cV(e) {
    var t;
    let n = (t = (0, ri.discriminatorKeyOf)(e)) !== null && t !== void 0 ? t : "kind";
    return (0, ri.discriminatorArmsOf)(e)
      .filter((i) => {
        if (!i.id || !i.schema || WO.refuseForHybrid(i.schema)) return false;
        let r = i.schema.shape;
        return Object.entries(r).some(([o, s]) => o !== n && !WO.refuseForHybrid(s));
      })
      .map((i) => i.id);
  }
  WO.HYBRID_SERVABLE_CREDENTIAL_KINDS = (() => {
    var e;
    let t = (e = (0, ri.discriminatorKeyOf)(VO.InferenceConfig)) !== null && e !== void 0 ? e : "provider",
      n = {};
    for (let i of (0, ri.unionOptionsOf)(VO.InferenceConfig)) {
      let r = i.shape,
        o = (0, ri.literalValueOf)(r[t]);
      if (WO.refuseForHybrid(i) || uV.includes(o)) continue;
      let s = cV(r.credential);
      if (s.length > 0) n[o] = s;
    }
    return n;
  })();
  WO.HYBRID_SERVABLE_PROVIDERS = Object.keys(WO.HYBRID_SERVABLE_CREDENTIAL_KINDS);
  var lV = `// GENERATED \u2014 do not edit. Run \`yarn workspace @ant/managed-config gen:hybrid-servable\` to regenerate.
// Type only \u2014 for runtime validation use buildHybridServableSchema() from @ant/managed-config/desktop.
/* oxlint-disable */

`;
  function dV() {
    let e = (0, Kf.emitTypeSource)(GO()),
      t = (0, Kf.emitTypeSource)((0, aV.buildGroupServableSchema)());
    return `${lV}export type HybridServableConfig = ${e};

export type GroupServableConfig = ${t};
`;
  }
});

var Vf = S(function (r0) {
  Object.defineProperty(r0, "__esModule", { value: true });
  r0.gatewayOverlayDropChecks = wV;
  r0.gatewayRefusedPathPrefixes = t0;
  r0.gatewayServableKeys = SV;
  var dc = st(),
    ni = Ze(),
    mc = Wt(),
    mV = uo(),
    QO = nc(),
    gV = Ju(),
    hV = Vu(),
    qf = ec(),
    Hf = lo(),
    _V = oc(),
    Ii = (e) => {
      if (typeof e !== "string") return e;
      try {
        return JSON.parse(e);
      } catch (t) {
        try {
          return JSON.parse((0, _V.normalizeWinPathJSON)(e));
        } catch (n) {
          return e;
        }
      }
    },
    e0 = (e, t) => (n, i) => {
      let r = Ii(n);
      if (r === null || typeof r !== "object" || Array.isArray(r)) return;
      let o = t();
      for (let s of Object.keys(r)) if (!Object.hasOwn(o, s)) i(`${e}.${s} dropped: unknown sub-key`);
    },
    yV = (e, t) => (n, i) => {
      let r = Ii(n);
      if (!Array.isArray(r)) return;
      for (let o of r)
        if (typeof o !== "string" || !t.includes(o))
          i(`${e} entry ${JSON.stringify(o)} dropped: must be one of ${t.join(", ")}`);
    },
    bV = (e) => (t, n) => {
      let i = Ii(t);
      if (!Array.isArray(i)) return;
      for (let r of i) if (typeof r !== "string") n(`${e} entry ${JSON.stringify(r)} dropped: entries must be strings`);
    },
    fc =
      (e, t, n = () => false) =>
      (i, r) => {
        let o = Ii(i);
        if (!Array.isArray(o)) return;
        for (let [s, u] of o.entries()) {
          if (u === null || typeof u !== "object" || Array.isArray(u)) continue;
          let c = t().safeParse([u]);
          if (!c.success || !Array.isArray(c.data)) continue;
          let d = c.data[0];
          if (d === null || typeof d !== "object" || Array.isArray(d)) continue;
          let f = Object.keys(u),
            p = new Set(Object.keys(d));
          for (let h of f) {
            if (p.has(h)) continue;
            if (n(u, h, p)) continue;
            r(`${e}[${s}].${h} dropped: unknown sub-key`);
          }
        }
      },
    vV = (e) => (t, n) => {
      var i;
      let r = Ii(t);
      if (Array.isArray(r)) {
        fc(e, () => mc.OrgPluginSettings)(r, n);
        return;
      }
      if (r === null || typeof r !== "object") return;
      for (let s of Object.keys(r)) if (s !== "mcpServers") n(`${e}.${s} dropped: unknown sub-key`);
      let o = r.mcpServers;
      if (o === null || typeof o !== "object" || Array.isArray(o)) return;
      for (let [s, u] of Object.entries(o)) {
        if (u === null || typeof u !== "object" || Array.isArray(u)) {
          n(`${e}.mcpServers["${s}"] reset to {} \u2014 expected an object with toolPolicy`, "reset");
          continue;
        }
        for (let f of Object.keys(u))
          if (f !== "toolPolicy") n(`${e}.mcpServers["${s}"].${f} dropped: unknown sub-key`);
        let c = mc.OrgPluginServerValue.safeParse(u);
        if (!c.success) {
          n(`${e}.mcpServers["${s}"] reset to {} \u2014 toolPolicy failed to parse`, "reset");
          continue;
        }
        let d = u.toolPolicy;
        if (d !== null && typeof d === "object" && !Array.isArray(d)) {
          let f = (i = c.data.toolPolicy) !== null && i !== void 0 ? i : {};
          for (let [p, h] of Object.entries(d))
            if (!Object.hasOwn(f, p))
              n(`${e}.mcpServers["${s}"].toolPolicy["${p}"] dropped: unrecognized policy ${JSON.stringify(h)}`);
        }
      }
    };
  function wV() {
    return {
      banner: e0("banner", () => QO.BannerConfig.shape),
      claudeAiImport: e0("claudeAiImport", () => QO.CLAUDE_AI_IMPORT_SHAPE),
      otlpContentCapture: yV("otlpContentCapture", hV.OTLP_CONTENT_CATEGORIES),
      disabledBuiltinTools: bV("disabledBuiltinTools"),
      managedMcpServers: fc("managedMcpServers", () => mc.ManagedMcpServers, mc.isManagedMcpEntryMemberConsumed),
      orgPluginSettings: vV("orgPluginSettings"),
      allowedPluginMarketplaces: fc("allowedPluginMarketplaces", () =>
        dc.z.array(gV.AllowedPluginMarketplace.nullable().catch(null)),
      ),
      allowedWorkspaceFolders: fc("allowedWorkspaceFolders", () =>
        dc.z.array(dc.z.union([dc.z.string().min(1), qf.AllowedWorkspaceFolder])),
      ),
      builtinToolPolicy: (e, t) => (0, qf.checkBuiltinToolPolicyForDrops)(Ii(e), t),
      coworkEgressAllowedHosts: (e, t) => (0, qf.checkEgressHostsForDrops)(Ii(e), t),
    };
  }
  function t0() {
    let e = new Set(),
      t = (n, i) => {
        if ((0, ni.isNotGatewayServable)(n)) {
          e.add(i.join("."));
          return;
        }
        let r = (0, ni.unwrapZod)(n),
          o = (0, ni.zodKind)(r);
        if (o === ni.ZodKind.ZodObject) for (let [s, u] of Object.entries(r.shape)) t(u, [...i, s]);
        else if (o === ni.ZodKind.ZodUnion || o === ni.ZodKind.ZodDiscriminatedUnion)
          for (let s of (0, ni.unionOptionsOf)(r)) t(s, i);
      };
    return t(mV.ManagedConfig, []), [...e];
  }
  function SV(e) {
    let t = t0(),
      n = (i) => t.some((r) => i === r || i.startsWith(`${r}.`));
    return (0, Hf.bootstrapableKeys)(e).filter((i) => {
      var r;
      if (!(0, ni.isReleasedFor3p)((0, Hf.getFieldMeta)(i))) return false;
      let o = (r = Hf.FLAT_KEY_TO_NESTED_PATH.get(i)) === null || r === void 0 ? void 0 : r.join(".");
      return o !== void 0 && !n(o);
    });
  }
});

var Gf = S(function (i0) {
  Object.defineProperty(i0, "__esModule", { value: true });
  i0.LEGACY_WIRE_SHAPES = void 0;
  var n0 = Wt();
  i0.LEGACY_WIRE_SHAPES = {
    orgPluginSettings: { schema: n0.LegacyOrgPluginSettings, toLegacy: n0.orgPluginSettingsToLegacyRecord },
  };
});

var ii = S(function (l0) {
  Object.defineProperty(l0, "__esModule", { value: true });
  l0.CLUSTER_NAMES = l0.CLUSTER_REGISTRY = void 0;
  l0.unflattenInference = u0;
  l0.flattenInference = c0;
  l0.flattenAll = AV;
  l0.unflattenAll = RV;
  var Pt = Ze(),
    Yf = On(),
    gc = _r();
  function a0(e) {
    var t, n, i;
    return (n = (t = (0, Pt.fieldMetaForNode)(e)) === null || t === void 0 ? void 0 : t.flatKey) !== null &&
      n !== void 0
      ? n
      : (i = (0, Pt.subfieldMetaForNode)(e)) === null || i === void 0
        ? void 0
        : i.flatKey;
  }
  var s0 = (e, t) => {
    var n;
    return (n = (0, Pt.discriminatorArmsOf)(e.shape.credential).find((i) => i.id === t)) === null || n === void 0
      ? void 0
      : n.schema;
  };
  function EV(e, t) {
    let n = e.inferenceCredentialKind;
    if (n !== void 0) return gc.CREDENTIAL_KINDS_FOR_PROVIDER[t].includes(n) ? n : void 0;
    return (0, gc.deriveInferenceCredentialKind)(e);
  }
  function Wf(e, t) {
    let n = {};
    for (let [i, r] of Object.entries(e.shape)) {
      let o = a0(r);
      if (o) {
        let c = t[o];
        if (c !== void 0) n[i] = c;
        continue;
      }
      let s = (0, Pt.literalValueOf)(r);
      if (s !== void 0) {
        n[i] = s;
        continue;
      }
      let u = (0, Pt.unwrapZod)(r);
      if ((0, Pt.zodKind)(u) === Pt.ZodKind.ZodObject) {
        let c = Wf(u, t);
        if (Object.keys(c).length > 0) n[i] = c;
      }
    }
    return n;
  }
  function u0(e) {
    let t = e.inferenceProvider;
    if (t === void 0) return;
    let n = Yf.PROVIDER_ARMS.get(t);
    if (!n) return;
    let i = Wf(n, e),
      r = EV(e, t);
    if (r !== void 0) {
      let o = s0(n, r);
      if (o) i.credential = Wf(o, e);
    }
    return i;
  }
  function Jf(e, t, n) {
    for (let [i, r] of Object.entries(e.shape)) {
      let o = t[i];
      if (o === void 0) continue;
      let s = a0(r);
      if (s) {
        n[s] = o;
        continue;
      }
      let u = (0, Pt.unwrapZod)(r);
      if ((0, Pt.zodKind)(u) === Pt.ZodKind.ZodObject) Jf(u, o, n);
    }
  }
  function c0(e) {
    var t;
    let n = {
        inferenceProvider: e.provider,
        inferenceCredentialKind: (t = e.credential) === null || t === void 0 ? void 0 : t.kind,
      },
      i = Yf.PROVIDER_ARMS.get(e.provider);
    if (i) {
      if ((Jf(i, e, n), e.credential)) {
        let r = s0(i, e.credential.kind);
        if (r) Jf(r, e.credential, n);
      }
    }
    return (0, Pt.dropUndefined)(n);
  }
  var $V = (e) => {
      let t = Object.entries(e.shape).map(([n, i]) => {
        var r;
        let o = (r = (0, Pt.fieldMetaForNode)(i)) === null || r === void 0 ? void 0 : r.flatKey;
        if (!o) throw Error(`simpleCluster: no flatKey on .${n}`);
        return [n, o];
      });
      return {
        schema: e,
        propMap: Object.fromEntries(t),
        flatten: (n) => {
          let i = {};
          for (let [r, o] of t) {
            let s = n[r];
            if (s !== void 0) i[o] = s;
          }
          return i;
        },
        unflatten: (n) => {
          let i = {};
          for (let [r, o] of t) {
            let s = n[o];
            if (s !== void 0) i[r] = s;
          }
          return Object.keys(i).length === 0 ? void 0 : i;
        },
      };
    },
    IV = { schema: Yf.InferenceConfig, flatten: c0, unflatten: u0 };
  l0.CLUSTER_REGISTRY = Object.fromEntries(
    Object.entries(gc.ManagedConfig.shape).flatMap(([e, t]) => {
      if ((0, Pt.fieldMetaForNode)(t)) return [];
      if (e === "inference") return [[e, IV]];
      let n = (0, Pt.unwrapZod)(t);
      if ((0, Pt.zodKind)(n) !== Pt.ZodKind.ZodObject) return [];
      return [[e, $V(n)]];
    }),
  );
  l0.CLUSTER_NAMES = Object.keys(l0.CLUSTER_REGISTRY);
  var TV = new Set(
    [...gc.FLAT_KEY_TO_NESTED_PATH].filter(([, e]) => e[0] !== void 0 && e[0] in l0.CLUSTER_REGISTRY).map(([e]) => e),
  );
  function AV(e) {
    let t = {};
    for (let [n, i] of Object.entries(e)) {
      if (i === void 0) continue;
      let r = l0.CLUSTER_REGISTRY[n];
      if (r) Object.assign(t, r.flatten(i));
      else t[n] = i;
    }
    return t;
  }
  function RV(e) {
    let t = {};
    for (let n of l0.CLUSTER_NAMES) {
      let i = l0.CLUSTER_REGISTRY[n].unflatten(e);
      if (i !== void 0) t[n] = i;
    }
    for (let [n, i] of Object.entries(e)) {
      if (i === void 0 || TV.has(n)) continue;
      t[n] = i;
    }
    return t;
  }
});

var f0 = S(function (d0) {
  Object.defineProperty(d0, "__esModule", { value: true });
  d0.mergeTiers = UV;
  d0.materializeRaw = NV;
  var hc = ii(),
    br = _r();
  function MV(e, t) {
    let n = {};
    for (let i of t) if (e[i] !== void 0) n[i] = e[i];
    return n;
  }
  var zV = (e, t) => MV(e, (0, br.nonBootstrapableKeys)(t));
  function UV(e, t, n, i) {
    let { keyEnumOpts: r, resolveMode: o, bootstrapFallback: s, onWarn: u } = i,
      c = t ? { ...t, ...zV(e, r) } : { ...e };
    if (n !== void 0) {
      for (let h of (0, br.appBehaviorMdmKeys)(r)) delete c[h];
      Object.assign(c, n);
    }
    let d = (0, hc.unflattenAll)(c),
      f = o(d);
    if (u) for (let h of (0, br.configurationWarnings)(c, { mode: f })) u(h);
    let p = (0, br.enforceConfigurationValues)(c, { mode: f });
    for (let h of (0, br.flatConfigKeys)(r))
      if (p[h] !== void 0 && !(0, br.enabledScopes)((0, br.getFieldMeta)(h)).includes(f)) delete p[h];
    if (s !== void 0 && f === "3p") {
      let h = (0, br.remotePolicyDefaults)(r);
      if (t === void 0 && s !== "no-cache") {
        let y = (0, br.appBehaviorMdmKeys)(r);
        for (let [v, k] of Object.entries(s.applied)) if (!y.has(v)) p[v] = k;
      }
      for (let [y, v] of Object.entries(h)) if (p[y] === void 0) p[y] = v;
    }
    return (0, br.materializeDefaults)(p, r), { config: (0, hc.unflattenAll)(p), raw: d };
  }
  function NV(e, t) {
    return (0, hc.unflattenAll)((0, br.materializeDefaults)((0, hc.flattenAll)(e), t));
  }
});

var m0 = S(function (p0) {
  Object.defineProperty(p0, "__esModule", { value: true });
  p0.normalize = BV;
  function BV(e, t) {
    return e;
  }
});

var _0 = S(function (h0) {
  Object.defineProperty(h0, "__esModule", { value: true });
  h0.normalize = VV;
  var g0 = ii(),
    qV = (e) => e !== null && typeof e === "object" && !Array.isArray(e),
    HV = (e) => (Array.isArray(e) ? "array" : e === null ? "null" : typeof e);
  function VV(e, t, n) {
    let i = { ...e },
      r = [];
    for (let o of g0.CLUSTER_NAMES) {
      let s = i[o];
      if ((delete i[o], s === void 0 || s === null)) continue;
      if (typeof s === "string")
        try {
          s = JSON.parse(s);
        } catch (u) {}
      if (!qV(s)) {
        t.push(`Failed to parse bootstrap cluster "${o}": expected object, got ${HV(s)}`);
        continue;
      }
      r.push(o);
      try {
        Object.assign(i, g0.CLUSTER_REGISTRY[o].flatten(s));
      } catch (u) {
        let c = u instanceof Error ? u.message : String(u);
        t.push(`Failed to parse bootstrap cluster "${o}": ${c}`),
          n === null ||
            n === void 0 ||
            n("bootstrap nested cluster flatten threw; cluster dropped", { key: o, message: c });
      }
    }
    return n === null || n === void 0 || n("bootstrap intake normalized v2 nested response", { clusters: r }), i;
  }
});

var Qf = S(function (Ft) {
  var WV =
      (Ft && Ft.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: true,
                get: function () {
                  return t[n];
                },
              };
            Object.defineProperty(e, i, r);
          }
        : function (e, t, n, i) {
            if (i === void 0) i = n;
            e[i] = t[n];
          }),
    JV =
      (Ft && Ft.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    y0 =
      (Ft && Ft.__importStar) ||
      (function () {
        var e = function (t) {
          return (
            (e =
              Object.getOwnPropertyNames ||
              function (n) {
                var i = [];
                for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) i[i.length] = r;
                return i;
              }),
            e(t)
          );
        };
        return function (t) {
          if (t && t.__esModule) return t;
          var n = {};
          if (t != null) {
            for (var i = e(t), r = 0; r < i.length; r++) if (i[r] !== "default") WV(n, t, i[r]);
          }
          return JV(n, t), n;
        };
      })();
  Object.defineProperty(Ft, "__esModule", { value: true });
  Ft.NORMALIZERS = void 0;
  Ft.normalize = rG;
  var YV = ii(),
    XV = y0(m0()),
    QV = y0(_0());
  Ft.NORMALIZERS = { 1: XV.normalize, 2: QV.normalize };
  var eG = (e) => e !== null && typeof e === "object" && !Array.isArray(e);
  function tG(e) {
    let t = e.$schemaVersion;
    if (typeof t === "number" && Number.isInteger(t) && t >= 1) return t;
    return YV.CLUSTER_NAMES.some((n) => e[n] !== void 0 && e[n] !== null) ? 2 : 1;
  }
  function rG(e, t) {
    var n;
    if (!eG(e)) return { flat: {}, version: 1, warnings: [] };
    let { $schemaVersion: i, ...r } = e,
      o = tG(e),
      s =
        (n = Ft.NORMALIZERS[o]) !== null && n !== void 0
          ? n
          : Ft.NORMALIZERS[Math.max(...Object.keys(Ft.NORMALIZERS).map(Number))],
      u = [];
    return { flat: s(r, u, t), version: o, warnings: u };
  }
});

var _c = S(function (ep) {
  Object.defineProperty(ep, "__esModule", { value: true });
  ep.FORM_FIELD_BY_ID = ep.FORM_FIELDS = ep.subFieldsOf = void 0;
  ep.setInferenceProvider = aG;
  ep.setInferenceCredentialKind = sG;
  ep.isFormFieldVisible = uG;
  ep.getFormField = lG;
  ep.elementOf = w0;
  ep.objectColumnsOf = S0;
  ep.itemColumnsOf = O0;
  ep.storageTypeOf = dG;
  ep.optionValuesOf = fG;
  ep.recordValueOptionsOf = pG;
  ep.controlTypeOf = mG;
  var we = Ze();
  Object.defineProperty(ep, "subFieldsOf", {
    enumerable: true,
    get: function () {
      return we.subFieldsOf;
    },
  });
  var nG = Lt(),
    Ti = ii(),
    Ta = _r(),
    b0 = new Map(
      [...Ta.FLAT_KEY_TO_NESTED_PATH]
        .filter(([, e]) => e[0] !== void 0 && e[0] in Ti.CLUSTER_REGISTRY)
        .map(([e, t]) => [e, t[0]]),
    ),
    v0 = new Map(
      Object.values(Ti.CLUSTER_REGISTRY).flatMap((e) => {
        var t;
        return Object.entries((t = e.propMap) !== null && t !== void 0 ? t : {}).map(([n, i]) => [i, n]);
      }),
    );
  function iG(e, t) {
    let n = b0.get(t);
    if (n === void 0) return e[t];
    let i = e[n];
    if (i === void 0) return;
    let r = v0.get(t);
    if (r) return i[r];
    return (0, Ti.flattenInference)(i)[t];
  }
  function oG(e, t, n) {
    var i;
    let r = b0.get(t);
    if (r === void 0) return { ...e, [t]: n };
    let o = v0.get(t);
    if (o) {
      let u = (i = e[r]) !== null && i !== void 0 ? i : {};
      return { ...e, [r]: (0, we.dropUndefined)({ ...u, [o]: n }) };
    }
    let s = { ...(e.inference !== void 0 ? (0, Ti.flattenInference)(e.inference) : {}), [t]: n };
    return (0, we.dropUndefined)({ ...e, inference: (0, Ti.unflattenInference)(s) });
  }
  function aG(e, t) {
    if (t === void 0) return (0, we.dropUndefined)({ ...e, inference: void 0 });
    let n = e.inference !== void 0 ? (0, Ti.flattenInference)(e.inference) : {};
    return (0, we.dropUndefined)({ ...e, inference: (0, Ti.unflattenInference)({ ...n, inferenceProvider: t }) });
  }
  function sG(e, t) {
    if (!e.inference) return e;
    let n = t === void 0 ? void 0 : { kind: t };
    return { ...e, inference: (0, we.dropUndefined)({ ...e.inference, credential: n }) };
  }
  function uG(e, t) {
    var n, i;
    if (
      e.providers.length > 0 &&
      e.providers.length < we.PROVIDERS.length &&
      !e.providers.includes((n = t.inference) === null || n === void 0 ? void 0 : n.provider)
    )
      return false;
    let r = (0, nG.credentialKindOf)(t);
    if (e.credentialKinds.length > 0 && !e.credentialKinds.includes(r)) return false;
    let o = (i = e.meta.predicates) === null || i === void 0 ? void 0 : i.show;
    return !o || o(t);
  }
  function cG(e, t, n) {
    var i, r, o;
    let s = Ta.INFERENCE_LEAF_MEMBERSHIP.get(e),
      u = (i = Ta.DISCRIMINATORS[e]) === null || i === void 0 ? void 0 : i.discriminates;
    return {
      id: e,
      meta: n,
      node: t,
      providers: (r = s === null || s === void 0 ? void 0 : s.providers) !== null && r !== void 0 ? r : [],
      credentialKinds: (o = s === null || s === void 0 ? void 0 : s.credentialKinds) !== null && o !== void 0 ? o : [],
      ...(u && { discriminates: u }),
      get: (c) => iG(c, e),
      set: (c, d) => oG(c, e, d),
    };
  }
  ep.FORM_FIELDS = (0, Ta.flatConfigKeys)({ includeInternal: true }).map((e) => {
    let t = Ta.FlatManagedConfig.shape[e],
      n = (0, we.fieldMetaForNode)(t);
    if (!n) throw Error(`FORM_FIELDS: no meta for ${e}`);
    return cG(e, t, n);
  });
  ep.FORM_FIELD_BY_ID = new Map(ep.FORM_FIELDS.map((e) => [e.id, e]));
  function lG(e) {
    let t = ep.FORM_FIELD_BY_ID.get(e);
    if (!t) throw Error(`unknown form field: ${e}`);
    return t;
  }
  function w0(e) {
    let t = (0, we.unwrapZod)(e);
    return (0, we.arrayElementOf)(t);
  }
  function S0(e) {
    return (0, we.subFieldsOf)(e.node);
  }
  function O0(e) {
    return (0, we.subFieldsOf)(w0(e.node));
  }
  function dG(e) {
    let t = (0, we.unwrapZod)(e),
      n = (0, we.zodKind)(t);
    if (n === we.ZodKind.ZodBoolean) return "boolean";
    if (n === we.ZodKind.ZodNumber) return (0, we.numberIsInt)(t) ? "integer" : "real";
    return "string";
  }
  function fG(e) {
    if (e.meta.optionValues) return e.meta.optionValues;
    let t = (0, we.unwrapZod)(e.node),
      n = (0, we.zodKind)(t),
      i = n === we.ZodKind.ZodArray ? (0, we.arrayElementOf)(t) : void 0,
      r = n === we.ZodKind.ZodRecord ? (0, we.recordKeyTypeOf)(t) : void 0,
      o =
        n === we.ZodKind.ZodArray
          ? i && (0, we.enumOptionsOf)(i)
          : n === we.ZodKind.ZodRecord
            ? r && (0, we.enumOptionsOf)(r)
            : (0, we.enumOptionsOf)(e.node);
    if (o) return o;
    let s = e.meta.optionLabels;
    return s ? Object.keys(s) : void 0;
  }
  function pG(e) {
    var t;
    return (t = e.meta.optionValues) !== null && t !== void 0 ? t : (0, we.recordValueEnumOf)(e.node);
  }
  function mG(e) {
    let t = (0, we.zodKind)((0, we.unwrapZod)(e.node));
    if (t === we.ZodKind.ZodArray) return O0(e).length > 0 ? "objectList" : "stringArray";
    if (t === we.ZodKind.ZodObject) return S0(e).length > 0 ? "object" : "json";
    if (t === we.ZodKind.ZodEnum) return "enum";
    if (t === we.ZodKind.ZodRecord) return "record";
    if (t === we.ZodKind.ZodBoolean) return "boolean";
    if (t === we.ZodKind.ZodNumber) return "number";
    return "string";
  }
});

var D0 = S(function (A0) {
  Object.defineProperty(A0, "__esModule", { value: true });
  A0._test =
    A0.BOOTSTRAP_RESPONSE_ENVELOPE =
    A0.bootstrapJsonSchemaId =
    A0.BOOTSTRAP_LEGACY_SHAPES =
    A0.BOOTSTRAP_SCHEMA_VERSIONS =
      void 0;
  A0.bootstrapSchemaKeys = $0;
  A0.buildBootstrapJsonSchema = TG;
  var ho = st(),
    oi = Ze(),
    P0 = ii(),
    EG = Gf(),
    _o = _r();
  A0.BOOTSTRAP_SCHEMA_VERSIONS = [1, 2];
  function $0() {
    return (0, _o.bootstrapableKeys)({ includeInternal: false }).filter((e) => {
      let t = (0, _o.getFieldMeta)(e);
      return (
        (0, oi.effectiveVisibility)(t) === "public" &&
        !(0, oi.isUnreleasedVersion)((0, oi.min3pAvailableInVersion)(t.support.enabled))
      );
    });
  }
  A0.BOOTSTRAP_LEGACY_SHAPES = Object.fromEntries(
    Object.entries(EG.LEGACY_WIRE_SHAPES).flatMap(([e, t]) => ("schema" in t ? [[e, t.schema]] : [])),
  );
  var $G = (e) => `https://claude.com/docs/cowork/3p/schemas/bootstrap-config-v${e}.schema.json`;
  A0.bootstrapJsonSchemaId = $G;
  function IG(e) {
    return ho.z.object({ k: e }).safeParse({}).success;
  }
  function rp(e) {
    if (e === null || typeof e !== "object") return;
    if (Array.isArray(e)) {
      for (let n of e) rp(n);
      return;
    }
    let t = e;
    if (t.additionalProperties === false) delete t.additionalProperties;
    for (let n of Object.values(t)) rp(n);
  }
  A0.BOOTSTRAP_RESPONSE_ENVELOPE = {
    $schemaVersion: {
      node: ho.z.literal(2).optional(),
      hint: "Marks the nested v2 wire format. Optional \u2014 a response carrying any cluster key is sniffed as v2 regardless \u2014 but setting it explicitly is the documented version marker and is what the app's own JSON export writes.",
      helpBody:
        "Omitted \u2192 the client infers the version from the document shape (any cluster key present \u2192 v2).",
    },
    expiresAt: {
      node: ho.z.number().positive().optional(),
      hint: "Unix epoch (seconds or milliseconds) after which the client should re-fetch this document. Optional; when absent the client uses its default refresh interval.",
      helpBody: `Omitted \u2192 cache for 1 hour. A number \u2265 10\xB9\xB2 is read as Unix epoch **milliseconds**; below that, **seconds**.

A failed re-fetch keeps the last good response from the current session and retries; the app only enters the degraded state when there has never been a usable response this session.`,
    },
  };
  function I0(e) {
    var t, n, i, r, o;
    let s = Object.fromEntries(
      Object.entries(A0.BOOTSTRAP_RESPONSE_ENVELOPE).map(([u, c]) => [u, c.node.describe(c.hint)]),
    );
    for (let [u, c] of Object.entries(_o.ManagedConfig.shape)) {
      let d = c,
        f = (0, oi.fieldMetaForNode)(d);
      if (f) {
        if (e.has(f.flatKey))
          s[u] =
            (n = (t = A0.BOOTSTRAP_LEGACY_SHAPES[f.flatKey]) === null || t === void 0 ? void 0 : t.optional()) !==
              null && n !== void 0
              ? n
              : d;
        continue;
      }
      let p = (i = P0.CLUSTER_REGISTRY[u]) === null || i === void 0 ? void 0 : i.propMap;
      if (p) {
        let h = (0, oi.unwrapZod)(d),
          y = {};
        for (let [v, k] of Object.entries(p))
          if (e.has(k))
            y[v] =
              (o = (r = A0.BOOTSTRAP_LEGACY_SHAPES[k]) === null || r === void 0 ? void 0 : r.optional()) !== null &&
              o !== void 0
                ? o
                : h.shape[v];
        if (Object.keys(y).length > 0) s[u] = ho.z.object(y).optional();
        continue;
      }
      if (u in P0.CLUSTER_REGISTRY) s[u] = d;
    }
    return s;
  }
  function E0(e, t) {
    let n = t.title.defaultMessage;
    if (typeof n === "string") e.title = n;
    let i = (0, oi.runtimeDefault)(t);
    if (i !== void 0 && e.default === void 0) e.default = i;
  }
  function T0(e, t) {
    var n, i;
    let r = (n = _o.FLAT_KEY_TO_NESTED_PATH.get(t)) !== null && n !== void 0 ? n : [t],
      o = e;
    for (let s of r)
      if (((o = (i = o === null || o === void 0 ? void 0 : o.properties) === null || i === void 0 ? void 0 : i[s]), !o))
        return;
    return o;
  }
  function TG() {
    let e = new Set($0()),
      t = I0(e),
      n = ho.z.toJSONSchema(ho.z.object(t), {
        target: "draft-7",
        io: "input",
        reused: "inline",
        override: (o) => {
          var s, u, c, d;
          let f = o.zodSchema._zod.def;
          if (f.type !== "object" || !f.shape) return;
          let p = o.jsonSchema;
          for (let [y, v] of Object.entries(f.shape)) {
            let k = (0, oi.fieldMetaForNode)(v),
              P =
                (s = k === null || k === void 0 ? void 0 : k.flatKey) !== null && s !== void 0
                  ? s
                  : (u = (0, oi.subfieldMetaForNode)(v)) === null || u === void 0
                    ? void 0
                    : u.flatKey;
            if (P === void 0) continue;
            let B = (c = p.properties) === null || c === void 0 ? void 0 : c[y];
            if (!B) continue;
            if (!e.has(P)) {
              (d = p.properties) === null || d === void 0 || delete d[y];
              continue;
            }
            E0(B, k !== null && k !== void 0 ? k : (0, _o.getFieldMeta)(P));
          }
          let h = Object.entries(f.shape)
            .filter(([y, v]) => {
              var k;
              return ((k = p.properties) === null || k === void 0 ? void 0 : k[y]) !== void 0 && !IG(v);
            })
            .map(([y]) => y);
          if (h.length > 0) p.required = h;
          else delete p.required;
        },
      });
    delete n.$schema;
    let i = { $ref: "#/definitions/BootstrapConfig", definitions: { BootstrapConfig: n } };
    rp(i);
    let r = i.definitions.BootstrapConfig;
    if (r.properties) {
      r.description =
        "Per-user bootstrap configuration response. Nested subset of managed-config-v2 (bootstrapable keys only). Structural " +
        "reference for editor autocomplete \u2014 the client applies further " +
        "validation that this schema does not express (https-only and non-loopback URLs, origin-pinning under gateway SSO). Unrecognised keys are ignored; flat top-level keys are also accepted at runtime for back-compat but not advertised here.";
      for (let o of Object.keys(A0.BOOTSTRAP_LEGACY_SHAPES)) {
        let s = e.has(o) ? T0(r, o) : null;
        if (s) E0(s, (0, _o.getFieldMeta)(o));
      }
    }
    return { $schema: "http://json-schema.org/draft-07/schema#", $id: A0.bootstrapJsonSchemaId(2), ...i };
  }
  A0._test = { nestedBootstrapShape: I0, nodeAtNestedPath: T0 };
});

var ip = S(function (z0) {
  Object.defineProperty(z0, "__esModule", { value: true });
  z0.isEmptySubValue = z0.CONFIGURATION_CATEGORIES = void 0;
  z0.stripHiddenSubFields = DG;
  z0.missingSubFields = MG;
  var ai = _c(),
    Bt = pt(),
    CG = _r();
  z0.CONFIGURATION_CATEGORIES = {
    connection: {
      title: (0, Bt.msg)({ defaultMessage: "Connection", id: "KtZV9pULgo" }),
      description: (0, Bt.msg)({
        defaultMessage: "Choose where Claude Desktop sends inference requests.",
        id: "Amxb69AvfR",
      }),
    },
    sandbox: { title: (0, Bt.msg)({ defaultMessage: "Workspace restrictions", id: "CwADEGuH8H" }) },
    connectors: { title: (0, Bt.msg)({ defaultMessage: "Connectors & extensions", id: "y/6sGoi9YF" }) },
    telemetry: {
      title: (0, Bt.msg)({ defaultMessage: "Telemetry & updates", id: "Ba3MtjwP5h" }),
      banner: (0, Bt.msg)({
        defaultMessage:
          "Prompts, completions, and your data are never sent to Anthropic. Telemetry covers crash and usage signals only.",
        id: "enn6AdQzxk",
      }),
    },
    limits: { title: (0, Bt.msg)({ defaultMessage: "Usage limits", id: "LMGYthp0hQ" }) },
    appearance: { title: (0, Bt.msg)({ defaultMessage: "Appearance", id: "2GURQYNPp3" }) },
    plugins: {
      title: (0, Bt.msg)({ defaultMessage: "Plugins & skills", id: "KZbdbvaU9V" }),
      mountPath: { mac: "/Library/Application Support/Claude/org-plugins", win: "%ProgramFiles%\\Claude\\org-plugins" },
    },
    egress: {
      title: (0, Bt.msg)({ defaultMessage: "Egress Requirements", id: "xY1EE6Ndl5" }),
      description: (0, Bt.msg)({
        defaultMessage:
          "Hosts your network firewall must allow, derived from your current settings. This list is read-only and updates as you make changes. Traffic is HTTPS on port 443 unless a custom port is specified (OTLP, gateway, or MCP server URLs).",
        id: "Lpq+8Nau5X",
      }),
      derived: true,
    },
    source: {
      title: (0, Bt.msg)({ defaultMessage: "Source", id: "aH4De2Y20k" }),
      description: (0, Bt.msg)({
        defaultMessage:
          "Point this configuration at a bootstrap URL to have your organization manage these settings remotely.",
        id: "tQVvCrCxZY",
      }),
      descriptionWhenConfigured: (0, Bt.msg)({
        defaultMessage:
          "This configuration is fetched from a bootstrap URL at launch. Fields it provides are locked below.",
        id: "JOFb1Tb7WF",
      }),
    },
  };
  function x0(e, t) {
    var n;
    let i;
    for (let r of e)
      if (((n = r.predicates) === null || n === void 0 ? void 0 : n.show) && !r.predicates.show(t) && r.key in t)
        (i !== null && i !== void 0) || (i = { ...t }), delete i[r.key];
    return i;
  }
  function DG(e) {
    let t = e;
    for (let n of ai.FORM_FIELDS) {
      if (!(0, CG.enabledScopes)(n.meta).includes("3p")) continue;
      let i = n.get(t);
      if (i === void 0) continue;
      if (!(0, ai.isFormFieldVisible)(n, e)) {
        t = n.set(t, void 0);
        continue;
      }
      if (!i || typeof i !== "object") continue;
      let r = (0, ai.objectColumnsOf)(n);
      if (r.length > 0 && !Array.isArray(i)) {
        let s = x0(r, i);
        if (s) t = n.set(t, Object.keys(s).length === 0 ? void 0 : s);
        continue;
      }
      let o = (0, ai.itemColumnsOf)(n);
      if (o.length > 0 && Array.isArray(i)) {
        let s = false,
          u = i.map((c) => {
            if (!c || typeof c !== "object") return c;
            let d = x0(o, c);
            if (d) s = true;
            return d !== null && d !== void 0 ? d : c;
          });
        if (s) t = n.set(t, u);
      }
    }
    return t;
  }
  var xG = (e) => e === void 0 || e === null || (typeof e === "string" && e.trim() === "");
  z0.isEmptySubValue = xG;
  function M0(e, t, n, i) {
    let r = typeof e === "string" ? ai.FORM_FIELD_BY_ID.get(e) : e;
    if (!r) return [];
    let o = n(r);
    if (o.length === 0 || !(0, ai.isFormFieldVisible)(r, t)) return [];
    return i(r.get(t)).flatMap((s) => {
      let u = s && typeof s === "object" ? s : {};
      return o.filter((c) => {
        var d, f, p;
        return (
          (!((d = c.predicates) === null || d === void 0 ? void 0 : d.show) || c.predicates.show(u)) &&
          ((p = (f = c.predicates) === null || f === void 0 ? void 0 : f.required) === null || p === void 0
            ? void 0
            : p.call(f, u)) &&
          z0.isEmptySubValue(u[c.key])
        );
      });
    });
  }
  function MG(e, t) {
    return [
      ...M0(e, t, ai.objectColumnsOf, (n) => [n]),
      ...M0(e, t, ai.itemColumnsOf, (n) => (Array.isArray(n) ? n : [])),
    ];
  }
});

var G0 = S(function (K0) {
  Object.defineProperty(K0, "__esModule", { value: true });
  K0._test = K0.DOCS_GROUPS = K0.anchorSlug = void 0;
  K0.typeStringOf = yo;
  K0.docsTableRows = B0;
  K0.buildConfigReferenceData = JG;
  var NG = D0(),
    Je = Ze(),
    vc = _c(),
    Ai = _r(),
    ZG = ip(),
    FG = (e) => e.toLowerCase();
  K0.anchorSlug = FG;
  function yo(e) {
    let t = (0, Je.unwrapZod)(e),
      n = (0, Je.zodKind)(t);
    if (n === Je.ZodKind.ZodBoolean) return "boolean";
    if (n === Je.ZodKind.ZodNumber) return (0, Je.numberIsInt)(t) ? "integer" : "number";
    if (n === Je.ZodKind.ZodEnum) return "enum";
    if (n === Je.ZodKind.ZodLiteral) {
      let i = (0, Je.literalValueOf)(t);
      if (typeof i === "boolean") return "boolean";
      if (typeof i === "number") return Number.isInteger(i) ? "integer" : "number";
      return "string";
    }
    if (n === Je.ZodKind.ZodArray) {
      let i = (0, vc.elementOf)(e);
      return `${i ? yo(i) : "unknown"}[]`;
    }
    if (n === Je.ZodKind.ZodObject || n === Je.ZodKind.ZodRecord) return "object";
    if (n === Je.ZodKind.ZodUnion || n === Je.ZodKind.ZodDiscriminatedUnion)
      return (0, Je.unionOptionsOf)(t)
        .map(yo)
        .every((o) => o === "string" || o === "enum")
        ? "string"
        : "object";
    return "string";
  }
  function U0(e) {
    return (0, Je.findDefaultValue)(e);
  }
  function L0(e, t) {
    let n = (0, Je.unwrapZod)(e),
      i = (0, Je.numberBoundsOf)(n)[t];
    if (!i) return;
    if (!i.inclusive && (0, Je.numberIsInt)(n)) return t === "min" ? i.value + 1 : i.value - 1;
    return i.value;
  }
  var bc = (e) => `\`${String(e)}\``,
    N0 = { formatMessage: (e) => e.defaultMessage },
    BG = {};
  function KG(e, t) {
    let n = e === null || e === void 0 ? void 0 : e.text;
    if (!n) return "";
    return typeof n === "function" ? n(t, BG) : t.formatMessage(n);
  }
  function qG(e) {
    for (let t of [e.support.enabled, e.support.deprecated]) {
      let n = t === void 0 ? [] : Array.isArray(t) ? t : [t];
      if (n.some((i) => i.scopes.includes("3p"))) return (0, Je.min3pAvailableInVersion)(n);
    }
    return null;
  }
  function HG(e) {
    var t;
    if (((t = e.remotePolicy) === null || t === void 0 ? void 0 : t.type) === "remote-only") return "bootstrap-only";
    if ((0, Ai.enabledScopes)(e).includes("3p") && !(0, Ai.isBootstrapable)(e.flatKey)) return "mdm-only";
    return "both";
  }
  function Z0(e, t, n = "", i = 0) {
    var r;
    let o = (r = (0, vc.elementOf)(e)) !== null && r !== void 0 ? r : e;
    return (0, Je.subFieldsOf)(o).flatMap((s) => {
      var u, c, d, f, p, h;
      if ((0, Je.effectiveVisibility)(s) !== "public") return [];
      let y = n + s.key,
        v = [],
        k =
          (c = (u = s.description) === null || u === void 0 ? void 0 : u.short) === null || c === void 0
            ? void 0
            : c.text;
      if (k) v.push(t.formatMessage(k));
      let P = s.nonPublicOptions,
        B = (P === null || P === void 0 ? void 0 : P.length)
          ? (d = s.options) === null || d === void 0
            ? void 0
            : d.filter((ve) => !P.includes(ve))
          : s.options;
      if (B === null || B === void 0 ? void 0 : B.length) v.push(`One of: ${B.map(bc).join(", ")}.`);
      let Q = (f = s.default) !== null && f !== void 0 ? f : U0(s.node),
        ge = Q === void 0 || typeof Q === "object" ? null : String(Q),
        re =
          (h = (p = s.description) === null || p === void 0 ? void 0 : p.long) === null || h === void 0
            ? void 0
            : h.text,
        Se = {
          name: y,
          typeString: yo(s.node),
          defaultString: ge,
          description: v.join(" "),
          ...(re ? { helpBody: re } : {}),
          ...((B === null || B === void 0 ? void 0 : B.length) ? { enumValues: B } : {}),
        },
        Ge = i < 1 ? Z0(s.node, t, `${y}.`, i + 1) : [];
      return [Se, ...Ge];
    });
  }
  K0.DOCS_GROUPS = {
    connection: {
      inference: { group: "connection", groupLabel: null },
      workspace: { group: "connection", groupLabel: null },
      models: { group: "connection.models", groupLabel: "Models" },
      authentication: { group: "connection.authentication", groupLabel: "Authentication" },
      gateway: { group: "connection.gateway", groupLabel: "Gateway" },
      anthropic: { group: "connection.anthropic", groupLabel: "Anthropic" },
      bedrock: { group: "connection.bedrock", groupLabel: "Bedrock" },
      mantle: { group: "connection.mantle", groupLabel: "Mantle" },
      vertex: { group: "connection.vertex", groupLabel: "Vertex" },
      foundry: { group: "connection.foundry", groupLabel: "Foundry" },
    },
    sandbox: {
      coworkSurface: { group: "sandbox.coworkSurface", groupLabel: "Cowork surface" },
      codeSurface: { group: "sandbox.codeSurface", groupLabel: "Code surface" },
      chatSurface: { group: "sandbox.chatSurface", groupLabel: "Chat surface" },
      workspace: { group: "sandbox.workspace", groupLabel: "Workspace" },
      authentication: { group: "sandbox.authentication", groupLabel: "Authentication" },
    },
    connectors: {
      extensions: { group: "connectors.extensions", groupLabel: "Extensions" },
      mcp: { group: "connectors.mcp", groupLabel: "MCP" },
      workspace: { group: "connectors.workspace", groupLabel: "Workspace" },
      authentication: { group: "connectors.authentication", groupLabel: "Authentication" },
    },
    telemetry: {
      telemetry: { group: "telemetry", groupLabel: null },
      otlp: { group: "telemetry.otlp", groupLabel: "OTLP" },
      autoUpdate: { group: "telemetry.autoUpdate", groupLabel: "Auto update" },
    },
    limits: { tokenLimits: { group: "limits.tokenLimits", groupLabel: "Token limits" } },
    appearance: {
      appearance: { group: "appearance", groupLabel: null },
      featureDiscovery: { group: "appearance.featureDiscovery", groupLabel: "Feature discovery" },
      workspace: { group: "appearance", groupLabel: null },
    },
    plugins: { plugins: { group: "plugins", groupLabel: null } },
    source: { bootstrap: { group: "source.bootstrap", groupLabel: "Bootstrap" } },
  };
  function F0(e) {
    var t;
    let n = Ai.FLAT_KEY_TO_NESTED_PATH.get(e.flatKey);
    return (t = (0, Ai.fieldProviders)(e.flatKey)[0]) !== null && t !== void 0
      ? t
      : n !== void 0 && n.length > 1
        ? n[0]
        : void 0;
  }
  function VG(e) {
    let t = F0(e),
      n = t === void 0 ? void 0 : K0.DOCS_GROUPS[e.category][t];
    return n !== null && n !== void 0 ? n : { group: e.category, groupLabel: null };
  }
  function GG(e, t) {
    var n, i, r, o, s;
    let { meta: u, node: c } = e,
      d = [],
      f = KG((n = u.description) === null || n === void 0 ? void 0 : n.short, t);
    if (f) d.push(f);
    let p = (0, vc.elementOf)(c),
      h = p ? (0, Je.enumOptionsOf)(p) : (0, Je.enumOptionsOf)(c);
    if (h) d.push(`One of: ${h.map(bc).join(", ")}.`);
    let y = (i = (0, Je.runtimeDefault)(u)) !== null && i !== void 0 ? i : U0(c),
      v = y === void 0 ? null : String(y);
    if (v !== null) d.push(`Defaults to ${bc(v)}.`);
    let k = L0(c, "min"),
      P = L0(c, "max");
    if (k !== void 0 && P !== void 0) d.push(`Range: ${k}\u2013${P}.`);
    let B =
      k !== void 0 || P !== void 0
        ? { ...(k !== void 0 ? { min: k } : {}), ...(P !== void 0 ? { max: P } : {}) }
        : void 0;
    if (u.legacyFlatKey) d.push(`Previously named ${bc(u.legacyFlatKey)}.`);
    let Q = Z0(c, t);
    return {
      mdmKey: u.flatKey,
      label: t.formatMessage(u.title),
      anchor: K0.anchorSlug(u.flatKey),
      ...VG(u),
      typeString: yo(c),
      defaultString: v,
      description: d.join(" "),
      helpBody:
        (s =
          (o = (r = u.description) === null || r === void 0 ? void 0 : r.long) === null || o === void 0
            ? void 0
            : o.text) !== null && s !== void 0
          ? s
          : null,
      availableInVersion: qG(u),
      availability: HG(u),
      deprecated: (0, Ai.deprecatedScopes)(u).includes("3p"),
      beta: u.betaFeatureKey !== void 0,
      ...(u.legacyFlatKey ? { legacyFlatKey: u.legacyFlatKey } : {}),
      ...(h ? { enumValues: h } : {}),
      ...(B ? { range: B } : {}),
      ...(Q.length > 0 ? { subfields: Q } : {}),
    };
  }
  var WG = (e) => (0, Ai.enabledScopes)(e).includes("3p") || (0, Ai.deprecatedScopes)(e).includes("3p");
  function B0(e, t = N0) {
    return vc.FORM_FIELDS.filter(
      (n) => n.meta.category === e && (0, Je.effectiveVisibility)(n.meta) === "public" && WG(n.meta),
    ).map((n) => GG(n, t));
  }
  function JG(e = N0) {
    let t = Object.entries(ZG.CONFIGURATION_CATEGORIES)
        .filter(([, r]) => !r.derived)
        .map(([r, o]) => ({ id: r, label: e.formatMessage(o.title) })),
      n = t.flatMap(({ id: r }) => B0(r, e)).filter((r) => !(0, Je.isUnreleasedVersion)(r.availableInVersion)),
      i = Object.entries(NG.BOOTSTRAP_RESPONSE_ENVELOPE).map(([r, o]) => ({
        name: r,
        typeString: yo(o.node),
        hint: o.hint,
        helpBody: o.helpBody,
      }));
    return { categoryOrder: t, rows: n, bootstrapResponse: i };
  }
  K0._test = { clusterOf: F0 };
});

var ap = S(function (X0) {
  Object.defineProperty(X0, "__esModule", { value: true });
  X0.egressServiceKeys = X0.EGRESS_SERVICES = void 0;
  X0.asHostContext = W0;
  X0.resolveEndpoints = op;
  X0.hostsForService = J0;
  X0.enabledServicesFromConfig = Y0;
  X0.firewallHostsForServices = tW;
  X0.rendererEgressRules = rW;
  X0.serviceLabelForToggleKey = nW;
  var Et = ht(),
    En = pt();
  function W0(e) {
    return typeof e === "string" ? { anthropicHost: e } : e;
  }
  X0.EGRESS_SERVICES = {
    "vm-bundle": {
      toggleKey: null,
      label: (0, En.msg)({ defaultMessage: "Core (VM bundle + Claude CLI binary)", id: "Qee7joNNug" }),
      endpoints: [{ host: Et.VM_BUNDLE_HOST, origin: "main" }],
    },
    updater: {
      toggleKey: "disableAutoUpdates",
      label: (0, En.msg)({ defaultMessage: "Auto-updates", id: "PNFwYup600" }),
      endpoints: ({ anthropicHost: e, updateViaUpdatesHost: t }) =>
        t
          ? [
              { host: Et.UPDATE_FEED_HOST, path: "/api/desktop/", pathSuffix: "/update", origin: "main" },
              { host: Et.VM_BUNDLE_HOST, path: "/releases/", followRedirects: true, origin: "main" },
            ]
          : [
              { host: e, path: "/api/desktop/", pathSuffix: "/update", origin: "renderer" },
              { host: Et.ANTHROPIC_API_HOST, path: "/api/desktop/", pathSuffix: "/update", origin: "renderer" },
              { host: Et.VM_BUNDLE_HOST, path: "/releases/", followRedirects: true, origin: "main" },
            ],
    },
    sentry: {
      toggleKey: "disableEssentialTelemetry",
      label: (0, En.msg)({ defaultMessage: "Essential telemetry", id: "4tdiEppQ3S" }),
      endpoints: [
        { host: Et.SENTRY_WILDCARD_HOST, origin: "renderer", firewallAlso: ["*.ingest.us.sentry.io"] },
        { host: "sentry.io", origin: "renderer" },
      ],
    },
    "datadog-rum": {
      toggleKey: "disableEssentialTelemetry",
      label: (0, En.msg)({ defaultMessage: "Essential telemetry", id: "4tdiEppQ3S" }),
      endpoints: [...Et.DATADOG_INTAKE_HOSTS].map((e) => ({ host: e, origin: "renderer" })),
    },
    segment: {
      toggleKey: "disableNonessentialTelemetry",
      label: (0, En.msg)({ defaultMessage: "Nonessential telemetry", id: "UzLHrala3Q" }),
      endpoints: [
        { host: Et.SEGMENT_CDN_HOST, origin: "renderer", cspDirective: ["connect-src", "script-src"] },
        { host: Et.SEGMENT_API_HOST, origin: "renderer", cspDirective: ["connect-src", "script-src"] },
      ],
    },
    "anthropic-telemetry": {
      toggleKey: "disableNonessentialTelemetry",
      label: (0, En.msg)({ defaultMessage: "Nonessential telemetry", id: "UzLHrala3Q" }),
      endpoints: ({ anthropicHost: e }) => [{ host: e, path: "/api/event_logging/", origin: "renderer" }],
    },
    "anthropic-mcp-registry": {
      toggleKey: "disableNonessentialServices",
      label: (0, En.msg)({ defaultMessage: "Nonessential services", id: "Pc8UzwjRqD" }),
      endpoints: [
        { host: Et.ANTHROPIC_API_HOST, path: "/mcp-registry/", origin: "renderer" },
        { host: Et.ANTHROPIC_API_HOST, path: "/api/directory/", origin: "renderer" },
      ],
    },
    "connector-favicons": {
      toggleKey: "disableNonessentialServices",
      label: (0, En.msg)({ defaultMessage: "Nonessential services", id: "Pc8UzwjRqD" }),
      endpoints: [
        {
          host: Et.FAVICON_PROXY_HOST,
          path: "/s2/favicons",
          followRedirects: true,
          origin: "renderer",
          cspDirective: "img-src",
        },
        { host: Et.GSTATIC_WILDCARD, path: "/faviconV2", origin: "renderer", cspDirective: "img-src" },
      ],
    },
    "artifact-sandbox": {
      toggleKey: "disableNonessentialServices",
      label: (0, En.msg)({ defaultMessage: "Nonessential services", id: "Pc8UzwjRqD" }),
      endpoints: ({ artifactIframeHost: e }) => [
        {
          host: e !== null && e !== void 0 ? e : Et.ARTIFACT_IFRAME_HOST,
          origin: "renderer",
          cspDirective: "frame-src",
          firewallAlso: ["cdnjs.cloudflare.com", "fonts.googleapis.com", "cdn.jsdelivr.net"],
        },
      ],
    },
    "mcp-app-sandbox": {
      toggleKey: "disableNonessentialServices",
      label: (0, En.msg)({ defaultMessage: "Nonessential services", id: "Pc8UzwjRqD" }),
      endpoints: [
        {
          host: Et.MCP_APP_SANDBOX_WILDCARD_HOST,
          origin: "renderer",
          cspDirective: "frame-src",
          firewallAlso: [Et.ANTHROPIC_ASSETS_HOST],
        },
      ],
    },
  };
  X0.egressServiceKeys = Object.keys(X0.EGRESS_SERVICES);
  function op(e, t) {
    return typeof e === "function" ? e(W0(t)) : e;
  }
  function J0(e, t = "") {
    return op(e.endpoints, t).flatMap((n) => {
      var i;
      return [n.host, ...((i = n.firewallAlso) !== null && i !== void 0 ? i : [])];
    });
  }
  function eW(e, t) {
    var n, i, r, o, s, u, c, d;
    switch (t) {
      case "disableAutoUpdates":
        return (
          ((i = (n = e.autoUpdate) === null || n === void 0 ? void 0 : n.disabled) !== null && i !== void 0
            ? i
            : e.disableAutoUpdates) === true
        );
      case "disableEssentialTelemetry":
        return (
          ((o = (r = e.telemetry) === null || r === void 0 ? void 0 : r.disableEssential) !== null && o !== void 0
            ? o
            : e.disableEssentialTelemetry) === true
        );
      case "disableNonessentialTelemetry":
        return (
          ((u = (s = e.telemetry) === null || s === void 0 ? void 0 : s.disableNonessential) !== null && u !== void 0
            ? u
            : e.disableNonessentialTelemetry) === true
        );
      case "disableNonessentialServices":
        return (
          ((d = (c = e.telemetry) === null || c === void 0 ? void 0 : c.disableNonessentialServices) !== null &&
          d !== void 0
            ? d
            : e.disableNonessentialServices) === true
        );
    }
  }
  function Y0(e) {
    return X0.egressServiceKeys.filter((t) => {
      let { toggleKey: n } = X0.EGRESS_SERVICES[t];
      return n === null || !eW(e, n);
    });
  }
  function tW(e, t) {
    return Y0(e).flatMap((n) => {
      let i = X0.EGRESS_SERVICES[n];
      return J0(i, t).map((r) => ({ host: r, toggleKey: i.toggleKey }));
    });
  }
  function rW(e, t) {
    return e.flatMap((n) =>
      op(X0.EGRESS_SERVICES[n].endpoints, t)
        .filter((i) => i.origin === "renderer")
        .map(({ host: i, path: r, pathSuffix: o, followRedirects: s }) => ({
          host: i,
          ...(r !== void 0 && { path: r }),
          ...(o !== void 0 && { pathSuffix: o }),
          ...(s !== void 0 && { followRedirects: s }),
        })),
    );
  }
  function nW(e) {
    for (let t of X0.egressServiceKeys) {
      let n = X0.EGRESS_SERVICES[t];
      if (n.toggleKey === e) return n.label;
    }
    return;
  }
});

var tk = S(function (ek) {
  Object.defineProperty(ek, "__esModule", { value: true });
  ek.computeEgressRequirements = mW;
  ek.egressRequirementLabel = gW;
  var dW = ht(),
    Q0 = ap(),
    fW = ii(),
    Sc = _r(),
    pW = "claude.ai";
  function mW(e, t, n = pW) {
    var i, r;
    let o = new Set(),
      s = [],
      u = (d, f) => {
        if (!d || o.has(d)) return;
        o.add(d), s.push({ host: d, fieldKey: f });
      };
    for (let { host: d, toggleKey: f } of (0, Q0.firewallHostsForServices)(e, {
      anthropicHost: n,
      artifactIframeHost: (0, dW.safeHostname)(
        (i = e.workspace) === null || i === void 0 ? void 0 : i.userContentRendererUrl,
      ),
      updateViaUpdatesHost: (r = e.autoUpdate) === null || r === void 0 ? void 0 : r.viaUpdatesHost,
    }))
      u(d, f !== null && f !== void 0 ? f : "core");
    let c = (0, fW.flattenAll)(e);
    for (let d of (0, Sc.flatConfigKeys)(t)) {
      let f = (0, Sc.getFieldMeta)(d);
      if (!(0, Sc.enabledScopes)(f).includes("3p") || !f.egressRequirements) continue;
      let p = typeof f.egressRequirements === "function" ? f.egressRequirements(c[d], e) : f.egressRequirements;
      for (let h of p) u(h, d);
    }
    return s;
  }
  function gW(e, t) {
    var n;
    let i = (0, Q0.serviceLabelForToggleKey)(t === "core" ? null : t);
    if (i) return e.formatMessage(i);
    let r = (0, Sc.getFieldMeta)(t);
    return e.formatMessage((n = r.egressRequirementsLabel) !== null && n !== void 0 ? n : r.title);
  }
});

var lp = S(function (_) {
  var yW =
      (_ && _.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: true,
                get: function () {
                  return t[n];
                },
              };
            Object.defineProperty(e, i, r);
          }
        : function (e, t, n, i) {
            if (i === void 0) i = n;
            e[i] = t[n];
          }),
    rk =
      (_ && _.__exportStar) ||
      function (e, t) {
        for (var n in e) if (n !== "default" && !Object.prototype.hasOwnProperty.call(t, n)) yW(t, e, n);
      };
  Object.defineProperty(_, "__esModule", { value: true });
  _.unlistedBuiltinWriteTools =
    _.builtinWriteToolCoverageGaps =
    _.TOOL_POLICY_LABEL =
    _.resolveMcpToolPolicies =
    _.resolveManagedToolPolicy =
    _.resolveEffectiveMcpToolPolicy =
    _.RemoteDirectMcpServerConfig =
    _.orgPluginSettingsToPolicyMap =
    _.orgPluginSettingsFromPolicyMap =
    _.oidcEndpointSelectionUrls =
    _.resolveOidcEndpointSelection =
    _.byoAsSelectionUrls =
    _.resolveByoAsSelection =
    _.ManagedMcpServers =
    _.M365_WRITE_DELEGATED_SCOPES =
    _.M365_GRANTABLE_DELEGATED_SCOPES =
    _.M365_DEFAULT_DELEGATED_SCOPES =
    _.M365_ALWAYS_REQUESTED_SCOPES =
    _.M365_ADMIN_CONSENT_SCOPES =
    _.LOOPBACK_HOSTS =
    _.isSafeMcpCommand =
    _.isOrgPluginSettingsParseFailed =
    _.isBuiltinMcpItem =
    _.isBuiltinMcpEntry =
    _.wantsOAuthProvider =
    _.httpsUrl =
    _.hasOAuthConfig =
    _.DirectMcpServerConfig =
    _.relevantMcpEntryIssues =
    _.checkManagedMcpServersForDrops =
    _.CALLBACK_HOST_OPTIONS =
    _.WEB_SEARCH_PROVIDER_HOSTS =
    _.WEB_SEARCH_PROVIDERS =
    _.hostsForBuiltinMcpEntry =
    _.findWebSearchBuiltin =
    _.BUILTIN_MCP_SERVERS =
    _.BUILTIN_DEFAULT_TOOL_POLICY =
    _.GatewayOidc =
    _.BootstrapFetchOidc =
    _.BootstrapOidc =
    _.AZURE_CLOUD_HOSTS =
    _.adaptPluginMcp =
    _.TIER_DESCRIPTIONS =
    _.ANTHROPIC_TIER_NAMES =
    _.verdictToFallbackReason =
    _.TIER_ALIASES =
    _.isLikelyAnthropicModelId =
    _.isDefinitelyNotAnthropicModel =
    _.containsAnthropicToken =
    _.checkModel =
      void 0;
  _.staticTierKeys =
    _.remotePolicyDefaults =
    _.nonBootstrapableKeys =
    _.bootstrapableKeys =
    _.stripEmptyKeys =
    _.redactSensitiveKeys =
    _.providerCliFlagEnv =
    _.PROVIDER_CLI_FLAG =
    _.requiredProviderLeaves =
    _.fieldProviders =
    _.isBedrockFamily =
    _.parseForceLoginOrgUUIDs =
    _.resolveLegacyFlatKeys =
    _.parseConfigRecord =
    _.resolveRedactPolicy =
    _.isSkillCreationEnabled =
    _.isMcpPersistentAlwaysAllowEnabled =
    _.isChatTabEnabled =
    _.isChatAdvancedFileAnalysisEnabled =
    _.resolveDisabledBuiltinTools =
    _.checkBuiltinToolPolicyForDrops =
    _.BUILTIN_ASK_POLICY_VALUES =
    _.resolveBuiltinAskTools =
    _.redactedSnapshot =
    _.materializeDefaults =
    _.enforceConfigurationValues =
    _.configurationWarnings =
    _.presentCredentialKinds =
    _.kindIsPresent =
    _.deriveInferenceCredentialKind =
    _.CREDENTIAL_KINDS_FOR_PROVIDER =
    _.validateCredentialConfig =
    _.kindSupportsDiscovery =
    _.credentialSpecCell =
    _.CREDENTIAL_SPEC =
    _.isSensitiveDropped =
    _.tryGetFieldMeta =
    _.getFieldMeta =
    _.deprecatedScopes =
    _.enabledScopes =
    _.ManagedConfig =
    _.RETIRED_FLAT_KEYS =
    _.FLAT_KEY_TO_NESTED_PATH =
    _.flatConfigKeys =
    _.FlatManagedConfig =
    _.BannerConfig =
    _.assignParsedKey =
    _.MARKETPLACE_INSTALL_PREFS =
    _.MARKETPLACE_CREDENTIAL_KINDS =
    _.AllowedPluginMarketplace =
      void 0;
  _.missingSubFields =
    _.isEmptySubValue =
    _.CONFIGURATION_CATEGORIES =
    _.docsTableRows =
    _.anchorSlug =
    _.toRenderableBannerConfig =
    _.resolveBannerConfig =
    _.isValidBannerLinkUrl =
    _.isValidBannerHexColor =
    _.BANNER_DEFAULT_TEXT_COLOR =
    _.BANNER_DEFAULT_BACKGROUND_COLOR =
    _.subFieldsOf =
    _.setInferenceProvider =
    _.setInferenceCredentialKind =
    _.recordValueOptionsOf =
    _.optionValuesOf =
    _.objectColumnsOf =
    _.itemColumnsOf =
    _.isFormFieldVisible =
    _.getFormField =
    _.FORM_FIELDS =
    _.FORM_FIELD_BY_ID =
    _.controlTypeOf =
    _.normalizeVersionedConfig =
    _.mergeTiers =
    _.materializeRaw =
    _.unflattenInference =
    _.unflattenAll =
    _.flattenInference =
    _.flattenAll =
    _.CLUSTER_REGISTRY =
    _.LEGACY_WIRE_SHAPES =
    _.pruneSchema =
    _.gatewayServableKeys =
    _.gatewayRefusedPathPrefixes =
    _.gatewayOverlayDropChecks =
    _.refuseForHybrid =
    _.HYBRID_SERVABLE_PROVIDERS =
    _.HYBRID_SERVABLE_CREDENTIAL_KINDS =
    _.buildHybridServableSchema =
    _.GroupSettings =
    _.GroupServableConfig =
    _.buildGroupServableSchema =
    _.InferenceConfig =
    _.HelperScriptCreds =
    _.OTLP_CONTENT_CATEGORIES =
    _.GROUP_DESCRIPTIONS =
    _.appBehaviorMdmKeys =
    _.keysWithRemotePolicy =
    _.isStaticTier3pKey =
      void 0;
  _.TOOL_POLICY_VALUES =
    _.TOOL_POLICY_EDITOR_VALUES =
    _.strictestToolPolicy =
    _.lookupMcpToolPolicy =
    _.isApprovalRequiredToolPolicy =
    _.PROVIDERS =
    _.PROVIDER_DISPLAY =
    _.KIND_PRECEDENCE =
    _.INFERENCE_CREDENTIAL_KINDS =
    _.getProviderLabel =
    _.DEFAULT_INFERENCE_PROVIDER =
    _.resolveEndpoints =
    _.rendererEgressRules =
    _.hostsForService =
    _.enabledServicesFromConfig =
    _.egressServiceKeys =
    _.EGRESS_SERVICES =
    _.egressRequirementLabel =
    _.computeEgressRequirements =
    _.providerHasDiscovery =
    _.MODELS_GROUP =
    _.HELPER_SCRIPT_GROUP =
    _.hasActiveBootstrap =
    _.urlString =
    _.subfield =
    _.shortDescription =
    _.SHORT_DESCRIPTION_MAX_LENGTH =
    _.runtimeDefault =
    _.remotePolicyOf =
    _.redactPolicyOf =
    _.redact =
    _.notHostedServable =
    _.presetForItem =
    _.pathKindOf =
    _.longDescription =
    _.isUrlString =
    _.isNotHostedServable =
    _.globPattern =
    _.folderPath =
    _.filePath =
    _.fieldMetaForNode =
    _.field =
    _.effectiveVisibility =
    _.displayDefault =
    _.discriminatorKeyOf =
    _.discriminatorArmsOf =
    _.annotationsOf =
    _.annotate =
    _.acceptsWildcard =
    _.stripHiddenSubFields =
      void 0;
  _.toolPolicyKeyGlobMatch = void 0;
  var vo = Xl();
  Object.defineProperty(_, "checkModel", {
    enumerable: true,
    get: function () {
      return vo.checkModel;
    },
  });
  Object.defineProperty(_, "containsAnthropicToken", {
    enumerable: true,
    get: function () {
      return vo.containsAnthropicToken;
    },
  });
  Object.defineProperty(_, "isDefinitelyNotAnthropicModel", {
    enumerable: true,
    get: function () {
      return vo.isDefinitelyNotAnthropicModel;
    },
  });
  Object.defineProperty(_, "isLikelyAnthropicModelId", {
    enumerable: true,
    get: function () {
      return vo.isLikelyAnthropicModelId;
    },
  });
  Object.defineProperty(_, "TIER_ALIASES", {
    enumerable: true,
    get: function () {
      return vo.TIER_ALIASES;
    },
  });
  Object.defineProperty(_, "verdictToFallbackReason", {
    enumerable: true,
    get: function () {
      return vo.verdictToFallbackReason;
    },
  });
  var nk = Jo();
  Object.defineProperty(_, "ANTHROPIC_TIER_NAMES", {
    enumerable: true,
    get: function () {
      return nk.ANTHROPIC_TIER_NAMES;
    },
  });
  Object.defineProperty(_, "TIER_DESCRIPTIONS", {
    enumerable: true,
    get: function () {
      return nk.TIER_DESCRIPTIONS;
    },
  });
  var he = Wt();
  Object.defineProperty(_, "adaptPluginMcp", {
    enumerable: true,
    get: function () {
      return he.adaptPluginMcp;
    },
  });
  Object.defineProperty(_, "AZURE_CLOUD_HOSTS", {
    enumerable: true,
    get: function () {
      return he.AZURE_CLOUD_HOSTS;
    },
  });
  Object.defineProperty(_, "BootstrapOidc", {
    enumerable: true,
    get: function () {
      return he.BootstrapOidc;
    },
  });
  Object.defineProperty(_, "BootstrapFetchOidc", {
    enumerable: true,
    get: function () {
      return he.BootstrapFetchOidc;
    },
  });
  Object.defineProperty(_, "GatewayOidc", {
    enumerable: true,
    get: function () {
      return he.GatewayOidc;
    },
  });
  Object.defineProperty(_, "BUILTIN_DEFAULT_TOOL_POLICY", {
    enumerable: true,
    get: function () {
      return he.BUILTIN_DEFAULT_TOOL_POLICY;
    },
  });
  Object.defineProperty(_, "BUILTIN_MCP_SERVERS", {
    enumerable: true,
    get: function () {
      return he.BUILTIN_MCP_SERVERS;
    },
  });
  Object.defineProperty(_, "findWebSearchBuiltin", {
    enumerable: true,
    get: function () {
      return he.findWebSearchBuiltin;
    },
  });
  Object.defineProperty(_, "hostsForBuiltinMcpEntry", {
    enumerable: true,
    get: function () {
      return he.hostsForBuiltinMcpEntry;
    },
  });
  Object.defineProperty(_, "WEB_SEARCH_PROVIDERS", {
    enumerable: true,
    get: function () {
      return he.WEB_SEARCH_PROVIDERS;
    },
  });
  Object.defineProperty(_, "WEB_SEARCH_PROVIDER_HOSTS", {
    enumerable: true,
    get: function () {
      return he.WEB_SEARCH_PROVIDER_HOSTS;
    },
  });
  Object.defineProperty(_, "CALLBACK_HOST_OPTIONS", {
    enumerable: true,
    get: function () {
      return he.CALLBACK_HOST_OPTIONS;
    },
  });
  Object.defineProperty(_, "checkManagedMcpServersForDrops", {
    enumerable: true,
    get: function () {
      return he.checkManagedMcpServersForDrops;
    },
  });
  Object.defineProperty(_, "relevantMcpEntryIssues", {
    enumerable: true,
    get: function () {
      return he.relevantMcpEntryIssues;
    },
  });
  Object.defineProperty(_, "DirectMcpServerConfig", {
    enumerable: true,
    get: function () {
      return he.DirectMcpServerConfig;
    },
  });
  Object.defineProperty(_, "hasOAuthConfig", {
    enumerable: true,
    get: function () {
      return he.hasOAuthConfig;
    },
  });
  Object.defineProperty(_, "httpsUrl", {
    enumerable: true,
    get: function () {
      return he.httpsUrl;
    },
  });
  Object.defineProperty(_, "wantsOAuthProvider", {
    enumerable: true,
    get: function () {
      return he.wantsOAuthProvider;
    },
  });
  Object.defineProperty(_, "isBuiltinMcpEntry", {
    enumerable: true,
    get: function () {
      return he.isBuiltinMcpEntry;
    },
  });
  Object.defineProperty(_, "isBuiltinMcpItem", {
    enumerable: true,
    get: function () {
      return he.isBuiltinMcpItem;
    },
  });
  Object.defineProperty(_, "isOrgPluginSettingsParseFailed", {
    enumerable: true,
    get: function () {
      return he.isOrgPluginSettingsParseFailed;
    },
  });
  Object.defineProperty(_, "isSafeMcpCommand", {
    enumerable: true,
    get: function () {
      return he.isSafeMcpCommand;
    },
  });
  Object.defineProperty(_, "LOOPBACK_HOSTS", {
    enumerable: true,
    get: function () {
      return he.LOOPBACK_HOSTS;
    },
  });
  Object.defineProperty(_, "M365_ADMIN_CONSENT_SCOPES", {
    enumerable: true,
    get: function () {
      return he.M365_ADMIN_CONSENT_SCOPES;
    },
  });
  Object.defineProperty(_, "M365_ALWAYS_REQUESTED_SCOPES", {
    enumerable: true,
    get: function () {
      return he.M365_ALWAYS_REQUESTED_SCOPES;
    },
  });
  Object.defineProperty(_, "M365_DEFAULT_DELEGATED_SCOPES", {
    enumerable: true,
    get: function () {
      return he.M365_DEFAULT_DELEGATED_SCOPES;
    },
  });
  Object.defineProperty(_, "M365_GRANTABLE_DELEGATED_SCOPES", {
    enumerable: true,
    get: function () {
      return he.M365_GRANTABLE_DELEGATED_SCOPES;
    },
  });
  Object.defineProperty(_, "M365_WRITE_DELEGATED_SCOPES", {
    enumerable: true,
    get: function () {
      return he.M365_WRITE_DELEGATED_SCOPES;
    },
  });
  Object.defineProperty(_, "ManagedMcpServers", {
    enumerable: true,
    get: function () {
      return he.ManagedMcpServers;
    },
  });
  Object.defineProperty(_, "resolveByoAsSelection", {
    enumerable: true,
    get: function () {
      return he.resolveByoAsSelection;
    },
  });
  Object.defineProperty(_, "byoAsSelectionUrls", {
    enumerable: true,
    get: function () {
      return he.byoAsSelectionUrls;
    },
  });
  Object.defineProperty(_, "resolveOidcEndpointSelection", {
    enumerable: true,
    get: function () {
      return he.resolveOidcEndpointSelection;
    },
  });
  Object.defineProperty(_, "oidcEndpointSelectionUrls", {
    enumerable: true,
    get: function () {
      return he.oidcEndpointSelectionUrls;
    },
  });
  Object.defineProperty(_, "orgPluginSettingsFromPolicyMap", {
    enumerable: true,
    get: function () {
      return he.orgPluginSettingsFromPolicyMap;
    },
  });
  Object.defineProperty(_, "orgPluginSettingsToPolicyMap", {
    enumerable: true,
    get: function () {
      return he.orgPluginSettingsToPolicyMap;
    },
  });
  Object.defineProperty(_, "RemoteDirectMcpServerConfig", {
    enumerable: true,
    get: function () {
      return he.RemoteDirectMcpServerConfig;
    },
  });
  Object.defineProperty(_, "resolveEffectiveMcpToolPolicy", {
    enumerable: true,
    get: function () {
      return he.resolveEffectiveMcpToolPolicy;
    },
  });
  Object.defineProperty(_, "resolveManagedToolPolicy", {
    enumerable: true,
    get: function () {
      return he.resolveManagedToolPolicy;
    },
  });
  Object.defineProperty(_, "resolveMcpToolPolicies", {
    enumerable: true,
    get: function () {
      return he.resolveMcpToolPolicies;
    },
  });
  Object.defineProperty(_, "TOOL_POLICY_LABEL", {
    enumerable: true,
    get: function () {
      return he.TOOL_POLICY_LABEL;
    },
  });
  Object.defineProperty(_, "builtinWriteToolCoverageGaps", {
    enumerable: true,
    get: function () {
      return he.builtinWriteToolCoverageGaps;
    },
  });
  Object.defineProperty(_, "unlistedBuiltinWriteTools", {
    enumerable: true,
    get: function () {
      return he.unlistedBuiltinWriteTools;
    },
  });
  var ne = _r();
  Object.defineProperty(_, "AllowedPluginMarketplace", {
    enumerable: true,
    get: function () {
      return ne.AllowedPluginMarketplace;
    },
  });
  Object.defineProperty(_, "MARKETPLACE_CREDENTIAL_KINDS", {
    enumerable: true,
    get: function () {
      return ne.MARKETPLACE_CREDENTIAL_KINDS;
    },
  });
  Object.defineProperty(_, "MARKETPLACE_INSTALL_PREFS", {
    enumerable: true,
    get: function () {
      return ne.MARKETPLACE_INSTALL_PREFS;
    },
  });
  Object.defineProperty(_, "assignParsedKey", {
    enumerable: true,
    get: function () {
      return ne.assignParsedKey;
    },
  });
  Object.defineProperty(_, "BannerConfig", {
    enumerable: true,
    get: function () {
      return ne.BannerConfig;
    },
  });
  Object.defineProperty(_, "FlatManagedConfig", {
    enumerable: true,
    get: function () {
      return ne.FlatManagedConfig;
    },
  });
  Object.defineProperty(_, "flatConfigKeys", {
    enumerable: true,
    get: function () {
      return ne.flatConfigKeys;
    },
  });
  Object.defineProperty(_, "FLAT_KEY_TO_NESTED_PATH", {
    enumerable: true,
    get: function () {
      return ne.FLAT_KEY_TO_NESTED_PATH;
    },
  });
  Object.defineProperty(_, "RETIRED_FLAT_KEYS", {
    enumerable: true,
    get: function () {
      return ne.RETIRED_FLAT_KEYS;
    },
  });
  Object.defineProperty(_, "ManagedConfig", {
    enumerable: true,
    get: function () {
      return ne.ManagedConfig;
    },
  });
  Object.defineProperty(_, "enabledScopes", {
    enumerable: true,
    get: function () {
      return ne.enabledScopes;
    },
  });
  Object.defineProperty(_, "deprecatedScopes", {
    enumerable: true,
    get: function () {
      return ne.deprecatedScopes;
    },
  });
  Object.defineProperty(_, "getFieldMeta", {
    enumerable: true,
    get: function () {
      return ne.getFieldMeta;
    },
  });
  Object.defineProperty(_, "tryGetFieldMeta", {
    enumerable: true,
    get: function () {
      return ne.tryGetFieldMeta;
    },
  });
  Object.defineProperty(_, "isSensitiveDropped", {
    enumerable: true,
    get: function () {
      return ne.isSensitiveDropped;
    },
  });
  Object.defineProperty(_, "CREDENTIAL_SPEC", {
    enumerable: true,
    get: function () {
      return ne.CREDENTIAL_SPEC;
    },
  });
  Object.defineProperty(_, "credentialSpecCell", {
    enumerable: true,
    get: function () {
      return ne.credentialSpecCell;
    },
  });
  Object.defineProperty(_, "kindSupportsDiscovery", {
    enumerable: true,
    get: function () {
      return ne.kindSupportsDiscovery;
    },
  });
  Object.defineProperty(_, "validateCredentialConfig", {
    enumerable: true,
    get: function () {
      return ne.validateCredentialConfig;
    },
  });
  Object.defineProperty(_, "CREDENTIAL_KINDS_FOR_PROVIDER", {
    enumerable: true,
    get: function () {
      return ne.CREDENTIAL_KINDS_FOR_PROVIDER;
    },
  });
  Object.defineProperty(_, "deriveInferenceCredentialKind", {
    enumerable: true,
    get: function () {
      return ne.deriveInferenceCredentialKind;
    },
  });
  Object.defineProperty(_, "kindIsPresent", {
    enumerable: true,
    get: function () {
      return ne.kindIsPresent;
    },
  });
  Object.defineProperty(_, "presentCredentialKinds", {
    enumerable: true,
    get: function () {
      return ne.presentCredentialKinds;
    },
  });
  Object.defineProperty(_, "configurationWarnings", {
    enumerable: true,
    get: function () {
      return ne.configurationWarnings;
    },
  });
  Object.defineProperty(_, "enforceConfigurationValues", {
    enumerable: true,
    get: function () {
      return ne.enforceConfigurationValues;
    },
  });
  Object.defineProperty(_, "materializeDefaults", {
    enumerable: true,
    get: function () {
      return ne.materializeDefaults;
    },
  });
  Object.defineProperty(_, "redactedSnapshot", {
    enumerable: true,
    get: function () {
      return ne.redactedSnapshot;
    },
  });
  Object.defineProperty(_, "resolveBuiltinAskTools", {
    enumerable: true,
    get: function () {
      return ne.resolveBuiltinAskTools;
    },
  });
  Object.defineProperty(_, "BUILTIN_ASK_POLICY_VALUES", {
    enumerable: true,
    get: function () {
      return ne.BUILTIN_ASK_POLICY_VALUES;
    },
  });
  Object.defineProperty(_, "checkBuiltinToolPolicyForDrops", {
    enumerable: true,
    get: function () {
      return ne.checkBuiltinToolPolicyForDrops;
    },
  });
  Object.defineProperty(_, "resolveDisabledBuiltinTools", {
    enumerable: true,
    get: function () {
      return ne.resolveDisabledBuiltinTools;
    },
  });
  Object.defineProperty(_, "isChatAdvancedFileAnalysisEnabled", {
    enumerable: true,
    get: function () {
      return ne.isChatAdvancedFileAnalysisEnabled;
    },
  });
  Object.defineProperty(_, "isChatTabEnabled", {
    enumerable: true,
    get: function () {
      return ne.isChatTabEnabled;
    },
  });
  Object.defineProperty(_, "isMcpPersistentAlwaysAllowEnabled", {
    enumerable: true,
    get: function () {
      return ne.isMcpPersistentAlwaysAllowEnabled;
    },
  });
  Object.defineProperty(_, "isSkillCreationEnabled", {
    enumerable: true,
    get: function () {
      return ne.isSkillCreationEnabled;
    },
  });
  Object.defineProperty(_, "resolveRedactPolicy", {
    enumerable: true,
    get: function () {
      return ne.resolveRedactPolicy;
    },
  });
  Object.defineProperty(_, "parseConfigRecord", {
    enumerable: true,
    get: function () {
      return ne.parseConfigRecord;
    },
  });
  Object.defineProperty(_, "resolveLegacyFlatKeys", {
    enumerable: true,
    get: function () {
      return ne.resolveLegacyFlatKeys;
    },
  });
  Object.defineProperty(_, "parseForceLoginOrgUUIDs", {
    enumerable: true,
    get: function () {
      return ne.parseForceLoginOrgUUIDs;
    },
  });
  Object.defineProperty(_, "isBedrockFamily", {
    enumerable: true,
    get: function () {
      return ne.isBedrockFamily;
    },
  });
  Object.defineProperty(_, "fieldProviders", {
    enumerable: true,
    get: function () {
      return ne.fieldProviders;
    },
  });
  Object.defineProperty(_, "requiredProviderLeaves", {
    enumerable: true,
    get: function () {
      return ne.requiredProviderLeaves;
    },
  });
  Object.defineProperty(_, "PROVIDER_CLI_FLAG", {
    enumerable: true,
    get: function () {
      return ne.PROVIDER_CLI_FLAG;
    },
  });
  Object.defineProperty(_, "providerCliFlagEnv", {
    enumerable: true,
    get: function () {
      return ne.providerCliFlagEnv;
    },
  });
  Object.defineProperty(_, "redactSensitiveKeys", {
    enumerable: true,
    get: function () {
      return ne.redactSensitiveKeys;
    },
  });
  Object.defineProperty(_, "stripEmptyKeys", {
    enumerable: true,
    get: function () {
      return ne.stripEmptyKeys;
    },
  });
  Object.defineProperty(_, "bootstrapableKeys", {
    enumerable: true,
    get: function () {
      return ne.bootstrapableKeys;
    },
  });
  Object.defineProperty(_, "nonBootstrapableKeys", {
    enumerable: true,
    get: function () {
      return ne.nonBootstrapableKeys;
    },
  });
  Object.defineProperty(_, "remotePolicyDefaults", {
    enumerable: true,
    get: function () {
      return ne.remotePolicyDefaults;
    },
  });
  Object.defineProperty(_, "staticTierKeys", {
    enumerable: true,
    get: function () {
      return ne.staticTierKeys;
    },
  });
  Object.defineProperty(_, "isStaticTier3pKey", {
    enumerable: true,
    get: function () {
      return ne.isStaticTier3pKey;
    },
  });
  Object.defineProperty(_, "keysWithRemotePolicy", {
    enumerable: true,
    get: function () {
      return ne.keysWithRemotePolicy;
    },
  });
  Object.defineProperty(_, "appBehaviorMdmKeys", {
    enumerable: true,
    get: function () {
      return ne.appBehaviorMdmKeys;
    },
  });
  Object.defineProperty(_, "GROUP_DESCRIPTIONS", {
    enumerable: true,
    get: function () {
      return ne.GROUP_DESCRIPTIONS;
    },
  });
  Object.defineProperty(_, "OTLP_CONTENT_CATEGORIES", {
    enumerable: true,
    get: function () {
      return ne.OTLP_CONTENT_CATEGORIES;
    },
  });
  var ik = On();
  Object.defineProperty(_, "HelperScriptCreds", {
    enumerable: true,
    get: function () {
      return ik.HelperScriptCreds;
    },
  });
  Object.defineProperty(_, "InferenceConfig", {
    enumerable: true,
    get: function () {
      return ik.InferenceConfig;
    },
  });
  var sp = Bf();
  Object.defineProperty(_, "buildGroupServableSchema", {
    enumerable: true,
    get: function () {
      return sp.buildGroupServableSchema;
    },
  });
  Object.defineProperty(_, "GroupServableConfig", {
    enumerable: true,
    get: function () {
      return sp.GroupServableConfig;
    },
  });
  Object.defineProperty(_, "GroupSettings", {
    enumerable: true,
    get: function () {
      return sp.GroupSettings;
    },
  });
  var Oc = XO();
  Object.defineProperty(_, "buildHybridServableSchema", {
    enumerable: true,
    get: function () {
      return Oc.buildHybridServableSchema;
    },
  });
  Object.defineProperty(_, "HYBRID_SERVABLE_CREDENTIAL_KINDS", {
    enumerable: true,
    get: function () {
      return Oc.HYBRID_SERVABLE_CREDENTIAL_KINDS;
    },
  });
  Object.defineProperty(_, "HYBRID_SERVABLE_PROVIDERS", {
    enumerable: true,
    get: function () {
      return Oc.HYBRID_SERVABLE_PROVIDERS;
    },
  });
  Object.defineProperty(_, "refuseForHybrid", {
    enumerable: true,
    get: function () {
      return Oc.refuseForHybrid;
    },
  });
  var up = Vf();
  Object.defineProperty(_, "gatewayOverlayDropChecks", {
    enumerable: true,
    get: function () {
      return up.gatewayOverlayDropChecks;
    },
  });
  Object.defineProperty(_, "gatewayRefusedPathPrefixes", {
    enumerable: true,
    get: function () {
      return up.gatewayRefusedPathPrefixes;
    },
  });
  Object.defineProperty(_, "gatewayServableKeys", {
    enumerable: true,
    get: function () {
      return up.gatewayServableKeys;
    },
  });
  var bW = lc();
  Object.defineProperty(_, "pruneSchema", {
    enumerable: true,
    get: function () {
      return bW.pruneSchema;
    },
  });
  var vW = Gf();
  Object.defineProperty(_, "LEGACY_WIRE_SHAPES", {
    enumerable: true,
    get: function () {
      return vW.LEGACY_WIRE_SHAPES;
    },
  });
  var Aa = ii();
  Object.defineProperty(_, "CLUSTER_REGISTRY", {
    enumerable: true,
    get: function () {
      return Aa.CLUSTER_REGISTRY;
    },
  });
  Object.defineProperty(_, "flattenAll", {
    enumerable: true,
    get: function () {
      return Aa.flattenAll;
    },
  });
  Object.defineProperty(_, "flattenInference", {
    enumerable: true,
    get: function () {
      return Aa.flattenInference;
    },
  });
  Object.defineProperty(_, "unflattenAll", {
    enumerable: true,
    get: function () {
      return Aa.unflattenAll;
    },
  });
  Object.defineProperty(_, "unflattenInference", {
    enumerable: true,
    get: function () {
      return Aa.unflattenInference;
    },
  });
  var ok = f0();
  Object.defineProperty(_, "materializeRaw", {
    enumerable: true,
    get: function () {
      return ok.materializeRaw;
    },
  });
  Object.defineProperty(_, "mergeTiers", {
    enumerable: true,
    get: function () {
      return ok.mergeTiers;
    },
  });
  var wW = Qf();
  Object.defineProperty(_, "normalizeVersionedConfig", {
    enumerable: true,
    get: function () {
      return wW.normalize;
    },
  });
  var lr = _c();
  Object.defineProperty(_, "controlTypeOf", {
    enumerable: true,
    get: function () {
      return lr.controlTypeOf;
    },
  });
  Object.defineProperty(_, "FORM_FIELD_BY_ID", {
    enumerable: true,
    get: function () {
      return lr.FORM_FIELD_BY_ID;
    },
  });
  Object.defineProperty(_, "FORM_FIELDS", {
    enumerable: true,
    get: function () {
      return lr.FORM_FIELDS;
    },
  });
  Object.defineProperty(_, "getFormField", {
    enumerable: true,
    get: function () {
      return lr.getFormField;
    },
  });
  Object.defineProperty(_, "isFormFieldVisible", {
    enumerable: true,
    get: function () {
      return lr.isFormFieldVisible;
    },
  });
  Object.defineProperty(_, "itemColumnsOf", {
    enumerable: true,
    get: function () {
      return lr.itemColumnsOf;
    },
  });
  Object.defineProperty(_, "objectColumnsOf", {
    enumerable: true,
    get: function () {
      return lr.objectColumnsOf;
    },
  });
  Object.defineProperty(_, "optionValuesOf", {
    enumerable: true,
    get: function () {
      return lr.optionValuesOf;
    },
  });
  Object.defineProperty(_, "recordValueOptionsOf", {
    enumerable: true,
    get: function () {
      return lr.recordValueOptionsOf;
    },
  });
  Object.defineProperty(_, "setInferenceCredentialKind", {
    enumerable: true,
    get: function () {
      return lr.setInferenceCredentialKind;
    },
  });
  Object.defineProperty(_, "setInferenceProvider", {
    enumerable: true,
    get: function () {
      return lr.setInferenceProvider;
    },
  });
  Object.defineProperty(_, "subFieldsOf", {
    enumerable: true,
    get: function () {
      return lr.subFieldsOf;
    },
  });
  var wo = tc();
  Object.defineProperty(_, "BANNER_DEFAULT_BACKGROUND_COLOR", {
    enumerable: true,
    get: function () {
      return wo.BANNER_DEFAULT_BACKGROUND_COLOR;
    },
  });
  Object.defineProperty(_, "BANNER_DEFAULT_TEXT_COLOR", {
    enumerable: true,
    get: function () {
      return wo.BANNER_DEFAULT_TEXT_COLOR;
    },
  });
  Object.defineProperty(_, "isValidBannerHexColor", {
    enumerable: true,
    get: function () {
      return wo.isValidBannerHexColor;
    },
  });
  Object.defineProperty(_, "isValidBannerLinkUrl", {
    enumerable: true,
    get: function () {
      return wo.isValidBannerLinkUrl;
    },
  });
  Object.defineProperty(_, "resolveBannerConfig", {
    enumerable: true,
    get: function () {
      return wo.resolveBannerConfig;
    },
  });
  Object.defineProperty(_, "toRenderableBannerConfig", {
    enumerable: true,
    get: function () {
      return wo.toRenderableBannerConfig;
    },
  });
  var ak = G0();
  Object.defineProperty(_, "anchorSlug", {
    enumerable: true,
    get: function () {
      return ak.anchorSlug;
    },
  });
  Object.defineProperty(_, "docsTableRows", {
    enumerable: true,
    get: function () {
      return ak.docsTableRows;
    },
  });
  var kc = ip();
  Object.defineProperty(_, "CONFIGURATION_CATEGORIES", {
    enumerable: true,
    get: function () {
      return kc.CONFIGURATION_CATEGORIES;
    },
  });
  Object.defineProperty(_, "isEmptySubValue", {
    enumerable: true,
    get: function () {
      return kc.isEmptySubValue;
    },
  });
  Object.defineProperty(_, "missingSubFields", {
    enumerable: true,
    get: function () {
      return kc.missingSubFields;
    },
  });
  Object.defineProperty(_, "stripHiddenSubFields", {
    enumerable: true,
    get: function () {
      return kc.stripHiddenSubFields;
    },
  });
  var Ye = Ze();
  Object.defineProperty(_, "acceptsWildcard", {
    enumerable: true,
    get: function () {
      return Ye.acceptsWildcard;
    },
  });
  Object.defineProperty(_, "annotate", {
    enumerable: true,
    get: function () {
      return Ye.annotate;
    },
  });
  Object.defineProperty(_, "annotationsOf", {
    enumerable: true,
    get: function () {
      return Ye.annotationsOf;
    },
  });
  Object.defineProperty(_, "discriminatorArmsOf", {
    enumerable: true,
    get: function () {
      return Ye.discriminatorArmsOf;
    },
  });
  Object.defineProperty(_, "discriminatorKeyOf", {
    enumerable: true,
    get: function () {
      return Ye.discriminatorKeyOf;
    },
  });
  Object.defineProperty(_, "displayDefault", {
    enumerable: true,
    get: function () {
      return Ye.displayDefault;
    },
  });
  Object.defineProperty(_, "effectiveVisibility", {
    enumerable: true,
    get: function () {
      return Ye.effectiveVisibility;
    },
  });
  Object.defineProperty(_, "field", {
    enumerable: true,
    get: function () {
      return Ye.field;
    },
  });
  Object.defineProperty(_, "fieldMetaForNode", {
    enumerable: true,
    get: function () {
      return Ye.fieldMetaForNode;
    },
  });
  Object.defineProperty(_, "filePath", {
    enumerable: true,
    get: function () {
      return Ye.filePath;
    },
  });
  Object.defineProperty(_, "folderPath", {
    enumerable: true,
    get: function () {
      return Ye.folderPath;
    },
  });
  Object.defineProperty(_, "globPattern", {
    enumerable: true,
    get: function () {
      return Ye.globPattern;
    },
  });
  Object.defineProperty(_, "isNotHostedServable", {
    enumerable: true,
    get: function () {
      return Ye.isNotHostedServable;
    },
  });
  Object.defineProperty(_, "isUrlString", {
    enumerable: true,
    get: function () {
      return Ye.isUrlString;
    },
  });
  Object.defineProperty(_, "longDescription", {
    enumerable: true,
    get: function () {
      return Ye.longDescription;
    },
  });
  Object.defineProperty(_, "pathKindOf", {
    enumerable: true,
    get: function () {
      return Ye.pathKindOf;
    },
  });
  Object.defineProperty(_, "presetForItem", {
    enumerable: true,
    get: function () {
      return Ye.presetForItem;
    },
  });
  Object.defineProperty(_, "notHostedServable", {
    enumerable: true,
    get: function () {
      return Ye.notHostedServable;
    },
  });
  Object.defineProperty(_, "redact", {
    enumerable: true,
    get: function () {
      return Ye.redact;
    },
  });
  Object.defineProperty(_, "redactPolicyOf", {
    enumerable: true,
    get: function () {
      return Ye.redactPolicyOf;
    },
  });
  Object.defineProperty(_, "remotePolicyOf", {
    enumerable: true,
    get: function () {
      return Ye.remotePolicyOf;
    },
  });
  Object.defineProperty(_, "runtimeDefault", {
    enumerable: true,
    get: function () {
      return Ye.runtimeDefault;
    },
  });
  Object.defineProperty(_, "SHORT_DESCRIPTION_MAX_LENGTH", {
    enumerable: true,
    get: function () {
      return Ye.SHORT_DESCRIPTION_MAX_LENGTH;
    },
  });
  Object.defineProperty(_, "shortDescription", {
    enumerable: true,
    get: function () {
      return Ye.shortDescription;
    },
  });
  Object.defineProperty(_, "subfield", {
    enumerable: true,
    get: function () {
      return Ye.subfield;
    },
  });
  Object.defineProperty(_, "urlString", {
    enumerable: true,
    get: function () {
      return Ye.urlString;
    },
  });
  var cp = Lt();
  Object.defineProperty(_, "hasActiveBootstrap", {
    enumerable: true,
    get: function () {
      return cp.hasActiveBootstrap;
    },
  });
  Object.defineProperty(_, "HELPER_SCRIPT_GROUP", {
    enumerable: true,
    get: function () {
      return cp.HELPER_SCRIPT_GROUP;
    },
  });
  Object.defineProperty(_, "MODELS_GROUP", {
    enumerable: true,
    get: function () {
      return cp.MODELS_GROUP;
    },
  });
  var SW = On();
  Object.defineProperty(_, "providerHasDiscovery", {
    enumerable: true,
    get: function () {
      return SW.providerHasDiscovery;
    },
  });
  var sk = tk();
  Object.defineProperty(_, "computeEgressRequirements", {
    enumerable: true,
    get: function () {
      return sk.computeEgressRequirements;
    },
  });
  Object.defineProperty(_, "egressRequirementLabel", {
    enumerable: true,
    get: function () {
      return sk.egressRequirementLabel;
    },
  });
  var So = ap();
  Object.defineProperty(_, "EGRESS_SERVICES", {
    enumerable: true,
    get: function () {
      return So.EGRESS_SERVICES;
    },
  });
  Object.defineProperty(_, "egressServiceKeys", {
    enumerable: true,
    get: function () {
      return So.egressServiceKeys;
    },
  });
  Object.defineProperty(_, "enabledServicesFromConfig", {
    enumerable: true,
    get: function () {
      return So.enabledServicesFromConfig;
    },
  });
  Object.defineProperty(_, "hostsForService", {
    enumerable: true,
    get: function () {
      return So.hostsForService;
    },
  });
  Object.defineProperty(_, "rendererEgressRules", {
    enumerable: true,
    get: function () {
      return So.rendererEgressRules;
    },
  });
  Object.defineProperty(_, "resolveEndpoints", {
    enumerable: true,
    get: function () {
      return So.resolveEndpoints;
    },
  });
  rk(ht(), _);
  rk(mf(), _);
  var Oo = zu();
  Object.defineProperty(_, "DEFAULT_INFERENCE_PROVIDER", {
    enumerable: true,
    get: function () {
      return Oo.DEFAULT_INFERENCE_PROVIDER;
    },
  });
  Object.defineProperty(_, "getProviderLabel", {
    enumerable: true,
    get: function () {
      return Oo.getProviderLabel;
    },
  });
  Object.defineProperty(_, "INFERENCE_CREDENTIAL_KINDS", {
    enumerable: true,
    get: function () {
      return Oo.INFERENCE_CREDENTIAL_KINDS;
    },
  });
  Object.defineProperty(_, "KIND_PRECEDENCE", {
    enumerable: true,
    get: function () {
      return Oo.KIND_PRECEDENCE;
    },
  });
  Object.defineProperty(_, "PROVIDER_DISPLAY", {
    enumerable: true,
    get: function () {
      return Oo.PROVIDER_DISPLAY;
    },
  });
  Object.defineProperty(_, "PROVIDERS", {
    enumerable: true,
    get: function () {
      return Oo.PROVIDERS;
    },
  });
  var ko = Zu();
  Object.defineProperty(_, "isApprovalRequiredToolPolicy", {
    enumerable: true,
    get: function () {
      return ko.isApprovalRequiredToolPolicy;
    },
  });
  Object.defineProperty(_, "lookupMcpToolPolicy", {
    enumerable: true,
    get: function () {
      return ko.lookupMcpToolPolicy;
    },
  });
  Object.defineProperty(_, "strictestToolPolicy", {
    enumerable: true,
    get: function () {
      return ko.strictestToolPolicy;
    },
  });
  Object.defineProperty(_, "TOOL_POLICY_EDITOR_VALUES", {
    enumerable: true,
    get: function () {
      return ko.TOOL_POLICY_EDITOR_VALUES;
    },
  });
  Object.defineProperty(_, "TOOL_POLICY_VALUES", {
    enumerable: true,
    get: function () {
      return ko.TOOL_POLICY_VALUES;
    },
  });
  Object.defineProperty(_, "toolPolicyKeyGlobMatch", {
    enumerable: true,
    get: function () {
      return ko.toolPolicyKeyGlobMatch;
    },
  });
});

var dk = S(function ($c) {
  Object.defineProperty($c, "__esModule", { value: true });
  $c.HYBRID_CONSENT_EXEMPT_KEYS = $c.nonBootstrapableKeys = $c.bootstrapableKeys = void 0;
  $c.parseBootstrapConfig = PW;
  $c.collectConsentTargets = jW;
  var OW = Ze(),
    Pc = Wt(),
    kW = Qf(),
    xn = _r(),
    ck = _r();
  Object.defineProperty($c, "bootstrapableKeys", {
    enumerable: true,
    get: function () {
      return ck.bootstrapableKeys;
    },
  });
  Object.defineProperty($c, "nonBootstrapableKeys", {
    enumerable: true,
    get: function () {
      return ck.nonBootstrapableKeys;
    },
  });
  $c.HYBRID_CONSENT_EXEMPT_KEYS = new Set([
    "inferenceBedrockSsoAccountId",
    "inferenceBedrockSsoRegion",
    "inferenceBedrockSsoRoleName",
    "inferenceBedrockSsoStartUrl",
  ]);
  function PW(e, t, n, i = { includeInternal: false }, r) {
    var o;
    if (!e || typeof e !== "object" || Array.isArray(e))
      return { config: {}, rejected: [], warnings: [], keyedParseErrors: [] };
    let { flat: s, warnings: u } = (0, kW.normalize)(e, n),
      c = typeof s.expiresAt === "number" && s.expiresAt > 0 ? s.expiresAt : void 0,
      d = (0, xn.resolveLegacyFlatKeys)(s, (y) =>
        n === null || n === void 0 ? void 0 : n("bootstrap intake warning", { msg: y }),
      ),
      f = [];
    for (let y of u) {
      let v = (o = /^Failed to parse bootstrap cluster "([^"]+)"/.exec(y)) === null || o === void 0 ? void 0 : o[1];
      if (!v) continue;
      for (let [k, P] of xn.FLAT_KEY_TO_NESTED_PATH) if (P[0] === v) f.push({ key: k, msg: y });
    }
    let p = (0, xn.parseConfigRecord)(d, {
      allowedKeys: (0, xn.bootstrapableKeys)(i),
      onInvalid: (y, v) => {
        f.push({ key: y, msg: v }),
          n === null || n === void 0 || n("bootstrap key failed validation", { key: y, msg: v });
      },
    });
    if (n) {
      let y = Object.keys(d).filter((P) => P !== "expiresAt"),
        v = Object.keys(p),
        k = y.filter((P) => !v.includes(P));
      if (k.length > 0) n("bootstrap intake dropped keys", { sentKeys: y, keptKeys: v, dropped: k });
    }
    let h = EW(p, {
      trustedOrigin: t,
      relaxServerIssuedPin: r === null || r === void 0 ? void 0 : r.relaxServerIssuedPin,
      onDebug: n,
      onPolicyError: (y, v) => f.push({ key: y, msg: v }),
    });
    if (c !== void 0) p.expiresAt = c;
    return { config: p, rejected: h, warnings: u, keyedParseErrors: f };
  }
  function EW(e, t) {
    var n, i, r, o, s;
    let u = [];
    for (let c of (0, xn.bootstrapableKeys)({ includeInternal: true })) {
      let d = e[c];
      if (d === void 0) continue;
      let f = (0, xn.getFieldMeta)(c).remotePolicy;
      if ((f === null || f === void 0 ? void 0 : f.rejectLoopback) && typeof d === "string" && Ec(d)) {
        delete e[c],
          (n = t.onDebug) === null ||
            n === void 0 ||
            n.call(t, "bootstrap rejected loopback/non-https URL", { key: c }),
          (i = t.onPolicyError) === null ||
            i === void 0 ||
            i.call(t, c, `Bootstrap intake dropped "${c}": loopback or non-https URL`);
        continue;
      }
      if (
        (f === null || f === void 0 ? void 0 : f.originPinned) &&
        t.trustedOrigin !== void 0 &&
        !(t.relaxServerIssuedPin && f.originPinned.carries === "server-issued-credential") &&
        typeof d === "string"
      ) {
        if (!AW(d, t.trustedOrigin)) {
          delete e[c],
            u.push(c),
            (r = t.onPolicyError) === null ||
              r === void 0 ||
              r.call(t, c, `Bootstrap intake dropped "${c}": origin does not match the bootstrap server`);
          continue;
        }
      }
      if ((f === null || f === void 0 ? void 0 : f.mcpUrlHygiene) && Array.isArray(d)) {
        let { kept: p, dropped: h } = IW(d, c, t.onDebug);
        if (h > 0)
          (o = t.onPolicyError) === null ||
            o === void 0 ||
            o.call(
              t,
              c,
              `${h} of ${d.length} "${c}" bootstrap entr${d.length === 1 ? "y" : "ies"} dropped for loopback/non-https URL`,
            );
        if (p.length === 0) delete e[c];
        else e[c] = p;
      }
      if ((f === null || f === void 0 ? void 0 : f.marketplaceUrlHygiene) && Array.isArray(d)) {
        let { kept: p, dropped: h } = $W(d, c, t.onDebug);
        if (h > 0)
          (s = t.onPolicyError) === null ||
            s === void 0 ||
            s.call(
              t,
              c,
              `${h} of ${d.length} "${c}" bootstrap entr${d.length === 1 ? "y" : "ies"} dropped for loopback/non-https URL`,
            );
        e[c] = p;
      }
    }
    return u;
  }
  function $W(e, t, n) {
    let i = [],
      r = 0;
    for (let [o, s] of e.entries()) {
      if (!s || typeof s !== "object") continue;
      let u = s;
      if (typeof u.url === "string" && Ec(u.url)) {
        (r += 1),
          n === null ||
            n === void 0 ||
            n("bootstrap dropped loopback/non-https marketplace entry", { key: t, index: o });
        continue;
      }
      i.push(s);
    }
    return { kept: i, dropped: r };
  }
  function IW(e, t, n) {
    var i;
    let r = [],
      o = 0;
    for (let s of e) {
      let u = TW(s);
      if (u !== void 0 && Ec(u)) {
        (o += 1), n === null || n === void 0 || n("bootstrap dropped loopback-url MCP entry", { key: t, name: s.name });
        continue;
      }
      if (
        !(0, Pc.isBuiltinMcpEntry)(s) &&
        s.transport !== "stdio" &&
        ((i = s.oauth) === null || i === void 0 ? void 0 : i.mode) === "byo" &&
        (0, Pc.byoAsSelectionUrls)(s.oauth.asSelection).some(Ec)
      ) {
        (o += 1),
          n === null ||
            n === void 0 ||
            n("bootstrap dropped MCP entry with loopback OAuth endpoint", { key: t, name: s.name });
        continue;
      }
      r.push(s);
    }
    return { kept: r, dropped: o };
  }
  function TW(e) {
    if ((0, Pc.isBuiltinMcpEntry)(e)) return "customUrl" in e ? e.customUrl : void 0;
    return e.transport === "stdio" ? void 0 : e.url;
  }
  function AW(e, t) {
    try {
      return new URL(e).origin === t;
    } catch (n) {
      return false;
    }
  }
  var RW = (e, t) =>
      t && typeof t === "object" && !Array.isArray(t)
        ? Object.fromEntries(Object.entries(t).sort(([n], [i]) => (n < i ? -1 : n > i ? 1 : 0)))
        : t,
    uk = (e) => (typeof e === "string" ? e : JSON.stringify(e, RW));
  function jW(e, t) {
    var n;
    let i = [];
    for (let r of (0, xn.keysWithRemotePolicy)("requiresUserConsent")) {
      if ((n = t === null || t === void 0 ? void 0 : t.exemptKeys) === null || n === void 0 ? void 0 : n.has(r))
        continue;
      let o = e[r];
      if (o !== void 0) i.push({ label: r, value: uk(o), key: r });
    }
    for (let r of (0, xn.bootstrapableKeys)({ includeInternal: true })) {
      let o = e[r];
      if (!Array.isArray(o)) continue;
      let s = (0, OW.consentRequiringSubfieldKeys)(xn.FlatManagedConfig.shape[r]);
      if (s.size === 0) continue;
      for (let [u, c] of o.entries()) {
        let d = [c.name, c.repo, c.url].find((p) => typeof p === "string"),
          f = {};
        for (let p of s) {
          let h = p.split(".").reduce((y, v) => (y === null || y === void 0 ? void 0 : y[v]), c);
          if (h !== void 0) f[p] = h;
        }
        if (Object.keys(f).length > 0)
          i.push({
            label: `${r}[${d !== null && d !== void 0 ? d : u}]`,
            value: uk(f),
            key: r,
            entryIndex: u,
            entryId: d,
          });
      }
    }
    return i;
  }
  function Ec(e) {
    try {
      let { protocol: t, hostname: n } = new URL(e);
      return t !== "https:" || Pc.LOOPBACK_HOSTS.has(n);
    } catch (t) {
      return true;
    }
  }
});

var hk = S(function (gk) {
  Object.defineProperty(gk, "__esModule", { value: true });
  gk.findingBlocksServing = dp;
  gk.validateForGatewayServing = ZW;
  var fk = tc(),
    xW = dk(),
    fp = lo(),
    pp = Vf(),
    mk = oc();
  function dp(e) {
    if (e.kind === "drop-report") return e.dropKind !== "clamp";
    return e.kind !== "intake-warning" && e.kind !== "banner-text-unused";
  }
  function MW(e, t) {
    let n = Object.keys((0, mk.resolveLegacyFlatKeys)({ [e]: true }))[0];
    if (n !== void 0 && n !== e)
      return t.has(n)
        ? `deprecated name for ${n} \u2014 use ${n}`
        : `deprecated name for ${n}, which is not operator-settable here`;
    return "unknown desktop key \u2014 fix the typo, or upgrade the gateway if this key was added in a newer Claude Desktop release";
  }
  function zW(e) {
    var t, n;
    if (LW().has(e))
      return "not deliverable via bootstrap \u2014 set it through MDM/local managed configuration instead";
    let i =
        (n = (t = fp.FLAT_KEY_TO_NESTED_PATH.get(e)) === null || t === void 0 ? void 0 : t.join(".")) !== null &&
        n !== void 0
          ? n
          : e,
      r = UW().find((o) => i === o || i.startsWith(`${o}.`));
    if (r !== void 0 && (r === "otlp" || r.startsWith("otlp.")))
      return "set by the gateway \u2014 it relays OTLP itself; configure `telemetry.forward_to` instead";
    if (r !== void 0 && (r.startsWith("inference") || r === "models.list"))
      return "set by the gateway from its own configuration \u2014 configure `upstreams:`/`models:` instead";
    return "not operator-settable through the gateway desktop: overlay";
  }
  var Ra;
  function LW() {
    return (Ra !== null && Ra !== void 0) || (Ra = new Set((0, fp.nonBootstrapableKeys)({ includeInternal: true }))), Ra;
  }
  var ja;
  function UW() {
    return (ja !== null && ja !== void 0) || (ja = (0, pp.gatewayRefusedPathPrefixes)()), ja;
  }
  var pk = new Map();
  function NW(e) {
    let t = pk.get(e);
    if (t === void 0) {
      let n = (0, pp.gatewayServableKeys)({ includeInternal: e });
      (t = { list: n, set: new Set(n) }), pk.set(e, t);
    }
    return t;
  }
  function ZW(e, t = {}) {
    var n, i;
    if (e === null || typeof e !== "object" || Array.isArray(e))
      return [{ key: "", kind: "overlay-not-object", msg: "expected a mapping of desktop keys" }];
    let r = (n = t.includeInternal) !== null && n !== void 0 ? n : false,
      { list: o, set: s } = NW(r),
      u = [],
      c = () => u.some(dp),
      d = {};
    for (let [h, y] of Object.entries(e)) {
      if (y === void 0) continue;
      if (s.has(h))
        if (y === null || y === "")
          u.push({
            key: h,
            kind: "explicit-empty",
            msg: `${h}: explicitly empty \u2014 set a value, or remove the key to use the Desktop default`,
          });
        else d[h] = y;
      else if ((0, fp.tryGetFieldMeta)(h) === void 0) u.push({ key: h, kind: "unknown-key", msg: `${h}: ${MW(h, s)}` });
      else u.push({ key: h, kind: "refused-key", msg: `${h}: ${zW(h)}` });
    }
    let f = (0, pp.gatewayOverlayDropChecks)();
    for (let [h, y] of Object.entries(f))
      if (d[h] !== void 0)
        y(d[h], (v, k) =>
          u.push({ key: h, kind: "drop-report", msg: v, dropKind: k !== null && k !== void 0 ? k : "drop" }),
        );
    let p = (0, mk.parseConfigRecord)(d, {
      allowedKeys: o,
      onInvalid: (h, y) => {
        if (u.some((v) => v.key === h && v.msg === y)) return;
        u.push({ key: h, kind: "parse-error", msg: y });
      },
    });
    for (let h of Object.keys(d))
      if (p[h] === void 0 && !u.some((y) => y.key === h && dp(y)))
        u.push({
          key: h,
          kind: "not-representable",
          msg: `${h}: value not representable \u2014 the desktop parser dropped it`,
        });
    if (!c()) {
      let h = (0, xW.parseBootstrapConfig)(p, t.trustedOrigin, void 0, { includeInternal: r });
      for (let y of h.keyedParseErrors) u.push({ key: y.key, kind: "intake-rejection", msg: y.msg });
      for (let y of h.warnings) u.push({ key: "", kind: "intake-warning", msg: y });
      if (!c()) {
        let y = h.config;
        for (let v of Object.keys(p))
          if (y[v] === void 0)
            u.push({
              key: v,
              kind: "intake-deletion",
              msg: `${v}: every desktop would silently discard this value (the intake deletes it) \u2014 fix the value or remove the key`,
            });
      }
      if (!c() && p.banner !== void 0) {
        let y = (0, fk.resolveBannerConfig)(p.banner);
        if (y.renders === false && y.reason === "invalid")
          u.push({
            key: "banner",
            kind: "banner-suppressed",
            msg: `banner: every desktop would suppress this banner (invalid ${(i = y.field) !== null && i !== void 0 ? i : "value"} \u2014 colors are six-digit hex; text has a hard length cap)`,
          });
        let v = p.banner.linkUrl,
          k = y.renders === false && y.reason === "disabled";
        if (!k && v !== void 0 && !(0, fk.isValidBannerLinkUrl)(v))
          u.push({
            key: "banner",
            kind: "banner-link-invalid",
            msg: "banner.linkUrl: every desktop would drop this link (must be an https URL)",
          });
        if (k && p.banner.text !== void 0)
          u.push({
            key: "banner",
            kind: "banner-text-unused",
            msg: "banner.text is set but the banner is not enabled \u2014 it renders nowhere; set banner.enabled: true if it should show",
          });
      }
    }
    return u;
  }
});

export { hk, lp };
