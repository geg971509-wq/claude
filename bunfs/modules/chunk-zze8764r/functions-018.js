// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Aar, Ahr, Alr, BPe, Blr, Bx, Chr, Clr, Dlr, Ehr, Ejt, FR, Gar, Har, Ihr, Ilr, Jae, KHt, MIe, Mi, Olr, P_e, Par, Pce, Phr, Plr, RU, Rlr, S$e, SG, VHt, Wae, War, Wlr, Xar, YHt, Yae, Yde, Yir, _Wt, _lr, aGe, aar, ck, dK, e$e, ele, elr, glr, hWt, hlr, iar, jNe, jPe, jar, jlr, kjt, l9, lar, lun, o$e, olr, pUe, qar, qlt, s$e, vlr, xhr, yde, yjt, zNe, zae, zar, zlr } from "/$bunfs/root/modules/chunk-zze8764r/core.js";
import { $At, $I, $J, $a, $ar, $c, AFe, Ag, BH, Bir, Bn, Ct, D, D9, DC, Di, Dl, Dr, E, En, Eo, Et, F3, FI, F_, Fn, Fv, G, Gde, Gu, HQe, Hfe, Hn, Hp, I, IHt, I_, Is, It, J8n, Ja, Jd, Je, Jir, KNe, Kae, Ku, Lar, Le, Lp, M6, MD, MS, MTt, M_t, Me, Mo, Ms, N$, N0, Na, Nar, O, OMe, P4t, P9, PY, Pf, Po, Pp, Ps, Q, Qae, Qir, Qo, R, R0, SM, SX, Se, St, Te, Tl, Tt, UAt, Un, Up, Ur, V, VO, VTn, Vd, Vn, Vr, Vt, WNe, Wrr, Wt, X, XF, Xm, Y, Yt, Z6, Zo, Zt, _o, _pe, _r, a, aN, ae, at, b, be, c, cKn, ce, ci, die, eP, ear, ee, ew, f_, fm, ft, fve, fxn, g, gH, gHt, gr, gt, gwe, gxn, h, hAe, ho, iXe, jD, k5, kAe, kC, ka, kf, l, lIn, lKn, la, le, lg, mp, mw, n, nde, ne, ni, no, o1, oar, oor, oue, ov, p, pde, pl, pr, q8e, qN, qNe, qWt, qae, qm, r1e, rar, rf, s, sar, sl, sn, su, tKe, tTe, ta, tar, te, tgt, uKe, v2, vFe, vT, vu, w, wr, x$, xo, y, yO, ye, yh, yl, zHt, zO, zp } from "/$bunfs/root/modules/chunk-zze8764r/prelude.js";
import { Ain, BU, Bv, DI, DUt, G_, HUe, Hde, II, IV, Jw, KMt, L8, LK, LR, LV, MR, MV, OR, OUe, Oxe, V9e, Vde, X9e, XK, Y7, ZK, _9, cu, cye, fUe, fk, gde, gv, hv, ict, ip, lee, mUe, npe, ope, r0e, rh, sk, tGe, x2, z1, zBe } from "/$bunfs/root/modules/chunk-zze8764r/functions-001.js";
import { ap, oHe, rO } from "/$bunfs/root/modules/chunk-zze8764r/functions-002.js";
import { aP } from "/$bunfs/root/modules/chunk-zze8764r/functions-004.js";
import { zb } from "/$bunfs/root/modules/chunk-zze8764r/functions-007.js";
import { ix, lx } from "/$bunfs/root/modules/chunk-zze8764r/functions-008.js";
import { F1, WZ } from "/$bunfs/root/modules/chunk-zze8764r/functions-010.js";
import { Zf } from "/$bunfs/root/modules/chunk-zze8764r/functions-011.js";
import { In, iHt, mHt } from "/$bunfs/root/modules/chunk-zze8764r/functions-017.js";
import { Wy, zr } from "/$bunfs/root/modules/chunk-zze8764r/functions-019.js";
import { Yc, im } from "/$bunfs/root/modules/chunk-zze8764r/functions-020.js";

function JIe(e) {
  let t = gHt(e);
  if (t === 4) return hHt(e);
  if (t === 6) return Hir(e);
  return !1;
}

function hHt(e) {
  let t = e.split(".").map(Number),
    [r, o] = t;
  if (t.length !== 4 || r === void 0 || o === void 0 || t.some((u) => Number.isNaN(u))) return !1;
  if (r === 127) return !1;
  if (r === 0) return !0;
  if (r === 10) return !0;
  if (r === 169 && o === 254) return !0;
  if (r === 172 && o >= 16 && o <= 31) return !0;
  if (r === 100 && o >= 64 && o <= 127) return !0;
  if (r === 192 && o === 168) return !0;
  return !1;
}

function Hir(e) {
  let t = e.toLowerCase();
  if (t === "::1") return !1;
  if (t === "::") return !0;
  let r = Wir(t);
  if (r !== null) return hHt(r);
  if (t.startsWith("fc") || t.startsWith("fd")) return !0;
  let o = St(t, ":");
  if (o && o.length === 4 && o >= "fe80" && o <= "febf") return !0;
  return !1;
}

function jir(e) {
  let t = [];
  if (e.includes(".")) {
    let x = e.lastIndexOf(":"),
      M = e.slice(x + 1);
    e = e.slice(0, x);
    let F = M.split(".").map(Number);
    if (F.length !== 4 || F.some((U) => !Number.isInteger(U) || U < 0 || U > 255)) return null;
    t = [(F[0] << 8) | F[1], (F[2] << 8) | F[3]];
  }
  let r = e.indexOf("::"),
    o,
    u;
  if (r === -1) (o = e.split(":")), (u = []);
  else {
    let x = e.slice(0, r),
      M = e.slice(r + 2);
    (o = x === "" ? [] : x.split(":")), (u = M === "" ? [] : M.split(":"));
  }
  let _ = 8 - t.length - o.length - u.length;
  if (_ < 0) return null;
  let A = [...o, ...Array(_).fill("0"), ...u].map((x) => parseInt(x, 16));
  if (A.some((x) => Number.isNaN(x) || x < 0 || x > 65535)) return null;
  return A.push(...t), A.length === 8 ? A : null;
}

function Wir(e) {
  let t = jir(e);
  if (!t) return null;
  if (t[0] === 0 && t[1] === 0 && t[2] === 0 && t[3] === 0 && t[4] === 0 && t[5] === 65535) {
    let r = t[6],
      o = t[7];
    return `${r >> 8}.${r & 255}.${o >> 8}.${o & 255}`;
  }
  return null;
}

function yHt(e, t, r) {
  let o = "all" in t && t.all === !0,
    u = gHt(e);
  if (u !== 0) {
    if (JIe(e)) {
      r(fHt(e, e), "");
      return;
    }
    let d = u === 6 ? 6 : 4;
    if (o) r(null, [{ address: e, family: d }]);
    else r(null, e, d);
    return;
  }
  Bir(e, { all: !0 }, (d, _) => {
    if (d) {
      r(d, "");
      return;
    }
    for (let { address: x } of _)
      if (JIe(x)) {
        r(fHt(e, x), "");
        return;
      }
    let C = _[0];
    if (!C) {
      r(Object.assign(Error(`ENOTFOUND ${e}`), { code: "ENOTFOUND", hostname: e }), "");
      return;
    }
    let A = C.family === 6 ? 6 : 4;
    if (o)
      r(
        null,
        _.map((x) => ({ address: x.address, family: x.family === 6 ? 6 : 4 })),
      );
    else r(null, C.address, A);
  });
}

function fHt(e, t) {
  let r = Error(
    `HTTP hook blocked: ${e} resolves to ${t} (private/link-local address). Loopback (127.0.0.1, ::1) is allowed for local dev.`,
  );
  return Object.assign(r, { code: "ERR_HTTP_HOOK_BLOCKED_ADDRESS", hostname: e, address: t });
}

async function zir() {
  let { SandboxManager: e } = await import("/$bunfs/root/chunk-e15r39gd.js");
  if (!e.isSandboxingEnabled()) return;
  await e.waitForNetworkInitialization();
  let t = e.getProxyPort();
  if (!t) return;
  let r = e.getProxyAuthToken();
  return { host: "127.0.0.1", port: t, protocol: "http", ...(r && { auth: { username: "srt", password: r } }) };
}

function Gir() {
  let e = Je();
  return { allowedUrls: e.allowedHttpHookUrls, allowedEnvVars: e.httpHookAllowedEnvVars };
}

function qir(e) {
  return e.replace(/[\r\n\x00]/g, "");
}

function Kir(e, t) {
  let r = e.replace(/\$\{([A-Z_][A-Z0-9_]*)\}|\$([A-Z_][A-Z0-9_]*)/g, (o, u, d) => {
    let _ = u ?? d;
    if (!t.has(_))
      return n(`Hooks: env var $${_} not in allowedEnvVars, skipping interpolation`, { level: "warn" }), "";
    return Na()[_] ?? "";
  });
  return qir(r);
}

async function Zpt(e, t, r, o, u = Mi) {
  let d = Gir();
  if (d.allowedUrls !== void 0) {
    if (!d.allowedUrls.some((M) => F1(e.url, M))) {
      let M = `HTTP hook blocked: ${e.url} does not match any pattern in allowedHttpHookUrls`;
      return n(M, { level: "warn" }), { ok: !1, body: "", error: M };
    }
  }
  let _ = e.timeout ? e.timeout * 1000 : u,
    { signal: C, cleanup: A } = Ja(o, { timeoutMs: _ });
  try {
    let x = { "Content-Type": "application/json" };
    if (e.headers) {
      let W = e.allowedEnvVars ?? [],
        z = d.allowedEnvVars !== void 0 ? W.filter((fe) => d.allowedEnvVars.includes(fe)) : W,
        pe = new Set(z);
      for (let [fe, me] of Object.entries(e.headers)) x[fe] = Kir(me, pe);
    }
    let M = await zir(),
      F = !M && yh() !== void 0 && !DC(e.url);
    if (M) n(`Hooks: HTTP hook POST to ${e.url} (via sandbox proxy :${M.port})`);
    else if (F) n(`Hooks: HTTP hook POST to ${e.url} (via env-var proxy)`);
    else n(`Hooks: HTTP hook POST to ${e.url}`);
    let U = await Dl.post(e.url, r, {
      headers: x,
      signal: C,
      responseType: "text",
      validateStatus: () => !0,
      maxRedirects: 0,
      proxy: M ?? !1,
      lookup: M || F ? void 0 : yHt,
    });
    A();
    let B = U.data ?? "";
    return (
      n(`Hooks: HTTP hook response status ${U.status}, body length ${B.length}`),
      { ok: U.status >= 200 && U.status < 300, statusCode: U.status, body: B }
    );
  } catch (x) {
    if ((A(), C.aborted)) return { ok: !1, body: "", aborted: !0 };
    let M = l(x);
    return n(`Hooks: HTTP hook error: ${M}`, { level: "error" }), { ok: !1, body: "", error: M };
  }
}

function Vir(e, t) {
  let r = (u) => {
      let d = t;
      for (let _ of u.split(".")) {
        if (d == null || typeof d !== "object") return;
        d = d[_];
      }
      return d;
    },
    o = (u) => {
      if (typeof u === "string")
        return u.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_.]*)\}/g, (d, _) => {
          let C = r(_);
          if (C === void 0 || C === null) return "";
          return typeof C === "object" ? b(C) : String(C);
        });
      if (Array.isArray(u)) return u.map(o);
      if (u !== null && typeof u === "object") {
        let d = {};
        for (let [_, C] of Object.entries(u)) d[_] = o(C);
        return d;
      }
      return u;
    };
  return o(e);
}

async function HNe(e, t, r, o, u, d = Mi) {
  HUe(e.server, t);
  let _ = o ?? zO();
  if (_ === void 0) {
    let U = `mcp_tool hooks are not available for the '${t}' hook event (no MCP client context)`;
    return n(`Hooks: mcp_tool hook skipped \u2014 ${U}`, { level: "warn" }), { ok: !1, body: "", error: U };
  }
  let C = _.find((U) => U.name === e.server);
  if (!C || !Zo(C)) {
    let U = `MCP server '${e.server}' not connected`;
    return n(`Hooks: mcp_tool hook skipped \u2014 ${U}`, { level: "warn" }), { ok: !1, body: "", error: U };
  }
  let A = e.input ? Vir(e.input, r) : {},
    x = e.timeout ? e.timeout * 1000 : d,
    { signal: M, cleanup: F } = Ja(u, { timeoutMs: x });
  try {
    n(`Hooks: mcp_tool calling ${e.server}/${e.tool} with ${Object.keys(A).length} arg(s)`);
    let U = R0();
    if (!U) {
      F();
      let pe = `MCP server '${e.server}' not connected`;
      return n(`Hooks: mcp_tool hook skipped \u2014 ${pe}`, { level: "warn" }), { ok: !1, body: "", error: pe };
    }
    let B = await U(C, { signal: u, timeoutMs: Math.min(x, $c()), context: "mcp_tool hook" }),
      W = await FI(B, { name: e.tool, arguments: A }, { signal: M, timeout: x });
    F();
    let z = Array.isArray(W.content)
      ? W.content
          .map((pe) => (pe.type === "text" ? pe.text : `[${pe.type}]`))
          .join(`
`)
      : "";
    if (W.isError) return { ok: !1, body: z, error: z || "MCP tool returned an error" };
    return { ok: !0, body: z };
  } catch (U) {
    if ((F(), M.aborted)) return { ok: !1, body: "", aborted: !0 };
    let B = l(U);
    return n(`Hooks: mcp_tool hook error: ${B}`, { level: "error" }), { ok: !1, body: "", error: B };
  }
}

function _Ht(e) {
  let t = e.path.at(-1);
  return e.code === "invalid_value" && typeof t === "string" && Yir.has(t);
}

function bHt(e, t) {
  let r = [...t, ...e.path];
  if (e.code !== "invalid_union" || e.errors.length === 0)
    return { path: r, message: e.message.replace(/^Invalid input: /, "") };
  let u = e.errors.find((x) => x.length > 0 && !x.some(_Ht))?.[0];
  if (u) return bHt(u, r);
  let d = e.errors.flatMap((x) => x.filter(_Ht)),
    _ = d[0];
  if (_?.code !== "invalid_value") return { path: r, message: e.message };
  let C = te(d.flatMap((x) => (x.code === "invalid_value" ? x.values.map((M) => b(M)) : []))),
    A = C.slice(0, 6).join(" | ");
  return { path: [...r, ..._.path], message: `expected one of ${A}${C.length > 6 ? " | \u2026" : ""}` };
}

function SHt(e) {
  return e.map(String).join(".") || "(root)";
}

function uK(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}

function kHt(e, t) {
  let r = uK(e) ? e.hookSpecificOutput : void 0,
    o = t.issues.map((C) => bHt(C, [])),
    u = o[0],
    d = u ? `${SHt(u.path)}: ${u.message}` : "unknown error";
  if (uK(r) && !("hookEventName" in r)) d = 'hookSpecificOutput is missing required field "hookEventName"';
  else if (
    uK(r) &&
    r.hookEventName === "PermissionRequest" &&
    !uK(r.decision) &&
    u?.path[0] === "hookSpecificOutput" &&
    u.path[1] === "decision"
  )
    d += ' (PermissionRequest decision must be {"behavior": "allow"} or {"behavior": "deny", "message": "..."})';
  else if (
    uK(e) &&
    u?.path.length === 1 &&
    u.path[0] === "decision" &&
    (e.decision === "allow" || e.decision === "deny" || e.decision === "ask")
  )
    d +=
      e.decision === "ask"
        ? ' (top-level decision is the legacy approve|block field; for "ask" use hookSpecificOutput.permissionDecision in a PreToolUse hook)'
        : ` (top-level decision is the legacy approve|block field; for "${e.decision}" use hookSpecificOutput.permissionDecision in a PreToolUse hook, or hookSpecificOutput.decision: {"behavior": "${e.decision}"} in a PermissionRequest hook)`;
  let _ = o
    .slice(1)
    .map((C) => `  - ${SHt(C.path)}: ${C.message}`)
    .join(`
`);
  return `${jNe}${d}${
    _
      ? `
` + _
      : ""
  }

The hook's output was: ${b(e, null, 2)}`;
}

function wHt() {
  return b(
    {
      continue: "boolean (optional)",
      suppressOutput: "boolean (optional)",
      stopReason: "string (optional)",
      decision: '"approve" | "block" (optional)',
      reason: "string (optional)",
      systemMessage: "string (optional)",
      terminalSequence: "string (optional)",
      hookSpecificOutput: {
        "for PreToolUse": {
          hookEventName: '"PreToolUse"',
          permissionDecision: '"allow" | "deny" | "ask" | "defer" (optional)',
          permissionDecisionReason: "string (optional)",
          updatedInput: "object (optional) - Modified tool input to use",
        },
        "for PermissionRequest": {
          hookEventName: '"PermissionRequest"',
          decision: {
            "to allow": {
              behavior: '"allow"',
              updatedInput: "object (optional) - Modified tool input to use",
              updatedPermissions: "array (optional) - Permission updates",
            },
            "to deny": { behavior: '"deny"', message: "string (optional)", interrupt: "boolean (optional)" },
          },
        },
        "for UserPromptSubmit": { hookEventName: '"UserPromptSubmit"', additionalContext: "string (optional)" },
        "for PostToolUse": { hookEventName: '"PostToolUse"', additionalContext: "string (optional)" },
        "for PostToolBatch": { hookEventName: '"PostToolBatch"', additionalContext: "string (optional)" },
        "for Stop / SubagentStop": {
          hookEventName: '"Stop" | "SubagentStop"',
          additionalContext:
            "string (optional) - Feedback for the model; the conversation continues so the model can act on it",
        },
      },
    },
    null,
    2,
  );
}

function THt(e, t) {
  let r =
    t
      .split(`
`)
      .map((o) => o.trim())
      .find((o) => o.length > 0) ?? "";
  if (r.startsWith(jNe)) return `${e} hook output invalid: ${r.slice(jNe.length)}`;
  return r ? `${e} hook failed: ${r}` : `${e} hook failed to run`;
}

function Pdt(e) {
  let t = typeof e === "object" && e !== null ? e : void 0,
    r = Array.isArray(t?.questions) ? t.questions : [],
    o = [],
    u = "";
  for (let C of r) {
    let A = C;
    if (typeof A?.question !== "string") continue;
    u ||= A.question;
    let x = Array.isArray(A.options)
      ? A.options.flatMap((M) => {
          let F = M;
          return typeof F?.label === "string"
            ? [{ label: F.label, description: typeof F.description === "string" ? F.description : "" }]
            : [];
        })
      : [];
    if (x.length > 0) o.push({ question: A.question, options: x });
  }
  let d = o[0]?.options.map((C) => C.label).join(" \xB7 ");
  return {
    text: u ? w7(`answer: ${u}${d ? ` (${d})` : ""}`) : "answer question",
    questions: o.length > 0 ? o : void 0,
  };
}

function w7(e) {
  return yl(e.replace(/\s+/g, " ").trim(), Hp);
}

async function nz(e, t, r, o, u = Mi) {
  let d = ka(r.agentContext),
    _ = {
      ...Ea(e, ee()),
      hook_event_name: "PreCompact",
      trigger: t.trigger,
      custom_instructions: t.customInstructions,
    },
    C = await CE({
      session: e,
      hookInput: _,
      matchQuery: t.trigger,
      signal: o,
      timeoutMs: u,
      storageV5: r.storageV5,
      credentials: r.credentials,
    });
  if (C.length === 0) return {};
  let A = C.filter((U) => U.succeeded && !U.blocked && U.output.trim().length > 0).map((U) => U.output.trim()),
    x = [];
  for (let U of C) {
    if (U.cancelled) continue;
    if (U.succeeded && !U.blocked)
      if (U.output.trim()) x.push(`PreCompact [${U.command}] completed successfully: ${U.output.trim()}`);
      else x.push(`PreCompact [${U.command}] completed successfully`);
    else if (U.output.trim()) x.push(`PreCompact [${U.command}] failed: ${U.output.trim()}`);
    else x.push(`PreCompact [${U.command}] failed`);
  }
  let M = C.filter((U) => U.blocked),
    F =
      M.length > 0
        ? M.map((U) => {
            let B = U.output.trim();
            return `[${U.command}]${B ? `: ${B}` : ""}`;
          }).join(`
`)
        : void 0;
  if (d) return { ...(F !== void 0 && { blockedBy: F }) };
  return {
    newCustomInstructions:
      A.length > 0
        ? A.join(`

`)
        : void 0,
    userDisplayMessage:
      x.length > 0
        ? x.join(`
`)
        : void 0,
    ...(F !== void 0 && { blockedBy: F }),
  };
}

async function OPe(e, t, r, o, u = Mi) {
  if (ka(r.agentContext)) return {};
  let d = { ...Ea(e, ee()), hook_event_name: "PostCompact", trigger: t.trigger, compact_summary: t.compactSummary },
    _ = await CE({
      session: e,
      hookInput: d,
      matchQuery: t.trigger,
      signal: o,
      timeoutMs: u,
      storageV5: r.storageV5,
      credentials: r.credentials,
    });
  if (_.length === 0) return {};
  let C = [];
  for (let A of _) {
    if (A.cancelled) continue;
    if (A.succeeded)
      if (A.output.trim()) C.push(`PostCompact [${A.command}] completed successfully: ${A.output.trim()}`);
      else C.push(`PostCompact [${A.command}] completed successfully`);
    else if (A.output.trim()) C.push(`PostCompact [${A.command}] failed: ${A.output.trim()}`);
    else C.push(`PostCompact [${A.command}] failed`);
  }
  return {
    userDisplayMessage:
      C.length > 0
        ? C.join(`
`)
        : void 0,
  };
}

async function eft(e, t, r, { timeoutMs: o = Mi, storageV5: u, credentials: d } = {}) {
  let _ = { ...Ea(e, ee()), hook_event_name: "ConfigChange", source: t, file_path: r },
    C = await CE({ session: e, hookInput: _, timeoutMs: o, matchQuery: t, storageV5: u, credentials: d });
  if (t === "policy_settings") return C.map((A) => ({ ...A, blocked: !1 }));
  return C;
}

async function nbe(e, t, r, { timeoutMs: o = Mi, storageV5: u, credentials: d } = {}) {
  let _ = { ...Ea(e, ee()), hook_event_name: "DirectoryAdded", directory: t, source: r },
    C = await CE({ session: e, hookInput: _, matchQuery: r, timeoutMs: o, storageV5: u, credentials: d }),
    A = C.map((x) => x.systemMessage).filter((x) => !!x);
  return { results: C, systemMessages: A };
}

async function rbe({
  session: e,
  serverName: t,
  message: r,
  requestedSchema: o,
  permissionMode: u,
  signal: d,
  timeoutMs: _ = Mi,
  mode: C,
  url: A,
  elicitationId: x,
}) {
  let M = {
      ...Ea(e, ee(), u),
      hook_event_name: "Elicitation",
      mcp_server_name: t,
      message: r,
      mode: C,
      url: A,
      elicitation_id: x,
      requested_schema: o,
    },
    F = await CE({ session: e, hookInput: M, matchQuery: t, signal: d, timeoutMs: _ }),
    U,
    B;
  for (let W of F) {
    let z = hun(W, "Elicitation");
    if (z.blockingError) B = z.blockingError;
    if (z.response) U = z.response;
  }
  return { elicitationResponse: U, blockingError: B };
}

async function obe({
  session: e,
  serverName: t,
  action: r,
  content: o,
  permissionMode: u,
  signal: d,
  timeoutMs: _ = Mi,
  mode: C,
  elicitationId: A,
}) {
  let x = {
      ...Ea(e, ee(), u),
      hook_event_name: "ElicitationResult",
      mcp_server_name: t,
      elicitation_id: A,
      mode: C,
      action: r,
      content: o,
    },
    M = await CE({ session: e, hookInput: x, matchQuery: t, signal: d, timeoutMs: _ }),
    F,
    U;
  for (let B of M) {
    let W = hun(B, "ElicitationResult");
    if (W.blockingError) U = W.blockingError;
    if (W.response) F = W.response;
  }
  return { elicitationResultResponse: F, blockingError: U };
}

