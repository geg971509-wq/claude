// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Cu, j5 } from "/$bunfs/root/chunk-f9h0bg01.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Gt, kd, hme, _me } from "/$bunfs/root/chunk-vfy57cpd.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { ae } from "/$bunfs/root/chunk-386w1sy8.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { ye, aA, rn } from "/$bunfs/root/chunk-988p40e0.js";
import { jH } from "/$bunfs/root/chunk-0spqrdaj.js";
import {
  Ac,
  fc,
  Yr,
  lf,
  dw,
  pw,
  VI,
  MSn,
  EH,
  AH,
  qEe,
  kr,
  CH,
  sO,
  KI,
  uf,
  T6,
  wl,
  oR,
  E_,
  yY,
  eS,
  el,
  Ye,
  j8e,
  YS,
  aO,
  VEe,
  Ot,
  Cc,
  A_,
  Tt,
} from "/$bunfs/root/chunk-8tgj5dp2.js";
import { fN, jm, hr, mN, Ql, L$, ra } from "/$bunfs/root/chunk-82w4mtvq.js";
import { Lte, uM, dz, qce, q5n, tpn } from "/$bunfs/root/chunk-eb5y4yrx.js";
import { Hs, Gan, Bo, Yee, i2, dqe, pqe, Rv, ipt, ng, og, dte, YUt, Pv } from "/$bunfs/root/chunk-zze8764r.js";
import { BS, ETe, sl } from "/$bunfs/root/chunk-83h0j7w2.js";
import { ewe, pmt } from "/$bunfs/root/chunk-308krgtb.js";
import { zK } from "/$bunfs/root/chunk-0b318m6z.js";
function b(e, t, n) {
  if (!Tt()) return !1;
  let o = e !== null ? Ot(e) : el(),
    i = o.toLowerCase(),
    r = i.includes("opus") || i.includes("fable"),
    s = i.includes("opus-4-6"),
    c = i.includes("sonnet-4-6");
  if (t && lf(e)) return !0;
  if ((i.includes("fable") || KI(o)) && !uM() && (Lte() || dz())) return !0;
  if (!Cc(i)) return !1;
  if (r && n) return !1;
  return s || c;
}
function GQ(e, t, n, o) {
  let i = Yr(),
    r = i && t && (!e || o?.announceKeptOn === !0),
    s = i && !!e && !t;
  return (
    (r ? " \xB7 Fast mode ON" : "") +
    (b(n, t, YS()) ? " \xB7 Draws from usage credits" : "") +
    (s ? " \xB7 Fast mode OFF" : "")
  );
}
function e1n(e, t, n) {
  if (!!e === t) return null;
  return t ? `Fast mode ON${b(n, !0, YS()) ? " \xB7 Draws from usage credits" : ""}` : "Fast mode OFF";
}
function k() {
  return Ac().providerCache.validatedModels;
}
async function J2e(e, t) {
  let n = e.trim();
  if (!n) return { valid: !1, error: "Model name cannot be empty" };
  if (!kr(n, t.skipEntitlementDenyOverlay ? { skipEntitlementDenyOverlay: !0 } : void 0))
    return { valid: !1, error: `Model '${n}' is not in the list of available models` };
  if (!t.forceServerProbe) {
    let o = n.toLowerCase();
    if (fN.includes(o)) return { valid: !0 };
    if (n === a.ANTHROPIC_CUSTOM_MODEL_OPTION) return { valid: !0 };
    if (tpn(n) && VEe()?.picker.options.some((i) => i.model.trim() === n)) return { valid: !0 };
    if (k().has(n)) return { valid: !0 };
  }
  try {
    return (
      await Pv({
        model: n,
        max_tokens: 1,
        maxRetries: 0,
        querySource: "model_validation",
        credentials: t.credentials,
        messages: [{ role: "user", content: [{ type: "text", text: "Hi", cache_control: { type: "ephemeral" } }] }],
      }),
      k().add(n),
      { valid: !0 }
    );
  } catch (o) {
    return _(o, n);
  }
}
function _(e, t) {
  if (e instanceof _me) {
    let o = x(t),
      i = o ? `. Try '${o}' instead` : "";
    return { valid: !1, error: `Model '${t}' not found${i}`, notFound: !0 };
  }
  if (e instanceof Gt) {
    if (e instanceof hme) return { valid: !1, error: "Authentication failed. Please check your API credentials." };
    if (e instanceof kd) return { valid: !1, error: "Network error. Please check your internet connection." };
    let o = e.error;
    if (
      o &&
      typeof o === "object" &&
      "type" in o &&
      o.type === "not_found_error" &&
      "message" in o &&
      typeof o.message === "string" &&
      o.message.includes("model:")
    )
      return { valid: !1, error: `Model '${t}' not found`, notFound: !0 };
    return { valid: !1, error: `API error: ${e.message}` };
  }
  return { valid: !1, error: `Unable to validate model: ${e instanceof Error ? e.message : String(e)}` };
}
var w = ["fable", "opus", "sonnet"];
function O(e, t) {
  let n = e.split("-").map(Number),
    o = t.split("-").map(Number);
  for (let i = 0; i < Math.max(n.length, o.length); i++) {
    let r = (o[i] ?? -1) - (n[i] ?? -1);
    if (r !== 0) return r;
  }
  return 0;
}
function C() {
  return mN()
    .models.filter((e) => e.fallback_3p !== void 0)
    .sort((e, t) => {
      let n = (i) => {
          let r = w.indexOf(i);
          return r === -1 ? w.length : r;
        },
        o = (i, r) =>
          i
            .replace(/^claude-/, "")
            .replace(r, "")
            .replace(/^-|-$/g, "");
      return (
        n(e.family) - n(t.family) ||
        (e.family < t.family ? -1 : e.family > t.family ? 1 : 0) ||
        O(o(e.id, e.family), o(t.id, t.family))
      );
    })
    .map((e) => {
      let t = e.id.replace(/^claude-/, "");
      return { needle: t, needleUnderscore: t.replace(/-/g, "_"), fallbackId: e.fallback_3p, family: e.family };
    });
}
function F(e) {
  let t = Ql(e)?.provider_ids.first_party,
    n = t !== void 0 ? L$[t] : void 0;
  return n !== void 0 ? fc()[n] : void 0;
}
function x(e) {
  if (ra()) return;
  let t = e.toLowerCase(),
    n = C().find((o) => t.includes(o.needle) || t.includes(o.needleUnderscore));
  if (n === void 0) return;
  if (n.family === "fable") return a.ANTHROPIC_DEFAULT_OPUS_MODEL ?? F(n.fallbackId);
  return F(n.fallbackId);
}
async function E(e, t) {
  let { saveGlobalConfig: n } = await import("/$bunfs/root/chunk-rx63xaph.js");
  await n((o) => {
    let i = o.modelAccessCache;
    if (!i?.length) return o;
    let r = i.filter((s) => {
      if (s == null || typeof s !== "object" || typeof s.apiName !== "string" || typeof s.entitled !== "boolean")
        return !0;
      return s.entitled || !EH(e, MSn([s]));
    });
    return r.length === i.length ? o : { ...o, modelAccessCache: r };
  }, t);
}
async function Xge(e, t, n) {
  let o = e === "default" ? null : e,
    i;
  if (o && EH(o, AH())) {
    let r = E_(o);
    if (r === null) {
      if (!kr(o, { skipEntitlementDenyOverlay: !0 }))
        return (
          p("model_switch", "denied_by_entitlement"),
          {
            ok: !1,
            message: `Model '${o}' is restricted by your organization's settings. Run /model to choose a different model.`,
          }
        );
      let s = await J2e(h(o) ? Ot(o) : o, { forceServerProbe: !0, skipEntitlementDenyOverlay: !0, credentials: n });
      if (!s.valid)
        return (
          p("model_switch", s.notFound ? "denied_by_entitlement" : "entitlement_probe_failed"),
          {
            ok: !1,
            message: `Model '${o}' is restricted by your organization's settings. Run /model to choose a different model.`,
          }
        );
      await E(o, t), zK(t, n);
    } else (i = o), (o = r);
  } else if (o && !kr(o)) {
    let r = E_(o);
    if (r === null)
      return (
        p("model_switch", "not_allowed"),
        { ok: !1, message: `Model '${o}' is not available. Your organization restricts model selection.` }
      );
    (i = o), (o = r);
  }
  if (o && kJt(o))
    return (
      p("model_switch", "opus_1m_unavailable"),
      {
        ok: !1,
        message:
          "Opus with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
      }
    );
  if (o && HJt(o))
    return (
      p("model_switch", "sonnet_1m_unavailable"),
      {
        ok: !1,
        message:
          "Sonnet with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
      }
    );
  if (o) {
    let r = T6(o);
    if (r)
      switch (r.reason) {
        case "disabled":
          return (
            p("model_switch", "disabled_by_org"),
            {
              ok: !1,
              message: `Model '${o}' is not currently available for your account${r.description ? `. ${r.description}` : "."}`,
            }
          );
        case "absent": {
          let s = await J2e(h(o) ? Ot(o) : o, { forceServerProbe: !0, credentials: n });
          if (!s.valid)
            return (
              p("model_switch", s.notFound ? "fable_unavailable" : "fable_probe_failed"),
              {
                ok: !1,
                message: s.notFound
                  ? `${r.displayName} isn't available for your account yet. Run /model to pick another model.`
                  : s.error,
              }
            );
          return zK(t, n), { ok: !0, model: o, ...(i !== void 0 && { substitutedFrom: i }) };
        }
      }
  }
  if (!o || h(o)) return { ok: !0, model: o };
  try {
    let r = await J2e(o, { credentials: n });
    if (!r.valid) return p("model_switch", "invalid_model"), { ok: !1, message: r.error };
    return { ok: !0, model: o, ...(i !== void 0 && { substitutedFrom: i }) };
  } catch (r) {
    return p("model_switch", "validate_exception"), { ok: !1, message: `Failed to validate model: ${l(r)}` };
  }
}
async function CS(e, t, n, o, i = {}) {
  let r = t(),
    s = Rv(r),
    c = P(r, n);
  if (c.length === 0) return { decision: "proceed", skipConfirm: !1, messages: [] };
  let d = [],
    f,
    u = !1,
    m = !0;
  for (let S of c) {
    let M = await ipt(e, { ...S, requestedModel: n, source: o }, { signal: i.signal });
    if ((d.push(...M.messages), M.decision === "block")) return { decision: "block", reason: M.reason, messages: d };
    if (M.decision === "ask") (u = !0), (f ??= M.reason);
    else m = m && M.skipConfirm;
  }
  if (Rv(t()) !== s) {
    if (i.revalidating)
      return {
        decision: "block",
        reason: "the session model changed while a PreModelSwitch hook was running; pick again",
        messages: d,
      };
    let S = await CS(e, t, n, o, { ...i, revalidating: !0 });
    return { ...S, messages: [...d, ...S.messages] };
  }
  return u ? { decision: "ask", reason: f, messages: d } : { decision: "proceed", skipConfirm: m, messages: d };
}
function P(e, t) {
  let n = pqe(e),
    o = e.toolPermissionContext.mode,
    i = [o, o === "plan" ? "default" : "plan"],
    r = new Set(),
    s = [];
  for (let c of i) {
    let d = dqe(n, c),
      f = dqe(t, c),
      u = `${d}\x00${f}`;
    if (d !== f && !r.has(u)) r.add(u), s.push({ fromModel: d, toModel: f });
  }
  return s;
}
function Yge(e) {
  return [
    `Model switch blocked by a PreModelSwitch hook${e.reason !== void 0 ? `: ${ac(e.reason)}` : e.decision === "ask" ? ": confirmation required, and this session cannot ask" : ""}`,
    ...e.messages.map(ac),
  ].join(`
`);
}
function ac(e) {
  return Bo(Hs(Gan(e.trimEnd())));
}
function BP(e, t, n) {
  return [`Model switch to ${xm(e)} was blocked by a PreModelSwitch hook${t ? `: ${ac(t)}` : ""}`, ...n.map(ac)].join(`
`);
}
function Q2e(e, t, n, o, i, r, s, c) {
  let d = n().fastMode;
  if ((j5(), ng(e, n(), t, r), o((m) => ({ ...m, mainLoopModel: t, mainLoopModelForSession: null })), i)) Z2e(t, c);
  if (s !== void 0) g("model_switch", "family_alias_stepped_down");
  else y("model_switch");
  let f = `${dte}${og(xm(t))}${i ? " and saved as your default for new sessions" : " for this session only"}`,
    u = Yr() ? dw(t, d) : !!d;
  if (Yr()) {
    if ((VI(), u !== !!d)) o((m) => ({ ...m, fastMode: u })), pw(d, u);
  }
  return (f += GQ(d, u, t, { announceKeptOn: !0 })), (f += RJt(t)), f;
}
function Z2e(e, t) {
  rn("userSettings", { model: e ?? void 0 }, void 0, t), y("model_set_default");
}
function RJt(e) {
  let t = aA("model");
  if (t !== "projectSettings" && t !== "localSettings" && t !== "policySettings") {
    let i = qEe(),
      r = yY();
    if (i?.override_user_selection && r !== null && e !== null && t !== "flagSettings" && !a.ANTHROPIC_MODEL) {
      let s = Ot(e),
        c = Ye(r),
        d = Ye(s),
        f = /\[1m\]$/i.test(s) !== /\[1m\]$/i.test(r);
      if (oR(e) || d !== c || f) return v("Your organization's default (", aO(r), ") applies on restart");
    }
    return "";
  }
  if (t !== "policySettings") {
    let i = qEe(),
      r = yY();
    if (i?.override_user_selection && r !== null && !a.ANTHROPIC_MODEL) {
      if (e === null) return "";
      let s = Ot(e),
        c = Ye(r),
        d = Ye(s),
        f = /\[1m\]$/i.test(s) !== /\[1m\]$/i.test(r);
      if (oR(e) || d !== c || f) return v("Your organization's default (", aO(r), ") applies on restart");
      return "";
    }
  }
  let n = ye(t)?.model;
  if (n === void 0 || e === n) return "";
  let o = t === "policySettings" ? "Managed settings" : jH(t);
  return v(`${o} pins `, aO(n), " \u2014 that applies on restart");
}
function v(e, t, n) {
  return `${ae.dim(`
     ${e}`)}${og(t)}${ae.dim(n)}`;
}
function h(e) {
  let t = e.toLowerCase().trim();
  return jm(t);
}
function kJt(e) {
  let t = e.toLowerCase();
  if (!(t.includes("opus") && t.includes("[1m]"))) return !1;
  if ((t.includes("opusplan") ? [wl(), Ot(e)] : [Ot(e)]).every((o) => A_(o))) return !1;
  return !CH() && !YS();
}
function HJt(e) {
  let t = e.toLowerCase();
  if (!(t.includes("sonnet[1m]") || t.includes("sonnet-4-6[1m]") || t.includes("sonnet-5[1m]"))) return !1;
  if (A_(Ot(e))) return !1;
  return !sO();
}
function xm(e) {
  let t = j8e(e ?? eS());
  return e === null ? `${t} (default)` : t;
}
function sW(e) {
  return Ot(e ?? eS());
}
function ZHt(e, t, n, o, i) {
  if (!i) return !1;
  let r = Cu();
  if (r === 0 || r === o) return !1;
  return hr(sW(e)) !== hr(sW(i2({ mainLoopModel: t, mainLoopModelForSession: n })));
}
function e6e(e) {
  let t = og(xm(e.mainLoopModel)),
    n = sl(e),
    o = n !== void 0 ? ` (effort: ${n})` : "",
    i = Yee(e.mainLoopModelForSession, e.mainLoopModel);
  if (i !== null)
    return `${YUt}${og(xm(i))} (this session only)${o}
Base model: ${t}`;
  let r = "";
  {
    let s = ewe();
    if (s !== void 0) r = ` (${pmt(og(xm(s.previousModel)))})`;
  }
  return `${YUt}${t}${r}${o}`;
}
function ext(e) {
  let t = e ?? eS();
  if (!uf(Ot(t))) return !1;
  return q5n();
}
function aW(e) {
  if (e === null) return !1;
  return uf(Ot(e)) && qce();
}
function Jge(e, t) {
  if (t === void 0) return;
  if (t !== "ultracode") return { level: t, fromUltracode: !1, ultracode: !1 };
  return BS(sW(e))
    ? { level: "xhigh", fromUltracode: !0, ultracode: !0 }
    : { level: ETe(sW(e)), fromUltracode: !0, ultracode: !1 };
}
export { GQ, e1n, J2e, Xge, CS, Yge, ac, BP, Q2e, Z2e, RJt, kJt, HJt, xm, sW, ZHt, e6e, ext, aW, Jge };
