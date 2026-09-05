// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, Cl } from "/$bunfs/root/chunk-f9h0bg01.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { Va, gU, a } from "/$bunfs/root/chunk-fec4384a.js";
import { $e } from "/$bunfs/root/chunk-2masxyqj.js";
import { xH } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { nw } from "/$bunfs/root/chunk-qd35gw0c.js";
import { UI, YE, bde, VM } from "/$bunfs/root/chunk-c76q2y0e.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { ue } from "/$bunfs/root/chunk-yz031c9r.js";
var u = null,
  y = false;
function f() {
  if (y) return u;
  return (y = true), null;
  if (process.env.CLIPBOARD_NAPI_NODE_PATH)
    try {
      return (u = ue(process.env.CLIPBOARD_NAPI_NODE_PATH)), u;
    } catch {}
  let o = ["arm64-darwin"].flatMap((r) => [
    `./vendor/clipboard-napi/${r}/clipboard-napi.node`,
    `../clipboard-napi/${r}/clipboard-napi.node`,
  ]);
  for (let r of o)
    try {
      return (u = ue(r)), u;
    } catch {}
  return null;
}
import { Buffer as _ } from "buffer";
import { isAbsolute as N } from "path";
var S = UI + String.fromCharCode(VM.OSC),
  b = UI + "\\";
function I() {
  return Cl()?.terminal ?? a.terminal;
}
function x5e() {
  let t = Cl();
  if (t) return t.mux;
  if (a.TMUX) return "tmux";
  if (a.STY) return "screen";
  if (a.ZELLIJ) return "zellij";
  return null;
}
function p() {
  return Cl()?.ssh ?? !!a.SSH_CONNECTION;
}
function h() {
  let t = Cl();
  if (t) {
    if (t.mux !== "tmux" || !t.tmuxSocket) return null;
    return N(t.tmuxSocket) && xH(t.tmuxSocket) ? ["-S", t.tmuxSocket] : null;
  }
  return a.TMUX ? [] : null;
}
function Gue() {
  let t = I();
  if (t === "Apple_Terminal") return "Fn";
  if (t === "iTerm.app") return "Option";
  if (Cl()?.isVscodeTerm || (t && P.has(t))) return D() === "macos" ? "Option" : "Shift";
  if (t && v.has(t)) return "Shift";
  if (a.LC_TERMINAL === "iTerm2") return "Option";
  return p() || x5e() !== null || D() === "macos" ? "Shift (Option in iTerm2, Fn in Terminal.app)" : "Shift";
}
var v = new Set([
    "ghostty",
    "kitty",
    "WezTerm",
    "alacritty",
    "xterm",
    "gnome-terminal",
    "vte-based",
    "konsole",
    "windows-terminal",
    "mintty",
    ...gU,
  ]),
  P = new Set(["vscode", "cursor", "windsurf", "antigravity", "codium"]);
