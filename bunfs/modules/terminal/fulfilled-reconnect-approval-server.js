// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Le } from "/$bunfs/root/chunk-f9h0bg01.js";
import "/$bunfs/root/chunk-qq1mdtb5.js";
import "/$bunfs/root/chunk-tx16jn0x.js";
import "/$bunfs/root/chunk-vfy57cpd.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { js, l } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import "/$bunfs/root/chunk-gcks6mn0.js";
import "/$bunfs/root/chunk-qk7r0t2g.js";
import "/$bunfs/root/chunk-4ddxwr9r.js";
import "/$bunfs/root/chunk-bzx56g36.js";
import "/$bunfs/root/chunk-eqdctte5.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import "/$bunfs/root/chunk-qm65zb83.js";
import { A0, _j } from "/$bunfs/root/chunk-wkxx62a2.js";
import "/$bunfs/root/chunk-ps6pc7xd.js";
import { mo } from "/$bunfs/root/chunk-4sw5yxwb.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import "/$bunfs/root/chunk-z9ex1x2t.js";
import { Zo } from "/$bunfs/root/chunk-keb644xg.js";
import { urt, zNn, vse, qK, Vke, _1, N2e, Vge, F2e } from "/$bunfs/root/chunk-k617fh7k.js";
import { Rr, Da, Kb } from "/$bunfs/root/chunk-y9akj3mq.js";
import "/$bunfs/root/chunk-gdhqsw8a.js";
import { pV } from "/$bunfs/root/chunk-1emzhzm3.js";
import { Qn } from "/$bunfs/root/chunk-9319g175.js";
import "/$bunfs/root/chunk-7s7jqj2f.js";
import "/$bunfs/root/chunk-56sxk8k2.js";
import { Q } from "/$bunfs/root/chunk-wag5ye9w.js";
import "/$bunfs/root/chunk-a4q326ap.js";
var I = {
    connected: "connected",
    cached: "cached (connects on first use)",
    pending: "connecting",
    disabled: "disabled",
    failed: "not connected",
    "needs-auth": "needs authentication",
    "needs-approval": "pending approval",
  },
  E = "Usage: /mcp [reconnect|enable|disable [<server>|all]]. With no server name, applies to all.";
