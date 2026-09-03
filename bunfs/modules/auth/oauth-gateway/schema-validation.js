// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { S } from "/$bunfs/root/modules/chunk-aestrhzj/prelude.js";
import { Y, ad, dd, ed, gs, ld, md, ms, od, rd, yi } from "/$bunfs/root/modules/chunk-aestrhzj/module-002.js";

var ta = S(function (pb) {
  var db;
  Object.defineProperty(pb, "__esModule", { value: true });
  pb.globalRegistry = pb.$ZodRegistry = pb.$input = pb.$output = void 0;
  pb.registry = fb;
  pb.$output = Symbol("ZodOutput");
  pb.$input = Symbol("ZodInput");
  class gd {
    constructor() {
      (this._map = new WeakMap()), (this._idmap = new Map());
    }
    add(e, ...t) {
      let n = t[0];
      if ((this._map.set(e, n), n && typeof n === "object" && "id" in n)) this._idmap.set(n.id, e);
      return this;
    }
    clear() {
      return (this._map = new WeakMap()), (this._idmap = new Map()), this;
    }
    remove(e) {
      let t = this._map.get(e);
      if (t && typeof t === "object" && "id" in t) this._idmap.delete(t.id);
      return this._map.delete(e), this;
    }
    get(e) {
      let t = e._zod.parent;
      if (t) {
        let n = { ...(this.get(t) ?? {}) };
        delete n.id;
        let i = { ...n, ...this._map.get(e) };
        return Object.keys(i).length ? i : void 0;
      }
      return this._map.get(e);
    }
    has(e) {
      return this._map.has(e);
    }
  }
  pb.$ZodRegistry = gd;
  function fb() {
    return new gd();
  }
  (db = globalThis).__zod_globalRegistry ?? (db.__zod_globalRegistry = fb());
  pb.globalRegistry = globalThis.__zod_globalRegistry;
});

