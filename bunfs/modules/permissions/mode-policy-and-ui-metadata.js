// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { oe, Sa } from "/$bunfs/root/chunk-saay52v7.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
var wO = ["acceptEdits", "auto", "bypassPermissions", "default", "dontAsk", "plan"],
  cir = [...wO],
  gy = cir,
  V$ = "manual";
function bm(e) {
  return e === "manual" ? "default" : e;
}
function Lf(e) {
  let o = bm(e);
  return cir.find((n) => n === o);
}
var uoe = `Cannot set permission mode: must be one of ${wO.join(", ")}`,
  uir = {
    dangerousRemoval: { bypassImmune: true, classifierRouted: true },
    backgroundOperator: { bypassImmune: false, classifierRouted: true },
    suspiciousWindowsPath: { bypassImmune: false, classifierRouted: true },
    isolatePeerMachines: { bypassImmune: true, classifierRouted: false },
    restrictedMode: { bypassImmune: true, classifierRouted: false },
    ...{},
  };
function hTt(e) {
  return e.circuitBreaker !== void 0 && uir[e.circuitBreaker]?.bypassImmune === true;
}
function _Tt(e) {
  return e.circuitBreaker !== void 0 && uir[e.circuitBreaker]?.classifierRouted === true;
}
function lAn(e) {
  return e.decideLocation === "pre-ask";
}
function VXe(e, o) {
  return e.behavior !== "allow" && e !== o;
}
var cAn = [
  "rule",
  "mode",
  "subcommandResults",
  "permissionPromptTool",
  "hook",
  "asyncAgent",
  "sandboxOverride",
  "workingDir",
  "safetyCheck",
  "classifier",
  "other",
];
var JNe = "Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)",
  yTt = "Read-only command is allowed",
  KXe = "--restricted: path outside the working directory",
  QNe = "bashCommandClamp: no clamp rule matches this command",
  XXe = "bashCommandClamp fail-closed: permission check crashed",
  doe = "Classifier unavailable",
  jqt = "Auto mode could not evaluate this action and is blocking it for safety",
  STt =
    "Auto mode classifier transcript exceeded context window \u2014 falling back to manual approval (try /compact to reduce conversation size)",
  Wqt = "ask rule on hook-rewritten input",
  YXe = { type: "asyncAgent", reason: Wqt },
  uAn = { type: "asyncAgent", reason: "tool requires user interaction; no prompt available in headless mode" },
  dAn = { type: "other", reason: "MCP tool requires user interaction; not supported via --permission-prompt-tool" },
  ZNe = "tool permission stream closed before response received",
  poe = "canUseTool returned a schema-invalid permission result",
  foe = "tool permission request failed",
  JXe = "tool permission request aborted",
  pAn = { type: "other", reason: ZNe },
  QXe = { type: "other", reason: poe },
  fAn = { type: "other", reason: "permission prompt tool no longer connected" },
  mAn = { type: "other", reason: foe },
  oCe = { type: "other", reason: JXe };
var vr = D() === "macos" ? "\u23FA" : "\u25CF",
  VY = "\u2219",
  dir = "\u2315",
  ww = "\u273B",
  ZXe = "\u2234",
  pir = "\u25CC",
  qH = "\u2191",
  mR = "\u2193",
  eYe = "\u21B3",
  fP = "\u2190",
  fir = "\u2192",
  iCe = "\u23CE",
  Q3 = "\u21AF",
  mir = "\u25CB",
  tYe = "\u25D0",
  gAn = "\u25CF",
  gir = "\u25C9",
  hir = "\u25C8",
  bTt = "\u2726",
  nYe = "\u25CE",
  wTt = "\u23F8",
  sCe = "\u23F5\u23F5",
  hAn = "\u21BB",
  _An = "\u2190",
  R_ = "\u2442",
  Mf = "\u25C7",
  hy = "\u25C6",
  yAn = "\u203B",
  PC = "\u26A0",
  jl = "\u29C9";
function SAn(e) {
  return `${jl} ${e}`;
}
var TTt = "\u266A";
var _ir = "\u258E",
  bAn = "\u2588",
  mP = "\u2500",
  ETt = ["\xB7|\xB7", "\xB7/\xB7", "\xB7\u2014\xB7", "\xB7\\\xB7"],
  rYe = "\xB7\u2714\uFE0E\xB7",
  oYe = "\xD7",
  wAn = "\u2715",
  aCe = "\u25B8",
  ATt = "\u283F",
  a = ["\u280B", "\u2819", "\u2839", "\u2838", "\u283C", "\u2834", "\u2826", "\u2827", "\u2807", "\u280F"];
