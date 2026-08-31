// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { K0, _E, h7 } from "/$bunfs/root/chunk-zze8764r.js";
import { oy } from "/$bunfs/root/chunk-fgavb5x0.js";
function $j(e) {
  let o = _E(),
    t = !!e.isAutoModeAvailable && o;
  if (!t)
    n(
      `[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${h7()}`,
    );
  return t;
}
function N8t(e) {
  return !!e.isBypassPermissionsModeAvailable && !oy();
}
function ekt(e, o) {
  switch (e.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      if (N8t(e)) return "bypassPermissions";
      if ($j(e)) return "auto";
      return "default";
    case "bypassPermissions":
      if ($j(e)) return "auto";
      return "default";
    case "dontAsk":
      return "default";
    default:
      return "default";
  }
}
function _On(e, o, t) {
  let s = ekt(e, o);
  return { nextMode: s, context: K0(e.mode, s, e, t) };
}
export { $j, N8t, ekt, _On };
