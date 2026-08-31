// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{G}from"/$bunfs/root/chunk-f9h0bg01.js";import{bc}from"/$bunfs/root/chunk-42q7ctbx.js";import{h}from"/$bunfs/root/chunk-wkxx62a2.js";import{Lx}from"/$bunfs/root/chunk-he2phymk.js";import{Fw}from"/$bunfs/root/chunk-x2q1t6es.js";import{vp}from"/$bunfs/root/chunk-ph2x1s8t.js";import{UUe}from"/$bunfs/root/chunk-fzw7qj9a.js";import{e}from"/$bunfs/root/chunk-8s7kcbyw.js";var bkt=(p,r,m)=>new Promise((i,s)=>{let n=!1,o=null;function a(){return o!==null&&!bc(o)}(async()=>{let{rerender:t,unmount:l,waitUntilExit:g}=await Lx(e(vp,{session:G(),children:e(UUe,{settings:p,baseline:m,reveal:"default",onAccept:()=>{if(!a())return!1;if(n=!0,i("approved"),r)t(null);else l()},onReject:()=>{if(!a())return!1;if(n=!0,i("rejected"),r)t(null);else l()}})},"managed-settings-security"),Fw(!1));if(o=Date.now(),await g(),!n){let u=Error("Managed-settings consent dialog exited without an answer");h(u),s(u)}})().catch((t)=>{h(t),s(t)})});
export{bkt};
