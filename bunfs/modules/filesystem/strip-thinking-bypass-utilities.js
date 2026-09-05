// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { sl } from "/$bunfs/root/chunk-83h0j7w2.js";
import { oy } from "/$bunfs/root/chunk-fgavb5x0.js";
import { Do, Hne } from "/$bunfs/root/chunk-tabr8ghb.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
function d(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: { ...e.alwaysAllowRules, command: te([...(e.alwaysAllowRules.command || []), ...o]) },
  };
}
function u(e, o) {
  if (o.length === 0) return e;
  return { ...e, alwaysDenyRules: { ...e.alwaysDenyRules, command: te([...(e.alwaysDenyRules.command || []), ...o]) } };
}
function Vht(e, o, t, s) {
  if (
    !s?.replaceCommandRules &&
    !s?.replaceDenyRules &&
    s?.frozenCommandDenies === void 0 &&
    o.length === 0 &&
    t.length === 0
  )
    return e;
  return () => {
    let i = e(),
      n =
        i.toolPermissionContext.pollEventDeliveryGuard === true
          ? i.toolPermissionContext
          : s?.replaceCommandRules
            ? {
                ...i.toolPermissionContext,
                alwaysAllowRules: { ...i.toolPermissionContext.alwaysAllowRules, command: o },
              }
            : d(i.toolPermissionContext, o),
      r = s?.replaceDenyRules
        ? { ...n, alwaysDenyRules: { ...n.alwaysDenyRules, command: t } }
        : s?.frozenCommandDenies !== void 0
          ? {
              ...n,
              alwaysDenyRules: {
                ...n.alwaysDenyRules,
                command: te([...s.frozenCommandDenies, ...(n.alwaysDenyRules.command ?? []), ...t]),
              },
            }
          : u(n, t);
    return { ...i, toolPermissionContext: r };
  };
}
var g = {
  allowed_tools: "strip",
  avoid_prompts: "strip",
  permission_mode: "strip",
  working_directory: "strip",
  disallowed_tools: "keep",
  bash_command_clamp: "keep",
  sandbox_auto_allow_suspended: "keep",
  effort: "keep",
  model: "keep",
  max_thinking_tokens: "keep",
  flag_settings: "keep",
};
function Cgn(e) {
  if (!e) return e;
  return e.filter((o) => g[o.kind] === "keep");
}
function vgn(e) {
  return e.getAppState?.().mcp?.suppressedClaudeAiConnectors ?? [];
}
function dH(e) {
  let o = he(e);
  return o.mode !== "bypassPermissions" && !(o.mode === "plan" && o.isBypassPermissionsModeAvailable);
}
function PI(e) {
  if (he(e).mode !== "plan") return false;
  return IM(e);
}
function IM(e) {
  return !dH(e) || he(e).shouldAvoidPermissionPrompts === true;
}
function p(e) {
  return e === Do || e.startsWith(`${Do}(`) || e.startsWith(Hne);
}
function C(e) {
  let o = p,
    t = false,
    s = {},
    i = {};
  for (let [n, r] of Object.entries(e.strippedDangerousRules ?? {})) if (r !== void 0) i[n] = [...r];
  for (let [n, r] of Object.entries(e.alwaysAllowRules)) {
    if (r === void 0) continue;
    let a = r.filter((l) => !o(l));
    if (a.length !== r.length) {
      t = true;
      for (let l of r)
        if (o(l)) {
          let f = (i[n] ??= []);
          if (!f.includes(l)) f.push(l);
        }
    }
    s[n] = a;
  }
  if (!t) return e;
  return { ...e, alwaysAllowRules: s, strippedDangerousRules: i };
}
function Rgn(e) {
  let o = e.strippedDangerousRules;
  if (o === void 0) return e;
  let t = false,
    s = {};
  for (let [i, n] of Object.entries(e.alwaysAllowRules)) if (n !== void 0) s[i] = n;
  for (let [i, n] of Object.entries(o)) {
    if (n === void 0) continue;
    for (let r of n) {
      if (!p(r)) continue;
      let a = [...(s[i] ?? [])];
      if (!a.includes(r)) a.push(r), (s[i] = a), (t = true);
    }
  }
  if (!t) return e;
  return { ...e, alwaysAllowRules: s };
}
function he(e) {
  let o = e.getAppState().toolPermissionContext,
    t = o !== void 0 && o.pollEventDeliveryGuard === true;
  if (t) o = C(o);
  let s = e.permissionLayers;
  if (!s) return m(e, o);
  let i = s.findLast((n) => n.kind === "working_directory");
  for (let n of s)
    switch (n.kind) {
      case "allowed_tools":
        if (!t) o = d(o, [...n.allowedTools]);
        break;
      case "disallowed_tools":
        o = u(o, [...n.disallowedTools]);
        break;
      case "bash_command_clamp":
        o = { ...o, bashCommandClamps: [...(o.bashCommandClamps ?? []), n.rules] };
        break;
      case "avoid_prompts":
        if (!o.shouldAvoidPermissionPrompts) o = { ...o, shouldAvoidPermissionPrompts: true };
        break;
      case "sandbox_auto_allow_suspended":
        if (!o.sandboxAutoAllowSuspended) o = { ...o, sandboxAutoAllowSuspended: true };
        break;
      case "permission_mode": {
        if (n.mode === "bypassPermissions" && (oy() || !o.isBypassPermissionsModeAvailable)) break;
        o = { ...o, mode: n.mode };
        break;
      }
      case "working_directory":
        if (n === i && !o.additionalWorkingDirectories.has(n.directory))
          o = {
            ...o,
            additionalWorkingDirectories: new Map([
              ...o.additionalWorkingDirectories,
              [n.directory, { path: n.directory, source: "session" }],
            ]),
          };
        break;
      case "effort":
      case "model":
      case "max_thinking_tokens":
      case "flag_settings":
        break;
    }
  return m(e, o);
}
function m(e, o) {
  if (e.forRemoteExecution === true && o !== void 0 && (o.mode === "acceptEdits" || o.mode === "bypassPermissions"))
    return { ...o, mode: "default" };
  return o;
}
function Tjt(e) {
  let o;
  if (!e) return o;
  for (let t of e) if (t.kind === "effort") o = t.effort;
  return o;
}
function tu(e) {
  return Tjt(e.permissionLayers) ?? sl(e.getAppState(), c(e));
}
function c(e) {
  let o = e.options?.mainLoopModel;
  for (let t of e.permissionLayers ?? []) if (t.kind === "model") o = t.mainLoopModel;
  return o;
}
function Mue(e) {
  return e.getAppState().sessionEffort;
}
function cm(e) {
  return c(e) ?? e.options.mainLoopModel;
}
function NOe(e) {
  let o = e.options.thinkingConfig;
  for (let t of e.permissionLayers ?? []) if (t.kind === "max_thinking_tokens") o = y(t.maxThinkingTokens);
  return o;
}
function y(e) {
  return e === 0 ? { type: "disabled" } : { type: "enabled", budgetTokens: e };
}
function S5e(e) {
  return e.getAppState().ultracode === true;
}
function Nue(e, o) {
  if (o.length === 0) return e;
  let t = e.permissionLayers ? [...e.permissionLayers, ...o] : [...o],
    s;
  for (let r = o.length - 1; r >= 0; r--) {
    let a = o[r];
    if (a.kind === "model") {
      s = a.mainLoopModel;
      break;
    }
  }
  let i;
  for (let r = o.length - 1; r >= 0; r--) {
    let a = o[r];
    if (a.kind === "max_thinking_tokens") {
      i = y(a.maxThinkingTokens);
      break;
    }
  }
  return {
    ...e,
    permissionLayers: t,
    ...((s !== void 0 || i !== void 0) && {
      options: { ...e.options, ...(s !== void 0 && { mainLoopModel: s }), ...(i !== void 0 && { thinkingConfig: i }) },
    }),
  };
}
export { Vht, Cgn, vgn, dH, PI, IM, Rgn, he, Tjt, tu, Mue, cm, NOe, S5e, Nue };
