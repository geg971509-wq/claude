// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { G, $n } from "/$bunfs/root/chunk-f9h0bg01.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { nl, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { ye } from "/$bunfs/root/chunk-988p40e0.js";
import { _K } from "/$bunfs/root/chunk-g9r19qkf.js";
import { a6 } from "/$bunfs/root/chunk-wgz3g40p.js";
import { _E } from "/$bunfs/root/chunk-zze8764r.js";
var gkt = "Auto mode is now Claude Code's default permission mode.",
  hkt =
    "Auto mode lets Claude handle permission prompts automatically. Claude checks each tool call for risky actions and prompt injection before executing, runs the ones it assesses as lower-risk, and blocks the rest.",
  Kme = "https://code.claude.com/docs/en/permission-modes";
function ERe(e) {
  let o = ie();
  return (
    a6() &&
    e === "auto" &&
    !_K(G().host) &&
    !nl() &&
    !$n() &&
    !a.CLAUDE_BRIDGE_REATTACH_SESSION &&
    _E() &&
    o.hasCompletedOnboarding === true &&
    !o.hasSeenAutoDefaultNotice
  );
}
function o7t() {
  return (
    !["policySettings", "userSettings", "flagSettings"].some((o) => ye(o)?.skipAutoPermissionPrompt === true) &&
    !ie().hasSeenAutoModeEntryWarning
  );
}
export { gkt, hkt, Kme, ERe, o7t };
