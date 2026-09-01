// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, et, Cl, oHn, kQe } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { X } from "/$bunfs/root/chunk-ypdw393e.js";
import { lve, b, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { tl } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { Gnr } from "/$bunfs/root/chunk-386w1sy8.js";
import { yAe, uR } from "/$bunfs/root/chunk-mznd09c6.js";
import { Oa } from "/$bunfs/root/chunk-nfmyt8cw.js";
import { XQ, d6e } from "/$bunfs/root/chunk-9vc4gayt.js";
import { ein, Rlt } from "/$bunfs/root/chunk-2wxj9m3z.js";
import { Io } from "/$bunfs/root/chunk-q04k5ycg.js";
import { dg, sy } from "/$bunfs/root/chunk-c76q2y0e.js";
import { k9e, H9e } from "/$bunfs/root/chunk-tbbqkkg3.js";
import { gE, K9n, dut } from "/$bunfs/root/chunk-zze8764r.js";
import { xs, Aa, fr, PGe, Dbe, Mg, Lbe } from "/$bunfs/root/chunk-wn1jrcrk.js";
import { W_, M0 } from "/$bunfs/root/chunk-twch03k7.js";
import { xlt } from "/$bunfs/root/chunk-zgfc288e.js";
import { unlink as h, writeFile as B } from "fs/promises";
import { createServer as T } from "net";
import { join as w } from "path";
import { StringDecoder as P } from "string_decoder";
class g {
  resolver = null;
  registerResolver(e) {
    this.resolver = e;
  }
}
var v = new J(() => new g());
function u6e(e, t) {
  v.of(e).registerResolver(t);
}
function S(e, t) {
  return v.of(e).resolver?.(t) ?? false;
}
var O = 3;
class T1n {
  server;
  current = void 0;
  heartbeat;
  wedgeTimer = void 0;
  wedgeDisarmed = false;
  authToken;
  currentAuthed = false;
  unauthedDrops = 0;
  gateReported = false;
  nativeBrowserEnv;
  pendingInteractiveMarks;
  storageV5;
  constructor(e, t, r, o, i) {
    (this.authToken = t),
      (this.storageV5 = i),
      (this.nativeBrowserEnv = r),
      (this.pendingInteractiveMarks = o),
      (this.server = T((s) => this.onConnection(s))),
      this.server.on("error", (s) => n(`[bg-rv] server error: ${String(s)}`, { level: "warn" })),
      this.server.listen(e),
      this.server.unref(),
      (this.heartbeat = setInterval(() => this.send({ type: "heartbeat" }), 30000)),
      this.heartbeat.unref();
  }
  onConnection(e) {
    this.current?.destroy(), (this.current = e), (this.currentAuthed = false), kQe(false);
    while (this.pendingInteractiveMarks.length > 0) {
      let o = this.pendingInteractiveMarks[0];
      if (o === void 0 || !this.send(o)) break;
      this.pendingInteractiveMarks.shift();
    }
    (this.unauthedDrops = 0),
      (this.gateReported = false),
      this.clearPreBootState().catch((o) => {
        if (!X(o)) Aa(o);
      }),
      this.restorePromptDraft().catch(() => {}),
      e.on("error", () => e.destroy()),
      e.once("close", () => {
        if (this.current === e) (this.current = void 0), kQe(false);
      });
    let t = "",
      r = new P("utf8");
    e.on("data", (o) => {
      if (this.current !== e) {
        e.destroy();
        return;
      }
      t += r.write(o);
      let i;
      while (
        (i = t.indexOf(`
`)) >= 0
      ) {
        let s = t.slice(0, i);
        if (((t = t.slice(i + 1)), s)) this.handleLine(s);
      }
      if (t.length > 1048576) (t = ""), e.destroy();
    });
  }
  stop() {
    clearInterval(this.heartbeat),
      clearTimeout(this.wedgeTimer),
      (this.wedgeTimer = void 0),
      this.current?.destroy(),
      (this.current = void 0),
      kQe(false),
      this.restoreNativeBrowserEnv(),
      this.server.close();
  }
  send(e) {
    if (!this.current || this.current.destroyed) return false;
    try {
      return (
        this.current.write(
          b(e) +
            `
`,
        ),
        true
      );
    } catch {
      return false;
    }
  }
  noteUnauthedRejection() {
    if ((this.unauthedDrops++, !this.gateReported && this.unauthedDrops >= O))
      (this.gateReported = true), p("bg_rv_gate", "unauthed_drops");
  }
  restoreNativeBrowserEnv() {
    if (this.nativeBrowserEnv === void 0) delete process.env.BROWSER;
    else process.env.BROWSER = this.nativeBrowserEnv;
  }
  handleLine(e) {
    let t;
    try {
      t = V(e);
    } catch {
      return;
    }
    if (!t || typeof t !== "object") return;
    if ("role" in t) {
      if (this.authToken)
        if ("auth" in t && uR(t.auth, this.authToken)) {
          if (((this.currentAuthed = true), !this.gateReported)) (this.gateReported = true), y("bg_rv_gate");
        } else {
          if (!this.currentAuthed) this.noteUnauthedRejection();
          this.send({ type: "auth-rejected" });
        }
      return;
    }
    let r = t;
    if (this.authToken && !this.currentAuthed && r.type !== "repaint") {
      if (
        (n(`[bg-rv] dropped ${typeof r.type === "string" ? r.type : "unknown"} from un-authed connection`, {
          level: "warn",
        }),
        r.type !== "attacher-caps")
      )
        this.noteUnauthedRejection();
      this.send({ type: "reply-rejected" });
      return;
    }
    if (r.type === "shutdown") {
      I(this.storageV5);
      return;
    }
    if (r.type === "repaint") {
      C();
      return;
    }
    if (r.type === "attacher-caps") {
      this.handleAttacherCaps(r);
      return;
    }
    if (r.type === "reply" && typeof r.text === "string") W(r);
  }
  handleAttacherCaps(e) {
    if ((oHn(e.caps), kQe(true), e.caps)) ein(Date.now());
    else Rlt();
    if ((Gnr(e.caps?.colorLevel), !e.caps)) this.restoreNativeBrowserEnv();
    else if (typeof e.caps.browser === "string") process.env.BROWSER = e.caps.browser;
    else delete process.env.BROWSER;
    if (e.caps?.systemTheme) xlt(e.caps.systemTheme);
  }
  async waitForInkMount(e) {
    for (let t = 0; !Io.has(process.stdout); t++) {
      if (t >= 60 || this.current !== e) return false;
      await ne(500);
    }
    return true;
  }
  async clearPreBootState() {
    let e = a.CLAUDE_JOB_DIR;
    if (!e) return;
    if (!(await this.waitForInkMount(this.current))) return;
    await PGe(async () => {
      let t = await fr(e, this.storageV5);
      if (!t) return;
      if (!t.forkSourceAlive) {
        let r = dut(a.CLAUDE_CODE_RESUME_SOURCE_ALIVE);
        if (r) await xs(e, { ...t, ...r }, this.storageV5), Object.assign(t, r);
      }
      if (t.state === "working" && t.detail === Dbe) this.armStartupWedgeWatchdog(e);
      if (!Lbe.includes(t.state)) return;
      if (t.tempo === "blocked") return;
      await xs(e, { ...t, state: "running", tempo: "idle", updatedAt: new Date().toISOString() }, this.storageV5),
        this.send({ type: "state", patch: { state: "running", tempo: "idle" } });
    });
  }
  armStartupWedgeWatchdog(e) {
    if (this.wedgeDisarmed) return;
    clearTimeout(this.wedgeTimer);
    let t = a.CLAUDE_BG_STARTUP_WEDGE_MS || 45000;
    (this.wedgeTimer = setTimeout((r) => this.onStartupWedgeTimeout(r), t, e)), this.wedgeTimer.unref();
  }
  disarmStartupWedgeWatchdog() {
    (this.wedgeDisarmed = true), clearTimeout(this.wedgeTimer), (this.wedgeTimer = void 0);
  }
  onStartupWedgeTimeout(e) {
    fr(e, this.storageV5)
      .then(async (t) => {
        if (this.wedgeDisarmed || t?.state !== "working" || t.detail !== Dbe || t.tempo === "blocked") return;
        await xs(
          e,
          { ...t, tempo: "blocked", detail: c, needs: l, updatedAt: new Date().toISOString() },
          this.storageV5,
        ),
          this.send({ type: "state", patch: { tempo: "blocked", detail: c, needs: l } });
      })
      .catch((t) => {
        if (!X(t)) Aa(t);
      });
  }
  async restorePromptDraft() {
    let e = a.CLAUDE_JOB_DIR;
    if (!e) return;
    let t = w(e, _),
      r = await tl(t, 4 * A);
    if (r === null) return;
    if ((await h(t).catch(() => {}), !r)) return;
    if (!k9e()) H9e(r);
    if (!(await this.waitForInkMount(this.current))) return;
    if (XQ() === "") d6e(r);
  }
}
class k {
  server = void 0;
}
var vdr = new J(() => new k());
function R() {
  return G().host;
}
function d() {
  return vdr.of(R());
}
async function aEr(e) {
  let t = a.CLAUDE_BG_RENDEZVOUS_SOCK,
    r = d();
  if (!t || r.server) return;
  let o = a.BROWSER,
    i = [];
  K9n((u) => {
    let m = { type: "interactive-mark", ...u };
    if (Oq(m)) return true;
    return i.push(m), true;
  }),
    delete process.env.CLAUDE_BG_RENDEZVOUS_SOCK;
  let s = a.CLAUDE_BG_RV_AUTH;
  delete process.env.CLAUDE_BG_RV_AUTH;
  let f = a.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if ((delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, f)) {
    let u = await yAe(f);
    if (u?.rvAuth) s = u.rvAuth;
    await h(f).catch(() => {});
  }
  await h(t).catch(() => {}), (r.server = new T1n(t, s, o, i, e));
}
function lEr() {
  let e = d();
  e.server?.stop(), (e.server = void 0);
}
function Oq(e) {
  return d().server?.send(e) ?? false;
}
function I(e) {
  Oq({ type: "shutting-down" });
  let t = Oa(),
    r = [],
    o = a.CLAUDE_JOB_DIR;
  if (o) r.push(L(o).catch(() => {}));
  if (t) {
    let i = t.getLastSequenceNum();
    t.teardown({ skipArchive: true }).catch(() => {});
    let s = a.CLAUDE_JOB_DIR;
    if (s && i > 0) r.push(U(s, i, e).catch(() => {}));
  }
  r.push(lve()),
    Promise.race([Promise.all(r), ne(5000)]).finally(() => {
      process.exit(0);
    });
}
function C() {
  if (Cl() !== null) ein(Date.now());
  if (!Io.get(process.stdout)?.forceRedraw({ flushReact: true }))
    process.stdout.write(
      sy +
        dg +
        `
  \x1B[2mSession can't redraw right now \u2014 Ctrl+Z to detach\x1B[0m
`,
    );
  Oq({ type: "repaint-done" });
}
function W(e) {
  if (S(R(), e.text)) {
    n(`[bg-rv] peer reply answered question: ${e.text.slice(0, 80)}`);
    return;
  }
  let t = W_(e.text);
  gE({ agentId: et(), mode: t, value: M0(e.text), priority: "next", origin: { kind: "human" } }),
    n(`[bg-rv] enqueued reply: ${e.text.slice(0, 80)}`);
}
var c = "stuck on a startup dialog",
  l = "open this session to continue setup";
function oQt() {
  d().server?.disarmStartupWedgeWatchdog();
}
async function D(e, t, r, o) {
  let i = await fr(e, o);
  if (!i) return { kind: "refused" };
  if (i.tempo === "blocked" && i.needs === t) return { kind: "already" };
  if (i.tempo === "blocked" && i.needs !== Mg) return { kind: "refused" };
  return (
    await xs(e, { ...i, tempo: "blocked", detail: r, needs: t, updatedAt: new Date().toISOString() }, o),
    Oq({ type: "state", patch: { tempo: "blocked", detail: r, needs: t } }),
    { kind: "wrote", prior: { tempo: i.tempo, needs: i.needs, detail: i.detail } }
  );
}
async function E(e, t, r, o) {
  let i = await fr(e, o);
  if (!i || i.tempo !== "blocked" || i.needs !== t) return;
  await xs(e, { ...i, ...r, updatedAt: new Date().toISOString() }, o),
    Oq({ type: "state", patch: { tempo: r.tempo, needs: r.needs, detail: r.detail } });
}
async function cEr(e, t) {
  let r = a.CLAUDE_JOB_DIR;
  if (!r || d().server?.wedgeDisarmed) return;
  let o = e ? `${c} (${e})` : c,
    i = await D(r, l, o, t);
  return i.kind === "wrote" ? i.prior : void 0;
}
async function uEr(e, t) {
  let r = a.CLAUDE_JOB_DIR;
  if (!r) return;
  await E(r, l, e, t);
}
async function iQt(e, t, r) {
  let o = a.CLAUDE_JOB_DIR;
  if (!o) return { kind: "refused" };
  return PGe(() => D(o, e, t, r));
}
async function sQt(e, t, r) {
  let o = a.CLAUDE_JOB_DIR;
  if (!o) return;
  await PGe(() => E(o, e, t, r));
}
async function aQt(e) {
  let t = a.CLAUDE_JOB_DIR;
  if (!t || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  let r = await fr(t, e);
  if (!r || r.state !== "working" || r.tempo !== "active") return;
  await xs(t, { ...r, tempo: "blocked", needs: Mg, updatedAt: new Date().toISOString() }, e),
    Oq({ type: "state", patch: { tempo: "blocked", needs: Mg } });
}
var _ = ".prompt-draft",
  A = 262144;
async function L(e) {
  let t = XQ();
  if (!t) return;
  await B(w(e, _), t.slice(0, A), { mode: 384 });
}
async function U(e, t, r) {
  let o = await fr(e, r);
  if (!o || o.bridgeSessionSeq === t) return;
  await xs(e, { ...o, bridgeSessionSeq: t, updatedAt: new Date().toISOString() }, r);
}
export { u6e, T1n, vdr, aEr, lEr, Oq, oQt, cEr, uEr, iQt, sQt, aQt };
