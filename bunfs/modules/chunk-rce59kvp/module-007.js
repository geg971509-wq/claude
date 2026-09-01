// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $7t, $g, $n, $t, A, Ae, At, B, BG, BRe, C, C8, Cp, Ct, Cye, D0, DG, DMt, DWn, Dd, Dt, EM, Edt, Ept, Et, Etr, F, F7, FK, FSt, Fgn, Fn, Fo, Gr, HRe, HX, Hgt, Hi, Hje, Hln, Hwe, Hye, I, I2, Ier, Ig, Ip, Kae, Kf, Kfe, L, Lje, M, MUe, Me, Mt, N7, NQ, Nct, Nt, Oer, Oot, Or, Pa, Pgt, Po, Q, Q0, QC, QIn, Qc, Qte, Qve, R5e, RMe, Rfn, Rle, Rpe, SAe, SSe, Sq, Tq, Ts, Tt, Ttt, Tw, Txe, U, Uc, VOn, Vl, W, Wle, Wue, X0, X9n, XR, XUn, XWn, Xe, Xn, Xte, Y9n, YC, YIn, YUn, YWn, Yp, Yr, Z0, Z0e, Z4e, Z8, ZB, ZC, ZIn, ZWn, Zte, _, _K, a, a3t, aVe, ad, ag, asn, b, bI, bme, br, c, cN, cVe, ct, d, d4e, dE, dat, dl, e, e1e, eDe, eG, eOe, ePn, ev, f$, f2t, fKt, fR, fe, fi, fl, fs, ft, fue, fx, g, gPt, ge, gf, gr, gtn, h, h7, ha, hn, hue, iH, iPn, i_t, ie, isn, j6, jb, jre, k, kEe, ke, kl, kme, l, l8n, lVe, li, mIe, mKt, mOn, mR, me, mer, mze, n, n6t, n7t, nPn, na, no, o, oPn, oRt, oce, or, p, pUe, pot, pst, qH, r, r6t, rPn, s, s3e, sI, sPn, sPt, sVe, sd, se, sme, sn, sr, ssn, t, t6t, tOe, tPe, tPn, t_, tp, tt, u, uD, uM, uVe, uf, ut, vC, ve, vf, vi, wL, wdt, we, wer, wi, wt, xee, xer, xt, y, yN, yge, z, z7e, zD, zOn, zUn, zk, zl, zt, zv } from "/$bunfs/root/modules/chunk-rce59kvp/prelude.js";
import { Pre } from "/$bunfs/root/modules/chunk-rce59kvp/module-001.js";
import { ID } from "/$bunfs/root/modules/chunk-rce59kvp/module-002.js";
import { $V, If, TP, Zd, cd, hA, jy, nO, yA } from "/$bunfs/root/modules/chunk-rce59kvp/module-003.js";
import { MCe, Rh, UC, mO } from "/$bunfs/root/modules/chunk-rce59kvp/module-004.js";
import { PB, w_e } from "/$bunfs/root/modules/chunk-rce59kvp/module-005.js";
import "/$bunfs/root/modules/chunk-rce59kvp/module-006.js";

function WRe() {
  if (cN()) return { kind: "in-process" };
  if (na()) return { kind: "teammate", agentName: gf() };
  return { kind: "session" };
}

function JB(S, x) {
  switch (S.kind) {
    case "in-process":
      return;
    case "teammate":
      return S.agentName;
    case "session": {
      if (vC(x.teamContext)) {
        if (!SAe(x.teamContext)) return;
        let { leadAgentId: P, teammates: j } = x.teamContext;
        return j[P]?.name || "team-lead";
      }
      return;
    }
  }
}

var nst = 1000,
  rst = Qve([]);

function ist(S) {
  let x = typeof S === "string" ? S : jre,
    P = x.startsWith("mcp__");
  return {
    name: x,
    userFacingName: () => (P ? `${x} (MCP)` : x),
    renderToolUseMessage: (j) => {
      if (j !== null && typeof j === "object" && Object.keys(j).length > 0)
        throw Error("unknown-tool stub cannot render parameters");
      return x;
    },
    isMcp: P,
  };
}

