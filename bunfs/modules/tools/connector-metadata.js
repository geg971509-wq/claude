// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252

// Consolidated from chunk-50zmgkkj.js
var qen = "SearchMcpRegistry",
  Gen = "Search the MCP connector registry by keyword to discover connectors that might help complete the task.",
  zen = `Search the MCP connector registry by keyword. Call this when connecting to an MCP server might help complete the task \u2014 whether or not the user named a specific product.

Named-product examples:
- "check my Asana tasks" \u2192 keywords ["asana", "tasks", "todo"]
- "find issues in Jira" \u2192 keywords ["jira", "issues"]

Intent-based examples (no product named):
- "help me manage my tasks" \u2192 keywords ["tasks", "todo", "project management"]
- "pull up the design mockups" \u2192 keywords ["design", "figma", "mockup"]

Returns a ranked list with directoryUuid, name, description, sample tool names, installState (org-level), and enabledInChat (this session). Results include the org's custom connectors (ones the org configured that are not in the public directory) when they match the keywords. enabledInChat: false with installState: "connected" means the connector is authenticated but toggled off for this chat \u2014 its tools are not in your tool list; tell the user to enable it in this chat's connector settings. If a result looks relevant and is not installed, tell the user they could connect it via claude.ai; this tool does not itself connect anything.`;
export { qen, Gen, zen };

// Consolidated from chunk-srb2jmny.js
var Ven = "SuggestConnectors",
  Ken = "Resolve full connector payloads for directoryUuid values returned by SearchMcpRegistry.",
  Xen = `Resolve full connector payloads for a set of directoryUuid values returned by SearchMcpRegistry. Do NOT call this unless you already have directoryUuid values from a SearchMcpRegistry result \u2014 do not guess UUIDs or pass connector names.

Returns name, description, url, iconUrl, sample tool names, and whether the connector is already installed for the user's claude.ai org. installState reflects org-level auth, not whether tools are loaded this session \u2014 check ListConnectors' enabledInChat before claiming a connector is usable here. If a result looks relevant and is not installed, tell the user they could connect it via claude.ai; this tool does not itself connect anything.`;
export { Ven, Ken, Xen };

// Consolidated from chunk-80rs5a4q.js
var Yen = "ListConnectors",
  Jen = "List the MCP connectors installed for the user's claude.ai org, optionally filtered by keyword.",
  Qen = `List the MCP connectors installed for the user's claude.ai org. Call this when the user asks what connectors they have. Pass keywords to filter to a topic; omit to list all.

Returns name, description, whether each connector is connected at org level (connected may be null when the status check was unavailable \u2014 treat that as unknown, not disconnected), and enabledInChat (whether its tools are loaded in this session). enabledInChat: false with connected: true means the connector is authenticated but toggled off for this chat \u2014 tell the user to enable it in this chat's connector settings. To recommend connectors the user does NOT have yet, use SearchMcpRegistry \u2192 SuggestConnectors instead; this tool does not itself connect anything.`;
export { Yen, Jen, Qen };
