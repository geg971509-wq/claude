// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Mkn } from "/$bunfs/root/chunk-f9h0bg01.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { ee } from "/$bunfs/root/chunk-4fwj3vnx.js";
import { Fo } from "/$bunfs/root/chunk-q14dgq5g.js";
import { rt, LN, ir } from "/$bunfs/root/chunk-2rx5nghb.js";
import { Je } from "/$bunfs/root/chunk-988p40e0.js";
import { Tt, y4t } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { sA, Ne } from "/$bunfs/root/chunk-82w4mtvq.js";
import { se } from "/$bunfs/root/chunk-q1fyd2qk.js";
import { k0 } from "/$bunfs/root/chunk-phnty5cg.js";
function i7t(o) {
  if (o >= 70) return "horizontal";
  return "compact";
}
function fQ(o, r) {
  if (se(o) <= r) return o;
  let t = "/",
    e = "\u2026",
    i = 1,
    n = 1,
    s = o.split(t),
    c = s[0] || "",
    l = s.at(-1) || "",
    m = se(c),
    d = se(l);
  if (s.length === 1) return rt(o, r);
  if (c === "" && i + n + d >= r) return `${t}${rt(l, Math.max(1, r - n))}`;
  if (c !== "" && i * 2 + n + d >= r) return `${e}${t}${rt(l, Math.max(1, r - i - n))}`;
  if (s.length === 2) {
    let u = r - i - n - d;
    return `${LN(c, u)}${e}${t}${l}`;
  }
  let f = r - m - d - i - 2 * n;
  if (f <= 0) {
    let u = Math.max(0, r - d - i - 2 * n);
    return `${LN(c, u)}${t}${e}${t}${l}`;
  }
  let g = [];
  for (let u = s.length - 2; u > 0; u--) {
    let p = s[u];
    if (p && se(p) + n <= f) g.unshift(p), (f -= se(p) + n);
    else break;
  }
  if (g.length === 0) return `${c}${t}${e}${t}${l}`;
  return `${c}${t}${e}${t}${g.join(t)}${t}${l}`;
}
function ARe() {
  let o =
      a.DEMO_VERSION ??
      `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.252", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-08-31T16:02:57Z", GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}${k0()}`,
    r = Mkn(),
    t = a.DEMO_VERSION ? "/code/claude" : Fo(ee()),
    e = a.CLAUDE_CODE_HIDE_CWD ? "" : r ? `${t} in ${r.replace(/^https?:\/\//, "")}` : t,
    i = Ne(),
    n = i !== "firstParty" ? sA[i] : Tt() ? y4t() : "API Usage Billing",
    s = Je().agent;
  return { version: o, cwd: e, billingType: n, agentName: s };
}
function s7t(o, r, t) {
  if (se(o) + 3 + se(r) > t) return { shouldSplit: !0, truncatedModel: ir(o, t), truncatedBilling: ir(r, t) };
  return { shouldSplit: !1, truncatedModel: ir(o, Math.max(t - se(r) - 3, 10)), truncatedBilling: r };
}
export { i7t, fQ, ARe, s7t };
