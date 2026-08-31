// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{a}from"/$bunfs/root/chunk-fec4384a.js";import{J,G}from"/$bunfs/root/chunk-f9h0bg01.js";import{Fn,I}from"/$bunfs/root/chunk-8tgj5dp2.js";import{Sw}from"/$bunfs/root/chunk-6k63g5t6.js";import{Mt}from"/$bunfs/root/chunk-fs02hzwy.js";function vTe(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||Sw()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new J(()=>new t);function Zu(){if(vTe())return!1;if(!t_t())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return Sw()?.settings.enableWorkflows??e}function Pgn(){return o().defaultOn}function Zht(){return t_t()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function e_t(){return Sw()?.settings.workflowKeywordTriggerEnabled??!0}function t_t(){return Mt("allow_workflows")}function xYn(){if(vTe()||!t_t())return!0;if(Sw()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!I("tengu_workflows_enabled",!0)}function o(){return n.of(G().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=I("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!I("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:Fn()!=="pro"}}function IYn(){return I("tengu_jade_compass",!0)}
export{vTe,Zu,Pgn,Zht,e_t,t_t,xYn,IYn};
