// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
class e {
  hooks = null;
  uiMounted = false;
  setHooks(o) {
    this.hooks = o;
  }
  setUiMounted(o) {
    this.uiMounted = o;
  }
}
var n = new e();
function $gn(o) {
  n.setHooks(o);
}
function Ugn() {
  return n.hooks;
}
function YYn(o) {
  n.setUiMounted(o);
}
function k5e() {
  return n.uiMounted;
}
export { $gn, Ugn, YYn, k5e };
