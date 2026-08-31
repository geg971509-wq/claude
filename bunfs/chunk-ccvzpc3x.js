// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { po, Th, et } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ce } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { dr, fw, vc, PH } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { nb } from "/$bunfs/root/chunk-0g6cj4h1.js";
import { Wx, Oct, jW, Pee, q0, dD, Bee, $b, ZW, BFt, KG, xe, OS } from "/$bunfs/root/chunk-zze8764r.js";
import { CM, F2 } from "/$bunfs/root/chunk-50g10fz0.js";
import { he } from "/$bunfs/root/chunk-h605j25g.js";
import { Fs } from "/$bunfs/root/chunk-mpg6r2j0.js";
async function v2e(t, e, a, m, l) {
  if (e.getAppState().endedByModel) return p("subagent_launch", "subagent_fork_ended_by_model"), null;
  if (Fs()) return p("subagent_launch", "subagent_fork_coordinator_mode"), null;
  let o = e.renderedSystemPrompt;
  if (!o) {
    if (((o = await b(e)), !o)) return p("subagent_launch", "subagent_fork_prompt_missing"), null;
  }
  let C = {
      kind: "fork",
      log: (() => {
        let c = e.agentId ?? F2,
          i = e.toolState.get(CM).get(c)?.replayLog;
        if (i) return [...i];
        if (e.replHydration?.kind === "resume") return BFt(e.messages);
        return [];
      })(),
    },
    r = e.agentLifecycle.allocateName(fdr(t)),
    g = t.replace(/\s+/g, " ").trim(),
    d = g.length > 50 ? ce(g, 49) + "\u2026" : g,
    n = Th(r),
    { taskRegistry: s } = e,
    T = Date.now(),
    u = vc(e.agentContext) + 1,
    S = q0(Wx.model, e.options.mainLoopModel, "inherit", he(e).mode),
    f = KG({
      agentId: n,
      ownerAgentId: et(),
      spawnDepth: u,
      description: d,
      prompt: t,
      model: S,
      selectedAgent: Wx,
      taskRegistry: s,
      toolUseId: e.toolUseId,
      sessionScratch: e.session.sessionScratch,
    }),
    k = f.abortController;
  e.agentLifecycle.registerName(r, po(n)),
    dr().agentSpawned.emit({ agentId: n, agentType: Wx.agentType, parentAgentId: e.agentId, taskRegistry: s });
  let I = {
      prompt: t,
      resolvedAgentModel: S,
      isBuiltInAgent: !0,
      startTime: T,
      agentType: Wx.agentType,
      isAsync: !0,
      agentDepth: u,
      source: Wx.source,
    },
    A = {
      agentId: n,
      parentAgentId: e.agentId,
      depth: u,
      parentSessionId: nb(),
      agentType: "subagent",
      subagentName: Wx.agentType,
      displayName: r,
      isAsync: !0,
      isBackgroundAgent: !0,
      isBuiltIn: !0,
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...PH(e.agentContext),
    },
    P = s.takeConcurrencySlot();
  return (
    fw(A, () =>
      ZW({
        taskId: f.agentId,
        abortController: k,
        makeStream: (c, i) =>
          $b({
            onQueryProgress: i,
            onModelRestricted: Bee(Wx.agentType, e.appendSystemMessage),
            agentDefinition: Wx,
            promptMessages: [...(m ?? []), xe({ content: [{ type: "text", text: Oct(t) }] })],
            toolUseContext: e,
            canUseTool: a,
            isAsync: !0,
            querySource: jW(Wx.agentType, !0),
            forkOrigin: l,
            spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill,
            spawnedByForkedSkill: e.options.spawnedByForkedSkill,
            model: "inherit",
            override: {
              systemPrompt: o,
              agentId: po(f.agentId),
              agentContext: A,
              abortController: k,
              replHydration: C,
            },
            availableTools: e.options.tools,
            forkContextMessages: e.messages,
            useExactTools: !0,
            onCacheSafeParams: c,
            description: d,
            name: r,
          }),
        metadata: I,
        description: d,
        toolUseContext: e,
        taskRegistry: s,
        agentIdForCleanup: n,
        enableSummarization: !0,
        getWorktreeResult: async () => ({}),
        onRunSettled: P,
      }),
    ),
    y("subagent_launch"),
    { agentId: n, name: r }
  );
}
async function b(t) {
  let e = t.getAppState(),
    a = e.agent ? e.agentDefinitions.activeAgents.find((o) => o.agentType === e.agent) : void 0,
    m = Array.from(he(t).additionalWorkingDirectories.keys()),
    l = await OS(t.options.tools, t.options.mainLoopModel, m);
  return dD({
    mainThreadAgentDefinition: a,
    toolUseContext: t,
    customSystemPrompt: t.options.customSystemPrompt,
    defaultSystemPrompt: l,
    appendSystemPrompt: t.options.appendSystemPrompt,
    skillsPersistencePrompt: Pee(t.options.tools),
  });
}
function fdr(t) {
  return (
    t
      .trim()
      .split(/\s+/)
      .slice(0, 3)
      .join("-")
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 24) || "fork"
  );
}
export { v2e, fdr };