async function vHt(e, t, { timeoutMs: r = Mi, storageV5: o, credentials: u }) {
  let d = await CE({ session: e, hookInput: t, timeoutMs: r, storageV5: o, credentials: u });
  if (d.length > 0) DI();
  let _ = d.flatMap((A) => A.watchPaths ?? []),
    C = d.map((A) => A.systemMessage).filter((A) => !!A);
  return { results: d, watchPaths: _, systemMessages: C };
}

function OUt(e, t, r, o = {}) {
  let u = { ...Ea(e, ee()), hook_event_name: "CwdChanged", old_cwd: t, new_cwd: r };
  return vHt(e, u, o);
}

function LUt(e, t, r, o = {}) {
  let u = { ...Ea(e, ee()), hook_event_name: "FileChanged", file_path: t, event: r };
  return vHt(e, u, o);
}

async function nGe(e, t, r, o, u) {
  let { globs: d, triggerFilePath: _, parentFilePath: C, timeoutMs: A = Mi, storageV5: x, credentials: M } = u ?? {},
    F = {
      ...Ea(e, ee()),
      hook_event_name: "InstructionsLoaded",
      file_path: t,
      memory_type: r,
      load_reason: o,
      globs: d,
      trigger_file_path: _,
      parent_file_path: C,
    };
  await CE({ session: e, hookInput: F, timeoutMs: A, matchQuery: o, storageV5: x, credentials: M });
}

async function* rGe(e, t, r, o, u = Mi, d, _) {
  let C = {
    ...Ea(e, ee()),
    hook_event_name: "MessageDisplay",
    turn_id: t.turnId,
    message_id: t.messageId,
    index: t.index,
    final: t.final,
    delta: t.delta,
  };
  yield* jy({
    session: e,
    hookInput: C,
    toolUseID: `${t.messageId}-${t.index}`,
    signal: o,
    timeoutMs: u,
    sessionHooks: r,
    forceSyncExecution: !0,
    suppressPerInvocationTelemetry: !0,
    storageV5: d,
    credentials: _,
  });
}

async function AE(e, t, { timeoutMs: r = Mi, storageV5: o, credentials: u } = {}) {
  let { message: d, title: _, notificationType: C } = t,
    A = { ...Ea(e, ee()), hook_event_name: "Notification", message: d, title: _, notification_type: C };
  await CE({ session: e, hookInput: A, timeoutMs: r, matchQuery: C, storageV5: o, credentials: u });
}

async function* MUt(e, t, r, o, u, d, _, C = Mi, A, x, M, F) {
  let U = r !== void 0 ? { id: Gu(r), project: e.project } : e,
    B = {
      ...Ea(U, ee()),
      hook_event_name: "SessionStart",
      source: t,
      agent_type: u,
      model: d,
      session_title: o ?? Yc(U.id),
      ...x,
    };
  ix("hook_exec", zae);
  try {
    yield* jy({
      session: e,
      hookInput: B,
      toolUseID: WNe(),
      matchQuery: t,
      signal: _,
      timeoutMs: C,
      forceSyncExecution: A,
      storageV5: M,
      credentials: F,
    });
  } finally {
    lx("hook_exec", zae);
  }
}

async function* NUt(e, t, r, o = Mi, u, d, _) {
  let C = { ...Ea(e, ee()), hook_event_name: "Setup", trigger: t };
  ix("hook_exec", zae);
  try {
    yield* jy({
      session: e,
      hookInput: C,
      toolUseID: WNe(),
      matchQuery: t,
      signal: r,
      timeoutMs: o,
      forceSyncExecution: u,
      storageV5: d,
      credentials: _,
    });
  } finally {
    lx("hook_exec", zae);
  }
}

async function* FUt(e, t, r, o, u = Mi, d, _, C) {
  let A = { ...Ea(e.session, ee()), hook_event_name: "SubagentStart", agent_id: t, agent_type: r };
  yield* jy({
    session: e.session,
    hookInput: A,
    toolUseID: WNe(),
    matchQuery: r,
    signal: o,
    timeoutMs: u,
    sessionHooks: d,
    agentContext: _,
    managedHooksOnly: C?.managedHooksOnly,
    storageV5: e.storageV5,
    credentials: e.credentials,
  });
}

async function ibe(e, t, r) {
  let { sessionHooks: o, getAppState: u, signal: d, storageV5: _, credentials: C } = r || {},
    A = { ...Ea(e, ee()), hook_event_name: "SessionEnd", reason: t },
    x = await CE({
      session: e,
      sessionHooks: o,
      getAppState: u,
      hookInput: A,
      matchQuery: t,
      signal: d,
      timeoutMs: lun,
      storageV5: _,
      credentials: C,
    });
  for (let M of x)
    if (!M.succeeded && M.output)
      process.stderr.write(`SessionEnd hook [${M.command}] failed: ${M.output}
`);
  o?.clear(e.id);
}

function EHt(e) {
  let t = [];
  for (let r of Object.values(e)) {
    if (!Zf(r)) continue;
    let o = { id: r.id, type: MIe[r.type] ?? r.type, status: r.status, description: Ku(r.description, zNe) };
    switch (r.type) {
      case "local_bash":
        o.command = Ku(r.command, zNe);
        break;
      case "local_agent":
        o.agent_type = r.agentType;
        break;
      case "monitor_mcp":
        (o.server = r.server), (o.tool = r.tool);
        break;
      case "mcp_task":
        (o.server = r.serverName), (o.tool = r.toolName);
        break;
      case "local_workflow":
        o.name = r.workflowName;
        break;
      case "in_process_teammate":
      case "remote_agent":
      case "dream":
      case "monitor_ws":
      case "auto_mode_scan":
        break;
      default:
    }
    t.push(o);
  }
  return t;
}

function CHt(e = Ag()) {
  return e.map((t) => ({ id: t.id, schedule: t.cron, recurring: t.recurring ?? !1, prompt: Ku(t.prompt, zNe) }));
}

async function LPe(e, t, r = Mi) {
  if (ka(t.agentContext)) return;
  if (!iT("StopFailure", t.sessionHooksRegistry, t.session.id)) return;
  let o =
      zr(
        e.message.content,
        `
`,
      ).trim() || void 0,
    u = e.error ?? "unknown",
    d = {
      ...Ea(t.session, ee(), void 0, t),
      hook_event_name: "StopFailure",
      error: u,
      error_details: e.errorDetails,
      last_assistant_message: o,
    };
  await CE({
    session: t.session,
    sessionHooks: t.sessionHooksRegistry,
    getAppState: t.getAppState,
    hookInput: d,
    timeoutMs: r,
    matchQuery: u,
    storageV5: t.storageV5,
    credentials: t.credentials,
  });
}

async function* y9(e, t, r = Mi, o = !1, u, d, _, C, A = "turn_end") {
  let x = u ? "SubagentStop" : "Stop";
  if (ka(d.agentContext)) return;
  let M = aP(d.agentContext),
    F = d.agentId ?? d.session.id;
  if (!M && !iT(x, d.sessionHooksRegistry, F)) return;
  if (A === "turn_end_reactions" && !d.sessionHooksRegistry.getFunctionHooks(F, x).get(x)?.length) return;
  let U = _ ? Wy(_) : void 0,
    B = U
      ? zr(
          U.message.content,
          `
`,
        ).trim() || void 0
      : void 0,
    W = { background_tasks: EHt(d.taskRegistry.all()), session_crons: CHt() },
    z = Ea(d.session, ee(), e, d),
    pe = u
      ? {
          ...z,
          hook_event_name: "SubagentStop",
          stop_hook_active: o,
          agent_id: u,
          agent_transcript_path: mp(u),
          agent_type: C ?? "",
          last_assistant_message: B,
          ...W,
        }
      : { ...z, hook_event_name: "Stop", stop_hook_active: o, last_assistant_message: B, ...W },
    fe;
  yield* jy({
    session: d.session,
    hookInput: pe,
    extendedHookInput: fe,
    toolUseID: Qir(),
    signal: t,
    timeoutMs: r,
    toolUseContext: d,
    messages: _,
    managedHooksOnly: M,
    skipSessionFunctionHooks: A !== "turn_end" && A !== "turn_end_reactions",
    sessionFunctionHooksOnly: A === "turn_end_reactions",
  });
}

async function* $Ut(e, t, r, o, u = Mi, d) {
  let _ = { ...Ea(d.session, ee(), r), hook_event_name: "TeammateIdle", teammate_name: e, team_name: t };
  yield* jy({ session: d.session, hookInput: _, toolUseID: qNe(), signal: o, timeoutMs: u, toolUseContext: d });
}

async function* UUt(e, t, r, o, u, d, _, C = Mi, A) {
  let x = {
    ...Ea(A.session, ee(), d),
    hook_event_name: "TaskCreated",
    task_id: e,
    task_subject: t,
    task_description: r,
    teammate_name: o,
    team_name: u,
  };
  yield* jy({ session: A.session, hookInput: x, toolUseID: qNe(), signal: _, timeoutMs: C, toolUseContext: A });
}

async function* oGe(e, t, r, o, u, d, _, C = Mi, A) {
  let x = {
    ...Ea(A.session, ee(), d),
    hook_event_name: "TaskCompleted",
    task_id: e,
    task_subject: t,
    task_description: r,
    teammate_name: o,
    team_name: u,
  };
  yield* jy({ session: A.session, hookInput: x, toolUseID: qNe(), signal: _, timeoutMs: C, toolUseContext: A });
}

async function* cdt(e, t, r, o, u, d, _) {
  let C = _.agentId ?? _.session.id;
  if (!iT("UserPromptExpansion", _.sessionHooksRegistry, C)) return;
  let A = {
    ...Ea(_.session, ee(), d),
    hook_event_name: "UserPromptExpansion",
    expansion_type: e,
    command_name: t,
    command_args: r,
    command_source: o,
    prompt: u,
  };
  yield* jy({
    session: _.session,
    hookInput: A,
    toolUseID: Jir(),
    signal: _.abortController.signal,
    timeoutMs: Mi,
    toolUseContext: _,
  });
}

async function iGe(e, t, { storageV5: r, credentials: o } = {}) {
  let u = { ...Ea(e, ee()), hook_event_name: "WorktreeCreate", name: t },
    d = await CE({ session: e, hookInput: u, timeoutMs: Mi, storageV5: r, credentials: o }),
    _ = d
      .filter((C) => C.succeeded)
      .map((C) => nar(C.output))
      .find((C) => C.length > 0);
  if (_ === void 0) {
    if (d.length === 0)
      throw Error(
        "WorktreeCreate hook failed: hook is configured but did not run (workspace not trusted or matcher mismatch)",
      );
    let C = d.filter((A) => !A.succeeded).map((A) => `${A.command}: ${ap(A.output.trim()) || "no output"}`);
    if (C.length === 0)
      throw Error(
        "WorktreeCreate hook failed: hook succeeded but returned no worktree path (command: echo the path to stdout; http/callback: return hookSpecificOutput.worktreePath)",
      );
    throw new R(`WorktreeCreate hook failed: ${C.join("; ")}`, "WorktreeCreate hook failed (stderr redacted)");
  }
  if (ear(_)) return { worktreePath: _ };
  return { worktreePath: tar(await mun(u.cwd, e.project), _) };
}

function nar(e) {
  return (
    Et(e)
      .split(`
`)
      .map((t) => t.trim())
      .filter(Boolean)
      .at(-1) ?? ""
  );
}

async function tft(e, t, { storageV5: r, credentials: o } = {}) {
  if (Bv("WorktreeRemove").length === 0) return !1;
  let u = { ...Ea(e, ee()), hook_event_name: "WorktreeRemove", worktree_path: t },
    d = await CE({ session: e, hookInput: u, timeoutMs: Mi, storageV5: r, credentials: o }),
    _ = !1;
  for (let C of d)
    if (C.succeeded) _ = !0;
    else n(`WorktreeRemove hook failed [${C.command}]: ${C.output.trim()}`, { level: "error" });
  return _;
}

function OHt() {
  return Ehr.of(G());
}

async function cun() {
  let e = OHt();
  if (e.size === 0) return;
  let t = Promise.allSettled([...e]);
  await Promise.race([t, ne(Ahr, void 0, { unref: !0 })]);
}

function sGe() {
  let e = a.CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS;
  if (e !== void 0 && e > 0) return e;
  let t = 0,
    r = f_() ? [] : (die()?.SessionEnd ?? []),
    o = [...(SX()?.SessionEnd ?? []), ...r];
  for (let u of o) for (let d of u.hooks) if (d.timeout && d.timeout * 1000 > t) t = d.timeout * 1000;
  return Math.max(lun, Math.min(t, iar));
}

function AHt({
  processId: e,
  hookId: t,
  shellCommand: r,
  asyncResponse: o,
  hookEvent: u,
  hookName: d,
  command: _,
  asyncRewake: C,
  rewakeMessage: A,
  rewakeSummary: x,
  pluginId: M,
}) {
  if (C) {
    let F = r.result.then(async (B) => {
        await new Promise((fe) => setImmediate(fe));
        let W = await r.taskOutput.getStdout(),
          z = r.taskOutput.getStderr();
        r.cleanup(),
          cu({
            hookId: t,
            hookName: d,
            hookEvent: u,
            output: W + z,
            stdout: W,
            stderr: z,
            exitCode: B.code,
            outcome: B.code === 0 ? "success" : "error",
          });
        let pe;
        if (M)
          for (let fe of W.split(`
`)) {
            let me = fe.trim();
            if (!me.startsWith("{")) continue;
            try {
              let ge = V(me);
              if ("async" in ge) continue;
              if (ip(ge)) {
                if ((Sce(ge.metrics, M, u), typeof ge.rewakeSummary === "string" && ge.rewakeSummary.trim() && Xae(M)))
                  pe = ge.rewakeSummary.trim().replace(/\s+/g, " ").slice(0, aar);
              }
              break;
            } catch {}
          }
        if (B.code === 2) {
          let fe = `Stop hook blocking error from command "${d}":`,
            me = "Stop hook feedback";
          if (A !== void 0) fe = A;
          if (pe !== void 0) me = pe;
          else if (x !== void 0) me = x;
          rO({ summary: me, body: `${fe} ${z || W}`, priority: "next", stopHookActive: !0 });
        }
      }),
      U = OHt();
    return U.add(F), F.finally(() => U.delete(F)), !0;
  }
  if (!r.background(e, { skipSpill: !0 })) return !1;
  return (
    oHe({
      processId: e,
      hookId: t,
      asyncResponse: o,
      hookEvent: u,
      hookName: d,
      command: _,
      shellCommand: r,
      pluginId: M,
    }),
    !0
  );
}

function J7() {
  return !M6();
}

function Ea(e, t, r, o) {
  let u = o?.agentType ?? F_(),
    d = o?.options?.mainLoopModel,
    _ = sl(o?.getAppState?.() ?? {}, d);
  for (let x of o?.permissionLayers ?? []) if (x.kind === "effort" && x.effort !== void 0) _ = x.effort;
  let C = d && o?.getAppState && lg(d) ? { level: ew(d, _) } : void 0,
    A = o?.remoteCall;
  if (A !== void 0)
    return {
      session_id: `served:${(lar.test(A.origin.callerSessionId ?? "") ? A.origin.callerSessionId : void 0) ?? "unknown"}`,
      transcript_path: "",
      cwd: t,
      permission_mode: r,
      agent_id: o?.agentId,
      effort: C,
    };
  return {
    session_id: e.id,
    transcript_path: im(e.id),
    cwd: t,
    prompt_id: $J() ?? void 0,
    permission_mode: r,
    agent_id: o?.agentId,
    agent_type: u,
    effort: C,
  };
}

function DHt(e) {
  let t = V(e),
    r = l9().safeParse(t);
  if (r.success) return n("Successfully parsed and validated hook JSON output"), LV(t, r.data), { json: r.data };
  return { validationError: kHt(t, r.error) };
}

async function yce(e, t, r, { threshold: o = J8n, storageV5: u } = {}) {
  if (e.length <= o) return e;
  let d = await P9(e, `hook-${t}-${r}`, I_(), u);
  if (D9(d))
    return (
      s("tengu_hook_output_persisted", {
        source: c(r),
        originalSizeBytes: e.length,
        persistedSizeBytes: 0,
        truncatedFallback: !0,
      }),
      `${e.slice(0, o)}

[Hook ${r} truncated at ${o} chars \u2014 persist-to-disk failed: ${d.error}]`
    );
  let _ = oue(d);
  return (
    s("tengu_hook_output_persisted", {
      source: c(r),
      originalSizeBytes: d.originalSize,
      persistedSizeBytes: _.length,
      truncatedFallback: !1,
    }),
    _
  );
}

function MPe(e) {
  let t = e.trim();
  if (!t.startsWith("{")) return n("Hook output does not start with {, treating as plain text"), { plainText: e };
  if (BUt(e)) return { json: { async: !0 } };
  try {
    let r = DHt(t);
    if ("json" in r) return r;
    let o = `${r.validationError}

Expected schema:
${wHt()}`;
    return n(o), { plainText: e, validationError: o };
  } catch (r) {
    if (!t.endsWith("}"))
      return n(`Hook output starts with { but is not a JSON object, treating as plain text: ${l(r)}`), { plainText: e };
    if (car(t)) return n("Hook output is several JSON documents, treating as plain text"), { plainText: e };
    let o = `Hook output looks like a JSON object but is not valid JSON \u2014 ${l(r)}. Emit the payload with a JSON encoder (jq, ConvertTo-Json, json.dumps) rather than string concatenation so backslashes and quotes inside strings are escaped.`;
    return n(o), { plainText: e, validationError: o };
  }
}

function car(e) {
  let t = e
    .split(`
`)
    .filter((o) => o.trim() !== "");
  if (t.length < 2) return !1;
  using r = Jd`parseHookOutput: json lines (${t.length})`;
  return t.every((o) => {
    try {
      let u = l9().safeParse(Ps(o.trim()));
      return !u.success || Object.keys(u.data).length === 0;
    } catch {
      return !1;
    }
  });
}

function BUt(e) {
  let t = wr(e).trim();
  if (!t.startsWith("{")) return !1;
  try {
    let r = V(t);
    return typeof r === "object" && r !== null && "async" in r && r.async === !0;
  } catch {
    return !1;
  }
}

function nft(e, t, r) {
  let o = r.trim();
  return t !== 0 && o
    ? `${e}

Hook exited ${t} with stderr:
${o}`
    : e;
}

function rft(e) {
  let t = e.trim();
  if (t === "") {
    let r = l9().safeParse({});
    if (r.success) return n("HTTP hook returned empty body, treating as empty JSON object"), { json: r.data };
  }
  if (!t.startsWith("{")) {
    let r = `HTTP hook must return JSON, but got non-JSON response body: ${t.length > 200 ? t.slice(0, 200) + "\u2026" : t}`;
    return n(r), { validationError: r };
  }
  try {
    let r = DHt(t);
    if ("json" in r) return r;
    return n(r.validationError), r;
  } catch (r) {
    let o = `HTTP hook must return valid JSON, but parsing failed: ${r}`;
    return n(o), { validationError: o };
  }
}

function uar(e) {
  let t = e ? "true" : "false",
    r = Chr.of(G().host);
  if (r.has(t)) return;
  r.add(t), s("tengu_dead_probe_hook_updated_mcp_tool_output", { with_new_field: c(t) });
}

function mK({
  json: e,
  command: t,
  hookName: r,
  toolUseID: o,
  hookEvent: u,
  expectedHookEvent: d,
  stdout: _,
  stderr: C,
  exitCode: A,
  durationMs: x,
}) {
  let M = {},
    F = e;
  if (F.continue === !1) {
    if (((M.preventContinuation = !0), F.stopReason)) M.stopReason = F.stopReason;
  }
  if (e.decision)
    switch (e.decision) {
      case "approve":
        M.permissionBehavior = "allow";
        break;
      case "block":
        (M.permissionBehavior = "deny"),
          (M.blockingError = { blockingError: e.reason || "Blocked by hook", command: t });
        break;
      default:
        throw Error(`Unknown hook decision type: ${e.decision}. Valid types are: approve, block`);
    }
  if (e.systemMessage) M.systemMessage = e.systemMessage;
  if (e.terminalSequence) {
    let U = npe(e.terminalSequence);
    if (U !== null) M.terminalSequence = U;
    else
      n(
        `Hook ${r} (${u}) returned a terminalSequence that was rejected by the allowlist (only OSC 0/1/2/9/99/777 and BEL are permitted, and OSC 9 bodies may not begin with a digit unless in the 9;4 progress form)`,
      );
  }
  if (e.hookSpecificOutput?.hookEventName === "PreToolUse" && e.hookSpecificOutput.permissionDecision)
    switch (e.hookSpecificOutput.permissionDecision) {
      case "allow":
        M.permissionBehavior = "allow";
        break;
      case "deny":
        (M.permissionBehavior = "deny"),
          (M.blockingError = { blockingError: e.reason || "Blocked by hook", command: t });
        break;
      case "ask":
        M.permissionBehavior = "ask";
        break;
      case "defer":
        M.permissionBehavior = "defer";
        break;
      default:
        throw Error(
          `Unknown hook permissionDecision type: ${e.hookSpecificOutput.permissionDecision}. Valid types are: allow, deny, ask, defer`,
        );
    }
  if (M.permissionBehavior !== void 0 && e.reason !== void 0) M.hookPermissionDecisionReason = e.reason;
  if (e.hookSpecificOutput) {
    if (d && e.hookSpecificOutput.hookEventName !== d)
      throw Error(
        `Hook returned incorrect event name: expected '${d}' but got '${e.hookSpecificOutput.hookEventName}'. Full stdout: ${b(e, null, 2)}`,
      );
    switch (e.hookSpecificOutput.hookEventName) {
      case "PreToolUse":
        if (e.hookSpecificOutput.permissionDecision)
          switch (e.hookSpecificOutput.permissionDecision) {
            case "allow":
              M.permissionBehavior = "allow";
              break;
            case "deny":
              (M.permissionBehavior = "deny"),
                (M.blockingError = {
                  blockingError: e.hookSpecificOutput.permissionDecisionReason || e.reason || "Blocked by hook",
                  command: t,
                });
              break;
            case "ask":
              M.permissionBehavior = "ask";
              break;
            case "defer":
              M.permissionBehavior = "defer";
              break;
          }
        if (
          ((M.hookPermissionDecisionReason = e.hookSpecificOutput.permissionDecisionReason),
          e.hookSpecificOutput.updatedInput)
        )
          M.updatedInput = e.hookSpecificOutput.updatedInput;
        M.additionalContext = e.hookSpecificOutput.additionalContext;
        break;
      case "UserPromptSubmit":
        (M.additionalContext = e.hookSpecificOutput.additionalContext),
          (M.sessionTitle = e.hookSpecificOutput.sessionTitle),
          (M.suppressOriginalPrompt = e.hookSpecificOutput.suppressOriginalPrompt);
        break;
      case "UserPromptExpansion":
        (M.additionalContext = e.hookSpecificOutput.additionalContext),
          (M.suppressOriginalPrompt = e.hookSpecificOutput.suppressOriginalPrompt);
        break;
      case "SessionStart":
        if (
          ((M.additionalContext = e.hookSpecificOutput.additionalContext),
          (M.initialUserMessage = e.hookSpecificOutput.initialUserMessage),
          (M.sessionTitle = e.hookSpecificOutput.sessionTitle),
          "watchPaths" in e.hookSpecificOutput && e.hookSpecificOutput.watchPaths)
        )
          M.watchPaths = e.hookSpecificOutput.watchPaths;
        M.reloadSkills = e.hookSpecificOutput.reloadSkills;
        break;
      case "Setup":
        M.additionalContext = e.hookSpecificOutput.additionalContext;
        break;
      case "PreModelSwitch":
        if (e.hookSpecificOutput.permissionDecision)
          switch (e.hookSpecificOutput.permissionDecision) {
            case "allow":
              M.permissionBehavior = "allow";
              break;
            case "deny":
              (M.permissionBehavior = "deny"),
                (M.blockingError = {
                  blockingError: e.hookSpecificOutput.permissionDecisionReason || e.reason || "Blocked by hook",
                  command: t,
                });
              break;
            case "ask":
              M.permissionBehavior = "ask";
              break;
          }
        if (e.hookSpecificOutput.permissionDecisionReason !== void 0)
          M.hookPermissionDecisionReason = e.hookSpecificOutput.permissionDecisionReason;
        break;
      case "PostModelSwitch":
        M.additionalContext = e.hookSpecificOutput.additionalContext;
        break;
      case "SubagentStart":
        M.additionalContext = e.hookSpecificOutput.additionalContext;
        break;
      case "PostToolUse":
        if (
          ((M.additionalContext = e.hookSpecificOutput.additionalContext),
          (M.classifierContext = e.hookSpecificOutput.classifierContext),
          e.hookSpecificOutput.updatedToolOutput !== void 0)
        )
          M.updatedToolOutput = e.hookSpecificOutput.updatedToolOutput;
        if (e.hookSpecificOutput.updatedMCPToolOutput)
          uar(e.hookSpecificOutput.updatedToolOutput !== void 0),
            (M.updatedMCPToolOutput = e.hookSpecificOutput.updatedMCPToolOutput);
        else if (e.hookSpecificOutput.updatedMCPToolOutput !== void 0) M.legacyMcpRewriteSuppressed = !0;
        break;
      case "PostToolUseFailure":
        M.additionalContext = e.hookSpecificOutput.additionalContext;
        break;
      case "PostToolBatch":
        M.additionalContext = e.hookSpecificOutput.additionalContext;
        break;
      case "Stop":
      case "SubagentStop":
        M.additionalContext = e.hookSpecificOutput.additionalContext;
        break;
      case "PermissionDenied":
        M.retry = e.hookSpecificOutput.retry;
        break;
      case "PermissionRequest":
        if (e.hookSpecificOutput.decision) {
          if (
            ((M.permissionRequestResult = e.hookSpecificOutput.decision),
            (M.permissionBehavior = e.hookSpecificOutput.decision.behavior === "allow" ? "allow" : "deny"),
            e.hookSpecificOutput.decision.behavior === "allow" && e.hookSpecificOutput.decision.updatedInput)
          )
            M.updatedInput = e.hookSpecificOutput.decision.updatedInput;
        }
        break;
      case "Elicitation":
        if (e.hookSpecificOutput.action) {
          if (
            ((M.elicitationResponse = { action: e.hookSpecificOutput.action, content: e.hookSpecificOutput.content }),
            e.hookSpecificOutput.action === "decline")
          )
            M.blockingError = { blockingError: e.reason || "Elicitation denied by hook", command: t };
        }
        break;
      case "ElicitationResult":
        if (e.hookSpecificOutput.action) {
          if (
            ((M.elicitationResultResponse = {
              action: e.hookSpecificOutput.action,
              content: e.hookSpecificOutput.content,
            }),
            e.hookSpecificOutput.action === "decline")
          )
            M.blockingError = { blockingError: e.reason || "Elicitation result blocked by hook", command: t };
        }
        break;
      case "MessageDisplay":
        M.displayContent = e.hookSpecificOutput.displayContent;
        break;
    }
  }
  return {
    ...M,
    message: M.blockingError
      ? In({ type: "hook_blocking_error", hookName: r, toolUseID: o, hookEvent: u, blockingError: M.blockingError })
      : In({
          type: "hook_success",
          hookName: r,
          toolUseID: o,
          hookEvent: u,
          content: "",
          stdout: _,
          stderr: C,
          exitCode: A,
          command: t,
          durationMs: x,
        }),
  };
}

