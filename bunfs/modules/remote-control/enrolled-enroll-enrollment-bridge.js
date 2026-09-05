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
import { zt } from "/$bunfs/root/chunk-qm65zb83.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { I, Mp } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { b, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { Ct } from "/$bunfs/root/chunk-wkxx62a2.js";
import { pr } from "/$bunfs/root/chunk-82w4mtvq.js";
import { vn } from "/$bunfs/root/chunk-k4a21mkt.js";
import { I9t, uer } from "/$bunfs/root/chunk-dc4hb8f7.js";
import { TJ } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { hostname as w } from "os";
var f = "tengu_sessions_elevated_auth_enforcement",
  u = "require_trusted_devices",
  E = "tengu_sessions_elevated_auth_disable_proactive_enrollment",
  P = 300000;
class eer {
  storedTokenRead = void 0;
  lastEnrollAttemptAtMs = 0;
}
var Lyn = new J(() => new eer()),
  AEe =
    "Your organization requires Trusted Devices for Remote Control, but enrollment is temporarily disabled. Please try again later, or contact your administrator.";
function CV() {
  return I(E, false);
}
function S() {
  return import.meta.require("/$bunfs/root/chunk-qvdq8j6c.js");
}
function v() {
  return import.meta.require("/$bunfs/root/chunk-4v4vy63d.js");
}
function C3() {
  if (!I(f, false)) return false;
  return v().isPolicyAllowed(u);
}
function E9t() {
  if (!I(f, false)) return false;
  return v().isPolicyEnforced(u);
}
function nRr() {
  return a.CLAUDE_CODE_REMOTE === true && !a.CLAUDE_TRUSTED_DEVICE_TOKEN && E9t();
}
var A9t =
  "not reachable from a cloud session \u2014 that session requires a trusted device, which a cloud session never has; message it from one of your own machines instead";
