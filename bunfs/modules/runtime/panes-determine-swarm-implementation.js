// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { p } from "/$bunfs/root/chunk-ca80fke8.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { Isr } from "/$bunfs/root/chunk-s28wf80n.js";
import { $e } from "/$bunfs/root/chunk-2masxyqj.js";
import { I2, p6t, f6t, one } from "/$bunfs/root/chunk-4399d2v0.js";
import { Ak, Iwe } from "/$bunfs/root/chunk-3ekngzmx.js";
import { U6, K7e, B6, wpe, X7e } from "/$bunfs/root/chunk-75bjbbtd.js";
import { WCe } from "/$bunfs/root/chunk-13198prn.js";
import { Q } from "/$bunfs/root/chunk-wag5ye9w.js";
function h(e) {
  let t = `Failed to create teammate pane: ${e}`,
    a = e.toLowerCase();
  return a.includes("no space") || a.includes("too small")
    ? `${t} \u2014 no room for another tmux split. Spawn fewer concurrent teammates, enlarge your terminal if running inside tmux, or switch to in-process teammates via /config.`
    : t;
}
function T(e) {
  return {
    red: "red",
    blue: "blue",
    green: "green",
    yellow: "yellow",
    purple: "magenta",
    orange: "colour208",
    pink: "colour205",
    cyan: "cyan",
  }[e];
}
function d(e) {
  let t = f6t(),
    a = t ? ["-S", t, ...e] : e;
  return $e(B6, a);
}
function l(e, t) {
  return $e(B6, ["-L", X7e(), ...e], t);
}
async function mPt(e, t, a) {
  await $e(B6, [...e, "set-option", "-p", "-t", t, "remain-on-exit", "failed"]);
  let r = await $e(B6, [...e, "respawn-pane", "-k", "-t", t, "--", Isr("agent", a)]);
  if (r.code !== 0) throw new Ak(`Failed to send command to pane ${t}: ${r.stderr}`);
}
class upr {
  type = "tmux";
  displayName = "tmux";
  cachedLeaderWindowTarget = null;
  firstPaneUsedForExternal = false;
  paneCreationLock = WCe();
  async isAvailable() {
    return one();
  }
  async isRunningInside() {
    return I2();
  }
  async createTeammatePaneInSwarmView(e, t) {
    let a = await this.paneCreationLock.acquire();
    try {
      if (await this.isRunningInside()) return await this.createTeammatePaneWithLeader(e, t);
      return await this.createTeammatePaneExternal(e, t);
    } finally {
      a();
    }
  }
  async sendCommandToPane(e, t, a = false) {
    try {
      Iwe(t);
    } catch (o) {
      throw (p("swarm_pane_spawn", "swarm_pane_command_control_chars"), o);
    }
    let r = f6t(),
      s = a ? ["-L", X7e()] : r ? ["-S", r] : [];
    await mPt(s, e, t);
  }
  async setPaneBorderColor(e, t, a = false) {
    let r = T(t),
      s = a ? l : d;
    await s(["set-option", "-p", "-t", e, "window-style", `bg=default,fg=${r}`]),
      await s(["set-option", "-p", "-t", e, "pane-border-style", `fg=${r}`]),
      await s(["set-option", "-p", "-t", e, "pane-active-border-style", `fg=${r}`]);
  }
  async setPaneTitle(e, t, a, r = false) {
    let s = T(a),
      o = r ? l : d;
    await o(["select-pane", "-t", e, "-T", t]),
      await o(["set-option", "-p", "-t", e, "pane-border-format", `#[fg=${s},bold] #{pane_title} #[default]`]);
  }
  async enablePaneBorderStatus(e, t = false) {
    let a = e || (await this.getCurrentWindowTarget());
    if (!a) return;
    await (t ? l : d)(["set-option", "-w", "-t", a, "pane-border-status", "top"]);
  }
  async killPane(e, t = false) {
    return (await (t ? l : d)(["kill-pane", "-t", e])).code === 0;
  }
  async getCurrentPaneId() {
    let e = p6t();
    if (e) return e;
    let t = await d(["display-message", "-p", "#{pane_id}"]);
    if (t.code !== 0) return n(`[TmuxBackend] Failed to get current pane ID (exit ${t.code}): ${t.stderr}`), null;
    return t.stdout.trim();
  }
  async getCurrentWindowTarget() {
    if (this.cachedLeaderWindowTarget) return this.cachedLeaderWindowTarget;
    let e = p6t(),
      t = ["display-message"];
    if (e) t.push("-t", e);
    t.push("-p", "#{window_id}");
    let a = await d(t);
    if (a.code !== 0) return n(`[TmuxBackend] Failed to get current window target (exit ${a.code}): ${a.stderr}`), null;
    return (this.cachedLeaderWindowTarget = a.stdout.trim()), this.cachedLeaderWindowTarget;
  }
  async getCurrentWindowPaneCount(e, t = false) {
    let a = e || (await this.getCurrentWindowTarget());
    if (!a) return null;
    let r = ["list-panes", "-t", a, "-F", "#{pane_id}"],
      s = t ? await l(r) : await d(r);
    if (s.code !== 0) {
      if (
        (n(`[TmuxBackend] Failed to get pane count for ${a} (exit ${s.code}): ${s.stderr}`, { level: "error" }),
        a === this.cachedLeaderWindowTarget)
      )
        this.cachedLeaderWindowTarget = null;
      return null;
    }
    return Q(
      s.stdout.trim().split(`
`),
      Boolean,
    );
  }
  async hasSessionInSwarm(e) {
    return (await l(["has-session", "-t", e])).code === 0;
  }
  async createExternalSwarmSession() {
    if (!(await this.hasSessionInSwarm(U6))) {
      let o = await l(["new-session", "-d", "-s", U6, "-n", K7e, "-P", "-F", "#{pane_id}", "--", wpe], {
        useCwd: true,
        toolCgroupClass: "agent",
      });
      if (o.code !== 0) throw new Ak(`Failed to create swarm session: ${o.stderr || "Unknown error"}`);
      let i = o.stdout.trim(),
        u = `${U6}:${K7e}`;
      return (
        n(`[TmuxBackend] Created external swarm session with window ${u}, pane ${i}`),
        (this.firstPaneUsedForExternal = false),
        { windowTarget: u, paneId: i }
      );
    }
    let a = (await l(["list-windows", "-t", U6, "-F", "#{window_name}"])).stdout
        .trim()
        .split(`
`)
        .filter(Boolean),
      r = `${U6}:${K7e}`;
    if (a.includes(K7e)) {
      let i = (await l(["list-panes", "-t", r, "-F", "#{pane_id}"])).stdout
        .trim()
        .split(`
`)
        .filter(Boolean);
      return { windowTarget: r, paneId: i[0] || "" };
    }
    let s = await l(["new-window", "-t", U6, "-n", K7e, "-P", "-F", "#{pane_id}", "--", wpe]);
    if (s.code !== 0) throw new Ak(`Failed to create swarm-view window: ${s.stderr || "Unknown error"}`);
    return (this.firstPaneUsedForExternal = false), { windowTarget: r, paneId: s.stdout.trim() };
  }
  async createTeammatePaneWithLeader(e, t) {
    let a = await this.getCurrentPaneId(),
      r = await this.getCurrentWindowTarget();
    if (!a || !r) throw new Ak("Could not determine current tmux pane/window");
    let s = await this.getCurrentWindowPaneCount(r);
    if (s === null) throw new Ak("Could not determine pane count for current window");
    let o = s === 1,
      i;
    if (o) i = await d(["split-window", "-d", "-t", a, "-h", "-l", "70%", "-P", "-F", "#{pane_id}", "--", wpe]);
    else {
      let c = (await d(["list-panes", "-t", r, "-F", "#{pane_id}"])).stdout
          .trim()
          .split(`
`)
          .filter(Boolean)
          .slice(1),
        g = c.length,
        P = g % 2 === 1,
        m = Math.floor((g - 1) / 2),
        x = c[m] || c.at(-1);
      i = await d(["split-window", "-d", "-t", x, P ? "-v" : "-h", "-P", "-F", "#{pane_id}", "--", wpe]);
    }
    if (i.code !== 0) throw new Ak(h(i.stderr));
    let u = i.stdout.trim();
    return (
      n(`[TmuxBackend] Created teammate pane for ${e}: ${u}`),
      await this.setPaneBorderColor(u, t),
      await this.setPaneTitle(u, e, t),
      await this.rebalancePanesWithLeader(r),
      { paneId: u, isFirstTeammate: o }
    );
  }
  async createTeammatePaneExternal(e, t) {
    let { windowTarget: a, paneId: r } = await this.createExternalSwarmSession(),
      s = await this.getCurrentWindowPaneCount(a, true);
    if (s === null) throw new Ak("Could not determine pane count for swarm window");
    let o = !this.firstPaneUsedForExternal && s === 1,
      i;
    if (o)
      (i = r),
        (this.firstPaneUsedForExternal = true),
        n(`[TmuxBackend] Using initial pane for first teammate ${e}: ${i}`),
        await this.enablePaneBorderStatus(a, true);
    else {
      let w = (await l(["list-panes", "-t", a, "-F", "#{pane_id}"])).stdout
          .trim()
          .split(`
`)
          .filter(Boolean),
        f = w.length,
        c = f % 2 === 1,
        g = Math.floor((f - 1) / 2),
        P = w[g] || w.at(-1),
        m = await l(["split-window", "-d", "-t", P, c ? "-v" : "-h", "-P", "-F", "#{pane_id}", "--", wpe]);
      if (m.code !== 0) throw new Ak(h(m.stderr));
      (i = m.stdout.trim()), n(`[TmuxBackend] Created teammate pane for ${e}: ${i}`);
    }
    return (
      await this.setPaneBorderColor(i, t, true),
      await this.setPaneTitle(i, e, t, true),
      await this.rebalancePanesTiled(a),
      { paneId: i, isFirstTeammate: o }
    );
  }
  async rebalancePanesWithLeader(e) {
    let a = (await d(["list-panes", "-t", e, "-F", "#{pane_id}"])).stdout
      .trim()
      .split(`
`)
      .filter(Boolean);
    if (a.length <= 2) return;
    await d(["select-layout", "-t", e, "main-vertical"]);
    let r = a[0];
    await d(["resize-pane", "-t", r, "-x", "30%"]),
      n(`[TmuxBackend] Rebalanced ${a.length - 1} teammate panes with leader`);
  }
  async rebalancePanesTiled(e) {
    let a = (await l(["list-panes", "-t", e, "-F", "#{pane_id}"])).stdout
      .trim()
      .split(`
`)
      .filter(Boolean);
    if (a.length <= 1) return;
    await l(["select-layout", "-t", e, "tiled"]),
      n(`[TmuxBackend] Rebalanced ${a.length} teammate panes with tiled layout`);
  }
}
export { mPt, upr };
