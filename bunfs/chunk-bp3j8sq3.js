// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { R, E } from "/$bunfs/root/chunk-ypdw393e.js";
import { Y } from "/$bunfs/root/chunk-s7e0px8j.js";
import { createHash as h, randomUUID as D } from "crypto";
import {
  closeSync as y,
  constants as m,
  fchmodSync as T,
  fstatSync as _,
  lstatSync as w,
  mkdirSync as s,
  openSync as S,
} from "fs";
import { tmpdir as C } from "os";
import { join as c } from "path";
function ly() {
  let e = a.CLAUDE_CODE_TMPDIR;
  if (e) return e;
  return "/tmp";
}
var cyn = 44;
function uY(e) {
  let r = process.getuid?.();
  if (r === void 0) return;
  let t = e.replace(/[\/]+$/, "") || e,
    i = "Set CLAUDE_CODE_TMPDIR to a directory you control, or ask an administrator to remove it.",
    n;
  try {
    n = S(t, m.O_RDONLY | m.O_DIRECTORY | m.O_NOFOLLOW);
  } catch (o) {
    let d = E(o);
    if (d === "ELOOP" || d === "ENOTDIR")
      throw Error(
        `Temp directory ${e} is not a directory (may be an attacker-planted symlink). Refusing to use it. ${i}`,
      );
    if (d === "EACCES") {
      let u;
      try {
        let p = w(t);
        if (p.uid !== r) u = p.uid;
      } catch {}
      if (u !== void 0)
        throw new R(
          `Temp directory ${e} is owned by uid ${u}, expected ${r}. Refusing to use it \u2014 another user may have pre-created it. ${i}`,
          "temp dir owned by another uid (EACCES at open); refusing to use it",
        );
      throw new R(
        `Temp directory ${e} is not readable (its mode may have been altered, or a path component denies search). Refusing to use it \u2014 restore its permissions (chmod 0700) or remove it. ${i}`,
        "temp dir unreadable (owner-read or path search bit missing); refusing to use it",
      );
    }
    throw o;
  }
  try {
    let o = _(n);
    if (o.uid !== r) {
      if (r === 0 && a.CLAUDE_CODE_CONTAINER_ID) {
        Y("warn", "tempdir_owner_mismatch", { observed_uid: o.uid });
        return;
      }
      throw Error(
        `Temp directory ${e} is owned by uid ${o.uid}, expected ${r}. Refusing to use it \u2014 another user may have pre-created it. ${i}`,
      );
    }
    if ((o.mode & 511) !== 448) T(n, 448);
  } finally {
    y(n);
  }
}
class f {
  ensured = void 0;
  childProcessTmpDirMemo = void 0;
  markEnsured(e) {
    this.ensured = e;
  }
  setChildProcessTmpDirMemo(e) {
    this.childProcessTmpDirMemo = e;
  }
}
var l = new J(() => new f());
function xl() {
  return g(l.of(G().host));
}
function g(e) {
  let r = `claude-${process.getuid?.() ?? 0}`,
    t = c(ly(), r);
  if (t !== e.ensured) {
    if (typeof process.getuid === "function") s(t, { recursive: true, mode: 448 }), uY(t);
    else
      try {
        s(t, { recursive: true, mode: 448 });
      } catch {}
    e.markEnsured(t);
  }
  return t;
}
function SEe() {
  let e = xl();
  s(e, { recursive: true, mode: 448 }), uY(e);
  let r = c(e, "plugin-tool-staging");
  return s(r, { recursive: true, mode: 448 }), uY(r), r;
}
function dY() {
  let e = l.of(G().host),
    r = g(e);
  if (Buffer.byteLength(r) <= cyn) return r;
  let t = "/tmp",
    i = e.childProcessTmpDirMemo;
  if (i?.forDir === r) return i.result;
  let n = c(t, `claude-${process.getuid?.() ?? 0}`),
    o = n;
  try {
    s(n, { recursive: true, mode: 448 }), uY(n);
  } catch {
    o = r;
  }
  return e.setChildProcessTmpDirMemo({ forDir: r, result: o }), o;
}
function pY(e = "claude-prompt", r = ".md", t) {
  let i = t?.contentHash ? h("sha256").update(t.contentHash).digest("hex").slice(0, 16) : D();
  return c(xl(), `${e}-${i}${r}`);
}
export { ly, cyn, uY, xl, SEe, dY, pY };
