// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{Mn,G}from"/$bunfs/root/chunk-f9h0bg01.js";import{A,u,F}from"/$bunfs/root/chunk-twm95mhz.js";F();var KQ="continue";function S1n(t,e,n){if(n&&e===KQ&&t===KQ+"/")return"/";if(e.startsWith("/")&&t.length===KQ.length+e.length+1&&t.startsWith(KQ+e))return t.slice(KQ.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new Mn(()=>new o);function i(){return l.of(G())}function uxt(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function Cdr(){return i().lastResult}function b1n(){return i().inFlight}function nQt(t){i().inFlight=t}function dxt(){uxt(null),i().inFlight=null}function Nrt(){let[t,e]=u(()=>i().lastResult);return A(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{KQ,S1n,uxt,Cdr,b1n,nQt,dxt,Nrt};
