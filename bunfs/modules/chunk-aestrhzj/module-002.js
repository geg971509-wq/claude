// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { S } from "/$bunfs/root/modules/chunk-aestrhzj/prelude.js";
import "/$bunfs/root/modules/chunk-aestrhzj/module-001.js";

var Ul = S(function (Xg, qo) {
  (function () {
    var e, t, n, i, r, o, s, u, c;
    if (((t = {}), (u = this), typeof qo < "u" && qo !== null && qo.exports)) qo.exports = t;
    else u.ipaddr = t;
    (s = function (d, f, p, h) {
      var y, v;
      if (d.length !== f.length) throw Error("ipaddr: cannot match CIDR for objects with different lengths");
      y = 0;
      while (h > 0) {
        if (((v = p - h), v < 0)) v = 0;
        if (d[y] >> v !== f[y] >> v) return !1;
        (h -= p), (y += 1);
      }
      return !0;
    }),
      (t.subnetMatch = function (d, f, p) {
        var h, y, v, k, P;
        if (p == null) p = "unicast";
        for (v in f) {
          if (((k = f[v]), k[0] && !(k[0] instanceof Array))) k = [k];
          for (h = 0, y = k.length; h < y; h++)
            if (((P = k[h]), d.kind() === P[0].kind())) {
              if (d.match.apply(d, P)) return v;
            }
        }
        return p;
      }),
      (t.IPv4 = (function () {
        function d(f) {
          var p, h, y;
          if (f.length !== 4) throw Error("ipaddr: ipv4 octet count should be 4");
          for (p = 0, h = f.length; p < h; p++)
            if (((y = f[p]), !(0 <= y && y <= 255))) throw Error("ipaddr: ipv4 octet should fit in 8 bits");
          this.octets = f;
        }
        return (
          (d.prototype.kind = function () {
            return "ipv4";
          }),
          (d.prototype.toString = function () {
            return this.octets.join(".");
          }),
          (d.prototype.toNormalizedString = function () {
            return this.toString();
          }),
          (d.prototype.toByteArray = function () {
            return this.octets.slice(0);
          }),
          (d.prototype.match = function (f, p) {
            var h;
            if (p === void 0) (h = f), (f = h[0]), (p = h[1]);
            if (f.kind() !== "ipv4") throw Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
            return s(this.octets, f.octets, 8, p);
          }),
          (d.prototype.SpecialRanges = {
            unspecified: [[new d([0, 0, 0, 0]), 8]],
            broadcast: [[new d([255, 255, 255, 255]), 32]],
            multicast: [[new d([224, 0, 0, 0]), 4]],
            linkLocal: [[new d([169, 254, 0, 0]), 16]],
            loopback: [[new d([127, 0, 0, 0]), 8]],
            carrierGradeNat: [[new d([100, 64, 0, 0]), 10]],
            private: [
              [new d([10, 0, 0, 0]), 8],
              [new d([172, 16, 0, 0]), 12],
              [new d([192, 168, 0, 0]), 16],
            ],
            reserved: [
              [new d([192, 0, 0, 0]), 24],
              [new d([192, 0, 2, 0]), 24],
              [new d([192, 88, 99, 0]), 24],
              [new d([198, 51, 100, 0]), 24],
              [new d([203, 0, 113, 0]), 24],
              [new d([240, 0, 0, 0]), 4],
            ],
          }),
          (d.prototype.range = function () {
            return t.subnetMatch(this, this.SpecialRanges);
          }),
          (d.prototype.toIPv4MappedAddress = function () {
            return t.IPv6.parse("::ffff:" + this.toString());
          }),
          (d.prototype.prefixLengthFromSubnetMask = function () {
            var f, p, h, y, v, k, P;
            (P = { 0: 8, 128: 7, 192: 6, 224: 5, 240: 4, 248: 3, 252: 2, 254: 1, 255: 0 }), (f = 0), (v = !1);
            for (p = h = 3; h >= 0; p = h += -1)
              if (((y = this.octets[p]), y in P)) {
                if (((k = P[y]), v && k !== 0)) return null;
                if (k !== 8) v = !0;
                f += k;
              } else return null;
            return 32 - f;
          }),
          d
        );
      })()),
      (n = "(0?\\d+|0x[a-f0-9]+)"),
      (i = {
        fourOctet: new RegExp("^" + n + "\\." + n + "\\." + n + "\\." + n + "$", "i"),
        longValue: new RegExp("^" + n + "$", "i"),
      }),
      (t.IPv4.parser = function (d) {
        var f, p, h, y, v;
        if (
          ((p = function (k) {
            if (k[0] === "0" && k[1] !== "x") return parseInt(k, 8);
            else return parseInt(k);
          }),
          (f = d.match(i.fourOctet)))
        )
          return (function () {
            var k, P, B, Q;
            (B = f.slice(1, 6)), (Q = []);
            for (k = 0, P = B.length; k < P; k++) (h = B[k]), Q.push(p(h));
            return Q;
          })();
        else if ((f = d.match(i.longValue))) {
          if (((v = p(f[1])), v > 4294967295 || v < 0)) throw Error("ipaddr: address outside defined range");
          return (function () {
            var k, P;
            P = [];
            for (y = k = 0; k <= 24; y = k += 8) P.push((v >> y) & 255);
            return P;
          })().reverse();
        } else return null;
      }),
      (t.IPv6 = (function () {
        function d(f, p) {
          var h, y, v, k, P, B;
          if (f.length === 16) {
            this.parts = [];
            for (h = y = 0; y <= 14; h = y += 2) this.parts.push((f[h] << 8) | f[h + 1]);
          } else if (f.length === 8) this.parts = f;
          else throw Error("ipaddr: ipv6 part count should be 8 or 16");
          B = this.parts;
          for (v = 0, k = B.length; v < k; v++)
            if (((P = B[v]), !(0 <= P && P <= 65535))) throw Error("ipaddr: ipv6 part should fit in 16 bits");
          if (p) this.zoneId = p;
        }
        return (
          (d.prototype.kind = function () {
            return "ipv6";
          }),
          (d.prototype.toString = function () {
            return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/, "::");
          }),
          (d.prototype.toRFC5952String = function () {
            var f, p, h, y, v;
            (y = /((^|:)(0(:|$)){2,})/g), (v = this.toNormalizedString()), (f = 0), (p = -1);
            while ((h = y.exec(v))) if (h[0].length > p) (f = h.index), (p = h[0].length);
            if (p < 0) return v;
            return v.substring(0, f) + "::" + v.substring(f + p);
          }),
          (d.prototype.toByteArray = function () {
            var f, p, h, y, v;
            (f = []), (v = this.parts);
            for (p = 0, h = v.length; p < h; p++) (y = v[p]), f.push(y >> 8), f.push(y & 255);
            return f;
          }),
          (d.prototype.toNormalizedString = function () {
            var f, p, h;
            if (
              ((f = function () {
                var y, v, k, P;
                (k = this.parts), (P = []);
                for (y = 0, v = k.length; y < v; y++) (p = k[y]), P.push(p.toString(16));
                return P;
              }
                .call(this)
                .join(":")),
              (h = ""),
              this.zoneId)
            )
              h = "%" + this.zoneId;
            return f + h;
          }),
          (d.prototype.toFixedLengthString = function () {
            var f, p, h;
            if (
              ((f = function () {
                var y, v, k, P;
                (k = this.parts), (P = []);
                for (y = 0, v = k.length; y < v; y++) (p = k[y]), P.push(p.toString(16).padStart(4, "0"));
                return P;
              }
                .call(this)
                .join(":")),
              (h = ""),
              this.zoneId)
            )
              h = "%" + this.zoneId;
            return f + h;
          }),
          (d.prototype.match = function (f, p) {
            var h;
            if (p === void 0) (h = f), (f = h[0]), (p = h[1]);
            if (f.kind() !== "ipv6") throw Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
            return s(this.parts, f.parts, 16, p);
          }),
          (d.prototype.SpecialRanges = {
            unspecified: [new d([0, 0, 0, 0, 0, 0, 0, 0]), 128],
            linkLocal: [new d([65152, 0, 0, 0, 0, 0, 0, 0]), 10],
            multicast: [new d([65280, 0, 0, 0, 0, 0, 0, 0]), 8],
            loopback: [new d([0, 0, 0, 0, 0, 0, 0, 1]), 128],
            uniqueLocal: [new d([64512, 0, 0, 0, 0, 0, 0, 0]), 7],
            ipv4Mapped: [new d([0, 0, 0, 0, 0, 65535, 0, 0]), 96],
            rfc6145: [new d([0, 0, 0, 0, 65535, 0, 0, 0]), 96],
            rfc6052: [new d([100, 65435, 0, 0, 0, 0, 0, 0]), 96],
            "6to4": [new d([8194, 0, 0, 0, 0, 0, 0, 0]), 16],
            teredo: [new d([8193, 0, 0, 0, 0, 0, 0, 0]), 32],
            reserved: [[new d([8193, 3512, 0, 0, 0, 0, 0, 0]), 32]],
          }),
          (d.prototype.range = function () {
            return t.subnetMatch(this, this.SpecialRanges);
          }),
          (d.prototype.isIPv4MappedAddress = function () {
            return this.range() === "ipv4Mapped";
          }),
          (d.prototype.toIPv4Address = function () {
            var f, p, h;
            if (!this.isIPv4MappedAddress()) throw Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
            return (h = this.parts.slice(-2)), (f = h[0]), (p = h[1]), new t.IPv4([f >> 8, f & 255, p >> 8, p & 255]);
          }),
          (d.prototype.prefixLengthFromSubnetMask = function () {
            var f, p, h, y, v, k, P;
            (P = {
              0: 16,
              32768: 15,
              49152: 14,
              57344: 13,
              61440: 12,
              63488: 11,
              64512: 10,
              65024: 9,
              65280: 8,
              65408: 7,
              65472: 6,
              65504: 5,
              65520: 4,
              65528: 3,
              65532: 2,
              65534: 1,
              65535: 0,
            }),
              (f = 0),
              (v = !1);
            for (p = h = 7; h >= 0; p = h += -1)
              if (((y = this.parts[p]), y in P)) {
                if (((k = P[y]), v && k !== 0)) return null;
                if (k !== 16) v = !0;
                f += k;
              } else return null;
            return 128 - f;
          }),
          d
        );
      })()),
      (r = "(?:[0-9a-f]+::?)+"),
      (c = "%[0-9a-z]{1,}"),
      (o = {
        zoneIndex: new RegExp(c, "i"),
        native: new RegExp("^(::)?(" + r + ")?([0-9a-f]+)?(::)?(" + c + ")?$", "i"),
        transitional: new RegExp(
          "^((?:" + r + ")|(?:::)(?:" + r + ")?)" + (n + "\\." + n + "\\." + n + "\\." + n) + ("(" + c + ")?$"),
          "i",
        ),
      }),
      (e = function (d, f) {
        var p, h, y, v, k, P;
        if (d.indexOf("::") !== d.lastIndexOf("::")) return null;
        if (((P = (d.match(o.zoneIndex) || [])[0]), P)) (P = P.substring(1)), (d = d.replace(/%.+$/, ""));
        (p = 0), (h = -1);
        while ((h = d.indexOf(":", h + 1)) >= 0) p++;
        if (d.substr(0, 2) === "::") p--;
        if (d.substr(-2, 2) === "::") p--;
        if (p > f) return null;
        (k = f - p), (v = ":");
        while (k--) v += "0:";
        if (((d = d.replace("::", v)), d[0] === ":")) d = d.slice(1);
        if (d[d.length - 1] === ":") d = d.slice(0, -1);
        return (
          (f = (function () {
            var B, Q, ge, re;
            (ge = d.split(":")), (re = []);
            for (B = 0, Q = ge.length; B < Q; B++) (y = ge[B]), re.push(parseInt(y, 16));
            return re;
          })()),
          { parts: f, zoneId: P }
        );
      }),
      (t.IPv6.parser = function (d) {
        var f, p, h, y, v, k, P;
        if (o.native.test(d)) return e(d, 8);
        else if ((y = d.match(o.transitional))) {
          if (((P = y[6] || ""), (f = e(y[1].slice(0, -1) + P, 6)), f.parts)) {
            k = [parseInt(y[2]), parseInt(y[3]), parseInt(y[4]), parseInt(y[5])];
            for (p = 0, h = k.length; p < h; p++) if (((v = k[p]), !(0 <= v && v <= 255))) return null;
            return (
              f.parts.push((k[0] << 8) | k[1]), f.parts.push((k[2] << 8) | k[3]), { parts: f.parts, zoneId: f.zoneId }
            );
          }
        }
        return null;
      }),
      (t.IPv4.isIPv4 = t.IPv6.isIPv6 =
        function (d) {
          return this.parser(d) !== null;
        }),
      (t.IPv4.isValid = function (d) {
        var f;
        try {
          return new this(this.parser(d)), !0;
        } catch (p) {
          return (f = p), !1;
        }
      }),
      (t.IPv4.isValidFourPartDecimal = function (d) {
        if (t.IPv4.isValid(d) && d.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) return !0;
        else return !1;
      }),
      (t.IPv6.isValid = function (d) {
        var f, p;
        if (typeof d === "string" && d.indexOf(":") === -1) return !1;
        try {
          return (f = this.parser(d)), new this(f.parts, f.zoneId), !0;
        } catch (h) {
          return (p = h), !1;
        }
      }),
      (t.IPv4.parse = function (d) {
        var f = this.parser(d);
        if (f === null) throw Error("ipaddr: string is not formatted like ip address");
        return new this(f);
      }),
      (t.IPv6.parse = function (d) {
        var f = this.parser(d);
        if (f.parts === null) throw Error("ipaddr: string is not formatted like ip address");
        return new this(f.parts, f.zoneId);
      }),
      (t.IPv4.parseCIDR = function (d) {
        var f, p, h;
        if ((p = d.match(/^(.+)\/(\d+)$/))) {
          if (((f = parseInt(p[2])), f >= 0 && f <= 32))
            return (
              (h = [this.parse(p[1]), f]),
              Object.defineProperty(h, "toString", {
                value: function () {
                  return this.join("/");
                },
              }),
              h
            );
        }
        throw Error("ipaddr: string is not formatted like an IPv4 CIDR range");
      }),
      (t.IPv4.subnetMaskFromPrefixLength = function (d) {
        var f, p, h;
        if (((d = parseInt(d)), d < 0 || d > 32)) throw Error("ipaddr: invalid IPv4 prefix length");
        (h = [0, 0, 0, 0]), (p = 0), (f = Math.floor(d / 8));
        while (p < f) (h[p] = 255), p++;
        if (f < 4) h[f] = (Math.pow(2, d % 8) - 1) << (8 - (d % 8));
        return new this(h);
      }),
      (t.IPv4.broadcastAddressFromCIDR = function (d) {
        var f, p, h, y, v, k;
        try {
          (f = this.parseCIDR(d)),
            (y = f[0].toByteArray()),
            (k = this.subnetMaskFromPrefixLength(f[1]).toByteArray()),
            (v = []),
            (h = 0);
          while (h < 4) v.push(parseInt(y[h], 10) | (parseInt(k[h], 10) ^ 255)), h++;
          return new this(v);
        } catch (P) {
          throw ((p = P), Error("ipaddr: the address does not have IPv4 CIDR format"));
        }
      }),
      (t.IPv4.networkAddressFromCIDR = function (d) {
        var f, p, h, y, v, k;
        try {
          (f = this.parseCIDR(d)),
            (y = f[0].toByteArray()),
            (k = this.subnetMaskFromPrefixLength(f[1]).toByteArray()),
            (v = []),
            (h = 0);
          while (h < 4) v.push(parseInt(y[h], 10) & parseInt(k[h], 10)), h++;
          return new this(v);
        } catch (P) {
          throw ((p = P), Error("ipaddr: the address does not have IPv4 CIDR format"));
        }
      }),
      (t.IPv6.parseCIDR = function (d) {
        var f, p, h;
        if ((p = d.match(/^(.+)\/(\d+)$/))) {
          if (((f = parseInt(p[2])), f >= 0 && f <= 128))
            return (
              (h = [this.parse(p[1]), f]),
              Object.defineProperty(h, "toString", {
                value: function () {
                  return this.join("/");
                },
              }),
              h
            );
        }
        throw Error("ipaddr: string is not formatted like an IPv6 CIDR range");
      }),
      (t.isValid = function (d) {
        return t.IPv6.isValid(d) || t.IPv4.isValid(d);
      }),
      (t.parse = function (d) {
        if (t.IPv6.isValid(d)) return t.IPv6.parse(d);
        else if (t.IPv4.isValid(d)) return t.IPv4.parse(d);
        else throw Error("ipaddr: the address has neither IPv6 nor IPv4 format");
      }),
      (t.parseCIDR = function (d) {
        var f;
        try {
          return t.IPv6.parseCIDR(d);
        } catch (p) {
          f = p;
          try {
            return t.IPv4.parseCIDR(d);
          } catch (h) {
            throw ((f = h), Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format"));
          }
        }
      }),
      (t.fromByteArray = function (d) {
        var f = d.length;
        if (f === 4) return new t.IPv4(d);
        else if (f === 16) return new t.IPv6(d);
        else throw Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
      }),
      (t.process = function (d) {
        var f = this.parse(d);
        if (f.kind() === "ipv6" && f.isIPv4MappedAddress()) return f.toIPv4Address();
        else return f;
      });
  }).call(Xg);
});

var Jo = S(function (ph) {
  Object.defineProperty(ph, "__esModule", { value: !0 });
  ph.TIER_DESCRIPTIONS = ph.ANTHROPIC_TIER_NAMES = void 0;
  ph.ANTHROPIC_TIER_NAMES = ["sonnet", "opus", "haiku", "fable", "mythos"];
  ph.TIER_DESCRIPTIONS = {
    haiku: "Fastest for quick answers",
    sonnet: "Most efficient for everyday tasks",
    opus: "Most capable for ambitious work",
    fable: "For your toughest challenges",
  };
});

var Xl = S(function (Oh) {
  Object.defineProperty(Oh, "__esModule", { value: !0 });
  Oh._test = Oh.TIER_ALIASES = void 0;
  Oh.isDefinitelyNotAnthropicModel = Y$;
  Oh.containsAnthropicToken = X$;
  Oh.isLikelyAnthropicModelId = ds;
  Oh.verdictToFallbackReason = Q$;
  Oh.checkModel = tI;
  var gh = Jo();
  Oh.TIER_ALIASES = new RegExp(`^(${gh.ANTHROPIC_TIER_NAMES.join("|")})(-[\\d.]+)?$`);
  var hh = ["claude", ...gh.ANTHROPIC_TIER_NAMES, "anthropic"],
    _h =
      /ark-code|astron|command-r|deepseek|doubao|gemini|gemma|glm|gpt|grok|hermes|hy3|kimi|lfm|\bling\b|llama|longcat|mimo|minimax|mistral|mixtral|moonshot|nemotron|openai|phi-|qianfan|qwen|tc-code|\bunic\b|yi-|stepfun|step-3|seed-|bytedance|hunyuan|granite|amazon\.nova|nova-|devstral|ministral|ernie|codex|arcee|trinity|abab|phi\d|\bk2\.|\bm2\.|jamba|arctic|solar|mercury|zamba|kat-coder|\bds-|dpsk/;
  function Y$(e) {
    return _h.test(e.toLowerCase());
  }
  function X$(e) {
    let t = e.toLowerCase();
    return hh.some((n) => t.includes(n));
  }
  function ds(e) {
    let t = e.toLowerCase();
    if (_h.test(t)) return !1;
    return Oh.TIER_ALIASES.test(t) || hh.some((n) => t.includes(n));
  }
  function Q$(e) {
    return e.reason === "not_in_allowed_models" || e.reason === "model_restricted"
      ? e.reason
      : "fails_anthropic_model_check";
  }
  function bh(e) {
    let t = e.toLowerCase();
    if (/(?:^|\.)anthropic\./.test(t)) return { ok: !0 };
    if (/^arn:aws[a-z-]*:bedrock:/.test(t) && t.includes("/anthropic.")) return { ok: !0 };
    if (t.includes(":application-inference-profile/"))
      return {
        ok: !0,
        warn: `Bedrock model "${e}" is an application inference profile; underlying model not verified.`,
      };
    if (t.includes(":provisioned-model/"))
      return { ok: !0, warn: `Bedrock model "${e}" is a provisioned-throughput ARN; underlying model not verified.` };
    return {
      ok: !1,
      reason:
        'expected a Bedrock model ID with the "anthropic." vendor prefix (e.g. anthropic.claude-sonnet-4-5-v1:0) or an inference-profile ARN',
    };
  }
  function vh(e) {
    if (e.toLowerCase().startsWith("claude-")) return { ok: !0 };
    return {
      ok: !1,
      reason: 'expected a Vertex Model Garden ID starting with "claude-" (e.g. claude-sonnet-4-5@20250929)',
    };
  }
  function wh(e) {
    if (ds(e)) return { ok: !0 };
    return {
      ok: !1,
      reason:
        "expected a Foundry deployment name referencing an Anthropic model (e.g. claude-sonnet-4-5). Name deployments to match the underlying model.",
    };
  }
  function eI(e) {
    if (ds(e)) return { ok: !0 };
    return { ok: !1, reason: "expected an Anthropic model ID (e.g. claude-sonnet-4-5)" };
  }
  function Sh(e) {
    if (ds(e)) return { ok: !0 };
    return {
      ok: !1,
      reason:
        "expected a gateway model route referencing an Anthropic model (e.g. claude-sonnet-4-5, anthropic/claude-*). Name routes to match the underlying model.",
    };
  }
  function tI(e, t) {
    if (e === void 0) return { ok: !0 };
    if (Oh.TIER_ALIASES.test(t.toLowerCase())) return { ok: !0 };
    switch (e) {
      case "anthropic":
        return eI(t);
      case "bedrock":
        return bh(t);
      case "vertex":
        return vh(t);
      case "foundry":
        return wh(t);
      case "gateway":
      case "mantle":
        return Sh(t);
    }
  }
  Oh._test = {
    isBedrockAnthropicModel: bh,
    isVertexAnthropicModel: vh,
    isFoundryAnthropicModel: wh,
    isGatewayAnthropicModel: Sh,
  };
});

var yi = S(function (Ih) {
  var Ph;
  Object.defineProperty(Ih, "__esModule", { value: !0 });
  Ih.globalConfig = Ih.$ZodEncodeError = Ih.$ZodAsyncError = Ih.$brand = Ih.NEVER = void 0;
  Ih.$constructor = sI;
  Ih.config = uI;
  Ih.NEVER = Object.freeze({ status: "aborted" });
  function sI(e, t, n) {
    function i(u, c) {
      if (!u._zod)
        Object.defineProperty(u, "_zod", { value: { def: c, constr: s, traits: new Set() }, enumerable: !1 });
      if (u._zod.traits.has(e)) return;
      u._zod.traits.add(e), t(u, c);
      let d = s.prototype,
        f = Object.keys(d);
      for (let p = 0; p < f.length; p++) {
        let h = f[p];
        if (!(h in u)) u[h] = d[h].bind(u);
      }
    }
    let r = n?.Parent ?? Object;
    class o extends r {}
    Object.defineProperty(o, "name", { value: e });
    function s(u) {
      var c;
      let d = n?.Parent ? new o() : this;
      i(d, u), (c = d._zod).deferred ?? (c.deferred = []);
      for (let f of d._zod.deferred) f();
      return d;
    }
    return (
      Object.defineProperty(s, "init", { value: i }),
      Object.defineProperty(s, Symbol.hasInstance, {
        value: (u) => {
          if (n?.Parent && u instanceof n.Parent) return !0;
          return u?._zod?.traits?.has(e);
        },
      }),
      Object.defineProperty(s, "name", { value: e }),
      s
    );
  }
  Ih.$brand = Symbol("zod_brand");
  class Eh extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  }
  Ih.$ZodAsyncError = Eh;
  class $h extends Error {
    constructor(e) {
      super(`Encountered unidirectional transform during encode: ${e}`);
      this.name = "ZodEncodeError";
    }
  }
  Ih.$ZodEncodeError = $h;
  (Ph = globalThis).__zod_globalConfig ?? (Ph.__zod_globalConfig = {});
  Ih.globalConfig = globalThis.__zod_globalConfig;
  function uI(e) {
    if (e) Object.assign(Ih.globalConfig, e);
    return Ih.globalConfig;
  }
});

var Y = S(function (xh) {
  Object.defineProperty(xh, "__esModule", { value: !0 });
  xh.Class =
    xh.BIGINT_FORMAT_RANGES =
    xh.NUMBER_FORMAT_RANGES =
    xh.primitiveTypes =
    xh.propertyKeyTypes =
    xh.getParsedType =
    xh.allowsEval =
    xh.captureStackTrace =
      void 0;
  xh.assertEqual = hI;
  xh.assertNotEqual = _I;
  xh.assertIs = yI;
  xh.assertNever = bI;
  xh.assert = vI;
  xh.getEnumValues = wI;
  xh.joinValues = SI;
  xh.jsonStringifyReplacer = OI;
  xh.cached = Ah;
  xh.nullish = kI;
  xh.cleanRegex = PI;
  xh.floatSafeRemainder = EI;
  xh.defineLazy = $I;
  xh.objectClone = II;
  xh.assignProp = Zn;
  xh.mergeDefs = Rn;
  xh.cloneDef = TI;
  xh.getElementAtPath = AI;
  xh.promiseAllObject = RI;
  xh.randomString = jI;
  xh.esc = CI;
  xh.slugify = DI;
  xh.isObject = Ql;
  xh.isPlainObject = ps;
  xh.shallowClone = xI;
  xh.numKeys = MI;
  xh.escapeRegex = LI;
  xh.clone = Fn;
  xh.normalizeParams = UI;
  xh.createTransparentProxy = NI;
  xh.stringifyPrimitive = Rh;
  xh.optionalKeys = ZI;
  xh.pick = FI;
  xh.omit = BI;
  xh.extend = KI;
  xh.safeExtend = qI;
  xh.merge = HI;
  xh.partial = VI;
  xh.required = GI;
  xh.aborted = WI;
  xh.explicitlyAborted = JI;
  xh.prefixIssues = YI;
  xh.unwrapMessage = Yo;
  xh.finalizeIssue = XI;
  xh.getSizableOrigin = QI;
  xh.getLengthableOrigin = eT;
  xh.parsedType = tT;
  xh.issue = rT;
  xh.cleanEnum = nT;
  xh.base64ToUint8Array = jh;
  xh.uint8ArrayToBase64 = Ch;
  xh.base64urlToUint8Array = iT;
  xh.uint8ArrayToBase64url = oT;
  xh.hexToUint8Array = aT;
  xh.uint8ArrayToHex = sT;
  var gI = yi();
  function hI(e) {
    return e;
  }
  function _I(e) {
    return e;
  }
  function yI(e) {}
  function bI(e) {
    throw Error("Unexpected value in exhaustive check");
  }
  function vI(e) {}
  function wI(e) {
    let t = Object.values(e).filter((i) => typeof i === "number");
    return Object.entries(e)
      .filter(([i, r]) => t.indexOf(+i) === -1)
      .map(([i, r]) => r);
  }
  function SI(e, t = "|") {
    return e.map((n) => Rh(n)).join(t);
  }
  function OI(e, t) {
    if (typeof t === "bigint") return t.toString();
    return t;
  }
  function Ah(e) {
    return {
      get value() {
        {
          let n = e();
          return Object.defineProperty(this, "value", { value: n }), n;
        }
        throw Error("cached value already set");
      },
    };
  }
  function kI(e) {
    return e === null || e === void 0;
  }
  function PI(e) {
    let t = e.startsWith("^") ? 1 : 0,
      n = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, n);
  }
  function EI(e, t) {
    let n = e / t,
      i = Math.round(n),
      r = Number.EPSILON * Math.max(Math.abs(n), 1);
    if (Math.abs(n - i) < r) return 0;
    return n - i;
  }
  var Th = Symbol("evaluating");
  function $I(e, t, n) {
    let i = void 0;
    Object.defineProperty(e, t, {
      get() {
        if (i === Th) return;
        if (i === void 0) (i = Th), (i = n());
        return i;
      },
      set(r) {
        Object.defineProperty(e, t, { value: r });
      },
      configurable: !0,
    });
  }
  function II(e) {
    return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
  }
  function Zn(e, t, n) {
    Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !0, configurable: !0 });
  }
  function Rn(...e) {
    let t = {};
    for (let n of e) {
      let i = Object.getOwnPropertyDescriptors(n);
      Object.assign(t, i);
    }
    return Object.defineProperties({}, t);
  }
  function TI(e) {
    return Rn(e._zod.def);
  }
  function AI(e, t) {
    if (!t) return e;
    return t.reduce((n, i) => n?.[i], e);
  }
  function RI(e) {
    let t = Object.keys(e),
      n = t.map((i) => e[i]);
    return Promise.all(n).then((i) => {
      let r = {};
      for (let o = 0; o < t.length; o++) r[t[o]] = i[o];
      return r;
    });
  }
  function jI(e = 10) {
    let n = "";
    for (let i = 0; i < e; i++) n += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
    return n;
  }
  function CI(e) {
    return JSON.stringify(e);
  }
  function DI(e) {
    return e
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  xh.captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
  function Ql(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
  }
  xh.allowsEval = Ah(() => {
    if (gI.globalConfig.jitless) return !1;
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
      return new Function(""), !0;
    } catch (e) {
      return !1;
    }
  });
  function ps(e) {
    if (Ql(e) === !1) return !1;
    let t = e.constructor;
    if (t === void 0) return !0;
    if (typeof t !== "function") return !0;
    let n = t.prototype;
    if (Ql(n) === !1) return !1;
    if (Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1) return !1;
    return !0;
  }
  function xI(e) {
    if (ps(e)) return { ...e };
    if (Array.isArray(e)) return [...e];
    if (e instanceof Map) return new Map(e);
    if (e instanceof Set) return new Set(e);
    return e;
  }
  function MI(e) {
    let t = 0;
    for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n)) t++;
    return t;
  }
  var zI = (e) => {
    let t = typeof e;
    switch (t) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN(e) ? "nan" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      case "object":
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (e.then && typeof e.then === "function" && e.catch && typeof e.catch === "function") return "promise";
        if (typeof Map < "u" && e instanceof Map) return "map";
        if (typeof Set < "u" && e instanceof Set) return "set";
        if (typeof Date < "u" && e instanceof Date) return "date";
        if (typeof File < "u" && e instanceof File) return "file";
        return "object";
      default:
        throw Error(`Unknown data type: ${t}`);
    }
  };
  xh.getParsedType = zI;
  xh.propertyKeyTypes = new Set(["string", "number", "symbol"]);
  xh.primitiveTypes = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
  function LI(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function Fn(e, t, n) {
    let i = new e._zod.constr(t ?? e._zod.def);
    if (!t || n?.parent) i._zod.parent = e;
    return i;
  }
  function UI(e) {
    let t = e;
    if (!t) return {};
    if (typeof t === "string") return { error: () => t };
    if (t?.message !== void 0) {
      if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
      t.error = t.message;
    }
    if ((delete t.message, typeof t.error === "string")) return { ...t, error: () => t.error };
    return t;
  }
  function NI(e) {
    let t;
    return new Proxy(
      {},
      {
        get(n, i, r) {
          return t ?? (t = e()), Reflect.get(t, i, r);
        },
        set(n, i, r, o) {
          return t ?? (t = e()), Reflect.set(t, i, r, o);
        },
        has(n, i) {
          return t ?? (t = e()), Reflect.has(t, i);
        },
        deleteProperty(n, i) {
          return t ?? (t = e()), Reflect.deleteProperty(t, i);
        },
        ownKeys(n) {
          return t ?? (t = e()), Reflect.ownKeys(t);
        },
        getOwnPropertyDescriptor(n, i) {
          return t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, i);
        },
        defineProperty(n, i, r) {
          return t ?? (t = e()), Reflect.defineProperty(t, i, r);
        },
      },
    );
  }
  function Rh(e) {
    if (typeof e === "bigint") return e.toString() + "n";
    if (typeof e === "string") return `"${e}"`;
    return `${e}`;
  }
  function ZI(e) {
    return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
  }
  xh.NUMBER_FORMAT_RANGES = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  };
  xh.BIGINT_FORMAT_RANGES = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
  function FI(e, t) {
    let n = e._zod.def,
      i = n.checks;
    if (i && i.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
    let o = Rn(e._zod.def, {
      get shape() {
        let s = {};
        for (let u in t) {
          if (!(u in n.shape)) throw Error(`Unrecognized key: "${u}"`);
          if (!t[u]) continue;
          s[u] = n.shape[u];
        }
        return Zn(this, "shape", s), s;
      },
      checks: [],
    });
    return Fn(e, o);
  }
  function BI(e, t) {
    let n = e._zod.def,
      i = n.checks;
    if (i && i.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
    let o = Rn(e._zod.def, {
      get shape() {
        let s = { ...e._zod.def.shape };
        for (let u in t) {
          if (!(u in n.shape)) throw Error(`Unrecognized key: "${u}"`);
          if (!t[u]) continue;
          delete s[u];
        }
        return Zn(this, "shape", s), s;
      },
      checks: [],
    });
    return Fn(e, o);
  }
  function KI(e, t) {
    if (!ps(t)) throw Error("Invalid input to extend: expected a plain object");
    let n = e._zod.def.checks;
    if (n && n.length > 0) {
      let o = e._zod.def.shape;
      for (let s in t)
        if (Object.getOwnPropertyDescriptor(o, s) !== void 0)
          throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
    }
    let r = Rn(e._zod.def, {
      get shape() {
        let o = { ...e._zod.def.shape, ...t };
        return Zn(this, "shape", o), o;
      },
    });
    return Fn(e, r);
  }
  function qI(e, t) {
    if (!ps(t)) throw Error("Invalid input to safeExtend: expected a plain object");
    let n = Rn(e._zod.def, {
      get shape() {
        let i = { ...e._zod.def.shape, ...t };
        return Zn(this, "shape", i), i;
      },
    });
    return Fn(e, n);
  }
  function HI(e, t) {
    if (e._zod.def.checks?.length)
      throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    let n = Rn(e._zod.def, {
      get shape() {
        let i = { ...e._zod.def.shape, ...t._zod.def.shape };
        return Zn(this, "shape", i), i;
      },
      get catchall() {
        return t._zod.def.catchall;
      },
      checks: t._zod.def.checks ?? [],
    });
    return Fn(e, n);
  }
  function VI(e, t, n) {
    let r = t._zod.def.checks;
    if (r && r.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
    let s = Rn(t._zod.def, {
      get shape() {
        let u = t._zod.def.shape,
          c = { ...u };
        if (n)
          for (let d in n) {
            if (!(d in u)) throw Error(`Unrecognized key: "${d}"`);
            if (!n[d]) continue;
            c[d] = e ? new e({ type: "optional", innerType: u[d] }) : u[d];
          }
        else for (let d in u) c[d] = e ? new e({ type: "optional", innerType: u[d] }) : u[d];
        return Zn(this, "shape", c), c;
      },
      checks: [],
    });
    return Fn(t, s);
  }
  function GI(e, t, n) {
    let i = Rn(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          o = { ...r };
        if (n)
          for (let s in n) {
            if (!(s in o)) throw Error(`Unrecognized key: "${s}"`);
            if (!n[s]) continue;
            o[s] = new e({ type: "nonoptional", innerType: r[s] });
          }
        else for (let s in r) o[s] = new e({ type: "nonoptional", innerType: r[s] });
        return Zn(this, "shape", o), o;
      },
    });
    return Fn(t, i);
  }
  function WI(e, t = 0) {
    if (e.aborted === !0) return !0;
    for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
    return !1;
  }
  function JI(e, t = 0) {
    if (e.aborted === !0) return !0;
    for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
    return !1;
  }
  function YI(e, t) {
    return t.map((n) => {
      var i;
      return (i = n).path ?? (i.path = []), n.path.unshift(e), n;
    });
  }
  function Yo(e) {
    return typeof e === "string" ? e : e?.message;
  }
  function XI(e, t, n) {
    let i = e.message
        ? e.message
        : (Yo(e.inst?._zod.def?.error?.(e)) ??
          Yo(t?.error?.(e)) ??
          Yo(n.customError?.(e)) ??
          Yo(n.localeError?.(e)) ??
          "Invalid input"),
      { inst: r, continue: o, input: s, ...u } = e;
    if ((u.path ?? (u.path = []), (u.message = i), t?.reportInput)) u.input = s;
    return u;
  }
  function QI(e) {
    if (e instanceof Set) return "set";
    if (e instanceof Map) return "map";
    if (e instanceof File) return "file";
    return "unknown";
  }
  function eT(e) {
    if (Array.isArray(e)) return "array";
    if (typeof e === "string") return "string";
    return "unknown";
  }
  function tT(e) {
    let t = typeof e;
    switch (t) {
      case "number":
        return Number.isNaN(e) ? "nan" : "number";
      case "object": {
        if (e === null) return "null";
        if (Array.isArray(e)) return "array";
        let n = e;
        if (n && Object.getPrototypeOf(n) !== Object.prototype && "constructor" in n && n.constructor)
          return n.constructor.name;
      }
    }
    return t;
  }
  function rT(...e) {
    let [t, n, i] = e;
    if (typeof t === "string") return { message: t, code: "custom", input: n, inst: i };
    return { ...t };
  }
  function nT(e) {
    return Object.entries(e)
      .filter(([t, n]) => Number.isNaN(Number.parseInt(t, 10)))
      .map((t) => t[1]);
  }
  function jh(e) {
    let t = atob(e),
      n = new Uint8Array(t.length);
    for (let i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
    return n;
  }
  function Ch(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
    return btoa(t);
  }
  function iT(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/"),
      n = "=".repeat((4 - (t.length % 4)) % 4);
    return jh(t + n);
  }
  function oT(e) {
    return Ch(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  function aT(e) {
    let t = e.replace(/^0x/, "");
    if (t.length % 2 !== 0) throw Error("Invalid hex string length");
    let n = new Uint8Array(t.length / 2);
    for (let i = 0; i < t.length; i += 2) n[i / 2] = Number.parseInt(t.slice(i, i + 2), 16);
    return n;
  }
  function sT(e) {
    return Array.from(e)
      .map((t) => t.toString(16).padStart(2, "0"))
      .join("");
  }
  class Dh {
    constructor(...e) {}
  }
  xh.Class = Dh;
});

var ed = S(function (gt) {
  var _A =
      (gt && gt.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    yA =
      (gt && gt.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    bA =
      (gt && gt.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) _A(t, e, n);
        }
        return yA(t, e), t;
      };
  Object.defineProperty(gt, "__esModule", { value: !0 });
  gt.$ZodRealError = gt.$ZodError = void 0;
  gt.flattenError = wA;
  gt.formatError = SA;
  gt.treeifyError = OA;
  gt.toDotPath = Uh;
  gt.prettifyError = kA;
  var zh = yi(),
    vA = bA(Y()),
    Lh = (e, t) => {
      (e.name = "$ZodError"),
        Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
        Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
        (e.message = JSON.stringify(t, vA.jsonStringifyReplacer, 2)),
        Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 });
    };
  gt.$ZodError = (0, zh.$constructor)("$ZodError", Lh);
  gt.$ZodRealError = (0, zh.$constructor)("$ZodError", Lh, { Parent: Error });
  function wA(e, t = (n) => n.message) {
    let n = {},
      i = [];
    for (let r of e.issues)
      if (r.path.length > 0) (n[r.path[0]] = n[r.path[0]] || []), n[r.path[0]].push(t(r));
      else i.push(t(r));
    return { formErrors: i, fieldErrors: n };
  }
  function SA(e, t = (n) => n.message) {
    let n = { _errors: [] },
      i = (r, o = []) => {
        for (let s of r.issues)
          if (s.code === "invalid_union" && s.errors.length) s.errors.map((u) => i({ issues: u }, [...o, ...s.path]));
          else if (s.code === "invalid_key") i({ issues: s.issues }, [...o, ...s.path]);
          else if (s.code === "invalid_element") i({ issues: s.issues }, [...o, ...s.path]);
          else {
            let u = [...o, ...s.path];
            if (u.length === 0) n._errors.push(t(s));
            else {
              let c = n,
                d = 0;
              while (d < u.length) {
                let f = u[d];
                if (d !== u.length - 1) c[f] = c[f] || { _errors: [] };
                else (c[f] = c[f] || { _errors: [] }), c[f]._errors.push(t(s));
                (c = c[f]), d++;
              }
            }
          }
      };
    return i(e), n;
  }
  function OA(e, t = (n) => n.message) {
    let n = { errors: [] },
      i = (r, o = []) => {
        var s, u;
        for (let c of r.issues)
          if (c.code === "invalid_union" && c.errors.length) c.errors.map((d) => i({ issues: d }, [...o, ...c.path]));
          else if (c.code === "invalid_key") i({ issues: c.issues }, [...o, ...c.path]);
          else if (c.code === "invalid_element") i({ issues: c.issues }, [...o, ...c.path]);
          else {
            let d = [...o, ...c.path];
            if (d.length === 0) {
              n.errors.push(t(c));
              continue;
            }
            let f = n,
              p = 0;
            while (p < d.length) {
              let h = d[p],
                y = p === d.length - 1;
              if (typeof h === "string")
                f.properties ?? (f.properties = {}),
                  (s = f.properties)[h] ?? (s[h] = { errors: [] }),
                  (f = f.properties[h]);
              else f.items ?? (f.items = []), (u = f.items)[h] ?? (u[h] = { errors: [] }), (f = f.items[h]);
              if (y) f.errors.push(t(c));
              p++;
            }
          }
      };
    return i(e), n;
  }
  function Uh(e) {
    let t = [],
      n = e.map((i) => (typeof i === "object" ? i.key : i));
    for (let i of n)
      if (typeof i === "number") t.push(`[${i}]`);
      else if (typeof i === "symbol") t.push(`[${JSON.stringify(String(i))}]`);
      else if (/[^\w$]/.test(i)) t.push(`[${JSON.stringify(i)}]`);
      else {
        if (t.length) t.push(".");
        t.push(i);
      }
    return t.join("");
  }
  function kA(e) {
    let t = [],
      n = [...e.issues].sort((i, r) => (i.path ?? []).length - (r.path ?? []).length);
    for (let i of n) if ((t.push(`\u2716 ${i.message}`), i.path?.length)) t.push(`  \u2192 at ${Uh(i.path)}`);
    return t.join(`
`);
  }
});

