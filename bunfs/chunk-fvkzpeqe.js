// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{vX}from"/$bunfs/root/chunk-5g92v3fd.js";import{cg,_s}from"/$bunfs/root/chunk-1mp2j0tx.js";var s=["default"];function z2t(r){let e=r.toLowerCase();if(!s.includes(e))return null;return e}function _I(r,e){let o=cg(e);return r.filter((n)=>{if(_s(e,n,o))return!1;if(n.underlyingV1ToolName&&_s(e,{name:n.underlyingV1ToolName},o))return!1;if(n.mcpInfo===void 0){let t=vX(n.name);if(t!==void 0&&_s(e,t,o)&&t.isEnabled())return!1}return n.mcpInfo?.effectiveMaxPermission!=="blocked"})}
export{z2t,_I};
