// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import {
  ver,
  qEe,
  kr,
  KI,
  E_,
  yY,
  GSn,
  el,
  Ye,
  Ot,
  JI,
  bY,
  Vn,
  wt,
  A7e,
  Obt,
  Dre,
  Um,
  I,
  Ae,
  ie,
  kwn,
} from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Cu, bQe, ome, UCt } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Me } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { Gr, ba } from "/$bunfs/root/chunk-rgw52f13.js";
import { ior, ye, Je, aA, rn, lA } from "/$bunfs/root/chunk-988p40e0.js";
import { xi, _o } from "/$bunfs/root/chunk-0spqrdaj.js";
import { bm, Lf, Tw } from "/$bunfs/root/chunk-1yr12dqr.js";
import { gN } from "/$bunfs/root/chunk-amem41jf.js";
import { pn, Ql, hh, Ne, za, s0 } from "/$bunfs/root/chunk-82w4mtvq.js";
import { Zu } from "/$bunfs/root/chunk-dd55s64p.js";
var $h = ["low", "medium", "high", "xhigh", "max"],
  Ejt = "Fable 5, Opus 4.7+, Sonnet 5",
  EYn = "Fable 5, Opus 4.6+, Sonnet 4.6+",
  kne =
    "May use excessive tokens resulting in long response times or overthinking. Use sparingly for the hardest tasks.";
function lg(e) {
  if (UCt(e)) return !1;
  let o = bY(e, "effort");
  if (o !== void 0) return o;
  let t = Ye(e);
  if (
    t.includes("claude-3-") ||
    t === "claude-opus-4-0" ||
    t === "claude-opus-4-1" ||
    t === "claude-sonnet-4-0" ||
    t === "claude-sonnet-4-5" ||
    t === "claude-haiku-4-5"
  )
    return !1;
  if (a.CLAUDE_CODE_ALWAYS_ENABLE_EFFORT) return !0;
  if (hh(t, "effort") || t === "claude-mythos-5") return !0;
  return s0(za(e));
}
function V2(e) {
  if (UCt(e)) return !1;
  let o = bY(e, "max_effort");
  if (o !== void 0) return o;
  let t = Ye(e);
  if (
    t.includes("claude-3-") ||
    t === "claude-opus-4-0" ||
    t === "claude-opus-4-1" ||
    t === "claude-opus-4-5" ||
    t === "claude-sonnet-4-0" ||
    t === "claude-sonnet-4-5" ||
    t === "claude-haiku-4-5"
  )
    return !1;
  if (hh(t, "max_effort") || t === "claude-mythos-5") return !0;
  return s0(za(e));
}
function K2(e) {
  if (UCt(e)) return !1;
  let o = bY(e, "xhigh_effort");
  if (o !== void 0) return o;
  let t = Ye(e);
  if (
    t.includes("claude-3-") ||
    t === "claude-opus-4-0" ||
    t === "claude-opus-4-1" ||
    t === "claude-opus-4-5" ||
    t === "claude-opus-4-6" ||
    t === "claude-sonnet-4-0" ||
    t === "claude-sonnet-4-5" ||
    t === "claude-sonnet-4-6" ||
    t === "claude-haiku-4-5"
  )
    return !1;
  if (hh(t, "xhigh_effort") || t === "claude-mythos-5") return !0;
  return s0(za(e));
}
function BS(e) {
  return Zu() && (e === void 0 || (K2(e) && Fue("xhigh", e)));
}
function ETe(e) {
  return FF(V2(e) && Fue("max", e) ? "max" : "high", e);
}
function jv(e, o, t) {
  return t === !0 && Zu() && ST(e, o) === "xhigh";
}
function Wv(e) {
  return $h.includes(e);
}
function y(e) {
  return $h.indexOf(e);
}
var Jht = "high";
function AYn(e) {
  return Wv(e) && y(e) > y(Jht);
}
function CYn(e) {
  let o = Ye(e);
  return o === "claude-opus-5" || hh(o, "thinking_disabled_effort_cap") === !0;
}
function w5e(e) {
  let o = Ne();
  if (o !== "firstParty" && o !== "gateway") return null;
  let t = Ye(JI(e.trim().toLowerCase())),
    r = A7e().find((u) => Ye(JI(u.apiName.trim().toLowerCase())) === t)?.maxEffortLevel;
  return r != null && Wv(r) ? r : null;
}
function ATe(e) {
  if (Ne() !== "firstParty") return null;
  let o = Obt();
  if (o === null) return null;
  let t = o.default_effort_level;
  if (t == null || !Wv(t)) return null;
  let r = Ye(JI(e.trim().toLowerCase()));
  return Ye(JI(o.name.trim().toLowerCase())) === r ? t : null;
}
function Fue(e, o) {
  let t = w5e(o);
  return t === null || y(e) <= y(t);
}
function jz(e) {
  return $h.filter((o) => Fue(o, e));
}
function FF(e, o) {
  let t = w5e(o);
  return t !== null && y(e) > y(t) ? t : e;
}
function j(e, o) {
  if (o === "xhigh") return K2(e);
  if (o === "max") return V2(e);
  return !0;
}
function vYn(e) {
  let o = w5e(e);
  return o !== null && $h.some((t) => y(t) > y(o) && j(e, t));
}
function RYn(e, o) {
  if (typeof e !== "string" || !Wv(e)) return null;
  let t = w5e(o);
  if (t === null || y(e) <= y(t)) return null;
  let r = ST(o, e) ?? t;
  return `Effort '${e}' exceeds your organization's limit for ${o}; using '${r}'.`;
}
var O = { med: "medium" },
  T = { ultracode: "xhigh" };
