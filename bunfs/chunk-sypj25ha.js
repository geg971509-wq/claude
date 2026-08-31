// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Wl } from "/$bunfs/root/chunk-fec4384a.js";
import { Xl } from "/$bunfs/root/chunk-30e2jew7.js";
import { i8e, ZD } from "/$bunfs/root/chunk-g01aac1k.js";
import { mm } from "/$bunfs/root/chunk-5jbjbjsn.js";
import { j } from "/$bunfs/root/chunk-yz031c9r.js";
var o = j(mm(), 1);
import { readdir as c, stat as p } from "fs/promises";
import { join as a, sep as f } from "path";
function G0e() {
  if (!Wl()) return !1;
  let r = i8e() + f;
  return process.execPath.startsWith(r);
}
function rp(r = {}) {
  return qP(gZ(r));
}
function gZ(r = {}) {
  if (!r.pinToCurrentBinary && G0e()) {
    let t = rae();
    return { cmd: t, prefixArgs: [], target: t };
  }
  if (Wl()) return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  let e = process.argv[1];
  if (!e) return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  return { cmd: process.execPath, prefixArgs: [e], target: e };
}
function rae() {
  return a(ZD(), "claude");
}
function qP(r) {
  let e = Xl();
  if (e.length === 0 || r.cmd === e[0]) return r;
  return { cmd: e[0], prefixArgs: [...e.slice(1), r.cmd, ...r.prefixArgs], target: r.target };
}
async function z0e() {
  let r = i8e(),
    e;
  try {
    e = await c(r);
  } catch {
    return null;
  }
  let t = e.filter((n) => !/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n) && o.valid(n)).sort(o.rcompare);
  for (let n of t) {
    let i = a(r, n);
    try {
      let s = await p(i);
      if (s.isFile() && s.size > 0) return i;
    } catch {}
  }
  return null;
}
export { G0e, rp, gZ, rae, qP, z0e };
