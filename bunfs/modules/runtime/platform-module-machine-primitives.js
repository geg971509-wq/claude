// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Li } from "/$bunfs/root/chunk-z5yhadgs.js";
import { S } from "/$bunfs/root/chunk-yz031c9r.js";
var i = S(function (e) {
  Object.defineProperty(e, "__esModule", { value: true });
  e.getMachineId = void 0;
  var d = Li();
  async function n() {
    d.diag.debug("could not read machine-id: unsupported platform");
    return;
  }
  e.getMachineId = n;
});
export default i();
