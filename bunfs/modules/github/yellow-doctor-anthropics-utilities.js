// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { hU, tkn } from "/$bunfs/root/chunk-qm65zb83.js";
import { er } from "/$bunfs/root/chunk-qk7r0t2g.js";
import { k } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { ae } from "/$bunfs/root/chunk-386w1sy8.js";
import { $V, El, Lre } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { Zs, Pn, Ic } from "/$bunfs/root/chunk-ca80fke8.js";
import { An } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { Ayn } from "/$bunfs/root/chunk-hz299nfa.js";
import { o, t, N_e } from "/$bunfs/root/chunk-he2phymk.js";
import { Vi } from "/$bunfs/root/chunk-n71q9jb8.js";
import { vp } from "/$bunfs/root/chunk-ph2x1s8t.js";
import { aee, Cin, vin, Qan, Zan } from "/$bunfs/root/chunk-zze8764r.js";
import { KJ, bme } from "/$bunfs/root/chunk-87pfeb5g.js";
import { J_e } from "/$bunfs/root/chunk-5g669xdp.js";
import { Fw } from "/$bunfs/root/chunk-x2q1t6es.js";
import { tB } from "/$bunfs/root/chunk-xgyzc8y0.js";
import { sse, $Mn, Tnt } from "/$bunfs/root/chunk-bf0mh6c1.js";
import { OP } from "/$bunfs/root/chunk-q3evfmyc.js";
import { eG } from "/$bunfs/root/chunk-dcss4tar.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { cwd as y } from "process";
import { stripVTControlCharacters as T } from "util";
import { createInterface as A } from "readline";
function gke(u, d = process.stdin) {
  let n = () => {},
    f = new Promise((m) => {
      n = m;
    }),
    l = A({ input: d, output: process.stdout });
  return (
    l.question(`${u} [y/N] `, (m) => {
      let p = m.trim().toLowerCase();
      n(p === "y" || p === "yes"), l.close();
    }),
    l.once("close", () => n(false)),
    f
  );
}
function kTr() {
  return N_e({ ...Fw(false), patchConsole: false });
}
function Nur(u) {
  return { ok: true, days: tkn, seconds: hU };
}
async function HTr(u, d) {
  s("tengu_setup_token_command", {});
  let n = Nur(d?.expiresInDays);
  if (!n.ok) {
    u.unmount(),
      process.stderr.write(`${n.message}
`),
      await Pn("cli_setup_token", n.errorCode),
      await Vi(1);
    return;
  }
  let f = Lre(true);
  if (!f.valid)
    u.unmount(),
      process.stderr.write(`${f.message}
setup-token creates a long-lived Claude.ai subscription token, which this policy does not permit.
`),
      await Pn("cli_setup_token", "force_login_method_refused"),
      await Vi(1);
  let l = !El(),
    { ConsoleOAuthFlow: m } = await import("/$bunfs/root/chunk-z6h08h2s.js"),
    p = G(),
    g = false;
  if (
    (await new Promise((h) => {
      u.render(
        e(vp, {
          session: p,
          onChangeAppState: (i) => KJ(i, p),
          children: r(o, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(tB, {}),
              l &&
                r(o, {
                  flexDirection: "column",
                  children: [
                    e(t, {
                      color: "warning",
                      children:
                        "Warning: You already have authentication configured via environment variable or API key helper.",
                    }),
                    e(t, {
                      color: "warning",
                      children: "The setup-token command will create a new OAuth token which you can use instead.",
                    }),
                  ],
                }),
              r(o, {
                paddingLeft: 1,
                flexDirection: "column",
                gap: 1,
                children: [
                  r(t, {
                    bold: true,
                    children: [
                      "This will guide you through long-lived (",
                      n.days === 365 ? "1-year" : `${n.days}-day`,
                      ") auth token setup for your Claude account. Claude subscription required.",
                    ],
                  }),
                  e(m, {
                    onDone: () => {
                      h();
                    },
                    onAccountOnHold: () => {
                      (g = true), h();
                    },
                    mode: "setup-token",
                    expiresIn: n.seconds,
                    urlOutdent: 1,
                  }),
                ],
              }),
            ],
          }),
        }),
      );
    }),
    u.unmount(),
    g)
  ) {
    await Pn("cli_setup_token", "account_on_hold"), await Vi(1);
    return;
  }
  await Zs("cli_setup_token"), await Vi(0);
}
async function xTr(u) {
  s("tengu_doctor_command", {});
  let d;
  try {
    let n = await J_e({ probeKeychain: true, storageV5: u }),
      f = OP(),
      l = [
        "Claude Code doctor",
        "",
        `Running: ${n.installationType} (${n.version})`,
        ...({
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.252",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-08-31T16:02:57Z",
          GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
          HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.GIT_SHA
          ? [
              `Commit: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.252", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-08-31T16:02:57Z", GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.GIT_SHA.slice(0, 12)}`,
            ]
          : []),
        "Platform: darwin-arm64",
        ...(n.packageManager ? [`Package manager: ${c(n.packageManager)}`] : []),
        `Path: ${c(n.installationPath)}`,
        ...(n.invokedBinary !== n.installationPath ? [`Invoked: ${c(n.invokedBinary)}`] : []),
        `Config install method: ${c(n.configInstallMethod)}`,
        `Search: ${n.ripgrepStatus.working ? "OK" : "Not working"} (${n.ripgrepStatus.mode === "embedded" ? "bundled" : c(n.ripgrepStatus.systemPath || "system")})`,
        `Auto-updates: ${n.packageManager ? "Managed by package manager" : c(n.autoUpdates)}`,
        `Auto-update channel: ${f === "rc" ? "slow" : f}`,
        `Last update attempt: ${S(n.lastUpdateResult)}`,
      ],
      m = sse();
    if (m) l.push(`Managed settings (remote): ${c(Tnt(m))}`);
    else if ($Mn()) l.push("Managed settings (remote): checking\u2026 (fetch in progress; re-run in a moment)");
    let { statusNotices: p, invalidEntries: g } = bme(eG().errors);
    if (g.length > 0) {
      l.push("", ae.yellow("Invalid settings"));
      for (let i of g) {
        let _ = [i.file, i.path].flatMap((w) => (w ? [c(w)] : [])).join(" \u203A ");
        l.push(
          `- ${_ ? `${_}: ` : ""}${c(i.message)}${
            i.suggestion
              ? `
  Suggested fix: ${c(i.suggestion)}`
              : ""
          }`,
        );
      }
    }
    if (p.length > 0) {
      l.push("");
      for (let i of p) l.push(`- ${c(i.message)}`);
    }
    let h = [
      { name: "BASH_MAX_OUTPUT_LENGTH", default: vin, upperLimit: Cin },
      { name: "TASK_MAX_OUTPUT_LENGTH", default: Zan, upperLimit: Qan },
      { name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS", ...$V("claude-opus-4-6") },
    ]
      .map((i) => ({ name: i.name, ...aee(i.name, process.env[i.name], i.default, i.upperLimit) }))
      .filter((i) => i.status !== "valid");
    if (h.length > 0) {
      l.push("", ae.yellow("Environment variables"));
      for (let i of h) l.push(`- ${i.name}: ${c(i.message ?? i.status)}`);
    }
    if (n.multipleInstallations.length > 1) {
      l.push("", ae.yellow("Multiple installations found"));
      for (let i of n.multipleInstallations) l.push(`- ${c(`${i.type} at ${i.path}`)}`);
    }
    try {
      let i = await Ayn();
      if ((l.push("", "Remote Control"), i.inRemoteSession))
        l.push(
          "Inside a cloud session \u2014 Remote Control is unavailable here. Use it from the local session instead.",
        );
      else {
        l.push(c(i.disabledReason ?? "Control this session from claude.ai/code or the Claude mobile app"));
        for (let _ of i.checks.filter((w) => !w.ok)) l.push(c(`- ${_.label}${_.detail ? ` (${_.detail})` : ""}`));
      }
    } catch {
      await Ic("cli_doctor", "bridge_info_unavailable");
    }
    if (n.warnings.length > 0) {
      l.push("", ae.yellow(`${n.warnings.length} ${k(n.warnings.length, "warning")} found`));
      for (let i of n.warnings) l.push(`- ${c(i.issue)}`, `  Fix: ${c(i.fix)}`);
    } else l.push("", "No installation issues found.");
    l.push("", "For a full setup checkup that can also fix issues, run /doctor in a Claude Code session."),
      er(
        l.join(`
`) +
          `
`,
      ),
      (d = {
        warnings: n.warnings.length,
        settings_errors: g.length,
        env_var_issues: h.length,
        multiple_installs: n.multipleInstallations.length > 1,
        ripgrep_working: n.ripgrepStatus.working,
      });
  } catch (n) {
    throw (await Pn("cli_doctor", "diagnostic_failed"), n);
  }
  await Zs("cli_doctor", d), await Vi(0);
}
function c(u) {
  return An(T(u)).replaceAll("`", "");
}
function S(u) {
  if (!u) return "none recorded";
  let d = c(u.timestamp.slice(0, 10));
  switch (u.outcome) {
    case "success":
      return u.version_to ? `success \u2192 ${c(u.version_to)} (${d})` : `success (${d})`;
    case "failed":
      return `failed (${c(u.status)}) \u2014 ${d}`;
  }
}
async function ITr(u, d, n) {
  if (a.DISABLE_UPDATES)
    process.stdout.write(`Updates are disabled by your administrator. Contact your IT team to get the latest version.
`),
      process.exit(0);
  let { setup: f } = await import("/$bunfs/root/chunk-x5de9qrh.js");
  await f(y(), "default", false, false, void 0, false, void 0, void 0, void 0, n);
  let { install: l } = await import("/$bunfs/root/chunk-q4bkz7tv.js");
  await new Promise((m) => {
    let p = [];
    if (u) p.push(u);
    if (d.force) p.push("--force");
    l.call(
      async (g) => {
        if (g.includes("failed")) await Pn("cli_install", "cli_install_failed");
        else await Zs("cli_install");
        await Vi(g.includes("failed") ? 1 : 0), m();
      },
      { storageV5: n },
      p,
    );
  });
}
export { gke, kTr, Nur, HTr, xTr, ITr };
