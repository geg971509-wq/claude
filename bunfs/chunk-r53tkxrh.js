// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{J,G}from"/$bunfs/root/chunk-f9h0bg01.js";function yFe(t){let e;for(let n in t)if(n.startsWith("_PROTO_")){if(e===void 0)e={...t};delete e[n]}return e??t}var xwr=1000;function Iwr(){return{eventQueue:[],sink:null,droppedEventCount:0}}function i(t,e){if(t.eventQueue.length>=xwr)t.eventQueue.shift(),t.droppedEventCount++;t.eventQueue.push(e)}class tlr{state=Iwr()}var Pwr=new J(()=>new tlr);function a(){return Pwr.of(G().host)}function DHr(t){a().state=t}function QRn(t){let e=a().state;if(e.sink!==null)return;if(e.sink=t,e.eventQueue.length>0){let n=e.eventQueue;e.eventQueue=[],queueMicrotask(()=>{for(let o of n)if(o.async)t.logEventAsync(o.eventName,o.metadata);else t.logEvent(o.eventName,o.metadata)})}}function s(t,e){let n=a().state;if(n.sink===null){i(n,{eventName:t,metadata:e,async:!1});return}n.sink.logEvent(t,e)}async function Ss(t,e){let n=a().state;if(n.sink===null){i(n,{eventName:t,metadata:e,async:!0});return}await n.sink.logEventAsync(t,e)}
export{yFe,xwr,Iwr,tlr,Pwr,DHr,QRn,s,Ss};
