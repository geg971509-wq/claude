// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Je } from "/$bunfs/root/chunk-988p40e0.js";
import { so } from "/$bunfs/root/chunk-82w4mtvq.js";
import { vH, LV, SC } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Rq } from "/$bunfs/root/chunk-d7066vf7.js";
var u = Object.keys(so);
function U2e(e) {
  return {
    sonnet: { envVarPriority: ["ANTHROPIC_DEFAULT_SONNET_MODEL"], defaultKey: vH },
    opus: { envVarPriority: ["ANTHROPIC_DEFAULT_OPUS_MODEL"], defaultKey: e },
    haiku: { envVarPriority: ["ANTHROPIC_SMALL_FAST_MODEL", "ANTHROPIC_DEFAULT_HAIKU_MODEL"], defaultKey: LV },
  };
}
function l(e) {
  if (e.startsWith("sonnet")) return "sonnet";
  if (e.startsWith("opus")) return "opus";
  if (e.startsWith("haiku")) return "haiku";
  return;
}
function T(e) {
  let o = SC(e);
  for (let r of u) if (SC(so[r].firstParty) === o) return r;
  return;
}
function tEr(e) {
  return `${e.fromKey}-to-${e.toKey}`;
}
function B2e(e, o) {
  let r = [];
  for (let t of Object.keys(e)) {
    let n = e[t],
      i,
      f;
    for (let c of n.envVarPriority) {
      let K = process.env[c]?.trim();
      if (!K) continue;
      if (
        (c === "ANTHROPIC_DEFAULT_OPUS_MODEL" && Rq("opus")) ||
        (c === "ANTHROPIC_DEFAULT_SONNET_MODEL" && Rq("sonnet"))
      )
        continue;
      if (o?.(K)) continue;
      let y = T(K);
      if (!y || l(y) !== t || y === n.defaultKey) continue;
      (i = c), (f = y);
      break;
    }
    if (!i || !f) continue;
    let s = n.defaultKey,
      d = u.indexOf(f),
      p = u.indexOf(s);
    if (d >= p) continue;
    r.push({ tier: t, envVar: i, pinnedKey: f, defaultKey: s });
  }
  return r;
}
function j2e(e, o) {
  let r = e?.trim();
  if (!r) return;
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return;
  let t = T(r);
  if (!t) return;
  let n = l(t);
  if (!n) return;
  if (n === "haiku") return;
  let i = o[n];
  if (Je().modelOverrides?.[so[i.defaultKey].firstParty]) return;
  return { tier: n, envVar: i.envVarPriority.at(-1), value: r };
}
function W2e(e, o) {
  let r = [];
  for (let t of Object.keys(e)) {
    let n = e[t];
    if (o?.[so[n.defaultKey].firstParty]) continue;
    if (
      n.envVarPriority.some((f) => {
        let s = process.env[f]?.trim();
        if (!s) return false;
        let d = T(s);
        if (!d) return true;
        return l(d) === t;
      })
    )
      continue;
    r.push({ tier: t, envVar: n.envVarPriority.at(-1), defaultKey: n.defaultKey });
  }
  return r;
}
function q2e(e, o) {
  let r = u.indexOf(e),
    t = [];
  for (let n = r - 1; n >= 0; n--) {
    let i = u[n];
    if (l(i) === o) t.push(i);
  }
  return t;
}
export { U2e, tEr, B2e, j2e, W2e, q2e };
