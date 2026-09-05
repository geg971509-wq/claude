// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { E } from "/$bunfs/root/chunk-ypdw393e.js";
import { rs, ku, Ry, cx } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { Qlt, L8 } from "/$bunfs/root/chunk-zze8764r.js";
import { $D, vk, iht, Rt, z9, yOe, Qwe, hne, kk, M2, LE } from "/$bunfs/root/chunk-y8sx7bf9.js";
import { HDt, EW } from "/$bunfs/root/chunk-802k7j4j.js";
import { mst, E2n } from "/$bunfs/root/chunk-mdvz5n39.js";
import { gWe } from "/$bunfs/root/chunk-r8n98t6s.js";
import { dne, rmn, R6t } from "/$bunfs/root/chunk-0manfhn2.js";
import { ea } from "/$bunfs/root/chunk-9yzzw213.js";
import { c$ } from "/$bunfs/root/chunk-6dqhz7zj.js";
import { No } from "/$bunfs/root/chunk-ewy8x8d5.js";
import { Q } from "/$bunfs/root/chunk-wag5ye9w.js";
import { j } from "/$bunfs/root/chunk-yz031c9r.js";
var x = j(c$(), 1);
import { lstat as F, open as H, opendir as U, realpath as D } from "fs/promises";
import { join as p } from "path";
var w = 8,
  g2n = 4096,
  h2n = 2000,
  _2n = 1024,
  v = /^[A-Za-z]:/;
function Mpr(e) {
  return (
    e.length > 0 &&
    e.length <= g2n &&
    Buffer.byteLength(e, "utf8") <= g2n &&
    $D(e) &&
    !v.test(e) &&
    !e.includes("\\") &&
    !cx.test(e) &&
    ku(e)
  );
}
var Y = /[\x00-\x08\x0A-\x1F\x7F-\x9F]/,
  y2n = 4,
  S2n = 2,
  K = /\*+/g,
  X = /\*\*+/g;
function Vnn(e) {
  if (e.length > _2n) return "too_long";
  if (Y.test(e) || !ku(e)) return "control_character";
  return (e.match(K)?.length ?? 0) > y2n || (e.match(X)?.length ?? 0) > S2n ? "too_many_wildcards" : null;
}
function Npr(e) {
  return Vnn(e) === null;
}
function Qhe(e, t) {
  let n = yOe(e).flatMap((r) => r.split("/").map((o, s, i) => ({ part: o, holdsEntries: t || s < i.length - 1 })));
  return n.some(({ part: r }) => r.length === 0 || vk(r))
    ? "filtered"
    : n.some(({ part: r, holdsEntries: o }) => o && z9.has(r))
      ? "dependency_dir"
      : null;
}
var z = /[\p{Cc}\p{Cf}]/gu;
function Fpr(e) {
  return Ry(e).replace(z, "\uFFFD");
}
var M = ".git";
function Knn(e) {
  let t = new Map(),
    n = (r) => {
      let o = t.get(r);
      if (o === void 0) {
        let s = p(e, r);
        (o = F(p(s, M)).then(
          () => true,
          () => R6t(s),
        )),
          t.set(r, o);
      }
      return o;
    };
  return async (r) => {
    let o = r.split("/");
    for (let s = 1; s < o.length; s++) if (await n(o.slice(0, s).join("/"))) return true;
    return false;
  };
}
var V = ".gitignore",
  _Dt = 1048576,
  $pr = 4 * gWe,
  DEr = () => null,
  Upr = { ignoresFile: () => false, ignoresDirectory: () => false };
function Zhe(e) {
  return iht(e);
}
function AHe(e, { ignoreCase: t }) {
  let n = (o) => (t ? o.normalize("NFC") : o),
    r = x.default({ ignorecase: t }).add(L8(e.map(n), "dir_sync_folder_ignore"));
  return { ignoresFile: (o) => r.ignores(n(o)), ignoresDirectory: (o) => r.ignores(n(o) + "/") };
}
function m(e) {
  return { kind: "unusable", reason: e };
}
function C() {
  return { kind: "lines", lines: [], adjusted: [] };
}
var Z = 120,
  OEr = `more wildcards than sync matches safely (more than ${String(y2n)} "*" runs, or more than ${String(S2n)} of them "**")`,
  LEr = "a bracket expression, an escape or a trailing blank that sync reads differently from git";
