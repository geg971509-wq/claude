// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{m}from"/$bunfs/root/chunk-bzx56g36.js";import{zr}from"/$bunfs/root/chunk-zze8764r.js";import{i,_e,H,f,N}from"/$bunfs/root/chunk-saay52v7.js";var K$n="Resumed agent. Its final report is not in this message.",X$n="Resumed agent. Its final report follows this JSON, framed by the harness.",Y$n="Resumed agent. Its final report was withheld: a hook rewrote this result and dropped the framed hand-back.";function ien({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${zr(n,`
`)||"(no text output)"}`}var sen=m(()=>f({message:i().optional(),display:i().optional(),inlineHandback:f({displayName:i(),content:H(f({type:N("text"),text:i()}))}).optional().catch(void 0),routing:_e().optional(),request_id:_e().optional(),target:_e().optional()}));function aen(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?ien(e.inlineHandback):e.message)}function J$n(e){let n=sen().safeParse(e);return n.success?aen(n.data)??"":""}
export{K$n,X$n,Y$n,ien,sen,aen,J$n};
