// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { mh, I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Me } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { a, Zn } from "/$bunfs/root/chunk-fec4384a.js";
import { Wf } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { Sw } from "/$bunfs/root/chunk-6k63g5t6.js";
function iMe() {
  return r() !== null;
}
function r() {
  if (a.CLAUDE_CODE_DISABLE_AGENT_VIEW) return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (Sw()?.settings.disableAgentView === !0) return "is disabled by the 'disableAgentView' setting";
  return null;
}
function cy() {
  return !iMe();
}
async function sMe(e = {}) {
  if (Sw() === null) {
    let { getSettingsWithErrors: t } = await import("/$bunfs/root/chunk-vbxndy62.js");
    t();
  }
  if (e.kickGrowthBook !== !1) mh().catch(() => {});
}
function l8e() {
  return Zn.CLAUDE_CODE_FLEET_PAST_SESSIONS === !0 || I("tengu_fleet_past_sessions", !1);
}
function bEe() {
  return cy();
}
function TV() {
  return !1;
}
function Pde() {
  return I("tengu_amber_anchor", !1);
}
function yyn() {
  return I("tengu_copper_lantern", !1);
}
function Kvr() {
  return I("tengu_quiet_harbor", !1) ? "ask" : "transient";
}
function ou() {
  return Pde() ? "daemon" : "background service";
}
function EV() {
  return Wf(ou());
}
function rre(e) {
  return bEe() ? ` \u2014 run 'claude daemon ${e}'` : "";
}
function Dde(e, t) {
  let o = t ?? r() ?? "is not available in this environment";
  process.stderr.write(`'${e}' ${o}.
`),
    process.exit(1);
}
var sSt = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";
function g9t() {
  return !1;
}
function Xvr(e) {
  return !1;
}
function Syn() {
  return !!a.CLAUDE_AGENTS_SELECT;
}
function byn() {
  let e = Me(process.env[sSt]);
  return delete process.env[sSt], e;
}
export { iMe, cy, sMe, l8e, bEe, TV, Pde, yyn, Kvr, ou, EV, rre, Dde, sSt, g9t, Xvr, Syn, byn };
