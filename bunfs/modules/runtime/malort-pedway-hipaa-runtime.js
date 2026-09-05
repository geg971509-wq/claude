// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Fn, gh } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { _h } from "/$bunfs/root/chunk-e7rq8w09.js";
import { tf } from "/$bunfs/root/chunk-fd2h00ye.js";
var t = {
  enabled: false,
  pixelValidation: false,
  clipboardPasteMultiline: true,
  mouseAnimation: true,
  hideBeforeAction: true,
  autoTargetDisplay: true,
  clipboardGuard: true,
  maskFailClosed: true,
  adaptiveResolution: false,
  coordinateMode: "pixels",
};
function o() {
  return { ...t, ...gh("tengu_malort_pedway", t) };
}
function r() {
  let e = Fn();
  return e === "max" || e === "pro";
}
function Yat() {
  if (_h("hipaa")) return false;
  return r() && o().enabled;
}
function $Lt() {
  let { enabled: e, coordinateMode: a, ...n } = o();
  return n;
}
function L_e() {
  let e = tf();
  return (e.frozenCoordinateMode ??= o().coordinateMode), e.frozenCoordinateMode;
}
export { Yat, $Lt, L_e };
