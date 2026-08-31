// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Se } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { w, c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { E } from "/$bunfs/root/chunk-ypdw393e.js";
import { fAe, ie, ci, jc } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { zN } from "/$bunfs/root/chunk-q14dgq5g.js";
import { Hn, Vr } from "/$bunfs/root/chunk-rgw52f13.js";
import { iZn } from "/$bunfs/root/chunk-s0xdwab3.js";
import { Ec, are } from "/$bunfs/root/chunk-e17gvevg.js";
import { PX, A7n, gmn, iht } from "/$bunfs/root/chunk-y8sx7bf9.js";
import { tr } from "/$bunfs/root/chunk-56sxk8k2.js";
var J = 2000,
  Q = 1e4,
  H = 2000,
  fOe = H,
  Z = "Sending this machine's settings \u2014 Esc cancels the message\u2026",
  ee = (e) => `Still sending this machine's settings (${Math.round(e / 1000)} s)\u2026`,
  te =
    "That message was not sent; this machine's settings are still on their way to the cloud session, and your next message waits for them too.",
  oe =
    "you stopped waiting for this machine's settings to reach the cloud session; they are still uploading, and a message sent now waits for them again",
  re = "withdrawn before it was sent",
  se =
    "this machine's settings could not be uploaded to the cloud session (see above); send it again to run there without them, or start a new session to try again with them",
  ae =
    "this machine's settings may not have reached the cloud session (the upload took too long); send it again to run there anyway, or start a new session to try again";
