// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ber, Fl, Lbt, Tt, On, Fn, ie, I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";

// Consolidated from chunk-2am7kb6k.js
function f2t() {
  if (a.DISABLE_COST_WARNINGS) return false;
  let o = Tt();
  if (o && iH()) return true;
  if (o) return false;
  let n = Fl(),
    i = Lbt();
  if (!n.hasToken && !i) return false;
  let e = ie(),
    r = e.oauthAccount?.organizationRole,
    t = e.oauthAccount?.workspaceRole;
  if (!r || !t) return false;
  return ["admin", "billing"].includes(r) || ["workspace_admin", "workspace_billing"].includes(t);
}
function vf() {
  let o = ber();
  if (o !== null) return o;
  if (!Tt()) return false;
  let n = Fn();
  if (n === "max" || n === "pro") return true;
  let e = ie().oauthAccount?.organizationRole;
  return !!e && ["admin", "billing", "owner", "primary_owner"].includes(e);
}
function iH() {
  return On()?.billingType === "usage_based";
}
export { f2t, vf, iH };

// Consolidated from chunk-rt5p4yax.js
function t() {
  return process.argv.includes("--agent-teams");
}
function io() {
  if (!a.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS && !t()) return false;
  if (!I("tengu_amber_flint", true)) return false;
  return true;
}
async function Gun() {
  if (!io()) return;
  let { captureTeammateModeSnapshot: e } = await import("/$bunfs/root/chunk-s4sn23h1.js");
  e();
}
export { io, Gun };

// Consolidated from chunk-rk78x2sa.js
var pQ = {
  heading: "Learn the moves",
  body:
    "Quick lessons on the things power users do \u2014 plan mode, undo, " +
    "subagents, memory. About 5 minutes. Come back any time with /powerup.",
  banner:
    "New here? Type /powerup for a 5-minute tour \u2014 modes, undo, " +
    "@-mentions, and how to teach Claude your rules.",
};
function r7t() {
  let e = a.CLAUDE_CODE_POWERUP_ONBOARDING;
  if (e === "banner" || e === "step") return e;
  return I("tengu_birch_lantern", "off");
}
export { pQ, r7t };
