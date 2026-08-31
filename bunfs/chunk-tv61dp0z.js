// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, $0n } from "/$bunfs/root/chunk-f9h0bg01.js";
import { mSn, Ac, h$, x6, Ire, M7e, Dwn } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { T4e } from "/$bunfs/root/chunk-zze8764r.js";
function Rtt(o) {
  if (($0n(), h$(), (Ac().providerCache = mSn()), x6(), Ire(), Dwn(), o === "firstParty")) M7e();
}
class s {
  #o = !1;
  get autoModeCheckRan() {
    return this.#o;
  }
  claimAutoModeCheck() {
    if (this.#o) return !1;
    return (this.#o = !0), !0;
  }
  rearmAutoModeCheck() {
    this.#o = !1;
  }
  reset() {
    this.#o = !1;
  }
}
var a = new J(() => new s());
function vRe(o) {
  return { key: "auto-mode-gate-notification", kind: "warning", text: o, color: "warning", priority: "high" };
}
async function RRe(o, l, d, c, r) {
  if (!a.of(o).claimAutoModeCheck()) return;
  let { updateContext: m, notification: t } = await T4e(l, c);
  if (
    (d((e) => {
      let n = m(e.toolPermissionContext),
        i = n === e.toolPermissionContext ? e : { ...e, toolPermissionContext: n };
      if (!t || r) return i;
      return { ...i, notifications: { ...i.notifications, queue: [...i.notifications.queue, vRe(t)] } };
    }),
    t && r)
  )
    r(vRe(t));
}
function ktt(o) {
  a.of(o).rearmAutoModeCheck();
}
export { Rtt, vRe, RRe, ktt };
