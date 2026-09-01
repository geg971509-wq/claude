// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $n } from "/$bunfs/root/chunk-f9h0bg01.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { k } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { NA, DS, Xc } from "/$bunfs/root/chunk-zze8764r.js";
import { fwe } from "/$bunfs/root/chunk-pdf5n9dy.js";
import { cy } from "/$bunfs/root/chunk-hkzwg35z.js";
function tZ() {
  return cy() && !$n();
}
function p(e, t) {
  if (!e) return "idle-fork";
  return t ? "defer-then-fork" : "abort-then-fork";
}
function f(e) {
  let { inFlight: t } = e;
  if (e.isBg) return { ok: true, via: "detach", inFlight: t };
  if (!e.fleetEnabled) return { ok: false, reason: "fleet-disabled", inFlight: t };
  if (e.isRemote) return { ok: false, reason: "remote", inFlight: t };
  if (e.persistenceDisabled) return { ok: false, reason: "persistence", inFlight: t };
  if (e.isExternalLoading) return { ok: false, reason: "loading", inFlight: t };
  return { ok: true, via: p(e.isLoading, e.betweenCalls), inFlight: t };
}
function Lot(e, t) {
  return !t && !d(e);
}
function d(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (r.type === "assistant") return r.message?.stop_reason === null;
    if (r.type === "user") return false;
  }
  return false;
}
function TIt(e) {
  let t = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type === "assistant") {
      if (o.message?.stop_reason !== null) return t;
      for (let i of o.message?.content ?? []) if (i.type === "text" && typeof i.text === "string") t += i.text.length;
    } else if (o.type === "user") return t;
  }
  return t;
}
function EIt(e, t) {
  let r = e.length;
  for (let i = e.length - 1; i >= 0; i--) {
    let s = e[i];
    if (s.type === "assistant") {
      if (s.message?.stop_reason !== null) break;
      r = i;
    } else if (s.type === "user") break;
  }
  let o = "";
  for (let i = r; i < e.length; i++) {
    let s = e[i];
    if (s.type !== "assistant") continue;
    for (let l of s.message?.content ?? []) if (l.type === "text" && typeof l.text === "string") o += l.text;
  }
  return o + (t ?? "");
}
function AIt(e) {
  let t,
    r = false;
  return (o) => {
    if (r) return true;
    try {
      return (t ??= DS.screenedUnder(e())), DS.screeningStale(o.under, t);
    } catch (i) {
      return (r = true), n(`heldScreening could not read the screening: ${i}`, { level: "error" }), true;
    }
  };
}
function CIt(e, t) {
  let r = 0;
  for (let o of e) {
    if (fwe(o)) continue;
    if (
      o.priority === "later" ||
      o.drainOnly === true ||
      o.screeningPending === true ||
      (o.promptSubmitted !== void 0 && t !== void 0 && t(o.promptSubmitted)) ||
      o.mode === "bash" ||
      o.mode === "poll-event" ||
      (typeof o.value === "string" && o.value.trim().startsWith("/") && !o.skipSlashCommands)
    )
      r++;
  }
  return r;
}
function Z$n(e) {
  return `Still backgrounding after the current tool \u2014 waiting for ${e} running ${k(e, "subagent")} so the work carries over. Press \u2190 again to skip ahead and restart ${e === 1 ? "it" : "them"} from the beginning.`;
}
function a(e) {
  if (e.type !== "user") return false;
  let t = e.message?.content;
  return Array.isArray(t) && t.length > 0 && t.every((r) => r.type === "tool_result");
}
function g(e) {
  if (e.type === "system") return true;
  if (e.type === "assistant") {
    let t = e.message?.stop_reason;
    return t === null || t === "tool_use";
  }
  if (e.type === "user") return NA(e);
  return false;
}
function T0e(e) {
  let t = e.length,
    r = false;
  while (t > 0) {
    let i = e[t - 1];
    if (i.type === "user")
      if (NA(i)) r ||= a(i);
      else if (r && a(i));
      else break;
    else if (i.type === "assistant") {
      if (!g(i)) break;
      r = false;
    }
    t--;
  }
  let o = e.slice(t).filter((i) => i.type !== "user" && i.type !== "assistant" && i.type !== "system");
  if (t + o.length === e.length) return e;
  return [...e.slice(0, t), ...o];
}
function W6e(e) {
  let t = T0e(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let o = t[r].type;
    if (o === "user" || o === "assistant") return t[r].uuid;
  }
  return;
}
function eUn(e, t) {
  if (e === null || e.length < 1 || e.length > t.length) return false;
  let r = e.length - 1;
  if (t[r]?.uuid !== e.uuid) return false;
  for (let o = e.length; o < t.length; o++) {
    let i = t[o].type;
    if (i === "user" || i === "assistant") return false;
  }
  return true;
}
function Mot(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (r.type === "user") return !NA(r);
    if (r.type === "assistant") return false;
  }
  return false;
}
function vIt(e) {
  return e.ok && e.via !== "detach";
}
function q6e(e) {
  return f({ ...e, fleetEnabled: cy(), isRemote: $n(), persistenceDisabled: Xc() });
}
export { tZ, Lot, TIt, EIt, AIt, CIt, Z$n, T0e, W6e, eUn, Mot, vIt, q6e };
