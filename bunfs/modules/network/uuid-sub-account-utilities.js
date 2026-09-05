// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Kre } from "/$bunfs/root/chunk-gtv2468w.js";
import { rl } from "/$bunfs/root/chunk-4r03fm98.js";
import { Fht } from "/$bunfs/root/chunk-gdhqsw8a.js";
import { I$ } from "/$bunfs/root/chunk-szz73wxx.js";
function _Te() {
  return Kre().status === "ok" && rl() !== null;
}
function c() {
  let n = rl();
  if (n === null) return null;
  let t = I$(n);
  return t !== null && typeof t === "object" && !Array.isArray(t) ? t : null;
}
function l5e() {
  let n = c();
  return n !== null && s(n);
}
function s(n) {
  let t = "act_as_bot" in n ? n.act_as_bot : void 0;
  return t === true || t === "true";
}
function Nht() {
  let n = c();
  if (n === null) return false;
  let t = (e) => typeof e === "string" && e !== "";
  return (
    !("account_uuid" in n || "sub" in n) &&
    "org_service_name" in n &&
    t(n.org_service_name) &&
    "code_agent_id" in n &&
    t(n.code_agent_id)
  );
}
function qXn() {
  let n = c();
  if (n === null || !s(n)) return false;
  let t = (o) => typeof o === "string" && o !== "",
    r = ("account_uuid" in n && t(n.account_uuid)) || ("sub" in n && t(n.sub)),
    e = (o) => o !== void 0 && o !== null && o !== "",
    u = "code_agent_id" in n && e(n.code_agent_id),
    a = "ccr:child_owner_account_uuid" in n && e(n["ccr:child_owner_account_uuid"]);
  return r && !u && !a;
}
var ejt = "/v1/code/agent-proxy",
  l = /^\/v1\/code\/sessions\/([^/]+)\/?$/;
function i() {
  if (Fht()) {
    let n = Kre();
    if (n.status === "ok") {
      let t = l.exec(new URL(n.url).pathname)?.[1];
      if (t !== void 0) return `/v1/code/sessions/${t}/agent-proxy`;
    }
  }
  return ejt;
}
function GXn(n) {
  let t = n.startsWith("/api/frame/") ? n.slice(10) : n;
  return `${i()}/frame${t}`;
}
var US = "artifact_mount";
function yTe(n, t) {
  return `${i()}/artifact/${encodeURIComponent(n)}${t}`;
}
function STe(n) {
  return { "x-frame-asset-token": n };
}
export { _Te, l5e, Nht, qXn, ejt, GXn, US, yTe, STe };
