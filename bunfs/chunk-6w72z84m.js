// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { b, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { D4t, O4t } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Sp } from "/$bunfs/root/chunk-qcx34e4j.js";
import { Dl } from "/$bunfs/root/chunk-kxyny47c.js";
import { randomUUID as i } from "crypto";
var d = "https://browser-intake-us5-datadoghq.com/api/v2/logs",
  c = 30000,
  p = 25,
  g = 1e4,
  o = 100;
function u() {
  return a.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || c;
}
async function m(e) {
  let r = b(e),
    s = new URLSearchParams({
      ddsource: "browser",
      "dd-api-key": O4t,
      "dd-evp-origin": "browser",
      "dd-evp-origin-version": {
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
      "dd-request-id": i(),
    });
  try {
    await Dl.post(`${d}?${s}`, r, { headers: { "Content-Type": "application/json" }, timeout: g });
  } catch (t) {
    if (Sp(t) && t.response)
      n(`dd-error-tracking: intake responded ${t.response.status} (batch=${e.length})`, { level: "warn" });
    else n(`dd-error-tracking: intake failed: ${l(t)}`, { level: "warn" });
  }
}
class RJn {
  reportsEnqueued = 0;
  capSentinelSent = !1;
  cachedUserBucket = void 0;
  sender = D4t({ maxBatchSize: p, getFlushIntervalMs: u, post: m });
}
var F_r = new J(() => new RJn());
function tLe() {
  return F_r.of(G().host);
}
async function uvr() {
  await tLe().sender.flush();
}
function nhn() {
  return tLe().reportsEnqueued >= o;
}
function E(e) {
  return {
    ...e,
    message: `ErrorTrackingCapReached: per-process cap of ${o} hit, dropping further reports`,
    error: {
      kind: "ErrorTrackingCapReached",
      message: `per-process cap of ${o} hit`,
      stack: `ErrorTrackingCapReached
    at enqueueErrorLog (src/services/errorTracking/client.ts)`,
      fingerprint: "cap-reached-sentinel",
      handling: "handled",
    },
    error_frames: void 0,
  };
}
function rhn(e) {
  let r = tLe();
  if (r.reportsEnqueued >= o) return;
  if ((r.reportsEnqueued++, r.reportsEnqueued === o && !r.capSentinelSent))
    (r.capSentinelSent = !0),
      n(`dd-error-tracking: per-process report cap reached (${o}); dropping further reports`, { level: "warn" }),
      r.sender.enqueue(E(e));
  else r.sender.enqueue(e);
}
async function dvr() {
  await tLe().sender.shutdown();
}
export { RJn, F_r, tLe, uvr, nhn, rhn, dvr };
