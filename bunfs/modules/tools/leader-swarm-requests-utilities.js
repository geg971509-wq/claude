// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { b, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { rb, gf, ds, sS } from "/$bunfs/root/chunk-0g6cj4h1.js";
import { $g, yfn, Sfn, bfn, wfn } from "/$bunfs/root/chunk-da857b4g.js";
import { Rf } from "/$bunfs/root/chunk-5djs3wbb.js";
import { vi } from "/$bunfs/root/chunk-75bjbbtd.js";
import { createHash as x } from "crypto";
var S = 32;
function l(e, r) {
  return x("sha256")
    .update(e)
    .update("\x00")
    .update(b(g(r)))
    .digest("hex");
}
function g(e, r = 0) {
  if (r > S) return e;
  if (Array.isArray(e)) return e.map((o) => g(o, r + 1));
  if (typeof e === "object" && e !== null)
    return Object.fromEntries(
      Object.entries(e)
        .sort(([o], [s]) => (o < s ? -1 : o > s ? 1 : 0))
        .map(([o, s]) => [o, g(s, r + 1)]),
    );
  return e;
}
function Z0e(e, r) {
  let o = V(b(r));
  return l(e, o);
}
function k() {
  return `perm-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function Eit(e) {
  let r = e.teamName || ds(),
    o = e.workerId || rb(),
    s = e.workerName || gf(),
    i = e.workerColor || sS();
  if (!r) throw Error("Team name is required for permission requests");
  if (!o) throw Error("Worker ID is required for permission requests");
  if (!s) throw Error("Worker name is required for permission requests");
  return {
    id: k(),
    workerId: o,
    workerName: s,
    workerColor: i,
    teamName: r,
    toolName: e.toolName,
    toolUseId: e.toolUseId,
    description: e.description,
    input: e.input,
    permissionSuggestions: e.permissionSuggestions || [],
    createdAt: Date.now(),
  };
}
function _(e) {
  if (!(e || ds())) return false;
  let o = rb();
  return !o || o === "team-lead";
}
function eHe() {
  let e = ds(),
    r = rb();
  return !!e && !!r && !_();
}
async function w(e, r) {
  let o = e || ds();
  if (!o) return null;
  if (!(await Rf(o, r))) return n(`[PermissionSync] Team file not found for team: ${o}`), null;
  return vi;
}
async function u(e, r, o, s, i) {
  if ((await $g(e, r, o, i)) === void 0) return n(`[PermissionSync] FAILED to deliver ${s}`, { level: "error" }), false;
  return n(`[PermissionSync] Sent ${s}`), true;
}
async function Ait(e, r) {
  let o = await w(e.teamName, r);
  if (!o) return n("[PermissionSync] Cannot send permission request: leader name not found"), false;
  try {
    let s = yfn({
      request_id: e.id,
      agent_id: e.workerName,
      tool_name: e.toolName,
      tool_use_id: e.toolUseId,
      description: e.description,
      input: e.input,
      permission_suggestions: e.permissionSuggestions,
    });
    return await u(
      o,
      { from: e.workerName, text: b(s), timestamp: new Date().toISOString(), color: e.workerColor },
      e.teamName,
      `permission request ${b(e.id)} to leader ${b(o)} via mailbox`,
      r,
    );
  } catch (s) {
    return n(`[PermissionSync] Failed to send permission request via mailbox: ${s}`), h(s), false;
  }
}
async function gtn(e, r, o, s, i, a) {
  let m = s || ds();
  if (!m) return n("[PermissionSync] Cannot send permission response: team name not found"), false;
  try {
    let t = Sfn({
      request_id: o,
      subtype: r.decision === "approved" ? "success" : "error",
      error: r.feedback,
      updated_input: r.updatedInput,
      permission_updates: r.permissionUpdates,
      tool_use_id: a,
      approved_request: r.approvedRequest,
    });
    return await u(
      e,
      { from: vi, text: b(t), timestamp: new Date().toISOString() },
      m,
      `permission response for ${b(o)} to worker ${b(e)} via mailbox`,
      i,
    );
  } catch (t) {
    return n(`[PermissionSync] Failed to send permission response via mailbox: ${t}`), h(t), false;
  }
}
function ZUn() {
  return `sandbox-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
async function eBn(e, r, o, s) {
  let i = o || ds();
  if (!i)
    return (
      n("[PermissionSync] Cannot send sandbox permission request: team name not found"),
      p("swarm_sandbox_permission_request", "no_team_name"),
      false
    );
  let a = await w(i, s);
  if (!a)
    return (
      n("[PermissionSync] Cannot send sandbox permission request: leader name not found"),
      p("swarm_sandbox_permission_request", "no_leader"),
      false
    );
  let m = rb(),
    t = gf(),
    c = sS();
  if (!m || !t)
    return (
      n("[PermissionSync] Cannot send sandbox permission request: worker ID or name not found"),
      p("swarm_sandbox_permission_request", "no_worker_identity"),
      false
    );
  try {
    let d = bfn({ requestId: r, workerId: m, workerName: t, workerColor: c, host: e }),
      f = await u(
        a,
        { from: t, text: b(d), timestamp: new Date().toISOString(), color: c },
        i,
        `sandbox permission request ${b(r)} for host ${b(e)} to leader ${b(a)} via mailbox`,
        s,
      );
    if (f) y("swarm_sandbox_permission_request");
    else p("swarm_sandbox_permission_request", "mailbox_write_failed");
    return f;
  } catch (d) {
    return (
      n(`[PermissionSync] Failed to send sandbox permission request via mailbox: ${d}`),
      h(d),
      p("swarm_sandbox_permission_request", "mailbox_write_failed"),
      false
    );
  }
}
async function sPt(e, r, o, s, i, a) {
  let m = i || ds();
  if (!m) return n("[PermissionSync] Cannot send sandbox permission response: team name not found"), false;
  try {
    let t = wfn({ requestId: r, host: o, allow: s });
    return await u(
      e,
      { from: vi, text: b(t), timestamp: new Date().toISOString() },
      m,
      `sandbox permission response for ${b(r)} (host: ${b(o)}, allow: ${b(s)}) to worker ${b(e)} via mailbox`,
      a,
    );
  } catch (t) {
    return n(`[PermissionSync] Failed to send sandbox permission response via mailbox: ${t}`), h(t), false;
  }
}
export { Z0e, Eit, eHe, Ait, gtn, ZUn, eBn, sPt };
