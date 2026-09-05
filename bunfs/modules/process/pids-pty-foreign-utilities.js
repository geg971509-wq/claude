// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Zt, Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { E, X } from "/$bunfs/root/chunk-ypdw393e.js";
import { co, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Vbe, oh, E2, Uce, C9, Mh, uT, sM, tC } from "/$bunfs/root/chunk-ddbk6aje.js";
import { cT, yF } from "/$bunfs/root/chunk-krety1hw.js";
import { Et } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { tl, I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Hr } from "/$bunfs/root/chunk-ca80fke8.js";
import { ZV, G3, Bre } from "/$bunfs/root/chunk-tzhtxm67.js";
import { Oce, Hp, yl } from "/$bunfs/root/chunk-wn1jrcrk.js";
import { mm } from "/$bunfs/root/chunk-5jbjbjsn.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { j } from "/$bunfs/root/chunk-yz031c9r.js";
import { lstat as A, readdir as b, unlink as p } from "fs/promises";
import { connect as x } from "net";
import { basename as k, join as P } from "path";
async function $kt(t, e) {
  if (e.launch.mode !== "exec" || !t) return null;
  try {
    let o = await tl(sM(t), 8192);
    if (o == null) return null;
    let r = JSON.parse(o);
    if (typeof r?.code !== "number") return null;
    let s =
        Et(typeof r.tail === "string" ? r.tail : "")
          .replace(
            /\r\n?/g,
            `
`,
          )
          .split(`
`)
          .findLast((y) => y.trim())
          ?.trim() ?? "",
      c = yl(co(s), Hp);
    if (r.code === 0) return { state: "done", detail: c || "(no output)", code: 0 };
    let l = typeof r.signal === "string" ? r.signal : void 0;
    if (l === "SIGINT" || l === "SIGQUIT") return { state: "stopped", detail: "stopped", code: r.code };
    let f = l ? `${l} (${r.code})` : `exit ${r.code}`;
    return { state: "crashed", detail: c ? `${f} \u2014 ${c}` : f, signal: l, code: r.code };
  } catch {
    return null;
  }
}
async function C7t(t = {}, e) {
  return Hr("daemon_bg_reap_all", async () => {
    let o = await cT({ silent: true }, e),
      r = new Map();
    for (let [a, i] of Object.entries(o.workers))
      r.set(a, {
        pid: i.pid,
        procStart: i.procStart,
        ptySock: i.ptySock,
        dispatch: i.dispatch,
        replPid: i.replPid,
        replProcStart: i.replProcStart,
      });
    let s = D() === "windows",
      [c, l] = s ? [Uce(), ".pid"] : [Vbe(), ".sock"],
      f = s && e ? await v7t(e) : await b(c).catch(() => []),
      y = new Set(f.filter((a) => a.endsWith(l)));
    for (let a of f) {
      if (!a.endsWith(l)) {
        if (!s) {
          let d = [".err", ".late", ".exec-exit", ".err.read"].find((g) => a.endsWith(`.sock${g}`));
          if (d && !y.has(a.slice(0, -d.length))) {
            let g = a.slice(0, -`.sock${d}`.length);
            if (!(d === ".exec-exit" && r.has(g))) await p(P(c, a)).catch(() => {});
          }
        }
        continue;
      }
      let i = a.slice(0, -l.length);
      if (r.has(i)) continue;
      let u = s ? Number((e ? await R7t(e, i) : await tl(C9(i), iBe)) ?? "0") : 0;
      r.set(i, { pid: u, ptySock: oh(i) });
    }
    if (!s) {
      let a = new Set();
      for (let u of r.values()) if (u.ptySock) a.add(u.ptySock);
      let i = await b(E2()).catch(() => []);
      for (let u of i) {
        if (!u.endsWith(".pty.sock")) continue;
        let d = P(E2(), u);
        if (a.has(d)) continue;
        r.set(`spare:${u}`, { pid: 0, ptySock: d });
      }
    }
    let m = 0,
      w = new Set();
    if (
      (await Promise.all(
        Array.from(r.entries()).map(async ([a, i]) => {
          let u = i.dispatch ? await $kt(i.ptySock, i.dispatch) : null;
          if (i.ptySock && (await Kie(i.ptySock, e))) m++;
          else if (i.pid) {
            let d = await k7t(i.pid, i.procStart),
              g = d !== "unverified" && (await G3(i.replPid, i.replProcStart));
            switch (d) {
              case "killed":
                m++;
                break;
              case "unverified":
                w.add(a);
                return;
              case "gone":
              case "foreign":
                if (g) m++;
                break;
              default:
            }
          }
          if (!a.startsWith("spare:")) {
            let d = { state: "stopped", detail: "stopped" },
              g = u?.state === "done" ? u : t.supervisorKilledAll ? d : (u ?? d);
            if ((await Oce(a, g.state, g.detail, void 0, e), s && e))
              await e.delete(Te.daemon(["pty-pids", k(sM(i.ptySock ?? oh(a)))])).catch(() => {});
            else await p(sM(i.ptySock ?? oh(a))).catch(() => {});
          }
          if (s)
            if (e) await L(e, a);
            else {
              await p(C9(a)).catch(() => {});
              let d = Mh(oh(a));
              await p(d).catch(() => {}), await p(`${d}.read`).catch(() => {}), await p(uT(oh(a))).catch(() => {});
            }
        }),
      ),
      r.size > 0)
    )
      await yF((a) => {
        for (let i of r.keys()) if (!w.has(i)) delete a.workers[i];
      }, e).catch(h);
    return { reaped: m, kept: w.size };
  });
}
async function v7t(t) {
  let e = [],
    o;
  do {
    let r = await t
      .listEntries({ namespace: "daemon", relPath: ["pty-pids"] }, { cursor: o, skipKeyStats: true, skipScopeStats: true })
      .catch(() => {
        return;
      });
    if (r === void 0 || !r.ok) return [];
    for (let s of r.value.items)
      if (s.kind === "key" && s.key.namespace === "daemon") {
        let c = s.key.relPath.at(-1);
        if (c !== void 0 && s.key.relPath.length === 2 && Zt(c)) e.push(c);
      }
    o = r.value.cursor;
  } while (o !== void 0);
  return e;
}
var iBe = 4096;
async function B(t) {
  try {
    let e = await A(C9(t));
    return !e.isFile() || e.size > iBe;
  } catch (e) {
    return !X(e);
  }
}
async function R7t(t, e) {
  if (await B(e)) return null;
  let o = await t.readText([{ key: Te.daemon(["pty-pids", `${e}.pid`]), offset: 0, length: iBe + 1 }]).catch(() => {
    return;
  });
  if (o === void 0 || !o.ok) return null;
  let r = o.value.items[0];
  if (!r.found || r.totalBytes > iBe) return null;
  return r.value;
}
async function L(t, e) {
  await t.delete(Te.daemon(["pty-pids", `${e}.pid`])).catch(() => {}), await v(t, oh(e));
}
async function v(t, e) {
  let o = Mh(e);
  for (let r of [k(o), `${k(o)}.read`, k(uT(e))]) await t.delete(Te.daemon(["pty-pids", r])).catch(() => {});
}
function Kie(t, e) {
  return new Promise((o) => {
    let r = false,
      s = (l) => {
        if (r) return;
        (r = true), o(l);
      },
      c = x(t);
    c.unref(),
      c.setTimeout(2000, () => {
        c.destroy(), s(false);
      }),
      c.on("error", () => {
        p(t).catch(() => {});
        let l = Mh(t);
        if (e && D() === "windows") v(e, t).catch(() => {});
        else p(l).catch(() => {}), p(`${l}.read`).catch(() => {}), p(uT(t)).catch(() => {});
        s(false);
      }),
      c.once("connect", () => {
        c.resume(), c.write(tC({ t: "kill", sig: "SIGTERM" }));
      }),
      c.once("close", () => s(true));
  });
}
function jtt(t) {
  return new Promise((e) => {
    let o = false,
      r = (c) => {
        if (o) return;
        (o = true), e(c);
      },
      s = x(t);
    s.unref(),
      s.setTimeout(250, () => {
        s.destroy(), r(false);
      }),
      s.on("error", () => r(false)),
      s.once("connect", () => {
        s.end(tC({ t: "pong" })), r(true);
      });
  });
}
async function k7t(t, e) {
  try {
    process.kill(t, 0);
  } catch (r) {
    if (E(r) !== "ESRCH") return "foreign";
    return ZV([-t, t], e) ? "killed" : "gone";
  }
  if (e === void 0) return "foreign";
  let o = await Bre(t);
  if (o === void 0) return "unverified";
  if (o !== e) return "foreign";
  return ZV([-t, t], e) ? "killed" : "gone";
}
var S = j(mm(), 1),
  R = ["dev", "engine"];
