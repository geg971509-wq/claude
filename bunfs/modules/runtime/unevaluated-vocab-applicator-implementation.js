// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Se, AR, yve, Le } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { w } from "/$bunfs/root/chunk-4xj01xwv.js";
import { b, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { Ls } from "/$bunfs/root/chunk-fec4384a.js";
import { we, l } from "/$bunfs/root/chunk-ypdw393e.js";
import { H4 } from "/$bunfs/root/chunk-qk7r0t2g.js";
import { to, Z } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Y } from "/$bunfs/root/chunk-s7e0px8j.js";
import { qt } from "/$bunfs/root/chunk-z9ex1x2t.js";
import { qg, Yl, On, I, gw } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { Ipe } from "/$bunfs/root/chunk-6k63g5t6.js";
import { An } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { yh, Ri } from "/$bunfs/root/chunk-rf51999f.js";
import { Ide } from "/$bunfs/root/chunk-qekzccch.js";
import { oyt } from "/$bunfs/root/chunk-2n1hsggr.js";
import { iD, Vin } from "/$bunfs/root/chunk-zze8764r.js";
import { dgt } from "/$bunfs/root/chunk-fctnm902.js";
import { ln } from "/$bunfs/root/chunk-tjmf73ft.js";
import {
  Wc,
  $p,
  _5,
  WYe,
  LEt,
  qYe,
  MEt,
  GCn,
  tzt,
  zCn,
  VCn,
  nzt,
  KCn,
  XCn,
  YCn,
  JCn,
} from "/$bunfs/root/chunk-qs3rdgga.js";
import { bR } from "/$bunfs/root/chunk-werv747a.js";
import { cd } from "/$bunfs/root/chunk-9xb90qzc.js";
import { He } from "/$bunfs/root/chunk-79g5tayq.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
import { j, S } from "/$bunfs/root/chunk-yz031c9r.js";
var q = S(function (J) {
  Object.defineProperty(J, "__esModule", { value: true });
  J.dynamicAnchor = void 0;
  var T = Wc(),
    at = _5(),
    K = MEt(),
    st = tzt(),
    it = { keyword: "$dynamicAnchor", schemaType: "string", code: (e) => G(e, e.schema) };
  function G(e, t) {
    let { gen: r, it: a } = e;
    a.schemaEnv.root.dynamicAnchors[t] = true;
    let i = T._`${at.default.dynamicAnchors}${(0, T.getProperty)(t)}`,
      o = a.errSchemaPath === "#" ? a.validateName : ct(e);
    r.if(T._`!${i}`, () => r.assign(i, o));
  }
  J.dynamicAnchor = G;
  function ct(e) {
    let { schemaEnv: t, schema: r, self: a } = e.it,
      { root: i, baseId: o, localRefs: u, meta: d } = t.root,
      { schemaId: c } = a.opts,
      h = new K.SchemaEnv({ schema: r, schemaId: c, root: i, baseId: o, localRefs: u, meta: d });
    return K.compileSchema.call(a, h), (0, st.getValidate)(e, h);
  }
  J.default = it;
});
var N = S(function (oe) {
  Object.defineProperty(oe, "__esModule", { value: true });
  oe.dynamicRef = void 0;
  var Q = Wc(),
    dt = _5(),
    ee = tzt(),
    lt = { keyword: "$dynamicRef", schemaType: "string", code: (e) => re(e, e.schema) };
  function re(e, t) {
    let { gen: r, keyword: a, it: i } = e;
    if (t[0] !== "#") throw Error(`"${a}" only supports hash fragment reference`);
    let o = t.slice(1);
    if (i.allErrors) u();
    else {
      let c = r.let("valid", false);
      u(c), e.ok(c);
    }
    function u(c) {
      if (i.schemaEnv.root.dynamicAnchors[o]) {
        let h = r.let("_v", Q._`${dt.default.dynamicAnchors}${(0, Q.getProperty)(o)}`);
        r.if(h, d(h, c), d(i.validateName, c));
      } else d(i.validateName, c)();
    }
    function d(c, h) {
      return h
        ? () =>
            r.block(() => {
              (0, ee.callRef)(e, c), r.let(h, true);
            })
        : () => (0, ee.callRef)(e, c);
    }
  }
  oe.dynamicRef = re;
  oe.default = lt;
});
var se = S(function (ae) {
  Object.defineProperty(ae, "__esModule", { value: true });
  var mt = q(),
    ft = $p(),
    ht = {
      keyword: "$recursiveAnchor",
      schemaType: "boolean",
      code(e) {
        if (e.schema) (0, mt.dynamicAnchor)(e, "");
        else (0, ft.checkStrictMode)(e.it, "$recursiveAnchor: false is ignored");
      },
    };
  ae.default = ht;
});
var ce = S(function (ie) {
  Object.defineProperty(ie, "__esModule", { value: true });
  var yt = N(),
    vt = { keyword: "$recursiveRef", schemaType: "string", code: (e) => (0, yt.dynamicRef)(e, e.schema) };
  ie.default = vt;
});
var de = S(function (ue) {
  Object.defineProperty(ue, "__esModule", { value: true });
  var bt = q(),
    $t = N(),
    St = se(),
    Ct = ce(),
    Pt = [bt.default, $t.default, St.default, Ct.default];
  ue.default = Pt;
});
var me = S(function (pe) {
  Object.defineProperty(pe, "__esModule", { value: true });
  var le = nzt(),
    jt = {
      keyword: "dependentRequired",
      type: "object",
      schemaType: "object",
      error: le.error,
      code: (e) => (0, le.validatePropertyDeps)(e),
    };
  pe.default = jt;
});
var he = S(function (fe) {
  Object.defineProperty(fe, "__esModule", { value: true });
  var Mt = nzt(),
    At = {
      keyword: "dependentSchemas",
      type: "object",
      schemaType: "object",
      code: (e) => (0, Mt.validateSchemaDeps)(e),
    };
  fe.default = At;
});
var ye = S(function (ge) {
  Object.defineProperty(ge, "__esModule", { value: true });
  var kt = $p(),
    Ot = {
      keyword: ["maxContains", "minContains"],
      type: "array",
      schemaType: "number",
      code({ keyword: e, parentSchema: t, it: r }) {
        if (t.contains === void 0) (0, kt.checkStrictMode)(r, `"${e}" without "contains" is ignored`);
      },
    };
  ge.default = Ot;
});
var _e = S(function (ve) {
  Object.defineProperty(ve, "__esModule", { value: true });
  var Tt = me(),
    It = he(),
    Nt = ye(),
    Lt = [Tt.default, It.default, Nt.default];
  ve.default = Lt;
});
var Pe = S(function (Ce) {
  Object.defineProperty(Ce, "__esModule", { value: true });
  var C = Wc(),
    $e = $p(),
    Vt = _5(),
    Ht = {
      message: "must NOT have unevaluated properties",
      params: ({ params: e }) => C._`{unevaluatedProperty: ${e.unevaluatedProperty}}`,
    },
    Ft = {
      keyword: "unevaluatedProperties",
      type: "object",
      schemaType: ["boolean", "object"],
      trackErrors: true,
      error: Ht,
      code(e) {
        let { gen: t, schema: r, data: a, errsCount: i, it: o } = e;
        if (!i) throw Error("ajv implementation error");
        let { allErrors: u, props: d } = o;
        if (d instanceof C.Name) t.if(C._`${d} !== true`, () => t.forIn("key", a, (m) => t.if(h(d, m), () => c(m))));
        else if (d !== true) t.forIn("key", a, (m) => (d === void 0 ? c(m) : t.if(f(d, m), () => c(m))));
        (o.props = true), e.ok(C._`${i} === ${Vt.default.errors}`);
        function c(m) {
          if (r === false) {
            if ((e.setParams({ unevaluatedProperty: m }), e.error(), !u)) t.break();
            return;
          }
          if (!(0, $e.alwaysValidSchema)(o, r)) {
            let _ = t.name("valid");
            if ((e.subschema({ keyword: "unevaluatedProperties", dataProp: m, dataPropType: $e.Type.Str }, _), !u))
              t.if((0, C.not)(_), () => t.break());
          }
        }
        function h(m, _) {
          return C._`!${m} || !${m}[${_}]`;
        }
        function f(m, _) {
          let F = [];
          for (let z in m) if (m[z] === true) F.push(C._`${_} !== ${z}`);
          return (0, C.and)(...F);
        }
      },
    };
  Ce.default = Ft;
});
var Ee = S(function (je) {
  Object.defineProperty(je, "__esModule", { value: true });
  var P = Wc(),
    Re = $p(),
    Ut = {
      message: ({ params: { len: e } }) => P.str`must NOT have more than ${e} items`,
      params: ({ params: { len: e } }) => P._`{limit: ${e}}`,
    },
    Wt = {
      keyword: "unevaluatedItems",
      type: "array",
      schemaType: ["boolean", "object"],
      error: Ut,
      code(e) {
        let { gen: t, schema: r, data: a, it: i } = e,
          o = i.items || 0;
        if (o === true) return;
        let u = t.const("len", P._`${a}.length`);
        if (r === false) e.setParams({ len: o }), e.fail(P._`${u} > ${o}`);
        else if (typeof r == "object" && !(0, Re.alwaysValidSchema)(i, r)) {
          let c = t.var("valid", P._`${u} <= ${o}`);
          t.if((0, P.not)(c), () => d(c, o)), e.ok(c);
        }
        i.items = true;
        function d(c, h) {
          t.forRange("i", h, u, (f) => {
            if ((e.subschema({ keyword: "unevaluatedItems", dataProp: f, dataPropType: Re.Type.Num }, c), !i.allErrors))
              t.if((0, P.not)(c), () => t.break());
          });
        }
      },
    };
  je.default = Wt;
});
var Ae = S(function (Me) {
  Object.defineProperty(Me, "__esModule", { value: true });
  var Kt = Pe(),
    Yt = Ee(),
    Gt = [Kt.default, Yt.default];
  Me.default = Gt;
});
var xe = S(function (Oe) {
  Object.defineProperty(Oe, "__esModule", { value: true });
  var Jt = zCn(),
    Xt = VCn(),
    Qt = KCn(),
    er = de(),
    tr = _e(),
    rr = Ae(),
    or = XCn(),
    ke = YCn(),
    nr = [
      er.default,
      Jt.default,
      Xt.default,
      (0, Qt.default)(true),
      or.default,
      ke.metadataVocabulary,
      ke.contentVocabulary,
      tr.default,
      rr.default,
    ];
  Oe.default = nr;
});
var Te = S(function (Do, sr) {
  sr.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/schema",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/core": true,
      "https://json-schema.org/draft/2020-12/vocab/applicator": true,
      "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
      "https://json-schema.org/draft/2020-12/vocab/validation": true,
      "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
      "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
      "https://json-schema.org/draft/2020-12/vocab/content": true,
    },
    $dynamicAnchor: "meta",
    title: "Core and Validation specifications meta-schema",
    allOf: [
      { $ref: "meta/core" },
      { $ref: "meta/applicator" },
      { $ref: "meta/unevaluated" },
      { $ref: "meta/validation" },
      { $ref: "meta/meta-data" },
      { $ref: "meta/format-annotation" },
      { $ref: "meta/content" },
    ],
    type: ["object", "boolean"],
    $comment:
      "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
    properties: {
      definitions: {
        $comment: '"definitions" has been replaced by "$defs".',
        type: "object",
        additionalProperties: { $dynamicRef: "#meta" },
        deprecated: true,
        default: {},
      },
      dependencies: {
        $comment:
          '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
        type: "object",
        additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] },
        deprecated: true,
        default: {},
      },
      $recursiveAnchor: {
        $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
        $ref: "meta/core#/$defs/anchorString",
        deprecated: true,
      },
      $recursiveRef: {
        $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
        $ref: "meta/core#/$defs/uriReferenceString",
        deprecated: true,
      },
    },
  };
});
var qe = S(function (Vo, ir) {
  ir.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/applicator",
    $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/applicator": true },
    $dynamicAnchor: "meta",
    title: "Applicator vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: {
      prefixItems: { $ref: "#/$defs/schemaArray" },
      items: { $dynamicRef: "#meta" },
      contains: { $dynamicRef: "#meta" },
      additionalProperties: { $dynamicRef: "#meta" },
      properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} },
      patternProperties: {
        type: "object",
        additionalProperties: { $dynamicRef: "#meta" },
        propertyNames: { format: "regex" },
        default: {},
      },
      dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} },
      propertyNames: { $dynamicRef: "#meta" },
      if: { $dynamicRef: "#meta" },
      then: { $dynamicRef: "#meta" },
      else: { $dynamicRef: "#meta" },
      allOf: { $ref: "#/$defs/schemaArray" },
      anyOf: { $ref: "#/$defs/schemaArray" },
      oneOf: { $ref: "#/$defs/schemaArray" },
      not: { $dynamicRef: "#meta" },
    },
    $defs: { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } },
  };
});
var Ie = S(function (Ho, cr) {
  cr.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/unevaluated",
    $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/unevaluated": true },
    $dynamicAnchor: "meta",
    title: "Unevaluated applicator vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } },
  };
});
var Ne = S(function (Fo, ur) {
  ur.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/content",
    $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/content": true },
    $dynamicAnchor: "meta",
    title: "Content vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: {
      contentEncoding: { type: "string" },
      contentMediaType: { type: "string" },
      contentSchema: { $dynamicRef: "#meta" },
    },
  };
});
var De = S(function (zo, dr) {
  dr.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/core",
    $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": true },
    $dynamicAnchor: "meta",
    title: "Core vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: {
      $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" },
      $schema: { $ref: "#/$defs/uriString" },
      $ref: { $ref: "#/$defs/uriReferenceString" },
      $anchor: { $ref: "#/$defs/anchorString" },
      $dynamicRef: { $ref: "#/$defs/uriReferenceString" },
      $dynamicAnchor: { $ref: "#/$defs/anchorString" },
      $vocabulary: {
        type: "object",
        propertyNames: { $ref: "#/$defs/uriString" },
        additionalProperties: { type: "boolean" },
      },
      $comment: { type: "string" },
      $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } },
    },
    $defs: {
      anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" },
      uriString: { type: "string", format: "uri" },
      uriReferenceString: { type: "string", format: "uri-reference" },
    },
  };
});
var Ve = S(function (Uo, lr) {
  lr.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/format-annotation",
    $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/format-annotation": true },
    $dynamicAnchor: "meta",
    title: "Format vocabulary meta-schema for annotation results",
    type: ["object", "boolean"],
    properties: { format: { type: "string" } },
  };
});
var Fe = S(function (Wo, pr) {
  pr.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/meta-data",
    $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/meta-data": true },
    $dynamicAnchor: "meta",
    title: "Meta-data vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: {
      title: { type: "string" },
      description: { type: "string" },
      default: true,
      deprecated: { type: "boolean", default: false },
      readOnly: { type: "boolean", default: false },
      writeOnly: { type: "boolean", default: false },
      examples: { type: "array", items: true },
    },
  };
});
var ze = S(function (Bo, fr) {
  fr.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/validation",
    $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/validation": true },
    $dynamicAnchor: "meta",
    title: "Validation vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: {
      type: {
        anyOf: [
          { $ref: "#/$defs/simpleTypes" },
          { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: true },
        ],
      },
      const: true,
      enum: { type: "array", items: true },
      multipleOf: { type: "number", exclusiveMinimum: 0 },
      maximum: { type: "number" },
      exclusiveMaximum: { type: "number" },
      minimum: { type: "number" },
      exclusiveMinimum: { type: "number" },
      maxLength: { $ref: "#/$defs/nonNegativeInteger" },
      minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
      pattern: { type: "string", format: "regex" },
      maxItems: { $ref: "#/$defs/nonNegativeInteger" },
      minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
      uniqueItems: { type: "boolean", default: false },
      maxContains: { $ref: "#/$defs/nonNegativeInteger" },
      minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 },
      maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
      minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
      required: { $ref: "#/$defs/stringArray" },
      dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } },
    },
    $defs: {
      nonNegativeInteger: { type: "integer", minimum: 0 },
      nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 },
      simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] },
      stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] },
    },
  };
});
var We = S(function (Ue) {
  Object.defineProperty(Ue, "__esModule", { value: true });
  var hr = Te(),
    gr = qe(),
    yr = Ie(),
    vr = Ne(),
    _r = De(),
    br = Ve(),
    $r = Fe(),
    Sr = ze(),
    Cr = ["/properties"];
  function Pr(e) {
    return [hr, gr, yr, vr, _r, t(this, br), $r, t(this, Sr)].forEach((r) => this.addMetaSchema(r, void 0, false)), this;
    function t(r, a) {
      return e ? r.$dataMetaSchema(a, Cr) : a;
    }
  }
  Ue.default = Pr;
});
var Be = S(function (v, D) {
  Object.defineProperty(v, "__esModule", { value: true });
  v.MissingRefError =
    v.ValidationError =
    v.CodeGen =
    v.Name =
    v.nil =
    v.stringify =
    v.str =
    v._ =
    v.KeywordCxt =
    v.Ajv2020 =
      void 0;
  var jr = GCn(),
    Er = xe(),
    Mr = JCn(),
    Ar = We(),
    L = "https://json-schema.org/draft/2020-12/schema";
  class E extends jr.default {
    constructor(e = {}) {
      super({ ...e, dynamicRef: true, next: true, unevaluated: true });
    }
    _addVocabularies() {
      if ((super._addVocabularies(), Er.default.forEach((e) => this.addVocabulary(e)), this.opts.discriminator))
        this.addKeyword(Mr.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      let { $data: e, meta: t } = this.opts;
      if (!t) return;
      Ar.default.call(this, e), (this.refs["http://json-schema.org/schema"] = L);
    }
    defaultMeta() {
      return (this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(L) ? L : void 0));
    }
  }
  v.Ajv2020 = E;
  D.exports = v = E;
  D.exports.Ajv2020 = E;
  Object.defineProperty(v, "__esModule", { value: true });
  v.default = E;
  var wr = WYe();
  Object.defineProperty(v, "KeywordCxt", {
    enumerable: true,
    get: function () {
      return wr.KeywordCxt;
    },
  });
  var R = Wc();
  Object.defineProperty(v, "_", {
    enumerable: true,
    get: function () {
      return R._;
    },
  });
  Object.defineProperty(v, "str", {
    enumerable: true,
    get: function () {
      return R.str;
    },
  });
  Object.defineProperty(v, "stringify", {
    enumerable: true,
    get: function () {
      return R.stringify;
    },
  });
  Object.defineProperty(v, "nil", {
    enumerable: true,
    get: function () {
      return R.nil;
    },
  });
  Object.defineProperty(v, "Name", {
    enumerable: true,
    get: function () {
      return R.Name;
    },
  });
  Object.defineProperty(v, "CodeGen", {
    enumerable: true,
    get: function () {
      return R.CodeGen;
    },
  });
  var kr = LEt();
  Object.defineProperty(v, "ValidationError", {
    enumerable: true,
    get: function () {
      return kr.default;
    },
  });
  var Or = qYe();
  Object.defineProperty(v, "MissingRefError", {
    enumerable: true,
    get: function () {
      return Or.default;
    },
  });
});
function Ge(e, t, r) {
  var a = -1,
    i = e.length,
    o = t.length,
    u = {};
  while (++a < i) {
    var d = a < o ? t[a] : void 0;
    r(u, e[a], d);
  }
  return u;
}
var U = Ge;
function Ze(e, t) {
  return U(e || [], t || [], Ipe);
}
var Nst = Ze;
var Je = /^create[_-]?(pull[_-]?request|merge[_-]?request)$|^(pull[_-]?request|merge[_-]?request)[_-]?create$/i;
function Fst(e) {
  if (!Je.test(e)) return;
  s("tengu_git_operation", { operation: w("pr_create") }), yve()?.add(1);
}
var Xe = 0,
  A = 1;