async function dar(e, t) {
  if (O() && e !== void 0) {
    let r = MD(t, XF());
    if (r) {
      let o = await e.scopeKind(
        { namespace: "pluginCache", marketplace: r.marketplace, plugin: r.plugin, version: r.version },
        { resolveLink: !0 },
      );
      if (o.ok)
        switch (o.value.kind) {
          case "absent":
            return !1;
          case "directory":
          case "other":
            return !0;
          case "link":
            return o.value.linkResolves === !0;
          default:
            return o.value;
        }
    }
  }
  return $a(t);
}

async function fK(e, t, r, o, u, d, _, C, A, x, M, F, U, B, W, z, pe, fe) {
  let me = t === "SessionStart" || t === "Setup" || t === "SessionEnd",
    ge = Date.now(),
    Ce,
    Ie = !1,
    Ee = D() === "windows",
    Pe = e.shell ?? jD(),
    Oe = Pe === "powershell",
    Fe = e.args !== void 0;
  if (Fe && /\s/.test(e.command) && !/[\\/]/.test(e.command))
    n(
      `Hook command "${e.command}" has both "args" and whitespace in "command". Exec form treats "command" as a single executable name; move the rest into "args". Example: { "command": "node", "args": ["script.js"] }.`,
      { level: "warn" },
    );
  let Be = Ee && !Oe && !Fe ? (jn) => jn.replaceAll("\\", "/") : (jn) => jn,
    ze = d.projectRoot,
    We = e.command,
    Ve;
  if (!Fe && Oe) {
    if (((We = Dar(We)), /\$CLAUDE_PROJECT_DIR\b/.test(We)))
      n(
        `PowerShell hook command references $CLAUDE_PROJECT_DIR, which PowerShell reads as an undefined variable ($null). Use $env:CLAUDE_PROJECT_DIR or \${CLAUDE_PROJECT_DIR} instead. Command: ${We}`,
        { level: "warn" },
      );
  }
  for (let [jn, Ar] of [
    ["CLAUDE_PLUGIN_ROOT", M || U],
    ["CLAUDE_PLUGIN_DATA", M],
  ]) {
    if (Ar) continue;
    let Tn = "${" + jn + "}";
    if (!e.command.includes(Tn) && !e.args?.some((br) => br.includes(Tn))) continue;
    let Zr = _9(e);
    throw Error(
      U
        ? `Hook command references \${${jn}} but only \${CLAUDE_PLUGIN_ROOT} is available for skill hooks (\${CLAUDE_PLUGIN_DATA} is plugin-only). Command: ${Zr}`
        : `Hook command references \${${jn}} but the hook is not associated with a plugin. This variable is only available in hooks defined in a plugin's hooks/hooks.json file, not in settings.json. Command: ${Zr}`,
    );
  }
  if (M) {
    if (!(await dar(pe, M)))
      throw Error(`Plugin directory does not exist: ${M}` + (F ? ` (${F} \u2014 run /plugin to reinstall)` : ""));
    if (F) Ve = await hv(F, fe);
    if (!Fe && Ve) {
      if (X9e(We, Ve))
        throw new R(
          `Hook from ${F ? `plugin ${F}` : "a plugin"} references \${user_config.*} in a shell-form command. The substituted value would be re-parsed by the shell. Use exec ` +
            'form instead \u2014 {"command": "<executable>", "args": ' +
            '["${user_config.KEY}", ...]} \u2014 or read ' +
            `$CLAUDE_PLUGIN_OPTION_<KEY> from the hook's environment. Command: ${_9(e)}`,
          "plugin hook references ${user_config.*} in shell-form command",
        );
    }
  }
  let Pt;
  if (e.args !== void 0) {
    let jn = M ?? U,
      Ar = M && F ? F : void 0,
      Tn = (Zr) => {
        if (!Zr.includes("${")) return Zr;
        if (((Zr = Zr.replaceAll("${CLAUDE_PROJECT_DIR}", () => ze)), jn))
          Zr = Zr.replaceAll("${CLAUDE_PLUGIN_ROOT}", () => jn);
        if (Ar) Zr = Zr.replaceAll("${CLAUDE_PLUGIN_DATA}", () => pde(Ar));
        if (Ve) Zr = OR(Zr, Ve);
        return Zr;
      };
    Pt = [Tn(e.command), e.args.map(Tn)];
  }
  let ct = _9(e);
  if (Ee && !Oe && !Fe) We = UAt(We);
  let ut = z !== void 0 ? z.shellPrefix : a.CLAUDE_CODE_SHELL_PREFIX,
    en = !Oe && !Fe && ut ? ZK(ut, We) : We,
    nn = e.timeout ? e.timeout * 1000 : Mi,
    xt = { ...(z?.base ?? Na()) };
  for (let jn of z?.omit ?? []) delete xt[jn];
  let tt = { ...xt, ...W, ...Oxe(u), CLAUDE_PROJECT_DIR: Be(ze) },
    { columns: lt, rows: mt } = process.stdout;
  if (lt) tt.COLUMNS = String(lt);
  if (mt) tt.LINES = String(mt);
  if (M) {
    if (((tt.CLAUDE_PLUGIN_ROOT = Be(M)), F)) tt.CLAUDE_PLUGIN_DATA = Be(pde(F));
  }
  if ((Object.assign(tt, Hhr(F)), Ve))
    for (let [jn, Ar] of Object.entries(Ve)) {
      let Tn = jn.replace(/[^A-Za-z0-9_]/g, "_").toUpperCase();
      tt[`CLAUDE_PLUGIN_OPTION_${Tn}`] = String(Ar);
    }
  if (U) tt.CLAUDE_PLUGIN_ROOT = Be(U);
  if (!Oe && (t === "SessionStart" || t === "Setup" || t === "CwdChanged" || t === "FileChanged") && x !== void 0)
    tt.CLAUDE_ENV_FILE = await OUe(t, x);
  let Xe = await mun(_, d),
    nt = !Ee,
    ht;
  if (Pt) ht = KNe(Pt[0], Pt[1], { env: tt, cwd: Xe, detached: nt, windowsHide: !0, ...V9e(t) });
  else if (Pe === "powershell") {
    let jn = await gv();
    if (!jn)
      throw Error(
        `Hook "${e.command}" has shell: 'powershell' but no PowerShell executable (pwsh or powershell) was found on PATH. Install PowerShell, or remove "shell": "powershell" to use bash.`,
      );
    ht = KNe(jn, ict(en), { env: tt, cwd: Xe, detached: nt, windowsHide: !0, ...V9e(t) });
  } else {
    let jn = Ee ? qN() : null;
    if (Ee && !jn)
      throw Error(
        `Hook "${e.command}" requires bash but Git Bash was not found. Install Git for Windows (https://git-scm.com/downloads/win), or add "shell": "powershell" to this hook's config.`,
      );
    let Ar = Ee ? jn : !0;
    if (Ee && jn) $At(tt, jn);
    ht = KNe(en, [], { env: tt, cwd: Xe, shell: Ar, detached: nt, windowsHide: !0, ...V9e(t) });
  }
  let At = new Bx(`hook_${ht.pid}`, null),
    dn = LK(ht, C, nn, At),
    Lt = !1,
    fn = !1,
    Sn = !Le() || HQe();
  if ((e.async || (e.asyncRewake && Sn)) && !B) {
    let jn = `async_hook_${ht.pid}`;
    n(`Hooks: Config-based async hook, backgrounding process ${jn}`);
    let Ar = (Zr) => {
      n(`Async hook stdin write failed (${E(Zr) ?? Zr}); hook command likely exited without reading stdin`);
    };
    ht.stdin.on("error", Ar);
    try {
      ht.stdin.write(
        o +
          `
`,
        "utf8",
      ),
        ht.stdin.end();
    } catch (Zr) {
      Ar(Zr);
    }
    if (
      ((fn = !0),
      AHt({
        processId: jn,
        hookId: A,
        shellCommand: dn,
        asyncResponse: { async: !0, asyncTimeout: nn },
        hookEvent: t,
        hookName: r,
        command: ct,
        asyncRewake: e.asyncRewake,
        rewakeMessage: e.rewakeMessage,
        rewakeSummary: e.rewakeSummary,
        pluginId: F,
      }))
    )
      return { stdout: "", stderr: "", output: "", status: 0, backgrounded: !0 };
  }
  let bn = "",
    hn = "",
    Ke = "";
  ht.stdout.setEncoding("utf8"), ht.stderr.setEncoding("utf8");
  let mn = !1,
    yn = null,
    er = new Promise((jn) => {
      yn = jn;
    }),
    Cn = (jn) => {
      (hn += jn), (Ke += jn);
    },
    Pn = (jn) => {
      if (((bn += jn), (Ke += jn), !mn)) {
        let Ar = wr(bn).trim();
        if (!Ar.includes("}")) return;
        (mn = !0), n(`Hooks: Checking first line for async: ${Ar}`);
        try {
          let Tn = V(Ar);
          if ((n(`Hooks: Parsed initial response: ${b(Tn)}`), G_(Tn) && !B)) {
            let Zr = `async_hook_${ht.pid}`;
            if (
              (n(`Hooks: Detected async hook, backgrounding process ${Zr}`),
              AHt({
                processId: Zr,
                hookId: A,
                shellCommand: dn,
                asyncResponse: Tn,
                hookEvent: t,
                hookName: r,
                command: ct,
                pluginId: F,
              }))
            )
              (Lt = !0),
                ht.stdout.removeListener("data", Pn),
                ht.stderr.removeListener("data", Cn),
                yn?.({ stdout: bn, stderr: hn, output: Ke, status: 0, backgrounded: !0 });
          } else if (G_(Tn) && B)
            n("Hooks: Detected async hook but forceSyncExecution is true, waiting for completion");
          else n("Hooks: Initial response is not async, continuing normal processing");
        } catch (Tn) {
          n(`Hooks: Failed to parse initial response as JSON: ${Tn}`);
        }
      }
    };
  ht.stdout.on("data", Pn), ht.stderr.on("data", Cn);
  let nr = IV({
      hookId: A,
      hookName: r,
      hookEvent: t,
      getOutput: async () => ({ stdout: bn, stderr: hn, output: Ke }),
    }),
    Rr = new Promise((jn) => {
      ht.stdout.on("end", () => jn());
    }),
    Lr = new Promise((jn) => {
      ht.stderr.on("end", () => jn());
    }),
    Pr = fn
      ? Promise.resolve()
      : new Promise((jn, Ar) => {
          ht.stdin.on("error", (Tn) => {
            Ar(Tn);
          }),
            ht.stdin.write(
              o +
                `
`,
              "utf8",
            ),
            ht.stdin.end(),
            jn();
        }),
    wn = new Promise((jn, Ar) => {
      ht.on("error", Ar);
    }),
    sr = !1;
  ht.on("exit", () => {
    if (!C.aborted) sr = !0;
  });
  let Jn = new Promise((jn) => {
    let Ar = null;
    ht.on("close", (Tn) => {
      (Ar = Tn ?? 1),
        Promise.all([Rr, Lr]).then(() => {
          jn({
            stdout: bn,
            stderr: hn,
            output: Ke,
            status: Ar,
            aborted: C.aborted && !sr,
            ...(Tn !== null && { exitedNormally: !0 }),
          });
        });
    });
  });
  try {
    if (me) Y("info", "hook_spawn_started", { hook_event_name: t, index: x });
    await Promise.race([Pr, wn]);
    let jn = await Promise.race([er, Jn, wn]);
    return (
      (Ce = jn.status),
      (Ie = jn.aborted ?? !1),
      { ...jn, stdout: x2(jn.stdout), stderr: x2(jn.stderr), output: x2(jn.output) }
    );
  } catch (jn) {
    let Ar = E(jn);
    if (((Ce = 1), Ar === "EPIPE")) {
      n("EPIPE error while writing to hook stdin (hook command likely closed early)");
      let Tn = "Hook command closed stdin before hook input was fully written (EPIPE)";
      return { stdout: "", stderr: Tn, output: Tn, status: 1 };
    } else if (Ar === "ABORT_ERR")
      return (Ie = !0), { stdout: "", stderr: "Hook cancelled", output: "Hook cancelled", status: 1, aborted: !0 };
    else {
      let Tn = l(jn);
      n(`Hook command failed to spawn (${r}): ${Tn}`, { level: "error" });
      let Zr = `Error occurred while executing hook command: ${Tn}`;
      return { stdout: "", stderr: Zr, output: Zr, status: 1, spawnFailed: !0 };
    }
  } finally {
    if (me)
      Y("info", "hook_spawn_completed", {
        hook_event_name: t,
        index: x,
        duration_ms: Date.now() - ge,
        exit_code: Ce,
        aborted: Ie,
      });
    if ((nr(), !Lt)) dn.cleanup();
  }
}

async function uun({
  hook: e,
  hookEvent: t,
  jsonInput: r,
  envContext: o,
  project: u,
  cwd: d,
  signal: _,
  envExtra: C,
  envOmit: A,
  envBase: x,
  shellPrefix: M,
}) {
  let {
    stdout: F,
    stderr: U,
    status: B,
    aborted: W,
    spawnFailed: z,
  } = await fK(e, t, `${t}:device`, r, o, u, d, _, ov(), void 0, void 0, void 0, void 0, !0, C, {
    base: x,
    omit: A,
    shellPrefix: M,
  });
  return { stdout: F, stderr: U, status: B, ...(W && { aborted: W }), ...(z && { spawnFailed: z }) };
}

function jUt({ hookEvent: e, stdout: t, stderr: r, pluginId: o }) {
  return (
    (e === "Stop" ||
      e === "SubagentStop" ||
      e === "TaskCompleted" ||
      e === "TeammateIdle" ||
      (Boolean(o) && e === "UserPromptSubmit")) &&
    !t.trim() &&
    /no such file|can't open/i.test(r)
  );
}

async function dun(e, t, r, o) {
  return k5(o, async () => {
    let u = await NHt(t, r);
    if (u === void 0) return !1;
    let d = Ur(e);
    if (Vd(d.toolName) !== u.toolName) return !1;
    if (!d.ruleContent) return !0;
    if (!u.judgeable) return null;
    return u.patternMatcher !== void 0 && u.patternMatcher(d.ruleContent);
  });
}

function RCr(e, t) {
  return !e || VNe(Vd(t), e, Yae.has("PreToolUse"));
}

function kCr(e) {
  if (!e || e === "*") return;
  let t = LHt(e, Yae.has("PreToolUse"));
  return t === void 0 ? void 0 : te(t.flatMap((r) => [r, ...MTt(r)]));
}

function LHt(e, t, r) {
  if (!(t ? /^[a-zA-Z0-9_|, -]+$/ : /^[a-zA-Z0-9_|]+$/).test(e)) return;
  return e
    .split(t ? /[|,]/ : "|")
    .map((u) => u.trim())
    .filter(Boolean)
    .flatMap((u) => r1e(Vd(u), r));
}

function pun(e, t, r) {
  let o = Azn(e);
  return !o || !t || VNe(o, FHt(e.hook_event_name, t), Yae.has(e.hook_event_name), r);
}

function FHt(e, t) {
  if (e !== "PreModelSwitch" && e !== "PostModelSwitch") return t;
  let r = t.replace(/\[[12]m\](?=\s*(?:[|,]|$))/gi, "");
  return r.trim() === "" ? t : r;
}

function Azn(e) {
  switch (e.hook_event_name) {
    case "PreToolUse":
    case "PostToolUse":
    case "PostToolUseFailure":
    case "PermissionRequest":
    case "PermissionDenied":
      return e.tool_name;
    case "UserPromptExpansion":
      return e.command_name;
    case "SessionStart":
      return e.source;
    case "Setup":
      return e.trigger;
    case "PreCompact":
    case "PostCompact":
      return e.trigger;
    case "PreModelSwitch": {
      let t = Gde(e.to_model);
      return OMe(t) ? t : void 0;
    }
    case "PostModelSwitch": {
      let t = Gde(e.to_model);
      return OMe(t) ? t : void 0;
    }
    case "Notification":
      return e.notification_type;
    case "SessionEnd":
      return e.reason;
    case "StopFailure":
      return e.error;
    case "SubagentStart":
      return e.agent_type;
    case "SubagentStop":
      return e.agent_type;
    case "TeammateIdle":
    case "TaskCreated":
    case "TaskCompleted":
      return;
    case "Elicitation":
      return e.mcp_server_name;
    case "ElicitationResult":
      return e.mcp_server_name;
    case "ConfigChange":
      return e.source;
    case "DirectoryAdded":
      return e.source;
    case "InstructionsLoaded":
      return e.load_reason;
    case "FileChanged":
      return sar(e.file_path);
    default:
      return;
  }
}

function vhr(e) {
  if (!/^[a-zA-Z0-9_|, -]+$/.test(e)) return !1;
  return e
    .split(/[|,]/)
    .map((t) => t.trim())
    .some((t) => t.startsWith("mcp__") && !t.slice(5).includes("__"));
}

function par(e, t) {
  if (!t || !P_e.has(e)) return;
  let r = gxn();
  if (r.has(t) || !vhr(t)) return;
  r.add(t);
  let o =
    t
      .split(/[|,]/)
      .map((u) => u.trim())
      .find((u) => u.startsWith("mcp__") && !u.slice(5).includes("__")) ?? t;
  n(
    `Hook matcher \`${o}\` matches no tool (it is compared as an exact string). To match all tools from this server, use \`${o}__.*\`. See CHANGELOG v2.1.195.`,
    { level: "warn" },
  );
}

function VNe(e, t, r, o) {
  if (!t || t === "*") return !0;
  let u = LHt(t, r, o);
  if (u !== void 0) return u.includes(e);
  try {
    let d = new RegExp(t);
    if (d.test(e)) return !0;
    for (let _ of MTt(e)) if (d.test(_)) return !0;
    for (let _ of Z6(e, o)) if (d.test(_)) return !0;
    return !1;
  } catch {
    return n(`Invalid regex pattern in hook matcher: ${t}`), !1;
  }
}

async function mar(e, t) {
  let r = await NHt(e, t);
  if (r === void 0) return;
  let { toolName: o, patternMatcher: u } = r;
  return (d) => {
    let _ = Ur(d);
    if (Vd(_.toolName) !== o) return !1;
    if (!_.ruleContent) return !0;
    return u ? u(_.ruleContent) : !1;
  };
}

async function NHt(e, t) {
  if (
    e.hook_event_name !== "PreToolUse" &&
    e.hook_event_name !== "PostToolUse" &&
    e.hook_event_name !== "PostToolUseFailure" &&
    e.hook_event_name !== "PermissionRequest" &&
    e.hook_event_name !== "PermissionDenied"
  )
    return;
  let r = Vd(e.tool_name),
    o = t && no(t, e.tool_name),
    u = o?.inputSchema.safeParse(e.tool_input),
    d = u?.success && o?.preparePermissionMatcher ? await o.preparePermissionMatcher(u.data) : void 0;
  return { toolName: r, patternMatcher: d, judgeable: u?.success === !0 };
}

function far(e) {
  return e.hook.type !== "callback" && e.hook.type !== "function" && e.deviceForwarded !== !0;
}

function gar(e, t) {
  return (
    n(`Hooks: ${e.type} hook not run for a call served to a cloud session (${t})`),
    $Ht(t, e.type, "model_hook"),
    t === "PreToolUse"
      ? {
          hook: e,
          outcome: "success",
          permissionBehavior: "ask",
          hookPermissionDecisionReason: Yde.model_hook,
          heldForServedCall: !0,
        }
      : { hook: e, outcome: "success", systemMessage: Vde(t, e.type, "model_hook"), heldForServedCall: !0 }
  );
}

function $Ht(e, t, r, o) {
  s("tengu_remote_tool_serve_hook_held", {
    event: c(e),
    hook_type: c(t),
    reason: c(r),
    ...(o !== void 0 && { sub_reason: c(o) }),
    outcome: c(e === "PreToolUse" ? "ask" : "skipped"),
  });
}

