// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { kL } from "/$bunfs/root/chunk-ab0z7hdw.js";
import { go } from "/$bunfs/root/chunk-gpvgrng0.js";
import { qm } from "/$bunfs/root/chunk-saay52v7.js";
var r9e = go({
  kind: "computer_use_approval",
  payload: m(() => qm((e) => typeof e === "object" && e !== null)),
  result: m(() => qm((e) => typeof e === "object" && e !== null)),
  default: { granted: [], denied: [], flags: kL },
  yieldsToPanels: true,
});
export { r9e };
