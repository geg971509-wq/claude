// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, zu, mi, GC } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { ne, Xt, jt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { Io } from "/$bunfs/root/chunk-q04k5ycg.js";
import { Jr, B3n } from "/$bunfs/root/chunk-zze8764r.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { ud, zt } from "/$bunfs/root/chunk-qm65zb83.js";
import { w } from "/$bunfs/root/chunk-4xj01xwv.js";
import { l, X, os } from "/$bunfs/root/chunk-ypdw393e.js";
import { Ge, vt, b, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { jbn, _7e, nNe, y7e, Pbt, inr, snr, RY, qg, Yt, IT, ym, Cs, PT } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { an } from "/$bunfs/root/chunk-c47snwm2.js";
import {
  Hc,
  cTt,
  G$,
  l5,
  uTt,
  iir,
  jXe,
  dTt,
  Nqt,
  Fqt,
  GY,
  pTt,
  $qt,
  zNe,
  _N,
  rAn,
  WXe,
  fTt,
  BT,
  nCe,
  Uqt,
  qXe,
  Upe,
  Bqt,
  J3,
} from "/$bunfs/root/chunk-6k63g5t6.js";
import { lor } from "/$bunfs/root/chunk-988p40e0.js";
import { VAe, o5, ioe } from "/$bunfs/root/chunk-0spqrdaj.js";
import { st } from "/$bunfs/root/chunk-qcx34e4j.js";
import { yh } from "/$bunfs/root/chunk-rf51999f.js";
import { e8n } from "/$bunfs/root/chunk-wjr8v4tx.js";
import { kl } from "/$bunfs/root/chunk-w3c6n7jh.js";
import { Z_ } from "/$bunfs/root/chunk-p18e2918.js";
import { wV, QD } from "/$bunfs/root/chunk-cbn30h5b.js";
import { B9t } from "/$bunfs/root/chunk-2qsjxthp.js";
import { kV } from "/$bunfs/root/chunk-976texjq.js";
import { i, v, _e, f, De, N } from "/$bunfs/root/chunk-saay52v7.js";
import { Ka } from "/$bunfs/root/chunk-fxb0gsq0.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
var ke = 5000;
class q {
  updates = new Z_();
  owner;
  constructor(e) {
    this.owner = e;
  }
  supersede(e, t, r) {
    let o = this.owner;
    (this.owner = r), this.updates.enqueue({ settings: e, baseline: t }), o("superseded");
  }
  settle(e) {
    this.updates.done(), this.owner(e);
  }
}
class W {
  replRequester = null;
  requesterWaiters = [];
  noConsentSurface = false;
  pendingReview = null;
  registerRequester(e) {
    if (((this.replRequester = e), e && this.requesterWaiters.length > 0)) {
      let t = this.requesterWaiters;
      this.requesterWaiters = [];
      for (let r of t) r(e);
    }
  }
  addWaiter(e) {
    this.requesterWaiters.push(e);
  }
  dropWaiter(e) {
    this.requesterWaiters = this.requesterWaiters.filter((t) => t !== e);
  }
  review(e, t, r) {
    return new Promise((o) => {
      if (this.pendingReview) {
        this.pendingReview.supersede(t, r, o);
        return;
      }
      let a = new q(o);
      (this.pendingReview = a), s("tengu_managed_settings_security_dialog_shown", {});
      let d;
      try {
        d = e(t, r, a.updates);
      } catch {
        d = Promise.resolve("deferred_no_consent_surface");
      }
      d.then(
        (c) => this.close(a, c),
        () => this.close(a, "deferred_no_consent_surface"),
      );
    });
  }
  close(e, t) {
    if (((this.pendingReview = null), t === "approved"))
      s("tengu_managed_settings_security_dialog_accepted", {}), y("remote_managed_settings_security_check");
    else if (t === "rejected") s("tengu_managed_settings_security_dialog_rejected", {});
    e.settle(t);
  }
  startupConsentRelease = null;
  fireStartupConsentRelease() {
    let e = this.startupConsentRelease;
    if (e) (this.startupConsentRelease = null), e();
  }
  consentNeededRelease = null;
  async fireConsentNeededRelease() {
    let e = this.consentNeededRelease;
    if (e) (this.consentNeededRelease = null), await e();
  }
  consentHandoffHolds = new Set();
  consentHandoffSignal = Ue();
  consentHandoffRevealActive = false;
}
var Pe = new J(() => new W());
function E() {
  return Pe.of(G().host);
}
function Y() {
  return Io.pendingStandaloneRender !== null;
}
function lJt(e) {
  E().registerRequester(e);
}
function Q(e) {
  let t = E();
  return (
    (t.startupConsentRelease = e),
    () => {
      if (t.startupConsentRelease === e) t.startupConsentRelease = null;
    }
  );
}
function cJt() {
  let e = E(),
    t = Symbol("consent-handoff-hold");
  if ((e.consentHandoffHolds.add(t), e.consentHandoffHolds.size === 1)) e.consentHandoffSignal.emit();
  return () => {
    if (e.consentHandoffHolds.delete(t) && e.consentHandoffHolds.size === 0) e.consentHandoffSignal.emit();
  };
}
function art() {
  return E().consentHandoffHolds.size > 0;
}
function uJt() {
  return E().consentHandoffRevealActive;
}
function jNn(e) {
  return E().consentHandoffSignal.subscribe(e);
}
function WNn(e) {
  let t = E();
  return (
    (t.consentNeededRelease = e),
    () => {
      if (t.consentNeededRelease === e) t.consentNeededRelease = null;
    }
  );
}
function qNn() {
  E().noConsentSurface = true;
}
function Z() {
  return E().noConsentSurface;
}
async function K() {
  let e = E(),
    t,
    r = new Promise((a) => {
      (t = a), e.addWaiter(a);
    }),
    o = await Xt(r, ke, "managed-settings security dialog requester wait timed out").catch(() => null);
  if (o === null) e.dropWaiter(t);
  return o;
}
async function ee(e, t, r) {
  if (!t || !l5(G$(t))) return "no_check_needed";
  if (!iir(e, t)) return "no_check_needed";
  if (!zu()) return "deferred_non_interactive";
  let o = e.source === "consented_payload" ? e.settings : e.consentedPayload,
    a = E();
  if (a.replRequester)
    if (a.consentNeededRelease) {
      let R = null;
      try {
        (R = cJt()), await a.fireConsentNeededRelease();
        let S = a.replRequester;
        if (S) return (a.consentHandoffRevealActive = true), await a.review(S, t, o);
        if (Io.has(process.stdout)) {
          let k = await K();
          if (k) return (a.consentHandoffRevealActive = true), await a.review(k, t, o);
        }
        return "deferred_no_consent_surface";
      } finally {
        (a.consentHandoffRevealActive = false), R?.();
      }
    } else return a.review(a.replRequester, t, o);
  if (a.noConsentSurface) return "deferred_no_consent_surface";
  if (Io.has(process.stdout)) {
    a.fireStartupConsentRelease();
    let R = await K();
    if (R) return a.review(R, t, o);
  }
  if (r === void 0 || a.noConsentSurface) return "deferred_no_consent_surface";
  s("tengu_managed_settings_security_dialog_shown", {});
  let d = Io.has(process.stdout),
    c = r(t, d, o);
  if (!d) Io.claimForStandaloneRender(c);
  let u;
  try {
    u = await c;
  } catch (R) {
    throw (p("remote_managed_settings_security_check", "dialog_unavailable"), R);
  }
  if (
    (s(
      u === "approved"
        ? "tengu_managed_settings_security_dialog_accepted"
        : "tengu_managed_settings_security_dialog_rejected",
      {},
    ),
    u === "approved")
  )
    y("remote_managed_settings_security_check");
  return u;
}
function te(e) {
  switch (e) {
    case "rejected":
      return Jr(1), false;
    case "deferred_no_consent_surface":
      return false;
    case "superseded":
      return false;
    case "approved":
    case "no_check_needed":
    case "deferred_non_interactive":
      return true;
  }
}
import { createHash as Ne } from "crypto";
import { open as Le, readFile as Be, rm as je, unlink as ze, writeFile as Ke } from "fs/promises";
import { join as Me } from "path";
var Ae = "remote-settings-consent.json",
  re = "remote-settings-consent",
  D = 1,
  Fe = 20,
  Oe = 86400000,
  x = 1048576,
  He = m(() => f({ accountUuid: i(), dangerousSettingsHash: i(), updatedAt: v() })),
  Ie = m(() => f({ version: N(D), records: De(i(), _e()) })),
  xe = m(() => f({ version: v().gt(D) }));
function se() {
  return Me(be(), Ae);
}
async function oe(e) {
  let t;
  if (O() && e !== void 0) {
    let r;
    try {
      r = await e.readText([Te.state(re)]);
    } catch (a) {
      return (
        n(`Remote settings: Consent records unreadable - ${l(a)}`),
        { records: new Map(), newerVersion: false, unreadable: true }
      );
    }
    if (!r.ok)
      return (
        n(`Remote settings: Consent records unreadable - ${Ge(r.error)}`),
        { records: new Map(), newerVersion: false, unreadable: true }
      );
    let o = r.value.items[0];
    if (!o.found) return { records: new Map(), newerVersion: false, unreadable: false };
    t = o.value;
  } else
    try {
      let r = await an().readRange(se(), 0, x + 1);
      if (r.length > x)
        return (
          n(`Remote settings: Consent records file exceeds ${x} bytes; treating it as unreadable`),
          { records: new Map(), newerVersion: false, unreadable: true }
        );
      t = r.toString("utf8");
    } catch (r) {
      return { records: new Map(), newerVersion: false, unreadable: !X(r) };
    }
  try {
    let r = V(t),
      o = Ie().safeParse(r);
    if (!o.success) return { records: new Map(), newerVersion: xe().safeParse(r).success, unreadable: false };
    let a = new Map();
    for (let [d, c] of Object.entries(o.data.records)) {
      let u = He().safeParse(c);
      if (u.success) a.set(d, u.data);
    }
    return { records: a, newerVersion: false, unreadable: false };
  } catch {
    return { records: new Map(), newerVersion: false, unreadable: false };
  }
}
async function ie(e, t) {
  let { records: r } = await oe(t),
    o = r.get(e.organizationUuid);
  if (!o || o.accountUuid !== e.accountUuid) return null;
  return o.dangerousSettingsHash;
}
async function ae(e, t, r) {
  try {
    let { records: o, newerVersion: a, unreadable: d } = await oe(r);
    if (a || d) {
      n(`Remote settings: Consent records file is ${a ? "from a newer version" : "unreadable"}; not overwriting it`);
      return;
    }
    let c = G$(t),
      u = o.get(e.organizationUuid),
      R = u?.accountUuid === e.accountUuid,
      S = !l5(c);
    if (S && !(u && R)) return;
    let k = S && u ? u.dangerousSettingsHash : uTt(c),
      _ = Date.now();
    if (R && u.dangerousSettingsHash === k && _ - u.updatedAt < Oe) return;
    o.delete(e.organizationUuid);
    let C = [...o].sort(([, M], [, Ce]) => Ce.updatedAt - M.updatedAt).slice(0, Fe - 1);
    C.unshift([e.organizationUuid, { accountUuid: e.accountUuid, dangerousSettingsHash: k, updatedAt: _ }]);
    let P = b({ version: D, records: Object.fromEntries(C) });
    if (O() && r !== void 0) {
      let M = await r.write(Te.state(re), P, { mode: 384 });
      if (!M.ok) n(`Remote settings: Failed to record org consent - ${Ge(M.error)}`);
      return;
    }
    await an().atomicWrite(se(), P, 384);
  } catch (o) {
    n(`Remote settings: Failed to record org consent - ${l(o)}`);
  }
}
var ce = m(() => f({ uuid: i(), checksum: i(), settings: De(i(), _e()) }));
var $e = 1e4,
  qe = 5,
  Je = 3600000,
  We = 30000;
class ue {
  poller = null;
  loadingCompletePromise = null;
  loadingCompleteResolve = null;
  createBarrier(e) {
    this.loadingCompletePromise = new Promise((t) => {
      (this.loadingCompleteResolve = t), e?.(t);
    });
  }
  releaseBarrier() {
    this.loadingCompleteResolve?.(), (this.loadingCompleteResolve = null);
  }
  detachBarrier() {
    let e = this.loadingCompleteResolve;
    return (this.loadingCompleteResolve = null), (this.loadingCompletePromise = null), e;
  }
  startPoller(e) {
    this.poller = e;
  }
  stopPoller() {
    this.poller?.[Symbol.dispose](), (this.poller = null);
  }
}
var Ve = new J(() => new ue());
function T() {
  return Ve.of(G().host);
}
function dJt() {
  fe();
  let e = T();
  if (e.loadingCompletePromise) return;
  if (QD())
    e.createBarrier((t) => {
      setTimeout(
        (r, o) => {
          if (o.loadingCompleteResolve === r) {
            if (Y()) {
              n("Remote settings: Loading promise timeout deferred \u2014 consent dialog pending");
              return;
            }
            n("Remote settings: Loading promise timed out, resolving anyway"), o.releaseBarrier();
          }
        },
        We,
        t,
        e,
      );
    });
}
function Ye() {
  let e = mi();
  if (e) return `${e.url}/managed/settings`;
  return `${zt().BASE_API_URL}/api/claude_code/settings`;
}
function U(e) {
  if (!e) return e;
  return VAe(e, "remote managed settings").settings ?? {};
}
function le(e, t, r) {
  let o = Fqt(e),
    a = VAe(o, t),
    d = o;
  if (!a.settings && Object.keys(o).length > 0 && !Xe(d))
    return (
      n("Remote settings: Settings validation failed - no fields could be salvaged"),
      { rejected: { success: false, error: r, errorKind: "invalid_settings", skipRetry: true } }
    );
  if (a.errors.length > 0)
    n(`Remote settings: Payload contains ${a.errors.length} invalid entries; applying the salvaged subset`);
  return { settings: o, salvagedSettings: Qe(d, a) };
}
function Xe(e) {
  let t = Object.keys(e);
  return t.length > 0 && t.every((r) => ioe.some((o) => o === r));
}
function ge(e, t) {
  let r = e;
  for (let o of ioe) if (o in t && !(o in r)) r = { ...r, [o]: t[o] };
  return r;
}
function Qe(e, t) {
  let r = t.errors.length > 0 ? (t.settings ?? {}) : void 0;
  return r === void 0 ? void 0 : ge(r, e);
}
async function Ze(e) {
  let t = Uqt();
  if (t === void 0) return null;
  if (t === "fail") return { success: false, error: "mocked fetch failure", errorKind: "unknown_error", skipRetry: true };
  if (t === "empty") return { success: true, settings: {}, checksum: void 0, consentIdentity: await j(e) };
  try {
    let r = qXe(),
      o = r !== void 0 ? await Be(r, "utf-8") : t,
      a = V(o);
    if (!a || typeof a !== "object" || Array.isArray(a))
      return { success: false, error: "mock JSON parse failed", errorKind: "parse_error", skipRetry: true };
    let d = le(a, "mock remote settings", "mock JSON parse failed");
    if ("rejected" in d) return d.rejected;
    return { success: true, ...d, checksum: "mock", consentIdentity: await j(e) };
  } catch {
    return { success: false, error: "mock JSON parse failed", errorKind: "parse_error", skipRetry: true };
  }
}
function pJt() {
  return QD();
}
async function UQ() {
  let e = T();
  if (e.loadingCompletePromise) await e.loadingCompletePromise;
}
function M2e() {
  return QD() && !J3();
}
function fe() {
  B3n(async () => {
    if (M2e()) await UQ();
  });
}
async function et(e) {
  let t = mi();
  if (t) {
    let o = await Se(t, e);
    return { headers: { Authorization: `Bearer ${t.jwt}` }, consentIdentity: he(t, o), pinnedFingerprint: o };
  }
  try {
    let { key: o } = qg({ skipRetrievingKeyFromApiKeyHelper: true });
    if (o) return { headers: { "x-api-key": o } };
  } catch {}
  let r = Yt();
  if (r?.accessToken)
    return {
      headers: { Authorization: `Bearer ${r.accessToken}`, "anthropic-beta": ud },
      accessToken: r.accessToken,
      consentIdentity: await me(e),
    };
  return { headers: {}, error: "No authentication available" };
}
async function me(e) {
  let t = PT();
  if ((await IT(e)) !== "store") return;
  return t?.organizationUuid ? { organizationUuid: t.organizationUuid, accountUuid: t.accountUuid } : void 0;
}
var pe = "gateway:",
  tt = 256;
function he(e, t) {
  if (!GC(e) || !t || t === jbn) return;
  let r;
  try {
    r = new URL(e.url);
  } catch {
    return;
  }
  if (r.protocol !== "https:") return;
  let o = `${r.origin}${r.pathname === "/" ? "" : r.pathname}`,
    a = e8n(e) ?? "";
  return {
    organizationUuid: `${pe}${o}#${t}`,
    accountUuid: a.length > tt ? `sha256:${Ne("sha256").update(a).digest("hex")}` : a,
  };
}
async function Se(e, t) {
  return y7e(new URL(e.url).hostname.replace(/^\[|\]$/g, ""), t);
}
async function j(e) {
  let t = mi();
  return t
    ? he(
        t,
        await Se(t, e).catch(() => {
          return;
        }),
      )
    : await me(e);
}
async function L(e, t, r, o) {
  if (!e) return;
  let a = e.organizationUuid.startsWith(pe) ? await j(o) : PT();
  if (a?.organizationUuid !== e.organizationUuid || a.accountUuid !== e.accountUuid) {
    n("Remote settings: consent identity no longer matches the fetch identity; not recording org consent");
    return;
  }
  await ae(e, t, r);
}
function A(e) {
  if (GY() === e) return false;
  return (
    n("Remote settings: Cache was reset (login/logout) during this fetch; discarding its result"),
    g("remote_managed_settings_pull", "reset_during_fetch"),
    true
  );
}
function F(e) {
  return e.httpStatus !== void 0 ? `${e.errorKind}/${e.httpStatus}` : e.errorKind;
}
async function nt(e, t = {}) {
  let r = await Ze(t.credentials);
  if (r) return r;
  let o = null,
    a = (mi() && !t.background) || t.singleAttempt ? 0 : qe;
  for (let d = 1; d <= a + 1; d++) {
    if (((o = await ye(e, false, t.credentials)), o.success)) return o;
    if (o.skipRetry) return o;
    if (d > a) return o;
    let c = kV(d);
    n(
      `Remote settings: Retry ${d}/${a} after ${c}ms (${F({ errorKind: o.errorKind ?? "unknown_error", ...(o.httpStatus !== void 0 && { httpStatus: o.httpStatus }) })})`,
    ),
      await ne(c);
  }
  return o;
}
async function ye(e, t = false, r) {
  let o,
    a,
    d = (c) => (
      n(
        `Remote settings: Fetch attempt failed (${F({ errorKind: c.errorKind ?? "unknown_error", ...(c.httpStatus !== void 0 && { httpStatus: c.httpStatus }) })})`,
      ),
      c
    );
  try {
    await Cs({ credentials: r }), await RY(r);
    let c = await et(r);
    if (((o = c.accessToken), (a = c.consentIdentity), c.error))
      return d({
        success: false,
        error: "Authentication required for remote settings",
        errorKind: "no_auth_available",
        skipRetry: true,
      });
    let u = Ye(),
      R = { ...c.headers, "User-Agent": Ka(), "Cache-Control": "no-cache", Pragma: "no-cache" };
    if (e) R["If-None-Match"] = `"${e}"`;
    let S,
      k = c.pinnedFingerprint;
    if (!k);
    else if (yh())
      n(
        "[gateway] HTTPS proxy configured \u2014 per-request cert pin not applied to managed-settings fetch (known gap)",
        { level: "warn" },
      );
    else S = snr(k);
    let _ = await st.get(u, {
      headers: R,
      timeout: $e,
      ...(S && { httpsAgent: S }),
      validateStatus: (M) => M === 200 || M === 204 || M === 304 || M === 404,
    });
    if (_.status === 304)
      return (
        n("Remote settings: Using cached settings (304)"),
        { success: true, settings: null, checksum: e, consentIdentity: a }
      );
    if (_.status === 204 || _.status === 404)
      return (
        n(`Remote settings: No settings found (${_.status})`),
        { success: true, settings: {}, checksum: void 0, consentIdentity: a }
      );
    let C = ce().safeParse(_.data);
    if (!C.success)
      return (
        n(`Remote settings: Invalid response format - ${C.error.message}`),
        { success: false, error: "Invalid remote settings format", errorKind: "parse_error", skipRetry: true }
      );
    let P = le(C.data.settings, "remote managed settings", "Invalid settings structure");
    if ("rejected" in P) return P.rejected;
    return (
      n("Remote settings: Fetched successfully"), { success: true, ...P, checksum: C.data.checksum, consentIdentity: a }
    );
  } catch (c) {
    let u = l(c?.cause);
    if (l(c).includes(_7e))
      return d({
        success: false,
        error: "Cloud gateway TLS pin is in a symlinked credentials file",
        errorKind: "gateway_pin_refused",
        skipRetry: true,
      });
    if (l(c).includes(nNe))
      return d({
        success: false,
        error: "Cloud gateway TLS pin could not be read from the credentials file",
        errorKind: "gateway_pin_unreadable",
      });
    if (l(c).includes(Pbt) || u.includes(Pbt)) {
      let _ = inr(c);
      return d({
        success: false,
        error: "Cloud gateway TLS certificate does not match stored pin",
        errorKind: "gateway_cert_mismatch",
        ...(_ && { gatewayPinMismatch: _ }),
        skipRetry: true,
      });
    }
    let { kind: R, status: S, message: k } = os(c);
    if (S === 404) return { success: true, settings: {}, checksum: "", consentIdentity: a };
    switch (R) {
      case "auth": {
        let _ = {
          success: false,
          error: "Not authorized for remote settings",
          errorKind: S === 401 ? "http_401" : "http_403",
          skipRetry: true,
        };
        if (S === 401 && o && !t) {
          await ym(o, r);
          let C = Yt()?.accessToken;
          if (C && C !== o) return d(_), s("tengu_remote_settings_401_force_refresh_retry", {}), ye(e, true, r);
        }
        return d(_);
      }
      case "timeout":
        return d({ success: false, error: "Remote settings request timeout", errorKind: "timeout" });
      case "network":
        return d({ success: false, error: "Cannot connect to server", errorKind: "network_error" });
      default:
        return d({
          success: false,
          error: k,
          errorKind: S !== void 0 && S >= 500 ? "http_5xx" : S !== void 0 && S >= 400 ? "http_4xx" : "unknown_error",
          ...(S !== void 0 && S >= 400 && { httpStatus: S }),
        });
    }
  }
}
async function de(e, t) {
  let r = b(e, null, 2),
    o = Nqt(e);
  if (O() && t !== void 0 && !BT()) {
    let a = await t.write(Te.state("remote-settings"), r, { publishDiscipline: "inPlace", mode: 384, flush: true });
    if (!a.ok) {
      n(`Remote settings: Failed to save - ${Ge(a.error)}`);
      return;
    }
    if ((n("Remote settings: Saved via storage backend"), Upe("cache", r), o !== void 0)) {
      let d = await t.write(Te.state(jXe), o, { publishDiscipline: "inPlace", mode: 384 });
      if (
        (n(
          d.ok
            ? "Remote settings: Saved helper consent via storage backend"
            : `Remote settings: Failed to save helper consent - ${Ge(d.error)}`,
        ),
        d.ok)
      )
        Upe("helperConsent", o);
    }
    return;
  }
  try {
    let a = nCe(),
      d = await Le(a, "w", 384);
    try {
      await d.writeFile(r, { encoding: "utf-8" }), await d.datasync();
    } finally {
      await d.close();
    }
    n(`Remote settings: Saved to ${a}`);
  } catch (a) {
    n(`Remote settings: Failed to save - ${a instanceof Error ? a.message : "unknown error"}`);
    return;
  }
  if (O() && !BT()) Upe("cache", r);
  if (o === void 0) return;
  try {
    if ((await Ke(dTt(), o, { mode: 384 }), O() && !BT())) Upe("helperConsent", o);
  } catch (a) {
    n(`Remote settings: Failed to save helper consent - ${l(a)}`);
  }
}
async function lrt(e) {
  ve(), wV(), Hc(), T().detachBarrier()?.();
  let t =
    O() && e !== void 0
      ? await e.delete(Te.state(jXe)).then((r) => (r.ok ? void 0 : Ge(r.error)))
      : await je(dTt(), { force: true }).then(() => {
          return;
        }, l);
  if (t !== void 0) {
    n(`Remote settings: Failed to remove helper consent - ${t}`);
    return;
  }
  if (O() && !BT()) Upe("helperConsent", null);
  if (BT()) return;
  if (O() && e !== void 0) {
    if ((await e.delete(Te.state("remote-settings"))).ok) Upe("cache", null);
    return;
  }
  try {
    let r = nCe();
    await ze(r);
  } catch (r) {
    if (O() && !X(r)) return;
  }
  if (O()) Upe("cache", null);
}
async function z(e = {}) {
  try {
    return await rt(e);
  } finally {
    lor(() => o5().settings);
  }
}
async function rt(e) {
  if (!QD()) return { settings: null, fetchSucceeded: true };
  let t = BT();
  if (t)
    return (
      n(`Remote settings: Using override file ${t} (CLAUDE_CODE_REMOTE_SETTINGS_PATH), skipping API fetch`),
      { settings: J3(), fetchSucceeded: true }
    );
  let r = Bqt(),
    o = _N(),
    a = r ? cTt(r) : void 0,
    d = GY();
  try {
    let c = await nt(a, e);
    if (A(d)) return { settings: null, fetchSucceeded: false };
    if (!c.success) {
      p("remote_managed_settings_pull", c.errorKind ?? "remote_managed_settings_fetch_failed");
      let S = {
        errorKind: c.errorKind ?? "unknown_error",
        message: c.error ?? "Unknown error",
        ...(c.httpStatus !== void 0 && { httpStatus: c.httpStatus }),
        ...(c.gatewayPinMismatch && { gatewayPinMismatch: c.gatewayPinMismatch }),
      };
      if (r)
        return (
          n(`Remote settings: Using stale cache after fetch failure (${F(S)})`),
          zNe(r),
          { settings: r, fetchSucceeded: false, failure: S }
        );
      return (
        n(`Remote settings: Fetch failed (${F(S)}) and no cached settings`),
        { settings: null, fetchSucceeded: false, failure: S }
      );
    }
    if (c.settings === null && r && r === pTt()) {
      if ((n("Remote settings: Cache still valid (304 Not Modified)"), zNe(r, { verified: true }), !o)) {
        if ((await B(), A(d))) return { settings: null, fetchSucceeded: false };
        if (r === pTt()) {
          if ((await L(c.consentIdentity, U(r), e.storageV5, e.credentials), A(d)))
            return { settings: null, fetchSucceeded: false };
        }
      }
      return y("remote_managed_settings_pull", { status: w("not_modified") }), { settings: r, fetchSucceeded: true };
    }
    let u = c.settings ?? r ?? {};
    if (Object.keys(u).length > 0) {
      let S = c.consentIdentity ? await ie(c.consentIdentity, e.storageV5) : null,
        k = U(pTt()),
        _ =
          S !== null
            ? { source: "org_record", dangerousSettingsHash: S, consentedPayload: k }
            : { source: "consented_payload", settings: k },
        C = U(u),
        P = await ee(_, C, e.showSecurityDialog);
      if (A(d)) return { settings: null, fetchSucceeded: false };
      if (!te(P)) {
        if (P === "superseded")
          return (
            n("Remote settings: A newer fetch took over the pending consent review; leaving the decision to it"),
            { settings: r, fetchSucceeded: true }
          );
        if (P === "deferred_no_consent_surface") {
          if (Z())
            n(
              "Remote settings: Consent prompt deferred to the next interactive session (this command cannot host it); keeping the consented baseline",
            ),
              g("remote_managed_settings_pull", "consent_deferred_no_surface");
          else
            n("Remote settings: No consent surface in this interactive session; keeping the consented baseline"),
              p("remote_managed_settings_pull", "remote_managed_settings_no_consent_surface");
          return { settings: r, fetchSucceeded: false };
        }
        return (
          n("Remote settings: User rejected new settings, using cached settings"), { settings: r, fetchSucceeded: true }
        );
      }
      if ((zNe(u, { verified: true }), !o)) {
        if ((await B(), A(d))) return { settings: null, fetchSucceeded: false };
      }
      switch (P) {
        case "approved":
        case "no_check_needed":
          if (($qt(u), await L(c.consentIdentity, C, e.storageV5, e.credentials), A(d)))
            return { settings: null, fetchSucceeded: false };
          await de(c.salvagedSettings ?? (c.settings === null ? ge(C ?? {}, u) : u), e.storageV5),
            n("Remote settings: Applied new settings successfully"),
            y("remote_managed_settings_pull", { status: w("updated") });
          break;
        case "deferred_non_interactive":
          n(
            "Remote settings: Applied for this non-interactive run; consent deferred \u2014 not persisting the disk cache as consented",
          ),
            y("remote_managed_settings_pull", { status: w("applied_consent_deferred") });
          break;
        case "rejected":
        case "deferred_no_consent_surface":
        case "superseded":
          break;
      }
      return { settings: u, fetchSucceeded: true };
    }
    if ((zNe(u, { verified: true }), !o)) {
      if ((await B(), A(d))) return { settings: null, fetchSucceeded: false };
    }
    if (($qt(u), await L(c.consentIdentity, u, e.storageV5, e.credentials), A(d)))
      return { settings: null, fetchSucceeded: false };
    return (
      await de({}, e.storageV5),
      n("Remote settings: Saved empty sentinel (404 response)"),
      y("remote_managed_settings_pull", { status: w("no_content") }),
      { settings: u, fetchSucceeded: true }
    );
  } catch {
    if (A(d)) return { settings: null, fetchSucceeded: false };
    p("remote_managed_settings_pull", "remote_managed_settings_unexpected");
    let c = { errorKind: "unknown_error", message: "Unexpected error while applying remote settings" };
    if (r)
      return (
        n("Remote settings: Using stale cache after error"), zNe(r), { settings: r, fetchSucceeded: false, failure: c }
      );
    return { settings: null, fetchSucceeded: false, failure: c };
  }
}
function H(e) {
  if (!QD()) {
    let t = WXe();
    if (t) fTt({ state: "ineligible", reason: t });
    return;
  }
  if (e.fetchSucceeded) {
    fTt({ state: "ok", hasSettings: e.settings !== null && Object.keys(e.settings).length > 0 });
    return;
  }
  if (e.failure) {
    let t = e.settings !== null && Object.keys(e.settings).length > 0;
    fTt(
      t
        ? { state: "stale_cache", failure: e.failure, transportEnvWithheld: !_N() }
        : { state: "failed", failure: e.failure },
    );
  }
}
async function crt(e, t, r) {
  fe();
  let o = T();
  if (QD() && !o.loadingCompletePromise) o.createBarrier();
  let a = o.loadingCompleteResolve,
    d = GY();
  if (J3() && o.loadingCompleteResolve) o.releaseBarrier();
  try {
    let { settings: c, fetchSucceeded: u, failure: R } = await z({ ...r, showSecurityDialog: e, storageV5: t });
    if (GY() === d) H({ settings: c, fetchSucceeded: u, failure: R });
    if (GY() === d && QD() && !BT()) we(e, t, r?.credentials);
    if (c !== null) I();
    return u;
  } finally {
    Re(a);
  }
}
function Re(e) {
  let t = T();
  if (t.loadingCompleteResolve && t.loadingCompleteResolve === e) t.releaseBarrier();
}
async function zke(e, t, r) {
  return (await fJt(e, t, r)).fetchSucceeded;
}
var ot = 5000;
async function GNn(e, t, r) {
  let o,
    a = new Promise((c) => {
      o = Q(() => c("consent_pending"));
    }),
    d = zke(e, t, r).then(
      (c) => (c ? "refreshed" : "failed"),
      (c) => (h(c), "failed"),
    );
  try {
    let c = await jt(Promise.race([d, a]), ot);
    if (c === void 0) return g("remote_managed_settings_startup_await", "deadline_expired"), "timed_out";
    return c;
  } finally {
    o?.();
  }
}
async function fJt(e, t, r) {
  ve(), wV();
  let o = GY(),
    a = T(),
    d = a.detachBarrier();
  if (!QD()) return d?.(), H({ settings: null, fetchSucceeded: true }), I(), { fetchSucceeded: true };
  dJt();
  let c = a.loadingCompleteResolve;
  if (d)
    if (a.loadingCompletePromise) a.loadingCompletePromise.then(d);
    else d();
  let u, R;
  try {
    (R = await z({ showSecurityDialog: e, storageV5: t, credentials: r })),
      (u = { fetchSucceeded: R.fetchSucceeded, ...(R.failure && { failure: R.failure }) });
  } finally {
    Re(c);
  }
  if ((n("Remote settings: Refreshed after auth change"), GY() !== o))
    return n("Remote settings: Refresh superseded by a login/logout reset; not notifying"), u;
  if ((H(R), !BT())) we(e, t, r);
  return I(), u;
}
function I() {
  try {
    rAn(), kl.notifyChange("policySettings");
  } catch (e) {
    h(e);
  }
}
async function B() {
  try {
    let [
      { applyConfigEnvironmentVariables: e, applySafeConfigEnvironmentVariables: t },
      { checkHasTrustDialogAccepted: r },
      { captureAdmin3PSteeringSnapshot: o },
    ] = await Promise.all([
      import("/$bunfs/root/chunk-nyk3q9vf.js"),
      import("/$bunfs/root/chunk-rx63xaph.js"),
      import("/$bunfs/root/chunk-svzhjzp1.js"),
    ]);
    if (r()) e();
    else {
      t();
      let [
        { clearProxyCache: a, configureGlobalAgents: d },
        { clearCACertsCache: c, loadExtraCACerts: u },
        { clearMTLSCache: R, loadMTLSClientMaterial: S },
      ] = await Promise.all([
        import("/$bunfs/root/chunk-pbr2aqke.js"),
        import("/$bunfs/root/chunk-vp30mc61.js"),
        import("/$bunfs/root/chunk-qn49gaar.js"),
      ]);
      a(), c(), R(), await Promise.all([u(), S()]), d();
    }
    o();
  } catch (e) {
    h(e);
  }
}
var it =
  "Your organization requires remote managed settings to load, but they could not be loaded. Run `claude auth login` to re-authenticate, check your network connection, or contact your administrator.";
async function zHt(e) {
  try {
    if (await e()) return { valid: true };
  } catch (t) {
    h(t);
  }
  return { valid: false, message: it };
}
async function at(e, t, r) {
  if (!QD()) return;
  let o = J3(),
    a = o ? b(o) : null,
    d = GY();
  try {
    let c = await z({ background: true, showSecurityDialog: e, storageV5: t, credentials: r });
    if (GY() !== d) {
      n("Remote settings: Background poll superseded by a login/logout reset; not notifying");
      return;
    }
    if (c.fetchSucceeded) H(c);
    let u = J3();
    if ((u ? b(u) : null) !== a) n("Remote settings: Changed during background poll"), I();
  } catch {}
}
function we(e, t, r) {
  let o = T();
  if (o.poller !== null) return;
  if (!QD()) return;
  let d = B9t(() => void at(e, t, r), Je, { unref: true });
  o.startPoller(d), vt(d);
}
function ve() {
  T().stopPoller();
}
export { lJt, cJt, art, uJt, jNn, WNn, qNn, dJt, pJt, UQ, M2e, lrt, crt, zke, GNn, fJt, zHt };
