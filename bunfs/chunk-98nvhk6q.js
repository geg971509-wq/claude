// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { de, gEe, tyn, wZn, _Ee } from "/$bunfs/root/chunk-xgfepdf4.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { oK } from "/$bunfs/root/chunk-ypdw393e.js";
import { Si, e5, Ve, qre, Gre, rTn, al, aS } from "/$bunfs/root/chunk-4t3vsqt7.js";
import { Kue } from "/$bunfs/root/chunk-rntp2fy5.js";
import { Vn, _t } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { ya } from "/$bunfs/root/chunk-6k63g5t6.js";
import { gt } from "/$bunfs/root/chunk-q14dgq5g.js";
import { N6e, _$n } from "/$bunfs/root/chunk-q38mnpg0.js";
import { sOe, U9, Lgt } from "/$bunfs/root/chunk-dt5bt1kc.js";
import { Qr } from "/$bunfs/root/chunk-wm93h3q4.js";
var h = 3,
  I = 1024,
  U = new Set(Object.values(e5));
function R(e) {
  return typeof e === "string" ? e.slice(0, I) : "";
}
function L(e) {
  if (typeof e !== "object" || e === null) return "publish\x00\x00\x00";
  let t = "action" in e ? R(e.action) : "",
    r = "file_path" in e ? R(e.file_path) : "",
    n = "url" in e ? R(e.url) : "",
    i = "thread_id" in e ? R(e.thread_id) : "";
  return `${t || "publish"}\x00${r}\x00${n}\x00${i}`;
}
function O(e, t, r) {
  let n = de().rejectBreaker,
    i = L(e),
    o = n.get(i),
    l = o !== void 0 && o.reason === t && o.fingerprint === r ? o.count + 1 : 1;
  if ((n.set(i, { count: l, reason: t, fingerprint: r }), l === h))
    s("tengu_artifact_reject_breaker", { reason: oK(t) });
  return l >= h;
}
var k = `IMPORTANT: Artifact calls for this target have now been rejected ${h} or more times in this session for the same reason.`,
  A = `${k} Do not send the same call again: either make the specific change the error describes, or stop calling Artifact for this target and tell the user what is failing and why.`,
  _ = `${k} Stop calling Artifact for this target and tell the user the artifact could not be published and why \u2014 do not try to work around this refusal.`,
  pFn = Math.max(A.length, _.length) + 2;
