// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{r5t}from"/$bunfs/root/chunk-f9h0bg01.js";var Uv={red:"red_FOR_SUBAGENTS_ONLY",blue:"blue_FOR_SUBAGENTS_ONLY",green:"green_FOR_SUBAGENTS_ONLY",yellow:"yellow_FOR_SUBAGENTS_ONLY",purple:"purple_FOR_SUBAGENTS_ONLY",orange:"orange_FOR_SUBAGENTS_ONLY",pink:"pink_FOR_SUBAGENTS_ONLY",cyan:"cyan_FOR_SUBAGENTS_ONLY"},Qp=Object.keys(Uv);function xF(e){return e!==void 0&&Qp.includes(e)}function ene(e){return e.userOverride??e.agentDefinitionColor}function tne(e){if(e==="general-purpose")return;let n=r5t().get(e);if(n&&Qp.includes(n))return Uv[n];return}function pVe(e,o){let n=r5t();if(!o){n.delete(e);return}if(Qp.includes(o))n.set(e,o)}
export{Uv,Qp,xF,ene,tne,pVe};
