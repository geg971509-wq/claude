// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { je } from "/$bunfs/root/chunk-yz031c9r.js";
var co,
  Me = Object.freeze({ status: "aborted" });
function u(e, t, o) {
  function r(c, a) {
    if (!c._zod) Object.defineProperty(c, "_zod", { value: { def: a, constr: i, traits: new Set() }, enumerable: false });
    if (c._zod.traits.has(e)) return;
    c._zod.traits.add(e), t(c, a);
    let l = i.prototype,
      p = Object.keys(l);
    for (let m = 0; m < p.length; m++) {
      let h = p[m];
      if (!(h in c)) c[h] = l[h].bind(c);
    }
  }
  let n = o?.Parent ?? Object;
  class s extends n {}
  Object.defineProperty(s, "name", { value: e });
  function i(c) {
    var a;
    let l = o?.Parent ? new s() : this;
    r(l, c), (a = l._zod).deferred ?? (a.deferred = []);
    for (let p of l._zod.deferred) p();
    return l;
  }
  return (
    Object.defineProperty(i, "init", { value: r }),
    Object.defineProperty(i, Symbol.hasInstance, {
      value: (c) => {
        if (o?.Parent && c instanceof o.Parent) return true;
        return c?._zod?.traits?.has(e);
      },
    }),
    Object.defineProperty(i, "name", { value: e }),
    i
  );
}
var gi = Symbol("zod_brand");
class C extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class re extends Error {
  constructor(e) {
    super(`Encountered unidirectional transform during encode: ${e}`);
    this.name = "ZodEncodeError";
  }
}
(co = globalThis).__zod_globalConfig ?? (co.__zod_globalConfig = {});
var G = globalThis.__zod_globalConfig;
function T(e) {
  if (e) Object.assign(G, e);
  return G;
}
var z = {};
je(z, {
  BIGINT_FORMAT_RANGES: () => po,
  Class: () => _o,
  NUMBER_FORMAT_RANGES: () => Ke,
  aborted: () => q,
  allowsEval: () => qe,
  assert: () => Si,
  assertEqual: () => xi,
  assertIs: () => yi,
  assertNever: () => vi,
  assertNotEqual: () => bi,
  assignProp: () => F,
  base64ToUint8Array: () => fo,
  base64urlToUint8Array: () => Ui,
  cached: () => Y,
  captureStackTrace: () => ve,
  cleanEnum: () => Mi,
  cleanRegex: () => ce,
  clone: () => R,
  cloneDef: () => wi,
  createTransparentProxy: () => Ii,
  defineLazy: () => _,
  esc: () => ye,
  escapeRegex: () => D,
  explicitlyAborted: () => Ge,
  extend: () => Ni,
  finalizeIssue: () => j,
  floatSafeRemainder: () => Fe,
  getElementAtPath: () => Zi,
  getEnumValues: () => se,
  getLengthableOrigin: () => ae,
  getParsedType: () => Ti,
  getSizableOrigin: () => mo,
  hexToUint8Array: () => Ji,
  isObject: () => K,
  isPlainObject: () => J,
  issue: () => X,
  joinValues: () => be,
  jsonStringifyReplacer: () => W,
  merge: () => Ci,
  mergeDefs: () => L,
  normalizeParams: () => f,
  nullish: () => ie,
  numKeys: () => Ei,
  objectClone: () => ki,
  omit: () => ji,
  optionalKeys: () => Ve,
  parsedType: () => We,
  partial: () => Li,
  pick: () => Ri,
  prefixIssues: () => M,
  primitiveTypes: () => lo,
  promiseAllObject: () => Pi,
  propertyKeyTypes: () => Be,
  randomString: () => Oi,
  required: () => Di,
  safeExtend: () => Ai,
  shallowClone: () => uo,
  slugify: () => Je,
  stringifyPrimitive: () => $e,
  uint8ArrayToBase64: () => ho,
  uint8ArrayToBase64url: () => Fi,
  uint8ArrayToHex: () => qi,
  unwrapMessage: () => ne,
});
function xi(e) {
  return e;
}
function bi(e) {
  return e;
}
function yi(e) {}
function vi(e) {
  throw Error("Unexpected value in exhaustive check");
}
function Si(e) {}
function se(e) {
  let t = Object.values(e).filter((r) => typeof r === "number");
  return Object.entries(e)
    .filter(([r, n]) => t.indexOf(+r) === -1)
    .map(([r, n]) => n);
}
function be(e, t = "|") {
  return e.map((o) => $e(o)).join(t);
}
function W(e, t) {
  if (typeof t === "bigint") return t.toString();
  return t;
}
function Y(e) {
  return {
    get value() {
      {
        let o = e();
        return Object.defineProperty(this, "value", { value: o }), o;
      }
      throw Error("cached value already set");
    },
  };
}
function ie(e) {
  return e === null || e === void 0;
}
function ce(e) {
  let t = e.startsWith("^") ? 1 : 0,
    o = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, o);
}
function Fe(e, t) {
  let o = e / t,
    r = Math.round(o),
    n = Number.EPSILON * Math.max(Math.abs(o), 1);
  if (Math.abs(o - r) < n) return 0;
  return o - r;
}
var ao = Symbol("evaluating");
function _(e, t, o) {
  let r = void 0;
  Object.defineProperty(e, t, {
    get() {
      if (r === ao) return;
      if (r === void 0) (r = ao), (r = o());
      return r;
    },
    set(n) {
      Object.defineProperty(e, t, { value: n });
    },
    configurable: true,
  });
}
function ki(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function F(e, t, o) {
  Object.defineProperty(e, t, { value: o, writable: true, enumerable: true, configurable: true });
}
function L(...e) {
  let t = {};
  for (let o of e) {
    let r = Object.getOwnPropertyDescriptors(o);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function wi(e) {
  return L(e._zod.def);
}
function Zi(e, t) {
  if (!t) return e;
  return t.reduce((o, r) => o?.[r], e);
}
function Pi(e) {
  let t = Object.keys(e),
    o = t.map((r) => e[r]);
  return Promise.all(o).then((r) => {
    let n = {};
    for (let s = 0; s < t.length; s++) n[t[s]] = r[s];
    return n;
  });
}
function Oi(e = 10) {
  let o = "";
  for (let r = 0; r < e; r++) o += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
  return o;
}
function ye(e) {
  return JSON.stringify(e);
}
function Je(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
var ve = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function K(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var qe = Y(() => {
  if (G.jitless) return false;
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return false;
  try {
    return new Function(""), true;
  } catch (e) {
    return false;
  }
});
function J(e) {
  if (K(e) === false) return false;
  let t = e.constructor;
  if (t === void 0) return true;
  if (typeof t !== "function") return true;
  let o = t.prototype;
  if (K(o) === false) return false;
  if (Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === false) return false;
  return true;
}
function uo(e) {
  if (J(e)) return { ...e };
  if (Array.isArray(e)) return [...e];
  if (e instanceof Map) return new Map(e);
  if (e instanceof Set) return new Set(e);
  return e;
}
function Ei(e) {
  let t = 0;
  for (let o in e) if (Object.prototype.hasOwnProperty.call(e, o)) t++;
  return t;
}
var Ti = (e) => {
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
  },
  Be = new Set(["string", "number", "symbol"]),
  lo = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function D(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function R(e, t, o) {
  let r = new e._zod.constr(t ?? e._zod.def);
  if (!t || o?.parent) r._zod.parent = e;
  return r;
}
function f(e) {
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
function Ii(e) {
  let t;
  return new Proxy(
    {},
    {
      get(o, r, n) {
        return t ?? (t = e()), Reflect.get(t, r, n);
      },
      set(o, r, n, s) {
        return t ?? (t = e()), Reflect.set(t, r, n, s);
      },
      has(o, r) {
        return t ?? (t = e()), Reflect.has(t, r);
      },
      deleteProperty(o, r) {
        return t ?? (t = e()), Reflect.deleteProperty(t, r);
      },
      ownKeys(o) {
        return t ?? (t = e()), Reflect.ownKeys(t);
      },
      getOwnPropertyDescriptor(o, r) {
        return t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, r);
      },
      defineProperty(o, r, n) {
        return t ?? (t = e()), Reflect.defineProperty(t, r, n);
      },
    },
  );
}
function $e(e) {
  if (typeof e === "bigint") return e.toString() + "n";
  if (typeof e === "string") return `"${e}"`;
  return `${e}`;
}
function Ve(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
var Ke = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  po = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function Ri(e, t) {
  let o = e._zod.def,
    r = o.checks;
  if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
  let s = L(e._zod.def, {
    get shape() {
      let i = {};
      for (let c in t) {
        if (!(c in o.shape)) throw Error(`Unrecognized key: "${c}"`);
        if (!t[c]) continue;
        i[c] = o.shape[c];
      }
      return F(this, "shape", i), i;
    },
    checks: [],
  });
  return R(e, s);
}
function ji(e, t) {
  let o = e._zod.def,
    r = o.checks;
  if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
  let s = L(e._zod.def, {
    get shape() {
      let i = { ...e._zod.def.shape };
      for (let c in t) {
        if (!(c in o.shape)) throw Error(`Unrecognized key: "${c}"`);
        if (!t[c]) continue;
        delete i[c];
      }
      return F(this, "shape", i), i;
    },
    checks: [],
  });
  return R(e, s);
}
function Ni(e, t) {
  if (!J(t)) throw Error("Invalid input to extend: expected a plain object");
  let o = e._zod.def.checks;
  if (o && o.length > 0) {
    let s = e._zod.def.shape;
    for (let i in t)
      if (Object.getOwnPropertyDescriptor(s, i) !== void 0)
        throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  let n = L(e._zod.def, {
    get shape() {
      let s = { ...e._zod.def.shape, ...t };
      return F(this, "shape", s), s;
    },
  });
  return R(e, n);
}
function Ai(e, t) {
  if (!J(t)) throw Error("Invalid input to safeExtend: expected a plain object");
  let o = L(e._zod.def, {
    get shape() {
      let r = { ...e._zod.def.shape, ...t };
      return F(this, "shape", r), r;
    },
  });
  return R(e, o);
}
function Ci(e, t) {
  if (e._zod.def.checks?.length)
    throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  let o = L(e._zod.def, {
    get shape() {
      let r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return F(this, "shape", r), r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? [],
  });
  return R(e, o);
}
function Li(e, t, o) {
  let n = t._zod.def.checks;
  if (n && n.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
  let i = L(t._zod.def, {
    get shape() {
      let c = t._zod.def.shape,
        a = { ...c };
      if (o)
        for (let l in o) {
          if (!(l in c)) throw Error(`Unrecognized key: "${l}"`);
          if (!o[l]) continue;
          a[l] = e ? new e({ type: "optional", innerType: c[l] }) : c[l];
        }
      else for (let l in c) a[l] = e ? new e({ type: "optional", innerType: c[l] }) : c[l];
      return F(this, "shape", a), a;
    },
    checks: [],
  });
  return R(t, i);
}
function Di(e, t, o) {
  let r = L(t._zod.def, {
    get shape() {
      let n = t._zod.def.shape,
        s = { ...n };
      if (o)
        for (let i in o) {
          if (!(i in s)) throw Error(`Unrecognized key: "${i}"`);
          if (!o[i]) continue;
          s[i] = new e({ type: "nonoptional", innerType: n[i] });
        }
      else for (let i in n) s[i] = new e({ type: "nonoptional", innerType: n[i] });
      return F(this, "shape", s), s;
    },
  });
  return R(t, r);
}
function q(e, t = 0) {
  if (e.aborted === true) return true;
  for (let o = t; o < e.issues.length; o++) if (e.issues[o]?.continue !== true) return true;
  return false;
}
function Ge(e, t = 0) {
  if (e.aborted === true) return true;
  for (let o = t; o < e.issues.length; o++) if (e.issues[o]?.continue === false) return true;
  return false;
}
function M(e, t) {
  return t.map((o) => {
    var r;
    return (r = o).path ?? (r.path = []), o.path.unshift(e), o;
  });
}
function ne(e) {
  return typeof e === "string" ? e : e?.message;
}
function j(e, t, o) {
  let r = e.message
      ? e.message
      : (ne(e.inst?._zod.def?.error?.(e)) ??
        ne(t?.error?.(e)) ??
        ne(o.customError?.(e)) ??
        ne(o.localeError?.(e)) ??
        "Invalid input"),
    { inst: n, continue: s, input: i, ...c } = e;
  if ((c.path ?? (c.path = []), (c.message = r), t?.reportInput)) c.input = i;
  return c;
}
function mo(e) {
  if (e instanceof Set) return "set";
  if (e instanceof Map) return "map";
  if (e instanceof File) return "file";
  return "unknown";
}
function ae(e) {
  if (Array.isArray(e)) return "array";
  if (typeof e === "string") return "string";
  return "unknown";
}
function We(e) {
  let t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object": {
      if (e === null) return "null";
      if (Array.isArray(e)) return "array";
      let o = e;
      if (o && Object.getPrototypeOf(o) !== Object.prototype && "constructor" in o && o.constructor)
        return o.constructor.name;
    }
  }
  return t;
}
function X(...e) {
  let [t, o, r] = e;
  if (typeof t === "string") return { message: t, code: "custom", input: o, inst: r };
  return { ...t };
}
function Mi(e) {
  return Object.entries(e)
    .filter(([t, o]) => Number.isNaN(Number.parseInt(t, 10)))
    .map((t) => t[1]);
}
function fo(e) {
  let t = atob(e),
    o = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) o[r] = t.charCodeAt(r);
  return o;
}
function ho(e) {
  let t = "";
  for (let o = 0; o < e.length; o++) t += String.fromCharCode(e[o]);
  return btoa(t);
}
function Ui(e) {
  let t = e.replace(/-/g, "+").replace(/_/g, "/"),
    o = "=".repeat((4 - (t.length % 4)) % 4);
  return fo(t + o);
}
function Fi(e) {
  return ho(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Ji(e) {
  let t = e.replace(/^0x/, "");
  if (t.length % 2 !== 0) throw Error("Invalid hex string length");
  let o = new Uint8Array(t.length / 2);
  for (let r = 0; r < t.length; r += 2) o[r / 2] = Number.parseInt(t.slice(r, r + 2), 16);
  return o;
}
function qi(e) {
  return Array.from(e)
    .map((t) => t.toString(16).padStart(2, "0"))
    .join("");
}
class _o {
  constructor(...e) {}
}
var zo = (e, t) => {
    (e.name = "$ZodError"),
      Object.defineProperty(e, "_zod", { value: e._zod, enumerable: false }),
      Object.defineProperty(e, "issues", { value: t, enumerable: false }),
      (e.message = JSON.stringify(t, W, 2)),
      Object.defineProperty(e, "toString", { value: () => e.message, enumerable: false });
  },
  Se = u("$ZodError", zo),
  Ye = u("$ZodError", zo, { Parent: Error });
function Xe(e, t = (o) => o.message) {
  let o = {},
    r = [];
  for (let n of e.issues)
    if (n.path.length > 0) (o[n.path[0]] = o[n.path[0]] || []), o[n.path[0]].push(t(n));
    else r.push(t(n));
  return { formErrors: r, fieldErrors: o };
}
function He(e, t = (o) => o.message) {
  let o = { _errors: [] },
    r = (n, s = []) => {
      for (let i of n.issues)
        if (i.code === "invalid_union" && i.errors.length) i.errors.map((c) => r({ issues: c }, [...s, ...i.path]));
        else if (i.code === "invalid_key") r({ issues: i.issues }, [...s, ...i.path]);
        else if (i.code === "invalid_element") r({ issues: i.issues }, [...s, ...i.path]);
        else {
          let c = [...s, ...i.path];
          if (c.length === 0) o._errors.push(t(i));
          else {
            let a = o,
              l = 0;
            while (l < c.length) {
              let p = c[l];
              if (l !== c.length - 1) a[p] = a[p] || { _errors: [] };
              else (a[p] = a[p] || { _errors: [] }), a[p]._errors.push(t(i));
              (a = a[p]), l++;
            }
          }
        }
    };
  return r(e), o;
}
var ke = (e) => (t, o, r, n) => {
  let s = r ? { ...r, async: false } : { async: false },
    i = t._zod.run({ value: o, issues: [] }, s);
  if (i instanceof Promise) throw new C();
  if (i.issues.length) {
    let c = new (n?.Err ?? e)(i.issues.map((a) => j(a, s, T())));
    throw (ve(c, n?.callee), c);
  }
  return i.value;
};
var we = (e) => async (t, o, r, n) => {
  let s = r ? { ...r, async: true } : { async: true },
    i = t._zod.run({ value: o, issues: [] }, s);
  if (i instanceof Promise) i = await i;
  if (i.issues.length) {
    let c = new (n?.Err ?? e)(i.issues.map((a) => j(a, s, T())));
    throw (ve(c, n?.callee), c);
  }
  return i.value;
};
var ue = (e) => (t, o, r) => {
    let n = r ? { ...r, async: false } : { async: false },
      s = t._zod.run({ value: o, issues: [] }, n);
    if (s instanceof Promise) throw new C();
    return s.issues.length
      ? { success: false, error: new (e ?? Se)(s.issues.map((i) => j(i, n, T()))) }
      : { success: true, data: s.value };
  },
  go = ue(Ye),
  le = (e) => async (t, o, r) => {
    let n = r ? { ...r, async: true } : { async: true },
      s = t._zod.run({ value: o, issues: [] }, n);
    if (s instanceof Promise) s = await s;
    return s.issues.length
      ? { success: false, error: new e(s.issues.map((i) => j(i, n, T()))) }
      : { success: true, data: s.value };
  },
  xo = le(Ye),
  bo = (e) => (t, o, r) => {
    let n = r ? { ...r, direction: "backward" } : { direction: "backward" };
    return ke(e)(t, o, n);
  };
var yo = (e) => (t, o, r) => ke(e)(t, o, r);
var vo = (e) => async (t, o, r) => {
  let n = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return we(e)(t, o, n);
};
var $o = (e) => async (t, o, r) => we(e)(t, o, r);
var So = (e) => (t, o, r) => {
  let n = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return ue(e)(t, o, n);
};
var ko = (e) => (t, o, r) => ue(e)(t, o, r);
var wo = (e) => async (t, o, r) => {
  let n = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return le(e)(t, o, n);
};
var Zo = (e) => async (t, o, r) => le(e)(t, o, r);
var Po = /^[cC][0-9a-z]{6,}$/,
  Oo = /^[0-9a-z]+$/,
  Eo = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  To = /^[0-9a-vA-V]{20}$/,
  Io = /^[A-Za-z0-9]{27}$/,
  Ro = /^[a-zA-Z0-9_-]{21}$/,
  jo = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var No = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  Qe = (e) => {
    if (!e)
      return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
  };
var Ao = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var Vi = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Co() {
  return new RegExp(Vi, "u");
}
var Lo =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Do =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var Mo =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  Uo =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Fo = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  et = /^[A-Za-z0-9_-]*$/;
var Jo = /^https?$/,
  qo = /^\+[1-9]\d{6,14}$/,
  Bo =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
  Vo = new RegExp(`^${Bo}$`);
function Ko(e) {
  return typeof e.precision === "number"
    ? e.precision === -1
      ? "(?:[01]\\d|2[0-3]):[0-5]\\d"
      : e.precision === 0
        ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d"
        : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}`
    : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function Go(e) {
  return new RegExp(`^${Ko(e)}$`);
}
function Wo(e) {
  let t = Ko({ precision: e.precision }),
    o = ["Z"];
  if (e.local) o.push("");
  if (e.offset) o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  let r = `${t}(?:${o.join("|")})`;
  return new RegExp(`^${Bo}T(?:${r})$`);
}
var Yo = (e) => {
    let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
  },
  Xo = /^-?\d+n?$/,
  Ho = /^-?\d+$/,
  Ze = /^-?\d+(?:\.\d+)?$/,
  Qo = /^(?:true|false)$/i,
  er = /^null$/i;
var tr = /^[^A-Z]*$/,
  or = /^[^a-z]*$/;
var P = u("$ZodCheck", (e, t) => {
    var o;
    e._zod ?? (e._zod = {}), (e._zod.def = t), (o = e._zod).onattach ?? (o.onattach = []);
  }),
  rr = { number: "number", bigint: "bigint", object: "date" },
  tt = u("$ZodCheckLessThan", (e, t) => {
    P.init(e, t);
    let o = rr[typeof t.value];
    e._zod.onattach.push((r) => {
      let n = r._zod.bag,
        s = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      if (t.value < s)
        if (t.inclusive) n.maximum = t.value;
        else n.exclusiveMaximum = t.value;
    }),
      (e._zod.check = (r) => {
        if (t.inclusive ? r.value <= t.value : r.value < t.value) return;
        r.issues.push({
          origin: o,
          code: "too_big",
          maximum: typeof t.value === "object" ? t.value.getTime() : t.value,
          input: r.value,
          inclusive: t.inclusive,
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  ot = u("$ZodCheckGreaterThan", (e, t) => {
    P.init(e, t);
    let o = rr[typeof t.value];
    e._zod.onattach.push((r) => {
      let n = r._zod.bag,
        s = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      if (t.value > s)
        if (t.inclusive) n.minimum = t.value;
        else n.exclusiveMinimum = t.value;
    }),
      (e._zod.check = (r) => {
        if (t.inclusive ? r.value >= t.value : r.value > t.value) return;
        r.issues.push({
          origin: o,
          code: "too_small",
          minimum: typeof t.value === "object" ? t.value.getTime() : t.value,
          input: r.value,
          inclusive: t.inclusive,
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  nr = u("$ZodCheckMultipleOf", (e, t) => {
    P.init(e, t),
      e._zod.onattach.push((o) => {
        var r;
        (r = o._zod.bag).multipleOf ?? (r.multipleOf = t.value);
      }),
      (e._zod.check = (o) => {
        if (typeof o.value !== typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
        if (typeof o.value === "bigint" ? o.value % t.value === BigInt(0) : Fe(o.value, t.value) === 0) return;
        o.issues.push({
          origin: typeof o.value,
          code: "not_multiple_of",
          divisor: t.value,
          input: o.value,
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  sr = u("$ZodCheckNumberFormat", (e, t) => {
    P.init(e, t), (t.format = t.format || "float64");
    let o = t.format?.includes("int"),
      r = o ? "int" : "number",
      [n, s] = Ke[t.format];
    e._zod.onattach.push((i) => {
      let c = i._zod.bag;
      if (((c.format = t.format), (c.minimum = n), (c.maximum = s), o)) c.pattern = Ho;
    }),
      (e._zod.check = (i) => {
        let c = i.value;
        if (o) {
          if (!Number.isInteger(c)) {
            i.issues.push({ expected: r, format: t.format, code: "invalid_type", continue: false, input: c, inst: e });
            return;
          }
          if (!Number.isSafeInteger(c)) {
            if (c > 0)
              i.issues.push({
                input: c,
                code: "too_big",
                maximum: Number.MAX_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: e,
                origin: r,
                inclusive: true,
                continue: !t.abort,
              });
            else
              i.issues.push({
                input: c,
                code: "too_small",
                minimum: Number.MIN_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: e,
                origin: r,
                inclusive: true,
                continue: !t.abort,
              });
            return;
          }
        }
        if (c < n)
          i.issues.push({
            origin: "number",
            input: c,
            code: "too_small",
            minimum: n,
            inclusive: true,
            inst: e,
            continue: !t.abort,
          });
        if (c > s)
          i.issues.push({
            origin: "number",
            input: c,
            code: "too_big",
            maximum: s,
            inclusive: true,
            inst: e,
            continue: !t.abort,
          });
      });
  });
var ir = u("$ZodCheckMaxLength", (e, t) => {
    var o;
    P.init(e, t),
      (o = e._zod.def).when ??
        (o.when = (r) => {
          let n = r.value;
          return !ie(n) && n.length !== void 0;
        }),
      e._zod.onattach.push((r) => {
        let n = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (t.maximum < n) r._zod.bag.maximum = t.maximum;
      }),
      (e._zod.check = (r) => {
        let n = r.value;
        if (n.length <= t.maximum) return;
        let i = ae(n);
        r.issues.push({
          origin: i,
          code: "too_big",
          maximum: t.maximum,
          inclusive: true,
          input: n,
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  cr = u("$ZodCheckMinLength", (e, t) => {
    var o;
    P.init(e, t),
      (o = e._zod.def).when ??
        (o.when = (r) => {
          let n = r.value;
          return !ie(n) && n.length !== void 0;
        }),
      e._zod.onattach.push((r) => {
        let n = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (t.minimum > n) r._zod.bag.minimum = t.minimum;
      }),
      (e._zod.check = (r) => {
        let n = r.value;
        if (n.length >= t.minimum) return;
        let i = ae(n);
        r.issues.push({
          origin: i,
          code: "too_small",
          minimum: t.minimum,
          inclusive: true,
          input: n,
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  ar = u("$ZodCheckLengthEquals", (e, t) => {
    var o;
    P.init(e, t),
      (o = e._zod.def).when ??
        (o.when = (r) => {
          let n = r.value;
          return !ie(n) && n.length !== void 0;
        }),
      e._zod.onattach.push((r) => {
        let n = r._zod.bag;
        (n.minimum = t.length), (n.maximum = t.length), (n.length = t.length);
      }),
      (e._zod.check = (r) => {
        let n = r.value,
          s = n.length;
        if (s === t.length) return;
        let i = ae(n),
          c = s > t.length;
        r.issues.push({
          origin: i,
          ...(c ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }),
          inclusive: true,
          exact: true,
          input: r.value,
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  de = u("$ZodCheckStringFormat", (e, t) => {
    var o, r;
    if (
      (P.init(e, t),
      e._zod.onattach.push((n) => {
        let s = n._zod.bag;
        if (((s.format = t.format), t.pattern)) s.patterns ?? (s.patterns = new Set()), s.patterns.add(t.pattern);
      }),
      t.pattern)
    )
      (o = e._zod).check ??
        (o.check = (n) => {
          if (((t.pattern.lastIndex = 0), t.pattern.test(n.value))) return;
          n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: t.format,
            input: n.value,
            ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
            inst: e,
            continue: !t.abort,
          });
        });
    else (r = e._zod).check ?? (r.check = () => {});
  }),
  ur = u("$ZodCheckRegex", (e, t) => {
    de.init(e, t),
      (e._zod.check = (o) => {
        if (((t.pattern.lastIndex = 0), t.pattern.test(o.value))) return;
        o.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "regex",
          input: o.value,
          pattern: t.pattern.toString(),
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  lr = u("$ZodCheckLowerCase", (e, t) => {
    t.pattern ?? (t.pattern = tr), de.init(e, t);
  }),
  pr = u("$ZodCheckUpperCase", (e, t) => {
    t.pattern ?? (t.pattern = or), de.init(e, t);
  }),
  mr = u("$ZodCheckIncludes", (e, t) => {
    P.init(e, t);
    let o = D(t.includes),
      r = new RegExp(typeof t.position === "number" ? `^.{${t.position}}${o}` : o);
    (t.pattern = r),
      e._zod.onattach.push((n) => {
        let s = n._zod.bag;
        s.patterns ?? (s.patterns = new Set()), s.patterns.add(r);
      }),
      (e._zod.check = (n) => {
        if (n.value.includes(t.includes, t.position)) return;
        n.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "includes",
          includes: t.includes,
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  dr = u("$ZodCheckStartsWith", (e, t) => {
    P.init(e, t);
    let o = new RegExp(`^${D(t.prefix)}.*`);
    t.pattern ?? (t.pattern = o),
      e._zod.onattach.push((r) => {
        let n = r._zod.bag;
        n.patterns ?? (n.patterns = new Set()), n.patterns.add(o);
      }),
      (e._zod.check = (r) => {
        if (r.value.startsWith(t.prefix)) return;
        r.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "starts_with",
          prefix: t.prefix,
          input: r.value,
          inst: e,
          continue: !t.abort,
        });
      });
  }),
  fr = u("$ZodCheckEndsWith", (e, t) => {
    P.init(e, t);
    let o = new RegExp(`.*${D(t.suffix)}$`);
    t.pattern ?? (t.pattern = o),
      e._zod.onattach.push((r) => {
        let n = r._zod.bag;
        n.patterns ?? (n.patterns = new Set()), n.patterns.add(o);
      }),
      (e._zod.check = (r) => {
        if (r.value.endsWith(t.suffix)) return;
        r.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "ends_with",
          suffix: t.suffix,
          input: r.value,
          inst: e,
          continue: !t.abort,
        });
      });
  });
var hr = u("$ZodCheckOverwrite", (e, t) => {
  P.init(e, t),
    (e._zod.check = (o) => {
      o.value = t.tx(o.value);
    });
});
class rt {
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
    let o = e
        .split(`
`)
        .filter((s) => s),
      r = Math.min(...o.map((s) => s.length - s.trimStart().length)),
      n = o.map((s) => s.slice(r)).map((s) => " ".repeat(this.indent * 2) + s);
    for (let s of n) this.content.push(s);
  }
  compile() {
    let e = Function,
      t = this?.args,
      r = [...(this?.content ?? [""]).map((n) => `  ${n}`)];
    return new e(
      ...t,
      r.join(`
`),
    );
  }
}
var zr = { major: 4, minor: 4, patch: 3 };
var g = u("$ZodType", (e, t) => {
    var o;
    e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = zr);
    let r = [...(e._zod.def.checks ?? [])];
    if (e._zod.traits.has("$ZodCheck")) r.unshift(e);
    for (let n of r) for (let s of n._zod.onattach) s(e);
    if (r.length === 0)
      (o = e._zod).deferred ?? (o.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        });
    else {
      let n = (i, c, a) => {
          let l = q(i),
            p;
          for (let m of c) {
            if (m._zod.def.when) {
              if (Ge(i)) continue;
              if (!m._zod.def.when(i)) continue;
            } else if (l) continue;
            let h = i.issues.length,
              d = m._zod.check(i);
            if (d instanceof Promise && a?.async === false) throw new C();
            if (p || d instanceof Promise)
              p = (p ?? Promise.resolve()).then(async () => {
                if ((await d, i.issues.length === h)) return;
                if (!l) l = q(i, h);
              });
            else {
              if (i.issues.length === h) continue;
              if (!l) l = q(i, h);
            }
          }
          if (p) return p.then(() => i);
          return i;
        },
        s = (i, c, a) => {
          if (q(i)) return (i.aborted = true), i;
          let l = n(c, r, a);
          if (l instanceof Promise) {
            if (a.async === false) throw new C();
            return l.then((p) => e._zod.parse(p, a));
          }
          return e._zod.parse(l, a);
        };
      e._zod.run = (i, c) => {
        if (c.skipChecks) return e._zod.parse(i, c);
        if (c.direction === "backward") {
          let l = e._zod.parse({ value: i.value, issues: [] }, { ...c, skipChecks: true });
          if (l instanceof Promise) return l.then((p) => s(p, i, c));
          return s(l, i, c);
        }
        let a = e._zod.parse(i, c);
        if (a instanceof Promise) {
          if (c.async === false) throw new C();
          return a.then((l) => n(l, r, c));
        }
        return n(a, r, c);
      };
    }
    _(e, "~standard", () => ({
      validate: (n) => {
        try {
          let s = go(e, n);
          return s.success ? { value: s.data } : { issues: s.error?.issues };
        } catch (s) {
          return xo(e, n).then((i) => (i.success ? { value: i.data } : { issues: i.error?.issues }));
        }
      },
      vendor: "zod",
      version: 1,
    }));
  }),
  Ee = u("$ZodString", (e, t) => {
    g.init(e, t),
      (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? Yo(e._zod.bag)),
      (e._zod.parse = (o, r) => {
        if (t.coerce)
          try {
            o.value = String(o.value);
          } catch (n) {}
        if (typeof o.value === "string") return o;
        return o.issues.push({ expected: "string", code: "invalid_type", input: o.value, inst: e }), o;
      });
  }),
  v = u("$ZodStringFormat", (e, t) => {
    de.init(e, t), Ee.init(e, t);
  }),
  wr = u("$ZodGUID", (e, t) => {
    t.pattern ?? (t.pattern = No), v.init(e, t);
  }),
  Zr = u("$ZodUUID", (e, t) => {
    if (t.version) {
      let r = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
      if (r === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = Qe(r));
    } else t.pattern ?? (t.pattern = Qe());
    v.init(e, t);
  }),
  Pr = u("$ZodEmail", (e, t) => {
    t.pattern ?? (t.pattern = Ao), v.init(e, t);
  }),
  Or = u("$ZodURL", (e, t) => {
    v.init(e, t),
      (e._zod.check = (o) => {
        try {
          let r = o.value.trim();
          if (!t.normalize && t.protocol?.source === Jo.source) {
            if (!/^https?:\/\//i.test(r)) {
              o.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid URL format",
                input: o.value,
                inst: e,
                continue: !t.abort,
              });
              return;
            }
          }
          let n = new URL(r);
          if (t.hostname) {
            if (((t.hostname.lastIndex = 0), !t.hostname.test(n.hostname)))
              o.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: t.hostname.source,
                input: o.value,
                inst: e,
                continue: !t.abort,
              });
          }
          if (t.protocol) {
            if (
              ((t.protocol.lastIndex = 0),
              !t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol))
            )
              o.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: t.protocol.source,
                input: o.value,
                inst: e,
                continue: !t.abort,
              });
          }
          if (t.normalize) o.value = n.href;
          else o.value = r;
          return;
        } catch (r) {
          o.issues.push({ code: "invalid_format", format: "url", input: o.value, inst: e, continue: !t.abort });
        }
      });
  }),
  Er = u("$ZodEmoji", (e, t) => {
    t.pattern ?? (t.pattern = Co()), v.init(e, t);
  }),
  Tr = u("$ZodNanoID", (e, t) => {
    t.pattern ?? (t.pattern = Ro), v.init(e, t);
  }),
  Ir = u("$ZodCUID", (e, t) => {
    t.pattern ?? (t.pattern = Po), v.init(e, t);
  }),
  Rr = u("$ZodCUID2", (e, t) => {
    t.pattern ?? (t.pattern = Oo), v.init(e, t);
  }),
  jr = u("$ZodULID", (e, t) => {
    t.pattern ?? (t.pattern = Eo), v.init(e, t);
  }),
  Nr = u("$ZodXID", (e, t) => {
    t.pattern ?? (t.pattern = To), v.init(e, t);
  }),
  Ar = u("$ZodKSUID", (e, t) => {
    t.pattern ?? (t.pattern = Io), v.init(e, t);
  }),
  Cr = u("$ZodISODateTime", (e, t) => {
    t.pattern ?? (t.pattern = Wo(t)), v.init(e, t);
  }),
  Lr = u("$ZodISODate", (e, t) => {
    t.pattern ?? (t.pattern = Vo), v.init(e, t);
  }),
  Dr = u("$ZodISOTime", (e, t) => {
    t.pattern ?? (t.pattern = Go(t)), v.init(e, t);
  }),
  Mr = u("$ZodISODuration", (e, t) => {
    t.pattern ?? (t.pattern = jo), v.init(e, t);
  }),
  Ur = u("$ZodIPv4", (e, t) => {
    t.pattern ?? (t.pattern = Lo), v.init(e, t), (e._zod.bag.format = "ipv4");
  }),
  Jr = u("$ZodIPv6", (e, t) => {
    t.pattern ?? (t.pattern = Do),
      v.init(e, t),
      (e._zod.bag.format = "ipv6"),
      (e._zod.check = (o) => {
        try {
          new URL(`http://[${o.value}]`);
        } catch {
          o.issues.push({ code: "invalid_format", format: "ipv6", input: o.value, inst: e, continue: !t.abort });
        }
      });
  });
var qr = u("$ZodCIDRv4", (e, t) => {
    t.pattern ?? (t.pattern = Mo), v.init(e, t);
  }),
  Br = u("$ZodCIDRv6", (e, t) => {
    t.pattern ?? (t.pattern = Uo),
      v.init(e, t),
      (e._zod.check = (o) => {
        let r = o.value.split("/");
        try {
          if (r.length !== 2) throw Error();
          let [n, s] = r;
          if (!s) throw Error();
          let i = Number(s);
          if (`${i}` !== s) throw Error();
          if (i < 0 || i > 128) throw Error();
          new URL(`http://[${n}]`);
        } catch {
          o.issues.push({ code: "invalid_format", format: "cidrv6", input: o.value, inst: e, continue: !t.abort });
        }
      });
  });
function Vr(e) {
  if (e === "") return true;
  if (/\s/.test(e)) return false;
  if (e.length % 4 !== 0) return false;
  try {
    return atob(e), true;
  } catch {
    return false;
  }
}
var Kr = u("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Fo),
    v.init(e, t),
    (e._zod.bag.contentEncoding = "base64"),
    (e._zod.check = (o) => {
      if (Vr(o.value)) return;
      o.issues.push({ code: "invalid_format", format: "base64", input: o.value, inst: e, continue: !t.abort });
    });
});
function Gi(e) {
  if (!et.test(e)) return false;
  let t = e.replace(/[-_]/g, (r) => (r === "-" ? "+" : "/")),
    o = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Vr(o);
}
var Gr = u("$ZodBase64URL", (e, t) => {
    t.pattern ?? (t.pattern = et),
      v.init(e, t),
      (e._zod.bag.contentEncoding = "base64url"),
      (e._zod.check = (o) => {
        if (Gi(o.value)) return;
        o.issues.push({ code: "invalid_format", format: "base64url", input: o.value, inst: e, continue: !t.abort });
      });
  }),
  Wr = u("$ZodE164", (e, t) => {
    t.pattern ?? (t.pattern = qo), v.init(e, t);
  });
function Wi(e, t = null) {
  try {
    let o = e.split(".");
    if (o.length !== 3) return false;
    let [r] = o;
    if (!r) return false;
    let n = JSON.parse(atob(r));
    if ("typ" in n && n?.typ !== "JWT") return false;
    if (!n.alg) return false;
    if (t && (!("alg" in n) || n.alg !== t)) return false;
    return true;
  } catch {
    return false;
  }
}
var Yr = u("$ZodJWT", (e, t) => {
  v.init(e, t),
    (e._zod.check = (o) => {
      if (Wi(o.value, t.alg)) return;
      o.issues.push({ code: "invalid_format", format: "jwt", input: o.value, inst: e, continue: !t.abort });
    });
});
var st = u("$ZodNumber", (e, t) => {
    g.init(e, t),
      (e._zod.pattern = e._zod.bag.pattern ?? Ze),
      (e._zod.parse = (o, r) => {
        if (t.coerce)
          try {
            o.value = Number(o.value);
          } catch (i) {}
        let n = o.value;
        if (typeof n === "number" && !Number.isNaN(n) && Number.isFinite(n)) return o;
        let s = typeof n === "number" ? (Number.isNaN(n) ? "NaN" : !Number.isFinite(n) ? "Infinity" : void 0) : void 0;
        return (
          o.issues.push({ expected: "number", code: "invalid_type", input: n, inst: e, ...(s ? { received: s } : {}) }),
          o
        );
      });
  }),
  Xr = u("$ZodNumberFormat", (e, t) => {
    sr.init(e, t), st.init(e, t);
  }),
  Hr = u("$ZodBoolean", (e, t) => {
    g.init(e, t),
      (e._zod.pattern = Qo),
      (e._zod.parse = (o, r) => {
        if (t.coerce)
          try {
            o.value = Boolean(o.value);
          } catch (s) {}
        let n = o.value;
        if (typeof n === "boolean") return o;
        return o.issues.push({ expected: "boolean", code: "invalid_type", input: n, inst: e }), o;
      });
  }),
  Qr = u("$ZodBigInt", (e, t) => {
    g.init(e, t),
      (e._zod.pattern = Xo),
      (e._zod.parse = (o, r) => {
        if (t.coerce)
          try {
            o.value = BigInt(o.value);
          } catch (n) {}
        if (typeof o.value === "bigint") return o;
        return o.issues.push({ expected: "bigint", code: "invalid_type", input: o.value, inst: e }), o;
      });
  });
var tn = u("$ZodNull", (e, t) => {
    g.init(e, t),
      (e._zod.pattern = er),
      (e._zod.values = new Set([null])),
      (e._zod.parse = (o, r) => {
        let n = o.value;
        if (n === null) return o;
        return o.issues.push({ expected: "null", code: "invalid_type", input: n, inst: e }), o;
      });
  }),
  on = u("$ZodAny", (e, t) => {
    g.init(e, t), (e._zod.parse = (o) => o);
  }),
  rn = u("$ZodUnknown", (e, t) => {
    g.init(e, t), (e._zod.parse = (o) => o);
  }),
  sn = u("$ZodNever", (e, t) => {
    g.init(e, t),
      (e._zod.parse = (o, r) => (
        o.issues.push({ expected: "never", code: "invalid_type", input: o.value, inst: e }), o
      ));
  });
var cn = u("$ZodDate", (e, t) => {
  g.init(e, t),
    (e._zod.parse = (o, r) => {
      if (t.coerce)
        try {
          o.value = new Date(o.value);
        } catch (c) {}
      let n = o.value,
        s = n instanceof Date;
      if (s && !Number.isNaN(n.getTime())) return o;
      return (
        o.issues.push({
          expected: "date",
          code: "invalid_type",
          input: n,
          ...(s ? { received: "Invalid Date" } : {}),
          inst: e,
        }),
        o
      );
    });
});
function gr(e, t, o) {
  if (e.issues.length) t.issues.push(...M(o, e.issues));
  t.value[o] = e.value;
}
var an = u("$ZodArray", (e, t) => {
  g.init(e, t),
    (e._zod.parse = (o, r) => {
      let n = o.value;
      if (!Array.isArray(n)) return o.issues.push({ expected: "array", code: "invalid_type", input: n, inst: e }), o;
      o.value = Array(n.length);
      let s = [];
      for (let i = 0; i < n.length; i++) {
        let c = n[i],
          a = t.element._zod.run({ value: c, issues: [] }, r);
        if (a instanceof Promise) s.push(a.then((l) => gr(l, o, i)));
        else gr(a, o, i);
      }
      if (s.length) return Promise.all(s).then(() => o);
      return o;
    });
});
function Oe(e, t, o, r, n, s) {
  let i = o in r;
  if (e.issues.length) {
    if (n && s && !i) return;
    t.issues.push(...M(o, e.issues));
  }
  if (!i && !n) {
    if (!e.issues.length) t.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [o] });
    return;
  }
  if (e.value === void 0) {
    if (i) t.value[o] = void 0;
  } else t.value[o] = e.value;
}
function un(e) {
  let t = Object.keys(e.shape);
  for (let r of t)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw Error(`Invalid element at key "${r}": expected a Zod schema`);
  let o = Ve(e.shape);
  return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(o) };
}
function ln(e, t, o, r, n, s) {
  let i = [],
    c = n.keySet,
    a = n.catchall._zod,
    l = a.def.type,
    p = a.optin === "optional",
    m = a.optout === "optional";
  for (let h in t) {
    if (h === "__proto__") continue;
    if (c.has(h)) continue;
    if (l === "never") {
      i.push(h);
      continue;
    }
    let d = a.run({ value: t[h], issues: [] }, r);
    if (d instanceof Promise) e.push(d.then((x) => Oe(x, o, h, t, p, m)));
    else Oe(d, o, h, t, p, m);
  }
  if (i.length) o.issues.push({ code: "unrecognized_keys", keys: i, input: t, inst: s });
  if (!e.length) return o;
  return Promise.all(e).then(() => o);
}
var Yi = u("$ZodObject", (e, t) => {
    if ((g.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get)) {
      let c = t.shape;
      Object.defineProperty(t, "shape", {
        get: () => {
          let a = { ...c };
          return Object.defineProperty(t, "shape", { value: a }), a;
        },
      });
    }
    let r = Y(() => un(t));
    _(e._zod, "propValues", () => {
      let c = t.shape,
        a = {};
      for (let l in c) {
        let p = c[l]._zod;
        if (p.values) {
          a[l] ?? (a[l] = new Set());
          for (let m of p.values) a[l].add(m);
        }
      }
      return a;
    });
    let n = K,
      s = t.catchall,
      i;
    e._zod.parse = (c, a) => {
      i ?? (i = r.value);
      let l = c.value;
      if (!n(l)) return c.issues.push({ expected: "object", code: "invalid_type", input: l, inst: e }), c;
      c.value = {};
      let p = [],
        m = i.shape;
      for (let h of i.keys) {
        let d = m[h],
          x = d._zod.optin === "optional",
          oe = d._zod.optout === "optional",
          w = d._zod.run({ value: l[h], issues: [] }, a);
        if (w instanceof Promise) p.push(w.then((De) => Oe(De, c, h, l, x, oe)));
        else Oe(w, c, h, l, x, oe);
      }
      if (!s) return p.length ? Promise.all(p).then(() => c) : c;
      return ln(p, l, c, a, r.value, e);
    };
  }),
  pn = u("$ZodObjectJIT", (e, t) => {
    Yi.init(e, t);
    let o = e._zod.parse,
      r = Y(() => un(t)),
      n = (h) => {
        let d = new rt(["shape", "payload", "ctx"]),
          x = r.value,
          oe = (A) => {
            let k = ye(A);
            return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
          };
        d.write("const input = payload.value;");
        let w = Object.create(null),
          De = 0;
        for (let A of x.keys) w[A] = `key_${De++}`;
        d.write("const newResult = {};");
        for (let A of x.keys) {
          let k = w[A],
            Z = ye(A),
            so = h[A],
            io = so?._zod?.optin === "optional",
            zi = so?._zod?.optout === "optional";
          if ((d.write(`const ${k} = ${oe(A)};`), io && zi))
            d.write(`
        if (${k}.issues.length) {
          if (${Z} in input) {
            payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${Z}, ...iss.path] : [${Z}]
            })));
          }
        }
        
        if (${k}.value === undefined) {
          if (${Z} in input) {
            newResult[${Z}] = undefined;
          }
        } else {
          newResult[${Z}] = ${k}.value;
        }
        
      `);
          else if (!io)
            d.write(`
        const ${k}_present = ${Z} in input;
        if (${k}.issues.length) {
          payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Z}, ...iss.path] : [${Z}]
          })));
        }
        if (!${k}_present && !${k}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${Z}]
          });
        }

        if (${k}_present) {
          if (${k}.value === undefined) {
            newResult[${Z}] = undefined;
          } else {
            newResult[${Z}] = ${k}.value;
          }
        }

      `);
          else
            d.write(`
        if (${k}.issues.length) {
          payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Z}, ...iss.path] : [${Z}]
          })));
        }
        
        if (${k}.value === undefined) {
          if (${Z} in input) {
            newResult[${Z}] = undefined;
          }
        } else {
          newResult[${Z}] = ${k}.value;
        }
        
      `);
        }
        d.write("payload.value = newResult;"), d.write("return payload;");
        let _i = d.compile();
        return (A, k) => _i(h, A, k);
      },
      s,
      i = K,
      c = !G.jitless,
      l = c && qe.value,
      p = t.catchall,
      m;
    e._zod.parse = (h, d) => {
      m ?? (m = r.value);
      let x = h.value;
      if (!i(x)) return h.issues.push({ expected: "object", code: "invalid_type", input: x, inst: e }), h;
      if (c && l && d?.async === false && d.jitless !== true) {
        if (!s) s = n(t.shape);
        if (((h = s(h, d)), !p)) return h;
        return ln([], x, h, d, m, e);
      }
      return o(h, d);
    };
  });
