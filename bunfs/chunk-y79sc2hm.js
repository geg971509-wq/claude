// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, jC, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
var r = new J(() => Ue());
function i() {
  return r.of(G().host);
}
var kDe = jC(i);
function Nmt(e) {
  return {
    setMode(n) {
      kDe.emit({ kind: "agent-mode", agentId: e, mode: n });
    },
    setRetryStatus(n) {
      kDe.emit({ kind: "agent-retry-status", agentId: e, retryStatus: n });
    },
    setTurnEffort(n, t = null) {
      kDe.emit({ kind: "agent-turn-effort", agentId: e, turnEffort: n, turnModel: t });
    },
  };
}
var T2t = {
  setSpinnerMessage(e) {
    kDe.emit({ kind: "main-message", message: e });
  },
  setSpinnerColors(e, n) {
    kDe.emit({ kind: "main-colors", color: e, shimmerColor: n });
  },
};
export { kDe, Nmt, T2t };
