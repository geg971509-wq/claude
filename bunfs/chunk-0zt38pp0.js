// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Se, bve } from "/$bunfs/root/chunk-f9h0bg01.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { W3 } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { l, X } from "/$bunfs/root/chunk-ypdw393e.js";
import { le, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { k, ux } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { Ct } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Oo, OXe } from "/$bunfs/root/chunk-6k63g5t6.js";
import { Yd, $a } from "/$bunfs/root/chunk-q14dgq5g.js";
import { ye, Os } from "/$bunfs/root/chunk-988p40e0.js";
import { Is, yw, xi, Ul } from "/$bunfs/root/chunk-0spqrdaj.js";
import { QCn } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { or, Zl, Qt, c5, Wm } from "/$bunfs/root/chunk-z2bvp3sv.js";
import {
  aue,
  rC,
  Ys,
  Xze,
  VDe,
  H2,
  RF,
  fgt,
  Yze,
  mgt,
  Jze,
  sfn,
  kF,
  hgt,
  Yte,
  KDe,
  AX,
  ND,
} from "/$bunfs/root/chunk-fctnm902.js";
import { Fd, wz, Zze, FS, CX, ufn, hM, hI, Ip } from "/$bunfs/root/chunk-e53y7x75.js";
import { LLe, ZTe, pC, Jt, Wne } from "/$bunfs/root/chunk-5n1tbe50.js";
import {
  IL,
  K9e,
  xd,
  ale,
  gct,
  hct,
  _ct,
  IS,
  fNt,
  Z9e,
  aWn,
  wct,
  fWn,
  mWn,
  t3e,
  pye,
  vct,
  Rct,
  CNt,
  RWn,
  kct,
  kWn,
  fye,
  zin,
  PWn,
  vNt,
  ule,
  dle,
  xct,
  Qu,
  M7,
  Zee,
  ete,
  dk,
  VA,
  zl,
  cc,
  jb,
  Hv,
  Aqe,
  xv,
  ED,
  Q$t,
  JG,
  Cpt,
  NSe,
  vpt,
  Z$t,
  eUt,
  nm,
  tUt,
  oT,
  Iv,
  tcn,
  GGn,
  ocn,
  Rpt,
  vqe,
  cF,
  tte,
  ice,
  ace,
  Rqe,
  u9,
  Hqe,
  xqe,
  fcn,
  mcn,
  Dh,
  is,
} from "/$bunfs/root/chunk-zze8764r.js";
import {
  Nm,
  nu,
  um,
  Uh,
  uc,
  BF,
  zgn,
  Kgn,
  DTe,
  OTe,
  Xgn,
  mJn,
  JOe,
  Vt,
  Zz,
  KX,
  y_t,
  Ud,
  Vy,
  fp,
  NI,
  Jgn,
  Gv,
} from "/$bunfs/root/chunk-x06p1jhb.js";
import { Tse, m1 } from "/$bunfs/root/chunk-9pc6y6sc.js";
import { JYt, Bke } from "/$bunfs/root/chunk-6xk0dqvt.js";
import { Ra, Uk } from "/$bunfs/root/chunk-1emzhzm3.js";
import { mm } from "/$bunfs/root/chunk-5jbjbjsn.js";
import { Bn, ns } from "/$bunfs/root/chunk-56sxk8k2.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
import { j } from "/$bunfs/root/chunk-yz031c9r.js";
async function vMn(e, t, s) {
  if (W3()) return "ineligible";
  if (!t?.source || !Ip(t.source)) return "ineligible";
  if (!c5(e, t, dk()[e]?.autoUpdate)) return "ineligible";
  try {
    return await ED(e, s, void 0, { skipIfRecent: !0 }), Jt().marketplaces.delete(e), "refreshed";
  } catch (i) {
    return (
      n(`Failed to refresh marketplace '${e}' on catalog miss; using cached data: ${l(i)}`, { level: "warn" }),
      "refresh-failed"
    );
  }
}
function rse(e) {
  if (e === "refreshed") y("plugin_install_refresh_first");
  else if (e === "refresh-failed") p("plugin_install_refresh_first", "refresh_failed");
  else g("plugin_install_refresh_first", "ineligible");
}
async function ske(e, t, s) {
  if (Ct()) return { outcome: "ineligible" };
  if (!t?.source || !Ip(t.source)) return { outcome: "ineligible" };
  if (t.installLocation && jb(t.installLocation)) return { outcome: "ineligible" };
  let i = t.source.source;
  if (i !== "github" && i !== "git" && i !== "url") {
    if (Wm(t.source) || i === "settings") Jt().marketplaces.delete(e);
    return { outcome: "ineligible" };
  }
  try {
    return await ED(e, s, void 0, { skipIfRecent: !0 }), Jt().marketplaces.delete(e), { outcome: "refreshed" };
  } catch (r) {
    return (
      n(`Failed to refresh marketplace '${e}' before scoped install; using cached data: ${l(r)}`, { level: "warn" }),
      { outcome: "refresh-failed", errorMessage: ux(l(r)) }
    );
  }
}
var ge = j(mm(), 1);
import { join as Le, resolve as De, sep as Ue } from "path";
function Te(e, t) {
  let s = { install: "installed", update: "updated", uninstall: "uninstalled" }[t];
  switch (e) {
    case Nm:
      return `This plugin is loaded via --plugin-dir for this session with no marketplace backing \u2014 it cannot be ${s}. Drop the --plugin-dir flag to stop loading it, or \`claude plugin disable\` to turn it off.`;
    case um:
      return `This plugin is synced from your claude.ai account with no marketplace backing \u2014 it cannot be ${s} here. Manage it on claude.ai, or \`claude plugin disable\` to turn it off on this machine.`;
    case nu:
      return `This plugin is loaded from ${Yd(Le(be(), "skills"))}/ with no marketplace backing \u2014 it cannot be ${s}. Delete the directory to remove it; \`claude plugin disable\` to turn it off; edits there take effect after /reload-plugins.`;
  }
}
function we(e, t, s) {
  if (uc(t)) return Te(t, s);
  if (ale(e) && gct(Vt(e).name) !== void 0)
    return "This is a built-in plugin \u2014 built-in plugins cannot be installed, updated or uninstalled. Use `claude plugin enable` / `claude plugin disable` to turn it on or off.";
  return;
}
function He(e) {
  let t = xd();
  if (!t) return;
  let { name: s } = KX(e);
  if (!DTe(e)) return t.has(s) ? s : void 0;
  let i = fp(s);
  for (let r of t) if (fp(r) === i) return r;
  return;
}
function We(e) {
  switch (e) {
    case Nm:
      return "--plugin-dir";
    case nu:
      return "skills-directory";
    case um:
      return "claude.ai-synced";
  }
}
var ZU = ["user", "project", "local"],
  ae = { user: 0, project: 1, local: 2 },
  jBe = ["user", "project", "local", "managed"];
