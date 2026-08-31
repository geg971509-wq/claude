// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{s}from"/$bunfs/root/chunk-r53tkxrh.js";import{w,c}from"/$bunfs/root/chunk-4xj01xwv.js";import{pT,Dmt}from"/$bunfs/root/chunk-dxqac26z.js";import{Bue}from"/$bunfs/root/chunk-fveqn4y7.js";function Nh(t,n,i){let _=Dmt(pT),e=Bue(t,n,_);if(e===void 0){let a=`${t}:${n}`,o=pT.loggedShortcutFallbacks;if(!o.has(a))o.add(a),s("tengu_keybinding_fallback_used",{action:t,context:c(n),fallback:i,reason:w("action_not_found")});return i}return e===null?"":e}
export{Nh};
