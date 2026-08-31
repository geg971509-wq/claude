// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { w, c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { l, X, Ht, Vp } from "/$bunfs/root/chunk-ypdw393e.js";
import { Ge, V, le, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { be, cme } from "/$bunfs/root/chunk-gcks6mn0.js";
import { St } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { Ofe, h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { d5e, Uht } from "/$bunfs/root/chunk-w3c6n7jh.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { wP } from "/$bunfs/root/chunk-nqmqabr8.js";
import { Lar, Zt, hS, Te, Nar } from "/$bunfs/root/chunk-jpf4kat5.js";
import { odn, Dce, Xi } from "/$bunfs/root/chunk-wn1jrcrk.js";
import { H$, Di } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { ms, Bm } from "/$bunfs/root/chunk-tzhtxm67.js";
import { bp, _J, sVt, qJe, qRn } from "/$bunfs/root/chunk-f5hrzy3k.js";
import { afe } from "/$bunfs/root/chunk-rgw52f13.js";
import { bfe, kar, IAt, HJe, RRn } from "/$bunfs/root/chunk-hyh5wcm1.js";
import { ye, En, aEn, K3, a0, PNe } from "/$bunfs/root/chunk-988p40e0.js";
import { _o, EEn, ioe } from "/$bunfs/root/chunk-0spqrdaj.js";
import { xTn } from "/$bunfs/root/chunk-amem41jf.js";
import { _h } from "/$bunfs/root/chunk-e7rq8w09.js";
import { Gi, CRn } from "/$bunfs/root/chunk-4rh74qms.js";
import { kst } from "/$bunfs/root/chunk-5jtfm06e.js";
import { dc } from "/$bunfs/root/chunk-5n1tbe50.js";
import { t6, NM, $ne, iV, oKe, zJn, VJn, sV, SLe, KJn } from "/$bunfs/root/chunk-2n1hsggr.js";
import { xl } from "/$bunfs/root/chunk-bp3j8sq3.js";
import { Ypn } from "/$bunfs/root/chunk-wjr8v4tx.js";
import { Exe, oin } from "/$bunfs/root/chunk-3483rs9f.js";
import { b3, yV, ni } from "/$bunfs/root/chunk-z15hpjf9.js";
import { n6n, LDt, eG } from "/$bunfs/root/chunk-dcss4tar.js";
import { HB, oD, NW, wG, $xe, N8, aNt, lNt, fct, mct, uan, dan } from "/$bunfs/root/chunk-zze8764r.js";
import { Nl } from "/$bunfs/root/chunk-c6k0ecxv.js";
import { CKe } from "/$bunfs/root/chunk-nkjrjh5n.js";
import { dKn } from "/$bunfs/root/chunk-p1awcxk1.js";
import { Dgn } from "/$bunfs/root/chunk-tz5bx4mb.js";
import { Hxe } from "/$bunfs/root/chunk-7rcn0da5.js";
import { Nlt } from "/$bunfs/root/chunk-debmm3sq.js";
import { AWe } from "/$bunfs/root/chunk-k7wn4k3f.js";
import { i, f } from "/$bunfs/root/chunk-saay52v7.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import * as x from "fs/promises";
import { homedir as _e } from "os";
import { basename as Z, dirname as ue, join as p } from "path";
var ne = 3,
  se = 3,
  z = 1;
import { lstat as Re, mkdir as Ye, realpath as He, rename as Ke, rm as ze } from "fs/promises";
async function Y(e) {
  let t;
  try {
    t = await Re(e);
  } catch (a) {
    if (X(a)) return null;
    throw a;
  }
  let r = process.getuid?.();
  return t.isDirectory() && (r === void 0 || t.uid === r) ? t : null;
}
var H = 30,
  Pe = 0,
  Ee = ["ccr-tip.json", "custom-title.json", "precompact.json", "sent-prefix.json", aNt];
function ae(e) {
  let t = hS(e);
  return Zt(e) && t.length === 1 && t[0] === e.toLowerCase() && RRn(e);
}
function Ce(e) {
  return (
    Ee.some((t) => e === t || wP(e, t)) ||
    (e.startsWith(lNt) && (e.endsWith(".json") || e.includes(".json.tmp."))) ||
    (e.startsWith(fct) && e.endsWith(".md"))
  );
}
async function vst(e) {
  if (!_o("userSettings") && En()?.cleanupPeriodDays === void 0)
    return (
      n(
        "Skipping retention cleanup: userSettings source is disabled (--setting-sources) and no enabled source provides cleanupPeriodDays.",
      ),
      "user_source_disabled"
    );
  if (ye("policySettings")?.cleanupPeriodDays !== void 0) return null;
  if (eG().errors.filter((r) => !r.mcpErrorMetadata && r.severity !== "warning").length > 0)
    for (let r of ioe) {
      let a = await PNe(
        r,
        e,
        r === "desktopSessionCleanupPeriodDays" ? { presenceSources: ["userSettings", "flagSettings"] } : void 0,
      );
      if (a === "unknowable")
        return (
          n(
            `Skipping cleanup: a settings file could not be read or parsed, so ${r} may be set to a value that cannot be seen. Fix the settings file (see /doctor) to re-enable cleanup.`,
          ),
          "settings_unknowable"
        );
      if (a === "present")
        return (
          n(
            `Skipping cleanup: settings have validation errors but ${r} was explicitly set. Fix settings errors to enable cleanup.`,
          ),
          "settings_invalid_key_set"
        );
    }
  return null;
}
async function UEr(e) {
  return (await vst(e)) === null;
}
function Db(e) {
  let r = (En() || {}).cleanupPeriodDays ?? H;
  if (r === 0) return null;
  if (e !== void 0 && e < r) r = e;
  let a = r * 24 * 60 * 60 * 1000;
  return new Date(Date.now() - a);
}
var U = ".desktop-released.json",
  Oe = 4096;
function J(e) {
  return e.slice(0, -6) + U;
}
var ve = m(() => f({ reason: i().optional() }));
async function ie(e, t, r) {
  let a = await t.readFileFdGated(e, Oe);
  if (a === null) return "none";
  let o;
  try {
    let u = ve().safeParse(V(a.content));
    o = u.success ? u.data.reason : void 0;
  } catch {
    return "none";
  }
  if (o === "delete") return "release-now";
  if (o === "archive") return a.stats.mtime < r ? "release-now" : "grace";
  return "none";
}
function Ie(e) {
  return /^[0-9A-Za-z_-]{1,64}$/.test(e);
}
function Fe() {
  let e = a0("desktopSessionCleanupPeriodDays")[0] ?? Pe;
  if (e === 0) return null;
  return new Date(Date.now() - e * 24 * 60 * 60 * 1000);
}
function Ae() {
  if (ye("policySettings")?.cleanupPeriodDays !== void 0) return !0;
  if (aEn()) return !0;
  return K3().some((e) => e.file !== EEn && (ioe.some((t) => t === e.path) || e.severity !== "warning"));
}
function e6n() {
  return Ae() || _h("hipaa") || _h("zdr");
}
function zw() {
  return { messages: 0, errors: 0, filesRetainedFresh: 0, filesPastCutoff: 0 };
}
function YP(e, t) {
  return {
    messages: e.messages + t.messages,
    errors: e.errors + t.errors,
    filesRetainedFresh: e.filesRetainedFresh + t.filesRetainedFresh,
    filesPastCutoff: e.filesPastCutoff + t.filesPastCutoff,
  };
}
function Qpr(e) {
  let t = St(e, ".").replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(t);
}
function u_e(e) {
  return Ht(e) || Vp(e);
}
async function oe(e, t, r) {
  let a = zw();
  try {
    let o = await le().readdir(e);
    for (let u of o)
      try {
        if (Qpr(u.name) < t)
          if ((await le().unlink(p(e, u.name)), r)) a.messages++;
          else a.errors++;
      } catch (d) {
        n(`Failed to clean up file ${u.name} in ${e}: ${d}`, { level: "error" });
      }
  } catch (o) {
    if (X(o));
    else if (u_e(o)) n(`cleanup readdir ${e} failed: ${o.code}`, { level: "error" });
    else h(o);
  }
  return a;
}
async function Zpr() {
  let e = le(),
    t = Db();
  if (t === null) return zw();
  let r = Ofe.errors(),
    a = Ofe.baseLogs(),
    o = await oe(r, t, !1);
  try {
    let u;
    try {
      u = await e.readdir(a);
    } catch {
      return o;
    }
    let d = u.filter((y) => y.isDirectory() && y.name.startsWith("mcp-logs-")).map((y) => p(a, y.name));
    for (let y of d) (o = YP(o, await oe(y, t, !0))), await I(y, e);
  } catch (u) {
    if (X(u));
    else if (u_e(u)) n(`cleanup mcp-logs scan failed: ${u.code}`, { level: "error" });
    else h(u);
  }
  return o;
}
async function F(e, t, r, a, o = t, u) {
  let d;
  try {
    d = await r.stat(e);
  } catch (y) {
    if (X(y)) return !1;
    throw y;
  }
  if (!(d.mtime < t)) return a.filesRetainedFresh++, !1;
  if (u !== void 0 && (await u(e, d))) return !1;
  try {
    await r.unlink(e);
  } catch (y) {
    if (X(y)) return !1;
    if (d.mtime < o) a.filesPastCutoff++;
    throw y;
  }
  return !0;
}
async function I(e, t) {
  try {
    await t.rmdir(e);
  } catch {}
}
var q = [kar, IAt];
async function xe(e, t, r, a) {
  try {
    for (let g of q) await fe(p(e, g), t, r, a);
    let o = (await r.readdir(e)).filter((g) => !q.includes(g.name)),
      u = null;
    for (let g of o) {
      let D = p(e, g.name),
        S =
          (await Q(g, D, r)) === "directory" ? await G(D, r, { requireCompleteWalk: !0 }) : (await r.lstat(D)).mtimeMs;
      if (S !== null) u = Math.max(u ?? -1 / 0, S);
    }
    if (!((u ?? (await pe(e, r))) < t.getTime())) return;
    if (
      (
        await Promise.all(
          q.map((g) =>
            r.lstat(p(e, g)).then(
              (D) => D.isDirectory(),
              (D) => {
                if (X(D)) return !1;
                throw D;
              },
            ),
          ),
        )
      ).includes(!0)
    ) {
      for (let g of o) await r.rm(p(e, g.name), { recursive: !0, force: !0 });
      if (o.length > 0) a.messages++;
      return;
    }
    await r.rm(e, { recursive: !0, force: !0 }), a.messages++;
  } catch (o) {
    if (!X(o)) a.errors++;
  }
}
async function fe(e, t, r, a) {
  if (!(await L(e, r))) return;
  let o = await r.readdir(e).catch(() => []);
  for (let u of o) {
    let d = await Q(u, p(e, u.name), r).catch((g) => {
      if (!X(g)) a.errors++;
      return "other";
    });
    if (d === "file") {
      try {
        if (await F(p(e, u.name), t, r, a)) a.messages++;
      } catch {
        a.errors++;
      }
      continue;
    }
    if (d !== "directory") continue;
    let y = p(e, u.name);
    try {
      if (((await G(y, r, { requireCompleteWalk: !0 })) ?? (await pe(y, r))) < t.getTime())
        await r.rm(y, { recursive: !0, force: !0 }), a.messages++;
    } catch (g) {
      if (!X(g)) a.errors++;
    }
  }
  await I(e, r);
}
async function Q(e, t, r) {
  if (e.isDirectory()) return "directory";
  if (e.isFile()) return "file";
  if (e.isSymbolicLink() || e.isFIFO() || e.isSocket() || e.isBlockDevice() || e.isCharacterDevice()) return "other";
  let a = await r.lstat(t);
  return a.isDirectory() ? "directory" : a.isFile() ? "file" : "other";
}
async function pe(e, t) {
  return (await t.lstat(e)).mtimeMs;
}
async function L(e, t) {
  try {
    return (await t.lstat(e)).isDirectory();
  } catch {
    return !1;
  }
}
async function ee(e, t, r, a, o = {}) {
  let { entryMatcher: u } = o;
  for (let d of await r.readdir(e).catch(() => [])) {
    let y = p(e, d.name);
    if (d.isDirectory()) await ee(y, t, r, a, o);
    else if (u !== void 0 && !u(d.name));
    else if (d.isFile())
      try {
        if (await F(y, t, r, a)) a.messages++;
      } catch {
        a.errors++;
      }
    else
      try {
        if ((await r.lstat(y)).mtime < t) await r.unlink(y), a.messages++;
      } catch {
        a.errors++;
      }
  }
  await I(e, r);
}
async function G(e, t, { requireCompleteWalk: r = !1 } = {}) {
  let a = -1 / 0,
    o = await t.readdir(e).catch((u) => {
      if (r && !X(u)) throw u;
      return [];
    });
  for (let u of o) {
    let d = p(e, u.name),
      y = r
        ? await Q(u, d, t).catch((g) => {
            if (X(g)) return "other";
            throw g;
          })
        : u.isDirectory()
          ? "directory"
          : u.isFile()
            ? "file"
            : "other";
    if (y === "directory") {
      let g = await G(d, t, { requireCompleteWalk: r });
      if (g !== null) a = Math.max(a, g);
    } else if (y === "file")
      try {
        let { mtimeMs: g } = await t.stat(d);
        a = Math.max(a, g);
      } catch (g) {
        if (r && !X(g)) throw g;
      }
  }
  return a === -1 / 0 ? null : a;
}
async function efr() {
  let e = Db(),
    t = { ...zw(), transcripts: 0, transcriptsExemptedDesktop: 0 };
  if (e === null) return t;
  let r = Nl(),
    a = le(),
    o;
  try {
    o = await a.readdir(r);
  } catch {
    return t;
  }
  let u;
  try {
    if (((u = xl()), !(await a.lstat(u)).isDirectory())) u = null;
  } catch {
    u = null;
  }
  let d = e6n(),
    y = Fe(),
    g = null,
    D = d
      ? void 0
      : async (S, _) => {
          if (_h("hipaa") || _h("zdr")) return !1;
          if (y !== null && _.mtime < y) return !1;
          let P = await ie(J(S), a, e);
          if (P === "release-now") return !1;
          if (P === "grace") return t.transcriptsExemptedDesktop++, !0;
          if (_.size === 0) {
            if (
              !(await a.stat(S.slice(0, -6)).then(
                (E) => E.isDirectory(),
                () => !1,
              ))
            )
              return t.transcriptsExemptedDesktop++, !0;
          }
          g ??= Buffer.allocUnsafe(bp);
          let { head: v, tail: R } = await qJe(S, _.size, g);
          if (v === "" && _.size > 0)
            throw (
              (await a.stat(S),
              Error("transient read failure while classifying a transcript for the desktop retention exemption"))
            );
          let T = _.size > bp ? qRn(R) : R,
            k = _J(v, "entrypoint"),
            b = sVt(T, "entrypoint");
          if (!((k !== void 0 && xTn(k)) || (b !== void 0 && xTn(b)))) return !1;
          let j = Z(S).startsWith("agent-") ? (_J(v, "sessionId") ?? sVt(T, "sessionId")) : void 0;
          if (j !== void 0 && Ie(j)) {
            let B = p(ue(S), `${j}${U}`);
            if (B !== J(S)) {
              if ((await ie(B, a, e)) === "release-now") return !1;
            }
          }
          return t.transcriptsExemptedDesktop++, !0;
        };
  for (let S of o) {
    if (!S.isDirectory()) continue;
    let _ = p(r, S.name),
      P;
    try {
      P = await a.readdir(_);
    } catch {
      t.errors++;
      continue;
    }
    P.sort((k, b) => Number(b.isDirectory()) - Number(k.isDirectory()));
    let v = [],
      R = null,
      T = new Set(P.filter((k) => k.isFile() && k.name.endsWith(".jsonl")).map((k) => k.name.slice(0, -6)));
    for (let k of P) {
      if (R === null && !k.isDirectory()) R = t.errors;
      if (k.isFile()) {
        if (k.name.endsWith(U) && T.has(k.name.slice(0, -U.length))) continue;
        if (
          !k.name.endsWith(".jsonl") &&
          !k.name.endsWith(".cast") &&
          !k.name.endsWith(".ccr-tip.json") &&
          !k.name.endsWith(".precompact.json") &&
          !k.name.endsWith(U) &&
          !k.name.includes(".desktop-released.json.tmp") &&
          !k.name.endsWith(".dir-sync.json") &&
          !k.name.includes(".ccr-tip.json.tmp.") &&
          !k.name.includes(".precompact.json.tmp.") &&
          !k.name.includes(".dir-sync.json.tmp.") &&
          !k.name.includes(".jsonl.compact.tmp.") &&
          !k.name.includes(".jsonl.superseded-")
        )
          continue;
        let b = p(_, k.name);
        try {
          if (await F(b, e, a, t, void 0, k.name.endsWith(".jsonl") ? D : void 0)) {
            if ((t.messages++, k.name.endsWith(".jsonl"))) {
              t.transcripts++;
              let A = k.name.slice(0, -6);
              if (ae(A)) {
                if (
                  (await a.unlink(p(_, `${A}.ccr-tip.json`)).catch(() => {}),
                  await a.unlink(p(_, `${A}.precompact.json`)).catch(() => {}),
                  v.push(J(b)),
                  await a.rm(p(_, A), { recursive: !0, force: !0 }).catch(() => {
                    t.errors++;
                  }),
                  u !== null)
                ) {
                  let j = p(u, S.name);
                  if ((await a.lstat(j).catch(() => null))?.isDirectory())
                    await a.rm(p(j, A), { recursive: !0, force: !0 }).catch(() => {
                      t.errors++;
                    }),
                      await I(j, a);
                }
              }
            }
          }
        } catch (A) {
          if (!X(A)) t.errors++;
        }
      } else if (k.isDirectory()) {
        let b = p(_, k.name);
        if (k.name === "bagel") {
          let E = await G(b, a);
          if (E !== null && E < e.getTime())
            try {
              await a.rm(b, { recursive: !0, force: !0 }), t.messages++;
            } catch {
              t.errors++;
            }
          continue;
        }
        if (k.name === bfe) {
          await xe(b, e, a, t);
          continue;
        }
        if (!ae(k.name)) {
          let E = await a.lstat(b).catch(() => null);
          if (E !== null && E.mtime < e) await I(b, a);
          continue;
        }
        let A = p(b, afe);
        if (await L(A, a)) {
          let E = await a.readdir(A).catch(() => []);
          for (let N of E)
            if (N.isFile())
              try {
                if (await F(p(A, N.name), e, a, t)) t.messages++;
              } catch {
                t.errors++;
              }
            else if (N.isDirectory()) {
              let K = p(A, N.name),
                te;
              try {
                te = await a.readdir(K);
              } catch {
                continue;
              }
              for (let re of te) {
                if (!re.isFile()) continue;
                try {
                  if (await F(p(K, re.name), e, a, t)) t.messages++;
                } catch {
                  t.errors++;
                }
              }
              await I(K, a);
            }
          await I(A, a);
        }
        let j = await a.readdir(b).catch(() => []);
        for (let E of j) {
          if (!E.isFile() || !(Ce(E.name) || HJe(E.name) !== void 0)) continue;
          if (E.name === "custom-title.json" && T.has(k.name)) continue;
          try {
            if (await F(p(b, E.name), e, a, t)) t.messages++;
          } catch {
            t.errors++;
          }
        }
        let B = p(b, "mcp-tasks");
        if (await L(B, a)) {
          for (let E of await a.readdir(B).catch(() => [])) {
            let N = E.name.endsWith(".json") || E.name.includes(".json.tmp.");
            if (!E.isFile() || !N) continue;
            try {
              if (await F(p(B, E.name), e, a, t)) t.messages++;
            } catch {
              t.errors++;
            }
          }
          await I(B, a);
        }
        if (!T.has(k.name))
          for (let E of ["subagents", "workflows", "remote-agents"]) {
            let N = p(b, E);
            if (await L(N, a)) await ee(N, e, a, t);
          }
        await I(b, a);
      }
    }
    if (R !== null && t.errors > R) v.length = 0;
    for (let k of v) await a.unlink(k).catch(() => {});
    await I(_, a);
  }
  return t;
}
async function C(e, t, r = !0, a) {
  let o = Db(a),
    u = zw();
  if (o === null) return u;
  let d = a === void 0 ? o : (Db() ?? o),
    y = typeof t === "string" ? (S) => S.endsWith(t) : t,
    g = le(),
    D;
  try {
    D = await g.readdir(e);
  } catch {
    return u;
  }
  for (let S of D) {
    if (!S.isFile() || !y(S.name)) continue;
    try {
      if (await F(p(e, S.name), o, g, u, d)) u.messages++;
    } catch {
      u.errors++;
    }
  }
  if (r) await I(e, g);
  return u;
}
async function tfr() {
  let e = zw(),
    t = Db();
  if (t === null) return e;
  let r = p(be(), "hfi-auth.json");
  try {
    if (await F(r, t, le(), e)) e.messages++;
  } catch (a) {
    if (!X(a)) n(`Failed to clean up HFI auth file: ${a}`, { level: "error" }), e.errors++;
  }
  return e;
}
async function nfr() {
  let e = zw(),
    t = Db();
  if (t === null) return e;
  let r = p(be(), "cache", "team-discovery.json");
  try {
    if (await F(r, t, le(), e)) e.messages++;
  } catch (a) {
    if (!X(a))
      if ((e.errors++, u_e(a))) n(`cleanup team-discovery-cache failed: ${a.code}`, { level: "error" });
      else h(a);
  }
  return e;
}
async function rfr() {
  return C(LDt(), (e) => e.endsWith(".json") || e.includes(".json.tmp."));
}
async function ofr() {
  let e = zw(),
    t = Db();
  if (t === null) return e;
  let r = p(be(), "mcp-needs-auth-cache.json");
  try {
    if (await F(r, t, le(), e)) e.messages++;
  } catch (a) {
    if (!X(a))
      if ((e.errors++, u_e(a))) n(`cleanup mcp-auth-cache failed: ${a.code}`, { level: "error" });
      else h(a);
  }
  return e;
}
async function ifr() {
  let e = zw(),
    t = Db();
  if (t === null) return e;
  let r = p(be(), "state", "device-unbound-creates.json");
  try {
    if (await F(r, t, le(), e)) e.messages++;
  } catch (a) {
    if (!X(a))
      if ((e.errors++, u_e(a))) n(`cleanup device-unbound-creates failed: ${a.code}`, { level: "error" });
      else h(a);
  }
  return e;
}
async function sfr() {
  let e = p(be(), "mcp-discovery-cache"),
    t = await C(e, (u) => u.endsWith(".json") || u.includes(".json.tmp."), !1),
    r = Db();
  if (r === null) return t;
  let a = le(),
    o;
  try {
    o = await a.readdir(e);
  } catch {
    return t;
  }
  for (let u of o) {
    if (!u.isDirectory() || !u.name.endsWith(".json.lock")) continue;
    let d = p(e, u.name);
    try {
      if ((await a.stat(d)).mtime < r) await a.rmdir(d), t.messages++;
    } catch {
      t.errors++;
    }
  }
  return await I(e, a), t;
}
async function afr(e) {
  let t = p(be(), "plans");
  try {
    if (e !== void 0) return await C(t, (r) => r.endsWith(".md") || r.includes(".md.tmp."));
    return await C(t, ".md");
  } finally {
    CKe();
  }
}
async function M(
  e,
  {
    exclude: t,
    skipIf: r,
    refuseRedirectedRoot: a = !1,
    removeEmptyBaseDir: o = !0,
    maxAgeDays: u,
    baseDir: d,
    storageV5: y,
  } = {},
) {
  let g = Db(u),
    D = zw();
  if (g === null) return D;
  let S = le(),
    _ = be(),
    P = d ?? p(_, e);
  if (a) {
    if (
      (await oD(P, _, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: y })) !==
      "real"
    )
      return D;
  }
  let v;
  try {
    v = await S.readdir(P);
  } catch {
    return D;
  }
  for (let R of v) {
    if (!R.isDirectory() || t?.has(R.name)) continue;
    let T = p(P, R.name);
    try {
      if ((await S.stat(T)).mtime < g) {
        if (await r?.(T)) continue;
        await S.rm(T, { recursive: !0, force: !0 }), D.messages++;
      }
    } catch {
      D.errors++;
    }
  }
  if (o) await I(P, S);
  return D;
}
function lfr() {
  return M("file-history");
}
function cfr() {
  return M("session-env");
}
function ufr() {
  return M("tasks");
}
function dfr() {
  return M("uploads");
}
async function pfr(e) {
  if (O() && e !== void 0) {
    let a = await Me(e);
    if (a !== "unaddressed") return a;
  }
  let t = Uht(),
    r = await Y(t).catch(() => null);
  if (!r) return zw();
  return M(d5e, {
    removeEmptyBaseDir: !1,
    maxAgeDays: z,
    baseDir: t,
    skipIf: async (a) => {
      let o = await Y(t);
      return (
        o?.ino !== r.ino ||
        o.dev !== r.dev ||
        (await Y(a)) === null ||
        (await x.realpath(a)) !== p(await x.realpath(ue(t)), d5e, Z(a))
      );
    },
  });
}
async function Me(e) {
  let t = zw(),
    r = Nar(),
    a = await e.scopeKind(r);
  if (!a.ok) return a.error.code === "InvalidArgument" ? "unaddressed" : t;
  if (a.value.kind !== "directory" || a.value.object === void 0 || a.value.owner === "other") return t;
  let o = Db(z);
  if (o === null) return t;
  let u = await e.deleteScope(r, { olderThanMs: Math.max(0, Date.now() - o.getTime()) });
  if (!u.ok) return t;
  return (t.messages += u.value.deleted), (t.errors += u.value.failed ?? 0), t;
}
function ffr() {
  return C(AWe(), "", !1, Nlt);
}
async function mfr(e) {
  return YP(
    YP(
      await M(zJn, { refuseRedirectedRoot: !0, storageV5: e }),
      await M(VJn, { refuseRedirectedRoot: !0, storageV5: e }),
    ),
    await de(iV, e),
  );
}
async function de(e, t) {
  let r = zw();
  if (Db() === null) return r;
  let a = be(),
    o = p(a, e);
  if (
    (await oD(o, a, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: t })) !== "real"
  )
    return r;
  let d;
  try {
    d = await le().readdir(o);
  } catch {
    return r;
  }
  for (let y of d) {
    if (!y.isDirectory() || !$ne(y.name)) continue;
    r = YP(r, await M(p(e, "*", NM), { baseDir: p(o, y.name, NM), refuseRedirectedRoot: !0, storageV5: t }));
  }
  return r;
}
function gfr(e) {
  return M(oKe, { refuseRedirectedRoot: !0, storageV5: e });
}
async function me(e, t, r, a) {
  let o = zw(),
    u = Db();
  if (u === null) return o;
  let d = await N8().catch(() => null);
  if (d === null) return o;
  let y = be(),
    g = p(y, e);
  if (
    (await oD(g, y, { event: "cleanup_sweep_root_refused", phase: "sweep", rootLabel: e }, { storageV5: a })) !== "real"
  )
    return o;
  let S = le(),
    _;
  try {
    _ = await S.readdir(g);
  } catch {
    return o;
  }
  for (let P of _) {
    if (!P.isDirectory() || !$ne(P.name) || P.name === d || !(await wG(g, P.name))) continue;
    let v = p(g, P.name),
      R;
    try {
      R = (await S.lstat(p(v, t6)).catch(() => S.lstat(v))).mtime;
    } catch {
      continue;
    }
    if (R >= u) {
      o.filesRetainedFresh++;
      continue;
    }
    if ((o.filesPastCutoff++, await NW({ dir: v, trashRoot: p(y, t), configHome: y, failureEvent: r, storageV5: a })))
      await $xe(g, P.name).catch(() => {}), o.messages++;
    else o.errors++;
  }
  return o;
}
function hfr(e) {
  return me(sV, SLe, "plugins_sync_trash_move_failed", e);
}
function _fr(e) {
  return me(iV, oKe, "skills_sync_trash_move_failed", e);
}
function yfr(e) {
  return M(SLe, { refuseRedirectedRoot: !0, storageV5: e });
}
async function Sfr(e) {
  return YP(await M(KJn, { refuseRedirectedRoot: !0, storageV5: e }), await de(sV, e));
}
async function bfr() {
  let e = p(dc(), "store"),
    t = await C(e, (a) => a.endsWith(".json") || a.includes(".json.tmp."), !1),
    r = Db();
  if (r !== null) await fe(e, r, le(), t);
  return t;
}
async function wfr() {
  let e = Db(),
    t = zw();
  if (e === null) return t;
  let r = le(),
    a = p(be(), Exe),
    o;
  try {
    o = await r.readdir(a);
  } catch {
    return t;
  }
  for (let u of o) {
    if (!u.isDirectory()) continue;
    let d = p(a, u.name),
      y = (await oin(d))?.cacheKey ?? null,
      g;
    try {
      g = await r.readdir(d);
    } catch {
      t.errors++;
      continue;
    }
    for (let D of g) {
      if (!D.isDirectory() || D.name === y) continue;
      let S = p(d, D.name);
      try {
        if ((await r.stat(S)).mtime < e) await r.rm(S, { recursive: !0, force: !0 }), t.messages++;
      } catch {
        t.errors++;
      }
    }
    try {
      if ((await r.stat(d)).mtime < e) await r.rm(d, { recursive: !0, force: !0 }), t.messages++;
    } catch {
      t.errors++;
    }
  }
  return await I(a, r), t;
}
async function Tfr() {
  let e = p(be(), "usage-data"),
    t = await C(p(e, "facets"), (r) => r.endsWith(".json") || r.includes(".json.tmp."));
  return (
    (t = YP(t, await C(p(e, "session-meta"), (r) => r.endsWith(".json") || r.includes(".json.tmp.")))),
    (t = YP(t, await C(e, (r) => r.endsWith(".html") || Lar(r), !1))),
    await I(e, le()),
    t
  );
}
async function Efr() {
  let e = Db(),
    t = zw();
  if (e === null) return t;
  let r = le(),
    a;
  try {
    a = xl();
  } catch {
    return t;
  }
  let o;
  try {
    o = await r.readdir(a);
  } catch {
    return t;
  }
  for (let u of o) {
    let d = u.name.startsWith("cc-transcript-") && u.name.endsWith(".txt"),
      y = u.name.startsWith(mct) && u.name.endsWith(".md");
    if (!u.isFile() || (!d && !y)) continue;
    try {
      if (await F(p(a, u.name), e, r, t)) t.messages++;
    } catch {
      t.errors++;
    }
  }
  return t;
}
async function BEr() {
  return zw();
}
async function jEr() {
  return zw();
}
async function Afr() {
  let e = zw(),
    t = Db(se);
  if (t === null) return e;
  let r = le(),
    a;
  try {
    if (((a = xl()), !(await r.lstat(a)).isDirectory())) return e;
  } catch {
    return e;
  }
  let o = p(a, "speculation"),
    u;
  try {
    u = await r.lstat(o);
  } catch {
    return e;
  }
  if (!u.isDirectory()) return e;
  try {
    if (((await G(o, r, { requireCompleteWalk: !0 })) ?? u.mtimeMs) < t.getTime())
      return await r.rm(o, { recursive: !0, force: !0 }), e.messages++, e;
  } catch {
    e.errors++;
  }
  return await I(o, r), e;
}
async function Cfr() {
  let e = p(be(), "shares"),
    t = await M("shares");
  return (t = YP(t, await C(e, ".zip", !1))), await I(e, le()), t;
}
async function vfr() {
  let e = p(be(), "telemetry"),
    t = await C(e, ".json", !1),
    r = Db();
  if (r === null) return t;
  let a = p(e, "runs"),
    o = le();
  if ((await L(e, o)) && (await L(a, o))) await ee(a, r, o, t, { entryMatcher: (u) => u.endsWith(".json") });
  return await I(e, le()), t;
}
function Rfr() {
  return C(p(be(), "dump-prompts"), ".jsonl", !0, ne);
}
function kfr() {
  return C(p(be(), "shell-snapshots"), ".sh");
}
async function Hfr() {
  let e = Db(),
    t = zw();
  if (e === null) return t;
  let r = le(),
    a = cme();
  for (let o of await r.readdir(a).catch(() => [])) {
    if (!o.isDirectory()) continue;
    let u = p(a, o.name, "inboxes");
    if (await L(u, r)) {
      for (let d of await r.readdir(u).catch(() => [])) {
        if (!d.isFile() || !d.name.endsWith(".json")) continue;
        try {
          if (await F(p(u, d.name), e, r, t)) t.messages++;
        } catch {
          t.errors++;
        }
      }
      await I(u, r);
    }
    await I(p(a, o.name), r);
  }
  return t;
}
async function xfr(e) {
  let t = be(),
    r = await C(p(t, "jobs", "settled"), ".json");
  (r = YP(r, await C(p(t, "daemon", "dispatch", "rejected"), ".json"))),
    (r = YP(r, await C(p(t, "daemon", "dispatch"), ".json", !1))),
    (r = YP(r, await C(p(t, "daemon", "auth"), ".json")));
  try {
    let g = p(t, "daemon", "host-managed"),
      D = le(),
      S = Db();
    if (S)
      for (let _ of await D.readdir(g)) {
        if (!_.isFile()) continue;
        try {
          await D.lstat(p(t, "jobs", _.name));
        } catch (P) {
          if (!X(P)) {
            r.errors++;
            continue;
          }
          try {
            if (await F(p(g, _.name), S, D, r)) r.messages++;
          } catch (v) {
            if (!X(v)) r.errors++;
          }
        }
      }
  } catch (g) {
    if (!X(g)) r.errors++;
  }
  let a = e6n(),
    o = Db(),
    u = new Set();
  if (!a) for (let g of await Dce(e)) u.add(g);
  let d = !1,
    y = !1;
  try {
    let g = p(t, "daemon", "roster.json"),
      D = await le().lstat(g);
    if (!D.isFile() || D.size > 8388608) throw Error("not a regular file");
    let S = await le().readFile(g, { encoding: "utf-8" }),
      _ = V(S);
    if (_ !== null && typeof _ === "object" && "workers" in _) {
      let P = _.workers;
      if (P !== null && typeof P === "object") {
        d = !0;
        for (let [v, R] of Object.entries(P))
          if (
            R !== null &&
            typeof R === "object" &&
            "pid" in R &&
            typeof R.pid === "number" &&
            ms(R.pid) &&
            (await Bm(R.pid, "procStart" in R && typeof R.procStart === "string" ? R.procStart : void 0))
          )
            u.add(v), (y = !0);
      }
    }
  } catch {}
  if (
    ((r = YP(
      r,
      await M("jobs", {
        exclude: u,
        skipIf: async (g) => {
          let D;
          try {
            D = await odn(g, e);
          } catch (S) {
            throw (
              (h(S),
              n(`[cleanup] jobs/${Z(g)}: job state read threw \u2014 keeping the folder (${l(S)})`, { level: "error" }),
              S)
            );
          }
          if (!a && (D === null || !Xi(D))) return !0;
          if (D?.worktreePath && Xi(D) && o)
            await dan({
              worktreePath: D.worktreePath,
              worktreeBranch: D.worktreeBranch,
              originCwd: D.originCwd,
              hookBased: D.worktreeHookBased,
              cutoff: o,
            }).catch(() => {});
          return !1;
        },
      }),
    )),
    o !== null)
  ) {
    let g = le();
    for (let S of [p(t, "daemon.log"), p(t, "daemon.log.1")])
      try {
        if (await F(S, o, g, r)) r.messages++;
      } catch (_) {
        if (!X(_)) r.errors++;
      }
    let D = p(t, "daemon", "roster.json");
    try {
      if ((await g.lstat(D)).mtime < o && !y && (d || a)) await g.unlink(D), r.messages++;
    } catch (S) {
      if (!X(S)) r.errors++;
    }
    for (let S of await g.readdir(p(t, "daemon")).catch(() => [])) {
      if (!S.isFile() || !S.name.startsWith("roster.json.corrupt.")) continue;
      try {
        if (await F(p(t, "daemon", S.name), o, g, r)) r.messages++;
      } catch {
        r.errors++;
      }
    }
  }
  return await kst(), r;
}
function Ifr() {
  return C(p(be(), "backups"), "", !1);
}
async function Pfr() {
  let e = Db(),
    t = zw();
  if (e === null) return t;
  let r = le(),
    a = p(be(), "debug"),
    o;
  try {
    o = await r.readdir(a);
  } catch {
    return t;
  }
  for (let u of o) {
    if (u.name === "latest" || !u.isFile()) continue;
    try {
      if (await F(p(a, u.name), e, r, t)) t.messages++;
    } catch {
      t.errors++;
    }
  }
  return t;
}
async function Dfr() {
  return C(p(be(), "feedback-bundles"), ".zip");
}
async function Ofr() {
  return C(p(be(), "feedback", "drafts"), (e) => e.endsWith(".json") || e.includes(".json.tmp."), !0, 30);
}
async function Lfr() {
  let e = await C(p(be(), "traces"), ".json"),
    t = await C(p(be(), "startup-perf"), ".txt"),
    r = await C(p(be(), "startup-perf"), ".json");
  return YP(YP(e, t), r);
}
var Rst = 86400000,
  we = Dgn;
