// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{Kr}from"/$bunfs/root/chunk-f9h0bg01.js";import{a}from"/$bunfs/root/chunk-fec4384a.js";import{Ct}from"/$bunfs/root/chunk-wkxx62a2.js";import{IT,PT}from"/$bunfs/root/chunk-8tgj5dp2.js";import{Ne}from"/$bunfs/root/chunk-82w4mtvq.js";import{Mt}from"/$bunfs/root/chunk-fs02hzwy.js";function yrn({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function Srn(t){let e=Kr(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let r=await IT(t);return r==="env"||r==="fd"?e:void 0}catch{return}}async function HZ(t){let e;try{e=PT()?.accountUuid}catch{e=void 0}return yrn({storedAccountUuid:e,hostAccountUuid:await Srn(t)})}function h8(){return!Ct()&&Ne()==="firstParty"&&Mt("allow_remote_sessions")}
export{yrn,Srn,HZ,h8};
