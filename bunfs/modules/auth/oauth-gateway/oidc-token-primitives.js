// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { S, ue } from "/$bunfs/root/modules/chunk-aestrhzj/prelude.js";

var wr = S(function (A3, qp) {
  var { format: Fp } = ue("util");
  class Bp extends Error {
    constructor({ error_description: e, error: t, error_uri: n, session_state: i, state: r, scope: o }, s) {
      super(!e ? t : `${t} (${e})`);
      if (
        (Object.assign(
          this,
          { error: t },
          e && { error_description: e },
          n && { error_uri: n },
          r && { state: r },
          o && { scope: o },
          i && { session_state: i },
        ),
        s)
      )
        Object.defineProperty(this, "response", { value: s });
      (this.name = this.constructor.name), Error.captureStackTrace(this, this.constructor);
    }
  }
  class Kp extends Error {
    constructor(...e) {
      if (typeof e[0] === "string") super(Fp(...e));
      else {
        let { message: t, printf: n, response: i, ...r } = e[0];
        if (n) super(Fp(...n));
        else super(t);
        if ((Object.assign(this, r), i)) Object.defineProperty(this, "response", { value: i });
      }
      (this.name = this.constructor.name), Error.captureStackTrace(this, this.constructor);
    }
  }
  qp.exports = { OPError: Bp, RPError: Kp };
});

var Gp = S(function (R3, Vp) {
  var bP = ue("crypto"),
    [Hp, vP] = process.version
      .substring(1)
      .split(".")
      .map((e) => parseInt(e, 10)),
    wP = Hp > 12 || (Hp === 12 && vP >= 8),
    SP = wP && bP.getHashes().includes("shake256");
  Vp.exports = SP;
});

var Xp = S(function (j3, Yp) {
  var { strict: Dc } = ue("assert"),
    { createHash: Co } = ue("crypto"),
    { format: Wp } = ue("util"),
    OP = Gp(),
    xc;
  if (Buffer.isEncoding("base64url")) xc = (e) => e.toString("base64url");
  else {
    let e = (t) => t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    xc = (t) => e(t.toString("base64"));
  }
  function kP(e, t) {
    switch (e) {
      case "HS256":
      case "RS256":
      case "PS256":
      case "ES256":
      case "ES256K":
        return Co("sha256");
      case "HS384":
      case "RS384":
      case "PS384":
      case "ES384":
        return Co("sha384");
      case "HS512":
      case "RS512":
      case "PS512":
      case "ES512":
        return Co("sha512");
      case "EdDSA":
        switch (t) {
          case "Ed25519":
            return Co("sha512");
          case "Ed448":
            if (!OP) throw TypeError("Ed448 *_hash calculation is not supported in your Node.js runtime version");
            return Co("shake256", { outputLength: 114 });
          default:
            throw TypeError("unrecognized or invalid EdDSA curve provided");
        }
      default:
        throw TypeError("unrecognized or invalid JWS algorithm provided");
    }
  }
  function Jp(e, t, n) {
    let i = kP(t, n).update(e).digest();
    return xc(i.slice(0, i.length / 2));
  }
  function PP(e, t, n, i, r) {
    if (typeof e.claim !== "string" || !e.claim) throw TypeError("names.claim must be a non-empty string");
    if (typeof e.source !== "string" || !e.source) throw TypeError("names.source must be a non-empty string");
    Dc(typeof t === "string" && t, `${e.claim} must be a non-empty string`),
      Dc(typeof n === "string" && n, `${e.source} must be a non-empty string`);
    let o, s;
    try {
      o = Jp(n, i, r);
    } catch (u) {
      s = Wp("%s could not be validated (%s)", e.claim, u.message);
    }
    (s = s || Wp("%s mismatch, expected %s, got: %s", e.claim, o, t)), Dc.equal(o, t, s);
  }
  Yp.exports = { validate: PP, generate: Jp };
});

var em = S(function (C3, Qp) {
  var EP = ue("util"),
    $P = ue("crypto");
  Qp.exports = EP.types.isKeyObject || ((e) => e && e instanceof $P.KeyObject);
});

var Do = S(function (TP, zc) {
  var Mc;
  if (Buffer.isEncoding("base64url")) Mc = (e, t = "utf8") => Buffer.from(e, t).toString("base64url");
  else {
    let e = (t) => t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    Mc = (t, n = "utf8") => e(Buffer.from(t, n).toString("base64"));
  }
  var IP = (e) => Buffer.from(e, "base64");
  TP.decode = IP;
  TP.encode = Mc;
});

var nm = S(function (D3, rm) {
  var tm = Do();
  rm.exports = (e) => {
    if (typeof e !== "string" || !e) throw TypeError("JWT must be a string");
    let { 0: t, 1: n, 2: i, length: r } = e.split(".");
    if (r === 5) throw TypeError("encrypted JWTs cannot be decoded");
    if (r !== 3) throw Error("JWTs must have three components");
    try {
      return { header: JSON.parse(tm.decode(t)), payload: JSON.parse(tm.decode(n)), signature: i };
    } catch (o) {
      throw Error("JWT is malformed");
    }
  };
});

var xo = S(function (x3, im) {
  im.exports = (e) => !!e && e.constructor === Object;
});

var Zc = S(function (M3, Nc) {
  var Lc = xo();
  function Uc(e, t, ...n) {
    for (let i of n) {
      if (!Lc(i)) continue;
      for (let [r, o] of Object.entries(i)) {
        if (r === "__proto__" || r === "constructor") continue;
        if (typeof t[r] > "u" && typeof o < "u") t[r] = o;
        if (e && Lc(t[r]) && Lc(o)) Uc(true, t[r], o);
      }
    }
    return t;
  }
  Nc.exports = Uc.bind(void 0, false);
  Nc.exports.deep = Uc.bind(void 0, true);
});

var Fc = S(function (z3, om) {
  var jP = /(\w+)=("[^"]*")/g;
  om.exports = (e) => {
    let t = {};
    try {
      while (jP.exec(e) !== null) if (RegExp.$1 && RegExp.$2) t[RegExp.$1] = RegExp.$2.slice(1, -1);
    } catch (n) {}
    return t;
  };
});

var Na = S(function (L3, am) {
  function CP(e, t, n) {
    if (!t[`${e}_endpoint`]) return;
    let i = `${e}_endpoint_auth_method`,
      r = `${e}_endpoint_auth_signing_alg`,
      o = `${e}_endpoint_auth_signing_alg_values_supported`;
    if (n[i] && n[i].endsWith("_jwt") && !n[r] && !t[o])
      throw TypeError(`${o} must be configured on the issuer if ${r} is not defined on a client`);
  }
  function DP(e, t) {
    if (!e[t]) throw TypeError(`${t} must be configured on the issuer`);
  }
  am.exports = { assertSigningAlgValuesSupport: CP, assertIssuerConfiguration: DP };
});

var Za = S(function (U3, sm) {
  sm.exports = function (t, ...n) {
    let i = {};
    for (let r of n) if (t[r] !== void 0) i[r] = t[r];
    return i;
  };
});

var Ba = S(function (N3, cm) {
  var { STATUS_CODES: Bc } = ue("http"),
    { format: um } = ue("util"),
    { OPError: Fa } = wr(),
    xP = Fc(),
    MP = (e) => {
      let t = xP(e.headers["www-authenticate"]);
      if (t.error) throw new Fa(t, e);
    },
    zP = (e) => {
      let t = false;
      try {
        let n;
        if (typeof e.body !== "object" || Buffer.isBuffer(e.body)) n = JSON.parse(e.body);
        else n = e.body;
        if (((t = typeof n.error === "string" && n.error.length), t))
          Object.defineProperty(e, "body", { value: n, configurable: true });
      } catch (n) {}
      return t;
    };
  function LP(e, { statusCode: t = 200, body: n = true, bearer: i = false } = {}) {
    if (e.statusCode !== t) {
      if (i) MP(e);
      if (zP(e)) throw new Fa(e.body, e);
      throw new Fa({ error: um("expected %i %s, got: %i %s", t, Bc[t], e.statusCode, Bc[e.statusCode]) }, e);
    }
    if (n && !e.body) throw new Fa({ error: um("expected %i %s with body but no body was returned", t, Bc[t]) }, e);
    return e.body;
  }
  cm.exports = LP;
});

var Mo = S(function (Z3, lm) {
  lm.exports = () => Math.floor(Date.now() / 1000);
});

var Kc = S(function (F3, pm) {
  var UP = Do(),
    dm = Mo();
  class fm {
    constructor(e) {
      Object.assign(this, e);
      let { constructor: t, ...n } = Object.getOwnPropertyDescriptors(this.constructor.prototype);
      Object.defineProperties(this, n);
    }
    set expires_in(e) {
      this.expires_at = dm() + Number(e);
    }
    get expires_in() {
      return Math.max.apply(null, [this.expires_at - dm(), 0]);
    }
    expired() {
      return this.expires_in === 0;
    }
    claims() {
      if (!this.id_token) throw TypeError("id_token not present in TokenSet");
      return JSON.parse(UP.decode(this.id_token.split(".")[1]));
    }
  }
  pm.exports = fm;
});

var zo = S(function (B3, gm) {
  var { createHash: NP, randomBytes: ZP } = ue("crypto"),
    mm = Do(),
    Ka = (e = 32) => mm.encode(ZP(e));
  gm.exports = {
    random: Ka,
    state: Ka,
    nonce: Ka,
    codeVerifier: Ka,
    codeChallenge: (e) => mm.encode(NP("sha256").update(e).digest()),
  };
});

var _m = S(function (K3, hm) {
  hm.exports = function (e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next) yield t.value;
    };
  };
});

var bm = S(function (q3, ym) {
  ym.exports = Ce;
  Ce.Node = li;
  Ce.create = Ce;
  function Ce(e) {
    var t = this;
    if (!(t instanceof Ce)) t = new Ce();
    if (((t.tail = null), (t.head = null), (t.length = 0), e && typeof e.forEach === "function"))
      e.forEach(function (r) {
        t.push(r);
      });
    else if (arguments.length > 0) for (var n = 0, i = arguments.length; n < i; n++) t.push(arguments[n]);
    return t;
  }
  Ce.prototype.removeNode = function (e) {
    if (e.list !== this) throw Error("removing node which does not belong to this list");
    var { next: t, prev: n } = e;
    if (t) t.prev = n;
    if (n) n.next = t;
    if (e === this.head) this.head = t;
    if (e === this.tail) this.tail = n;
    return e.list.length--, (e.next = null), (e.prev = null), (e.list = null), t;
  };
  Ce.prototype.unshiftNode = function (e) {
    if (e === this.head) return;
    if (e.list) e.list.removeNode(e);
    var t = this.head;
    if (((e.list = this), (e.next = t), t)) t.prev = e;
    if (((this.head = e), !this.tail)) this.tail = e;
    this.length++;
  };
  Ce.prototype.pushNode = function (e) {
    if (e === this.tail) return;
    if (e.list) e.list.removeNode(e);
    var t = this.tail;
    if (((e.list = this), (e.prev = t), t)) t.next = e;
    if (((this.tail = e), !this.head)) this.head = e;
    this.length++;
  };
  Ce.prototype.push = function () {
    for (var e = 0, t = arguments.length; e < t; e++) BP(this, arguments[e]);
    return this.length;
  };
  Ce.prototype.unshift = function () {
    for (var e = 0, t = arguments.length; e < t; e++) KP(this, arguments[e]);
    return this.length;
  };
  Ce.prototype.pop = function () {
    if (!this.tail) return;
    var e = this.tail.value;
    if (((this.tail = this.tail.prev), this.tail)) this.tail.next = null;
    else this.head = null;
    return this.length--, e;
  };
  Ce.prototype.shift = function () {
    if (!this.head) return;
    var e = this.head.value;
    if (((this.head = this.head.next), this.head)) this.head.prev = null;
    else this.tail = null;
    return this.length--, e;
  };
  Ce.prototype.forEach = function (e, t) {
    t = t || this;
    for (var n = this.head, i = 0; n !== null; i++) e.call(t, n.value, i, this), (n = n.next);
  };
  Ce.prototype.forEachReverse = function (e, t) {
    t = t || this;
    for (var n = this.tail, i = this.length - 1; n !== null; i--) e.call(t, n.value, i, this), (n = n.prev);
  };
  Ce.prototype.get = function (e) {
    for (var t = 0, n = this.head; n !== null && t < e; t++) n = n.next;
    if (t === e && n !== null) return n.value;
  };
  Ce.prototype.getReverse = function (e) {
    for (var t = 0, n = this.tail; n !== null && t < e; t++) n = n.prev;
    if (t === e && n !== null) return n.value;
  };
  Ce.prototype.map = function (e, t) {
    t = t || this;
    var n = new Ce();
    for (var i = this.head; i !== null; ) n.push(e.call(t, i.value, this)), (i = i.next);
    return n;
  };
  Ce.prototype.mapReverse = function (e, t) {
    t = t || this;
    var n = new Ce();
    for (var i = this.tail; i !== null; ) n.push(e.call(t, i.value, this)), (i = i.prev);
    return n;
  };
  Ce.prototype.reduce = function (e, t) {
    var n,
      i = this.head;
    if (arguments.length > 1) n = t;
    else if (this.head) (i = this.head.next), (n = this.head.value);
    else throw TypeError("Reduce of empty list with no initial value");
    for (var r = 0; i !== null; r++) (n = e(n, i.value, r)), (i = i.next);
    return n;
  };
  Ce.prototype.reduceReverse = function (e, t) {
    var n,
      i = this.tail;
    if (arguments.length > 1) n = t;
    else if (this.tail) (i = this.tail.prev), (n = this.tail.value);
    else throw TypeError("Reduce of empty list with no initial value");
    for (var r = this.length - 1; i !== null; r--) (n = e(n, i.value, r)), (i = i.prev);
    return n;
  };
  Ce.prototype.toArray = function () {
    var e = Array(this.length);
    for (var t = 0, n = this.head; n !== null; t++) (e[t] = n.value), (n = n.next);
    return e;
  };
  Ce.prototype.toArrayReverse = function () {
    var e = Array(this.length);
    for (var t = 0, n = this.tail; n !== null; t++) (e[t] = n.value), (n = n.prev);
    return e;
  };
  Ce.prototype.slice = function (e, t) {
    if (((t = t || this.length), t < 0)) t += this.length;
    if (((e = e || 0), e < 0)) e += this.length;
    var n = new Ce();
    if (t < e || t < 0) return n;
    if (e < 0) e = 0;
    if (t > this.length) t = this.length;
    for (var i = 0, r = this.head; r !== null && i < e; i++) r = r.next;
    for (; r !== null && i < t; i++, r = r.next) n.push(r.value);
    return n;
  };
  Ce.prototype.sliceReverse = function (e, t) {
    if (((t = t || this.length), t < 0)) t += this.length;
    if (((e = e || 0), e < 0)) e += this.length;
    var n = new Ce();
    if (t < e || t < 0) return n;
    if (e < 0) e = 0;
    if (t > this.length) t = this.length;
    for (var i = this.length, r = this.tail; r !== null && i > t; i--) r = r.prev;
    for (; r !== null && i > e; i--, r = r.prev) n.push(r.value);
    return n;
  };
  Ce.prototype.splice = function (e, t, ...n) {
    if (e > this.length) e = this.length - 1;
    if (e < 0) e = this.length + e;
    for (var i = 0, r = this.head; r !== null && i < e; i++) r = r.next;
    var o = [];
    for (var i = 0; r && i < t; i++) o.push(r.value), (r = this.removeNode(r));
    if (r === null) r = this.tail;
    if (r !== this.head && r !== this.tail) r = r.prev;
    for (var i = 0; i < n.length; i++) r = FP(this, r, n[i]);
    return o;
  };
  Ce.prototype.reverse = function () {
    var e = this.head,
      t = this.tail;
    for (var n = e; n !== null; n = n.prev) {
      var i = n.prev;
      (n.prev = n.next), (n.next = i);
    }
    return (this.head = t), (this.tail = e), this;
  };
  function FP(e, t, n) {
    var i = t === e.head ? new li(n, null, t, e) : new li(n, t, t.next, e);
    if (i.next === null) e.tail = i;
    if (i.prev === null) e.head = i;
    return e.length++, i;
  }
  function BP(e, t) {
    if (((e.tail = new li(t, e.tail, null, e)), !e.head)) e.head = e.tail;
    e.length++;
  }
  function KP(e, t) {
    if (((e.head = new li(t, null, e.head, e)), !e.tail)) e.tail = e.head;
    e.length++;
  }
  function li(e, t, n, i) {
    if (!(this instanceof li)) return new li(e, t, n, i);
    if (((this.list = i), (this.value = e), t)) (t.next = this), (this.prev = t);
    else this.prev = null;
    if (n) (n.prev = this), (this.next = n);
    else this.next = null;
  }
  try {
    _m()(Ce);
  } catch (e) {}
});