async function har(e, t, r) {
  let o = e.origin.launchDir ?? ee(),
    u = await e.reach.current(),
    d = zO() ?? r?.mcp.clients ?? [],
    _ = (me) => {
      let ge = d.find((Ie) => Ie.name === me)?.config;
      if (ge === void 0) return;
      let Ce =
        (ge.type === void 0 || ge.type === "stdio") && "command" in ge && typeof ge.command === "string"
          ? { command: ge.command, ...(Array.isArray(ge.args) && { args: ge.args }) }
          : void 0;
      return { scope: ge.scope, ...(Ce !== void 0 && { stdio: Ce }) };
    },
    C = u.map(kf),
    A = await Rhr(C, t, e.reach.distrustedSources),
    x = Is.filter((me) => !A.has(me)),
    M = e.reach.envAtAttach,
    F = vT(),
    U = Object.assign({}, ...x.map((me) => ye(me)?.env ?? {})),
    B =
      F === void 0
        ? { ...M }
        : Object.fromEntries(Object.keys(M).map((me) => [me, me in U ? U[me] : M[me] === F[me] ? M[me] : F[me]])),
    W = await DUt(C, B, Na());
  if (W.omit.length > 0) n(`Hooks: a served call's hooks run without ${W.omit.join(", ")}`);
  let z = Kae(),
    pe = async () => {
      let me = await XNe(z, t, su.home);
      return me !== "absent" && me !== void 0 && me.directory;
    },
    fe = rh([z, await UHt(z)].map(kf), C) || !(await pe()) ? "/" : z;
  return {
    roots: C,
    ownSources: x,
    env: W,
    spawnCwd: fe,
    shellPrefix: W.base.CLAUDE_CODE_SHELL_PREFIX,
    mcpShellPrefix: a.CLAUDE_CODE_SHELL_PREFIX,
    mcpPath: Na().PATH ?? "",
    launchDir: o,
    projectDir: e.reach.projectDir,
    mcpServer: _,
    ...(t !== void 0 && { storageV5: t }),
  };
}

async function Rhr(e, t, r = new Set()) {
  let o = async (d) => {
      if (BH.has(d)) return !0;
      let _ = Mo(d);
      if (_ === void 0) return !1;
      if (rh([_, await UHt(_)].map(kf), e)) return !0;
      if (d === "policySettings") return !1;
      let C = await XNe(_, d === "userSettings" ? void 0 : t, su.workspace);
      return C === "absent" ? !1 : C === void 0 || C.nlink > 1;
    },
    u = await Promise.all(Is.map(async (d) => (r.has(d) || (await o(d)) ? [d] : [])));
  for (let d of u.flat()) r.add(d);
  return new Set(r);
}

async function XNe(e, t, r) {
  if (O() && t !== void 0) {
    let o = await t.hostFiles.stat(r(qae(e) ? e : zBe(le().cwd(), e)));
    if (o.ok)
      return o.value.kind === "absent"
        ? "absent"
        : { file: o.value.kind === "file", directory: o.value.kind === "directory", nlink: o.value.nlink };
    return (o.error.code === "Failed" ? o.error.telemetryCode : void 0) === "ENOTDIR" ? "absent" : void 0;
  }
  return rar(e).then(
    (o) => ({ file: o.isFile(), directory: o.isDirectory(), nlink: o.nlink }),
    (o) => (o.code === "ENOENT" || o.code === "ENOTDIR" ? "absent" : void 0),
  );
}

async function yar(e, t, r) {
  let { hook: o } = e;
  if (o.type !== "command" && o.type !== "http" && o.type !== "mcp_tool") return dK;
  if (e.pluginRoot === void 0 && e.skillRoot === void 0 && kar(o, t, e.matcherTexts ?? [], r.ownSources))
    return { held: "project_configured" };
  let u = async (A, x = "script") => {
      let M = await Y7(A);
      if (M === "unreadable") return "unreadable";
      if (rh([A, ...(M === "absent" ? [] : [M])].map(kf), r.roots)) return "in_reach";
      if (x !== "directory" && M !== "absent") {
        let F = await XNe(M, r.storageV5, su.workspace);
        if (F === void 0) return "unreadable";
        if (F !== "absent" && (!F.file || (x === "script" && F.nlink > 1))) return "linked";
      }
      return;
    },
    d = e.pluginRoot ?? e.skillRoot;
  if (d !== void 0) {
    let A = await u(d, "directory");
    if (A !== void 0) return A === "linked" ? { held: "unreadable", cause: "linked_file" } : { held: A };
  }
  if (o.type === "mcp_tool") {
    let A = r.mcpServer(o.server);
    if (A?.scope === "project") return { held: "in_reach" };
    if (A === void 0 || !["user", "local", "enterprise", "managed", "claudeai"].includes(A.scope ?? ""))
      return { held: "unreadable" };
    if (A.stdio === void 0) return dK;
    if (r.mcpShellPrefix || r.shellPrefix) return { held: "unreadable" };
    let x = tTe(
      { command: A.stdio.command, args: A.stdio.args ?? [] },
      { home: Kae(), projectDir: r.projectDir, hookCwd: r.launchDir, defaultShell: "bash", shellPrefix: void 0 },
    );
    if (x.kind === "opaque") return { held: "unreadable" };
    let M = r.env.base.PATH ?? "",
      F = async (W) => tGe(A.stdio.command, W, r.roots),
      U = async (W) => (await LR(W, M, r.roots)) ?? (r.mcpPath === M ? void 0 : await LR(W, r.mcpPath, r.roots));
    if (x.interpreter !== null) {
      if (
        (qae(A.stdio.command)
          ? await u(A.stdio.command, "program")
          : await Promise.all([F(M), F(r.mcpPath)]).then(([pe, fe]) =>
              pe === void 0 || pe === "in_reach" || fe === void 0 || fe === "in_reach" || pe !== fe
                ? "in_reach"
                : void 0,
            )) !== void 0
      )
        return { held: "unreadable", cause: "program_in_reach" };
      let z = qae(A.stdio.command) ? await U(A.stdio.command) : void 0;
      if (z !== void 0) return z === "unreadable" ? { held: "unreadable" } : { held: "unreadable", cause: z };
    } else {
      let W = await U(x.resolvedPath);
      if (W !== void 0) return W === "unreadable" ? { held: "unreadable" } : { held: "unreadable", cause: W };
    }
    let B = await u(x.resolvedPath);
    return B === void 0 ? dK : B === "linked" ? { held: "unreadable", cause: "linked_file" } : { held: B };
  }
  if (o.type !== "command") return dK;
  let _ = d === void 0 ? { hook: o, projectDir: r.projectDir } : _ar(o, d, r.projectDir);
  if (_ === void 0) return { held: "unreadable" };
  let C;
  for (let A of [r.launchDir]) {
    let x = tTe(_.hook, {
      home: Kae(),
      projectDir: _.projectDir,
      hookCwd: A,
      defaultShell: "bash",
      shellPrefix: r.shellPrefix,
    });
    if (x.kind === "opaque") return { held: "unreadable" };
    if (!war(x.rawPath)) return { held: "in_reach" };
    let M = await u(x.resolvedPath);
    if (M !== void 0) return M === "linked" ? { held: "unreadable", cause: "linked_file" } : { held: M };
    if (x.interpreter === null) {
      let B = await LR(x.resolvedPath, r.env.extra.PATH ?? "", r.roots);
      if (B !== void 0) return B === "unreadable" ? { held: "unreadable" } : { held: "unreadable", cause: B };
      continue;
    }
    let F = o.args !== void 0 ? _.hook.command : _.hook.command.trim().split(/[ \t]+/, 1)[0];
    if (F !== void 0 && qae(F)) {
      let B = await u(F, "program");
      if (B !== void 0)
        return {
          held: "unreadable",
          cause: B === "linked" ? "linked_file" : B === "in_reach" ? "program_in_reach" : "program_unresolved",
        };
      let W = await LR(F, r.env.extra.PATH ?? "", r.roots);
      if (W !== void 0) return W === "unreadable" ? { held: "unreadable" } : { held: "unreadable", cause: W };
      continue;
    }
    let U = await tGe(F ?? x.interpreter, r.env.extra.PATH ?? "", r.roots);
    if (U === void 0) return { held: "unreadable", cause: "program_unresolved" };
    if (U === "in_reach") return { held: "unreadable", cause: "program_in_reach" };
    if (o.args !== void 0 && !o.command.includes("/")) C = U;
  }
  return C === void 0 ? dK : { program: C };
}

