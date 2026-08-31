// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Kne, jk } from "/$bunfs/root/chunk-twwd9fep.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Bl } from "/$bunfs/root/chunk-6k63g5t6.js";
import { lS } from "/$bunfs/root/chunk-ejdwrhgv.js";
import { o0 } from "/$bunfs/root/chunk-zkvj62rn.js";
import { bht } from "/$bunfs/root/chunk-anwgkcw5.js";
import { pu, K_, eg, e$t } from "/$bunfs/root/chunk-zze8764r.js";
import { SQn } from "/$bunfs/root/chunk-1mp2j0tx.js";
import { Y6t } from "/$bunfs/root/chunk-jn7d47r1.js";
import { hO } from "/$bunfs/root/chunk-6s9ybdq1.js";
var p = new Set([lS, o0]),
  T = ["subscribe_pr_activity", "unsubscribe_pr_activity"];
function c(o) {
  return T.some((t) => o.endsWith(t));
}
function zKt(o, t) {
  if (t.length === 0) return o;
  let e = t.map((n) => [n, Bl(n)]),
    r = o.filter((n) => !e.some(([l, i]) => eg(n, l, i)));
  return r.length === o.length ? o : r;
}
function f(o) {
  return !1;
}
var s = import.meta.require("/$bunfs/root/chunk-gpgdwqf2.js");
function Fcr(o) {
  let t = a.CLAUDE_CODE_BRIEF,
    e = new Set(
      (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "")
        .split(",")
        .map((r) => r.trim())
        .filter(Boolean),
    );
  return o.filter((r) => bht.has(r.name) || c(r.name) || f(r) || Y6t(r) || (t && p.has(r.name)) || jk(r, e));
}
function J$e(o, t, e, r) {
  let [n, l] = hO(e$t(pu([...o, ...t], "name"), r), K_),
    i = [...l.sort(Kne), ...n.sort(Kne)];
  if (s) {
    if (s.isCoordinatorMode()) return Fcr(i);
  }
  return i;
}
function Q$e(o, t) {
  let e = o.length === 1 ? o[0] : void 0;
  if (e && SQn(t, e)) return [];
  return o;
}
export { zKt, Fcr, J$e, Q$e };
