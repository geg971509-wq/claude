// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { p } from "/$bunfs/root/chunk-ca80fke8.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { oi } from "/$bunfs/root/chunk-492vgtnr.js";
import { BS, Wv, FF, CTe, FOe, Ik, pH, Pk, qz, n3, sl, qX, Mm, ST } from "/$bunfs/root/chunk-83h0j7w2.js";
import { S9t } from "/$bunfs/root/chunk-hz299nfa.js";
function hW(e, r) {
  let o = ST(e, r);
  return typeof o === "string" ? o : null;
}
function Kot(e, { model: r, getAppState: o, setAppState: E, storageV5: v }) {
  if (!S9t())
    return (
      p("bridge_flag_settings", "disabled"),
      { ok: false, error: "apply_flag_settings: effort changes over Remote Control are turned off" }
    );
  let s,
    i = false;
  if ("effortLevel" in e) {
    if (((i = true), e.effortLevel != null)) {
      let t = Ik(e.effortLevel) ?? FOe(e.effortLevel);
      if (typeof t !== "string" || !Wv(t))
        return (
          p("bridge_flag_settings", "invalid_effort_level"),
          { ok: false, error: "apply_flag_settings: unrecognized effortLevel" }
        );
      s = FF(t, r);
    }
    let l = pH();
    if (l !== void 0 && s !== l)
      return (
        p("bridge_flag_settings", "env_override"),
        { ok: false, error: "apply_flag_settings: CLAUDE_CODE_EFFORT_LEVEL overrides effort for this session" }
      );
  }
  let a = CTe(e.effortLevel) === "ultracode",
    f = "ultracode" in e ? e.ultracode === true : void 0;
  if ((f === true || (f === void 0 && a)) && !BS(r))
    return (
      p("bridge_flag_settings", "ultracode_unavailable"),
      {
        ok: false,
        error:
          "apply_flag_settings: ultracode is not available for this session (dynamic workflows are off, or the model / your organization does not allow xhigh effort)",
      }
    );
  if (i || f === true) Mm(v);
  E((l) => {
    let t = l;
    if (i) {
      let u = qz(s);
      if (!n3(t.sessionEffort, u)) t = { ...t, sessionEffort: u };
    }
    if (f === void 0) {
      if (a) {
        if (!t.ultracode) t = { ...t, ultracode: true };
      } else if (i && t.ultracode) t = { ...t, ultracode: false };
    } else if (f) {
      if (!t.ultracode || sl(t) !== "xhigh") t = { ...t, ultracode: true, sessionEffort: Pk("xhigh") };
    } else if (t.ultracode) t = { ...t, ultracode: false };
    return t;
  });
  let d = o();
  return (
    n(`[bridge] apply_flag_settings applied effort=${sl(d) ?? "auto"} ultracode=${d.ultracode === true}`), { ok: true }
  );
}
function g(e) {
  let r = c();
  if (!r || !S9t()) return;
  let o = oi();
  if (((o.lastKnownEffort = e), o.lastReportedEffort === e)) return;
  (o.lastReportedEffort = e), r.reportMetadata({ effort_level: e });
}
function k1(e, r) {
  if (!c()) return;
  let o = qX(r);
  g(o === void 0 ? null : hW(e, o));
}
function c() {
  let e = oi(),
    r = e.replHandle ?? e.sdkHostedHandle;
  return r && !r.outboundOnly ? r : null;
}
function gUn() {
  let e = oi();
  if (((e.lastReportedEffort = void 0), e.lastKnownEffort !== void 0)) g(e.lastKnownEffort);
}
export { hW, Kot, k1, gUn };
