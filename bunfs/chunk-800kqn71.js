// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{ie}from"/$bunfs/root/chunk-8tgj5dp2.js";import{n}from"/$bunfs/root/chunk-fv016jr6.js";import{gM}from"/$bunfs/root/chunk-e53y7x75.js";import{XE,Jt}from"/$bunfs/root/chunk-5n1tbe50.js";import{xd,Uin,Sct,bct,jin}from"/$bunfs/root/chunk-zze8764r.js";import{uc,Vt}from"/$bunfs/root/chunk-x06p1jhb.js";var d=14,f=10;async function Ase(){try{let e=Jt().pluginLoadCacheOnly;if(e===void 0)return[];if(gM()!==null)return[];let{enabled:s}=await e;if(s.length===0)return[];let u=xd(),l=XE(),g=ie().numStartups,c=Date.now(),r=[];for(let t of s){let{marketplace:o}=Vt(t.repository);if(!o||uc(o))continue;if(jin(t,u,l)!=="user-install")continue;if(p(t))continue;let i=Sct(t.repository);if(!i)continue;if(Uin(t.repository))continue;let{sessionsSinceLastUse:m,daysSinceLastUse:a}=bct(i,g,c);if(a>=d&&m>=f)r.push({pluginId:t.repository,name:t.name,daysSinceLastUse:a})}return r.sort((t,o)=>o.daysSinceLastUse-t.daysSinceLastUse),r}catch(e){return n(`plugin-disuse tip: failed to compute disused plugins: ${e}`,{level:"error"}),[]}}function DNn(e){if(gM()!==null)return null;let s=Sct(e);if(!s)return null;if(Uin(e))return 0;return bct(s,ie().numStartups,Date.now()).daysSinceLastUse}function p(e){return Boolean(e.themesPath||e.themesPaths?.length||e.outputStylesPath||e.outputStylesPaths?.length||e.monitors?.length||e.workflowsPath||e.workflowsPaths?.length)}
export{Ase,DNn};