var rd = S(function (q) {
  var PA =
      (q && q.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    EA =
      (q && q.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    td =
      (q && q.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) PA(t, e, n);
        }
        return EA(t, e), t;
      };
  Object.defineProperty(q, "__esModule", { value: !0 });
  q.safeDecodeAsync =
    q._safeDecodeAsync =
    q.safeEncodeAsync =
    q._safeEncodeAsync =
    q.safeDecode =
    q._safeDecode =
    q.safeEncode =
    q._safeEncode =
    q.decodeAsync =
    q._decodeAsync =
    q.encodeAsync =
    q._encodeAsync =
    q.decode =
    q._decode =
    q.encode =
    q._encode =
    q.safeParseAsync =
    q._safeParseAsync =
    q.safeParse =
    q._safeParse =
    q.parseAsync =
    q._parseAsync =
    q.parse =
    q._parse =
      void 0;
  var Bi = td(yi()),
    Ht = td(ed()),
    Ki = td(Y()),
    $A = (e) => (t, n, i, r) => {
      let o = i ? { ...i, async: !1 } : { async: !1 },
        s = t._zod.run({ value: n, issues: [] }, o);
      if (s instanceof Promise) throw new Bi.$ZodAsyncError();
      if (s.issues.length) {
        let u = new (r?.Err ?? e)(s.issues.map((c) => Ki.finalizeIssue(c, o, Bi.config())));
        throw (Ki.captureStackTrace(u, r?.callee), u);
      }
      return s.value;
    };
  q._parse = $A;
  q.parse = (0, q._parse)(Ht.$ZodRealError);
  var IA = (e) => async (t, n, i, r) => {
    let o = i ? { ...i, async: !0 } : { async: !0 },
      s = t._zod.run({ value: n, issues: [] }, o);
    if (s instanceof Promise) s = await s;
    if (s.issues.length) {
      let u = new (r?.Err ?? e)(s.issues.map((c) => Ki.finalizeIssue(c, o, Bi.config())));
      throw (Ki.captureStackTrace(u, r?.callee), u);
    }
    return s.value;
  };
  q._parseAsync = IA;
  q.parseAsync = (0, q._parseAsync)(Ht.$ZodRealError);
  var TA = (e) => (t, n, i) => {
    let r = i ? { ...i, async: !1 } : { async: !1 },
      o = t._zod.run({ value: n, issues: [] }, r);
    if (o instanceof Promise) throw new Bi.$ZodAsyncError();
    return o.issues.length
      ? { success: !1, error: new (e ?? Ht.$ZodError)(o.issues.map((s) => Ki.finalizeIssue(s, r, Bi.config()))) }
      : { success: !0, data: o.value };
  };
  q._safeParse = TA;
  q.safeParse = (0, q._safeParse)(Ht.$ZodRealError);
  var AA = (e) => async (t, n, i) => {
    let r = i ? { ...i, async: !0 } : { async: !0 },
      o = t._zod.run({ value: n, issues: [] }, r);
    if (o instanceof Promise) o = await o;
    return o.issues.length
      ? { success: !1, error: new e(o.issues.map((s) => Ki.finalizeIssue(s, r, Bi.config()))) }
      : { success: !0, data: o.value };
  };
  q._safeParseAsync = AA;
  q.safeParseAsync = (0, q._safeParseAsync)(Ht.$ZodRealError);
  var RA = (e) => (t, n, i) => {
    let r = i ? { ...i, direction: "backward" } : { direction: "backward" };
    return (0, q._parse)(e)(t, n, r);
  };
  q._encode = RA;
  q.encode = (0, q._encode)(Ht.$ZodRealError);
  var jA = (e) => (t, n, i) => (0, q._parse)(e)(t, n, i);
  q._decode = jA;
  q.decode = (0, q._decode)(Ht.$ZodRealError);
  var CA = (e) => async (t, n, i) => {
    let r = i ? { ...i, direction: "backward" } : { direction: "backward" };
    return (0, q._parseAsync)(e)(t, n, r);
  };
  q._encodeAsync = CA;
  q.encodeAsync = (0, q._encodeAsync)(Ht.$ZodRealError);
  var DA = (e) => async (t, n, i) => (0, q._parseAsync)(e)(t, n, i);
  q._decodeAsync = DA;
  q.decodeAsync = (0, q._decodeAsync)(Ht.$ZodRealError);
  var xA = (e) => (t, n, i) => {
    let r = i ? { ...i, direction: "backward" } : { direction: "backward" };
    return (0, q._safeParse)(e)(t, n, r);
  };
  q._safeEncode = xA;
  q.safeEncode = (0, q._safeEncode)(Ht.$ZodRealError);
  var MA = (e) => (t, n, i) => (0, q._safeParse)(e)(t, n, i);
  q._safeDecode = MA;
  q.safeDecode = (0, q._safeDecode)(Ht.$ZodRealError);
  var zA = (e) => async (t, n, i) => {
    let r = i ? { ...i, direction: "backward" } : { direction: "backward" };
    return (0, q._safeParseAsync)(e)(t, n, r);
  };
  q._safeEncodeAsync = zA;
  q.safeEncodeAsync = (0, q._safeEncodeAsync)(Ht.$ZodRealError);
  var LA = (e) => async (t, n, i) => (0, q._safeParseAsync)(e)(t, n, i);
  q._safeDecodeAsync = LA;
  q.safeDecodeAsync = (0, q._safeDecodeAsync)(Ht.$ZodRealError);
});

var ms = S(function (A) {
  var UA =
      (A && A.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    NA =
      (A && A.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    ZA =
      (A && A.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) UA(t, e, n);
        }
        return NA(t, e), t;
      };
  Object.defineProperty(A, "__esModule", { value: !0 });
  A.sha256_base64url =
    A.sha256_base64 =
    A.sha256_hex =
    A.sha1_base64url =
    A.sha1_base64 =
    A.sha1_hex =
    A.md5_base64url =
    A.md5_base64 =
    A.md5_hex =
    A.hex =
    A.uppercase =
    A.lowercase =
    A.undefined =
    A.null =
    A.boolean =
    A.number =
    A.integer =
    A.bigint =
    A.string =
    A.date =
    A.e164 =
    A.httpProtocol =
    A.domain =
    A.hostname =
    A.base64url =
    A.base64 =
    A.cidrv6 =
    A.cidrv4 =
    A.mac =
    A.ipv6 =
    A.ipv4 =
    A.browserEmail =
    A.idnEmail =
    A.unicodeEmail =
    A.rfc5322Email =
    A.html5Email =
    A.email =
    A.uuid7 =
    A.uuid6 =
    A.uuid4 =
    A.uuid =
    A.guid =
    A.extendedDuration =
    A.duration =
    A.nanoid =
    A.ksuid =
    A.xid =
    A.ulid =
    A.cuid2 =
    A.cuid =
      void 0;
  A.sha512_base64url = A.sha512_base64 = A.sha512_hex = A.sha384_base64url = A.sha384_base64 = A.sha384_hex = void 0;
  A.emoji = qA;
  A.time = VA;
  A.datetime = GA;
  var FA = ZA(Y());
  A.cuid = /^[cC][0-9a-z]{6,}$/;
  A.cuid2 = /^[0-9a-z]+$/;
  A.ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
  A.xid = /^[0-9a-vA-V]{20}$/;
  A.ksuid = /^[A-Za-z0-9]{27}$/;
  A.nanoid = /^[a-zA-Z0-9_-]{21}$/;
  A.duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
  A.extendedDuration =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  A.guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
  var BA = (e) => {
    if (!e)
      return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
  };
  A.uuid = BA;
  A.uuid4 = (0, A.uuid)(4);
  A.uuid6 = (0, A.uuid)(6);
  A.uuid7 = (0, A.uuid)(7);
  A.email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
  A.html5Email =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  A.rfc5322Email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  A.unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
  A.idnEmail = A.unicodeEmail;
  A.browserEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  var KA = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
  function qA() {
    return new RegExp(KA, "u");
  }
  A.ipv4 =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  A.ipv6 =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
  var HA = (e) => {
    let t = FA.escapeRegex(e ?? ":");
    return new RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`);
  };
  A.mac = HA;
  A.cidrv4 =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
  A.cidrv6 =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  A.base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
  A.base64url = /^[A-Za-z0-9_-]*$/;
  A.hostname =
    /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
  A.domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  A.httpProtocol = /^https?$/;
  A.e164 = /^\+[1-9]\d{6,14}$/;
  var Nh =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
  A.date = new RegExp(`^${Nh}$`);
  function Zh(e) {
    return typeof e.precision === "number"
      ? e.precision === -1
        ? "(?:[01]\\d|2[0-3]):[0-5]\\d"
        : e.precision === 0
          ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d"
          : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}`
      : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
  }
  function VA(e) {
    return new RegExp(`^${Zh(e)}$`);
  }
  function GA(e) {
    let t = Zh({ precision: e.precision }),
      n = ["Z"];
    if (e.local) n.push("");
    if (e.offset) n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    let i = `${t}(?:${n.join("|")})`;
    return new RegExp(`^${Nh}T(?:${i})$`);
  }
  var WA = (e) => {
    let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
  };
  A.string = WA;
  A.bigint = /^-?\d+n?$/;
  A.integer = /^-?\d+$/;
  A.number = /^-?\d+(?:\.\d+)?$/;
  A.boolean = /^(?:true|false)$/i;
  var JA = /^null$/i;
  A.null = JA;
  var YA = /^undefined$/i;
  A.undefined = YA;
  A.lowercase = /^[^A-Z]*$/;
  A.uppercase = /^[^a-z]*$/;
  A.hex = /^[0-9a-fA-F]*$/;
  function Xo(e, t) {
    return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
  }
  function Qo(e) {
    return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
  }
  A.md5_hex = /^[0-9a-fA-F]{32}$/;
  A.md5_base64 = Xo(22, "==");
  A.md5_base64url = Qo(22);
  A.sha1_hex = /^[0-9a-fA-F]{40}$/;
  A.sha1_base64 = Xo(27, "=");
  A.sha1_base64url = Qo(27);
  A.sha256_hex = /^[0-9a-fA-F]{64}$/;
  A.sha256_base64 = Xo(43, "=");
  A.sha256_base64url = Qo(43);
  A.sha384_hex = /^[0-9a-fA-F]{96}$/;
  A.sha384_base64 = Xo(64, "");
  A.sha384_base64url = Qo(64);
  A.sha512_hex = /^[0-9a-fA-F]{128}$/;
  A.sha512_base64 = Xo(86, "==");
  A.sha512_base64url = Qo(86);
});

