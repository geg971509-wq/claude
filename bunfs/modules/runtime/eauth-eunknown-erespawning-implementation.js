// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Me, Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { w, c, ke, Vo } from "/$bunfs/root/chunk-4xj01xwv.js";
import { R, l, E, uo, nvt, mme, gme } from "/$bunfs/root/chunk-ypdw393e.js";
import { iu, b, V, Ps, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { ce, vg, GJ, zo } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { nW, Eq, Pke } from "/$bunfs/root/chunk-z19s0vx7.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { fS } from "/$bunfs/root/chunk-s28wf80n.js";
import { j$, W$, q$, BNe, QAe } from "/$bunfs/root/chunk-6k63g5t6.js";
import { VS, eSt, Xl, ru, ZE, Gk } from "/$bunfs/root/chunk-30e2jew7.js";
import { vn } from "/$bunfs/root/chunk-k4a21mkt.js";
import { ee } from "/$bunfs/root/chunk-4fwj3vnx.js";
import { rp, gZ, rae, qP, z0e } from "/$bunfs/root/chunk-sypj25ha.js";
import { tl, us, I, ie, I4t } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Nf, rt } from "/$bunfs/root/chunk-2rx5nghb.js";
import { qoe, S4 } from "/$bunfs/root/chunk-f5hrzy3k.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { Et } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { vr, ZXe } from "/$bunfs/root/chunk-1yr12dqr.js";
import { ae } from "/$bunfs/root/chunk-386w1sy8.js";
import { iA } from "/$bunfs/root/chunk-tzhtxm67.js";
import { uR } from "/$bunfs/root/chunk-mznd09c6.js";
import { bEe, Pde, ou } from "/$bunfs/root/chunk-hkzwg35z.js";
import { nge, Btt, LRe } from "/$bunfs/root/chunk-gp0k8rwa.js";
import { TBe, Nw, PP, uge, EBe, zRe, Ch, CQ } from "/$bunfs/root/chunk-bhx96yqb.js";
import { FBt, p_, t5n, YGe, Cdn, lI } from "/$bunfs/root/chunk-ddbk6aje.js";
import { LGe, hdn, Ca, MGe, Nbe, T2, $be, fDe, Nce, $Ge, Ube, Bbe, bdn, yF } from "/$bunfs/root/chunk-krety1hw.js";
import { Kp } from "/$bunfs/root/chunk-8n0v12j3.js";
import { dg, m6, sy } from "/$bunfs/root/chunk-c76q2y0e.js";
import { ZP, JR } from "/$bunfs/root/chunk-e28mhr30.js";
import { cr, fr } from "/$bunfs/root/chunk-wn1jrcrk.js";
import { gu } from "/$bunfs/root/chunk-tveh0k24.js";
import { gv } from "/$bunfs/root/chunk-zze8764r.js";
import { OR } from "/$bunfs/root/chunk-tk2aqta8.js";
import { BXn } from "/$bunfs/root/chunk-qnrh4abv.js";
import { YRe, nE } from "/$bunfs/root/chunk-ndv7bxve.js";
import { _Q, qtt, Gtt, aL } from "/$bunfs/root/chunk-7ns8rwe5.js";
import { mt } from "/$bunfs/root/chunk-d5bnjcbw.js";
import { Ng, _d } from "/$bunfs/root/chunk-r7t0evh2.js";
import { L } from "/$bunfs/root/chunk-v4qqyykc.js";
import { mm } from "/$bunfs/root/chunk-5jbjbjsn.js";
import { gs } from "/$bunfs/root/chunk-manh1369.js";
import { se } from "/$bunfs/root/chunk-q1fyd2qk.js";
import { XRn } from "/$bunfs/root/chunk-jzh4kg5x.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { j } from "/$bunfs/root/chunk-yz031c9r.js";
import { spawn as $e } from "child_process";
import { constants as Mt } from "fs";
import { access as Bt, mkdtemp as Ht, open as $t, stat as Wt } from "fs/promises";
import { homedir as Vt, tmpdir as Ft } from "os";
import { join as tt } from "path";
var Ut = 1e4,
  jt = 250,
  Gt = 65536,
  Kt = new Set(["ENOENT", "EACCES", "ENOEXEC", "EFTYPE", "ETXTBSY", "EBUSY", "EUNKNOWN", "EPERM"]);