class p_e {
  ws;
  parseMessage;
  started = false;
  opened;
  constructor(e, t) {
    this.ws = e;
    this.parseMessage = t;
    this.opened = new Promise((a, i) => {
      if (this.ws.readyState === A) a();
      else {
        let o = this.ws,
          u = () => {
            o.removeEventListener("open", u), o.removeEventListener("error", d), a();
          },
          d = (c) => {
            o.removeEventListener("open", u),
              o.removeEventListener("error", d),
              Y("error", "mcp_websocket_connect_fail"),
              i(c);
          };
        o.addEventListener("open", u), o.addEventListener("error", d);
      }
    });
    let r = this.ws;
    r.addEventListener("message", this.onBunMessage),
      r.addEventListener("error", this.onBunError),
      r.addEventListener("close", this.onBunClose);
  }
  onclose;
  onerror;
  onmessage;
  onBunMessage = (e) => {
    try {
      let t = typeof e.data === "string" ? e.data : String(e.data),
        r = V(t),
        a = this.parseMessage(r);
      this.onmessage?.(a);
    } catch (t) {
      this.handleError(t);
    }
  };
  onBunError = () => {
    this.handleError(Error("WebSocket error"));
  };
  onBunClose = () => {
    this.handleCloseCleanup();
  };
  handleError(e) {
    Y("error", "mcp_websocket_message_fail"), this.onerror?.(we(e));
  }
  handleCloseCleanup() {
    this.onclose?.();
    let e = this.ws;
    e.removeEventListener("message", this.onBunMessage),
      e.removeEventListener("error", this.onBunError),
      e.removeEventListener("close", this.onBunClose);
  }
  async start() {
    if (this.started) throw Error("Start can only be called once per transport.");
    if ((await this.opened, this.ws.readyState !== A))
      throw (Y("error", "mcp_websocket_start_not_opened"), Error("WebSocket is not open. Cannot start transport."));
    this.started = true;
  }
  async close() {
    if (this.ws.readyState === A || this.ws.readyState === Xe) this.ws.close();
    this.handleCloseCleanup();
  }
  async send(e) {
    if (this.ws.readyState !== A)
      throw (Y("error", "mcp_websocket_send_not_opened"), Error("WebSocket is not open. Cannot send message."));
    let t = b(e);
    try {
      this.ws.send(t);
    } catch (r) {
      throw (this.handleError(r), r);
    }
  }
}
var k = 20;
class W {
  connections = new Map();
  toolLists = new cd({ max: k });
  resourceLists = new cd({ max: k });
  resourceTemplateLists = new cd({ max: k });
  commandLists = new cd({ max: k });
  reauthInFlight = new Map();
  settledCachedDialFailures = new Map();
  refusedCachedRows = new Set();
  liveClients = new Set();
}
function mr() {
  let e = qt();
  if (e.connectionCache === null)
    (e.connectionCache = new W()),
      bR(e.connectionCache.connections),
      bR(e.connectionCache.settledCachedDialFailures),
      bR(e.connectionCache.refusedCachedRows);
  return e.connectionCache;
}
function $st(e, t, r) {
  function a(...o) {
    return B(r(), t(...o), () => e(...o));
  }
  let i = {
    get: (o) => r().get(o),
    set(o, u) {
      return r().set(o, u), i;
    },
    has: (o) => r().has(o),
    delete: (o) => r().delete(o),
    clear: () => r().clear(),
  };
  return Object.assign(a, { cache: i });
}
function _8(e, t, r) {
  function a(...o) {
    return B(r(), t(...o), () => e(...o));
  }
  return Object.assign(a, {
    cache: {
      get: (o) => r().peek(o),
      set: (o, u) => void r().set(o, u),
      has: (o) => r().has(o),
      delete: (o) => r().delete(o),
      clear: () => r().clear(),
      size: () => r().size,
    },
  });
}
function B(e, t, r) {
  let a = e.get(t);
  if (a !== void 0) return a;
  let i = r();
  return e.set(t, i), i;
}
function Qe() {
  return I("tengu_mcp_claudeai_eligibility_gate", false);
}
function Ust(e) {
  return e.type === "claudeai-proxy" && e.eligible === false && Qe();
}
import { readFile as et } from "fs/promises";
async function Cae(e) {
  if (!yh()) {
    let t = Ide();
    if (t.HTTPS_PROXY && URL.parse(e)?.protocol === "https:") {
      let r;
      if (t.SSL_CERT_FILE)
        try {
          r = await et(t.SSL_CERT_FILE, "utf8");
        } catch (a) {
          n(`MCP agent-proxy fallback: failed to read CA bundle: ${a instanceof Error ? a.message : String(a)}`, {
            level: "warn",
          });
        }
      return Ri({ url: e, fallbackProxy: { url: t.HTTPS_PROXY, noProxy: t.NO_PROXY, ca: r } });
    }
  }
  return Ri({ url: e });
}
var tt = ["anyOf", "oneOf", "allOf"],
  O = /^[a-zA-Z0-9_.-]{1,64}$/,
  rt = ["$defs", "definitions", "$schema", "additionalProperties", "description", "title"];
