// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { nw } from "/$bunfs/root/chunk-qd35gw0c.js";
import { YE, of, C_n, Yne, dg, f6, m6, sy, VLe, Fyt, eZn, tZn, sY, nZn, Jne } from "/$bunfs/root/chunk-c76q2y0e.js";
import { J, G, Cl } from "/$bunfs/root/chunk-f9h0bg01.js";
import { gU, a } from "/$bunfs/root/chunk-fec4384a.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { mv } from "/$bunfs/root/chunk-mhf4d4sa.js";
import { A9e, G_e, pv, JR, Elt, fjn } from "/$bunfs/root/chunk-e28mhr30.js";
import { ph } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { nf, tw, Sd, HTe, zOe, VOe } from "/$bunfs/root/chunk-ky33xsw7.js";
import { e } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { yn, B, We, z, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { mm } from "/$bunfs/root/chunk-5jbjbjsn.js";
import { j } from "/$bunfs/root/chunk-yz031c9r.js";
var oe = of(0, "f");
function ujn() {
  return sy + VLe + dg;
}
function qon() {
  return sy + dg;
}
function Slt(t) {
  return dg + (m6 + C_n(1)).repeat(t) + dg;
}
class JZ {
  _didStopImmediatePropagation = false;
  didStopImmediatePropagation() {
    return this._didStopImmediatePropagation;
  }
  stopImmediatePropagation() {
    this._didStopImmediatePropagation = true;
  }
}
import { EventEmitter as Y } from "events";
class w9e extends Y {
  constructor() {
    super();
    this.setMaxListeners(0);
  }
  emit(t, ...r) {
    if (t === "error") return super.emit(t, ...r);
    let i = this.rawListeners(t);
    if (i.length === 0) return false;
    let u = r[0] instanceof JZ ? r[0] : null;
    for (let s of i) if ((s.apply(this, r), u?.didStopImmediatePropagation())) break;
    return true;
  }
}
function sjn(t) {
  mv().xtversionName = t;
}
function ylt() {
  return mv().xtversionName;
}
function ip() {
  if (Cl()?.isVscodeTerm) return true;
  if (a.TERM_PROGRAM === "vscode") return true;
  return mv().xtversionName?.startsWith("xterm.js") ?? false;
}
function ajn() {
  return mv().xtversionName?.toLowerCase().startsWith("ghostty") ?? false;
}
class f {
  value = void 0;
  get() {
    let t = ylt(),
      r = Cl(),
      i = r?.wheelFlood ?? Uon(),
      u = r ? gU.includes(r.terminal ?? "") : nw.isJetBrainsIdeTerminal(),
      s = r?.wtSession ?? !!a.WT_SESSION,
      d = ip(),
      o = this.value;
    if (
      o &&
      o.xtversion === (t ?? "(no reply)") &&
      o.wheelFlood === i &&
      o.jediTerm === u &&
      o.wtSession === s &&
      o.xtermJs === d
    )
      return o;
    let p = "darwin";
    return (
      (this.value = {
        useDecayCurve: !i && (d || p === "win32" || s),
        useAdaptiveDrain: d,
        base: u ? 2 : X(d, i, s),
        xtermJs: d,
        wheelFlood: i,
        jediTerm: u,
        termProgram: a.TERM_PROGRAM ?? "unset",
        termProgramVersion: a.TERM_PROGRAM_VERSION ?? "unset",
        xtversion: t ?? "(no reply)",
        wtSession: s,
        scrollSpeedEnv: a.CLAUDE_CODE_SCROLL_SPEED ?? "unset",
        platform: p,
      }),
      this.value
    );
  }
  invalidate() {
    this.value = void 0;
  }
}
var g = new J(() => new f());
function YR() {
  return g.of(G().host).get();
}
function Uon() {
  if (process.env.CURSOR_TRACE_ID !== void 0) return true;
  if (a.VSCODE_GIT_ASKPASS_MAIN?.includes("cursor")) return true;
  if (a.TERM_PROGRAM === "vscode") {
    let t = U(a.TERM_PROGRAM_VERSION);
    if (t !== null) return t >= 1092000 && t < 1105000;
  }
  return ylt()?.startsWith("xterm.js") ?? false;
}
function U(t) {
  if (!t) return null;
  let r = /^(\d+)\.(\d+)\.(\d+)/.exec(t);
  if (!r) return null;
  return +r[1] * 1e6 + +r[2] * 1000 + +r[3];
}
function Bon(t, r, i) {
  return !r && (t || false || i) ? 3 : 1;
}
function X(t, r, i) {
  let u = Bon(t, r, i),
    s = a.CLAUDE_CODE_SCROLL_SPEED;
  if (!s) return u;
  let d = parseFloat(s);
  return Number.isNaN(d) || d <= 0 ? u : Math.min(d, 20);
}
function dMt() {
  g.of(G().host).invalidate();
}
var E = j(mm(), 1);
function djn(t) {
  mv().synchronizedOutputSupported = t;
}
function pjn() {
  if (a.TMUX && mv().synchronizedOutputSupported === void 0) return;
  return Mx();
}
function Mx() {
  if (a.CLAUDE_BG_BACKEND === "daemon") return Cl()?.syncOutput !== false;
  if (a.TMUX) return mv().synchronizedOutputSupported === true;
  if (a.CLAUDE_CODE_FORCE_SYNC_OUTPUT) return true;
  let t = a.TERM_PROGRAM,
    r = a.TERM;
  if (
    t === "iTerm.app" ||
    t === "WezTerm" ||
    t === "WarpTerminal" ||
    t === "ghostty" ||
    t === "contour" ||
    t === "vscode" ||
    t === "alacritty" ||
    t === "mintty" ||
    t === "rio" ||
    t === "Tabby"
  )
    return true;
  if (nw.isJetBrainsIdeTerminal()) return true;
  if (parseInt(a.KONSOLE_VERSION ?? "", 10) >= 211200) return true;
  if (r?.includes("kitty") || a.KITTY_WINDOW_ID) return true;
  if (r === "xterm-ghostty") return true;
  if (r?.startsWith("foot")) return true;
  if (r?.includes("alacritty")) return true;
  if (a.ZED_TERM) return true;
  if (a.WT_SESSION) return true;
  let i = a.VTE_VERSION;
  if (i) {
    if (parseInt(i, 10) >= 6800) return true;
  }
  if (mv().synchronizedOutputSupported) return true;
  return false;
}
function pMt() {
  if (a.CLAUDE_BG_BACKEND === "daemon") return false;
  return (
    Mx() &&
    a.TMUX == null &&
    process.env.ZELLIJ == null &&
    !nw.isJetBrainsIdeTerminal() &&
    !ip() &&
    a.WT_SESSION == null
  );
}
function W_e() {
  let t = Cl()?.progressReporting;
  if (t !== void 0) return t;
  if (!process.stdout.isTTY) return false;
  if (a.WT_SESSION) return false;
  if (a.ConEmuANSI || a.ConEmuPID || a.ConEmuTask) return true;
  let r = E.coerce(a.TERM_PROGRAM_VERSION);
  if (!r) return false;
  if (a.TERM_PROGRAM === "ghostty") return ph(r.version, "1.2.0");
  if (a.TERM_PROGRAM === "iTerm.app") return ph(r.version, "3.6.6");
  return false;
}
var q = ["iTerm.app", "kitty", "WezTerm", "ghostty", "tmux", "windows-terminal", "WarpTerminal"];
function fMt(t) {
  return q.includes(t ?? a.terminal ?? "");
}
function CB(t) {
  return fMt() ? sY + (t?.legacyKitty ? tZn : eZn) + nZn : "";
}
function fG(t) {
  return Elt + sy + dg + CB(t);
}
function LA() {
  return sY + fjn + Jne;
}
function T9e() {
  return !!a.WT_SESSION;
}
var mMt = pMt();
function gMt(t, r, i) {
  let u = performance.now(),
    s = t.slowestWrite;
  if (s === void 0 || u - r >= s.endedMs - s.startedMs) t.slowestWrite = { startedMs: r, endedMs: u, bytes: i };
}
function Gon(t, r) {
  if (t.stdoutDead) return;
  let i = performance.now(),
    u = Buffer.byteLength(r);
  try {
    t.stdout.write(r);
  } catch (s) {
    if (t.tolerateDeadStdout && (v(s) === "EIO" || v(s) === "EPIPE")) {
      (t.stdoutDead = true), gMt(t, i, u);
      return;
    }
    throw s;
  }
  gMt(t, i, u);
}
function zon(t, r, i = false, u) {
  let s = u !== void 0 && u > 1 ? u - 1 : void 0;
  if (r.length === 0) return;
  let d = !i,
    o = d ? A9e : "";
  for (let p of r)
    switch (p.type) {
      case "stdout":
        o += p.content;
        break;
      case "clear":
        if (p.count > 0) o += Fyt(p.count);
        break;
      case "clearTerminal":
        o += p.altScreen ? ujn() : Slt(p.viewportRows);
        break;
      case "cursorHide":
        o += JR;
        break;
      case "cursorShow":
        o += pv;
        break;
      case "cursorMove":
        o += f6(p.x, s !== void 0 ? Math.max(-s, Math.min(s, p.y)) : p.y);
        break;
      case "cursorTo":
        o += Yne(p.col);
        break;
      case "carriageReturn":
        o += "\r";
        break;
      case "hyperlink":
        o += HTe(p.uri);
        break;
      case "styleStr":
        o += p.str;
        break;
    }
  if (d) o += G_e;
  Gon(t, o);
}
function v(t) {
  return t && typeof t === "object" && "code" in t ? String(t.code) : void 0;
}
function blt(t, r, i, u, s) {
  if (t === void 0 && r === void 0 && i === void 0 && u === void 0 && s === void 0) return;
  return { hidden: t, label: r, role: i, state: u, preserveWhitespace: s };
}
function uE(t, r) {
  if (t === void 0) return;
  if (Number.isInteger(t)) return;
  n(`${r} should be an integer, got ${t}`, { level: "warn" });
}
function H({
  children: t,
  ref: r,
  tabIndex: i,
  autoFocus: u,
  onClick: s,
  onFocus: d,
  onFocusCapture: o,
  onBlur: p,
  onBlurCapture: m,
  onMouseEnter: y,
  onMouseLeave: R,
  hoverIgnoresBlankCells: T,
  renderEvent: h,
  renderComponent: x,
  onKeyDown: w,
  onKeyDownCapture: I,
  onPaste: _,
  onPasteCapture: C,
  onWheel: A,
  onWheelCapture: O,
  keybindingScope: N,
  onAction: P,
  onActionCapture: k,
  "aria-hidden": M,
  "aria-label": D,
  "aria-role": W,
  "aria-state": L,
  "aria-preserve-whitespace": K,
  ...l
}) {
  if (
    (uE(l.margin, "margin"),
    uE(l.marginX, "marginX"),
    uE(l.marginY, "marginY"),
    uE(l.marginTop, "marginTop"),
    uE(l.marginBottom, "marginBottom"),
    l.marginLeft !== "auto")
  )
    uE(l.marginLeft, "marginLeft");
  if (l.marginRight !== "auto") uE(l.marginRight, "marginRight");
  return (
    uE(l.padding, "padding"),
    uE(l.paddingX, "paddingX"),
    uE(l.paddingY, "paddingY"),
    uE(l.paddingTop, "paddingTop"),
    uE(l.paddingBottom, "paddingBottom"),
    uE(l.paddingLeft, "paddingLeft"),
    uE(l.paddingRight, "paddingRight"),
    uE(l.gap, "gap"),
    uE(l.columnGap, "columnGap"),
    uE(l.rowGap, "rowGap"),
    (l.flexWrap ??= "nowrap"),
    (l.flexDirection ??= "row"),
    (l.flexGrow ??= 0),
    (l.flexShrink ??= 1),
    (l.overflowX = l.overflowX ?? l.overflow ?? "visible"),
    (l.overflowY = l.overflowY ?? l.overflow ?? "visible"),
    e("ink-box", {
      ref: r,
      tabIndex: i,
      autoFocus: u,
      onClick: s,
      onFocus: d,
      onFocusCapture: o,
      onBlur: p,
      onBlurCapture: m,
      onMouseEnter: y,
      onMouseLeave: R,
      hoverIgnoresBlankCells: T,
      renderEvent: h,
      renderComponent: x,
      onKeyDown: w,
      onKeyDownCapture: I,
      onPaste: _,
      onPasteCapture: C,
      onWheel: A,
      onWheelCapture: O,
      keybindingScope: N,
      onAction: P,
      onActionCapture: k,
      accessibility: blt(M, D, W, L, K),
      style: l,
      children: t,
    })
  );
}
var Xa = H;
F();
function c(t) {
  let r = "";
  for (let i = 0; i < t.length; i++) {
    let u = t.charCodeAt(i);
    r += u < 32 || (u >= 127 && u <= 159) ? " " : t[i];
  }
  return r;
}
var Nx = yn(null),
  wlt = Nx.Provider;
function dE() {
  let t = We(Nx);
  if (!t) throw Error("useTerminalNotification must be used within TerminalWriteProvider");
  let r = B(
      ({ message: o, title: p }) => {
        let m = p ? `${p}: ${o}` : o;
        t(tw(nf(Sd.ITERM2, c(m))));
      },
      [t],
    ),
    i = B(
      ({ message: o, title: p, id: m }) => {
        t(tw(nf(Sd.KITTY, `i=${m}:d=0:p=title`, c(p)))),
          t(tw(nf(Sd.KITTY, `i=${m}:p=body`, c(o)))),
          t(tw(nf(Sd.KITTY, `i=${m}:d=1:a=focus`, "")));
      },
      [t],
    ),
    u = B(
      ({ message: o, title: p }) => {
        t(tw(nf(Sd.GHOSTTY, "notify", c(p), c(o))));
      },
      [t],
    ),
    s = B(() => {
      t(YE);
    }, [t]),
    d = B(
      (o, p) => {
        if (!W_e()) return;
        if (!o) {
          t(tw(nf(Sd.ITERM2, zOe.PROGRESS, VOe.CLEAR, "")));
          return;
        }
        let m = Math.max(0, Math.min(100, Math.round(p ?? 0)));
        switch (o) {
          case "completed":
            t(tw(nf(Sd.ITERM2, zOe.PROGRESS, VOe.CLEAR, "")));
            break;
          case "error":
            t(tw(nf(Sd.ITERM2, zOe.PROGRESS, VOe.ERROR, m)));
            break;
          case "indeterminate":
            t(tw(nf(Sd.ITERM2, zOe.PROGRESS, VOe.INDETERMINATE, "")));
            break;
          case "running":
            t(tw(nf(Sd.ITERM2, zOe.PROGRESS, VOe.SET, m)));
            break;
          case null:
            break;
        }
      },
      [t],
    );
  return z(() => ({ notifyITerm2: r, notifyKitty: i, notifyGhostty: u, notifyBell: s, progress: d }), [r, i, u, s, d]);
}
function hxe() {
  return {
    lastWheelTime: 0,
    lastWheelDownTime: 0,
    bugConfirmed: false,
    notified: false,
    trackpadGesture: false,
    pendingArrowBoost: 0,
  };
}
function Q(t) {
  (t.bugConfirmed = true), (t.trackpadGesture = true), t.pendingArrowBoost++;
}
function S(t) {
  (t.trackpadGesture = false), (t.pendingArrowBoost = 0);
}
function ljn(t) {
  let r = t.pendingArrowBoost;
  return (t.pendingArrowBoost = 0), r;
}
function jon(t) {
  if (t.bugConfirmed) return true;
  if (
    process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED !== void 0 ||
    process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS !== void 0
  )
    return (t.bugConfirmed = true), true;
  return false;
}
var Z = 75,
  ee = 250,
  Won = 200;
function cjn(t, r, i, u) {
  if (!YR().jediTerm) return S(t), r;
  let s = null;
  for (let d = 0; d < r.length; d++) {
    let o = r[d];
    if (o.kind !== "key") {
      s?.push(o);
      continue;
    }
    if (o.name === "wheelup" || o.name === "wheeldown") {
      if (i - t.lastWheelTime > Won) (t.lastWheelDownTime = 0), S(t);
      if (((t.lastWheelTime = i), o.name === "wheeldown")) t.lastWheelDownTime = i;
      if (o.name === "wheelup" && i - t.lastWheelDownTime < ee && jon(t)) {
        (s ??= r.slice(0, d)), s.push({ ...o, name: "wheeldown" });
        continue;
      }
      s?.push(o);
      continue;
    }
    if (
      (o.name === "up" || o.name === "down") &&
      !o.ctrl &&
      !o.meta &&
      !o.shift &&
      !o.isPasted &&
      i - t.lastWheelTime < Z
    ) {
      if (!t.notified) (t.notified = true), u();
      Q(t), (s ??= r.slice(0, d));
      continue;
    }
    s?.push(o);
  }
  return s ?? r;
}
F();
var b = yn({
  stdin: process.stdin,
  internal_eventEmitter: new w9e(),
  setRawMode() {},
  isRawModeSupported: false,
  internal_querier: null,
  internal_jediTermInput: hxe(),
});
b.displayName = "InternalStdinContext";
var pG = b;
function E9e(t) {
  return nf(Sd.SET_BG_COLOR, t);
}
function q_e() {
  return nf(Sd.RESET_BG_COLOR);
}
F();
var j0 = yn(null);
export {
  JZ,
  w9e,
  sjn,
  ylt,
  ip,
  ajn,
  YR,
  Uon,
  Bon,
  dMt,
  hxe,
  ljn,
  jon,
  Won,
  cjn,
  pG,
  uE,
  ujn,
  qon,
  Slt,
  djn,
  pjn,
  Mx,
  pMt,
  W_e,
  fMt,
  CB,
  fG,
  LA,
  T9e,
  mMt,
  gMt,
  Gon,
  zon,
  E9e,
  q_e,
  blt,
  Xa,
  j0,
  Nx,
  wlt,
  dE,
};
