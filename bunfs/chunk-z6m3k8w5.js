// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Mn } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { jt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Y } from "/$bunfs/root/chunk-s7e0px8j.js";
import { Wt } from "/$bunfs/root/chunk-qk6zade1.js";
import { Tu, ZEe, I3, XMe, s7e } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Tr } from "/$bunfs/root/chunk-492vgtnr.js";
import { ir } from "/$bunfs/root/chunk-2rx5nghb.js";
import { T8e } from "/$bunfs/root/chunk-k7v7xwvs.js";
import { mT } from "/$bunfs/root/chunk-2c0fc0a1.js";
import { Y$ } from "/$bunfs/root/chunk-z2bvp3sv.js";
function yX(e) {
  for (let t of [e?.request_id, e?.suppressed_request_id]) if (typeof t === "string" && t.length > 0) return t;
  return;
}
var B = 32;
function R(e) {
  let { display_tool_name: t, raw_command: i } = e;
  return {
    tool_name: e.tool_name,
    ...(t === void 0 ? {} : { display_tool_name: t }),
    action_description: ir(e.action_description, mT),
    ...(i === void 0 ? {} : { raw_command: ir(i, mT) }),
    tool_use_id: e.tool_use_id,
    request_id: e.request_id,
    ...(e.suppressed_request_id === void 0 ? {} : { suppressed_request_id: e.suppressed_request_id }),
  };
}
function vpn(e, t) {
  return [e, ...t.slice(0, B - 1).map(R)];
}
function k2t(e) {
  switch (e?.cross_session_inbound) {
    case "unavailable":
      return { acceptsPeerMessages: false };
    case "available":
      return { acceptsPeerMessages: true };
    default:
      return;
  }
}
class Hze {
  stateChanged = Ue();
  onStateChanged;
  getPendingActionDetails;
  onWaitingOnUserChanged;
  onTurnStarting;
  onMetadataChanged;
  onInternalMetadataChanged;
  onPermissionModeChanged;
  onProactivityLevelChanged;
  onActiveGoalChanged;
  onAutocompactInputsChanged;
  onConversationReset;
  currentState = "idle";
  hasPendingAction = false;
  hasTaskSummary = false;
  hasTerminalGoalSnapshot = false;
  mainLoopRefcount = 0;
  nestedBlockedChains = {};
  nestedBlockedChainCount = 0;
  droppedChainAgentIds = {};
  lastWaitingOnUser = false;
  chainExcessLogged = false;
  getState() {
    return this.currentState;
  }
  get waitingOnUser() {
    return this.currentState === "requires_action" && this.mainLoopRefcount - this.nestedBlockedChainCount <= 0;
  }
  setMainLoopRefcount(e) {
    (this.mainLoopRefcount = e), this.emitIfWaitingChanged();
  }
  emitIfWaitingChanged() {
    this.checkChainInvariant();
    let e = this.waitingOnUser;
    if (e !== this.lastWaitingOnUser) (this.lastWaitingOnUser = e), this.onWaitingOnUserChanged?.(e);
  }
  checkChainInvariant() {
    if (this.nestedBlockedChainCount - this.mainLoopRefcount > 0) {
      if (!this.chainExcessLogged)
        (this.chainExcessLogged = true),
          Y("warn", "nested_chain_count_exceeds_refcount", {
            nested_blocked_chain_count: this.nestedBlockedChainCount,
            main_loop_refcount: this.mainLoopRefcount,
            session_state: this.currentState,
          });
    } else this.chainExcessLogged = false;
  }
  reteeWaitingOnUser() {
    this.onWaitingOnUserChanged?.(this.waitingOnUser);
  }
  notifyNestedPromptBlocking(e) {
    if (a.CLAUDE_CODE_DISABLE_NESTED_CHAIN_IDLE) return;
    if (this.droppedChainAgentIds[e]) return;
    let t = this.nestedBlockedChains[e] ?? 0;
    if (((this.nestedBlockedChains[e] = t + 1), t === 0)) this.nestedBlockedChainCount++;
    this.emitIfWaitingChanged();
  }
  notifyNestedPromptUnblocking(e) {
    let t = (this.nestedBlockedChains[e] ?? 0) - 1;
    if (t > 0) this.nestedBlockedChains[e] = t;
    else if (this.nestedBlockedChains[e] !== void 0) {
      if ((delete this.nestedBlockedChains[e], this.nestedBlockedChainCount > 0)) this.nestedBlockedChainCount--;
    }
    this.emitIfWaitingChanged();
  }
  dropNestedBlockedChain(e) {
    if (((this.droppedChainAgentIds[e] = true), this.nestedBlockedChains[e] !== void 0)) {
      if ((delete this.nestedBlockedChains[e], this.nestedBlockedChainCount > 0)) this.nestedBlockedChainCount--;
      this.emitIfWaitingChanged();
    }
  }
  notifyTurnStarting(e, t) {
    this.onTurnStarting?.(e, t);
  }
  notifyStateChanged(e, t) {
    (this.currentState = e), (this.lastWaitingOnUser = this.waitingOnUser), this.onStateChanged?.(e, t);
    try {
      this.stateChanged.emit(e);
    } catch (i) {
      h(i);
    }
    if (e === "requires_action" && t)
      (this.hasPendingAction = true), this.onMetadataChanged?.(this.pendingActionPatch(t));
    else if (this.hasPendingAction)
      (this.hasPendingAction = false), this.onMetadataChanged?.({ pending_action: null, pending_actions: null });
    if (e === "running") this.wipeTurnScopedMetadata();
    if (e === "idle" && this.hasTaskSummary)
      (this.hasTaskSummary = false), this.notifyMetadataChanged({ task_summary: null });
    if (a.CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS) Tu({ type: "system", subtype: "session_state_changed", state: e });
  }
  republishPendingAction(e) {
    (this.hasPendingAction = true), this.onMetadataChanged?.(this.pendingActionPatch(e));
  }
  wipeTurnScopedMetadata() {
    if ((this.onMetadataChanged?.({ post_turn_summary: null, recap: null }), this.hasTerminalGoalSnapshot))
      (this.hasTerminalGoalSnapshot = false), this.onMetadataChanged?.({ goal: null });
  }
  adoptRestoredPendingAction() {
    this.hasPendingAction = true;
  }
  pendingActionPatch(e) {
    let i = (this.getPendingActionDetails?.(e.request_id) ?? []).filter((r) => r !== e).reverse();
    return { pending_action: e, pending_actions: vpn(e, i) };
  }
  notifyMetadataChanged(e) {
    if ((this.onMetadataChanged?.(e), "goal" in e)) this.hasTerminalGoalSnapshot = e.goal?.met === true;
    if ("task_summary" in e) {
      if (e.task_summary != null) this.hasTaskSummary = true;
      Tu({ type: "system", subtype: "task_summary", detail: e.task_summary ?? null });
    }
  }
  workerPermissionModeRecordEnabled = false;
  get isWorkerPermissionModeRecordEnabled() {
    return this.workerPermissionModeRecordEnabled;
  }
  enableWorkerPermissionModeRecord() {
    this.workerPermissionModeRecordEnabled = true;
  }
  notifyPermissionModeChanged(e) {
    this.onPermissionModeChanged?.(e);
  }
  notifyProactivityLevelChanged() {
    this.onProactivityLevelChanged?.();
  }
  notifyInternalMetadataChanged(e) {
    this.onInternalMetadataChanged?.(e);
  }
  notifyActiveGoalChanged(e) {
    this.onActiveGoalChanged?.(e);
  }
  notifyAutocompactInputsChanged() {
    this.onAutocompactInputsChanged?.();
  }
  notifyConversationReset() {
    this.onConversationReset?.();
  }
}
function PKn(e) {
  return `<system-reminder>
The container was restarted. The following background tasks were running and are now stopped:
${e
  .map((i) => `- ${Wt(i.description || "(no description)")} (task ${Wt(i.task_id)})`)
  .join(`
`)}
Re-create them if still needed.
</system-reminder>`;
}
var H2t = "Remote Control";
function Rpn(e) {
  return ZEe(e) ? "cloud" : H2t;
}
function DKn(e) {
  return I3(e) ?? "(untitled)";
}
var M = 300000;
class C {
  listed = void 0;
  inFlight = void 0;
  record(e, t, i) {
    this.listed = { at: Date.now(), listed: e, identityKey: t, truncated: i };
  }
  forget() {
    this.listed = void 0;
  }
  begin(e) {
    this.inFlight = e;
  }
  settle(e) {
    if (this.inFlight === e) this.inFlight = void 0;
  }
}
var S = new Mn(() => new C());
async function pwe(e = { refresh: true }) {
  {
    let { primePeerIdentityOwner: t } = import.meta.require("/$bunfs/root/chunk-6tc07sbc.js");
    await t(e);
  }
}
function m() {
  let { getPeerBridgeIdentity: e } = import.meta.require("/$bunfs/root/chunk-6tc07sbc.js"),
    t = e();
  return t?.live ? t.key : null;
}
async function Umt(e, t) {
  {
    let i = m();
    if (!i) return { rows: [], failed: false, identityKey: null };
    let r = S.of(e),
      s = r.inFlight;
    if (s !== void 0 && s.identityKey === i) return s.promise;
    let { listBridgePeerSessions: o } = import.meta.require("/$bunfs/root/chunk-7vf10vwz.js"),
      u = { record: void 0 },
      c = Date.now(),
      g = (async () => {
        try {
          let f = { failed: false, truncated: false },
            _;
          try {
            _ = await o(f, t);
          } catch (y) {
            return (
              n(`[bridge:population] fetch threw: ${l(y)} \u2014 treated as failed`, { level: "warn" }),
              { rows: [], failed: true, identityKey: i }
            );
          }
          return (
            n(
              `[bridge:population] fetched ${_.length} rows in ${Date.now() - c}ms${f.failed ? " (FAILED \u2014 not recordable)" : ""}${f.truncated ? " (truncated at page budget)" : ""}`,
            ),
            { rows: _, failed: f.failed, ...(f.truncated && { truncated: true }), identityKey: i }
          );
        } finally {
          r.settle(u.record);
        }
      })();
    return (u.record = { identityKey: i, promise: g }), r.begin(u.record), g;
  }
  return { rows: [], failed: false, identityKey: null };
}
function Bmt(e) {
  {
    let t = m();
    return t !== null && e.identityKey === t;
  }
  return false;
}
function xze(e, t, i) {
  {
    let r = m();
    if (!r) return;
    if (t.identityKey !== r) {
      n("[bridge:population] walk ran under a previous identity \u2014 ignoring its outcome for the current one");
      return;
    }
    let s = S.of(e);
    if (t.failed) {
      let o = s.listed;
      if (o !== void 0 && o.identityKey === r)
        s.forget(), n("[bridge:population] failed walk \u2014 cleared the printed set (going cold, never sticky)");
      return;
    }
    s.record(i, r, t.truncated === true), n(`[bridge:population] recorded ${i.length} bridge rows (cloud-deduped)`);
  }
}
function jmt(e, t) {
  {
    let i = m();
    if (!i || t.identityKey !== i) return;
    let r = S.of(e),
      s = r.listed;
    if (s !== void 0 && s.identityKey === i)
      r.forget(), n("[bridge:population] forgot the recorded set (an unrecordable listing superseded it)");
  }
}
function Wmt(e) {
  return kpn(e)?.rows;
}
function kpn(e) {
  {
    let t = m(),
      i = S.of(e).listed;
    if (!t || i === void 0 || i.identityKey !== t) return;
    let r = Date.now() - i.at;
    if (r >= 0 && r < M)
      return (
        n(`[bridge:population] warm recorded set: ${i.listed.length} rows (age ${r}ms)`),
        { rows: i.listed, truncated: i.truncated }
      );
  }
  return;
}
function Hpn(e, t, i) {
  let r = XMe(t),
    s = new Set(i.filter((o) => !s7e(t, o.id)).map((o) => Tr(o.id)));
  return e.filter((o) => {
    let u = Tr(o.id);
    return !r.has(u) && !s.has(u);
  });
}
function Ize(e, t) {
  return Hpn(e, [], t);
}
function HDe(e) {
  return e === "timeout" || e === "fetch_failed";
}
var A = 30000,
  w = 5000;