function nge(t) {
  return R.find((e) => t.includes(`-${e}.`)) ?? null;
}
function Btt(t) {
  return nge(t) !== null;
}
function ORe(t, e) {
  if (!t) return false;
  let o = nge(t),
    r = nge(e);
  return o !== null && r !== null && o !== r;
}
function LRe(t) {
  let e;
  for (let f of t.matchAll(/-(?:dev|engine)\.(\d{8})\.t(\d{6})(?:\.|$)/g)) e = f;
  let o = e?.[1],
    r = e?.[2];
  if (!o || !r) return null;
  let s = Date.UTC(
    Number(o.slice(0, 4)),
    Number(o.slice(4, 6)) - 1,
    Number(o.slice(6, 8)),
    Number(r.slice(0, 2)),
    Number(r.slice(2, 4)),
    Number(r.slice(4, 6)),
  );
  return new Date(s).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "t") === `${o}t${r}` ? s : null;
}
function hLn(t, e) {
  let o = LRe(t),
    r = LRe(e);
  return o !== null && r !== null && r < o;
}
function rBe(t, e) {
  let o = LRe(t),
    r = LRe(e);
  if (o !== null && r !== null) {
    if (nge(t) !== nge(e)) return false;
    return o > r;
  }
  if (Btt(t) || Btt(e)) return false;
  return S.valid(t) !== null && S.valid(e) !== null && S.gt(t, e);
}
var _ = new Set([1000, 1002, 1003, 1004, 1006, 2004, 2031]),
  C = /\x1b\[\?([\d;]+)([hl])/g;
function oBe() {
  let t = new Set(),
    e = "";
  return {
    feed(o, r) {
      let s = e ? e + o : o,
        c = 0,
        l = false;
      for (let m of s.matchAll(C)) {
        let w = m[2] === "h";
        for (let a of m[1].split(";")) {
          let i = Number(a);
          if (_.has(i) && t.has(i) !== w) {
            if (w) t.add(i), r?.(i);
            else t.delete(i);
            l = true;
          }
        }
        c = m.index + m[0].length;
      }
      let f = s.slice(Math.max(c, s.length - 16)),
        y = f.lastIndexOf("\x1B");
      return (e = y >= 0 && /^\x1b(\[(\?[\d;]*)?)?$/.test(f.slice(y)) ? f.slice(y) : ""), l;
    },
    seed(o) {
      for (let r of o) if (_.has(r)) t.add(r);
    },
    snapshot() {
      return [...t];
    },
  };
}
import { freemem as M } from "os";
function E7t() {
  let t = I("tengu_bg_low_mem_mb", 1024) * 1024 * 1024;
  if (t <= 0) return { lowMem: false, level: void 0 };
  if (D() !== "macos") return { lowMem: M() < t, level: void 0 };
  let e = K();
  return { lowMem: e !== void 0 && e >= N, level: e };
}
function RK() {
  return E7t().lowMem;
}
var T = { normal: 1, warning: 2, critical: 4 },
  N = T.critical;
function K() {
  try {
    let t = Bun.ant.memoryPressureLevel();
    return t === null ? void 0 : T[t];
  } catch (t) {
    n(`bg low-mem: memoryPressureLevel failed: ${t instanceof Error ? t.message : String(t)}`, { level: "warn" });
    return;
  }
}
function A7t() {
  return I("tengu_bg_attach_upgrade", true);
}
export { nge, Btt, ORe, LRe, hLn, rBe, oBe, E7t, RK, A7t, $kt, C7t, v7t, iBe, R7t, Kie, jtt, k7t };
