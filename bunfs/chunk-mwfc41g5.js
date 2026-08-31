// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{Qe,Kt,_t,ar,mc,Bt}from"/$bunfs/root/chunk-8tgj5dp2.js";import{yt}from"/$bunfs/root/chunk-06p73s1x.js";var r=null,o=null,s=null,n={name:import.meta.require("/$bunfs/root/chunk-zjzs2k1z.js").ARTIFACT_TOOL_NAME,ui:import.meta.require("/$bunfs/root/chunk-ccbqycmb.js")},f=[yt,Qe,Kt,ar,_t,mc,Bt,...r?[r.name]:[],...o?[o.name]:[],...s?[s.name]:[],...n?[n.name]:[]],i={get[yt](){return import.meta.require("/$bunfs/root/chunk-sev2vvhy.js").renderToolUseMessage},get[Qe](){return import.meta.require("/$bunfs/root/chunk-p5wzgwb0.js").renderToolUseMessage},get[Kt](){return import.meta.require("/$bunfs/root/chunk-ngkpg8h1.js").renderToolUseMessage},get[ar](){return import.meta.require("/$bunfs/root/chunk-tctnr2r8.js").renderToolUseMessage},get[_t](){return import.meta.require("/$bunfs/root/chunk-xddr1q7z.js").renderToolUseMessage},get[mc](){return import.meta.require("/$bunfs/root/chunk-szhpd6ac.js").renderToolUseMessage},get[Bt](){return import.meta.require("/$bunfs/root/chunk-vqd246s3.js").renderToolUseMessage},...r&&{[r.name]:r.ui.renderToolUseMessage},...o&&{[o.name]:o.ui.renderToolUseMessage},...s&&{[s.name]:s.ui.renderToolUseMessage},...n&&{[n.name]:n.ui.renderToolUseMessage}};function lge(e,t,l){if(e.renderToolUseMessage)return e.renderToolUseMessage(t,l);return URe(e.name,t,l)}function URe(e,t,l){if(Object.hasOwn(i,e))return i[e]?.(t,l);return null}
export{lge,URe};
