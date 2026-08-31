// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { w, c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { Wp, le, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { Y } from "/$bunfs/root/chunk-s7e0px8j.js";
import { Ut } from "/$bunfs/root/chunk-ntyhd04p.js";
import { ib, zAe, VAe, pP } from "/$bunfs/root/chunk-0spqrdaj.js";
import { Zwt, eTt, NNe, c0, FNe } from "/$bunfs/root/chunk-18bck2pp.js";
import { qwt, hEn } from "/$bunfs/root/chunk-dwwpyy7b.js";
import { SR, db } from "/$bunfs/root/chunk-052zvbpg.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { join as u } from "path";
var d = Object.freeze({ settings: {}, errors: [] });
class k {
  mdm = null;
  hkcu = null;
  wslInherits = !1;
  loadPromise = null;
  startLoad(t) {
    if (this.loadPromise) return;
    this.loadPromise = (async () => {
      let e = Date.now(),
        o = await (hEn() ?? qwt()),
        { mdm: r, hkcu: f, wslInherits: a } = await _(o, t);
      this.replace(r, f, a);
      let l = Date.now() - e;
      n(`MDM settings load completed in ${l}ms`);
      try {
        s("tengu_managed_settings_os_read", T(o, l));
      } catch {}
      if (Object.keys(r.settings).length > 0) {
        n(`MDM settings found: ${Object.keys(r.settings).join(", ")}`);
        try {
          Y("info", "mdm_settings_loaded", {
            duration_ms: l,
            key_count: Object.keys(r.settings).length,
            error_count: r.errors.length,
          });
        } catch {}
      }
    })();
  }
  replace(t, e, i) {
    (this.mdm = t), (this.hkcu = e), (this.wslInherits = i);
  }
  reset() {
    (this.mdm = null), (this.hkcu = null), (this.wslInherits = !1), (this.loadPromise = null);
  }
}
var F = new J(() => new k());
function g() {
  return F.of(G().host);
}
function b(t) {
  g().startLoad(t);
}
async function qAe() {
  let t = g();
  if (!t.loadPromise) b();
  await t.loadPromise;
}
function X6() {
  return g().mdm ?? d;
}
function ooe() {
  return g().hkcu ?? d;
}
function l0() {
  return g().wslInherits;
}
function _or(t, e, i) {
  g().replace(t, e, i);
}
async function yor(t) {
  let e = await qwt();
  return _(e, t);
}
function p(t, e) {
  let i = Ut(t, !1);
  if (!i || typeof i !== "object") return { settings: {}, errors: [] };
  let { settings: o, errors: r } = VAe(i, e);
  return { settings: o ?? {}, errors: r };
}
function R(t, e = "Settings") {
  let i = t.split(/\r?\n/),
    o = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    r = new RegExp(`^\\s+${o}\\s+REG_(?:EXPAND_)?SZ\\s+(.*)$`, "i");
  for (let f of i) {
    let a = f.match(r);
    if (a && a[1]) return a[1].trimEnd();
  }
  return null;
}
var W = new Map([
    ["ENOENT", w("ENOENT")],
    ["EACCES", w("EACCES")],
    ["EPERM", w("EPERM")],
    ["ENOEXEC", w("ENOEXEC")],
    ["EAGAIN", w("EAGAIN")],
    ["EMFILE", w("EMFILE")],
    ["ENOMEM", w("ENOMEM")],
    ["ETIMEDOUT", w("ETIMEDOUT")],
    ["ERR_CHILD_PROCESS_STDIO_MAXBUFFER", w("ERR_CHILD_PROCESS_STDIO_MAXBUFFER")],
  ]),
  D = new Map([
    ["SIGTERM", w("SIGTERM")],
    ["SIGKILL", w("SIGKILL")],
    ["SIGINT", w("SIGINT")],
  ]);
