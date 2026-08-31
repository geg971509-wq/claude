// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ae } from "/$bunfs/root/chunk-386w1sy8.js";
import { QZ, Ef } from "/$bunfs/root/chunk-93max1bs.js";
import { d_t } from "/$bunfs/root/chunk-qd35gw0c.js";
import { Et } from "/$bunfs/root/chunk-5rt2mvvk.js";
var n = "\x1B]8;;",
  o = "\x07";
function Yg(e, r, i) {
  let t = r === void 0 ? void 0 : Et(r),
    s = t === void 0 || t === e || e === `http://${t}` || e === `https://${t}`;
  if (
    !((s && (i?.assumeSupport ?? !1) && process.stdout.isTTY === !0 && (QZ() ?? !0)) || (i?.supportsHyperlinks ?? Ef()))
  ) {
    if (r !== void 0 && !s) return `${r} (${e})`;
    return e;
  }
  let p = ((i?.themeName ? d_t(i.themeName) : !1) ? ae.blue : ae.blueBright)(r ?? e);
  return `${n}${e}${o}${p}${n}${o}`;
}
export { Yg };
