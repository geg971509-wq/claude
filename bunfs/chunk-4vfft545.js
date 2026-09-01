// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Kr, ts, K, au } from "/$bunfs/root/chunk-f9h0bg01.js";
import { g } from "/$bunfs/root/chunk-ca80fke8.js";
import { b } from "/$bunfs/root/chunk-fv016jr6.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { jr } from "/$bunfs/root/chunk-4t3vsqt7.js";
import { nl, cO } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { gc } from "/$bunfs/root/chunk-6k63g5t6.js";
import { Ure, RC, D$ } from "/$bunfs/root/chunk-tzhtxm67.js";
import { Qbt } from "/$bunfs/root/chunk-mznd09c6.js";
import { gl, im, nte, rte, vcn, Mpt, qSe, Rcn, hl, $pt, Lcn, pk, Qcn, Zcn } from "/$bunfs/root/chunk-zze8764r.js";
import { Hl } from "/$bunfs/root/chunk-c6k0ecxv.js";
import { de, EZn } from "/$bunfs/root/chunk-xgfepdf4.js";
import { i, v, _e, H, f, De, oe, N } from "/$bunfs/root/chunk-saay52v7.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
import { basename as j } from "path";
var et = { published: "published", comment: "comment" },
  L = 64,
  z = 16,
  nt = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
  rt = "",
  ot = m(() => {
    let e = f({ v: N(1), rows: De(i(), _e()) }),
      t = f({ v: v().gt(1) }),
      n = f({ stopped: De(i(), _e()) }),
      o = oe(et),
      r = i().refine((p) => Kr(p) !== null),
      d = f({
        orphans: H(_e()).transform((p) =>
          p.slice(0, z).flatMap((l) => {
            let c = r.safeParse(l);
            return c.success ? [c.data] : [];
          }),
        ),
      }),
      s = f({
        trigger_id: r,
        since: i().regex(nt),
        events: H(i())
          .max(16)
          .transform((p) =>
            te(p).flatMap((l) => {
              let c = o.safeParse(l);
              return c.success ? [c.data] : [];
            }),
          )
          .refine((p) => p.length > 0),
        unreleased: H(_e())
          .catch([])
          .transform((p) =>
            p.slice(0, z).flatMap((l) => {
              let c = r.safeParse(l);
              return c.success ? [c.data] : [];
            }),
          ),
      }),
      u = f({ at_ms: v().refine(Number.isFinite) });
    return { rowsEnvelope: e, newerEnvelope: t, stopsEnvelope: n, orphansEnvelope: d, row: s, stop: u };
  });
