// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $D, q9, oht, OF, M2, LE } from "/$bunfs/root/chunk-y8sx7bf9.js";
import { s_e } from "/$bunfs/root/chunk-es5p3spb.js";
import { lstat as o } from "fs/promises";
import { join as s } from "path";
var gWe = 1e5,
  hWe = 104857600;
function vx(e) {
  return $D(e) && !e.includes("\\") && !(M2() && LE(e)) && !oht(e);
}
async function I2n(e, t) {
  try {
    let r = await o(s(e, t), { bigint: !0 });
    return { path: t, identity: r.ino === 0n ? null : `${r.dev}:${r.ino}` };
  } catch {
    return { path: t, identity: null };
  }
}
function P2n(e) {
  let t = e.flatMap(({ path: n, identity: i }) => (i === null ? [] : [{ path: n, key: `${q9(n)}\x00${i}` }])),
    r = t.reduce((n, { key: i }) => n.set(i, (n.get(i) ?? 0) + 1), new Map());
  return new Set(t.filter(({ key: n }) => (r.get(n) ?? 0) > 1).map(({ path: n }) => n));
}
function D2n(e) {
  return e
    .split("\x00")
    .filter((t) => t.length > 2 && t[1] === " ")
    .map((t) => ({ tag: t[0] ?? "", path: t.slice(2) }));
}
async function TW(e, t, r, n = null) {
  let i = await OF(e, t, r, n);
  return i.kind === "read" ? { ...s_e(i.content), content: i.content, mode: i.mode } : null;
}
export { gWe, hWe, vx, I2n, P2n, D2n, TW };
