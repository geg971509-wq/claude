// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ACt, Ao, Cm, D, DT, De, FAe, H, Ht, Ia, Iir, Ir, Irr, J, JEt, JV, Je, Jnr, K, KJe, Ka, Ko, Le, Li, Lwn, M$, Me, Mn, N, NCe, NTt, NY, Ne, Np, Nwn, O, Orr, Own, Prr, R, Rsr, S, Sa, Sk, Soe, T, Te, Ue, Ute, V, VFe, Vr, Vu, WAt, WT, Wpe, X, X9, XAt, XY, Xt, Zee, _7, _Ce, _e, a, aGt, ai, b, bR, bYe, be, bm, bs, cAn, cb, dR, dS, dt, eD, ec, f, g, g7, gee, gj, gn, go, h, hA, i, j, je, jt, jwn, l, ln, m, m7, n, n0, nD, ne, oe, ofe, ot, p5, pU, ps, q, q9, rc, rme, s, so, st, tD, te, tqt, trr, ud, ue, un, v, vt, wR, we, wj, xrr, y, yFe, zH, zm, zu } from "/$bunfs/root/modules/chunk-8tgj5dp2/prelude.js";
import { $c, $r, Af, Ai, Ci, Cn, D2, Fe, Fr, G2, G4, I2, Iw, JO, KO, M2, M3, N2, N4, Nk, OEe, P2, R_, Rf, SC, S_, So, Su, TN, Tf, U2, Ul, WO, Wc, Wf, Xr, YO, Yc, Yf, ZO, _k, _s, at, b4, bC, bf, c_, e3t, e_, ek, g_, gf, he, hf, i_, ix, jSt, jf, jl, jr, kf, kl, l_, n_, nt, oi, pN, pi, qc, qf, ql, rk, se, si, tk, w2, wn, x2, xf, y4, yf, yi, yo, zEe, zh } from "/$bunfs/root/modules/chunk-8tgj5dp2/functions-001.js";
import { $d, $l, A7, Ae, At, BD, Bee, Cp, Cs, D4t, Fn, H$, I, ID, Ja, Jn, KV, M6, ND, Nbt, Nr, On, Qo, Sr, Ste, Tt, Um, Unr, Va, Vp, Wd, Xa, Xn, Ybt, Yh, Yt, ZM, ZS, b7, bp, ci, dO, fP, fe, fnr, fp, gAe, h7, iD, iN, ie, il, jc, jd, kee, mte, mw, oD, oO, pD, pnr, qe, qo, rD, ri, sl, spe, t0, tee, vbn, vee, xa, xre, yD, yI } from "/$bunfs/root/modules/chunk-8tgj5dp2/functions-002.js";

var eo = S(function (k_) {
  Object.defineProperty(k_, "__esModule", { value: !0 });
  k_.isTracingSuppressed = k_.unsuppressTracing = k_.suppressTracing = void 0;
  var qx = Li(),
    Zl = (0, qx.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
  function Xx(e) {
    return e.setValue(Zl, !0);
  }
  k_.suppressTracing = Xx;
  function Qx(e) {
    return e.deleteValue(Zl);
  }
  k_.unsuppressTracing = Qx;
  function Jx(e) {
    return e.getValue(Zl) === !0;
  }
  k_.isTracingSuppressed = Jx;
});

var tc = S(function (P_) {
  Object.defineProperty(P_, "__esModule", { value: !0 });
  P_.BAGGAGE_MAX_TOTAL_LENGTH =
    P_.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS =
    P_.BAGGAGE_MAX_NAME_VALUE_PAIRS =
    P_.BAGGAGE_HEADER =
    P_.BAGGAGE_ITEMS_SEPARATOR =
    P_.BAGGAGE_PROPERTIES_SEPARATOR =
    P_.BAGGAGE_KEY_PAIR_SEPARATOR =
      void 0;
  P_.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
  P_.BAGGAGE_PROPERTIES_SEPARATOR = ";";
  P_.BAGGAGE_ITEMS_SEPARATOR = ",";
  P_.BAGGAGE_HEADER = "baggage";
  P_.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
  P_.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
  P_.BAGGAGE_MAX_TOTAL_LENGTH = 8192;
});

var oc = S(function (N_) {
  Object.defineProperty(N_, "__esModule", { value: !0 });
  N_.parseKeyPairsIntoRecord = N_.parsePairKeyValue = N_.getKeyPairs = N_.serializeKeyPairs = void 0;
  var aL = Li(),
    _r = tc();
  function lL(e) {
    return e.reduce((t, r) => {
      let o = `${t}${t !== "" ? _r.BAGGAGE_ITEMS_SEPARATOR : ""}${r}`;
      return o.length > _r.BAGGAGE_MAX_TOTAL_LENGTH ? t : o;
    }, "");
  }
  N_.serializeKeyPairs = lL;
  function cL(e) {
    return e.getAllEntries().map(([t, r]) => {
      let o = `${encodeURIComponent(t)}=${encodeURIComponent(r.value)}`;
      if (r.metadata !== void 0) o += _r.BAGGAGE_PROPERTIES_SEPARATOR + r.metadata.toString();
      return o;
    });
  }
  N_.getKeyPairs = cL;
  function I_(e) {
    if (!e) return;
    let t = e.indexOf(_r.BAGGAGE_PROPERTIES_SEPARATOR),
      r = t === -1 ? e : e.substring(0, t),
      o = r.indexOf(_r.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (o <= 0) return;
    let u = r.substring(0, o).trim(),
      d = r.substring(o + 1).trim();
    if (!u || !d) return;
    let _, A;
    try {
      (_ = decodeURIComponent(u)), (A = decodeURIComponent(d));
    } catch {
      return;
    }
    let C;
    if (t !== -1 && t < e.length - 1) {
      let k = e.substring(t + 1);
      C = (0, aL.baggageEntryMetadataFromString)(k);
    }
    return { key: _, value: A, metadata: C };
  }
  N_.parsePairKeyValue = I_;
  function uL(e) {
    let t = {};
    if (typeof e === "string" && e.length > 0)
      e.split(_r.BAGGAGE_ITEMS_SEPARATOR).forEach((r) => {
        let o = I_(r);
        if (o !== void 0 && o.value.length > 0) t[o.key] = o.value;
      });
    return t;
  }
  N_.parseKeyPairsIntoRecord = uL;
});

var F_ = S(function (U_) {
  Object.defineProperty(U_, "__esModule", { value: !0 });
  U_.W3CBaggagePropagator = void 0;
  var sc = Li(),
    _L = eo(),
    Dn = tc(),
    ac = oc();
  class L_ {
    inject(e, t, r) {
      let o = sc.propagation.getBaggage(e);
      if (!o || (0, _L.isTracingSuppressed)(e)) return;
      let u = (0, ac.getKeyPairs)(o)
          .filter((_) => _.length <= Dn.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS)
          .slice(0, Dn.BAGGAGE_MAX_NAME_VALUE_PAIRS),
        d = (0, ac.serializeKeyPairs)(u);
      if (d.length > 0) r.set(t, Dn.BAGGAGE_HEADER, d);
    }
    extract(e, t, r) {
      let o = r.get(t, Dn.BAGGAGE_HEADER),
        u = Array.isArray(o) ? o.join(Dn.BAGGAGE_ITEMS_SEPARATOR) : o;
      if (!u) return e;
      let d = {};
      if (u.length === 0) return e;
      if (
        (u.split(Dn.BAGGAGE_ITEMS_SEPARATOR).forEach((A) => {
          let C = (0, ac.parsePairKeyValue)(A);
          if (C) {
            let k = { value: C.value };
            if (C.metadata) k.metadata = C.metadata;
            d[C.key] = k;
          }
        }),
        Object.entries(d).length === 0)
      )
        return e;
      return sc.propagation.setBaggage(e, sc.propagation.createBaggage(d));
    }
    fields() {
      return [Dn.BAGGAGE_HEADER];
    }
  }
  U_.W3CBaggagePropagator = L_;
});

var G_ = S(function (H_) {
  Object.defineProperty(H_, "__esModule", { value: !0 });
  H_.AnchoredClock = void 0;
  class B_ {
    _monotonicClock;
    _epochMillis;
    _performanceMillis;
    constructor(e, t) {
      (this._monotonicClock = t), (this._epochMillis = e.now()), (this._performanceMillis = t.now());
    }
    now() {
      let e = this._monotonicClock.now() - this._performanceMillis;
      return this._epochMillis + e;
    }
  }
  H_.AnchoredClock = B_;
});

var X_ = S(function ($_) {
  Object.defineProperty($_, "__esModule", { value: !0 });
  $_.isAttributeValue = $_.isAttributeKey = $_.sanitizeAttributes = void 0;
  var K_ = Li();
  function mL(e) {
    let t = {};
    if (typeof e !== "object" || e == null) return t;
    for (let r in e) {
      if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
      if (!j_(r)) {
        K_.diag.warn(`Invalid attribute key: ${r}`);
        continue;
      }
      let o = e[r];
      if (!W_(o)) {
        K_.diag.warn(`Invalid attribute value set for key: ${r}`);
        continue;
      }
      if (Array.isArray(o)) t[r] = o.slice();
      else t[r] = o;
    }
    return t;
  }
  $_.sanitizeAttributes = mL;
  function j_(e) {
    return typeof e === "string" && e !== "";
  }
  $_.isAttributeKey = j_;
  function W_(e) {
    if (e == null) return !0;
    if (Array.isArray(e)) return gL(e);
    return Y_(typeof e);
  }
  $_.isAttributeValue = W_;
  function gL(e) {
    let t;
    for (let r of e) {
      if (r == null) continue;
      let o = typeof r;
      if (o === t) continue;
      if (!t) {
        if (Y_(o)) {
          t = o;
          continue;
        }
        return !1;
      }
      return !1;
    }
    return !0;
  }
  function Y_(e) {
    switch (e) {
      case "number":
      case "boolean":
      case "string":
        return !0;
    }
    return !1;
  }
});

var lc = S(function (Q_) {
  Object.defineProperty(Q_, "__esModule", { value: !0 });
  Q_.loggingErrorHandler = void 0;
  var SL = Li();
  function TL() {
    return (e) => {
      SL.diag.error(AL(e));
    };
  }
  Q_.loggingErrorHandler = TL;
  function AL(e) {
    if (typeof e === "string") return e;
    else return JSON.stringify(bL(e));
  }
  function bL(e) {
    let t = {},
      r = e;
    while (r !== null)
      Object.getOwnPropertyNames(r).forEach((o) => {
        if (t[o]) return;
        let u = r[o];
        if (u) t[o] = String(u);
      }),
        (r = Object.getPrototypeOf(r));
    return t;
  }
});

var nm = S(function (em) {
  Object.defineProperty(em, "__esModule", { value: !0 });
  em.globalErrorHandler = em.setGlobalErrorHandler = void 0;
  var yL = lc(),
    Z_ = (0, yL.loggingErrorHandler)();
  function RL(e) {
    Z_ = e;
  }
  em.setGlobalErrorHandler = RL;
  function CL(e) {
    try {
      Z_(e);
    } catch {}
  }
  em.globalErrorHandler = CL;
});

var lm = S(function (sm) {
  Object.defineProperty(sm, "__esModule", { value: !0 });
  sm.getStringListFromEnv = sm.getBooleanFromEnv = sm.getStringFromEnv = sm.getNumberFromEnv = void 0;
  var rm = Li(),
    om = ue("util");
  function OL(e) {
    let t = process.env[e];
    if (t == null || t.trim() === "") return;
    let r = Number(t);
    if (isNaN(r)) {
      rm.diag.warn(`Unknown value ${(0, om.inspect)(t)} for ${e}, expected a number, using defaults`);
      return;
    }
    return r;
  }
  sm.getNumberFromEnv = OL;
  function im(e) {
    let t = process.env[e];
    if (t == null || t.trim() === "") return;
    return t;
  }
  sm.getStringFromEnv = im;
  function kL(e) {
    let t = process.env[e]?.trim().toLowerCase();
    if (t == null || t === "") return !1;
    if (t === "true") return !0;
    else if (t === "false") return !1;
    else
      return (
        rm.diag.warn(
          `Unknown value ${(0, om.inspect)(t)} for ${e}, expected 'true' or 'false', falling back to 'false' (default)`,
        ),
        !1
      );
  }
  sm.getBooleanFromEnv = kL;
  function wL(e) {
    return im(e)
      ?.split(",")
      .map((t) => t.trim())
      .filter((t) => t !== "");
  }
  sm.getStringListFromEnv = wL;
});

var dm = S(function (cm) {
  Object.defineProperty(cm, "__esModule", { value: !0 });
  cm._globalThis = void 0;
  cm._globalThis = globalThis;
});

var mm = S(function (pm) {
  Object.defineProperty(pm, "__esModule", { value: !0 });
  pm.VERSION = void 0;
  pm.VERSION = "2.7.1";
});

var cc = S(function (Em) {
  Object.defineProperty(Em, "__esModule", { value: !0 });
  Em.createConstMap = void 0;
  function IL(e) {
    let t = {},
      r = e.length;
    for (let o = 0; o < r; o++) {
      let u = e[o];
      if (u) t[String(u).toUpperCase().replace(/[-.]/g, "_")] = u;
    }
    return t;
  }
  Em.createConstMap = IL;
});

var CA = S(function (gA) {
  Object.defineProperty(gA, "__esModule", { value: !0 });
  gA.SEMATTRS_NET_HOST_CARRIER_ICC =
    gA.SEMATTRS_NET_HOST_CARRIER_MNC =
    gA.SEMATTRS_NET_HOST_CARRIER_MCC =
    gA.SEMATTRS_NET_HOST_CARRIER_NAME =
    gA.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE =
    gA.SEMATTRS_NET_HOST_CONNECTION_TYPE =
    gA.SEMATTRS_NET_HOST_NAME =
    gA.SEMATTRS_NET_HOST_PORT =
    gA.SEMATTRS_NET_HOST_IP =
    gA.SEMATTRS_NET_PEER_NAME =
    gA.SEMATTRS_NET_PEER_PORT =
    gA.SEMATTRS_NET_PEER_IP =
    gA.SEMATTRS_NET_TRANSPORT =
    gA.SEMATTRS_FAAS_INVOKED_REGION =
    gA.SEMATTRS_FAAS_INVOKED_PROVIDER =
    gA.SEMATTRS_FAAS_INVOKED_NAME =
    gA.SEMATTRS_FAAS_COLDSTART =
    gA.SEMATTRS_FAAS_CRON =
    gA.SEMATTRS_FAAS_TIME =
    gA.SEMATTRS_FAAS_DOCUMENT_NAME =
    gA.SEMATTRS_FAAS_DOCUMENT_TIME =
    gA.SEMATTRS_FAAS_DOCUMENT_OPERATION =
    gA.SEMATTRS_FAAS_DOCUMENT_COLLECTION =
    gA.SEMATTRS_FAAS_EXECUTION =
    gA.SEMATTRS_FAAS_TRIGGER =
    gA.SEMATTRS_EXCEPTION_ESCAPED =
    gA.SEMATTRS_EXCEPTION_STACKTRACE =
    gA.SEMATTRS_EXCEPTION_MESSAGE =
    gA.SEMATTRS_EXCEPTION_TYPE =
    gA.SEMATTRS_DB_SQL_TABLE =
    gA.SEMATTRS_DB_MONGODB_COLLECTION =
    gA.SEMATTRS_DB_REDIS_DATABASE_INDEX =
    gA.SEMATTRS_DB_HBASE_NAMESPACE =
    gA.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC =
    gA.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID =
    gA.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT =
    gA.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE =
    gA.SEMATTRS_DB_CASSANDRA_TABLE =
    gA.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL =
    gA.SEMATTRS_DB_CASSANDRA_PAGE_SIZE =
    gA.SEMATTRS_DB_CASSANDRA_KEYSPACE =
    gA.SEMATTRS_DB_MSSQL_INSTANCE_NAME =
    gA.SEMATTRS_DB_OPERATION =
    gA.SEMATTRS_DB_STATEMENT =
    gA.SEMATTRS_DB_NAME =
    gA.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME =
    gA.SEMATTRS_DB_USER =
    gA.SEMATTRS_DB_CONNECTION_STRING =
    gA.SEMATTRS_DB_SYSTEM =
    gA.SEMATTRS_AWS_LAMBDA_INVOKED_ARN =
      void 0;
  gA.SEMATTRS_MESSAGING_DESTINATION_KIND =
    gA.SEMATTRS_MESSAGING_DESTINATION =
    gA.SEMATTRS_MESSAGING_SYSTEM =
    gA.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES =
    gA.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS =
    gA.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT =
    gA.SEMATTRS_AWS_DYNAMODB_COUNT =
    gA.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS =
    gA.SEMATTRS_AWS_DYNAMODB_SEGMENT =
    gA.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD =
    gA.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT =
    gA.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE =
    gA.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES =
    gA.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES =
    gA.SEMATTRS_AWS_DYNAMODB_SELECT =
    gA.SEMATTRS_AWS_DYNAMODB_INDEX_NAME =
    gA.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET =
    gA.SEMATTRS_AWS_DYNAMODB_LIMIT =
    gA.SEMATTRS_AWS_DYNAMODB_PROJECTION =
    gA.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ =
    gA.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY =
    gA.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY =
    gA.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS =
    gA.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY =
    gA.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES =
    gA.SEMATTRS_HTTP_CLIENT_IP =
    gA.SEMATTRS_HTTP_ROUTE =
    gA.SEMATTRS_HTTP_SERVER_NAME =
    gA.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED =
    gA.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH =
    gA.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED =
    gA.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH =
    gA.SEMATTRS_HTTP_USER_AGENT =
    gA.SEMATTRS_HTTP_FLAVOR =
    gA.SEMATTRS_HTTP_STATUS_CODE =
    gA.SEMATTRS_HTTP_SCHEME =
    gA.SEMATTRS_HTTP_HOST =
    gA.SEMATTRS_HTTP_TARGET =
    gA.SEMATTRS_HTTP_URL =
    gA.SEMATTRS_HTTP_METHOD =
    gA.SEMATTRS_CODE_LINENO =
    gA.SEMATTRS_CODE_FILEPATH =
    gA.SEMATTRS_CODE_NAMESPACE =
    gA.SEMATTRS_CODE_FUNCTION =
    gA.SEMATTRS_THREAD_NAME =
    gA.SEMATTRS_THREAD_ID =
    gA.SEMATTRS_ENDUSER_SCOPE =
    gA.SEMATTRS_ENDUSER_ROLE =
    gA.SEMATTRS_ENDUSER_ID =
    gA.SEMATTRS_PEER_SERVICE =
      void 0;
  gA.DBSYSTEMVALUES_FILEMAKER =
    gA.DBSYSTEMVALUES_DERBY =
    gA.DBSYSTEMVALUES_FIREBIRD =
    gA.DBSYSTEMVALUES_ADABAS =
    gA.DBSYSTEMVALUES_CACHE =
    gA.DBSYSTEMVALUES_EDB =
    gA.DBSYSTEMVALUES_FIRSTSQL =
    gA.DBSYSTEMVALUES_INGRES =
    gA.DBSYSTEMVALUES_HANADB =
    gA.DBSYSTEMVALUES_MAXDB =
    gA.DBSYSTEMVALUES_PROGRESS =
    gA.DBSYSTEMVALUES_HSQLDB =
    gA.DBSYSTEMVALUES_CLOUDSCAPE =
    gA.DBSYSTEMVALUES_HIVE =
    gA.DBSYSTEMVALUES_REDSHIFT =
    gA.DBSYSTEMVALUES_POSTGRESQL =
    gA.DBSYSTEMVALUES_DB2 =
    gA.DBSYSTEMVALUES_ORACLE =
    gA.DBSYSTEMVALUES_MYSQL =
    gA.DBSYSTEMVALUES_MSSQL =
    gA.DBSYSTEMVALUES_OTHER_SQL =
    gA.SemanticAttributes =
    gA.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE =
    gA.SEMATTRS_MESSAGE_COMPRESSED_SIZE =
    gA.SEMATTRS_MESSAGE_ID =
    gA.SEMATTRS_MESSAGE_TYPE =
    gA.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE =
    gA.SEMATTRS_RPC_JSONRPC_ERROR_CODE =
    gA.SEMATTRS_RPC_JSONRPC_REQUEST_ID =
    gA.SEMATTRS_RPC_JSONRPC_VERSION =
    gA.SEMATTRS_RPC_GRPC_STATUS_CODE =
    gA.SEMATTRS_RPC_METHOD =
    gA.SEMATTRS_RPC_SERVICE =
    gA.SEMATTRS_RPC_SYSTEM =
    gA.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE =
    gA.SEMATTRS_MESSAGING_KAFKA_PARTITION =
    gA.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID =
    gA.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP =
    gA.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY =
    gA.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY =
    gA.SEMATTRS_MESSAGING_CONSUMER_ID =
    gA.SEMATTRS_MESSAGING_OPERATION =
    gA.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES =
    gA.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES =
    gA.SEMATTRS_MESSAGING_CONVERSATION_ID =
    gA.SEMATTRS_MESSAGING_MESSAGE_ID =
    gA.SEMATTRS_MESSAGING_URL =
    gA.SEMATTRS_MESSAGING_PROTOCOL_VERSION =
    gA.SEMATTRS_MESSAGING_PROTOCOL =
    gA.SEMATTRS_MESSAGING_TEMP_DESTINATION =
      void 0;
  gA.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD =
    gA.FaasDocumentOperationValues =
    gA.FAASDOCUMENTOPERATIONVALUES_DELETE =
    gA.FAASDOCUMENTOPERATIONVALUES_EDIT =
    gA.FAASDOCUMENTOPERATIONVALUES_INSERT =
    gA.FaasTriggerValues =
    gA.FAASTRIGGERVALUES_OTHER =
    gA.FAASTRIGGERVALUES_TIMER =
    gA.FAASTRIGGERVALUES_PUBSUB =
    gA.FAASTRIGGERVALUES_HTTP =
    gA.FAASTRIGGERVALUES_DATASOURCE =
    gA.DbCassandraConsistencyLevelValues =
    gA.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL =
    gA.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL =
    gA.DBCASSANDRACONSISTENCYLEVELVALUES_ANY =
    gA.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE =
    gA.DBCASSANDRACONSISTENCYLEVELVALUES_THREE =
    gA.DBCASSANDRACONSISTENCYLEVELVALUES_TWO =
    gA.DBCASSANDRACONSISTENCYLEVELVALUES_ONE =
    gA.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM =
    gA.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM =
    gA.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM =
    gA.DBCASSANDRACONSISTENCYLEVELVALUES_ALL =
    gA.DbSystemValues =
    gA.DBSYSTEMVALUES_COCKROACHDB =
    gA.DBSYSTEMVALUES_MEMCACHED =
    gA.DBSYSTEMVALUES_ELASTICSEARCH =
    gA.DBSYSTEMVALUES_GEODE =
    gA.DBSYSTEMVALUES_NEO4J =
    gA.DBSYSTEMVALUES_DYNAMODB =
    gA.DBSYSTEMVALUES_COSMOSDB =
    gA.DBSYSTEMVALUES_COUCHDB =
    gA.DBSYSTEMVALUES_COUCHBASE =
    gA.DBSYSTEMVALUES_REDIS =
    gA.DBSYSTEMVALUES_MONGODB =
    gA.DBSYSTEMVALUES_HBASE =
    gA.DBSYSTEMVALUES_CASSANDRA =
    gA.DBSYSTEMVALUES_COLDFUSION =
    gA.DBSYSTEMVALUES_H2 =
    gA.DBSYSTEMVALUES_VERTICA =
    gA.DBSYSTEMVALUES_TERADATA =
    gA.DBSYSTEMVALUES_SYBASE =
    gA.DBSYSTEMVALUES_SQLITE =
    gA.DBSYSTEMVALUES_POINTBASE =
    gA.DBSYSTEMVALUES_PERVASIVE =
    gA.DBSYSTEMVALUES_NETEZZA =
    gA.DBSYSTEMVALUES_MARIADB =
    gA.DBSYSTEMVALUES_INTERBASE =
    gA.DBSYSTEMVALUES_INSTANTDB =
    gA.DBSYSTEMVALUES_INFORMIX =
      void 0;
  gA.MESSAGINGOPERATIONVALUES_RECEIVE =
    gA.MessagingDestinationKindValues =
    gA.MESSAGINGDESTINATIONKINDVALUES_TOPIC =
    gA.MESSAGINGDESTINATIONKINDVALUES_QUEUE =
    gA.HttpFlavorValues =
    gA.HTTPFLAVORVALUES_QUIC =
    gA.HTTPFLAVORVALUES_SPDY =
    gA.HTTPFLAVORVALUES_HTTP_2_0 =
    gA.HTTPFLAVORVALUES_HTTP_1_1 =
    gA.HTTPFLAVORVALUES_HTTP_1_0 =
    gA.NetHostConnectionSubtypeValues =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_NR =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_GSM =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_LTE =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE =
    gA.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS =
    gA.NetHostConnectionTypeValues =
    gA.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN =
    gA.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE =
    gA.NETHOSTCONNECTIONTYPEVALUES_CELL =
    gA.NETHOSTCONNECTIONTYPEVALUES_WIRED =
    gA.NETHOSTCONNECTIONTYPEVALUES_WIFI =
    gA.NetTransportValues =
    gA.NETTRANSPORTVALUES_OTHER =
    gA.NETTRANSPORTVALUES_INPROC =
    gA.NETTRANSPORTVALUES_PIPE =
    gA.NETTRANSPORTVALUES_UNIX =
    gA.NETTRANSPORTVALUES_IP =
    gA.NETTRANSPORTVALUES_IP_UDP =
    gA.NETTRANSPORTVALUES_IP_TCP =
    gA.FaasInvokedProviderValues =
    gA.FAASINVOKEDPROVIDERVALUES_GCP =
    gA.FAASINVOKEDPROVIDERVALUES_AZURE =
    gA.FAASINVOKEDPROVIDERVALUES_AWS =
      void 0;
  gA.MessageTypeValues =
    gA.MESSAGETYPEVALUES_RECEIVED =
    gA.MESSAGETYPEVALUES_SENT =
    gA.RpcGrpcStatusCodeValues =
    gA.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED =
    gA.RPCGRPCSTATUSCODEVALUES_DATA_LOSS =
    gA.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE =
    gA.RPCGRPCSTATUSCODEVALUES_INTERNAL =
    gA.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED =
    gA.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE =
    gA.RPCGRPCSTATUSCODEVALUES_ABORTED =
    gA.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION =
    gA.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED =
    gA.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED =
    gA.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS =
    gA.RPCGRPCSTATUSCODEVALUES_NOT_FOUND =
    gA.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED =
    gA.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT =
    gA.RPCGRPCSTATUSCODEVALUES_UNKNOWN =
    gA.RPCGRPCSTATUSCODEVALUES_CANCELLED =
    gA.RPCGRPCSTATUSCODEVALUES_OK =
    gA.MessagingOperationValues =
    gA.MESSAGINGOPERATIONVALUES_PROCESS =
      void 0;
  var mt = cc(),
    Am = "aws.lambda.invoked_arn",
    Rm = "db.system",
    vm = "db.connection_string",
    Om = "db.user",
    km = "db.jdbc.driver_classname",
    wm = "db.name",
    Pm = "db.statement",
    Mm = "db.operation",
    Dm = "db.mssql.instance_name",
    Im = "db.cassandra.keyspace",
    Nm = "db.cassandra.page_size",
    xm = "db.cassandra.consistency_level",
    Lm = "db.cassandra.table",
    Fm = "db.cassandra.idempotence",
    Bm = "db.cassandra.speculative_execution_count",
    Hm = "db.cassandra.coordinator.id",
    Vm = "db.cassandra.coordinator.dc",
    Gm = "db.hbase.namespace",
    Km = "db.redis.database_index",
    Wm = "db.mongodb.collection",
    Ym = "db.sql.table",
    $m = "exception.type",
    qm = "exception.message",
    Xm = "exception.stacktrace",
    Qm = "exception.escaped",
    Jm = "faas.trigger",
    Zm = "faas.execution",
    eg = "faas.document.collection",
    tg = "faas.document.operation",
    ng = "faas.document.time",
    rg = "faas.document.name",
    og = "faas.time",
    ig = "faas.cron",
    sg = "faas.coldstart",
    ag = "faas.invoked_name",
    lg = "faas.invoked_provider",
    cg = "faas.invoked_region",
    ug = "net.transport",
    dg = "net.peer.ip",
    _g = "net.peer.port",
    mg = "net.peer.name",
    gg = "net.host.ip",
    hg = "net.host.port",
    Eg = "net.host.name",
    Sg = "net.host.connection.type",
    Tg = "net.host.connection.subtype",
    Ag = "net.host.carrier.name",
    bg = "net.host.carrier.mcc",
    yg = "net.host.carrier.mnc",
    Rg = "net.host.carrier.icc",
    vg = "peer.service",
    Og = "enduser.id",
    kg = "enduser.role",
    wg = "enduser.scope",
    Pg = "thread.id",
    Mg = "thread.name",
    Dg = "code.function",
    Ig = "code.namespace",
    Ng = "code.filepath",
    xg = "code.lineno",
    Lg = "http.method",
    Ug = "http.url",
    Fg = "http.target",
    Bg = "http.host",
    Hg = "http.scheme",
    Vg = "http.status_code",
    Kg = "http.flavor",
    jg = "http.user_agent",
    Wg = "http.request_content_length",
    Yg = "http.request_content_length_uncompressed",
    $g = "http.response_content_length",
    Xg = "http.response_content_length_uncompressed",
    Qg = "http.server_name",
    Jg = "http.route",
    Zg = "http.client_ip",
    eh = "aws.dynamodb.table_names",
    th = "aws.dynamodb.consumed_capacity",
    nh = "aws.dynamodb.item_collection_metrics",
    rh = "aws.dynamodb.provisioned_read_capacity",
    oh = "aws.dynamodb.provisioned_write_capacity",
    ih = "aws.dynamodb.consistent_read",
    sh = "aws.dynamodb.projection",
    ah = "aws.dynamodb.limit",
    lh = "aws.dynamodb.attributes_to_get",
    ch = "aws.dynamodb.index_name",
    uh = "aws.dynamodb.select",
    Eh = "aws.dynamodb.global_secondary_indexes",
    Sh = "aws.dynamodb.local_secondary_indexes",
    Th = "aws.dynamodb.exclusive_start_table",
    Ah = "aws.dynamodb.table_count",
    bh = "aws.dynamodb.scan_forward",
    Rh = "aws.dynamodb.segment",
    Ch = "aws.dynamodb.total_segments",
    vh = "aws.dynamodb.count",
    Oh = "aws.dynamodb.scanned_count",
    kh = "aws.dynamodb.attribute_definitions",
    wh = "aws.dynamodb.global_secondary_index_updates",
    Ph = "messaging.system",
    Mh = "messaging.destination",
    Dh = "messaging.destination_kind",
    Ih = "messaging.temp_destination",
    Nh = "messaging.protocol",
    xh = "messaging.protocol_version",
    Lh = "messaging.url",
    Uh = "messaging.message_id",
    Fh = "messaging.conversation_id",
    Bh = "messaging.message_payload_size_bytes",
    Hh = "messaging.message_payload_compressed_size_bytes",
    Gh = "messaging.operation",
    jh = "messaging.consumer_id",
    Wh = "messaging.rabbitmq.routing_key",
    $h = "messaging.kafka.message_key",
    qh = "messaging.kafka.consumer_group",
    Jh = "messaging.kafka.client_id",
    Zh = "messaging.kafka.partition",
    eE = "messaging.kafka.tombstone",
    tE = "rpc.system",
    nE = "rpc.service",
    rE = "rpc.method",
    oE = "rpc.grpc.status_code",
    iE = "rpc.jsonrpc.version",
    sE = "rpc.jsonrpc.request_id",
    aE = "rpc.jsonrpc.error_code",
    lE = "rpc.jsonrpc.error_message",
    cE = "message.type",
    uE = "message.id",
    dE = "message.compressed_size",
    pE = "message.uncompressed_size";
  gA.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = Am;
  gA.SEMATTRS_DB_SYSTEM = Rm;
  gA.SEMATTRS_DB_CONNECTION_STRING = vm;
  gA.SEMATTRS_DB_USER = Om;
  gA.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = km;
  gA.SEMATTRS_DB_NAME = wm;
  gA.SEMATTRS_DB_STATEMENT = Pm;
  gA.SEMATTRS_DB_OPERATION = Mm;
  gA.SEMATTRS_DB_MSSQL_INSTANCE_NAME = Dm;
  gA.SEMATTRS_DB_CASSANDRA_KEYSPACE = Im;
  gA.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = Nm;
  gA.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = xm;
  gA.SEMATTRS_DB_CASSANDRA_TABLE = Lm;
  gA.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = Fm;
  gA.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = Bm;
  gA.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = Hm;
  gA.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = Vm;
  gA.SEMATTRS_DB_HBASE_NAMESPACE = Gm;
  gA.SEMATTRS_DB_REDIS_DATABASE_INDEX = Km;
  gA.SEMATTRS_DB_MONGODB_COLLECTION = Wm;
  gA.SEMATTRS_DB_SQL_TABLE = Ym;
  gA.SEMATTRS_EXCEPTION_TYPE = $m;
  gA.SEMATTRS_EXCEPTION_MESSAGE = qm;
  gA.SEMATTRS_EXCEPTION_STACKTRACE = Xm;
  gA.SEMATTRS_EXCEPTION_ESCAPED = Qm;
  gA.SEMATTRS_FAAS_TRIGGER = Jm;
  gA.SEMATTRS_FAAS_EXECUTION = Zm;
  gA.SEMATTRS_FAAS_DOCUMENT_COLLECTION = eg;
  gA.SEMATTRS_FAAS_DOCUMENT_OPERATION = tg;
  gA.SEMATTRS_FAAS_DOCUMENT_TIME = ng;
  gA.SEMATTRS_FAAS_DOCUMENT_NAME = rg;
  gA.SEMATTRS_FAAS_TIME = og;
  gA.SEMATTRS_FAAS_CRON = ig;
  gA.SEMATTRS_FAAS_COLDSTART = sg;
  gA.SEMATTRS_FAAS_INVOKED_NAME = ag;
  gA.SEMATTRS_FAAS_INVOKED_PROVIDER = lg;
  gA.SEMATTRS_FAAS_INVOKED_REGION = cg;
  gA.SEMATTRS_NET_TRANSPORT = ug;
  gA.SEMATTRS_NET_PEER_IP = dg;
  gA.SEMATTRS_NET_PEER_PORT = _g;
  gA.SEMATTRS_NET_PEER_NAME = mg;
  gA.SEMATTRS_NET_HOST_IP = gg;
  gA.SEMATTRS_NET_HOST_PORT = hg;
  gA.SEMATTRS_NET_HOST_NAME = Eg;
  gA.SEMATTRS_NET_HOST_CONNECTION_TYPE = Sg;
  gA.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = Tg;
  gA.SEMATTRS_NET_HOST_CARRIER_NAME = Ag;
  gA.SEMATTRS_NET_HOST_CARRIER_MCC = bg;
  gA.SEMATTRS_NET_HOST_CARRIER_MNC = yg;
  gA.SEMATTRS_NET_HOST_CARRIER_ICC = Rg;
  gA.SEMATTRS_PEER_SERVICE = vg;
  gA.SEMATTRS_ENDUSER_ID = Og;
  gA.SEMATTRS_ENDUSER_ROLE = kg;
  gA.SEMATTRS_ENDUSER_SCOPE = wg;
  gA.SEMATTRS_THREAD_ID = Pg;
  gA.SEMATTRS_THREAD_NAME = Mg;
  gA.SEMATTRS_CODE_FUNCTION = Dg;
  gA.SEMATTRS_CODE_NAMESPACE = Ig;
  gA.SEMATTRS_CODE_FILEPATH = Ng;
  gA.SEMATTRS_CODE_LINENO = xg;
  gA.SEMATTRS_HTTP_METHOD = Lg;
  gA.SEMATTRS_HTTP_URL = Ug;
  gA.SEMATTRS_HTTP_TARGET = Fg;
  gA.SEMATTRS_HTTP_HOST = Bg;
  gA.SEMATTRS_HTTP_SCHEME = Hg;
  gA.SEMATTRS_HTTP_STATUS_CODE = Vg;
  gA.SEMATTRS_HTTP_FLAVOR = Kg;
  gA.SEMATTRS_HTTP_USER_AGENT = jg;
  gA.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = Wg;
  gA.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = Yg;
  gA.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = $g;
  gA.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = Xg;
  gA.SEMATTRS_HTTP_SERVER_NAME = Qg;
  gA.SEMATTRS_HTTP_ROUTE = Jg;
  gA.SEMATTRS_HTTP_CLIENT_IP = Zg;
  gA.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = eh;
  gA.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = th;
  gA.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = nh;
  gA.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = rh;
  gA.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = oh;
  gA.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = ih;
  gA.SEMATTRS_AWS_DYNAMODB_PROJECTION = sh;
  gA.SEMATTRS_AWS_DYNAMODB_LIMIT = ah;
  gA.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = lh;
  gA.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = ch;
  gA.SEMATTRS_AWS_DYNAMODB_SELECT = uh;
  gA.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = Eh;
  gA.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = Sh;
  gA.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = Th;
  gA.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = Ah;
  gA.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = bh;
  gA.SEMATTRS_AWS_DYNAMODB_SEGMENT = Rh;
  gA.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = Ch;
  gA.SEMATTRS_AWS_DYNAMODB_COUNT = vh;
  gA.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = Oh;
  gA.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = kh;
  gA.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = wh;
  gA.SEMATTRS_MESSAGING_SYSTEM = Ph;
  gA.SEMATTRS_MESSAGING_DESTINATION = Mh;
  gA.SEMATTRS_MESSAGING_DESTINATION_KIND = Dh;
  gA.SEMATTRS_MESSAGING_TEMP_DESTINATION = Ih;
  gA.SEMATTRS_MESSAGING_PROTOCOL = Nh;
  gA.SEMATTRS_MESSAGING_PROTOCOL_VERSION = xh;
  gA.SEMATTRS_MESSAGING_URL = Lh;
  gA.SEMATTRS_MESSAGING_MESSAGE_ID = Uh;
  gA.SEMATTRS_MESSAGING_CONVERSATION_ID = Fh;
  gA.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = Bh;
  gA.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = Hh;
  gA.SEMATTRS_MESSAGING_OPERATION = Gh;
  gA.SEMATTRS_MESSAGING_CONSUMER_ID = jh;
  gA.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = Wh;
  gA.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = $h;
  gA.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = qh;
  gA.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = Jh;
  gA.SEMATTRS_MESSAGING_KAFKA_PARTITION = Zh;
  gA.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = eE;
  gA.SEMATTRS_RPC_SYSTEM = tE;
  gA.SEMATTRS_RPC_SERVICE = nE;
  gA.SEMATTRS_RPC_METHOD = rE;
  gA.SEMATTRS_RPC_GRPC_STATUS_CODE = oE;
  gA.SEMATTRS_RPC_JSONRPC_VERSION = iE;
  gA.SEMATTRS_RPC_JSONRPC_REQUEST_ID = sE;
  gA.SEMATTRS_RPC_JSONRPC_ERROR_CODE = aE;
  gA.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = lE;
  gA.SEMATTRS_MESSAGE_TYPE = cE;
  gA.SEMATTRS_MESSAGE_ID = uE;
  gA.SEMATTRS_MESSAGE_COMPRESSED_SIZE = dE;
  gA.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = pE;
  gA.SemanticAttributes = (0, mt.createConstMap)([
    Am,
    Rm,
    vm,
    Om,
    km,
    wm,
    Pm,
    Mm,
    Dm,
    Im,
    Nm,
    xm,
    Lm,
    Fm,
    Bm,
    Hm,
    Vm,
    Gm,
    Km,
    Wm,
    Ym,
    $m,
    qm,
    Xm,
    Qm,
    Jm,
    Zm,
    eg,
    tg,
    ng,
    rg,
    og,
    ig,
    sg,
    ag,
    lg,
    cg,
    ug,
    dg,
    _g,
    mg,
    gg,
    hg,
    Eg,
    Sg,
    Tg,
    Ag,
    bg,
    yg,
    Rg,
    vg,
    Og,
    kg,
    wg,
    Pg,
    Mg,
    Dg,
    Ig,
    Ng,
    xg,
    Lg,
    Ug,
    Fg,
    Bg,
    Hg,
    Vg,
    Kg,
    jg,
    Wg,
    Yg,
    $g,
    Xg,
    Qg,
    Jg,
    Zg,
    eh,
    th,
    nh,
    rh,
    oh,
    ih,
    sh,
    ah,
    lh,
    ch,
    uh,
    Eh,
    Sh,
    Th,
    Ah,
    bh,
    Rh,
    Ch,
    vh,
    Oh,
    kh,
    wh,
    Ph,
    Mh,
    Dh,
    Ih,
    Nh,
    xh,
    Lh,
    Uh,
    Fh,
    Bh,
    Hh,
    Gh,
    jh,
    Wh,
    $h,
    qh,
    Jh,
    Zh,
    eE,
    tE,
    nE,
    rE,
    oE,
    iE,
    sE,
    aE,
    lE,
    cE,
    uE,
    dE,
    pE,
  ]);
  var fE = "other_sql",
    _E = "mssql",
    mE = "mysql",
    gE = "oracle",
    hE = "db2",
    EE = "postgresql",
    SE = "redshift",
    TE = "hive",
    AE = "cloudscape",
    bE = "hsqldb",
    yE = "progress",
    RE = "maxdb",
    CE = "hanadb",
    vE = "ingres",
    OE = "firstsql",
    kE = "edb",
    wE = "cache",
    PE = "adabas",
    ME = "firebird",
    DE = "derby",
    IE = "filemaker",
    NE = "informix",
    xE = "instantdb",
    LE = "interbase",
    UE = "mariadb",
    zE = "netezza",
    FE = "pervasive",
    BE = "pointbase",
    HE = "sqlite",
    VE = "sybase",
    GE = "teradata",
    KE = "vertica",
    jE = "h2",
    WE = "coldfusion",
    YE = "cassandra",
    $E = "hbase",
    qE = "mongodb",
    XE = "redis",
    QE = "couchbase",
    JE = "couchdb",
    ZE = "cosmosdb",
    iS = "dynamodb",
    sS = "neo4j",
    aS = "geode",
    uS = "elasticsearch",
    pS = "memcached",
    _S = "cockroachdb";
  gA.DBSYSTEMVALUES_OTHER_SQL = fE;
  gA.DBSYSTEMVALUES_MSSQL = _E;
  gA.DBSYSTEMVALUES_MYSQL = mE;
  gA.DBSYSTEMVALUES_ORACLE = gE;
  gA.DBSYSTEMVALUES_DB2 = hE;
  gA.DBSYSTEMVALUES_POSTGRESQL = EE;
  gA.DBSYSTEMVALUES_REDSHIFT = SE;
  gA.DBSYSTEMVALUES_HIVE = TE;
  gA.DBSYSTEMVALUES_CLOUDSCAPE = AE;
  gA.DBSYSTEMVALUES_HSQLDB = bE;
  gA.DBSYSTEMVALUES_PROGRESS = yE;
  gA.DBSYSTEMVALUES_MAXDB = RE;
  gA.DBSYSTEMVALUES_HANADB = CE;
  gA.DBSYSTEMVALUES_INGRES = vE;
  gA.DBSYSTEMVALUES_FIRSTSQL = OE;
  gA.DBSYSTEMVALUES_EDB = kE;
  gA.DBSYSTEMVALUES_CACHE = wE;
  gA.DBSYSTEMVALUES_ADABAS = PE;
  gA.DBSYSTEMVALUES_FIREBIRD = ME;
  gA.DBSYSTEMVALUES_DERBY = DE;
  gA.DBSYSTEMVALUES_FILEMAKER = IE;
  gA.DBSYSTEMVALUES_INFORMIX = NE;
  gA.DBSYSTEMVALUES_INSTANTDB = xE;
  gA.DBSYSTEMVALUES_INTERBASE = LE;
  gA.DBSYSTEMVALUES_MARIADB = UE;
  gA.DBSYSTEMVALUES_NETEZZA = zE;
  gA.DBSYSTEMVALUES_PERVASIVE = FE;
  gA.DBSYSTEMVALUES_POINTBASE = BE;
  gA.DBSYSTEMVALUES_SQLITE = HE;
  gA.DBSYSTEMVALUES_SYBASE = VE;
  gA.DBSYSTEMVALUES_TERADATA = GE;
  gA.DBSYSTEMVALUES_VERTICA = KE;
  gA.DBSYSTEMVALUES_H2 = jE;
  gA.DBSYSTEMVALUES_COLDFUSION = WE;
  gA.DBSYSTEMVALUES_CASSANDRA = YE;
  gA.DBSYSTEMVALUES_HBASE = $E;
  gA.DBSYSTEMVALUES_MONGODB = qE;
  gA.DBSYSTEMVALUES_REDIS = XE;
  gA.DBSYSTEMVALUES_COUCHBASE = QE;
  gA.DBSYSTEMVALUES_COUCHDB = JE;
  gA.DBSYSTEMVALUES_COSMOSDB = ZE;
  gA.DBSYSTEMVALUES_DYNAMODB = iS;
  gA.DBSYSTEMVALUES_NEO4J = sS;
  gA.DBSYSTEMVALUES_GEODE = aS;
  gA.DBSYSTEMVALUES_ELASTICSEARCH = uS;
  gA.DBSYSTEMVALUES_MEMCACHED = pS;
  gA.DBSYSTEMVALUES_COCKROACHDB = _S;
  gA.DbSystemValues = (0, mt.createConstMap)([
    fE,
    _E,
    mE,
    gE,
    hE,
    EE,
    SE,
    TE,
    AE,
    bE,
    yE,
    RE,
    CE,
    vE,
    OE,
    kE,
    wE,
    PE,
    ME,
    DE,
    IE,
    NE,
    xE,
    LE,
    UE,
    zE,
    FE,
    BE,
    HE,
    VE,
    GE,
    KE,
    jE,
    WE,
    YE,
    $E,
    qE,
    XE,
    QE,
    JE,
    ZE,
    iS,
    sS,
    aS,
    uS,
    pS,
    _S,
  ]);
  var mS = "all",
    gS = "each_quorum",
    hS = "quorum",
    ES = "local_quorum",
    SS = "one",
    TS = "two",
    AS = "three",
    bS = "local_one",
    yS = "any",
    RS = "serial",
    CS = "local_serial";
  gA.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = mS;
  gA.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = gS;
  gA.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = hS;
  gA.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = ES;
  gA.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = SS;
  gA.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = TS;
  gA.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = AS;
  gA.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = bS;
  gA.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = yS;
  gA.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = RS;
  gA.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = CS;
  gA.DbCassandraConsistencyLevelValues = (0, mt.createConstMap)([mS, gS, hS, ES, SS, TS, AS, bS, yS, RS, CS]);
  var vS = "datasource",
    OS = "http",
    kS = "pubsub",
    wS = "timer",
    PS = "other";
  gA.FAASTRIGGERVALUES_DATASOURCE = vS;
  gA.FAASTRIGGERVALUES_HTTP = OS;
  gA.FAASTRIGGERVALUES_PUBSUB = kS;
  gA.FAASTRIGGERVALUES_TIMER = wS;
  gA.FAASTRIGGERVALUES_OTHER = PS;
  gA.FaasTriggerValues = (0, mt.createConstMap)([vS, OS, kS, wS, PS]);
  var MS = "insert",
    DS = "edit",
    IS = "delete";
  gA.FAASDOCUMENTOPERATIONVALUES_INSERT = MS;
  gA.FAASDOCUMENTOPERATIONVALUES_EDIT = DS;
  gA.FAASDOCUMENTOPERATIONVALUES_DELETE = IS;
  gA.FaasDocumentOperationValues = (0, mt.createConstMap)([MS, DS, IS]);
  var NS = "alibaba_cloud",
    xS = "aws",
    LS = "azure",
    US = "gcp";
  gA.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = NS;
  gA.FAASINVOKEDPROVIDERVALUES_AWS = xS;
  gA.FAASINVOKEDPROVIDERVALUES_AZURE = LS;
  gA.FAASINVOKEDPROVIDERVALUES_GCP = US;
  gA.FaasInvokedProviderValues = (0, mt.createConstMap)([NS, xS, LS, US]);
  var zS = "ip_tcp",
    FS = "ip_udp",
    BS = "ip",
    HS = "unix",
    VS = "pipe",
    GS = "inproc",
    KS = "other";
  gA.NETTRANSPORTVALUES_IP_TCP = zS;
  gA.NETTRANSPORTVALUES_IP_UDP = FS;
  gA.NETTRANSPORTVALUES_IP = BS;
  gA.NETTRANSPORTVALUES_UNIX = HS;
  gA.NETTRANSPORTVALUES_PIPE = VS;
  gA.NETTRANSPORTVALUES_INPROC = GS;
  gA.NETTRANSPORTVALUES_OTHER = KS;
  gA.NetTransportValues = (0, mt.createConstMap)([zS, FS, BS, HS, VS, GS, KS]);
  var jS = "wifi",
    WS = "wired",
    $S = "cell",
    qS = "unavailable",
    eT = "unknown";
  gA.NETHOSTCONNECTIONTYPEVALUES_WIFI = jS;
  gA.NETHOSTCONNECTIONTYPEVALUES_WIRED = WS;
  gA.NETHOSTCONNECTIONTYPEVALUES_CELL = $S;
  gA.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = qS;
  gA.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = eT;
  gA.NetHostConnectionTypeValues = (0, mt.createConstMap)([jS, WS, $S, qS, eT]);
  var tT = "gprs",
    nT = "edge",
    rT = "umts",
    oT = "cdma",
    iT = "evdo_0",
    sT = "evdo_a",
    aT = "cdma2000_1xrtt",
    lT = "hsdpa",
    cT = "hsupa",
    uT = "hspa",
    dT = "iden",
    pT = "evdo_b",
    fT = "lte",
    _T = "ehrpd",
    mT = "hspap",
    gT = "gsm",
    hT = "td_scdma",
    ET = "iwlan",
    ST = "nr",
    TT = "nrnsa",
    AT = "lte_ca";
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = tT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = nT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = rT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = oT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = iT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = sT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = aT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = lT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = cT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = uT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = dT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = pT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = fT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = _T;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = mT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = gT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = hT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = ET;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_NR = ST;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = TT;
  gA.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = AT;
  gA.NetHostConnectionSubtypeValues = (0, mt.createConstMap)([
    tT,
    nT,
    rT,
    oT,
    iT,
    sT,
    aT,
    lT,
    cT,
    uT,
    dT,
    pT,
    fT,
    _T,
    mT,
    gT,
    hT,
    ET,
    ST,
    TT,
    AT,
  ]);
  var bT = "1.0",
    yT = "1.1",
    RT = "2.0",
    CT = "SPDY",
    vT = "QUIC";
  gA.HTTPFLAVORVALUES_HTTP_1_0 = bT;
  gA.HTTPFLAVORVALUES_HTTP_1_1 = yT;
  gA.HTTPFLAVORVALUES_HTTP_2_0 = RT;
  gA.HTTPFLAVORVALUES_SPDY = CT;
  gA.HTTPFLAVORVALUES_QUIC = vT;
  gA.HttpFlavorValues = { HTTP_1_0: bT, HTTP_1_1: yT, HTTP_2_0: RT, SPDY: CT, QUIC: vT };
  var OT = "queue",
    wT = "topic";
  gA.MESSAGINGDESTINATIONKINDVALUES_QUEUE = OT;
  gA.MESSAGINGDESTINATIONKINDVALUES_TOPIC = wT;
  gA.MessagingDestinationKindValues = (0, mt.createConstMap)([OT, wT]);
  var zT = "receive",
    VT = "process";
  gA.MESSAGINGOPERATIONVALUES_RECEIVE = zT;
  gA.MESSAGINGOPERATIONVALUES_PROCESS = VT;
  gA.MessagingOperationValues = (0, mt.createConstMap)([zT, VT]);
  var GT = 0,
    KT = 1,
    jT = 2,
    YT = 3,
    $T = 4,
    qT = 5,
    XT = 6,
    QT = 7,
    JT = 8,
    ZT = 9,
    eA = 10,
    sA = 11,
    lA = 12,
    uA = 13,
    dA = 14,
    pA = 15,
    fA = 16;
  gA.RPCGRPCSTATUSCODEVALUES_OK = GT;
  gA.RPCGRPCSTATUSCODEVALUES_CANCELLED = KT;
  gA.RPCGRPCSTATUSCODEVALUES_UNKNOWN = jT;
  gA.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = YT;
  gA.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = $T;
  gA.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = qT;
  gA.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = XT;
  gA.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = QT;
  gA.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = JT;
  gA.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = ZT;
  gA.RPCGRPCSTATUSCODEVALUES_ABORTED = eA;
  gA.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = sA;
  gA.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = lA;
  gA.RPCGRPCSTATUSCODEVALUES_INTERNAL = uA;
  gA.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = dA;
  gA.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = pA;
  gA.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = fA;
  gA.RpcGrpcStatusCodeValues = {
    OK: GT,
    CANCELLED: KT,
    UNKNOWN: jT,
    INVALID_ARGUMENT: YT,
    DEADLINE_EXCEEDED: $T,
    NOT_FOUND: qT,
    ALREADY_EXISTS: XT,
    PERMISSION_DENIED: QT,
    RESOURCE_EXHAUSTED: JT,
    FAILED_PRECONDITION: ZT,
    ABORTED: eA,
    OUT_OF_RANGE: sA,
    UNIMPLEMENTED: lA,
    INTERNAL: uA,
    UNAVAILABLE: dA,
    DATA_LOSS: pA,
    UNAUTHENTICATED: fA,
  };
  var _A = "SENT",
    mA = "RECEIVED";
  gA.MESSAGETYPEVALUES_SENT = _A;
  gA.MESSAGETYPEVALUES_RECEIVED = mA;
  gA.MessageTypeValues = (0, mt.createConstMap)([_A, mA]);
});

var vA = S(function (In) {
  var XH =
      (In && In.__createBinding) ||
      (Object.create
        ? function (e, t, r, o) {
            if (o === void 0) o = r;
            var u = Object.getOwnPropertyDescriptor(t, r);
            if (!u || ("get" in u ? !t.__esModule : u.writable || u.configurable))
              u = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, o, u);
          }
        : function (e, t, r, o) {
            if (o === void 0) o = r;
            e[o] = t[r];
          }),
    QH =
      (In && In.__exportStar) ||
      function (e, t) {
        for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) XH(t, e, r);
      };
  Object.defineProperty(In, "__esModule", { value: !0 });
  QH(CA(), In);
});

var PR = S(function (RR) {
  Object.defineProperty(RR, "__esModule", { value: !0 });
  RR.SEMRESATTRS_K8S_STATEFULSET_NAME =
    RR.SEMRESATTRS_K8S_STATEFULSET_UID =
    RR.SEMRESATTRS_K8S_DEPLOYMENT_NAME =
    RR.SEMRESATTRS_K8S_DEPLOYMENT_UID =
    RR.SEMRESATTRS_K8S_REPLICASET_NAME =
    RR.SEMRESATTRS_K8S_REPLICASET_UID =
    RR.SEMRESATTRS_K8S_CONTAINER_NAME =
    RR.SEMRESATTRS_K8S_POD_NAME =
    RR.SEMRESATTRS_K8S_POD_UID =
    RR.SEMRESATTRS_K8S_NAMESPACE_NAME =
    RR.SEMRESATTRS_K8S_NODE_UID =
    RR.SEMRESATTRS_K8S_NODE_NAME =
    RR.SEMRESATTRS_K8S_CLUSTER_NAME =
    RR.SEMRESATTRS_HOST_IMAGE_VERSION =
    RR.SEMRESATTRS_HOST_IMAGE_ID =
    RR.SEMRESATTRS_HOST_IMAGE_NAME =
    RR.SEMRESATTRS_HOST_ARCH =
    RR.SEMRESATTRS_HOST_TYPE =
    RR.SEMRESATTRS_HOST_NAME =
    RR.SEMRESATTRS_HOST_ID =
    RR.SEMRESATTRS_FAAS_MAX_MEMORY =
    RR.SEMRESATTRS_FAAS_INSTANCE =
    RR.SEMRESATTRS_FAAS_VERSION =
    RR.SEMRESATTRS_FAAS_ID =
    RR.SEMRESATTRS_FAAS_NAME =
    RR.SEMRESATTRS_DEVICE_MODEL_NAME =
    RR.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER =
    RR.SEMRESATTRS_DEVICE_ID =
    RR.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT =
    RR.SEMRESATTRS_CONTAINER_IMAGE_TAG =
    RR.SEMRESATTRS_CONTAINER_IMAGE_NAME =
    RR.SEMRESATTRS_CONTAINER_RUNTIME =
    RR.SEMRESATTRS_CONTAINER_ID =
    RR.SEMRESATTRS_CONTAINER_NAME =
    RR.SEMRESATTRS_AWS_LOG_STREAM_ARNS =
    RR.SEMRESATTRS_AWS_LOG_STREAM_NAMES =
    RR.SEMRESATTRS_AWS_LOG_GROUP_ARNS =
    RR.SEMRESATTRS_AWS_LOG_GROUP_NAMES =
    RR.SEMRESATTRS_AWS_EKS_CLUSTER_ARN =
    RR.SEMRESATTRS_AWS_ECS_TASK_REVISION =
    RR.SEMRESATTRS_AWS_ECS_TASK_FAMILY =
    RR.SEMRESATTRS_AWS_ECS_TASK_ARN =
    RR.SEMRESATTRS_AWS_ECS_LAUNCHTYPE =
    RR.SEMRESATTRS_AWS_ECS_CLUSTER_ARN =
    RR.SEMRESATTRS_AWS_ECS_CONTAINER_ARN =
    RR.SEMRESATTRS_CLOUD_PLATFORM =
    RR.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE =
    RR.SEMRESATTRS_CLOUD_REGION =
    RR.SEMRESATTRS_CLOUD_ACCOUNT_ID =
    RR.SEMRESATTRS_CLOUD_PROVIDER =
      void 0;
  RR.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE =
    RR.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE =
    RR.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS =
    RR.CLOUDPLATFORMVALUES_AZURE_AKS =
    RR.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES =
    RR.CLOUDPLATFORMVALUES_AZURE_VM =
    RR.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK =
    RR.CLOUDPLATFORMVALUES_AWS_LAMBDA =
    RR.CLOUDPLATFORMVALUES_AWS_EKS =
    RR.CLOUDPLATFORMVALUES_AWS_ECS =
    RR.CLOUDPLATFORMVALUES_AWS_EC2 =
    RR.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC =
    RR.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS =
    RR.CloudProviderValues =
    RR.CLOUDPROVIDERVALUES_GCP =
    RR.CLOUDPROVIDERVALUES_AZURE =
    RR.CLOUDPROVIDERVALUES_AWS =
    RR.CLOUDPROVIDERVALUES_ALIBABA_CLOUD =
    RR.SemanticResourceAttributes =
    RR.SEMRESATTRS_WEBENGINE_DESCRIPTION =
    RR.SEMRESATTRS_WEBENGINE_VERSION =
    RR.SEMRESATTRS_WEBENGINE_NAME =
    RR.SEMRESATTRS_TELEMETRY_AUTO_VERSION =
    RR.SEMRESATTRS_TELEMETRY_SDK_VERSION =
    RR.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE =
    RR.SEMRESATTRS_TELEMETRY_SDK_NAME =
    RR.SEMRESATTRS_SERVICE_VERSION =
    RR.SEMRESATTRS_SERVICE_INSTANCE_ID =
    RR.SEMRESATTRS_SERVICE_NAMESPACE =
    RR.SEMRESATTRS_SERVICE_NAME =
    RR.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION =
    RR.SEMRESATTRS_PROCESS_RUNTIME_VERSION =
    RR.SEMRESATTRS_PROCESS_RUNTIME_NAME =
    RR.SEMRESATTRS_PROCESS_OWNER =
    RR.SEMRESATTRS_PROCESS_COMMAND_ARGS =
    RR.SEMRESATTRS_PROCESS_COMMAND_LINE =
    RR.SEMRESATTRS_PROCESS_COMMAND =
    RR.SEMRESATTRS_PROCESS_EXECUTABLE_PATH =
    RR.SEMRESATTRS_PROCESS_EXECUTABLE_NAME =
    RR.SEMRESATTRS_PROCESS_PID =
    RR.SEMRESATTRS_OS_VERSION =
    RR.SEMRESATTRS_OS_NAME =
    RR.SEMRESATTRS_OS_DESCRIPTION =
    RR.SEMRESATTRS_OS_TYPE =
    RR.SEMRESATTRS_K8S_CRONJOB_NAME =
    RR.SEMRESATTRS_K8S_CRONJOB_UID =
    RR.SEMRESATTRS_K8S_JOB_NAME =
    RR.SEMRESATTRS_K8S_JOB_UID =
    RR.SEMRESATTRS_K8S_DAEMONSET_NAME =
    RR.SEMRESATTRS_K8S_DAEMONSET_UID =
      void 0;
  RR.TelemetrySdkLanguageValues =
    RR.TELEMETRYSDKLANGUAGEVALUES_WEBJS =
    RR.TELEMETRYSDKLANGUAGEVALUES_RUBY =
    RR.TELEMETRYSDKLANGUAGEVALUES_PYTHON =
    RR.TELEMETRYSDKLANGUAGEVALUES_PHP =
    RR.TELEMETRYSDKLANGUAGEVALUES_NODEJS =
    RR.TELEMETRYSDKLANGUAGEVALUES_JAVA =
    RR.TELEMETRYSDKLANGUAGEVALUES_GO =
    RR.TELEMETRYSDKLANGUAGEVALUES_ERLANG =
    RR.TELEMETRYSDKLANGUAGEVALUES_DOTNET =
    RR.TELEMETRYSDKLANGUAGEVALUES_CPP =
    RR.OsTypeValues =
    RR.OSTYPEVALUES_Z_OS =
    RR.OSTYPEVALUES_SOLARIS =
    RR.OSTYPEVALUES_AIX =
    RR.OSTYPEVALUES_HPUX =
    RR.OSTYPEVALUES_DRAGONFLYBSD =
    RR.OSTYPEVALUES_OPENBSD =
    RR.OSTYPEVALUES_NETBSD =
    RR.OSTYPEVALUES_FREEBSD =
    RR.OSTYPEVALUES_DARWIN =
    RR.OSTYPEVALUES_LINUX =
    RR.OSTYPEVALUES_WINDOWS =
    RR.HostArchValues =
    RR.HOSTARCHVALUES_X86 =
    RR.HOSTARCHVALUES_PPC64 =
    RR.HOSTARCHVALUES_PPC32 =
    RR.HOSTARCHVALUES_IA64 =
    RR.HOSTARCHVALUES_ARM64 =
    RR.HOSTARCHVALUES_ARM32 =
    RR.HOSTARCHVALUES_AMD64 =
    RR.AwsEcsLaunchtypeValues =
    RR.AWSECSLAUNCHTYPEVALUES_FARGATE =
    RR.AWSECSLAUNCHTYPEVALUES_EC2 =
    RR.CloudPlatformValues =
    RR.CLOUDPLATFORMVALUES_GCP_APP_ENGINE =
    RR.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS =
    RR.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE =
    RR.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN =
      void 0;
  var Nn = cc(),
    OA = "cloud.provider",
    kA = "cloud.account.id",
    wA = "cloud.region",
    PA = "cloud.availability_zone",
    MA = "cloud.platform",
    DA = "aws.ecs.container.arn",
    IA = "aws.ecs.cluster.arn",
    NA = "aws.ecs.launchtype",
    xA = "aws.ecs.task.arn",
    LA = "aws.ecs.task.family",
    UA = "aws.ecs.task.revision",
    zA = "aws.eks.cluster.arn",
    FA = "aws.log.group.names",
    BA = "aws.log.group.arns",
    HA = "aws.log.stream.names",
    VA = "aws.log.stream.arns",
    GA = "container.name",
    KA = "container.id",
    jA = "container.runtime",
    WA = "container.image.name",
    YA = "container.image.tag",
    $A = "deployment.environment",
    qA = "device.id",
    XA = "device.model.identifier",
    QA = "device.model.name",
    JA = "faas.name",
    ZA = "faas.id",
    sb = "faas.version",
    ab = "faas.instance",
    lb = "faas.max_memory",
    ub = "host.id",
    db = "host.name",
    pb = "host.type",
    fb = "host.arch",
    _b = "host.image.name",
    gb = "host.image.id",
    hb = "host.image.version",
    Eb = "k8s.cluster.name",
    Sb = "k8s.node.name",
    Tb = "k8s.node.uid",
    Ab = "k8s.namespace.name",
    bb = "k8s.pod.uid",
    Rb = "k8s.pod.name",
    Cb = "k8s.container.name",
    vb = "k8s.replicaset.uid",
    Ob = "k8s.replicaset.name",
    kb = "k8s.deployment.uid",
    wb = "k8s.deployment.name",
    Pb = "k8s.statefulset.uid",
    Mb = "k8s.statefulset.name",
    Db = "k8s.daemonset.uid",
    Ib = "k8s.daemonset.name",
    Nb = "k8s.job.uid",
    xb = "k8s.job.name",
    Lb = "k8s.cronjob.uid",
    Ub = "k8s.cronjob.name",
    zb = "os.type",
    Fb = "os.description",
    Bb = "os.name",
    Hb = "os.version",
    Vb = "process.pid",
    Gb = "process.executable.name",
    Kb = "process.executable.path",
    jb = "process.command",
    Wb = "process.command_line",
    Yb = "process.command_args",
    $b = "process.owner",
    qb = "process.runtime.name",
    Xb = "process.runtime.version",
    Qb = "process.runtime.description",
    Jb = "service.name",
    Zb = "service.namespace",
    ey = "service.instance.id",
    ty = "service.version",
    ny = "telemetry.sdk.name",
    ry = "telemetry.sdk.language",
    oy = "telemetry.sdk.version",
    iy = "telemetry.auto.version",
    sy = "webengine.name",
    ay = "webengine.version",
    ly = "webengine.description";
  RR.SEMRESATTRS_CLOUD_PROVIDER = OA;
  RR.SEMRESATTRS_CLOUD_ACCOUNT_ID = kA;
  RR.SEMRESATTRS_CLOUD_REGION = wA;
  RR.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = PA;
  RR.SEMRESATTRS_CLOUD_PLATFORM = MA;
  RR.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = DA;
  RR.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = IA;
  RR.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = NA;
  RR.SEMRESATTRS_AWS_ECS_TASK_ARN = xA;
  RR.SEMRESATTRS_AWS_ECS_TASK_FAMILY = LA;
  RR.SEMRESATTRS_AWS_ECS_TASK_REVISION = UA;
  RR.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = zA;
  RR.SEMRESATTRS_AWS_LOG_GROUP_NAMES = FA;
  RR.SEMRESATTRS_AWS_LOG_GROUP_ARNS = BA;
  RR.SEMRESATTRS_AWS_LOG_STREAM_NAMES = HA;
  RR.SEMRESATTRS_AWS_LOG_STREAM_ARNS = VA;
  RR.SEMRESATTRS_CONTAINER_NAME = GA;
  RR.SEMRESATTRS_CONTAINER_ID = KA;
  RR.SEMRESATTRS_CONTAINER_RUNTIME = jA;
  RR.SEMRESATTRS_CONTAINER_IMAGE_NAME = WA;
  RR.SEMRESATTRS_CONTAINER_IMAGE_TAG = YA;
  RR.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = $A;
  RR.SEMRESATTRS_DEVICE_ID = qA;
  RR.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = XA;
  RR.SEMRESATTRS_DEVICE_MODEL_NAME = QA;
  RR.SEMRESATTRS_FAAS_NAME = JA;
  RR.SEMRESATTRS_FAAS_ID = ZA;
  RR.SEMRESATTRS_FAAS_VERSION = sb;
  RR.SEMRESATTRS_FAAS_INSTANCE = ab;
  RR.SEMRESATTRS_FAAS_MAX_MEMORY = lb;
  RR.SEMRESATTRS_HOST_ID = ub;
  RR.SEMRESATTRS_HOST_NAME = db;
  RR.SEMRESATTRS_HOST_TYPE = pb;
  RR.SEMRESATTRS_HOST_ARCH = fb;
  RR.SEMRESATTRS_HOST_IMAGE_NAME = _b;
  RR.SEMRESATTRS_HOST_IMAGE_ID = gb;
  RR.SEMRESATTRS_HOST_IMAGE_VERSION = hb;
  RR.SEMRESATTRS_K8S_CLUSTER_NAME = Eb;
  RR.SEMRESATTRS_K8S_NODE_NAME = Sb;
  RR.SEMRESATTRS_K8S_NODE_UID = Tb;
  RR.SEMRESATTRS_K8S_NAMESPACE_NAME = Ab;
  RR.SEMRESATTRS_K8S_POD_UID = bb;
  RR.SEMRESATTRS_K8S_POD_NAME = Rb;
  RR.SEMRESATTRS_K8S_CONTAINER_NAME = Cb;
  RR.SEMRESATTRS_K8S_REPLICASET_UID = vb;
  RR.SEMRESATTRS_K8S_REPLICASET_NAME = Ob;
  RR.SEMRESATTRS_K8S_DEPLOYMENT_UID = kb;
  RR.SEMRESATTRS_K8S_DEPLOYMENT_NAME = wb;
  RR.SEMRESATTRS_K8S_STATEFULSET_UID = Pb;
  RR.SEMRESATTRS_K8S_STATEFULSET_NAME = Mb;
  RR.SEMRESATTRS_K8S_DAEMONSET_UID = Db;
  RR.SEMRESATTRS_K8S_DAEMONSET_NAME = Ib;
  RR.SEMRESATTRS_K8S_JOB_UID = Nb;
  RR.SEMRESATTRS_K8S_JOB_NAME = xb;
  RR.SEMRESATTRS_K8S_CRONJOB_UID = Lb;
  RR.SEMRESATTRS_K8S_CRONJOB_NAME = Ub;
  RR.SEMRESATTRS_OS_TYPE = zb;
  RR.SEMRESATTRS_OS_DESCRIPTION = Fb;
  RR.SEMRESATTRS_OS_NAME = Bb;
  RR.SEMRESATTRS_OS_VERSION = Hb;
  RR.SEMRESATTRS_PROCESS_PID = Vb;
  RR.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = Gb;
  RR.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = Kb;
  RR.SEMRESATTRS_PROCESS_COMMAND = jb;
  RR.SEMRESATTRS_PROCESS_COMMAND_LINE = Wb;
  RR.SEMRESATTRS_PROCESS_COMMAND_ARGS = Yb;
  RR.SEMRESATTRS_PROCESS_OWNER = $b;
  RR.SEMRESATTRS_PROCESS_RUNTIME_NAME = qb;
  RR.SEMRESATTRS_PROCESS_RUNTIME_VERSION = Xb;
  RR.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = Qb;
  RR.SEMRESATTRS_SERVICE_NAME = Jb;
  RR.SEMRESATTRS_SERVICE_NAMESPACE = Zb;
  RR.SEMRESATTRS_SERVICE_INSTANCE_ID = ey;
  RR.SEMRESATTRS_SERVICE_VERSION = ty;
  RR.SEMRESATTRS_TELEMETRY_SDK_NAME = ny;
  RR.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = ry;
  RR.SEMRESATTRS_TELEMETRY_SDK_VERSION = oy;
  RR.SEMRESATTRS_TELEMETRY_AUTO_VERSION = iy;
  RR.SEMRESATTRS_WEBENGINE_NAME = sy;
  RR.SEMRESATTRS_WEBENGINE_VERSION = ay;
  RR.SEMRESATTRS_WEBENGINE_DESCRIPTION = ly;
  RR.SemanticResourceAttributes = (0, Nn.createConstMap)([
    OA,
    kA,
    wA,
    PA,
    MA,
    DA,
    IA,
    NA,
    xA,
    LA,
    UA,
    zA,
    FA,
    BA,
    HA,
    VA,
    GA,
    KA,
    jA,
    WA,
    YA,
    $A,
    qA,
    XA,
    QA,
    JA,
    ZA,
    sb,
    ab,
    lb,
    ub,
    db,
    pb,
    fb,
    _b,
    gb,
    hb,
    Eb,
    Sb,
    Tb,
    Ab,
    bb,
    Rb,
    Cb,
    vb,
    Ob,
    kb,
    wb,
    Pb,
    Mb,
    Db,
    Ib,
    Nb,
    xb,
    Lb,
    Ub,
    zb,
    Fb,
    Bb,
    Hb,
    Vb,
    Gb,
    Kb,
    jb,
    Wb,
    Yb,
    $b,
    qb,
    Xb,
    Qb,
    Jb,
    Zb,
    ey,
    ty,
    ny,
    ry,
    oy,
    iy,
    sy,
    ay,
    ly,
  ]);
  var cy = "alibaba_cloud",
    fy = "aws",
    _y = "azure",
    my = "gcp";
  RR.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = cy;
  RR.CLOUDPROVIDERVALUES_AWS = fy;
  RR.CLOUDPROVIDERVALUES_AZURE = _y;
  RR.CLOUDPROVIDERVALUES_GCP = my;
  RR.CloudProviderValues = (0, Nn.createConstMap)([cy, fy, _y, my]);
  var gy = "alibaba_cloud_ecs",
    hy = "alibaba_cloud_fc",
    Sy = "aws_ec2",
    Ty = "aws_ecs",
    Ay = "aws_eks",
    by = "aws_lambda",
    yy = "aws_elastic_beanstalk",
    Cy = "azure_vm",
    vy = "azure_container_instances",
    Oy = "azure_aks",
    ky = "azure_functions",
    wy = "azure_app_service",
    Py = "gcp_compute_engine",
    My = "gcp_cloud_run",
    Dy = "gcp_kubernetes_engine",
    Iy = "gcp_cloud_functions",
    Ny = "gcp_app_engine";
  RR.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = gy;
  RR.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = hy;
  RR.CLOUDPLATFORMVALUES_AWS_EC2 = Sy;
  RR.CLOUDPLATFORMVALUES_AWS_ECS = Ty;
  RR.CLOUDPLATFORMVALUES_AWS_EKS = Ay;
  RR.CLOUDPLATFORMVALUES_AWS_LAMBDA = by;
  RR.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = yy;
  RR.CLOUDPLATFORMVALUES_AZURE_VM = Cy;
  RR.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = vy;
  RR.CLOUDPLATFORMVALUES_AZURE_AKS = Oy;
  RR.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = ky;
  RR.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = wy;
  RR.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = Py;
  RR.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = My;
  RR.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = Dy;
  RR.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = Iy;
  RR.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = Ny;
  RR.CloudPlatformValues = (0, Nn.createConstMap)([gy, hy, Sy, Ty, Ay, by, yy, Cy, vy, Oy, ky, wy, Py, My, Dy, Iy, Ny]);
  var xy = "ec2",
    Ly = "fargate";
  RR.AWSECSLAUNCHTYPEVALUES_EC2 = xy;
  RR.AWSECSLAUNCHTYPEVALUES_FARGATE = Ly;
  RR.AwsEcsLaunchtypeValues = (0, Nn.createConstMap)([xy, Ly]);
  var Uy = "amd64",
    zy = "arm32",
    Fy = "arm64",
    By = "ia64",
    Hy = "ppc32",
    Vy = "ppc64",
    Gy = "x86";
  RR.HOSTARCHVALUES_AMD64 = Uy;
  RR.HOSTARCHVALUES_ARM32 = zy;
  RR.HOSTARCHVALUES_ARM64 = Fy;
  RR.HOSTARCHVALUES_IA64 = By;
  RR.HOSTARCHVALUES_PPC32 = Hy;
  RR.HOSTARCHVALUES_PPC64 = Vy;
  RR.HOSTARCHVALUES_X86 = Gy;
  RR.HostArchValues = (0, Nn.createConstMap)([Uy, zy, Fy, By, Hy, Vy, Gy]);
  var Ky = "windows",
    jy = "linux",
    Wy = "darwin",
    Yy = "freebsd",
    $y = "netbsd",
    qy = "openbsd",
    Xy = "dragonflybsd",
    Qy = "hpux",
    Jy = "aix",
    eR = "solaris",
    tR = "z_os";
  RR.OSTYPEVALUES_WINDOWS = Ky;
  RR.OSTYPEVALUES_LINUX = jy;
  RR.OSTYPEVALUES_DARWIN = Wy;
  RR.OSTYPEVALUES_FREEBSD = Yy;
  RR.OSTYPEVALUES_NETBSD = $y;
  RR.OSTYPEVALUES_OPENBSD = qy;
  RR.OSTYPEVALUES_DRAGONFLYBSD = Xy;
  RR.OSTYPEVALUES_HPUX = Qy;
  RR.OSTYPEVALUES_AIX = Jy;
  RR.OSTYPEVALUES_SOLARIS = eR;
  RR.OSTYPEVALUES_Z_OS = tR;
  RR.OsTypeValues = (0, Nn.createConstMap)([Ky, jy, Wy, Yy, $y, qy, Xy, Qy, Jy, eR, tR]);
  var nR = "cpp",
    fR = "dotnet",
    mR = "erlang",
    gR = "go",
    hR = "java",
    ER = "nodejs",
    SR = "php",
    TR = "python",
    AR = "ruby",
    yR = "webjs";
  RR.TELEMETRYSDKLANGUAGEVALUES_CPP = nR;
  RR.TELEMETRYSDKLANGUAGEVALUES_DOTNET = fR;
  RR.TELEMETRYSDKLANGUAGEVALUES_ERLANG = mR;
  RR.TELEMETRYSDKLANGUAGEVALUES_GO = gR;
  RR.TELEMETRYSDKLANGUAGEVALUES_JAVA = hR;
  RR.TELEMETRYSDKLANGUAGEVALUES_NODEJS = ER;
  RR.TELEMETRYSDKLANGUAGEVALUES_PHP = SR;
  RR.TELEMETRYSDKLANGUAGEVALUES_PYTHON = TR;
  RR.TELEMETRYSDKLANGUAGEVALUES_RUBY = AR;
  RR.TELEMETRYSDKLANGUAGEVALUES_WEBJS = yR;
  RR.TelemetrySdkLanguageValues = (0, Nn.createConstMap)([nR, fR, mR, gR, hR, ER, SR, TR, AR, yR]);
});

var MR = S(function (xn) {
  var tK =
      (xn && xn.__createBinding) ||
      (Object.create
        ? function (e, t, r, o) {
            if (o === void 0) o = r;
            var u = Object.getOwnPropertyDescriptor(t, r);
            if (!u || ("get" in u ? !t.__esModule : u.writable || u.configurable))
              u = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, o, u);
          }
        : function (e, t, r, o) {
            if (o === void 0) o = r;
            e[o] = t[r];
          }),
    nK =
      (xn && xn.__exportStar) ||
      function (e, t) {
        for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) tK(t, e, r);
      };
  Object.defineProperty(xn, "__esModule", { value: !0 });
  nK(PR(), xn);
});

var zR = S(function (DR) {
  Object.defineProperty(DR, "__esModule", { value: !0 });
  DR.ATTR_EXCEPTION_TYPE =
    DR.ATTR_EXCEPTION_STACKTRACE =
    DR.ATTR_EXCEPTION_MESSAGE =
    DR.ATTR_EXCEPTION_ESCAPED =
    DR.ERROR_TYPE_VALUE_OTHER =
    DR.ATTR_ERROR_TYPE =
    DR.DOTNET_GC_HEAP_GENERATION_VALUE_POH =
    DR.DOTNET_GC_HEAP_GENERATION_VALUE_LOH =
    DR.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 =
    DR.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 =
    DR.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 =
    DR.ATTR_DOTNET_GC_HEAP_GENERATION =
    DR.DB_SYSTEM_NAME_VALUE_POSTGRESQL =
    DR.DB_SYSTEM_NAME_VALUE_MYSQL =
    DR.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER =
    DR.DB_SYSTEM_NAME_VALUE_MARIADB =
    DR.ATTR_DB_SYSTEM_NAME =
    DR.ATTR_DB_STORED_PROCEDURE_NAME =
    DR.ATTR_DB_RESPONSE_STATUS_CODE =
    DR.ATTR_DB_QUERY_TEXT =
    DR.ATTR_DB_QUERY_SUMMARY =
    DR.ATTR_DB_OPERATION_NAME =
    DR.ATTR_DB_OPERATION_BATCH_SIZE =
    DR.ATTR_DB_NAMESPACE =
    DR.ATTR_DB_COLLECTION_NAME =
    DR.ATTR_CODE_STACKTRACE =
    DR.ATTR_CODE_LINE_NUMBER =
    DR.ATTR_CODE_FUNCTION_NAME =
    DR.ATTR_CODE_FILE_PATH =
    DR.ATTR_CODE_COLUMN_NUMBER =
    DR.ATTR_CLIENT_PORT =
    DR.ATTR_CLIENT_ADDRESS =
    DR.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED =
    DR.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS =
    DR.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE =
    DR.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS =
    DR.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK =
    DR.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED =
    DR.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED =
    DR.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER =
    DR.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER =
    DR.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED =
    DR.ATTR_ASPNETCORE_RATE_LIMITING_RESULT =
    DR.ATTR_ASPNETCORE_RATE_LIMITING_POLICY =
    DR.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE =
    DR.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED =
    DR.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED =
    DR.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED =
    DR.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED =
    DR.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT =
      void 0;
  DR.OTEL_STATUS_CODE_VALUE_ERROR =
    DR.ATTR_OTEL_STATUS_CODE =
    DR.ATTR_OTEL_SCOPE_VERSION =
    DR.ATTR_OTEL_SCOPE_NAME =
    DR.NETWORK_TYPE_VALUE_IPV6 =
    DR.NETWORK_TYPE_VALUE_IPV4 =
    DR.ATTR_NETWORK_TYPE =
    DR.NETWORK_TRANSPORT_VALUE_UNIX =
    DR.NETWORK_TRANSPORT_VALUE_UDP =
    DR.NETWORK_TRANSPORT_VALUE_TCP =
    DR.NETWORK_TRANSPORT_VALUE_QUIC =
    DR.NETWORK_TRANSPORT_VALUE_PIPE =
    DR.ATTR_NETWORK_TRANSPORT =
    DR.ATTR_NETWORK_PROTOCOL_VERSION =
    DR.ATTR_NETWORK_PROTOCOL_NAME =
    DR.ATTR_NETWORK_PEER_PORT =
    DR.ATTR_NETWORK_PEER_ADDRESS =
    DR.ATTR_NETWORK_LOCAL_PORT =
    DR.ATTR_NETWORK_LOCAL_ADDRESS =
    DR.JVM_THREAD_STATE_VALUE_WAITING =
    DR.JVM_THREAD_STATE_VALUE_TIMED_WAITING =
    DR.JVM_THREAD_STATE_VALUE_TERMINATED =
    DR.JVM_THREAD_STATE_VALUE_RUNNABLE =
    DR.JVM_THREAD_STATE_VALUE_NEW =
    DR.JVM_THREAD_STATE_VALUE_BLOCKED =
    DR.ATTR_JVM_THREAD_STATE =
    DR.ATTR_JVM_THREAD_DAEMON =
    DR.JVM_MEMORY_TYPE_VALUE_NON_HEAP =
    DR.JVM_MEMORY_TYPE_VALUE_HEAP =
    DR.ATTR_JVM_MEMORY_TYPE =
    DR.ATTR_JVM_MEMORY_POOL_NAME =
    DR.ATTR_JVM_GC_NAME =
    DR.ATTR_JVM_GC_ACTION =
    DR.ATTR_HTTP_ROUTE =
    DR.ATTR_HTTP_RESPONSE_STATUS_CODE =
    DR.ATTR_HTTP_RESPONSE_HEADER =
    DR.ATTR_HTTP_REQUEST_RESEND_COUNT =
    DR.ATTR_HTTP_REQUEST_METHOD_ORIGINAL =
    DR.HTTP_REQUEST_METHOD_VALUE_TRACE =
    DR.HTTP_REQUEST_METHOD_VALUE_PUT =
    DR.HTTP_REQUEST_METHOD_VALUE_POST =
    DR.HTTP_REQUEST_METHOD_VALUE_PATCH =
    DR.HTTP_REQUEST_METHOD_VALUE_OPTIONS =
    DR.HTTP_REQUEST_METHOD_VALUE_HEAD =
    DR.HTTP_REQUEST_METHOD_VALUE_GET =
    DR.HTTP_REQUEST_METHOD_VALUE_DELETE =
    DR.HTTP_REQUEST_METHOD_VALUE_CONNECT =
    DR.HTTP_REQUEST_METHOD_VALUE_OTHER =
    DR.ATTR_HTTP_REQUEST_METHOD =
    DR.ATTR_HTTP_REQUEST_HEADER =
      void 0;
  DR.ATTR_USER_AGENT_ORIGINAL =
    DR.ATTR_URL_SCHEME =
    DR.ATTR_URL_QUERY =
    DR.ATTR_URL_PATH =
    DR.ATTR_URL_FULL =
    DR.ATTR_URL_FRAGMENT =
    DR.ATTR_TELEMETRY_SDK_VERSION =
    DR.ATTR_TELEMETRY_SDK_NAME =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_RUST =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_PHP =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_GO =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET =
    DR.TELEMETRY_SDK_LANGUAGE_VALUE_CPP =
    DR.ATTR_TELEMETRY_SDK_LANGUAGE =
    DR.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS =
    DR.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS =
    DR.SIGNALR_TRANSPORT_VALUE_LONG_POLLING =
    DR.ATTR_SIGNALR_TRANSPORT =
    DR.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT =
    DR.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE =
    DR.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN =
    DR.ATTR_SIGNALR_CONNECTION_STATUS =
    DR.ATTR_SERVICE_VERSION =
    DR.ATTR_SERVICE_NAME =
    DR.ATTR_SERVER_PORT =
    DR.ATTR_SERVER_ADDRESS =
    DR.ATTR_OTEL_STATUS_DESCRIPTION =
    DR.OTEL_STATUS_CODE_VALUE_OK =
      void 0;
  DR.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = "aspnetcore.diagnostics.exception.result";
  DR.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
  DR.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
  DR.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
  DR.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
  DR.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = "aspnetcore.diagnostics.handler.type";
  DR.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = "aspnetcore.rate_limiting.policy";
  DR.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = "aspnetcore.rate_limiting.result";
  DR.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
  DR.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
  DR.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
  DR.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
  DR.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = "aspnetcore.request.is_unhandled";
  DR.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = "aspnetcore.routing.is_fallback";
  DR.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = "aspnetcore.routing.match_status";
  DR.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
  DR.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
  DR.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = "aspnetcore.user.is_authenticated";
  DR.ATTR_CLIENT_ADDRESS = "client.address";
  DR.ATTR_CLIENT_PORT = "client.port";
  DR.ATTR_CODE_COLUMN_NUMBER = "code.column.number";
  DR.ATTR_CODE_FILE_PATH = "code.file.path";
  DR.ATTR_CODE_FUNCTION_NAME = "code.function.name";
  DR.ATTR_CODE_LINE_NUMBER = "code.line.number";
  DR.ATTR_CODE_STACKTRACE = "code.stacktrace";
  DR.ATTR_DB_COLLECTION_NAME = "db.collection.name";
  DR.ATTR_DB_NAMESPACE = "db.namespace";
  DR.ATTR_DB_OPERATION_BATCH_SIZE = "db.operation.batch.size";
  DR.ATTR_DB_OPERATION_NAME = "db.operation.name";
  DR.ATTR_DB_QUERY_SUMMARY = "db.query.summary";
  DR.ATTR_DB_QUERY_TEXT = "db.query.text";
  DR.ATTR_DB_RESPONSE_STATUS_CODE = "db.response.status_code";
  DR.ATTR_DB_STORED_PROCEDURE_NAME = "db.stored_procedure.name";
  DR.ATTR_DB_SYSTEM_NAME = "db.system.name";
  DR.DB_SYSTEM_NAME_VALUE_MARIADB = "mariadb";
  DR.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = "microsoft.sql_server";
  DR.DB_SYSTEM_NAME_VALUE_MYSQL = "mysql";
  DR.DB_SYSTEM_NAME_VALUE_POSTGRESQL = "postgresql";
  DR.ATTR_DOTNET_GC_HEAP_GENERATION = "dotnet.gc.heap.generation";
  DR.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = "gen0";
  DR.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = "gen1";
  DR.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = "gen2";
  DR.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = "loh";
  DR.DOTNET_GC_HEAP_GENERATION_VALUE_POH = "poh";
  DR.ATTR_ERROR_TYPE = "error.type";
  DR.ERROR_TYPE_VALUE_OTHER = "_OTHER";
  DR.ATTR_EXCEPTION_ESCAPED = "exception.escaped";
  DR.ATTR_EXCEPTION_MESSAGE = "exception.message";
  DR.ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
  DR.ATTR_EXCEPTION_TYPE = "exception.type";
  var rK = (e) => `http.request.header.${e}`;
  DR.ATTR_HTTP_REQUEST_HEADER = rK;
  DR.ATTR_HTTP_REQUEST_METHOD = "http.request.method";
  DR.HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
  DR.HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
  DR.HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
  DR.HTTP_REQUEST_METHOD_VALUE_GET = "GET";
  DR.HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
  DR.HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
  DR.HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
  DR.HTTP_REQUEST_METHOD_VALUE_POST = "POST";
  DR.HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
  DR.HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
  DR.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = "http.request.method_original";
  DR.ATTR_HTTP_REQUEST_RESEND_COUNT = "http.request.resend_count";
  var iK = (e) => `http.response.header.${e}`;
  DR.ATTR_HTTP_RESPONSE_HEADER = iK;
  DR.ATTR_HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
  DR.ATTR_HTTP_ROUTE = "http.route";
  DR.ATTR_JVM_GC_ACTION = "jvm.gc.action";
  DR.ATTR_JVM_GC_NAME = "jvm.gc.name";
  DR.ATTR_JVM_MEMORY_POOL_NAME = "jvm.memory.pool.name";
  DR.ATTR_JVM_MEMORY_TYPE = "jvm.memory.type";
  DR.JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
  DR.JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
  DR.ATTR_JVM_THREAD_DAEMON = "jvm.thread.daemon";
  DR.ATTR_JVM_THREAD_STATE = "jvm.thread.state";
  DR.JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
  DR.JVM_THREAD_STATE_VALUE_NEW = "new";
  DR.JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
  DR.JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
  DR.JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
  DR.JVM_THREAD_STATE_VALUE_WAITING = "waiting";
  DR.ATTR_NETWORK_LOCAL_ADDRESS = "network.local.address";
  DR.ATTR_NETWORK_LOCAL_PORT = "network.local.port";
  DR.ATTR_NETWORK_PEER_ADDRESS = "network.peer.address";
  DR.ATTR_NETWORK_PEER_PORT = "network.peer.port";
  DR.ATTR_NETWORK_PROTOCOL_NAME = "network.protocol.name";
  DR.ATTR_NETWORK_PROTOCOL_VERSION = "network.protocol.version";
  DR.ATTR_NETWORK_TRANSPORT = "network.transport";
  DR.NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
  DR.NETWORK_TRANSPORT_VALUE_QUIC = "quic";
  DR.NETWORK_TRANSPORT_VALUE_TCP = "tcp";
  DR.NETWORK_TRANSPORT_VALUE_UDP = "udp";
  DR.NETWORK_TRANSPORT_VALUE_UNIX = "unix";
  DR.ATTR_NETWORK_TYPE = "network.type";
  DR.NETWORK_TYPE_VALUE_IPV4 = "ipv4";
  DR.NETWORK_TYPE_VALUE_IPV6 = "ipv6";
  DR.ATTR_OTEL_SCOPE_NAME = "otel.scope.name";
  DR.ATTR_OTEL_SCOPE_VERSION = "otel.scope.version";
  DR.ATTR_OTEL_STATUS_CODE = "otel.status_code";
  DR.OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
  DR.OTEL_STATUS_CODE_VALUE_OK = "OK";
  DR.ATTR_OTEL_STATUS_DESCRIPTION = "otel.status_description";
  DR.ATTR_SERVER_ADDRESS = "server.address";
  DR.ATTR_SERVER_PORT = "server.port";
  DR.ATTR_SERVICE_NAME = "service.name";
  DR.ATTR_SERVICE_VERSION = "service.version";
  DR.ATTR_SIGNALR_CONNECTION_STATUS = "signalr.connection.status";
  DR.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
  DR.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
  DR.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
  DR.ATTR_SIGNALR_TRANSPORT = "signalr.transport";
  DR.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
  DR.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
  DR.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
  DR.ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
  DR.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
  DR.ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
  DR.ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
  DR.ATTR_URL_FRAGMENT = "url.fragment";
  DR.ATTR_URL_FULL = "url.full";
  DR.ATTR_URL_PATH = "url.path";
  DR.ATTR_URL_QUERY = "url.query";
  DR.ATTR_URL_SCHEME = "url.scheme";
  DR.ATTR_USER_AGENT_ORIGINAL = "user_agent.original";
});

var VR = S(function (FR) {
  Object.defineProperty(FR, "__esModule", { value: !0 });
  FR.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS =
    FR.METRIC_KESTREL_UPGRADED_CONNECTIONS =
    FR.METRIC_KESTREL_TLS_HANDSHAKE_DURATION =
    FR.METRIC_KESTREL_REJECTED_CONNECTIONS =
    FR.METRIC_KESTREL_QUEUED_REQUESTS =
    FR.METRIC_KESTREL_QUEUED_CONNECTIONS =
    FR.METRIC_KESTREL_CONNECTION_DURATION =
    FR.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES =
    FR.METRIC_KESTREL_ACTIVE_CONNECTIONS =
    FR.METRIC_JVM_THREAD_COUNT =
    FR.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC =
    FR.METRIC_JVM_MEMORY_USED =
    FR.METRIC_JVM_MEMORY_LIMIT =
    FR.METRIC_JVM_MEMORY_COMMITTED =
    FR.METRIC_JVM_GC_DURATION =
    FR.METRIC_JVM_CPU_TIME =
    FR.METRIC_JVM_CPU_RECENT_UTILIZATION =
    FR.METRIC_JVM_CPU_COUNT =
    FR.METRIC_JVM_CLASS_UNLOADED =
    FR.METRIC_JVM_CLASS_LOADED =
    FR.METRIC_JVM_CLASS_COUNT =
    FR.METRIC_HTTP_SERVER_REQUEST_DURATION =
    FR.METRIC_HTTP_CLIENT_REQUEST_DURATION =
    FR.METRIC_DOTNET_TIMER_COUNT =
    FR.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT =
    FR.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT =
    FR.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH =
    FR.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET =
    FR.METRIC_DOTNET_PROCESS_CPU_TIME =
    FR.METRIC_DOTNET_PROCESS_CPU_COUNT =
    FR.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS =
    FR.METRIC_DOTNET_JIT_COMPILED_METHODS =
    FR.METRIC_DOTNET_JIT_COMPILED_IL_SIZE =
    FR.METRIC_DOTNET_JIT_COMPILATION_TIME =
    FR.METRIC_DOTNET_GC_PAUSE_TIME =
    FR.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE =
    FR.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE =
    FR.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE =
    FR.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED =
    FR.METRIC_DOTNET_GC_COLLECTIONS =
    FR.METRIC_DOTNET_EXCEPTIONS =
    FR.METRIC_DOTNET_ASSEMBLY_COUNT =
    FR.METRIC_DB_CLIENT_OPERATION_DURATION =
    FR.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS =
    FR.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS =
    FR.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION =
    FR.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE =
    FR.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS =
    FR.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES =
    FR.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS =
      void 0;
  FR.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = void 0;
  FR.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = "aspnetcore.diagnostics.exceptions";
  FR.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = "aspnetcore.rate_limiting.active_request_leases";
  FR.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = "aspnetcore.rate_limiting.queued_requests";
  FR.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = "aspnetcore.rate_limiting.request.time_in_queue";
  FR.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = "aspnetcore.rate_limiting.request_lease.duration";
  FR.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = "aspnetcore.rate_limiting.requests";
  FR.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = "aspnetcore.routing.match_attempts";
  FR.METRIC_DB_CLIENT_OPERATION_DURATION = "db.client.operation.duration";
  FR.METRIC_DOTNET_ASSEMBLY_COUNT = "dotnet.assembly.count";
  FR.METRIC_DOTNET_EXCEPTIONS = "dotnet.exceptions";
  FR.METRIC_DOTNET_GC_COLLECTIONS = "dotnet.gc.collections";
  FR.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = "dotnet.gc.heap.total_allocated";
  FR.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = "dotnet.gc.last_collection.heap.fragmentation.size";
  FR.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = "dotnet.gc.last_collection.heap.size";
  FR.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = "dotnet.gc.last_collection.memory.committed_size";
  FR.METRIC_DOTNET_GC_PAUSE_TIME = "dotnet.gc.pause.time";
  FR.METRIC_DOTNET_JIT_COMPILATION_TIME = "dotnet.jit.compilation.time";
  FR.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = "dotnet.jit.compiled_il.size";
  FR.METRIC_DOTNET_JIT_COMPILED_METHODS = "dotnet.jit.compiled_methods";
  FR.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = "dotnet.monitor.lock_contentions";
  FR.METRIC_DOTNET_PROCESS_CPU_COUNT = "dotnet.process.cpu.count";
  FR.METRIC_DOTNET_PROCESS_CPU_TIME = "dotnet.process.cpu.time";
  FR.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = "dotnet.process.memory.working_set";
  FR.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = "dotnet.thread_pool.queue.length";
  FR.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = "dotnet.thread_pool.thread.count";
  FR.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = "dotnet.thread_pool.work_item.count";
  FR.METRIC_DOTNET_TIMER_COUNT = "dotnet.timer.count";
  FR.METRIC_HTTP_CLIENT_REQUEST_DURATION = "http.client.request.duration";
  FR.METRIC_HTTP_SERVER_REQUEST_DURATION = "http.server.request.duration";
  FR.METRIC_JVM_CLASS_COUNT = "jvm.class.count";
  FR.METRIC_JVM_CLASS_LOADED = "jvm.class.loaded";
  FR.METRIC_JVM_CLASS_UNLOADED = "jvm.class.unloaded";
  FR.METRIC_JVM_CPU_COUNT = "jvm.cpu.count";
  FR.METRIC_JVM_CPU_RECENT_UTILIZATION = "jvm.cpu.recent_utilization";
  FR.METRIC_JVM_CPU_TIME = "jvm.cpu.time";
  FR.METRIC_JVM_GC_DURATION = "jvm.gc.duration";
  FR.METRIC_JVM_MEMORY_COMMITTED = "jvm.memory.committed";
  FR.METRIC_JVM_MEMORY_LIMIT = "jvm.memory.limit";
  FR.METRIC_JVM_MEMORY_USED = "jvm.memory.used";
  FR.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = "jvm.memory.used_after_last_gc";
  FR.METRIC_JVM_THREAD_COUNT = "jvm.thread.count";
  FR.METRIC_KESTREL_ACTIVE_CONNECTIONS = "kestrel.active_connections";
  FR.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = "kestrel.active_tls_handshakes";
  FR.METRIC_KESTREL_CONNECTION_DURATION = "kestrel.connection.duration";
  FR.METRIC_KESTREL_QUEUED_CONNECTIONS = "kestrel.queued_connections";
  FR.METRIC_KESTREL_QUEUED_REQUESTS = "kestrel.queued_requests";
  FR.METRIC_KESTREL_REJECTED_CONNECTIONS = "kestrel.rejected_connections";
  FR.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = "kestrel.tls_handshake.duration";
  FR.METRIC_KESTREL_UPGRADED_CONNECTIONS = "kestrel.upgraded_connections";
  FR.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = "signalr.server.active_connections";
  FR.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = "signalr.server.connection.duration";
});

var jR = S(function (GR) {
  Object.defineProperty(GR, "__esModule", { value: !0 });
  GR.EVENT_EXCEPTION = void 0;
  GR.EVENT_EXCEPTION = "exception";
});

var Fde = S(function (yt) {
  var w1 =
      (yt && yt.__createBinding) ||
      (Object.create
        ? function (e, t, r, o) {
            if (o === void 0) o = r;
            var u = Object.getOwnPropertyDescriptor(t, r);
            if (!u || ("get" in u ? !t.__esModule : u.writable || u.configurable))
              u = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, o, u);
          }
        : function (e, t, r, o) {
            if (o === void 0) o = r;
            e[o] = t[r];
          }),
    to =
      (yt && yt.__exportStar) ||
      function (e, t) {
        for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) w1(t, e, r);
      };
  Object.defineProperty(yt, "__esModule", { value: !0 });
  to(vA(), yt);
  to(MR(), yt);
  to(zR(), yt);
  to(VR(), yt);
  to(jR(), yt);
});

var $R = S(function (WR) {
  Object.defineProperty(WR, "__esModule", { value: !0 });
  WR.ATTR_PROCESS_RUNTIME_NAME = void 0;
  WR.ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
});

var QR = S(function (qR) {
  Object.defineProperty(qR, "__esModule", { value: !0 });
  qR.SDK_INFO = void 0;
  var P1 = mm(),
    Ii = Fde(),
    M1 = $R();
  qR.SDK_INFO = {
    [Ii.ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
    [M1.ATTR_PROCESS_RUNTIME_NAME]: "node",
    [Ii.ATTR_TELEMETRY_SDK_LANGUAGE]: Ii.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
    [Ii.ATTR_TELEMETRY_SDK_VERSION]: P1.VERSION,
  };
});

var ZR = S(function (Sn) {
  Object.defineProperty(Sn, "__esModule", { value: !0 });
  Sn.otperformance =
    Sn.SDK_INFO =
    Sn._globalThis =
    Sn.getStringListFromEnv =
    Sn.getNumberFromEnv =
    Sn.getBooleanFromEnv =
    Sn.getStringFromEnv =
      void 0;
  var Ni = lm();
  Object.defineProperty(Sn, "getStringFromEnv", {
    enumerable: !0,
    get: function () {
      return Ni.getStringFromEnv;
    },
  });
  Object.defineProperty(Sn, "getBooleanFromEnv", {
    enumerable: !0,
    get: function () {
      return Ni.getBooleanFromEnv;
    },
  });
  Object.defineProperty(Sn, "getNumberFromEnv", {
    enumerable: !0,
    get: function () {
      return Ni.getNumberFromEnv;
    },
  });
  Object.defineProperty(Sn, "getStringListFromEnv", {
    enumerable: !0,
    get: function () {
      return Ni.getStringListFromEnv;
    },
  });
  var D1 = dm();
  Object.defineProperty(Sn, "_globalThis", {
    enumerable: !0,
    get: function () {
      return D1._globalThis;
    },
  });
  var I1 = QR();
  Object.defineProperty(Sn, "SDK_INFO", {
    enumerable: !0,
    get: function () {
      return I1.SDK_INFO;
    },
  });
  Sn.otperformance = performance;
});

var uc = S(function (Wt) {
  Object.defineProperty(Wt, "__esModule", { value: !0 });
  Wt.getStringListFromEnv =
    Wt.getNumberFromEnv =
    Wt.getStringFromEnv =
    Wt.getBooleanFromEnv =
    Wt.otperformance =
    Wt._globalThis =
    Wt.SDK_INFO =
      void 0;
  var Ln = ZR();
  Object.defineProperty(Wt, "SDK_INFO", {
    enumerable: !0,
    get: function () {
      return Ln.SDK_INFO;
    },
  });
  Object.defineProperty(Wt, "_globalThis", {
    enumerable: !0,
    get: function () {
      return Ln._globalThis;
    },
  });
  Object.defineProperty(Wt, "otperformance", {
    enumerable: !0,
    get: function () {
      return Ln.otperformance;
    },
  });
  Object.defineProperty(Wt, "getBooleanFromEnv", {
    enumerable: !0,
    get: function () {
      return Ln.getBooleanFromEnv;
    },
  });
  Object.defineProperty(Wt, "getStringFromEnv", {
    enumerable: !0,
    get: function () {
      return Ln.getStringFromEnv;
    },
  });
  Object.defineProperty(Wt, "getNumberFromEnv", {
    enumerable: !0,
    get: function () {
      return Ln.getNumberFromEnv;
    },
  });
  Object.defineProperty(Wt, "getStringListFromEnv", {
    enumerable: !0,
    get: function () {
      return Ln.getStringListFromEnv;
    },
  });
});

var iC = S(function (rC) {
  Object.defineProperty(rC, "__esModule", { value: !0 });
  rC.addHrTimes =
    rC.isTimeInput =
    rC.isTimeInputHrTime =
    rC.hrTimeToMicroseconds =
    rC.hrTimeToMilliseconds =
    rC.hrTimeToNanoseconds =
    rC.hrTimeToTimeStamp =
    rC.hrTimeDuration =
    rC.timeInputToHrTime =
    rC.hrTime =
    rC.getTimeOrigin =
    rC.millisToHrTime =
      void 0;
  var Ui = uc(),
    eC = 9,
    x1 = 6,
    L1 = Math.pow(10, x1),
    zi = Math.pow(10, eC);
  function no(e) {
    let t = e / 1000,
      r = Math.trunc(t),
      o = Math.round((e % 1000) * L1);
    return [r, o];
  }
  rC.millisToHrTime = no;
  function U1() {
    return Ui.otperformance.timeOrigin;
  }
  rC.getTimeOrigin = U1;
  function tC(e) {
    let t = no(Ui.otperformance.timeOrigin),
      r = no(typeof e === "number" ? e : Ui.otperformance.now());
    return nC(t, r);
  }
  rC.hrTime = tC;
  function z1(e) {
    if (dc(e)) return e;
    else if (typeof e === "number")
      if (e < Ui.otperformance.timeOrigin) return tC(e);
      else return no(e);
    else if (e instanceof Date) return no(e.getTime());
    else throw TypeError("Invalid input type");
  }
  rC.timeInputToHrTime = z1;
  function F1(e, t) {
    let r = t[0] - e[0],
      o = t[1] - e[1];
    if (o < 0) (r -= 1), (o += zi);
    return [r, o];
  }
  rC.hrTimeDuration = F1;
  function B1(e) {
    let t = eC,
      r = `${"0".repeat(t)}${e[1]}Z`,
      o = r.substring(r.length - t - 1);
    return new Date(e[0] * 1000).toISOString().replace("000Z", o);
  }
  rC.hrTimeToTimeStamp = B1;
  function H1(e) {
    return e[0] * zi + e[1];
  }
  rC.hrTimeToNanoseconds = H1;
  function V1(e) {
    return e[0] * 1000 + e[1] / 1e6;
  }
  rC.hrTimeToMilliseconds = V1;
  function G1(e) {
    return e[0] * 1e6 + e[1] / 1000;
  }
  rC.hrTimeToMicroseconds = G1;
  function dc(e) {
    return Array.isArray(e) && e.length === 2 && typeof e[0] === "number" && typeof e[1] === "number";
  }
  rC.isTimeInputHrTime = dc;
  function K1(e) {
    return dc(e) || typeof e === "number" || e instanceof Date;
  }
  rC.isTimeInput = K1;
  function nC(e, t) {
    let r = [e[0] + t[0], e[1] + t[1]];
    if (r[1] >= zi) (r[1] -= zi), (r[0] += 1);
    return r;
  }
  rC.addHrTimes = nC;
});

var lC = S(function (sC) {
  Object.defineProperty(sC, "__esModule", { value: !0 });
  sC.unrefTimer = void 0;
  function nY(e) {
    if (typeof e !== "number") e.unref();
  }
  sC.unrefTimer = nY;
});

var uC = S(function (cC) {
  Object.defineProperty(cC, "__esModule", { value: !0 });
  cC.ExportResultCode = void 0;
  var rY;
  (function (e) {
    (e[(e.SUCCESS = 0)] = "SUCCESS"), (e[(e.FAILED = 1)] = "FAILED");
  })((rY = cC.ExportResultCode || (cC.ExportResultCode = {})));
});

var gC = S(function (fC) {
  Object.defineProperty(fC, "__esModule", { value: !0 });
  fC.CompositePropagator = void 0;
  var dC = Li();
  class pC {
    _propagators;
    _fields;
    constructor(e = {}) {
      this._propagators = e.propagators ?? [];
      let t = new Set();
      for (let r of this._propagators) {
        let o = typeof r.fields === "function" ? r.fields() : [];
        for (let u of o) t.add(u);
      }
      this._fields = Array.from(t);
    }
    inject(e, t, r) {
      for (let o of this._propagators)
        try {
          o.inject(e, t, r);
        } catch (u) {
          dC.diag.warn(`Failed to inject with ${o.constructor.name}. Err: ${u.message}`);
        }
    }
    extract(e, t, r) {
      return this._propagators.reduce((o, u) => {
        try {
          return u.extract(o, t, r);
        } catch (d) {
          dC.diag.warn(`Failed to extract with ${u.constructor.name}. Err: ${d.message}`);
        }
        return o;
      }, e);
    }
    fields() {
      return this._fields.slice();
    }
  }
  fC.CompositePropagator = pC;
});

var OC = S(function (hC) {
  Object.defineProperty(hC, "__esModule", { value: !0 });
  hC.validateValue = hC.validateKey = void 0;
  var _c = "[_0-9a-z-*/]",
    oY = `[a-z]${_c}{0,255}`,
    iY = `[a-z0-9]${_c}{0,240}@[a-z]${_c}{0,13}`,
    sY = new RegExp(`^(?:${oY}|${iY})$`),
    aY = /^[ -~]{0,255}[!-~]$/,
    lY = /,|=/;
  function cY(e) {
    return sY.test(e);
  }
  hC.validateKey = cY;
  function uY(e) {
    return aY.test(e) && !lY.test(e);
  }
  hC.validateValue = uY;
});

var hc = S(function (NC) {
  Object.defineProperty(NC, "__esModule", { value: !0 });
  NC.TraceState = void 0;
  var Fi = OC(),
    pY = 32,
    kC = 512,
    PC = ",",
    MC = "=";
  class gc {
    _length;
    _rawTraceState;
    _internalState;
    constructor(e) {
      (this._rawTraceState = typeof e === "string" ? e : ""), (this._length = this._rawTraceState.length);
    }
    set(e, t) {
      if (!(0, Fi.validateKey)(e) || !(0, Fi.validateValue)(t)) return this;
      let r = this._getState(),
        o = r.get(e),
        u = this._length;
      if (typeof o === "string") u += t.length - o.length;
      else u += e.length + t.length + (r.size > 0 ? 2 : 1);
      if (u > kC) return this;
      let d = new Map(r);
      return d.delete(e), d.set(e, t), this._fromState(d, u);
    }
    unset(e) {
      let t = this._getState(),
        r = t.get(e);
      if (typeof r !== "string") return this;
      let o = this._length - (e.length + r.length + 1);
      if (t.size > 1) o = o - 1;
      let u = new Map(t);
      return u.delete(e), this._fromState(u, o);
    }
    get(e) {
      return this._getState().get(e);
    }
    serialize() {
      let e = "",
        t = 0;
      for (let r of this._getState()) {
        if (t > 0) e = PC + e;
        (e = `${r[0]}${MC}${r[1]}` + e), t++;
      }
      return e;
    }
    _getState() {
      if (this._internalState) return this._internalState;
      let e = this._rawTraceState.split(PC),
        t = new Map(),
        r = 0;
      for (let o of e) {
        let u = o.trim(),
          d = u.indexOf(MC);
        if (d === -1) continue;
        let _ = u.slice(0, d),
          A = u.slice(d + 1);
        if (!(0, Fi.validateKey)(_) || !(0, Fi.validateValue)(A)) continue;
        let C = r + u.length + (t.size > 0 ? 1 : 0);
        if (C > kC) continue;
        if ((t.set(_, A), (r = C), t.size >= pY)) break;
      }
      return (
        (this._length = r), (this._internalState = new Map(Array.from(t.entries()).reverse())), this._internalState
      );
    }
    _fromState(e, t) {
      let r = Object.create(gc.prototype);
      return (r._internalState = e), (r._length = t), r;
    }
  }
  NC.TraceState = gc;
});

var BC = S(function (zC) {
  Object.defineProperty(zC, "__esModule", { value: !0 });
  zC.W3CTraceContextPropagator = zC.parseTraceParent = zC.TRACE_STATE_HEADER = zC.TRACE_PARENT_HEADER = void 0;
  var Bi = Li(),
    fY = eo(),
    mY = hc();
  zC.TRACE_PARENT_HEADER = "traceparent";
  zC.TRACE_STATE_HEADER = "tracestate";
  var MY = "00",
    UY = "(?!ff)[\\da-f]{2}",
    zY = "(?![0]{32})[\\da-f]{32}",
    FY = "(?![0]{16})[\\da-f]{16}",
    BY = "[\\da-f]{2}",
    VY = new RegExp(`^\\s?(${UY})-(${zY})-(${FY})-(${BY})(-.*)?\\s?$`);
  function LC(e) {
    let t = VY.exec(e);
    if (!t) return null;
    if (t[1] === "00" && t[5]) return null;
    return { traceId: t[2], spanId: t[3], traceFlags: parseInt(t[4], 16) };
  }
  zC.parseTraceParent = LC;
  class UC {
    inject(e, t, r) {
      let o = Bi.trace.getSpanContext(e);
      if (!o || (0, fY.isTracingSuppressed)(e) || !(0, Bi.isSpanContextValid)(o)) return;
      let u = `${MY}-${o.traceId}-${o.spanId}-0${Number(o.traceFlags || Bi.TraceFlags.NONE).toString(16)}`;
      if ((r.set(t, zC.TRACE_PARENT_HEADER, u), o.traceState))
        r.set(t, zC.TRACE_STATE_HEADER, o.traceState.serialize());
    }
    extract(e, t, r) {
      let o = r.get(t, zC.TRACE_PARENT_HEADER);
      if (!o) return e;
      let u = Array.isArray(o) ? o[0] : o;
      if (typeof u !== "string") return e;
      let d = LC(u);
      if (!d) return e;
      d.isRemote = !0;
      let _ = r.get(t, zC.TRACE_STATE_HEADER);
      if (_) {
        let A = Array.isArray(_) ? _.join(",") : _;
        d.traceState = new mY.TraceState(typeof A === "string" ? A : void 0);
      }
      return Bi.trace.setSpanContext(e, d);
    }
    fields() {
      return [zC.TRACE_PARENT_HEADER, zC.TRACE_STATE_HEADER];
    }
  }
  zC.W3CTraceContextPropagator = UC;
});

var jC = S(function (VC) {
  Object.defineProperty(VC, "__esModule", { value: !0 });
  VC.getRPCMetadata = VC.deleteRPCMetadata = VC.setRPCMetadata = VC.RPCType = void 0;
  var KY = Li(),
    Ec = (0, KY.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA"),
    jY;
  (function (e) {
    e.HTTP = "http";
  })((jY = VC.RPCType || (VC.RPCType = {})));
  function YY(e, t) {
    return e.setValue(Ec, t);
  }
  VC.setRPCMetadata = YY;
  function qY(e) {
    return e.deleteValue(Ec);
  }
  VC.deleteRPCMetadata = qY;
  function QY(e) {
    return e.getValue(Ec);
  }
  VC.getRPCMetadata = QY;
});

var ZC = S(function (QC) {
  Object.defineProperty(QC, "__esModule", { value: !0 });
  QC.isPlainObject = void 0;
  var e$ = "[object Object]",
    t$ = "[object Null]",
    n$ = "[object Undefined]",
    r$ = Function.prototype,
    WC = r$.toString,
    o$ = WC.call(Object),
    i$ = Object.getPrototypeOf,
    YC = Object.prototype,
    $C = YC.hasOwnProperty,
    zn = Symbol ? Symbol.toStringTag : void 0,
    XC = YC.toString;
  function s$(e) {
    if (!a$(e) || l$(e) !== e$) return !1;
    let t = i$(e);
    if (t === null) return !0;
    let r = $C.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && WC.call(r) === o$;
  }
  QC.isPlainObject = s$;
  function a$(e) {
    return e != null && typeof e == "object";
  }
  function l$(e) {
    if (e == null) return e === void 0 ? n$ : t$;
    return zn && zn in Object(e) ? c$(e) : u$(e);
  }
  function c$(e) {
    let t = $C.call(e, zn),
      r = e[zn],
      o = !1;
    try {
      (e[zn] = void 0), (o = !0);
    } catch {}
    let u = XC.call(e);
    if (o)
      if (t) e[zn] = r;
      else delete e[zn];
    return u;
  }
  function u$(e) {
    return XC.call(e);
  }
});

var sv = S(function (ov) {
  Object.defineProperty(ov, "__esModule", { value: !0 });
  ov.merge = void 0;
  var ev = ZC(),
    O$ = 20;
  function P$(...e) {
    let t = e.shift(),
      r = new WeakMap();
    while (e.length > 0) t = nv(t, e.shift(), 0, r);
    return t;
  }
  ov.merge = P$;
  function Sc(e) {
    if (ji(e)) return e.slice();
    return e;
  }
  function nv(e, t, r = 0, o) {
    let u;
    if (r > O$) return;
    if ((r++, Ki(e) || Ki(t) || rv(t))) u = Sc(t);
    else if (ji(e)) {
      if (((u = e.slice()), ji(t))) for (let d = 0, _ = t.length; d < _; d++) u.push(Sc(t[d]));
      else if (ro(t)) {
        let d = Object.keys(t);
        for (let _ = 0, A = d.length; _ < A; _++) {
          let C = d[_];
          if (C === "__proto__" || C === "constructor" || C === "prototype") continue;
          u[C] = Sc(t[C]);
        }
      }
    } else if (ro(e))
      if (ro(t)) {
        if (!I$(e, t)) return t;
        u = Object.assign({}, e);
        let d = Object.keys(t);
        for (let _ = 0, A = d.length; _ < A; _++) {
          let C = d[_];
          if (C === "__proto__" || C === "constructor" || C === "prototype") continue;
          let k = t[C];
          if (Ki(k))
            if (typeof k > "u") delete u[C];
            else u[C] = k;
          else {
            let M = u[C],
              x = k;
            if (tv(e, C, o) || tv(t, C, o)) delete u[C];
            else {
              if (ro(M) && ro(x)) {
                let z = o.get(M) || [],
                  W = o.get(x) || [];
                z.push({ obj: e, key: C }), W.push({ obj: t, key: C }), o.set(M, z), o.set(x, W);
              }
              u[C] = nv(u[C], k, r, o);
            }
          }
        }
      } else u = t;
    return u;
  }
  function tv(e, t, r) {
    let o = r.get(e[t]) || [];
    for (let u = 0, d = o.length; u < d; u++) {
      let _ = o[u];
      if (_.key === t && _.obj === e) return !0;
    }
    return !1;
  }
  function ji(e) {
    return Array.isArray(e);
  }
  function rv(e) {
    return typeof e === "function";
  }
  function ro(e) {
    return !Ki(e) && !ji(e) && !rv(e) && typeof e === "object";
  }
  function Ki(e) {
    return (
      typeof e === "string" ||
      typeof e === "number" ||
      typeof e === "boolean" ||
      typeof e > "u" ||
      e instanceof Date ||
      e instanceof RegExp ||
      e === null
    );
  }
  function I$(e, t) {
    if (!(0, ev.isPlainObject)(e) || !(0, ev.isPlainObject)(t)) return !1;
    return !0;
  }
});

var cv = S(function (av) {
  Object.defineProperty(av, "__esModule", { value: !0 });
  av.callWithTimeout = av.TimeoutError = void 0;
  class Wi extends Error {
    constructor(e) {
      super(e);
      Object.setPrototypeOf(this, Wi.prototype);
    }
  }
  av.TimeoutError = Wi;
  function U$(e, t) {
    let r,
      o = new Promise(function (d, _) {
        r = setTimeout(function () {
          _(new Wi("Operation timed out."));
        }, t);
      });
    return Promise.race([e, o]).then(
      (u) => (clearTimeout(r), u),
      (u) => {
        throw (clearTimeout(r), u);
      },
    );
  }
  av.callWithTimeout = U$;
});

var fv = S(function (dv) {
  Object.defineProperty(dv, "__esModule", { value: !0 });
  dv.isUrlIgnored = dv.urlMatches = void 0;
  function uv(e, t) {
    if (typeof t === "string") return e === t;
    else return !!e.match(t);
  }
  dv.urlMatches = uv;
  function B$(e, t) {
    if (!t) return !1;
    for (let r of t) if (uv(e, r)) return !0;
    return !1;
  }
  dv.isUrlIgnored = B$;
});

var hv = S(function (mv) {
  Object.defineProperty(mv, "__esModule", { value: !0 });
  mv.Deferred = void 0;
  class _v {
    _promise;
    _resolve;
    _reject;
    constructor() {
      this._promise = new Promise((e, t) => {
        (this._resolve = e), (this._reject = t);
      });
    }
    get promise() {
      return this._promise;
    }
    resolve(e) {
      this._resolve(e);
    }
    reject(e) {
      this._reject(e);
    }
  }
  mv.Deferred = _v;
});

var Av = S(function (Sv) {
  Object.defineProperty(Sv, "__esModule", { value: !0 });
  Sv.BindOnceFuture = void 0;
  var G$ = hv();
  class Ev {
    _isCalled = !1;
    _deferred = new G$.Deferred();
    _callback;
    _that;
    constructor(e, t) {
      (this._callback = e), (this._that = t);
    }
    get isCalled() {
      return this._isCalled;
    }
    get promise() {
      return this._deferred.promise;
    }
    call(...e) {
      if (!this._isCalled) {
        this._isCalled = !0;
        try {
          Promise.resolve(this._callback.call(this._that, ...e)).then(
            (t) => this._deferred.resolve(t),
            (t) => this._deferred.reject(t),
          );
        } catch (t) {
          this._deferred.reject(t);
        }
      }
      return this._deferred.promise;
    }
  }
  Sv.BindOnceFuture = Ev;
});

var Cv = S(function (yv) {
  Object.defineProperty(yv, "__esModule", { value: !0 });
  yv.diagLogLevelFromString = void 0;
  var Qt = Li(),
    bv = {
      ALL: Qt.DiagLogLevel.ALL,
      VERBOSE: Qt.DiagLogLevel.VERBOSE,
      DEBUG: Qt.DiagLogLevel.DEBUG,
      INFO: Qt.DiagLogLevel.INFO,
      WARN: Qt.DiagLogLevel.WARN,
      ERROR: Qt.DiagLogLevel.ERROR,
      NONE: Qt.DiagLogLevel.NONE,
    };
  function K$(e) {
    if (e == null) return;
    let t = bv[e.toUpperCase()];
    if (t == null)
      return (
        Qt.diag.warn(`Unknown log level "${e}", expected one of ${Object.keys(bv)}, using default`),
        Qt.DiagLogLevel.INFO
      );
    return t;
  }
  yv.diagLogLevelFromString = K$;
});

var wv = S(function (Ov) {
  Object.defineProperty(Ov, "__esModule", { value: !0 });
  Ov._export = void 0;
  var vv = Li(),
    j$ = eo();
  function W$(e, t) {
    return new Promise((r) => {
      vv.context.with((0, j$.suppressTracing)(vv.context.active()), () => {
        e.export(t, r);
      });
    });
  }
  Ov._export = W$;
});

var Bc = S(function (pe) {
  Object.defineProperty(pe, "__esModule", { value: !0 });
  pe.internal =
    pe.diagLogLevelFromString =
    pe.BindOnceFuture =
    pe.urlMatches =
    pe.isUrlIgnored =
    pe.callWithTimeout =
    pe.TimeoutError =
    pe.merge =
    pe.TraceState =
    pe.unsuppressTracing =
    pe.suppressTracing =
    pe.isTracingSuppressed =
    pe.setRPCMetadata =
    pe.getRPCMetadata =
    pe.deleteRPCMetadata =
    pe.RPCType =
    pe.parseTraceParent =
    pe.W3CTraceContextPropagator =
    pe.TRACE_STATE_HEADER =
    pe.TRACE_PARENT_HEADER =
    pe.CompositePropagator =
    pe.otperformance =
    pe.getStringListFromEnv =
    pe.getNumberFromEnv =
    pe.getBooleanFromEnv =
    pe.getStringFromEnv =
    pe._globalThis =
    pe.SDK_INFO =
    pe.parseKeyPairsIntoRecord =
    pe.ExportResultCode =
    pe.unrefTimer =
    pe.timeInputToHrTime =
    pe.millisToHrTime =
    pe.isTimeInputHrTime =
    pe.isTimeInput =
    pe.hrTimeToTimeStamp =
    pe.hrTimeToNanoseconds =
    pe.hrTimeToMilliseconds =
    pe.hrTimeToMicroseconds =
    pe.hrTimeDuration =
    pe.hrTime =
    pe.getTimeOrigin =
    pe.addHrTimes =
    pe.loggingErrorHandler =
    pe.setGlobalErrorHandler =
    pe.globalErrorHandler =
    pe.sanitizeAttributes =
    pe.isAttributeValue =
    pe.AnchoredClock =
    pe.W3CBaggagePropagator =
      void 0;
  var Y$ = F_();
  Object.defineProperty(pe, "W3CBaggagePropagator", {
    enumerable: !0,
    get: function () {
      return Y$.W3CBaggagePropagator;
    },
  });
  var $$ = G_();
  Object.defineProperty(pe, "AnchoredClock", {
    enumerable: !0,
    get: function () {
      return $$.AnchoredClock;
    },
  });
  var Pv = X_();
  Object.defineProperty(pe, "isAttributeValue", {
    enumerable: !0,
    get: function () {
      return Pv.isAttributeValue;
    },
  });
  Object.defineProperty(pe, "sanitizeAttributes", {
    enumerable: !0,
    get: function () {
      return Pv.sanitizeAttributes;
    },
  });
  var Mv = nm();
  Object.defineProperty(pe, "globalErrorHandler", {
    enumerable: !0,
    get: function () {
      return Mv.globalErrorHandler;
    },
  });
  Object.defineProperty(pe, "setGlobalErrorHandler", {
    enumerable: !0,
    get: function () {
      return Mv.setGlobalErrorHandler;
    },
  });
  var q$ = lc();
  Object.defineProperty(pe, "loggingErrorHandler", {
    enumerable: !0,
    get: function () {
      return q$.loggingErrorHandler;
    },
  });
  var gt = iC();
  Object.defineProperty(pe, "addHrTimes", {
    enumerable: !0,
    get: function () {
      return gt.addHrTimes;
    },
  });
  Object.defineProperty(pe, "getTimeOrigin", {
    enumerable: !0,
    get: function () {
      return gt.getTimeOrigin;
    },
  });
  Object.defineProperty(pe, "hrTime", {
    enumerable: !0,
    get: function () {
      return gt.hrTime;
    },
  });
  Object.defineProperty(pe, "hrTimeDuration", {
    enumerable: !0,
    get: function () {
      return gt.hrTimeDuration;
    },
  });
  Object.defineProperty(pe, "hrTimeToMicroseconds", {
    enumerable: !0,
    get: function () {
      return gt.hrTimeToMicroseconds;
    },
  });
  Object.defineProperty(pe, "hrTimeToMilliseconds", {
    enumerable: !0,
    get: function () {
      return gt.hrTimeToMilliseconds;
    },
  });
  Object.defineProperty(pe, "hrTimeToNanoseconds", {
    enumerable: !0,
    get: function () {
      return gt.hrTimeToNanoseconds;
    },
  });
  Object.defineProperty(pe, "hrTimeToTimeStamp", {
    enumerable: !0,
    get: function () {
      return gt.hrTimeToTimeStamp;
    },
  });
  Object.defineProperty(pe, "isTimeInput", {
    enumerable: !0,
    get: function () {
      return gt.isTimeInput;
    },
  });
  Object.defineProperty(pe, "isTimeInputHrTime", {
    enumerable: !0,
    get: function () {
      return gt.isTimeInputHrTime;
    },
  });
  Object.defineProperty(pe, "millisToHrTime", {
    enumerable: !0,
    get: function () {
      return gt.millisToHrTime;
    },
  });
  Object.defineProperty(pe, "timeInputToHrTime", {
    enumerable: !0,
    get: function () {
      return gt.timeInputToHrTime;
    },
  });
  var X$ = lC();
  Object.defineProperty(pe, "unrefTimer", {
    enumerable: !0,
    get: function () {
      return X$.unrefTimer;
    },
  });
  var Q$ = uC();
  Object.defineProperty(pe, "ExportResultCode", {
    enumerable: !0,
    get: function () {
      return Q$.ExportResultCode;
    },
  });
  var J$ = oc();
  Object.defineProperty(pe, "parseKeyPairsIntoRecord", {
    enumerable: !0,
    get: function () {
      return J$.parseKeyPairsIntoRecord;
    },
  });
  var Hn = uc();
  Object.defineProperty(pe, "SDK_INFO", {
    enumerable: !0,
    get: function () {
      return Hn.SDK_INFO;
    },
  });
  Object.defineProperty(pe, "_globalThis", {
    enumerable: !0,
    get: function () {
      return Hn._globalThis;
    },
  });
  Object.defineProperty(pe, "getStringFromEnv", {
    enumerable: !0,
    get: function () {
      return Hn.getStringFromEnv;
    },
  });
  Object.defineProperty(pe, "getBooleanFromEnv", {
    enumerable: !0,
    get: function () {
      return Hn.getBooleanFromEnv;
    },
  });
  Object.defineProperty(pe, "getNumberFromEnv", {
    enumerable: !0,
    get: function () {
      return Hn.getNumberFromEnv;
    },
  });
  Object.defineProperty(pe, "getStringListFromEnv", {
    enumerable: !0,
    get: function () {
      return Hn.getStringListFromEnv;
    },
  });
  Object.defineProperty(pe, "otperformance", {
    enumerable: !0,
    get: function () {
      return Hn.otperformance;
    },
  });
  var Z$ = gC();
  Object.defineProperty(pe, "CompositePropagator", {
    enumerable: !0,
    get: function () {
      return Z$.CompositePropagator;
    },
  });
  var Yi = BC();
  Object.defineProperty(pe, "TRACE_PARENT_HEADER", {
    enumerable: !0,
    get: function () {
      return Yi.TRACE_PARENT_HEADER;
    },
  });
  Object.defineProperty(pe, "TRACE_STATE_HEADER", {
    enumerable: !0,
    get: function () {
      return Yi.TRACE_STATE_HEADER;
    },
  });
  Object.defineProperty(pe, "W3CTraceContextPropagator", {
    enumerable: !0,
    get: function () {
      return Yi.W3CTraceContextPropagator;
    },
  });
  Object.defineProperty(pe, "parseTraceParent", {
    enumerable: !0,
    get: function () {
      return Yi.parseTraceParent;
    },
  });
  var $i = jC();
  Object.defineProperty(pe, "RPCType", {
    enumerable: !0,
    get: function () {
      return $i.RPCType;
    },
  });
  Object.defineProperty(pe, "deleteRPCMetadata", {
    enumerable: !0,
    get: function () {
      return $i.deleteRPCMetadata;
    },
  });
  Object.defineProperty(pe, "getRPCMetadata", {
    enumerable: !0,
    get: function () {
      return $i.getRPCMetadata;
    },
  });
  Object.defineProperty(pe, "setRPCMetadata", {
    enumerable: !0,
    get: function () {
      return $i.setRPCMetadata;
    },
  });
  var Tc = eo();
  Object.defineProperty(pe, "isTracingSuppressed", {
    enumerable: !0,
    get: function () {
      return Tc.isTracingSuppressed;
    },
  });
  Object.defineProperty(pe, "suppressTracing", {
    enumerable: !0,
    get: function () {
      return Tc.suppressTracing;
    },
  });
  Object.defineProperty(pe, "unsuppressTracing", {
    enumerable: !0,
    get: function () {
      return Tc.unsuppressTracing;
    },
  });
  var eq = hc();
  Object.defineProperty(pe, "TraceState", {
    enumerable: !0,
    get: function () {
      return eq.TraceState;
    },
  });
  var tq = sv();
  Object.defineProperty(pe, "merge", {
    enumerable: !0,
    get: function () {
      return tq.merge;
    },
  });
  var Dv = cv();
  Object.defineProperty(pe, "TimeoutError", {
    enumerable: !0,
    get: function () {
      return Dv.TimeoutError;
    },
  });
  Object.defineProperty(pe, "callWithTimeout", {
    enumerable: !0,
    get: function () {
      return Dv.callWithTimeout;
    },
  });
  var Iv = fv();
  Object.defineProperty(pe, "isUrlIgnored", {
    enumerable: !0,
    get: function () {
      return Iv.isUrlIgnored;
    },
  });
  Object.defineProperty(pe, "urlMatches", {
    enumerable: !0,
    get: function () {
      return Iv.urlMatches;
    },
  });
  var nq = Av();
  Object.defineProperty(pe, "BindOnceFuture", {
    enumerable: !0,
    get: function () {
      return nq.BindOnceFuture;
    },
  });
  var rq = Cv();
  Object.defineProperty(pe, "diagLogLevelFromString", {
    enumerable: !0,
    get: function () {
      return rq.diagLogLevelFromString;
    },
  });
  var oq = wv();
  pe.internal = { _export: oq._export };
});

var bc = S(function (xv) {
  Object.defineProperty(xv, "__esModule", { value: !0 });
  xv._clearDefaultServiceNameCache = xv.defaultServiceName = void 0;
  var oo;
  function iq() {
    if (oo === void 0)
      try {
        let e = globalThis.process.argv0;
        oo = e ? `unknown_service:${e}` : "unknown_service";
      } catch {
        oo = "unknown_service";
      }
    return oo;
  }
  xv.defaultServiceName = iq;
  function sq() {
    oo = void 0;
  }
  xv._clearDefaultServiceNameCache = sq;
});

var Fv = S(function (Uv) {
  Object.defineProperty(Uv, "__esModule", { value: !0 });
  Uv.isPromiseLike = void 0;
  var lq = (e) => e !== null && typeof e === "object" && typeof e.then === "function";
  Uv.isPromiseLike = lq;
});

var kc = S(function (Hv) {
  Object.defineProperty(Hv, "__esModule", { value: !0 });
  Hv.defaultResource = Hv.emptyResource = Hv.resourceFromDetectedResource = Hv.resourceFromAttributes = void 0;
  var ao = Li(),
    yc = Bc(),
    Gn = Fde(),
    cq = bc(),
    io = Fv();
  class lo {
    _rawAttributes;
    _asyncAttributesPending = !1;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(e, t) {
      let r = new lo({}, t);
      return (
        (r._rawAttributes = Bv(e)),
        (r._asyncAttributesPending = e.filter(([o, u]) => (0, io.isPromiseLike)(u)).length > 0),
        r
      );
    }
    constructor(e, t) {
      let r = e.attributes ?? {};
      (this._rawAttributes = Object.entries(r).map(([o, u]) => {
        if ((0, io.isPromiseLike)(u)) this._asyncAttributesPending = !0;
        return [o, u];
      })),
        (this._rawAttributes = Bv(this._rawAttributes)),
        (this._schemaUrl = fq(t?.schemaUrl));
    }
    get asyncAttributesPending() {
      return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
      if (!this.asyncAttributesPending) return;
      for (let e = 0; e < this._rawAttributes.length; e++) {
        let [t, r] = this._rawAttributes[e];
        this._rawAttributes[e] = [t, (0, io.isPromiseLike)(r) ? await r : r];
      }
      this._asyncAttributesPending = !1;
    }
    get attributes() {
      if (this.asyncAttributesPending) ao.diag.error("Accessing resource attributes before async attributes settled");
      if (this._memoizedAttributes) return this._memoizedAttributes;
      let e = {};
      for (let [t, r] of this._rawAttributes) {
        if ((0, io.isPromiseLike)(r)) {
          ao.diag.debug(`Unsettled resource attribute ${t} skipped`);
          continue;
        }
        if (r != null) e[t] ??= r;
      }
      if (!this._asyncAttributesPending) this._memoizedAttributes = e;
      return e;
    }
    getRawAttributes() {
      return this._rawAttributes;
    }
    get schemaUrl() {
      return this._schemaUrl;
    }
    merge(e) {
      if (e == null) return this;
      let t = _q(this, e),
        r = t ? { schemaUrl: t } : void 0;
      return lo.FromAttributeList([...e.getRawAttributes(), ...this.getRawAttributes()], r);
    }
  }
  function Oc(e, t) {
    return lo.FromAttributeList(Object.entries(e), t);
  }
  Hv.resourceFromAttributes = Oc;
  function uq(e, t) {
    return new lo(e, t);
  }
  Hv.resourceFromDetectedResource = uq;
  function dq() {
    return Oc({});
  }
  Hv.emptyResource = dq;
  function pq() {
    return Oc({
      [Gn.ATTR_SERVICE_NAME]: (0, cq.defaultServiceName)(),
      [Gn.ATTR_TELEMETRY_SDK_LANGUAGE]: yc.SDK_INFO[Gn.ATTR_TELEMETRY_SDK_LANGUAGE],
      [Gn.ATTR_TELEMETRY_SDK_NAME]: yc.SDK_INFO[Gn.ATTR_TELEMETRY_SDK_NAME],
      [Gn.ATTR_TELEMETRY_SDK_VERSION]: yc.SDK_INFO[Gn.ATTR_TELEMETRY_SDK_VERSION],
    });
  }
  Hv.defaultResource = pq;
  function Bv(e) {
    return e.map(([t, r]) => {
      if ((0, io.isPromiseLike)(r))
        return [
          t,
          r.catch((o) => {
            ao.diag.debug("promise rejection for resource attribute: %s - %s", t, o);
            return;
          }),
        ];
      return [t, r];
    });
  }
  function fq(e) {
    if (typeof e === "string" || e === void 0) return e;
    ao.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", e);
    return;
  }
  function _q(e, t) {
    let r = e?.schemaUrl,
      o = t?.schemaUrl,
      u = r === void 0 || r === "",
      d = o === void 0 || o === "";
    if (u) return o;
    if (d) return r;
    if (r === o) return r;
    ao.diag.warn(
      'Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.',
      r,
      o,
    );
    return;
  }
});

var Wv = S(function (Kv) {
  Object.defineProperty(Kv, "__esModule", { value: !0 });
  Kv.detectResources = void 0;
  var Gv = Li(),
    wc = kc(),
    Eq = (e = {}) =>
      (e.detectors || [])
        .map((r) => {
          try {
            let o = (0, wc.resourceFromDetectedResource)(r.detect(e));
            return Gv.diag.debug(`${r.constructor.name} found resource.`, o), o;
          } catch (o) {
            return Gv.diag.debug(`${r.constructor.name} failed: ${o.message}`), (0, wc.emptyResource)();
          }
        })
        .reduce((r, o) => r.merge(o), (0, wc.emptyResource)());
  Kv.detectResources = Eq;
});

var Qv = S(function (qv) {
  Object.defineProperty(qv, "__esModule", { value: !0 });
  qv.envDetector = void 0;
  var Sq = Li(),
    Tq = Fde(),
    Yv = Bc();
  class $v {
    _MAX_LENGTH = 255;
    _COMMA_SEPARATOR = ",";
    _LABEL_KEY_VALUE_SPLITTER = "=";
    detect(e) {
      let t = {},
        r = (0, Yv.getStringFromEnv)("OTEL_RESOURCE_ATTRIBUTES"),
        o = (0, Yv.getStringFromEnv)("OTEL_SERVICE_NAME");
      if (r)
        try {
          let u = this._parseResourceAttributes(r);
          Object.assign(t, u);
        } catch (u) {
          Sq.diag.debug(`EnvDetector failed: ${u instanceof Error ? u.message : u}`);
        }
      if (o) t[Tq.ATTR_SERVICE_NAME] = o;
      return { attributes: t };
    }
    _parseResourceAttributes(e) {
      if (!e) return {};
      let t = {},
        r = e.split(this._COMMA_SEPARATOR).filter((o) => o.trim() !== "");
      for (let o of r) {
        let u = o.split(this._LABEL_KEY_VALUE_SPLITTER);
        if (u.length !== 2)
          throw Error(
            `Invalid format for OTEL_RESOURCE_ATTRIBUTES: "${o}". Expected format: key=value. The ',' and '=' characters must be percent-encoded in keys and values.`,
          );
        let [d, _] = u,
          A = d.trim(),
          C = _.trim();
        if (A.length === 0) throw Error(`Invalid OTEL_RESOURCE_ATTRIBUTES: empty attribute key in "${o}".`);
        let k, M;
        try {
          (k = decodeURIComponent(A)), (M = decodeURIComponent(C));
        } catch (x) {
          throw Error(
            `Failed to percent-decode OTEL_RESOURCE_ATTRIBUTES entry "${o}": ${x instanceof Error ? x.message : x}`,
          );
        }
        if (k.length > this._MAX_LENGTH)
          throw Error(`Attribute key exceeds the maximum length of ${this._MAX_LENGTH} characters: "${k}".`);
        if (M.length > this._MAX_LENGTH)
          throw Error(`Attribute value exceeds the maximum length of ${this._MAX_LENGTH} characters for key "${k}".`);
        t[k] = M;
      }
      return t;
    }
  }
  qv.envDetector = new $v();
});

var co = S(function (Jv) {
  Object.defineProperty(Jv, "__esModule", { value: !0 });
  Jv.ATTR_WEBENGINE_VERSION =
    Jv.ATTR_WEBENGINE_NAME =
    Jv.ATTR_WEBENGINE_DESCRIPTION =
    Jv.ATTR_SERVICE_NAMESPACE =
    Jv.ATTR_SERVICE_INSTANCE_ID =
    Jv.ATTR_PROCESS_RUNTIME_VERSION =
    Jv.ATTR_PROCESS_RUNTIME_NAME =
    Jv.ATTR_PROCESS_RUNTIME_DESCRIPTION =
    Jv.ATTR_PROCESS_PID =
    Jv.ATTR_PROCESS_OWNER =
    Jv.ATTR_PROCESS_EXECUTABLE_PATH =
    Jv.ATTR_PROCESS_EXECUTABLE_NAME =
    Jv.ATTR_PROCESS_COMMAND_ARGS =
    Jv.ATTR_PROCESS_COMMAND =
    Jv.ATTR_OS_VERSION =
    Jv.ATTR_OS_TYPE =
    Jv.ATTR_K8S_POD_NAME =
    Jv.ATTR_K8S_NAMESPACE_NAME =
    Jv.ATTR_K8S_DEPLOYMENT_NAME =
    Jv.ATTR_K8S_CLUSTER_NAME =
    Jv.ATTR_HOST_TYPE =
    Jv.ATTR_HOST_NAME =
    Jv.ATTR_HOST_IMAGE_VERSION =
    Jv.ATTR_HOST_IMAGE_NAME =
    Jv.ATTR_HOST_IMAGE_ID =
    Jv.ATTR_HOST_ID =
    Jv.ATTR_HOST_ARCH =
    Jv.ATTR_CONTAINER_NAME =
    Jv.ATTR_CONTAINER_IMAGE_TAGS =
    Jv.ATTR_CONTAINER_IMAGE_NAME =
    Jv.ATTR_CONTAINER_ID =
    Jv.ATTR_CLOUD_REGION =
    Jv.ATTR_CLOUD_PROVIDER =
    Jv.ATTR_CLOUD_AVAILABILITY_ZONE =
    Jv.ATTR_CLOUD_ACCOUNT_ID =
      void 0;
  Jv.ATTR_CLOUD_ACCOUNT_ID = "cloud.account.id";
  Jv.ATTR_CLOUD_AVAILABILITY_ZONE = "cloud.availability_zone";
  Jv.ATTR_CLOUD_PROVIDER = "cloud.provider";
  Jv.ATTR_CLOUD_REGION = "cloud.region";
  Jv.ATTR_CONTAINER_ID = "container.id";
  Jv.ATTR_CONTAINER_IMAGE_NAME = "container.image.name";
  Jv.ATTR_CONTAINER_IMAGE_TAGS = "container.image.tags";
  Jv.ATTR_CONTAINER_NAME = "container.name";
  Jv.ATTR_HOST_ARCH = "host.arch";
  Jv.ATTR_HOST_ID = "host.id";
  Jv.ATTR_HOST_IMAGE_ID = "host.image.id";
  Jv.ATTR_HOST_IMAGE_NAME = "host.image.name";
  Jv.ATTR_HOST_IMAGE_VERSION = "host.image.version";
  Jv.ATTR_HOST_NAME = "host.name";
  Jv.ATTR_HOST_TYPE = "host.type";
  Jv.ATTR_K8S_CLUSTER_NAME = "k8s.cluster.name";
  Jv.ATTR_K8S_DEPLOYMENT_NAME = "k8s.deployment.name";
  Jv.ATTR_K8S_NAMESPACE_NAME = "k8s.namespace.name";
  Jv.ATTR_K8S_POD_NAME = "k8s.pod.name";
  Jv.ATTR_OS_TYPE = "os.type";
  Jv.ATTR_OS_VERSION = "os.version";
  Jv.ATTR_PROCESS_COMMAND = "process.command";
  Jv.ATTR_PROCESS_COMMAND_ARGS = "process.command_args";
  Jv.ATTR_PROCESS_EXECUTABLE_NAME = "process.executable.name";
  Jv.ATTR_PROCESS_EXECUTABLE_PATH = "process.executable.path";
  Jv.ATTR_PROCESS_OWNER = "process.owner";
  Jv.ATTR_PROCESS_PID = "process.pid";
  Jv.ATTR_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
  Jv.ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
  Jv.ATTR_PROCESS_RUNTIME_VERSION = "process.runtime.version";
  Jv.ATTR_SERVICE_INSTANCE_ID = "service.instance.id";
  Jv.ATTR_SERVICE_NAMESPACE = "service.namespace";
  Jv.ATTR_WEBENGINE_DESCRIPTION = "webengine.description";
  Jv.ATTR_WEBENGINE_NAME = "webengine.name";
  Jv.ATTR_WEBENGINE_VERSION = "webengine.version";
});

var nO = S(function (eO) {
  Object.defineProperty(eO, "__esModule", { value: !0 });
  eO.getMachineId = void 0;
  var t2 = ue("process"),
    Kn;
  async function n2() {
    if (!Kn)
      switch (t2.platform) {
        case "darwin":
          Kn = (await import("/$bunfs/root/chunk-cqtj0r0f.js").then((m) => j(m.default))).getMachineId;
          break;
        case "linux":
          Kn = (await import("/$bunfs/root/chunk-t7snz70t.js").then((m) => j(m.default))).getMachineId;
          break;
        case "freebsd":
          Kn = (await import("/$bunfs/root/chunk-d732aaqk.js").then((m) => j(m.default))).getMachineId;
          break;
        case "win32":
          Kn = (await import("/$bunfs/root/chunk-fk2bb2ve.js").then((m) => j(m.default))).getMachineId;
          break;
        default:
          Kn = (await import("/$bunfs/root/chunk-fzzt7j33.js").then((m) => j(m.default))).getMachineId;
          break;
      }
    return Kn();
  }
  eO.getMachineId = n2;
});

var Pc = S(function (_O) {
  Object.defineProperty(_O, "__esModule", { value: !0 });
  _O.normalizeType = _O.normalizeArch = void 0;
  var r2 = (e) => {
    switch (e) {
      case "arm":
        return "arm32";
      case "ppc":
        return "ppc32";
      case "x64":
        return "amd64";
      default:
        return e;
    }
  };
  _O.normalizeArch = r2;
  var o2 = (e) => {
    switch (e) {
      case "sunos":
        return "solaris";
      case "win32":
        return "windows";
      default:
        return e;
    }
  };
  _O.normalizeType = o2;
});

var AO = S(function (EO) {
  Object.defineProperty(EO, "__esModule", { value: !0 });
  EO.hostDetector = void 0;
  var Mc = co(),
    gO = ue("os"),
    s2 = nO(),
    a2 = Pc();
  class hO {
    detect(e) {
      return {
        attributes: {
          [Mc.ATTR_HOST_NAME]: (0, gO.hostname)(),
          [Mc.ATTR_HOST_ARCH]: (0, a2.normalizeArch)((0, gO.arch)()),
          [Mc.ATTR_HOST_ID]: (0, s2.getMachineId)(),
        },
      };
    }
  }
  EO.hostDetector = new hO();
});

var OO = S(function (CO) {
  Object.defineProperty(CO, "__esModule", { value: !0 });
  CO.osDetector = void 0;
  var bO = co(),
    yO = ue("os"),
    l2 = Pc();
  class RO {
    detect(e) {
      return {
        attributes: {
          [bO.ATTR_OS_TYPE]: (0, l2.normalizeType)((0, yO.platform)()),
          [bO.ATTR_OS_VERSION]: (0, yO.release)(),
        },
      };
    }
  }
  CO.osDetector = new RO();
});

var MO = S(function (wO) {
  Object.defineProperty(wO, "__esModule", { value: !0 });
  wO.processDetector = void 0;
  var c2 = Li(),
    Jt = co(),
    u2 = ue("os");
  class kO {
    detect(e) {
      let t = {
        [Jt.ATTR_PROCESS_PID]: process.pid,
        [Jt.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
        [Jt.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
        [Jt.ATTR_PROCESS_COMMAND_ARGS]: [process.argv[0], ...process.execArgv, ...process.argv.slice(1)],
        [Jt.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
        [Jt.ATTR_PROCESS_RUNTIME_NAME]: "nodejs",
        [Jt.ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js",
      };
      if (process.argv.length > 1) t[Jt.ATTR_PROCESS_COMMAND] = process.argv[1];
      try {
        let r = u2.userInfo();
        t[Jt.ATTR_PROCESS_OWNER] = r.username;
      } catch (r) {
        c2.diag.debug(`error obtaining process owner: ${r}`);
      }
      return { attributes: t };
    }
  }
  wO.processDetector = new kO();
});

var LO = S(function (NO) {
  Object.defineProperty(NO, "__esModule", { value: !0 });
  NO.serviceInstanceIdDetector = void 0;
  var d2 = co(),
    p2 = ue("crypto");
  class IO {
    detect(e) {
      return { attributes: { [d2.ATTR_SERVICE_INSTANCE_ID]: (0, p2.randomUUID)() } };
    }
  }
  NO.serviceInstanceIdDetector = new IO();
});

var UO = S(function (mr) {
  Object.defineProperty(mr, "__esModule", { value: !0 });
  mr.serviceInstanceIdDetector = mr.processDetector = mr.osDetector = mr.hostDetector = void 0;
  var f2 = AO();
  Object.defineProperty(mr, "hostDetector", {
    enumerable: !0,
    get: function () {
      return f2.hostDetector;
    },
  });
  var _2 = OO();
  Object.defineProperty(mr, "osDetector", {
    enumerable: !0,
    get: function () {
      return _2.osDetector;
    },
  });
  var m2 = MO();
  Object.defineProperty(mr, "processDetector", {
    enumerable: !0,
    get: function () {
      return m2.processDetector;
    },
  });
  var g2 = LO();
  Object.defineProperty(mr, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return g2.serviceInstanceIdDetector;
    },
  });
});

var zO = S(function (gr) {
  Object.defineProperty(gr, "__esModule", { value: !0 });
  gr.serviceInstanceIdDetector = gr.processDetector = gr.osDetector = gr.hostDetector = void 0;
  var qi = UO();
  Object.defineProperty(gr, "hostDetector", {
    enumerable: !0,
    get: function () {
      return qi.hostDetector;
    },
  });
  Object.defineProperty(gr, "osDetector", {
    enumerable: !0,
    get: function () {
      return qi.osDetector;
    },
  });
  Object.defineProperty(gr, "processDetector", {
    enumerable: !0,
    get: function () {
      return qi.processDetector;
    },
  });
  Object.defineProperty(gr, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return qi.serviceInstanceIdDetector;
    },
  });
});

var HO = S(function (FO) {
  Object.defineProperty(FO, "__esModule", { value: !0 });
  FO.noopDetector = FO.NoopDetector = void 0;
  class Dc {
    detect() {
      return { attributes: {} };
    }
  }
  FO.NoopDetector = Dc;
  FO.noopDetector = new Dc();
});

var VO = S(function (Tn) {
  Object.defineProperty(Tn, "__esModule", { value: !0 });
  Tn.noopDetector =
    Tn.serviceInstanceIdDetector =
    Tn.processDetector =
    Tn.osDetector =
    Tn.hostDetector =
    Tn.envDetector =
      void 0;
  var T2 = Qv();
  Object.defineProperty(Tn, "envDetector", {
    enumerable: !0,
    get: function () {
      return T2.envDetector;
    },
  });
  var Xi = zO();
  Object.defineProperty(Tn, "hostDetector", {
    enumerable: !0,
    get: function () {
      return Xi.hostDetector;
    },
  });
  Object.defineProperty(Tn, "osDetector", {
    enumerable: !0,
    get: function () {
      return Xi.osDetector;
    },
  });
  Object.defineProperty(Tn, "processDetector", {
    enumerable: !0,
    get: function () {
      return Xi.processDetector;
    },
  });
  Object.defineProperty(Tn, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return Xi.serviceInstanceIdDetector;
    },
  });
  var A2 = HO();
  Object.defineProperty(Tn, "noopDetector", {
    enumerable: !0,
    get: function () {
      return A2.noopDetector;
    },
  });
});

var bMe = S(function (ht) {
  Object.defineProperty(ht, "__esModule", { value: !0 });
  ht.defaultServiceName =
    ht.emptyResource =
    ht.defaultResource =
    ht.resourceFromAttributes =
    ht.serviceInstanceIdDetector =
    ht.processDetector =
    ht.osDetector =
    ht.hostDetector =
    ht.envDetector =
    ht.detectResources =
      void 0;
  var y2 = Wv();
  Object.defineProperty(ht, "detectResources", {
    enumerable: !0,
    get: function () {
      return y2.detectResources;
    },
  });
  var po = VO();
  Object.defineProperty(ht, "envDetector", {
    enumerable: !0,
    get: function () {
      return po.envDetector;
    },
  });
  Object.defineProperty(ht, "hostDetector", {
    enumerable: !0,
    get: function () {
      return po.hostDetector;
    },
  });
  Object.defineProperty(ht, "osDetector", {
    enumerable: !0,
    get: function () {
      return po.osDetector;
    },
  });
  Object.defineProperty(ht, "processDetector", {
    enumerable: !0,
    get: function () {
      return po.processDetector;
    },
  });
  Object.defineProperty(ht, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return po.serviceInstanceIdDetector;
    },
  });
  var Ic = kc();
  Object.defineProperty(ht, "resourceFromAttributes", {
    enumerable: !0,
    get: function () {
      return Ic.resourceFromAttributes;
    },
  });
  Object.defineProperty(ht, "defaultResource", {
    enumerable: !0,
    get: function () {
      return Ic.defaultResource;
    },
  });
  Object.defineProperty(ht, "emptyResource", {
    enumerable: !0,
    get: function () {
      return Ic.emptyResource;
    },
  });
  var R2 = bc();
  Object.defineProperty(ht, "defaultServiceName", {
    enumerable: !0,
    get: function () {
      return R2.defaultServiceName;
    },
  });
});

var dl = j(p5(), 1);

var ml = j(WT(), 1);

var gN = new Mn(() => pN());

var gl = Object.keys(so);

var Jp = wR(async () => {
  if (VFe() !== null) return;
  try {
    let e = await TN();
    if (Ne() !== "bedrock") return;
    ACt(e);
  } catch (e) {
    h(e);
  }
});

var AN = "max";

class Zp {
  enabled = !1;
  headers = {};
  exceededLimits = [];
  headerless429Message = null;
  subscriptionType = null;
  rateLimitTier = null;
  fastModeRateLimitDurationMs = null;
  fastModeRateLimitExpiresAt = null;
  overages = null;
  trial = null;
  graceBand = null;
  billingAccessOverride = null;
  reset() {
    (this.enabled = !1),
      (this.headers = {}),
      (this.exceededLimits = []),
      (this.headerless429Message = null),
      (this.subscriptionType = null),
      (this.rateLimitTier = null),
      (this.fastModeRateLimitDurationMs = null),
      (this.fastModeRateLimitExpiresAt = null),
      (this.overages = null),
      (this.trial = null),
      (this.graceBand = null),
      (this.billingAccessOverride = null);
  }
  setHeader(e, t) {
    this.enabled = !0;
    let r = e === "retry-after" ? "retry-after" : `anthropic-ratelimit-unified-${e}`;
    if (t === void 0 || t === "clear") {
      if ((delete this.headers[r], e === "claim")) this.exceededLimits = [];
      if (e === "status" || e === "overage-status") this.updateRetryAfter();
      return;
    }
    if (e === "reset" || e === "overage-reset") {
      let u = Number(t);
      if (!isNaN(u)) t = String(Math.floor(Date.now() / 1000) + u * 3600);
    }
    if (e === "claim") {
      if (["five_hour", "seven_day", "seven_day_opus", "seven_day_sonnet"].includes(t)) {
        let d;
        if (t === "five_hour") d = Math.floor(Date.now() / 1000) + 18000;
        else if (t === "seven_day" || t === "seven_day_opus" || t === "seven_day_sonnet")
          d = Math.floor(Date.now() / 1000) + 604800;
        else d = Math.floor(Date.now() / 1000) + 3600;
        (this.exceededLimits = this.exceededLimits.filter((_) => _.type !== t)),
          this.exceededLimits.push({ type: t, resetsAt: d }),
          this.updateRepresentativeClaim();
        return;
      }
    }
    let o = this.headers;
    if (((o[r] = t), e === "status" || e === "overage-status")) this.updateRetryAfter();
  }
  updateRetryAfter() {
    let e = this.headers["anthropic-ratelimit-unified-status"],
      t = this.headers["anthropic-ratelimit-unified-overage-status"],
      r = this.headers["anthropic-ratelimit-unified-reset"];
    if (e === "rejected" && (!t || t === "rejected") && r) {
      let o = Number(r),
        u = Math.max(0, o - Math.floor(Date.now() / 1000));
      this.headers["retry-after"] = String(u);
    } else delete this.headers["retry-after"];
  }
  updateRepresentativeClaim() {
    if (this.exceededLimits.length === 0) {
      delete this.headers["anthropic-ratelimit-unified-representative-claim"],
        delete this.headers["anthropic-ratelimit-unified-reset"],
        delete this.headers["retry-after"];
      return;
    }
    let e = this.exceededLimits.reduce((t, r) => (r.resetsAt > t.resetsAt ? r : t));
    if (
      ((this.headers["anthropic-ratelimit-unified-representative-claim"] = e.type),
      (this.headers["anthropic-ratelimit-unified-reset"] = String(e.resetsAt)),
      this.headers["anthropic-ratelimit-unified-status"] === "rejected")
    ) {
      let t = this.headers["anthropic-ratelimit-unified-overage-status"];
      if (!t || t === "rejected") {
        let r = Math.max(0, e.resetsAt - Math.floor(Date.now() / 1000));
        this.headers["retry-after"] = String(r);
      } else delete this.headers["retry-after"];
    } else delete this.headers["retry-after"];
  }
  addExceededLimit(e, t) {
    this.enabled = !0;
    let r = Math.floor(Date.now() / 1000) + t * 3600;
    if (
      ((this.exceededLimits = this.exceededLimits.filter((o) => o.type !== e)),
      this.exceededLimits.push({ type: e, resetsAt: r }),
      this.exceededLimits.length > 0)
    )
      this.headers["anthropic-ratelimit-unified-status"] = "rejected";
    this.updateRepresentativeClaim();
  }
  setEarlyWarning(e, t, r) {
    (this.enabled = !0), this.clearEarlyWarning();
    let u = r ?? (e === "5h" ? 4 : 120),
      d = Math.floor(Date.now() / 1000) + u * 3600;
    if (
      ((this.headers[`anthropic-ratelimit-unified-${e}-utilization`] = String(t)),
      (this.headers[`anthropic-ratelimit-unified-${e}-reset`] = String(d)),
      (this.headers[`anthropic-ratelimit-unified-${e}-surpassed-threshold`] = String(t)),
      !this.headers["anthropic-ratelimit-unified-status"])
    )
      this.headers["anthropic-ratelimit-unified-status"] = "allowed";
  }
  clearEarlyWarning() {
    delete this.headers["anthropic-ratelimit-unified-5h-utilization"],
      delete this.headers["anthropic-ratelimit-unified-5h-reset"],
      delete this.headers["anthropic-ratelimit-unified-5h-surpassed-threshold"],
      delete this.headers["anthropic-ratelimit-unified-7d-utilization"],
      delete this.headers["anthropic-ratelimit-unified-7d-reset"],
      delete this.headers["anthropic-ratelimit-unified-7d-surpassed-threshold"];
  }
  setScenario(e) {
    if (e === "clear") {
      (this.headers = {}), (this.headerless429Message = null), (this.overages = null), (this.enabled = !1);
      return;
    }
    this.enabled = !0;
    let t = Math.floor(Date.now() / 1000) + 18000,
      r = Math.floor(Date.now() / 1000) + 604800;
    if (
      ((this.headers = {}),
      (this.headerless429Message = null),
      (this.overages = null),
      !["overage-active", "overage-warning", "overage-exhausted"].includes(e))
    )
      this.exceededLimits = [];
    switch (e) {
      case "normal":
        this.headers = {
          "anthropic-ratelimit-unified-status": "allowed",
          "anthropic-ratelimit-unified-reset": String(t),
        };
        break;
      case "session-limit-reached":
        (this.exceededLimits = [{ type: "five_hour", resetsAt: t }]),
          this.updateRepresentativeClaim(),
          (this.headers["anthropic-ratelimit-unified-status"] = "rejected");
        break;
      case "approaching-weekly-limit":
        this.headers = {
          "anthropic-ratelimit-unified-status": "allowed_warning",
          "anthropic-ratelimit-unified-reset": String(r),
          "anthropic-ratelimit-unified-representative-claim": "seven_day",
        };
        break;
      case "weekly-limit-reached":
        (this.exceededLimits = [{ type: "seven_day", resetsAt: r }]),
          this.updateRepresentativeClaim(),
          (this.headers["anthropic-ratelimit-unified-status"] = "rejected");
        break;
      case "overage-active":
        this.setOverageScenarioHeaders(t, "allowed");
        break;
      case "overage-warning":
        this.setOverageScenarioHeaders(t, "allowed_warning");
        break;
      case "overage-exhausted":
        this.setOverageScenarioHeaders(t, "rejected");
        break;
      case "out-of-credits":
        this.setOverageScenarioHeaders(t, "rejected", "out_of_credits");
        break;
      case "org-zero-credit-limit":
        this.setOverageScenarioHeaders(t, "rejected", "org_service_level_disabled");
        break;
      case "org-spend-cap-hit":
        this.setOverageScenarioHeaders(t, "rejected", "org_level_disabled_until"),
          this.setOverages({ isEnabled: !0, balanceCents: 6532, spendLimitCents: 4000, usedCents: 4000 });
        break;
      case "member-zero-credit-limit":
        this.setOverageScenarioHeaders(t, "rejected", "member_zero_credit_limit");
        break;
      case "seat-tier-zero-credit-limit":
        this.setOverageScenarioHeaders(t, "rejected", "seat_tier_zero_credit_limit");
        break;
      case "opus-limit": {
        (this.exceededLimits = [{ type: "seven_day_opus", resetsAt: r }]),
          this.updateRepresentativeClaim(),
          (this.headers["anthropic-ratelimit-unified-status"] = "rejected");
        break;
      }
      case "opus-warning": {
        this.headers = {
          "anthropic-ratelimit-unified-status": "allowed_warning",
          "anthropic-ratelimit-unified-reset": String(r),
          "anthropic-ratelimit-unified-representative-claim": "seven_day_opus",
        };
        break;
      }
      case "sonnet-limit": {
        (this.exceededLimits = [{ type: "seven_day_sonnet", resetsAt: r }]),
          this.updateRepresentativeClaim(),
          (this.headers["anthropic-ratelimit-unified-status"] = "rejected");
        break;
      }
      case "sonnet-warning": {
        this.headers = {
          "anthropic-ratelimit-unified-status": "allowed_warning",
          "anthropic-ratelimit-unified-reset": String(r),
          "anthropic-ratelimit-unified-representative-claim": "seven_day_sonnet",
        };
        break;
      }
      case "fast-mode-limit": {
        this.updateRepresentativeClaim(),
          (this.headers["anthropic-ratelimit-unified-status"] = "rejected"),
          (this.fastModeRateLimitDurationMs = 600000);
        break;
      }
      case "fast-mode-short-limit": {
        this.updateRepresentativeClaim(),
          (this.headers["anthropic-ratelimit-unified-status"] = "rejected"),
          (this.fastModeRateLimitDurationMs = 1e4);
        break;
      }
      case "extra-usage-required": {
        this.headerless429Message = "Usage credits are required for long context requests.";
        break;
      }
      default:
        break;
    }
  }
  setOverageScenarioHeaders(e, t, r) {
    if (this.exceededLimits.length === 0) this.exceededLimits = [{ type: "five_hour", resetsAt: e }];
    if (
      (this.updateRepresentativeClaim(),
      (this.headers["anthropic-ratelimit-unified-status"] = "rejected"),
      (this.headers["anthropic-ratelimit-unified-overage-status"] = t),
      r)
    )
      this.headers["anthropic-ratelimit-unified-overage-disabled-reason"] = r;
    let o = new Date();
    o.setMonth(o.getMonth() + 1, 1),
      o.setHours(0, 0, 0, 0),
      (this.headers["anthropic-ratelimit-unified-overage-reset"] = String(Math.floor(o.getTime() / 1000)));
  }
  setRateLimitTier(e) {
    (this.enabled = !0), (this.rateLimitTier = e);
  }
  setSubscriptionType(e) {
    (this.enabled = !0), (this.subscriptionType = e);
  }
  setBillingAccess(e) {
    (this.enabled = !0), (this.billingAccessOverride = e);
  }
  setTrial(e) {
    if (e === null) {
      this.trial = null;
      return;
    }
    (this.enabled = !0), (this.trial = e);
  }
  setOverages(e) {
    if (e === null) {
      this.overages = null;
      return;
    }
    this.overages = {
      isEnabled: !1,
      balanceCents: 0,
      spendLimitCents: 15000,
      usedCents: 0,
      currency: "USD",
      paymentMethod: { type: "card", brand: "visa", last4: "4242" },
      autoReload: !1,
      purchaseOutcome: "success",
      pollCount: 0,
      ...this.overages,
      ...e,
    };
  }
  checkFastModeRateLimit(e) {
    if (this.fastModeRateLimitDurationMs === null) return null;
    if (!e) return null;
    if (this.fastModeRateLimitExpiresAt !== null && Date.now() >= this.fastModeRateLimitExpiresAt)
      return this.reset(), null;
    if (this.fastModeRateLimitExpiresAt === null)
      this.fastModeRateLimitExpiresAt = Date.now() + this.fastModeRateLimitDurationMs;
    let t = this.fastModeRateLimitExpiresAt - Date.now(),
      r = { ...this.headers };
    return (r["retry-after"] = String(Math.max(1, Math.ceil(t / 1000)))), r;
  }
}

var bN = new J(() => new Zp());

var tf = {
  fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0,
  SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : void 0,
  EventSource: globalThis.EventSource,
};

var Rl = (e) => Uint8Array.from(atob(e), (t) => t.charCodeAt(0));

var Ze = {
    staleTTL: 60000,
    maxAge: 14400000,
    cacheKey: "gbFeaturesCache",
    backgroundSync: !0,
    maxEntries: 10,
    disableIdleStreams: !1,
    idleStreamInterval: 20000,
    disableCache: !1,
  },
  Mt = Fr(),
  pt = {
    fetchFeaturesCall: (e) => {
      let { host: t, clientKey: r, headers: o } = e;
      return Mt.fetch(`${t}/api/features/${r}`, { headers: o });
    },
    fetchRemoteEvalCall: (e) => {
      let { host: t, clientKey: r, payload: o, headers: u } = e,
        d = { method: "POST", headers: { "Content-Type": "application/json", ...u }, body: JSON.stringify(o) };
      return Mt.fetch(`${t}/api/eval/${r}`, d);
    },
    eventSourceCall: (e) => {
      let { host: t, clientKey: r, headers: o } = e;
      if (o) return new Mt.EventSource(`${t}/sub/${r}`, { headers: o });
      return new Mt.EventSource(`${t}/sub/${r}`);
    },
    startIdleListener: () => {
      let e;
      if (!(typeof window < "u" && typeof document < "u")) return;
      let r = () => {
        if (document.visibilityState === "visible") window.clearTimeout(e), yf();
        else if (document.visibilityState === "hidden") e = window.setTimeout(bf, Ze.idleStreamInterval);
      };
      return (
        document.addEventListener("visibilitychange", r), () => document.removeEventListener("visibilitychange", r)
      );
    },
    stopIdleListener: () => {},
  };

try {
  if (globalThis.localStorage) Mt.localStorage = globalThis.localStorage;
} catch (e) {}

var ir = new Map(),
  Ef = !1,
  Vt = new Map(),
  ii = new Map(),
  sr = new Map(),
  lr = new Set();

async function PN() {
  if (Ef) return;
  Ef = !0;
  try {
    if (Mt.localStorage) {
      let e = await Mt.localStorage.getItem(Ze.cacheKey);
      if (!Ze.disableCache && e) {
        let t = JSON.parse(e);
        if (t && Array.isArray(t))
          t.forEach((r) => {
            let [o, u] = r;
            Vt.set(o, { ...u, staleAt: new Date(u.staleAt) });
          });
        Rf();
      }
    }
  } catch (e) {}
  if (!Ze.disableIdleStreams) {
    let e = pt.startIdleListener();
    if (e) pt.stopIdleListener = e;
  }
}

var NN = /^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/,
  zl = { revert: function () {} },
  fi = new Map(),
  Hl = new Set();

var VN = function (t) {
    return t.innerHTML;
  },
  GN = function (t, r) {
    return (t.innerHTML = r);
  };

var KN = function (t) {
    return { parentNode: t.parentElement, insertBeforeNode: t.nextElementSibling };
  },
  jN = function (t, r) {
    if (r.insertBeforeNode && !r.parentNode.contains(r.insertBeforeNode)) return;
    r.parentNode.insertBefore(t, r.insertBeforeNode);
  };

var WN = function (t, r) {
    return r ? (t.className = r) : t.removeAttribute("class");
  },
  YN = function (t) {
    return t.className;
  };

var $N = function (t) {
    return function (r) {
      var o;
      return (o = r.getAttribute(t)) != null ? o : null;
    };
  },
  qN = function (t) {
    return function (r, o) {
      return o !== null ? r.setAttribute(t, o) : r.removeAttribute(t);
    };
  };

var li;

function JN(e) {
  if (!li) li = document.createElement("div");
  return (li.innerHTML = e), li.innerHTML;
}

var Ll;

function rx() {
  if (typeof document > "u") return;
  if (!Ll)
    Ll = new MutationObserver(function () {
      kf();
    });
  kf(), Ll.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !1, characterData: !1 });
}

rx();

var ax = { html: Ul, classes: Xr, attribute: pi, position: xf, declarative: ix },
  Uf = ax;

var Vl = {};

var mx = "Feature Evaluated",
  gx = "Experiment Viewed";

var ur = typeof window < "u" && typeof document < "u",
  kx = gf();

class Oi {
  constructor(e) {
    if (
      ((e = e || {}),
      (this.version = kx),
      (this._options = this.context = e),
      (this._renderer = e.renderer || null),
      (this._trackedExperiments = new Set()),
      (this._completedChangeIds = new Set()),
      (this._trackedFeatures = {}),
      (this.debug = !!e.debug),
      (this._subscriptions = new Set()),
      (this.ready = !1),
      (this._assigned = new Map()),
      (this._activeAutoExperiments = new Map()),
      (this._triggeredExpKeys = new Set()),
      (this._initialized = !1),
      (this._redirectedUrl = ""),
      (this._deferredTrackingCalls = new Map()),
      (this._autoExperimentsAllowed = !e.disableExperimentsOnLoad),
      (this._destroyCallbacks = []),
      (this.logs = []),
      (this.log = this.log.bind(this)),
      (this._saveDeferredTrack = this._saveDeferredTrack.bind(this)),
      (this._fireSubscriptions = this._fireSubscriptions.bind(this)),
      (this._recordChangedId = this._recordChangedId.bind(this)),
      e.remoteEval)
    ) {
      if (e.decryptionKey) throw Error("Encryption is not available for remoteEval");
      if (!e.clientKey) throw Error("Missing clientKey");
      let t = !1;
      try {
        t = !!new URL(e.apiHost || "").hostname.match(/growthbook\.io$/i);
      } catch (r) {}
      if (t) throw Error("Cannot use remoteEval on GrowthBook Cloud");
    } else if (e.cacheKeyAttributes) throw Error("cacheKeyAttributes are only used for remoteEval");
    if (e.stickyBucketService) {
      let t = e.stickyBucketService;
      this._saveStickyBucketAssignmentDoc = (r) => t.saveAssignments(r);
    }
    if (e.plugins) for (let t of e.plugins) t(this);
    if (e.features) this.ready = !0;
    if (ur && e.enableDevMode) (window._growthbook = this), document.dispatchEvent(new Event("gbloaded"));
    if (e.experiments) (this.ready = !0), this._updateAllAutoExperiments();
    if (this._options.stickyBucketService && this._options.stickyBucketAssignmentDocs)
      for (let t in this._options.stickyBucketAssignmentDocs) {
        let r = this._options.stickyBucketAssignmentDocs[t];
        if (r) this._options.stickyBucketService.saveAssignments(r).catch(() => {});
      }
    if (this.ready) this.refreshStickyBuckets(this.getPayload());
  }
  async setPayload(e) {
    this._payload = e;
    let t = await Wf(e, this._options.decryptionKey);
    if (((this._decryptedPayload = t), await this.refreshStickyBuckets(t), t.features))
      this._options.features = t.features;
    if (t.savedGroups) this._options.savedGroups = t.savedGroups;
    if (t.experiments) (this._options.experiments = t.experiments), this._updateAllAutoExperiments();
    (this.ready = !0), this._render();
  }
  initSync(e) {
    this._initialized = !0;
    let t = e.payload;
    if (t.encryptedExperiments || t.encryptedFeatures) throw Error("initSync does not support encrypted payloads");
    if (this._options.stickyBucketService && !this._options.stickyBucketAssignmentDocs)
      this._options.stickyBucketAssignmentDocs = this.generateStickyBucketAssignmentDocsSync(
        this._options.stickyBucketService,
        t,
      );
    if (((this._payload = t), (this._decryptedPayload = t), t.features)) this._options.features = t.features;
    if (t.experiments) (this._options.experiments = t.experiments), this._updateAllAutoExperiments();
    return (this.ready = !0), si(this, e), this;
  }
  async init(e) {
    if (((this._initialized = !0), (e = e || {}), e.cacheSettings)) kl(e.cacheSettings);
    if (e.payload) return await this.setPayload(e.payload), si(this, e), { success: !0, source: "init" };
    else {
      let { data: t, ...r } = await this._refresh({ ...e, allowStale: !0 });
      return si(this, e), await this.setPayload(t || {}), r;
    }
  }
  async loadFeatures(e) {
    (e = e || {}),
      await this.init({
        skipCache: e.skipCache,
        timeout: e.timeout,
        streaming: (this._options.backgroundSync ?? !0) && (e.autoRefresh || this._options.subscribeToChanges),
      });
  }
  async refreshFeatures(e) {
    let t = await this._refresh({ ...(e || {}), allowStale: !1 });
    if (t.data) await this.setPayload(t.data);
  }
  getApiInfo() {
    return [this.getApiHosts().apiHost, this.getClientKey()];
  }
  getApiHosts() {
    return Yf(this._options);
  }
  getClientKey() {
    return this._options.clientKey || "";
  }
  getPayload() {
    return this._payload || { features: this.getFeatures(), experiments: this.getExperiments() };
  }
  getDecryptedPayload() {
    return this._decryptedPayload || this.getPayload();
  }
  isRemoteEval() {
    return this._options.remoteEval || !1;
  }
  getCacheKeyAttributes() {
    return this._options.cacheKeyAttributes;
  }
  async _refresh(e) {
    let { timeout: t, skipCache: r, allowStale: o, streaming: u } = e;
    if (!this._options.clientKey) throw Error("Missing clientKey");
    return Tf({
      instance: this,
      timeout: t,
      skipCache: r || this._options.disableCache,
      allowStale: o,
      backgroundSync: u ?? this._options.backgroundSync ?? !0,
    });
  }
  _render() {
    if (this._renderer)
      try {
        this._renderer();
      } catch (e) {
        console.error("Failed to render", e);
      }
  }
  setFeatures(e) {
    (this._options.features = e), (this.ready = !0), this._render();
  }
  async setEncryptedFeatures(e, t, r) {
    let o = await Cn(e, t || this._options.decryptionKey, r);
    this.setFeatures(JSON.parse(o));
  }
  setExperiments(e) {
    (this._options.experiments = e), (this.ready = !0), this._updateAllAutoExperiments();
  }
  async setEncryptedExperiments(e, t, r) {
    let o = await Cn(e, t || this._options.decryptionKey, r);
    this.setExperiments(JSON.parse(o));
  }
  async setAttributes(e) {
    if (((this._options.attributes = e), this._options.stickyBucketService)) await this.refreshStickyBuckets();
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render(), this._updateAllAutoExperiments();
  }
  async updateAttributes(e) {
    return this.setAttributes({ ...this._options.attributes, ...e });
  }
  async setAttributeOverrides(e) {
    if (((this._options.attributeOverrides = e), this._options.stickyBucketService)) await this.refreshStickyBuckets();
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render(), this._updateAllAutoExperiments();
  }
  async setForcedVariations(e) {
    if (((this._options.forcedVariations = e || {}), this._options.remoteEval)) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render(), this._updateAllAutoExperiments();
  }
  setForcedFeatures(e) {
    (this._options.forcedFeatureValues = e), this._render();
  }
  async setURL(e) {
    if (e === this._options.url) return;
    if (((this._options.url = e), (this._redirectedUrl = ""), this._options.remoteEval)) {
      await this._refreshForRemoteEval(), this._updateAllAutoExperiments(!0);
      return;
    }
    this._updateAllAutoExperiments(!0);
  }
  getAttributes() {
    return { ...this._options.attributes, ...this._options.attributeOverrides };
  }
  getForcedVariations() {
    return this._options.forcedVariations || {};
  }
  getForcedFeatures() {
    return this._options.forcedFeatureValues || new Map();
  }
  getStickyBucketAssignmentDocs() {
    return this._options.stickyBucketAssignmentDocs || {};
  }
  getUrl() {
    return this._options.url || "";
  }
  getFeatures() {
    return this._options.features || {};
  }
  getExperiments() {
    return this._options.experiments || [];
  }
  getCompletedChangeIds() {
    return Array.from(this._completedChangeIds);
  }
  subscribe(e) {
    return (
      this._subscriptions.add(e),
      () => {
        this._subscriptions.delete(e);
      }
    );
  }
  async _refreshForRemoteEval() {
    if (!this._options.remoteEval) return;
    if (!this._initialized) return;
    let e = await this._refresh({ allowStale: !1 });
    if (e.data) await this.setPayload(e.data);
  }
  getAllResults() {
    return new Map(this._assigned);
  }
  onDestroy(e) {
    this._destroyCallbacks.push(e);
  }
  isDestroyed() {
    return !!this._destroyed;
  }
  destroy() {
    if (
      ((this._destroyed = !0),
      this._destroyCallbacks.forEach((e) => {
        try {
          e();
        } catch (t) {
          console.error(t);
        }
      }),
      this._subscriptions.clear(),
      this._assigned.clear(),
      this._trackedExperiments.clear(),
      this._completedChangeIds.clear(),
      this._deferredTrackingCalls.clear(),
      (this._trackedFeatures = {}),
      (this._destroyCallbacks = []),
      (this._payload = void 0),
      (this._saveStickyBucketAssignmentDoc = void 0),
      Af(this),
      (this.logs = []),
      ur && window._growthbook === this)
    )
      delete window._growthbook;
    this._activeAutoExperiments.forEach((e) => {
      e.undo();
    }),
      this._activeAutoExperiments.clear(),
      this._triggeredExpKeys.clear();
  }
  setRenderer(e) {
    this._renderer = e;
  }
  forceVariation(e, t) {
    if (
      ((this._options.forcedVariations = this._options.forcedVariations || {}),
      (this._options.forcedVariations[e] = t),
      this._options.remoteEval)
    ) {
      this._refreshForRemoteEval();
      return;
    }
    this._updateAllAutoExperiments(), this._render();
  }
  run(e) {
    let { result: t } = yi(e, null, this._getEvalContext());
    return this._fireSubscriptions(e, t), t;
  }
  triggerExperiment(e) {
    if ((this._triggeredExpKeys.add(e), !this._options.experiments)) return null;
    return this._options.experiments
      .filter((r) => r.key === e)
      .map((r) => this._runAutoExperiment(r))
      .filter((r) => r !== null);
  }
  triggerAutoExperiments() {
    (this._autoExperimentsAllowed = !0), this._updateAllAutoExperiments(!0);
  }
  _getEvalContext() {
    return { user: this._getUserContext(), global: this._getGlobalContext(), stack: { evaluatedFeatures: new Set() } };
  }
  _getUserContext() {
    return {
      attributes: this._options.user
        ? { ...this._options.user, ...this._options.attributes }
        : this._options.attributes,
      enableDevMode: this._options.enableDevMode,
      blockedChangeIds: this._options.blockedChangeIds,
      stickyBucketAssignmentDocs: this._options.stickyBucketAssignmentDocs,
      url: this._getContextUrl(),
      forcedVariations: this._options.forcedVariations,
      forcedFeatureValues: this._options.forcedFeatureValues,
      attributeOverrides: this._options.attributeOverrides,
      saveStickyBucketAssignmentDoc: this._saveStickyBucketAssignmentDoc,
      trackingCallback: this._options.trackingCallback,
      onFeatureUsage: this._options.onFeatureUsage,
      devLogs: this.logs,
      trackedExperiments: this._trackedExperiments,
      trackedFeatureUsage: this._trackedFeatures,
    };
  }
  _getGlobalContext() {
    return {
      features: this._options.features,
      experiments: this._options.experiments,
      log: this.log,
      enabled: this._options.enabled,
      qaMode: this._options.qaMode,
      savedGroups: this._options.savedGroups,
      groups: this._options.groups,
      overrides: this._options.overrides,
      onExperimentEval: this._subscriptions.size > 0 ? this._fireSubscriptions : void 0,
      recordChangeId: this._recordChangedId,
      saveDeferredTrack: this._saveDeferredTrack,
      eventLogger: this._options.eventLogger,
    };
  }
  _runAutoExperiment(e, t) {
    let r = this._activeAutoExperiments.get(e);
    if (e.manual && !this._triggeredExpKeys.has(e.key) && !r) return null;
    let o = this._isAutoExperimentBlockedByContext(e),
      u,
      d;
    if (o) u = Fe(this._getEvalContext(), e, -1, !1, "");
    else ({ result: u, trackingCall: d } = yi(e, null, this._getEvalContext())), this._fireSubscriptions(e, u);
    let _ = JSON.stringify(u.value);
    if (!t && u.inExperiment && r && r.valueHash === _) return u;
    if (r) this._undoActiveAutoExperiment(e);
    if (u.inExperiment) {
      let A = $r(e);
      if (A === "redirect" && u.value.urlRedirect && e.urlPatterns) {
        let C = e.persistQueryString ? hf(this._getContextUrl(), u.value.urlRedirect) : u.value.urlRedirect;
        if (jr(C, e.urlPatterns))
          return this.log("Skipping redirect because original URL matches redirect URL", { id: e.key }), u;
        this._redirectedUrl = C;
        let { navigate: k, delay: M } = this._getNavigateFunction();
        if (k)
          if (ur)
            Promise.all([
              ...(d ? [oi(d, this._options.maxNavigateDelay ?? 1000)] : []),
              new Promise((x) => window.setTimeout(x, this._options.navigateDelay ?? M)),
            ]).then(() => {
              try {
                k(C);
              } catch (x) {
                console.error(x);
              }
            });
          else
            try {
              k(C);
            } catch (x) {
              console.error(x);
            }
      } else if (A === "visual") {
        let C = this._options.applyDomChangesCallback
          ? this._options.applyDomChangesCallback(u.value)
          : this._applyDOMChanges(u.value);
        if (C) this._activeAutoExperiments.set(e, { undo: C, valueHash: _ });
      }
    }
    return u;
  }
  _undoActiveAutoExperiment(e) {
    let t = this._activeAutoExperiments.get(e);
    if (t) t.undo(), this._activeAutoExperiments.delete(e);
  }
  _updateAllAutoExperiments(e) {
    if (!this._autoExperimentsAllowed) return;
    let t = this._options.experiments || [],
      r = new Set(t);
    this._activeAutoExperiments.forEach((o, u) => {
      if (!r.has(u)) o.undo(), this._activeAutoExperiments.delete(u);
    });
    for (let o of t) {
      let u = this._runAutoExperiment(o, e);
      if (u !== null && u !== void 0 && u.inExperiment && $r(o) === "redirect") break;
    }
  }
  _fireSubscriptions(e, t) {
    let r = e.key,
      o = this._assigned.get(r);
    if (!o || o.result.inExperiment !== t.inExperiment || o.result.variationId !== t.variationId)
      this._assigned.set(r, { experiment: e, result: t }),
        this._subscriptions.forEach((u) => {
          try {
            u(e, t);
          } catch (d) {
            console.error(d);
          }
        });
  }
  _recordChangedId(e) {
    this._completedChangeIds.add(e);
  }
  isOn(e) {
    return this.evalFeature(e).on;
  }
  isOff(e) {
    return this.evalFeature(e).off;
  }
  getFeatureValue(e, t) {
    let r = this.evalFeature(e).value;
    return r === null ? t : r;
  }
  feature(e) {
    return this.evalFeature(e);
  }
  evalFeature(e) {
    return Ai(e, this._getEvalContext());
  }
  log(e, t) {
    if (!this.debug) return;
    if (this._options.log) this._options.log(e, t);
    else console.log(e, t);
  }
  getDeferredTrackingCalls() {
    return Array.from(this._deferredTrackingCalls.values());
  }
  setDeferredTrackingCalls(e) {
    this._deferredTrackingCalls = new Map(
      e.filter((t) => t && t.experiment && t.result).map((t) => [Ci(t.experiment, t.result), t]),
    );
  }
  async fireDeferredTrackingCalls() {
    if (!this._options.trackingCallback) return;
    let e = [];
    this._deferredTrackingCalls.forEach((t) => {
      if (!t || !t.experiment || !t.result) console.error("Invalid deferred tracking call", { call: t });
      else e.push(this._options.trackingCallback(t.experiment, t.result));
    }),
      this._deferredTrackingCalls.clear(),
      await Promise.all(e);
  }
  setTrackingCallback(e) {
    (this._options.trackingCallback = e), this.fireDeferredTrackingCalls();
  }
  setEventLogger(e) {
    this._options.eventLogger = e;
  }
  async logEvent(e, t) {
    if (this._destroyed) {
      console.error("Cannot log event to destroyed GrowthBook instance");
      return;
    }
    if (this._options.enableDevMode)
      this.logs.push({ eventName: e, properties: t, timestamp: Date.now().toString(), logType: "event" });
    if (this._options.eventLogger)
      try {
        await this._options.eventLogger(e, t || {}, this._getUserContext());
      } catch (r) {
        console.error(r);
      }
    else console.error("No event logger configured");
  }
  _saveDeferredTrack(e) {
    this._deferredTrackingCalls.set(Ci(e.experiment, e.result), e);
  }
  _getContextUrl() {
    return this._options.url || (ur ? window.location.href : "");
  }
  _isAutoExperimentBlockedByContext(e) {
    let t = $r(e);
    if (t === "visual") {
      if (this._options.disableVisualExperiments) return !0;
      if (this._options.disableJsInjection) {
        if (e.variations.some((r) => r.js)) return !0;
      }
    } else if (t === "redirect") {
      if (this._options.disableUrlRedirectExperiments) return !0;
      try {
        let r = new URL(this._getContextUrl());
        for (let o of e.variations) {
          if (!o || !o.urlRedirect) continue;
          let u = new URL(o.urlRedirect);
          if (this._options.disableCrossOriginUrlRedirectExperiments) {
            if (u.protocol !== r.protocol) return !0;
            if (u.host !== r.host) return !0;
          }
        }
      } catch (r) {
        return this.log("Error parsing current or redirect URL", { id: e.key, error: r }), !0;
      }
    } else return !0;
    if (e.changeId && (this._options.blockedChangeIds || []).includes(e.changeId)) return !0;
    return !1;
  }
  getRedirectUrl() {
    return this._redirectedUrl;
  }
  _getNavigateFunction() {
    if (this._options.navigate) return { navigate: this._options.navigate, delay: 0 };
    else if (ur)
      return {
        navigate: (e) => {
          window.location.replace(e);
        },
        delay: 100,
      };
    return { navigate: null, delay: 0 };
  }
  _applyDOMChanges(e) {
    if (!ur) return;
    let t = [];
    if (e.css) {
      let r = document.createElement("style");
      (r.innerHTML = e.css), document.head.appendChild(r), t.push(() => r.remove());
    }
    if (e.js) {
      let r = document.createElement("script");
      if (((r.innerHTML = e.js), this._options.jsInjectionNonce)) r.nonce = this._options.jsInjectionNonce;
      document.head.appendChild(r), t.push(() => r.remove());
    }
    if (e.domMutations)
      e.domMutations.forEach((r) => {
        t.push(Uf.declarative(r).revert);
      });
    return () => {
      t.forEach((r) => r());
    };
  }
  async refreshStickyBuckets(e) {
    if (this._options.stickyBucketService) {
      let t = this._getEvalContext(),
        r = await jf(t, this._options.stickyBucketService, e);
      this._options.stickyBucketAssignmentDocs = r;
    }
  }
  generateStickyBucketAssignmentDocsSync(e, t) {
    if (!("getAllAssignmentsSync" in e)) {
      console.error("generating StickyBucketAssignmentDocs docs requires StickyBucketServiceSync");
      return;
    }
    let r = this._getEvalContext(),
      o = jl(r, t);
    return e.getAllAssignmentsSync(o);
  }
  inDevMode() {
    return !!this._options.enableDevMode;
  }
}

var wx = "tengu_ax_screen_reader";

class Xf {
  #t;
  #r;
  #o = null;
  #n = null;
  #i = !1;
  #e = [];
  swapRemoteGateReader(e) {
    let t = this.#o;
    return (this.#o = e), t;
  }
  isEnabled() {
    if (this.#t !== void 0) return this.#t;
    let e, t;
    if (dR("--ax-screen-reader")) (e = !0), (t = "flag");
    else {
      let o = a.CLAUDE_AX_SCREEN_READER;
      if (o !== void 0) (e = o), (t = "env");
      else (e = Je().axScreenReader === !0), (t = "settings");
    }
    if (!e) return (this.#t = !1);
    let r = this.#o?.(wx, !0) ?? !0;
    return (this.#r = r ? t : void 0), (this.#t = r);
  }
  activationSource() {
    return this.isEnabled() ? this.#r : void 0;
  }
  markAnnouncementWritten(e) {
    if (this.#n === null) this.#n = e;
  }
  endStartupQuiet() {
    this.#i = !0;
  }
  startupQuietOpenedAtMs() {
    return this.#i ? null : this.#n;
  }
  queueAnnouncement(e) {
    if ((this.#e.push(e), this.#e.length > $f)) this.#e.splice(0, this.#e.length - $f);
  }
  drainAnnouncements() {
    return this.#e.splice(0);
  }
  reset() {
    (this.#t = void 0), (this.#r = void 0), (this.#n = null), (this.#i = !1), (this.#e.length = 0);
  }
}

var Px = new J(() => new Xf());

var Mx = 3000,
  Dx = 600000;

var Ix = 50,
  Nx = 5000;

var $f = 16;

var Qf = "tengu_thistle_grebe";

class Jf {
  clientData = null;
  feature = null;
  registerClientData(e) {
    let t = this.clientData;
    return (this.clientData = e), t;
  }
  registerFeature(e) {
    let t = this.feature;
    return (this.feature = e), t;
  }
}

var wi = new Jf();

class Zf {
  modelSteerFloor = null;
  promptModel = void 0;
  latched = void 0;
  registerModelFloor(e) {
    let t = this.modelSteerFloor;
    return (this.modelSteerFloor = e), t;
  }
  recordPromptModel(e) {
    if (this.latched === void 0 && this.promptModel === void 0) this.promptModel = e;
  }
  latch(e) {
    this.latched = e;
  }
  resetLatch() {
    (this.latched = void 0), (this.promptModel = void 0);
  }
}

var xx = new Mn(() => new Zf());

var knr = `## Delegating to subagents

Subagents multiply cost and time: each one re-establishes context, re-explores, and reports back, and you then re-read its report. Delegate only when the payoff clearly exceeds that overhead. Before spawning, apply these tests:

- Do the work inline when it is a small, bounded sub-task \u2014 a few file reads, one search, a short edit, a single check. Do not spawn a subagent for work you could finish yourself in a handful of tool calls.
- Do not fan out multiple subagents on a single small task. Parallel subagents are for genuinely independent, sizeable tracks (unrelated modules, a wide multi-file investigation), not for splitting one modest job into pieces.
- Do not spawn a subagent to review, re-verify, or double-check work you can verify inline. Verification that fits in your own loop belongs in your own loop.
- If you delegate, commit to the delegation: do not redo the subagent's work while waiting, and do not re-derive its findings once it reports. If you find yourself repeating what a subagent is doing, you should not have spawned it.
- Keep spawn counts low. One well-briefed subagent for a large independent chunk is worth more than several loosely-briefed ones; brief it precisely the first time rather than launching, waiting, and re-briefing.

Delegate for work that is genuinely independent, large enough to justify a fresh context, or naturally parallel. Otherwise, do it yourself.`;

var Ux = "tengu_cinder_relay";

class r_ {
  reader = null;
  register(e) {
    let t = this.reader;
    return (this.reader = e), t;
  }
}

var o_ = new r_();

var zx = "tengu_opal_circuit";

class s_ {
  reader = null;
  register(e) {
    let t = this.reader;
    return (this.reader = e), t;
  }
}

var a_ = new s_();

var kY = {};

je(kY, {
  createToolDescribeSlot: () => c_,
  default: () => kY,
  invalidateToolDescriptions: () => Fx,
  resolveToolDescription: () => Bx,
  setToolDescribeInvalidator: () => Hx,
  setToolDescribeResolver: () => Vx,
  toolDescribeSlot: () => Gt,
});

var Jr = {};

je(Jr, { createToolDescribeSlot: () => c_, default: () => Jr });

var Gt = Jr.createToolDescribeSlot();

var Fx = Gt.invalidateToolDescriptions;

var Bx = Gt.resolveToolDescription;

var Hx = Gt.setToolDescribeInvalidator;

var Vx = Gt.setToolDescribeResolver;

class u_ {
  byKey = new Map();
  keepAcrossTokenChanges = void 0;
  generation = 0;
  get(e) {
    return this.byKey.get(e);
  }
  stamp() {
    return this.generation;
  }
  register(e, t, r) {
    if (r === this.generation) this.byKey.set(e, t);
  }
  get size() {
    return this.byKey.size;
  }
  invalidateAll() {
    this.byKey.clear(), (this.generation += 1);
  }
  dropInFlightComposes() {
    this.generation += 1;
  }
}

var Gx = new J(() => new u_());

var s4t = {
  get(e) {
    return wn().get(e);
  },
  stamp() {
    return wn().stamp();
  },
  register(e, t, r) {
    wn().register(e, t, r);
  },
  get size() {
    return wn().size;
  },
};

var Kx = "tengu_still_kestrel",
  Wl = null;

function p_(e) {
  let t = Wl;
  return (Wl = e), t;
}

kY.setToolDescribeInvalidator(M3);

class __ {
  reader = null;
  register(e) {
    let t = this.reader;
    return (this.reader = e), t;
  }
}

var m_ = new __();

class T_ {
  cachedEmail = null;
  emailFetchPromise = null;
  coreUserData = ai(
    (e) => {
      let t = t0(),
        r = ie(),
        o,
        u,
        d;
      if (e) {
        if (((o = Fn() ?? void 0), (u = mw() ?? void 0), o && r.claudeCodeFirstTokenDate)) {
          let M = new Date(r.claudeCodeFirstTokenDate).getTime();
          if (!isNaN(M)) d = M;
        }
      }
      let _ = dO(),
        A = _ ?? On(),
        C = S_(A?.organizationUuid),
        k = S_(A?.accountUuid);
      return {
        deviceId: t,
        sessionId: K(),
        email: _ ? void 0 : this.email(),
        appVersion: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.252",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-08-31T16:02:57Z",
          GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
          HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
        platform: KJe(),
        organizationUuid: C,
        accountUuid: k,
        userType: "external",
        subscriptionType: o,
        rateLimitTier: u,
        firstTokenTime: d,
        ...(Me(a.GITHUB_ACTIONS) && {
          githubActionsMetadata: {
            actor: a.GITHUB_ACTOR,
            actorId: a.GITHUB_ACTOR_ID,
            repository: a.GITHUB_REPOSITORY,
            repositoryId: a.GITHUB_REPOSITORY_ID,
            repositoryOwner: a.GITHUB_REPOSITORY_OWNER,
            repositoryOwnerId: a.GITHUB_REPOSITORY_OWNER_ID,
          },
        }),
      };
    },
    (e) => `${e}|${rme()}`,
  );
  gitEmail = ai(async () => (await JEt("user.email")) ?? void 0);
  gitUserName = ai(async () => (await JEt("user.name")) ?? void 0);
  async init() {
    if (this.cachedEmail === null && !this.emailFetchPromise)
      (this.emailFetchPromise = this.emailAsync()),
        (this.cachedEmail = await this.emailFetchPromise),
        (this.emailFetchPromise = null),
        this.coreUserData.cache.clear?.();
  }
  reset() {
    (this.cachedEmail = null),
      (this.emailFetchPromise = null),
      this.coreUserData.cache.clear?.(),
      this.gitEmail.cache.clear?.();
  }
  email() {
    return;
  }
  async emailAsync() {
    return;
  }
}

var h_ = null;

function Zr() {
  return (h_ ??= new T_()), h_;
}

var jx = 8;

var Wx = 60000,
  Yx = 5000,
  $x = 5000,
  y_ = "GrowthBook pre-init OAuth refresh";

class Xl {
  deps;
  client = null;
  loggedNonObjectFeatureOnce = !1;
  loggedMalformedExperimentOnce = !1;
  loggedValuelessPayloadOnce = !1;
  currentBeforeExitHandler = null;
  currentExitHandler = null;
  clientCreatedWithAuth = !1;
  clientAuthResolutionTransientlyFailed = !1;
  clientAuthBearer = void 0;
  clientAccountUuid = void 0;
  clientOrganizationUuid = void 0;
  generation = 0;
  experimentDataByFeature = new Map();
  nonDefaultFeatureKeys = new Set();
  remoteEvalFeatureValues = new Map();
  remoteEvalFetchOkCount = 0;
  pendingExposures = new Map();
  loggedExposures = new Set();
  refreshed = Ue();
  environmentOverrides = null;
  environmentOverridesParsed = !1;
  clientPromise = null;
  initializePromise = null;
  refreshLoopController = null;
  refreshLoopBeforeExitListener = null;
  routeSdkRemoteEvalHere = (e) => this.fetchRemoteEval(e);
  disposed = !1;
  credentials;
  storageV5;
  constructor(e) {
    this.deps = e;
  }
  setCredentials(e) {
    if (this.credentials !== void 0 && this.credentials !== e) {
      n("GrowthBook: a credentials store was already handed in; the later one is ignored");
      return;
    }
    this.credentials = e;
  }
  setStorageBackend(e) {
    if (this.storageV5 !== void 0 && this.storageV5 !== e) {
      n("GrowthBook: a storage backend was already handed in; the later one is ignored");
      return;
    }
    this.storageV5 = e;
  }
  refreshOAuthToken() {
    if (O())
      n(`GrowthBook: token-refresh check (credentials store: ${this.credentials === void 0 ? "none" : "handed"})`);
    return this.deps.refreshOAuthTokenIfNeeded(this.credentials, this.storageV5);
  }
  onRefresh(e) {
    let t = !0,
      r = this.refreshed.subscribe(() => R_(e));
    if (this.remoteEvalFeatureValues.size > 0)
      queueMicrotask(() => {
        if (t && this.remoteEvalFeatureValues.size > 0) R_(e);
      });
    return () => {
      (t = !1), r();
    };
  }
  getEnvironmentOverrides() {
    if (this.environmentOverridesParsed) return this.environmentOverrides;
    return (this.environmentOverridesParsed = !0), this.environmentOverrides;
    let e = this.deps.readEnvironmentOverrides();
    if (!e) return this.environmentOverrides;
    try {
      (this.environmentOverrides = V(e)),
        n(
          `GrowthBook: Using env var overrides for ${Object.keys(this.environmentOverrides).length} features: ${Object.keys(this.environmentOverrides).join(", ")}`,
        );
    } catch {
      n(`GrowthBook: Failed to parse CLAUDE_INTERNAL_FC_OVERRIDES: ${e}`, { level: "error" });
    }
    return this.environmentOverrides;
  }
  hasEnvironmentOverride(e) {
    let t = this.getEnvironmentOverrides();
    return t !== null && e in t;
  }
  hasOverride(e) {
    if (this.hasEnvironmentOverride(e)) return !0;
    let t = this.readConfigOverrides();
    return t != null && e in t;
  }
  isFeatureFromExperiment(e) {
    if (this.experimentDataByFeature.has(e)) return !0;
    if (!this.deps.isEnabled()) return !1;
    return (this.deps.readGlobalConfig().cachedExperimentFeatures ?? []).includes(e);
  }
  readConfigOverrides() {
    return;
  }
  getAllFeatures() {
    if (this.remoteEvalFeatureValues.size > 0) return Object.fromEntries(this.remoteEvalFeatureValues);
    return this.deps.readGlobalConfig().cachedGrowthBookFeatures ?? {};
  }
  hasFreshFeatures() {
    return this.remoteEvalFeatureValues.size > 0;
  }
  getNonDefaultFeatureKeys() {
    return this.nonDefaultFeatureKeys;
  }
  getConfigOverrides() {
    return this.readConfigOverrides() ?? {};
  }
  setConfigOverride(e, t) {
    return;
  }
  clearConfigOverrides() {
    return;
  }
  recordDeferredExposure(e, t) {
    let r = t.cachedExperimentData?.[e];
    if (
      typeof r !== "object" ||
      r === null ||
      typeof r.experimentId !== "string" ||
      typeof r.variationId !== "number" ||
      !bs(r.value, t.cachedGrowthBookFeatures?.[e])
    )
      return;
    this.pendingExposures.set(e, { experimentId: r.experimentId, variationId: r.variationId });
  }
  logExposureForFeature(e) {
    if (this.loggedExposures.has(e)) return;
    let t = this.experimentDataByFeature.get(e);
    if (t) {
      if (
        (this.loggedExposures.add(e),
        !this.deps.logExposure({
          experimentId: t.experimentId,
          variationId: t.variationId,
          userAttributes: this.deps.getUserAttributes(),
          experimentMetadata: { feature_id: e },
        }))
      )
        this.loggedExposures.delete(e);
    }
  }
  drainPendingExposures() {
    for (let [e, t] of this.pendingExposures) {
      let r = this.experimentDataByFeature.get(e);
      if (r && r.experimentId === t.experimentId && r.variationId === t.variationId) this.logExposureForFeature(e);
    }
    this.pendingExposures.clear();
  }
  async processRemoteEvalPayload(e) {
    let t = e.getPayload();
    if (!t?.features || Object.keys(t.features).length === 0) return !1;
    let r = new Map(),
      o = new Set(),
      u = {},
      d = [],
      _ = [];
    for (let [k, M] of Object.entries(t.features)) {
      let x = M;
      if (x === null || typeof x !== "object") {
        d.push(`${k}:${x === null ? "null" : typeof x}`);
        continue;
      }
      if ("value" in x && !("defaultValue" in x)) u[k] = { ...x, defaultValue: x.value };
      else u[k] = x;
      if (x.source === "experiment" && x.experimentResult) {
        let { experimentResult: z, experiment: W } = x;
        if (typeof W?.key === "string" && typeof z.variationId === "number")
          r.set(k, { experimentId: W.key, variationId: z.variationId });
        else _.push(`${k}:key=${typeof W?.key},variationId=${typeof z.variationId}`);
      }
      if (x.source !== void 0 && x.source !== "defaultValue" && x.source !== "unknownFeature") o.add(k);
    }
    if (d.length > 0 && !this.loggedNonObjectFeatureOnce)
      (this.loggedNonObjectFeatureOnce = !0),
        h(Error(`processRemoteEvalPayload: skipped non-object features [${d.join(", ")}]`));
    if (_.length > 0 && !this.loggedMalformedExperimentOnce)
      (this.loggedMalformedExperimentOnce = !0),
        h(
          new R(
            `processRemoteEvalPayload: skipped malformed experiment entries [${_.join(", ")}]`,
            "processRemoteEvalPayload: skipped malformed experiment entries",
          ),
        );
    let A = new Map(),
      C = [];
    for (let [k, M] of Object.entries(u)) {
      let x = "value" in M ? M.value : M.defaultValue;
      if (x !== void 0) A.set(k, x);
      else r.delete(k), o.delete(k), delete u[k], C.push(k);
    }
    if (C.length > 0 && !this.loggedValuelessPayloadOnce)
      (this.loggedValuelessPayloadOnce = !0),
        h(
          new R(
            `processRemoteEvalPayload: skipped value-less entries [${C.join(", ")}]`,
            "processRemoteEvalPayload: skipped value-less entries",
          ),
        );
    if (A.size === 0) return !1;
    if ((await e.setPayload({ ...t, features: u }), this.client !== e)) return !1;
    this.experimentDataByFeature.clear();
    for (let [k, M] of r) this.experimentDataByFeature.set(k, M);
    this.nonDefaultFeatureKeys.clear();
    for (let k of o) this.nonDefaultFeatureKeys.add(k);
    this.remoteEvalFeatureValues.clear();
    for (let [k, M] of A) this.remoteEvalFeatureValues.set(k, M);
    return !0;
  }
  syncRemoteEvalToDisk() {
    let e = Object.fromEntries(this.remoteEvalFeatureValues),
      t = {};
    for (let [o, u] of this.experimentDataByFeature)
      t[o] = { experimentId: u.experimentId, variationId: u.variationId, value: this.remoteEvalFeatureValues.get(o) };
    let r = Object.keys(t).sort();
    this.deps.saveGlobalConfig(
      (o) => ({
        ...o,
        cachedGrowthBookFeatures: e,
        cachedExperimentFeatures: r,
        cachedExperimentData: t,
        cachedGrowthBookFeaturesAt: Date.now(),
      }),
      this.storageV5,
    );
  }
  async fetchRemoteEval(e) {
    let t = await this.requestRemoteEval(e);
    if (t?.ok) this.remoteEvalFetchOkCount++;
    return t;
  }
  async requestRemoteEval(e) {
    let { host: t, clientKey: r, payload: o, headers: u } = e;
    if (!this.getFeatureValueWithSource("tengu_gb_eval_authed_enable", !1).value)
      return this.deps.fetchRemoteEvalFromSdk(e);
    let d = {};
    if (this.deps.hasWorkspaceTrust()) {
      try {
        await this.refreshOAuthToken();
      } catch {}
      try {
        let _ = await this.deps.getAuthHeaders();
        if (!_.error) d = _.headers;
      } catch {}
    }
    try {
      let _ = await Fr().fetch(`${t}/api/eval-authed/${r}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...u, ...d },
        body: JSON.stringify(o),
      });
      if (!_.ok)
        return (
          h(Error("GrowthBook eval-authed returned non-ok; falling back to /api/eval")),
          this.deps.fetchRemoteEvalFromSdk(e)
        );
      return _;
    } catch {
      return (
        h(Error("GrowthBook eval-authed fetch threw; falling back to /api/eval")), this.deps.fetchRemoteEvalFromSdk(e)
      );
    }
  }
  getClient() {
    if (this.clientPromise === null) this.clientPromise = this.createClient();
    return this.clientPromise;
  }
  async createClient() {
    if (this.disposed || !this.deps.isEnabled()) return null;
    let e = this.generation,
      t = { headers: {}, error: "trust not established" },
      r = !1;
    if (this.deps.hasWorkspaceTrust()) {
      try {
        await Xt(this.refreshOAuthToken(), $x, y_);
      } catch (k) {
        let M = we(k),
          x = M.message === y_ ? "timeout" : M.name;
        n(`GrowthBook: pre-init OAuth refresh failed (${x})`);
      }
      try {
        t = await this.deps.getAuthHeaders();
      } catch (k) {
        n(`GrowthBook: auth header resolution failed (${we(k).name}), continuing without auth`),
          (t = { headers: {}, error: "auth resolution failed" }),
          (r = !0);
      }
    }
    if (this.disposed || e !== this.generation) return null;
    let o = this.deps.getUserAttributes(),
      u = "sdk-zAZezfDKGoZuXXKe",
      d = "https://api.anthropic.com/",
      _ = !t.error;
    (this.clientCreatedWithAuth = _),
      (this.clientAuthResolutionTransientlyFailed = !_ && (r || t.reasonCode === "wif_error")),
      (this.clientAuthBearer = _ ? t.headers.Authorization : void 0),
      (this.clientAccountUuid = o.accountUUID),
      (this.clientOrganizationUuid = o.organizationUUID),
      (pt.fetchRemoteEvalCall = this.routeSdkRemoteEvalHere);
    let A = new Oi({
      apiHost: d,
      clientKey: u,
      attributes: o,
      remoteEval: !0,
      cacheKeyAttributes: ["id", "organizationUUID"],
      ...(!t.error && { apiHostRequestHeaders: t.headers }),
      ...!1,
    });
    if (((this.client = A), !_)) return { client: A, initialized: Promise.resolve() };
    let C = A.init({ timeout: 5000 })
      .then(async (k) => {
        if (this.client !== A) return;
        let M = await this.processRemoteEvalPayload(A);
        if (this.client !== A) return;
        if (M) this.drainPendingExposures(), this.syncRemoteEvalToDisk(), this.refreshed.emit();
      })
      .catch((k) => {});
    return (
      (this.currentBeforeExitHandler = () => this.client?.destroy()),
      (this.currentExitHandler = () => this.client?.destroy()),
      process.on("beforeExit", this.currentBeforeExitHandler),
      process.on("exit", this.currentExitHandler),
      { client: A, initialized: C }
    );
  }
  initialize() {
    if (this.disposed) return Promise.resolve(null);
    if (this.initializePromise === null) this.initializePromise = this.initializeClient();
    return this.initializePromise;
  }
  async initializeClient() {
    let e = await this.getClient();
    if (!e) return null;
    if ((await e.initialized, this.disposed)) return null;
    return this.startPeriodicRefresh(), e.client;
  }
  async getFeatureValueBlocking(e, t) {
    let r = this.getEnvironmentOverrides();
    if (r && e in r) return r[e];
    let o = this.readConfigOverrides();
    if (o && e in o) return o[e];
    if (!this.deps.isEnabled()) return t;
    let u = await this.initialize();
    if (!u) return t;
    let d,
      _ = this.remoteEvalFeatureValues.get(e);
    if (_ !== void 0) d = ql(_, t);
    else d = u.getFeatureValue(e, t);
    return this.logExposureForFeature(e), d;
  }
  getFeatureValueWithSource(e, t) {
    let r = this.getEnvironmentOverrides();
    if (r && e in r) return { value: r[e], source: "override" };
    let o = this.readConfigOverrides();
    if (o && e in o) return { value: o[e], source: "override" };
    if (!this.deps.isEnabled() && !this.deps.isDiskCacheReadableWhileDisabled())
      return { value: t, source: "disabled" };
    if (this.experimentDataByFeature.has(e)) this.logExposureForFeature(e);
    let u = this.remoteEvalFeatureValues.get(e);
    if (u !== void 0) return { value: ql(u, t), source: "payload" };
    try {
      let d = this.deps.readGlobalConfig(),
        _ = d.cachedGrowthBookFeatures?.[e];
      if (_ !== void 0) return this.recordDeferredExposure(e, d), { value: ql(_, t), source: "disk" };
    } catch {}
    return { value: t, source: "fallback" };
  }
  async checkGateCachedOrBlocking(e) {
    let t = this.getEnvironmentOverrides();
    if (t && e in t) return Boolean(t[e]);
    let r = this.readConfigOverrides();
    if (r && e in r) return Boolean(r[e]);
    if (!this.deps.isEnabled()) return !1;
    if (this.remoteEvalFeatureValues.get(e) === !0) return this.logExposureForFeature(e), !0;
    let o = this.deps.readGlobalConfig();
    if (o.cachedGrowthBookFeatures?.[e] === !0) return this.recordDeferredExposure(e, o), !0;
    return this.getFeatureValueBlocking(e, !1);
  }
  refreshAfterAuthChange(e) {
    if (this.disposed || !this.deps.isEnabled()) return;
    try {
      this.reset({ preservePendingExposures: !0, preserveLoggedExposures: e?.preserveLoggedExposures }),
        this.refreshed.emit(),
        this.initialize().catch((t) => {
          h(we(t));
        });
    } catch (t) {
      h(we(t));
    }
  }
  reset(e) {
    if ((this.stopPeriodicRefresh(), this.currentBeforeExitHandler))
      process.off("beforeExit", this.currentBeforeExitHandler), (this.currentBeforeExitHandler = null);
    if (this.currentExitHandler) process.off("exit", this.currentExitHandler), (this.currentExitHandler = null);
    if (
      (this.client?.destroy(),
      (this.client = null),
      this.generation++,
      (this.clientCreatedWithAuth = !1),
      (this.clientAuthResolutionTransientlyFailed = !1),
      (this.clientAuthBearer = void 0),
      (this.clientAccountUuid = void 0),
      (this.clientOrganizationUuid = void 0),
      !e?.preserveLoggedExposures)
    )
      (this.loggedNonObjectFeatureOnce = !1),
        (this.loggedMalformedExperimentOnce = !1),
        (this.loggedValuelessPayloadOnce = !1);
    if ((this.experimentDataByFeature.clear(), this.nonDefaultFeatureKeys.clear(), !e?.preservePendingExposures))
      this.pendingExposures.clear();
    if (!e?.preserveLoggedExposures) this.loggedExposures.clear();
    this.remoteEvalFeatureValues.clear(),
      (this.clientPromise = null),
      (this.initializePromise = null),
      (this.environmentOverrides = null),
      (this.environmentOverridesParsed = !1);
  }
  dispose() {
    if (((this.disposed = !0), this.reset(), pt.fetchRemoteEvalCall === this.routeSdkRemoteEvalHere))
      pt.fetchRemoteEvalCall = this.deps.fetchRemoteEvalFromSdk;
  }
  async refreshFeatures() {
    if (this.disposed || !this.deps.isEnabled()) return;
    try {
      if (this.clientCreatedWithAuth) {
        await this.refreshOAuthToken().catch((u) => {});
        let r = await this.deps.getAuthHeaders();
        if (this.disposed) return;
        let o = r.error ? void 0 : r.headers.Authorization;
        if (o !== void 0 && o !== this.clientAuthBearer) {
          let u = this.deps.rereadUserAttributes(),
            d = u.accountUUID === this.clientAccountUuid && u.organizationUUID === this.clientOrganizationUuid;
          this.refreshAfterAuthChange({ preserveLoggedExposures: d });
          return;
        }
      } else if (this.clientAuthResolutionTransientlyFailed) {
        let r = await this.deps.getAuthHeaders().catch(() => null);
        if (r && !r.error && r.headers.Authorization) {
          this.refreshAfterAuthChange();
          return;
        }
      }
      let e = await this.initialize();
      if (!e) return;
      if ((await e.refreshFeatures({ skipCache: !0 }), e !== this.client)) return;
      let t = await this.processRemoteEvalPayload(e);
      if (e !== this.client) return;
      if (t) this.drainPendingExposures(), this.syncRemoteEvalToDisk(), this.refreshed.emit();
    } catch (e) {
      h(we(e));
    }
  }
  startPeriodicRefresh() {
    if (this.disposed || !this.deps.isEnabled()) return;
    this.stopPeriodicRefresh();
    let e = new AbortController();
    (this.refreshLoopController = e),
      this.periodicRefreshLoop(e.signal),
      (this.refreshLoopBeforeExitListener = () => {
        this.stopPeriodicRefresh();
      }),
      process.once("beforeExit", this.refreshLoopBeforeExitListener);
  }
  async periodicRefreshLoop(e) {
    while (!e.aborted && !this.disposed)
      try {
        let { intervalMs: t, flagged: r } = this.deps.getRefreshCadence();
        if ((await this.deps.sleep(t, e, { unref: !0 }), e.aborted)) return;
        let o = this.remoteEvalFetchOkCount;
        if ((await this.refreshFeatures(), r && this.remoteEvalFetchOkCount === o && !e.aborted)) {
          if ((await this.deps.sleep(Math.round(Math.random() * Yx), e, { unref: !0 }), e.aborted)) return;
          await this.refreshFeatures();
        }
      } catch (t) {
        h(we(t)), await this.deps.sleep(Wx, e, { unref: !0 });
      }
  }
  stopPeriodicRefresh() {
    if (this.refreshLoopController) this.refreshLoopController.abort(), (this.refreshLoopController = null);
    if (this.refreshLoopBeforeExitListener)
      process.removeListener("beforeExit", this.refreshLoopBeforeExitListener),
        (this.refreshLoopBeforeExitListener = null);
  }
}

var sD = j(bMe(), 1);

var ho = j(Li(), 1);

class fo {
  emit(e) {}
}

var _o = new fo();

class GO {
  getLogger(e, t, r) {
    return new fo();
  }
}

var Qi = new GO();

class Nc {
  constructor(e, t, r, o) {
    (this._provider = e), (this.name = t), (this.version = r), (this.options = o);
  }
  emit(e) {
    this._getLogger().emit(e);
  }
  _getLogger() {
    if (this._delegate) return this._delegate;
    let e = this._provider._getDelegateLogger(this.name, this.version, this.options);
    if (!e) return _o;
    return (this._delegate = e), this._delegate;
  }
}

class Ji {
  getLogger(e, t, r) {
    var o;
    return (o = this._getDelegateLogger(e, t, r)) !== null && o !== void 0 ? o : new Nc(this, e, t, r);
  }
  _getDelegate() {
    var e;
    return (e = this._delegate) !== null && e !== void 0 ? e : Qi;
  }
  _setDelegate(e) {
    this._delegate = e;
  }
  _getDelegateLogger(e, t, r) {
    var o;
    return (o = this._delegate) === null || o === void 0 ? void 0 : o.getLogger(e, t, r);
  }
}

var Zi = typeof globalThis === "object" ? globalThis : global;

var mo = Symbol.for("io.opentelemetry.js.api.logs"),
  Er = Zi;

var xc = 1;

class es {
  constructor() {
    this._proxyLoggerProvider = new Ji();
  }
  static getInstance() {
    if (!this._instance) this._instance = new es();
    return this._instance;
  }
  setGlobalLoggerProvider(e) {
    if (Er[mo]) return this.getLoggerProvider();
    return (Er[mo] = KO(xc, e, Qi)), this._proxyLoggerProvider._setDelegate(e), e;
  }
  getLoggerProvider() {
    var e, t;
    return (t = (e = Er[mo]) === null || e === void 0 ? void 0 : e.call(Er, xc)) !== null && t !== void 0
      ? t
      : this._proxyLoggerProvider;
  }
  getLogger(e, t, r) {
    return this.getLoggerProvider().getLogger(e, t, r);
  }
  disable() {
    delete Er[mo], (this._proxyLoggerProvider = new Ji());
  }
}

var Y9t = es.getInstance();

var qO = j(bMe(), 1),
  ts = j(Bc(), 1);

var jO = j(Li(), 1);

var It = j(Li(), 1),
  Ar = j(Bc(), 1);

class Lc {
  hrTime;
  hrTimeObserved;
  spanContext;
  resource;
  instrumentationScope;
  attributes = {};
  _severityText;
  _severityNumber;
  _body;
  _eventName;
  totalAttributesCount = 0;
  _isReadonly = !1;
  _logRecordLimits;
  set severityText(e) {
    if (this._isLogRecordReadonly()) return;
    this._severityText = e;
  }
  get severityText() {
    return this._severityText;
  }
  set severityNumber(e) {
    if (this._isLogRecordReadonly()) return;
    this._severityNumber = e;
  }
  get severityNumber() {
    return this._severityNumber;
  }
  set body(e) {
    if (this._isLogRecordReadonly()) return;
    this._body = e;
  }
  get body() {
    return this._body;
  }
  get eventName() {
    return this._eventName;
  }
  set eventName(e) {
    if (this._isLogRecordReadonly()) return;
    this._eventName = e;
  }
  get droppedAttributesCount() {
    return this.totalAttributesCount - Object.keys(this.attributes).length;
  }
  constructor(e, t, r) {
    let {
        timestamp: o,
        observedTimestamp: u,
        eventName: d,
        severityNumber: _,
        severityText: A,
        body: C,
        attributes: k = {},
        context: M,
      } = r,
      x = Date.now();
    if (((this.hrTime = Ar.timeInputToHrTime(o ?? x)), (this.hrTimeObserved = Ar.timeInputToHrTime(u ?? x)), M)) {
      let z = It.trace.getSpanContext(M);
      if (z && It.isSpanContextValid(z)) this.spanContext = z;
    }
    (this.severityNumber = _),
      (this.severityText = A),
      (this.body = C),
      (this.resource = e.resource),
      (this.instrumentationScope = t),
      (this._logRecordLimits = e.logRecordLimits),
      (this._eventName = d),
      this.setAttributes(k);
  }
  setAttribute(e, t) {
    if (this._isLogRecordReadonly()) return this;
    if (t === null) return this;
    if (e.length === 0) return It.diag.warn(`Invalid attribute key: ${e}`), this;
    if (!Ar.isAttributeValue(t) && !(typeof t === "object" && !Array.isArray(t) && Object.keys(t).length > 0))
      return It.diag.warn(`Invalid attribute value set for key: ${e}`), this;
    if (
      ((this.totalAttributesCount += 1),
      Object.keys(this.attributes).length >= this._logRecordLimits.attributeCountLimit &&
        !Object.prototype.hasOwnProperty.call(this.attributes, e))
    ) {
      if (this.droppedAttributesCount === 1) It.diag.warn("Dropping extra attributes.");
      return this;
    }
    if (Ar.isAttributeValue(t)) this.attributes[e] = this._truncateToSize(t);
    else this.attributes[e] = t;
    return this;
  }
  setAttributes(e) {
    for (let [t, r] of Object.entries(e)) this.setAttribute(t, r);
    return this;
  }
  setBody(e) {
    return (this.body = e), this;
  }
  setEventName(e) {
    return (this.eventName = e), this;
  }
  setSeverityNumber(e) {
    return (this.severityNumber = e), this;
  }
  setSeverityText(e) {
    return (this.severityText = e), this;
  }
  _makeReadonly() {
    this._isReadonly = !0;
  }
  _truncateToSize(e) {
    let t = this._logRecordLimits.attributeValueLengthLimit;
    if (t <= 0) return It.diag.warn(`Attribute value limit must be positive, got ${t}`), e;
    if (typeof e === "string") return this._truncateToLimitUtil(e, t);
    if (Array.isArray(e)) return e.map((r) => (typeof r === "string" ? this._truncateToLimitUtil(r, t) : r));
    return e;
  }
  _truncateToLimitUtil(e, t) {
    if (e.length <= t) return e;
    return e.substring(0, t);
  }
  _isLogRecordReadonly() {
    if (this._isReadonly) It.diag.warn("Can not execute the operation on emitted log record");
    return this._isReadonly;
  }
}

class Uc {
  instrumentationScope;
  _sharedState;
  constructor(e, t) {
    (this.instrumentationScope = e), (this._sharedState = t);
  }
  emit(e) {
    let t = e.context || jO.context.active(),
      r = new Lc(this._sharedState, this.instrumentationScope, { context: t, ...e });
    this._sharedState.activeProcessor.onEmit(r, t), r._makeReadonly();
  }
}

var jn = j(Bc(), 1);

class zc {
  forceFlush() {
    return Promise.resolve();
  }
  onEmit(e, t) {}
  shutdown() {
    return Promise.resolve();
  }
}

var $O = j(Bc(), 1);

class Fc {
  processors;
  forceFlushTimeoutMillis;
  constructor(e, t) {
    (this.processors = e), (this.forceFlushTimeoutMillis = t);
  }
  async forceFlush() {
    let e = this.forceFlushTimeoutMillis;
    await Promise.all(this.processors.map((t) => $O.callWithTimeout(t.forceFlush(), e)));
  }
  onEmit(e, t) {
    this.processors.forEach((r) => r.onEmit(e, t));
  }
  async shutdown() {
    await Promise.all(this.processors.map((e) => e.shutdown()));
  }
}

class Hc {
  resource;
  forceFlushTimeoutMillis;
  logRecordLimits;
  processors;
  loggers = new Map();
  activeProcessor;
  registeredLogRecordProcessors = [];
  constructor(e, t, r, o) {
    if (
      ((this.resource = e),
      (this.forceFlushTimeoutMillis = t),
      (this.logRecordLimits = r),
      (this.processors = o),
      o.length > 0)
    )
      (this.registeredLogRecordProcessors = o),
        (this.activeProcessor = new Fc(this.registeredLogRecordProcessors, this.forceFlushTimeoutMillis));
    else this.activeProcessor = new zc();
  }
}

var v2 = "unknown";

class wMe {
  _shutdownOnce;
  _sharedState;
  constructor(e = {}) {
    let t = ts.merge({}, WO(), e),
      r = e.resource ?? qO.defaultResource();
    (this._sharedState = new Hc(r, t.forceFlushTimeoutMillis, YO(t.logRecordLimits), e?.processors ?? [])),
      (this._shutdownOnce = new ts.BindOnceFuture(this._shutdown, this));
  }
  getLogger(e, t, r) {
    if (this._shutdownOnce.isCalled) return ho.diag.warn("A shutdown LoggerProvider cannot provide a Logger"), _o;
    if (!e) ho.diag.warn("Logger requested without instrumentation scope name.");
    let o = e || v2,
      u = `${o}@${t || ""}:${r?.schemaUrl || ""}`;
    if (!this._sharedState.loggers.has(u))
      this._sharedState.loggers.set(u, new Uc({ name: o, version: t, schemaUrl: r?.schemaUrl }, this._sharedState));
    return this._sharedState.loggers.get(u);
  }
  forceFlush() {
    if (this._shutdownOnce.isCalled)
      return ho.diag.warn("invalid attempt to force flush after LoggerProvider shutdown"), this._shutdownOnce.promise;
    return this._sharedState.activeProcessor.forceFlush();
  }
  shutdown() {
    if (this._shutdownOnce.isCalled)
      return ho.diag.warn("shutdown may only be called once per LoggerProvider"), this._shutdownOnce.promise;
    return this._shutdownOnce.call();
  }
  _shutdown() {
    return this._sharedState.activeProcessor.shutdown();
  }
}

var ns = j(Bc(), 1);

class J9t {
  export(e, t) {
    this._sendLogRecords(e, t);
  }
  shutdown() {
    return Promise.resolve();
  }
  _exportInfo(e) {
    return {
      resource: { attributes: e.resource.attributes },
      instrumentationScope: e.instrumentationScope,
      timestamp: ns.hrTimeToMicroseconds(e.hrTime),
      traceId: e.spanContext?.traceId,
      spanId: e.spanContext?.spanId,
      traceFlags: e.spanContext?.traceFlags,
      severityText: e.severityText,
      severityNumber: e.severityNumber,
      body: e.body,
      attributes: e.attributes,
    };
  }
  _sendLogRecords(e, t) {
    for (let r of e) console.dir(this._exportInfo(r), { depth: 3 });
    t?.({ code: ns.ExportResultCode.SUCCESS });
  }
}

var XO = j(Li(), 1),
  We = j(Bc(), 1);

class Vc {
  _exporter;
  _maxExportBatchSize;
  _maxQueueSize;
  _scheduledDelayMillis;
  _exportTimeoutMillis;
  _isExporting = !1;
  _finishedLogRecords = [];
  _timer;
  _shutdownOnce;
  constructor(e, t) {
    if (
      ((this._exporter = e),
      (this._maxExportBatchSize =
        t?.maxExportBatchSize ?? We.getNumberFromEnv("OTEL_BLRP_MAX_EXPORT_BATCH_SIZE") ?? 512),
      (this._maxQueueSize = t?.maxQueueSize ?? We.getNumberFromEnv("OTEL_BLRP_MAX_QUEUE_SIZE") ?? 2048),
      (this._scheduledDelayMillis = t?.scheduledDelayMillis ?? We.getNumberFromEnv("OTEL_BLRP_SCHEDULE_DELAY") ?? 5000),
      (this._exportTimeoutMillis = t?.exportTimeoutMillis ?? We.getNumberFromEnv("OTEL_BLRP_EXPORT_TIMEOUT") ?? 30000),
      (this._shutdownOnce = new We.BindOnceFuture(this._shutdown, this)),
      this._maxExportBatchSize > this._maxQueueSize)
    )
      XO.diag.warn(
        "BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize",
      ),
        (this._maxExportBatchSize = this._maxQueueSize);
  }
  onEmit(e) {
    if (this._shutdownOnce.isCalled) return;
    this._addToBuffer(e);
  }
  forceFlush() {
    if (this._shutdownOnce.isCalled) return this._shutdownOnce.promise;
    return this._flushAll();
  }
  shutdown() {
    return this._shutdownOnce.call();
  }
  async _shutdown() {
    this.onShutdown(), await this._flushAll(), await this._exporter.shutdown();
  }
  _addToBuffer(e) {
    if (this._finishedLogRecords.length >= this._maxQueueSize) return;
    this._finishedLogRecords.push(e), this._maybeStartTimer();
  }
  _flushAll() {
    return new Promise((e, t) => {
      let r = [],
        o = Math.ceil(this._finishedLogRecords.length / this._maxExportBatchSize);
      for (let u = 0; u < o; u++) r.push(this._flushOneBatch());
      Promise.all(r)
        .then(() => {
          e();
        })
        .catch(t);
    });
  }
  _flushOneBatch() {
    if ((this._clearTimer(), this._finishedLogRecords.length === 0)) return Promise.resolve();
    return new Promise((e, t) => {
      We.callWithTimeout(
        this._export(this._finishedLogRecords.splice(0, this._maxExportBatchSize)),
        this._exportTimeoutMillis,
      )
        .then(() => e())
        .catch(t);
    });
  }
  _maybeStartTimer() {
    if (this._isExporting) return;
    let e = () => {
      (this._isExporting = !0),
        this._flushOneBatch()
          .then(() => {
            if (((this._isExporting = !1), this._finishedLogRecords.length > 0))
              this._clearTimer(), this._maybeStartTimer();
          })
          .catch((t) => {
            (this._isExporting = !1), We.globalErrorHandler(t);
          });
    };
    if (this._finishedLogRecords.length >= this._maxExportBatchSize) return e();
    if (this._timer !== void 0) return;
    if (((this._timer = setTimeout(() => e(), this._scheduledDelayMillis)), typeof this._timer !== "number"))
      this._timer.unref();
  }
  _clearTimer() {
    if (this._timer !== void 0) clearTimeout(this._timer), (this._timer = void 0);
  }
  _export(e) {
    let t = () =>
        We.internal
          ._export(this._exporter, e)
          .then((o) => {
            if (o.code !== We.ExportResultCode.SUCCESS)
              We.globalErrorHandler(
                o.error ?? Error(`BatchLogRecordProcessor: log record export failed (status ${o})`),
              );
          })
          .catch(We.globalErrorHandler),
      r = e.map((o) => o.resource).filter((o) => o.asyncAttributesPending);
    if (r.length === 0) return t();
    else return Promise.all(r.map((o) => o.waitForAsyncAttributes?.())).then(t, We.globalErrorHandler);
  }
}

class $de extends Vc {
  onShutdown() {}
}

var Ma = j(Fde(), 1);

var Gc = j(Bc(), 1);

var rO = "[Anthropic telemetry]";

class xSt {
  pipeline;
  count = 0;
  reportedCount = 0;
  last;
  constructor(e) {
    this.pipeline = e;
  }
  record(e) {
    if ((this.count++, (this.last = e), this.count === 1))
      n(
        `${rO} ${this.pipeline} export failed (${e}). This is Anthropic's own telemetry pipeline, not your OTel collector; further failures are counted and summarised at shutdown.`,
      );
  }
  logSummary() {
    if (this.count === this.reportedCount) return;
    (this.reportedCount = this.count),
      n(`${rO} ${this.pipeline} export: ${this.count} failure(s) this session (last: ${this.last})`);
  }
}

var yn = j(Bc(), 1);

var Eo = {
  fromJSON(e) {
    return {
      seconds: ZO(e.seconds) ? globalThis.Number(e.seconds) : 0,
      nanos: ZO(e.nanos) ? globalThis.Number(e.nanos) : 0,
    };
  },
  toJSON(e) {
    let t = {};
    if (e.seconds !== void 0) t.seconds = Math.round(e.seconds);
    if (e.nanos !== void 0) t.nanos = Math.round(e.nanos);
    return t;
  },
  create(e) {
    return Eo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = w2();
    return (t.seconds = e.seconds ?? 0), (t.nanos = e.nanos ?? 0), t;
  },
};

var en = {
  fromJSON(e) {
    return {
      account_id: So(e.account_id) ? globalThis.Number(e.account_id) : 0,
      organization_uuid: So(e.organization_uuid) ? globalThis.String(e.organization_uuid) : "",
      account_uuid: So(e.account_uuid) ? globalThis.String(e.account_uuid) : "",
    };
  },
  toJSON(e) {
    let t = {};
    if (e.account_id !== void 0) t.account_id = Math.round(e.account_id);
    if (e.organization_uuid !== void 0) t.organization_uuid = e.organization_uuid;
    if (e.account_uuid !== void 0) t.account_uuid = e.account_uuid;
    return t;
  },
  create(e) {
    return en.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = P2();
    return (
      (t.account_id = e.account_id ?? 0),
      (t.organization_uuid = e.organization_uuid ?? ""),
      (t.account_uuid = e.account_uuid ?? ""),
      t
    );
  },
};

var tn = {
  fromJSON(e) {
    return {
      account_uuid: So(e.account_uuid) ? globalThis.String(e.account_uuid) : void 0,
      organization_uuid: So(e.organization_uuid) ? globalThis.String(e.organization_uuid) : void 0,
    };
  },
  toJSON(e) {
    let t = {};
    if (e.account_uuid !== void 0) t.account_uuid = e.account_uuid;
    if (e.organization_uuid !== void 0) t.organization_uuid = e.organization_uuid;
    return t;
  },
  create(e) {
    return tn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = M2();
    return (t.account_uuid = e.account_uuid ?? void 0), (t.organization_uuid = e.organization_uuid ?? void 0), t;
  },
};

var rs = {
  fromJSON(e) {
    return {
      actor_id: se(e.actor_id) ? globalThis.String(e.actor_id) : "",
      repository_id: se(e.repository_id) ? globalThis.String(e.repository_id) : "",
      repository_owner_id: se(e.repository_owner_id) ? globalThis.String(e.repository_owner_id) : "",
    };
  },
  toJSON(e) {
    let t = {};
    if (e.actor_id !== void 0) t.actor_id = e.actor_id;
    if (e.repository_id !== void 0) t.repository_id = e.repository_id;
    if (e.repository_owner_id !== void 0) t.repository_owner_id = e.repository_owner_id;
    return t;
  },
  create(e) {
    return rs.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = D2();
    return (
      (t.actor_id = e.actor_id ?? ""),
      (t.repository_id = e.repository_id ?? ""),
      (t.repository_owner_id = e.repository_owner_id ?? ""),
      t
    );
  },
};

var is = {
  fromJSON(e) {
    return {
      platform: se(e.platform) ? globalThis.String(e.platform) : "",
      node_version: se(e.node_version) ? globalThis.String(e.node_version) : "",
      terminal: se(e.terminal) ? globalThis.String(e.terminal) : "",
      package_managers: se(e.package_managers) ? globalThis.String(e.package_managers) : "",
      runtimes: se(e.runtimes) ? globalThis.String(e.runtimes) : "",
      is_running_with_bun: se(e.is_running_with_bun) ? globalThis.Boolean(e.is_running_with_bun) : !1,
      is_ci: se(e.is_ci) ? globalThis.Boolean(e.is_ci) : !1,
      is_claubbit: se(e.is_claubbit) ? globalThis.Boolean(e.is_claubbit) : !1,
      is_github_action: se(e.is_github_action) ? globalThis.Boolean(e.is_github_action) : !1,
      is_claude_code_action: se(e.is_claude_code_action) ? globalThis.Boolean(e.is_claude_code_action) : !1,
      is_claude_ai_auth: se(e.is_claude_ai_auth) ? globalThis.Boolean(e.is_claude_ai_auth) : !1,
      version: se(e.version) ? globalThis.String(e.version) : "",
      github_event_name: se(e.github_event_name) ? globalThis.String(e.github_event_name) : "",
      github_actions_runner_environment: se(e.github_actions_runner_environment)
        ? globalThis.String(e.github_actions_runner_environment)
        : "",
      github_actions_runner_os: se(e.github_actions_runner_os) ? globalThis.String(e.github_actions_runner_os) : "",
      github_action_ref: se(e.github_action_ref) ? globalThis.String(e.github_action_ref) : "",
      wsl_version: se(e.wsl_version) ? globalThis.String(e.wsl_version) : "",
      github_actions_metadata: se(e.github_actions_metadata) ? rs.fromJSON(e.github_actions_metadata) : void 0,
      arch: se(e.arch) ? globalThis.String(e.arch) : "",
      is_claude_code_remote: se(e.is_claude_code_remote) ? globalThis.Boolean(e.is_claude_code_remote) : !1,
      remote_environment_type: se(e.remote_environment_type) ? globalThis.String(e.remote_environment_type) : "",
      claude_code_container_id: se(e.claude_code_container_id) ? globalThis.String(e.claude_code_container_id) : "",
      claude_code_remote_session_id: se(e.claude_code_remote_session_id)
        ? globalThis.String(e.claude_code_remote_session_id)
        : "",
      tags: globalThis.Array.isArray(e?.tags) ? e.tags.map((t) => globalThis.String(t)) : [],
      deployment_environment: se(e.deployment_environment) ? globalThis.String(e.deployment_environment) : "",
      is_conductor: se(e.is_conductor) ? globalThis.Boolean(e.is_conductor) : !1,
      version_base: se(e.version_base) ? globalThis.String(e.version_base) : "",
      coworker_type: se(e.coworker_type) ? globalThis.String(e.coworker_type) : "",
      build_time: se(e.build_time) ? globalThis.String(e.build_time) : "",
      is_local_agent_mode: se(e.is_local_agent_mode) ? globalThis.Boolean(e.is_local_agent_mode) : !1,
      linux_distro_id: se(e.linux_distro_id) ? globalThis.String(e.linux_distro_id) : "",
      linux_distro_version: se(e.linux_distro_version) ? globalThis.String(e.linux_distro_version) : "",
      linux_kernel: se(e.linux_kernel) ? globalThis.String(e.linux_kernel) : "",
      vcs: se(e.vcs) ? globalThis.String(e.vcs) : "",
      platform_raw: se(e.platform_raw) ? globalThis.String(e.platform_raw) : "",
      shell: se(e.shell) ? globalThis.String(e.shell) : "",
    };
  },
  toJSON(e) {
    let t = {};
    if (e.platform !== void 0) t.platform = e.platform;
    if (e.node_version !== void 0) t.node_version = e.node_version;
    if (e.terminal !== void 0) t.terminal = e.terminal;
    if (e.package_managers !== void 0) t.package_managers = e.package_managers;
    if (e.runtimes !== void 0) t.runtimes = e.runtimes;
    if (e.is_running_with_bun !== void 0) t.is_running_with_bun = e.is_running_with_bun;
    if (e.is_ci !== void 0) t.is_ci = e.is_ci;
    if (e.is_claubbit !== void 0) t.is_claubbit = e.is_claubbit;
    if (e.is_github_action !== void 0) t.is_github_action = e.is_github_action;
    if (e.is_claude_code_action !== void 0) t.is_claude_code_action = e.is_claude_code_action;
    if (e.is_claude_ai_auth !== void 0) t.is_claude_ai_auth = e.is_claude_ai_auth;
    if (e.version !== void 0) t.version = e.version;
    if (e.github_event_name !== void 0) t.github_event_name = e.github_event_name;
    if (e.github_actions_runner_environment !== void 0)
      t.github_actions_runner_environment = e.github_actions_runner_environment;
    if (e.github_actions_runner_os !== void 0) t.github_actions_runner_os = e.github_actions_runner_os;
    if (e.github_action_ref !== void 0) t.github_action_ref = e.github_action_ref;
    if (e.wsl_version !== void 0) t.wsl_version = e.wsl_version;
    if (e.github_actions_metadata !== void 0) t.github_actions_metadata = rs.toJSON(e.github_actions_metadata);
    if (e.arch !== void 0) t.arch = e.arch;
    if (e.is_claude_code_remote !== void 0) t.is_claude_code_remote = e.is_claude_code_remote;
    if (e.remote_environment_type !== void 0) t.remote_environment_type = e.remote_environment_type;
    if (e.claude_code_container_id !== void 0) t.claude_code_container_id = e.claude_code_container_id;
    if (e.claude_code_remote_session_id !== void 0) t.claude_code_remote_session_id = e.claude_code_remote_session_id;
    if (e.tags?.length) t.tags = e.tags;
    if (e.deployment_environment !== void 0) t.deployment_environment = e.deployment_environment;
    if (e.is_conductor !== void 0) t.is_conductor = e.is_conductor;
    if (e.version_base !== void 0) t.version_base = e.version_base;
    if (e.coworker_type !== void 0) t.coworker_type = e.coworker_type;
    if (e.build_time !== void 0) t.build_time = e.build_time;
    if (e.is_local_agent_mode !== void 0) t.is_local_agent_mode = e.is_local_agent_mode;
    if (e.linux_distro_id !== void 0) t.linux_distro_id = e.linux_distro_id;
    if (e.linux_distro_version !== void 0) t.linux_distro_version = e.linux_distro_version;
    if (e.linux_kernel !== void 0) t.linux_kernel = e.linux_kernel;
    if (e.vcs !== void 0) t.vcs = e.vcs;
    if (e.platform_raw !== void 0) t.platform_raw = e.platform_raw;
    if (e.shell !== void 0) t.shell = e.shell;
    return t;
  },
  create(e) {
    return is.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = I2();
    return (
      (t.platform = e.platform ?? ""),
      (t.node_version = e.node_version ?? ""),
      (t.terminal = e.terminal ?? ""),
      (t.package_managers = e.package_managers ?? ""),
      (t.runtimes = e.runtimes ?? ""),
      (t.is_running_with_bun = e.is_running_with_bun ?? !1),
      (t.is_ci = e.is_ci ?? !1),
      (t.is_claubbit = e.is_claubbit ?? !1),
      (t.is_github_action = e.is_github_action ?? !1),
      (t.is_claude_code_action = e.is_claude_code_action ?? !1),
      (t.is_claude_ai_auth = e.is_claude_ai_auth ?? !1),
      (t.version = e.version ?? ""),
      (t.github_event_name = e.github_event_name ?? ""),
      (t.github_actions_runner_environment = e.github_actions_runner_environment ?? ""),
      (t.github_actions_runner_os = e.github_actions_runner_os ?? ""),
      (t.github_action_ref = e.github_action_ref ?? ""),
      (t.wsl_version = e.wsl_version ?? ""),
      (t.github_actions_metadata =
        e.github_actions_metadata !== void 0 && e.github_actions_metadata !== null
          ? rs.fromPartial(e.github_actions_metadata)
          : void 0),
      (t.arch = e.arch ?? ""),
      (t.is_claude_code_remote = e.is_claude_code_remote ?? !1),
      (t.remote_environment_type = e.remote_environment_type ?? ""),
      (t.claude_code_container_id = e.claude_code_container_id ?? ""),
      (t.claude_code_remote_session_id = e.claude_code_remote_session_id ?? ""),
      (t.tags = e.tags?.map((r) => r) || []),
      (t.deployment_environment = e.deployment_environment ?? ""),
      (t.is_conductor = e.is_conductor ?? !1),
      (t.version_base = e.version_base ?? ""),
      (t.coworker_type = e.coworker_type ?? ""),
      (t.build_time = e.build_time ?? ""),
      (t.is_local_agent_mode = e.is_local_agent_mode ?? !1),
      (t.linux_distro_id = e.linux_distro_id ?? ""),
      (t.linux_distro_version = e.linux_distro_version ?? ""),
      (t.linux_kernel = e.linux_kernel ?? ""),
      (t.vcs = e.vcs ?? ""),
      (t.platform_raw = e.platform_raw ?? ""),
      (t.shell = e.shell ?? ""),
      t
    );
  },
};

var ss = {
  fromJSON(e) {
    return {
      slack_team_id: se(e.slack_team_id) ? globalThis.String(e.slack_team_id) : "",
      is_enterprise_install: se(e.is_enterprise_install) ? globalThis.Boolean(e.is_enterprise_install) : !1,
      trigger: se(e.trigger) ? globalThis.String(e.trigger) : "",
      creation_method: se(e.creation_method) ? globalThis.String(e.creation_method) : "",
    };
  },
  toJSON(e) {
    let t = {};
    if (e.slack_team_id !== void 0) t.slack_team_id = e.slack_team_id;
    if (e.is_enterprise_install !== void 0) t.is_enterprise_install = e.is_enterprise_install;
    if (e.trigger !== void 0) t.trigger = e.trigger;
    if (e.creation_method !== void 0) t.creation_method = e.creation_method;
    return t;
  },
  create(e) {
    return ss.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = N2();
    return (
      (t.slack_team_id = e.slack_team_id ?? ""),
      (t.is_enterprise_install = e.is_enterprise_install ?? !1),
      (t.trigger = e.trigger ?? ""),
      (t.creation_method = e.creation_method ?? ""),
      t
    );
  },
};

var br = {
  fromJSON(e) {
    return {
      event_name: se(e.event_name) ? globalThis.String(e.event_name) : "",
      client_timestamp: se(e.client_timestamp) ? ek(e.client_timestamp) : void 0,
      model: se(e.model) ? globalThis.String(e.model) : "",
      session_id: se(e.session_id) ? globalThis.String(e.session_id) : "",
      user_type: se(e.user_type) ? globalThis.String(e.user_type) : "",
      betas: se(e.betas) ? globalThis.String(e.betas) : "",
      env: se(e.env) ? is.fromJSON(e.env) : void 0,
      entrypoint: se(e.entrypoint) ? globalThis.String(e.entrypoint) : "",
      agent_sdk_version: se(e.agent_sdk_version) ? globalThis.String(e.agent_sdk_version) : "",
      is_interactive: se(e.is_interactive) ? globalThis.Boolean(e.is_interactive) : !1,
      client_type: se(e.client_type) ? globalThis.String(e.client_type) : "",
      process: se(e.process) ? globalThis.String(e.process) : void 0,
      additional_metadata: se(e.additional_metadata) ? globalThis.String(e.additional_metadata) : void 0,
      auth: se(e.auth) ? en.fromJSON(e.auth) : void 0,
      server_timestamp: se(e.server_timestamp) ? ek(e.server_timestamp) : void 0,
      event_id: se(e.event_id) ? globalThis.String(e.event_id) : "",
      device_id: se(e.device_id) ? globalThis.String(e.device_id) : "",
      swe_bench_run_id: se(e.swe_bench_run_id) ? globalThis.String(e.swe_bench_run_id) : "",
      swe_bench_instance_id: se(e.swe_bench_instance_id) ? globalThis.String(e.swe_bench_instance_id) : "",
      swe_bench_task_id: se(e.swe_bench_task_id) ? globalThis.String(e.swe_bench_task_id) : "",
      email: se(e.email) ? globalThis.String(e.email) : "",
      agent_id: se(e.agent_id) ? globalThis.String(e.agent_id) : "",
      parent_session_id: se(e.parent_session_id) ? globalThis.String(e.parent_session_id) : "",
      agent_type: se(e.agent_type) ? globalThis.String(e.agent_type) : "",
      slack: se(e.slack) ? ss.fromJSON(e.slack) : void 0,
      team_name: se(e.team_name) ? globalThis.String(e.team_name) : "",
      skill_name: se(e.skill_name) ? globalThis.String(e.skill_name) : "",
      plugin_name: se(e.plugin_name) ? globalThis.String(e.plugin_name) : "",
      marketplace_name: se(e.marketplace_name) ? globalThis.String(e.marketplace_name) : "",
      head_sha: se(e.head_sha) ? globalThis.String(e.head_sha) : "",
      client_reported_auth: se(e.client_reported_auth) ? tn.fromJSON(e.client_reported_auth) : void 0,
      event_metadata_vars: se(e.event_metadata_vars) ? globalThis.String(e.event_metadata_vars) : void 0,
      mcp_server_name: se(e.mcp_server_name) ? globalThis.String(e.mcp_server_name) : "",
      mcp_tool_name: se(e.mcp_tool_name) ? globalThis.String(e.mcp_tool_name) : "",
    };
  },
  toJSON(e) {
    let t = {};
    if (e.event_name !== void 0) t.event_name = e.event_name;
    if (e.client_timestamp !== void 0) t.client_timestamp = e.client_timestamp.toISOString();
    if (e.model !== void 0) t.model = e.model;
    if (e.session_id !== void 0) t.session_id = e.session_id;
    if (e.user_type !== void 0) t.user_type = e.user_type;
    if (e.betas !== void 0) t.betas = e.betas;
    if (e.env !== void 0) t.env = is.toJSON(e.env);
    if (e.entrypoint !== void 0) t.entrypoint = e.entrypoint;
    if (e.agent_sdk_version !== void 0) t.agent_sdk_version = e.agent_sdk_version;
    if (e.is_interactive !== void 0) t.is_interactive = e.is_interactive;
    if (e.client_type !== void 0) t.client_type = e.client_type;
    if (e.process !== void 0) t.process = e.process;
    if (e.additional_metadata !== void 0) t.additional_metadata = e.additional_metadata;
    if (e.auth !== void 0) t.auth = en.toJSON(e.auth);
    if (e.server_timestamp !== void 0) t.server_timestamp = e.server_timestamp.toISOString();
    if (e.event_id !== void 0) t.event_id = e.event_id;
    if (e.device_id !== void 0) t.device_id = e.device_id;
    if (e.swe_bench_run_id !== void 0) t.swe_bench_run_id = e.swe_bench_run_id;
    if (e.swe_bench_instance_id !== void 0) t.swe_bench_instance_id = e.swe_bench_instance_id;
    if (e.swe_bench_task_id !== void 0) t.swe_bench_task_id = e.swe_bench_task_id;
    if (e.email !== void 0) t.email = e.email;
    if (e.agent_id !== void 0) t.agent_id = e.agent_id;
    if (e.parent_session_id !== void 0) t.parent_session_id = e.parent_session_id;
    if (e.agent_type !== void 0) t.agent_type = e.agent_type;
    if (e.slack !== void 0) t.slack = ss.toJSON(e.slack);
    if (e.team_name !== void 0) t.team_name = e.team_name;
    if (e.skill_name !== void 0) t.skill_name = e.skill_name;
    if (e.plugin_name !== void 0) t.plugin_name = e.plugin_name;
    if (e.marketplace_name !== void 0) t.marketplace_name = e.marketplace_name;
    if (e.head_sha !== void 0) t.head_sha = e.head_sha;
    if (e.client_reported_auth !== void 0) t.client_reported_auth = tn.toJSON(e.client_reported_auth);
    if (e.event_metadata_vars !== void 0) t.event_metadata_vars = e.event_metadata_vars;
    if (e.mcp_server_name !== void 0) t.mcp_server_name = e.mcp_server_name;
    if (e.mcp_tool_name !== void 0) t.mcp_tool_name = e.mcp_tool_name;
    return t;
  },
  create(e) {
    return br.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = x2();
    return (
      (t.event_name = e.event_name ?? ""),
      (t.client_timestamp = e.client_timestamp ?? void 0),
      (t.model = e.model ?? ""),
      (t.session_id = e.session_id ?? ""),
      (t.user_type = e.user_type ?? ""),
      (t.betas = e.betas ?? ""),
      (t.env = e.env !== void 0 && e.env !== null ? is.fromPartial(e.env) : void 0),
      (t.entrypoint = e.entrypoint ?? ""),
      (t.agent_sdk_version = e.agent_sdk_version ?? ""),
      (t.is_interactive = e.is_interactive ?? !1),
      (t.client_type = e.client_type ?? ""),
      (t.process = e.process ?? void 0),
      (t.additional_metadata = e.additional_metadata ?? void 0),
      (t.auth = e.auth !== void 0 && e.auth !== null ? en.fromPartial(e.auth) : void 0),
      (t.server_timestamp = e.server_timestamp ?? void 0),
      (t.event_id = e.event_id ?? ""),
      (t.device_id = e.device_id ?? ""),
      (t.swe_bench_run_id = e.swe_bench_run_id ?? ""),
      (t.swe_bench_instance_id = e.swe_bench_instance_id ?? ""),
      (t.swe_bench_task_id = e.swe_bench_task_id ?? ""),
      (t.email = e.email ?? ""),
      (t.agent_id = e.agent_id ?? ""),
      (t.parent_session_id = e.parent_session_id ?? ""),
      (t.agent_type = e.agent_type ?? ""),
      (t.slack = e.slack !== void 0 && e.slack !== null ? ss.fromPartial(e.slack) : void 0),
      (t.team_name = e.team_name ?? ""),
      (t.skill_name = e.skill_name ?? ""),
      (t.plugin_name = e.plugin_name ?? ""),
      (t.marketplace_name = e.marketplace_name ?? ""),
      (t.head_sha = e.head_sha ?? ""),
      (t.client_reported_auth =
        e.client_reported_auth !== void 0 && e.client_reported_auth !== null
          ? tn.fromPartial(e.client_reported_auth)
          : void 0),
      (t.event_metadata_vars = e.event_metadata_vars ?? void 0),
      (t.mcp_server_name = e.mcp_server_name ?? ""),
      (t.mcp_tool_name = e.mcp_tool_name ?? ""),
      t
    );
  },
};

var yr = {
  fromJSON(e) {
    return {
      event_id: nt(e.event_id) ? globalThis.String(e.event_id) : "",
      timestamp: nt(e.timestamp) ? tk(e.timestamp) : void 0,
      experiment_id: nt(e.experiment_id) ? globalThis.String(e.experiment_id) : "",
      variation_id: nt(e.variation_id) ? globalThis.Number(e.variation_id) : 0,
      variation_key: nt(e.variation_key) ? globalThis.String(e.variation_key) : void 0,
      environment: nt(e.environment) ? globalThis.String(e.environment) : "",
      user_attributes: nt(e.user_attributes) ? globalThis.String(e.user_attributes) : void 0,
      experiment_metadata: nt(e.experiment_metadata) ? globalThis.String(e.experiment_metadata) : void 0,
      device_id: nt(e.device_id) ? globalThis.String(e.device_id) : "",
      auth: nt(e.auth) ? en.fromJSON(e.auth) : void 0,
      session_id: nt(e.session_id) ? globalThis.String(e.session_id) : "",
      anonymous_id: nt(e.anonymous_id) ? globalThis.String(e.anonymous_id) : "",
      event_metadata_vars: nt(e.event_metadata_vars) ? globalThis.String(e.event_metadata_vars) : void 0,
      server_timestamp: nt(e.server_timestamp) ? tk(e.server_timestamp) : void 0,
      client_reported_auth: nt(e.client_reported_auth) ? tn.fromJSON(e.client_reported_auth) : void 0,
    };
  },
  toJSON(e) {
    let t = {};
    if (e.event_id !== void 0) t.event_id = e.event_id;
    if (e.timestamp !== void 0) t.timestamp = e.timestamp.toISOString();
    if (e.experiment_id !== void 0) t.experiment_id = e.experiment_id;
    if (e.variation_id !== void 0) t.variation_id = Math.round(e.variation_id);
    if (e.variation_key !== void 0) t.variation_key = e.variation_key;
    if (e.environment !== void 0) t.environment = e.environment;
    if (e.user_attributes !== void 0) t.user_attributes = e.user_attributes;
    if (e.experiment_metadata !== void 0) t.experiment_metadata = e.experiment_metadata;
    if (e.device_id !== void 0) t.device_id = e.device_id;
    if (e.auth !== void 0) t.auth = en.toJSON(e.auth);
    if (e.session_id !== void 0) t.session_id = e.session_id;
    if (e.anonymous_id !== void 0) t.anonymous_id = e.anonymous_id;
    if (e.event_metadata_vars !== void 0) t.event_metadata_vars = e.event_metadata_vars;
    if (e.server_timestamp !== void 0) t.server_timestamp = e.server_timestamp.toISOString();
    if (e.client_reported_auth !== void 0) t.client_reported_auth = tn.toJSON(e.client_reported_auth);
    return t;
  },
  create(e) {
    return yr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = U2();
    return (
      (t.event_id = e.event_id ?? ""),
      (t.timestamp = e.timestamp ?? void 0),
      (t.experiment_id = e.experiment_id ?? ""),
      (t.variation_id = e.variation_id ?? 0),
      (t.variation_key = e.variation_key ?? void 0),
      (t.environment = e.environment ?? ""),
      (t.user_attributes = e.user_attributes ?? void 0),
      (t.experiment_metadata = e.experiment_metadata ?? void 0),
      (t.device_id = e.device_id ?? ""),
      (t.auth = e.auth !== void 0 && e.auth !== null ? en.fromPartial(e.auth) : void 0),
      (t.session_id = e.session_id ?? ""),
      (t.anonymous_id = e.anonymous_id ?? ""),
      (t.event_metadata_vars = e.event_metadata_vars ?? void 0),
      (t.server_timestamp = e.server_timestamp ?? void 0),
      (t.client_reported_auth =
        e.client_reported_auth !== void 0 && e.client_reported_auth !== null
          ? tn.fromPartial(e.client_reported_auth)
          : void 0),
      t
    );
  },
};

var as = null;

function Aer(e) {
  let t = as;
  return (as = e), t;
}

var ls = /^[a-z]+-\d/;

var B2 = new RegExp(`^(?:${gj.join("|")})\\.(anthropic\\..+)$`);

var nk = "claude-";

var K2 = new Set(G2()),
  j2 = /\[1m\]$/i;

var Kc = (e) => typeof e === "boolean",
  lk = (e) => e instanceof Date && !Number.isNaN(e.getTime()),
  To = (e) => (t) => typeof t === "string" && e.test(t),
  nn = (...e) => {
    let t = new Set(e);
    return (r) => typeof r === "string" && t.has(r);
  },
  ok =
    (...e) =>
    (t) =>
      e.some((r) => r(t)),
  W2 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  Y2 = /^[A-Za-z][A-Za-z0-9_]{0,127}$/,
  $2 = /^(session|cse)(_(local|staging))?_01[1-9A-HJ-NP-Za-km-z]{22}$/,
  ik = (e) => typeof e === "string" && $2.test(e) && JV(e) !== void 0,
  q2 = /^[0-9a-f]{64}$/,
  X2 = /^\d+\.\d+\.\d+([+-][A-Za-z0-9.+-]{1,64})?$/,
  Rr = To(W2),
  Q2 = [
    "cli",
    "remote",
    "github-action",
    "sdk-typescript",
    "sdk-python",
    "sdk-cli",
    "claude-vscode",
    "local-agent",
    "claude-desktop",
  ],
  J2 = [
    "darwin",
    "linux",
    "win32",
    "freebsd",
    "openbsd",
    "netbsd",
    "android",
    "aix",
    "sunos",
    "cygwin",
    "haiku",
    "macos",
    "windows",
    "wsl",
    "unknown",
  ],
  Z2 = ["arm", "arm64", "ia32", "loong64", "mips", "mipsel", "ppc", "ppc64", "riscv64", "s390", "s390x", "x64"],
  e4 = nn(...Object.keys(tqt), "other"),
  t4 = (e) => typeof e === "string" && (e === "nonconforming" || rk(e)),
  ck = {
    event_name: To(Y2),
    event_id: Rr,
    client_timestamp: lk,
    session_id: ok(Rr, ik),
    parent_session_id: ok(Rr, ik),
    device_id: To(q2),
    user_type: nn("ant", "external"),
    client_type: nn(...Q2),
    agent_type: nn("teammate", "subagent", "standalone"),
    is_interactive: Kc,
    entrypoint: e4,
    model: t4,
  },
  n4 = { version: To(X2), platform: nn(...J2), arch: nn(...Z2) },
  r4 = { organization_uuid: Rr, account_uuid: Rr },
  Qle = Object.keys(ck),
  o4 = ["sample_rate"],
  Yn = (e) => typeof e === "number" && Number.isInteger(e) && e >= 0 && e < 2147483648,
  i4 = (e) => typeof e === "number" && Number.isSafeInteger(e) && e >= 0,
  s4 = { user_source_disabled: !0, settings_unknowable: !0, settings_invalid_key_set: !0 },
  sk = {
    tengu_retention_sweep: {
      phase: nn("start", "complete"),
      skipped: Kc,
      skipReason: nn(...Object.keys(s4)),
      usedDefault: Kc,
      periodDays: i4,
      transcriptsDeleted: Yn,
      transcriptsExemptedDesktop: Yn,
      sessionFilesDeleted: Yn,
      artifactsDeleted: Yn,
      filesRetainedFresh: Yn,
      filesPastCutoff: Yn,
      errors: Yn,
    },
  },
  ak = "hipaa_redacted";

var a4 = /^[A-Za-z0-9_-]{1,128}$/,
  l4 = (e) => typeof e === "number" && Number.isInteger(e) && e >= 0 && e < 65536,
  c4 = {
    event_id: Rr,
    experiment_id: To(a4),
    variation_id: l4,
    timestamp: lk,
    environment: nn("production", "staging", "development"),
  };

var p4 = "api.anthropic.com";

var ySn = 2048;

class dk {
  sources;
  docker;
  containedNoInternet;
  antDspEnvGate;
  antDspEnvGateSettled;
  constructor(e) {
    this.sources = e;
  }
  isDocker() {
    return (this.docker ??= Promise.resolve(this.sources.isDockerenvPresent()));
  }
  isBubblewrapSandbox() {
    return this.sources.platform === "linux" && this.sources.isBubblewrapEnvSet();
  }
  isRootOutsideDeliberateSandbox() {
    return (
      this.sources.platform !== "win32" &&
      this.sources.getuid() === 0 &&
      !this.sources.isSandboxEnvSet() &&
      !this.sources.isBubblewrapEnvSet()
    );
  }
  isContainedNoInternet() {
    return (this.containedNoInternet ??= this.probeContainedNoInternet());
  }
  async probeContainedNoInternet() {
    if (!((await this.isDocker()) || this.isBubblewrapSandbox() || this.sources.isSandboxEnvSet())) return !1;
    return !(await this.sources.hasInternetAccess());
  }
  passesAntDspEnvGate() {
    return (this.antDspEnvGate ??= this.evaluateAntDspEnvGate());
  }
  async evaluateAntDspEnvGate() {
    if (!(await this.isContainedNoInternet())) return (this.antDspEnvGateSettled = !1), !1;
    return (
      (this.antDspEnvGateSettled =
        (await this.sources.probeInternalNetworkAccess()) === null && !this.isRootOutsideDeliberateSandbox()),
      this.antDspEnvGateSettled
    );
  }
  passesAntDspEnvGateSync() {
    return this.antDspEnvGateSettled ?? !1;
  }
}

var T4 = new J(
  () =>
    new dk({
      platform: "darwin",
      isDockerenvPresent: XAt,
      isBubblewrapEnvSet: () => a.CLAUDE_CODE_BUBBLEWRAP,
      isSandboxEnvSet: () => process.env.IS_SANDBOX === "1",
      getuid: () => (typeof process.getuid === "function" ? process.getuid() : void 0),
      hasInternetAccess: () => a.hasInternetAccess(),
      probeInternalNetworkAccess: () => a.probeInternalNetworkAccess(),
    }),
);

var A4 = null;

var Vh = {
  terminal: a.TERMINAL_EMULATOR === "JetBrains-JediTerm" && a.platform !== "darwin" ? "pycharm" : a.terminal,
  getIsDocker() {
    return yo().isDocker();
  },
  getIsBubblewrapSandbox() {
    return yo().isBubblewrapSandbox();
  },
  passesAntDspEnvGate() {
    return yo().passesAntDspEnvGate();
  },
  passesAntDspEnvGateCached() {
    return yo().passesAntDspEnvGateSync();
  },
  isRootOutsideDeliberateSandbox() {
    return yo().isRootOutsideDeliberateSandbox();
  },
  isMuslEnvironment: b4,
  isAndroidEnvironment: y4,
};

var $n = he("claude_code", "claude-code-20250219"),
  LEe = he("oauth_auth", ud),
  Cr = he("interleaved_thinking", "interleaved-thinking-2025-05-14"),
  Vk = he("long_context", "context-1m-2025-08-07"),
  TMe = he("context_management", "context-management-2025-06-27"),
  PV = he("structured_outputs", "structured-outputs-2025-12-15"),
  Ro = he("web_search", "web-search-2025-03-05"),
  Qc = he("tool_search", "advanced-tool-use-2025-11-20"),
  vr = he("tool_search", "tool-search-tool-2025-10-19"),
  k8e = he("effort", "effort-2025-11-24"),
  n3t = he("task_budgets", "task-budgets-2026-03-13"),
  H8e = he("prompt_caching_scope", "prompt-caching-scope-2026-01-05"),
  Ude = he("prompt_caching_evict", "prompt-caching-evict-2026-05-12"),
  EMe = he("extended_cache_ttl", "extended-cache-ttl-2025-04-11"),
  x8e = he("speed", "fast-mode-2026-02-01"),
  DSt = he("redact_thinking", "redact-thinking-2026-02-12"),
  Ts = he("thinking_token_count", "thinking-token-count-2026-05-13"),
  rR = he("afk_mode", "afk-mode-2026-01-31"),
  SSn = he("advisor_tool", "advisor-tool-2026-03-01"),
  Bde = he("cache_diagnosis", "cache-diagnosis-2026-04-07"),
  bSn = he("context_hint", "context-hint-2026-04-09"),
  I8e = he("mcp_servers", "mcp-servers-2025-12-04"),
  wSn = he("files_api", "files-api-2025-04-14"),
  TSn = he("environments", "environments-2025-11-01"),
  ESn = he("ccr_byoc", "ccr-byoc-2025-07-29"),
  Kk = he("mid_conversation_system", "mid-conversation-system-2026-04-07"),
  GI = he("per_message_effort", "per-turn-control-2026-07-01"),
  Xk = he("server_side_fallback", "server-side-fallback-2026-06-01"),
  pg = he("server_side_fallback_category", "server-side-fallback-2026-07-01"),
  zI = he("fallback_credit", "fallback-credit-2026-06-01"),
  OSt = he("mid_conv_cache_promotion_latch", "x-cc-internal-mid-conv-cache-promotion"),
  ASn = he("mid_conv_cache_promotion_ok_latch", "x-cc-internal-mid-conv-cache-promotion-ok"),
  P8e = null,
  CSn = he("auto_mode_classifier", "auto-mode-classifier-2026-07-16"),
  DV = he("thinking_display_updates", "thinking-display-updates-2026-08-18"),
  C4 = null,
  LSt = null,
  v4 = Object.freeze(
    [
      $n,
      LEe,
      Cr,
      Vk,
      TMe,
      PV,
      Ro,
      Qc,
      vr,
      k8e,
      n3t,
      H8e,
      Ude,
      EMe,
      x8e,
      DSt,
      Ts,
      rR,
      SSn,
      Bde,
      bSn,
      I8e,
      wSn,
      TSn,
      ESn,
      Kk,
      GI,
      Xk,
      pg,
      zI,
      P8e,
      CSn,
      DV,
      LSt,
      C4,
    ].filter((e) => e !== null),
  ),
  pk = new Map(v4.map((e) => [e.header, e]));

var Zc = new Set([Cr, Vk, vr]),
  vSn = new Set([$n, Cr, TMe, LEe]);

var RSn = {
    repl_main_thread: !0,
    "repl_main_thread:outputStyle:custom": !0,
    "repl_main_thread:outputStyle:Concise": !0,
    "repl_main_thread:outputStyle:Proactive": !0,
    "repl_main_thread:outputStyle:Explanatory": !0,
    "repl_main_thread:outputStyle:Learning": !0,
    sdk: !0,
  },
  O4 = new Set([
    ...Object.keys(RSn),
    "agent:custom",
    "agent:default",
    "agent:builtin",
    "compact",
    "hook_agent",
    "hook_prompt",
    "side_question",
    "web_search_tool",
    ...[],
    "web_fetch_apply",
    "repl_sampling",
    "auto_mode",
    "compact_fab_check",
    "auto_mode_critique",
    "auto_mode_setup_propose",
    "chrome_mcp",
    "artifact_comment_reply",
  ]);

var fk = null;

function Cer(e) {
  fk = e;
}

var k4 = /^[A-Za-z0-9._:[\]-]{1,100}$/,
  w4 = /^[A-Za-z0-9._:[\]-]{1,91}@\d{8}(\[\d{1,3}[mM]\])?$/;

var mk = 200,
  gk = Date.now() - process.uptime() * 1000;

class hk {
  outputDir = void 0;
  linkedOutputs = new Map();
  linksInheritedBefore = gk;
  inheritedLinkLines = new Map();
  inheritPredecessorLinks(e, t) {
    if (!Number.isFinite(t)) return;
    this.inheritedLinkLines.set(e, Math.max(gk, Math.min(Date.now(), t)));
  }
  linksInheritedBeforeFor(e) {
    return Math.max(this.linksInheritedBefore, this.inheritedLinkLines.get(e) ?? 0);
  }
  outputPathBindings = new Map();
  pendingOutputOps = new Set();
  diskOutputs = new Map();
  terminalEmitClaims = new Set();
  monitorSockets = new Map();
  remoteSessionLogs = new Map();
  reportedBashTaskDeliveries = new Set();
  bashTaskDeliveryOutcomes = new Map();
  bashTaskSnapshots = new Map();
  bashTaskGetCounts = new Map();
  withdrawShellNotification = void 0;
  autoReactHumanTurnObserver = void 0;
  frameLiveUserStopObserver = void 0;
  liveDocUserStopObserver = void 0;
  autoReactDeliberateStopObserver = void 0;
  artifactRoomStopObserver = void 0;
  artifactPresenceStopObserver = void 0;
  agentIdleWindowTimers = new Map();
  agentBackgroundSignalResolvers = new Map();
  resumesInFlight = new Set();
  taskEvicted = Ue();
  agentStrandedMessages = Ue();
  agentSpawned = Ue();
  agentSettled = Ue();
  agentResumeFailed = Ue();
  cascadeStopExemptions = new Set();
  cascadeSpared = Ue();
  constructor() {
    this.taskEvicted.subscribe((e) => {
      this.remoteSessionLogs.delete(e);
    });
  }
  rememberBashTaskSnapshot(e, t, r) {
    if (
      (this.bashTaskSnapshots.delete(e),
      this.bashTaskSnapshots.set(e, { snapshot: t, agentId: r, fetched: !1 }),
      this.bashTaskSnapshots.size > mk)
    ) {
      let o = this.bashTaskSnapshots.keys().next().value;
      if (o !== void 0) this.bashTaskSnapshots.delete(o);
    }
  }
  countBashTaskGet(e) {
    let t = (this.bashTaskGetCounts.get(e) ?? 0) + 1;
    if ((this.bashTaskGetCounts.delete(e), this.bashTaskGetCounts.set(e, t), this.bashTaskGetCounts.size > mk)) {
      let r = this.bashTaskGetCounts.keys().next().value;
      if (r !== void 0) this.bashTaskGetCounts.delete(r);
    }
    return t;
  }
  markBashTaskSnapshotFetched(e) {
    let t = this.bashTaskSnapshots.get(e);
    if (t) this.bashTaskSnapshots.set(e, { ...t, fetched: !0 });
  }
  reset() {
    (this.outputDir = void 0), this.linkedOutputs.clear(), this.outputPathBindings.clear();
    for (let e of this.diskOutputs.values()) e.cancel();
    this.diskOutputs.clear(),
      this.terminalEmitClaims.clear(),
      this.remoteSessionLogs.clear(),
      this.bashTaskSnapshots.clear(),
      this.bashTaskGetCounts.clear(),
      this.reportedBashTaskDeliveries.clear(),
      this.bashTaskDeliveryOutcomes.clear();
  }
  async drainDiskOutputs() {
    for (let e of this.diskOutputs.values()) e.cancel();
    while (this.pendingOutputOps.size > 0) await Promise.allSettled([...this.pendingOutputOps]);
    this.diskOutputs.clear();
  }
}

var P4 = new J(() => new hk());

var M4 = 1000,
  i3t = "cli",
  D4 = 1000;

class Tk {
  queueKey = () => i3t;
  queuesByKey = new Map();
  evictedKeys = new Set();
  enqueueListener = null;
  queueUsedReported = !1;
  nonbookendEvictionReported = !1;
  bookendEvictionReported = !1;
  setQueueKey(e) {
    this.queueKey = e;
  }
  currentKey() {
    return this.queueKey();
  }
  setEnqueueListener(e) {
    this.enqueueListener = e;
  }
  queueCount() {
    return this.queuesByKey.size;
  }
  reset() {
    this.queuesByKey.clear(),
      this.evictedKeys.clear(),
      (this.queueKey = () => i3t),
      (this.enqueueListener = null),
      (this.queueUsedReported = !1),
      (this.nonbookendEvictionReported = !1),
      (this.bookendEvictionReported = !1);
  }
  currentQueueOrCreate() {
    let e = this.queueKey();
    if (this.evictedKeys.has(e)) return null;
    let t = this.queuesByKey.get(e);
    if (!t) (t = []), this.queuesByKey.set(e, t);
    return t;
  }
  currentQueueOrNull() {
    return this.queuesByKey.get(this.queueKey()) ?? null;
  }
  evictKey(e) {
    if ((this.queuesByKey.delete(e), this.evictedKeys.add(e), this.evictedKeys.size > D4)) {
      let t = this.evictedKeys.values().next().value;
      if (t !== void 0) this.evictedKeys.delete(t);
    }
  }
  enqueue(e) {
    if (!Le() && !rc()) return;
    if (e.type === "stream_event" && !Le() && this.enqueueListener === null) return;
    let t = this.currentQueueOrCreate();
    if (!t) return;
    if (t.length >= M4) {
      if (e.type === "stream_event") return;
      let r = t.findIndex(
        (o) =>
          o.type !== "conversation_reset" &&
          (o.type !== "system" ||
            (o.subtype !== "task_started" &&
              o.subtype !== "task_notification" &&
              !(o.subtype === "status" && o.status === null))),
      );
      if (r === -1) {
        if (!this.bookendEvictionReported)
          (this.bookendEvictionReported = !0), g("task_event_queue", "bookend_evicted");
        let o = t.findIndex(
          (u) =>
            u.type !== "conversation_reset" && !(u.type === "system" && u.subtype === "status" && u.status === null),
        );
        if (o === -1) t.shift();
        else t.splice(o, 1);
      } else {
        if (!this.nonbookendEvictionReported)
          (this.nonbookendEvictionReported = !0), g("task_event_queue", "nonbookend_evicted");
        t.splice(r, 1);
      }
    }
    if ((t.push(e), !this.queueUsedReported)) (this.queueUsedReported = !0), y("task_event_queue");
    this.enqueueListener?.();
  }
  hasQueued(e) {
    let t = this.currentQueueOrNull();
    return t !== null && t.some(e);
  }
  drain() {
    let e = this.currentQueueOrNull();
    if (!e || e.length === 0) return [];
    return e.splice(0).map((r) => ({ ...r, uuid: Sk(), session_id: K() }));
  }
  drainForSession(e) {
    let t = this.queuesByKey.get(e);
    if (!t || t.length === 0) return [];
    return t.splice(0).map((r) => ({ ...r, uuid: Sk(), session_id: e }));
  }
}

var I4 = new J(() => new Tk());

var ker = N4;

class yk {
  runtimeState = { status: "active" };
  hasLoggedCooldownExpiry = !1;
  creditsExhaustedNotifiedThisTurn = !1;
  orgStatus = { status: "pending" };
  lastPrefetchAt = 0;
  inflightPrefetch = null;
  cooldownTriggered = Ue();
  cooldownExpired = Ue();
  overageRejection = Ue();
  orgFastModeChange = Ue();
  reset() {
    (this.runtimeState = { status: "active" }),
      (this.hasLoggedCooldownExpiry = !1),
      (this.creditsExhaustedNotifiedThisTurn = !1),
      (this.orgStatus = { status: "pending" }),
      (this.lastPrefetchAt = 0),
      (this.inflightPrefetch = null);
  }
  enterCooldown(e, t) {
    (this.runtimeState = { status: "cooldown", resetAt: e, reason: t }), (this.hasLoggedCooldownExpiry = !1);
  }
  clearCooldown() {
    this.runtimeState = { status: "active" };
  }
  markCooldownExpiryLogged() {
    this.hasLoggedCooldownExpiry = !0;
  }
  replaceOrgStatus(e) {
    let t = this.orgStatus;
    return (this.orgStatus = e), t;
  }
  claimCreditsExhaustedNotice() {
    if (this.creditsExhaustedNotifiedThisTurn) return !1;
    return (this.creditsExhaustedNotifiedThisTurn = !0), !0;
  }
  rearmCreditsExhaustedNotice() {
    this.creditsExhaustedNotifiedThisTurn = !1;
  }
  beginPrefetchWindow(e, t) {
    if (e - this.lastPrefetchAt < t) return !1;
    return (this.lastPrefetchAt = e), !0;
  }
  trackInflightPrefetch(e) {
    this.inflightPrefetch = e;
  }
  clearInflightPrefetch(e) {
    if (this.inflightPrefetch === e) this.inflightPrefetch = null;
  }
}

var ge = new yk();

var U4 = new Set(["free", "preference", "extra_usage_disabled", "network_error", "unknown"]);

var B4 = 30000;

var H4 = {
    inputTokens: 5,
    outputTokens: 25,
    promptCacheWriteTokens: 6.25,
    promptCacheWrite1hTokens: 10,
    promptCacheReadTokens: 0.5,
    webSearchRequests: 0.01,
  },
  vk = {
    inputTokens: 30,
    outputTokens: 150,
    promptCacheWriteTokens: 37.5,
    promptCacheWrite1hTokens: 60,
    promptCacheReadTokens: 3,
    webSearchRequests: 0.01,
  },
  vs = {
    inputTokens: 10,
    outputTokens: 50,
    promptCacheWriteTokens: 12.5,
    promptCacheWrite1hTokens: 20,
    promptCacheReadTokens: 1,
    webSearchRequests: 0.01,
  },
  kMe = H4;

var V4 = new Set(Prr);

var gre = Object.assign(Object.create(null), { [SC(NY.firstParty)]: vs, [SC(Orr.firstParty)]: vs, ...G4() });

var j4 = 1.1;

var HMe = "X-Claude-Code-Session-Id";

class iO extends R {
  header;
  source;
  constructor(e, t, r) {
    super(e, "request header value rejected before send: not a valid HTTP header value");
    this.header = t;
    this.source = r;
    this.name = "InvalidRequestHeaderValueError";
  }
  get isUserSupplied() {
    return this.source !== "claude-code";
  }
}

var Q4 = new Set([
    "x-app",
    HMe,
    "x-claude-code-agent-id",
    "x-claude-code-parent-agent-id",
    "x-anthropic-additional-protection",
  ]),
  J4 = {
    "x-client-app": "CLAUDE_AGENT_SDK_CLIENT_APP",
    "x-claude-remote-container-id": "CLAUDE_CODE_CONTAINER_ID",
    "x-claude-remote-session-id": "CLAUDE_CODE_REMOTE_SESSION_ID",
    "User-Agent": "User-Agent environment",
  },
  vo = {
    ANTHROPIC_API_KEY: " from ANTHROPIC_API_KEY",
    apiKeyHelper: " from apiKeyHelper",
    "/login managed key": " from the saved /login API key",
    ANTHROPIC_AUTH_TOKEN: " from ANTHROPIC_AUTH_TOKEN",
    CLAUDE_CODE_OAUTH_TOKEN: " from CLAUDE_CODE_OAUTH_TOKEN",
    CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR: " from the OAuth token file descriptor",
    CCR_OAUTH_TOKEN_FILE: " from the OAuth token file",
    "claude.ai": " from the saved claude.ai login",
    ANTHROPIC_CUSTOM_HEADERS: " from ANTHROPIC_CUSTOM_HEADERS",
    CLAUDE_AGENT_SDK_CLIENT_APP: " from CLAUDE_AGENT_SDK_CLIENT_APP",
    CLAUDE_CODE_CONTAINER_ID: " from CLAUDE_CODE_CONTAINER_ID",
    CLAUDE_CODE_REMOTE_SESSION_ID: " from CLAUDE_CODE_REMOTE_SESSION_ID",
    "User-Agent environment": " from CLAUDE_CODE_ENTRYPOINT / CLAUDE_AGENT_SDK_VERSION / CLAUDE_AGENT_SDK_CLIENT_APP",
    unknown: "",
    "claude-code": "",
  };

var nX = /[\w.+-]{1,64}@[\w-]{1,63}(?:\.[\w-]{1,63}){0,7}\.[A-Za-z][\w-]{0,62}/g;

var oX = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g,
  iX = /\b(?:[A-Fa-f0-9]{1,4}:){2,7}(?::?[A-Fa-f0-9]{1,4}){1,7}\b/g,
  sX = /^\d{1,2}:\d{2}:\d{2}$/;

var lX =
    /(^|[^\w/.-])((?:\+\d{1,3}[ \t.-]?)?\(?\d{2,4}\)?[ \t.-]\d{2,4}[ \t.-]\d{2,4}(?:[ \t.-]\d{2,4}(?![ \t.-]\d))?)(?!\w)/g,
  cX = /^\s*\d{4}[-.]\d{2}[-.]\d{2}(?:[ T]\d{1,2})?\s*$/,
  uX = /\+\d{7,15}\b/g;

var pX = /\d/g;

var fX = [
  ...Own,
  [/\barn:(aws[\w-]*):([\w-]*):([\w-]*):\d*:[^\s"')\],]*/g, (e, t, r, o) => Nk("arn", t, r, o)],
  ...Lwn,
  [/(?<![A-Za-z0-9+_-])(?!mcp__)(?=[a-z_]*[A-Z0-9+-])[A-Za-z0-9+_-]{40,}={0,2}\b/g, "<blob>"],
];

var bn = /[^"'\n]*(?:['"](?=[^\s"',;:)\]}])[^"'\n]*)*/.source,
  gX = new RegExp(String.raw`~[\\/]` + bn, "g"),
  hX = new RegExp(String.raw`<drv>:\\` + bn, "g"),
  EX = new RegExp(String.raw`[A-Za-z]:\\` + bn, "g"),
  SX = new RegExp(String.raw`<unc>[\\/]?` + bn, "g"),
  TX = new RegExp(String.raw`\\\\(?=[^"'\n])` + bn, "g"),
  AX = new RegExp(String.raw`(?:[^\s"'\\]+\\){2,}` + bn, "g"),
  bX = new RegExp(String.raw`(?:\/[^\s"':]+){2,}` + bn, "g"),
  Ms = String.raw`E[A-Z0-9]+: [^,'\n]{1,80}, [a-z]\w{0,31} '`,
  yX = new RegExp(String.raw`\b(${Ms})[^]*`, "g");

var lu = String.raw`\{\s*\\?["'](?:type\\?["']\s*:\s*\\?["']error|request_id\\?["']\s*:\s*\\?["']req_|error\\?["']\s*:\s*\{)`,
  CX = new RegExp(String.raw`${lu}[^]*`, "g");

var kX = /(Error POSTing to endpoint(?: \(HTTP \d+\))?:\s*)[^]*/;

var PX = /(Header '[A-Za-z0-9!#$%&'*+.^_`|~-]+' has invalid value: )[^]*/,
  MX = /(Headers\.(?:append|set): )\\?"(?:[^]*\\?"( is an invalid header (?:name|value)\.)$|[^]*)/;

var xk = 120,
  DX = /^#?[A-Za-z_$][\w$]*$/,
  IX = [
    "user",
    "vol",
    "drv",
    "path",
    "email",
    "ip",
    "phone",
    "token",
    "jwt",
    "blob",
    "url",
    "userinfo",
    "server",
    "host",
    "redacted",
    "api-error-body",
  ],
  NX = ["http-body", "domains", "non-identifier"],
  xX = new RegExp(`^<(?:${IX.map(Vu).join("|")}|(?:${NX.map(Vu).join("|")})\\.\\d+)>$`),
  LX = 40,
  UX = " is not defined",
  wk = "Cannot access '",
  zX = "' before initialization",
  FX = ["Can't find private variable: PrivateSymbol.", "Can't find variable: "],
  BX = /[)\]}'"`.,; \t\r\n]*$/,
  HX = 8;

var KX =
  /(domains are not accessible to our user agent)(?!:? ?(?:<domains\.\d+>\. Read more: |<redacted>$))(:? ?)(?:\[('[a-z0-9._-]+'(?:, '[a-z0-9._-]+')*)\](?=\. Read more: )|[^]*)/gi;

var Bk = [
    String.raw`Hostname is too long\. Public domain names are required\.`,
    String.raw`Hostname contains non-ASCII characters that do not form a valid internationalized domain name\. Public domain names are required\.`,
    String.raw`Host is a non-canonical IP address literal \(resolves to <ip>\)\. Use the dotted-quad form or a domain name\.`,
    String.raw`Host looks like an IP address but could not be parsed\. Public domain names are required\.`,
    String.raw`IP address is in a restricted range \((?:<ip>|::1|::|fe80::|fc00::|ff00::)\/\d{1,3}\)\. Public domain names are required\.`,
    String.raw`Hostname matches restricted pattern \(e\.g\., (?:localhost|\*\.local|\*\.internal|\*\.localdomain)\)\. Public domain names are required\.`,
  ],
  Hk = String.raw`(Cannot use ')[^]*'?`,
  Gk = ["allowed_domains", "blocked_domains"],
  Ds = String.raw` in (?:${Gk.join("|")}): `,
  WX = new RegExp(String.raw`${Hk}(${Ds})(${Bk.join("|")})?[^]*`, "g"),
  YX = new RegExp(String.raw`${Hk}(${Ds}[^\n]*)[^]*`),
  $X = new RegExp(String.raw`('${Ds})(${Bk.join("|")})?[^]*`),
  qX =
    /(Invalid domain format: )(?:[^]*( in (?:allowed|blocked)_domains(?: contains (?:a newline|whitespace|'[*?]')\.(?: Wildcards, whitespace, and line breaks are not supported; provide a plain hostname like 'example\.com'\.)?|\.(?!\w)))[^]*|[^]*)/g,
  XX =
    /((?:allowed|blocked)_domains: ')(?:[^]*'?( is not a valid domain format\. Domains should follow the format example\.com or example\.com\/path\.)[^]*|[^]*)/g,
  QX = /([Tt]hese entries (?:are not supported|have a path): )[^]*/g,
  JX =
    /(entries conflict with domains blocked by your organization: )(?:[^]*(\. Remove them from `allowed_domains`, or ask an organization admin to unblock them\.)[^]*|[^]*)/g;

var t6 = /(arn):(aws[\w*?-]*|\*):([\w*?-]*):([\w*?-]*):[\d*?]*:[^\n]*/gi;

var ks = String.raw`(?:'|\\'|\\u0027|&#0*39;|&#[xX]0*27;|&apos;|\u2019|&#0*8217;|&#[xX]0*2019;|&rsquo;)`,
  r6 = new RegExp(String.raw`(Hostname(?:\/|\\\/|\\u002[Ff])IP does(?: not|n${ks}t) match certificate)[^]*`),
  o6 = new RegExp(
    String.raw`\b(Host: )\S*?(\. is not (?:in the cert${ks}s altnames|cert${ks}s CN): )[^]*|\b(IP: )\S+( is not in the cert${ks}s list: )[^]*|\b(Cert does not contain a DNS name)[^]+`,
  );

var uu = String.raw`(?:\b|\\[nrt]|\x1b\[[0-9;?]{0,20}[A-Za-z]|\\u001[bB]\[[0-9;?]{0,20}[A-Za-z]|_)`,
  s6 = new RegExp(
    String.raw`(${uu}Command (?:(?:failed with|timed out after|was killed with) [^:\n]{0,200}|was (?:gracefully )?canceled[^:\n]{0,200}|failed): )[^]*`,
  );

var l6 = `
  E2BIG EACCES EADDRINUSE EADDRNOTAVAIL EADV EAFNOSUPPORT EAGAIN
  EAI_ADDRFAMILY EAI_AGAIN EAI_BADFLAGS EAI_BADHINTS EAI_CANCELED EAI_FAIL
  EAI_FAMILY EAI_MEMORY EAI_NODATA EAI_NONAME EAI_OVERFLOW EAI_PROTOCOL
  EAI_SERVICE EAI_SOCKTYPE EALREADY EAUTH EBADARCH EBADE EBADEXEC EBADF EBADFD
  EBADMACHO EBADMSG EBADR EBADRPC EBADRQC EBADSLT EBFONT EBUSY ECANCELED
  ECHARSET ECHILD ECHRNG ECOMM ECONNABORTED ECONNREFUSED ECONNRESET EDEADLK
  EDEADLOCK EDESTADDRREQ EDEVERR EDOM EDOTDOT EDQUOT EEXIST EFAULT EFBIG
  EFTYPE EHOSTDOWN EHOSTUNREACH EHWPOISON EIDRM EILSEQ EINPROGRESS EINTR
  EINVAL EIO EISCONN EISDIR EISNAM EKEYEXPIRED EKEYREJECTED EKEYREVOKED EL2HLT
  EL2NSYNC EL3HLT EL3RST ELIBACC ELIBBAD ELIBEXEC ELIBMAX ELIBSCN ELNRNG ELOOP
  EMEDIUMTYPE EMFILE EMLINK EMSGSIZE EMULTIHOP ENAMETOOLONG ENAVAIL ENEEDAUTH
  ENETDOWN ENETRESET ENETUNREACH ENFILE ENOANO ENOATTR ENOBUFS ENOCSI ENODATA
  ENODEV ENOENT ENOEXEC ENOKEY ENOLCK ENOLINK ENOMEDIUM ENOMEM ENOMSG ENONET
  ENOPKG ENOPOLICY ENOPROTOOPT ENOSPC ENOSR ENOSTR ENOSYS ENOTBLK ENOTCONN
  ENOTDIR ENOTEMPTY ENOTNAM ENOTRECOVERABLE ENOTSOCK ENOTSUP ENOTTY ENOTUNIQ
  ENXIO EOF EOPNOTSUPP EOVERFLOW EOWNERDEAD EPERM EPFNOSUPPORT EPIPE EPROCLIM
  EPROCUNAVAIL EPROGMISMATCH EPROGUNAVAIL EPROTO EPROTONOSUPPORT EPROTOTYPE
  EPWROFF EQFULL ERANGE EREMCHG EREMOTE EREMOTEIO ERESTART ERFKILL EROFS
  ERPCMISMATCH ESHLIBVERS ESHUTDOWN ESOCKTNOSUPPORT ESPIPE ESRCH ESRMNT ESTALE
  ESTRPIPE ETIME ETIMEDOUT ETOOMANYREFS ETXTBSY EUCLEAN EUNATCH EUNKNOWN
  EUSERS EWOULDBLOCK EXDEV EXFULL
`
    .trim()
    .split(/\s+/),
  Wk = String.raw`(?=E[A-Z0-9]|U)(?:${l6.join("|")}|UNKNOWN|Unknown system error -?\d+)`,
  c6 = String.raw`(?:(?!'${Ds}|\b${Ms})[^\n])+`,
  $k = String.raw`(?:\r?\n\s*(?=\S))?`,
  u6 = String.raw`(?:\n\s*)?`,
  d6 = String.raw`( (?:${Wk})(?![A-Za-z0-9\-/]|_\w|\\(?!["\\/bfnrt]|u[0-9A-Fa-f]{4})|\.\w))[^]*`,
  p6 = new RegExp(String.raw`(${uu}spawn(?:Sync)? )${$k}${c6}${u6}${d6}`, "g"),
  f6 = new RegExp(String.raw`(${uu}spawn(?:Sync)? )${$k}[^\n]+(?:\n\s*(?=\S)[^\n]*)?(\u2026<truncated>)$`),
  _6 = /(Executable not found in \$PATH: )(?!<redacted>$)[^]*/,
  m6 = new RegExp(String.raw` (?:${Wk})`);

var qk = [
    "getaddrinfo",
    "getnameinfo",
    "getHostByAddr",
    "query(?:A|Aaaa|Any|Caa|Cname|Mx|Naptr|Ns|Ptr|Soa|Srv|Tlsa|Txt)",
    "connect",
  ],
  S6 = `(?:${qk.join("|")})`,
  ew = String.raw`${S6} E[A-Z][A-Z0-9_]{1,30} `,
  du = String.raw`\s"'\`,;()<>[\]{}\\\u2026`,
  y6 = String.raw`(?:"{1,2}|[,;'\`(){}]+)`,
  ws = String.raw`(?!\b(?:${ew}|${Ms}))`,
  U6 = String.raw`(?![,;'\`(){}]*${lu})`,
  tw = te([...qk.map((e) => e.charAt(0)), "E"]).join(""),
  Mk = String.raw`[^${du}${tw}]*`,
  nw = String.raw`${Mk}(?:(?:${ws}[${tw}]+|${U6}${y6}${ws}[^${du}])${Mk})*`,
  B6 = String.raw`${ws}(?![A-Za-z]:[\\/]|\.{1,2}[\\/])[^${du}/~]${nw}`,
  V6 = new RegExp(String.raw`\b(${ew})(["'\`({])?(${B6})( ${ws}\3${nw})?`, "g"),
  G6 = /[^.,;:!?'"`)}~][.,;:!?'"`)}~]*$/,
  K6 = /^(?:\d{1,3}\.){3}\d{1,3}(:\d{1,5})?$/,
  Dk = /^[0-9A-Fa-f.]*:[0-9A-Fa-f.]*:[0-9A-Fa-f:.]*$/,
  j6 = /^(?:undefined|null)(?::\d{1,5})?$/,
  W6 = /:\d{1,5}$/,
  $6 = /^\d{1,4}$/,
  q6 = /^(?:([^]*)([^A-Za-z0-9]))?(bearer|basic)$/i,
  X6 = /~\//,
  Q6 = /\b[A-Za-z]:\//,
  J6 = /(?:~|[A-Za-z]:)$/,
  Z6 = /(?:\/[^\s"':]+){2}/;

var t3 = new RegExp(String.raw`\b${Ms}|${lu}`),
  n3 = 160;

var i3 = new RegExp(
  String.raw`(<host>(?::\d{1,5})?[.,;:!?~\`(){}'"]*)[\\\[\]<>\u2026]` +
    String.raw`(?:[^\s"'/]|['"](?=[^\s"',;:)\]}])){0,255}(?:\/|<path>)` +
    bn,
  "g",
);

var Ik = 4000;

var c3 = 3000,
  sw = m(() => f({ id: i(), display_name: i().optional() }).strip()),
  u3 = m(() => f({ baseUrl: i(), fetchedAt: v(), models: H(sw()) }));

var ow = new WeakMap();

var lw = {
  "claude-opus-4-1": {
    modelName: "Claude Opus 4.1",
    retirementDates: {
      firstParty: null,
      bedrock: null,
      vertex: null,
      foundry: null,
      anthropicAws: null,
      anthropicGoogleCloud: null,
      mantle: null,
      gateway: null,
    },
    remappedTo: "the latest Opus",
  },
  "claude-opus-4-0": {
    modelName: "Claude Opus 4",
    retirementDates: {
      firstParty: "June 15, 2026",
      bedrock: "May 31, 2026",
      vertex: "September 14, 2026",
      foundry: null,
      anthropicAws: null,
      anthropicGoogleCloud: null,
      mantle: null,
      gateway: null,
    },
    remappedTo: "the latest Opus",
  },
  "claude-sonnet-4-0": {
    modelName: "Claude Sonnet 4",
    retirementDates: {
      firstParty: "June 15, 2026",
      bedrock: "October 14, 2026",
      vertex: "September 14, 2026",
      foundry: null,
      anthropicAws: null,
      anthropicGoogleCloud: null,
      mantle: null,
      gateway: null,
    },
  },
  "claude-3-opus": {
    modelName: "Claude 3 Opus",
    retirementDates: {
      firstParty: "January 5, 2026",
      bedrock: "January 15, 2026",
      vertex: "January 5, 2026",
      foundry: "January 5, 2026",
      anthropicAws: null,
      anthropicGoogleCloud: null,
      mantle: null,
      gateway: null,
    },
  },
  "claude-3-7-sonnet": {
    modelName: "Claude 3.7 Sonnet",
    retirementDates: {
      firstParty: "February 19, 2026",
      bedrock: "April 28, 2026",
      vertex: "May 11, 2026",
      foundry: "February 19, 2026",
      anthropicAws: null,
      anthropicGoogleCloud: null,
      mantle: null,
      gateway: null,
    },
  },
  "claude-3-5-haiku": {
    modelName: "Claude 3.5 Haiku",
    retirementDates: {
      firstParty: "February 19, 2026",
      bedrock: null,
      vertex: null,
      foundry: null,
      anthropicAws: null,
      anthropicGoogleCloud: null,
      mantle: null,
      gateway: null,
    },
  },
};

var zs = { fable: { available: zEe, defaultModel: () => jSt(), builtinDefault: (e) => Su(e) } };

var FSn = "opus46",
  vH = "sonnet45",
  LV = "haiku45",
  M8e = "opus5",
  N8e = "opus5",
  GEe = "opus5",
  F8e = "fable5";

var h3 = {
  firstParty: "first_party",
  bedrock: "bedrock",
  vertex: "vertex",
  foundry: "foundry",
  anthropicAws: "anthropic_aws",
  anthropicGoogleCloud: "anthropic_google_cloud",
  mantle: "mantle",
  gateway: "gateway",
};

var S3 = new RegExp(`^((${gj.join("|")})\\.)?(anthropic\\.|claude-)`);

var A3 = new Set(Iw());

_k(() => bC(at()));

var y3 = new Set([
  "claude-3-opus",
  "claude-3-sonnet",
  "claude-3-haiku",
  "claude-3-5-sonnet",
  "claude-3-5-haiku",
  "claude-3-7-sonnet",
  "claude-opus-4-0",
  "claude-opus-4-1",
  "claude-opus-4-5",
  "claude-opus-4-6",
  "claude-sonnet-4-0",
  "claude-sonnet-4-5",
  "claude-sonnet-4-6",
  "claude-haiku-4-5",
]);

var C3 = ["claude-opus-4-20250514", "claude-opus-4-1-20250805", "claude-opus-4-0", "claude-opus-4-1"];

var v3 = new Set([
    "claude-opus-4-6",
    "claude-opus-4-7",
    "claude-opus-4-8",
    "claude-opus-5",
    "claude-sonnet-4-0",
    "claude-sonnet-4-5",
    "claude-sonnet-4-6",
  ]),
  w3 = new Map([
    ["claude-3-7-sonnet", "Claude 3.7 Sonnet"],
    ["claude-3-5-sonnet", "Claude 3.5 Sonnet"],
    ["claude-3-5-haiku", "Claude 3.5 Haiku"],
  ]);

var Lw = m(() => f({ id: i(), max_input_tokens: v().optional(), max_tokens: v().optional() }).strip()),
  Y3 = m(() => f({ models: H(Lw()), timestamp: v() }));

var q8e = 200000,
  g$ = 200000,
  J3 = 32000,
  Z3 = 128000;

var tQ = 1e6;

var rQ = [
  {
    modelEnvVar: "ANTHROPIC_DEFAULT_FABLE_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES",
  },
  {
    modelEnvVar: "ANTHROPIC_DEFAULT_OPUS_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES",
  },
  {
    modelEnvVar: "ANTHROPIC_DEFAULT_SONNET_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES",
  },
  {
    modelEnvVar: "ANTHROPIC_DEFAULT_HAIKU_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES",
  },
  {
    modelEnvVar: "ANTHROPIC_CUSTOM_MODEL_OPTION",
    capabilitiesEnvVar: "ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES",
  },
];

var iQ = [
    "rainbow_red",
    "rainbow_orange",
    "rainbow_yellow",
    "rainbow_green",
    "rainbow_blue",
    "rainbow_indigo",
    "rainbow_violet",
  ],
  sQ = [
    "rainbow_red_shimmer",
    "rainbow_orange_shimmer",
    "rainbow_yellow_shimmer",
    "rainbow_green_shimmer",
    "rainbow_blue_shimmer",
    "rainbow_indigo_shimmer",
    "rainbow_violet_shimmer",
  ];

var Kw = new Set([Vk]);

var jw = new Set([$n, Cr, Vk, TMe, PV, Ro, k8e, vr, rR, zI, Kk]);

var fQ = "Invalid SemVer: <redacted>";

var _Q = /^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/;

var tbt = 60000,
  gQ = 8388608,
  Yw = 32768,
  Ww = 262144;

class Ws extends Error {
  waitedMs;
  constructor(e) {
    super("transfer stalled");
    this.waitedMs = e;
    this.name = "UploadStalledError";
  }
}

var SQ = /\\ud[89a-f][0-9a-f]{2}/;

var bQ = [
    "blocking_limit",
    "rapid_refill_breaker",
    "prompt_too_long",
    "image_error",
    "model_error",
    "api_error",
    "malformed_tool_use_exhausted",
    "aborted_streaming",
    "aborted_tools",
    "stop_hook_prevented",
    "hook_stopped",
    "tool_deferred",
    "max_turns",
    "background_requested",
    "completed",
  ],
  yQ = ["budget_exhausted", "structured_output_retry_exhausted", "tool_deferred_unavailable", "turn_setup_failed"],
  Qw = [...bQ, ...yQ];

var Jw = [
  "user-rejected",
  "permission-rule",
  "automode-blocked",
  "automode-unavailable",
  "automode-parsing-error",
  "interrupted",
  "cancelled",
];

var Ys = m(() =>
    f({
      inputTokens: v().int(),
      outputTokens: v().int(),
      cacheReadInputTokens: v().int(),
      cacheCreationInputTokens: v().int(),
      webSearchRequests: v().int(),
      costUSD: v(),
      contextWindow: v().int(),
      maxOutputTokens: v().int(),
      canonicalModel: i()
        .optional()
        .describe(
          "Canonical model id used for the pricing lookup (e.g. 'claude-opus-4-7'). May differ from the raw model string this entry is keyed by (provider-specific ids, aliases).",
        ),
      provider: i()
        .optional()
        .describe(
          "API provider that served this model (e.g. 'firstParty', 'bedrock', 'vertex', 'foundry', 'anthropicAws', 'mantle', 'gateway').",
        ),
      costBasis: oe(["list", "managed", "unknown"])
        .optional()
        .describe(
          "Which price table the most recent request for this model was priced at: Claude Code's built-in list prices ('list'), the organization's managed-settings modelPricing rates or multiplier ('managed'), or neither ('unknown' \u2014 no pricing row and no built-in price matched the model ID, so costUSD is a guess at the default model's rate). Overwritten per request like canonicalModel, so a consumer that differences the cumulative costUSD per turn gets that turn's basis. Absent until this process has priced a request for the model (e.g. right after --resume) and on builds that predate the field; treat as 'list'.",
        ),
    }),
  ),
  RQ = m(() => N("json_schema")),
  p_e = m(() => f({ type: RQ() })),
  CQ = m(() => f({ type: N("json_schema"), schema: De(i(), _e()) })),
  f_e = m(() => CQ()),
  vQ = m(() =>
    oe([
      "ANTHROPIC_API_KEY",
      "apiKeyHelper",
      "/login managed key",
      "none",
      "user",
      "project",
      "org",
      "temporary",
      "oauth",
    ]).describe(
      "Where the credential used for API requests came from: 'ANTHROPIC_API_KEY' (environment variable), 'apiKeyHelper' (the configured helper command), '/login managed key' (an API key created and stored by /login with an Anthropic Console account), or 'none' (no API key in use - e.g. claude.ai OAuth login, a bearer token, or a third-party cloud provider). 'user' | 'project' | 'org' | 'temporary' | 'oauth' are legacy members that current CLIs never emit; they remain only so the type stays backward compatible.",
    ),
  ),
  __e = m(() => oe(["local", "user", "project"]).describe("Config scope for settings.")),
  m_e = m(() => N("context-1m-2025-08-07")),
  OQ = m(() =>
    f({ type: N("adaptive"), display: oe(["summarized", "omitted"]).optional() }).describe(
      "Claude decides when and how much to think (Opus 4.6+).",
    ),
  ),
  kQ = m(() =>
    f({ type: N("enabled"), budgetTokens: v().optional(), display: oe(["summarized", "omitted"]).optional() }).describe(
      "Fixed thinking token budget (older models)",
    ),
  ),
  wQ = m(() => f({ type: N("disabled") }).describe("No extended thinking")),
  g_e = m(() =>
    dt([OQ(), kQ(), wQ()]).describe(
      "Controls Claude's thinking/reasoning behavior. When set, takes precedence over the deprecated maxThinkingTokens.",
    ),
  ),
  wu = m(() =>
    N("comms")
      .optional()
      .catch(void 0)
      .describe(
        "@internal Coordinator-mode role for this MCP server. 'comms' marks the server the coordinator uses to address the user; the coordinator tool filter lets comms-roled servers' tools through. Claude Code extension to .mcp.json \u2014 host-side config, not part of the MCP wire protocol. Coordinator mode is activated via the CLAUDE_CODE_COORDINATOR_MODE environment variable; this field only takes effect when coordinator mode is active.",
      ),
  ),
  sP =
    "Per-server tool-call timeout in milliseconds. Overrides the MCP_TOOL_TIMEOUT environment variable for this server. Hard wall-clock limit per call; progress notifications do not extend it. Values below 1000ms are ignored (falls through to MCP_TOOL_TIMEOUT or the default).",
  Mo = m(() => v().int().positive().optional().describe(sP)),
  aP = m(() =>
    v()
      .int()
      .positive()
      .optional()
      .describe(
        "Per-server HTTP request timeout in milliseconds, set by the host on the mcp_set_servers control event. Raises the per-request fetch first-byte budget and the tool-call watchdog for this server. Capped at 5 minutes. Ignored when `timeout` is also set.\n@internal",
      ),
  ),
  PQ = m(() =>
    f({
      type: N("stdio").optional(),
      command: i(),
      args: H(i()).optional(),
      env: De(i(), i()).optional(),
      timeout: Mo(),
      alwaysLoad: q()
        .optional()
        .describe(
          "When true, all tools from this server are always included in the prompt and never deferred behind tool search. Equivalent to setting defer_loading: false on the API. Default: tools are deferred when tool search is enabled. As a side effect this also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built.",
        ),
      role: wu(),
    }),
  ),
  lP = m(() =>
    f({
      name: i(),
      permission_policy: oe(["always_allow", "always_ask", "always_deny"]).optional(),
      org_max_permission: oe(["allow", "ask", "blocked"])
        .optional()
        .describe(
          "Org admin's per-tool ceiling. Drives the auto-mode isOrgAskCeiling gate so an admin 'ask' cap forces a user prompt even in auto mode.",
        ),
    }).describe("Per-tool permission policy carried on mcp_set_servers for remote servers."),
  ),
  MQ = m(() =>
    f({
      type: N("sse"),
      url: i(),
      headers: De(i(), i()).optional(),
      tools: H(lP()).optional(),
      timeout: Mo(),
      request_timeout_ms: aP(),
      alwaysLoad: q()
        .optional()
        .describe(
          "When true, all tools from this server are always included in the prompt and never deferred behind tool search. Equivalent to setting defer_loading: false on the API. Default: tools are deferred when tool search is enabled. As a side effect this also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built.",
        ),
      role: wu(),
    }),
  ),
  DQ = m(() =>
    f({
      type: N("http"),
      url: i(),
      headers: De(i(), i()).optional(),
      tools: H(lP()).optional(),
      timeout: Mo(),
      request_timeout_ms: aP(),
      alwaysLoad: q()
        .optional()
        .describe(
          "When true, all tools from this server are always included in the prompt and never deferred behind tool search. Equivalent to setting defer_loading: false on the API. Default: tools are deferred when tool search is enabled. As a side effect this also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built.",
        ),
      role: wu(),
    }),
  ),
  Pu = m(() =>
    f({
      type: N("sdk"),
      name: i(),
      timeout: Mo()
        .catch(void 0)
        .describe(
          `${sP} Applies when the server is first registered; changing it for an already-registered server has no effect until it is removed and re-added.`,
        ),
    }),
  ),
  $s = m(() => dt([PQ(), MQ(), DQ(), Pu()])),
  IQ = m(() => f({ type: N("claudeai-proxy"), url: i(), id: i(), timeout: Mo() })),
  NQ = m(() => dt([$s(), IQ()])),
  Mu = m(() =>
    f({
      name: i().describe("Server name as configured"),
      status: oe(["connected", "failed", "needs-auth", "pending", "disabled"]).describe("Current connection status"),
      serverInfo: f({ name: i(), version: i() }).optional().describe("Server information (available when connected)"),
      error: i().optional().describe("Error message (available when status is 'failed')"),
      config: NQ().optional().describe("Server configuration (includes URL for HTTP/SSE servers)"),
      scope: i().optional().describe("Configuration scope (e.g., project, user, local, claudeai, managed)"),
      tools: H(
        f({
          name: i(),
          description: i().optional(),
          annotations: f({
            readOnly: q().optional(),
            destructive: q().optional(),
            openWorld: q().optional(),
          }).optional(),
        }),
      )
        .optional()
        .describe("Tools provided by this server (available when connected)"),
      capabilities: f({ experimental: De(i(), _e()).optional() })
        .optional()
        .describe(
          "@internal Server capabilities (available when connected). experimental['claude/channel'] is only present if the server's plugin is on the approved channels allowlist \u2014 use its presence to decide whether to show an Enable-channel prompt.",
        ),
    }).describe("Status information for an MCP server connection."),
  ),
  h_e = m(() =>
    f({
      added: H(i()).describe("Names of servers that were added"),
      removed: H(i()).describe("Names of servers that were removed"),
      errors: De(i(), i()).describe("Map of server names to error messages for servers that failed to connect"),
    }).describe("Result of a setMcpServers operation."),
  ),
  wr = m(() => oe(["userSettings", "projectSettings", "localSettings", "session", "cliArg"])),
  Ou = m(() => oe(["allow", "deny", "ask"])),
  xQ = m(() => oe(["allow", "deny", "ask", "defer"])),
  ku = m(() => f({ toolName: i(), ruleContent: i().optional() })),
  Do = m(() =>
    ps("type", [
      f({ type: N("addRules"), rules: H(ku()), behavior: Ou(), destination: wr() }),
      f({ type: N("replaceRules"), rules: H(ku()), behavior: Ou(), destination: wr() }),
      f({ type: N("removeRules"), rules: H(ku()), behavior: Ou(), destination: wr() }),
      f({ type: N("setMode"), mode: zH(() => Rt()), destination: wr() }),
      f({ type: N("addDirectories"), directories: H(i()), destination: wr() }),
      f({ type: N("removeDirectories"), directories: H(i()), destination: wr() }),
    ]),
  ),
  Zw = m(() =>
    oe(["user_temporary", "user_permanent", "user_reject"]).describe(
      "Classification of this permission decision for telemetry. SDK hosts that prompt users (desktop apps, IDEs) should set this to reflect what actually happened: user_temporary for allow-once, user_permanent for always-allow (both the click and later cache hits), user_reject for deny. If unset, the CLI infers conservatively (temporary for allow, reject for deny). The vocabulary matches tool_decision OTel events (monitoring-usage docs).",
    ),
  ),
  cP = m(() =>
    dt([
      f({
        behavior: N("allow"),
        updatedInput: De(i(), _e()).optional(),
        updatedPermissions: H(Do()).optional(),
        toolUseID: i().optional(),
        decisionClassification: Zw().optional(),
      }),
      f({
        behavior: N("deny"),
        message: i(),
        interrupt: q().optional(),
        toolUseID: i().optional(),
        decisionClassification: Zw().optional(),
      }),
    ]),
  ),
  Rt = m(() =>
    Sa(bm, oe(["default", "acceptEdits", "bypassPermissions", "plan", "dontAsk", "auto"])).describe(
      "Permission mode for controlling how tool executions are handled. 'default' - Standard behavior, prompts for dangerous operations. 'acceptEdits' - Auto-accept file edit operations. 'bypassPermissions' - Bypass all permission checks (requires allowDangerouslySkipPermissions). 'plan' - Planning mode, no actual tool execution. 'dontAsk' - Don't prompt for permissions, deny if not pre-approved. 'auto' - Use a model classifier to approve/deny permission prompts.",
    ),
  ),
  LQ = [
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "PostToolBatch",
    "Notification",
    "UserPromptSubmit",
    "UserPromptExpansion",
    "SessionStart",
    "SessionEnd",
    "Stop",
    "StopFailure",
    "SubagentStart",
    "SubagentStop",
    "PreCompact",
    "PostCompact",
    "PreModelSwitch",
    "PostModelSwitch",
    "PermissionRequest",
    "PermissionDenied",
    "Setup",
    "TeammateIdle",
    "TaskCreated",
    "TaskCompleted",
    "Elicitation",
    "ElicitationResult",
    "ConfigChange",
    "WorktreeCreate",
    "WorktreeRemove",
    "InstructionsLoaded",
    "CwdChanged",
    "FileChanged",
    "DirectoryAdded",
    "MessageDisplay",
  ],
  uP = m(() => oe(LQ));

var Ee = m(() =>
    f({
      session_id: i(),
      transcript_path: i(),
      cwd: i(),
      prompt_id: i()
        .optional()
        .describe(
          "UUID correlating a user prompt with all subsequent events until the next prompt. Same value emitted on OpenTelemetry events as the `prompt.id` attribute, so hook output can be joined to OTel events at prompt grain. Absent until the first user input of the process lifetime.",
        ),
      permission_mode: i().optional(),
      agent_id: i()
        .optional()
        .describe(
          "Subagent identifier. Present only when the hook fires from within a subagent (e.g., a tool called by an AgentTool worker). Absent for the main thread, even in --agent sessions. Use this field (not agent_type) to distinguish subagent calls from main-thread calls.",
        ),
      agent_type: i()
        .optional()
        .describe(
          'Agent type name (e.g., "general-purpose", "code-reviewer"). Present when the hook fires from within a subagent (alongside agent_id), or on the main thread of a session started with --agent (without agent_id).',
        ),
      effort: f({
        level: i().describe(
          'Active effort level for the current turn (e.g., "low", "medium", "high", "xhigh", "max"), after any silent downgrade for the selected model. Also exposed to hook commands and Bash as the CLAUDE_EFFORT env var.',
        ),
      })
        .optional()
        .describe(
          "Reasoning effort applied to the current turn. Same shape as StatusLineCommandInput.effort. Present for hooks that fire within a tool-use context (PreToolUse, PostToolUse, Stop, SubagentStop, etc.) on a model that supports the effort parameter; absent for session-lifecycle hooks and models without effort support.",
        ),
    }),
  ),
  UQ = m(() => Ee().and(f({ hook_event_name: N("PreToolUse"), tool_name: i(), tool_input: _e(), tool_use_id: i() }))),
  zQ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("PermissionRequest"),
        tool_name: i(),
        tool_input: _e(),
        permission_suggestions: H(Do()).optional(),
      }),
    ),
  ),
  FQ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("PostToolUse"),
        tool_name: i(),
        tool_input: _e(),
        tool_response: _e(),
        tool_use_id: i(),
        duration_ms: v()
          .optional()
          .describe("Tool execution time in milliseconds. Excludes permission-prompt and hook time."),
      }),
    ),
  ),
  BQ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("PostToolUseFailure"),
        tool_name: i(),
        tool_input: _e(),
        tool_use_id: i(),
        error: i(),
        is_interrupt: q().optional(),
        duration_ms: v()
          .optional()
          .describe("Tool execution time in milliseconds. Excludes permission-prompt and hook time."),
      }),
    ),
  ),
  HQ = m(() => f({ tool_name: i(), tool_input: _e(), tool_use_id: i(), tool_response: _e().optional() })),
  VQ = m(() =>
    Ee()
      .and(f({ hook_event_name: N("PostToolBatch"), tool_calls: H(HQ()) }))
      .describe(
        "Hook input for the PostToolBatch event. Fired once after every tool call in a batch has resolved, before the next model request. PostToolUse fires per-tool and may run concurrently for parallel tool calls; PostToolBatch fires exactly once with the full batch.",
      ),
  ),
  GQ = m(() =>
    Ee().and(
      f({ hook_event_name: N("PermissionDenied"), tool_name: i(), tool_input: _e(), tool_use_id: i(), reason: i() }),
    ),
  ),
  KQ = m(() =>
    Ee().and(f({ hook_event_name: N("Notification"), message: i(), title: i().optional(), notification_type: i() })),
  ),
  jQ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("UserPromptSubmit"),
        prompt: i(),
        source: oe(["user", "sdk", "system", "loop_wakeup", "schedule_wakeup", "poll_event"])
          .optional()
          .describe(
            "Who authored/injected the prompt: `user` = submitted from the interactive composer, `sdk` = non-interactive entrypoint (`-p` / Agent SDK), `loop_wakeup` = dynamic /loop wakeup, `schedule_wakeup` = scheduled-task fire (CronCreate/routine), `system` = other machine-injected turns (peer/channel messages, task notifications, auto-continuation), `poll_event` = the poll-event channel enqueue-time pass (the hook fires when the host submits an event, before its delivery ack exists \u2014 a blocking verdict rejects the event). Payloads may omit it while the field rolls out.",
          ),
        session_title: i().optional(),
      }),
    ),
  ),
  WQ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("UserPromptExpansion"),
        expansion_type: oe(["slash_command", "mcp_prompt"]),
        command_name: i(),
        command_args: i(),
        command_source: i().optional(),
        prompt: i(),
      }),
    ),
  ),
  YQ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("SessionStart"),
        source: oe(["startup", "resume", "clear", "compact", "fork"]),
        agent_type: i().optional(),
        model: i().optional(),
        session_title: i().optional(),
        seconds_since_last_response: v()
          .optional()
          .describe("resume/fork: seconds since the resumed transcript's last assistant response"),
        context_tokens: v()
          .optional()
          .describe(
            "resume/fork: the resumed transcript's last response input + cache_read + cache_creation + output tokens (for a server-side tool loop, its last iteration's window, not the summed totals)",
          ),
        prompt_cache_likely_expired: q()
          .optional()
          .describe(
            "resume/fork: seconds_since_last_response exceeds the prompt-cache TTL, so the first request re-caches context_tokens",
          ),
        estimated_cache_write_usd: v()
          .optional()
          .describe(
            "resume/fork: estimated cost of re-caching context_tokens on the session model \u2014 the managed modelPricing when set, otherwise list price; excludes the response",
          ),
      }),
    ),
  ),
  $Q = m(() => Ee().and(f({ hook_event_name: N("Setup"), trigger: oe(["init", "maintenance"]) }))),
  dP = m(() =>
    f({
      id: i(),
      type: i().describe(
        "Friendly task-type label (e.g. 'shell', 'subagent', 'monitor', 'workflow'). Falls back to the raw discriminant for unknown types.",
      ),
      status: i(),
      description: i().describe(
        "Free-text description. Capped at 1000 chars; clipped values append " +
          'an in-string "\u2026 [+N chars]" marker.',
      ),
      command: i()
        .optional()
        .describe(
          "Shell command line. Only present for 'shell' tasks. Capped at 1000 " +
            'chars with the same "\u2026 [+N chars]" marker.',
        ),
      agent_type: i().optional().describe("Subagent type name. Only present for 'subagent' tasks."),
      server: i().optional().describe("MCP server name. Only present for 'monitor' / 'MCP task' tasks."),
      tool: i().optional().describe("MCP tool name. Only present for 'monitor' / 'MCP task' tasks."),
      name: i().optional().describe("Workflow name. Only present for 'workflow' tasks."),
    }),
  ),
  pP = m(() =>
    f({
      id: i(),
      schedule: i().describe('Cron expression, e.g. "0 9 * * 1-5".'),
      recurring: q().describe(
        "False for one-shot wakeups whose cron field encodes a single fire time; true for tasks that re-fire on every match.",
      ),
      prompt: i().describe(
        "Prompt text submitted when the cron fires. Capped at 1000 chars; " +
          'clipped values append an in-string "\u2026 [+N chars]" marker.',
      ),
    }),
  ),
  qQ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("Stop"),
        stop_hook_active: q(),
        last_assistant_message: i()
          .optional()
          .describe(
            "Text content of the last assistant message before stopping. Avoids the need to read and parse the transcript file.",
          ),
        background_tasks: H(dP())
          .optional()
          .describe(
            'In-flight background work (running/pending + backgrounded) registered in this session. Lets hooks distinguish "session is done" from "session is paused waiting for background work to wake it". Empty array when nothing is in flight.',
          ),
        session_crons: H(pP())
          .optional()
          .describe(
            "Session-scoped cron tasks (CronCreate, ScheduleWakeup, /loop) that will wake this session later. Empty array when none are scheduled.",
          ),
      }),
    ),
  ),
  XQ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("StopFailure"),
        error: Nu(),
        error_details: i().optional(),
        last_assistant_message: i().optional(),
      }),
    ),
  ),
  QQ = m(() => Ee().and(f({ hook_event_name: N("SubagentStart"), agent_id: i(), agent_type: i() }))),
  JQ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("SubagentStop"),
        stop_hook_active: q(),
        agent_id: i(),
        agent_transcript_path: i(),
        agent_type: i(),
        last_assistant_message: i()
          .optional()
          .describe(
            "Text content of the last assistant message before stopping. Avoids the need to read and parse the transcript file.",
          ),
        background_tasks: H(dP())
          .optional()
          .describe(
            'In-flight background work (running/pending + backgrounded) registered in this session. Lets hooks distinguish "session is done" from "session is paused waiting for background work to wake it". Empty array when nothing is in flight.',
          ),
        session_crons: H(pP())
          .optional()
          .describe(
            "Session-scoped cron tasks (CronCreate, ScheduleWakeup, /loop) that will wake this session later. Empty array when none are scheduled.",
          ),
      }),
    ),
  ),
  ZQ = m(() =>
    Ee().and(
      f({ hook_event_name: N("PreCompact"), trigger: oe(["manual", "auto"]), custom_instructions: i().nullable() }),
    ),
  ),
  eJ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("PostCompact"),
        trigger: oe(["manual", "auto"]),
        compact_summary: i().describe("The conversation summary produced by compaction"),
      }),
    ),
  ),
  tJ = {
    command: "command: /model <name>, the /config Model row, or enabling fast mode when that promotes the model",
    picker: "picker: an interactive model picker",
    sdk: "sdk: headless set_model (SDK, Remote Control, IDE)",
    auto: "auto: automatic fallback or other programmatic change",
    resume: "resume: model restored while resuming a session",
  };

var rJ = m(() =>
    Ee()
      .and(f({ hook_event_name: N("PreModelSwitch") }))
      .and(fP(["command", "picker", "sdk"])),
  ),
  oJ = m(() =>
    Ee()
      .and(f({ hook_event_name: N("PostModelSwitch") }))
      .and(fP(["command", "picker", "sdk", "auto", "resume"])),
  ),
  iJ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("TeammateIdle"),
        teammate_name: i(),
        team_name: i().describe(
          "@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.",
        ),
      }),
    ),
  ),
  aJ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("TaskCreated"),
        task_id: i(),
        task_subject: i(),
        task_description: i().optional(),
        teammate_name: i().optional(),
        team_name: i()
          .optional()
          .describe(
            "@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.",
          ),
      }),
    ),
  ),
  lJ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("TaskCompleted"),
        task_id: i(),
        task_subject: i(),
        task_description: i().optional(),
        teammate_name: i().optional(),
        team_name: i()
          .optional()
          .describe(
            "@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.",
          ),
      }),
    ),
  ),
  cJ = m(() =>
    Ee()
      .and(
        f({
          hook_event_name: N("Elicitation"),
          mcp_server_name: i(),
          message: i(),
          mode: oe(["form", "url"]).optional(),
          url: i().optional(),
          elicitation_id: i().optional(),
          requested_schema: De(i(), _e()).optional(),
        }),
      )
      .describe(
        "Hook input for the Elicitation event. Fired when an MCP server requests user input. Hooks can auto-respond (accept/decline) instead of showing the dialog.",
      ),
  ),
  uJ = m(() =>
    Ee()
      .and(
        f({
          hook_event_name: N("ElicitationResult"),
          mcp_server_name: i(),
          elicitation_id: i().optional(),
          mode: oe(["form", "url"]).optional(),
          action: oe(["accept", "decline", "cancel"]),
          content: De(i(), _e()).optional(),
        }),
      )
      .describe(
        "Hook input for the ElicitationResult event. Fired after the user responds to an MCP elicitation. Hooks can observe or override the response before it is sent to the server.",
      ),
  ),
  dJ = ["user_settings", "project_settings", "local_settings", "policy_settings", "skills"],
  pJ = m(() => Ee().and(f({ hook_event_name: N("ConfigChange"), source: oe(dJ), file_path: i().optional() }))),
  fJ = ["session_start", "nested_traversal", "path_glob_match", "include", "compact"],
  _J = ["User", "Project", "Local", "Managed"],
  mJ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("InstructionsLoaded"),
        file_path: i(),
        memory_type: oe(_J),
        load_reason: oe(fJ),
        globs: H(i()).optional(),
        trigger_file_path: i().optional(),
        parent_file_path: i().optional(),
      }),
    ),
  ),
  gJ = m(() => Ee().and(f({ hook_event_name: N("WorktreeCreate"), name: i() }))),
  hJ = m(() => Ee().and(f({ hook_event_name: N("WorktreeRemove"), worktree_path: i() }))),
  EJ = m(() => Ee().and(f({ hook_event_name: N("CwdChanged"), old_cwd: i(), new_cwd: i() }))),
  SJ = m(() =>
    Ee().and(f({ hook_event_name: N("FileChanged"), file_path: i(), event: oe(["change", "add", "unlink"]) })),
  ),
  TJ = m(() =>
    Ee().and(
      f({
        hook_event_name: N("DirectoryAdded"),
        directory: i().describe("Absolute path of the directory that was added."),
        source: oe(["slash_command", "register_repo_root"]).describe(
          'How the directory was added: "slash_command" for /add-dir, "register_repo_root" for the SDK control_request.',
        ),
      }),
    ),
  ),
  AJ = m(() =>
    Ee()
      .and(
        f({
          hook_event_name: N("MessageDisplay"),
          turn_id: i().describe("UUID of the current turn."),
          message_id: i().describe(
            "UUID of the assistant message being displayed. Stable across " +
              "every flush of the same message. Not the API msg_\u2026 id.",
          ),
          index: v().int().describe("Zero-based index of this delta within the message. Increments by one per flush."),
          final: q().describe("True on the message's last flush. Exactly one flush per message has it."),
          delta: i().describe(
            "The newly completed lines since the prior flush. Always whole lines, except on the final flush which may end mid-line. The delta of the final flush is empty when the message ends on a newline; treat final as the end-of-message signal regardless.",
          ),
        }),
      )
      .describe(
        "Hook input for the MessageDisplay event. Fired with each batch of newly completed lines while an assistant message streams. Display-only: the stored message and what the model sees are untouched.",
      ),
  ),
  bJ = ["clear", "resume", "logout", "prompt_input_exit", "other"],
  yJ = m(() => oe(bJ)),
  RJ = m(() => Ee().and(f({ hook_event_name: N("SessionEnd"), reason: yJ() }))),
  v3t = m(() =>
    dt([
      UQ(),
      FQ(),
      BQ(),
      VQ(),
      GQ(),
      KQ(),
      jQ(),
      WQ(),
      YQ(),
      RJ(),
      qQ(),
      XQ(),
      QQ(),
      JQ(),
      ZQ(),
      eJ(),
      rJ(),
      oJ(),
      zQ(),
      $Q(),
      iJ(),
      aJ(),
      lJ(),
      cJ(),
      uJ(),
      pJ(),
      mJ(),
      gJ(),
      hJ(),
      EJ(),
      SJ(),
      TJ(),
      AJ(),
    ]),
  ),
  CJ = m(() => f({ async: N(!0), asyncTimeout: v().optional() })),
  vJ = m(() =>
    f({
      hookEventName: N("PreToolUse"),
      permissionDecision: xQ().optional(),
      permissionDecisionReason: i().optional(),
      updatedInput: De(i(), _e()).optional(),
      additionalContext: i().optional(),
    }),
  ),
  wJ = m(() =>
    f({
      hookEventName: N("UserPromptSubmit"),
      additionalContext: i().optional(),
      sessionTitle: i().optional(),
      suppressOriginalPrompt: q()
        .optional()
        .describe('When decision is "block", omit the original prompt from the block message'),
    }),
  ),
  PJ = m(() =>
    f({
      hookEventName: N("UserPromptExpansion"),
      additionalContext: i().optional(),
      suppressOriginalPrompt: q()
        .optional()
        .describe('When decision is "block", omit the original prompt from the block message'),
    }),
  ),
  DJ = m(() =>
    f({
      hookEventName: N("SessionStart"),
      additionalContext: i().optional(),
      initialUserMessage: i().optional(),
      sessionTitle: i().optional(),
      watchPaths: H(i()).optional(),
      reloadSkills: q()
        .optional()
        .describe(
          "Re-scan skill and command directories after SessionStart hooks complete, so skills installed by the hook are available in the same session",
        ),
    }),
  ),
  IJ = m(() => f({ hookEventName: N("Setup"), additionalContext: i().optional() })),
  NJ = m(() =>
    f({
      hookEventName: N("PreModelSwitch"),
      permissionDecision: oe(["allow", "deny", "ask"])
        .optional()
        .describe(
          "Same contract as PreToolUse: allow proceeds (skipping the interactive cache-miss confirm), deny cancels the switch, ask asks the user to confirm (a headless session refuses instead)",
        ),
      permissionDecisionReason: i().optional(),
    }),
  ),
  xJ = m(() =>
    f({
      hookEventName: N("PostModelSwitch"),
      additionalContext: i().optional().describe("Reaches the model with the next request the new model serves"),
    }),
  ),
  UJ = m(() => f({ hookEventName: N("SubagentStart"), additionalContext: i().optional() })),
  zJ = m(() =>
    f({
      hookEventName: N("PostToolUse"),
      additionalContext: i().optional(),
      classifierContext: i()
        .optional()
        .describe(
          "Host-asserted context shown to the auto-mode permission classifier alongside this tool call's result. In the live session the classifier may weigh a user statement relayed here as user intent (it can satisfy a consent bar a user turn would satisfy, never a hard boundary); values restored from saved session state are treated as unverified context only. Relay discipline is the host's obligation: put ONLY genuine user statements in intent-bearing positions \u2014 never tool output or model text dressed as one. Capped at 2000 UTF-16 code units, a budget shared across all hooks that contribute to one call (surrogate-pair-safe; emoji and other astral characters count as two). Honored on synchronous hook responses only: an async hook's late response arrives after the result message is frozen and this field in it is silently ignored. Security note: do not copy untrusted tool output or third-party text into it blindly \u2014 content placed here reaches the permission classifier with host-application framing. Applies only to calls the classifier transcript shows: read-only lookups the transcript omits (file reads, searches), inner REPL calls, and remote-engine shells produce no per-result line, and context attached to them is silently unused. Not a delivery channel: it is bound to a single call id and sized for a short assertion, not for relaying messages or events. Rewrite integrity: if this assertion describes output you are rewriting, return it in the SAME hook result as the rewrite \u2014 it is then dropped automatically if your rewrite is rejected or superseded by a later hook's rewrite; assertions returned without a rewrite are never invalidated by other hooks' rewrites, so a non-rewriting hook should assert only what holds regardless of other hooks' rewrites \u2014 hosts that need an assertion bound to exact output bytes should make it in the hook that produces those bytes. (Do NOT return an identity rewrite just to pair an assertion: hooks run in parallel on the ORIGINAL output, so an identity rewrite competes last-write-wins with sibling rewrites and can clobber a real redaction.)",
        ),
      updatedToolOutput: _e().optional().describe("Replaces the tool output before it is sent to the model"),
      updatedMCPToolOutput: _e()
        .optional()
        .describe("Replaces the output for MCP tools only. Prefer updatedToolOutput, which works for all tools"),
    }),
  ),
  FJ = m(() => f({ hookEventName: N("PostToolBatch"), additionalContext: i().optional() })),
  HJ = m(() => f({ hookEventName: N("PostToolUseFailure"), additionalContext: i().optional() })),
  VJ = m(() =>
    f({ hookEventName: N("Stop"), additionalContext: i().optional() }).describe(
      "Hook-specific output for the Stop event. additionalContext is non-error feedback delivered to the model; the conversation continues so the model can act on it.",
    ),
  ),
  GJ = m(() =>
    f({ hookEventName: N("SubagentStop"), additionalContext: i().optional() }).describe(
      "Hook-specific output for the SubagentStop event. additionalContext is non-error feedback delivered to the subagent; the subagent continues so it can act on it.",
    ),
  ),
  KJ = m(() => f({ hookEventName: N("PermissionDenied"), retry: q().optional() })),
  jJ = m(() => f({ hookEventName: N("Notification"), additionalContext: i().optional() })),
  WJ = m(() =>
    f({
      hookEventName: N("PermissionRequest"),
      decision: dt([
        f({ behavior: N("allow"), updatedInput: De(i(), _e()).optional(), updatedPermissions: H(Do()).optional() }),
        f({ behavior: N("deny"), message: i().optional(), interrupt: q().optional() }),
      ]),
    }),
  ),
  YJ = m(() => f({ hookEventName: N("CwdChanged"), watchPaths: H(i()).optional() })),
  XJ = m(() => f({ hookEventName: N("FileChanged"), watchPaths: H(i()).optional() })),
  QJ = m(() =>
    f({
      hookEventName: N("MessageDisplay"),
      displayContent: i()
        .optional()
        .describe(
          "Text displayed in place of the delta. Omit (or return the delta unchanged) to display the original.",
        ),
    }).describe(
      "Hook-specific output for the MessageDisplay event. Display-only: replaces the delta on screen without changing the stored message.",
    ),
  ),
  JJ = m(() =>
    f({
      continue: q().optional(),
      suppressOutput: q().optional(),
      stopReason: i().optional(),
      decision: oe(["approve", "block"]).optional(),
      systemMessage: i().optional(),
      terminalSequence: i()
        .optional()
        .describe(
          "A terminal escape sequence (e.g. OSC 9 / OSC 777 desktop-notification) for Claude Code to emit on your behalf. Only notification/title OSCs (0, 1, 2, 9, 99, 777) and BEL are permitted; anything else is dropped.",
        ),
      reason: i().optional(),
      hookSpecificOutput: dt([
        vJ(),
        wJ(),
        PJ(),
        DJ(),
        IJ(),
        NJ(),
        xJ(),
        UJ(),
        zJ(),
        HJ(),
        FJ(),
        VJ(),
        GJ(),
        KJ(),
        jJ(),
        WJ(),
        ZJ(),
        e5(),
        YJ(),
        XJ(),
        t5(),
        QJ(),
      ]).optional(),
    }),
  ),
  ZJ = m(() =>
    f({
      hookEventName: N("Elicitation"),
      action: oe(["accept", "decline", "cancel"]).optional(),
      content: De(i(), _e()).optional(),
    }).describe(
      "Hook-specific output for the Elicitation event. Return this to programmatically accept or decline an MCP elicitation request.",
    ),
  ),
  e5 = m(() =>
    f({
      hookEventName: N("ElicitationResult"),
      action: oe(["accept", "decline", "cancel"]).optional(),
      content: De(i(), _e()).optional(),
    }).describe(
      "Hook-specific output for the ElicitationResult event. Return this to override the action or content before the response is sent to the MCP server.",
    ),
  ),
  t5 = m(() =>
    f({ hookEventName: N("WorktreeCreate"), worktreePath: i() }).describe(
      "Hook-specific output for the WorktreeCreate event. Provides the absolute path to the created worktree directory. Command hooks print the path on stdout instead.",
    ),
  ),
  _P = m(() => dt([CJ(), JJ()])),
  Io = m(() =>
    f({
      name: i().describe("Skill name (without the leading slash)"),
      description: i().describe("Description of what the skill does"),
      argumentHint: i().describe('Hint for skill arguments (e.g., "<file>")'),
      aliases: H(i())
        .optional()
        .describe("Alternate names that resolve to this command (e.g., /cost and /stats both resolve to /usage)"),
    }).describe("Information about an available skill (invoked via /command syntax)."),
  ),
  Du = m(() =>
    f({
      name: i().describe('Agent type identifier (e.g., "Explore")'),
      description: i().describe("Description of when to use this agent"),
      model: i()
        .optional()
        .describe(
          "Model this agent uses: an alias or model ID, or 'inherit' for the parent's model. If omitted, uses the default subagent model when one is configured, else the parent's model",
        ),
    }).describe("Information about an available subagent that can be invoked via the Task tool."),
  ),
  qs = m(() =>
    f({
      value: i().describe("Model identifier to use in API calls"),
      resolvedModel: i()
        .optional()
        .describe(
          "Canonical wire model id this row's `value` resolves to (e.g. 'sonnet' \u2192 'claude-sonnet-5'). Lets hosts match a persisted explicit id against the alias row that covers it.",
        ),
      displayName: i().describe("Human-readable display name"),
      description: i().describe("Description of the model's capabilities"),
      supportsEffort: q().optional().describe("Whether this model supports effort levels"),
      supportedEffortLevels: H(oe(["low", "medium", "high", "xhigh", "max"]))
        .optional()
        .describe("Available effort levels for this model"),
      supportsAdaptiveThinking: q()
        .optional()
        .describe("Whether this model supports adaptive thinking (Claude decides when and how much to think)"),
      supportsFastMode: q().optional().describe("Whether this model supports fast mode"),
      supportsAutoMode: q().optional().describe("Whether this model supports auto mode"),
      disabled: q()
        .optional()
        .describe(
          "@internal Model is visible but not selectable (e.g. a model the org's Zero Data Retention setting excludes). The human-readable reason is folded into `description`; a structured disabledReason field is the extension point if a consumer ever needs the reason separately.",
        ),
      promoListPrice: i()
        .optional()
        .describe(
          "@internal List price (e.g. `$3/$15`) for a model currently on a launch promo. `description` carries only the promo price so plain-text consumers read it unambiguously; rich pickers prepend this struck-through before the first `$X/$Y` in `description`. Absent when no promo is active.",
        ),
    }).describe("Information about an available model."),
  ),
  mP = m(() =>
    f({
      email: i().optional(),
      organization: i().optional(),
      subscriptionType: i().optional(),
      tokenSource: i().optional(),
      apiKeySource: i().optional(),
      apiProvider: oe([
        "firstParty",
        "bedrock",
        "vertex",
        "foundry",
        "anthropicAws",
        "anthropicGoogleCloud",
        "mantle",
        "gateway",
      ])
        .optional()
        .describe(
          'Active API backend. Anthropic OAuth login only applies when "firstParty"; for 3P providers the other fields are absent and auth is external (AWS creds, gcloud ADC, etc.). "gateway" means the CLI is authenticated against an enterprise gateway.',
        ),
    }).describe("Information about the logged in user's account."),
  ),
  r5 = m(() => dt([i(), De(i(), $s())])),
  gP = m(() =>
    f({
      description: i().describe("Natural language description of when to use this agent"),
      tools: H(i())
        .optional()
        .describe(
          "Array of allowed tool names. If omitted, inherits all tools from parent. Note: passing 'Skill' here is deprecated \u2014 use the `skills` field instead.",
        ),
      disallowedTools: H(i())
        .optional()
        .describe(
          "Array of tool names to explicitly disallow for this agent. MCP server-level specs (mcp__server, mcp__server__*, mcp__*) remove every tool from the named server (or all MCP tools).",
        ),
      prompt: i().describe("The agent's system prompt"),
      model: i()
        .optional()
        .describe(
          "Model alias (e.g. 'fable', 'opus', 'sonnet', 'haiku') or full model ID (e.g. 'claude-fable-5'). 'inherit' uses the main model; if omitted, uses the default subagent model when one is configured, else the main model",
        ),
      mcpServers: H(r5()).optional(),
      criticalSystemReminder_EXPERIMENTAL: i()
        .optional()
        .describe("Experimental: Critical reminder added to system prompt"),
      skills: H(i()).optional().describe("Array of skill names to preload into the agent context"),
      initialPrompt: i()
        .optional()
        .describe(
          "Auto-submitted as the first user turn when this agent is the main thread agent. Slash commands are processed. Prepended to any user-provided prompt.",
        ),
      maxTurns: v()
        .int()
        .positive()
        .optional()
        .describe("Maximum number of agentic turns (API round-trips) before stopping"),
      background: q()
        .optional()
        .describe("Run this agent as a background task (non-blocking, fire-and-forget) when invoked"),
      memory: oe(["user", "project", "local"])
        .optional()
        .describe(
          "Scope for auto-loading agent memory files. 'user' - ~/.claude/agent-memory/<agentType>/, 'project' - .claude/agent-memory/<agentType>/, 'local' - .claude/agent-memory-local/<agentType>/",
        ),
      effort: dt([oe(["low", "medium", "high", "xhigh", "max"]), v().int()])
        .optional()
        .describe("Reasoning effort level for this agent. Either a named level or an integer"),
      permissionMode: Rt().optional().describe("Permission mode controlling how tool executions are handled"),
      observer: i()
        .optional()
        .describe(
          "Agent type auto-spawned as a background observer whenever this agent runs. The observer receives read-only activity digests and reports via the ObserverReport tool; it never participates in the task.",
        ),
      observerMessage: i()
        .optional()
        .describe(
          "Supplemental postamble appended (after the harness-owned default) to each activity digest sent to the observer. Blank values are ignored.",
        ),
    }).describe("Definition for a custom subagent that can be invoked via the Agent tool."),
  ),
  E_e = m(() =>
    oe(["user", "project", "local"]).describe(
      "Source for loading filesystem-based settings. 'user' - Global user settings (~/.claude/settings.json). 'project' - Project settings (.claude/settings.json). 'local' - Local settings (.claude/settings.local.json).",
    ),
  ),
  S_e = m(() =>
    f({
      type: N("local").describe("Plugin type. Currently only 'local' is supported"),
      path: i().describe("Absolute or relative path to the plugin directory"),
      skipMcpDiscovery: q()
        .optional()
        .describe(
          "When true, the engine loads skills/hooks/agents/commands from this plugin but does NOT read its .mcp.json or manifest mcpServers. Use when the SDK host owns this plugin's MCP connections.",
        ),
    }).describe("Configuration for loading a plugin."),
  ),
  Iu =
    "Count of tracked files NOT restored or deleted because a symlink, hard link, or other non-regular file was detected at the tracked path, its parent directory no longer resolves to where it pointed when the checkpoint was taken, or its backup could not be safely read. Only populated by a real (non-dryRun) rewind \u2014 on a dryRun response the field is never set and the preview counts do not reflect link-safety refusals. Absent or 0 on a real rewind means no link-safety refusals occurred; other per-file failures (for example a missing backup file) are logged and reported in telemetry but are not counted here.",
  T_e = m(() =>
    f({
      canRewind: q(),
      error: i().optional(),
      filesChanged: H(i()).optional(),
      insertions: v().int().optional(),
      deletions: v().int().optional(),
      skippedLinks: v().optional().describe(Iu),
    }).describe("Result of a rewindFiles operation."),
  ),
  o5 = m(() =>
    _e().describe(
      'An Anthropic Messages API user message: a MessageParam with role "user" whose content is a string or an array of content blocks (text, image, document, tool_result, ...). See the Messages API reference for the block types.',
    ),
  ),
  i5 = m(() =>
    _e().describe(
      'Shaped like an Anthropic Messages API Message object (role "assistant"): id, model, content blocks (text, thinking, tool_use, ...), stop_reason and usage. When streamed, content typically holds the single block this message delivers and stop_reason is still null \u2014 see SDKAssistantMessage. See the Messages API reference for the block types.',
    ),
  ),
  s5 = m(() =>
    _e().describe(
      "One Anthropic Messages API streaming event (message_start, content_block_start, content_block_delta, content_block_stop, message_delta, message_stop) as defined for the streaming Messages API.",
    ),
  ),
  Z = m(() => i()),
  hP = m(() =>
    _e().describe(
      "MAIN AGENT LOOP ONLY \u2014 excludes Task subagent, sidechain, and auxiliary model calls, and is per-turn in streaming-input sessions. Prefer modelUsage for token/cost accounting.",
    ),
  ),
  Nu = m(() =>
    oe([
      "authentication_failed",
      "oauth_org_not_allowed",
      "account_on_hold",
      "billing_error",
      "rate_limit",
      "overloaded",
      "invalid_request",
      "model_not_found",
      "server_error",
      "unknown",
      "max_output_tokens",
    ]),
  ),
  a5 = m(() => dt([N("compacting"), N("requesting"), dS()])),
  xu = m(() =>
    ps("kind", [
      f({ kind: N("human") }),
      f({ kind: N("channel"), server: i() }),
      f({
        kind: N("peer"),
        from: i(),
        fromMode: oe(["bypass", "prompting"])
          .optional()
          .describe(
            "The SENDING session's permission class as declared by the host that injects this message on local stdin ('bypass' for sessions that run tools without asking, 'prompting' otherwise). Lets the recipient deliver a same-class message immediately while a cross-class or undeclared sender is still held at a recipient that runs without asking. Honored only from the injecting host on local stdin; absent when the host does not declare it.",
          ),
        name: i()
          .optional()
          .describe(
            "Sender display name, normalized by the harness: Unicode control, format, surrogate, and line/paragraph-separator code points stripped (categories Cc/Cf/Cs/Zl/Zp \u2014 covers bidi controls, zero-width characters, and tag characters), trimmed, at most 64 code points (+ ellipsis, never splitting a surrogate pair). Sender-asserted display text (the addressable identity is `from`) \u2014 render it as reported speech, but no client-side character sanitization is needed. Absent when the wire is not exactly one harness-formed envelope and on messages from older senders.",
          ),
        fromSession: i()
          .optional()
          .describe(
            "The sender's host-openable session id (the envelope's `from-session` attribute \u2014 e.g. a desktop `local_<uuid>` or a cloud session `session_`/`ses_` id), set by the sender's host so a receiving UI can link this message back to the sending session. Sender-asserted like `from`: a navigation target only, never authority. Absent when the sender's host provides none and on messages from older senders.",
          ),
        inbound_origin: i()
          .optional()
          .describe(
            "@internal Server-asserted ingest path of the demoted delivery, copied at classification from the message-level `inbound_origin`.",
          ),
        senderTaskId: i()
          .optional()
          .describe(
            "Task id of the in-process background subagent that sent this message, stamped by the harness from the sending loop (never from tool input). Absent for cross-session peers.",
          ),
        body: i()
          .optional()
          .describe(
            "Decoded message body with the peer envelope stripped \u2014 byte-exact with what the model sees. Present only when the turn is exactly one harness-formed envelope (or an in-process agent message); render this instead of re-parsing the message text.",
          ),
        verifiedPeerPid: v()
          .optional()
          .describe(
            "Kernel-verified pid of the process that connected to this session's cross-session messaging socket, read from the connection (SO_PEERCRED / LOCAL_PEERPID) \u2014 never from the payload. This identifies the CONNECTING process, which for relayed traffic (e.g. a daemon forwarding on another session's behalf) is the relay, not the message's author. Key sender identity on this, never on `from`: `from` is sender-authored and kept only for reply routing, so it is forgeable by any same-user process. Absent when unverifiable (Windows, non-UDS ingress) \u2014 never a wrong value. Pids are recyclable: provenance, not an authentication token.",
          ),
      }),
      f({
        kind: N("task-notification"),
        subkind: oe(["scheduled-trigger", "peer-send-message", "projects-relay"])
          .optional()
          .describe(
            "Present when the delivery is the fired stored prompt of a scheduled task/routine ('scheduled-trigger', stamped from server-asserted provenance; the schedule attests storage, not authorship) or a coordinator co-member SendMessage delivery ('peer-send-message': model-authored text from another of the same user's sessions, verified by the server-stamped receiver co-membership \u2014 task-notification for prompt authority, but distinguishable so the receive-side crossSessionInbound setting can apply to it). The harness frames a scheduled-trigger delivery as the session's assigned task instead of the generic background-notification frame. Absent on webhook, PR-steward, plugin, and background-event deliveries.",
          ),
      }),
      f({ kind: N("coordinator") }),
      f({ kind: N("unclassified") }).describe(
        "Injected turn whose ingress classification found no provenance. Framed by the harness as a non-user source in both drains; never presumed human, never host-replayed.",
      ),
      f({ kind: N("observer"), from: i(), senderTaskId: i() }).describe(
        "Report from a background observer agent to the agent it observes. One-way by construction \u2014 the observed agent must not reply.",
      ),
      f({ kind: N("auto-continuation") }),
      f({ kind: N("observer-activity") }).describe(
        "Activity digest delivered to an observer agent. The message body is the self-framing digest (envelope + postamble); observed content is data, not instructions.",
      ),
    ]).describe(
      "Provenance of a user-role message (peer session, team lead, channel). A host wrapping keyboard input must stamp {kind:'human'} explicitly \u2014 absent origin is treated as unattributed and fails closed at strict isHuman() trust gates.",
    ),
  ),
  EP = m(() =>
    f({
      type: N("user"),
      message: o5(),
      parent_tool_use_id: i().nullable(),
      isSynthetic: q().optional(),
      tool_use_result: _e()
        .optional()
        .describe(
          "Structured tool output \u2014 the tool's full Output object, not the string content sent to the model. The shape is per-tool, keyed by the matching tool_use block's name (see the *Output types in toolTypes); MCP and dynamic tools carry their own shapes, so the field stays unknown-typed. For the Agent/Task tool the completed shape is the subagent's final report without the model-directed agentId/usage trailer, plus run totals \u2014 render from it instead of parsing the tool_result text.",
        ),
      priority: oe(["now", "next", "later"]).optional(),
      origin: xu().optional(),
      client_platform: i()
        .optional()
        .describe(
          "@internal The `anthropic-client-platform` value of the client that sent this message (e.g. `ios`, `android`, `web_claude_ai`, `desktop_app`). Injected server-side by CCR ingress from the request header.",
        ),
      inbound_origin: i()
        .optional()
        .describe("@internal Server-asserted ingest path that produced this message. Not settable by clients."),
      shouldQuery: q()
        .optional()
        .describe(
          "When false, the message is appended to the transcript without triggering an assistant turn. It will be merged into the next user message that does query.",
        ),
      timestamp: i()
        .optional()
        .describe(
          "ISO timestamp when the message was created on the originating process. Older emitters omit it; consumers should fall back to receive time.",
        ),
      is_meta: N(!0)
        .optional()
        .describe(
          "@internal True when the message was synthesized by the loop (not user keyboard input). From internal UserMessage.isMeta.",
        ),
      seeded_summon: N(!0).optional().describe("@internal Desktop host only: the host's own seeded summon."),
      client_composed: N(!0)
        .optional()
        .describe(
          "@internal The client composed this turn from content the user did not type; its text is delivered as written.",
        ),
      is_visible_in_transcript_only: N(!0)
        .optional()
        .describe("@internal True when the message is stored in the transcript but not rendered in the live UI."),
      is_virtual: N(!0).optional().describe("@internal Display-only: rendered in the UI but filtered before API send."),
      is_compact_summary: N(!0)
        .optional()
        .describe("@internal True when this user message is a compact-summary synthetic message."),
      summarize_metadata: f({
        messages_summarized: v().int(),
        user_context: i().optional(),
        direction: oe(["from", "up_to"]).optional(),
      })
        .optional()
        .describe(
          '@internal Metadata for "Summarize from here" / "Summarize up to here" summaries (from internal UserMessage.summarizeMetadata).',
        ),
      mcp_meta: f({ _meta: De(i(), _e()).optional(), structured_content: De(i(), _e()).optional() })
        .optional()
        .describe(
          "@internal MCP protocol metadata passed through to SDK consumers, never sent to the model (from internal UserMessage.mcpMeta).",
        ),
      tool_result_meta: H(f({ id: i(), non_execution_kind: oe(Jw), user_feedback: i().optional() }))
        .optional()
        .describe(
          "@internal Display metadata for this message's tool_result blocks, keyed by tool_use_id. non_execution_kind is the harness-stamped reason an is_error:true result did not carry the tool's own execution output (user-rejected / permission-rule / automode-* / interrupted / cancelled); absent means the tool ran to completion. user_feedback is the deny comment a human typed at a permission prompt (the local dialog or a bridge client's deny UI), before the CLI's reject-message framing \u2014 absent when the deny was resolved by a coordinator, channel relay, or hook rather than a human. A deny answered through the SDK control protocol (can_use_tool / --permission-prompt-tool) currently reports as 'permission-rule' with no user_feedback, because that wire carries no human-provenance signal. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model. Clients read this instead of string-matching the result prose.",
        ),
      source_tool_use_id: i()
        .optional()
        .describe("@internal When this message was generated by a tool via newMessages, links it to that tool_use id."),
      source_tool_assistant_uuid: i()
        .optional()
        .describe(
          "@internal For tool_result messages: UUID of the assistant message containing the matching tool_use block. Used for parentUuid assignment in transcript.",
        ),
      image_paste_ids: H(v().int())
        .optional()
        .describe(
          "@internal Paste IDs for images in this message, in order of appearance. REPL-local state \u2014 candidate for surface-side if daemon has no use for it.",
        ),
      plan_content: i()
        .optional()
        .describe(
          "@internal Plan to implement (cleared-context flow). When set, the message is rendered with plan styling.",
        ),
      permission_mode: Rt()
        .optional()
        .describe("@internal Permission mode active when this message was sent (for rewind restoration)."),
      interrupted_message_id: i()
        .optional()
        .describe("@internal For [Request interrupted by user] markers only: the API msg_* id that Esc cancelled."),
    }),
  ),
  Lu = m(() =>
    EP()
      .extend({
        uuid: Z().optional(),
        session_id: i().optional(),
        subagent_type: i().optional().describe("Subagent type that produced this message."),
        task_description: i().optional().describe("Description of the subagent task that produced this message."),
      })
      .describe(
        "A user-role message. A client writes one to the CLI to submit a prompt (this starts a turn); the CLI emits them for user-role content it adds to the conversation itself, chiefly the tool_result blocks answering the assistant's tool_use blocks.",
      ),
  ),
  l5 = m(() => EP().extend({ uuid: Z(), session_id: i(), isReplay: N(!0), file_attachments: H(_e()).optional() })),
  SP = m(() =>
    f({
      type: N("bash_command"),
      command: i().describe(
        "Shell command to execute verbatim via a one-shot `/bin/sh -c` (or `pwsh`) subprocess, bypassing the model. Trust model matches the local TUI `!cmd` path (no sandbox, no per-command prompt); unlike `!cmd`, output is not appended to the conversation transcript and there is no persistent shell state across calls.",
      ),
      cwd: i().optional().describe("Working directory for the command. Falls back to the session cwd when omitted."),
      uuid: Z().optional(),
      session_id: i().optional(),
    }).describe(
      "@internal A user-initiated shell command dispatched to a one-shot shell subprocess with no model turn. Input-only \u2014 sent by CCR clients that surface a dedicated terminal UI; never emitted on stdout.",
    ),
  ),
  c5 = m(() =>
    f({
      status: oe(["allowed", "allowed_warning", "rejected"]),
      resetsAt: v().int().optional(),
      rateLimitType: oe([
        "five_hour",
        "seven_day",
        "seven_day_opus",
        "seven_day_sonnet",
        "seven_day_overage_included",
        "overage",
      ]).optional(),
      utilization: v().optional(),
      unifiedWindows: f({
        five_hour: f({ utilization: v(), resetsAt: v().int() }).optional(),
        seven_day: f({ utilization: v(), resetsAt: v().int() }).optional(),
        seven_day_overage_included: f({ utilization: v(), resetsAt: v().int() }).optional(),
      })
        .optional()
        .describe(
          "@internal Per-window usage for the session (5-hour), weekly (7-day), and overage-included weekly (per-model bucket; present only for accounts whose responses carry that window) subscription rate-limit windows, as read from the anthropic-ratelimit-unified-* response headers. utilization is the fraction of the window used (usually 0-1, same scale as the top-level utilization field; values above 1 occur when usage legitimately runs past a window's cap, e.g. lower-priority episodes past the 5-hour limit); resetsAt is unix epoch seconds. Unlike the top-level status/utilization fields, which describe the currently limiting window, both windows are tracked on every observation, and events are emitted when a window's rounded percentage or reset time moves, not only on status transitions. Windows absent from the account state are absent here. Absent until the first response carrying these headers is observed, and always absent for API-key, Bedrock, and Vertex sessions, whose responses do not carry them.",
        ),
      overageStatus: oe(["allowed", "allowed_warning", "rejected"]).optional(),
      overageResetsAt: v().int().optional(),
      overageDisabledReason: oe([
        "overage_not_provisioned",
        "org_level_disabled",
        "org_level_disabled_until",
        "out_of_credits",
        "seat_tier_level_disabled",
        "member_level_disabled",
        "seat_tier_zero_credit_limit",
        "group_zero_credit_limit",
        "member_zero_credit_limit",
        "org_service_level_disabled",
        "no_limits_configured",
        "fetch_error",
        "unknown",
      ]).optional(),
      isUsingOverage: q().optional(),
      overageInUse: q().optional(),
      surpassedThreshold: v().optional(),
      rateLimitGraceActive: q()
        .optional()
        .describe(
          "@internal Latched usage-limit grace signal, as observed on responses to requests that sent `anthropic-usage-limit: extended` (tengu_lantern_spool): set when such a response reports grace-zone utilization > 0, cleared when one reports it back at zero or, if that response named the grace window's reset, once that reset passes on this machine's " +
            "clock. Otherwise observation-lagged \u2014 when extended requests " +
            'stop (idle session, flag off mid-session), the last observed value persists, so still expire any UI derived from this field via resetsAt. While set, overageStatus allowed / allowed_warning means paid extra usage covers the overflow (nothing will be cut off). Stays true at hard exhaustion (status rejected); combine with status instead of reading this field alone as "still usable".',
        ),
      overagePeriodMonthly: f({ utilization: v() })
        .optional()
        .describe(
          "@internal Monthly service spend-cap telemetry for the Claude-in-Slack surface (CLAUDE_IN_SLACK_V2): utilization is fraction-of-cap.",
        ),
      overagePeriodChannel: f({ utilization: v() })
        .optional()
        .describe(
          "@internal Per-Slack-channel spend-cap telemetry for the Claude-in-Slack surface (CLAUDE_IN_SLACK_V2): utilization is fraction-of-cap. Absent when the channel has no individual cap.",
        ),
      errorCode: oe(["credits_required"]).optional(),
      canUserPurchaseCredits: q().optional(),
      hasChargeableSavedPaymentMethod: q().optional(),
    }).describe("Rate limit information for claude.ai subscription users."),
  ),
  u5 = m(() =>
    f({
      name: i().describe(
        'Display name of the row as the CLI renders it, e.g. "Messages" or "MCP tools (deferred)". Use `kind` (not this name) to classify the row.',
      ),
      tokens: v().int(),
      kind: oe(["used", "free", "buffer", "deferred"]).describe(
        "What the row is: 'used' content occupies the window; 'free' is the remaining window; 'buffer' is the compaction reserve (autocompact or manual); 'deferred' rows are out-of-window tool schemas \u2014 listed for awareness, excluded from usage math.",
      ),
    }).describe(
      "One row of the /context usage-by-category breakdown. Rows may carry zero tokens; renderers typically hide those.",
    ),
  ),
  d5 = m(() =>
    f({
      model: i().describe("Main-loop model the usage was computed for."),
      total_tokens: v()
        .int()
        .describe("Estimated tokens in use, unclamped \u2014 may exceed raw_max_tokens when over limit."),
      raw_max_tokens: v()
        .int()
        .describe(
          "The window usage is measured against: the resolved autocompact window \u2014 the model's believed limit, or a smaller compaction-policy window (a configured value, or e.g. the 200K boundary on 1M-window models).",
        ),
      percentage: v().int().describe("Rounded total_tokens / raw_max_tokens, 0-100+."),
      over_limit: f({ tokens_over: v().int(), kind: oe(["hard_limit", "compaction_window"]) })
        .optional()
        .describe(
          "Present when total_tokens exceeds raw_max_tokens. kind says how the window was resolved, not whether the API will accept the next request: 'hard_limit' means the window is the model's believed limit (the API will refuse past it); 'compaction_window' means a compaction-policy window, which may or may not coincide with the model's hard limit.",
        ),
      categories: H(u5()),
      mcp_tools: H(
        f({ name: i().describe('Wire name, e.g. "mcp__linear__create_issue".'), server_name: i(), tokens: v().int() }),
      ),
      memory_files: H(
        f({
          path: i(),
          type: i().describe('Display label of the memory-file source, e.g. "Project" or "User".'),
          tokens: v().int(),
        }),
      ),
      agents: H(
        f({
          agent_type: i(),
          source: i().describe(
            "Raw source identifier, e.g. 'projectSettings', 'userSettings', 'plugin'. Built-in agents are excluded by the producer. Display labels are the renderer's concern.",
          ),
          tokens: v().int(),
        }),
      ),
      skills: H(
        f({
          name: i(),
          source: i().describe("Raw source identifier, e.g. 'userSettings', 'plugin', 'syncedSkills'."),
          plugin_name: i().optional(),
          tokens: v().int(),
        }),
      )
        .optional()
        .describe("Omitted when no skills contribute tokens."),
    }).describe(
      "Structured twin of the /context report \u2014 the data a client needs to render the context-usage card without parsing the markdown table. Evolves additively (new optional fields); a breaking reshape would ship as a sibling field, so consumers can trust the fields they know.",
    ),
  ),
  f5 = m(() =>
    f({
      type: N("assistant"),
      message: i5(),
      parent_tool_use_id: i().nullable(),
      error: Nu().optional(),
      uuid: Z(),
      session_id: i(),
      request_id: i().optional(),
      user_message_uuid: i()
        .optional()
        .describe(
          "Client uuid of the user message that triggered this turn (submitMessage options.uuid), stamped on the turn's FIRST reply frame only \u2014 the first assistant message in complete-message mode; with --include-partial-messages the stamp normally rides the first non-ping stream event instead (see SDKPartialAssistantMessage), and a turn that produces no stream events still stamps its first assistant message \u2014 so a consumer can bind the reply to the send it answers without waiting for the result. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model. Absent on every later frame of the turn, on subagent frames (parent_tool_use_id set), on synthetic/scheduled (meta) turns, on turns without a client uuid, and from older producers.",
        ),
      resumed_from_incomplete_thinking: N(!0)
        .optional()
        .describe(
          "This turn continued the preceding truncated assistant turn inside its trailing signed thinking block (max-output-tokens recovery). Its thinking signatures are cumulative over that preceding thinking-only turn, so a history replayed through the bridge must carry this flag back for the normalizer to keep the run's prefix on the wire. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model.",
        ),
      supersedes: H(Z())
        .optional()
        .describe(
          "Wire uuids of previously-delivered messages that this message replaces (refusal-fallback supersede). The list can include tombstoned tool_result frames from the refused leg, not only assistant frames. Evict the named messages on arrival and treat this frame as their canonical replacement. Idempotent with the end-of-turn model_refusal_fallback notice, whose retracted_message_uuids remains the complete audit record for the turn.",
        ),
      aborted: N(!0)
        .optional()
        .describe(
          "True when this assistant message was truncated by an interrupt/abort before the stream completed: stop_reason was never received and the content may end mid-word. Absent on normally completed messages.",
        ),
      subagent_type: i().optional().describe("Subagent type that produced this message."),
      task_description: i().optional().describe("Description of the subagent task that produced this message."),
      tool_use_meta: H(f({ id: i(), display_name: i(), server_display_name: i().optional(), icon_url: i().optional() }))
        .optional()
        .describe(
          "@internal Display metadata for this message's tool_use blocks, keyed by block id. display_name is the MCP server's `tool.annotations.title` when provided, otherwise a readable transform of the wire name; server_display_name is the MCP server's own display name; icon_url is the MCP server's directory icon URL (claude.ai connectors only). Omitted for blocks whose display label equals the wire name (built-in tools). Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model.",
        ),
      timestamp: i()
        .optional()
        .describe(
          "ISO timestamp of when this content block finished on the originating process. One API assistant turn may produce several assistant messages sharing a message.id, each with its own timestamp. Uses the originating host's clock, so it's for display only; do not order messages by this field. Older emitters omit it; consumers should fall back to receive time.",
        ),
      is_meta: N(!0)
        .optional()
        .describe("@internal True when the message was synthesized by the loop (not a model response)."),
      context_usage: d5()
        .optional()
        .describe(
          "Structured twin of the /context report, carried on the synthetic assistant message that delivers the markdown table. Present only on /context results from CLIs new enough to attach it; the markdown in message.content remains the canonical fallback. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model.",
        ),
      local_command_source: i()
        .optional()
        .describe(
          "@internal The originating system local_command row's wire-form content (escaped frames), carried on the loop-synthesized local-command twin. Round-tripped so toInternalMessages rebuilds the internal system row on a bridge/SDK history replay \u2014 replay then matches the live session, where that row is model-visible \u2014 instead of dropping the output or replaying the twin's decoded display text. Wrapper-level sibling \u2014 never inside `message.content`.",
        ),
      is_virtual: N(!0).optional().describe("@internal Display-only: rendered in the UI but filtered before API send."),
      batch_tool_uses: H(ot({ id: i(), name: i() }))
        .optional()
        .describe(
          "@internal `{id, name}` of the original Batch* tool_use block(s) for a message whose content was decomposed into synthetic v1 tool_use blocks. Round-tripped so a replayed history reassembles the batch block on the wire (not N synthetics). Input is reassembled from the synthetics in `message.content` \u2014 never carried here. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model.",
        ),
      is_api_error_message: q()
        .optional()
        .describe(
          "@internal True when this assistant message wraps an API error (from internal AssistantMessage.isApiErrorMessage).",
        ),
      api_error_status: v()
        .int()
        .optional()
        .describe("@internal HTTP status code of the API error when is_api_error_message is true."),
      api_error: oe(["max_output_tokens", "dlp_request_denied"])
        .optional()
        .describe(
          "@internal API error code when is_api_error_message is true. dlp_request_denied: the request was refused by the organization's data-loss-prevention policy \u2014 terminal for that request body; a consumer replaying history must not re-send it.",
        ),
      error_details: i()
        .optional()
        .describe(
          "@internal Raw API error message \u2014 preserves details (e.g. prompt-too-long token counts) that user-facing content discards.",
        ),
      advisor_model: i().optional().describe("@internal Advisor model that produced this message, when applicable."),
      attribution_agent: i()
        .optional()
        .describe(
          "@internal Attribution stamp: agent name parsed from querySource (see messageAttribution.ts). May overlap with subagent_type.",
        ),
      attribution_skill: i().optional().describe("@internal Skill that produced this message."),
      attribution_plugin: i().optional().describe("@internal Plugin that produced this message."),
      attribution_mcp_server: i().optional().describe("@internal MCP server that produced this message."),
      attribution_mcp_tool: i().optional().describe("@internal MCP tool that produced this message."),
    }).describe(
      "An assistant message. While a response streams the CLI emits one assistant message per completed content block, so several consecutive assistant messages can share message.id and each carries just that block in message.content; on those, message.stop_reason is null and message.usage is not final \u2014 the turn's stop reason and total usage arrive on the result message. parent_tool_use_id is non-null when the message was produced inside a subagent started by that tool_use.",
    ),
  ),
  _5 = m(() =>
    f({ type: N("rate_limit_event"), rate_limit_info: c5(), uuid: Z(), session_id: i() }).describe(
      "Rate limit event emitted when rate limit info changes.",
    ),
  ),
  AP = m(() => f({ tool_name: i(), tool_use_id: i(), tool_input: De(i(), _e()) })),
  m5 = m(() => f({ id: i(), name: i(), input: De(i(), _e()) })),
  bP = m(() =>
    oe(Qw).describe("Why the query loop terminated. Unset when the loop was bypassed (local slash command)."),
  ),
  yP = m(() =>
    f({
      spawned: v()
        .int()
        .describe(
          "Subagents actually started (one tengu_agent_tool_selected each); a refused or failed launch is not counted.",
        ),
      requested: f({ background: v().int(), foreground: v().int(), unset: v().int() }).describe(
        "Spawns by the run_in_background value the model passed; all count as unset while the parameter is not offered (background tasks disabled, or the fork gate on).",
      ),
      started_in_background: v()
        .int()
        .describe(
          "Spawns that started in the background after defaults and session settings (tengu_agent_tool_selected.is_async); the rest blocked the spawning tool call.",
        ),
      by_type: De(i(), v().int()).describe("Spawns by agent type."),
      max_depth: v().int().describe("Deepest spawn: 1 = started by the main thread, 2 = by a depth-1 subagent."),
      spawned_by_subagents: v().int().describe("Spawns made from inside another subagent (depth > 1)."),
      completed: v().int(),
      failed: v().int(),
      killed: f({ parent: v().int(), user: v().int(), system: v().int() }).describe(
        "Stopped before finishing: parent = by another agent through TaskStop; system = by Claude Code itself (the --max-budget-usd halt, the sweep of background subagents when an SDK or IDE client interrupts, or -p giving up on a background subagent still running at its wait ceiling); user = any other stop, including a foreground subagent cancelled just as it finished (counted here, not as completed).",
      ),
      refused: f({ depth_limit: v().int(), concurrency_limit: v().int(), budget: v().int() }).describe(
        "Agent tool calls turned down because one of these limits was reached (other denials, such as an unknown agent type, are not counted). depth_limit stays near zero in practice: a subagent at the nesting limit is normally not offered the tool at all.",
      ),
    }).describe(
      "@internal Subagents started through the Agent tool in this session, as running totals (forked skills, workflows, teammates and other internal agents are not counted; two sessions in one process keep separate counts). Cumulative like modelUsage: read the latest result rather than summing across results; a resumed session starts fresh and a mid-session /clear zeroes it, though a background subagent that outlives the /clear still records its outcome, so completed, failed and killed can then exceed spawned. A result that was held back while background subagents finished carries the counts as of when it is written to the stream, as do its total_cost_usd, duration_api_ms and modelUsage (and usage where that is a running total; a per-turn main-loop usage keeps its turn-end value). Omitted by hosts without a local Agent tool and on crash/startup-error results; all zeros until the Agent tool starts or refuses a subagent. A remote (isolation: remote) launch counts as spawned but never reports an outcome. Per-subagent detail is on the task_started / task_notification events.",
    ),
  ),
  RP =
    "Per-model totals for every model call made through the query pipeline during this query() call \u2014 main loop, Task subagents, sidechains, and internal calls such as compaction and Workflow agents. Cumulative across turns in streaming-input sessions: each result carries the running total so far, so read the latest result rather than summing across results. Internal helper calls outside the query pipeline (e.g. the permission classifier, token-count probes) are excluded; crash/startup-error results may carry zeroed usage, resumed sessions start fresh, and a mid-session /clear resets the running total. The correct field for token/cost accounting; treat it as an estimate, not a billing statement.",
  CP = "@internal Running totals of the subagents the Agent tool started this session; see SDKSubagentStats.",
  vP =
    "User-initiated sends still waiting in the command queue when this result was produced. Greater than 0 means at least one more user turn (and result) follows without further input, barring cancellation; 0 means none is pending, or the session is ending (end_session or a shutdown latched mid-turn discards the backlog). Queued sends may coalesce into fewer turns, so this counts pending sends, not remaining results. System-generated queue entries are not counted. Absent on fatal startup results and on surfaces without a command queue.",
  OP =
    "Cumulative estimated cost in USD for this query() call, covering the same query-pipeline calls as modelUsage and sharing its lifecycle: cumulative across turns in streaming-input sessions \u2014 each result carries the running total so far, so read the latest result rather than summing across results. Crash/startup-error results may carry zeroed values, resumed sessions start fresh, and a mid-session /clear resets the running total. An estimate, not a billing statement.",
  g5 = m(() =>
    f({
      type: N("result"),
      subtype: N("success"),
      duration_ms: v().int(),
      duration_api_ms: v().int(),
      ttft_ms: v().int().optional(),
      ttft_stream_ms: v().int().optional(),
      time_to_request_ms: v().int().optional(),
      user_message_uuid: i().optional(),
      request_sent_wall_ms: v().optional(),
      time_to_request_from_spawn_ms: v().int().optional(),
      warm_spare_claimed: q().optional(),
      time_origin_ms: v().optional(),
      is_error: q(),
      api_error_status: v().int().nullable().optional(),
      num_turns: v().int(),
      result: i(),
      stop_reason: i().nullable(),
      total_cost_usd: v().describe(OP),
      usage: hP(),
      modelUsage: De(i(), Ys()).describe(RP),
      subagent_stats: yP().optional().describe(CP),
      permission_denials: H(AP()),
      queued_turn_count: v().int().optional().describe(vP),
      structured_output: _e().optional(),
      deferred_tool_use: m5().optional(),
      terminal_reason: bP().optional(),
      fast_mode_state: No().optional(),
      fast_mode_disabled_reason: xo().optional(),
      origin: xu().optional(),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  h5 = m(() =>
    f({
      type: N("result"),
      subtype: oe([
        "error_during_execution",
        "error_max_turns",
        "error_max_budget_usd",
        "error_max_structured_output_retries",
      ]),
      duration_ms: v().int(),
      duration_api_ms: v().int(),
      is_error: q(),
      num_turns: v().int(),
      stop_reason: i().nullable(),
      total_cost_usd: v().describe(OP),
      usage: hP(),
      modelUsage: De(i(), Ys()).describe(RP),
      subagent_stats: yP().optional().describe(CP),
      permission_denials: H(AP()),
      queued_turn_count: v().int().optional().describe(vP),
      errors: H(i()),
      user_message_uuid: i()
        .optional()
        .describe(
          "Client uuid of the user message that triggered this turn (submitMessage options.uuid), echoed back so a consumer can link this error result to the send it answers \u2014 the same join key the success variant echoes, carried alone (error turns have no request_sent_wall_ms to report). A delivery-failure result from the remote-session client echoes the failed send's queue key, which is client-minted when the host sent no uuid of its own. Absent on synthetic/scheduled (meta) turns, on turns without a client uuid, on session-scoped failures with no single triggering send (a crashed worker's zeroed result), and from older producers.",
        ),
      terminal_reason: bP().optional(),
      fast_mode_state: No().optional(),
      fast_mode_disabled_reason: xo().optional(),
      origin: xu().optional(),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  E5 = m(() =>
    dt([g5(), h5()]).describe(
      `The outcome of a turn. The CLI emits exactly one result message per turn, after that turn's assistant, user and stream_event messages; treat it as the turn-complete signal (informational system messages such as task notifications, session state changes or prompt suggestions may still follow it). subtype "success" carries the final assistant text in result \u2014 or, with is_error true, the error text when the turn ended on an API error; the error subtypes say why the turn stopped early. In single-prompt (non-streaming-input) mode the process exits after the turn.`,
    ),
  ),
  kP = m(() =>
    f({
      file: i().optional().describe("Path to the settings file that failed to parse or validate."),
      path: i().describe("Dot-notation path to the field with the error, or empty string for whole-file errors."),
      message: i().describe("Human-readable error message."),
    }).describe(
      "A settings file parse or validation error. When a settings.json file fails to parse (invalid JSON, JSON comments, schema mismatch), the file is skipped and any rules it contained \u2014 including permission allow/deny lists \u2014 are not applied.",
    ),
  ),
  Fu =
    "The plugin's version as declared in its plugin.json manifest, emitted verbatim (plugin-author-controlled \u2014 validate before trusting). Omitted when the manifest declares no version.",
  S5 = m(() =>
    f({
      type: N("system"),
      subtype: N("init"),
      agents: H(i()).optional(),
      apiKeySource: vQ(),
      betas: H(i()).optional(),
      claude_code_version: i(),
      cwd: i(),
      tools: H(i()),
      mcp_servers: H(f({ name: i(), status: i() })),
      model: i(),
      permissionMode: Rt(),
      slash_commands: H(i()),
      terminal_slash_commands: H(i())
        .optional()
        .describe(
          "Subset of slash_commands whose UX is bound to the local terminal (e.g. exit, statusline). Phone/remote UIs should hide these from command menus; desktop surfaces may keep them. Present only when non-empty; absent on CLIs that predate the field, and on sessions where no advertised command carries the tag.",
        ),
      output_style: i(),
      skills: H(i()),
      plugins: H(
        f({
          name: i(),
          path: i(),
          source: i()
            .optional()
            .describe(
              '@internal Plugin source identifier in "name\\@marketplace" format. Sentinels: "name\\@inline" for --plugin-dir, "name\\@skills-dir" for .claude/skills plugins, "name\\@synced" for plugins synced from claude.ai, "name\\@builtin" for built-in plugins.',
            ),
          version: i().optional().describe(Fu),
        }),
      ),
      plugin_errors: H(f({ plugin: i(), type: i(), message: i() }))
        .optional()
        .describe(
          "@internal Plugin load-time errors (e.g., unsatisfied dependency version). Affected plugins are demoted and absent from `plugins[]`. The key is omitted when there are no errors; CI can fail on `(plugin_errors?.length ?? 0) > 0`. On connections that persist frames server-side (the local bridge-worker lane) this key is always omitted \u2014 plugin diagnostics stay in the local log, so an omitted key there does NOT assert a clean load.",
        ),
      plugin_warnings: H(f({ plugin: i(), type: i(), message: i() }))
        .optional()
        .describe(
          "@internal Plugin authoring feedback (e.g., a default folder shadowed by a manifest key). When `plugin` matches an entry in `plugins[]`, that plugin loaded and the warning is advisory; warnings with a synthetic `plugin` source (no matching `plugins[]` entry, e.g. workspace-level suppression notices) describe content that did NOT load. The key is omitted when there are no warnings. On connections that persist frames server-side (the local bridge-worker lane) this key is always omitted \u2014 plugin diagnostics stay in the local log, so an omitted key there does NOT assert a clean load.",
        ),
      mcp_server_errors: H(f({ name: i(), type: i(), message: i() }))
        .optional()
        .describe(
          "@internal MCP server config entries from --mcp-config that failed validation and were skipped (e.g. a `url` entry with no `type`). Affected servers are absent from `mcp_servers[]`. `type` is a stable category from an open set \u2014 currently unknown_type, url_missing_type, invalid_config, reserved_name, or (Remote Control child only) bridge_carrier_foreign_entry, bridge_carrier_not_http, bridge_carrier_url_mismatch, bridge_carrier_no_ingress_origin, bridge_carrier_no_session_id; treat values you do not recognize as a generic skip. The key is omitted when there are no errors; CI can fail on `(mcp_server_errors?.length ?? 0) > 0`. On connections that persist frames server-side (the local bridge-worker lane) this key is always omitted \u2014 the skipped-entry detail stays in the local log, so an omitted key there does NOT assert every entry validated.",
        ),
      fast_mode_state: No().optional(),
      fast_mode_disabled_reason: xo().optional(),
      footer_indicator: Xu()
        .optional()
        .describe(
          `@internal The terminal's server-configured "\u25C6 <text>" footer pill \u2014 see SDKFooterIndicator. Absent when nothing is configured.`,
        ),
      effort: oe(["low", "medium", "high", "xhigh", "max"])
        .nullable()
        .optional()
        .describe(
          "The effort level the session will send on its next request \u2014 after env overrides, session state, org caps and model-support downgrades; the same value get_settings reports as applied.effort. null when no effort parameter will be sent (a model without effort, CLAUDE_CODE_EFFORT_LEVEL=unset, or an internal numeric budget). Present on Remote Control bridge init frames (terminal- and Desktop/VS Code-hosted sessions); absent on hosts that do not publish it and on CLIs that predate the field. Re-emitted inits carry the current value \u2014 the newest frame wins.",
        ),
      capabilities: H(i())
        .optional()
        .describe(
          "Protocol capabilities this CLI supports, so SDK consumers can feature-detect instead of version-sniffing. Open set \u2014 ignore unknown values; check each capability for exactly the behavior you use. 'interrupt_receipt_v1' = the interrupt control_response success payload carries still_queued (uuids of async user messages that survive the interrupt). 'interrupt_cancel_queued_v1' = the interrupt control_request honors cancel_queued:true (queued and pending-dispatch commands are cancelled alongside the abort, listed on the response's cancelled field; still_queued is then empty \u2014 including any uuid that was mid-fold at the interrupt instant, since this request also aborts and the fold never delivers it \u2014 except that a client driving a hosted session lists there what it can no longer recall: a send already in flight to that session, or the first prompt the session was created with). 'queued_notifications' = the CLI accepts inbound queued_notification stream messages and drains them via ReadNotifications (the cloud session backend reads this from the persisted init event to decide whether it may send them). Absent on older CLIs.",
        ),
      analytics_disabled: q()
        .optional()
        .describe(
          "@internal True when the CLI has analytics/telemetry disabled (privacy level, DO_NOT_TRACK, or 3P provider). IDE clients use this to hide per-message thumbs feedback UI since the rating event would be a no-op.",
        ),
      product_feedback_disabled: q()
        .optional()
        .describe(
          "@internal True when the org's allow_product_feedback policy is false (ZDR/HIPAA). IDE clients use this to hide feedback surfaces (thumbs, session survey) whose events the CLI would drop at the proxy boundary anyway.",
        ),
      memory_paths: f({ auto: i().optional(), team: i().optional() })
        .optional()
        .describe(
          "@internal Absolute directory paths for the auto-memory and team-memory stores. Lets SDK renderers classify Read/Write/Edit tool calls on these paths as memory operations without re-implementing CLI path detection.",
        ),
      worker_epoch: v()
        .int()
        .min(1)
        .optional()
        .describe(
          "@internal This cloud worker's life (CLAUDE_CODE_WORKER_EPOCH): a new number each time the session's worker is started. A claude --cloud client that latched an acknowledged epoch (register_device_hooks, remote_tools_announce) re-registers only when this differs. Emitted only on workers where the account's remote-tools gate (tengu_violin_wood) is on; absent outside cloud workers and on CLIs that predate the field.",
        ),
      powershell_path: i()
        .nullable()
        .optional()
        .describe(
          "@internal Windows only: the absolute path of the PowerShell binary this session runs PowerShell commands with (PowerShell 7 when installed, including Microsoft Store installs, else Windows PowerShell 5.1), or null when none was found. Lets a desktop host open its own terminal with the same shell instead of re-implementing the detection. Present on stream-json (Agent SDK) init frames; absent on other platforms, wherever the init ambient is redacted (the Remote Control bridge), and on CLIs that predate the field.",
        ),
      cloud_session: f({
        id: i(),
        view_url: i(),
        device: ps("status", [
          f({ status: N("bound"), device_id: i(), display_name: i().optional() }),
          f({ status: N("unbound"), reason: i(), message: i() }),
        ]),
        directory_sync: f({
          state: oe(["off", "seeding", "armed", "stopped"]),
          reason: i().optional(),
          message: i().optional(),
          first_upload: i().optional(),
          synced_files: v().int().nonnegative().optional(),
          other_window: q().optional(),
          started_from_upload: q().optional(),
          file_mode: oe(["container_sync", "device_tools", "unspecified"]),
          file_mode_source: oe(["stored"]),
        }),
        client_version: N(1),
        not_applied: H(f({ name: i(), kind: oe(["lost", "kept", "preference"]) })).optional(),
      })
        .optional()
        .describe(
          "@internal Only on init frames written by the headless stream-json client of a cloud-hosted session (agent loop in the cloud container; this machine may be bound to it as a device): a snapshot per frame, absent in every other mode; no user, assistant or result frame precedes the first such init (informational system frames may; on a re-attach so may frames of a turn already in progress, other clients' prompts, and the echo of this host's own prompt when the session already had it or it joins a turn in progress). `id` is the cloud session id, always in its `session_\u2026` spelling (the producer normalizes the service's `cse_\u2026` spelling of the same session); hosts store it and pass it back verbatim to re-attach. The frame-level `session_id` is instead the cloud worker's id, a uuidv5 of the session id in its `cse_` form: the same for the life of the cloud session across worker restarts and re-attaches until a /clear in the session, and passed through by the client unchanged. When `device.status` is `unbound`, `reason` is one of the client's unbound-reason keys and `message` its phrase: one line, at most 200 characters, no ANSI or trailing newline, worded to follow `Laptop tools unavailable: `. `directory_sync.state` is `seeding` while this machine's sync engine is still opening, `armed` once the engine is set to push before each message and pull after each turn, `stopped` once it has disarmed for the rest of the session, `off` when it never ran; on `off` and `stopped`, `reason` (one of the client's sync stop-cause keys) and `message` (its phrase: one line, at most 200 characters, no ANSI or trailing newline, a complete sentence) are present when the engine knows why; on `armed`, `first_upload` is `pending` until the first upload of a session created from this machine has reached the session and `landed` once it has (absent on an attach; hosts should read any value other than `landed` as not yet), `synced_files` is how many files the session holds from this directory as of the last upload (counted only for a plain folder; 0 means none of its files; absent for a repository checkout or before anything reached it), and `other_window` is `true` while another window on this machine holds the session's sync and this one's uploads are refused (producers omit it otherwise); `started_from_upload`, in any state, is `true` when the container was created from an upload of this directory (a bundle of the checkout, or a plain folder's files) rather than a clone (producers omit it otherwise; absent on an attach); `file_mode` is the per-repository choice in effect for the launch directory and `file_mode_source` where it was read: `stored` is this machine's saved settings (in which `unspecified` means no choice is saved); a later `host` member would mean the SDK host supplied the choice for this launch without saving it. `not_applied`, when present, lists what the host passed that this session does not apply \u2014 `name` is a flag as `--flag`, a key inside --settings / --managed-settings as `settings.<key>` / `managed-settings.<key>`, or a field of the opening initialize as `initialize.<field>` (at most 40, lost first, each one line of about 64 characters at most); `kind` says what it costs: `lost` (the session does without something this invocation asked for \u2014 the informational warning names these), `kept` (an attach: the existing session keeps what it was created with) or `preference` (a display or host preference nobody would miss \u2014 the informational notice names these two), so a host may show them itself once or never; absent when nothing was left unapplied. `client_version` rises only on a breaking change to this block \u2014 warn and continue on a higher value, never refuse; `state`, `first_upload`, `file_mode_source`, `not_applied[].kind` and reason keys may gain values without it changing, so treat unrecognized values neutrally (an unrecognized `first_upload` as not yet landed).",
        ),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Session metadata the CLI emits at the start of each turn, normally ahead of every other message of that turn: session_id, model, working directory, tools, MCP servers, slash commands, permission mode, and the capabilities list for feature detection.",
    ),
  ),
  T5 = m(() =>
    f({
      type: N("stream_event"),
      event: s5(),
      parent_tool_use_id: i().nullable(),
      uuid: Z(),
      session_id: i(),
      ttft_ms: v().int().optional(),
      user_message_uuid: i()
        .optional()
        .describe(
          "Client uuid of the user message that triggered this turn (submitMessage options.uuid), stamped on the turn's FIRST non-ping stream event only (the frame that triggers the turn's initial ack) so a consumer can bind the reply stream to the send it answers without waiting for the result. Absent on every later stream event of the turn, on synthetic/scheduled (meta) turns, on turns without a client uuid, and from older producers.",
        ),
    }).describe(
      "An incremental streaming event for the assistant message being generated, emitted only when partial messages are requested (--include-partial-messages). The complete assistant message still follows as its own message.",
    ),
  ),
  A5 = m(() =>
    f({
      type: N("system"),
      subtype: N("compact_boundary"),
      compact_metadata: f({
        trigger: oe(["manual", "auto"]),
        pre_tokens: v().int(),
        post_tokens: v().int().optional(),
        cumulative_dropped_tokens: v()
          .int()
          .optional()
          .describe(
            "@internal Running total of context tokens compaction has removed so far, across this and every earlier compaction. " +
              "Each contribution is approximately pre_tokens \u2212 post_tokens.",
          ),
        duration_ms: v().int().optional(),
        user_context: i().optional().describe('@internal User-provided focus text for manual "summarize from here".'),
        messages_summarized: v().int().optional().describe("@internal Count of messages the compaction summarized."),
        precomputed: q()
          .optional()
          .describe(
            "@internal The summary was generated in the background at the autocompact threshold and swapped in when prompt-too-long fired; duration_ms measures user-wait from that point.",
          ),
        pre_compact_discovered_tools: H(i())
          .optional()
          .describe(
            "@internal Deferred-tool names discovered before this compaction. extractDiscoveredToolNames reads this back on the next turn so the tool-schema filter keeps including them after the tool_reference-carrying messages were summarized away.",
          ),
        preserved_segment: f({ head_uuid: Z(), anchor_uuid: Z(), tail_uuid: Z() })
          .optional()
          .describe(
            "Relink info for messagesToKeep. Loaders splice the preserved segment at anchor_uuid (summary for suffix-preserving, boundary for prefix-preserving partial compact) so resume includes preserved content. Unset when compaction summarizes everything (no messagesToKeep).",
          ),
        preserved_messages: f({
          anchor_uuid: Z(),
          uuids: H(Z()),
          all_uuids: H(Z())
            .optional()
            .describe(
              "@internal Unfiltered messagesToKeep UUIDs. uuids is the on-disk subset (messages recordTranscript writes); all_uuids is the in-memory superset including non-loggable messages an in-process surface still holds for the next turn's API input. Absent from older producers.",
            ),
        })
          .optional()
          .describe(
            "Ordered messagesToKeep UUIDs. Supersedes preserved_segment \u2014 " +
              "readers look up each UUID directly and relink uuids[i] to uuids[i-1] (uuids[0] to anchor_uuid) instead of walking the parentUuid chain. Unset when compaction summarizes everything.",
          ),
      }),
      logical_parent_uuid: Z()
        .nullable()
        .optional()
        .describe(
          "@internal uuid of the last pre-compact message \u2014 the backpointer " +
            "forkSession follows across the compaction break. Distinct from the session-file chain parent (which is the post-compact summary). Absent from older producers.",
        ),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  y5 = m(() =>
    f({
      type: N("system"),
      subtype: N("status"),
      status: a5(),
      permissionMode: Rt().optional(),
      compact_result: oe(["success", "failed"]).optional(),
      compact_error: i().optional(),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  Bu = m(() =>
    f({
      type: N("system"),
      subtype: N("post_turn_summary"),
      summarizes_uuid: i(),
      status_category: i(),
      status_detail: i(),
      needs_action: i(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Background post-turn summary emitted after each assistant turn. summarizes_uuid points to the assistant message this summarizes.",
    ),
  ),
  Gu = m(() =>
    f({ type: N("system"), subtype: N("task_summary"), detail: i().nullable(), uuid: Z(), session_id: i() }).describe(
      "@internal Mid-turn progress line from the debounced classifier. Mirrors external_metadata.task_summary so non-CCR consumers (desktop LocalSessionManager) see the same live phrase. detail is null on the idle clear.",
    ),
  ),
  R5 = m(() =>
    f({
      type: N("system"),
      subtype: N("informational"),
      content: i(),
      level: oe(["info", "notice", "suggestion", "warning"]).describe(
        "Render level. 'info' shows only in transcript mode; 'notice' renders in inactive gray; 'suggestion' and 'warning' are more prominent.",
      ),
      tool_use_id: i().optional().describe("Dedupes progress messages for the same tool use."),
      prevent_continuation: q()
        .optional()
        .describe("When true, execution stops after this message (e.g. a Stop hook denied continuation)."),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Generic text banner emitted by the loop \u2014 non-error status lines, hook feedback (e.g. a UserPromptSubmit hook's block reason), slash-command output. Hosts render `content` as plaintext at the given level.",
    ),
  ),
  A_e = m(() =>
    f({
      type: N("system"),
      subtype: N("permission_retry"),
      content: i(),
      commands: H(i()).describe("Display names of the commands that were allowed."),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Emitted when tool execution retries after a permission-mode change allowed previously-denied commands. REPL renders a 'retrying with <commands>' banner. From internal SystemMessage 'permission_retry'.",
    ),
  ),
  b_e = m(() =>
    f({
      type: N("system"),
      subtype: N("stop_hook_summary"),
      hook_count: v().int(),
      hook_infos: H(f({ command: i(), prompt_text: i().optional(), duration_ms: v().int().optional() })),
      hook_errors: H(i()),
      hook_additional_context: H(i())
        .optional()
        .describe(
          "Non-error feedback from hookSpecificOutput.additionalContext \u2014 kept separate from hook_errors so the sanctioned feedback channel is not labeled an error. Absent in sessions persisted before this field existed.",
        ),
      prevented_continuation: q(),
      stop_reason: i().optional(),
      has_output: q(),
      level: oe(["info", "notice", "suggestion", "warning"]),
      tool_use_id: i().optional(),
      hook_label: i().optional(),
      total_duration_ms: v().int().optional(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Summary of Stop/SubagentStop hook execution at turn end \u2014 which hooks ran, their output, and whether any prevented continuation. From internal SystemMessage 'stop_hook_summary'.",
    ),
  ),
  y_e = m(() =>
    f({
      type: N("system"),
      subtype: N("memory_saved"),
      written_paths: H(i()),
      team_count: v().int().optional(),
      verb: i().optional().describe('Renders as "<verb> N memories". Defaults to "Saved".'),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Confirmation that the memory subsystem wrote to the listed paths. REPL renders a '<verb> N memories' banner. From internal SystemMessage 'memory_saved'.",
    ),
  ),
  R_e = m(() =>
    f({ type: N("system"), subtype: N("agents_killed"), uuid: Z(), session_id: i() }).describe(
      "@internal Emitted when background agents are terminated (e.g. on interrupt). REPL renders an 'agents killed' banner. From internal SystemMessage 'agents_killed'.",
    ),
  ),
  C_e = m(() =>
    f({ type: N("system"), subtype: N("away_summary"), content: i(), uuid: Z(), session_id: i() }).describe(
      "@internal Summary of what happened while the user was away (background tasks completed, notifications accumulated). From internal SystemMessage 'away_summary'.",
    ),
  ),
  v_e = m(() =>
    f({ type: N("system"), subtype: N("thinking"), content: i(), uuid: Z(), session_id: i() }).describe(
      "@internal Rendered thinking content (the text itself, not the running token estimate \u2014 that is SDKThinkingTokensMessage). From internal SystemMessage 'thinking'.",
    ),
  ),
  Ku = m(() =>
    f({ type: N("transcript_mirror"), filePath: i(), entries: H(_e()) }).describe(
      "@internal Emitted after each successful local transcript write. The parent peels these off the stdout stream and batches them to the SessionStore adapter. Not exposed to public SDK consumers.",
    ),
  ),
  C5 = m(() =>
    f({
      type: N("system"),
      subtype: N("mirror_error"),
      error: i(),
      key: f({ projectKey: i(), sessionId: i(), subpath: i().optional() }),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Emitted when SessionStore.append() rejects or times out for a transcript-mirror batch after bounded retry (3 attempts with short backoff; timeouts are not retried). The batch is then dropped; this surfaces the failure so consumers are not silent on data loss.",
    ),
  ),
  v5 = m(() =>
    f({
      type: N("system"),
      subtype: N("api_retry"),
      attempt: v().int(),
      max_retries: v().int(),
      retry_delay_ms: v().int(),
      error_status: v().int().nullable(),
      error: Nu(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Emitted when an API request fails with a retryable error and will be retried after a delay. error_status is null for connection errors (e.g. timeouts) that had no HTTP response.",
    ),
  ),
  O5 = m(() =>
    f({
      type: N("system"),
      subtype: N("control_request_progress"),
      request_id: i().describe("request_id of the in-flight control_request this progress belongs to."),
      status: oe(["started", "api_retry"]),
      attempt: v().int().optional(),
      max_retries: v().int().optional(),
      retry_delay_ms: v().int().optional(),
      error_status: v().int().nullable().optional(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Progress for a long-running client-originated control_request (currently only side_question), correlated by request_id. status 'started' means the worker accepted the request and launched the work; 'api_retry' carries the same retry counters as SDKAPIRetryMessage and is present only for that status.",
    ),
  ),
  k5 = m(() =>
    f({
      type: N("system"),
      subtype: N("model_refusal_fallback"),
      trigger: N("refusal"),
      direction: oe(["retry", "revert", "sticky"]),
      scope: oe(["session", "local"])
        .optional()
        .describe(
          "'session': the main thread fell back and the session model is swapped. 'local': a subagent / side-question (/btw) / background fork fell back \u2014 only that response came from the fallback model and the session model is unchanged. Absent from older CLIs (treat as 'session').",
        ),
      original_model: i(),
      fallback_model: i(),
      request_id: i().nullable(),
      api_refusal_category: i()
        .nullable()
        .optional()
        .describe(
          "The refusal category ('cyber', 'bio', \u2026): stop_details.category from the refused API response (client lane), or the fallback block's server-gated trigger.category (server lane). Open string \u2014 new categories ship on the wire ahead of schema updates. null when neither source carried a category (normal, not an error). Absent when emitted by an older CLI.",
        ),
      saw_cyber_refusal: N(!0)
        .optional()
        .describe(
          "@internal Present when ANY hop of this banner's multi-hop episode was a cyber refusal \u2014 not only the origin hop that api_refusal_category describes (the banner keeps first-hop category semantics for display). Re-arm evidence for the CLI's cyber-exclusion header on session restore; never rendered, not part of the public SDK contract. Absent on cyber-free episodes and when emitted by an older CLI.",
        ),
      api_refusal_explanation: i()
        .nullable()
        .optional()
        .describe(
          "stop_details.explanation from the refused API response (client lane only \u2014 the server-lane trigger carries no explanation). Unstable human prose \u2014 display only, never parse. null/absent when the response carried none, and always null on server-lane banners.",
        ),
      retracted_message_uuids: H(i())
        .optional()
        .describe(
          "Wire uuids of the messages this fallback retracted \u2014 the refused partial as the consumer received it (one uuid per normalized SDK message; multi-block messages carry per-block derived uuids) plus any tombstoned tool_results. Emitted AFTER the retraction, so this is a resolution-time eviction signal: remove these messages from transcript state on receipt. Eviction is idempotent \u2014 unknown or already-removed uuids are a no-op. Absent when emitted by an older CLI.",
        ),
      refused_user_message_uuid: i()
        .nullable()
        .optional()
        .describe(
          "UUID of the user message the refused request was for \u2014 the rewind target and composer prefill for edit-and-retry. This is the message's own uuid as delivered on the replay ack (not a per-block normalized uuid). null when the refused turn was not human-authored (e.g. a background task notification or auto-continuation \u2014 nothing to edit-and-retry) or otherwise cannot be identified; absent from older CLIs.",
        ),
      content: i(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      'Emitted when the primary model ends the stream with stop_reason "refusal" and the turn is retried once on a fallback model (direction: "retry"). When `scope` is "session" (or absent \u2014 older CLIs), the swap is made persistent for the session; when `scope` is "local", only that subagent/side-question response came from the fallback model and the session model is unchanged. "revert" and "sticky" are retained in the enum for SDK-consumer compat and are no longer emitted.',
    ),
  ),
  w5 = m(() =>
    f({
      type: N("system"),
      subtype: N("model_refusal_no_fallback"),
      original_model: i(),
      request_id: i().nullable(),
      api_refusal_category: i().nullable().optional(),
      api_refusal_explanation: i().nullable().optional(),
      refused_user_message_uuid: i().nullable().optional(),
      content: i(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      'Emitted when the model ends the stream with stop_reason "refusal" and no retry runs: no fallback model is configured, or per-category routing declined the retry (the mapped fallback target is unresolvable, or CLAUDE_CODE_REFUSAL_FALLBACK_CATCH_ALL is explicitly disabled and the refusal category has no fallback map entry). The structured counterpart to detecting stop_reason "refusal" on the assistant error frame. Not emitted when the retry ran or the user declined the retry dialog (model_refusal_fallback covers the retry case). Absent from older CLIs.',
    ),
  ),
  O_e = m(() =>
    f({
      type: N("system"),
      subtype: N("model_fallback"),
      trigger: oe([
        "model_not_found",
        "permission_denied",
        "overloaded",
        "server_error",
        "last_resort",
        "model_blocked",
      ]),
      original_model: i(),
      fallback_model: i(),
      content: i(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      '@internal Emitted when the current turn is switched to the configured fallback model because the primary model failed (trigger "model_not_found": model retired/unknown; "permission_denied": org lacks access; "overloaded": repeated 529s; "server_error": retryable 5xx pivot; "last_resort": non-retryable error on the primary; "model_blocked": primary disabled by the per-model kill switch). Turn-scoped \u2014 the primary is re-tried on the next user turn. Not yet in the public SDKMessage union.',
    ),
  ),
  k_e = m(() =>
    f({
      type: N("system"),
      subtype: N("model_consent_fallback"),
      choice: oe(["consent", "switch_default", "cancelled"]).describe(
        "The consent-prompt answer (or no-dialog collapse) that produced the swap. 'consent' appears here only when the gate could not honor it (e.g. usage credits did not end up provisioned \u2014 the loop never enables billing from a bare wire reply).",
      ),
      original_model: i(),
      fallback_model: i(),
      persisted_as_default: q().describe(
        "True when the decline also rewrote the saved default model (explicit switch_default with the consent-gated model as the saved default).",
      ),
      content: i(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Emitted when a pre-send model consent gate swaps the session off the requested model (consent declined, dismissed, or given without the required entitlement ending up provisioned). Currently emitted by the Fable 5 usage-credit gate (`fable_overage_consent_prompt`). Session-scoped \u2014 the swap persists for the session, and additionally as the saved default when persisted_as_default is true. Absence of this message after the consent dialog resolves means the session stayed on the requested model. Not yet in the public SDKMessage union.",
    ),
  ),
  w_e = m(() =>
    f({
      type: N("system"),
      subtype: N("file_snapshot"),
      content: i(),
      snapshot_files: H(
        f({
          key: i().describe("Identifier for the file type (e.g. 'plan', 'todo')."),
          path: i().describe("Original file path (for debugging)."),
          content: i(),
        }),
      ),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Snapshot of session files (plan, todo) captured for rewind. From internal SystemMessage 'file_snapshot'.",
    ),
  ),
  P_e = m(() =>
    f({ type: N("system"), subtype: N("scheduled_task_fire"), content: i(), uuid: Z(), session_id: i() }).describe(
      "@internal Emitted when a scheduled task (cron) fires. content is the render text. From internal SystemMessage 'scheduled_task_fire'.",
    ),
  ),
  M_e = m(() =>
    f({
      type: N("system"),
      subtype: N("turn_duration"),
      duration_ms: v().int(),
      budget_tokens: v().int().optional().describe("Output tokens spent this turn toward the token budget."),
      budget_limit: v().int().optional().describe("Turn token-budget ceiling."),
      budget_nudges: v().int().optional().describe("Budget-nudge count this turn."),
      message_count: v()
        .int()
        .optional()
        .describe(
          "In-memory message count at turn end; used by resume-consistency telemetry to detect write\u2192load round-trip drift.",
        ),
      pending_background_agent_count: v()
        .int()
        .optional()
        .describe("Background Agent-tool runs still in flight when the turn finished."),
      pending_workflow_count: v()
        .int()
        .optional()
        .describe("Workflow-tool runs still in flight when the turn finished."),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Per-turn wall-clock duration plus budget and pending-background-work counts. REPL renders the 'Done in Ns' / 'Waiting for N agents' line. From internal SystemMessage 'turn_duration'.",
    ),
  ),
  D_e = m(() =>
    f({
      type: N("system"),
      subtype: N("api_error"),
      error: f({
        message: i(),
        status: v().int().optional(),
        request_id: i().optional(),
        formatted: i().describe("Human-readable display string for the error."),
        connection: f({ code: i(), message: i(), is_ssl_error: q() })
          .nullable()
          .describe("errno/SSL code extracted from the cause chain; null when absent."),
        is_network_down: q(),
        rate_limits: f({ resets_at: v().int().optional(), rate_limit_type: i().optional() })
          .nullable()
          .describe("Quota-429 headers surfaced by the retry banner; null when not a quota 429."),
      }).describe("Plain-data snapshot of the APIError \u2014 the class instance cannot cross the wire."),
      retry_in_ms: v().int(),
      retry_attempt: v().int(),
      max_retries: v().int(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Retryable-API-error frame carrying the plain-data error snapshot and retry counters. REPL renders the retry banner from this. Wire twin is SDKAPIRetryMessage ('api_retry'). From internal SystemMessage 'api_error'.",
    ),
  ),
  P5 = m(() =>
    f({ type: N("system"), subtype: N("local_command_output"), content: i(), uuid: Z(), session_id: i() }).describe(
      "Output from a local slash command (e.g. /voice, /usage). Displayed as assistant-style text in the transcript.",
    ),
  ),
  M5 = m(() =>
    f({
      type: N("system"),
      subtype: N("hook_started"),
      hook_id: i(),
      hook_name: i(),
      hook_event: i(),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  D5 = m(() =>
    f({
      type: N("system"),
      subtype: N("hook_progress"),
      hook_id: i(),
      hook_name: i(),
      hook_event: i(),
      stdout: i(),
      stderr: i(),
      output: i(),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  I5 = m(() =>
    f({
      type: N("system"),
      subtype: N("hook_response"),
      hook_id: i(),
      hook_name: i(),
      hook_event: i(),
      output: i(),
      stdout: i(),
      stderr: i(),
      exit_code: v().int().optional(),
      outcome: oe(["success", "error", "cancelled"]),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  N5 = m(() =>
    f({
      type: N("system"),
      subtype: N("plugin_install"),
      status: oe(["started", "installed", "failed", "completed"]),
      name: i().optional(),
      error: i().optional(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Headless plugin installation progress (CLAUDE_CODE_SYNC_PLUGIN_INSTALL). started/completed bracket the whole install; installed/failed carry a per-marketplace name.",
    ),
  ),
  L5 = m(() =>
    f({
      type: N("tool_progress"),
      tool_use_id: i(),
      tool_name: i(),
      parent_tool_use_id: i().nullable(),
      elapsed_time_seconds: v().int(),
      task_id: i().optional(),
      uuid: Z(),
      session_id: i(),
      heartbeat: q().optional(),
      subagent_type: i().optional(),
      subagent_retry: f({
        agent_id: i(),
        attempt: v().int(),
        max_retries: v().int(),
        retry_delay_ms: v().int(),
        error_status: v().int().nullable(),
        error_category: i(),
      }).optional(),
    }),
  ),
  U5 = m(() =>
    f({
      type: N("auth_status"),
      isAuthenticating: q(),
      output: H(i()),
      error: i().optional(),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  F5 = m(() =>
    f({
      type: N("system"),
      subtype: N("files_persisted"),
      files: H(f({ filename: i(), file_id: i() })),
      failed: H(f({ filename: i(), error: i() })),
      processed_at: i(),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  ju =
    "True for housekeeping tasks the CLI does not surface as user work (every skip_transcript task, plus auto-started live-update watchers); hosts should exclude them from activity indicators.",
  B5 = m(() =>
    f({
      type: N("system"),
      subtype: N("task_notification"),
      task_id: i(),
      tool_use_id: i().optional(),
      status: oe(["completed", "failed", "stopped"]),
      output_file: i(),
      summary: i(),
      usage: f({ total_tokens: v().int(), tool_uses: v().int(), duration_ms: v().int() }).optional(),
      skip_transcript: q().optional(),
      ambient: q().optional().describe(ju),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  H5 = m(() =>
    f({
      type: N("system"),
      subtype: N("task_started"),
      task_id: i(),
      tool_use_id: i().optional(),
      description: i(),
      subagent_type: i().optional().describe("Subagent type for Task tool subagents."),
      is_backgrounded: q()
        .optional()
        .describe(
          "Whether the task was registered in the background (true) or in the foreground with the spawning tool call blocking on it (false). A resumed subagent is always registered in the background. A later move to the background arrives as task_updated patch.is_backgrounded. Set for local_agent and local_bash tasks.",
        ),
      spawn_depth: v()
        .int()
        .optional()
        .describe(
          "Nesting depth of a spawned subagent (local_agent) task: 1 for a top-level spawn, N+1 when spawned from inside a depth-N agent. Not set on other tasks.",
        ),
      task_type: i().optional(),
      workflow_name: i()
        .optional()
        .describe("meta.name from the workflow script (e.g. 'spec'). Only set when task_type is 'local_workflow'."),
      prompt: i().optional(),
      skip_transcript: q()
        .optional()
        .describe(
          "Ambient/housekeeping task. Consumers should hide this from the inline transcript; it may still appear in a tasks panel.",
        ),
      ambient: q().optional().describe(ju),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  V5 = m(() =>
    f({
      type: N("system"),
      subtype: N("task_updated"),
      task_id: i(),
      patch: f({
        status: oe(["pending", "running", "completed", "failed", "killed", "paused"]).optional(),
        description: i().optional(),
        end_time: v().int().optional(),
        total_paused_ms: v().int().optional(),
        error: i().optional(),
        is_backgrounded: q().optional(),
      }).describe(
        "Wire-safe subset of TaskState fields that changed. Excludes abortController, messages, result. Clients merge into their local task map.",
      ),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  G5 = m(() =>
    f({
      type: N("system"),
      subtype: N("background_tasks_changed"),
      tasks: H(f({ task_id: i(), task_type: i(), description: i(), ambient: q().optional().describe(ju) })).describe(
        "Every live background task after the change. REPLACE semantics: swap your set for this payload.",
      ),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "The full set of live background tasks, emitted whenever membership changes (start, completion, kill, a foreground agent being backgrounded) or an entry's `ambient` flag flips. A level signal, unlike the task_started/task_notification edge bookends: consumers that only need 'is background work running' should replace their set with each payload rather than pairing edges, so a missed bookend cannot wedge a stale running indicator. Ordering relative to the bookends for the same transition is unspecified (in practice the level precedes them) and the payload carries ids only, so do not correlate it with the edge stream. The level is per-process: nothing is emitted at startup, so consumers must reset to the empty set whenever the session's CLI process (re)starts and let the next membership change repopulate it. A host that re-initializes an already-running process (a repeated `initialize` control request, e.g. after reconnecting) is sent a snapshot of the current set right behind the success response to that request, even when it is empty, so it need not wait for a change; CLIs that predate this send nothing there.",
    ),
  ),
  K5 = m(() =>
    f({
      type: N("system"),
      subtype: N("feedback_draft_queued"),
      draft_id: i().describe(
        "UUID of the on-disk draft file under ~/.claude/feedback/drafts/ \u2014 the identity for discard and submit.",
      ),
      draft_type: oe(["bug", "idea", "missing_capability"]),
      title: i().describe("Sanitized one-line summary from the SendFeedback tool call."),
      details_preview: i().describe(
        "First ~200 chars of the sanitized details, for the host UI's three-line card preview. The full draft stays on disk and is read when the user opens the review form.",
      ),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Emitted by the SendFeedback tool after it writes a local draft to ~/.claude/feedback/drafts/, so a connected host UI can surface a review card without polling the filesystem. Carries only the card's display fields; nothing is sent anywhere without the user's explicit action on the review form.",
    ),
  ),
  j5 = m(() =>
    f({
      type: N("system"),
      subtype: N("session_state_changed"),
      state: oe(["idle", "running", "requires_action"]),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Mirrors notifySessionStateChanged. 'idle' fires after heldBackResult flushes and the bg-agent do-while exits \u2014 authoritative turn-over signal.",
    ),
  ),
  W5 = m(() =>
    f({
      type: N("system"),
      subtype: N("worker_shutting_down"),
      reason: i().describe(
        "Short snake_case reason set by the host CLI (not user input), e.g. 'host_exit', 'remote_control_disabled'.",
      ),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Emitted by the bridge on opt-in graceful worker teardown (only when the teardown caller supplied a reason), before the heartbeat stops, so remote clients can show why the worker went away instead of waiting for heartbeat timeout. Absence is NOT a dead-host signal: handoffs (/update, /teleport, respawn), auto-disable, mode transitions, and internal fatal-error paths emit nothing by design. A dead host (battery, OOM, kill -9) never reaches teardown and never sends this either. NOTE: this event lands in the durable per-session event stream \u2014 a session that is later resumed may carry historical instances mid-stream. Clients MUST treat it as a live-tail signal only (honored when no further activity follows), not a one-shot session-lifetime fact.",
    ),
  ),
  Y5 = m(() =>
    f({ type: N("system"), subtype: N("commands_changed"), commands: H(Io()), uuid: Z(), session_id: i() }).describe(
      "Fire-and-forget push of the full slash-command list after a mid-session change (e.g. skills discovered dynamically as the agent works in a subdirectory). Clients should REPLACE their cached command list with this payload; supportedCommands() tracks the latest push, so a re-fetch returns the same fresh list.",
    ),
  ),
  $5 = m(() =>
    f({
      type: N("system"),
      subtype: N("notification"),
      key: i(),
      text: i(),
      priority: oe(["low", "medium", "high", "immediate"]),
      color: i().optional(),
      timeout_ms: v().int().optional(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Loop-side text notification. Mirrors the interactive REPL notification queue (key/priority/timeout). JSX notifications are not emitted on this channel.",
    ),
  ),
  X5 = m(() =>
    f({
      type: N("system"),
      subtype: N("task_progress"),
      task_id: i(),
      tool_use_id: i().optional(),
      description: i(),
      subagent_type: i().optional().describe("Subagent type for Task tool subagents."),
      usage: f({ total_tokens: v().int(), tool_uses: v().int(), duration_ms: v().int() }),
      last_tool_name: i().optional(),
      summary: i().optional(),
      uuid: Z(),
      session_id: i(),
    }),
  ),
  Q5 = m(() =>
    f({
      type: N("system"),
      subtype: N("thinking_tokens"),
      estimated_tokens: v().int(),
      estimated_tokens_delta: v().int(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Live thinking-token estimate, digested from thinking_delta.estimated_tokens during the redacted-thinking phase (where the API otherwise streams only pings). estimated_tokens is the running total for the current thinking block; estimated_tokens_delta is the increment carried by this frame. Approximate progress for spinners/pills, not the authoritative billed output_tokens.",
    ),
  ),
  J5 = m(() =>
    f({
      type: N("tool_use_summary"),
      summary: i(),
      preceding_tool_use_ids: H(i()),
      uuid: Z(),
      session_id: i(),
      timestamp: i()
        .optional()
        .describe(
          "@internal ISO timestamp when the summary was created on the originating process. From internal ToolUseSummaryMessage.timestamp.",
        ),
    }),
  ),
  Z5 = m(() =>
    f({
      type: N("system"),
      subtype: N("memory_recall"),
      mode: oe(["select", "synthesize"]).describe(
        "How memories were surfaced: 'select' returns full file bodies chosen by the parallel selector; 'synthesize' returns a Sonnet-authored paragraph distilled from many tiny memories.",
      ),
      memories: H(
        f({
          path: i().describe(
            "Absolute path to the memory file, a synthesis sentinel of the form `<synthesis:DIR>` when mode is 'synthesize', or an https URL when scope is 'organization'.",
          ),
          scope: oe(["personal", "team", "organization"]),
          content: i()
            .optional()
            .describe(
              "The surfaced memory body. Always present for 'synthesize' mode and 'organization' scope (neither has an on-disk path to lazy-load from); absent for file-backed 'select' entries (renderers lazy-load from path).",
            ),
        }),
      ),
      uuid: Z(),
      session_id: i(),
    }).describe(
      'Emitted when the memory recall supervisor surfaces relevant memories into the turn. Mirrors the CLI relevant_memories attachment so SDK renderers can show "Recalled from memory" inline.',
    ),
  ),
  e8 = m(() =>
    f({
      type: N("system"),
      subtype: N("elicitation_complete"),
      mcp_server_name: i(),
      elicitation_id: i(),
      uuid: Z(),
      session_id: i(),
    }).describe("Emitted when an MCP server confirms that a URL-mode elicitation is complete."),
  ),
  t8 = m(() =>
    f({
      type: N("system"),
      subtype: N("permission_denied"),
      tool_name: i(),
      tool_use_id: i(),
      agent_id: i()
        .optional()
        .describe(
          "Subagent ID when the denied tool call originated inside a subagent. Mirrors can_use_tool for host-side routing.",
        ),
      decision_reason_type: i()
        .optional()
        .describe("Discriminator from PermissionDecisionReason (e.g. 'classifier', 'asyncAgent', 'mode', 'rule')."),
      decision_reason: i().optional().describe("Human-readable reason from the deciding component, when available."),
      message: i().describe("The rejection message returned to the model in the tool_result."),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Emitted when a tool call is auto-denied without an interactive permission prompt (e.g. auto-mode classifier, dontAsk mode, headless-agent auto-deny, or a deny rule). With a permission prompt surface (stdio/SDK canUseTool), the 'ask' path surfaces via a can_use_tool control_request and this event covers the 'deny' short-circuit. Without one (bare -p / SDK query() with no canUseTool), 'ask' decisions are terminal, so this event also covers those implicit denials. Best-effort advisory: in rare races a denial can book without a frame or a frame can lack a booking twin \u2014 result.permission_denials is the authoritative record. Denials that resolve before canUseTool runs \u2014 PreToolUse hook denies, and deny-rule overrides of hook allow/ask decisions \u2014 are not covered here, and neither is the MCP --permission-prompt-tool surface (the prompt tool is the host there).",
    ),
  ),
  n8 = m(() =>
    f({ type: N("prompt_suggestion"), suggestion: i(), uuid: Z(), session_id: i() }).describe(
      "Predicted next user prompt, emitted after each turn when promptSuggestions is enabled.",
    ),
  ),
  I_e = m(() =>
    f({
      type: N("attachment"),
      attachment: _e().describe(
        "Internal Attachment discriminated union (at-mentioned files, IDE selections, pasted images, structured output, deferred tool-use). Wire shape pending a dedicated SDKAttachment schema.",
      ),
      timestamp: i(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Emitted when the engine yields an AttachmentMessage into the turn stream. Carries user-attached content (at-mentioned files, IDE selections, pasted media) and loop-attached data (structured output, deferred tool-use payloads). SDKResultMessage.structured_output and .deferred_tool_use are derived from these frames. From internal QueryEvent 'attachment'.",
    ),
  ),
  N_e = m(() =>
    f({
      type: N("tombstone"),
      message: _e().describe("The internal Message being tombstoned. Wire shape pending a dedicated schema."),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Emitted when a previously-yielded message is superseded or removed from the transcript (e.g., streaming\u2192non-streaming fallback removes a partial orphan). Consumers that render or persist the stream should remove the referenced message. From internal QueryEvent 'tombstone'.",
    ),
  ),
  r8 = m(() =>
    f({ type: N("conversation_reset"), new_conversation_id: Z(), uuid: Z(), session_id: i() }).describe(
      "Emitted by /clear, plan-mode exit, and fresh-session flows. The surface should mount a fresh transcript under new_conversation_id and reset any cached session title. From internal QueryEvent 'conversation_reset'.",
    ),
  ),
  x_e = m(() =>
    f({
      type: N("api_metrics"),
      event: ps("type", [
        f({ type: N("start"), ttft_ms: v().int(), id: i().optional(), message_id: i().optional() }),
        f({ type: N("end"), output_tokens: v().int(), id: i().optional() }),
        f({ type: N("content_block_start"), id: i().optional() }),
        f({ type: N("thinking_progress"), estimated_tokens_delta: v().int(), id: i().optional() }),
        f({ type: N("thinking_signature"), chars: v().int(), id: i().optional() }),
      ]).describe(
        "Per-API-call OTPS/TTFT lifecycle event. Optional id correlates parallel subagent start/end; serial callers omit it.",
      ),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Emitted when a subagent's API call reports TTFT or output_tokens for OTPS (output-tokens-per-second) metering. From internal QueryEvent 'api_metrics' (ApiMetricsLifecycleEvent).",
    ),
  ),
  L_e = m(() =>
    f({ type: N("os_notification"), message: i(), notification_type: i(), uuid: Z(), session_id: i() }).describe(
      "@internal Emitted when a tool (PushNotificationTool, the Computer Use wrapper) or turn-end cleanup requests a native OS notification. The surface dispatches to its platform notification channel (iTerm2/Kitty/Ghostty/bell in the terminal; native IPC for desktop/IDE). From internal QueryEvent 'os_notification'.",
    ),
  ),
  U_e = m(() =>
    f({
      type: N("apply_flag_settings"),
      settings: De(i(), _e()).describe(
        "Shallow-merge flag-settings patch \u2014 same shape as SDKControlApplyFlagSettingsRequest.settings.",
      ),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Output-direction counterpart to SDKControlApplyFlagSettingsRequest. Emitted when slash commands that toggle flag settings request a batched write that the surface applies to its AppState. From internal QueryEvent 'apply_flag_settings'.",
    ),
  ),
  o8 = m(() =>
    f({
      type: N("command_lifecycle"),
      command_uuid: i().describe(
        "The queued command's uuid \u2014 the client-supplied uuid on the inbound message. Commands enqueued without a uuid (e.g. the one-shot `-p \"prompt\"` string path) emit no lifecycle events. Renamed from Engine 'uuid' to avoid collision with the universal message uuid field.",
      ),
      state: oe(["queued", "started", "completed", "cancelled", "discarded", "refused"]),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Fate of a queued command (slash command or queued user prompt). 'queued' when the inbound message enters the command queue; 'started' when it drains into a turn; then exactly one terminal state: 'completed' \u2014 the turn that consumed it ended cleanly; 'cancelled' \u2014 removed by cancel_async_message, swept by an interrupt with cancel_queued:true, caught by a pending cancel just before dispatch, or consumed into a turn that was aborted (interrupt) or died on a hard failure (model_error, prompt_too_long, ...) \u2014 cancelled-over-completed is deliberate dup-over-loss for exactly-once resenders, so a fold answered earlier in a failed turn may be re-sent (a per-fold ledger refinement is tracked separately) \u2014 but resenders must not blindly resend on 'cancelled': user-requested removals arrive as the same state, so correlate against your own cancel_async_message responses AND against any interrupt receipt's `cancelled` list (interrupt_cancel_queued_v1) and resend only cancels neither source accounts for; 'discarded' \u2014 the session ended (end_session) with the command still queued, or with a peer message still held by the receive-side policy (not preceded by 'queued' then); 'refused' \u2014 declined by the session's receive-side policy before entering the queue (outright, or after being held): not preceded by 'queued', and it will not run in this session. Known gap: folds consumed by turns ending via max_turns / hook_stopped / tool_deferred / background_requested report 'completed' even though their content may only be answered on continuation/resume. 'completed' means the consuming turn ended, not that the result frame was delivered. Ordering relative to the result frame is per-path: a command that starts a fresh turn emits 'completed' AFTER that turn's result frame (later still when the result is held back for background tasks); a command folded into an already-in-flight turn emits 'completed' BEFORE that turn's result frame. Not a strict pairing: a terminal state may arrive for a command_uuid that never emitted 'started' (control-request ACKs, duplicate deliveries); internally-enqueued commands (cron triggers, teammate shutdown prompts, deferred-turn resume) mint a fresh uuid at enqueue and emit started/terminal without 'queued'; a turn that fails by throwing can leave 'started' without a terminal state; and a peer message the queue's own admission guard drops after acceptance (rate limit, duplicate collapse, loop guard, queued-peer cap) currently leaves 'queued' without a terminal state \u2014 on process exit a wrapper should synthesize 'discarded' for uuids it has not seen reach a terminal state. The exactly-one-terminal guarantee is per worker process, not per uuid lifetime: after CCR redelivery a 'discarded' uuid legitimately re-emits queued\u2192\u2026\u2192terminal on the next worker. Emitted on the stdout stream in -p/SDK sessions; remote transports (mobile/desktop bridge) receive the equivalent signal via delivery ACKs instead. A host driving a cloud-hosted session through the headless `--cloud` client also receives 'cancelled' (and only that state) after its interrupt with cancel_queued:true, synthesized from the session's receipt: for a uuid the host sent and did not cancel itself it means the cloud session dropped that command \u2014 it will not run; do not resend it; the frames follow the interrupt's success response, are not ordered against the interrupted turn's result, and unknown uuids (another client's prompt) may appear. From internal QueryEvent 'command_lifecycle'.",
    ),
  ),
  i8 = m(() =>
    f({
      type: N("system"),
      subtype: N("code_change_published"),
      provider: i().describe(
        "Forge classification derived from the URL's shape: 'github', 'github-enterprise', 'gitlab', or 'bitbucket' for pull/merge requests, and other values for other review systems in internal builds. A naming hint, not host trust \u2014 an unrecognized host with a PR-shaped path classifies as 'github-enterprise'. Open set; treat an unknown value as a valid provider you don't recognize, never as an error.",
      ),
      url: i().describe(
        "Web URL of the published change, as printed in the command output. Unverified \u2014 do not route authenticated requests to this host without your own validation.",
      ),
      repo: i().describe(
        "Repository path from the URL (owner/name on GitHub; may carry more segments on GitLab). Shape-validated (forge path segments only; exactly owner/name except on GitLab) but not verified against any forge \u2014 on GitLab a leading segment can be a nested group, so never interpret it as a host.",
      ),
      identifier: i().describe(
        "Provider-native change identifier \u2014 the PR/MR (or other change) number as a string.",
      ),
      action: oe([
        "created",
        "edited",
        "merged",
        "commented",
        "closed",
        "reopened",
        "ready",
        "draft",
        "auto-merge-enabled",
        "auto-merge-disabled",
        "pushed",
        "checked-out",
        "started",
      ])
        .optional()
        .describe(
          "What the session did that produced this announcement: the flag-aware gh pr verb it ran ('created', 'closed', 'auto-merge-enabled', \u2026), 'pushed' for a push to a branch that has a PR, 'checked-out' for gh pr checkout, or 'started' for the open change on the branch the session's working directory was on when a Claude Desktop session began (sent once, at the first initialize of a new session, never on resume) \u2014 always sent by current producers, absent only from older ones.",
        ),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal A code change from this session went out for review (a pull/merge request, or another provider's change in internal builds). Fires when the harness sees the change published or links the session to a PR \u2014 on creation, and also when the session contributes to an existing one (gh pr edit/close/ready, gh pr checkout, a push to a branch that has an open PR) \u2014 so bind on every event, not just the first; re-emission for the same URL is possible and idempotent. Provenance: values are scraped from the command's captured output (the last PR-shaped URL printed) or a gh pr view lookup. Captured output is not only the forge CLI's own text \u2014 hook output or files printed by the same command can contribute \u2014 so treat the fields as a binding hint: display them, but verify against the forge with your own credential-scoped lookup before routing authenticated requests or trusting the host. Best-effort, not exhaustive: a crash before the link, gh printing no URL to a piped capture (gh pr merge), or an unrecognized forge means no event \u2014 keep your provider-API lookup as the source of truth and treat this as the trigger.",
    ),
  ),
  s8 = m(() =>
    f({
      type: N("system"),
      subtype: N("vcs_state_changed"),
      kind: oe(["commit", "push", "merge", "rebase"]).describe(
        "What class of mutation was observed. New kinds may be added \u2014 treat an unrecognized kind exactly like a recognized one (something changed, go look).",
      ),
      cwd: i().describe(
        "The directory the shell was in when the command finished (so an inner cd is reflected; a git -C target is not) \u2014 a hint about where to look, never proof of what moved: confirm against the repository itself.",
      ),
      branch: i()
        .optional()
        .describe(
          "The branch a commit landed on (from the commit summary line git prints per commit) or a push updated (from the ref-update line git prints per pushed ref, e.g. `HEAD -> other`). Commit and push events carry it; a command that pushed several branches emits one push event per branch. A best-effort hint: absent whenever attribution is uncertain (a push whose output was redirected still emits, with no branch; a push that also updated a ref whose name could not be carried emits a nameless event beside the named ones), and never a required key.",
        ),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal A harness-observed shell command mutated repository state (git commit/cherry-pick, push, merge, rebase \u2014 dry runs excluded). A cache-invalidation signal with a deliberately minimal payload: beyond classification it carries the branch acted on and the directory the shell finished in, both hints about where to look, so consumers still re-read state (head, PR status) from the repository instead of decoding the event. Derived from the same detection as the tool result's structured gitOperation data, so the two agree on what happened; only a push's `branch` is attributed more strictly here (from the push's own output section) than in that data. A compound command can emit more than one kind (a merge and a rebase in one command collapse to the latter), and a push of several branches emits one push event per branch; coalesce freely. Best-effort, not exhaustive: only foreground mutations run through the Bash/PowerShell tools are observed \u2014 a backgrounded command whose confirming output had not printed at capture time emits nothing. A foreground push whose ref lines were redirected or silenced still emits, on the invoking command's zero exit code alone (so a compound that swallows a failed push's code also emits; the event is a prompt to look, never a claim).",
    ),
  ),
  z_e = m(() =>
    f({
      type: N("set_expanded_view"),
      expanded_view: oe(["none", "tasks", "teammates"]),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Hint to expand a side panel. Enum is a superset of AppState.expandedView for back-compat; do not narrow.",
    ),
  ),
  Wu = m(() =>
    f({
      type: N("active_goal"),
      value: f({
        condition: i(),
        iterations: v().int(),
        set_at: v().int(),
        tokens_at_start: v().int(),
        last_reason: i().optional(),
      }).nullable(),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "Emitted when the user's /goal Stop hook reports met (clears) or not-yet-met (bumps iterations + last_reason). Any surface with a goal indicator re-renders from this. value is null when the goal is cleared. From internal QueryEvent 'active_goal'.",
    ),
  ),
  Yu = m(() =>
    f({
      type: N("autocompact_state"),
      value: f({
        enabled: q().describe(
          "Whether auto-compact is enabled on the worker (autoCompactEnabled setting + DISABLE_AUTO_COMPACT / DISABLE_COMPACT env; DISABLE_COMPACT also disables manual /compact).",
        ),
        effective_window: v()
          .int()
          .describe(
            "The worker's resolved auto-compact window in tokens \u2014 resolveAutoCompactWindow output clamped to the model window, honoring /autocompact, CLAUDE_CODE_AUTO_COMPACT_WINDOW, clientdata and experiment overrides.",
          ),
        threshold: v()
          .int()
          .describe(
            "The token count where threshold-triggered compaction fires on the worker \u2014 effective_window minus the summary buffer, lowered further by CLAUDE_AUTOCOMPACT_PCT_OVERRIDE when set.",
          ),
        enforced: q().describe(
          "Whether threshold-triggered compaction will actually fire at `threshold`. False when the worker defers to the API's prompt-too-long (reactive mode) or context collapse owns headroom \u2014 clients then show % of window used instead of a countdown to a compaction that won't happen.",
        ),
        source: oe(["env", "settings", "clientdata", "experiment", "model-default", "unknown-model", "auto"]).describe(
          "Which input decided the window (resolveAutoCompactWindow precedence order).",
        ),
      }),
      uuid: Z(),
      session_id: i(),
    }).describe(
      `@internal Worker-resolved auto-compact state, emitted by CCR workers at boot, whenever the resolved state changes (/autocompact, model switch, settings change), re-checked at each turn start, and re-emitted after a conversation reset. Thin clients adopt it so the "% until auto-compact" indicator counts down to the worker's real compaction trigger instead of re-resolving against client-local state. Turn-scoped divergence is accepted: a turn running under a skill/command frontmatter model override compacts against that model's window while the frame keeps the resting model's (the local indicator shares this limitation). From sessionState.onAutocompactInputsChanged.`,
    ),
  ),
  F_e = m(() =>
    f({
      type: N("set_in_progress_tool_use_ids"),
      op: f({ action: oe(["add", "remove"]), ids: H(i()) }),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Emitted when tool execution adds/removes tool_use ids from the mid-execution set (after permission grant, before result). Surfaces use this to show which tools are running. From internal QueryEvent 'set_in_progress_tool_use_ids'.",
    ),
  ),
  B_e = m(() =>
    f({ type: N("hint_clears"), ids: H(i()), content_by_id: De(i(), i()), uuid: Z(), session_id: i() }).describe(
      "@internal Emitted when the server-side context-hint reject path reports cleared tool_use ids after a retry/fallback. The surface re-runs clearToolResultsById on its message list so subsequent turns match the API's view. From internal QueryEvent 'hint_clears'.",
    ),
  ),
  H_e = m(() =>
    f({ type: N("open_message_selector"), uuid: Z(), session_id: i() }).describe(
      "@internal Emitted by /rewind to open the message-selector overlay. Fire-and-forget \u2014 the user's selection returns through a separate channel. From internal QueryEvent 'open_message_selector'.",
    ),
  ),
  V_e = m(() =>
    f({
      type: N("compact_progress"),
      event: ps("type", [
        f({ type: N("hooks_start"), hook_type: oe(["pre_compact", "post_compact", "session_start"]) }),
        f({ type: N("compact_start"), hint_text: i().nullable().optional() }),
        f({ type: N("compact_end") }),
      ]).describe("In-progress compaction lifecycle event."),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Emitted while compaction is running (hook phase, compact start, compact end). Distinct from system/compact_boundary, which reports the post-compaction transcript boundary after completion. From internal QueryEvent 'compact_progress' (CompactEvent Delta-track arm).",
    ),
  ),
  G_e = m(() =>
    f({
      type: N("stream_mode"),
      mode: oe(["tool-input", "tool-use", "requesting", "responding", "thinking"]),
      uuid: Z(),
      session_id: i(),
    }).describe(
      "@internal Emitted when the engine's spinner phase changes during compaction. From internal QueryEvent 'stream_mode' (CompactEvent Delta-track arm).",
    ),
  ),
  K_e = m(() =>
    ps("op", [
      f({ type: N("response_length"), op: N("add"), delta: v().int(), uuid: Z(), session_id: i() }),
      f({ type: N("response_length"), op: N("reset"), uuid: Z(), session_id: i() }),
    ]).describe(
      "@internal Emitted to drive the streaming-output character counter in the spinner ('add' accumulates, 'reset' zeroes on compaction-boundary swap). From internal QueryEvent 'response_length' (Delta-track).",
    ),
  ),
  j_e = m(() =>
    ps("phase", [
      f({ type: N("refusal_continuation"), phase: N("begin"), salvage_text: i(), uuid: Z(), session_id: i() }),
      f({ type: N("refusal_continuation"), phase: N("end"), uuid: Z(), session_id: i() }),
    ]).describe(
      "@internal Emitted when a silent refusal-continuation retry begins ('begin' with salvage_text to keep visible in the streaming preview) or ends ('end'). From internal QueryEvent 'refusal_continuation'.",
    ),
  ),
  W_e = m(() =>
    f({
      sessionId: i().describe("Unique session identifier (UUID)."),
      summary: i().describe("Display title for the session: custom title, auto-generated summary, or first prompt."),
      lastModified: v().int().describe("Last modified time in integer milliseconds since epoch."),
      fileSize: v().int().optional().describe("File size in bytes. Only populated for local JSONL storage."),
      customTitle: i().optional().describe("User-set session title via /rename."),
      firstPrompt: i().optional().describe("First meaningful user prompt in the session."),
      gitBranch: i().optional().describe("Git branch at the end of the session."),
      cwd: i().optional().describe("Working directory for the session."),
      tag: i().optional().describe("User-set session tag."),
      createdAt: v()
        .int()
        .optional()
        .describe("Creation time in integer milliseconds since epoch, extracted from the first entry's timestamp."),
    }).describe("Session metadata returned by listSessions and getSessionInfo."),
  ),
  qu = m(() =>
    dt([
      f5(),
      Lu(),
      l5(),
      E5(),
      S5(),
      T5(),
      A5(),
      y5(),
      v5(),
      O5(),
      k5(),
      w5(),
      P5(),
      M5(),
      D5(),
      I5(),
      N5(),
      L5(),
      U5(),
      B5(),
      H5(),
      V5(),
      X5(),
      G5(),
      Q5(),
      j5(),
      W5(),
      Y5(),
      $5(),
      F5(),
      J5(),
      Z5(),
      _5(),
      e8(),
      t8(),
      n8(),
      C5(),
      R5(),
      r8(),
      o8(),
      i8(),
      s8(),
      K5(),
    ]).describe(
      "Every conversational and informational message the CLI emits on its output stream, discriminated by type (and subtype for system/result messages). Consumers should ignore types and subtypes they do not recognize: the set grows over time.",
    ),
  ),
  No = m(() =>
    oe(["off", "cooldown", "on"]).describe("Fast mode state: off, in cooldown after rate limit, or actively enabled."),
  ),
  xo = m(() =>
    oe([
      "free",
      "preference",
      "extra_usage_disabled",
      "network_error",
      "unknown",
      "not_first_party",
      "disabled_by_env",
      "model_not_allowed",
      "sdk_opt_in_required",
      "pending",
    ]).describe(
      "Why fast mode can't serve right now. Absent when nothing blocks it (a request may still choose standard speed). A paused-after-rate-limit run is not here; it rides fast_mode_state as 'cooldown'.",
    ),
  ),
  Xu = m(() =>
    f({
      text: i().describe(
        "The label to show \u2014 already sanitized to a single line of plain text and capped at 6 columns, exactly as the terminal footer renders it after its \u25C6 glyph.",
      ),
    }).describe(
      '@internal The server-configured session indicator (bootstrap client_data.footer_indicator) that the terminal renders as a "\u25C6 <text>" pill in the prompt footer \u2014 an opaque status note operators set per cohort (e.g. to prove a test config reached the session). Carried on `system/init` and the `initialize` response so a host UI (Claude Desktop, IDE webviews) can render the same pill. Absent when nothing is configured; hosts should then render nothing. Read from the CLI\'s cached bootstrap data, so a label configured after that cache was last written first appears on a later `system/init`.',
    ),
  );

var xP = m(() =>
    _e().describe(
      "A JSON-RPC 2.0 message as defined by the Model Context Protocol (request, notification, or response object).",
    ),
  ),
  a8 = m(() =>
    f({
      matcher: i().optional(),
      hookCallbackIds: H(i()).describe(
        "Opaque ids chosen by the client, one per hook function it registered for this matcher. When the hook fires the CLI sends a hook_callback control request carrying one of these ids as callback_id; the client maps it back to its function.",
      ),
      timeout: v().optional(),
    }).describe("Configuration for matching and routing hook callbacks."),
  ),
  obt = m(() =>
    f({
      subtype: N("initialize"),
      hooks: De(uP(), H(a8())).optional(),
      sdkMcpServers: H(i()).optional(),
      sdkMcpServerConfigs: De(i(), Pu().omit({ type: !0, name: !0 }))
        .optional()
        .describe(
          "Settings for the SDK-hosted MCP servers named in sdkMcpServers, keyed by server name. Sent as a separate field so a CLI that predates it ignores it; entries whose name is not in sdkMcpServers, and values that do not match this shape, are ignored rather than rejected. Applied when the server is first registered.",
        ),
      jsonSchema: De(i(), _e()).optional(),
      systemPrompt: H(i()).optional(),
      appendSystemPrompt: i().optional(),
      planModeInstructions: i()
        .optional()
        .describe(
          "Custom workflow body for the plan-mode system reminder. Replaces the default code-implementation phases; the CLI still wraps it with the read-only enforcement preamble and the ExitPlanMode protocol footer.",
        ),
      appendSubagentSystemPrompt: i()
        .optional()
        .describe(
          "@internal Additional system prompt appended to every Task-tool subagent (and propagated to nested subagents). Gated by CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT.",
        ),
      toolAliases: De(i(), i())
        .optional()
        .describe(
          "Map of tool-name aliases applied before name resolution. When the model emits a tool_use whose name is a key in this map, the tool execution path resolves the mapped name instead. Single-hop (no chains). See Options.toolAliases.",
        ),
      excludeDynamicSections: q()
        .optional()
        .describe(
          "When true, omit per-user dynamic sections (working directory, auto-memory path) from the cached system prompt and re-inject them as the first user message. Lets cross-user prompt caching hit on a static system prompt prefix. Tradeoff: the model sees this context slightly later in the prompt, so steering on the working directory and memory location is marginally less authoritative. Has no effect when a custom (non-preset) system prompt is in use.",
        ),
      agents: De(i(), gP()).optional(),
      title: i()
        .optional()
        .describe(
          "Custom session title. When provided, the session uses this title and skips automatic title generation. Has no effect on the persisted title when resuming an existing session.",
        ),
      skills: H(i())
        .optional()
        .describe(
          'When provided, only skills whose names match an entry are loaded into the main session system prompt, matching the exact canonical name (e.g. "my-plugin:my-skill") or a ":name" suffix of it. Display names and aliases do not match. Omit to load every discovered skill. Applies to the main session only; subagents use AgentDefinition.skills, which additionally resolves display names and aliases.',
        ),
      webSearchIsolationExemptMcpServers: H(i())
        .optional()
        .describe(
          "@internal Additional MCP server names exempt from the web search / connector isolation latch. Unioned with the built-in infra-server list.",
        ),
      promptSuggestions: q().optional(),
      agentProgressSummaries: q().optional(),
      forwardSubagentText: q().optional(),
      supportedDialogKinds: H(i())
        .optional()
        .describe(
          "Dialog kinds (request_user_dialog `dialog_kind` values) this consumer's onUserDialog can actually render. The CLI treats ABSENCE as 'cannot display' and fails closed: without the kind declared here, a dialog-gated flow degrades to its no-dialog behavior (for 'refusal_fallback_prompt', the classic refusal error) instead of parking a dialog the consumer may mishandle. First-attached-client-wins on multi-client sessions; later initializes do not change it.",
        ),
      perTaskStopAffordance: q()
        .optional()
        .describe(
          "Declares that this consumer renders a per-task stop control wired to the `stop_task` control request, so the user can stop an individual background task. When declared, an interrupt on an open-input (interactive stream-json) session spares running background agents/workflows (Stop only aborts the turn). Closed-input exception: a one-shot run (string prompt / -p closes stdin) still kills hold-back tasks at the held-result release regardless of the declaration \u2014 with stdin closed, a stop_task control could never be delivered, so the fail-closed kill stands. ABSENCE also fails closed: the interrupt kills background tasks, since the user would otherwise have no way to stop a runaway one. First-attached-client-wins on multi-client sessions; later initializes do not change it.",
        ),
    }).describe("Initializes the SDK session with hooks, MCP servers, and agent configuration."),
  ),
  l8 = m(() =>
    f({
      minTimeBeforeFeedbackMs: v(),
      minTimeBetweenFeedbackMs: v(),
      minTimeBetweenGlobalFeedbackMs: v(),
      minUserTurnsBeforeFeedback: v(),
      minUserTurnsBetweenFeedback: v(),
      hideThanksAfterMs: v(),
      onForModels: H(i()),
      probability: v(),
      lastSurveyShownTime: v().nullable(),
    }).describe(
      "@internal Session feedback-survey configuration for host UIs (VS Code webview, Claude Desktop) that run the survey trigger logic themselves: the same GrowthBook-driven pacing/probability values the terminal survey uses, plus the cross-surface last-shown time the host can't read. Survey responses are proxied back as tengu_feedback_survey_event log_event notifications.",
    ),
  ),
  c8 = m(() =>
    f({
      commands: H(Io()),
      agents: H(Du()),
      output_style: i(),
      available_output_styles: H(i()),
      models: H(qs()),
      unavailable_models: H(qs())
        .optional()
        .describe(
          "@internal Models the account can see but not select (disabled: true, reason folded into description \u2014 e.g. a model the org's Zero Data Retention setting excludes). Disjoint from `models`, which stays selectable-only so consumers without disabled rendering are unaffected. Populated only for allowlisted 1P hosts that render these rows (currently the VS Code extension \u2014 UNAVAILABLE_MODELS_HOST_ENTRYPOINTS); empty for every other consumer. Omitted when empty.",
        ),
      account: mP(),
      current_model: i()
        .optional()
        .describe(
          "@internal The CLI's active model at connect time. Remote Control clients (web/mobile) sync their model dropdown TO this value on connect instead of sending set_model with their own default \u2014 without it, connecting from a phone silently switches the terminal's model (CC-2659).",
        ),
      current_permission_mode: Rt()
        .optional()
        .describe(
          "@internal The CLI's active permission mode at connect time, for the same connect-time sync as current_model.",
        ),
      session_state: oe(["idle", "running", "requires_action"])
        .optional()
        .describe(
          "@internal Session state at connect time (same values as the session_state_changed message). Lets a host that attaches to an already-running CLI tell whether a turn is in progress without having seen the transition. Absent (older CLI) \u2192 unknown.",
        ),
      hooks_applied: q()
        .optional()
        .describe(
          "Whether the `hooks` this initialize carried were registered: true on a session's first initialize, and on a repeated initialize from the process that owns the CLI's stdin (its set replaces the one registered earlier); false when a repeated initialize's hooks were ignored (a client joining a remote session another client configured). Absent when the request carried no hooks, and on CLIs that predate the field \u2014 those ignored `hooks` on every repeated initialize.",
        ),
      permission_mode_from_default_fallback: q()
        .optional()
        .describe(
          '@internal True when current_permission_mode is auto because no settings source configured a mode and the gated auto default applied. IDE hosts only; drives the one-time "auto mode is now the default" disclosure.',
        ),
      auto_default_nudge: Rt()
        .optional()
        .describe(
          "@internal The user-settings defaultMode the one-shot auto-default nudge should offer to replace with auto. IDE hosts only; absent when the user isn't eligible.",
        ),
      pid: v().optional().describe("@internal CLI process PID for tmux socket isolation"),
      fast_mode_state: No().optional(),
      fast_mode_disabled_reason: xo().optional(),
      footer_indicator: Xu()
        .optional()
        .describe(
          `@internal The terminal's server-configured "\u25C6 <text>" footer pill at connect time \u2014 see SDKFooterIndicator. Absent when nothing is configured.`,
        ),
      feedback_survey_config: l8()
        .optional()
        .describe(
          "@internal Present only when the feedback-survey surface is enabled for this host (GrowthBook gate, privacy level, and org policy all allow it). Absent means the host must not show the survey.",
        ),
      analytics_disabled: q()
        .optional()
        .describe(
          "@internal True when the CLI has analytics/telemetry disabled for this session (privacy level, DISABLE_TELEMETRY / DO_NOT_TRACK from any settings tier, third-party provider, gateway) \u2014 the same verdict the system/init message carries. IDE hosts fold it into the gate for their own direct telemetry. Absent (older CLI) \u2192 unknown.",
        ),
      remote_control_auto_enable: q()
        .optional()
        .describe(
          "@internal Whether the CLI resolver says Remote Control should auto-enable at session start (explicit setting \u2192 policy default \u2192 GB rollout), so IDE hosts can mirror TUI behavior. Absent (older CLI) \u2192 treat as false.",
        ),
      remote_control_auto_on_by_default: q()
        .optional()
        .describe(
          "@internal True when remote_control_auto_enable is true because of the org/GB default rather than an explicit remoteControlAtStartup setting \u2014 mirrors replBridgeAutoOnByDefault so IDE hosts can render the same disclosure notice.",
        ),
      remote_control_available: q()
        .optional()
        .describe(
          "@internal Whether Remote Control can be offered at all in this deployment (isRemoteControlDeploymentAvailable: not hard-disabled by managed settings, not nested in a remote environment, first-party provider). Only host-lifetime-stable conditions; transient ones (auth state, the GrowthBook rollout gate, the async org-compliance verdict) are deliberately excluded since hosts latch this from one initialize response \u2014 see the helper docstring. Lets IDE hosts hide their Remote Control affordance where it can never work. Absent (older CLI) \u2192 treat as available.",
        ),
      ide_rc_auto_enable_gate: q()
        .optional()
        .describe(
          "@internal IDE-side rollout kill-switch for RC auto-enable (tengu_ide_rc_auto_enable), independent of remote_control_auto_enable. Carried on the init response (not experimentGates) because the host reads it at init time, before the first-prompt-triggered gate refresh. Absent (older CLI) \u2192 treat as false.",
        ),
    }).describe("Response from session initialization with available commands, models, and account info."),
  ),
  Ju = m(() =>
    f({
      subtype: N("interrupt"),
      reason: i()
        .optional()
        .describe(
          "@internal Why the turn was interrupted, forwarded to the turn's AbortSignal.reason. Tool implementations branch on it to distinguish a user-driven cancel (which suppresses error output) from other aborts. Known values: `interrupt` (user Esc/Ctrl+C), `user-cancel`, `remote-cancel`, `consumer-error`, `workflow-abort`, `stalled`, `recovery-timeout`. Open set \u2014 consumers must treat unknown values as a generic abort.",
        ),
      cancel_queued: q()
        .optional()
        .describe(
          "When true, the interrupt also cancels every uuid-stamped main-thread command still in the queue or already dequeued for the imminent turn but not yet reachable by the abort (the first-command prewait window) \u2014 the same set the response would otherwise list under `still_queued`. Each is closed with a terminal 'cancelled' lifecycle and listed on the response's `cancelled` field. `still_queued` is then empty, except that a client driving a hosted session lists there what it can no longer recall (a send already in flight to that session, or the first prompt the session was created with) and, when the session's own sweep then cancels one of those or a send it had already delivered, follows up with a command_lifecycle 'cancelled' frame for it. (The isFoldInFlight guard cancel_async_message uses does not apply here: this request also aborts the running turn, so a fold-in-flight uuid is never delivered and is swept with the rest. A fold-in-flight uuid's queued_command attachment may already appear in the aborted turn's transcript if the abort landed after the fold's attachment yield \u2014 pre-existing leave-queued semantics; it never runs as its own turn.) Uuid-less commands (task notifications) still in the queue are also dequeued but cannot be listed; a uuid-less command already in the prewait window is unreachable by either leg and still runs. When false or absent, queued commands survive the interrupt and are listed under `still_queued` \u2014 the interrupt_receipt_v1 contract is unchanged. A Stop-means-stop-everything client (a remote UI's Stop button) sets this true so one round-trip halts the session; a wrapper that wants per-uuid control leaves it false and follows up with cancel_async_message. Advertised by the `interrupt_cancel_queued_v1` capability on system/init; older CLIs ignore the field and behave as if false.",
        ),
    }).describe("Interrupts the currently running conversation turn."),
  ),
  u8 = m(() =>
    f({
      still_queued: H(i()).describe(
        'Uuids of async user messages that survive this interrupt: commands still in the queue, plus any batch already dequeued for the imminent turn but not yet reachable by the abort. These WILL run unless cancelled first (or unless the request set cancel_queued:true, in which case every uuid-stamped survivor this process holds is removed, emitted a terminal `cancelled` synchronously, and listed under `cancelled` instead \u2014 leaving here only what a client driving a hosted session can no longer recall: a send already in flight to that session, or the first prompt the session was created with; a send that client still holds on its own machine behind a send gate (today: waiting for the session to take the initial upload from that machine) has not gone out, so it is withdrawn and listed under `cancelled` like a queued one, and cancel_async_message can withdraw it too, while a plain interrupt leaves it held and lists it here). Cancellation granularity: uuids still in the queue are individually cancellable via cancel_async_message; once a batch is dequeued and coalesced into one turn, cancelling a NON-representative member uuid is a no-op (its content still runs), while cancelling the batch-representative uuid drops the WHOLE coalesced batch \u2014 in both cases the cancel response reports cancelled:false because the message was no longer in the queue. Coverage caveats: only uuid-STAMPED messages appear (a message enqueued without a uuid still runs but is never listed, so [] does not mean "nothing will run"); only main-thread messages are listed (subagent-addressed messages are out of scope); and the list may include internally-enqueued uuids the client never sent (cron triggers, auto-resume continuations) \u2014 ignore unknown uuids rather than treating them as an error. Ordering: on a clean interrupt this receipt is written before the interrupted turn result; a turn that crashes during interrupt handling emits its error result on a direct-write path that may precede the receipt. Snapshot is taken synchronously with abort processing \u2014 probing the queue after the interrupted result instead always loses the race against the drain loop, which starts the next queued turn immediately.',
      ),
      cancelled: H(i())
        .optional()
        .describe(
          "Present only when the request set cancel_queued:true \u2014 uuids of main-thread commands cancelled by this interrupt: every survivor that would otherwise have appeared under `still_queued`, including any uuid that was mid-fold at the interrupt instant (this request also aborts, so the fold never delivers it). Each listed uuid has been removed (queue-resident) or marked cancel-pending (the first-command prewait window, closed by the drain loop's backstop) and emits a terminal 'cancelled' lifecycle synchronously at the first such interrupt (a repeat interrupt over the same parked batch re-lists the uuid idempotently without re-emitting); none will run. Same coverage caveats as `still_queued` (uuid-stamped main-thread only; internally-enqueued uuids may appear). Advertised by the `interrupt_cancel_queued_v1` capability.",
        ),
    }).describe(
      "Result of an interrupt operation. Advertised by the interrupt_receipt_v1 capability on system/init; older CLIs send an empty success response with no still_queued field.",
    ),
  ),
  Zu = m(() =>
    f({
      subtype: N("can_use_tool"),
      tool_name: i(),
      input: De(i(), _e()),
      permission_suggestions: H(Do()).optional(),
      blocked_path: i().optional(),
      decision_reason: i()
        .optional()
        .describe(
          `Human-readable reason the ask escalated, for the consent line of the host's dialog. For decision_reason_type "subcommandResults" (compound bash), this is the NESTED safety check's warning text \u2014 the wrapper itself has no text \u2014 preferring a check that requires manual approval (classifier_approvable false); treat it with the same display/policy care as a "safetyCheck" reason. May carry ANSI escapes; sanitize before rendering.`,
        ),
      decision_reason_type: oe(cAn)
        .optional()
        .describe(
          `Structured discriminator for why auto-mode escalated. Lets SDK hosts make policy (e.g. auto-deny safetyCheck) without parsing decision_reason text. For compound bash commands this is "subcommandResults" even when a safetyCheck is nested inside \u2014 check classifier_approvable for that case, and see decision_reason: for this variant it carries the nested safety check's warning text.`,
        ),
      classifier_approvable: q()
        .optional()
        .describe(
          "Set when a safetyCheck is present anywhere in the decision reason (including nested inside subcommandResults for compound bash). false = at least one safety check requires manual approval (e.g. Windows path bypass, dangerous rm); true = all safety checks MAY be classifier-approved (e.g. sensitive-file paths). Absent when no safetyCheck is involved.",
        ),
      suppress_always_allow_rule: q()
        .optional()
        .describe(
          `True when the dialog must not offer the persistent "don't ask again" row for this ask: accepting it would write a whole-tool allow rule broader than the ask's own verb (PermissionAskDecision.suppressAlwaysAllowRule). Hosts rendering approve options should omit any persistent-rule affordance when set.`,
        ),
      default_to_no: q()
        .optional()
        .describe(
          "True when the ask must not be approvable by a single stray keystroke (PermissionAskDecision.defaultToNo): a terminal-style prompt opens on its decline option and takes no digit shortcut. Hosts rendering approve options should not pre-select approve when set.",
        ),
      matched_ask_rule: f({ source: i(), tool_name: i(), rule_content: i().optional() })
        .optional()
        .describe(
          "Set when a user-configured ask RULE (permissions.ask) forced this prompt but the ask carries the tool's own decision_reason \u2014 the ask-rule substitution keeps the richer tool-minted ask, so the rule rides here instead of decision_reason_type 'rule'. Hosts making policy on decision_reason_type (e.g. auto-deny safetyCheck) or running host-side auto-approval should treat asks carrying this field as rule-forced: the user's stated intent is a human prompt. Values are producer-authored but render-unsafe like decision_reason; sanitize before display.",
        ),
      title: i().optional(),
      display_name: i().optional(),
      tool_use_id: i(),
      agent_id: i().optional(),
      description: i().optional(),
      requires_user_interaction: q()
        .optional()
        .describe(
          "True when one-tap Approve/Deny must not be offered: the tool's approval card IS the user-interaction surface (Tool.requiresUserInteraction() \u2014 the user responds on the card itself), OR the pending ask is localDisplayOnly (its consent disclosure cannot ride this wire and only the local dialog renders it). Either way the user has to open the session to answer.",
        ),
    }).describe("Requests permission to use a tool with the given input."),
  ),
  ed = m(() =>
    f({
      subtype: N("set_permission_mode"),
      mode: Rt(),
      ultraplan: q().optional().describe("@internal CCR ultraplan session marker."),
    }).describe("Sets the permission mode for tool execution handling."),
  ),
  d8 = m(() =>
    f({
      mode: Rt()
        .optional()
        .describe(
          "The permission mode now in effect. Headless CLIs echo it; other hosts may acknowledge with an empty object.",
        ),
    }).describe("Success payload answering set_permission_mode."),
  ),
  td = m(() =>
    f({
      subtype: N("set_model"),
      model: i()
        .nullable()
        .optional()
        .describe("Model to switch to. Omitted, null, or 'default' resets to the session default model."),
      system_prompt: i()
        .min(1)
        .optional()
        .describe(
          "@internal Replaces the custom system prompt (the --system-prompt / initialize systemPrompt slot) from the next turn on. Applied only when the model request is accepted; must be non-empty (there is no revert-to-built-in form); re-send the current model for a prompt-only update. The CLAUDE_CODE_SYSTEM_PROMPT_GB_FEATURE per-turn read, where configured, still wins. Transports that do not implement it, and older builds, ack success without applying it.",
        ),
    }).describe("Sets the model to use for subsequent conversation turns."),
  ),
  nd = m(() =>
    f({
      subtype: N("set_max_thinking_tokens"),
      max_thinking_tokens: v().int().nullable().optional(),
      thinking_display: oe(["summarized", "omitted"]).nullable().optional(),
    }).describe(
      "Sets the maximum number of thinking tokens for extended thinking. When max_thinking_tokens is omitted or null, thinking resets to the session default: any mid-session budget override is cleared (back to the spawn-time budget, if one was set), and thinking stays off for sessions that have it disabled. thinking_display optionally sets the thinking display mode for the rest of the session: a value replaces the session display mode, null clears that override so Claude Code's default display handling applies again, and when omitted the display mode from session start (--thinking-display) is kept.",
    ),
  ),
  rd = m(() =>
    f({ subtype: N("rename_session"), title: i() }).describe("Sets the user-facing title for the current session."),
  ),
  od = m(() =>
    f({ subtype: N("set_color"), color: i() }).describe(
      'Sets the session accent color. Accepts an agent color name or "default" to reset.',
    ),
  ),
  id = m(() => f({ subtype: N("mcp_status") }).describe("Requests the current status of all MCP server connections.")),
  p8 = m(() =>
    f({ mcpServers: H(Mu()) }).describe("Response containing the current status of all MCP server connections."),
  ),
  sd = m(() =>
    f({ subtype: N("file_suggestions"), query: i() }).describe(
      "Requests at-mention file autocomplete suggestions for a partial path prefix. Returns the same fuzzy-matched results the TUI shows.",
    ),
  ),
  f8 = m(() =>
    f({ suggestions: H(f({ path: i(), score: v().optional() })) }).describe(
      "Response containing fuzzy-ranked file path suggestions (capped at the same limit as the TUI typeahead).",
    ),
  ),
  ad = m(() =>
    f({ subtype: N("get_context_usage") }).describe(
      "Requests a breakdown of current context window usage by category.",
    ),
  ),
  ld = m(() =>
    f({ subtype: N("get_session_cost") }).describe(
      "Requests the formatted session cost summary (the same text /usage prints in non-interactive mode). Used by the thin-client /usage dialog to show the remote container cost instead of the local $0.00.",
    ),
  ),
  _8 = m(() => f({ text: i() }).describe("Formatted session cost text, ANSI-stripped.")),
  cd = m(() =>
    f({ subtype: N("list_models") }).describe(
      "Requests the worker's selectable model catalog. Fulfills the caps.modelCatalog capability: in a remote thin-client session the worker's provider, settings cascade, and enforcement policy decide which models the session can run, so the thin client must ask rather than read its own getModelOptions().",
    ),
  ),
  m8 = m(() =>
    f({ models: H(qs()) }).describe(
      "The worker's model options serialized via toModelInfos() \u2014 the same ModelInfo shape the initialize response carries. Includes disabled rows (visible but not selectable) so the thin-client picker renders them greyed-out like the local one.",
    ),
  ),
  dd = m(() =>
    f({ subtype: N("get_usage") }).describe(
      "Requests the structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization when available. Experimental \u2014 the response shape may change.",
    ),
  ),
  Lo = m(() =>
    f({
      utilization: v().nullable().describe("Percentage of the window used, 0-100."),
      resets_at: i().nullable().describe("ISO 8601 timestamp when the window resets."),
    }),
  ),
  Xs = m(() =>
    f({ name: i(), pct: v().describe("Share of the weighted local usage attributed to this item, 0-100.") }),
  ),
  wP = m(() =>
    f({
      request_count: v().describe("API requests found in local transcripts for this window."),
      session_count: v().describe("Distinct sessions observed in this window."),
      behaviors: H(
        f({
          key: oe(["cache_miss", "long_context", "subagent_heavy", "high_parallel", "cron"]),
          pct: v().describe("Share of the weighted local usage attributed to this behavior, 0-100."),
          count: v().describe("Requests in this window exhibiting the behavior."),
        }),
      ).describe(
        "Behavioral characteristics of local usage. Categories overlap \u2014 this is not a partition, so percentages do not sum to 100.",
      ),
      agents: H(Xs()),
      skills: H(Xs()),
      plugins: H(Xs()),
      mcp_servers: H(Xs()),
    }),
  ),
  g8 = m(() =>
    f({
      session: f({
        total_cost_usd: v(),
        total_api_duration_ms: v().int(),
        total_duration_ms: v().int(),
        total_lines_added: v().int(),
        total_lines_removed: v().int(),
        model_usage: De(i(), Ys()),
      }).describe("Cost and usage accumulated by the current session."),
      subscription_type: i()
        .nullable()
        .describe(
          "Claude.ai subscription type ('pro', 'max', 'team', 'enterprise') or null for API key / 3P provider sessions.",
        ),
      rate_limits_available: q().describe(
        "False when plan rate limits do not apply (API key, Bedrock, Vertex, or missing profile scope) \u2014 rate_limits will be null.",
      ),
      rate_limits: f({
        five_hour: Lo().nullable().optional(),
        seven_day: Lo().nullable().optional(),
        seven_day_oauth_apps: Lo().nullable().optional(),
        seven_day_opus: Lo().nullable().optional(),
        seven_day_sonnet: Lo().nullable().optional(),
        model_scoped: H(
          f({
            display_name: i().describe("Server-supplied label for the model bucket (e.g. 'Fable')."),
            utilization: v().nullable(),
            resets_at: i().nullable(),
          }),
        )
          .optional()
          .describe(
            "Per-model weekly windows from the server limits[] array, filtered by the overage-included-models allowlist. Additive \u2014 present only when the server emits them.",
          ),
        extra_usage: f({
          is_enabled: q(),
          monthly_limit: v().nullable(),
          used_credits: v().nullable(),
          utilization: v().nullable(),
          currency: i().nullable().optional(),
        })
          .nullable()
          .optional(),
      })
        .nullable()
        .describe("Plan rate-limit utilization windows from the claude.ai usage endpoint, or null when unavailable."),
      behaviors: f({ day: wP().describe("Last 24 hours."), week: wP().describe("Last 7 days.") })
        .nullable()
        .describe(
          "What's contributing to limits usage, from a scan of local transcripts on this machine (the same data the /usage dialog renders): behavioral characteristics plus per-skill/agent/plugin/MCP-server attribution. Approximate, excludes other devices and claude.ai. Null for non-claude.ai-subscriber sessions (mirrors the dialog) or when the scan fails.",
        ),
    }).describe(
      "Structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization. Experimental \u2014 the shape may change.",
    ),
  ),
  pd = m(() =>
    f({ subtype: N("get_binary_version") }).describe(
      "Requests the responder's CLI binary version. Used by /version in --remote mode so the thin client can show both its own and the remote container's version.",
    ),
  ),
  h8 = m(() => f({ version: i(), buildTime: i().optional() })),
  E8 = m(() => f({ name: i(), tokens: v().int(), color: i(), isDeferred: q().optional() })),
  S8 = m(() =>
    f({ color: i(), isFilled: q(), categoryName: i(), tokens: v().int(), percentage: v(), squareFullness: v() }),
  ),
  T8 = m(() =>
    f({
      categories: H(E8()),
      totalTokens: v().int(),
      maxTokens: v().int(),
      rawMaxTokens: v().int(),
      percentage: v(),
      gridRows: H(H(S8())),
      model: i(),
      memoryFiles: H(f({ path: i(), type: i(), tokens: v().int() })),
      mcpTools: H(f({ name: i(), serverName: i(), tokens: v().int(), isLoaded: q().optional() })),
      deferredBuiltinTools: H(f({ name: i(), tokens: v().int(), isLoaded: q() })).optional(),
      systemTools: H(f({ name: i(), tokens: v().int() })).optional(),
      systemPromptSections: H(f({ name: i(), tokens: v().int() })).optional(),
      agents: H(f({ agentType: i(), source: i(), tokens: v().int() })),
      slashCommands: f({ totalCommands: v().int(), includedCommands: v().int(), tokens: v().int() }).optional(),
      skills: f({
        totalSkills: v().int(),
        includedSkills: v().int(),
        tokens: v().int(),
        skillFrontmatter: H(f({ name: i(), source: i(), tokens: v().int() })),
      }).optional(),
      autoCompactThreshold: v().int().optional(),
      isAutoCompactEnabled: q(),
      messageBreakdown: f({
        toolCallTokens: v().int(),
        toolResultTokens: v().int(),
        attachmentTokens: v().int(),
        assistantMessageTokens: v().int(),
        userMessageTokens: v().int(),
        redirectedContextTokens: v().int(),
        unattributedTokens: v().int(),
        toolCallsByType: H(f({ name: i(), callTokens: v().int(), resultTokens: v().int() })),
        attachmentsByType: H(f({ name: i(), tokens: v().int() })),
      }).optional(),
      apiUsage: f({
        input_tokens: v().int(),
        output_tokens: v().int(),
        cache_creation_input_tokens: v().int(),
        cache_read_input_tokens: v().int(),
      }).nullable(),
    }).describe("Breakdown of current context window usage by category (system prompt, tools, messages, etc.)."),
  ),
  ibt = m(() =>
    f({
      subtype: N("mcp_call"),
      tool: i().describe(
        "Fully-qualified MCP tool name, e.g. mcp__server__tool_name. Plugin-hosted servers are ordinary MCP servers here \u2014 e.g. mcp__plugin_documents_docs__doc_export (server names are normalized: non-[a-zA-Z0-9_-] becomes _).",
      ),
      arguments: De(i(), _e())
        .optional()
        .describe(
          `Tool arguments. When input_files/output_files are declared, any string VALUE that exactly equals "{{in:NAME}}" or "{{out:NAME}}" (whole string, not a substring) is replaced with the worker-chosen absolute path of that named staged file before the call; a token naming no declared file fails the request with staging error_code=tool_error, and every declared output's "{{out:NAME}}" token must appear in arguments (the substituted path is the only way the tool learns where to write, so an unreferenced output fails the request before the tool runs). With no files declared \u2014 including expires_at/timeout_ms-only staged calls \u2014 passed through unchanged.`,
        ),
      expires_at: i()
        .optional()
        .describe(
          "RFC3339 deadline, REQUIRED when output_files are declared (a stale buffered drain must not overwrite rows written since). Sending expires_at routes the call through the staging engine, same as timeout_ms \u2014 the response gains a staging result. UNDELIVERED requests buffer durably and drain after reattach; a drain past this instant is dropped with staging error_code=expired instead of executing stale. Once delivered to a live worker the request is acked immediately and never redelivered \u2014 a worker killed mid-run surfaces as a missing response (apply your own deadline), not a later drain. An unparseable value is treated as already expired (fail closed).",
        ),
      timeout_ms: v()
        .optional()
        .describe(
          "Tool-execution timeout (staging and collection have their own transport timeouts). Clamped to [1000, 600000]; default 120000. Sending timeout_ms routes the call through the staging engine \u2014 so it is always enforced when present and the response carries a staging result; omit it for a plain call. Staged calls are POSIX-worker-only: on a Windows worker any staged-field call fails with a typed staging refusal.",
        ),
      input_files: H(
        f({
          name: i()
            .regex(/^[A-Za-z0-9_-]{1,64}$/)
            .describe('Handle referenced from arguments as "{{in:NAME}}". Unique within the request.'),
          lane_path: i().describe(
            "Synced-file lane row to stage, e.g. /working/.cowork/originals/a.docx. A missing row fails with staging error_code=input_missing; the etag actually staged is echoed back in staging.inputs_used.",
          ),
        }),
      )
        .max(64)
        .optional()
        .describe(
          "Declaring input_files or output_files makes this a STAGED call: rows are fetched from the synced-file lane into a private per-request temp dir the WORKER chooses (random, per-UID \u2014 the caller never sees or computes paths; it references files via tokens in arguments), the tool runs, and declared outputs are written back as lane rows (durable-at-ack PUT). The response then carries a `staging` result the caller switches on.",
        ),
      output_files: H(
        f({
          name: i()
            .regex(/^[A-Za-z0-9_-]{1,64}$/)
            .describe(
              'Handle referenced from arguments as "{{out:NAME}}" \u2014 the tool is told (via the substituted path) where to write; the worker collects from exactly that path. Unique within the request.',
            ),
          lane_path: i().describe(
            "Synced-file lane row to write, e.g. /working/report.cd. Unique within the request (two outputs on one row would self-conflict under CAS). Outputs over the 25 MiB lane cap fail with staging error_code=output_too_large.",
          ),
          if_match: i()
            .min(1)
            .optional()
            .describe(
              "Opaque lane etag the output row must still carry for the write to land (CAS). Omitted = unconditional last-writer-wins (an empty string is rejected, not treated as unconditional). A row that moved since fails that output with staging error_code=output_conflict and the requested bytes are not written. Redelivery of a completed CAS write re-runs and conflicts with its own prior write \u2014 treat output_conflict on a retry as possible-prior-success and reconcile by etag.",
            ),
        }),
      )
        .max(64)
        .optional(),
    }).describe(
      "Invokes an MCP tool via the subprocess MCP client without a model turn. No permission check (control channel is trusted, same as other " +
        'subtypes). SDK-type MCP servers (config.type === "sdk") are rejected \u2014 ' +
        "they are caller-provided, so the caller can invoke them directly without the subprocess round-trip. Result content passes through the same processing as model-turn MCP calls. Session expiry is not retried automatically; callers can mcp_reconnect and retry. UrlElicitationRequired (-32042) tries Elicitation hooks; if no hook " +
        "resolves, the call errors with the URL in the message \u2014 open it " +
        "out-of-band, then retry mcp_call. " +
        'STAGED calls (input_files/output_files declared) additionally stage lane rows in/out around the call \u2014 see the input_files describe. Staged failures come back as a success-subtype response whose staging field carries a typed error_code; subtype:error is emitted only when the call could not be attempted at all (server not connected, kill switch, dispatch failure) and means nothing ran. A target server that is not yet connected is brought up on demand: dispatch runs the deferred plugin/MCP startup resolution (the work a first model turn would have done) and waits up to 30s \u2014 shortened by expires_at when that is sooner \u2014 for the server to connect before answering "MCP server not connected", so a dispatch that races plugin startup (e.g. after an idle-wake reattach) succeeds instead of failing until a turn runs. Standard RPC semantics: a redelivered request_id supersedes the in-flight run (it is aborted and its response suppressed \u2014 exactly one response per request_id); conversion is idempotent, so re-running is safe. Cancellable via control_cancel_request.',
    ),
  ),
  A8 = m(() =>
    f({
      content: _e(),
      structuredContent: De(i(), _e()).optional(),
      _meta: De(i(), _e()).optional(),
      staging: dt([
        f({
          ok: N(!0),
          outputs: H(
            f({
              lane_path: i(),
              etag: i().describe("Opaque lane etag returned by the durable-at-ack PUT."),
              bytes: v().int(),
            }),
          ),
          inputs_used: H(f({ lane_path: i(), etag: i() })).describe("Lane etag each staged input actually carried."),
        }),
        f({
          ok: N(!1),
          error_code: oe(["expired", "input_missing", "output_too_large", "output_conflict", "timeout", "tool_error"]),
          detail: i().describe(
            "Plain-text detail for the requesting client. May carry user-document content (tool output, lane paths) \u2014 surface it to the user where helpful, but do not log it verbatim or feed it to analytics.",
          ),
          retryable: q()
            .optional()
            .describe(
              "Present when the failure class is known (lane transport verdict, CAS rejection): true = safe to re-drive with the same request_id, false = deterministic. Absent = unknown; treat as non-retryable and switch on error_code.",
            ),
        }),
      ])
        .optional()
        .describe(
          "Present exactly when the request used any staged-call field (input_files, output_files, expires_at, timeout_ms) \u2014 such calls run through the staging engine even with no files, so expires_at is always honored. The error_code set is a stable cross-repo contract \u2014 extend it, never rename or repurpose members. A failure makes no guarantee about partial effects: earlier outputs may already have landed; retry with the same request_id is safe for outputs without if_match (unconditional PUTs re-land the same bytes), while if_match outputs surface output_conflict against their own prior write \u2014 reconcile by etag. On staged failures the tool may never have run, so content/structuredContent may be absent.",
        ),
    }).describe(
      "MCP tool result \u2014 the content array, structuredContent, and _meta " +
        "from CallToolResult. Content passes through the same processing as model-turn MCP calls (large results may be truncated or redirected to a file). Caller interprets. Staged calls additionally carry a `staging` result.",
    ),
  ),
  fd = m(() =>
    f({ subtype: N("rewind_files"), user_message_id: i(), dry_run: q().optional() }).describe(
      "Rewinds file changes made since a specific user message.",
    ),
  ),
  b8 = m(() =>
    f({
      canRewind: q(),
      error: i().optional(),
      filesChanged: H(i()).optional(),
      insertions: v().int().optional(),
      deletions: v().int().optional(),
      skippedLinks: v().optional().describe(Iu),
    }).describe("Result of a rewindFiles operation."),
  ),
  _d = m(() =>
    f({ subtype: N("cancel_async_message"), message_uuid: i() }).describe(
      "Drops a pending async user message from the command queue by uuid. No-op if already dequeued for execution.",
    ),
  ),
  y8 = m(() =>
    f({ cancelled: q() }).describe(
      "Result of a cancel_async_message operation. cancelled=false means the message was not in the queue (already dequeued or never enqueued).",
    ),
  ),
  md = m(() =>
    f({
      subtype: N("read_file"),
      path: i(),
      max_bytes: v().optional(),
      encoding: oe(["utf-8", "base64"])
        .optional()
        .describe(
          "How to encode the bytes in `contents`. Defaults to utf-8 (lossy for binary); pass 'base64' to read images.",
        ),
    }).describe(
      "Read a file from the session filesystem for the remote sidebar viewer. Path is resolved against cwd and gated by the same read-permission rules as the Read tool.",
    ),
  ),
  R8 = m(() =>
    f({
      contents: i(),
      absPath: i(),
      truncated: q().optional(),
      encoding: N("base64")
        .optional()
        .describe(
          "Set when the request asked for base64. Absent means utf-8 \u2014 including when an older CLI ignored the request's encoding field.",
        ),
    }).describe("File contents for the remote sidebar viewer."),
  ),
  C8 = m(() =>
    f({ oldStart: v().int(), oldLines: v().int(), newStart: v().int(), newLines: v().int(), lines: H(i()) }).describe(
      "@internal One unified-diff hunk of the get_workspace_diff response.",
    ),
  ),
  gd = m(() =>
    f({ subtype: N("get_workspace_diff") }).describe(
      "@internal Requests the workspace git diff for the thin-client /diff dialog. The worker resolves one base ref for both stats and hunks (working tree vs HEAD, falling back to branch-vs-default-merge-base when the tree is clean) and applies the standard caps (5s git timeout, 50 files, 1MB/file).",
    ),
  ),
  v8 = m(() =>
    f({
      diff: f({
        stats: f({ filesCount: v().int(), linesAdded: v().int(), linesRemoved: v().int() }),
        perFileStats: H(f({ path: i(), added: v().int(), removed: v().int(), isBinary: q(), isUntracked: q() })),
        hunks: H(f({ path: i(), hunks: H(C8()) })),
        skippedLarge: H(i()).describe(
          "Paths whose diff text exceeded the per-file or aggregate size cap, so they have stats but no hunks.",
        ),
        restricted: H(i()).describe(
          "Paths whose hunk content was withheld by the diff surface's content-provenance gate: read-permission rules (same gate as read_file) plus this surface's stricter file-identity checks (symlink and hardlinked worktree files are refused here even where read_file serves them). Stats remain visible.",
        ),
        source: dt([f({ kind: N("working-tree") }), f({ kind: N("branch"), baseBranch: i(), baseRef: i() })]),
      }).nullable(),
    }).describe(
      "@internal Workspace git diff for the thin-client /diff dialog. diff is null when the workspace is not a git repo or is in a transient git state (merge/rebase/cherry-pick). Paths in skippedLarge carry no hunks entry at all \u2014 membership alone marks them as too large. An entirely empty hunks array with non-empty perFileStats is not by itself a failure signal: it is the normal shape when all changes are untracked (stats only \u2014 git diff emits no hunks for untracked files) or every file was withheld, and can also occur when the hunks fetch transiently failed and only stats are available.",
    ),
  ),
  hd = m(() =>
    f({ subtype: N("get_plan") }).describe(
      "@internal Read the session's current plan-mode plan. Unlike read_file, the caller does not need to know the plan file's path \u2014 the worker resolves its own plan slug. Never creates a plan slug or file.",
    ),
  ),
  O8 = m(() =>
    f({
      exists: q(),
      content: i().optional().describe("Plan markdown. Present iff exists is true."),
      path: i()
        .optional()
        .describe(
          "Absolute plan-file path on the session filesystem. Present when exists is true, except on connections that persist frames server-side (the local bridge-worker lane omits it; the plan content still ships).",
        ),
    }).describe("@internal The current plan, or exists:false when none has been written."),
  ),
  Ed = m(() =>
    f({ subtype: N("seed_read_state"), path: i(), mtime: v() }).describe(
      "Seeds the readFileState cache with a path+mtime entry. Use when a prior Read was removed from context so Edit validation would fail despite the client having observed the Read. The mtime lets the CLI detect if the file changed since the seeded Read \u2014 same staleness check as the normal path.",
    ),
  ),
  Sd = m(() =>
    f({
      subtype: N("hook_callback"),
      callback_id: i(),
      input: v3t(),
      tool_use_id: i().optional(),
      issued_at: v()
        .int()
        .nonnegative()
        .optional()
        .describe(
          "@internal Epoch milliseconds on the sender's clock when this request was issued. Lets a device client recognize a stale or replayed delivery (older than its current attach, or past issued_at + deadline_ms) and leave it unanswered. Optional and additive on the public hook_callback wire; hosts that do not know it ignore it.",
        ),
      deadline_ms: v()
        .int()
        .positive()
        .optional()
        .describe(
          "@internal How long after issued_at, in milliseconds, the sender waits before proceeding without an answer. Lets a device client skip or stop work whose answer can no longer be heard. Absent = no deadline known. Optional and additive on the public hook_callback wire.",
        ),
    }).describe("Delivers a hook callback with its input data."),
  ),
  LP = "[A-Za-z0-9][A-Za-z0-9._-]{0,63}",
  UP = "[A-Za-z]{1,64}",
  xt = new RegExp(`^${LP}$`),
  zP = new RegExp(`^${UP}$`),
  Qu = new RegExp(`^${LP}/${UP}/\\d{1,4}$`),
  Ad = /^[0-9a-f]{64}$/,
  obn = /^[A-Za-z0-9+/]*={0,2}$/,
  k8 = /^[^\p{Cc}\p{Cf}\u2028\u2029]+$/u,
  PP = 4096,
  w8 = m(() =>
    f({
      id: i()
        .regex(Qu)
        .describe(
          `@internal "<instance_id>/<event>/<index>", index being the entry's position within that event's forwarded list at capture. The schema checks the shape only; matching the instance_id prefix to the request is the receiver's job. Echoed back verbatim as hook_callback.callback_id; never reused for a different hook within one instance.`,
        ),
      event: i()
        .regex(zP)
        .describe(
          "@internal Hook event name. A plain string rather than the HookEvent enum so an older worker tolerates an event it does not know: it ignores that entry instead of rejecting the whole registration.",
        ),
      matcher: i()
        .max(512)
        .optional()
        .describe(
          "@internal The settings matcher, verbatim, compiled by the worker exactly like a settings matcher; absent = all.",
        ),
      kind: oe(["command", "http"]).describe(
        "@internal Hook kind on the device. prompt, agent and mcp_tool hooks are never forwarded; a new kind is a deliberate schema change.",
      ),
      timeout_s: v()
        .positive()
        .max(600)
        .optional()
        .describe(
          "@internal The hook's own timeout in seconds, when configured; the worker derives its deadline from it.",
        ),
      source: oe(["user", "local", "flag"]).describe(
        "@internal Settings source on the device: user settings, the checkout's settings.local.json, or a --settings file.",
      ),
      has_condition: q()
        .optional()
        .describe(
          "@internal The entry carries an if-condition, evaluated on the device; the condition text never leaves it.",
        ),
      target_pinned: q()
        .optional()
        .describe(
          "@internal The device digested the hook's script at start-up and re-verifies those bytes before each run; the digest itself is not sent.",
        ),
      author_opt_in: q()
        .optional()
        .describe(
          "@internal Forwarded at the hook author's explicit request (cloud: 'device' in its settings entry) although its command is not pinned to a script the session cannot change.",
        ),
    }).describe(
      "@internal One forwarded device hook: identity and routing data only \u2014 never a command line, URL, path, header or condition text.",
    ),
  ),
  P8 = m(() =>
    f({
      template: i().regex(xt).describe("@internal Built-in template id, looked up in the worker's own table."),
      digest: i()
        .regex(Ad)
        .describe(
          "@internal Lowercase hex sha256 of the template script version enabled on the device; the worker installs the template only when this equals its table's digest.",
        ),
      event: i().regex(zP).describe("@internal Hook event name, as for inventory entries."),
      matcher: i()
        .max(512)
        .optional()
        .describe(
          "@internal The settings matcher, verbatim, compiled by the worker exactly like a settings matcher; absent = all.",
        ),
      timeout_s: v().positive().max(600).optional().describe("@internal Timeout in seconds, when configured."),
    }).describe(
      "@internal A vetted template the device has enabled, to run IN the container. Carries nothing executable: the worker derives the file and the command line from its own table.",
    ),
  ),
  M8 = m(() =>
    f({
      after_edit: v()
        .int()
        .nonnegative()
        .optional()
        .describe(
          "@internal PostToolUse / PostToolUseFailure hooks whose matcher can only match file-writing tools. The worker never forwards after-edit events for those tools (the device copy of the file is stale or absent), so such a hook could never fire and is not sent.",
        ),
      kind_unsupported: v()
        .int()
        .nonnegative()
        .optional()
        .describe("@internal Hooks of a kind that is never forwarded: prompt, agent, mcp_tool."),
      plugin: v()
        .int()
        .nonnegative()
        .optional()
        .describe("@internal Hooks contributed by plugins, which this version does not forward."),
      managed: v()
        .int()
        .nonnegative()
        .optional()
        .describe("@internal Hooks from managed (policy) settings, which this version does not forward."),
      other: v()
        .int()
        .nonnegative()
        .optional()
        .describe(
          "@internal Every other hook not sent: on an event that is not forwarded, a duplicate of one already listed, or beyond a cap.",
        ),
    }).describe(
      "@internal Counts of this device's hooks that were not forwarded, for the session line. Each such hook is counted in exactly one field, the first that applies in this order: plugin or managed (by its source); other, when its event is not forwarded at all; kind_unsupported; after_edit; other again for anything else, such as a duplicate or an entry beyond a cap. Absent fields mean zero.",
    ),
  ),
  sbt = m(() =>
    f({
      subtype: N("register_device_hooks"),
      instance_id: i()
        .regex(xt)
        .describe(
          "@internal Minted once per device client process and stable across its reconnects and re-registrations; the owner key in the worker's store and the first segment of every hook id.",
        ),
      display_name: i()
        .min(1)
        .max(64)
        .regex(k8)
        .optional()
        .describe(
          "@internal What the session line calls the device: no control, format or line-separator characters (receivers still sanitize before display); the worker falls back to instance_id when absent.",
        ),
      lease_s: v()
        .int()
        .min(60)
        .max(3600)
        .optional()
        .describe(
          "@internal Requested lease in seconds (default 600); the worker caps it and returns the effective expiry. Re-send the request to renew; a repeat from the same instance replaces its entries.",
        ),
      worker_epoch: v()
        .int()
        .min(1)
        .optional()
        .describe(
          "@internal The worker life the device believes it addresses; a mismatch is answered with a stale_worker_epoch error.",
        ),
      hooks: H(w8())
        .max(128)
        .describe(
          "@internal The forwarded inventory. An empty array together with an empty templates array unregisters this instance; both keys are required so an omission is a parse error, not an unregister.",
        ),
      templates: H(P8()).max(8).describe("@internal Vetted templates enabled on the device, to run in the container."),
      held: M8()
        .optional()
        .describe(
          "@internal How many of its hooks the device did not forward and why; informational, absent = none reported.",
        ),
    }).describe(
      "@internal Registers this device's hooks with the worker \u2014 unrelated to device registration or bind. Sent by a claude --cloud device client after it attaches to a cloud session (never as an initial event of the create): names, by opaque id, which of the user's own hooks the worker should ask this device to run over hook_callback, and which vetted templates to run in the container. The worker rejects requests over 64 KiB with invalid_registration. Error replies use the standard error response with a message that starts with a code token and a colon: hook_forwarding_disabled (off for this session; not retryable, nothing stored), hook_forwarding_not_ready (retry after a short backoff), invalid_registration, or stale_worker_epoch (re-read the worker epoch and re-send). A worker that predates the request answers with the usual unsupported-subtype error.",
    ),
  ),
  MP = m(() =>
    f({
      template: i().regex(xt),
      status: oe([
        "installed",
        "awaiting_upload",
        "interpreter_unavailable",
        "install_failed",
        "unknown_template",
        "version_mismatch",
        "event_not_allowed",
        "disabled",
      ]),
    }).describe("@internal Outcome for one requested template."),
  ),
  DP = String.raw`(?!\.\.?(?:\/|$))[^/\\\p{Cc}\p{Cf}\u2028\u2029]+`,
  IP = new RegExp(`^\\/(?:${DP}(?:\\/${DP})*\\/?)?$`, "u"),
  NP = m(() => ({
    project_dir: i()
      .max(PP)
      .regex(IP)
      .describe(
        "@internal The container's project root, for path translation on the device: absolute, no '.' or '..' segments, no backslash, no control or format characters. Untrusted by the device all the same, which must containment-check every translated path.",
      ),
    cwd: i()
      .max(PP)
      .regex(IP)
      .describe(
        "@internal The container's working directory at registration time, same shape as project_dir; may differ from it.",
      ),
    worker_epoch: v().int().min(1).describe("@internal The worker life that answered."),
  })),
  XEe = m(() =>
    ps("status", [
      f({
        status: N("registered"),
        ...NP(),
        lease_s: v().int().min(1).max(3600).describe("@internal Effective lease in seconds after capping."),
        lease_expires_at: ofe
          .datetime()
          .describe(
            "@internal ISO 8601 UTC instant the lease expires (no offset), as Date.prototype.toISOString renders it.",
          ),
        accepted: v().int().nonnegative().describe("@internal Forwarded entries installed as callbacks."),
        ignored: v()
          .int()
          .nonnegative()
          .describe(
            "@internal Entries not installed: event not forwarded by this worker, unknown kind, malformed, or duplicate id.",
          ),
        ignored_ids: H(i().regex(Qu)).max(128).optional().describe("@internal Ids of the ignored entries."),
        templates: H(MP()).max(8).describe("@internal One row per requested template."),
        replaced_owner: i()
          .regex(xt)
          .optional()
          .describe("@internal instance_id of a different device client this registration displaced, if any."),
        away_since: ofe
          .datetime()
          .optional()
          .describe(
            "@internal Present when THIS instance was being skipped as away (two forwarded runs went unanswered in a row) until this registration cleared it: the ISO 8601 UTC instant the worker stopped asking it. Absent for a first registration, a device that was never away, and a registration that displaces a different device.",
          ),
      }),
      f({
        status: N("unregistered"),
        ...NP(),
        ignored_ids: H(i().regex(Qu)).max(128).optional().describe("@internal Ids of the ignored entries."),
        templates: H(MP()).max(8).optional().describe("@internal One row per requested template."),
      }),
    ]).describe(
      "@internal Success payload answering register_device_hooks: 'registered' while this instance holds entries and a lease; 'unregistered' when an empty inventory removed them, or when nothing it sent could be held (every entry ignored, no template stored or installed) \u2014 then ignored_ids and templates say why.",
    ),
  ),
  abt = m(() =>
    f({
      subtype: N("upload_device_hook_template"),
      template: i().regex(xt).describe("@internal Built-in template id."),
      digest: i()
        .regex(Ad)
        .describe(
          "@internal Lowercase hex sha256 of the decoded content; must be one of the worker's own table digests for this template.",
        ),
      content_base64: i()
        .max(360000)
        .regex(obn)
        .describe(
          "@internal The template script bytes, base64; decoded size must not exceed the template's cap (at most 256 KiB).",
        ),
      worker_epoch: v()
        .int()
        .min(1)
        .optional()
        .describe(
          "@internal The worker epoch the sender believes it is talking to; a mismatch is refused so the device starts over against the new worker.",
        ),
    }).describe(
      "@internal Sent by a claude --cloud device client BEFORE register_device_hooks for each vetted template it wants run in the container; a register that arrives first reports awaiting_upload and the device registers again after uploading. The worker keeps the bytes for its own life only after hashing them against its own table; nothing executable is taken from the wire. Idempotent. Errors: hook_forwarding_disabled | hook_forwarding_not_ready (retryable) | stale_worker_epoch | invalid_upload | template_refused: unknown_template, version_mismatch, too_large or digest_mismatch.",
    ),
  ),
  D8 = m(() =>
    f({ template: i().regex(xt), digest: i().regex(Ad), status: oe(["stored", "already_stored"]) }).describe(
      "@internal Success payload answering upload_device_hook_template.",
    ),
  ),
  lbt = m(() =>
    f({
      subtype: N("remote_tools_announce"),
      instance_id: i()
        .regex(xt)
        .describe(
          "@internal Minted once per client process, stable across reconnects and re-announces: the owner key on the worker, which addresses its remote_tool_call requests to it. Same alphabet as register_device_hooks.instance_id.",
        ),
      worker_epoch: v()
        .int()
        .min(1)
        .optional()
        .describe(
          "@internal The worker life the client believes it addresses; a mismatch is answered with a stale_worker_epoch error.",
        ),
      host: De(i(), _e()).describe(
        "@internal The machine's description in the remote-tool protocol's HostDescription shape (name, kind, platform, working_dir, project_sync, limits, claude_code_version, epoch \u2014 epoch is required on this channel); parsed by that protocol, not here.",
      ),
      tools: H(De(i(), _e()))
        .max(16)
        .describe(
          "@internal The native tools the machine serves, one entry each: {name (Bash, Read, Write, Edit), refused_input_fields, protocol_versions, description?, input_schema?} in the remote-tool protocol's AnnouncedTool shape. Entries are validated one by one by that protocol (a bad one is reported back in ignored_tools, the rest stand), so they are not typed here.",
        ),
      passthrough: H(De(i(), _e()))
        .max(256)
        .describe(
          "@internal The machine's own MCP tools ('<server>__<tool>'), one entry each: {name, local_name, description?, input_schema} in the protocol's AnnouncedPassthrough shape, validated one by one like tools; carried now, not yet served over this channel.",
        ),
      plumbing: H(i().min(1).max(64))
        .max(8)
        .describe(
          "@internal Plumbing tools the machine answers over remote_plumbing_call for the session's own machinery (directory sync's sync_files); never model-facing.",
        ),
    }).describe(
      "@internal Sent by a claude --cloud client that serves tools for this session: which machine it is and which tools it serves, replacing the device-bridge tools/list announcement. Re-sent on reconnect, on worker init and when what it serves changes; all three lists empty withdraws the machine (the keys are required so an omission is a parse error, not a withdrawal) \u2014 and from an instance the worker has not heard of, says the machine serves nothing. A first-party cloud worker acts on it only when the session service stamped the event as coming from a verified device of the account (device_attestation_status VERIFIED_BY_GATE or better); an announce below that floor is dropped unanswered. Errors (message starts with the code and a colon): remote_tools_disabled, remote_tools_not_ready (retryable), stale_worker_epoch, invalid_announce.",
    ),
  ),
  I8 = m(() =>
    f({
      status: oe(["announced", "withdrawn"]),
      worker_epoch: v().int().min(1).optional(),
      protocol_version: v()
        .int()
        .positive()
        .nullable()
        .describe(
          "@internal The wire version the worker will speak with this machine, or null when they have none in common: the machine stays listed and nothing is forwarded to it.",
        ),
      ignored_tools: H(i())
        .optional()
        .describe(
          "@internal Announced entries the worker did not adopt (an unknown native name, a malformed or duplicate entry).",
        ),
    }).describe("@internal Success payload answering remote_tools_announce."),
  ),
  FP = m(() =>
    un({
      content: H(_e()),
      isError: q().optional(),
      structuredContent: De(i(), _e()).optional(),
      _meta: De(i(), _e()).optional(),
    }),
  ),
  bd = m(() =>
    f({
      subtype: N("remote_tool_call"),
      instance_id: i()
        .regex(xt)
        .describe(
          "@internal The announcement this call is addressed to (remote_tools_announce.instance_id). A client that did not announce under this id stays silent: another attached client may own it.",
        ),
      host: i().max(64).describe("@internal The machine's announced name; informational twin of instance_id."),
      name: i().min(1).max(256).describe("@internal The announced tool to run."),
      input: De(i(), _e()).describe(
        "@internal The tool's own input, without the machine argument and without the envelope; {} for an outcome query.",
      ),
      envelope: De(i(), _e()).describe(
        "@internal The remote-tool protocol's request envelope, exactly what rides under the reserved arguments key on the device bridge: a call (call id = tool_use id, the session's permission mode, expiry, and on a second leg the session's answer to the machine's question) or an outcome query by its op. call_id is the serving side's run-at-most-once key across legs, redeliveries and queries; request_id is per leg. Parsed strictly by that protocol on the client.",
      ),
      tool_use_id: i(),
      issued_at: v()
        .int()
        .nonnegative()
        .describe(
          "@internal Epoch milliseconds on the sender's clock: with deadline_ms a client recognizes a stale or replayed delivery (older than its attach, or past issued_at + deadline_ms) and leaves it unanswered. Required here \u2014 a durable catch-up into a fresh client must never run an old call.",
        ),
      deadline_ms: v()
        .int()
        .positive()
        .describe("@internal How long after issued_at the worker waits for the answer before proceeding without it."),
    }).describe(
      "@internal One leg of a tool call this session forwards to the attached machine that announced it serves the tool: the first leg, the approval leg (envelope.approval), a detached decline, or an outcome query (envelope.op = 'outcome_of'). Answered with a control_response whose success payload is the served CallToolResult; cancelled with control_cancel_request. An error-shaped control_response is not an answer (an older attached client error-replies subtypes it does not know); the worker keeps waiting.",
    ),
  ),
  N8 = m(() =>
    f({
      result: FP().describe(
        "@internal The served CallToolResult for this leg, verbatim as the machine's serving code produced it; structuredContent['anthropic/remoteToolExecution'] is the remote-tool protocol's ResultEnvelope (completed, refused, failed, needs_approval, acknowledged, in_progress), parsed by the worker with that protocol.",
      ),
    }).describe(
      "@internal Success payload answering remote_tool_call: the result under one fixed key, never spread at the top level.",
    ),
  ),
  yd = m(() =>
    f({
      subtype: N("remote_plumbing_call"),
      instance_id: i()
        .regex(xt)
        .describe(
          "@internal The announcement this call is addressed to; a client that did not announce under this id stays silent.",
        ),
      host: i().max(64).describe("@internal The machine's announced name; informational."),
      name: i()
        .min(1)
        .max(64)
        .describe("@internal An announced plumbing tool (today only directory sync's sync_files)."),
      args: De(i(), _e()).describe("@internal The plumbing tool's arguments; no envelope rides with them."),
      issued_at: v().int().nonnegative(),
      deadline_ms: v().int().positive(),
    }).describe(
      "@internal One call of a plumbing tool on the attached machine, made by this session's own machinery (directory sync) rather than the model: no envelope and no tool_use id. Answered with a control_response whose success payload carries that tool's CallToolResult; cancelled with control_cancel_request.",
    ),
  ),
  x8 = m(() =>
    f({ result: FP().describe("@internal The plumbing tool's CallToolResult, verbatim.") }).describe(
      "@internal Success payload answering remote_plumbing_call.",
    ),
  ),
  Rd = m(() =>
    f({
      subtype: N("remote_tools_probe"),
      instance_id: i().regex(xt).describe("@internal The announcement being probed; other clients stay silent."),
      issued_at: v().int().nonnegative(),
      deadline_ms: v().int().positive(),
    }).describe(
      "@internal The worker's liveness check for an announced machine, sent only inside a live turn after minutes without hearing from it; a miss within deadline_ms marks the machine offline until it announces again or answers anything.",
    ),
  ),
  L8 = m(() =>
    f({
      result: f({ epoch: i().describe("@internal The machine's current serving epoch (its announced host.epoch).") }),
    }).describe("@internal Success payload answering remote_tools_probe."),
  ),
  Cd = m(() =>
    f({ subtype: N("mcp_message"), server_name: i(), message: xP() }).describe(
      "Carries one MCP JSON-RPC message for an SDK-hosted MCP server (one named in initialize.sdkMcpServers or added later with mcp_set_servers). Flows in both directions: the CLI sends it to the client to reach the in-process server, and the client sends it to the CLI to deliver that server's own messages. When the client answers, the success response carries the server's JSON-RPC reply under mcp_response; the CLI acknowledges a client-sent one with an empty success.",
    ),
  ),
  U8 = m(() =>
    f({
      mcp_response: xP()
        .optional()
        .describe(
          "The JSON-RPC response the SDK-hosted server produced for the delivered message (for a JSON-RPC notification, a response with an empty result). Present when the client answers a CLI-sent mcp_message; absent when the CLI acknowledges a client-sent one.",
        ),
    }).describe("Success payload answering an mcp_message request."),
  ),
  Od = m(() =>
    f({ subtype: N("mcp_set_servers"), servers: De(i(), $s()) }).describe(
      "Replaces the set of dynamically managed MCP servers.",
    ),
  ),
  z8 = m(() =>
    f({ added: H(i()), removed: H(i()), errors: De(i(), i()) }).describe(
      "Result of replacing the set of dynamically managed MCP servers.",
    ),
  ),
  kd = m(() =>
    f({ subtype: N("reload_plugins") }).describe(
      "Reloads plugins from disk and returns the refreshed session components.",
    ),
  ),
  F8 = m(() =>
    f({
      commands: H(Io()),
      agents: H(Du()),
      plugins: H(f({ name: i(), path: i(), source: i().optional(), version: i().optional().describe(Fu) })),
      mcpServers: H(Mu()),
      error_count: v().int(),
    }).describe("Refreshed commands, agents, plugins, and MCP server status after reload."),
  ),
  wd = m(() =>
    f({ subtype: N("reload_skills") }).describe("Reloads skills from disk and returns the refreshed skill list."),
  ),
  B8 = m(() => f({ skills: H(Io()) }).describe("Refreshed skill commands after reload.")),
  Pd = m(() =>
    f({
      subtype: N("register_repo_root"),
      directory: i(),
      reload_claude_md: q().optional(),
      reload_plugins: q().optional(),
      reload_skills: q().optional(),
    }).describe(
      "Add a directory as a working-directory root and optionally reload CLAUDE.md, skills, and plugins. The directory must resolve to a strict subdirectory of cwd, or of a directory passed at launch via --add-dir / the SDK additionalDirectories option. A directory that is already a registered working directory (including a duplicate of an earlier request) is denied with an error; the registration pipeline and DirectoryAdded hooks do not re-run.",
    ),
  ),
  H8 = m(() =>
    f({
      directory: i().describe(
        "The registered root. A resolved absolute path \u2014 except on connections that persist frames server-side (the local bridge-worker lane echoes the request directory verbatim; the registration is still keyed on the resolved path locally).",
      ),
    }).describe("Success payload answering register_repo_root."),
  ),
  Md = m(() =>
    f({
      subtype: N("set_cwd"),
      path: i().describe(
        "Target directory. Tilde-expanded and realpath-canonicalized by the CLI, exactly like an interactive /cd argument.",
      ),
      trust_accepted: q()
        .optional()
        .describe(
          "Host attestation that the user explicitly accepted a trust dialog for this directory. Only send true after showing one \u2014 the CLI records the directory as trusted (the same latch /cd's own prompt writes) before relocating. Requires trusted_directory.",
        ),
      trusted_directory: i()
        .optional()
        .describe(
          "Required whenever trust_accepted is true: the exact directory string from the needs_trust response being answered. This pins the attestation to the canonical path the user was shown \u2014 if the raw path canonicalizes differently by the time the re-send arrives (e.g. a symlink component changed during the dialog), nothing is latched and a fresh needs_trust carries the new canonical directory.",
        ),
    }).describe(
      "@internal Moves the session to a new working directory \u2014 the headless twin of /cd, for SDK hosts like Claude Desktop. Runs the same validation, Cd(...) permission rules, and relocation path as the interactive command, with the trust prompt delegated to the host via the needs_trust response arm. Rejected while a turn is in flight.",
    ),
  ),
  V8 = m(() =>
    ps("status", [
      f({
        status: N("ok"),
        cwd: i().describe("Canonical (realpath) working directory the session now runs in."),
        changed: q().describe(
          "False when the target already was the working directory \u2014 a successful no-op with no side effects.",
        ),
        transcript_relocated: q().describe(
          "True when the transcript lives in the project slot derived from cwd (the normal case, and the no-op case). False only on the documented edge where the move completed but the transcript move failed AND the rollback chdir failed \u2014 a cwd-derived resume lookup will then miss the session.",
        ),
      }),
      f({
        status: N("needs_trust"),
        trust_root: i()
          .optional()
          .describe(
            "Present when `directory` sits inside a git repository whose canonical root differs from it (a subdirectory or a linked worktree). Accepting trust grants that whole repository \u2014 every subdirectory and linked worktree of the root \u2014 so the trust dialog should name this root alongside `directory`. Informational only: the attestation echo still pins `trusted_directory` to `directory`. Vetted by the same visible-glyph rule as `directory`; a canonical root that fails it is omitted rather than carried.",
          ),
        directory: i().describe(
          "Canonical target directory. Nothing changed; show a trust dialog for exactly this string and, on accept, re-send with trust_accepted: true and trusted_directory echoing it verbatim. Safe to render verbatim in the dialog, by construction: every character is a visible, space-distinguishable glyph. Targets whose canonical path contains control (Cc), format (Cf), default-ignorable, line/paragraph-separator (Zl/Zp), non-ASCII-space Zs, or braille-blank code points are rejected (reason: unsafe_path) before this arm can carry them.",
        ),
      }),
      f({
        status: N("rejected"),
        reason: oe(["not_found", "not_a_directory", "blocked_by_rule", "busy", "unsafe_path"]).describe(
          "unsafe_path: the target's canonical path contains characters that do not render as visible, space-distinguishable glyphs \u2014 control (Cc), format (Cf), default-ignorable, line/paragraph-separator (Zl/Zp), non-ASCII-space Zs, or braille-blank code points; rejected fail-closed before the trust round-trip, and the offending path is never echoed back.",
        ),
        message: i().describe("Human-readable, ANSI-free explanation."),
      }),
    ]).describe(
      "@internal Result of a set_cwd request. Every non-ok outcome leaves the working directory unchanged \u2014 but trust may already have been durably recorded when the request carried a valid attestation (a busy rejection or relocation failure after the latch does not unlatch it; the consent was for the directory, not the attempt). Internal failures (e.g. the transcript move failed and was rolled back) arrive as a control_response error instead.",
    ),
  ),
  Dd = m(() =>
    f({ subtype: N("mcp_reconnect"), serverName: i() }).describe("Reconnects a disconnected or failed MCP server."),
  ),
  Id = m(() =>
    f({ subtype: N("mcp_toggle"), serverName: i(), enabled: q() }).describe("Enables or disables an MCP server."),
  ),
  Nd = m(() =>
    f({ subtype: N("set_mcp_permission_mode_override"), serverName: i(), mode: Rt().nullable() }).describe(
      "@internal Pin (or clear, with mode:null) an MCP server's per-tool permission-mode override. Tighten-only over this channel: only 'default', 'auto', or null are accepted (clampControlChannelOverride); any other mode is rejected without changing state. The override substitutes for the session mode at every per-tool engine decision (effectiveModeForTool) \u2014 and only when the session mode would already auto-allow \u2014 so e.g. a server can be held at 'default' or routed through the auto-mode classifier under global bypassPermissions.",
    ),
  ),
  xd = m(() => f({ subtype: N("stop_task"), task_id: i() }).describe("Stops a running task.")),
  Ld = m(() =>
    f({
      subtype: N("background_tasks"),
      tool_use_id: i()
        .optional()
        .describe(
          "When set, backgrounds only the task whose originating tool_use block has this id. When omitted, backgrounds all foreground tasks (Ctrl+B semantics).",
        ),
    }).describe(
      'Backgrounds in-flight foreground tasks (Bash commands and subagents). With tool_use_id, targets the single task started by that tool_use block; without it, backgrounds all foreground tasks \u2014 the control-request equivalent of pressing Ctrl+B in the terminal. Each blocking tool call returns immediately with a "running in the background" tool_result and the turn continues; the task keeps running and emits a task_notification when it settles.',
    ),
  ),
  G8 = m(() =>
    f({
      backgrounded: q()
        .optional()
        .describe(
          "Present only when the request named a tool_use_id: whether a matching foreground task was found and backgrounded. Empty object when all foreground tasks were backgrounded.",
        ),
    }).describe("Success payload answering background_tasks."),
  ),
  Ud = m(() =>
    f({ subtype: N("apply_flag_settings"), settings: De(i(), _e()) }).describe(
      "Merges the provided settings into the flag settings layer, updating the active configuration.",
    ),
  ),
  zd = m(() =>
    f({ subtype: N("get_settings") }).describe(
      "Returns the effective merged settings and the raw per-source settings.",
    ),
  ),
  K8 = m(() =>
    f({
      effective: De(i(), _e()),
      sources: H(
        f({
          source: oe(["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"]),
          settings: De(i(), _e()),
        }),
      ).describe("Ordered low-to-high priority \u2014 later entries override earlier ones."),
      applied: f({
        model: i(),
        effort: oe(["low", "medium", "high", "xhigh", "max"]).nullable(),
        advisor: i()
          .nullable()
          .optional()
          .describe(
            "Advisor model that will be attached to API requests, after enablement, allowlist, and pairing validation. Null when none will be attached; absent on workers that predate the field.",
          ),
        ultracode: q()
          .optional()
          .describe(
            "Whether ultracode (xhigh effort plus standing dynamic-workflow orchestration) is active for the session. Set per session via the `ultracode` settings key (--settings or apply_flag_settings).",
          ),
      })
        .optional()
        .describe(
          "Runtime-resolved values after env overrides, session state, and model-specific defaults are applied. Unlike `effective` (disk merge), these reflect what will actually be sent to the API.",
        ),
      errors: H(kP())
        .optional()
        .describe(
          "Settings parse and validation errors. When non-empty, the listed files were skipped during the merge above \u2014 their settings are not reflected in `effective` or `sources`.",
        ),
    }).describe("Effective merged settings plus raw per-source settings in merge order."),
  ),
  Fd = m(() =>
    f({
      subtype: N("elicitation"),
      mcp_server_name: i(),
      message: i(),
      mode: oe(["form", "url"]).optional(),
      url: i().optional(),
      elicitation_id: i().optional(),
      requested_schema: De(i(), _e()).optional(),
      title: i()
        .optional()
        .describe(
          "Permission-display title from the MCP server's _meta['anthropic/permissionDisplay']. Mirrors can_use_tool.title so SDK consumers can render elicitation-driven permission prompts with structured headers instead of parsing `message`.",
        ),
      display_name: i()
        .optional()
        .describe(
          "Short tool/server label from _meta['anthropic/permissionDisplay'].displayName. Mirrors can_use_tool.display_name.",
        ),
      description: i()
        .optional()
        .describe(
          "Permission-display subtitle from _meta['anthropic/permissionDisplay'].description. Mirrors can_use_tool.description.",
        ),
    }).describe("Requests the SDK consumer to handle an MCP elicitation (user input request)."),
  ),
  ibn = m(() =>
    f({ action: oe(["accept", "decline", "cancel"]), content: De(i(), _e()).optional() }).describe(
      "Response from the SDK consumer for an elicitation request.",
    ),
  ),
  Bd = m(() =>
    f({
      subtype: N("request_user_dialog"),
      dialog_kind: i().describe(
        'Identifier for the dialog the host should render. Open string union \u2014 new kinds may be added without bumping the protocol. A kind is only sent in sessions where some attached client declared it in initialize.supportedDialogKinds (declare exactly the kinds you can render); on multi-client transports the request still reaches every attached client. A host that receives a kind it did not declare must not answer it (an error-subtype response is discarded and the dialog stays pending) \u2014 never with {behavior: "cancelled"}, which is a real settlement treated as the user dismissing the dialog. An unanswered dialog is cancelled by the CLI after its dialog deadline.',
      ),
      payload: De(i(), _e()).describe(
        "Dialog-specific data passed to the host renderer. Shape is defined per dialog_kind; the protocol transports it opaquely.",
      ),
      tool_use_id: i().optional(),
    }).describe(
      "Requests the SDK consumer to render a tool-driven blocking dialog and return the user choice. Used by tools that previously rendered Ink JSX via setToolJSX with an onDone callback.",
    ),
  ),
  V8e = m(() =>
    f({
      behavior: oe(["completed", "cancelled"]),
      result: _e()
        .optional()
        .describe(
          "Dialog-specific result payload. Opaque to the protocol; the caller and dialog renderer agree on the shape per dialog_kind.",
        ),
    }).describe("Response from the SDK consumer for a request_user_dialog request."),
  ),
  Hd = m(() =>
    f({
      subtype: N("submit_feedback"),
      description: i(),
      surface: oe(["cli", "ccd", "ccr", "ide", "sdk", "cowork"])
        .optional()
        .describe(
          "Where the feedback flow was initiated. Stamped into the POST body and tengu_bug_report_* analytics so the triage pipeline can distinguish CCD/CCR/IDE/Cowork reports from terminal reports landing in the same claude_cli_feedback table. Defaults to 'sdk'.",
        ),
      draft_id: i()
        .optional()
        .describe(
          "UUID of a local SendFeedback draft under ~/.claude/feedback/drafts/. When set, the handler reads the stored draft, rebuilds the description via buildDraftDescription() (so the upload matches the consent form the user reviewed; the cwd is neither uploaded nor named on the form's consent line \u2014 it never uploads as metadata, though a transcript attachment, separately consented, still carries real paths), bundles the draft's own transcript per attach_transcript, and deletes the draft file on success. The caller's description/type/title/area override the stored draft when provided (user edits on the review form).",
        ),
      type: oe(["bug", "idea", "missing_capability"]).optional(),
      title: i().optional(),
      area: i().optional(),
      attach_transcript: q()
        .optional()
        .describe(
          "Whether to bundle the draft's source-session transcript with the upload. Only meaningful alongside draft_id \u2014 the non-draft path always bundles the current session (unchanged). Defaults to true.",
        ),
    }).describe(
      "@internal Submits a /feedback report (description + current session transcript + sanitized error log) to api.anthropic.com/api/claude_cli_feedback using the CLI's auth and redaction. Runs the same getFeedbackUnavailableReason() policy checks as the terminal /feedback command \u2014 when feedback is disabled (3P provider, org policy, env kill-switch) the response carries unavailable_reason instead of an error.",
    ),
  ),
  j8 = m(() =>
    f({
      feedback_id: i().nullable(),
      unavailable_reason: i()
        .optional()
        .describe(
          "Human-readable reason /feedback is disabled in this session (3P provider, org policy, env var). When set, no submission was attempted.",
        ),
      is_zdr_org: q().optional(),
      failure_reason: i().optional(),
      status_code: v().int().optional(),
      ccshare_url: i()
        .optional()
        .describe(
          "Internal share URL for the conversation. Only set in internal builds when the upload succeeded; absent otherwise.",
        ),
    }).describe(
      "@internal Result of a submit_feedback request. feedback_id is set on success; otherwise one of unavailable_reason / failure_reason explains why.",
    ),
  ),
  Vd = m(() =>
    f({
      subtype: N("remote_control_work_secret"),
      session_id: i().describe("The attached claude.ai session whose worker token needs renewing."),
    }).describe(
      "@internal Request from the CLI subprocess to the SDK host for the session's re-dispatched work secret, sent when a bridge attached with `remote_control {work_secret}` needs a fresh worker token (before expiry, or during auth recovery). The host re-queues the session on its bridge environment and answers with the secret its next work poll delivers, or null when it has none yet \u2014 the CLI asks again on its own retry cadence.",
    ),
  ),
  sbn = m(() =>
    f({ work_secret: i().nullable() }).describe(
      "@internal The re-dispatched base64url work secret for the requested session, or null when the host has none available yet.",
    ),
  ),
  Gd = m(() =>
    f({ subtype: N("oauth_token_refresh") }).describe(
      "@internal Request from the CLI subprocess to the SDK host for a fresh OAuth access token after a 401 with no local refresh token.",
    ),
  ),
  abn = m(() =>
    f({
      accessToken: i().nullable(),
      reason: oe(Nwn)
        .optional()
        .catch(void 0)
        .describe(
          "Why the host returned no token (only meaningful when accessToken is null). Absent from hosts that do not say. Null, unknown or malformed values degrade to undefined at parse time (the enum carries `.catch`), so a reason can never cost a delivered token and values can be added without a version bump.",
        ),
    }).describe(
      "@internal Fresh OAuth access token returned by the SDK host getOAuthToken callback, or null when the host has no token available.",
    ),
  ),
  Kd = m(() =>
    f({ subtype: N("host_auth_token_refresh") }).describe(
      "@internal Request from the CLI subprocess to the SDK host for a fresh provider credential after a 401 or AWS credential-expiry error when the host owns the credential (Cowork 3P).",
    ),
  ),
  lbn = m(() =>
    f({ authToken: i().nullable(), materialUnchanged: q().optional() }).describe(
      "@internal Fresh provider bearer token returned by the SDK host getHostAuthToken callback, or null if the credential was refreshed out-of-band. materialUnchanged is only consulted when authToken is null (out-of-band delivery) \u2014 true tells the CLI to fast-fail instead of backing off.",
    ),
  ),
  cbt = m(() =>
    f({
      subtype: N("message_rated"),
      messageUuid: i().describe("UUID of the assistant message being rated."),
      sentiment: oe(["positive", "negative"]).describe("User rating: positive (thumbs up) or negative (thumbs down)."),
      surface: oe(["tool_use", "assistant_text"])
        .optional()
        .describe("Which in-conversation surface the rating came from. If omitted, logged as tool_use."),
      cleared: q()
        .optional()
        .describe("True when the caller is un-rating a message (clicking the same control a second time)."),
    }).describe(
      "@internal Records a per-message thumbs up/down rating. Logs tengu_message_rated with the same shape as the in-conversation rating controls so Desktop / IDE callers can surface their own native thumbs UI.",
    ),
  ),
  W8 = m(() => f({}).describe("@internal Empty response for message_rated.")),
  J_e = m(() =>
    dt([Zu(), Sd(), Cd(), Gd(), Kd(), Fd(), Bd(), bd(), yd(), Rd(), Vd()]).describe(
      "Control requests the agent loop originates and needs a reply to \u2014 the loop\u2192client RPC slice of SDKControlRequestInner. The remaining members are client\u2192loop commands (set/get/mcp/auth/etc).",
    ),
  ),
  Z_e = m(() =>
    dt([
      Ju(),
      obt(),
      ed(),
      td(),
      nd(),
      rd(),
      od(),
      id(),
      ad(),
      ld(),
      cd(),
      dd(),
      pd(),
      ibt(),
      sd(),
      fd(),
      _d(),
      md(),
      gd(),
      hd(),
      Ed(),
      Od(),
      Pd(),
      kd(),
      wd(),
      Dd(),
      Id(),
      Nd(),
      Md(),
      sbt(),
      abt(),
      cbt(),
      xd(),
      Ld(),
      Ud(),
      zd(),
      Hd(),
      lbt(),
    ]).describe(
      "Control requests a client sends to drive the loop \u2014 the client\u2192loop command slice of SDKControlRequestInner. The remaining members are loop\u2192client RPCs that block on a reply (see AgentOriginatedControlRequest).",
    ),
  ),
  Y8 = m(() =>
    dt([
      Ju(),
      Zu(),
      obt(),
      ed(),
      td(),
      nd(),
      rd(),
      od(),
      id(),
      ad(),
      ld(),
      cd(),
      dd(),
      pd(),
      ibt(),
      sd(),
      Sd(),
      Cd(),
      fd(),
      _d(),
      md(),
      gd(),
      hd(),
      Ed(),
      Od(),
      Pd(),
      kd(),
      wd(),
      Dd(),
      Id(),
      Nd(),
      Md(),
      sbt(),
      abt(),
      cbt(),
      Gd(),
      Kd(),
      xd(),
      Ld(),
      Ud(),
      zd(),
      Fd(),
      Bd(),
      Hd(),
      lbt(),
      bd(),
      yd(),
      Rd(),
      Vd(),
    ]),
  );

var eme = m(() => [
    fe(Ju(), "client", u8()),
    fe(Zu(), "agent", cP()),
    fe(obt(), "client", c8()),
    fe(ed(), "client", d8()),
    fe(td(), "client", null),
    fe(nd(), "client", null),
    fe(rd(), "client", null),
    fe(od(), "client", void 0),
    fe(id(), "client", p8()),
    fe(ad(), "client", T8()),
    fe(ld(), "client", _8()),
    fe(cd(), "client", m8()),
    fe(dd(), "client", g8()),
    fe(pd(), "client", h8()),
    fe(ibt(), "client", A8()),
    fe(sd(), "client", f8()),
    fe(Sd(), "agent", _P()),
    fe(Cd(), "both", U8()),
    fe(fd(), "client", b8()),
    fe(_d(), "client", y8()),
    fe(md(), "client", R8()),
    fe(gd(), "client", v8()),
    fe(hd(), "client", O8()),
    fe(Ed(), "client", null),
    fe(Od(), "client", z8()),
    fe(Pd(), "client", H8()),
    fe(kd(), "client", F8()),
    fe(wd(), "client", B8()),
    fe(Dd(), "client", null),
    fe(Id(), "client", null),
    fe(Nd(), "client", void 0),
    fe(Md(), "client", V8()),
    fe(sbt(), "client", XEe()),
    fe(abt(), "client", D8()),
    fe(cbt(), "client", W8()),
    fe(Gd(), "agent", abn()),
    fe(Kd(), "agent", lbn()),
    fe(xd(), "client", null),
    fe(Ld(), "client", G8()),
    fe(Ud(), "client", null),
    fe(zd(), "client", K8()),
    fe(Fd(), "agent", ibn()),
    fe(Bd(), "agent", V8e()),
    fe(Hd(), "client", j8()),
    fe(lbt(), "client", I8()),
    fe(bd(), "agent", N8()),
    fe(yd(), "agent", x8()),
    fe(Rd(), "agent", L8()),
    fe(Vd(), "agent", sbn()),
  ]),
  Js = m(() =>
    f({
      type: N("control_request"),
      request_id: i().describe(
        "Chosen by the sender, unique among its in-flight requests; the control_response (and any control_cancel_request) for this request echoes it.",
      ),
      request: Y8(),
    }).describe(
      "Envelope for a control-protocol request, sent by either side on the same stream as the messages. The receiver normally answers with exactly one control_response carrying the same request_id (a few request types document when no answer is sent), and a requester ignores responses for request_ids it is not waiting on. Each request type's own documentation says which side sends it and what its success response carries.",
    ),
  ),
  BP = m(() =>
    H(zH(() => Js()))
      .optional()
      .describe(
        "Permission requests still awaiting a response. Sent on the `initialize` response so a client joining an already-initialized session learns about in-flight prompts.",
      ),
  ),
  HP = m(() =>
    H(zH(() => Js()))
      .optional()
      .describe(
        "request_user_dialog requests still awaiting a response. Sent on the `initialize` response (sibling of pending_permission_requests) so a client joining an already-initialized session can re-arm in-flight dialogs. Receivers must tolerate the same request_id also arriving as a live or replayed control_request frame and render it once.",
      ),
  ),
  $8 = m(() =>
    f({
      subtype: N("success"),
      request_id: i().describe("The request_id of the control_request this answers."),
      response: De(i(), _e())
        .optional()
        .describe(
          "The success payload, shaped as documented for the answered request's subtype; absent or {} for requests that are merely acknowledged.",
        ),
      pending_permission_requests: BP(),
      pending_user_dialog_requests: HP(),
    }).describe("The request was handled."),
  ),
  q8 = m(() =>
    f({
      subtype: N("error"),
      request_id: i().describe("The request_id of the control_request this answers."),
      error: i().describe("Human-readable failure description."),
      pending_permission_requests: BP(),
      pending_user_dialog_requests: HP(),
    }).describe(
      "The request failed or was rejected (unknown subtype, invalid arguments, or an error while handling it).",
    ),
  ),
  Zs = m(() =>
    f({ type: N("control_response"), response: dt([$8(), q8()]) }).describe(
      "Envelope for the single reply to a control_request, sent by whichever side received the request.",
    ),
  ),
  ea = m(() =>
    f({
      type: N("control_cancel_request"),
      request_id: i().describe("The request_id of the control_request being withdrawn."),
    }).describe(
      "Tells the other side that the sender no longer needs the answer to one of its own in-flight control_requests (for example a pending can_use_tool prompt after the turn was interrupted, or one that another client already answered). Either side may send it for a request it originated. The sender stops waiting at once and ignores any control_response that still arrives for that request_id; a receiver that can abort the work does so and may still reply (typically with an error), otherwise it simply completes the request. There is no reply to the cancel itself.",
    ),
  ),
  VP = m(() =>
    f({ type: N("keep_alive") }).describe(
      "Liveness heartbeat with no payload. Either side may send it at any time (the CLI emits it periodically, for example while a long-running control request is in progress); receivers must ignore it.",
    ),
  ),
  X8 = m(() =>
    f({ type: N("update_environment_variables"), variables: De(i(), i()), request_id: i().optional() }).describe(
      "Updates environment variables at runtime.",
    ),
  ),
  Q8 = m(() =>
    f({
      type: N("session_notice"),
      uuid: i(),
      notice_class: i().describe(
        'Server-chosen notice class: "peer_notice" | "helper_lifecycle" | "handoff" (open snake_case set; unknown tokens are carried verbatim).',
      ),
      from_session_id: i().describe("Server-verified sender session id."),
      content: i(),
      isSynthetic: N(!0).describe(
        "Server-asserted synthetic stamp \u2014 stripped from inbound copies at CCR ingress and re-stamped only by the notice composer.",
      ),
      inbound_origin: N("mcp_session_notice").describe(
        "Server-asserted ingest-path marker, same strip-and-restamp discipline as isSynthetic.",
      ),
      session_id: i().optional(),
    }).describe(
      "@internal Backend\u2192CLI: a server-composed coordination notice for a sealed helper session, delivered to the model over the Poll event channel as a provenance-attributed <event> envelope (never a user turn, never a synthetic message). The CLI acks processed only when the Poll delivery settles into the transcript; undelivered notices redeliver.",
    ),
  ),
  J8 = m(() =>
    f({
      type: N("queued_notification"),
      notification: f({
        notification_id: i().describe("Server-assigned stable id \u2014 the dedup key across redeliveries."),
        origin: i().describe(
          'Server-attested source token: "github_webhook" | "trigger_fire" | "mcp_send_message" (open set; unknown values render verbatim).',
        ),
        content: i().describe(
          "Exactly the text that would previously have been injected as a user turn, framing included.",
        ),
        priority: oe(["now", "next", "later"]),
        queued_at: i().describe("RFC3339 timestamp of when the backend queued it."),
      }),
      uuid: i().optional(),
      session_id: i().optional(),
    }).describe(
      "@internal Backend\u2192CLI: a trigger delivery (webhook activity, scheduled trigger, agent message) queued server-side instead of injected as a user turn. The CLI buffers it, nudges the model to call the ReadNotifications tool, and acks the event processed only when drained \u2014 an undrained event redelivers on resume.",
    ),
  ),
  tme = m(() =>
    dt([qu(), Bu(), Gu(), Ku(), Wu(), Yu()]).describe(
      "Observational messages the agent loop emits \u2014 fire-and-forget, no reply expected. The remaining StdoutMessage members are control-protocol traffic (requests the loop originates and needs a reply to, responses to client-originated requests, keep-alives). This sub-union is the target for QueryEvent convergence so a Transport-shaped REPL can consume events without filtering control noise.",
    ),
  ),
  atr = m(() =>
    dt([qu(), Bu(), Gu(), Ku(), Wu(), Zs(), Js(), ea(), VP(), Yu()]).describe(
      "Everything the CLI writes to its output stream (stdout in stream-json mode): exactly one StdoutMessage per line, as a single JSON object. Besides the SDKMessage members this includes the control protocol - control requests the CLI originates, control responses to the client's requests, cancellations and keep-alives.",
    ),
  ),
  nme = m(() =>
    dt([Lu(), SP(), Js(), Zs(), ea(), VP(), X8(), J8(), Q8()]).describe(
      "Everything a client may write to the CLI's input stream (stdin in stream-json input mode): exactly one StdinMessage per line, as a single JSON object - user messages that start turns, control requests the client originates, control responses answering the CLI's requests, cancellations and keep-alives. initialize is optional and normally the first line; the first user message initializes with defaults. An initialize that arrives later (e.g. from a client joining the session) is answered with the current state: the one-time session setup (e.g. system prompt, agents, skills, supportedDialogKinds) is not re-applied, but title, sdkMcpServers and agentProgressSummaries are still processed on every initialize, and hooks sent by the process that owns this stream replace the earlier set (see hooks_applied on the response). Closing the stream tells the CLI to finish the current turn and exit.",
    ),
  );

var ltr = { subtype: "interrupt", cancel_queued: !0 };

var pbt = "Session not found:",
  R3t = "invalid session ID";

var GP = [2000, 4000, 8000, 16000],
  Yd = GP.length,
  k3t = "ccr-byoc-2025-07-29";

var eZ = 120000;

var gRr = m(() =>
  f({
    id: i(),
    title: i(),
    description: i(),
    status: oe(["idle", "working", "waiting", "completed", "archived", "cancelled", "rejected"]),
    repo: f({ name: i(), owner: f({ login: i() }), default_branch: i().optional() }).nullable(),
    turns: H(i()),
    created_at: i(),
    updated_at: i(),
  }),
);

var iZ = m(() =>
    un({
      subtype: N("can_use_tool"),
      tool_name: i(),
      input: De(i(), _e()),
      tool_use_id: i(),
      requires_user_interaction: q().optional(),
      decision_reason_type: _e().optional(),
      classifier_approvable: _e().optional(),
      matched_ask_rule: _e().optional(),
    }),
  ),
  sZ = m(() => ps("type", [f({ type: N("control_request"), request_id: i(), request: iZ() }), Zs(), ea()]));

class KP {
  warned = !1;
  claim() {
    if (this.warned) return !1;
    return (this.warned = !0), !0;
  }
}

var aZ = new J(() => new KP());

var dZ = new Set(["authorization", "proxy-authorization", "x-authorization", "x-api-key", "cookie"]),
  pZ = new Set(["https://api.anthropic.com", "https://api-staging.anthropic.com"]);

var bt = {
  get(e, t) {
    return Xn("GET", e, void 0, t);
  },
  post(e, t, r) {
    return Xn("POST", e, t, r);
  },
  put(e, t, r) {
    return Xn("PUT", e, t, r);
  },
  patch(e, t, r) {
    return Xn("PATCH", e, t, r);
  },
  delete(e, t, r) {
    return Xn("DELETE", e, t, r);
  },
};

var QP = ["commercial", "gsuite", "enterprise", "health"],
  JP = 20;

var uy = "remote-devices",
  mbt = "mcp__remote-devices__device_bash";

var ftr = "mcp__ide__executeCode",
  mtr = [
    "mcp__remote-devices__device_bash",
    "mcp__remote-devices__device_list_dir",
    "mcp__remote-devices__device_stage_files",
    "mcp__remote-devices__device_commit_files",
  ],
  mbn = new Set(["ide", "remote-devices"]),
  yZ = [
    "claude_in_chrome",
    "claude_browser",
    "claude_preview",
    "claude_code_ios_simulator",
    "claude_code_android_emulator",
    "computer_use",
    "framebuffer",
    "plugins",
    "skills",
    "mcp_registry",
    "scheduled_tasks",
    "cowork",
    "session_info",
    "dispatch",
    "remote_devices",
    "ccd_directory",
  ],
  RZ = new Set([
    "workspace",
    "terminal",
    "office",
    "visualize",
    "window_halo",
    "dev_debug",
    "ccd_session",
    "ccd_session_mgmt",
  ]);

var CZ = [];

var OZ = 1000,
  kZ = 30000,
  wZ = new J(() => ({ inFlight: null, verdict: void 0, settledAt: 0, seenPopulated: !1, generation: 0 }));

var MZ = ["/v1/design/"];

var zMe = new Set(["Claude Preview", "Claude Browser"]),
  oM = new Set(["claude-in-chrome", "Claude in Chrome"]),
  I3t = new Set([...oM, ...zMe]),
  DZ = "remote-devices",
  iM = ["Claude_Browser__"],
  sM = ["claude-in-chrome__", "Claude_in_Chrome__"],
  _tr = [...iM, ...sM];

var Qe = "Bash";

var Kt = "Edit",
  gbt = "/.claude/**",
  hbt = "~/.claude/**",
  P3t = "File has not been read yet. Read it first before writing to it.",
  Z8e = "File is in a directory that is denied by your permission settings.",
  gbn = "File is covered by a Read deny rule in your permission settings and cannot be edited.",
  hbn = "File is covered by a Read deny rule in your permission settings and cannot be written.",
  D3t =
    "File content has changed since it was last read. This commonly happens when a linter or formatter run via Bash rewrites the file. Call Read on this file to refresh, then retry the edit.";

class EY extends Error {
  constructor(e) {
    super(e);
    this.name = "FileStateError";
  }
}

var _t = "Read";

var ar = "Write";

var cM = new Set(["hearthbot", uy]),
  LZ = $d(cM),
  UZ = $d(zMe),
  zZ = $d([...I3t, n0, aGt]);

var FZ = new Set(["127.0.0.1", "[::1]", "::1"]);

var HZ = new Set(Jnr.map((e) => ln(e))),
  VZ = new Set(trr.map((e) => ln(e))),
  GZ = [
    "list_devices",
    "get_device_info",
    "device_bash",
    Qe,
    _t,
    ar,
    Kt,
    "sync_files",
    "device_list_dir",
    "device_stage_files",
    "device_commit_files",
    "device_request_folder_access",
    "device_request_delete_permission",
    "create_artifact",
    "update_artifact",
    "list_artifacts",
    "project_memory_read",
    "project_memory_write",
  ],
  KZ = new Set(GZ.map((e) => ln(e))),
  jZ = new Set(["remote_cowork", "remote_cowork_trigger", "local-agent", "local_agent"]);

var mc = "NotebookEdit";

var Bt = "PowerShell";

var qZ = /[^\p{L}\p{N}._-]+/gu,
  XZ = /^[._-]+|[._-]+$/gu,
  QZ = /[\p{L}\p{N}]/u,
  JZ = 20;

var Sbn = 120,
  L3t = 512,
  Xd = 4 * L3t;

var fM = ["bypass", "prompting"],
  e9 = new Set(fM);

var mM = /^[A-Za-z0-9_-]{1,80}$/,
  n7e = 32,
  gM = 24;

var aa = "A-Za-z0-9%:_/.\\\\-",
  pM = `[0-9a-f]{${gM}}`,
  t9 = `${pM}(?:,${pM}){0,${n7e - 1}}`,
  hM = new RegExp(`^${t9}$`),
  wbn = 300,
  n9 = new RegExp(`^[${aa}]{1,${wbn}}$`);

var i9 = new RegExp(`^(?:uds|bridge|did):[${aa}]{1,200}$`);

var s9 = /^\/\S*\.sock$/,
  a9 = /^[\\/]{2}[.?][\\/]pipe[\\/]/i,
  l9 = /^\/\S*\.sock/;

var np = "reply_across_default_dirs",
  u9 = [
    /^\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/,
    /^\/private\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/,
    /^\/run\/user\/(0|[1-9]\d*)\/cc-socks$/,
    /^\/data\/data\/com\.termux\/files\/usr\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/,
  ];

var yM = "cc-msg-",
  RM = "LOCAL",
  d9 = new RegExp(`^(?:${RM}\\\\)?${yM}[0-9a-f]{32}$`, "i"),
  TM = new RegExp(`^${yM}[0-9a-f]{32}$`, "i");

var pa = 6,
  Abn = 12,
  qV = `[0-9a-f]{${pa},${Abn}}`,
  f9 = new RegExp(`^(.*\\S)\\s*\\[(${qV})\\]$`);

var _9 = DT;

var wM = "auth",
  zo = /^(\d+)\.[0-9a-f]{64}\.key$/,
  v9 = /^(\d+)\.[0-9a-f]{64}\.key\.tmp\.[0-9a-f]+$/,
  op = 16,
  O9 = /^[0-9a-f]{32}$/,
  ma = 4096,
  PM = m(() =>
    f({ peerToken: i().regex(O9), procStart: i().optional(), procStartFt: i().optional(), pidDomain: i().optional() }),
  );

var xtr = vbn("0".repeat(op * 2)).length;

class IM {
  spawned = new Set();
  cleanlyRemoved = new Set();
  recordSpawned(e) {
    this.spawned.add(e);
  }
  recordCleanlyRemoved(e) {
    this.cleanlyRemoved.add(e);
  }
  clear() {
    this.spawned.clear(), this.cleanlyRemoved.clear();
  }
}

class NM {
  currentSession = null;
  resumeHintWorktreeName = null;
  bgTakeover = null;
  agentIsolationEvidence = new IM();
  isolationUnavailableCwd = null;
  setCurrentSession(e) {
    if (((this.currentSession = e), e && !e.enteredExisting)) this.resumeHintWorktreeName = e.worktreeName;
  }
  getResumeHintWorktreeName() {
    if (this.currentSession) return this.currentSession.enteredExisting ? null : this.currentSession.worktreeName;
    return this.resumeHintWorktreeName;
  }
  clearResumeHintWorktreeName() {
    this.resumeHintWorktreeName = null;
  }
  setBgTakeover(e) {
    this.bgTakeover = e;
  }
  markIsolationUnavailable(e) {
    this.isolationUnavailableCwd = e;
  }
}

var M9 = new J(() => new NM());

var kbn = 600000,
  U3t = 3,
  B9 = 1e4,
  B3t = 1,
  j3t = "notify_idle",
  W3t = "artifact_yield";

var Ea = 262144,
  V9 = 25,
  sp = m(() =>
    T.object({
      pid: T.number(),
      sessionId: T.string(),
      cwd: T.string().optional(),
      startedAt: T.number(),
      version: T.string().optional(),
      kind: T.enum(["interactive", "bg", "daemon", "daemon-worker"]),
      entrypoint: T.string().optional(),
      pidDomain: T.string().optional(),
    }),
  );

class Ftr {
  uncleanExitsScanned = !1;
  reportedUncleanExitPaths = new Set();
  watchedCache = void 0;
  pidFileWriteChain = Promise.resolve();
  registeredName = void 0;
  formerNames = [];
  heldNames = new Map();
  registered = !1;
  bornSpare = !1;
  spareClaimPoll = void 0;
  registration = void 0;
  registrySweepPermitted = void 0;
  setRegisteredName(e, t) {
    let r = this.registeredName,
      o = Date.now(),
      u = Sr(e);
    if (r && Sr(r.name) === u) {
      this.registeredName = { name: e, source: t, since: r.since };
      return;
    }
    if (r) this.heldNames.set(Sr(r.name), r.source);
    if (
      (this.heldNames.delete(u),
      (this.formerNames = this.formerNames.filter((d) => Sr(d.name) !== u)),
      r && r.source !== "derived" && o - r.since >= B9)
    ) {
      let d = Sr(r.name);
      this.formerNames = [{ name: r.name, until: o }, ...this.formerNames.filter((_) => Sr(_.name) !== d)].slice(
        0,
        U3t,
      );
    }
    this.registeredName = { name: e, source: t, since: o };
  }
  setUncleanExitsScanned(e) {
    this.uncleanExitsScanned = e;
  }
  markUncleanExitReported(e) {
    this.reportedUncleanExitPaths.add(e);
  }
  setWatchedCache(e) {
    this.watchedCache = e;
  }
  setPidFileWriteChain(e) {
    this.pidFileWriteChain = e;
  }
  isRegistrySweepPermitted() {
    return (this.registrySweepPermitted ??= this.probeRegistrySweepPermitted()), this.registrySweepPermitted;
  }
  async probeRegistrySweepPermitted() {
    let e = D();
    if (e === "wsl") return !1;
    if (!zu() && e !== "windows" && e !== "macos") return !1;
    if (
      e === "windows" &&
      (a.CONTAINER_SANDBOX_MOUNT_POINT !== void 0 ||
        a.USERNAME === "ContainerAdministrator" ||
        a.USERNAME === "ContainerUser")
    )
      return !1;
    if (Vh.getIsBubblewrapSandbox() || Me(a.IS_SANDBOX) || (await Vh.getIsDocker())) return !1;
    return jwn();
  }
}

var iSr = new J(() => new Ftr());

var Aa = ".fleetview-heartbeat",
  BM = 5000;

var G9 = 1000;

var j9 = 1000;

var z3t = /^[A-Za-z0-9_.-]{1,64}:@?\d{1,6}\.%?\d{1,6}$/;

var kre = go({
  kind: "permission_prompt",
  payload: m(() =>
    Np((e) => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e),
  ),
  result: m(() => Np((e) => typeof e === "object" && e !== null && "behavior" in e)),
  default: { behavior: "cancelled" },
  yieldsToPanels: !0,
});

var Ra = new q9();

var vbt = new X9();

var Oa = { [Wpe]: "Bash", [NTt]: "WebFetch" };

var WM = {
  "Claude Code iOS Simulator": "mobile_simulator_ios",
  "Claude Code Android Emulator": "mobile_simulator_android",
};

var Q3t = new Set([n0]);

var J9 = 512,
  Z9 = 128,
  $M = 4096,
  Ca = 20,
  e7 = 2;

var t7 = 10;

var n7 = new Set([
    "rm",
    "mv",
    "cp",
    "touch",
    "mkdir",
    "chmod",
    "chown",
    "cat",
    "head",
    "tail",
    "sort",
    "stat",
    "diff",
    "wc",
    "grep",
    "rg",
    "sed",
  ]),
  r7 = /\s*(?:&&|\|\||[;|])\s*/,
  o7 = /\s+/;

var i7 = /\.(csv|docx?|html|json|md|od[pst]|pdf|pptx?|rtf|txt|xlsx?)\b/g;

var s7 = "mcp__cowork__present_files";

var a7 = /^\d+\.\d+\.\d+(-(?:dev|alpha|beta|rc|test|nightly|engine)(?![a-z_-])\d{0,8}(?:\.[a-z0-9.]{0,40})?)?/;

var l7 = new Set([
  "darwin",
  "linux",
  "win32",
  "freebsd",
  "openbsd",
  "netbsd",
  "android",
  "aix",
  "sunos",
  "cygwin",
  "haiku",
  "macos",
  "windows",
  "wsl",
  "unknown",
]);

var c7 = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})?$/;

class QM {
  envContext = void 0;
  prevCpuUsage = null;
  prevWallTimeMs = null;
  memPeaks = { rss: 0, heapUsed: 0, external: 0 };
}

var JM = new J(() => new QM());

var Go = _7(),
  up = "1p_failed_events.";

var E7 = 2000,
  S7 = 3000,
  T7 = 300000;

class dp {
  endpoint;
  timeout;
  maxBatchSize;
  skipAuth;
  batchDelayMs;
  baseBackoffDelayMs;
  maxBackoffDelayMs;
  maxAttempts;
  oauthRefreshTimeoutMs;
  keyHelperJoinTimeoutMs;
  isKilled;
  storageV5;
  pendingExports = [];
  isShutdown = !1;
  schedule;
  cancelBackoff = null;
  attempts = 0;
  drainPromise = null;
  queueFileLock = Promise.resolve();
  lastExportErrorContext;
  refreshAttemptedFor;
  inflightRefresh = null;
  wifMintRetryAt = 0;
  finalFlush = !1;
  signalFinalFlush = () => {};
  finalFlushSignal = new Promise((e) => {
    this.signalFinalFlush = e;
  });
  constructor(e = {}) {
    let t =
      e.baseUrl ||
      (process.env.ANTHROPIC_BASE_URL === "https://api-staging.anthropic.com"
        ? "https://api-staging.anthropic.com"
        : "https://api.anthropic.com");
    (this.endpoint = `${t}${e.path || "/api/event_logging/v2/batch"}`),
      (this.timeout = e.timeout || 1e4),
      (this.maxBatchSize = e.maxBatchSize || 200),
      (this.skipAuth = e.skipAuth ?? !1),
      (this.batchDelayMs = e.batchDelayMs || 100),
      (this.baseBackoffDelayMs = e.baseBackoffDelayMs || 500),
      (this.maxBackoffDelayMs = e.maxBackoffDelayMs || 30000),
      (this.maxAttempts = e.maxAttempts ?? 8),
      (this.oauthRefreshTimeoutMs = e.oauthRefreshTimeoutMs ?? E7),
      (this.keyHelperJoinTimeoutMs = e.keyHelperJoinTimeoutMs ?? S7),
      (this.isKilled = e.isKilled ?? (() => !1)),
      (this.storageV5 = e.storageV5),
      (this.schedule =
        e.schedule ??
        ((r, o) => {
          let u = setTimeout(r, o);
          return () => clearTimeout(u);
        })),
      this.retryPreviousBatches();
  }
  async getQueuedEventCount() {
    return (await this.loadEventsFromCurrentBatch()).length;
  }
  getCurrentBatchFilePath() {
    return Ko.join(Jn(), `${up}${K()}.${Go}.json`);
  }
  currentBatchStream() {
    return Te.log(K(), "telemetry", { runId: Go });
  }
  async loadEventsFromFile(e) {
    try {
      return await NCe(e);
    } catch {
      return [];
    }
  }
  currentBatch() {
    return O() && this.storageV5 !== void 0
      ? { kind: "stream", storageV5: this.storageV5, stream: this.currentBatchStream() }
      : { kind: "file", filePath: this.getCurrentBatchFilePath() };
  }
  async loadEventsFromCurrentBatch() {
    return this.loadEventsFromBatch(this.currentBatch());
  }
  async loadEventsFromBatch(e) {
    return e.kind === "stream" ? this.loadEventsFromStream(e.storageV5, e.stream) : this.loadEventsFromFile(e.filePath);
  }
  async deleteBatch(e) {
    return e.kind === "stream" ? this.deleteStream(e.storageV5, e.stream) : this.deleteFile(e.filePath);
  }
  async appendEventsToBatch(e, t) {
    return e.kind === "stream"
      ? this.appendEventsToStream(e.storageV5, e.stream, t)
      : this.appendEventsToFile(e.filePath, t);
  }
  async saveEventsToFile(e, t) {
    try {
      if (t.length === 0)
        try {
          await nD(e);
        } catch {}
      else {
        await eD(Jn(), { recursive: !0 });
        let r =
          t
            .map((o) => b(o))
            .join(`
`) +
          `
`;
        await g7(e, r, "utf8");
      }
    } catch (r) {
      n(`1P event logging: failed to persist failed-events batch to ${e}: ${l(r)}`, { level: "error" });
    }
  }
  async appendEventsToFile(e, t) {
    if (t.length === 0) return;
    try {
      await eD(Jn(), { recursive: !0 });
      let r =
        t
          .map((o) => b(o))
          .join(`
`) +
        `
`;
      await m7(e, r, "utf8");
    } catch (r) {
      n(`1P event logging: failed to persist failed-event queue to ${e}: ${l(r)}`, { level: "error" });
    }
  }
  async deleteFile(e) {
    try {
      return await nD(e), !0;
    } catch (t) {
      return X(t);
    }
  }
  async loadEventsFromStream(e, t) {
    let r = [],
      o = new TextDecoder(),
      u = 0;
    for (;;) {
      let d = await e.readRecords(t, { fromSeq: u, order: "forward" });
      if (!d.ok) return [];
      for (let _ of d.value.items) {
        let A = o.decode(_.data),
          C = A.endsWith(`
`)
            ? A.slice(0, -1)
            : A;
        if (!C) continue;
        try {
          r.push(V(C));
        } catch {}
      }
      if (d.value.nextSeq === void 0) return r;
      u = d.value.nextSeq;
    }
  }
  async deleteStream(e, t) {
    return (await e.delete(t)).ok;
  }
  async appendEventsToStream(e, t, r) {
    if (r.length === 0) return;
    let o = await e.append(
      t,
      r.map((u) => ({
        data:
          b(u) +
          `
`,
      })),
    );
    if (!o.ok)
      n(`1P event logging: failed to persist failed-event queue to v5 stream: ${o.error.code}`, { level: "error" });
  }
  async retryPreviousBatches() {
    if (O() && this.storageV5 !== void 0)
      try {
        return await this.retryPreviousBatchesV5(this.storageV5);
      } catch (e) {
        h(e);
        return;
      }
    try {
      let e = `${up}${K()}.`,
        t;
      try {
        t = (await tD(Jn())).filter((r) => r.startsWith(e) && r.endsWith(".json")).filter((r) => !r.includes(Go));
      } catch (r) {
        if (Ht(r)) return;
        throw r;
      }
      for (let r of t) {
        let o = Ko.join(Jn(), r);
        this.retryFileInBackground(o).catch((u) => {
          h(u);
        });
      }
    } catch (e) {
      h(e);
    }
  }
  async retryFileInBackground(e) {
    if (this.attempts >= this.maxAttempts) {
      await this.deleteFile(e);
      return;
    }
    let t = await this.loadEventsFromFile(e);
    if (t.length === 0) {
      await this.deleteFile(e);
      return;
    }
    let r = _s(t),
      o = await this.sendEventsInBatches(r, { startupRetry: !0 });
    if (o.length === 0) await this.deleteFile(e);
    else await this.saveEventsToFile(e, o);
  }
  async retryPreviousBatchesV5(e) {
    let t = K(),
      r = { namespace: "log", sessionId: t, channel: "telemetry" },
      o = [];
    switch (
      (
        await Ao(
          (d) => e.listEntries(r, d === void 0 ? void 0 : { cursor: d }),
          (d) => {
            for (let _ of d) {
              if (_.kind !== "key" || _.key.namespace !== "log") continue;
              let A = _.key;
              if (A.agentId !== void 0 || A.runId === void 0 || A.runId === Go) continue;
              o.push(A);
            }
          },
        )
      ).status
    ) {
      case "done":
        break;
      case "error":
        return;
      case "capped":
        n(
          `1P event logging: previous-batch stream listing truncated at ${ec} pages; retrying the ${o.length} streams seen`,
          { level: "warn" },
        );
        break;
    }
    for (let d of o)
      this.retryStreamInBackground(e, d).catch((_) => {
        h(_);
      });
    await this.migrateLegacyFlatBatches(
      e,
      t,
      new Set(o.flatMap((d) => (d.namespace === "log" && d.runId !== void 0 ? [d.runId] : []))),
    );
  }
  async migrateLegacyFlatBatches(e, t, r) {
    let o = `${up}${t}.`,
      u;
    try {
      u = (await tD(Jn())).filter((d) => d.startsWith(o) && d.endsWith(".json"));
    } catch (d) {
      if (Ht(d)) return;
      throw d;
    }
    for (let d of u) {
      let _ = d.slice(o.length, -5);
      if (_.length === 0 || _ === Go) continue;
      if (r.has(_)) continue;
      let A = Ko.join(Jn(), d),
        C = Te.log(t, "telemetry", { runId: _ }),
        k = await this.loadEventsFromFile(A);
      if (k.length === 0) continue;
      let M = await e.append(
        C,
        k.map((x, z) => {
          let W =
            b(x) +
            `
`;
          return { data: W, recordId: h7(z, W) };
        }),
      );
      if (!M.ok) {
        n(`1P event logging: failed to migrate flat failed-event batch to v5 stream: ${M.error.code}`, {
          level: "error",
        });
        continue;
      }
      await this.deleteFile(A),
        this.retryStreamInBackground(e, C).catch((x) => {
          h(x);
        });
    }
  }
  async retryStreamInBackground(e, t) {
    if (this.attempts >= this.maxAttempts) {
      await this.deleteStream(e, t);
      return;
    }
    let r = await this.loadEventsFromStream(e, t);
    if (r.length === 0) {
      await this.deleteStream(e, t);
      return;
    }
    let o = _s(r),
      u = await this.sendEventsInBatches(o, { startupRetry: !0 });
    if (u.length === 0) await this.deleteStream(e, t);
    else if (await this.deleteStream(e, t)) await this.appendEventsToStream(e, t, u);
  }
  async export(e, t) {
    if (this.isShutdown) {
      t({ code: yn.ExportResultCode.FAILED, error: Error("Exporter has been shutdown") });
      return;
    }
    let r = this.doExport(e, t);
    this.pendingExports.push(r),
      r.finally(() => {
        let o = this.pendingExports.indexOf(r);
        if (o > -1) this.pendingExports.splice(o, 1);
      });
  }
  async doExport(e, t) {
    try {
      let r = e.filter((d) => d.instrumentationScope?.name === "com.anthropic.claude_code.events");
      if (r.length === 0) {
        t({ code: yn.ExportResultCode.SUCCESS });
        return;
      }
      let o = this.transformLogsToEvents(r).events;
      if (o.length === 0) {
        t({ code: yn.ExportResultCode.SUCCESS });
        return;
      }
      if (this.attempts >= this.maxAttempts) {
        t({
          code: yn.ExportResultCode.FAILED,
          error: Error(`Dropped ${o.length} events: max attempts (${this.maxAttempts}) reached`),
        });
        return;
      }
      let u = await this.sendEventsInBatches(o);
      if ((this.attempts++, u.length > 0)) {
        await this.queueFailedEvents(u), this.scheduleBackoffRetry();
        let d = this.lastExportErrorContext ? ` (${this.lastExportErrorContext})` : "";
        t({ code: yn.ExportResultCode.FAILED, error: Error(`Failed to export ${u.length} events${d}`) });
        return;
      }
      this.resetBackoff(), this.retryFailedEvents(), t({ code: yn.ExportResultCode.SUCCESS });
    } catch (r) {
      h(r), t({ code: yn.ExportResultCode.FAILED, error: we(r) });
    }
  }
  async sendEventsInBatches(e, t = {}) {
    let r = [];
    for (let d = 0; d < e.length; d += this.maxBatchSize) r.push(e.slice(d, d + this.maxBatchSize));
    let o = [],
      u;
    for (let d = 0; d < r.length; d++) {
      let _ = r[d];
      try {
        await this.sendBatchWithRetry({ events: _ }, t);
      } catch (A) {
        u = b7(A);
        for (let C = d; C < r.length; C++) o.push(...r[C]);
        break;
      }
      if (d < r.length - 1 && this.batchDelayMs > 0) await ne(this.batchDelayMs);
    }
    if (o.length > 0 && u) this.lastExportErrorContext = u;
    return o;
  }
  withQueueFileLock(e) {
    let t = this.queueFileLock.then(e);
    return (
      (this.queueFileLock = t.then(
        () => {
          return;
        },
        () => {
          return;
        },
      )),
      t
    );
  }
  async queueFailedEvents(e) {
    let t = this.currentBatch();
    await this.withQueueFileLock(() => this.appendEventsToBatch(t, e));
    let r = this.lastExportErrorContext ? ` (${this.lastExportErrorContext})` : "";
    n(`1P event logging: ${e.length} events failed to export${r}`, { level: "error" });
  }
  scheduleBackoffRetry() {
    if (this.cancelBackoff || this.isShutdown) return;
    let e = Math.min(
      Math.max(this.baseBackoffDelayMs, this.baseBackoffDelayMs * this.attempts * this.attempts),
      this.maxBackoffDelayMs,
    );
    this.cancelBackoff = this.schedule(async () => {
      (this.cancelBackoff = null), await this.retryFailedEvents();
    }, e);
  }
  retryFailedEvents() {
    if (this.drainPromise) return this.drainPromise;
    return (
      (this.drainPromise = this.doRetryFailedEvents()
        .catch((e) => {
          h(e);
        })
        .finally(() => {
          this.drainPromise = null;
        })),
      this.drainPromise
    );
  }
  async doRetryFailedEvents() {
    let e = this.currentBatch();
    while (!this.isShutdown) {
      let t = await this.withQueueFileLock(async () => {
        let u = await this.loadEventsFromBatch(e);
        if (u.length === 0) return { kind: "empty" };
        if (this.attempts >= this.maxAttempts) {
          let d = await this.deleteBatch(e);
          return { kind: "dropped", count: u.length, deleted: d };
        }
        if (!(await this.deleteBatch(e))) return { kind: "unclaimable" };
        return { kind: "claimed", events: u };
      });
      if (t.kind === "empty") break;
      if (t.kind === "unclaimable") {
        this.scheduleBackoffRetry();
        return;
      }
      if (t.kind === "dropped") {
        if (!t.deleted) {
          this.scheduleBackoffRetry();
          return;
        }
        this.resetBackoff();
        return;
      }
      let r = _s(t.events),
        o = await this.sendEventsInBatches(r);
      if ((this.attempts++, o.length > 0)) {
        await this.withQueueFileLock(() => this.appendEventsToBatch(e, o)), this.scheduleBackoffRetry();
        return;
      }
      this.resetBackoff();
    }
  }
  resetBackoff() {
    if (((this.attempts = 0), this.cancelBackoff)) this.cancelBackoff(), (this.cancelBackoff = null);
  }
  async refreshExpiredOAuthTokenOnce() {
    if (!Tt() || !Wd()) return;
    let e = Yt();
    if (!e || !iN(e.expiresAt)) return;
    if (this.refreshAttemptedFor === e.accessToken) {
      if (this.inflightRefresh) await jt(this.inflightRefresh, this.oauthRefreshTimeoutMs);
      return;
    }
    this.refreshAttemptedFor = e.accessToken;
    let t = Promise.resolve()
      .then(() => Cs())
      .then(
        () => {},
        (r) => {
          n(`1P event logging: OAuth refresh before send failed: ${we(r).name}`);
        },
      )
      .finally(() => {
        if (this.inflightRefresh === t) this.inflightRefresh = null;
      });
    (this.inflightRefresh = t), await jt(t, this.oauthRefreshTimeoutMs);
  }
  shouldSkipAuthForSend(e) {
    if (this.skipAuth || !e) return !0;
    if (!Tt()) return !1;
    let t = Yt();
    if (!Wd()) return !0;
    if (t && iN(t.expiresAt)) return !0;
    return !1;
  }
  async authHeadersForSend() {
    if (!(ZS() === null && jd())) return oO();
    let { getResolvedWIFBaseUrlSnapshot: t } = await import("/$bunfs/root/chunk-s49qq1he.js"),
      r = rD(t());
    if (r === void 0 || r !== oD(this.endpoint) || !iD(this.endpoint))
      return { headers: {}, error: "workload-identity token is minted for a different host" };
    if (Date.now() < this.wifMintRetryAt)
      return { headers: {}, error: "workload-identity mint failed recently; not retried yet" };
    let o = await oO();
    if (o.error) {
      if (o.reasonCode === "wif_error") this.wifMintRetryAt = Date.now() + T7;
      return o;
    }
    if (rD(t()) !== r) return { headers: {}, error: "workload-identity resolution changed during the send" };
    return o;
  }
  async sendBatchWithRetry(e, t = {}) {
    if (this.isKilled()) throw Error("firstParty sink killswitch active");
    let r = { "Content-Type": "application/json", "User-Agent": Ka(), "x-service-name": "claude-code" },
      o = ri() || Le();
    if (o && !this.skipAuth && !this.finalFlush && !this.isShutdown && !t.startupRetry && zu())
      await this.refreshExpiredOAuthTokenOnce();
    let u = this.shouldSkipAuthForSend(o);
    if (!u && !this.isShutdown && !this.finalFlush && M$() && !Tt() && xre()) {
      let x = pnr();
      if (x) await jt(Promise.race([x.catch(() => null), this.finalFlushSignal]), this.keyHelperJoinTimeoutMs);
    }
    let d = u
        ? { headers: {}, error: "trust not established or Oauth token expired" }
        : await this.authHeadersForSend(),
      _ = !u && d.reasonCode === "no_api_key" ? (A7(this.endpoint) ?? d) : d,
      A = OEe(_, this.endpoint),
      C = !A.error,
      k = C ? { ...r, ...A.headers } : r,
      M = e3t({ url: this.endpoint, payload: e, storageV5: this.storageV5 });
    try {
      let x = await st.post(this.endpoint, M?.body ?? e, {
        timeout: this.timeout,
        headers: M ? { ...k, ...M.headers } : k,
      });
      this.logSuccess(e.events.length, C, x.data);
      return;
    } catch (x) {
      if (C && st.isAxiosError(x) && x.response?.status === 401) {
        let z = await st.post(this.endpoint, M?.body ?? e, {
          timeout: this.timeout,
          headers: M ? { ...r, ...M.headers } : r,
        });
        this.logSuccess(e.events.length, !1, z.data);
        return;
      }
      throw x;
    }
  }
  logSuccess(e, t, r) {}
  hrTimeToDate(e) {
    let [t, r] = e;
    return new Date(t * 1000 + r / 1e6);
  }
  transformLogsToEvents(e) {
    let t = [],
      r = Wc(),
      o = (_) => (typeof _ === "string" ? _ : void 0),
      u = (_) => {
        t.push({ event_type: "ClaudeCodeInternalEvent", event_data: br.toJSON(r ? Yc(_) : _) });
      },
      d = (_) => {
        t.push({ event_type: "GrowthbookExperimentEvent", event_data: yr.toJSON(r ? $c(_) : _) });
      };
    for (let _ of e) {
      let A = _.attributes || {};
      if (A.event_type === "GrowthbookExperimentEvent") {
        let ut = this.hrTimeToDate(_.hrTime),
          Ve = A.account_uuid,
          xe = A.organization_uuid;
        d({
          event_id: A.event_id,
          timestamp: ut,
          experiment_id: A.experiment_id,
          variation_id: A.variation_id,
          environment: A.environment,
          user_attributes: A.user_attributes,
          experiment_metadata: A.experiment_metadata,
          device_id: A.device_id,
          session_id: A.session_id,
          auth: Ve || xe ? { account_uuid: Ve, organization_uuid: xe } : void 0,
        });
        continue;
      }
      let C = A.event_name || _.body || "unknown",
        k = A.core_metadata,
        M = A.user_metadata,
        x = A.event_metadata || {};
      if (!k) {
        u({
          event_id: A.event_id,
          event_name: C,
          client_timestamp: this.hrTimeToDate(_.hrTime),
          session_id: K(),
          additional_metadata: Buffer.from(b({ transform_error: "core_metadata attribute is missing" })).toString(
            "base64",
          ),
        });
        continue;
      }
      let z = ZM(k, M, x),
        {
          _PROTO_skill_name: W,
          _PROTO_plugin_name: U,
          _PROTO_marketplace_name: B,
          _PROTO_mcp_server_name: F,
          _PROTO_mcp_tool_name: Q,
          _PROTO_code: ee,
          _PROTO_head_sha: de,
          _PROTO_git_remote_url: me,
          ...Ce
        } = z.additional,
        Ie = yFe(Ce);
      if (r) Ie = qc(Ie, C);
      u({
        event_id: A.event_id,
        event_name: C,
        client_timestamp: this.hrTimeToDate(_.hrTime),
        device_id: A.user_id,
        email: M?.email,
        auth: z.auth,
        ...z.core,
        env: z.env,
        process: z.process,
        skill_name: o(W),
        plugin_name: o(U),
        marketplace_name: o(B),
        mcp_server_name: o(F),
        mcp_tool_name: o(Q),
        head_sha: o(de),
        additional_metadata: Object.keys(Ie).length > 0 ? Buffer.from(b(Ie)).toString("base64") : void 0,
      });
    }
    return { events: t };
  }
  adoptInflightRefreshFrom(e) {
    this.refreshAttemptedFor ??= e.refreshAttemptedFor;
    let t = e.inflightRefresh;
    if (!t || this.inflightRefresh) return;
    (this.inflightRefresh = t),
      t.finally(() => {
        if (this.inflightRefresh === t) this.inflightRefresh = null;
      });
  }
  async beginShutdown(e = 0) {
    if (((this.finalFlush = !0), this.signalFinalFlush(), this.inflightRefresh && e > 0))
      await jt(this.inflightRefresh, e);
  }
  async shutdown() {
    (this.isShutdown = !0), this.resetBackoff(), await this.forceFlush();
  }
  async forceFlush() {
    await Promise.all(this.pendingExports);
  }
}

var y7 = "tengu_frond_boric";

var R7 = "tengu_event_sampling_config";

var lD = 2000,
  C7 = "tengu_1p_event_batch_config";

var uD = 1024;

class Ytr {
  firstPartyEventLogger = null;
  firstPartyEventLoggerProvider = null;
  firstPartyEventExporter = null;
  lastBatchConfig = null;
  retainedStorageV5 = void 0;
  preInitQueue = [];
  reinitInFlight = null;
}

var eNe = new J(() => new Ytr());

var O7 = 1e4,
  k7 = 200,
  w7 = 8192;

var M7 = pt.fetchRemoteEvalCall;

class xnr {
  client = null;
}

var ASr = new J(() => new xnr());

var dwn = "x-cc-atis";

qf(I);

n_(I);

l_(Um);

i_(Um);

Iir(I);

p_((e, t) => {
  let { value: r, source: o } = Um(e, t);
  return o === "fallback" ? void 0 : r;
});

g_(I);

Rsr(I, Yh);

var rye = m(() => f({ root: i(), primary: i().nullish() }));

var N7e = new Set([
  ".git",
  "hooks",
  ".husky",
  ".githooks",
  "node_modules",
  ".vscode",
  ".idea",
  "head",
  "config",
  "objects",
  "refs",
  ".claude",
  "skills",
  "commands",
  "agents",
  ".cargo",
  ".devcontainer",
  ".yarn",
  ".mvn",
]);

var z7 = "memory",
  F7 = "MEMORY.md";

class Pnr {
  canonicalWcRoot;
  canonicalWcRootFor;
  wcWarmPromise;
  canonicalWcRootForProject(e) {
    return this.canonicalWcRootFor === e ? this.canonicalWcRoot : void 0;
  }
  clearWcWarmLatch() {
    (this.canonicalWcRoot = void 0), (this.canonicalWcRootFor = void 0), (this.wcWarmPromise = void 0);
  }
  resolve = ai(
    () => {
      let e = fp() ?? pD();
      if (e) return e;
      let t = H$(),
        r = Ir(t, "projects"),
        o = gn(),
        d = this.canonicalWcRootForProject(o) ?? Vr(o) ?? o,
        _ = t === be() ? Cm(d) : hA(d);
      return (Ir(r, _, z7) + Ia).normalize("NFC");
    },
    () => {
      let e = gn();
      return `${e}|${M6()}|${this.canonicalWcRootForProject(e) ?? ""}`;
    },
  );
  warmCanonicalWcRoot() {
    return Promise.resolve();
  }
  reset() {
    this.resolve.cache.clear?.(), this.clearWcWarmLatch();
  }
}

var xSr = new J(() => new Pnr());

var mD = 8;

var U7e = "auto memory files are allowed for writing";

var gD = "bi1-";

var V7 = 12,
  Dnr = 86400000,
  G7 = 604800000,
  K7 = 300000;

class gp {
  cache = { config: null, mtime: 0 };
  lastReadFileStats = null;
  installed = Ue();
  cacheHits = 0;
  cacheMisses = 0;
  readingAllowed = !1;
  enableError = null;
  enableSettled = !1;
  enablePromise = null;
  reloadThroughStorageOwed = !1;
  reloadThroughStoragePromise = null;
  writeQueues = zm();
  pendingWriteCounts = new Map();
  pendingExternalRefresh = null;
  freshnessWatcherStarted = !1;
  freshnessBackend = void 0;
  freshnessSubscription = void 0;
  fileWatchFallback = !0;
  unhandedWritesInMemory = !1;
  loadedVersion = void 0;
  landedWriteCount = 0;
  freshnessResubscribed = !1;
  insideParseErrorTelemetry = !1;
  parseErrorLoggedFor = new Set();
  lastGetConfigWasParseError = !1;
  trustAccepted = !1;
  localSettingsGitTracked = void 0;
  projectPathForConfig = null;
  generatedUserID = null;
  generatedMachineID = null;
  generatedSummonSidKey = null;
  remoteControlMachineIdOnce = null;
  clientDataCacheKeyGetter = null;
  clientDataReadGate = null;
  clientDataStrictReadGate = null;
  clientDataStaleMatchGetter = null;
  useRealPipelineUnderTest = !1;
  testGlobalConfig;
  testProjectConfig;
  now;
  constructor({ now: e, testGlobalConfig: t, testProjectConfig: r }) {
    (this.now = e), (this.testGlobalConfig = t), (this.testProjectConfig = r);
  }
  readCache() {
    if (this.cache.config) this.cacheHits++;
    else this.cacheMisses++;
    return this.cache.config;
  }
  installDiskRead(e, t) {
    (this.cache = { config: e, mtime: t?.mtimeMs ?? this.now() }),
      (this.lastReadFileStats = t ? { mtime: t.mtimeMs, size: t.size } : null),
      this.installed.emit();
  }
  applyOptimistic(e) {
    this.cache = { config: e, mtime: this.now() };
  }
  writeThrough(e) {
    (this.cache = { config: e, mtime: this.now() }),
      (this.lastReadFileStats = null),
      this.landedWriteCount++,
      this.installed.emit();
  }
  get writeGeneration() {
    return this.landedWriteCount;
  }
  advanceFreshnessCursor() {
    (this.cache = { config: this.cache.config, mtime: this.now() }),
      (this.lastReadFileStats = null),
      this.landedWriteCount++;
  }
  clearCache() {
    this.cache = { config: null, mtime: 0 };
  }
  setLastReadFileStats(e) {
    this.lastReadFileStats = e;
  }
  takeCacheStats() {
    let e = { hits: this.cacheHits, misses: this.cacheMisses };
    return (this.cacheHits = 0), (this.cacheMisses = 0), e;
  }
  allowReading() {
    this.readingAllowed = !0;
  }
  enable(e) {
    if (this.enableSettled) {
      if (this.enableError !== null) return Promise.reject(this.enableError);
      return Promise.resolve();
    }
    if (!this.enablePromise) this.enablePromise = e();
    return this.enablePromise;
  }
  recordEnableError(e) {
    this.enableError = e;
  }
  markEnableSettled() {
    this.enableSettled = !0;
  }
  oweReloadThroughStorage() {
    this.reloadThroughStorageOwed = !0;
  }
  reloadThroughStorageOnce(e) {
    if (this.reloadThroughStorageOwed) (this.reloadThroughStorageOwed = !1), (this.reloadThroughStoragePromise = e());
    return this.reloadThroughStoragePromise ?? Promise.resolve();
  }
  resetEnableGate() {
    (this.readingAllowed = !1),
      (this.enableError = null),
      (this.enableSettled = !1),
      (this.enablePromise = null),
      (this.reloadThroughStorageOwed = !1),
      (this.reloadThroughStoragePromise = null),
      (this.fileWatchFallback = !0),
      (this.unhandedWritesInMemory = !1);
  }
  beginPendingWrite(e) {
    this.pendingWriteCounts.set(e, this.pendingWriteCount(e) + 1);
  }
  endPendingWrite(e) {
    let t = (this.pendingWriteCounts.get(e) ?? 1) - 1;
    if (t > 0) this.pendingWriteCounts.set(e, t);
    else this.pendingWriteCounts.delete(e);
    return t;
  }
  pendingWriteCount(e) {
    return this.pendingWriteCounts.get(e) ?? 0;
  }
  deferExternalRefresh(e) {
    this.pendingExternalRefresh = e;
  }
  takePendingExternalRefresh() {
    let e = this.pendingExternalRefresh;
    return (this.pendingExternalRefresh = null), e;
  }
  setFreshnessWatcherStarted(e) {
    this.freshnessWatcherStarted = e;
  }
  setFreshnessBackend(e) {
    (this.freshnessBackend = e), (this.freshnessResubscribed = !1);
  }
  setFreshnessSubscription(e) {
    this.freshnessSubscription = e;
  }
  setFileWatchFallback(e) {
    this.fileWatchFallback = e;
  }
  setUnhandedWritesInMemory(e) {
    this.unhandedWritesInMemory = e;
  }
  setLoadedVersion(e) {
    this.loadedVersion = e;
  }
  claimFreshnessResubscribe() {
    if (this.freshnessResubscribed) return !1;
    return (this.freshnessResubscribed = !0), !0;
  }
  setLastGetConfigWasParseError(e) {
    this.lastGetConfigWasParseError = e;
  }
  claimParseErrorLog(e) {
    if (this.parseErrorLoggedFor.has(e)) return !1;
    return this.parseErrorLoggedFor.add(e), !0;
  }
  setInsideParseErrorTelemetry(e) {
    this.insideParseErrorTelemetry = e;
  }
  clearParseErrorDedup() {
    this.parseErrorLoggedFor.clear();
  }
  setTrustAccepted(e) {
    this.trustAccepted = e;
  }
  setLocalSettingsGitTracked(e) {
    this.localSettingsGitTracked = e;
  }
  setProjectPathForConfig(e) {
    this.projectPathForConfig = e;
  }
  setGeneratedUserID(e) {
    this.generatedUserID = e;
  }
  setGeneratedMachineID(e) {
    this.generatedMachineID = e;
  }
  clearGeneratedMachineID() {
    this.generatedMachineID = null;
  }
  clearGeneratedSummonSidKey() {
    this.generatedSummonSidKey = null;
  }
  setGeneratedSummonSidKey(e) {
    this.generatedSummonSidKey = e;
  }
  remoteControlMachineIdOnceFrom(e) {
    return (this.remoteControlMachineIdOnce ??= e()), this.remoteControlMachineIdOnce;
  }
  clearRemoteControlMachineIdOnce() {
    this.remoteControlMachineIdOnce = null;
  }
  setClientDataCacheKeyGetter(e) {
    this.clientDataCacheKeyGetter = e;
  }
  setClientDataReadGate(e) {
    this.clientDataReadGate = e;
  }
  setClientDataStrictReadGate(e) {
    this.clientDataStrictReadGate = e;
  }
  setClientDataStaleMatchGetter(e) {
    this.clientDataStaleMatchGetter = e;
  }
  setUseRealPipelineUnderTest(e) {
    this.useRealPipelineUnderTest = e;
  }
  overwriteTestGlobalConfig(e) {
    Object.assign(this.testGlobalConfig, e);
  }
  overwriteTestProjectConfig(e) {
    Object.assign(this.testProjectConfig, e);
  }
  deleteTestProjectConfigFields(e) {
    for (let t of e) delete this.testProjectConfig[t];
  }
}

class AD {
  reader = null;
  register(e) {
    this.reader = e;
  }
}

var bD = new AD();

var ED = 15,
  SD = 10,
  TD = Object.freeze({
    toolSearchReminder: null,
    toolParamStrictness: !1,
    emptyInputRepair: !1,
    toolSearchFetchRule: !1,
    schemaDescFixes: !1,
  });

var $7 = import.meta.require("/$bunfs/root/chunk-3474m0yz.js"),
  pAe = {
    allowedTools: [],
    mcpContextUris: [],
    mcpServers: {},
    enabledMcpjsonServers: [],
    disabledMcpjsonServers: [],
    hasTrustDialogAccepted: !1,
    hasClaudeMdExternalIncludesApproved: !1,
    hasClaudeMdExternalIncludesWarningShown: !1,
  };

var fO = qe(),
  L = new gp({ now: Date.now, testGlobalConfig: { ...fO, autoUpdates: !1 }, testProjectConfig: { ...pAe } }),
  k4t = [
    "apiKeyHelper",
    "installMethod",
    "autoUpdates",
    "autoUpdatesProtectedForNative",
    "theme",
    "verbose",
    "preferredNotifChannel",
    "shiftEnterKeyBindingInstalled",
    "editorMode",
    "hasUsedBackslashReturn",
    "autoCompactEnabled",
    "autoScrollEnabled",
    "showTurnDuration",
    "externalEditorContext",
    "showMessageTimestamps",
    "diffTool",
    "env",
    "tipsHistory",
    "todoFeatureEnabled",
    "showExpandedTodos",
    "briefTranscript",
    "diffSidebarOpen",
    "messageIdleNotifThresholdMs",
    "autoConnectIde",
    "autoInstallIdeExtension",
    "fileCheckpointingEnabled",
    "terminalProgressBarEnabled",
    "showStatusInTerminalTab",
    "taskCompleteNotifEnabled",
    "inputNeededNotifEnabled",
    "agentPushNotifEnabled",
    "respectGitignore",
    "claudeInChromeDefaultEnabled",
    "hasCompletedClaudeInChromeOnboarding",
    "lspRecommendationDisabled",
    "lspRecommendationNeverPlugins",
    "lspRecommendationIgnoredCount",
    "copyFullResponse",
    "copyOnSelect",
    "leftArrowOpensAgents",
    "defaultToAgentsView",
    "permissionExplainerEnabled",
    "prStatusFooterEnabled",
    "remoteControlAtStartup",
    "autoUploadSessions",
    "autoAddRemoteControlDaemonWorker",
    "remoteDialogSeen",
    "workflowSizeGuideline",
  ];

var ISr = ["allowedTools", "hasTrustDialogAccepted"];

var Tp = "\x00external-refresh";

FAe(Unr);

vt(async () => {
  tee();
});

var PD = 1000;

var oee = { policySettings: "policy", flagSettings: "flag", userSettings: "user" };

var xD = 60000,
  LD = 5;

var lee = 3;

var jD = `The corrupted file has already been backed up.
`;

var kp = /^[0-9a-f]{64}$/;

var _ee = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

var rkr = il,
  okr = At,
  ikr = Qo,
  skr = bp,
  akr = ID,
  lkr = ND,
  ckr = Xa,
  ukr = Cp,
  dkr = Va;

var bkr = BD,
  wkr = qo,
  Tkr = Ja,
  Ekr = Nr;

var kkr = Ae,
  Hkr = Ybt,
  xkr = jc,
  Ikr = ie,
  Pkr = ci,
  Dkr = gAe,
  Okr = xa,
  Lkr = L.testGlobalConfig;

yD(() => $l());

e_(() => $l());

var LSr = "https://http-intake.logs.us5.datadoghq.com/api/v2/logs",
  O4t = "pubea5604404508cdd34afb69e6f42a05bc",
  hee = 15000,
  Eee = 100,
  See = 5000,
  MSr = new Set([
    "tengu_feature_ok",
    "tengu_feature_bad",
    "tengu_feature_sad",
    "tengu_teleport_menu",
    "chrome_bridge_connection_succeeded",
    "chrome_bridge_connection_failed",
    "chrome_bridge_disconnected",
    "chrome_bridge_tool_call_completed",
    "chrome_bridge_tool_call_error",
    "chrome_bridge_tool_call_started",
    "chrome_bridge_tool_call_timeout",
    "tengu_api_error",
    "tengu_api_fallback_last_resort",
    "tengu_api_success",
    "tengu_artifact_disabled_session",
    "tengu_artifact_reject_breaker",
    "tengu_auto_mode_decision",
    "tengu_auto_mode_denial_limit_exceeded",
    "tengu_auto_mode_fallback_to_ask",
    "tengu_auto_mode_malformed_tool_input",
    "tengu_auto_mode_env_onboarding_accept",
    "tengu_auto_mode_env_onboarding_dismiss",
    "tengu_auto_mode_env_onboarding_later",
    "tengu_auto_mode_env_onboarding_shown",
    "tengu_auto_mode_outcome",
    "tengu_auto_mode_setup_wizard_answers",
    "tengu_auto_mode_setup_wizard_resolved",
    "tengu_auto_mode_setup_wizard_shown",
    "tengu_auto_mode_subsequent_approval",
    "tengu_bridge_token_absence_classified",
    "tengu_brief_mode_enabled",
    "tengu_brief_mode_toggled",
    "tengu_brief_send",
    "tengu_cancel",
    "tengu_compact_failed",
    "tengu_copper_lantern",
    "tengu_exit",
    "tengu_flicker",
    "tengu_headless_mcp_prewait",
    "tengu_init",
    "tengu_mcp_degraded",
    "tengu_mcp_list_changed",
    "tengu_mcp_listen_reopen",
    "tengu_mcp_sdk_generation",
    "tengu_mcp_server_connection_failed",
    "tengu_mcp_server_connection_succeeded",
    "tengu_mcp_tools_refreshed_mid_turn",
    "tengu_mcp_tripwire",
    "tengu_model_fallback_triggered",
    "tengu_live_model_switch",
    "tengu_refusal_fallback_triggered",
    "tengu_refusal_fallback_prompt_shown",
    "tengu_refusal_fallback_prompt_choice",
    "tengu_refusal_fallback_setting_changed",
    "tengu_refusal_fallback_suppressed",
    "tengu_refusal_fallback_dialog_suppressed",
    "tengu_refusal_fallback_supersedes",
    "tengu_refusal_fallback_route_declined",
    "tengu_refusal_fallback_notice_collapsed",
    "tengu_convolute_arcades_retry",
    "tengu_convolute_arcades_retry_outcome",
    "tengu_rotunda_pennant_applied",
    "tengu_rotunda_pennant_malformed",
    "tengu_rotunda_pennant_strip",
    "tengu_rotunda_pennant_credit_echoed",
    "tengu_rotunda_pennant_tools",
    "tengu_rotunda_pennant_chain_exhausted",
    "tengu_rotunda_pennant_esc",
    "tengu_refusal_retraction_evicted",
    "tengu_refusal_retraction_late_drop",
    "tengu_refusal_retraction_history_dropped",
    "tengu_refusal_retraction_orphan_tool_result",
    "tengu_refusal_retraction_truncation_harvest",
    "tengu_refusal_retraction_unauthenticated_signal",
    "tengu_oauth_error",
    "tengu_oauth_success",
    "tengu_oauth_token_refresh_failure",
    "tengu_oauth_token_refresh_success",
    "tengu_oauth_token_refresh_lock_acquiring",
    "tengu_oauth_token_refresh_lock_acquired",
    "tengu_oauth_token_refresh_starting",
    "tengu_oauth_token_refresh_completed",
    "tengu_oauth_token_refresh_lock_releasing",
    "tengu_oauth_token_refresh_lock_released",
    "tengu_ptl_surfaced_to_user",
    "tengu_query_error",
    "tengu_remote_tool_targets",
    "tengu_sdk_oauth_refresh_unfulfilled",
    "tengu_rc_pill_clicked",
    "tengu_ccr_init_park_report",
    "tengu_pending_action_republished",
    "tengu_resume_interrupted_turn",
    "tengu_resume_parked_permission",
    "tengu_resume_stale_prompt_cancel",
    "tengu_request_user_dialog_implicit_cancel",
    "tengu_request_user_dialog_late_answer",
    "tengu_request_user_dialog_requires_action",
    "tengu_request_user_dialog_response_ignored",
    "tengu_request_user_dialog_timeout",
    "tengu_review_remote_teleport_failed",
    "tengu_supported_dialog_kinds_restored",
    "tengu_sdk_init_handshake",
    "tengu_sdk_mcp_false_unavailable",
    "tengu_sdk_result",
    "tengu_shutdown_pending_state",
    "tengu_sdk_schema_violation",
    "tengu_sdk_session_crash",
    "tengu_sdk_stall",
    "tengu_sdk_ttft",
    "tengu_session_file_read",
    "tengu_started",
    "tengu_tool_use_error",
    "tengu_tool_use_granted_in_prompt_permanent",
    "tengu_transcript_write_failed",
    "tengu_transcript_writer_recovered",
    "tengu_persistence_suppressed",
    "tengu_tool_use_granted_in_prompt_temporary",
    "tengu_tool_use_rejected_in_prompt",
    "tengu_tool_use_success",
    "tengu_bash_tool_command_executed",
    "tengu_bash_tool_command_failed",
    "tengu_uncaught_exception",
    "tengu_uncaught_exception_loop",
    "tengu_unhandled_rejection",
    "tengu_voice_recording_started",
    "tengu_voice_toggled",
    "tengu_vscode_sdk_stream_ended_no_result",
    "tengu_team_mem_sync_started",
    "tengu_timer",
    "tengu_bg_adopt",
    "tengu_bg_agent_action",
    "tengu_bg_agent_dispatch",
    "tengu_bg_agent_notification",
    "tengu_bg_agent_terminal",
    "tengu_bg_attach",
    "tengu_bg_attach_first_frame",
    "tengu_bg_attach_legacy_autorespawn",
    "tengu_bg_attach_outcome",
    "tengu_bg_classify",
    "tengu_bg_daemon_cold_start_ask",
    "tengu_bg_daemon_cold_start_ask_answer",
    "tengu_bg_daemon_install",
    "tengu_bg_daemon_service_poll_fallthrough",
    "tengu_bg_daemon_service_stale_exec",
    "tengu_bg_daemon_spawn_failed",
    "tengu_bg_daemon_wmi_fallback",
    "tengu_bg_daemon_zombie_false_positive",
    "tengu_bg_daemon_zombie_restart",
    "tengu_bg_dispatch",
    "tengu_bg_dispatch_fallback",
    "tengu_bg_dispatch_low_mem",
    "tengu_bg_dispatch_rescued",
    "tengu_bg_dispatch_sigkill_escalate",
    "tengu_bg_dispatch_stale_drop",
    "tengu_bg_exec_no_lastline",
    "tengu_bg_killjob_ctrl_fallback",
    "tengu_bg_orphan_reap",
    "tengu_bg_proto_mismatch",
    "tengu_bg_pty_unavailable",
    "tengu_bg_reply_outcome",
    "tengu_bg_respawn",
    "tengu_bg_respawn_downgrade_refused",
    "tengu_bg_respawn_exhausted",
    "tengu_bg_respawn_resume_conflict",
    "tengu_bg_prewarm_burst",
    "tengu_bg_respawn_stale",
    "tengu_bg_respawn_unconfirmed_bail",
    "tengu_bg_retired",
    "tengu_bg_roster_parse_failed",
    "tengu_bg_skew_nudge",
    "tengu_bg_spare_claim",
    "tengu_bg_spare_claim_fail",
    "tengu_bg_spare_spawn",
    "tengu_bg_worker_exit",
    "tengu_bg_worker_spawn",
    "tengu_daemon_cold_start_prompt",
    "tengu_daemon_config_reload",
    "tengu_daemon_exit",
    "tengu_daemon_idle_exit",
    "tengu_daemon_install_prompt_answer",
    "tengu_daemon_lease",
    "tengu_daemon_peer_uid_reject",
    "tengu_daemon_self_restart_on_upgrade",
    "tengu_daemon_start",
    "tengu_daemon_startup_crash",
    "tengu_daemon_upgrade_refused_stale_binary",
    "tengu_daemon_worker_crash",
    "tengu_daemon_worker_permanent_exit",
    "tengu_daemon_yield",
    "tengu_daemon_yield_takeover",
  ]),
  Tee = [
    "arch",
    "attach_cold",
    "daemon_booted",
    "first_frame_kind",
    "surface",
    "via",
    "classifierModel",
    "classifierStage",
    "clientType",
    "decision",
    "entrypoint",
    "errorKind",
    "errorType",
    "failureKind",
    "fastPath",
    "sessionKind",
    "http_status_range",
    "http_status",
    "model",
    "op",
    "outcome",
    "platform",
    "provider",
    "reason",
    "coachMode",
    "server_reason",
    "server_type",
    "source",
    "subscriptionType",
    "toolName",
    "userBucket",
    "userType",
    "version",
    "versionBase",
    ...[],
  ];

var Aee = [
    "mcpServerName",
    "mcpServerBaseUrl",
    "toolUseContentLengths",
    "errorMessageHash",
    "mcpServerKeyHash",
    "mcpToolName",
    "attributionMcpServer",
    "attributionMcpTool",
    "attributionSkill",
    "attributionMcpServerHash",
    "attributionMcpToolHash",
    "attributionSkillHash",
    "attributionAgentHash",
    "attributionPluginHash",
    "toolNameHash",
    "errorDetailsHash",
    "mcp_server_sha12",
    "rh",
    "baseUrl",
    "skill_name_hash",
    "plugin_id_hash",
    "plugin_name_redacted",
    "marketplace_name_redacted",
    "skill_name_hashes",
    "parent_skill_name_hash",
    "item_name_hash",
  ],
  bee = new Set(Aee.map(sl));

var $Sr = [
  "tengu_mcp_list_changed",
  "tengu_mcp_degraded",
  "tengu_mcp_server_connection_succeeded",
  "tengu_mcp_server_connection_failed",
  "tengu_mcp_listen_reopen",
];

var yee = 10,
  Ree = 60000,
  Cee = 200;

var Oee = 30;

class jnr {
  datadogInitialized = null;
  sender = D4t({ maxBatchSize: Eee, getFlushIntervalMs: kee, post: vee });
  initializeDatadog = ai(async () => {
    if (zh() || JO()) return (this.datadogInitialized = !1), !1;
    try {
      return (this.datadogInitialized = !0), !0;
    } catch (e) {
      return h(e), (this.datadogInitialized = !1), !1;
    }
  });
  getUserBucket = ai(() => {
    let e = t0(),
      t = gee("sha256").update(e).digest("hex");
    return parseInt(t.slice(0, 8), 16) % Oee;
  });
  peerRateWindows = new Map();
}

var Pwn = new J(() => new jnr());

var Mee = m(() =>
  T.object({
    account: T.object({ uuid: T.string(), email: T.string() }).passthrough(),
    organization: T.object({ uuid: T.string() }).passthrough(),
  }).passthrough(),
);

var Dee = 86400000,
  Iee = 2592000000;

var Nee = new Map([
  ["claude_max", "max"],
  ["claude_pro", "pro"],
  ["claude_enterprise", "enterprise"],
  ["claude_team", "team"],
]);

var xee = new Set(["invalid_client", "invalid_scope", "unauthorized_client"]);

var Lee = [
  "Refresh token expired",
  "Refresh token not found or invalid",
  "No organization associated with this token",
  "No account associated with this token",
  _Ce,
];

var Uee = "could not be found in the keychain";

var zee = 15000;

class sN {
  status = { isAuthenticating: !1, output: [] };
  changed = Ue();
  dismissTimer = null;
  static getInstance() {
    return Bee();
  }
  getStatus() {
    return { ...this.status, output: [...this.status.output] };
  }
  startAuthentication() {
    this.clearDismissTimer(), (this.status = { isAuthenticating: !0, output: [] }), this.changed.emit(this.getStatus());
  }
  addOutput(e) {
    this.status.output.push(e), this.changed.emit(this.getStatus());
  }
  setError(e) {
    (this.status.error = e), this.changed.emit(this.getStatus());
  }
  endAuthentication(e) {
    if ((this.clearDismissTimer(), e)) this.status = { isAuthenticating: !1, output: [] };
    else
      (this.status.isAuthenticating = !1),
        (this.dismissTimer = setTimeout(() => this.dismiss(), zee)),
        this.dismissTimer.unref?.();
    this.changed.emit(this.getStatus());
  }
  dismiss() {
    this.clearDismissTimer(), (this.status = { isAuthenticating: !1, output: [] }), this.changed.emit(this.getStatus());
  }
  subscribe = this.changed.subscribe;
  clearDismissTimer() {
    if (this.dismissTimer !== null) clearTimeout(this.dismissTimer), (this.dismissTimer = null);
  }
}

var Fee = new J(() => new sN());

var Wee = new Set(["localhost", "127.0.0.1", "[::1]"]);

var Yee = new Set(["claude.fedstart.com", "claude.palantirfedstart.com"]);

var jbn = "http-loopback";

var _7e = "gateway TLS pin store refused: the credentials file is a symlink",
  nNe = "gateway TLS pin store unreadable: the credentials file could not be read";

var Pbt = "gateway TLS certificate does not match the pinned fingerprint";

var qee = 300000,
  Wbn = m(() => T.object({ access_token: T.string(), expires_in: T.number(), refresh_token: T.string().nullish() }));

var nte = 300000,
  fI = 30000,
  rte = 16384;

var _I =
  "Background agents and teammates are not supported for this credential kind. Run this from the main session, or switch the desktop app to a profile-based or API-key credential. If this is the main session, restart the desktop app.";

var ite = m(() => T.object({ accessToken: T.string().min(1), expiresAt: T.string() })),
  ste = /^[a-z0-9-]{1,32}$/,
  gI = pU(async (e, t, r) => {
    let { loadSharedConfigFiles: o } = await import("/$bunfs/root/chunk-wc0e60ad.js").then((m) => j(m.default, 1)),
      { configFile: u, credentialsFile: d } = await o({ configFilepath: e, filepath: t ?? e, ignoreCache: !0 }),
      _ = u[r ?? "default"],
      A = d[r ?? "default"],
      C = { ..._, ...A },
      k = C.sso_account_id,
      M = C.sso_role_name;
    if (!_ || !k || !M) return null;
    if (
      (C.aws_access_key_id && C.aws_secret_access_key) ||
      C.credential_process ||
      C.role_arn ||
      C.source_profile ||
      C.credential_source ||
      C.web_identity_token_file
    )
      return null;
    let x = C.sso_session ? u[`sso-session.${C.sso_session}`] : C,
      z = x?.sso_start_url,
      W = x?.sso_region;
    if (!z || !W || !ste.test(W)) return null;
    if (C.sso_session && ((C.sso_start_url && C.sso_start_url !== z) || (C.sso_region && C.sso_region !== W)))
      return null;
    return { cacheId: C.sso_session ?? z, accountId: k, roleName: M, region: W };
  }),
  hI = bR(gI.cache),
  EI = pU(
    async (e, t, r, o) => {
      let u;
      try {
        u = V(await Zee(e, "utf-8"));
      } catch {
        return null;
      }
      let d = ite().safeParse(u);
      if (!d.success) return null;
      let _ = Date.parse(d.data.expiresAt);
      if (!Number.isFinite(_) || _ <= Date.now()) return null;
      let [{ SSOClient: A, GetRoleCredentialsCommand: C }, k] = await Promise.all([
          import("/$bunfs/root/chunk-v0x2rwea.js"),
          XY({ url: `https://portal.sso.${o}.amazonaws.com`, requestTimeoutMs: lpe }),
        ]),
        M = new A({ region: o, requestHandler: k ?? new dl.FetchHttpHandler({ requestTimeout: lpe }) }),
        { roleCredentials: x } = await fnr(
          M.send(new C({ accessToken: d.data.accessToken, accountId: t, roleName: r })),
        );
      if (!x?.accessKeyId || !x.secretAccessKey || !x.sessionToken || !x.expiration) return null;
      return {
        accessKeyId: x.accessKeyId,
        secretAccessKey: x.secretAccessKey,
        sessionToken: x.sessionToken,
        expiration: new Date(x.expiration),
      };
    },
    (e) => Vp(e?.expiration?.getTime()),
    (e, t) => {
      if (e === null) return !1;
      if (e.expiration === void 0) return !0;
      let r = e.expiration.getTime();
      if (r > Date.now() + pl) return !0;
      return t >= r - pl && r > Date.now();
    },
  ),
  SI = bR(EI.cache);

var TI = ai(() => {
    n(
      `An Anthropic profile (~/.config/anthropic) is configured, but a claude.ai login exists \u2014 using the claude.ai login. Set ANTHROPIC_PROFILE=<name> to use the profile instead.${""}`,
      { level: "warn" },
    ),
      queueMicrotask(() => s("tengu_wif_implicit_profile_skipped_stored_login", {}));
  }),
  AI = ai(() => {
    let e = cb() ?? "profile";
    n(
      `Using Anthropic profile auth (${e}); ${bYe() ? "a claude.ai login (/login) would take precedence over it" : "this takes precedence over any stored claude.ai login"}`,
      { level: "info" },
    );
  });

var T7e = new Set(["claude-desktop", "local-agent", "claude-vscode"]);

var rI = new WeakMap();

var v7e = new J(() => ({ cache: null, inflight: null, epoch: 0, lastFailure: null }));

var dte = 3600000,
  iI = 300000,
  pte = 60000,
  fte = 30000,
  ul = null,
  er = null,
  Ip = 0;

async function _te() {
  let e = KV(),
    t = Ip;
  if (!e) return !1;
  if (spe()) {
    if (!ri() && !Le()) {
      let o = Error(
        `Security: awsAuthRefresh executed before workspace trust is confirmed. If you see this message, post in ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.252", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-08-31T16:02:57Z", GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.FEEDBACK_CHANNEL}.`,
      );
      return wj("awsAuthRefresh invoked before trust check", o), s("tengu_awsAuthRefresh_missing_trust", {}), !1;
    }
  }
  if (er) return er;
  try {
    return (
      n("Fetching AWS caller identity for AWS auth refresh command"),
      await xrr(),
      n("Fetched AWS caller identity, skipping AWS auth refresh command"),
      !1
    );
  } catch {
    if (er) return er;
    if (ul !== null && Date.now() - ul < fte) return !1;
    return (
      (er = (async () => {
        try {
          return await Nbt(e);
        } finally {
          if (t === Ip) ul = Date.now();
          er = null;
        }
      })()),
      er
    );
  }
}

var sI = 180000;

var uO = pU(
  async () => {
    let e = performance.now();
    n("[API:auth] AWS credential resolve start");
    let t = await _te(),
      r = await mte();
    if (t) await Irr(), aR.cache.clear();
    return n(`[API:auth] AWS credential resolve done in ${Math.round(performance.now() - e)}ms`), r;
  },
  (e) => Vp(e?.expiration),
);

var pl = 30000,
  lpe = 30000;

var aR = WAt(async (e) => {
  let t = pU(
    async () => {
      n(`[API:auth] resolving default AWS provider chain (region: ${e})`);
      let [{ fromNodeProviderChain: r }, o] = await Promise.all([
          import("/$bunfs/root/chunk-dbfgsxg1.js"),
          XY({ url: Soe(e), requestTimeoutMs: lpe }),
        ]),
        u = r({
          ignoreCache: !0,
          parentClientConfig: { region: e, requestHandler: o ?? new dl.FetchHttpHandler({ requestTimeout: lpe }) },
          clientConfig: { requestHandler: o ?? new dl.FetchHttpHandler({ requestTimeout: lpe }) },
        });
      return fnr(u());
    },
    (r) => Vp(r.expiration?.getTime()),
    (r, o) => {
      if (r.expiration === void 0) return !0;
      let u = r.expiration.getTime();
      if (u > Date.now() + pl) return !0;
      return o >= u - pl && u > Date.now();
    },
  );
  return () => t();
}, yI);

var gte = 1e4,
  xp = bR(new Map());

function aAe() {
  (ul = null), Ip++;
}

var hte = 5000;

var Ete = 3600000;

var Tte = 180000;

var mnr = new J(() => pU(async () => await Ste(), Ete));

class RI {
  value = void 0;
  promise = null;
  clear() {
    (this.value = void 0), (this.promise = null);
  }
}

var mSr = new J(() => new RI());

var Zo = new Set(),
  Lr = new Set(),
  yte = 32;

var Jo = new Map();

var Rte = ["user:inference", "user:ccr_inference", "user:file_upload"];

class PI {
  value = void 0;
  promise = null;
  lastCredentialsMtimeMs = 0;
  lastCredentialsVersion = void 0;
  lastKeychainAccessToken = null;
  pending401Handlers = new Map();
  pendingRefreshChecks = { bare: null, store: null, backend: null };
  clear() {
    (this.value = void 0), (this.promise = null);
  }
  resetChangeCheck() {
    (this.lastCredentialsMtimeMs = 0), (this.lastCredentialsVersion = void 0), (this.lastKeychainAccessToken = null);
  }
}

var upe = new J(() => new PI());

var fl = ["bare", "store", "backend"];

class FI {
  firstUnrecoveredAtMs = null;
}

var hnr = new J(() => new FI());

var uI = 7500;

class dpe extends Error {
  constructor(e) {
    super(`Lock acquisition failed after ${e} attempts: another process is refreshing`);
    this.name = "OAuthRefreshLockContendedError";
  }
}

var Mte = 5;

var BI = new Set([
  "stripe_subscription",
  "stripe_subscription_contracted",
  "stripe_subscription_enterprise_self_serve",
  "aws_marketplace",
  "c4e_consumption_trial",
  "apple_subscription",
  "google_play_subscription",
]);

var Dte = /^[a-z][a-z0-9_]{0,63}$/;

var own = new J(() => ({ cache: null, timestamp: 0, inflight: null, lastFailure: null })),
  Ite = 1740000;

var cN = ["EACCES", "EPERM", "EBUSY", "EIO", "EISDIR", "ELOOP"],
  Lte = new RegExp(`\\b(${cN.join("|")})\\b`);

class uN extends Error {}

var b6 = "cron",
  dN = new Ute();

export { $6, $7, $M, $N, $Sr, $X, $de, $n, A3, AI, AN, ASn, ASr, AX, Aa, Abn, Aer, B2, B3t, B4, BI, BM, BX, Bc, Bde, Bt, C3, C7, CSn, CX, CZ, Ca, Cee, Cer, Cr, D3t, DSt, DV, DX, DZ, Dee, Dk, Dkr, Dnr, Dte, Dx, ED, EI, EMe, ESn, EX, EY, Ea, Ekr, Eo, F7, F8e, FSn, FX, FZ, Fde, Fee, Ftr, G6, G7, G9, GEe, GI, GN, GP, Gc, Gk, Gx, H8e, HMe, HX, HZ, Hkr, Hl, I3t, I4, I8e, ISr, Iee, Ik, Ikr, Ite, Ix, J3, J4, J6, J9, J9t, JM, JN, JP, JX, JZ, Jo, Jp, K2, K6, K7, KN, KX, KZ, Kk, Kt, Kw, Kx, L, L3t, LD, LEe, LSr, LSt, LV, LX, LZ, Lee, Lkr, Lr, Lte, Lw, M7, M8e, M9, MSr, MX, MZ, Ma, Mee, Mt, Mte, Mx, N7e, N8e, NN, Nee, Nx, O4, O4t, O7, OSt, OZ, Oa, Okr, P3t, P4, P8e, PD, PM, PN, PV, PX, Pbt, Pkr, Pnr, Pwn, Px, Q3t, Q4, Q6, QP, QX, QZ, Qc, Qe, Qf, R3t, R7, RM, RSn, RZ, Ra, Ree, Rl, Ro, Rte, S3, SD, SI, SQ, SSn, SX, Sbn, See, T4, T7e, TD, TI, TM, TMe, TSn, TX, Tee, Tkr, Tp, Ts, Tte, U3t, U4, U7e, UX, UZ, Ude, Uee, Ux, V4, V6, V7, V8e, V9, VN, VZ, Vh, Vk, Vl, Vt, W3t, W6, WM, WN, WX, Wbn, Wee, Wl, Ws, Ww, X6, XEe, XX, XZ, Xd, Xk, Xl, Y3, Y9t, YN, YX, Yd, Yee, Ytr, Yw, Z3, Z6, Z8e, Z9, Zc, Ze, Zo, Zr, _6, _7e, _9, _I, _Q, _ee, _t, _tr, a7, a9, aAe, aR, aZ, a_, aa, abn, abt, ak, akr, ar, as, atr, b6, bD, bMe, bN, bSn, bX, bee, bkr, br, bt, c3, c4, c7, cM, cN, cX, cbt, ck, ckr, d9, dN, dZ, dkr, dp, dpe, dte, dwn, e7, e9, eNe, eZ, f6, f9, fI, fM, fO, fQ, fX, fi, fk, fl, ftr, g$, gD, gI, gM, gN, gQ, gRr, gX, gbn, gbt, ge, gl, gre, gte, gx, h3, hI, hM, hX, hbn, hbt, hee, hnr, hte, i3, i3t, i7, i9, iI, iM, iO, iQ, iSr, iX, ibn, ibt, ii, ikr, ir, j2, j3t, j4, j6, j9, jD, jN, jZ, jbn, jn, jnr, jw, jx, k3t, k4, k4t, k7, k8e, kMe, kX, kY, kZ, kbn, ker, kkr, knr, kp, kre, l7, l9, lD, lX, lbn, lbt, lee, lkr, lpe, lr, ls, ltr, lw, m6, mD, mM, mSr, m_, ma, mbn, mbt, mc, ml, mnr, mtr, mx, n3, n3t, n4, n7, n7e, n9, nNe, nX, nk, np, nte, o4, o6, o7, oM, oX, o_, obn, obt, oee, okr, op, ow, own, p4, p6, pAe, pX, pZ, pa, pbt, pg, pk, pt, pte, q6, q8e, qN, qV, qX, qZ, qee, r4, r6, r7, rI, rO, rQ, rR, rkr, rte, s4t, s6, s7, s9, sD, sI, sM, sN, sQ, sX, sZ, sbn, sbt, sk, skr, sp, sr, sw, t3, t6, t7, tJ, tQ, tbt, tf, u3, u9, uD, uI, uN, uO, uX, ukr, upe, uy, v3, v3t, v7e, v9, vH, vSn, vbt, vk, vo, vr, vs, w3, w4, w7, wM, wMe, wSn, wZ, wbn, wi, wk, wkr, x8e, xD, xSr, xSt, xX, xee, xk, xkr, xnr, xp, xtr, xx, y3, y7, ySn, yX, yZ, yee, yr, yte, z3t, zI, zMe, zX, zZ, zl, zo, zs, zx };
