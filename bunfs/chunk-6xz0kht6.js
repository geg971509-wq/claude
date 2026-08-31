// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
function jce(e, n) {
  return { ...e, endedByModel: n };
}
function Hte(e) {
  return e?.endedByModel;
}
function nmt() {
  return !1;
}
function Rdn() {
  return "";
}
function wk(e) {
  let n = Rdn();
  return n === "" ? e : `${e} ${n}`;
}
export { jce, Hte, nmt, Rdn, wk };
