// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { nw } from "/$bunfs/root/chunk-qd35gw0c.js";
var t = new Set(["iTerm.app", "vscode", "WezTerm", "WarpTerminal", "Hyper", "Tabby", "rio", "contour", "alacritty"]);
function kBe() {
  if (a.CLAUDE_CODE_FORCE_STRIKETHROUGH) return true;
  let r = a.TERM;
  if (a.TERM_PROGRAM === "Apple_Terminal" || r === "linux") return false;
  return (
    t.has(a.TERM_PROGRAM ?? "") ||
    nw.isGhostty() ||
    nw.isMintty() ||
    nw.isJetBrainsIdeTerminal() ||
    a.LC_TERMINAL === "iTerm2" ||
    !!r?.includes("kitty") ||
    !!r?.includes("alacritty") ||
    !!r?.startsWith("foot") ||
    !!a.KITTY_WINDOW_ID ||
    !!a.ALACRITTY_LOG ||
    !!a.KONSOLE_VERSION ||
    !!a.WT_SESSION ||
    !!a.ZED_TERM ||
    parseInt(a.VTE_VERSION ?? "", 10) >= 4400
  );
}
export { kBe };
