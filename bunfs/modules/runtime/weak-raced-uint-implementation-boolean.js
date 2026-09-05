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
class e {
  getCurrentMode = null;
  modeAtUnwire = void 0;
  onPeerHeld = null;
  onPeerHoldReleased = null;
  onPeerHoldDropped = null;
  sendPeerReceipt = null;
  recordCorrespondent = null;
  publishAvailability = null;
  unsubscribeAvailabilityRefresh = null;
  shutdownSettleHandle = null;
  shuttingDown = false;
  held = [];
  announced = new WeakMap();
  reset() {
    (this.held.length = 0),
      (this.getCurrentMode = null),
      (this.modeAtUnwire = void 0),
      (this.onPeerHeld = null),
      (this.onPeerHoldReleased = null),
      (this.onPeerHoldDropped = null),
      this.shutdownSettleHandle?.(),
      (this.shutdownSettleHandle = null),
      (this.shuttingDown = false),
      (this.sendPeerReceipt = null),
      (this.recordCorrespondent = null),
      (this.publishAvailability = null),
      this.unsubscribeAvailabilityRefresh?.(),
      (this.unsubscribeAvailabilityRefresh = null);
  }
}
class n {
  outstandingSends = [];
  awaitingTerminal = [];
  reset() {
    (this.outstandingSends.length = 0), (this.awaitingTerminal.length = 0);
  }
}
class o {
  pacer = null;
  reset() {
    this.pacer = null;
  }
}
class s {
  ownUdsHopToken = void 0;
  ownBridgePeerAddressResolver = void 0;
  messageDropped = Ue();
  reset() {
    (this.ownUdsHopToken = void 0), (this.ownBridgePeerAddressResolver = void 0), this.messageDropped.clear();
  }
}
class l {
  pending = new Map();
  pendingSandbox = new Map();
  pendingPlanApproval = null;
  clear() {
    this.pending.clear(), this.pendingSandbox.clear(), (this.pendingPlanApproval = null);
  }
}
class d {
  reportedDroppedEntries = new Set();
  pendingPrunes = new Map();
}
class r {
  updated = Ue();
  leaderTeamName = void 0;
  reset() {
    if (this.leaderTeamName === void 0) return;
    this.leaderTeamName = void 0;
    try {
      this.updated.emit();
    } catch {}
  }
}
class i {
  inbound = new e();
  receipts = new n();
  outbound = new o();
  ingress = new s();
  swarmPermissions = new l();
  mailbox = new d();
  taskList = new r();
}
var t = new J(() => new i());
function li() {
  return t.of(G().host);
}
export { li };
