// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ce } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { zyn } from "/$bunfs/root/chunk-9319g175.js";
function IKn(r) {
  if (typeof r !== "object" || r === null) return !1;
  let e = r;
  return (
    typeof e.name === "string" &&
    (e.errorCode === void 0 || typeof e.errorCode === "string") &&
    (e.error === void 0 || typeof e.error === "string")
  );
}
var u = 200;
function Rr(r, e = 64) {
  if (typeof r !== "string") return "";
  return Da(r.normalize("NFKC").replace(/['`]/g, " "), e, "none");
}
function C2t(r, e = 1024) {
  return Da(r, e);
}
function Da(r, e = u, n = "all") {
  if (typeof r !== "string") return "";
  let o = zyn(r.normalize("NFKC"))
      .replaceAll(
        /[<>";\u2018\u2019\u201A\u201C\u201D\u201E\u00AB\u00BB\u2039\u203A\u2329\u232A\u27E8\u27E9\u27EA\u27EB\u3008\u3009\u300A\u300B]/g,
        " ",
      )
      .replaceAll(/\s+/g, " ")
      .trim(),
    t = Math.max(a, e + c),
    i = o.length > t,
    s = v2t(i ? ce(o, t) : o, n);
  return i || s.length > e ? `${ce(s, e)}\u2026` : s;
}
var l = 500;
function fI(r) {
  let e = zyn(r).replaceAll(/\s+/g, " ").trim(),
    n = v2t(e.length > a ? ce(e, a) : e);
  return n.length > l ? `${ce(n, l)}\u2026` : n;
}
function v2t(r, e = "all") {
  function n(o, t, i) {
    return /[0-9._~+/=%-]/.test(i) ? `${t} [redacted]` : o;
  }
  if (e === "none") return r;
  return r
    .replace(
      /(?:\b|(?<=\\[A-Za-z"']))(bearer|basic)[\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?([A-Za-z0-9._~+/=%-]{8,})/gi,
      n,
    )
    .replace(
      /(?:\b|(?<=\\[A-Za-z"']))((?:access[-_ ]?|refresh[-_ ]?|id[-_ ]?|client[-_ ]?|api[-_ ]?|x[-_]api[-_ ]?|session[-_ ]?|auth[-_ ]?)?(?:token|key|secret|password|authorization|credential)s?)(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*([A-Za-z0-9._~+/=%-]{8,})/gi,
      n,
    );
}
var a = 2000,
  c = 512;
function $mt(r) {
  let e = r.errorCode ? ` (${r.errorCode})` : "",
    n = r.error ? `: "${r.error}"` : "";
  return `${r.name}${e}${n}`;
}
var NS = "Blocked by enterprise managed policy",
  Cpn = "Disabled by disableClaudeAiConnectors setting",
  dwe = "Disabled in /mcp",
  p = new Set([NS, Cpn]);
function Yce(r) {
  return r !== void 0 && p.has(r);
}
function Kb(r) {
  return r.type === "failed" && r.errorCode === "UNCONFIGURED";
}
function kze(r) {
  return r
    .filter((e) => e.type === "failed")
    .filter((e) => !Kb(e))
    .map((e) => ({
      name: Da(e.name),
      ...(e.errorCode !== void 0 && { errorCode: Da(e.errorCode) }),
      ...((e.error !== void 0 || e.displayDetail !== void 0) && {
        error: [e.error, e.displayDetail]
          .filter((n) => Boolean(n))
          .map((n) => Da(n))
          .join(" "),
      }),
    }));
}
export { IKn, Rr, C2t, Da, fI, v2t, $mt, NS, Cpn, dwe, Yce, Kb, kze };
