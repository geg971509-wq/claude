// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { R, we } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { gc } from "/$bunfs/root/chunk-6k63g5t6.js";
import { ir } from "/$bunfs/root/chunk-2rx5nghb.js";
import { lb } from "/$bunfs/root/chunk-0r9wzh7g.js";
import { ab } from "/$bunfs/root/chunk-rf51999f.js";
import { aAt } from "/$bunfs/root/chunk-kxyny47c.js";
import { Mt } from "/$bunfs/root/chunk-fs02hzwy.js";
import { kt } from "/$bunfs/root/chunk-twwd9fep.js";
import { t$ } from "/$bunfs/root/chunk-cds31m36.js";
import {
  JB,
  Fle,
  Q1t,
  WL,
  qL,
  qA,
  d4n,
  iFt,
  em,
  Ble,
  jG,
  JIe,
  zee,
  Qqn,
  v$t,
  tpt,
  vv,
} from "/$bunfs/root/chunk-zze8764r.js";
import { as } from "/$bunfs/root/chunk-anwgkcw5.js";
import { ygn } from "/$bunfs/root/chunk-w3c6n7jh.js";
import { tBn, Ije } from "/$bunfs/root/chunk-p26tvkqz.js";
import { Oh, Md } from "/$bunfs/root/chunk-3qvtfvqg.js";
import { mT } from "/$bunfs/root/chunk-2c0fc0a1.js";
import { Xmn, xI, Ymn, Jmn } from "/$bunfs/root/chunk-81defen8.js";
import { ma } from "/$bunfs/root/chunk-4cvqk0nv.js";
import { i, v, q, H, f, ot } from "/$bunfs/root/chunk-saay52v7.js";
import { Q } from "/$bunfs/root/chunk-wag5ye9w.js";
import { isIP as te } from "net";
import { lookup as K } from "dns/promises";
import { isIP as X } from "net";
import z from "ws";
class Ihe extends Error {
  constructor(e) {
    super(e);
    this.name = "MonitorWsPreconditionError";
  }
}
function QIt(e) {
  switch (e.protocol) {
    case "wss:":
    case "https:":
      e.protocol = "wss:";
      break;
    case "ws:":
    case "http:":
      e.protocol = "ws:";
      break;
    default:
      throw new Ihe(`unsupported socket base scheme ${e.protocol}`);
  }
  return e.toString();
}
function U(e) {
  return e.replace(/^\[|\]$/g, "");
}
async function Y(e, t) {
  let o = new URL(e),
    l = U(o.hostname);
  if (X(l)) {
    if (JIe(l)) throw new Ihe(`${l} is in a private, link-local, or cloud-metadata range`);
    return { url: e, tls: t.tls };
  }
  let g;
  try {
    g = await K(l, { all: true });
  } catch (k) {
    throw new Ihe(`could not resolve ${l}: ${we(k).message}`);
  }
  if (g.length === 0) throw new Ihe(`could not resolve ${l}`);
  for (let { address: k } of g)
    if (JIe(k)) throw new Ihe(`${l} resolves to ${k}, which is in a private, link-local, or cloud-metadata range`);
  if (t.proxy) return { url: e, tls: t.tls };
  if (o.protocol === "wss:") return { url: e, tls: t.tls };
  let w = g.find((k) => k.family === 4) ?? g[0],
    T = o.host;
  return (
    (o.hostname = w.family === 6 ? `[${w.address}]` : w.address),
    { url: o.toString(), headers: { Host: T }, tls: t.tls }
  );
}
var G = 30000,
  ait = "handshake_timeout";
