// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { GE } from "/$bunfs/root/chunk-d1d8xqks.js";
import { Zt, Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { l, E, X, Ht } from "/$bunfs/root/chunk-ypdw393e.js";
import { Ge, b, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { ho } from "/$bunfs/root/chunk-37pvmyqb.js";
import { p_t, Lk, X2 } from "/$bunfs/root/chunk-qd35gw0c.js";
import { jF } from "/$bunfs/root/chunk-5tdaspnd.js";
import { Ma } from "/$bunfs/root/chunk-nwb64bac.js";
import { i, f, De } from "/$bunfs/root/chunk-saay52v7.js";
import { wR } from "/$bunfs/root/chunk-13198prn.js";
import { ec, Ao } from "/$bunfs/root/chunk-czmxr2ps.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { readdir as D, readFile as M, stat as A } from "fs/promises";
import { basename as w, extname as z, join as C } from "path";
class x {
  customThemeBases = void 0;
  userThemes = void 0;
  pluginThemes = Ma([]);
  systemTheme = void 0;
  systemThemeChanged = Ue();
  onSystemThemeChange = this.systemThemeChanged.subscribe;
  customThemeBase(e) {
    return this.customThemeBases?.get(e);
  }
  addCustomThemeBases(e) {
    this.customThemeBases ??= new Map();
    for (let t of e) this.customThemeBases.set(t.slug, t.base);
  }
  commitUserThemes(e) {
    (this.customThemeBases = new Map(e.map((t) => [t.slug, t.base]))),
      this.addCustomThemeBases(this.pluginThemes.getState()),
      (this.userThemes = e);
  }
  cachedUserThemes() {
    return this.userThemes ?? [];
  }
  cachedSystemTheme() {
    return this.systemTheme;
  }
  setSystemTheme(e) {
    if (this.systemTheme === e) return;
    (this.systemTheme = e), this.systemThemeChanged.emit();
  }
}
var R = new J(() => new x());
function QR() {
  return R.of(G().host);
}
var k = "custom:",
  N = 262144;
function tin(e) {
  return QR().customThemeBase(e);
}
function wMt() {
  return QR().cachedUserThemes();
}
function nin(e) {
  let t = QR();
  return t.cachedUserThemes().find((r) => r.slug === e) ?? t.pluginThemes.getState().find((r) => r.slug === e);
}
function V_e() {
  return C(be(), "themes");
}
function IW(e) {
  return `${k}${e}`;
}
function Mb(e) {
  return e.startsWith(k) ? e.slice(k.length) : null;
}
function j(e, t, r) {
  let o;
  try {
    o = V(t);
  } catch {
    n(`[theme] ${e}.json: invalid JSON`, { level: "warn" });
    return;
  }
  if (typeof o !== "object" || o === null || Array.isArray(o)) return;
  let a = o,
    h = p_t(a.base) ? a.base : "dark",
    c = typeof a.name === "string" ? a.name : e,
    s = {};
  if (typeof a.overrides === "object" && a.overrides !== null) {
    let g = Lk(h);
    for (let [p, y] of Object.entries(a.overrides)) if (Object.hasOwn(g, p) && X2(y)) s[p] = y;
  }
  return { slug: e, name: c, base: h, overrides: s, source: r };
}
async function S(e, t, r, o, a, h) {
  if (o && a) {
    let s;
    try {
      s = await o.read([a]);
    } catch (p) {
      if (h) h.readErrors++;
      n(`[theme] failed to read ${e}: ${l(p)}`, { level: "warn" });
      return;
    }
    if (!s.ok) {
      if (h) h.readErrors++;
      n(`[theme] failed to read ${e}: ${Ge(s.error)}`, { level: "warn" });
      return;
    }
    let g = s.value.items[0];
    return g?.found ? j(t, Buffer.from(g.value).toString("utf8"), r) : void 0;
  }
  let c;
  try {
    if ((await A(e)).size > N) {
      n(`[theme] ${e} exceeds 256KB; skipping`, { level: "warn" });
      return;
    }
    c = await M(e, "utf8");
  } catch (s) {
    if (!X(s)) n(`[theme] failed to read ${e}`, { level: "warn" });
    return;
  }
  return j(t, c, r);
}
async function TMt(e, t, r = "") {
  return (await P(e, t, r)) ?? [];
}
async function P(e, t, r, o) {
  if (o && t === "user" && e === V_e()) {
    let c = { namespace: "userConfigDir", dir: "themes" },
      s = [],
      g = await Ao(
        (u) => o.listEntries(c, u === void 0 ? void 0 : { cursor: u }),
        (u) => {
          for (let d of u) {
            if (d.kind !== "key") continue;
            let T = d.key.namespace === "userConfigDir" ? (d.key.relPath.at(-1) ?? "") : "";
            if (z(T) !== ".json") continue;
            if ((d.size ?? 0) > N) {
              n(`[theme] ${C(e, T)} exceeds 256KB; skipping`, { level: "warn" });
              continue;
            }
            s.push({ slug: r + w(T, ".json"), name: T });
          }
        },
      ).catch(
        (u) => (
          n(`[theme] list themes failed: ${l(u)}; keeping the previously loaded themes (if any)`, { level: "warn" }),
          null
        ),
      );
    if (g === null) return null;
    switch (g.status) {
      case "done":
        break;
      case "error":
        return (
          n(`[theme] list themes failed: ${Ge(g.error)}; keeping the previously loaded themes (if any)`, {
            level: "warn",
          }),
          null
        );
      case "capped":
        return (
          n(`[theme] list themes exceeded ${ec} pages; keeping the previously loaded themes (if any)`, {
            level: "warn",
          }),
          null
        );
    }
    if (s.length === 0) return [];
    let p = s.map((u) => Te.userConfigDir("themes", [u.name])),
      y;
    try {
      y = await o.read(p);
    } catch (u) {
      n(`[theme] batched theme read failed: ${l(u)}`, { level: "warn" });
    }
    let v = [];
    if (y?.ok) {
      for (let [u, d] of y.value.items.entries()) {
        if (!d.found) continue;
        let T = j(s[u].slug, Buffer.from(d.value).toString("utf8"), t);
        if (T) v.push(T);
      }
      return v;
    }
    let B = { readErrors: 0 };
    for (let [u, d] of s.entries()) {
      let T = await S(C(e, d.name), d.slug, t, o, p[u], B);
      if (T) v.push(T);
    }
    if (v.length === 0 && B.readErrors > 0)
      return (
        n(
          `[theme] could not read any of ${s.length} listed theme files; keeping the previously loaded themes (if any)`,
          { level: "warn" },
        ),
        null
      );
    return v;
  }
  let a;
  try {
    a = await D(e);
  } catch (c) {
    if (E(c) === "ENOTDIR") {
      let s = await S(e, r + w(e, ".json"), t);
      return s ? [s] : [];
    }
    if (!Ht(c)) n(`[theme] readdir ${e} failed`, { level: "warn" });
    return [];
  }
  let h = [];
  for (let c of a) {
    if (z(c) !== ".json") continue;
    let s = await S(C(e, c), r + w(c, ".json"), t);
    if (s) h.push(s);
  }
  return h;
}
var Txe = wR(async (e) => {
    let t = QR(),
      r = ho("themes") ? [] : ((await P(V_e(), "user", "", e)) ?? t.cachedUserThemes());
    return r.sort((o, a) => o.name.localeCompare(a.name)), t.commitUserThemes(r), r;
  }),
  I = m(() => f({ name: i(), base: i(), overrides: De(i(), i()) }));
async function O9e(e, t) {
  let r = { name: e.name, base: e.base, overrides: e.overrides },
    o = `${e.slug}.json`;
  if (O() && t !== void 0 && Zt(o)) {
    let a =
        b(r, null, 2) +
        `
`,
      h = await t.write(Te.userConfigDir("themes", [o]), a, {
        publishDiscipline: "atomic",
        mode: 438 & ~process.umask(),
      });
    if (!h.ok)
      throw (n(`[theme] v5 save ${e.slug} failed: ${Ge(h.error)}`, { level: "warn" }), Error("theme save failed"));
    return;
  }
  await jF(C(V_e(), `${e.slug}.json`), I, {
    defaultValue: () => ({ name: e.slug, base: "dark", overrides: {} }),
    ensureDir: true,
    indent: 2,
    trailingNewline: true,
  }).write(r);
}
function rin(e) {
  return (
    e
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "theme"
  );
}
function EMt(e) {
  if (ho("themes")) return () => {};
  let t = GE.watch(V_e(), {
    persistent: true,
    ignoreInitial: true,
    depth: 0,
    awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
    ignorePermissionErrors: true,
  });
  return (
    t.on("add", e),
    t.on("change", e),
    t.on("unlink", e),
    t.on("error", (r) => n(`[theme] watcher error: ${l(r)}`, { level: "warn" })),
    () => void t.close()
  );
}
export { QR, tin, wMt, nin, V_e, IW, Mb, TMt, Txe, O9e, rin, EMt };