function Ee(e) {
  if (!ZU.includes(e)) throw Error(`Invalid scope "${e}". Must be one of: ${ZU.join(", ")}`);
}
function WBe(e) {
  return ZU.includes(e);
}
function qBe(e) {
  return e === "project" || e === "local" ? Se() : void 0;
}
function RMn(e) {
  let t = ye("projectSettings")?.enabledPlugins;
  if (!t) return !1;
  let s = NI(Object.keys(t), e);
  return s !== void 0 && t[s] === !0;
}
function kMn(e) {
  return _e[e] === "sad";
}
var _e = {
  ...sfn,
  not_installed: "bad",
  not_installed_at_scope: "bad",
  ambiguous_marketplace: "sad",
  not_found: "bad",
  not_cached: "bad",
  source_missing: "bad",
  directory_loaded: "bad",
  builtin: "sad",
  marketplace_dir_missing: "bad",
  marketplace_dir_unreadable: "bad",
  marketplace_location_refused: "bad",
  marketplace_entry_path_refused: "bad",
  marketplace_policy_blocked: "sad",
  plugin_policy_blocked: "sad",
  command_source_inactive: "sad",
  command_source_skipped: "sad",
  command_source_refused: "sad",
  entry_helper_declined: "sad",
};
function GBe(e) {
  let t = nm(),
    s = NI(Object.keys(t.plugins), e);
  if (s) return s;
  for (let i of ["local", "project", "user"]) {
    let r = ye(Gv(i))?.enabledPlugins;
    if (!r) continue;
    let o = NI(Object.keys(r), e);
    if (o) return o;
  }
  return e;
}
function ake(e, t, s) {
  return OTe(e, fWn(e, s))?.enabled ?? t.defaultEnabled !== !1;
}
function $e(e, t = ["local", "project", "user"]) {
  let s = e.includes("@"),
    i = e.toLowerCase();
  for (let r of t) {
    let o = ye(Gv(r))?.enabledPlugins;
    if (!o) continue;
    for (let d of Object.keys(o))
      if (s ? Vy(d, e) : d.toLowerCase().startsWith(`${i}@`)) return { pluginId: d, scope: r };
  }
  return null;
}
function je(e, t) {
  let { name: s, marketplace: i } = KX(e);
  return t.find((r) => {
    if (Vy(r.name, e) || Vy(r.name, s)) return !0;
    if (i && r.source) return Vy(r.name, s) && r.source.toLowerCase().includes(`@${i.toLowerCase()}`);
    return !1;
  });
}
function ze(e, t, s) {
  let { name: i } = Vt(e),
    r = nm(),
    o = Object.keys(r.plugins),
    d = NI(o, e);
  if (d && r.plugins[d]?.length) return { pluginId: d, pluginName: i };
  let P = e.includes("@"),
    a = Jgn(o, i).filter((v) => (!P || !Vt(v).marketplace) && (r.plugins[v]?.length ?? 0) > 0),
    _ = a.find((v) => r.plugins[v]?.some((E) => E.scope === t && E.projectPath === s)) ?? a[0];
  if (_) return { pluginId: _, pluginName: i };
  return null;
}
function L0t(e) {
  let t = nm(),
    s = NI(Object.keys(t.plugins), e),
    i = s ? t.plugins[s] : void 0;
  if (!i || i.length === 0) return { scope: "user" };
  let r = Se(),
    o = i.find((a) => a.scope === "local" && a.projectPath === r);
  if (o) return { scope: o.scope, projectPath: o.projectPath };
  let d = i.find((a) => a.scope === "project" && a.projectPath === r);
  if (d) return { scope: d.scope, projectPath: d.projectPath };
  let P = i.find((a) => a.scope === "user");
  if (P) return { scope: P.scope };
  return { scope: i[0].scope, projectPath: i[0].projectPath };
}
async function EXt(e, t, s) {
  if (!(await Rpt(e, t, s))) return !1;
  return !(await JYt(e, s)).some((r) => r.type !== "dependency-unsatisfied" || r.reason !== "not-found");
}
async function HMn(e, t = "user", { shownSourceCommand: s, shownEntryHelper: i, announceRefreshResult: r } = {}, o) {
  Ee(t), (e = BF(e));
  let { name: d, marketplace: P } = KX(e),
    a = we(e, P, "install");
  if (a !== void 0) return { success: !1, message: a };
  let _,
    v,
    E,
    G = !1,
    L,
    c = !1,
    w = !1;
  if (P) {
    let R = (await zl(o))[P],
      S = R !== void 0 && Ip(R.source);
    c = R !== void 0 && !S;
    let T = r ?? (await ske(P, R, o));
    if ((rse(T.outcome), T.outcome === "refreshed")) G = !0;
    else if (T.outcome === "refresh-failed") (w = !0), (L = `marketplace not refreshed (${T.errorMessage})`);
    let F = await xv(e, o);
    if (F) (_ = F.entry), (v = P), (E = F.marketplaceInstallLocation);
  } else {
    let u = await N0t(d, o);
    if (u) (_ = u.entry), (v = u.marketplace), (E = u.marketplaceInstallLocation);
  }
  if (!_ || !v) {
    let u = P ? `marketplace "${P}"` : "any configured marketplace",
      R = P ? Ra("plugin marketplace update", P) : null,
      S =
        P && !G
          ? `. Your local copy may be out of date${R ? ` \u2014 try \`${R}\`` : " \u2014 update it from /plugin > Marketplaces"}.`
          : "";
    return (
      p(
        "plugin_marketplace_resolve",
        c ? "marketplace_policy_blocked" : w ? "refresh_failed_stale_lookup" : "not_found",
        { scoped: P !== void 0 },
      ),
      { success: !1, message: `Plugin "${d}" not found in ${u}${S}` }
    );
  }
  let B = _,
    C = `${B.name}@${v}`;
  if (c) p("plugin_marketplace_resolve", "marketplace_policy_blocked", { scoped: !0 });
  else y("plugin_marketplace_resolve", { scoped: P !== void 0 });
  if (await EXt(C, t, o)) {
    let u = await GGn(C, t, qBe(t), o),
      R = await Bke(C, o);
    return {
      success: !0,
      message: `Plugin "${C}" is already installed (scope: ${t})${u ? " \u2014 marked as manually installed" : ""}${R?.suffix ?? ""}`,
      pluginId: C,
      pluginName: B.name,
      scope: t,
    };
  }
  let W;
  if (i !== void 0) W = i;
  else if (((W = await uke(C, B, o)), W !== null))
    throw new kF(
      `${M0t(W)}
This install runs that command; confirm it by running \`claude plugin install\` in a terminal (or with -y/--yes).`,
      "entry_helper_unconfirmed",
    );
  let I = await vqe({
    pluginId: C,
    entry: B,
    scope: t,
    marketplaceInstallLocation: E,
    trigger: "cli",
    explicit: !0,
    consentedEntryHelper: W,
    commandSourceConsent:
      s !== void 0
        ? { kind: "shown", command: s, pluginId: C }
        : qe(C, B.source, (O() && o !== void 0 ? await Iv(o) : oT()).plugins[C]),
    storageV5: o,
  });
  if (!I.ok)
    switch (I.reason) {
      case "local-source-no-location":
        return {
          success: !1,
          message: `Cannot install local plugin "${I.pluginName}" without marketplace install location`,
        };
      case "settings-write-failed":
        return { success: !1, message: `Failed to update settings: ${I.message}` };
      case "resolution-failed":
        return { success: !1, message: ocn(I.resolution) };
      case "blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${I.pluginName}" is blocked by your organization's policy and cannot be installed`,
        };
      case "dependency-blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${I.pluginName}" depends on "${I.blockedDependency}", which is blocked by your organization's policy`,
        };
      case "marketplace-blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${I.pluginName}" is from marketplace "${I.marketplaceName}", which is blocked by your organization's policy`,
        };
      case "dependency-marketplace-blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${I.pluginName}" depends on "${I.blockedDependency}" from marketplace "${I.marketplaceName}", which is blocked by your organization's policy`,
        };
      case "range-conflict": {
        let u = I.dep === C ? "Plugin" : "Dependency";
        return { success: !1, message: Rct(u, I.dep, I.ranges, I.why, I.installed) };
      }
      case "no-matching-tag": {
        let u = I.dep === C ? "Plugin" : "Dependency";
        return { success: !1, message: CNt(u, I.dep, I.range) };
      }
    }
  let re = Ra("plugin enable", C),
    f = re ? ` \u2014 enable it with: ${re}` : " \u2014 enable it in /plugin",
    A = I.installedDisabled.includes(C)
      ? I.installedDisabledByDefault.includes(C)
        ? `. This plugin is disabled by default${f}`
        : `. This plugin is disabled in your settings${f}`
      : "",
    b = L ? `. Warning: ${L} \u2014 installed from the cached catalog, so the version may be stale` : "";
  return {
    success: !0,
    message: `Successfully installed plugin: ${C} (scope: ${t})${I.depNote}${A}${b}`,
    pluginId: C,
    pluginName: B.name,
    scope: t,
  };
}
async function bq(e, t = "user", s = !0, i) {
  Ee(t), (e = BF(e));
  let r = we(e, KX(e).marketplace, "uninstall");
  if (r !== void 0) return { success: !1, message: r };
  let { enabled: o, disabled: d } = await Dh(i),
    P = [...o, ...d],
    a = je(e, P),
    _ = Gv(t),
    v = ye(_),
    E,
    G,
    L = nm(),
    c = Object.keys(L.plugins),
    w = qBe(t);
  if (a) {
    let u = Object.keys(v?.enabledPlugins ?? {}),
      R = a.name.toLowerCase(),
      S = e.includes("@"),
      T = [
        ...u.filter((F) => F === e),
        ...u.filter((F) => Vy(F, e)),
        ...(S
          ? []
          : [
              ...u.filter((F) => F === a.name),
              ...u.filter((F) => F.startsWith(`${a.name}@`)),
              ...u.filter((F) => F.toLowerCase() === R),
              ...u.filter((F) => F.toLowerCase().startsWith(`${R}@`)),
            ]),
        S ? e : a.name,
      ];
    (E =
      T.find((F) => {
        let ne = NI(c, F) ?? F;
        return (L.plugins[ne] ?? []).some((x) => x.scope === t && x.projectPath === w);
      }) ?? T[0]),
      (G = a.name);
  } else {
    let u = ze(e, t, w);
    if (!u) return { success: !1, message: `Plugin "${e}" not found in installed plugins` };
    (E = u.pluginId), (G = u.pluginName);
  }
  E = NI(c, E) ?? E;
  let B = L.plugins[E],
    C = B?.find((u) => u.scope === t && u.projectPath === w);
  if (!C) {
    let { scope: u } = L0t(E);
    if (u !== t && B && B.length > 0) {
      if (u === "project") {
        let R = Ra("plugin disable", e, "--scope local");
        return {
          success: !1,
          message: `Plugin "${e}" is enabled at project scope (.claude/settings.json, shared with your team). To disable just for you${R ? `: ${R}` : ", use claude plugin disable with --scope local"}`,
        };
      }
      return {
        success: !1,
        message: `Plugin "${e}" is installed in ${u} scope, not ${t}. Use --scope ${u} to uninstall.`,
      };
    }
    return {
      success: !1,
      message: `Plugin "${e}" is not installed in ${t} scope. Use --scope to specify the correct scope.`,
    };
  }
  let W = C.installPath;
  await Os(
    _,
    (u) => {
      let R = { ...u?.enabledPlugins },
        S = NI(Object.keys(R), E) ?? E;
      return (R[S] = void 0), { enabledPlugins: R };
    },
    void 0,
    i,
  ),
    Qu(i),
    await tUt(E, t, w, i);
  let re = nm().plugins[E],
    f = !re || re.length === 0;
  if (f && W) await M7(W, i);
  if (f) {
    if ((await K9e(E, i), Z9e([E], i), s)) await LLe(E);
  }
  let A = kct(E, P),
    b = zin(A);
  return {
    success: !0,
    message: `Successfully uninstalled plugin: ${G} (scope: ${t})${b}`,
    pluginId: E,
    pluginName: G,
    scope: t,
    reverseDependents: A.length > 0 ? A : void 0,
  };
}
async function pe(e, t, s, i, r) {
  let o = t ? "enable" : "disable",
    d = Ye();
  e = BF(e);
  let { name: P, marketplace: a } = KX(e);
  if (a === void 0 && !ale(e)) {
    let A = y_t(e, Uh),
      b = $e(e, ["user"])?.pluginId;
    if (IS(A) && b !== void 0 && !ale(b)) return pe(b, t, s, i, r);
    if (IS(A)) {
      let R = await Dh(r);
      if (![...R.enabled, ...R.disabled].some((T) => Vy(T.name, e) && !ale(T.source))) return pe(A, t, s, i, r);
      return {
        success: !1,
        message: `Plugin "${e}" names both a built-in and another loaded plugin. Use plugin@marketplace format.`,
      };
    }
    let u = $e(e)?.pluginId;
    if (u !== void 0 && (uc(Ud(u)) || IS(u))) return pe(u, t, s, i, r);
  }
  if (ale(e) || uc(a)) {
    let A = "user",
      b = _ct(e) ?? e,
      u = Je(b, t);
    if (u !== void 0) return Oe(b, t, u, b);
    let R,
      S,
      T,
      F = !1,
      ne = "";
    if (uc(a)) {
      let m = await Dh(r),
        M = je(
          e,
          [...m.enabled, ...m.disabled].filter((N) => Ud(N.source) === a),
        );
      if (M) (b = M.source), (R = M.manifest.defaultEnabled === !1);
      let z = t ? He(b) : void 0;
      if (z !== void 0)
        return {
          success: !1,
          message: `Plugin "${b}" cannot be ${o}d here: "${z}" is locked by your organization's managed settings, so this ${We(a)} copy is never loaded`,
        };
      if (t && a === um) {
        let N = new Set(m.errors.filter(ZTe).map((H) => H.source)),
          Q = mcn(P, [
            ...m.enabled.filter((H) => !H.isBuiltin),
            ...m.disabled.filter((H) => N.has(H.source)).map((H) => ({ ...H, enabled: !0 })),
            ...m.enabled.filter((H) => H.isBuiltin),
          ]);
        if (Q !== void 0)
          ne = ` (a local copy, ${Oo(Q.source)}, currently takes precedence over the synced one \u2014 disable it in /plugin to run this copy)`;
      }
      if (t && a === Nm) {
        let { name: N } = Zz(b),
          Q = `${N}@${um}`,
          H = ZU.filter((de) => he(de, b, d)?.value === !1 && he(de, Q, d) === void 0);
        if (H.length > 0) S = { syncedId: Q, scopes: H };
      }
      let D = Xe(b, s, d);
      if (((T = D.override), s)) {
        if (
          ((b = D.atRequested?.key ?? D.found?.key ?? b),
          (F = D.atRequested !== void 0),
          D.atRequested === void 0 && D.found && ae[D.found.scope] > ae[s])
        )
          return {
            success: !1,
            message: `Plugin "${b}" is set at ${D.found.scope} scope (which overrides ${s}). Use --scope ${D.found.scope} or omit --scope to auto-detect.`,
          };
        A = s;
      } else (A = D.decidingScope ?? D.found?.scope ?? "user"), (b = he(A, b, d)?.key ?? b);
    }
    if (t && a === nu) {
      if (!wz()) return { success: !1, message: Zze(Yd(Le(be(), "skills"))) };
    }
    if (t && Fd(b))
      return { success: !1, message: `Plugin "${b}" is blocked by your organization's policy and cannot be enabled` };
    if (a === um && T && T.enabling !== t) return Oe(b, t, T.source, T.key);
    let x = Gv(A),
      ie = t && uc(a) && x === "userSettings" && R === !1 && (a !== um || Xgn(b, Ve(x, b)) !== !1) ? void 0 : t,
      oe = "";
    if (a === um) {
      let m = Fe(x, b, ie),
        M = zgn(
          b,
          m.map(({ record: N }) => N),
        ),
        z = M?.enabled ?? R !== !0,
        D = M === void 0 ? void 0 : m[M.index]?.source;
      if (z !== t && D !== void 0) {
        let N = yw(D),
          Q = D === "localSettings" || D === "projectSettings" || D === "userSettings" ? ` (--scope ${JOe[D]})` : "";
        if (!F)
          return {
            success: !1,
            message: `Plugin "${b}" would still be ${t ? "disabled" : "enabled"} after writing ${A} settings: ${N} settings govern it. Change it there${Q}.`,
          };
        oe = ` (still ${t ? "disabled" : "enabled"} here: ${N} settings govern it${Q})`;
      }
      if (!xi().includes(x)) oe += ` (this session ignores ${yw(x)} settings: --setting-sources)`;
    }
    if (S) {
      let { syncedId: m, scopes: M } = S;
      for (let z of M) {
        if (z === A) continue;
        let { error: D } = await Me(Gv(z), m, !1, {}, r);
        if (D) return { success: !1, message: `Failed to ${o} plugin: ${D.message}` };
      }
    }
    let { error: se } = await Me(x, b, ie, S?.scopes.includes(A) ? { [S.syncedId]: !1 } : {}, r);
    if (se) return { success: !1, message: `Failed to ${o} plugin: ${se.message}` };
    Qu(r);
    let { name: ce } = Zz(b);
    return {
      success: !0,
      message: `Successfully ${o}d plugin: ${ce}${oe}${ne}`,
      pluginId: b,
      pluginName: ce,
      scope: A,
    };
  }
  if (s) Ee(s);
  let _,
    v,
    E = $e(e);
  if (s)
    if (((v = s), E)) _ = E.pluginId;
    else if (e.includes("@")) _ = e;
    else return { success: !1, message: `Plugin "${e}" not found in settings. Use plugin@marketplace format.` };
  else if (E) (_ = E.pluginId), (v = E.scope);
  else if (e.includes("@")) (_ = e), (v = "user");
  else
    return {
      success: !1,
      message: `Plugin "${e}" not found in any editable settings scope. Use plugin@marketplace format.`,
    };
  if (t && Fd(_))
    return { success: !1, message: `Plugin "${_}" is blocked by your organization's policy and cannot be enabled` };
  let G = Gv(v),
    L = ye(G)?.enabledPlugins?.[_],
    c = s && E && ae[s] > ae[E.scope];
  if (s && L === void 0 && E && E.scope !== s && !c)
    return {
      success: !1,
      message: `Plugin "${e}" is installed at ${E.scope} scope, not ${s}. Use --scope ${E.scope} or omit --scope to auto-detect.`,
    };
  let w = s && !c ? L === !0 : m1().has(_);
  if (t === w)
    return {
      success: !1,
      alreadyInGoalState: !0,
      message: `Plugin "${e}" is already ${t ? "enabled" : "disabled"}${s ? ` at ${s} scope` : ""}`,
    };
  let B;
  if (!t) {
    let { enabled: A, disabled: b } = await Dh(r),
      u = [...A, ...b],
      R = kct(_, u);
    if (R.length > 0) B = R;
    let S = t3e() ? u : u.filter((F) => Ud(F.source) !== um),
      T = kct(_, S);
    if (T.length > 0 && !i?.bypassDependentsBlock) {
      let { name: F } = Vt(_),
        x = [...kWn(_, S), _].map((oe) => Ra("plugin disable", oe)),
        ie = x.every((oe) => oe !== null)
          ? `, or disable everything together: ${x.join(" && ")}`
          : ", or disable them together in /plugin.";
      return {
        success: !1,
        message: `${F} is still required by ${T.map(Oo).join(", ")}. Disable ${k(T.length, "that plugin", "those plugins")} first${ie}`,
        reverseDependents: T,
      };
    }
  }
  let C = [];
  if (t) {
    let { enabled: A, disabled: b } = await Dh(r),
      { closure: u, missing: R } = PWn(_, [...A, ...b]);
    if (R.length > 0) {
      let { name: m } = Vt(_),
        M = R.map((D) => Ra("plugin install", D)),
        z = M.every((D) => D !== null) ? `: ${M.join(" && ")}` : " from /plugin.";
      return {
        success: !1,
        message: `${m} depends on ${R.join(", ")}, which ${k(R.length, "is", "are")} not installed. Install ${k(R.length, "it", "them")} first${z}`,
      };
    }
    let S = new Set(A.map((m) => m.source)),
      T = new Map([...A, ...b].filter((m) => uc(Ud(m.source))).map((m) => [m.source, m])),
      F = wct().map(({ record: m }) => m),
      ne = u.filter((m) => uc(Ud(m)) && !S.has(m) && !mJn(m, F, T.get(m)?.manifest.defaultEnabled));
    if (ne.length > 0) {
      let { name: m } = Vt(_),
        M = ne.length,
        z = ne.map((N) => Ra("plugin enable", N)),
        D = z.every((N) => N !== null) ? `: ${z.join(" && ")}` : " in /plugin.";
      return {
        success: !1,
        message: `${m} depends on ${ne.join(", ")}, ${k(M, "a local copy that is", "local copies that are")} currently disabled. Enable ${k(M, "it", "them")} first${D}`,
      };
    }
    let x = u.filter((m) => !uc(Ud(m))),
      ie = x.filter((m) => Fd(m));
    if (ie.length > 0) {
      let { name: m } = Vt(_);
      return {
        success: !1,
        message: `${m} depends on ${ie.join(", ")}, which ${k(ie.length, "is", "are")} blocked by your organization's plugin policy. Ask an admin to allow ${k(ie.length, "it", "them")}.`,
      };
    }
    let oe = [...ZU].sort((m, M) => ae[M] - ae[m]),
      se = [];
    for (let m of x)
      for (let M of oe) {
        if (ae[M] <= ae[v]) continue;
        let z = ye(Gv(M))?.enabledPlugins?.[m];
        if (z === void 0) continue;
        if (z === !1) se.push({ dep: m, scope: M });
        break;
      }
    if (se.length > 0) {
      let { name: m } = Vt(_),
        M = se.map((N) => `${N.dep} (${N.scope} scope)`).join(", "),
        z = te(se.map((N) => N.scope)),
        D = z.length === 1 ? `, or use --scope ${z[0]} to write where the override lives` : "";
      return {
        success: !1,
        message: `${m} depends on ${M}, which ${k(se.length, "is", "are")} disabled there. Enable ${k(se.length, "it", "them")} at that scope${D}.`,
      };
    }
    let ce = fye(G);
    C = x.filter((m) => !ce.has(m));
  }
  let { error: W } = await Os(
    G,
    (A) => ({ enabledPlugins: { ...A?.enabledPlugins, [_]: t, ...Object.fromEntries(C.map((b) => [b, !0])) } }),
    void 0,
    r,
  );
  if (W) return { success: !1, message: `Failed to ${o} plugin: ${W.message}` };
  if ((Qu(r), t)) fNt([_, ...C], r), aWn([_, ...C], r);
  let { name: I } = Vt(_),
    re = zin(B),
    f =
      C.length > 0
        ? ` (also enabled ${C.length} ${k(C.length, "dependency", "dependencies")}: ${C.map((A) => Vt(A).name).join(", ")})`
        : "";
  return {
    success: !0,
    message: `Successfully ${o}d plugin: ${I} (scope: ${v})${re}${f}`,
    pluginId: _,
    pluginName: I,
    scope: v,
    reverseDependents: B,
  };
}
async function lke(e, t, s) {
  return pe(e, !0, t, void 0, s);
}
async function cke(e, t, s) {
  return pe(e, !1, t, void 0, s);
}
async function xMn(e) {
  let t = m1();
  await pye();
  let s = await Promise.all(bve().map((w) => fcn(w, e))),
    i = te(s.filter((w) => w !== void 0).map((w) => `${w}@${um}`)),
    r = wct(),
    d = ((w) => new Set(w.flatMap(({ record: B }) => Object.keys(B ?? {}).map(fp))))(r),
    P = i.filter((w) => !d.has(fp(w))),
    a = (w) => new Set(w.flatMap(({ record: B }) => Object.keys(B ?? {}))),
    _ = a(r),
    v = a(r.filter(({ source: w }) => IL.includes(w))),
    E = hct()
      .enabled.map((w) => w.source)
      .filter((w) => !(IS(w) ? v : _).has(w)),
    G = [...P, ...E];
  if (t.size === 0 && G.length === 0) return { success: !0, message: "No enabled plugins to disable" };
  let L = [],
    c = [];
  for (let [w] of t) {
    let B = await pe(w, !1, void 0, { bypassDependentsBlock: !0 }, e);
    if (B.success) L.push(w);
    else c.push(Oo(`${w}: ${B.message}`));
  }
  for (let w of G) {
    let { error: B } = await Os(
      "userSettings",
      (C) => ({ enabledPlugins: { ...C?.enabledPlugins, [w]: !1 } }),
      void 0,
      e,
    );
    if (B) c.push(Oo(`${w}: ${B.message}`));
    else L.push(w);
  }
  if (G.length > 0) Qu(e);
  if (c.length > 0)
    return {
      success: !1,
      message: `Disabled ${L.length} ${k(L.length, "plugin")}, ${c.length} failed:
${c.join(`
`)}`,
    };
  return { success: !0, message: `Disabled ${L.length} ${k(L.length, "plugin")}` };
}
async function hge(e, t, s = {}, i) {
  let r;
  try {
    r = await Ke(e, t, s, i);
  } catch (o) {
    if (o instanceof Ys) {
      let d = o instanceof kF ? o.failureCode : "command_source_refused";
      if (_e[d] === "sad") g("plugin_update_op", d);
      else p("plugin_update_op", d);
      return { outcome: "failed", message: o.message, scope: t, failureCode: d };
    }
    throw (p("plugin_update_op", "exception"), o);
  }
  switch (r.outcome) {
    case "failed":
      if (r.failureCode !== void 0 && _e[r.failureCode] === "sad") g("plugin_update_op", r.failureCode);
      else p("plugin_update_op", r.failureCode ?? "op_failed");
      break;
    case "skipped":
      g("plugin_update_op", r.skipReason ?? "skipped");
      break;
    case "up_to_date":
    case "updated":
      if (r.refreshFailed)
        g(
          "plugin_update_op",
          r.refreshRefusedByPolicy ? "marketplace_refresh_policy_refused" : "marketplace_refresh_failed",
        );
      else
        y("plugin_update_op", {
          already_up_to_date: r.outcome === "up_to_date",
          version_unknown: r.newVersion === "unknown",
        });
      break;
  }
  return r;
}
async function Ke(
  e,
  t,
  {
    skipMarketplaceRefresh: s = !1,
    skipCommandSources: i = !1,
    announceCommandSource: r,
    explicit: o = !1,
    consentedEntryHelper: d,
    onEntryHelperDisclosure: P,
  },
  a,
) {
  let _ = o;
  e = BF(e);
  let { name: v, marketplace: E } = KX(e),
    G = we(e, E, "update");
  if (G !== void 0) return { outcome: "failed", message: G, failureCode: ale(e) ? "builtin" : "directory_loaded" };
  let L = E,
    c = L ? `${v}@${L}` : e,
    w = O() && a !== void 0 ? await Iv(a) : oT(),
    B = NI(Object.keys(w.plugins), c);
  if (B === void 0 && L === void 0) {
    let h = Jgn(Object.keys(w.plugins), v).filter((U) => (w.plugins[U]?.length ?? 0) > 0);
    if (h.length > 1)
      return {
        outcome: "failed",
        message: `Plugin "${or(v, 200)}" is installed from more than one marketplace. Include the marketplace name to pick one: ${h.map((U) => `\`claude plugin update ${or(U, 200)}\``).join(" or ")}`,
        scope: t,
        failureCode: "ambiguous_marketplace",
      };
    if (h.length === 0)
      return {
        outcome: "failed",
        message: `Plugin "${or(v, 200)}" is not installed`,
        scope: t,
        failureCode: "not_installed",
      };
    B = h[0];
  }
  if (B) (c = B), ({ marketplace: L } = Vt(c));
  let C = B ? w.plugins[B] : void 0,
    W,
    I = !1;
  if (Fd(c))
    return {
      outcome: "failed",
      message: `Plugin "${or(c, 200)}" is blocked by your organization's policy and was not updated`,
      pluginId: c,
      scope: t,
      failureCode: "plugin_policy_blocked",
    };
  if (L) {
    let U = (await zl(a))[L]?.source;
    if (hI(U))
      return {
        outcome: "failed",
        message: `Plugin "${v}" is from marketplace "${L}", which is blocked by your organization's policy`,
        pluginId: c,
        scope: t,
        failureCode: "marketplace_policy_blocked",
      };
    if (!s && U && (U.source === "github" || U.source === "git" || U.source === "url"))
      try {
        await ED(L, a, void 0, { skipIfRecent: !0 });
      } catch (K) {
        (I = K instanceof Ys),
          (W = I
            ? "marketplace not refreshed \u2014 your organization's managed settings forbid its headersHelper (the version shown is from the cached catalog; ask your admin)"
            : `marketplace not refreshed (${ux(l(K))})`),
          n(`Failed to refresh marketplace '${L}' before update; using cached data: ${l(K)}`, { level: "warn" });
      }
  }
  let re = s ? await Aqe(c, a) : await xv(c, a);
  if (!re)
    return {
      outcome: "failed",
      message: s
        ? `Plugin "${v}" is not in the locally cached marketplace catalog; it was not re-resolved.`
        : `Plugin "${v}" not found`,
      pluginId: c,
      scope: t,
      failureCode: s ? "not_cached" : "not_found",
    };
  let { entry: f } = re,
    { marketplaceInstallLocation: A } = re;
  if (!C || C.length === 0)
    return {
      outcome: "failed",
      message: `Plugin "${v}" is not installed`,
      pluginId: c,
      scope: t,
      failureCode: "not_installed",
    };
  let b = qBe(t),
    u = C.filter((h) => h.scope === t),
    R = u.find((h) => h.projectPath === b);
  if (!R && u.length > 1)
    n(`updatePluginOp: ${u.length} ${t}-scope installs, none match CWD '${b}'; updating '${u[0]?.projectPath}' only`, {
      level: "warn",
    });
  let S = R ?? u[0];
  if (!S) {
    let h = b ? `${t} (${b})` : t;
    return {
      outcome: "failed",
      message: `Plugin "${v}" is not installed at scope ${h}`,
      pluginId: c,
      scope: t,
      failureCode: "not_installed_at_scope",
    };
  }
  let T = S.projectPath,
    F;
  if (typeof f.source === "object" && f.source.source === "command") {
    let h = FS(),
      U = h || i,
      K = NI(await Tse(), c) !== void 0,
      Y = h || (i && !K),
      q = t === "user" ? void 0 : `--scope ${t}`;
    F = U ? void 0 : await r?.(c, f, S.sourceCommand);
    let J = r !== void 0 && !aue() && S.sourceCommand === rC(f.source);
    if (U || (F === void 0 && !J && !K))
      return {
        outcome: "failed",
        message:
          i && !Y
            ? `${or(v, 200)} is installed by running a command, which the background marketplace update never runs; it is left to the per-session re-resolve (when that is enabled) or an explicit update \u2014 ${Uk("plugin update", c, { extra: q, fallback: "a per-plugin update reviews it" })}.`
            : h
              ? hM
              : `${or(v, 200)} is disabled, so the command that installs it was not run. Enable it first, then ${Uk("plugin update", c, { extra: q, fallback: "update it explicitly" })}.`,
        pluginId: c,
        scope: t,
        failureCode: i && !Y ? "command_source_skipped" : "command_source_inactive",
      };
  }
  let ne = le(),
    x = S.version,
    { enabled: ie, disabled: oe } = s ? await is(a) : await Dh(a),
    se = RWn(c, [...ie, ...oe]),
    ce = se.filter((h) => h.constraint.version !== void 0),
    m = se.map((h) => h.constraint.version).filter((h) => h !== void 0),
    M,
    z = "",
    D = await zl(a);
  if (m.length > 0) {
    let h = vct(m);
    if (!h.ok)
      return {
        outcome: "skipped",
        message: `Skipped \u2014 ${Rct("Plugin", c, m, h.reason)}`,
        pluginId: c,
        scope: t,
        blockedBy: ce.map((Y) => Y.plugin.source),
        oldVersion: x,
        skipReason: "pinner_blocked",
      };
    let U = D[L ?? ""]?.source,
      K = NSe(f.source) ?? (typeof f.source === "string" ? vpt(U) : null);
    if (K !== null && h.range !== "*") {
      let Y = await eUt(K, f.name, h.range);
      if (Y === null)
        n(`updatePluginOp(${c}): no ${f.name}--v* tag satisfying ${h.range}; falling back to HEAD + post-fetch guard`);
      else if (Y.version === S.resolvedVersion && Y.sha === S.gitCommitSha)
        return {
          outcome: "up_to_date",
          message: `${v} is already at the latest version satisfying ${m.join(", ")} (${Y.version}, required by ${ce.map((q) => q.plugin.name).join(", ")}).${W ? ` Warning: ${W} \u2014 version shown may be stale.` : ""}`,
          pluginId: c,
          newVersion: S.version,
          oldVersion: x,
          scope: t,
          refreshFailed: W !== void 0 ? !0 : void 0,
          refreshRefusedByPolicy: I || void 0,
        };
      else if (
        ((M = Y),
        (z = ` (highest tag satisfying ${m.join(", ")} from ${ce.map((q) => q.plugin.name).join(", ")})`),
        typeof f.source === "string")
      ) {
        let q = Z$t(U, f.source);
        if (q !== null) f = { ...f, source: q };
      }
    }
  }
  let N,
    Q,
    H,
    de,
    ve = !1,
    ke,
    Re;
  if (typeof f.source !== "string") {
    let h = f.source,
      U =
        M && (h.source === "github" || h.source === "url" || h.source === "git-subdir")
          ? { ...h, ref: M.ref, sha: M.sha }
          : h,
      K = D[L ?? ""]?.source,
      Y = ND(c),
      q = ete(Y, f.name),
      J =
        h.source === "archive"
          ? Yte({ entry: f, archiveUrl: h.url, marketplaceSource: K, trustedSettingsEntryAuth: q })
          : void 0,
      ue = J !== void 0 && h.source === "archive" ? Yze(J, h.url) : null,
      fe = ue === null ? null : CX(K, L),
      V =
        fe !== null
          ? {
              outcome: "failed",
              message: Jze(f.name, fe),
              pluginId: c,
              scope: t,
              failureCode:
                fe === "remote_policy_unconsented"
                  ? "entry_helper_remote_policy_unconsented"
                  : "entry_helper_disabled_by_policy",
            }
          : null;
    if (_ && V !== null) return V;
    let ee = _ && P === void 0 ? mgt(d, ue) : null;
    if (ee !== null)
      return { outcome: "failed", message: hgt(ee, f.name, "update"), pluginId: c, scope: t, failureCode: fgt[ee] };
    if (!_ && ue !== null) {
      let me = f.version ?? (h.source === "archive" && h.sha256 !== void 0 ? Q$t(h.sha256) : void 0);
      if (me !== void 0 && me === x) {
        let Ie = `${v} is already at the latest version (${x}).`;
        return {
          outcome: "up_to_date",
          message: W ? `${Ie} Warning: ${W} \u2014 version shown may be stale.` : Ie,
          pluginId: c,
          newVersion: x,
          oldVersion: x,
          scope: t,
          refreshFailed: W !== void 0 ? !0 : void 0,
          refreshRefusedByPolicy: I || void 0,
        };
      }
      if (V !== null) return V;
      let Ce = Ra("plugin update", c);
      return {
        outcome: "skipped",
        message:
          `Skipped \u2014 "${Qt(f.name)}" fetches its archive through a headersHelper, which only runs when you update it yourself. Update it from /plugin` +
          (Ce ? ` (or \`${Ce}\`).` : "."),
        pluginId: c,
        scope: t,
        oldVersion: x,
        skipReason: "entry_helper_deferred",
      };
    }
    if (_ && ue !== null) {
      if (P !== void 0) {
        let me = await P(M0t(ue));
        if (me !== "accepted")
          return {
            outcome: "failed",
            message: "Aborted \u2014 the headersHelper command was not confirmed, so it was not run.",
            pluginId: c,
            scope: t,
            failureCode: me === "declined" ? "entry_helper_declined" : "entry_helper_unconfirmed",
          };
      }
    }
    let Z = await Rqe(U, {
      manifest: { name: f.name },
      storageV5: a,
      archiveAuth: await KDe({
        pluginSource: U,
        pluginName: f.name,
        marketplaceName: L,
        marketplaceSource: K,
        trustedMarketplaceAuth: Zee(K, Y),
        trustedSettingsEntryAuth: q,
        entry: f,
        runEntryHelper: _,
      }),
      entryDeclaresComponents: xqe(f),
      declaredComponentPaths: Hqe(f),
      commandSourceConsent:
        F !== void 0
          ? { kind: "shown", command: F, pluginId: c }
          : { kind: "recorded", command: aue() ? void 0 : S.sourceCommand, pluginId: c },
    });
    (N = Z.path), (Q = Z.producerPath), (ve = !0), (ke = M?.sha ?? Z.gitCommitSha), (de = Z.manifest?.version);
    let Pe = await JG(c, f.source, Z.manifest, Z.path, f.version, M?.sha ?? Z.gitCommitSha, Z.contentSha256);
    H = M && (Z.manifest?.version || f.version) ? `${Pe}-${M.sha.substring(0, 12)}` : Pe;
  } else {
    let h = jb(A) !== void 0 ? "system" : "workspace",
      U = await dle(c, A, f.source, D, VA(), a, h);
    if (U.kind === "location-error") throw U.error;
    if (U.kind !== "ok") {
      let J = xct(U, A, f.source);
      return { outcome: "failed", message: J.message, pluginId: c, scope: t, failureCode: J.code };
    }
    (Re = U.marketplaceDir), (N = U.entryPath);
    let K = D[L ?? ""],
      Y = K !== void 0 && Wm(K.source);
    try {
      if (Y) await vNt(a, N, h);
      else await ne.stat(N);
    } catch (J) {
      if (X(J))
        return {
          outcome: "failed",
          message: `Plugin source not found at ${Zl(N)}`,
          pluginId: c,
          scope: t,
          failureCode: "source_missing",
        };
      throw J;
    }
    let q;
    try {
      q = (await u9(N, f.name, f.source)).manifest;
    } catch {}
    (de = q?.version), (ke = (await Cpt(N)) ?? void 0), (H = await JG(c, f.source, q, N, f.version));
  }
  try {
    if (M === void 0 && m.length > 0) {
      let V = ge.valid(de) ?? ge.coerce(de)?.version,
        ee = se
          .filter(({ constraint: Z }) => Z.version !== void 0 && V !== void 0 && !ge.satisfies(V, Z.version))
          .map(({ plugin: Z }) => Z.source);
      if (ee.length > 0)
        return {
          outcome: "skipped",
          message: `Skipped \u2014 ${ee.join(", ")} requires ${v} at a version range that ${de ?? H} does not satisfy`,
          pluginId: c,
          scope: t,
          blockedBy: ee,
          oldVersion: x,
          skipReason: "pinner_blocked",
        };
    }
    let h = cF(c, H),
      U = H === "unknown",
      K = ice(c, H),
      Y = !U && (S.version === H || S.installPath === h || S.installPath === K),
      q = !1;
    if (Y && typeof f.source === "object" && f.source.source === "command") {
      let V = pC(S.installPath, { trustedRoots: ule(c, D, VA()) }),
        ee = V.absolute;
      q =
        V.suspect ||
        !(await (RF(f.source) ? Xze(ee) : ee.endsWith(".zip") ? $a(ee) : tte(ee, a))) ||
        (RF(f.source) ? await Ge(ee, Q ?? S.sourceProducerPath) : await Xze(ee, { unclassifiableIsFarm: !0 }));
    }
    if (Y && !q) {
      if (
        typeof f.source === "object" &&
        f.source.source === "command" &&
        (S.sourceCommand !== rC(f.source) || (Q !== void 0 && S.sourceProducerPath !== Q))
      )
        await tcn(
          c,
          t,
          T,
          S.installPath,
          H,
          S.gitCommitSha,
          S.resolvedVersion,
          { sourceCommand: rC(f.source), sourceProducerPath: Q ?? S.sourceProducerPath },
          a,
        ),
          Wne();
      let V = `${v} is already at the latest version (${H}).`;
      return {
        outcome: "up_to_date",
        message: W ? `${V} Warning: ${W} \u2014 version shown may be stale.` : V,
        pluginId: c,
        newVersion: H,
        oldVersion: x,
        scope: t,
        refreshFailed: W !== void 0 ? !0 : void 0,
        refreshRefusedByPolicy: I || void 0,
      };
    }
    h = await ace(N, c, H, f, Re, { forceOverwrite: U, storageV5: a });
    let J = S.installPath;
    if (
      (await tcn(
        c,
        t,
        T,
        h,
        H,
        ke,
        M?.version,
        typeof f.source === "object" && f.source.source === "command"
          ? { sourceCommand: rC(f.source), sourceProducerPath: Q ?? S.sourceProducerPath }
          : void 0,
        a,
      ),
      Q !== void 0)
    )
      Wne();
    if (J && J !== h) {
      let V = O() && a !== void 0 ? await Iv(a) : oT();
      if (!Object.values(V.plugins).some((Z) => Z.some((Pe) => Pe.installPath === J))) await M7(J, a);
    }
    let ue = T ? `${t} (${T})` : t,
      fe =
        U && (x ?? "unknown") === "unknown"
          ? `Plugin "${v}" refreshed from source for scope ${ue}. Restart to apply changes.`
          : `Plugin "${v}" updated from ${x || "unknown"} to ${H}${z} for scope ${ue}. Restart to apply changes.`;
    return {
      outcome: "updated",
      message: W ? `${fe} Warning: ${W}.` : fe,
      pluginId: c,
      newVersion: H,
      oldVersion: x,
      scope: t,
      refreshFailed: W !== void 0 ? !0 : void 0,
      refreshRefusedByPolicy: I || void 0,
    };
  } finally {
    let h = cF(c, H);
    if (ve && N !== h && !De(h).startsWith(De(N) + Ue)) await ne.rm(N, { recursive: !0, force: !0 });
  }
}
async function uke(e, t, s) {
  let i = t ?? (await Aqe(e, s))?.entry;
  if (!i || typeof i.source !== "object" || i.source.source !== "archive") return null;
  if (Fd(e)) return null;
  let r = await cc(s),
    o = ND(e);
  if (o !== void 0 && hI(r[o]?.source)) return null;
  let d = AX(e, r),
    P;
  try {
    P = Yte({ entry: i, archiveUrl: i.source.url, marketplaceSource: d, trustedSettingsEntryAuth: ete(o, i.name) });
  } catch (a) {
    if (a instanceof kF) return null;
    throw a;
  }
  if (ufn(d, o)) return null;
  return Yze(P, i.source.url);
}
function M0t(e) {
  let t = OXe(e);
  return (
    `Fetching this plugin's archive sends helper-minted headers to ${t.destination}; ` +
    (t.hiddenCharactersWarning ? `WARNING: ${t.hiddenCharactersWarning} ` : "") +
    `the local command it runs (headersHelper) is: ${t.command}`
  );
}
function qe(e, t, s) {
  let i = H2(t);
  if (!i || !s || s.length === 0 || aue()) return;
  let r = rC(i);
  return {
    kind: "recorded",
    command:
      s.find((d) => d.sourceCommand === r)?.sourceCommand ?? s.find((d) => d.sourceCommand !== void 0)?.sourceCommand,
    pluginId: e,
  };
}
async function N0t(e, t) {
  let s = await zl(t),
    i;
  for (let [r, o] of Object.entries(s)) {
    if (!Ip(o.source)) continue;
    try {
      let P = (await Hv(r, t)).plugins.find((a) => a.name === e);
      if (P) return { entry: P, marketplace: r, marketplaceInstallLocation: o.installLocation };
    } catch (d) {
      if (d instanceof Ys) {
        i ??= d;
        continue;
      }
      n(`Failed to load marketplace "${r}" while searching for plugin "${e}": ${l(d)}`, { level: "error" });
    }
  }
  if (i !== void 0) throw i;
  return;
}
async function Ge(e, t) {
  return t === void 0 || (await VDe(e, t));
}
function he(e, t, s) {
  return Qe(ye(Gv(e))?.enabledPlugins, t, s);
}
function Ye() {
  let e = new Map();
  return (t) => {
    let s = e.get(t);
    if (s === void 0) (s = Kgn(t)), e.set(t, s);
    return s;
  };
}
function Qe(e, t, s) {
  if (!e) return;
  let i = DTe(t) ? s(e).byFold.get(fp(t))?.key : NI(Object.keys(e), t);
  return i === void 0 ? void 0 : { key: i, value: e[i] };
}
function Xe(e, t, s) {
  let i;
  for (let P of Ze) {
    let a = he(P, e, s);
    if (a !== void 0) {
      i = { scope: P, ...a };
      break;
    }
  }
  let r = mWn(e),
    o = OTe(
      e,
      r.map(({ record: P }) => (P === void 0 ? void 0 : s(P))),
    ),
    d = o === void 0 ? void 0 : r[o.index]?.source;
  return {
    found: i,
    atRequested: t === void 0 ? void 0 : he(t, e, s),
    override:
      o !== void 0 && (d === "policySettings" || d === "flagSettings")
        ? { source: d, enabling: o.enabled, key: o.key }
        : void 0,
    decidingScope: d === "localSettings" || d === "projectSettings" || d === "userSettings" ? JOe[d] : void 0,
    effective: o?.enabled,
  };
}
var Ze = [...ZU].sort((e, t) => ae[t] - ae[e]);
function Oe(e, t, s, i) {
  let r = Vy(i, e) ? "" : ` via its legacy "${Oo(i)}" entry`,
    o = r ? ` (remove that entry, or add "${e}": true beside it)` : "";
  if (s === "policySettings")
    return {
      success: !1,
      message: t
        ? `Plugin "${e}" is blocked by your organization's policy${r} and cannot be enabled here \u2014 ask an admin${o}`
        : `Plugin "${e}" is turned on by your organization's managed settings and cannot be disabled here`,
    };
  return {
    success: !1,
    message: t
      ? `Plugin "${e}" is turned off by this session's --settings flag${r}, which overrides your settings files. Change it in --settings to enable it${o}.`
      : `Plugin "${e}" is turned on by this session's --settings flag, which overrides your settings files. Remove it from --settings to disable it.`,
  };
}
function Je(e, t) {
  if (!IS(e)) return;
  let s = new Set(xi());
  for (let i of ["policySettings", "flagSettings"]) {
    if (!s.has(i)) continue;
    let r = ye(i)?.enabledPlugins?.[e];
    if (r === void 0) continue;
    return (r === !0) === t ? void 0 : i;
  }
  return;
}
function Ae(e, t) {
  let s = Object.keys(e ?? {});
  if (!DTe(t)) return s.filter((r) => r === t);
  let i = fp(t);
  return s.filter((r) => fp(r) === i);
}
function Me(e, t, s, i, r) {
  let o = { ...i, [t]: s };
  return Os(
    e,
    (d) => ({
      enabledPlugins: {
        ...d?.enabledPlugins,
        ...Object.fromEntries(
          Object.keys(o).flatMap((P) =>
            Ae(d?.enabledPlugins, P)
              .filter((a) => a !== P)
              .map((a) => [a, void 0]),
          ),
        ),
        ...o,
      },
    }),
    void 0,
    r,
  );
}
function Ve(e, t) {
  return Fe(e, t, void 0).map(({ record: s }) => s);
}
function Fe(e, t, s) {
  return en.map((i) => {
    let r = ye(i)?.enabledPlugins;
    if (i !== e) return { source: i, record: r };
    let o = Ul(r ?? {}, Ae(r, t));
    return { source: i, record: s === void 0 ? o : { ...o, [t]: s } };
  });
}
var en = [...Is].reverse();
var eB = "claude-cli";
function xe(e, { allowNewlineAndTab: t = !1 } = {}) {
  for (let s = 0; s < e.length; s++) {
    let i = e.charCodeAt(s);
    if (i <= 31 || (i >= 127 && i <= 159)) {
      if (t && (i === 10 || i === 9)) continue;
      return !0;
    }
  }
  return !1;
}
var nn = /^[\w.-]+\/[\w.-]+$/,
  Ne = 5000,
  Be = 4096;
