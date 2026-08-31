// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { ce } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { b } from "/$bunfs/root/chunk-fv016jr6.js";
import { FY } from "/$bunfs/root/chunk-4r03fm98.js";
import { dm, W_t } from "/$bunfs/root/chunk-2n1hsggr.js";
import { t$ } from "/$bunfs/root/chunk-cds31m36.js";
import { Ld } from "/$bunfs/root/chunk-zze8764r.js";
import { vTe, t_t } from "/$bunfs/root/chunk-dd55s64p.js";
import { i8, rit, oit, Sje } from "/$bunfs/root/chunk-nm7kp5hv.js";
import { tit } from "/$bunfs/root/chunk-rs4mk5cn.js";
import { Tf } from "/$bunfs/root/chunk-k2an0hy6.js";
import { F0 } from "/$bunfs/root/chunk-nmpqha26.js";
import { Oh } from "/$bunfs/root/chunk-3qvtfvqg.js";
import { randomUUID as A } from "crypto";
var a = 1e5,
  _ = 4000;
function v(t) {
  let o = t
    .replace(/[\r\n\v\f\x1c\x1d\x1e\u0085\u2028\u2029]+/g, " ")
    .replaceAll("remote-workflow:", "remote-workflow;");
  if (o.length > _) o = `${ce(o, _)}\u2026[truncated]`;
  return o;
}
function C2e(t, o) {
  return `remote-workflow: error[${t}]: ${v(o)}`;
}
function u(t) {
  let o = b(t);
  return o === void 0
    ? void 0
    : o.replaceAll("\x85", "\\u0085").replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029");
}
function Uke(t) {
  if (vTe()) return "dynamic workflows are disabled for this session (managed settings `disableWorkflows`).";
  if (t?.serverAuthoredCarrier && FY()) return null;
  if (!t_t()) return "dynamic workflows are disabled for this session (org policy `allow_workflows`).";
  return null;
}
async function trt({ script: t, args: o, telemetrySource: d, serverAuthoredCarrier: C = !1, context: p }) {
  let n = (l, e) => ({ ok: !1, layer: l, line: C2e(l, e) }),
    g = Uke({ serverAuthoredCarrier: C });
  if (g) return n("policy-gate", g);
  if (t.length > dm) return n("script-too-large", `workflow script exceeds ${dm} bytes.`);
  if (!t$(t)) return n("control-chars", "workflow script contains disallowed control characters.");
  let i = Tf(t);
  if ("error" in i) return n("meta-parse", `invalid workflow script: ${i.error}`);
  if (tit(i.scriptBody))
    return n(
      "nondeterminism",
      "workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.",
    );
  let w = i8(i.scriptBody);
  if (!w.ok) return n("compile", `workflow script compile failed: ${w.error}`);
  let f = `wf_${A().slice(0, 12)}`,
    S = Oh("local_workflow"),
    W = W_t(i.meta.name, f, t, p.storageV5),
    y = rit(i.meta.name, void 0, !1),
    x = oit(i.meta.description, void 0, !1);
  s("tengu_workflow_launched", {
    invocation_mode: c(d),
    workflow_source: c(d),
    phase_count: i.meta.phases?.length ?? 0,
    launched_from_subagent: !1,
    has_args: o != null,
    is_resume: !1,
    script_size_chars: t.length,
  });
  let r = await new Promise((l) => {
    Sje({
      taskId: S,
      workflowRunId: f,
      script: t,
      scriptPath: W,
      args: o,
      meta: i.meta,
      vmScript: w.vmScript,
      toolUseContext: p,
      canUseTool: p.canUseTool ?? Ld,
      toolUseId: void 0,
      transcriptDir: F0(f),
      telemetry: { source: d, name: y, description: x, scriptIsVerbatimBuiltIn: !1 },
      isResume: !1,
      onSettled: l,
      suppressCompletionNotification: !0,
    });
  });
  switch (r.status) {
    case "completed": {
      let l = {
          status: "completed",
          workflowName: i.meta.name,
          runId: f,
          agentCount: r.agentCount,
          durationMs: r.durationMs,
          failures: r.failures,
          result: r.result,
        },
        e = u(l);
      if (e === void 0 || e.length > a) {
        let h = e === void 0 ? "not serializable" : `${e.length} chars exceeds ${a}`,
          m = r.failures.slice(0, 20).map((k) => (k.length > 500 ? `${ce(k, 500)}\u2026[truncated]` : k));
        if (r.failures.length > m.length) m.push(`\u2026and ${r.failures.length - m.length} more failures omitted`);
        if (((e = u({ ...l, failures: m })), e === void 0 || e.length > a))
          e = u({
            ...l,
            failures: [`<${r.failures.length} failures omitted: diagnostics never outrank the result payload>`],
          });
        if (e === void 0 || e.length > a) e = u({ ...l, failures: m, result: `<result omitted: ${h}>` });
        if (e === void 0 || e.length > a)
          e =
            u({
              status: "completed",
              workflowName: ce(String(i.meta.name), 200),
              runId: f,
              agentCount: r.agentCount,
              durationMs: r.durationMs,
              failures: [`<${r.failures.length} failures omitted: fallback exceeded ${a}>`],
              result: `<result omitted: ${h}>`,
            }) ?? '{"status":"completed"}';
      }
      return { ok: !0, line: `remote-workflow: ${e}`, workflowName: i.meta.name };
    }
    case "failed":
      return n("workflow-failed", `workflow failed after ${r.durationMs}ms (${r.agentCount} agents): ${r.error}`);
    case "killed":
      return n("killed", "workflow was aborted before completion.");
    case "adopted":
    case "unknown":
      return n("unexpected-state", `workflow ended in unexpected state '${r.status}'.`);
  }
}
export { C2e, Uke, trt };
