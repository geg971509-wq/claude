// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { jt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { vj, Sve } from "/$bunfs/root/chunk-f9h0bg01.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { ae } from "/$bunfs/root/chunk-386w1sy8.js";
import { Q3 } from "/$bunfs/root/chunk-1yr12dqr.js";
import { f$, yC, CMe, lf, VI, $Ee, _re, at, eS, Ye, Ot } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { Gr, ba } from "/$bunfs/root/chunk-rgw52f13.js";
import { rn } from "/$bunfs/root/chunk-988p40e0.js";
import { Lo } from "/$bunfs/root/chunk-5c5qq1s7.js";
import { pqe, yD, ng, rg, og, BPe, jPe } from "/$bunfs/root/chunk-zze8764r.js";
import { Kge } from "/$bunfs/root/chunk-edwefext.js";
import { kb } from "/$bunfs/root/chunk-8kwjh4ab.js";
import { CS, ac, BP } from "/$bunfs/root/chunk-ddrmb5hs.js";
import { mt } from "/$bunfs/root/chunk-d5bnjcbw.js";
import { gG } from "/$bunfs/root/chunk-zgfc288e.js";
function GK(t = true, e = false) {
  if (!t) return Q3;
  let o = gG(Lo("theme", "dark").value);
  if (e) return ae.dim(mt("promptBorder", o)(Q3));
  return mt("fastMode", o)(Q3);
}
var vJt = 8000,
  Rse = "Fast mode unchanged (cancelled)";
function kq(t) {
  if (lf(pqe({ ...t, toolPermissionContext: { mode: "default" } }))) return;
  let e = CMe();
  return Ot(e) === Ot(eS()) ? null : e;
}
async function QHt(t, e, o) {
  let m = kq(e());
  if (m === void 0 || ba() || !yD(t)) return { vetted: V2e, messages: [] };
  let a = await CS(t, e, m, "command", { signal: o });
  if (a.decision === "proceed") return { vetted: { target: m }, messages: a.messages };
  return {
    refusal: BP(
      m,
      a.decision === "ask" ? `${a.reason ?? "confirmation required"} (use /model to switch, then /fast)` : a.reason,
      a.messages,
    ),
  };
}
var V2e = { unvetted: true };
function K2e(t, e) {
  let o = e ? "enabled" : "disabled";
  switch (t.kind) {
    case "timeout":
      return `No response from the workspace \u2014 fast mode may still have been ${o} there`;
    case "stale":
      return `Fast mode was not ${o}: the model changed while PreModelSwitch hooks ran; try again`;
    case "refused":
      return `Fast mode was not ${o} on the workspace: ${t.reason}`;
  }
}
function X2e(t, e, o, m = true, a, u = V2e) {
  VI();
  let S = () => {
      if (m) return;
      Sve({ ...(vj() ?? {}), fastMode: e });
    },
    f = () => {
      if ((Kge({ fastMode: e }, o), e))
        o((r) => {
          let i = kq(r);
          if (i === void 0) return r;
          if (!("unvetted" in u) && u.target !== i) return r;
          return ng(t, r, i, "command"), { ...r, mainLoopModel: i, mainLoopModelForSession: null };
        });
    };
  if (ba()) {
    S();
    let r = Gr()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: { fastMode: e ? true : null, ...(e && { model: CMe() }) },
    });
    if (!r) return f(), Promise.resolve(void 0);
    return r.then(
      () => {
        f();
        return;
      },
      (i) => (
        n(`fast mode: workspace did not accept apply_flag_settings: ${l(i)}`, { level: "error" }),
        i instanceof kb ? { kind: "timeout" } : { kind: "refused", reason: ac(l(i)) }
      ),
    );
  }
  if (e && !("unvetted" in u)) {
    let r = false;
    if (
      (o((i) => {
        let d = kq(i);
        return (r = d !== void 0 && d !== u.target), i;
      }),
      r)
    )
      return Promise.resolve({ kind: "stale" });
  }
  if ((S(), m)) rn("userSettings", { fastMode: e ? true : void 0 }, void 0, a);
  return f(), Promise.resolve(void 0);
}
async function Y2e(t, e, o, m, a, u = true, S, f, r, i) {
  let d = await rg(t, async () => {
    if (f) await jt(f(), vJt);
    if (r?.aborted) return { kind: "refused", refusal: Rse };
    let M = f$();
    if (M) return { kind: "refused", refusal: `Fast mode unavailable: ${M}` };
    let F = V2e,
      p = [];
    if (e) {
      let g = await QHt(t, o, r);
      if (r?.aborted) return { kind: "refused", refusal: Rse };
      if (g.refusal !== void 0) return { kind: "refused", refusal: g.refusal };
      (F = g.vetted), (p = g.messages);
    }
    let h = e && kq(o()) !== void 0;
    return i?.(), { kind: "applied", remote: await X2e(t, e, m, u, S, F), willPromote: h, hookMessages: p };
  });
  if (d.kind === "refused") return d.refusal;
  if (d.remote !== void 0) return K2e(d.remote, e);
  if ((s("tengu_fast_mode_toggled", { enabled: e, source: c(a), remote: ba() }), e)) {
    let M = GK(true),
      F = d.willPromote ? `${jPe}${og(yC())}` : "",
      p = at(),
      h = lf(p) ? Ye(p) : "claude-opus-5",
      k = _re($Ee(h)),
      g = u ? "" : " (this session only)",
      w =
        d.hookMessages.length > 0
          ? `
${d.hookMessages.map(ac).join(`
`)}`
          : "";
    return `${M} ${BPe}${F} \xB7 ${k}${g}${w}`;
  } else return `Fast mode OFF${u ? "" : " (this session only)"}`;
}
export { GK, vJt, Rse, kq, QHt, V2e, K2e, X2e, Y2e };
