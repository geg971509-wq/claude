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
import { i, q, f } from "/$bunfs/root/chunk-saay52v7.js";
var H1 = go({
  kind: "goal_proposal",
  payload: m(() => f({ condition: i() })),
  result: m(() => f({ approved: q(), explicit: q().optional() })),
  default: { approved: false },
  yieldsToPanels: true,
});
export { H1 };
