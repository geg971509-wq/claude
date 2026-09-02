// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
const CLAUDE_CODE_VERSION = "2.1.252";

function getClaudeCodeUserAgent() {
  return `claude-code/${CLAUDE_CODE_VERSION}`;
}

function getEntrypointEventSource() {
  switch (process.env.CLAUDE_CODE_ENTRYPOINT) {
    case "claude-vscode":
      return "claude_code_vscode";
    case "remote":
    case "remote_baku":
    case "remote_cowork":
    case "remote_desktop":
    case "remote_mobile":
      return "claude_code_remote";
    case "claude-in-teams":
      return "claude_code_remote";
    case "sdk-cli":
    case "sdk-ts":
    case "sdk-py":
      return "claude_code_sdk";
    case "mcp":
      return "claude_code_mcp";
    case "claude-code-github-action":
      return "claude_code_github_action";
    case "local-agent":
      return "claude_code_local_agent";
    case "claude_in_slack":
      return "claude_in_slack";
    case "claude-in-slack":
      return "claude-in-slack";
    case "cli":
    default:
      return "claude_code_cli";
  }
}

function formatAiAgentIdentifier(component) {
  return `claude-code_${CLAUDE_CODE_VERSION.replace(/\./g, "-")}_${component}`;
}

function initializeAiAgentEnvironment() {
  if (
    !process.env.AI_AGENT ||
    process.env.AI_AGENT.startsWith("claude-code_") ||
    process.env.AI_AGENT.startsWith("claude-code/")
  )
    process.env.AI_AGENT = formatAiAgentIdentifier("harness");
}

export {
  getClaudeCodeUserAgent,
  getEntrypointEventSource,
  formatAiAgentIdentifier,
  initializeAiAgentEnvironment,
  getClaudeCodeUserAgent as Ka,
  getEntrypointEventSource as Cg,
  formatAiAgentIdentifier as Kxn,
  initializeAiAgentEnvironment as JCt,
};