function J(e, t) {
  let o = Number.isInteger(e) && e >= 100 && e <= 599 ? e : 0;
  return `${t ? "cf_mitigated" : "upgrade_rejected"}_${o}`;
}
function fZ(e) {
  let t = /^(cf_mitigated|upgrade_rejected)_(\d{1,3})$/.exec(e ?? "");
  if (t === null) return null;
  return { status: Number(t[2]), cfMitigated: t[1] === "cf_mitigated" };
}
var L = 1048576;
function Z(e) {
  if (Array.isArray(e)) return e.reduce((t, o) => t + o.length, 0);
  if (e instanceof ArrayBuffer) return e.byteLength;
  return e.length;
}
function q0e(e) {
  return {
    taskRegistry: e.taskRegistry,
    toolUseId: e.toolUseId,
    agentId: e.agentId,
    storageV5: e.storageV5,
    credentials: e.credentials,
  };
}
function ee(e) {
  return (t) => {
    if (e.readyState === z.OPEN)
      try {
        e.send(t);
      } catch {}
  };
}
async function Tje(e, t) {
  let o = q0e(t),
    { description: l, timeout_ms: g, persistent: w } = e,
    { url: T, protocols: k } = e.ws;
  aAt(T);
  let { toolUseId: A, taskRegistry: d } = o,
    y = Fle(o),
    r = e.reuseTaskId ?? Oh("monitor_ws"),
    M = Q1t({
      description: l,
      agentId: y,
      taskRef: { id: r },
      killTask: () => {
        if (!iFt(r, p)) return false;
        return em(r, d, { quiet: true }), true;
      },
    }),
    _ = ab(T),
    I = await Y(T, { proxy: _, tls: lb() }),
    D = gc(e.headers ?? {}, (c, s) => s.toLowerCase() === "host"),
    p = new z(I.url, k, { proxy: _, headers: { ...D, ...I.headers }, tls: I.tls, maxPayload: L }),
    E = Date.now(),
    x,
    C = () => iFt(r, p),
    P = Date.now();
  p.on("open", () => {
    let c = d.all()[r];
    if (c && c.status === "running" && C())
      try {
        e.onLifecycle?.("open", void 0, Date.now() - E);
      } catch {}
    let s = e.keepalive;
    if (s && c && c.status === "running" && C()) {
      for (let u of s.openFrames)
        try {
          p.send(u);
        } catch {}
      (P = Date.now()),
        (x = setInterval(
          (u, h, b) => {
            if (b !== void 0 && Date.now() - P > b) {
              try {
                u.terminate();
              } catch {}
              return;
            }
            for (let S of h)
              try {
                u.send(S);
              } catch {}
          },
          s.intervalMs,
          p,
          typeof s.frame === "string" ? [s.frame] : s.frame,
          s.deadlineMs,
        )),
        x.unref?.();
    }
    if (e.onSender && c && c.status === "running" && C())
      try {
        e.onSender(ee(p));
      } catch {}
  }),
    p.on("message", (c, s) => {
      P = Date.now();
      let u = d.all()[r];
      if (!u || u.status !== "running" || !C()) return;
      let h = Z(c);
      if (h > L) {
        WL(l, `[Dropped ${h}-byte frame (exceeds ${L}); closing]`, r, { isHousekeeping: true, agentId: y }),
          em(r, d, { quiet: true });
        return;
      }
      if (s) {
        M.onData(`[binary frame, ${h} bytes]
`);
        return;
      }
      let b = c.toString("utf8");
      if (typeof e.transform === "function") {
        let S;
        try {
          S = e.transform(b);
        } catch {
          S = null;
        }
        if (S === null) return;
        b = S;
      }
      M.onData(
        b +
          `
`,
      );
    });
  let W;
  p.on("unexpected-response", (c, s) => {
    let u = s?.statusCode ?? 0;
    if (u === 101) return;
    let h = s?.headers ?? {},
      b = h["cf-mitigated"] !== void 0;
    (W = J(u, b)),
      n(
        `[callWs] upgrade rejected: status=${u} cf-mitigated=${String(h["cf-mitigated"])} cf-ray=${String(h["cf-ray"])}`,
      ),
      s?.resume?.();
    let S = d.all()[r];
    if (!e.quietLifecycle && S?.status === "running" && C())
      WL(l, `[WebSocket upgrade rejected: HTTP ${u}]`, r, { isHousekeeping: true, agentId: y });
    try {
      p.terminate();
    } catch {}
  }),
    p.on("error", (c) => {
      clearInterval(x);
      try {
        e.onSenderClosed?.();
      } catch {}
      let s = d.all()[r];
      if (!s || s.status !== "running" || !C()) return;
      if ((n(`[callWs] socket error: ${c.message}`), !e.quietLifecycle && W === void 0))
        WL(l, `[WebSocket error: ${c.message}]`, r, { isHousekeeping: true, agentId: y });
    }),
    p.on("close", (c, s) => {
      clearInterval(x), M.finish();
      try {
        e.onSenderClosed?.();
      } catch {}
      let u = d.all()[r];
      if (!u || u.status !== "running" || !C()) return;
      try {
        e.onLifecycle?.("close", W ?? String(c), Date.now() - E);
      } catch {}
      if (!e.quietLifecycle) {
        let h = s.length ? ` ${s.toString("utf8")}` : "";
        WL(l, `[WebSocket closed: ${c}${h}]`, r, { isHousekeeping: true, agentId: y });
      }
      em(r, d, { quiet: true, connectionLost: true });
    });
  let j = w
      ? void 0
      : setTimeout(
          (c, s, u, h, b, S) => {
            if (c.isKilled()) return;
            if (!S) WL(s, "[Monitor timed out \u2014 re-arm if needed.]", u, { isHousekeeping: true, agentId: h });
            em(u, b, { quiet: true });
          },
          g,
          M,
          l,
          r,
          y,
          d,
          e.quietLifecycle,
        ),
    V = {
      ...Md(r, "monitor_ws", l, A),
      type: "monitor_ws",
      status: "running",
      url: T,
      timeoutId: j,
      agentId: y,
      ...(e.ambient && { ambient: true }),
      ...(e.autoReactArmed && { autoReactArmed: true }),
      ...(e.autoReactSlug && { autoReactSlug: e.autoReactSlug }),
      ...(e.frameLive && { frameLive: { ...e.frameLive, armedAt: Date.now() } }),
    };
  if ((d.register(V), d4n(r, p), qL(y, `monitor:${r}`, d), e.ambient)) {
    let c = setTimeout(
      (s, u, h, b, S) => {
        if (s.readyState === 0 && iFt(u, s)) {
          try {
            b.onLifecycle?.("close", ait, Date.now() - S);
          } catch {}
          em(u, h, { quiet: true, connectionLost: true });
        }
      },
      e.handshakeDeadlineMs ?? G,
      p,
      r,
      d,
      e,
      E,
    );
    c.unref?.(), p.once("open", () => clearTimeout(c)), p.once("close", () => clearTimeout(c));
  }
  return { data: { taskId: r, timeoutMs: w ? 0 : g, persistent: w } };
}
var N = 3600000,
  F = 1800000,
  B = 300000;