async function ae(o, b) {
  let C = o.trim(),
    i = b.getMcp().clients.filter((t) => t.name !== "ide"),
    L = C.toLowerCase();
  if (!C || _j.includes(L)) {
    if (i.length === 0)
      return r(`No MCP servers are configured. Add one with \`claude mcp add\`.
${E}`);
    let t = Q(i, (h) => h.type === "connected"),
      m = Q(i, (h) => h.type === "cached"),
      v = Q(i, (h) => h.type === "pending"),
      M = Q(i, Kb),
      P = Q(i, B),
      O = Q(i, (h) => h.type === "disabled"),
      d = i.length - t - m - v - O - M,
      g = Le(),
      w = g && Boolean(a.CLAUDE_CODE_REMOTE);
    return r(
      `${i.length} MCP server(s): ${t} connected, ` +
        (m > 0 ? `${m} cached, ` : "") +
        (v > 0 ? `${v} connecting, ` : "") +
        `${d} not connected, ` +
        (M > 0 ? `${M} not configured, ` : "") +
        `${O} disabled.` +
        (P > 0 && !g ? " Reply `/mcp reconnect all` here to retry." : "") +
        (g
          ? w
            ? ""
            : " Use `/mcp` in the terminal for details."
          : ` Use \`/mcp\` in the terminal for details.
${E}`),
    );
  }
  if (A0.includes(L)) return r(E);
  let N = /^(\S+)\s*(.*)$/.exec(C),
    S = (N?.[1] ?? "").toLowerCase(),
    e = N?.[2] || "all";
  if (S !== "reconnect" && S !== "enable" && S !== "disable")
    return r(`"${u(S)}" isn't a recognized /mcp action. Try reconnect, enable, or disable.`);
  s("tengu_mcp_command_inline", { action: c(S) });
  let f = e === "all" ? i : i.filter((t) => t.name === e);
  if (f.length === 0)
    return r(
      e === "all"
        ? "No MCP servers are configured. Add one with `claude mcp add`."
        : `There's no MCP server named "${u(e)}". Run \`/mcp\` in the terminal to see configured servers.`,
    );
  let x = urt(),
    _ = zNn(),
    y = vse();
  if (!x || !_ || !y) {
    if (Le()) return r("Reconnect, enable, and disable aren't available in this session.");
    return r(
      "MCP controls aren't available right now \u2014 the terminal is still starting up or is showing another view.",
    );
  }
  if (S === "reconnect") {
    let t = e !== "all" ? f[0] : void 0,
      m = t && Vke(t);
    if (m === "disabled") return r(U(`"${u(e)}" is disabled.`, ` Run \`/mcp enable ${e}\` to bring it back.`, e));
    if (m === "pending")
      return r(`"${u(e)}" is already reconnecting \u2014 retries can take a few minutes when a server keeps failing.`);
    if (m === "needs-approval")
      return r(`"${u(e)}" is pending approval. Approve it with \`/mcp\` in the terminal first.`);
    let v = e === "all" ? f.filter((d) => z(d, y)) : f,
      M = e === "all" ? Vge(f, true, y) : null;
    if (v.length === 0) {
      let d = Q(f, (h) => h.type === "disabled"),
        g = Q(f, (h) => Kb(h) && !y(h.name));
      if (d === 0 && M === null && g > 0)
        return r(
          `${g} MCP server(s) aren't configured yet, so there's nothing to reconnect. The rest are already connected or connecting.`,
        );
      let w = [
        ...(d > 0 ? [`${d} MCP server(s) are disabled. Run \`/mcp enable all\` to bring them back.`] : []),
        ...(M !== null ? [M] : []),
        ...(g > 0 ? [`${g} MCP server(s) aren't configured yet, so there's nothing to reconnect.`] : []),
      ];
      if (w.length > 0) return r(w.join(" "));
      return r("All enabled MCP servers are already connected or connecting.");
    }
    let P = await Promise.allSettled(v.map((d) => x(d.name))),
      O = Q(P, (d) => d.status === "fulfilled" && d.value.client.type === "connected");
    if (e !== "all") {
      let d = P[0];
      if (d?.status !== "fulfilled") return j("reconnect", e, d?.reason, { persistsOffBox: mo(b.session) });
      let g = d.value.client.type,
        w =
          g === "needs-auth"
            ? "Authenticate with `/mcp` in the terminal."
            : "Check its config with `/mcp` in the terminal.";
      return r(g === "connected" ? `Reconnected "${u(e)}".` : `Couldn't reconnect "${u(e)}" (${I[g]}). ${w}`);
    }
    return r(
      `Reconnected ${O} of ${v.length} MCP server(s).` +
        (M !== null ? ` ${M}` : "") +
        " Run `/mcp` in the terminal to see status.",
    );
  }
  let p = S === "enable";
  if (e !== "all" && f.some((t) => qK(t) === "needs-approval"))
    return r(`"${u(e)}" is pending approval. Approve it with \`/mcp\` in the terminal first.`);
  let A = f.filter((t) => (p ? t.type === "disabled" : t.type !== "disabled" && qK(t) !== "needs-approval"));
  if (A.length === 0) {
    if (p && e !== "all" && y(e)) {
      if (f.some(Zo)) return r(F2e(e));
      return r(_1(e));
    }
    if (!p && e !== "all" && !y(e)) return r(N2e(e));
    if (e === "all") {
      let t = Vge(f, p, y);
      if (t !== null) {
        let m = p ? Q(f, (v) => z(v, y)) : 0;
        return r(m > 0 ? `${t} ${G(m)}` : t);
      }
    }
    if (p) {
      let t = Q(f, B);
      if (t > 0)
        return r(
          e === "all"
            ? `All MCP servers are already enabled, but ${G(t)}`
            : U(`"${u(e)}" is already enabled but not connected.`, ` Run \`/mcp reconnect ${e}\` to retry.`, e),
        );
    }
    return r(
      e === "all"
        ? `All MCP servers are already ${p ? "enabled" : "disabled"}.`
        : `"${u(e)}" is already ${p ? "enabled" : "disabled"}.`,
    );
  }
  let D = e === "all" ? Vge(f, p, y) : null,
    k = await Promise.allSettled(A.map((t) => _(t.name))),
    R = Q(k, (t) => t.status === "fulfilled"),
    T = p ? Q(k, (t) => t.status === "fulfilled" && t.value.type === "connected") : R,
    W = p ? "Enabled" : "Disabled",
    H = p && T < R ? ` (${R - T} enabled but not yet connected)` : "";
  if (e !== "all") {
    if (!p)
      return r(
        R > 0
          ? `Disabled "${u(e)}".`
          : `Couldn't disable "${u(e)}" \u2014 it may have been removed, or its configuration couldn't be read. Run \`/mcp\` in the terminal to check.`,
      );
    let t = k[0];
    if (t?.status !== "fulfilled") return j("enable", e, t?.reason, { persistsOffBox: mo(b.session) });
    let m = t.value.type,
      v =
        m === "needs-auth"
          ? "Authenticate with `/mcp` in the terminal."
          : "Check its config with `/mcp` in the terminal.";
    return r(
      m === "connected"
        ? `Enabled "${u(e)}".`
        : `Enabled "${u(e)}", but it isn't connected yet${m !== "failed" ? ` (${I[m]})` : ""}. ${v}`,
    );
  }
  let F = A.length - R;
  return r(
    `${W} ${R} MCP server(s)${H}` +
      (F > 0 ? ` (${F} couldn't be changed)` : "") +
      "." +
      (D !== null ? ` ${D}` : "") +
      " Run `/mcp` in the terminal to see status.",
  );
}
function u(o) {
  return Rr(o);
}
function U(o, b, C) {
  let i = `${o}${b}`;
  return pV(C) && [...i].length <= 1024 ? i : o;
}
function r(o) {
  return { type: "text", value: o };
}
function j(o, b, C, i) {
  if (C instanceof js) return r(Da(l(C), void 0, "none"));
  if (i.persistsOffBox)
    return (
      n(`mcp ${o} refused for ${Qn(b)}: ${l(C)}`, { level: "error" }),
      r(`Couldn't ${o} "${u(b)}" (detail withheld on this connection). Run \`/mcp\` in the terminal to check.`)
    );
  return r(`Couldn't ${o} "${u(b)}" \u2014 ${Da(l(C))}. Run \`/mcp\` in the terminal to check.`);
}
function B(o) {
  return (o.type === "failed" && !Kb(o)) || o.type === "needs-auth";
}
function z(o, b) {
  return B(o) && !b(o.name);
}
function G(o) {
  return `${o} ${o === 1 ? "isn't" : "aren't"} connected \u2014 reply \`/mcp reconnect all\` here to retry.`;
}
export { ae as call };
