// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ku } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { mOe, q9, LE } from "/$bunfs/root/chunk-y8sx7bf9.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { Y } from "/$bunfs/root/chunk-s7e0px8j.js";
var _ = /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[zZ]|[+-]\d{2}:?\d{2})$/;
function OZe(n) {
  return _.test(n) ? Date.parse(n) : Number.NaN;
}
import { posix as m } from "path";
var x = m.dirname(mOe),
  p = "/mnt/user-data/working",
  d = m.join(p, mOe),
  svt = 32,
  E$e = 524288,
  TIn = 2097152,
  Q5t = 200,
  E = 237,
  f = 4,
  H = "CLAUDE.md",
  Z5t = "rules",
  eKt = "output-styles",
  A$e = "settings.json",
  c = ".md",
  M =
    /[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u,
  A = /^\p{M}/u;
function g(n) {
  return (
    n !== "" &&
    n === n.trim() &&
    Buffer.byteLength(n, "utf8") <= E &&
    !n.startsWith(".") &&
    !LE(n) &&
    !n.includes("\\") &&
    !M.test(n) &&
    !A.test(n) &&
    !n.endsWith("~") &&
    !n.endsWith(".swp") &&
    !n.endsWith(".tmp")
  );
}
function l(n) {
  return n.length > c.length && n.endsWith(c);
}
function tKt(n) {
  return q9(n);
}
function F(n) {
  return l(tKt(n));
}
function C$e(n) {
  if (n.length > Q5t || !ku(n) || n.normalize("NFC") !== n) return null;
  let e = n.split("/");
  if (!e.every(g)) return null;
  let [t, ...o] = e;
  if (o.length === 0) return t === H ? "claude_md" : null;
  let i = o.slice(0, -1),
    r = o.at(-1) ?? "";
  if (!l(r) || i.some(F)) return null;
  if (o.length > f) return null;
  return t === Z5t ? "rule" : t === eKt ? "output_style" : null;
}
function LZe(n) {
  return C$e(n) !== null;
}
function avt(n) {
  let e = C$e(n);
  return e === null ? null : { destination: n, kind: e };
}
var D = 8,
  nKt = 256;
function EIn() {
  let n = [],
    e = 0,
    t = false,
    o = false,
    i = Ue();
  return {
    noteStagedRow(r) {
      if (r.mount_path !== d) return false;
      let u = r.content_sha256,
        s = typeof u === "string" && u.length > 0 && u.length <= nKt ? u : null;
      if (s === null) {
        if (!o) (o = true), Y("warn", "home_seed_stage_without_usable_etag", {});
        return false;
      }
      e++;
      let a = { etag: s, beforeFirstCommand: !t, ordinal: e };
      n = [...n, a].slice(-D);
      try {
        i.emit(a);
      } catch {
        Y("error", "home_seed_announcement_listener_threw", {});
      }
      return true;
    },
    markFirstCommandDequeued() {
      t = true;
    },
    firstCommandDequeued() {
      return t;
    },
    announcements() {
      return n;
    },
    announcementCount() {
      return e;
    },
    announcementForEtag(r) {
      return n.findLast((u) => u.etag === r);
    },
    announced: { subscribe: i.subscribe },
  };
}
export { OZe, svt, E$e, TIn, Q5t, Z5t, eKt, A$e, tKt, C$e, LZe, avt, nKt, EIn };
