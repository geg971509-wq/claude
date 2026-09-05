// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
class t {
  inFlightSnapshot = { tasks: 0, queued: 0, kinds: [], items: [] };
  inFlightSnapshotChanged = Ue();
  pendingStructuredResult = void 0;
  relocatedCwd = void 0;
  ownStateWriteDepth = 0;
  warnedUnknownDisabledSurface = false;
  publishInFlightSnapshot(n) {
    this.inFlightSnapshot = n;
    try {
      this.inFlightSnapshotChanged.emit();
    } catch {}
  }
  reset() {
    (this.pendingStructuredResult = void 0),
      (this.relocatedCwd = void 0),
      (this.warnedUnknownDisabledSurface = false),
      this.publishInFlightSnapshot({ tasks: 0, queued: 0, kinds: [], items: [] });
  }
}
var e = new J(() => new t());
function mI() {
  return e.of(G().host);
}
export { mI };
