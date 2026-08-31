// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { lR, iP } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { R, l, X } from "/$bunfs/root/chunk-ypdw393e.js";
import { b, V, ER } from "/$bunfs/root/chunk-fv016jr6.js";
import { Hr } from "/$bunfs/root/chunk-ca80fke8.js";
import { an } from "/$bunfs/root/chunk-c47snwm2.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { Qs } from "/$bunfs/root/chunk-6k63g5t6.js";
import { wO, bm } from "/$bunfs/root/chunk-1yr12dqr.js";
import { TV } from "/$bunfs/root/chunk-hkzwg35z.js";
import { av } from "/$bunfs/root/chunk-gpacdhd4.js";
import { aw } from "/$bunfs/root/chunk-ka74qrx3.js";
import { _H } from "/$bunfs/root/chunk-gmj1vprd.js";
import { hDe } from "/$bunfs/root/chunk-vm4xrmr7.js";
import { u2e, CYt, vYt, tNn } from "/$bunfs/root/chunk-f4rhxmmv.js";
import { Xft, VGe } from "/$bunfs/root/chunk-v93709xc.js";
import { i, v, q, f, oe, Sa } from "/$bunfs/root/chunk-saay52v7.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { randomUUID as se } from "crypto";
import { join as J } from "path";
function ie(e) {
  return (
    typeof e === "object" && e !== null && "type" in e && (e.type === "token_update" || e.type === "auth_401_result")
  );
}
function ae(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "auth_401";
}
var ue = 300000,
  F = 240000,
  ce = 300000,
  de = 30000,
  le = 86400000;