function b2n(e) {
  let t = Fpr(e),
    n = rs(t, Z);
  return '"' + n + (n.length < t.length ? "\u2026" : "") + '"';
}
function Xnn(e) {
  switch (e.reason) {
    case "unreadable":
      return "cannot be read";
    case "linked":
      return "is a link or has a second name, so it is not trusted (replace it with a plain file)";
    case "too_large":
      return `is larger than sync honours (over ${String(_Dt / 1048576)} MiB, more than ${h2n.toLocaleString("en-US")} rules, or a rule longer than ${_2n.toLocaleString("en-US")} characters)`;
    case "malformed":
      return e.fault === "control_character"
        ? `has a control character in line ${String(e.lineNumber)} (${b2n(e.rule)}), which no line of a text file holds, so it is not trusted`
        : `has a rule in line ${String(e.lineNumber)} (${b2n(e.rule)}) that cannot be read as a pattern (an unclosed bracket, say), so it is not trusted`;
  }
}
async function CHe(e) {
  let t = p(e, V),
    n;
  try {
    n = await F(t, { bigint: true });
  } catch (r) {
    return w2n(E(r)) ? C() : m("unreadable");
  }
  if (n.isSymbolicLink()) return m("linked");
  if (!n.isFile()) return C();
  if (n.nlink !== 1n) return m("linked");
  if (n.size > BigInt(_Dt)) return m("too_large");
  try {
    let r = await H(t, ea());
    try {
      let o = await r.stat({ bigint: true });
      if (!o.isFile() || o.dev !== n.dev || o.ino !== n.ino || o.nlink !== 1n) return m("linked");
      let s = await hne(r, _Dt + 1);
      if (s.length > _Dt) return m("too_large");
      return qpr(
        s
          .toString("utf8")
          .replace(/^\uFEFF/, "")
          .split(/\r?\n/),
        { foldsCase: Zhe(e) },
      );
    } finally {
      await r.close();
    }
  } catch {
    return m("unreadable");
  }
}
function T(e) {
  return Qlt(e) === null && Qlt(e.normalize("NFC")) === null;
}
var q = /[[\\]/,
  O = /^\*{2,}$/;
function Bpr(e) {
  let t = e.startsWith("/"),
    n = /^[^*?[\\/]*/.exec(t ? e.slice(1) : e)?.[0] ?? "";
  return (t ? "/" : "") + n + "*";
}
function jpr(e) {
  if (e.startsWith("!") || q.test(e)) return null;
  let t = P(e.replace(/\/$/, "").split("/"));
  return (
    Array.from({ length: t.length - 1 }, (n, r) => J(t.slice(0, t.length - 1 - r)))
      .filter((n) => n.some((r) => r !== ""))
      .map((n) => (n.length === 1 && n[0] !== "" ? "/" : "") + n.join("/") + "/")
      .find((n) => Npr(n) && T(n)) ?? null
  );
}
function P(e) {
  return e.map((t) => (O.test(t) ? "**" : t)).filter((t, n, r) => !(t === "**" && r[n - 1] === "**"));
}
function J(e) {
  return e.slice(0, e.findLastIndex((t) => !O.test(t)) + 1);
}
var ee = "*[]\\ #!";
function Wpr(e, { foldsCase: t = true } = {}) {
  let n = e.startsWith("!"),
    r = n ? e.slice(1) : e,
    o = ne(r),
    s = o.replace(oe, (u) => "?".repeat(u.length)),
    i = [],
    l = s !== o,
    d = false,
    g = false,
    h = false,
    k = false,
    c = 0;
  while (c < s.length) {
    let u = s[c] ?? "";
    if (u === "\\" && c + 1 < s.length) {
      let a = s[c + 1] ?? "";
      if (ee.includes(a)) (h ||= a === "\\"), i.push(u + a);
      else
        (k ||= a === "/" && (i.length === 0 || c + 2 === s.length || (i.at(-1) === "*" && i.at(-2) === "*"))),
          (l ||= a === "?"),
          i.push(a);
      c += 2;
      continue;
    }
    if (u === G) {
      (l = true), i.push("?"), (c += 1);
      continue;
    }
    if (u === "[") {
      let a = ue(s, c);
      if (a === null) {
        (d = true), i.push(s.slice(c));
        break;
      }
      (l ||= !a.plain || a.nonAscii),
        (g ||= a.foldsApart),
        i.push(a.plain && !a.nonAscii ? s.slice(c, a.end) : "?"),
        (c = a.end);
      continue;
    }
    i.push(u), (c += 1);
  }
  let S = te(i).join("").replace(ae, "?"),
    y = P(S.split("/")).join("/"),
    _ = y === "/**" ? "**" : y,
    I = l || k || S !== i.join("");
  return {
    line: (n ? "!" : "") + _,
    widened: I,
    readWider: I || d || h || (t && g) || le.test(_) || ce.test(_) || ie.test(o) || (t && W.test(_)) || _.includes("?"),
  };
}
function ne(e) {
  let t = e.length;
  while (t > 0 && e[t - 1] === " " && !re(e, t - 1)) t -= 1;
  return e.slice(0, t);
}
function te(e) {
  let t = (o) => o === "?" || o === "*",
    n = [],
    r = 0;
  for (let o = 0; o <= e.length; o += 1) {
    if (o < e.length && t(e[o] ?? "")) continue;
    let s = e.slice(r, o);
    if ((n.push(...(Q(s, (i) => i === "?") >= 2 ? ["?", "*"] : s)), o < e.length)) n.push(e[o] ?? "");
    r = o + 1;
  }
  return n;
}
function re(e, t) {
  let n = 0;
  while (n < t && e[t - 1 - n] === "\\") n += 1;
  return n % 2 === 1;
}
var oe = /[\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
  ie = /\t$/,
  se = /^[ \t\r]*$/,
  ae = /^\uFEFF/,
  le = /\/\*\*\/$/,
  ce = /\\\*$/;
function ue(e, t) {
  let n = e[t + 1] === "!" || e[t + 1] === "^",
    r = t + 1 + (n ? 1 : 0),
    o = e[r] === "]",
    s = me(e, r + (o ? 1 : 0), o);
  if (s === null) return null;
  let i = e.slice(r, s);
  return {
    end: s + 1,
    nonAscii: W.test(i),
    foldsApart: [...i.replace(pe, "")].some((l) => ge.test(l) && !i.includes(l.toLowerCase())),
    plain: !n && !o && !de.test(i) && !i.includes("[:") && !fe(i),
  };
}
var de = /[\\/*?]/,
  W = /[^\x00-\x7f]/,
  ge = /^[A-Z]$/,
  pe = /.-[^\]]/g;
function fe(e) {
  let t = null;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n] === "\\" && n + 1 < e.length,
      o = r ? (e[n + 1] ?? "") : (e[n] ?? "");
    if (((n += r ? 1 : 0), o === "-" && !r && t !== null && n + 1 < e.length)) {
      let s = e[n + 1] === "\\" && n + 2 < e.length,
        i = s ? (e[n + 2] ?? "") : (e[n + 1] ?? "");
      if ((t <= "/" && "/" <= i) || t > i) return true;
      (n += s ? 2 : 1), (t = null);
    } else t = o;
  }
  return false;
}
function me(e, t, n) {
  let r = n;
  for (let o = t; o < e.length; o += 1)
    if (e[o] === "\\") (o += 1), (r = true);
    else if (e[o] === "-" && r && o + 1 < e.length && e[o + 1] !== "]") (o += e[o + 1] === "\\" ? 2 : 1), (r = false);
    else if (e[o] === "[" && e[o + 1] === ":") {
      let s = e.indexOf("]", o + 2),
        i = s > o + 2 && e[s - 1] === ":";
      (o = i ? s : o), (r = !i);
    } else if (e[o] === "]") return o;
    else r = true;
  return null;
}
var he = /^!\s*$/;
function qpr(e, t = {}) {
  let n = e
    .map((i, l) => ({ rule: i, lineNumber: l + 1 }))
    .filter(({ rule: i }) => !se.test(i) && !i.startsWith("#") && !he.test(i))
    .map((i) => {
      let l = Vnn(i.rule);
      if (l === "too_long" || l === "control_character") return { ...i, line: i.rule, widened: false, fault: l };
      let { line: d, widened: g, readWider: h } = Wpr(i.rule, t),
        k = i.rule.startsWith("!") ? h : g;
      return { ...i, line: d, widened: k, fault: Vnn(d) };
    });
  if (n.length > h2n || n.some(({ fault: i }) => i === "too_long")) return m("too_large");
  let r = n.find(({ line: i, fault: l }) => l === "control_character" || !T(i));
  if (r !== void 0)
    return {
      kind: "unusable",
      reason: "malformed",
      fault: r.fault === "control_character" ? "control_character" : "uncompilable",
      lineNumber: r.lineNumber,
      rule: r.rule,
    };
  let o = n.filter(({ widened: i, fault: l }) => !i && l === null),
    s = n
      .filter(({ widened: i, fault: l }) => i || l === "too_many_wildcards")
      .map(({ rule: i, line: l, lineNumber: d, fault: g }) => ({
        lineNumber: d,
        rule: i,
        appliedAs: i.startsWith("!") ? null : g === "too_many_wildcards" ? (jpr(l) ?? Bpr(l)) : l,
        why: g === "too_many_wildcards" ? "wildcards" : "spelling",
      }));
  return {
    kind: "lines",
    lines: [...o.map(({ line: i }) => i), ...s.flatMap(({ appliedAs: i }) => (i === null ? [] : [i]))],
    adjusted: s,
  };
}
async function MEr(e) {
  let t = await CHe(e);
  return t.kind === "unusable" ? null : t.lines.length === 0 ? Upr : AHe(t.lines, { ignoreCase: Zhe(e) });
}
function w2n(e) {
  return e === "ENOENT" || e === "ENOTDIR";
}
async function ke(e, t, n, r, o) {
  try {
    if (n !== "" && (await D(p(e, n))) !== p(t, n)) return { kind: "unreadable" };
    let s = [];
    for await (let i of await U(p(e, n))) {
      if (r.remaining <= 0 || Rt(o)) return { kind: "too_many" };
      if ((r.remaining--, n !== "" && i.name === M)) return { kind: "nested_repository" };
      s.push({ path: n === "" ? i.name : n + "/" + i.name, dirent: i });
    }
    if (n !== "" && (await ye(e, n, s))) return { kind: "nested_repository" };
    return { kind: "entries", entries: s.toSorted(EW) };
  } catch {
    return { kind: "unreadable" };
  }
}
async function ye(e, t, n) {
  let r = n.filter(({ dirent: s }) => s.name === dne.head || s.name === dne.objects || s.name === dne.refs);
  if (r.length < 3) return false;
  let o = r.map(({ dirent: s }) => ({
    name: s.name,
    isDirectory: s.isDirectory(),
    isSymbolicLink: s.isSymbolicLink(),
    typeKnown: s.isFile() || s.isDirectory() || s.isSymbolicLink(),
  }));
  return o.every((s) => s.typeKnown) ? rmn(o) : R6t(p(e, t));
}
var G = "\uFFFD";
function _e(e, t, n) {
  return !e.includes("/") && !e.includes(G) && Mpr(t) && !(M2() && LE(e)) && HDt({ path: t }) && !(n ? E2n(t) : mst(t));
}
async function Re(e, { path: t, dirent: n }) {
  if (n.isSymbolicLink()) return "symlink";
  if (n.isDirectory()) return "directory";
  if (n.isFile() || n.isFIFO() || n.isSocket() || n.isBlockDevice() || n.isCharacterDevice()) return "other";
  try {
    let r = await F(p(e, t));
    return r.isSymbolicLink() ? "symlink" : r.isDirectory() ? "directory" : "other";
  } catch {
    return "unknown";
  }
}
function Se(e, t, n) {
  switch (t) {
    case "directory":
      return n.ignoresDirectory(e);
    case "other":
      return n.ignoresFile(e);
    case "symlink":
    case "unknown":
      return n.ignoresFile(e) || n.ignoresDirectory(e);
  }
}
function Ie({ path: e, dirent: t }, n, r, o) {
  let s = Qhe(t.name, n === "directory");
  if (s !== null) return { kind: "skip", reason: s };
  if (Se(e, n, r)) return { kind: "ignored" };
  let i = o(e, false);
  if (i !== null) return { kind: "skip", reason: i };
  if (!_e(t.name, e, n === "directory")) return { kind: "skip", reason: "unsafe_name" };
  switch (n) {
    case "symlink":
      return { kind: "skip", reason: "symlink" };
    case "unknown":
      return { kind: "skip", reason: "unreadable" };
    case "directory":
      return { kind: "descend" };
    case "other":
      return { kind: "candidate" };
  }
}
async function Gpr(e, t) {
  try {
    let n = Date.now(),
      r = await F(p(e, t));
    if (r.isDirectory()) return { kind: "skip", skipped: { path: t, reason: "changed" }, mayHoldFiles: true };
    let o = Qwe(r);
    if (o !== null) return { kind: "skip", skipped: { path: t, reason: o }, mayHoldFiles: r.isSymbolicLink() };
    return {
      kind: "file",
      file: {
        path: t,
        size: r.size,
        mtimeMs: r.mtimeMs,
        mode: r.mode & 511,
        observedAtMs: n,
        ino: r.ino,
        ctimeMs: r.ctimeMs,
      },
    };
  } catch (n) {
    return w2n(E(n))
      ? { kind: "gone" }
      : { kind: "skip", skipped: { path: t, reason: "unreadable" }, mayHoldFiles: true };
  }
}
async function Ynn({ root: e, ignores: t, withheldOf: n, signal: r, maxFiles: o = gWe, maxVisited: s = $pr }) {
  let i = [],
    l = [],
    d = [],
    g = [],
    h = [],
    k = 0,
    c = { remaining: s },
    S = await D(e).catch(() => null);
  if (S === null) return { ok: false, reason: "root_unreadable" };
  let y = [""],
    _ = No(w, (a) => ke(e, S, a, c, r));
  while (y.length > 0) {
    if (Rt(r)) return { ok: false, reason: "aborted" };
    let a = y,
      N = await kk(a.map(_), r);
    if (N === null) return { ok: false, reason: "aborted" };
    y = [];
    for (let [B, R] of N.entries()) {
      let b = a[B];
      if (R.kind === "unreadable" || R.kind === "nested_repository") {
        if (R.kind === "unreadable" && b === "") return { ok: false, reason: "root_unreadable" };
        i.push({ path: b, reason: n(b, false) ?? R.kind }), d.push(b);
        continue;
      }
      if (R.kind === "too_many") return { ok: false, reason: Rt(r) ? "aborted" : "too_many_files" };
      for (let f of R.entries) {
        let L = await Re(e, f),
          A = Ie(f, L, t, n);
        switch (A.kind) {
          case "descend":
            y.push(f.path);
            break;
          case "candidate":
            l.push(f.path);
            break;
          case "skip":
            i.push({ path: f.path, reason: A.reason });
            break;
          case "ignored":
            if ((k++, L === "other")) g.push(f.path);
            else h.push(f.path);
            break;
        }
        if (L !== "other" && (A.kind === "skip" || A.kind === "ignored")) d.push(f.path);
      }
      if (l.length > o) return { ok: false, reason: "too_many_files" };
    }
  }
  let I = No(w, (a) => (Rt(r) ? Promise.resolve({ kind: "gone" }) : Gpr(e, a))),
    u = await kk(l.map(I), r);
  if (u === null || Rt(r)) return { ok: false, reason: "aborted" };
  return {
    ok: true,
    listing: {
      files: u.flatMap((a) => (a.kind === "file" ? [a.file] : [])).toSorted(EW),
      skipped: [...i, ...u.flatMap((a) => (a.kind === "skip" ? [a.skipped] : []))].toSorted(EW),
      ignoredCount: k,
      ignoredFiles: g.toSorted(),
      ignoredDirectories: h.toSorted(),
      unlistedDirectories: [
        ...d,
        ...u.flatMap((a) => (a.kind === "skip" && a.mayHoldFiles ? [a.skipped.path] : [])),
      ].toSorted(),
    },
  };
}
export {
  g2n,
  h2n,
  _2n,
  Mpr,
  y2n,
  S2n,
  Vnn,
  Npr,
  Qhe,
  Fpr,
  Knn,
  _Dt,
  $pr,
  DEr,
  Upr,
  Zhe,
  AHe,
  OEr,
  LEr,
  b2n,
  Xnn,
  CHe,
  Bpr,
  jpr,
  Wpr,
  qpr,
  MEr,
  w2n,
  Gpr,
  Ynn,
};
