// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{Ue}from"/$bunfs/root/chunk-qq1mdtb5.js";import{J,G}from"/$bunfs/root/chunk-f9h0bg01.js";class n{taints=[];changed=Ue();verdict=void 0;replaceTaints(i){if(i.length===this.taints.length&&i.every((e)=>this.taints.includes(e)))return;this.taints=i,this.changed.emit(this.taints)}registerVerdict(i){this.verdict=i}}var o=new J(()=>new n);function r(){return o.of(G().host)}function Mrr(i){r().replaceTaints(i)}function _h(i){return r().taints.includes(i)}function fR(){return r().taints}function Rpe(i){return r().changed.subscribe(i)}function Nrr(i){r().registerVerdict(i)}function LAe(i){return r().verdict?.isPolicyAllowed(i)??!1}function MAe(i){let e=r().verdict;if(!e)return"unregistered";return e.policyDenyKind(i)}function Frr(i,e,t){return r().verdict?.policyDeniedReason(i,e,t)??null}
export{Mrr,_h,fR,Rpe,Nrr,LAe,MAe,Frr};