function Z8n(
  e,
  { retire: t, noticeAfterMs: n = J, progressEveryMs: o = Q, typedAheadGraceMs: i = H, now: r = Date.now },
) {
  let f = (a) => e.failureAnsweredAtMs !== void 0 && a - e.failureAnsweredAtMs >= i,
    d = e.outcome();
  if (d !== void 0 && (v(d) === void 0 || f(r()))) return null;
  let u = 0,
    l,
    S = !1;
  e.completion.then(
    (a) => {
      if (v(a) !== void 0) e.failureAnsweredAtMs ??= r();
    },
    () => {},
  );
  let N = (a, g, _) => {
      let R = a === void 0 ? void 0 : v(a);
      if (R !== void 0 && (g || !f(_))) return (e.failureAnsweredAtMs ??= r()), R;
      t();
      return;
    },
    V = async (a) => {
      let g = r();
      await ne(n, a);
      for (let _ = !1; !a.aborted; _ = !0) e.status.publish(_ ? ee(r() - g) : Z, "progress"), await ne(o, a);
    },
    X = () => {
      if (((u += 1), l === void 0)) {
        let a = new AbortController();
        (l = a),
          e.completion.then(
            () => a.abort(),
            () => a.abort(),
          ),
          V(a.signal);
      }
      return () => {
        if (((u -= 1), u === 0 && e.outcome() === void 0)) l?.abort(), (l = void 0);
      };
    };
  return async ({ released: a, withdrawn: g, exiting: _, final: R, decided: T }) => {
    let P = r(),
      k = e.outcome();
    if (k !== void 0) {
      let x = N(k, !1, P);
      if (x !== void 0) y(0, "upload_failed");
      return x;
    }
    let b = () => r() - P,
      I = e.completion.then(
        (x) => ({ settled: x }),
        () => ({ settled: void 0 }),
      ),
      q = X(),
      p = await Promise.race([I, a.then(() => "released"), g.then(() => "withdrawn"), T.then(() => "decided")]);
    if ((q(), p === "released" && _())) {
      if (
        ((p = await Promise.race([I, g.then(() => "withdrawn"), T.then(() => "decided")])),
        typeof p === "object" && !R())
      ) {
        y(b(), "upload_settled"), t();
        return;
      }
    }
    if (p === "decided") {
      y(b(), "decided");
      return;
    }
    if (p === "released") {
      if (!S)
        (S = !0),
          setTimeout(() => {
            S = !1;
          }, 0),
          e.status.publish(te, "info");
      return y(b(), "released"), { go: !1, reason: oe };
    }
    if (p === "withdrawn") return y(b(), "withdrawn"), { go: !1, reason: re };
    let U = N(p.settled, !0, P);
    return y(b(), U === void 0 ? "upload_settled" : "upload_failed"), U;
  };
}
function v(e) {
  if (e.kind !== "uploaded") return;
  switch (e.outcome) {
    case "failed":
    case "lane_full":
    case "unavailable":
    case "unauthorized":
      return { go: !1, reason: se };
    case "deadline":
      return { go: !1, reason: ae };
    case "sent":
    case "unchanged":
    case "conflict_resolved":
    case "raced":
    case "not_forwarded_at_create":
    case "no_standing_pack":
    case "aborted":
      return;
  }
}
function y(e, t) {
  s("tengu_home_seed_first_send_wait", { held_ms: e, release: c(t) });
}
import { realpathSync as de } from "fs";
import { lstat as le } from "fs/promises";
import { homedir as G } from "os";
import { isAbsolute as M, parse as j, relative as W, resolve as D, sep as K } from "path";
function E6t(e) {
  return e === "sync" || e === "upload_only";
}
var ce = ["container_sync", "device_tools"];
function L(e) {
  return ce.includes(e) ? e : void 0;
}
function C(e) {
  let t = Hn(e);
  return t !== null && A6t(t) !== null;
}
function e7n(e) {
  switch (e) {
    case "folder_is_home":
      return "File sync is off here: this checkout's git root is your home directory or a folder above it";
    case "folder_is_root":
      return "File sync is off here: this checkout's git root is the filesystem root";
    case "folder_holds_config":
      return "File sync is off here: this checkout's git root holds, or sits inside, Claude Code's own configuration folder";
  }
}
function A6t(e, t = {}) {
  let n = Vr(e) ?? e;
  if (!iZn(n)) return "monorepo_or_unreadable_config";
  return emn(e, t, n);
}
function emn(e, t = {}, n = Vr(e) ?? e) {
  let o = n === e ? [h(e)] : [h(e), h(n)];
  if (o.some((l) => l === j(l).root || gmn(l))) return "folder_is_root";
  let i = M(t.home ?? G()),
    r = M(t.configHome ?? be()),
    { home: f, configHome: d, foldCase: u } = F({ ...t, folder: o[0] });
  for (let l of o) {
    if (i && m(l, f, u)) return "folder_is_home";
    if (r && (m(l, d, u) || m(d, l, u))) return "folder_holds_config";
  }
  return null;
}
async function t7n() {
  if (!(await Ec()) || C(Se())) return "unspecified";
  return L(ci().remoteFileMode) ?? "unspecified";
}
async function Wwe(e, { flagKnownOn: t = !1 } = {}) {
  if ((!t && !(await Ec())) || C(e)) return "unspecified";
  let n = fAe(e);
  return L(ie().projects?.[n]?.remoteFileMode) ?? "unspecified";
}
async function C6t(e, { flagKnownOn: t = !1 } = {}) {
  if ((!t && !(await Ec())) || C(e)) return "unspecified";
  let n = zN(tr(D(e)));
  return L(ie().projects?.[n]?.remoteFileMode) ?? "unspecified";
}
var ue = new Set(["library", "appdata"]);
async function Ygt(e, t) {
  if (t === void 0) return (await Wwe(e)) === "container_sync";
  return E6t(t) && (await Ec()) && !C(e);
}
function Y(e, { home: t, configHome: n, foldCase: o = !1, wholeDrive: i = !1 }) {
  let r = (d) => A(d, o),
    f = fe(e, { home: t, configHome: n, foldCase: o });
  if (f !== null) return { kind: "refused", reason: f };
  if (i) return { kind: "refused", reason: "folder_is_root" };
  if (m(t, e, o)) {
    let d = W(r(t), r(e)).split(K);
    if (d.some((u) => u.startsWith("."))) return { kind: "refused", reason: "folder_hidden_under_home" };
    if (ue.has((d[0] ?? "").toLowerCase())) return { kind: "refused", reason: "folder_system_under_home" };
  }
  return { kind: "folder", path: e };
}
function A(e, t) {
  return t ? e.normalize("NFC").toLowerCase() : e;
}
function m(e, t, n) {
  let o = W(A(e, n), A(t, n));
  return o === "" || (o !== ".." && !o.startsWith(".." + K) && !M(o));
}
function fe(e, { home: t, configHome: n, foldCase: o = !1 }) {
  if (e === j(e).root) return "folder_is_root";
  if (m(e, t, o)) return "folder_is_home";
  if (m(e, n, o) || m(n, e, o)) return "folder_holds_config";
  return null;
}
function h(e) {
  let t = (n) => n.normalize("NFC");
  try {
    return t(de.native(e));
  } catch {
    return t(D(e));
  }
}
function F({ folder: e, home: t = G(), configHome: n = be() } = {}) {
  let o = { home: h(t), configHome: h(n) };
  return { ...o, foldCase: [e, o.home, o.configHome].some((i) => iht(i)), wholeDrive: e !== void 0 && gmn(e) };
}
function bue(e, t = {}) {
  let n = h(e);
  return Y(n, F({ folder: n, ...t })).kind === "folder";
}
async function Jgt(e) {
  return le(D(e, ".git")).then(
    () => !0,
    (t) => !["ENOENT", "ENOTDIR"].includes(E(t) ?? ""),
  );
}
function Qgt({ staysAttached: e, folderSync: t = PX(), home: n, configHome: o, surface: i }) {
  let r = (S) => {
    s("tengu_dir_sync_mode_prompt_skipped", { reason: S, ...(i !== void 0 && { surface: w(i) }) });
  };
  if (!e) return r(w("not_attached")), null;
  let f = Vr(Se()),
    d = f === null && t ? Y(D(Se()), F({ folder: D(Se()), home: n, configHome: o })) : null;
  if (d?.kind === "refused") return r(c(d.reason)), null;
  let u = f ?? (d?.kind === "folder" ? d.path : null);
  if (u === null) return r(w("no_git_root")), null;
  let l = f === null ? null : A6t(Hn(Se()) ?? u, { home: n, configHome: o });
  if (l !== null) return r(c(l)), null;
  if (L(ci().remoteFileMode) !== void 0) return r(w("answered")), null;
  return u;
}
async function Zgt(e, t) {
  if (!(await Ec())) return !1;
  let n = L(ci().remoteFileMode) ?? "unspecified";
  if (n === e) return !0;
  return (
    await jc((o) => (o.remoteFileMode === e ? o : { ...o, remoteFileMode: e }), t),
    s("tengu_dir_sync_mode_set", { mode: c(e), previous: c(n) }),
    !0
  );
}
var v6t = 1e4,
  n7n = 120000,
  r7n = 250,
  o7n = 15000,
  i7n = 1000,
  s7n = 3,
  a7n = 2 * A7n + 60000,
  xVe = 1500,
  tmn =
    "Files Claude changes in the cloud session won't be copied back to this directory in this session; your other changes here still sync to it";
