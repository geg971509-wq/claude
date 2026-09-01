// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
function XCt(n) {
  let i = false,
    r,
    t = {
      addDir: [],
      pluginDir: [],
      pluginDirNoMcp: [],
      settings: void 0,
      mcpConfig: [],
      strictMcpConfig: false,
      restricted: false,
    },
    g = [],
    a = {
      "--cwd": (e) => {
        r = e;
      },
      "--settings": (e) => {
        t.settings = e;
      },
      "--add-dir": (e) => t.addDir.push(e),
      "--plugin-dir": (e) => t.pluginDir.push(e),
      "--plugin-dir-no-mcp": (e) => t.pluginDirNoMcp.push(e),
      "--mcp-config": (e) => t.mcpConfig.push(e),
    };
  for (let e = 0; e < n.length; e++) {
    let s = n[e];
    if (s === "agents" && !i) {
      i = true;
      continue;
    }
    if (s === "--strict-mcp-config") {
      t.strictMcpConfig = true;
      continue;
    }
    if (s === "--restricted") {
      t.restricted = true;
      continue;
    }
    let o = s.indexOf("="),
      p = o === -1 ? s : s.slice(0, o),
      l = Object.hasOwn(a, p) ? a[p] : void 0;
    if (l) {
      if (o !== -1) l(s.slice(o + 1));
      else if (e + 1 < n.length) l(n[++e]);
      else g.push(s);
      continue;
    }
    g.push(s);
  }
  return { hasAgentsPositional: i, cwdFilter: r, config: t, rest: g };
}
function xve(n, i) {
  let r = (t, g) => (t === "" || (g && t.trimStart().startsWith("{")) ? t : i(t));
  return {
    settings: n.settings === void 0 ? void 0 : r(n.settings, true),
    pluginDir: n.pluginDir.map((t) => r(t, false)),
    pluginDirNoMcp: n.pluginDirNoMcp.map((t) => r(t, false)),
    addDir: n.addDir.map((t) => r(t, false)),
    mcpConfig: n.mcpConfig.map((t) => r(t, true)),
    strictMcpConfig: n.strictMcpConfig,
    restricted: n.restricted,
  };
}
function Ive(n) {
  return [
    ...(n.settings ? ["--settings", n.settings] : []),
    ...n.pluginDir.flatMap((i) => ["--plugin-dir", i]),
    ...n.pluginDirNoMcp.flatMap((i) => ["--plugin-dir-no-mcp", i]),
    ...n.addDir.flatMap((i) => ["--add-dir", i]),
    ...n.mcpConfig.flatMap((i) => ["--mcp-config", i]),
    ...(n.strictMcpConfig ? ["--strict-mcp-config"] : []),
    ...(n.restricted ? ["--restricted"] : []),
  ];
}
function acr(n) {
  let i = 0;
  while (n[i] === "--dangerously-skip-permissions" || n[i] === "--allow-dangerously-skip-permissions") i++;
  return n[i] === "daemon" ? n.slice(i + 1) : null;
}
function YCt(n) {
  let i = n.indexOf("--handle-uri");
  if (i === -1 || !n[i + 1]) return null;
  if (n.length > i + 2)
    return (
      `claude: rejected deep-link invocation \u2014 unexpected arguments after the URI.
` +
      "The OS protocol handler passes exactly `--handle-uri <uri>`; extra arguments indicate argument injection via the URL. If invoking --handle-uri manually, place other flags before it."
    );
  return null;
}
export { XCt, xve, Ive, acr, YCt };