async function Mkt(t, e) {
  let o = ru();
  if (o)
    return p("agent_launcher", "invalid_config"), { err: new R(o, "CLAUDE_CODE_PROCESS_WRAPPER is misconfigured") };
  if (!(await ZE()))
    return (
      p("agent_launcher", "launcher_not_runnable"),
      {
        err: new R(
          `${VS}: launcher \`${Xl()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`,
          "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable",
        ),
      }
    );
  let a = Xl(),
    { cmd: u, prefixArgs: i, target: f } = rp(),
    m = [u, ...i, ...t],
    _ = er({ dropShellOAuthToken: await Qt(e) });
  if (D() === "windows") {
    if (eSt().platformIgnored) g("agent_launcher", "platform_unsupported");
    let C = await ot(m, _);
    if (C.ok) return { err: null };
    n(
      `daemon: WMI spawn failed (${C.reason}); falling back to direct spawn \u2014 daemon will not survive SSH/terminal close`,
      { level: "warn" },
    ),
      s("tengu_bg_daemon_wmi_fallback", {
        timeout: C.reason === "timeout",
        enoent: C.reason === "enoent",
        no_powershell: C.reason === "no-powershell",
        rc: C.rc,
      });
  }
  let T = D() === "macos" ? await Yt() : [],
    S = await Ht(tt(Ft(), "cc-daemon-")).catch(() => null),
    A = S ? tt(S, "stderr.log") : void 0,
    P = A ? await $t(A, "w").catch(() => null) : null;
  try {
    if (a.length > 0) return { ...(await zt(t, _, T, P)), stderrPath: A };
    let C = await me(await _e(T, m), _, P?.fd),
      { err: q } = C,
      N = E(q);
    if (N !== void 0 && Kt.has(N) && it(f)) {
      let W = await at(f);
      if (W.recovered) {
        if (D() === "windows") C = (await ot(m, _)).ok ? { err: null } : await me(m, _, P?.fd);
        else C = await me(await _e(T, m), _, P?.fd);
        N = E(C.err);
      }
      if (
        (s("tengu_bg_daemon_spawn_reinstall_wait", {
          waited_ms: W.waitedMs,
          recovered: W.recovered,
          respawn_ok: W.recovered && C.err === null,
          errno: uo(q) ?? w("unknown"),
          ...(W.recovered && C.err !== null && { respawn_errno: uo(C.err) ?? w("unknown") }),
        }),
        W.recovered && C.err === null)
      )
        return (
          n(`daemon: ${f} was being reinstalled (exec ${E(q)}); started it after ${W.waitedMs}ms`),
          { ...C, stderrPath: A, recoveredAfterReinstallWait: true }
        );
    }
    if (N !== "ENOENT" && N !== "EACCES") return { ...C, stderrPath: A };
    let Q = new Set([f]),
      K = rp({ pinToCurrentBinary: true });
    if (!Q.has(K.target)) {
      Q.add(K.target),
        s("tengu_bg_daemon_spawn_execpath_fallback", { errno_enoent: N === "ENOENT", errno_eacces: N === "EACCES" });
      let W = await me(await _e(T, [K.cmd, ...K.prefixArgs, ...t]), _, P?.fd);
      if (E(W.err) !== "ENOENT") return { ...W, stderrPath: A };
    }
    let Y = rae();
    if (!Q.has(Y)) {
      Q.add(Y),
        s("tengu_bg_daemon_spawn_launcher_fallback", { errno_enoent: N === "ENOENT", errno_eacces: N === "EACCES" });
      let W = await me(await _e(T, [Y, ...t]), _, P?.fd);
      if (E(W.err) !== "ENOENT") return { ...W, stderrPath: A };
    }
    let O = await z0e();
    if ((s("tengu_bg_daemon_spawn_versions_fallback", { found: O !== null }), O !== null && !Q.has(O)))
      return { ...(await me(await _e(T, [O, ...t]), _, P?.fd)), stderrPath: A };
    return { err: q, stderrPath: A };
  } finally {
    await P?.close().catch(() => {});
  }
}
async function zt(t, e, o, a) {
  let u = async (_) => {
      let T = qP(_);
      return me(await _e(o, [T.cmd, ...T.prefixArgs, ...t]), e, a?.fd);
    },
    i = gZ();
  if (await pe(i.cmd, { rejectNpmStub: true })) return u(i);
  if (it(i.cmd)) {
    let _ = await at(i.cmd);
    if (
      (s("tengu_bg_daemon_spawn_reinstall_wait", {
        waited_ms: _.waitedMs,
        recovered: _.recovered,
        respawn_ok: _.recovered,
        probe: true,
      }),
      _.recovered)
    )
      return u(i);
  }
  let f = gZ({ pinToCurrentBinary: true });
  if (f.cmd !== i.cmd && (await pe(f.cmd)))
    return s("tengu_bg_daemon_spawn_execpath_fallback", { errno_enoent: false, errno_eacces: false, probe: true }), u(f);
  let m = await z0e();
  if (
    (s("tengu_bg_daemon_spawn_versions_fallback", { found: m !== null, probe: true }),
    m !== null && m !== f.cmd && (await pe(m)))
  )
    return u({ cmd: m, prefixArgs: [], target: m });
  return (
    p("agent_launcher", "no_runnable_target"),
    {
      err: new R(
        `no runnable Claude Code binary was found to run through the configured launcher \u2014 last tried: ${m ?? f.cmd}`,
        "no runnable claude binary for the configured launcher",
      ),
    }
  );
}
async function pe(t, e = {}) {
  try {
    let o = await Wt(t);
    if (!o.isFile()) return false;
    if (e.rejectNpmStub && o.size < Gt) return false;
    return await Bt(t, Mt.X_OK), true;
  } catch {
    return false;
  }
}
function it(t) {
  return t.replace(/\\/g, "/").includes("/node_modules/@anthropic-ai/");
}
async function at(t) {
  let e = Date.now(),
    o = e + Ut;
  while (Date.now() < o)
    if ((await ne(jt), await pe(t, { rejectNpmStub: true }))) return { recovered: true, waitedMs: Date.now() - e };
  return { recovered: false, waitedMs: Date.now() - e };
}
async function me(t, e, o) {
  let a;
  try {
    a = Vt();
  } catch {
    a = void 0;
  }
  let u = await nt(t, e, o, a);
  if (a !== void 0 && u.err) return nt(t, e, o, void 0);
  return u;
}
async function nt(t, e, o, a) {
  let u = null,
    i;
  try {
    let f = $e(t[0], t.slice(1), {
      detached: true,
      stdio: ["ignore", "ignore", o ?? "ignore"],
      windowsHide: true,
      env: e,
      ...(a !== void 0 && { cwd: a }),
    });
    fS(f.pid),
      f.once("error", (m) => {
        u = m;
      }),
      (i = {
        pid: f.pid,
        exited: new Promise((m) => {
          f.once("exit", (_, T) => m({ code: _, signal: T }));
        }),
      }),
      f.unref();
  } catch (f) {
    u = f;
  }
  return await new Promise((f) => setImmediate(f)), u ? { err: u } : { err: null, child: i };
}
async function Yt() {
  let t = process.getuid?.();
  if (t === void 0) return [];
  let e = await new Promise((o) => {
    let a = false,
      u,
      i = (m) => {
        if (a) return;
        (a = true), clearTimeout(f), o(m);
      },
      f = setTimeout(() => {
        u.kill(), i(false);
      }, 5000);
    f.unref();
    try {
      u = $e("/bin/launchctl", ["asuser", String(t), "/usr/bin/true"], { stdio: "ignore", windowsHide: true });
    } catch {
      i(false);
      return;
    }
    u.once("error", () => i(false)), u.once("exit", (m) => i(m === 0));
  });
  return s("tengu_bg_daemon_macos_aqua_wrap", { has_gui: e }), e ? ["/bin/launchctl", "asuser", String(t)] : [];
}
async function _e(t, e) {
  if (t.length === 0) return e;
  if (!(await pe(e[0]))) return e;
  return [...t, ...e];
}
async function ot(t, e) {
  let o;
  try {
    o = Jt(qt(t));
  } catch (i) {
    return { ok: false, reason: l(i) };
  }
  let a = await gv();
  if (!a) return { ok: false, reason: "no-powershell" };
  let u = Buffer.from(o, "utf16le").toString("base64");
  return new Promise((i) => {
    let f = false,
      m,
      _ = (A) => {
        if (f) return;
        (f = true), clearTimeout(S), i(A);
      },
      T = (A) => _({ ok: false, reason: E(A) === "ENOENT" ? "enoent" : l(A) }),
      S = setTimeout(() => {
        m.kill(), _({ ok: false, reason: "timeout" });
      }, 5000);
    S.unref();
    try {
      m = $e(a, ["-NoProfile", "-NonInteractive", "-EncodedCommand", u], { stdio: "ignore", windowsHide: true, env: e });
    } catch (A) {
      T(A);
      return;
    }
    m.once("error", T),
      m.once("exit", (A) => {
        if (A === 0) _({ ok: true });
        else _({ ok: false, reason: `Win32_Process.Create rc=${A}`, rc: A ?? void 0 });
      });
  });
}
function Jt(t) {
  return [
    '$ErrorActionPreference = "Stop"',
    '$e = [string[]](Get-ChildItem Env: | ForEach-Object { "$($_.Name)=$($_.Value)" })',
    "$s = New-CimInstance -ClassName Win32_ProcessStartup -ClientOnly -Property @{ EnvironmentVariables = $e; ShowWindow = [uint16]0; CreateFlags = [uint32]8 }",
    `$r = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = ${Zt(t)}; CurrentDirectory = $env:USERPROFILE; ProcessStartupInformation = $s }`,
    "exit $r.ReturnValue",
  ].join(`
`);
}
function qt(t) {
  return t.map(Xt).join(" ");
}
function Xt(t) {
  if (t.length > 0 && !/[\s"]/.test(t)) return t;
  let e = '"',
    o = 0;
  while (o < t.length) {
    let a = 0;
    while (t[o] === "\\") a++, o++;
    if (o === t.length) e += "\\".repeat(a * 2);
    else if (t[o] === '"') (e += "\\".repeat(a * 2 + 1) + '"'), o++;
    else (e += "\\".repeat(a) + t[o]), o++;
  }
  return e + '"';
}
function Zt(t) {
  if (/[\u2018\u2019\u201A\u201B]/.test(t)) throw Error("unsupported Unicode single-quote in command line");
  return `'${t.replaceAll("'", "''")}'`;
}
async function Qt(t) {
  if (D() === "macos" || !process.env.CLAUDE_CODE_OAUTH_TOKEN) return false;
  return !!(await vn().readAsync(t))?.claudeAiOauth?.refreshToken;
}
function er(t) {
  let e = { ...process.env, INVOCATION_ID: "" };
  delete e.CLAUDECODE,
    delete e.CLAUDE_CODE_SESSION_ID,
    delete e.CLAUDE_CODE_CHILD_SESSION,
    delete e.CLAUDE_CODE_EVAL_INTERVIEW_SESSION,
    delete e.CLAUDE_CODE_BRIDGE_SESSION_ID,
    Eq(e),
    Pke(e),
    nW(e),
    delete e.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  let o = QAe(e);
  if (Me(e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
    for (let a of [...q$, ...W$, ...j$]) delete e[a];
    if ((BNe(e), delete e.ANTHROPIC_CUSTOM_HEADERS, o)) delete e[o];
    delete e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST, delete e.CLAUDE_CODE_HOST_AUTH_ENV_VAR;
  }
  if (t.dropShellOAuthToken) delete e.CLAUDE_CODE_OAUTH_TOKEN, delete e.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR;
  return e;
}
var Ae = j(mm(), 1);
import { lstat as jr, readFile as Gr, realpath as Kr, rm as Tt } from "fs/promises";
import { dirname as xt } from "path";
import { setTimeout as ve } from "timers/promises";
class st {
  daemonConfirmedUp = false;
  ensureInFlight = null;
  lastTransientSpawnAt = null;
  prefixAxis = "idle";
  prefixContractViolationLogged = false;
  tmuxRgbApplied = false;
  ownedBeacons = new Map();
  reset() {
    (this.daemonConfirmedUp = false),
      (this.ensureInFlight = null),
      (this.lastTransientSpawnAt = null),
      (this.prefixAxis = "idle"),
      (this.prefixContractViolationLogged = false),
      (this.tmuxRgbApplied = false),
      this.ownedBeacons.clear();
  }
}
var tr = new J(() => new st());
function JC() {
  return tr.of(G().host);
}
import { setTimeout as rr } from "timers/promises";
var We = 120000,
  lt = 5000,
  dt = 5000;
function ct(t) {
  let e = {
    ...t,
    childExit: null,
    stderr: null,
    budgetExtended: false,
    nextLivenessProbeAt: t.spawnIssuedAt + lt,
    siblingHolderSeen: false,
  };
  return (
    t.child?.exited.then((o) => {
      e.childExit = o;
    }),
    e
  );
}
async function Ve(t, e = false) {
  if (t.stderr === null || e) t.stderr = t.stderrPath ? ((await tl(t.stderrPath, 1048576)) ?? "").slice(0, 2000) : "";
  return t.stderr;
}
async function Fe(t) {
  let e = t.childExit;
  if (!e || t.siblingHolderSeen) return false;
  if (!t.budgetExtended) {
    if ((await Ve(t)).trim().length === 0) return false;
    if (t.wrapperConfigured && e.code === 0 && e.signal === null) return false;
  }
  let o = await ut(t, uge);
  if (o !== false) return (t.siblingHolderSeen = o === true), false;
  return true;
}
async function xe(t, e, o) {
  let a = e;
  while (true) {
    if (await Fe(t)) return false;
    if (Date.now() >= a) return false;
    if ((await Kp({ proto: Ca, op: "ping" })).ok) return true;
    if (o && Date.now() >= t.nextLivenessProbeAt) {
      t.nextLivenessProbeAt = Date.now() + lt;
      let f = await ut(t, 1);
      if (!t.budgetExtended && f === true) (t.budgetExtended = true), (a = Math.max(a, t.spawnIssuedAt + We));
      else if (t.budgetExtended && f === false && Date.now() >= e) return false;
    }
    await rr(100);
  }
}
async function ut(t, e) {
  let o;
  try {
    o = await Ch(e, t.storageV5);
  } catch {
    return null;
  }
  return o !== null && !o.bgDisabled && o.startedAt >= t.spawnIssuedAt - dt;
}
async function ft(t) {
  let e;
  try {
    e = await PP(t.storageV5);
  } catch {
    return { lock_at_deadline: w("unreadable") };
  }
  if (!e) return { lock_at_deadline: w("absent") };
  let o = {
    holder_age_ms: Math.max(0, Date.now() - e.startedAt),
    holder_version_skew:
      e.version !==
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
      }.VERSION,
  };
  if ((t.child?.pid !== void 0 && e.pid === t.child.pid) || e.startedAt >= t.spawnIssuedAt - dt)
    return { lock_at_deadline: w("self_child"), ...o };
  try {
    process.kill(e.pid, 0);
  } catch (i) {
    return { lock_at_deadline: E(i) === "EPERM" ? w("other_eperm") : w("other_dead"), ...o };
  }
  return { lock_at_deadline: (await EBe(e.pid, iA(e), 1).catch(() => false)) ? w("other_alive") : w("other_dead"), ...o };
}
import { randomBytes as Ir } from "crypto";
import { unlink as yt } from "fs/promises";
import { createServer as Nr } from "net";
import { StringDecoder as Lr } from "string_decoder";
var nr = new Set([
  "starting",
  "running",
  "resuming",
  "adopted",
  "crashed",
  "working",
  "blocked",
  "done",
  "stopped",
  "failed",
  "busy",
  "shell",
  "idle",
  "waiting",
]);
function Vie(t) {
  if (t === void 0) return;
  return Vo(nr.has(t) ? t : "other");
}
var or = new Set(["cold", "spare", "adopted"]);
function tBe(t) {
  return typeof t === "string" && or.has(t) ? t : void 0;
}
var pt =
  /\x1b\[(?:<\d+;\d+;\d+[Mm]|M[\s\S]{3}|I|O|\??\d+;\d+(?:;\d+)*R|[?>]\d+(?:;\d+)*c|\?\d+(?:;\d+)*\$y|\?997;[12]n|\?\d+u)|\x1bP[^\x1b]*\x1b\\|\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g;
function gt(t) {
  if (!t.includes("\x1B")) return false;
  return t.replace(pt, "").length === 0;
}
var ir = 64,
  ar = /^\x1b(?:$|\[(?:[<?>]?\d*(?:;\d*)*\$?|M[\s\S]{0,2})$|P(?:$|[>01][^\x1b]*\x1b?$)|\](?:$|\d[^\x07\x1b]*\x1b?$))/;
function mLn() {
  let t = "";
  return (e) => {
    let o = t + e;
    if (((t = ""), !o.includes("\x1B"))) return false;
    let a = o.replace(pt, "");
    if (a.length === 0) return true;
    if (a.length <= ir && ar.test(a)) return (t = a), true;
    return false;
  };
}
import { closeSync as sr, lstatSync as lr, openSync as dr, readSync as ur } from "fs";
var ht = 262144,
  pr = 32768,
  mr = 200,
  gr = 4096,
  hr = 50;
function _r(t) {
  let e = 0,
    o = 0,
    a = 0;
  for (let u of t.split(`
`)) {
    let i = 0;
    while (i < u.length && (u[i] === ">" || u[i] === " ")) {
      if (u[i] === ">") a++;
      i++;
    }
    if (/^ {0,3}(?:=+|-+)\s*$/.test(u)) o++;
    for (let f = i; f < u.length; f++) {
      let m = u[f];
      if (m === "[") e++;
      else if (m === "]" && e > 0) e--;
    }
  }
  return e > 256 || o > 64 || a > 512;
}
var wr = "\x1B[2m",
  St = "\x1B[0m",
  Er = 2,
  Sr = "dark",
  _t = L.pointer,
  br = "  Session is starting \u2014 showing its transcript until it appears. Ctrl+Z to detach";
function yr(t) {
  if (!/[\x00-\x09\x0b-\x1f\x7f-\x9f]/.test(t)) return t;
  return Et(t)
    .replace(/\t/g, "  ")
    .replace(GJ, "")
    .replace(/[\v\f\r]/g, "");
}
var bt = /(\x1b\[[0-9;]*m)/,
  Ar = new RegExp(bt.source, "g");
function Cr(t) {
  if (!t.includes("\x1B")) return t;
  let e = "",
    o = 0;
  while (o < t.length) {
    let a = t.indexOf("\x1B", o);
    if (a < 0) {
      e += t.slice(o);
      break;
    }
    e += t.slice(o, a);
    let u = t[a + 1];
    if (u === "[") {
      let i = a + 2,
        f = true;
      while (i < t.length) {
        let m = t.charCodeAt(i);
        if (m >= 64 && m <= 126) {
          if (m === 109 && f) e += t.slice(a, i + 1);
          i++;
          break;
        }
        if (m < 32 || m > 63) break;
        if (!((m >= 48 && m <= 57) || m === 59)) f = false;
        i++;
      }
      o = i;
    } else if (u === "]" || u === "P" || u === "X" || u === "^" || u === "_") {
      let i = a + 2,
        f = t.length;
      while (i < t.length) {
        if (u === "]" && t.charCodeAt(i) === 7) {
          f = i + 1;
          break;
        }
        if (t.charCodeAt(i) === 27 && t[i + 1] === "\\") {
          f = i + 2;
          break;
        }
        i++;
      }
      o = f;
    } else if (u === void 0) o = t.length;
    else o = a + 2;
  }
  return e;
}
function Rr(t, e) {
  if (e === "") {
    t.clear();
    return;
  }
  let o = e.split(";");
  for (let a = 0; a < o.length; a++) {
    let u = o[a],
      i = u === "" ? 0 : parseInt(u, 10);
    if (Number.isNaN(i)) continue;
    if (i === 0) t.clear();
    else if (i >= 1 && i <= 9) t.set(String(i), String(i));
    else if (i === 22) t.delete("1"), t.delete("2");
    else if (i === 23) t.delete("3");
    else if (i === 24) t.delete("4");
    else if (i === 25) t.delete("5"), t.delete("6");
    else if (i === 27) t.delete("7");
    else if (i === 28) t.delete("8");
    else if (i === 29) t.delete("9");
    else if (i === 38 || i === 48) {
      let f = i === 38 ? "fg" : "bg";
      if (u.includes(":")) t.set(f, u);
      else if (o[a + 1] === "5") t.set(f, o.slice(a, a + 3).join(";")), (a += 2);
      else if (o[a + 1] === "2") t.set(f, o.slice(a, a + 5).join(";")), (a += 4);
    } else if ((i >= 30 && i <= 37) || (i >= 90 && i <= 97)) t.set("fg", u);
    else if (i === 39) t.delete("fg");
    else if ((i >= 40 && i <= 47) || (i >= 100 && i <= 107)) t.set("bg", u);
    else if (i === 49) t.delete("bg");
  }
}
var Tr = 128;
function xr(t) {
  if (t.size === 0) return "";
  let e = [...t.values()].join(";");
  return e.length > Tr ? "" : `\x1B[${e}m`;
}
function kr(t, e) {
  if (se(t) <= e) return [t];
  let o = [],
    a = "",
    u = 0,
    i = new Map();
  for (let f of t.split(bt)) {
    if (f === "") continue;
    if (f.charCodeAt(0) === 27) {
      Rr(i, f.slice(2, -1)), (a += f);
      continue;
    }
    for (let { segment: m } of gs().segment(f)) {
      let _ = m.length === 1 && m.charCodeAt(0) < 127 ? 1 : se(m);
      if (u > 0 && u + _ > e) o.push(i.size > 0 ? a + St : a), (a = xr(i)), (u = 0);
      (a += m), (u += _);
    }
  }
  return o.push(a), o;
}
function je(t, e) {
  return Nf(t, e, { hard: false, trim: false })
    .split(`
`)
    .flatMap((o) => kr(o, e));
}
function Or(t) {
  let e;
  try {
    e = Ps(t);
  } catch {
    return [];
  }
  if (typeof e !== "object" || e === null) return [];
  let o = e;
  if ((o.type !== "user" && o.type !== "assistant") || o.isSidechain === true || o.isMeta === true) return [];
  let a = o.message?.content;
  if (typeof a === "string") {
    if (o.type === "user") return wt(a);
    let m = a.trim();
    return m === "" ? [] : [{ role: "assistant", text: m }];
  }
  if (!Array.isArray(a)) return [];
  if (o.type === "user") {
    let m = [];
    for (let _ of a) {
      let T = _;
      if (T?.type === "text" && typeof T.text === "string") m.push(T.text);
    }
    return wt(
      m.join(`
`),
    );
  }
  let u = [],
    i = [],
    f = () => {
      let m = i
        .join(`
`)
        .trim();
      if (((i = []), m !== "")) u.push({ role: "assistant", text: m });
    };
  for (let m of a) {
    let _ = m;
    if (_?.type === "text" && typeof _.text === "string") i.push(_.text);
    else if (_?.type === "tool_use" && typeof _.name === "string") {
      f();
      let T = "";
      if (typeof _.input === "object" && _.input !== null) {
        for (let S of Object.values(_.input))
          if (typeof S === "string" && S !== "") {
            T = S;
            break;
          }
      }
      u.push({ role: "tool", text: `${_.name}(${T})` });
    } else if (_?.type === "thinking" && typeof _.thinking === "string" && _.thinking.trim() !== "")
      f(), u.push({ role: "thinking", text: _.thinking });
  }
  return f(), u;
}
function wt(t) {
  let e = t.trim();
  if (e === "") return [];
  let o = /^<bash-input>([\s\S]*?)<\/bash-input>/.exec(e);
  if (o) e = `! ${o[1].trim()}`;
  else if (XRn.test(e)) return [];
  return [{ role: "user", text: e }];
}
function Pr(t, e) {
  return (
    YRe(),
    Cr(
      gu
        .lexer(t)
        .map((o) => nE(o, e, { listDepth: 0, orderedListNumber: null, parent: null, highlight: OR(), linkCap: false }))
        .join(""),
    ).trim()
  );
}
function Dr(t, e, o, a) {
  let u = Math.max(1, e),
    i = a?.colorLevel ?? Er,
    f = a?.theme ?? Sr,
    m = (M) => (i > 0 && M !== "" ? wr + M + St : M),
    _ = (M) => Math.max(1, Math.ceil(se(M) / u)),
    T = "\u2500".repeat(u),
    S = ["", T, _t, T, br],
    A = S.reduce((M, X) => M + _(X), 0),
    P = o - A;
  if (P < 1) return null;
  let C = Math.min(Math.ceil((P + 1) / 2), mr),
    q = t.split(`
`),
    N = [],
    Q = pr;
  e: for (let M = q.length - 1; M >= 0; M--) {
    let X = Or(q[M]);
    for (let F = X.length - 1; F >= 0; F--) {
      if (N.length >= C) break e;
      let B = X[F];
      if (B.text.length > Q) {
        if (N.length === 0) {
          let U = vg(B.text, Q),
            z = U.indexOf(`
`);
          if (z >= 0) U = U.slice(z + 1);
          if (U.trim() !== "") N.unshift({ role: B.role, text: U });
        }
        break e;
      }
      (Q -= B.text.length), N.unshift(B);
    }
  }
  if (N.length === 0) return null;
  let K = [],
    Y = u >= 4 ? 2 : 0,
    O = Math.max(1, u - Y),
    W = ae.level;
  ae.level = i;
  let d = performance.now();
  try {
    for (let M of N) {
      if (K.length > 0) K.push({ text: "", dim: false });
      let X = yr(M.text);
      switch (M.role) {
        case "tool": {
          let F = rt(`${vr} ${X.replace(/\n/g, " ")}`, u);
          K.push({ text: F, dim: true });
          break;
        }
        case "thinking": {
          let F = X.replace(/\s+/g, " ").trim();
          for (let [B, U] of je(F, O).entries()) {
            let z = Y === 0 || U === "" ? "" : B === 0 ? `${ZXe} ` : "  ";
            K.push({ text: z + ae.italic(U), dim: true });
          }
          break;
        }
        case "assistant": {
          let F = X;
          if (X.length <= gr && performance.now() - d < hr && !_r(X))
            try {
              F = Pr(X, f);
            } catch {
              F = X;
            }
          let B = mt("text", f)(vr);
          for (let [U, z] of je(F, O).entries()) {
            let te = Y === 0 || z === "" ? "" : U === 0 ? `${B} ` : "  ";
            K.push({ text: te + z, dim: false });
          }
          break;
        }
        case "user": {
          let F = mt("subtle", f)(`${_t} `),
            B = mt("text", f),
            U = mt("userMessageBackground", f, "background");
          for (let [z, te] of je(X, O).entries()) {
            let Ee = Y === 0 ? "" : z === 0 ? F : "  ";
            K.push({ text: U(Ee + B(te)), dim: false });
          }
          break;
        }
        default:
          M.role;
      }
    }
  } finally {
    ae.level = W;
  }
  let r = 0,
    k = [];
  for (let M = K.length - 1; M >= 0; M--) {
    let X = K[M],
      F = _(X.text);
    if (r + F > P) break;
    (r += F), k.unshift(X.dim ? m(X.text) : X.text);
  }
  if (k.length === 0) return null;
  let Z = o - r - A,
    de = [];
  for (let M = 0; M < Z; M++) de.push("");
  de.push(...k);
  for (let M of S) de.push(m(M));
  let re = de.join(`\r
`);
  if (re.length > 65536 + o * u * 32) re = re.replace(Ar, "");
  return JR + re;
}
function Ge(t, e, o, a) {
  let u;
  try {
    let i = lr(t);
    if (!i.isFile() || i.size === 0) return null;
    let f = i.size;
    u = dr(t, "r");
    let m = Math.max(0, f - ht),
      _ = Buffer.alloc(Math.min(f, ht)),
      T = ur(u, _, 0, _.length, m),
      S = _.subarray(0, T).toString("utf8");
    if (m > 0) {
      let A = S.indexOf(`
`);
      if (A < 0) return null;
      S = S.slice(A + 1);
    }
    return Dr(S, e, o, a);
  } catch {
    return null;
  } finally {
    if (u !== void 0)
      try {
        sr(u);
      } catch {}
  }
}
var ye = 1048576,
  Mr = 5000,
  Br = 12000,
  Ke = 1000,
  vt = 500,
  Hr = 6000;
function $r() {
  let t = I("tengu_bg_attach_stall_ms", Mr);
  if (t === 0) return 0;
  let e = Xl().length > 0 ? Br : 2000;
  return Math.max(e, t);
}
function Wr(t, e, o, a, u, i) {
  let f = t.dispatch;
  if (t.getPhase().kind !== "running" || e.destroyed || a()) return;
  u.add(f.short);
  let m = fr(cr(f.short), i).catch(() => null);
  t.kill("SIGTERM"),
    (async () => {
      let _ = Date.now() + Hr;
      while (Date.now() < _ && !t.record.outcome) await ne(100);
      if (!u.has(f.short)) return;
      let T = await fr(cr(f.short), i).catch(() => null),
        S = T?.resumeSessionId ?? f.sessionId,
        A = T?.cwd ?? f.cwd,
        P = _d(Ng(i)),
        C = await S4(S, A, T?.linkScanPath, void 0, P),
        q = C.hasMessages;
      if (!q) await qoe(C.path, P);
      if (!u.has(f.short)) return;
      let N = T?.respawnFlags ?? f.respawnFlags,
        Q = (await m)?.tempo === "active";
      await o({
        ...f,
        cwd: A,
        source: "respawn",
        reattachEnv: void 0,
        attachStallRespawns: (f.attachStallRespawns ?? 0) + 1,
        launch: q
          ? { mode: "resume", sessionId: S, transcriptPath: C.path, fork: false, flagArgs: Q ? LGe(N) : hdn(N) }
          : S !== f.sessionId
            ? { mode: "prompt", args: ["--session-id", S, ...N] }
            : f.launch,
      });
    })()
      .catch((_) => h(_))
      .finally(() => u.delete(f.short));
}
var ze = 1e4,
  Vr = 2500;
async function gLn(t, e, o, a = () => 0, u = () => true, i = () => false, f = new Promise(() => {}), m) {
  let _ = lI();
  await YGe();
  let T = await t5n();
  await yt(_).catch(() => {});
  let S = new Set(),
    A = new Set(),
    P = new Map(),
    C = Ue(),
    Q = {
      handles: t,
      onDispatch: e,
      onNudge: o,
      onShutdown: a,
      ready: u,
      whenReady: f,
      onYield: i,
      addLease: (d, r) => {
        if (P.has(d)) return;
        P.set(d, r),
          s("tengu_daemon_lease", { op: w("open"), label: r?.label ?? null }),
          d.once("close", () => {
            P.delete(d), s("tengu_daemon_lease", { op: w("close"), label: r?.label ?? null }), C.emit();
          }),
          C.emit();
      },
      listLeases: () => {
        let d = [];
        for (let r of P.values()) if (r) d.push(r);
        return d;
      },
      stallRespawnPending: A,
      controlKey: T,
      storageV5: m,
      legacyOpProbe: new Rt(),
    },
    K = false,
    Y = Nr((d) => {
      if (K) {
        d.destroy();
        return;
      }
      d.on("error", () => d.destroy()),
        d.setTimeout(30000, () => d.destroy()),
        S.add(d),
        d.once("close", () => S.delete(d));
      let r = BXn(d);
      if (r) {
        s("tengu_daemon_peer_uid_reject", {}), d.once("data", () => v(d, { ok: false, code: "EPEERUID", error: r }));
        return;
      }
      let k = Buffer.alloc(0),
        Z = (de) => {
          k = Buffer.concat([k, de]);
          let re = k.indexOf(10);
          if (re < 0) {
            if (k.length > ye)
              d.off("data", Z),
                v(d, {
                  ok: false,
                  code: "ETOOLARGE",
                  error: `request exceeds ${ye >> 20}MB \u2014 shorten the prompt or send in parts`,
                });
            return;
          }
          d.off("data", Z), d.setTimeout(0);
          let M = k.subarray(0, re).toString("utf8"),
            X = k.subarray(re + 1);
          Fr(Q, d, M, X).catch((F) => {
            v(d, { ok: false, error: l(F), code: "EUNKNOWN" });
          });
        };
      d.on("data", Z);
    }),
    O = false;
  Y.on("error", (d) => {
    if (O) {
      n(`bg control server bind: ${p_(l(d))}`, { level: "warn" });
      return;
    }
    h(d);
  });
  let W = Date.now() + ze;
  for (;;)
    try {
      await new Promise((d, r) => {
        let k = (Z) => {
          (O = false), r(Z);
        };
        (O = true),
          Y.once("error", k),
          Y.listen(_, () => {
            (O = false), Y.removeListener("error", k), d();
          });
      });
      break;
    } catch (d) {
      if (E(d) !== "EADDRINUSE" || Date.now() >= W) throw d;
      Y.removeAllListeners("listening"), await ne(100);
    }
  return {
    close: (d) =>
      new Promise((r) => {
        for (let k of S) k.destroy();
        if (d?.skipUnlink) return (K = true), Y.unref(), void r();
        Y.close(() => {
          if (!d?.skipUnlink) yt(_).catch(() => {});
          r();
        });
      }),
    leaseCount: () => P.size,
    onLeaseChange: C,
  };
}
function v(t, e) {
  if (t.destroyed) return;
  t.end(
    b(e) +
      `
`,
  );
}
function be(t, e) {
  if (t.destroyed) return;
  if (t.writableLength > ye) {
    t.destroy();
    return;
  }
  t.write(
    b(e) +
      `
`,
  );
}
function we(t) {
  return !t.record.outcome && !t.isRetiring && !t.isKilling;
}
async function At(t, e, o, a, u, i, f) {
  let m = Date.now() + Math.min(i, 30000),
    _ = false,
    T = false,
    S,
    A;
  f?.then(
    (P) => {
      A = P;
    },
    (P) => {
      h(P), (A = "dropped");
    },
  );
  while (Date.now() < m) {
    if (e.destroyed) return;
    let P = A === "dup-live" || A === "dropped" || A === "closed",
      C = t.get(a);
    if (C) {
      if (u && C.record.nonce !== u) {
        if (((T = true), (S = we(C) ? C : void 0), P)) break;
        if (!S && !_) (_ = true), (m += Math.min(i, 30000));
        await ne(25);
        continue;
      }
      return v(e, {
        ok: true,
        op: o,
        short: a,
        pid: C.record.pid,
        messagingSock: C.record.messagingSock ?? "",
        via: C.via,
      });
    }
    if (((S = void 0), P)) break;
    await ne(25);
  }
  if (T) {
    if (S && t.get(a) === S && we(S))
      return v(e, {
        ok: true,
        op: o,
        short: a,
        pid: S.record.pid,
        messagingSock: S.record.messagingSock ?? "",
        via: S.via,
      });
    return v(e, {
      ok: false,
      error: "a previous dispatch with this id is still being cleaned up \u2014 retry in a moment",
      code: "ESTALE",
    });
  }
  return v(e, { ok: false, error: `${ou()} didn't acknowledge in time \u2014 retry`, code: "ETIMEOUT" });
}
class Rt {
  fired = new Set();
  markFired(t) {
    if (this.fired.has(t)) return false;
    return this.fired.add(t), true;
  }
}
function Ct(t, e) {
  if (!t.markFired(e)) return;
  s("tengu_dead_probe_bg_legacy_op", { op: c(e) });
}
async function Fr(t, e, o, a) {
  let {
      handles: u,
      onDispatch: i,
      onNudge: f,
      onShutdown: m,
      ready: _,
      whenReady: T,
      onYield: S,
      addLease: A,
      listLeases: P,
      stallRespawnPending: C,
      controlKey: q,
      storageV5: N,
      legacyOpProbe: Q,
    } = t,
    K;
  try {
    K = V(o);
  } catch {
    return v(e, { ok: false, error: "bad json", code: "EUNKNOWN" });
  }
  if (K === null || typeof K !== "object") return v(e, { ok: false, error: "bad json", code: "EUNKNOWN" });
  let Y = K.op;
  if (Y === "ping")
    return v(e, {
      ok: true,
      op: "ping",
      version: {
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
      proto: Ca,
    });
  if (Y === "nudge") {
    let r = await f();
    return v(e, {
      ok: true,
      op: "nudge",
      restarting: r.restarting,
      upgradePending: r.upgradePending,
      version: {
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
      processWrapper: Gk(),
    });
  }
  if (Y === "yield") return v(e, { ok: true, op: "yield", yielding: S() });
  if (Y === "lease") {
    A(e, Ur(K.client)),
      e.write(
        b({ ok: true, op: "lease" }) +
          `
`,
      );
    return;
  }
  if (Y === "leases") return v(e, { ok: true, op: "leases", clients: P() });
  if (Y === "shutdown") {
    let r = K.reapWorkers !== false,
      k = m(r);
    return v(e, { ok: true, op: "shutdown", reaped: k });
  }
  if (!_() && Y === "attach") {
    if ((await Promise.race([T, ne(Vr, void 0, { unref: true })]), e.destroyed)) return;
  }
  if (!_()) return v(e, { ok: false, error: `${ou()} starting (adoption in progress)`, code: "ESTARTING" });
  let O = K.proto;
  if (typeof O !== "number" || !Number.isInteger(O) || O < MGe || O > Ca)
    return (
      s("tengu_bg_proto_mismatch", { client_proto: typeof O === "number" ? O : -1, server_proto: Ca }),
      v(e, {
        ok: false,
        error: `proto mismatch (server=${Ca}, client=${O}) \u2014 ${ou()} and CLI versions differ; restart claude`,
        code: "EPROTO",
        serverProto: Ca,
        serverVersion: {
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
      })
    );
  let W = bdn().safeParse(K);
  if (!W.success)
    return v(e, { ok: false, error: `malformed request: ${W.error.issues[0]?.message ?? "invalid"}`, code: "EUNKNOWN" });
  let d = W.data;
  switch (d.op) {
    case "ping":
    case "nudge":
    case "yield":
    case "lease":
    case "leases":
    case "shutdown":
      return;
    case "list":
      return v(e, {
        ok: true,
        op: "list",
        jobs: Array.from(u.values()).map((r) => (r.isKilling || r.isRetiring ? { ...r.record, dying: true } : r.record)),
      });
    case "has": {
      let r = u.get(d.short),
        k = C.has(d.short);
      return v(e, {
        ok: true,
        op: "has",
        alive: (r !== void 0 && we(r)) || k,
        present: r !== void 0 || k,
        ready: r !== void 0 && !r.isBooting,
      });
    }
    case "await-ack":
      return At(u, e, "await-ack", d.short, d.nonce, d.timeoutMs);
    case "dispatch":
      if (!uR(d.auth, q))
        return v(e, {
          ok: false,
          error: "dispatch rejected: this client didn't present the daemon control key",
          code: "EAUTH",
        });
      if ((await ne(0), e.readableEnded || e.destroyed)) {
        s("tengu_bg_dispatch_stale_drop", {});
        return;
      }
      return At(u, e, "dispatch", d.d.short, d.d.nonce, d.timeoutMs, i(d.d));
    case "reply": {
      if (!uR(d.auth, q))
        return v(e, {
          ok: false,
          error:
            d.auth === void 0
              ? "reply rejected: this window didn't present the daemon control key \u2014 it is likely running a Claude Code older than the daemon (left open across an update?); restart this window and retry, or stop driving the control socket directly"
              : "reply rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
          code: "EAUTH",
        });
      let r = u.get(d.short);
      if (C.has(d.short) && (!r || !we(r)))
        return v(e, { ok: false, error: `worker ${Nce} \u2014 restarting it; retry reply`, code: "ERESPAWNING" });
      if (!r || r.isRetiring || r.isKilling || r.record.outcome)
        return v(e, { ok: false, error: "job not found \u2014 it may have already exited", code: "ENOJOB" });
      if (r.isUpgrading)
        return v(e, { ok: false, error: `job is restarting on the ${fDe}; retry reply`, code: "ERESPAWNING" });
      if (!(await r.reply(d.text)))
        return v(e, {
          ok: false,
          error: "job isn't accepting replies \u2014 it may be in a non-interactive state",
          code: "ENOREPLY",
        });
      return v(e, { ok: true, op: "reply" });
    }
    case "kill": {
      if ((C.delete(d.short), d.evict))
        yF((k) => {
          delete k.workers[d.short];
        }, N).catch((k) => h(k));
      let r = u.get(d.short);
      if (!r) return v(e, { ok: false, error: "job not found \u2014 it may have already exited", code: "ENOJOB" });
      if (r.dispatch.launch.mode === "exec" && r.record.outcome) return u.delete(d.short), v(e, { ok: true, op: "kill" });
      return r.kill(d.signal ?? "SIGTERM", d.handoff ? "handoff" : "killed"), v(e, { ok: true, op: "kill" });
    }
    case "respawn-stale": {
      Ct(Q, "respawn_stale");
      let r = u.get(d.short);
      if (!r) return v(e, { ok: false, error: "job not found \u2014 it may have already exited", code: "ENOJOB" });
      let k = await r.respawnIfIdleStale();
      return v(e, { ok: true, op: "respawn-stale", ...k });
    }
    case "resize": {
      let r = u.get(d.short);
      if (!r) return v(e, { ok: false, error: "job not found \u2014 it may have already exited", code: "ENOJOB" });
      if (d.attachId) {
        let k = r.attachers.get(d.attachId);
        if (!k) return v(e, { ok: true, op: "resize" });
        if (((k.cols = d.cols), (k.rows = d.rows), k.repaint)) return k.repaint(), v(e, { ok: true, op: "resize" });
      }
      return r.resize(d.cols, d.rows), v(e, { ok: true, op: "resize" });
    }
    case "attach": {
      if (d.auth === void 0)
        n("[bg-attach] legacy client (no control key) \u2014 allowed via peerUid", { level: "warn" });
      else if (!uR(d.auth, q))
        return v(e, {
          ok: false,
          error:
            "attach rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
          code: "EAUTH",
        });
      let r = u.get(d.short);
      if (C.has(d.short) && (!r || !we(r)))
        return v(e, { ok: false, error: `worker ${Nce} \u2014 restarting it; retry attach`, code: "ERESPAWNING" });
      if (!r || r.isKilling || (r.record.outcome && r.dispatch.launch.mode !== "exec"))
        return v(e, { ok: false, error: "job not found \u2014 it may have already exited", code: "ENOJOB" });
      if (r.isUnverified)
        return v(e, {
          ok: false,
          error:
            "worker is live but supervisor could not verify its identity \u2014 try restarting the supervisor to re-adopt",
          code: "EUNVERIFIED",
        });
      if (r.isRetiring) return v(e, { ok: false, error: "job is retiring; retry attach", code: "ERESPAWNING" });
      if (r.record.legacy) {
        let x = r.dispatch,
          H = await fr(cr(x.short), N).catch(() => null),
          oe = H?.resumeSessionId ?? x.sessionId,
          le = H?.cwd ?? x.cwd,
          fe = _d(Ng(N)),
          he = await S4(oe, le, H?.linkScanPath, void 0, fe),
          Se = he.hasMessages;
        if (!Se) await qoe(he.path, fe);
        if (u.get(d.short) !== r || e.destroyed)
          return v(e, { ok: false, error: "supervisor restarting", code: "ERESPAWNING" });
        if (!r.isKilling)
          s("tengu_bg_attach_legacy_autorespawn", {}),
            r.kill("SIGTERM"),
            i({
              ...x,
              cwd: le,
              source: "respawn",
              launch: Se
                ? {
                    mode: "resume",
                    sessionId: oe,
                    transcriptPath: he.path,
                    fork: false,
                    flagArgs:
                      H?.tempo === "active"
                        ? LGe(H?.respawnFlags ?? x.respawnFlags)
                        : hdn(H?.respawnFlags ?? x.respawnFlags),
                  }
                : oe !== x.sessionId
                  ? { mode: "prompt", args: ["--session-id", oe, ...(H?.respawnFlags ?? x.respawnFlags)] }
                  : x.launch,
            }).catch((Re) => h(Re));
        return v(e, {
          ok: false,
          error: `${$Ge} job respawning with worker-owned PTY; retry attach`,
          code: "ERESPAWNING",
        });
      }
      if (r.isUpgrading)
        return v(e, { ok: false, error: `job is restarting on the ${fDe}; retry attach`, code: "ERESPAWNING" });
      if (await r.failIfHostExited("attach"))
        return v(e, { ok: false, error: r.dispatch.launch.mode === "exec" ? Bbe : Ube, code: "EHOSTDEAD" });
      if (e.destroyed) return;
      if (C.has(d.short) && (u.get(d.short) !== r || !we(r)))
        return v(e, { ok: false, error: `worker ${Nce} \u2014 restarting it; retry attach`, code: "ERESPAWNING" });
      if (u.get(d.short) !== r || r.isKilling || (r.record.outcome && r.dispatch.launch.mode !== "exec"))
        return v(e, { ok: false, error: "job not found \u2014 it may have already exited", code: "ENOJOB" });
      let k =
          r.liveTranscriptPath !== void 0
            ? r.liveTranscriptPath
            : r.dispatch.launch.mode === "resume"
              ? r.dispatch.launch.transcriptPath
              : void 0,
        Z =
          d.holdingFrame !== true && r.isBooting && k != null
            ? Ge(k, d.cols, d.rows, { colorLevel: d.caps?.colorLevel, theme: d.caps?.systemTheme })
            : null;
      A(e, null);
      let re = r.marksCapable ? Ir(16).toString("hex") : void 0;
      if (
        (e.write(
          b({
            ok: true,
            op: "attach",
            imarkNonce: re,
            decModes: r.decModeSnapshot(),
            via: r.via,
            booting: r.bootingForAttachMetrics,
            tempo: r.record.tempo,
            state: r.record.state,
            cached: Z !== null,
            stale: Boolean(
              r.record.cliVersion &&
                r.record.cliVersion !==
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
                  }.VERSION,
            ),
            workerCliVersion: r.record.cliVersion,
          }) +
            `
`,
        ),
        s("tengu_bg_attach", {
          tempo: c(r.record.tempo),
          state: Vie(r.record.state),
          via: c(r.via),
          attachers: r.attachers.size,
          stale: Boolean(
            r.record.cliVersion &&
              r.record.cliVersion !==
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
                }.VERSION,
          ),
        }),
        Z !== null)
      )
        e.write(sy + dg + Z);
      let M = dg + m6,
        X = 6,
        F = [],
        B = 0,
        U = "",
        z = () => {},
        te,
        Ee = 0,
        Je = false,
        qe = $r(),
        Xe = qe === 0 ? 0 : Math.max(1, Math.ceil((qe - vt) / Ke)),
        Pe = (x) =>
          Nbe(
            sy +
              dg +
              `
  \x1B[2m${x}\x1B[0m
`,
          ),
        De,
        Ie = false,
        Ne = () => {
          if (!Ie) return;
          if (((Ie = false), typeof r.replayInteractiveMarksTo === "function"))
            r.replayInteractiveMarksTo(d.attachId ?? e);
        },
        ge = (x) => {
          if (F === null) return;
          De?.();
          let H = F;
          if (((F = null), clearTimeout(Le), x && !e.destroyed)) for (let oe of H) e.write(oe);
          if (((Ie = true), x && H.length > 0)) Ne();
        },
        Le = setTimeout(() => {
          let x = F !== null && B === 0,
            H = x && (d.holdingFrame === true || Z !== null);
          if (!H) ge(true);
          if (x && !e.destroyed) {
            if (!H) {
              let le = r.record.state,
                fe =
                  le === "starting" || le === "resuming" || le === "adopted" || le === "crashed"
                    ? "Session is starting \u2014 it will appear once ready. Ctrl+Z to detach"
                    : "Waiting for session to redraw\u2026 Ctrl+Z to detach";
              e.write(Pe(fe));
            }
            let oe = Date.now();
            (te = setInterval(() => {
              let le = Date.now(),
                fe = le - oe;
              if (((oe = le), fe > Ke * 3)) Ee = 0;
              if (
                (Ee++,
                Xe > 0 &&
                  Ee >= Xe &&
                  !r.isKilling &&
                  !r.isRetiring &&
                  !r.isBooting &&
                  r.dispatch.launch.mode !== "exec")
              ) {
                clearInterval(te), (te = void 0), z();
                let Se = r.dispatch.attachStallRespawns ?? 0,
                  Re = { state: Vie(r.record.state), via: c(r.via), attempt: Se };
                if (Se >= 2) {
                  if (
                    (s("tengu_bg_attach_stall_gave_up", Re),
                    e.write(
                      Pe("Session keeps stalling at startup.") +
                        T2(
                          `ESTALLED: Session ${d.short} keeps stalling at startup \u2014 check ${cr(d.short)} for logs.`,
                        ),
                    ),
                    !r.isKilling)
                  )
                    r.kill("SIGKILL", "failed", "session keeps stalling at startup");
                  return;
                }
                if (
                  (s("tengu_bg_attach_stall_respawn", Re),
                  e.write(Pe("Session not responding \u2014 restarting it\u2026")),
                  Wr(r, e, i, () => Je, C, N),
                  !e.destroyed)
                )
                  e.write(T2(`${$be}: worker ${Nce}, restarting`));
                return;
              }
              let he = r.attachers.get(ue);
              z(), (z = r.resizeForRepaint(he?.cols ?? d.cols, he?.rows ?? d.rows));
            }, Ke)),
              te.unref();
          }
        }, vt),
        Ze = () => {
          if (te) clearInterval(te), (te = void 0);
        },
        Be = r.onStream.subscribe((x) => {
          if (e.destroyed) return;
          if (((Je = true), F !== null)) {
            let H = U + x;
            if (H.includes(sy) || H.includes(M)) {
              Ze();
              let oe = x.includes(sy) || x.includes(M) ? x : H;
              if ((z(), ge(false), e.writableLength <= ye)) e.write(r.decModeSnapshot().map(ZP).join("") + oe), Ne();
              else e.destroy();
              return;
            }
            if ((F.push(x), (B += x.length), (U = H.slice(-X)), B > 65536)) ge(true);
            return;
          }
          if ((Ze(), e.writableLength > ye)) {
            e.destroy();
            return;
          }
          e.write(x), Ne();
        }),
        He = r.onRepaintDone.subscribe(() => {
          z(), ge(true);
        });
      if (D() === "windows") for (let x of r.attachers.values()) x.kick();
      let ue = d.attachId ?? e;
      if (
        (r.attachers.set(ue, {
          cols: d.cols,
          rows: d.rows,
          caps: d.caps,
          imarkNonce: re,
          deliver: (x) => {
            if (!e.destroyed) e.write(x);
          },
          kick: () => {
            if ((s("tengu_bg_attach_kick", {}), te)) clearInterval(te), (te = void 0);
            if ((clearTimeout(Le), z(), Be(), He(), e.removeAllListeners("data"), !e.destroyed))
              e.write(T2("EKICKED: Session opened in another window")), e.end();
            r.attachers.delete(ue);
          },
        }),
        Z !== null && k != null)
      ) {
        let x = r.attachers.get(ue);
        if (x)
          (x.repaint = () => {
            if (e.destroyed) return;
            r.resize(x.cols, x.rows);
            let H = Ge(k, x.cols, x.rows, { colorLevel: d.caps?.colorLevel, theme: d.caps?.systemTheme });
            e.write(sy + dg + (H ?? ""));
          }),
            (De = () => {
              (x.repaint = void 0), (De = void 0);
            });
      }
      r.noteActivity(), r.seedFocus(true), r.sendAttacherCaps(d.caps ?? null);
      let Ce;
      if (r.dispatch.launch.mode === "exec") {
        let x = Nbe(sy + dg);
        e.write(x);
        for (let H of r.ringSnapshot()) e.write(H);
        if (
          (ge(false),
          (Ce = () => {
            let H = r.attachers.get(ue);
            if (e.destroyed || !H) return;
            let oe = r.record.outcome === "done" ? "done" : r.record.outcome === "killed" ? "stopped" : "failed",
              le = Nbe(`\r
\x1B[2m\u2014 ${oe} \xB7 Ctrl+Z to return \u2014\x1B[0m\r
`);
            e.write(le),
              (H.repaint = () => {
                if (e.destroyed) return;
                e.write(x);
                for (let fe of r.ringSnapshot()) e.write(fe);
                e.write(le);
              });
          }),
          r.record.outcome)
        ) {
          Ce(),
            e.once("close", () => {
              clearTimeout(Le), Be(), He(), r.attachers.delete(ue);
            });
          return;
        }
      }
      z = r.resizeForRepaint(d.cols, d.rows);
      let Lt = r.onSettle.subscribe(() => {
          if (Ce && r.record.outcome !== "killed") return Ce();
          e.end();
        }),
        Qe = new Lr("utf8"),
        et = (x) => {
          let H = Qe.write(x);
          if (H.length > 0 && !gt(H)) r.lastInputAttacher = ue;
          r.write(H);
        };
      if (a.length) et(a);
      e.on("data", et),
        e.once("close", () => {
          if (te) clearInterval(te);
          if ((z(), ge(false), Be(), Lt(), He(), !r.attachers.delete(ue))) return;
          let x = Qe.end();
          if (x) r.write(x);
          if (r.attachers.size > 0) {
            let H = [...r.attachers.values()].at(-1);
            r.resizeForRepaint(H.cols, H.rows), r.sendAttacherCaps(H.caps ? { ...H.caps, systemTheme: void 0 } : null);
          } else r.seedFocus(false), r.sendAttacherCaps(null);
        });
      return;
    }
    case "ensure-spare":
      return Ct(Q, "ensure_spare"), v(e, { ok: true, op: "ensure-spare" });
    case "permission-response":
      if (!uR(d.auth, q))
        return v(e, {
          ok: false,
          error: "permission-response rejected: this client didn't present the daemon control key",
          code: "EAUTH",
        });
      return v(e, { ok: true, op: "permission-response" });
    case "subscribe": {
      let r = u.get(d.short);
      if (!r) return v(e, { ok: false, error: "job not found \u2014 it may have already exited", code: "ENOJOB" });
      if (
        (A(e, null), be(e, { type: "snapshot", record: r.record, streamTail: r.tail(d.tail ?? 200) }), r.record.outcome)
      ) {
        be(e, { type: "settled", outcome: r.record.outcome }), e.end();
        return;
      }
      let k = [
        r.onStream.subscribe((Z) => be(e, { type: "stream", line: Z })),
        r.onState.subscribe((Z) => be(e, { type: "state", patch: Z })),
        r.onSettle.subscribe((Z) => {
          be(e, { type: "settled", outcome: Z }), e.end();
        }),
      ];
      e.on("close", () => {
        for (let Z of k) Z();
      });
      return;
    }
    default:
      return v(e, { ok: false, error: `unknown op: ${d.op}`, code: "EUNKNOWN" });
  }
}
function Ur(t) {
  if (t === null || typeof t !== "object") return null;
  let e = t;
  if (typeof e.label === "string" && typeof e.cwd === "string" && typeof e.pid === "number")
    return { label: e.label, cwd: e.cwd, pid: e.pid };
  return null;
}
var IP = 45000;
async function DRe(t) {
  let e = Date.now() + t;
  while (Date.now() < e) {
    if ((await Kp({ proto: Ca, op: "ping" })).ok) return true;
    await ve(100);
  }
  return false;
}
async function Nkt(t, e) {
  let o = Date.now() + t,
    a = 0;
  while (true) {
    let u = o - Date.now();
    if (u <= 0) return null;
    if (await DRe(Math.min(u, 1000))) {
      let i = Date.now();
      if (i >= a) {
        a = i + 1000;
        let f = await Ch(1, e).catch(() => null);
        if (f?.origin === "service") return f;
        if (f?.origin === "foreground") return null;
      }
      await ve(100);
    }
  }
}
async function zr(t, e) {
  let o = Date.now(),
    a = false,
    u,
    i = "restarting",
    f;
  while (Date.now() < o + (a ? 30000 : 1e4)) {
    let m = await Kp({ proto: Ca, op: "nudge" });
    if (m.ok && m.op === "nudge") {
      if (((a = true), (u = m.version), !m.restarting)) {
        if (await qr(m.version, t, m.processWrapper, m.upgradePending === true, e)) return "down";
        let _ = ru();
        if (_ && !m.processWrapper) return { refuse: _ };
        if (!m.processWrapper && Gk() !== "" && !(await ZE())) return { refuse: Ye() };
        Dt(m.processWrapper);
        let T =
          m.version !==
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
          }.VERSION;
        if (Date.now() - o > 200 || T)
          s("tengu_bg_skew_nudge", {
            converged: true,
            duration_ms: Date.now() - o,
            daemon_version: us(m.version),
            skewed: T,
          });
        return "up";
      }
      (i = "restarting"), await ve(100);
      continue;
    }
    if (!m.ok && m.code === "ETIMEOUT") {
      (a = true), (i = "etimeout"), await ve(100);
      continue;
    }
    if (!m.ok && m.code === "ENOCONN") {
      if (!a) {
        let _ = await Ch(1, e).catch(() => null);
        if (_?.bgDisabled) return "down";
        if (_) a = true;
      }
      if (((f = nvt(m.errno)), !a)) return "down";
      (i = "enoconn"), await ve(100);
      continue;
    }
    {
      let _ = ru();
      if (_) return { refuse: _ };
      if (Gk() !== "" && !(await ZE())) return { refuse: Ye() };
    }
    return "up";
  }
  return (
    s("tengu_bg_skew_nudge", {
      converged: false,
      restarting: i === "restarting",
      etimeout: i === "etimeout",
      enoconn: i === "enoconn",
      daemon_version: us(u),
      ...(f && { connect_errno: f }),
    }),
    "down"
  );
}
async function sL(t = {}, e) {
  if (D() !== "windows" && FBt())
    return p("daemon_ensure_running", "uid_collapse"), { ok: false, reason: Cdn, causeCode: "uid_collapse" };
  return Ot(t, e, false);
}
async function Ot(t, e, o) {
  let a = Date.now(),
    u = await zr(t.forceTransient ?? false, e);
  if (u === "up") return Oe(o), { ok: true };
  if (typeof u === "object") {
    if (t.spawnIntent)
      return (
        p("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"),
        p("agent_launcher", "raw_daemon_client_misconfigured"),
        { ok: false, reason: u.refuse, causeCode: "wrapper" }
      );
    return Oe(o), { ok: true };
  }
  let i = Date.now(),
    f = i - a > 40000,
    m = await Pt(),
    _ = m ? await Gtt() : { execPathStale: false, launcherPrefixDead: false },
    T = m && (_.execPathStale || _.launcherPrefixDead);
  if (T)
    s("tengu_bg_daemon_service_stale_exec", { launcher_dead: _.launcherPrefixDead }),
      n(
        _.execPathStale
          ? "daemon service exec path is stale (binary deleted) \u2014 falling back to transient spawn. Run 'claude daemon install' to repair."
          : "daemon service unit starts through a launcher that was deleted or is no longer executable \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.",
        { level: "warn" },
      );
  let S = false;
  if (m && !T) {
    (S = true), t.onStarting?.();
    let B = await kt(e);
    if (B) return p("daemon_ensure_running", B.code), { ok: false, reason: B.reason, causeCode: B.causeCode };
    let U = await qtt(),
      z = await DRe(5000);
    if (
      (s("tengu_bg_daemon_install", {
        outcome_ok: z,
        via_service: true,
        fresh_install: false,
        clock_jump: f,
        duration_ms: Date.now() - a,
        platform_darwin: D() === "macos",
        platform_linux: D() === "linux",
        platform_windows: D() === "windows",
      }),
      z)
    )
      return Oe(o), { ok: true };
    s("tengu_bg_daemon_service_poll_fallthrough", { sr_ok: U.ok }),
      n(
        `daemon service ${mme} 5s${U.ok ? "" : ` (${U.error})`} \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.`,
        { level: "warn" },
      );
  }
  if (!m && !t.forceTransient && I4t() === "ask" && (await It()) && !ie().daemonInstallPromptDismissed)
    return (
      s("tengu_bg_daemon_cold_start_ask", {}),
      {
        ok: false,
        askInstall: true,
        causeCode: "ask",
        reason: "No background daemon is running. Run 'claude daemon install' to set it up as a persistent service.",
      }
    );
  if (!S) {
    let B = ru();
    if (!(await ZE()) && (await Ch(1, e).catch(() => null)))
      return (
        p("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"),
        p("agent_launcher", "zombie_kill_client_misconfigured"),
        { ok: false, reason: B ?? Ye(), causeCode: "wrapper" }
      );
    t.onStarting?.();
    let U = await kt(e);
    if (U) return p("daemon_ensure_running", U.code), { ok: false, reason: U.reason, causeCode: U.causeCode };
  }
  let A = JC(),
    P = A.lastTransientSpawnAt === null ? null : Date.now() - A.lastTransientSpawnAt;
  A.lastTransientSpawnAt = Date.now();
  let C = b({ label: Zr(), cwd: ee(), pid: process.pid }),
    q = Date.now(),
    {
      err: N,
      stderrPath: Q,
      child: K,
      recoveredAfterReinstallWait: Y,
    } = await Mkt(["daemon", "run", "--origin", "transient", "--spawned-by", C]);
  if (N) {
    if (Q) Tt(xt(Q), { recursive: true, force: true }).catch(() => {});
    return (
      s("tengu_bg_daemon_spawn_failed", {
        errno_enoent: E(N) === "ENOENT",
        errno_eacces: E(N) === "EACCES",
        errno: uo(N) ?? w("unknown"),
        launcher_configured: Xl().length > 0 || ru() !== null,
      }),
      p("daemon_ensure_running", "daemon_ensure_spawn_failed"),
      { ok: false, reason: `spawn ${ou()}: ${l(N)}`, causeCode: uo(N) ?? "spawn" }
    );
  }
  let O = ct({ spawnIssuedAt: q, child: K, stderrPath: Q, wrapperConfigured: Xl().length > 0, storageV5: e }),
    W = await xe(O, Date.now() + 30000, false),
    d = Date.now() - i > 60000;
  if (!W && d) W = await xe(O, Date.now() + 5000, false);
  if (!W && !d) W = await xe(O, Math.max(Date.now() + (IP - 30000), q + IP), true);
  let r = O.budgetExtended ? We : IP,
    k = !W && !d && Date.now() - q > r + 60000,
    Z = !W && (d || k) && !o && !(await Fe(O)),
    de = false,
    re,
    M;
  if (!W) {
    let B = await Ve(O, true);
    if (B.length > 0) {
      (de = true),
        n(
          `daemon: transient spawn stderr:
${B}`,
          { level: "error" },
        ),
        (re = [...B.matchAll(/\bE[A-Z]{2,14}\b/g)].find((z) => !"/\\".includes(B[z.index - 1] ?? "."))?.[0]);
      let U = B.split(/\r?\n/)
        .map((z) => zo(Et(z)))
        .find((z) => z.length > 0);
      M = U && U.length > 200 ? `${ce(U, 200)}\u2026` : U;
    }
  }
  if (Q) Tt(xt(Q), { recursive: true, force: true }).catch(() => {});
  if (
    (s("tengu_bg_daemon_install", {
      outcome_ok: W,
      via_service: false,
      fresh_install: false,
      clock_jump: d || f || k,
      duration_ms: Date.now() - a,
      platform_darwin: D() === "macos",
      platform_linux: D() === "linux",
      platform_windows: D() === "windows",
      had_stderr: de,
      child_exited: O.childExit !== null,
      ...(O.childExit?.code !== void 0 && O.childExit.code !== null && { exit_code: O.childExit.code }),
      ...(O.childExit?.signal && { exit_signal: ke(O.childExit.signal) }),
      budget_extended: O.budgetExtended,
      ...(Z && { clock_jump_retry: w("scheduled") }),
      ...(o && { clock_jump_retry: w("retry") }),
      ...(P !== null && { spawn_gap_ms: P }),
      ...(re && { stderr_errno: nvt(re) }),
      ...(!W && (await ft(O))),
    }),
    W)
  ) {
    if ((Qr(), Y)) g("daemon_ensure_running", "daemon_ensure_spawn_waited_reinstall");
    else Oe(o);
    if (Xl().length > 0) {
      let B = await Kp({ proto: Ca, op: "nudge" }).catch(() => null);
      Dt(B?.ok && B.op === "nudge" ? B.processWrapper : void 0);
    }
    return { ok: true };
  }
  if (Z)
    return (
      n(
        "daemon: the clock jumped during the cold start (machine slept?) and the daemon is still unreachable \u2014 retrying the whole start once",
        { level: "warn" },
      ),
      Ot({ ...t, onStarting: void 0 }, e, true)
    );
  p("daemon_ensure_running", "daemon_ensure_transient_unreachable");
  let X = Xl()[0];
  if (X)
    return (
      s("tengu_bg_daemon_spawn_failed", { launcher_configured: true, failed_stage: w("unknown") }),
      p("agent_launcher", "daemon_never_reachable"),
      {
        ok: false,
        causeCode: "timeout",
        reason: `launcher \`${X}\` ran but Claude Code never started${M ? ` \u2014 ${M}` : ` (nothing on stderr within ${r / 1000}s)`}`,
      }
    );
  let F = O.siblingHolderSeen ? null : O.childExit;
  if (F) {
    let B = F.signal ? `signal ${F.signal}` : `exit code ${F.code ?? "?"}`;
    return {
      ok: false,
      causeCode: "exited",
      reason: M
        ? `${ou()} ${gme} (${B}): ${M}`
        : `${ou()} ${gme} (${B}, nothing on stderr) and no other ${ou()} answered within ${Math.round(Math.min(Date.now() - q, r) / 1000)}s`,
    };
  }
  return { ok: false, causeCode: "timeout", reason: `${ou()} ${mme} ${r / 1000}s` };
}
function Oe(t) {
  if (t) {
    g("daemon_ensure_running", "daemon_ensure_clock_jump_retried");
    return;
  }
  y("daemon_ensure_running");
}
function Yr() {
  return rp().target;
}
function Jr(t) {
  if (t.daemonOrigin !== "transient") return false;
  if (t.daemonVersion === t.clientVersion) return false;
  if (t.daemonTarget === t.clientTarget) return false;
  let e = LRe(t.daemonVersion),
    o = LRe(t.clientVersion);
  if (e !== null && o !== null) {
    if (nge(t.daemonVersion) !== nge(t.clientVersion)) return false;
    return o > e;
  }
  if (Btt(t.daemonVersion) || Btt(t.clientVersion)) return false;
  return (
    Ae.valid(t.clientVersion) !== null && Ae.valid(t.daemonVersion) !== null && Ae.gt(t.clientVersion, t.daemonVersion)
  );
}
async function qr(t, e, o, a, u) {
  if (ru() !== null) return false;
  if (!I("tengu_bg_binary_takeover", true)) return false;
  let i =
      t !==
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
      }.VERSION,
    f = i && !a,
    m = Xr(o, i);
  if (!f && !m) return false;
  if (!(await ZE())) return false;
  if (await Pt()) return false;
  if (!e && I4t() === "ask" && (await It()) && !ie().daemonInstallPromptDismissed) return false;
  let _ = await Kr(Yr()).catch(() => null);
  if (!_) return false;
  let T = gZ().cmd;
  if (!(await pe(T))) {
    let N = gZ({ pinToCurrentBinary: true }).cmd;
    if (N === T || !(await pe(N))) return false;
  }
  let S = await Ch(1, u).catch(() => null);
  if (!S) return false;
  if (!zRe(S)) return n(`bg: skipping stale-daemon retire \u2014 lock pid ${S.pid} has no procStart identity`), false;
  let A = Jr({
      daemonVersion: S.version,
      daemonOrigin: S.origin,
      daemonTarget: S.launchTarget,
      clientVersion: {
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
      clientTarget: _,
    }),
    P = f && A,
    C =
      m &&
      S.origin === "transient" &&
      !S.processWrapper &&
      (S.version ===
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
        }.VERSION ||
        (a && A));
  if (!P && !C) return false;
  let q = await TBe(S.pid);
  if (q === "timed-out") {
    try {
      process.kill(S.pid, "SIGKILL");
    } catch {}
    q = await TBe(S.pid);
  }
  if (q !== "exited") return false;
  if (C) JC().prefixAxis = "took-over";
  return (
    n(
      P
        ? `bg: ${ou()} pid ${S.pid} runs ${S.version}; this binary (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.252", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-08-31T16:02:57Z", GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}) is a newer build \u2014 retired the stale ${ou()} so new sessions use the current binary`
        : `bg: ${ou()} pid ${S.pid} predates CLAUDE_CODE_PROCESS_WRAPPER and spawns sessions unwrapped \u2014 retired it so the replacement runs through the configured launcher`,
      { level: "warn" },
    ),
    s("tengu_bg_daemon_binary_takeover", {
      daemon_age_ms: Date.now() - S.startedAt,
      via_prefix: C,
      via_version: P,
      daemon_version: us(S.version),
    }),
    true
  );
}
function Xr(t, e) {
  if (Gk() === "" || t) return false;
  let a = JC();
  if (a.prefixAxis === "took-over") {
    if (e) return false;
    if (!a.prefixContractViolationLogged)
      (a.prefixContractViolationLogged = true),
        n(
          `bg: a raw ${ou()} is running again after this session's launcher-driven restart. Two causes look identical from here: a claude session started BEFORE CLAUDE_CODE_PROCESS_WRAPPER was deployed cold-started it (restart those sessions), or the launcher does not pass that variable through in the environment it hands to \`exec\` (launcher contract #3). Sessions dispatched to it run unwrapped either way; \`claude daemon status\` shows the launcher it records.`,
          { level: "warn" },
        ),
        s("tengu_bg_launcher_replacement_raw", {});
    return false;
  }
  if (e) return true;
  if (a.prefixAxis === "attempted") return false;
  return (a.prefixAxis = "attempted"), true;
}
async function kt(t) {
  let e = await Ch(1, t).catch(() => null);
  if (!e) return null;
  if (e.bgDisabled)
    return (
      s("tengu_bg_daemon_bg_disabled_skip", { origin_service: e.origin === "service" }),
      {
        reason:
          "the background service on this machine is running without background sessions \u2014 its control socket failed to start. " +
          "Check the cause with 'claude daemon status' (daemon.log), then restart the service (launchctl/systemctl, or reboot).",
        code: "daemon_ensure_bg_disabled",
        causeCode: "bg_disabled",
      }
    );
  if (Date.now() - e.startedAt <= ze + 5000) return null;
  let o = await Kp({ proto: Ca, op: "ping" }, { timeoutMs: 1000 }),
    a = {
      started_ago_ms: Date.now() - e.startedAt,
      origin_transient: e.origin === "transient",
      origin_service: e.origin === "service",
      version_skew:
        e.version !==
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
        }.VERSION,
    };
  if (o.ok || o.code === "ETIMEOUT")
    return s("tengu_bg_daemon_zombie_false_positive", { ...a, recheck_etimeout: !o.ok }), null;
  if (!zRe(e))
    return (
      n(`bg: supervisor lock pid ${e.pid} alive but identity unverifiable (no procStart) \u2014 not signalled`, {
        level: "warn",
      }),
      {
        reason: `${CQ({ pid: e.pid, outcome: "unverified" })}. If no daemon is running, delete ${Nw()}; if pid ${e.pid} is a live process you own, stop it yourself first.`,
        code: "daemon_ensure_zombie_unverified",
        causeCode: "zombie",
      }
    );
  let u = false;
  try {
    u = await jr(lI()).then(
      () => true,
      () => false,
    );
  } catch {}
  if (
    (n(`bg: supervisor pid ${e.pid} alive but control socket unreachable \u2014 signalling restart`, { level: "warn" }),
    (await TBe(e.pid)) === "eperm")
  )
    return {
      reason: `${ou()} socket missing; could not restart supervisor (EPERM)`,
      code: "daemon_ensure_zombie_kill_failed",
      causeCode: "zombie",
    };
  return s("tengu_bg_daemon_zombie_restart", { pid: e.pid, ...a, sock_exists: u }), null;
}
async function Pt() {
  if (process.env.CLAUDE_CONFIG_DIR || !(await _Q())) return false;
  return aL().catch(() => false);
}
function Zr() {
  let t = process.argv.slice(2);
  if (t[0] === "agents") return "claude agents";
  if (t.includes("--bg")) return "claude --bg";
  return "claude";
}
async function Qr() {
  let t = D();
  if (t !== "linux" && t !== "wsl") return;
  let e = await Gr("/etc/systemd/logind.conf", "utf8").catch(() => "");
  if (!/^\s*KillUserProcesses\s*=\s*yes\b/im.test(e)) return;
  n(
    "logind KillUserProcesses=yes \u2014 SSH disconnect will kill the transient daemon and its background jobs. Run `loginctl enable-linger $USER` or `claude daemon install` to keep it alive across logout.",
    { level: "warn" },
  );
}
function Ye() {
  return `${VS}: launcher \`${Xl()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`;
}
function Dt(t) {
  let e = Gk();
  if (e === "" || !t) return;
  if (t === e) y("agent_launcher");
  else g("agent_launcher", "served_by_skewed_wrapper");
}
async function It() {
  return Pde() && (await _Q()) && !process.env.CLAUDE_CONFIG_DIR && bEe();
}
function Fkt(t) {
  return Te.daemon(["host-managed", t]);
}
var en = { namespace: "daemon", relPath: ["host-managed"] };
async function $tt(t) {
  let e = await t.ensureScope(en);
  if (!e.ok) throw Nt(Error("host tombstone folder not made", { cause: e.error }), e.error);
}
async function Utt(t, e) {
  let o = await t.write(Fkt(e), "", { publishDiscipline: "inPlace" });
  if (!o.ok) throw Nt(Error("host tombstone write failed", { cause: o.error }), o.error);
}
async function nBe(t, e) {
  await t.delete(Fkt(e)).catch(() => {});
}
function Nt(t, e) {
  let o = iu(e);
  return Object.assign(t, o !== void 0 ? { code: o } : {});
}
export { Vie, tBe, JC, mLn, gLn, Mkt, IP, DRe, Nkt, sL, Fkt, $tt, Utt, nBe };
