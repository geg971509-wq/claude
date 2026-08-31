// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import"/$bunfs/root/chunk-f9h0bg01.js";import"/$bunfs/root/chunk-qq1mdtb5.js";import"/$bunfs/root/chunk-tx16jn0x.js";import{h}from"/$bunfs/root/chunk-wkxx62a2.js";import"/$bunfs/root/chunk-vfy57cpd.js";import"/$bunfs/root/chunk-4xj01xwv.js";import"/$bunfs/root/chunk-ypdw393e.js";import"/$bunfs/root/chunk-fv016jr6.js";import"/$bunfs/root/chunk-gcks6mn0.js";import"/$bunfs/root/chunk-qk7r0t2g.js";import"/$bunfs/root/chunk-4ddxwr9r.js";import{pc}from"/$bunfs/root/chunk-1pn2pk9v.js";import"/$bunfs/root/chunk-8rvws1bp.js";import{k1n,H1n}from"/$bunfs/root/chunk-twrrexwy.js";import"/$bunfs/root/chunk-56sxk8k2.js";import"/$bunfs/root/chunk-a4q326ap.js";var t=new WeakMap;function i(r){try{if(r.type!=="thinking"||!r.signature)return!1;let n;if(t.has(r))n=t.get(r);else n=H1n(r.signature),t.set(r,n);return n===k1n}catch(n){if(pc().claim("narration_classifier_error"))h(n);return!1}}function o(r){return!!r.thinking?.trim()&&i(r)}export{o as isNarrationSummaryBlock,i as isNarrationTaggedBlock};
