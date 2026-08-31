// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Gu, Kr, J, Mn, K, Gp, Se, yS, nc, CR, dd, WFe, qFe, Hj, $Ct } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Me } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { _Y, kr, cf, oR, bre, pf, Ye, Ot, Cc, TC, ha, I, H4t } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { w, c, ke } from "/$bunfs/root/chunk-4xj01xwv.js";
import { E } from "/$bunfs/root/chunk-ypdw393e.js";
import { fkn, mCt, vt, b, CP, Kg, _A, le, qu, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { g } from "/$bunfs/root/chunk-ca80fke8.js";
import { ee } from "/$bunfs/root/chunk-4fwj3vnx.js";
import { iU, lfe } from "/$bunfs/root/chunk-rgw52f13.js";
import { Wu } from "/$bunfs/root/chunk-f5hrzy3k.js";
import { An } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { Lf } from "/$bunfs/root/chunk-1yr12dqr.js";
import { hr, Lrr, ra } from "/$bunfs/root/chunk-82w4mtvq.js";
import { Nl, Bk } from "/$bunfs/root/chunk-c6k0ecxv.js";
import { dL } from "/$bunfs/root/chunk-2ggyrkka.js";
import {
  yG,
  nD,
  Ict,
  Vxe,
  sD,
  fle,
  mE,
  xye,
  Dye,
  j3e,
  W3e,
  TIe,
  S3n,
  X_,
  VB,
  Fb,
  kIe,
  aFt,
  Lc,
  R7,
  ZFt,
  ySe,
  nPe,
  Xle,
  zSe,
  JL,
  m9,
  g9,
  ite,
  rH,
  ate,
  XA,
  Z7,
  Dt,
} from "/$bunfs/root/chunk-zze8764r.js";
import { rd, Gh } from "/$bunfs/root/chunk-dc4hb8f7.js";
import { Oa } from "/$bunfs/root/chunk-nfmyt8cw.js";
import { ah, va } from "/$bunfs/root/chunk-nkjrjh5n.js";
import { Vne } from "/$bunfs/root/chunk-hebj76vj.js";
import { H_t } from "/$bunfs/root/chunk-6a5ggyw4.js";
import { Nd, k2 } from "/$bunfs/root/chunk-btcxpqw5.js";
import { NE } from "/$bunfs/root/chunk-anwgkcw5.js";
import { To } from "/$bunfs/root/chunk-1v3848mh.js";
import { Zce } from "/$bunfs/root/chunk-6nmk3t6g.js";
import { Jb } from "/$bunfs/root/chunk-z9rrv31w.js";
import { zae } from "/$bunfs/root/chunk-ntp265nj.js";
import { Ao } from "/$bunfs/root/chunk-czmxr2ps.js";
import { Bn, vu, _r, ns, Qi, q4 } from "/$bunfs/root/chunk-56sxk8k2.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
import { appendFile as re, readdir as ne, rename as ie, rmdir as se } from "fs/promises";
import { basename as B, dirname as ae, join as _, relative as L } from "path";
class oDn {
  filePath = null;
  key = void 0;
  timestamp = 0;
  recorder = null;
  failed = !1;
  setFile(e, o, t) {
    (this.filePath = e), (this.key = t), (this.timestamp = o);
  }
  setFilePath(e, o) {
    (this.filePath = e), (this.key = o);
  }
  setRecorder(e) {
    this.recorder = e;
  }
  markFailed() {
    this.failed = !0;
  }
}
function j(e, o, t) {
  return { namespace: "recording", projectKey: e, sessionId: o, stamp: String(t) };
}
var SRt = new Mn(() => new oDn());
function jcr(e, o) {
  let t = SRt.of(e);
  if (t.filePath !== null) return t.filePath;
  return null;
}
async function Xwr(e) {
  let o = K(),
    t = Wu(Se()),
    r = Bk(t);
  if (O() && e !== void 0 && r !== void 0) return Wcr(e, r, t, o);
  try {
    let i = le().readdirSync(t);
    return (typeof i[0] === "string" ? i : i.map((u) => u.name))
      .filter((u) => u.startsWith(o) && u.endsWith(".cast"))
      .sort()
      .map((u) => _(t, u));
  } catch {
    return [];
  }
}
async function Wcr(e, o, t, r) {
  let i = [];
  try {
    i = (await ne(t)).filter((l) => l.startsWith(r) && l.endsWith(".cast")).sort();
  } catch {}
  let d = [];
  try {
    if (
      (
        await Ao(
          (u) =>
            e.listEntries(
              { namespace: "transcript", projectKey: o, sessionId: r },
              { skipKeyStats: !0, skipScopeStats: !0, ...(u !== void 0 && { cursor: u }) },
            ),
          (u) => {
            for (let m of u) if (m.kind === "key" && m.key.namespace === "recording") d.push(`${m.key.stamp}.cast`);
          },
        )
      ).status !== "done"
    )
      d.length = 0;
  } catch {
    d.length = 0;
  }
  return [...i.map((l) => _(t, l)), ...d.sort().map((l) => _(t, r, l))];
}
async function Iet(e, o) {
  let t = SRt.of(e),
    r = t.filePath;
  if (!r || t.timestamp === 0) return;
  let i = Wu(Se()),
    d = t.key,
    l = Bk(i);
  if (O() && o !== void 0 && d !== void 0 && l !== void 0) {
    if (t.failed) return;
    let k = K(),
      h = _(i, k, `${t.timestamp}.cast`);
    if (r === h) return;
    let v = j(l, k, t.timestamp),
      f = L(i, r),
      p = L(i, h),
      S = async () => {
        if (t.failed) return;
        try {
          await qcr(o, d, v), t.setFilePath(h, v), n(`[asciicast] Renamed recording: ${f} \u2192 ${p}`);
        } catch {
          n(`[asciicast] Failed to rename recording from ${f} to ${p}`);
        }
      };
    await (t.recorder?.park(S) ?? S());
    return;
  }
  let u = _(i, `${K()}-${t.timestamp}.cast`);
  if (r === u) return;
  await t.recorder?.flush();
  let m = B(r),
    y = B(u);
  try {
    await ie(r, u), t.setFilePath(u), n(`[asciicast] Renamed recording: ${m} \u2192 ${y}`);
  } catch {
    n(`[asciicast] Failed to rename recording from ${m} to ${y}`);
  }
}
async function qcr(e, o, t) {
  fkn(await e.move(o, t)), await se(_(Nl(), o.projectKey, o.sessionId)).catch(() => {});
}
async function iDn(e, o, t) {
  fkn(await e.append(o, [{ data: t }]));
}
function H() {
  let e = process.stdout.columns || 80,
    o = process.stdout.rows || 24;
  return { cols: e, rows: o };
}
async function Ywr(e) {
  await SRt.of(e).recorder?.flush();
}
function Jwr(e, o) {
  let t = jcr(e, o);
  if (!t) return;
  let r = SRt.of(e),
    { cols: i, rows: d } = H(),
    l = performance.now(),
    u = b({
      version: 2,
      width: i,
      height: d,
      timestamp: Math.floor(Date.now() / 1000),
      env: { SHELL: a.SHELL || "", TERM: a.TERM || "" },
    }),
    m,
    y = r.key;
  if (O() && o !== void 0 && y !== void 0)
    m = iDn(
      o,
      y,
      u +
        `
`,
    ).catch(() => {
      r.markFailed(), n("[asciicast] Could not write the recording header; this session is not recorded");
    });
  else {
    try {
      le().mkdirSync(ae(t));
    } catch {}
    le().appendFileSync(
      t,
      u +
        `
`,
      { mode: 384 },
    ),
      (m = Promise.resolve());
  }
  let k = mCt({
      writeFn(f) {
        let p = r.filePath;
        if (!p) return;
        m = m
          .then(() => {
            let S = r.key;
            if (O() && o !== void 0 && S !== void 0) return r.failed ? void 0 : iDn(o, S, f);
            return re(p, f);
          })
          .catch(() => {});
      },
      flushIntervalMs: 500,
      maxBufferSize: 50,
      maxBufferBytes: 10485760,
    }),
    h = process.stdout.write.bind(process.stdout);
  process.stdout.write = function (f, p, S) {
    let P = (performance.now() - l) / 1000,
      C = typeof f === "string" ? f : Buffer.from(f).toString("utf-8");
    if (
      (k.write(
        b([P, "o", C]) +
          `
`,
      ),
      typeof p === "function")
    )
      return h(f, p);
    return h(f, p, S);
  };
  function v() {
    let f = (performance.now() - l) / 1000,
      { cols: p, rows: S } = H();
    k.write(
      b([f, "r", `${p}x${S}`]) +
        `
`,
    );
  }
  process.stdout.on("resize", v),
    r.setRecorder({
      async flush() {
        k.flush(), await m;
      },
      async park(f) {
        k.flush();
        let p = m.then(f);
        (m = p.catch(() => {})), await p;
      },
      async dispose() {
        k.dispose(), await m, process.stdout.removeListener("resize", v), (process.stdout.write = h);
      },
    }),
    vt(async () => {
      await r.recorder?.dispose(), r.setRecorder(null);
    }),
    n(`[asciicast] Recording to ${t}`);
}
import { dirname as q, resolve as de, win32 as Y } from "path";
import { realpathSync as ue, statSync as me } from "fs";
function Iie(e) {
  if (!e || !aFt(e.hooks)) {
    $Ct(void 0);
    return;
  }
  let o = !Nd("hooks") || k2(e.source),
    t = Ict(e);
  if (o && t) {
    $Ct(e.hooks);
    return;
  }
  if (o && !t) Vxe(e, "mainThread");
  $Ct(void 0);
}
class W {
  restored = !1;
  markRestored() {
    this.restored = !0;
  }
}
var U = new J(() => new W());
function iRe(e) {
  U.of(e).markRestored();
}
function _K(e) {
  return U.of(e).restored;
}
function ce(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let t = e[o];
    if (t?.type !== "assistant") continue;
    let r = t.message.content.find((l) => l.type === "tool_use" && l.name === NE);
    if (!r || r.type !== "tool_use") continue;
    let i = r.input;
    if (i === null || typeof i !== "object") return [];
    let d = Dye().safeParse(i.todos);
    return d.success ? d.data : [];
  }
  return [];
}
function YKt(e) {
  if (typeof e.resume !== "string" || e.forkSession || e.hasSessionIdFlag) return !1;
  let o = Kr(e.resume);
  if (!o) return !1;
  return Gp(Gu(o), "resume"), !0;
}
function sRe(e, o, t, r) {
  if (e.fileHistorySnapshots && e.fileHistorySnapshots.length > 0)
    j3e(e.fileHistorySnapshots, (i) => {
      o((d) => ({ ...d, fileHistory: i }));
    });
  if (
    (import.meta.require("/$bunfs/root/chunk-qv41ywnn.js").restoreGoalFromTranscript(e.messages, o, t),
    !Jb() && e.messages && e.messages.length > 0)
  ) {
    let i = ce(e.messages);
    if (i.length > 0) {
      let d = K();
      o((l) => ({ ...l, todos: { ...l.todos, [d]: i } }));
    }
  }
}
function Gcr(e) {
  return;
}
function aRe(e, o) {
  if (!e && !o) return;
  return { name: e ?? "", color: o === "default" ? void 0 : o };
}
function J4(e, o, t, r) {
  if (o) return { agentDefinition: o, agentType: void 0 };
  if (!e) return Hj(void 0), Iie(void 0), { agentDefinition: void 0, agentType: void 0 };
  let i = r?.sessionAgentDefinitions ? sD(r.sessionAgentDefinitions.activeAgents, e) : void 0,
    d = i ?? sD(t.activeAgents, e);
  if (i) n(`Resume: agent "${e}" restored from the session home set (${r?.sessionCwd ?? "unknown"})`);
  if (!d) {
    if (
      (n(`Resumed session had agent "${e}" but it is no longer available. Using default behavior.`),
      e !== zae.agentType)
    ) {
      if ((g("session_resume", "agent_resolve_miss"), r?.onResolveMiss)) {
        let l = Se(),
          u = r.sessionAgentDefinitions && r.sessionCwd && r.sessionCwd !== l ? `${r.sessionCwd} or ${l}` : l;
        r.onResolveMiss(
          An(
            `This session was running agent '${e}', which is no longer available (no agent by that name in ${u}). ` +
              "Continuing with the default tools and system prompt \u2014 the agent's tool restrictions no longer apply. " +
              "To restore it, re-create the agent, or resume with an explicit --agent <name>.",
          ),
        );
      }
    }
    return Hj(void 0), Iie(void 0), { agentDefinition: void 0, agentType: void 0 };
  }
  if ((Hj(d.agentType), Iie(d), !nc() && d.model && d.model !== "inherit")) {
    let l = Ot(d.model);
    if (pf(l) || kr(l)) dd(l);
    else
      n(`Agent model "${d.model}" is not in the availableModels allowlist; keeping the session model`, {
        level: "warn",
      });
  }
  return { agentDefinition: d, agentType: d.agentType };
}
async function eQ(e, o) {
  if (!e || e === Se()) return;
  let t = de(e);
  if (Bn(e) || Bn(t) || vu(e) || vu(t) || vu(Y.normalize(e)) || _r(e) || _r(t)) {
    n(`Resume: refusing cross-host session home shape "${e}"`);
    return;
  }
  if (!H4t(e)) {
    n(`Resume: not loading agents from session home "${e}" \u2014 workspace trust not persisted for it`);
    return;
  }
  try {
    return await mE(e, o);
  } catch {
    return;
  }
}
function JKt(e) {
  if (!e.resumedAgentSetting || e.mainThreadAgentType) return { attempt: !1, loud: !1 };
  if (e.hasStreamingInput) return { attempt: !e.explicitAgentFlag, loud: !1 };
  return { attempt: !0, loud: !0 };
}
async function zcr(e, o) {
  if (o || !e) return;
  let t = Lf(e);
  if (t === void 0) return;
  if (t === "plan" || t === "bypassPermissions") return;
  if (t === "default") {
    let { isAutoModeFromFallback: r, setProvisionalStartupMode: i } = await import("/$bunfs/root/chunk-r7nsdrr4.js");
    if ((i(void 0), r())) return "default";
    return;
  }
  if (t === "auto") {
    let { isAutoModeGateEnabled: r } = await import("/$bunfs/root/chunk-npecenj8.js");
    if (!r()) return;
  }
  return t;
}
var fe = {
  unknown_family: "not a model this version of Claude Code recognizes",
  not_allowed: "not allowed by this account's model settings",
  retired: "retired",
};
function lRe() {
  return Boolean(
    nc() !== void 0 ||
      a.ANTHROPIC_MODEL ||
      a.ANTHROPIC_DEFAULT_FABLE_MODEL ||
      a.ANTHROPIC_DEFAULT_OPUS_MODEL ||
      a.ANTHROPIC_DEFAULT_SONNET_MODEL ||
      a.ANTHROPIC_DEFAULT_HAIKU_MODEL ||
      bre() ||
      !ra(),
  );
}
function tQ(e, o, t, r = (i) => i()) {
  if (lRe()) return;
  let i = X(e, o);
  if (i.kind === "none") return;
  if (i.kind === "mode_dependent_setting") {
    r(() => s("tengu_resume_model_restore", { outcome: c("skipped_mode_dependent_setting"), is_eap: !1 }));
    return;
  }
  if (i.kind === "declined")
    r(() =>
      s("tengu_resume_model_restore", { outcome: c("declined"), decline_reason: ke(i.reason), is_eap: Vne(i.model) }),
    );
  if (i.kind === "declined") {
    let d = (o && hr(o)) || "the default model";
    t?.(`Session model ${i.model} could not be restored (${fe[i.reason]}) \u2014 using ${d} instead.`);
    return;
  }
  return i.model;
}
function QKt(e, o) {
  let t = X(e, o);
  return t.kind === "ok" ? t.model : void 0;
}
function pe(e, o) {
  if (e === "opusplan") return o.includes("opus") || o.includes("sonnet");
  if (e === "haiku") return o.includes("haiku") || o.includes("sonnet");
  return !1;
}
function X(e, o) {
  let t = new Set(Lrr.map((d) => Ye(d))),
    r = o ? Ot(o) : void 0,
    i = r ? hr(r) : void 0;
  for (let d = e.length - 1; d >= 0; d--) {
    let l = e[d];
    if (l?.type !== "assistant" || l.isMeta || typeof l.message?.model !== "string" || l.message.model === rd) continue;
    let u = l.message.model,
      m = cf();
    if (oR(m) && !Vne(u) && pe(m, Ye(u))) return { kind: "mode_dependent_setting" };
    let y = !(t.has(Ye(u)) || Vne(u) || hr(u) === i)
      ? "unknown_family"
      : !pf(u) && !kr(u)
        ? "not_allowed"
        : _Y(u)
          ? "retired"
          : void 0;
    if (y) return { kind: "declined", model: u, reason: y };
    if (((o && Cc(o)) || (r !== void 0 && Cc(r))) && TC(u) && (hr(u) === i || (o && Ye(Ot(hr(o))) === Ye(u))))
      return { kind: "ok", model: u + "[1m]" };
    return { kind: "ok", model: u };
  }
  return { kind: "none" };
}
function Q(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let t = e[o];
    if (t?.type === "system" && t.subtype === "model_refusal_fallback") return t;
  }
  return;
}
function Vcr(e, o) {
  let t = Q(e);
  if (!t) return !1;
  let r = hr(t.fallbackModel),
    i = hr(o);
  return r === i || Ye(r) === Ye(i);
}
function cRe(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let t = e[o];
    if (t?.type === "system" && t.subtype === "model_refusal_fallback") t.neutralizedByFork = !0;
  }
}
function ge(e) {
  let o = Q(e);
  return o?.neutralizedByFork === !0 ? { fallbackModel: o.fallbackModel } : void 0;
}
function M(e, o) {
  s("tengu_resume_model_restore", { outcome: c(e), is_eap: Vne(o) });
}
function V(e, o) {
  import("/$bunfs/root/chunk-skwsm25m.js").then((t) => t.fetchBootstrapData(e, o));
}
function nQ(e, o, t, r, i) {
  if (!Vcr(e, o)) return dd(o), V(r, i), M("restored", o), o;
  if (t) {
    s("tengu_refusal_fallback_resume_latch", { action: c("fork_skip_restore") }), M("skipped_fork_fallback", o);
    return;
  }
  let d = ge(e);
  if (d && hr(d.fallbackModel) === hr(o)) {
    s("tengu_refusal_fallback_resume_latch", { action: c("fork_neutralized_skip") }), M("skipped_fork_neutralized", o);
    return;
  }
  return (
    dd(o),
    V(r, i),
    qFe({
      fallbackModel: o,
      previousOverride: void 0,
      previousAppStateModel: CR() ?? null,
      previousModelForSession: null,
    }),
    M("restored", o),
    s("tengu_refusal_fallback_resume_latch", { action: c("model_latch_only") }),
    o
  );
}
function rQ(e, o) {
  if (o) return;
  let t = e.flatMap((r) =>
    r?.type === "system" &&
    r.subtype === "model_refusal_fallback" &&
    (r.apiRefusalCategory === "cyber" || r.sawCyberRefusal === !0) &&
    r.neutralizedByFork !== !0
      ? [r]
      : [],
  );
  if (t.length > 0)
    WFe(t.find((r) => r.apiRefusalCategory === "cyber" && r.requestId != null)?.requestId ?? void 0),
      s("tengu_refusal_fallback_resume_latch", { action: c("header_rearmed") });
}
async function Kcr(e, o, t, r, i) {
  if (!e) return r;
  return yK(o, t, i);
}
async function yK(e, o, t) {
  To().agentDefinitions.clear();
  let r = await mE(e, t);
  return fle(r, [...r.allAgents, ...o]);
}
function G(e) {
  try {
    return ue(e);
  } catch {
    return e;
  }
}
function z(e) {
  try {
    return me(e).isDirectory() ? "present" : "gone";
  } catch (o) {
    let t = E(o);
    return t === "ENOENT" || t === "ENOTDIR" ? "gone" : "inaccessible";
  }
}
function bRt(e) {
  if (e.reason === "pin-is-own-launch-tree")
    return `Error: ${X_(e.message)} The worktree binding is kept.
`;
  return e.poisoned
    ? `Error: cannot resume into worktree ${X_(e.worktreePath)}: ${X_(e.message)} This session was not started.
`
    : `Error: could not verify worktree ${X_(e.worktreePath)} for this resume, so the resume was aborted rather than continuing without isolation. This is usually transient \u2014 the worktree binding is kept; re-run the command to retry.
`;
}
function wRt(e) {
  return `Notice: the worktree ${X_(e.worktreePath)} for this session no longer exists; continuing in the current directory without worktree isolation. The worktree binding has been cleared.
`;
}
function uRe(e) {
  if (e.reason === "worktree-gone")
    return `Your worktree ${X_(e.worktreePath)} no longer exists, so this session is working in the current directory without worktree isolation. The worktree binding has been cleared.`;
  if (e.reason === "pin-is-own-launch-tree")
    return `Could not re-enter your worktree ${X_(e.worktreePath)}: ${X_(e.message)} The worktree binding is kept.`;
  return e.poisoned
    ? `Did not re-enter your worktree ${X_(e.worktreePath)}: ${X_(e.message)} This session's worktree binding has been cleared; you are working in the current directory without worktree isolation.`
    : `Could not verify your worktree ${X_(e.worktreePath)} this time, so this session is working in the current directory without worktree isolation. The worktree binding is kept and a later --resume will retry it. If this keeps happening, the worktree's git metadata may need repair.`;
}
function ZKt(e) {
  if (Qi(e) || vu(e) || vu(Y.normalize(e)))
    return (
      n("[sessionRestore] transcript path is a network/NT-namespace path \u2014 not chdir-ing", { level: "warn" }), !0
    );
  return !1;
}
function SK(e, o, t, r) {
  let i = he(o, t, r);
  return e.record(i), i;
}
function he(e, o, t) {
  let r = ha();
  if (r && t?.preserveBinding !== !0) return XA(r), null;
  if (!e) {
    if (e === null)
      return (
        s("tengu_worktree_resume_root_rejected", { reason: w("worktree-exited-resume"), poisoned: w("false") }),
        n(
          "[worktree] resuming a session whose worktree record was cleared (exited or scrubbed): running without isolation",
        ),
        null
      );
    if (!o || ee() === o) return null;
    if (ZKt(o)) return null;
    if (CP(o)) return n("[worktree] resume: the recorded project path has a network spelling; staying put"), null;
    try {
      qu(o);
    } catch {
      return null;
    }
    if ((Lc(o), Xle(o, ySe(R7)))) yS(ee());
    return Z7(), yG("resume"), va.cache.clear?.(), ah(t?.storageV5), iU(), lfe(), Oa()?.refreshGitBranch?.(), null;
  }
  let i = t?.preserveBinding === !0;
  if (ZKt(e.worktreePath) || ns(e.worktreePath) || Kg(_A, e.worktreePath) !== void 0) {
    if (!i) XA(null);
    return (
      s("tengu_worktree_resume_root_rejected", { reason: w("network-spelled-pin"), poisoned: w("true") }),
      {
        worktreePath: e.worktreePath,
        reason: "invalid-linked-worktree",
        message: "its recorded path has a network spelling, which can never be a local isolation worktree.",
        poisoned: !0,
      }
    );
  }
  let d = z(e.worktreePath);
  if (d === "gone") {
    if (!i) XA(null);
    return (
      s("tengu_worktree_resume_root_rejected", { reason: w("worktree-gone"), poisoned: w("true") }),
      {
        worktreePath: e.worktreePath,
        reason: "worktree-gone",
        message: "the worktree directory no longer exists",
        poisoned: !0,
      }
    );
  }
  if (d === "inaccessible")
    return (
      n(`[worktree] could not examine ${e.worktreePath} on resume; keeping the binding`, { level: "error" }),
      s("tengu_worktree_resume_root_rejected", { reason: w("unverifiable"), poisoned: w("false") }),
      {
        worktreePath: e.worktreePath,
        reason: "unverifiable",
        message: "the worktree directory could not be examined right now",
        poisoned: !1,
      }
    );
  let l = t?.liveLaunchDir ?? R7,
    u = ZFt(ee(), e.worktreePath),
    m = S3n(e.worktreePath, Fb(e.originalCwd), te([G(l), ...Fb(l), G(R7), ...Fb(R7)]), {
      declineSelfOwningPinUnderLiveRoot: !0,
    });
  if (!m.ok) {
    let y = m.reason !== "unverifiable" && m.reason !== "pin-is-own-launch-tree";
    if (
      (n(`[worktree] declining to resume into ${e.worktreePath} (${m.reason}): ${m.message}`, { level: "error" }),
      s("tengu_worktree_resume_root_rejected", { reason: c(m.reason), poisoned: w(y ? "true" : "false") }),
      y)
    ) {
      if (!i) XA(null);
      if (u) {
        let k = q(e.worktreePath),
          h = z(k) === "present" ? k : e.originalCwd;
        if (ZFt(h, e.worktreePath))
          return { worktreePath: e.worktreePath, reason: m.reason, message: m.message, poisoned: y };
        try {
          qu(h), Lc(h);
          let v = (P) => VB(P, e.worktreePath) === "same",
            f = q4(e.worktreePath),
            p = f !== null ? [f] : [],
            S = [...Fb(l), ...p].filter((P) => !v(P));
          if (Xle(h, S, { requireCovered: !0 })) yS(h);
          Z7(), yG("resume"), lfe(), va.cache.clear?.(), ah(t?.storageV5), iU(), Oa()?.refreshGitBranch?.();
        } catch {}
      }
    }
    return { worktreePath: e.worktreePath, reason: m.reason, message: m.message, poisoned: y };
  }
  try {
    qu(e.worktreePath);
  } catch (y) {
    let k = E(y);
    if (k === "ENOENT" || k === "ENOTDIR") {
      if (!i) XA(null);
      return (
        s("tengu_worktree_resume_root_rejected", { reason: w("worktree-gone"), poisoned: w("true") }),
        {
          worktreePath: e.worktreePath,
          reason: "worktree-gone",
          message: "the worktree directory no longer exists",
          poisoned: !0,
        }
      );
    }
    return (
      s("tengu_worktree_resume_root_rejected", { reason: w("unverifiable"), poisoned: w("false") }),
      {
        worktreePath: e.worktreePath,
        reason: "unverifiable",
        message: "the worktree directory could not be entered right now",
        poisoned: !1,
      }
    );
  }
  return (
    Lc(e.worktreePath),
    yS(ee()),
    kIe({ ...e, liveLaunchAnchor: l }),
    Z7(),
    yG("resume"),
    va.cache.clear?.(),
    ah(t?.storageV5),
    iU(),
    Oa()?.refreshGitBranch?.(),
    null
  );
}
function e8t(e, o) {
  let t = ha();
  if (!t) return;
  if ((kIe(null), Z7(), yG("resume"), t.worktreePath === e)) {
    va.cache.clear?.(), ah(o);
    return;
  }
  if (ZKt(t.originalCwd)) return;
  if (CP(t.originalCwd)) {
    n("[worktree] exit: the recorded original cwd has a network spelling; staying put");
    return;
  }
  try {
    qu(t.originalCwd);
  } catch {
    return;
  }
  Lc(t.originalCwd);
  let r = t.liveLaunchAnchor;
  if (
    r === void 0 ||
    Xle(t.originalCwd, ySe(r, t.worktreePath), {
      requireCovered: !0,
      coveredWitnesses: nPe(r, t.worktreePath),
      extraCoveredRoots: (() => {
        let i = q4(t.worktreePath);
        return i !== null ? [i] : [];
      })(),
    })
  )
    yS(ee());
  va.cache.clear?.(), ah(o), iU(), Oa()?.refreshGitBranch?.();
}
async function Pet(e, o, t) {
  iRe(t.session.host);
  let r;
  if (((r = t.modeApi?.matchSessionMode(e.mode)), r)) e.messages.push(Dt(r, "warning"));
  let { adoptedSessionId: i, effectiveFork: d } = H_t(o.sessionIdOverride ?? e.sessionId, o.forkSession);
  if (i) Gp(i, "resume", o.transcriptPath ? q(o.transcriptPath) : null), await Iet(t.session, t.storageV5), await JL();
  if (d) {
    if (
      (await ite(e, { stripWorktreeSession: !0, stripRelocatedCwd: !0, storageV5: t.storageV5 }),
      e.contentReplacements?.length)
    )
      await zSe(e.contentReplacements, void 0, t.storageV5);
  } else rH(e, { storageV5: t.storageV5 });
  if ((xye(e), !d)) {
    let R = SK(dL.of(t.session.host), e.worktreeSession, void 0, { storageV5: t.storageV5 });
    if (R) e.messages.push(Dt(uRe(R), "warning"));
    if (O() && t.storageV5 !== void 0) await g9(t.storageV5);
    else m9();
  }
  let l = await eQ(e.projectPath, t.storageV5),
    { agentDefinition: u, agentType: m } = J4(e.agentSetting, t.mainThreadAgentDefinition, t.agentDefinitions, {
      sessionAgentDefinitions: l,
      sessionCwd: e.projectPath,
      onResolveMiss: (R) => e.messages.push(Dt(R, "warning")),
    }),
    y = e.permissionMode,
    k = !1,
    h = await zcr(y, t.permissionModeCliSet || !1),
    v = null;
  if (d) cRe(e.messages);
  let f = tQ(e.messages, t.initialState.mainLoopModel, (R) => e.messages.push(Dt(R, "warning"))),
    p = f ? nQ(e.messages, f, d, t.storageV5, t.credentials) : void 0;
  rQ(e.messages, d), dRe(e.messages);
  let S;
  if (h) {
    let { transitionPermissionMode: R } = await import("/$bunfs/root/chunk-npecenj8.js"),
      x = t.initialState.toolPermissionContext;
    try {
      S = { ...R(x.mode, h, x), mode: h };
    } catch (oe) {
      n(`[sessionRestore] transitionPermissionMode rejected restored mode '${h}': ${oe}`);
    }
  }
  ate(t.modeApi?.isCoordinatorMode() ? "coordinator" : "normal");
  let P = o.includeAttribution ? Gcr(e) : void 0,
    C = aRe(e.agentName, e.agentColor),
    D = t.initialState.standaloneAgentContext ? { ...C, ...t.initialState.standaloneAgentContext } : C;
  Zce(D?.name, t.storageV5, { autoOnly: !e.customTitle && !t.initialState.standaloneAgentContext?.name });
  let Z = await Kcr(!!r, t.currentCwd, t.cliAgents, t.agentDefinitions, t.storageV5),
    F = t.initialState.initialMessage;
  if (
    a.CLAUDE_CODE_RESUME_INTERRUPTED_TURN &&
    e.turnInterruptionState?.kind === "interrupted_prompt" &&
    Gh(e.turnInterruptionState.message.origin)
  )
    n("[sessionRestore] Auto-resuming interrupted turn for bg crash-respawn"),
      W3e("repl_restore", e.turnInterruptionState.message),
      TIe(e.messages, e.turnInterruptionState.message),
      (F = { message: e.turnInterruptionState.message });
  let T = t.initialState,
    N = nD();
  return (
    import.meta.require("/$bunfs/root/chunk-qv41ywnn.js").restoreGoalFromTranscript(
      e.messages,
      (R) => {
        T = R(T);
      },
      N,
    ),
    {
      messages: e.messages.filter(
        (R) => !(R.type === "system" && (R.subtype === "bridge_status" || R.subtype === "cloud_session_status")),
      ),
      fileHistorySnapshots: e.fileHistorySnapshots,
      contentReplacements: e.contentReplacements,
      agentName: e.agentName,
      agentColor: e.agentColor === "default" ? void 0 : e.agentColor,
      restoredAgentDef: u,
      initialState: {
        ...T,
        initialMessage: F,
        ...(!d &&
          e.bridgeSessionId &&
          !(T.replBridgeEnabled && !T.replBridgeOutboundOnly) && { replBridgeEnabled: !0, replBridgeOutboundOnly: !1 }),
        ...(e.endedByModel ? { endedByModel: !0 } : {}),
        ...(m && { agent: m }),
        ...(v && { attentionBudget: v }),
        ...(p && { mainLoopModel: p }),
        ...(P && { attribution: P }),
        ...(D && { standaloneAgentContext: D }),
        ...(S && { toolPermissionContext: S }),
        agentDefinitions: Z,
      },
      sessionHooks: N,
    }
  );
}
function dRe(e) {}
export {
  iRe,
  _K,
  oDn,
  SRt,
  jcr,
  Xwr,
  Wcr,
  Iet,
  qcr,
  iDn,
  Ywr,
  Jwr,
  Iie,
  YKt,
  sRe,
  Gcr,
  aRe,
  J4,
  eQ,
  JKt,
  zcr,
  lRe,
  tQ,
  QKt,
  Vcr,
  cRe,
  nQ,
  rQ,
  Kcr,
  yK,
  bRt,
  wRt,
  uRe,
  ZKt,
  SK,
  e8t,
  Pet,
  dRe,
};
