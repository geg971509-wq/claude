// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{u0n}from"/$bunfs/root/chunk-f9h0bg01.js";import{fi}from"/$bunfs/root/chunk-8td9ks9h.js";function jgn(e){if(e)fi.terminalFocusGainedAt=Date.now();fi.terminalFocus=e?"focused":"blurred",u0n(e),fi.terminalFocusChanged.emit()}function Pne(){return fi.terminalFocus!=="blurred"}function UF(){return fi.terminalFocus}function QYn(){return fi.terminalFocusGainedAt}function GX(e){return fi.terminalFocusChanged.subscribe(e)}
export{jgn,Pne,UF,QYn,GX};
