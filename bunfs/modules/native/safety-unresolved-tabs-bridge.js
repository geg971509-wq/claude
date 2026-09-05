// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { lxe } from "/$bunfs/root/chunk-4wsm8srq.js";
import { elt } from "/$bunfs/root/chunk-6gr0jjw9.js";
import { tlt } from "/$bunfs/root/chunk-tgj2gm7d.js";
import { K } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Xt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { on } from "/$bunfs/root/chunk-twwd9fep.js";
import { St } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { Ze, R } from "/$bunfs/root/chunk-ypdw393e.js";
import { V } from "/$bunfs/root/chunk-fv016jr6.js";
import { o1e, i1e } from "/$bunfs/root/chunk-rf51999f.js";
import { HH } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Us } from "/$bunfs/root/chunk-v7yhn7cf.js";
import { he } from "/$bunfs/root/chunk-h605j25g.js";
import { Qy } from "/$bunfs/root/chunk-wgz3g40p.js";
import { pp } from "/$bunfs/root/chunk-2t3rnt88.js";
import { Tye, T9n, G7 } from "/$bunfs/root/chunk-zze8764r.js";
import { uI, Nte } from "/$bunfs/root/chunk-986hvegp.js";
import { a9e } from "/$bunfs/root/chunk-ak3rzqa8.js";
import { Ya } from "/$bunfs/root/chunk-jjkewjsg.js";
import { Fg } from "/$bunfs/root/chunk-qy75zxb2.js";
import { He } from "/$bunfs/root/chunk-79g5tayq.js";
function H(t) {
  return t.replace(/^www\./i, "");
}
function P(t) {
  if (t.startsWith("[")) {
    let n = t.indexOf("]");
    return n === -1 ? t : t.slice(0, n + 1);
  }
  let e = t.lastIndexOf(":");
  return e === -1 ? t : t.slice(0, e);
}
function C(t) {
  let e = o1e(t)
      .replace(/\.+(?=$|:)/, "")
      .toLowerCase(),
    n = P(e),
    r = e.slice(n.length),
    o = (i1e(n) || n).replace(/\.+$/, "");
  return H(o + r);
}
function U(t) {
  let e;
  try {
    e = new URL(t);
  } catch {
    return;
  }
  if (e.host === "") return;
  return `${e.protocol}//${C(e.host)}`;
}
function G(t, e) {
  let n = U(t),
    r = U(e);
  return n === void 0 || r === void 0 || n !== r;
}
function A(t, e) {
  let n = pp().lastExecutedTabUrlByScope.get(t);
  if (n === void 0) return;
  return G(n, e) ? { from: n, to: e } : void 0;
}
function E(t, e) {
  pp().lastExecutedTabUrlByScope.set(t, e);
}
var D = 200;
function O(t, e) {
  let n = pp().resolvedHostByToolUseId;
  if (n.size >= D) n.clear();
  n.set(t, e);
}
function j(t, e) {
  let n = pp().resolvedUrlByToolUseId;
  if (n.size >= D) n.clear();
  n.set(t, e);
}
function F() {
  let t = K();
  return { sessionId: t };
}
function CAr(t, e) {
  pp().bridgeBinding = { context: t, socketClient: e };
}
var z = new RegExp(`^${Nte}\\(([^)]+)\\)$`);
function x(t) {
  let e = new Set(),
    n = [],
    r = new Set(),
    o = new Map();
  return (
    L(t.alwaysDenyRules, r, o), L(t.alwaysAllowRules, e, o, n, r), { allowed: e, denied: r, allowedRaw: n, sourceOf: o }
  );
}
function q(t, e) {
  let n = uI.slice(0, -2),
    r = `${uI}*`;
  for (let o of Object.values(t.alwaysAllowRules))
    for (let s of o ?? []) {
      let i = s.replace(/\(\*?\)$/, "");
      if (i === e || i === n || i === r) return true;
    }
  return false;
}
function N(t, e) {
  return t.has(e) || t.has(P(e));
}
function L(t, e, n, r, o) {
  for (let [s, i] of Object.entries(t))
    for (let m of i ?? []) {
      let l = z.exec(m);
      if (l?.[1]) {
        let d = C(l[1]);
        if (o && N(o, d)) continue;
        if (!e.has(d)) e.add(d), n.set(d, s), r?.push(l[1]);
      }
    }
}
function k(t) {
  let e = t.trim(),
    n;
  try {
    if (((n = new URL(e)), n.protocol !== "http:" && n.protocol !== "https:")) {
      if (!/^(localhost|[a-z0-9-]+\.[a-z0-9.-]+):\d+(?=$|[/?#])/i.test(e)) return;
      n = void 0;
    }
  } catch {}
  if (!n)
    try {
      n = new URL(`https://${e}`);
    } catch {
      return;
    }
  if (!n.host || n.username || n.password) return;
  return { host: n.host, url: n.href };
}
var W = new Set([
    "tabs_context_mcp",
    "tabs_create_mcp",
    "tabs_close_mcp",
    "resize_window",
    "shortcuts_list",
    "list_connected_browsers",
  ]),
  Y = new Set(["switch_browser", "select_browser"]),
  Q = {
    tab_missing:
      "Couldn't determine which page this action targets. Pass the tabId from tabs_context_mcp and try again.",
    batch_multiple_tabs: "Claude in Chrome: a browser_batch must act on one tab. Pass the same tabId on every action.",
    batch_after_navigate:
      "Claude in Chrome: a browser_batch cannot act on a page after navigating to it. Issue the navigate on its own, then batch the actions on the loaded page.",
    batch_browser_switch: "Claude in Chrome: switch browsers in its own call, not inside a browser_batch.",
    batch_malformed_item:
      "Claude in Chrome: a browser_batch action must be {name, input} and cannot nest another browser_batch.",
  };
function X(t, e) {
  let n = [];
  if (t === "browser_batch") {
    if (!Array.isArray(e.actions)) return { kind: "deny", code: "batch_malformed_item" };
    for (let s of e.actions) {
      if (!He(s) || typeof s.name !== "string" || s.name === "browser_batch")
        return { kind: "deny", code: "batch_malformed_item" };
      n.push({ name: s.name, input: He(s.input) ? s.input : {} });
    }
  } else n.push({ name: t, input: e });
  let r = new Set(),
    o = false;
  for (let s of n) {
    if (s.name === "navigate") {
      o = true;
      continue;
    }
    if (Y.has(s.name)) {
      if (n.length > 1) return { kind: "deny", code: "batch_browser_switch" };
      continue;
    }
    if (W.has(s.name)) continue;
    if (o) return { kind: "deny", code: "batch_after_navigate" };
    if (typeof s.input.tabId !== "number") return { kind: "deny", code: "tab_missing" };
    r.add(s.input.tabId);
  }
  if (r.size === 0) return { kind: "none" };
  if (r.size > 1) return { kind: "deny", code: "batch_multiple_tabs" };
  return { kind: "tab", tabId: [...r][0] };
}
var J = 5000;
async function B(t) {
  let e = pp().bridgeBinding;
  if (!e) return;
  try {
    return await Xt(
      (async () => {
        if (!(await e.socketClient.ensureConnected())) return;
        let n = await e.socketClient.callTool(
          "tabs_context_mcp",
          { createIfEmpty: false, includePermissionState: false },
          { permissionMode: "ask", sessionScope: F() },
        );
        if (!n || n.error) return;
        let r = n.result?.content,
          o =
            Array.isArray(r) && r[0] && typeof r[0] === "object" && "text" in r[0] && typeof r[0].text === "string"
              ? r[0].text
              : void 0;
        if (!o) return;
        return V(o).availableTabs?.find((i) => i.tabId === t)?.url;
      })(),
      J,
      "queryTabUrl bridge call",
    );
  } catch {
    return;
  }
}
var Z = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
function M(t) {
  return { type: "text", text: `[Image from Claude in Chrome \u2014 ${t}; not inlined]` };
}
function ee(t) {
  if (!t) return false;
  let e = St(t, ";").trim().toLowerCase();
  return Z.has(e === "image/jpg" ? "image/jpeg" : e);
}
async function te(t, e) {
  let n = Ya(e),
    r = [];
  for (let o of t.content ?? [])
    if (o.type === "text") r.push({ type: "text", text: o.text });
    else if (o.type === "image")
      if (ee(o.mimeType))
        try {
          let { block: s } = await Fg({ data: String(o.data), mediaType: o.mimeType, limits: n });
          r.push(s);
        } catch {
          r.push(M("could not be decoded"));
        }
      else r.push(M(`unsupported type ${o.mimeType ?? "unknown"}`));
  return r;
}
function ne(t) {
  if (!Array.isArray(t.actions)) return;
  for (let e of t.actions) {
    if (!He(e) || typeof e.name !== "string") continue;
    let n = He(e.input) ? e.input : {};
    if (lxe.has(e.name) && Tye(e.name, n)) continue;
    if (
      e.name === "navigate" &&
      typeof n.url === "string" &&
      (n.url.trim().toLowerCase() === "back" || n.url.trim().toLowerCase() === "forward")
    )
      continue;
    if ((e.name === "navigate" && typeof n.url === "string") || typeof n.tabId === "number")
      return { toolName: e.name, input: n };
  }
  return;
}
function oe(t) {
  if (!Array.isArray(t.actions)) return false;
  return t.actions.some((e) => {
    if (!He(e) || typeof e.name !== "string") return true;
    return e.name === "browser_batch" || (lxe.has(e.name) && !Tye(e.name, He(e.input) ? e.input : {}));
  });
}
function re(t, e, n) {
  let r = a9e(t, e);
  return n ? `Allow Claude in Chrome to ${r} on ${n}?` : `Allow Claude in Chrome to ${r}?`;
}
function se(t) {
  return async (e) => {
    let n;
    try {
      n = new URL(e.url).host;
    } catch {}
    let r = !!n && t.has(C(n));
    if (!r) p("chrome_permission_prompt", "stale_host_mismatch");
    return r;
  };
}
async function ie(t, e, n, r) {
  let o = pp().bridgeBinding;
  if (!o)
    throw (
      (p("chrome_permission_prompt", "binding_missing"),
      Error("Claude in Chrome bridge is not initialized in this session."))
    );
  let s = n.abortController.signal;
  if (s.aborted) throw new Ze("Claude in Chrome tool call aborted");
  let i,
    m = new Promise((a, c) => {
      (i = () => c(new Ze("Claude in Chrome tool call aborted"))), s.addEventListener("abort", i, { once: true });
    }),
    l;
  try {
    l = await Promise.race([tlt(o.context, o.socketClient, t, e ?? {}, r), m]);
  } finally {
    if (i) s.removeEventListener("abort", i);
  }
  if (l.isError) {
    let a =
        (l.content ?? [])
          .flatMap((b) => (b.type === "text" ? [b.text] : []))
          .join(`
`) || `${t} failed`,
      c = l._meta,
      h =
        c?.isBridgeTimeout === true
          ? "bridge_timeout"
          : c?.isFrontLoadBoundExceeded === true
            ? "front_load_bound_exceeded"
            : void 0;
    throw new R(a, "Claude in Chrome tool returned error", `chrome_${h ?? elt(t, a)}`);
  }
  return { data: await te(l, n.options.mainLoopModel), ...(l._meta && { mcpMeta: { _meta: l._meta } }) };
}
function bon(t) {
  let e = `${uI}${t}`;
  return {
    checkPermissions: async (o, s) => {
      let i = s.toolUseId,
        m = lxe.has(t);
      if (m && Tye(t, o)) return { behavior: "allow", updatedInput: o };
      let l = (m && !Tye(t, o)) || (t === "browser_batch" && oe(o));
      if (
        t === "navigate" &&
        typeof o.url === "string" &&
        (o.url.trim().toLowerCase() === "back" || o.url.trim().toLowerCase() === "forward")
      )
        return { behavior: "allow", updatedInput: o };
      let d = t === "browser_batch" ? ne(o) : { input: o, toolName: t },
        a;
      if (d && d.toolName === "navigate" && typeof d.input.url === "string") {
        if (((a = k(d.input.url)), !a))
          return (
            p("chrome_permission_prompt", "non_web_url"),
            {
              behavior: "deny",
              message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: non-web or unparseable URL",
                classifierApprovable: false,
              },
            }
          );
      } else if (d && typeof d.input.tabId === "number") {
        let u = await B(d.input.tabId);
        if (!u)
          return (
            p("chrome_permission_prompt", "tab_url_unresolved"),
            {
              behavior: "deny",
              message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: tab URL unresolved",
                classifierApprovable: false,
              },
            }
          );
        if (((a = k(u)), !a))
          return (
            p("chrome_permission_prompt", "non_web_tab_url"),
            {
              behavior: "deny",
              message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: non-web or unparseable tab URL",
                classifierApprovable: false,
              },
            }
          );
      }
      let c = he(s),
        h = HH(
          s.options?.tools?.find((u) => on(u, e)),
          c,
        ),
        b = h === "bypassPermissions" || (h === "plan" && c.isBypassPermissionsModeAvailable),
        v = c.chromeNavigationClassifierEnabled === true && !b && (c.chromeClassifierFloorEnabled === true || Qy(h)),
        f,
        T,
        I = () => {
          if (!i) return;
          if (T === void 0) pp().resolvedUrlByToolUseId.delete(i);
          else j(i, T);
          if (f === void 0) T9n(i);
        };
      if (v) {
        let u = X(t, o);
        if (u.kind === "deny")
          return (
            p("chrome_permission_prompt", u.code),
            I(),
            {
              behavior: "deny",
              message: Q[u.code],
              decisionReason: { type: "safetyCheck", reason: `Claude in Chrome: ${u.code}`, classifierApprovable: false },
            }
          );
        if (u.kind === "tab") {
          let w = a && d?.toolName !== "navigate" && d?.input.tabId === u.tabId ? a.url : await B(u.tabId),
            S = w === void 0 ? void 0 : k(w);
          if (S === void 0)
            return (
              p("chrome_permission_prompt", "tab_url_unresolved"),
              I(),
              {
                behavior: "deny",
                message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
                decisionReason: {
                  type: "safetyCheck",
                  reason: "Claude in Chrome: tab URL unresolved",
                  classifierApprovable: false,
                },
              }
            );
          if (((f = A(K(), S.url)), !(l && c.mode === "plan"))) T = S.url;
        }
      }
      I();
      let _ = false;
      if (a) {
        let u = x(c),
          w = C(a.host),
          S = u.sourceOf.get(w) ?? u.sourceOf.get(P(w)) ?? "session";
        if (N(u.denied, w))
          return (
            g("chrome_permission_prompt", "domain_rule_denied"),
            {
              behavior: "deny",
              message: `Claude in Chrome is denied on ${a.host}.`,
              decisionReason: {
                type: "rule",
                rule: { source: S, ruleBehavior: "deny", ruleValue: { toolName: Nte, ruleContent: a.host } },
              },
            }
          );
        if (((_ = u.allowed.has(w)), _ && f === void 0 && c.chromeClassifierFloorEnabled !== true && !l)) {
          if (i) O(i, a);
          return {
            behavior: "allow",
            updatedInput: o,
            decisionReason: {
              type: "rule",
              rule: { source: S, ruleBehavior: "allow", ruleValue: { toolName: Nte, ruleContent: a.host } },
            },
          };
        }
        if (i && (_ || c.chromeClassifierFloorEnabled === true || !q(c, e))) O(i, a);
      }
      if (l && c.mode === "plan") return { behavior: "passthrough", message: "Claude in Chrome requires permission." };
      return {
        behavior: "ask",
        message: "Claude in Chrome requires permission.",
        suggestions: a
          ? _
            ? void 0
            : [
                {
                  type: "addRules",
                  rules: [{ toolName: Nte, ruleContent: a.host }],
                  behavior: "allow",
                  destination: "session",
                },
              ]
          : [
              {
                type: "addRules",
                rules: [{ toolName: e, ruleContent: void 0 }],
                behavior: "allow",
                destination: "session",
              },
            ],
        decisionReason: f
          ? { type: "safetyCheck", reason: "Claude in Chrome: cross-site navigation pending", classifierApprovable: true }
          : { type: "other", reason: a ? `Claude in Chrome action on ${a.host}` : "Claude in Chrome action" },
        metadata: {
          command: {
            name: e,
            description: re(t, o, a?.host),
            chrome: a ? { ...a, domainAllowed: _, navigation: f } : void 0,
          },
        },
      };
    },
    call: async (o, s) => {
      let i = s.toolUseId,
        m = i ? pp().resolvedHostByToolUseId.get(i)?.host : void 0,
        l = i ? pp().resolvedUrlByToolUseId.get(i) : void 0;
      if (i) pp().resolvedHostByToolUseId.delete(i), pp().resolvedUrlByToolUseId.delete(i);
      let d = he(s),
        a = s.options?.tools?.find((_) => on(_, e)),
        c = HH(a, d) === "bypassPermissions",
        h = x(d),
        b = h.allowed,
        v = [...h.allowedRaw];
      if (m && !b.has(C(m))) b.add(C(m)), v.push(m);
      let f = F(),
        T = c
          ? { permissionMode: "skip_all_permission_checks", sessionScope: f }
          : m
            ? { permissionMode: "follow_a_plan", allowedDomains: v, onPermissionRequest: se(b), sessionScope: f }
            : v.length > 0
              ? { permissionMode: "follow_a_plan", allowedDomains: v, sessionScope: f }
              : { permissionMode: "ask", sessionScope: f },
        I = await ie(t, o, s, T);
      if (l !== void 0) E(K(), l);
      if (m) y("chrome_permission_prompt");
      return I;
    },
  };
}
export { CAr, bon };
