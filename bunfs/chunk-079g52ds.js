// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{kr,gh,ie}from"/$bunfs/root/chunk-8tgj5dp2.js";import{m}from"/$bunfs/root/chunk-bzx56g36.js";import{gL}from"/$bunfs/root/chunk-1ankawzw.js";import{T}from"/$bunfs/root/chunk-ma6kk3k0.js";var c=m(()=>T.array(T.object({id:T.string(),title:T.string().optional(),text:T.string(),footer:T.string().optional(),priority:T.number().default(0),maxImpressions:T.number().default(3),accentBar:T.boolean().default(!0),requiresModel:T.string().optional()})).default([])),i=[];function u(){let n=gh("tengu_startup_announcements",i),t=c().safeParse(n);return t.success?t.data:i}function s(n){return n.requiresModel===void 0||kr(n.requiresModel)}function Vme(n){let t=gL();if(t.startupAnnouncementPick!==void 0)return t.startupAnnouncementPick;let r=ie().announcementImpressions??{},o=u().filter((e)=>(r[e.id]??0)<e.maxImpressions&&s(e)).sort((e,a)=>a.priority-e.priority)[0];if(n&&o!==void 0)t.startupAnnouncementPick=o;return o}function XOn(){let n=u().filter(s).sort((t,r)=>r.priority-t.priority)[0];if(n===void 0)return!1;return JSON.stringify({id:n.id,title:n.title,text:n.text,footer:n.footer})}
export{Vme,XOn};