function CTe(e) {
  if (typeof e !== "string") return;
  let o = e.trim().toLowerCase();
  return Object.hasOwn(T, o) ? o : void 0;
}
function FOe(e) {
  let o = CTe(e);
  return o === void 0 ? void 0 : T[o];
}
function PM(e) {
  return String(e);
}
function $Oe(e) {
  let o = e.trim().toLowerCase(),
    t = O[o] ?? o;
  return Wv(t) ? t : void 0;
}
function Qht(e) {
  let o = $Oe(e);
  if (o !== void 0) return { level: o, warning: void 0 };
  let t = CTe(e);
  if (t !== void 0) return { level: t, warning: void 0 };
  return {
    level: void 0,
    warning: `Unknown --effort value '${e}' \u2014 ignoring it and using the default effort. Valid values: ${$h.join(", ")}.`,
  };
}
function Ik(e) {
  if (e === void 0 || e === null || e === "") return;
  if (typeof e === "number" && k(e)) return e;
  let o = String(e).toLowerCase(),
    t = O[o] ?? o;
  if (Wv(t)) return t;
  let r = parseInt(o, 10);
  if (!isNaN(r) && k(r)) return r;
  return;
}
function Wz(e) {
  if (e === "low" || e === "medium" || e === "high" || e === "xhigh") return e;
  return;
}
function Ajt(e, o) {
  let t = Je().ultracode === !0 || CTe(e) === "ultracode";
  if (t) Mm(o);
  return t;
}
function pH() {
  let e = a.CLAUDE_CODE_EFFORT_LEVEL;
  return e?.toLowerCase() === "unset" || e?.toLowerCase() === "auto" ? null : Ik(e);
}
function DM(e) {
  let o = Ye(e);
  if (o.includes("opus-4-7")) return !ie().unpinOpus47LaunchEffort;
  if (o.includes("opus-4-8")) return !ie().unpinOpus48LaunchEffort;
  if (o.includes("fable-5") || KI(e)) return !ie().unpinFable5LaunchEffort;
  return !1;
}
function xgn() {
  let e = ie();
  return Boolean(e.unpinOpus47LaunchEffort && e.unpinOpus48LaunchEffort && e.unpinFable5LaunchEffort);
}
var F = Object.freeze({ kind: "inherit" }),
  H = Object.freeze({ kind: "default" });
