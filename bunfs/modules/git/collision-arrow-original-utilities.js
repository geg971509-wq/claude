// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { ct } from "/$bunfs/root/chunk-pc41wsq4.js";
import { K, Se, TU, AU, Ey, RR } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Xt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { R, l } from "/$bunfs/root/chunk-ypdw393e.js";
import { vt, co, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { k, ce, zo } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { wp, h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { mo } from "/$bunfs/root/chunk-4sw5yxwb.js";
import { Sr, ha, YMe, T$, nS, wt } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { Hn, Vr, m0 } from "/$bunfs/root/chunk-rgw52f13.js";
import { Zt, Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { gc } from "/$bunfs/root/chunk-6k63g5t6.js";
import { Je } from "/$bunfs/root/chunk-988p40e0.js";
import { R_ } from "/$bunfs/root/chunk-1yr12dqr.js";
import { DT } from "/$bunfs/root/chunk-v7yhn7cf.js";
import { Ln, Iye, e4e, $G, Xc, mUt, Wb, hl, Yc, d2, hce, nM, gk, oH, Yp, il } from "/$bunfs/root/chunk-zze8764r.js";
import { qX } from "/$bunfs/root/chunk-83h0j7w2.js";
import { xF } from "/$bunfs/root/chunk-d5s7a9by.js";
import { lC } from "/$bunfs/root/chunk-50g10fz0.js";
import { uX } from "/$bunfs/root/chunk-krety1hw.js";
import { b2, tdn, ndn, qb, cr, xs, fr, iM, d_ } from "/$bunfs/root/chunk-wn1jrcrk.js";
import { cy } from "/$bunfs/root/chunk-hkzwg35z.js";
import { l1, tge, Lkt } from "/$bunfs/root/chunk-ymw0s06y.js";
import { VQ } from "/$bunfs/root/chunk-9r67t977.js";
import { p1, iB, f1, $P } from "/$bunfs/root/chunk-wfer9wy8.js";
import { ge } from "/$bunfs/root/chunk-c3bffkxg.js";
import { t } from "/$bunfs/root/chunk-he2phymk.js";
import { W, Xn } from "/$bunfs/root/chunk-ht28m404.js";
import { me } from "/$bunfs/root/chunk-489c3cyq.js";
import { Iu } from "/$bunfs/root/chunk-620fbwm6.js";
import { Vf } from "/$bunfs/root/chunk-9g7gyh01.js";
import { MP, Zj, r2e, vge, pL, $K, IQ, Rge, PQ, uYt, o2e } from "/$bunfs/root/chunk-ph2x1s8t.js";
import { Vj } from "/$bunfs/root/chunk-4ffxnewf.js";
import { wn } from "/$bunfs/root/chunk-et3g0deq.js";
import { BK, LQ } from "/$bunfs/root/chunk-e7z75y3n.js";
import { qge } from "/$bunfs/root/chunk-c0t94ajr.js";
import { O6e } from "/$bunfs/root/chunk-q38mnpg0.js";
import { e } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { A, z, C, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { Nc } from "/$bunfs/root/chunk-r7t0evh2.js";
import { Fs } from "/$bunfs/root/chunk-mpg6r2j0.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
import { randomUUID as Ir } from "crypto";
import { copyFile as Lr, mkdir as Nr, rm as Dr } from "fs/promises";
F();
import { dirname as Wr, join as jr } from "path";
var Jr = /^(.*\S) \((\d{1,6})\)$/,
  qr = 1500;
function hr(r) {
  let o = Jr.exec(r);
  return o ? { base: o[1], generation: Number(o[2]) } : { base: r, generation: 1 };
}
function Ur(r, o) {
  let a = Sr(r),
    { base: m } = hr(r),
    f = Sr(m),
    w = new Set(),
    S = 1;
  for (let P of o) {
    w.add(Sr(P));
    let i = hr(P);
    if (Sr(i.base) === f) S = Math.max(S, i.generation);
  }
  if (!w.has(a)) return r;
  let b = co(zo(m));
  for (let P = S + 1; ; P++) {
    let i = ` (${P})`,
      x = `${ce(b, DT - i.length)}${i}`;
    if (!w.has(Sr(x))) return x;
  }
}
async function Rkt(r, o) {
  if (!r.name) return r;
  let a;
  try {
    a = (await Xt(d_(void 0, o), qr, "seed name settle")).flatMap((w) => (w.state.name ? [w.state.name] : []));
  } catch (f) {
    return n(`[background] seed name settle skipped: ${l(f)}`), r;
  }
  let m = Ur(r.name, a);
  if (m === r.name) return r;
  return { ...r, name: m, nameSource: "collision" };
}
function ie(r) {
  if (r === 0) return "";
  return `Automatic replies to ${r === 1 ? "Artifact comments" : `comments on ${r} Artifacts`} continue in the background session. You'll see a summary of the replies when you return.`;
}
function te({ running: r, finished: o, rerun: a }) {
  if (r === 0) return "";
  let m = o > 0 ? `; ${o} finished ${k(o, "subagent")} ${o === 1 ? "is" : "are"} kept` : "",
    f = a > 0 ? `; ${a} that finished after a failed one ${a === 1 ? "runs" : "run"} again` : "";
  return `${r} running workflow ${k(r, "subagent")} ${r === 1 ? "restarts" : "restart"} from the beginning${m}${f}.`;
}
function Ae(r, o) {
  if (r) return "Background anyway (tasks will be stopped)";
  let a = o.running + o.rerun;
  if (o.running > 0) return `Background anyway (${a} ${k(a, "subagent")} ${a === 1 ? "restarts" : "restart"})`;
  return "Background";
}
function g7t(Lo) {
  let Ce = _(20),
    { summary: br, carryOverCount: _r, monitorParkCount: Cr, workflowAgents: be, onConfirm: Ar, onCancel: _e } = Lo;
  const Rr = br ? `${br} running \u2014 they will be stopped.` : "";
  let Ge;
  if (Ce[0] !== Cr) (Ge = ie(Cr)), (Ce[0] = Cr), (Ce[1] = Ge);
  else Ge = Ce[1];
  const Pr = _r > 0 ? `${_r} ${_r === 1 ? "task carries" : "tasks carry"} over to the background session.` : "";
  let Xe;
  if (Ce[2] !== be) (Xe = te(be)), (Ce[2] = be), (Ce[3] = Xe);
  else Xe = Ce[3];
  let Gr;
  if (Ce[4] !== Rr || Ce[5] !== Ge || Ce[6] !== Pr || Ce[7] !== Xe)
    (Gr = [Rr, Ge, Pr, Xe].filter(Boolean)), (Ce[4] = Rr), (Ce[5] = Ge), (Ce[6] = Pr), (Ce[7] = Xe), (Ce[8] = Gr);
  else Gr = Ce[8];
  const vr = Gr.join(" "),
    $r = br !== "";
  let ze;
  if (Ce[9] !== $r || Ce[10] !== be) (ze = Ae($r, be)), (Ce[9] = $r), (Ce[10] = be), (Ce[11] = ze);
  else ze = Ce[11];
  let Ke;
  if (Ce[12] !== _e || Ce[13] !== Ar || Ce[14] !== ze)
    (Ke = e(wn, { confirmLabel: ze, cancelLabel: "Stay", onConfirm: Ar, onCancel: _e })),
      (Ce[12] = _e),
      (Ce[13] = Ar),
      (Ce[14] = ze),
      (Ce[15] = Ke);
  else Ke = Ce[15];
  let Xr;
  if (Ce[16] !== _e || Ce[17] !== vr || Ce[18] !== Ke)
    (Xr = e(me, { title: "Background this session?", subtitle: vr, onCancel: _e, children: Ke })),
      (Ce[16] = _e),
      (Ce[17] = vr),
      (Ce[18] = Ke),
      (Ce[19] = Xr);
  else Xr = Ce[19];
  return Xr;
}
function ho(at) {
  return at.sessionEffort;
}
function bo(it) {
  return it.toolPermissionContext.additionalWorkingDirectories;
}
function So(st) {
  return st.toolPermissionContext.alwaysAllowRules;
}
function _o(dt) {
  return dt.toolPermissionContext.alwaysDenyRules;
}
function Co(lt) {
  return lt.tasks;
}
var uTr = async (r, o, a) => {
    if (wt()) return s("tengu_background_already_bg", {}), r(), Vj(), null;
    if (Xc())
      return (
        r("Cannot background \u2014 session persistence is disabled, so the forked job would have nothing to resume."),
        null
      );
    let m = (a ?? "").trim(),
      f = gQ(o.messages, m);
    if (f === null) return r("Nothing to background yet \u2014 send a message first."), null;
    return e(Hr, { onDone: r, prompt: m, seed: f, messages: o.messages, isMidTurn: o.isMidTurn ?? false });
  },
  ko = 3000,
  kkt = "Forking is not available in coordinator sessions. Use /branch instead.";
async function Zme(r, o, a, m, f, w, S, b, P, i) {
  if (i?.keepParent && Fs()) return { ok: false, error: kkt, queued: false, reason: "coordinator_mode" };
  let x = AU(),
    T = i?.keepParent ? ce(co(zo(o ?? "")), 60) : "",
    E = r.name ? `${r.name} ${R_}${T ? ` ${T}` : ""}` : T ? `${R_} ${T}` : void 0,
    N = i?.keepParent ? { ...r, name: E, nameSource: E ? "auto" : void 0 } : r,
    D = tdn(),
    j = qX(a),
    X = Array.from(f.values())
      .filter((B) => B.source === "session" && b2(B.path))
      .map((B) => B.path),
    re = w.session ?? [],
    De = S.session ?? [],
    oe = re.length > 0 || De.length > 0 ? { allow: [...re], deny: [...De] } : void 0,
    U = (w.cliArg ?? []).filter(ndn),
    ue = (S.cliArg ?? []).filter(b2),
    M = ha(),
    ne = !i?.keepParent && Boolean(M && !M.enteredExisting),
    Q = (() => {
      if (!i?.keepParent) return null;
      if (M) return { to: M.originalCwd, from: M.enteredExisting ? "entered" : "owned" };
      if (!m0(Se())) return null;
      let B = Vr(Se());
      return B && Hn(B) === B ? { to: B, from: "launched" } : null;
    })(),
    We = Q?.to,
    v = Je().worktree?.bgIsolation === "none",
    pe = (() => {
      if (!i?.keepParent || Q !== null) return;
      if (Hn(Se()) === null) return;
      return m0(Se()) || v ? "this-tree" : "own-worktree";
    })();
  if (mUt() === null && P.length > 0 && RR().transcriptSource !== "ccr-api")
    await Wb([...P], void 0, void 0, P, i?.storageV5);
  let H = mUt();
  Iye(void 0, i?.storageV5);
  try {
    if (i?.keepParent) await $P(P, i.storageV5);
    await Xt(hl(), i?.keepParent ? 1e4 : 2000, "flush timeout");
  } catch {
    if (i?.keepParent)
      return (
        s("tengu_background_spawn_failed", { via: c(b) }),
        {
          ok: false,
          error: "Couldn't fork \u2014 this conversation is still being saved. Try again in a moment.",
          queued: false,
          reason: "flush_incomplete",
        }
      );
  }
  let qe = H,
    ke = i?.providedSessionId,
    we;
  if (i?.keepParent && H !== null) {
    (ke ??= Ir()), (we = ke.slice(0, 8));
    try {
      qe = await hur(H, we, i.storageV5);
    } catch (B) {
      return (
        await eLn(we, i.storageV5),
        s("tengu_background_spawn_failed", { via: c(b) }),
        { ok: false, error: `Couldn't fork \u2014 ${l(B)}`, queued: false, reason: "snapshot_copy_failed" }
      );
    }
  }
  let ye = i?.keepParent ? TU() : {},
    Ue =
      i?.keepParent && Q
        ? `This conversation was forked out of ${M?.worktreePath ?? Se()}${M?.worktreeBranch ? ` (branch ${M.worktreeBranch})` : ""}, a linked worktree the original session is still working in \u2014 never edit files, run commands, or enter that worktree with ${lC}. You are in ${Q.to}${v ? "" : `; before making code changes, create a new worktree of your own with ${lC} instead of reusing the original's${M?.worktreeBranch ? `, and if the task builds on the original's work, base your new branch on ${M.worktreeBranch} rather than checking that branch out (it stays checked out in the original's worktree)` : ""}`}.`
        : pe === "own-worktree"
          ? `This conversation was forked from a session that is still working in this checkout (${Se()}). Before making code changes, create a new worktree of your own with ${lC} so your edits don't land where the original session is editing.`
          : void 0,
    kr = [
      ...(ye.appendSystemPrompt ? [ye.appendSystemPrompt] : []),
      ...(Ue !== void 0 && !(ye.appendSystemPrompt ?? "").includes(Ue) ? [Ue] : []),
    ],
    wr = [
      ...(qe !== null ? ["--resume", qe, "--fork-session"] : []),
      ...(i?.replyOnResume ? ["--reply-on-resume"] : []),
      ...(i?.keepParent ? O6e(x) : x),
      ...X.flatMap((B) => ["--add-dir", B]),
      ...U.flatMap((B) => ["--allowed-tools", B]),
      ...ue.flatMap((B) => ["--disallowed-tools", B]),
      ...(D ? ["--model", D] : []),
      ...(j !== void 0 ? ["--effort", j] : []),
      "--permission-mode",
      m,
      ...qb("--agent", ye.agent),
      ...qb("--agents", ye.agents),
      ...qb("--name", i?.keepParent ? void 0 : i?.workerName),
      ...qb(
        "--append-system-prompt",
        kr.length > 0
          ? kr.join(`

`)
          : void 0,
      ),
      ...(o ? ["--", o] : []),
    ],
    yr = P.at(-1)?.timestamp,
    V = await l1(
      wr,
      ke,
      "repl",
      We ?? M?.worktreePath ?? Se(),
      {
        ...N,
        ...(i?.keepParent && { bgIsolation: "default" }),
        ...(i?.keepParent &&
          yr !== void 0 && { forkSourceAlive: true, forkBoundaryAt: yr, forkSessionId: ke, forkParentSessionId: K() }),
        worktree: ne
          ? { path: M.worktreePath, branch: M.worktreeBranch, hookBased: M.hookBased ?? false, originCwd: M.originalCwd }
          : void 0,
        sessionPermissionRules: oe,
        memoryToggledOff: Ey() || void 0,
        inFlight: i?.taskFreeInFlight,
      },
      i?.extraEnv,
      void 0,
      i?.storageV5,
    ).catch((B) => ({
      ok: false,
      error: `Couldn't ${i?.keepParent ? "fork" : "background"} \u2014 ${l(B)}`,
      reason: void 0,
    }));
  if (!V.ok) {
    if ((s("tengu_background_spawn_failed", { via: c(b) }), we !== void 0 && !V.alive)) eLn(we, i?.storageV5);
    let B = false;
    if (b === "left_arrow" && i?.providedSessionId !== void 0 && H !== null && !V.alive) {
      let je = cr(i.providedSessionId.slice(0, 8)),
        he = await fr(je, i.storageV5);
      if (he)
        B = await _ur({
          sessionFile: H,
          forkSessionId: i.providedSessionId,
          jobDir: je,
          prev: he,
          forkArgs: wr,
          storageV5: i.storageV5,
        });
      if (B && M) {
        if (ne && !M.hookBased) await e4e(M.worktreePath, M.originalCwd);
        YMe(null), T$();
      }
    }
    if (b === "left_arrow")
      if (B) g("repl_background_fork", "queued_for_later");
      else p("repl_background_fork", "spawn_failed");
    return { ok: false, error: V.error, queued: B, reason: V.reason, alive: V.alive };
  }
  if ((s("tengu_background", { via_flag: false, via: c(b) }), b === "left_arrow")) y("repl_background_fork");
  if (M && !i?.keepParent) {
    if (ne && !M.hookBased) await e4e(M.worktreePath, M.originalCwd);
    YMe(null), T$();
  }
  if (N.name === void 0 && V.sessionId && !i?.keepParent) {
    let B = V.short,
      je = qge(il([...P]), AbortSignal.timeout(ko), { credentials: i?.credentials })
        .then((he) => (he ? iM(B, he, "auto", i?.storageV5) : void 0))
        .catch(() => {});
    if (b === "command") vt(() => je);
  }
  return {
    ok: true,
    short: V.short,
    sessionId: V.sessionId ?? ke,
    handedOff: ne,
    hadWorktree: M !== null,
    relocatedTo: We,
    relocatedFrom: Q?.from,
    name: N.name,
    rosterName: N.name || N.intent || V.short,
    editsIn: pe,
  };
}
var Or = ["tmp", "parent-transcript.jsonl"];
async function hur(r, o, a) {
  let m = jr(cr(o), ...Or),
    f = Nc(r, a);
  if (f !== void 0 && Zt(o)) {
    let w = await f.backend.copy(f.key, Te.job(o, [...Or]));
    if (!w.ok) {
      let S = w.error.code,
        b = "telemetryCode" in w.error ? w.error.telemetryCode : void 0;
      throw new R(`snapshot copy failed: ${S}${b === void 0 ? "" : ` ${b}`}`, "snapshot copy failed");
    }
    return m;
  }
  return await Nr(Wr(m), { recursive: true, mode: 448 }), await Lr(r, m), m;
}
async function eLn(r, o) {
  if (o !== void 0 && Zt(r)) {
    await o.deleteScope({ namespace: "job", jobId: r }).catch(() => {});
    return;
  }
  await Dr(cr(r), { recursive: true, force: true }).catch(() => {});
}
async function _ur(r) {
  let { sessionFile: o, forkSessionId: a, jobDir: m, prev: f, forkArgs: w, storageV5: S } = r,
    b = jr(Wr(o), `${a}.jsonl`);
  return wo(o, b, S)
    .then(() =>
      xs(
        m,
        {
          ...f,
          state: "failed",
          tempo: "idle",
          needs: void 0,
          block: void 0,
          inFlight: void 0,
          detail: "couldn't start in the background \u2014 press Enter to retry",
          linkScanPath: b,
          respawnFlags: uX(Lkt(w)),
          updatedAt: new Date().toISOString(),
        },
        S,
      ).catch(async (P) => {
        throw (await yo(b, S), P);
      }),
    )
    .then(
      () => true,
      (P) => (h(P), false),
    );
}
async function wo(r, o, a) {
  let m = Nc(r, a),
    f = Nc(o, a);
  if (m !== void 0 && f !== void 0) {
    let w = await m.backend.copy(m.key, f.key);
    if (!w.ok) {
      await f.backend.delete(f.key).catch(() => {});
      let S = w.error.code,
        b = "telemetryCode" in w.error ? w.error.telemetryCode : void 0;
      throw new R(`rescue copy failed: ${S}${b === void 0 ? "" : ` ${b}`}`, "rescue copy failed");
    }
    return;
  }
  await Lr(r, o);
}
async function yo(r, o) {
  let a = Nc(r, o);
  if (a !== void 0) {
    await a.backend.delete(a.key).catch(() => {});
    return;
  }
  await Dr(r, { force: true }).catch(() => {});
}
async function yur(r, o, a) {
  let m = cr(r),
    f = O() && a !== void 0 ? a : void 0;
  if (f === void 0) await Nr(m, { recursive: true, mode: 448 });
  await vge(m, o, { parent: "create" }, f);
}
function fe(r) {
  let o =
      r.frameLiveLost > 0
        ? `
Couldn't move ${r.frameLiveLost} ${k(r.frameLiveLost, "Artifact comment monitor")} to the background session, so automatic replies stopped. Publish ${r.frameLiveLost === 1 ? "the Artifact" : "each Artifact"} again to turn them back on.`
        : "",
    a =
      r.ok && r.adopted.adopted_frame_live > 0
        ? `
${ie(r.adopted.adopted_frame_live)}`
        : "";
  return o + a;
}
async function Hkt(r) {
  let o = await r2e(r.tasks, r.queue),
    a;
  if (o) {
    a = Ir();
    let P = false;
    try {
      await yur(a.slice(0, 8), o.payload, r.storageV5), (P = true), await o.checkpointAgents(r.taskRegistry);
    } catch {
      if (((a = void 0), o.payload.frameLive !== void 0))
        g("artifact_live_subscribe", P ? "consent_carry_checkpoint_failed" : "consent_carry_write_failed");
    }
  }
  let m = await p1(
      r.messages,
      "background_handoff",
      { responseStreaming: r.responseStreaming ?? r.isMidTurn },
      r.storageV5,
    ),
    f = await Rkt(r.seed, r.storageV5),
    w = f.name !== r.seed.name ? f.name : void 0,
    S = await Zme(
      f,
      r.prompt,
      r.sessionEffort,
      r.permissionMode,
      r.additionalWorkingDirectories,
      r.alwaysAllowRules,
      r.alwaysDenyRules,
      "command",
      r.messages,
      {
        replyOnResume: r.isMidTurn,
        providedSessionId: a,
        workerName: w,
        taskFreeInFlight: o && a && uYt(o.payload) ? void 0 : { tasks: 0, queued: 0, kinds: [] },
        storageV5: r.storageV5,
        credentials: r.credentials,
      },
    ).catch((P) => {
      throw (VQ(), P);
    });
  if (S.ok) {
    if (o && a) o.disown(r.taskRegistry);
    return {
      ...S,
      adopted: o2e(a ? o?.payload : null),
      frameLiveLost: a === void 0 ? (o?.payload.frameLive?.length ?? 0) : 0,
    };
  }
  if (a) o?.abandon();
  let b = o?.payload.frameLive?.length ?? 0;
  if (r.exitsAfterward && a && b > 0) g("artifact_live_subscribe", "adopt_spawn_failed");
  return {
    ok: false,
    error: f1(S.error, m, { exitsAfterward: r.exitsAfterward }),
    frameLiveLost: r.exitsAfterward ? b : 0,
  };
}
function xkt(r) {
  return cy() && !wt() && !Xc() && BK() && gQ(r, "") !== null;
}
function Ltt(Yn) {
  let Kr = _(11),
    { messages: Ve, isMidTurn: Qe, responseStreaming: Ye } = Yn,
    Ze = Xn(),
    er = Vf(),
    { storageV5: rr, credentials: or } = ge(),
    nr = Iu(),
    zr = C(false),
    Qr,
    Yr;
  if (
    Kr[0] !== or ||
    Kr[1] !== Qe ||
    Kr[2] !== Ve ||
    Kr[3] !== nr ||
    Kr[4] !== Ye ||
    Kr[5] !== rr ||
    Kr[6] !== Ze ||
    Kr[7] !== er
  )
    (Qr = () => {
      if (zr.current) {
        return;
      }
      zr.current = true;
      let Zr = gQ(Ve, "");
      if (Zr === null) {
        p("bg_exit_dialog_background", "no_seed"),
          Ln(0, "prompt_input_exit", { finalMessage: "Nothing to background \u2014 exiting." });
        return;
      }
      (async () => {
        let Y = Ze.getState();
        let Tr = pL(Y.tasks);
        let Zn = PQ(Y.tasks, Tr);
        let Mr = LQ(
          gc(Y.tasks, (eo) => IQ(eo, Tr) || MP(eo)),
          { cronFilter: (et) => !$K(et, Tr) },
        );
        let Re = await Hkt({
          seed: Zr,
          prompt: null,
          messages: Ve,
          exitsAfterward: true,
          isMidTurn: Qe,
          responseStreaming: Ye,
          sessionEffort: Y.sessionEffort,
          permissionMode: $G(Y),
          additionalWorkingDirectories: Y.toolPermissionContext.additionalWorkingDirectories,
          alwaysAllowRules: Y.toolPermissionContext.alwaysAllowRules,
          alwaysDenyRules: Y.toolPermissionContext.alwaysDenyRules,
          tasks: Y.tasks,
          taskRegistry: er,
          queue: nr,
          storageV5: rr,
          credentials: or,
        });
        if (Re.ok) {
          y("bg_exit_dialog_background");
          let rt =
            Mr.count > 0
              ? `
${Mr.summary} couldn't be moved and ${Mr.count === 1 ? "was" : "were"} stopped.`
              : "";
          let ro = te(Zn);
          await Ln(0, "prompt_input_exit", {
            suppressResumeHint: true,
            finalMessage:
              tge(Re.short, Re.handedOff ? "(worktree handed off)" : void 0) +
              rt +
              (ro
                ? `
${ro}`
                : "") +
              fe(Re),
          });
        } else
          p("bg_exit_dialog_background", "spawn_failed"),
            await Ln(0, "prompt_input_exit", { finalMessage: Re.error + fe(Re) });
      })();
    }),
      (Yr = [Ve, Qe, Ye, Ze, er, rr, or, nr]),
      (Kr[0] = or),
      (Kr[1] = Qe),
      (Kr[2] = Ve),
      (Kr[3] = nr),
      (Kr[4] = Ye),
      (Kr[5] = rr),
      (Kr[6] = Ze),
      (Kr[7] = er),
      (Kr[8] = Qr),
      (Kr[9] = Yr);
  else (Qr = Kr[8]), (Yr = Kr[9]);
  A(Qr, Yr);
  let oo;
  if (Kr[10] === d) (oo = e(t, { dimColor: true, children: "Moving to background\u2026" })), (Kr[10] = oo);
  else oo = Kr[10];
  return oo;
}
function gQ(r, o, a = "(backgrounded)") {
  let m = o,
    f = false,
    w;
  for (let x = r.length - 1; x >= 0; x--) {
    let T = r[x];
    if (T.type === "assistant" && w === void 0) {
      let E = oH(T);
      if (E) w = ce(E.replace(/\s+/g, " ").trim(), 120);
    }
    if (T.type === "user" && !T.isMeta && !gk(T)) {
      let E = Yp(T)?.trim();
      if (E && nM(E)) {
        if (E.startsWith(`<${wp}>`)) f = true;
        continue;
      }
      if (((f = true), !m && E)) m = E;
    }
    if (f && m && w !== void 0) break;
  }
  if (!f && !o) return null;
  let S = Yc(K()),
    b = d2(K()),
    P = nS(),
    i = hce();
  return {
    intent: ce(m || a, 200),
    name: S ?? b,
    nameSource: S ? (P?.source === "collision" && P.name === S ? "collision" : "user") : b ? "auto" : void 0,
    color: xF(i) ? i : void 0,
    detail: w,
  };
}
function Hr(ot) {
  let L = _(78),
    { onDone: G, prompt: se, seed: Pe, messages: ve, isMidTurn: de } = ot,
    Br = ct(),
    $e = W(ho),
    Me = W($G),
    Be = W(bo),
    xe = W(So),
    Ee = W(_o),
    I = W(Co),
    Fe = Vf(),
    { storageV5: Oe, credentials: Ie } = ge(),
    Le = Iu(),
    no;
  if (L[0] !== I) (no = LQ(I)), (L[0] = I), (L[1] = no);
  else no = L[1];
  let Z = no,
    tr,
    ar,
    ir,
    sr;
  if (L[2] !== I) {
    let dr = pL(I);
    let to = Zj(I).size;
    tr = Rge(I, dr) - to;
    ar = to;
    ir = PQ(I, dr);
    sr = LQ(
      gc(I, (ao) => IQ(ao, dr) || MP(ao)),
      { cronFilter: (nt) => !$K(nt, dr) },
    );
    (L[2] = I), (L[3] = tr), (L[4] = ar), (L[5] = ir), (L[6] = sr);
  } else (tr = L[3]), (ar = L[4]), (ir = L[5]), (sr = L[6]);
  let io;
  if (L[7] !== tr || L[8] !== ar || L[9] !== ir || L[10] !== sr)
    (io = { carryOverCount: tr, monitorParkCount: ar, workflowAgents: ir, abandonable: sr }),
      (L[7] = tr),
      (L[8] = ar),
      (L[9] = ir),
      (L[10] = sr),
      (L[11] = io);
  else io = L[11];
  let { carryOverCount: ae, monitorParkCount: xr, workflowAgents: J, abandonable: q } = io,
    [le, tt] = u(q.count === 0 && J.running === 0),
    so = C(false),
    lo;
  if (
    L[12] !== q.count ||
    L[13] !== Be ||
    L[14] !== xe ||
    L[15] !== Ee ||
    L[16] !== ae ||
    L[17] !== le ||
    L[18] !== Ie ||
    L[19] !== Z.count ||
    L[20] !== de ||
    L[21] !== ve ||
    L[22] !== G ||
    L[23] !== Me ||
    L[24] !== se ||
    L[25] !== Le ||
    L[26] !== Pe ||
    L[27] !== Br ||
    L[28] !== $e ||
    L[29] !== Oe ||
    L[30] !== Fe ||
    L[31] !== I ||
    L[32] !== J
  )
    (lo = () => {
      if (!le || so.current) {
        return;
      }
      (so.current = true),
        (async () => {
          let ee = await Hkt({
            seed: Pe,
            prompt: se,
            messages: ve,
            isMidTurn: de,
            sessionEffort: $e,
            permissionMode: Me,
            additionalWorkingDirectories: Be,
            alwaysAllowRules: xe,
            alwaysDenyRules: Ee,
            tasks: I,
            taskRegistry: Fe,
            queue: Le,
            storageV5: Oe,
            credentials: Ie,
          });
          if (ee.ok)
            s("tengu_background_fork", {
              confirmed: q.count > 0 || J.running > 0,
              inflight_count: Z.count,
              carryover_count: ae,
              workflow_agent_count: J.running,
              mid_turn: de,
              had_prompt: se.length > 0,
              had_worktree: ee.hadWorktree,
              worktree_handed_off: ee.handedOff,
              ...ee.adopted,
            }),
              G(),
              await Ln(0, "prompt_input_exit", {
                suppressResumeHint: true,
                finalMessage: tge(ee.short, ee.handedOff ? "(worktree handed off)" : void 0) + fe(ee),
              });
          else
            G(
              mo(Br)
                ? iB("Couldn't start the background session (detail withheld on this connection).", ee.error)
                : ee.error,
            );
        })();
    }),
      (L[12] = q.count),
      (L[13] = Be),
      (L[14] = xe),
      (L[15] = Ee),
      (L[16] = ae),
      (L[17] = le),
      (L[18] = Ie),
      (L[19] = Z.count),
      (L[20] = de),
      (L[21] = ve),
      (L[22] = G),
      (L[23] = Me),
      (L[24] = se),
      (L[25] = Le),
      (L[26] = Pe),
      (L[27] = Br),
      (L[28] = $e),
      (L[29] = Oe),
      (L[30] = Fe),
      (L[31] = I),
      (L[32] = J),
      (L[33] = lo);
  else lo = L[33];
  let fo;
  if (
    L[34] !== Be ||
    L[35] !== xe ||
    L[36] !== Ee ||
    L[37] !== le ||
    L[38] !== Ie ||
    L[39] !== Z.count ||
    L[40] !== de ||
    L[41] !== ve ||
    L[42] !== G ||
    L[43] !== Me ||
    L[44] !== se ||
    L[45] !== Le ||
    L[46] !== Pe ||
    L[47] !== $e ||
    L[48] !== Oe ||
    L[49] !== Fe ||
    L[50] !== I
  )
    (fo = [le, $e, Me, Be, xe, Ee, Z.count, de, Pe, G, se, ve, I, Fe, Oe, Ie, Le]),
      (L[34] = Be),
      (L[35] = xe),
      (L[36] = Ee),
      (L[37] = le),
      (L[38] = Ie),
      (L[39] = Z.count),
      (L[40] = de),
      (L[41] = ve),
      (L[42] = G),
      (L[43] = Me),
      (L[44] = se),
      (L[45] = Le),
      (L[46] = Pe),
      (L[47] = $e),
      (L[48] = Oe),
      (L[49] = Fe),
      (L[50] = I),
      (L[51] = fo);
  else fo = L[51];
  if ((A(lo, fo), le)) {
    let He;
    if (L[52] === d) (He = e(t, { dimColor: true, children: "Backgrounding\u2026" })), (L[52] = He);
    else He = L[52];
    return He;
  }
  let He;
  if (L[53] !== Z.count || L[54] !== G)
    (He = () => {
      s("tengu_background_declined", { inflight_count: Z.count }), G();
    }),
      (L[53] = Z.count),
      (L[54] = G),
      (L[55] = He);
  else He = L[55];
  let Ne = He;
  const Er = q.count > 0 ? `${q.summary} will be stopped.` : "";
  let lr;
  if (L[56] !== xr) (lr = ie(xr)), (L[56] = xr), (L[57] = lr);
  else lr = L[57];
  let ur;
  if (L[58] !== ae)
    (ur = ae > 0 ? `${ae} ${k(ae, "task")} will carry over to the background session.` : ""),
      (L[58] = ae),
      (L[59] = ur);
  else ur = L[59];
  let mr;
  if (L[60] !== J) (mr = te(J)), (L[60] = J), (L[61] = mr);
  else mr = L[61];
  let uo;
  if (L[62] !== Er || L[63] !== lr || L[64] !== ur || L[65] !== mr)
    (uo = [Er, lr, ur, mr].filter(Boolean)), (L[62] = Er), (L[63] = lr), (L[64] = ur), (L[65] = mr), (L[66] = uo);
  else uo = L[66];
  const Fr = uo.join(" ");
  let gr;
  if (L[67] !== q.count || L[68] !== J)
    (gr = q.count > 0 ? `Background anyway (${q.count} ${k(q.count, "task")} will be stopped)` : Ae(false, J)),
      (L[67] = q.count),
      (L[68] = J),
      (L[69] = gr);
  else gr = L[69];
  let go;
  if (L[70] === d) (go = () => tt(true)), (L[70] = go);
  else go = L[70];
  let pr;
  if (L[71] !== Ne || L[72] !== gr)
    (pr = e(wn, { confirmLabel: gr, cancelLabel: "Stay", onConfirm: go, onCancel: Ne })),
      (L[71] = Ne),
      (L[72] = gr),
      (L[73] = pr);
  else pr = L[73];
  let po;
  if (L[74] !== Ne || L[75] !== Fr || L[76] !== pr)
    (po = e(me, { title: "Background this session?", subtitle: Fr, onCancel: Ne, children: pr })),
      (L[74] = Ne),
      (L[75] = Fr),
      (L[76] = pr),
      (L[77] = po);
  else po = L[77];
  return po;
}
export { Rkt, g7t, uTr, kkt, Zme, hur, eLn, _ur, yur, Hkt, xkt, Ltt, gQ };
