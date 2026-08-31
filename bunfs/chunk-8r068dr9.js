// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{Zt}from"/$bunfs/root/chunk-jpf4kat5.js";import{R}from"/$bunfs/root/chunk-ypdw393e.js";import{iu,Ge}from"/$bunfs/root/chunk-fv016jr6.js";import{cr}from"/$bunfs/root/chunk-wn1jrcrk.js";import{O}from"/$bunfs/root/chunk-dqkj2bph.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function Frt(e,r){if(O()&&r!==void 0&&Zt(e)){await n(r,{namespace:"job",jobId:e});return}await i(cr(e),{recursive:!0})}async function Ose(e,r){if(O()&&r!==void 0&&Zt(e)){await n(r,c(e));return}await i(a(cr(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=iu(o.error);throw Object.assign(new R(`job folder not made (${Ge(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{Frt,Ose};
