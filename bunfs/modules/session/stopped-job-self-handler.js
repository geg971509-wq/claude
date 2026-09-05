// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { K } from "/$bunfs/root/chunk-f9h0bg01.js";
import { w, c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { T2 } from "/$bunfs/root/chunk-krety1hw.js";
import { ve, wt, O3 } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y } from "/$bunfs/root/chunk-ca80fke8.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Ln } from "/$bunfs/root/chunk-zze8764r.js";
import { xs, Aa, fr, Xi } from "/$bunfs/root/chunk-wn1jrcrk.js";
function n() {
  return a.CLAUDE_JOB_DIR;
}
async function Gnt(i, e) {
  s("tengu_bg_agent_action", { action: w("stop"), source: c(i), jobSessionId: ve(K()) });
  let o = n();
  if (wt() && o) {
    let r = new Date().toISOString(),
      t = await fr(o, e);
    if (t && !Xi(t))
      await xs(
        o,
        {
          ...t,
          state: "stopped",
          detail: "stopped from session",
          tempo: "idle",
          needs: void 0,
          block: void 0,
          inFlight: void 0,
          updatedAt: r,
          firstTerminalAt: t.firstTerminalAt ?? r,
        },
        e,
      ).catch(Aa);
    if (O3()) process.stdout.write(T2("Session stopped."));
  }
  return y("job_stop_self"), Ln(0, "prompt_input_exit", { suppressResumeHint: true });
}
export { Gnt };
