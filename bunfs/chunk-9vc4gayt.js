// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Ma } from "/$bunfs/root/chunk-nwb64bac.js";
var r = { value: "", active: false, launchWarning: null, vimMode: "INSERT" };
function o() {
  return Ma({ ...r });
}
var j_ = o();
function XQ() {
  return j_.getState().value;
}
function pxt(n, t) {
  n.setState((e) => {
    if (e.value === t) return e;
    if (e.launchWarning !== null && e.value !== "" && t === "") return { ...e, value: t, launchWarning: null };
    return { ...e, value: t };
  });
}
function d6e(n) {
  pxt(j_, n);
}
function $rt(n, t) {
  n.setState((e) => (e.active === t ? e : { ...e, active: t }));
}
function fxt(n) {
  $rt(j_, n);
}
function lQt(n) {
  j_.setState((t) => (t.vimMode === n ? t : { ...t, vimMode: n }));
}
function cQt(n, t) {
  n.setState((e) =>
    e.launchWarning?.type === t.type && e.launchWarning.prefillLength === t.prefillLength
      ? e
      : { ...e, launchWarning: t },
  );
}
function uQt(n) {
  cQt(j_, n);
}
export { j_, XQ, pxt, d6e, $rt, fxt, lQt, cQt, uQt };