function TAn() {
  return a;
}
var mg = { topLeft: "\u256D", topRight: "\u256E", bottomLeft: "\u2570", bottomRight: "\u256F" },
  yir = "\u2013",
  uS = { branch: "\u251C", last: "\u2514", pipe: "\u2502", teeDown: "\u252C", teeUp: "\u2534" };
var Sir = m(() => Sa(bm, oe(gy))),
  CTt = m(() => Sa(bm, oe(wO))),
  t = { plan: 0, bubble: 1, default: 1, dontAsk: 1, acceptEdits: 2, auto: 3, bypassPermissions: 4 };
function moe(e, o) {
  if (!e) return;
  if (o === "auto" && e === "acceptEdits") return;
  return t[e] <= t[o] ? e : void 0;
}
var r = {
  default: {
    title: "Manual",
    shortTitle: "Manual",
    indicator: "manual mode",
    symbol: wTt,
    color: "inactive",
    external: "default",
  },
  plan: { title: "Plan", shortTitle: "Plan", indicator: "plan mode", symbol: wTt, color: "planMode", external: "plan" },
  acceptEdits: {
    title: "Accept edits",
    shortTitle: "Accept",
    indicator: "accept edits",
    symbol: sCe,
    color: "autoAccept",
    external: "acceptEdits",
  },
  bypassPermissions: {
    title: "Bypass Permissions",
    shortTitle: "Bypass",
    indicator: "bypass permissions",
    symbol: sCe,
    color: "error",
    external: "bypassPermissions",
  },
  dontAsk: {
    title: "Don't Ask",
    shortTitle: "DontAsk",
    indicator: "don't ask",
    symbol: sCe,
    color: "error",
    external: "dontAsk",
  },
  auto: { title: "Auto", shortTitle: "Auto", indicator: "auto mode", symbol: sCe, color: "warning", external: "auto" },
};
function yN(e) {
  return e !== "bubble";
}
function s(e) {
  return r[e] ?? r.default;
}
function sd(e) {
  return s(e).external;
}
function bir(e) {
  let o = sd(e.newMode),
    n = o === "plan" && Boolean(e.newUltraplan),
    i = e.rule === "while-latched" ? n : n && sd(e.prevMode) !== "plan" && !e.prevUltraplan;
  return { permission_mode: o, is_ultraplan_mode: i ? true : null };
}
function Tw(e) {
  return Lf(e) ?? "default";
}
function K$(e) {
  return s(e).title;
}
function wir(e) {
  return e === "default" || e === void 0;
}
function e1e(e, o) {
  if (e === "auto") return "classify";
  if (e === "bypassPermissions" || (e === "plan" && o)) return "allow";
  if (e === "dontAsk") return "deny";
  return "ask";
}
function SN(e) {
  return s(e).indicator;
}
function Bpe(e) {
  return s(e).symbol;
}
function uA(e) {
  return s(e).color;
}
export {
  wO,
  cir,
  gy,
  V$,
  bm,
  Lf,
  uoe,
  uir,
  hTt,
  _Tt,
  lAn,
  VXe,
  cAn,
  JNe,
  yTt,
  KXe,
  QNe,
  XXe,
  doe,
  jqt,
  STt,
  Wqt,
  YXe,
  uAn,
  dAn,
  ZNe,
  poe,
  foe,
  JXe,
  pAn,
  QXe,
  fAn,
  mAn,
  oCe,
  vr,
  VY,
  dir,
  ww,
  ZXe,
  pir,
  qH,
  mR,
  eYe,
  fP,
  fir,
  iCe,
  Q3,
  mir,
  tYe,
  gAn,
  gir,
  hir,
  bTt,
  nYe,
  wTt,
  sCe,
  hAn,
  _An,
  R_,
  Mf,
  hy,
  yAn,
  PC,
  jl,
  SAn,
  TTt,
  _ir,
  bAn,
  mP,
  ETt,
  rYe,
  oYe,
  wAn,
  aCe,
  ATt,
  TAn,
  mg,
  yir,
  uS,
  Sir,
  CTt,
  moe,
  yN,
  sd,
  bir,
  Tw,
  K$,
  wir,
  e1e,
  SN,
  Bpe,
  uA,
};
