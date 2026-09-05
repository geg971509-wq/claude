// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { go } from "/$bunfs/root/chunk-gpvgrng0.js";
import { qm } from "/$bunfs/root/chunk-saay52v7.js";
var SB = go({
  kind: "mcp_url_elicitation",
  payload: m(() => qm((t) => typeof t === "object" && t !== null && "serverName" in t && "params" in t)),
  result: m(() => qm((t) => typeof t === "object" && t !== null)),
  default: { action: "cancel" },
  yieldsToPanels: true,
});
export { SB };
