// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { jt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { Va, a } from "/$bunfs/root/chunk-fec4384a.js";
import { l, E } from "/$bunfs/root/chunk-ypdw393e.js";
import { Ct } from "/$bunfs/root/chunk-wkxx62a2.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { fS } from "/$bunfs/root/chunk-s28wf80n.js";
import { spawn as f } from "child_process";
import { isAbsolute as m } from "path";
import { createInterface as v } from "readline";
var T = "/root/.local/bin/vitals-emitter-guest",
  _ = "vitals-emitter-guest",
  o = 5000,
  d = 1000,
  c = 30000;
async function DZe(e) {
  let { log: r } = e;
  try {
    if (a.CLAUDE_CODE_DISABLE_VITALS_EMITTER || Ct())
      return r("[vitals] kill switch or essential-traffic-only set; guest vitals disabled"), null;
    let t = await w(e);
    if (!t) return null;
    let i = new u(t.binary, t.viaFallback, e);
    return await i.launch(), i.disabled ? null : i;
  } catch (t) {
    return r(`[vitals] not started: ${l(t)}`), null;
  }
}
async function w({ binaryResolution: e, log: r }) {
  let t = a.VITALS_EMITTER_BIN;
  if (t && !m(t))
    return r(`[vitals] VITALS_EMITTER_BIN must be an absolute path (got ${t}); guest vitals disabled`), null;
  switch (e) {
    case "pinned":
      if (!t)
        return (
          r("[vitals] VITALS_EMITTER_BIN not set; guest vitals disabled (this launcher does not search PATH)"), null
        );
      return { binary: t, viaFallback: false };
    case "search": {
      let i = t || (await Va(_));
      return i ? { binary: i, viaFallback: false } : { binary: T, viaFallback: true };
    }
  }
}
class u {
  binary;
  binaryViaFallback;
  options;
  child = null;
  spawnedAt = 0;
  respawnTimer = null;
  nextBackoffMs = d;
  stopping = false;
  disabled = false;
  reportedOk = false;
  reportedUnexpectedExit = false;
  constructor(e, r, t) {
    this.binary = e;
    this.binaryViaFallback = r;
    this.options = t;
  }
  async stop() {
    if (((this.stopping = true), this.respawnTimer)) clearTimeout(this.respawnTimer), (this.respawnTimer = null);
    let e = this.child;
    if (!e) return;
    let r = new Promise((i) => {
      e.once("exit", () => i()), e.once("error", () => i());
    });
    e.kill("SIGTERM");
    let t = setTimeout((i) => i.kill("SIGKILL"), o, e);
    t.unref(), await jt(r, 2 * o), clearTimeout(t);
  }
  async launch() {
    let { sessionId: e, apiBaseUrl: r, tokenFilePath: t, log: i } = this.options,
      s;
    try {
      s = f(this.binary, ["--session-id", e, "--api-url", r, "--token-file", t], {
        cwd: void 0,
        env: b(),
        stdio: ["pipe", "ignore", "pipe"],
        windowsHide: true,
      });
    } catch (n) {
      i(`[vitals] spawn threw: ${l(n)}; guest vitals disabled for this session`), (this.disabled = true);
      return;
    }
    if (
      (fS(s.pid),
      (this.child = s),
      (this.spawnedAt = Date.now()),
      s.stdin?.on("error", () => {}),
      s.on("error", (n) => this.onChildGone(s, n)),
      s.on("exit", (n, h) => this.onChildGone(s, null, `exited (code=${n} signal=${h})`)),
      s.on("spawn", () => {
        if ((i(`[vitals] spawned ${this.binary} pid=${s.pid}`), !this.reportedOk))
          (this.reportedOk = true), y("ccr_vitals_emitter");
      }),
      s.stderr)
    )
      v({ input: s.stderr }).on("line", (n) => i(`[vitals] ${n}`));
    await new Promise((n) => {
      s.once("spawn", () => n()), s.once("error", () => n());
    });
  }
  onChildGone(e, r, t = `spawn error: ${r?.message}`) {
    if (this.child !== e) return;
    (this.child = null), e.stdin?.destroy();
    let { log: i } = this.options;
    if (this.stopping) {
      i(`[vitals] emitter stopped (${t})`);
      return;
    }
    if (r) {
      let s = E(r);
      if (s === "EAGAIN" || s === "ENOMEM") {
        i(`[vitals] transient spawn failure (${s}); respawning`), this.scheduleRespawn();
        return;
      }
      if (((this.disabled = true), s === "ENOENT" || (s === "EACCES" && this.binaryViaFallback)))
        i(`[vitals] ${this.binary} not found; guest vitals disabled for this session`);
      else i(`[vitals] ${t}; guest vitals disabled for this session`), p("ccr_vitals_emitter", "spawn_failed");
      return;
    }
    if ((i(`[vitals] emitter ${t}`), !this.reportedUnexpectedExit))
      (this.reportedUnexpectedExit = true), g("ccr_vitals_emitter", "exited_unexpectedly");
    if (Date.now() - this.spawnedAt > c) this.nextBackoffMs = d;
    this.scheduleRespawn();
  }
  scheduleRespawn() {
    let e = this.nextBackoffMs;
    (this.nextBackoffMs = Math.min(e * 2, c)),
      this.options.log(`[vitals] respawning in ${e}ms`),
      (this.respawnTimer = setTimeout(() => {
        (this.respawnTimer = null), this.launch();
      }, e)),
      this.respawnTimer.unref();
  }
}
function b() {
  let e = {
      USER_TYPE: "external",
      NODE_ENV: "production",
      VITALS_CLI_VERSION: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.252",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-08-31T16:02:57Z",
        GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
    },
    r = {
      PATH: a.PATH,
      HOME: a.HOME,
      TMPDIR: a.TMPDIR,
      HTTPS_PROXY: a.HTTPS_PROXY,
      https_proxy: a.https_proxy,
      HTTP_PROXY: a.HTTP_PROXY,
      http_proxy: a.http_proxy,
      NO_PROXY: a.NO_PROXY,
      no_proxy: a.no_proxy,
      SSL_CERT_FILE: a.SSL_CERT_FILE,
    };
  for (let [t, i] of Object.entries(r)) if (i !== void 0) e[t] = i;
  return e;
}
export { DZe };