var Ha = S(function (H3, Pm) {
  var qP = bm(),
    di = Symbol("max"),
    Tn = Symbol("length"),
    Mi = Symbol("lengthCalculator"),
    Uo = Symbol("allowStale"),
    fi = Symbol("maxAge"),
    In = Symbol("dispose"),
    vm = Symbol("noDisposeOnSet"),
    dt = Symbol("lruList"),
    pr = Symbol("cache"),
    Sm = Symbol("updateAgeOnGet"),
    qc = () => 1;
  class Om {
    constructor(e) {
      if (typeof e === "number") e = { max: e };
      if (!e) e = {};
      if (e.max && (typeof e.max !== "number" || e.max < 0)) throw TypeError("max must be a non-negative number");
      let t = (this[di] = e.max || 1 / 0),
        n = e.length || qc;
      if (
        ((this[Mi] = typeof n !== "function" ? qc : n),
        (this[Uo] = e.stale || false),
        e.maxAge && typeof e.maxAge !== "number")
      )
        throw TypeError("maxAge must be a number");
      (this[fi] = e.maxAge || 0),
        (this[In] = e.dispose),
        (this[vm] = e.noDisposeOnSet || false),
        (this[Sm] = e.updateAgeOnGet || false),
        this.reset();
    }
    set max(e) {
      if (typeof e !== "number" || e < 0) throw TypeError("max must be a non-negative number");
      (this[di] = e || 1 / 0), Lo(this);
    }
    get max() {
      return this[di];
    }
    set allowStale(e) {
      this[Uo] = !!e;
    }
    get allowStale() {
      return this[Uo];
    }
    set maxAge(e) {
      if (typeof e !== "number") throw TypeError("maxAge must be a non-negative number");
      (this[fi] = e), Lo(this);
    }
    get maxAge() {
      return this[fi];
    }
    set lengthCalculator(e) {
      if (typeof e !== "function") e = qc;
      if (e !== this[Mi])
        (this[Mi] = e),
          (this[Tn] = 0),
          this[dt].forEach((t) => {
            (t.length = this[Mi](t.value, t.key)), (this[Tn] += t.length);
          });
      Lo(this);
    }
    get lengthCalculator() {
      return this[Mi];
    }
    get length() {
      return this[Tn];
    }
    get itemCount() {
      return this[dt].length;
    }
    rforEach(e, t) {
      t = t || this;
      for (let n = this[dt].tail; n !== null; ) {
        let i = n.prev;
        wm(this, e, n, t), (n = i);
      }
    }
    forEach(e, t) {
      t = t || this;
      for (let n = this[dt].head; n !== null; ) {
        let i = n.next;
        wm(this, e, n, t), (n = i);
      }
    }
    keys() {
      return this[dt].toArray().map((e) => e.key);
    }
    values() {
      return this[dt].toArray().map((e) => e.value);
    }
    reset() {
      if (this[In] && this[dt] && this[dt].length) this[dt].forEach((e) => this[In](e.key, e.value));
      (this[pr] = new Map()), (this[dt] = new qP()), (this[Tn] = 0);
    }
    dump() {
      return this[dt]
        .map((e) => (qa(this, e) ? false : { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) }))
        .toArray()
        .filter((e) => e);
    }
    dumpLru() {
      return this[dt];
    }
    set(e, t, n) {
      if (((n = n || this[fi]), n && typeof n !== "number")) throw TypeError("maxAge must be a number");
      let i = n ? Date.now() : 0,
        r = this[Mi](t, e);
      if (this[pr].has(e)) {
        if (r > this[di]) return zi(this, this[pr].get(e)), false;
        let u = this[pr].get(e).value;
        if (this[In]) {
          if (!this[vm]) this[In](e, u.value);
        }
        return (
          (u.now = i),
          (u.maxAge = n),
          (u.value = t),
          (this[Tn] += r - u.length),
          (u.length = r),
          this.get(e),
          Lo(this),
          true
        );
      }
      let o = new km(e, t, r, i, n);
      if (o.length > this[di]) {
        if (this[In]) this[In](e, t);
        return false;
      }
      return (this[Tn] += o.length), this[dt].unshift(o), this[pr].set(e, this[dt].head), Lo(this), true;
    }
    has(e) {
      if (!this[pr].has(e)) return false;
      let t = this[pr].get(e).value;
      return !qa(this, t);
    }
    get(e) {
      return Hc(this, e, true);
    }
    peek(e) {
      return Hc(this, e, false);
    }
    pop() {
      let e = this[dt].tail;
      if (!e) return null;
      return zi(this, e), e.value;
    }
    del(e) {
      zi(this, this[pr].get(e));
    }
    load(e) {
      this.reset();
      let t = Date.now();
      for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n],
          r = i.e || 0;
        if (r === 0) this.set(i.k, i.v);
        else {
          let o = r - t;
          if (o > 0) this.set(i.k, i.v, o);
        }
      }
    }
    prune() {
      this[pr].forEach((e, t) => Hc(this, t, false));
    }
  }
  var Hc = (e, t, n) => {
      let i = e[pr].get(t);
      if (i) {
        let r = i.value;
        if (qa(e, r)) {
          if ((zi(e, i), !e[Uo])) return;
        } else if (n) {
          if (e[Sm]) i.value.now = Date.now();
          e[dt].unshiftNode(i);
        }
        return r.value;
      }
    },
    qa = (e, t) => {
      if (!t || (!t.maxAge && !e[fi])) return false;
      let n = Date.now() - t.now;
      return t.maxAge ? n > t.maxAge : e[fi] && n > e[fi];
    },
    Lo = (e) => {
      if (e[Tn] > e[di])
        for (let t = e[dt].tail; e[Tn] > e[di] && t !== null; ) {
          let n = t.prev;
          zi(e, t), (t = n);
        }
    },
    zi = (e, t) => {
      if (t) {
        let n = t.value;
        if (e[In]) e[In](n.key, n.value);
        (e[Tn] -= n.length), e[pr].delete(n.key), e[dt].removeNode(t);
      }
    };
  class km {
    constructor(e, t, n, i, r) {
      (this.key = e), (this.value = t), (this.length = n), (this.now = i), (this.maxAge = r || 0);
    }
  }
  var wm = (e, t, n, i) => {
    let r = n.value;
    if (qa(e, r)) {
      if ((zi(e, n), !e[Uo])) r = void 0;
    }
    if (r) t.call(i, r.value, r.key, e);
  };
  Pm.exports = Om;
});

var Em = S(function (V3, HP) {
  HP.exports = {
    name: "openid-client",
    version: "5.7.1",
    description: "OpenID Connect Relying Party (RP, Client) implementation for Node.js runtime, supports passportjs",
    keywords: [
      "auth",
      "authentication",
      "basic",
      "certified",
      "client",
      "connect",
      "dynamic",
      "electron",
      "hybrid",
      "identity",
      "implicit",
      "oauth",
      "oauth2",
      "oidc",
      "openid",
      "passport",
      "relying party",
      "strategy",
    ],
    homepage: "https://github.com/panva/openid-client",
    repository: "panva/openid-client",
    funding: { url: "https://github.com/sponsors/panva" },
    license: "MIT",
    author: "Filip Skokan <panva.ip@gmail.com>",
    exports: { types: "./types/index.d.ts", import: "./lib/index.mjs", require: "./lib/index.js" },
    main: "./lib/index.js",
    types: "./types/index.d.ts",
    files: ["lib", "types/index.d.ts"],
    scripts: {
      format: "npx prettier --loglevel silent --write ./lib ./test ./certification ./types",
      test: "mocha test/**/*.test.js",
    },
    dependencies: { jose: "^4.15.9", "lru-cache": "^6.0.0", "object-hash": "^2.2.0", "oidc-token-hash": "^5.0.3" },
    devDependencies: {
      "@types/node": "^16.18.106",
      "@types/passport": "^1.0.16",
      base64url: "^3.0.1",
      chai: "^4.5.0",
      mocha: "^10.7.3",
      nock: "^13.5.5",
      prettier: "^2.8.8",
      "readable-mock-req": "^0.2.2",
      sinon: "^9.2.4",
      timekeeper: "^2.3.1",
    },
    "standard-version": {
      scripts: { postchangelog: "sed -i '' -e 's/### \\[/## [/g' CHANGELOG.md" },
      types: [
        { type: "feat", section: "Features" },
        { type: "fix", section: "Fixes" },
        { type: "chore", hidden: true },
        { type: "docs", hidden: true },
        { type: "style", hidden: true },
        { type: "refactor", section: "Refactor", hidden: false },
        { type: "perf", section: "Performance", hidden: false },
        { type: "test", hidden: true },
      ],
    },
  };
});

var Va = S(function (G3, $m) {
  var VP = Symbol(),
    GP = Symbol();
  $m.exports = { CLOCK_TOLERANCE: GP, HTTP_OPTIONS: VP };
});

