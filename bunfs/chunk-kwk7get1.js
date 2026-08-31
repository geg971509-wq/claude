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
import "/$bunfs/root/chunk-r53tkxrh.js";
import "/$bunfs/root/chunk-4xj01xwv.js";
import { p } from "/$bunfs/root/chunk-ca80fke8.js";
import "/$bunfs/root/chunk-vfy57cpd.js";
import "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import "/$bunfs/root/chunk-gcks6mn0.js";
import "/$bunfs/root/chunk-qk7r0t2g.js";
import "/$bunfs/root/chunk-4ddxwr9r.js";
import "/$bunfs/root/chunk-bzx56g36.js";
import "/$bunfs/root/chunk-eqdctte5.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import "/$bunfs/root/chunk-qm65zb83.js";
import "/$bunfs/root/chunk-wkxx62a2.js";
import "/$bunfs/root/chunk-ps6pc7xd.js";
import "/$bunfs/root/chunk-s28wf80n.js";
import "/$bunfs/root/chunk-3bbym8ct.js";
import "/$bunfs/root/chunk-4fwj3vnx.js";
import "/$bunfs/root/chunk-cf8qhmdc.js";
import "/$bunfs/root/chunk-0pgyw7te.js";
import { $e } from "/$bunfs/root/chunk-2masxyqj.js";
import { _M, Ffn, iOe } from "/$bunfs/root/chunk-4399d2v0.js";
import { Ak, Iwe } from "/$bunfs/root/chunk-3ekngzmx.js";
import { WCe } from "/$bunfs/root/chunk-13198prn.js";
import "/$bunfs/root/chunk-7s7jqj2f.js";
import "/$bunfs/root/chunk-56sxk8k2.js";
import "/$bunfs/root/chunk-a4q326ap.js";
function d(e) {
  return $e(Ffn(), e);
}
function f(e) {
  let s = e.match(/Created new pane:\s*(.+)/);
  if (s && s[1]) return s[1].trim();
  return "";
}
function I() {
  let e = a.ITERM_SESSION_ID;
  if (!e) return null;
  let s = e.indexOf(":");
  if (s === -1) return null;
  return e.slice(s + 1);
}
class g {
  type = "iterm2";
  displayName = "iTerm2";
  teammateSessionIds = [];
  firstPaneUsed = !1;
  paneCreationLock = WCe();
  async isAvailable() {
    let e = _M();
    if ((n(`[ITermBackend] isAvailable check: inITerm2=${e}`), !e))
      return n("[ITermBackend] isAvailable: false (not in iTerm2)"), !1;
    let s = await iOe();
    return n(`[ITermBackend] isAvailable: ${s} (it2 CLI ${s ? "found" : "not found"})`), s;
  }
  async isRunningInside() {
    let e = _M();
    return n(`[ITermBackend] isRunningInside: ${e}`), e;
  }
  async createTeammatePaneInSwarmView(e, s) {
    n(`[ITermBackend] createTeammatePaneInSwarmView called for ${e} with color ${s}`);
    let o = await this.paneCreationLock.acquire();
    try {
      while (!0) {
        let t = !this.firstPaneUsed;
        n(`[ITermBackend] Creating pane: isFirstTeammate=${t}, existingPanes=${this.teammateSessionIds.length}`);
        let r, i;
        if (t) {
          let l = I();
          if (l) (r = ["session", "split", "-v", "-s", l]), n(`[ITermBackend] First split from leader session: ${l}`);
          else (r = ["session", "split", "-v"]), n("[ITermBackend] First split from active session (no leader ID)");
        } else if (((i = this.teammateSessionIds.at(-1)), i))
          (r = ["session", "split", "-s", i]), n(`[ITermBackend] Subsequent split from teammate session: ${i}`);
        else (r = ["session", "split"]), n("[ITermBackend] Subsequent split from active session (no teammate ID)");
        let m = await d(r);
        if (m.code !== 0) {
          if (i) {
            let l = await d(["session", "list"]);
            if (l.code === 0 && !l.stdout.includes(i)) {
              n(`[ITermBackend] Split failed targeting dead session ${i}, pruning and retrying: ${m.stderr}`);
              let u = this.teammateSessionIds.indexOf(i);
              if (u !== -1) this.teammateSessionIds.splice(u, 1);
              if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
              continue;
            }
          }
          throw new Ak(`Failed to create iTerm2 split pane: ${m.stderr}`);
        }
        let c = f(m.stdout);
        if (!c) throw Error(`Failed to parse session ID from split output: ${m.stdout}`);
        if ((n(`[ITermBackend] Created teammate pane for ${e}: ${c}`), t)) this.firstPaneUsed = !0;
        return this.teammateSessionIds.push(c), { paneId: c, isFirstTeammate: t };
      }
    } finally {
      o();
    }
  }
  async sendCommandToPane(e, s, o) {
    try {
      Iwe(s);
    } catch (i) {
      throw (p("swarm_pane_spawn", "swarm_pane_command_control_chars"), i);
    }
    let t = e ? ["-s", e] : [];
    await d(["session", "send", ...t, "\x15"]);
    let r = await d(["session", "run", ...t, s]);
    if (r.code !== 0) throw new Ak(`Failed to send command to iTerm2 pane ${e}: ${r.stderr}`);
  }
  async setPaneBorderColor(e, s, o) {}
  async setPaneTitle(e, s, o, t) {}
  async enablePaneBorderStatus(e, s) {}
  async killPane(e, s) {
    let o = await d(["session", "close", "-f", "-s", e]),
      t = this.teammateSessionIds.indexOf(e);
    if (t !== -1) this.teammateSessionIds.splice(t, 1);
    if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
    return o.code === 0;
  }
}
export { g as ITermBackend };
