// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Iw } from "/$bunfs/root/chunk-f9h0bg01.js";
import "/$bunfs/root/chunk-qq1mdtb5.js";
import "/$bunfs/root/chunk-tx16jn0x.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { kt } from "/$bunfs/root/chunk-twwd9fep.js";
import "/$bunfs/root/chunk-gcks6mn0.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import "/$bunfs/root/chunk-eqdctte5.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import "/$bunfs/root/chunk-qm65zb83.js";
import "/$bunfs/root/chunk-vfy57cpd.js";
import "/$bunfs/root/chunk-4xj01xwv.js";
import "/$bunfs/root/chunk-ypdw393e.js";
import "/$bunfs/root/chunk-fv016jr6.js";
import "/$bunfs/root/chunk-qk7r0t2g.js";
import { k } from "/$bunfs/root/chunk-4ddxwr9r.js";
import "/$bunfs/root/chunk-wkxx62a2.js";
import "/$bunfs/root/chunk-ps6pc7xd.js";
import { V6 } from "/$bunfs/root/chunk-amem41jf.js";
import "/$bunfs/root/chunk-c76q2y0e.js";
import "/$bunfs/root/chunk-5rt2mvvk.js";
import "/$bunfs/root/chunk-cds31m36.js";
import { $0e, sZ } from "/$bunfs/root/chunk-fkesx6fy.js";
import { Mz, xXn, IXn } from "/$bunfs/root/chunk-vy15tdkc.js";
import "/$bunfs/root/chunk-8sbwe0jk.js";
import { i, v, H, f, oe } from "/$bunfs/root/chunk-saay52v7.js";
import "/$bunfs/root/chunk-7s7jqj2f.js";
import "/$bunfs/root/chunk-56sxk8k2.js";
import { Q } from "/$bunfs/root/chunk-wag5ye9w.js";
import "/$bunfs/root/chunk-a4q326ap.js";
var p = m(() =>
    f({
      proposals: H(
        f({
          name: i().min(1).describe("kebab-case skill slug"),
          kind: oe(["new", "improvement"]),
          target: i()
            .optional()
            .describe("Existing skill name to amend. Required when kind is 'improvement'; omit for 'new'."),
          description: i().describe("one line shown on the card"),
          evidence: H(i()).optional().describe("memory file paths where this procedure was observed"),
          skillMd: i().describe("complete SKILL.md draft (frontmatter + Trigger/Steps/Verification body)"),
        }).refine((t) => t.kind !== "improvement" || !!t.target, {
          message: "target is required when kind is 'improvement'",
          path: ["target"],
        }),
      )
        .min(1)
        .max(3),
    }),
  ),
  u = m(() => f({ proposalCount: v().describe("Number of proposals shown on the review card") })),
  C = kt({
    name: Mz,
    maxResultSizeChars: 1000,
    searchHint: "propose skills from recurring procedures for the user to review and save",
    get inputSchema() {
      return p();
    },
    get outputSchema() {
      return u();
    },
    isEnabled() {
      if (!V6() && !a.CLAUDE_CODE_SKILL_PROPOSALS) return false;
      if (!a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE || a.CLAUDE_CODE_ENVIRONMENT_KIND !== void 0) return false;
      if (a.CLAUDE_CODE_SKILL_PROPOSALS) return true;
      return a.CLAUDE_CODE_SYNC_SKILLS && !Iw();
    },
    isConcurrencySafe() {
      return true;
    },
    isReadOnly() {
      return true;
    },
    toAutoClassifierInput(t) {
      return (t.proposals ?? [])
        .map((e) =>
          e.kind === "improvement" && e.target
            ? `${e.name ?? ""} (improves ${e.target}): ${e.description ?? ""}`
            : `${e.name ?? ""}: ${e.description ?? ""}`,
        )
        .join(`
`);
    },
    async description() {
      return xXn;
    },
    async prompt() {
      return IXn;
    },
    renderToolUseMessage(t) {
      let e = (t.proposals ?? []).filter((r) => r?.name).slice(0, 3);
      if (e.length === 0) return "";
      let o = e.map((r) => {
        let n = sZ($0e(r.name ?? ""), 80);
        return r.kind === "improvement" && r.target ? `${n} (improves ${sZ($0e(r.target), 80)})` : n;
      });
      return `Propose ${e.length} ${k(e.length, "skill")}: ${o.join(", ")}`;
    },
    async call({ proposals: t }, e) {
      return (
        s("tengu_propose_skills", {
          proposal_count: t.length,
          improvement_count: Q(t, (o) => o.kind === "improvement"),
        }),
        { data: { proposalCount: t.length } }
      );
    },
    mapToolResultToToolResultBlockParam({ proposalCount: t }, e) {
      return {
        tool_use_id: e,
        type: "tool_result",
        content: `Shown ${t} skill proposal(s) to the user for review. Continue with the next phase; do not wait for them to respond.`,
      };
    },
  });
export { C as ProposeSkillsTool };