function xr(e, t, o, r) {
  for (let s of e) if (s.issues.length === 0) return (t.value = s.value), t;
  let n = e.filter((s) => !q(s));
  if (n.length === 1) return (t.value = n[0].value), n[0];
  return (
    t.issues.push({
      code: "invalid_union",
      input: t.value,
      inst: o,
      errors: e.map((s) => s.issues.map((i) => j(i, r, T()))),
    }),
    t
  );
}
var it = u("$ZodUnion", (e, t) => {
  g.init(e, t),
    _(e._zod, "optin", () => (t.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0)),
    _(e._zod, "optout", () => (t.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0)),
    _(e._zod, "values", () => {
      if (t.options.every((r) => r._zod.values)) return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
      return;
    }),
    _(e._zod, "pattern", () => {
      if (t.options.every((r) => r._zod.pattern)) {
        let r = t.options.map((n) => n._zod.pattern);
        return new RegExp(`^(${r.map((n) => ce(n.source)).join("|")})$`);
      }
      return;
    });
  let o = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (r, n) => {
    if (o) return o(r, n);
    let s = false,
      i = [];
    for (let c of t.options) {
      let a = c._zod.run({ value: r.value, issues: [] }, n);
      if (a instanceof Promise) i.push(a), (s = true);
      else {
        if (a.issues.length === 0) return a;
        i.push(a);
      }
    }
    if (!s) return xr(i, r, e, n);
    return Promise.all(i).then((c) => xr(c, r, e, n));
  };
});
var mn = u("$ZodDiscriminatedUnion", (e, t) => {
    (t.inclusive = false), it.init(e, t);
    let o = e._zod.parse;
    _(e._zod, "propValues", () => {
      let n = {};
      for (let s of t.options) {
        let i = s._zod.propValues;
        if (!i || Object.keys(i).length === 0)
          throw Error(`Invalid discriminated union option at index "${t.options.indexOf(s)}"`);
        for (let [c, a] of Object.entries(i)) {
          if (!n[c]) n[c] = new Set();
          for (let l of a) n[c].add(l);
        }
      }
      return n;
    });
    let r = Y(() => {
      let n = t.options,
        s = new Map();
      for (let i of n) {
        let c = i._zod.propValues?.[t.discriminator];
        if (!c || c.size === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
        for (let a of c) {
          if (s.has(a)) throw Error(`Duplicate discriminator value "${String(a)}"`);
          s.set(a, i);
        }
      }
      return s;
    });
    e._zod.parse = (n, s) => {
      let i = n.value;
      if (!K(i)) return n.issues.push({ code: "invalid_type", expected: "object", input: i, inst: e }), n;
      let c = r.value.get(i?.[t.discriminator]);
      if (c) return c._zod.run(n, s);
      if (t.unionFallback || s.direction === "backward") return o(n, s);
      return (
        n.issues.push({
          code: "invalid_union",
          errors: [],
          note: "No matching discriminator",
          discriminator: t.discriminator,
          options: Array.from(r.value.keys()),
          input: i,
          path: [t.discriminator],
          inst: e,
        }),
        n
      );
    };
  }),
  dn = u("$ZodIntersection", (e, t) => {
    g.init(e, t),
      (e._zod.parse = (o, r) => {
        let n = o.value,
          s = t.left._zod.run({ value: n, issues: [] }, r),
          i = t.right._zod.run({ value: n, issues: [] }, r);
        if (s instanceof Promise || i instanceof Promise) return Promise.all([s, i]).then(([a, l]) => br(o, a, l));
        return br(o, s, i);
      });
  });
function nt(e, t) {
  if (e === t) return { valid: true, data: e };
  if (e instanceof Date && t instanceof Date && +e === +t) return { valid: true, data: e };
  if (J(e) && J(t)) {
    let o = Object.keys(t),
      r = Object.keys(e).filter((s) => o.indexOf(s) !== -1),
      n = { ...e, ...t };
    for (let s of r) {
      let i = nt(e[s], t[s]);
      if (!i.valid) return { valid: false, mergeErrorPath: [s, ...i.mergeErrorPath] };
      n[s] = i.data;
    }
    return { valid: true, data: n };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: false, mergeErrorPath: [] };
    let o = [];
    for (let r = 0; r < e.length; r++) {
      let n = e[r],
        s = t[r],
        i = nt(n, s);
      if (!i.valid) return { valid: false, mergeErrorPath: [r, ...i.mergeErrorPath] };
      o.push(i.data);
    }
    return { valid: true, data: o };
  }
  return { valid: false, mergeErrorPath: [] };
}
function br(e, t, o) {
  let r = new Map(),
    n;
  for (let c of t.issues)
    if (c.code === "unrecognized_keys") {
      n ?? (n = c);
      for (let a of c.keys) {
        if (!r.has(a)) r.set(a, {});
        r.get(a).l = true;
      }
    } else e.issues.push(c);
  for (let c of o.issues)
    if (c.code === "unrecognized_keys")
      for (let a of c.keys) {
        if (!r.has(a)) r.set(a, {});
        r.get(a).r = true;
      }
    else e.issues.push(c);
  let s = [...r].filter(([, c]) => c.l && c.r).map(([c]) => c);
  if (s.length && n) e.issues.push({ ...n, keys: s });
  if (q(e)) return e;
  let i = nt(t.value, o.value);
  if (!i.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return (e.value = i.data), e;
}
var fn = u("$ZodRecord", (e, t) => {
  g.init(e, t),
    (e._zod.parse = (o, r) => {
      let n = o.value;
      if (!J(n)) return o.issues.push({ expected: "record", code: "invalid_type", input: n, inst: e }), o;
      let s = [],
        i = t.keyType._zod.values;
      if (i) {
        o.value = {};
        let c = new Set();
        for (let l of i)
          if (typeof l === "string" || typeof l === "number" || typeof l === "symbol") {
            c.add(typeof l === "number" ? l.toString() : l);
            let p = t.keyType._zod.run({ value: l, issues: [] }, r);
            if (p instanceof Promise) throw Error("Async schemas not supported in object keys currently");
            if (p.issues.length) {
              o.issues.push({
                code: "invalid_key",
                origin: "record",
                issues: p.issues.map((d) => j(d, r, T())),
                input: l,
                path: [l],
                inst: e,
              });
              continue;
            }
            let m = p.value,
              h = t.valueType._zod.run({ value: n[l], issues: [] }, r);
            if (h instanceof Promise)
              s.push(
                h.then((d) => {
                  if (d.issues.length) o.issues.push(...M(l, d.issues));
                  o.value[m] = d.value;
                }),
              );
            else {
              if (h.issues.length) o.issues.push(...M(l, h.issues));
              o.value[m] = h.value;
            }
          }
        let a;
        for (let l in n) if (!c.has(l)) (a = a ?? []), a.push(l);
        if (a && a.length > 0) o.issues.push({ code: "unrecognized_keys", input: n, inst: e, keys: a });
      } else {
        o.value = {};
        for (let c of Reflect.ownKeys(n)) {
          if (c === "__proto__") continue;
          if (!Object.prototype.propertyIsEnumerable.call(n, c)) continue;
          let a = t.keyType._zod.run({ value: c, issues: [] }, r);
          if (a instanceof Promise) throw Error("Async schemas not supported in object keys currently");
          if (typeof c === "string" && Ze.test(c) && a.issues.length) {
            let m = t.keyType._zod.run({ value: Number(c), issues: [] }, r);
            if (m instanceof Promise) throw Error("Async schemas not supported in object keys currently");
            if (m.issues.length === 0) a = m;
          }
          if (a.issues.length) {
            if (t.mode === "loose") o.value[c] = n[c];
            else
              o.issues.push({
                code: "invalid_key",
                origin: "record",
                issues: a.issues.map((m) => j(m, r, T())),
                input: c,
                path: [c],
                inst: e,
              });
            continue;
          }
          let p = t.valueType._zod.run({ value: n[c], issues: [] }, r);
          if (p instanceof Promise)
            s.push(
              p.then((m) => {
                if (m.issues.length) o.issues.push(...M(c, m.issues));
                o.value[a.value] = m.value;
              }),
            );
          else {
            if (p.issues.length) o.issues.push(...M(c, p.issues));
            o.value[a.value] = p.value;
          }
        }
      }
      if (s.length) return Promise.all(s).then(() => o);
      return o;
    });
});
var hn = u("$ZodEnum", (e, t) => {
    g.init(e, t);
    let o = se(t.entries),
      r = new Set(o);
    (e._zod.values = r),
      (e._zod.pattern = new RegExp(
        `^(${o
          .filter((n) => Be.has(typeof n))
          .map((n) => (typeof n === "string" ? D(n) : n.toString()))
          .join("|")})$`,
      )),
      (e._zod.parse = (n, s) => {
        let i = n.value;
        if (r.has(i)) return n;
        return n.issues.push({ code: "invalid_value", values: o, input: i, inst: e }), n;
      });
  }),
  _n = u("$ZodLiteral", (e, t) => {
    if ((g.init(e, t), t.values.length === 0)) throw Error("Cannot create literal schema with no valid values");
    let o = new Set(t.values);
    (e._zod.values = o),
      (e._zod.pattern = new RegExp(
        `^(${t.values.map((r) => (typeof r === "string" ? D(r) : r ? D(r.toString()) : String(r))).join("|")})$`,
      )),
      (e._zod.parse = (r, n) => {
        let s = r.value;
        if (o.has(s)) return r;
        return r.issues.push({ code: "invalid_value", values: t.values, input: s, inst: e }), r;
      });
  });
var zn = u("$ZodTransform", (e, t) => {
  g.init(e, t),
    (e._zod.optin = "optional"),
    (e._zod.parse = (o, r) => {
      if (r.direction === "backward") throw new re(e.constructor.name);
      let n = t.transform(o.value, o);
      if (r.async)
        return (n instanceof Promise ? n : Promise.resolve(n)).then((i) => ((o.value = i), (o.fallback = true), o));
      if (n instanceof Promise) throw new C();
      return (o.value = n), (o.fallback = true), o;
    });
});
function yr(e, t) {
  if (t === void 0 && (e.issues.length || e.fallback)) return { issues: [], value: void 0 };
  return e;
}
var ct = u("$ZodOptional", (e, t) => {
    g.init(e, t),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      _(e._zod, "values", () => (t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0)),
      _(e._zod, "pattern", () => {
        let o = t.innerType._zod.pattern;
        return o ? new RegExp(`^(${ce(o.source)})?$`) : void 0;
      }),
      (e._zod.parse = (o, r) => {
        if (t.innerType._zod.optin === "optional") {
          let n = o.value,
            s = t.innerType._zod.run(o, r);
          if (s instanceof Promise) return s.then((i) => yr(i, n));
          return yr(s, n);
        }
        if (o.value === void 0) return o;
        return t.innerType._zod.run(o, r);
      });
  }),
  gn = u("$ZodExactOptional", (e, t) => {
    ct.init(e, t),
      _(e._zod, "values", () => t.innerType._zod.values),
      _(e._zod, "pattern", () => t.innerType._zod.pattern),
      (e._zod.parse = (o, r) => t.innerType._zod.run(o, r));
  }),
  xn = u("$ZodNullable", (e, t) => {
    g.init(e, t),
      _(e._zod, "optin", () => t.innerType._zod.optin),
      _(e._zod, "optout", () => t.innerType._zod.optout),
      _(e._zod, "pattern", () => {
        let o = t.innerType._zod.pattern;
        return o ? new RegExp(`^(${ce(o.source)}|null)$`) : void 0;
      }),
      _(e._zod, "values", () => (t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0)),
      (e._zod.parse = (o, r) => {
        if (o.value === null) return o;
        return t.innerType._zod.run(o, r);
      });
  }),
  bn = u("$ZodDefault", (e, t) => {
    g.init(e, t),
      (e._zod.optin = "optional"),
      _(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (o, r) => {
        if (r.direction === "backward") return t.innerType._zod.run(o, r);
        if (o.value === void 0) return (o.value = t.defaultValue), o;
        let n = t.innerType._zod.run(o, r);
        if (n instanceof Promise) return n.then((s) => vr(s, t));
        return vr(n, t);
      });
  });
function vr(e, t) {
  if (e.value === void 0) e.value = t.defaultValue;
  return e;
}
var yn = u("$ZodPrefault", (e, t) => {
    g.init(e, t),
      (e._zod.optin = "optional"),
      _(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (o, r) => {
        if (r.direction === "backward") return t.innerType._zod.run(o, r);
        if (o.value === void 0) o.value = t.defaultValue;
        return t.innerType._zod.run(o, r);
      });
  }),
  vn = u("$ZodNonOptional", (e, t) => {
    g.init(e, t),
      _(e._zod, "values", () => {
        let o = t.innerType._zod.values;
        return o ? new Set([...o].filter((r) => r !== void 0)) : void 0;
      }),
      (e._zod.parse = (o, r) => {
        let n = t.innerType._zod.run(o, r);
        if (n instanceof Promise) return n.then((s) => $r(s, e));
        return $r(n, e);
      });
  });
function $r(e, t) {
  if (!e.issues.length && e.value === void 0)
    e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t });
  return e;
}
var $n = u("$ZodCatch", (e, t) => {
  g.init(e, t),
    (e._zod.optin = "optional"),
    _(e._zod, "optout", () => t.innerType._zod.optout),
    _(e._zod, "values", () => t.innerType._zod.values),
    (e._zod.parse = (o, r) => {
      if (r.direction === "backward") return t.innerType._zod.run(o, r);
      let n = t.innerType._zod.run(o, r);
      if (n instanceof Promise)
        return n.then((s) => {
          if (((o.value = s.value), s.issues.length))
            (o.value = t.catchValue({ ...o, error: { issues: s.issues.map((i) => j(i, r, T())) }, input: o.value })),
              (o.issues = []),
              (o.fallback = true);
          return o;
        });
      if (((o.value = n.value), n.issues.length))
        (o.value = t.catchValue({ ...o, error: { issues: n.issues.map((s) => j(s, r, T())) }, input: o.value })),
          (o.issues = []),
          (o.fallback = true);
      return o;
    });
});
var at = u("$ZodPipe", (e, t) => {
  g.init(e, t),
    _(e._zod, "values", () => t.in._zod.values),
    _(e._zod, "optin", () => t.in._zod.optin),
    _(e._zod, "optout", () => t.out._zod.optout),
    _(e._zod, "propValues", () => t.in._zod.propValues),
    (e._zod.parse = (o, r) => {
      if (r.direction === "backward") {
        let s = t.out._zod.run(o, r);
        if (s instanceof Promise) return s.then((i) => Pe(i, t.in, r));
        return Pe(s, t.in, r);
      }
      let n = t.in._zod.run(o, r);
      if (n instanceof Promise) return n.then((s) => Pe(s, t.out, r));
      return Pe(n, t.out, r);
    });
});
function Pe(e, t, o) {
  if (e.issues.length) return (e.aborted = true), e;
  return t._zod.run({ value: e.value, issues: e.issues, fallback: e.fallback }, o);
}
var Sn = u("$ZodPreprocess", (e, t) => {
    at.init(e, t);
  }),
  kn = u("$ZodReadonly", (e, t) => {
    g.init(e, t),
      _(e._zod, "propValues", () => t.innerType._zod.propValues),
      _(e._zod, "values", () => t.innerType._zod.values),
      _(e._zod, "optin", () => t.innerType?._zod?.optin),
      _(e._zod, "optout", () => t.innerType?._zod?.optout),
      (e._zod.parse = (o, r) => {
        if (r.direction === "backward") return t.innerType._zod.run(o, r);
        let n = t.innerType._zod.run(o, r);
        if (n instanceof Promise) return n.then(Sr);
        return Sr(n);
      });
  });