function Z() {
  return Te.state("daemon-auth-cooldown");
}
function pe() {
  return Te.state("daemon-auth-status");
}
function ZMn(e, t, h = () => !0, s, u) {
  let n,
    d = !1,
    c = null,
    p = new Set(),
    k = null,
    y = null;
  function g() {
    return (y ??= import("/$bunfs/root/chunk-r7k9wyxs.js"));
  }
  function A(r) {
    let o = { type: "token_update", accessToken: r };
    for (let T of p)
      try {
        T.send(o);
      } catch {}
  }
  async function C() {
    let o = await (await g()).getClaudeAIOAuthTokensAsync(u);
    if (o?.accessToken && o.accessToken !== n?.accessToken)
      (n = {
        accessToken: o.accessToken,
        scopes: o.scopes,
        subscriptionType: o.subscriptionType ?? null,
        rateLimitTier: o.rateLimitTier ?? null,
      }),
        A(n.accessToken);
    W(o?.expiresAt ?? null);
  }
  let I;
  function M(r) {
    if (((I = r), k || e.aborted)) return;
    if (c) clearTimeout(c), (c = null);
    t("auth: no token found, will re-check keychain every 30s"),
      (k = setInterval(function () {
        g()
          .then(async (T) => {
            T.clearOAuthTokenCache();
            let w = await T.getClaudeAIOAuthTokensAsync(u),
              a;
            if (w?.accessToken && w.accessToken !== I && w.expiresAt && w.expiresAt > Date.now())
              a = "auth: token found via keychain re-check";
            else if (w?.refreshToken && (await T.checkAndRefreshOAuthTokenIfNeeded({ credentials: u, storageV5: s })))
              a = "auth: token refreshed via keychain re-check retry";
            if (a) {
              if ((await C(), n && k)) clearInterval(k), (k = null), t(a);
            }
          })
          .catch((T) => t(`auth: keychain re-check error: ${T}`));
      }, de)),
      k.unref();
  }
  function W(r) {
    if (c) clearTimeout(c), (c = null);
    if (!r || e.aborted) return;
    let o = Math.min(Math.max(r - Date.now() - F, 5000), le);
    t(`auth: scheduling proactive refresh in ${Math.round(o / 1000)}s`), (c = setTimeout(z, o)), c.unref();
  }
  async function z() {
    if (e.aborted) return;
    try {
      t("auth: proactive refresh starting");
      let r = await g(),
        o = n?.accessToken,
        T = await r.checkAndRefreshOAuthTokenIfNeeded({ credentials: u, storageV5: s });
      r.clearOAuthTokenCache();
      let w = await r.getClaudeAIOAuthTokensAsync(u),
        a = w?.expiresAt ?? null,
        j = a === null || a > Date.now() + ue;
      if (w?.accessToken && (T || w.accessToken !== o || j) && (a === null || a > Date.now() + F)) {
        await C(),
          t(T ? "auth: proactive refresh succeeded" : "auth: token still valid (cross-process refresh or not yet due)");
        return;
      }
      if (w?.accessToken && a !== null && a > Date.now()) {
        t("auth: proactive refresh failed, retrying in ~60s (token still valid)"), W(Date.now() + 60000 + F);
        return;
      }
      t("auth: proactive refresh failed, signalling re-auth required");
      let P = w?.accessToken ?? o;
      (n = void 0), await B(), M(P);
    } catch (r) {
      t(`auth: proactive refresh error: ${r}`), W(Date.now() + 60000 + F);
    }
  }
  async function H(r) {
    if (d) return t("auth: 401 ignored (3P provider active, no OAuth)"), !1;
    t("auth: handling 401");
    let o = await g();
    if (await o.handleOAuth401Error(r, u, s))
      return o.clearOAuthTokenCache(), await C(), t("auth: 401 recovery succeeded"), !0;
    t("auth: 401 recovery failed, signalling re-auth required"), (n = void 0), await B(), o.clearOAuthTokenCache();
    let w = await o.getClaudeAIOAuthTokensAsync(u);
    if (w?.accessToken !== void 0 && w.accessToken !== r) return await C(), !0;
    return M(r), !1;
  }
  let _ = null;
  function B() {
    if (_) return _;
    return (
      (_ = U().finally(() => {
        _ = null;
      })),
      _
    );
  }
  async function U() {
    let r = await g();
    if (r.getAnthropicApiKey()) {
      t("auth: browser login skipped (API key auth available)");
      return;
    }
    if (r.isUsing3PServices() && !h()) {
      t("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
      return;
    }
    let o = be(),
      T = J(o, "daemon-auth-cooldown"),
      w = J(o, "daemon-auth-status.json");
    try {
      let a;
      if (O() && s !== void 0) {
        let P = await s.read([Z()]);
        if (!P.ok)
          throw new R(
            `v5 cooldown read failed: ${P.error.code}${"telemetryCode" in P.error && P.error.telemetryCode ? ` (${P.error.telemetryCode})` : ""}`,
            "daemon-auth v5 cooldown read failed",
          );
        let Y = P.value.items[0];
        a = Y.found ? Buffer.from(Y.value).toString("utf8") : null;
      } else a = await an().read(T);
      let j = a === null ? NaN : parseInt(a, 10);
      if (!Number.isNaN(j) && Date.now() - j < ce) {
        t("auth: browser login skipped (cooldown)");
        return;
      }
    } catch (a) {
      if (!X(a)) t(`auth: cooldown read error: ${a}`);
    }
    try {
      if ((await an().mkdir(o), O() && s !== void 0)) {
        let a = await s.write(Z(), String(Date.now()), { publishDiscipline: "inPlace" });
        if (!a.ok)
          throw new R(
            `v5 cooldown write failed: ${a.error.code}${"telemetryCode" in a.error && a.error.telemetryCode ? ` (${a.error.telemetryCode})` : ""}`,
            "daemon-auth v5 cooldown write failed",
          );
      } else await an().write(T, String(Date.now()));
    } catch (a) {
      t(`auth: cooldown write error: ${a}`);
    }
    try {
      let { execFileNoThrow: a } = await import("/$bunfs/root/chunk-9k9b6dcv.js");
      a("osascript", [
        "-e",
        'display notification "Your Claude assistant needs re-authentication" with title "Claude"',
      ]);
    } catch {}
    try {
      if (O() && s !== void 0) {
        let a = await s.write(pe(), b({ status: "auth_required", since: Date.now() }), {
          publishDiscipline: "inPlace",
        });
        if (!a.ok)
          throw new R(
            `v5 status write failed: ${a.error.code}${"telemetryCode" in a.error && a.error.telemetryCode ? ` (${a.error.telemetryCode})` : ""}`,
            "daemon-auth v5 status write failed",
          );
      } else await an().write(w, b({ status: "auth_required", since: Date.now() }));
    } catch (a) {
      t(`auth: status write error: ${a}`);
    }
    t("auth: headless daemon cannot complete OAuth \u2014 run `claude auth login` to refresh");
  }
  function x(r) {
    if (!ae(r)) return;
    H(r.failedToken)
      .then((o) => {
        for (let T of p)
          try {
            let w = { type: "auth_401_result", refreshed: o, requestId: r.requestId };
            T.send(w);
          } catch {}
      })
      .catch((o) => {
        t(`auth: 401 handler error: ${o}`);
        for (let T of p)
          try {
            let w = { type: "auth_401_result", refreshed: !1, requestId: r.requestId };
            T.send(w);
          } catch {}
      });
  }
  function G(r) {
    if ((p.add(r), r.on("message", x), n))
      try {
        let o = { type: "token_update", accessToken: n.accessToken };
        r.send(o);
      } catch {}
  }
  function S(r) {
    r.removeListener("message", x), p.delete(r);
  }
  let E = (async () => {
    if (e.aborted) return;
    try {
      let r = await g(),
        o = await r.getClaudeAIOAuthTokensAsync(u);
      if (!o?.accessToken && r.isUsing3PServices()) {
        (d = !0), t("auth: 3P provider active, skipping OAuth refresh loop");
        return;
      }
      if (o?.accessToken)
        (n = {
          accessToken: o.accessToken,
          scopes: o.scopes,
          subscriptionType: o.subscriptionType ?? null,
          rateLimitTier: o.rateLimitTier ?? null,
        }),
          W(o.expiresAt ?? null);
      await r.checkAndRefreshOAuthTokenIfNeeded({ credentials: u, storageV5: s }), await C();
    } catch (r) {
      t(`auth: init error: ${r}`);
    }
  })();
  return (
    E.then(() => {
      if (e.aborted || n || d) return;
      M();
    }),
    e.addEventListener(
      "abort",
      () => {
        if (c) clearTimeout(c), (c = null);
        if (k) clearInterval(k), (k = null);
      },
      { once: !0 },
    ),
    {
      ready: E,
      getAccessToken() {
        return n?.accessToken;
      },
      getAuthSnapshot() {
        return n;
      },
      attachWorker: G,
      detachWorker: S,
      dispose: L,
      [Symbol.dispose]: L,
    }
  );
  function L() {
    if (c) clearTimeout(c), (c = null);
    if (k) clearInterval(k), (k = null);
    for (let r of p) r.removeListener("message", x);
    p.clear();
  }
}
function Q(e, t, h) {
  if (typeof process.send === "function") {
    let c = function (p) {
        let k = d.get(p);
        if (k) d.delete(p), k.resolve(!1);
      },
      n = e;
    process.on("message", (p) => {
      if (!ie(p)) return;
      if (p.type === "token_update") n = p.accessToken;
    });
    let d = new Map();
    return (
      process.on("message", (p) => {
        if (typeof p === "object" && p !== null && "type" in p && p.type === "auth_401_result") {
          let k = p,
            y = d.get(k.requestId);
          if (y) clearTimeout(y.timer), d.delete(k.requestId), y.resolve(k.refreshed);
        }
      }),
      process.channel?.unref(),
      {
        getAccessToken() {
          return n;
        },
        reportAuth401(p) {
          let k = se(),
            y = { type: "auth_401", failedToken: p, requestId: k };
          return new Promise((g) => {
            let A = setTimeout(c, 30000, k);
            A.unref(), d.set(k, { resolve: g, timer: A });
            try {
              process.send(y);
            } catch {
              clearTimeout(A), d.delete(k), g(!1);
            }
          });
        },
      }
    );
  }
  let s = null;
  async function u() {
    return (s ??= await import("/$bunfs/root/chunk-r7k9wyxs.js"));
  }
  return (
    u(),
    {
      getAccessToken() {
        return s?.getClaudeAIOAuthTokens()?.accessToken;
      },
      async reportAuth401(n) {
        return (await u()).handleOAuth401Error(n, t, h);
      },
    }
  );
}
function N(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "shutdown";
}
function ee(e) {
  if (!N(e) || typeof e !== "object" || e === null || !("cause" in e)) return;
  return e.cause === "upgrade" || e.cause === "reload" || e.cause === "yield" ? e.cause : void 0;
}
var K = m(() =>
    f({
      dir: i(),
      name: i().optional(),
      spawnMode: oe(["same-dir", "worktree"]).default("same-dir"),
      capacity: v().int().positive().default(32),
      permissionMode: Sa(bm, oe(wO)).optional(),
      sandbox: q().default(!1),
      sessionTimeoutSeconds: v().int().positive().optional(),
      createSessionOnStart: q().default(!1),
    }).strict(),
  ),
  he = 60000,
  me = 500,
  te = async (e, t, h, s, u, n) => {
    let d = K().parse(e),
      { initializeErrorLogSink: c } = await import("/$bunfs/root/chunk-k24tdfes.js"),
      { initializeAnalyticsSink: p } = await import("/$bunfs/root/chunk-pfm44srq.js");
    c(), p();
    let k = () => _H() ?? s.getAccessToken();
    if (!k()) h(hDe), process.exit(1);
    let { runBridgeHeadless: y, BridgeHeadlessPermanentError: g } = await import("/$bunfs/root/chunk-fxfb1x5a.js"),
      A = null,
      C = !1,
      I = (S) => {
        if (typeof process.send !== "function") return;
        try {
          process.send({ type: "rc_busy", busy: S });
        } catch {}
      },
      M = () => {
        if (A !== null) clearInterval(A), (A = null);
      },
      W = (S) => {
        let E = S > 0;
        if (E !== C) (C = E), I(E);
        if (E) {
          if (A === null) (A = setInterval((L) => L(!0), he, I)), A.unref?.();
        } else M();
      },
      { getFeatureValue_CACHED_MAY_BE_STALE: z } = await import("/$bunfs/root/chunk-2sq45cbb.js"),
      H = z("tengu_daemon_upgrade_defer_busy", !0),
      _ = null,
      B = () => {},
      U = new Promise((S) => {
        B = S;
      }),
      x = (S) => {
        if (N(S)) (_ = ee(S) ?? null), B();
      };
    process.on("message", x);
    let G = async () => (await Promise.race([U, ne(me)]), _);
    try {
      await y(
        {
          dir: d.dir,
          name: d.name,
          spawnMode: d.spawnMode,
          capacity: d.capacity,
          permissionMode: d.permissionMode,
          sandbox: d.sandbox,
          createSessionOnStart: d.createSessionOnStart,
          getAccessToken: k,
          onAuth401: s.reportAuth401,
          log: h,
          storageV5: u,
          credentials: n,
          onBusyChange: W,
          persistActiveSessionsOnShutdown: H,
          awaitShutdownCause: G,
        },
        t,
      );
    } catch (S) {
      if (S instanceof g) h(S.message), process.exit(Xft);
      throw S;
    } finally {
      M(), process.off("message", x);
    }
  };
async function l2e(e, t, h) {
  return Hr("daemon_rc_add", async () => {
    let s = "added";
    return (
      await u2e(
        (u) => {
          let n = CYt(u.remoteControl),
            d = n.findIndex((c) => c.dir === e.dir);
          if (d >= 0) {
            let c = Qs(e, (p) => p !== void 0);
            (n[d] = { ...n[d], ...c }), (s = "updated");
          } else n.push(e), (s = "added");
          u.remoteControl = n;
        },
        t,
        h,
      ),
      s
    );
  });
}
async function c2e(e, t, h) {
  return Hr("daemon_rc_remove", async () => {
    await u2e(
      (s) => {
        let u = CYt(s.remoteControl),
          n = u.filter((d) => d.dir !== e);
        if (n.length === u.length) return !1;
        if (n.length === 0) delete s.remoteControl;
        else s.remoteControl = n;
      },
      t,
      h,
    );
  });
}
var re = m(() => f({ intervalSeconds: v().positive().default(30) }).strict()),
  eW = {
    heartbeat: { schema: re, run: ke, needsOAuth: !1 },
    scheduled: { schema: vYt, run: tNn, needsOAuth: !0 },
    remoteControl: { schema: K, run: te, needsOAuth: !0 },
  };
async function ke(e, t, h, s) {
  let { intervalSeconds: u } = re().parse(e);
  h(`heartbeat worker started (interval=${u}s)`);
  while (!t.aborted) if ((await ne(u * 1000, t), !t.aborted)) h("heartbeat");
}
function Vur(e, t) {
  let h = () => t.abort();
  e.on("SIGTERM", h),
    e.on("SIGINT", h),
    e.on("message", (s) => {
      if (N(s)) t.abort();
    });
}
async function MTr(e, t) {
  if (!e || !(e in eW))
    process.stderr.write(`unknown worker kind: ${e}
`),
      process.exit(2);
  if (e !== "heartbeat" && !TV())
    process.stderr.write(`worker kind '${e}' is not available.
`),
      process.exit(2);
  let h = eW[e],
    s = [];
  for await (let y of process.stdin) s.push(y);
  let u;
  try {
    u = V(Buffer.concat(s).toString("utf8"));
  } catch (y) {
    process.stderr.write(`invalid config JSON on stdin: ${l(y)}
`),
      process.exit(2);
  }
  let n = h.schema().safeParse(u.config);
  if (!n.success)
    process.stderr.write(`config validation failed: ${n.error.message}
`),
      process.exit(2);
  let d = new AbortController();
  Vur(process, d), Xur(d);
  let c = av(t),
    p = aw(c),
    k = Q(u.initialAccessToken, p, c);
  if (O() && c !== void 0) {
    ER({ storageV5: c }), lR(c);
    let [
      { composePolicyLimitsClient: y, primePolicyLimitsCache: g },
      { primeFastPathCredentials: A },
      { setGrowthBookCredentials: C, setGrowthBookStorageBackend: I },
    ] = await Promise.all([
      import("/$bunfs/root/chunk-qvdq8j6c.js"),
      import("/$bunfs/root/chunk-f9k2gea5.js"),
      import("/$bunfs/root/chunk-2sq45cbb.js"),
    ]);
    y({ storageV5: c, credentials: p }), C(p), I(c), await A(p), await g(c), await iP(c);
  }
  try {
    await h.run(
      n.data,
      d.signal,
      (y) =>
        process.stdout.write(
          y +
            `
`,
        ),
      k,
      c,
      p,
    );
  } catch (y) {
    if (Kur(y) === 429)
      process.stdout.write(`rate limited (429): ${l(y)}
`),
        process.exit(VGe);
    throw y;
  }
}
function Kur(e) {
  let t = e;
  for (let h = 0; t != null && h < 8; h++) {
    let s = t.status;
    if (typeof s === "number") return s;
    let u = t.response?.status;
    if (typeof u === "number") return u;
    t = t.cause;
  }
  return;
}
var ye = 30000;
function we(e) {
  try {
    return process.kill(e, 0), !0;
  } catch {
    return !1;
  }
}
function Xur(e, t) {
  let h = {
      ppid: () => process.ppid,
      isAlive: we,
      log: (d) =>
        process.stdout.write(
          d +
            `
`,
        ),
      onGone: () => process.exit(0),
      intervalMs: ye,
      exitGraceMs: 2000,
      ...t,
    },
    s = h.ppid();
  if (s <= 1) return;
  let u = !1,
    n = setInterval(() => {
      if (u) return;
      if (!(!h.isAlive(s) || (D() !== "windows" && h.ppid() !== s))) return;
      (u = !0),
        clearInterval(n),
        h.log("parent supervisor gone \u2014 exiting"),
        e.abort(),
        setTimeout(h.onGone, h.exitGraceMs).unref();
    }, h.intervalMs);
  return n.unref(), n;
}
export { ZMn, l2e, c2e, eW, Vur, MTr, Kur, Xur };
