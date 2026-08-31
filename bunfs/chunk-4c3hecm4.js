// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
var s = Object.freeze({});
class t {
  #o;
  register(o) {
    this.#o ??= o;
  }
  get runtime() {
    return this.#o ?? s;
  }
  get registered() {
    return this.#o !== void 0;
  }
}
var r = new J(() => new t());
function e() {
  return r.of(G().host);
}
function RVn(o) {
  e().register(o);
}
function AGe() {
  return e().runtime;
}
export { RVn, AGe };
