// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{K}from"/$bunfs/root/chunk-f9h0bg01.js";import{na}from"/$bunfs/root/chunk-0g6cj4h1.js";import{_H,s3}from"/$bunfs/root/chunk-gmj1vprd.js";import{Oa}from"/$bunfs/root/chunk-nfmyt8cw.js";import{Qp,ene}from"/$bunfs/root/chunk-d5s7a9by.js";import{fu,IGe}from"/$bunfs/root/chunk-wn1jrcrk.js";import{Hl}from"/$bunfs/root/chunk-c6k0ecxv.js";import{Xqe}from"/$bunfs/root/chunk-zze8764r.js";import{Pse}from"/$bunfs/root/chunk-8t7n4wt5.js";var g=["default","reset","none","gray","grey"];async function iEr(n,e,t){return n(await ixt(t,e),{display:"system"}),null}async function ixt(n,e){if(na())return"Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";let t=n?.trim()??"",o=t===""?Qp[Math.floor(Math.random()*Qp.length)]:t.toLowerCase(),r=g.includes(o);if(!r&&!Qp.includes(o)){let s=Qp.join(", ");return`Invalid color "${o}". Available colors: ${s}, default`}let m=K(),d=Hl(),i=r?"default":o,l=r?void 0:o;await Xqe(m,i,d,e.storageV5),e.setAppState((s)=>Pse(s,{color:l}));let a=e.getAppState(),c=a.agent?a.agentDefinitions.activeAgents.find((s)=>s.agentType===a.agent):void 0;return IGe(fu(),ene({userOverride:l,agentDefinitionColor:c?.color}),e.storageV5),f(i,e.credentials),r?"Session color reset to default":`Session color set to: ${o}`}function f(n,e){let t=Oa()?.bridgeSessionId;if(!t)return;let o=_H();import("/$bunfs/root/chunk-3q6bb1yt.js").then(({updateBridgeSessionColorTag:r})=>r(t,n,Qp,{baseUrl:s3(),getAccessToken:o?()=>o:void 0,credentials:e}).catch(()=>{}))}
export{iEr,ixt};
