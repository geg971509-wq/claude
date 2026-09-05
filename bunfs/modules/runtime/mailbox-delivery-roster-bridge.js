// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { po, yb } from "/$bunfs/root/chunk-f9h0bg01.js";
import { jt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { k } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { noe } from "/$bunfs/root/chunk-988p40e0.js";
import { Tr } from "/$bunfs/root/chunk-492vgtnr.js";
import { ds } from "/$bunfs/root/chunk-0g6cj4h1.js";
import { QS, Sr, tpe, eAe, b$, npe, IH, lO, ZI, tAe, wbt, KMe, nAe, XMe } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Cr, $Ie, n$t, iln, r$t } from "/$bunfs/root/chunk-zze8764r.js";
import { Yo } from "/$bunfs/root/chunk-nf8aaj8a.js";
import { Rf } from "/$bunfs/root/chunk-5djs3wbb.js";
import { pwe, Umt, Bmt, xze, jmt, Ize, HDe, Jce } from "/$bunfs/root/chunk-z6m3k8w5.js";
import { yp } from "/$bunfs/root/chunk-b40bn863.js";
import { vi } from "/$bunfs/root/chunk-75bjbbtd.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
async function tje({
  tool: e,
  input: s,
  context: o,
  canUseTool: i,
  assistantMessage: t,
  permissionPhaseRan: r,
  recipientLabel: a,
  parse: l,
}) {
  if (!(noe() && !r)) return { proceed: true, input: s, asked: false };
  let u = await i(e, s, { ...o, toolUseId: void 0 }, t, "");
  if (u.behavior !== "allow")
    return {
      proceed: false,
      asked: true,
      reason: "denied",
      message:
        u.behavior === "deny" && u.message
          ? u.message
          : `isolatePeerMachines is enabled: sending to ${a} needs your approval \u2014 nothing was sent.`,
    };
  if (u.updatedInput === void 0) return { proceed: true, input: s, asked: true };
  let c = l(u.updatedInput);
  if (!c.success)
    return {
      proceed: false,
      asked: true,
      reason: "bad_shape",
      message: `The permission handler narrowed the input to a shape ${e.name} does not accept \u2014 nothing was sent.`,
    };
  if (c.data.to !== s.to)
    return {
      proceed: false,
      asked: true,
      reason: "recipient_changed",
      message: `The permission handler changed the recipient (from ${a}) after this send was resolved \u2014 nothing was sent. Send again to the recipient you intend.`,
    };
  if (c.data.message !== void 0 && typeof c.data.message !== "string")
    return {
      proceed: false,
      asked: true,
      reason: "non_text_message",
      message:
        "The permission handler rewrote the message into a structured (non-text) form, which cannot be sent to another session \u2014 nothing was sent.",
    };
  return { proceed: true, input: c.data, asked: true };
}
function bhe(e, s, o) {
  let i = Sr(s);
  e((t) =>
    t.sendMessagePins[i]?.id === o.id
      ? t
      : { ...t, sendMessagePins: { ...t.sendMessagePins, [i]: { id: o.id, name: s, ref: nAe(o.kind, o.id) } } },
  );
}
var RIt = "Note: messaging a new session for the first time under a previously used name (was it restarted?)",
  Vse = "another Claude session on this machine";
function nje(e, s, o) {
  if (e === void 0) return { message: "", display: "" };
  let i = (s && QS(s)) || "an agent in this session";
  return o.oneWay
    ? {
        message: "; sent under this session's address, not this agent's",
        display: ` (sent by ${i}, under this session's name)`,
      }
    : {
        message:
          "; sent under this session's address: any reply will be delivered to this session's main conversation, not to this agent",
        display: ` (sent by ${i}; replies go to the main conversation)`,
      };
}
function Not(e) {
  return e === "cloud"
    ? "a Claude session running in the cloud"
    : "a Claude session on another machine, over Remote Control";
}
var kIt =
    "; accepted by the server for that session, but delivery is not confirmed: it has not reported that it can receive cross-session messages and may be on an older version that cannot",
  Ce = " (accepted by the server; delivery not confirmed, that session may be on an older version)";