function AXt(e) {
  if (Bn(e) || ns(e)) throw Error(`Invalid cwd in deep link: UNC / network paths are not supported, got "${e}"`);
  if (!e.startsWith("/") && !/^[a-zA-Z]:[/\\]/.test(e))
    throw Error(`Invalid cwd in deep link: must be an absolute path, got "${e}"`);
  if (xe(e)) throw Error("Deep link cwd contains disallowed control characters");
  if (
    /(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Default_Ignorable_Code_Point}\u2028\u2029\u2800\uFFF9-\uFFFB\u{1D173}-\u{1D17A}]/u.test(
      e,
    )
  )
    throw Error("Deep link cwd contains invisible or bidirectional control characters");
  if (e.length > Be) throw Error(`Deep link cwd exceeds ${Be} characters (got ${e.length})`);
}
function CXt(e) {
  let t = QCn(e).replace(
    /\r\n?/g,
    `
`,
  );
  if (xe(t, { allowNewlineAndTab: !0 })) throw Error("Deep link query contains disallowed control characters");
  if (t.length > Ne) throw Error(`Deep link query exceeds ${Ne} characters (got ${t.length})`);
  return t;
}
function IMn(e) {
  let t = e.startsWith(`${eB}://`) ? e : e.startsWith(`${eB}:`) ? e.replace(`${eB}:`, `${eB}://`) : null;
  if (!t) throw Error(`Invalid deep link: expected ${eB}:// scheme, got "${e}"`);
  let s;
  try {
    s = new URL(t);
  } catch {
    throw Error(`Invalid deep link URL: "${e}"`);
  }
  if (s.hostname !== "open") throw Error(`Unknown deep link action: "${s.hostname}"`);
  let i = s.searchParams.get("cwd") ?? void 0,
    r = s.searchParams.get("repo") ?? void 0,
    o = s.searchParams.get("q");
  if (i) AXt(i);
  if (r && !nn.test(r)) throw Error(`Invalid repo in deep link: expected "owner/repo", got "${r}"`);
  let d;
  if (o && o.trim().length > 0) d = CXt(o.trim());
  return { query: d, cwd: i, repo: r };
}
export {
  vMn,
  rse,
  ske,
  ZU,
  jBe,
  WBe,
  qBe,
  RMn,
  kMn,
  GBe,
  ake,
  L0t,
  EXt,
  HMn,
  bq,
  lke,
  cke,
  xMn,
  hge,
  uke,
  M0t,
  N0t,
  eB,
  AXt,
  CXt,
  IMn,
};
