// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{qt}from"/$bunfs/root/chunk-z9ex1x2t.js";var s=null;function A6n(e){let n=s;return s=e,n}function eat(){return s}var r=null;function C6n(e){let n=r;return r=e,n}async function L1(e){return await r?.(e)??!1}class FZ extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function v6n(e){let n=t;return t=e,n}function xae(){return t}function tat(e){let n=qt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function Frn(){let e=qt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function R6n(){let e=Frn();if(e)process.stderr.write(`${e}
`)}
export{A6n,eat,C6n,L1,FZ,v6n,xae,tat,Frn,R6n};
