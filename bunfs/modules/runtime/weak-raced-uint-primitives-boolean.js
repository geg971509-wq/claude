// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { zu, $n } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Me } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
function Fs() {
  if (!Me(process.env.CLAUDE_CODE_COORDINATOR_MODE)) return false;
  if (zu() && !$n() && !a.CLAUDE_CODE_REMOTE) return false;
  return true;
}
function dTe(e) {
  return Fs() && e.agentId === void 0;
}
export { Fs, dTe };
