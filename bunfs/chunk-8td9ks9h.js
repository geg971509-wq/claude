// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { Ma } from "/$bunfs/root/chunk-nwb64bac.js";
var o = {
  notice: null,
  shownLoggedForDraftId: null,
  promptedCount: 0,
  sessionDraftCount: 0,
  seededFromDisk: false,
  seedStarted: false,
  toolCallCount: 0,
};
class e {
  autoDenyPresence = Ue();
  mainLoopBusy = Ma({ busy: false });
  legacyDialogFocus = Ma({ focus: null });
  blockingToolProgress = Ma({ active: false });
  dialogHostlessScreen = Ma({ screen: null });
  onScreenBlockingDialog = Ma({ surfaceMounted: false, kind: null });
  pendingSurveyFeedbackSource = null;
  terminalFocus = "unknown";
  terminalFocusGainedAt = Number.NEGATIVE_INFINITY;
  terminalFocusChanged = Ue();
  feedbackNotice = Ma(o);
  clawdEntranceTaken = false;
  startupUpdateSummary = void 0;
  experimentEnrollmentsUnseen = void 0;
  orgMemoryWritesRowSeen = false;
  orgMemoryReadRowSeen = false;
  remoteHomeSettingsRowSeen = false;
}
var fi = new e();
export { fi };
