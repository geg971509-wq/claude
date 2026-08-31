// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{kt}from"/$bunfs/root/chunk-twwd9fep.js";import{m}from"/$bunfs/root/chunk-bzx56g36.js";import{ik}from"/$bunfs/root/chunk-zze8764r.js";import{zDt}from"/$bunfs/root/chunk-avbkr99g.js";import{iG}from"/$bunfs/root/chunk-s5gz70v1.js";import{i,s4,H,f,dt}from"/$bunfs/root/chunk-saay52v7.js";var s="",n="",qDt="mcp";var u=m(()=>f({}).passthrough()),Drn=m(()=>dt([i(),H(f({type:i()}).passthrough()),s4()]).describe("MCP tool execution result")),rG=kt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:qDt,maxResultSizeChars:1e5,async description(){return n},async prompt(){return s},get inputSchema(){return u()},get outputSchema(){return Drn()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return zDt(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return ik(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&ik(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:iG(e)}}});
export{qDt,Drn,rG};
