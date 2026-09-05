// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
class e {
  directories = [];
  get() {
    return this.directories;
  }
  publish(o) {
    let i = te([...o.additionalWorkingDirectories.values()].map((t) => t.path)).sort(),
      r = this.directories;
    if (r.length === i.length && r.every((t, s) => t === i[s])) return false;
    return (this.directories = i), true;
  }
  reset() {
    this.directories = [];
  }
}
var a = new J(() => new e());
function n() {
  return a.of(G().host);
}
function kae() {
  return n().get();
}
function VDt(o) {
  return n().publish(o);
}
export { kae, VDt };
