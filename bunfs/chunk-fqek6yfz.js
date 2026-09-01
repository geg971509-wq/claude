// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Lo } from "/$bunfs/root/chunk-5c5qq1s7.js";
var Pst = "in-process";
class d6n {
  captured = null;
  cliOverride = null;
  setCliOverride(e) {
    this.cliOverride = e;
  }
  capture(e) {
    this.captured = e;
  }
  replaceWith(e) {
    (this.captured = e), (this.cliOverride = null);
  }
}
var Ufr = new J(() => new d6n());
function t() {
  return Ufr.of(G().host);
}
function VEr(e) {
  t().setCliOverride(e);
}
function xrn() {
  return t().cliOverride;
}
function Irn(e) {
  t().replaceWith(e), n(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`);
}
function Prn() {
  return t().captured !== null;
}
function BDt() {
  let e = t();
  if (e.cliOverride) e.capture(e.cliOverride), n(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);
  else e.capture(Lo("teammateMode", Pst).value), n(`[TeammateModeSnapshot] Captured from config: ${e.captured}`);
}
function DHe() {
  let e = t();
  if (e.captured === null)
    h(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")), BDt();
  return e.captured ?? Pst;
}
export { Pst, d6n, Ufr, VEr, xrn, Irn, Prn, BDt, DHe };
