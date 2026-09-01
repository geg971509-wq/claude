// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { J } from "/$bunfs/root/chunk-f9h0bg01.js";
import { fMn } from "/$bunfs/root/chunk-6gkpcbrk.js";
function t() {
  let o = new Map();
  return {
    known(e) {
      let n = Math.max(o.get(e) ?? 0, 1);
      return o.set(e, n), n;
    },
    next(e) {
      let n = (o.get(e) ?? 0) + 1;
      return o.set(e, n), n;
    },
  };
}
function uXt() {
  return {
    consentPin: fMn(),
    generations: t(),
    pointedToCommand: { shown: false },
    setAsideSessions: new Set(),
    decided: Ue(),
  };
}
var cnt = new J(uXt);
export { uXt, cnt };
