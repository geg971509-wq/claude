// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { g5t } from "/$bunfs/root/chunk-f9h0bg01.js";
import { y, p, g, Hr } from "/$bunfs/root/chunk-ca80fke8.js";
import { R, l, E, $o } from "/$bunfs/root/chunk-ypdw393e.js";
import { b, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { cme } from "/$bunfs/root/chunk-gcks6mn0.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { qe } from "/$bunfs/root/chunk-2masxyqj.js";
import { KH, P_, it } from "/$bunfs/root/chunk-rgw52f13.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { Gi } from "/$bunfs/root/chunk-4rh74qms.js";
import { gf, ds, na } from "/$bunfs/root/chunk-0g6cj4h1.js";
import { xwe } from "/$bunfs/root/chunk-qpj83ec7.js";
import { _Ve } from "/$bunfs/root/chunk-3ekngzmx.js";
import { m3 } from "/$bunfs/root/chunk-rr0yj5sq.js";
import { vi } from "/$bunfs/root/chunk-75bjbbtd.js";
import { Sc } from "/$bunfs/root/chunk-56sxk8k2.js";
import { mkdir as B, readFile as C, rm as I, writeFile as _ } from "fs/promises";
import { join as w, resolve as M } from "path";
function Igt(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}
function Dfn(e) {
  return e.replaceAll("@", "-");
}
function Ofn(e) {
  return w(cme(), Igt(e));
}
function rne(e) {
  return w(Ofn(e), "config.json");
}
function x(e) {
  return Te.team(Igt(e));
}
function k(e) {
  let t = "failureClass" in e ? `/${e.failureClass}` : "",
    r = "telemetryCode" in e && e.telemetryCode !== void 0 ? ` [${e.telemetryCode}]` : "";
  return `${e.code}${t}${r}`;
}
function A(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockSuspect";
}
function W(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockContended";
}
function F(e) {
  return (
    e.code === "Unavailable" ||
    e.code === "NotFound" ||
    (e.code === "Failed" &&
      (e.failureClass === "permission" ||
        e.failureClass === "resource" ||
        e.failureClass === "environment" ||
        (e.failureClass === "unknown" && $o(e.cause))))
  );
}
function P(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let t = e,
    r = Array.isArray(t.members) ? t.members.filter(j) : [];
  return Array.isArray(t.members) && r.length === t.members.length ? t : { ...t, members: r };
}
function j(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "agentId" in e &&
    typeof e.agentId === "string" &&
    "name" in e &&
    typeof e.name === "string"
  );
}
async function Rf(e, t) {
  if (t) {
    let r = await t.read([x(e)]);
    if (!r.ok) return n(`[TeammateTool] Failed to read team file for ${e}: ${r.error.code}`), null;
    let i = r.value.items[0];
    if (!i.found) return null;
    try {
      return P(V(Buffer.from(i.value).toString("utf8")));
    } catch (o) {
      return n(`[TeammateTool] Failed to read team file for ${e}: ${l(o)}`), null;
    }
  }
  try {
    let r = await C(rne(e), "utf-8");
    return P(V(r));
  } catch (r) {
    if (E(r) === "ENOENT") return null;
    return n(`[TeammateTool] Failed to read team file for ${e}: ${l(r)}`), null;
  }
}
function c6t(e, t) {
  if ($o(t)) n(`[TeammateTool] Failed to write team file for ${e} (${E(t)}): ${l(t)}`, { level: "error" });
  else if (D(t)) n(`[TeammateTool] Failed to write team file for ${e}: ${l(t)}`, { level: "error" });
  else h(t);
}
function D(e) {
  if (!(e instanceof Error) || e.cause === void 0 || e.cause === null) return false;
  let t = e.cause;
  if (typeof t !== "object" || typeof t.code !== "string") return false;
  return F(t);
}
var O = { realpath: false, retries: { retries: 10, minTimeout: 5, maxTimeout: 100 }, onCompromised: () => {} };
function L8n(e) {
  return new R(
    `Internal error: team file for "${e}" not found. The session team should have been initialized at startup.`,
    "Team file missing (session team not initialized)",
  );
}
async function Az(e, t, r, i) {
  if (i) return L(e, t, r, i);
  let o = rne(e),
    a;
  try {
    a = await Gi(o, { lockfilePath: `${o}.lock`, ...O });
  } catch (s) {
    if (E(s) === "ENOENT") throw L8n(e);
    throw s;
  }
  try {
    let s = await Rf(e);
    if (!s) throw Error("Team config file unreadable (lock acquired, read failed)");
    let f = t(s);
    if (f === false) return;
    try {
      await u6t(e, s);
    } catch (m) {
      if (!r?.bestEffortWrite) throw m;
      c6t(e, m);
    }
    return f;
  } finally {
    try {
      await a();
    } catch (s) {
      n(`[TeammateTool] updateTeamFile lock release failed: ${l(s)}`);
    }
  }
}
async function Lfn(e, t, r) {
  try {
    await Az(
      e,
      (i) => {
        let o = i.members.findIndex((a) => a.agentId === t);
        if (o === -1) return false;
        i.members.splice(o, 1);
      },
      void 0,
      r,
    );
  } catch (i) {
    n(`[TeammateTool] removeTeamMember(${t}) failed: ${l(i)}`);
  }
}
async function L(e, t, r, i) {
  let o = x(e),
    a = 5,
    s = xwe(50),
    f,
    m = (u) => {
      if (u === void 0) return { skip: true, result: { kind: "missing" } };
      let c;
      try {
        c = P(V(Buffer.from(u.value).toString("utf8"))) ?? void 0;
      } catch (v) {
        return { skip: true, result: { kind: "unreadable", parseError: l(v) } };
      }
      if (!c) return { skip: true, result: { kind: "unreadable" } };
      let T;
      try {
        T = t(c);
      } catch (v) {
        return { skip: true, result: { kind: "threw", error: v } };
      }
      if (T === false) return { skip: true, result: { kind: "declined" } };
      return (f = T), { write: b(c, null, 2), result: { kind: "applied", result: T } };
    },
    d;
  for (let u = 1; ; u++) {
    if (((d = await i.update(o, m)), !d.ok)) {
      if (A(d.error) && u < 5) {
        await s(u);
        continue;
      }
      break;
    }
    let c = d.value.result;
    if (c === void 0 || c.kind === "declined") return;
    switch (c.kind) {
      case "missing":
        throw L8n(e);
      case "unreadable":
        if (c.parseError !== void 0) n(`[TeammateTool] Failed to read team file for ${e}: ${c.parseError}`);
        if (u < 5) {
          await s(u);
          continue;
        }
        throw Error("Team config file unreadable (lock acquired, read failed)");
      case "threw":
        throw c.error;
      case "applied":
        return y("swarm_team_file_update"), c.result;
      default:
        return c;
    }
  }
  let S = W(d.error);
  if (S) g("swarm_team_file_update", "lock_contended");
  if (!r?.bestEffortWrite) {
    let u = new R(`Team file update failed (${k(d.error)}) for ${e}`, "Team file update failed (storage v5)");
    if (((u.cause = d.error), !S && !F(d.error))) p("swarm_team_file_update", d.error.code);
    throw u;
  }
  if (!A(d.error) && F(d.error))
    n(`[TeammateTool] Failed to update team file for ${e} (${k(d.error)})`, { level: "error" });
  else {
    let u = new R(`Team file update failed (${k(d.error)}) for ${e}`, "Team file update failed (storage v5)");
    (u.cause = d.error), p("swarm_team_file_update", d.error.code), h(u);
  }
  return f;
}
async function u6t(e, t, r) {
  if (r) {
    let o = await r.write(x(e), b(t, null, 2), { precondition: { type: "none" } });
    if (!o.ok) {
      let a = new R(`Team file write failed (${k(o.error)}) for ${e}`, "Team file write failed (storage v5)");
      throw ((a.cause = o.error), a);
    }
    return;
  }
  let i = Ofn(e);
  await B(i, { recursive: true }), await _(rne(e), b(t, null, 2));
}
async function hue(e, t, r) {
  let i = t.agentId || t.name;
  if (!i) return n("[TeammateTool] removeTeammateFromTeamFile called with no identifier"), false;
  let o = false;
  try {
    let a =
      (await Az(
        e,
        (s) => {
          o = false;
          let f = s.members.length;
          s.members = s.members.filter((d) => {
            if (t.agentId && d.agentId === t.agentId) return false;
            if (t.name && d.name === t.name) return false;
            return true;
          });
          let m = s.members.length !== f;
          return (o = !m), m;
        },
        { bestEffortWrite: true },
        r,
      )) ?? false;
    if (a) n(`[TeammateTool] Removed teammate from team file: ${i}`);
    else if (o) n(`[TeammateTool] Teammate ${i} not found in team file for "${e}"`);
    return a;
  } catch (a) {
    return n(`[TeammateTool] Cannot remove teammate ${i} from "${e}": ${l(a)}`), false;
  }
}
async function mVe(e, t, r, i) {
  let o = false;
  try {
    let a =
      (await Az(
        e,
        (s) => {
          let f = s.members.findIndex((d) => d.agentId === t),
            m = s.members[f];
          if (!m) return (o = false), false;
          if (r?.onlyIfJoinedBefore !== void 0 && m.joinedAt >= r.onlyIfJoinedBefore) return (o = true), false;
          return (o = false), s.members.splice(f, 1), true;
        },
        { bestEffortWrite: true },
        i,
      )) ?? false;
    if (a) n(`[TeammateTool] Removed member ${t} from team ${e}`);
    else if (o) n(`[TeammateTool] Skipped stale removal of ${t} from team ${e} (re-added after removal was initiated)`);
    return a;
  } catch (a) {
    return n(`[TeammateTool] removeMemberByAgentId(${t}) failed for team ${e}: ${l(a)}`), false;
  }
}
async function d6t(e, t, r, i) {
  let o = "unchanged";
  try {
    if (
      (await Az(
        e,
        (a) => {
          let s = a.members.find((f) => f.name === t);
          if (!s) return (o = "absent"), false;
          if (s.mode === r) return (o = "unchanged"), false;
          (o = "set"), (s.mode = r);
        },
        void 0,
        i,
      ),
      o === "absent")
    )
      n(`[TeammateTool] Cannot set member mode: member ${t} not found in team ${e}`);
    else if (o === "set") n(`[TeammateTool] Set member ${t} in team ${e} to mode: ${r}`);
  } catch (a) {
    n(`[TeammateTool] Cannot set member mode: ${l(a)}`);
  }
}
async function Pgt(e, t, r) {
  if (!na()) return;
  let i = t ?? ds(),
    o = gf();
  if (i && o) await d6t(i, o, e, r);
}
async function gVe(e, t, r, i) {
  let o = "unchanged";
  try {
    if (
      (await Az(
        e,
        (a) => {
          let s = a.members.find((f) => f.name === t);
          if (!s) return (o = "absent"), false;
          if (s.isActive === r) return (o = "unchanged"), false;
          (o = "set"), (s.isActive = r);
        },
        void 0,
        i,
      ),
      o === "absent")
    )
      n(`[TeammateTool] Cannot set member active: member ${t} not found in team ${e}`);
    else if (o === "set") n(`[TeammateTool] Set member ${t} in team ${e} to ${r ? "active" : "idle"}`);
  } catch (a) {
    n(`[TeammateTool] Cannot set member active: ${l(a)}`);
  }
}
async function U(e) {
  let t = w(e, ".git"),
    r = null;
  try {
    if (KH(t, e)) throw Error(".git pointer file is a symlink");
    let o = (await C(t, "utf-8")).trim().match(/^gitdir:\s*(.+)$/);
    if (o && o[1] && !Sc(o[1].trim(), e) && !P_(o[1].trim(), e)) {
      let a = M(e, o[1].trim()),
        s = w(a, "..", "..");
      r = w(s, "..");
    }
  } catch {}
  if (!(await m3(e))) {
    n(`[TeammateTool] kept worktree \u2014 unremovable reparse point in ${e}`);
    return;
  }
  if (r) {
    let i = await qe(it(), ["worktree", "remove", "--force", e], { cwd: r });
    if (i.code === 0) {
      n(`[TeammateTool] Removed worktree via git: ${e}`);
      return;
    }
    if (i.stderr?.includes("not a working tree")) {
      n(`[TeammateTool] Worktree already removed: ${e}`);
      return;
    }
    n(`[TeammateTool] git worktree remove failed, falling back to rm: ${i.stderr}`);
  }
  try {
    await I(e, { recursive: true, force: true }), n(`[TeammateTool] Removed worktree directory manually: ${e}`);
  } catch (i) {
    n(`[TeammateTool] Failed to remove worktree ${e}: ${l(i)}`);
  }
}
function Mfn(e) {
  g5t().add(e);
}
async function BCr(e) {
  return Hr("swarm_session_cleanup", async () => {
    let t = g5t();
    if (t.size === 0) return;
    let r = Array.from(t);
    n(`cleanupSessionTeams: removing ${r.length} orphan team dir(s): ${r.join(", ")}`),
      await Promise.allSettled(r.map((i) => z(i, e))),
      await Promise.allSettled(r.map((i) => s_r(i, e))),
      t.clear();
  });
}
async function z(e, t) {
  let r = await Rf(e, t);
  if (!r) return;
  let i = r.members.filter((m) => m.name !== vi && m.tmuxPaneId && m.backendType && _Ve(m.backendType));
  if (i.length === 0) return;
  let [{ ensureBackendsRegistered: o, getBackendByType: a }, { isInsideTmux: s }] = await Promise.all([
    import("/$bunfs/root/chunk-bmyn3gb9.js"),
    import("/$bunfs/root/chunk-9esqsdsp.js"),
  ]);
  await o();
  let f = !(await s());
  await Promise.allSettled(
    i.map(async (m) => {
      if (!m.tmuxPaneId || !m.backendType || !_Ve(m.backendType)) return;
      let d = await a(m.backendType).killPane(m.tmuxPaneId, f);
      n(`cleanupSessionTeams: killPane ${m.name} (${m.backendType} ${m.tmuxPaneId}) \u2192 ${d}`);
    }),
  );
}
async function s_r(e, t) {
  return Hr("swarm_team_cleanup", async () => {
    let r = await Rf(e, t),
      i = [];
    if (r) {
      for (let a of r.members) if (a.worktreePath) i.push(a.worktreePath);
    }
    for (let a of i) await U(a);
    let o = Ofn(e);
    try {
      await I(o, { recursive: true, force: true }), n(`[TeammateTool] Cleaned up team directory: ${o}`);
    } catch (a) {
      n(`[TeammateTool] Failed to clean up team directory ${o}: ${l(a)}`);
    }
  });
}
export { Igt, Dfn, Ofn, rne, Rf, c6t, L8n, Az, Lfn, u6t, hue, mVe, d6t, Pgt, gVe, Mfn, BCr, s_r };
