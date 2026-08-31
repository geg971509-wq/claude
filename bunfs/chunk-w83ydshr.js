// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { Ga } from "/$bunfs/root/chunk-tzhtxm67.js";
import { WE } from "/$bunfs/root/chunk-2zf9m1zh.js";
import { readFile as a } from "fs/promises";
class o {
  firedSites = new Set();
  fire(e) {
    if (this.firedSites.has(e)) return;
    this.firedSites.add(e), s("tengu_dead_probe_adopt_ticks_token", { site: c(e) });
  }
  reset() {
    this.firedSites.clear();
  }
}
var l = new J(() => new o());
function f() {
  return l.of(G().host);
}
function mYt(e) {
  f().fire(e);
}
async function Cke(e) {
  return null;
}
async function kge(e, t, r) {
  if (r !== void 0) {
    if ((await Ga(e, { skipCache: !0 })) !== r) return;
  } else if (t !== void 0) {
    if ((mYt("kill_gate"), (await Cke(e)) !== t)) return;
  } else return;
  await WE(e, "SIGTERM").catch(() => {});
}
export { mYt, Cke, kge };
