// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Le, rc } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Me } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { Kh, wt, l7e, c7e, I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { zT } from "/$bunfs/root/chunk-rgw52f13.js";
import { Nt } from "/$bunfs/root/chunk-z9bhq3k9.js";
import { mI } from "/$bunfs/root/chunk-mvz9fsh3.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
var u = new Set(["remote", "remote_cowork", "remote_desktop", "remote_mobile"]);
function Rdr(e) {
  if (wt()) return new Set(["bg"]);
  let t = new Set();
  if ((e ?? l7e()) || Kh() !== null) t.add("watched");
  if (mxt()) t.add("ccr");
  if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || rc()) t.add("bridge");
  if (a.CLAUDE_CODE_ENTRYPOINT === "claude-desktop") t.add("desktop");
  if (xdr()) t.add("cli");
  if (!Le() && Nt()) t.add("repl");
  return t;
}
function mxt() {
  if (zT("fanout")) return !0;
  if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return !0;
  if (a.CLAUDE_CODE_REMOTE) return u.has(a.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE;
  return !1;
}
async function dEr(e) {
  return O() && e !== void 0 ? c7e(e) : void 0;
}
var i = {
  bg: ["state"],
  watched: ["state"],
  ccr: ["summary"],
  bridge: ["summary"],
  desktop: ["summary"],
  cli: ["summary"],
  repl: ["headline"],
};
function kdr(e) {
  let t = new Set(),
    s = c(I("tengu_classifier_disabled_surfaces", ""));
  for (let r of e) {
    if (s.has(r)) continue;
    for (let o of i[r]) t.add(o);
  }
  if (e.has("bg")) t.delete("summary");
  if (I("tengu_classifier_summary_kill", !1)) t.delete("summary");
  return t;
}
function c(e) {
  let t = new Set();
  for (let s of e.split(",")) {
    let r = s.trim();
    if (!r) continue;
    if (r in i) t.add(r);
    else if (!mI().warnedUnknownDisabledSurface)
      (mI().warnedUnknownDisabledSurface = !0),
        n(`[classifier] tengu_classifier_disabled_surfaces: unknown surface '${r}' ignored`);
  }
  return t;
}
function Hdr(e) {
  if (e.size === 0) return null;
  let t = e.has("state")
    ? "llm"
    : !e.has("summary")
      ? "heuristic"
      : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== void 0
        ? Me(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY)
          ? "llm"
          : "heuristic"
        : f();
  return t === "llm" && I("tengu_cobalt_wren", !1) ? "heuristic" : t;
}
function f() {
  if (I("tengu_classifier_summary_llm_emit", !1)) return "llm";
  return "heuristic";
}
function xdr() {
  return !1;
}
function pEr(e) {
  return {
    status_category: e.state === "blocked" ? "blocked" : "review_ready",
    status_detail: e.detail,
    needs_action: e.state === "blocked" ? (e.needs ?? "") : "",
  };
}
function fEr(e, t) {
  let s = kdr(Rdr(!1));
  if (!s.has("summary") || Hdr(s) === null) return;
  let r = e.tool_name.startsWith("dialog:")
    ? { status_category: "blocked", status_detail: "Waiting on a user dialog", needs_action: e.action_description }
    : {
        status_category: "blocked",
        status_detail: `Waiting on permission: ${e.tool_name}`,
        needs_action: `Approve or deny ${e.tool_name}`,
      };
  t?.notifyMetadataChanged({ post_turn_summary: r });
}
export { Rdr, mxt, dEr, kdr, Hdr, xdr, pEr, fEr };
