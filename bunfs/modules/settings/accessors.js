// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { En, ye, Je } from "/$bunfs/root/chunk-988p40e0.js";

// Consolidated from chunk-fgavb5x0.js
function kgn() {
  if ((En() || {}).permissions?.disableBypassPermissionsMode === "disable")
    return "Bypass permissions mode was disabled by settings";
  return;
}
function oy() {
  return kgn() !== void 0;
}
export { kgn, oy };

// Consolidated from chunk-mprgwde4.js
function FUe() {
  let t = ye("policySettings");
  return t !== null && Object.keys(t).length > 0;
}
export { FUe };

// Consolidated from chunk-q3evfmyc.js
function OP() {
  let e = Je()?.autoUpdatesChannel;
  if (e && e !== "latest") return e;
  return "latest";
}
export { OP };
