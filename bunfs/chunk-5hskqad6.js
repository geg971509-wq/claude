// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { ce } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { b, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { ys } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Wt } from "/$bunfs/root/chunk-qk6zade1.js";
import { gr } from "/$bunfs/root/chunk-dck778n3.js";
import { Sl, bd, lhn, FTe } from "/$bunfs/root/chunk-6a5ggyw4.js";
import { ap, Wa, Z1, Du, V0, qA, gln } from "/$bunfs/root/chunk-zze8764r.js";
import { Xs, Md } from "/$bunfs/root/chunk-3qvtfvqg.js";
import { HVe } from "/$bunfs/root/chunk-2c0fc0a1.js";
var M = 500;
function _tn({
  taskId: e,
  script: o,
  scriptPath: t,
  args: r,
  summary: s,
  workflowName: i,
  title: a,
  phases: f,
  defaultModel: m,
  workflowRunId: T,
  ownerAgentId: l,
  spawnerAgentId: g,
  taskRegistry: k,
  toolUseId: w,
  startTime: c,
}) {
  FTe(e);
  let _ = gr(0),
    S = {
      ...Md(e, "local_workflow", s ?? "Dynamic workflow", w),
      ...(c !== void 0 && { startTime: c }),
      type: "local_workflow",
      status: "running",
      script: o,
      scriptPath: t,
      args: r,
      prompt: o,
      summary: s,
      workflowName: i,
      title: a,
      phases: f,
      defaultModel: m,
      workflowRunId: T,
      ownerAgentId: l,
      spawnerAgentId: g,
      workflowProgress: [],
      progressVersion: 0,
      agentCount: 0,
      totalTokens: 0,
      totalToolCalls: 0,
      logs: [],
      abortController: _,
      agentControllers: new Map(),
    };
  return k.register(S), S;
}
function Cit(e) {
  return e?.type === "local_workflow";
}
function ytn(e, o) {
  let t = Md(e.taskId, "local_workflow", e.description, void 0),
    r = {
      ...t,
      startTime: e.startTime ?? t.startTime,
      type: "local_workflow",
      status: "paused",
      script: "",
      scriptPath: e.scriptPath,
      prompt: "",
      workflowRunId: e.workflowRunId,
      workflowProgress: [],
      progressVersion: 0,
      agentCount: 0,
      totalTokens: 0,
      totalToolCalls: 0,
      logs: [],
      notified: !0,
    };
  o.register(r);
}
function Stn(e, o, t) {
  if (o.length === 0) return;
  t.update(e, (r) => {
    if (r.status !== "running") return r;
    let s = [...r.workflowProgress],
      i = new Map();
    for (let l = 0; l < s.length; l++) {
      let g = s[l];
      if (g.type === "workflow_agent" || g.type === "workflow_phase") i.set(`${g.type}:${g.index}`, l);
    }
    let a = r.agentCount,
      f = !1;
    for (let l of o)
      if (l.type === "workflow_agent" || l.type === "workflow_phase") {
        let g = `${l.type}:${l.index}`,
          k = i.get(g);
        if (k !== void 0) s[k] = l;
        else i.set(g, s.length), s.push(l);
        if (l.type === "workflow_agent" && l.state === "start") a = Math.max(a, l.index);
      } else s.push(l), (f = !0);
    if (f && s.length > M * 2) {
      let l = s.length - M,
        g = [];
      for (let k = 0; k < s.length; k++) {
        let w = s[k];
        if (l > 0 && w.type === "workflow_log") {
          l--;
          continue;
        }
        g.push(w);
      }
      s = g;
    }
    let m = 0,
      T = 0;
    for (let l of s)
      if (l.type === "workflow_agent") {
        if (l.tokens) m += l.tokens;
        if (l.toolCalls) T += l.toolCalls;
      }
    return {
      ...r,
      workflowProgress: s,
      progressVersion: r.progressVersion + o.length,
      agentCount: a,
      totalTokens: m,
      totalToolCalls: T,
    };
  });
}
function W(e, o, t, r) {
  let s = null;
  return (
    o.update(e, (i) => {
      if (i.status !== "running") return i;
      (s = i), i.abortController?.abort();
      let a = Date.now(),
        f = r.terminal?.summary === void 0 ? r.terminal : { ...r.terminal, summary: ap(r.terminal.summary) };
      return {
        ...i,
        ...r,
        ...(r.terminal && { terminal: f }),
        ...(r.error !== void 0 && { error: ap(r.error) }),
        status: t,
        endTime: a,
        ...(Xs(t) && { evictAfter: a + V0 }),
        abortController: void 0,
        agentControllers: void 0,
      };
    }),
    s
  );
}
function btn(e, o, t, r, s, i) {
  let a = W(e, s, "completed", { result: o, agentCount: t, logs: r, terminal: i });
  if (a)
    lhn(
      a.outputFile,
      b(
        {
          summary: a.summary,
          agentCount: t,
          logs: r,
          result: o,
          workflowProgress: a.workflowProgress.filter((f) => f.type !== "workflow_log"),
          totalTokens: a.totalTokens,
          totalToolCalls: a.totalToolCalls,
        },
        null,
        2,
      ),
    ).catch((f) => n(`Failed to write workflow output for ${e}: ${f instanceof Error ? f.message : f}`)),
      y("task_local_workflow");
}
function lPt(e, o, t, r, s, i) {
  let a = W(e, s, "failed", { error: o, agentCount: t, logs: r, terminal: i });
  if ((bd(e), a)) p("task_local_workflow", "task_local_workflow_failed");
}
function _Z(e, o) {
  let t = o.get(e);
  if (t?.type === "local_workflow" && t.v2Run) return x1(e, o);
  let r = W(e, o, "paused", { notified: !0 });
  if (r) qA(r.ownerAgentId, `workflow:${e}`, o);
  return r !== null;
}
function cPt(e) {
  let o = e.args !== void 0 ? `, args: ${b(e.args)}` : "";
  return `Resume the paused workflow by calling: Workflow({scriptPath: '${e.scriptPath}', resumeFromRunId: '${e.workflowRunId}'${o}}) \u2014 completed agents return cached results.`;
}
function x1(e, o) {
  let t = W(e, o, "killed", { notified: !0 });
  if (t)
    t.v2Run?.kill(),
      qA(t.ownerAgentId, `workflow:${e}`, o),
      bd(e),
      ys(e, "stopped", { toolUseId: t.toolUseId, summary: t.description });
  return t !== null;
}
function F(e, o, t, r) {
  let s = !1;
  if (
    (r.update(e, (i) => {
      if (i.status !== "running") return i;
      let a = i.agentControllers?.get(o);
      if (a && !a.signal.aborted) a.abort(new DOMException(t, "AbortError")), (s = !0);
      return i;
    }),
    s)
  )
    y(t === "user-skip" ? "task_local_workflow_skip_agent" : "task_local_workflow_retry_agent");
  return s;
}
function tHe(e, o, t) {
  return F(e, o, "user-skip", t);
}
function nHe(e, o, t) {
  return F(e, o, "user-retry", t);
}
var B = /^(\[\s*\]|\{\s*\}|\{\s*"[^"]+"\s*:\s*\[\s*\]\s*\})$/,
  N = 4 * HVe;
function uPt({
  taskId: e,
  summary: o,
  status: t,
  result: r,
  failures: s,
  error: i,
  agentCount: a,
  totalTokens: f,
  totalToolCalls: m,
  durationMs: T,
  taskRegistry: l,
  toolUseId: g,
  transcriptDir: k,
  scriptPath: w,
  workflowRunId: c,
  args: _,
  workflowProgress: S,
}) {
  let { claimed: v, task: O } = Z1(e, l),
    j = gln({ ownerAgentId: O?.ownerAgentId, keepaliveReason: `workflow:${e}`, delivering: v, taskRegistry: l });
  if (!v) return;
  let A = ap(Wt(o ?? "Dynamic workflow")),
    U = ap(
      t === "completed"
        ? `Dynamic workflow "${A}" completed`
        : t === "failed"
          ? `Dynamic workflow "${A}" failed: ${i ? ap(Wt(i)) : "Unknown error"}`
          : `Dynamic workflow "${A}" was stopped`,
      3 * HVe,
    ),
    C = "";
  if (t === "failed" || t === "killed") {
    let u = [];
    if (w && c) {
      let d = _ !== void 0 ? `, args: ${b(_)}` : "";
      u.push(`To resume after editing the script, call: Workflow({scriptPath: '${w}', resumeFromRunId: '${c}'${d}})`);
    }
    if (k) u.push(`Agent transcripts: ${k}`);
    if (u.length > 0)
      C = `
<recovery>${Wt(
        u.join(`
`),
      )}</recovery>`;
  }
  let L = "";
  if (t === "completed" && k) {
    let u = [
      `Per-agent results: ${k}/journal.jsonl \u2014 one {"type":"result",...} line per completed agent with its full return value.`,
      "If the result above is empty or unexpected, Read this file BEFORE diagnosing \u2014 do not assume agents returned non-empty results.",
    ];
    if (w && c) {
      let d = _ !== void 0 ? `, args: ${b(_)}` : "";
      u.push(
        `To re-run with edited post-processing: Workflow({scriptPath: '${w}', resumeFromRunId: '${c}'${d}}) \u2014 agents whose (prompt, opts) are unchanged replay from cache.`,
      );
    }
    L = `
<diagnostics>${Wt(
      u.join(`
`),
    )}</diagnostics>`;
  }
  let x = Sl(e),
    P = "";
  if (t === "completed" && r !== void 0) {
    let u = Wt(b(r)),
      d = 8000;
    if (u.length > 8000) {
      let h = ce(u, 8000);
      P = `
<result>${h}
... (truncated ${u.length - h.length} chars, full result in ${x})</result>`;
    } else
      P = `
<result>${u}</result>`;
  }
  let V = s?.length
      ? `
<failures>${ap(
          Wt(
            s.join(`
`),
          ),
          N,
        )}</failures>`
      : "",
    E = "";
  if (S) {
    let u = 0,
      d = 0,
      h = 0,
      I = 0;
    for (let R of S) {
      if (R.type !== "workflow_agent") continue;
      if (R.state === "done") {
        if ((u++, R.resultPreview === void 0 || B.test(R.resultPreview))) I++;
      } else if (R.state === "error")
        if (R.skipped) h++;
        else d++;
    }
    E = `<agents_done>${u}</agents_done><agents_error>${d}</agents_error><agents_skipped>${h}</agents_skipped><agents_empty_result>${I}</agents_empty_result>`;
  }
  let X = `
<usage><agent_count>${a}</agent_count>${E}<subagent_tokens>${f}</subagent_tokens><tool_uses>${m}</tool_uses><duration_ms>${T}</duration_ms></usage>`;
  Wa({
    value: Du({ taskId: e, toolUseId: g, outputFile: x, status: t, summary: U, body: `${C}${P}${L}${V}${X}` }),
    mode: "task-notification",
    skipAttachments: !0,
    agentId: j,
    priority: "next",
    taskId: e,
  });
}
export { _tn, Cit, ytn, Stn, btn, lPt, _Z, cPt, x1, tHe, nHe, uPt };