var oe = "Shell command or script. Each stdout line is an event; exit ends the watch.",
  ne = "command contains control characters that would be hidden in the approval dialog",
  re = () => i().refine(t$, ne),
  se = () =>
    f({
      url: i()
        .refine(t$, "url contains control characters that would be hidden in the approval dialog")
        .refine((e) => {
          try {
            let t = new URL(e);
            return (
              (t.protocol === "ws:" || t.protocol === "wss:") &&
              !t.username &&
              !t.password &&
              !/[\t\n\r]/.test(e) &&
              /^[\x00-\x7F]*$/.test(e)
            );
          } catch {
            return false;
          }
        }, "url must be a valid ASCII ws:// or wss:// URL with no userinfo or whitespace"),
      protocols: H(i().regex(/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, "protocol must be an RFC 6455 token"))
        .refine((e) => new Set(e).size === e.length, "protocols must be unique")
        .optional(),
    }).describe(
      "WebSocket to open. Each text frame is an event; binary frames are reported as a placeholder line. Socket close ends the watch. Cannot be combined with command.",
    );
function ie() {
  return {
    description: i().describe("Short human-readable description of what you are monitoring (shown in notifications)."),
    timeout_ms: v()
      .min(1000)
      .optional()
      .default(B)
      .describe(`Kill the monitor after this deadline. Default ${B}ms, max ${N}ms. Ignored when persistent is true.`),
    persistent: q()
      .optional()
      .default(false)
      .describe(
        "Run for the lifetime of the session (no timeout). Use for session-length watches like PR monitoring or log tails. Stop with TaskStop.",
      ),
  };
}
var ae = { message: `timeout_ms must be \u2264 ${N}`, path: ["timeout_ms"] };
function ce(e) {
  return e.persistent || e.timeout_ms <= N;
}
function MUn(e) {
  if (!a.CLAUDE_CODE_REMOTE) return { timeout_ms: e.timeout_ms, persistent: e.persistent };
  return { timeout_ms: e.persistent ? F : Math.min(e.timeout_ms, F), persistent: false };
}
function le(...e) {
  return Q(e, Boolean) === 1;
}
var ue = m(() =>
  ot({ ...ie(), command: re().optional().describe(oe), ws: se().optional() })
    .refine((e) => le(e.command, e.ws), "exactly one of command or ws")
    .refine(ce, ae),
);
var me = m(() =>
  f({
    taskId: i().describe("ID of the background monitor task."),
    timeoutMs: v().describe("Timeout deadline in milliseconds (0 when persistent)."),
    persistent: q().optional().describe("No timeout \u2014 runs until TaskStop or session end."),
  }),
);
async function de(e, t, o, l) {
  let { description: g } = t,
    { timeout_ms: w, persistent: T } = MUn(t),
    { abortController: k, toolUseId: A, taskRegistry: d } = o,
    y = Fle(o),
    r = {},
    O = Q1t({
      description: g,
      agentId: y,
      taskRef: r,
      killTask: () => {
        if (!r.id) return false;
        return JB(r.id, d), true;
      },
    }),
    M = await jG(e, k.signal, "bash", {
      session: o.session,
      preventCwdChanges: true,
      shouldUseSandbox: vv({ command: e }),
      sandboxAttributionId: A,
      attributionMessageId: l?.message.id,
      onStdout: O.onData,
      agentWorktree: o.agentWorktree,
      isolationRoot: Ble(o),
      sessionEnvVars: o.sessionEnvVars,
      storageV5: o.storageV5,
    });
  if (M.status === "completed") {
    let D = await M.result;
    if (D.preSpawnError) throw new R(D.preSpawnError, "Monitor: pre-spawn error (cwd/argv redacted)");
  }
  let _ = await zee(
    { command: e, description: g, shellCommand: M, toolUseId: A, agentId: y, kind: "monitor" },
    { abortController: k, taskRegistry: d },
  );
  (r.id = _.taskId), qL(y, `monitor:${_.taskId}`, d);
  let I = T
    ? void 0
    : setTimeout(
        (D, p, E, x, C) => {
          if (D.isKilled()) return;
          WL(p, "[Monitor timed out \u2014 re-arm if needed.]", E, { isHousekeeping: true, agentId: x }), JB(E, C);
        },
        w,
        O,
        g,
        _.taskId,
        y,
        d,
      );
  return (
    M.result.then(() => {
      if (I) clearTimeout(I);
      O.finish(), qA(y, `monitor:${_.taskId}`, d);
    }),
    { data: { taskId: _.taskId, timeoutMs: T ? 0 : w, persistent: T } }
  );
}
function Eje(e) {
  if (!Mt("allow_web_fetch"))
    return {
      kind: "compliance",
      host: "",
      detail: "arbitrary-URL egress is disabled by your organization's compliance policy",
    };
  let t = new URL(e),
    o = U(t.hostname);
  if (te(o) && JIe(o))
    return { kind: "ssrf", host: o, detail: "the address is in a private, link-local, or cloud-metadata range" };
  let l = t.port !== "" ? Number(t.port) : t.protocol === "wss:" ? 443 : 80,
    g = ygn(o, l);
  if (!g.allowed) return { kind: "sandbox-policy", host: o, detail: g.reason };
  return null;
}
function pe(e) {
  let t = Eje(e.url);
  if (t !== null)
    return {
      behavior: "deny",
      message:
        t.kind === "compliance"
          ? `Monitor cannot open a WebSocket: ${t.detail}.`
          : `Monitor cannot open a WebSocket to ${t.host}: ${t.detail}.`,
      decisionReason: {
        type: "other",
        reason:
          t.kind === "compliance"
            ? "compliance taint disables model-chosen URL egress"
            : t.kind === "ssrf"
              ? "SSRF-blocked address range"
              : t.detail,
      },
    };
  let o = e.protocols !== void 0 && e.protocols.length > 0 ? ` (subprotocols: ${Ije(e.protocols)})` : "";
  return { behavior: "ask", message: `Monitor will open a WebSocket to ${e.url}${o}`, suggestions: [] };
}
var fe = {
    name: ma,
    enablesCodeExecution: true,
    maxResultSizeChars: 1e4,
    shouldDefer: true,
    permissionCheckFailureDecision(e, t) {
      return v$t(ma, t);
    },
    userFacingName() {
      return "Monitor";
    },
    getToolUseSummary(e) {
      if (!e?.description) return null;
      return ir(e.description, mT);
    },
    getActivityDescription(e) {
      return e?.description ? `Monitoring: ${e.description}` : "Monitoring";
    },
    isEnabled() {
      return xI() && as();
    },
    isConcurrencySafe() {
      return true;
    },
    renderToolUseMessage(e) {
      if (!e.description) return null;
      return e.description;
    },
    get outputSchema() {
      return me();
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content: `Monitor started (task ${e.taskId}, ${e.persistent ? "persistent \u2014 runs until TaskStop or session end" : `timeout ${e.timeoutMs}ms`}). You will be notified on each event. Keep working \u2014 do not poll or sleep. Events may arrive while you are waiting for the user \u2014 an event is not their reply.`,
      };
    },
  },
  EEr = kt({
    ...fe,
    searchHint:
      "watch, monitor, or keep an eye on a process/log/command or WebSocket \u2014 stream each stdout line as a live notification",
    async description() {
      return Ymn() + Jmn + Xmn();
    },
    async prompt() {
      return Ymn() + Jmn + Xmn();
    },
    get inputSchema() {
      return ue();
    },
    toAutoClassifierInput(e) {
      return e.ws ? `websocket ${e.ws.url}${tBn(e.ws)}` : (e.command ?? "");
    },
    async checkPermissions(e, t) {
      if (e.ws) {
        let o = Qqn("Monitor websocket", t);
        if (o !== void 0) return o;
        return pe(e.ws);
      }
      return tpt({ ...e, command: e.command }, t);
    },
    async call(e, t, o, l) {
      if (e.ws) return Tje({ ...e, ...MUn(e), ws: e.ws }, q0e(t));
      return de(e.command, e, t, l);
    },
  });
export { Ihe, QIt, ait, fZ, q0e, Tje, MUn, Eje, EEr };
