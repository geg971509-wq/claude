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
import { q, f, oe } from "/$bunfs/root/chunk-saay52v7.js";
var Phe = go({
  kind: "it2_setup",
  payload: m(() => f({ tmuxAvailable: q() })),
  result: m(() => oe(["installed", "use-tmux", "cancelled"])),
  default: "cancelled",
  yieldsToPanels: true,
});
export { Phe };