function T(e) {
  return U.has(e) ? _ : A;
}
function Jrt(e) {
  for (let t of [A, _])
    if (
      e.startsWith(`${t}

`)
    )
      return e.slice(t.length + 2);
  return e;
}
var P = "live_edit_conflict";
function j(e, t, r) {
  let n = Jrt(t),
    i = r === P ? Vn(n + N(e, n)) : Vn(n);
  return O(e, r, i)
    ? `${T(r)}

${n}`
    : n;
}
function N(e, t) {
  if (
    typeof e !== "object" ||
    e === null ||
    !("action" in e) ||
    e.action !== "live-edit" ||
    !("ops" in e) ||
    !Array.isArray(e.ops)
  )
    return "";
  let r = /\bops\[(\d+)\]/.exec(t),
    n = r === null ? e.ops : [e.ops[Number.parseInt(r[1], 10)]],
    i = new Set();
  for (let o of n)
    if (typeof o === "object" && o !== null && "target" in o) {
      let l = R(o.target);
      if (l !== "") i.add(l);
    }
  return i.size === 0 ? "" : `\x00${[...i].sort().join("\x00")}`;
}
var S = "schema";
function M(e) {
  if (e === void 0) return "";
  return e.issues
    .map((t) => {
      let r = t.code === "unrecognized_keys" ? [...t.keys].sort().join(",") : "";
      return `${t.code}:${t.path.map(String).join(".")}:${r}`;
    })
    .sort()
    .join("|");
}
function w(e) {
  return _$n(e.toolUseId) || N6e(e.toolUseId);
}
function fFn(e) {
  let { validationErrorSteer: t, validateInput: r, call: n } = e,
    i = {
      validationErrorSteer: (o, l) => B(o, l, t?.(o, l) ?? null),
      ...(r !== void 0 && { validateInput: V(r) }),
      call: D(n),
    };
  return Object.defineProperties(
    Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)),
    Object.getOwnPropertyDescriptors(i),
  );
}
function B(e, t, r) {
  let o = [O(e, S, M(t)) ? T(S) : null, r]
    .filter((l) => l !== null)
    .join(`

`);
  return o === "" ? null : o;
}
function V(e) {
  return async (t, r) => {
    let n = await e(t, r);
    if (n.result || w(r)) return n;
    return { ...n, message: j(t, n.message, `ec_${n.errorCode}`) };
  };
}
function D(e) {
  return async (t, r, ...n) => {
    if (w(r)) return e(t, r, ...n);
    let i;
    try {
      i = await e(t, r, ...n);
    } catch (o) {
      if (o instanceof Ve) o.message = j(t, o.message, o.reasonCode ?? "unknown");
      throw o;
    }
    return z(), i;
  };
}
function z() {
  de().rejectBreaker.clear();
}
class C {
  order = [];
  touch(e) {
    this.order = [e, ...this.order.filter((t) => t !== e)];
  }
  forget(e) {
    this.order = this.order.filter((t) => t !== e);
  }
  refs() {
    return this.order.map((e) => ({ slug: e }));
  }
}
function w6e(e, t) {
  let r = new Set(),
    n = new Set(),
    i = new Set();
  for (let f of e) {
    if (f.type !== "assistant" || !Array.isArray(f.message.content)) continue;
    for (let c of f.message.content)
      if (c.type === "tool_use") {
        if (c.name === Si) r.add(c.id);
        else if (c.name === Qr) n.add(c.id);
        else if (c.name === _t) i.add(c.id);
      }
  }
  let o = {},
    l = {},
    a = {},
    g = new C();
  for (let f of e) {
    if (f.type !== "user") continue;
    if (f.isMeta === !0 && typeof f.message.content === "string") {
      let c = rTn.exec(f.message.content)?.[1],
        u = c !== void 0 ? al(c) : null;
      if (u !== null)
        E(u, {
          frameUrls: o,
          artifactReadVersions: l,
          target: g,
          createdFromType: a,
          applyLinks: t?.applyLinks !== !1,
        });
      continue;
    }
    if (!Array.isArray(f.message.content)) continue;
    for (let c of f.message.content) {
      if (c.type !== "tool_result" || !c.tool_use_id) continue;
      let u = r.has(c.tool_use_id);
      if (u) {
        let d = c.is_error === !0 ? H(c.content) : null;
        if (d !== null) {
          E(d, {
            frameUrls: o,
            artifactReadVersions: l,
            target: g,
            createdFromType: a,
            applyLinks: t?.applyLinks !== !1,
          });
          continue;
        }
        K(f.toolUseResult, f.timestamp, o, l, g, a, t?.applyLinks !== !1);
      }
      if (u || n.has(c.tool_use_id)) Z(f.toolUseResult, l, g);
      else if (i.has(c.tool_use_id)) J(f.toolUseResult, l);
    }
  }
  return { frameUrls: o, artifactReadVersions: l, artifactRefs: g.refs(), createdFromType: a };
}
var G = /^(?:<tool_use_error>)?(?:Error: )?/,
  W = new RegExp(`^<${Gre} url="([^"]+)"/>`);
