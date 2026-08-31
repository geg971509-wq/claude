// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{J,G}from"/$bunfs/root/chunk-f9h0bg01.js";import{ie,mAe}from"/$bunfs/root/chunk-8tgj5dp2.js";import{Ha}from"/$bunfs/root/chunk-6k63g5t6.js";import{$wt,Uwt,Zre,eoe,gXe}from"/$bunfs/root/chunk-988p40e0.js";import{qAe}from"/$bunfs/root/chunk-jck8t8fq.js";import{IEn,CXe}from"/$bunfs/root/chunk-1evht33z.js";import{nre}from"/$bunfs/root/chunk-51qp0385.js";import{W6n}from"/$bunfs/root/chunk-xmz34fj0.js";import{O}from"/$bunfs/root/chunk-dqkj2bph.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var Jfr=new J(()=>new s);function l(){return Jfr.of(G().host)}async function ixe(t){if(!l().claimSettingsLoad())return;let e=O()?t?.backend:void 0;if(O()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:n},{primeWorkspaceRoots:r}]=await Promise.all([import("/$bunfs/root/chunk-sq7q1hvy.js"),import("/$bunfs/root/chunk-xebyz0jf.js"),import("/$bunfs/root/chunk-qeq62b4b.js"),import("/$bunfs/root/chunk-6adv5a3c.js")]);await r(e),await Promise.all([mAe(e),o(e,Ha())]),i(ie().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await n(e)}else await mAe();if(await qAe(),await CXe(IEn),O()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:n}]=await Promise.all([import("/$bunfs/root/chunk-gbqdry83.js"),import("/$bunfs/root/chunk-jhnhqtwe.js"),import("/$bunfs/root/chunk-r7k9wyxs.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await n(r)}nre();let a=W6n();if(a)process.stderr.write(`${a}
`),process.exit(1)}async function Qat(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await $wt(Zre(),eoe(),gXe()),Uwt())nre();return e.error}async function s9e(t){return await ixe(t),Qat()}
export{Jfr,ixe,Qat,s9e};
