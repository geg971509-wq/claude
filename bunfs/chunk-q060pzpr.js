// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { yb, bs } from "/$bunfs/root/chunk-f9h0bg01.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { ds } from "/$bunfs/root/chunk-0g6cj4h1.js";
import { Rf } from "/$bunfs/root/chunk-5djs3wbb.js";
import { Sr, qV, lO, ZI, tAe, nAe } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Jce } from "/$bunfs/root/chunk-z6m3k8w5.js";
import { DT } from "/$bunfs/root/chunk-v7yhn7cf.js";
import { t$t, oln } from "/$bunfs/root/chunk-zze8764r.js";
import { Xr } from "/$bunfs/root/chunk-p8c745fb.js";
import { i, f, N } from "/$bunfs/root/chunk-saay52v7.js";
async function z$n({
  session: e,
  to: t,
  message: o,
  resolved: r,
  appState: n,
  agentLifecycle: d,
  storageV5: a,
  credentials: p,
}) {
  if (typeof o !== "string") return { kind: "proceed", pin: void 0 };
  let s = x(r);
  if (s === null) return { kind: "proceed", pin: void 0 };
  let l = Sr(s.name),
    c = Object.hasOwn(n.sendMessagePins, l) ? n.sendMessagePins[l] : void 0;
  if (c !== void 0 && c.id === s.id) return { kind: "proceed", pin: c };
  if (c !== void 0) {
    let y = lO(t) !== null;
    if (!y && t === s.name && t !== c.name) return { kind: "proceed", pin: void 0 };
    if (!y) {
      let S = ds(n.teamContext),
        [P, M, R] = await Promise.all([S ? Rf(S, a) : null, t$t(), Jce(e, p)]),
        k = ZI(n, { teamFile: P, sessions: M, cloud: R.sessions, bridge: oln(e) }),
        g = tAe(k.byName, l);
      return {
        kind: "rebound",
        name: s.name,
        previous: c,
        next: g?.kind === "one" && g.candidate.id === s.id ? g.candidate : void 0,
      };
    }
  }
  let u = { id: s.id, name: s.name, ref: nAe(s.kind, s.id) };
  return d.setSendMessagePin(l, u), { kind: "proceed", pin: u };
}
function x(e) {
  switch (e.kind) {
    case "main":
    case "not-found":
    case "ambiguous":
    case "agent-stopped-by-user":
    case "mailbox":
    case "local-session":
    case "cloud-session":
      return null;
    case "agent-live":
    case "agent-stopped":
    case "agent-evicted":
      return { kind: "subagent", id: e.agentId, name: e.agentName };
  }
}
var b = m(() =>
  f({
    success: N(!0),
    pin: f({
      name: i().min(1).max(DT),
      id: i()
        .max(1024)
        .refine((e) => yb(e) !== null),
      ref: i().regex(new RegExp(`^${qV}$`)),
    }),
  }),
);
function oen(e) {
  let t = new Map(),
    o = new Set();
  for (let r of e)
    if (r.type === "assistant") {
      let n = r.message.content;
      if (!Array.isArray(n)) continue;
      for (let d of n) if (d.type === "tool_use" && d.name === Xr) o.add(d.id);
    } else if (r.type === "user") {
      let n = r.message.content;
      if (!Array.isArray(n)) continue;
      if (n.find((p) => p.type === "tool_result" && !p.is_error && o.has(p.tool_use_id)) === void 0) continue;
      let a = b().safeParse(r.toolUseResult);
      if (!a.success) continue;
      t.set(Sr(a.data.pin.name), { id: a.data.pin.id, name: a.data.pin.name, ref: a.data.pin.ref });
    }
  return Object.fromEntries(t);
}
function V$n(e, t) {
  let o = oen(e);
  return bs(o, t) ? null : o;
}
export { z$n, oen, V$n };
