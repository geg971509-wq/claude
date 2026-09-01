// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { a } from "/$bunfs/root/chunk-fec4384a.js";

// Consolidated from chunk-gdhqsw8a.js
function ef() {
  return a.CLAUDE_CODE_REMOTE === true && a.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}
function Fht() {
  return a.CLAUDE_CODE_REMOTE === true && a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc";
}
function zXn() {
  return a.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge";
}
export { ef, Fht, zXn };

// Consolidated from chunk-rq65wazg.js
function $c() {
  let n = a.MCP_TIMEOUT;
  return n && n > 0 ? Math.min(n, 2147483647) : 30000;
}
function bJn() {
  let n = a.MCP_CONNECT_TIMEOUT_MS;
  return n && n > 0 ? Math.min(n, 2147483647) : 5000;
}
export { $c, bJn };

// Consolidated from chunk-wktm3bts.js
var $ke = "CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";
function Znt() {
  let { columns: r, rows: e } = process.stdout;
  if (!r || !e) return {};
  return { [$ke]: `${r}x${e}` };
}
function TNn() {
  let r = a.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;
  if ((delete process.env[$ke], r === void 0 || !process.stdout.isTTY)) return;
  let e = /^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(r);
  if (!e) return;
  (process.stdout.columns ||= Number(e[1])), (process.stdout.rows ||= Number(e[2]));
}
export { $ke, Znt, TNn };

// Consolidated from chunk-d7066vf7.js
function frt(_, E) {
  if (_ === "ANTHROPIC_DEFAULT_SONNET_MODEL") a.set("CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT", E);
  else if (_ === "ANTHROPIC_DEFAULT_OPUS_MODEL") a.set("CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT", E);
}
function Rq(_) {
  let E = _ === "sonnet" ? a.ANTHROPIC_DEFAULT_SONNET_MODEL : a.ANTHROPIC_DEFAULT_OPUS_MODEL,
    O = _ === "sonnet" ? a.CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT : a.CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT;
  return E !== void 0 && E === O;
}
export { frt, Rq };

// Consolidated from chunk-wnc75h2x.js
function uv() {
  if (a.CLAUDE_CODE_KB_COHESION_FIXES) return true;
  return false;
}
export { uv };