function Sr(e) {
  return (e.value = Object.freeze(e.value)), e;
}
var wn = u("$ZodLazy", (e, t) => {
    g.init(e, t),
      _(e._zod, "innerType", () => {
        let o = t;
        if (!o._cachedInner) o._cachedInner = t.getter();
        return o._cachedInner;
      }),
      _(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern),
      _(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues),
      _(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0),
      _(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0),
      (e._zod.parse = (o, r) => e._zod.innerType._zod.run(o, r));
  }),
  Zn = u("$ZodCustom", (e, t) => {
    P.init(e, t),
      g.init(e, t),
      (e._zod.parse = (o, r) => o),
      (e._zod.check = (o) => {
        let r = o.value,
          n = t.fn(r);
        if (n instanceof Promise) return n.then((s) => kr(s, o, r, e));
        kr(n, o, r, e);
        return;
      });
  });
function kr(e, t, o, r) {
  if (!e) {
    let n = { code: "custom", input: o, inst: r, path: [...(r._zod.def.path ?? [])], continue: !r._zod.def.abort };
    if (r._zod.def.params) n.params = r._zod.def.params;
    t.issues.push(X(n));
  }
}
var Xi = () => {
  let e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" },
  };
  function t(n) {
    return e[n] ?? null;
  }
  let o = {
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
    r = { nan: "NaN" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let s = r[n.expected] ?? n.expected,
          i = We(n.input),
          c = r[i] ?? i;
        return `Invalid input: expected ${s}, received ${c}`;
      }
      case "invalid_value":
        if (n.values.length === 1) return `Invalid input: expected ${$e(n.values[0])}`;
        return `Invalid option: expected one of ${be(n.values, "|")}`;
      case "too_big": {
        let s = n.inclusive ? "<=" : "<",
          i = t(n.origin);
        if (i)
          return `Too big: expected ${n.origin ?? "value"} to have ${s}${n.maximum.toString()} ${i.unit ?? "elements"}`;
        return `Too big: expected ${n.origin ?? "value"} to be ${s}${n.maximum.toString()}`;
      }
      case "too_small": {
        let s = n.inclusive ? ">=" : ">",
          i = t(n.origin);
        if (i) return `Too small: expected ${n.origin} to have ${s}${n.minimum.toString()} ${i.unit}`;
        return `Too small: expected ${n.origin} to be ${s}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let s = n;
        if (s.format === "starts_with") return `Invalid string: must start with "${s.prefix}"`;
        if (s.format === "ends_with") return `Invalid string: must end with "${s.suffix}"`;
        if (s.format === "includes") return `Invalid string: must include "${s.includes}"`;
        if (s.format === "regex") return `Invalid string: must match pattern ${s.pattern}`;
        return `Invalid ${o[s.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${n.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${n.keys.length > 1 ? "s" : ""}: ${be(n.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${n.origin}`;
      case "invalid_union":
        if (n.options && Array.isArray(n.options) && n.options.length > 0)
          return `Invalid discriminator value. Expected ${n.options.map((i) => `'${i}'`).join(" | ")}`;
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${n.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function ut() {
  return { localeError: Xi() };
}
var Pn,
  Hi = Symbol("ZodOutput"),
  Qi = Symbol("ZodInput");
class On {
  constructor() {
    (this._map = new WeakMap()), (this._idmap = new Map());
  }
  add(e, ...t) {
    let o = t[0];
    if ((this._map.set(e, o), o && typeof o === "object" && "id" in o)) this._idmap.set(o.id, e);
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
      let o = { ...(this.get(t) ?? {}) };
      delete o.id;
      let r = { ...o, ...this._map.get(e) };
      return Object.keys(r).length ? r : void 0;
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
}
function En() {
  return new On();
}
(Pn = globalThis).__zod_globalRegistry ?? (Pn.__zod_globalRegistry = En());
var B = globalThis.__zod_globalRegistry;
function Tn(e, t) {
  return new e({ type: "string", ...f(t) });
}
function In(e, t) {
  return new e({ type: "string", coerce: true, ...f(t) });
}
function pt(e, t) {
  return new e({ type: "string", format: "email", check: "string_format", abort: false, ...f(t) });
}
function mt(e, t) {
  return new e({ type: "string", format: "guid", check: "string_format", abort: false, ...f(t) });
}
function Rn(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, ...f(t) });
}
function jn(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...f(t) });
}
function Nn(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...f(t) });
}
function An(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...f(t) });
}
function dt(e, t) {
  return new e({ type: "string", format: "url", check: "string_format", abort: false, ...f(t) });
}
function Cn(e, t) {
  return new e({ type: "string", format: "emoji", check: "string_format", abort: false, ...f(t) });
}
function Ln(e, t) {
  return new e({ type: "string", format: "nanoid", check: "string_format", abort: false, ...f(t) });
}
function Dn(e, t) {
  return new e({ type: "string", format: "cuid", check: "string_format", abort: false, ...f(t) });
}
function Mn(e, t) {
  return new e({ type: "string", format: "cuid2", check: "string_format", abort: false, ...f(t) });
}
function Un(e, t) {
  return new e({ type: "string", format: "ulid", check: "string_format", abort: false, ...f(t) });
}
function Fn(e, t) {
  return new e({ type: "string", format: "xid", check: "string_format", abort: false, ...f(t) });
}
function Jn(e, t) {
  return new e({ type: "string", format: "ksuid", check: "string_format", abort: false, ...f(t) });
}
function qn(e, t) {
  return new e({ type: "string", format: "ipv4", check: "string_format", abort: false, ...f(t) });
}
function Bn(e, t) {
  return new e({ type: "string", format: "ipv6", check: "string_format", abort: false, ...f(t) });
}
function Vn(e, t) {
  return new e({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...f(t) });
}
function Kn(e, t) {
  return new e({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...f(t) });
}
function Gn(e, t) {
  return new e({ type: "string", format: "base64", check: "string_format", abort: false, ...f(t) });
}
function Wn(e, t) {
  return new e({ type: "string", format: "base64url", check: "string_format", abort: false, ...f(t) });
}
function Yn(e, t) {
  return new e({ type: "string", format: "e164", check: "string_format", abort: false, ...f(t) });
}
function Xn(e, t) {
  return new e({ type: "string", format: "jwt", check: "string_format", abort: false, ...f(t) });
}
function Hn(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...f(t),
  });
}
function Qn(e, t) {
  return new e({ type: "string", format: "date", check: "string_format", ...f(t) });
}
function es(e, t) {
  return new e({ type: "string", format: "time", check: "string_format", precision: null, ...f(t) });
}
function ts(e, t) {
  return new e({ type: "string", format: "duration", check: "string_format", ...f(t) });
}
function os(e, t) {
  return new e({ type: "number", checks: [], ...f(t) });
}
function rs(e, t) {
  return new e({ type: "number", coerce: true, checks: [], ...f(t) });
}
function ns(e, t) {
  return new e({ type: "number", check: "number_format", abort: false, format: "safeint", ...f(t) });
}
function ss(e, t) {
  return new e({ type: "boolean", ...f(t) });
}
function is(e, t) {
  return new e({ type: "boolean", coerce: true, ...f(t) });
}
function cs(e, t) {
  return new e({ type: "bigint", coerce: true, ...f(t) });
}
function as(e, t) {
  return new e({ type: "null", ...f(t) });
}
function us(e) {
  return new e({ type: "any" });
}
function ls(e) {
  return new e({ type: "unknown" });
}
function ps(e, t) {
  return new e({ type: "never", ...f(t) });
}
function ms(e, t) {
  return new e({ type: "date", coerce: true, ...f(t) });
}
function H(e, t) {
  return new tt({ check: "less_than", ...f(t), value: e, inclusive: false });
}
function U(e, t) {
  return new tt({ check: "less_than", ...f(t), value: e, inclusive: true });
}
function Q(e, t) {
  return new ot({ check: "greater_than", ...f(t), value: e, inclusive: false });
}
function N(e, t) {
  return new ot({ check: "greater_than", ...f(t), value: e, inclusive: true });
}
function fe(e, t) {
  return new nr({ check: "multiple_of", ...f(t), value: e });
}
function Te(e, t) {
  return new ir({ check: "max_length", ...f(t), maximum: e });
}
function ee(e, t) {
  return new cr({ check: "min_length", ...f(t), minimum: e });
}
function Ie(e, t) {
  return new ar({ check: "length_equals", ...f(t), length: e });
}
function ft(e, t) {
  return new ur({ check: "string_format", format: "regex", ...f(t), pattern: e });
}
function ht(e) {
  return new lr({ check: "string_format", format: "lowercase", ...f(e) });
}
function _t(e) {
  return new pr({ check: "string_format", format: "uppercase", ...f(e) });
}
function zt(e, t) {
  return new mr({ check: "string_format", format: "includes", ...f(t), includes: e });
}
function gt(e, t) {
  return new dr({ check: "string_format", format: "starts_with", ...f(t), prefix: e });
}
function xt(e, t) {
  return new fr({ check: "string_format", format: "ends_with", ...f(t), suffix: e });
}
function V(e) {
  return new hr({ check: "overwrite", tx: e });
}
function bt(e) {
  return V((t) => t.normalize(e));
}
function yt() {
  return V((e) => e.trim());
}
function vt() {
  return V((e) => e.toLowerCase());
}
function $t() {
  return V((e) => e.toUpperCase());
}
function St() {
  return V((e) => Je(e));
}
function ds(e, t, o) {
  return new e({ type: "array", element: t, ...f(o) });
}
function fs(e, t, o) {
  return new e({ type: "custom", check: "custom", fn: t, ...f(o) });
}
function hs(e, t) {
  let o = ec(
    (r) => (
      (r.addIssue = (n) => {
        if (typeof n === "string") r.issues.push(X(n, r.value, o._zod.def));
        else {
          let s = n;
          if (s.fatal) s.continue = false;
          s.code ?? (s.code = "custom"),
            s.input ?? (s.input = r.value),
            s.inst ?? (s.inst = o),
            s.continue ?? (s.continue = !o._zod.def.abort),
            r.issues.push(X(s));
        }
      }),
      e(r.value, r)
    ),
    t,
  );
  return o;
}
function ec(e, t) {
  let o = new P({ check: "custom", ...f(t) });
  return (o._zod.check = e), o;
}
function _e(e) {
  let t = e?.target ?? "draft-2020-12";
  if (t === "draft-4") t = "draft-04";
  if (t === "draft-7") t = "draft-07";
  return {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? B,
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
function y(e, t, o = { path: [], schemaPath: [] }) {
  var r;
  let n = e._zod.def,
    s = t.seen.get(e);
  if (s) {
    if ((s.count++, o.schemaPath.includes(e))) s.cycle = o.path;
    return s.schema;
  }
  let i = { schema: {}, count: 1, cycle: void 0, path: o.path };
  t.seen.set(e, i);
  let c = e._zod.toJSONSchema?.();
  if (c) i.schema = c;
  else {
    let p = { ...o, schemaPath: [...o.schemaPath, e], path: o.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, i.schema, p);
    else {
      let h = i.schema,
        d = t.processors[n.type];
      if (!d) throw Error(`[toJSONSchema]: Non-representable type encountered: ${n.type}`);
      d(e, t, h, p);
    }
    let m = e._zod.parent;
    if (m) {
      if (!i.ref) i.ref = m;
      y(m, t, p), (t.seen.get(m).isParent = true);
    }
  }
  let a = t.metadataRegistry.get(e);
  if (a) Object.assign(i.schema, a);
  if (t.io === "input" && E(e)) delete i.schema.examples, delete i.schema.default;
  if (t.io === "input" && "_prefault" in i.schema) (r = i.schema).default ?? (r.default = i.schema._prefault);
  return delete i.schema._prefault, t.seen.get(e).schema;
}
function ze(e, t) {
  let o = e.seen.get(t);
  if (!o) throw Error("Unprocessed schema. This is a bug in Zod.");
  let r = new Map();
  for (let i of e.seen.entries()) {
    let c = e.metadataRegistry.get(i[0])?.id;
    if (c) {
      let a = r.get(c);
      if (a && a !== i[0])
        throw Error(
          `Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
        );
      r.set(c, i[0]);
    }
  }
  let n = (i) => {
      let c = e.target === "draft-2020-12" ? "$defs" : "definitions";
      if (e.external) {
        let m = e.external.registry.get(i[0])?.id,
          h = e.external.uri ?? ((x) => x);
        if (m) return { ref: h(m) };
        let d = i[1].defId ?? i[1].schema.id ?? `schema${e.counter++}`;
        return (i[1].defId = d), { defId: d, ref: `${h("__shared")}#/${c}/${d}` };
      }
      if (i[1] === o) return { ref: "#" };
      let l = `${"#"}/${c}/`,
        p = i[1].schema.id ?? `__schema${e.counter++}`;
      return { defId: p, ref: l + p };
    },
    s = (i) => {
      if (i[1].schema.$ref) return;
      let c = i[1],
        { ref: a, defId: l } = n(i);
      if (((c.def = { ...c.schema }), l)) c.defId = l;
      let p = c.schema;
      for (let m in p) delete p[m];
      p.$ref = a;
    };
  if (e.cycles === "throw")
    for (let i of e.seen.entries()) {
      let c = i[1];
      if (c.cycle)
        throw Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let i of e.seen.entries()) {
    let c = i[1];
    if (t === i[0]) {
      s(i);
      continue;
    }
    if (e.external) {
      let l = e.external.registry.get(i[0])?.id;
      if (t !== i[0] && l) {
        s(i);
        continue;
      }
    }
    if (e.metadataRegistry.get(i[0])?.id) {
      s(i);
      continue;
    }
    if (c.cycle) {
      s(i);
      continue;
    }
    if (c.count > 1) {
      if (e.reused === "ref") {
        s(i);
        continue;
      }
    }
  }
}
function ge(e, t) {
  let o = e.seen.get(t);
  if (!o) throw Error("Unprocessed schema. This is a bug in Zod.");
  let r = (c) => {
    let a = e.seen.get(c);
    if (a.ref === null) return;
    let l = a.def ?? a.schema,
      p = { ...l },
      m = a.ref;
    if (((a.ref = null), m)) {
      r(m);
      let d = e.seen.get(m),
        x = d.schema;
      if (x.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0"))
        (l.allOf = l.allOf ?? []), l.allOf.push(x);
      else Object.assign(l, x);
      if ((Object.assign(l, p), c._zod.parent === m))
        for (let w in l) {
          if (w === "$ref" || w === "allOf") continue;
          if (!(w in p)) delete l[w];
        }
      if (x.$ref && d.def)
        for (let w in l) {
          if (w === "$ref" || w === "allOf") continue;
          if (w in d.def && JSON.stringify(l[w]) === JSON.stringify(d.def[w])) delete l[w];
        }
    }
    let h = c._zod.parent;
    if (h && h !== m) {
      r(h);
      let d = e.seen.get(h);
      if (d?.schema.$ref) {
        if (((l.$ref = d.schema.$ref), d.def))
          for (let x in l) {
            if (x === "$ref" || x === "allOf") continue;
            if (x in d.def && JSON.stringify(l[x]) === JSON.stringify(d.def[x])) delete l[x];
          }
      }
    }
    e.override({ zodSchema: c, jsonSchema: l, path: a.path ?? [] });
  };
  for (let c of [...e.seen.entries()].reverse()) r(c[0]);
  let n = {};
  if (e.target === "draft-2020-12") n.$schema = "https://json-schema.org/draft/2020-12/schema";
  else if (e.target === "draft-07") n.$schema = "http://json-schema.org/draft-07/schema#";
  else if (e.target === "draft-04") n.$schema = "http://json-schema.org/draft-04/schema#";
  else if (e.target === "openapi-3.0");
  if (e.external?.uri) {
    let c = e.external.registry.get(t)?.id;
    if (!c) throw Error("Schema is missing an `id` property");
    n.$id = e.external.uri(c);
  }
  Object.assign(n, o.def ?? o.schema);
  let s = e.metadataRegistry.get(t)?.id;
  if (s !== void 0 && n.id === s) delete n.id;
  let i = e.external?.defs ?? {};
  for (let c of e.seen.entries()) {
    let a = c[1];
    if (a.def && a.defId) {
      if (a.def.id === a.defId) delete a.def.id;
      i[a.defId] = a.def;
    }
  }
  if (e.external);
  else if (Object.keys(i).length > 0)
    if (e.target === "draft-2020-12") n.$defs = i;
    else n.definitions = i;
  try {
    let c = JSON.parse(JSON.stringify(n));
    return (
      Object.defineProperty(c, "~standard", {
        value: {
          ...t["~standard"],
          jsonSchema: { input: he(t, "input", e.processors), output: he(t, "output", e.processors) },
        },
        enumerable: false,
        writable: false,
      }),
      c
    );
  } catch (c) {
    throw Error("Error converting schema to JSON.");
  }
}
function E(e, t) {
  let o = t ?? { seen: new Set() };
  if (o.seen.has(e)) return false;
  o.seen.add(e);
  let r = e._zod.def;
  if (r.type === "transform") return true;
  if (r.type === "array") return E(r.element, o);
  if (r.type === "set") return E(r.valueType, o);
  if (r.type === "lazy") return E(r.getter(), o);
  if (
    r.type === "promise" ||
    r.type === "optional" ||
    r.type === "nonoptional" ||
    r.type === "nullable" ||
    r.type === "readonly" ||
    r.type === "default" ||
    r.type === "prefault"
  )
    return E(r.innerType, o);
  if (r.type === "intersection") return E(r.left, o) || E(r.right, o);
  if (r.type === "record" || r.type === "map") return E(r.keyType, o) || E(r.valueType, o);
  if (r.type === "pipe") {
    if (e._zod.traits.has("$ZodCodec")) return true;
    return E(r.in, o) || E(r.out, o);
  }
  if (r.type === "object") {
    for (let n in r.shape) if (E(r.shape[n], o)) return true;
    return false;
  }
  if (r.type === "union") {
    for (let n of r.options) if (E(n, o)) return true;
    return false;
  }
  if (r.type === "tuple") {
    for (let n of r.items) if (E(n, o)) return true;
    if (r.rest && E(r.rest, o)) return true;
    return false;
  }
  return false;
}
var _s =
    (e, t = {}) =>
    (o) => {
      let r = _e({ ...o, processors: t });
      return y(e, r), ze(r, e), ge(r, e);
    },
  he =
    (e, t, o = {}) =>
    (r) => {
      let { libraryOptions: n, target: s } = r ?? {},
        i = _e({ ...(n ?? {}), target: s, io: t, processors: o });
      return y(e, i), ze(i, e), ge(i, e);
    };
var tc = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
  kt = (e, t, o, r) => {
    let n = o;
    n.type = "string";
    let { minimum: s, maximum: i, format: c, patterns: a, contentEncoding: l } = e._zod.bag;
    if (typeof s === "number") n.minLength = s;
    if (typeof i === "number") n.maxLength = i;
    if (c) {
      if (((n.format = tc[c] ?? c), n.format === "")) delete n.format;
      if (c === "time") delete n.format;
    }
    if (l) n.contentEncoding = l;
    if (a && a.size > 0) {
      let p = [...a];
      if (p.length === 1) n.pattern = p[0].source;
      else if (p.length > 1)
        n.allOf = [
          ...p.map((m) => ({
            ...(t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0"
              ? { type: "string" }
              : {}),
            pattern: m.source,
          })),
        ];
    }
  },
  wt = (e, t, o, r) => {
    let n = o,
      { minimum: s, maximum: i, format: c, multipleOf: a, exclusiveMaximum: l, exclusiveMinimum: p } = e._zod.bag;
    if (typeof c === "string" && c.includes("int")) n.type = "integer";
    else n.type = "number";
    let m = typeof p === "number" && p >= (s ?? Number.NEGATIVE_INFINITY),
      h = typeof l === "number" && l <= (i ?? Number.POSITIVE_INFINITY),
      d = t.target === "draft-04" || t.target === "openapi-3.0";
    if (m)
      if (d) (n.minimum = p), (n.exclusiveMinimum = true);
      else n.exclusiveMinimum = p;
    else if (typeof s === "number") n.minimum = s;
    if (h)
      if (d) (n.maximum = l), (n.exclusiveMaximum = true);
      else n.exclusiveMaximum = l;
    else if (typeof i === "number") n.maximum = i;
    if (typeof a === "number") n.multipleOf = a;
  },
  Zt = (e, t, o, r) => {
    o.type = "boolean";
  },
  Pt = (e, t, o, r) => {
    if (t.unrepresentable === "throw") throw Error("BigInt cannot be represented in JSON Schema");
  },
  gs = (e, t, o, r) => {
    if (t.unrepresentable === "throw") throw Error("Symbols cannot be represented in JSON Schema");
  },
  Ot = (e, t, o, r) => {
    if (t.target === "openapi-3.0") (o.type = "string"), (o.nullable = true), (o.enum = [null]);
    else o.type = "null";
  },
  xs = (e, t, o, r) => {
    if (t.unrepresentable === "throw") throw Error("Undefined cannot be represented in JSON Schema");
  },
  bs = (e, t, o, r) => {
    if (t.unrepresentable === "throw") throw Error("Void cannot be represented in JSON Schema");
  },
  Et = (e, t, o, r) => {
    o.not = {};
  },
  Tt = (e, t, o, r) => {},
  It = (e, t, o, r) => {},
  Rt = (e, t, o, r) => {
    if (t.unrepresentable === "throw") throw Error("Date cannot be represented in JSON Schema");
  },
  jt = (e, t, o, r) => {
    let n = e._zod.def,
      s = se(n.entries);
    if (s.every((i) => typeof i === "number")) o.type = "number";
    if (s.every((i) => typeof i === "string")) o.type = "string";
    o.enum = s;
  },
  Nt = (e, t, o, r) => {
    let n = e._zod.def,
      s = [];
    for (let i of n.values)
      if (i === void 0) {
        if (t.unrepresentable === "throw") throw Error("Literal `undefined` cannot be represented in JSON Schema");
      } else if (typeof i === "bigint")
        if (t.unrepresentable === "throw") throw Error("BigInt literals cannot be represented in JSON Schema");
        else s.push(Number(i));
      else s.push(i);
    if (s.length === 0);
    else if (s.length === 1) {
      let i = s[0];
      if (((o.type = i === null ? "null" : typeof i), t.target === "draft-04" || t.target === "openapi-3.0"))
        o.enum = [i];
      else o.const = i;
    } else {
      if (s.every((i) => typeof i === "number")) o.type = "number";
      if (s.every((i) => typeof i === "string")) o.type = "string";
      if (s.every((i) => typeof i === "boolean")) o.type = "boolean";
      if (s.every((i) => i === null)) o.type = "null";
      o.enum = s;
    }
  },
  ys = (e, t, o, r) => {
    if (t.unrepresentable === "throw") throw Error("NaN cannot be represented in JSON Schema");
  },
  vs = (e, t, o, r) => {
    let n = o,
      s = e._zod.pattern;
    if (!s) throw Error("Pattern not found in template literal");
    (n.type = "string"), (n.pattern = s.source);
  },
  $s = (e, t, o, r) => {
    let n = o,
      s = { type: "string", format: "binary", contentEncoding: "binary" },
      { minimum: i, maximum: c, mime: a } = e._zod.bag;
    if (i !== void 0) s.minLength = i;
    if (c !== void 0) s.maxLength = c;
    if (a)
      if (a.length === 1) (s.contentMediaType = a[0]), Object.assign(n, s);
      else Object.assign(n, s), (n.anyOf = a.map((l) => ({ contentMediaType: l })));
    else Object.assign(n, s);
  },
  Ss = (e, t, o, r) => {
    o.type = "boolean";
  },
  At = (e, t, o, r) => {
    if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
  },
  ks = (e, t, o, r) => {
    if (t.unrepresentable === "throw") throw Error("Function types cannot be represented in JSON Schema");
  },
  Ct = (e, t, o, r) => {
    if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
  },
  ws = (e, t, o, r) => {
    if (t.unrepresentable === "throw") throw Error("Map cannot be represented in JSON Schema");
  },
  Zs = (e, t, o, r) => {
    if (t.unrepresentable === "throw") throw Error("Set cannot be represented in JSON Schema");
  },
  Lt = (e, t, o, r) => {
    let n = o,
      s = e._zod.def,
      { minimum: i, maximum: c } = e._zod.bag;
    if (typeof i === "number") n.minItems = i;
    if (typeof c === "number") n.maxItems = c;
    (n.type = "array"), (n.items = y(s.element, t, { ...r, path: [...r.path, "items"] }));
  },
  Dt = (e, t, o, r) => {
    let n = o,
      s = e._zod.def;
    (n.type = "object"), (n.properties = {});
    let i = s.shape;
    for (let l in i) n.properties[l] = y(i[l], t, { ...r, path: [...r.path, "properties", l] });
    let c = new Set(Object.keys(i)),
      a = new Set(
        [...c].filter((l) => {
          let p = s.shape[l]._zod;
          if (t.io === "input") return p.optin === void 0;
          else return p.optout === void 0;
        }),
      );
    if (a.size > 0) n.required = Array.from(a);
    if (s.catchall?._zod.def.type === "never") n.additionalProperties = false;
    else if (!s.catchall) {
      if (t.io === "output") n.additionalProperties = false;
    } else if (s.catchall)
      n.additionalProperties = y(s.catchall, t, { ...r, path: [...r.path, "additionalProperties"] });
  },
  Mt = (e, t, o, r) => {
    let n = e._zod.def,
      s = n.inclusive === false,
      i = n.options.map((c, a) => y(c, t, { ...r, path: [...r.path, s ? "oneOf" : "anyOf", a] }));
    if (s) o.oneOf = i;
    else o.anyOf = i;
  },
  Ut = (e, t, o, r) => {
    let n = e._zod.def,
      s = y(n.left, t, { ...r, path: [...r.path, "allOf", 0] }),
      i = y(n.right, t, { ...r, path: [...r.path, "allOf", 1] }),
      c = (l) => "allOf" in l && Object.keys(l).length === 1,
      a = [...(c(s) ? s.allOf : [s]), ...(c(i) ? i.allOf : [i])];
    o.allOf = a;
  },
  Ps = (e, t, o, r) => {
    let n = o,
      s = e._zod.def;
    n.type = "array";
    let i = t.target === "draft-2020-12" ? "prefixItems" : "items",
      c = t.target === "draft-2020-12" ? "items" : t.target === "openapi-3.0" ? "items" : "additionalItems",
      a = s.items.map((h, d) => y(h, t, { ...r, path: [...r.path, i, d] })),
      l = s.rest
        ? y(s.rest, t, { ...r, path: [...r.path, c, ...(t.target === "openapi-3.0" ? [s.items.length] : [])] })
        : null;
    if (t.target === "draft-2020-12") {
      if (((n.prefixItems = a), l)) n.items = l;
    } else if (t.target === "openapi-3.0") {
      if (((n.items = { anyOf: a }), l)) n.items.anyOf.push(l);
      if (((n.minItems = a.length), !l)) n.maxItems = a.length;
    } else if (((n.items = a), l)) n.additionalItems = l;
    let { minimum: p, maximum: m } = e._zod.bag;
    if (typeof p === "number") n.minItems = p;
    if (typeof m === "number") n.maxItems = m;
  },
  Ft = (e, t, o, r) => {
    let n = o,
      s = e._zod.def;
    n.type = "object";
    let i = s.keyType,
      a = i._zod.bag?.patterns;
    if (s.mode === "loose" && a && a.size > 0) {
      let p = y(s.valueType, t, { ...r, path: [...r.path, "patternProperties", "*"] });
      n.patternProperties = {};
      for (let m of a) n.patternProperties[m.source] = p;
    } else {
      if (t.target === "draft-07" || t.target === "draft-2020-12")
        n.propertyNames = y(s.keyType, t, { ...r, path: [...r.path, "propertyNames"] });
      n.additionalProperties = y(s.valueType, t, { ...r, path: [...r.path, "additionalProperties"] });
    }
    let l = i._zod.values;
    if (l) {
      let p = [...l].filter((m) => typeof m === "string" || typeof m === "number");
      if (p.length > 0) n.required = p;
    }
  },
  Jt = (e, t, o, r) => {
    let n = e._zod.def,
      s = y(n.innerType, t, r),
      i = t.seen.get(e);
    if (t.target === "openapi-3.0") (i.ref = n.innerType), (o.nullable = true);
    else o.anyOf = [s, { type: "null" }];
  },
  qt = (e, t, o, r) => {
    let n = e._zod.def;
    y(n.innerType, t, r);
    let s = t.seen.get(e);
    s.ref = n.innerType;
  },
  Bt = (e, t, o, r) => {
    let n = e._zod.def;
    y(n.innerType, t, r);
    let s = t.seen.get(e);
    (s.ref = n.innerType), (o.default = JSON.parse(JSON.stringify(n.defaultValue)));
  },
  Vt = (e, t, o, r) => {
    let n = e._zod.def;
    y(n.innerType, t, r);
    let s = t.seen.get(e);
    if (((s.ref = n.innerType), t.io === "input")) o._prefault = JSON.parse(JSON.stringify(n.defaultValue));
  },
  Kt = (e, t, o, r) => {
    let n = e._zod.def;
    y(n.innerType, t, r);
    let s = t.seen.get(e);
    s.ref = n.innerType;
    let i;
    try {
      i = n.catchValue(void 0);
    } catch {
      throw Error("Dynamic catch values are not supported in JSON Schema");
    }
    o.default = i;
  },
  Gt = (e, t, o, r) => {
    let n = e._zod.def,
      s = n.in._zod.traits.has("$ZodTransform"),
      i = t.io === "input" ? (s ? n.out : n.in) : n.out;
    y(i, t, r);
    let c = t.seen.get(e);
    c.ref = i;
  },
  Wt = (e, t, o, r) => {
    let n = e._zod.def;
    y(n.innerType, t, r);
    let s = t.seen.get(e);
    (s.ref = n.innerType), (o.readOnly = true);
  },
  Os = (e, t, o, r) => {
    let n = e._zod.def;
    y(n.innerType, t, r);
    let s = t.seen.get(e);
    s.ref = n.innerType;
  },
  Re = (e, t, o, r) => {
    let n = e._zod.def;
    y(n.innerType, t, r);
    let s = t.seen.get(e);
    s.ref = n.innerType;
  },
  Yt = (e, t, o, r) => {
    let n = e._zod.innerType;
    y(n, t, r);
    let s = t.seen.get(e);
    s.ref = n;
  },
  zs = {
    string: kt,
    number: wt,
    boolean: Zt,
    bigint: Pt,
    symbol: gs,
    null: Ot,
    undefined: xs,
    void: bs,
    never: Et,
    any: Tt,
    unknown: It,
    date: Rt,
    enum: jt,
    literal: Nt,
    nan: ys,
    template_literal: vs,
    file: $s,
    success: Ss,
    custom: At,
    function: ks,
    transform: Ct,
    map: ws,
    set: Zs,
    array: Lt,
    object: Dt,
    union: Mt,
    intersection: Ut,
    tuple: Ps,
    record: Ft,
    nullable: Jt,
    nonoptional: qt,
    default: Bt,
    prefault: Vt,
    catch: Kt,
    pipe: Gt,
    readonly: Wt,
    promise: Os,
    optional: Re,
    lazy: Yt,
  };
function uOt(e, t) {
  if ("_idmap" in e) {
    let r = e,
      n = _e({ ...t, processors: zs }),
      s = {};
    for (let a of r._idmap.entries()) {
      let [l, p] = a;
      y(p, n);
    }
    let i = {},
      c = { registry: r, uri: t?.uri, defs: s };
    n.external = c;
    for (let a of r._idmap.entries()) {
      let [l, p] = a;
      ze(n, p), (i[l] = ge(n, p));
    }
    if (Object.keys(s).length > 0) {
      let a = n.target === "draft-2020-12" ? "$defs" : "definitions";
      i.__shared = { [a]: s };
    }
    return { schemas: i };
  }
  let o = _e({ ...t, processors: zs });
  return y(e, o), ze(o, e), ge(o, e);
}
var jZ = {};
je(jZ, {
  ZodISODate: () => Ts,
  ZodISODateTime: () => Es,
  ZodISODuration: () => Rs,
  ZodISOTime: () => Is,
  date: () => Ht,
  datetime: () => Xt,
  duration: () => eo,
  time: () => Qt,
});
var Es = u("ZodISODateTime", (e, t) => {
  Cr.init(e, t), S.init(e, t);
});
function Xt(e) {
  return Hn(Es, e);
}
var Ts = u("ZodISODate", (e, t) => {
  Lr.init(e, t), S.init(e, t);
});
function Ht(e) {
  return Qn(Ts, e);
}
var Is = u("ZodISOTime", (e, t) => {
  Dr.init(e, t), S.init(e, t);
});
function Qt(e) {
  return es(Is, e);
}
var Rs = u("ZodISODuration", (e, t) => {
  Mr.init(e, t), S.init(e, t);
});
function eo(e) {
  return ts(Rs, e);
}
var uc = (e, t) => {
  Se.init(e, t),
    (e.name = "ZodError"),
    Object.defineProperties(e, {
      format: { value: (o) => He(e, o) },
      flatten: { value: (o) => Xe(e, o) },
      addIssue: {
        value: (o) => {
          e.issues.push(o), (e.message = JSON.stringify(e.issues, W, 2));
        },
      },
      addIssues: {
        value: (o) => {
          e.issues.push(...o), (e.message = JSON.stringify(e.issues, W, 2));
        },
      },
      isEmpty: {
        get() {
          return e.issues.length === 0;
        },
      },
    });
};
var I = u("ZodError", uc, { Parent: Error });
var Ns = ke(I),
  As = we(I),
  dOt = ue(I),
  Cs = le(I),
  Ls = bo(I),
  Ds = yo(I),
  Ms = vo(I),
  Us = $o(I),
  Fs = So(I),
  Js = ko(I),
  qs = wo(I),
  Bs = Zo(I);
var Vs = new WeakMap();
function xe(e, t, o) {
  let r = Object.getPrototypeOf(e),
    n = Vs.get(r);
  if (!n) (n = new Set()), Vs.set(r, n);
  if (n.has(t)) return;
  n.add(t);
  for (let s in o) {
    let i = o[s];
    Object.defineProperty(r, s, {
      configurable: true,
      enumerable: false,
      get() {
        let c = i.bind(this);
        return Object.defineProperty(this, s, { configurable: true, writable: true, enumerable: true, value: c }), c;
      },
      set(c) {
        Object.defineProperty(this, s, { configurable: true, writable: true, enumerable: true, value: c });
      },
    });
  }
}
var b = u(
    "ZodType",
    (e, t) => (
      g.init(e, t),
      Object.assign(e["~standard"], { jsonSchema: { input: he(e, "input"), output: he(e, "output") } }),
      (e.toJSONSchema = _s(e, {})),
      (e.def = t),
      (e.type = t.type),
      Object.defineProperty(e, "_def", { value: t }),
      (e.parse = (o, r) => Ns(e, o, r, { callee: e.parse })),
      (e.safeParse = (o, r) => dOt(e, o, r)),
      (e.parseAsync = async (o, r) => As(e, o, r, { callee: e.parseAsync })),
      (e.safeParseAsync = async (o, r) => Cs(e, o, r)),
      (e.spa = e.safeParseAsync),
      (e.encode = (o, r) => Ls(e, o, r)),
      (e.decode = (o, r) => Ds(e, o, r)),
      (e.encodeAsync = async (o, r) => Ms(e, o, r)),
      (e.decodeAsync = async (o, r) => Us(e, o, r)),
      (e.safeEncode = (o, r) => Fs(e, o, r)),
      (e.safeDecode = (o, r) => Js(e, o, r)),
      (e.safeEncodeAsync = async (o, r) => qs(e, o, r)),
      (e.safeDecodeAsync = async (o, r) => Bs(e, o, r)),
      xe(e, "ZodType", {
        check(...o) {
          let r = this.def;
          return this.clone(
            z.mergeDefs(r, {
              checks: [
                ...(r.checks ?? []),
                ...o.map((n) =>
                  typeof n === "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n,
                ),
              ],
            }),
            { parent: true },
          );
        },
        with(...o) {
          return this.check(...o);
        },
        clone(o, r) {
          return R(this, o, r);
        },
        brand() {
          return this;
        },
        register(o, r) {
          return o.add(this, r), this;
        },
        refine(o, r) {
          return this.check(Qc(o, r));
        },
        superRefine(o, r) {
          return this.check(ea(o, r));
        },
        overwrite(o) {
          return this.check(V(o));
        },
        optional() {
          return Ws(this);
        },
        exactOptional() {
          return Dc(this);
        },
        nullable() {
          return Hs(this);
        },
        nullish() {
          return Ws(Hs(this));
        },
        nonoptional(o) {
          return Bc(this, o);
        },
        array() {
          return en(this);
        },
        or(o) {
          return Ki([this, o]);
        },
        and(o) {
          return Pae(this, o);
        },
        transform(o) {
          return Qs(this, ai(o));
        },
        default(o) {
          return Fc(this, o);
        },
        prefault(o) {
          return qc(this, o);
        },
        catch(o) {
          return Kc(this, o);
        },
        pipe(o) {
          return Qs(this, o);
        },
        readonly() {
          return Yc(this);
        },
        describe(o) {
          let r = this.clone();
          return B.add(r, { description: o }), r;
        },
        meta(...o) {
          if (o.length === 0) return B.get(this);
          let r = this.clone();
          return B.add(r, o[0]), r;
        },
        isOptional() {
          return this.safeParse(void 0).success;
        },
        isNullable() {
          return this.safeParse(null).success;
        },
        apply(o) {
          return o(this);
        },
      }),
      Object.defineProperty(e, "description", {
        get() {
          return B.get(e)?.description;
        },
        configurable: true,
      }),
      e
    ),
  ),
  ei = u("_ZodString", (e, t) => {
    Ee.init(e, t), b.init(e, t), (e._zod.processJSONSchema = (r, n, s) => kt(e, r, n, s));
    let o = e._zod.bag;
    (e.format = o.format ?? null),
      (e.minLength = o.minimum ?? null),
      (e.maxLength = o.maximum ?? null),
      xe(e, "_ZodString", {
        regex(...r) {
          return this.check(ft(...r));
        },
        includes(...r) {
          return this.check(zt(...r));
        },
        startsWith(...r) {
          return this.check(gt(...r));
        },
        endsWith(...r) {
          return this.check(xt(...r));
        },
        min(...r) {
          return this.check(ee(...r));
        },
        max(...r) {
          return this.check(Te(...r));
        },
        length(...r) {
          return this.check(Ie(...r));
        },
        nonempty(...r) {
          return this.check(ee(1, ...r));
        },
        lowercase(r) {
          return this.check(ht(r));
        },
        uppercase(r) {
          return this.check(_t(r));
        },
        trim() {
          return this.check(yt());
        },
        normalize(...r) {
          return this.check(bt(...r));
        },
        toLowerCase() {
          return this.check(vt());
        },
        toUpperCase() {
          return this.check($t());
        },
        slugify() {
          return this.check(St());
        },
      });
  }),
  oo = u("ZodString", (e, t) => {
    Ee.init(e, t),
      ei.init(e, t),
      (e.email = (o) => e.check(pt(ti, o))),
      (e.url = (o) => e.check(dt(oi, o))),
      (e.jwt = (o) => e.check(Xn(wc, o))),
      (e.emoji = (o) => e.check(Cn(mc, o))),
      (e.guid = (o) => e.check(mt(Gs, o))),
      (e.uuid = (o) => e.check(Rn(Ne, o))),
      (e.uuidv4 = (o) => e.check(jn(Ne, o))),
      (e.uuidv6 = (o) => e.check(Nn(Ne, o))),
      (e.uuidv7 = (o) => e.check(An(Ne, o))),
      (e.nanoid = (o) => e.check(Ln(dc, o))),
      (e.guid = (o) => e.check(mt(Gs, o))),
      (e.cuid = (o) => e.check(Dn(fc, o))),
      (e.cuid2 = (o) => e.check(Mn(hc, o))),
      (e.ulid = (o) => e.check(Un(_c, o))),
      (e.base64 = (o) => e.check(Gn($c, o))),
      (e.base64url = (o) => e.check(Wn(Sc, o))),
      (e.xid = (o) => e.check(Fn(zc, o))),
      (e.ksuid = (o) => e.check(Jn(gc, o))),
      (e.ipv4 = (o) => e.check(qn(xc, o))),
      (e.ipv6 = (o) => e.check(Bn(bc, o))),
      (e.cidrv4 = (o) => e.check(Vn(yc, o))),
      (e.cidrv6 = (o) => e.check(Kn(vc, o))),
      (e.e164 = (o) => e.check(Yn(kc, o))),
      (e.datetime = (o) => e.check(Xt(o))),
      (e.date = (o) => e.check(Ht(o))),
      (e.time = (o) => e.check(Qt(o))),
      (e.duration = (o) => e.check(eo(o)));
  });
function pe(e) {
  return Tn(oo, e);
}
var S = u("ZodStringFormat", (e, t) => {
    v.init(e, t), ei.init(e, t);
  }),
  ti = u("ZodEmail", (e, t) => {
    Pr.init(e, t), S.init(e, t);
  });
function N6n(e) {
  return pt(ti, e);
}
var Gs = u("ZodGUID", (e, t) => {
  wr.init(e, t), S.init(e, t);
});
var Ne = u("ZodUUID", (e, t) => {
  Zr.init(e, t), S.init(e, t);
});
var oi = u("ZodURL", (e, t) => {
  Or.init(e, t), S.init(e, t);
});
function pOt(e) {
  return dt(oi, e);
}
var mc = u("ZodEmoji", (e, t) => {
  Er.init(e, t), S.init(e, t);
});
var dc = u("ZodNanoID", (e, t) => {
  Tr.init(e, t), S.init(e, t);
});
var fc = u("ZodCUID", (e, t) => {
  Ir.init(e, t), S.init(e, t);
});
var hc = u("ZodCUID2", (e, t) => {
  Rr.init(e, t), S.init(e, t);
});
var _c = u("ZodULID", (e, t) => {
  jr.init(e, t), S.init(e, t);
});
var zc = u("ZodXID", (e, t) => {
  Nr.init(e, t), S.init(e, t);
});
var gc = u("ZodKSUID", (e, t) => {
  Ar.init(e, t), S.init(e, t);
});
var xc = u("ZodIPv4", (e, t) => {
  Ur.init(e, t), S.init(e, t);
});
var bc = u("ZodIPv6", (e, t) => {
  Jr.init(e, t), S.init(e, t);
});
var yc = u("ZodCIDRv4", (e, t) => {
  qr.init(e, t), S.init(e, t);
});
var vc = u("ZodCIDRv6", (e, t) => {
  Br.init(e, t), S.init(e, t);
});
var $c = u("ZodBase64", (e, t) => {
  Kr.init(e, t), S.init(e, t);
});
var Sc = u("ZodBase64URL", (e, t) => {
  Gr.init(e, t), S.init(e, t);
});
var kc = u("ZodE164", (e, t) => {
  Wr.init(e, t), S.init(e, t);
});
var wc = u("ZodJWT", (e, t) => {
  Yr.init(e, t), S.init(e, t);
});
var Ae = u("ZodNumber", (e, t) => {
  st.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (r, n, s) => wt(e, r, n, s)),
    xe(e, "ZodNumber", {
      gt(r, n) {
        return this.check(Q(r, n));
      },
      gte(r, n) {
        return this.check(N(r, n));
      },
      min(r, n) {
        return this.check(N(r, n));
      },
      lt(r, n) {
        return this.check(H(r, n));
      },
      lte(r, n) {
        return this.check(U(r, n));
      },
      max(r, n) {
        return this.check(U(r, n));
      },
      int(r) {
        return this.check(Ys(r));
      },
      safe(r) {
        return this.check(Ys(r));
      },
      positive(r) {
        return this.check(Q(0, r));
      },
      nonnegative(r) {
        return this.check(N(0, r));
      },
      negative(r) {
        return this.check(H(0, r));
      },
      nonpositive(r) {
        return this.check(U(0, r));
      },
      multipleOf(r, n) {
        return this.check(fe(r, n));
      },
      step(r, n) {
        return this.check(fe(r, n));
      },
      finite() {
        return this;
      },
    });
  let o = e._zod.bag;
  (e.minValue =
    Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null),
    (e.maxValue =
      Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null),
    (e.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5)),
    (e.isFinite = true),
    (e.format = o.format ?? null);
});
function Fr(e) {
  return os(Ae, e);
}
var Zc = u("ZodNumberFormat", (e, t) => {
  Xr.init(e, t), Ae.init(e, t);
});
function Ys(e) {
  return ns(Zc, e);
}
var ro = u("ZodBoolean", (e, t) => {
  Hr.init(e, t), b.init(e, t), (e._zod.processJSONSchema = (o, r, n) => Zt(e, o, r, n));
});
function $i(e) {
  return ss(ro, e);
}
var ri = u("ZodBigInt", (e, t) => {
  Qr.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (r, n, s) => Pt(e, r, n, s)),
    (e.gte = (r, n) => e.check(N(r, n))),
    (e.min = (r, n) => e.check(N(r, n))),
    (e.gt = (r, n) => e.check(Q(r, n))),
    (e.gte = (r, n) => e.check(N(r, n))),
    (e.min = (r, n) => e.check(N(r, n))),
    (e.lt = (r, n) => e.check(H(r, n))),
    (e.lte = (r, n) => e.check(U(r, n))),
    (e.max = (r, n) => e.check(U(r, n))),
    (e.positive = (r) => e.check(Q(BigInt(0), r))),
    (e.negative = (r) => e.check(H(BigInt(0), r))),
    (e.nonpositive = (r) => e.check(U(BigInt(0), r))),
    (e.nonnegative = (r) => e.check(N(BigInt(0), r))),
    (e.multipleOf = (r, n) => e.check(fe(r, n)));
  let o = e._zod.bag;
  (e.minValue = o.minimum ?? null), (e.maxValue = o.maximum ?? null), (e.format = o.format ?? null);
});
var Pc = u("ZodNull", (e, t) => {
  tn.init(e, t), b.init(e, t), (e._zod.processJSONSchema = (o, r, n) => Ot(e, o, r, n));
});
function WHe(e) {
  return as(Pc, e);
}
var Oc = u("ZodAny", (e, t) => {
  on.init(e, t), b.init(e, t), (e._zod.processJSONSchema = (o, r, n) => Tt(e, o, r, n));
});
function ni() {
  return us(Oc);
}
var Ec = u("ZodUnknown", (e, t) => {
  rn.init(e, t), b.init(e, t), (e._zod.processJSONSchema = (o, r, n) => It(e, o, r, n));
});
function Ks() {
  return ls(Ec);
}
var Tc = u("ZodNever", (e, t) => {
  sn.init(e, t), b.init(e, t), (e._zod.processJSONSchema = (o, r, n) => Et(e, o, r, n));
});
function Ic(e) {
  return ps(Tc, e);
}
var si = u("ZodDate", (e, t) => {
  cn.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (r, n, s) => Rt(e, r, n, s)),
    (e.min = (r, n) => e.check(N(r, n))),
    (e.max = (r, n) => e.check(U(r, n)));
  let o = e._zod.bag;
  (e.minDate = o.minimum ? new Date(o.minimum) : null), (e.maxDate = o.maximum ? new Date(o.maximum) : null);
});
var Rc = u("ZodArray", (e, t) => {
  an.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Lt(e, o, r, n)),
    (e.element = t.element),
    xe(e, "ZodArray", {
      min(o, r) {
        return this.check(ee(o, r));
      },
      nonempty(o) {
        return this.check(ee(1, o));
      },
      max(o, r) {
        return this.check(Te(o, r));
      },
      length(o, r) {
        return this.check(Ie(o, r));
      },
      unwrap() {
        return this.element;
      },
    });
});
function en(e, t) {
  return ds(Rc, e, t);
}
var ii = u("ZodObject", (e, t) => {
  pn.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Dt(e, o, r, n)),
    z.defineLazy(e, "shape", () => t.shape),
    xe(e, "ZodObject", {
      keyof() {
        return lc(Object.keys(this._zod.def.shape));
      },
      catchall(o) {
        return this.clone({ ...this._zod.def, catchall: o });
      },
      passthrough() {
        return this.clone({ ...this._zod.def, catchall: Ks() });
      },
      loose() {
        return this.clone({ ...this._zod.def, catchall: Ks() });
      },
      strict() {
        return this.clone({ ...this._zod.def, catchall: Ic() });
      },
      strip() {
        return this.clone({ ...this._zod.def, catchall: void 0 });
      },
      extend(o) {
        return z.extend(this, o);
      },
      safeExtend(o) {
        return z.safeExtend(this, o);
      },
      merge(o) {
        return z.merge(this, o);
      },
      pick(o) {
        return z.pick(this, o);
      },
      omit(o) {
        return z.omit(this, o);
      },
      partial(...o) {
        return z.partial(ui, this, o[0]);
      },
      required(...o) {
        return z.required(li, this, o[0]);
      },
    });
});
function lt(e, t) {
  let o = { type: "object", shape: e ?? {}, ...z.normalizeParams(t) };
  return new ii(o);
}
function Ia(e, t) {
  return new ii({ type: "object", shape: e, catchall: Ks(), ...z.normalizeParams(t) });
}
var ci = u("ZodUnion", (e, t) => {
  it.init(e, t), b.init(e, t), (e._zod.processJSONSchema = (o, r, n) => Mt(e, o, r, n)), (e.options = t.options);
});
function Ki(e, t) {
  return new ci({ type: "union", options: e, ...z.normalizeParams(t) });
}
var jc = u("ZodDiscriminatedUnion", (e, t) => {
  ci.init(e, t), mn.init(e, t);
});
function BWe(e, t, o) {
  return new jc({ type: "union", options: t, discriminator: e, ...z.normalizeParams(o) });
}
var Nc = u("ZodIntersection", (e, t) => {
  dn.init(e, t), b.init(e, t), (e._zod.processJSONSchema = (o, r, n) => Ut(e, o, r, n));
});
function Pae(e, t) {
  return new Nc({ type: "intersection", left: e, right: t });
}
var Xs = u("ZodRecord", (e, t) => {
  fn.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Ft(e, o, r, n)),
    (e.keyType = t.keyType),
    (e.valueType = t.valueType);
});
function hi(e, t, o) {
  if (!t || !t._zod) return new Xs({ type: "record", keyType: pe(), valueType: e, ...z.normalizeParams(t) });
  return new Xs({ type: "record", keyType: e, valueType: t, ...z.normalizeParams(o) });
}
var to = u("ZodEnum", (e, t) => {
  hn.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (r, n, s) => jt(e, r, n, s)),
    (e.enum = t.entries),
    (e.options = Object.values(t.entries));
  let o = new Set(Object.keys(t.entries));
  (e.extract = (r, n) => {
    let s = {};
    for (let i of r)
      if (o.has(i)) s[i] = t.entries[i];
      else throw Error(`Key ${i} not found in enum`);
    return new to({ ...t, checks: [], ...z.normalizeParams(n), entries: s });
  }),
    (e.exclude = (r, n) => {
      let s = { ...t.entries };
      for (let i of r)
        if (o.has(i)) delete s[i];
        else throw Error(`Key ${i} not found in enum`);
      return new to({ ...t, checks: [], ...z.normalizeParams(n), entries: s });
    });
});
function lc(e, t) {
  let o = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new to({ type: "enum", entries: o, ...z.normalizeParams(t) });
}
var Ac = u("ZodLiteral", (e, t) => {
  _n.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Nt(e, o, r, n)),
    (e.values = new Set(t.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (t.values.length > 1)
          throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
        return t.values[0];
      },
    });
});
function nn(e, t) {
  return new Ac({ type: "literal", values: Array.isArray(e) ? e : [e], ...z.normalizeParams(t) });
}
var Cc = u("ZodTransform", (e, t) => {
  zn.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Ct(e, o, r, n)),
    (e._zod.parse = (o, r) => {
      if (r.direction === "backward") throw new re(e.constructor.name);
      o.addIssue = (s) => {
        if (typeof s === "string") o.issues.push(z.issue(s, o.value, t));
        else {
          let i = s;
          if (i.fatal) i.continue = false;
          i.code ?? (i.code = "custom"),
            i.input ?? (i.input = o.value),
            i.inst ?? (i.inst = e),
            o.issues.push(z.issue(i));
        }
      };
      let n = t.transform(o.value, o);
      if (n instanceof Promise) return n.then((s) => ((o.value = s), (o.fallback = true), o));
      return (o.value = n), (o.fallback = true), o;
    });
});
function ai(e) {
  return new Cc({ type: "transform", transform: e });
}
var ui = u("ZodOptional", (e, t) => {
  ct.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Re(e, o, r, n)),
    (e.unwrap = () => e._zod.def.innerType);
});
function Ws(e) {
  return new ui({ type: "optional", innerType: e });
}
var Lc = u("ZodExactOptional", (e, t) => {
  gn.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Re(e, o, r, n)),
    (e.unwrap = () => e._zod.def.innerType);
});
function Dc(e) {
  return new Lc({ type: "optional", innerType: e });
}
var Mc = u("ZodNullable", (e, t) => {
  xn.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Jt(e, o, r, n)),
    (e.unwrap = () => e._zod.def.innerType);
});
function Hs(e) {
  return new Mc({ type: "nullable", innerType: e });
}
var Uc = u("ZodDefault", (e, t) => {
  bn.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Bt(e, o, r, n)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap);
});
function Fc(e, t) {
  return new Uc({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t === "function" ? t() : z.shallowClone(t);
    },
  });
}
var Jc = u("ZodPrefault", (e, t) => {
  yn.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Vt(e, o, r, n)),
    (e.unwrap = () => e._zod.def.innerType);
});
function qc(e, t) {
  return new Jc({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t === "function" ? t() : z.shallowClone(t);
    },
  });
}
var li = u("ZodNonOptional", (e, t) => {
  vn.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => qt(e, o, r, n)),
    (e.unwrap = () => e._zod.def.innerType);
});
function Bc(e, t) {
  return new li({ type: "nonoptional", innerType: e, ...z.normalizeParams(t) });
}
var Vc = u("ZodCatch", (e, t) => {
  $n.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Kt(e, o, r, n)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap);
});
function Kc(e, t) {
  return new Vc({ type: "catch", innerType: e, catchValue: typeof t === "function" ? t : () => t });
}
var pi = u("ZodPipe", (e, t) => {
  at.init(e, t), b.init(e, t), (e._zod.processJSONSchema = (o, r, n) => Gt(e, o, r, n)), (e.in = t.in), (e.out = t.out);
});
function Qs(e, t) {
  return new pi({ type: "pipe", in: e, out: t });
}
var Gc = u("ZodPreprocess", (e, t) => {
    pi.init(e, t), Sn.init(e, t);
  }),
  Wc = u("ZodReadonly", (e, t) => {
    kn.init(e, t),
      b.init(e, t),
      (e._zod.processJSONSchema = (o, r, n) => Wt(e, o, r, n)),
      (e.unwrap = () => e._zod.def.innerType);
  });
