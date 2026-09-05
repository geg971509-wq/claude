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
import { E } from "/$bunfs/root/chunk-ypdw393e.js";
import { le } from "/$bunfs/root/chunk-fv016jr6.js";
import { mfe, pJe, gfe } from "/$bunfs/root/chunk-s28wf80n.js";
import { VJe } from "/$bunfs/root/chunk-fec4384a.js";
import { nJ, qe } from "/$bunfs/root/chunk-2masxyqj.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
function Gd(e, t) {
  if (t in e) return e[t];
  if (D() !== "windows") return;
  let n = Object.keys(e).find((r) => r.toUpperCase() === t.toUpperCase());
  return n === void 0 ? void 0 : e[n];
}
class l {
  #e = false;
  get forcedUnavailable() {
    return this.#e;
  }
  forceUnavailable(e) {
    this.#e = e;
  }
}
var _ = new l();
function c() {
  return false;
}
function ms(e) {
  if (e <= 1) return false;
  try {
    return process.kill(e, 0), true;
  } catch {
    return false;
  }
}
async function $4t(e) {
  if (D() !== "linux" && D() !== "wsl") return;
  if (!rrr(e)) return;
  try {
    let t = await le().readFile(`/proc/${e}/stat`, { encoding: "utf8" });
    return pJe(t);
  } catch {
    return;
  }
}
async function Bwn(e) {
  return gfe(await $4t(e));
}
var g = 2147483647;
function rrr(e) {
  return Number.isInteger(e) && e > 1 && e <= g;
}
function Gg(e) {
  if (!rrr(e)) return false;
  try {
    return process.kill(e, 0), false;
  } catch (t) {
    return E(t) === "ESRCH";
  }
}
var h = 16;
async function jwn() {
  let e = D();
  if (e !== "linux" && e !== "wsl") return true;
  let t = le(),
    n = await t.readlink("/proc/self").catch(() => null);
  if (n === null || n !== String(process.pid)) return false;
  let r = await t.readdir("/proc").catch(() => null);
  if (!r) return false;
  return r.filter((i) => /^\d+$/.test(i.name)).length >= h;
}
function ZV(e, t) {
  let n = e.filter((r) => Math.abs(r) > 1);
  for (let r of n) {
    try {
      process.kill(r, "SIGTERM");
    } catch {
      continue;
    }
    return (
      setTimeout(
        (o, i, s) => {
          if (!nwt(i, s)) return;
          try {
            process.kill(o, "SIGKILL");
          } catch {}
        },
        5000,
        r,
        Math.abs(n[0]),
        t,
      ).unref(),
      true
    );
  }
  return false;
}
async function G3(e, t, n = "SIGTERM") {
  if (!e || e <= 1 || t === void 0) return false;
  if ((await f(e, t)) === "other") return false;
  try {
    process.kill(-e, n);
  } catch {
    return false;
  }
  if (n !== "SIGKILL")
    setTimeout(
      (r, o) => {
        f(r, o).then((i) => {
          if (i === "other") return;
          try {
            process.kill(-r, "SIGKILL");
          } catch {}
        });
      },
      5000,
      e,
      t,
    ).unref();
  return true;
}
async function f(e, t) {
  let n = await Bre(e);
  if (n !== void 0) return V7e(t, n) ? "same" : "other";
  try {
    return process.kill(e, 0), "other";
  } catch (r) {
    return E(r) === "ESRCH" ? "gone" : "other";
  }
}
function wAe(e) {
  return;
}
function Wwn(e, t = 12) {
  return [];
}
async function qwn(e, t = 10) {
  return (await twt(e, t)).ancestors;
}
async function twt(e, t = 10) {
  let n = `pid=${String(e)}; for i in $(seq 1 ${t}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ]; then echo FAIL; exit 0; fi; if [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then echo END; exit 0; fi; echo $ppid; pid=$ppid; done`,
    r = await qe("sh", ["-c", n], { timeout: 3000 }),
    o = (r.stdout ?? "")
      .trim()
      .split(`
`)
      .filter(Boolean);
  return {
    ancestors: o
      .filter((i) => i !== "END" && i !== "FAIL")
      .map((i) => parseInt(i, 10))
      .filter((i) => !isNaN(i)),
    readFailed: r.code !== 0 || o.at(-1) === "FAIL",
    truncated: r.code === 0 && o.at(-1) !== "END" && o.at(-1) !== "FAIL",
  };
}
function Gwn(e) {
  try {
    let n = `ps -o command= -p ${String(e)}`,
      r = nJ(n, { timeout: 1000 });
    return r ? r.trim() : null;
  } catch {
    return null;
  }
}
function $re(e) {
  try {
    let t = nJ(`LC_ALL=C TZ=UTC ps -o lstart= -p ${e}`, { timeout: 1000 });
    return t ? t.trim() : void 0;
  } catch {
    return;
  }
}
function nwt(e, t) {
  if (t === void 0) return true;
  return p(t, $re(e));
}
function V7e(e, t) {
  if (t === e) return true;
  return false;
}
function p(e, t) {
  return t === void 0 || t === e || S(e, t);
}
function S(e, t) {
  if (!c()) return false;
  let n = Number(e),
    r = Number(t);
  return Number.isFinite(n) && Number.isFinite(r) && n > 300000000000000000 !== r > 300000000000000000;
}
async function Bm(e, t) {
  if (t === void 0) return true;
  return p(t, await Ga(e));
}
async function r0(e, t) {
  let n = await Ga(e, { skipCache: true });
  return n === void 0 ? void 0 : V7e(t, n);
}
class b {
  #e = void 0;
  get token() {
    return this.#e;
  }
  set(e) {
    return (this.#e = e), e;
  }
  reset() {
    this.#e = void 0;
  }
}
var Ure = new b();
class P {
  #e = new Map();
  get(e) {
    return this.#e.get(e);
  }
  set(e, t) {
    this.#e.set(e, t);
  }
}
var zSr = new J(() => new P());
function $6() {
  return Ure.token ?? Ure.set($re(process.pid));
}
async function RC() {
  return Ure.token ?? Ure.set(await Ga(process.pid));
}
function iA(e) {
  if (c()) return e.procStart !== void 0 ? void 0 : e.procStartFt;
  return e.procStart;
}
function D$(e) {
  return c() ? { procStart: void 0, procStartFt: e } : { procStart: e, procStartFt: void 0 };
}
var w = 60000,
  y = 5000;
async function Ga(e, t) {
  let n = Date.now(),
    r = zSr.of(G().host);
  if (t?.env !== void 0) return m(e, t.env);
  if (!t?.skipCache) {
    let a = r.get(e),
      u = a?.miss ? y : w;
    if (a && n - a.at < u) return a.p;
  }
  let o = m(e),
    i = { at: n, p: o };
  r.set(e, i);
  let s = await o;
  if (s === void 0 && r.get(e) === i) i.miss = true;
  return s;
}
var d = 250;
async function Bre(e) {
  let t = await Ga(e, { skipCache: true });
  if (t !== void 0) return t;
  return await ne(d + Math.floor(Math.random() * d)), Ga(e, { skipCache: true });
}
async function m(e, t) {
  let n = t === void 0 ? {} : { env: t, extendEnv: false };
  try {
    let r = t === void 0 ? "ps" : VJe("ps", Gd(t, "PATH") ?? "");
    if (r === null) return;
    let o = await qe(r, ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      ...n,
      env: { ...(t ?? process.env), LC_ALL: "C", TZ: "UTC" },
    });
    return o.code === 0 && o.stdout ? o.stdout.trim() : void 0;
  } catch {
    return;
  }
}
async function rwt(e) {
  try {
    let t = await qe("ps", ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      env: { ...process.env, LC_ALL: "C", TZ: "UTC" },
    });
    if (t.code !== 0 || !t.stdout?.trim()) return null;
    let n = Date.parse(`${t.stdout.trim()} UTC`);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}
export {
  Gd,
  ms,
  $4t,
  Bwn,
  rrr,
  Gg,
  jwn,
  ZV,
  G3,
  wAe,
  Wwn,
  qwn,
  twt,
  Gwn,
  $re,
  nwt,
  V7e,
  Bm,
  r0,
  Ure,
  zSr,
  $6,
  RC,
  iA,
  D$,
  Ga,
  Bre,
  rwt,
};
