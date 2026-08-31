// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{a}from"/$bunfs/root/chunk-fec4384a.js";import{g9t}from"/$bunfs/root/chunk-hkzwg35z.js";import{d_t}from"/$bunfs/root/chunk-qd35gw0c.js";import{plt,gxe}from"/$bunfs/root/chunk-htrft0p0.js";import{_}from"/$bunfs/root/chunk-haan6f8z.js";import{nq}from"/$bunfs/root/chunk-ap3w9104.js";import{ITe,Mk}from"/$bunfs/root/chunk-z9bhq3k9.js";import{e}from"/$bunfs/root/chunk-8s7kcbyw.js";import{A,u,F}from"/$bunfs/root/chunk-twm95mhz.js";import{Hlt,wxe,D9e}from"/$bunfs/root/chunk-zgfc288e.js";import{D}from"/$bunfs/root/chunk-7s7jqj2f.js";import{d}from"/$bunfs/root/chunk-yz031c9r.js";F();var T={light:"#f9f9f7",dark:"#1f1f1e"};function zDn(t,o,n){if(!n)return;let i;if(t==="auto"){if(o===void 0)return;i=o}else i=D9e(t);return d_t(i)?T.light:T.dark}function f(){let y=_(4),[p,x]=u(Hlt),E,S;if(y[0]===d)E=()=>wxe(()=>x(Hlt())),S=[],y[0]=E,y[1]=S;else E=y[0],S=y[1];A(E,S);let k;if(y[2]!==p)k=zDn(plt(),p,g9t()),y[2]=p,y[3]=k;else k=y[3];return k}function NRt(I){let R=_(9),{children:l,mouseTracking:c,killRing:g}=I,h=f(),N;if(R[0]!==l||R[1]!==g)N=e(gxe,{handle:g,children:l}),R[0]=l,R[1]=g,R[2]=N;else N=R[2];let r=N;if(ITe()){let m;if(R[3]!==c)m=c??Mk(),R[3]=c,R[4]=m;else m=R[4];let v;if(R[5]!==h||R[6]!==m||R[7]!==r)v=e(nq,{mouseTracking:m,background:h,children:r}),R[5]=h,R[6]=m,R[7]=r,R[8]=v;else v=R[8];return v}return r}function nTr(){if(D()==="windows"||a.WT_SESSION)process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT??="1"}
export{zDn,NRt,nTr};