function E$n(e) {
  de().durable.registrySink = e;
}
function A$n() {
  de().durable.registryPublished = rt;
}
function t8() {
  if (!a.CLAUDE_CODE_REMOTE) return;
  let e = de(),
    { durable: t } = e;
  if (t.registrySink === null) return;
  let n = {},
    o = [],
    r = new Set();
  for (let c of t.pendingRestoredRows.values()) {
    let h = t.rows.get(c.slug);
    if (h === void 0 && !t.unwatchedSlugs.has(c.slug)) {
      o.push(c);
      continue;
    }
    for (let w of [c.triggerId, ...(c.unreleased ?? [])]) if (w !== h?.triggerId) r.add(w);
  }
  for (let c of [...t.rows.values(), ...o].slice(0, L))
    n[c.slug] = {
      trigger_id: c.triggerId,
      since: c.since,
      events: [...c.events],
      ...(c.unreleased !== void 0 && c.unreleased.length > 0 && { unreleased: [...c.unreleased] }),
    };
  let d = {},
    s = [...e.commentMonitorIntent.bySlug.entries()]
      .filter(([, c]) => c.state === "stopped")
      .sort(([, c], [, h]) => h.writtenAtMs - c.writtenAtMs)
      .slice(0, L);
  for (let [c, h] of s) d[c] = { at_ms: h.writtenAtMs };
  let u = te([...t.orphanTriggers, ...r]).slice(0, z),
    p =
      t.rows.size + o.length === 0 && s.length === 0 && u.length === 0
        ? null
        : { v: 1, rows: n, stopped: d, ...(u.length > 0 && { orphans: u }) },
    l = b(p);
  if (l === t.registryPublished) return;
  (t.registryPublished = l), t.registrySink({ artifact_durable_watches: p });
}
function C$n(e) {
  if (e === void 0 || e === null) return null;
  let t = ot(),
    n = 0,
    o = [],
    r = t.rowsEnvelope.safeParse(e);
  if (r.success)
    for (let [l, c] of V(r.data.rows)) {
      let h = t.row.safeParse(c);
      if (!jr.test(l) || !h.success) {
        n++;
        continue;
      }
      o.push({
        slug: l,
        triggerId: h.data.trigger_id,
        since: h.data.since,
        events: h.data.events,
        ...(h.data.unreleased.length > 0 && { unreleased: h.data.unreleased }),
      });
    }
  let d = new Map(),
    s = t.stopsEnvelope.safeParse(e);
  if (s.success)
    for (let [l, c] of V(s.data.stopped)) {
      if (!jr.test(l)) {
        n++;
        continue;
      }
      let h = t.stop.safeParse(c);
      if ((d.set(l, h.success ? h.data.at_ms : Date.now()), !h.success)) n++;
    }
  if (!r.success || !s.success)
    g(
      "artifact_durable_subscribe",
      s.success && t.newerEnvelope.safeParse(e).success ? "registry_newer_version" : "registry_invalid",
    );
  else if (n > 0) g("artifact_durable_subscribe", "registry_entry_invalid");
  let u = t.orphansEnvelope.safeParse(e),
    p = u.success ? u.data.orphans : [];
  return { rows: o, stopped: d, orphans: p };
}
function V(e) {
  return Object.keys(e)
    .slice(0, L)
    .map((n) => [n, e[n]]);
}
var C = "\x00unwritten",
  J = 256,
  q = 32,
  W = 64,
  it = m(() => {
    let e = v().refine(Number.isFinite),
      t = f({
        state: oe(["armed", "stopped"]),
        writtenAtMs: e,
        title: i().min(1).max(J).optional(),
        holder: i()
          .optional()
          .transform((o) => (o === void 0 ? void 0 : "bg")),
        holderPid: v()
          .int()
          .positive()
          .optional()
          .catch(void 0),
        holderProcStart: i()
          .min(1)
          .max(64)
          .optional()
          .catch(void 0),
        holderProcStartFt: i()
          .min(1)
          .max(64)
          .optional()
          .catch(void 0),
        holderJob: i()
          .regex(/^[0-9a-f]{8}$/)
          .optional()
          .catch(void 0),
        holderPidSpace: i()
          .min(1)
          .max(160)
          .optional()
          .catch(void 0),
      }),
      n = f({
        type: N("artifact-comment-monitor"),
        v: N(1),
        sessionId: i(),
        artifacts: De(i(), _e()),
        crossLineMerged: N(true)
          .optional()
          .catch(void 0),
        tailTorn: N(true)
          .optional()
          .catch(void 0),
      });
    return { record: t, envelope: n };
  });
