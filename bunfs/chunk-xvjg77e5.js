// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ZEe, Sr, tpe, eAe, b$, ZI, w$, x3, I3, i7e, KMe, nAe, s7e, kbn, nS } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { $t } from "/$bunfs/root/chunk-2rx5nghb.js";
import { rb, ds } from "/$bunfs/root/chunk-0g6cj4h1.js";
import { Yo } from "/$bunfs/root/chunk-nf8aaj8a.js";
import { Mht, MF, cgn } from "/$bunfs/root/chunk-qnrh4abv.js";
import { ih } from "/$bunfs/root/chunk-6nmk3t6g.js";
import { H2t, Rpn, DKn, pwe, Umt, Bmt, xze, jmt, Hpn, Ize, HDe, Jce, Pze } from "/$bunfs/root/chunk-z6m3k8w5.js";
import { dB } from "/$bunfs/root/chunk-cs6e481r.js";
import { Rf } from "/$bunfs/root/chunk-5djs3wbb.js";
import { yp } from "/$bunfs/root/chunk-b40bn863.js";
import { basename as v } from "path";
var k = "not reachable from this cloud session",
  A =
    "(session list too long to fetch completely \u2014 sessions beyond the first pages are missing from this listing)";
async function GZt(e, n, i) {
  let s = false,
    t = Yo();
  if (t) await pwe({ refresh: true, credentials: i });
  let l = t ? Umt(e, i) : Promise.resolve({ rows: [], failed: false, identityKey: null }),
    p = Promise.resolve({ peers: [], warnings: [] }),
    u = false,
    [g, c, r, o] = await Promise.all([
      t
        ? cgn().catch((d) => {
            if (d instanceof Mht) return (u = true), [];
            throw d;
          })
        : Promise.resolve([]),
      l,
      Jce(e, i),
      p,
    ]),
    m = g.map((d) => ({ transport: "uds", address: `uds:${d.sock}`, session: d }));
  for (let d of r.sessions) {
    if (s7e(g, d.id) || dB(d.id)) continue;
    m.push({ transport: "cloud", address: void 0, session: d });
  }
  let a = Hpn(c.rows, g, r.sessions);
  if (!HDe(r.unavailable)) xze(e, c, Ize(c.rows, r.sessions));
  else jmt(e, c);
  for (let d of a) m.push({ transport: "bridge", address: `bridge:${d.id}`, session: d });
  for (let d of o.peers) m.push({ transport: "did", address: d.did, session: d });
  return {
    peers: m,
    didWarnings: o.warnings,
    didFocused: s,
    bridgeWalkFailed: c.failed || (c.identityKey !== null && !Bmt(c)),
    cloudListFailed: HDe(r.unavailable),
    localListFailed: u,
    messagingDisabled: !t,
    listTruncated: r.truncated === true || c.truncated === true,
  };
}
function Ydr(e = false) {
  let n = MF(),
    i = i7e(nS()?.name);
  if (!n || i === null) return null;
  let s = nS();
  return {
    name: i,
    token: `${i} [${nAe("session", n)}]`,
    callerIsSubagent: e,
    nameIsUserChosen: (s?.source === "user" || s?.source === "collision") && ih().userTypedName === s.name,
  };
}
function j(e) {
  if (!e) return null;
  return e.callerIsSubagent
    ? `This process's main session is ${e.token} \u2014 the name OTHER sessions use to message it (it is not listed below; from inside this process, address the main conversation as "${yp}").`
    : `This session is ${e.token} \u2014 the name other sessions use to message it (it is not listed below; a message to it would be a message to yourself).`;
}
async function zZt(e, n) {
  let i = e.getAppState(),
    s = ds(i.teamContext);
  return {
    appState: i,
    teamFile: s ? await Rf(s, e.storageV5) : null,
    callerTeammateId:
      e.teammateContext === void 0
        ? void 0
        : e.agentContext?.agentId === e.teammateContext.agentId
          ? e.teammateContext.agentId
          : null,
    self: Ydr(n),
  };
}
function SEr(
  e,
  n,
  {
    didWarnings: i = [],
    didFocused: s = false,
    bridgeWalkFailed: t = false,
    cloudListFailed: l = false,
    localListFailed: p = false,
    messagingDisabled: u = false,
    listTruncated: g = false,
  } = {},
) {
  let c = e.flatMap((f) => (f.transport === "uds" ? [f.session] : [])),
    r = e.flatMap((f) => (f.transport === "cloud" ? [f.session] : [])),
    o = ZI(n.appState, {
      teamFile: n.teamFile,
      sessions: c,
      cloud: r,
      bridge: t ? [] : e.flatMap((f) => (f.transport === "bridge" ? [f.session] : [])),
    }),
    m = new Map(o.candidates.map((f) => [`${f.kind}\x00${f.id}`, f])),
    a = L(n.appState),
    d = N(n.appState, n.teamFile, n.callerTeammateId),
    w = e.flatMap((f) => (f.transport === "bridge" ? [f] : [])),
    C = e.flatMap((f) => (f.transport === "did" ? [f.session] : [])),
    h = [];
  if (a.length > 0) h.push(H(a, m));
  if (d.length > 0) h.push(W(d, m));
  if (!s && (c.length > 0 || r.length > 0 || w.length > 0 || t || l || p || g)) h.push(G(c, m, r, w, t, l, p, g));
  let T = u ? null : j(n.self);
  if (u && h.length > 0) h.unshift(E);
  if (h.length === 0) {
    if (u) return E;
    if (!T) return "No reachable agents.";
    return !s && !t
      ? `${T}

No reachable agents \u2014 no other Claude session is running on this machine right now (peer messaging itself is available; a session appears here once it is started).`
      : `${T}

No other session appears in this listing right now (peer messaging itself is available).`;
  }
  return T
    ? `${T}

${h.join(`

`)}`
    : h.join(`

`);
}
function L(e) {
  let n = new Map();
  for (let [t, l] of e.agentNameRegistry) n.set(l, t);
  let i = new Set(Object.values(e.teamContext?.teammates ?? {}).map((t) => t.name)),
    s = [];
  for (let t of Object.values(e.tasks)) {
    if (t.type !== "local_agent" || t.agentType === "main-session") continue;
    let l = n.get(t.id);
    s.push({
      agentId: t.id,
      name: l !== void 0 && i.has(l) ? void 0 : l,
      agentType: t.agentType,
      status: t.status,
      startTime: t.startTime,
    });
  }
  return s;
}
var E =
    "Cross-session messaging is switched off in this session right now \u2014 no sessions were listed, and this session is not reachable by name until it is switched back on.",
  D =
    "(the session list on this machine could not be read just now \u2014 other local sessions may be missing from this listing; a later listing retries)";
