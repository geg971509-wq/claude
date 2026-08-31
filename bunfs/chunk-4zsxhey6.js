// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{l,Ht}from"/$bunfs/root/chunk-ypdw393e.js";import{le,n}from"/$bunfs/root/chunk-fv016jr6.js";import{be}from"/$bunfs/root/chunk-gcks6mn0.js";import{a}from"/$bunfs/root/chunk-fec4384a.js";import{H5e}from"/$bunfs/root/chunk-61nasexv.js";import{D}from"/$bunfs/root/chunk-7s7jqj2f.js";import*as s from"os";import{join as o}from"path";function s_t(){let i=[o(be(),"ide")];if(a.CLAUDE_CONFIG_DIR)i.push(o(s.homedir(),".claude","ide").normalize("NFC"));if(D()==="wsl"){let t=a.USERPROFILE?H5e(a.USERPROFILE):null;if(t)i.push(o(t,".claude","ide"));try{let m=le().readdirSync("/mnt/c/Users");for(let e of m){if(!e.isDirectory()&&!e.isSymbolicLink())continue;if(e.name==="Public"||e.name==="Default"||e.name==="Default User"||e.name==="All Users")continue;i.push(o("/mnt/c/Users",e.name,".claude","ide"))}}catch(r){if(Ht(r))n(`WSL IDE lockfile path detection failed (${r.code}): ${l(r)}`);else n(`WSL IDE lockfile path detection failed unexpectedly: ${l(r)}`,{level:"error"})}}return i}
export{s_t};