var gs = S(function (G) {
  var XA =
      (G && G.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    QA =
      (G && G.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    nd =
      (G && G.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) XA(t, e, n);
        }
        return QA(t, e), t;
      };
  Object.defineProperty(G, "__esModule", { value: !0 });
  G.$ZodCheckOverwrite =
    G.$ZodCheckMimeType =
    G.$ZodCheckProperty =
    G.$ZodCheckEndsWith =
    G.$ZodCheckStartsWith =
    G.$ZodCheckIncludes =
    G.$ZodCheckUpperCase =
    G.$ZodCheckLowerCase =
    G.$ZodCheckRegex =
    G.$ZodCheckStringFormat =
    G.$ZodCheckLengthEquals =
    G.$ZodCheckMinLength =
    G.$ZodCheckMaxLength =
    G.$ZodCheckSizeEquals =
    G.$ZodCheckMinSize =
    G.$ZodCheckMaxSize =
    G.$ZodCheckBigIntFormat =
    G.$ZodCheckNumberFormat =
    G.$ZodCheckMultipleOf =
    G.$ZodCheckGreaterThan =
    G.$ZodCheckLessThan =
    G.$ZodCheck =
      void 0;
  var at = nd(yi()),
    id = nd(ms()),
    lt = nd(Y());
  G.$ZodCheck = at.$constructor("$ZodCheck", (e, t) => {
    var n;
    e._zod ?? (e._zod = {}), (e._zod.def = t), (n = e._zod).onattach ?? (n.onattach = []);
  });
  var Bh = { number: "number", bigint: "bigint", object: "date" };
  G.$ZodCheckLessThan = at.$constructor("$ZodCheckLessThan", (e, t) => {
    G.$ZodCheck.init(e, t);
    let n = Bh[typeof t.value];
    e._zod.onattach.push((i) => {
      let r = i._zod.bag,
        o = (t.inclusive ? r.maximum : r.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      if (t.value < o)
        if (t.inclusive) r.maximum = t.value;
        else r.exclusiveMaximum = t.value;
    }),
      (e._zod.check = (i) => {
        if (t.inclusive ? i.value <= t.value : i.value < t.value) return;
        i.issues.push({
          origin: n,
          code: "too_big",
          maximum: typeof t.value === "object" ? t.value.getTime() : t.value,
          input: i.value,
          inclusive: t.inclusive,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckGreaterThan = at.$constructor("$ZodCheckGreaterThan", (e, t) => {
    G.$ZodCheck.init(e, t);
    let n = Bh[typeof t.value];
    e._zod.onattach.push((i) => {
      let r = i._zod.bag,
        o = (t.inclusive ? r.minimum : r.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      if (t.value > o)
        if (t.inclusive) r.minimum = t.value;
        else r.exclusiveMinimum = t.value;
    }),
      (e._zod.check = (i) => {
        if (t.inclusive ? i.value >= t.value : i.value > t.value) return;
        i.issues.push({
          origin: n,
          code: "too_small",
          minimum: typeof t.value === "object" ? t.value.getTime() : t.value,
          input: i.value,
          inclusive: t.inclusive,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckMultipleOf = at.$constructor("$ZodCheckMultipleOf", (e, t) => {
    G.$ZodCheck.init(e, t),
      e._zod.onattach.push((n) => {
        var i;
        (i = n._zod.bag).multipleOf ?? (i.multipleOf = t.value);
      }),
      (e._zod.check = (n) => {
        if (typeof n.value !== typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
        if (
          typeof n.value === "bigint" ? n.value % t.value === BigInt(0) : lt.floatSafeRemainder(n.value, t.value) === 0
        )
          return;
        n.issues.push({
          origin: typeof n.value,
          code: "not_multiple_of",
          divisor: t.value,
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckNumberFormat = at.$constructor("$ZodCheckNumberFormat", (e, t) => {
    G.$ZodCheck.init(e, t), (t.format = t.format || "float64");
    let n = t.format?.includes("int"),
      i = n ? "int" : "number",
      [r, o] = lt.NUMBER_FORMAT_RANGES[t.format];
    e._zod.onattach.push((s) => {
      let u = s._zod.bag;
      if (((u.format = t.format), (u.minimum = r), (u.maximum = o), n)) u.pattern = id.integer;
    }),
      (e._zod.check = (s) => {
        let u = s.value;
        if (n) {
          if (!Number.isInteger(u)) {
            s.issues.push({ expected: i, format: t.format, code: "invalid_type", continue: !1, input: u, inst: e });
            return;
          }
          if (!Number.isSafeInteger(u)) {
            if (u > 0)
              s.issues.push({
                input: u,
                code: "too_big",
                maximum: Number.MAX_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: e,
                origin: i,
                inclusive: !0,
                continue: !t.abort,
              });
            else
              s.issues.push({
                input: u,
                code: "too_small",
                minimum: Number.MIN_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: e,
                origin: i,
                inclusive: !0,
                continue: !t.abort,
              });
            return;
          }
        }
        if (u < r)
          s.issues.push({
            origin: "number",
            input: u,
            code: "too_small",
            minimum: r,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          });
        if (u > o)
          s.issues.push({
            origin: "number",
            input: u,
            code: "too_big",
            maximum: o,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          });
      });
  });
  G.$ZodCheckBigIntFormat = at.$constructor("$ZodCheckBigIntFormat", (e, t) => {
    G.$ZodCheck.init(e, t);
    let [n, i] = lt.BIGINT_FORMAT_RANGES[t.format];
    e._zod.onattach.push((r) => {
      let o = r._zod.bag;
      (o.format = t.format), (o.minimum = n), (o.maximum = i);
    }),
      (e._zod.check = (r) => {
        let o = r.value;
        if (o < n)
          r.issues.push({
            origin: "bigint",
            input: o,
            code: "too_small",
            minimum: n,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          });
        if (o > i)
          r.issues.push({
            origin: "bigint",
            input: o,
            code: "too_big",
            maximum: i,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          });
      });
  });
  G.$ZodCheckMaxSize = at.$constructor("$ZodCheckMaxSize", (e, t) => {
    var n;
    G.$ZodCheck.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (i) => {
          let r = i.value;
          return !lt.nullish(r) && r.size !== void 0;
        }),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (t.maximum < r) i._zod.bag.maximum = t.maximum;
      }),
      (e._zod.check = (i) => {
        let r = i.value;
        if (r.size <= t.maximum) return;
        i.issues.push({
          origin: lt.getSizableOrigin(r),
          code: "too_big",
          maximum: t.maximum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckMinSize = at.$constructor("$ZodCheckMinSize", (e, t) => {
    var n;
    G.$ZodCheck.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (i) => {
          let r = i.value;
          return !lt.nullish(r) && r.size !== void 0;
        }),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (t.minimum > r) i._zod.bag.minimum = t.minimum;
      }),
      (e._zod.check = (i) => {
        let r = i.value;
        if (r.size >= t.minimum) return;
        i.issues.push({
          origin: lt.getSizableOrigin(r),
          code: "too_small",
          minimum: t.minimum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckSizeEquals = at.$constructor("$ZodCheckSizeEquals", (e, t) => {
    var n;
    G.$ZodCheck.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (i) => {
          let r = i.value;
          return !lt.nullish(r) && r.size !== void 0;
        }),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag;
        (r.minimum = t.size), (r.maximum = t.size), (r.size = t.size);
      }),
      (e._zod.check = (i) => {
        let r = i.value,
          o = r.size;
        if (o === t.size) return;
        let s = o > t.size;
        i.issues.push({
          origin: lt.getSizableOrigin(r),
          ...(s ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size }),
          inclusive: !0,
          exact: !0,
          input: i.value,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckMaxLength = at.$constructor("$ZodCheckMaxLength", (e, t) => {
    var n;
    G.$ZodCheck.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (i) => {
          let r = i.value;
          return !lt.nullish(r) && r.length !== void 0;
        }),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (t.maximum < r) i._zod.bag.maximum = t.maximum;
      }),
      (e._zod.check = (i) => {
        let r = i.value;
        if (r.length <= t.maximum) return;
        let s = lt.getLengthableOrigin(r);
        i.issues.push({
          origin: s,
          code: "too_big",
          maximum: t.maximum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckMinLength = at.$constructor("$ZodCheckMinLength", (e, t) => {
    var n;
    G.$ZodCheck.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (i) => {
          let r = i.value;
          return !lt.nullish(r) && r.length !== void 0;
        }),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (t.minimum > r) i._zod.bag.minimum = t.minimum;
      }),
      (e._zod.check = (i) => {
        let r = i.value;
        if (r.length >= t.minimum) return;
        let s = lt.getLengthableOrigin(r);
        i.issues.push({
          origin: s,
          code: "too_small",
          minimum: t.minimum,
          inclusive: !0,
          input: r,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckLengthEquals = at.$constructor("$ZodCheckLengthEquals", (e, t) => {
    var n;
    G.$ZodCheck.init(e, t),
      (n = e._zod.def).when ??
        (n.when = (i) => {
          let r = i.value;
          return !lt.nullish(r) && r.length !== void 0;
        }),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag;
        (r.minimum = t.length), (r.maximum = t.length), (r.length = t.length);
      }),
      (e._zod.check = (i) => {
        let r = i.value,
          o = r.length;
        if (o === t.length) return;
        let s = lt.getLengthableOrigin(r),
          u = o > t.length;
        i.issues.push({
          origin: s,
          ...(u ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }),
          inclusive: !0,
          exact: !0,
          input: i.value,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckStringFormat = at.$constructor("$ZodCheckStringFormat", (e, t) => {
    var n, i;
    if (
      (G.$ZodCheck.init(e, t),
      e._zod.onattach.push((r) => {
        let o = r._zod.bag;
        if (((o.format = t.format), t.pattern)) o.patterns ?? (o.patterns = new Set()), o.patterns.add(t.pattern);
      }),
      t.pattern)
    )
      (n = e._zod).check ??
        (n.check = (r) => {
          if (((t.pattern.lastIndex = 0), t.pattern.test(r.value))) return;
          r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: t.format,
            input: r.value,
            ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
            inst: e,
            continue: !t.abort,
          });
        });
    else (i = e._zod).check ?? (i.check = () => {});
  });
  G.$ZodCheckRegex = at.$constructor("$ZodCheckRegex", (e, t) => {
    G.$ZodCheckStringFormat.init(e, t),
      (e._zod.check = (n) => {
        if (((t.pattern.lastIndex = 0), t.pattern.test(n.value))) return;
        n.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "regex",
          input: n.value,
          pattern: t.pattern.toString(),
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckLowerCase = at.$constructor("$ZodCheckLowerCase", (e, t) => {
    t.pattern ?? (t.pattern = id.lowercase), G.$ZodCheckStringFormat.init(e, t);
  });
  G.$ZodCheckUpperCase = at.$constructor("$ZodCheckUpperCase", (e, t) => {
    t.pattern ?? (t.pattern = id.uppercase), G.$ZodCheckStringFormat.init(e, t);
  });
  G.$ZodCheckIncludes = at.$constructor("$ZodCheckIncludes", (e, t) => {
    G.$ZodCheck.init(e, t);
    let n = lt.escapeRegex(t.includes),
      i = new RegExp(typeof t.position === "number" ? `^.{${t.position}}${n}` : n);
    (t.pattern = i),
      e._zod.onattach.push((r) => {
        let o = r._zod.bag;
        o.patterns ?? (o.patterns = new Set()), o.patterns.add(i);
      }),
      (e._zod.check = (r) => {
        if (r.value.includes(t.includes, t.position)) return;
        r.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "includes",
          includes: t.includes,
          input: r.value,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckStartsWith = at.$constructor("$ZodCheckStartsWith", (e, t) => {
    G.$ZodCheck.init(e, t);
    let n = new RegExp(`^${lt.escapeRegex(t.prefix)}.*`);
    t.pattern ?? (t.pattern = n),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag;
        r.patterns ?? (r.patterns = new Set()), r.patterns.add(n);
      }),
      (e._zod.check = (i) => {
        if (i.value.startsWith(t.prefix)) return;
        i.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "starts_with",
          prefix: t.prefix,
          input: i.value,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  G.$ZodCheckEndsWith = at.$constructor("$ZodCheckEndsWith", (e, t) => {
    G.$ZodCheck.init(e, t);
    let n = new RegExp(`.*${lt.escapeRegex(t.suffix)}$`);
    t.pattern ?? (t.pattern = n),
      e._zod.onattach.push((i) => {
        let r = i._zod.bag;
        r.patterns ?? (r.patterns = new Set()), r.patterns.add(n);
      }),
      (e._zod.check = (i) => {
        if (i.value.endsWith(t.suffix)) return;
        i.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "ends_with",
          suffix: t.suffix,
          input: i.value,
          inst: e,
          continue: !t.abort,
        });
      });
  });
  function Fh(e, t, n) {
    if (e.issues.length) t.issues.push(...lt.prefixIssues(n, e.issues));
  }
  G.$ZodCheckProperty = at.$constructor("$ZodCheckProperty", (e, t) => {
    G.$ZodCheck.init(e, t),
      (e._zod.check = (n) => {
        let i = t.schema._zod.run({ value: n.value[t.property], issues: [] }, {});
        if (i instanceof Promise) return i.then((r) => Fh(r, n, t.property));
        Fh(i, n, t.property);
        return;
      });
  });
  G.$ZodCheckMimeType = at.$constructor("$ZodCheckMimeType", (e, t) => {
    G.$ZodCheck.init(e, t);
    let n = new Set(t.mime);
    e._zod.onattach.push((i) => {
      i._zod.bag.mime = t.mime;
    }),
      (e._zod.check = (i) => {
        if (n.has(i.value.type)) return;
        i.issues.push({ code: "invalid_value", values: t.mime, input: i.value.type, inst: e, continue: !t.abort });
      });
  });
  G.$ZodCheckOverwrite = at.$constructor("$ZodCheckOverwrite", (e, t) => {
    G.$ZodCheck.init(e, t),
      (e._zod.check = (n) => {
        n.value = t.tx(n.value);
      });
  });
});

var od = S(function (qh) {
  Object.defineProperty(qh, "__esModule", { value: !0 });
  qh.Doc = void 0;
  class Kh {
    constructor(e = []) {
      if (((this.content = []), (this.indent = 0), this)) this.args = e;
    }
    indented(e) {
      (this.indent += 1), e(this), (this.indent -= 1);
    }
    write(e) {
      if (typeof e === "function") {
        e(this, { execution: "sync" }), e(this, { execution: "async" });
        return;
      }
      let n = e
          .split(`
`)
          .filter((o) => o),
        i = Math.min(...n.map((o) => o.length - o.trimStart().length)),
        r = n.map((o) => o.slice(i)).map((o) => " ".repeat(this.indent * 2) + o);
      for (let o of r) this.content.push(o);
    }
    compile() {
      let e = Function,
        t = this?.args,
        i = [...(this?.content ?? [""]).map((r) => `  ${r}`)];
      return new e(
        ...t,
        i.join(`
`),
      );
    }
  }
  qh.Doc = Kh;
});

var ad = S(function (Vh) {
  Object.defineProperty(Vh, "__esModule", { value: !0 });
  Vh.version = void 0;
  Vh.version = { major: 4, minor: 4, patch: 3 };
});

var ld = S(function (O) {
  var eR =
      (O && O.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    tR =
      (O && O.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    vs =
      (O && O.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) eR(t, e, n);
        }
        return tR(t, e), t;
      };
  Object.defineProperty(O, "__esModule", { value: !0 });
  O.$ZodTuple =
    O.$ZodIntersection =
    O.$ZodDiscriminatedUnion =
    O.$ZodXor =
    O.$ZodUnion =
    O.$ZodObjectJIT =
    O.$ZodObject =
    O.$ZodArray =
    O.$ZodDate =
    O.$ZodVoid =
    O.$ZodNever =
    O.$ZodUnknown =
    O.$ZodAny =
    O.$ZodNull =
    O.$ZodUndefined =
    O.$ZodSymbol =
    O.$ZodBigIntFormat =
    O.$ZodBigInt =
    O.$ZodBoolean =
    O.$ZodNumberFormat =
    O.$ZodNumber =
    O.$ZodCustomStringFormat =
    O.$ZodJWT =
    O.$ZodE164 =
    O.$ZodBase64URL =
    O.$ZodBase64 =
    O.$ZodCIDRv6 =
    O.$ZodCIDRv4 =
    O.$ZodMAC =
    O.$ZodIPv6 =
    O.$ZodIPv4 =
    O.$ZodISODuration =
    O.$ZodISOTime =
    O.$ZodISODate =
    O.$ZodISODateTime =
    O.$ZodKSUID =
    O.$ZodXID =
    O.$ZodULID =
    O.$ZodCUID2 =
    O.$ZodCUID =
    O.$ZodNanoID =
    O.$ZodEmoji =
    O.$ZodURL =
    O.$ZodEmail =
    O.$ZodUUID =
    O.$ZodGUID =
    O.$ZodStringFormat =
    O.$ZodString =
    O.clone =
    O.$ZodType =
      void 0;
  O.$ZodCustom =
    O.$ZodLazy =
    O.$ZodPromise =
    O.$ZodFunction =
    O.$ZodTemplateLiteral =
    O.$ZodReadonly =
    O.$ZodPreprocess =
    O.$ZodCodec =
    O.$ZodPipe =
    O.$ZodNaN =
    O.$ZodCatch =
    O.$ZodSuccess =
    O.$ZodNonOptional =
    O.$ZodPrefault =
    O.$ZodDefault =
    O.$ZodNullable =
    O.$ZodExactOptional =
    O.$ZodOptional =
    O.$ZodTransform =
    O.$ZodFile =
    O.$ZodLiteral =
    O.$ZodEnum =
    O.$ZodSet =
    O.$ZodMap =
    O.$ZodRecord =
      void 0;
  O.isValidBase64 = cd;
  O.isValidBase64URL = c_;
  O.isValidJWT = l_;
  var ws = vs(gs()),
    U = vs(yi()),
    rR = od(),
    qi = rd(),
    De = vs(ms()),
    N = vs(Y()),
    nR = ad();
  O.$ZodType = U.$constructor("$ZodType", (e, t) => {
    var n;
    e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = nR.version);
    let i = [...(e._zod.def.checks ?? [])];
    if (e._zod.traits.has("$ZodCheck")) i.unshift(e);
    for (let r of i) for (let o of r._zod.onattach) o(e);
    if (i.length === 0)
      (n = e._zod).deferred ?? (n.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        });
    else {
      let r = (s, u, c) => {
          let d = N.aborted(s),
            f;
          for (let p of u) {
            if (p._zod.def.when) {
              if (N.explicitlyAborted(s)) continue;
              if (!p._zod.def.when(s)) continue;
            } else if (d) continue;
            let h = s.issues.length,
              y = p._zod.check(s);
            if (y instanceof Promise && c?.async === !1) throw new U.$ZodAsyncError();
            if (f || y instanceof Promise)
              f = (f ?? Promise.resolve()).then(async () => {
                if ((await y, s.issues.length === h)) return;
                if (!d) d = N.aborted(s, h);
              });
            else {
              if (s.issues.length === h) continue;
              if (!d) d = N.aborted(s, h);
            }
          }
          if (f) return f.then(() => s);
          return s;
        },
        o = (s, u, c) => {
          if (N.aborted(s)) return (s.aborted = !0), s;
          let d = r(u, i, c);
          if (d instanceof Promise) {
            if (c.async === !1) throw new U.$ZodAsyncError();
            return d.then((f) => e._zod.parse(f, c));
          }
          return e._zod.parse(d, c);
        };
      e._zod.run = (s, u) => {
        if (u.skipChecks) return e._zod.parse(s, u);
        if (u.direction === "backward") {
          let d = e._zod.parse({ value: s.value, issues: [] }, { ...u, skipChecks: !0 });
          if (d instanceof Promise) return d.then((f) => o(f, s, u));
          return o(d, s, u);
        }
        let c = e._zod.parse(s, u);
        if (c instanceof Promise) {
          if (u.async === !1) throw new U.$ZodAsyncError();
          return c.then((d) => r(d, i, u));
        }
        return r(c, i, u);
      };
    }
    N.defineLazy(e, "~standard", () => ({
      validate: (r) => {
        try {
          let o = (0, qi.safeParse)(e, r);
          return o.success ? { value: o.data } : { issues: o.error?.issues };
        } catch (o) {
          return (0, qi.safeParseAsync)(e, r).then((s) =>
            s.success ? { value: s.data } : { issues: s.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    }));
  });
  var iR = Y();
  Object.defineProperty(O, "clone", {
    enumerable: !0,
    get: function () {
      return iR.clone;
    },
  });
  O.$ZodString = U.$constructor("$ZodString", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? De.string(e._zod.bag)),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = String(n.value);
          } catch (r) {}
        if (typeof n.value === "string") return n;
        return n.issues.push({ expected: "string", code: "invalid_type", input: n.value, inst: e }), n;
      });
  });
  O.$ZodStringFormat = U.$constructor("$ZodStringFormat", (e, t) => {
    ws.$ZodCheckStringFormat.init(e, t), O.$ZodString.init(e, t);
  });
  O.$ZodGUID = U.$constructor("$ZodGUID", (e, t) => {
    t.pattern ?? (t.pattern = De.guid), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodUUID = U.$constructor("$ZodUUID", (e, t) => {
    if (t.version) {
      let i = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
      if (i === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = De.uuid(i));
    } else t.pattern ?? (t.pattern = De.uuid());
    O.$ZodStringFormat.init(e, t);
  });
  O.$ZodEmail = U.$constructor("$ZodEmail", (e, t) => {
    t.pattern ?? (t.pattern = De.email), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodURL = U.$constructor("$ZodURL", (e, t) => {
    O.$ZodStringFormat.init(e, t),
      (e._zod.check = (n) => {
        try {
          let i = n.value.trim();
          if (!t.normalize && t.protocol?.source === De.httpProtocol.source) {
            if (!/^https?:\/\//i.test(i)) {
              n.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid URL format",
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
              return;
            }
          }
          let r = new URL(i);
          if (t.hostname) {
            if (((t.hostname.lastIndex = 0), !t.hostname.test(r.hostname)))
              n.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: t.hostname.source,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }
          if (t.protocol) {
            if (
              ((t.protocol.lastIndex = 0),
              !t.protocol.test(r.protocol.endsWith(":") ? r.protocol.slice(0, -1) : r.protocol))
            )
              n.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: t.protocol.source,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }
          if (t.normalize) n.value = r.href;
          else n.value = i;
          return;
        } catch (i) {
          n.issues.push({ code: "invalid_format", format: "url", input: n.value, inst: e, continue: !t.abort });
        }
      });
  });
  O.$ZodEmoji = U.$constructor("$ZodEmoji", (e, t) => {
    t.pattern ?? (t.pattern = De.emoji()), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodNanoID = U.$constructor("$ZodNanoID", (e, t) => {
    t.pattern ?? (t.pattern = De.nanoid), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodCUID = U.$constructor("$ZodCUID", (e, t) => {
    t.pattern ?? (t.pattern = De.cuid), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodCUID2 = U.$constructor("$ZodCUID2", (e, t) => {
    t.pattern ?? (t.pattern = De.cuid2), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodULID = U.$constructor("$ZodULID", (e, t) => {
    t.pattern ?? (t.pattern = De.ulid), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodXID = U.$constructor("$ZodXID", (e, t) => {
    t.pattern ?? (t.pattern = De.xid), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodKSUID = U.$constructor("$ZodKSUID", (e, t) => {
    t.pattern ?? (t.pattern = De.ksuid), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodISODateTime = U.$constructor("$ZodISODateTime", (e, t) => {
    t.pattern ?? (t.pattern = De.datetime(t)), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodISODate = U.$constructor("$ZodISODate", (e, t) => {
    t.pattern ?? (t.pattern = De.date), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodISOTime = U.$constructor("$ZodISOTime", (e, t) => {
    t.pattern ?? (t.pattern = De.time(t)), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodISODuration = U.$constructor("$ZodISODuration", (e, t) => {
    t.pattern ?? (t.pattern = De.duration), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodIPv4 = U.$constructor("$ZodIPv4", (e, t) => {
    t.pattern ?? (t.pattern = De.ipv4), O.$ZodStringFormat.init(e, t), (e._zod.bag.format = "ipv4");
  });
  O.$ZodIPv6 = U.$constructor("$ZodIPv6", (e, t) => {
    t.pattern ?? (t.pattern = De.ipv6),
      O.$ZodStringFormat.init(e, t),
      (e._zod.bag.format = "ipv6"),
      (e._zod.check = (n) => {
        try {
          new URL(`http://[${n.value}]`);
        } catch {
          n.issues.push({ code: "invalid_format", format: "ipv6", input: n.value, inst: e, continue: !t.abort });
        }
      });
  });
  O.$ZodMAC = U.$constructor("$ZodMAC", (e, t) => {
    t.pattern ?? (t.pattern = De.mac(t.delimiter)), O.$ZodStringFormat.init(e, t), (e._zod.bag.format = "mac");
  });
  O.$ZodCIDRv4 = U.$constructor("$ZodCIDRv4", (e, t) => {
    t.pattern ?? (t.pattern = De.cidrv4), O.$ZodStringFormat.init(e, t);
  });
  O.$ZodCIDRv6 = U.$constructor("$ZodCIDRv6", (e, t) => {
    t.pattern ?? (t.pattern = De.cidrv6),
      O.$ZodStringFormat.init(e, t),
      (e._zod.check = (n) => {
        let i = n.value.split("/");
        try {
          if (i.length !== 2) throw Error();
          let [r, o] = i;
          if (!o) throw Error();
          let s = Number(o);
          if (`${s}` !== o) throw Error();
          if (s < 0 || s > 128) throw Error();
          new URL(`http://[${r}]`);
        } catch {
          n.issues.push({ code: "invalid_format", format: "cidrv6", input: n.value, inst: e, continue: !t.abort });
        }
      });
  });
  function cd(e) {
    if (e === "") return !0;
    if (/\s/.test(e)) return !1;
    if (e.length % 4 !== 0) return !1;
    try {
      return atob(e), !0;
    } catch {
      return !1;
    }
  }
  O.$ZodBase64 = U.$constructor("$ZodBase64", (e, t) => {
    t.pattern ?? (t.pattern = De.base64),
      O.$ZodStringFormat.init(e, t),
      (e._zod.bag.contentEncoding = "base64"),
      (e._zod.check = (n) => {
        if (cd(n.value)) return;
        n.issues.push({ code: "invalid_format", format: "base64", input: n.value, inst: e, continue: !t.abort });
      });
  });
  function c_(e) {
    if (!De.base64url.test(e)) return !1;
    let t = e.replace(/[-_]/g, (i) => (i === "-" ? "+" : "/")),
      n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
    return cd(n);
  }
  O.$ZodBase64URL = U.$constructor("$ZodBase64URL", (e, t) => {
    t.pattern ?? (t.pattern = De.base64url),
      O.$ZodStringFormat.init(e, t),
      (e._zod.bag.contentEncoding = "base64url"),
      (e._zod.check = (n) => {
        if (c_(n.value)) return;
        n.issues.push({ code: "invalid_format", format: "base64url", input: n.value, inst: e, continue: !t.abort });
      });
  });
  O.$ZodE164 = U.$constructor("$ZodE164", (e, t) => {
    t.pattern ?? (t.pattern = De.e164), O.$ZodStringFormat.init(e, t);
  });
  function l_(e, t = null) {
    try {
      let n = e.split(".");
      if (n.length !== 3) return !1;
      let [i] = n;
      if (!i) return !1;
      let r = JSON.parse(atob(i));
      if ("typ" in r && r?.typ !== "JWT") return !1;
      if (!r.alg) return !1;
      if (t && (!("alg" in r) || r.alg !== t)) return !1;
      return !0;
    } catch {
      return !1;
    }
  }
  O.$ZodJWT = U.$constructor("$ZodJWT", (e, t) => {
    O.$ZodStringFormat.init(e, t),
      (e._zod.check = (n) => {
        if (l_(n.value, t.alg)) return;
        n.issues.push({ code: "invalid_format", format: "jwt", input: n.value, inst: e, continue: !t.abort });
      });
  });
  O.$ZodCustomStringFormat = U.$constructor("$ZodCustomStringFormat", (e, t) => {
    O.$ZodStringFormat.init(e, t),
      (e._zod.check = (n) => {
        if (t.fn(n.value)) return;
        n.issues.push({ code: "invalid_format", format: t.format, input: n.value, inst: e, continue: !t.abort });
      });
  });
  O.$ZodNumber = U.$constructor("$ZodNumber", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.pattern = e._zod.bag.pattern ?? De.number),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = Number(n.value);
          } catch (s) {}
        let r = n.value;
        if (typeof r === "number" && !Number.isNaN(r) && Number.isFinite(r)) return n;
        let o = typeof r === "number" ? (Number.isNaN(r) ? "NaN" : !Number.isFinite(r) ? "Infinity" : void 0) : void 0;
        return (
          n.issues.push({ expected: "number", code: "invalid_type", input: r, inst: e, ...(o ? { received: o } : {}) }),
          n
        );
      });
  });
  O.$ZodNumberFormat = U.$constructor("$ZodNumberFormat", (e, t) => {
    ws.$ZodCheckNumberFormat.init(e, t), O.$ZodNumber.init(e, t);
  });
  O.$ZodBoolean = U.$constructor("$ZodBoolean", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.pattern = De.boolean),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = Boolean(n.value);
          } catch (o) {}
        let r = n.value;
        if (typeof r === "boolean") return n;
        return n.issues.push({ expected: "boolean", code: "invalid_type", input: r, inst: e }), n;
      });
  });
  O.$ZodBigInt = U.$constructor("$ZodBigInt", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.pattern = De.bigint),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = BigInt(n.value);
          } catch (r) {}
        if (typeof n.value === "bigint") return n;
        return n.issues.push({ expected: "bigint", code: "invalid_type", input: n.value, inst: e }), n;
      });
  });
  O.$ZodBigIntFormat = U.$constructor("$ZodBigIntFormat", (e, t) => {
    ws.$ZodCheckBigIntFormat.init(e, t), O.$ZodBigInt.init(e, t);
  });
  O.$ZodSymbol = U.$constructor("$ZodSymbol", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (typeof r === "symbol") return n;
        return n.issues.push({ expected: "symbol", code: "invalid_type", input: r, inst: e }), n;
      });
  });
  O.$ZodUndefined = U.$constructor("$ZodUndefined", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.pattern = De.undefined),
      (e._zod.values = new Set([void 0])),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (typeof r > "u") return n;
        return n.issues.push({ expected: "undefined", code: "invalid_type", input: r, inst: e }), n;
      });
  });
  O.$ZodNull = U.$constructor("$ZodNull", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.pattern = De.null),
      (e._zod.values = new Set([null])),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (r === null) return n;
        return n.issues.push({ expected: "null", code: "invalid_type", input: r, inst: e }), n;
      });
  });
  O.$ZodAny = U.$constructor("$ZodAny", (e, t) => {
    O.$ZodType.init(e, t), (e._zod.parse = (n) => n);
  });
  O.$ZodUnknown = U.$constructor("$ZodUnknown", (e, t) => {
    O.$ZodType.init(e, t), (e._zod.parse = (n) => n);
  });
  O.$ZodNever = U.$constructor("$ZodNever", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => (
        n.issues.push({ expected: "never", code: "invalid_type", input: n.value, inst: e }), n
      ));
  });
  O.$ZodVoid = U.$constructor("$ZodVoid", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (typeof r > "u") return n;
        return n.issues.push({ expected: "void", code: "invalid_type", input: r, inst: e }), n;
      });
  });
  O.$ZodDate = U.$constructor("$ZodDate", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => {
        if (t.coerce)
          try {
            n.value = new Date(n.value);
          } catch (u) {}
        let r = n.value,
          o = r instanceof Date;
        if (o && !Number.isNaN(r.getTime())) return n;
        return (
          n.issues.push({
            expected: "date",
            code: "invalid_type",
            input: r,
            ...(o ? { received: "Invalid Date" } : {}),
            inst: e,
          }),
          n
        );
      });
  });
  function Wh(e, t, n) {
    if (e.issues.length) t.issues.push(...N.prefixIssues(n, e.issues));
    t.value[n] = e.value;
  }
  O.$ZodArray = U.$constructor("$ZodArray", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (!Array.isArray(r)) return n.issues.push({ expected: "array", code: "invalid_type", input: r, inst: e }), n;
        n.value = Array(r.length);
        let o = [];
        for (let s = 0; s < r.length; s++) {
          let u = r[s],
            c = t.element._zod.run({ value: u, issues: [] }, i);
          if (c instanceof Promise) o.push(c.then((d) => Wh(d, n, s)));
          else Wh(c, n, s);
        }
        if (o.length) return Promise.all(o).then(() => n);
        return n;
      });
  });
  function bs(e, t, n, i, r, o) {
    let s = n in i;
    if (e.issues.length) {
      if (r && o && !s) return;
      t.issues.push(...N.prefixIssues(n, e.issues));
    }
    if (!s && !r) {
      if (!e.issues.length) t.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [n] });
      return;
    }
    if (e.value === void 0) {
      if (s) t.value[n] = void 0;
    } else t.value[n] = e.value;
  }
  function d_(e) {
    let t = Object.keys(e.shape);
    for (let i of t)
      if (!e.shape?.[i]?._zod?.traits?.has("$ZodType"))
        throw Error(`Invalid element at key "${i}": expected a Zod schema`);
    let n = N.optionalKeys(e.shape);
    return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(n) };
  }
  function f_(e, t, n, i, r, o) {
    let s = [],
      u = r.keySet,
      c = r.catchall._zod,
      d = c.def.type,
      f = c.optin === "optional",
      p = c.optout === "optional";
    for (let h in t) {
      if (h === "__proto__") continue;
      if (u.has(h)) continue;
      if (d === "never") {
        s.push(h);
        continue;
      }
      let y = c.run({ value: t[h], issues: [] }, i);
      if (y instanceof Promise) e.push(y.then((v) => bs(v, n, h, t, f, p)));
      else bs(y, n, h, t, f, p);
    }
    if (s.length) n.issues.push({ code: "unrecognized_keys", keys: s, input: t, inst: o });
    if (!e.length) return n;
    return Promise.all(e).then(() => n);
  }
  O.$ZodObject = U.$constructor("$ZodObject", (e, t) => {
    if ((O.$ZodType.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get)) {
      let u = t.shape;
      Object.defineProperty(t, "shape", {
        get: () => {
          let c = { ...u };
          return Object.defineProperty(t, "shape", { value: c }), c;
        },
      });
    }
    let i = N.cached(() => d_(t));
    N.defineLazy(e._zod, "propValues", () => {
      let u = t.shape,
        c = {};
      for (let d in u) {
        let f = u[d]._zod;
        if (f.values) {
          c[d] ?? (c[d] = new Set());
          for (let p of f.values) c[d].add(p);
        }
      }
      return c;
    });
    let r = N.isObject,
      o = t.catchall,
      s;
    e._zod.parse = (u, c) => {
      s ?? (s = i.value);
      let d = u.value;
      if (!r(d)) return u.issues.push({ expected: "object", code: "invalid_type", input: d, inst: e }), u;
      u.value = {};
      let f = [],
        p = s.shape;
      for (let h of s.keys) {
        let y = p[h],
          v = y._zod.optin === "optional",
          k = y._zod.optout === "optional",
          P = y._zod.run({ value: d[h], issues: [] }, c);
        if (P instanceof Promise) f.push(P.then((B) => bs(B, u, h, d, v, k)));
        else bs(P, u, h, d, v, k);
      }
      if (!o) return f.length ? Promise.all(f).then(() => u) : u;
      return f_(f, d, u, c, i.value, e);
    };
  });
  O.$ZodObjectJIT = U.$constructor("$ZodObjectJIT", (e, t) => {
    O.$ZodObject.init(e, t);
    let n = e._zod.parse,
      i = N.cached(() => d_(t)),
      r = (h) => {
        let y = new rR.Doc(["shape", "payload", "ctx"]),
          v = i.value,
          k = (ge) => {
            let re = N.esc(ge);
            return `shape[${re}]._zod.run({ value: input[${re}], issues: [] }, ctx)`;
          };
        y.write("const input = payload.value;");
        let P = Object.create(null),
          B = 0;
        for (let ge of v.keys) P[ge] = `key_${B++}`;
        y.write("const newResult = {};");
        for (let ge of v.keys) {
          let re = P[ge],
            Se = N.esc(ge),
            Ge = h[ge],
            ve = Ge?._zod?.optin === "optional",
            Oe = Ge?._zod?.optout === "optional";
          if ((y.write(`const ${re} = ${k(ge)};`), ve && Oe))
            y.write(`
        if (${re}.issues.length) {
          if (${Se} in input) {
            payload.issues = payload.issues.concat(${re}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${Se}, ...iss.path] : [${Se}]
            })));
          }
        }
        
        if (${re}.value === undefined) {
          if (${Se} in input) {
            newResult[${Se}] = undefined;
          }
        } else {
          newResult[${Se}] = ${re}.value;
        }
        
      `);
          else if (!ve)
            y.write(`
        const ${re}_present = ${Se} in input;
        if (${re}.issues.length) {
          payload.issues = payload.issues.concat(${re}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Se}, ...iss.path] : [${Se}]
          })));
        }
        if (!${re}_present && !${re}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${Se}]
          });
        }

        if (${re}_present) {
          if (${re}.value === undefined) {
            newResult[${Se}] = undefined;
          } else {
            newResult[${Se}] = ${re}.value;
          }
        }

      `);
          else
            y.write(`
        if (${re}.issues.length) {
          payload.issues = payload.issues.concat(${re}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Se}, ...iss.path] : [${Se}]
          })));
        }
        
        if (${re}.value === undefined) {
          if (${Se} in input) {
            newResult[${Se}] = undefined;
          }
        } else {
          newResult[${Se}] = ${re}.value;
        }
        
      `);
        }
        y.write("payload.value = newResult;"), y.write("return payload;");
        let Q = y.compile();
        return (ge, re) => Q(h, ge, re);
      },
      o,
      s = N.isObject,
      u = !U.globalConfig.jitless,
      c = N.allowsEval,
      d = u && c.value,
      f = t.catchall,
      p;
    e._zod.parse = (h, y) => {
      p ?? (p = i.value);
      let v = h.value;
      if (!s(v)) return h.issues.push({ expected: "object", code: "invalid_type", input: v, inst: e }), h;
      if (u && d && y?.async === !1 && y.jitless !== !0) {
        if (!o) o = r(t.shape);
        if (((h = o(h, y)), !f)) return h;
        return f_([], v, h, y, p, e);
      }
      return n(h, y);
    };
  });
  function Jh(e, t, n, i) {
    for (let o of e) if (o.issues.length === 0) return (t.value = o.value), t;
    let r = e.filter((o) => !N.aborted(o));
    if (r.length === 1) return (t.value = r[0].value), r[0];
    return (
      t.issues.push({
        code: "invalid_union",
        input: t.value,
        inst: n,
        errors: e.map((o) => o.issues.map((s) => N.finalizeIssue(s, i, U.config()))),
      }),
      t
    );
  }
  O.$ZodUnion = U.$constructor("$ZodUnion", (e, t) => {
    O.$ZodType.init(e, t),
      N.defineLazy(e._zod, "optin", () => (t.options.some((i) => i._zod.optin === "optional") ? "optional" : void 0)),
      N.defineLazy(e._zod, "optout", () => (t.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0)),
      N.defineLazy(e._zod, "values", () => {
        if (t.options.every((i) => i._zod.values)) return new Set(t.options.flatMap((i) => Array.from(i._zod.values)));
        return;
      }),
      N.defineLazy(e._zod, "pattern", () => {
        if (t.options.every((i) => i._zod.pattern)) {
          let i = t.options.map((r) => r._zod.pattern);
          return new RegExp(`^(${i.map((r) => N.cleanRegex(r.source)).join("|")})$`);
        }
        return;
      });
    let n = t.options.length === 1 ? t.options[0]._zod.run : null;
    e._zod.parse = (i, r) => {
      if (n) return n(i, r);
      let o = !1,
        s = [];
      for (let u of t.options) {
        let c = u._zod.run({ value: i.value, issues: [] }, r);
        if (c instanceof Promise) s.push(c), (o = !0);
        else {
          if (c.issues.length === 0) return c;
          s.push(c);
        }
      }
      if (!o) return Jh(s, i, e, r);
      return Promise.all(s).then((u) => Jh(u, i, e, r));
    };
  });
  function Yh(e, t, n, i) {
    let r = e.filter((o) => o.issues.length === 0);
    if (r.length === 1) return (t.value = r[0].value), t;
    if (r.length === 0)
      t.issues.push({
        code: "invalid_union",
        input: t.value,
        inst: n,
        errors: e.map((o) => o.issues.map((s) => N.finalizeIssue(s, i, U.config()))),
      });
    else t.issues.push({ code: "invalid_union", input: t.value, inst: n, errors: [], inclusive: !1 });
    return t;
  }
  O.$ZodXor = U.$constructor("$ZodXor", (e, t) => {
    O.$ZodUnion.init(e, t), (t.inclusive = !1);
    let n = t.options.length === 1 ? t.options[0]._zod.run : null;
    e._zod.parse = (i, r) => {
      if (n) return n(i, r);
      let o = !1,
        s = [];
      for (let u of t.options) {
        let c = u._zod.run({ value: i.value, issues: [] }, r);
        if (c instanceof Promise) s.push(c), (o = !0);
        else s.push(c);
      }
      if (!o) return Yh(s, i, e, r);
      return Promise.all(s).then((u) => Yh(u, i, e, r));
    };
  });
  O.$ZodDiscriminatedUnion = U.$constructor("$ZodDiscriminatedUnion", (e, t) => {
    (t.inclusive = !1), O.$ZodUnion.init(e, t);
    let n = e._zod.parse;
    N.defineLazy(e._zod, "propValues", () => {
      let r = {};
      for (let o of t.options) {
        let s = o._zod.propValues;
        if (!s || Object.keys(s).length === 0)
          throw Error(`Invalid discriminated union option at index "${t.options.indexOf(o)}"`);
        for (let [u, c] of Object.entries(s)) {
          if (!r[u]) r[u] = new Set();
          for (let d of c) r[u].add(d);
        }
      }
      return r;
    });
    let i = N.cached(() => {
      let r = t.options,
        o = new Map();
      for (let s of r) {
        let u = s._zod.propValues?.[t.discriminator];
        if (!u || u.size === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(s)}"`);
        for (let c of u) {
          if (o.has(c)) throw Error(`Duplicate discriminator value "${String(c)}"`);
          o.set(c, s);
        }
      }
      return o;
    });
    e._zod.parse = (r, o) => {
      let s = r.value;
      if (!N.isObject(s)) return r.issues.push({ code: "invalid_type", expected: "object", input: s, inst: e }), r;
      let u = i.value.get(s?.[t.discriminator]);
      if (u) return u._zod.run(r, o);
      if (t.unionFallback || o.direction === "backward") return n(r, o);
      return (
        r.issues.push({
          code: "invalid_union",
          errors: [],
          note: "No matching discriminator",
          discriminator: t.discriminator,
          options: Array.from(i.value.keys()),
          input: s,
          path: [t.discriminator],
          inst: e,
        }),
        r
      );
    };
  });
  O.$ZodIntersection = U.$constructor("$ZodIntersection", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value,
          o = t.left._zod.run({ value: r, issues: [] }, i),
          s = t.right._zod.run({ value: r, issues: [] }, i);
        if (o instanceof Promise || s instanceof Promise) return Promise.all([o, s]).then(([c, d]) => Xh(n, c, d));
        return Xh(n, o, s);
      });
  });
  function sd(e, t) {
    if (e === t) return { valid: !0, data: e };
    if (e instanceof Date && t instanceof Date && +e === +t) return { valid: !0, data: e };
    if (N.isPlainObject(e) && N.isPlainObject(t)) {
      let n = Object.keys(t),
        i = Object.keys(e).filter((o) => n.indexOf(o) !== -1),
        r = { ...e, ...t };
      for (let o of i) {
        let s = sd(e[o], t[o]);
        if (!s.valid) return { valid: !1, mergeErrorPath: [o, ...s.mergeErrorPath] };
        r[o] = s.data;
      }
      return { valid: !0, data: r };
    }
    if (Array.isArray(e) && Array.isArray(t)) {
      if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
      let n = [];
      for (let i = 0; i < e.length; i++) {
        let r = e[i],
          o = t[i],
          s = sd(r, o);
        if (!s.valid) return { valid: !1, mergeErrorPath: [i, ...s.mergeErrorPath] };
        n.push(s.data);
      }
      return { valid: !0, data: n };
    }
    return { valid: !1, mergeErrorPath: [] };
  }
  function Xh(e, t, n) {
    let i = new Map(),
      r;
    for (let u of t.issues)
      if (u.code === "unrecognized_keys") {
        r ?? (r = u);
        for (let c of u.keys) {
          if (!i.has(c)) i.set(c, {});
          i.get(c).l = !0;
        }
      } else e.issues.push(u);
    for (let u of n.issues)
      if (u.code === "unrecognized_keys")
        for (let c of u.keys) {
          if (!i.has(c)) i.set(c, {});
          i.get(c).r = !0;
        }
      else e.issues.push(u);
    let o = [...i].filter(([, u]) => u.l && u.r).map(([u]) => u);
    if (o.length && r) e.issues.push({ ...r, keys: o });
    if (N.aborted(e)) return e;
    let s = sd(t.value, n.value);
    if (!s.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
    return (e.value = s.data), e;
  }
  O.$ZodTuple = U.$constructor("$ZodTuple", (e, t) => {
    O.$ZodType.init(e, t);
    let n = t.items;
    e._zod.parse = (i, r) => {
      let o = i.value;
      if (!Array.isArray(o)) return i.issues.push({ input: o, inst: e, expected: "tuple", code: "invalid_type" }), i;
      i.value = [];
      let s = [],
        u = Qh(n, "optin"),
        c = Qh(n, "optout");
      if (!t.rest) {
        if (o.length < u)
          return i.issues.push({ code: "too_small", minimum: u, inclusive: !0, input: o, inst: e, origin: "array" }), i;
        if (o.length > n.length)
          i.issues.push({ code: "too_big", maximum: n.length, inclusive: !0, input: o, inst: e, origin: "array" });
      }
      let d = Array(n.length);
      for (let f = 0; f < n.length; f++) {
        let p = n[f]._zod.run({ value: o[f], issues: [] }, r);
        if (p instanceof Promise)
          s.push(
            p.then((h) => {
              d[f] = h;
            }),
          );
        else d[f] = p;
      }
      if (t.rest) {
        let f = n.length - 1,
          p = o.slice(n.length);
        for (let h of p) {
          f++;
          let y = t.rest._zod.run({ value: h, issues: [] }, r);
          if (y instanceof Promise) s.push(y.then((v) => e_(v, i, f)));
          else e_(y, i, f);
        }
      }
      if (s.length) return Promise.all(s).then(() => t_(d, i, n, o, c));
      return t_(d, i, n, o, c);
    };
  });
  function Qh(e, t) {
    for (let n = e.length - 1; n >= 0; n--) if (e[n]._zod[t] !== "optional") return n + 1;
    return 0;
  }
  function e_(e, t, n) {
    if (e.issues.length) t.issues.push(...N.prefixIssues(n, e.issues));
    t.value[n] = e.value;
  }
  function t_(e, t, n, i, r) {
    for (let o = 0; o < n.length; o++) {
      let s = e[o],
        u = o < i.length;
      if (s.issues.length) {
        if (!u && o >= r) {
          t.value.length = o;
          break;
        }
        t.issues.push(...N.prefixIssues(o, s.issues));
      }
      t.value[o] = s.value;
    }
    for (let o = t.value.length - 1; o >= i.length; o--)
      if (n[o]._zod.optout === "optional" && t.value[o] === void 0) t.value.length = o;
      else break;
    return t;
  }
  O.$ZodRecord = U.$constructor("$ZodRecord", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (!N.isPlainObject(r))
          return n.issues.push({ expected: "record", code: "invalid_type", input: r, inst: e }), n;
        let o = [],
          s = t.keyType._zod.values;
        if (s) {
          n.value = {};
          let u = new Set();
          for (let d of s)
            if (typeof d === "string" || typeof d === "number" || typeof d === "symbol") {
              u.add(typeof d === "number" ? d.toString() : d);
              let f = t.keyType._zod.run({ value: d, issues: [] }, i);
              if (f instanceof Promise) throw Error("Async schemas not supported in object keys currently");
              if (f.issues.length) {
                n.issues.push({
                  code: "invalid_key",
                  origin: "record",
                  issues: f.issues.map((y) => N.finalizeIssue(y, i, U.config())),
                  input: d,
                  path: [d],
                  inst: e,
                });
                continue;
              }
              let p = f.value,
                h = t.valueType._zod.run({ value: r[d], issues: [] }, i);
              if (h instanceof Promise)
                o.push(
                  h.then((y) => {
                    if (y.issues.length) n.issues.push(...N.prefixIssues(d, y.issues));
                    n.value[p] = y.value;
                  }),
                );
              else {
                if (h.issues.length) n.issues.push(...N.prefixIssues(d, h.issues));
                n.value[p] = h.value;
              }
            }
          let c;
          for (let d in r) if (!u.has(d)) (c = c ?? []), c.push(d);
          if (c && c.length > 0) n.issues.push({ code: "unrecognized_keys", input: r, inst: e, keys: c });
        } else {
          n.value = {};
          for (let u of Reflect.ownKeys(r)) {
            if (u === "__proto__") continue;
            if (!Object.prototype.propertyIsEnumerable.call(r, u)) continue;
            let c = t.keyType._zod.run({ value: u, issues: [] }, i);
            if (c instanceof Promise) throw Error("Async schemas not supported in object keys currently");
            if (typeof u === "string" && De.number.test(u) && c.issues.length) {
              let p = t.keyType._zod.run({ value: Number(u), issues: [] }, i);
              if (p instanceof Promise) throw Error("Async schemas not supported in object keys currently");
              if (p.issues.length === 0) c = p;
            }
            if (c.issues.length) {
              if (t.mode === "loose") n.value[u] = r[u];
              else
                n.issues.push({
                  code: "invalid_key",
                  origin: "record",
                  issues: c.issues.map((p) => N.finalizeIssue(p, i, U.config())),
                  input: u,
                  path: [u],
                  inst: e,
                });
              continue;
            }
            let f = t.valueType._zod.run({ value: r[u], issues: [] }, i);
            if (f instanceof Promise)
              o.push(
                f.then((p) => {
                  if (p.issues.length) n.issues.push(...N.prefixIssues(u, p.issues));
                  n.value[c.value] = p.value;
                }),
              );
            else {
              if (f.issues.length) n.issues.push(...N.prefixIssues(u, f.issues));
              n.value[c.value] = f.value;
            }
          }
        }
        if (o.length) return Promise.all(o).then(() => n);
        return n;
      });
  });
  O.$ZodMap = U.$constructor("$ZodMap", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (!(r instanceof Map)) return n.issues.push({ expected: "map", code: "invalid_type", input: r, inst: e }), n;
        let o = [];
        n.value = new Map();
        for (let [s, u] of r) {
          let c = t.keyType._zod.run({ value: s, issues: [] }, i),
            d = t.valueType._zod.run({ value: u, issues: [] }, i);
          if (c instanceof Promise || d instanceof Promise)
            o.push(
              Promise.all([c, d]).then(([f, p]) => {
                r_(f, p, n, s, r, e, i);
              }),
            );
          else r_(c, d, n, s, r, e, i);
        }
        if (o.length) return Promise.all(o).then(() => n);
        return n;
      });
  });
  function r_(e, t, n, i, r, o, s) {
    if (e.issues.length)
      if (N.propertyKeyTypes.has(typeof i)) n.issues.push(...N.prefixIssues(i, e.issues));
      else
        n.issues.push({
          code: "invalid_key",
          origin: "map",
          input: r,
          inst: o,
          issues: e.issues.map((u) => N.finalizeIssue(u, s, U.config())),
        });
    if (t.issues.length)
      if (N.propertyKeyTypes.has(typeof i)) n.issues.push(...N.prefixIssues(i, t.issues));
      else
        n.issues.push({
          origin: "map",
          code: "invalid_element",
          input: r,
          inst: o,
          key: i,
          issues: t.issues.map((u) => N.finalizeIssue(u, s, U.config())),
        });
    n.value.set(e.value, t.value);
  }
  O.$ZodSet = U.$constructor("$ZodSet", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (!(r instanceof Set)) return n.issues.push({ input: r, inst: e, expected: "set", code: "invalid_type" }), n;
        let o = [];
        n.value = new Set();
        for (let s of r) {
          let u = t.valueType._zod.run({ value: s, issues: [] }, i);
          if (u instanceof Promise) o.push(u.then((c) => n_(c, n)));
          else n_(u, n);
        }
        if (o.length) return Promise.all(o).then(() => n);
        return n;
      });
  });
  function n_(e, t) {
    if (e.issues.length) t.issues.push(...e.issues);
    t.value.add(e.value);
  }
  O.$ZodEnum = U.$constructor("$ZodEnum", (e, t) => {
    O.$ZodType.init(e, t);
    let n = N.getEnumValues(t.entries),
      i = new Set(n);
    (e._zod.values = i),
      (e._zod.pattern = new RegExp(
        `^(${n
          .filter((r) => N.propertyKeyTypes.has(typeof r))
          .map((r) => (typeof r === "string" ? N.escapeRegex(r) : r.toString()))
          .join("|")})$`,
      )),
      (e._zod.parse = (r, o) => {
        let s = r.value;
        if (i.has(s)) return r;
        return r.issues.push({ code: "invalid_value", values: n, input: s, inst: e }), r;
      });
  });
  O.$ZodLiteral = U.$constructor("$ZodLiteral", (e, t) => {
    if ((O.$ZodType.init(e, t), t.values.length === 0))
      throw Error("Cannot create literal schema with no valid values");
    let n = new Set(t.values);
    (e._zod.values = n),
      (e._zod.pattern = new RegExp(
        `^(${t.values.map((i) => (typeof i === "string" ? N.escapeRegex(i) : i ? N.escapeRegex(i.toString()) : String(i))).join("|")})$`,
      )),
      (e._zod.parse = (i, r) => {
        let o = i.value;
        if (n.has(o)) return i;
        return i.issues.push({ code: "invalid_value", values: t.values, input: o, inst: e }), i;
      });
  });
  O.$ZodFile = U.$constructor("$ZodFile", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => {
        let r = n.value;
        if (r instanceof File) return n;
        return n.issues.push({ expected: "file", code: "invalid_type", input: r, inst: e }), n;
      });
  });
  O.$ZodTransform = U.$constructor("$ZodTransform", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.optin = "optional"),
      (e._zod.parse = (n, i) => {
        if (i.direction === "backward") throw new U.$ZodEncodeError(e.constructor.name);
        let r = t.transform(n.value, n);
        if (i.async)
          return (r instanceof Promise ? r : Promise.resolve(r)).then((s) => ((n.value = s), (n.fallback = !0), n));
        if (r instanceof Promise) throw new U.$ZodAsyncError();
        return (n.value = r), (n.fallback = !0), n;
      });
  });
  function i_(e, t) {
    if (t === void 0 && (e.issues.length || e.fallback)) return { issues: [], value: void 0 };
    return e;
  }
  O.$ZodOptional = U.$constructor("$ZodOptional", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      N.defineLazy(e._zod, "values", () =>
        t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0,
      ),
      N.defineLazy(e._zod, "pattern", () => {
        let n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${N.cleanRegex(n.source)})?$`) : void 0;
      }),
      (e._zod.parse = (n, i) => {
        if (t.innerType._zod.optin === "optional") {
          let r = n.value,
            o = t.innerType._zod.run(n, i);
          if (o instanceof Promise) return o.then((s) => i_(s, r));
          return i_(o, r);
        }
        if (n.value === void 0) return n;
        return t.innerType._zod.run(n, i);
      });
  });
  O.$ZodExactOptional = U.$constructor("$ZodExactOptional", (e, t) => {
    O.$ZodOptional.init(e, t),
      N.defineLazy(e._zod, "values", () => t.innerType._zod.values),
      N.defineLazy(e._zod, "pattern", () => t.innerType._zod.pattern),
      (e._zod.parse = (n, i) => t.innerType._zod.run(n, i));
  });
  O.$ZodNullable = U.$constructor("$ZodNullable", (e, t) => {
    O.$ZodType.init(e, t),
      N.defineLazy(e._zod, "optin", () => t.innerType._zod.optin),
      N.defineLazy(e._zod, "optout", () => t.innerType._zod.optout),
      N.defineLazy(e._zod, "pattern", () => {
        let n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${N.cleanRegex(n.source)}|null)$`) : void 0;
      }),
      N.defineLazy(e._zod, "values", () =>
        t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0,
      ),
      (e._zod.parse = (n, i) => {
        if (n.value === null) return n;
        return t.innerType._zod.run(n, i);
      });
  });
  O.$ZodDefault = U.$constructor("$ZodDefault", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.optin = "optional"),
      N.defineLazy(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (n, i) => {
        if (i.direction === "backward") return t.innerType._zod.run(n, i);
        if (n.value === void 0) return (n.value = t.defaultValue), n;
        let r = t.innerType._zod.run(n, i);
        if (r instanceof Promise) return r.then((o) => o_(o, t));
        return o_(r, t);
      });
  });
  function o_(e, t) {
    if (e.value === void 0) e.value = t.defaultValue;
    return e;
  }
  O.$ZodPrefault = U.$constructor("$ZodPrefault", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.optin = "optional"),
      N.defineLazy(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (n, i) => {
        if (i.direction === "backward") return t.innerType._zod.run(n, i);
        if (n.value === void 0) n.value = t.defaultValue;
        return t.innerType._zod.run(n, i);
      });
  });
  O.$ZodNonOptional = U.$constructor("$ZodNonOptional", (e, t) => {
    O.$ZodType.init(e, t),
      N.defineLazy(e._zod, "values", () => {
        let n = t.innerType._zod.values;
        return n ? new Set([...n].filter((i) => i !== void 0)) : void 0;
      }),
      (e._zod.parse = (n, i) => {
        let r = t.innerType._zod.run(n, i);
        if (r instanceof Promise) return r.then((o) => a_(o, e));
        return a_(r, e);
      });
  });
  function a_(e, t) {
    if (!e.issues.length && e.value === void 0)
      e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t });
    return e;
  }
  O.$ZodSuccess = U.$constructor("$ZodSuccess", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => {
        if (i.direction === "backward") throw new U.$ZodEncodeError("ZodSuccess");
        let r = t.innerType._zod.run(n, i);
        if (r instanceof Promise) return r.then((o) => ((n.value = o.issues.length === 0), n));
        return (n.value = r.issues.length === 0), n;
      });
  });
  O.$ZodCatch = U.$constructor("$ZodCatch", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.optin = "optional"),
      N.defineLazy(e._zod, "optout", () => t.innerType._zod.optout),
      N.defineLazy(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (n, i) => {
        if (i.direction === "backward") return t.innerType._zod.run(n, i);
        let r = t.innerType._zod.run(n, i);
        if (r instanceof Promise)
          return r.then((o) => {
            if (((n.value = o.value), o.issues.length))
              (n.value = t.catchValue({
                ...n,
                error: { issues: o.issues.map((s) => N.finalizeIssue(s, i, U.config())) },
                input: n.value,
              })),
                (n.issues = []),
                (n.fallback = !0);
            return n;
          });
        if (((n.value = r.value), r.issues.length))
          (n.value = t.catchValue({
            ...n,
            error: { issues: r.issues.map((o) => N.finalizeIssue(o, i, U.config())) },
            input: n.value,
          })),
            (n.issues = []),
            (n.fallback = !0);
        return n;
      });
  });
  O.$ZodNaN = U.$constructor("$ZodNaN", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => {
        if (typeof n.value !== "number" || !Number.isNaN(n.value))
          return n.issues.push({ input: n.value, inst: e, expected: "nan", code: "invalid_type" }), n;
        return n;
      });
  });
  O.$ZodPipe = U.$constructor("$ZodPipe", (e, t) => {
    O.$ZodType.init(e, t),
      N.defineLazy(e._zod, "values", () => t.in._zod.values),
      N.defineLazy(e._zod, "optin", () => t.in._zod.optin),
      N.defineLazy(e._zod, "optout", () => t.out._zod.optout),
      N.defineLazy(e._zod, "propValues", () => t.in._zod.propValues),
      (e._zod.parse = (n, i) => {
        if (i.direction === "backward") {
          let o = t.out._zod.run(n, i);
          if (o instanceof Promise) return o.then((s) => hs(s, t.in, i));
          return hs(o, t.in, i);
        }
        let r = t.in._zod.run(n, i);
        if (r instanceof Promise) return r.then((o) => hs(o, t.out, i));
        return hs(r, t.out, i);
      });
  });
  function hs(e, t, n) {
    if (e.issues.length) return (e.aborted = !0), e;
    return t._zod.run({ value: e.value, issues: e.issues, fallback: e.fallback }, n);
  }
  O.$ZodCodec = U.$constructor("$ZodCodec", (e, t) => {
    O.$ZodType.init(e, t),
      N.defineLazy(e._zod, "values", () => t.in._zod.values),
      N.defineLazy(e._zod, "optin", () => t.in._zod.optin),
      N.defineLazy(e._zod, "optout", () => t.out._zod.optout),
      N.defineLazy(e._zod, "propValues", () => t.in._zod.propValues),
      (e._zod.parse = (n, i) => {
        if ((i.direction || "forward") === "forward") {
          let o = t.in._zod.run(n, i);
          if (o instanceof Promise) return o.then((s) => _s(s, t, i));
          return _s(o, t, i);
        } else {
          let o = t.out._zod.run(n, i);
          if (o instanceof Promise) return o.then((s) => _s(s, t, i));
          return _s(o, t, i);
        }
      });
  });
  function _s(e, t, n) {
    if (e.issues.length) return (e.aborted = !0), e;
    if ((n.direction || "forward") === "forward") {
      let r = t.transform(e.value, e);
      if (r instanceof Promise) return r.then((o) => ys(e, o, t.out, n));
      return ys(e, r, t.out, n);
    } else {
      let r = t.reverseTransform(e.value, e);
      if (r instanceof Promise) return r.then((o) => ys(e, o, t.in, n));
      return ys(e, r, t.in, n);
    }
  }
  function ys(e, t, n, i) {
    if (e.issues.length) return (e.aborted = !0), e;
    return n._zod.run({ value: t, issues: e.issues }, i);
  }
  O.$ZodPreprocess = U.$constructor("$ZodPreprocess", (e, t) => {
    O.$ZodPipe.init(e, t);
  });
  O.$ZodReadonly = U.$constructor("$ZodReadonly", (e, t) => {
    O.$ZodType.init(e, t),
      N.defineLazy(e._zod, "propValues", () => t.innerType._zod.propValues),
      N.defineLazy(e._zod, "values", () => t.innerType._zod.values),
      N.defineLazy(e._zod, "optin", () => t.innerType?._zod?.optin),
      N.defineLazy(e._zod, "optout", () => t.innerType?._zod?.optout),
      (e._zod.parse = (n, i) => {
        if (i.direction === "backward") return t.innerType._zod.run(n, i);
        let r = t.innerType._zod.run(n, i);
        if (r instanceof Promise) return r.then(s_);
        return s_(r);
      });
  });
  function s_(e) {
    return (e.value = Object.freeze(e.value)), e;
  }
  O.$ZodTemplateLiteral = U.$constructor("$ZodTemplateLiteral", (e, t) => {
    O.$ZodType.init(e, t);
    let n = [];
    for (let i of t.parts)
      if (typeof i === "object" && i !== null) {
        if (!i._zod.pattern)
          throw Error(`Invalid template literal part, no pattern found: ${[...i._zod.traits].shift()}`);
        let r = i._zod.pattern instanceof RegExp ? i._zod.pattern.source : i._zod.pattern;
        if (!r) throw Error(`Invalid template literal part: ${i._zod.traits}`);
        let o = r.startsWith("^") ? 1 : 0,
          s = r.endsWith("$") ? r.length - 1 : r.length;
        n.push(r.slice(o, s));
      } else if (i === null || N.primitiveTypes.has(typeof i)) n.push(N.escapeRegex(`${i}`));
      else throw Error(`Invalid template literal part: ${i}`);
    (e._zod.pattern = new RegExp(`^${n.join("")}$`)),
      (e._zod.parse = (i, r) => {
        if (typeof i.value !== "string")
          return i.issues.push({ input: i.value, inst: e, expected: "string", code: "invalid_type" }), i;
        if (((e._zod.pattern.lastIndex = 0), !e._zod.pattern.test(i.value)))
          return (
            i.issues.push({
              input: i.value,
              inst: e,
              code: "invalid_format",
              format: t.format ?? "template_literal",
              pattern: e._zod.pattern.source,
            }),
            i
          );
        return i;
      });
  });
  O.$ZodFunction = U.$constructor(
    "$ZodFunction",
    (e, t) => (
      O.$ZodType.init(e, t),
      (e._def = t),
      (e._zod.def = t),
      (e.implement = (n) => {
        if (typeof n !== "function") throw Error("implement() must be called with a function");
        return function (...i) {
          let r = e._def.input ? (0, qi.parse)(e._def.input, i) : i,
            o = Reflect.apply(n, this, r);
          if (e._def.output) return (0, qi.parse)(e._def.output, o);
          return o;
        };
      }),
      (e.implementAsync = (n) => {
        if (typeof n !== "function") throw Error("implementAsync() must be called with a function");
        return async function (...i) {
          let r = e._def.input ? await (0, qi.parseAsync)(e._def.input, i) : i,
            o = await Reflect.apply(n, this, r);
          if (e._def.output) return await (0, qi.parseAsync)(e._def.output, o);
          return o;
        };
      }),
      (e._zod.parse = (n, i) => {
        if (typeof n.value !== "function")
          return n.issues.push({ code: "invalid_type", expected: "function", input: n.value, inst: e }), n;
        if (e._def.output && e._def.output._zod.def.type === "promise") n.value = e.implementAsync(n.value);
        else n.value = e.implement(n.value);
        return n;
      }),
      (e.input = (...n) => {
        let i = e.constructor;
        if (Array.isArray(n[0]))
          return new i({
            type: "function",
            input: new O.$ZodTuple({ type: "tuple", items: n[0], rest: n[1] }),
            output: e._def.output,
          });
        return new i({ type: "function", input: n[0], output: e._def.output });
      }),
      (e.output = (n) => new e.constructor({ type: "function", input: e._def.input, output: n })),
      e
    ),
  );
  O.$ZodPromise = U.$constructor("$ZodPromise", (e, t) => {
    O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) =>
        Promise.resolve(n.value).then((r) => t.innerType._zod.run({ value: r, issues: [] }, i)));
  });
  O.$ZodLazy = U.$constructor("$ZodLazy", (e, t) => {
    O.$ZodType.init(e, t),
      N.defineLazy(e._zod, "innerType", () => {
        let n = t;
        if (!n._cachedInner) n._cachedInner = t.getter();
        return n._cachedInner;
      }),
      N.defineLazy(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern),
      N.defineLazy(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues),
      N.defineLazy(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0),
      N.defineLazy(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0),
      (e._zod.parse = (n, i) => e._zod.innerType._zod.run(n, i));
  });
  O.$ZodCustom = U.$constructor("$ZodCustom", (e, t) => {
    ws.$ZodCheck.init(e, t),
      O.$ZodType.init(e, t),
      (e._zod.parse = (n, i) => n),
      (e._zod.check = (n) => {
        let i = n.value,
          r = t.fn(i);
        if (r instanceof Promise) return r.then((o) => u_(o, n, i, e));
        u_(r, n, i, e);
        return;
      });
  });
  function u_(e, t, n, i) {
    if (!e) {
      let r = { code: "custom", input: n, inst: i, path: [...(i._zod.def.path ?? [])], continue: !i._zod.def.abort };
      if (i._zod.def.params) r.params = i._zod.def.params;
      t.issues.push(N.issue(r));
    }
  }
});

