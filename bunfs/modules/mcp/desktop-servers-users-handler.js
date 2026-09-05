// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import "/$bunfs/root/chunk-bzx56g36.js";
import { fYe } from "/$bunfs/root/chunk-keb644xg.js";
import "/$bunfs/root/chunk-f9h0bg01.js";
import "/$bunfs/root/chunk-qq1mdtb5.js";
import "/$bunfs/root/chunk-tx16jn0x.js";
import "/$bunfs/root/chunk-vfy57cpd.js";
import "/$bunfs/root/chunk-4xj01xwv.js";
import { E } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import "/$bunfs/root/chunk-gcks6mn0.js";
import "/$bunfs/root/chunk-qk7r0t2g.js";
import "/$bunfs/root/chunk-4ddxwr9r.js";
import "/$bunfs/root/chunk-eqdctte5.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import "/$bunfs/root/chunk-qm65zb83.js";
import "/$bunfs/root/chunk-wkxx62a2.js";
import { Ut } from "/$bunfs/root/chunk-ntyhd04p.js";
import "/$bunfs/root/chunk-werv747a.js";
import { rkn, D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import "/$bunfs/root/chunk-56sxk8k2.js";
import "/$bunfs/root/chunk-a4q326ap.js";
import { readdir as u, readFile as d, stat as p } from "fs/promises";
import { homedir as m } from "os";
import { join as l } from "path";
async function g() {
  let o = D();
  if (!rkn.includes(o))
    throw Error(`Unsupported platform: ${o} - Claude Desktop integration only works on macOS and WSL.`);
  if (o === "macos") return l(m(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
  let i = a.USERPROFILE ? a.USERPROFILE.replace(/\\/g, "/") : null;
  if (i) {
    let e = `/mnt/c${i.replace(/^[A-Z]:/, "")}/AppData/Roaming/Claude/claude_desktop_config.json`;
    try {
      return await p(e), e;
    } catch {}
  }
  try {
    try {
      let e = await u("/mnt/c/Users", { withFileTypes: true });
      for (let r of e) {
        if (r.name === "Public" || r.name === "Default" || r.name === "Default User" || r.name === "All Users")
          continue;
        let s = l("/mnt/c/Users", r.name, "AppData", "Roaming", "Claude", "claude_desktop_config.json");
        try {
          return await p(s), s;
        } catch {}
      }
    } catch {}
  } catch (t) {
    n(`Failed scanning /mnt/c/Users for Claude Desktop config: ${t}`, { level: "error" });
  }
  throw Error(
    "Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.",
  );
}
async function O() {
  if (!rkn.includes(D())) throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  try {
    let o = await g(),
      i;
    try {
      i = await d(o, { encoding: "utf8" });
    } catch (s) {
      if (E(s) === "ENOENT") return {};
      throw s;
    }
    let t = Ut(i);
    if (!t || typeof t !== "object") return {};
    let e = t.mcpServers;
    if (!e || typeof e !== "object") return {};
    let r = {};
    for (let [s, c] of Object.entries(e)) {
      if (!c || typeof c !== "object") continue;
      let f = fYe().safeParse(c);
      if (f.success) r[s] = f.data;
    }
    return r;
  } catch (o) {
    return n(`Failed to read Claude Desktop MCP servers: ${o}`, { level: "error" }), {};
  }
}
export { O as readClaudeDesktopMcpServers };
