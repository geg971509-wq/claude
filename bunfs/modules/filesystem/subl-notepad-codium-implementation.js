// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, Cl } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Io } from "/$bunfs/root/chunk-q04k5ycg.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { $C, a } from "/$bunfs/root/chunk-fec4384a.js";
import { fS, sAt } from "/$bunfs/root/chunk-s28wf80n.js";
import { spawn as v, spawnSync as m } from "child_process";
import { basename as l } from "path";
function A(t) {
  return !!$C(t);
}
var E = new Set(["start", "cmd", "cmd.exe"]);
function h(t) {
  let e = t.trim().split(/\s+/);
  for (let r of e) {
    if (/^\/[^/]+$/.test(r)) continue;
    if (r.startsWith("-")) continue;
    let d = l(r);
    if (E.has(d.toLowerCase())) continue;
    return d;
  }
  return l(e[0] ?? t);
}
var b = ["code", "cursor", "windsurf", "codium", "subl", "atom", "gedit", "notepad++", "notepad"],
  x = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/,
  O = new Set(["code", "cursor", "windsurf", "codium"]);
function $Jt(t) {
  let e = h(t);
  return b.find((r) => e.includes(r));
}
function R(t, e, r) {
  if (!r) return [e];
  if (O.has(t)) return ["-g", `${e}:${r}`];
  if (t === "subl") return [`${e}:${r}`];
  return [e];
}
function xse(t, e) {
  let r = vS();
  if (!r) return false;
  let d = r.split(" "),
    c = d[0] ?? r,
    p = d.slice(1),
    g = $Jt(r);
  if (g) {
    let u = R(g, t, e),
      i = { detached: true, stdio: "ignore", windowsHide: true },
      o;
    return (
      (o = v(c, [...p, ...u], i)),
      o.on("error", (s) => n(`editor spawn failed: ${s}`, { level: "error" })),
      fS(o.pid),
      o.unref(),
      true
    );
  }
  let f = Io.get(process.stdout);
  if (!f) return false;
  let S = e && x.test(l(c));
  f.enterAlternateScreen();
  try {
    let u = { stdio: "inherit" },
      i;
    {
      let o = [...p, ...(S ? [`+${e}`, t] : [t])],
        s = sAt();
      if (((i = m(c, o, { ...u, ...s })), i.error && s.cgroup !== void 0)) i = m(c, o, u);
    }
    if (i.error) return n(`editor spawn failed: ${i.error}`, { level: "error" }), false;
    return true;
  } finally {
    f.exitAlternateScreen();
  }
}
class w {
  isResolved = false;
  editor = void 0;
  resolve() {
    if (this.isResolved) return this.editor;
    if (a.VISUAL) this.editor = a.VISUAL;
    else if (a.EDITOR) this.editor = a.EDITOR;
    else {
      let t = ["code", "vi", "nano"];
      this.editor = t.find((e) => A(e));
    }
    return (this.isResolved = true), this.editor;
  }
  reset() {
    (this.isResolved = false), (this.editor = void 0);
  }
}
var y = new J(() => new w());
function C() {
  return y.of(G().host);
}
function vS() {
  return Cl()?.editor ?? C().resolve();
}
function Sx() {
  let t = vS();
  if (!t) return;
  let e = h(t);
  return e && e.length <= 8 ? e : void 0;
}
export { $Jt, xse, vS, Sx };
