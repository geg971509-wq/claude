// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { st } from "/$bunfs/root/chunk-qcx34e4j.js";
import { K } from "/$bunfs/root/chunk-f9h0bg01.js";
import { mCt, vt, BC, b, le, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { oCt, Ofe, yVt, lkn } from "/$bunfs/root/chunk-wkxx62a2.js";
import { $te } from "/$bunfs/root/chunk-38mxah2g.js";
import { n8n } from "/$bunfs/root/chunk-wjr8v4tx.js";
import { zm } from "/$bunfs/root/chunk-13198prn.js";
import { dirname as f, join as g } from "path";
var a = yVt(new Date());
function uNn() {
  return g(Ofe.errors(), a + ".jsonl");
}
function MYt(e) {
  return g(Ofe.mcpLogs(e), a + ".jsonl");
}
function c(e) {
  let r = mCt(e);
  return {
    write(t) {
      r.write(
        b(t) +
          `
`,
      );
    },
    flush: r.flush,
    dispose: r.dispose,
  };
}
function l() {}
class dNn {
  writers = new Map();
  pendingWrites = zm();
  writerFor(e) {
    let r = this.writers.get(e);
    if (!r) {
      let t = f(e),
        i = !1;
      (r = c({
        writeFn: (o) => {
          this.pendingWrites.run(e, async () => {
            try {
              await u(t, e, o);
            } catch (s) {
              if (!i) (i = !0), n(`Dropping log batch for ${e}: ${s instanceof Error ? s.message : String(s)}`);
            }
          });
        },
        flushIntervalMs: 1000,
        maxBufferSize: 50,
      })),
        this.writers.set(e, r),
        vt(async () => {
          r?.dispose(), await this.pendingWrites.settle();
        }),
        BC(this.flushBeforeExit);
    }
    return r;
  }
  async flush() {
    for (let e of this.writers.values()) e.flush();
    await this.pendingWrites.settle();
  }
  flushBeforeExit = () => this.flush();
  async reset() {
    for (let e of this.writers.values()) e.dispose();
    await this.pendingWrites.settle(), this.writers.clear(), this.pendingWrites.clearForTest();
  }
}
async function u(e, r, t) {
  let i = le();
  try {
    await i.appendFile(r, t);
  } catch {
    await i.mkdir(e).catch(l), await i.appendFile(r, t);
  }
}
function p(e, r, t) {
  return;
}
function m(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    let r = e;
    if (typeof r.message === "string") return r.message;
    if (typeof r.error === "object" && r.error && "message" in r.error && typeof r.error.message === "string")
      return r.error.message;
  }
  return;
}
function d(e, r) {
  n8n(r), $te(r);
  let t = r.stack || r.message,
    i = "";
  if (st.isAxiosError(r) && r.config?.url) {
    let o = [`url=${r.config.url}`];
    if (r.response?.status !== void 0) o.push(`status=${r.response.status}`);
    let s = m(r.response?.data);
    if (s) o.push(`body=${s}`);
    i = `[${o.join(",")}] `;
  }
  n(`${r.name}: ${i}${t}`, { level: "error" }), p(e, uNn(), { error: `${i}${t}` });
}
function w(e, r, t) {
  n(`MCP server "${r}" ${t}`, { level: "error" });
  let i = MYt(r),
    s = {
      error: t instanceof Error ? t.stack || t.message : String(t),
      timestamp: new Date().toISOString(),
      sessionId: K(),
      cwd: oCt(),
    };
  e.writerFor(i).write(s);
}
function E(e, r, t) {
  n(`MCP server "${r}": ${t}`);
  let i = MYt(r),
    o = { debug: t, timestamp: new Date().toISOString(), sessionId: K(), cwd: oCt() };
  e.writerFor(i).write(o);
}
function NYt() {
  lkn(idr(new dNn())), n("Error log sink initialized");
}
function idr(e) {
  return {
    logError: (r) => d(e, r),
    logMCPError: (r, t) => w(e, r, t),
    logMCPDebug: (r, t) => E(e, r, t),
    getErrorsPath: uNn,
    getMCPLogsPath: MYt,
  };
}
export { uNn, MYt, dNn, NYt, idr };
