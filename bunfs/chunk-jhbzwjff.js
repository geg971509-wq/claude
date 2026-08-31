// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Eg, ZN } from "/$bunfs/root/chunk-f9h0bg01.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Je } from "/$bunfs/root/chunk-988p40e0.js";
import { Fa } from "/$bunfs/root/chunk-97wwdfyx.js";
import { on } from "/$bunfs/root/chunk-twwd9fep.js";
import { Zu } from "/$bunfs/root/chunk-dd55s64p.js";
import { xhe } from "/$bunfs/root/chunk-nq83tgen.js";
import { IE } from "/$bunfs/root/chunk-0b5b5vvk.js";
import { Do } from "/$bunfs/root/chunk-tabr8ghb.js";
import { ay } from "/$bunfs/root/chunk-3fwkz19s.js";
function dZ(o) {
  let l = Fa();
  return (l.workflowAuthoringSkillAvailable ??= e()), l.workflowAuthoringSkillAvailable && (o === void 0 || i(o));
}
function e() {
  if (!Zu() || xhe()) return !1;
  if (ay() || Eg()) return !1;
  if (a.CLAUDE_CODE_ENTRYPOINT === "local-agent") return !1;
  let o = Je().skillOverrides?.[IE];
  if (o === "off" || o === "user-invocable-only") return !1;
  let l = ZN();
  if (l !== void 0 && !l.includes(IE)) return !1;
  return !0;
}
function i(o) {
  return o.some((l) => on(l, Do));
}
export { dZ };
