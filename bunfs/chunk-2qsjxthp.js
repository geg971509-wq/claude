// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { st } from "/$bunfs/root/chunk-qcx34e4j.js";
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { zt } from "/$bunfs/root/chunk-qm65zb83.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { c, ke } from "/$bunfs/root/chunk-4xj01xwv.js";
import { l, E, os } from "/$bunfs/root/chunk-ypdw393e.js";
import { Yoe, Ge, vt, b, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { oO, jd, N3, Fl, zbn, qg, oS, Yt, sNe, Tt } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { M$ } from "/$bunfs/root/chunk-82w4mtvq.js";
import { z9t, cSn, ger, her, HEe, uSn, CSt, xEe, hC, IEe, vSt, V9t, K9t, lw } from "/$bunfs/root/chunk-fs02hzwy.js";
import { rSn } from "/$bunfs/root/chunk-nkf7ctf5.js";
import { kV } from "/$bunfs/root/chunk-976texjq.js";
import { Ka } from "/$bunfs/root/chunk-fxb0gsq0.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { createHash as F } from "crypto";
import { statSync as x } from "fs";
import { unlink as B, utimes as W, writeFile as D } from "fs/promises";
function B9t(e, t, i = {}) {
  let r = setInterval(e, t);
  if (i.unref) r.unref?.();
  return { [Symbol.dispose]: () => clearInterval(r) };
}
var M = 1e4,
  S = 5,
  U = 3600000,
  H = 30000,
  Xyn = 5000,
  Yyr = 86400000;
function R() {
  try {
    return Math.max(0, Date.now() - x(xEe()).mtimeMs);
  } catch {
    return;
  }
}
var w = Date.now();
function V() {
  return `${zt().BASE_API_URL}/api/claude_code/policy_limits`;
}
function v(e) {
  if (Array.isArray(e)) return e.map(v);
  if (e !== null && typeof e === "object") {
    let t = {};
    for (let [i, r] of Object.entries(e).sort(([a], [d]) => a.localeCompare(d))) t[i] = v(r);
    return t;
  }
  return e;
}
function N(e) {
  let t = v(e),
    i = b(t);
  return `sha256:${F("sha256").update(i).digest("hex")}`;
}
function E8e() {
  return hC() && vSt() === null;
}
function K() {
  let e = null;
  try {
    e = qg({ skipRetrievingKeyFromApiKeyHelper: true }).key;
  } catch {}
  if (!e && jd()) return "wif";
  if (Tt() && Yt()?.accessToken) return "oauth";
  return e ? "api_key" : "oauth";
}
async function Y(e, t) {
  let i = null;
  for (let r = 1; r <= S + 1; r++) {
    if (((i = await j(e, t)), (i.attempts = r), i.success || i.skipRetry || r > S)) return i;
    let a = kV(r);
    n(`Policy limits: Retry ${r}/${S} after ${a}ms`), await ne(a);
  }
  return i;
}
async function j(e, t) {
  let i;
  try {
    i = await sNe({ credentials: t });
    let r = await oO();
    if (r.error)
      return {
        success: false,
        error: "Authentication required for policy limits",
        errorCode: "auth_failed",
        authUnavailableReason: r.reasonCode,
        tokenRefreshOutcome: i,
        skipRetry: true,
      };
    let a = V(),
      d = { ...r.headers, "User-Agent": Ka() };
    if (e) d["If-None-Match"] = `"${e}"`;
    let u = await st.get(a, { headers: d, timeout: M, validateStatus: (o) => o === 200 || o === 304 || o === 404 });
    if (u.status === 304)
      return n("Policy limits: Using cached restrictions (304)"), { success: true, response: null, etag: e };
    if (u.status === 404)
      return n("Policy limits: No restrictions found (404)"), { success: true, response: cSn, etag: void 0 };
    let m = z9t().safeParse(u.data);
    if (!m.success) {
      let o = z(m.error.issues[0]?.path[0]),
        _ = (u.headers["content-type"] ?? "").toString().toLowerCase(),
        h = q.find(([C]) => _.includes(C))?.[1] ?? "other";
      return (
        n(`Policy limits: Invalid response format - field=${o} ct=${h} - ${m.error.message}`),
        {
          success: false,
          error: "Invalid policy limits format",
          errorCode: "parse_failed",
          parseErrorField: o,
          parseErrorContentType: h,
        }
      );
    }
    return n("Policy limits: Fetched successfully"), { success: true, response: m.data };
  } catch (r) {
    let { kind: a, status: d, message: u } = os(r),
      m = Jyr(r);
    switch ((n(`Policy limits: fetch failed (${a}${d ? ` ${d}` : ""}) \u2014 ${u}`), a)) {
      case "auth":
        return {
          success: false,
          error: "Not authorized for policy limits",
          errorCode: "auth_failed",
          httpStatus: d,
          tokenRefreshOutcome: i,
          skipRetry: true,
          ...m,
        };
      case "timeout":
        return { success: false, error: "Policy limits request timeout", errorCode: "timeout" };
      case "network":
        return { success: false, error: "Cannot connect to server", errorCode: "network_error" };
      default:
        return { success: false, error: u, errorCode: "request_failed", httpStatus: d, ...m };
    }
  }
}
function z(e) {
  if (e === void 0) return "root";
  return e === "restrictions" || e === "compliance_taints" || e === "defaults" ? e : "other";
}
var q = [
  ["text/html", "html"],
  ["application/json", "json"],
  ["text/json", "json"],
  ["text/", "text"],
];
function k() {
  return {
    has_custom_base_url: !M$(),
    has_auth_token: Boolean(N3()),
    has_api_key_helper: Boolean(oS()),
    api_key_prefix: c(zbn()),
  };
}
function Jyr(e) {
  let t = e?.response?.data?.error;
  if (!t || typeof t !== "object") return {};
  let i = typeof t.type === "string" ? t.type : void 0,
    r = typeof t.error_code === "string" ? t.error_code : typeof t.code === "string" ? t.code : void 0;
  return {
    serverErrorType: i === void 0 ? void 0 : ger.includes(i) ? i : "other",
    serverErrorCode: r === void 0 ? void 0 : her.includes(r) ? r : "other",
  };
}
var X = ["EACCES", "EPERM", "EROFS", "ENOSPC", "EDQUOT", "ENOENT", "ENOTDIR", "EISDIR", "EMFILE", "ENFILE", "EBUSY"];
function I(e) {
  return e !== void 0 && X.includes(e) ? e : "other";
}
function A(e) {
  return I(E(e));
}
function Q(e) {
  let t = "telemetryCode" in e ? e.telemetryCode : void 0;
  return I(t === "UnexpectedAbsent" || t === Yoe ? "ENOENT" : t);
}
function P() {
  return Te.state("policy-limits");
}
var T = 1048576;
async function Yyn(e) {
  if (!O() || e === void 0 || !hC()) return;
  try {
    let t = await e.read([{ key: P(), offset: 0, length: T + 1 }]);
    if (!t.ok) {
      n(`Policy limits: prime read failed: ${t.error.code}; raw cache read stays`);
      return;
    }
    let i = t.value.items[0];
    if (!i.found) {
      K9t(e, null);
      return;
    }
    if (i.totalBytes > T) {
      n("Policy limits: prime skipped (oversize cache); raw cache read stays");
      return;
    }
    K9t(e, V9t(Buffer.from(i.value).toString("utf-8")));
  } catch (t) {
    n(`Policy limits: prime failed: ${l(t)}`);
  }
}
class Jyn {
  storageV5;
  credentials;
  used = false;
  constructor(e = {}) {
    (this.storageV5 = e.storageV5), (this.credentials = e.credentials);
  }
  adoptStartupServices(e) {
    if (e.storageV5 === void 0 && e.credentials === void 0) return "nothing to adopt";
    if (this.storageV5 !== void 0 || this.credentials !== void 0) return "already composed";
    if (this.used) return "already used";
    return (this.storageV5 = e.storageV5), (this.credentials = e.credentials), "adopted";
  }
  poller = null;
  cleanupRegistered = false;
  loadingCompletePromise = null;
  loadingCompleteResolve = null;
  loadingTimeoutId = null;
  firstPromptStateLogged = false;
  cacheWriteFailureLogged = false;
  startupLoadState = "not_started";
  startupLoadClaimed = false;
  startupLoadErrorCode;
  startupAwaitResult = "not_awaited";
  recordStartupAwaitResult(e) {
    this.startupAwaitResult = e;
  }
  stop() {
    if (
      (this.stopBackgroundPolling(),
      HEe(null),
      uSn(),
      this.loadingCompleteResolve?.(),
      (this.loadingCompletePromise = null),
      (this.loadingCompleteResolve = null),
      this.loadingTimeoutId !== null)
    )
      clearTimeout(this.loadingTimeoutId), (this.loadingTimeoutId = null);
  }
  initializeLoadingPromise() {
    if (this.loadingCompletePromise) return;
    if (hC())
      this.loadingCompletePromise = new Promise((e) => {
        (this.loadingCompleteResolve = e),
          (this.loadingTimeoutId = setTimeout(
            (t) => {
              if (this.loadingCompleteResolve === t)
                n("Policy limits: Loading promise timed out, resolving anyway"),
                  this.loadingCompleteResolve(),
                  (this.loadingCompleteResolve = null);
            },
            H,
            e,
          ));
      });
  }
  async waitForLoad() {
    if (this.loadingCompletePromise) await this.loadingCompletePromise;
  }
  async saveCachedResponse(e) {
    if (O() && this.storageV5 !== void 0) {
      let t, i;
      try {
        let r = await this.storageV5.write(P(), b(e, null, 2), { publishDiscipline: "inPlace", mode: 384 });
        if (r.ok) {
          n(`Policy limits: Saved to ${xEe()}`);
          return;
        }
        (t = Ge(r.error)), (i = Q(r.error));
      } catch (r) {
        (t = l(r)), (i = A(r));
      }
      this.recordCacheWriteFailure(t, i);
      return;
    }
    try {
      let t = xEe();
      await D(t, b(e, null, 2), { encoding: "utf-8", mode: 384 }), n(`Policy limits: Saved to ${t}`);
    } catch (t) {
      this.recordCacheWriteFailure(t instanceof Error ? t.message : "unknown error", A(t));
    }
  }
  recordCacheWriteFailure(e, t) {
    if ((n(`Policy limits: Failed to save - ${e}`), !this.cacheWriteFailureLogged))
      (this.cacheWriteFailureLogged = true), s("tengu_policy_limits_cache_write_failed", { errno: c(t) });
  }
  async fetchAndLoad(e, t = false) {
    this.used = true;
    let i = e === "policy_limits_load" && !this.startupLoadClaimed;
    if (i) this.startupLoadClaimed = true;
    if (!hC()) return null;
    if (i) this.startupLoadState = "in_flight";
    let r = vSt(),
      a = R();
    if (r && !CSt()) HEe(r);
    let d = r ? N(r) : void 0,
      u = K(),
      m = Date.now();
    try {
      let o = await Y(d, this.credentials);
      if (i)
        (this.startupLoadState = o.success ? "succeeded" : "failed"),
          (this.startupLoadErrorCode = o.success ? void 0 : (o.errorCode ?? "request_failed"));
      let _ = Date.now();
      if (
        (s("tengu_policy_limits_fetch", {
          duration_ms: _ - m,
          ms_since_startup: _ - w,
          success: o.success,
          had_cache: r !== null,
          cache_age_ms: a,
          attempts: o.attempts,
          is_load: e === "policy_limits_load",
          awaited: t,
          auth_type: c(u),
          error_code: ke(o.errorCode),
          token_source: c(Fl().source),
          ...k(),
          auth_unavailable_reason: ke(o.authUnavailableReason),
          token_refresh_outcome: u === "oauth" ? ke(o.tokenRefreshOutcome) : void 0,
          http_status: o.httpStatus,
          parse_error_field: ke(o.parseErrorField),
          parse_error_content_type: ke(o.parseErrorContentType),
          server_error_type: ke(o.serverErrorType),
          server_error_code: ke(o.serverErrorCode),
        }),
        !o.success)
      ) {
        if (r) return n("Policy limits: Using stale cache after fetch failure"), HEe(r), g(e, "stale_cache_used"), r;
        return p(e, o.errorCode ?? "request_failed"), null;
      }
      if (o.response === null && r) {
        n("Policy limits: Cache still valid (304 Not Modified)"), HEe(r);
        try {
          if (O() && this.storageV5 !== void 0) await this.storageV5.touch(P());
          else {
            let C = new Date();
            await W(xEe(), C, C);
          }
        } catch {}
        return y(e), r;
      }
      let h = o.response ?? cSn;
      return (
        HEe(h),
        await this.saveCachedResponse(h),
        n(
          Object.keys(h.restrictions).length > 0
            ? "Policy limits: Applied new restrictions successfully"
            : "Policy limits: No restrictions (cached empty)",
        ),
        y(e),
        h
      );
    } catch {
      if (i && this.startupLoadState === "in_flight")
        (this.startupLoadState = "failed"), (this.startupLoadErrorCode = "unexpected_error");
      if (r) return n("Policy limits: Using stale cache after error"), HEe(r), g(e, "stale_cache_used"), r;
      return p(e, "unexpected_error"), null;
    }
  }
  logCacheStateAtFirstPrompt() {
    if (this.firstPromptStateLogged) return;
    this.firstPromptStateLogged = true;
    let e = IEe(),
      t = e === void 0,
      i = e === "custom_base_url" ? IEe({ skipBaseUrlCheck: true }) === void 0 : t,
      r = lw() !== null,
      a = t ? R() : void 0,
      d = this.startupLoadState,
      u = this.startupAwaitResult,
      m = this.startupLoadErrorCode,
      o = c(rSn());
    s("tengu_policy_limits_cache_state_at_first_prompt", {
      eligible: t,
      ineligible_reason: ke(e),
      eligible_if_base_url_gate_removed: i,
      has_cache: r,
      cache_age_ms: a,
      would_fail_closed: t && (!r || (a ?? 1 / 0) > Yyr),
      token_source: c(Fl().source),
      ...k(),
      ms_since_startup: Date.now() - w,
      load_state: c(d),
      startup_fetch_error_code: ke(m),
      startup_await_result: c(u),
      error_reporting_gate: o,
    });
  }
  async load({ startupAwaited: e = false } = {}) {
    if (((this.used = true), hC() && !this.loadingCompletePromise))
      this.loadingCompletePromise = new Promise((i) => {
        this.loadingCompleteResolve = i;
      });
    let t = this.loadingCompleteResolve;
    try {
      if ((await this.fetchAndLoad("policy_limits_load", e), hC())) this.startBackgroundPolling();
    } finally {
      if (t) {
        if ((t(), this.loadingCompleteResolve === t)) {
          if (((this.loadingCompleteResolve = null), this.loadingTimeoutId))
            clearTimeout(this.loadingTimeoutId), (this.loadingTimeoutId = null);
        }
      }
    }
  }
  async refresh() {
    if (((this.used = true), this.stop(), this.initializeLoadingPromise(), !hC())) return;
    await this.deleteCacheFile(), await this.load(), n("Policy limits: Refreshed after auth change");
  }
  async clearCache() {
    (this.used = true), this.stop(), await this.deleteCacheFile();
  }
  async deleteCacheFile() {
    if (O() && this.storageV5 !== void 0)
      try {
        await this.storageV5.delete(P());
      } catch {}
    try {
      await B(xEe());
    } catch {}
  }
  async poll() {
    if (!hC()) return;
    let e = CSt(),
      t = e ? b(e) : null;
    try {
      await this.fetchAndLoad("policy_limits_poll");
      let i = CSt();
      if ((i ? b(i) : null) !== t) n("Policy limits: Changed during background poll");
    } catch {}
  }
  startBackgroundPolling() {
    if (((this.used = true), this.poller !== null)) return;
    if (!hC()) return;
    if (((this.poller = B9t(() => void this.poll(), U, { unref: true })), !this.cleanupRegistered))
      (this.cleanupRegistered = true), vt(() => this.stopBackgroundPolling());
  }
  stopBackgroundPolling() {
    this.poller?.[Symbol.dispose](), (this.poller = null);
  }
}
class per {
  client = void 0;
}
var Qyr = new J(() => new per());
function L() {
  return Qyr.of(G().host);
}
function f() {
  let e = L();
  return (e.client ??= new Jyn()), e.client;
}
function Qyn(e) {
  let t = L();
  if (t.client === void 0) {
    t.client = new Jyn(e);
    return;
  }
  let i = t.client.adoptStartupServices(e);
  switch (i) {
    case "nothing to adopt":
      n("Policy limits: default client already constructed; start-up composition skipped");
      return;
    case "already used":
      n(
        "Policy limits: start-up composition came after the bare default client was used; it keeps running without the backend and credentials store",
        { level: "warn" },
      ),
        s("tengu_policy_limits_late_composition", {});
      return;
    case "already composed":
      n("Policy limits: default client already composed; later start-up composition skipped");
      return;
    case "adopted":
      n("Policy limits: start-up services adopted by the default client");
      return;
    default:
  }
}
function j9t(e) {
  f().recordStartupAwaitResult(e);
}
function cRr() {
  f().stop(), (L().client = void 0);
}
function Zyn() {
  f().initializeLoadingPromise();
}
function T_() {
  return f().waitForLoad();
}
function eSn() {
  f().logCacheStateAtFirstPrompt();
}
function tSn(e = {}) {
  return f().load(e);
}
function A8e() {
  return f().refresh();
}
function nSn() {
  return f().clearCache();
}
function uRr() {
  f().startBackgroundPolling();
}
function dRr() {
  f().stopBackgroundPolling();
}
export { B9t, Xyn, Yyr, E8e, Jyr, Yyn, Jyn, per, Qyr, Qyn, j9t, cRr, Zyn, T_, eSn, tSn, A8e, nSn, uRr, dRr };