function _ar(e, t, r) {
  if (e.args !== void 0) {
    let o = (u) => u.replaceAll("${CLAUDE_PLUGIN_ROOT}", () => t);
    return { hook: { ...e, command: o(e.command), args: e.args.map(o) }, projectDir: r };
  }
  if (!/\$\{?CLAUDE_PLUGIN_ROOT\b/.test(e.command)) return { hook: e, projectDir: r };
  if (/\$\{?CLAUDE_PROJECT_DIR\b/.test(e.command)) return;
  return {
    hook: { ...e, command: e.command.replace(/\$(\{?)CLAUDE_PLUGIN_ROOT\b/g, (o, u) => `$${u}CLAUDE_PROJECT_DIR`) },
    projectDir: t,
  };
}

function QM(e) {
  switch (e.type) {
    case "command":
      return `command\x00${e.shell ?? jD()}\x00${e.command}\x00${b(e.args ?? null)}\x00${e.if ?? ""}`;
    case "http":
      return `http\x00${e.url}\x00${e.if ?? ""}`;
    case "mcp_tool":
      return `mcp_tool\x00${e.server}\x00${e.tool}\x00${b(e.input ?? {})}\x00${e.if ?? ""}`;
    default:
      return;
  }
}

function Sar(e, t) {
  if (e.type === "callback" || e.type === "function" || t.type === "callback" || t.type === "function") return e === t;
  let r = QM(e);
  return r !== void 0 ? r === QM(t) : IHt(e, t);
}

function bar(e, t, r, o) {
  if (e.type === "callback" || e.type === "function") return;
  let u = QM(e);
  if (u === void 0) return;
  for (let d of [...o].reverse())
    for (let _ of ye(d)?.hooks?.[t] ?? []) {
      if (!r.includes(_.matcher ?? "")) continue;
      let C = _.hooks.find((A) => QM(A) === u);
      if (C !== void 0) return C;
    }
  return;
}

function kar(e, t, r, o) {
  let u = (d, _) =>
    d.some((C) => (ye(C)?.hooks?.[t] ?? []).some((A) => (A.matcher ?? "") === _ && A.hooks.some((x) => IHt(x, e))));
  return !r.some((d) => u(o, d));
}

function war(e) {
  return /^(?:\/|~|\$\{?[A-Za-z_])/.test(e);
}

async function UHt(e) {
  let t = await Y7(e);
  return t === "absent" || t === "unreadable" ? e : t;
}

function Tar(e, t, r, o) {
  return (
    n(`Hooks: ${e.type} hook not run for a call served to a cloud session (${t}, ${o ?? r})`),
    $Ht(t, e.type, r, o),
    t === "PreToolUse"
      ? {
          hook: e,
          outcome: "success",
          permissionBehavior: "ask",
          hookPermissionDecisionReason: Yde[r],
          heldForServedCall: !0,
        }
      : { hook: e, outcome: "success", systemMessage: Vde(t, e.type, r), heldForServedCall: !0 }
  );
}

function Ear(e) {
  if (e.blockingError === void 0) return e;
  let t = `${e.hook.type} hook`,
    r = `[${e.blockingError.command}]:`,
    o = e.blockingError.blockingError;
  return { ...e, blockingError: { blockingError: o.startsWith(r) ? `[${t}]:${o.slice(r.length)}` : o, command: t } };
}

function Car(e, t) {
  let r =
    e.outcome === "cancelled" && t?.aborted !== !0
      ? "gave no verdict in time"
      : e.outcome === "non_blocking_error" && e.ranByContract !== !0
        ? "could not render a verdict"
        : void 0;
  if (r === void 0) return e;
  return (
    n(`Hooks: served-call PreToolUse ${e.hook.type} hook ${r}; refusing the call`, { level: "warn" }),
    {
      ...e,
      message: void 0,
      blockingError: {
        blockingError: `a PreToolUse ${e.hook.type} hook here ${r} for a call served for a cloud session; refusing rather than skipping that gate`,
        command: _9(e.hook),
      },
      outcome: "blocking",
    }
  );
}

function BHt(e) {
  return e.hook.type === "callback" && e.hook.internal === !0;
}

function pK(e, t) {
  return `${e.pluginRoot ?? e.skillRoot ?? ""}\x00${t}`;
}

function Xae(e) {
  let t = e.lastIndexOf("@");
  if (t <= 0) return !1;
  let r = e.slice(t + 1);
  if (Pp(r)) return !0;
  return !1;
}

function Czn(e) {
  let t = e.filter((o) => o.pluginId);
  if (t.length === 0) return;
  let r = {};
  for (let o of t) {
    let u = Xae(o.pluginId) ? o.pluginId : "third-party";
    r[u] = (r[u] || 0) + 1;
  }
  return r;
}

function khr(e) {
  if (!Xae(e)) return !1;
  let t = e.lastIndexOf("@"),
    r = e.slice(0, t);
  return (I("tengu_amber_lattice", {}).plugins ?? []).includes(r);
}

function Hhr(e) {
  if (!e || !khr(e)) return {};
  if (!pr()) return {};
  if (Ct()) return {};
  if (a.ANTHROPIC_UNIX_SOCKET) return {};
  try {
    if (Tt()) {
      let r = Yt()?.accessToken;
      return r ? { ANTHROPIC_AUTH_TOKEN: r } : {};
    }
    let t = F3();
    return t ? { ANTHROPIC_API_KEY: t } : {};
  } catch {
    return {};
  }
}

function Sce(e, t, r) {
  if (!e || !t) return;
  if (!Xae(t)) return;
  let o = Object.entries(e)
    .slice(0, Aar)
    .filter(([, u]) => typeof u === "boolean" || typeof u === "number");
  s("tengu_hook_plugin_metrics", { ...Object.fromEntries(o), pluginId: t, hookEvent: c(r) }),
    Po("hook_plugin_metrics", { ...Object.fromEntries(o), plugin_id: t, hook_event: r });
}

function HHt(e) {
  let t = {};
  for (let r of e) t[r.hook.type] = (t[r.hook.type] || 0) + 1;
  return t;
}

function Rar(e, t) {
  let r = new Set((ye("policySettings")?.hooks?.[t] ?? []).map((o) => pl.stableKey(o)));
  return e.filter((o) => !r.has(pl.stableKey(o)));
}

function Vae(e, t, r, o) {
  if (o?.managedHooksOnly) {
    let C = ye("policySettings");
    if (C?.disableAllHooks === !0) return [];
    return [...(C?.hooks?.[r] ?? [])];
  }
  let u = o?.managedHooksExcluded ? Rar(Bv(r), r) : [...Bv(r)],
    d = typeof t === "string" ? [t] : t;
  if (e === void 0 || tgt()) return u;
  for (let C of d) {
    let A = e.get(C, r).get(r);
    if (A) u.push(...A);
  }
  let _ = d[0];
  if (_ !== void 0) {
    let C = e.getFunctionHooks(_, r).get(r);
    if (C) u.push(...C);
  }
  return u;
}

function WUt(e) {
  let t = xhr.of(e.session.host);
  function r(_) {
    let C = t.tokens.get(_);
    if (C === void 0) (t.next += 1), (C = t.next), t.tokens.set(_, C);
    return C;
  }
  let o = zb(e, "UserPromptSubmit", e.session.id),
    u = Vae(e.sessionHooksRegistry, o, "UserPromptSubmit", aGe),
    d = Vae(e.sessionHooksRegistry, o, "UserPromptSubmit");
  return u.length + d.length === 0
    ? ""
    : JSON.stringify([u, d], (_, C) => (typeof C === "function" ? `function#${t.host}:${r(C)}` : C));
}

function iT(e, t, r) {
  let o = SX()?.[e];
  if (o && o.length > 0) return !0;
  if (!f_()) {
    let _ = die()?.[e];
    if (_ && _.length > 0) return !0;
  }
  let u = VO()?.[e];
  if (u && u.length > 0) return !0;
  if (t === void 0) return !1;
  return (typeof r === "string" ? [r] : r).some((_) => t.has(_, e));
}

async function vzn(e, t, r, o, u, d) {
  try {
    let _ = Vae(e, t, r, d),
      C = Azn(o),
      A = Yae.has(o.hook_event_name);
    for (let Be of _) par(r, Be.matcher);
    n(`Getting matching hook commands for ${r} with query: ${C}`, { level: "verbose" }),
      n(`Found ${_.length} hook matchers in settings`, { level: "verbose" });
    let x = d?.getToolAliases?.(),
      F = (C ? _.filter((Be) => !Be.matcher || VNe(C, FHt(r, Be.matcher), A, x)) : _).flatMap((Be) => {
        let ze = "pluginRoot" in Be ? Be.pluginRoot : void 0,
          We = "pluginId" in Be ? Be.pluginId : void 0,
          Ve = "skillRoot" in Be ? Be.skillRoot : void 0,
          Pt = ze
            ? "pluginName" in Be
              ? `plugin:${Be.pluginName}`
              : "plugin"
            : Ve
              ? "skillName" in Be
                ? `skill:${Be.skillName}`
                : "skill"
              : "settings",
          ct = !Be.matcher || Be.matcher === "*" || Be.matcher === ".*",
          ut = Hde(Be);
        return Be.hooks.map((en) => ({
          hook: en,
          pluginRoot: ze,
          pluginId: We,
          skillRoot: Ve,
          hookSource: Pt,
          matcherIsMatchAll: ct,
          ...(d?.recordMatchers && { matcherTexts: [Be.matcher ?? ""] }),
          ...(ut && { deviceForwarded: ut }),
        }));
      });
    if (F.every((Be) => Be.hook.type === "callback" || Be.hook.type === "function")) return F;
    let U = (Be) => Be.if ?? "",
      B = Array.from(
        new Map(F.filter((Be) => Be.hook.type === "command").map((Be) => [pK(Be, QM(Be.hook) ?? ""), Be])).values(),
      ),
      W = Array.from(
        new Map(
          F.filter((Be) => Be.hook.type === "prompt").map((Be) => [pK(Be, `${Be.hook.prompt}\x00${U(Be.hook)}`), Be]),
        ).values(),
      ),
      z = Array.from(
        new Map(
          F.filter((Be) => Be.hook.type === "agent").map((Be) => [pK(Be, `${Be.hook.prompt}\x00${U(Be.hook)}`), Be]),
        ).values(),
      ),
      pe = Array.from(
        new Map(F.filter((Be) => Be.hook.type === "http").map((Be) => [pK(Be, QM(Be.hook) ?? ""), Be])).values(),
      ),
      fe = Array.from(
        new Map(F.filter((Be) => Be.hook.type === "mcp_tool").map((Be) => [pK(Be, QM(Be.hook) ?? ""), Be])).values(),
      ),
      me = F.filter((Be) => Be.hook.type === "callback"),
      ge = F.filter((Be) => Be.hook.type === "function"),
      Ce = (Be) => {
        if (d?.recordMatchers !== !0) return Be;
        try {
          let ze = te(
              F.filter(
                (Ve) => Ve.pluginRoot === Be.pluginRoot && Ve.skillRoot === Be.skillRoot && Sar(Ve.hook, Be.hook),
              ).flatMap((Ve) => Ve.matcherTexts ?? []),
            ),
            We = Be.pluginRoot === void 0 && Be.skillRoot === void 0 ? bar(Be.hook, r, ze, d.ownSources ?? []) : void 0;
          return { ...Be, matcherTexts: ze, hook: We ?? Be.hook };
        } catch (ze) {
          return (
            n(`Hooks: could not establish whose settings define a hook (${l(ze)}); treating it as the project's`),
            { ...Be, matcherTexts: [] }
          );
        }
      },
      Ie = [...B.map(Ce), ...W, ...z, ...pe.map(Ce), ...fe.map(Ce), ...me, ...ge],
      Pe = Ie.some(
        (Be) =>
          (Be.hook.type === "command" ||
            Be.hook.type === "prompt" ||
            Be.hook.type === "agent" ||
            Be.hook.type === "http" ||
            Be.hook.type === "mcp_tool") &&
          Be.hook.if,
      )
        ? await mar(o, u)
        : void 0,
      Oe = Ie.filter((Be) => {
        if (
          Be.hook.type !== "command" &&
          Be.hook.type !== "prompt" &&
          Be.hook.type !== "agent" &&
          Be.hook.type !== "http" &&
          Be.hook.type !== "mcp_tool"
        )
          return !0;
        let ze = Be.hook.if;
        if (!ze) return !0;
        if (!Pe) return n(`Hook if condition "${ze}" cannot be evaluated for non-tool event ${o.hook_event_name}`), !1;
        if (Pe(ze)) return !0;
        return n(`Skipping hook due to if condition "${ze}" not matching`), !1;
      }),
      Fe =
        r === "SessionStart" || r === "Setup"
          ? Oe.filter((Be) => {
              if (Be.hook.type === "http")
                return n(`Skipping HTTP hook ${Be.hook.url} \u2014 HTTP hooks are not supported for ${r}`), !1;
              return !0;
            })
          : Oe;
    return (
      n(`Matched ${Fe.length} unique hooks for query "${C || "no match query"}" (${F.length} before deduplication)`, {
        level: "verbose",
      }),
      Fe
    );
  } catch {
    return [];
  }
}

function qUt(e, t) {
  return `${e} hook error: ${t.blockingError}`;
}

function lGe(e) {
  return BU("Stop", e.blockingError);
}

function Rzn(e) {
  return BU("TeammateIdle", e.blockingError);
}

function kzn(e) {
  return BU("TaskCreated", e.blockingError);
}

function GUt(e) {
  return BU("TaskCompleted", e.blockingError);
}

function NPe(e, t, r = e) {
  return In({
    type: "hook_non_blocking_error",
    hookName: r,
    toolUseID: ov(),
    hookEvent: e,
    stderr: t.blockingError,
    stdout: "",
    exitCode: 2,
    command: t.command,
  });
}

function Q7(e) {
  return `UserPromptSubmit operation blocked by hook:
${e.blockingError}`;
}

function RHt(e, t) {
  let r = fxn(),
    o = `${e}:${t}`;
  if (r.has(o)) return !1;
  return r.add(o), !0;
}

function jHt(e, t) {
  return t ? lIn(c(e), w(":"), Vn(t)) : c(e);
}

function PHt(e, t) {
  return e !== "SessionEnd" && xo() && !t?.aborted;
}

async function* jy(e) {
  let t = () => xo() && !e.signal?.aborted;
  if (!Par.has(e.hookInput.hook_event_name)) {
    if (t()) return;
    yield* xHt(e);
    return;
  }
  if (t()) await fm();
  try {
    for await (let r of xHt(e)) {
      if (t()) await fm();
      yield r;
    }
  } catch (r) {
    if (t()) await fm();
    throw r;
  }
  if (t()) await fm();
}

async function* xHt(e) {
  if (!ka(e.agentContext) && !ka(e.toolUseContext?.agentContext)) {
    yield* MHt(e);
    return;
  }
  let t = e.hookInput.hook_event_name === "PreToolUse";
  for await (let r of MHt(e)) {
    let o = {
      ...(r.permissionBehavior !== void 0 && { permissionBehavior: r.permissionBehavior }),
      ...(r.hookPermissionDecisionReason !== void 0 && {
        hookPermissionDecisionReason: r.hookPermissionDecisionReason,
      }),
      ...(r.heldForServedCall && { heldForServedCall: !0 }),
      ...(r.updatedInput !== void 0 && { updatedInput: r.updatedInput }),
      ...(r.preventContinuation !== void 0 && { preventContinuation: r.preventContinuation }),
      ...(r.stopReason !== void 0 && { stopReason: r.stopReason }),
      ...(r.impossible !== void 0 && { impossible: r.impossible }),
      ...(r.hookSource !== void 0 && { hookSource: r.hookSource }),
      ...(r.updatedToolOutput !== void 0 && { updatedToolOutput: r.updatedToolOutput }),
      ...(r.updatedMCPToolOutput !== void 0 && { updatedMCPToolOutput: r.updatedMCPToolOutput }),
      ...(t && r.blockingError !== void 0 && { blockingError: r.blockingError }),
    };
    if (Object.keys(o).length > 0) yield o;
  }
}

function fun(e, t) {
  if (!uKe()) return e;
  if (e.permissionBehavior === "allow")
    n(`${t} permissionDecision=allow ignored: a confined session takes grants only from its command line`),
      (e.permissionBehavior = void 0);
  if (e.permissionRequestResult?.behavior === "allow")
    n(`${t} PermissionRequest allow ignored: a confined session takes grants only from its command line`),
      (e.permissionRequestResult = void 0);
  return e;
}

async function* MHt({
  session: e,
  hookInput: t,
  extendedHookInput: r,
  toolUseID: o,
  matchQuery: u,
  signal: d,
  timeoutMs: _ = Mi,
  toolUseContext: C,
  sessionHooks: A,
  messages: x,
  forceSyncExecution: M,
  suppressPerInvocationTelemetry: F,
  managedHooksOnly: U,
  skipSessionFunctionHooks: B,
  sessionFunctionHooksOnly: W,
  managedHooksExcluded: z,
  storageV5: pe,
  credentials: fe,
}) {
  let me = t.hook_event_name,
    ge = u ? `${me}:${u}` : me,
    Ce = C?.storageV5 ?? pe,
    Ie = C?.credentials ?? fe;
  if (J7()) {
    n(`Skipping ${ge} hook execution - workspace trust not accepted`);
    return;
  }
  let Ee = C ? C.sessionHooksRegistry : A,
    Pe = C?.getAppState(),
    Oe = C?.remoteCall !== void 0,
    Fe = zb(C, me, e.id),
    Be =
      C?.remoteCall !== void 0 && Vae(Ee, Fe, me, { managedHooksOnly: U }).length > 0
        ? await har(C.remoteCall, C.storageV5, Pe)
        : void 0,
    ze = (
      await vzn(Ee, Fe, me, t, C?.options?.tools, {
        managedHooksOnly: U,
        managedHooksExcluded: z,
        getToolAliases: () => Pe?.toolPermissionContext.toolAliases,
        recordMatchers: Oe,
        ...(Be !== void 0 && { ownSources: Be.ownSources }),
      })
    ).filter((mn) => {
      let yn = !Oe || far(mn);
      if (!yn && (mn.hook.type === "agent" || mn.hook.type === "prompt"))
        n(`Hooks: ${mn.hook.type} hook skipped for a call served to a cloud session`);
      return yn;
    }),
    We = W ? ze.filter((mn) => mn.hook.type === "function") : B ? ze.filter((mn) => mn.hook.type !== "function") : ze;
  if (We.length === 0) return;
  if (d?.aborted) return;
  let Ve = jHt(me, u),
    Pt = We.filter((mn) => !BHt(mn));
  if (Pt.length > 0) {
    if (!F) {
      let mn = Czn(Pt),
        yn = HHt(Pt),
        er = Q(Pt, (Cn) => Cn.matcherIsMatchAll);
      s("tengu_run_hook", {
        hookName: Ve,
        numCommands: Pt.length,
        numMatchAllMatchers: er,
        numSpecificMatchers: Pt.length - er,
        hookTypeCounts: b(yn),
        ...(mn && { pluginHookCounts: b(mn) }),
      });
    }
  } else {
    let mn = Date.now(),
      yn = 0,
      er = C
        ? {
            getAppState: C.getAppState,
            applyAttributionOp: C.applyAttributionOp,
            session: C.session,
            storageV5: C.storageV5,
          }
        : void 0;
    for (let [Pn, nr] of We.entries()) {
      let { hook: Rr } = nr;
      if (Rr.type !== "callback") continue;
      let Lr = await Rr.callback(t, o, d, Pn, er);
      if (G_(Lr) || Object.keys(Lr).length === 0) continue;
      let Pr = mK({
        json: Lr,
        command: "callback",
        hookName: `${me}:Callback`,
        toolUseID: o,
        hookEvent: me,
        expectedHookEvent: me,
        stdout: void 0,
        stderr: void 0,
        exitCode: void 0,
      });
      if (Pr.permissionBehavior === "deny")
        yn++,
          n(
            `Hook ${me} (${fk(Rr)}) returned permissionDecision: deny${Pr.hookPermissionDecisionReason ? ` (reason: ${Pr.hookPermissionDecisionReason})` : ""}`,
          ),
          yield {
            permissionBehavior: "deny",
            hookPermissionDecisionReason: Pr.hookPermissionDecisionReason,
            hookSource: nr.hookSource,
          };
      if (Pr.additionalContext)
        yield {
          additionalContexts: [await yce(Pr.additionalContext, `${o}-${Pn}`, "additionalContext", { storageV5: Ce })],
        };
      if (Pr.systemMessage)
        yield {
          message: In({
            type: "hook_system_message",
            content: await yce(Pr.systemMessage, `${o}-${Pn}`, "systemMessage", { storageV5: Ce }),
            hookName: ge,
            toolUseID: o,
            hookEvent: me,
          }),
        };
    }
    let Cn = Date.now() - mn;
    fve()?.observe("hook_duration_ms", Cn),
      s("tengu_repl_hook_finished", {
        hookName: Ve,
        numCommands: We.length,
        numSuccess: We.length - yn,
        numBlocking: yn,
        numNonBlockingError: 0,
        numCancelled: 0,
        totalDurationMs: Cn,
      });
    return;
  }
  let ct = MS() && Tl(),
    ut = ct || v2() ? b(Oar(We)) : "[]",
    en = Dhr(me, u);
  if (!F)
    Po("hook_execution_start", {
      hook_event: me,
      hook_name: en,
      num_hooks: String(We.length),
      managed_only: String(gwe()),
      hook_source: gwe() ? "policySettings" : "merged",
      safe_mode: String(Dr()),
      ...(ct && { hook_definitions: ut }),
    });
  let nn = F ? void 0 : lKn(me, en, We.length, ut);
  for (let { hook: mn } of We)
    yield {
      message: {
        type: "progress",
        data: {
          type: "hook_progress",
          hookEvent: me,
          hookName: ge,
          command: fk(mn),
          ...(mn.type === "prompt" && { promptText: mn.prompt }),
          ...("statusMessage" in mn && mn.statusMessage != null && { statusMessage: mn.statusMessage }),
        },
        parentToolUseID: o,
        toolUseID: o,
        timestamp: new Date().toISOString(),
        uuid: ov(),
      },
    };
  let xt = Date.now(),
    tt,
    lt;
  function mt(mn) {
    if (tt !== void 0) return tt;
    try {
      return (tt = { ok: !0, value: b(t) });
    } catch (yn) {
      return (
        h(ft(Error(`Failed to stringify hook ${ge} input`, { cause: yn }), "Failed to stringify hook input")),
        (tt = { ok: !1, error: yn })
      );
    }
  }
  let Xe,
    nt = We.map(async function* ({ hook: mn, pluginRoot: yn, pluginId: er, skillRoot: Cn, matcherTexts: Pn }, nr) {
      if (er) sk(er, "hook", { kind: "hook", name: me });
      if (Oe && (mn.type === "agent" || mn.type === "prompt")) {
        yield gar(mn, me);
        return;
      }
      let Rr;
      if (Oe && (mn.type === "command" || mn.type === "http" || mn.type === "mcp_tool")) {
        let br = await yar({ hook: mn, pluginRoot: yn, skillRoot: Cn, matcherTexts: Pn }, me, Be).catch(
          (So) => (n(`Hooks: could not judge a hook for a served call (${l(So)}); holding it`), { held: "unreadable" }),
        );
        if (br.held !== void 0) {
          yield Tar(mn, me, br.held, br.cause);
          return;
        }
        Rr = br.program;
      }
      if (mn.type === "callback") {
        let br = mn.timeout ? mn.timeout * 1000 : _,
          { signal: So, cleanup: Ui } = Ja(d, { timeoutMs: br });
        try {
          yield await Iar({
            toolUseID: o,
            hook: mn,
            hookEvent: me,
            hookInput: t,
            signal: So,
            hookIndex: nr,
            toolUseContext: C,
          }).finally(Ui);
        } catch (ki) {
          if (ki instanceof la) {
            (Xe = ki),
              n(`${me} SDK callback hook cancelled (control stream closed); draining sibling hooks`),
              yield { outcome: "cancelled", hook: mn };
            return;
          }
          if ((me !== "UserPromptSubmit" && me !== "UserPromptExpansion") || !So.aborted || d?.aborted) throw ki;
          n(`${ge} callback hook timed out; swallowed rejection: ${l(ki)}`),
            s("tengu_sdk_hook_callback_timeout", { hookEvent: c(me) }),
            yield {
              blockingError: { blockingError: `${ge} hook callback timed out after ${br}ms`, command: _9(mn) },
              suppressOriginalPrompt: !0,
              outcome: "blocking",
              hook: mn,
            };
        }
        return;
      }
      if (mn.type === "function") {
        if (!x) {
          yield {
            message: In({
              type: "hook_error_during_execution",
              hookName: ge,
              toolUseID: o,
              hookEvent: me,
              content: "Messages not provided for function hook",
            }),
            outcome: "non_blocking_error",
            hook: mn,
          };
          return;
        }
        yield xar({ hook: mn, messages: x, hookName: ge, toolUseID: o, hookEvent: me, timeoutMs: _, signal: d });
        return;
      }
      let Lr = mn.timeout ? mn.timeout * 1000 : _,
        { signal: Pr, cleanup: wn } = Ja(d, { timeoutMs: Lr }),
        sr = ov(),
        Jn = Date.now(),
        jn = fk(mn),
        Ar = yn ?? Cn,
        Tn = _9(mn),
        Zr =
          Ar && mn.type === "command"
            ? Tn.replace(
                mn.args === void 0 ? /\$\{CLAUDE_PLUGIN_ROOT\}|\$CLAUDE_PLUGIN_ROOT\b/g : /\$\{CLAUDE_PLUGIN_ROOT\}/g,
                () => Ar,
              )
            : Tn;
      try {
        let br = mt(er);
        if (!br.ok) {
          yield {
            message: In({
              type: "hook_error_during_execution",
              hookName: ge,
              toolUseID: o,
              hookEvent: me,
              content: `Failed to prepare hook input: ${l(br.error)}`,
              command: jn,
              durationMs: Date.now() - Jn,
            }),
            outcome: "non_blocking_error",
            hook: mn,
          },
            wn();
          return;
        }
        let So = br.value;
        if (mn.type === "prompt") {
          if (!C)
            throw Error(
              `prompt-type hooks are not supported for ${me} events (no conversation context is available). Use a command-type hook instead.`,
            );
          if (C.agentId?.startsWith(Wae)) {
            wn(),
              yield {
                message: In({ type: "hook_cancelled", hookName: ge, toolUseID: o, hookEvent: me }),
                outcome: "cancelled",
                hook: mn,
              };
            return;
          }
          let Er = await iHt(mn, ge, me, So, Pr, C, x, o, Lr);
          if (Er.message?.type === "attachment") {
            let Qn = Er.message.attachment;
            if (Qn.type === "hook_success" || Qn.type === "hook_non_blocking_error")
              (Qn.command = jn), (Qn.durationMs = Date.now() - Jn);
          }
          yield Er, wn?.();
          return;
        }
        if (mn.type === "agent") {
          if (!C)
            throw Error(
              `agent-type hooks are not supported for ${me} events (no conversation context is available). Use a command-type hook instead.`,
            );
          if (C.agentId?.startsWith(Wae)) {
            wn(),
              yield {
                message: In({ type: "hook_cancelled", hookName: ge, toolUseID: o, hookEvent: me }),
                outcome: "cancelled",
                hook: mn,
              };
            return;
          }
          let Er = await mHt(mn, ge, me, So, Pr, C, o, "agent_type" in t ? t.agent_type : void 0);
          if (Er.message?.type === "attachment") {
            let Qn = Er.message.attachment;
            if (Qn.type === "hook_success" || Qn.type === "hook_non_blocking_error")
              (Qn.command = jn), (Qn.durationMs = Date.now() - Jn);
          }
          yield Er, wn?.();
          return;
        }
        if (mn.type === "http") {
          MV(sr, ge, me);
          let Er = await Zpt(mn, me, So, d, _);
          if ((wn?.(), Er.aborted)) {
            cu({
              hookId: sr,
              hookName: ge,
              hookEvent: me,
              output: "Hook cancelled",
              stdout: "",
              stderr: "",
              exitCode: void 0,
              outcome: "cancelled",
            }),
              yield {
                message: In({
                  type: "hook_cancelled",
                  hookName: ge,
                  toolUseID: o,
                  hookEvent: me,
                  timedOut: !d?.aborted,
                  timeoutMs: mn.timeout ? mn.timeout * 1000 : _,
                }),
                outcome: "cancelled",
                hook: mn,
              };
            return;
          }
          if (Er.error || !Er.ok) {
            let xn = Er.error || `HTTP ${Er.statusCode} from ${mn.url}`;
            cu({
              hookId: sr,
              hookName: ge,
              hookEvent: me,
              output: xn,
              stdout: "",
              stderr: xn,
              exitCode: Er.statusCode,
              outcome: "error",
            }),
              yield {
                message: In({
                  type: "hook_non_blocking_error",
                  hookName: ge,
                  toolUseID: o,
                  hookEvent: me,
                  stderr: xn,
                  stdout: "",
                  exitCode: Er.statusCode ?? 0,
                }),
                outcome: "non_blocking_error",
                hook: mn,
              };
            return;
          }
          let { json: Qn, validationError: mr } = rft(Er.body);
          if (mr) {
            cu({
              hookId: sr,
              hookName: ge,
              hookEvent: me,
              output: Er.body,
              stdout: Er.body,
              stderr: mr,
              exitCode: Er.statusCode,
              outcome: "error",
            }),
              yield {
                message: In({
                  type: "hook_non_blocking_error",
                  hookName: ge,
                  toolUseID: o,
                  hookEvent: me,
                  stderr: mr,
                  stdout: Er.body,
                  exitCode: Er.statusCode ?? 0,
                }),
                outcome: "non_blocking_error",
                hook: mn,
              };
            return;
          }
          if (Qn && G_(Qn)) {
            cu({
              hookId: sr,
              hookName: ge,
              hookEvent: me,
              output: Er.body,
              stdout: Er.body,
              stderr: "",
              exitCode: Er.statusCode,
              outcome: "success",
            }),
              yield { outcome: "success", hook: mn };
            return;
          }
          if (Qn) {
            let xn = mK({
              json: Qn,
              command: mn.url,
              hookName: ge,
              toolUseID: o,
              hookEvent: me,
              expectedHookEvent: me,
              stdout: Er.body,
              stderr: "",
              exitCode: Er.statusCode,
            });
            Sce(Qn.metrics, er, me),
              cu({
                hookId: sr,
                hookName: ge,
                hookEvent: me,
                output: Er.body,
                stdout: Er.body,
                stderr: "",
                exitCode: Er.statusCode,
                outcome: "success",
              }),
              yield { ...xn, outcome: "success", hook: mn };
            return;
          }
          return;
        }
        if (mn.type === "mcp_tool") {
          MV(sr, ge, me);
          let Er = await HNe(mn, me, t, Oe ? void 0 : C?.options.mcpClients, d, _);
          wn?.();
          let Qn =
            Oe && me === "PreToolUse"
              ? Er.aborted
                ? d?.aborted
                  ? void 0
                  : "timed out"
                : Er.error !== void 0 && Er.body === ""
                  ? "could not be run"
                  : !Er.ok
                    ? "returned an error"
                    : void 0
              : void 0;
          if (Qn !== void 0) {
            let Fr = `a PreToolUse mcp_tool hook here ${Qn} for a call served for a cloud session; refusing rather than skipping that gate`;
            n(
              `Hooks: served-call mcp_tool gate (${mn.server}/${mn.tool}) refused (${Qn})${Er.error ? ` \u2014 ${Er.error}` : ""}`,
              { level: "warn" },
            ),
              cu({
                hookId: sr,
                hookName: ge,
                hookEvent: me,
                output: Fr,
                stdout: Er.body,
                stderr: Er.error || Fr,
                exitCode: 2,
                outcome: "error",
              }),
              yield { blockingError: { blockingError: Fr, command: Zr }, outcome: "blocking", hook: mn };
            return;
          }
          if (Er.aborted) {
            cu({
              hookId: sr,
              hookName: ge,
              hookEvent: me,
              output: "Hook cancelled",
              stdout: "",
              stderr: "",
              exitCode: void 0,
              outcome: "cancelled",
            }),
              yield {
                message: In({
                  type: "hook_cancelled",
                  hookName: ge,
                  toolUseID: o,
                  hookEvent: me,
                  timedOut: !d?.aborted,
                  timeoutMs: mn.timeout ? mn.timeout * 1000 : _,
                }),
                outcome: "cancelled",
                hook: mn,
              };
            return;
          }
          if (Er.error || !Er.ok) {
            let Fr = Er.error || "MCP tool returned an error";
            cu({
              hookId: sr,
              hookName: ge,
              hookEvent: me,
              output: Fr,
              stdout: Er.body,
              stderr: Fr,
              exitCode: 1,
              outcome: "error",
            }),
              yield {
                message: In({
                  type: "hook_non_blocking_error",
                  hookName: ge,
                  toolUseID: o,
                  hookEvent: me,
                  stderr: Fr,
                  stdout: Er.body,
                  exitCode: 1,
                }),
                outcome: "non_blocking_error",
                hook: mn,
              };
            return;
          }
          let { json: mr, validationError: xn } = MPe(Er.body);
          if (xn) {
            cu({
              hookId: sr,
              hookName: ge,
              hookEvent: me,
              output: Er.body,
              stdout: Er.body,
              stderr: xn,
              exitCode: 1,
              outcome: "error",
            }),
              yield {
                message: In({
                  type: "hook_non_blocking_error",
                  hookName: ge,
                  toolUseID: o,
                  hookEvent: me,
                  stderr: xn,
                  stdout: Er.body,
                  exitCode: 1,
                }),
                outcome: "non_blocking_error",
                hook: mn,
              };
            return;
          }
          if (
            (cu({
              hookId: sr,
              hookName: ge,
              hookEvent: me,
              output: Er.body,
              stdout: Er.body,
              stderr: "",
              exitCode: 0,
              outcome: "success",
            }),
            mr && ip(mr))
          ) {
            let Fr = mK({
              json: mr,
              command: jn,
              hookName: ge,
              toolUseID: o,
              hookEvent: me,
              expectedHookEvent: me,
              stdout: Er.body,
              stderr: "",
              exitCode: 0,
            });
            Sce(mr.metrics, er, me), yield { ...Fr, outcome: "success", hook: mn };
            return;
          }
          yield {
            message: In({
              type: "hook_success",
              hookName: ge,
              toolUseID: o,
              hookEvent: me,
              content: `${ae.bold(ge)} completed`,
              stdout: Er.body,
              stderr: "",
              command: jn,
              durationMs: Date.now() - Jn,
            }),
            outcome: "success",
            hook: mn,
          };
          return;
        }
        let Ui = Be?.env,
          ki = Rr === void 0 ? mn : { ...mn, command: Rr };
        MV(sr, ge, me);
        let Xn = await fK(
          ki,
          me,
          ge,
          So,
          lee(t),
          e.project,
          Be?.spawnCwd ?? t.cwd,
          Pr,
          sr,
          nr,
          yn,
          er,
          Cn,
          M || Oe,
          Ui?.extra,
          Be === void 0 ? void 0 : { base: Be.env.base, omit: Be.env.omit, shellPrefix: Be.shellPrefix },
          Ce,
          Ie,
        );
        wn?.();
        let Rn = Date.now() - Jn;
        if (Xn.backgrounded) {
          yield { outcome: "success", hook: mn };
          return;
        }
        if (Xn.aborted) {
          cu({
            hookId: sr,
            hookName: ge,
            hookEvent: me,
            output: Xn.output,
            stdout: Xn.stdout,
            stderr: Xn.stderr,
            exitCode: Xn.status,
            outcome: "cancelled",
          }),
            yield {
              message: In({
                type: "hook_cancelled",
                hookName: ge,
                toolUseID: o,
                hookEvent: me,
                command: jn,
                durationMs: Rn,
                timedOut: !d?.aborted,
                timeoutMs: Lr,
              }),
              outcome: "cancelled",
              hook: mn,
            };
          return;
        }
        let { json: lr, plainText: Mr, validationError: Io } = MPe(Xn.stdout);
        if (Io && Xn.status !== 2) {
          let Er = nft(Io, Xn.status, Xn.stderr);
          cu({
            hookId: sr,
            hookName: ge,
            hookEvent: me,
            output: Xn.output,
            stdout: Xn.stdout,
            stderr: Er,
            exitCode: Xn.status,
            outcome: "error",
          }),
            yield {
              message: In({
                type: "hook_non_blocking_error",
                hookName: ge,
                toolUseID: o,
                hookEvent: me,
                stderr: Er,
                stdout: Xn.stdout,
                exitCode: Xn.status,
                command: jn,
                durationMs: Rn,
              }),
              outcome: "non_blocking_error",
              hook: mn,
            };
          return;
        }
        if (lr) {
          if (G_(lr)) {
            if (Xn.status === 2) {
              cu({
                hookId: sr,
                hookName: ge,
                hookEvent: me,
                output: Xn.output,
                stdout: Xn.stdout,
                stderr: Xn.stderr,
                exitCode: Xn.status,
                outcome: "error",
              }),
                yield {
                  blockingError: {
                    blockingError: `[${Oe ? `${mn.type} hook` : Zr}]: ${Xn.stderr || "No stderr output"}`,
                    command: Zr,
                  },
                  outcome: "blocking",
                  hook: mn,
                };
              return;
            }
            if (Xn.status !== 0) {
              cu({
                hookId: sr,
                hookName: ge,
                hookEvent: me,
                output: Xn.output,
                stdout: Xn.stdout,
                stderr: Xn.stderr,
                exitCode: Xn.status,
                outcome: "error",
              }),
                yield {
                  message: In({
                    type: "hook_non_blocking_error",
                    hookName: ge,
                    toolUseID: o,
                    hookEvent: me,
                    stderr: `Announced async, then failed with status code ${Xn.status}: ${Xn.stderr.trim() || "No stderr output"}`,
                    stdout: Xn.stdout,
                    exitCode: Xn.status,
                    command: jn,
                    durationMs: Rn,
                  }),
                  outcome: "non_blocking_error",
                  hook: mn,
                  ...(Xn.exitedNormally === !0 &&
                    !Xn.spawnFailed &&
                    Xn.status <= 128 &&
                    Xn.status !== 126 &&
                    Xn.status !== 127 && { ranByContract: !0 }),
                };
              return;
            }
            cu({
              hookId: sr,
              hookName: ge,
              hookEvent: me,
              output: Xn.output,
              stdout: Xn.stdout,
              stderr: Xn.stderr,
              exitCode: Xn.status,
              outcome: "success",
            }),
              yield { outcome: "success", hook: mn };
            return;
          }
          let Er = mK({
            json: lr,
            command: jn,
            hookName: ge,
            toolUseID: o,
            hookEvent: me,
            expectedHookEvent: me,
            stdout: Xn.stdout,
            stderr: Xn.stderr,
            exitCode: Xn.status,
            durationMs: Rn,
          });
          if ((Sce(lr.metrics, er, me), ip(lr) && !lr.suppressOutput && Mr && Xn.status === 0)) {
            let Qn = `${ae.bold(ge)} completed`;
            cu({
              hookId: sr,
              hookName: ge,
              hookEvent: me,
              output: Xn.output,
              stdout: Xn.stdout,
              stderr: Xn.stderr,
              exitCode: Xn.status,
              outcome: "success",
            }),
              yield {
                ...Er,
                message:
                  Er.message ||
                  In({
                    type: "hook_success",
                    hookName: ge,
                    toolUseID: o,
                    hookEvent: me,
                    content: Qn,
                    stdout: Xn.stdout,
                    stderr: Xn.stderr,
                    exitCode: Xn.status,
                    command: jn,
                    durationMs: Rn,
                  }),
                outcome: "success",
                hook: mn,
              };
            return;
          }
          if (Xn.status === 2 && !Er.blockingError)
            Er.blockingError = {
              blockingError: `[${Oe ? `${mn.type} hook` : Zr}]: ${Xn.stderr || "No stderr output"}`,
              command: Zr,
            };
          cu({
            hookId: sr,
            hookName: ge,
            hookEvent: me,
            output: Xn.output,
            stdout: Xn.stdout,
            stderr: Xn.stderr,
            exitCode: Xn.status,
            outcome: Xn.status === 0 ? "success" : "error",
          }),
            yield { ...Er, outcome: Er.blockingError ? "blocking" : "success", hook: mn };
          return;
        }
        if (Xn.status === 0) {
          cu({
            hookId: sr,
            hookName: ge,
            hookEvent: me,
            output: Xn.output,
            stdout: Xn.stdout,
            stderr: Xn.stderr,
            exitCode: Xn.status,
            outcome: "success",
          });
          let Er = await yce(Xn.stdout.trim(), sr, "stdout", { storageV5: Ce });
          yield {
            message: In({
              type: "hook_success",
              hookName: ge,
              toolUseID: o,
              hookEvent: me,
              content: Er,
              stdout: Xn.stdout,
              stderr: Xn.stderr,
              exitCode: Xn.status,
              command: jn,
              durationMs: Rn,
            }),
            outcome: "success",
            hook: mn,
          };
          return;
        }
        if (Xn.status === 2 && jUt({ hookEvent: me, stdout: Xn.stdout, stderr: Xn.stderr, pluginId: er })) {
          cu({
            hookId: sr,
            hookName: ge,
            hookEvent: me,
            output: Xn.output,
            stdout: Xn.stdout,
            stderr: Xn.stderr,
            exitCode: Xn.status,
            outcome: "error",
          }),
            yield {
              message: In({
                type: "hook_non_blocking_error",
                hookName: ge,
                toolUseID: o,
                hookEvent: me,
                stderr:
                  `Hook script appears to be missing \u2014 "${Zr}" exited 2 with: ${Xn.stderr.trim()}. Treating as non-blocking. ` +
                  (er
                    ? `Run \`/plugin\` to reinstall '${er}' or remove it from settings.`
                    : "If this is a plugin hook, check the plugin install (run /plugin)."),
                stdout: Xn.stdout,
                exitCode: Xn.status,
                command: jn,
                durationMs: Rn,
              }),
              outcome: "non_blocking_error",
              hook: mn,
            };
          return;
        }
        if (Xn.status === 2) {
          cu({
            hookId: sr,
            hookName: ge,
            hookEvent: me,
            output: Xn.output,
            stdout: Xn.stdout,
            stderr: Xn.stderr,
            exitCode: Xn.status,
            outcome: "error",
          }),
            yield {
              blockingError: {
                blockingError: `[${Oe ? `${mn.type} hook` : Zr}]: ${Xn.stderr || "No stderr output"}`,
                command: Zr,
              },
              outcome: "blocking",
              hook: mn,
            };
          return;
        }
        if (
          (cu({
            hookId: sr,
            hookName: ge,
            hookEvent: me,
            output: Xn.output,
            stdout: Xn.stdout,
            stderr: Xn.stderr,
            exitCode: Xn.status,
            outcome: "error",
          }),
          Xn.spawnFailed && !RHt(me, Zr))
        ) {
          yield { outcome: "non_blocking_error", hook: mn };
          return;
        }
        yield {
          message: In({
            type: "hook_non_blocking_error",
            hookName: ge,
            toolUseID: o,
            hookEvent: me,
            stderr: `Failed with non-blocking status code: ${Xn.stderr.trim() || "No stderr output"}`,
            stdout: Xn.stdout,
            exitCode: Xn.status,
            command: jn,
            durationMs: Rn,
          }),
          outcome: "non_blocking_error",
          hook: mn,
          ...(Xn.exitedNormally === !0 &&
            !Xn.spawnFailed &&
            Xn.status <= 128 &&
            Xn.status !== 126 &&
            Xn.status !== 127 && { ranByContract: !0 }),
        };
        return;
      } catch (br) {
        wn?.();
        let So = br instanceof Error ? br.message : String(br);
        if (
          (n(`Hook failed to run (${ge}): ${So}`, { level: "error" }),
          cu({
            hookId: sr,
            hookName: ge,
            hookEvent: me,
            output: `Failed to run: ${So}`,
            stdout: "",
            stderr: `Failed to run: ${So}`,
            exitCode: 1,
            outcome: "error",
          }),
          !RHt(me, Zr))
        ) {
          yield { outcome: "non_blocking_error", hook: mn };
          return;
        }
        yield {
          message: In({
            type: "hook_non_blocking_error",
            hookName: ge,
            toolUseID: o,
            hookEvent: me,
            stderr: `Failed to run: ${So}`,
            stdout: "",
            exitCode: 1,
            command: jn,
            durationMs: Date.now() - Jn,
          }),
          outcome: "non_blocking_error",
          hook: mn,
        };
        return;
      }
    }),
    ht = { success: 0, blocking: 0, non_blocking_error: 0, cancelled: 0 },
    At = {
      additionalContextChars: 0,
      classifierContextChars: 0,
      systemMessageChars: 0,
      initialUserMessageChars: 0,
      hookSuccessStdoutChars: 0,
    },
    dn = new Map(We.map((mn) => [mn.hook, mn.pluginId])),
    Lt = new Map(We.map((mn) => [mn.hook, mn])),
    fn = new Map();
  function Sn(mn, yn, er) {
    let Cn = dn.get(mn);
    if (!Cn || er === 0) return;
    let Pn = fn.get(Cn);
    if (!Pn)
      (Pn = {
        additionalContextChars: 0,
        classifierContextChars: 0,
        systemMessageChars: 0,
        initialUserMessageChars: 0,
        hookSuccessStdoutChars: 0,
      }),
        fn.set(Cn, Pn);
    Pn[yn] += er;
  }
  let bn = 0,
    hn;
  for await (let mn of WZ(nt)) {
    let yn = Oe ? Ear(me === "PreToolUse" ? Car(mn, d) : mn) : mn;
    if ((ht[yn.outcome]++, yn.message?.type === "attachment" && yn.message.attachment.type === "hook_success")) {
      let Cn = yn.message.attachment.stdout?.length ?? 0;
      (At.hookSuccessStdoutChars += Cn), Sn(yn.hook, "hookSuccessStdoutChars", Cn);
    }
    if (yn.updatedToolOutput !== void 0)
      n(`Hook ${me} (${fk(yn.hook)}) replaced tool output`), yield { updatedToolOutput: yn.updatedToolOutput };
    if (yn.updatedMCPToolOutput !== void 0 && yn.updatedToolOutput === void 0)
      n(`Hook ${me} (${fk(yn.hook)}) replaced tool output (updatedMCPToolOutput)`),
        yield { updatedMCPToolOutput: yn.updatedMCPToolOutput };
    if (yn.displayContent !== void 0) yield { displayContent: yn.displayContent };
    if (yn.classifierContext) {
      let Cn = ce(yn.classifierContext, FR);
      n(`Hook ${me} (${fk(yn.hook)}) provided classifierContext (${Cn.length} chars after cap)`),
        (At.classifierContextChars += Cn.length),
        Sn(yn.hook, "classifierContextChars", Cn.length),
        yield {
          pairedRewrite:
            yn.updatedToolOutput !== void 0
              ? "direct"
              : yn.updatedMCPToolOutput !== void 0
                ? "legacy_mcp"
                : yn.legacyMcpRewriteSuppressed
                  ? "suppressed"
                  : "none",
          classifierContexts: [
            {
              value: Cn,
              hostPrincipal:
                yn.hook.type === "callback" &&
                dn.get(yn.hook) === void 0 &&
                (() => {
                  let Pn = Lt.get(yn.hook);
                  return Pn !== void 0 && Pn.pluginRoot === void 0 && Pn.skillRoot === void 0;
                })(),
            },
          ],
        };
    }
    if (yn.preventContinuation)
      n(`Hook ${me} (${fk(yn.hook)}) requested preventContinuation`),
        yield { preventContinuation: !0, stopReason: yn.stopReason };
    let er = yn.hook?.type === "prompt" ? { hook: yn.hook, stopReason: yn.stopReason, impossible: yn.impossible } : {};
    if (yn.blockingError)
      yield { blockingError: yn.blockingError, suppressOriginalPrompt: yn.suppressOriginalPrompt, ...er },
        (hn = "deny");
    if (yn.message) yield { message: yn.message, ...er };
    if ((me === "PreToolUse" || me === "PermissionRequest") && yn.outcome === "non_blocking_error" && o)
      ck.noteHookFailure(
        o,
        THt(
          me,
          yn.message?.type === "attachment" && yn.message.attachment.type === "hook_non_blocking_error"
            ? yn.message.attachment.stderr
            : "",
        ),
      );
    if (yn.timedOut && yn.hook.type === "prompt" && me === "Stop") yield { hook: yn.hook, timedOut: !0 };
    if ((bn++, yn.systemMessage)) {
      (At.systemMessageChars += yn.systemMessage.length), Sn(yn.hook, "systemMessageChars", yn.systemMessage.length);
      let Cn = await yce(yn.systemMessage, `${o}-${bn}`, "systemMessage", { storageV5: Ce });
      yield {
        message: In({
          type: "hook_system_message",
          content: Cn,
          hookName: ge,
          toolUseID: o,
          hookEvent: me,
          ...(yn.heldForServedCall && { heldForServedCall: !0 }),
        }),
      };
    }
    if (yn.terminalSequence) ope(yn.terminalSequence);
    if (yn.additionalContext)
      (At.additionalContextChars += yn.additionalContext.length),
        Sn(yn.hook, "additionalContextChars", yn.additionalContext.length),
        n(`Hook ${me} (${fk(yn.hook)}) provided additionalContext (${yn.additionalContext.length} chars)`),
        yield {
          additionalContexts: [await yce(yn.additionalContext, `${o}-${bn}`, "additionalContext", { storageV5: Ce })],
        };
    if (yn.initialUserMessage)
      (At.initialUserMessageChars += yn.initialUserMessage.length),
        Sn(yn.hook, "initialUserMessageChars", yn.initialUserMessage.length),
        n(`Hook ${me} (${fk(yn.hook)}) provided initialUserMessage (${yn.initialUserMessage.length} chars)`),
        yield {
          initialUserMessage: await yce(yn.initialUserMessage, `${o}-${bn}`, "initialUserMessage", { storageV5: Ce }),
        };
    if (yn.watchPaths && yn.watchPaths.length > 0)
      n(`Hook ${me} (${fk(yn.hook)}) provided ${yn.watchPaths.length} watchPaths`), yield { watchPaths: yn.watchPaths };
    if (yn.reloadSkills) n(`Hook ${me} (${fk(yn.hook)}) requested reloadSkills`), yield { reloadSkills: !0 };
    if (yn.sessionTitle)
      n(`Hook ${me} (${fk(yn.hook)}) provided sessionTitle (${[...yn.sessionTitle].length} chars)`),
        yield { sessionTitle: yn.sessionTitle };
    if ((fun(yn, `Hook ${me} (${fk(yn.hook)})`), yn.permissionBehavior))
      switch (
        (n(
          `Hook ${me} (${fk(yn.hook)}) returned permissionDecision: ${yn.permissionBehavior}${yn.hookPermissionDecisionReason ? ` (reason: ${yn.hookPermissionDecisionReason})` : ""}`,
        ),
        yn.permissionBehavior)
      ) {
        case "deny":
          hn = "deny";
          break;
        case "defer":
          if (hn !== "deny") hn = "defer";
          break;
        case "ask":
          if (hn !== "deny" && hn !== "defer") hn = "ask";
          break;
        case "allow":
          if (!hn) hn = "allow";
          break;
        case "passthrough":
          break;
      }
    if (yn.permissionBehavior && hn === yn.permissionBehavior) {
      let Cn =
        yn.updatedInput && (yn.permissionBehavior === "allow" || yn.permissionBehavior === "ask")
          ? yn.updatedInput
          : void 0;
      if (Cn) n(`Hook ${me} (${fk(yn.hook)}) modified tool input keys: [${Object.keys(Cn).join(", ")}]`);
      yield {
        permissionBehavior: hn,
        hookPermissionDecisionReason: yn.hookPermissionDecisionReason,
        ...(yn.heldForServedCall && { heldForServedCall: !0 }),
        hookSource: We.find((Pn) => Pn.hook === yn.hook)?.hookSource,
        updatedInput: Cn,
      };
    }
    if (yn.updatedInput && yn.permissionBehavior === void 0)
      n(`Hook ${me} (${fk(yn.hook)}) modified tool input keys: [${Object.keys(yn.updatedInput).join(", ")}]`),
        yield { updatedInput: yn.updatedInput };
    if (yn.permissionRequestResult) yield { permissionRequestResult: yn.permissionRequestResult };
    if (yn.retry) yield { retry: yn.retry };
    if (yn.elicitationResponse) yield { elicitationResponse: yn.elicitationResponse };
    if (yn.elicitationResultResponse) yield { elicitationResultResponse: yn.elicitationResultResponse };
    if (Ee && yn.hook.type !== "callback") {
      let Cn = u ?? "",
        Pn = Ee.getEntry(e.id, me, Cn, yn.hook);
      if (Pn?.onHookSuccess && yn.outcome === "success")
        try {
          Pn.onHookSuccess(yn.hook, yn);
        } catch (nr) {
          h(Error("Session hook success callback failed", { cause: nr }));
        }
    }
  }
  let Ke = Date.now() - xt;
  for (let mn of new Set(dn.values())) if (mn) Jw(mn);
  if (!F) {
    fve()?.observe("hook_duration_ms", Ke);
    for (let [mn, yn] of fn) {
      let { name: er, marketplace: Cn } = Vt(mn);
      s("tengu_hook_plugin_injected", { hookName: Ve, ...z1(er, Cn), ...yn });
    }
    if (
      (s("tengu_repl_hook_finished", {
        hookName: Ve,
        numCommands: We.length,
        numSuccess: ht.success,
        numBlocking: ht.blocking,
        numNonBlockingError: ht.non_blocking_error,
        numCancelled: ht.cancelled,
        totalDurationMs: Ke,
        ...At,
      }),
      Po("hook_execution_complete", {
        hook_event: me,
        hook_name: en,
        num_hooks: String(We.length),
        num_success: String(ht.success),
        num_blocking: String(ht.blocking),
        num_non_blocking_error: String(ht.non_blocking_error),
        num_cancelled: String(ht.cancelled),
        total_duration_ms: String(Ke),
        managed_only: String(gwe()),
        hook_source: gwe() ? "policySettings" : "merged",
        safe_mode: String(Dr()),
        ...(ct && { hook_definitions: ut }),
      }),
      nn)
    )
      cKn(nn, {
        numSuccess: ht.success,
        numBlocking: ht.blocking,
        numNonBlockingError: ht.non_blocking_error,
        numCancelled: ht.cancelled,
      });
    if (ht.non_blocking_error > 0) p(Hfe(me), "hook_non_blocking_error");
    else if (ht.cancelled > 0) g(Hfe(me), "hook_cancelled");
    else y(Hfe(me));
  }
  if (Xe) throw Xe;
}

async function mun(e, t) {
  if (await $a(e)) return e;
  let r = oar();
  for (let u of [t.originalCwd, t.projectRoot, Kae()])
    if (u !== e && (await $a(u))) {
      r = u;
      break;
    }
  let o = Ihr.of(G().host);
  if (!o.has(e))
    o.add(e), n(`Hooks: working directory ${e} no longer exists; running hooks from ${r} instead`, { level: "warn" });
  return r;
}

function Gae(e, t) {
  if (!e || !ip(e) || !e.terminalSequence) return;
  let r = npe(e.terminalSequence);
  if (r !== null) ope(r);
  else
    n(
      `Hook ${t} returned a terminalSequence that was rejected by the allowlist (only OSC 0/1/2/9/99/777 and BEL are permitted, and OSC 9 bodies may not begin with a digit unless in the 9;4 progress form)`,
    );
}

function gun(e) {
  return e.some((t) => t.blocked);
}

async function CE({
  session: e,
  sessionHooks: t,
  getAppState: r,
  hookInput: o,
  matchQuery: u,
  signal: d,
  timeoutMs: _ = Mi,
  storageV5: C,
  credentials: A,
}) {
  let x = o.hook_event_name,
    M = u ? `${x}:${u}` : x;
  if (PHt(x, d)) await fm();
  if (Fv()) n(`Policy disableAllHooks: skipping configured hooks for ${M} (SDK callback hooks still run)`);
  if (J7()) return n(`Skipping ${M} hook execution - workspace trust not accepted`), [];
  let F = r?.(),
    U = await vzn(t, e.id, x, o, void 0, { getToolAliases: () => F?.toolPermissionContext.toolAliases });
  if (U.length === 0) return [];
  if (d?.aborted) return [];
  let B = U.filter((ge) => !BHt(ge));
  if (B.length > 0) {
    let ge = Czn(B),
      Ce = HHt(B),
      Ie = Q(B, (Ee) => Ee.matcherIsMatchAll);
    s("tengu_run_hook", {
      hookName: jHt(x, u),
      numCommands: B.length,
      numMatchAllMatchers: Ie,
      numSpecificMatchers: B.length - Ie,
      hookTypeCounts: b(Ce),
      ...(ge && { pluginHookCounts: b(ge) }),
    });
  }
  let W;
  try {
    W = b(o);
  } catch (ge) {
    return h(ge), p(Hfe(x), "hook_input_stringify_failed"), [];
  }
  let z,
    pe = !1,
    fe = U.map(async ({ hook: ge, pluginRoot: Ce, pluginId: Ie, skillRoot: Ee }, Pe) => {
      if (ge.type === "callback") {
        let We = ge.timeout ? ge.timeout * 1000 : _,
          { signal: Ve, cleanup: Pt } = Ja(d, { timeoutMs: We });
        try {
          let ct = ov(),
            ut = await ge.callback(o, ct, Ve, Pe);
          if ((Pt?.(), G_(ut)))
            return (
              n(`${M} [callback] returned async response, returning empty output`),
              { command: "callback", succeeded: !0, output: "", blocked: !1 }
            );
          let en =
              x === "WorktreeCreate" && ip(ut) && ut.hookSpecificOutput?.hookEventName === "WorktreeCreate"
                ? ut.hookSpecificOutput.worktreePath
                : ut.systemMessage || "",
            nn = ip(ut) && ut.decision === "block";
          return (
            Gae(ut, M),
            n(`${M} [callback] completed successfully`),
            { command: "callback", succeeded: !0, output: en, blocked: nn }
          );
        } catch (ct) {
          if ((Pt?.(), It(ct))) {
            let en = ct instanceof la || !!d?.aborted;
            if (en)
              n(ct instanceof la ? `${M} [callback] cancelled (control stream closed)` : `${M} [callback] cancelled`),
                (pe = !0);
            else n(`${M} [callback] timed out`, { level: "error" }), (z ??= "hook_callback_timeout");
            return { command: "callback", succeeded: !1, output: "", blocked: !1, ...(en && { cancelled: !0 }) };
          }
          let ut = ct instanceof Error ? ct.message : String(ct);
          return (
            n(`${M} [callback] failed to run: ${ut}`, { level: "error" }),
            (z ??= "hook_callback_failed"),
            { command: "callback", succeeded: !1, output: ut, blocked: !1 }
          );
        }
      }
      if (ge.type === "prompt")
        return (
          (z ??= "hook_type_unsupported"),
          {
            command: ge.prompt,
            succeeded: !1,
            output: "Prompt stop hooks are not yet supported outside REPL",
            blocked: !1,
          }
        );
      if (ge.type === "mcp_tool") {
        let We = `${ge.server}/${ge.tool}`;
        try {
          let Ve = await HNe(ge, x, o, r?.().mcp.clients, d, _);
          if (Ve.aborted)
            return (
              (z ??= "hook_cancelled"),
              {
                command: We,
                succeeded: !1,
                output: "Hook cancelled",
                blocked: !1,
                ...(d?.aborted && { cancelled: !0 }),
              }
            );
          if (Ve.error || !Ve.ok)
            return (
              (z ??= "hook_mcp_tool_failed"),
              { command: We, succeeded: !1, output: Ve.error || "MCP tool returned an error", blocked: !1 }
            );
          let { json: Pt, validationError: ct } = MPe(Ve.body);
          if (ct) throw Error(ct);
          let ut = Pt && ip(Pt) ? Pt : void 0,
            en = ut?.decision === "block";
          if (ut) Sce(ut.metrics, Ie, x);
          return (
            Gae(Pt, M),
            {
              command: We,
              succeeded: !0,
              output: en ? ut?.reason || "" : Ve.body,
              blocked: en,
              watchPaths:
                ut?.hookSpecificOutput && "watchPaths" in ut.hookSpecificOutput
                  ? ut.hookSpecificOutput.watchPaths
                  : void 0,
              systemMessage: ut?.systemMessage,
            }
          );
        } catch (Ve) {
          let Pt = Ve instanceof Error ? Ve.message : String(Ve);
          return (
            n(`${M} [${We}] failed to run: ${Pt}`, { level: "error" }),
            (z ??= "hook_mcp_exec_failed"),
            { command: We, succeeded: !1, output: Pt, blocked: !1 }
          );
        }
      }
      if (ge.type === "agent")
        return (
          (z ??= "hook_type_unsupported"),
          {
            command: ge.prompt,
            succeeded: !1,
            output: "Agent stop hooks are not yet supported outside REPL",
            blocked: !1,
          }
        );
      if (ge.type === "function")
        return (
          h(
            Error(
              `Function hook reached executeHooksOutsideREPL for ${x}. Function hooks should only be used in REPL context (Stop hooks).`,
            ),
          ),
          (z ??= "hook_type_unsupported"),
          {
            command: "function",
            succeeded: !1,
            output: "Internal error: function hook executed outside REPL context",
            blocked: !1,
          }
        );
      if (ge.type === "http")
        try {
          let We = await Zpt(ge, x, W, d, _);
          if (We.aborted)
            return (
              n(`${M} [${ge.url}] cancelled`),
              (z ??= "hook_cancelled"),
              {
                command: ge.url,
                succeeded: !1,
                output: "Hook cancelled",
                blocked: !1,
                ...(d?.aborted && { cancelled: !0 }),
              }
            );
          if (We.error || !We.ok) {
            let en = We.error || `HTTP ${We.statusCode} from ${ge.url}`;
            return (
              n(`${M} [${ge.url}] failed: ${en}`, { level: "error" }),
              (z ??= "hook_http_request_failed"),
              { command: ge.url, succeeded: !1, output: en, blocked: !1 }
            );
          }
          let { json: Ve, validationError: Pt } = rft(We.body);
          if (Pt) throw Error(Pt);
          if (Ve && !G_(Ve)) n(`Parsed JSON output from HTTP hook: ${b(Ve)}`, { level: "verbose" });
          if (Ve && ip(Ve)) Sce(Ve.metrics, Ie, x);
          Gae(Ve, M);
          let ct = Ve && ip(Ve) && Ve.decision === "block",
            ut = ct
              ? (Ve && ip(Ve) && Ve.reason) || ""
              : x === "WorktreeCreate"
                ? Ve && ip(Ve) && Ve.hookSpecificOutput?.hookEventName === "WorktreeCreate"
                  ? Ve.hookSpecificOutput.worktreePath
                  : ""
                : We.body;
          return {
            command: ge.url,
            succeeded: !0,
            output: ut,
            blocked: !!ct,
            systemMessage: Ve && ip(Ve) ? Ve.systemMessage : void 0,
          };
        } catch (We) {
          let Ve = We instanceof Error ? We.message : String(We);
          return (
            n(`${M} [${ge.url}] failed to run: ${Ve}`, { level: "error" }),
            (z ??= "hook_http_exec_failed"),
            { command: ge.url, succeeded: !1, output: Ve, blocked: !1 }
          );
        }
      let Oe = ge.timeout ? ge.timeout * 1000 : _,
        Fe = _9(ge),
        { signal: Be, cleanup: ze } = Ja(d, { timeoutMs: Oe });
      try {
        let We = await fK(
          ge,
          x,
          M,
          W,
          lee(o),
          e.project,
          o.cwd,
          Be,
          ov(),
          Pe,
          Ce,
          Ie,
          Ee,
          void 0,
          void 0,
          void 0,
          C,
          A,
        );
        if ((ze?.(), We.aborted))
          return (
            n(`${M} [${Fe}] cancelled`),
            (z ??= "hook_cancelled"),
            { command: Fe, succeeded: !1, output: "Hook cancelled", blocked: !1, ...(d?.aborted && { cancelled: !0 }) }
          );
        n(`${M} [${Fe}] completed with status ${We.status}`);
        let { json: Ve, validationError: Pt } = MPe(We.stdout);
        if (Pt && We.status !== 2) throw Error(nft(Pt, We.status, We.stderr));
        if (Ve && !G_(Ve)) n(`Parsed JSON output from hook: ${b(Ve)}`, { level: "verbose" });
        if (Ve && ip(Ve)) Sce(Ve.metrics, Ie, x);
        Gae(Ve, M);
        let ct = Ve && ip(Ve) && Ve.decision === "block",
          ut = We.status === 2 || !!ct,
          en = ct
            ? (Ve && ip(Ve) && Ve.reason) || We.stderr || ""
            : We.status === 0
              ? We.stdout || ""
              : We.stderr || "",
          nn =
            Ve && ip(Ve) && Ve.hookSpecificOutput && "watchPaths" in Ve.hookSpecificOutput
              ? Ve.hookSpecificOutput.watchPaths
              : void 0,
          xt = Ve && ip(Ve) ? Ve.systemMessage : void 0;
        if (We.status !== 0 && !ut) z ??= "hook_nonzero_exit";
        return { command: Fe, succeeded: We.status === 0, output: en, blocked: ut, watchPaths: nn, systemMessage: xt };
      } catch (We) {
        ze?.();
        let Ve = We instanceof Error ? We.message : String(We);
        return (
          n(`${M} [${Fe}] failed to run: ${Ve}`, { level: "error" }),
          (z ??= "hook_exec_failed"),
          { command: Fe, succeeded: !1, output: Ve, blocked: !1 }
        );
      }
    }),
    me = await Promise.all(fe);
  if (PHt(x, d)) await fm();
  if (z) p(Hfe(x), z);
  else if (pe) g(Hfe(x), "hook_cancelled");
  else y(Hfe(x));
  for (let ge of new Set(U.map((Ce) => Ce.pluginId))) if (ge) Jw(ge);
  return me;
}

function zUt() {
  let e = SX()?.InstructionsLoaded;
  if (e && e.length > 0) return !0;
  if (!f_()) {
    let r = die()?.InstructionsLoaded;
    if (r && r.length > 0) return !0;
  }
  let t = VO()?.InstructionsLoaded;
  if (t && t.length > 0) return !0;
  return !1;
}

function hun(e, t) {
  if (e.blocked && !e.succeeded)
    return { blockingError: { blockingError: e.output || "Elicitation blocked by hook", command: e.command } };
  if (!e.output.trim()) return {};
  let r = e.output.trim();
  if (!r.startsWith("{")) return {};
  try {
    let o = l9().parse(V(r));
    if (G_(o)) return {};
    if (!ip(o)) return {};
    if (o.decision === "block" || e.blocked)
      return { blockingError: { blockingError: o.reason || "Elicitation blocked by hook", command: e.command } };
    let u = o.hookSpecificOutput;
    if (!u || u.hookEventName !== t) return {};
    if (!u.action) return {};
    let _ = { response: { action: u.action, content: u.content } };
    if (u.action === "decline")
      _.blockingError = {
        blockingError:
          o.reason || (t === "Elicitation" ? "Elicitation denied by hook" : "Elicitation result blocked by hook"),
        command: e.command,
      };
    return _;
  } catch {
    return {};
  }
}

async function VUt(e, t, r, o = !1) {
  if (Fv()) return;
  let u = Phr.of(e.host);
  if (ho("statusLine")) return;
  if (J7()) {
    n("Skipping StatusLine command execution - workspace trust not accepted");
    return;
  }
  let d = cye(En()?.statusLine);
  if (!d || d.type !== "command") return;
  try {
    let _ = b(t),
      C = Date.now(),
      A = await fK(d, "StatusLine", "statusLine", _, lee(t), e.project, t.cwd, r, ov());
    if (A.aborted) return;
    let x = A.stderr.trim();
    if (x) n(`StatusLine [${d.command}] stderr: ${x}`);
    if (A.status === 0) {
      if (!u.okLogged) (u.okLogged = !0), y("status_line_command");
      let M = A.stdout
        .trim()
        .split(`
`)
        .flatMap((F) => F.trim() || [])
        .join(`
`);
      if (M) {
        if (o) n(`StatusLine [${d.command}] completed with status ${A.status}`);
        return M;
      }
    } else if (o) n(`StatusLine [${d.command}] completed with status ${A.status}`, { level: "warn" });
    if (A.status !== 0 && !u.badLogged)
      (u.badLogged = !0),
        p("status_line_command", A.spawnFailed ? "spawn_failed" : Date.now() - C >= Mi ? "timeout" : "nonzero_exit");
    return;
  } catch (_) {
    if ((n(`Status hook failed: ${_}`, { level: "error" }), !u.badLogged))
      (u.badLogged = !0), p("status_line_command", "exec_error");
    return;
  }
}

async function _un(e, t, r, o = 5000) {
  if (Fv()) return [];
  if (ho("fileSuggestion")) return [];
  if (J7()) return n("Skipping FileSuggestion command execution - workspace trust not accepted"), [];
  let u = KMt(En()?.fileSuggestion);
  if (!u || u.type !== "command") return [];
  let d = r || AbortSignal.timeout(o);
  try {
    let _ = b(t),
      C = { type: "command", command: u.command },
      A = await fK(C, "FileSuggestion", "FileSuggestion", _, lee(t), e.project, t.cwd, d, ov());
    if (A.aborted || A.status !== 0) return [];
    return A.stdout
      .split(`
`)
      .map((x) => x.trim())
      .filter(Boolean);
  } catch (_) {
    return n(`File suggestion helper failed: ${_}`, { level: "error" }), [];
  }
}

async function xar({ hook: e, messages: t, hookName: r, toolUseID: o, hookEvent: u, timeoutMs: d, signal: _ }) {
  let C = e.timeout ?? d,
    { signal: A, cleanup: x } = Ja(_, { timeoutMs: C });
  try {
    if (A.aborted) return x(), { outcome: "cancelled", hook: e };
    let M = await new Promise((F, U) => {
      let B = () => U(Error("Function hook cancelled"));
      A.addEventListener("abort", B),
        Promise.resolve(e.callback(t, A))
          .then((W) => {
            A.removeEventListener("abort", B), F(W);
          })
          .catch((W) => {
            A.removeEventListener("abort", B), U(W);
          });
    });
    if ((x(), M)) return { outcome: "success", hook: e };
    return { blockingError: { blockingError: e.errorMessage, command: "function" }, outcome: "blocking", hook: e };
  } catch (M) {
    if ((x(), M instanceof Error && (M.message === "Function hook cancelled" || M.name === "AbortError")))
      return { outcome: "cancelled", hook: e };
    return (
      h(M),
      {
        message: In({
          type: "hook_error_during_execution",
          hookName: r,
          toolUseID: o,
          hookEvent: u,
          content: M instanceof Error ? M.message : "Function hook execution error",
        }),
        outcome: "non_blocking_error",
        hook: e,
      }
    );
  }
}

async function Iar({ toolUseID: e, hook: t, hookEvent: r, hookInput: o, signal: u, hookIndex: d, toolUseContext: _ }) {
  let C = _
      ? {
          getAppState: _.getAppState,
          applyAttributionOp: _.applyAttributionOp,
          session: _.session,
          storageV5: _.storageV5,
        }
      : void 0,
    A = await t.callback(o, e, u, d, C);
  if (G_(A)) return { outcome: "success", hook: t };
  return {
    ...mK({
      json: A,
      command: "callback",
      hookName: `${r}:Callback`,
      toolUseID: e,
      hookEvent: r,
      expectedHookEvent: r,
      stdout: void 0,
      stderr: void 0,
      exitCode: void 0,
    }),
    outcome: "success",
    hook: t,
  };
}

function Dhr(e, t) {
  if (!t) return e;
  if (Tl()) return `${e}:${t}`;
  switch (e) {
    case "PreToolUse":
    case "PostToolUse":
    case "PostToolUseFailure":
    case "PermissionRequest":
    case "PermissionDenied":
      return `${e}:${Un(t)}`;
    case "Elicitation":
    case "ElicitationResult":
      return `${e}:mcp_server`;
    case "SubagentStart":
      return e;
    default:
      return `${e}:${t}`;
  }
}

function Oar(e) {
  return e.map(({ hook: t }) => {
    if (t.type === "command") return { type: "command", command: _9(t) };
    else if (t.type === "prompt") return { type: "prompt", prompt: t.prompt };
    else if (t.type === "http") return { type: "http", command: t.url };
    else if (t.type === "mcp_tool") return { type: "mcp_tool", command: `${t.server}/${t.tool}` };
    else if (t.type === "function") return { type: "function", name: "function" };
    else if (t.type === "callback") return { type: "callback", name: "callback" };
    return { type: "unknown" };
  });
}

function Dar(e) {
  for (let t of ["CLAUDE_PROJECT_DIR", "CLAUDE_PLUGIN_ROOT", "CLAUDE_PLUGIN_DATA"])
    e = e.replaceAll("${" + t + "}", () => "${env:" + t + "}");
  return e;
}

function U0(e) {
  return Har.of(e);
}

function FPe(e) {
  return e === VTn || e === YHt || e === e$e;
}

function cGe(e = at()) {
  let t = Lp(e, zp()),
    r = Number.isFinite(t) && t > 0 ? t : q8e;
  return Math.max(Gar, Math.round(r * zar * Pf(e)));
}

function $0(e) {
  return rf(e, Se());
}

function Kar(e) {
  let { frontmatter: t, content: r } = ni(e);
  if (!t.paths) return { content: r };
  let o = qWt(t.paths)
    .map((u) => (u.endsWith("/**") ? u.slice(0, -3) : u))
    .filter((u) => u.length > 0);
  if (o.length === 0 || o.every((u) => u === "**")) return { content: r };
  return { content: r, paths: o };
}

function XHt(e, t, r, o) {
  let u = Nar(t).toLowerCase();
  if (u && !qar.has(u)) return n(`Skipping non-text file in @include: ${t}`), { info: null, includePaths: [] };
  let { content: d, paths: _ } = Kar(e),
    C = d.includes("<!--"),
    A = o !== void 0 && d.includes("@"),
    x = C || A ? new SM({ gfm: !1 }).lex(d) : void 0,
    M = C && x ? gde(x).content : d,
    F = x && o !== void 0 ? rlr(x, o) : [],
    U = M;
  if (r === "AutoMem") U = tKe(M).content;
  let B = U !== e;
  return {
    info: { path: t, type: r, content: U, globs: _, contentDiffersFromDisk: B, rawContent: B ? e : void 0 },
    includePaths: F,
  };
}

function Hzn(e, t, r) {
  if (!e.includes("@")) return [];
  return XHt(e, t, r, t).includePaths;
}

function Var(e) {
  let { content: t } = tKe(e);
  return { path: PY(), type: "AutoMem", content: t, contentDiffersFromDisk: !0, rawContent: e };
}

async function Yar() {
  if (aN()) return null;
  if (a.CLAUDE_CODE_REMOTE) return null;
  let e = Di(),
    t = yO() ? pUe : yde,
    r = await mUe(e, t),
    o =
      !yO() &&
      (await le()
        .stat(PY())
        .then(
          (u) => u.isFile(),
          () => !1,
        ));
  if ((fUe(r, "auto", o), r.entries.length === 0)) return null;
  return {
    path: e$e,
    type: "AutoMem",
    content: `Memory files under \`${e}\` (paths below are relative to it):

${r.content}`,
    contentDiffersFromDisk: !0,
  };
}

function QHt() {
  return process.env.CLAUDE_COWORK_MEMORY_INDEX_CONTENT;
}

function Qar() {
  return !gH() && !sn() && !a.CLAUDE_CODE_REMOTE && ta() && QHt() === void 0 && nde();
}

async function cAt(e) {
  if (!Qar()) return [];
  let t = await JHt(U0(e));
  return t.entries.filter((r) => !t.truncatedPaths.has(r.path)).map((r) => r.path);
}

function Jar(e, t, r) {
  if (t.scanFailed) {
    p("memory_pinned_inject", "pin_scan_failed");
    return;
  }
  if (!e.hasLoggedPinnedInjection)
    (e.hasLoggedPinnedInjection = !0),
      s("tengu_memdir_pinned_injected", {
        pinned_file_count: t.pinnedCount,
        pinned_injected_count: r.length,
        pinned_injected_chars: r.reduce((o, u) => o + u.content.length, 0),
        pinned_truncated_count: Q(r, (o) => t.truncatedPaths.has(o.path)),
        pinned_malformed_count: t.malformedCount,
        index_hidden: aN(),
      });
  if (t.readFailed) g("memory_pinned_inject", "read_failed");
  else if (t.malformedCount > 0) g("memory_pinned_inject", "malformed_pin_value");
  else if (t.pinnedCount > RU) g("memory_pinned_inject", "cap_dropped");
  else y("memory_pinned_inject");
}

function Zar(e, t) {
  let r = e.pinnedHeaderScans.get(t);
  if (r) return r;
  let o = M_t(),
    u = Ain(t, gr().signal, { regularFilesOnly: !0 })
      .catch((d) => {
        if (X(d)) return [];
        throw (e.pinnedHeaderScans.delete(t), d);
      })
      .finally(() => {
        if (o) e.pinnedHeaderScans.delete(t);
      });
  return e.pinnedHeaderScans.set(t, u), u;
}

async function JHt(e) {
  try {
    let t = await Zar(e, Di()),
      r = r0e(t.filter((_) => MR(_.filePath))),
      o = await Promise.all(r.candidates.map((_) => n$e(_.filePath, "AutoMemPinned")));
    if (o.some((_) => _.info === null)) e.pinnedHeaderScans.clear();
    let u = o
        .flatMap(({ info: _ }) => (_ === null || !_.content.trim() ? [] : [_]))
        .slice(0, RU)
        .map((_) => {
          let C = tKe(_.content, "memory");
          return C.wasLineTruncated || C.wasByteTruncated
            ? {
                entry: { ..._, content: C.content, contentDiffersFromDisk: !0, rawContent: _.rawContent ?? _.content },
                truncated: !0,
              }
            : { entry: _, truncated: !1 };
        }),
      d = o.reduce(
        (_, C) => {
          let A = C.info !== null && C.info.content.trim() !== "";
          return { filled: _.filled + (A ? 1 : 0), failed: _.failed || (C.info === null && _.filled < RU) };
        },
        { filled: 0, failed: !1 },
      ).failed;
    return {
      entries: u.map((_) => _.entry),
      pinnedCount: r.pinnedCount,
      malformedCount: r.malformedCount,
      truncatedPaths: new Set(u.filter((_) => _.truncated).map((_) => _.entry.path)),
      readFailed: d,
      scanFailed: !1,
    };
  } catch (t) {
    return h(t), { ...Xar, scanFailed: !0 };
  }
}

function t$e() {
  return elr.of(G().host);
}

function tlr(e, t) {
  ejt(E(e), t);
}

function ejt(e, t) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return;
  if (e === "EACCES")
    s("tengu_claude_md_permission_error", { is_access_error: 1, has_home_dir: t.includes(be()) ? 1 : 0 });
  let r = t$e();
  if (e === "EACCES") {
    if (!r.memoryReadEacces) (r.memoryReadEacces = !0), g("context_claude_md_load", "read_eacces");
  } else if (!r.memoryReadFailed) (r.memoryReadFailed = !0), g("context_claude_md_load", "read_failed");
}

async function nlr({ backend: e, key: t }) {
  let r = await e.read([{ key: t, offset: 0, length: Jae + 1 }]);
  if (!r.ok) {
    let d = r.error.code === "InvalidArgument" ? void 0 : r.error.telemetryCode;
    if (d === "ENXIO" || d === "EFBIG") return { kind: "skipped", isDirectory: !1 };
    if (d === "EISDIR") return { kind: "skipped", isDirectory: !0 };
    return { kind: "error", code: d };
  }
  let o = r.value.items[0];
  if (!o.found) return { kind: "absent" };
  if (o.totalBytes > Jae) return { kind: "skipped", isDirectory: !1 };
  let u = o.value;
  return { kind: "content", content: Buffer.from(u.buffer, u.byteOffset, u.byteLength).toString("utf8") };
}

async function n$e(e, t, r, o) {
  try {
    let u,
      d = !1;
    if (o) {
      let _ = await nlr(o);
      switch (_.kind) {
        case "absent":
          return { info: null, includePaths: [] };
        case "error":
          return ejt(_.code, e), { info: null, includePaths: [] };
        case "skipped":
          (d = _.isDirectory), (u = null);
          break;
        case "content":
          u = _.content;
          break;
      }
    } else {
      let _ = le();
      u = await eP(_, e, Jae, (C) => {
        d = C.isDirectory();
      });
    }
    if (u === null) {
      n(`[CLAUDE.md] skipping ${e}: not a regular file or exceeds ${Jae} byte limit`);
      let _ = t$e();
      if (!_.skip && !d) (_.skip = !0), g("context_claude_md_load", "file_skipped_special_or_oversize");
      return { info: null, includePaths: [] };
    }
    return XHt(u, e, t, r);
  } catch (u) {
    return tlr(u, e), { info: null, includePaths: [] };
  }
}

function rlr(e, t) {
  let r = new Set();
  function o(d) {
    let _ = /(?:^|\s)@((?:[^\s\\]|\\ )+)/g,
      C;
    while ((C = _.exec(d)) !== null) {
      let A = C[1];
      if (!A) continue;
      let x = A.indexOf("#");
      if (x !== -1) A = A.substring(0, x);
      if (!A) continue;
      if (((A = A.replaceAll("\\ ", " ")), A)) {
        if (
          !(Bn(A) && !Ms(A)) &&
          !_r(A) &&
          !vu(A) &&
          (A.startsWith("./") ||
            A.startsWith("~/") ||
            (A.startsWith("/") && A !== "/") ||
            (!A.startsWith("@") && !A.match(/^[#%^&*()]+/) && A.match(/^[a-zA-Z0-9._-]/)))
        ) {
          let F = gt(A, N0(t));
          r.add(F);
        }
      }
    }
  }
  function u(d) {
    for (let _ of d) {
      if (_.type === "code" || _.type === "codespan") continue;
      if (_.type === "html") {
        let C = _.raw || "",
          A = C.trimStart();
        if (A.startsWith("<!--") && A.includes("-->")) {
          let x = /<!--[\s\S]*?-->/g,
            M = C.replace(x, "");
          if (M.trim().length > 0) o(M);
        }
        continue;
      }
      if (_.type === "text") o(_.text || "");
      if (_.tokens) u(_.tokens);
      if (_.items) u(_.items);
    }
  }
  return u(e), [...r];
}

function njt(e, t) {
  if (t !== "User" && t !== "Project" && t !== "Local") return !1;
  let r = Je().claudeMdExcludes;
  if (!r || r.length === 0) return !1;
  let o = { dot: !0 },
    u = e.replaceAll("\\", "/"),
    d = slr(r).filter((_) => _.length > 0);
  if (d.length === 0) return !1;
  return VHt.default.isMatch(u, d, o);
}

function slr(e) {
  let t = le(),
    r = e.map((o) => o.replaceAll("\\", "/"));
  for (let o of r) {
    if (!o.startsWith("/")) continue;
    let u = o.search(/[*?{[]/),
      d = u === -1 ? o : o.slice(0, u),
      _ = N0(d);
    try {
      let { resolvedPath: C } = Qo(t, _);
      if ((Bn(C) && !Ms(C)) || _r(C) || vu(C)) continue;
      let A = C.replaceAll("\\", "/");
      if (A !== _) {
        let x = A + o.slice(_.length);
        r.push(x);
      }
    } catch {}
  }
  return r;
}

async function Dg(e, t, r, o, u = 0, d, _) {
  let C = Up(e);
  if (r.has(C) || u >= olr) return [];
  if (njt(e, t)) return [];
  let A = o && (t !== "User" || pjt());
  if ((Bn(e) && !Ms(e)) || _r(e) || vu(e)) return [];
  let { resolvedPath: x, isSymlink: M } = Qo(le(), e);
  if ((Bn(x) && !Ms(x)) || _r(x) || vu(x)) return [];
  if (u > 0 && !A && !$0(x)) return [];
  if (t === "User" && !A)
    try {
      let W = await le().lstat(e);
      if ((u === 0 && W.isSymbolicLink()) || ((W.nlink ?? 1) > 1 && W.isFile())) return [];
    } catch {}
  if (M) {
    let W = Up(x);
    if (r.has(W)) return [];
    r.add(W);
  }
  r.add(C);
  let { info: F, includePaths: U } = await n$e(e, t, x, _);
  if (!F || !F.content.trim()) return [];
  if (d) F.parent = d;
  let B = [];
  B.push(F);
  for (let W of U) {
    if (!$0(W) && !A) continue;
    let pe = await Dg(W, t, r, o, u + 1, e);
    B.push(...pe);
  }
  return B;
}

async function JM({
  rulesDir: e,
  type: t,
  processedPaths: r,
  includeExternal: o,
  conditionalRule: u,
  visitedDirs: d = new Set(),
  storageV5: _,
  v5Descent: C,
  discoveredDir: A,
}) {
  if (d.has(e)) return [];
  try {
    let x = le(),
      { resolvedPath: M, isSymlink: F, isCanonical: U } = Qo(x, e);
    if ((Bn(M) && !Ms(M)) || _r(M) || vu(M)) return [];
    if ((d.add(e), F)) d.add(M);
    let B = o && (t !== "User" || pjt());
    if (!B && (await ilr(x, e, t, _, C)) && !$0(M)) return [];
    let W = U ? M : void 0,
      z =
        !U || F ? void 0 : (C ?? (_ !== void 0 && t === "User" && e === _pe() ? { backend: _, relPath: [] } : void 0)),
      pe = [],
      fe;
    try {
      fe = await x.readdir(M);
    } catch (me) {
      let ge = E(me);
      if (ge === "ENOENT" || ge === "EACCES" || ge === "ENOTDIR") return [];
      throw me;
    }
    for (let me of fe) {
      let ge = qm(e, me.name),
        { resolvedPath: Ce, isSymlink: Ie, isCanonical: Ee } = Qo(x, ge),
        Pe = qm(A ?? e, me.name);
      if (Pe !== Ce && njt(Pe, t)) continue;
      if ((Bn(Ce) && !Ms(Ce)) || _r(Ce) || vu(Ce)) continue;
      let Oe = Ie ? await alr(x, Ce, t, _) : null,
        Fe = Oe ? Oe.isDirectory() : me.isDirectory(),
        Be = Oe ? Oe.isFile() : me.isFile(),
        ze =
          z !== void 0 && !Ie && Ee && Zt(me.name) && Ce === qm(_pe(), ...z.relPath, me.name)
            ? [...z.relPath, me.name]
            : void 0;
      if (Fe) {
        if (W !== void 0 && Ce !== qm(W, me.name) && !B && !$0(Ce)) continue;
        pe.push(
          ...(await JM({
            rulesDir: Ce,
            type: t,
            processedPaths: r,
            includeExternal: o,
            conditionalRule: u,
            visitedDirs: d,
            storageV5: _,
            v5Descent: z && ze ? { backend: z.backend, relPath: ze } : void 0,
            discoveredDir: Pe !== Ce ? Pe : void 0,
          })),
        );
      } else if (Be && me.name.endsWith(".md")) {
        if (W !== void 0 && Ce !== qm(W, me.name) && !B && !$0(Ce)) continue;
        let We = await Dg(
          Ce,
          t,
          r,
          o,
          0,
          void 0,
          z && ze ? { backend: z.backend, key: Te.userConfigDir("rules", ze) } : void 0,
        );
        pe.push(...We.filter((Ve) => (u ? Ve.globs : !Ve.globs)));
      }
    }
    return pe;
  } catch (x) {
    if (x instanceof Error && x.message.includes("EACCES"))
      s("tengu_claude_rules_md_permission_error", { is_access_error: 1, has_home_dir: e.includes(be()) ? 1 : 0 });
    let M = t$e();
    if (!M.rulesWalk) (M.rulesWalk = !0), g("context_claude_md_load", "rules_walk_failed");
    return [];
  }
}

function djt(e, t) {
  return e === "Managed" ? su.system(t) : e === "User" ? su.home(t) : su.workspace(t);
}

async function ilr(e, t, r, o, u) {
  if (O() && o !== void 0) {
    let d =
      r === "User" && (u !== void 0 || t === _pe())
        ? await o
            .scopeKind({ namespace: "userConfigDir", dir: "rules", ...(u && { relPath: u.relPath }) })
            .catch(() => {
              return;
            })
        : await o.hostFiles.stat(djt(r, t), { follow: !1 }).catch(() => {
            return;
          });
    if (d?.ok) return d.value.kind === "link";
    let _ = d !== void 0 && d.error.code === "Failed" ? d.error.telemetryCode : void 0;
    if (o1(_) !== void 0 || /^ERR_[A-Z0-9_]+$/.test(_ ?? "")) return !1;
    n(
      `claudemd: the storage backend could not say whether the ${r} rules folder is a symlink (${_ ?? d?.error.code ?? "no answer"}) \u2014 checking directly`,
    );
  }
  try {
    return (await e.lstat(t)).isSymbolicLink();
  } catch {
    return !1;
  }
}

async function alr(e, t, r, o) {
  if (O() && o !== void 0) {
    let u = await o.hostFiles.stat(djt(r, t)).catch(() => {
      return;
    });
    if (u?.ok) {
      let { kind: _ } = u.value;
      if (_ === "absent")
        throw Object.assign(Error("ENOENT: rules entry target is gone"), { code: "ENOENT", syscall: "stat", path: t });
      return { isDirectory: () => _ === "directory", isFile: () => _ === "file" };
    }
    let d = u !== void 0 && u.error.code === "Failed" ? u.error.telemetryCode : void 0;
    if (o1(d) !== void 0 || /^ERR_[A-Z0-9_]+$/.test(d ?? ""))
      throw u !== void 0 && u.error.code === "Failed" && u.error.cause instanceof Error
        ? u.error.cause
        : Object.assign(Error("rules entry stat failed"), { code: d });
    n(
      `claudemd: the storage backend could not type a linked ${r} rules entry (${d ?? u?.error.code ?? "no answer"}) \u2014 checking directly`,
    );
  }
  return e.stat(t);
}

function $Pe(e) {
  let t = Hn(e),
    r = Vr(e);
  return t !== null && r !== null && Up(t) !== Up(r) && rf(t, r) ? { worktreeRoot: t, mainRepoRoot: r } : null;
}

function UPe(e, t) {
  return t !== null && rf(e, t.mainRepoRoot) && !rf(e, t.worktreeRoot);
}

function pjt() {
  return N$() !== "local-agent";
}

function J_(e, t = !1, r, o) {
  let u = U0(e),
    d = u.files.get(t);
  if (!d) (d = llr(e.root, u, SG.of(e), t, r, o)), u.files.set(t, d);
  return d;
}

async function llr(e, t, r, o, u, d) {
  if (sn()) {
    if (!o) (t.injectedPinnedPaths = new Set()), GHt(r, []);
    return [];
  }
  let _ = Date.now();
  Y("info", "memory_files_started");
  let C = [],
    A = new Set(),
    x = ci(),
    M = o || x.hasClaudeMdExternalIncludesApproved || !1,
    F = hAe("Managed");
  C.push(...(await Dg(F, "Managed", A, M)));
  let U = oor();
  if (U) C.push({ path: VTn, type: "Managed", content: U, globs: [], contentDiffersFromDisk: !0, rawContent: U });
  let B = ye("policySettings")?.claudeMd;
  if (B) C.push({ path: YHt, type: "Managed", content: B, globs: [], contentDiffersFromDisk: !0, rawContent: B });
  let W = P4t();
  if (
    (C.push(
      ...(await JM({
        rulesDir: W,
        type: "Managed",
        processedPaths: A,
        includeExternal: M,
        conditionalRule: !1,
        storageV5: u,
      })),
    ),
    _o("userSettings"))
  ) {
    let Ie = hAe("User");
    C.push(
      ...(await Dg(Ie, "User", A, !0, 0, void 0, u !== void 0 ? { backend: u, key: Te.state("user-memory") } : void 0)),
    );
    let Ee = _pe();
    C.push(
      ...(await JM({
        rulesDir: Ee,
        type: "User",
        processedPaths: A,
        includeExternal: !0,
        conditionalRule: !1,
        storageV5: u,
      })),
    );
  }
  let z = [],
    pe = Se(),
    fe = pe;
  while (fe !== $ar(fe).root) z.push(fe), (fe = N0(fe));
  let me = $Pe(pe);
  for (let Ie of z.reverse()) {
    let Ee = UPe(Ie, me);
    if (_o("projectSettings") && !Ee) {
      let Pe = qm(Ie, "CLAUDE.md");
      C.push(...(await Dg(Pe, "Project", A, M)));
      let Oe = qm(Ie, ".claude", "CLAUDE.md");
      C.push(...(await Dg(Oe, "Project", A, M)));
      let Fe = qm(Ie, ".claude", "rules");
      C.push(
        ...(await JM({
          rulesDir: Fe,
          type: "Project",
          processedPaths: A,
          includeExternal: M,
          conditionalRule: !1,
          storageV5: u,
        })),
      );
    }
    if (_o("localSettings")) {
      let Pe = qm(Ie, "CLAUDE.local.md");
      C.push(...(await Dg(Pe, "Local", A, M)));
    }
  }
  if (Me(a.CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD)) {
    let Ie = Xm();
    for (let Ee of Ie) {
      let Pe = qm(Ee, "CLAUDE.md");
      C.push(...(await Dg(Pe, "Project", A, M)));
      let Oe = qm(Ee, ".claude", "CLAUDE.md");
      C.push(...(await Dg(Oe, "Project", A, M)));
      let Fe = qm(Ee, ".claude", "rules");
      if (
        (C.push(
          ...(await JM({
            rulesDir: Fe,
            type: "Project",
            processedPaths: A,
            includeExternal: M,
            conditionalRule: !1,
            storageV5: u,
          })),
        ),
        _o("localSettings"))
      ) {
        let Be = qm(Ee, "CLAUDE.local.md");
        C.push(...(await Dg(Be, "Local", A, M)));
      }
    }
  }
  if (ta()) {
    await x$().warmCanonicalWcRoot();
    let Ie = QHt();
    if (!o && !a.CLAUDE_CODE_REMOTE && Ie === void 0 && nde()) {
      let Ee = await JHt(t),
        Pe = Ee.entries.filter((Oe) => {
          let Fe = Up(Oe.path);
          if (A.has(Fe)) return !1;
          return A.add(Fe), !0;
        });
      C.push(...Pe), Jar(t, Ee, Pe);
    }
    if (Ie !== "") {
      let Ee = async () => (await n$e(PY(), "AutoMem")).info,
        Pe = () => (t.autoMemIndexEntry ??= Yar()),
        Oe =
          Ie !== void 0
            ? [Var(Ie)]
            : !XK() || a.CLAUDE_CODE_REMOTE
              ? [await Ee()]
              : yO()
                ? [await Ee(), await Pe()]
                : [await Pe()];
      for (let Fe of Oe) {
        if (!Fe) continue;
        let Be = Up(Fe.path);
        if (!A.has(Be)) A.add(Be), C.push(Fe);
      }
    }
  }
  if (!o)
    (t.injectedPinnedPaths = new Set(C.filter((Ie) => Ie.type === "AutoMemPinned").map((Ie) => Ie.path))), GHt(r, C);
  let ge = C.reduce((Ie, Ee) => Ie + Ee.content.length, 0);
  Y("info", "memory_files_completed", { duration_ms: Date.now() - _, file_count: C.length, total_content_length: ge });
  let Ce = {};
  for (let Ie of C) Ce[Ie.type] = (Ce[Ie.type] ?? 0) + 1;
  if (!t.hasLoggedInitialLoad)
    (t.hasLoggedInitialLoad = !0),
      s("tengu_claudemd__initial_load", {
        file_count: C.length,
        total_content_length: ge,
        user_count: Ce.User ?? 0,
        project_count: Ce.Project ?? 0,
        local_count: Ce.Local ?? 0,
        managed_count: Ce.Managed ?? 0,
        automem_count: Ce.AutoMem ?? 0,
        duration_ms: Date.now() - _,
      });
  if (!o) {
    let Ie = clr(t);
    if (Ie !== void 0 && zUt())
      for (let Ee of C) {
        if (!fjt(Ee.type)) continue;
        if (FPe(Ee.path)) continue;
        let Pe = Ee.parent ? "include" : Ie;
        nGe(e, Ee.path, Ee.type, Pe, { globs: Ee.globs, parentFilePath: Ee.parent, storageV5: u, credentials: d });
      }
  }
  return C;
}

function fjt(e) {
  return e === "User" || e === "Project" || e === "Local" || e === "Managed";
}

function clr(e) {
  if (!e.shouldFireHook) return;
  e.shouldFireHook = !1;
  let t = e.nextEagerLoadReason;
  return (e.nextEagerLoadReason = "session_start"), t;
}

function YA(e) {
  let t = U0(e);
  t.files.clear(), (t.autoMemIndexEntry = void 0);
}

function Z7() {
  YA(G());
}

function xxe(e) {
  U0(e).pinnedHeaderScans.clear();
}

function yun(e, t = "session_start") {
  let r = U0(e);
  (r.nextEagerLoadReason = t), (r.shouldFireHook = !0), YA(e);
}

function GCt(e = "session_start") {
  yun(G(), e);
}

function $Ne(e) {
  return U0(e).injectedPinnedPaths;
}

function uGe(e) {
  let t = cGe();
  return e.filter((r) => !FPe(r.path) && fjt(r.type) && r.content.length > t);
}

function I3(e) {
  if (!aN()) return e;
  return e.filter((t) => t.type !== "AutoMem");
}

function dGe(e) {
  if (e.type === "AutoMem" && aN()) return !1;
  if ((e.type === "Project" || e.type === "Local") && I("tengu_paper_halyard", !1)) return !1;
  if (!e.content) return !1;
  return !0;
}

function GHt(e, t) {
  let r = t.filter((o) => o.type === "AutoMem" && dGe(o));
  e.recordContextBuild({
    memoryDir: Di(),
    injectedBodyPaths: [
      ...t.filter((o) => o.type === "AutoMemPinned" && dGe(o)),
      ...r.filter((o) => o.path !== e$e),
    ].map((o) => o.path),
    indexContents: r.map((o) => o.content),
  });
}

function qge(e, t) {
  return e.filter((r) => (!t || t(r.type)) && ulr(r));
}

function Cj(e) {
  let t = r$e(e);
  return t === ""
    ? ""
    : `${War}

${t}`;
}

function ulr(e) {
  if ((e.type === "Project" || e.type === "Local") && I("tengu_paper_halyard", !1)) return !1;
  return Boolean(e.content);
}

function r$e(e) {
  let t = [],
    r = [];
  for (let o of e) {
    if (o.type === "AutoMemPinned") {
      r.push(o);
      continue;
    }
    if (r.length > 0) t.push(qHt(r)), (r = []);
    let u =
      o.type === "Project"
        ? " (project instructions, checked into the codebase)"
        : o.type === "Local"
          ? " (user's private project instructions, not checked in)"
          : o.type === "AutoMem"
            ? " (user's auto-memory, persists across conversations)"
            : o.type === "Managed"
              ? " (organization-managed policy instructions)"
              : " (user's private global instructions for all projects)";
    t.push(`Contents of ${o.path}${u}:

${o.content.trim()}`);
  }
  if (r.length > 0) t.push(qHt(r));
  return t.join(`

`);
}

function dlr(e) {
  return Eo(e.replace(/[\u0000-\u001F\u007F-\u009F\u2028\u2029]/g, ""));
}

function qHt(e) {
  return [
    jar,
    ...e.map(
      (t) => `<pinned-memory path="${dlr(t.path)}">
${kAe("pinned-memory", t.content.trim())}
</pinned-memory>`,
    ),
  ].join(`

`);
}

async function rHt(e, t, r) {
  if (a.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return [];
  let o = [],
    u = P4t();
  if ((o.push(...(await Zae(e, u, "Managed", t, !1, r))), _o("userSettings"))) {
    let d = _pe();
    o.push(...(await Zae(e, d, "User", t, !0, r)));
  }
  return o;
}

async function KUt(e, t, r, { skipProject: o = !1 } = {}) {
  if (a.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return [];
  let u = [],
    d = _o("projectSettings") && !o;
  if (d) {
    let _ = qm(e, "CLAUDE.md");
    u.push(...(await Dg(_, "Project", r, !1)));
    let C = qm(e, ".claude", "CLAUDE.md");
    u.push(...(await Dg(C, "Project", r, !1)));
  }
  if (_o("localSettings")) {
    let _ = qm(e, "CLAUDE.local.md");
    u.push(...(await Dg(_, "Local", r, !1)));
  }
  if (d) {
    let _ = qm(e, ".claude", "rules"),
      C = new Set(r);
    u.push(
      ...(await JM({ rulesDir: _, type: "Project", processedPaths: C, includeExternal: !1, conditionalRule: !1 })),
    ),
      u.push(...(await Zae(t, _, "Project", r, !1)));
    for (let A of C) r.add(A);
  }
  return u;
}

async function oHt(e, t, r) {
  if (a.CLAUDE_CODE_DISABLE_CLAUDE_MDS || !_o("projectSettings")) return [];
  let o = qm(e, ".claude", "rules");
  return Zae(t, o, "Project", r, !1);
}

async function Zae(e, t, r, o, u, d) {
  let _ = await JM({ rulesDir: t, type: r, processedPaths: o, includeExternal: u, conditionalRule: !0, storageV5: d }),
    C = r === "Project" ? N0(N0(t)) : Se(),
    A = Qae(e) ? zHt(C, e) : e;
  if (Qae(e) && (!A || A.startsWith("..") || Qae(A))) {
    let x = N0(e),
      { resolvedPath: M } = Qo(le(), x);
    if (M !== x) A = zHt(C, qm(M, Lar(e)));
  }
  return _.filter((x) => {
    if (!x.globs || x.globs.length === 0) return !1;
    if (!A || A.startsWith("..") || Qae(A)) return !1;
    return KHt.default().add(L8(x.globs, "claudemd_rule_globs")).ignores(A);
  });
}

function pGe(e) {
  let t = [];
  for (let r of e) if (r.type !== "User" && r.parent && !$0(r.path)) t.push({ path: r.path, parent: r.parent });
  return t;
}

function Sun(e) {
  return pGe(e).length > 0;
}

async function Izn(e, t) {
  let r = ci();
  if (r.hasClaudeMdExternalIncludesApproved || r.hasClaudeMdExternalIncludesWarningShown) return !1;
  return Sun(await J_(e, !0, t));
}

function FTt(e) {
  return e.map(({ path: t, type: r, content: o }) => ({ path: t, type: r, content: o.trim() }));
}

function hjt(e) {
  if (!e.changed) return Cj(e.files);
  let t = r$e(e.files),
    r = (e.removed ?? []).map((u) => `Instructions no longer present: ${u}`),
    o = e.reason
      ? `Instruction files were re-read ${II(e.reason)}; these differ from their earlier copies`
      : "These instruction files changed";
  return [
    ...(t === ""
      ? []
      : [
          `${o} \u2014 each replaces its earlier copy, and the instructions preamble above still applies:

${t}`,
        ]),
    ...(r.length > 0 && t === "" && e.reason ? [`Instruction files were re-read ${II(e.reason)}.`] : []),
    ...r,
  ].join(`

`);
}

function gjt(e) {
  return e.type === "attachment" && e.attachment.type === "instructions";
}

function $Tt(e) {
  let t = e.findLastIndex((o) => gjt(o) && !o.attachment.changed && ele().safeParse(o.attachment).success);
  if (t === -1) return;
  let r = new Map();
  for (let o = t; o < e.length; o++) {
    let u = e[o];
    if (!gjt(u)) continue;
    let d = ele().safeParse(u.attachment);
    if (!d.success) continue;
    for (let _ of d.data.files) r.set(_.path, _);
    for (let _ of d.data.removed ?? []) r.delete(_);
  }
  return r;
}

function UTt(e, t) {
  if (!t) return e.length === 0 ? void 0 : { files: e.slice() };
  let r = e.filter((d) => {
      let _ = t.get(d.path);
      return !_ || _.content !== d.content || _.type !== d.type;
    }),
    o = new Set(e.map((d) => d.path)),
    u = [...t.keys()].filter((d) => !o.has(d));
  if (r.length === 0 && u.length === 0) return;
  return { files: r, ...(u.length > 0 && { removed: u }), changed: !0 };
}

function ylr(e) {
  let t = new Set();
  for (let [, r] of e.matchAll(hlr)) {
    if (t.has(r)) return !1;
    t.add(r);
  }
  return !0;
}

function Slr(e) {
  let t = "";
  for (let r of e) {
    let o = r === "<" || r === ">" ? r : kjt.get(r);
    t += o === "<" ? "&lt;" : o === ">" ? "&gt;" : r;
  }
  return t;
}

function klr(e, t) {
  return e
    .split(`
`)
    .map((r) => (t && glr.test(r) && ylr(r) && !wlr(r) && !_lr.test(r) ? r : Slr(r)))
    .join(`
`);
}

function wlr(e) {
  for (let t of e) if (kjt.has(t)) return !0;
  return !1;
}

function Tlr(e, t) {
  return `<${vFe}>
${iXe(vFe, klr(e, t))}
</${vFe}>`;
}

function a$e(e, t) {
  let r =
    e.startsWith(o$e) && e.endsWith(s$e) && e.length >= o$e.length + s$e.length
      ? e.slice(o$e.length, e.length - s$e.length)
      : e;
  return `${yjt}

${Tlr(r, t?.serverEnvelope === !0)}`;
}

function E4n(e) {
  let t = { ...e, description: ce(e.description, Ejt) };
  return `<${AFe}>${Wt(JSON.stringify(t))}</${AFe}>`;
}

function PS(e) {
  return e.replace(Rlr, (t, r) => `&lt;${r}${AFe}>`);
}

function A4n(e) {
  let t = [],
    r = e.replace(Alr, "");
  for (let o of r.matchAll(Clr)) {
    let u = o[1];
    if (u === void 0) continue;
    let d;
    try {
      d = JSON.parse(kC(u));
    } catch {
      continue;
    }
    let _ = vlr().safeParse(d);
    if (_.success) t.push(_.data);
  }
  return t;
}

function Cjt(e) {
  return e.replace(/[&"<>\r\n]/g, (t) => Plr[t]);
}

function xlr(e) {
  return e.replaceAll("</audio-transcript>", "<\\/audio-transcript>");
}

function XUt(e) {
  let t = Math.max(0, Math.round(e)),
    r = Math.floor(t / 60),
    o = t % 60;
  return `${r}:${String(o).padStart(2, "0")}`;
}

function l$e(e) {
  let t = Cjt(e.filename);
  if (e.error !== void 0) return `<audio-transcript filename="${t}" error="${Cjt(e.error)}" />`;
  let r = e.durationSec !== void 0 ? ` duration="${XUt(e.durationSec)}"` : "";
  return `<audio-transcript filename="${t}"${r}>
${xlr(e.transcript ?? "")}
</audio-transcript>`;
}

function og(e) {
  let t = e.replace(/\r\n?|\n/g, " ");
  if (t === "") return "` `";
  let r = t.match(/`+/g)?.reduce((d, _) => Math.max(d, _.length), 0) ?? 0,
    o = "`".repeat(r + 1),
    u = t.startsWith("`") || t.endsWith("`") ? " " : "";
  return `${o}${u}${t}${u}${o}`;
}

function Mlr(e, t) {
  return e.replace(/(`+)(.+?)\1/g, (r, o, u) => {
    let d = u.startsWith(" ") && u.endsWith(" ") && u.trim() !== "";
    return t(d ? u.slice(1, -1) : u);
  });
}

function Llr(e) {
  let t = e.replace(Olr, "").indexOf(`${BPe}${jPe}\``);
  return t >= 0 && t <= Dlr;
}

function Flr(e) {
  return Ilr.some((t) => e.startsWith(t)) || Llr(e);
}

function Pzn(e, t) {
  return Flr(e) ? Mlr(e, t) : e;
}

function xjt() {
  let e = a.CLAUDE_CODE_PLAN_V2_AGENT_COUNT;
  if (e !== void 0 && e > 0 && e <= 10) return e;
  let t = Fn(),
    r = mw();
  if (t === "max" && r === "default_claude_max_20x") return 3;
  if (t === "enterprise" || t === "team") return 3;
  return 1;
}

function Mjt() {
  let e = a.CLAUDE_CODE_PLAN_V2_EXPLORE_AGENT_COUNT;
  if (e !== void 0 && e > 0 && e <= 10) return e;
  return 3;
}

function Ulr() {
  return import.meta.require("/$bunfs/root/chunk-fear0vyg.js");
}

function f2(e) {
  if (ta() && I("tengu_amber_prism", !1)) return e + qlt;
  return e;
}

function dQe(e) {
  return `Permission to use ${e} has been denied. ${S$e}`;
}

function sbe(e) {
  return `Permission to use ${e} has been denied because Claude Code is running in don't ask mode. ${S$e}`;
}

function ZUt(e) {
  return `Permission for this tool use was denied: it requires interactive approval, and permission prompts are not available in this session. The action was NOT performed. Do not claim it succeeded, and do not retry it in this session \u2014 report the limitation to the user, or suggest an alternative. What was requested: ${e}`;
}

function bun(e) {
  return e.startsWith(Pce) || e.startsWith(jlr);
}

function wun(e) {
  if (!e.startsWith(Pce)) return null;
  let t = e.slice(Pce.length),
    r = t.indexOf(Wlr);
  if (r <= 0) return null;
  return t.slice(0, r);
}

function eBt(e, t) {
  let r = Pce,
    o = t?.autoModeConsentFlow ? Blr : S$e,
    u = `${r}${e}. If you have other tasks that don't depend on this action, continue working on those. ` + o;
  if (!Wrr() || $I()) return u;
  return `${u} ${"To allow this type of action in the future, the user can add a Bash permission rule to their settings."}`;
}

function fGe(e, t) {
  let o = t.refused
    ? "Retrying it will hit the same refusal, so don't rewrite or rework the action to get around this \u2014 it reacts to earlier conversation content, not to the action itself, and it will keep firing for the rest of this conversation. " +
      "Continue with other tasks that don't require this action. If it is essential, stop and tell the user that auto mode could not evaluate it, and suggest running this action outside auto mode (switch back to the default permission mode) or starting a fresh session."
    : "This is usually transient \u2014 wait briefly and try this action again as-is; don't rewrite it. " + hWt;
  return `${e}. This is not a judgment that the action is unsafe. ${o} ${_Wt}`;
}

function bWt(e, t) {
  if (e === 429) return " (rate-limited)";
  if (e === 529) return " (overloaded)";
  if (e !== void 0 && e >= 500 && e < 600) return " (server error)";
  if (t === "wall_clock_timeout" || t === "connection_timeout") return " (timed out)";
  if (t === "connection_error") return " (connection failed)";
  return "";
}

function tBt(e, t, r, o) {
  return `${t} is temporarily unavailable${bWt(r, o)}${zlr}${e} right now. Wait a moment and then try this action again. ${hWt} ${_Wt}`;
}

function abe(e, t, r) {
  return `Note: ${e ? `${e} (the safety classifier)` : "The safety classifier"} was unavailable${bWt(t, r)} when reviewing this subagent's work. Please carefully verify the subagent's actions and output before acting on them.`;
}

export { $Ne, $Pe, $Tt, $Ut, A4n, AE, Azn, BUt, CE, Cj, Czn, Dg, Dhr, E4n, Ea, FPe, FTt, FUt, GCt, GUt, Hhr, Hzn, I3, Izn, J7, JIe, J_, KUt, LPe, LUt, MPe, MUt, Mjt, NPe, NUt, OPe, OUt, PS, Pdt, Pzn, Q7, RCr, Rhr, Rzn, Sce, Sun, UPe, UTt, UUt, Ulr, VUt, WUt, XUt, YA, Z7, ZUt, Zpt, _un, a$e, abe, bun, cAt, cGe, cdt, cun, dGe, dQe, dun, eBt, eft, f2, fGe, fun, gun, hjt, hun, iGe, iT, ibe, jUt, jy, kCr, khr, kzn, l$e, lGe, mun, nGe, nbe, nft, nz, oGe, oHt, obe, og, pGe, pun, qUt, qge, rGe, rHt, rbe, rft, sGe, sbe, tBt, tft, uGe, uun, vhr, vzn, w7, wun, xjt, xxe, y9, yce, yun, zUt };
