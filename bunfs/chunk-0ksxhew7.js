// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { js } from "/$bunfs/root/chunk-ypdw393e.js";
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Yr, Vn, Yl, DY } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Ct } from "/$bunfs/root/chunk-wkxx62a2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { Je } from "/$bunfs/root/chunk-988p40e0.js";
import { Lo, TH } from "/$bunfs/root/chunk-5c5qq1s7.js";
import { pm } from "/$bunfs/root/chunk-twwd9fep.js";
import { Zht } from "/$bunfs/root/chunk-dd55s64p.js";
import { Qw, i2 } from "/$bunfs/root/chunk-zze8764r.js";
import { e3 } from "/$bunfs/root/chunk-trte0v0g.js";
import { e8e } from "/$bunfs/root/chunk-mq8h2tk8.js";
import { RTe } from "/$bunfs/root/chunk-vx3kc9d2.js";
import { nxt, Srt } from "/$bunfs/root/chunk-9r67t977.js";
import { mrt, Yke, XNn, Jke } from "/$bunfs/root/chunk-z1xq75bq.js";
import { xbe } from "/$bunfs/root/chunk-3qvtfvqg.js";
import { Qn } from "/$bunfs/root/chunk-9319g175.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { Q } from "/$bunfs/root/chunk-wag5ye9w.js";
function G2e(i) {
  let o = i.trim();
  if (!o || !o.includes("=")) return null;
  let t = o.split(/\s+/);
  if (Q(t, (n) => n.includes("=")) === 1) {
    let n = o.indexOf("="),
      r = o.slice(0, n);
    if (!r || /\s/.test(r)) return null;
    return [{ key: r, raw: o.slice(n + 1) }];
  }
  let e = [];
  for (let n of t) {
    let r = n.indexOf("=");
    if (r <= 0) return null;
    e.push({ key: n.slice(0, r), raw: n.slice(r + 1) });
  }
  return e;
}
function C(i, o) {
  let t = i.toLowerCase();
  return o.find((e) => e.id.toLowerCase() === t);
}
var h = new Map([
  ["agentsView", "/config (Agents view row)"],
  ["autoUpdatesChannel", "/channel"],
  ["showExternalIncludesDialog", "/config (External CLAUDE.md row)"],
]);
async function Xke(i, o, t) {
  let { settings: e } = Jke(m(o, t)),
    n = [];
  for (let { key: r, raw: u } of i) n.push(await y(r, u, e));
  return n;
}
async function y(i, o, t) {
  let e = C(i, t);
  if ((s("tengu_config_shorthand", { key_hash: Vn(i), matched: e !== void 0 }), !e))
    return {
      ok: !1,
      kind: "refusal",
      message: `${Qn(i)} isn't a /config setting. Run /config to see what's available.`,
    };
  let n = "searchText" in e ? e.searchText : e.label;
  if (e.consentGated) {
    let r = ["false", "0", "off", "no"].includes(o.toLowerCase()),
      u = e.value === !0 || e.canWithdraw?.() === !0;
    if (e.type === "boolean" && r && !u) return { ok: !0, kind: "refusal", message: `${i} is already off.` };
    if (!(e.type === "boolean" && r && u))
      return {
        ok: !1,
        kind: "refusal",
        message: `${n} can't be enabled with key=value \u2014 open /config to change it from the panel.`,
      };
  }
  switch (e.type) {
    case "boolean": {
      let r = o.toLowerCase(),
        u = ["true", "1", "on", "yes"].includes(r),
        f = ["false", "0", "off", "no"].includes(r);
      if (!u && !f) return { ok: !1, kind: "refusal", message: `${n} takes true or false, not "${Qn(o)}".` };
      let l = await e.onChange(u);
      if (l?.error) {
        if (l.error instanceof js)
          return { ok: !1, kind: "refusal", message: `${n}: ${l.error.message}${l?.messageSuffix ?? ""}` };
        return {
          ok: !1,
          kind: "save-failure",
          message: `Couldn't save ${n}: ${l.error.message}${l?.messageSuffix ?? ""}`,
        };
      }
      return { ok: !0, kind: "refusal", message: `Set ${n} to ${u ? "true" : "false"}${l?.messageSuffix ?? ""}` };
    }
    case "enum":
    case "managedEnum": {
      let r = e.type === "managedEnum" ? e.coerce : void 0;
      if (!e.options && !r)
        return {
          ok: !1,
          kind: "refusal",
          message: `${n} can't be set with key=value \u2014 use ${h.get(e.id) ?? "/config"}.`,
        };
      let u = r ? r(o) : e.options?.find((l) => l.toLowerCase() === o.toLowerCase());
      if (u === void 0) {
        let l = e.type === "managedEnum" && e.optionsHint ? ` ${e.optionsHint}` : "";
        return {
          ok: !1,
          kind: "refusal",
          message: e.options
            ? `${n} takes one of: ${e.options.join(", ")}.${l}`
            : `${n} doesn't accept "${Qn(o)}".${l}`,
        };
      }
      let f = await e.onChange(u);
      if (f?.error) {
        if (f.error instanceof js)
          return { ok: !1, kind: "refusal", message: `${n}: ${f.error.message}${f?.messageSuffix ?? ""}` };
        return {
          ok: !1,
          kind: "save-failure",
          message: `Couldn't save ${n}: ${f.error.message}${f?.messageSuffix ?? ""}`,
        };
      }
      return { ok: !0, kind: "refusal", message: `Set ${n} to ${Qn(u)}${f?.messageSuffix ?? ""}` };
    }
  }
}
function z2e(i) {
  let { settings: o } = Jke(m(i));
  return o
    .flatMap((t) => {
      if (t.consentGated) return [];
      let e =
        t.type === "boolean"
          ? "true|false"
          : t.options
            ? t.options.join("|")
            : t.type === "managedEnum" && t.coerce
              ? "<value>"
              : null;
      return e ? [`  ${t.id}=${e}`] : [];
    })
    .sort()
    .join(`
`);
}
function nEr(i, o) {
  let t = ydr.of(G().host).lookup(),
    e = o.indexOf("=");
  if (e === -1) {
    let f = o.toLowerCase();
    return t
      .filter((l) => l.id.toLowerCase().startsWith(f))
      .sort((l, g) => l.id.localeCompare(g.id))
      .map((l) => ({
        value: `${l.id}=`,
        description: l.options?.slice(0, 4).join(" | ") ?? l.hint,
        isFinal: !1,
        appendSpace: !1,
      }));
  }
  let n = o.slice(0, e),
    r = o.slice(e + 1).toLowerCase(),
    u = t.find((f) => f.id.toLowerCase() === n.toLowerCase());
  if (!u?.options) return [];
  return u.options.filter((f) => f.toLowerCase().startsWith(r)).map((f) => ({ value: `${u.id}=${f}`, isFinal: !0 }));
}
class p {
  keys = void 0;
  lookup() {
    return (this.keys ??= k()), this.keys;
  }
}
var ydr = new J(() => new p());
function k() {
  let i = {
      getAppState: () => ({
        thinkingEnabled: !1,
        verbose: !1,
        mainLoopModel: null,
        mainLoopModelForSession: null,
        fastMode: !1,
        promptSuggestionEnabled: !1,
        awaySummaryEnabled: !1,
        toolPermissionContext: pm(),
      }),
      setAppState: () => {},
      options: { mcpClients: [] },
    },
    { settings: o } = Jke(m(i));
  return o.flatMap((t) => {
    if (t.consentGated) return [];
    let e = t.type === "boolean" ? ["true", "false"] : "options" in t && t.options ? t.options : void 0;
    if (e || (t.type === "managedEnum" && t.coerce))
      return [{ id: t.id, options: e, hint: t.type === "managedEnum" ? t.optionsHint : void 0 }];
    return [];
  });
}
function m(i, o) {
  let t = i.getAppState(),
    e = { ...Je(), ...mrt(), autoContinueAtUsageLimit: nxt() ?? !0 },
    n = Yke(),
    r = Lo("disableWorkflows", !1),
    u = Lo("enableWorkflows", !1),
    f =
      Zht() &&
      (r.value !== !0 || r.source === "userSettings") &&
      (u.source === "default" || u.source === "userSettings"),
    l = !xbe(),
    g = Srt(),
    c = e8e(),
    S = import.meta.require("/$bunfs/root/chunk-dbahgvc8.js").isBriefEntitled();
  return {
    globalConfig: n,
    settingsData: e,
    storageV5: i.storageV5,
    themeSetting: n.theme,
    currentOutputStyle: e?.outputStyle || Qw,
    currentLanguage: e?.language,
    externalIncludesApproved: !1,
    thinkingEnabled: t.thinkingEnabled,
    verbose: t.verbose,
    mainLoopModel: t.mainLoopModel,
    currentModel: i2(t),
    isFastMode: Yr() ? t.fastMode : !1,
    promptSuggestionEnabled: t.promptSuggestionEnabled,
    awaySummaryEnabled: t.awaySummaryEnabled,
    showDefaultViewPicker: S,
    pushTogglesVisible: e3() && !Ct() && Yl(),
    crossSessionInboxRowVisible: !1,
    isConnectedToIde: RTe(i.options.mcpClients),
    isFileCheckpointingAvailable: !a.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING,
    workflowsToggleable: f,
    workflowSizeGuidelineToggleable: l,
    autoContinueAtUsageLimitToggleable: g,
    artifactToggleable: c,
    shouldShowExternalIncludesToggle: !1,
    autoUpdaterDisabledReason: DY(),
    modelSwitchHooks: i.session
      ? {
          session: i.session,
          readState: () => i.getAppState(),
          latestPick: { current: 0 },
          latestFastPick: { current: 0 },
        }
      : null,
    setAppState: (d) => i.setAppState(d),
    setTheme: o?.setTheme ?? ((d) => (O() && i.storageV5 !== void 0 ? TH("theme", d, i.storageV5) : TH("theme", d))),
    ...XNn,
  };
}
export { G2e, Xke, z2e, nEr, ydr };
