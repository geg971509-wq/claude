// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { l, X } from "/$bunfs/root/chunk-ypdw393e.js";
import { an } from "/$bunfs/root/chunk-c47snwm2.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { b, Uf, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { goe, vAn, uCe, AO } from "/$bunfs/root/chunk-z2bvp3sv.js";
import { bw, qY } from "/$bunfs/root/chunk-6k63g5t6.js";
import { ye } from "/$bunfs/root/chunk-988p40e0.js";
import { Is, xi, BH } from "/$bunfs/root/chunk-0spqrdaj.js";
import { To } from "/$bunfs/root/chunk-1v3848mh.js";
import { IL, IS, LSe, cc, $7, s2, AD } from "/$bunfs/root/chunk-zze8764r.js";
import { CC } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Xte, ag } from "/$bunfs/root/chunk-fctnm902.js";
import { wz, XDe, Ip } from "/$bunfs/root/chunk-e53y7x75.js";
import { Nm, nu, Uh, Ud } from "/$bunfs/root/chunk-x06p1jhb.js";
import { nse, hMn } from "/$bunfs/root/chunk-wzjbqwty.js";
import { i, f, oe, N } from "/$bunfs/root/chunk-saay52v7.js";
import { ffe } from "/$bunfs/root/chunk-3s6zpzqb.js";
import { He } from "/$bunfs/root/chunk-79g5tayq.js";
import { Q, te } from "/$bunfs/root/chunk-wag5ye9w.js";
import { hostname as G } from "os";
import { dirname as H, join as Z } from "path";
var W = m(() => f({ version: N(1), choice: oe(["accepted", "declined"]), decidedAt: i(), hostname: i() })),
  A = "cloud-plugins-consent";
