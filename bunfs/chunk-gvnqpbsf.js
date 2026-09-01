// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
class o {
  #o = false;
  #s = false;
  get backgroundTasksDisabled() {
    return this.#o;
  }
  get unsandboxedCommandsDisabled() {
    return this.#s;
  }
  disableBackgroundTasks() {
    this.#o = true;
  }
  disableUnsandboxedCommands() {
    this.#s = true;
  }
}
var s = new J(() => new o());
function z2() {
  return s.of(G().host);
}
export { z2 };
