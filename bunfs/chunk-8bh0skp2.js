// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { K, Se, _5t, y5t } from "/$bunfs/root/chunk-f9h0bg01.js";
import "/$bunfs/root/chunk-qq1mdtb5.js";
import "/$bunfs/root/chunk-tx16jn0x.js";
import { Qp } from "/$bunfs/root/chunk-d5s7a9by.js";
import "/$bunfs/root/chunk-jpf4kat5.js";
import "/$bunfs/root/chunk-vfy57cpd.js";
import "/$bunfs/root/chunk-4xj01xwv.js";
import "/$bunfs/root/chunk-ypdw393e.js";
import "/$bunfs/root/chunk-fv016jr6.js";
import "/$bunfs/root/chunk-gcks6mn0.js";
import "/$bunfs/root/chunk-qk7r0t2g.js";
import "/$bunfs/root/chunk-4ddxwr9r.js";
import "/$bunfs/root/chunk-bzx56g36.js";
import "/$bunfs/root/chunk-eqdctte5.js";
import "/$bunfs/root/chunk-fec4384a.js";
import "/$bunfs/root/chunk-qm65zb83.js";
import "/$bunfs/root/chunk-wkxx62a2.js";
import "/$bunfs/root/chunk-ps6pc7xd.js";
import "/$bunfs/root/chunk-4rh74qms.js";
import "/$bunfs/root/chunk-a6xhjq7b.js";
import "/$bunfs/root/chunk-0g6cj4h1.js";
import { H8n, Ek, fVe } from "/$bunfs/root/chunk-z9rrv31w.js";
import "/$bunfs/root/chunk-r53tkxrh.js";
import "/$bunfs/root/chunk-ca80fke8.js";
import "/$bunfs/root/chunk-s28wf80n.js";
import "/$bunfs/root/chunk-3bbym8ct.js";
import "/$bunfs/root/chunk-4fwj3vnx.js";
import "/$bunfs/root/chunk-cf8qhmdc.js";
import "/$bunfs/root/chunk-0pgyw7te.js";
import "/$bunfs/root/chunk-2masxyqj.js";
import "/$bunfs/root/chunk-s7e0px8j.js";
import "/$bunfs/root/chunk-rgw52f13.js";
import "/$bunfs/root/chunk-2rx5nghb.js";
import "/$bunfs/root/chunk-f5hrzy3k.js";
import "/$bunfs/root/chunk-nqmqabr8.js";
import "/$bunfs/root/chunk-z0z1xzkg.js";
import "/$bunfs/root/chunk-c47snwm2.js";
import "/$bunfs/root/chunk-s4vc7est.js";
import "/$bunfs/root/chunk-hyh5wcm1.js";
import { rne, Rf, c6t, u6t, Mfn } from "/$bunfs/root/chunk-5djs3wbb.js";
import "/$bunfs/root/chunk-qpj83ec7.js";
import "/$bunfs/root/chunk-rr0yj5sq.js";
import { Yk } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { vi } from "/$bunfs/root/chunk-75bjbbtd.js";
import "/$bunfs/root/chunk-1hh0bg14.js";
import "/$bunfs/root/chunk-jzh4kg5x.js";
import "/$bunfs/root/chunk-7s7jqj2f.js";
import "/$bunfs/root/chunk-56sxk8k2.js";
import "/$bunfs/root/chunk-a4q326ap.js";
import { rename as d } from "fs/promises";
var l = "session";
function c(t) {
  return `${l}-${t.slice(0, 8)}`;
}
function p() {
  if (_5t() === void 0) {
    let t = process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME || null;
    delete process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME, y5t(t);
  }
  return _5t() ?? null;
}
function x() {
  y5t(void 0);
}
async function C(t, n) {
  let i = t?.existingTeamName || p(),
    e = i ?? c(K()),
    a = Yk(vi, e),
    m = rne(e);
  if (!(i ? await Rf(e, n) : null)) {
    let r = {
      name: e,
      createdAt: Date.now(),
      leadAgentId: a,
      leadSessionId: K(),
      members: [
        {
          agentId: a,
          name: vi,
          agentType: vi,
          joinedAt: Date.now(),
          tmuxPaneId: "leader",
          cwd: Se(),
          subscriptions: [],
          backendType: "in-process",
        },
      ],
    };
    await u6t(e, r, n).catch((T) => c6t(e, T));
  }
  H8n(e);
  let o = K();
  if (e !== o) await d(Ek(o), Ek(e)).catch(() => {});
  await fVe(e, n), Mfn(e);
  let s = Qp[0];
  return {
    teamContext: {
      teamName: e,
      teamFilePath: m,
      leadAgentId: a,
      teammates: {
        [a]: {
          name: vi,
          agentType: vi,
          color: s,
          tmuxSessionName: "in-process",
          tmuxPaneId: "leader",
          cwd: Se(),
          spawnedAt: Date.now(),
        },
      },
    },
    teammateColors: { assignments: new Map([[a, s]]), index: 1 },
  };
}
export { x as _resetInheritedTeamNameForTesting, C as initializeSessionTeam, c as sessionTeamName };