function hen(e) {
  return e ? { message: kIt, display: Ce } : { message: "", display: "" };
}
function x0e(e) {
  return `${e.alsoListedRemotely ? "; it is also connected via Remote Control" : ""}${e.remoteNamesakeClaimedLocally ? `; a Remote Control or cloud session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? re : ""}`;
}
function HIt(e, s, o = "live session", i = "delivery") {
  return ae(
    e,
    `. ${i === "subscription" ? "The subscription" : "This"} went to the one this conversation confirmed; to switch, re-send with that ${o === "agent" ? "agent" : "session"}'s 'name [ref]'${s}.`,
    o,
  );
}
function xIt(e, s = "live session", o = "delivery") {
  return ae(
    e,
    `; ${o === "subscription" ? "the subscription" : "this"} went to the one confirmed earlier in this conversation.`,
    s,
  );
}
function ae(e, s, o) {
  let i = e.previouslyPinned
      ? `
${RIt}`
      : "",
    t = e.sameNamedSiblings
      ? `
Note: ${e.sameNamedSiblings} other ${k(e.sameNamedSiblings, `${o} is`, `${o}s are`)} also named '${e.displayName}'${s}`
      : "";
  return `${i}${t}`;
}
function Fot(e) {
  return `${e.remoteNamesakeClaimedLocally ? `; another session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? re : ""}`;
}
function _en(e) {
  return e.localUnavailable && !e.bridgeUnavailable && !e.cloudUnavailable
    ? "the sessions on this machine could not be listed just now"
    : e.localUnavailable
      ? "this machine's and your account's other sessions could not all be checked just now"
      : "your account's other sessions could not be checked just now";
}
function yen(e) {
  return `A session on this machine now claims to be '${e}', which was confirmed earlier as a session elsewhere`;
}
var re =
    "; your session list was too long to check completely, so a same-named session beyond what was searched would not have been seen",
  I0e = `