function E() {
  return Te.state(A);
}
function vQ() {
  return Z(be(), "state", `${A}.json`);
}
async function v(e) {
  let t;
  try {
    t = await e.readText();
  } catch (r) {
    return n(`cloud-plugins consent: store unreadable (${l(r)})`, { level: "warn" }), "unreadable";
  }
  if (t === void 0) return "unset";
  try {
    let r = W().safeParse(V(t));
    return r.success && r.data.hostname === e.hostname() ? r.data.choice : "unset";
  } catch {
    return "unset";
  }
}
async function Y(e) {
  let t = await v(e);
  return t === "unreadable" ? "unset" : t;
}
function q(e, t) {
  return t === "declined" || (t === "unset" && e) ? "declined" : "accepted";
}
async function pMn(e, t) {
  try {
    return (
      await t.writeText(
        b({ version: 1, choice: e, decidedAt: t.now().toISOString(), hostname: t.hostname() }, null, 2) +
          `
`,
      ),
      true
    );
  } catch (r) {
    return n(`cloud-plugins consent: answer not saved (${l(r)})`, { level: "warn" }), false;
  }
}
function pge(e) {
  return {
    readText: async () => {
      if (e) {
        let t = await e.readText([E()]);
        if (!t.ok) throw Error("cloud-plugins consent read failed");
        let r = t.value.items[0];
        return r.found ? r.value : void 0;
      }
      try {
        return await an().read(vQ());
      } catch (t) {
        if (X(t)) return;
        throw t;
      }
    },
    writeText: async (t) => {
      if (e) {
        if (!(await e.write(E(), t, { mode: 384 })).ok) throw Error("cloud-plugins consent write failed");
        return;
      }
      let r = vQ();
      await an().mkdir(H(r), 448), await an().atomicWrite(r, t, 384);
    },
    now: () => new Date(),
    hostname: G,
  };
}
function fMn() {
  return { value: null, persisted: false, given: false };
}
async function tse(e, t, r) {
  let { answer: s, given: a } = await J(e, t);
  if (s !== "accepted" || a || r === void 0 || !(await r.storeUntrusted().catch(() => true))) return s;
  return ee(r.onUntrusted), "unset";
}
async function J(e, t) {
  let r = false;
  if (e.value === null) (r = true), (e.value = Y(t).then((P) => ((e.persisted = P !== "unset"), P))), (e.given = false);
  let { value: s, given: a } = e,
    d = await s;
  if (d !== "accepted" || r) return { answer: d, given: a };
  let p = await v(t),
    c = e.value,
    o = e.given;
  if (c !== null && c !== s) return { answer: await c, given: o };
  if (p === "accepted") e.persisted = true;
  let u = q(e.persisted, p);
  if (u === "declined") return (e.value = Promise.resolve(u)), (e.given = false), { answer: u, given: false };
  return { answer: u, given: a };
}
function ee(e) {
  try {
    e?.();
  } catch (t) {
    n(`cloud-plugins consent: callback failed (${l(t)})`, { level: "warn" });
  }
}
var L = ["userSettings", "projectSettings", "localSettings", "flagSettings"],
  ne = new Set(["userSettings", "flagSettings"]),
  re = Is.toReversed(),
  ie = 200,
  se = 32,
  C = 2000,
  ae = 256,
  le = 1024,
  ce = 140,
  de = 128,
  ue = 256,
  pe = 16,
  fe = 128,
  ge = 262144,
  _e = new Set([ag, "claude-code-marketplace"]),
  me = new Set(["https:", "ssh:", "git+ssh:", "git+https:"]),
  T = new Set(["http:", "git:", "git+http:"]),
  ke = new Set(["ssh:", "git+ssh:"]),
  Pe = new Set(["https:"]),
  Se = /^[\x21-\x7e]+$/,
  we = /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\/[A-Za-z0-9._-]+$/,
  Re = /^(?:([A-Za-z0-9][A-Za-z0-9._-]*)@)?(\[[0-9A-Fa-f:.]+\]|[A-Za-z0-9][A-Za-z0-9._-]*):(.*)$/,
  Ce = /^[A-Za-z0-9][A-Za-z0-9+.-]*::/,
  he = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+-]*$/,
  Ee = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+ -]*$/,
  D = /(?:^|[/:])\.\.(?:$|[/?#;])/,
  I = /%2e|%2f|%5c|%3b|%3f|%23|\\/i,
  Ae = /^[^:]*:\/\/[^/?#]*%/,
  ve = [
    "invalid_id",
    "invalid_value",
    "directory_loaded",
    "unknown_builtin",
    "ambiguous_marketplace",
    "blocked_by_policy",
    "not_installed_here",
    "unknown_marketplace",
    "untrusted_for_folder",
    "reserved_name_conflict",
    "not_provided_by_container",
    "local_marketplace",
    "needs_credentials",
    "insecure_transport",
    "invalid_marketplace",
    "over_cap",
    "guard_builtin_not_own_choice",
  ];
function ZRe(e) {
  let t = qe(),
    r = [],
    s = new Map(),
    a = [],
    d = xe(e),
    p = { byPolicy: M(e.policyRefusedMarketplaces), asReserved: M(e.reservedNameConflicts) };
  for (let [g, _] of [...Le(e, t)].sort(([S], [y]) => w(S, y))) {
    let S = Ud(g) ?? "",
      y = s.get(S) ?? je(S, e, p);
    s.set(S, y);
    let R = Ne(g, _, S, y, d, e);
    if (R !== void 0) {
      if ((t[R]++, R !== "directory_loaded")) r.push({ id: g, reason: R });
      continue;
    }
    a.push({
      id: g,
      value: _.value === true,
      ownMention: _.ownMention,
      marketplace: S,
      declaration: y.kind === "declare" && _.value === true ? y.source : void 0,
    });
  }
  let c = We(Ve(a, t, r), t, r),
    o = {
      enabledPlugins: Object.fromEntries(c.map(({ id: g, value: _ }) => [g, _])),
      extraKnownMarketplaces: Object.fromEntries(
        c
          .flatMap(({ marketplace: g, declaration: _ }) => (_ === void 0 ? [] : [[g, { source: _ }]]))
          .sort(([g], [_]) => w(g, _)),
      ),
    },
    u = {
      forwarded: c.length,
      forwardedDisabled: Q(c, ({ value: g }) => !g),
      marketplacesDeclared: Object.keys(o.extraKnownMarketplaces).length,
      dropped: t,
    };
  r.sort((g, _) => w(g.id, _.id));
  let P = De(e)
    ? "over_read_cap"
    : !bw().safeParse(o).success
      ? "schema_rejected"
      : Buffer.byteLength(Me(o), "utf8") > ge
        ? "too_large"
        : void 0;
  if (P !== void 0)
    return {
      patch: { enabledPlugins: {}, extraKnownMarketplaces: {} },
      dropped: [...r, ...c.map(({ id: g }) => ({ id: g, reason: "over_cap" }))].sort((g, _) => w(g.id, _.id)),
      counts: {
        forwarded: 0,
        forwardedDisabled: 0,
        marketplacesDeclared: 0,
        dropped: { ...t, over_cap: t.over_cap + c.length },
      },
      refusedWhole: P,
    };
  return { patch: o, dropped: r, counts: u };
}
function Me(e) {
  return b(qY(e));
}
function mMn(e) {
  return {
    forwarded: e.forwarded,
    forwarded_disabled: e.forwardedDisabled,
    marketplaces_declared: e.marketplacesDeclared,
    ...Object.fromEntries(ve.map((t) => [`dropped_${t}`, e.dropped[t]])),
  };
}
function Oe(e, t) {
  if (!He(t)) return { kind: "drop", reason: "invalid_marketplace" };
  switch (k(t, "source")) {
    case "github":
      return Ke(e, t);
    case "git":
      return Ue(e, t);
    case "url":
      return ze(e, t);
    case "directory":
    case "file":
    case "npm":
    case "settings":
      return { kind: "drop", reason: "local_marketplace" };
    default:
      return { kind: "drop", reason: "invalid_marketplace" };
  }
}
function Le(e, t) {
  let r = new Map(),
    s = new Set();
  for (let a of L) {
    let d = e.enabledPluginsByTier[a];
    if (!He(d)) continue;
    let p = ne.has(a) || (a === "localSettings" && e.localSettingsAreOwnChoice),
      c = Object.keys(d);
    t.over_cap += Math.max(0, c.length - C);
    for (let o of c.slice(0, C)) {
      let u = d[o];
      if (u === void 0) continue;
      if (!IL.includes(a) && e.trustedOnlyBuiltinIds.has(o.toLowerCase())) {
        t.guard_builtin_not_own_choice++;
        continue;
      }
      if (!Ie(o)) {
        s.add(o);
        continue;
      }
      let P = r.get(o);
      r.set(o, {
        value: u,
        ownChoice: (P?.ownChoice ?? false) || (p && u === true),
        ownMention: (P?.ownMention ?? false) || (p && typeof u === "boolean"),
      });
    }
  }
  return (t.invalid_id += s.size), r;
}
function De(e) {
  return L.some((t) => {
    let r = e.enabledPluginsByTier[t];
    return He(r) && Object.keys(r).length > C;
  });
}
function Ie(e) {
  return e.length <= ae && AO().safeParse(e).success;
}
function Ne(e, t, r, s, a, { installedPluginIds: d, builtinPluginIds: p, directoryPluginsAllowedByPolicy: c }) {
  let o = r.toLowerCase();
  if (o === Nm) return "directory_loaded";
  if (typeof t.value !== "boolean") return "invalid_value";
  if (o === nu && !c) return "blocked_by_policy";
  if (o === Uh && !p.has(e)) return "unknown_builtin";
  if (t.value && a.has(e.toLowerCase())) return "blocked_by_policy";
  if (s.kind === "drop" && t.value) return s.reason;
  if (t.value && !t.ownChoice && !d.has(e) && o !== Uh && o !== nu) return "not_installed_here";
  return;
}
function xe({ enabledPluginsByTier: e }) {
  let t = e.policySettings;
  return new Set(
    He(t)
      ? Object.keys(t)
          .filter((r) => t[r] === false)
          .map((r) => r.toLowerCase())
      : [],
  );
}
function M(e) {
  return new Set([...e].map((t) => t.toLowerCase()));
}
function je(e, t, r) {
  let s = e.toLowerCase();
  if (s === Uh || s === nu) return { kind: "reserved" };
  if (r.byPolicy.has(s)) return { kind: "drop", reason: "blocked_by_policy" };
  let a = Fe(e, t),
    d = goe.has(s);
  if (a === void 0 && t.marketplaceRestrictionPolicyActive && s !== ag)
    return { kind: "drop", reason: d ? "blocked_by_policy" : O(e, t) };
  if (d)
    return r.asReserved.has(s)
      ? { kind: "drop", reason: "reserved_name_conflict" }
      : _e.has(s)
        ? { kind: "reserved" }
        : { kind: "drop", reason: "not_provided_by_container" };
  if (vAn(e)) return { kind: "drop", reason: "reserved_name_conflict" };
  if (a === void 0) return { kind: "drop", reason: O(e, t) };
  return Oe(e, a);
}
function O(e, t) {
  return Be(e, t) ? "untrusted_for_folder" : "unknown_marketplace";
}
function Fe(e, t) {
  let r = He(t.registeredMarketplaces) ? k(t.registeredMarketplaces, e) : void 0;
  if (r !== void 0) return He(r) ? (k(r, "source") ?? null) : null;
  for (let s of re) {
    if (BH.has(s) && !t.folderTrustedForProjectPlugins) continue;
    let a = x(t, s, e);
    if (a !== void 0) return He(a) ? (k(a, "source") ?? null) : null;
  }
  return;
}
function Be(e, t) {
  return !t.folderTrustedForProjectPlugins && [...BH].some((r) => x(t, r, e) !== void 0);
}
function x(e, t, r) {
  let s = e.declaredMarketplacesByTier[t];
  return He(s) ? k(s, r) : void 0;
}
function Ke(e, t) {
  let r = k(t, "repo");
  if (typeof r !== "string" || r.length > ce || !we.test(r) || r.split("/").some(K))
    return { kind: "drop", reason: "invalid_marketplace" };
  let s = F(t);
  return s === void 0 ? { kind: "drop", reason: "invalid_marketplace" } : h(e, { source: "github", repo: r, ...s });
}
function Ue(e, t) {
  let r = k(t, "url"),
    s = j(r);
  if (s === void 0) return { kind: "drop", reason: "invalid_marketplace" };
  let a = Xe(s);
  if (a !== "network") return { kind: "drop", reason: a };
  let d = F(t);
  return d === void 0 ? { kind: "drop", reason: "invalid_marketplace" } : h(e, { source: "git", url: s, ...d });
}
function ze(e, t) {
  let r = j(k(t, "url"));
  if (r === void 0) return { kind: "drop", reason: "invalid_marketplace" };
  let s = k(t, "headers");
  if (k(t, "headersHelper") !== void 0 || (s !== void 0 && !(He(s) && Object.keys(s).length === 0)))
    return { kind: "drop", reason: "needs_credentials" };
  let a = U(r, Pe);
  return a === "network" ? h(e, { source: "url", url: r }) : { kind: "drop", reason: a };
}
function j(e) {
  return typeof e === "string" && e.length > 0 && e.length <= le && Se.test(e) ? e : void 0;
}
function F(e) {
  let t = k(e, "ref"),
    r = k(e, "path"),
    s = k(e, "sparsePaths"),
    a = k(e, "skipLfs");
  if (
    (t !== void 0 && !Ge(t)) ||
    (r !== void 0 && !$e(r)) ||
    (s !== void 0 && !Ze(s)) ||
    (a !== void 0 && typeof a !== "boolean")
  )
    return;
  return {
    ...(t !== void 0 && { ref: t }),
    ...(r !== void 0 && { path: r }),
    ...(s !== void 0 && { sparsePaths: s }),
    ...(a !== void 0 && { skipLfs: a }),
  };
}
function Ge(e) {
  return typeof e === "string" && e.length <= de && he.test(e) && !e.split("/").some(K);
}
function $e(e) {
  return typeof e === "string" && e.length <= ue && B(e);
}
function Ze(e) {
  return Array.isArray(e) && e.length <= pe && e.every((t) => typeof t === "string" && t.length <= fe && B(t));
}
function B(e) {
  return Ee.test(e) && !e.startsWith("/") && !e.split("/").some((t) => t === "..");
}
function K(e) {
  return e === "." || e === "..";
}
function h(e, t) {
  return bw().shape.extraKnownMarketplaces.safeParse({ [e]: { source: t } }).success
    ? { kind: "declare", source: t }
    : { kind: "drop", reason: "invalid_marketplace" };
}
function Xe(e) {
  if (e.startsWith("-") || Ce.test(e) || ffe(e)) return "invalid_marketplace";
  if (e.includes("://")) return U(e, me);
  if (/^[A-Za-z]:[\\/]/.test(e) || /^[./~]/.test(e)) return "local_marketplace";
  let t = Re.exec(e);
  if (t === null) return "invalid_marketplace";
  let [, , r = "", s = ""] = t;
  if (s.length === 0 || /^[-:]/.test(s) || D.test(s) || I.test(s)) return "invalid_marketplace";
  if (/[?#]/.test(s)) return "needs_credentials";
  return z(r) ? "local_marketplace" : "network";
}
function U(e, t) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return "invalid_marketplace";
  }
  if (r.protocol === "file:") return "local_marketplace";
  if (
    !(t.has(r.protocol) || T.has(r.protocol)) ||
    Ae.test(e) ||
    r.hostname === "" ||
    /^\[?-/.test(r.hostname) ||
    r.username.startsWith("-")
  )
    return "invalid_marketplace";
  if (
    r.password !== "" ||
    (r.username !== "" && !ke.has(r.protocol)) ||
    r.search !== "" ||
    r.hash !== "" ||
    e.includes("?") ||
    e.includes("#")
  )
    return "needs_credentials";
  if (z(r.hostname)) return "local_marketplace";
  if (D.test(e) || I.test(e)) return "invalid_marketplace";
  return T.has(r.protocol) ? "insecure_transport" : "network";
}
function z(e) {
  return hMn(e, "address") || nse(e) || !/[.:]/.test(e.replace(/\.+$/, ""));
}
function Ve(e, t, r) {
  let s = new Map();
  for (let { marketplace: a, declaration: d } of e)
    if (d !== void 0) {
      let p = a.toLowerCase(),
        c = s.get(p) ?? new Set();
      c.add(Uf(qY(d))), s.set(p, c);
    }
  return e.filter(({ id: a, marketplace: d, declaration: p }) => {
    if (p === void 0 || (s.get(d.toLowerCase())?.size ?? 0) <= 1) return true;
    return t.ambiguous_marketplace++, r.push({ id: a, reason: "ambiguous_marketplace" }), false;
  });
}
function We(e, t, r) {
  let s = new Set(Ye(e).slice(0, se)),
    a = e.filter(({ declaration: c, marketplace: o }) => c === void 0 || s.has(o)),
    d = [
      ...a.filter(({ value: c, ownMention: o }) => o && !c),
      ...a.filter(({ value: c, ownMention: o }) => o && c),
      ...a.filter(({ value: c, ownMention: o }) => !o && c),
      ...a.filter(({ value: c, ownMention: o }) => !o && !c),
    ]
      .slice(0, ie)
      .sort((c, o) => w(c.id, o.id)),
    p = new Set(d.map(({ id: c }) => c));
  for (let { id: c } of e) if (!p.has(c)) t.over_cap++, r.push({ id: c, reason: "over_cap" });
  return d;
}
function Ye(e) {
  let t = e.filter(({ declaration: a }) => a !== void 0),
    r = te(t.filter(({ ownMention: a }) => a).map(({ marketplace: a }) => a)).sort(),
    s = new Set(r);
  return [
    ...r,
    ...te(t.map(({ marketplace: a }) => a))
      .filter((a) => !s.has(a))
      .sort(),
  ];
}
function w(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function qe() {
  return {
    invalid_id: 0,
    invalid_value: 0,
    directory_loaded: 0,
    unknown_builtin: 0,
    ambiguous_marketplace: 0,
    blocked_by_policy: 0,
    not_installed_here: 0,
    unknown_marketplace: 0,
    untrusted_for_folder: 0,
    reserved_name_conflict: 0,
    not_provided_by_container: 0,
    local_marketplace: 0,
    needs_credentials: 0,
    insecure_transport: 0,
    invalid_marketplace: 0,
    over_cap: 0,
    guard_builtin_not_own_choice: 0,
  };
}
function k(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0;
}
async function unt(e) {
  let t = xi().map((o) => [o, ye(o)]),
    [r, s] = await Promise.all([cc(e), s2(e)]),
    a = LSe(),
    d = t
      .filter(([o]) => a || !BH.has(o))
      .flatMap(([, o]) => Object.entries(o?.extraKnownMarketplaces ?? {}).map(([u, { source: P }]) => [u, P])),
    p = [...d, ...Object.entries(r).map(([o, { source: u }]) => [o, u]), [ag, Xte]],
    c = t.find(([o]) => o === "localSettings")?.[1]?.enabledPlugins;
  return {
    enabledPluginsByTier: Object.fromEntries(t.map(([o, u]) => [o, u?.enabledPlugins])),
    declaredMarketplacesByTier: Object.fromEntries(t.map(([o, u]) => [o, u?.extraKnownMarketplaces])),
    registeredMarketplaces: r,
    folderTrustedForProjectPlugins: a,
    localSettingsAreOwnChoice: !(He(c) && Object.keys(c).length > 0) || !CC({ onIndeterminate: "tracked" }),
    directoryPluginsAllowedByPolicy: wz(),
    builtinPluginIds: new Set([...To().builtinPlugins.keys()].map((o) => `${o}@${Uh}`)),
    trustedOnlyBuiltinIds: new Set(
      [...To().builtinPlugins.keys()]
        .map((o) => `${o}@${Uh}`)
        .filter(IS)
        .map((o) => o.toLowerCase()),
    ),
    installedPluginIds: new Set(
      Object.entries(s.plugins)
        .filter(([, o]) => o.some(AD))
        .map(([o]) => o),
    ),
    policyRefusedMarketplaces: new Set(p.filter(([, o]) => !Ip(o)).map(([o]) => o)),
    marketplaceRestrictionPolicyActive: XDe(),
    reservedNameConflicts: new Set([
      ...Object.entries(r)
        .filter(([o, u]) => $7(o, u) !== null)
        .map(([o]) => o),
      ...d.filter(([o, u]) => !Object.hasOwn(r, o) && uCe(o, u) !== null).map(([o]) => o),
    ]),
  };
}
export { vQ, pMn, pge, fMn, tse, ZRe, mMn, unt };