function Pk(e) {
  return { kind: "level", value: e };
}
function qz(e) {
  return e === void 0 ? H : Pk(e);
}
function Y(e) {
  return e === void 0 ? F : Pk(e);
}
function n3(e, o) {
  return e === o || (e.kind === o.kind && (e.kind !== "level" || (o.kind === "level" && e.value === o.value)));
}
function J() {
  let e = Je(),
    o = D({ cli: { effort: void 0 }, env: process.env, settings: e });
  if (e.ultracode === !0) return { default: o, byModel: {} };
  let t = xi()
      .map((i) => ye(i))
      .filter((i) => i !== void 0 && i !== null)
      .reverse(),
    r = t.map((i) => {
      let d = new Map();
      for (let [p, E] of Object.entries(i.modelSettings ?? {})) {
        let m = E?.effortLevel;
        if (m === void 0) continue;
        let g = T5e(p);
        if (p === g || !d.has(g)) d.set(g, m);
      }
      return d;
    }),
    u = new Set();
  for (let i of r) for (let d of i.keys()) u.add(d);
  let f = {};
  for (let i of u)
    for (let d = 0; d < t.length; d++) {
      let p = r[d].get(i);
      if (p !== void 0) {
        f[i] = Wz(p);
        break;
      }
      if (t[d].effortLevel !== void 0) {
        f[i] = Wz(t[d].effortLevel);
        break;
      }
    }
  return { default: o, byModel: f };
}
function G(e, o) {
  if (o === void 0 || o === null) return e.default;
  let t = T5e(o);
  return Object.hasOwn(e.byModel, t) ? e.byModel[t] : e.default;
}
function W(e) {
  for (let o in e.byModel) return !0;
  return !1;
}
function T5e(e) {
  return pn(Ye(Ot(e), { deterministic: !0 }));
}
function K(e, o) {
  let t = T5e(e);
  return Object.hasOwn(Object.prototype, t) ? { effortLevel: o } : { modelSettings: { [t]: { effortLevel: o } } };
}
function sl(e, o) {
  let t = e.sessionEffort ?? F;
  switch (t.kind) {
    case "level":
      return t.value;
    case "default":
      return;
    case "inherit":
      if (e.settingsEffortTable === void 0) return;
      if (!W(e.settingsEffortTable)) return e.settingsEffortTable.default;
      return G(e.settingsEffortTable, o ?? e.mainLoopModelForSession ?? e.mainLoopModel ?? el());
  }
}
function qX(e) {
  return e.kind === "level" && typeof e.value === "string" && xgn() ? e.value : void 0;
}
function Mm(e) {
  Ae(
    (o) =>
      o.unpinOpus47LaunchEffort && o.unpinOpus48LaunchEffort && o.unpinFable5LaunchEffort
        ? o
        : { ...o, unpinOpus47LaunchEffort: !0, unpinOpus48LaunchEffort: !0, unpinFable5LaunchEffort: !0 },
    e,
  );
}
function ST(e, o, { honorLaunchPin: t = !0 } = {}) {
  if (!lg(e)) return;
  let r = t && DM(e),
    u = C(e),
    f = pH();
  if (f === null && !r) return;
  return _(f ?? (r ? u : void 0) ?? o ?? u, e);
}
function kYn(e, o) {
  if (!lg(e) || pH() !== void 0) return;
  let t = DM(e);
  if (typeof o === "string" && !t) return o;
  if ((o === void 0 || t) && ATe(e)) return VD(e);
  return;
}
function _(e, o) {
  let t = e;
  if (typeof t === "string" && Wv(t)) t = FF(t, o);
  if (t === "max" && !V2(o)) t = "high";
  if (t === "xhigh" && !K2(o)) t = "high";
  return t;
}
function VD(e) {
  return $F(_(C(e), e));
}
function $ue(e, o, t, r, u) {
  if (!u) return !1;
  let f = Cu();
  if (f === 0 || f === r) return !1;
  if (!lg(t)) return !1;
  if (typeof ST(t, e) !== "number" && typeof ST(t, o) !== "number" && ver(t, Ye(t))) return !1;
  if (DM(t)) {
    if (e === void 0 || _(e, t) === _(C(t), t)) return !1;
  } else if (ST(t, e) === ST(t, o)) return !1;
  if (ba() && e !== void 0 && Wz(typeof e === "string" ? FF(e, t) : e) === void 0) return !1;
  return !0;
}
async function Cjt(e, o, t) {
  return rn("userSettings", K(o, e), void 0, t);
}
async function Gz(e, o, t = !0, r) {
  let u = e !== void 0 ? Wz(e) : void 0;
  if (t && (e === void 0 || u !== void 0) && !Gr()) {
    let f = await Cjt(u, o, r);
    if (f.error) return f.error;
  }
  if (t) Mm(r);
  return;
}
function UOe(e, o) {
  let t = P(e);
  if (t !== void 0) Mm(o);
  let r = { sessionEffort: Y(t), settingsEffortTable: J() };
  return bQe(r), r;
}
function ew(e, o) {
  let t = ST(e, o) ?? "high";
  return $F(t);
}
function Gy(e, o) {
  return lg(e) ? ew(e, o) : void 0;
}
function E5e(e, o) {
  if (o === void 0) return "";
  let t = ST(e, o);
  if (t === void 0) return "";
  return ` with ${PM($F(t))} effort`;
}
function k(e) {
  return Number.isInteger(e);
}
function $F(e) {
  if (typeof e === "string") return Wv(e) ? e : "high";
  return "high";
}
function z(e) {
  switch (e) {
    case "low":
      return "Quick, straightforward implementation with minimal overhead";
    case "medium":
      return "Balanced approach with standard implementation and testing";
    case "high":
      return "Comprehensive implementation with extensive testing and documentation";
    case "xhigh":
      return `Deeper reasoning than high, just below maximum (${Ejt})`;
    case "max":
      return `Maximum capability with deepest reasoning. ${kne}`;
  }
}
function Ign(e) {
  if (typeof e === "string") {
    let o = z(e);
    if (e === "high" && Dre() && I("tengu_slate_finch", !1))
      return `${o} \xB7 burns fastest \u2014 medium handles most tasks`;
    return o;
  }
  return "Balanced approach with standard implementation and testing";
}
function C(e) {
  return ATe(e) ?? X(e);
}
function X(e) {
  return Ql(Ye(e))?.default_effort ?? "high";
}
function P(e) {
  return Ik(e) ?? FOe(e);
}
function D(e) {
  let o = P(e.cli.effort);
  if (o !== void 0) return o;
  if (e.settings.ultracode === !0) return "xhigh";
  return Wz(e.settings.effortLevel);
}
function B() {
  let { value: e, source: o } = Um("tengu_auto_mode_config", {});
  if (e?.enabled !== "disabled") return !1;
  return o === "override" || o === "payload";
}
function Hgn(e) {
  let { cli: o, env: t, settings: r, agentFrontmatter: u } = e,
    f = bm(o.permissionMode),
    i = o.dangerouslySkipPermissions,
    d = u?.permissionMode,
    p = Boolean(i || f || d);
  if (Me(t.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
    let l = i || (f && f !== "default") || (d && d !== "default"),
      b =
        "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " +
        "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    return {
      mode: "default",
      notification: l ? b : void 0,
      fromAutoFallback: !1,
      baselineMode: "default",
      decidedByProactivityLevel: !1,
      modeSuppliedOnInvocation: !0,
    };
  }
  let E = r.permissions?.disableBypassPermissionsMode === "disable",
    m = B(),
    g = !m && !N(r),
    c = [],
    S;
  if (i)
    if (V("bypassPermissions")) (S = R), c.push("default");
    else c.push("bypassPermissions");
  if (f) {
    let l = Tw(f);
    if (V(l)) (S = R), c.push("default");
    else if (l === "auto" && m)
      n("auto mode killswitch active (override- or payload-served) \u2014 falling back to default", { level: "warn" });
    else c.push(l);
  }
  if (d)
    if (d === "auto" && m)
      n("agent frontmatter requested auto mode but circuit breaker active \u2014 falling through", { level: "warn" });
    else c.push(d);
  if (gN()) {
    let l = !Kht()
      ? void 0
      : w()
          .map((b) => bm(ye(b)?.permissions?.defaultMode))
          .find((b) => b != null);
    if (l != null && Me(t.CLAUDE_CODE_REMOTE) && !x(l)) {
      if (
        (n(
          `settings defaultMode "${l}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`,
          { level: "warn" },
        ),
        c.length === 0)
      )
        s("tengu_ccr_unsupported_default_mode_ignored", { mode_hash: Vn(l) }), c.push("default");
    } else if (l === "bypassPermissions") {
      if (i || o.allowDangerouslySkipPermissions) c.push(l);
      else if (c.length === 0)
        (S =
          'Permission mode bypassPermissions from settings was ignored \u2014 enable the "Claude Code: Allow Dangerously Skip Permissions" setting in VS Code to consent to it'),
          n(
            'settings defaultMode "bypassPermissions" ignored for a VS Code-owned session without the allow-bypass setting',
            { level: "warn" },
          ),
          s("tengu_settings_bypass_unconsented_noninteractive_ignored", {}),
          process.stderr.write(`\u26A0 ${S}
`),
          c.push("default");
    } else if (l === "auto")
      if (!m) c.push(l);
      else
        n('settings defaultMode "auto" ignored for the IDE session \u2014 auto-mode circuit breaker is active', {
          level: "warn",
        });
    else if (l != null) c.push(l);
  } else if (r.permissions?.defaultMode) {
    let l = bm(r.permissions.defaultMode);
    if (Me(t.CLAUDE_CODE_REMOTE) && !x(l))
      n(
        `settings defaultMode "${l}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`,
        { level: "warn" },
      ),
        s("tengu_ccr_unsupported_default_mode_ignored", { mode_hash: Vn(l) });
    else if (l !== "auto") c.push(l);
    else if (!U())
      n(
        'settings defaultMode "auto" ignored \u2014 only policy/user/flag settings may grant auto mode (projectSettings and localSettings are repo-controllable)',
        { level: "warn" },
      ),
        s("tengu_settings_auto_mode_untrusted_source_ignored", {});
    else if (m)
      n("auto mode killswitch active (override- or payload-served) \u2014 falling back to default", { level: "warn" });
    else c.push("auto");
  }
  let v;
  for (let l of c) {
    if (l === "bypassPermissions" && E) {
      n("bypassPermissions mode is disabled by settings", { level: "warn" }),
        (S = "Bypass permissions mode was disabled by settings");
      continue;
    }
    v = { mode: l, notification: S };
    break;
  }
  let L = !1;
  if (!v) {
    let l = "default";
    if (g && Kht() && (!o.isNonInteractiveSession || gN() || I("tengu_moss_anchor", !1))) (l = "auto"), (L = !0);
    v = { mode: l, notification: S };
  }
  let M = v.mode,
    h = !1;
  return {
    mode: v.mode,
    notification: v.notification,
    fromAutoFallback: L,
    baselineMode: M,
    decidedByProactivityLevel: h,
    modeSuppliedOnInvocation: p,
  };
}
function yYn(e) {
  let o =
    e.cli.fallbackModel?.split(",") ?? (Array.isArray(e.settings.fallbackModel) ? e.settings.fallbackModel : void 0);
  if (o === void 0) return;
  let t = new Set(),
    r = [];
  for (let u of o) {
    let f = typeof u === "string" ? u.trim() : "";
    if (f === "") continue;
    let i = Ot(f === "default" ? el() : f);
    if (t.has(i)) continue;
    if (!kr(i)) continue;
    if ((t.add(i), r.push(i), r.length === Q)) break;
  }
  return r.length > 0 ? r : void 0;
}
var Q = 3;
function Z(e) {
  switch (e) {
    case "userSettings":
      return "user_settings";
    case "projectSettings":
      return "project_settings";
    case "localSettings":
      return "local_settings";
    case "flagSettings":
      return "flag_settings";
    case "policySettings":
      return "policy_settings";
    case null:
      return "settings";
  }
}
function ee(e, o, t) {
  let r = qEe();
  if (!r || yY() === null) return e;
  let u = e ? aA("model") : null;
  if (u === "policySettings" || u === "flagSettings") return e;
  let f = ome().includes("userSettings"),
    i = ie().lastSeenOrgDefaultUpdatedAt,
    d = new Date(r.updated_at).getTime() > new Date(i ?? 0).getTime(),
    p = d && !o && f,
    E = () =>
      Ae(
        (g) =>
          g.lastSeenOrgDefaultUpdatedAt === r.updated_at ? g : { ...g, lastSeenOrgDefaultUpdatedAt: r.updated_at },
        t,
      );
  if (r.override_user_selection) {
    if (p) E();
    return;
  }
  if (o) return e;
  let m = f ? ye("userSettings")?.model : void 0;
  if (d && m) {
    if (
      (rn("userSettings", { model: void 0 }, void 0, t).then((g) => {
        if (!g.error) E();
      }),
      u === "userSettings")
    )
      return;
  } else if (p) E();
  return e;
}
function SYn(e, o) {
  let { cli: t, env: r, settings: u, agentFrontmatter: f } = e,
    i = t.model === "default" ? el() : t.model,
    d = i,
    p = null;
  if (i) p = t.model === "default" ? "cli_default" : "cli";
  let E = f?.model,
    m;
  if (!i && E && E !== "inherit")
    (m = E), (i = Ot(E)), (d = E), (p = f?.modelSource === "routine" ? "routine_frontmatter" : "agent_frontmatter");
  let g = !1,
    c = i;
  if (c === void 0) {
    if (r.ANTHROPIC_MODEL) (c = r.ANTHROPIC_MODEL), (p = "env");
    else if (((c = ee(u.model || void 0, t.isNonInteractiveSession === !0, o) || void 0), c !== void 0))
      p = Z(aA("model"));
    d = c;
  }
  let S;
  if (c && !kr(c)) {
    let M = m !== void 0 && !g ? m : c,
      h = g ? null : E_(M);
    if (h !== null) {
      if (((S = M), (c = h), i !== void 0)) i = h;
    } else {
      if (!(M.trim().toLowerCase() === "default" || GSn(M)) && !g) S = M;
      (c = void 0), (d = void 0), (p = null), (i = void 0);
    }
  }
  let v = c || null,
    L = Ot(v ?? el());
  return {
    effectiveModel: i,
    initialMainLoopModel: v,
    resolvedInitialModel: L,
    rawModelRequest: d || null,
    restrictedModel: S,
    settingLayer: p,
  };
}
function bYn(e) {
  let o = e.cli.systemPrompt,
    t = e.cli.appendSystemPrompt,
    r = ior();
  if (r)
    t = t
      ? `${t}

${r}`
      : r;
  return { systemPrompt: o, appendSystemPrompt: t };
}
function Kht() {
  return I("tengu_harbor_willow", !1) || kwn()?.meadow_lantern === !0;
}
var te = ["policySettings", "flagSettings", "userSettings"],
  ne = ["acceptEdits", "plan", "default", "auto"];