var Li = S(function (W3, Wc) {
  var WP = ue("assert"),
    JP = ue("querystring"),
    YP = ue("http"),
    XP = ue("https"),
    { once: Im } = ue("events"),
    { URL: QP } = ue("url"),
    eE = Ha(),
    Vc = Em(),
    { RPError: tE } = wr(),
    Am = Za(),
    { deep: Gc } = Zc(),
    { HTTP_OPTIONS: rE } = Va(),
    Wa,
    nE = /^[\x21\x23-\x5B\x5D-\x7E]+$/,
    Rm = ["agent", "ca", "cert", "crl", "headers", "key", "lookup", "passphrase", "pfx", "timeout"],
    Cm = (e, t) => {
      Wa = Gc({}, e.length ? Am(t, ...e) : t, Wa);
    };
  Cm([], {
    headers: { "User-Agent": `${Vc.name}/${Vc.version} (${Vc.homepage})`, "Accept-Encoding": "identity" },
    timeout: 3500,
  });
  function Ga(e, t, n) {
    if (n) e.removeHeader("content-type"), e.setHeader("content-type", n);
    if (t) e.removeHeader("content-length"), e.setHeader("content-length", Buffer.byteLength(t)), e.write(t);
    e.end();
  }
  var Tm = new eE({ max: 100 });
  Wc.exports = async function (t, { accessToken: n, mTLS: i = false, DPoP: r } = {}) {
    let o;
    try {
      (o = new QP(t.url)), delete t.url, WP(/^(https?:)$/.test(o.protocol));
    } catch (P) {
      throw TypeError("only valid absolute URLs can be requested");
    }
    let s = this[rE],
      u = t,
      c = `${o.origin}${o.pathname}`;
    if (r && "dpopProof" in this)
      (u.headers = u.headers || {}),
        (u.headers.DPoP = await this.dpopProof(
          { htu: `${o.origin}${o.pathname}`, htm: t.method || "GET", nonce: Tm.get(c) },
          r,
          n,
        ));
    let d;
    if (s) d = Am(s.call(this, o, Gc({}, u, Wa)), ...Rm);
    if (((u = Gc({}, d, u, Wa)), i && !u.pfx && !(u.key && u.cert)))
      throw TypeError("mutual-TLS certificate and key not set");
    if (u.searchParams)
      for (let [P, B] of Object.entries(u.searchParams)) o.searchParams.delete(P), o.searchParams.set(P, B);
    let f, p, h, y;
    ({ form: p, responseType: f, json: h, body: y, ...u } = u);
    for (let [P, B] of Object.entries(u.headers || {})) if (B === void 0) delete u.headers[P];
    let v,
      k = (o.protocol === "https:" ? XP.request : YP.request)(o.href, u);
    return (async () => {
      if (h) Ga(k, JSON.stringify(h), "application/json");
      else if (p) Ga(k, JP.stringify(p), "application/x-www-form-urlencoded");
      else if (y) Ga(k, y);
      else Ga(k);
      if ((([v] = await Promise.race([Im(k, "response"), Im(k, "timeout")])), !v))
        throw (k.destroy(), new tE(`outgoing request timed out after ${u.timeout}ms`));
      let P = [];
      for await (let B of v) P.push(B);
      if (P.length)
        switch (f) {
          case "json": {
            Object.defineProperty(v, "body", {
              get() {
                let B = Buffer.concat(P);
                try {
                  B = JSON.parse(B);
                } catch (Q) {
                  throw (Object.defineProperty(Q, "response", { value: v }), Q);
                } finally {
                  Object.defineProperty(v, "body", { value: B, configurable: true });
                }
                return B;
              },
              configurable: true,
            });
            break;
          }
          case void 0:
          case "buffer": {
            Object.defineProperty(v, "body", {
              get() {
                let B = Buffer.concat(P);
                return Object.defineProperty(v, "body", { value: B, configurable: true }), B;
              },
              configurable: true,
            });
            break;
          }
          default:
            throw TypeError("unsupported responseType request option");
        }
      return v;
    })()
      .catch((P) => {
        if (v) Object.defineProperty(P, "response", { value: v });
        throw P;
      })
      .finally(() => {
        let P = v && v.headers["dpop-nonce"];
        if (P && nE.test(P)) Tm.set(c, P);
      });
  };
  Wc.exports.setDefaults = Cm.bind(void 0, Rm);
});

var Ja = S(function (iE, Dm) {
  iE.keystores = new WeakMap();
});

var No = S(function (J3, xm) {
  xm.exports = globalThis.structuredClone || ((e) => JSON.parse(JSON.stringify(e)));
});