var yb = S(function (I) {
  var YM =
      (I && I.__createBinding) ||
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
    XM =
      (I && I.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    vu =
      (I && I.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) YM(t, e, n);
        }
        return XM(t, e), t;
      };
  Object.defineProperty(I, "__esModule", { value: true });
  I.TimePrecision = void 0;
  I._string = QM;
  I._coercedString = ez;
  I._email = tz;
  I._guid = rz;
  I._uuid = nz;
  I._uuidv4 = iz;
  I._uuidv6 = oz;
  I._uuidv7 = az;
  I._url = sz;
  I._emoji = uz;
  I._nanoid = cz;
  I._cuid = lz;
  I._cuid2 = dz;
  I._ulid = fz;
  I._xid = pz;
  I._ksuid = mz;
  I._ipv4 = gz;
  I._ipv6 = hz;
  I._mac = _z;
  I._cidrv4 = yz;
  I._cidrv6 = bz;
  I._base64 = vz;
  I._base64url = wz;
  I._e164 = Sz;
  I._jwt = Oz;
  I._isoDateTime = kz;
  I._isoDate = Pz;
  I._isoTime = Ez;
  I._isoDuration = $z;
  I._number = Iz;
  I._coercedNumber = Tz;
  I._int = Az;
  I._float32 = Rz;
  I._float64 = jz;
  I._int32 = Cz;
  I._uint32 = Dz;
  I._boolean = xz;
  I._coercedBoolean = Mz;
  I._bigint = zz;
  I._coercedBigint = Lz;
  I._int64 = Uz;
  I._uint64 = Nz;
  I._symbol = Zz;
  I._undefined = Fz;
  I._null = Bz;
  I._any = qz;
  I._unknown = Hz;
  I._never = Gz;
  I._void = Wz;
  I._date = Jz;
  I._coercedDate = Yz;
  I._nan = Xz;
  I._lt = gb;
  I._lte = ra;
  I._max = ra;
  I._lte = ra;
  I._max = ra;
  I._gt = hb;
  I._gte = na;
  I._min = na;
  I._gte = na;
  I._min = na;
  I._positive = Qz;
  I._negative = eL;
  I._nonpositive = tL;
  I._nonnegative = rL;
  I._multipleOf = nL;
  I._maxSize = iL;
  I._minSize = oL;
  I._size = aL;
  I._maxLength = sL;
  I._minLength = uL;
  I._length = cL;
  I._regex = lL;
  I._lowercase = dL;
  I._uppercase = fL;
  I._includes = pL;
  I._startsWith = mL;
  I._endsWith = gL;
  I._property = hL;
  I._mime = _L;
  I._overwrite = Wi;
  I._normalize = yL;
  I._trim = bL;
  I._toLowerCase = vL;
  I._toUpperCase = wL;
  I._slugify = SL;
  I._array = OL;
  I._union = kL;
  I._xor = PL;
  I._discriminatedUnion = EL;
  I._intersection = $L;
  I._tuple = IL;
  I._record = TL;
  I._map = AL;
  I._set = RL;
  I._enum = jL;
  I._nativeEnum = CL;
  I._literal = DL;
  I._file = xL;
  I._transform = ML;
  I._optional = zL;
  I._nullable = LL;
  I._default = UL;
  I._nonoptional = NL;
  I._success = ZL;
  I._catch = FL;
  I._pipe = BL;
  I._readonly = KL;
  I._templateLiteral = qL;
  I._lazy = HL;
  I._promise = VL;
  I._custom = GL;
  I._refine = WL;
  I._superRefine = JL;
  I._check = _b;
  I.describe = YL;
  I.meta = XL;
  I._stringbool = QL;
  I._stringFormat = eU;
  var nt = vu(gs()),
    bu = vu(ta()),
    yu = vu(ld()),
    L = vu(Y());
  function QM(e, t) {
    return new e({ type: "string", ...L.normalizeParams(t) });
  }
  function ez(e, t) {
    return new e({ type: "string", coerce: true, ...L.normalizeParams(t) });
  }
  function tz(e, t) {
    return new e({ type: "string", format: "email", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function rz(e, t) {
    return new e({ type: "string", format: "guid", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function nz(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function iz(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v4",
      ...L.normalizeParams(t),
    });
  }
  function oz(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v6",
      ...L.normalizeParams(t),
    });
  }
  function az(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v7",
      ...L.normalizeParams(t),
    });
  }
  function sz(e, t) {
    return new e({ type: "string", format: "url", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function uz(e, t) {
    return new e({ type: "string", format: "emoji", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function cz(e, t) {
    return new e({ type: "string", format: "nanoid", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function lz(e, t) {
    return new e({ type: "string", format: "cuid", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function dz(e, t) {
    return new e({ type: "string", format: "cuid2", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function fz(e, t) {
    return new e({ type: "string", format: "ulid", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function pz(e, t) {
    return new e({ type: "string", format: "xid", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function mz(e, t) {
    return new e({ type: "string", format: "ksuid", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function gz(e, t) {
    return new e({ type: "string", format: "ipv4", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function hz(e, t) {
    return new e({ type: "string", format: "ipv6", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function _z(e, t) {
    return new e({ type: "string", format: "mac", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function yz(e, t) {
    return new e({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function bz(e, t) {
    return new e({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function vz(e, t) {
    return new e({ type: "string", format: "base64", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function wz(e, t) {
    return new e({ type: "string", format: "base64url", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function Sz(e, t) {
    return new e({ type: "string", format: "e164", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  function Oz(e, t) {
    return new e({ type: "string", format: "jwt", check: "string_format", abort: false, ...L.normalizeParams(t) });
  }
  I.TimePrecision = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
  function kz(e, t) {
    return new e({
      type: "string",
      format: "datetime",
      check: "string_format",
      offset: false,
      local: false,
      precision: null,
      ...L.normalizeParams(t),
    });
  }
  function Pz(e, t) {
    return new e({ type: "string", format: "date", check: "string_format", ...L.normalizeParams(t) });
  }
  function Ez(e, t) {
    return new e({ type: "string", format: "time", check: "string_format", precision: null, ...L.normalizeParams(t) });
  }
  function $z(e, t) {
    return new e({ type: "string", format: "duration", check: "string_format", ...L.normalizeParams(t) });
  }
  function Iz(e, t) {
    return new e({ type: "number", checks: [], ...L.normalizeParams(t) });
  }
  function Tz(e, t) {
    return new e({ type: "number", coerce: true, checks: [], ...L.normalizeParams(t) });
  }
  function Az(e, t) {
    return new e({ type: "number", check: "number_format", abort: false, format: "safeint", ...L.normalizeParams(t) });
  }
  function Rz(e, t) {
    return new e({ type: "number", check: "number_format", abort: false, format: "float32", ...L.normalizeParams(t) });
  }
  function jz(e, t) {
    return new e({ type: "number", check: "number_format", abort: false, format: "float64", ...L.normalizeParams(t) });
  }
  function Cz(e, t) {
    return new e({ type: "number", check: "number_format", abort: false, format: "int32", ...L.normalizeParams(t) });
  }
  function Dz(e, t) {
    return new e({ type: "number", check: "number_format", abort: false, format: "uint32", ...L.normalizeParams(t) });
  }
  function xz(e, t) {
    return new e({ type: "boolean", ...L.normalizeParams(t) });
  }
  function Mz(e, t) {
    return new e({ type: "boolean", coerce: true, ...L.normalizeParams(t) });
  }
  function zz(e, t) {
    return new e({ type: "bigint", ...L.normalizeParams(t) });
  }
  function Lz(e, t) {
    return new e({ type: "bigint", coerce: true, ...L.normalizeParams(t) });
  }
  function Uz(e, t) {
    return new e({ type: "bigint", check: "bigint_format", abort: false, format: "int64", ...L.normalizeParams(t) });
  }
  function Nz(e, t) {
    return new e({ type: "bigint", check: "bigint_format", abort: false, format: "uint64", ...L.normalizeParams(t) });
  }
  function Zz(e, t) {
    return new e({ type: "symbol", ...L.normalizeParams(t) });
  }
  function Fz(e, t) {
    return new e({ type: "undefined", ...L.normalizeParams(t) });
  }
  function Bz(e, t) {
    return new e({ type: "null", ...L.normalizeParams(t) });
  }
  function qz(e) {
    return new e({ type: "any" });
  }
  function Hz(e) {
    return new e({ type: "unknown" });
  }
  function Gz(e, t) {
    return new e({ type: "never", ...L.normalizeParams(t) });
  }
  function Wz(e, t) {
    return new e({ type: "void", ...L.normalizeParams(t) });
  }
  function Jz(e, t) {
    return new e({ type: "date", ...L.normalizeParams(t) });
  }
  function Yz(e, t) {
    return new e({ type: "date", coerce: true, ...L.normalizeParams(t) });
  }
  function Xz(e, t) {
    return new e({ type: "nan", ...L.normalizeParams(t) });
  }
  function gb(e, t) {
    return new nt.$ZodCheckLessThan({ check: "less_than", ...L.normalizeParams(t), value: e, inclusive: false });
  }
  function ra(e, t) {
    return new nt.$ZodCheckLessThan({ check: "less_than", ...L.normalizeParams(t), value: e, inclusive: true });
  }
  function hb(e, t) {
    return new nt.$ZodCheckGreaterThan({ check: "greater_than", ...L.normalizeParams(t), value: e, inclusive: false });
  }
  function na(e, t) {
    return new nt.$ZodCheckGreaterThan({ check: "greater_than", ...L.normalizeParams(t), value: e, inclusive: true });
  }
  function Qz(e) {
    return hb(0, e);
  }
  function eL(e) {
    return gb(0, e);
  }
  function tL(e) {
    return ra(0, e);
  }
  function rL(e) {
    return na(0, e);
  }
  function nL(e, t) {
    return new nt.$ZodCheckMultipleOf({ check: "multiple_of", ...L.normalizeParams(t), value: e });
  }
  function iL(e, t) {
    return new nt.$ZodCheckMaxSize({ check: "max_size", ...L.normalizeParams(t), maximum: e });
  }
  function oL(e, t) {
    return new nt.$ZodCheckMinSize({ check: "min_size", ...L.normalizeParams(t), minimum: e });
  }
  function aL(e, t) {
    return new nt.$ZodCheckSizeEquals({ check: "size_equals", ...L.normalizeParams(t), size: e });
  }
  function sL(e, t) {
    return new nt.$ZodCheckMaxLength({ check: "max_length", ...L.normalizeParams(t), maximum: e });
  }
  function uL(e, t) {
    return new nt.$ZodCheckMinLength({ check: "min_length", ...L.normalizeParams(t), minimum: e });
  }
  function cL(e, t) {
    return new nt.$ZodCheckLengthEquals({ check: "length_equals", ...L.normalizeParams(t), length: e });
  }
  function lL(e, t) {
    return new nt.$ZodCheckRegex({ check: "string_format", format: "regex", ...L.normalizeParams(t), pattern: e });
  }
  function dL(e) {
    return new nt.$ZodCheckLowerCase({ check: "string_format", format: "lowercase", ...L.normalizeParams(e) });
  }
  function fL(e) {
    return new nt.$ZodCheckUpperCase({ check: "string_format", format: "uppercase", ...L.normalizeParams(e) });
  }
  function pL(e, t) {
    return new nt.$ZodCheckIncludes({
      check: "string_format",
      format: "includes",
      ...L.normalizeParams(t),
      includes: e,
    });
  }
  function mL(e, t) {
    return new nt.$ZodCheckStartsWith({
      check: "string_format",
      format: "starts_with",
      ...L.normalizeParams(t),
      prefix: e,
    });
  }
  function gL(e, t) {
    return new nt.$ZodCheckEndsWith({
      check: "string_format",
      format: "ends_with",
      ...L.normalizeParams(t),
      suffix: e,
    });
  }
  function hL(e, t, n) {
    return new nt.$ZodCheckProperty({ check: "property", property: e, schema: t, ...L.normalizeParams(n) });
  }
  function _L(e, t) {
    return new nt.$ZodCheckMimeType({ check: "mime_type", mime: e, ...L.normalizeParams(t) });
  }
  function Wi(e) {
    return new nt.$ZodCheckOverwrite({ check: "overwrite", tx: e });
  }
  function yL(e) {
    return Wi((t) => t.normalize(e));
  }
  function bL() {
    return Wi((e) => e.trim());
  }
  function vL() {
    return Wi((e) => e.toLowerCase());
  }
  function wL() {
    return Wi((e) => e.toUpperCase());
  }
  function SL() {
    return Wi((e) => L.slugify(e));
  }
  function OL(e, t, n) {
    return new e({ type: "array", element: t, ...L.normalizeParams(n) });
  }
  function kL(e, t, n) {
    return new e({ type: "union", options: t, ...L.normalizeParams(n) });
  }
  function PL(e, t, n) {
    return new e({ type: "union", options: t, inclusive: false, ...L.normalizeParams(n) });
  }
  function EL(e, t, n, i) {
    return new e({ type: "union", options: n, discriminator: t, ...L.normalizeParams(i) });
  }
  function $L(e, t, n) {
    return new e({ type: "intersection", left: t, right: n });
  }
  function IL(e, t, n, i) {
    let r = n instanceof yu.$ZodType,
      o = r ? i : n;
    return new e({ type: "tuple", items: t, rest: r ? n : null, ...L.normalizeParams(o) });
  }
  function TL(e, t, n, i) {
    return new e({ type: "record", keyType: t, valueType: n, ...L.normalizeParams(i) });
  }
  function AL(e, t, n, i) {
    return new e({ type: "map", keyType: t, valueType: n, ...L.normalizeParams(i) });
  }
  function RL(e, t, n) {
    return new e({ type: "set", valueType: t, ...L.normalizeParams(n) });
  }
  function jL(e, t, n) {
    let i = Array.isArray(t) ? Object.fromEntries(t.map((r) => [r, r])) : t;
    return new e({ type: "enum", entries: i, ...L.normalizeParams(n) });
  }
  function CL(e, t, n) {
    return new e({ type: "enum", entries: t, ...L.normalizeParams(n) });
  }
  function DL(e, t, n) {
    return new e({ type: "literal", values: Array.isArray(t) ? t : [t], ...L.normalizeParams(n) });
  }
  function xL(e, t) {
    return new e({ type: "file", ...L.normalizeParams(t) });
  }
  function ML(e, t) {
    return new e({ type: "transform", transform: t });
  }
  function zL(e, t) {
    return new e({ type: "optional", innerType: t });
  }
  function LL(e, t) {
    return new e({ type: "nullable", innerType: t });
  }
  function UL(e, t, n) {
    return new e({
      type: "default",
      innerType: t,
      get defaultValue() {
        return typeof n === "function" ? n() : L.shallowClone(n);
      },
    });
  }
  function NL(e, t, n) {
    return new e({ type: "nonoptional", innerType: t, ...L.normalizeParams(n) });
  }
  function ZL(e, t) {
    return new e({ type: "success", innerType: t });
  }
  function FL(e, t, n) {
    return new e({ type: "catch", innerType: t, catchValue: typeof n === "function" ? n : () => n });
  }
  function BL(e, t, n) {
    return new e({ type: "pipe", in: t, out: n });
  }
  function KL(e, t) {
    return new e({ type: "readonly", innerType: t });
  }
  function qL(e, t, n) {
    return new e({ type: "template_literal", parts: t, ...L.normalizeParams(n) });
  }
  function HL(e, t) {
    return new e({ type: "lazy", getter: t });
  }
  function VL(e, t) {
    return new e({ type: "promise", innerType: t });
  }
  function GL(e, t, n) {
    let i = L.normalizeParams(n);
    return i.abort ?? (i.abort = true), new e({ type: "custom", check: "custom", fn: t, ...i });
  }
  function WL(e, t, n) {
    return new e({ type: "custom", check: "custom", fn: t, ...L.normalizeParams(n) });
  }
  function JL(e, t) {
    let n = _b(
      (i) => (
        (i.addIssue = (r) => {
          if (typeof r === "string") i.issues.push(L.issue(r, i.value, n._zod.def));
          else {
            let o = r;
            if (o.fatal) o.continue = false;
            o.code ?? (o.code = "custom"),
              o.input ?? (o.input = i.value),
              o.inst ?? (o.inst = n),
              o.continue ?? (o.continue = !n._zod.def.abort),
              i.issues.push(L.issue(o));
          }
        }),
        e(i.value, i)
      ),
      t,
    );
    return n;
  }
  function _b(e, t) {
    let n = new nt.$ZodCheck({ check: "custom", ...L.normalizeParams(t) });
    return (n._zod.check = e), n;
  }
  function YL(e) {
    let t = new nt.$ZodCheck({ check: "describe" });
    return (
      (t._zod.onattach = [
        (n) => {
          let i = bu.globalRegistry.get(n) ?? {};
          bu.globalRegistry.add(n, { ...i, description: e });
        },
      ]),
      (t._zod.check = () => {}),
      t
    );
  }
  function XL(e) {
    let t = new nt.$ZodCheck({ check: "meta" });
    return (
      (t._zod.onattach = [
        (n) => {
          let i = bu.globalRegistry.get(n) ?? {};
          bu.globalRegistry.add(n, { ...i, ...e });
        },
      ]),
      (t._zod.check = () => {}),
      t
    );
  }
  function QL(e, t) {
    let n = L.normalizeParams(t),
      i = n.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
      r = n.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
    if (n.case !== "sensitive")
      (i = i.map((y) => (typeof y === "string" ? y.toLowerCase() : y))),
        (r = r.map((y) => (typeof y === "string" ? y.toLowerCase() : y)));
    let o = new Set(i),
      s = new Set(r),
      u = e.Codec ?? yu.$ZodCodec,
      c = e.Boolean ?? yu.$ZodBoolean,
      f = new (e.String ?? yu.$ZodString)({ type: "string", error: n.error }),
      p = new c({ type: "boolean", error: n.error }),
      h = new u({
        type: "pipe",
        in: f,
        out: p,
        transform: (y, v) => {
          let k = y;
          if (n.case !== "sensitive") k = k.toLowerCase();
          if (o.has(k)) return true;
          else if (s.has(k)) return false;
          else
            return (
              v.issues.push({
                code: "invalid_value",
                expected: "stringbool",
                values: [...o, ...s],
                input: v.value,
                inst: h,
                continue: false,
              }),
              {}
            );
        },
        reverseTransform: (y, v) => {
          if (y === true) return i[0] || "true";
          else return r[0] || "false";
        },
        error: n.error,
      });
    return h;
  }
  function eU(e, t, n, i = {}) {
    let r = L.normalizeParams(i),
      o = {
        ...L.normalizeParams(i),
        check: "string_format",
        type: "string",
        format: t,
        fn: typeof n === "function" ? n : (u) => n.test(u),
        ...r,
      };
    if (n instanceof RegExp) o.pattern = n;
    return new e(o);
  }
});

var ia = S(function (bb) {
  Object.defineProperty(bb, "__esModule", { value: true });
  bb.createStandardJSONSchemaMethod = bb.createToJSONSchemaMethod = void 0;
  bb.initializeContext = hd;
  bb.process = Su;
  bb.extractDefs = _d;
  bb.finalize = yd;
  var tU = ta();
  function hd(e) {
    let t = e?.target ?? "draft-2020-12";
    if (t === "draft-4") t = "draft-04";
    if (t === "draft-7") t = "draft-07";
    return {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? tU.globalRegistry,
      target: t,
      unrepresentable: e?.unrepresentable ?? "throw",
      override: e?.override ?? (() => {}),
      io: e?.io ?? "output",
      counter: 0,
      seen: new Map(),
      cycles: e?.cycles ?? "ref",
      reused: e?.reused ?? "inline",
      external: e?.external ?? void 0,
    };
  }
  function Su(e, t, n = { path: [], schemaPath: [] }) {
    var i;
    let r = e._zod.def,
      o = t.seen.get(e);
    if (o) {
      if ((o.count++, n.schemaPath.includes(e))) o.cycle = n.path;
      return o.schema;
    }
    let s = { schema: {}, count: 1, cycle: void 0, path: n.path };
    t.seen.set(e, s);
    let u = e._zod.toJSONSchema?.();
    if (u) s.schema = u;
    else {
      let f = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
      if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, s.schema, f);
      else {
        let h = s.schema,
          y = t.processors[r.type];
        if (!y) throw Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);
        y(e, t, h, f);
      }
      let p = e._zod.parent;
      if (p) {
        if (!s.ref) s.ref = p;
        Su(p, t, f), (t.seen.get(p).isParent = true);
      }
    }
    let c = t.metadataRegistry.get(e);
    if (c) Object.assign(s.schema, c);
    if (t.io === "input" && Tt(e)) delete s.schema.examples, delete s.schema.default;
    if (t.io === "input" && "_prefault" in s.schema) (i = s.schema).default ?? (i.default = s.schema._prefault);
    return delete s.schema._prefault, t.seen.get(e).schema;
  }
  function _d(e, t) {
    let n = e.seen.get(t);
    if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
    let i = new Map();
    for (let s of e.seen.entries()) {
      let u = e.metadataRegistry.get(s[0])?.id;
      if (u) {
        let c = i.get(u);
        if (c && c !== s[0])
          throw Error(
            `Duplicate schema id "${u}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
          );
        i.set(u, s[0]);
      }
    }
    let r = (s) => {
        let u = e.target === "draft-2020-12" ? "$defs" : "definitions";
        if (e.external) {
          let p = e.external.registry.get(s[0])?.id,
            h = e.external.uri ?? ((v) => v);
          if (p) return { ref: h(p) };
          let y = s[1].defId ?? s[1].schema.id ?? `schema${e.counter++}`;
          return (s[1].defId = y), { defId: y, ref: `${h("__shared")}#/${u}/${y}` };
        }
        if (s[1] === n) return { ref: "#" };
        let d = `${"#"}/${u}/`,
          f = s[1].schema.id ?? `__schema${e.counter++}`;
        return { defId: f, ref: d + f };
      },
      o = (s) => {
        if (s[1].schema.$ref) return;
        let u = s[1],
          { ref: c, defId: d } = r(s);
        if (((u.def = { ...u.schema }), d)) u.defId = d;
        let f = u.schema;
        for (let p in f) delete f[p];
        f.$ref = c;
      };
    if (e.cycles === "throw")
      for (let s of e.seen.entries()) {
        let u = s[1];
        if (u.cycle)
          throw Error(`Cycle detected: #/${u.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (let s of e.seen.entries()) {
      let u = s[1];
      if (t === s[0]) {
        o(s);
        continue;
      }
      if (e.external) {
        let d = e.external.registry.get(s[0])?.id;
        if (t !== s[0] && d) {
          o(s);
          continue;
        }
      }
      if (e.metadataRegistry.get(s[0])?.id) {
        o(s);
        continue;
      }
      if (u.cycle) {
        o(s);
        continue;
      }
      if (u.count > 1) {
        if (e.reused === "ref") {
          o(s);
          continue;
        }
      }
    }
  }
  function yd(e, t) {
    let n = e.seen.get(t);
    if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
    let i = (u) => {
      let c = e.seen.get(u);
      if (c.ref === null) return;
      let d = c.def ?? c.schema,
        f = { ...d },
        p = c.ref;
      if (((c.ref = null), p)) {
        i(p);
        let y = e.seen.get(p),
          v = y.schema;
        if (v.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0"))
          (d.allOf = d.allOf ?? []), d.allOf.push(v);
        else Object.assign(d, v);
        if ((Object.assign(d, f), u._zod.parent === p))
          for (let P in d) {
            if (P === "$ref" || P === "allOf") continue;
            if (!(P in f)) delete d[P];
          }
        if (v.$ref && y.def)
          for (let P in d) {
            if (P === "$ref" || P === "allOf") continue;
            if (P in y.def && JSON.stringify(d[P]) === JSON.stringify(y.def[P])) delete d[P];
          }
      }
      let h = u._zod.parent;
      if (h && h !== p) {
        i(h);
        let y = e.seen.get(h);
        if (y?.schema.$ref) {
          if (((d.$ref = y.schema.$ref), y.def))
            for (let v in d) {
              if (v === "$ref" || v === "allOf") continue;
              if (v in y.def && JSON.stringify(d[v]) === JSON.stringify(y.def[v])) delete d[v];
            }
        }
      }
      e.override({ zodSchema: u, jsonSchema: d, path: c.path ?? [] });
    };
    for (let u of [...e.seen.entries()].reverse()) i(u[0]);
    let r = {};
    if (e.target === "draft-2020-12") r.$schema = "https://json-schema.org/draft/2020-12/schema";
    else if (e.target === "draft-07") r.$schema = "http://json-schema.org/draft-07/schema#";
    else if (e.target === "draft-04") r.$schema = "http://json-schema.org/draft-04/schema#";
    else if (e.target === "openapi-3.0");
    if (e.external?.uri) {
      let u = e.external.registry.get(t)?.id;
      if (!u) throw Error("Schema is missing an `id` property");
      r.$id = e.external.uri(u);
    }
    Object.assign(r, n.def ?? n.schema);
    let o = e.metadataRegistry.get(t)?.id;
    if (o !== void 0 && r.id === o) delete r.id;
    let s = e.external?.defs ?? {};
    for (let u of e.seen.entries()) {
      let c = u[1];
      if (c.def && c.defId) {
        if (c.def.id === c.defId) delete c.def.id;
        s[c.defId] = c.def;
      }
    }
    if (e.external);
    else if (Object.keys(s).length > 0)
      if (e.target === "draft-2020-12") r.$defs = s;
      else r.definitions = s;
    try {
      let u = JSON.parse(JSON.stringify(r));
      return (
        Object.defineProperty(u, "~standard", {
          value: {
            ...t["~standard"],
            jsonSchema: {
              input: bb.createStandardJSONSchemaMethod(t, "input", e.processors),
              output: bb.createStandardJSONSchemaMethod(t, "output", e.processors),
            },
          },
          enumerable: false,
          writable: false,
        }),
        u
      );
    } catch (u) {
      throw Error("Error converting schema to JSON.");
    }
  }
  function Tt(e, t) {
    let n = t ?? { seen: new Set() };
    if (n.seen.has(e)) return false;
    n.seen.add(e);
    let i = e._zod.def;
    if (i.type === "transform") return true;
    if (i.type === "array") return Tt(i.element, n);
    if (i.type === "set") return Tt(i.valueType, n);
    if (i.type === "lazy") return Tt(i.getter(), n);
    if (
      i.type === "promise" ||
      i.type === "optional" ||
      i.type === "nonoptional" ||
      i.type === "nullable" ||
      i.type === "readonly" ||
      i.type === "default" ||
      i.type === "prefault"
    )
      return Tt(i.innerType, n);
    if (i.type === "intersection") return Tt(i.left, n) || Tt(i.right, n);
    if (i.type === "record" || i.type === "map") return Tt(i.keyType, n) || Tt(i.valueType, n);
    if (i.type === "pipe") {
      if (e._zod.traits.has("$ZodCodec")) return true;
      return Tt(i.in, n) || Tt(i.out, n);
    }
    if (i.type === "object") {
      for (let r in i.shape) if (Tt(i.shape[r], n)) return true;
      return false;
    }
    if (i.type === "union") {
      for (let r of i.options) if (Tt(r, n)) return true;
      return false;
    }
    if (i.type === "tuple") {
      for (let r of i.items) if (Tt(r, n)) return true;
      if (i.rest && Tt(i.rest, n)) return true;
      return false;
    }
    return false;
  }
  var rU =
    (e, t = {}) =>
    (n) => {
      let i = hd({ ...n, processors: t });
      return Su(e, i), _d(i, e), yd(i, e);
    };
  bb.createToJSONSchemaMethod = rU;
  var nU =
    (e, t, n = {}) =>
    (i) => {
      let { libraryOptions: r, target: o } = i ?? {},
        s = hd({ ...(r ?? {}), target: o, io: t, processors: n });
      return Su(e, s), _d(s, e), yd(s, e);
    };
  bb.createStandardJSONSchemaMethod = nU;
});

var oa = S(function (vb) {
  Object.defineProperty(vb, "__esModule", { value: true });
  vb.allProcessors =
    vb.lazyProcessor =
    vb.optionalProcessor =
    vb.promiseProcessor =
    vb.readonlyProcessor =
    vb.pipeProcessor =
    vb.catchProcessor =
    vb.prefaultProcessor =
    vb.defaultProcessor =
    vb.nonoptionalProcessor =
    vb.nullableProcessor =
    vb.recordProcessor =
    vb.tupleProcessor =
    vb.intersectionProcessor =
    vb.unionProcessor =
    vb.objectProcessor =
    vb.arrayProcessor =
    vb.setProcessor =
    vb.mapProcessor =
    vb.transformProcessor =
    vb.functionProcessor =
    vb.customProcessor =
    vb.successProcessor =
    vb.fileProcessor =
    vb.templateLiteralProcessor =
    vb.nanProcessor =
    vb.literalProcessor =
    vb.enumProcessor =
    vb.dateProcessor =
    vb.unknownProcessor =
    vb.anyProcessor =
    vb.neverProcessor =
    vb.voidProcessor =
    vb.undefinedProcessor =
    vb.nullProcessor =
    vb.symbolProcessor =
    vb.bigintProcessor =
    vb.booleanProcessor =
    vb.numberProcessor =
    vb.stringProcessor =
      void 0;
  vb.toJSONSchema = JU;
  var Fe = ia(),
    cU = Y(),
    lU = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
    dU = (e, t, n, i) => {
      let r = n;
      r.type = "string";
      let { minimum: o, maximum: s, format: u, patterns: c, contentEncoding: d } = e._zod.bag;
      if (typeof o === "number") r.minLength = o;
      if (typeof s === "number") r.maxLength = s;
      if (u) {
        if (((r.format = lU[u] ?? u), r.format === "")) delete r.format;
        if (u === "time") delete r.format;
      }
      if (d) r.contentEncoding = d;
      if (c && c.size > 0) {
        let f = [...c];
        if (f.length === 1) r.pattern = f[0].source;
        else if (f.length > 1)
          r.allOf = [
            ...f.map((p) => ({
              ...(t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0"
                ? { type: "string" }
                : {}),
              pattern: p.source,
            })),
          ];
      }
    };
  vb.stringProcessor = dU;
  var fU = (e, t, n, i) => {
    let r = n,
      { minimum: o, maximum: s, format: u, multipleOf: c, exclusiveMaximum: d, exclusiveMinimum: f } = e._zod.bag;
    if (typeof u === "string" && u.includes("int")) r.type = "integer";
    else r.type = "number";
    let p = typeof f === "number" && f >= (o ?? Number.NEGATIVE_INFINITY),
      h = typeof d === "number" && d <= (s ?? Number.POSITIVE_INFINITY),
      y = t.target === "draft-04" || t.target === "openapi-3.0";
    if (p)
      if (y) (r.minimum = f), (r.exclusiveMinimum = true);
      else r.exclusiveMinimum = f;
    else if (typeof o === "number") r.minimum = o;
    if (h)
      if (y) (r.maximum = d), (r.exclusiveMaximum = true);
      else r.exclusiveMaximum = d;
    else if (typeof s === "number") r.maximum = s;
    if (typeof c === "number") r.multipleOf = c;
  };
  vb.numberProcessor = fU;
  var pU = (e, t, n, i) => {
    n.type = "boolean";
  };
  vb.booleanProcessor = pU;
  var mU = (e, t, n, i) => {
    if (t.unrepresentable === "throw") throw Error("BigInt cannot be represented in JSON Schema");
  };
  vb.bigintProcessor = mU;
  var gU = (e, t, n, i) => {
    if (t.unrepresentable === "throw") throw Error("Symbols cannot be represented in JSON Schema");
  };
  vb.symbolProcessor = gU;
  var hU = (e, t, n, i) => {
    if (t.target === "openapi-3.0") (n.type = "string"), (n.nullable = true), (n.enum = [null]);
    else n.type = "null";
  };
  vb.nullProcessor = hU;
  var _U = (e, t, n, i) => {
    if (t.unrepresentable === "throw") throw Error("Undefined cannot be represented in JSON Schema");
  };
  vb.undefinedProcessor = _U;
  var yU = (e, t, n, i) => {
    if (t.unrepresentable === "throw") throw Error("Void cannot be represented in JSON Schema");
  };
  vb.voidProcessor = yU;
  var bU = (e, t, n, i) => {
    n.not = {};
  };
  vb.neverProcessor = bU;
  var vU = (e, t, n, i) => {};
  vb.anyProcessor = vU;
  var wU = (e, t, n, i) => {};
  vb.unknownProcessor = wU;
  var SU = (e, t, n, i) => {
    if (t.unrepresentable === "throw") throw Error("Date cannot be represented in JSON Schema");
  };
  vb.dateProcessor = SU;
  var OU = (e, t, n, i) => {
    let r = e._zod.def,
      o = (0, cU.getEnumValues)(r.entries);
    if (o.every((s) => typeof s === "number")) n.type = "number";
    if (o.every((s) => typeof s === "string")) n.type = "string";
    n.enum = o;
  };
  vb.enumProcessor = OU;
  var kU = (e, t, n, i) => {
    let r = e._zod.def,
      o = [];
    for (let s of r.values)
      if (s === void 0) {
        if (t.unrepresentable === "throw") throw Error("Literal `undefined` cannot be represented in JSON Schema");
      } else if (typeof s === "bigint")
        if (t.unrepresentable === "throw") throw Error("BigInt literals cannot be represented in JSON Schema");
        else o.push(Number(s));
      else o.push(s);
    if (o.length === 0);
    else if (o.length === 1) {
      let s = o[0];
      if (((n.type = s === null ? "null" : typeof s), t.target === "draft-04" || t.target === "openapi-3.0"))
        n.enum = [s];
      else n.const = s;
    } else {
      if (o.every((s) => typeof s === "number")) n.type = "number";
      if (o.every((s) => typeof s === "string")) n.type = "string";
      if (o.every((s) => typeof s === "boolean")) n.type = "boolean";
      if (o.every((s) => s === null)) n.type = "null";
      n.enum = o;
    }
  };
  vb.literalProcessor = kU;
  var PU = (e, t, n, i) => {
    if (t.unrepresentable === "throw") throw Error("NaN cannot be represented in JSON Schema");
  };
  vb.nanProcessor = PU;
  var EU = (e, t, n, i) => {
    let r = n,
      o = e._zod.pattern;
    if (!o) throw Error("Pattern not found in template literal");
    (r.type = "string"), (r.pattern = o.source);
  };
  vb.templateLiteralProcessor = EU;
  var $U = (e, t, n, i) => {
    let r = n,
      o = { type: "string", format: "binary", contentEncoding: "binary" },
      { minimum: s, maximum: u, mime: c } = e._zod.bag;
    if (s !== void 0) o.minLength = s;
    if (u !== void 0) o.maxLength = u;
    if (c)
      if (c.length === 1) (o.contentMediaType = c[0]), Object.assign(r, o);
      else Object.assign(r, o), (r.anyOf = c.map((d) => ({ contentMediaType: d })));
    else Object.assign(r, o);
  };
  vb.fileProcessor = $U;
  var IU = (e, t, n, i) => {
    n.type = "boolean";
  };
  vb.successProcessor = IU;
  var TU = (e, t, n, i) => {
    if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
  };
  vb.customProcessor = TU;
  var AU = (e, t, n, i) => {
    if (t.unrepresentable === "throw") throw Error("Function types cannot be represented in JSON Schema");
  };
  vb.functionProcessor = AU;
  var RU = (e, t, n, i) => {
    if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
  };
  vb.transformProcessor = RU;
  var jU = (e, t, n, i) => {
    if (t.unrepresentable === "throw") throw Error("Map cannot be represented in JSON Schema");
  };
  vb.mapProcessor = jU;
  var CU = (e, t, n, i) => {
    if (t.unrepresentable === "throw") throw Error("Set cannot be represented in JSON Schema");
  };
  vb.setProcessor = CU;
  var DU = (e, t, n, i) => {
    let r = n,
      o = e._zod.def,
      { minimum: s, maximum: u } = e._zod.bag;
    if (typeof s === "number") r.minItems = s;
    if (typeof u === "number") r.maxItems = u;
    (r.type = "array"), (r.items = (0, Fe.process)(o.element, t, { ...i, path: [...i.path, "items"] }));
  };
  vb.arrayProcessor = DU;
  var xU = (e, t, n, i) => {
    let r = n,
      o = e._zod.def;
    (r.type = "object"), (r.properties = {});
    let s = o.shape;
    for (let d in s) r.properties[d] = (0, Fe.process)(s[d], t, { ...i, path: [...i.path, "properties", d] });
    let u = new Set(Object.keys(s)),
      c = new Set(
        [...u].filter((d) => {
          let f = o.shape[d]._zod;
          if (t.io === "input") return f.optin === void 0;
          else return f.optout === void 0;
        }),
      );
    if (c.size > 0) r.required = Array.from(c);
    if (o.catchall?._zod.def.type === "never") r.additionalProperties = false;
    else if (!o.catchall) {
      if (t.io === "output") r.additionalProperties = false;
    } else if (o.catchall)
      r.additionalProperties = (0, Fe.process)(o.catchall, t, { ...i, path: [...i.path, "additionalProperties"] });
  };
  vb.objectProcessor = xU;
  var MU = (e, t, n, i) => {
    let r = e._zod.def,
      o = r.inclusive === false,
      s = r.options.map((u, c) => (0, Fe.process)(u, t, { ...i, path: [...i.path, o ? "oneOf" : "anyOf", c] }));
    if (o) n.oneOf = s;
    else n.anyOf = s;
  };
  vb.unionProcessor = MU;
  var zU = (e, t, n, i) => {
    let r = e._zod.def,
      o = (0, Fe.process)(r.left, t, { ...i, path: [...i.path, "allOf", 0] }),
      s = (0, Fe.process)(r.right, t, { ...i, path: [...i.path, "allOf", 1] }),
      u = (d) => "allOf" in d && Object.keys(d).length === 1,
      c = [...(u(o) ? o.allOf : [o]), ...(u(s) ? s.allOf : [s])];
    n.allOf = c;
  };
  vb.intersectionProcessor = zU;
  var LU = (e, t, n, i) => {
    let r = n,
      o = e._zod.def;
    r.type = "array";
    let s = t.target === "draft-2020-12" ? "prefixItems" : "items",
      u = t.target === "draft-2020-12" ? "items" : t.target === "openapi-3.0" ? "items" : "additionalItems",
      c = o.items.map((h, y) => (0, Fe.process)(h, t, { ...i, path: [...i.path, s, y] })),
      d = o.rest
        ? (0, Fe.process)(o.rest, t, {
            ...i,
            path: [...i.path, u, ...(t.target === "openapi-3.0" ? [o.items.length] : [])],
          })
        : null;
    if (t.target === "draft-2020-12") {
      if (((r.prefixItems = c), d)) r.items = d;
    } else if (t.target === "openapi-3.0") {
      if (((r.items = { anyOf: c }), d)) r.items.anyOf.push(d);
      if (((r.minItems = c.length), !d)) r.maxItems = c.length;
    } else if (((r.items = c), d)) r.additionalItems = d;
    let { minimum: f, maximum: p } = e._zod.bag;
    if (typeof f === "number") r.minItems = f;
    if (typeof p === "number") r.maxItems = p;
  };
  vb.tupleProcessor = LU;
  var UU = (e, t, n, i) => {
    let r = n,
      o = e._zod.def;
    r.type = "object";
    let s = o.keyType,
      c = s._zod.bag?.patterns;
    if (o.mode === "loose" && c && c.size > 0) {
      let f = (0, Fe.process)(o.valueType, t, { ...i, path: [...i.path, "patternProperties", "*"] });
      r.patternProperties = {};
      for (let p of c) r.patternProperties[p.source] = f;
    } else {
      if (t.target === "draft-07" || t.target === "draft-2020-12")
        r.propertyNames = (0, Fe.process)(o.keyType, t, { ...i, path: [...i.path, "propertyNames"] });
      r.additionalProperties = (0, Fe.process)(o.valueType, t, { ...i, path: [...i.path, "additionalProperties"] });
    }
    let d = s._zod.values;
    if (d) {
      let f = [...d].filter((p) => typeof p === "string" || typeof p === "number");
      if (f.length > 0) r.required = f;
    }
  };
  vb.recordProcessor = UU;
  var NU = (e, t, n, i) => {
    let r = e._zod.def,
      o = (0, Fe.process)(r.innerType, t, i),
      s = t.seen.get(e);
    if (t.target === "openapi-3.0") (s.ref = r.innerType), (n.nullable = true);
    else n.anyOf = [o, { type: "null" }];
  };
  vb.nullableProcessor = NU;
  var ZU = (e, t, n, i) => {
    let r = e._zod.def;
    (0, Fe.process)(r.innerType, t, i);
    let o = t.seen.get(e);
    o.ref = r.innerType;
  };
  vb.nonoptionalProcessor = ZU;
  var FU = (e, t, n, i) => {
    let r = e._zod.def;
    (0, Fe.process)(r.innerType, t, i);
    let o = t.seen.get(e);
    (o.ref = r.innerType), (n.default = JSON.parse(JSON.stringify(r.defaultValue)));
  };
  vb.defaultProcessor = FU;
  var BU = (e, t, n, i) => {
    let r = e._zod.def;
    (0, Fe.process)(r.innerType, t, i);
    let o = t.seen.get(e);
    if (((o.ref = r.innerType), t.io === "input")) n._prefault = JSON.parse(JSON.stringify(r.defaultValue));
  };
  vb.prefaultProcessor = BU;
  var KU = (e, t, n, i) => {
    let r = e._zod.def;
    (0, Fe.process)(r.innerType, t, i);
    let o = t.seen.get(e);
    o.ref = r.innerType;
    let s;
    try {
      s = r.catchValue(void 0);
    } catch {
      throw Error("Dynamic catch values are not supported in JSON Schema");
    }
    n.default = s;
  };
  vb.catchProcessor = KU;
  var qU = (e, t, n, i) => {
    let r = e._zod.def,
      o = r.in._zod.traits.has("$ZodTransform"),
      s = t.io === "input" ? (o ? r.out : r.in) : r.out;
    (0, Fe.process)(s, t, i);
    let u = t.seen.get(e);
    u.ref = s;
  };
  vb.pipeProcessor = qU;
  var HU = (e, t, n, i) => {
    let r = e._zod.def;
    (0, Fe.process)(r.innerType, t, i);
    let o = t.seen.get(e);
    (o.ref = r.innerType), (n.readOnly = true);
  };
  vb.readonlyProcessor = HU;
  var VU = (e, t, n, i) => {
    let r = e._zod.def;
    (0, Fe.process)(r.innerType, t, i);
    let o = t.seen.get(e);
    o.ref = r.innerType;
  };
  vb.promiseProcessor = VU;
  var GU = (e, t, n, i) => {
    let r = e._zod.def;
    (0, Fe.process)(r.innerType, t, i);
    let o = t.seen.get(e);
    o.ref = r.innerType;
  };
  vb.optionalProcessor = GU;
  var WU = (e, t, n, i) => {
    let r = e._zod.innerType;
    (0, Fe.process)(r, t, i);
    let o = t.seen.get(e);
    o.ref = r;
  };
  vb.lazyProcessor = WU;
  vb.allProcessors = {
    string: vb.stringProcessor,
    number: vb.numberProcessor,
    boolean: vb.booleanProcessor,
    bigint: vb.bigintProcessor,
    symbol: vb.symbolProcessor,
    null: vb.nullProcessor,
    undefined: vb.undefinedProcessor,
    void: vb.voidProcessor,
    never: vb.neverProcessor,
    any: vb.anyProcessor,
    unknown: vb.unknownProcessor,
    date: vb.dateProcessor,
    enum: vb.enumProcessor,
    literal: vb.literalProcessor,
    nan: vb.nanProcessor,
    template_literal: vb.templateLiteralProcessor,
    file: vb.fileProcessor,
    success: vb.successProcessor,
    custom: vb.customProcessor,
    function: vb.functionProcessor,
    transform: vb.transformProcessor,
    map: vb.mapProcessor,
    set: vb.setProcessor,
    array: vb.arrayProcessor,
    object: vb.objectProcessor,
    union: vb.unionProcessor,
    intersection: vb.intersectionProcessor,
    tuple: vb.tupleProcessor,
    record: vb.recordProcessor,
    nullable: vb.nullableProcessor,
    nonoptional: vb.nonoptionalProcessor,
    default: vb.defaultProcessor,
    prefault: vb.prefaultProcessor,
    catch: vb.catchProcessor,
    pipe: vb.pipeProcessor,
    readonly: vb.readonlyProcessor,
    promise: vb.promiseProcessor,
    optional: vb.optionalProcessor,
    lazy: vb.lazyProcessor,
  };
  function JU(e, t) {
    if ("_idmap" in e) {
      let i = e,
        r = (0, Fe.initializeContext)({ ...t, processors: vb.allProcessors }),
        o = {};
      for (let c of i._idmap.entries()) {
        let [d, f] = c;
        (0, Fe.process)(f, r);
      }
      let s = {},
        u = { registry: i, uri: t?.uri, defs: o };
      r.external = u;
      for (let c of i._idmap.entries()) {
        let [d, f] = c;
        (0, Fe.extractDefs)(r, f), (s[d] = (0, Fe.finalize)(r, f));
      }
      if (Object.keys(o).length > 0) {
        let c = r.target === "draft-2020-12" ? "$defs" : "definitions";
        s.__shared = { [c]: o };
      }
      return { schemas: s };
    }
    let n = (0, Fe.initializeContext)({ ...t, processors: vb.allProcessors });
    return (0, Fe.process)(e, n), (0, Fe.extractDefs)(n, e), (0, Fe.finalize)(n, e);
  }
});

var cv = S(function (sv) {
  Object.defineProperty(sv, "__esModule", { value: true });
  sv.JSONSchemaGenerator = void 0;
  var XU = oa(),
    ku = ia();
  class av {
    get metadataRegistry() {
      return this.ctx.metadataRegistry;
    }
    get target() {
      return this.ctx.target;
    }
    get unrepresentable() {
      return this.ctx.unrepresentable;
    }
    get override() {
      return this.ctx.override;
    }
    get io() {
      return this.ctx.io;
    }
    get counter() {
      return this.ctx.counter;
    }
    set counter(e) {
      this.ctx.counter = e;
    }
    get seen() {
      return this.ctx.seen;
    }
    constructor(e) {
      let t = e?.target ?? "draft-2020-12";
      if (t === "draft-4") t = "draft-04";
      if (t === "draft-7") t = "draft-07";
      this.ctx = (0, ku.initializeContext)({
        processors: XU.allProcessors,
        target: t,
        ...(e?.metadata && { metadata: e.metadata }),
        ...(e?.unrepresentable && { unrepresentable: e.unrepresentable }),
        ...(e?.override && { override: e.override }),
        ...(e?.io && { io: e.io }),
      });
    }
    process(e, t = { path: [], schemaPath: [] }) {
      return (0, ku.process)(e, this.ctx, t);
    }
    emit(e, t) {
      if (t) {
        if (t.cycles) this.ctx.cycles = t.cycles;
        if (t.reused) this.ctx.reused = t.reused;
        if (t.external) this.ctx.external = t.external;
      }
      (0, ku.extractDefs)(this.ctx, e);
      let n = (0, ku.finalize)(this.ctx, e),
        { "~standard": i, ...r } = n;
      return r;
    }
  }
  sv.JSONSchemaGenerator = av;
});

var dv = S(function (lv) {
  Object.defineProperty(lv, "__esModule", { value: true });
});

var xt = S(function (xe) {
  var fv =
      (xe && xe.__createBinding) ||
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
    QU =
      (xe && xe.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    vn =
      (xe && xe.__exportStar) ||
      function (e, t) {
        for (var n in e) if (n !== "default" && !Object.prototype.hasOwnProperty.call(t, n)) fv(t, e, n);
      },
    Pu =
      (xe && xe.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) fv(t, e, n);
        }
        return QU(t, e), t;
      };
  Object.defineProperty(xe, "__esModule", { value: true });
  xe.JSONSchema = xe.JSONSchemaGenerator = xe.toJSONSchema = xe.locales = xe.regexes = xe.util = void 0;
  vn(yi(), xe);
  vn(rd(), xe);
  vn(ed(), xe);
  vn(ld(), xe);
  vn(gs(), xe);
  vn(ad(), xe);
  xe.util = Pu(Y());
  xe.regexes = Pu(ms());
  xe.locales = Pu(md());
  vn(ta(), xe);
  vn(od(), xe);
  vn(yb(), xe);
  vn(ia(), xe);
  var e1 = oa();
  Object.defineProperty(xe, "toJSONSchema", {
    enumerable: true,
    get: function () {
      return e1.toJSONSchema;
    },
  });
  var t1 = cv();
  Object.defineProperty(xe, "JSONSchemaGenerator", {
    enumerable: true,
    get: function () {
      return t1.JSONSchemaGenerator;
    },
  });
  xe.JSONSchema = Pu(dv());
});

var Eu = S(function (Le) {
  Object.defineProperty(Le, "__esModule", { value: true });
  Le.slugify =
    Le.toUpperCase =
    Le.toLowerCase =
    Le.trim =
    Le.normalize =
    Le.overwrite =
    Le.mime =
    Le.property =
    Le.endsWith =
    Le.startsWith =
    Le.includes =
    Le.uppercase =
    Le.lowercase =
    Le.regex =
    Le.length =
    Le.minLength =
    Le.maxLength =
    Le.size =
    Le.minSize =
    Le.maxSize =
    Le.multipleOf =
    Le.nonnegative =
    Le.nonpositive =
    Le.negative =
    Le.positive =
    Le.gte =
    Le.gt =
    Le.lte =
    Le.lt =
      void 0;
  var Be = xt();
  Object.defineProperty(Le, "lt", {
    enumerable: true,
    get: function () {
      return Be._lt;
    },
  });
  Object.defineProperty(Le, "lte", {
    enumerable: true,
    get: function () {
      return Be._lte;
    },
  });
  Object.defineProperty(Le, "gt", {
    enumerable: true,
    get: function () {
      return Be._gt;
    },
  });
  Object.defineProperty(Le, "gte", {
    enumerable: true,
    get: function () {
      return Be._gte;
    },
  });
  Object.defineProperty(Le, "positive", {
    enumerable: true,
    get: function () {
      return Be._positive;
    },
  });
  Object.defineProperty(Le, "negative", {
    enumerable: true,
    get: function () {
      return Be._negative;
    },
  });
  Object.defineProperty(Le, "nonpositive", {
    enumerable: true,
    get: function () {
      return Be._nonpositive;
    },
  });
  Object.defineProperty(Le, "nonnegative", {
    enumerable: true,
    get: function () {
      return Be._nonnegative;
    },
  });
  Object.defineProperty(Le, "multipleOf", {
    enumerable: true,
    get: function () {
      return Be._multipleOf;
    },
  });
  Object.defineProperty(Le, "maxSize", {
    enumerable: true,
    get: function () {
      return Be._maxSize;
    },
  });
  Object.defineProperty(Le, "minSize", {
    enumerable: true,
    get: function () {
      return Be._minSize;
    },
  });
  Object.defineProperty(Le, "size", {
    enumerable: true,
    get: function () {
      return Be._size;
    },
  });
  Object.defineProperty(Le, "maxLength", {
    enumerable: true,
    get: function () {
      return Be._maxLength;
    },
  });
  Object.defineProperty(Le, "minLength", {
    enumerable: true,
    get: function () {
      return Be._minLength;
    },
  });
  Object.defineProperty(Le, "length", {
    enumerable: true,
    get: function () {
      return Be._length;
    },
  });
  Object.defineProperty(Le, "regex", {
    enumerable: true,
    get: function () {
      return Be._regex;
    },
  });
  Object.defineProperty(Le, "lowercase", {
    enumerable: true,
    get: function () {
      return Be._lowercase;
    },
  });
  Object.defineProperty(Le, "uppercase", {
    enumerable: true,
    get: function () {
      return Be._uppercase;
    },
  });
  Object.defineProperty(Le, "includes", {
    enumerable: true,
    get: function () {
      return Be._includes;
    },
  });
  Object.defineProperty(Le, "startsWith", {
    enumerable: true,
    get: function () {
      return Be._startsWith;
    },
  });
  Object.defineProperty(Le, "endsWith", {
    enumerable: true,
    get: function () {
      return Be._endsWith;
    },
  });
  Object.defineProperty(Le, "property", {
    enumerable: true,
    get: function () {
      return Be._property;
    },
  });
  Object.defineProperty(Le, "mime", {
    enumerable: true,
    get: function () {
      return Be._mime;
    },
  });
  Object.defineProperty(Le, "overwrite", {
    enumerable: true,
    get: function () {
      return Be._overwrite;
    },
  });
  Object.defineProperty(Le, "normalize", {
    enumerable: true,
    get: function () {
      return Be._normalize;
    },
  });
  Object.defineProperty(Le, "trim", {
    enumerable: true,
    get: function () {
      return Be._trim;
    },
  });
  Object.defineProperty(Le, "toLowerCase", {
    enumerable: true,
    get: function () {
      return Be._toLowerCase;
    },
  });
  Object.defineProperty(Le, "toUpperCase", {
    enumerable: true,
    get: function () {
      return Be._toUpperCase;
    },
  });
  Object.defineProperty(Le, "slugify", {
    enumerable: true,
    get: function () {
      return Be._slugify;
    },
  });
});

var aa = S(function (tt) {
  var n1 =
      (tt && tt.__createBinding) ||
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
    i1 =
      (tt && tt.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    pv =
      (tt && tt.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) n1(t, e, n);
        }
        return i1(t, e), t;
      };
  Object.defineProperty(tt, "__esModule", { value: true });
  tt.ZodISODuration = tt.ZodISOTime = tt.ZodISODate = tt.ZodISODateTime = void 0;
  tt.datetime = o1;
  tt.date = a1;
  tt.time = s1;
  tt.duration = u1;
  var tr = pv(xt()),
    $u = pv(sa());
  tt.ZodISODateTime = tr.$constructor("ZodISODateTime", (e, t) => {
    tr.$ZodISODateTime.init(e, t), $u.ZodStringFormat.init(e, t);
  });
  function o1(e) {
    return tr._isoDateTime(tt.ZodISODateTime, e);
  }
  tt.ZodISODate = tr.$constructor("ZodISODate", (e, t) => {
    tr.$ZodISODate.init(e, t), $u.ZodStringFormat.init(e, t);
  });
  function a1(e) {
    return tr._isoDate(tt.ZodISODate, e);
  }
  tt.ZodISOTime = tr.$constructor("ZodISOTime", (e, t) => {
    tr.$ZodISOTime.init(e, t), $u.ZodStringFormat.init(e, t);
  });
  function s1(e) {
    return tr._isoTime(tt.ZodISOTime, e);
  }
  tt.ZodISODuration = tr.$constructor("ZodISODuration", (e, t) => {
    tr.$ZodISODuration.init(e, t), $u.ZodStringFormat.init(e, t);
  });
  function u1(e) {
    return tr._isoDuration(tt.ZodISODuration, e);
  }
});

var bd = S(function (rr) {
  var c1 =
      (rr && rr.__createBinding) ||
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
    l1 =
      (rr && rr.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    gv =
      (rr && rr.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) c1(t, e, n);
        }
        return l1(t, e), t;
      };
  Object.defineProperty(rr, "__esModule", { value: true });
  rr.ZodRealError = rr.ZodError = void 0;
  var Iu = gv(xt()),
    d1 = xt(),
    mv = gv(Y()),
    hv = (e, t) => {
      d1.$ZodError.init(e, t),
        (e.name = "ZodError"),
        Object.defineProperties(e, {
          format: { value: (n) => Iu.formatError(e, n) },
          flatten: { value: (n) => Iu.flattenError(e, n) },
          addIssue: {
            value: (n) => {
              e.issues.push(n), (e.message = JSON.stringify(e.issues, mv.jsonStringifyReplacer, 2));
            },
          },
          addIssues: {
            value: (n) => {
              e.issues.push(...n), (e.message = JSON.stringify(e.issues, mv.jsonStringifyReplacer, 2));
            },
          },
          isEmpty: {
            get() {
              return e.issues.length === 0;
            },
          },
        });
    };
  rr.ZodError = Iu.$constructor("ZodError", hv);
  rr.ZodRealError = Iu.$constructor("ZodError", hv, { Parent: Error });
});

var vd = S(function (Me) {
  var f1 =
      (Me && Me.__createBinding) ||
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
    p1 =
      (Me && Me.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    m1 =
      (Me && Me.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) f1(t, e, n);
        }
        return p1(t, e), t;
      };
  Object.defineProperty(Me, "__esModule", { value: true });
  Me.safeDecodeAsync =
    Me.safeEncodeAsync =
    Me.safeDecode =
    Me.safeEncode =
    Me.decodeAsync =
    Me.encodeAsync =
    Me.decode =
    Me.encode =
    Me.safeParseAsync =
    Me.safeParse =
    Me.parseAsync =
    Me.parse =
      void 0;
  var nr = m1(xt()),
    ir = bd();
  Me.parse = nr._parse(ir.ZodRealError);
  Me.parseAsync = nr._parseAsync(ir.ZodRealError);
  Me.safeParse = nr._safeParse(ir.ZodRealError);
  Me.safeParseAsync = nr._safeParseAsync(ir.ZodRealError);
  Me.encode = nr._encode(ir.ZodRealError);
  Me.decode = nr._decode(ir.ZodRealError);
  Me.encodeAsync = nr._encodeAsync(ir.ZodRealError);
  Me.decodeAsync = nr._decodeAsync(ir.ZodRealError);
  Me.safeEncode = nr._safeEncode(ir.ZodRealError);
  Me.safeDecode = nr._safeDecode(ir.ZodRealError);
  Me.safeEncodeAsync = nr._safeEncodeAsync(ir.ZodRealError);
  Me.safeDecodeAsync = nr._safeDecodeAsync(ir.ZodRealError);
});

var sa = S(function (g) {
  var g1 =
      (g && g.__createBinding) ||
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
    h1 =
      (g && g.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    ua =
      (g && g.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) g1(t, e, n);
        }
        return h1(t, e), t;
      };
  Object.defineProperty(g, "__esModule", { value: true });
  g.ZodLiteral =
    g.ZodEnum =
    g.ZodSet =
    g.ZodMap =
    g.ZodRecord =
    g.ZodTuple =
    g.ZodIntersection =
    g.ZodDiscriminatedUnion =
    g.ZodXor =
    g.ZodUnion =
    g.ZodObject =
    g.ZodArray =
    g.ZodDate =
    g.ZodVoid =
    g.ZodNever =
    g.ZodUnknown =
    g.ZodAny =
    g.ZodNull =
    g.ZodUndefined =
    g.ZodSymbol =
    g.ZodBigIntFormat =
    g.ZodBigInt =
    g.ZodBoolean =
    g.ZodNumberFormat =
    g.ZodNumber =
    g.ZodCustomStringFormat =
    g.ZodJWT =
    g.ZodE164 =
    g.ZodBase64URL =
    g.ZodBase64 =
    g.ZodCIDRv6 =
    g.ZodCIDRv4 =
    g.ZodIPv6 =
    g.ZodMAC =
    g.ZodIPv4 =
    g.ZodKSUID =
    g.ZodXID =
    g.ZodULID =
    g.ZodCUID2 =
    g.ZodCUID =
    g.ZodNanoID =
    g.ZodEmoji =
    g.ZodURL =
    g.ZodUUID =
    g.ZodGUID =
    g.ZodEmail =
    g.ZodStringFormat =
    g.ZodString =
    g._ZodString =
    g.ZodType =
      void 0;
  g.stringbool =
    g.meta =
    g.describe =
    g.ZodCustom =
    g.ZodFunction =
    g.ZodPromise =
    g.ZodLazy =
    g.ZodTemplateLiteral =
    g.ZodReadonly =
    g.ZodPreprocess =
    g.ZodCodec =
    g.ZodPipe =
    g.ZodNaN =
    g.ZodCatch =
    g.ZodSuccess =
    g.ZodNonOptional =
    g.ZodPrefault =
    g.ZodDefault =
    g.ZodNullable =
    g.ZodExactOptional =
    g.ZodOptional =
    g.ZodTransform =
    g.ZodFile =
      void 0;
  g.string = Au;
  g.email = _1;
  g.guid = y1;
  g.uuid = b1;
  g.uuidv4 = v1;
  g.uuidv6 = w1;
  g.uuidv7 = S1;
  g.url = O1;
  g.httpUrl = k1;
  g.emoji = P1;
  g.nanoid = E1;
  g.cuid = $1;
  g.cuid2 = I1;
  g.ulid = T1;
  g.xid = A1;
  g.ksuid = R1;
  g.ipv4 = j1;
  g.mac = C1;
  g.ipv6 = D1;
  g.cidrv4 = x1;
  g.cidrv6 = M1;
  g.base64 = z1;
  g.base64url = L1;
  g.e164 = U1;
  g.jwt = N1;
  g.stringFormat = Z1;
  g.hostname = F1;
  g.hex = B1;
  g.hash = K1;
  g.number = yv;
  g.int = Sd;
  g.float32 = q1;
  g.float64 = H1;
  g.int32 = V1;
  g.uint32 = G1;
  g.boolean = bv;
  g.bigint = W1;
  g.int64 = J1;
  g.uint64 = Y1;
  g.symbol = X1;
  g.undefined = Q1;
  g.null = vv;
  g.any = eN;
  g.unknown = Ji;
  g.never = kd;
  g.void = tN;
  g.date = rN;
  g.array = Cu;
  g.keyof = nN;
  g.object = iN;
  g.strictObject = oN;
  g.looseObject = aN;
  g.union = Pd;
  g.xor = sN;
  g.discriminatedUnion = uN;
  g.intersection = wv;
  g.tuple = Sv;
  g.record = Ov;
  g.partialRecord = cN;
  g.looseRecord = lN;
  g.map = dN;
  g.set = fN;
  g.enum = Ed;
  g.nativeEnum = pN;
  g.literal = mN;
  g.file = gN;
  g.transform = $d;
  g.optional = Ru;
  g.exactOptional = kv;
  g.nullable = ju;
  g.nullish = hN;
  g._default = Pv;
  g.prefault = Ev;
  g.nonoptional = $v;
  g.success = _N;
  g.catch = Iv;
  g.nan = yN;
  g.pipe = Od;
  g.codec = bN;
  g.invertCodec = vN;
  g.readonly = Tv;
  g.templateLiteral = wN;
  g.lazy = Av;
  g.promise = SN;
  g._function = Du;
  g.function = Du;
  g._function = Du;
  g.function = Du;
  g.check = ON;
  g.custom = kN;
  g.refine = Rv;
  g.superRefine = jv;
  g.instanceof = PN;
  g.json = $N;
  g.preprocess = IN;
  var w = ua(xt()),
    Pe = xt(),
    ye = ua(oa()),
    wd = ia(),
    de = ua(Eu()),
    Tu = ua(aa()),
    or = ua(vd()),
    _v = new WeakMap();
  function ca(e, t, n) {
    let i = Object.getPrototypeOf(e),
      r = _v.get(i);
    if (!r) (r = new Set()), _v.set(i, r);
    if (r.has(t)) return;
    r.add(t);
    for (let o in n) {
      let s = n[o];
      Object.defineProperty(i, o, {
        configurable: true,
        enumerable: false,
        get() {
          let u = s.bind(this);
          return Object.defineProperty(this, o, { configurable: true, writable: true, enumerable: true, value: u }), u;
        },
        set(u) {
          Object.defineProperty(this, o, { configurable: true, writable: true, enumerable: true, value: u });
        },
      });
    }
  }
  g.ZodType = w.$constructor(
    "ZodType",
    (e, t) => (
      w.$ZodType.init(e, t),
      Object.assign(e["~standard"], {
        jsonSchema: {
          input: (0, wd.createStandardJSONSchemaMethod)(e, "input"),
          output: (0, wd.createStandardJSONSchemaMethod)(e, "output"),
        },
      }),
      (e.toJSONSchema = (0, wd.createToJSONSchemaMethod)(e, {})),
      (e.def = t),
      (e.type = t.type),
      Object.defineProperty(e, "_def", { value: t }),
      (e.parse = (n, i) => or.parse(e, n, i, { callee: e.parse })),
      (e.safeParse = (n, i) => or.safeParse(e, n, i)),
      (e.parseAsync = async (n, i) => or.parseAsync(e, n, i, { callee: e.parseAsync })),
      (e.safeParseAsync = async (n, i) => or.safeParseAsync(e, n, i)),
      (e.spa = e.safeParseAsync),
      (e.encode = (n, i) => or.encode(e, n, i)),
      (e.decode = (n, i) => or.decode(e, n, i)),
      (e.encodeAsync = async (n, i) => or.encodeAsync(e, n, i)),
      (e.decodeAsync = async (n, i) => or.decodeAsync(e, n, i)),
      (e.safeEncode = (n, i) => or.safeEncode(e, n, i)),
      (e.safeDecode = (n, i) => or.safeDecode(e, n, i)),
      (e.safeEncodeAsync = async (n, i) => or.safeEncodeAsync(e, n, i)),
      (e.safeDecodeAsync = async (n, i) => or.safeDecodeAsync(e, n, i)),
      ca(e, "ZodType", {
        check(...n) {
          let i = this.def;
          return this.clone(
            Pe.util.mergeDefs(i, {
              checks: [
                ...(i.checks ?? []),
                ...n.map((r) =>
                  typeof r === "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r,
                ),
              ],
            }),
            { parent: true },
          );
        },
        with(...n) {
          return this.check(...n);
        },
        clone(n, i) {
          return w.clone(this, n, i);
        },
        brand() {
          return this;
        },
        register(n, i) {
          return n.add(this, i), this;
        },
        refine(n, i) {
          return this.check(Rv(n, i));
        },
        superRefine(n, i) {
          return this.check(jv(n, i));
        },
        overwrite(n) {
          return this.check(de.overwrite(n));
        },
        optional() {
          return Ru(this);
        },
        exactOptional() {
          return kv(this);
        },
        nullable() {
          return ju(this);
        },
        nullish() {
          return Ru(ju(this));
        },
        nonoptional(n) {
          return $v(this, n);
        },
        array() {
          return Cu(this);
        },
        or(n) {
          return Pd([this, n]);
        },
        and(n) {
          return wv(this, n);
        },
        transform(n) {
          return Od(this, $d(n));
        },
        default(n) {
          return Pv(this, n);
        },
        prefault(n) {
          return Ev(this, n);
        },
        catch(n) {
          return Iv(this, n);
        },
        pipe(n) {
          return Od(this, n);
        },
        readonly() {
          return Tv(this);
        },
        describe(n) {
          let i = this.clone();
          return w.globalRegistry.add(i, { description: n }), i;
        },
        meta(...n) {
          if (n.length === 0) return w.globalRegistry.get(this);
          let i = this.clone();
          return w.globalRegistry.add(i, n[0]), i;
        },
        isOptional() {
          return this.safeParse(void 0).success;
        },
        isNullable() {
          return this.safeParse(null).success;
        },
        apply(n) {
          return n(this);
        },
      }),
      Object.defineProperty(e, "description", {
        get() {
          return w.globalRegistry.get(e)?.description;
        },
        configurable: true,
      }),
      e
    ),
  );
  g._ZodString = w.$constructor("_ZodString", (e, t) => {
    w.$ZodString.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (i, r, o) => ye.stringProcessor(e, i, r, o));
    let n = e._zod.bag;
    (e.format = n.format ?? null),
      (e.minLength = n.minimum ?? null),
      (e.maxLength = n.maximum ?? null),
      ca(e, "_ZodString", {
        regex(...i) {
          return this.check(de.regex(...i));
        },
        includes(...i) {
          return this.check(de.includes(...i));
        },
        startsWith(...i) {
          return this.check(de.startsWith(...i));
        },
        endsWith(...i) {
          return this.check(de.endsWith(...i));
        },
        min(...i) {
          return this.check(de.minLength(...i));
        },
        max(...i) {
          return this.check(de.maxLength(...i));
        },
        length(...i) {
          return this.check(de.length(...i));
        },
        nonempty(...i) {
          return this.check(de.minLength(1, ...i));
        },
        lowercase(i) {
          return this.check(de.lowercase(i));
        },
        uppercase(i) {
          return this.check(de.uppercase(i));
        },
        trim() {
          return this.check(de.trim());
        },
        normalize(...i) {
          return this.check(de.normalize(...i));
        },
        toLowerCase() {
          return this.check(de.toLowerCase());
        },
        toUpperCase() {
          return this.check(de.toUpperCase());
        },
        slugify() {
          return this.check(de.slugify());
        },
      });
  });
  g.ZodString = w.$constructor("ZodString", (e, t) => {
    w.$ZodString.init(e, t),
      g._ZodString.init(e, t),
      (e.email = (n) => e.check(w._email(g.ZodEmail, n))),
      (e.url = (n) => e.check(w._url(g.ZodURL, n))),
      (e.jwt = (n) => e.check(w._jwt(g.ZodJWT, n))),
      (e.emoji = (n) => e.check(w._emoji(g.ZodEmoji, n))),
      (e.guid = (n) => e.check(w._guid(g.ZodGUID, n))),
      (e.uuid = (n) => e.check(w._uuid(g.ZodUUID, n))),
      (e.uuidv4 = (n) => e.check(w._uuidv4(g.ZodUUID, n))),
      (e.uuidv6 = (n) => e.check(w._uuidv6(g.ZodUUID, n))),
      (e.uuidv7 = (n) => e.check(w._uuidv7(g.ZodUUID, n))),
      (e.nanoid = (n) => e.check(w._nanoid(g.ZodNanoID, n))),
      (e.guid = (n) => e.check(w._guid(g.ZodGUID, n))),
      (e.cuid = (n) => e.check(w._cuid(g.ZodCUID, n))),
      (e.cuid2 = (n) => e.check(w._cuid2(g.ZodCUID2, n))),
      (e.ulid = (n) => e.check(w._ulid(g.ZodULID, n))),
      (e.base64 = (n) => e.check(w._base64(g.ZodBase64, n))),
      (e.base64url = (n) => e.check(w._base64url(g.ZodBase64URL, n))),
      (e.xid = (n) => e.check(w._xid(g.ZodXID, n))),
      (e.ksuid = (n) => e.check(w._ksuid(g.ZodKSUID, n))),
      (e.ipv4 = (n) => e.check(w._ipv4(g.ZodIPv4, n))),
      (e.ipv6 = (n) => e.check(w._ipv6(g.ZodIPv6, n))),
      (e.cidrv4 = (n) => e.check(w._cidrv4(g.ZodCIDRv4, n))),
      (e.cidrv6 = (n) => e.check(w._cidrv6(g.ZodCIDRv6, n))),
      (e.e164 = (n) => e.check(w._e164(g.ZodE164, n))),
      (e.datetime = (n) => e.check(Tu.datetime(n))),
      (e.date = (n) => e.check(Tu.date(n))),
      (e.time = (n) => e.check(Tu.time(n))),
      (e.duration = (n) => e.check(Tu.duration(n)));
  });
  function Au(e) {
    return w._string(g.ZodString, e);
  }
  g.ZodStringFormat = w.$constructor("ZodStringFormat", (e, t) => {
    w.$ZodStringFormat.init(e, t), g._ZodString.init(e, t);
  });
  g.ZodEmail = w.$constructor("ZodEmail", (e, t) => {
    w.$ZodEmail.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function _1(e) {
    return w._email(g.ZodEmail, e);
  }
  g.ZodGUID = w.$constructor("ZodGUID", (e, t) => {
    w.$ZodGUID.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function y1(e) {
    return w._guid(g.ZodGUID, e);
  }
  g.ZodUUID = w.$constructor("ZodUUID", (e, t) => {
    w.$ZodUUID.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function b1(e) {
    return w._uuid(g.ZodUUID, e);
  }
  function v1(e) {
    return w._uuidv4(g.ZodUUID, e);
  }
  function w1(e) {
    return w._uuidv6(g.ZodUUID, e);
  }
  function S1(e) {
    return w._uuidv7(g.ZodUUID, e);
  }
  g.ZodURL = w.$constructor("ZodURL", (e, t) => {
    w.$ZodURL.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function O1(e) {
    return w._url(g.ZodURL, e);
  }
  function k1(e) {
    return w._url(g.ZodURL, {
      protocol: w.regexes.httpProtocol,
      hostname: w.regexes.domain,
      ...Pe.util.normalizeParams(e),
    });
  }
  g.ZodEmoji = w.$constructor("ZodEmoji", (e, t) => {
    w.$ZodEmoji.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function P1(e) {
    return w._emoji(g.ZodEmoji, e);
  }
  g.ZodNanoID = w.$constructor("ZodNanoID", (e, t) => {
    w.$ZodNanoID.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function E1(e) {
    return w._nanoid(g.ZodNanoID, e);
  }
  g.ZodCUID = w.$constructor("ZodCUID", (e, t) => {
    w.$ZodCUID.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function $1(e) {
    return w._cuid(g.ZodCUID, e);
  }
  g.ZodCUID2 = w.$constructor("ZodCUID2", (e, t) => {
    w.$ZodCUID2.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function I1(e) {
    return w._cuid2(g.ZodCUID2, e);
  }
  g.ZodULID = w.$constructor("ZodULID", (e, t) => {
    w.$ZodULID.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function T1(e) {
    return w._ulid(g.ZodULID, e);
  }
  g.ZodXID = w.$constructor("ZodXID", (e, t) => {
    w.$ZodXID.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function A1(e) {
    return w._xid(g.ZodXID, e);
  }
  g.ZodKSUID = w.$constructor("ZodKSUID", (e, t) => {
    w.$ZodKSUID.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function R1(e) {
    return w._ksuid(g.ZodKSUID, e);
  }
  g.ZodIPv4 = w.$constructor("ZodIPv4", (e, t) => {
    w.$ZodIPv4.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function j1(e) {
    return w._ipv4(g.ZodIPv4, e);
  }
  g.ZodMAC = w.$constructor("ZodMAC", (e, t) => {
    w.$ZodMAC.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function C1(e) {
    return w._mac(g.ZodMAC, e);
  }
  g.ZodIPv6 = w.$constructor("ZodIPv6", (e, t) => {
    w.$ZodIPv6.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function D1(e) {
    return w._ipv6(g.ZodIPv6, e);
  }
  g.ZodCIDRv4 = w.$constructor("ZodCIDRv4", (e, t) => {
    w.$ZodCIDRv4.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function x1(e) {
    return w._cidrv4(g.ZodCIDRv4, e);
  }
  g.ZodCIDRv6 = w.$constructor("ZodCIDRv6", (e, t) => {
    w.$ZodCIDRv6.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function M1(e) {
    return w._cidrv6(g.ZodCIDRv6, e);
  }
  g.ZodBase64 = w.$constructor("ZodBase64", (e, t) => {
    w.$ZodBase64.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function z1(e) {
    return w._base64(g.ZodBase64, e);
  }
  g.ZodBase64URL = w.$constructor("ZodBase64URL", (e, t) => {
    w.$ZodBase64URL.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function L1(e) {
    return w._base64url(g.ZodBase64URL, e);
  }
  g.ZodE164 = w.$constructor("ZodE164", (e, t) => {
    w.$ZodE164.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function U1(e) {
    return w._e164(g.ZodE164, e);
  }
  g.ZodJWT = w.$constructor("ZodJWT", (e, t) => {
    w.$ZodJWT.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function N1(e) {
    return w._jwt(g.ZodJWT, e);
  }
  g.ZodCustomStringFormat = w.$constructor("ZodCustomStringFormat", (e, t) => {
    w.$ZodCustomStringFormat.init(e, t), g.ZodStringFormat.init(e, t);
  });
  function Z1(e, t, n = {}) {
    return w._stringFormat(g.ZodCustomStringFormat, e, t, n);
  }
  function F1(e) {
    return w._stringFormat(g.ZodCustomStringFormat, "hostname", w.regexes.hostname, e);
  }
  function B1(e) {
    return w._stringFormat(g.ZodCustomStringFormat, "hex", w.regexes.hex, e);
  }
  function K1(e, t) {
    let n = t?.enc ?? "hex",
      i = `${e}_${n}`,
      r = w.regexes[i];
    if (!r) throw Error(`Unrecognized hash format: ${i}`);
    return w._stringFormat(g.ZodCustomStringFormat, i, r, t);
  }
  g.ZodNumber = w.$constructor("ZodNumber", (e, t) => {
    w.$ZodNumber.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (i, r, o) => ye.numberProcessor(e, i, r, o)),
      ca(e, "ZodNumber", {
        gt(i, r) {
          return this.check(de.gt(i, r));
        },
        gte(i, r) {
          return this.check(de.gte(i, r));
        },
        min(i, r) {
          return this.check(de.gte(i, r));
        },
        lt(i, r) {
          return this.check(de.lt(i, r));
        },
        lte(i, r) {
          return this.check(de.lte(i, r));
        },
        max(i, r) {
          return this.check(de.lte(i, r));
        },
        int(i) {
          return this.check(Sd(i));
        },
        safe(i) {
          return this.check(Sd(i));
        },
        positive(i) {
          return this.check(de.gt(0, i));
        },
        nonnegative(i) {
          return this.check(de.gte(0, i));
        },
        negative(i) {
          return this.check(de.lt(0, i));
        },
        nonpositive(i) {
          return this.check(de.lte(0, i));
        },
        multipleOf(i, r) {
          return this.check(de.multipleOf(i, r));
        },
        step(i, r) {
          return this.check(de.multipleOf(i, r));
        },
        finite() {
          return this;
        },
      });
    let n = e._zod.bag;
    (e.minValue =
      Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null),
      (e.maxValue =
        Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null),
      (e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5)),
      (e.isFinite = true),
      (e.format = n.format ?? null);
  });
  function yv(e) {
    return w._number(g.ZodNumber, e);
  }
  g.ZodNumberFormat = w.$constructor("ZodNumberFormat", (e, t) => {
    w.$ZodNumberFormat.init(e, t), g.ZodNumber.init(e, t);
  });
  function Sd(e) {
    return w._int(g.ZodNumberFormat, e);
  }
  function q1(e) {
    return w._float32(g.ZodNumberFormat, e);
  }
  function H1(e) {
    return w._float64(g.ZodNumberFormat, e);
  }
  function V1(e) {
    return w._int32(g.ZodNumberFormat, e);
  }
  function G1(e) {
    return w._uint32(g.ZodNumberFormat, e);
  }
  g.ZodBoolean = w.$constructor("ZodBoolean", (e, t) => {
    w.$ZodBoolean.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.booleanProcessor(e, n, i, r));
  });
  function bv(e) {
    return w._boolean(g.ZodBoolean, e);
  }
  g.ZodBigInt = w.$constructor("ZodBigInt", (e, t) => {
    w.$ZodBigInt.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (i, r, o) => ye.bigintProcessor(e, i, r, o)),
      (e.gte = (i, r) => e.check(de.gte(i, r))),
      (e.min = (i, r) => e.check(de.gte(i, r))),
      (e.gt = (i, r) => e.check(de.gt(i, r))),
      (e.gte = (i, r) => e.check(de.gte(i, r))),
      (e.min = (i, r) => e.check(de.gte(i, r))),
      (e.lt = (i, r) => e.check(de.lt(i, r))),
      (e.lte = (i, r) => e.check(de.lte(i, r))),
      (e.max = (i, r) => e.check(de.lte(i, r))),
      (e.positive = (i) => e.check(de.gt(BigInt(0), i))),
      (e.negative = (i) => e.check(de.lt(BigInt(0), i))),
      (e.nonpositive = (i) => e.check(de.lte(BigInt(0), i))),
      (e.nonnegative = (i) => e.check(de.gte(BigInt(0), i))),
      (e.multipleOf = (i, r) => e.check(de.multipleOf(i, r)));
    let n = e._zod.bag;
    (e.minValue = n.minimum ?? null), (e.maxValue = n.maximum ?? null), (e.format = n.format ?? null);
  });
  function W1(e) {
    return w._bigint(g.ZodBigInt, e);
  }
  g.ZodBigIntFormat = w.$constructor("ZodBigIntFormat", (e, t) => {
    w.$ZodBigIntFormat.init(e, t), g.ZodBigInt.init(e, t);
  });
  function J1(e) {
    return w._int64(g.ZodBigIntFormat, e);
  }
  function Y1(e) {
    return w._uint64(g.ZodBigIntFormat, e);
  }
  g.ZodSymbol = w.$constructor("ZodSymbol", (e, t) => {
    w.$ZodSymbol.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.symbolProcessor(e, n, i, r));
  });
  function X1(e) {
    return w._symbol(g.ZodSymbol, e);
  }
  g.ZodUndefined = w.$constructor("ZodUndefined", (e, t) => {
    w.$ZodUndefined.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.undefinedProcessor(e, n, i, r));
  });
  function Q1(e) {
    return w._undefined(g.ZodUndefined, e);
  }
  g.ZodNull = w.$constructor("ZodNull", (e, t) => {
    w.$ZodNull.init(e, t), g.ZodType.init(e, t), (e._zod.processJSONSchema = (n, i, r) => ye.nullProcessor(e, n, i, r));
  });
  function vv(e) {
    return w._null(g.ZodNull, e);
  }
  g.ZodAny = w.$constructor("ZodAny", (e, t) => {
    w.$ZodAny.init(e, t), g.ZodType.init(e, t), (e._zod.processJSONSchema = (n, i, r) => ye.anyProcessor(e, n, i, r));
  });
  function eN() {
    return w._any(g.ZodAny);
  }
  g.ZodUnknown = w.$constructor("ZodUnknown", (e, t) => {
    w.$ZodUnknown.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.unknownProcessor(e, n, i, r));
  });
  function Ji() {
    return w._unknown(g.ZodUnknown);
  }
  g.ZodNever = w.$constructor("ZodNever", (e, t) => {
    w.$ZodNever.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.neverProcessor(e, n, i, r));
  });
  function kd(e) {
    return w._never(g.ZodNever, e);
  }
  g.ZodVoid = w.$constructor("ZodVoid", (e, t) => {
    w.$ZodVoid.init(e, t), g.ZodType.init(e, t), (e._zod.processJSONSchema = (n, i, r) => ye.voidProcessor(e, n, i, r));
  });
  function tN(e) {
    return w._void(g.ZodVoid, e);
  }
  g.ZodDate = w.$constructor("ZodDate", (e, t) => {
    w.$ZodDate.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (i, r, o) => ye.dateProcessor(e, i, r, o)),
      (e.min = (i, r) => e.check(de.gte(i, r))),
      (e.max = (i, r) => e.check(de.lte(i, r)));
    let n = e._zod.bag;
    (e.minDate = n.minimum ? new Date(n.minimum) : null), (e.maxDate = n.maximum ? new Date(n.maximum) : null);
  });
  function rN(e) {
    return w._date(g.ZodDate, e);
  }
  g.ZodArray = w.$constructor("ZodArray", (e, t) => {
    w.$ZodArray.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.arrayProcessor(e, n, i, r)),
      (e.element = t.element),
      ca(e, "ZodArray", {
        min(n, i) {
          return this.check(de.minLength(n, i));
        },
        nonempty(n) {
          return this.check(de.minLength(1, n));
        },
        max(n, i) {
          return this.check(de.maxLength(n, i));
        },
        length(n, i) {
          return this.check(de.length(n, i));
        },
        unwrap() {
          return this.element;
        },
      });
  });
  function Cu(e, t) {
    return w._array(g.ZodArray, e, t);
  }
  function nN(e) {
    let t = e._zod.def.shape;
    return Ed(Object.keys(t));
  }
  g.ZodObject = w.$constructor("ZodObject", (e, t) => {
    w.$ZodObjectJIT.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.objectProcessor(e, n, i, r)),
      Pe.util.defineLazy(e, "shape", () => t.shape),
      ca(e, "ZodObject", {
        keyof() {
          return Ed(Object.keys(this._zod.def.shape));
        },
        catchall(n) {
          return this.clone({ ...this._zod.def, catchall: n });
        },
        passthrough() {
          return this.clone({ ...this._zod.def, catchall: Ji() });
        },
        loose() {
          return this.clone({ ...this._zod.def, catchall: Ji() });
        },
        strict() {
          return this.clone({ ...this._zod.def, catchall: kd() });
        },
        strip() {
          return this.clone({ ...this._zod.def, catchall: void 0 });
        },
        extend(n) {
          return Pe.util.extend(this, n);
        },
        safeExtend(n) {
          return Pe.util.safeExtend(this, n);
        },
        merge(n) {
          return Pe.util.merge(this, n);
        },
        pick(n) {
          return Pe.util.pick(this, n);
        },
        omit(n) {
          return Pe.util.omit(this, n);
        },
        partial(...n) {
          return Pe.util.partial(g.ZodOptional, this, n[0]);
        },
        required(...n) {
          return Pe.util.required(g.ZodNonOptional, this, n[0]);
        },
      });
  });
  function iN(e, t) {
    let n = { type: "object", shape: e ?? {}, ...Pe.util.normalizeParams(t) };
    return new g.ZodObject(n);
  }
  function oN(e, t) {
    return new g.ZodObject({ type: "object", shape: e, catchall: kd(), ...Pe.util.normalizeParams(t) });
  }
  function aN(e, t) {
    return new g.ZodObject({ type: "object", shape: e, catchall: Ji(), ...Pe.util.normalizeParams(t) });
  }
  g.ZodUnion = w.$constructor("ZodUnion", (e, t) => {
    w.$ZodUnion.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.unionProcessor(e, n, i, r)),
      (e.options = t.options);
  });
  function Pd(e, t) {
    return new g.ZodUnion({ type: "union", options: e, ...Pe.util.normalizeParams(t) });
  }
  g.ZodXor = w.$constructor("ZodXor", (e, t) => {
    g.ZodUnion.init(e, t),
      w.$ZodXor.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.unionProcessor(e, n, i, r)),
      (e.options = t.options);
  });
  function sN(e, t) {
    return new g.ZodXor({ type: "union", options: e, inclusive: false, ...Pe.util.normalizeParams(t) });
  }
  g.ZodDiscriminatedUnion = w.$constructor("ZodDiscriminatedUnion", (e, t) => {
    g.ZodUnion.init(e, t), w.$ZodDiscriminatedUnion.init(e, t);
  });
  function uN(e, t, n) {
    return new g.ZodDiscriminatedUnion({ type: "union", options: t, discriminator: e, ...Pe.util.normalizeParams(n) });
  }
  g.ZodIntersection = w.$constructor("ZodIntersection", (e, t) => {
    w.$ZodIntersection.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.intersectionProcessor(e, n, i, r));
  });
  function wv(e, t) {
    return new g.ZodIntersection({ type: "intersection", left: e, right: t });
  }
  g.ZodTuple = w.$constructor("ZodTuple", (e, t) => {
    w.$ZodTuple.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.tupleProcessor(e, n, i, r)),
      (e.rest = (n) => e.clone({ ...e._zod.def, rest: n }));
  });
  function Sv(e, t, n) {
    let i = t instanceof w.$ZodType,
      r = i ? n : t,
      o = i ? t : null;
    return new g.ZodTuple({ type: "tuple", items: e, rest: o, ...Pe.util.normalizeParams(r) });
  }
  g.ZodRecord = w.$constructor("ZodRecord", (e, t) => {
    w.$ZodRecord.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.recordProcessor(e, n, i, r)),
      (e.keyType = t.keyType),
      (e.valueType = t.valueType);
  });
  function Ov(e, t, n) {
    if (!t || !t._zod)
      return new g.ZodRecord({ type: "record", keyType: Au(), valueType: e, ...Pe.util.normalizeParams(t) });
    return new g.ZodRecord({ type: "record", keyType: e, valueType: t, ...Pe.util.normalizeParams(n) });
  }
  function cN(e, t, n) {
    let i = w.clone(e);
    return (
      (i._zod.values = void 0),
      new g.ZodRecord({ type: "record", keyType: i, valueType: t, ...Pe.util.normalizeParams(n) })
    );
  }
  function lN(e, t, n) {
    return new g.ZodRecord({ type: "record", keyType: e, valueType: t, mode: "loose", ...Pe.util.normalizeParams(n) });
  }
  g.ZodMap = w.$constructor("ZodMap", (e, t) => {
    w.$ZodMap.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.mapProcessor(e, n, i, r)),
      (e.keyType = t.keyType),
      (e.valueType = t.valueType),
      (e.min = (...n) => e.check(w._minSize(...n))),
      (e.nonempty = (n) => e.check(w._minSize(1, n))),
      (e.max = (...n) => e.check(w._maxSize(...n))),
      (e.size = (...n) => e.check(w._size(...n)));
  });
  function dN(e, t, n) {
    return new g.ZodMap({ type: "map", keyType: e, valueType: t, ...Pe.util.normalizeParams(n) });
  }
  g.ZodSet = w.$constructor("ZodSet", (e, t) => {
    w.$ZodSet.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.setProcessor(e, n, i, r)),
      (e.min = (...n) => e.check(w._minSize(...n))),
      (e.nonempty = (n) => e.check(w._minSize(1, n))),
      (e.max = (...n) => e.check(w._maxSize(...n))),
      (e.size = (...n) => e.check(w._size(...n)));
  });
  function fN(e, t) {
    return new g.ZodSet({ type: "set", valueType: e, ...Pe.util.normalizeParams(t) });
  }
  g.ZodEnum = w.$constructor("ZodEnum", (e, t) => {
    w.$ZodEnum.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (i, r, o) => ye.enumProcessor(e, i, r, o)),
      (e.enum = t.entries),
      (e.options = Object.values(t.entries));
    let n = new Set(Object.keys(t.entries));
    (e.extract = (i, r) => {
      let o = {};
      for (let s of i)
        if (n.has(s)) o[s] = t.entries[s];
        else throw Error(`Key ${s} not found in enum`);
      return new g.ZodEnum({ ...t, checks: [], ...Pe.util.normalizeParams(r), entries: o });
    }),
      (e.exclude = (i, r) => {
        let o = { ...t.entries };
        for (let s of i)
          if (n.has(s)) delete o[s];
          else throw Error(`Key ${s} not found in enum`);
        return new g.ZodEnum({ ...t, checks: [], ...Pe.util.normalizeParams(r), entries: o });
      });
  });
  function Ed(e, t) {
    let n = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
    return new g.ZodEnum({ type: "enum", entries: n, ...Pe.util.normalizeParams(t) });
  }
  function pN(e, t) {
    return new g.ZodEnum({ type: "enum", entries: e, ...Pe.util.normalizeParams(t) });
  }
  g.ZodLiteral = w.$constructor("ZodLiteral", (e, t) => {
    w.$ZodLiteral.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.literalProcessor(e, n, i, r)),
      (e.values = new Set(t.values)),
      Object.defineProperty(e, "value", {
        get() {
          if (t.values.length > 1)
            throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
          return t.values[0];
        },
      });
  });
  function mN(e, t) {
    return new g.ZodLiteral({ type: "literal", values: Array.isArray(e) ? e : [e], ...Pe.util.normalizeParams(t) });
  }
  g.ZodFile = w.$constructor("ZodFile", (e, t) => {
    w.$ZodFile.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.fileProcessor(e, n, i, r)),
      (e.min = (n, i) => e.check(w._minSize(n, i))),
      (e.max = (n, i) => e.check(w._maxSize(n, i))),
      (e.mime = (n, i) => e.check(w._mime(Array.isArray(n) ? n : [n], i)));
  });
  function gN(e) {
    return w._file(g.ZodFile, e);
  }
  g.ZodTransform = w.$constructor("ZodTransform", (e, t) => {
    w.$ZodTransform.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.transformProcessor(e, n, i, r)),
      (e._zod.parse = (n, i) => {
        if (i.direction === "backward") throw new w.$ZodEncodeError(e.constructor.name);
        n.addIssue = (o) => {
          if (typeof o === "string") n.issues.push(Pe.util.issue(o, n.value, t));
          else {
            let s = o;
            if (s.fatal) s.continue = false;
            s.code ?? (s.code = "custom"),
              s.input ?? (s.input = n.value),
              s.inst ?? (s.inst = e),
              n.issues.push(Pe.util.issue(s));
          }
        };
        let r = t.transform(n.value, n);
        if (r instanceof Promise) return r.then((o) => ((n.value = o), (n.fallback = true), n));
        return (n.value = r), (n.fallback = true), n;
      });
  });
  function $d(e) {
    return new g.ZodTransform({ type: "transform", transform: e });
  }
  g.ZodOptional = w.$constructor("ZodOptional", (e, t) => {
    w.$ZodOptional.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.optionalProcessor(e, n, i, r)),
      (e.unwrap = () => e._zod.def.innerType);
  });
  function Ru(e) {
    return new g.ZodOptional({ type: "optional", innerType: e });
  }
  g.ZodExactOptional = w.$constructor("ZodExactOptional", (e, t) => {
    w.$ZodExactOptional.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.optionalProcessor(e, n, i, r)),
      (e.unwrap = () => e._zod.def.innerType);
  });
  function kv(e) {
    return new g.ZodExactOptional({ type: "optional", innerType: e });
  }
  g.ZodNullable = w.$constructor("ZodNullable", (e, t) => {
    w.$ZodNullable.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.nullableProcessor(e, n, i, r)),
      (e.unwrap = () => e._zod.def.innerType);
  });
  function ju(e) {
    return new g.ZodNullable({ type: "nullable", innerType: e });
  }
  function hN(e) {
    return Ru(ju(e));
  }
  g.ZodDefault = w.$constructor("ZodDefault", (e, t) => {
    w.$ZodDefault.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.defaultProcessor(e, n, i, r)),
      (e.unwrap = () => e._zod.def.innerType),
      (e.removeDefault = e.unwrap);
  });
  function Pv(e, t) {
    return new g.ZodDefault({
      type: "default",
      innerType: e,
      get defaultValue() {
        return typeof t === "function" ? t() : Pe.util.shallowClone(t);
      },
    });
  }
  g.ZodPrefault = w.$constructor("ZodPrefault", (e, t) => {
    w.$ZodPrefault.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.prefaultProcessor(e, n, i, r)),
      (e.unwrap = () => e._zod.def.innerType);
  });
  function Ev(e, t) {
    return new g.ZodPrefault({
      type: "prefault",
      innerType: e,
      get defaultValue() {
        return typeof t === "function" ? t() : Pe.util.shallowClone(t);
      },
    });
  }
  g.ZodNonOptional = w.$constructor("ZodNonOptional", (e, t) => {
    w.$ZodNonOptional.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.nonoptionalProcessor(e, n, i, r)),
      (e.unwrap = () => e._zod.def.innerType);
  });
  function $v(e, t) {
    return new g.ZodNonOptional({ type: "nonoptional", innerType: e, ...Pe.util.normalizeParams(t) });
  }
  g.ZodSuccess = w.$constructor("ZodSuccess", (e, t) => {
    w.$ZodSuccess.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.successProcessor(e, n, i, r)),
      (e.unwrap = () => e._zod.def.innerType);
  });
  function _N(e) {
    return new g.ZodSuccess({ type: "success", innerType: e });
  }
  g.ZodCatch = w.$constructor("ZodCatch", (e, t) => {
    w.$ZodCatch.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.catchProcessor(e, n, i, r)),
      (e.unwrap = () => e._zod.def.innerType),
      (e.removeCatch = e.unwrap);
  });
  function Iv(e, t) {
    return new g.ZodCatch({ type: "catch", innerType: e, catchValue: typeof t === "function" ? t : () => t });
  }
  g.ZodNaN = w.$constructor("ZodNaN", (e, t) => {
    w.$ZodNaN.init(e, t), g.ZodType.init(e, t), (e._zod.processJSONSchema = (n, i, r) => ye.nanProcessor(e, n, i, r));
  });
  function yN(e) {
    return w._nan(g.ZodNaN, e);
  }
  g.ZodPipe = w.$constructor("ZodPipe", (e, t) => {
    w.$ZodPipe.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.pipeProcessor(e, n, i, r)),
      (e.in = t.in),
      (e.out = t.out);
  });
  function Od(e, t) {
    return new g.ZodPipe({ type: "pipe", in: e, out: t });
  }
  g.ZodCodec = w.$constructor("ZodCodec", (e, t) => {
    g.ZodPipe.init(e, t), w.$ZodCodec.init(e, t);
  });
  function bN(e, t, n) {
    return new g.ZodCodec({ type: "pipe", in: e, out: t, transform: n.decode, reverseTransform: n.encode });
  }
  function vN(e) {
    let t = e._zod.def;
    return new g.ZodCodec({
      type: "pipe",
      in: t.out,
      out: t.in,
      transform: t.reverseTransform,
      reverseTransform: t.transform,
    });
  }
  g.ZodPreprocess = w.$constructor("ZodPreprocess", (e, t) => {
    g.ZodPipe.init(e, t), w.$ZodPreprocess.init(e, t);
  });
  g.ZodReadonly = w.$constructor("ZodReadonly", (e, t) => {
    w.$ZodReadonly.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.readonlyProcessor(e, n, i, r)),
      (e.unwrap = () => e._zod.def.innerType);
  });
  function Tv(e) {
    return new g.ZodReadonly({ type: "readonly", innerType: e });
  }
  g.ZodTemplateLiteral = w.$constructor("ZodTemplateLiteral", (e, t) => {
    w.$ZodTemplateLiteral.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.templateLiteralProcessor(e, n, i, r));
  });
  function wN(e, t) {
    return new g.ZodTemplateLiteral({ type: "template_literal", parts: e, ...Pe.util.normalizeParams(t) });
  }
  g.ZodLazy = w.$constructor("ZodLazy", (e, t) => {
    w.$ZodLazy.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.lazyProcessor(e, n, i, r)),
      (e.unwrap = () => e._zod.def.getter());
  });
  function Av(e) {
    return new g.ZodLazy({ type: "lazy", getter: e });
  }
  g.ZodPromise = w.$constructor("ZodPromise", (e, t) => {
    w.$ZodPromise.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.promiseProcessor(e, n, i, r)),
      (e.unwrap = () => e._zod.def.innerType);
  });
  function SN(e) {
    return new g.ZodPromise({ type: "promise", innerType: e });
  }
  g.ZodFunction = w.$constructor("ZodFunction", (e, t) => {
    w.$ZodFunction.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.functionProcessor(e, n, i, r));
  });
  function Du(e) {
    return new g.ZodFunction({
      type: "function",
      input: Array.isArray(e?.input) ? Sv(e?.input) : (e?.input ?? Cu(Ji())),
      output: e?.output ?? Ji(),
    });
  }
  g.ZodCustom = w.$constructor("ZodCustom", (e, t) => {
    w.$ZodCustom.init(e, t),
      g.ZodType.init(e, t),
      (e._zod.processJSONSchema = (n, i, r) => ye.customProcessor(e, n, i, r));
  });
  function ON(e) {
    let t = new w.$ZodCheck({ check: "custom" });
    return (t._zod.check = e), t;
  }
  function kN(e, t) {
    return w._custom(g.ZodCustom, e ?? (() => true), t);
  }
  function Rv(e, t = {}) {
    return w._refine(g.ZodCustom, e, t);
  }
  function jv(e, t) {
    return w._superRefine(e, t);
  }
  g.describe = w.describe;
  g.meta = w.meta;
  function PN(e, t = {}) {
    let n = new g.ZodCustom({
      type: "custom",
      check: "custom",
      fn: (i) => i instanceof e,
      abort: true,
      ...Pe.util.normalizeParams(t),
    });
    return (
      (n._zod.bag.Class = e),
      (n._zod.check = (i) => {
        if (!(i.value instanceof e))
          i.issues.push({
            code: "invalid_type",
            expected: e.name,
            input: i.value,
            inst: n,
            path: [...(n._zod.def.path ?? [])],
          });
      }),
      n
    );
  }
  var EN = (...e) => w._stringbool({ Codec: g.ZodCodec, Boolean: g.ZodBoolean, String: g.ZodString }, ...e);
  g.stringbool = EN;
  function $N(e) {
    let t = Av(() => Pd([Au(e), yv(), bv(), vv(), Cu(t), Ov(Au(), t)]));
    return t;
  }
  function IN(e, t) {
    return new g.ZodPreprocess({ type: "pipe", in: $d(e), out: t });
  }
});

var Mv = S(function (ft) {
  var TN =
      (ft && ft.__createBinding) ||
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
    AN =
      (ft && ft.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    RN =
      (ft && ft.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) TN(t, e, n);
        }
        return AN(t, e), t;
      };
  Object.defineProperty(ft, "__esModule", { value: true });
  ft.ZodFirstPartyTypeKind = ft.config = ft.$brand = ft.ZodIssueCode = void 0;
  ft.setErrorMap = jN;
  ft.getErrorMap = CN;
  var Dv = RN(xt());
  ft.ZodIssueCode = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom",
  };
  var xv = xt();
  Object.defineProperty(ft, "$brand", {
    enumerable: true,
    get: function () {
      return xv.$brand;
    },
  });
  Object.defineProperty(ft, "config", {
    enumerable: true,
    get: function () {
      return xv.config;
    },
  });
  function jN(e) {
    Dv.config({ customError: e });
  }
  function CN() {
    return Dv.config().customError;
  }
  var Cv;
  (function (e) {})(Cv || (ft.ZodFirstPartyTypeKind = Cv = {}));
});

var Lv = S(function (jn) {
  var DN =
      (jn && jn.__createBinding) ||
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
    xN =
      (jn && jn.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Id =
      (jn && jn.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) DN(t, e, n);
        }
        return xN(t, e), t;
      };
  Object.defineProperty(jn, "__esModule", { value: true });
  jn.fromJSONSchema = BN;
  var MN = ta(),
    zN = Id(Eu()),
    LN = Id(aa()),
    UN = Id(sa()),
    H = { ...UN, ...zN, iso: LN },
    NN = new Set([
      "$schema",
      "$ref",
      "$defs",
      "definitions",
      "$id",
      "id",
      "$comment",
      "$anchor",
      "$vocabulary",
      "$dynamicRef",
      "$dynamicAnchor",
      "type",
      "enum",
      "const",
      "anyOf",
      "oneOf",
      "allOf",
      "not",
      "properties",
      "required",
      "additionalProperties",
      "patternProperties",
      "propertyNames",
      "minProperties",
      "maxProperties",
      "items",
      "prefixItems",
      "additionalItems",
      "minItems",
      "maxItems",
      "uniqueItems",
      "contains",
      "minContains",
      "maxContains",
      "minLength",
      "maxLength",
      "pattern",
      "format",
      "minimum",
      "maximum",
      "exclusiveMinimum",
      "exclusiveMaximum",
      "multipleOf",
      "description",
      "default",
      "contentEncoding",
      "contentMediaType",
      "contentSchema",
      "unevaluatedItems",
      "unevaluatedProperties",
      "if",
      "then",
      "else",
      "dependentSchemas",
      "dependentRequired",
      "nullable",
      "readOnly",
    ]);
  function ZN(e, t) {
    let n = e.$schema;
    if (n === "https://json-schema.org/draft/2020-12/schema") return "draft-2020-12";
    if (n === "http://json-schema.org/draft-07/schema#") return "draft-7";
    if (n === "http://json-schema.org/draft-04/schema#") return "draft-4";
    return t ?? "draft-2020-12";
  }
  function FN(e, t) {
    if (!e.startsWith("#")) throw Error("External $ref is not supported, only local refs (#/...) are allowed");
    let n = e.slice(1).split("/").filter(Boolean);
    if (n.length === 0) return t.rootSchema;
    let i = t.version === "draft-2020-12" ? "$defs" : "definitions";
    if (n[0] === i) {
      let r = n[1];
      if (!r || !t.defs[r]) throw Error(`Reference not found: ${e}`);
      return t.defs[r];
    }
    throw Error(`Reference not found: ${e}`);
  }
  function zv(e, t) {
    if (e.not !== void 0) {
      if (typeof e.not === "object" && Object.keys(e.not).length === 0) return H.never();
      throw Error("not is not supported in Zod (except { not: {} } for never)");
    }
    if (e.unevaluatedItems !== void 0) throw Error("unevaluatedItems is not supported");
    if (e.unevaluatedProperties !== void 0) throw Error("unevaluatedProperties is not supported");
    if (e.if !== void 0 || e.then !== void 0 || e.else !== void 0)
      throw Error("Conditional schemas (if/then/else) are not supported");
    if (e.dependentSchemas !== void 0 || e.dependentRequired !== void 0)
      throw Error("dependentSchemas and dependentRequired are not supported");
    if (e.$ref) {
      let r = e.$ref;
      if (t.refs.has(r)) return t.refs.get(r);
      if (t.processing.has(r))
        return H.lazy(() => {
          if (!t.refs.has(r)) throw Error(`Circular reference not resolved: ${r}`);
          return t.refs.get(r);
        });
      t.processing.add(r);
      let o = FN(r, t),
        s = St(o, t);
      return t.refs.set(r, s), t.processing.delete(r), s;
    }
    if (e.enum !== void 0) {
      let r = e.enum;
      if (t.version === "openapi-3.0" && e.nullable === true && r.length === 1 && r[0] === null) return H.null();
      if (r.length === 0) return H.never();
      if (r.length === 1) return H.literal(r[0]);
      if (r.every((s) => typeof s === "string")) return H.enum(r);
      let o = r.map((s) => H.literal(s));
      if (o.length < 2) return o[0];
      return H.union([o[0], o[1], ...o.slice(2)]);
    }
    if (e.const !== void 0) return H.literal(e.const);
    let n = e.type;
    if (Array.isArray(n)) {
      let r = n.map((o) => {
        let s = { ...e, type: o };
        return zv(s, t);
      });
      if (r.length === 0) return H.never();
      if (r.length === 1) return r[0];
      return H.union(r);
    }
    if (!n) return H.any();
    let i;
    switch (n) {
      case "string": {
        let r = H.string();
        if (e.format) {
          let o = e.format;
          if (o === "email") r = r.check(H.email());
          else if (o === "uri" || o === "uri-reference") r = r.check(H.url());
          else if (o === "uuid" || o === "guid") r = r.check(H.uuid());
          else if (o === "date-time") r = r.check(H.iso.datetime());
          else if (o === "date") r = r.check(H.iso.date());
          else if (o === "time") r = r.check(H.iso.time());
          else if (o === "duration") r = r.check(H.iso.duration());
          else if (o === "ipv4") r = r.check(H.ipv4());
          else if (o === "ipv6") r = r.check(H.ipv6());
          else if (o === "mac") r = r.check(H.mac());
          else if (o === "cidr") r = r.check(H.cidrv4());
          else if (o === "cidr-v6") r = r.check(H.cidrv6());
          else if (o === "base64") r = r.check(H.base64());
          else if (o === "base64url") r = r.check(H.base64url());
          else if (o === "e164") r = r.check(H.e164());
          else if (o === "jwt") r = r.check(H.jwt());
          else if (o === "emoji") r = r.check(H.emoji());
          else if (o === "nanoid") r = r.check(H.nanoid());
          else if (o === "cuid") r = r.check(H.cuid());
          else if (o === "cuid2") r = r.check(H.cuid2());
          else if (o === "ulid") r = r.check(H.ulid());
          else if (o === "xid") r = r.check(H.xid());
          else if (o === "ksuid") r = r.check(H.ksuid());
        }
        if (typeof e.minLength === "number") r = r.min(e.minLength);
        if (typeof e.maxLength === "number") r = r.max(e.maxLength);
        if (e.pattern) r = r.regex(new RegExp(e.pattern));
        i = r;
        break;
      }
      case "number":
      case "integer": {
        let r = n === "integer" ? H.number().int() : H.number();
        if (typeof e.minimum === "number") r = r.min(e.minimum);
        if (typeof e.maximum === "number") r = r.max(e.maximum);
        if (typeof e.exclusiveMinimum === "number") r = r.gt(e.exclusiveMinimum);
        else if (e.exclusiveMinimum === true && typeof e.minimum === "number") r = r.gt(e.minimum);
        if (typeof e.exclusiveMaximum === "number") r = r.lt(e.exclusiveMaximum);
        else if (e.exclusiveMaximum === true && typeof e.maximum === "number") r = r.lt(e.maximum);
        if (typeof e.multipleOf === "number") r = r.multipleOf(e.multipleOf);
        i = r;
        break;
      }
      case "boolean": {
        i = H.boolean();
        break;
      }
      case "null": {
        i = H.null();
        break;
      }
      case "object": {
        let r = {},
          o = e.properties || {},
          s = new Set(e.required || []);
        for (let [c, d] of Object.entries(o)) {
          let f = St(d, t);
          r[c] = s.has(c) ? f : f.optional();
        }
        if (e.propertyNames) {
          let c = St(e.propertyNames, t),
            d =
              e.additionalProperties && typeof e.additionalProperties === "object"
                ? St(e.additionalProperties, t)
                : H.any();
          if (Object.keys(r).length === 0) {
            i = H.record(c, d);
            break;
          }
          let f = H.object(r).passthrough(),
            p = H.looseRecord(c, d);
          i = H.intersection(f, p);
          break;
        }
        if (e.patternProperties) {
          let c = e.patternProperties,
            d = Object.keys(c),
            f = [];
          for (let h of d) {
            let y = St(c[h], t),
              v = H.string().regex(new RegExp(h));
            f.push(H.looseRecord(v, y));
          }
          let p = [];
          if (Object.keys(r).length > 0) p.push(H.object(r).passthrough());
          if ((p.push(...f), p.length === 0)) i = H.object({}).passthrough();
          else if (p.length === 1) i = p[0];
          else {
            let h = H.intersection(p[0], p[1]);
            for (let y = 2; y < p.length; y++) h = H.intersection(h, p[y]);
            i = h;
          }
          break;
        }
        let u = H.object(r);
        if (e.additionalProperties === false) i = u.strict();
        else if (typeof e.additionalProperties === "object") i = u.catchall(St(e.additionalProperties, t));
        else i = u.passthrough();
        break;
      }
      case "array": {
        let { prefixItems: r, items: o } = e;
        if (r && Array.isArray(r)) {
          let s = r.map((c) => St(c, t)),
            u = o && typeof o === "object" && !Array.isArray(o) ? St(o, t) : void 0;
          if (u) i = H.tuple(s).rest(u);
          else i = H.tuple(s);
          if (typeof e.minItems === "number") i = i.check(H.minLength(e.minItems));
          if (typeof e.maxItems === "number") i = i.check(H.maxLength(e.maxItems));
        } else if (Array.isArray(o)) {
          let s = o.map((c) => St(c, t)),
            u = e.additionalItems && typeof e.additionalItems === "object" ? St(e.additionalItems, t) : void 0;
          if (u) i = H.tuple(s).rest(u);
          else i = H.tuple(s);
          if (typeof e.minItems === "number") i = i.check(H.minLength(e.minItems));
          if (typeof e.maxItems === "number") i = i.check(H.maxLength(e.maxItems));
        } else if (o !== void 0) {
          let s = St(o, t),
            u = H.array(s);
          if (typeof e.minItems === "number") u = u.min(e.minItems);
          if (typeof e.maxItems === "number") u = u.max(e.maxItems);
          i = u;
        } else i = H.array(H.any());
        break;
      }
      default:
        throw Error(`Unsupported type: ${n}`);
    }
    return i;
  }
  function St(e, t) {
    if (typeof e === "boolean") return e ? H.any() : H.never();
    let n = zv(e, t),
      i = e.type || e.enum !== void 0 || e.const !== void 0;
    if (e.anyOf && Array.isArray(e.anyOf)) {
      let u = e.anyOf.map((d) => St(d, t)),
        c = H.union(u);
      n = i ? H.intersection(n, c) : c;
    }
    if (e.oneOf && Array.isArray(e.oneOf)) {
      let u = e.oneOf.map((d) => St(d, t)),
        c = H.xor(u);
      n = i ? H.intersection(n, c) : c;
    }
    if (e.allOf && Array.isArray(e.allOf))
      if (e.allOf.length === 0) n = i ? n : H.any();
      else {
        let u = i ? n : St(e.allOf[0], t),
          c = i ? 0 : 1;
        for (let d = c; d < e.allOf.length; d++) u = H.intersection(u, St(e.allOf[d], t));
        n = u;
      }
    if (e.nullable === true && t.version === "openapi-3.0") n = H.nullable(n);
    if (e.readOnly === true) n = H.readonly(n);
    if (e.default !== void 0) n = n.default(e.default);
    let r = {},
      o = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
    for (let u of o) if (u in e) r[u] = e[u];
    let s = ["contentEncoding", "contentMediaType", "contentSchema"];
    for (let u of s) if (u in e) r[u] = e[u];
    for (let u of Object.keys(e)) if (!NN.has(u)) r[u] = e[u];
    if (Object.keys(r).length > 0) t.registry.add(n, r);
    if (e.description) n = n.describe(e.description);
    return n;
  }
  function BN(e, t) {
    if (typeof e === "boolean") return e ? H.any() : H.never();
    let n;
    try {
      n = JSON.parse(JSON.stringify(e));
    } catch {
      throw Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas");
    }
    let i = ZN(n, t?.defaultTarget),
      r = n.$defs || n.definitions || {},
      o = {
        version: i,
        defs: r,
        refs: new Map(),
        processing: new Set(),
        rootSchema: n,
        registry: t?.registry ?? MN.globalRegistry,
      };
    return St(n, o);
  }
});

var Nv = S(function (Vt) {
  var KN =
      (Vt && Vt.__createBinding) ||
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
    qN =
      (Vt && Vt.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    Uv =
      (Vt && Vt.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) KN(t, e, n);
        }
        return qN(t, e), t;
      };
  Object.defineProperty(Vt, "__esModule", { value: true });
  Vt.string = HN;
  Vt.number = VN;
  Vt.boolean = GN;
  Vt.bigint = WN;
  Vt.date = JN;
  var la = Uv(xt()),
    da = Uv(sa());
  function HN(e) {
    return la._coercedString(da.ZodString, e);
  }
  function VN(e) {
    return la._coercedNumber(da.ZodNumber, e);
  }
  function GN(e) {
    return la._coercedBoolean(da.ZodBoolean, e);
  }
  function WN(e) {
    return la._coercedBigint(da.ZodBigInt, e);
  }
  function JN(e) {
    return la._coercedDate(da.ZodDate, e);
  }
});

var Td = S(function (W) {
  var Zv =
      (W && W.__createBinding) ||
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
    YN =
      (W && W.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: true, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    xu =
      (W && W.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null) {
          for (var n in e) if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) Zv(t, e, n);
        }
        return YN(t, e), t;
      },
    fa =
      (W && W.__exportStar) ||
      function (e, t) {
        for (var n in e) if (n !== "default" && !Object.prototype.hasOwnProperty.call(t, n)) Zv(t, e, n);
      },
    XN =
      (W && W.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(W, "__esModule", { value: true });
  W.coerce =
    W.iso =
    W.ZodISODuration =
    W.ZodISOTime =
    W.ZodISODate =
    W.ZodISODateTime =
    W.locales =
    W.fromJSONSchema =
    W.toJSONSchema =
    W.NEVER =
    W.util =
    W.TimePrecision =
    W.flattenError =
    W.formatError =
    W.prettifyError =
    W.treeifyError =
    W.regexes =
    W.clone =
    W.$brand =
    W.$input =
    W.$output =
    W.config =
    W.registry =
    W.globalRegistry =
    W.core =
      void 0;
  W.core = xu(xt());
  fa(sa(), W);
  fa(Eu(), W);
  fa(bd(), W);
  fa(vd(), W);
  fa(Mv(), W);
  var QN = xt(),
    eZ = XN(dd());
  (0, QN.config)((0, eZ.default)());
  var At = xt();
  Object.defineProperty(W, "globalRegistry", {
    enumerable: true,
    get: function () {
      return At.globalRegistry;
    },
  });
  Object.defineProperty(W, "registry", {
    enumerable: true,
    get: function () {
      return At.registry;
    },
  });
  Object.defineProperty(W, "config", {
    enumerable: true,
    get: function () {
      return At.config;
    },
  });
  Object.defineProperty(W, "$output", {
    enumerable: true,
    get: function () {
      return At.$output;
    },
  });
  Object.defineProperty(W, "$input", {
    enumerable: true,
    get: function () {
      return At.$input;
    },
  });
  Object.defineProperty(W, "$brand", {
    enumerable: true,
    get: function () {
      return At.$brand;
    },
  });
  Object.defineProperty(W, "clone", {
    enumerable: true,
    get: function () {
      return At.clone;
    },
  });
  Object.defineProperty(W, "regexes", {
    enumerable: true,
    get: function () {
      return At.regexes;
    },
  });
  Object.defineProperty(W, "treeifyError", {
    enumerable: true,
    get: function () {
      return At.treeifyError;
    },
  });
  Object.defineProperty(W, "prettifyError", {
    enumerable: true,
    get: function () {
      return At.prettifyError;
    },
  });
  Object.defineProperty(W, "formatError", {
    enumerable: true,
    get: function () {
      return At.formatError;
    },
  });
  Object.defineProperty(W, "flattenError", {
    enumerable: true,
    get: function () {
      return At.flattenError;
    },
  });
  Object.defineProperty(W, "TimePrecision", {
    enumerable: true,
    get: function () {
      return At.TimePrecision;
    },
  });
  Object.defineProperty(W, "util", {
    enumerable: true,
    get: function () {
      return At.util;
    },
  });
  Object.defineProperty(W, "NEVER", {
    enumerable: true,
    get: function () {
      return At.NEVER;
    },
  });
  var tZ = oa();
  Object.defineProperty(W, "toJSONSchema", {
    enumerable: true,
    get: function () {
      return tZ.toJSONSchema;
    },
  });
  var rZ = Lv();
  Object.defineProperty(W, "fromJSONSchema", {
    enumerable: true,
    get: function () {
      return rZ.fromJSONSchema;
    },
  });
  W.locales = xu(md());
  var Mu = aa();
  Object.defineProperty(W, "ZodISODateTime", {
    enumerable: true,
    get: function () {
      return Mu.ZodISODateTime;
    },
  });
  Object.defineProperty(W, "ZodISODate", {
    enumerable: true,
    get: function () {
      return Mu.ZodISODate;
    },
  });
  Object.defineProperty(W, "ZodISOTime", {
    enumerable: true,
    get: function () {
      return Mu.ZodISOTime;
    },
  });
  Object.defineProperty(W, "ZodISODuration", {
    enumerable: true,
    get: function () {
      return Mu.ZodISODuration;
    },
  });
  W.iso = xu(aa());
  W.coerce = xu(Nv());
});

export { Td };
