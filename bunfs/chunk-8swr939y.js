// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { To } from "/$bunfs/root/chunk-1v3848mh.js";
import { xhe } from "/$bunfs/root/chunk-nq83tgen.js";
import { ay } from "/$bunfs/root/chunk-3fwkz19s.js";
function LUn(o, e, l) {
  To().bundledWorkflows.push({
    source: "built-in",
    ...e,
    script: o,
    disableModelInvocation: l?.disableModelInvocation,
  });
}
function wje() {
  if (ay()) return [];
  if (xhe()) return To().bundledWorkflowsV2;
  return To().bundledWorkflows;
}
export { LUn, wje };
