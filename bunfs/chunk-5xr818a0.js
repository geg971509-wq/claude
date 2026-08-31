// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{K,MVt}from"/$bunfs/root/chunk-f9h0bg01.js";import{be}from"/$bunfs/root/chunk-gcks6mn0.js";import{ncr}from"/$bunfs/root/chunk-56sxk8k2.js";import{join as s}from"path";function Pue(){return s(be(),"uploads",K())}function KXn(t,e){return`${t}-${c(e)}`}var o=/^[A-Za-z0-9_-]{8}-/;function i(t){return ncr(t.replace(/_+$/,""))}function c(t){return i(t)?t+"_":t}function XXn(t){let e=t.replace(o,"");if(e.endsWith("_")&&i(e))return e.slice(0,-1);return e||t}var u=1024;function YXn(t,e){let n=MVt();if(!n.has(t)&&n.size>=u){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function JXn(t){return MVt().get(t)}
export{Pue,KXn,XXn,YXn,JXn};
