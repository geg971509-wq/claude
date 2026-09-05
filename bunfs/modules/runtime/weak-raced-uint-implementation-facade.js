// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
class e {
  bridgeBinding = void 0;
  resolvedHostByToolUseId = new Map();
  shouldAutoEnable = void 0;
  wiredThisSession = false;
  installUpsellResolution = void 0;
  installUpsellBypassSuppressionCounted = false;
  trackedTabIds = new Set();
  tabGroupCleanupRegistered = false;
  unsubscribeSessionSwitch = void 0;
  unregisterExitCleanup = void 0;
  closesInFlight = new Map();
  lastExecutedTabUrlByScope = new Map();
  resolvedUrlByToolUseId = new Map();
  reset() {
    (this.bridgeBinding = void 0),
      (this.resolvedHostByToolUseId = new Map()),
      (this.shouldAutoEnable = void 0),
      (this.wiredThisSession = false),
      (this.installUpsellResolution = void 0),
      (this.installUpsellBypassSuppressionCounted = false),
      (this.trackedTabIds = new Set()),
      (this.tabGroupCleanupRegistered = false),
      this.unsubscribeSessionSwitch?.(),
      (this.unsubscribeSessionSwitch = void 0),
      this.unregisterExitCleanup?.(),
      (this.unregisterExitCleanup = void 0),
      (this.closesInFlight = new Map()),
      (this.lastExecutedTabUrlByScope = new Map()),
      (this.resolvedUrlByToolUseId = new Map());
  }
}
var s = new J(() => new e());
function pp() {
  return s.of(G().host);
}
export { pp };