var Yc = S(function (Y3, Um) {
  var Jc = import.meta.require("/$bunfs/root/chunk-0qcyqfqc.js"),
    aE = No(),
    Mm = xo(),
    zm = Symbol(),
    Lm = (e, { alg: t, use: n }) => {
      let i = 0;
      if (t && e.alg) i++;
      if (n && e.use) i++;
      return i;
    };
  function sE(e) {
    switch (typeof e === "string" && e.slice(0, 2)) {
      case "RS":
      case "PS":
        return "RSA";
      case "ES":
        return "EC";
      case "Ed":
        return "OKP";
      default:
        return;
    }
  }
  function uE(e, t, n, i) {
    if (t) return new Set([t]);
    switch (n) {
      case "EC": {
        let r = [];
        if (e === "enc" || e === void 0)
          r = r.concat(["ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A192KW", "ECDH-ES+A256KW"]);
        if (e === "sig" || e === void 0)
          switch (i) {
            case "P-256":
            case "P-384":
              r = r.concat([`ES${i.slice(-3)}`]);
              break;
            case "P-521":
              r = r.concat(["ES512"]);
              break;
            case "secp256k1":
              if (Jc.cryptoRuntime === "node:crypto") r = r.concat(["ES256K"]);
              break;
          }
        return new Set(r);
      }
      case "OKP":
        return new Set(["ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A192KW", "ECDH-ES+A256KW"]);
      case "RSA": {
        let r = [];
        if (e === "enc" || e === void 0) {
          if (
            ((r = r.concat(["RSA-OAEP", "RSA-OAEP-256", "RSA-OAEP-384", "RSA-OAEP-512"])),
            Jc.cryptoRuntime === "node:crypto")
          )
            r = r.concat(["RSA1_5"]);
        }
        if (e === "sig" || e === void 0) r = r.concat(["PS256", "PS384", "PS512", "RS256", "RS384", "RS512"]);
        return new Set(r);
      }
      default:
        throw Error("unreachable");
    }
  }
  Um.exports = class {
    #e;
    constructor(t, n) {
      if (t !== zm) throw Error("invalid constructor call");
      this.#e = n;
    }
    toJWKS() {
      return { keys: this.map(({ jwk: { d: t, p: n, q: i, dp: r, dq: o, qi: s, ...u } }) => u) };
    }
    all({ alg: t, kid: n, use: i } = {}) {
      if (!i || !t) throw Error();
      let r = sE(t),
        o = { alg: t, use: i };
      return this.filter((s) => {
        let u = true;
        if (u && r !== void 0 && s.jwk.kty !== r) u = false;
        if (u && n !== void 0 && s.jwk.kid !== n) u = false;
        if (u && i !== void 0 && s.jwk.use !== void 0 && s.jwk.use !== i) u = false;
        if (u && s.jwk.alg && s.jwk.alg !== t) u = false;
        else if (!s.algorithms.has(t)) u = false;
        return u;
      }).sort((s, u) => Lm(u, o) - Lm(s, o));
    }
    get(...t) {
      return this.all(...t)[0];
    }
    static async fromJWKS(t, { onlyPublic: n = false, onlyPrivate: i = false } = {}) {
      if (!Mm(t) || !Array.isArray(t.keys) || t.keys.some((o) => !Mm(o) || !("kty" in o)))
        throw TypeError("jwks must be a JSON Web Key Set formatted object");
      let r = [];
      for (let o of t.keys) {
        o = aE(o);
        let { kty: s, kid: u, crv: c } = o,
          { alg: d, use: f } = o;
        if (typeof s !== "string" || !s) continue;
        if (f !== void 0 && f !== "sig" && f !== "enc") continue;
        if (typeof d !== "string" && d !== void 0) continue;
        if (typeof u !== "string" && u !== void 0) continue;
        if (s === "EC" && f === "sig")
          switch (c) {
            case "P-256":
              d = "ES256";
              break;
            case "P-384":
              d = "ES384";
              break;
            case "P-521":
              d = "ES512";
              break;
            default:
              break;
          }
        if (c === "secp256k1") (f = "sig"), (d = "ES256K");
        if (s === "OKP")
          switch (c) {
            case "Ed25519":
            case "Ed448":
              (f = "sig"), (d = "EdDSA");
              break;
            case "X25519":
            case "X448":
              f = "enc";
              break;
            default:
              break;
          }
        if (d && !f)
          switch (true) {
            case d.startsWith("ECDH"):
              f = "enc";
              break;
            case d.startsWith("RSA"):
              f = "enc";
              break;
            default:
              break;
          }
        if (i && (o.kty === "oct" || !o.d)) throw Error("jwks must only contain private keys");
        if (n && (o.d || o.k)) continue;
        r.push({
          jwk: { ...o, alg: d, use: f },
          async keyObject(p) {
            if (this[p]) return this[p];
            let h = await Jc.importJWK(this.jwk, p);
            return (this[p] = h), h;
          },
          get algorithms() {
            return (
              Object.defineProperty(this, "algorithms", {
                value: uE(this.jwk.use, this.jwk.alg, this.jwk.kty, this.jwk.crv),
                enumerable: true,
                configurable: false,
              }),
              this.algorithms
            );
          },
        });
      }
      return new this(zm, r);
    }
    filter(...t) {
      return this.#e.filter(...t);
    }
    find(...t) {
      return this.#e.find(...t);
    }
    every(...t) {
      return this.#e.every(...t);
    }
    some(...t) {
      return this.#e.some(...t);
    }
    map(...t) {
      return this.#e.map(...t);
    }
    forEach(...t) {
      return this.#e.forEach(...t);
    }
    reduce(...t) {
      return this.#e.reduce(...t);
    }
    sort(...t) {
      return this.#e.sort(...t);
    }
    *[Symbol.iterator]() {
      for (let t of this.#e) yield t;
    }
  };
});

var Fm = S(function (X3, Zm) {
  var Xc = xo();
  function Nm(e, ...t) {
    for (let n of t) {
      if (!Xc(n)) continue;
      for (let [i, r] of Object.entries(n)) {
        if (i === "__proto__" || i === "constructor") continue;
        if (Xc(e[i]) && Xc(r)) e[i] = Nm(e[i], r);
        else if (typeof r < "u") e[i] = r;
      }
    }
    return e;
  }
  Zm.exports = Nm;
});

var el = S(function (Q3, Hm) {
  var Bm = import.meta.require("/$bunfs/root/chunk-0qcyqfqc.js"),
    { RPError: Qc } = wr(),
    { assertIssuerConfiguration: cE } = Na(),
    { random: lE } = zo(),
    dE = Mo(),
    fE = Li(),
    { keystores: pE } = Ja(),
    mE = Fm(),
    Km = (e) => encodeURIComponent(e).replace(/%20/g, "+");
  async function gE(e, t) {
    let n = this[`${e}_endpoint_auth_signing_alg`];
    if (!n) cE(this.issuer, `${e}_endpoint_auth_signing_alg_values_supported`);
    if (this[`${e}_endpoint_auth_method`] === "client_secret_jwt") {
      if (!n) {
        let o = this.issuer[`${e}_endpoint_auth_signing_alg_values_supported`];
        n = Array.isArray(o) && o.find((s) => /^HS(?:256|384|512)/.test(s));
      }
      if (!n)
        throw new Qc(
          `failed to determine a JWS Algorithm to use for ${this[`${e}_endpoint_auth_method`]} Client Assertion`,
        );
      return new Bm.CompactSign(Buffer.from(JSON.stringify(t)))
        .setProtectedHeader({ alg: n })
        .sign(this.secretForAlg(n));
    }
    let i = await pE.get(this);
    if (!i) throw TypeError("no client jwks provided for signing a client assertion with");
    if (!n) {
      let o = this.issuer[`${e}_endpoint_auth_signing_alg_values_supported`];
      n = Array.isArray(o) && o.find((s) => i.get({ alg: s, use: "sig" }));
    }
    if (!n)
      throw new Qc(
        `failed to determine a JWS Algorithm to use for ${this[`${e}_endpoint_auth_method`]} Client Assertion`,
      );
    let r = i.get({ alg: n, use: "sig" });
    if (!r) throw new Qc(`no key found in client jwks to sign a client assertion with using alg ${n}`);
    return new Bm.CompactSign(Buffer.from(JSON.stringify(t)))
      .setProtectedHeader({ alg: n, kid: r.jwk && r.jwk.kid })
      .sign(await r.keyObject(n));
  }
  async function qm(e, { clientAssertionPayload: t } = {}) {
    switch (this[`${e}_endpoint_auth_method`]) {
      case "self_signed_tls_client_auth":
      case "tls_client_auth":
      case "none":
        return { form: { client_id: this.client_id } };
      case "client_secret_post":
        if (typeof this.client_secret !== "string")
          throw TypeError("client_secret_post client authentication method requires a client_secret");
        return { form: { client_id: this.client_id, client_secret: this.client_secret } };
      case "private_key_jwt":
      case "client_secret_jwt": {
        let i = dE(),
          r = await gE.call(this, e, {
            iat: i,
            exp: i + 60,
            jti: lE(),
            iss: this.client_id,
            sub: this.client_id,
            aud: this.issuer.issuer,
            ...t,
          });
        return {
          form: {
            client_id: this.client_id,
            client_assertion: r,
            client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
          },
        };
      }
      case "client_secret_basic": {
        if (typeof this.client_secret !== "string")
          throw TypeError("client_secret_basic client authentication method requires a client_secret");
        let i = `${Km(this.client_id)}:${Km(this.client_secret)}`;
        return { headers: { Authorization: `Basic ${Buffer.from(i).toString("base64")}` } };
      }
      default:
        throw TypeError(`missing, or unsupported, ${e}_endpoint_auth_method`);
    }
  }
  function hE() {
    let { length: e, 0: t } = this.response_types;
    if (e === 1) return t;
    return;
  }
  function _E() {
    let { length: e, 0: t } = this.redirect_uris || [];
    if (e === 1) return t;
    return;
  }
  async function yE(e, t, { clientAssertionPayload: n, endpointAuthMethod: i = e, DPoP: r } = {}) {
    let o = await qm.call(this, i, { clientAssertionPayload: n }),
      s = mE(t, o),
      u =
        this[`${i}_endpoint_auth_method`].includes("tls_client_auth") ||
        (e === "token" && this.tls_client_certificate_bound_access_tokens),
      c;
    if (u && this.issuer.mtls_endpoint_aliases) c = this.issuer.mtls_endpoint_aliases[`${e}_endpoint`];
    if (((c = c || this.issuer[`${e}_endpoint`]), "form" in s)) {
      for (let [d, f] of Object.entries(s.form)) if (typeof f > "u") delete s.form[d];
    }
    return fE.call(
      this,
      {
        ...s,
        method: "POST",
        url: c,
        headers: { ...(e !== "revocation" ? { Accept: "application/json" } : void 0), ...s.headers },
      },
      { mTLS: u, DPoP: r },
    );
  }
  Hm.exports = { resolveResponseType: hE, resolveRedirectUri: _E, authFor: qm, authenticatedPost: yE };
});

var Xm = S(function (pi, Ym) {
  var tl = ue("crypto");
  pi = Ym.exports = Zo;
  function Zo(e, t) {
    return (t = Wm(e, t)), bE(e, t);
  }
  pi.sha1 = function (e) {
    return Zo(e);
  };
  pi.keys = function (e) {
    return Zo(e, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
  };
  pi.MD5 = function (e) {
    return Zo(e, { algorithm: "md5", encoding: "hex" });
  };
  pi.keysMD5 = function (e) {
    return Zo(e, { algorithm: "md5", encoding: "hex", excludeValues: true });
  };
  var Ui = tl.getHashes ? tl.getHashes().slice() : ["sha1", "md5"];
  Ui.push("passthrough");
  var Vm = ["buffer", "hex", "binary", "base64"];
  function Wm(e, t) {
    t = t || {};
    var n = {};
    if (
      ((n.algorithm = t.algorithm || "sha1"),
      (n.encoding = t.encoding || "hex"),
      (n.excludeValues = t.excludeValues ? true : false),
      (n.algorithm = n.algorithm.toLowerCase()),
      (n.encoding = n.encoding.toLowerCase()),
      (n.ignoreUnknown = t.ignoreUnknown !== true ? false : true),
      (n.respectType = t.respectType === false ? false : true),
      (n.respectFunctionNames = t.respectFunctionNames === false ? false : true),
      (n.respectFunctionProperties = t.respectFunctionProperties === false ? false : true),
      (n.unorderedArrays = t.unorderedArrays !== true ? false : true),
      (n.unorderedSets = t.unorderedSets === false ? false : true),
      (n.unorderedObjects = t.unorderedObjects === false ? false : true),
      (n.replacer = t.replacer || void 0),
      (n.excludeKeys = t.excludeKeys || void 0),
      typeof e > "u")
    )
      throw Error("Object argument required.");
    for (var i = 0; i < Ui.length; ++i) if (Ui[i].toLowerCase() === n.algorithm.toLowerCase()) n.algorithm = Ui[i];
    if (Ui.indexOf(n.algorithm) === -1)
      throw Error('Algorithm "' + n.algorithm + '"  not supported. supported values: ' + Ui.join(", "));
    if (Vm.indexOf(n.encoding) === -1 && n.algorithm !== "passthrough")
      throw Error('Encoding "' + n.encoding + '"  not supported. supported values: ' + Vm.join(", "));
    return n;
  }
  function Gm(e) {
    if (typeof e !== "function") return false;
    var t = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
    return t.exec(Function.prototype.toString.call(e)) != null;
  }
  function bE(e, t) {
    var n;
    if (t.algorithm !== "passthrough") n = tl.createHash(t.algorithm);
    else n = new Jm();
    if (typeof n.write > "u") (n.write = n.update), (n.end = n.update);
    var i = rl(t, n);
    if ((i.dispatch(e), !n.update)) n.end("");
    if (n.digest) return n.digest(t.encoding === "buffer" ? void 0 : t.encoding);
    var r = n.read();
    if (t.encoding === "buffer") return r;
    return r.toString(t.encoding);
  }
  pi.writeToStream = function (e, t, n) {
    if (typeof n > "u") (n = t), (t = {});
    return (t = Wm(e, t)), rl(t, n).dispatch(e);
  };
  function rl(e, t, n) {
    n = n || [];
    var i = function (r) {
      if (t.update) return t.update(r, "utf8");
      else return t.write(r, "utf8");
    };
    return {
      dispatch: function (r) {
        if (e.replacer) r = e.replacer(r);
        var o = typeof r;
        if (r === null) o = "null";
        return this["_" + o](r);
      },
      _object: function (r) {
        var o = /\[object (.*)\]/i,
          s = Object.prototype.toString.call(r),
          u = o.exec(s);
        if (!u) u = "unknown:[" + s + "]";
        else u = u[1];
        u = u.toLowerCase();
        var c = null;
        if ((c = n.indexOf(r)) >= 0) return this.dispatch("[CIRCULAR:" + c + "]");
        else n.push(r);
        if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(r)) return i("buffer:"), i(r);
        if (u !== "object" && u !== "function" && u !== "asyncfunction")
          if (this["_" + u]) this["_" + u](r);
          else if (e.ignoreUnknown) return i("[" + u + "]");
          else throw Error('Unknown object type "' + u + '"');
        else {
          var d = Object.keys(r);
          if (e.unorderedObjects) d = d.sort();
          if (e.respectType !== false && !Gm(r)) d.splice(0, 0, "prototype", "__proto__", "constructor");
          if (e.excludeKeys)
            d = d.filter(function (p) {
              return !e.excludeKeys(p);
            });
          i("object:" + d.length + ":");
          var f = this;
          return d.forEach(function (p) {
            if ((f.dispatch(p), i(":"), !e.excludeValues)) f.dispatch(r[p]);
            i(",");
          });
        }
      },
      _array: function (r, o) {
        o = typeof o < "u" ? o : e.unorderedArrays !== false;
        var s = this;
        if ((i("array:" + r.length + ":"), !o || r.length <= 1))
          return r.forEach(function (d) {
            return s.dispatch(d);
          });
        var u = [],
          c = r.map(function (d) {
            var f = new Jm(),
              p = n.slice(),
              h = rl(e, f, p);
            return h.dispatch(d), (u = u.concat(p.slice(n.length))), f.read().toString();
          });
        return (n = n.concat(u)), c.sort(), this._array(c, false);
      },
      _date: function (r) {
        return i("date:" + r.toJSON());
      },
      _symbol: function (r) {
        return i("symbol:" + r.toString());
      },
      _error: function (r) {
        return i("error:" + r.toString());
      },
      _boolean: function (r) {
        return i("bool:" + r.toString());
      },
      _string: function (r) {
        i("string:" + r.length + ":"), i(r.toString());
      },
      _function: function (r) {
        if ((i("fn:"), Gm(r))) this.dispatch("[native]");
        else this.dispatch(r.toString());
        if (e.respectFunctionNames !== false) this.dispatch("function-name:" + String(r.name));
        if (e.respectFunctionProperties) this._object(r);
      },
      _number: function (r) {
        return i("number:" + r.toString());
      },
      _xml: function (r) {
        return i("xml:" + r.toString());
      },
      _null: function () {
        return i("Null");
      },
      _undefined: function () {
        return i("Undefined");
      },
      _regexp: function (r) {
        return i("regex:" + r.toString());
      },
      _uint8array: function (r) {
        return i("uint8array:"), this.dispatch(Array.prototype.slice.call(r));
      },
      _uint8clampedarray: function (r) {
        return i("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(r));
      },
      _int8array: function (r) {
        return i("uint8array:"), this.dispatch(Array.prototype.slice.call(r));
      },
      _uint16array: function (r) {
        return i("uint16array:"), this.dispatch(Array.prototype.slice.call(r));
      },
      _int16array: function (r) {
        return i("uint16array:"), this.dispatch(Array.prototype.slice.call(r));
      },
      _uint32array: function (r) {
        return i("uint32array:"), this.dispatch(Array.prototype.slice.call(r));
      },
      _int32array: function (r) {
        return i("uint32array:"), this.dispatch(Array.prototype.slice.call(r));
      },
      _float32array: function (r) {
        return i("float32array:"), this.dispatch(Array.prototype.slice.call(r));
      },
      _float64array: function (r) {
        return i("float64array:"), this.dispatch(Array.prototype.slice.call(r));
      },
      _arraybuffer: function (r) {
        return i("arraybuffer:"), this.dispatch(new Uint8Array(r));
      },
      _url: function (r) {
        return i("url:" + r.toString(), "utf8");
      },
      _map: function (r) {
        i("map:");
        var o = Array.from(r);
        return this._array(o, e.unorderedSets !== false);
      },
      _set: function (r) {
        i("set:");
        var o = Array.from(r);
        return this._array(o, e.unorderedSets !== false);
      },
      _file: function (r) {
        return i("file:"), this.dispatch([r.name, r.size, r.type, r.lastModfied]);
      },
      _blob: function () {
        if (e.ignoreUnknown) return i("[blob]");
        throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
      },
      _domwindow: function () {
        return i("domwindow");
      },
      _bigint: function (r) {
        return i("bigint:" + r.toString());
      },
      _process: function () {
        return i("process");
      },
      _timer: function () {
        return i("timer");
      },
      _pipe: function () {
        return i("pipe");
      },
      _tcp: function () {
        return i("tcp");
      },
      _udp: function () {
        return i("udp");
      },
      _tty: function () {
        return i("tty");
      },
      _statwatcher: function () {
        return i("statwatcher");
      },
      _securecontext: function () {
        return i("securecontext");
      },
      _connection: function () {
        return i("connection");
      },
      _zlib: function () {
        return i("zlib");
      },
      _context: function () {
        return i("context");
      },
      _nodescript: function () {
        return i("nodescript");
      },
      _httpparser: function () {
        return i("httpparser");
      },
      _dataview: function () {
        return i("dataview");
      },
      _signal: function () {
        return i("signal");
      },
      _fsevent: function () {
        return i("fsevent");
      },
      _tlswrap: function () {
        return i("tlswrap");
      },
    };
  }
  function Jm() {
    return {
      buf: "",
      write: function (e) {
        this.buf += e;
      },
      end: function (e) {
        this.buf += e;
      },
      read: function () {
        return this.buf;
      },
    };
  }
});

var ol = S(function ($E, il) {
  var vE = Xm(),
    wE = Ha(),
    { RPError: Qm } = wr(),
    { assertIssuerConfiguration: SE } = Na(),
    OE = Yc(),
    { keystores: eg } = Ja(),
    kE = Ba(),
    PE = Li(),
    Fo = new WeakMap(),
    nl = new WeakMap(),
    tg = (e) => {
      if (!nl.has(e)) nl.set(e, new wE({ max: 100 }));
      return nl.get(e);
    };
  async function rg(e = false) {
    SE(this, "jwks_uri");
    let t = eg.get(this),
      n = tg(this);
    if (e || !t) {
      if (Fo.has(this)) return Fo.get(this);
      return (
        n.reset(),
        Fo.set(
          this,
          (async () => {
            let i = await PE.call(this, {
                method: "GET",
                responseType: "json",
                url: this.jwks_uri,
                headers: { Accept: "application/json, application/jwk-set+json" },
              }).finally(() => {
                Fo.delete(this);
              }),
              r = kE(i),
              o = OE.fromJWKS(r, { onlyPublic: true });
            return n.set("throttle", true, 60000), eg.set(this, o), o;
          })(),
        ),
        Fo.get(this)
      );
    }
    return t;
  }
  async function EE({ kid: e, kty: t, alg: n, use: i }, { allowMulti: r = false } = {}) {
    let o = tg(this),
      s = { kid: e, kty: t, alg: n, use: i },
      u = vE(s, { algorithm: "sha256", ignoreUnknown: true, unorderedArrays: true, unorderedSets: true, respectType: false }),
      c = o.get(u) || o.get("throttle"),
      d = await rg.call(this, !c),
      f = d.all(s);
    if ((delete s.use, f.length === 0))
      throw new Qm({ printf: ["no valid key found in issuer's jwks_uri for key parameters %j", s], jwks: d });
    if (!r && f.length > 1 && !e)
      throw new Qm({
        printf: [
          "multiple matching keys found in issuer's jwks_uri for key parameters %j, kid must be provided in this case",
          s,
        ],
        jwks: d,
      });
    return o.set(u, true), f;
  }
  $E.queryKeyStore = EE;
  $E.keystore = rg;
});

var sg = S(function (e5, ag) {
  var { inspect: ng } = ue("util"),
    { RPError: Ya, OPError: AE } = wr(),
    ig = Mo();
  class og {
    #e;
    #t;
    #n;
    #i;
    #a;
    #s;
    #o;
    #u;
    #r;
    constructor({ client: e, exchangeBody: t, clientAssertionPayload: n, response: i, maxAge: r, DPoP: o }) {
      if (
        (["verification_uri", "user_code", "device_code"].forEach((s) => {
          if (typeof i[s] !== "string" || !i[s])
            throw new Ya(`expected ${s} string to be returned by Device Authorization Response, got %j`, i[s]);
        }),
        !Number.isSafeInteger(i.expires_in))
      )
        throw new Ya(
          "expected expires_in number to be returned by Device Authorization Response, got %j",
          i.expires_in,
        );
      (this.#s = ig() + i.expires_in),
        (this.#t = e),
        (this.#i = o),
        (this.#u = r),
        (this.#a = t),
        (this.#n = n),
        (this.#r = i),
        (this.#o = i.interval * 1000 || 5000);
    }
    abort() {
      this.#e = true;
    }
    async poll({ signal: e } = {}) {
      if ((e && e.aborted) || this.#e) throw new Ya("polling aborted");
      if (this.expired())
        throw new Ya(
          "the device code %j has expired and the device authorization session has concluded",
          this.device_code,
        );
      await new Promise((n) => setTimeout(n, this.#o));
      let t;
      try {
        t = await this.#t.grant(
          { ...this.#a, grant_type: "urn:ietf:params:oauth:grant-type:device_code", device_code: this.device_code },
          { clientAssertionPayload: this.#n, DPoP: this.#i },
        );
      } catch (n) {
        switch (n instanceof AE && n.error) {
          case "slow_down":
            this.#o += 5000;
          case "authorization_pending":
            return this.poll({ signal: e });
          default:
            throw n;
        }
      }
      if ("id_token" in t) await this.#t.decryptIdToken(t), await this.#t.validateIdToken(t, void 0, "token", this.#u);
      return t;
    }
    get device_code() {
      return this.#r.device_code;
    }
    get user_code() {
      return this.#r.user_code;
    }
    get verification_uri() {
      return this.#r.verification_uri;
    }
    get verification_uri_complete() {
      return this.#r.verification_uri_complete;
    }
    get expires_in() {
      return Math.max.apply(null, [this.#s - ig(), 0]);
    }
    expired() {
      return this.expires_in === 0;
    }
    [ng.custom]() {
      return `${this.constructor.name} ${ng(this.#r, { depth: 1 / 0, colors: process.stdout.isTTY, compact: false, sorted: true })}`;
    }
  }
  ag.exports = og;
});

var Ol = S(function (t5, Sl) {
  var { inspect: ug } = ue("util"),
    RE = ue("http"),
    al = ue("crypto"),
    { strict: sl } = ue("assert"),
    _l = ue("querystring"),
    yl = ue("url"),
    { URL: cg, URLSearchParams: lg } = ue("url"),
    Ct = import.meta.require("/$bunfs/root/chunk-0qcyqfqc.js"),
    ul = Xp(),
    wg = em(),
    jE = nm(),
    Xa = Do(),
    dg = Zc(),
    CE = Fc(),
    { assertSigningAlgValuesSupport: fg, assertIssuerConfiguration: er } = Na(),
    bl = Za(),
    Nn = xo(),
    Ln = Ba(),
    jt = Kc(),
    { OPError: cl, RPError: ie } = wr(),
    ll = Mo(),
    { random: pg } = zo(),
    dl = Li(),
    { CLOCK_TOLERANCE: mr } = Va(),
    { keystores: fl } = Ja(),
    DE = Yc(),
    mg = No(),
    { authenticatedPost: Bo, resolveResponseType: xE, resolveRedirectUri: ME } = el(),
    { queryKeyStore: gg } = ol(),
    zE = sg(),
    [hg, LE] = process.version
      .slice(1)
      .split(".")
      .map((e) => parseInt(e, 10)),
    UE = hg >= 17 || (hg === 16 && LE >= 9),
    pl = Symbol(),
    _g = Symbol(),
    yg = Symbol();
  function Un(e) {
    return bl(
      e,
      "access_token",
      "code",
      "error_description",
      "error_uri",
      "error",
      "expires_in",
      "id_token",
      "iss",
      "response",
      "session_state",
      "state",
      "token_type",
    );
  }
  function ml(e, t = "Bearer") {
    return `${t} ${e}`;
  }
  function gl(e) {
    let t = yl.parse(e);
    if (!t.search) return {};
    return _l.parse(t.search.substring(1));
  }
  function NE(e, t, n) {
    if (e[n] === void 0) throw new ie({ message: `missing required JWT property ${n}`, jwt: t });
  }
  function Qa(e) {
    let t = {
      client_id: this.client_id,
      scope: "openid",
      response_type: xE.call(this),
      redirect_uri: ME.call(this),
      ...e,
    };
    return (
      Object.entries(t).forEach(([n, i]) => {
        if (i === null || i === void 0) delete t[n];
        else if (n === "claims" && typeof i === "object") t[n] = JSON.stringify(i);
        else if (n === "resource" && Array.isArray(i)) t[n] = i;
        else if (typeof i !== "string") t[n] = String(i);
      }),
      t
    );
  }
  function bg(e) {
    if (!Nn(e) || !Array.isArray(e.keys) || e.keys.some((t) => !Nn(t) || !("kty" in t)))
      throw TypeError("jwks must be a JSON Web Key Set formatted object");
    return DE.fromJWKS(e, { onlyPrivate: true });
  }
  function ZE(e, t) {
    try {
      let n = e.issuer.token_endpoint_auth_methods_supported;
      if (!n.includes(t.token_endpoint_auth_method)) {
        if (n.includes("client_secret_post")) t.token_endpoint_auth_method = "client_secret_post";
      }
    } catch (n) {}
  }
  function FE(e, t, n) {
    if (!t.token_endpoint_auth_method) ZE(e, n);
    if (t.redirect_uri) {
      if (t.redirect_uris) throw TypeError("provide a redirect_uri or redirect_uris, not both");
      (n.redirect_uris = [t.redirect_uri]), delete n.redirect_uri;
    }
    if (t.response_type) {
      if (t.response_types) throw TypeError("provide a response_type or response_types, not both");
      (n.response_types = [t.response_type]), delete n.response_type;
    }
  }
  function BE(e, t, n) {
    if (!t[`${e}_endpoint`]) return;
    let { token_endpoint_auth_method: i, token_endpoint_auth_signing_alg: r } = n,
      o = `${e}_endpoint_auth_method`,
      s = `${e}_endpoint_auth_signing_alg`;
    if (n[o] === void 0 && n[s] === void 0) {
      if (i !== void 0) n[o] = i;
      if (r !== void 0) n[s] = r;
    }
  }
  class wl {
    #e;
    #t;
    #n;
    #i;
    constructor(e, t, n = {}, i, r) {
      if (((this.#e = new Map()), (this.#t = e), (this.#n = t), typeof n.client_id !== "string" || !n.client_id))
        throw TypeError("client_id is required");
      let o = {
        grant_types: ["authorization_code"],
        id_token_signed_response_alg: "RS256",
        authorization_signed_response_alg: "RS256",
        response_types: ["code"],
        token_endpoint_auth_method: "client_secret_basic",
        ...(this.fapi1()
          ? {
              grant_types: ["authorization_code", "implicit"],
              id_token_signed_response_alg: "PS256",
              authorization_signed_response_alg: "PS256",
              response_types: ["code id_token"],
              tls_client_certificate_bound_access_tokens: true,
              token_endpoint_auth_method: void 0,
            }
          : void 0),
        ...(this.fapi2()
          ? {
              id_token_signed_response_alg: "PS256",
              authorization_signed_response_alg: "PS256",
              token_endpoint_auth_method: void 0,
            }
          : void 0),
        ...n,
      };
      if (this.fapi())
        switch (o.token_endpoint_auth_method) {
          case "self_signed_tls_client_auth":
          case "tls_client_auth":
            break;
          case "private_key_jwt":
            if (!i) throw TypeError("jwks is required");
            break;
          case void 0:
            throw TypeError("token_endpoint_auth_method is required");
          default:
            throw TypeError("invalid or unsupported token_endpoint_auth_method");
        }
      if (this.fapi2()) {
        if (o.tls_client_certificate_bound_access_tokens && o.dpop_bound_access_tokens)
          throw TypeError(
            "either tls_client_certificate_bound_access_tokens or dpop_bound_access_tokens must be set to true",
          );
        if (!o.tls_client_certificate_bound_access_tokens && !o.dpop_bound_access_tokens)
          throw TypeError(
            "either tls_client_certificate_bound_access_tokens or dpop_bound_access_tokens must be set to true",
          );
      }
      if (
        (FE(this, n, o),
        fg("token", this.issuer, o),
        ["introspection", "revocation"].forEach((s) => {
          BE(s, this.issuer, o), fg(s, this.issuer, o);
        }),
        Object.entries(o).forEach(([s, u]) => {
          if ((this.#e.set(s, u), !this[s]))
            Object.defineProperty(this, s, {
              get() {
                return this.#e.get(s);
              },
              enumerable: true,
            });
        }),
        i !== void 0)
      ) {
        let s = bg.call(this, i);
        fl.set(this, s);
      }
      if (r != null && r.additionalAuthorizedParties) this.#i = mg(r.additionalAuthorizedParties);
      this[mr] = 0;
    }
    authorizationUrl(e = {}) {
      if (!Nn(e)) throw TypeError("params must be a plain object");
      er(this.issuer, "authorization_endpoint");
      let t = new cg(this.issuer.authorization_endpoint);
      for (let [n, i] of Object.entries(Qa.call(this, e)))
        if (Array.isArray(i)) {
          t.searchParams.delete(n);
          for (let r of i) t.searchParams.append(n, r);
        } else t.searchParams.set(n, i);
      return t.href.replace(/\+/g, "%20");
    }
    authorizationPost(e = {}) {
      if (!Nn(e)) throw TypeError("params must be a plain object");
      let t = Qa.call(this, e),
        n = Object.keys(t)
          .map((i) => `<input type="hidden" name="${i}" value="${t[i]}"/>`)
          .join(`
`);
      return `<!DOCTYPE html>
<head>
<title>Requesting Authorization</title>
</head>
<body onload="javascript:document.forms[0].submit()">
<form method="post" action="${this.issuer.authorization_endpoint}">
  ${n}
</form>
</body>
</html>`;
    }
    endSessionUrl(e = {}) {
      er(this.issuer, "end_session_endpoint");
      let { 0: t, length: n } = this.post_logout_redirect_uris || [],
        { post_logout_redirect_uri: i = n === 1 ? t : void 0 } = e,
        r;
      if ((({ id_token_hint: r, ...e } = e), r instanceof jt)) {
        if (!r.id_token) throw TypeError("id_token not present in TokenSet");
        r = r.id_token;
      }
      let o = yl.parse(this.issuer.end_session_endpoint),
        s = dg(
          gl(this.issuer.end_session_endpoint),
          e,
          { post_logout_redirect_uri: i, client_id: this.client_id },
          { id_token_hint: r },
        );
      return (
        Object.entries(s).forEach(([u, c]) => {
          if (c === null || c === void 0) delete s[u];
        }),
        (o.search = null),
        (o.query = s),
        yl.format(o)
      );
    }
    callbackParams(e) {
      let t = e instanceof RE.IncomingMessage || (e && e.method && e.url);
      if (typeof e !== "string" && !t)
        throw TypeError("#callbackParams only accepts string urls, http.IncomingMessage or a lookalike");
      if (t)
        switch (e.method) {
          case "GET":
            return Un(gl(e.url));
          case "POST":
            if (e.body === void 0)
              throw TypeError("incoming message body missing, include a body parser prior to this method call");
            switch (typeof e.body) {
              case "object":
              case "string":
                if (Buffer.isBuffer(e.body)) return Un(_l.parse(e.body.toString("utf-8")));
                if (typeof e.body === "string") return Un(_l.parse(e.body));
                return Un(e.body);
              default:
                throw TypeError("invalid IncomingMessage body object");
            }
          default:
            throw TypeError("invalid IncomingMessage method");
        }
      else return Un(gl(e));
    }
    async callback(e, t, n = {}, { exchangeBody: i, clientAssertionPayload: r, DPoP: o } = {}) {
      let s = Un(t);
      if (n.jarm && !("response" in t)) throw new ie({ message: "expected a JARM response", checks: n, params: s });
      else if ("response" in t) {
        let c = await this.decryptJARM(s.response);
        s = await this.validateJARM(c);
      }
      if (this.default_max_age && !n.max_age) n.max_age = this.default_max_age;
      if (s.state && !n.state) throw TypeError("checks.state argument is missing");
      if (!s.state && n.state) throw new ie({ message: "state missing from the response", checks: n, params: s });
      if (n.state !== s.state)
        throw new ie({ printf: ["state mismatch, expected %s, got: %s", n.state, s.state], checks: n, params: s });
      if ("iss" in s) {
        if ((er(this.issuer, "issuer"), s.iss !== this.issuer.issuer))
          throw new ie({ printf: ["iss mismatch, expected %s, got: %s", this.issuer.issuer, s.iss], params: s });
      } else if (this.issuer.authorization_response_iss_parameter_supported && !("id_token" in s) && !("response" in t))
        throw new ie({ message: "iss missing from the response", params: s });
      if (s.error) throw new cl(s);
      let u = { code: ["code"], id_token: ["id_token"], token: ["access_token", "token_type"] };
      if (n.response_type) {
        for (let c of n.response_type.split(" "))
          if (c === "none") {
            if (s.code || s.id_token || s.access_token)
              throw new ie({ message: 'unexpected params encountered for "none" response', checks: n, params: s });
          } else
            for (let d of u[c])
              if (!s[d]) throw new ie({ message: `${d} missing from response`, checks: n, params: s });
      }
      if (s.id_token) {
        let c = new jt(s);
        if (
          (await this.decryptIdToken(c),
          await this.validateIdToken(c, n.nonce, "authorization", n.max_age, n.state),
          !s.code)
        )
          return c;
      }
      if (s.code) {
        let c = await this.grant(
          { ...i, grant_type: "authorization_code", code: s.code, redirect_uri: e, code_verifier: n.code_verifier },
          { clientAssertionPayload: r, DPoP: o },
        );
        if ((await this.decryptIdToken(c), await this.validateIdToken(c, n.nonce, "token", n.max_age), s.session_state))
          c.session_state = s.session_state;
        return c;
      }
      return new jt(s);
    }
    async oauthCallback(e, t, n = {}, { exchangeBody: i, clientAssertionPayload: r, DPoP: o } = {}) {
      let s = Un(t);
      if (n.jarm && !("response" in t)) throw new ie({ message: "expected a JARM response", checks: n, params: s });
      else if ("response" in t) {
        let c = await this.decryptJARM(s.response);
        s = await this.validateJARM(c);
      }
      if (s.state && !n.state) throw TypeError("checks.state argument is missing");
      if (!s.state && n.state) throw new ie({ message: "state missing from the response", checks: n, params: s });
      if (n.state !== s.state)
        throw new ie({ printf: ["state mismatch, expected %s, got: %s", n.state, s.state], checks: n, params: s });
      if ("iss" in s) {
        if ((er(this.issuer, "issuer"), s.iss !== this.issuer.issuer))
          throw new ie({ printf: ["iss mismatch, expected %s, got: %s", this.issuer.issuer, s.iss], params: s });
      } else if (this.issuer.authorization_response_iss_parameter_supported && !("id_token" in s) && !("response" in t))
        throw new ie({ message: "iss missing from the response", params: s });
      if (s.error) throw new cl(s);
      if (typeof s.id_token === "string" && s.id_token.length)
        throw new ie({
          message:
            "id_token detected in the response, you must use client.callback() instead of client.oauthCallback()",
          params: s,
        });
      delete s.id_token;
      let u = { code: ["code"], token: ["access_token", "token_type"] };
      if (n.response_type)
        for (let c of n.response_type.split(" ")) {
          if (c === "none") {
            if (s.code || s.id_token || s.access_token)
              throw new ie({ message: 'unexpected params encountered for "none" response', checks: n, params: s });
          }
          if (u[c]) {
            for (let d of u[c])
              if (!s[d]) throw new ie({ message: `${d} missing from response`, checks: n, params: s });
          }
        }
      if (s.code) {
        let c = await this.grant(
          { ...i, grant_type: "authorization_code", code: s.code, redirect_uri: e, code_verifier: n.code_verifier },
          { clientAssertionPayload: r, DPoP: o },
        );
        if (typeof c.id_token === "string" && c.id_token.length)
          throw new ie({
            message:
              "id_token detected in the response, you must use client.callback() instead of client.oauthCallback()",
            params: s,
          });
        return delete c.id_token, c;
      }
      return new jt(s);
    }
    async decryptIdToken(e) {
      if (!this.id_token_encrypted_response_alg) return e;
      let t = e;
      if (t instanceof jt) {
        if (!t.id_token) throw TypeError("id_token not present in TokenSet");
        t = t.id_token;
      }
      let n = this.id_token_encrypted_response_alg,
        i = this.id_token_encrypted_response_enc,
        r = await this.decryptJWE(t, n, i);
      if (e instanceof jt) return (e.id_token = r), e;
      return r;
    }
    async validateJWTUserinfo(e) {
      let t = this.userinfo_signed_response_alg;
      return this.validateJWT(e, t, []);
    }
    async decryptJARM(e) {
      if (!this.authorization_encrypted_response_alg) return e;
      let t = this.authorization_encrypted_response_alg,
        n = this.authorization_encrypted_response_enc;
      return this.decryptJWE(e, t, n);
    }
    async decryptJWTUserinfo(e) {
      if (!this.userinfo_encrypted_response_alg) return e;
      let t = this.userinfo_encrypted_response_alg,
        n = this.userinfo_encrypted_response_enc;
      return this.decryptJWE(e, t, n);
    }
    async decryptJWE(e, t, n = "A128CBC-HS256") {
      let i = JSON.parse(Xa.decode(e.split(".")[0]));
      if (i.alg !== t)
        throw new ie({ printf: ["unexpected JWE alg received, expected %s, got: %s", t, i.alg], jwt: e });
      if (i.enc !== n)
        throw new ie({ printf: ["unexpected JWE enc received, expected %s, got: %s", n, i.enc], jwt: e });
      let r = (s) => new TextDecoder().decode(s.plaintext),
        o;
      if (t.match(/^(?:RSA|ECDH)/)) {
        let s = await fl.get(this),
          u = Ct.decodeProtectedHeader(e);
        for (let c of s.all({ ...u, use: "enc" }))
          if (((o = await Ct.compactDecrypt(e, await c.keyObject(u.alg)).then(r, () => {})), o)) break;
      } else o = await Ct.compactDecrypt(e, this.secretForAlg(t === "dir" ? n : t)).then(r, () => {});
      if (!o) throw new ie({ message: "failed to decrypt JWE", jwt: e });
      return o;
    }
    async validateIdToken(e, t, n, i, r) {
      let o = e,
        s = this.id_token_signed_response_alg;
      if (o instanceof jt) {
        if (!o.id_token) throw TypeError("id_token not present in TokenSet");
        o = o.id_token;
      }
      o = String(o);
      let c = ll(),
        { protected: d, payload: f, key: p } = await this.validateJWT(o, s);
      if (typeof i === "number" || (i !== yg && this.require_auth_time)) {
        if (!f.auth_time) throw new ie({ message: "missing required JWT property auth_time", jwt: o });
        if (typeof f.auth_time !== "number")
          throw new ie({ message: "JWT auth_time claim must be a JSON numeric value", jwt: o });
      }
      if (typeof i === "number" && f.auth_time + i < c - this[mr])
        throw new ie({
          printf: [
            "too much time has elapsed since the last End-User authentication, max_age %i, auth_time: %i, now %i",
            i,
            f.auth_time,
            c - this[mr],
          ],
          now: c,
          tolerance: this[mr],
          auth_time: f.auth_time,
          jwt: o,
        });
      if (t !== _g && (f.nonce || t !== void 0) && f.nonce !== t)
        throw new ie({ printf: ["nonce mismatch, expected %s, got: %s", t, f.nonce], jwt: o });
      if (n === "authorization") {
        if (!f.at_hash && e.access_token) throw new ie({ message: "missing required property at_hash", jwt: o });
        if (!f.c_hash && e.code) throw new ie({ message: "missing required property c_hash", jwt: o });
        if (this.fapi1()) {
          if (!f.s_hash && (e.state || r)) throw new ie({ message: "missing required property s_hash", jwt: o });
        }
        if (f.s_hash) {
          if (!r) throw TypeError('cannot verify s_hash, "checks.state" property not provided');
          try {
            ul.validate({ claim: "s_hash", source: "state" }, f.s_hash, r, d.alg, p.jwk && p.jwk.crv);
          } catch (h) {
            throw new ie({ message: h.message, jwt: o });
          }
        }
      }
      if (this.fapi() && f.iat < c - 3600)
        throw new ie({
          printf: ["JWT issued too far in the past, now %i, iat %i", c, f.iat],
          now: c,
          tolerance: this[mr],
          iat: f.iat,
          jwt: o,
        });
      if (e.access_token && f.at_hash !== void 0)
        try {
          ul.validate(
            { claim: "at_hash", source: "access_token" },
            f.at_hash,
            e.access_token,
            d.alg,
            p.jwk && p.jwk.crv,
          );
        } catch (h) {
          throw new ie({ message: h.message, jwt: o });
        }
      if (e.code && f.c_hash !== void 0)
        try {
          ul.validate({ claim: "c_hash", source: "code" }, f.c_hash, e.code, d.alg, p.jwk && p.jwk.crv);
        } catch (h) {
          throw new ie({ message: h.message, jwt: o });
        }
      return e;
    }
    async validateJWT(e, t, n = ["iss", "sub", "aud", "exp", "iat"]) {
      let i = this.issuer.issuer === "https://self-issued.me",
        r = ll(),
        o,
        s;
      try {
        ({ header: o, payload: s } = jE(e, { complete: true }));
      } catch (c) {
        throw new ie({ printf: ["failed to decode JWT (%s: %s)", c.name, c.message], jwt: e });
      }
      if (o.alg !== t)
        throw new ie({ printf: ["unexpected JWT alg received, expected %s, got: %s", t, o.alg], jwt: e });
      if (i) n = [...n, "sub_jwk"];
      if ((n.forEach(NE.bind(void 0, s, e)), s.iss !== void 0)) {
        let c = this.issuer.issuer;
        if (this.#n) c = this.issuer.issuer.replace("{tenantid}", s.tid);
        if (s.iss !== c) throw new ie({ printf: ["unexpected iss value, expected %s, got: %s", c, s.iss], jwt: e });
      }
      if (s.iat !== void 0) {
        if (typeof s.iat !== "number") throw new ie({ message: "JWT iat claim must be a JSON numeric value", jwt: e });
      }
      if (s.nbf !== void 0) {
        if (typeof s.nbf !== "number") throw new ie({ message: "JWT nbf claim must be a JSON numeric value", jwt: e });
        if (s.nbf > r + this[mr])
          throw new ie({
            printf: ["JWT not active yet, now %i, nbf %i", r + this[mr], s.nbf],
            now: r,
            tolerance: this[mr],
            nbf: s.nbf,
            jwt: e,
          });
      }
      if (s.exp !== void 0) {
        if (typeof s.exp !== "number") throw new ie({ message: "JWT exp claim must be a JSON numeric value", jwt: e });
        if (r - this[mr] >= s.exp)
          throw new ie({
            printf: ["JWT expired, now %i, exp %i", r - this[mr], s.exp],
            now: r,
            tolerance: this[mr],
            exp: s.exp,
            jwt: e,
          });
      }
      if (s.aud !== void 0) {
        if (Array.isArray(s.aud)) {
          if (s.aud.length > 1 && !s.azp) throw new ie({ message: "missing required JWT property azp", jwt: e });
          if (!s.aud.includes(this.client_id))
            throw new ie({
              printf: ["aud is missing the client_id, expected %s to be included in %j", this.client_id, s.aud],
              jwt: e,
            });
        } else if (s.aud !== this.client_id)
          throw new ie({ printf: ["aud mismatch, expected %s, got: %s", this.client_id, s.aud], jwt: e });
      }
      if (s.azp !== void 0) {
        let c = this.#i;
        if (typeof c === "string") c = [this.client_id, c];
        else if (Array.isArray(c)) c = [this.client_id, ...c];
        else c = [this.client_id];
        if (!c.includes(s.azp)) throw new ie({ printf: ["azp mismatch, got: %s", s.azp], jwt: e });
      }
      let u;
      if (i) {
        try {
          sl(Nn(s.sub_jwk));
          let c = await Ct.importJWK(s.sub_jwk, o.alg);
          sl.equal(c.type, "public"),
            (u = [
              {
                keyObject() {
                  return c;
                },
              },
            ]);
        } catch (c) {
          throw new ie({ message: "failed to use sub_jwk claim as an asymmetric JSON Web Key", jwt: e });
        }
        if ((await Ct.calculateJwkThumbprint(s.sub_jwk)) !== s.sub)
          throw new ie({ message: "failed to match the subject with sub_jwk", jwt: e });
      } else if (o.alg.startsWith("HS")) u = [this.secretForAlg(o.alg)];
      else if (o.alg !== "none") u = await gg.call(this.issuer, { ...o, use: "sig" });
      if (!u && o.alg === "none") return { protected: o, payload: s };
      for (let c of u) {
        let d = await Ct.compactVerify(e, c instanceof Uint8Array ? c : await c.keyObject(o.alg)).catch(() => {});
        if (d) return { payload: s, protected: d.protectedHeader, key: c };
      }
      throw new ie({ message: "failed to validate JWT signature", jwt: e });
    }
    async refresh(e, { exchangeBody: t, clientAssertionPayload: n, DPoP: i } = {}) {
      let r = e;
      if (r instanceof jt) {
        if (!r.refresh_token) throw TypeError("refresh_token not present in TokenSet");
        r = r.refresh_token;
      }
      let o = await this.grant(
        { ...t, grant_type: "refresh_token", refresh_token: String(r) },
        { clientAssertionPayload: n, DPoP: i },
      );
      if (o.id_token) {
        if (
          (await this.decryptIdToken(o), await this.validateIdToken(o, _g, "token", yg), e instanceof jt && e.id_token)
        ) {
          let s = e.claims().sub,
            u = o.claims().sub;
          if (u !== s) throw new ie({ printf: ["sub mismatch, expected %s, got: %s", s, u], jwt: o.id_token });
        }
      }
      return o;
    }
    async requestResource(
      e,
      t,
      {
        method: n,
        headers: i,
        body: r,
        DPoP: o,
        tokenType: s = o ? "DPoP" : t instanceof jt ? t.token_type : "Bearer",
      } = {},
      u,
    ) {
      if (t instanceof jt) {
        if (!t.access_token) throw TypeError("access_token not present in TokenSet");
        t = t.access_token;
      }
      if (!t) throw TypeError("no access token provided");
      else if (typeof t !== "string") throw TypeError("invalid access token provided");
      let c = { headers: { Authorization: ml(t, s), ...i }, body: r },
        d = !!this.tls_client_certificate_bound_access_tokens,
        f = await dl.call(
          this,
          { ...c, responseType: "buffer", method: n, url: e },
          { accessToken: t, mTLS: d, DPoP: o },
        ),
        p = f.headers["www-authenticate"];
      if (u !== pl && p && p.toLowerCase().startsWith("dpop ") && CE(p).error === "use_dpop_nonce")
        return this.requestResource(e, t, { method: n, headers: i, body: r, DPoP: o, tokenType: s });
      return f;
    }
    async userinfo(e, { method: t = "GET", via: n = "header", tokenType: i, params: r, DPoP: o } = {}) {
      er(this.issuer, "userinfo_endpoint");
      let s = { tokenType: i, method: String(t).toUpperCase(), DPoP: o };
      if (s.method !== "GET" && s.method !== "POST") throw TypeError("#userinfo() method can only be POST or a GET");
      if (n === "body" && s.method !== "POST") throw TypeError("can only send body on POST");
      let u = !!(this.userinfo_signed_response_alg || this.userinfo_encrypted_response_alg);
      if (u) s.headers = { Accept: "application/jwt" };
      else s.headers = { Accept: "application/json" };
      let c = !!this.tls_client_certificate_bound_access_tokens,
        d;
      if (c && this.issuer.mtls_endpoint_aliases) d = this.issuer.mtls_endpoint_aliases.userinfo_endpoint;
      if (((d = new cg(d || this.issuer.userinfo_endpoint)), n === "body"))
        (s.headers.Authorization = void 0),
          (s.headers["Content-Type"] = "application/x-www-form-urlencoded"),
          (s.body = new lg()),
          s.body.append("access_token", e instanceof jt ? e.access_token : e);
      if (r)
        if (s.method === "GET")
          Object.entries(r).forEach(([h, y]) => {
            d.searchParams.append(h, y);
          });
        else if (s.body)
          Object.entries(r).forEach(([h, y]) => {
            s.body.append(h, y);
          });
        else
          (s.body = new lg()),
            (s.headers["Content-Type"] = "application/x-www-form-urlencoded"),
            Object.entries(r).forEach(([h, y]) => {
              s.body.append(h, y);
            });
      if (s.body) s.body = s.body.toString();
      let f = await this.requestResource(d, e, s),
        p = Ln(f, { bearer: true });
      if (u) {
        if (!/^application\/jwt/.test(f.headers["content-type"]))
          throw new ie({ message: "expected application/jwt response from the userinfo_endpoint", response: f });
        let h = f.body.toString(),
          y = await this.decryptJWTUserinfo(h);
        if (!this.userinfo_signed_response_alg)
          try {
            (p = JSON.parse(y)), sl(Nn(p));
          } catch (v) {
            throw new ie({ message: "failed to parse userinfo JWE payload as JSON", jwt: y });
          }
        else ({ payload: p } = await this.validateJWTUserinfo(y));
      } else
        try {
          p = JSON.parse(f.body);
        } catch (h) {
          throw (Object.defineProperty(h, "response", { value: f }), h);
        }
      if (e instanceof jt && e.id_token) {
        let h = e.claims().sub;
        if (p.sub !== h)
          throw new ie({ printf: ["userinfo sub mismatch, expected %s, got: %s", h, p.sub], body: p, jwt: e.id_token });
      }
      return p;
    }
    encryptionSecret(e) {
      let t = e <= 256 ? "sha256" : e <= 384 ? "sha384" : e <= 512 ? "sha512" : false;
      if (!t) throw Error("unsupported symmetric encryption key derivation");
      return al
        .createHash(t)
        .update(this.client_secret)
        .digest()
        .slice(0, e / 8);
    }
    secretForAlg(e) {
      if (!this.client_secret) throw TypeError("client_secret is required");
      if (/^A(\d{3})(?:GCM)?KW$/.test(e)) return this.encryptionSecret(parseInt(RegExp.$1, 10));
      if (/^A(\d{3})(?:GCM|CBC-HS(\d{3}))$/.test(e)) return this.encryptionSecret(parseInt(RegExp.$2 || RegExp.$1, 10));
      return new TextEncoder().encode(this.client_secret);
    }
    async grant(e, { clientAssertionPayload: t, DPoP: n } = {}, i) {
      er(this.issuer, "token_endpoint");
      let r = await Bo.call(this, "token", { form: e, responseType: "json" }, { clientAssertionPayload: t, DPoP: n }),
        o;
      try {
        o = Ln(r);
      } catch (s) {
        if (i !== pl && s instanceof cl && s.error === "use_dpop_nonce")
          return this.grant(e, { clientAssertionPayload: t, DPoP: n }, pl);
        throw s;
      }
      return new jt(o);
    }
    async deviceAuthorization(e = {}, { exchangeBody: t, clientAssertionPayload: n, DPoP: i } = {}) {
      er(this.issuer, "device_authorization_endpoint"), er(this.issuer, "token_endpoint");
      let r = Qa.call(this, { client_id: this.client_id, redirect_uri: null, response_type: null, ...e }),
        o = await Bo.call(
          this,
          "device_authorization",
          { responseType: "json", form: r },
          { clientAssertionPayload: n, endpointAuthMethod: "token" },
        ),
        s = Ln(o);
      return new zE({
        client: this,
        exchangeBody: t,
        clientAssertionPayload: n,
        response: s,
        maxAge: e.max_age,
        DPoP: i,
      });
    }
    async revoke(e, t, { revokeBody: n, clientAssertionPayload: i } = {}) {
      if ((er(this.issuer, "revocation_endpoint"), t !== void 0 && typeof t !== "string"))
        throw TypeError("hint must be a string");
      let r = { ...n, token: e };
      if (t) r.token_type_hint = t;
      let o = await Bo.call(this, "revocation", { form: r }, { clientAssertionPayload: i });
      Ln(o, { body: false });
    }
    async introspect(e, t, { introspectBody: n, clientAssertionPayload: i } = {}) {
      if ((er(this.issuer, "introspection_endpoint"), t !== void 0 && typeof t !== "string"))
        throw TypeError("hint must be a string");
      let r = { ...n, token: e };
      if (t) r.token_type_hint = t;
      let o = await Bo.call(this, "introspection", { form: r, responseType: "json" }, { clientAssertionPayload: i });
      return Ln(o);
    }
    static async register(e, t = {}) {
      let { initialAccessToken: n, jwks: i, ...r } = t;
      if ((er(this.issuer, "registration_endpoint"), i !== void 0 && !(e.jwks || e.jwks_uri))) {
        let u = await bg.call(this, i);
        e.jwks = u.toJWKS();
      }
      let o = await dl.call(this, {
          headers: { Accept: "application/json", ...(n ? { Authorization: ml(n) } : void 0) },
          responseType: "json",
          json: e,
          url: this.issuer.registration_endpoint,
          method: "POST",
        }),
        s = Ln(o, { statusCode: 201, bearer: true });
      return new this(s, i, r);
    }
    get metadata() {
      return mg(Object.fromEntries(this.#e.entries()));
    }
    static async fromUri(e, t, n, i) {
      let r = await dl.call(this, {
          method: "GET",
          url: e,
          responseType: "json",
          headers: { Authorization: ml(t), Accept: "application/json" },
        }),
        o = Ln(r, { bearer: true });
      return new this(o, n, i);
    }
    async requestObject(
      e = {},
      {
        sign: t = this.request_object_signing_alg || "none",
        encrypt: {
          alg: n = this.request_object_encryption_alg,
          enc: i = this.request_object_encryption_enc || "A128CBC-HS256",
        } = {},
      } = {},
    ) {
      if (!Nn(e)) throw TypeError("requestObject must be a plain object");
      let r,
        o,
        s = ll(),
        u = { alg: t, typ: "oauth-authz-req+jwt" },
        c = JSON.stringify(
          dg({}, e, {
            iss: this.client_id,
            aud: this.issuer.issuer,
            client_id: this.client_id,
            jti: pg(),
            iat: s,
            exp: s + 300,
            ...(this.fapi() ? { nbf: s } : void 0),
          }),
        );
      if (t === "none") r = [Xa.encode(JSON.stringify(u)), Xa.encode(c), ""].join(".");
      else {
        let f = t.startsWith("HS");
        if (f) o = this.secretForAlg(t);
        else {
          let p = await fl.get(this);
          if (!p) throw TypeError(`no keystore present for client, cannot sign using alg ${t}`);
          if (((o = p.get({ alg: t, use: "sig" })), !o)) throw TypeError(`no key to sign with found for alg ${t}`);
        }
        r = await new Ct.CompactSign(new TextEncoder().encode(c))
          .setProtectedHeader({ ...u, kid: f ? void 0 : o.jwk.kid })
          .sign(f ? o : await o.keyObject(t));
      }
      if (!n) return r;
      let d = { alg: n, enc: i, cty: "oauth-authz-req+jwt" };
      if (d.alg.match(/^(RSA|ECDH)/)) [o] = await gg.call(this.issuer, { alg: d.alg, use: "enc" }, { allowMulti: true });
      else o = this.secretForAlg(d.alg === "dir" ? d.enc : d.alg);
      return new Ct.CompactEncrypt(new TextEncoder().encode(r))
        .setProtectedHeader({ ...d, kid: o instanceof Uint8Array ? void 0 : o.jwk.kid })
        .encrypt(o instanceof Uint8Array ? o : await o.keyObject(d.alg));
    }
    async pushedAuthorizationRequest(e = {}, { clientAssertionPayload: t } = {}) {
      er(this.issuer, "pushed_authorization_request_endpoint");
      let n = { ...("request" in e ? e : Qa.call(this, e)), client_id: this.client_id },
        i = await Bo.call(
          this,
          "pushed_authorization_request",
          { responseType: "json", form: n },
          { clientAssertionPayload: t, endpointAuthMethod: "token" },
        ),
        r = Ln(i, { statusCode: 201 });
      if (!("expires_in" in r))
        throw new ie({ message: "expected expires_in in Pushed Authorization Successful Response", response: i });
      if (typeof r.expires_in !== "number")
        throw new ie({ message: "invalid expires_in value in Pushed Authorization Successful Response", response: i });
      if (!("request_uri" in r))
        throw new ie({ message: "expected request_uri in Pushed Authorization Successful Response", response: i });
      if (typeof r.request_uri !== "string")
        throw new ie({ message: "invalid request_uri value in Pushed Authorization Successful Response", response: i });
      return r;
    }
    get issuer() {
      return this.#t;
    }
    [ug.custom]() {
      return `${this.constructor.name} ${ug(this.metadata, { depth: 1 / 0, colors: process.stdout.isTTY, compact: false, sorted: true })}`;
    }
    fapi() {
      return this.fapi1() || this.fapi2();
    }
    fapi1() {
      return this.constructor.name === "FAPI1Client";
    }
    fapi2() {
      return this.constructor.name === "FAPI2Client";
    }
    async validateJARM(e) {
      let t = this.authorization_signed_response_alg,
        { payload: n } = await this.validateJWT(e, t, ["iss", "exp", "aud"]);
      return Un(n);
    }
    async dpopProof(e, t, n) {
      if (!Nn(e)) throw TypeError("payload must be a plain object");
      let i;
      if (wg(t)) i = t;
      else if (t[Symbol.toStringTag] === "CryptoKey") i = t;
      else if (Ct.cryptoRuntime === "node:crypto") i = al.createPrivateKey(t);
      else throw TypeError("unrecognized crypto runtime");
      if (i.type !== "private") throw TypeError('"DPoP" option must be a private key');
      let r = vl.call(this, i, t);
      if (!r) throw TypeError("could not determine DPoP JWS Algorithm");
      return new Ct.SignJWT({ ath: n ? Xa.encode(al.createHash("sha256").update(n).digest()) : void 0, ...e })
        .setProtectedHeader({ alg: r, typ: "dpop+jwt", jwk: await KE(i, t) })
        .setIssuedAt()
        .setJti(pg())
        .sign(i);
    }
  }
  function vg(e) {
    switch (e.algorithm.name) {
      case "Ed25519":
      case "Ed448":
        return "EdDSA";
      case "ECDSA": {
        switch (e.algorithm.namedCurve) {
          case "P-256":
            return "ES256";
          case "P-384":
            return "ES384";
          case "P-521":
            return "ES512";
          default:
            break;
        }
        break;
      }
      case "RSASSA-PKCS1-v1_5":
        return `RS${e.algorithm.hash.name.slice(4)}`;
      case "RSA-PSS":
        return `PS${e.algorithm.hash.name.slice(4)}`;
      default:
        throw TypeError("unsupported DPoP private key");
    }
  }
  var vl;
  if (Ct.cryptoRuntime === "node:crypto") {
    let t = function (u, c, d) {
        if (typeof c === "object" && c.format === "jwk" && c.key && c.key.alg) return c.key.alg;
        if (Array.isArray(d)) {
          let f = d.filter(RegExp.prototype.test.bind(e));
          if (u.asymmetricKeyType === "rsa-pss") f = f.filter((p) => p.startsWith("PS"));
          return ["PS256", "PS384", "PS512", "RS256", "RS384", "RS384"].find((p) => f.includes(p));
        }
        return "PS256";
      },
      s = function (u, c) {
        switch (typeof c === "object" && typeof c.key === "object" && c.key.crv) {
          case "P-256":
            return "ES256";
          case "secp256k1":
            return "ES256K";
          case "P-384":
            return "ES384";
          case "P-512":
            return "ES512";
          default:
            break;
        }
        let d = u.export({ format: "der", type: "pkcs8" }),
          f = d[1] < 128 ? 17 : 18,
          p = d[f],
          h = d.slice(f + 1, f + 1 + p);
        if (h.equals(n)) return "ES256";
        if (h.equals(i)) return "ES384";
        if (h.equals(r)) return "ES512";
        if (h.equals(o)) return "ES256K";
        throw TypeError("unsupported DPoP private key curve");
      };
    (qE = t),
      (HE = s),
      (vl = function (u, c) {
        if (c[Symbol.toStringTag] === "CryptoKey") return vg(u);
        switch (u.asymmetricKeyType) {
          case "ed25519":
          case "ed448":
            return "EdDSA";
          case "ec":
            return s(u, c);
          case "rsa":
          case UE && "rsa-pss":
            return t(u, c, this.issuer.dpop_signing_alg_values_supported);
          default:
            throw TypeError("unsupported DPoP private key");
        }
      });
    let e = /^(?:RS|PS)(?:256|384|512)$/,
      n = Buffer.from([42, 134, 72, 206, 61, 3, 1, 7]),
      i = Buffer.from([43, 129, 4, 0, 34]),
      r = Buffer.from([43, 129, 4, 0, 35]),
      o = Buffer.from([43, 129, 4, 0, 10]);
  } else vl = vg;
  var qE,
    HE,
    hl = new WeakMap();
  async function KE(e, t) {
    if (Ct.cryptoRuntime === "node:crypto" && typeof t === "object" && typeof t.key === "object" && t.format === "jwk")
      return bl(t.key, "kty", "crv", "x", "y", "e", "n");
    if (hl.has(t)) return hl.get(t);
    let n = bl(await Ct.exportJWK(e), "kty", "crv", "x", "y", "e", "n");
    if (wg(t) || Ct.cryptoRuntime === "WebCryptoAPI") hl.set(t, n);
    return n;
  }
  Sl.exports = (e, t = false) =>
    class extends wl {
      constructor(...i) {
        super(e, t, ...i);
      }
      static get issuer() {
        return e;
      }
    };
  Sl.exports.BaseClient = wl;
});

var Og = S(function (r5, Sg) {
  var VE = Ha();
  Sg.exports = new VE({ max: 100 });
});

var Pg = S(function (n5, kg) {
  var GE = /^\d+$/;
  function WE(e) {
    if (e.includes("://")) return true;
    let t = e.replace(/(\/|\?)/g, "#").split("#")[0];
    if (t.includes(":")) {
      let n = t.indexOf(":"),
        i = t.slice(n + 1);
      if (!GE.test(i)) return true;
    }
    return false;
  }
  function JE(e) {
    if (!e.includes("@")) return false;
    let t = e.split("@"),
      n = t[t.length - 1];
    return !(n.includes(":") || n.includes("/") || n.includes("?"));
  }
  function YE(e) {
    if (typeof e !== "string") throw TypeError("input must be a string");
    let t;
    if (WE(e)) t = e;
    else if (JE(e)) t = `acct:${e}`;
    else t = `https://${e}`;
    return t.split("#")[0];
  }
  kg.exports = YE;
});

var Ag = S(function (i5, Tg) {
  var { inspect: Eg } = ue("util"),
    El = ue("url"),
    { RPError: kl } = wr(),
    XE = Ol(),
    es = Og(),
    $g = Ba(),
    QE = Pg(),
    Ig = Li(),
    e$ = No(),
    { keystore: t$ } = ol(),
    r$ = [
      "https://login.microsoftonline.com/common/.well-known/openid-configuration",
      "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration",
      "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration",
      "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration",
    ],
    Pl = Symbol(),
    n$ = {
      claim_types_supported: ["normal"],
      claims_parameter_supported: false,
      grant_types_supported: ["authorization_code", "implicit"],
      request_parameter_supported: false,
      request_uri_parameter_supported: true,
      require_request_uri_registration: false,
      response_modes_supported: ["query", "fragment"],
      token_endpoint_auth_methods_supported: ["client_secret_basic"],
    };
  class $l {
    #e;
    constructor(e = {}) {
      let t = e[Pl];
      delete e[Pl],
        ["introspection", "revocation"].forEach((i) => {
          if (
            e[`${i}_endpoint`] &&
            e[`${i}_endpoint_auth_methods_supported`] === void 0 &&
            e[`${i}_endpoint_auth_signing_alg_values_supported`] === void 0
          ) {
            if (e.token_endpoint_auth_methods_supported)
              e[`${i}_endpoint_auth_methods_supported`] = e.token_endpoint_auth_methods_supported;
            if (e.token_endpoint_auth_signing_alg_values_supported)
              e[`${i}_endpoint_auth_signing_alg_values_supported`] = e.token_endpoint_auth_signing_alg_values_supported;
          }
        }),
        (this.#e = new Map()),
        Object.entries(e).forEach(([i, r]) => {
          if ((this.#e.set(i, r), !this[i]))
            Object.defineProperty(this, i, {
              get() {
                return this.#e.get(i);
              },
              enumerable: true,
            });
        }),
        es.set(this.issuer, this);
      let n = XE(this, t);
      Object.defineProperties(this, {
        Client: { value: n, enumerable: true },
        FAPI1Client: { value: class extends n {}, enumerable: true },
        FAPI2Client: { value: class extends n {}, enumerable: true },
      });
    }
    get metadata() {
      return e$(Object.fromEntries(this.#e.entries()));
    }
    static async webfinger(e) {
      let t = QE(e),
        { host: n } = El.parse(t),
        i = `https://${n}/.well-known/webfinger`,
        r = await Ig.call(this, {
          method: "GET",
          url: i,
          responseType: "json",
          searchParams: { resource: t, rel: "http://openid.net/specs/connect/1.0/issuer" },
          headers: { Accept: "application/json" },
        }),
        o = $g(r),
        s =
          Array.isArray(o.links) &&
          o.links.find(
            (d) => typeof d === "object" && d.rel === "http://openid.net/specs/connect/1.0/issuer" && d.href,
          );
      if (!s) throw new kl({ message: "no issuer found in webfinger response", body: o });
      if (typeof s.href !== "string" || !s.href.startsWith("https://"))
        throw new kl({ printf: ["invalid issuer location %s", s.href], body: o });
      let u = s.href;
      if (es.has(u)) return es.get(u);
      let c = await this.discover(u);
      if (c.issuer !== u)
        throw (es.del(c.issuer), new kl("discovered issuer mismatch, expected %s, got: %s", u, c.issuer));
      return c;
    }
    static async discover(e) {
      let t = i$(e),
        n = await Ig.call(this, {
          method: "GET",
          responseType: "json",
          url: t,
          headers: { Accept: "application/json" },
        }),
        i = $g(n);
      return new $l({ ...n$, ...i, [Pl]: !!r$.find((r) => t.startsWith(r)) });
    }
    async reloadJwksUri() {
      await t$.call(this, true);
    }
    [Eg.custom]() {
      return `${this.constructor.name} ${Eg(this.metadata, { depth: 1 / 0, colors: process.stdout.isTTY, compact: false, sorted: true })}`;
    }
  }
  function i$(e) {
    let t = El.parse(e);
    if (t.pathname.includes("/.well-known/")) return e;
    else {
      let n;
      if (t.pathname.endsWith("/")) n = `${t.pathname}.well-known/openid-configuration`;
      else n = `${t.pathname}/.well-known/openid-configuration`;
      return El.format({ ...t, pathname: n });
    }
  }
  Tg.exports = $l;
});

var Mg = S(function (o5, xg) {
  var Rg = ue("url"),
    { format: o$ } = ue("util"),
    jg = No(),
    { RPError: Cg, OPError: a$ } = wr(),
    { BaseClient: s$ } = Ol(),
    { random: Il, codeChallenge: u$ } = zo(),
    c$ = Za(),
    { resolveResponseType: l$, resolveRedirectUri: d$ } = el();
  function f$(e, t, n = {}) {
    if (e) this.error(e);
    else if (!t) this.fail(n);
    else this.success(t, n);
  }
  function Dg(
    { client: e, params: t = {}, passReqToCallback: n = false, sessionKey: i, usePKCE: r = true, extras: o = {} } = {},
    s,
  ) {
    if (!(e instanceof s$)) throw TypeError("client must be an instance of openid-client Client");
    if (typeof s !== "function") throw TypeError("verify callback must be a function");
    if (!e.issuer || !e.issuer.issuer) throw TypeError("client must have an issuer with an identifier");
    if (
      ((this._client = e),
      (this._issuer = e.issuer),
      (this._verify = s),
      (this._passReqToCallback = n),
      (this._usePKCE = r),
      (this._key = i || `oidc:${Rg.parse(this._issuer.issuer).hostname}`),
      (this._params = jg(t)),
      delete this._params.state,
      delete this._params.nonce,
      (this._extras = jg(o)),
      !this._params.response_type)
    )
      this._params.response_type = l$.call(e);
    if (!this._params.redirect_uri) this._params.redirect_uri = d$.call(e);
    if (!this._params.scope) this._params.scope = "openid";
    if (this._usePKCE === true) {
      let u = Array.isArray(this._issuer.code_challenge_methods_supported)
        ? this._issuer.code_challenge_methods_supported
        : false;
      if (u && u.includes("S256")) this._usePKCE = "S256";
      else if (u && u.includes("plain")) this._usePKCE = "plain";
      else if (u) throw TypeError("neither code_challenge_method supported by the client is supported by the issuer");
      else this._usePKCE = "S256";
    } else if (typeof this._usePKCE === "string" && !["plain", "S256"].includes(this._usePKCE))
      throw TypeError(`${this._usePKCE} is not valid/implemented PKCE code_challenge_method`);
    this.name = Rg.parse(e.issuer.issuer).hostname;
  }
  Dg.prototype.authenticate = function (t, n) {
    (async () => {
      let i = this._client;
      if (!t.session) throw TypeError("authentication requires session support");
      let r = i.callbackParams(t),
        o = this._key,
        { 0: s, length: u } = Object.keys(r);
      if (u === 0 || (u === 1 && s === "iss")) {
        let re = { state: Il(), ...this._params, ...n };
        if (!re.nonce && re.response_type.includes("id_token")) re.nonce = Il();
        if (
          ((t.session[o] = c$(re, "nonce", "state", "max_age", "response_type")),
          this._usePKCE && re.response_type.includes("code"))
        ) {
          let Se = Il();
          switch (((t.session[o].code_verifier = Se), this._usePKCE)) {
            case "S256":
              (re.code_challenge = u$(Se)), (re.code_challenge_method = "S256");
              break;
            case "plain":
              re.code_challenge = Se;
              break;
          }
        }
        this.redirect(i.authorizationUrl(re));
        return;
      }
      let c = t.session[o];
      if (Object.keys(c || {}).length === 0)
        throw Error(
          o$('did not find expected authorization request details in session, req.session["%s"] is %j', o, c),
        );
      let { state: d, nonce: f, max_age: p, code_verifier: h, response_type: y } = c;
      try {
        delete t.session[o];
      } catch (re) {}
      let v = { redirect_uri: this._params.redirect_uri, ...n },
        k = { state: d, nonce: f, max_age: p, code_verifier: h, response_type: y },
        P = await i.callback(v.redirect_uri, r, k, this._extras),
        B = this._passReqToCallback,
        Q = this._verify.length > (B ? 3 : 2) && i.issuer.userinfo_endpoint,
        ge = [P, f$.bind(this)];
      if (Q) {
        if (!P.access_token)
          throw new Cg({
            message: "expected access_token to be returned when asking for userinfo in verify callback",
            tokenset: P,
          });
        let re = await i.userinfo(P);
        ge.splice(1, 0, re);
      }
      if (B) ge.unshift(t);
      this._verify(...ge);
    })().catch((i) => {
      if ((i instanceof a$ && i.error !== "server_error" && !i.error.startsWith("invalid")) || i instanceof Cg)
        this.fail(i);
      else this.error(i);
    });
  };
  xg.exports = Dg;
});

var Lg = S(function (a5, zg) {
  var p$ = Ag(),
    { OPError: m$, RPError: g$ } = wr(),
    h$ = Mg(),
    _$ = Kc(),
    { CLOCK_TOLERANCE: y$, HTTP_OPTIONS: b$ } = Va(),
    v$ = zo(),
    { setDefaults: w$ } = Li();
  zg.exports = {
    Issuer: p$,
    Strategy: h$,
    TokenSet: _$,
    errors: { OPError: m$, RPError: g$ },
    custom: { setHttpOptionsDefaults: w$, http_options: b$, clock_tolerance: y$ },
    generators: v$,
  };
});

export { Lg };
