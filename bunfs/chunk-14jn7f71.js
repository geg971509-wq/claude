// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{K,Cu}from"/$bunfs/root/chunk-f9h0bg01.js";import{s}from"/$bunfs/root/chunk-r53tkxrh.js";import{w,c}from"/$bunfs/root/chunk-4xj01xwv.js";import{g}from"/$bunfs/root/chunk-ca80fke8.js";import{CF,Nze}from"/$bunfs/root/chunk-btcxpqw5.js";function Xcr(i){if(!i)return null;for(let n=i.length-1;n>=0;n--){let e=i[n];if(e?.type!=="attachment"||e.attachment.type!=="goal_status")continue;if(e.attachment.met||e.attachment.failed)return null;let t=e.attachment.condition;return typeof t==="string"&&t.length>0?t:null}return null}function r8t(i,n,e){let t=Xcr(i),l=t!==null?Nze():null;if(l!==null)g("goal_set",l.code,{origin:c("restored")});let r;if(t===null||l!==null){if(n((o)=>(r=o.activeGoal,o.activeGoal===void 0?o:{...o,activeGoal:void 0})),r!==void 0)CF(r,"resume_swap");return}if(e.add(K(),"Stop","",{type:"prompt",prompt:t}),n((o)=>(r=o.activeGoal,{...o,activeGoal:{condition:t,iterations:0,setAt:Date.now(),origin:"restored",tokensAtStart:Cu()}})),r!==void 0)CF(r,"resume_swap");s("tengu_goal_restored_on_resume",{promptLength:t.length}),s("tengu_stop_hook_added",{promptLength:t.length,via:w("goal"),origin:c("restored")})}
export{Xcr,r8t};
