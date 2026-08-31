// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{cb}from"/$bunfs/root/chunk-ghara6r1.js";import{zV,H7e,IT,Tt,twn,On,PT}from"/$bunfs/root/chunk-8tgj5dp2.js";function mEe(){return Tt()||n()}function n(){if(cb()!=="env-quad")return!1;try{return zV()&&twn()}catch{return!1}}function Jyt(){return!Tt()&&n()}function t8e(){let{info:e,storeBearerOnly:t}=s9t();if(!t||e===void 0)return e;return H7e()==="store"?e:void 0}function s9t(){let e=On();if(e!==void 0)return{info:e,storeBearerOnly:!1};return Jyt()?{info:PT(),storeBearerOnly:!0}:{info:void 0,storeBearerOnly:!1}}async function Qyt(e){let{info:t,storeBearerOnly:r}=s9t();if(!r||t===void 0)return t;return await IT(e)==="store"?t:void 0}function gp(e){return`Not authenticated \u2014 run /login (${e})`}
export{mEe,Jyt,t8e,s9t,Qyt,gp};
