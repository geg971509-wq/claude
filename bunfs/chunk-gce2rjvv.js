// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Se, Cu } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { ho } from "/$bunfs/root/chunk-37pvmyqb.js";
import { rY } from "/$bunfs/root/chunk-5n1tbe50.js";
import {
  DL,
  mE,
  Ele,
  Xct,
  o1t,
  Psn,
  Ale,
  Yct,
  s7,
  bv,
  j4n,
  eqn,
  tPe,
  DSe,
  wpt,
  Qu,
  WGn,
  Dh,
  Ipt,
  gcn,
} from "/$bunfs/root/chunk-zze8764r.js";
import { pt } from "/$bunfs/root/chunk-w3c6n7jh.js";
import { l6, c6, b_ } from "/$bunfs/root/chunk-a7wreksn.js";
import { Q } from "/$bunfs/root/chunk-wag5ye9w.js";
async function xHt(t, r) {
  return 0;
}
async function D0(t, r, u, m = {}) {
  let d = m.applyStagedInstalls ?? !0;
  if ((n("refreshActivePlugins: clearing all plugin caches"), d)) WGn();
  if ((Qu(r, u), d)) j4n();
  let o = await Dh(r, u);
  eqn(), pt.refreshConfig();
  let [p, y, f] = await Promise.all([DSe(r), wpt(r), mE(Se(), r)]),
    { enabled: i, disabled: g, errors: w, warnings: a } = o,
    k = [],
    [L, R] = await Promise.all([
      Promise.all(
        i.map(async (e) => {
          if (e.mcpServers) return Object.keys(e.mcpServers).length;
          let c = await DL(e, k, r);
          if (c) e.mcpServers = c;
          return c ? Object.keys(c).length : 0;
        }),
      ),
      Promise.all(
        i.map(async (e) => {
          if (e.lspServers) return Object.keys(e.lspServers).length;
          let c = await Ele(e, k, r);
          if (c) e.lspServers = c;
          return c ? Object.keys(c).length : 0;
        }),
      ),
    ]),
    b = L.reduce((e, c) => e + c, 0),
    _ = R.reduce((e, c) => e + c, 0);
  await xHt(i, k);
  let P = [...a, ...Xct(i)],
    S = [...w, ...k];
  t((e) => ({
    ...e,
    plugins: {
      ...e.plugins,
      enabled: i,
      disabled: g,
      commands: p,
      errors: O(e.plugins.errors, S),
      warnings: M(e.plugins.warnings, P),
      needsRefresh: !1,
    },
    agentDefinitions: f,
    mcp: { ...e.mcp, pluginReconnectKey: e.mcp.pluginReconnectKey + 1 },
  })),
    Yct(r, u);
  let A = !1;
  try {
    await s7(r, u);
  } catch (e) {
    (A = !0), h(e), n(`refreshActivePlugins: loadPluginHooks failed: ${l(e)}`);
  }
  let j = i.reduce((e, c) => {
    if (!c.hooksConfig) return e;
    return e + Object.values(c.hooksConfig).reduce((F, C) => F + (C?.reduce((I, D) => I + D.hooks.length, 0) ?? 0), 0);
  }, 0);
  return (
    bv.emit(),
    n(
      `refreshActivePlugins: ${i.length} enabled, ${p.length} commands, ${y.length} skills, ${f.allAgents.length} agents, ${j} hooks, ${b} MCP, ${_} LSP`,
    ),
    {
      enabled_count: Q(i, (e) => e.isBuiltin !== !0),
      disabled_count: Q(g, (e) => e.isBuiltin !== !0),
      command_count: p.length,
      skill_count: y.length,
      agent_count: f.allAgents.length,
      hook_count: j,
      mcp_count: b,
      lsp_count: _,
      error_count: S.length + (A ? 1 : 0),
      errors: S,
      warnings: P,
      agentDefinitions: f,
      pluginCommands: p,
    }
  );
}
function O(t, r) {
  let u = t.filter((o) => o.source === "lsp-manager" || o.source.startsWith("plugin:")),
    m = new Set(r.map(E));
  return [...u.filter((o) => !m.has(E(o))), ...r];
}
function E(t) {
  return t.type === "generic-error" ? `generic-error:${t.source}:${t.error}` : `${t.type}:${t.source}`;
}
function M(t, r) {
  let u = t.filter((o) => o.source.startsWith("plugin:")),
    m = new Set(r.map((o) => `${o.type}:${o.source}`));
  return [...u.filter((o) => !m.has(`${o.type}:${o.source}`)), ...r];
}
async function NQ(t) {
  let r = new Set(t.mcpClients.filter((a) => a.config.pluginSource !== void 0).map((a) => a.name)),
    u,
    m = () => (u ??= Ipt(t.storageV5)),
    d = await gcn(t.dynamicMcpConfig ?? {}, t.storageV5, m),
    o = [...d].filter((a) => !r.has(a)).sort(),
    p = [...r].filter((a) => !d.has(a)).sort(),
    y = o.length > 0 || p.length > 0,
    f = b_() && c6(t.model) && !l6(t.model),
    i = Cu() > 0,
    g = null;
  if (tPe() && !f && i && !ho("lspServers")) {
    let a = Psn()
      ? { hasServers: !1, loaderFailed: !1, loaderFailedApplyHealable: !1, derivationFailed: !1 }
      : await T(m, t.storageV5, t.credentials);
    if (!Ale()) {
      if (a.hasServers) g = "adds";
      else if (a.loaderFailedApplyHealable) g = "may-add";
    } else if (!a.hasServers && !a.derivationFailed) {
      if (a.loaderFailedApplyHealable) g = "may-remove";
      else if (!a.loaderFailed) g = "removes";
    }
  }
  return {
    mcpServersAdded: o,
    mcpServersRemoved: p,
    toolSearchEnabled: f,
    lspToolChange: g,
    wouldInvalidateCache: (y || g !== null) && !f && i,
  };
}
async function T(t, r, u) {
  let { enabled: m, errors: d } = await t(),
    o = !1,
    p = d.some(rY),
    y = d.some(
      (i) =>
        rY(i) &&
        !(i.type === "plugin-not-installed" && i.registryReadFailed !== !0) &&
        i.type !== "marketplace-not-found" &&
        i.type !== "dependency-version-unsatisfied" &&
        !(i.type === "dependency-unsatisfied" && i.reason !== "not-found"),
    ),
    f = !1;
  for (let i of m) {
    let g = [];
    try {
      let w = await o1t(i, g, r, u);
      if (w !== void 0 && Object.keys(w).length > 0) o = !0;
    } catch {
      f = !0;
    }
    if (g.length > 0) f = !0;
  }
  return { hasServers: o, loaderFailed: p, loaderFailedApplyHealable: y, derivationFailed: f };
}
function YYt(t, r) {
  s("tengu_reload_plugins_cache_impact", {
    mcp_changed: t.mcpServersAdded.length > 0 || t.mcpServersRemoved.length > 0,
    lsp_changed: t.lspToolChange !== null,
    tool_search_on: t.toolSearchEnabled,
    warned: r.warned,
    forced: r.forced,
  });
}
export { xHt, D0, NQ, YYt };
