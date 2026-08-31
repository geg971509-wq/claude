// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{Me}from"/$bunfs/root/chunk-qq1mdtb5.js";import{Gn,g0}from"/$bunfs/root/chunk-2rx5nghb.js";import{Gwt}from"/$bunfs/root/chunk-0spqrdaj.js";import{mGn,hpt,il}from"/$bunfs/root/chunk-zze8764r.js";import{mo}from"/$bunfs/root/chunk-4sw5yxwb.js";function Ert(o){let r=d(o);if(r===null)return null;let t=Gn(o.totalTokens-o.rawMaxTokens),l=Gn(o.rawMaxTokens);if(r==="hard_limit"){let m=Me(process.env.DISABLE_COMPACT)?"/clear":"/compact or /clear";return`Context exceeds the ${l}-token limit by ${t} tokens \u2014 run ${m} to continue.`}let i=Me(process.env.DISABLE_COMPACT)?"/clear":"/compact";return`Context is ${t} tokens past the ${l}-token compaction window \u2014 run ${i} to reduce usage.`}function d(o){if(o.totalTokens<=o.rawMaxTokens)return null;return o.autocompactSource==="auto"?"hard_limit":"compaction_window"}function Art(o,r){let{categories:t,totalTokens:l,rawMaxTokens:i,percentage:m,model:T,memoryFiles:u,mcpTools:g,agents:k,skills:p,messageBreakdown:f,systemTools:c,systemPromptSections:y}=o,e=`## Context Usage

`;e+=`**Model:** ${T}  
`,e+=`**Tokens:** ${Gn(l)} / ${Gn(i)} (${m}%)
`;let C=Ert(o);if(C)e+=`**Over limit:** ${C}
`;e+=`
`;let x=t.filter((n)=>n.tokens>0&&n.name!=="Free space"&&n.name!=="Autocompact buffer");if(x.length>0){e+=`### Estimated usage by category

`,e+=`| Category | Tokens | Percentage |
`,e+=`|----------|--------|------------|
`;for(let a of x){let S=(a.tokens/i*100).toFixed(1);e+=`| ${a.name} | ${Gn(a.tokens)} | ${S}% |
`}let n=t.find((a)=>a.name==="Free space");if(n&&n.tokens>0){let a=(n.tokens/i*100).toFixed(1);e+=`| Free space | ${Gn(n.tokens)} | ${a}% |
`}let s=t.find((a)=>a.name==="Autocompact buffer");if(s&&s.tokens>0){let a=(s.tokens/i*100).toFixed(1);e+=`| Autocompact buffer | ${Gn(s.tokens)} | ${a}% |
`}e+=`
`}if(g.length>0){e+=`### MCP Tools

`,e+=`| Tool | Server | Tokens |
`,e+=`|------|--------|--------|
`;for(let n of g)e+=`| ${n.name} | ${n.serverName} | ${Gn(n.tokens)} |
`;e+=`
`}if(c&&c.length>0,y&&y.length>0,k.length>0){e+=`### Custom Agents

`,e+=`| Agent Type | Source | Tokens |
`,e+=`|------------|--------|--------|
`;for(let n of k){let s;switch(n.source){case"projectSettings":s="Project";break;case"userSettings":s="User";break;case"localSettings":s="Local";break;case"flagSettings":s="Flag";break;case"policySettings":s="Policy";break;case"plugin":s="Plugin";break;case"built-in":s="Built-in";break;default:s=String(n.source)}e+=`| ${n.agentType} | ${s} | ${Gn(n.tokens)} |
`}e+=`
`}if(u.length>0){e+=`### Memory Files

`,e+=`| Type | Path | Tokens |
`,e+=`|------|------|--------|
`;for(let n of u)e+=`| ${n.type} | ${n.path} | ${Gn(n.tokens)} |
`;e+=`
`}if(p&&p.tokens>0&&p.skillFrontmatter.length>0){e+=`### Skills

`,e+=`| Skill | Source | Tokens |
`,e+=`|-------|--------|--------|
`;for(let n of p.skillFrontmatter){let s=Gwt(n.source)+(n.pluginName?` (${n.pluginName})`:"");e+=`| ${n.name} | ${s} | ${g0(n.tokens)} |
`}e+=`
`}return e}async function t0e(o){let{session:r,messages:t,getAppState:l,options:{mainLoopModel:i,tools:m,agentDefinitions:T,customSystemPrompt:u,appendSystemPrompt:g,appendSubagentSystemPrompt:k,excludeDynamicSections:p}}=o,f=il(t),c=l();return hpt(f,i,async()=>c.toolPermissionContext,m,T,{session:r,toolUseContext:{options:{customSystemPrompt:u,appendSystemPrompt:g,appendSubagentSystemPrompt:k},getMcp:o.getMcp,storageV5:o.storageV5,credentials:o.credentials},originalMessages:f,configuredWindow:c.autoCompactWindow,excludeDynamicSections:p})}async function rEr(o,r){let t=await t0e(r),l=mo(r.session),i=l?{...t,memoryFiles:[]}:t;return{type:"text",value:Art(i,{skipCollapseStatus:l}),contextUsage:Tdr(i)}}function Tdr(o){let r=d(o);return{model:o.model,total_tokens:o.totalTokens,raw_max_tokens:o.rawMaxTokens,percentage:o.percentage,...r!==null&&{over_limit:{tokens_over:o.totalTokens-o.rawMaxTokens,kind:r}},categories:o.categories.map((t)=>({name:t.name,tokens:t.tokens,kind:mGn(t)})),mcp_tools:o.mcpTools.map((t)=>({name:t.name,server_name:t.serverName,tokens:t.tokens})),memory_files:o.memoryFiles.map((t)=>({path:t.path,type:t.type,tokens:t.tokens})),agents:o.agents.map((t)=>({agent_type:t.agentType,source:t.source,tokens:t.tokens})),...o.skills&&o.skills.skillFrontmatter.length>0&&{skills:o.skills.skillFrontmatter.map((t)=>({name:t.name,source:t.source,...t.pluginName!==void 0&&{plugin_name:t.pluginName},tokens:t.tokens}))}}}
export{Ert,Art,t0e,rEr,Tdr};
