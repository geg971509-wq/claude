// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { an } from "/$bunfs/root/chunk-c47snwm2.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { b, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { Bm, $6 } from "/$bunfs/root/chunk-tzhtxm67.js";
import { Ut } from "/$bunfs/root/chunk-ntyhd04p.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { join as u } from "path";
function Xet() {
  return u(be(), "daemon.status.json");
}
function Yet() {
  return Te.state("daemon-status");
}
async function tOn(e, r) {
  let o = { supervisorPid: process.pid, supervisorProcStart: $6(), writtenAt: Date.now(), workers: e };
  if (O() && r !== void 0) {
    try {
      let t = await r.write(Yet(), b(o, null, 2), { mode: 438 & ~process.umask() });
      if (!t.ok) n(`writeDaemonStatus: ${t.error.code}`);
    } catch (t) {
      n(`writeDaemonStatus: ${l(t)}`);
    }
    return;
  }
  try {
    await an().atomicWrite(Xet(), b(o, null, 2));
  } catch {}
}
async function nOn(e) {
  if (O() && e !== void 0) {
    try {
      let r = await e.delete(Yet());
      if (!r.ok) n(`removeDaemonStatus: ${r.error.code}`);
    } catch (r) {
      n(`removeDaemonStatus: ${l(r)}`);
    }
    return;
  }
  try {
    await an().delete(Xet());
  } catch {}
}
async function rOn(e) {
  let r;
  if (O() && e !== void 0) {
    let a;
    try {
      a = await e.readText([Yet()]);
    } catch {
      return null;
    }
    if (!a.ok) return null;
    let s = a.value.items[0];
    if (!s.found) return null;
    r = s.value;
  } else
    try {
      r = await an().read(Xet());
    } catch {
      return null;
    }
  let o = Ut(r, !1);
  if (!o || typeof o !== "object") return null;
  let t = o;
  if (typeof t.supervisorPid !== "number" || typeof t.workers !== "object" || t.workers === null) return null;
  try {
    process.kill(t.supervisorPid, 0);
  } catch {
    return null;
  }
  let i = typeof t.supervisorProcStart === "string" ? t.supervisorProcStart : void 0;
  if (!(await Bm(t.supervisorPid, i))) return null;
  return o;
}
export { Xet, Yet, tOn, nOn, rOn };