function x(e, t) {
  let r = e.$ref;
  if (typeof r !== "string") return e;
  let a = /^#\/(\$defs|definitions)\/([^/]+)$/.exec(r);
  if (a === null) return e;
  let i = t[a[1]];
  if (!He(i)) return e;
  let o = i[a[2]];
  return He(o) ? o : e;
}
function ot(e) {
  if (!He(e)) return null;
  let t = e.required;
  if (Array.isArray(t) && t.length > 0 && t.every((a) => typeof a === "string")) return t.join(", ");
  let r = e.properties;
  if (He(r)) {
    let a = Object.keys(r);
    if (a.length > 0) return a.join(", ");
  }
  return null;
}
function Bst(e) {
  if (!He(e)) return { outcome: "unchanged" };
  let t = tt.filter((r) => r in e);
  if (t.length === 0) return { outcome: "unchanged" };
  try {
    let r = Object.create(null),
      a = (f) => {
        if (!He(f)) return;
        for (let [m, _] of Object.entries(f)) if (O.test(m) && !(m in r) && He(_)) r[m] = _;
      };
    a(e.properties);
    for (let f of t) {
      let m = e[f];
      if (!Array.isArray(m)) return { outcome: "drop", reason: `input schema has top-level ${f} that is not an array` };
      for (let _ of m) if (He(_)) a(x(_, e).properties);
    }
    let i = [],
      o = (f) => {
        if (!Array.isArray(f)) return;
        for (let m of f) if (typeof m === "string" && m in r && !i.includes(m)) i.push(m);
      };
    o(e.required);
    let u = e.allOf;
    if (Array.isArray(u)) {
      for (let f of u) if (He(f)) o(x(f, e).required);
    }
    let d = t.includes("anyOf") || t.includes("oneOf"),
      c = { type: "object", properties: r, required: i };
    for (let f of rt) if (f in e) c[f] = e[f];
    let h = nt(t, e, d);
    return { outcome: "normalized", schema: c, note: h, combinators: t };
  } catch {
    return { outcome: "drop", reason: `input schema uses top-level ${t.join("/")} and could not be normalized` };
  }
}
function nt(e, t, r) {
  if (!r) return "Input constraint: all listed parameters apply together (flattened from a JSON Schema allOf).";
  let a = e.includes("oneOf") ? "oneOf" : "anyOf",
    i = t[a],
    o = Array.isArray(i) ? te(i.map((c) => ot(He(c) ? x(c, t) : c)).filter((c) => c !== null)) : [],
    u = a === "oneOf" ? "Provide parameters for exactly one of" : "Provide parameters for at least one of";
  if (o.length === 0)
    return `Input constraint: ${u} the documented parameter groups (flattened from a JSON Schema ${a}).`;
  let d = o.map((c) => `(${c})`).join(" or ");
  return `Input constraint: ${u}: ${d}.`;
}
var Ke = j(Be(), 1);
var H = "https://json-schema.org/draft/2020-12/schema",
  M;