class k7 {
  #e;
  #t;
  #o = false;
  #r = 0;
  #i = null;
  #n = null;
  #c = 0;
  #a = false;
  #s;
  #d = new kme();
  #l = new Set();
  #u = new Map();
  #p = 0;
  constructor(S, x) {
    (this.#e = S), (this.#t = x);
  }
  start() {
    if (this.#o) return;
    (this.#o = true),
      (this.#s = this.#e.store.getState().toolPermissionContext),
      (this.#i = this.#e.store.subscribe(this.#m)),
      this.#S(),
      this.#f(),
      this.#k();
  }
  stop() {
    if (!this.#o) return;
    (this.#o = false), this.#r++, this.#i?.(), (this.#i = null), this.#b(), (this.#a = false);
  }
  setInputs(S) {
    let x = this.#t;
    if (((this.#t = S), !this.#o)) return;
    let P =
      S.enabled !== x.enabled ||
      S.isLoading !== x.isLoading ||
      S.focusedInputDialog !== x.focusedInputDialog ||
      S.onSubmitMessage !== x.onSubmitMessage;
    if (!P && S.requestDialog === x.requestDialog) return;
    if (P) this.#S();
    this.#f(), this.#k();
  }
  #m = () => {
    let { toolPermissionContext: S } = this.#e.store.getState();
    if (S !== this.#s) (this.#s = S), this.#d.clear();
    this.#f();
  };
  #f() {
    let S = this.#t.enabled && !!JB(this.#e.identity, this.#e.store.getState());
    if (S && this.#n === null) this.#g();
    else if (!S && this.#n !== null) this.#b();
  }
  #g() {
    let S = ++this.#c,
      x = () => {
        this.#n = this.#e.setTimeout(() => {
          if (S !== this.#c) return;
          try {
            this.#C();
          } finally {
            if (S === this.#c) x();
          }
        }, nst);
      };
    x();
  }
  #b() {
    this.#c++, this.#n?.(), (this.#n = null);
  }
  #k() {
    if (!this.#t.enabled) return;
    if (this.#a) return;
    if (JB(this.#e.identity, this.#e.store.getState())) (this.#a = true), this.#C();
  }
  #C() {
    this.#v().catch((S) => h(we(S)));
  }
  #h() {
    return Object.values(this.#e.store.getState().teamContext?.teammates ?? {});
  }
  async #y(S, x) {
    if (!((await S()) || (await S()))) n(x(), { level: "error" });
  }
  async #v() {
    let S = this.#e,
      { store: x, storageV5: P, credentials: j, terminal: H } = S,
      Z = x.setState,
      { enabled: re, isLoading: ue, focusedInputDialog: de, onSubmitMessage: pe, requestDialog: Re } = this.#t;
    if (!re) return;
    let be = this.#r,
      Pe = x.getState(),
      Oe = JB(S.identity, Pe);
    if (!Oe) return;
    let Ie = await S.readUnreadMessages(Oe, Pe.teamContext?.teamName, P);
    if (be !== this.#r) return;
    if (Ie.length === 0) return;
    n(`[InboxPoller] Found ${Ie.length} unread message(s)`);
    let He = new Map();
    if (na() && z7e())
      for (let jt of Ie) {
        let Gt = lVe(jt.text);
        if (!Gt) continue;
        if (jt.from !== vi) {
          n(`[InboxPoller] Ignoring plan approval response from non-team-lead: ${jt.from}`);
          continue;
        }
        if (x.getState().toolPermissionContext.mode !== "plan") {
          n("[InboxPoller] Ignoring plan approval response while not in plan mode");
          continue;
        }
        let vo = li().swarmPermissions,
          qt = vo.pendingPlanApproval,
          lo = sVe(qt, Gt);
        if (lo === "already_answered") {
          n(
            `[InboxPoller] Ignoring plan approval response ${b(Gt.requestId)}: the pending request ${b(qt?.requestId)} was already answered`,
          );
          continue;
        }
        if (qt) vo.pendingPlanApproval = { ...qt, answered: true };
        if (lo === "mismatch") {
          n(
            `[InboxPoller] Plan approval response ${b(Gt.requestId)} does not name the pending plan request ${b(qt?.requestId)}; resolving the wait as a rejection`,
            { level: "warn" },
          ),
            g("plan_approval", "request_binding_mismatch"),
            He.set(jt, aVe(Gt));
          continue;
        }
        if (lo === "unbound") g("plan_approval", "verdict_unbound");
        else y("plan_approval");
        if (
          (He.set(jt, Gt),
          n(`[InboxPoller] Received plan approval response from team-lead: approved=${Gt.approved}`),
          !Gt.approved)
        ) {
          n(`[InboxPoller] Plan rejected by team lead: ${Gt.feedback || "No feedback provided"}`);
          continue;
        }
        let To = Gt.permissionMode ?? "default",
          ao = DRe(To, Pe.toolPermissionContext, Z);
        if (!ao.ok)
          n(
            `[InboxPoller] Refusing inherited mode ${To} from plan approval: ${ao.error}; exiting plan mode to default`,
            { level: "warn" },
          ),
            DRe("default", Pe.toolPermissionContext, Z);
        await Pgt(ao.ok ? ao.mode : "default", Pe.teamContext?.teamName, P),
          n(`[InboxPoller] Plan approved by team lead, exited plan mode to ${ao.ok ? ao.mode : "default"}`);
      }
    let Fe = ++this.#p,
      Ve,
      Ke = () =>
        (Ve ??= new Promise((jt) => {
          this.#u.set(Fe, jt);
        })),
      ot = () => {
        S.markMessagesAsRead(Oe, Pe.teamContext?.teamName, Ie, P).then(
          () => {
            for (let [jt, Gt] of this.#u) if (jt <= Fe) Gt(), this.#u.delete(jt);
          },
          () => {
            let jt = this.#u.get(Fe);
            if (jt) jt(), this.#u.delete(Fe);
          },
        );
      },
      st = [],
      nt = [],
      Pt = [],
      kt = [],
      Ht = [],
      yt = [],
      lt = [],
      Rt = [];
    for (let jt of Ie) {
      let Gt = t6t(jt.text),
        vo = eOe(jt.text),
        qt = n6t(jt.text),
        lo = r6t(jt.text),
        To = tOe(jt.text),
        ao = HX(jt.text),
        jo = cVe(jt.text),
        Qo = Hgt(jt.text);
      if (Gt) st.push(jt);
      else if (vo) nt.push(jt);
      else if (qt) Pt.push(jt);
      else if (lo) kt.push(jt);
      else if (To) Ht.push(jt);
      else if (ao) yt.push(jt);
      else if (Rfn(jt.text))
        n("[InboxPoller] Dropping team_permission_update message: permission rules are never accepted from the inbox", {
          level: "warn",
        });
      else if (jo)
        n(
          "[InboxPoller] Dropping mode_set_request message: permission mode changes are never accepted from the inbox",
          { level: "warn" },
        );
      else if (Qo) lt.push(jt);
      else if (bI(jt.text)) {
        let uo = He.get(jt);
        if (uo) Rt.push({ ...jt, text: uVe(uo) });
        else
          n(`[InboxPoller] Dropping unrouted protocol frame from ${b(jt.from)}: ${b(jt.text.substring(0, 80))}`, {
            level: "warn",
          });
      } else Rt.push(jt);
    }
    if (st.length > 0 && vC(Pe.teamContext)) {
      n(`[InboxPoller] Found ${st.length} permission request(s)`);
      let jt = Pe.teamContext?.teamName,
        Gt;
      for (let vo of st) {
        let qt = t6t(vo.text);
        if (!qt) continue;
        if (qt.agent_id !== vo.from) {
          n(
            `[InboxPoller] Dropping permission request ${b(qt.request_id)}: agent_id ${b(qt.agent_id)} does not match sender ${b(vo.from)}`,
            { level: "warn" },
          );
          continue;
        }
        let lo = no(Z0(), qt.tool_name) ?? ist(qt.tool_name),
          To = typeof qt.tool_name === "string" ? qt.tool_name : lo.name,
          ao = FRe("tool", vo.from, qt.request_id, typeof qt.tool_use_id === "string" ? qt.tool_use_id : void 0);
        if (this.#l.has(ao)) continue;
        this.#l.add(ao);
        let jo = Ke(),
          Qo = LRe(qt.agent_id, vo.from, this.#h()),
          uo,
          Pn;
        try {
          (uo = Z0e(To, qt.input)),
            (Pn = await ID({
              tool: lo,
              input: qt.input,
              description: qt.description,
              toolUseID: qt.tool_use_id,
              permissionResult: { behavior: "ask", message: qt.description },
              assistantMessage: Qc({ content: "" }),
              theme: "dark",
              requestSource: { type: "subagent", agentName: Qo },
              toolPermissionContext: Pe.toolPermissionContext,
            }));
        } catch (tn) {
          h(tn);
          let nn = uo === void 0 ? void 0 : { tool_use_id: qt.tool_use_id, tool_name: To, input_digest: uo },
            pn = nn === void 0 ? "input could not be digested" : "dialog build failed";
          this.#y(
            () =>
              gtn(
                vo.from,
                { decision: "rejected", resolvedBy: "leader", approvedRequest: nn },
                qt.request_id,
                jt,
                P,
                qt.tool_use_id,
              ),
            () =>
              `[InboxPoller] Rejection for permission request ${b(qt.request_id)} (${pn}) could not be delivered to ${b(vo.from)} after a retry; the worker stays parked`,
          )
            .then(() => jo)
            .finally(() => this.#l.delete(ao))
            .catch(h);
          continue;
        }
        let { dialog: Yt, descriptor: No } = Pn,
          cn = { tool_use_id: qt.tool_use_id, tool_name: To, input_digest: uo };
        if (!Gt) Gt = { name: Qo, tool: qt.tool_name };
        Re(Yt, No, { queueBehind: true, armInputGrace: true }).then((tn) => {
          let nn;
          switch (tn.behavior) {
            case "allow":
              nn = {
                decision: "approved",
                resolvedBy: "leader",
                updatedInput: tn.updatedInput,
                permissionUpdates: tn.permissionUpdates ? [...tn.permissionUpdates] : void 0,
                approvedRequest: cn,
              };
              break;
            case "deny":
              nn = { decision: "rejected", resolvedBy: "leader", feedback: tn.feedback, approvedRequest: cn };
              break;
            case "cancelled":
              nn = { decision: "rejected", resolvedBy: "leader", approvedRequest: cn };
              break;
          }
          let pn = () => gtn(vo.from, nn, qt.request_id, jt, P, qt.tool_use_id);
          this.#y(
            pn,
            () =>
              `[InboxPoller] ${nn.decision === "approved" ? "Approval" : "Rejection"} for permission request ${b(qt.request_id)} could not be delivered to ${b(vo.from)} after a retry; the worker stays parked`,
          )
            .then(() => jo)
            .finally(() => this.#l.delete(ao))
            .catch(h);
        });
      }
      if (Gt && !ue && !de)
        ev(
          {
            message: `${ORe(Gt.name)} needs permission for ${typeof Gt.tool === "string" ? Edt(Gt.tool) : "(unnamed tool)"}`,
            notificationType: "worker_permission_prompt",
          },
          H,
          { storageV5: P, credentials: j },
        );
    }
    if (nt.length > 0 && na()) {
      n(`[InboxPoller] Found ${nt.length} permission response(s)`);
      for (let jt of nt) {
        let Gt = eOe(jt.text);
        if (!Gt) continue;
        if (jt.from !== vi) {
          n(`[InboxPoller] Ignoring permission response from non-team-lead: ${b(jt.from)}`, { level: "warn" });
          continue;
        }
        if (S.hasPermissionCallback(Gt.request_id))
          if (
            (n(`[InboxPoller] Processing permission response for ${b(Gt.request_id)}: ${b(Gt.subtype)}`),
            Gt.subtype === "success")
          )
            S.processMailboxPermissionResponse({
              requestId: Gt.request_id,
              decision: "approved",
              updatedInput: Gt.response?.updated_input,
              permissionUpdates: Gt.response?.permission_updates,
              toolUseId: Gt.tool_use_id,
              approvedRequest: Gt.approved_request,
            });
          else
            S.processMailboxPermissionResponse({
              requestId: Gt.request_id,
              decision: "rejected",
              feedback: Gt.error,
              toolUseId: Gt.tool_use_id,
              approvedRequest: Gt.approved_request,
            });
      }
    }
    if (Pt.length > 0 && vC(Pe.teamContext)) {
      n(`[InboxPoller] Found ${Pt.length} sandbox permission request(s)`);
      let jt = Pe.teamContext?.teamName,
        Gt = this.#d;
      async function vo(lo) {
        let To = x.getState().toolPermissionContext,
          ao = e1e(To.mode, To.isBypassPermissionsModeAvailable),
          jo = To.mode;
        switch (ao) {
          case "allow":
            return { resolved: true, mode: jo };
          case "deny":
            return { resolved: false, mode: jo };
          case "classify":
            return {
              resolved: await Gt.getOrClassify(lo, void 0, rst, () =>
                eDe(lo, void 0, [], Z0(), To, new AbortController().signal, {
                  isSubagentLoop: false,
                  storageV5: P,
                  credentials: j,
                }),
              ),
              mode: jo,
            };
          case "ask":
            return { resolved: null, mode: jo };
        }
      }
      let qt = false;
      for (let lo of Pt) {
        let To = n6t(lo.text);
        if (!To) continue;
        if (typeof To.hostPattern?.host !== "string" || !To.hostPattern.host) {
          n("[InboxPoller] Invalid sandbox permission request: missing or non-string hostPattern.host");
          continue;
        }
        if (To.workerName !== lo.from) {
          n(
            `[InboxPoller] Dropping sandbox request ${b(To.requestId)}: workerName ${b(To.workerName)} does not match sender ${b(lo.from)}`,
            { level: "warn" },
          );
          continue;
        }
        if (typeof To.workerName !== "string" || !To.workerName) {
          n("[InboxPoller] Invalid sandbox permission request: missing or non-string workerName");
          continue;
        }
        let ao = FRe("sandbox", lo.from, To.requestId, To.hostPattern.host),
          jo = ast(To.hostPattern.host);
        if (jo !== null) {
          if (this.#l.has(ao)) continue;
          n(
            `[InboxPoller] Denying sandbox request ${b(To.requestId)}: ${jo} (${BG(To.hostPattern.host) ?? "(unshowable)"})`,
            { level: "warn" },
          ),
            this.#l.add(ao);
          let cn = Ke(),
            tn = () => sPt(lo.from, To.requestId, To.hostPattern.host, false, jt, P);
          this.#y(
            tn,
            () =>
              `[InboxPoller] Deny for sandbox request ${b(To.requestId)} (${jo}) could not be delivered to ${b(lo.from)} after a retry; the worker stays parked`,
          )
            .then(() => cn)
            .finally(() => this.#l.delete(ao))
            .catch(h);
          continue;
        }
        if (this.#l.has(ao)) continue;
        let { resolved: Qo, mode: uo } = await vo(To.hostPattern.host);
        if (Qo !== null) {
          if (this.#l.has(ao)) continue;
          this.#l.add(ao);
          let cn = Ke();
          n(`[InboxPoller] Auto-resolving sandbox request ${b(To.requestId)} (mode=${uo}, allow=${Qo})`);
          let tn = () => sPt(lo.from, To.requestId, To.hostPattern.host, Qo, jt, P);
          this.#y(
            tn,
            () =>
              `[InboxPoller] Auto-resolved verdict for sandbox request ${b(To.requestId)} (allow=${Qo}) could not be delivered to ${b(lo.from)} after a retry; the worker stays parked`,
          )
            .then(() => cn)
            .finally(() => this.#l.delete(ao))
            .catch(h);
          continue;
        }
        let Pn = To.hostPattern.host;
        if (this.#l.has(ao)) continue;
        this.#l.add(ao);
        let Yt = Ke(),
          No = LRe(To.workerName, lo.from, this.#h());
        if (
          (Pre(
            { host: Pn, workerName: No, requestId: To.requestId },
            {
              requestDialog: Re,
              sendResponse: (cn) => sPt(lo.from, To.requestId, Pn, cn, x.getState().teamContext?.teamName, P),
              applyPermissionUpdate: (cn) =>
                Z((tn) => ({ ...tn, toolPermissionContext: Uc(tn.toolPermissionContext, cn) })),
            },
          )
            .then(() => Yt)
            .finally(() => this.#l.delete(ao))
            .catch(h),
          !qt && !ue && !de)
        ) {
          qt = true;
          let cn = se(Pn) <= Wle ? Q0(Pn, "a host") : "a host";
          ev({ message: `${ORe(No)} needs network access to ${cn}`, notificationType: "worker_permission_prompt" }, H, {
            storageV5: P,
            credentials: j,
          });
        }
      }
    }
    if (kt.length > 0 && na()) {
      n(`[InboxPoller] Found ${kt.length} sandbox permission response(s)`);
      for (let jt of kt) {
        let Gt = r6t(jt.text);
        if (!Gt) continue;
        if (jt.from !== vi) {
          n(`[InboxPoller] Ignoring sandbox permission response from non-team-lead: ${b(jt.from)}`, { level: "warn" });
          continue;
        }
        if (S.hasSandboxPermissionCallback(Gt.requestId)) {
          if (
            (n(`[InboxPoller] Processing sandbox permission response for ${b(Gt.requestId)}: allow=${b(Gt.allow)}`),
            S.processSandboxPermissionResponse({ requestId: Gt.requestId, host: Gt.host, allow: Gt.allow }))
          )
            Z((qt) => ({ ...qt, pendingSandboxRequest: null }));
        }
      }
    }
    if (lt.length > 0 && vC(Pe.teamContext)) {
      n(`[InboxPoller] Found ${lt.length} plan approval request(s), auto-approving`);
      let jt = Pe.teamContext?.teamName;
      for (let Gt of lt) {
        let vo = Hgt(Gt.text);
        if (!vo) continue;
        let qt = x.getState(),
          lo = Oot({
            recipientName: Gt.from,
            leaderMode: qt.toolPermissionContext.mode,
            proactivityLevel: qt.proactivityLevel,
            tasks: qt.tasks,
          }),
          To = {
            type: "plan_approval_response",
            requestId: vo.requestId,
            approved: true,
            timestamp: new Date().toISOString(),
            permissionMode: lo,
          };
        if (
          (await S.writeToMailbox(Gt.from, { from: vi, text: b(To), timestamp: new Date().toISOString() }, jt, P)) ===
          void 0
        ) {
          n(
            `[InboxPoller] FAILED to write plan approval response to ${b(Gt.from)} (request ${b(vo.requestId)}) \u2014 the teammate is still awaiting approval`,
            { level: "error" },
          ),
            Rt.push(Gt);
          continue;
        }
        n(`[InboxPoller] Auto-approved plan from ${b(Gt.from)} (request ${b(vo.requestId)})`), Rt.push(Gt);
      }
    }
    if (Ht.length > 0 && na()) {
      n(`[InboxPoller] Found ${Ht.length} shutdown request(s)`);
      for (let jt of Ht) Rt.push(jt);
    }
    if (yt.length > 0 && vC(Pe.teamContext)) {
      n(`[InboxPoller] Found ${yt.length} shutdown approval(s)`);
      for (let jt of yt) {
        let Gt = HX(jt.text);
        if (!Gt) continue;
        if (Gt.paneId && Gt.backendType)
          (async () => {
            try {
              await gPt();
              let vo = await I2(),
                lo = await Lje(Gt.backendType)?.killPane(Gt.paneId, !vo);
              n(`[InboxPoller] Killed pane ${b(Gt.paneId)} for ${b(Gt.from)}: ${lo}`);
            } catch (vo) {
              n(`[InboxPoller] Failed to kill pane for ${b(Gt.from)}: ${vo}`);
            }
          })();
        await sst(Gt.from, Pe, Z, P), Rt.push(jt);
      }
    }
    if (Rt.length === 0) {
      ot();
      return;
    }
    let to = Zte(Rt, { recipientIsLead: vC(Pe.teamContext) }),
      so = () => {
        Z((jt) => ({
          ...jt,
          inbox: {
            messages: [
              ...jt.inbox.messages,
              ...Rt.map((Gt) => ({
                id: BRe(),
                from: Gt.from,
                text: Gt.text,
                timestamp: Gt.timestamp,
                status: "pending",
                color: Gt.color,
                summary: Gt.summary,
              })),
            ],
          },
        }));
      };
    if (!ue && !de) {
      if ((n("[InboxPoller] Session idle, submitting immediately"), !pe(to)))
        n("[InboxPoller] Submission rejected, queuing for later delivery"), so();
    } else n("[InboxPoller] Session busy, queuing for later delivery"), so();
    ot();
  }
  #S() {
    let { store: S } = this.#e,
      x = S.setState,
      { enabled: P, isLoading: j, focusedInputDialog: H, onSubmitMessage: Z } = this.#t;
    if (!P) return;
    if (j || H) return;
    let re = S.getState();
    if (!JB(this.#e.identity, re)) return;
    let de = re.inbox.messages.filter((Pe) => Pe.status === "pending"),
      pe = re.inbox.messages.filter((Pe) => Pe.status === "processed");
    if (pe.length > 0) {
      n(`[InboxPoller] Cleaning up ${pe.length} processed message(s) that were delivered mid-turn`);
      let Pe = new Set(pe.map((Oe) => Oe.id));
      x((Oe) => ({ ...Oe, inbox: { messages: Oe.inbox.messages.filter((Ie) => !Pe.has(Ie.id)) } }));
    }
    if (de.length === 0) return;
    n(`[InboxPoller] Session idle, delivering ${de.length} pending message(s)`);
    let Re = Zte(de, { recipientIsLead: vC(re.teamContext) });
    if (Z(Re)) {
      let Pe = new Set(de.map((Oe) => Oe.id));
      x((Oe) => ({ ...Oe, inbox: { messages: Oe.inbox.messages.filter((Ie) => !Pe.has(Ie.id)) } }));
    } else n("[InboxPoller] Submission rejected, keeping messages queued");
  }
}

async function sst(S, x, P, j) {
  if (!S || !x.teamContext?.teammates) return;
  let H = Object.entries(x.teamContext.teammates).find(([, ue]) => ue.name === S)?.[0];
  if (!H) return;
  let Z = x.teamContext?.teamName;
  if (Z) await hue(Z, { agentId: H, name: S }, j);
  let { notificationMessage: re } = Z
    ? await Hwe(Z, H, S, "shutdown", j)
    : { notificationMessage: `${S} has shut down.` };
  P((ue) => {
    if (!ue.teamContext?.teammates) return ue;
    if (!(H in ue.teamContext.teammates)) return ue;
    let { [H]: de, ...pe } = ue.teamContext.teammates,
      Re = { ...ue.tasks };
    for (let [be, Pe] of Object.entries(Re))
      if (Dd(Pe) && Pe.identity.agentId === H)
        Re[be] = { ...Pe, status: "completed", endTime: Date.now(), notified: true, evictAfter: Date.now() + d4e };
    return {
      ...ue,
      tasks: Re,
      teamContext: { ...ue.teamContext, teammates: pe },
      inbox: {
        messages: [
          ...ue.inbox.messages,
          {
            id: BRe(),
            from: "system",
            text: b({ type: "teammate_terminated", message: re }),
            timestamp: new Date().toISOString(),
            status: "pending",
          },
        ],
      },
    };
  }),
    n(`[InboxPoller] Removed ${S} (${H}) from teamContext`);
}

function DRe(S, x, P) {
  let j = Tw(S),
    H = yN(j) ? j : Tw(sd(j)),
    Z = H === "bypassPermissions",
    re = X0(H, Z ? { ...x, isBypassPermissionsModeAvailable: true } : x, (ue) =>
      P((de) => {
        let pe = de.toolPermissionContext,
          Re = pe.isBypassPermissionsModeAvailable === Z ? pe : { ...pe, isBypassPermissionsModeAvailable: Z },
          be = ue(Re);
        return be === pe ? de : { ...de, toolPermissionContext: be };
      }),
    );
  return re.ok ? { ok: true, mode: H } : re;
}

function LRe(S, x, P) {
  if (typeof S !== "string" || S !== x) return;
  return P.some((j) => j.name === S) ? S : void 0;
}

function ORe(S) {
  let x = S === void 0 ? null : BG(S);
  return x === null ? "A subagent" : String(x);
}

function ast(S) {
  if (zD(S)) return S.includes("*") ? "a wildcard, which srt matches against every host" : "a host srt would re-spell";
  if (/[\s\p{C}]/u.test(S)) return "whitespace or control characters, which no runtime observes";
  let x = wdt(S);
  if (S.length > x) return `longer than a hostname can be (${S.length} > ${x})`;
  return null;
}

function FRe(S, x, P, j) {
  return b([S, x, P, j ?? null]);
}

function v7(S) {
  let { enabled: x, isLoading: P, focusedInputDialog: j, onSubmitMessage: H } = S,
    { requestDialog: Z } = S,
    re = Xn(),
    ue = dE(),
    de = xt(),
    { storageV5: pe, credentials: Re } = ge(),
    [be] = u(
      () =>
        new k7(
          {
            identity: WRe(),
            store: re,
            terminal: ue,
            storageV5: pe,
            credentials: Re,
            setTimeout: (Pe, Oe) => de.setTimeout(Pe, Oe),
            readUnreadMessages: (...Pe) => fue(...Pe),
            markMessagesAsRead: (...Pe) => Qte(...Pe),
            writeToMailbox: (...Pe) => $g(...Pe),
            hasPermissionCallback: zUn,
            processMailboxPermissionResponse: Hje,
            hasSandboxPermissionCallback: XUn,
            processSandboxPermissionResponse: YUn,
          },
          S,
        ),
    );
  A(() => (be.start(), () => be.stop()), [be]),
    A(() => {
      be.setInputs({ enabled: x, isLoading: P, focusedInputDialog: j, onSubmitMessage: H, requestDialog: Z });
    }, [be, x, P, j, H, Z]);
}

F();

function XB(Kqo) {
  let Yqo = _(7),
    { autoConnectIdeFlag: w7, ideToInstallExtension: II, onAutoConnectIde: T7, requestDialog: _7 } = Kqo,
    { storageV5: R7 } = ge(),
    [Qqo, zqo] = u(null),
    qRe = C(false),
    lst,
    cst;
  if (Yqo[0] !== w7 || Yqo[1] !== II || Yqo[2] !== T7 || Yqo[3] !== _7 || Yqo[4] !== R7)
    (lst = () => {
      if (sn()) {
        return;
      }
      if (wt() && !II) {
        return;
      }
      let VRe = function VRe(EI) {
        if (!EI) {
          return;
        }
        if (!Wue(Boolean(w7 || II))) {
          return;
        }
        T7({
          type: EI.url.startsWith("ws:") ? "ws-ide" : "sse-ide",
          url: EI.url,
          ideName: EI.name,
          authToken: EI.authToken,
          ideRunningInWindows: EI.ideRunningInWindows,
          scope: "dynamic",
        });
      };
      let ust = gr();
      return (
        Fgn(
          VRe,
          II,
          (Jqo) => {
            if (wt() || qRe.current) {
              return;
            }
            qRe.current = true;
            let x7 = function x7() {
              qRe.current = false;
            };
            _7(UC, { installationStatus: Jqo }, { queueBehind: true }).then(x7, x7);
          },
          zqo,
          ust.signal,
          R7,
        ),
        () => {
          ust.abort(), R5e();
        }
      );
    }),
      (cst = [w7, II, T7, _7, R7]),
      (Yqo[0] = w7),
      (Yqo[1] = II),
      (Yqo[2] = T7),
      (Yqo[3] = _7),
      (Yqo[4] = R7),
      (Yqo[5] = lst),
      (Yqo[6] = cst);
  else (lst = Yqo[5]), (cst = Yqo[6]);
  return A(lst, cst), Qqo;
}

function mst(rVo) {
  return rVo.exit;
}

function eU(oVo) {
  let nVo = _(9),
    { chrome: Zm } = oVo,
    ep = Xe(Zm, mst);
  if (ep.kind !== "interstitial") {
    return null;
  }
  let dst;
  if (
    nVo[0] !== Zm.cancelExit ||
    nVo[1] !== Zm.exitReaders.getMessages ||
    nVo[2] !== Zm.exitReaders.isMidTurn ||
    nVo[3] !== Zm.exitReaders.isResponseStreaming ||
    nVo[4] !== ep.backgroundItems ||
    nVo[5] !== ep.isMidTurn ||
    nVo[6] !== ep.messages ||
    nVo[7] !== ep.showWorktree
  )
    (dst = e(HRe, {
      showWorktree: ep.showWorktree,
      backgroundItems: ep.backgroundItems,
      messages: ep.messages,
      isMidTurn: ep.isMidTurn,
      getMessages: Zm.exitReaders.getMessages,
      getIsMidTurn: Zm.exitReaders.isMidTurn,
      getIsResponseStreaming: Zm.exitReaders.isResponseStreaming,
      onDone: GRe,
      onCancel: Zm.cancelExit,
    })),
      (nVo[0] = Zm.cancelExit),
      (nVo[1] = Zm.exitReaders.getMessages),
      (nVo[2] = Zm.exitReaders.isMidTurn),
      (nVo[3] = Zm.exitReaders.isResponseStreaming),
      (nVo[4] = ep.backgroundItems),
      (nVo[5] = ep.isMidTurn),
      (nVo[6] = ep.messages),
      (nVo[7] = ep.showWorktree),
      (nVo[8] = dst);
  else dst = nVo[8];
  return dst;
}

function GRe() {}

F();

function A7({ transcript: S, turn: x, onBackgroundQuery: P }) {
  let j = W((pe) => pe.foregroundedTaskId),
    H = W((pe) => (pe.foregroundedTaskId ? pe.tasks[pe.foregroundedTaskId] : void 0)),
    Z = W((pe) => (pe.foregroundedTaskId ? pe.transcripts[pe.foregroundedTaskId]?.messages : void 0)),
    re = At(),
    ue = C(0),
    de = B(() => {
      if (j) {
        re((pe) => {
          let Re = pe.foregroundedTaskId;
          if (!Re) return pe;
          let be = pe.tasks[Re];
          if (!be) return { ...pe, foregroundedTaskId: void 0 };
          return { ...pe, foregroundedTaskId: void 0, tasks: { ...pe.tasks, [Re]: { ...be, isBackgrounded: true } } };
        }),
          S.replace([]),
          x.resetLoadingState(),
          x.setAbortController(null);
        return;
      }
      P();
    }, [j, re, S, x, P]);
  return (
    A(() => {
      if (!j) {
        ue.current = 0;
        return;
      }
      if (!H || H.type !== "local_agent") {
        re((Re) => ({ ...Re, foregroundedTaskId: void 0 })), x.resetLoadingState(), (ue.current = 0);
        return;
      }
      let pe = Z ?? [];
      if (pe.length !== ue.current) (ue.current = pe.length), S.replace([...pe]);
      if (H.status === "running") {
        let Re = H.abortController;
        if (Re?.signal.aborted) {
          re((be) => {
            if (!be.foregroundedTaskId) return be;
            let Pe = be.tasks[be.foregroundedTaskId];
            if (!Pe) return { ...be, foregroundedTaskId: void 0 };
            return {
              ...be,
              foregroundedTaskId: void 0,
              tasks: { ...be.tasks, [be.foregroundedTaskId]: { ...Pe, isBackgrounded: true } },
            };
          }),
            x.resetLoadingState(),
            x.setAbortController(null),
            (ue.current = 0);
          return;
        }
        if ((x.setExternalLoading(true), Re)) x.setAbortController(Re);
      } else
        re((Re) => {
          let be = Re.foregroundedTaskId;
          if (!be) return Re;
          let Pe = Re.tasks[be];
          if (!Pe) return { ...Re, foregroundedTaskId: void 0 };
          return { ...Re, foregroundedTaskId: void 0, tasks: { ...Re.tasks, [be]: { ...Pe, isBackgrounded: true } } };
        }),
          x.resetLoadingState(),
          x.setAbortController(null),
          (ue.current = 0);
    }, [j, H, Z, re, S, x]),
    { handleBackgroundSession: de }
  );
}

F();

F();

var fst = 3000,
  gst = "tengu_session_memory_share_event",
  KRe = "session_memory_rating";

function hst() {
  return mO() && !zk() && !a.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY;
}

function M7(S) {
  let x = xt(),
    { storageV5: P, credentials: j } = ge(),
    [H, Z] = u("closed"),
    re = C("closed"),
    ue = B((st) => {
      (re.current = st), Z(st);
    }, []),
    [de, pe] = u(null),
    Re = C(""),
    be = C(null),
    Pe = C(false),
    Oe = C(null),
    Ie = C(false);
  A(
    () => () => {
      (Ie.current = true), Oe.current?.();
    },
    [],
  );
  let He = B(() => {
      Oe.current?.(), (Oe.current = x.setTimeout(() => ue("closed"), fst));
    }, [x, ue]),
    Fe = B((st, nt) => {
      let Pt = be.current;
      s(gst, {
        event_type: c(st),
        appearance_id: ve(Re.current),
        trigger: c(KRe),
        response: ke(Pt?.rating),
        rated_good_count: Pt?.ratedGoodCount,
        rated_bad_count: Pt?.ratedBadCount,
        error_code: ve(nt),
      });
    }, []),
    Ve = B(
      (st) => {
        if (Pe.current || re.current !== "closed" || S.getSnapshot().length === 0 || !hst()) return;
        (Pe.current = true),
          (Re.current = pst()),
          (be.current = st),
          ue("transcript_prompt"),
          Fe("transcript_prompt_appeared"),
          Po("feedback_survey", {
            event_type: "transcript_prompt_appeared",
            appearance_id: Re.current,
            survey_type: "session_memory",
            response: st.rating,
          });
      },
      [Fe, S, ue],
    ),
    Ke = B(
      (st) => {
        if (re.current !== "transcript_prompt") return;
        switch ((Fe(`transcript_share_${st}`), st)) {
          case "yes":
            ue("submitting"),
              (async () => {
                let nt;
                try {
                  let Pt = await nO(S.getSnapshot(), KRe, Re.current, P, j);
                  Fe(Pt.success ? "transcript_share_submitted" : "transcript_share_failed", Pt.errorCode), (nt = Pt);
                } catch {
                  Fe("transcript_share_failed", "exception"), (nt = { success: false });
                }
                if (Ie.current) return;
                pe(nt.bundlePath ?? null), ue(nt.success ? "submitted" : "share_failed"), He();
              })();
            break;
          case "no":
            ue("thanks"), He();
            break;
        }
      },
      [Fe, S, He, ue, P, j],
    ),
    ot = B(() => {
      if (re.current !== "transcript_prompt") return;
      Fe("transcript_share_dismissed"), ue("closed");
    }, [Fe, ue]);
  return { state: H, transcriptBundlePath: de, arm: Ve, select: Ke, dismiss: ot };
}

F();

var DI = [
    { response: "yes", label: "Yes" },
    { response: "no", label: "No" },
  ],
  nU = 1,
  Ast = 400;

function rU(EVo) {
  let tU = _(8),
    { state: yst, transcriptBundlePath: QRe, highlighted: zRe, onOptionClick: YRe } = EVo;
  switch (yst) {
    case "closed": {
      return null;
    }
    case "transcript_prompt": {
      let mm;
      if (tU[0] !== zRe || tU[1] !== YRe)
        (mm = e($7, { highlighted: zRe, onOptionClick: YRe })), (tU[0] = zRe), (tU[1] = YRe), (tU[2] = mm);
      else mm = tU[2];
      return mm;
    }
    case "submitting": {
      let mm;
      if (tU[3] === d) (mm = e(cd, { state: "submitting" })), (tU[3] = mm);
      else mm = tU[3];
      return mm;
    }
    case "submitted": {
      let mm;
      if (tU[4] !== QRe) (mm = e(cd, { state: "submitted", transcriptBundlePath: QRe })), (tU[4] = QRe), (tU[5] = mm);
      else mm = tU[5];
      return mm;
    }
    case "share_failed": {
      let mm;
      if (tU[6] === d) (mm = e(cd, { state: "share_failed" })), (tU[6] = mm);
      else mm = tU[6];
      return mm;
    }
    case "thanks": {
      let mm;
      if (tU[7] === d) (mm = e(cd, { state: "thanks" })), (tU[7] = mm);
      else mm = tU[7];
      return mm;
    }
    default: {
      return yst;
    }
  }
}

function K7({ enabled: S, onSelect: x }) {
  let P = xt(),
    [j, H] = u(nU),
    Z = C(nU),
    re = C(S ? P.now() : null),
    ue = C(S);
  if (S !== ue.current) {
    if (((ue.current = S), (re.current = S ? P.now() : null), S)) (Z.current = nU), H(nU);
  }
  let de = () => {
    let be = re.current;
    return S && be !== null && P.now() - be >= Ast;
  };
  return {
    highlighted: j,
    handleKey: (be) => {
      if (!S || be.ctrl || be.meta) return false;
      if (be.name === "left" || be.name === "right") return true;
      if (be.name === "up" || be.name === "down") {
        if (de()) {
          let Pe = be.name === "up" ? -1 : 1;
          (Z.current = Math.min(DI.length - 1, Math.max(0, Z.current + Pe))), H(Z.current);
        }
        return true;
      }
      if (be.name === "return") {
        if (de()) {
          let Pe = DI[Z.current];
          if (Pe !== void 0) x(Pe.response);
        }
        return true;
      }
      return false;
    },
    selectByClick: (be) => {
      if (!de()) return false;
      let Pe = DI[be];
      if (Pe !== void 0) (Z.current = be), H(be), x(Pe.response);
      return true;
    },
  };
}

function $7(DVo) {
  let ZRe = _(7),
    { highlighted: I7, onOptionClick: JRe } = DVo,
    Sst,
    bst;
  if (ZRe[0] === d)
    (Sst = e(t, { bold: true, children: hA })), (bst = e(tp, { url: yA })), (ZRe[0] = Sst), (ZRe[1] = bst);
  else (Sst = ZRe[0]), (bst = ZRe[1]);
  let L7;
  if (ZRe[2] !== I7 || ZRe[3] !== JRe)
    (L7 = DI.map((kst, exe) =>
      e(
        Ig,
        { active: exe === I7, children: e(q7, { label: kst.label, focused: exe === I7, onClick: () => JRe(exe) }) },
        kst.response,
      ),
    )),
      (ZRe[2] = I7),
      (ZRe[3] = JRe),
      (ZRe[4] = L7);
  else L7 = ZRe[4];
  let Cst;
  if (ZRe[5] !== L7)
    (Cst = e(o, {
      flexShrink: 0,
      flexDirection: "column",
      children: r(wi, { color: "suggestion", children: [Sst, bst, e(o, { flexDirection: "column", children: L7 })] }),
    })),
      (ZRe[5] = L7),
      (ZRe[6] = Cst);
  else Cst = ZRe[6];
  return Cst;
}

function q7(NVo) {
  let O7 = _(11),
    { label: txe, focused: oxe, onClick: nxe } = NVo,
    [rxe, vst] = u(false),
    B7;
  if (O7[0] !== nxe)
    (B7 = (wst) => {
      if (wst.isWindowActivation || !nxe()) wst.dropAsStray();
    }),
      (O7[0] = nxe),
      (O7[1] = B7);
  else B7 = O7[1];
  let Tst, _st;
  if (O7[2] === d) (Tst = () => vst(true)), (_st = () => vst(false)), (O7[2] = Tst), (O7[3] = _st);
  else (Tst = O7[2]), (_st = O7[3]);
  let U7;
  if (O7[4] !== oxe || O7[5] !== rxe || O7[6] !== txe)
    (U7 = e(V7, { label: txe, focused: oxe, hovered: rxe })), (O7[4] = oxe), (O7[5] = rxe), (O7[6] = txe), (O7[7] = U7);
  else U7 = O7[7];
  let Rst;
  if (O7[8] !== B7 || O7[9] !== U7)
    (Rst = e(o, { onClick: B7, onMouseEnter: Tst, onMouseLeave: _st, children: U7 })),
      (O7[8] = B7),
      (O7[9] = U7),
      (O7[10] = Rst);
  else Rst = O7[10];
  return Rst;
}

function V7(LVo) {
  let xst = _(8),
    { label: ixe, focused: oU, hovered: OVo } = LVo;
  const sxe = oU ? "suggestion" : void 0,
    axe = OVo ? "userMessageBackgroundHover" : void 0,
    lxe = oU ? L.pointer + " " : "  ";
  let H7;
  if (xst[0] !== lxe) (H7 = e(t, { "aria-hidden": true, children: lxe })), (xst[0] = lxe), (xst[1] = H7);
  else H7 = xst[1];
  let Pst;
  if (xst[2] !== oU || xst[3] !== ixe || xst[4] !== sxe || xst[5] !== axe || xst[6] !== H7)
    (Pst = r(t, { color: sxe, inverse: oU, backgroundColor: axe, children: [H7, ixe] })),
      (xst[2] = oU),
      (xst[3] = ixe),
      (xst[4] = sxe),
      (xst[5] = axe),
      (xst[6] = H7),
      (xst[7] = Pst);
  else Pst = xst[7];
  return Pst;
}

function Gst(xGo) {
  return xGo.sessionMemories;
}

function Kst(nZ, AGo) {
  let { key: jst, label: MGo, color: Hst } = nZ;
  return r(
    t,
    {
      children: [
        AGo > 0 && e(t, { dimColor: true, children: " " }),
        e(t, { color: Hst, children: jst }),
        ": ",
        e(t, { color: Hst, children: MGo }),
      ],
    },
    jst,
  );
}

var Vst = 8,
  _xe = 3000,
  VC = [
    { key: "g", rating: "good", label: "Good", color: "success" },
    { key: "b", rating: "bad", label: "Bad", color: "error" },
  ];

function gZ(fGo) {
  let Kp = _(46),
    { transcript: gGo, onDone: hGo } = fGo,
    iU = W(Gst),
    yGo = At(),
    Mst;
  if (Kp[0] !== iU) (Mst = $V(iU)), (Kp[0] = iU), (Kp[1] = Mst);
  else Mst = Kp[1];
  let NI = Mst,
    Ist;
  if (Kp[2] === d) (Ist = { mode: "list" }), (Kp[2] = Ist);
  else Ist = Kp[2];
  let [cxe, Q7] = u(Ist),
    uxe = C(new Set()),
    sU = C(new Set()),
    Y7 = C(new Set()),
    [mxe, pxe] = u(0),
    [fxe, Z7] = u("row"),
    SR = FK(),
    ab = Hi();
  fs("session-memory-viewer");
  let op = M7(gGo);
  const gxe = op.state === "transcript_prompt";
  let Est;
  if (Kp[3] !== op.select || Kp[4] !== gxe)
    (Est = { enabled: gxe, onSelect: op.select }), (Kp[3] = op.select), (Kp[4] = gxe), (Kp[5] = Est);
  else Est = Kp[5];
  let bR = K7(Est),
    eZ = bR.handleKey,
    kR = op.state === "transcript_prompt",
    Dst;
  if (Kp[6] !== op.state || Kp[7] !== op.transcriptBundlePath || Kp[8] !== bR.highlighted || Kp[9] !== bR.selectByClick)
    (Dst = e(rU, {
      state: op.state,
      transcriptBundlePath: op.transcriptBundlePath,
      highlighted: bR.highlighted,
      onOptionClick: bR.selectByClick,
    })),
      (Kp[6] = op.state),
      (Kp[7] = op.transcriptBundlePath),
      (Kp[8] = bR.highlighted),
      (Kp[9] = bR.selectByClick),
      (Kp[10] = Dst);
  else Dst = Kp[10];
  let LI = Dst,
    aU = function aU(SGo) {
      let hxe = NI[SGo];
      if (!hxe) {
        return;
      }
      Q7({ mode: "detail", path: hxe.path }), (uxe.current = new Set([...uxe.current, hxe.path]));
    },
    OI = function OI(vR, wR, bGo) {
      let kGo = Txe(vR.path) === Vl;
      let Nst = wR === "good" && sU.current.has(vR.path);
      let Lst = wR === "bad" && Y7.current.has(vR.path);
      if (wR === "good" && !Nst) sU.current = new Set([...sU.current, vR.path]);
      if (wR === "bad" && !Lst) Y7.current = new Set([...Y7.current, vR.path]);
      if (!Nst && !Lst)
        s("tengu_session_memory_rated", {
          rating: c(wR),
          source: c(vR.source),
          surface: c(bGo),
          target: c(kGo ? "index" : "memory"),
        });
      op.arm({ rating: wR, ratedGoodCount: sU.current.size, ratedBadCount: Y7.current.size }),
        yGo((CGo) => TP(CGo, [vR.path], wR)),
        Q7({ mode: "list" }),
        Z7("row");
    },
    BI = function BI() {
      op.dismiss(), hGo({ viewedCount: uxe.current.size, ratedGoodCount: sU.current.size });
    },
    tZ = (iU?.length ?? 0) > 0 && NI.length === 0,
    UI = tZ && !kR,
    jI = xt(),
    yxe = br(BI),
    Ost;
  if (Kp[11] !== jI || Kp[12] !== yxe || Kp[13] !== UI)
    (Ost = () => {
      if (!UI) {
        return;
      }
      return jI.setTimeout(() => yxe(), _xe);
    }),
      (Kp[11] = jI),
      (Kp[12] = yxe),
      (Kp[13] = UI),
      (Kp[14] = Ost);
  else Ost = Kp[14];
  let Fst;
  if (Kp[15] !== jI || Kp[16] !== UI) (Fst = [UI, jI]), (Kp[15] = jI), (Kp[16] = UI), (Kp[17] = Fst);
  else Fst = Kp[17];
  A(Ost, Fst);
  let TR = cxe.mode === "detail" ? NI.find((vGo) => vGo.path === cxe.path) : void 0;
  if (TR !== void 0 && cxe.mode === "detail") {
    let HI;
    if (Kp[18] === d) (HI = () => Q7({ mode: "list" })), (Kp[18] = HI);
    else HI = Kp[18];
    let xR;
    if (Kp[19] !== ab.keyName || Kp[20] !== ab.pending || Kp[21] !== SR || Kp[22] !== kR)
      (xR = () =>
        ab.pending
          ? r(t, { children: ["Press ", ab.keyName, " again to exit"] })
          : kR
            ? e(fe, { children: SR && e(t, { color: "permission", children: "dialog waiting" }) })
            : r(fe, {
                children: [
                  SR && e(t, { color: "permission", children: "dialog waiting" }),
                  e(M, { chord: "g", action: "mark good" }),
                  e(M, { chord: "b", action: "mark bad" }),
                  e(M, { chord: ["escape", "enter"], action: "go back" }),
                ],
              })),
        (Kp[19] = ab.keyName),
        (Kp[20] = ab.pending),
        (Kp[21] = SR),
        (Kp[22] = kR),
        (Kp[23] = xR);
    else xR = Kp[23];
    let lU;
    if (Kp[24] === d) (lU = e(pZ, {})), (Kp[24] = lU);
    else lU = Kp[24];
    const Sxe =
      TR.content.trim() === ""
        ? e(sr, {
            hint: "Re-open the file at the path above to read it again",
            children: "This file's content is no longer in the transcript",
          })
        : e(t, { children: Pxe(TR.content) });
    let Ust;
    if (Kp[25] !== LI || Kp[26] !== Sxe)
      (Ust = r(o, { flexDirection: "column", gap: 1, children: [lU, Sxe, LI] })),
        (Kp[25] = LI),
        (Kp[26] = Sxe),
        (Kp[27] = Ust);
    else Ust = Kp[27];
    return e(o, {
      flexDirection: "column",
      onKeyDown: (_R) => {
        let wGo = eZ(_R);
        if (_R.ctrl || _R.meta) {
          return;
        }
        if ((_R.preventDefault(), wGo)) {
          return;
        }
        if (_R.name === "escape" || _R.name === "return") {
          Q7({ mode: "list" });
          return;
        }
        let Bst = VC.find((TGo) => TGo.key === _R.key);
        if (Bst) OI(TR, Bst.rating, "detail");
      },
      children: e(me, {
        title: cU(TR),
        subtitle: `${Et(Fo(TR.path))} \xB7 ${xxe(TR.source)}`,
        onCancel: HI,
        isCancelActive: false,
        color: "remember",
        inputGuide: xR,
        children: Ust,
      }),
    });
  }
  const HI = iU?.length ?? 0;
  let xR;
  if (Kp[28] !== OI) (xR = (_Go, RGo) => OI(_Go, RGo, "list")), (Kp[28] = OI), (Kp[29] = xR);
  else xR = Kp[29];
  let lU;
  if (
    Kp[30] !== tZ ||
    Kp[31] !== BI ||
    Kp[32] !== ab ||
    Kp[33] !== eZ ||
    Kp[34] !== SR ||
    Kp[35] !== fxe ||
    Kp[36] !== mxe ||
    Kp[37] !== NI ||
    Kp[38] !== aU ||
    Kp[39] !== Z7 ||
    Kp[40] !== pxe ||
    Kp[41] !== kR ||
    Kp[42] !== LI ||
    Kp[43] !== HI ||
    Kp[44] !== xR
  )
    (lU = e(Rxe, {
      memories: NI,
      allRated: tZ,
      listIndex: mxe,
      listFocus: fxe,
      hasOpenDialog: SR,
      exitState: ab,
      shareAskRegion: LI,
      shareAskPending: kR,
      onShareAskKey: eZ,
      recordedCount: HI,
      onClose: BI,
      onFocusChange: pxe,
      onListFocusChange: Z7,
      onOpen: aU,
      onRate: xR,
    })),
      (Kp[30] = tZ),
      (Kp[31] = BI),
      (Kp[32] = ab),
      (Kp[33] = eZ),
      (Kp[34] = SR),
      (Kp[35] = fxe),
      (Kp[36] = mxe),
      (Kp[37] = NI),
      (Kp[38] = aU),
      (Kp[39] = Z7),
      (Kp[40] = pxe),
      (Kp[41] = kR),
      (Kp[42] = LI),
      (Kp[43] = HI),
      (Kp[44] = xR),
      (Kp[45] = lU);
  else lU = Kp[45];
  return lU;
}

function Rxe({
  memories: S,
  allRated: x,
  recordedCount: P,
  listIndex: j,
  listFocus: H,
  hasOpenDialog: Z,
  exitState: re,
  shareAskRegion: ue,
  shareAskPending: de,
  onShareAskKey: pe,
  onClose: Re,
  onFocusChange: be,
  onListFocusChange: Pe,
  onOpen: Oe,
  onRate: Ie,
}) {
  let He = C(null),
    Fe = C({ cursor: j, focus: H });
  (Fe.current = { cursor: Pa(j, 0, Math.max(0, S.length - 1)), focus: H }), Cp(He, S.length > 0);
  function Ve(lt) {
    let Rt = Pa(lt.cursor, 0, Math.max(0, S.length - 1));
    (Fe.current = { cursor: Rt, focus: lt.focus }), be(Rt), Pe(lt.focus);
  }
  let Ke = (lt) => {
      let Rt = pe(lt);
      if (lt.ctrl || lt.meta) return;
      if ((lt.preventDefault(), Rt)) return;
      if (lt.name === "escape") {
        Re();
        return;
      }
      let { cursor: to, focus: so } = Fe.current,
        jt = S[to];
      if (jt === void 0) return;
      let Gt = VC.find((vo) => vo.key === lt.key);
      if (Gt) {
        Ie(jt, Gt.rating);
        return;
      }
      if (so === "row") {
        if (lt.name === "return") Oe(to);
        else if (lt.name === "up") Ve({ cursor: to - 1, focus: "row" });
        else if (lt.name === "down") Ve({ cursor: to, focus: "good" });
        return;
      }
      if (lt.name === "return") Ie(jt, so);
      else if (lt.name === "up") Ve({ cursor: to, focus: "row" });
      else if (lt.name === "down") Ve({ cursor: to + 1, focus: "row" });
      else if (lt.name === "left" || lt.name === "right") Ve({ cursor: to, focus: so === "good" ? "bad" : "good" });
    },
    ot = Pa(j, 0, Math.max(0, S.length - 1)),
    { windowStart: st, windowEnd: nt, moreAbove: Pt, moreBelow: kt } = Sq(ot, S.length, Vst),
    Ht = S.slice(st, nt),
    yt = x ? P : S.length;
  return e(o, {
    flexDirection: "column",
    onKeyDown: Ke,
    children: e(me, {
      title: "Memories recalled this session",
      titleEnd: `${yt} ${k(yt, "memory", "memories")}`,
      onCancel: Re,
      isCancelActive: false,
      color: "remember",
      inputGuide: () =>
        re.pending
          ? r(t, { children: ["Press ", re.keyName, " again to exit"] })
          : de
            ? e(fe, { children: Z && e(t, { color: "permission", children: "dialog waiting" }) })
            : S.length === 0
              ? r(fe, {
                  children: [
                    Z && e(t, { color: "permission", children: "dialog waiting" }),
                    e(M, { chord: "escape", action: "close" }),
                  ],
                })
              : r(fe, {
                  children: [
                    Z && e(t, { color: "permission", children: "dialog waiting" }),
                    e(M, { chord: ["up", "down"], action: "navigate" }),
                    e(M, { chord: "down", action: "pick good or bad" }),
                    e(M, { chord: "enter", action: "view" }),
                    e(M, { chord: "g", action: "good" }),
                    e(M, { chord: "b", action: "bad" }),
                    e(M, { chord: "escape", action: "close" }),
                  ],
                }),
      children: r(o, {
        flexDirection: "column",
        gap: 1,
        children: [
          S.length === 0
            ? x
              ? e(sr, { hint: "New recalls will show up here", children: "Every recalled memory is rated" })
              : e(sr, {
                  hint: "Memories show up here as the session recalls or reads them",
                  children: "No memories recalled yet",
                })
            : r(o, {
                ref: He,
                tabIndex: 0,
                flexDirection: "column",
                children: [
                  Pt > 0 &&
                    e(o, { paddingLeft: 2, children: r(t, { dimColor: true, children: [qH, " ", Pt, " more above"] }) }),
                  Ht.map((lt, Rt) => {
                    let so = st + Rt === ot;
                    return e(
                      fl,
                      {
                        isFocused: so,
                        declareCursor: !de,
                        styled: false,
                        children: e(Axe, {
                          memory: lt,
                          focused: so,
                          buttonFocus: so && !de && H !== "row" ? H : void 0,
                        }),
                      },
                      lt.path,
                    );
                  }),
                  kt > 0 &&
                    e(o, { paddingLeft: 2, children: r(t, { dimColor: true, children: [mR, " ", kt, " more below"] }) }),
                ],
              }),
          ue,
        ],
      }),
    }),
  });
}

function pZ() {
  let PGo = _(1),
    nZ;
  if (PGo[0] === d)
    (nZ = r(t, { children: [e(t, { dimColor: true, children: "Rate this memory: " }), VC.map(Kst)] })), (PGo[0] = nZ);
  else nZ = PGo[0];
  return nZ;
}

function Axe(IGo) {
  let aZ = _(11),
    { memory: kxe, focused: iZ, buttonFocus: Cxe } = IGo;
  const vxe = iZ ? "suggestion" : void 0;
  let lZ;
  if (aZ[0] !== kxe) (lZ = cU(kxe)), (aZ[0] = kxe), (aZ[1] = lZ);
  else lZ = aZ[1];
  let cZ;
  if (aZ[2] !== vxe || aZ[3] !== lZ)
    (cZ = e(t, { color: vxe, wrap: "wrap", children: lZ })), (aZ[2] = vxe), (aZ[3] = lZ), (aZ[4] = cZ);
  else cZ = aZ[4];
  let uZ;
  if (aZ[5] !== Cxe || aZ[6] !== iZ)
    (uZ = iZ && e(o, { paddingLeft: 2, flexDirection: "column", children: e(fZ, { buttonFocus: Cxe }) })),
      (aZ[5] = Cxe),
      (aZ[6] = iZ),
      (aZ[7] = uZ);
  else uZ = aZ[7];
  let $st;
  if (aZ[8] !== cZ || aZ[9] !== uZ)
    ($st = r(o, { flexDirection: "column", children: [cZ, uZ] })), (aZ[8] = cZ), (aZ[9] = uZ), (aZ[10] = $st);
  else $st = aZ[10];
  return $st;
}

function fZ(EGo) {
  let Wst = _(4),
    { buttonFocus: wxe } = EGo,
    dZ;
  if (Wst[0] !== wxe)
    (dZ = VC.map((mZ, DGo) => {
      let { rating: qst, label: NGo, color: LGo } = mZ;
      return r(
        t,
        {
          children: [
            DGo > 0 && e(t, { children: " " }),
            r(t, { color: LGo, inverse: wxe === qst, children: ["[", NGo, "]"] }),
          ],
        },
        qst,
      );
    })),
      (Wst[0] = wxe),
      (Wst[1] = dZ);
  else dZ = Wst[1];
  let mZ;
  if (Wst[2] !== dZ) (mZ = e(t, { children: dZ })), (Wst[2] = dZ), (Wst[3] = mZ);
  else mZ = Wst[3];
  return mZ;
}

function cU(S) {
  return Z4e(S.path, SSe(S.content));
}

function xxe(S) {
  switch (S) {
    case "recalled":
      return "recalled automatically";
    case "read":
      return "opened with the Read tool";
    case "pinned":
      return "pinned, loaded automatically";
  }
}

function Pxe(S) {
  let x = Et(S);
  try {
    let P = zv(x).body.trim();
    return P === "" ? x.trim() : P;
  } catch {
    return x.trim();
  }
}

function hZ({ localJsx: S, getSessionMemories: x, transcript: P, trigger: j }) {
  if (S.size > 0) return null;
  let H = x();
  s("tengu_session_memory_viewer_opened", {
    recalled_count: Q(H, (re) => re.source === "recalled"),
    read_count: Q(H, (re) => re.source === "read"),
    pinned_count: Q(H, (re) => re.source === "pinned"),
    unrated_count: If(H),
    fullscreen: Nt(),
    trigger: c(j),
  }),
    y("memory_session_viewer");
  let Z = S.show(
    e(gZ, {
      transcript: P,
      onDone: (re) => {
        let ue = x();
        s("tengu_session_memory_viewer_closed", {
          memory_count: ue.length,
          unrated_count: If(ue),
          viewed_count: re.viewedCount,
          rated_good_count: re.ratedGoodCount,
        }),
          Z.close();
      },
    }),
    { commandName: "memory-viewer", immediate: false, hidesPrompt: true, retireAtTurnBoundary: false },
  );
  return Z;
}

F();

function yZ() {
  let { internal_eventEmitter: S } = XR(),
    [x, P] = u(0);
  return (
    A(() => {
      let j = () => {
          process.stdout.write(`
Claude Code has been suspended. Run \`fg\` to bring Claude Code back.
Note: ctrl + z now suspends Claude Code, ctrl + _ undoes input.
`);
        },
        H = () => {
          P((Z) => Z + 1);
        };
      return (
        S?.on("suspend", j),
        S?.on("resume", H),
        () => {
          S?.off("suspend", j), S?.off("resume", H);
        }
      );
    }, [S]),
    x
  );
}

F();

function SZ() {
  let S = Xn(),
    x = Tq();
  A(
    () => (
      Hln({
        lastUserInputAt: () => yge.getInstance().getLastUserActivityTime(),
        mainLoop: () => {
          let { mode: P, isCompacting: j } = x.get();
          return { working: pot(), spinnerMode: P, isCompacting: j };
        },
        delegatedWorkRunning: () => sI(S.getState().tasks),
      }),
      () => Hln(null)
    ),
    [S, x],
  );
}

F();

var Mxe = {
  id: "oauth-expiry-warning",
  compute: () => {
    let S = MUe();
    if (!S || S.daysLeft > 1) return null;
    return {
      key: "oauth-expiry-warning",
      segments: [
        { text: `Your login expires in ${S.daysLeft} ${k(S.daysLeft, "day")}`, color: "warning" },
        { text: " \xB7 run /login to renew", dim: true },
      ],
      priority: "high",
      timeoutMs: 15000,
    };
  },
};

var Qst = "no_permissions",
  Ixe = {
    id: "sudo-npm-install",
    maxImpressions: 1,
    onShown: () => y("sudo_npm_install_notice"),
    compute: async (S) => {
      if (Me(process.env.DISABLE_INSTALLATION_CHECKS)) return null;
      let x = await DMt(S?.storageV5);
      if (x?.path !== "npm-global" || x.outcome !== "failed" || x.status !== Qst) return null;
      return {
        key: "sudo-npm-install",
        segments: [
          { text: "Claude Code can't auto-update", color: "warning" },
          { text: " \xB7 run `claude doctor`", dim: true },
        ],
        priority: "high",
        timeoutMs: 15000,
      };
    },
  };

var Exe = null,
  Dxe = [
    ...(Exe ? [Exe] : []),
    Mxe,
    Ixe,
    {
      id: "marketplace-plugin-suggestion",
      compute: async (S) => {
        if (!S) return null;
        let x = await w_e({ session: S.session, theme: "dark", storageV5: S.storageV5, credentials: S.credentials }),
          P = x?.pluginId;
        if (!x || !P) return null;
        return (
          PB(x, "startup", S.storageV5),
          {
            key: "marketplace-plugin-suggestion",
            kind: "upsell",
            segments: [
              { text: `plugin suggestion: ${P}`, color: "suggestion" },
              { text: " \xB7 /plugin", dim: true },
            ],
            priority: "low",
          }
        );
      },
    },
  ];

function bZ(S = Dxe) {
  let { addNotification: x } = Or(),
    P = ct(),
    { storageV5: j, credentials: H } = ge(),
    Z = C(false);
  A(() => {
    if ($n() || Z.current) return;
    Z.current = true;
    let re = ie().seenNotifications ?? {},
      ue = [];
    Promise.allSettled(
      S.map(async (de) => {
        if (de.maxImpressions !== void 0 && (re[de.id] ?? 0) >= de.maxImpressions) return;
        let pe = await de.compute({ session: P, storageV5: j, credentials: H });
        if (!pe || (Array.isArray(pe) && pe.length === 0)) return;
        for (let Re of Array.isArray(pe) ? pe : [pe]) x(Re);
        if ((de.onShown?.(), de.maxImpressions !== void 0)) ue.push(de.id);
      }),
    ).then((de) => {
      for (let pe of de) if (pe.status === "rejected") h(ft(we(pe.reason), "startup notification spec failed"));
      if (ue.length === 0) return;
      Ae((pe) => {
        let Re = { ...(pe.seenNotifications ?? {}) };
        for (let be of ue) Re[be] = (Re[be] ?? 0) + 1;
        return { ...pe, seenNotifications: Re };
      }, j);
    });
  }, [x, P, S, j, H]);
}

var Nxe = {
  id: "advisor-tool",
  deps: (S) => [S.advisorModel, S.mainLoopModel, S.addNotification, S.growthBookVersion],
  setup() {
    let S;
    return ({ addNotification: x, advisorModel: P, mainLoopModel: j }) => {
      if ($n() || !uD()) {
        S = void 0;
        return;
      }
      if (!P || !Z8(j)) {
        S = void 0;
        return;
      }
      if (!xee(P)) {
        if (DG(P)) {
          if (S !== "consent")
            (S = "consent"),
              x({
                key: "fable-advisor-consent",
                kind: "event",
                text: `${Hye} Run /model fable to review and enable.`,
                priority: "high",
              });
          return;
        }
        S = void 0;
        return;
      }
      let H = Rle(j, P) ? "on" : "pairing";
      if (S === H) return;
      (S = H),
        x({
          key: "advisor-experimental",
          kind: "event",
          text:
            H === "on"
              ? "Advisor Tool (experimental) is on and may use more tokens \xB7 /advisor"
              : "Advisor will not activate on the main model (advisor is less capable); subagents may still use it and may use more tokens \xB7 /advisor",
          priority: "medium",
          fold: (Z, re) => re,
        });
    };
  },
};

var Lxe = { id: "ant-org-auth-check", setup: () => zst };

function zst() {}

var Yst = 800,
  Fxe = {
    id: "auto-mode-entry-warning",
    deps: (S) => [S.permissionMode, S.transcript, S.clock, S.storageV5, S.store],
    setup() {
      let S = false;
      return ({ permissionMode: x, transcript: P, clock: j, storageV5: H, store: Z }) => {
        if (x !== "auto") return;
        if (S) return;
        return j.setTimeout(() => {
          (async () => {
            let { isAutoModeFromFallback: re } = await import("/$bunfs/root/chunk-r7nsdrr4.js");
            if (re()) {
              S = true;
              return;
            }
            if (((S = true), wt())) return;
            let { shouldShowAutoModeEntryWarning: ue } = await import("/$bunfs/root/chunk-26ptb7cd.js");
            if (ue()) {
              let { getAutoModeDescription: de } = await import("/$bunfs/root/chunk-8rwq7r15.js");
              await Ae((pe) => (pe.hasSeenAutoModeEntryWarning ? pe : { ...pe, hasSeenAutoModeEntryWarning: true }), H),
                s("tengu_auto_mode_entry_warning_shown", {}),
                P.replace((pe) => [...pe, Dt(de(), "notice")]);
            }
          })();
        }, Yst);
      };
    },
  };

var Bxe = {
  id: "auto-mode-unavailable",
  deps: (S) => [S.permissionMode, S.isAutoModeAvailable, S.addNotification, S.store],
  setup() {
    let S = false,
      x;
    return ({ addNotification: P, store: j, permissionMode: H, isAutoModeAvailable: Z }) => {
      if (x === void 0) x = H;
      let re = x;
      if (((x = H), $n())) return;
      if (S) return;
      if (!(H === "default" && re !== "default" && re !== "auto" && !Z)) return;
      let de = h7();
      if (!de) return;
      (S = true),
        P({ key: "auto-mode-unavailable", kind: "feedback", text: ZB(de), color: "warning", priority: "medium" });
    };
  },
};

var Uxe = {
  id: "chrome-extension-check",
  deps: (S) => [S.store],
  setup() {
    let S = false;
    return ({ store: x }) => {
      if ($n() || S) return;
      S = true;
      let P = sme(),
        j = ie();
      if (!(P === true || a.CLAUDE_CODE_ENABLE_CFC || j.claudeInChromeDefaultEnabled === true) || !pUe(P)) return;
      if (j.chromeExtension?.pairedDeviceId) return;
      if (!Tt()) {
        YC("chrome", 1);
        return;
      }
      if (t_()) return;
      fx()
        .then((Z) => {
          if (Z) return;
          YC("chrome", 1),
            x.setState((re) => {
              if (re.setupIssues.chromeExtensionIssueCount === 1) return re;
              return { ...re, setupIssues: { ...re.setupIssues, chromeExtensionIssueCount: 1 } };
            });
        })
        .catch(h);
    };
  },
};

var jxe = {
    id: "compliance-taint",
    deps: (S) => [S.addNotification],
    setup() {
      let S = fR();
      return ({ addNotification: x }) => {
        if ($n()) return;
        function P(j) {
          let H = j.filter((Z) => !S.includes(Z));
          S = j;
          for (let Z of H)
            x({
              key: `compliance-taint-${Z}`,
              kind: "event",
              priority: "immediate",
              requeueOnPreempt: true,
              text: `${j6(Z)} \xB7 some features are restricted \xB7 /status for details`,
            });
        }
        return P(fR()), Rpe(P);
      };
    },
  },
  Hxe = {
    id: "monitoring-notice",
    deps: (S) => [S.addNotification],
    setup() {
      let S = kEe();
      return ({ addNotification: x }) => {
        if ($n()) return;
        function P(j) {
          let H = S === null && j !== null;
          if (((S = j), H && j))
            x({
              key: "monitoring-notice",
              kind: "event",
              priority: "immediate",
              requeueOnPreempt: true,
              text: j.url ? `${j.text} \xB7 ${j.url}` : j.text,
            });
        }
        return P(kEe()), mer(P);
      };
    },
  };

var Jst = 5,
  $xe = {
    id: "cost-threshold",
    deps: (S) => {
      let x = S.turnAtRender;
      return [
        S.transcript.getSnapshot(),
        x.isLoading,
        S.initialMessage,
        x.lastQueryCompletionTime,
        S.requestDialog,
        S.storageV5,
        S.dialogStore,
      ];
    },
    setup() {
      let S = ie().hasAcknowledgedCostThreshold ? false : null;
      return ({
        turn: x,
        turnAtRender: { isLoading: P, lastQueryCompletionTime: j },
        initialMessage: H,
        isRemoteSession: Z,
        requestDialog: re,
        dialogStore: ue,
        storageV5: de,
      }) => {
        if (Z || P || S === false) return;
        if (H !== null || (x.isInitialMessageInFlight && j === 0)) return;
        if (S === null) {
          if (dl() < Jst) return;
          if ((s("tengu_cost_threshold_reached", {}), (S = f2t()), !S)) return;
        }
        if (ie().hasAcknowledgedCostThreshold || ue.getState().open.some((pe) => pe.kind === Rh.kind)) return;
        MCe(re, de);
      };
    },
  };

var Wxe = {
  id: "model-deprecation-warning",
  deps: (S) => [S.mainLoopModel, S.userSpecifiedModel, S.addNotification],
  setup() {
    let S = null;
    return ({ addNotification: x, mainLoopModel: P, userSpecifiedModel: j }) => {
      let H = FSt(j ?? P);
      if (H && H !== S)
        (S = H), x({ key: "model-deprecation-warning", kind: "warning", text: H, color: "warning", priority: "high" });
      if (!H) S = null;
    };
  },
};

var qxe = {
  id: "device-tool-notices",
  deps: (S) => [S.addNotification, S.session],
  setup() {
    return ({ addNotification: S, session: x }) =>
      oRt.of(x).subscribe((P, j) => {
        S({ key: P, kind: "warning", text: j, color: "warning", priority: "high", timeoutMs: 30000 });
      });
  },
};

var Vxe = "fast-mode-cooldown-started",
  Gxe = "fast-mode-cooldown-expired",
  Kxe = "fast-mode-org-changed",
  Xst = "fast-mode-overage-rejected",
  Yxe = { id: "fast-mode-org-changed", deps: (S) => [S.addNotification, S.fastMode, S.store], setup: () => Zst };

function Zst({ addNotification: S, fastMode: x, store: P }) {
  if ($n()) return;
  if (!Yr()) return;
  return RMe((j) => {
    if (j)
      S({
        key: Kxe,
        kind: "event",
        color: "fastMode",
        priority: "immediate",
        text: "Fast mode is now available \xB7 /fast to turn on",
      });
    else if (x && a3t()) {
      let H = f$();
      if (H === null) return;
      P.setState((Z) => ({ ...Z, fastMode: false })),
        S({ key: Kxe, kind: "event", color: "warning", priority: "immediate", text: H });
    }
  });
}

var Xxe = { id: "fast-mode-overage-rejected", deps: (S) => [S.addNotification, S.store], setup: () => eat };

function eat({ addNotification: S, store: x }) {
  if ($n()) return;
  if (!Yr()) return;
  return Oer((P) => {
    x.setState((j) => ({ ...j, fastMode: false })),
      S({ key: Xst, kind: "feedback", color: "error", priority: "immediate", text: P });
  });
}

var Zxe = { id: "fast-mode-cooldown", deps: (S) => [S.addNotification, S.fastMode], setup: () => tat };

function tat({ addNotification: S, fastMode: x }) {
  if ($n()) return;
  if (!x) return;
  let P = xer((H, Z) => {
      let re = $t(H - Date.now(), { hideTrailingZeros: true }),
        ue = oat(Z, re);
      S({ key: Vxe, invalidates: [Gxe], text: ue, color: "warning", priority: "immediate" });
    }),
    j = Ier(() => {
      S({
        key: Gxe,
        kind: "event",
        invalidates: [Vxe],
        color: "fastMode",
        text: "Fast limit reset \xB7 now using fast mode",
        priority: "immediate",
      });
    });
  return () => {
    P(), j();
  };
}

function oat(S, x) {
  switch (S) {
    case "overloaded":
      return `Fast mode overloaded and is temporarily unavailable \xB7 resets in ${x}`;
    case "rate_limit":
      return `Fast limit reached and temporarily disabled \xB7 resets in ${x}`;
  }
}

function uU(S) {
  let { status: x, ideName: P } = i_t(S.mcpClients);
  return {
    ideStatus: x,
    ideName: P,
    showIDEInstallError: Boolean(S.ideInstallationStatus?.error) && x !== "connected",
  };
}

var oPe = {
    id: "ide-status-disconnected",
    deps: (S) => {
      let { ideStatus: x, ideName: P, showIDEInstallError: j } = uU(S);
      return [S.addNotification, S.removeNotification, x, P, j];
    },
    setup: () => (S) => {
      if (sn()) return;
      let { ideStatus: x, ideName: P, showIDEInstallError: j } = uU(S);
      if (j || x !== "disconnected" || !P) {
        S.removeNotification("ide-status-disconnected");
        return;
      }
      S.addNotification({
        key: "ide-status-disconnected",
        kind: "warning",
        text: `${P} disconnected`,
        color: "error",
        priority: "medium",
      });
    },
  },
  nPe = {
    id: "ide-status-install-error",
    deps: (S) => [S.addNotification, S.removeNotification, uU(S).showIDEInstallError],
    setup: () => (S) => {
      if (sn()) return;
      if (!uU(S).showIDEInstallError) {
        S.removeNotification("ide-status-install-error");
        return;
      }
      S.addNotification({
        key: "ide-status-install-error",
        kind: "warning",
        text: "IDE extension install failed (see /status for info)",
        color: "error",
        priority: "medium",
      });
    },
  };

var rPe = { id: "install-issues", setup: () => nat };

function nat() {
  if ($n()) return;
  Kae()
    .then((S) => {
      let x = 0;
      for (let P of S)
        if (P.type === "path") x++;
        else n(`install check: ${P.message}`, { level: P.type === "error" ? "error" : "info" });
      YC("install", x);
    })
    .catch(h);
}

var rat = [
    /\bcurl\b/,
    /\bwget\b/,
    /\bssh\b/,
    /\bkubectl\b/,
    /\bsrun\b/,
    /\bdocker\b/,
    /\bbq\b/,
    /\bgsutil\b/,
    /\bgcloud\b/,
    /\baws\b/,
    /\bgit\s+push\b/,
    /\bgit\s+pull\b/,
    /\bgit\s+fetch\b/,
    /\bgh\s+(pr|issue)\b/,
    /\bnc\b/,
    /\bncat\b/,
    /\btelnet\b/,
    /\bftp\b/,
  ],
  iat = [
    /^no[,!]\s/i,
    /\bthat'?s (wrong|incorrect|not (what|right|correct))\b/i,
    /\bnot what I (asked|wanted|meant|said)\b/i,
    /\bI (said|asked|wanted|told you|already said)\b/i,
    /\bwhy did you\b/i,
    /\byou should(n'?t| not)? have\b/i,
    /\byou were supposed to\b/i,
    /\btry again\b/i,
    /\b(undo|revert) (that|this|it|what you)\b/i,
  ];

function sat(S) {
  for (let x of S) {
    if (x.type !== "assistant") continue;
    let P = x.message.content;
    if (!Array.isArray(P)) continue;
    for (let j of P) {
      if (j.type !== "tool_use" || !("name" in j)) continue;
      let H = j.name;
      if (H.startsWith("mcp__")) return false;
      if (EM.includes(H)) {
        let re = j.input?.command || "";
        if (rat.some((ue) => ue.test(re))) return false;
      }
    }
  }
  return true;
}

function aat(S) {
  for (let x = S.length - 1; x >= 0; x--) {
    let P = S[x];
    if (P.type !== "user") continue;
    let j = Yp(P);
    if (!j) continue;
    return iat.some((H) => H.test(j));
  }
  return false;
}

var lat = 3,
  cat = 1800000,
  iPe = {
    id: "issue-flag",
    deps: (S) => [S.transcript.getSnapshot(), S.turnAtRender.submitCount, S.addNotification],
    setup() {
      let S = 0,
        x = -1,
        P = false;
      function j(H, Z) {
        if (x === Z) return true;
        if (Date.now() - S < cat) return false;
        if (Z < lat) return false;
        if (!sat(H) || !aat(H)) return false;
        return (S = Date.now()), (x = Z), true;
      }
      return ({ addNotification: H, transcript: Z, turnAtRender: re }) => {};
    },
  };

var uat = 5000,
  sPe = {
    id: "lsp-initialization",
    deps: (S) => [S.store, S.clock],
    setup() {
      let S = new Set();
      return ({ store: x, clock: P }) => {
        if (!tPe()) return;
        function j(ue, de) {
          let pe = `${ue}:${de}`;
          if (S.has(pe)) return;
          S.add(pe),
            n(`LSP error: ${ue} - ${de}`),
            x.setState((Re) => {
              let be = new Set(
                  Re.plugins.errors.map((Oe) => {
                    if (Oe.type === "generic-error") return `generic-error:${Oe.source}:${Oe.error}`;
                    return `${Oe.type}:${Oe.source}`;
                  }),
                ),
                Pe = `generic-error:${ue}:${de}`;
              if (be.has(Pe)) return Re;
              return {
                ...Re,
                plugins: {
                  ...Re.plugins,
                  errors: [...Re.plugins.errors, { type: "generic-error", source: ue, error: or(de, 500) }],
                },
              };
            });
        }
        function H(ue) {
          x.setState((de) => {
            if (de.setupIssues.lspFailedCount === ue) return de;
            return YC("LSP", ue), { ...de, setupIssues: { ...de.setupIssues, lspFailedCount: ue } };
          });
        }
        function Z() {
          if (sn()) return true;
          if (Kfe()) return true;
          let ue = mIe();
          if (ue.status === "failed") return j("lsp-manager", ue.error.message), H(1), false;
          if (ue.status === "pending" || ue.status === "not-started") return true;
          let de = Cye();
          if (de) {
            let pe = de.getAllServers(),
              Re = 0;
            for (let [be, Pe] of pe) if (Pe.state === "error" && Pe.lastError) Re++, j(be, Pe.lastError.message);
            H(Re);
          }
          return true;
        }
        if (!sn() && !Z()) return;
        let re = C8(
          P,
          () => {
            if (!Z()) re();
          },
          uat,
        );
        return re;
      };
    },
  };

function mat() {
  return a.CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL;
}

var dU = { MAX_ATTEMPTS: 10, INITIAL_DELAY_MS: 3600000, BACKOFF_MULTIPLIER: 2, MAX_DELAY_MS: 604800000 };

function kZ(S) {
  let x = dU.INITIAL_DELAY_MS * Math.pow(dU.BACKOFF_MULTIPLIER, S);
  return Math.min(x, dU.MAX_DELAY_MS);
}

function pat(S) {
  if (!S.officialMarketplaceAutoInstallAttempted) return true;
  if (S.officialMarketplaceAutoInstalled) return false;
  let x = S.officialMarketplaceAutoInstallFailReason,
    P = S.officialMarketplaceAutoInstallRetryCount || 0,
    j = S.officialMarketplaceAutoInstallNextRetryTime,
    H = Date.now();
  if (P >= dU.MAX_ATTEMPTS) return false;
  if (x === "policy_blocked") return false;
  if (j && H < j) return false;
  return x === "unknown" || x === "git_unavailable" || x === "gcs_unavailable" || x === void 0;
}

async function aPe(S) {
  let x = ie();
  if (!pat(x)) {
    let j = x.officialMarketplaceAutoInstalled
      ? "already_installed"
      : (x.officialMarketplaceAutoInstallFailReason ?? "already_attempted");
    return n(`Official marketplace auto-install skipped: ${j}`), { installed: false, skipped: true, reason: j };
  }
  let P = false;
  try {
    if (mat())
      return (
        n("Official marketplace auto-install disabled via env var, skipping"),
        await Ae(
          (pe) => ({
            ...pe,
            officialMarketplaceAutoInstallAttempted: true,
            officialMarketplaceAutoInstalled: false,
            officialMarketplaceAutoInstallFailReason: "policy_blocked",
          }),
          S,
        ),
        s("tengu_official_marketplace_auto_install", { installed: false, skipped: true, policy_blocked: true }),
        { installed: false, skipped: true, reason: "policy_blocked" }
      );
    if ((await zl(S))[ag])
      return (
        n(`Official marketplace '${ag}' already installed, skipping`),
        await Ae(
          (pe) => ({
            ...pe,
            officialMarketplaceAutoInstallAttempted: true,
            officialMarketplaceAutoInstalled: true,
            officialMarketplaceAutoInstallFailReason: void 0,
            officialMarketplaceAutoInstallRetryCount: void 0,
            officialMarketplaceAutoInstallLastAttemptTime: void 0,
            officialMarketplaceAutoInstallNextRetryTime: void 0,
          }),
          S,
        ),
        { installed: false, skipped: true, reason: "already_installed" }
      );
    if (!Ip(Xte))
      return (
        n("Official marketplace blocked by enterprise policy, skipping"),
        await Ae(
          (pe) => ({
            ...pe,
            officialMarketplaceAutoInstallAttempted: true,
            officialMarketplaceAutoInstalled: false,
            officialMarketplaceAutoInstallFailReason: "policy_blocked",
          }),
          S,
        ),
        s("tengu_official_marketplace_auto_install", { installed: false, skipped: true, policy_blocked: true }),
        { installed: false, skipped: true, reason: "policy_blocked" }
      );
    let H = N7(),
      Z = dat(H, ag);
    if ((await Ept(Z, H, S)) !== null)
      return (
        y("plugin_official_marketplace_fetch"),
        await oce((pe) => {
          let Re = pe[ag];
          if (Re && jb(Re.installLocation)) return null;
          return (pe[ag] = { source: Xte, installLocation: Z, lastUpdated: new Date().toISOString() }), pe;
        }, S),
        await Ae(
          (pe) => ({
            ...pe,
            officialMarketplaceAutoInstallAttempted: true,
            officialMarketplaceAutoInstalled: true,
            officialMarketplaceAutoInstallFailReason: void 0,
            officialMarketplaceAutoInstallRetryCount: void 0,
            officialMarketplaceAutoInstallLastAttemptTime: void 0,
            officialMarketplaceAutoInstallNextRetryTime: void 0,
          }),
          S,
        ),
        s("tengu_official_marketplace_auto_install", { installed: true, skipped: false, via_gcs: true }),
        { installed: true, skipped: false }
      );
    if (!I("tengu_plugin_official_mkt_git_fallback", true)) {
      p("plugin_official_marketplace_fetch", "gcs_failed_fallback_disabled"),
        n("Official marketplace GCS failed; git fallback disabled by flag \u2014 skipping install");
      let pe = (x.officialMarketplaceAutoInstallRetryCount || 0) + 1,
        Re = Date.now(),
        be = Re + kZ(pe);
      return (
        await Ae(
          (Pe) => ({
            ...Pe,
            officialMarketplaceAutoInstallAttempted: true,
            officialMarketplaceAutoInstalled: false,
            officialMarketplaceAutoInstallFailReason: "gcs_unavailable",
            officialMarketplaceAutoInstallRetryCount: pe,
            officialMarketplaceAutoInstallLastAttemptTime: Re,
            officialMarketplaceAutoInstallNextRetryTime: be,
          }),
          S,
        ),
        s("tengu_official_marketplace_auto_install", {
          installed: false,
          skipped: true,
          gcs_unavailable: true,
          retry_count: pe,
        }),
        { installed: false, skipped: true, reason: "gcs_unavailable" }
      );
    }
    if (((P = true), !(await s3e()))) {
      p("plugin_official_marketplace_fetch", "gcs_failed_git_unavailable"),
        n("Git not available, skipping official marketplace auto-install");
      let pe = (x.officialMarketplaceAutoInstallRetryCount || 0) + 1,
        Re = Date.now(),
        be = kZ(pe),
        Pe = Re + be;
      return (
        await Ae(
          (Oe) => ({
            ...Oe,
            officialMarketplaceAutoInstallAttempted: true,
            officialMarketplaceAutoInstalled: false,
            officialMarketplaceAutoInstallFailReason: "git_unavailable",
            officialMarketplaceAutoInstallRetryCount: pe,
            officialMarketplaceAutoInstallLastAttemptTime: Re,
            officialMarketplaceAutoInstallNextRetryTime: Pe,
          }),
          S,
        ),
        s("tengu_official_marketplace_auto_install", {
          installed: false,
          skipped: true,
          git_unavailable: true,
          retry_count: pe,
        }),
        { installed: false, skipped: true, reason: "git_unavailable" }
      );
    }
    n("Attempting to auto-install official marketplace"),
      await F7(Xte, void 0, S),
      n("Successfully auto-installed official marketplace");
    let de = x.officialMarketplaceAutoInstallRetryCount || 0;
    return (
      await Ae(
        (pe) => ({
          ...pe,
          officialMarketplaceAutoInstallAttempted: true,
          officialMarketplaceAutoInstalled: true,
          officialMarketplaceAutoInstallFailReason: void 0,
          officialMarketplaceAutoInstallRetryCount: void 0,
          officialMarketplaceAutoInstallLastAttemptTime: void 0,
          officialMarketplaceAutoInstallNextRetryTime: void 0,
        }),
        S,
      ),
      g("plugin_official_marketplace_fetch", "gcs_failed_git_fallback"),
      s("tengu_official_marketplace_auto_install", { installed: true, skipped: false, retry_count: de }),
      { installed: true, skipped: false }
    );
  } catch (j) {
    let H = j instanceof Error ? j.message : String(j);
    if (H.includes("xcrun: error:")) {
      if ((DWn(), P)) p("plugin_official_marketplace_fetch", "gcs_failed_git_unavailable");
      return (
        n("Official marketplace auto-install: git is a non-functional macOS xcrun shim, treating as git_unavailable"),
        s("tengu_official_marketplace_auto_install", {
          installed: false,
          skipped: true,
          git_unavailable: true,
          macos_xcrun_shim: true,
        }),
        { installed: false, skipped: true, reason: "git_unavailable" }
      );
    }
    if (P) p("plugin_official_marketplace_fetch", "gcs_and_git_failed");
    n(`Failed to auto-install official marketplace: ${H}`, { level: "error" });
    let Z = (x.officialMarketplaceAutoInstallRetryCount || 0) + 1,
      re = Date.now(),
      ue = kZ(Z),
      de = re + ue;
    return (
      await Ae(
        (pe) => ({
          ...pe,
          officialMarketplaceAutoInstallAttempted: true,
          officialMarketplaceAutoInstalled: false,
          officialMarketplaceAutoInstallFailReason: "unknown",
          officialMarketplaceAutoInstallRetryCount: Z,
          officialMarketplaceAutoInstallLastAttemptTime: re,
          officialMarketplaceAutoInstallNextRetryTime: de,
        }),
        S,
      ),
      s("tengu_official_marketplace_auto_install", { installed: false, skipped: true, failed: true, retry_count: Z }),
      { installed: false, skipped: true, reason: "unknown" }
    );
  }
}

var cPe = {
  id: "official-marketplace-check",
  deps: (S) => [S.store, S.storageV5],
  setup() {
    let S = false;
    return ({ store: x, storageV5: P }) => {
      if ($n() || S) return;
      (S = true),
        aPe(P)
          .then((j) => {
            let H = !j.installed && j.skipped && j.reason === "unknown" ? 1 : 0;
            YC("plugins", H),
              x.setState((Z) => {
                if (Z.setupIssues.marketplaceIssueCount === H) return Z;
                return { ...Z, setupIssues: { ...Z.setupIssues, marketplaceIssueCount: H } };
              });
          })
          .catch(h);
    };
  },
};

var uPe = {
  id: "plugin-autoupdate",
  deps: (S) => [S.store, S.storageV5, S.credentials],
  setup() {
    let S = 0,
      x = [],
      P = new WeakSet();
    return ({ store: j, storageV5: H, credentials: Z }, re) => {
      if (sn()) return;
      let ue = mOn((Re, be, Pe, Oe) => {
        n(
          `Plugin autoupdate notification: ${Re.length} plugin(s) updated (${Pe.length} re-resolved), ${be.length} skipped (pinned, deferred or refused)`,
        );
        let Ie = (ot, st = new Set()) =>
            j.setState((nt) => {
              let Pt = new Set(ot.map(AR)),
                kt = nt.plugins.errors.filter(
                  (yt) =>
                    yt.type !== "autoupdate-blocked-by-pinner" &&
                    yt.type !== "autoupdate-deferred-entry-helper" &&
                    yt.type !== "autoupdate-disabled-by-policy" &&
                    !(P.has(yt) && (Pt.has(AR(yt)) || st.has(AR(yt)))),
                );
              for (let yt of ot) P.add(yt);
              let Ht = [...kt, ...ot];
              if (Ht.length === nt.plugins.errors.length && Ht.every((yt, lt) => yt === nt.plugins.errors[lt]))
                return nt;
              return { ...nt, plugins: { ...nt.plugins, errors: Ht } };
            }),
          He = new Set(be.map(AR)),
          Fe = new Set(Re),
          Ve = new Set(x.filter((ot) => Fe.has(ot.source)).map(AR));
        (x = [...x.filter((ot) => !He.has(AR(ot)) && !Fe.has(ot.source)), ...be]), Ie(x, Ve);
        let Ke = ++S;
        if (Pe.length === 0) {
          if (Oe) pe(Re, false);
          return;
        }
        de().then((ot) => {
          if (ot) Ie(x);
          if (Ke !== S) return;
          pe(Re, ot);
        });
      });
      async function de() {
        try {
          let { mainLoopModel: Re, dynamicMcpConfig: be } = re();
          if (
            (
              await NQ({
                model: Re,
                dynamicMcpConfig: be,
                mcpClients: j.getState().mcp.clients,
                storageV5: H,
                credentials: Z,
              })
            ).wouldInvalidateCache
          )
            return g("plugin_command_reresolve_reload", "cache_impact"), false;
          if ((await D0(j.setState, H, Z)).error_count > 0)
            return g("plugin_command_reresolve_reload", "load_errors"), "with-errors";
          return y("plugin_command_reresolve_reload"), "ok";
        } catch (Re) {
          return (
            n(`Plugin autoupdate: in-session reload failed: ${l(Re)}`, { level: "warn" }),
            p("plugin_command_reresolve_reload", "refresh_failed"),
            false
          );
        }
      }
      function pe(Re, be) {
        if (sn()) return;
        if (Re.length === 0) return;
        let Pe = Re.map((Ie) => {
            let He = Ie.indexOf("@");
            return He > 0 ? Ie.substring(0, He) : Ie;
          }),
          Oe = Pe.length <= 2 ? Pe.join(" and ") : `${Pe.length} plugins`;
        re().addNotification({
          key: be ? "plugin-autoupdate-reloaded" : "plugin-autoupdate-restart",
          segments: [
            {
              text: `${Pe.length === 1 ? "Plugin" : "Plugins"} updated: ${Oe}`,
              color: be === "with-errors" ? "warning" : "success",
            },
            be === "ok"
              ? { text: " \xB7 reloaded for this session", dim: true }
              : be === "with-errors"
                ? { text: " \xB7 reloaded with errors \u2014 see /plugin", dim: true }
                : { text: " \xB7 Run /reload-plugins to apply", dim: true },
          ],
          priority: "low",
          timeoutMs: 1e4,
        }),
          n(`Showing plugin autoupdate notification for: ${Pe.join(", ")} (${be ? "reloaded" : "reload required"})`);
      }
      return ue;
    };
  },
};

function AR(S) {
  return `${S.type}\x00${S.source}`;
}

var dPe = {
  id: "prompt-queue-use-count",
  deps: (S) => [S.queuedCommandCount, S.storageV5],
  setup() {
    let S = false;
    return ({ queuedCommandCount: x, storageV5: P }) => {
      if (x < 1) {
        S = false;
        return;
      }
      if (S) return;
      (S = true), Ae((j) => ({ ...j, promptQueueUseCount: (j.promptQueueUseCount ?? 0) + 1 }), P);
    };
  },
};

var mPe = {
  id: "pro-trial-expired-auto-open",
  setup() {
    return ({ submitPrompt: S }) => {
      if (!n7t()) return;
      S("/pro-trial-expired", jy);
    };
  },
};

var fPe = {
  id: "fable-usage-credits",
  deps: (S) => [S.addNotification],
  setup() {
    let S = false;
    return ({ addNotification: x }) =>
      ZWn((P, j, H) => {
        if (!uf(P)) return;
        if (j || H) return;
        if (iH()) return;
        if (uM()) return;
        if (mze()) {
          if (!S)
            (S = true),
              x({
                kind: "contextual",
                key: "fable-credits-info",
                text: "Fable 5 is drawing from usage credits",
                priority: "medium",
              });
          return;
        }
        x({
          kind: "warning",
          key: "fable-usage-credits",
          text: "Fable 5 is now using usage credits instead of your plan limits",
          color: "error",
          priority: "immediate",
        });
      });
  },
};

function pPe() {
  let S = Fn();
  return { hasBillingAccess: vf(), isTeamOrEnterprise: S === "team" || S === "enterprise" };
}

var gPe = {
    id: "limit-reached",
    deps: (S) => {
      let { hasBillingAccess: x, isTeamOrEnterprise: P } = pPe();
      return [S.claudeAiLimits.isUsingOverage, S.claudeAiLimits, S.mainLoopModel, S.addNotification, x, P];
    },
    setup() {
      let S = false;
      return ({ addNotification: x, claudeAiLimits: P, mainLoopModel: j }) => {
        let { hasBillingAccess: H, isTeamOrEnterprise: Z } = pPe();
        if (P.isUsingOverage && !S && (!Z || H))
          x({ key: "limit-reached", text: asn(P, j), priority: "immediate" }), (S = true);
        else if (!P.isUsingOverage && S) S = false;
      };
    },
  },
  hPe = {
    id: "rate-limit-warning",
    deps: (S) => [S.claudeAiLimits, S.mainLoopModel, S.effortValue, S.addNotification],
    setup() {
      let S = null;
      return ({ addNotification: x, claudeAiLimits: P, mainLoopModel: j, effortValue: H }) => {
        let Z = isn(P, j);
        if (!Z || Z === S) return;
        S = Z;
        let re = YWn(P, j, H),
          ue = P.rateLimitType === "overage" ? XWn(j) : null;
        if (
          (x({
            key: "rate-limit-warning",
            segments: [
              { text: Z, color: "warning" },
              ...(re ? [{ text: ` \xB7 ${re.text}`, dim: true }] : []),
              ...(ue ? [{ text: ` \xB7 ${ue}`, dim: true }] : []),
            ],
            priority: "high",
          }),
          re)
        )
          s("tengu_rate_limit_lever_hint", { lever: c(re.lever) });
      };
    },
  };

var bPe = "rc-long-turn-nudge";

function CPe(xzo) {
  let CZ = _(8),
    { url: qI } = xzo,
    SPe = hn(),
    fat;
  if (CZ[0] === d) (fat = r(t, { dimColor: true, children: ["Check in from your phone", " \xB7 "] })), (CZ[0] = fat);
  else fat = CZ[0];
  let gat;
  if (CZ[1] !== qI)
    (gat = r(U, { children: [fat, e(t, { color: "suggestion", children: qI })] })), (CZ[1] = qI), (CZ[2] = gat);
  else gat = CZ[2];
  let vZ = gat,
    hat;
  if (CZ[3] === d) (hat = e(t, { children: "Still working. " })), (CZ[3] = hat);
  else hat = CZ[3];
  let yat;
  if (CZ[4] !== vZ || CZ[5] !== SPe || CZ[6] !== qI)
    (yat = r(U, {
      children: [
        hat,
        SPe
          ? vZ
          : e(ut, {
              url: qI,
              fallback: vZ,
              children: e(t, { color: "suggestion", children: "Check in from your phone" }),
            }),
      ],
    })),
      (CZ[4] = vZ),
      (CZ[5] = SPe),
      (CZ[6] = qI),
      (CZ[7] = yat);
  else yat = CZ[7];
  return yat;
}

var vPe = {
  id: "rc-long-turn-nudge",
  deps: (S) => [S.turnAtRender.isLoading, S.replBridgeActive, S.removeNotification, S.clock],
  setup() {
    let S = false;
    return ({ turnAtRender: { isLoading: x }, replBridgeActive: P, removeNotification: j, clock: H }, Z) => {
      if (!x) {
        if (S) (S = false), j(bPe);
        return;
      }
      if (!P || S || sn()) return;
      let re = QIn();
      if (re === null || !rPn(re) || !ZIn(re)) return;
      let ue = H.setTimeout(() => {
        let { addNotification: de, replBridgeSessionUrl: pe, store: Re, storageV5: be } = Z();
        if (S || !pe) return;
        if (((S = true), re.probability < 1 && Math.random() >= re.probability)) return;
        oPn(re, be),
          de({
            key: bPe,
            kind: "upsell",
            jsx: e(CPe, { url: pe }),
            priority: "medium",
            requeueOnPreempt: true,
            timeoutMs: 2147483647,
          }),
          s("tengu_rc_long_turn_nudge_shown", {
            auto_on: Re.getState().replBridgeAutoOnByDefault,
            threshold_sec: re.thresholdSec,
          });
      }, re.thresholdSec * 1000);
      return () => ue();
    };
  },
};

var wZ = "rc-permission-nudge",
  Sat = new Set(["default", "plan", "acceptEdits"]),
  wPe = {
    id: "rc-permission-nudge",
    deps: (S) => [
      S.permissionPromptCount,
      S.turnAtRender.isLoading,
      S.replBridgeActive,
      S.replBridgeSessionUrl,
      S.permissionMode,
      S.addNotification,
      S.removeNotification,
      S.storageV5,
    ],
    setup() {
      let S = false,
        x = false,
        P = 0,
        j = null,
        H = () => {};
      function Z({
        addNotification: re,
        turnAtRender: ue,
        replBridgeActive: de,
        replBridgeSessionUrl: pe,
        permissionMode: Re,
        permissionPromptCount: be,
        storageV5: Pe,
      }) {
        if (be < P) P = 0;
        if (S || !de || !pe || !Sat.has(Re) || sn()) return;
        if (!x) {
          let Oe = ePn();
          if (Oe.probability <= 0 || be < Oe.afterPromptCount || be <= P || !iPn(Oe.maxImpressions)) return;
          if (((P = be), Math.random() >= Oe.probability)) return;
          x = true;
        }
        if (ue.isLoading) return;
        (S = true),
          sPn(Pe),
          re({
            key: wZ,
            kind: "upsell",
            segments: [
              { text: "Approve tool calls from your phone \xB7 ", dim: true },
              { text: pe, color: "suggestion" },
            ],
            priority: "medium",
            requeueOnPreempt: true,
            timeoutMs: 2147483647,
          }),
          s("tengu_rc_permission_nudge_shown", { permission_mode: c(Re), prompt_count: be });
      }
      return {
        effect: (re) => {
          Z(re);
          let ue = { isLoading: re.turnAtRender.isLoading, rcReady: re.replBridgeActive },
            de = j === null || j.isLoading !== ue.isLoading || j.rcReady !== ue.rcReady;
          if (((j = ue), de && S && (ue.isLoading || !ue.rcReady))) re.removeNotification(wZ);
          H = re.removeNotification;
        },
        dispose: () => H(wZ),
      };
    },
  };

var TPe = "rc-idle-upsell",
  _Pe = "push-idle-upsell",
  xPe = {
    id: "remote-control-upsell",
    deps: (S) => {
      let x = S.turnAtRender;
      return [x.lastQueryCompletionTime, x.isLoading, S.addNotification, S.removeNotification, S.clock, S.storageV5];
    },
    setup() {
      let S = false;
      return ({
        addNotification: x,
        removeNotification: P,
        clock: j,
        store: H,
        turnAtRender: { isLoading: Z, lastQueryCompletionTime: re },
        storageV5: ue,
      }) => {
        if (sn() || re === 0 || Z || S) return;
        let de = !RPe(H) && fKt() ? "rc" : mKt() ? "push" : null;
        if (de === null) return;
        let pe = Date.now() - re,
          Re = YIn * 60000 - pe,
          be = j.setTimeout(
            () => {
              if (S) return;
              let Pe = Math.round((Date.now() - re) / 60000);
              if (de === "rc") {
                if (RPe(H) || !fKt()) return;
                (S = true),
                  tPn(ue),
                  x({
                    key: TPe,
                    kind: "upsell",
                    segments: [
                      { text: "control this session from your phone \xB7 ", dim: true },
                      { text: "/remote-control", color: "suggestion" },
                    ],
                    priority: "medium",
                    timeoutMs: 2147483647,
                  }),
                  s("tengu_rc_upsell_notification_shown", { idleMinutes: Pe });
              } else {
                if (!mKt()) return;
                (S = true),
                  nPn(ue),
                  x({
                    key: _Pe,
                    kind: "upsell",
                    segments: [
                      { text: "get pinged when Claude finishes \xB7 enable push notifications in ", dim: true },
                      { text: "/config", color: "suggestion" },
                    ],
                    priority: "medium",
                    timeoutMs: 2147483647,
                  }),
                  s("tengu_push_notif_upsell_notification_shown", { idleMinutes: Pe });
              }
            },
            Math.max(0, Re),
          );
        return () => {
          be(), P(TPe), P(_Pe);
        };
      };
    },
  };

function RPe(S) {
  let x = S.getState();
  return x.replBridgeEnabled && !x.replBridgeOutboundOnly;
}

var PPe = {
    id: "repl-mount-log",
    deps: (S) => [S.disabled],
    setup() {
      return ({ disabled: S }) => (
        n(`[REPL:mount] REPL mounted, disabled=${S}`), () => n("[REPL:unmount] REPL unmounting")
      );
    },
  },
  APe = {
    id: "dialog-waiting-in-transcript",
    deps: (S) => [S.screen, S.hasOpenDialog],
    setup() {
      return ({ screen: S, hasOpenDialog: x }) => {
        if (S === "transcript" && x) s("tengu_dialog_waiting_in_transcript", {}), fi.autoDenyPresence.emit();
      };
    },
  },
  MPe = {
    id: "attach-paint-marks",
    setup() {
      return ({ session: S, transcript: x }) => {
        if (!_K(S.host)) return;
        X9n(x.getSnapshot().length);
        let P = setImmediate(() => {
          Y9n();
        });
        return () => {
          clearImmediate(P);
        };
      };
    },
  };

var bat = "routine-fired";

function kat(S) {
  let x = Date.now() - Date.parse(S);
  if (!Number.isFinite(x) || x < 60000) return "just now";
  return `${$t(x, { mostSignificantOnly: true })} ago`;
}

function mU(S, x) {
  return Date.parse(S) > Date.parse(x);
}

function Cat(S, x) {
  let P = x;
  return {
    fired: S.filter((H) => {
      if (!H.run_once_at || !H.last_fired_at) return false;
      if (!mU(H.last_fired_at, x)) return false;
      if (mU(H.last_fired_at, P)) P = H.last_fired_at;
      return true;
    }),
    nextWatermark: P,
  };
}

function vat(S) {
  let x = `${zt().CLAUDE_AI_ORIGIN}/code/routines`,
    P = S.reduce((H, Z) => (mU(Z.last_fired_at ?? "", H.last_fired_at ?? "") ? Z : H)),
    j = P.last_fired_at ? kat(P.last_fired_at) : "";
  if (S.length === 1) {
    let H = S[0];
    return {
      jsx: r(U, {
        children: [
          e(tt, { status: "success", withSpace: true }),
          e(t, { dimColor: true, children: "routine " }),
          e(t, { color: "suggestion", children: H.name }),
          r(t, { dimColor: true, children: [" ", "ran", j ? ` ${j}` : "", " \xB7 ", x, "/"] }),
          e(t, { color: "suggestion", children: H.id }),
        ],
      }),
      url: `${x}/${H.id}`,
    };
  }
  return {
    jsx: r(U, {
      children: [
        e(tt, { status: "success", withSpace: true }),
        r(t, { dimColor: true, children: [S.length, " routines ran", j ? ` (latest ${j})` : "", " \xB7", " "] }),
        e(t, { color: "suggestion", children: "/routines" }),
      ],
    }),
    url: x,
  };
}

var EPe = {
  id: "routine-fired",
  deps: (S) => [S.addNotification, S.storageV5, S.credentials],
  setup() {
    let S = false;
    return ({ addNotification: x, storageV5: P, credentials: j }) => {
      if (S) return;
      if (((S = true), $n() || Ct() || !Tt() || !Mt("allow_remote_sessions") || !Mt(wL))) return;
      let H = ie().routineFiredWatermark;
      if (H === void 0) {
        let Z = new Date().toISOString();
        Ae((re) => (re.routineFiredWatermark !== void 0 ? re : { ...re, routineFiredWatermark: Z }), P);
        return;
      }
      (async () => {
        let Z;
        try {
          Z = await l8n(j);
        } catch (pe) {
          n(`[routine-fired] fetchTriggers failed: ${pe}`, { level: "warn" });
          return;
        }
        let { fired: re, nextWatermark: ue } = Cat(Z, H);
        if (re.length === 0) return;
        let { jsx: de } = vat(re);
        x({ key: bat, kind: "event", jsx: de, priority: "medium", timeoutMs: 30000 }),
          s("tengu_routine_fired_notification_shown", { count: re.length, trigger_ids: Etr(re.map((pe) => pe.id)) }),
          await Ae(
            (pe) =>
              pe.routineFiredWatermark !== void 0 && !mU(ue, pe.routineFiredWatermark)
                ? pe
                : { ...pe, routineFiredWatermark: ue },
            P,
          );
      })();
    };
  },
};

var DPe = {
  id: "rollout-cohort-notice",
  deps: (S) => [S.addNotification, S.removeNotification, S.storageV5],
  setup: () => wat,
};

function wat({ addNotification: S, removeNotification: x, storageV5: P }) {}

function NPe() {
  return bme(eG().errors).invalidEntries;
}

var LPe = { id: "settings-errors", deps: (S) => [S.store], setup: () => Tat };

function Tat({ store: S }) {
  function x(P) {
    if (sn()) return;
    YC("settings", P.length),
      S.setState((j) => {
        if (j.setupIssues.settingsErrorCount === P.length) return j;
        return { ...j, setupIssues: { ...j.setupIssues, settingsErrorCount: P.length } };
      });
  }
  return x(NPe()), kl.subscribe(() => x(NPe()));
}

var OPe = {
  id: "subscription-switch-check",
  deps: (S) => [S.store],
  setup() {
    let S = false;
    return ({ store: x }) => {
      if ($n() || S) return;
      if (((S = true), !VOn() || Ttt())) return;
      zOn()
        .then((P) => {
          if (P === null) return;
          x.setState((j) => {
            if (j.setupIssues.existingClaudeSubscription === P) return j;
            return { ...j, setupIssues: { ...j.setupIssues, existingClaudeSubscription: P } };
          });
        })
        .catch(h);
    };
  },
};

function BPe(S) {
  if (!("text" in S)) return 1;
  let x = S.text.match(/^(\d+)/);
  return x?.[1] ? parseInt(x[1], 10) : 1;
}

function _at(S, x) {
  return UPe(BPe(S) + 1);
}

function UPe(S) {
  return {
    key: "teammate-spawn",
    kind: "event",
    text: S === 1 ? "1 teammate started" : `${S} teammates started`,
    priority: "low",
    timeoutMs: 5000,
    fold: _at,
  };
}

function Rat(S, x) {
  return jPe(BPe(S) + 1);
}

function jPe(S) {
  return {
    key: "teammate-shutdown",
    kind: "event",
    text: S === 1 ? "1 teammate shut down" : `${S} teammates shut down`,
    priority: "low",
    timeoutMs: 5000,
    fold: Rat,
  };
}

var $Pe = {
  id: "teammate-lifecycle",
  deps: (S) => [S.tasks, S.addNotification],
  setup() {
    let S = new Set(),
      x = new Set();
    return ({ addNotification: P, tasks: j }) => {
      if (Gr() !== null) return;
      for (let [H, Z] of Object.entries(j)) {
        if (!Dd(Z)) continue;
        if (Z.status === "running" && !S.has(H)) S.add(H), P(UPe(1));
        if (Z.status === "completed" && !x.has(H)) x.add(H), P(jPe(1));
      }
    };
  },
};

var WPe = "usage-limit-grace";

function TZ(S) {
  let x = wer();
  if (x !== null)
    return {
      mock: x,
      graceWindow: {
        rateLimitType: S.rateLimitType ?? "five_hour",
        resetsAt: S.resetsAt,
        extraUsageStatus: x === "covered" ? "allowed" : void 0,
      },
    };
  let P = Nct();
  return { mock: x, graceWindow: P !== null && I("tengu_lantern_sconce", false) ? P : null };
}

var qPe = {
  id: "usage-limit-grace",
  deps: (S) => {
    let { mock: x, graceWindow: P } = TZ(S.claudeAiLimits);
    return [
      x,
      P !== null,
      P?.extraUsageStatus !== void 0,
      P?.rateLimitType,
      P?.resetsAt,
      S.turnAtRender.isLoading,
      S.addNotification,
      S.removeNotification,
      S.clock,
    ];
  },
  setup() {
    let S = "none",
      x = null;
    function P({ addNotification: j, removeNotification: H, claudeAiLimits: Z, turnAtRender: { isLoading: re } }) {
      let { mock: ue, graceWindow: de } = TZ(Z),
        pe = de !== null,
        Re = de?.extraUsageStatus !== void 0;
      if (!pe) S = "none";
      else {
        if (S === "none" && ue === null) y("usage_limit_grace_notice");
        if (Re) S = "covered";
        else if ((S === "none" || S === "covered") && re) S = "finishing";
        else if (!re && S !== "waiting") S = "waiting";
      }
      let be = ue ?? (pe && S !== "none" ? S : null),
        Pe = "";
      if (be !== null && de !== null) {
        let He = ad(de.resetsAt),
          Fe = be === "covered" ? null : ssn(de.rateLimitType);
        Pe = `${He ? ` \xB7 resets ${He}` : ""}${Fe ? ` \xB7 ${Fe}` : ""}`;
      }
      let Oe = x,
        Ie = [be, Pe, j, H];
      if (Oe !== null && Ie.every((He, Fe) => Object.is(He, Oe[Fe]))) return;
      if (((x = Ie), H(WPe), be === null)) return;
      j({
        key: WPe,
        kind: "warning",
        priority: "immediate",
        pinned: true,
        segments: [
          {
            text:
              be === "finishing"
                ? "Usage limit reached \xB7 finishing up"
                : be === "covered"
                  ? "Usage limit reached \xB7 a little extra on us, then your credits"
                  : "Usage limit reached",
          },
          { text: Pe, dim: true },
        ],
      });
    }
    return (j, H) => {
      P(j);
      let Z = TZ(j.claudeAiLimits).graceWindow?.resetsAt;
      if (Z === void 0) return;
      return $7t(Z * 1000, j.clock.setTimeout, () => P(H()));
    };
  },
};

var JPe = {
  id: "wellbeing",
  deps: (S) => [S.settings, S.addNotification, S.clock],
  setup() {
    let S = null,
      x = false,
      P = null,
      j = null,
      H = () => {},
      Z = null,
      re = null;
    function ue(pe, Re) {
      return false;
    }
    function de() {}
    return {
      effect: (pe) => {},
      dispose: () => {
        re?.stop(), (re = null);
      },
    };
  },
};

var xat = 15000,
  ZPe = {
    id: "worktree-sparse-tip",
    setup() {
      return ({ transcript: S }) => {
        let x = ha();
        if (!x?.creationDurationMs || x.usedSparsePaths) return;
        if (x.creationDurationMs < xat) return;
        let P = Math.round(x.creationDurationMs / 1000);
        S.replace((j) => [
          ...j,
          Dt(
            `Worktree creation took ${P}s. For large repos, set \`worktree.sparsePaths\` in .claude/settings.json to check out only the directories you need \u2014 e.g. \`{"worktree": {"sparsePaths": ["src", "packages/foo"]}}\`.`,
            "info",
          ),
        ]);
      };
    },
  };

var RZ = [
  PPe,
  MPe,
  qxe,
  rPe,
  cPe,
  Uxe,
  Lxe,
  OPe,
  oPe,
  nPe,
  Bxe,
  uPe,
  LPe,
  jxe,
  Hxe,
  fPe,
  gPe,
  hPe,
  qPe,
  Yxe,
  Xxe,
  Zxe,
  Nxe,
  Wxe,
  sPe,
  $Pe,
  DPe,
  EPe,
  JPe,
  iPe,
  xPe,
  vPe,
  wPe,
  APe,
  Fxe,
  ZPe,
  $xe,
  mPe,
  dPe,
];

F();

function PZ({
  mainLoopModel: S,
  mcpClients: x,
  ideInstallationStatus: P,
  dynamicMcpConfig: j,
  turn: H,
  transcript: Z,
  requestDialog: re,
  dialogStore: ue,
  hasOpenDialog: de,
  submitPrompt: pe,
  screen: Re,
  disabled: be,
  isRemoteSession: Pe,
  session: Oe,
}) {
  let Ie = Xe(H, Pat),
    He = Xe(H, Aat),
    Fe = Xe(H, Mat);
  Xe(Z);
  let Ve = z(() => ({ isLoading: Ie, lastQueryCompletionTime: He, submitCount: Fe }), [Ie, He, Fe]),
    { addNotification: Ke, removeNotification: ot } = Or(),
    st = Xn(),
    { storageV5: nt, credentials: Pt } = ge(),
    kt = xt(),
    Ht = ZC(),
    yt = Ts(),
    lt = QC(),
    Rt = W((uo) => uo.toolPermissionContext.mode),
    to = W((uo) => uo.toolPermissionContext.isAutoModeAvailable),
    so = W((uo) => uo.attribution.permissionPromptCount),
    jt = W((uo) => uo.replBridgeConnected && !uo.replBridgeOutboundOnly),
    Gt = W((uo) => uo.replBridgeSessionUrl),
    vo = W((uo) => uo.fastMode),
    qt = W((uo) => uo.advisorModel),
    lo = W((uo) => uo.tasks),
    To = W((uo) => uo.initialMessage),
    ao = Zd().length,
    jo = W((uo) => uo.mainLoopModelForSession ?? uo.mainLoopModel),
    Qo = Kf();
  return z(
    () => ({
      mainLoopModel: S,
      mcpClients: x,
      ideInstallationStatus: P,
      dynamicMcpConfig: j,
      turn: H,
      turnAtRender: Ve,
      transcript: Z,
      requestDialog: re,
      submitPrompt: pe,
      screen: Re,
      disabled: be,
      isRemoteSession: Pe,
      addNotification: Ke,
      removeNotification: ot,
      store: st,
      dialogStore: ue,
      hasOpenDialog: de,
      session: Oe,
      storageV5: nt,
      credentials: Pt,
      clock: kt,
      growthBookVersion: Ht,
      settings: yt,
      claudeAiLimits: lt,
      permissionMode: Rt,
      isAutoModeAvailable: to,
      permissionPromptCount: so,
      replBridgeActive: jt,
      replBridgeSessionUrl: Gt,
      fastMode: vo,
      advisorModel: qt,
      tasks: lo,
      initialMessage: To,
      queuedCommandCount: ao,
      userSpecifiedModel: jo,
      effortValue: Qo,
    }),
    [
      S,
      x,
      P,
      j,
      H,
      Ve,
      Z,
      re,
      pe,
      Re,
      be,
      Pe,
      Ke,
      ot,
      st,
      ue,
      de,
      Oe,
      nt,
      Pt,
      kt,
      Ht,
      yt,
      lt,
      Rt,
      to,
      so,
      jt,
      Gt,
      vo,
      qt,
      lo,
      To,
      ao,
      jo,
      Qo,
    ],
  );
}

function Pat(S) {
  return S.isLoading;
}

function Aat(S) {
  return S.lastQueryCompletionTime;
}

function Mat(S) {
  return S.submitCount;
}

F();

export { A7, PZ, RZ, SZ, XB, bZ, eU, hZ, v7, yZ };
