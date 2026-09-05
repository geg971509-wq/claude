// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { k } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { ae } from "/$bunfs/root/chunk-386w1sy8.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { mo } from "/$bunfs/root/chunk-4sw5yxwb.js";
import { Fp } from "/$bunfs/root/chunk-6k63g5t6.js";
import { h1, ov, D2e, $Q, Gge, irt } from "/$bunfs/root/chunk-bhaprsyw.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
function f(r) {
  if (r.length === 0) return ae.dim("  (no skills loaded)");
  let { cells: s, widths: e } = D2e(r),
    o = ae.dim(
      `  ${h1("skill", e.name)}  ${h1("source", e.source)}  ${ov("context", e.context)}  ${ov("7d tokens", e.week)}  ${ov("uses", e.uses + 1)}  last used`,
    ),
    a = r
      .map((i, c) => {
        let u = s[c],
          d = `  ${h1(i.name, e.name)}  ${ae.dim(h1(i.source, e.source))}  ${ov(u.context, e.context)}  ${ov(u.week, e.week)}  ${ov(String(i.usageCount), e.uses)}\xD7  ${u.lastUsed}`;
        return i.usageCount === 0 ? ae.yellow(d) : d;
      })
      .join(`
`);
  return `${o}
${a}`;
}
async function v(r) {
  let {
      rows: s,
      unusedOwned: e,
      unusedSynced: o,
      unusedFromPlugins: a,
      unusedFromMcp: i,
      unusedMcpServers: c,
      disusedPlugins: u,
      weekTokensNote: d,
    } = await irt(Gge(r)),
    t = [];
  if ((t.push(ae.bold("Skills loaded this session")), t.push(""), t.push(f(s)), s.length > 0))
    t.push(""),
      t.push(ae.dim("  context = this skill's one-line listing in the system prompt, included every turn")),
      t.push(ae.dim("  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)")),
      t.push(
        ae.dim(
          d === null
            ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine"
            : `  7d tokens: ${d}`,
        ),
      );
  if ((t.push(""), e.length > 0))
    t.push(
      ae.yellow(
        `${e.length} ${k(e.length, "skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`,
      ),
    );
  if (o.length > 0)
    t.push(
      ae.yellow(
        `${o.length} ${k(o.length, "skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${o.length === 1 ? "it" : "them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`,
      ),
    );
  if (a.length > 0) {
    let n = te(a.map((m) => m.source));
    t.push(
      ae.yellow(
        `${a.length} plugin ${k(a.length, "skill")} loaded but never invoked, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${n.length === 1 ? "the plugin" : "those plugins"} in /plugin.`,
      ),
    );
  }
  if (i.length > 0) {
    let n = c.length > 0 ? `, from ${c.join(", ")}` : "",
      m = c.length <= 1;
    t.push(
      ae.yellow(
        `${i.length} MCP ${k(i.length, "skill")} loaded but never invoked${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${m ? "that server" : "those servers"} off in /mcp also removes ${m ? "its" : "their"} tools.`,
      ),
    );
  }
  if (s.length > 0 && s.every((n) => n.usageCount > 0))
    t.push(ae.green("All loaded skills have been used at least once."));
  if (u.length > 0) {
    t.push(""), t.push(ae.bold("Plugins not used recently")), t.push("");
    for (let n of u) t.push(`  ${ae.yellow(Fp(n.name))}  ${ae.dim(`last used ${n.daysSinceLastUse} days ago`)}`);
    t.push(""), t.push(ae.dim("  Manage these in /plugin"));
  }
  if (s.length === 0) g("cli_skill_doctor", "no_user_skills");
  else if (d !== null) g("cli_skill_doctor", "scan_policy_denied");
  else y("cli_skill_doctor");
  return t.join(`
`);
}
var rJt = async (r, s) => {
  if (mo(s.session)) return { type: "text", value: "Skill usage reports are not available on this connection." };
  try {
    let e = await v(s);
    if (mo(s.session)) return { type: "text", value: "Skill usage reports are not available on this connection." };
    return { type: "text", value: e };
  } catch (e) {
    let o = e instanceof $Q ? e.cause : e;
    if ((h(o), p("cli_skill_doctor", e instanceof $Q ? e.featureErrorCode : "render_failed"), mo(s.session)))
      return { type: "text", value: "Couldn't compute skill usage." };
    return { type: "text", value: `Couldn't compute skill usage. Run with --debug for details. (${l(o)})` };
  }
};
export { rJt };
