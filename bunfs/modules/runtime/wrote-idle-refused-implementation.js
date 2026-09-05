// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, Cj } from "/$bunfs/root/chunk-f9h0bg01.js";
import { hm } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { iQt, sQt } from "/$bunfs/root/chunk-vjwrew57.js";
import { Aa } from "/$bunfs/root/chunk-wn1jrcrk.js";
class i {
  activePark = null;
}
var s = new J(() => new i());
async function jme(r, e, n, a) {
  if (!hm()) return false;
  let o = s.of(r),
    t = await iQt(e, n, a);
  switch (t.kind) {
    case "refused":
      return false;
    case "already":
      if (o.activePark?.needs !== e) d(o, e, { tempo: "idle", needs: void 0, detail: "" }, a);
      return true;
    case "wrote":
      return d(o, e, t.prior, a), true;
  }
}
function d(r, e, n, a) {
  r.activePark?.unsubscribe();
  let o = Cj(() => {
    if (hm()) return;
    let t = r.activePark;
    if (!t || t.needs !== e) return;
    (r.activePark = null), t.unsubscribe(), sQt(e, t.prior, t.storageV5).catch(Aa);
  });
  r.activePark = { needs: e, prior: n, storageV5: a, unsubscribe: o };
}
export { jme };