function L(t) {
  if (!t) return;
  return W.get(t) ?? w("other");
}
function N(t) {
  if (!t) return;
  return D.get(t) ?? w("other");
}
function M(t, e) {
  if (!e) return {};
  return {
    [`${t}_status`]: c(e.status),
    [`${t}_exit_code`]: e.exitCode ?? void 0,
    [`${t}_errno`]: L(e.errno),
    [`${t}_signal`]: N(e.signal),
    [`${t}_duration_ms`]: e.durationMs,
  };
}
function T(t, e) {
  return { is_wsl: FNe(), await_ms: e, ...M("hklm", t.outcomes.hklm), ...M("hkcu", t.outcomes.hkcu) };
}
async function _(t, e) {
  let i = [];
  if (t.plistStdouts && t.plistStdouts.length > 0) {
    let { stdout: l, label: m } = t.plistStdouts[0],
      h = p(l, m);
    if (pP(h.settings)) return { mdm: h, hkcu: d, wslInherits: !1 };
    i.push(...h.errors);
  }
  let o = null;
  if (t.hklmStdout) {
    let l = R(t.hklmStdout);
    if (l) o = p(l, `Registry: ${Zwt}\\${NNe}`);
  }
  if (o) i.push(...o.errors);
  let r = i.length > 0 ? { settings: {}, errors: i } : d,
    f = FNe(),
    a = !1;
  if (f) {
    if (((a = o?.settings.wslInheritsWindowsSettings === !0 || (await C(e))), !a))
      return { mdm: r, hkcu: d, wslInherits: !1 };
  }
  if (o) {
    if (pP(o.settings)) return { mdm: o, hkcu: d, wslInherits: a };
  }
  if (await j(a, e)) return { mdm: r, hkcu: d, wslInherits: a };
  if (t.hkcuStdout) {
    let l = R(t.hkcuStdout);
    if (l) {
      let m = p(l, `Registry: ${eTt}\\${NNe}`);
      if (!f || m.settings.wslInheritsWindowsSettings === !0) {
        let { wslInheritsWindowsSettings: h, managedSourcesBehavior: v, ...P } = m.settings;
        return { mdm: r, hkcu: { settings: P, errors: m.errors }, wslInherits: a };
      }
      if (m.errors.length > 0) return { mdm: r, hkcu: { settings: {}, errors: m.errors }, wslInherits: a };
    }
  }
  return { mdm: r, hkcu: d, wslInherits: a };
}
async function S(t, e) {
  if (O() && e !== void 0) return (await db(t)).content;
  return SR(t);
}
async function E(t, e) {
  if (O() && e !== void 0) return await le().readdir(t);
  return le().readdirSync(t);
}
async function j(t, e) {
  if (t && (await I(c0, e))) return !0;
  return I(ib(), e);
}
async function y(t, e) {
  let i = Wp(Ut(await S(t, e), !1));
  if (!i || typeof i !== "object") return !1;
  return zAe(i, t, { skipMcpServerEntryFilter: !0, policySource: !0 }), pP(i);
}
async function mEn(t) {
  if (!FNe() || !g().wslInherits) return "";
  let e = [];
  try {
    e.push(await S(u(c0, "managed-settings.json"), t));
  } catch {
    e.push("");
  }
  try {
    let i = u(c0, "managed-settings.d"),
      o = (await E(i, t))
        .filter((r) => (r.isFile() || r.isSymbolicLink()) && r.name.endsWith(".json") && !r.name.startsWith("."))
        .map((r) => r.name)
        .sort();
    for (let r of o)
      try {
        e.push(`${r}\x00${await S(u(i, r), t)}`);
      } catch {
        e.push(`${r}\x00`);
      }
  } catch {}
  return e.join("\x01");
}
async function C(t) {
  async function e(i) {
    try {
      let o = Ut(await S(i, t), !1);
      return !!o && typeof o === "object" && "wslInheritsWindowsSettings" in o && o.wslInheritsWindowsSettings === !0;
    } catch {
      return !1;
    }
  }
  if (await e(u(c0, "managed-settings.json"))) return !0;
  try {
    let i = u(c0, "managed-settings.d");
    for (let o of await E(i, t))
      if (
        (o.isFile() || o.isSymbolicLink()) &&
        o.name.endsWith(".json") &&
        !o.name.startsWith(".") &&
        (await e(u(i, o.name)))
      )
        return !0;
  } catch {}
  return !1;
}
async function I(t, e) {
  try {
    if (await y(u(t, "managed-settings.json"), e)) return !0;
  } catch {}
  try {
    let i = u(t, "managed-settings.d"),
      o = await E(i, e);
    for (let r of o) {
      if (!(r.isFile() || r.isSymbolicLink()) || !r.name.endsWith(".json") || r.name.startsWith(".")) continue;
      try {
        if (await y(u(i, r.name), e)) return !0;
      } catch {}
    }
  } catch {}
  return !1;
}
export { qAe, X6, ooe, l0, _or, yor, mEn };