function N(e, n, i) {
  let s = e.teamContext;
  if (!s && !n) return [];
  let t = i === null ? void 0 : (i ?? (s ? (s.selfAgentId ?? (s.isLeader === false ? void 0 : s.leadAgentId)) : rb())),
    l = new Map();
  for (let o of Object.values(e.tasks))
    if (o.type === "in_process_teammate") l.set(o.identity.agentId, o.isIdle ? "idle" : o.status);
  let p = [],
    u = new Set(t !== void 0 ? [t] : []),
    g = new Set();
  for (let o of e.agentNameRegistry.keys()) g.add(Sr(o));
  let c = b$(e),
    r = (o, m) => eAe({ name: o, agentId: m }, c) || !tpe(o);
  for (let [o, m] of Object.entries(s?.teammates ?? {})) {
    if (u.has(o) || !r(m.name, o)) continue;
    u.add(o);
    let a = m.tmuxPaneId === "in-process" || m.tmuxPaneId === "leader";
    p.push({
      teammateId: o,
      name: m.name,
      agentType: m.agentType,
      status: a ? l.get(o) : void 0,
      backend: a ? "in-process" : "pane",
      since: m.spawnedAt,
      nameShadowed: false,
    });
  }
  for (let o of n?.members ?? []) {
    if (u.has(o.agentId) || !r(o.name, o.agentId)) continue;
    u.add(o.agentId),
      p.push({
        teammateId: o.agentId,
        name: o.name,
        agentType: o.agentType,
        status: void 0,
        backend: "roster",
        since: o.joinedAt,
        nameShadowed: B(o.name, e, g),
      });
  }
  return p;
}
function B(e, n, i) {
  let s = x3(e) ?? e;
  if (!i.has(Sr(s))) return false;
  return n.agentNameRegistry.has(e) || s !== e ? "unreachable" : "bare-only";
}
function _(e, n) {
  if (typeof e.since !== "number" || !Number.isFinite(e.since) || e.since > n || n - e.since > U) return;
  return `${e.backend === "roster" ? "joined" : "started"} ${y(n - e.since)} ago`;
}
function R(e, n) {
  return `${e} (${n.length}):
${n.join(`
`)}`;
}
var x = 100,
  U = 315360000000;