function he(e) {
  if (e === void 0) return w("none");
  if (!we.has(e)) return w("other");
  return e === "ELOOP" ? w("ELOOP") : e === "EISDIR" ? w("EISDIR") : w("ENXIO");
}
function ge(e) {
  return e.code === "Failed" && e.telemetryCode !== void 0 && we.has(e.telemetryCode);
}
async function Ne(e, t) {
  let r = await e.statMeta(Te.state(t));
  if (r.ok) return Date.now() - r.value.mtimeMs < Rst ? "fresh" : "run";
  if (r.error.code === "NotFound") return "run";
  return ge(r.error) ? { notRegular: r.error } : { unreadable: r.error };
}
function Se(e) {
  if (e.ok) return "removed it";
  return ("telemetryCode" in e.error ? e.error.telemetryCode : void 0) === "EISDIR"
    ? "could not remove it (EISDIR): a directory at the marker path stays and the marker write will keep failing"
    : `could not remove it (${e.error.code})`;
}
async function De(e, t, r) {
  let a = await Ne(e, t);
  if (a === "run") return !1;
  if (a === "fresh") return n(`${r}: skipping, ran recently`), !0;
  let o = "notRegular" in a ? a.notRegular : a.unreadable,
    u = "telemetryCode" in o ? o.telemetryCode : void 0;
  if (
    (s("tengu_cleanup_throttle_marker", {
      marker: c(t),
      verdict: w("notRegular" in a ? "not_regular_rerun" : "unreadable_skip"),
      code: c(o.code),
      errno: he(u),
    }),
    "notRegular" in a)
  ) {
    let d = await e.delete(Te.state(t));
    return (
      n(`${r}: marker is not a regular file (${Ge(a.notRegular)}) \u2014 ${Se(d)}; running`, { level: "warn" }), !1
    );
  }
  return (
    n(`${r}: skipping this run, marker unreadable through the backend (${Ge(a.unreadable)})`, { level: "warn" }), !0
  );
}
async function brn(e) {
  let t = await e.statMeta(Te.state("last-cleanup"));
  if (t.ok || t.error.code === "NotFound" || !ge(t.error)) return;
  s("tengu_cleanup_throttle_marker", {
    marker: w("last-cleanup"),
    verdict: w("not_regular_rerun"),
    code: c(t.error.code),
    errno: he("telemetryCode" in t.error ? t.error.telemetryCode : void 0),
  });
  let r = await e.delete(Te.state("last-cleanup"));
  n(`.last-cleanup: sentinel is not a regular file (${Ge(t.error)}) \u2014 ${Se(r)}; rewriting`, { level: "warn" });
}
var je = [".npm-cache-cleanup", ".version-cleanup", ".last-cleanup", ".deep-link-register-failed"];
async function wrn(e, t) {
  if (!t.claimStagingReap()) return;
  let r;
  try {
    r = await x.readdir(e);
  } catch {
    return;
  }
  let a = Date.now() - Rst;
  await Promise.all(
    r
      .filter((o) => je.some((u) => wP(o, u)))
      .map(async (o) => {
        let u = p(e, o);
        try {
          if ((await x.stat(u)).mtimeMs < a) await x.unlink(u);
        } catch {}
      }),
  );
}
function ke(e) {
  return { target: `${e}#throttle`, lockfilePath: `${e}.lock` };
}
async function WEr(e) {
  let t = p(be(), ".npm-cache-cleanup");
  if (O() && e !== void 0) {
    if (await De(e, "npm-cache-cleanup", "npm cache cleanup")) return;
  } else
    try {
      let d = await x.stat(t);
      if (Date.now() - d.mtimeMs < Rst) {
        n("npm cache cleanup: skipping, ran recently");
        return;
      }
    } catch {}
  let r = ke(t);
  try {
    await Gi(r.target, {
      lockfilePath: r.lockfilePath,
      retries: 0,
      realpath: !1,
      onCompromised: (d) => n(`npm cache cleanup: lock compromised: ${d}`, { level: "error" }),
    });
  } catch {
    n("npm cache cleanup: skipping, lock held");
    return;
  }
  n("npm cache cleanup: starting");
  let a = p(_e(), ".npm", "_cacache"),
    o = 5,
    u = Date.now();
  try {
    let d = await import("/$bunfs/root/chunk-2388pp0m.js"),
      y = u - Rst,
      g = /@anthropic-ai(?:\/|%2[fF])claude-/,
      D = d.ls.stream(a),
      S = [];
    for await (let R of D) if (g.test(R.key)) S.push({ key: R.key, integrity: R.integrity, time: R.time });
    let _ = new Map();
    for (let R of S) {
      let T = R.key.lastIndexOf("@"),
        k = T > 0 ? R.key.slice(0, T) : R.key,
        b = _.get(k) ?? [];
      b.push(R), _.set(k, b);
    }
    let P = [];
    for (let [, R] of _) {
      R.sort((T, k) => k.time - T.time);
      for (let T = 0; T < R.length; T++) {
        let k = R[T];
        if (k.time < y || T >= o) P.push(k);
      }
    }
    if (
      (await Promise.all(
        P.map(async (R) => {
          await d.rm.content(a, R.integrity), await d.rm.entry(a, R.key);
        }),
      ),
      O() && e !== void 0)
    ) {
      let R = await e.write(Te.state("npm-cache-cleanup"), new Date().toISOString(), { publishDiscipline: "inPlace" });
      if (!R.ok)
        throw (
          (n(`npm cache cleanup: marker write failed: ${Ge(R.error)}`, { level: "error" }),
          Error("npm cache cleanup marker write failed"))
        );
    } else await x.writeFile(t, new Date().toISOString());
    let v = Date.now() - u;
    if (P.length > 0) n(`npm cache cleanup: Removed ${P.length} old @anthropic-ai entries in ${v}ms`);
    else n(`npm cache cleanup: completed in ${v}ms`);
    s("tengu_npm_cache_cleanup", { success: !0, durationMs: v, entriesRemoved: P.length });
  } catch (d) {
    n(`npm cache cleanup failed: ${d}`, { level: "error" }),
      s("tengu_npm_cache_cleanup", { success: !1, durationMs: Date.now() - u });
  } finally {
    await CRn(r.target, { lockfilePath: r.lockfilePath, realpath: !1 }).catch(() => {});
  }
}
async function qEr(e) {
  let t = p(be(), ".version-cleanup");
  if (O() && e !== void 0) {
    if (await De(e, "version-cleanup", "version cleanup")) return;
  } else
    try {
      let a = await x.stat(t);
      if (Date.now() - a.mtimeMs < Rst) {
        n("version cleanup: skipping, ran recently");
        return;
      }
    } catch {}
  let r = ke(t);
  try {
    await Gi(r.target, {
      lockfilePath: r.lockfilePath,
      retries: 0,
      realpath: !1,
      onCompromised: (a) => n(`version cleanup: lock compromised: ${a}`, { level: "error" }),
    });
  } catch {
    n("version cleanup: skipping, lock held");
    return;
  }
  n("version cleanup: starting (throttled)");
  try {
    if ((await Hxe(), O() && e !== void 0)) {
      let a = await e.write(Te.state("version-cleanup"), new Date().toISOString(), { publishDiscipline: "inPlace" });
      if (!a.ok)
        throw (
          (n(`version cleanup: marker write failed: ${Ge(a.error)}`, { level: "error" }),
          Error("version cleanup marker write failed"))
        );
    } else await x.writeFile(t, new Date().toISOString());
  } catch (a) {
    n(`version cleanup: failed to run or write marker: ${a}`, { level: "error" });
  } finally {
    await CRn(r.target, { lockfilePath: r.lockfilePath, realpath: !1 }).catch(() => {});
  }
}
async function Mfr() {
  let e = Db(),
    t = zw();
  if (e === null) return t;
  let r = le();
  for (let a of ["todos", "statsig", "logs"]) {
    let o = p(be(), a),
      u;
    try {
      u = await r.readdir(o);
    } catch {
      continue;
    }
    for (let d of u) {
      let y = p(o, d.name);
      try {
        if (!((await r.stat(y)).mtime < e)) continue;
        if (d.isDirectory()) await r.rm(y, { recursive: !0, force: !0 });
        else await r.unlink(y);
        t.messages++;
      } catch {
        t.errors++;
      }
    }
    await I(o, r);
  }
  return t;
}
async function Nfr() {
  let t = zw(),
    r = Db();
  if (r === null) return t;
  let a = p(H$(), "projects"),
    o = le(),
    u = await o.readdir(a).catch(() => []);
  for (let d of u) {
    if (!d.isDirectory()) continue;
    t = YP(t, await ce(p(a, d.name, "memory", "proposals"), r, o));
  }
  return YP(t, await ce(p(Di(), "proposals"), r, o));
}
var Be = "skill-proposal";
async function ce(e, t, r) {
  let a = zw();
  try {
    if ((await r.lstat(e)).isSymbolicLink()) return a;
  } catch (u) {
    if (!Ht(u)) a.errors++;
    return a;
  }
  let o = await r.readdir(e).catch((u) => {
    if (!X(u)) a.errors++;
    return [];
  });
  for (let u of o) {
    if (!u.isFile() || !u.name.endsWith(".md")) continue;
    let d = p(e, u.name);
    try {
      let { content: y, mtimeMs: g } = await HB(d, 0, b3, yV, void 0, { truncateOnByteLimit: !0 });
      if (!(g < t.getTime())) continue;
      if (ni(y, d).frontmatter.type !== Be) continue;
      await r.unlink(d), a.messages++;
    } catch (y) {
      if (!X(y)) a.errors++;
    }
  }
  return await I(e, r), a;
}
async function Trn(e) {
  await n6n();
  let t = await vst(e),
    r = En()?.cleanupPeriodDays;
  if (t !== null) {
    s("tengu_retention_sweep", { skipped: !0, skipReason: c(t) }),
      Ypn({ result: "skipped", skipReason: t, periodDays: r ?? H, usedDefault: r === void 0 });
    return;
  }
  s("tengu_retention_sweep", { phase: w("start") }), await Zpr();
  let a = await efr(),
    o = [a];
  o.push(await afr(e)),
    o.push(await lfr()),
    o.push(await cfr()),
    o.push(await ufr()),
    o.push(await dfr()),
    o.push(await pfr(e)),
    o.push(await ffr()),
    o.push(await Tfr()),
    o.push(await mfr(e)),
    o.push(await Sfr(e)),
    o.push(await _fr(e)),
    o.push(await hfr(e)),
    o.push(await gfr(e)),
    o.push(await yfr(e)),
    o.push(await bfr()),
    o.push(await wfr()),
    o.push(await Efr()),
    o.push(await Afr()),
    o.push(await Cfr()),
    o.push(await vfr()),
    o.push(await Pfr()),
    o.push(await Dfr()),
    o.push(await Ofr()),
    o.push(await Lfr()),
    o.push(await Rfr()),
    o.push(await kfr()),
    o.push(await Hfr()),
    o.push(await xfr(e)),
    o.push(await Ifr()),
    o.push(await tfr()),
    o.push(await ofr()),
    o.push(await ifr()),
    o.push(await sfr()),
    o.push(await nfr()),
    o.push(await rfr()),
    o.push(await Mfr()),
    o.push(await Nfr());
  let u = Db();
  if (u !== null) {
    await dKn(u, e);
    let y = await uan(u);
    if (y > 0) s("tengu_worktree_cleanup", { removed: y });
  }
  let d = o.reduce(YP, zw());
  s("tengu_retention_sweep", {
    phase: w("complete"),
    skipped: !1,
    transcriptsDeleted: a.transcripts,
    transcriptsExemptedDesktop: a.transcriptsExemptedDesktop,
    sessionFilesDeleted: a.messages,
    artifactsDeleted: d.messages,
    filesRetainedFresh: d.filesRetainedFresh,
    filesPastCutoff: d.filesPastCutoff,
    errors: d.errors,
    periodDays: r ?? H,
    usedDefault: r === void 0,
  }),
    Ypn({
      result: "complete",
      periodDays: r ?? H,
      usedDefault: r === void 0,
      transcriptsDeleted: a.transcripts,
      transcriptsExemptedDesktop: a.transcriptsExemptedDesktop,
      sessionFilesDeleted: a.messages,
      artifactsDeleted: d.messages,
      filesRetainedFresh: d.filesRetainedFresh,
      filesPastCutoff: d.filesPastCutoff,
      errorCount: d.errors,
    });
}
export {
  vst,
  UEr,
  Db,
  e6n,
  zw,
  YP,
  Qpr,
  u_e,
  Zpr,
  efr,
  tfr,
  nfr,
  rfr,
  ofr,
  ifr,
  sfr,
  afr,
  lfr,
  cfr,
  ufr,
  dfr,
  pfr,
  ffr,
  mfr,
  gfr,
  hfr,
  _fr,
  yfr,
  Sfr,
  bfr,
  wfr,
  Tfr,
  Efr,
  BEr,
  jEr,
  Afr,
  Cfr,
  vfr,
  Rfr,
  kfr,
  Hfr,
  xfr,
  Ifr,
  Pfr,
  Dfr,
  Ofr,
  Lfr,
  Rst,
  brn,
  wrn,
  WEr,
  qEr,
  Mfr,
  Nfr,
  Trn,
};
