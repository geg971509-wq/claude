// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import "/$bunfs/root/chunk-f9h0bg01.js";
import "/$bunfs/root/chunk-qq1mdtb5.js";
import "/$bunfs/root/chunk-tx16jn0x.js";
import "/$bunfs/root/chunk-vfy57cpd.js";
import "/$bunfs/root/chunk-4xj01xwv.js";
import "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import "/$bunfs/root/chunk-gcks6mn0.js";
import "/$bunfs/root/chunk-qk7r0t2g.js";
import "/$bunfs/root/chunk-4ddxwr9r.js";
import "/$bunfs/root/chunk-nqmqabr8.js";
import "/$bunfs/root/chunk-z0z1xzkg.js";
import "/$bunfs/root/chunk-c47snwm2.js";
import "/$bunfs/root/chunk-jpf4kat5.js";
import "/$bunfs/root/chunk-bzx56g36.js";
import "/$bunfs/root/chunk-2rx5nghb.js";
import "/$bunfs/root/chunk-eqdctte5.js";
import "/$bunfs/root/chunk-fec4384a.js";
import "/$bunfs/root/chunk-qm65zb83.js";
import "/$bunfs/root/chunk-wkxx62a2.js";
import "/$bunfs/root/chunk-0pgyw7te.js";
import "/$bunfs/root/chunk-f5hrzy3k.js";
import "/$bunfs/root/chunk-c6k0ecxv.js";
import { tG } from "/$bunfs/root/chunk-1eqdma2n.js";
import "/$bunfs/root/chunk-f77e8yef.js";
import "/$bunfs/root/chunk-jzh4kg5x.js";
import "/$bunfs/root/chunk-7s7jqj2f.js";
import "/$bunfs/root/chunk-56sxk8k2.js";
import "/$bunfs/root/chunk-a4q326ap.js";
var m = {
  name: "MCP Task",
  type: "mcp_task",
  async kill(a, i, p, d, r) {
    let e = i.get(a),
      s = e?.type === "mcp_task" ? e.sidecarSessionId : void 0,
      o = e?.type === "mcp_task" ? e.sidecarProjectDir : void 0,
      c = e?.type === "mcp_task" ? e.sidecarWrite : void 0;
    if (e?.type === "mcp_task") e.abortController?.abort(), e.driveAbortController?.abort(), e.sep2663Cancel?.();
    i.update(a, (t) => {
      if (t.notified || t.status !== "running") return t;
      return { ...t, status: "killed", endTime: Date.now(), parked: void 0, notified: !0 };
    }),
      (async () => {
        await c, await tG(a, r, s, o);
      })().catch((t) => n(`McpTask.kill deleteMcpTaskMetadata: ${String(t)}`));
  },
};
export { m as MCP_TASK };
