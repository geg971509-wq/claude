// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { ZTe } from "/$bunfs/root/chunk-5n1tbe50.js";
import { EX, Yte, AX, ND } from "/$bunfs/root/chunk-fctnm902.js";
import { Ip } from "/$bunfs/root/chunk-e53y7x75.js";
import { fye, DB, IWn, ete, cc, TE, xv, vqe, is } from "/$bunfs/root/chunk-zze8764r.js";
import { Vt, Gv } from "/$bunfs/root/chunk-x06p1jhb.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
var k = ["user", "project", "local"];
async function sB(a, r) {
  let t = new Map();
  for (let e of a) {
    if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found") continue;
    let c = t.get(e.dependency);
    if (!c) (c = new Set()), t.set(e.dependency, c);
    c.add(e.source);
  }
  if (t.size === 0) return { installed: [], stillUnresolved: [], marketplaceMissing: [] };
  let s = await cc(r),
    f = k.map((e) => [e, fye(Gv(e))]),
    g = [],
    i = [],
    d = [];
  for (let [e, c] of t) {
    let u = Vt(e).marketplace;
    if (!u || !s[u]) {
      i.push(e), d.push(e);
      continue;
    }
    if (!Ip(s[u].source)) {
      n(`resolveMissingDependencies: skipping "${e}" \u2014 marketplace "${u}" is blocked by enterprise policy`),
        i.push(e);
      continue;
    }
    let y = !1;
    for (let o of c) {
      let p = Vt(o).marketplace;
      if (p === u) {
        y = !0;
        break;
      }
      if (!p) continue;
      if ((await TE(p, r))?.allowCrossMarketplaceDependenciesOn?.includes(u)) {
        y = !0;
        break;
      }
    }
    if (!y) {
      n(
        `resolveMissingDependencies: skipping "${e}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`,
      ),
        i.push(e);
      continue;
    }
    try {
      let o = await xv(e, r);
      if (!o) {
        i.push(e);
        continue;
      }
      let p = o.entry.source;
      if (
        typeof p === "object" &&
        p.source === "archive" &&
        EX(
          Yte({
            entry: o.entry,
            archiveUrl: p.url,
            marketplaceSource: AX(e, s),
            trustedSettingsEntryAuth: ete(ND(e), o.entry.name),
          }).entry,
        )
      ) {
        n(
          `resolveMissingDependencies: skipping "${e}" \u2014 it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`,
        ),
          i.push(e);
        continue;
      }
      let m = v(c, f),
        S = await vqe({
          pluginId: e,
          entry: o.entry,
          scope: m ?? "user",
          marketplaceInstallLocation: o.marketplaceInstallLocation,
          trigger: "dependency-resolution",
          explicit: !1,
          auto: m !== void 0,
          requiredByEnabledDependent: !0,
          storageV5: r,
        });
      if (S.ok) {
        for (let h of S.closure) if (!g.includes(h)) g.push(h);
      } else
        n(`resolveMissingDependencies: install of "${e}" did not complete (${S.reason})`, { level: "warn" }), i.push(e);
    } catch (o) {
      n(`resolveMissingDependencies: install of "${e}" threw: ${l(o)}`, { level: "warn" }), i.push(e);
    }
  }
  return { installed: g, stillUnresolved: i, marketplaceMissing: d };
}
async function JYt(a, r) {
  let { errors: t } = await is(r);
  return t.filter(ZTe).filter((s) => s.source === a);
}
async function Bke(a, r) {
  let t = await JYt(a, r);
  if (t.length === 0) return null;
  let { installed: s, marketplaceMissing: f } = await sB(t, r),
    g = new Set(s),
    i = te(t.map((d) => d.dependency)).filter((d) => !g.has(d));
  return { suffix: `${DB(s)}${IWn(i, f)}`, changed: s.length > 0 };
}
function v(a, r) {
  for (let [t, s] of r) for (let f of a) if (s.has(f)) return t;
  return;
}
export { sB, JYt, Bke };
