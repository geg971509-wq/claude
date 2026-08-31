// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J } from "/$bunfs/root/chunk-f9h0bg01.js";
import { we, E, X } from "/$bunfs/root/chunk-ypdw393e.js";
import { V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { ce } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { gt } from "/$bunfs/root/chunk-q14dgq5g.js";
import { NEn, J3 } from "/$bunfs/root/chunk-6k63g5t6.js";
import { Et } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { ui } from "/$bunfs/root/chunk-ntyhd04p.js";
import { ye } from "/$bunfs/root/chunk-988p40e0.js";
import { _o, BH } from "/$bunfs/root/chunk-0spqrdaj.js";
import { _e, H, f, dt } from "/$bunfs/root/chunk-saay52v7.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { bA } from "/$bunfs/root/chunk-56sxk8k2.js";
import { constants as h } from "fs";
import { open as z, realpath as M } from "fs/promises";
import { isAbsolute as G } from "path";
var PXt = "org-tip:",
  U0t = "custom-tip-",
  I = 500,
  U = 200,
  O = 262144,
  w = "Tip",
  j = /^[A-Za-z0-9._-]{1,64}$/,
  k = 40,
  x = ["policySettings", "flagSettings", "userSettings"],
  B = [...BH],
  K = "org-tip:file:",
  Y = new Set(["EAGAIN", "EBUSY", "EINTR", "EIO", "EMFILE", "ENFILE"]),
  W = /[\p{Cc}\p{Cf}\u2028\u2029\u180e\ufe00-\ufe0f\u{e0100}-\u{e01ef}]/gu;
function P(e) {
  return Et(e)
    .replace(/[\t\n\r\u2028\u2029]+/g, " ")
    .replace(W, "")
    .replace(/ {2,}/g, " ")
    .trim();
}
function Z(e) {
  if (e === void 0) return w;
  let t = ce(P(e), k);
  return t === "" ? w : t;
}
var q = m(() => dt([H(_e()), f({ tips: H(_e()) }).transform((e) => e.tips)]));
async function Q(e) {
  try {
    let t = D() === "windows" ? 0 : h.O_NOFOLLOW | h.O_NONBLOCK,
      i = await z(await M(e), h.O_RDONLY | t),
      r;
    try {
      let u = await i.stat();
      if (!u.isFile())
        return (
          p("tips_org_tips_file_load", "not_regular_file"),
          n(`spinnerTipsOverride.tipsFile ${e} is not a regular file; ignoring it`, { level: "warn" }),
          { entries: [], transient: !1 }
        );
      if (u.size > O)
        return (
          p("tips_org_tips_file_load", "too_large"),
          n(`spinnerTipsOverride.tipsFile ${e} is larger than ${O} bytes; ignoring it`, { level: "warn" }),
          { entries: [], transient: !1 }
        );
      let c = Buffer.alloc(O + 1),
        { bytesRead: g } = await i.read(c, 0, c.length, 0);
      if (g > O) return p("tips_org_tips_file_load", "too_large"), { entries: [], transient: !1 };
      r = ui(c.toString("utf8", 0, g));
    } finally {
      await i.close();
    }
    let l = q().safeParse(V(r)),
      d = l.success ? NEn().parse(l.data) : void 0;
    if (d === void 0)
      return (
        p("tips_org_tips_file_load", "wrong_shape"),
        n(`spinnerTipsOverride.tipsFile ${e} must be a JSON array of tips (or {"tips": [...]}); ignoring it`, {
          level: "warn",
        }),
        { entries: [], transient: !1 }
      );
    return y("tips_org_tips_file_load"), { entries: d, transient: !1 };
  } catch (t) {
    let i = E(t),
      r = X(t)
        ? "not_found"
        : i === "ELOOP" || i === "EISDIR"
          ? "not_regular_file"
          : t instanceof SyntaxError
            ? "parse_failed"
            : "read_failed";
    return (
      p("tips_org_tips_file_load", r),
      n(
        X(t)
          ? `spinnerTipsOverride.tipsFile ${e} does not exist; no file tips loaded`
          : `spinnerTipsOverride.tipsFile ${e} could not be read: ${we(t).message}`,
        { level: "warn" },
      ),
      { entries: [], transient: i !== void 0 && Y.has(i) }
    );
  }
}
class N {
  #e = new Map();
  get size() {
    return this.#e.size;
  }
  read(e) {
    let t = this.#e.get(e);
    if (t) return t;
    let i = Q(e).then((r) => {
      if (r.transient) this.#e.delete(e);
      return r;
    });
    return this.#e.set(e, i), i;
  }
}
var ee = new J(() => new N());
function te() {
  if (J3()?.spinnerTipsOverride?.tipsFile)
    return (
      n(
        "spinnerTipsOverride.tipsFile from remote managed settings is ignored; ship inline tips or install the file path via managed-settings.json",
        { level: "warn" },
      ),
      !0
    );
  return !1;
}
function ie(e) {
  if (!e) return;
  if (!G(e) && e !== "~" && !e.startsWith("~/")) {
    n(`spinnerTipsOverride.tipsFile must be an absolute or ~/ path (got "${e}"); ignoring it`, { level: "warn" });
    return;
  }
  if (bA(e)) {
    n("spinnerTipsOverride.tipsFile must be a local path, not a network (UNC) path; ignoring it", { level: "warn" });
    return;
  }
  try {
    let t = gt(e);
    return bA(t) ? void 0 : t;
  } catch (t) {
    n(`spinnerTipsOverride.tipsFile "${e}" is not a usable path: ${we(t).message}`, { level: "warn" });
    return;
  }
}
function R(e) {
  let t = [];
  for (let i of e) {
    if (!_o(i)) continue;
    let r = ye(i)?.spinnerTipsOverride;
    if (r) t.push({ source: i, override: r });
  }
  return t;
}
function C(e, t) {
  return e.find((i) => i.override[t] !== void 0)?.override[t];
}
function Sge() {
  let e = R(x);
  if (C(e, "excludeDefault") !== !0) return !1;
  return e.some((t) => !!t.override.tipsFile) || e.some((t) => (t.override.tips?.length ?? 0) > 0);
}
async function FMn(e) {
  let t = R(x),
    i = R(B);
  if (t.length === 0 && i.length === 0) return { tips: [], trustedCount: 0 };
  let r = Z(C(t, "label")),
    l = t.find((s) => !!s.override.tipsFile),
    d = l?.source,
    u = ie(d === "policySettings" && te() ? void 0 : l?.override.tipsFile);
  for (let { source: s, override: o } of i)
    if (o.tipsFile || o.label !== void 0)
      n(`spinnerTipsOverride.tipsFile/label in ${s} are ignored; set them in user or managed settings`, {
        level: "warn",
      });
  let c = u ? (await ee.of(e).read(u)).entries : [],
    g = new Set(),
    T = [],
    S = (s, o, a, _, A) => {
      if (T.length >= U) return;
      let v = P(o);
      if (v === "") {
        n(`spinnerTipsOverride: tip "${s}" is empty after sanitizing; dropped`, { level: "warn" });
        return;
      }
      if (v.length > I) {
        n(`spinnerTipsOverride: tip "${s}" is longer than ${I} characters; dropped`, { level: "warn" });
        return;
      }
      if (g.has(s)) {
        n(`spinnerTipsOverride: duplicate tip id "${s}"; keeping the first`, { level: "warn" });
        return;
      }
      g.add(s),
        T.push({
          id: s,
          label: A,
          content: async () => v,
          cooldownSessions: a,
          priority: _,
          isRelevant: async () => !0,
          providerAgnostic: !0,
        });
    },
    b = 0;
  for (let { source: s, override: o } of t) {
    for (let a of o.tips ?? []) F(a, `${U0t}${b++}`, r, S);
    if (s === d) c.forEach((a, _) => F(a, `${K}${_}`, r, S));
  }
  let L = T.length;
  for (let { source: s, override: o } of i)
    for (let a of o.tips ?? []) {
      let _ = `${U0t}${b++}`;
      if (typeof a === "string") F(a, _, w, S);
      else
        n(
          `spinnerTipsOverride: object tip entries in ${s} are ignored; only plain strings are read from project settings`,
          { level: "warn" },
        );
    }
  return { tips: T, trustedCount: L };
}
function F(e, t, i, r) {
  if (typeof e === "string") {
    r(t, e, 0, 0, i);
    return;
  }
  if (typeof e.text !== "string") {
    n('spinnerTipsOverride: tip object without a "text" string; dropped', { level: "warn" });
    return;
  }
  if (typeof e.id !== "string" || !j.test(e.id)) {
    n('spinnerTipsOverride: tip object needs an "id" of 1-64 letters, digits, ".", "_" or "-"; dropped', {
      level: "warn",
    });
    return;
  }
  let l =
      typeof e.cooldownSessions === "number" && Number.isInteger(e.cooldownSessions) && e.cooldownSessions >= 0
        ? Math.min(e.cooldownSessions, 1000)
        : 0,
    d =
      typeof e.priority === "number" && Number.isFinite(e.priority)
        ? Math.max(-10, Math.min(10, Math.trunc(e.priority)))
        : 0;
  r(`${PXt}${e.id}`, e.text, l, d, i);
}
export { PXt, U0t, Sge, FMn };