function H(e) {
  let t =
      typeof e === "string"
        ? e
        : Array.isArray(e)
          ? e
              .map((i) =>
                typeof i === "object" && i !== null && "text" in i && typeof i.text === "string" ? i.text : "",
              )
              .join(`
`)
          : "",
    r = Jrt(t.replace(G, "")),
    n = W.exec(r)?.[1];
  return n !== void 0 ? al(n) : null;
}
function mFn(e) {
  let t = new Map();
  for (let n of e) {
    if (n.type !== "assistant" || !Array.isArray(n.message.content)) continue;
    for (let i of n.message.content) {
      if (i.type !== "tool_use") continue;
      let o = ya(i.name)?.serverName;
      if (o !== void 0) t.set(i.id, o);
    }
  }
  let r = new Set();
  for (let n of e) {
    if (n.type !== "user" || !Array.isArray(n.message.content)) continue;
    for (let i of n.message.content) {
      if (i.type !== "tool_result" || i.is_error === !0 || !i.tool_use_id) continue;
      let o = t.get(i.tool_use_id);
      if (o !== void 0) r.add(o);
    }
  }
  return r;
}
function E(e, t) {
  for (let [r, n] of Object.entries(t.frameUrls))
    if (al(n.url) === e) {
      if ((delete t.frameUrls[r], t.applyLinks && !r.includes("\x00"))) U9(gt(r));
    }
  for (let [r, n] of Object.entries(t.createdFromType)) if (n.slug === e) delete t.createdFromType[r];
  delete t.artifactReadVersions[e], t.target.forget(e);
}
function K(e, t, r, n, i, o, l) {
  let a = e,
    g = e?.artifact_delete;
  if (g !== void 0) {
    let u = g?.url,
      d = typeof u === "string" ? al(u) : null;
    if (d !== null) E(d, { frameUrls: r, artifactReadVersions: n, target: i, createdFromType: o, applyLinks: l });
    return;
  }
  if (e?.created_from_type === !0) {
    let u = typeof a?.url === "string" ? al(a.url) : null,
      d = e.type?.url,
      m = typeof d === "string" ? al(d) : null;
    if (typeof a?.path !== "string") {
      if (u !== null) {
        if (typeof a?.version === "string") y(n, u, a.version);
        i.touch(u);
      }
      return;
    }
    if (u !== null && m !== null && !a.path.includes("\x00")) o[a.path] = { slug: u, typeSlug: m };
  }
  let f = typeof a?.url === "string" ? al(a.url) : null;
  if (typeof a?.url !== "string" || f === null || typeof a.path !== "string" || a.path.includes("\x00")) return;
  for (let [u, d] of Object.entries(r))
    if (u !== a.path && al(d.url) === f) {
      if ((delete r[u], l)) U9(gt(u));
    }
  if (l) sOe(gt(a.path), f);
  delete r[a.path];
  let c = typeof a.title === "string" ? aS(a.title) : null;
  if (
    ((r[a.path] = {
      url: a.url,
      updatedAt: Date.parse(t) || 0,
      ...(c !== null && { title: c }),
      ...(a.capabilities != null && typeof a.capabilities === "object" && { capabilities: a.capabilities }),
    }),
    typeof a.version === "string")
  )
    y(n, f, a.version);
  i.touch(f);
}
function gFn(e, t, r) {
  let n = new Set();
  for (let o of e) if (o.type === "assistant" && o.message.id) n.add(o.message.id);
  if ((wZn(n), tyn(), !r)) return { artifactReadVersions: {}, artifactReadObservers: {} };
  let i = w6e(e, { applyLinks: !1 }).artifactReadVersions;
  return { artifactReadVersions: i, artifactReadObservers: x(i, t) };
}
function x(e, t) {
  return t ? {} : Object.fromEntries(Object.keys(e).map((r) => [r, { main: "" }]));
}
function Y(e, t) {
  let r = Object.keys(e);
  return (
    r.length === Object.keys(t).length &&
    r.every((n) => {
      if (!(n in t)) return !1;
      let [i, o] = [e[n] ?? {}, t[n] ?? {}],
        l = Object.keys(i);
      return l.length === Object.keys(o).length && l.every((a) => i[a] === o[a]);
    })
  );
}
function y(e, t, r) {
  if (qre.test(r)) e[t] = r;
}
function Z(e, t, r) {
  let n = e?.artifactRead;
  if (!n || typeof n.slug !== "string" || al(`https://claude.ai/code/artifact/${n.slug}`) !== n.slug) return;
  if (n.seeded !== !1)
    if (typeof n.ver === "string") y(t, n.slug, n.ver);
    else delete t[n.slug];
  r.touch(n.slug);
}
function J(e, t) {
  let r = e?.artifactRead;
  if (
    r &&
    typeof r.slug === "string" &&
    typeof r.ver === "string" &&
    al(`https://claude.ai/code/artifact/${r.slug}`) === r.slug
  )
    y(t, r.slug, r.ver);
}
function dhe(e, t, r) {
  let { legacyConflict: n, continuesConversation: i = !1 } = r,
    { frameUrls: o, artifactReadVersions: l, artifactRefs: a } = t;
  Kue(), _Ee({ continuesConversation: i });
  let g = de().createdFromType;
  for (let [c, u] of Object.entries(t.createdFromType)) g.set(c, u);
  if (!i) gEe();
  Lgt(new Set(Object.keys(o).map((c) => gt(c))));
  let f = x(l, n);
  e((c) => {
    let u = Object.keys(c.frameUrls),
      d = Object.keys(o),
      m = Object.keys(l),
      b = c.artifactReadVersions ?? {},
      v = c.artifactRefs ?? [];
    if (
      u.length === d.length &&
      u.every((p) => c.frameUrls[p]?.url === o[p]?.url && c.frameUrls[p]?.updatedAt === o[p]?.updatedAt) &&
      m.length === Object.keys(b).length &&
      m.every((p) => b[p] === l[p]) &&
      v.length === a.length &&
      v.every((p, F) => p.slug === a[F]?.slug && p.pin === void 0) &&
      c.frameNavPath == null &&
      !c.frameExpanded &&
      Y(c.artifactReadObservers ?? {}, f)
    )
      return c;
    return {
      ...c,
      frameUrls: o,
      artifactReadVersions: l,
      artifactReadObservers: f,
      artifactRefs: a,
      frameNavPath: null,
      frameExpanded: !1,
    };
  });
}
export { pFn, Jrt, fFn, w6e, mFn, gFn, dhe };
