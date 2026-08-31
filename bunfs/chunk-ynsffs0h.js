// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{G}from"/$bunfs/root/chunk-f9h0bg01.js";import{wm}from"/$bunfs/root/chunk-492vgtnr.js";import{a}from"/$bunfs/root/chunk-fec4384a.js";import{Y}from"/$bunfs/root/chunk-s7e0px8j.js";import{Ec}from"/$bunfs/root/chunk-e17gvevg.js";import{XG}from"/$bunfs/root/chunk-zze8764r.js";import{H7n}from"/$bunfs/root/chunk-y8sx7bf9.js";import{dirname as o,join as t}from"path";var CDn=1e4;function vDn(e){try{let n=wm(a.CLAUDE_CODE_REMOTE_SESSION_ID??"","remote session id");return{sessionId:n,path:t(o(e),".ccr-dir-sync",`worker-${n}.json`)}}catch{return null}}function RDn(e){let n=H7n(e,(r)=>{Y("error","dir_sync_lane_verdict_listener_threw",{verdict:e,rejected:!0,first:r})});switch(n.kind){case"delivered":if(n.threw.length>0)Y("error","dir_sync_lane_verdict_listener_threw",{verdict:e,listeners:n.listeners,threw:n.threw.length,first:n.threw[0]});return;case"out_of_order":Y("error","dir_sync_lane_verdict_out_of_order",{verdict:e,basis:n.basis});return;case"repeat":case"queued":return}}function Oet(e){XG.of(G()).stage(e)}function kDn(e){XG.of(G()).markCopyCleared(e)}async function m8t(){let e=await Ec();if(e)XG.of(G()).openGate();return e}
export{CDn,vDn,RDn,Oet,kDn,m8t};