Your session list was too long to check completely, so a session by that name may exist beyond what was searched.`,
  Sen = "your session list was too long to check completely";
async function rje(e, s, o, i, t, r) {
  await pwe({ refresh: true, credentials: r });
  let a = Sr(s),
    l = ds(i.teamContext),
    d = null;
  if (KMe(s)) return { kind: "not-found", closest: [] };
  if (typeof o === "string") {
    if (s === yp) return { kind: "main" };
    let f = i.teamContext?.teammates ?? {},
      R = Object.entries(f).find(([, h]) => h.name === s),
      _ = yb(s) ?? yb(a),
      m = R || _ ? void 0 : i.agentNameRegistry.get(s),
      w = _ ?? m;
    if (w) return G(i, w, s);
    if (R) return { kind: "mailbox", recipientName: s, memberAgentId: R[0], memberIdentitySource: "team-context" };
    let ee = lO(s);
    if (l) {
      if (s === vi) return { kind: "mailbox", recipientName: s };
      if (((d = await Rf(l, t)), ee === null && d !== null)) {
        let h = npe(d, b$(i)).find((b) => b.name === s);
        if (h !== void 0)
          return { kind: "mailbox", recipientName: s, memberAgentId: h.agentId, memberIdentitySource: "roster" };
      }
    }
    let ke = b$(i),
      K = Object.entries(f).find(
        ([h, b]) => (eAe({ name: b.name, agentId: h }, ke) || !tpe(b.name)) && Sr(b.name) === a,
      );
    if (K !== void 0)
      return { kind: "mailbox", recipientName: K[1].name, memberAgentId: K[0], memberIdentitySource: "team-context" };
    for (let [h, b] of i.agentNameRegistry) if (!tpe(h) && Sr(h) === a) return G(i, b, h);
    let A = ee;
    if (A) {
      let [h, b] = await Promise.all([n$t(), Jce(e, r)]),
        F = h.sessions,
        W = await de(e, i.sendMessagePins, Sr(A.name), b, a, iln(e), r),
        V = W.rows,
        Re = W.unavailable,
        S = ZI(i, { teamFile: d, sessions: F, cloud: b.sessions, bridge: V }),
        M = Sr(A.name),
        ne = (x, H, Ne, xe) => {
          let T = B(x, i);
          return T.kind === "local-session" || T.kind === "cloud-session"
            ? {
                ...T,
                ...X(T, M, H, { socksMirroredRemotely: fe(F, b, Ne), searchTruncated: b.truncated === true || xe }),
              }
            : T;
        },
        se = ce(S, M, A.ref);
      if (se) return ne(se, S, V, W.truncated);
      let ie = Re,
        oe = W.truncated;
      if (V === void 0) {
        let x = await q(e, b, a, r);
        if (((ie = x.unavailable), (oe = x.truncated), x.rows.length > 0)) {
          S = ZI(i, { teamFile: d, sessions: F, cloud: b.sessions, bridge: x.rows });
          let H = ce(S, M, A.ref);
          if (H) return ne(H, S, x.rows, x.truncated);
        }
      }
      return { ...L(M, S), ...ue(b, ie, h.unavailable, { remoteTruncated: oe }), ...C(i.sendMessagePins, [M], XMe(F)) };
    }
  }
  if (typeof o !== "string") {
    if (o.type === "shutdown_response") return { kind: "mailbox", recipientName: s };
    if (s !== vi && IH(s)) return L(Sr(s), ZI(i, { teamFile: null, sessions: [] }), (m) => m.kind === "teammate");
    if (!l) return { kind: "mailbox", recipientName: s };
    if (s === vi) return { kind: "mailbox", recipientName: s };
    let f = Object.entries(i.teamContext?.teammates ?? {}).filter(
        ([m, w]) => eAe({ name: w.name, agentId: m }, b$(i)) || !tpe(w.name),
      ),
      R = f.find(([, m]) => m.name === s);
    if (R) return { kind: "mailbox", recipientName: s, memberAgentId: R[0], memberIdentitySource: "team-context" };
    if (((d = await Rf(l, t)), lO(s) === null && d !== null)) {
      let m = npe(d, b$(i)).find((w) => w.name === s);
      if (m !== void 0)
        return { kind: "mailbox", recipientName: s, memberAgentId: m.agentId, memberIdentitySource: "roster" };
    }
    let _ = f.find(([, m]) => Sr(m.name) === a);
    if (_ !== void 0)
      return { kind: "mailbox", recipientName: _[1].name, memberAgentId: _[0], memberIdentitySource: "team-context" };
    if (lO(s) === null && d !== null) {
      let m = wbt(npe(d, b$(i)), s);
      if (m !== void 0)
        return {
          kind: "mailbox",
          recipientName: m.name,
          displayName: s,
          memberAgentId: m.agentId,
          memberIdentitySource: "roster",
        };
    }
    if (d === null) return { kind: "mailbox", recipientName: s };
    return L(a, ZI(i, { teamFile: d, sessions: [] }), (m) => m.kind === "teammate");
  }
  if (l && d === null) {
    if (IH(s)) return L(a, ZI(i, { teamFile: d, sessions: [] }));
    return { kind: "mailbox", recipientName: s };
  }
  let [u, c] = await Promise.all([n$t(), Jce(e, r)]),
    v = u.sessions,
    Y = await de(e, i.sendMessagePins, a, c, a, iln(e), r),
    I = Y.rows,
    j = Y.unavailable,
    O = Y.truncated,
    J = XMe(v),
    z = () => ({
      cloudUnavailable: ge(c.unavailable),
      bridgeUnavailable: j,
      localClaimedRemoteBodies: J,
      bridgeSettled: I !== void 0,
      localUnavailable: u.unavailable,
      socksMirroredRemotely: fe(v, c, I),
      searchTruncated: c.truncated === true || O,
    }),
    N = ZI(i, { teamFile: d, sessions: v, cloud: c.sessions, bridge: I }),
    U = N.byName.get(a)?.length === 1 ? N.byName.get(a)[0] : void 0,
    Q = P(i.sendMessagePins, a),
    ye = U !== void 0 && Q !== void 0 && Object.hasOwn(i.sendMessagePins, a) && i.sendMessagePins[a].id === U.id,
    ve = U !== void 0 && (U.kind === "session" || U.kind === "cloud-session") && Q !== "agent" && !ye;
  if (I === void 0 && ve) {
    let f = await q(e, c, a, r);
    (I = f.rows),
      (j = f.unavailable),
      (O = f.truncated),
      (N = ZI(i, { teamFile: d, sessions: v, cloud: c.sessions, bridge: f.rows }));
  }
  let Z = le(N, a, s, i, z());
  if (Z) return Z;
  if (I === void 0) {
    let f = await q(e, c, a, r);
    if (((I = f.rows), (j = f.unavailable), (O = f.truncated), f.rows.length > 0)) {
      N = ZI(i, { teamFile: d, sessions: v, cloud: c.sessions, bridge: f.rows });
      let R = le(N, a, s, i, z());
      if (R) return R;
    }
  }
  return (
    Se(N, a, i, z()) ?? {
      ...L(a, N),
      ...ue(c, j, u.unavailable, { remoteTruncated: O }),
      ...C(i.sendMessagePins, [a], J),
    }
  );
}
function Ie(e, s, o) {
  let i = P(e, s);
  if (i !== "cloud" && i !== "remote-control") return;
  let t = e[s];
  return o.has(Tr(t.id)) ? t.name : void 0;
}
function we(e, s) {
  let o = s[0];
  if (o === void 0 || o.length < 3) return s;
  let i = Object.keys(e).filter((t) => t !== o && t.startsWith(o) && !s.includes(t));
  return i.length === 0 ? s : [...s, ...i];
}
function C(e, s, o) {
  for (let i of we(e, s)) {
    let t = Ie(e, i, o);
    if (t !== void 0) return { pinnedIdentityClaimedLocally: t };
  }
  return {};
}
function P(e, s) {
  let o = Object.hasOwn(e, s) ? e[s] : void 0;
  if (o === void 0) return;
  if (yb(o.id) !== null) return "agent";
  if (o.id.startsWith("cse_")) return "cloud";
  return Tr(o.id) !== o.id ? "remote-control" : "local";
}
async function de(e, s, o, i, t, r, a) {
  let l = r?.rows;
  if (!_e(s, o, i.sessions, l)) return { rows: l, unavailable: void 0, truncated: r !== void 0 && r.truncated };
  let d = await q(e, i, t, a);
  return {
    rows: d.unavailable === void 0 || l === void 0 ? d.rows : l,
    unavailable: d.unavailable,
    truncated: d.unavailable === void 0 || r === void 0 ? d.truncated : r.truncated,
  };
}
function _e(e, s, o, i) {
  let t = P(e, s);
  if (t !== "remote-control" && t !== "cloud") return false;
  let r = Tr(e[s].id);
  if (o.some((a) => Tr(a.id) === r)) return false;
  return i === void 0 || !i.some((a) => Tr(a.id) === r);
}
function E(e) {
  return {
    ...(e.cloudUnavailable && { cloudUnavailable: e.cloudUnavailable }),
    ...(e.bridgeUnavailable && { bridgeUnavailable: e.bridgeUnavailable }),
    ...(e.localUnavailable && { localUnavailable: true }),
    ...(e.searchTruncated && { searchTruncated: true }),
  };
}
function le(e, s, o, i, t) {
  let r = tAe(e.byName, s, o);
  if (r) {
    if (r.kind === "ambiguous") {
      let a = e.byName.get(s),
        l = pe(i.sendMessagePins, s, a, o, t);
      if (l) return he(l, a, i, s, e, t);
      let d = C(i.sendMessagePins, [s], t.localClaimedRemoteBodies),
        u = a[0],
        c = P(i.sendMessagePins, s);
      if (
        a.length === 1 &&
        (u.kind === "session" || u.kind === "cloud-session" || u.kind === "bridge-session") &&
        !t.cloudUnavailable &&
        t.bridgeSettled &&
        !t.bridgeUnavailable &&
        !t.localUnavailable &&
        d.pinnedIdentityClaimedLocally === void 0 &&
        c !== "agent" &&
        !u.derivedName
      ) {
        let v = B(u, i);
        if (v.kind === "local-session" || v.kind === "cloud-session")
          return { ...v, exactUnique: true, ...(c !== void 0 && { previouslyPinned: true }), ...X(v, s, e, t) };
      }
      return { ...D(a, "exact"), ...E(t), ...d };
    }
    return B(r.candidate, i);
  }
  return;
}
function Se(e, s, o, i) {
  if (s.length >= 3) {
    let t = [...e.byName.keys()].filter((r) => r.startsWith(s));
    if (t.length === 1) {
      let r = tAe(e.byName, t[0]),
        a = P(o.sendMessagePins, s),
        l = C(o.sendMessagePins, [s], i.localClaimedRemoteBodies).pinnedIdentityClaimedLocally !== void 0;
      if ((a !== void 0 && a !== "agent") || l) {
        let d = e.byName.get(t[0]);
        return (
          g("send_message_prefix_match", a !== void 0 && a !== "agent" ? "typed_name_pinned" : "prefix_of_claimed_pin"),
          {
            ...D(r.kind === "one" ? [r.candidate] : d, "prefix"),
            ...E(i),
            ...C(o.sendMessagePins, [s, t[0]], i.localClaimedRemoteBodies),
          }
        );
      }
      if (r.kind === "ambiguous") {
        let d = e.byName.get(t[0]),
          u = pe(o.sendMessagePins, t[0], d, void 0, i, true);
        if (u)
          return (
            y("send_message_prefix_match", { input_len: s.length, index_size: e.candidates.length, pinned: 1 }),
            he(u, d, o, t[0], e, i)
          );
        if (d.length === 1) g("send_message_prefix_match", "confirm_required");
        else p("send_message_prefix_match", "ambiguous_name");
        return { ...D(d, "prefix"), ...E(i), ...C(o.sendMessagePins, [s, t[0]], i.localClaimedRemoteBodies) };
      }
      if (i.cloudUnavailable || i.bridgeUnavailable || i.localUnavailable)
        return (
          g(
            "send_message_prefix_match",
            i.cloudUnavailable || i.bridgeUnavailable ? "remote_unsearched" : "local_unsearched",
          ),
          { ...D([r.candidate], "prefix"), ...E(i), ...C(o.sendMessagePins, [s, t[0]], i.localClaimedRemoteBodies) }
        );
      return (
        y("send_message_prefix_match", {
          input_len: s.length,
          index_size: e.candidates.length,
          ...(i.searchTruncated && { search_truncated: true }),
        }),
        B(r.candidate, o)
      );
    }
    if (t.length > 1)
      return (
        p("send_message_prefix_match", "ambiguous_prefix"),
        {
          ...E(i),
          ...C(o.sendMessagePins, [s, ...t], i.localClaimedRemoteBodies),
          ...D(
            t.flatMap((r) => {
              let a = e.byName.get(r),
                l = tAe(e.byName, r);
              return l?.kind === "one" ? [l.candidate] : a;
            }),
            "prefix",
          ),
        }
      );
  }
  return;
}
function ce(e, s, o) {
  let i = e.byName.get(s) ?? [],
    t = tAe(e.byName, s);
  return (t?.kind === "one" ? [t.candidate] : i).find((a) => a.ref === o);
}
async function q(e, s, o, i) {
  if (Yo()) {
    let t = !HDe(s.unavailable),
      r = Umt(e, i),
      a = await jt(r, me);
    if (a === void 0) {
      if (
        (n(
          `[bridge:resolve] "${o}": Remote Control population not ready within ${me}ms (cold) \u2014 not searched, disclosing a hedge`,
          { level: "warn" },
        ),
        t)
      )
        r.then((d) => xze(e, d, Ize(d.rows, s.sessions)));
      return { rows: [], unavailable: "timeout", truncated: false };
    }
    if (a.failed || (a.identityKey !== null && !Bmt(a)))
      return (
        n(
          `[bridge:resolve] "${o}": Remote Control walk ${a.failed ? "failed" : "ran under a previous handle"} (cold) \u2014 not searched, disclosing a hedge`,
          { level: "warn" },
        ),
        { rows: [], unavailable: "fetch_failed", truncated: false }
      );
    let l = Ize(a.rows, s.sessions);
    if (t) xze(e, a, l);
    else jmt(e, a);
    return (
      n(
        `[bridge:resolve] "${o}": ${a.rows.length} Remote Control rows, ${l.length} listed (cold${t ? ", recorded" : ", not recorded \u2014 cloud list failed"})`,
      ),
      { rows: l, unavailable: void 0, truncated: a.truncated === true }
    );
  }
  return { rows: [], unavailable: void 0, truncated: false };
}
function ge(e) {
  return HDe(e) ? e : void 0;
}
function ue(e, s, o, { remoteTruncated: i }) {
  return {
    cloudUnavailable: ge(e.unavailable),
    ...(s !== void 0 && { bridgeUnavailable: s }),
    ...(o && { localUnavailable: true }),
    ...((e.truncated === true || i) && { searchTruncated: true }),
  };
}
function G(e, s, o) {
  let i = e.tasks[s];
  if (Cr(i) && !r$t(i)) {
    if (i.status === "running") return { kind: "agent-live", agentId: s, agentName: o };
    if (i.stoppedByUser) return { kind: "agent-stopped-by-user", agentName: o };
    return { kind: "agent-stopped", agentId: s, status: i.status, agentName: o };
  }
  return { kind: "agent-evicted", agentId: s, agentName: o };
}
function B(e, s) {
  switch (e.kind) {
    case "main":
      return { kind: "main" };
    case "teammate":
      return {
        kind: "mailbox",
        recipientName: e.name,
        memberAgentId: e.id,
        memberIdentitySource: e.where === "in-process" ? "team-context" : "roster",
      };
    case "subagent":
      return G(s, po(e.id), e.name);
    case "session":
      return { kind: "local-session", sock: e.sock, displayName: e.name };
    case "cloud-session":
    case "bridge-session":
      return {
        kind: "cloud-session",
        via: e.where === "cloud" ? "cloud" : "remote-control",
        refKind: e.kind,
        sessionId: e.id,
        displayName: e.name,
        ...(e.reportsInbound && { reportsInbound: true }),
        ...(e.inboundReportUnavailable && { inboundReportUnavailable: true }),
      };
  }
}
var be = 3,
  me = 5000;
function D(e, s) {
  return { kind: "ambiguous", candidates: e.slice(0, be), total: e.length, matchedBy: s };
}
function L(e, s, o) {
  let i = o ? s.candidates.filter(o) : s.candidates,
    t = te(i.map((a) => Sr(a.name)));
  return { kind: "not-found", closest: $Ie(e, t, be).map((a) => i.find((l) => Sr(l.name) === a)) };
}
function pe(e, s, o, i, t, r = false) {
  let a = Object.hasOwn(e, s) ? e[s] : void 0;
  if (a === void 0) return;
  let l = P(e, s);
  if (l === "agent") return;
  let d = l !== "local";
  if (d && t.localClaimedRemoteBodies.has(Tr(a.id))) return;
  if (
    (l === "cloud" && t.cloudUnavailable) ||
    (l === "remote-control" && t.bridgeUnavailable) ||
    (l === "local" && t.localUnavailable) ||
    (r && (t.cloudUnavailable || t.bridgeUnavailable || t.localUnavailable))
  )
    return;
  let u = o.find(
    (c) =>
      (d ? c.kind === "cloud-session" || c.kind === "bridge-session" : c.kind === "session") &&
      c.where !== "in-process" &&
      c.id === a.id,
  );
  if (u === void 0) {
    if (!(d && t.searchTruncated)) g("send_message_pin", "stale");
    return;
  }
  if (i !== void 0 && u.name !== i && o.some((c) => c.name === i)) return;
  return y("send_message_pin"), u;
}
function he(e, s, o, i, t, r) {
  let a = B(e, o);
  if (a.kind !== "local-session" && a.kind !== "cloud-session") return a;
  return { ...a, ...(s.length > 1 && { sameNamedSiblings: s.length - 1 }), ...X(a, i, t, r) };
}
function fe(e, s, o) {
  let i = new Set([...s.sessions.map((t) => Tr(t.id)), ...(o ?? []).map((t) => Tr(t.id))]);
  return new Set(e.flatMap((t) => (t.bridgeSessionId !== void 0 && i.has(Tr(t.bridgeSessionId)) ? [t.sock] : [])));
}
function X(e, s, o, i) {
  return {
    ...(e.kind === "local-session" && i.socksMirroredRemotely.has(e.sock) && { alsoListedRemotely: true }),
    ...([...(o.remoteNamesClaimedLocally.get(s) ?? [])].some((t) => e.kind !== "local-session" || t !== e.sock) && {
      remoteNamesakeClaimedLocally: true,
    }),
    ...(i.searchTruncated && { searchTruncated: true }),
  };
}
export { tje, bhe, RIt, Vse, nje, Not, kIt, hen, x0e, HIt, xIt, Fot, _en, yen, I0e, Sen, rje };