var m_ = S(function (Sr, p_) {
  var oR =
      (Sr && Sr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    sR =
      (Sr && Sr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    uR =
      (Sr && Sr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) oR(t, e, n);
        }
        return sR(t, e), t;
      };
  Object.defineProperty(Sr, "__esModule", { value: !0 });
  Sr.default = lR;
  var Ss = uR(Y()),
    cR = () => {
      let e = {
        string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
        file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
        array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
        set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u0645\u062F\u062E\u0644",
          email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
          url: "\u0631\u0627\u0628\u0637",
          emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
          ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
          ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
          cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
          cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
          base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
          base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
          json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
          e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
          jwt: "JWT",
          template_literal: "\u0645\u062F\u062E\u0644",
        },
        i = { nan: "NaN" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Ss.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${r.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${u}`;
            return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${o}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${Ss.stringifyPrimitive(r.values[0])}`;
            return `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${Ss.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${r.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${r.maximum.toString()} ${s.unit ?? "\u0639\u0646\u0635\u0631"}`;
            return `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${r.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${r.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${r.minimum.toString()} ${s.unit}`;
            return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${r.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${r.prefix}"`;
            if (o.format === "ends_with")
              return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${o.suffix}"`;
            if (o.format === "includes")
              return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${o.includes}"`;
            if (o.format === "regex")
              return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${o.pattern}`;
            return `${n[o.format] ?? r.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
          }
          case "not_multiple_of":
            return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${r.divisor}`;
          case "unrecognized_keys":
            return `\u0645\u0639\u0631\u0641${r.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${r.keys.length > 1 ? "\u0629" : ""}: ${Ss.joinValues(r.keys, "\u060C ")}`;
          case "invalid_key":
            return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${r.origin}`;
          case "invalid_union":
            return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
          case "invalid_element":
            return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${r.origin}`;
          default:
            return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
        }
      };
    };
  function lR() {
    return { localeError: cR() };
  }
  p_.exports = Sr.default;
});

var h_ = S(function (Or, g_) {
  var dR =
      (Or && Or.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    fR =
      (Or && Or.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    mR =
      (Or && Or.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) dR(t, e, n);
        }
        return fR(t, e), t;
      };
  Object.defineProperty(Or, "__esModule", { value: !0 });
  Or.default = hR;
  var Os = mR(Y()),
    gR = () => {
      let e = {
        string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
        file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
        array: { unit: "element", verb: "olmal\u0131d\u0131r" },
        set: { unit: "element", verb: "olmal\u0131d\u0131r" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "input",
          email: "email address",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO datetime",
          date: "ISO date",
          time: "ISO time",
          duration: "ISO duration",
          ipv4: "IPv4 address",
          ipv6: "IPv6 address",
          cidrv4: "IPv4 range",
          cidrv6: "IPv6 range",
          base64: "base64-encoded string",
          base64url: "base64url-encoded string",
          json_string: "JSON string",
          e164: "E.164 number",
          jwt: "JWT",
          template_literal: "input",
        },
        i = { nan: "NaN" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Os.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${r.expected}, daxil olan ${u}`;
            return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${o}, daxil olan ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${Os.stringifyPrimitive(r.values[0])}`;
            return `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${Os.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${r.origin ?? "d\u0259y\u0259r"} ${o}${r.maximum.toString()} ${s.unit ?? "element"}`;
            return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${r.origin ?? "d\u0259y\u0259r"} ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${o}${r.minimum.toString()} ${s.unit}`;
            return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `Yanl\u0131\u015F m\u0259tn: "${o.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`;
            if (o.format === "ends_with") return `Yanl\u0131\u015F m\u0259tn: "${o.suffix}" il\u0259 bitm\u0259lidir`;
            if (o.format === "includes") return `Yanl\u0131\u015F m\u0259tn: "${o.includes}" daxil olmal\u0131d\u0131r`;
            if (o.format === "regex")
              return `Yanl\u0131\u015F m\u0259tn: ${o.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`;
            return `Yanl\u0131\u015F ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Yanl\u0131\u015F \u0259d\u0259d: ${r.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
          case "unrecognized_keys":
            return `Tan\u0131nmayan a\xE7ar${r.keys.length > 1 ? "lar" : ""}: ${Os.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `${r.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
          case "invalid_union":
            return "Yanl\u0131\u015F d\u0259y\u0259r";
          case "invalid_element":
            return `${r.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
          default:
            return "Yanl\u0131\u015F d\u0259y\u0259r";
        }
      };
    };
  function hR() {
    return { localeError: gR() };
  }
  g_.exports = Or.default;
});

var b_ = S(function (kr, y_) {
  var _R =
      (kr && kr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    yR =
      (kr && kr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    bR =
      (kr && kr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) _R(t, e, n);
        }
        return yR(t, e), t;
      };
  Object.defineProperty(kr, "__esModule", { value: !0 });
  kr.default = wR;
  var ks = bR(Y());
  function __(e, t, n, i) {
    let r = Math.abs(e),
      o = r % 10,
      s = r % 100;
    if (s >= 11 && s <= 19) return i;
    if (o === 1) return t;
    if (o >= 2 && o <= 4) return n;
    return i;
  }
  var vR = () => {
    let e = {
      string: {
        unit: {
          one: "\u0441\u0456\u043C\u0432\u0430\u043B",
          few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
          many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E",
        },
        verb: "\u043C\u0435\u0446\u044C",
      },
      array: {
        unit: {
          one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
          few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
          many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
        },
        verb: "\u043C\u0435\u0446\u044C",
      },
      set: {
        unit: {
          one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
          few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
          many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
        },
        verb: "\u043C\u0435\u0446\u044C",
      },
      file: {
        unit: {
          one: "\u0431\u0430\u0439\u0442",
          few: "\u0431\u0430\u0439\u0442\u044B",
          many: "\u0431\u0430\u0439\u0442\u0430\u045E",
        },
        verb: "\u043C\u0435\u0446\u044C",
      },
    };
    function t(r) {
      return e[r] ?? null;
    }
    let n = {
        regex: "\u0443\u0432\u043E\u0434",
        email: "email \u0430\u0434\u0440\u0430\u0441",
        url: "URL",
        emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
        date: "ISO \u0434\u0430\u0442\u0430",
        time: "ISO \u0447\u0430\u0441",
        duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
        ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
        ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
        cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
        cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
        base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
        base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
        json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
        e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
        jwt: "JWT",
        template_literal: "\u0443\u0432\u043E\u0434",
      },
      i = { nan: "NaN", number: "\u043B\u0456\u043A", array: "\u043C\u0430\u0441\u0456\u045E" };
    return (r) => {
      switch (r.code) {
        case "invalid_type": {
          let o = i[r.expected] ?? r.expected,
            s = ks.parsedType(r.input),
            u = i[s] ?? s;
          if (/^[A-Z]/.test(r.expected))
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${r.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${u}`;
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${o}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${u}`;
        }
        case "invalid_value":
          if (r.values.length === 1)
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${ks.stringifyPrimitive(r.values[0])}`;
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${ks.joinValues(r.values, "|")}`;
        case "too_big": {
          let o = r.inclusive ? "<=" : "<",
            s = t(r.origin);
          if (s) {
            let u = Number(r.maximum),
              c = __(u, s.unit.one, s.unit.few, s.unit.many);
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${s.verb} ${o}${r.maximum.toString()} ${c}`;
          }
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${r.maximum.toString()}`;
        }
        case "too_small": {
          let o = r.inclusive ? ">=" : ">",
            s = t(r.origin);
          if (s) {
            let u = Number(r.minimum),
              c = __(u, s.unit.one, s.unit.few, s.unit.many);
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${s.verb} ${o}${r.minimum.toString()} ${c}`;
          }
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${r.minimum.toString()}`;
        }
        case "invalid_format": {
          let o = r;
          if (o.format === "starts_with")
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${o.prefix}"`;
          if (o.format === "ends_with")
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${o.suffix}"`;
          if (o.format === "includes")
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${o.includes}"`;
          if (o.format === "regex")
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`;
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${n[o.format] ?? r.format}`;
        }
        case "not_multiple_of":
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${r.divisor}`;
        case "unrecognized_keys":
          return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${r.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${ks.joinValues(r.keys, ", ")}`;
        case "invalid_key":
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${r.origin}`;
        case "invalid_union":
          return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
        case "invalid_element":
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${r.origin}`;
        default:
          return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      }
    };
  };
  function wR() {
    return { localeError: vR() };
  }
  y_.exports = kr.default;
});

var w_ = S(function (Pr, v_) {
  var SR =
      (Pr && Pr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    OR =
      (Pr && Pr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    kR =
      (Pr && Pr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) SR(t, e, n);
        }
        return OR(t, e), t;
      };
  Object.defineProperty(Pr, "__esModule", { value: !0 });
  Pr.default = ER;
  var Ps = kR(Y()),
    PR = () => {
      let e = {
        string: {
          unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
          verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
        },
        file: {
          unit: "\u0431\u0430\u0439\u0442\u0430",
          verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
        },
        array: {
          unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
          verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
        },
        set: {
          unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
          verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
        },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u0432\u0445\u043E\u0434",
          email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
          url: "URL",
          emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
          date: "ISO \u0434\u0430\u0442\u0430",
          time: "ISO \u0432\u0440\u0435\u043C\u0435",
          duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
          ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
          ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
          cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
          cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
          base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
          base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
          json_string: "JSON \u043D\u0438\u0437",
          e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
          jwt: "JWT",
          template_literal: "\u0432\u0445\u043E\u0434",
        },
        i = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0438\u0432" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Ps.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${r.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${u}`;
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${o}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${Ps.stringifyPrimitive(r.values[0])}`;
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${Ps.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${r.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${o}${r.maximum.toString()} ${s.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`;
            return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${r.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${r.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${o}${r.minimum.toString()} ${s.unit}`;
            return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${r.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${o.prefix}"`;
            if (o.format === "ends_with")
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${o.suffix}"`;
            if (o.format === "includes")
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${o.includes}"`;
            if (o.format === "regex")
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${o.pattern}`;
            let s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
            if (o.format === "emoji") s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
            if (o.format === "datetime") s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
            if (o.format === "date") s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
            if (o.format === "time") s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
            if (o.format === "duration") s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
            return `${s} ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${r.divisor}`;
          case "unrecognized_keys":
            return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${r.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${r.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${Ps.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${r.origin}`;
          case "invalid_union":
            return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
          case "invalid_element":
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${r.origin}`;
          default:
            return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
        }
      };
    };
  function ER() {
    return { localeError: PR() };
  }
  v_.exports = Pr.default;
});

var O_ = S(function (Er, S_) {
  var $R =
      (Er && Er.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    IR =
      (Er && Er.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    TR =
      (Er && Er.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) $R(t, e, n);
        }
        return IR(t, e), t;
      };
  Object.defineProperty(Er, "__esModule", { value: !0 });
  Er.default = RR;
  var Es = TR(Y()),
    AR = () => {
      let e = {
        string: { unit: "car\xE0cters", verb: "contenir" },
        file: { unit: "bytes", verb: "contenir" },
        array: { unit: "elements", verb: "contenir" },
        set: { unit: "elements", verb: "contenir" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "entrada",
          email: "adre\xE7a electr\xF2nica",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "data i hora ISO",
          date: "data ISO",
          time: "hora ISO",
          duration: "durada ISO",
          ipv4: "adre\xE7a IPv4",
          ipv6: "adre\xE7a IPv6",
          cidrv4: "rang IPv4",
          cidrv6: "rang IPv6",
          base64: "cadena codificada en base64",
          base64url: "cadena codificada en base64url",
          json_string: "cadena JSON",
          e164: "n\xFAmero E.164",
          jwt: "JWT",
          template_literal: "entrada",
        },
        i = { nan: "NaN" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Es.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Tipus inv\xE0lid: s'esperava instanceof ${r.expected}, s'ha rebut ${u}`;
            return `Tipus inv\xE0lid: s'esperava ${o}, s'ha rebut ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Valor inv\xE0lid: s'esperava ${Es.stringifyPrimitive(r.values[0])}`;
            return `Opci\xF3 inv\xE0lida: s'esperava una de ${Es.joinValues(r.values, " o ")}`;
          case "too_big": {
            let o = r.inclusive ? "com a m\xE0xim" : "menys de",
              s = t(r.origin);
            if (s)
              return `Massa gran: s'esperava que ${r.origin ?? "el valor"} contingu\xE9s ${o} ${r.maximum.toString()} ${s.unit ?? "elements"}`;
            return `Massa gran: s'esperava que ${r.origin ?? "el valor"} fos ${o} ${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? "com a m\xEDnim" : "m\xE9s de",
              s = t(r.origin);
            if (s)
              return `Massa petit: s'esperava que ${r.origin} contingu\xE9s ${o} ${r.minimum.toString()} ${s.unit}`;
            return `Massa petit: s'esperava que ${r.origin} fos ${o} ${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Format inv\xE0lid: ha de comen\xE7ar amb "${o.prefix}"`;
            if (o.format === "ends_with") return `Format inv\xE0lid: ha d'acabar amb "${o.suffix}"`;
            if (o.format === "includes") return `Format inv\xE0lid: ha d'incloure "${o.includes}"`;
            if (o.format === "regex") return `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${o.pattern}`;
            return `Format inv\xE0lid per a ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${r.divisor}`;
          case "unrecognized_keys":
            return `Clau${r.keys.length > 1 ? "s" : ""} no reconeguda${r.keys.length > 1 ? "s" : ""}: ${Es.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Clau inv\xE0lida a ${r.origin}`;
          case "invalid_union":
            return "Entrada inv\xE0lida";
          case "invalid_element":
            return `Element inv\xE0lid a ${r.origin}`;
          default:
            return "Entrada inv\xE0lida";
        }
      };
    };
  function RR() {
    return { localeError: AR() };
  }
  S_.exports = Er.default;
});

var P_ = S(function ($r, k_) {
  var jR =
      ($r && $r.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    CR =
      ($r && $r.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    DR =
      ($r && $r.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) jR(t, e, n);
        }
        return CR(t, e), t;
      };
  Object.defineProperty($r, "__esModule", { value: !0 });
  $r.default = MR;
  var $s = DR(Y()),
    xR = () => {
      let e = {
        string: { unit: "znak\u016F", verb: "m\xEDt" },
        file: { unit: "bajt\u016F", verb: "m\xEDt" },
        array: { unit: "prvk\u016F", verb: "m\xEDt" },
        set: { unit: "prvk\u016F", verb: "m\xEDt" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "regul\xE1rn\xED v\xFDraz",
          email: "e-mailov\xE1 adresa",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "datum a \u010Das ve form\xE1tu ISO",
          date: "datum ve form\xE1tu ISO",
          time: "\u010Das ve form\xE1tu ISO",
          duration: "doba trv\xE1n\xED ISO",
          ipv4: "IPv4 adresa",
          ipv6: "IPv6 adresa",
          cidrv4: "rozsah IPv4",
          cidrv6: "rozsah IPv6",
          base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
          base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
          json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
          e164: "\u010D\xEDslo E.164",
          jwt: "JWT",
          template_literal: "vstup",
        },
        i = { nan: "NaN", number: "\u010D\xEDslo", string: "\u0159et\u011Bzec", function: "funkce", array: "pole" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = $s.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${r.expected}, obdr\u017Eeno ${u}`;
            return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${o}, obdr\u017Eeno ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${$s.stringifyPrimitive(r.values[0])}`;
            return `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${$s.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${r.origin ?? "hodnota"} mus\xED m\xEDt ${o}${r.maximum.toString()} ${s.unit ?? "prvk\u016F"}`;
            return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${r.origin ?? "hodnota"} mus\xED b\xFDt ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${r.origin ?? "hodnota"} mus\xED m\xEDt ${o}${r.minimum.toString()} ${s.unit ?? "prvk\u016F"}`;
            return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${r.origin ?? "hodnota"} mus\xED b\xFDt ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${o.prefix}"`;
            if (o.format === "ends_with") return `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${o.suffix}"`;
            if (o.format === "includes") return `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${o.includes}"`;
            if (o.format === "regex") return `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${o.pattern}`;
            return `Neplatn\xFD form\xE1t ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${r.divisor}`;
          case "unrecognized_keys":
            return `Nezn\xE1m\xE9 kl\xED\u010De: ${$s.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Neplatn\xFD kl\xED\u010D v ${r.origin}`;
          case "invalid_union":
            return "Neplatn\xFD vstup";
          case "invalid_element":
            return `Neplatn\xE1 hodnota v ${r.origin}`;
          default:
            return "Neplatn\xFD vstup";
        }
      };
    };
  function MR() {
    return { localeError: xR() };
  }
  k_.exports = $r.default;
});

var $_ = S(function (Ir, E_) {
  var zR =
      (Ir && Ir.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    LR =
      (Ir && Ir.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    UR =
      (Ir && Ir.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) zR(t, e, n);
        }
        return LR(t, e), t;
      };
  Object.defineProperty(Ir, "__esModule", { value: !0 });
  Ir.default = ZR;
  var Is = UR(Y()),
    NR = () => {
      let e = {
        string: { unit: "tegn", verb: "havde" },
        file: { unit: "bytes", verb: "havde" },
        array: { unit: "elementer", verb: "indeholdt" },
        set: { unit: "elementer", verb: "indeholdt" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "input",
          email: "e-mailadresse",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO dato- og klokkesl\xE6t",
          date: "ISO-dato",
          time: "ISO-klokkesl\xE6t",
          duration: "ISO-varighed",
          ipv4: "IPv4-omr\xE5de",
          ipv6: "IPv6-omr\xE5de",
          cidrv4: "IPv4-spektrum",
          cidrv6: "IPv6-spektrum",
          base64: "base64-kodet streng",
          base64url: "base64url-kodet streng",
          json_string: "JSON-streng",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "input",
        },
        i = {
          nan: "NaN",
          string: "streng",
          number: "tal",
          boolean: "boolean",
          array: "liste",
          object: "objekt",
          set: "s\xE6t",
          file: "fil",
        };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Is.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected)) return `Ugyldigt input: forventede instanceof ${r.expected}, fik ${u}`;
            return `Ugyldigt input: forventede ${o}, fik ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Ugyldig v\xE6rdi: forventede ${Is.stringifyPrimitive(r.values[0])}`;
            return `Ugyldigt valg: forventede en af f\xF8lgende ${Is.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin),
              u = i[r.origin] ?? r.origin;
            if (s)
              return `For stor: forventede ${u ?? "value"} ${s.verb} ${o} ${r.maximum.toString()} ${s.unit ?? "elementer"}`;
            return `For stor: forventede ${u ?? "value"} havde ${o} ${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin),
              u = i[r.origin] ?? r.origin;
            if (s) return `For lille: forventede ${u} ${s.verb} ${o} ${r.minimum.toString()} ${s.unit}`;
            return `For lille: forventede ${u} havde ${o} ${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Ugyldig streng: skal starte med "${o.prefix}"`;
            if (o.format === "ends_with") return `Ugyldig streng: skal ende med "${o.suffix}"`;
            if (o.format === "includes") return `Ugyldig streng: skal indeholde "${o.includes}"`;
            if (o.format === "regex") return `Ugyldig streng: skal matche m\xF8nsteret ${o.pattern}`;
            return `Ugyldig ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Ugyldigt tal: skal v\xE6re deleligt med ${r.divisor}`;
          case "unrecognized_keys":
            return `${r.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${Is.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Ugyldig n\xF8gle i ${r.origin}`;
          case "invalid_union":
            return "Ugyldigt input: matcher ingen af de tilladte typer";
          case "invalid_element":
            return `Ugyldig v\xE6rdi i ${r.origin}`;
          default:
            return "Ugyldigt input";
        }
      };
    };
  function ZR() {
    return { localeError: NR() };
  }
  E_.exports = Ir.default;
});

var T_ = S(function (Tr, I_) {
  var FR =
      (Tr && Tr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    BR =
      (Tr && Tr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    KR =
      (Tr && Tr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) FR(t, e, n);
        }
        return BR(t, e), t;
      };
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  Tr.default = HR;
  var Ts = KR(Y()),
    qR = () => {
      let e = {
        string: { unit: "Zeichen", verb: "zu haben" },
        file: { unit: "Bytes", verb: "zu haben" },
        array: { unit: "Elemente", verb: "zu haben" },
        set: { unit: "Elemente", verb: "zu haben" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "Eingabe",
          email: "E-Mail-Adresse",
          url: "URL",
          emoji: "Emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO-Datum und -Uhrzeit",
          date: "ISO-Datum",
          time: "ISO-Uhrzeit",
          duration: "ISO-Dauer",
          ipv4: "IPv4-Adresse",
          ipv6: "IPv6-Adresse",
          cidrv4: "IPv4-Bereich",
          cidrv6: "IPv6-Bereich",
          base64: "Base64-codierter String",
          base64url: "Base64-URL-codierter String",
          json_string: "JSON-String",
          e164: "E.164-Nummer",
          jwt: "JWT",
          template_literal: "Eingabe",
        },
        i = { nan: "NaN", number: "Zahl", array: "Array" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Ts.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Ung\xFCltige Eingabe: erwartet instanceof ${r.expected}, erhalten ${u}`;
            return `Ung\xFCltige Eingabe: erwartet ${o}, erhalten ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Ung\xFCltige Eingabe: erwartet ${Ts.stringifyPrimitive(r.values[0])}`;
            return `Ung\xFCltige Option: erwartet eine von ${Ts.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Zu gro\xDF: erwartet, dass ${r.origin ?? "Wert"} ${o}${r.maximum.toString()} ${s.unit ?? "Elemente"} hat`;
            return `Zu gro\xDF: erwartet, dass ${r.origin ?? "Wert"} ${o}${r.maximum.toString()} ist`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `Zu klein: erwartet, dass ${r.origin} ${o}${r.minimum.toString()} ${s.unit} hat`;
            return `Zu klein: erwartet, dass ${r.origin} ${o}${r.minimum.toString()} ist`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Ung\xFCltiger String: muss mit "${o.prefix}" beginnen`;
            if (o.format === "ends_with") return `Ung\xFCltiger String: muss mit "${o.suffix}" enden`;
            if (o.format === "includes") return `Ung\xFCltiger String: muss "${o.includes}" enthalten`;
            if (o.format === "regex") return `Ung\xFCltiger String: muss dem Muster ${o.pattern} entsprechen`;
            return `Ung\xFCltig: ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Ung\xFCltige Zahl: muss ein Vielfaches von ${r.divisor} sein`;
          case "unrecognized_keys":
            return `${r.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${Ts.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Ung\xFCltiger Schl\xFCssel in ${r.origin}`;
          case "invalid_union":
            return "Ung\xFCltige Eingabe";
          case "invalid_element":
            return `Ung\xFCltiger Wert in ${r.origin}`;
          default:
            return "Ung\xFCltige Eingabe";
        }
      };
    };
  function HR() {
    return { localeError: qR() };
  }
  I_.exports = Tr.default;
});

var R_ = S(function (Ar, A_) {
  var VR =
      (Ar && Ar.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    GR =
      (Ar && Ar.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    WR =
      (Ar && Ar.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) VR(t, e, n);
        }
        return GR(t, e), t;
      };
  Object.defineProperty(Ar, "__esModule", { value: !0 });
  Ar.default = YR;
  var As = WR(Y()),
    JR = () => {
      let e = {
        string: {
          unit: "\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2",
          verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
        },
        file: { unit: "bytes", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
        array: {
          unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1",
          verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
        },
        set: {
          unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1",
          verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
        },
        map: {
          unit: "\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2",
          verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
        },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
          email: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime:
            "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 \u03CE\u03C1\u03B1",
          date: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",
          time: "ISO \u03CE\u03C1\u03B1",
          duration: "ISO \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1",
          ipv4: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv4",
          ipv6: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv6",
          mac: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 MAC",
          cidrv4: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv4",
          cidrv6: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv6",
          base64:
            "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64",
          base64url:
            "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64url",
          json_string: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC JSON",
          e164: "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 E.164",
          jwt: "JWT",
          template_literal: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
        },
        i = { nan: "NaN" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = As.parsedType(r.input),
              u = i[s] ?? s;
            if (typeof r.expected === "string" && /^[A-Z]/.test(r.expected))
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD instanceof ${r.expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${u}`;
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${o}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${As.stringifyPrimitive(r.values[0])}`;
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD \u03AD\u03BD\u03B1 \u03B1\u03C0\u03CC ${As.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${r.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${o}${r.maximum.toString()} ${s.unit ?? "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1"}`;
            return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${r.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${r.origin} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${o}${r.minimum.toString()} ${s.unit}`;
            return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${r.origin} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B5 "${o.prefix}"`;
            if (o.format === "ends_with")
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03BD\u03B5\u03B9 \u03BC\u03B5 "${o.suffix}"`;
            if (o.format === "includes")
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 "${o.includes}"`;
            if (o.format === "regex")
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF \u03BC\u03BF\u03C4\u03AF\u03B2\u03BF ${o.pattern}`;
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF: ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03BF \u03C4\u03BF\u03C5 ${r.divisor}`;
          case "unrecognized_keys":
            return `\u0386\u03B3\u03BD\u03C9\u03C3\u03C4${r.keys.length > 1 ? "\u03B1" : "\u03BF"} \u03BA\u03BB\u03B5\u03B9\u03B4${r.keys.length > 1 ? "\u03B9\u03AC" : "\u03AF"}: ${As.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03C3\u03C4\u03BF ${r.origin}`;
          case "invalid_union":
            return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
          case "invalid_element":
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C4\u03B9\u03BC\u03AE \u03C3\u03C4\u03BF ${r.origin}`;
          default:
            return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
        }
      };
    };
  function YR() {
    return { localeError: JR() };
  }
  A_.exports = Ar.default;
});

var dd = S(function (Rr, j_) {
  var XR =
      (Rr && Rr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    QR =
      (Rr && Rr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    ej =
      (Rr && Rr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) XR(t, e, n);
        }
        return QR(t, e), t;
      };
  Object.defineProperty(Rr, "__esModule", { value: !0 });
  Rr.default = rj;
  var Rs = ej(Y()),
    tj = () => {
      let e = {
        string: { unit: "characters", verb: "to have" },
        file: { unit: "bytes", verb: "to have" },
        array: { unit: "items", verb: "to have" },
        set: { unit: "items", verb: "to have" },
        map: { unit: "entries", verb: "to have" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "input",
          email: "email address",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO datetime",
          date: "ISO date",
          time: "ISO time",
          duration: "ISO duration",
          ipv4: "IPv4 address",
          ipv6: "IPv6 address",
          mac: "MAC address",
          cidrv4: "IPv4 range",
          cidrv6: "IPv6 range",
          base64: "base64-encoded string",
          base64url: "base64url-encoded string",
          json_string: "JSON string",
          e164: "E.164 number",
          jwt: "JWT",
          template_literal: "input",
        },
        i = { nan: "NaN" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Rs.parsedType(r.input),
              u = i[s] ?? s;
            return `Invalid input: expected ${o}, received ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Invalid input: expected ${Rs.stringifyPrimitive(r.values[0])}`;
            return `Invalid option: expected one of ${Rs.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Too big: expected ${r.origin ?? "value"} to have ${o}${r.maximum.toString()} ${s.unit ?? "elements"}`;
            return `Too big: expected ${r.origin ?? "value"} to be ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `Too small: expected ${r.origin} to have ${o}${r.minimum.toString()} ${s.unit}`;
            return `Too small: expected ${r.origin} to be ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Invalid string: must start with "${o.prefix}"`;
            if (o.format === "ends_with") return `Invalid string: must end with "${o.suffix}"`;
            if (o.format === "includes") return `Invalid string: must include "${o.includes}"`;
            if (o.format === "regex") return `Invalid string: must match pattern ${o.pattern}`;
            return `Invalid ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Invalid number: must be a multiple of ${r.divisor}`;
          case "unrecognized_keys":
            return `Unrecognized key${r.keys.length > 1 ? "s" : ""}: ${Rs.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Invalid key in ${r.origin}`;
          case "invalid_union":
            if (r.options && Array.isArray(r.options) && r.options.length > 0)
              return `Invalid discriminator value. Expected ${r.options.map((s) => `'${s}'`).join(" | ")}`;
            return "Invalid input";
          case "invalid_element":
            return `Invalid value in ${r.origin}`;
          default:
            return "Invalid input";
        }
      };
    };
  function rj() {
    return { localeError: tj() };
  }
  j_.exports = Rr.default;
});

var D_ = S(function (jr, C_) {
  var nj =
      (jr && jr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    ij =
      (jr && jr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    oj =
      (jr && jr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) nj(t, e, n);
        }
        return ij(t, e), t;
      };
  Object.defineProperty(jr, "__esModule", { value: !0 });
  jr.default = sj;
  var js = oj(Y()),
    aj = () => {
      let e = {
        string: { unit: "karaktrojn", verb: "havi" },
        file: { unit: "bajtojn", verb: "havi" },
        array: { unit: "elementojn", verb: "havi" },
        set: { unit: "elementojn", verb: "havi" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "enigo",
          email: "retadreso",
          url: "URL",
          emoji: "emo\u011Dio",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO-datotempo",
          date: "ISO-dato",
          time: "ISO-tempo",
          duration: "ISO-da\u016Dro",
          ipv4: "IPv4-adreso",
          ipv6: "IPv6-adreso",
          cidrv4: "IPv4-rango",
          cidrv6: "IPv6-rango",
          base64: "64-ume kodita karaktraro",
          base64url: "URL-64-ume kodita karaktraro",
          json_string: "JSON-karaktraro",
          e164: "E.164-nombro",
          jwt: "JWT",
          template_literal: "enigo",
        },
        i = { nan: "NaN", number: "nombro", array: "tabelo", null: "senvalora" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = js.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Nevalida enigo: atendi\u011Dis instanceof ${r.expected}, ricevi\u011Dis ${u}`;
            return `Nevalida enigo: atendi\u011Dis ${o}, ricevi\u011Dis ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Nevalida enigo: atendi\u011Dis ${js.stringifyPrimitive(r.values[0])}`;
            return `Nevalida opcio: atendi\u011Dis unu el ${js.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Tro granda: atendi\u011Dis ke ${r.origin ?? "valoro"} havu ${o}${r.maximum.toString()} ${s.unit ?? "elementojn"}`;
            return `Tro granda: atendi\u011Dis ke ${r.origin ?? "valoro"} havu ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `Tro malgranda: atendi\u011Dis ke ${r.origin} havu ${o}${r.minimum.toString()} ${s.unit}`;
            return `Tro malgranda: atendi\u011Dis ke ${r.origin} estu ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Nevalida karaktraro: devas komenci\u011Di per "${o.prefix}"`;
            if (o.format === "ends_with") return `Nevalida karaktraro: devas fini\u011Di per "${o.suffix}"`;
            if (o.format === "includes") return `Nevalida karaktraro: devas inkluzivi "${o.includes}"`;
            if (o.format === "regex") return `Nevalida karaktraro: devas kongrui kun la modelo ${o.pattern}`;
            return `Nevalida ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Nevalida nombro: devas esti oblo de ${r.divisor}`;
          case "unrecognized_keys":
            return `Nekonata${r.keys.length > 1 ? "j" : ""} \u015Dlosilo${r.keys.length > 1 ? "j" : ""}: ${js.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Nevalida \u015Dlosilo en ${r.origin}`;
          case "invalid_union":
            return "Nevalida enigo";
          case "invalid_element":
            return `Nevalida valoro en ${r.origin}`;
          default:
            return "Nevalida enigo";
        }
      };
    };
  function sj() {
    return { localeError: aj() };
  }
  C_.exports = jr.default;
});

var M_ = S(function (Cr, x_) {
  var uj =
      (Cr && Cr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    cj =
      (Cr && Cr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    lj =
      (Cr && Cr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) uj(t, e, n);
        }
        return cj(t, e), t;
      };
  Object.defineProperty(Cr, "__esModule", { value: !0 });
  Cr.default = fj;
  var Cs = lj(Y()),
    dj = () => {
      let e = {
        string: { unit: "caracteres", verb: "tener" },
        file: { unit: "bytes", verb: "tener" },
        array: { unit: "elementos", verb: "tener" },
        set: { unit: "elementos", verb: "tener" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "entrada",
          email: "direcci\xF3n de correo electr\xF3nico",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "fecha y hora ISO",
          date: "fecha ISO",
          time: "hora ISO",
          duration: "duraci\xF3n ISO",
          ipv4: "direcci\xF3n IPv4",
          ipv6: "direcci\xF3n IPv6",
          cidrv4: "rango IPv4",
          cidrv6: "rango IPv6",
          base64: "cadena codificada en base64",
          base64url: "URL codificada en base64",
          json_string: "cadena JSON",
          e164: "n\xFAmero E.164",
          jwt: "JWT",
          template_literal: "entrada",
        },
        i = {
          nan: "NaN",
          string: "texto",
          number: "n\xFAmero",
          boolean: "booleano",
          array: "arreglo",
          object: "objeto",
          set: "conjunto",
          file: "archivo",
          date: "fecha",
          bigint: "n\xFAmero grande",
          symbol: "s\xEDmbolo",
          undefined: "indefinido",
          null: "nulo",
          function: "funci\xF3n",
          map: "mapa",
          record: "registro",
          tuple: "tupla",
          enum: "enumeraci\xF3n",
          union: "uni\xF3n",
          literal: "literal",
          promise: "promesa",
          void: "vac\xEDo",
          never: "nunca",
          unknown: "desconocido",
          any: "cualquiera",
        };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Cs.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Entrada inv\xE1lida: se esperaba instanceof ${r.expected}, recibido ${u}`;
            return `Entrada inv\xE1lida: se esperaba ${o}, recibido ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Entrada inv\xE1lida: se esperaba ${Cs.stringifyPrimitive(r.values[0])}`;
            return `Opci\xF3n inv\xE1lida: se esperaba una de ${Cs.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin),
              u = i[r.origin] ?? r.origin;
            if (s)
              return `Demasiado grande: se esperaba que ${u ?? "valor"} tuviera ${o}${r.maximum.toString()} ${s.unit ?? "elementos"}`;
            return `Demasiado grande: se esperaba que ${u ?? "valor"} fuera ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin),
              u = i[r.origin] ?? r.origin;
            if (s) return `Demasiado peque\xF1o: se esperaba que ${u} tuviera ${o}${r.minimum.toString()} ${s.unit}`;
            return `Demasiado peque\xF1o: se esperaba que ${u} fuera ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Cadena inv\xE1lida: debe comenzar con "${o.prefix}"`;
            if (o.format === "ends_with") return `Cadena inv\xE1lida: debe terminar en "${o.suffix}"`;
            if (o.format === "includes") return `Cadena inv\xE1lida: debe incluir "${o.includes}"`;
            if (o.format === "regex") return `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${o.pattern}`;
            return `Inv\xE1lido ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${r.divisor}`;
          case "unrecognized_keys":
            return `Llave${r.keys.length > 1 ? "s" : ""} desconocida${r.keys.length > 1 ? "s" : ""}: ${Cs.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Llave inv\xE1lida en ${i[r.origin] ?? r.origin}`;
          case "invalid_union":
            return "Entrada inv\xE1lida";
          case "invalid_element":
            return `Valor inv\xE1lido en ${i[r.origin] ?? r.origin}`;
          default:
            return "Entrada inv\xE1lida";
        }
      };
    };
  function fj() {
    return { localeError: dj() };
  }
  x_.exports = Cr.default;
});

var L_ = S(function (Dr, z_) {
  var pj =
      (Dr && Dr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    mj =
      (Dr && Dr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    gj =
      (Dr && Dr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) pj(t, e, n);
        }
        return mj(t, e), t;
      };
  Object.defineProperty(Dr, "__esModule", { value: !0 });
  Dr.default = _j;
  var Ds = gj(Y()),
    hj = () => {
      let e = {
        string: {
          unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
          verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
        },
        file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
        array: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
        set: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u0648\u0631\u0648\u062F\u06CC",
          email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
          url: "URL",
          emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
          date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
          time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
          duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
          ipv4: "IPv4 \u0622\u062F\u0631\u0633",
          ipv6: "IPv6 \u0622\u062F\u0631\u0633",
          cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
          cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
          base64: "base64-encoded \u0631\u0634\u062A\u0647",
          base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
          json_string: "JSON \u0631\u0634\u062A\u0647",
          e164: "E.164 \u0639\u062F\u062F",
          jwt: "JWT",
          template_literal: "\u0648\u0631\u0648\u062F\u06CC",
        },
        i = { nan: "NaN", number: "\u0639\u062F\u062F", array: "\u0622\u0631\u0627\u06CC\u0647" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Ds.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${r.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${u} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
            return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${o} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${u} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${Ds.stringifyPrimitive(r.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`;
            return `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${Ds.joinValues(r.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${r.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${r.maximum.toString()} ${s.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`;
            return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${r.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${r.maximum.toString()} \u0628\u0627\u0634\u062F`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${r.origin} \u0628\u0627\u06CC\u062F ${o}${r.minimum.toString()} ${s.unit} \u0628\u0627\u0634\u062F`;
            return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${r.origin} \u0628\u0627\u06CC\u062F ${o}${r.minimum.toString()} \u0628\u0627\u0634\u062F`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`;
            if (o.format === "ends_with")
              return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`;
            if (o.format === "includes")
              return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${o.includes}" \u0628\u0627\u0634\u062F`;
            if (o.format === "regex")
              return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${o.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`;
            return `${n[o.format] ?? r.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
          }
          case "not_multiple_of":
            return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${r.divisor} \u0628\u0627\u0634\u062F`;
          case "unrecognized_keys":
            return `\u06A9\u0644\u06CC\u062F${r.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${Ds.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${r.origin}`;
          case "invalid_union":
            return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
          case "invalid_element":
            return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${r.origin}`;
          default:
            return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
        }
      };
    };
  function _j() {
    return { localeError: hj() };
  }
  z_.exports = Dr.default;
});

var N_ = S(function (xr, U_) {
  var yj =
      (xr && xr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    bj =
      (xr && xr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    vj =
      (xr && xr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) yj(t, e, n);
        }
        return bj(t, e), t;
      };
  Object.defineProperty(xr, "__esModule", { value: !0 });
  xr.default = Sj;
  var xs = vj(Y()),
    wj = () => {
      let e = {
        string: { unit: "merkki\xE4", subject: "merkkijonon" },
        file: { unit: "tavua", subject: "tiedoston" },
        array: { unit: "alkiota", subject: "listan" },
        set: { unit: "alkiota", subject: "joukon" },
        number: { unit: "", subject: "luvun" },
        bigint: { unit: "", subject: "suuren kokonaisluvun" },
        int: { unit: "", subject: "kokonaisluvun" },
        date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "s\xE4\xE4nn\xF6llinen lauseke",
          email: "s\xE4hk\xF6postiosoite",
          url: "URL-osoite",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO-aikaleima",
          date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
          time: "ISO-aika",
          duration: "ISO-kesto",
          ipv4: "IPv4-osoite",
          ipv6: "IPv6-osoite",
          cidrv4: "IPv4-alue",
          cidrv6: "IPv6-alue",
          base64: "base64-koodattu merkkijono",
          base64url: "base64url-koodattu merkkijono",
          json_string: "JSON-merkkijono",
          e164: "E.164-luku",
          jwt: "JWT",
          template_literal: "templaattimerkkijono",
        },
        i = { nan: "NaN" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = xs.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected)) return `Virheellinen tyyppi: odotettiin instanceof ${r.expected}, oli ${u}`;
            return `Virheellinen tyyppi: odotettiin ${o}, oli ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `Virheellinen sy\xF6te: t\xE4ytyy olla ${xs.stringifyPrimitive(r.values[0])}`;
            return `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${xs.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s) return `Liian suuri: ${s.subject} t\xE4ytyy olla ${o}${r.maximum.toString()} ${s.unit}`.trim();
            return `Liian suuri: arvon t\xE4ytyy olla ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `Liian pieni: ${s.subject} t\xE4ytyy olla ${o}${r.minimum.toString()} ${s.unit}`.trim();
            return `Liian pieni: arvon t\xE4ytyy olla ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${o.prefix}"`;
            if (o.format === "ends_with") return `Virheellinen sy\xF6te: t\xE4ytyy loppua "${o.suffix}"`;
            if (o.format === "includes") return `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${o.includes}"`;
            if (o.format === "regex")
              return `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${o.pattern}`;
            return `Virheellinen ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Virheellinen luku: t\xE4ytyy olla luvun ${r.divisor} monikerta`;
          case "unrecognized_keys":
            return `${r.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${xs.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return "Virheellinen avain tietueessa";
          case "invalid_union":
            return "Virheellinen unioni";
          case "invalid_element":
            return "Virheellinen arvo joukossa";
          default:
            return "Virheellinen sy\xF6te";
        }
      };
    };
  function Sj() {
    return { localeError: wj() };
  }
  U_.exports = xr.default;
});

var F_ = S(function (Mr, Z_) {
  var Oj =
      (Mr && Mr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    kj =
      (Mr && Mr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Pj =
      (Mr && Mr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Oj(t, e, n);
        }
        return kj(t, e), t;
      };
  Object.defineProperty(Mr, "__esModule", { value: !0 });
  Mr.default = $j;
  var Ms = Pj(Y()),
    Ej = () => {
      let e = {
        string: { unit: "caract\xE8res", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "\xE9l\xE9ments", verb: "avoir" },
        set: { unit: "\xE9l\xE9ments", verb: "avoir" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "entr\xE9e",
          email: "adresse e-mail",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "date et heure ISO",
          date: "date ISO",
          time: "heure ISO",
          duration: "dur\xE9e ISO",
          ipv4: "adresse IPv4",
          ipv6: "adresse IPv6",
          cidrv4: "plage IPv4",
          cidrv6: "plage IPv6",
          base64: "cha\xEEne encod\xE9e en base64",
          base64url: "cha\xEEne encod\xE9e en base64url",
          json_string: "cha\xEEne JSON",
          e164: "num\xE9ro E.164",
          jwt: "JWT",
          template_literal: "entr\xE9e",
        },
        i = {
          string: "cha\xEEne",
          number: "nombre",
          int: "entier",
          boolean: "bool\xE9en",
          bigint: "grand entier",
          symbol: "symbole",
          undefined: "ind\xE9fini",
          null: "null",
          never: "jamais",
          void: "vide",
          date: "date",
          array: "tableau",
          object: "objet",
          tuple: "tuple",
          record: "enregistrement",
          map: "carte",
          set: "ensemble",
          file: "fichier",
          nonoptional: "non-optionnel",
          nan: "NaN",
          function: "fonction",
        };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Ms.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected)) return `Entr\xE9e invalide : instanceof ${r.expected} attendu, ${u} re\xE7u`;
            return `Entr\xE9e invalide : ${o} attendu, ${u} re\xE7u`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Entr\xE9e invalide : ${Ms.stringifyPrimitive(r.values[0])} attendu`;
            return `Option invalide : une valeur parmi ${Ms.joinValues(r.values, "|")} attendue`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Trop grand : ${i[r.origin] ?? "valeur"} doit ${s.verb} ${o}${r.maximum.toString()} ${s.unit ?? "\xE9l\xE9ment(s)"}`;
            return `Trop grand : ${i[r.origin] ?? "valeur"} doit \xEAtre ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `Trop petit : ${i[r.origin] ?? "valeur"} doit ${s.verb} ${o}${r.minimum.toString()} ${s.unit}`;
            return `Trop petit : ${i[r.origin] ?? "valeur"} doit \xEAtre ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Cha\xEEne invalide : doit commencer par "${o.prefix}"`;
            if (o.format === "ends_with") return `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`;
            if (o.format === "includes") return `Cha\xEEne invalide : doit inclure "${o.includes}"`;
            if (o.format === "regex") return `Cha\xEEne invalide : doit correspondre au mod\xE8le ${o.pattern}`;
            return `${n[o.format] ?? r.format} invalide`;
          }
          case "not_multiple_of":
            return `Nombre invalide : doit \xEAtre un multiple de ${r.divisor}`;
          case "unrecognized_keys":
            return `Cl\xE9${r.keys.length > 1 ? "s" : ""} non reconnue${r.keys.length > 1 ? "s" : ""} : ${Ms.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Cl\xE9 invalide dans ${r.origin}`;
          case "invalid_union":
            return "Entr\xE9e invalide";
          case "invalid_element":
            return `Valeur invalide dans ${r.origin}`;
          default:
            return "Entr\xE9e invalide";
        }
      };
    };
  function $j() {
    return { localeError: Ej() };
  }
  Z_.exports = Mr.default;
});

var K_ = S(function (zr, B_) {
  var Ij =
      (zr && zr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    Tj =
      (zr && zr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Aj =
      (zr && zr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Ij(t, e, n);
        }
        return Tj(t, e), t;
      };
  Object.defineProperty(zr, "__esModule", { value: !0 });
  zr.default = jj;
  var zs = Aj(Y()),
    Rj = () => {
      let e = {
        string: { unit: "caract\xE8res", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "\xE9l\xE9ments", verb: "avoir" },
        set: { unit: "\xE9l\xE9ments", verb: "avoir" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "entr\xE9e",
          email: "adresse courriel",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "date-heure ISO",
          date: "date ISO",
          time: "heure ISO",
          duration: "dur\xE9e ISO",
          ipv4: "adresse IPv4",
          ipv6: "adresse IPv6",
          cidrv4: "plage IPv4",
          cidrv6: "plage IPv6",
          base64: "cha\xEEne encod\xE9e en base64",
          base64url: "cha\xEEne encod\xE9e en base64url",
          json_string: "cha\xEEne JSON",
          e164: "num\xE9ro E.164",
          jwt: "JWT",
          template_literal: "entr\xE9e",
        },
        i = { nan: "NaN" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = zs.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected)) return `Entr\xE9e invalide : attendu instanceof ${r.expected}, re\xE7u ${u}`;
            return `Entr\xE9e invalide : attendu ${o}, re\xE7u ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Entr\xE9e invalide : attendu ${zs.stringifyPrimitive(r.values[0])}`;
            return `Option invalide : attendu l'une des valeurs suivantes ${zs.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "\u2264" : "<",
              s = t(r.origin);
            if (s)
              return `Trop grand : attendu que ${r.origin ?? "la valeur"} ait ${o}${r.maximum.toString()} ${s.unit}`;
            return `Trop grand : attendu que ${r.origin ?? "la valeur"} soit ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? "\u2265" : ">",
              s = t(r.origin);
            if (s) return `Trop petit : attendu que ${r.origin} ait ${o}${r.minimum.toString()} ${s.unit}`;
            return `Trop petit : attendu que ${r.origin} soit ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Cha\xEEne invalide : doit commencer par "${o.prefix}"`;
            if (o.format === "ends_with") return `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`;
            if (o.format === "includes") return `Cha\xEEne invalide : doit inclure "${o.includes}"`;
            if (o.format === "regex") return `Cha\xEEne invalide : doit correspondre au motif ${o.pattern}`;
            return `${n[o.format] ?? r.format} invalide`;
          }
          case "not_multiple_of":
            return `Nombre invalide : doit \xEAtre un multiple de ${r.divisor}`;
          case "unrecognized_keys":
            return `Cl\xE9${r.keys.length > 1 ? "s" : ""} non reconnue${r.keys.length > 1 ? "s" : ""} : ${zs.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Cl\xE9 invalide dans ${r.origin}`;
          case "invalid_union":
            return "Entr\xE9e invalide";
          case "invalid_element":
            return `Valeur invalide dans ${r.origin}`;
          default:
            return "Entr\xE9e invalide";
        }
      };
    };
  function jj() {
    return { localeError: Rj() };
  }
  B_.exports = zr.default;
});

var H_ = S(function (Lr, q_) {
  var Cj =
      (Lr && Lr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    Dj =
      (Lr && Lr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    xj =
      (Lr && Lr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Cj(t, e, n);
        }
        return Dj(t, e), t;
      };
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  Lr.default = zj;
  var Ls = xj(Y()),
    Mj = () => {
      let e = {
          string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" },
          number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" },
          boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" },
          bigint: { label: "BigInt", gender: "m" },
          date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" },
          array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" },
          object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" },
          null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" },
          undefined: {
            label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)",
            gender: "m",
          },
          symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" },
          function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" },
          map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" },
          set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" },
          file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" },
          promise: { label: "Promise", gender: "m" },
          NaN: { label: "NaN", gender: "m" },
          unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" },
          value: { label: "\u05E2\u05E8\u05DA", gender: "m" },
        },
        t = {
          string: {
            unit: "\u05EA\u05D5\u05D5\u05D9\u05DD",
            shortLabel: "\u05E7\u05E6\u05E8",
            longLabel: "\u05D0\u05E8\u05D5\u05DA",
          },
          file: {
            unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
            shortLabel: "\u05E7\u05D8\u05DF",
            longLabel: "\u05D2\u05D3\u05D5\u05DC",
          },
          array: {
            unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
            shortLabel: "\u05E7\u05D8\u05DF",
            longLabel: "\u05D2\u05D3\u05D5\u05DC",
          },
          set: {
            unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
            shortLabel: "\u05E7\u05D8\u05DF",
            longLabel: "\u05D2\u05D3\u05D5\u05DC",
          },
          number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
        },
        n = (d) => (d ? e[d] : void 0),
        i = (d) => {
          let f = n(d);
          if (f) return f.label;
          return d ?? e.unknown.label;
        },
        r = (d) => `\u05D4${i(d)}`,
        o = (d) =>
          (n(d)?.gender ?? "m") === "f"
            ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA"
            : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA",
        s = (d) => {
          if (!d) return null;
          return t[d] ?? null;
        },
        u = {
          regex: { label: "\u05E7\u05DC\u05D8", gender: "m" },
          email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" },
          url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" },
          emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" },
          uuid: { label: "UUID", gender: "m" },
          nanoid: { label: "nanoid", gender: "m" },
          guid: { label: "GUID", gender: "m" },
          cuid: { label: "cuid", gender: "m" },
          cuid2: { label: "cuid2", gender: "m" },
          ulid: { label: "ULID", gender: "m" },
          xid: { label: "XID", gender: "m" },
          ksuid: { label: "KSUID", gender: "m" },
          datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" },
          date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" },
          time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" },
          duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" },
          ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" },
          ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" },
          cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" },
          cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" },
          base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" },
          base64url: {
            label:
              "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
            gender: "f",
          },
          json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" },
          e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" },
          jwt: { label: "JWT", gender: "m" },
          ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
          includes: { label: "\u05E7\u05DC\u05D8", gender: "m" },
          lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
          starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
          uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
        },
        c = { nan: "NaN" };
      return (d) => {
        switch (d.code) {
          case "invalid_type": {
            let f = d.expected,
              p = c[f ?? ""] ?? i(f),
              h = Ls.parsedType(d.input),
              y = c[h] ?? e[h]?.label ?? h;
            if (/^[A-Z]/.test(d.expected))
              return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${d.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${y}`;
            return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${p}, \u05D4\u05EA\u05E7\u05D1\u05DC ${y}`;
          }
          case "invalid_value": {
            if (d.values.length === 1)
              return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${Ls.stringifyPrimitive(d.values[0])}`;
            let f = d.values.map((y) => Ls.stringifyPrimitive(y));
            if (d.values.length === 2)
              return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${f[0]} \u05D0\u05D5 ${f[1]}`;
            let p = f[f.length - 1];
            return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${f.slice(0, -1).join(", ")} \u05D0\u05D5 ${p}`;
          }
          case "too_big": {
            let f = s(d.origin),
              p = r(d.origin ?? "value");
            if (d.origin === "string")
              return `${f?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${p} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${d.maximum.toString()} ${f?.unit ?? ""} ${d.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
            if (d.origin === "number") {
              let v = d.inclusive
                ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${d.maximum}`
                : `\u05E7\u05D8\u05DF \u05DE-${d.maximum}`;
              return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${p} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${v}`;
            }
            if (d.origin === "array" || d.origin === "set") {
              let v = d.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA",
                k = d.inclusive
                  ? `${d.maximum} ${f?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA`
                  : `\u05E4\u05D7\u05D5\u05EA \u05DE-${d.maximum} ${f?.unit ?? ""}`;
              return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${p} ${v} \u05DC\u05D4\u05DB\u05D9\u05DC ${k}`.trim();
            }
            let h = d.inclusive ? "<=" : "<",
              y = o(d.origin ?? "value");
            if (f?.unit) return `${f.longLabel} \u05DE\u05D3\u05D9: ${p} ${y} ${h}${d.maximum.toString()} ${f.unit}`;
            return `${f?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${p} ${y} ${h}${d.maximum.toString()}`;
          }
          case "too_small": {
            let f = s(d.origin),
              p = r(d.origin ?? "value");
            if (d.origin === "string")
              return `${f?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${p} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${d.minimum.toString()} ${f?.unit ?? ""} ${d.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
            if (d.origin === "number") {
              let v = d.inclusive
                ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${d.minimum}`
                : `\u05D2\u05D3\u05D5\u05DC \u05DE-${d.minimum}`;
              return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${p} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${v}`;
            }
            if (d.origin === "array" || d.origin === "set") {
              let v = d.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
              if (d.minimum === 1 && d.inclusive) {
                let P =
                  d.origin === "set"
                    ? "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3"
                    : "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3";
                return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${p} ${v} \u05DC\u05D4\u05DB\u05D9\u05DC ${P}`;
              }
              let k = d.inclusive
                ? `${d.minimum} ${f?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8`
                : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${d.minimum} ${f?.unit ?? ""}`;
              return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${p} ${v} \u05DC\u05D4\u05DB\u05D9\u05DC ${k}`.trim();
            }
            let h = d.inclusive ? ">=" : ">",
              y = o(d.origin ?? "value");
            if (f?.unit) return `${f.shortLabel} \u05DE\u05D3\u05D9: ${p} ${y} ${h}${d.minimum.toString()} ${f.unit}`;
            return `${f?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${p} ${y} ${h}${d.minimum.toString()}`;
          }
          case "invalid_format": {
            let f = d;
            if (f.format === "starts_with")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${f.prefix}"`;
            if (f.format === "ends_with")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${f.suffix}"`;
            if (f.format === "includes")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${f.includes}"`;
            if (f.format === "regex")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${f.pattern}`;
            let p = u[f.format],
              h = p?.label ?? f.format,
              v = (p?.gender ?? "m") === "f" ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF";
            return `${h} \u05DC\u05D0 ${v}`;
          }
          case "not_multiple_of":
            return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${d.divisor}`;
          case "unrecognized_keys":
            return `\u05DE\u05E4\u05EA\u05D7${d.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${d.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${Ls.joinValues(d.keys, ", ")}`;
          case "invalid_key":
            return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
          case "invalid_union":
            return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
          case "invalid_element":
            return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${r(d.origin ?? "array")}`;
          default:
            return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
        }
      };
    };
  function zj() {
    return { localeError: Mj() };
  }
  q_.exports = Lr.default;
});

var G_ = S(function (Ur, V_) {
  var Lj =
      (Ur && Ur.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    Uj =
      (Ur && Ur.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Nj =
      (Ur && Ur.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Lj(t, e, n);
        }
        return Uj(t, e), t;
      };
  Object.defineProperty(Ur, "__esModule", { value: !0 });
  Ur.default = Fj;
  var Us = Nj(Y()),
    Zj = () => {
      let e = {
        string: { unit: "znakova", verb: "imati" },
        file: { unit: "bajtova", verb: "imati" },
        array: { unit: "stavki", verb: "imati" },
        set: { unit: "stavki", verb: "imati" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "unos",
          email: "email adresa",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO datum i vrijeme",
          date: "ISO datum",
          time: "ISO vrijeme",
          duration: "ISO trajanje",
          ipv4: "IPv4 adresa",
          ipv6: "IPv6 adresa",
          cidrv4: "IPv4 raspon",
          cidrv6: "IPv6 raspon",
          base64: "base64 kodirani tekst",
          base64url: "base64url kodirani tekst",
          json_string: "JSON tekst",
          e164: "E.164 broj",
          jwt: "JWT",
          template_literal: "unos",
        },
        i = {
          nan: "NaN",
          string: "tekst",
          number: "broj",
          boolean: "boolean",
          array: "niz",
          object: "objekt",
          set: "skup",
          file: "datoteka",
          date: "datum",
          bigint: "bigint",
          symbol: "simbol",
          undefined: "undefined",
          null: "null",
          function: "funkcija",
          map: "mapa",
        };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Us.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Neispravan unos: o\u010Dekuje se instanceof ${r.expected}, a primljeno je ${u}`;
            return `Neispravan unos: o\u010Dekuje se ${o}, a primljeno je ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `Neispravna vrijednost: o\u010Dekivano ${Us.stringifyPrimitive(r.values[0])}`;
            return `Neispravna opcija: o\u010Dekivano jedno od ${Us.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin),
              u = i[r.origin] ?? r.origin;
            if (s)
              return `Preveliko: o\u010Dekivano da ${u ?? "vrijednost"} ima ${o}${r.maximum.toString()} ${s.unit ?? "elemenata"}`;
            return `Preveliko: o\u010Dekivano da ${u ?? "vrijednost"} bude ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin),
              u = i[r.origin] ?? r.origin;
            if (s) return `Premalo: o\u010Dekivano da ${u} ima ${o}${r.minimum.toString()} ${s.unit}`;
            return `Premalo: o\u010Dekivano da ${u} bude ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Neispravan tekst: mora zapo\u010Dinjati s "${o.prefix}"`;
            if (o.format === "ends_with") return `Neispravan tekst: mora zavr\u0161avati s "${o.suffix}"`;
            if (o.format === "includes") return `Neispravan tekst: mora sadr\u017Eavati "${o.includes}"`;
            if (o.format === "regex") return `Neispravan tekst: mora odgovarati uzorku ${o.pattern}`;
            return `Neispravna ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Neispravan broj: mora biti vi\u0161ekratnik od ${r.divisor}`;
          case "unrecognized_keys":
            return `Neprepoznat${r.keys.length > 1 ? "i klju\u010Devi" : " klju\u010D"}: ${Us.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Neispravan klju\u010D u ${i[r.origin] ?? r.origin}`;
          case "invalid_union":
            return "Neispravan unos";
          case "invalid_element":
            return `Neispravna vrijednost u ${i[r.origin] ?? r.origin}`;
          default:
            return "Neispravan unos";
        }
      };
    };
  function Fj() {
    return { localeError: Zj() };
  }
  V_.exports = Ur.default;
});

var J_ = S(function (Nr, W_) {
  var Bj =
      (Nr && Nr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    Kj =
      (Nr && Nr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    qj =
      (Nr && Nr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Bj(t, e, n);
        }
        return Kj(t, e), t;
      };
  Object.defineProperty(Nr, "__esModule", { value: !0 });
  Nr.default = Vj;
  var Ns = qj(Y()),
    Hj = () => {
      let e = {
        string: { unit: "karakter", verb: "legyen" },
        file: { unit: "byte", verb: "legyen" },
        array: { unit: "elem", verb: "legyen" },
        set: { unit: "elem", verb: "legyen" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "bemenet",
          email: "email c\xEDm",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO id\u0151b\xE9lyeg",
          date: "ISO d\xE1tum",
          time: "ISO id\u0151",
          duration: "ISO id\u0151intervallum",
          ipv4: "IPv4 c\xEDm",
          ipv6: "IPv6 c\xEDm",
          cidrv4: "IPv4 tartom\xE1ny",
          cidrv6: "IPv6 tartom\xE1ny",
          base64: "base64-k\xF3dolt string",
          base64url: "base64url-k\xF3dolt string",
          json_string: "JSON string",
          e164: "E.164 sz\xE1m",
          jwt: "JWT",
          template_literal: "bemenet",
        },
        i = { nan: "NaN", number: "sz\xE1m", array: "t\xF6mb" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Ns.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${r.expected}, a kapott \xE9rt\xE9k ${u}`;
            return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${o}, a kapott \xE9rt\xE9k ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${Ns.stringifyPrimitive(r.values[0])}`;
            return `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${Ns.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `T\xFAl nagy: ${r.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${o}${r.maximum.toString()} ${s.unit ?? "elem"}`;
            return `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${r.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${r.origin} m\xE9rete t\xFAl kicsi ${o}${r.minimum.toString()} ${s.unit}`;
            return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${r.origin} t\xFAl kicsi ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\xC9rv\xE9nytelen string: "${o.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`;
            if (o.format === "ends_with")
              return `\xC9rv\xE9nytelen string: "${o.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`;
            if (o.format === "includes")
              return `\xC9rv\xE9nytelen string: "${o.includes}" \xE9rt\xE9ket kell tartalmaznia`;
            if (o.format === "regex") return `\xC9rv\xE9nytelen string: ${o.pattern} mint\xE1nak kell megfelelnie`;
            return `\xC9rv\xE9nytelen ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\xC9rv\xE9nytelen sz\xE1m: ${r.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
          case "unrecognized_keys":
            return `Ismeretlen kulcs${r.keys.length > 1 ? "s" : ""}: ${Ns.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `\xC9rv\xE9nytelen kulcs ${r.origin}`;
          case "invalid_union":
            return "\xC9rv\xE9nytelen bemenet";
          case "invalid_element":
            return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${r.origin}`;
          default:
            return "\xC9rv\xE9nytelen bemenet";
        }
      };
    };
  function Vj() {
    return { localeError: Hj() };
  }
  W_.exports = Nr.default;
});

var Q_ = S(function (Zr, X_) {
  var Gj =
      (Zr && Zr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    Wj =
      (Zr && Zr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Jj =
      (Zr && Zr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Gj(t, e, n);
        }
        return Wj(t, e), t;
      };
  Object.defineProperty(Zr, "__esModule", { value: !0 });
  Zr.default = Xj;
  var Zs = Jj(Y());
  function Y_(e, t, n) {
    return Math.abs(e) === 1 ? t : n;
  }
  function Hi(e) {
    if (!e) return "";
    let t = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"],
      n = e[e.length - 1];
    return e + (t.includes(n) ? "\u0576" : "\u0568");
  }
  var Yj = () => {
    let e = {
      string: {
        unit: { one: "\u0576\u0577\u0561\u0576", many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580" },
        verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
      },
      file: {
        unit: { one: "\u0562\u0561\u0575\u0569", many: "\u0562\u0561\u0575\u0569\u0565\u0580" },
        verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
      },
      array: {
        unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" },
        verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
      },
      set: {
        unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" },
        verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
      },
    };
    function t(r) {
      return e[r] ?? null;
    }
    let n = {
        regex: "\u0574\u0578\u0582\u057F\u0584",
        email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
        url: "URL",
        emoji: "\u0567\u0574\u0578\u057B\u056B",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
        date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
        time: "ISO \u056A\u0561\u0574",
        duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
        ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
        ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
        cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
        cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
        base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
        base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
        json_string: "JSON \u057F\u0578\u0572",
        e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
        jwt: "JWT",
        template_literal: "\u0574\u0578\u0582\u057F\u0584",
      },
      i = { nan: "NaN", number: "\u0569\u056B\u057E", array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E" };
    return (r) => {
      switch (r.code) {
        case "invalid_type": {
          let o = i[r.expected] ?? r.expected,
            s = Zs.parsedType(r.input),
            u = i[s] ?? s;
          if (/^[A-Z]/.test(r.expected))
            return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${r.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${u}`;
          return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${o}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${u}`;
        }
        case "invalid_value":
          if (r.values.length === 1)
            return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${Zs.stringifyPrimitive(r.values[1])}`;
          return `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${Zs.joinValues(r.values, "|")}`;
        case "too_big": {
          let o = r.inclusive ? "<=" : "<",
            s = t(r.origin);
          if (s) {
            let u = Number(r.maximum),
              c = Y_(u, s.unit.one, s.unit.many);
            return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${Hi(r.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${o}${r.maximum.toString()} ${c}`;
          }
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${Hi(r.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${o}${r.maximum.toString()}`;
        }
        case "too_small": {
          let o = r.inclusive ? ">=" : ">",
            s = t(r.origin);
          if (s) {
            let u = Number(r.minimum),
              c = Y_(u, s.unit.one, s.unit.many);
            return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${Hi(r.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${o}${r.minimum.toString()} ${c}`;
          }
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${Hi(r.origin)} \u056C\u056B\u0576\u056B ${o}${r.minimum.toString()}`;
        }
        case "invalid_format": {
          let o = r;
          if (o.format === "starts_with")
            return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${o.prefix}"-\u0578\u057E`;
          if (o.format === "ends_with")
            return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${o.suffix}"-\u0578\u057E`;
          if (o.format === "includes")
            return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${o.includes}"`;
          if (o.format === "regex")
            return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${o.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`;
          return `\u054D\u056D\u0561\u056C ${n[o.format] ?? r.format}`;
        }
        case "not_multiple_of":
          return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${r.divisor}-\u056B`;
        case "unrecognized_keys":
          return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${r.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${Zs.joinValues(r.keys, ", ")}`;
        case "invalid_key":
          return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${Hi(r.origin)}-\u0578\u0582\u0574`;
        case "invalid_union":
          return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
        case "invalid_element":
          return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${Hi(r.origin)}-\u0578\u0582\u0574`;
        default:
          return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
      }
    };
  };
  function Xj() {
    return { localeError: Yj() };
  }
  X_.exports = Zr.default;
});

var ty = S(function (Fr, ey) {
  var Qj =
      (Fr && Fr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    eC =
      (Fr && Fr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    tC =
      (Fr && Fr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Qj(t, e, n);
        }
        return eC(t, e), t;
      };
  Object.defineProperty(Fr, "__esModule", { value: !0 });
  Fr.default = nC;
  var Fs = tC(Y()),
    rC = () => {
      let e = {
        string: { unit: "karakter", verb: "memiliki" },
        file: { unit: "byte", verb: "memiliki" },
        array: { unit: "item", verb: "memiliki" },
        set: { unit: "item", verb: "memiliki" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "input",
          email: "alamat email",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "tanggal dan waktu format ISO",
          date: "tanggal format ISO",
          time: "jam format ISO",
          duration: "durasi format ISO",
          ipv4: "alamat IPv4",
          ipv6: "alamat IPv6",
          cidrv4: "rentang alamat IPv4",
          cidrv6: "rentang alamat IPv6",
          base64: "string dengan enkode base64",
          base64url: "string dengan enkode base64url",
          json_string: "string JSON",
          e164: "angka E.164",
          jwt: "JWT",
          template_literal: "input",
        },
        i = { nan: "NaN" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Fs.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Input tidak valid: diharapkan instanceof ${r.expected}, diterima ${u}`;
            return `Input tidak valid: diharapkan ${o}, diterima ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Input tidak valid: diharapkan ${Fs.stringifyPrimitive(r.values[0])}`;
            return `Pilihan tidak valid: diharapkan salah satu dari ${Fs.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Terlalu besar: diharapkan ${r.origin ?? "value"} memiliki ${o}${r.maximum.toString()} ${s.unit ?? "elemen"}`;
            return `Terlalu besar: diharapkan ${r.origin ?? "value"} menjadi ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `Terlalu kecil: diharapkan ${r.origin} memiliki ${o}${r.minimum.toString()} ${s.unit}`;
            return `Terlalu kecil: diharapkan ${r.origin} menjadi ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `String tidak valid: harus dimulai dengan "${o.prefix}"`;
            if (o.format === "ends_with") return `String tidak valid: harus berakhir dengan "${o.suffix}"`;
            if (o.format === "includes") return `String tidak valid: harus menyertakan "${o.includes}"`;
            if (o.format === "regex") return `String tidak valid: harus sesuai pola ${o.pattern}`;
            return `${n[o.format] ?? r.format} tidak valid`;
          }
          case "not_multiple_of":
            return `Angka tidak valid: harus kelipatan dari ${r.divisor}`;
          case "unrecognized_keys":
            return `Kunci tidak dikenali ${r.keys.length > 1 ? "s" : ""}: ${Fs.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Kunci tidak valid di ${r.origin}`;
          case "invalid_union":
            return "Input tidak valid";
          case "invalid_element":
            return `Nilai tidak valid di ${r.origin}`;
          default:
            return "Input tidak valid";
        }
      };
    };
  function nC() {
    return { localeError: rC() };
  }
  ey.exports = Fr.default;
});

var ny = S(function (Br, ry) {
  var iC =
      (Br && Br.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    oC =
      (Br && Br.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    aC =
      (Br && Br.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) iC(t, e, n);
        }
        return oC(t, e), t;
      };
  Object.defineProperty(Br, "__esModule", { value: !0 });
  Br.default = uC;
  var Bs = aC(Y()),
    sC = () => {
      let e = {
        string: { unit: "stafi", verb: "a\xF0 hafa" },
        file: { unit: "b\xE6ti", verb: "a\xF0 hafa" },
        array: { unit: "hluti", verb: "a\xF0 hafa" },
        set: { unit: "hluti", verb: "a\xF0 hafa" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "gildi",
          email: "netfang",
          url: "vefsl\xF3\xF0",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO dagsetning og t\xEDmi",
          date: "ISO dagsetning",
          time: "ISO t\xEDmi",
          duration: "ISO t\xEDmalengd",
          ipv4: "IPv4 address",
          ipv6: "IPv6 address",
          cidrv4: "IPv4 range",
          cidrv6: "IPv6 range",
          base64: "base64-encoded strengur",
          base64url: "base64url-encoded strengur",
          json_string: "JSON strengur",
          e164: "E.164 t\xF6lugildi",
          jwt: "JWT",
          template_literal: "gildi",
        },
        i = { nan: "NaN", number: "n\xFAmer", array: "fylki" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Bs.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Rangt gildi: \xDE\xFA sl\xF3st inn ${u} \xFEar sem \xE1 a\xF0 vera instanceof ${r.expected}`;
            return `Rangt gildi: \xDE\xFA sl\xF3st inn ${u} \xFEar sem \xE1 a\xF0 vera ${o}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Rangt gildi: gert r\xE1\xF0 fyrir ${Bs.stringifyPrimitive(r.values[0])}`;
            return `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${Bs.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${r.origin ?? "gildi"} hafi ${o}${r.maximum.toString()} ${s.unit ?? "hluti"}`;
            return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${r.origin ?? "gildi"} s\xE9 ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${r.origin} hafi ${o}${r.minimum.toString()} ${s.unit}`;
            return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${r.origin} s\xE9 ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${o.prefix}"`;
            if (o.format === "ends_with") return `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${o.suffix}"`;
            if (o.format === "includes") return `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${o.includes}"`;
            if (o.format === "regex") return `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${o.pattern}`;
            return `Rangt ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${r.divisor}`;
          case "unrecognized_keys":
            return `\xD3\xFEekkt ${r.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${Bs.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Rangur lykill \xED ${r.origin}`;
          case "invalid_union":
            return "Rangt gildi";
          case "invalid_element":
            return `Rangt gildi \xED ${r.origin}`;
          default:
            return "Rangt gildi";
        }
      };
    };
  function uC() {
    return { localeError: sC() };
  }
  ry.exports = Br.default;
});

var oy = S(function (Kr, iy) {
  var cC =
      (Kr && Kr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    lC =
      (Kr && Kr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    dC =
      (Kr && Kr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) cC(t, e, n);
        }
        return lC(t, e), t;
      };
  Object.defineProperty(Kr, "__esModule", { value: !0 });
  Kr.default = pC;
  var Ks = dC(Y()),
    fC = () => {
      let e = {
        string: { unit: "caratteri", verb: "avere" },
        file: { unit: "byte", verb: "avere" },
        array: { unit: "elementi", verb: "avere" },
        set: { unit: "elementi", verb: "avere" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "input",
          email: "indirizzo email",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "data e ora ISO",
          date: "data ISO",
          time: "ora ISO",
          duration: "durata ISO",
          ipv4: "indirizzo IPv4",
          ipv6: "indirizzo IPv6",
          cidrv4: "intervallo IPv4",
          cidrv6: "intervallo IPv6",
          base64: "stringa codificata in base64",
          base64url: "URL codificata in base64",
          json_string: "stringa JSON",
          e164: "numero E.164",
          jwt: "JWT",
          template_literal: "input",
        },
        i = { nan: "NaN", number: "numero", array: "vettore" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Ks.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected)) return `Input non valido: atteso instanceof ${r.expected}, ricevuto ${u}`;
            return `Input non valido: atteso ${o}, ricevuto ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Input non valido: atteso ${Ks.stringifyPrimitive(r.values[0])}`;
            return `Opzione non valida: atteso uno tra ${Ks.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Troppo grande: ${r.origin ?? "valore"} deve avere ${o}${r.maximum.toString()} ${s.unit ?? "elementi"}`;
            return `Troppo grande: ${r.origin ?? "valore"} deve essere ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `Troppo piccolo: ${r.origin} deve avere ${o}${r.minimum.toString()} ${s.unit}`;
            return `Troppo piccolo: ${r.origin} deve essere ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Stringa non valida: deve iniziare con "${o.prefix}"`;
            if (o.format === "ends_with") return `Stringa non valida: deve terminare con "${o.suffix}"`;
            if (o.format === "includes") return `Stringa non valida: deve includere "${o.includes}"`;
            if (o.format === "regex") return `Stringa non valida: deve corrispondere al pattern ${o.pattern}`;
            return `Input non valido: ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Numero non valido: deve essere un multiplo di ${r.divisor}`;
          case "unrecognized_keys":
            return `Chiav${r.keys.length > 1 ? "i" : "e"} non riconosciut${r.keys.length > 1 ? "e" : "a"}: ${Ks.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Chiave non valida in ${r.origin}`;
          case "invalid_union":
            return "Input non valido";
          case "invalid_element":
            return `Valore non valido in ${r.origin}`;
          default:
            return "Input non valido";
        }
      };
    };
  function pC() {
    return { localeError: fC() };
  }
  iy.exports = Kr.default;
});

var sy = S(function (qr, ay) {
  var mC =
      (qr && qr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    gC =
      (qr && qr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    hC =
      (qr && qr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) mC(t, e, n);
        }
        return gC(t, e), t;
      };
  Object.defineProperty(qr, "__esModule", { value: !0 });
  qr.default = yC;
  var qs = hC(Y()),
    _C = () => {
      let e = {
        string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
        file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
        array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
        set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u5165\u529B\u5024",
          email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
          url: "URL",
          emoji: "\u7D75\u6587\u5B57",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO\u65E5\u6642",
          date: "ISO\u65E5\u4ED8",
          time: "ISO\u6642\u523B",
          duration: "ISO\u671F\u9593",
          ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
          ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
          cidrv4: "IPv4\u7BC4\u56F2",
          cidrv6: "IPv6\u7BC4\u56F2",
          base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
          base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
          json_string: "JSON\u6587\u5B57\u5217",
          e164: "E.164\u756A\u53F7",
          jwt: "JWT",
          template_literal: "\u5165\u529B\u5024",
        },
        i = { nan: "NaN", number: "\u6570\u5024", array: "\u914D\u5217" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = qs.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u7121\u52B9\u306A\u5165\u529B: instanceof ${r.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${u}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
            return `\u7121\u52B9\u306A\u5165\u529B: ${o}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${u}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u7121\u52B9\u306A\u5165\u529B: ${qs.stringifyPrimitive(r.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`;
            return `\u7121\u52B9\u306A\u9078\u629E: ${qs.joinValues(r.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          case "too_big": {
            let o = r.inclusive ? "\u4EE5\u4E0B\u3067\u3042\u308B" : "\u3088\u308A\u5C0F\u3055\u3044",
              s = t(r.origin);
            if (s)
              return `\u5927\u304D\u3059\u304E\u308B\u5024: ${r.origin ?? "\u5024"}\u306F${r.maximum.toString()}${s.unit ?? "\u8981\u7D20"}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            return `\u5927\u304D\u3059\u304E\u308B\u5024: ${r.origin ?? "\u5024"}\u306F${r.maximum.toString()}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          }
          case "too_small": {
            let o = r.inclusive ? "\u4EE5\u4E0A\u3067\u3042\u308B" : "\u3088\u308A\u5927\u304D\u3044",
              s = t(r.origin);
            if (s)
              return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${r.origin}\u306F${r.minimum.toString()}${s.unit}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${r.origin}\u306F${r.minimum.toString()}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            if (o.format === "ends_with")
              return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            if (o.format === "includes")
              return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            if (o.format === "regex")
              return `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${o.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            return `\u7121\u52B9\u306A${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u7121\u52B9\u306A\u6570\u5024: ${r.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          case "unrecognized_keys":
            return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${r.keys.length > 1 ? "\u7FA4" : ""}: ${qs.joinValues(r.keys, "\u3001")}`;
          case "invalid_key":
            return `${r.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
          case "invalid_union":
            return "\u7121\u52B9\u306A\u5165\u529B";
          case "invalid_element":
            return `${r.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
          default:
            return "\u7121\u52B9\u306A\u5165\u529B";
        }
      };
    };
  function yC() {
    return { localeError: _C() };
  }
  ay.exports = qr.default;
});

var cy = S(function (Hr, uy) {
  var bC =
      (Hr && Hr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    vC =
      (Hr && Hr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    wC =
      (Hr && Hr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) bC(t, e, n);
        }
        return vC(t, e), t;
      };
  Object.defineProperty(Hr, "__esModule", { value: !0 });
  Hr.default = kC;
  var Hs = wC(Y()),
    OC = () => {
      let e = {
        string: {
          unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD",
          verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
        },
        file: {
          unit: "\u10D1\u10D0\u10D8\u10E2\u10D8",
          verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
        },
        array: {
          unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
          verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
        },
        set: {
          unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
          verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
        },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
          email:
            "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
          url: "URL",
          emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
          date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
          time: "\u10D3\u10E0\u10DD",
          duration: "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
          ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
          ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
          cidrv4: "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
          cidrv6: "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
          base64: "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
          base64url: "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
          json_string: "JSON \u10D5\u10D4\u10DA\u10D8",
          e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
          jwt: "JWT",
          template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
        },
        i = {
          nan: "NaN",
          number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
          string: "\u10D5\u10D4\u10DA\u10D8",
          boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
          function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
          array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8",
        };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Hs.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${r.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${u}`;
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${o}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${Hs.stringifyPrimitive(r.values[0])}`;
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${Hs.joinValues(r.values, "|")}-\u10D3\u10D0\u10DC`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${r.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${s.verb} ${o}${r.maximum.toString()} ${s.unit}`;
            return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${r.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${r.origin} ${s.verb} ${o}${r.minimum.toString()} ${s.unit}`;
            return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${r.origin} \u10D8\u10E7\u10DD\u10E1 ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${o.prefix}"-\u10D8\u10D7`;
            if (o.format === "ends_with")
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${o.suffix}"-\u10D8\u10D7`;
            if (o.format === "includes")
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${o.includes}"-\u10E1`;
            if (o.format === "regex")
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${o.pattern}`;
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${r.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
          case "unrecognized_keys":
            return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${r.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${Hs.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${r.origin}-\u10E8\u10D8`;
          case "invalid_union":
            return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
          case "invalid_element":
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${r.origin}-\u10E8\u10D8`;
          default:
            return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
        }
      };
    };
  function kC() {
    return { localeError: OC() };
  }
  uy.exports = Hr.default;
});

var fd = S(function (Vr, ly) {
  var PC =
      (Vr && Vr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    EC =
      (Vr && Vr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    $C =
      (Vr && Vr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) PC(t, e, n);
        }
        return EC(t, e), t;
      };
  Object.defineProperty(Vr, "__esModule", { value: !0 });
  Vr.default = TC;
  var Vs = $C(Y()),
    IC = () => {
      let e = {
        string: { unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
        file: { unit: "\u1794\u17C3", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
        array: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
        set: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
          email: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
          url: "URL",
          emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime:
            "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
          date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
          time: "\u1798\u17C9\u17C4\u1784 ISO",
          duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
          ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
          ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
          cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
          cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
          base64: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
          base64url:
            "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
          json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
          e164: "\u179B\u17C1\u1781 E.164",
          jwt: "JWT",
          template_literal: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
        },
        i = {
          nan: "NaN",
          number: "\u179B\u17C1\u1781",
          array: "\u17A2\u17B6\u179A\u17C1 (Array)",
          null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)",
        };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Vs.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${r.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${u}`;
            return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${o} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${Vs.stringifyPrimitive(r.values[0])}`;
            return `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${Vs.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${r.maximum.toString()} ${s.unit ?? "\u1792\u17B6\u178F\u17BB"}`;
            return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin} ${o} ${r.minimum.toString()} ${s.unit}`;
            return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin} ${o} ${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${o.prefix}"`;
            if (o.format === "ends_with")
              return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${o.suffix}"`;
            if (o.format === "includes")
              return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${o.includes}"`;
            if (o.format === "regex")
              return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${o.pattern}`;
            return `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${r.divisor}`;
          case "unrecognized_keys":
            return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${Vs.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${r.origin}`;
          case "invalid_union":
            return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
          case "invalid_element":
            return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${r.origin}`;
          default:
            return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
        }
      };
    };
  function TC() {
    return { localeError: IC() };
  }
  ly.exports = Vr.default;
});

var fy = S(function (Vi, dy) {
  var AC =
    (Vi && Vi.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(Vi, "__esModule", { value: !0 });
  Vi.default = jC;
  var RC = AC(fd());
  function jC() {
    return (0, RC.default)();
  }
  dy.exports = Vi.default;
});

var my = S(function (Gr, py) {
  var CC =
      (Gr && Gr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    xC =
      (Gr && Gr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    MC =
      (Gr && Gr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) CC(t, e, n);
        }
        return xC(t, e), t;
      };
  Object.defineProperty(Gr, "__esModule", { value: !0 });
  Gr.default = LC;
  var Gs = MC(Y()),
    zC = () => {
      let e = {
        string: { unit: "\uBB38\uC790", verb: "to have" },
        file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
        array: { unit: "\uAC1C", verb: "to have" },
        set: { unit: "\uAC1C", verb: "to have" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\uC785\uB825",
          email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
          url: "URL",
          emoji: "\uC774\uBAA8\uC9C0",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
          date: "ISO \uB0A0\uC9DC",
          time: "ISO \uC2DC\uAC04",
          duration: "ISO \uAE30\uAC04",
          ipv4: "IPv4 \uC8FC\uC18C",
          ipv6: "IPv6 \uC8FC\uC18C",
          cidrv4: "IPv4 \uBC94\uC704",
          cidrv6: "IPv6 \uBC94\uC704",
          base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
          base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
          json_string: "JSON \uBB38\uC790\uC5F4",
          e164: "E.164 \uBC88\uD638",
          jwt: "JWT",
          template_literal: "\uC785\uB825",
        },
        i = { nan: "NaN" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Gs.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${r.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${u}\uC785\uB2C8\uB2E4`;
            return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${o}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${u}\uC785\uB2C8\uB2E4`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${Gs.stringifyPrimitive(r.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`;
            return `\uC798\uBABB\uB41C \uC635\uC158: ${Gs.joinValues(r.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
          case "too_big": {
            let o = r.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
              s = o === "\uBBF8\uB9CC" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
              u = t(r.origin),
              c = u?.unit ?? "\uC694\uC18C";
            if (u)
              return `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${r.maximum.toString()}${c} ${o}${s}`;
            return `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${r.maximum.toString()} ${o}${s}`;
          }
          case "too_small": {
            let o = r.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
              s = o === "\uC774\uC0C1" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
              u = t(r.origin),
              c = u?.unit ?? "\uC694\uC18C";
            if (u)
              return `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${r.minimum.toString()}${c} ${o}${s}`;
            return `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${r.minimum.toString()} ${o}${s}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`;
            if (o.format === "ends_with")
              return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`;
            if (o.format === "includes")
              return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`;
            if (o.format === "regex")
              return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${o.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`;
            return `\uC798\uBABB\uB41C ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\uC798\uBABB\uB41C \uC22B\uC790: ${r.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
          case "unrecognized_keys":
            return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${Gs.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `\uC798\uBABB\uB41C \uD0A4: ${r.origin}`;
          case "invalid_union":
            return "\uC798\uBABB\uB41C \uC785\uB825";
          case "invalid_element":
            return `\uC798\uBABB\uB41C \uAC12: ${r.origin}`;
          default:
            return "\uC798\uBABB\uB41C \uC785\uB825";
        }
      };
    };
  function LC() {
    return { localeError: zC() };
  }
  py.exports = Gr.default;
});

var _y = S(function (Wr, hy) {
  var UC =
      (Wr && Wr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    NC =
      (Wr && Wr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    ZC =
      (Wr && Wr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) UC(t, e, n);
        }
        return NC(t, e), t;
      };
  Object.defineProperty(Wr, "__esModule", { value: !0 });
  Wr.default = BC;
  var Ws = ZC(Y()),
    ea = (e) => e.charAt(0).toUpperCase() + e.slice(1);
  function gy(e) {
    let t = Math.abs(e),
      n = t % 10,
      i = t % 100;
    if ((i >= 11 && i <= 19) || n === 0) return "many";
    if (n === 1) return "one";
    return "few";
  }
  var FC = () => {
    let e = {
      string: {
        unit: { one: "simbolis", few: "simboliai", many: "simboli\u0173" },
        verb: {
          smaller: {
            inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
            notInclusive: "turi b\u016Bti trumpesn\u0117 kaip",
          },
          bigger: {
            inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
            notInclusive: "turi b\u016Bti ilgesn\u0117 kaip",
          },
        },
      },
      file: {
        unit: { one: "baitas", few: "baitai", many: "bait\u0173" },
        verb: {
          smaller: { inclusive: "turi b\u016Bti ne didesnis kaip", notInclusive: "turi b\u016Bti ma\u017Eesnis kaip" },
          bigger: { inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip", notInclusive: "turi b\u016Bti didesnis kaip" },
        },
      },
      array: {
        unit: { one: "element\u0105", few: "elementus", many: "element\u0173" },
        verb: {
          smaller: { inclusive: "turi tur\u0117ti ne daugiau kaip", notInclusive: "turi tur\u0117ti ma\u017Eiau kaip" },
          bigger: { inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip", notInclusive: "turi tur\u0117ti daugiau kaip" },
        },
      },
      set: {
        unit: { one: "element\u0105", few: "elementus", many: "element\u0173" },
        verb: {
          smaller: { inclusive: "turi tur\u0117ti ne daugiau kaip", notInclusive: "turi tur\u0117ti ma\u017Eiau kaip" },
          bigger: { inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip", notInclusive: "turi tur\u0117ti daugiau kaip" },
        },
      },
    };
    function t(r, o, s, u) {
      let c = e[r] ?? null;
      if (c === null) return c;
      return { unit: c.unit[o], verb: c.verb[u][s ? "inclusive" : "notInclusive"] };
    }
    let n = {
        regex: "\u012Fvestis",
        email: "el. pa\u0161to adresas",
        url: "URL",
        emoji: "jaustukas",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO data ir laikas",
        date: "ISO data",
        time: "ISO laikas",
        duration: "ISO trukm\u0117",
        ipv4: "IPv4 adresas",
        ipv6: "IPv6 adresas",
        cidrv4: "IPv4 tinklo prefiksas (CIDR)",
        cidrv6: "IPv6 tinklo prefiksas (CIDR)",
        base64: "base64 u\u017Ekoduota eilut\u0117",
        base64url: "base64url u\u017Ekoduota eilut\u0117",
        json_string: "JSON eilut\u0117",
        e164: "E.164 numeris",
        jwt: "JWT",
        template_literal: "\u012Fvestis",
      },
      i = {
        nan: "NaN",
        number: "skai\u010Dius",
        bigint: "sveikasis skai\u010Dius",
        string: "eilut\u0117",
        boolean: "login\u0117 reik\u0161m\u0117",
        undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
        function: "funkcija",
        symbol: "simbolis",
        array: "masyvas",
        object: "objektas",
        null: "nulin\u0117 reik\u0161m\u0117",
      };
    return (r) => {
      switch (r.code) {
        case "invalid_type": {
          let o = i[r.expected] ?? r.expected,
            s = Ws.parsedType(r.input),
            u = i[s] ?? s;
          if (/^[A-Z]/.test(r.expected)) return `Gautas tipas ${u}, o tik\u0117tasi - instanceof ${r.expected}`;
          return `Gautas tipas ${u}, o tik\u0117tasi - ${o}`;
        }
        case "invalid_value":
          if (r.values.length === 1) return `Privalo b\u016Bti ${Ws.stringifyPrimitive(r.values[0])}`;
          return `Privalo b\u016Bti vienas i\u0161 ${Ws.joinValues(r.values, "|")} pasirinkim\u0173`;
        case "too_big": {
          let o = i[r.origin] ?? r.origin,
            s = t(r.origin, gy(Number(r.maximum)), r.inclusive ?? !1, "smaller");
          if (s?.verb)
            return `${ea(o ?? r.origin ?? "reik\u0161m\u0117")} ${s.verb} ${r.maximum.toString()} ${s.unit ?? "element\u0173"}`;
          let u = r.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
          return `${ea(o ?? r.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${u} ${r.maximum.toString()} ${s?.unit}`;
        }
        case "too_small": {
          let o = i[r.origin] ?? r.origin,
            s = t(r.origin, gy(Number(r.minimum)), r.inclusive ?? !1, "bigger");
          if (s?.verb)
            return `${ea(o ?? r.origin ?? "reik\u0161m\u0117")} ${s.verb} ${r.minimum.toString()} ${s.unit ?? "element\u0173"}`;
          let u = r.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
          return `${ea(o ?? r.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${u} ${r.minimum.toString()} ${s?.unit}`;
        }
        case "invalid_format": {
          let o = r;
          if (o.format === "starts_with") return `Eilut\u0117 privalo prasid\u0117ti "${o.prefix}"`;
          if (o.format === "ends_with") return `Eilut\u0117 privalo pasibaigti "${o.suffix}"`;
          if (o.format === "includes") return `Eilut\u0117 privalo \u012Ftraukti "${o.includes}"`;
          if (o.format === "regex") return `Eilut\u0117 privalo atitikti ${o.pattern}`;
          return `Neteisingas ${n[o.format] ?? r.format}`;
        }
        case "not_multiple_of":
          return `Skai\u010Dius privalo b\u016Bti ${r.divisor} kartotinis.`;
        case "unrecognized_keys":
          return `Neatpa\u017Eint${r.keys.length > 1 ? "i" : "as"} rakt${r.keys.length > 1 ? "ai" : "as"}: ${Ws.joinValues(r.keys, ", ")}`;
        case "invalid_key":
          return "Rastas klaidingas raktas";
        case "invalid_union":
          return "Klaidinga \u012Fvestis";
        case "invalid_element": {
          let o = i[r.origin] ?? r.origin;
          return `${ea(o ?? r.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
        }
        default:
          return "Klaidinga \u012Fvestis";
      }
    };
  };
  function BC() {
    return { localeError: FC() };
  }
  hy.exports = Wr.default;
});

var by = S(function (Jr, yy) {
  var KC =
      (Jr && Jr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    qC =
      (Jr && Jr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    HC =
      (Jr && Jr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) KC(t, e, n);
        }
        return qC(t, e), t;
      };
  Object.defineProperty(Jr, "__esModule", { value: !0 });
  Jr.default = GC;
  var Js = HC(Y()),
    VC = () => {
      let e = {
        string: { unit: "\u0437\u043D\u0430\u0446\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
        file: { unit: "\u0431\u0430\u0458\u0442\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
        array: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
        set: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u0432\u043D\u0435\u0441",
          email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
          url: "URL",
          emoji: "\u0435\u043C\u043E\u045F\u0438",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
          date: "ISO \u0434\u0430\u0442\u0443\u043C",
          time: "ISO \u0432\u0440\u0435\u043C\u0435",
          duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
          ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
          ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
          cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
          cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
          base64: "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
          base64url: "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
          json_string: "JSON \u043D\u0438\u0437\u0430",
          e164: "E.164 \u0431\u0440\u043E\u0458",
          jwt: "JWT",
          template_literal: "\u0432\u043D\u0435\u0441",
        },
        i = { nan: "NaN", number: "\u0431\u0440\u043E\u0458", array: "\u043D\u0438\u0437\u0430" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Js.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${r.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${u}`;
            return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${o}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Invalid input: expected ${Js.stringifyPrimitive(r.values[0])}`;
            return `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${Js.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${o}${r.maximum.toString()} ${s.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`;
            return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin} \u0434\u0430 \u0438\u043C\u0430 ${o}${r.minimum.toString()} ${s.unit}`;
            return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${o.prefix}"`;
            if (o.format === "ends_with")
              return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${o.suffix}"`;
            if (o.format === "includes")
              return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${o.includes}"`;
            if (o.format === "regex")
              return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${o.pattern}`;
            return `Invalid ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${r.divisor}`;
          case "unrecognized_keys":
            return `${r.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${Js.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${r.origin}`;
          case "invalid_union":
            return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
          case "invalid_element":
            return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${r.origin}`;
          default:
            return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
        }
      };
    };
  function GC() {
    return { localeError: VC() };
  }
  yy.exports = Jr.default;
});

var wy = S(function (Yr, vy) {
  var WC =
      (Yr && Yr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    JC =
      (Yr && Yr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    YC =
      (Yr && Yr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) WC(t, e, n);
        }
        return JC(t, e), t;
      };
  Object.defineProperty(Yr, "__esModule", { value: !0 });
  Yr.default = QC;
  var Ys = YC(Y()),
    XC = () => {
      let e = {
        string: { unit: "aksara", verb: "mempunyai" },
        file: { unit: "bait", verb: "mempunyai" },
        array: { unit: "elemen", verb: "mempunyai" },
        set: { unit: "elemen", verb: "mempunyai" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "input",
          email: "alamat e-mel",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "tarikh masa ISO",
          date: "tarikh ISO",
          time: "masa ISO",
          duration: "tempoh ISO",
          ipv4: "alamat IPv4",
          ipv6: "alamat IPv6",
          cidrv4: "julat IPv4",
          cidrv6: "julat IPv6",
          base64: "string dikodkan base64",
          base64url: "string dikodkan base64url",
          json_string: "string JSON",
          e164: "nombor E.164",
          jwt: "JWT",
          template_literal: "input",
        },
        i = { nan: "NaN", number: "nombor" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Ys.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected)) return `Input tidak sah: dijangka instanceof ${r.expected}, diterima ${u}`;
            return `Input tidak sah: dijangka ${o}, diterima ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Input tidak sah: dijangka ${Ys.stringifyPrimitive(r.values[0])}`;
            return `Pilihan tidak sah: dijangka salah satu daripada ${Ys.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Terlalu besar: dijangka ${r.origin ?? "nilai"} ${s.verb} ${o}${r.maximum.toString()} ${s.unit ?? "elemen"}`;
            return `Terlalu besar: dijangka ${r.origin ?? "nilai"} adalah ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `Terlalu kecil: dijangka ${r.origin} ${s.verb} ${o}${r.minimum.toString()} ${s.unit}`;
            return `Terlalu kecil: dijangka ${r.origin} adalah ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `String tidak sah: mesti bermula dengan "${o.prefix}"`;
            if (o.format === "ends_with") return `String tidak sah: mesti berakhir dengan "${o.suffix}"`;
            if (o.format === "includes") return `String tidak sah: mesti mengandungi "${o.includes}"`;
            if (o.format === "regex") return `String tidak sah: mesti sepadan dengan corak ${o.pattern}`;
            return `${n[o.format] ?? r.format} tidak sah`;
          }
          case "not_multiple_of":
            return `Nombor tidak sah: perlu gandaan ${r.divisor}`;
          case "unrecognized_keys":
            return `Kunci tidak dikenali: ${Ys.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Kunci tidak sah dalam ${r.origin}`;
          case "invalid_union":
            return "Input tidak sah";
          case "invalid_element":
            return `Nilai tidak sah dalam ${r.origin}`;
          default:
            return "Input tidak sah";
        }
      };
    };
  function QC() {
    return { localeError: XC() };
  }
  vy.exports = Yr.default;
});

var Oy = S(function (Xr, Sy) {
  var eD =
      (Xr && Xr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    tD =
      (Xr && Xr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    rD =
      (Xr && Xr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) eD(t, e, n);
        }
        return tD(t, e), t;
      };
  Object.defineProperty(Xr, "__esModule", { value: !0 });
  Xr.default = iD;
  var Xs = rD(Y()),
    nD = () => {
      let e = {
        string: { unit: "tekens", verb: "heeft" },
        file: { unit: "bytes", verb: "heeft" },
        array: { unit: "elementen", verb: "heeft" },
        set: { unit: "elementen", verb: "heeft" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "invoer",
          email: "emailadres",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO datum en tijd",
          date: "ISO datum",
          time: "ISO tijd",
          duration: "ISO duur",
          ipv4: "IPv4-adres",
          ipv6: "IPv6-adres",
          cidrv4: "IPv4-bereik",
          cidrv6: "IPv6-bereik",
          base64: "base64-gecodeerde tekst",
          base64url: "base64 URL-gecodeerde tekst",
          json_string: "JSON string",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "invoer",
        },
        i = { nan: "NaN", number: "getal" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Xs.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected)) return `Ongeldige invoer: verwacht instanceof ${r.expected}, ontving ${u}`;
            return `Ongeldige invoer: verwacht ${o}, ontving ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Ongeldige invoer: verwacht ${Xs.stringifyPrimitive(r.values[0])}`;
            return `Ongeldige optie: verwacht \xE9\xE9n van ${Xs.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin),
              u = r.origin === "date" ? "laat" : r.origin === "string" ? "lang" : "groot";
            if (s)
              return `Te ${u}: verwacht dat ${r.origin ?? "waarde"} ${o}${r.maximum.toString()} ${s.unit ?? "elementen"} ${s.verb}`;
            return `Te ${u}: verwacht dat ${r.origin ?? "waarde"} ${o}${r.maximum.toString()} is`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin),
              u = r.origin === "date" ? "vroeg" : r.origin === "string" ? "kort" : "klein";
            if (s) return `Te ${u}: verwacht dat ${r.origin} ${o}${r.minimum.toString()} ${s.unit} ${s.verb}`;
            return `Te ${u}: verwacht dat ${r.origin} ${o}${r.minimum.toString()} is`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Ongeldige tekst: moet met "${o.prefix}" beginnen`;
            if (o.format === "ends_with") return `Ongeldige tekst: moet op "${o.suffix}" eindigen`;
            if (o.format === "includes") return `Ongeldige tekst: moet "${o.includes}" bevatten`;
            if (o.format === "regex") return `Ongeldige tekst: moet overeenkomen met patroon ${o.pattern}`;
            return `Ongeldig: ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Ongeldig getal: moet een veelvoud van ${r.divisor} zijn`;
          case "unrecognized_keys":
            return `Onbekende key${r.keys.length > 1 ? "s" : ""}: ${Xs.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Ongeldige key in ${r.origin}`;
          case "invalid_union":
            return "Ongeldige invoer";
          case "invalid_element":
            return `Ongeldige waarde in ${r.origin}`;
          default:
            return "Ongeldige invoer";
        }
      };
    };
  function iD() {
    return { localeError: nD() };
  }
  Sy.exports = Xr.default;
});

var Py = S(function (Qr, ky) {
  var oD =
      (Qr && Qr.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    aD =
      (Qr && Qr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    sD =
      (Qr && Qr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) oD(t, e, n);
        }
        return aD(t, e), t;
      };
  Object.defineProperty(Qr, "__esModule", { value: !0 });
  Qr.default = cD;
  var Qs = sD(Y()),
    uD = () => {
      let e = {
        string: { unit: "tegn", verb: "\xE5 ha" },
        file: { unit: "bytes", verb: "\xE5 ha" },
        array: { unit: "elementer", verb: "\xE5 inneholde" },
        set: { unit: "elementer", verb: "\xE5 inneholde" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "input",
          email: "e-postadresse",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO dato- og klokkeslett",
          date: "ISO-dato",
          time: "ISO-klokkeslett",
          duration: "ISO-varighet",
          ipv4: "IPv4-omr\xE5de",
          ipv6: "IPv6-omr\xE5de",
          cidrv4: "IPv4-spekter",
          cidrv6: "IPv6-spekter",
          base64: "base64-enkodet streng",
          base64url: "base64url-enkodet streng",
          json_string: "JSON-streng",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "input",
        },
        i = { nan: "NaN", number: "tall", array: "liste" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = Qs.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected)) return `Ugyldig input: forventet instanceof ${r.expected}, fikk ${u}`;
            return `Ugyldig input: forventet ${o}, fikk ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Ugyldig verdi: forventet ${Qs.stringifyPrimitive(r.values[0])}`;
            return `Ugyldig valg: forventet en av ${Qs.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `For stor(t): forventet ${r.origin ?? "value"} til \xE5 ha ${o}${r.maximum.toString()} ${s.unit ?? "elementer"}`;
            return `For stor(t): forventet ${r.origin ?? "value"} til \xE5 ha ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `For lite(n): forventet ${r.origin} til \xE5 ha ${o}${r.minimum.toString()} ${s.unit}`;
            return `For lite(n): forventet ${r.origin} til \xE5 ha ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Ugyldig streng: m\xE5 starte med "${o.prefix}"`;
            if (o.format === "ends_with") return `Ugyldig streng: m\xE5 ende med "${o.suffix}"`;
            if (o.format === "includes") return `Ugyldig streng: m\xE5 inneholde "${o.includes}"`;
            if (o.format === "regex") return `Ugyldig streng: m\xE5 matche m\xF8nsteret ${o.pattern}`;
            return `Ugyldig ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${r.divisor}`;
          case "unrecognized_keys":
            return `${r.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${Qs.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Ugyldig n\xF8kkel i ${r.origin}`;
          case "invalid_union":
            return "Ugyldig input";
          case "invalid_element":
            return `Ugyldig verdi i ${r.origin}`;
          default:
            return "Ugyldig input";
        }
      };
    };
  function cD() {
    return { localeError: uD() };
  }
  ky.exports = Qr.default;
});

var $y = S(function (en, Ey) {
  var lD =
      (en && en.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    dD =
      (en && en.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    fD =
      (en && en.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) lD(t, e, n);
        }
        return dD(t, e), t;
      };
  Object.defineProperty(en, "__esModule", { value: !0 });
  en.default = mD;
  var eu = fD(Y()),
    pD = () => {
      let e = {
        string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
        file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
        array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
        set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "giren",
          email: "epostag\xE2h",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO heng\xE2m\u0131",
          date: "ISO tarihi",
          time: "ISO zaman\u0131",
          duration: "ISO m\xFCddeti",
          ipv4: "IPv4 ni\u015F\xE2n\u0131",
          ipv6: "IPv6 ni\u015F\xE2n\u0131",
          cidrv4: "IPv4 menzili",
          cidrv6: "IPv6 menzili",
          base64: "base64-\u015Fifreli metin",
          base64url: "base64url-\u015Fifreli metin",
          json_string: "JSON metin",
          e164: "E.164 say\u0131s\u0131",
          jwt: "JWT",
          template_literal: "giren",
        },
        i = { nan: "NaN", number: "numara", array: "saf", null: "gayb" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = eu.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected)) return `F\xE2sit giren: umulan instanceof ${r.expected}, al\u0131nan ${u}`;
            return `F\xE2sit giren: umulan ${o}, al\u0131nan ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `F\xE2sit giren: umulan ${eu.stringifyPrimitive(r.values[0])}`;
            return `F\xE2sit tercih: m\xFBteberler ${eu.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Fazla b\xFCy\xFCk: ${r.origin ?? "value"}, ${o}${r.maximum.toString()} ${s.unit ?? "elements"} sahip olmal\u0131yd\u0131.`;
            return `Fazla b\xFCy\xFCk: ${r.origin ?? "value"}, ${o}${r.maximum.toString()} olmal\u0131yd\u0131.`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `Fazla k\xFC\xE7\xFCk: ${r.origin}, ${o}${r.minimum.toString()} ${s.unit} sahip olmal\u0131yd\u0131.`;
            return `Fazla k\xFC\xE7\xFCk: ${r.origin}, ${o}${r.minimum.toString()} olmal\u0131yd\u0131.`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `F\xE2sit metin: "${o.prefix}" ile ba\u015Flamal\u0131.`;
            if (o.format === "ends_with") return `F\xE2sit metin: "${o.suffix}" ile bitmeli.`;
            if (o.format === "includes") return `F\xE2sit metin: "${o.includes}" ihtiv\xE2 etmeli.`;
            if (o.format === "regex") return `F\xE2sit metin: ${o.pattern} nak\u015F\u0131na uymal\u0131.`;
            return `F\xE2sit ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `F\xE2sit say\u0131: ${r.divisor} kat\u0131 olmal\u0131yd\u0131.`;
          case "unrecognized_keys":
            return `Tan\u0131nmayan anahtar ${r.keys.length > 1 ? "s" : ""}: ${eu.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `${r.origin} i\xE7in tan\u0131nmayan anahtar var.`;
          case "invalid_union":
            return "Giren tan\u0131namad\u0131.";
          case "invalid_element":
            return `${r.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
          default:
            return "K\u0131ymet tan\u0131namad\u0131.";
        }
      };
    };
  function mD() {
    return { localeError: pD() };
  }
  Ey.exports = en.default;
});

var Ty = S(function (tn, Iy) {
  var gD =
      (tn && tn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    hD =
      (tn && tn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    _D =
      (tn && tn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) gD(t, e, n);
        }
        return hD(t, e), t;
      };
  Object.defineProperty(tn, "__esModule", { value: !0 });
  tn.default = bD;
  var tu = _D(Y()),
    yD = () => {
      let e = {
        string: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
        file: { unit: "\u0628\u0627\u06CC\u067C\u0633", verb: "\u0648\u0644\u0631\u064A" },
        array: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
        set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u0648\u0631\u0648\u062F\u064A",
          email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
          url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
          emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
          date: "\u0646\u06D0\u067C\u0647",
          time: "\u0648\u062E\u062A",
          duration: "\u0645\u0648\u062F\u0647",
          ipv4: "\u062F IPv4 \u067E\u062A\u0647",
          ipv6: "\u062F IPv6 \u067E\u062A\u0647",
          cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
          cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
          base64: "base64-encoded \u0645\u062A\u0646",
          base64url: "base64url-encoded \u0645\u062A\u0646",
          json_string: "JSON \u0645\u062A\u0646",
          e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
          jwt: "JWT",
          template_literal: "\u0648\u0631\u0648\u062F\u064A",
        },
        i = { nan: "NaN", number: "\u0639\u062F\u062F", array: "\u0627\u0631\u06D0" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = tu.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${r.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${u} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
            return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${o} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${u} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${tu.stringifyPrimitive(r.values[0])} \u0648\u0627\u06CC`;
            return `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${tu.joinValues(r.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${r.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${o}${r.maximum.toString()} ${s.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`;
            return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${r.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${o}${r.maximum.toString()} \u0648\u064A`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${r.origin} \u0628\u0627\u06CC\u062F ${o}${r.minimum.toString()} ${s.unit} \u0648\u0644\u0631\u064A`;
            return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${r.origin} \u0628\u0627\u06CC\u062F ${o}${r.minimum.toString()} \u0648\u064A`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${o.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`;
            if (o.format === "ends_with")
              return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${o.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`;
            if (o.format === "includes")
              return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${o.includes}" \u0648\u0644\u0631\u064A`;
            if (o.format === "regex")
              return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${o.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`;
            return `${n[o.format] ?? r.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
          }
          case "not_multiple_of":
            return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${r.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
          case "unrecognized_keys":
            return `\u0646\u0627\u0633\u0645 ${r.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${tu.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${r.origin} \u06A9\u06D0`;
          case "invalid_union":
            return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
          case "invalid_element":
            return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${r.origin} \u06A9\u06D0`;
          default:
            return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
        }
      };
    };
  function bD() {
    return { localeError: yD() };
  }
  Iy.exports = tn.default;
});

var jy = S(function (rn, Ay) {
  var vD =
      (rn && rn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    wD =
      (rn && rn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    SD =
      (rn && rn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) vD(t, e, n);
        }
        return wD(t, e), t;
      };
  Object.defineProperty(rn, "__esModule", { value: !0 });
  rn.default = kD;
  var ru = SD(Y()),
    OD = () => {
      let e = {
        string: { unit: "znak\xF3w", verb: "mie\u0107" },
        file: { unit: "bajt\xF3w", verb: "mie\u0107" },
        array: { unit: "element\xF3w", verb: "mie\u0107" },
        set: { unit: "element\xF3w", verb: "mie\u0107" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "wyra\u017Cenie",
          email: "adres email",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "data i godzina w formacie ISO",
          date: "data w formacie ISO",
          time: "godzina w formacie ISO",
          duration: "czas trwania ISO",
          ipv4: "adres IPv4",
          ipv6: "adres IPv6",
          cidrv4: "zakres IPv4",
          cidrv6: "zakres IPv6",
          base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
          base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
          json_string: "ci\u0105g znak\xF3w w formacie JSON",
          e164: "liczba E.164",
          jwt: "JWT",
          template_literal: "wej\u015Bcie",
        },
        i = { nan: "NaN", number: "liczba", array: "tablica" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = ru.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${r.expected}, otrzymano ${u}`;
            return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${o}, otrzymano ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${ru.stringifyPrimitive(r.values[0])}`;
            return `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${ru.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${r.maximum.toString()} ${s.unit ?? "element\xF3w"}`;
            return `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${r.minimum.toString()} ${s.unit ?? "element\xF3w"}`;
            return `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${o.prefix}"`;
            if (o.format === "ends_with")
              return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${o.suffix}"`;
            if (o.format === "includes")
              return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${o.includes}"`;
            if (o.format === "regex")
              return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${o.pattern}`;
            return `Nieprawid\u0142ow(y/a/e) ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${r.divisor}`;
          case "unrecognized_keys":
            return `Nierozpoznane klucze${r.keys.length > 1 ? "s" : ""}: ${ru.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Nieprawid\u0142owy klucz w ${r.origin}`;
          case "invalid_union":
            return "Nieprawid\u0142owe dane wej\u015Bciowe";
          case "invalid_element":
            return `Nieprawid\u0142owa warto\u015B\u0107 w ${r.origin}`;
          default:
            return "Nieprawid\u0142owe dane wej\u015Bciowe";
        }
      };
    };
  function kD() {
    return { localeError: OD() };
  }
  Ay.exports = rn.default;
});

var Dy = S(function (nn, Cy) {
  var PD =
      (nn && nn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    ED =
      (nn && nn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    $D =
      (nn && nn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) PD(t, e, n);
        }
        return ED(t, e), t;
      };
  Object.defineProperty(nn, "__esModule", { value: !0 });
  nn.default = TD;
  var nu = $D(Y()),
    ID = () => {
      let e = {
        string: { unit: "caracteres", verb: "ter" },
        file: { unit: "bytes", verb: "ter" },
        array: { unit: "itens", verb: "ter" },
        set: { unit: "itens", verb: "ter" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "padr\xE3o",
          email: "endere\xE7o de e-mail",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "data e hora ISO",
          date: "data ISO",
          time: "hora ISO",
          duration: "dura\xE7\xE3o ISO",
          ipv4: "endere\xE7o IPv4",
          ipv6: "endere\xE7o IPv6",
          cidrv4: "faixa de IPv4",
          cidrv6: "faixa de IPv6",
          base64: "texto codificado em base64",
          base64url: "URL codificada em base64",
          json_string: "texto JSON",
          e164: "n\xFAmero E.164",
          jwt: "JWT",
          template_literal: "entrada",
        },
        i = { nan: "NaN", number: "n\xFAmero", null: "nulo" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = nu.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected)) return `Tipo inv\xE1lido: esperado instanceof ${r.expected}, recebido ${u}`;
            return `Tipo inv\xE1lido: esperado ${o}, recebido ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Entrada inv\xE1lida: esperado ${nu.stringifyPrimitive(r.values[0])}`;
            return `Op\xE7\xE3o inv\xE1lida: esperada uma das ${nu.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Muito grande: esperado que ${r.origin ?? "valor"} tivesse ${o}${r.maximum.toString()} ${s.unit ?? "elementos"}`;
            return `Muito grande: esperado que ${r.origin ?? "valor"} fosse ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `Muito pequeno: esperado que ${r.origin} tivesse ${o}${r.minimum.toString()} ${s.unit}`;
            return `Muito pequeno: esperado que ${r.origin} fosse ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Texto inv\xE1lido: deve come\xE7ar com "${o.prefix}"`;
            if (o.format === "ends_with") return `Texto inv\xE1lido: deve terminar com "${o.suffix}"`;
            if (o.format === "includes") return `Texto inv\xE1lido: deve incluir "${o.includes}"`;
            if (o.format === "regex") return `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${o.pattern}`;
            return `${n[o.format] ?? r.format} inv\xE1lido`;
          }
          case "not_multiple_of":
            return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${r.divisor}`;
          case "unrecognized_keys":
            return `Chave${r.keys.length > 1 ? "s" : ""} desconhecida${r.keys.length > 1 ? "s" : ""}: ${nu.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Chave inv\xE1lida em ${r.origin}`;
          case "invalid_union":
            return "Entrada inv\xE1lida";
          case "invalid_element":
            return `Valor inv\xE1lido em ${r.origin}`;
          default:
            return "Campo inv\xE1lido";
        }
      };
    };
  function TD() {
    return { localeError: ID() };
  }
  Cy.exports = nn.default;
});

var My = S(function (on, xy) {
  var AD =
      (on && on.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    RD =
      (on && on.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    jD =
      (on && on.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) AD(t, e, n);
        }
        return RD(t, e), t;
      };
  Object.defineProperty(on, "__esModule", { value: !0 });
  on.default = DD;
  var iu = jD(Y()),
    CD = () => {
      let e = {
        string: { unit: "caractere", verb: "s\u0103 aib\u0103" },
        file: { unit: "octe\u021Bi", verb: "s\u0103 aib\u0103" },
        array: { unit: "elemente", verb: "s\u0103 aib\u0103" },
        set: { unit: "elemente", verb: "s\u0103 aib\u0103" },
        map: { unit: "intr\u0103ri", verb: "s\u0103 aib\u0103" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "intrare",
          email: "adres\u0103 de email",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "dat\u0103 \u0219i or\u0103 ISO",
          date: "dat\u0103 ISO",
          time: "or\u0103 ISO",
          duration: "durat\u0103 ISO",
          ipv4: "adres\u0103 IPv4",
          ipv6: "adres\u0103 IPv6",
          mac: "adres\u0103 MAC",
          cidrv4: "interval IPv4",
          cidrv6: "interval IPv6",
          base64: "\u0219ir codat base64",
          base64url: "\u0219ir codat base64url",
          json_string: "\u0219ir JSON",
          e164: "num\u0103r E.164",
          jwt: "JWT",
          template_literal: "intrare",
        },
        i = {
          nan: "NaN",
          string: "\u0219ir",
          number: "num\u0103r",
          boolean: "boolean",
          function: "func\u021Bie",
          array: "matrice",
          object: "obiect",
          undefined: "nedefinit",
          symbol: "simbol",
          bigint: "num\u0103r mare",
          void: "void",
          never: "never",
          map: "hart\u0103",
          set: "set",
        };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = iu.parsedType(r.input),
              u = i[s] ?? s;
            return `Intrare invalid\u0103: a\u0219teptat ${o}, primit ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `Intrare invalid\u0103: a\u0219teptat ${iu.stringifyPrimitive(r.values[0])}`;
            return `Op\u021Biune invalid\u0103: a\u0219teptat una dintre ${iu.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Prea mare: a\u0219teptat ca ${r.origin ?? "valoarea"} ${s.verb} ${o}${r.maximum.toString()} ${s.unit ?? "elemente"}`;
            return `Prea mare: a\u0219teptat ca ${r.origin ?? "valoarea"} s\u0103 fie ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `Prea mic: a\u0219teptat ca ${r.origin} ${s.verb} ${o}${r.minimum.toString()} ${s.unit}`;
            return `Prea mic: a\u0219teptat ca ${r.origin} s\u0103 fie ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `\u0218ir invalid: trebuie s\u0103 \xEEnceap\u0103 cu "${o.prefix}"`;
            if (o.format === "ends_with") return `\u0218ir invalid: trebuie s\u0103 se termine cu "${o.suffix}"`;
            if (o.format === "includes") return `\u0218ir invalid: trebuie s\u0103 includ\u0103 "${o.includes}"`;
            if (o.format === "regex")
              return `\u0218ir invalid: trebuie s\u0103 se potriveasc\u0103 cu modelul ${o.pattern}`;
            return `Format invalid: ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Num\u0103r invalid: trebuie s\u0103 fie multiplu de ${r.divisor}`;
          case "unrecognized_keys":
            return `Chei nerecunoscute: ${iu.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Cheie invalid\u0103 \xEEn ${r.origin}`;
          case "invalid_union":
            return "Intrare invalid\u0103";
          case "invalid_element":
            return `Valoare invalid\u0103 \xEEn ${r.origin}`;
          default:
            return "Intrare invalid\u0103";
        }
      };
    };
  function DD() {
    return { localeError: CD() };
  }
  xy.exports = on.default;
});

var Uy = S(function (an, Ly) {
  var xD =
      (an && an.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    MD =
      (an && an.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    zD =
      (an && an.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) xD(t, e, n);
        }
        return MD(t, e), t;
      };
  Object.defineProperty(an, "__esModule", { value: !0 });
  an.default = UD;
  var ou = zD(Y());
  function zy(e, t, n, i) {
    let r = Math.abs(e),
      o = r % 10,
      s = r % 100;
    if (s >= 11 && s <= 19) return i;
    if (o === 1) return t;
    if (o >= 2 && o <= 4) return n;
    return i;
  }
  var LD = () => {
    let e = {
      string: {
        unit: {
          one: "\u0441\u0438\u043C\u0432\u043E\u043B",
          few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
          many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
        },
        verb: "\u0438\u043C\u0435\u0442\u044C",
      },
      file: {
        unit: {
          one: "\u0431\u0430\u0439\u0442",
          few: "\u0431\u0430\u0439\u0442\u0430",
          many: "\u0431\u0430\u0439\u0442",
        },
        verb: "\u0438\u043C\u0435\u0442\u044C",
      },
      array: {
        unit: {
          one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
          few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
          many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
        },
        verb: "\u0438\u043C\u0435\u0442\u044C",
      },
      set: {
        unit: {
          one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
          few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
          many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
        },
        verb: "\u0438\u043C\u0435\u0442\u044C",
      },
    };
    function t(r) {
      return e[r] ?? null;
    }
    let n = {
        regex: "\u0432\u0432\u043E\u0434",
        email: "email \u0430\u0434\u0440\u0435\u0441",
        url: "URL",
        emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
        date: "ISO \u0434\u0430\u0442\u0430",
        time: "ISO \u0432\u0440\u0435\u043C\u044F",
        duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
        ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
        ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
        cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
        cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
        base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
        base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
        json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
        e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
        jwt: "JWT",
        template_literal: "\u0432\u0432\u043E\u0434",
      },
      i = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0441\u0438\u0432" };
    return (r) => {
      switch (r.code) {
        case "invalid_type": {
          let o = i[r.expected] ?? r.expected,
            s = ou.parsedType(r.input),
            u = i[s] ?? s;
          if (/^[A-Z]/.test(r.expected))
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${r.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${u}`;
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${o}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${u}`;
        }
        case "invalid_value":
          if (r.values.length === 1)
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${ou.stringifyPrimitive(r.values[0])}`;
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${ou.joinValues(r.values, "|")}`;
        case "too_big": {
          let o = r.inclusive ? "<=" : "<",
            s = t(r.origin);
          if (s) {
            let u = Number(r.maximum),
              c = zy(u, s.unit.one, s.unit.few, s.unit.many);
            return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${r.maximum.toString()} ${c}`;
          }
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${o}${r.maximum.toString()}`;
        }
        case "too_small": {
          let o = r.inclusive ? ">=" : ">",
            s = t(r.origin);
          if (s) {
            let u = Number(r.minimum),
              c = zy(u, s.unit.one, s.unit.few, s.unit.many);
            return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${r.minimum.toString()} ${c}`;
          }
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin} \u0431\u0443\u0434\u0435\u0442 ${o}${r.minimum.toString()}`;
        }
        case "invalid_format": {
          let o = r;
          if (o.format === "starts_with")
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${o.prefix}"`;
          if (o.format === "ends_with")
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${o.suffix}"`;
          if (o.format === "includes")
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${o.includes}"`;
          if (o.format === "regex")
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`;
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${n[o.format] ?? r.format}`;
        }
        case "not_multiple_of":
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${r.divisor}`;
        case "unrecognized_keys":
          return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${r.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${r.keys.length > 1 ? "\u0438" : ""}: ${ou.joinValues(r.keys, ", ")}`;
        case "invalid_key":
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${r.origin}`;
        case "invalid_union":
          return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
        case "invalid_element":
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${r.origin}`;
        default:
          return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      }
    };
  };
  function UD() {
    return { localeError: LD() };
  }
  Ly.exports = an.default;
});

var Zy = S(function (sn, Ny) {
  var ND =
      (sn && sn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    ZD =
      (sn && sn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    FD =
      (sn && sn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) ND(t, e, n);
        }
        return ZD(t, e), t;
      };
  Object.defineProperty(sn, "__esModule", { value: !0 });
  sn.default = KD;
  var au = FD(Y()),
    BD = () => {
      let e = {
        string: { unit: "znakov", verb: "imeti" },
        file: { unit: "bajtov", verb: "imeti" },
        array: { unit: "elementov", verb: "imeti" },
        set: { unit: "elementov", verb: "imeti" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "vnos",
          email: "e-po\u0161tni naslov",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO datum in \u010Das",
          date: "ISO datum",
          time: "ISO \u010Das",
          duration: "ISO trajanje",
          ipv4: "IPv4 naslov",
          ipv6: "IPv6 naslov",
          cidrv4: "obseg IPv4",
          cidrv6: "obseg IPv6",
          base64: "base64 kodiran niz",
          base64url: "base64url kodiran niz",
          json_string: "JSON niz",
          e164: "E.164 \u0161tevilka",
          jwt: "JWT",
          template_literal: "vnos",
        },
        i = { nan: "NaN", number: "\u0161tevilo", array: "tabela" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = au.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Neveljaven vnos: pri\u010Dakovano instanceof ${r.expected}, prejeto ${u}`;
            return `Neveljaven vnos: pri\u010Dakovano ${o}, prejeto ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Neveljaven vnos: pri\u010Dakovano ${au.stringifyPrimitive(r.values[0])}`;
            return `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${au.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Preveliko: pri\u010Dakovano, da bo ${r.origin ?? "vrednost"} imelo ${o}${r.maximum.toString()} ${s.unit ?? "elementov"}`;
            return `Preveliko: pri\u010Dakovano, da bo ${r.origin ?? "vrednost"} ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `Premajhno: pri\u010Dakovano, da bo ${r.origin} imelo ${o}${r.minimum.toString()} ${s.unit}`;
            return `Premajhno: pri\u010Dakovano, da bo ${r.origin} ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Neveljaven niz: mora se za\u010Deti z "${o.prefix}"`;
            if (o.format === "ends_with") return `Neveljaven niz: mora se kon\u010Dati z "${o.suffix}"`;
            if (o.format === "includes") return `Neveljaven niz: mora vsebovati "${o.includes}"`;
            if (o.format === "regex") return `Neveljaven niz: mora ustrezati vzorcu ${o.pattern}`;
            return `Neveljaven ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${r.divisor}`;
          case "unrecognized_keys":
            return `Neprepoznan${r.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${au.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Neveljaven klju\u010D v ${r.origin}`;
          case "invalid_union":
            return "Neveljaven vnos";
          case "invalid_element":
            return `Neveljavna vrednost v ${r.origin}`;
          default:
            return "Neveljaven vnos";
        }
      };
    };
  function KD() {
    return { localeError: BD() };
  }
  Ny.exports = sn.default;
});

var By = S(function (un, Fy) {
  var qD =
      (un && un.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    HD =
      (un && un.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    VD =
      (un && un.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) qD(t, e, n);
        }
        return HD(t, e), t;
      };
  Object.defineProperty(un, "__esModule", { value: !0 });
  un.default = WD;
  var su = VD(Y()),
    GD = () => {
      let e = {
        string: { unit: "tecken", verb: "att ha" },
        file: { unit: "bytes", verb: "att ha" },
        array: { unit: "objekt", verb: "att inneh\xE5lla" },
        set: { unit: "objekt", verb: "att inneh\xE5lla" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "regulj\xE4rt uttryck",
          email: "e-postadress",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO-datum och tid",
          date: "ISO-datum",
          time: "ISO-tid",
          duration: "ISO-varaktighet",
          ipv4: "IPv4-intervall",
          ipv6: "IPv6-intervall",
          cidrv4: "IPv4-spektrum",
          cidrv6: "IPv6-spektrum",
          base64: "base64-kodad str\xE4ng",
          base64url: "base64url-kodad str\xE4ng",
          json_string: "JSON-str\xE4ng",
          e164: "E.164-nummer",
          jwt: "JWT",
          template_literal: "mall-literal",
        },
        i = { nan: "NaN", number: "antal", array: "lista" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = su.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${r.expected}, fick ${u}`;
            return `Ogiltig inmatning: f\xF6rv\xE4ntat ${o}, fick ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `Ogiltig inmatning: f\xF6rv\xE4ntat ${su.stringifyPrimitive(r.values[0])}`;
            return `Ogiltigt val: f\xF6rv\xE4ntade en av ${su.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `F\xF6r stor(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.maximum.toString()} ${s.unit ?? "element"}`;
            return `F\xF6r stor(t): f\xF6rv\xE4ntat ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `F\xF6r lite(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.minimum.toString()} ${s.unit}`;
            return `F\xF6r lite(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${o.prefix}"`;
            if (o.format === "ends_with") return `Ogiltig str\xE4ng: m\xE5ste sluta med "${o.suffix}"`;
            if (o.format === "includes") return `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${o.includes}"`;
            if (o.format === "regex") return `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${o.pattern}"`;
            return `Ogiltig(t) ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Ogiltigt tal: m\xE5ste vara en multipel av ${r.divisor}`;
          case "unrecognized_keys":
            return `${r.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${su.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Ogiltig nyckel i ${r.origin ?? "v\xE4rdet"}`;
          case "invalid_union":
            return "Ogiltig input";
          case "invalid_element":
            return `Ogiltigt v\xE4rde i ${r.origin ?? "v\xE4rdet"}`;
          default:
            return "Ogiltig input";
        }
      };
    };
  function WD() {
    return { localeError: GD() };
  }
  Fy.exports = un.default;
});

var qy = S(function (cn, Ky) {
  var JD =
      (cn && cn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    YD =
      (cn && cn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    XD =
      (cn && cn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) JD(t, e, n);
        }
        return YD(t, e), t;
      };
  Object.defineProperty(cn, "__esModule", { value: !0 });
  cn.default = ex;
  var uu = XD(Y()),
    QD = () => {
      let e = {
        string: {
          unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
          verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
        },
        file: {
          unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
          verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
        },
        array: {
          unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
          verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
        },
        set: {
          unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
          verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
        },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
          email: "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
          date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
          time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
          duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
          ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
          ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
          cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
          cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
          base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
          base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
          json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
          e164: "E.164 \u0B8E\u0BA3\u0BCD",
          jwt: "JWT",
          template_literal: "input",
        },
        i = {
          nan: "NaN",
          number: "\u0B8E\u0BA3\u0BCD",
          array: "\u0B85\u0BA3\u0BBF",
          null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8",
        };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = uu.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${r.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${u}`;
            return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${o}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${uu.stringifyPrimitive(r.values[0])}`;
            return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${uu.joinValues(r.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${r.maximum.toString()} ${s.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
            return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${r.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin} ${o}${r.minimum.toString()} ${s.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
            return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin} ${o}${r.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
            if (o.format === "ends_with")
              return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
            if (o.format === "includes")
              return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
            if (o.format === "regex")
              return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${o.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
            return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${r.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          case "unrecognized_keys":
            return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${r.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${uu.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `${r.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
          case "invalid_union":
            return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
          case "invalid_element":
            return `${r.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
          default:
            return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
        }
      };
    };
  function ex() {
    return { localeError: QD() };
  }
  Ky.exports = cn.default;
});

var Vy = S(function (ln, Hy) {
  var tx =
      (ln && ln.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    rx =
      (ln && ln.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    nx =
      (ln && ln.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) tx(t, e, n);
        }
        return rx(t, e), t;
      };
  Object.defineProperty(ln, "__esModule", { value: !0 });
  ln.default = ox;
  var cu = nx(Y()),
    ix = () => {
      let e = {
        string: { unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
        file: { unit: "\u0E44\u0E1A\u0E15\u0E4C", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
        array: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
        set: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
          email: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
          url: "URL",
          emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
          date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
          time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
          duration: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
          ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
          ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
          cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
          cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
          base64: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
          base64url:
            "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
          json_string: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
          e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
          jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
          template_literal: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
        },
        i = {
          nan: "NaN",
          number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
          array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)",
          null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)",
        };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = cu.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${r.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${u}`;
            return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${o} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${cu.stringifyPrimitive(r.values[0])}`;
            return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${cu.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive
                ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
                : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
              s = t(r.origin);
            if (s)
              return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.maximum.toString()} ${s.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`;
            return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive
                ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
                : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
              s = t(r.origin);
            if (s)
              return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.minimum.toString()} ${s.unit}`;
            return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${o.prefix}"`;
            if (o.format === "ends_with")
              return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${o.suffix}"`;
            if (o.format === "includes")
              return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${o.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`;
            if (o.format === "regex")
              return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${o.pattern}`;
            return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${r.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
          case "unrecognized_keys":
            return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${cu.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${r.origin}`;
          case "invalid_union":
            return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
          case "invalid_element":
            return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${r.origin}`;
          default:
            return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
        }
      };
    };
  function ox() {
    return { localeError: ix() };
  }
  Hy.exports = ln.default;
});

var Wy = S(function (dn, Gy) {
  var ax =
      (dn && dn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    sx =
      (dn && dn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    ux =
      (dn && dn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) ax(t, e, n);
        }
        return sx(t, e), t;
      };
  Object.defineProperty(dn, "__esModule", { value: !0 });
  dn.default = lx;
  var lu = ux(Y()),
    cx = () => {
      let e = {
        string: { unit: "karakter", verb: "olmal\u0131" },
        file: { unit: "bayt", verb: "olmal\u0131" },
        array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
        set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "girdi",
          email: "e-posta adresi",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO tarih ve saat",
          date: "ISO tarih",
          time: "ISO saat",
          duration: "ISO s\xFCre",
          ipv4: "IPv4 adresi",
          ipv6: "IPv6 adresi",
          cidrv4: "IPv4 aral\u0131\u011F\u0131",
          cidrv6: "IPv6 aral\u0131\u011F\u0131",
          base64: "base64 ile \u015Fifrelenmi\u015F metin",
          base64url: "base64url ile \u015Fifrelenmi\u015F metin",
          json_string: "JSON dizesi",
          e164: "E.164 say\u0131s\u0131",
          jwt: "JWT",
          template_literal: "\u015Eablon dizesi",
        },
        i = { nan: "NaN" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = lu.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${r.expected}, al\u0131nan ${u}`;
            return `Ge\xE7ersiz de\u011Fer: beklenen ${o}, al\u0131nan ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1) return `Ge\xE7ersiz de\u011Fer: beklenen ${lu.stringifyPrimitive(r.values[0])}`;
            return `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${lu.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\xC7ok b\xFCy\xFCk: beklenen ${r.origin ?? "de\u011Fer"} ${o}${r.maximum.toString()} ${s.unit ?? "\xF6\u011Fe"}`;
            return `\xC7ok b\xFCy\xFCk: beklenen ${r.origin ?? "de\u011Fer"} ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `\xC7ok k\xFC\xE7\xFCk: beklenen ${r.origin} ${o}${r.minimum.toString()} ${s.unit}`;
            return `\xC7ok k\xFC\xE7\xFCk: beklenen ${r.origin} ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Ge\xE7ersiz metin: "${o.prefix}" ile ba\u015Flamal\u0131`;
            if (o.format === "ends_with") return `Ge\xE7ersiz metin: "${o.suffix}" ile bitmeli`;
            if (o.format === "includes") return `Ge\xE7ersiz metin: "${o.includes}" i\xE7ermeli`;
            if (o.format === "regex") return `Ge\xE7ersiz metin: ${o.pattern} desenine uymal\u0131`;
            return `Ge\xE7ersiz ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Ge\xE7ersiz say\u0131: ${r.divisor} ile tam b\xF6l\xFCnebilmeli`;
          case "unrecognized_keys":
            return `Tan\u0131nmayan anahtar${r.keys.length > 1 ? "lar" : ""}: ${lu.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `${r.origin} i\xE7inde ge\xE7ersiz anahtar`;
          case "invalid_union":
            return "Ge\xE7ersiz de\u011Fer";
          case "invalid_element":
            return `${r.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
          default:
            return "Ge\xE7ersiz de\u011Fer";
        }
      };
    };
  function lx() {
    return { localeError: cx() };
  }
  Gy.exports = dn.default;
});

var pd = S(function (fn, Jy) {
  var dx =
      (fn && fn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    fx =
      (fn && fn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    px =
      (fn && fn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) dx(t, e, n);
        }
        return fx(t, e), t;
      };
  Object.defineProperty(fn, "__esModule", { value: !0 });
  fn.default = gx;
  var du = px(Y()),
    mx = () => {
      let e = {
        string: {
          unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
          verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
        },
        file: { unit: "\u0431\u0430\u0439\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
        array: {
          unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
          verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
        },
        set: {
          unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
          verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
        },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
          email:
            "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
          url: "URL",
          emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
          date: "\u0434\u0430\u0442\u0430 ISO",
          time: "\u0447\u0430\u0441 ISO",
          duration: "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
          ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
          ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
          cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
          cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
          base64: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
          base64url:
            "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
          json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
          e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
          jwt: "JWT",
          template_literal: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
        },
        i = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0438\u0432" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = du.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${r.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${u}`;
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${o}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${du.stringifyPrimitive(r.values[0])}`;
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${du.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${s.verb} ${o}${r.maximum.toString()} ${s.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`;
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin} ${s.verb} ${o}${r.minimum.toString()} ${s.unit}`;
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin} \u0431\u0443\u0434\u0435 ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${o.prefix}"`;
            if (o.format === "ends_with")
              return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${o.suffix}"`;
            if (o.format === "includes")
              return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${o.includes}"`;
            if (o.format === "regex")
              return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`;
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${r.divisor}`;
          case "unrecognized_keys":
            return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${r.keys.length > 1 ? "\u0456" : ""}: ${du.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${r.origin}`;
          case "invalid_union":
            return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
          case "invalid_element":
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${r.origin}`;
          default:
            return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
        }
      };
    };
  function gx() {
    return { localeError: mx() };
  }
  Jy.exports = fn.default;
});

var Xy = S(function (Gi, Yy) {
  var hx =
    (Gi && Gi.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(Gi, "__esModule", { value: !0 });
  Gi.default = yx;
  var _x = hx(pd());
  function yx() {
    return (0, _x.default)();
  }
  Yy.exports = Gi.default;
});

var eb = S(function (mn, Qy) {
  var bx =
      (mn && mn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    vx =
      (mn && mn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    wx =
      (mn && mn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) bx(t, e, n);
        }
        return vx(t, e), t;
      };
  Object.defineProperty(mn, "__esModule", { value: !0 });
  mn.default = Ox;
  var fu = wx(Y()),
    Sx = () => {
      let e = {
        string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" },
        file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" },
        array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
        set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u0627\u0646 \u067E\u0679",
          email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
          url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
          emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
          uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
          uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
          nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
          ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
          xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
          ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
          datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
          date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
          time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
          duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
          ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
          ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
          cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
          cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
          base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
          base64url:
            "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
          json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
          e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
          jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
          template_literal: "\u0627\u0646 \u067E\u0679",
        },
        i = { nan: "NaN", number: "\u0646\u0645\u0628\u0631", array: "\u0622\u0631\u06D2", null: "\u0646\u0644" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = fu.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${r.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${u} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
            return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${o} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${u} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${fu.stringifyPrimitive(r.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
            return `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${fu.joinValues(r.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${r.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${o}${r.maximum.toString()} ${s.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
            return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${r.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${o}${r.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${r.origin} \u06A9\u06D2 ${o}${r.minimum.toString()} ${s.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
            return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${r.origin} \u06A9\u0627 ${o}${r.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
            if (o.format === "ends_with")
              return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
            if (o.format === "includes")
              return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
            if (o.format === "regex")
              return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${o.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
            return `\u063A\u0644\u0637 ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${r.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
          case "unrecognized_keys":
            return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${r.keys.length > 1 ? "\u0632" : ""}: ${fu.joinValues(r.keys, "\u060C ")}`;
          case "invalid_key":
            return `${r.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
          case "invalid_union":
            return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
          case "invalid_element":
            return `${r.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
          default:
            return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
        }
      };
    };
  function Ox() {
    return { localeError: Sx() };
  }
  Qy.exports = mn.default;
});

var rb = S(function (gn, tb) {
  var kx =
      (gn && gn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    Px =
      (gn && gn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Ex =
      (gn && gn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) kx(t, e, n);
        }
        return Px(t, e), t;
      };
  Object.defineProperty(gn, "__esModule", { value: !0 });
  gn.default = Ix;
  var pu = Ex(Y()),
    $x = () => {
      let e = {
        string: { unit: "belgi", verb: "bo\u2018lishi kerak" },
        file: { unit: "bayt", verb: "bo\u2018lishi kerak" },
        array: { unit: "element", verb: "bo\u2018lishi kerak" },
        set: { unit: "element", verb: "bo\u2018lishi kerak" },
        map: { unit: "yozuv", verb: "bo\u2018lishi kerak" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "kirish",
          email: "elektron pochta manzili",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO sana va vaqti",
          date: "ISO sana",
          time: "ISO vaqt",
          duration: "ISO davomiylik",
          ipv4: "IPv4 manzil",
          ipv6: "IPv6 manzil",
          mac: "MAC manzil",
          cidrv4: "IPv4 diapazon",
          cidrv6: "IPv6 diapazon",
          base64: "base64 kodlangan satr",
          base64url: "base64url kodlangan satr",
          json_string: "JSON satr",
          e164: "E.164 raqam",
          jwt: "JWT",
          template_literal: "kirish",
        },
        i = { nan: "NaN", number: "raqam", array: "massiv" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = pu.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${r.expected}, qabul qilingan ${u}`;
            return `Noto\u2018g\u2018ri kirish: kutilgan ${o}, qabul qilingan ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `Noto\u2018g\u2018ri kirish: kutilgan ${pu.stringifyPrimitive(r.values[0])}`;
            return `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${pu.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Juda katta: kutilgan ${r.origin ?? "qiymat"} ${o}${r.maximum.toString()} ${s.unit} ${s.verb}`;
            return `Juda katta: kutilgan ${r.origin ?? "qiymat"} ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s) return `Juda kichik: kutilgan ${r.origin} ${o}${r.minimum.toString()} ${s.unit} ${s.verb}`;
            return `Juda kichik: kutilgan ${r.origin} ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with") return `Noto\u2018g\u2018ri satr: "${o.prefix}" bilan boshlanishi kerak`;
            if (o.format === "ends_with") return `Noto\u2018g\u2018ri satr: "${o.suffix}" bilan tugashi kerak`;
            if (o.format === "includes")
              return `Noto\u2018g\u2018ri satr: "${o.includes}" ni o\u2018z ichiga olishi kerak`;
            if (o.format === "regex") return `Noto\u2018g\u2018ri satr: ${o.pattern} shabloniga mos kelishi kerak`;
            return `Noto\u2018g\u2018ri ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `Noto\u2018g\u2018ri raqam: ${r.divisor} ning karralisi bo\u2018lishi kerak`;
          case "unrecognized_keys":
            return `Noma\u2019lum kalit${r.keys.length > 1 ? "lar" : ""}: ${pu.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `${r.origin} dagi kalit noto\u2018g\u2018ri`;
          case "invalid_union":
            return "Noto\u2018g\u2018ri kirish";
          case "invalid_element":
            return `${r.origin} da noto\u2018g\u2018ri qiymat`;
          default:
            return "Noto\u2018g\u2018ri kirish";
        }
      };
    };
  function Ix() {
    return { localeError: $x() };
  }
  tb.exports = gn.default;
});

var ib = S(function (hn, nb) {
  var Tx =
      (hn && hn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    Ax =
      (hn && hn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Rx =
      (hn && hn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Tx(t, e, n);
        }
        return Ax(t, e), t;
      };
  Object.defineProperty(hn, "__esModule", { value: !0 });
  hn.default = Cx;
  var mu = Rx(Y()),
    jx = () => {
      let e = {
        string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
        file: { unit: "byte", verb: "c\xF3" },
        array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
        set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u0111\u1EA7u v\xE0o",
          email: "\u0111\u1ECBa ch\u1EC9 email",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ng\xE0y gi\u1EDD ISO",
          date: "ng\xE0y ISO",
          time: "gi\u1EDD ISO",
          duration: "kho\u1EA3ng th\u1EDDi gian ISO",
          ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
          ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
          cidrv4: "d\u1EA3i IPv4",
          cidrv6: "d\u1EA3i IPv6",
          base64: "chu\u1ED7i m\xE3 h\xF3a base64",
          base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
          json_string: "chu\u1ED7i JSON",
          e164: "s\u1ED1 E.164",
          jwt: "JWT",
          template_literal: "\u0111\u1EA7u v\xE0o",
        },
        i = { nan: "NaN", number: "s\u1ED1", array: "m\u1EA3ng" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = mu.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${r.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${u}`;
            return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${o}, nh\u1EADn \u0111\u01B0\u1EE3c ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${mu.stringifyPrimitive(r.values[0])}`;
            return `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${mu.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${r.origin ?? "gi\xE1 tr\u1ECB"} ${s.verb} ${o}${r.maximum.toString()} ${s.unit ?? "ph\u1EA7n t\u1EED"}`;
            return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${r.origin ?? "gi\xE1 tr\u1ECB"} ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${r.origin} ${s.verb} ${o}${r.minimum.toString()} ${s.unit}`;
            return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${r.origin} ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${o.prefix}"`;
            if (o.format === "ends_with")
              return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${o.suffix}"`;
            if (o.format === "includes")
              return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${o.includes}"`;
            if (o.format === "regex")
              return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${o.pattern}`;
            return `${n[o.format] ?? r.format} kh\xF4ng h\u1EE3p l\u1EC7`;
          }
          case "not_multiple_of":
            return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${r.divisor}`;
          case "unrecognized_keys":
            return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${mu.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${r.origin}`;
          case "invalid_union":
            return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
          case "invalid_element":
            return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${r.origin}`;
          default:
            return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
        }
      };
    };
  function Cx() {
    return { localeError: jx() };
  }
  nb.exports = hn.default;
});

var ab = S(function (_n, ob) {
  var Dx =
      (_n && _n.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    xx =
      (_n && _n.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Mx =
      (_n && _n.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Dx(t, e, n);
        }
        return xx(t, e), t;
      };
  Object.defineProperty(_n, "__esModule", { value: !0 });
  _n.default = Lx;
  var gu = Mx(Y()),
    zx = () => {
      let e = {
        string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
        file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
        array: { unit: "\u9879", verb: "\u5305\u542B" },
        set: { unit: "\u9879", verb: "\u5305\u542B" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u8F93\u5165",
          email: "\u7535\u5B50\u90AE\u4EF6",
          url: "URL",
          emoji: "\u8868\u60C5\u7B26\u53F7",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO\u65E5\u671F\u65F6\u95F4",
          date: "ISO\u65E5\u671F",
          time: "ISO\u65F6\u95F4",
          duration: "ISO\u65F6\u957F",
          ipv4: "IPv4\u5730\u5740",
          ipv6: "IPv6\u5730\u5740",
          cidrv4: "IPv4\u7F51\u6BB5",
          cidrv6: "IPv6\u7F51\u6BB5",
          base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
          base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
          json_string: "JSON\u5B57\u7B26\u4E32",
          e164: "E.164\u53F7\u7801",
          jwt: "JWT",
          template_literal: "\u8F93\u5165",
        },
        i = { nan: "NaN", number: "\u6570\u5B57", array: "\u6570\u7EC4", null: "\u7A7A\u503C(null)" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = gu.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${r.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${u}`;
            return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${o}\uFF0C\u5B9E\u9645\u63A5\u6536 ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${gu.stringifyPrimitive(r.values[0])}`;
            return `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${gu.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${r.origin ?? "\u503C"} ${o}${r.maximum.toString()} ${s.unit ?? "\u4E2A\u5143\u7D20"}`;
            return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${r.origin ?? "\u503C"} ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${r.origin} ${o}${r.minimum.toString()} ${s.unit}`;
            return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${r.origin} ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.prefix}" \u5F00\u5934`;
            if (o.format === "ends_with")
              return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.suffix}" \u7ED3\u5C3E`;
            if (o.format === "includes")
              return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${o.includes}"`;
            if (o.format === "regex")
              return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${o.pattern}`;
            return `\u65E0\u6548${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${r.divisor} \u7684\u500D\u6570`;
          case "unrecognized_keys":
            return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${gu.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `${r.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
          case "invalid_union":
            return "\u65E0\u6548\u8F93\u5165";
          case "invalid_element":
            return `${r.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
          default:
            return "\u65E0\u6548\u8F93\u5165";
        }
      };
    };
  function Lx() {
    return { localeError: zx() };
  }
  ob.exports = _n.default;
});

var ub = S(function (yn, sb) {
  var Ux =
      (yn && yn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    Nx =
      (yn && yn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Zx =
      (yn && yn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Ux(t, e, n);
        }
        return Nx(t, e), t;
      };
  Object.defineProperty(yn, "__esModule", { value: !0 });
  yn.default = Bx;
  var hu = Zx(Y()),
    Fx = () => {
      let e = {
        string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
        file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
        array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
        set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u8F38\u5165",
          email: "\u90F5\u4EF6\u5730\u5740",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "ISO \u65E5\u671F\u6642\u9593",
          date: "ISO \u65E5\u671F",
          time: "ISO \u6642\u9593",
          duration: "ISO \u671F\u9593",
          ipv4: "IPv4 \u4F4D\u5740",
          ipv6: "IPv6 \u4F4D\u5740",
          cidrv4: "IPv4 \u7BC4\u570D",
          cidrv6: "IPv6 \u7BC4\u570D",
          base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
          base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
          json_string: "JSON \u5B57\u4E32",
          e164: "E.164 \u6578\u503C",
          jwt: "JWT",
          template_literal: "\u8F38\u5165",
        },
        i = { nan: "NaN" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = hu.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${r.expected}\uFF0C\u4F46\u6536\u5230 ${u}`;
            return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${o}\uFF0C\u4F46\u6536\u5230 ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${hu.stringifyPrimitive(r.values[0])}`;
            return `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${hu.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${r.origin ?? "\u503C"} \u61C9\u70BA ${o}${r.maximum.toString()} ${s.unit ?? "\u500B\u5143\u7D20"}`;
            return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${r.origin ?? "\u503C"} \u61C9\u70BA ${o}${r.maximum.toString()}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${r.origin} \u61C9\u70BA ${o}${r.minimum.toString()} ${s.unit}`;
            return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${r.origin} \u61C9\u70BA ${o}${r.minimum.toString()}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.prefix}" \u958B\u982D`;
            if (o.format === "ends_with")
              return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.suffix}" \u7D50\u5C3E`;
            if (o.format === "includes")
              return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${o.includes}"`;
            if (o.format === "regex")
              return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${o.pattern}`;
            return `\u7121\u6548\u7684 ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${r.divisor} \u7684\u500D\u6578`;
          case "unrecognized_keys":
            return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${r.keys.length > 1 ? "\u5011" : ""}\uFF1A${hu.joinValues(r.keys, "\u3001")}`;
          case "invalid_key":
            return `${r.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
          case "invalid_union":
            return "\u7121\u6548\u7684\u8F38\u5165\u503C";
          case "invalid_element":
            return `${r.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
          default:
            return "\u7121\u6548\u7684\u8F38\u5165\u503C";
        }
      };
    };
  function Bx() {
    return { localeError: Fx() };
  }
  sb.exports = yn.default;
});

var lb = S(function (bn, cb) {
  var Kx =
      (bn && bn.__createBinding) ||
      (Object.create
        ? function (e, t, n, i) {
            if (i === void 0) i = n;
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable))
              r = {
                enumerable: !0,
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
    qx =
      (bn && bn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Hx =
      (bn && bn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Kx(t, e, n);
        }
        return qx(t, e), t;
      };
  Object.defineProperty(bn, "__esModule", { value: !0 });
  bn.default = Gx;
  var _u = Hx(Y()),
    Vx = () => {
      let e = {
        string: { unit: "\xE0mi", verb: "n\xED" },
        file: { unit: "bytes", verb: "n\xED" },
        array: { unit: "nkan", verb: "n\xED" },
        set: { unit: "nkan", verb: "n\xED" },
      };
      function t(r) {
        return e[r] ?? null;
      }
      let n = {
          regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
          email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
          url: "URL",
          emoji: "emoji",
          uuid: "UUID",
          uuidv4: "UUIDv4",
          uuidv6: "UUIDv6",
          nanoid: "nanoid",
          guid: "GUID",
          cuid: "cuid",
          cuid2: "cuid2",
          ulid: "ULID",
          xid: "XID",
          ksuid: "KSUID",
          datetime: "\xE0k\xF3k\xF2 ISO",
          date: "\u1ECDj\u1ECD\u0301 ISO",
          time: "\xE0k\xF3k\xF2 ISO",
          duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
          ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
          ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
          cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
          cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
          base64: "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
          base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
          json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
          e164: "n\u1ECD\u0301mb\xE0 E.164",
          jwt: "JWT",
          template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
        },
        i = { nan: "NaN", number: "n\u1ECD\u0301mb\xE0", array: "akop\u1ECD" };
      return (r) => {
        switch (r.code) {
          case "invalid_type": {
            let o = i[r.expected] ?? r.expected,
              s = _u.parsedType(r.input),
              u = i[s] ?? s;
            if (/^[A-Z]/.test(r.expected))
              return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${r.expected}, \xE0m\u1ECD\u0300 a r\xED ${u}`;
            return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${o}, \xE0m\u1ECD\u0300 a r\xED ${u}`;
          }
          case "invalid_value":
            if (r.values.length === 1)
              return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${_u.stringifyPrimitive(r.values[0])}`;
            return `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${_u.joinValues(r.values, "|")}`;
          case "too_big": {
            let o = r.inclusive ? "<=" : "<",
              s = t(r.origin);
            if (s)
              return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${r.origin ?? "iye"} ${s.verb} ${o}${r.maximum} ${s.unit}`;
            return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${o}${r.maximum}`;
          }
          case "too_small": {
            let o = r.inclusive ? ">=" : ">",
              s = t(r.origin);
            if (s)
              return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${r.origin} ${s.verb} ${o}${r.minimum} ${s.unit}`;
            return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${o}${r.minimum}`;
          }
          case "invalid_format": {
            let o = r;
            if (o.format === "starts_with")
              return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${o.prefix}"`;
            if (o.format === "ends_with")
              return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${o.suffix}"`;
            if (o.format === "includes")
              return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${o.includes}"`;
            if (o.format === "regex")
              return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${o.pattern}`;
            return `A\u1E63\xEC\u1E63e: ${n[o.format] ?? r.format}`;
          }
          case "not_multiple_of":
            return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${r.divisor}`;
          case "unrecognized_keys":
            return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${_u.joinValues(r.keys, ", ")}`;
          case "invalid_key":
            return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${r.origin}`;
          case "invalid_union":
            return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
          case "invalid_element":
            return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${r.origin}`;
          default:
            return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
        }
      };
    };
  function Gx() {
    return { localeError: Vx() };
  }
  cb.exports = bn.default;
});

var md = S(function (M) {
  var ae =
    (M && M.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(M, "__esModule", { value: !0 });
  M.zhCN =
    M.vi =
    M.uz =
    M.ur =
    M.uk =
    M.ua =
    M.tr =
    M.th =
    M.ta =
    M.sv =
    M.sl =
    M.ru =
    M.ro =
    M.pt =
    M.pl =
    M.ps =
    M.ota =
    M.no =
    M.nl =
    M.ms =
    M.mk =
    M.lt =
    M.ko =
    M.km =
    M.kh =
    M.ka =
    M.ja =
    M.it =
    M.is =
    M.id =
    M.hy =
    M.hu =
    M.hr =
    M.he =
    M.frCA =
    M.fr =
    M.fi =
    M.fa =
    M.es =
    M.eo =
    M.en =
    M.el =
    M.de =
    M.da =
    M.cs =
    M.ca =
    M.bg =
    M.be =
    M.az =
    M.ar =
      void 0;
  M.yo = M.zhTW = void 0;
  var Wx = m_();
  Object.defineProperty(M, "ar", {
    enumerable: !0,
    get: function () {
      return ae(Wx).default;
    },
  });
  var Jx = h_();
  Object.defineProperty(M, "az", {
    enumerable: !0,
    get: function () {
      return ae(Jx).default;
    },
  });
  var Yx = b_();
  Object.defineProperty(M, "be", {
    enumerable: !0,
    get: function () {
      return ae(Yx).default;
    },
  });
  var Xx = w_();
  Object.defineProperty(M, "bg", {
    enumerable: !0,
    get: function () {
      return ae(Xx).default;
    },
  });
  var Qx = O_();
  Object.defineProperty(M, "ca", {
    enumerable: !0,
    get: function () {
      return ae(Qx).default;
    },
  });
  var eM = P_();
  Object.defineProperty(M, "cs", {
    enumerable: !0,
    get: function () {
      return ae(eM).default;
    },
  });
  var tM = $_();
  Object.defineProperty(M, "da", {
    enumerable: !0,
    get: function () {
      return ae(tM).default;
    },
  });
  var rM = T_();
  Object.defineProperty(M, "de", {
    enumerable: !0,
    get: function () {
      return ae(rM).default;
    },
  });
  var nM = R_();
  Object.defineProperty(M, "el", {
    enumerable: !0,
    get: function () {
      return ae(nM).default;
    },
  });
  var iM = dd();
  Object.defineProperty(M, "en", {
    enumerable: !0,
    get: function () {
      return ae(iM).default;
    },
  });
  var oM = D_();
  Object.defineProperty(M, "eo", {
    enumerable: !0,
    get: function () {
      return ae(oM).default;
    },
  });
  var aM = M_();
  Object.defineProperty(M, "es", {
    enumerable: !0,
    get: function () {
      return ae(aM).default;
    },
  });
  var sM = L_();
  Object.defineProperty(M, "fa", {
    enumerable: !0,
    get: function () {
      return ae(sM).default;
    },
  });
  var uM = N_();
  Object.defineProperty(M, "fi", {
    enumerable: !0,
    get: function () {
      return ae(uM).default;
    },
  });
  var cM = F_();
  Object.defineProperty(M, "fr", {
    enumerable: !0,
    get: function () {
      return ae(cM).default;
    },
  });
  var lM = K_();
  Object.defineProperty(M, "frCA", {
    enumerable: !0,
    get: function () {
      return ae(lM).default;
    },
  });
  var dM = H_();
  Object.defineProperty(M, "he", {
    enumerable: !0,
    get: function () {
      return ae(dM).default;
    },
  });
  var fM = G_();
  Object.defineProperty(M, "hr", {
    enumerable: !0,
    get: function () {
      return ae(fM).default;
    },
  });
  var pM = J_();
  Object.defineProperty(M, "hu", {
    enumerable: !0,
    get: function () {
      return ae(pM).default;
    },
  });
  var mM = Q_();
  Object.defineProperty(M, "hy", {
    enumerable: !0,
    get: function () {
      return ae(mM).default;
    },
  });
  var gM = ty();
  Object.defineProperty(M, "id", {
    enumerable: !0,
    get: function () {
      return ae(gM).default;
    },
  });
  var hM = ny();
  Object.defineProperty(M, "is", {
    enumerable: !0,
    get: function () {
      return ae(hM).default;
    },
  });
  var _M = oy();
  Object.defineProperty(M, "it", {
    enumerable: !0,
    get: function () {
      return ae(_M).default;
    },
  });
  var yM = sy();
  Object.defineProperty(M, "ja", {
    enumerable: !0,
    get: function () {
      return ae(yM).default;
    },
  });
  var bM = cy();
  Object.defineProperty(M, "ka", {
    enumerable: !0,
    get: function () {
      return ae(bM).default;
    },
  });
  var vM = fy();
  Object.defineProperty(M, "kh", {
    enumerable: !0,
    get: function () {
      return ae(vM).default;
    },
  });
  var wM = fd();
  Object.defineProperty(M, "km", {
    enumerable: !0,
    get: function () {
      return ae(wM).default;
    },
  });
  var SM = my();
  Object.defineProperty(M, "ko", {
    enumerable: !0,
    get: function () {
      return ae(SM).default;
    },
  });
  var OM = _y();
  Object.defineProperty(M, "lt", {
    enumerable: !0,
    get: function () {
      return ae(OM).default;
    },
  });
  var kM = by();
  Object.defineProperty(M, "mk", {
    enumerable: !0,
    get: function () {
      return ae(kM).default;
    },
  });
  var PM = wy();
  Object.defineProperty(M, "ms", {
    enumerable: !0,
    get: function () {
      return ae(PM).default;
    },
  });
  var EM = Oy();
  Object.defineProperty(M, "nl", {
    enumerable: !0,
    get: function () {
      return ae(EM).default;
    },
  });
  var $M = Py();
  Object.defineProperty(M, "no", {
    enumerable: !0,
    get: function () {
      return ae($M).default;
    },
  });
  var IM = $y();
  Object.defineProperty(M, "ota", {
    enumerable: !0,
    get: function () {
      return ae(IM).default;
    },
  });
  var TM = Ty();
  Object.defineProperty(M, "ps", {
    enumerable: !0,
    get: function () {
      return ae(TM).default;
    },
  });
  var AM = jy();
  Object.defineProperty(M, "pl", {
    enumerable: !0,
    get: function () {
      return ae(AM).default;
    },
  });
  var RM = Dy();
  Object.defineProperty(M, "pt", {
    enumerable: !0,
    get: function () {
      return ae(RM).default;
    },
  });
  var jM = My();
  Object.defineProperty(M, "ro", {
    enumerable: !0,
    get: function () {
      return ae(jM).default;
    },
  });
  var CM = Uy();
  Object.defineProperty(M, "ru", {
    enumerable: !0,
    get: function () {
      return ae(CM).default;
    },
  });
  var DM = Zy();
  Object.defineProperty(M, "sl", {
    enumerable: !0,
    get: function () {
      return ae(DM).default;
    },
  });
  var xM = By();
  Object.defineProperty(M, "sv", {
    enumerable: !0,
    get: function () {
      return ae(xM).default;
    },
  });
  var MM = qy();
  Object.defineProperty(M, "ta", {
    enumerable: !0,
    get: function () {
      return ae(MM).default;
    },
  });
  var zM = Vy();
  Object.defineProperty(M, "th", {
    enumerable: !0,
    get: function () {
      return ae(zM).default;
    },
  });
  var LM = Wy();
  Object.defineProperty(M, "tr", {
    enumerable: !0,
    get: function () {
      return ae(LM).default;
    },
  });
  var UM = Xy();
  Object.defineProperty(M, "ua", {
    enumerable: !0,
    get: function () {
      return ae(UM).default;
    },
  });
  var NM = pd();
  Object.defineProperty(M, "uk", {
    enumerable: !0,
    get: function () {
      return ae(NM).default;
    },
  });
  var ZM = eb();
  Object.defineProperty(M, "ur", {
    enumerable: !0,
    get: function () {
      return ae(ZM).default;
    },
  });
  var FM = rb();
  Object.defineProperty(M, "uz", {
    enumerable: !0,
    get: function () {
      return ae(FM).default;
    },
  });
  var BM = ib();
  Object.defineProperty(M, "vi", {
    enumerable: !0,
    get: function () {
      return ae(BM).default;
    },
  });
  var KM = ab();
  Object.defineProperty(M, "zhCN", {
    enumerable: !0,
    get: function () {
      return ae(KM).default;
    },
  });
  var qM = ub();
  Object.defineProperty(M, "zhTW", {
    enumerable: !0,
    get: function () {
      return ae(qM).default;
    },
  });
  var HM = lb();
  Object.defineProperty(M, "yo", {
    enumerable: !0,
    get: function () {
      return ae(HM).default;
    },
  });
});

export { Jo, Ul, Xl, Y, ad, dd, ed, gs, ld, md, ms, od, rd, yi };
