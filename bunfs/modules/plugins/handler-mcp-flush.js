// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
async function U1() {
  try {
    let t = Ojn.of(G().host).tasks;
    if (t.length > 0) await Promise.race([Promise.allSettled(t), ne(200)]), (t.length = 0);
    let [
        { settle1PEventLoggingBeforeExit: o, shutdown1PEventLogging: s },
        { shutdownDatadog: e },
        { shutdownErrorTracking: r },
      ] = await Promise.all([
        import("/$bunfs/root/chunk-jn95py26.js"),
        import("/$bunfs/root/chunk-wk4g4k1s.js"),
        import("/$bunfs/root/chunk-kfr7pnan.js"),
      ]),
      i = o(),
      n = [s(), e(), r()];
    await Promise.race([Promise.all(n), ne(500)]), await i;
  } catch {}
}
class Djn {
  tasks = [];
}
var Ojn = new J(() => new Djn());
function fin(t) {
  Ojn.of(G().host).tasks.push(t.catch(() => {}));
}
export { U1, Djn, Ojn, fin };