function F(e, n, i) {
  let s = n.slice(0, x).map(i),
    t = n.length - s.length;
  if (t > 0) s.push(`  (\u2026 ${t} more not shown)`);
  return `${e} (${n.length}):
${s.join(`
`)}`;
}
function O(e, n, i) {
  let s = e.formerNames?.[0];
  if (s === void 0) return;
  let t = n - s.until;
  if (t < 0 || t >= kbn) return;
  let l = i(s.name);
  return l ? `says it was ${l} until ${y(n - s.until)} ago` : void 0;
}
function P(e, n) {
  return `  ${[e, ...n.filter((i) => i !== void 0)].join("  \xB7  ")}`;
}
function H(e, n) {
  let i = Date.now();
  return R(
    "Subagents",
    e.map((s) => {
      let t = s.name ? n.get(`subagent\x00${s.agentId}`) : void 0;
      return P(t ? w$(t) : s.agentId, [s.agentType, s.status, `started ${y(i - s.startTime)} ago`]);
    }),
  );
}
function W(e, n) {
  let i = Date.now();
  return F("Teammates", e, (s) => {
    let t = s.nameShadowed !== false ? void 0 : n.get(`teammate\x00${s.teammateId}`);
    return P(t ? w$(t) : (I3(s.name) ?? "(unnamed)"), [
      I3(s.agentType) ?? void 0,
      I3(s.status) ?? (s.backend === "in-process" ? void 0 : s.backend),
      _(s, i),
      s.nameShadowed === "unreachable"
        ? "not messageable by name while a subagent in this session is registered under that name (the name reaches the subagent)"
        : s.nameShadowed === "bare-only"
          ? "message it by this exact name as printed \u2014 no [ref]: a subagent here is registered under a variant spelling of it"
          : void 0,
    ]);
  });
}
function G(e, n, i, s, t, l, p, u) {
  let g = Date.now(),
    c = [
      ...e.map((a) => {
        let d = n.get(`session\x00${a.sock}`),
          w = a.tmux !== void 0 && /^[^\s/\\\p{Cc}\p{Cf}]{1,64}$/u.test(a.tmux) && !KMe(a.tmux) ? a.tmux : void 0,
          C = O(a, g, I3);
        return P(d ? w$(d) : (I3(a.name || v(a.cwd)) ?? "(untitled)"), [
          C,
          a.kind,
          a.status,
          w === void 0 ? void 0 : `tmux ${w}`,
          `started ${y(g - a.startedAt)} ago`,
        ]);
      }),
      ...i.map((a) => {
        let d = n.get(`cloud-session\x00${a.id}`);
        return P(d ? w$(d) : (I3(a.title) ?? "(untitled)"), [
          a.remoteControl ? H2t : "cloud session",
          I(a.workerStatus, a.workerStatus),
          a.lastActive === void 0 ? void 0 : `active ${y(g - a.lastActive)} ago`,
          a.unreachableFromHere ? k : void 0,
          a.acceptsPeerMessages === false ? Pze : void 0,
        ]);
      }),
      ...s.map(({ session: a }) => {
        let d = n.get(`bridge-session\x00${a.id}`);
        return P(d ? w$(d) : DKn(a.title), [Rpn(a), M(a, a.status), a.acceptsPeerMessages === false ? Pze : void 0]);
      }),
    ],
    r = c.length > 0 ? R("Peer sessions", c) : "",
    o = [
      ...(t
        ? [
            s.length > 0
              ? "(account session list incomplete just now \u2014 those rows carry no [ref] and are not messageable by name until a later listing completes)"
              : "(the Remote Control session list for your account did not complete just now \u2014 Remote Control sessions on other machines may be missing from this listing; a later listing retries)",
          ]
        : []),
      ...(l
        ? [
            "(cloud session list could not be fetched just now \u2014 cloud sessions are missing from this listing; a later listing retries)",
          ]
        : []),
      ...(p ? [D] : []),
      ...(u ? [A] : []),
    ];
  if (o.length === 0) return r;
  let m = `  ${o.join(`
  `)}`;
  return r === ""
    ? m.trimStart()
    : `${r}
${m}`;
}
function VZt(
  e,
  n,
  {
    bridgeWalkFailed: i = false,
    cloudListFailed: s = false,
    localListFailed: t = false,
    messagingDisabled: l = false,
    listTruncated: p = false,
    omitDirectories: u = false,
  } = {},
) {
  let g = L(n.appState),
    c = N(n.appState, n.teamFile, n.callerTeammateId),
    r = [];
  if (g.length > 0) r.push(X(g));
  if (c.length > 0) r.push(K(c));
  if (e.length > 0) r.push(q(e, u));
  if (s)
    r.push(
      "(cloud session list could not be fetched just now \u2014 cloud sessions are missing from this listing; try /list-agents again shortly)",
    );
  if (t)
    r.push(
      "(the session list on this machine could not be read just now \u2014 other local sessions may be missing from this listing; try /list-agents again shortly)",
    );
  if (i)
    r.push(
      "(the Remote Control session list for your account did not complete just now \u2014 Remote Control sessions on other machines may be missing from this listing; try /list-agents again shortly)",
    );
  if (p) r.push(A);
  let o =
    l || !n.self || (u && !n.self.nameIsUserChosen)
      ? null
      : n.self.callerIsSubagent
        ? `This process's main session: ${n.self.token} (the name OTHER sessions use for it; from inside this process, address it as "${yp}")`
        : `This session: ${n.self.token} (the name other sessions use to message it)`;
  if (u && r.length > 0)
    r.push(
      "(session names and directories not chosen by a human are withheld on this connection \u2014 /rename a session on its own machine to give it an addressable name here)",
    );
  if (l && r.length > 0) r.unshift(E);
  if (r.length === 0) {
    if (l) return E;
    return o
      ? `${o}

No subagents, teammates or other Claude sessions \u2014 no other session is running on this machine right now; peer messaging itself is available.`
      : "No subagents, teammates or other Claude sessions.";
  }
  return o
    ? `${o}

${r.join(`

`)}`
    : r.join(`

`);
}
function X(e) {
  let n = Date.now();
  return R(
    "Subagents",
    e.map((i) => {
      let s = i.name ? `${i.name}  \xB7  ${i.agentType}` : i.agentType;
      return `  [${i.status}]  \xB7  ${s}  \xB7  started ${y(n - i.startTime)} ago`;
    }),
  );
}
function K(e) {
  let n = Date.now();
  return F("Teammates", e, (i) => {
    let s = I3(i.name) ?? "(unnamed)",
      t = I3(i.agentType),
      l = t ? `${s}  \xB7  ${t}` : s,
      p = _(i, n),
      u =
        i.nameShadowed === "unreachable"
          ? "  \xB7  name held by a subagent here"
          : i.nameShadowed === "bare-only"
            ? "  \xB7  exact name only (a subagent holds a variant)"
            : "";
    return `  [${I3(i.status) ?? i.backend}]  \xB7  ${l}${p ? `  \xB7  ${p}` : ""}${u}`;
  });
}
function I(e, n) {
  return e === "requires_action" ? "waiting on a human" : n;
}
function M(e, n) {
  if (ZEe(e)) return I(e.status, n);
  return e.connected === false ? "offline" : n;
}
function b(e) {
  if (!e) return;
  let n = x3(e);
  return n === null || n === "untitled session" ? void 0 : n;
}
function q(e, n = false) {
  let i = Date.now();
  return R(
    "Other Claude sessions",
    e.map((s) => {
      switch (s.transport) {
        case "uds": {
          let t = s.session,
            l = n && t.nameSource !== "user" ? void 0 : b(t.name),
            p = n ? void 0 : (b(t.cwd) ?? "(unknown directory)"),
            u = n ? void 0 : O(t, i, b),
            g = [l, u, p].filter(Boolean).join("  \xB7  ") || "(unnamed session)";
          return `  [${b(t.status) ?? "unknown"}]  \xB7  ${g}  \xB7  started ${y(i - t.startedAt)} ago`;
        }
        case "cloud": {
          let t = s.session;
          return `  [${I(t.workerStatus, t.workerStatus ?? "unknown")}]  \xB7  ${b(t.title) ?? "(untitled)"}  \xB7  ${t.remoteControl ? H2t : "cloud"}${t.unreachableFromHere ? `  \xB7  ${k}` : ""}${t.acceptsPeerMessages === false ? `  \xB7  ${Pze}` : ""}`;
        }
        case "bridge": {
          let t = s.session;
          return `  [${M(t, b(t.status) ?? "unknown")}]  \xB7  ${b(t.title) ?? "(untitled)"}  \xB7  ${Rpn(t)}${t.acceptsPeerMessages === false ? `  \xB7  ${Pze}` : ""}`;
        }
        case "did":
          return "";
      }
    }),
  );
}
function y(e) {
  return $t(Math.max(0, e), { mostSignificantOnly: true });
}
export { GZt, Ydr, zZt, SEr, VZt };
