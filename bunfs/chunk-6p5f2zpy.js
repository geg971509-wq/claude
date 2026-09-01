// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { tvt } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { K, gn, RU, jQe, Ag, WO } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { E } from "/$bunfs/root/chunk-ypdw393e.js";
import { vt, b, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { ms, $re, Bm, $6 } from "/$bunfs/root/chunk-tzhtxm67.js";
import { Ut } from "/$bunfs/root/chunk-ntyhd04p.js";
import { ry, BX, ZVe, X6t, Hht, Fz, NXn, kM, t5e, xht, FXn } from "/$bunfs/root/chunk-avrc9gay.js";
import { Aw, PO } from "/$bunfs/root/chunk-rgw52f13.js";
import { pc } from "/$bunfs/root/chunk-1pn2pk9v.js";
import { i, v, f } from "/$bunfs/root/chunk-saay52v7.js";
import { mkdir as _e, readFile as ye, unlink as ce, writeFile as Q } from "fs/promises";
import { dirname as Ie, join as de } from "path";
import { appendFile as he, mkdir as ge, readFile as Se } from "fs/promises";
import { join as oe } from "path";
var Te = [
    "**/.claude/scheduled_tasks.lock",
    "**/.claude/scheduled_tasks.json",
    "**/.claude/routines/.state/",
    "**/.claude/worktrees/",
    "**/.claude/checkpoints/",
    "**/.claude/mailbox/",
    "**/.claude/agent-registry.json",
    "**/.claude/agent-memory-local",
    "**/.claude/first-run",
    "**/.claude/assistant-daemon-state.json",
  ],
  se = "# claude-code-runtime";
async function ie(r) {
  if (!pc().claim(`claude_runtime_exclude_ensured:${r}`)) return;
  try {
    let t = await Aw(r);
    if (!t) return;
    let a = (await PO(t)) ?? t,
      S = oe(a, "info", "exclude"),
      d = "";
    try {
      if (((d = await Se(S, "utf-8")), d.includes(se))) return;
    } catch (x) {
      if (E(x) !== "ENOENT") throw x;
      await ge(oe(a, "info"), { recursive: true });
    }
    let l =
        d &&
        !d.endsWith(`
`)
          ? `
`
          : "",
      u = [se, ...Te, ""].join(`
`);
    await he(S, l + u);
  } catch (t) {
    n(`ensureClaudeRuntimeFilesExcluded: ${t}`);
  }
}
var Ce = de(".claude", "scheduled_tasks.lock"),
  we = m(() => f({ sessionId: i(), pid: v(), procStart: i().optional(), acquiredAt: v() }));
function N(r) {
  return de(r ?? gn(), Ce);
}
async function le(r) {
  let t;
  try {
    t = await ye(N(r), "utf8");
  } catch {
    return;
  }
  let a = we().safeParse(Ut(t, false));
  return a.success ? a.data : void 0;
}
async function ae(r, t) {
  let a = N(t),
    S = b(r);
  try {
    return await Q(a, S, { flag: "wx" }), true;
  } catch (d) {
    let l = E(d);
    if (l === "EEXIST") return false;
    if (l === "ENOENT") {
      await _e(Ie(a), { recursive: true });
      try {
        return await Q(a, S, { flag: "wx" }), true;
      } catch (u) {
        if (E(u) === "EEXIST") return false;
        throw u;
      }
    }
    throw d;
  }
}
function X(r, t) {
  r.unregisterCleanup?.(),
    (r.unregisterCleanup = vt(async () => {
      await j(r, t);
    }));
}
async function Y(r, t) {
  let a = t?.dir;
  await ie(a ?? gn());
  let S = t?.lockIdentity ?? K(),
    d = { sessionId: S, pid: process.pid, procStart: $6(), acquiredAt: Date.now() };
  if (await ae(d, a))
    return (r.lastBlockedBy = void 0), X(r, t), n(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`), true;
  let l = await le(a);
  if (l?.sessionId === S) {
    if (l.pid !== process.pid) await Q(N(a), b(d)), X(r, t);
    return true;
  }
  if (l && ms(l.pid) && (await Bm(l.pid, l.procStart))) {
    if (r.lastBlockedBy !== l.sessionId)
      (r.lastBlockedBy = l.sessionId),
        n(`[ScheduledTasks] scheduler lock held by session ${l.sessionId} (PID ${l.pid})`);
    return false;
  }
  if (l) n(`[ScheduledTasks] recovering stale scheduler lock from PID ${l.pid}`);
  if ((await ce(N(a)).catch(() => {}), await ae(d, a))) return (r.lastBlockedBy = void 0), X(r, t), true;
  return false;
}
async function j(r, t) {
  r.reset();
  let a = t?.dir,
    S = t?.lockIdentity ?? K(),
    d = await le(a);
  if (!d || d.sessionId !== S) return;
  try {
    await ce(N(a)), n("[ScheduledTasks] released scheduler lock");
  } catch {}
}
class Z {
  unregisterCleanup = void 0;
  lastBlockedBy = void 0;
  reset() {
    this.unregisterCleanup?.(), (this.unregisterCleanup = void 0), (this.lastBlockedBy = void 0);
  }
}
var Ee = import.meta.require("/$bunfs/root/chunk-jemhm57r.js"),
  ue = 1000,
  Le = 300,
  Oe = 5000;
function Icr(r, t, a) {
  if (a === 0) return false;
  return Boolean(r.recurring && !r.permanent && t - r.createdAt >= a);
}
function IKt(r) {
  let {
      onFire: t,
      isLoading: a,
      assistantMode: S = false,
      onFireTask: d,
      onMissed: l,
      dir: u,
      lockIdentity: x,
      getJitterConfig: fe,
      isKilled: ke,
      filter: H,
      getExtraTasks: z,
    } = r,
    R = u || x ? { dir: u, lockIdentity: x } : void 0,
    A = new Z(),
    U = u !== void 0 ? x : K(),
    J = [],
    ee = [],
    _ = new Map(),
    re = new Set(),
    D = new Set(),
    w = null,
    B = null,
    L = null,
    F = null,
    O = false,
    C = false,
    q = new Map();
  function me(o, h) {
    if (!ms(o)) return q.delete(o), true;
    if (h === void 0) return false;
    let k = Date.now(),
      T = q.get(o);
    if (!T || k - T.at >= 60000) (T = { at: k, token: $re(o) }), q.set(o, T);
    return T.token !== void 0 && T.token !== h;
  }
  function te(o) {
    if (o.createdBySessionId === void 0) return C;
    if (o.createdBySessionId === U) return true;
    return C && (o.createdByPid === void 0 || me(o.createdByPid, o.createdByProcStart));
  }
  async function V(o) {
    let h = await ZVe(u),
      k = z
        ? await z().catch((c) => {
            if (pc().claim("cron_extra_tasks_load_bad")) p("routine_register_trigger", "extra_tasks_load_failed");
            return n(`[ScheduledTasks] getExtraTasks failed: ${c}`), [];
          })
        : [];
    if (O) return;
    if (((J = h), (ee = k), !o)) return;
    let T = false;
    for (let c of h)
      if (U !== void 0 && c.createdBySessionId === U && c.createdByPid !== process.pid)
        (c.createdByPid = process.pid), (c.createdByProcStart = $6()), (T = true);
    if (T) await Hht(h, u).catch((c) => n(`[ScheduledTasks] failed to refresh task pids: ${c}`));
    let M = Date.now(),
      e = FXn(h, M).filter((c) => !c.recurring && !re.has(c.id) && (!H || H(c)) && te(c));
    if (e.length > 0) {
      for (let c of e) re.add(c.id), _.set(c.id, 1 / 0);
      if ((s("tengu_scheduled_task_missed", { count: e.length, taskIds: e.map((c) => c.id).join(",") }), l)) l(e);
      else t(Pcr(e));
      Fz(
        e.map((c) => c.id),
        u,
      ).catch((c) => n(`[ScheduledTasks] failed to remove missed tasks: ${c}`)),
        n(`[ScheduledTasks] surfaced ${e.length} missed one-shot task(s)`);
    }
  }
  function G() {
    if (ke?.()) return;
    if (a() && !S) return;
    let o = Date.now(),
      h = new Set(),
      k = [],
      T = fe?.() ?? kM;
    function M(e, c) {
      if (H && !H(e)) return;
      if ((h.add(e.id), D.has(e.id))) return;
      let P = _.get(e.id);
      if (P === void 0) {
        let I = e.recurring ? t5e(e.cron, e.lastFiredAt ?? e.createdAt, e.id, T) : xht(e.cron, e.createdAt, e.id, T);
        if (I === null) p("cron_task_fire", "next_fire_unresolvable", { recurring: e.recurring ?? false });
        (P = I ?? 1 / 0),
          _.set(e.id, P),
          n(`[ScheduledTasks] scheduled ${e.id} for ${P === 1 / 0 ? "never" : new Date(P).toISOString()}`);
      }
      if (o < P) return;
      if (
        (n(`[ScheduledTasks] firing ${e.id}${e.recurring ? " (recurring)" : ""}`),
        s("tengu_scheduled_task_fire", {
          recurring: e.recurring ?? false,
          taskId: e.id,
          autonomousLoopDefault: Ee.isLoopDefaultSentinel(e.prompt),
        }),
        d)
      )
        d(e);
      else t(e.prompt);
      y("cron_task_fire", { recurring: e.recurring ?? false, permanent: e.permanent ?? false });
      let ne = Icr(e, o, T.recurringMaxAgeMs);
      if (ne) {
        let I = Math.floor((o - e.createdAt) / 1000 / 60 / 60);
        n(`[ScheduledTasks] recurring task ${e.id} aged out (${I}h since creation), deleting after final fire`),
          s("tengu_scheduled_task_expired", { taskId: e.id, ageHours: I });
      }
      if (e.recurring && !ne) {
        let I = t5e(e.cron, o, e.id, T);
        if (I === null) g("cron_task_fire", "reschedule_unresolvable");
        let pe = I ?? 1 / 0;
        if ((_.set(e.id, pe), !c)) k.push(e.id);
      } else if (c) WO([e.id]), _.delete(e.id);
      else
        D.add(e.id),
          _.set(e.id, 1 / 0),
          Fz([e.id], u)
            .catch((I) => n(`[ScheduledTasks] failed to remove task ${e.id}: ${I}`))
            .finally(() => D.delete(e.id));
    }
    for (let e of J) if (te(e)) M(e, false);
    if (k.length > 0) {
      for (let e of k) D.add(e);
      NXn(k, o, u)
        .catch((e) => n(`[ScheduledTasks] failed to persist lastFiredAt: ${e}`))
        .finally(() => {
          for (let e of k) D.delete(e);
        });
    }
    if (u === void 0) for (let e of Ag().slice()) M(e, true);
    for (let e of ee) M(e, true);
    if (h.size === 0) {
      _.clear();
      return;
    }
    for (let e of _.keys()) if (!h.has(e)) _.delete(e);
  }
  async function W() {
    if (O) return;
    if (w) clearInterval(w), (w = null);
    let { default: o } = await import("/$bunfs/root/chunk-qr8kvksp.js");
    if (O) return;
    if (((C = await Y(A, R).catch(() => false)), O)) {
      if (C) (C = false), j(A, R);
      return;
    }
    if (!C)
      (L = setInterval(() => {
        Y(A, R)
          .then((k) => {
            if (O) {
              if (k) j(A, R);
              return;
            }
            if (k) {
              if (((C = true), L)) clearInterval(L), (L = null);
            }
          })
          .catch((k) => n(String(k), { level: "error" }));
      }, Oe)),
        L.unref?.();
    V(true).then(G);
    let h = BX(u);
    (F = o.watch(h, {
      persistent: false,
      ignoreInitial: true,
      awaitWriteFinish: { stabilityThreshold: Le },
      ignorePermissionErrors: true,
    })),
      F.on("error", (k) => n(`[ScheduledTasks] watcher error: ${k}`, { level: "warn" })),
      F.on("add", () => void V(false)),
      F.on("change", () => void V(false)),
      F.on("unlink", () => {
        if (!O) (J = []), _.clear();
      }),
      (B = setInterval(G, ue)),
      B.unref?.();
  }
  return {
    start() {
      if (((O = false), u !== void 0)) {
        n(`[ScheduledTasks] scheduler start() \u2014 dir=${u}, hasTasks=${X6t(u)}`), W();
        return;
      }
      if (
        (n(`[ScheduledTasks] scheduler start() \u2014 enabled=${jQe()}, hasTasks=${X6t()}`),
        !jQe() && (S || z !== void 0 || X6t()))
      )
        RU(true);
      if (jQe()) {
        W();
        return;
      }
      (w = setInterval(
        (o) => {
          if (jQe()) o();
        },
        ue,
        W,
      )),
        w.unref?.();
    },
    stop() {
      if (((O = true), w)) clearInterval(w), (w = null);
      if (B) clearInterval(B), (B = null);
      if (L) clearInterval(L), (L = null);
      if ((F?.close(), (F = null), C)) (C = false), j(A, R);
    },
    getNextFireTime() {
      let o = 1 / 0;
      for (let h of _.values()) if (h < o) o = h;
      return o === 1 / 0 ? null : o;
    },
    checkNow() {
      G();
    },
  };
}
function Pcr(r) {
  let t = r.length > 1,
    a = `The following one-shot scheduled task${t ? "s were" : " was"} missed while Claude was not running. ${t ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${t ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${t ? "each one" : "it"} now. Only execute if the user confirms.`,
    S = r.map(
      (d) => `${`[${ry(d.cron)}, created ${new Date(d.createdAt).toLocaleString()}]`}
${tvt(d.prompt)}`,
    );
  return `${a}

${S.join(`

`)}`;
}
export { Icr, IKt, Pcr };
