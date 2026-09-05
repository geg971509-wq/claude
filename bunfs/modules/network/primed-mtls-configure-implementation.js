// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, au, j0n, W0n, QVt, RQe, Le, OQe, mi } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Me } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { Qd, xR, l } from "/$bunfs/root/chunk-ypdw393e.js";
import { vt, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { lme } from "/$bunfs/root/chunk-gcks6mn0.js";
import { olr, a } from "/$bunfs/root/chunk-fec4384a.js";
import { zt } from "/$bunfs/root/chunk-qm65zb83.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Mr } from "/$bunfs/root/chunk-8qsdea2c.js";
import {
  Ac,
  Bbn,
  E7e,
  Ubt,
  Wbt,
  Zbn,
  YV,
  O7e,
  awn,
  lwn,
  ri,
  lR,
  ie,
  mAe,
  t0,
  gAe,
  Awn,
} from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Ha, GXe } from "/$bunfs/root/chunk-6k63g5t6.js";
import { FAt } from "/$bunfs/root/chunk-q14dgq5g.js";
import { Y } from "/$bunfs/root/chunk-s7e0px8j.js";
import { ye } from "/$bunfs/root/chunk-988p40e0.js";
import { woe } from "/$bunfs/root/chunk-psdymar6.js";
import { r4, KAn } from "/$bunfs/root/chunk-0r9wzh7g.js";
import { hoe, yoe, lGt, dA, n4 } from "/$bunfs/root/chunk-rf51999f.js";
import { Ne } from "/$bunfs/root/chunk-82w4mtvq.js";
import { ife, JYe } from "/$bunfs/root/chunk-s4smmnta.js";
import { xEn } from "/$bunfs/root/chunk-k4a21mkt.js";
import { Pir } from "/$bunfs/root/chunk-ghara6r1.js";
import { gv, Oin, Jr, sWn, i9n, R9n, tGn, pVn } from "/$bunfs/root/chunk-zze8764r.js";
import { Kv, CLe } from "/$bunfs/root/chunk-2n1hsggr.js";
import { Swe } from "/$bunfs/root/chunk-wjr8v4tx.js";
import { syn } from "/$bunfs/root/chunk-qekzccch.js";
import { Hk, as } from "/$bunfs/root/chunk-anwgkcw5.js";
import { hC } from "/$bunfs/root/chunk-fs02hzwy.js";
import { ah } from "/$bunfs/root/chunk-nkjrjh5n.js";
import { Dyn, Oyn } from "/$bunfs/root/chunk-k8xha1qv.js";
import { nre, eR } from "/$bunfs/root/chunk-51qp0385.js";
import { MS } from "/$bunfs/root/chunk-kbyvkqye.js";
import { f5n } from "/$bunfs/root/chunk-308krgtb.js";
import { vCn } from "/$bunfs/root/chunk-7ghw796y.js";
import { av } from "/$bunfs/root/chunk-gpacdhd4.js";
import { QWt } from "/$bunfs/root/chunk-v8ghznj8.js";
import { Yyn, Qyn, Zyn } from "/$bunfs/root/chunk-2qsjxthp.js";
import { dJt, pJt, UQ } from "/$bunfs/root/chunk-xvbmqp62.js";
import { YLe } from "/$bunfs/root/chunk-qjjwrha3.js";
import { aw } from "/$bunfs/root/chunk-ka74qrx3.js";
import { PZe } from "/$bunfs/root/chunk-cs8ty547.js";
import { wV } from "/$bunfs/root/chunk-cbn30h5b.js";
import { slr, D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
function w() {
  let t = Ac().providerCache;
  if (t.preconnectFired) return;
  if (((t.preconnectFired = true), Ne() !== "firstParty" || YV() === "gateway" || O7e())) return;
  if (
    a.HTTPS_PROXY ||
    a.https_proxy ||
    a.HTTP_PROXY ||
    a.http_proxy ||
    a.ANTHROPIC_UNIX_SOCKET ||
    a.CLAUDE_CODE_CLIENT_CERT ||
    a.CLAUDE_CODE_CLIENT_KEY
  )
    return;
  let r = a.ANTHROPIC_BASE_URL || zt().BASE_API_URL;
  fetch(`${r.replace(/\/+$/, "")}/api/hello`, { method: "HEAD", signal: AbortSignal.timeout(1e4) }).catch(() => {});
}
class C {
  promise = void 0;
  telemetryInitialized = false;
}
var Tcr = new J(() => new C());
function v() {
  return Tcr.of(G().host);
}
async function b(t = {}) {
  let r = Date.now();
  Y("info", "init_started"), Mr("init_function_start");
  let e = t.storageV5EnvPin;
  if (e?.backend !== void 0 && !lme(e.configHome))
    n(
      `CLAUDE_CONFIG_DIR no longer names ${e.configHome}, where the v5 storage backend was built at start-up; init() loads its config without it`,
      { level: "warn" },
    ),
      (e = { ...e, backend: void 0 });
  e ??= vCn();
  try {
    let s = Date.now();
    if (O() && e?.backend !== void 0) await QWt(e.backend), await Promise.all([mAe(e.backend), Dyn(e.backend, Ha())]);
    else await mAe();
    if (
      (Y("info", "init_configs_enabled", { duration_ms: Date.now() - s }),
      Mr("init_configs_enabled"),
      O() && e?.backend !== void 0)
    )
      xEn(ie().cachedGrowthBookFeatures?.tengu_windows_credman === true);
    if (O() && e?.backend !== void 0) await GXe(e.backend), Mr("init_remote_settings_primed");
    let c = aw(e?.backend);
    if (O() && c !== void 0)
      await YLe(c), Mr("init_fd_credentials_primed"), await Zbn(c), Mr("init_stored_login_primed");
    let p = Date.now();
    if (
      (nre(),
      await syn(),
      PZe(),
      await Promise.all([woe(), r4(), slr(), olr()]),
      await tGn(),
      await E7e(e?.backend !== void 0 && lme(e.configHome) ? c : void 0),
      mi())
    )
      wV();
    Y("info", "init_safe_env_vars_applied", { duration_ms: Date.now() - p }), Mr("init_safe_env_vars_applied");
    let i = av(e),
      m = aw(i);
    if (O() && i !== void 0) await QWt(i);
    if ((await Oyn(i, Ha()), O() && i !== void 0)) await Pir(i);
    if ((Qyn({ storageV5: i, credentials: m }), awn(m), lwn(i), O() && m !== void 0)) {
      if ((await YLe(m), Wbt())) await Ubt(m);
    }
    if (
      (await Yyn(i),
      lR(i),
      sWn(i),
      Oin({ storageV5: i, credentials: m }),
      Mr("init_after_graceful_shutdown"),
      Promise.all([import("/$bunfs/root/chunk-jn95py26.js"), import("/$bunfs/root/chunk-2sq45cbb.js")]).then(
        ([o, d]) => {
          o.initialize1PEventLogging(i),
            d.onGrowthBookRefresh(() => {
              o.reinitialize1PEventLoggingIfConfigChanged();
            });
        },
      ),
      Mr("init_after_1p_event_logging"),
      Bbn(m, i).catch(h),
      Mr("init_after_oauth_populate"),
      ah(i),
      JYe({ trustProbe: ri }),
      ife(),
      pJt())
    )
      dJt();
    if (hC()) Zyn();
    if ((Mr("init_after_remote_settings_check"), Awn(i), gAe(i), O() && i !== void 0)) t0(i);
    let g = Date.now();
    n("[init] configureGlobalMTLS starting"),
      KAn(),
      Y("info", "init_mtls_configured", { duration_ms: Date.now() - g }),
      n("[init] configureGlobalMTLS complete");
    let f = hoe();
    if (f && !yoe(f.value)) throw new Qd(lGt(f.source, f.value));
    let E = Date.now();
    if (
      (n("[init] configureGlobalAgents starting"),
      dA(),
      Y("info", "init_proxy_configured", { duration_ms: Date.now() - E }),
      n("[init] configureGlobalAgents complete"),
      Mr("init_network_configured"),
      w(),
      Me(process.env.CLAUDE_CODE_REMOTE))
    )
      try {
        let { initAgentProxy: o, getAgentProxyEnv: d } = await import("/$bunfs/root/chunk-vmhv4dh0.js"),
          { registerAgentProxyEnvFn: P } = await import("/$bunfs/root/chunk-h8r2zm52.js");
        P(d), await o();
      } catch (o) {
        n(`[init] agent proxy init failed: ${o instanceof Error ? o.message : String(o)}; continuing without proxy`, {
          level: "warn",
        });
      }
    if ((FAt(), D() === "windows" && !as())) {
      if (!Hk())
        console.error(`Claude Code on Windows requires a shell tool. Git Bash was not found and the PowerShell tool is disabled (CLAUDE_CODE_USE_POWERSHELL_TOOL=0).
  - Install Git for Windows: https://git-scm.com/downloads/win, or
  - Remove CLAUDE_CODE_USE_POWERSHELL_TOOL from your environment or settings.`),
          process.exit(1);
      if ((await gv()) === null)
        console.error(`Claude Code on Windows requires either Git for Windows (for bash) or PowerShell. Install one of:
  - Git for Windows: https://git-scm.com/downloads/win
  - PowerShell 7: https://aka.ms/powershell
Or set CLAUDE_CODE_GIT_BASH_PATH to your bash.exe location.`),
          process.exit(1);
    }
    if (
      (vt(R9n),
      vt(async () => {
        let { cleanupSessionTeams: o } = await import("/$bunfs/root/chunk-2pq8az2e.js");
        await o(i);
      }),
      Kv())
    ) {
      let o = Date.now();
      try {
        let d = await CLe();
        Y("info", d === null ? "init_scratchpad_unavailable" : "init_scratchpad_created", {
          duration_ms: Date.now() - o,
        });
      } catch (d) {
        n(`init: ensureScratchpadDir failed: ${d}`, { level: "error" });
      }
    }
    return (
      au(() => {
        if (Kv()) CLe().catch((o) => n(`onSessionSwitch: ensureScratchpadDir failed: ${o}`, { level: "error" }));
      }),
      f5n(),
      i9n(),
      pVn(),
      Y("info", "init_completed", { duration_ms: Date.now() - r }),
      Mr("init_function_end"),
      i
    );
  } catch (s) {
    if (s instanceof Qd) {
      process.stderr.write(`${s.message}
`),
        Jr(1);
      return;
    }
    if (s instanceof xR) {
      if (!Le() && t.showInvalidConfigDialog) {
        await t.showInvalidConfigDialog({ error: s });
        return;
      }
      process.stderr.write(`Configuration error in ${s.filePath}: ${s.message}
`),
        Jr(1);
      return;
    } else throw s;
  }
}
function Y5t(t) {
  return (v().promise ??= b(t));
}
function Bve(t) {
  let r = v();
  if (pJt()) {
    if (Le() && MS())
      u(r, t).catch((e) => {
        try {
          n(`[3P telemetry] Eager telemetry init failed (beta tracing): ${l(e)}`, { level: "error" });
        } catch {}
      });
    n("[3P telemetry] Waiting for remote managed settings before telemetry init"),
      UQ()
        .then(async () => {
          n("[3P telemetry] Remote managed settings loaded, initializing telemetry"), eR();
          let { captureAdmin3PSteeringSnapshot: e } = await import("/$bunfs/root/chunk-svzhjzp1.js");
          e();
          let [s, c] = await Promise.all([woe(), r4()]);
          if (s || c.changed) n4(), dA();
          await u(r, t);
        })
        .catch((e) => {
          if (RQe() && !r.telemetryInitialized) QVt(y() || A() ? "init_failed" : "not_configured");
          try {
            n(`[3P telemetry] Telemetry init failed (remote settings path): ${l(e)}`, { level: "error" });
          } catch {}
        });
  } else
    u(r, t).catch((e) => {
      try {
        n(`[3P telemetry] Telemetry init failed: ${l(e)}`, { level: "error" });
      } catch {}
    });
}
async function u(t, r) {
  if (t.telemetryInitialized) return;
  t.telemetryInitialized = true;
  let e = "not_configured";
  try {
    await T(r);
  } catch (s) {
    if (((t.telemetryInitialized = false), y())) e = "init_failed";
    throw s;
  } finally {
    QVt(e);
  }
}
function Ecr(t) {
  return t.length > 0 && t.every((r) => r === "prometheus");
}
async function T(t) {
  let { initializeTelemetry: r } = await import("/$bunfs/root/chunk-j25xhhry.js"),
    { meter: e, metricsExporterKinds: s } = await r(t);
  if (e)
    j0n(
      e,
      (p, i) => {
        let m = e?.createCounter(p, i);
        return {
          add(g, f = {}) {
            let o = { ...Swe(), ...f };
            m?.add(g, o);
          },
        };
      },
      { omitUnits: Ecr(s) },
    ),
      W0n()?.add(1, { start_type: OQe() });
}
function _(t) {
  return (t || "")
    .trim()
    .split(",")
    .filter(Boolean)
    .map((r) => r.trim())
    .some((r) => r !== "none");
}
function y() {
  return Me(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) && _(a.OTEL_LOGS_EXPORTER);
}
function A() {
  try {
    let t = ye("policySettings")?.env;
    if (!t) return false;
    return (
      (Me(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) || Me(t.CLAUDE_CODE_ENABLE_TELEMETRY)) &&
      (_(a.OTEL_LOGS_EXPORTER) || _(t.OTEL_LOGS_EXPORTER))
    );
  } catch {
    return false;
  }
}
export { Tcr, Y5t, Bve, Ecr };
