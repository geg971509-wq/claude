// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{NO}from"/$bunfs/root/chunk-ntyhd04p.js";import{b,Uf}from"/$bunfs/root/chunk-fv016jr6.js";var i=/[\x7f-\x9f]/g,s=(e)=>e.replace(i,(n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4,"0")}`),c=/[\x00-\x1f\x7f-\x9f]/g;function GDt(e){return e.replace(c,"")}function zDt(e,{verbose:n}){if(Object.keys(e).length===0)return"";let r=NO(e);if(r!==null)return r;return Object.entries(e).map(([t,o])=>{let l=s(b(o));return`${s(Uf(t).slice(1,-1))}: ${l}`}).join(", ")}var a=/^[CDG][A-Z0-9]{6,}$/;function Orn(e){let n=e.replace(/^#/,"");return a.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var u=new Set(["slack_send_message","slack_post_message"]),Lrn="mcp-slack-send";function Vst(e){return u.has(e)}function p6n(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=GDt(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:Orn(n)}}function Kst(){return{uiTableKey:Lrn,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?zDt(e,n):""}}}
export{GDt,zDt,Orn,Lrn,Vst,p6n,Kst};
