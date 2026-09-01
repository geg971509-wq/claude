// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { w } from "/$bunfs/root/chunk-4xj01xwv.js";
import { XCt, xve, Ive, acr, YCt } from "/$bunfs/root/chunk-jgrgqwj9.js";
import { k0 } from "/$bunfs/root/chunk-phnty5cg.js";
import { JCt } from "/$bunfs/root/chunk-fxb0gsq0.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
function Z() {
  try {
    process.cwd();
    return;
  } catch (n) {
    let t = n instanceof Error && "code" in n && typeof n.code === "string" ? n.code : void 0;
    if (t === "ENOENT")
      return "The current directory no longer exists (it was deleted or moved). Start Claude Code from an existing directory.";
    return `Can't read the current directory${t ? ` (${t})` : ""}. Start Claude Code from a different directory.`;
  }
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
JCt();
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  let n = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = n ? `${n} --max-old-space-size=8192` : "--max-old-space-size=8192";
}
function tt(n) {
  for (let t = 0; t < n.length; t++) {
    let E = n[t];
    if (
      E === "--debug" ||
      E === "-d" ||
      E === "--debug-to-stderr" ||
      E === "-d2e" ||
      E.startsWith("--debug=") ||
      E.startsWith("--debug-file=")
    )
      continue;
    if (E === "--debug-file" && t + 1 < n.length) {
      t++;
      continue;
    }
    return false;
  }
  return true;
}
function Dt(n) {
  let t,
    E,
    m,
    x,
    s,
    d = [];
  for (let u = 0; u < n.length; u++) {
    let M = n[u],
      R = M.indexOf("="),
      [F, b] = R > 0 ? [M.slice(0, R), M.slice(R + 1)] : [M, void 0],
      B = b !== void 0 || u + 1 < n.length;
    if (F === "--dangerously-skip-permissions") t = "bypassPermissions";
    else if (F === "--allow-dangerously-skip-permissions") s = true;
    else if (F === "--permission-mode" && B) t = b ?? n[++u];
    else if (F === "--model" && B) E = b ?? n[++u];
    else if (F === "--effort" && B) m = b ?? n[++u];
    else if (F === "--agent" && B) x = b ?? n[++u];
    else d.push(M);
  }
  return {
    dispatchDefaults:
      t || E || m || x || s ? { permissionMode: t, model: E, effort: m, agent: x, allowBypass: s } : void 0,
    rest: d,
  };
}
async function At() {
  let n = YCt(process.argv);
  if (n) console.error(n), process.exit(1);
  let t = process.argv.slice(2);
  if (
    (t.length === 1 || (t.length === 2 && t[1] === "--verbose")) &&
    (t[0] === "--version" || t[0] === "-v" || t[0] === "-V")
  ) {
    if (
      (console.log(
        `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.252", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-08-31T16:02:57Z", GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION} (Claude Code)${k0()}`,
      ),
      t.length === 2 &&
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.252",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-08-31T16:02:57Z",
          GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
          HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.GIT_SHA)
    )
      console.log(
        `Commit: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.252", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-08-31T16:02:57Z", GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.GIT_SHA}`,
      );
    return;
  }
  let E = Z();
  if (E) console.error(E), process.exit(1);
  let { profileCheckpoint: m } = await import("/$bunfs/root/chunk-hbpx3g37.js");
  m("cli_entry");
  let s =
    !(t[0] === "--preload" || t[0] === "--bg-spare") && process.env.CLAUDE_CODE_HOVER_REST
      ? (await import("/$bunfs/root/chunk-tjdjr3ny.js")).pinStorageV5FromEnv()
      : void 0;
  if (process.argv[2] === "--eval-mock-server") {
    m("cli_eval_mock_server_path");
    let { runEvalMockServer: e } = await import("/$bunfs/root/chunk-kcs0zbtc.js");
    try {
      await e(process.argv[3], process.argv[4]);
    } catch (r) {
      console.error(`--eval-mock-server: ${r instanceof Error ? r.message : String(r)}`), (process.exitCode = 1);
    }
    return;
  }
  if (process.argv[2] === "--claude-in-chrome-mcp") {
    m("cli_claude_in_chrome_mcp_path");
    let { runClaudeInChromeMcpServer: e } = await import("/$bunfs/root/chunk-nppq3bke.js");
    await e(s);
    return;
  } else if (process.argv[2] === "--chrome-native-host") {
    m("cli_chrome_native_host_path");
    let { runChromeNativeHost: e } = await import("/$bunfs/root/chunk-bhpe7sdr.js");
    await e();
    return;
  } else if (process.argv[2] === "--computer-use-mcp") {
    m("cli_computer_use_mcp_path");
    let { runComputerUseMcpServer: e } = await import("/$bunfs/root/chunk-zxbpnmgp.js");
    await e(s);
    return;
  }
  if (t[0] === "--daemon-worker") {
    let { loadFastPathPolicy: e } = await import("/$bunfs/root/chunk-bx27bawb.js"),
      r = await e(s);
    if (r)
      process.stderr.write(`${r}
`);
    let { runDaemonWorker: o } = await import("/$bunfs/root/chunk-s93dbwpe.js");
    await o(t[1], s);
    return;
  }
  if (t[0] === "--bg-pty-host") {
    let { ensureFastPathSettingsLoaded: e } = await import("/$bunfs/root/chunk-bx27bawb.js");
    try {
      await e(s);
    } catch (o) {
      process.stderr.write(`ptyHost: settings bootstrap threw (continuing; supervisor already gated): ${o?.stack ?? String(o)}
`);
    }
    let { runPtyHost: r } = await import("/$bunfs/root/chunk-w0692anq.js");
    await r(t.slice(1));
    return;
  }
  if (t[0] === "--bg-spare") {
    let { ensureFastPathSettingsLoaded: e } = await import("/$bunfs/root/chunk-bx27bawb.js");
    await e(void 0);
    let { runBgSpare: r } = await import("/$bunfs/root/chunk-6cd8497x.js");
    await r(t.slice(1));
    return;
  }
  if (t[0] === "--preload") {
    let { ensureFastPathSettingsLoaded: e } = await import("/$bunfs/root/chunk-bx27bawb.js");
    await e(void 0);
    let { runPreload: r } = await import("/$bunfs/root/chunk-29kgpmzr.js");
    await r(t.slice(1));
    return;
  }
  if (t[0] === "remote-control" || t[0] === "rc" || t[0] === "remote" || t[0] === "sync" || t[0] === "bridge") {
    m("cli_bridge_path");
    let { loadFastPathPolicy: e } = await import("/$bunfs/root/chunk-bx27bawb.js");
    {
      let v = await e(s);
      if (v) {
        let { exitWithError: f } = await import("/$bunfs/root/chunk-as286awp.js");
        f(v);
      }
    }
    let { restoreGatewayAuthForFastPath: r } = await import("/$bunfs/root/chunk-v286m7rh.js");
    try {
      await r();
    } catch (v) {
      let { exitWithError: f } = await import("/$bunfs/root/chunk-as286awp.js"),
        { errorMessage: I } = await import("/$bunfs/root/chunk-dynzywak.js");
      f(`Error: ${I(v)}`);
    }
    let {
        refuseRemoteControlLocally: o,
        refuseRemoteControlIneligible: y,
        startRemoteControl: A,
      } = await import("/$bunfs/root/chunk-zrht8ww5.js"),
      L = await o(),
      [{ pinStorageV5: C }, { seedInstallIDs: a }] = await Promise.all([
        import("/$bunfs/root/chunk-9d6fh324.js"),
        import("/$bunfs/root/chunk-rx63xaph.js"),
      ]),
      i = C(s);
    if (O() && i !== void 0) {
      let [
          { credentialsStoreFor: v },
          { setGrowthBookCredentials: f, setGrowthBookStorageBackend: I },
          { composePolicyLimitsClient: H, primePolicyLimitsCache: j },
          { primeFastPathCredentials: W },
        ] = await Promise.all([
          import("/$bunfs/root/chunk-gbqdry83.js"),
          import("/$bunfs/root/chunk-2sq45cbb.js"),
          import("/$bunfs/root/chunk-qvdq8j6c.js"),
          import("/$bunfs/root/chunk-f9k2gea5.js"),
        ]),
        V = v(i);
      f(V), I(i), H({ storageV5: i, credentials: V }), await W(V), await j(i), await a(i);
    }
    let g = await y(L),
      [
        { initSinks: c },
        { initialize1PEventLogging: _ },
        { credentialsStoreFor: P },
        { initDefaultDebugLog: D },
        { watchGlobalConfigThroughStorage: k },
      ] = await Promise.all([
        import("/$bunfs/root/chunk-ptryj1qs.js"),
        import("/$bunfs/root/chunk-jn95py26.js"),
        import("/$bunfs/root/chunk-gbqdry83.js"),
        import("/$bunfs/root/chunk-170j88dd.js"),
        import("/$bunfs/root/chunk-rx63xaph.js"),
      ]);
    c();
    let S = P(i);
    if ((_(i), O() && i !== void 0)) D({ storageV5: i }), k(i);
    await A(g, t.slice(1), i, S);
    return;
  }
  {
    let e = acr(t);
    if (e !== null) {
      m("cli_daemon_path");
      let { ensureFastPathSettingsLoaded: r } = await import("/$bunfs/root/chunk-bx27bawb.js");
      await r(s);
      let { initSinks: o } = await import("/$bunfs/root/chunk-ptryj1qs.js");
      o();
      let { daemonMain: y } = await import("/$bunfs/root/chunk-bbh679v6.js");
      await y(e, s);
      return;
    }
  }
  if (
    t[0] === "logs" ||
    t[0] === "attach" ||
    t[0] === "stop" ||
    t[0] === "kill" ||
    t[0] === "respawn" ||
    t[0] === "rm" ||
    t.includes("--bg") ||
    t.includes("--background")
  ) {
    m("cli_bg_path");
    let { loadFastPathPolicy: e } = await import("/$bunfs/root/chunk-bx27bawb.js");
    {
      let i = await e(s),
        g = ["logs", "stop", "kill", "rm"].includes(t[0] ?? "");
      if (i)
        if (g)
          process.stderr.write(`${i}
`);
        else {
          let { exitWithError: c } = await import("/$bunfs/root/chunk-as286awp.js");
          c(i);
        }
    }
    let r = await import("/$bunfs/root/chunk-3474m0yz.js");
    if ((await r.ensureFleetGateHydrated(), !r.isAgentsFleetEnabled())) {
      let i = t[0],
        g =
          i !== void 0 && ["logs", "attach", "stop", "kill", "respawn", "rm"].includes(i)
            ? i
            : (t.find((c) => c === "--bg" || c === "--background" || c === "--routine" || c.startsWith("--routine=")) ??
              "--bg");
      return r.fleetGateRejected(g);
    }
    let [
        o,
        { pinStorageV5: y },
        { initDefaultDebugLog: A },
        { seedInstallIDs: L, watchGlobalConfigThroughStorage: C },
      ] = await Promise.all([
        import("/$bunfs/root/chunk-r0bajerb.js"),
        import("/$bunfs/root/chunk-9d6fh324.js"),
        import("/$bunfs/root/chunk-170j88dd.js"),
        import("/$bunfs/root/chunk-rx63xaph.js"),
      ]),
      a = y(s);
    if (O() && a !== void 0) {
      A({ storageV5: a }), C(a);
      let [
          { credentialsStoreFor: i },
          { setGrowthBookCredentials: g, setGrowthBookStorageBackend: c },
          { composePolicyLimitsClient: _, primePolicyLimitsCache: P },
          { primeFastPathCredentials: D },
        ] = await Promise.all([
          import("/$bunfs/root/chunk-gbqdry83.js"),
          import("/$bunfs/root/chunk-2sq45cbb.js"),
          import("/$bunfs/root/chunk-qvdq8j6c.js"),
          import("/$bunfs/root/chunk-f9k2gea5.js"),
        ]),
        k = i(a);
      g(k), c(a), _({ storageV5: a, credentials: k }), await D(k), await P(a), await L(a);
    }
    switch (t[0]) {
      case "logs":
      case "attach":
      case "stop":
      case "kill":
      case "respawn":
      case "rm": {
        let [
          { initializeAnalyticsSink: i },
          { initialize1PEventLogging: g, shutdown1PEventLogging: c },
          { shutdownDatadog: _ },
          { sleep: P },
        ] = await Promise.all([
          import("/$bunfs/root/chunk-pfm44srq.js"),
          import("/$bunfs/root/chunk-jn95py26.js"),
          import("/$bunfs/root/chunk-wk4g4k1s.js"),
          import("/$bunfs/root/chunk-j3e3xnzy.js"),
        ]);
        if ((i(), g(a), t[0] === "logs")) await o.logsHandler(t[1], a);
        else if (t[0] === "attach") await o.attachHandler(t[1], a);
        else if (t[0] === "respawn") await o.respawnHandler(t[1], a);
        else if (t[0] === "rm") await o.rmHandler(t[1], a);
        else await o.stopHandler(t[1], a);
        return (
          await Promise.race([Promise.all([c(), _()]), P(500, void 0, { unref: true })]).catch(() => {}),
          process.exit(process.exitCode ?? 0)
        );
      }
      default: {
        let [
          { initializeAnalyticsSink: i },
          { initialize1PEventLogging: g, shutdown1PEventLogging: c },
          { shutdownDatadog: _ },
          { logEvent: P },
          { sleep: D },
        ] = await Promise.all([
          import("/$bunfs/root/chunk-pfm44srq.js"),
          import("/$bunfs/root/chunk-jn95py26.js"),
          import("/$bunfs/root/chunk-wk4g4k1s.js"),
          import("/$bunfs/root/chunk-wzh402yr.js"),
          import("/$bunfs/root/chunk-j3e3xnzy.js"),
        ]);
        i(),
          g(a),
          P("tengu_background", { via_flag: true, via: w("flag") }),
          await o.handleBgFlag(t, a),
          await Promise.race([Promise.all([c(), _()]), D(500, void 0, { unref: true })]).catch(() => {}),
          process.exit(process.exitCode ?? 0);
      }
    }
    return;
  }
  let d = XCt(t);
  d.config.restricted ||= ["1", "true", "yes", "on"].includes(
    (process.env.CLAUDE_CODE_RESTRICTED ?? "").toLowerCase().trim(),
  );
  let { dispatchDefaults: u, rest: M } = Dt(d.rest),
    R = d.hasAgentsPositional && tt(M);
  if ((R || (tt(t) && process.stdin.isTTY)) && process.stdout.isTTY) {
    let { startCapturingEarlyInput: e, consumeEarlyInput: r } = await import("/$bunfs/root/chunk-wmawqmyv.js");
    e();
    let [{ startMdmRawRead: o }, { startKeychainPrefetch: y }] = await Promise.all([
      import("/$bunfs/root/chunk-cwwyxsy6.js"),
      import("/$bunfs/root/chunk-zf8bs9px.js"),
    ]);
    o(), y();
    let { enableConfigs: A, getGlobalConfig: L, seedInstallIDs: C } = await import("/$bunfs/root/chunk-rx63xaph.js"),
      a = false,
      i = false;
    try {
      await A(O() ? s?.backend : void 0), (i = L().defaultToAgentsView === true), (a = R || i);
    } catch {}
    if (a) {
      if (d.config.settings) {
        let { loadSettingsFromFlag: S } = await import("/$bunfs/root/chunk-p99abzsk.js");
        S(d.config.settings);
      }
      if (d.config.pluginDir.length > 0 || d.config.pluginDirNoMcp.length > 0) {
        let [{ setInlinePlugins: S, setInlinePluginsNoMcp: v }, { clearPluginCache: f }] = await Promise.all([
          import("/$bunfs/root/chunk-bb8gz7wa.js"),
          import("/$bunfs/root/chunk-9p2m1eg6.js"),
        ]);
        S(d.config.pluginDir), v(d.config.pluginDirNoMcp), f("claude agents --plugin-dir");
      }
      let { loadFastPathPolicy: g } = await import("/$bunfs/root/chunk-bx27bawb.js"),
        c = await g(s);
      if (c) {
        let { exitWithError: S } = await import("/$bunfs/root/chunk-as286awp.js");
        S(c);
      }
      {
        let { areSideloadFlagsDisabledByPolicy: S, sideloadFlagsBlockedMessage: v } = await import(
          "/$bunfs/root/chunk-xymxs76m.js"
        );
        if (S()) {
          let f = [];
          if (d.config.pluginDir.length > 0) f.push("--plugin-dir");
          if (d.config.pluginDirNoMcp.length > 0) f.push("--plugin-dir-no-mcp");
          if (f.length > 0) {
            let { exitWithError: I } = await import("/$bunfs/root/chunk-as286awp.js");
            I(v(f));
          }
        }
      }
      let {
        isAgentsFleetEnabled: _,
        ensureFleetGateHydrated: P,
        fleetGateRejected: D,
        consumeAgentViewRelaunchMarker: k,
      } = await import("/$bunfs/root/chunk-3474m0yz.js");
      if ((await P({ kickGrowthBook: false }), _())) {
        let [
            { applyFleetViewHostWindowsEnv: S },
            { createRoot: v },
            { getBaseRenderOptions: f },
            { resolve: I },
            {
              getRootSession: H,
              setCliSessionConfigCarried: j,
              setIsInteractive: W,
              setRestrictedSession: V,
              setSessionStartType: nt,
            },
            { cliCarriesSessionConfig: ct },
            { pinStorageV5: lt },
          ] = await Promise.all([
            import("/$bunfs/root/chunk-nnxz098p.js"),
            import("/$bunfs/root/chunk-rqhz2e1a.js"),
            import("/$bunfs/root/chunk-3kgq3kf4.js"),
            import("path"),
            import("/$bunfs/root/chunk-bb8gz7wa.js"),
            import("/$bunfs/root/chunk-wqhrar5b.js"),
            import("/$bunfs/root/chunk-9d6fh324.js"),
          ]),
          l = lt(s),
          G;
        if (O() && l !== void 0) {
          let [
            { credentialsStoreFor: p },
            { setGrowthBookCredentials: T, setGrowthBookStorageBackend: N },
            { primeFastPathCredentials: z },
          ] = await Promise.all([
            import("/$bunfs/root/chunk-gbqdry83.js"),
            import("/$bunfs/root/chunk-2sq45cbb.js"),
            import("/$bunfs/root/chunk-f9k2gea5.js"),
          ]);
          (G = p(l)), T(G), N(l), await z(G), await C(l);
        }
        import("/$bunfs/root/chunk-3y6mjrnj.js").then(({ resolveSetting: p }) => {
          let { value: T } = p("theme", "dark");
          if (T.startsWith("custom:")) import("/$bunfs/root/chunk-3rh7t1b9.js").then((N) => N.loadCustomThemes(l));
        });
        let pt = k();
        W(true), j(ct({ ...d.config, ...u })), V(d.config.restricted), nt("agents_view");
        let K = () => {};
        process.on("unhandledRejection", K);
        let q = Promise.resolve(),
          J = () => {},
          dt = new Promise((p) => {
            J = p;
          });
        setImmediate(async () => {
          if (O() && l !== void 0)
            try {
              let [{ credentialsStoreFor: p }, { composePolicyLimitsClient: T, primePolicyLimitsCache: N }] =
                await Promise.all([import("/$bunfs/root/chunk-gbqdry83.js"), import("/$bunfs/root/chunk-qvdq8j6c.js")]);
              T({ storageV5: l, credentials: p(l) }), await N(l);
            } catch (p) {
              import("/$bunfs/root/chunk-170j88dd.js").then(({ logForDebugging: T }) =>
                T(
                  `Policy limits: start-up composition on the agents path failed: ${p instanceof Error ? p.message : String(p)}`,
                  { level: "warn" },
                ),
              );
            }
          (q = Promise.all([
            import("/$bunfs/root/chunk-kpr5g6qh.js"),
            import("/$bunfs/root/chunk-k24tdfes.js"),
            import("/$bunfs/root/chunk-pfm44srq.js"),
            import("/$bunfs/root/chunk-jn95py26.js"),
            import("/$bunfs/root/chunk-wzh402yr.js"),
            import("/$bunfs/root/chunk-djy44t3h.js"),
            import("/$bunfs/root/chunk-2sq45cbb.js"),
            import("/$bunfs/root/chunk-6ap31m7z.js"),
            import("/$bunfs/root/chunk-rx63xaph.js"),
            import("/$bunfs/root/chunk-nyk3q9vf.js"),
            import("/$bunfs/root/chunk-q9mtfzh4.js"),
            import("/$bunfs/root/chunk-170j88dd.js"),
          ])
            .then(
              ([
                { setupGracefulShutdown: p },
                { initializeErrorLogSink: T },
                { initializeAnalyticsSink: N },
                { initialize1PEventLogging: z },
                { logEvent: ht },
                { captureTeammateModeSnapshotIfEnabled: Et },
                { initializeGrowthBook: Ct },
                { initializeTelemetryAfterTrust: _t },
                { checkHasTrustDialogAccepted: X, watchGlobalConfigThroughStorage: Pt },
                { applyConfigEnvironmentVariables: vt },
                { setRepoDetectionGuards: St },
                { initDefaultDebugLog: yt },
              ]) => {
                if (
                  (p({ storageV5: l, credentials: G }),
                  St({ trustProbe: X }),
                  Ct().catch(() => {}),
                  T(),
                  N(),
                  z(l),
                  O() && l !== void 0)
                )
                  yt({ storageV5: l }), Pt(l);
                return (
                  dt.then(() => {
                    if (X()) vt(), _t(l);
                  }),
                  ht("tengu_fleetview", { defaultToAgentsView: i, relaunch: pt }),
                  Et()
                );
              },
            )
            .finally(() => process.off("unhandledRejection", K))),
            import("/$bunfs/root/chunk-yz1cf4yc.js").then((p) => p.startBackgroundHousekeeping(H().host, l));
        }),
          r(),
          S();
        let U =
          u?.permissionMode === "bypassPermissions" || u?.allowBypass
            ? await import("/$bunfs/root/chunk-v2ty9dg7.js")
            : void 0;
        U?.refuseBypassUnderRoot(u);
        let Q = U?.applyBypassPolicyGate(u) ?? u,
          Y = await v(f(false)),
          { ensureAgentsWorkspaceTrust: mt, agentsTrustDecision: gt } = await import("/$bunfs/root/chunk-s0mn9e4d.js");
        if ((await mt(Y, gt(), l), J(), U)) await U.ensureAgentsBypassConsent(Y, Q, l);
        let ut = await import("/$bunfs/root/chunk-3474m0yz.js"),
          ft = {
            cwdFilter: d.cwdFilter,
            dispatchExtraArgs: Ive(xve(d.config, I)),
            dispatchDefaults: Q,
            entryChannel: ut.isListReturnRelaunch() ? "list_return" : R ? "cli_agents" : "default_home",
            storageV5: l,
            credentials: G,
          };
        {
          let { mountFleetViewWithComposerBack: p } = await import("/$bunfs/root/chunk-rm69t5h1.js");
          await p(Y, ft);
        }
        await q.catch(() => {});
        let { gracefulShutdown: wt } = await import("/$bunfs/root/chunk-kpr5g6qh.js");
        await wt(0, "other", { suppressResumeHint: true });
        return;
      }
      if (R) return D("claude agents");
    }
  }
  if (t[0] === "self-hosted-runner") {
    m("cli_self_hosted_runner_path");
    let e = t[1];
    if (e === "orchestrator") {
      let { selfHostedRunnerOrchestratorMain: o } = await import("/$bunfs/root/chunk-qvh3n20b.js");
      await o(t.slice(2));
      return;
    }
    if (e === "setup") {
      let { selfHostedRunnerSetupMain: o } = await import("/$bunfs/root/chunk-5hbn49ys.js");
      await o(t.slice(2), s);
      return;
    }
    if (e === "doctor") {
      let { selfHostedRunnerDoctorMain: o } = await import("/$bunfs/root/chunk-th763ajg.js");
      await o(t.slice(2), s);
      return;
    }
    if (e === "code-sign") {
      let { selfHostedRunnerCodeSignMain: o } = await import("/$bunfs/root/chunk-d5eky037.js");
      await o(t.slice(2));
      return;
    }
    if (e === "decode-token") {
      let { selfHostedRunnerDecodeTokenMain: o } = await import("/$bunfs/root/chunk-qyadhr6m.js");
      await o(t.slice(2));
      return;
    }
    let { selfHostedRunnerMain: r } = await import("/$bunfs/root/chunk-hd6k2f8f.js");
    await r(t.slice(1));
    return;
  }
  if (
    (t.includes("--tmux") || t.includes("--tmux=classic")) &&
    (t.includes("-w") || t.includes("--worktree") || t.some((e) => e.startsWith("--worktree=")))
  ) {
    m("cli_tmux_worktree_fast_path");
    let { enableConfigs: e, seedInstallIDs: r } = await import("/$bunfs/root/chunk-rx63xaph.js");
    await e(O() ? s?.backend : void 0);
    let { isWorktreeModeEnabled: o } = await import("/$bunfs/root/chunk-psj1xv3v.js");
    if (o()) {
      let [{ execIntoTmuxWorktree: y }, { pinStorageV5: A }, { initDefaultDebugLog: L }] = await Promise.all([
          import("/$bunfs/root/chunk-m941vsqa.js"),
          import("/$bunfs/root/chunk-9d6fh324.js"),
          import("/$bunfs/root/chunk-170j88dd.js"),
        ]),
        C = A(s),
        a;
      if (O() && C !== void 0) {
        L({ storageV5: C });
        let [
          { credentialsStoreFor: c },
          { setGrowthBookCredentials: _, setGrowthBookStorageBackend: P },
          { primeFastPathCredentials: D },
        ] = await Promise.all([
          import("/$bunfs/root/chunk-gbqdry83.js"),
          import("/$bunfs/root/chunk-2sq45cbb.js"),
          import("/$bunfs/root/chunk-f9k2gea5.js"),
        ]);
        (a = c(C)), _(a), P(C), await D(a), await r(C);
      }
      let i = await y(t, C, a);
      if (i.handled) return;
      let { exitWithError: g } = await import("/$bunfs/root/chunk-as286awp.js");
      g(i.error);
    }
  }
  if (t.length === 1 && (t[0] === "--update" || t[0] === "--upgrade"))
    process.argv = [process.argv[0], process.argv[1], "update"];
  let b = t.indexOf("--");
  if ((b === -1 ? t : t.slice(0, b)).includes("--bare")) process.env.CLAUDE_CODE_SIMPLE = "1";
  let {
    NON_REPL_SUBCOMMANDS: B,
    isMcpServeInvocation: et,
    isPluginEvalInvocation: it,
    isRemoteControlInvocation: ot,
  } = await import("/$bunfs/root/chunk-1cjxkcd1.js");
  if (
    !B.has(process.argv[2] ?? "") &&
    !et(process.argv.slice(2)) &&
    !it(process.argv.slice(2)) &&
    !ot(process.argv.slice(2))
  ) {
    let { startCapturingEarlyInput: e } = await import("/$bunfs/root/chunk-wmawqmyv.js");
    e();
  }
  let [{ startMdmRawRead: rt }, { startKeychainPrefetch: at }] = await Promise.all([
    import("/$bunfs/root/chunk-cwwyxsy6.js"),
    import("/$bunfs/root/chunk-zf8bs9px.js"),
  ]);
  rt(), at(), m("cli_before_main_import");
  let { main: st } = await import("/$bunfs/root/chunk-qmprj3b6.js");
  m("cli_after_main_import"), await st(s), m("cli_after_main_complete");
}
At();
