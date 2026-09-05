// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Se } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ee } from "/$bunfs/root/chunk-4fwj3vnx.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { yvn, _zt } from "/$bunfs/root/chunk-rgw52f13.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
async function n(o, t, e) {
  return;
}
async function QWt(o) {
  for (let t of te([Se(), ee()]))
    try {
      let e = await yvn(o, t);
      if (e !== void 0) {
        let r = await n(t, e.gitRoot, o);
        if (typeof r === "string") _zt(r, e.gitRoot, e.canonicalRoot);
      }
    } catch (e) {
      h(e);
    }
}
export { QWt };
