// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { OM, kTe } from "/$bunfs/root/chunk-pjs8szxf.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
function Yz() {
  let e = D();
  if (e === "macos") return e;
  if (a.LC_TERMINAL === "iTerm2" || a.TERM_PROGRAM === "Apple_Terminal" || a.TERM_PROGRAM === "iTerm.app")
    return "macos";
  return e;
}
var p = { "\u2020": "t" };
function m(e) {
  return Object.hasOwn(p, e);
}
var Lgn = { \u{3c0}: "alt+p", \u{f8}: "alt+o" };
function BYn(e) {
  return Object.hasOwn(Lgn, e);
}
var C = {
  escape: "escape",
  return: "enter",
  tab: "tab",
  backspace: "backspace",
  delete: "delete",
  up: "up",
  down: "down",
  left: "left",
  right: "right",
  pageup: "pageup",
  pagedown: "pagedown",
  wheelup: "wheelup",
  wheeldown: "wheeldown",
  home: "home",
  end: "end",
};
function kjt(e, t, o) {
  let n = false,
    r;
  for (let c = 0; c < o.length; c++) {
    let i = o[c];
    if (!i || i.context !== t || i.action !== e) continue;
    n = true;
    let u = false;
    for (let l = c + 1; l < o.length; l++) {
      let s = o[l];
      if (s && s.context === t && f(s.chord, i.chord)) {
        u = true;
        break;
      }
    }
    if (!u) r = i.chord;
  }
  if (r) return r;
  return n ? null : void 0;
}
function jYn(e, t, o) {
  let n = new Set(t),
    r = new Map();
  for (let i of o) {
    if (!n.has(i.context)) continue;
    let u = r.get(i.context);
    if (u) u.push(i);
    else r.set(i.context, [i]);
  }
  let c = false;
  for (let i = 0; i < t.length; i++) {
    let u = t[i];
    if (u === void 0) continue;
    let l = r.get(u);
    if (!l) continue;
    let s = kjt(e, u, l);
    if (s === null) {
      c = true;
      continue;
    }
    if (s) {
      for (let d = 0; d < i; d++) {
        let h = t[d];
        if (h === void 0) continue;
        let y = r.get(h);
        if (!y) continue;
        if (y.some((g) => g && f(g.chord, s))) return null;
      }
      return s;
    }
  }
  return c ? null : void 0;
}
function WYn(e, t, o) {
  let n = null;
  for (let r of o) {
    if (r.context !== t || r.chord.length !== 1) continue;
    let c = r.chord[0];
    if (c && A5e(c, e)) n = r.action;
  }
  return n;
}
function f(e, t) {
  if (e.length !== t.length) return false;
  for (let o = 0; o < e.length; o++) {
    let n = e[o],
      r = t[o];
    if (!n || !r || !A5e(n, r)) return false;
  }
  return true;
}
function Bue(e, t, o) {
  let n = kjt(e, t, o);
  return n ? kTe(n, Yz()) : n;
}
function k(e) {
  let t =
      e.name === "enter"
        ? `
`
        : e.key,
    o = e.meta;
  if (D() === "macos" && !e.meta && !e.ctrl && m(t)) (t = p[t]), (o = true);
  let n = C[e.name] ?? (t.length === 1 ? t.toLowerCase() : null);
  if (!n) return null;
  let r = e.shift || (t.length === 1 && t !== t.toLowerCase() && t === t.toUpperCase());
  return { key: n, ctrl: e.ctrl, alt: o, shift: r, meta: o, super: e.superKey };
}
function A5e(e, t) {
  return (
    e.key === t.key &&
    e.ctrl === t.ctrl &&
    e.shift === t.shift &&
    (e.alt || e.meta) === (t.alt || t.meta) &&
    e.super === t.super
  );
}
function x(e, t) {
  if (e.length >= t.chord.length) return false;
  for (let o = 0; o < e.length; o++) {
    let n = e[o],
      r = t.chord[o];
    if (!n || !r) return false;
    if (!A5e(n, r)) return false;
  }
  return true;
}
function jue(e, t, o, n) {
  if (e.name === "escape" && n !== null) return { type: "chord_cancelled" };
  let r = k(e);
  if (!r) {
    if (n !== null) return { type: "chord_cancelled" };
    return { type: "none" };
  }
  let c = n ? [...n, r] : [r],
    i = null,
    u;
  for (let l of o) {
    if (!t.includes(l.context)) continue;
    if (l.chord.length > c.length) {
      if (x(c, l)) (i ??= new Map()), i.set(OM(l.chord), l.action);
    } else if (f(c, l.chord)) u = l;
  }
  if (i !== null) {
    for (let l of i.values()) if (l !== null) return { type: "chord_started", pending: c };
  }
  if (u) {
    if (u.action === null) return { type: "unbound" };
    return { type: "match", action: u.action };
  }
  if (n !== null) return { type: "chord_cancelled" };
  return { type: "none" };
}
function qOe(e, t, o, n) {
  if (e.name === "escape" && n !== null) return { type: "chord_cancelled" };
  let r = k(e);
  if (!r) {
    if (n !== null) return { type: "chord_cancelled" };
    return { type: "none" };
  }
  let c = n ? [...n, r] : [r],
    i = new Set(t),
    u = new Map(),
    l = new Map();
  for (let s of o) {
    if (!i.has(s.context)) continue;
    if (s.chord.length > c.length) {
      if (x(c, s)) u.set(OM(s.chord), s.action);
    } else if (f(c, s.chord)) l.set(s.context, s);
  }
  for (let s of u.values()) if (s !== null) return { type: "chord_started", pending: c };
  for (let s of t) {
    let d = l.get(s);
    if (d) {
      if (d.action === null) return { type: "unbound" };
      return { type: "match", action: d.action };
    }
  }
  if (n !== null) return { type: "chord_cancelled" };
  return { type: "none" };
}
export { Lgn, BYn, Yz, kjt, jYn, WYn, Bue, A5e, jue, qOe };
