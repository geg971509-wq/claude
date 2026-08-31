// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{Mn}from"/$bunfs/root/chunk-f9h0bg01.js";import{we}from"/$bunfs/root/chunk-ypdw393e.js";import{n}from"/$bunfs/root/chunk-fv016jr6.js";import{h}from"/$bunfs/root/chunk-wkxx62a2.js";import{zXn}from"/$bunfs/root/chunk-gdhqsw8a.js";class o{active=void 0;transportPersists=void 0;setActive(r){this.active=r,this.transportPersists=r?.persistsOutboundFrames}remoteBridgeLive=null;markLocalTransport(){this.transportPersists=!1}}var dT=new Mn(()=>new o);function PE(r){return zXn()&&dT.of(r).transportPersists!==!1}function mo(r){return PE(r)||(dT.of(r).remoteBridgeLive?.()??!1)}function gpn(r,e){if(!PE(r))return e;return e.map((t)=>({name:t.name,status:t.status}))}function uKn(r,e){return PE(r)?[]:e}function h2t(r,e,t,i="last"){try{if(!PE(r))return i==="first"?[e,...t]:[...t,e];for(let s of t)n(`error_during_execution detail: ${s}`,{level:"error"});return[e]}catch(s){return h(we(s)),[e]}}function pI(r,e,t){return PE(r)?t:e}
export{dT,PE,mo,gpn,uKn,h2t,pI};
