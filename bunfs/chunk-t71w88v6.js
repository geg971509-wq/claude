// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{Nfe,le}from"/$bunfs/root/chunk-fv016jr6.js";import{Wte,lwe,gz}from"/$bunfs/root/chunk-p1awcxk1.js";import{Io}from"/$bunfs/root/chunk-q04k5ycg.js";import{sAt}from"/$bunfs/root/chunk-s28wf80n.js";import{$Jt,vS}from"/$bunfs/root/chunk-g9wmbw10.js";import{Bg}from"/$bunfs/root/chunk-vx3kc9d2.js";import{pY}from"/$bunfs/root/chunk-bp3j8sq3.js";import{Bd}from"/$bunfs/root/chunk-ms0ak83w.js";import{spawnSync as p}from"child_process";var g={code:"code -w",subl:"subl --wait"};function lW(e){let t=le(),i=Io.get(process.stdout);if(!i)throw Error("Ink instance not found - cannot pause rendering");let n=vS();if(!n)return{content:null};try{t.statSync(e)}catch{return{content:null}}let l=$Jt(n)===void 0;if(l)i.enterAlternateScreen();else i.prepareTerminalForHandoff();try{let c=g[n]??n,d=c.split(" "),s=d[0]??c,r=d.slice(1),o;{let a=sAt();if(o=p(s,[...r,e],{stdio:"inherit",...a}),o.error&&a.cgroup!==void 0)o=p(s,[...r,e],{stdio:"inherit"})}if(o.error||o.signal||o.status!==null&&o.status!==0){let a=Bg(n);return{content:null,error:o.error?`Couldn't open ${a} \u2014 ${o.error.message}`:o.signal?`${a} closed unexpectedly (${o.signal})`:`${a} quit unexpectedly (exit code ${o.status})`}}return{content:t.readFileSync(e,{encoding:"utf-8"})}}catch{return{content:null}}finally{if(l)i.exitAlternateScreen();else i.restoreTerminalAfterHandoff()}}function E(e,t,i){let n=e;for(let[l,c]of Object.entries(i))if(c.type==="text"){let d=parseInt(l),s=c.content;if(c.unavailable||s==="")continue;let r=n.indexOf(s);if(r!==-1){let o=Wte(s),u=lwe(d,o);n=n.slice(0,r)+u+n.slice(r+s.length)}}return n}var f="# \u2500\u2500\u2500 Write your reply below this line \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",m=50;function h(e){let t=Bd(e).split(`
`);if(t.length>m)t=t.slice(-m),t.unshift("\u2026 (earlier output truncated)");return`# \u2500\u2500\u2500 Claude's last response (for reference; removed on save) \u2500\u2500\u2500
`+`${t.map((n)=>n?`# ${n}`:"#").join(`
`)}
${f}

`}function y(e){let t=e.indexOf(f);if(t===-1)return e;return e.slice(t+f.length).replace(/^\r?\n\r?\n?/,"")}function WP(e,t,i){let n=le(),l=pY();try{let c=t?gz(e,t):e,d=i?h(i)+c:c;Nfe(l,d,{encoding:"utf-8",flush:!0});let s=lW(l);if(s.content===null)return s;let r=s.content;if(i)r=y(r);if(r.endsWith(`
`)&&!r.endsWith(`

`))r=r.slice(0,-1);if(t)r=E(r,e,t);return{content:r}}finally{try{n.unlinkSync(l)}catch{}}}
export{lW,WP};
