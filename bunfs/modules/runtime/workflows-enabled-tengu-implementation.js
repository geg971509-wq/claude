// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Fn, I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Sw } from "/$bunfs/root/chunk-6k63g5t6.js";
import { Mt } from "/$bunfs/root/chunk-fs02hzwy.js";
function vTe() {
  return a.CLAUDE_CODE_DISABLE_WORKFLOWS || Sw()?.settings.disableWorkflows === true;
}
class t {
  cached = void 0;
  resolve() {
    if (this.cached !== void 0) return this.cached;
    return (this.cached = i()), this.cached;
  }
}
var n = new J(() => new t());
function Zu() {
  if (vTe()) return false;
  if (!t_t()) return false;
  let { available: r, defaultOn: e } = o();
  if (!r) return false;
  return Sw()?.settings.enableWorkflows ?? e;
}
function Pgn() {
  return o().defaultOn;
}
function Zht() {
  return t_t() && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && o().available;
}
function e_t() {
  return Sw()?.settings.workflowKeywordTriggerEnabled ?? true;
}
function t_t() {
  return Mt("allow_workflows");
}
function xYn() {
  if (vTe() || !t_t()) return true;
  if (Sw()?.settings.enableWorkflows === false) return true;
  return a.CLAUDE_CODE_WORKFLOWS === false || !I("tengu_workflows_enabled", true);
}
function o() {
  return n.of(G().host).resolve();
}
function i() {
  if (a.CLAUDE_CODE_WORKFLOWS === true) {
    let e = I("tengu_workflows_enabled", true);
    return { available: e, defaultOn: e };
  }
  if (a.CLAUDE_CODE_WORKFLOWS === false) return { available: false, defaultOn: false };
  if (!I("tengu_workflows_enabled", true)) return { available: false, defaultOn: false };
  return { available: true, defaultOn: Fn() !== "pro" };
}
function IYn() {
  return I("tengu_jade_compass", true);
}
export { vTe, Zu, Pgn, Zht, e_t, t_t, xYn, IYn };
