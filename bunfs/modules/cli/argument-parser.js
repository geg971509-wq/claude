// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
function parseAgentViewArguments(args) {
  let hasAgentsPositional = false;
  let cwdFilter;
  const config = {
    addDir: [],
    pluginDir: [],
    pluginDirNoMcp: [],
    settings: void 0,
    mcpConfig: [],
    strictMcpConfig: false,
    restricted: false,
  };
  const rest = [];
  const valueHandlers = {
    "--cwd": (value) => {
      cwdFilter = value;
    },
    "--settings": (value) => {
      config.settings = value;
    },
    "--add-dir": (value) => config.addDir.push(value),
    "--plugin-dir": (value) => config.pluginDir.push(value),
    "--plugin-dir-no-mcp": (value) => config.pluginDirNoMcp.push(value),
    "--mcp-config": (value) => config.mcpConfig.push(value),
  };

  for (let index = 0; index < args.length; index++) {
    const argument = args[index];
    if (argument === "agents" && !hasAgentsPositional) {
      hasAgentsPositional = true;
      continue;
    }
    if (argument === "--strict-mcp-config") {
      config.strictMcpConfig = true;
      continue;
    }
    if (argument === "--restricted") {
      config.restricted = true;
      continue;
    }

    const equalsIndex = argument.indexOf("=");
    const flag = equalsIndex === -1 ? argument : argument.slice(0, equalsIndex);
    const handleValue = Object.hasOwn(valueHandlers, flag) ? valueHandlers[flag] : void 0;
    if (handleValue) {
      if (equalsIndex !== -1) handleValue(argument.slice(equalsIndex + 1));
      else if (index + 1 < args.length) handleValue(args[++index]);
      else rest.push(argument);
      continue;
    }
    rest.push(argument);
  }

  return { hasAgentsPositional, cwdFilter, config, rest };
}

function resolveDispatchConfigPaths(config, resolvePath) {
  const resolveValue = (value, allowJson) =>
    value === "" || (allowJson && value.trimStart().startsWith("{")) ? value : resolvePath(value);

  return {
    settings: config.settings === void 0 ? void 0 : resolveValue(config.settings, true),
    pluginDir: config.pluginDir.map((value) => resolveValue(value, false)),
    pluginDirNoMcp: config.pluginDirNoMcp.map((value) => resolveValue(value, false)),
    addDir: config.addDir.map((value) => resolveValue(value, false)),
    mcpConfig: config.mcpConfig.map((value) => resolveValue(value, true)),
    strictMcpConfig: config.strictMcpConfig,
    restricted: config.restricted,
  };
}

function buildDispatchExtraArgs(config) {
  return [
    ...(config.settings ? ["--settings", config.settings] : []),
    ...config.pluginDir.flatMap((value) => ["--plugin-dir", value]),
    ...config.pluginDirNoMcp.flatMap((value) => ["--plugin-dir-no-mcp", value]),
    ...config.addDir.flatMap((value) => ["--add-dir", value]),
    ...config.mcpConfig.flatMap((value) => ["--mcp-config", value]),
    ...(config.strictMcpConfig ? ["--strict-mcp-config"] : []),
    ...(config.restricted ? ["--restricted"] : []),
  ];
}

function extractDaemonArguments(args) {
  let index = 0;
  while (
    args[index] === "--dangerously-skip-permissions" ||
    args[index] === "--allow-dangerously-skip-permissions"
  )
    index++;
  return args[index] === "daemon" ? args.slice(index + 1) : null;
}

function validateHandleUriArguments(argv) {
  const handleUriIndex = argv.indexOf("--handle-uri");
  if (handleUriIndex === -1 || !argv[handleUriIndex + 1]) return null;
  if (argv.length > handleUriIndex + 2)
    return (
      `claude: rejected deep-link invocation \u2014 unexpected arguments after the URI.\n` +
      "The OS protocol handler passes exactly `--handle-uri <uri>`; extra arguments indicate argument injection via the URL. If invoking --handle-uri manually, place other flags before it."
    );
  return null;
}

export {
  parseAgentViewArguments,
  resolveDispatchConfigPaths,
  buildDispatchExtraArgs,
  extractDaemonArguments,
  validateHandleUriArguments,
  parseAgentViewArguments as XCt,
  resolveDispatchConfigPaths as xve,
  buildDispatchExtraArgs as Ive,
  extractDaemonArguments as acr,
  validateHandleUriArguments as YCt,
};
