// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{_}from"/$bunfs/root/chunk-haan6f8z.js";import{Et}from"/$bunfs/root/chunk-5rt2mvvk.js";import{o,t}from"/$bunfs/root/chunk-he2phymk.js";import{Pe}from"/$bunfs/root/chunk-q903htrr.js";import{$_,Gj}from"/$bunfs/root/chunk-hw3pw1fv.js";import{e,r}from"/$bunfs/root/chunk-8s7kcbyw.js";import{Ft}from"/$bunfs/root/chunk-ef7xmm9b.js";import{d}from"/$bunfs/root/chunk-yz031c9r.js";function L(ee){return ee}function TQ(v){let n=_(30),{output:k,fullOutput:w,elapsedTimeSeconds:m,totalLines:M,totalBytes:g,timeoutMs:l,verbose:s}=v,G;if(n[0]!==w)G=Et(w.trim()),n[0]=w,n[1]=G;else G=n[1];let y=G,R,H;if(n[2]!==k||n[3]!==y||n[4]!==s){let A=Et(k.trim());R=A.split(`
`).filter(L);H=s?y:R.slice(-5).join(`
`);n[2]=k,n[3]=y,n[4]=s,n[5]=R,n[6]=H}else R=n[5],H=n[6];let z=H;if(!R.length){let u;if(n[7]===d)u=e(t,{dimColor:!0,children:"Running\u2026 "}),n[7]=u;else u=n[7];let i;if(n[8]!==m||n[9]!==l)i=e(Pe,{children:r($_,{children:[u,e(Gj,{elapsedTimeSeconds:m,timeoutMs:l})]})}),n[8]=m,n[9]=l,n[10]=i;else i=n[10];return i}let J=M?Math.max(0,M-5):0,p="";if(!s&&g&&M)p=`~${M} lines`;else if(!s&&J>0)p=`+${J} lines`;const u=s?void 0:Math.min(5,R.length);let i;if(n[11]!==z)i=e(t,{dimColor:!0,children:z}),n[11]=z,n[12]=i;else i=n[12];let C;if(n[13]!==u||n[14]!==i)C=e(o,{height:u,flexDirection:"column",overflow:"hidden",children:i}),n[13]=u,n[14]=i,n[15]=C;else C=n[15];let O;if(n[16]!==p)O=p?e(t,{dimColor:!0,children:p}):null,n[16]=p,n[17]=O;else O=n[17];let b;if(n[18]!==m||n[19]!==l)b=e(Gj,{elapsedTimeSeconds:m,timeoutMs:l}),n[18]=m,n[19]=l,n[20]=b;else b=n[20];let D;if(n[21]!==g)D=g?e(t,{dimColor:!0,children:Ft(g)}):null,n[21]=g,n[22]=D;else D=n[22];let F;if(n[23]!==O||n[24]!==b||n[25]!==D)F=r(o,{flexDirection:"row",gap:1,children:[O,b,D]}),n[23]=O,n[24]=b,n[25]=D,n[26]=F;else F=n[26];let K;if(n[27]!==C||n[28]!==F)K=e(Pe,{children:e($_,{children:r(o,{flexDirection:"column",children:[C,F]})})}),n[27]=C,n[28]=F,n[29]=K;else K=n[29];return K}
export{TQ};