function qr() {
  if (M === void 0) {
    try {
      M = new Ke.Ajv2020({ allErrors: false, validateFormats: false }).getSchema(H) ?? null;
    } catch {
      M = null;
    }
    if (M === null)
      n("MCP: draft 2020-12 meta-validator unavailable \u2014 tool schema checks fail open", { level: "warn" }),
        s("tengu_mcp_degraded", { reason: w("schema_validator_unavailable") });
  }
  return M;
}
function Ir() {
  return false;
}
function Nr(e) {
  if (!He(e) || !He(e.properties)) return null;
  for (let t of Object.keys(e.properties)) if (!O.test(t)) return t;
  return null;
}
function jst(e) {
  return Lr(qr(), e, Ir());
}
function Lr(e, t, r) {
  let a = Nr(t);
  if (a !== null)
    return { valid: false, check: "propertyKey", detail: `property key ${b(a.slice(0, 80))} does not match ${O}` };
  if (e === null) return { valid: true };
  let i = t;
  if (He(t)) {
    let o = Object.entries(t);
    if (o.some(([, d]) => d === null)) (o = o.filter(([, d]) => d !== null)), (i = Object.fromEntries(o));
    let u = i.$schema;
    if (u !== void 0)
      if (r) {
        let { $schema: d, ...c } = i;
        i = c;
      } else if (typeof u === "string" && (u === H || u === `${H}#`));
      else return { valid: true };
  }
  try {
    if (e(i)) return { valid: true };
    let o = e.errors?.[0];
    return {
      valid: false,
      check: "meta",
      detail: o ? `schema${o.instancePath} ${o.message ?? "is invalid"}` : "schema is invalid",
    };
  } catch (o) {
    return { valid: false, check: "meta", detail: `validation threw: ${o instanceof Error ? o.message : String(o)}` };
  }
}
function Wst() {
  let e = On();
  if (!e) return;
  return { accountUuid: e.accountUuid, organizationUuid: e.organizationUuid, credentialInstalled: Yl() || Dr() };
}
function Dr() {
  try {
    return qg({ skipRetrievingKeyFromApiKeyHelper: true }).source === "/login managed key";
  } catch {
    return false;
  }
}
import { isAbsolute as Vr } from "path";
function Ye(e) {
  switch (e) {
    case "projectSettings":
    case "localSettings":
      return "repo";
    case "plugin":
    case "additionalDirectory":
      return "thirdParty";
    case "userSettings":
    case "flagSettings":
    case "policySettings":
    case "built-in":
      return "operator";
    default:
      return e;
  }
}
function Hr(e) {
  switch (e) {
    case "project":
    case "local":
      return "repo";
    case "user":
    case "dynamic":
    case "enterprise":
    case "claudeai":
    case "managed":
    case "agent":
      return "operator";
    default:
      return e;
  }
}
function Fr(e) {
  return Hr(e.scope) === "repo" || (e.agentSource !== void 0 && Ye(e.agentSource) === "repo");
}
function zr(e, t) {
  if (t !== void 0) return true;
  if (e.scope === "project") return true;
  return e.agentSource !== void 0 && Ye(e.agentSource) !== "operator";
}
async function Ur(e, t) {
  if (!t.headersHelper) return null;
  let r = typeof t.pluginPath === "string" && Vr(t.pluginPath) ? t.pluginPath : void 0;
  try {
    Z(e, "Executing headersHelper to get dynamic headers");
    let a = t.scope !== void 0 && Fr({ scope: t.scope, agentSource: t.agentSource }),
      i = await dgt({
        command: t.headersHelper,
        isRepoResidentConfig: a,
        repoResidentOrigin: t.declaredIn,
        cwd: r ?? (a ? (t.declaredIn ?? Se()) : t.scope === "dynamic" && t.agentSource === void 0 ? Se() : be()),
        scrubCredentialEnv: zr(t, r),
        env: { CLAUDE_CODE_MCP_SERVER_NAME: e, CLAUDE_CODE_MCP_SERVER_URL: t.url, ...(r && { CLAUDE_PLUGIN_ROOT: r }) },
      });
    if (i.ok)
      return (
        Z(e, `Successfully retrieved ${Object.keys(i.headers).length} headers from headersHelper`),
        y("mcp_headers_helper"),
        i.headers
      );
    if (i.reason === "missing_trust") {
      let o = AR()
        ? "not available to a session rooted at the home directory without a person present (home trust is session-only): run Claude Code interactively here and accept the trust dialog for that session, or work from a project directory you have trusted"
        : `accept the trust dialog here once interactively, or set projects[${Vin(gw())}].hasTrustDialogAccepted in ${Ls()}`;
      if (
        (Z(e, `headersHelper not run: this workspace has no persisted trust; ${o}.`),
        Le() && oyt(`mcp headersHelper ${e}`))
      )
        H4(`MCP server '${An(e)}': headersHelper not run \u2014 this workspace has no persisted trust; ${o}.
`);
      return s("tengu_mcp_headersHelper_missing_trust", {}), g("mcp_headers_helper", "missing_trust"), null;
    }
    throw (p("mcp_headers_helper", i.reason), Error(Wr(e, i.reason)));
  } catch (a) {
    return (
      to(e, `Error getting headers from headersHelper: ${l(a)}`),
      n(`Error getting MCP headers from headersHelper for server '${e}': ${l(a)}`, { level: "error" }),
      null
    );
  }
}
function Wr(e, t) {
  switch (t) {
    case "exec_failed":
      return `headersHelper for MCP server '${e}' did not return a valid value`;
    case "parse_failed":
      return `headersHelper for MCP server '${e}' did not return valid JSON`;
    case "non_object":
      return `headersHelper for MCP server '${e}' must return a JSON object with string key-value pairs`;
    case "non_string_value":
      return `headersHelper for MCP server '${e}' returned a non-string header value`;
  }
}
async function qst(e, t) {
  let r = {},
    a = [];
  for (let [o, u] of Object.entries(t.headers ?? {})) {
    let { expanded: d, missingVars: c } = iD(u);
    (r[o] = d), a.push(...c);
  }
  if (a.length > 0) Z(e, `Header values reference unset environment variables: ${te(a).join(", ")}`);
  let i = (await Ur(e, t)) || {};
  return { ...r, ...i };
}
var Br = "Claude Preview",
  Kr = "Claude Browser",
  Yr = ln(Br),
  Gr = ln(Kr),
  Zr = new Set([Yr, Gr]);
function Gst(e) {
  return Zr.has(ln(e));
}
function zst(e, t) {
  let r = `mcp__${ln(e)}__${t}`;
  return {
    async checkPermissions() {
      return {
        behavior: "ask",
        message: `${e} requires permission.`,
        suggestions: [
          {
            type: "addRules",
            rules: [{ toolName: r, ruleContent: void 0 }],
            behavior: "allow",
            destination: "session",
          },
        ],
        metadata: { command: { name: r, chrome: { hostHandlesOriginConsent: true } } },
      };
    },
  };
}
export { Nst, Fst, p_e, mr, $st, _8, Ust, Cae, Bst, jst, Wst, qst, Gst, zst };
