// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import{on,jk}from"/$bunfs/root/chunk-twwd9fep.js";import{TR,a}from"/$bunfs/root/chunk-fec4384a.js";import{NAe}from"/$bunfs/root/chunk-amem41jf.js";import{Qe,_t,mc,Bt,e0,I,Nnr}from"/$bunfs/root/chunk-8tgj5dp2.js";import{Kl,td}from"/$bunfs/root/chunk-hebj76vj.js";import{$s,ti}from"/$bunfs/root/chunk-a2an01ph.js";import{pa}from"/$bunfs/root/chunk-h4g4vfcb.js";import{xk}from"/$bunfs/root/chunk-cyeg83af.js";import{PQn}from"/$bunfs/root/chunk-a7wreksn.js";import{yt}from"/$bunfs/root/chunk-06p73s1x.js";var Xo="Grep";function Pmn(e){if(td(e))return`Content search built on ripgrep. Prefer this over \`grep\`/\`rg\` via ${Qe} \u2014 results integrate with the permission UI and file links.

- Full regex syntax (e.g. "log.*Error", "function\\s+\\w+"). Ripgrep, not grep \u2014 escape literal braces (\`interface\\{\\}\`).
- Filter with \`glob\` (e.g. "**/*.tsx") or \`type\` (e.g. "js", "py", "rust").
- \`output_mode\`: "content" (matching lines), "files_with_matches" (paths only, default), or "count".
- \`multiline: true\` for patterns that span lines.`;return`A powerful search tool built on ripgrep

  Usage:
  - ALWAYS use ${Xo} for search tasks. NEVER invoke \`grep\` or \`rg\` as a ${Qe} command. The ${Xo} tool has been optimized for correct permissions and access.
  - Supports full regex syntax (e.g., "log.*Error", "function\\s+\\w+")
  - Filter files with glob parameter (e.g., "*.js", "**/*.tsx") or type parameter (e.g., "js", "py", "rust")
  - Output modes: "content" shows matching lines, "files_with_matches" shows only file paths (default), "count" shows match counts
${e0()==="default"?`  - Use ${yt} tool (if available) for open-ended searches requiring multiple rounds
`:""}  - Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (use \`interface\\{\\}\` to find \`interface{}\` in Go code)
  - Multiline matching: By default patterns match within single lines only. For cross-line patterns like \`struct \\{[\\s\\S]*?field\`, use \`multiline: true\`
`}class CM{#e=new Map;get(e){return this.#e.get(e)}has(e){return this.#e.has(e)}set(e,t){this.#e.set(e,t)}release(e){let t=this.#e.get(e);if(t===void 0)return!1;return t.clearAllTimers(),this.#e.delete(e),!0}}var Tht="repl-registered";function SXn(){return a.CLAUDE_REPL_VARIANT}var F2="main";function Eht(e,t){return e.get(CM).has(t??F2)}function ty(){if(!TR())return!1;if(a.CLAUDE_CODE_REPL===!1)return!1;if(a.CLAUDE_CODE_REPL===!0)return!0;let e=a.CLAUDE_CODE_ENTRYPOINT;if(e==="cli"||e==="remote")return I("tengu_slate_harbor",!1);return!1}function Dmn(){return!1}function bne(){return!1}function Lz(e){if(!kI(e))return e;let t=e.filter((r)=>r.isMcp!==!0||r.mcpInfo?.isAuthStub===!0);return t.length===e.length?e:t}function kI(e){return bne()&&e.some((t)=>t.isMcp!==!0&&on(t,$s))}var XVe=new Set([_t,ti,Xo,Qe,Bt,mc]);var lC="EnterWorktree";var o=import.meta.require("/$bunfs/root/chunk-rpxv1a5d.js").BRIEF_TOOL_NAME,n=`Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`,i=" Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.",s=` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`,l=` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;function vM(e){if(e.alwaysLoad===!0)return!1;if(jk(e,PQn()))return!1;if(e.isMcp===!0)return!bne();if(e.name===Kl)return!1;if(e.name===yt){if(import.meta.require("/$bunfs/root/chunk-5h0ccr97.js").isForkSubagentEnabled())return!1}if(e.name===o)return!1;if(e.name===xk&&NAe())return!1;if(e.name===pa)return!1;if(e.name===lC&&a.CLAUDE_CODE_SESSION_KIND==="bg")return!1;return e.shouldDefer===!0}function Omn(e){return e.name}function B6t(){return n+(Nnr()?s:i)+l}
export{Xo,Pmn,CM,Tht,SXn,F2,Eht,ty,Dmn,bne,Lz,kI,XVe,lC,vM,Omn,B6t};
