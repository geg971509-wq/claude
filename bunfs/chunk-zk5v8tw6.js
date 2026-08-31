// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{OH}from"/$bunfs/root/chunk-8tgj5dp2.js";import{m}from"/$bunfs/root/chunk-bzx56g36.js";import{kM}from"/$bunfs/root/chunk-avrc9gay.js";import{v,f}from"/$bunfs/root/chunk-saay52v7.js";var o=60000,r=1800000,t=2592000000,i=m(()=>f({recurringFrac:v().min(0).max(1),recurringCapMs:v().int().min(0).max(r),oneShotMaxMs:v().int().min(0).max(r),oneShotFloorMs:v().int().min(0).max(r),oneShotMinuteMod:v().int().min(1).max(60),recurringMaxAgeMs:v().int().min(0).max(t).default(kM.recurringMaxAgeMs),cacheLeadMs:v().int().min(0).max(60000).default(kM.cacheLeadMs)}).refine((n)=>n.oneShotFloorMs<=n.oneShotMaxMs));function Tte(){let n=OH("tengu_kairos_cron_config",kM,o),e=i().safeParse(n);return e.success?e.data:kM}
export{Tte};