function l7n(e, t) {
  if (!t || e === !1) return "upload_only";
  return e ? "two_way" : "pending";
}
var c7n = "File sync stopped: its local record for this session was removed",
  IVe = "File sync stopped: its local record for this session could not be read",
  eht =
    "File sync is off for this session here: its local record was written by a sync engine this version of Claude Code does not have. Start a new cloud session from this directory to sync it.",
  u7n =
    "File sync is switched off on this machine by CLAUDE_CODE_DIR_SYNC_ENGINE, so this session does not sync here now; unset it and open the session again to resume.",
  d7n =
    "File sync is switched off on this machine by CLAUDE_CODE_DIR_SYNC_ENGINE, so changes won't cross either way in this session. Unset it and start a new cloud session to sync.";
function p7n(e) {
  return e === "withdrawn"
    ? "File sync is off for this session: this directory is no longer set to sync"
    : "File sync is off for this session: the feature was switched off";
}
async function f7n(e) {
  if (!(await Ec())) {
    if (are()) return "switched_off";
    throw Error("directory sync flag unknown just now");
  }
  return (await Wwe(e, { flagKnownOn: !0 })) === "container_sync" ? "given" : "withdrawn";
}
function m7n(e) {
  return e
    .replace(/^File sync (?:(?:has )?stopped|is off)(?: for this session)?(?: here)?: /u, "")
    .replace(/[\s.;:\u2014-]+$/u, "");
}
function g7n(e) {
  return `File sync stopped for this session: ${e}. Nothing in this folder was touched; the cloud session is told to empty its copy before Claude's next turn there, so the two of you don't end up on different versions; Claude carries on through this machine.`;
}
async function h7n(e) {
  if (!(await Ec())) {
    if (are()) return "switched_off";
    throw Error("directory sync flag unknown just now");
  }
  return (await C6t(e, { flagKnownOn: !0 })) === "container_sync" ? "given" : "withdrawn";
}
function tht(e, t, n, o = "warning") {
  let i = !1,
    r = () => {
      if (!i) (i = !0), e(n, o);
    };
  return {
    state: () => ({ state: "stopped", reason: t, message: n }),
    activate() {},
    messageSent() {},
    beforeSend: async () => r(),
    afterResult() {},
    laneChanged() {},
    afterConnect: r,
    afterDisconnect() {},
    drain: async () => !0,
    shutdown: async () => {},
  };
}
function O(e) {
  let t = !1;
  return {
    state: () => (t ? { state: "stopped", reason: "shut_down" } : e),
    activate() {},
    messageSent() {},
    beforeSend: async () => {},
    afterResult() {},
    laneChanged() {},
    afterConnect() {},
    afterDisconnect() {},
    drain: async () => !0,
    shutdown: async () => {
      t = !0;
    },
  };
}
function _7n(e, t) {
  return O({ state: "stopped", reason: "not_armed", notArmedReason: e, message: t });
}
function y7n(e, t, n) {
  return B(O({ state: "stopped", reason: e, message: t }), n);
}
function S7n(e) {
  return B(O({ state: "off", reason: "not_opted_in" }), e);
}
function B(e, t) {
  if (t === void 0) return e;
  let n = null;
  return {
    ...e,
    seedGate: async ({ released: o, withdrawn: i }) => {
      if (await nmn(o, i)) return;
      let r = Date.now();
      if (n !== null && r - n >= fOe) return;
      return (n ??= r), { go: !1, reason: t.reason };
    },
  };
}
async function nmn(...e) {
  let t = !1;
  return (
    Promise.race(e).then(
      () => {
        t = !0;
      },
      () => {
        t = !0;
      },
    ),
    await ne(0),
    t
  );
}
import { lstat as pe, realpath as me } from "fs/promises";
import { dirname as z, join as ge } from "path";
var dne = { head: "HEAD", objects: "objects", refs: "refs" };
function rmn(e) {
  let t = !1,
    n = !1,
    o = !1;
  for (let i of e) {
    let r = i.isDirectory || i.isSymbolicLink;
    (t ||= i.name === dne.head && !i.isDirectory),
      (n ||= i.name === dne.objects && r),
      (o ||= i.name === dne.refs && r);
  }
  return t && n && o;
}
async function R6t(e) {
  let t = await Promise.all(
    [dne.head, dne.objects, dne.refs].map((n) =>
      pe(ge(e, n)).then(
        (o) => ({ name: n, isDirectory: o.isDirectory(), isSymbolicLink: o.isSymbolicLink() }),
        () => null,
      ),
    ),
  );
  return rmn(t.filter((n) => n !== null));
}
async function qwe(e) {
  let t = await me(e).catch(() => e);
  for (let n = t; ; n = z(n)) {
    if (await R6t(n)) return !0;
    if (z(n) === n) return !1;
  }
}
export {
  fOe,
  Z8n,
  E6t,
  e7n,
  A6t,
  emn,
  t7n,
  Wwe,
  C6t,
  Ygt,
  bue,
  Jgt,
  Qgt,
  Zgt,
  v6t,
  n7n,
  r7n,
  o7n,
  i7n,
  s7n,
  a7n,
  xVe,
  tmn,
  l7n,
  c7n,
  IVe,
  eht,
  u7n,
  d7n,
  p7n,
  f7n,
  m7n,
  g7n,
  h7n,
  tht,
  _7n,
  y7n,
  S7n,
  nmn,
  dne,
  rmn,
  R6t,
  qwe,
};
