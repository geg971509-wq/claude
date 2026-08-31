// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{l}from"/$bunfs/root/chunk-ypdw393e.js";import{n}from"/$bunfs/root/chunk-fv016jr6.js";import{g}from"/$bunfs/root/chunk-ca80fke8.js";import{qt}from"/$bunfs/root/chunk-z9ex1x2t.js";import{Ho,bsn,hE}from"/$bunfs/root/chunk-zze8764r.js";function o(e){if(e.kind!=="resolved"||!Ho())return;let t=hE(),i=t.lastResolvedAccountToken;if(t.lastResolvedAccountToken=e.token,i===void 0||i===e.token)return;qt().identityEpoch+=1,NWe(),d()}function d(){let e=qt();if(!e.identityTrippedHandler){e.identityTripUnowned=!0;return}queueMicrotask(()=>{let t=qt().identityTrippedHandler;if(!t){qt().identityTripUnowned=!0;return}try{t()}catch(i){n(`MCP identity-change handler failed: ${l(i)}`,{level:"warn"})}})}function yat(e){let t=qt();return t.identityTrippedHandler=e,()=>{if(t.identityTrippedHandler===e)t.identityTrippedHandler=null}}function Sat(){let e=qt(),t=e.identityTripUnowned;return e.identityTripUnowned=!1,t}function r(){if(!Ho())return;o(bsn())}function aG(){let e=bsn();return o(e),e}function lr(){return r(),qt().identityEpoch}function MWe(){let e=qt();if(!Ho())return e.identityEpoch;return e.identityEpoch+=1,e.identityEpoch}var c="baseline:rearmed";function O6n(){if(!Ho())return;MWe(),hE().lastResolvedAccountToken=c}function lE(e){return r(),e===qt().identityEpoch}function NWe(){let e=qt();if(e.identityChangedThisProcess)return;e.identityChangedThisProcess=!0,g("mcp_discovery_cache","identity_changed")}function L6n(){return r(),qt().identityChangedThisProcess}
export{yat,Sat,aG,lr,MWe,O6n,lE,NWe,L6n};
