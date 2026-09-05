// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { qt } from "/$bunfs/root/chunk-z9ex1x2t.js";
import { js } from "/$bunfs/root/chunk-ypdw393e.js";
import { Zo } from "/$bunfs/root/chunk-keb644xg.js";
import { Rr, Kb } from "/$bunfs/root/chunk-y9akj3mq.js";
import { pV } from "/$bunfs/root/chunk-1emzhzm3.js";
import { Q } from "/$bunfs/root/chunk-wag5ye9w.js";
function urt() {
  return qt().reconnect;
}
function zNn() {
  return qt().toggle;
}
function vse() {
  return qt().isDisabled;
}
function VNn() {
  return qt().isPolicyBlocked;
}
function mJt(e, n, t, o) {
  let r = qt();
  (r.reconnect = e), (r.toggle = n), (r.isDisabled = t), (r.isPolicyBlocked = o);
}
function gJt() {
  let e = qt();
  (e.reconnect = null), (e.toggle = null), (e.isDisabled = null), (e.isPolicyBlocked = null);
}
function qK(e) {
  return e.type;
}
function Vke(e) {
  let n = qK(e);
  switch (n) {
    case "disabled":
    case "pending":
    case "needs-approval":
      return n;
    case "connected":
    case "failed":
    case "needs-auth":
    case "cached":
      return null;
    default:
      return n;
  }
}
function BQ(e) {
  return `"${Rr(e)}" is disabled \u2014 enable it in /mcp first`;
}
function _1(e) {
  return `"${Rr(e)}" was disabled in another session \u2014 disable and re-enable it in /mcp, or restart, to reconnect`;
}
function N2e(e) {
  let n = Rr(e),
    t = `"${e}" was re-enabled in another session, so this disable didn't persist \u2014 /mcp enable ${e} then /mcp disable ${e} makes it stick. Left alone, it connects on the next launch.`;
  return pV(e) && [...t].length <= 1024
    ? t
    : `"${n}" was re-enabled in another session, so this disable didn't persist. Left alone, it connects on the next launch.`;
}
function Vge(e, n, t) {
  if (!n) {
    let i = Q(e, (s) => s.type === "disabled" && !t(s.name));
    if (i === 0) return null;
    let l = Q(e, (s) => s.type === "disabled" && t(s.name));
    return (
      `${i} MCP server(s) were re-enabled in another session, so this disable didn't persist for them \u2014 enable then disable each in /mcp to make it stick. Left alone, they connect on the next launch.` +
      (l > 0 ? ` The other ${l} ${l === 1 ? "remains" : "remain"} disabled.` : "")
    );
  }
  let o = e.filter((i) => i.type !== "disabled" && qK(i) !== "needs-approval" && t(i.name));
  if (o.length === 0) return null;
  let r = Q(o, Zo),
    a = Q(o, (i) => !Zo(i) && Kb(i)),
    d = o.length - r - a,
    c = [];
  if (d > 0)
    c.push(
      `${d} MCP server(s) were disabled in another session \u2014 disable and re-enable them in /mcp, or restart, to reconnect.`,
    );
  if (a > 0)
    c.push(
      `${a} MCP server(s) were disabled in another session but aren't configured yet \u2014 there's nothing to reconnect until they are.`,
    );
  if (r > 0)
    c.push(
      `${r} MCP server(s) are still available in this session but were disabled in another \u2014 they keep working here and won't reconnect after the next launch. Disable and re-enable them in /mcp to persist the re-enable.`,
    );
  return c.join(" ");
}
function drt(e) {
  return `"${Rr(e)}" is blocked by your organization's managed policy \u2014 it can't be authenticated or reconnected here`;
}
function F2e(e) {
  return `"${Rr(e)}" is still available in this session, but another session disabled it \u2014 it keeps working here and won't reconnect after the next launch. Disable and re-enable it in /mcp to persist the re-enable.`;
}
function hJt(e, n) {
  if (n === "ide") throw new js("The IDE connection is managed automatically and can't be reconnected manually");
  let t = e.find((r) => r.name === n),
    o = t && Vke(t);
  if (o)
    throw new js(
      o === "disabled"
        ? BQ(n)
        : o === "pending"
          ? `"${Rr(n)}" is already reconnecting \u2014 retries can take a few minutes when a server keeps failing`
          : `"${Rr(n)}" is pending approval \u2014 approve it in the terminal first`,
    );
}
export { urt, zNn, vse, VNn, mJt, gJt, qK, Vke, BQ, _1, N2e, Vge, drt, F2e, hJt };
