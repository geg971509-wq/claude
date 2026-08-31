// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{AR,ox}from"/$bunfs/root/chunk-f9h0bg01.js";import{Ls}from"/$bunfs/root/chunk-fec4384a.js";import{$T,ye}from"/$bunfs/root/chunk-988p40e0.js";import{xi}from"/$bunfs/root/chunk-0spqrdaj.js";import{wye,FGn,ecn,VA,p9,kp,nh}from"/$bunfs/root/chunk-zze8764r.js";import{qhn,dKe}from"/$bunfs/root/chunk-2n1hsggr.js";import{Fd,FS,Ip}from"/$bunfs/root/chunk-e53y7x75.js";var a=ecn.filter((e)=>e!=="userSettings");function Rie(e){if(qhn())return!1;if(dKe())return!0;return(e??Xvt()).length>0}function Xvt(e=Yvt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${Ls()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(FS())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Ip(s)&&!u(t,s.url);if(s.source==="settings")return Ip(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Fd(`${n.name}@${t}`));return!1})}function u(e,r){let o=xi();if(a.some((t)=>o.includes(t)&&Object.hasOwn(ye(t)?.extraKnownMarketplaces??{},e)))return!0;return FGn({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(VA(),e)}function i(e){if(ox()||nh())return!1;let{servers:r}=kp(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&wye(o)==="rejected")&&p9(o,t))}function Yvt(){if(AR())return[];let e=xi(),r=e.includes("localSettings")?ye("localSettings"):null,o=[];if(e.includes("projectSettings")&&!$T()&&c(ye("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{Rie,Xvt,Yvt};