function x(e) {
  return ne.includes(e);
}
function w() {
  return te.filter(_o);
}
function U() {
  return w().some((e) => ye(e)?.permissions?.defaultMode === "auto");
}
function N(e) {
  return e.permissions?.disableAutoMode === "disable" || e.disableAutoMode === "disable";
}
function b5e(e) {
  return !N(e) && !B();
}
function Xht(e) {
  return (
    w()
      .map((t) => bm(ye(t)?.permissions?.defaultMode))
      .find((t) => t != null) === "plan" && bm(e.permissions?.defaultMode) !== "plan"
  );
}
function oe(e) {
  let o = bm(e.permissions?.defaultMode);
  if (o == null || !x(o)) return;
  if (o !== "auto") return o;
  return U() && b5e(e) ? "auto" : void 0;
}
function Yht({
  gateOn: e,
  permissionModeTyped: o,
  dangerouslySkipPermissions: t,
  scrubbed: r,
  settings: u,
  effort: f,
}) {
  let i = !o && !t && !r,
    d = i ? oe(u) : void 0;
  return {
    considered: e && i,
    settingsDefaultModePresent: u.permissions?.defaultMode != null,
    settingsDefault: d,
    permissionMode: e ? d : void 0,
    effort: e ? f : void 0,
  };
}
function wYn({ sentMode: e, repositorySettings: o }) {
  if (e === "auto") return;
  if (e !== void 0) return e;
  let t = A(o?.permissions?.defaultMode);
  return t !== void 0 && t !== "auto" && x(t) ? t : "default";
}
function TYn({ seed: e, settingsMode: o, sentMode: t, startsIn: r }) {
  if (
    !e.considered ||
    !e.settingsDefaultModePresent ||
    e.permissionMode !== void 0 ||
    o === void 0 ||
    (t !== void 0 && A(o) === t)
  )
    return null;
  let u =
    A(o) === "auto"
      ? "auto mode could not be requested from this machine (it is off here, or only the repository asked for it)"
      : "not a mode a cloud session can start in";
  return {
    text: `Settings kept on this machine: the default permission mode in your settings (${o}) \u2014 ${u}${r !== void 0 ? `; the session starts in ${r} mode` : ""}`,
    level: "info",
  };
}
function A(e) {
  return e === void 0 ? void 0 : Lf(e);
}
var R = "Permission mode downgraded to default \u2014 bypass requires accepting the disclaimer interactively first";
function V(e) {
  if (!wt()) return !1;
  if (e === "bypassPermissions") return !lA() && !ie().bypassPermissionsModeAccepted;
  return !1;
}
export {
  Hgn,
  yYn,
  SYn,
  bYn,
  Kht,
  b5e,
  Xht,
  Yht,
  wYn,
  TYn,
  $h,
  Ejt,
  EYn,
  kne,
  lg,
  V2,
  K2,
  BS,
  ETe,
  jv,
  Wv,
  Jht,
  AYn,
  CYn,
  w5e,
  ATe,
  Fue,
  jz,
  FF,
  vYn,
  RYn,
  CTe,
  FOe,
  PM,
  $Oe,
  Qht,
  Ik,
  Wz,
  Ajt,
  pH,
  DM,
  xgn,
  Pk,
  qz,
  n3,
  T5e,
  sl,
  qX,
  Mm,
  ST,
  kYn,
  VD,
  $ue,
  Cjt,
  Gz,
  UOe,
  ew,
  Gy,
  E5e,
  $F,
  Ign,
};
