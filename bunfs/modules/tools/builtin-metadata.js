// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252

// Consolidated from chunk-p8c745fb.js
var Xr = "SendMessage",
  uTe = 200,
  Qmn = ["type", "recipient", "content", "request_id", "approve"];
export { Xr, uTe, Qmn };

// Consolidated from chunk-8spbv9dy.js
var ny = "TaskStop",
  OXn = `
- Stops a running background task by its ID
- Takes a task_id parameter identifying the task to stop
- To stop an agent-team teammate, pass its agent ID ("name@team") or bare teammate name as task_id
- To stop a background agent spawned with a name, pass that name as task_id
- Returns a success or failure status
- Use this tool when you need to terminate a long-running task
`;
var hT = "TaskList";
export { ny, OXn, hT };

// Consolidated from chunk-06p73s1x.js
var yt = "Agent",
  g6 = "fork",
  oZn = "agent:builtin:fork",
  xf = "Task",
  XWt = 1e5,
  YWt = new Set(["Explore", "Plan"]),
  cEe = "NOTE: this agent stopped at its ",
  JWt = "subagent_type is required: the general-purpose agent is not available in this session";
export { yt, g6, oZn, xf, XWt, YWt, cEe, JWt };

// Consolidated from chunk-cgy998p5.js
var zS = "EndConversation",
  B_n = "tengu_umber_kestrel";
export { zS, B_n };

// Consolidated from chunk-h6vcz0m0.js
var Wh = "ExitPlanMode",
  Su = "ExitPlanMode";
export { Wh, Su };

// Consolidated from chunk-cyeg83af.js
var xk = "PushNotification";
export { xk };

// Consolidated from chunk-wm93h3q4.js
var Qr = "WebFetch",
  wjt = "Fetch",
  TTe = "allow_web_fetch";
export { Qr, wjt, TTe };

// Consolidated from chunk-gmgmb4mg.js
var eu = "Workflow";
export { eu };

// Consolidated from chunk-4cvqk0nv.js
var ma = "Monitor";
export { ma };