function nf(...t) {
  let e = I() === "kitty" ? b : YE;
  return `${S}${t.join(bde)}${e}`;
}
function tw(t) {
  let e = x5e();
  if (e === "tmux") return `\x1BPtmux;${t.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  if (e === "screen") return `\x1BP${t.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  return t;
}
class w {
  tool = void 0;
  addonWriteFailed = false;
  addonWriteSucceeded = false;
  waylandCopyGeneration = 0;
  async probe() {
    if (D() !== "linux" || (typeof this.tool === "string" && this.tool !== "addon")) return;
    let { display: t, waylandDisplay: e } = A();
    if (e && (await Va("wl-copy"))) {
      this.tool = "wl-copy";
      return;
    }
    if (t) {
      if (await Va("xclip")) {
        this.tool = "xclip";
        return;
      }
      if (await Va("xsel")) {
        this.tool = "xsel";
        return;
      }
    }
    if (!this.addonWriteFailed && L() && f()?.setLinuxClipboardText) {
      this.tool = "addon";
      return;
    }
    this.tool = null;
  }
  recordAddonWrite(t) {
    if (t) this.addonWriteSucceeded = true;
    else this.addonWriteFailed ||= !this.addonWriteSucceeded;
  }
  beginWaylandCopy() {
    return ++this.waylandCopyGeneration;
  }
  isLatestWaylandCopy(t) {
    return t === this.waylandCopyGeneration;
  }
  reset() {
    (this.tool = void 0), (this.addonWriteFailed = false), (this.addonWriteSucceeded = false);
  }
}
var M = new J(() => new w());
function d() {
  return M.of(G().host);
}
function zue() {
  if (!p())
    switch (D()) {
      case "macos":
      case "windows":
      case "wsl":
        return "native";
      case "linux":
        if (typeof d().tool === "string") return "native";
        break;
    }
  if (h()) return "tmux-buffer";
  return "osc52";
}
function a_t() {
  return d().probe();
}
function ZYn() {
  if (D() !== "linux") return "not_linux";
  let { tool: t } = d();
  if (t === void 0) return "not_probed";
  return t ?? "none";
}
function eJn() {
  return a.VTE_VERSION != null;
}
function A() {
  return { display: process.env.DISPLAY, waylandDisplay: process.env.WAYLAND_DISPLAY };
}
function L() {
  let { display: t, waylandDisplay: e } = A();
  if (t) return /^(unix)?:/.test(t);
  return !!e;
}
function k(t) {
  return /[^\x00-\x7f]/.test(t);
}
function l_t(t) {
  if (!nw.hasOsc52ClipboardUtf8Bug() || !k(t)) return null;
  return "VS Code 1.123/1.124 will mojibake this paste \u2014 update to \u22651.125";
}
async function W(t) {
  let e = h();
  if (!e) return false;
  let o = { input: t, useCwd: false, timeout: 2000 },
    r = a.LC_TERMINAL ?? "unset",
    i = e.length > 0 ? "attacher socket" : "$TMUX",
    { code: s } = await $e("tmux", [...e, "load-buffer", "-w", "-"], o);
  if ((n(`clipboard: tmux load-buffer -w - \u2192 exit ${s} (server=${i} LC_TERMINAL=${r})`), s === 0)) return true;
  let c = await $e("tmux", [...e, "load-buffer", "-"], o);
  return n(`clipboard: retry tmux load-buffer - \u2192 exit ${c.code} (server=${i} LC_TERMINAL=${r})`), c.code === 0;
}
var C = 76;
async function h_(t) {
  let e = _.from(t, "utf8").toString("base64");
  if (!p()) O(t);
  await W(t);
  let o = x5e(),
    r = p(),
    i = o === "tmux" ? "raw+dcs" : o === "screen" ? "dcs" : "raw";
  if (
    (n(
      `clipboard: setClipboard mux=${o ?? "none"} ssh=${r} native=${!r} predicted=${zue()} emit=${i} bytes=${t.length}`,
    ),
    o === "tmux")
  ) {
    let s = `${UI}]52;c;${e}${YE}`;
    return s + tw(s);
  }
  if (o === "screen") {
    let s = [];
    for (let c = 0; c < e.length; c += C) s.push(e.slice(c, c + C));
    return `${UI}P${UI}]52;c;${s.join(`${b}${UI}P`)}${YE}${b}`;
  }
  return nf(Sd.CLIPBOARD, "c", e);
}
var E = "[Console]::InputEncoding = [Text.Encoding]::UTF8; Set-Clipboard -Value ([Console]::In.ReadToEnd())",
  B = "[Console]::OutputEncoding = [Text.Encoding]::UTF8; Get-Clipboard -Raw";
function O(t) {
  let e = { input: t, useCwd: false, timeout: 2000 };
  switch (D()) {
    case "macos":
      $e("pbcopy", [], e);
      return;
    case "linux": {
      let o = d();
      if (typeof o.tool !== "string")
        o.probe().then(() => {
          if (typeof o.tool === "string") O(t);
        });
      else if (o.tool === "wl-copy") U(t);
      else if (o.tool === "xclip") {
        let r = { ...e, useToolMemoryCgroup: false };
        $e("xclip", ["-selection", "clipboard"], r), $e("xclip", ["-selection", "primary"], r);
      } else if (o.tool === "xsel") {
        let r = { ...e, useToolMemoryCgroup: false };
        $e("xsel", ["--clipboard", "--input"], r), $e("xsel", ["--primary", "--input"], r);
      } else if (o.tool === "addon") {
        try {
          o.recordAddonWrite(f()?.setLinuxClipboardText(t) !== false);
        } catch {
          o.recordAddonWrite(false);
        }
        o.probe();
      }
      return;
    }
    case "wsl": {
      $e("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", E], e);
      return;
    }
    case "windows": {
      $e("powershell", ["-NoProfile", "-NonInteractive", "-Command", E], e);
      return;
    }
  }
}
async function U(t) {
  let e = d(),
    o = e.beginWaylandCopy(),
    r = { input: t, useCwd: false, timeout: 2000, stdout: "ignore", stderr: "ignore", useToolMemoryCgroup: false };
  if ((await $e("wl-copy", [], r), !e.isLatestWaylandCopy(o))) return;
  await $e("wl-copy", ["--primary"], r);
}
async function I5e(t = "clipboard") {
  if (p()) return "";
  let e = { useCwd: false, timeout: 2000 };
  switch (D()) {
    case "macos": {
      let o = await $e("pbpaste", [], e);
      return o.code === 0 ? o.stdout : "";
    }
    case "windows":
    case "wsl": {
      let o = await $e(
        D() === "wsl" ? "powershell.exe" : "powershell",
        ["-NoProfile", "-NonInteractive", "-Command", B],
        e,
      );
      return o.code === 0
        ? o.stdout
            .replace(
              /\r\n/g,
              `
`,
            )
            .replace(/\n$/, "")
        : "";
    }
    case "linux": {
      let o = t === "primary",
        r = [
          ["wl-paste", o ? ["--primary", "--no-newline"] : ["--no-newline"]],
          ["xclip", ["-selection", o ? "primary" : "clipboard", "-o"]],
          ["xsel", [o ? "--primary" : "--clipboard", "--output"]],
        ];
      for (let [i, s] of r) {
        let c = await $e(i, [...s], e);
        if (c.code === 0) return c.stdout;
      }
      return (await F(o, e.timeout)) ?? "";
    }
    default:
      return "";
  }
}
async function F(t, e) {
  if (!L()) return null;
  try {
    return (await f()?.getLinuxClipboardText?.(t, e))?.replace(/\r?\n$|\r$/, "") ?? null;
  } catch (o) {
    return n(`clipboard: addon read: ${l(o)}`), null;
  }
}
var Sd = {
  SET_TITLE_AND_ICON: 0,
  SET_ICON: 1,
  SET_TITLE: 2,
  SET_COLOR: 4,
  SET_CWD: 7,
  HYPERLINK: 8,
  ITERM2: 9,
  SET_FG_COLOR: 10,
  SET_BG_COLOR: 11,
  SET_CURSOR_COLOR: 12,
  CLIPBOARD: 52,
  KITTY: 99,
  RESET_COLOR: 104,
  RESET_FG_COLOR: 110,
  RESET_BG_COLOR: 111,
  RESET_CURSOR_COLOR: 112,
  SEMANTIC_PROMPT: 133,
  GHOSTTY: 777,
  ITERM2_PROPRIETARY: 1337,
  TAB_STATUS: 21337,
};
function tJn(t) {
  let e = t.indexOf(";"),
    o = e >= 0 ? t.slice(0, e) : t,
    r = e >= 0 ? t.slice(e + 1) : "",
    i = parseInt(o, 10);
  if (i === Sd.SET_TITLE_AND_ICON) return { type: "title", action: { type: "both", title: r } };
  if (i === Sd.SET_ICON) return { type: "title", action: { type: "iconName", name: r } };
  if (i === Sd.SET_TITLE) return { type: "title", action: { type: "windowTitle", title: r } };
  if (i === Sd.HYPERLINK) {
    let s = r.split(";"),
      c = s[0] ?? "",
      g = s.slice(1).join(";");
    if (g === "") return { type: "link", action: { type: "end" } };
    let m = {};
    if (c)
      for (let x of c.split(":")) {
        let T = x.indexOf("=");
        if (T >= 0) m[x.slice(0, T)] = x.slice(T + 1);
      }
    return { type: "link", action: { type: "start", url: g, params: Object.keys(m).length > 0 ? m : void 0 } };
  }
  if (i === Sd.TAB_STATUS) return { type: "tabStatus", action: Y(r) };
  return { type: "unknown", sequence: `\x1B]${t}` };
}
function R(t) {
  let e = t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (e) return { type: "rgb", r: parseInt(e[1], 16), g: parseInt(e[2], 16), b: parseInt(e[3], 16) };
  let o = t.match(/^rgb:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})$/i);
  if (o) {
    let r = (i) => Math.round((parseInt(i, 16) / (16 ** i.length - 1)) * 255);
    return { type: "rgb", r: r(o[1]), g: r(o[2]), b: r(o[3]) };
  }
  return null;
}
function Y(t) {
  let e = {};
  for (let [o, r] of H(t))
    switch (o) {
      case "indicator":
        e.indicator = r === "" ? null : R(r);
        break;
      case "status":
        e.status = r === "" ? null : r;
        break;
      case "status-color":
        e.statusColor = r === "" ? null : R(r);
        break;
    }
  return e;
}
function* H(t) {
  let e = "",
    o = "",
    r = false,
    i = false;
  for (let s of t)
    if (i) {
      if (r) o += s;
      else e += s;
      i = false;
    } else if (s === "\\") i = true;
    else if (s === ";") yield [e, o], (e = ""), (o = ""), (r = false);
    else if (s === "=" && !r) r = true;
    else if (r) o += s;
    else e += s;
  if (e || r) yield [e, o];
}
function HTe(t, e) {
  if (!t) return xTe;
  let o = { id: j(t), ...e },
    r = Object.entries(o)
      .map(([i, s]) => `${i}=${s}`)
      .join(":");
  return nf(Sd.HYPERLINK, r, t);
}
function j(t) {
  let e = 0;
  for (let o = 0; o < t.length; o++) e = ((e << 5) - e + t.charCodeAt(o)) | 0;
  return (e >>> 0).toString(36);
}
var xTe = nf(Sd.HYPERLINK, "", ""),
  zOe = { NOTIFY: 0, BADGE: 2, PROGRESS: 4 },
  VOe = { CLEAR: 0, SET: 1, ERROR: 2, INDETERMINATE: 3 },
  c_t = `${S}${Sd.ITERM2};${zOe.PROGRESS};${VOe.CLEAR};${YE}`,
  nJn = `${S}${Sd.SET_TITLE_AND_ICON};${YE}`,
  u_t = nf(Sd.TAB_STATUS, "indicator=;status=;status-color=");
function P5e() {
  return false;
}
function rJn(t) {
  let e = [],
    o = (r) => (r.type === "rgb" ? `#${[r.r, r.g, r.b].map((i) => i.toString(16).padStart(2, "0")).join("")}` : "");
  if ("indicator" in t) e.push(`indicator=${t.indicator ? o(t.indicator) : ""}`);
  if ("status" in t) e.push(`status=${t.status?.replaceAll("\\", "\\\\").replaceAll(";", "\\;") ?? ""}`);
  if ("statusColor" in t) e.push(`status-color=${t.statusColor ? o(t.statusColor) : ""}`);
  return nf(Sd.TAB_STATUS, e.join(";"));
}
function V(t) {
  let e = _.from(JSON.stringify(t)).toString("base64");
  return nf(Sd.ITERM2_PROPRIETARY, `SetProfileProperty=Initial Text=${e}`);
}
var ut = V("");
export { x5e, Gue, nf, tw, zue, a_t, ZYn, eJn, l_t, h_, I5e, Sd, tJn, HTe, xTe, zOe, VOe, c_t, nJn, u_t, P5e, rJn };
