// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{wr}from"/$bunfs/root/chunk-4ddxwr9r.js";import{rt}from"/$bunfs/root/chunk-2rx5nghb.js";import{lv,Px,cv}from"/$bunfs/root/chunk-489c3cyq.js";import{se}from"/$bunfs/root/chunk-q1fyd2qk.js";var vkt=3,Bj=Math.max(2*lv,2*(cv+Px)),jj=20;function Qme(i,m,r=vkt+1){let e=Math.max(jj,m-Bj),t=i.split(`
`).map((n)=>rt(n,e));if(t.length<=r)return t.join(`
`);if(r<=1){let n=` \u2026 (+${t.length-1} more lines)`;return rt(wr(i),Math.max(1,e-se(n)))+n}let o=r-1;return t.slice(0,o).join(`
`)+`
\u2026 (+${t.length-o} more lines)`}
export{vkt,Bj,jj,Qme};
