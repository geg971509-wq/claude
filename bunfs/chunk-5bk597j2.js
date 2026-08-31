// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{mi}from"/$bunfs/root/chunk-f9h0bg01.js";import{wt,On,Fn}from"/$bunfs/root/chunk-8tgj5dp2.js";import{Iq}from"/$bunfs/root/chunk-9r67t977.js";import{vK,CRe,aq}from"/$bunfs/root/chunk-ymtgabhy.js";import{BUe}from"/$bunfs/root/chunk-bzrzj1sr.js";import{Bge,g2e,jge}from"/$bunfs/root/chunk-tw0kgz4k.js";import{e}from"/$bunfs/root/chunk-8s7kcbyw.js";var s=import.meta.require("/$bunfs/root/chunk-zfgvpn6x.js").ExtraUsageDialog;async function Xme(u,n){let t=Iq(u);if(s&&g2e())return e(s,{onDone:t});let o=await jge({openInBrowser:!0},n.credentials);if(o.type==="message")return t(o.value),null;if(o.type==="confirm-admin-request"){if(wt())return t(Bge),null;return e(BUe,{extraUsage:o.extraUsage,accepts:()=>!0,onDone:t})}let i=Fn();if(i==="team"||i==="enterprise")return t(o.opened?`Opened ${o.url} in your browser to manage usage credits for your organization.`:`Visit ${o.url} to manage usage credits for your organization.`),null;if(!o.opened)return t(`Visit ${o.url} to manage usage credits.`),null;let r=On(),m=r&&{accountUuid:r.accountUuid,organizationUuid:r.organizationUuid},l=mi();return e(aq,{startingMessage:"Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",onDone:async(a,d,c)=>{let g=await vK(n,a,{setAppState:c,previousAccount:m,previousGatewayAuth:l});t(...CRe(n,a,g))}})}
export{Xme};
