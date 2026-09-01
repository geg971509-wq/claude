// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Gu, Gp, mQe, Lkn, IHn } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Me } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { V, qu, Ekn } from "/$bunfs/root/chunk-fv016jr6.js";
import { d$, Qbn, lNe, B7e, Nre } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Al } from "/$bunfs/root/chunk-f5hrzy3k.js";
import { Hc, iTt, sTt, YAe } from "/$bunfs/root/chunk-6k63g5t6.js";
import { sj } from "/$bunfs/root/chunk-8qsdea2c.js";
import { dA, n4 } from "/$bunfs/root/chunk-rf51999f.js";
import { WTt } from "/$bunfs/root/chunk-ghara6r1.js";
import { uR } from "/$bunfs/root/chunk-mznd09c6.js";
import { nyn } from "/$bunfs/root/chunk-51qp0385.js";
import { gVn } from "/$bunfs/root/chunk-rsp0anqd.js";
import { bIn } from "/$bunfs/root/chunk-1d69xhyh.js";
import { wV } from "/$bunfs/root/chunk-cbn30h5b.js";
import { createServer as f } from "net";
function xZe(e, m, o) {
  return new Promise((n, c) => {
    let t = (r) => {
        i.close(), c(r);
      },
      i = f((r) => {
        let a = "";
        r.setEncoding("utf8"),
          r.on("data", (d) => {
            if (((a += d), o && a.length > 8388608)) {
              r.destroy();
              return;
            }
            let p = a.indexOf(`
`);
            if (p < 0) return;
            if (o) {
              let s;
              try {
                s = V(a.slice(0, p));
              } catch {
                s = void 0;
              }
              if (!s || !uR(s.auth, o)) {
                r.destroy();
                return;
              }
              i.close(), n(s);
              return;
            }
            i.close();
            try {
              n(V(a.slice(0, p)));
            } catch (s) {
              c(s);
            }
          }),
          r.on("error", o ? () => r.destroy() : t);
      });
    if ((i.on("error", t), m))
      i.once("listening", () => {
        try {
          m();
        } catch (r) {
          t(r);
        }
      });
    i.listen(e);
  });
}
async function IZe(e, m) {
  let o = await Al(e.cwd, void 0);
  qu(o);
  let n = { originalCwd: o, projectRoot: o, cwd: o };
  if (e.sessionId) Gp(Gu(e.sessionId), "spare_claim", null, n);
  else mQe(n);
  if (
    (Hc(), Nre(), B7e(), Lkn(), gVn(), sj({ warm_spare_claimed: 1 }), Me(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST))
  ) {
    for (let t of Object.keys(process.env))
      if (iTt(t) || t === "ANTHROPIC_CUSTOM_HEADERS" || sTt(t) || YAe(t)) delete process.env[t];
  }
  delete process.env.ANTHROPIC_AUTH_TOKEN,
    delete process.env.ANTHROPIC_API_KEY,
    delete process.env.CLAUDE_CODE_OAUTH_TOKEN,
    Object.assign(process.env, e.env),
    (process.argv = [process.argv[0], process.argv[1], ...e.argv]),
    Ekn(),
    await bIn(e.argv),
    IHn(),
    Qbn(),
    WTt(),
    wV(),
    lNe({ preservePendingExposures: true, preserveLoggedExposures: true }),
    d$(),
    nyn(),
    n4(),
    dA();
  let { main: c } = await m;
  await c();
}
export { xZe, IZe };