function Yc(e) {
  return new Wc({ type: "readonly", innerType: e });
}
var Xc = u("ZodLazy", (e, t) => {
  wn.init(e, t),
    b.init(e, t),
    (e._zod.processJSONSchema = (o, r, n) => Yt(e, o, r, n)),
    (e.unwrap = () => e._zod.def.getter());
});
function bat(e) {
  return new Xc({ type: "lazy", getter: e });
}
var Hc = u("ZodCustom", (e, t) => {
  Zn.init(e, t), b.init(e, t), (e._zod.processJSONSchema = (o, r, n) => At(e, o, r, n));
});
function Qc(e, t = {}) {
  return fs(Hc, e, t);
}
function ea(e, t) {
  return hs(e, t);
}
function qHe(e, t) {
  return new Gc({ type: "pipe", in: ai(e), out: t });
}
var di = {
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
var mi;
(function (e) {})(mi || (mi = {}));
var Ce = {};
je(Ce, { bigint: () => na, boolean: () => ra, date: () => sa, number: () => oa, string: () => ta });
function ta(e) {
  return In(oo, e);
}
function oa(e) {
  return rs(Ae, e);
}
function ra(e) {
  return is(ro, e);
}
function na(e) {
  return cs(ri, e);
}
function sa(e) {
  return ms(si, e);
}
T(ut());
var jWe = "2025-11-25";
var GHe = [jWe, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  Xrn = "io.modelcontextprotocol/related-task",
  Dae = "io.modelcontextprotocol/protocolVersion",
  WWe = "io.modelcontextprotocol/clientInfo",
  Oae = "io.modelcontextprotocol/serverInfo",
  zHe = "io.modelcontextprotocol/clientCapabilities",
  wat = "io.modelcontextprotocol/subscriptionId",
  qWe = "io.modelcontextprotocol/logLevel";
var Le = "2.0";
var F6n = -32601;
var b_e = bat(() => Ki([pe(), Fr(), $i(), WHe(), hi(pe(), b_e), en(b_e)])),
  IA = hi(pe(), b_e),
  Yrn = en(b_e),
  Tat = Ki([pe(), Fr().int()]),
  Eat = pe(),
  fOt = lt({ ttl: Fr().optional() }),
  VHe = lt({ taskId: pe() }),
  Aat = Ia({ progressToken: Tat.optional(), [Xrn]: VHe.optional() }),
  xx = lt({ _meta: Aat.optional() }),
  KHe = xx.extend({ task: fOt.optional() }),
  PA = lt({ method: pe(), params: xx.loose().optional() }),
  vL = lt({ _meta: Aat.optional() }),
  RL = lt({ method: pe(), params: vL.loose().optional() }),
  Cat = Ia({
    get [Oae]() {
      return Mae.optional().catch(void 0);
    },
  }),
  kS = Ia({ _meta: Cat.optional() }),
  w_e = Ki([pe(), Fr().int()]),
  vat = lt({ jsonrpc: nn(Le), id: w_e, ...PA.shape }).strict(),
  Rat = lt({ jsonrpc: nn(Le), ...RL.shape }).strict(),
  GWe = lt({ jsonrpc: nn(Le), id: w_e, result: kS }).strict(),
  zWe = lt({
    jsonrpc: nn(Le),
    id: w_e.optional(),
    error: lt({ code: Fr().int(), message: pe(), data: Ks().optional() }),
  }).strict(),
  TB = Ki([vat, Rat, GWe, zWe]),
  Jrn = Ki([GWe, zWe]),
  kat = kS.strict(),
  mOt = vL.extend({ requestId: w_e.optional(), reason: pe().optional() }),
  Hat = RL.extend({ method: nn("notifications/cancelled"), params: mOt }),
  gOt = lt({
    src: pe(),
    mimeType: pe().optional(),
    sizes: en(pe()).optional(),
    theme: lc(["light", "dark"]).optional(),
  }),
  T_e = lt({ icons: en(gOt).optional() }),
  Lae = lt({ name: pe(), title: pe().optional() }),
  Mae = Lae.extend({
    ...Lae.shape,
    ...T_e.shape,
    version: pe(),
    websiteUrl: pe().optional(),
    description: pe().optional(),
  }),
  ca = Pae(lt({ applyDefaults: $i().optional() }), IA),
  aa = qHe(
    (e) => {
      if (e && typeof e === "object" && !Array.isArray(e) && Object.keys(e).length === 0) return { form: {} };
      return e;
    },
    Pae(lt({ form: ca.optional(), url: IA.optional() }), IA.optional()),
  ),
  hOt = Ia({
    list: IA.optional(),
    cancel: IA.optional(),
    requests: Ia({
      sampling: Ia({ createMessage: IA.optional() }).optional(),
      elicitation: Ia({ create: IA.optional() }).optional(),
    }).optional(),
  }),
  _Ot = Ia({
    list: IA.optional(),
    cancel: IA.optional(),
    requests: Ia({ tools: Ia({ call: IA.optional() }).optional() }).optional(),
  }),
  yOt = lt({
    experimental: hi(pe(), IA).optional(),
    sampling: lt({ context: IA.optional(), tools: IA.optional() }).optional(),
    elicitation: aa.optional(),
    roots: lt({ listChanged: $i().optional() }).optional(),
    tasks: hOt.optional(),
    extensions: hi(pe(), IA).optional(),
  }),
  SOt = xx.extend({ protocolVersion: pe(), capabilities: yOt, clientInfo: Mae }),
  xat = PA.extend({ method: nn("initialize"), params: SOt }),
  E_e = lt({
    experimental: hi(pe(), IA).optional(),
    logging: IA.optional(),
    completions: IA.optional(),
    prompts: lt({ listChanged: $i().optional() }).optional(),
    resources: lt({ subscribe: $i().optional(), listChanged: $i().optional() }).optional(),
    tools: lt({ listChanged: $i().optional() }).optional(),
    tasks: _Ot.optional(),
    extensions: hi(pe(), IA).optional(),
  }),
  XHe = kS.extend({ protocolVersion: pe(), capabilities: E_e, serverInfo: Mae, instructions: pe().optional() }),
  Iat = RL.extend({ method: nn("notifications/initialized"), params: vL.optional() }),
  bOt = PA.extend({ method: nn("server/discover"), params: xx.optional() }),
  YHe = kS.extend({ supportedVersions: en(pe()), capabilities: E_e, instructions: pe().optional() }),
  Pat = PA.extend({ method: nn("ping"), params: xx.optional() }),
  wOt = lt({ progress: Fr(), total: Ws(Fr()), message: Ws(pe()) }),
  TOt = lt({ ...vL.shape, ...wOt.shape, progressToken: Tat }),
  Dat = RL.extend({ method: nn("notifications/progress"), params: TOt }),
  EOt = xx.extend({ cursor: Eat.optional() }),
  A_e = PA.extend({ params: EOt.optional() }),
  C_e = kS.extend({ nextCursor: Eat.optional() }),
  Oat = lt({ uri: pe(), mimeType: Ws(pe()), _meta: hi(pe(), Ks()).optional() }),
  Lat = Oat.extend({ text: pe() }),
  no = pe().refine(
    (e) => {
      try {
        return atob(e), true;
      } catch {
        return false;
      }
    },
    { message: "Invalid Base64 string" },
  ),
  Mat = Oat.extend({ blob: no }),
  v_e = lc(["user", "assistant"]),
  Nae = lt({
    audience: en(v_e).optional(),
    priority: Fr().min(0).max(1).optional(),
    lastModified: jZ.datetime({ offset: true }).optional(),
  }),
  R_e = lt({
    ...Lae.shape,
    ...T_e.shape,
    uri: pe(),
    description: Ws(pe()),
    mimeType: Ws(pe()),
    size: Ws(Fr()),
    annotations: Nae.optional(),
    _meta: Ws(Ia({})),
  }),
  JHe = lt({
    ...Lae.shape,
    ...T_e.shape,
    uriTemplate: pe(),
    description: Ws(pe()),
    mimeType: Ws(pe()),
    annotations: Nae.optional(),
    _meta: Ws(Ia({})),
  }),
  AOt = A_e.extend({ method: nn("resources/list") }),
  WZ = C_e.extend({ resources: en(R_e) }),
  COt = A_e.extend({ method: nn("resources/templates/list") }),
  QHe = C_e.extend({ resourceTemplates: en(JHe) }),
  VWe = xx.extend({ uri: pe() }),
  vOt = VWe,
  ROt = PA.extend({ method: nn("resources/read"), params: vOt }),
  kOt = kS.extend({ contents: en(Ki([Lat, Mat])) }),
  HOt = RL.extend({ method: nn("notifications/resources/list_changed"), params: vL.optional() }),
  xOt = VWe,
  IOt = PA.extend({ method: nn("resources/subscribe"), params: xOt }),
  POt = VWe,
  DOt = PA.extend({ method: nn("resources/unsubscribe"), params: POt }),
  Nat = lt({
    toolsListChanged: $i().optional(),
    promptsListChanged: $i().optional(),
    resourcesListChanged: $i().optional(),
    resourceSubscriptions: en(pe()).optional(),
  }),
  OOt = xx.extend({ notifications: Nat }),
  LOt = PA.extend({ method: nn("subscriptions/listen"), params: OOt }),
  MOt = vL.extend({ notifications: Nat }),
  NOt = RL.extend({ method: nn("notifications/subscriptions/acknowledged"), params: MOt }),
  FOt = Cat.extend({ [wat]: w_e }),
  $Ot = kS.extend({ _meta: FOt }),
  UOt = vL.extend({ uri: pe() }),
  BOt = RL.extend({ method: nn("notifications/resources/updated"), params: UOt }),
  jOt = lt({ name: pe(), description: Ws(pe()), required: Ws($i()) }),
  ZHe = lt({ ...Lae.shape, ...T_e.shape, description: Ws(pe()), arguments: Ws(en(jOt)), _meta: Ws(Ia({})) }),
  WOt = A_e.extend({ method: nn("prompts/list") }),
  exe = C_e.extend({ prompts: en(ZHe) }),
  qOt = xx.extend({ name: pe(), arguments: hi(pe(), pe()).optional() }),
  GOt = PA.extend({ method: nn("prompts/get"), params: qOt }),
  KWe = lt({ type: nn("text"), text: pe(), annotations: Nae.optional(), _meta: hi(pe(), Ks()).optional() }),
  XWe = lt({
    type: nn("image"),
    data: no,
    mimeType: pe(),
    annotations: Nae.optional(),
    _meta: hi(pe(), Ks()).optional(),
  }),
  YWe = lt({
    type: nn("audio"),
    data: no,
    mimeType: pe(),
    annotations: Nae.optional(),
    _meta: hi(pe(), Ks()).optional(),
  }),
  zOt = lt({ type: nn("tool_use"), name: pe(), id: pe(), input: hi(pe(), Ks()), _meta: hi(pe(), Ks()).optional() }),
  VOt = lt({
    type: nn("resource"),
    resource: Ki([Lat, Mat]),
    annotations: Nae.optional(),
    _meta: hi(pe(), Ks()).optional(),
  }),
  KOt = R_e.extend({ type: nn("resource_link") }),
  JWe = Ki([KWe, XWe, YWe, KOt, VOt]),
  XOt = lt({ role: v_e, content: JWe }),
  YOt = kS.extend({ description: pe().optional(), messages: en(XOt) }),
  JOt = RL.extend({ method: nn("notifications/prompts/list_changed"), params: vL.optional() }),
  QOt = lt({
    title: pe().optional(),
    readOnlyHint: $i().optional(),
    destructiveHint: $i().optional(),
    idempotentHint: $i().optional(),
    openWorldHint: $i().optional(),
  }),
  ZOt = lt({ taskSupport: lc(["required", "optional", "forbidden"]).optional() }),
  k_e = lt({
    ...Lae.shape,
    ...T_e.shape,
    description: pe().optional(),
    inputSchema: lt({
      type: nn("object"),
      properties: hi(pe(), b_e).optional(),
      required: en(pe()).optional(),
    }).catchall(Ks()),
    outputSchema: Ia({ $schema: pe().optional() }).optional(),
    annotations: QOt.optional(),
    execution: ZOt.optional(),
    _meta: hi(pe(), Ks()).optional(),
  }),
  eLt = A_e.extend({ method: nn("tools/list") }),
  H_e = C_e.extend({ tools: en(k_e) }),
  Fae = kS.extend({ content: en(JWe).default([]), structuredContent: Ks().optional(), isError: $i().optional() }),
  QWe = Fae.or(kS.extend({ toolResult: Ks() })),
  tLt = KHe.extend({ name: pe(), arguments: hi(pe(), Ks()).optional() }),
  nLt = PA.extend({ method: nn("tools/call"), params: tLt }),
  rLt = RL.extend({ method: nn("notifications/tools/list_changed"), params: vL.optional() }),
  Fat = lt({ autoRefresh: $i().default(true), debounceMs: Fr().int().nonnegative().default(300) }),
  $at = lc(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
  oLt = xx.extend({ level: $at }),
  iLt = PA.extend({ method: nn("logging/setLevel"), params: oLt }),
  sLt = vL.extend({ level: $at, logger: pe().optional(), data: Ks() }),
  aLt = RL.extend({ method: nn("notifications/message"), params: sLt }),
  lLt = lt({ name: pe().optional() }),
  cLt = lt({
    hints: en(lLt).optional(),
    costPriority: Fr().min(0).max(1).optional(),
    speedPriority: Fr().min(0).max(1).optional(),
    intelligencePriority: Fr().min(0).max(1).optional(),
  }),
  uLt = lt({ mode: lc(["auto", "required", "none"]).optional() }),
  dLt = lt({
    type: nn("tool_result"),
    toolUseId: pe().describe("The unique identifier for the corresponding tool call."),
    content: en(JWe),
    structuredContent: Ks().optional(),
    isError: $i().optional(),
    _meta: hi(pe(), Ks()).optional(),
  }),
  pLt = BWe("type", [KWe, XWe, YWe]),
  txe = BWe("type", [KWe, XWe, YWe, zOt, dLt]),
  fLt = lt({ role: v_e, content: Ki([txe, en(txe)]), _meta: hi(pe(), Ks()).optional() }),
  mLt = KHe.extend({
    messages: en(fLt),
    modelPreferences: cLt.optional(),
    systemPrompt: pe().optional(),
    includeContext: lc(["none", "thisServer", "allServers"]).optional(),
    temperature: Fr().optional(),
    maxTokens: Fr().int(),
    stopSequences: en(pe()).optional(),
    metadata: IA.optional(),
    tools: en(k_e).optional(),
    toolChoice: uLt.optional(),
  }),
  gLt = PA.extend({ method: nn("sampling/createMessage"), params: mLt }),
  hLt = kS.extend({
    model: pe(),
    stopReason: Ws(lc(["endTurn", "stopSequence", "maxTokens"]).or(pe())),
    role: v_e,
    content: pLt,
  }),
  _Lt = kS.extend({
    model: pe(),
    stopReason: Ws(lc(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(pe())),
    role: v_e,
    content: Ki([txe, en(txe)]),
  }),
  Uat = lt({ type: nn("boolean"), title: pe().optional(), description: pe().optional(), default: $i().optional() }),
  ZWe = lt({
    type: nn("string"),
    title: pe().optional(),
    description: pe().optional(),
    minLength: Fr().optional(),
    maxLength: Fr().optional(),
    format: lc(["email", "uri", "date", "date-time"]).optional(),
    default: pe().optional(),
  }),
  e9e = lt({
    type: lc(["number", "integer"]),
    title: pe().optional(),
    description: pe().optional(),
    minimum: Fr().optional(),
    maximum: Fr().optional(),
    default: Fr().optional(),
  }),
  Bat = lt({
    type: nn("string"),
    title: pe().optional(),
    description: pe().optional(),
    enum: en(pe()),
    default: pe().optional(),
  }),
  jat = lt({
    type: nn("string"),
    title: pe().optional(),
    description: pe().optional(),
    oneOf: en(lt({ const: pe(), title: pe() })),
    default: pe().optional(),
  }),
  Wat = lt({
    type: nn("string"),
    title: pe().optional(),
    description: pe().optional(),
    enum: en(pe()),
    enumNames: en(pe()).optional(),
    default: pe().optional(),
  }),
  yLt = Ki([Bat, jat]),
  qat = lt({
    type: nn("array"),
    title: pe().optional(),
    description: pe().optional(),
    minItems: Fr().optional(),
    maxItems: Fr().optional(),
    items: lt({ type: nn("string"), enum: en(pe()) }),
    default: en(pe()).optional(),
  }),
  Gat = lt({
    type: nn("array"),
    title: pe().optional(),
    description: pe().optional(),
    minItems: Fr().optional(),
    maxItems: Fr().optional(),
    items: lt({ anyOf: en(lt({ const: pe(), title: pe() })) }),
    default: en(pe()).optional(),
  }),
  SLt = Ki([qat, Gat]),
  bLt = Ki([Wat, yLt, SLt]),
  zat = Ki([bLt, Uat, ZWe, e9e]),
  t9e = KHe.extend({
    mode: nn("form").optional(),
    message: pe(),
    requestedSchema: lt({ type: nn("object"), properties: hi(pe(), zat), required: en(pe()).optional() }).catchall(
      Ks(),
    ),
  }),
  nxe = KHe.extend({ mode: nn("url"), message: pe(), elicitationId: pe(), url: pe().url() }),
  rxe = Ki([t9e, nxe]),
  wLt = PA.extend({ method: nn("elicitation/create"), params: rxe }),
  TLt = vL.extend({ elicitationId: pe() }),
  ELt = RL.extend({ method: nn("notifications/elicitation/complete"), params: TLt }),
  ALt = kS.extend({
    action: lc(["accept", "decline", "cancel"]),
    content: qHe((e) => (e === null ? void 0 : e), hi(pe(), Ki([pe(), Fr(), $i(), en(pe())])).optional()),
  }),
  CLt = lt({ type: nn("ref/resource"), uri: pe() }),
  vLt = lt({ type: nn("ref/prompt"), name: pe() }),
  RLt = xx.extend({
    ref: Ki([vLt, CLt]),
    argument: lt({ name: pe(), value: pe() }),
    context: lt({ arguments: hi(pe(), pe()).optional() }).optional(),
  }),
  kLt = PA.extend({ method: nn("completion/complete"), params: RLt }),
  HLt = kS.extend({ completion: Ia({ values: en(pe()).max(100), total: Ws(Fr().int()), hasMore: Ws($i()) }) }),
  xLt = lt({ uri: pe().startsWith("file://"), name: pe().optional(), _meta: hi(pe(), Ks()).optional() }),
  ILt = PA.extend({ method: nn("roots/list"), params: xx.optional() }),
  PLt = kS.extend({ roots: en(xLt) }),
  DLt = RL.extend({ method: nn("notifications/roots/list_changed"), params: vL.optional() }),
  Qrn = Ia({ ttl: Fr().optional(), pollInterval: Fr().optional() }),
  OLt = lc(["working", "input_required", "completed", "failed", "cancelled"]),
  x_e = lt({
    taskId: pe(),
    status: OLt,
    ttl: Ki([Fr(), WHe()]),
    createdAt: pe(),
    lastUpdatedAt: pe(),
    pollInterval: Ws(Fr()),
    statusMessage: Ws(pe()),
  }),
  Zrn = kS.extend({ task: x_e }),
  oxe = vL.merge(x_e),
  eon = RL.extend({ method: nn("notifications/tasks/status"), params: oxe }),
  ton = PA.extend({ method: nn("tasks/get"), params: xx.extend({ taskId: pe() }) }),
  n9e = kS.merge(x_e),
  non = PA.extend({ method: nn("tasks/result"), params: xx.extend({ taskId: pe() }) }),
  ron = kS.loose(),
  oon = A_e.extend({ method: nn("tasks/list") }),
  ion = C_e.extend({ tasks: en(x_e) }),
  son = PA.extend({ method: nn("tasks/cancel"), params: xx.extend({ taskId: pe() }) }),
  I_e = kS.merge(x_e),
  aon = Ki([Pat, xat, bOt, kLt, iLt, GOt, WOt, AOt, COt, ROt, IOt, DOt, LOt, nLt, eLt]),
  lon = Ki([Hat, Dat, Iat, DLt]),
  con = Ki([kat, hLt, _Lt, ALt, PLt]),
  uon = Ki([Pat, gLt, wLt, ILt]),
  don = Ki([Hat, Dat, aLt, BOt, HOt, rLt, JOt, NOt, ELt]),
  pon = Ki([kat, XHe, YHe, HLt, YOt, exe, WZ, QHe, kOt, Fae, H_e, $Ot]),
  O = pOt()
    .superRefine((e, t) => {
      if (!URL.canParse(e)) return t.addIssue({ code: di.custom, message: "URL must be parseable", fatal: true }), Me;
    })
    .refine(
      (e) => {
        let t = new URL(e);
        return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
      },
      { message: "URL cannot use javascript:, data:, or vbscript: scheme" },
    ),
  Vat = Ia({
    resource: pe().url(),
    authorization_servers: en(O).optional(),
    jwks_uri: pe().url().optional(),
    scopes_supported: en(pe()).optional(),
    bearer_methods_supported: en(pe()).optional(),
    resource_signing_alg_values_supported: en(pe()).optional(),
    resource_name: pe().optional(),
    resource_documentation: pe().optional(),
    resource_policy_uri: pe().url().optional(),
    resource_tos_uri: pe().url().optional(),
    tls_client_certificate_bound_access_tokens: $i().optional(),
    authorization_details_types_supported: en(pe()).optional(),
    dpop_signing_alg_values_supported: en(pe()).optional(),
    dpop_bound_access_tokens_required: $i().optional(),
  }),
  $ae = Ia({
    issuer: pe(),
    authorization_endpoint: O,
    token_endpoint: O,
    registration_endpoint: O.optional(),
    scopes_supported: en(pe()).optional(),
    response_types_supported: en(pe()),
    response_modes_supported: en(pe()).optional(),
    grant_types_supported: en(pe()).optional(),
    token_endpoint_auth_methods_supported: en(pe()).optional(),
    token_endpoint_auth_signing_alg_values_supported: en(pe()).optional(),
    service_documentation: O.optional(),
    revocation_endpoint: O.optional(),
    revocation_endpoint_auth_methods_supported: en(pe()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: en(pe()).optional(),
    introspection_endpoint: pe().optional(),
    introspection_endpoint_auth_methods_supported: en(pe()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: en(pe()).optional(),
    code_challenge_methods_supported: en(pe()).optional(),
    client_id_metadata_document_supported: $i().optional(),
    authorization_response_iss_parameter_supported: $i()
      .optional()
      .catch(void 0),
  }),
  LLt = Ia({
    issuer: pe(),
    authorization_endpoint: O,
    token_endpoint: O,
    userinfo_endpoint: O.optional(),
    jwks_uri: O,
    registration_endpoint: O.optional(),
    scopes_supported: en(pe()).optional(),
    response_types_supported: en(pe()),
    response_modes_supported: en(pe()).optional(),
    grant_types_supported: en(pe()).optional(),
    acr_values_supported: en(pe()).optional(),
    subject_types_supported: en(pe()),
    id_token_signing_alg_values_supported: en(pe()),
    id_token_encryption_alg_values_supported: en(pe()).optional(),
    id_token_encryption_enc_values_supported: en(pe()).optional(),
    userinfo_signing_alg_values_supported: en(pe()).optional(),
    userinfo_encryption_alg_values_supported: en(pe()).optional(),
    userinfo_encryption_enc_values_supported: en(pe()).optional(),
    request_object_signing_alg_values_supported: en(pe()).optional(),
    request_object_encryption_alg_values_supported: en(pe()).optional(),
    request_object_encryption_enc_values_supported: en(pe()).optional(),
    token_endpoint_auth_methods_supported: en(pe()).optional(),
    token_endpoint_auth_signing_alg_values_supported: en(pe()).optional(),
    display_values_supported: en(pe()).optional(),
    claim_types_supported: en(pe()).optional(),
    claims_supported: en(pe()).optional(),
    service_documentation: pe().optional(),
    claims_locales_supported: en(pe()).optional(),
    ui_locales_supported: en(pe()).optional(),
    claims_parameter_supported: $i().optional(),
    request_parameter_supported: $i().optional(),
    request_uri_parameter_supported: $i().optional(),
    require_request_uri_registration: $i().optional(),
    op_policy_uri: O.optional(),
    op_tos_uri: O.optional(),
    client_id_metadata_document_supported: $i().optional(),
    authorization_response_iss_parameter_supported: $i()
      .optional()
      .catch(void 0),
  }),
  P_e = lt({ ...LLt.shape, ...$ae.pick({ code_challenge_methods_supported: true }).shape }),
  D_e = lt({
    access_token: pe(),
    id_token: pe().optional(),
    token_type: pe(),
    expires_in: Ce.number().optional(),
    scope: pe().optional(),
    refresh_token: pe().optional(),
  }).strip(),
  MLt = lt({
    issued_token_type: nn("urn:ietf:params:oauth:token-type:id-jag"),
    access_token: pe(),
    token_type: pe().optional(),
    expires_in: Fr().optional(),
    scope: pe().optional(),
  }).strip(),
  O_e = lt({ error: pe(), error_description: pe().optional(), error_uri: pe().optional() }),
  fi = O.optional().or(
    nn("").transform(() => {
      return;
    }),
  ),
  NLt = lt({
    redirect_uris: en(O),
    token_endpoint_auth_method: pe().optional(),
    grant_types: en(pe()).optional(),
    response_types: en(pe()).optional(),
    application_type: pe().optional(),
    client_name: pe().optional(),
    client_uri: O.optional(),
    logo_uri: fi,
    scope: pe().optional(),
    contacts: en(pe()).optional(),
    tos_uri: fi,
    policy_uri: pe().optional(),
    jwks_uri: O.optional(),
    jwks: ni().optional(),
    software_id: pe().optional(),
    software_version: pe().optional(),
    software_statement: pe().optional(),
  }).strip(),
  FLt = lt({
    client_id: pe(),
    client_secret: pe().optional(),
    client_id_issued_at: Fr().optional(),
    client_secret_expires_at: Fr().optional(),
  }).strip(),
  Kat = NLt.merge(FLt),
  fon = lt({ error: pe(), error_description: pe().optional() }).strip(),
  mon = lt({ token: pe(), token_type_hint: pe().optional() }).strip();
export {
  uOt,
  jZ,
  dOt,
  pe,
  N6n,
  pOt,
  Fr,
  $i,
  WHe,
  Ks,
  en,
  lt,
  Ia,
  Ki,
  BWe,
  Pae,
  hi,
  lc,
  nn,
  Ws,
  bat,
  qHe,
  jWe,
  GHe,
  Xrn,
  Dae,
  WWe,
  Oae,
  zHe,
  wat,
  qWe,
  F6n,
  b_e,
  IA,
  Yrn,
  Tat,
  Eat,
  fOt,
  VHe,
  Aat,
  xx,
  KHe,
  PA,
  vL,
  RL,
  Cat,
  kS,
  w_e,
  vat,
  Rat,
  GWe,
  zWe,
  TB,
  Jrn,
  kat,
  mOt,
  Hat,
  gOt,
  T_e,
  Lae,
  Mae,
  hOt,
  _Ot,
  yOt,
  SOt,
  xat,
  E_e,
  XHe,
  Iat,
  bOt,
  YHe,
  Pat,
  wOt,
  TOt,
  Dat,
  EOt,
  A_e,
  C_e,
  Oat,
  Lat,
  Mat,
  v_e,
  Nae,
  R_e,
  JHe,
  AOt,
  WZ,
  COt,
  QHe,
  VWe,
  vOt,
  ROt,
  kOt,
  HOt,
  xOt,
  IOt,
  POt,
  DOt,
  Nat,
  OOt,
  LOt,
  MOt,
  NOt,
  FOt,
  $Ot,
  UOt,
  BOt,
  jOt,
  ZHe,
  WOt,
  exe,
  qOt,
  GOt,
  KWe,
  XWe,
  YWe,
  zOt,
  VOt,
  KOt,
  JWe,
  XOt,
  YOt,
  JOt,
  QOt,
  ZOt,
  k_e,
  eLt,
  H_e,
  Fae,
  QWe,
  tLt,
  nLt,
  rLt,
  Fat,
  $at,
  oLt,
  iLt,
  sLt,
  aLt,
  lLt,
  cLt,
  uLt,
  dLt,
  pLt,
  txe,
  fLt,
  mLt,
  gLt,
  hLt,
  _Lt,
  Uat,
  ZWe,
  e9e,
  Bat,
  jat,
  Wat,
  yLt,
  qat,
  Gat,
  SLt,
  bLt,
  zat,
  t9e,
  nxe,
  rxe,
  wLt,
  TLt,
  ELt,
  ALt,
  CLt,
  vLt,
  RLt,
  kLt,
  HLt,
  xLt,
  ILt,
  PLt,
  DLt,
  Qrn,
  OLt,
  x_e,
  Zrn,
  oxe,
  eon,
  ton,
  n9e,
  non,
  ron,
  oon,
  ion,
  son,
  I_e,
  aon,
  lon,
  con,
  uon,
  don,
  pon,
  Vat,
  $ae,
  LLt,
  P_e,
  D_e,
  MLt,
  O_e,
  NLt,
  FLt,
  Kat,
  fon,
  mon,
};
