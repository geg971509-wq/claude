// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { I, Ae, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { w, ke } from "/$bunfs/root/chunk-4xj01xwv.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { ye, rn } from "/$bunfs/root/chunk-988p40e0.js";
import { Lf } from "/$bunfs/root/chunk-1yr12dqr.js";
import { $j } from "/$bunfs/root/chunk-tcnfn1nd.js";
function t8t(u, { requireOnboarding: r = !0 } = {}) {
  let o = ie();
  if ((r && !o.hasCompletedOnboarding) || o.hasSeenAutoDefaultNudge || !I("tengu_maple_pier", !1)) return null;
  let e = ye("userSettings")?.permissions?.defaultMode,
    t = ["projectSettings", "localSettings", "flagSettings", "policySettings"].some(
      (n) => ye(n)?.permissions?.defaultMode,
    );
  if (e && e !== "auto" && !t && $j(u)) return e;
  return null;
}
function n8t(u, r, o) {
  if (ie().hasSeenAutoDefaultNudge) return;
  let e = Lf(r.current_mode);
  if (u === "shown") {
    s("tengu_auto_default_nudge_shown", { current_mode: ke(e), surface: w("ide") });
    return;
  }
  let t = r.choice === "accept" ? "accept" : "decline";
  if (t === "accept") rn("userSettings", { permissions: { defaultMode: "auto" } }, void 0, o);
  Ae((n) => (n.hasSeenAutoDefaultNudge ? n : { ...n, hasSeenAutoDefaultNudge: !0 }), o),
    s("tengu_auto_default_nudge_resolved", {
      choice: w(t),
      outcome: t === "accept" ? w("switched") : w("declined"),
      current_mode: ke(e),
      surface: w("ide"),
    });
}
export { t8t, n8t };
