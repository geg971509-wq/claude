// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { gr, w_, GKe, bu, Za, GLe, _V, qS, S_n, h3, zKe, b_n, gvr, hvr, zLe, w_n, UWt, T_n } from "/$bunfs/root/chunk-dck778n3.js";

// Consolidated from chunk-f7y0mdt6.js
function Ja(r, a) {
  let { signalB: o, timeoutMs: i, refTimer: d } = a ?? {},
    n = gr();
  if (r?.aborted || o?.aborted) return n.abort(), { signal: n.signal, cleanup: () => {} };
  let e,
    t = () => {
      if (e !== void 0) clearTimeout(e);
      n.abort();
    };
  if (i !== void 0) {
    if (((e = setTimeout(t, i)), !d)) e.unref?.();
  }
  r?.addEventListener("abort", t), o?.addEventListener("abort", t);
  let u = () => {
    if (e !== void 0) clearTimeout(e);
    r?.removeEventListener("abort", t), o?.removeEventListener("abort", t);
  };
  return { signal: n.signal, cleanup: u };
}
export { Ja };

// Consolidated from chunk-scp2hvz7.js
export {
  UWt as RECOVERY_ABORT_TIMEOUT_MS,
  S_n as SERVER_FALLBACK_TOMBSTONE_REASON,
  b_n as SUBAGENT_PARK_REASON,
  GKe as attachDetachableAbortRelay,
  zLe as classifyAbortReasonForTelemetry,
  gr as createAbortController,
  w_ as createChildAbortController,
  T_n as createRecoveryAbortController,
  h3 as isServerFallbackDiscard,
  _V as isSilentAbortReason,
  hvr as isSubagentParkAbort,
  w_n as isUserAttributableAbortKind,
  GLe as isUserInitiatedAbortReason,
  zKe as serverFallbackTombstoneAbortReason,
  qS as shutdownInterruptStamp,
  gvr as subagentParkAbortReason,
  Za as unwrapAbortReason,
  bu as userAbortReason,
};