function rRr(e) {
  return `Nothing was sent: Remote Control session '${e}' is ${A9t}.`;
}
function Ode() {
  if (!I("tengu_bridge_attestation_enforce", false)) return I9t;
  if (!E9t()) return I9t;
  let t = I("tengu_bridge_attestation_enforce_config", {});
  return uer(t);
}
function g8e() {
  let e = Lyn.of(G().host);
  if (e.storedTokenRead !== void 0) return e.storedTokenRead;
  let t = R();
  return (e.storedTokenRead = t), t;
}
async function R() {
  let e = process.env.CLAUDE_TRUSTED_DEVICE_TOKEN;
  if (e) return e;
  return (await vn().readAsync())?.trustedDeviceToken;
}
async function uh() {
  if (!C3()) return;
  return g8e();
}
async function cSt() {
  if (!E9t()) return false;
  if (await g8e()) return false;
  return true;
}
async function zyr() {
  if (!(await cSt())) return null;
  if (CV()) return AEe;
  return "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.";
}
async function Myn(e) {
  return await Mp(f), await C9t(e), zyr();
}
function CEe() {
  Lyn.of(G().host).storedTokenRead = void 0;
}
async function vV(e, t) {
  if (!C3()) return;
  CEe();
  let r = await uh();
  if (!r || r === e) {
    let o = Lyn.of(G().host);
    if (Date.now() - o.lastEnrollAttemptAtMs >= P)
      (o.lastEnrollAttemptAtMs = Date.now()), await h8e({ trigger: "server_denied", credentials: t }), (r = await uh());
  }
  if (!r || r === e) return;
  return (
    n("[trusted-device] Token changed after untrusted_device 403 (cache bust or lazy enrollment); caller will retry"), r
  );
}
async function cMe(e, t, r) {
  let o = await vV(e, r);
  if (!o) return;
  return t(o);
}
function Lde() {
  if (CV()) return AEe;
  return "this device is not enrolled as a trusted device; run /login to enroll";
}
async function C9t(e) {
  if (!E9t()) return;
  if ((CEe(), !(await cSt()))) return;
  if (CV()) return;
  n("[trusted-device] Not enrolled, attempting lazy enrollment with OAuth token"), await h8e({ credentials: e });
}
async function oRr(e) {
  if (!C3()) return false;
  if ((CEe(), await g8e())) return true;
  if (CV()) return false;
  return (
    n("[trusted-device] Not enrolled, enrolling for a device-bound session"),
    await h8e({ trigger: "device_bind", credentials: e }),
    Boolean(await uh())
  );
}
function Nyn() {
  let { isClaudeAISubscriber: e } = import.meta.require("/$bunfs/root/chunk-r7k9wyxs.js");
  if (!pr() || !e()) return;
  if (CV()) return;
  CEe(),
    vn()
      .mutate((t) => (t.trustedDeviceToken ? { ...t, trustedDeviceToken: void 0 } : t))
      .catch(() => {});
}
async function h8e({ trigger: e = "proactive", credentials: t }) {
  let {
    isClaudeAISubscriber: r,
    isConsumerSubscriber: o,
    getClaudeAIOAuthTokens: D,
    checkAndRefreshOAuthTokenIfNeeded: h,
  } = import.meta.require("/$bunfs/root/chunk-r7k9wyxs.js");
  if (!pr() || !r()) return;
  try {
    if (!(await Mp(f))) {
      n(`[trusted-device] Gate ${f} is off, skipping enrollment`);
      return;
    }
    if (CV()) {
      n(`[trusted-device] Proactive enrollment disabled via ${E}, skipping`);
      return;
    }
    if (process.env.CLAUDE_TRUSTED_DEVICE_TOKEN) {
      n("[trusted-device] CLAUDE_TRUSTED_DEVICE_TOKEN env var is set, skipping enrollment (env var takes precedence)");
      return;
    }
    await S().waitForPolicyLimitsToLoad();
    let m = v(),
      g = m.isPolicyEnforced(u),
      C = e === "server_denied" || (e === "device_bind" && o());
    if (!(g || (C && m.isPolicyAllowed(u)))) {
      n(`[trusted-device] Org has not enabled ${u}, skipping enrollment`);
      return;
    }
    let d = { trigger: c(e), org_enforced: g };
    if (Ct()) {
      n("[trusted-device] Essential traffic only, skipping enrollment");
      return;
    }
    await h({ credentials: t });
    let T = D()?.accessToken;
    if (!T) {
      n("[trusted-device] No OAuth token, skipping enrollment");
      return;
    }
    let A = zt().BASE_API_URL,
      s;
    try {
      s = await st.post(
        `${A}/api/auth/trusted_devices`,
        { display_name: `Claude Code on ${w()} \xB7 ${TJ("darwin")}` },
        {
          headers: { Authorization: `Bearer ${T}`, "Content-Type": "application/json" },
          timeout: 1e4,
          validateStatus: (i) => i < 500,
        },
      );
    } catch (i) {
      n(`[trusted-device] Enrollment request failed: ${l(i)}`), p("bridge_trusted_device_enroll", "request_failed", d);
      return;
    }
    if (s.status !== 200 && s.status !== 201) {
      n(`[trusted-device] Enrollment failed ${s.status}: ${b(s.data).slice(0, 200)}`),
        p("bridge_trusted_device_enroll", "http_error", d);
      return;
    }
    let _ = s.data?.device_token;
    if (!_ || typeof _ !== "string") {
      n("[trusted-device] Enrollment response missing device_token field"),
        p("bridge_trusted_device_enroll", "missing_token", d);
      return;
    }
    try {
      let i = await vn().mutate((k) => ({ ...k, trustedDeviceToken: _ }));
      if (!i.success) {
        n(`[trusted-device] Failed to persist token: ${i.warning ?? "unknown"}`),
          p("bridge_trusted_device_enroll", "storage_failed", d);
        return;
      }
      CEe(),
        n(`[trusted-device] Enrolled device_id=${s.data.device_id ?? "unknown"}`),
        y("bridge_trusted_device_enroll", d);
    } catch (i) {
      n(`[trusted-device] Storage write failed: ${l(i)}`), p("bridge_trusted_device_enroll", "storage_failed", d);
    }
  } catch (m) {
    n(`[trusted-device] Enrollment error: ${l(m)}`),
      p("bridge_trusted_device_enroll", "unexpected_error", { trigger: c(e) });
  }
}
export {
  eer,
  Lyn,
  AEe,
  CV,
  C3,
  E9t,
  nRr,
  A9t,
  rRr,
  Ode,
  g8e,
  uh,
  cSt,
  zyr,
  Myn,
  CEe,
  vV,
  cMe,
  Lde,
  C9t,
  oRr,
  Nyn,
  h8e,
};
