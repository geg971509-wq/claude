// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { b, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { li } from "/$bunfs/root/chunk-a6xhjq7b.js";
import { UL } from "/$bunfs/root/chunk-zze8764r.js";
function u(e) {
  if (!Array.isArray(e)) return [];
  let i = UL(),
    s = [];
  for (let o of e) {
    let t = i.safeParse(o);
    if (t.success) s.push(t.data);
    else n(`[SwarmPermissionPoller] Dropping malformed permissionUpdate entry: ${t.error.message}`, { level: "warn" });
  }
  return s;
}
function Tit(e) {
  li().swarmPermissions.pending.set(e.requestId, e),
    n(`[SwarmPermissionPoller] Registered callback for request ${e.requestId}`);
}
function kje(e) {
  li().swarmPermissions.pending.delete(e), n(`[SwarmPermissionPoller] Unregistered callback for request ${e}`);
}
function zUn(e) {
  return li().swarmPermissions.pending.has(e);
}
function VUn() {
  li().swarmPermissions.clear();
}
var d = true;
function a(e, i) {
  let s = i.toolUseId === void 0 ? d : i.toolUseId === e.toolUseId,
    o = i.approvedRequest,
    t = o === void 0 ? d : o.tool_use_id === e.toolUseId && o.tool_name === e.toolName,
    r = o === void 0 ? d : o.input_digest === e.inputDigest;
  if (!s || !t) return "mismatch";
  if (!r) return "input_digest_mismatch";
  return i.toolUseId === void 0 || o === void 0 ? "unbound" : "bound";
}
function Hje(e) {
  let i = li().swarmPermissions.pending,
    s = i.get(e.requestId);
  if (!s) return n(`[SwarmPermissionPoller] No callback registered for mailbox response ${b(e.requestId)}`), false;
  i.delete(e.requestId);
  let o = a(s, e);
  if (o === "mismatch" || o === "input_digest_mismatch") {
    let t = e.approvedRequest,
      r = e.decision === "approved" ? "approval" : "denial",
      l =
        o === "input_digest_mismatch"
          ? `this ${b(s.toolName)} call (${b(s.toolUseId)}), but its input digest differs`
          : `${t ? `${b(t.tool_name)} (${b(t.tool_use_id)})` : b(e.toolUseId)}, not this ${b(s.toolName)} call (${b(s.toolUseId)})`;
    return (
      n(`[SwarmPermissionPoller] Refusing ${r} for request ${b(e.requestId)}: the leader answered ${l}`, {
        level: "warn",
      }),
      s.onRefuse(`The ${r} did not describe this tool call, so it was refused.`, r),
      true
    );
  }
  if (
    (n(`[SwarmPermissionPoller] Processing mailbox response for request ${b(e.requestId)}: ${e.decision} (${o})`),
    o === "unbound")
  )
    s.onUnboundVerdict();
  if (e.decision === "approved") {
    let t = u(e.permissionUpdates),
      r = e.updatedInput;
    s.onAllow(r, t);
  } else s.onReject(e.feedback);
  return true;
}
function KUn(e) {
  li().swarmPermissions.pendingSandbox.set(e.requestId, e),
    n(`[SwarmPermissionPoller] Registered sandbox callback for request ${e.requestId}`);
}
function XUn(e) {
  return li().swarmPermissions.pendingSandbox.has(e);
}
function YUn(e) {
  let i = li().swarmPermissions.pendingSandbox,
    s = i.get(e.requestId);
  if (!s) return n(`[SwarmPermissionPoller] No sandbox callback registered for request ${b(e.requestId)}`), false;
  if ((i.delete(e.requestId), s.host !== e.host))
    return (
      n(
        `[SwarmPermissionPoller] Refusing sandbox ${e.allow === true ? "allow" : "deny"} for request ${b(e.requestId)}: the leader answered for ${b(e.host)}, not ${b(s.host)}`,
        { level: "warn" },
      ),
      s.resolve(false),
      true
    );
  return (
    n(`[SwarmPermissionPoller] Processing sandbox response for request ${b(e.requestId)}: allow=${b(e.allow)}`),
    s.resolve(e.allow),
    true
  );
}
export { Tit, kje, zUn, VUn, Hje, KUn, XUn, YUn };
