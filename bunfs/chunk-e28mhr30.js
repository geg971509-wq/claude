// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{of}from"/$bunfs/root/chunk-c76q2y0e.js";var Yf={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function ZP(E){return of(`?${E}h`)}function HW(E){return of(`?${E}l`)}var A9e=ZP(Yf.SYNCHRONIZED_UPDATE),G_e=HW(Yf.SYNCHRONIZED_UPDATE),hMt=ZP(Yf.BRACKETED_PASTE),C9e=HW(Yf.BRACKETED_PASTE),Tlt=ZP(Yf.FOCUS_EVENTS),_xe=HW(Yf.FOCUS_EVENTS),_Mt=ZP(Yf.THEME_NOTIFY),v9e=HW(Yf.THEME_NOTIFY),pv=ZP(Yf.CURSOR_VISIBLE),JR=HW(Yf.CURSOR_VISIBLE),Elt=ZP(Yf.ALT_SCREEN_CLEAR),fjn=HW(Yf.ALT_SCREEN_CLEAR),Alt=HW(Yf.WIN32_INPUT_MODE),_=ZP(Yf.MOUSE_NORMAL)+ZP(Yf.MOUSE_BUTTON)+ZP(Yf.MOUSE_ANY)+ZP(Yf.MOUSE_SGR),t=ZP(Yf.MOUSE_NORMAL)+ZP(Yf.MOUSE_SGR),F1=HW(Yf.MOUSE_SGR)+HW(Yf.MOUSE_ANY)+HW(Yf.MOUSE_BUTTON)+HW(Yf.MOUSE_NORMAL);function x8(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{Yf,ZP,HW,A9e,G_e,hMt,C9e,Tlt,_xe,_Mt,v9e,pv,JR,Elt,fjn,Alt,F1,x8};