class k {
  memo = void 0;
  inFlight = void 0;
  record(e, t, i) {
    if (i !== b()) return;
    this.memo = { at: Date.now(), sessions: e, truncated: t, credential: i };
  }
  begin(e, t) {
    this.inFlight = { promise: e, credential: t };
  }
  settle(e) {
    if (this.inFlight?.promise === e) this.inFlight = void 0;
  }
  warm(e) {
    let t = this.memo;
    if (t === void 0 || t.credential !== e) return;
    let i = Date.now() - t.at;
    return i >= 0 && i < A ? t : void 0;
  }
}
function b() {
  let { walkCredentialKey: e } = import.meta.require("/$bunfs/root/chunk-6tc07sbc.js");
  return e();
}
var P = new Mn(() => new k());
async function Jce(e, t) {
  {
    let { hasCloudPeerAccess: i } = import.meta.require("/$bunfs/root/chunk-n0j43nf0.js");
    if (!i()) return { sessions: [], unavailable: "gate_off" };
    let { walkCcrSessionList: r } = import.meta.require("/$bunfs/root/chunk-gzzj7kfz.js"),
      s = P.of(e),
      o = b(),
      u = s.warm(o);
    if (u !== void 0) return { sessions: u.sessions, unavailable: void 0, ...(u.truncated && { truncated: true }) };
    let c = s.inFlight,
      g = c !== void 0 && c.credential === o ? c.promise : E(s, r, o, t),
      f = await jt(g, w);
    if (f === void 0)
      return (
        n(`[agents:cloud] session list not ready within ${w}ms \u2014 not searched this call, disclosing`, {
          level: "warn",
        }),
        { sessions: [], unavailable: "timeout" }
      );
    if (o !== b())
      return (
        n("[agents:cloud] session list walk ran under a superseded credential \u2014 not served, disclosing", {
          level: "warn",
        }),
        { sessions: [], unavailable: "fetch_failed" }
      );
    return f;
  }
  return { sessions: [], unavailable: void 0 };
}
function E(e, t, i, r) {
  let s = a.CLAUDE_CODE_REMOTE === true,
    o = s ? Tr(a.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") : "";
  if (o === "") {
    let { getPeerBridgeIdentity: c } = import.meta.require("/$bunfs/root/chunk-6tc07sbc.js"),
      g = c()?.bridgeSessionId;
    o = typeof g === "string" ? Tr(g) : "";
  }
  let u = (async () => {
    let c,
      g = { truncated: false };
    try {
      c = await t({ status: g, throwOnError: true, exhaustive: true, includeBridgeKind: s, credentials: r });
    } catch (d) {
      return (
        n(
          `[agents:cloud] session list threw: ${d instanceof TypeError ? "malformed session-list response \u2014 " : ""}${T8e(d)}`,
          { level: "error" },
        ),
        { sessions: [], unavailable: "fetch_failed" }
      );
    }
    let f = false;
    if (s) {
      let { isRemoteControlPeerUnreachableFromHere: d } = import.meta.require("/$bunfs/root/chunk-m90nqn8m.js");
      f = d();
    }
    let y = (o === "" ? c : c.filter((d) => Tr(d.id) !== o)).map((d) => {
      let v = Date.parse(d.last_event_at ?? d.created_at ?? "");
      return {
        id: d.id,
        title: d.title ?? null,
        lastActive: Number.isNaN(v) ? void 0 : v,
        workerStatus:
          d.worker_status === "running" || d.worker_status === "idle" || d.worker_status === "requires_action"
            ? d.worker_status
            : void 0,
        remoteControl: d.environment_kind === "bridge",
        unreachableFromHere: f && d.environment_kind === "bridge",
        ...k2t(d.external_metadata),
      };
    });
    return e.record(y, g.truncated, i), { sessions: y, unavailable: void 0, ...(g.truncated && { truncated: true }) };
  })();
  return e.begin(u, i), u.finally(() => e.settle(u)), u;
}
function qmt(e) {
  {
    let { hasCloudPeerAccess: t } = import.meta.require("/$bunfs/root/chunk-n0j43nf0.js");
    if (!t()) return;
    return P.of(e).warm(b())?.sessions;
  }
  return;
}
function xDe(e, t, i) {
  try {
    if (!qmt(e)?.find((o) => Tr(o.id) === Tr(t))?.unreachableFromHere) return;
    let { formatUnreachableElevatedRefusal: s } = import.meta.require("/$bunfs/root/chunk-m90nqn8m.js");
    return s(i);
  } catch (r) {
    n(`[agents:cloud] warm unreachable lookup failed (${Y$(l(r))}) \u2014 treating as not known unreachable`, {
      level: "warn",
    });
    return;
  }
}
var Pze = "can't receive cross-session messages (off in that session)";
function qte(e, t, i) {
  try {
    let r = Tr(t);
    if (
      !(
        qmt(e)?.some((o) => Tr(o.id) === r && o.acceptsPeerMessages === false) === true ||
        Wmt(e)?.some((o) => Tr(o.id) === r && o.acceptsPeerMessages === false) === true
      )
    )
      return;
    return `Not sent: '${i}' ${Pze} \u2014 its Claude would never see the message. That session is set not to accept cross-session messages (the feature is off on its platform, or a setting or policy there refuses them); reach that machine another way, or ask its user to enable it (listings refresh within a few minutes \u2014 re-run ListAgents after they do).`;
  } catch (r) {
    n(`[agents:cloud] warm cannot-receive lookup failed (${Y$(l(r))}) \u2014 treating as unknown`, { level: "warn" });
    return;
  }
}
function Gmt(e, t) {
  try {
    let i = Tr(t),
      r = qmt(e)?.find((o) => Tr(o.id) === i),
      s = Wmt(e)?.find((o) => Tr(o.id) === i);
    if ((r !== void 0 && !r.remoteControl) || (s !== void 0 && ZEe(s))) return false;
    if (s?.inboundReportUnavailable && r?.acceptsPeerMessages === void 0) return false;
    return !(r?.acceptsPeerMessages === true || s?.acceptsPeerMessages === true);
  } catch (i) {
    return (
      n(`[agents:cloud] warm inbound-report lookup failed (${Y$(l(i))}) \u2014 treating as unreported`, {
        level: "warn",
      }),
      true
    );
  }
}
export {
  yX,
  vpn,
  k2t,
  Hze,
  PKn,
  H2t,
  Rpn,
  DKn,
  pwe,
  Umt,
  Bmt,
  xze,
  jmt,
  Wmt,
  kpn,
  Hpn,
  Ize,
  HDe,
  Jce,
  qmt,
  xDe,
  Pze,
  qte,
  Gmt,
};
