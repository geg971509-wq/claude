// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Xm } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Co, Dr } from "/$bunfs/root/chunk-gcks6mn0.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
var t = {
    claudeMd: true,
    skills: true,
    workflows: false,
    plugins: true,
    pluginMonitors: false,
    themes: false,
    hljsLanguages: true,
    hooks: true,
    statusLine: false,
    fileSuggestion: false,
    mcpAutoDiscovered: false,
    mcpClaudeAi: false,
    mcpAgentFrontmatter: true,
    agents: true,
    outputStyles: false,
    lspServers: true,
    keybindings: false,
  },
  l = {
    claudeMd: false,
    skills: false,
    workflows: false,
    plugins: false,
    pluginMonitors: false,
    themes: false,
    hljsLanguages: false,
    hooks: true,
    statusLine: true,
    fileSuggestion: true,
    mcpAutoDiscovered: false,
    mcpClaudeAi: false,
    mcpAgentFrontmatter: false,
    agents: false,
    outputStyles: false,
    lspServers: false,
    keybindings: false,
  };
function ho(e, s) {
  if (Dr() && !l[e]) return true;
  if (Co() && !s?.explicitlyRequested) return t[e];
  return false;
}
function gH() {
  return Boolean(a.CLAUDE_CODE_DISABLE_CLAUDE_MDS || ho("claudeMd", { explicitlyRequested: Xm().length > 0 }));
}
export { ho, gH };