function X(e) {
  if (
    e.holderPid === void 0 ||
    e.holderJob === void 0 ||
    e.holderPidSpace === void 0 ||
    (e.holderProcStart === void 0 && e.holderProcStartFt === void 0)
  )
    return {};
  return {
    holderPid: e.holderPid,
    holderJob: e.holderJob,
    ...(e.holderProcStart !== void 0 && { holderProcStart: e.holderProcStart }),
    ...(e.holderProcStartFt !== void 0 && { holderProcStartFt: e.holderProcStartFt }),
    holderPidSpace: e.holderPidSpace,
  };
}
function st() {
  let e = Ure.token;
  if (e === void 0) return RC(), {};
  let t = cO();
  if (t === void 0 || !/^[0-9a-f]{8}$/.test(j(t))) return {};
  let { procStart: n, procStartFt: o } = D$(e);
  return X({
    holderPid: process.pid,
    holderJob: j(t),
    holderProcStart: n,
    holderProcStartFt: o,
    holderPidSpace: Qbt().slice(0, 160),
  });
}
function FZt() {
  return RC();
}
function Eot(e, t) {
  let n = it(),
    o = n.envelope.safeParse(e);
  if (!o.success) return g("artifact_live_subscribe", "comment_monitor_intent_invalid"), null;
  if (o.data.sessionId !== K()) return g("artifact_live_subscribe", "comment_monitor_intent_foreign"), null;
  if (o.data.crossLineMerged === true) t?.onLossy?.();
  let r = o.data.tailTorn === true;
  if (r) t?.onLossy?.();
  let d = new Map(),
    s = 0,
    u = 0,
    p = 0;
  for (let [l, c] of Object.entries(o.data.artifacts)) {
    if (u++ >= 2 * W) {
      t?.onLossy?.();
      break;
    }
    let h = n.record.safeParse(c);
    if (!jr.test(l)) {
      s++, t?.onLossy?.();
      continue;
    }
    if (!h.success) {
      if ((s++, t?.onLossy?.(), typeof c === "object" && c !== null && c.state === "stopped"))
        d.set(l, { state: "stopped", writtenAtMs: Date.now() });
      continue;
    }
    if (r && h.data.state === "armed" && h.data.holder === void 0) {
      d.set(l, { state: "stopped", writtenAtMs: Date.now(), ...(h.data.title !== void 0 && { title: h.data.title }) }),
        t?.onTornStop?.(l);
      continue;
    }
    if (h.data.state === "armed" && p++ >= W) {
      t?.onLossy?.();
      continue;
    }
    let { state: w, writtenAtMs: S, title: M, holder: y } = h.data;
    d.set(l, {
      state: w,
      writtenAtMs: S,
      ...(M !== void 0 && { title: M }),
      ...(y !== void 0 && { holder: y, ...(r ? {} : X(h.data)) }),
    });
  }
  if (s > 0) g("artifact_live_subscribe", "comment_monitor_intent_record_invalid");
  return d;
}
function $6e(e) {
  let t = k(e.storageV5),
    n = new Map([...(t.pendingRestore ?? []), ...t.bySlug]);
  t.pendingRestore = null;
  let { excludeSlug: o } = e;
  if (o !== void 0) n.delete(o);
  return A(), n;
}
function Aot() {
  return de().commentMonitorIntent.tornStops;
}
function v$n() {
  return de().commentMonitorIntent.storageV5;
}
function fW(e) {
  k(e?.storageV5);
}
function R$n(e, t) {
  if (e === void 0 && !EZn()) return;
  let n = de().commentMonitorIntent;
  (n.earlySeed = e), (n.adoptPendingFor = K()), k(t?.storageV5);
}
function Cot(e, t) {
  let n = k(t?.storageV5);
  if (de().durable.stopLatches.isStopped(e)) return;
  let o = t?.title,
    r = o !== void 0 && o.length >= 1 && o.length <= J,
    d = n.bySlug.get(e)?.title;
  n.forgottenAt.delete(e),
    n.bySlug.set(e, {
      state: "armed",
      writtenAtMs: Date.now(),
      ...(r ? { title: o } : d !== void 0 && { title: d }),
      ...(nl() && { holder: "bg", ...st() }),
    }),
    Y(n, e),
    A();
}
function hhe(e, t) {
  let n = k(t?.storageV5),
    o = n.bySlug.get(e);
  n.bySlug.set(e, { state: "stopped", writtenAtMs: Date.now(), ...(o?.title !== void 0 && { title: o.title }) }),
    A({ durableNow: true });
  for (let [r, d] of n.parked) {
    let s = d.line[e];
    if (s?.state === "armed")
      (d.line[e] = { state: "stopped", writtenAtMs: Date.now(), ...(s.title !== void 0 && { title: s.title }) }),
        R(r, d.path, d.line, { durableNow: true });
  }
}
function k$n(e, t) {
  return k(t?.storageV5).bySlug.get(e)?.state;
}
function U6e(e, t) {
  let n = k(t?.storageV5),
    o = false,
    r = new Set(typeof e === "string" ? [e] : e),
    d = Date.now();
  for (let s of r) {
    if (((o = n.bySlug.delete(s) || o), n.forgottenAt.delete(s), n.forgottenAt.size >= ct)) {
      let u = n.forgottenAt.keys().next().value;
      if (u !== void 0) n.forgottenAt.delete(u);
    }
    n.forgottenAt.set(s, d);
  }
  if (o) A({ durableNow: true });
  for (let [s, u] of n.parked) {
    let p = false;
    for (let l of r)
      if (u.traveling?.has(l) && u.line[l]?.state === "armed") delete u.line[l], u.traveling.delete(l), (p = true);
    if (p) {
      if ((R(s, u.path, u.line, { durableNow: true }), !Object.values(u.line).some((l) => l.state === "armed")))
        n.parked.delete(s);
    }
  }
}
function vot(e, t) {
  let n = k(t?.storageV5),
    { stopLatches: o } = de().durable;
  for (let [r, d] of e) {
    if (o.wasClearedByRewatch(r)) continue;
    let s = n.bySlug.get(r);
    if (s === void 0 || s.state === "armed" || s.writtenAtMs <= d)
      n.bySlug.set(r, { state: "stopped", writtenAtMs: d, ...(s?.title !== void 0 && { title: s.title }) });
    o.reaffirmStop(r);
  }
  A();
}
function H$n(e) {
  let t = k(e?.storageV5),
    { yieldedSlugs: n } = de().wakes,
    o = Date.now(),
    r = false;
  for (let [d, s] of t.bySlug)
    if (s.state === "armed" && !n.has(d))
      t.bySlug.set(d, { state: "stopped", writtenAtMs: o, ...(s.title !== void 0 && { title: s.title }) }), (r = true);
  if (r) A({ durableNow: true });
  for (let [d, s] of t.parked) {
    let u = false;
    for (let [p, l] of Object.entries(s.line))
      if (l.state === "armed")
        (s.line[p] = { state: "stopped", writtenAtMs: o, ...(l.title !== void 0 && { title: l.title }) }), (u = true);
    if (u) R(d, s.path, s.line, { durableNow: true });
  }
}
function at(e) {
  switch (e) {
    case "clear":
    case "resume":
    case "fork":
    case "remote_attach":
      return true;
    case "cd":
    case "spare_claim":
    case "hydrate":
    case "startup_custom_id":
      return false;
  }
}
function ZQ(e) {
  let { live: t } = de(),
    n = t.supervisors.get(e);
  return (n !== void 0 && !n.stopped && n.autoReactWiring !== void 0) || t.inFlightWiredIntent.has(e);
}
function dt() {
  let e = de().commentMonitorIntent,
    t = e.sid;
  if (t === null || t === K()) {
    e.leftWith = null;
    return;
  }
  let n = new Set();
  for (let [o, r] of e.bySlug) if (r.state === "armed" && ZQ(o)) n.add(o);
  e.leftWith = {
    sid: t,
    traveling: n,
    unwritten: !e.onFile && !qSe(t) && e.adoptPendingFor !== t,
    inWindow: e.adoptPendingFor === t,
  };
}
function E() {
  let e = de().commentMonitorIntent;
  if (!qSe(K())) return;
  for (let [t, n] of e.parked) {
    if (n.traveling === void 0 || t === K()) continue;
    let o = false;
    for (let r of n.traveling) if (n.line[r]?.state === "armed") delete n.line[r], (o = true);
    if (((n.traveling = void 0), o)) R(t, n.path, n.line);
    if (!Object.values(n.line).some((r) => r.state === "armed")) e.parked.delete(t);
  }
}
function x(e, t) {
  if (qSe(t)) {
    if (e.adoptPendingFor === t) e.adoptPendingFor = null;
    return false;
  }
  return e.adoptPendingFor === t || gl() !== null;
}
function U(e, t, n, o, r) {
  if (t === null) return;
  let d = de().commentMonitorIntent,
    s = { path: t, line: G(e, n) };
  d.pendingLines.set(e, s),
    Mpt(F),
    (d.writeChain = d.writeChain.then(async () => {
      if ((await hl().catch(() => {}), d.pendingLines.get(e) !== s)) return;
      if (d.exitStamped) return;
      if ((d.pendingLines.delete(e), !o && nte() === r)) return;
      if (e === d.sid) {
        (d.lastWritten = C), A();
        return;
      }
      R(e, t, n);
    })),
    (d.writeChain = d.writeChain.catch(() => {}));
}
var ct = 1024;
function G(e, t) {
  let n = de().commentMonitorIntent,
    o = n.parked.get(e);
  if (o?.unwritten === true) {
    let { traveling: r } = o;
    return r === void 0 ? t : gc(t, (d, s) => d.state === "armed" && r.has(s));
  }
  if (o?.leftInWindow === true)
    return D(n, { type: "artifact-comment-monitor", v: 1, sessionId: e, artifacts: t }).artifacts;
  return t;
}
function R(e, t, n, o) {
  if (t === null) return;
  let r = de().commentMonitorIntent,
    { storageV5: d } = r,
    s = G(e, { ...n }),
    u = { type: "artifact-comment-monitor", v: 1, sessionId: e, artifacts: s };
  r.owedLines.delete(e);
  let p = { path: t, line: s };
  if ((r.pendingLines.set(e, p), Mpt(F), o?.durableNow === true)) $pt(u, t, P(u));
  r.writeChain = r.writeChain
    .then(async () => {
      if ((await hl().catch(() => {}), r.exitStamped)) return;
      if (e === r.sid) {
        if (r.pendingLines.get(e) === p) r.pendingLines.delete(e);
        (r.lastWritten = C), A();
        return;
      }
      if ((await pk(t, u, d, { onlyIfExists: true, tornTailEntry: P(u) }), r.pendingLines.get(e) === p))
        r.pendingLines.delete(e);
    })
    .catch(() => {
      if (r.pendingLines.get(e) !== p) {
        g("artifact_live_subscribe", "comment_monitor_intent_write_failed");
        return;
      }
      if ((r.pendingLines.delete(e), r.owedLines.size >= 2 * q)) {
        let l = r.owedLines.keys().next().value;
        if (l !== void 0) r.owedLines.delete(l);
      }
      r.owedLines.set(e, { path: t, line: s }), g("artifact_live_subscribe", "comment_monitor_intent_write_failed");
    });
}
function x$n(e, t) {
  Y(k(t?.storageV5), e);
}
function Y(e, t) {
  let n = false;
  for (let [o, r] of e.parked) {
    if (o === K() || r.line[t]?.state !== "armed") continue;
    (r.traveling ??= new Set()).add(t), (n = true);
  }
  if (n) E();
}
function B(e) {
  if (e.owedLines.size === 0) return;
  let t = [...e.owedLines.entries()];
  e.owedLines.clear();
  let n = false;
  for (let [o, { path: r, line: d }] of t) {
    if (o === e.sid) {
      (e.lastWritten = C), (n = true);
      continue;
    }
    if (e.pendingLines.has(o)) continue;
    let s = e.parked.get(o);
    R(o, s?.path ?? r, s?.line ?? d);
  }
  if (n) A();
}
function k(e) {
  let t = de().commentMonitorIntent;
  if (e !== void 0) t.storageV5 = e;
  let n = K(),
    o = false,
    r = false;
  if (t.sid !== n) {
    let s = t.leftWith !== null && t.leftWith.sid === t.sid ? t.leftWith : null,
      u = (w) => (s !== null ? s.traveling.has(w) : ZQ(w));
    t.leftWith = null;
    let p = _(t),
      l = new Set(),
      c = 0;
    for (let [w, S] of t.bySlug) {
      if (S.state !== "armed") continue;
      if (u(w)) l.add(w);
      else t.bySlug.delete(w), c++;
    }
    let { stopLatches: h } = de().durable;
    for (let [w, S] of Object.entries(t.parked.get(n)?.line ?? {})) {
      let M = t.forgottenAt.get(w);
      if (S.state === "armed" && M !== void 0 && S.writtenAtMs <= M && !ZQ(w)) {
        r = true;
        continue;
      }
      let y = T(t.bySlug.get(w), S);
      if (y.state === "armed" && h.isStopped(w))
        y = { state: "stopped", writtenAtMs: Date.now(), ...(y.title !== void 0 && { title: y.title }) };
      if ((t.bySlug.set(w, y), y.state === "stopped")) h.confirmStop(w);
    }
    t.parked.delete(n);
    for (let w of [t.owedLines.get(n), t.pendingLines.get(n)])
      for (let [S, M] of Object.entries(w?.line ?? {})) {
        if (M.state !== "stopped") continue;
        let y = T(t.bySlug.get(S), M);
        if ((t.bySlug.set(S, y), y.state === "stopped")) h.confirmStop(S);
      }
    if (t.sid !== null && (c > 0 || l.size > 0)) {
      t.parked.set(t.sid, {
        path: t.transcriptPath,
        line: p,
        ...(l.size > 0 && { traveling: l }),
        ...(s?.unwritten === true && { unwritten: true }),
        ...(s?.inWindow === true && { leftInWindow: true }),
      });
      while (t.parked.size > q) {
        let [w, S] = t.parked.entries().next().value;
        t.parked.delete(w);
        let M = Date.now();
        R(
          w,
          S.path,
          Object.fromEntries(
            Object.entries(S.line).flatMap(([y, I]) =>
              I.state !== "armed"
                ? [[y, I]]
                : S.traveling?.has(y)
                  ? []
                  : [[y, { state: "stopped", writtenAtMs: M, ...(I.title !== void 0 && { title: I.title }) }]],
            ),
          ),
        );
      }
    }
    if (t.sid !== null && t.wroteCurrentLine) U(t.sid, t.transcriptPath, p, t.lastWritten === C, t.failureSeqAtWrite);
    else if (t.sid !== null && s?.inWindow === true && Q(t, p)) U(t.sid, t.transcriptPath, p, true, t.failureSeqAtWrite);
    if ((E(), (o = [...t.bySlug.values()].some((w) => w.state === "armed")), (t.sid = n), t.adoptPendingFor !== n))
      t.adoptPendingFor = null;
    (t.lastWritten = r ? C : null),
      (t.wroteCurrentLine = false),
      (t.pendingRestore = null),
      (t.transcriptPath = null),
      t.tornStops.clear(),
      (t.onFile = false);
  }
  if (!t.onFile && qSe(n)) t.onFile = true;
  if (((t.transcriptPath = x(t, n) ? Hl() : im(n)), t.unsubscribeMaterialized === void 0))
    t.unsubscribeMaterialized = Rcn(() => {
      if (t.sid !== null && qSe(t.sid)) t.onFile = true;
      E();
    });
  if (t.unsubscribeSwitch === void 0)
    (t.unregisterExitDrain = vcn(() => (B(t), t.writeChain))),
      Mpt(F),
      (t.unsubscribeSwitch = au((s, u) => {
        if (u === "cd" && t.sid === s) t.transcriptPath = im(s);
        if (at(u)) dt();
        if (u === "clear") queueMicrotask(A);
      }));
  let d = t.earlySeed ?? Zcn();
  if (((t.earlySeed = void 0), d !== void 0)) {
    let s = false,
      u = Eot(d, {
        onLossy: () => {
          s = true;
        },
        onTornStop: (p) => {
          t.tornStops.add(p);
        },
      });
    if (u !== null) {
      if (d.tailTorn === true) Lcn(t.transcriptPath ?? void 0);
      let { stopLatches: p } = de().durable,
        l = new Map();
      for (let [c, h] of u) {
        let w = t.forgottenAt.get(c);
        if (h.state === "armed" && w !== void 0 && h.writtenAtMs <= w && !ZQ(c)) {
          s = true;
          continue;
        }
        let S = t.bySlug.get(c);
        if (t.tornStops.has(c) && S?.state === "armed" && ZQ(c)) {
          t.tornStops.delete(c), l.set(c, S), (s = true);
          continue;
        }
        let M = T(S, h);
        if ((t.bySlug.set(c, M), l.set(c, M), M.state === "stopped")) p.confirmStop(c);
      }
      if (((t.pendingRestore = l), !s && t.lastWritten === null))
        (t.lastWritten = O(Object.fromEntries(u))), (t.failureSeqAtWrite = nte());
      else if (s && t.lastWritten === null) t.lastWritten = C;
      t8();
    }
  }
  if ((B(t), o || r)) A();
  return t;
}
function T(e, t) {
  if (e === void 0) return t;
  if (t.state === "stopped" && e.state !== "stopped" && t.writtenAtMs >= e.writtenAtMs) return t;
  if (t.state === "armed" && e.state === "armed" && t.writtenAtMs > e.writtenAtMs) return t;
  return e;
}
function _(e) {
  return Object.fromEntries(
    [...e.bySlug.entries()]
      .sort(
        ([, t], [, n]) =>
          Number(n.state === "stopped") - Number(t.state === "stopped") || n.writtenAtMs - t.writtenAtMs,
      )
      .slice(0, W),
  );
}
function Z() {
  let { commentMonitorIntent: e, wakes: t } = de();
  if (!e.wroteCurrentLine || e.sid !== K() || [...e.bySlug.keys()].some((n) => t.yieldedSlugs.has(n))) return;
  return { type: "artifact-comment-monitor", v: 1, sessionId: K(), artifacts: _(e) };
}
function F() {
  let e = de().commentMonitorIntent,
    t = K(),
    n,
    o = () => Q(e, _(e)),
    r = !e.exitStamped && e.sid === t;
  if (r && qSe(t)) {
    if (e.wroteCurrentLine || o() || e.owedLines.has(t) || e.pendingLines.has(t))
      E(), (e.wroteCurrentLine = true), rte(Z);
  } else if (r && x(e, t) && e.transcriptPath !== null && o()) {
    let s = D(e, { type: "artifact-comment-monitor", v: 1, sessionId: t, artifacts: _(e) });
    n = { path: e.transcriptPath, entry: s, tornTailEntry: P(s) };
    for (let u of [e.owedLines, e.pendingLines]) if (u.get(t)?.path === n.path) u.delete(t);
  }
  e.exitStamped = true;
  let d = [...e.owedLines, ...e.pendingLines].map(([s, { path: u, line: p }]) => {
    let l = { type: "artifact-comment-monitor", v: 1, sessionId: s, artifacts: p };
    return { path: u, entry: l, tornTailEntry: P(l) };
  });
  return n === void 0 ? d : [...d, n];
}
function P(e) {
  let t = Date.now();
  return {
    ...e,
    artifacts: ts(e.artifacts, (n) =>
      n.state === "armed" && n.holder === void 0
        ? { state: "stopped", writtenAtMs: t, ...(n.title !== void 0 && { title: n.title }) }
        : n,
    ),
  };
}
function D(e, t) {
  let n = K(),
    o = new Set();
  for (let [r, d] of e.parked) {
    if (r === n || r === t.sessionId || d.unwritten) continue;
    for (let s of d.traveling ?? []) if (d.line[s]?.state === "armed") o.add(s);
  }
  if (o.size === 0) return t;
  return { ...t, artifacts: gc(t.artifacts, (r, d) => r.state === "armed" && o.has(d)) };
}
function Q(e, t) {
  return e.lastWritten !== O(t) && !(e.lastWritten === null && Object.keys(t).length === 0);
}
function O(e) {
  return b(
    Object.entries(e)
      .map(([t, n]) => [
        t,
        n.state,
        n.writtenAtMs,
        n.title ?? null,
        n.holder ?? null,
        n.holderPid ?? null,
        n.holderProcStart ?? n.holderProcStartFt ?? null,
        n.holderJob ?? null,
        n.holderPidSpace ?? null,
      ])
      .sort(),
  );
}
function A(e) {
  let t = k();
  E(), t8();
  let n = _(t),
    o = O(n);
  if (o === t.lastWritten && nte() === t.failureSeqAtWrite) return;
  if (((t.failureSeqAtWrite = nte()), t.lastWritten === null && t.bySlug.size === 0)) {
    t.lastWritten = o;
    return;
  }
  let r = { type: "artifact-comment-monitor", v: 1, sessionId: K(), artifacts: n };
  if (x(t, K())) {
    if (((t.lastWritten = C), e?.durableNow === true && t.transcriptPath !== null)) {
      let d = D(t, r);
      $pt(d, t.transcriptPath, P(d));
    }
    return;
  }
  if (((t.lastWritten = o), (t.wroteCurrentLine = true), rte(Z), e?.durableNow === true)) $pt(r);
  Qcn(r, t.storageV5).catch(() => {
    if (t.lastWritten === o) t.lastWritten = C;
    g("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}
export { E$n, A$n, t8, C$n, FZt, Eot, $6e, Aot, v$n, fW, R$n, Cot, hhe, k$n, U6e, vot, H$n, ZQ, x$n };
