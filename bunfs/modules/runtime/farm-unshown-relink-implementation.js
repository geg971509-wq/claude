// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, Se, AR, nxn, Xm } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ne, jt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { Xd, Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { It, R, l, E, X, os } from "/$bunfs/root/chunk-ypdw393e.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { wP } from "/$bunfs/root/chunk-nqmqabr8.js";
import { y, p, g, Hr } from "/$bunfs/root/chunk-ca80fke8.js";
import { vt, V, Tp, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { x5, Ife } from "/$bunfs/root/chunk-qm65zb83.js";
import { Ct } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Y } from "/$bunfs/root/chunk-s7e0px8j.js";
import { qi } from "/$bunfs/root/chunk-s28wf80n.js";
import { qe } from "/$bunfs/root/chunk-2masxyqj.js";
import { Hn } from "/$bunfs/root/chunk-rgw52f13.js";
import { dc, Jy, _yt, JF, Jt, mde } from "/$bunfs/root/chunk-5n1tbe50.js";
import { bt, C$, v$, oNe, Jbn, m4t, iNe, Qk, Yt, dpe, x7e, Cs, I, qd } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { UAe, kNe } from "/$bunfs/root/chunk-988p40e0.js";
import { or, Qt, cCe, PTt, Jqt, Qqt } from "/$bunfs/root/chunk-z2bvp3sv.js";
import { LAe } from "/$bunfs/root/chunk-e7rq8w09.js";
import { pr } from "/$bunfs/root/chunk-82w4mtvq.js";
import { st, Sp } from "/$bunfs/root/chunk-qcx34e4j.js";
import { iJ, b5, Dl } from "/$bunfs/root/chunk-kxyny47c.js";
import { rl } from "/$bunfs/root/chunk-4r03fm98.js";
import { Na } from "/$bunfs/root/chunk-qekzccch.js";
import { FS, Awe, wgt, CX, hM, M9 } from "/$bunfs/root/chunk-e53y7x75.js";
import { WE } from "/$bunfs/root/chunk-2zf9m1zh.js";
import { Uk } from "/$bunfs/root/chunk-1emzhzm3.js";
import { i, f } from "/$bunfs/root/chunk-saay52v7.js";
import { vs } from "/$bunfs/root/chunk-3s6zpzqb.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { T } from "/$bunfs/root/chunk-ma6kk3k0.js";
import { IU, W4, ns, VC, kve, icr, SA, I5t, KCt, Hve, hie, G4, n_, bA } from "/$bunfs/root/chunk-56sxk8k2.js";
import { He } from "/$bunfs/root/chunk-79g5tayq.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
var Xte = { source: "github", repo: "anthropics/claude-plugins-official" },
  ag = "claude-plugins-official";
var ft = [
  vs,
  "raw.githubusercontent.com",
  "objects.githubusercontent.com",
  "gist.githubusercontent.com",
  "gitlab.com",
  "bitbucket.org",
  "codeberg.org",
  "dev.azure.com",
  "ssh.dev.azure.com",
  "storage.googleapis.com",
];
function ht(e) {
  let t,
    r = /^[^@/]+@([^:/]+):/.exec(e);
  if (r) t = r[1];
  else
    try {
      t = new URL(e).hostname;
    } catch {
      return "unknown";
    }
  let o = t.toLowerCase();
  return ft.find((u) => u === o) ?? "other";
}
function yt(e) {
  return e.includes(`anthropics/${ag}`);
}
function DE(e, t, r, o, u) {
  s("tengu_plugin_remote_fetch", {
    source: c(e),
    host: c(t ? ht(t) : "unknown"),
    is_official: e === "plugin_catalog" || (t ? yt(t) : false),
    outcome: c(r),
    duration_ms: Math.round(o),
    ...(u && { error_kind: c(u) }),
  });
}
function fM(e) {
  let t = String(e?.message ?? e);
  if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|Could not resolve host|Connection refused/i.test(t)) return "dns_or_refused";
  if (/ETIMEDOUT|timed out|timeout/i.test(t)) return "timeout";
  if (/ECONNRESET|socket hang up|Connection reset by peer|remote end hung up/i.test(t)) return "conn_reset";
  if (/403|401|authentication|permission denied/i.test(t)) return "auth";
  if (/404|not found|repository not found/i.test(t)) return "not_found";
  if (/certificate|SSL|TLS|unable to get local issuer/i.test(t)) return "tls";
  if (/Invalid response format|Invalid marketplace schema/i.test(t)) return "invalid_schema";
  return "other";
}
import { isAbsolute as _t, join as Pe, relative as Re, sep as ve } from "path";
function ee() {
  return Pe(be(), "skills");
}
function wt(e) {
  let t = Re(ee(), e);
  return t !== "" && t !== ".." && !t.startsWith(`..${ve}`) && !_t(t);
}
function Ce(e) {
  if (!wt(e)) return null;
  let t = Re(ee(), e).split(ve);
  return Xd(t) && Pe(ee(), ...t) === e ? t : null;
}
function $2t(e) {
  let t = Ce(e);
  return t === null ? null : Te.userConfigDir("skills", t);
}
function d8n(e) {
  let t = Ce(e);
  return t === null ? null : { namespace: "userConfigDir", dir: "skills", relPath: t };
}
import { isAbsolute as Ne, join as H, relative as xe, sep as G } from "path";
var gI = ".orphaned_at",
  Mu = ".in_use",
  igt = ".gcs-sha",
  LD = ".links_materialized";
function re() {
  return H(be(), "plugins", "cache");
}
function oe(e, t) {
  let r = re();
  if (t !== r) return null;
  let o = xe(r, e);
  if (o === "" || o === ".." || o.startsWith(`..${G}`) || Ne(o)) return null;
  let u = o.split(G);
  return H(r, ...u) === e ? u : null;
}
function ie(e) {
  return e.endsWith(".zip");
}
function MD(e, t) {
  let r = oe(e, t);
  if (r === null || r.length !== 3 || !Xd(r) || ie(r[2])) return null;
  let [o, u, d] = r;
  return { marketplace: o, plugin: u, version: d };
}
function p8n(e) {
  return (
    e.namespace === "pluginCache" &&
    e.marketplace !== void 0 &&
    e.plugin !== void 0 &&
    e.version !== void 0 &&
    e.relPath === void 0
  );
}
function qDe(e, t) {
  let r = MD(e, t);
  return r === null ? null : { namespace: "pluginCache", ...r };
}
function f8n(e, t) {
  let r = [e.marketplace, e.plugin, e.version];
  if (t !== re() || !Xd(r) || ie(e.version)) return null;
  return H(t, ...r);
}
function kt(e, t) {
  let r = oe(e, t);
  if (r === null || r.length < 4 || !Xd(r) || ie(r[2])) return null;
  let [o, u, d, ..._] = r;
  return Te.pluginCache(o, u, d, _);
}
function qze(e, t) {
  return kt(e, t) ?? $2t(e);
}
function L9(e, t) {
  return se(t) ? Te.pluginRegistry(e) : null;
}
function U2t(e, t, r) {
  return se(r) && Xd([e]) ? Te.marketplaceCache(e, t) : null;
}
function se(e) {
  return e === H(be(), "plugins");
}
function Et(e, t) {
  if (!se(t)) return null;
  let r = H(t, "marketplaces"),
    o = xe(r, e);
  if (o === "" || o === ".." || o.startsWith(`..${G}`) || Ne(o)) return null;
  let u = o.split(G);
  return H(r, ...u) === e ? u : null;
}
function Gze(e, t) {
  let r = Et(e, t);
  if (r === null || r.length < 2 || !Xd(r)) return null;
  return Te.marketplaceTree(r[0], r.slice(1));
}
function m8n(e) {
  return e === H(be(), "plugins", "asset-cache") ? { namespace: "pluginAssetCache" } : null;
}
function sgt(e, t) {
  if (e === t) return t === re() ? { namespace: "pluginCache" } : null;
  let r = oe(e, t);
  if (r === null || r.length > 2 || !Xd(r)) return null;
  let [o, u] = r;
  return u === void 0
    ? { namespace: "pluginCache", marketplace: o }
    : { namespace: "pluginCache", marketplace: o, plugin: u };
}
import { lstat as St, rmdir as At, unlink as Pt } from "fs/promises";
async function nC(e) {
  try {
    return await Pt(e), "removed";
  } catch (t) {
    if (E(t) === "ENOENT") return "absent";
    try {
      return await At(e), "removed";
    } catch (r) {
      let o = E(r);
      if (o === "ENOTEMPTY" || o === "EEXIST") return "directory";
      if (o === "ENOENT") {
        if (
          await St(e).then(
            () => false,
            (u) => E(u) === "ENOENT",
          )
        )
          return "absent";
        throw t;
      }
      throw o === "ENOTDIR" ? t : r;
    }
  }
}
var Rt = ["local", "npm", "github", "git", "subdir", "archive", "command", "unknown"];
function agt(e) {
  let t = Math.random()
    .toString(36)
    .slice(2, 2 + Le)
    .padEnd(1, "0");
  return `${Oe}${e}_${Date.now()}_${t}`;
}
var Oe = "temp_",
  Le = 6,
  Qpn = "_x",
  Zpn = ".clone",
  B2t = new RegExp(`^${Oe}(?:${Rt.join("|")})_(\\d{10,})_[a-z0-9]{1,${Le}}(?:${Qpn}|\\${Zpn})?$`);
function Ie(e, t) {
  return `${e}${De}${t}`;
}
var De = ".linking-",
  g8n = new RegExp(`\\${De}(\\d+)$`);
import { isAbsolute as Tt } from "path";
var M = ".claude-plugin-link",
  j = m(() =>
    f({
      target: i()
        .min(1)
        .max(4096)
        .refine((e) => Tt(e), { message: "must be an absolute path" })
        .refine((e) => !bA(e) && !ns(e), { message: "must be a local path" })
        .refine((e) => !IU(e), { message: "must be canonical" }),
    }),
  ),
  lgt = `
[mode: link]`;
var zze = new Set([M, Mu, gI]);
function mM(e) {
  return W4(e).replace(/[. ]+$/, "");
}
function cgt(e, t) {
  let r = mM(e);
  if (t.has(r)) return true;
  for (let o of t) if (wP(r, o)) return true;
  return false;
}
function bwe(e) {
  return mM(e) === "node_modules";
}
function GDe() {
  if (Ct()) return false;
  if (aue()) return false;
  return ae();
}
function ae() {
  return I("tengu_plugin_command_source_refresh", true);
}
var Nt = 30000;
function aue() {
  let e = dc(),
    t = G4(Jy());
  if (D() === "windows" ? icr(e) : ns(e)) return true;
  let r = Jt().provenLocalRoots,
    o = r.get(t);
  if (o === void 0 || !JF(o, Nt)) {
    if (kve(t, { allowLocalWsl: true })) return r.delete(t), true;
    r.set(t, Date.now());
  }
  if (n_(be(), t)) return false;
  return xt().some((u) => n_(t, u, { foldCase: true }) || n_(u, t, { foldCase: true }));
}
function xt() {
  return te(
    [Se(), ...Xm()].flatMap((e) => {
      let t = Hn(e);
      return t !== null ? [e, t] : [e];
    }),
  );
}
import { readdir as Fe, stat as Ot } from "fs/promises";
import { join as Me } from "path";
var Lt = ".claude-plugin",
  efn = ["commands", "skills", "agents", "hooks", "themes", "output-styles", "monitors", "workflows"],
  Dt = ["SKILL.md", ".mcp.json", ".lsp.json"],
  wwe = [Lt, ...efn, ...Dt];
async function tfn(e) {
  return (await Fe(e)).filter((r) => !Ue(r)).some($e);
}
async function ugt(e) {
  let t = (await Fe(e, { withFileTypes: true })).filter((r) => !Ue(r.name));
  if (t.some((r) => r.name === ".claude-plugin")) return e;
  if (t.length === 1 && t[0].isDirectory()) {
    let r = Me(e, t[0].name);
    if (await Mt(Me(r, ".claude-plugin"))) return r;
    if (!$e(t[0].name) && (await tfn(r))) return r;
  }
  return e;
}
function $e(e) {
  return wwe.includes(e);
}
async function Mt(e) {
  try {
    return await Ot(e), true;
  } catch {
    return false;
  }
}
function Ue(e) {
  return e === "__MACOSX" || e === ".DS_Store";
}
import { constants as U } from "fs";
import { lstat as ce, open as Ht, readdir as Ft, unlink as Be } from "fs/promises";
import { join as le } from "path";
function nfn(e) {
  return (
    !e.isDirectory() &&
    !e.isFile() &&
    !e.isSymbolicLink() &&
    !e.isFIFO() &&
    !e.isSocket() &&
    !e.isBlockDevice() &&
    !e.isCharacterDevice()
  );
}
async function lue(e, t) {
  let r;
  if (!nfn(t)) r = { isDirectory: t.isDirectory(), isFile: t.isFile(), isSymbolicLink: t.isSymbolicLink() };
  else {
    let o = await ce(le(e, t.name));
    r = { isDirectory: o.isDirectory(), isFile: o.isFile(), isSymbolicLink: o.isSymbolicLink(), size: o.size };
  }
  if (r.isDirectory && D() === "windows") {
    let o = await hie(le(e, t.name));
    switch (o.kind) {
      case "junction":
        return { isDirectory: false, isFile: false, isSymbolicLink: true, linkTarget: o.target };
      case "directory":
        break;
      case "absent":
        break;
      case "error":
        throw o.error;
    }
  }
  return r;
}
async function Twe(e, t) {
  try {
    return await lue(e, t);
  } catch (r) {
    if (X(r)) return;
    throw r;
  }
}
async function cue(e) {
  let t;
  try {
    t = await ce(e);
  } catch (r) {
    if (E(r) !== "ENOENT") throw r;
    return;
  }
  if (t.isFile()) {
    if (t.nlink > 1) await Be(e);
    return;
  }
  if (t.isSymbolicLink()) {
    await Be(e);
    return;
  }
  await Tc(e);
}
var Ke = 16;
async function Tc(e) {
  if ((await nC(e)) !== "directory") return;
  let r;
  try {
    r = await ce(e);
  } catch (u) {
    if (E(u) === "ENOENT") return;
    throw u;
  }
  if (!r.isDirectory() || r.isSymbolicLink() || (D() === "windows" && (await $t(e)))) {
    await nC(e);
    return;
  }
  let o;
  try {
    o = await Ft(e);
  } catch (u) {
    let d = E(u);
    if (d === "ENOENT" || d === "ENOTDIR") return;
    throw u;
  }
  for (let u = 0; u < o.length; u += Ke) await Promise.all(o.slice(u, u + Ke).map((d) => Tc(le(e, d))));
  if ((await nC(e)) === "directory")
    throw Object.assign(Error("directory refilled during removal"), { code: "ENOTEMPTY", path: e });
}
async function j2t(e, t) {
  let r = D() === "windows" ? 0 : U.O_NOFOLLOW | U.O_NONBLOCK,
    o = await Ht(e, U.O_WRONLY | U.O_CREAT | U.O_TRUNC | r, 438);
  try {
    await o.writeFile(t, "utf-8");
  } finally {
    await o.close();
  }
}
async function $t(e) {
  let t = await hie(e);
  if (t.kind === "error") throw t.error;
  return t.kind === "junction";
}
import { createHash as Je } from "crypto";
import {
  lstat as Ze,
  mkdir as ue,
  open as Bt,
  readdir as F,
  readFile as Kt,
  readlink as W,
  realpath as pe,
  rename as Gt,
  stat as zt,
  symlink as Qe,
  writeFile as et,
} from "fs/promises";
import { homedir as Wt } from "os";
import { dirname as tt, isAbsolute as q, join as C, relative as de, resolve as ze, sep as z } from "path";
import { spawn as Ut } from "child_process";
var Ge = 2000;
function je(e, { cwd: t, env: r, timeoutMs: o, maxStdoutBytes: u, maxStderrBytes: d }) {
  return new Promise((_) => {
    let h = "",
      w = "",
      k = 0,
      S = 0,
      b = false,
      v = false,
      x,
      N,
      A = Ut(e, [], {
        shell: true,
        cwd: t,
        env: r,
        stdio: ["ignore", "pipe", "pipe"],
        detached: D() !== "windows",
        windowsHide: true,
        ...qi("plugin"),
      }),
      we = vt(async () => {
        if (!b && A.pid !== void 0) await WE(A.pid, "SIGKILL");
      });
    function O(P) {
      if (b) return;
      if (((b = true), we(), clearTimeout(Ee), N)) clearTimeout(N);
      A.stdout?.removeAllListeners("data"),
        A.stderr?.removeAllListeners("data"),
        A.stdout?.destroy(),
        A.stderr?.destroy(),
        _(P);
    }
    function ke(P) {
      if (x) return;
      (x = P),
        A.stdout?.removeAllListeners("data"),
        A.stderr?.removeAllListeners("data"),
        A.stdout?.pause(),
        A.stderr?.pause();
      let L = { kind: P, stdout: h, stderr: w },
        B = () => {
          if (b) return;
          if (v) {
            O(L);
            return;
          }
          let K = () => O(L);
          if ((A.once("exit", K), (N = setTimeout((Q) => Q(), Ge, K)), typeof N === "object")) N.unref();
        };
      if (A.pid === void 0) {
        O(L);
        return;
      }
      WE(A.pid, "SIGKILL").then(B, B);
    }
    let Ee = setTimeout((P) => P("timed-out"), o, ke);
    A.stdout?.setEncoding("utf8"),
      A.stderr?.setEncoding("utf8"),
      A.stdout?.on("data", (P) => {
        if (((k += Buffer.byteLength(P)), k > u)) {
          ke("stdout-overflow");
          return;
        }
        h += P;
      }),
      A.stderr?.on("data", (P) => {
        if (S >= d) return;
        (S += Buffer.byteLength(P)), (w += P);
      }),
      A.once("error", (P) => {
        O({ kind: "spawn-error", message: P.message, stdout: h, stderr: w });
      });
    function Ae(P, L) {
      if (x) return;
      if (typeof P === "number") O({ kind: "exited", exitCode: P, stdout: h, stderr: w });
      else O({ kind: "signaled", signal: L ?? "unknown", stdout: h, stderr: w });
    }
    A.once("exit", (P, L) => {
      if (((v = true), b || x)) return;
      if ((clearTimeout(Ee), (N = setTimeout((B, K, Q) => B(K, Q), Ge, Ae, P, L)), typeof N === "object")) N.unref();
    }),
      A.once("close", (P, L) => {
        Ae(P, L);
      });
  });
}
var Vt = 60,
  We = 65536,
  Xt = 65536,
  Ve = 500,
  Ye = 268435456,
  Xe = 20000,
  qt = new Set(wwe);
async function Zt(e) {
  let t = (e.timeout ?? Vt) * 1000,
    r = or(e.command, 200);
  n(`Plugin command source: running \`${r}\` (timeout ${t}ms)`);
  let o = await je(e.command, { cwd: Wt(), env: Na(), timeoutMs: t, maxStdoutBytes: We, maxStderrBytes: Xt }),
    u = or(o.stderr.trim(), Ve),
    d = u ? ` (stderr: ${u})` : "";
  switch (o.kind) {
    case "exited":
      if (o.exitCode !== 0)
        throw new R(
          `Plugin source command \`${r}\` exited with code ${o.exitCode}` + (u ? `: ${u}` : " and no error output."),
          "plugin command source exited non-zero",
        );
      break;
    case "timed-out":
      throw new R(
        `Plugin source command \`${r}\` did not finish within ${t / 1000}s and was stopped.${d}`,
        "plugin command source timed out",
      );
    case "stdout-overflow":
      throw new R(
        `Plugin source command \`${r}\` printed more than ${We / 1024} KB and was stopped; it must print a single absolute path.`,
        "plugin command source exceeded the stdout cap",
      );
    case "signaled":
      throw new R(
        `Plugin source command \`${r}\` was killed by ${o.signal} before it finished.${d}`,
        "plugin command source killed by a signal",
      );
    case "spawn-error":
      throw new R(
        `Plugin source command \`${r}\` could not be started: ` + or(o.message, Ve),
        "plugin command source failed to spawn",
      );
  }
  let _ = o.stdout
    .split(/\r?\n/)
    .map((S) => S.trim())
    .filter((S) => S.length > 0);
  if (_.length === 0)
    throw new R(
      `Plugin source command \`${r}\` printed nothing; it must print the absolute path of the plugin directory.`,
      "plugin command source printed nothing",
    );
  if (_.length > 1)
    throw new R(
      `Plugin source command \`${r}\` printed ${_.length} lines; it must print exactly one absolute path.`,
      "plugin command source printed multiple lines",
    );
  let h = _[0];
  if (!q(h))
    throw new R(
      `Plugin source command \`${r}\` printed \`${or(h, 200)}\`, which is not an absolute path.`,
      "plugin command source printed a relative path",
    );
  if ((D() === "windows" && SA(h)) || VC(h))
    throw new Ys(
      `Plugin source command \`${r}\` printed \`${or(h, 200)}\`, a network path (UNC or automount), which is not supported as a plugin directory.`,
      "plugin command source printed a network path",
    );
  if (Hve(h))
    throw new Ys(
      `Plugin source command \`${r}\` printed \`${or(h, 200)}\`, which is reached through a link onto a network location (or one that cannot be trusted); that is not supported as a plugin directory.`,
      "plugin command source printed a path through a suspect link",
    );
  let w;
  try {
    w = await pe(h);
  } catch (S) {
    throw new R(
      `Plugin source command \`${r}\` printed \`${or(h, 200)}\`, but that path could not be resolved (${E(S) ?? "unknown error"}).`,
      "plugin command source path does not resolve",
    );
  }
  if (VC(w) || (D() === "windows" && SA(w)))
    throw new Ys(
      `Plugin source command \`${r}\` printed a path that resolves to a network location, which is not supported as a plugin directory.`,
      "plugin command source path resolves to a network path",
    );
  let k;
  try {
    k = await F(w);
  } catch (S) {
    let b = E(S);
    throw new R(
      `Plugin source command \`${r}\` printed \`${or(h, 200)}\`, ` +
        (b === "ENOTDIR"
          ? "which is not a directory."
          : `which could not be read as a directory (${b ?? "unknown error"}).`),
      "plugin command source path is not a readable directory",
    );
  }
  if (!k.some((S) => qt.has(S)))
    throw new R(
      `Plugin source command \`${r}\` printed \`${or(h, 200)}\`, but that directory has no plugin content (expected .claude-plugin/ or a commands/, skills/, agents/, hooks/, themes/, output-styles/, monitors/, workflows/, SKILL.md, .mcp.json, or .lsp.json at the top level). Nothing was installed.`,
      "plugin command source directory has no plugin content",
    );
  return n(`Plugin command source: resolved plugin directory ${w}`), w;
}
async function nt(e, t, r) {
  let o = [],
    u = 0,
    d = 0;
  async function _(h) {
    let w = await F(h, { withFileTypes: true });
    for (let k of w) {
      if ((d++, d > Xe))
        throw new R(
          `Plugin directory has more than ${Xe} entries; refusing to install it as a plugin.`,
          "plugin command source directory has too many files",
        );
      let S = C(h, k.name),
        b = await lue(h, k);
      if (b.isDirectory) {
        if (h === e && k.name === ".git") continue;
        await _(S);
      } else if (b.isFile) {
        let v = b.size ?? (await Ze(S)).size;
        if ((r?.set(S, v), (u += v), u > Ye))
          throw new R(
            `Plugin directory is larger than ${Ye / 1048576} MB; refusing to install it as a plugin.`,
            "plugin command source directory too large",
          );
        o.push(S);
      } else if (b.isSymbolicLink) t?.push(S);
    }
  }
  return await _(e), t?.sort(), o.sort();
}
async function en(e) {
  let t = [],
    r = new Map(),
    o = await nt(e, t, r),
    u = Je("sha256");
  for (let d of o) {
    let _ = r.get(d) ?? 0;
    u.update(`f ${de(e, d).split(z).join("/")}\x00${_}\x00`);
    let h = _;
    if (_ > 0) {
      let w = await Bt(d, "r");
      try {
        for await (let k of w.createReadStream({ start: 0, end: _ - 1 })) u.update(k), (h -= k.length);
      } finally {
        await w.close();
      }
    }
    if (h > 0) u.update(Buffer.alloc(h));
  }
  for (let d of t) {
    let _ = await W(d);
    u.update(`l ${de(e, d).split(z).join("/")}\x00`), u.update(`${Buffer.byteLength(_)}\x00${_}`);
  }
  return u.digest("hex");
}
var zDe =
  'This plugin source uses mode "link", which is not supported on Windows yet; the marketplace can use mode "copy" instead.';
function rC(e) {
  return e.mode === "link" ? `${e.command}${lgt}` : e.command;
}
function Vze(e) {
  return e.mode === "link"
    ? 'mode "link": its output directory is used in place (linked, not copied)'
    : 'mode "copy": its output directory is copied into the plugin cache';
}
class Ys extends R {}
function tn(e, t) {
  if (t && t.kind !== "none" && t.command === rC(e)) return;
  let r = or(e.command, cCe) + (e.mode === "link" ? " [mode: link]" : ""),
    o = t?.pluginId !== void 0 ? or(t.pluginId, 200) : void 0,
    u = o ?? "This plugin",
    d = o ?? "";
  if (t?.kind === "recorded" && t.command !== void 0)
    throw new Ys(
      `${u}'s marketplace changed the command that installs it, or how its output is used (now \`${r}\`), since it was accepted, so it was not run. Review and accept the new command: ${Uk("plugin update", d, { tail: "in a terminal (add `--scope` for a project/local install)", fallback: "an explicit plugin update in a terminal reviews it" })}.`,
      "plugin command source command changed since consent",
    );
  if (t?.kind === "recorded")
    throw new Ys(
      `${u}'s marketplace entry now installs it by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it: ${Uk("plugin update", d, { tail: "in a terminal (add `--scope` for a project/local install)", fallback: "an explicit plugin update in a terminal reviews it" })}.`,
      "plugin command source never consented for an installed plugin",
    );
  if (t?.kind === "shown")
    throw new Ys(
      `${u}'s marketplace entry changed while it was being installed (it now declares \`${r}\`, not the command that was shown), so nothing was run. Re-run the install/update to review the current command.`,
      "plugin command source changed between display and run",
    );
  throw new Ys(
    `${u} is installed by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it from its /plugin details pane, or in a terminal: ${Uk("plugin install", d, { fallback: "an explicit plugin install reviews it" })}.`,
    "plugin command source without consent",
  );
}
async function nn(e, t) {
  let r = (await F(e)).filter((d) => !Kze(d)).sort(),
    o = await rt(
      e,
      r.map((d) => ({ name: d, path: C(e, d) })),
    );
  await ue(t, { recursive: true });
  for (let { name: d, target: _, isDirectory: h } of o) await Qe(_, C(t, d), h ? "dir" : "file");
  await et(C(t, M), JSON.stringify({ target: e }), { flag: "wx" });
  let u = Je("sha256");
  u.update(`${e}\x00`);
  for (let { name: d, target: _ } of o)
    u.update(`${Buffer.byteLength(d)}\x00${d}`), u.update(`${Buffer.byteLength(_)}\x00${_}`);
  return u.digest("hex");
}
async function rt(e, t) {
  let r = [];
  for (let { name: o, path: u } of t) {
    if (KCt(u, tt(u)))
      throw new Ys(
        `A top-level entry of the plugin directory (${or(o, 100)}) points at a network location or through a link that cannot be trusted; refusing to link it.`,
        "plugin command source entry traverses a suspect link",
      );
    let d, _;
    try {
      (d = await pe(u)), (_ = (await zt(d)).isDirectory());
    } catch {
      throw new R(
        `A top-level entry of the plugin directory its command produced could not be resolved (${or(o, 80)}); refusing to link it.`,
        "plugin command source link entry unresolvable",
      );
    }
    let h = de(e, d);
    if (h === "" || h === ".." || h.startsWith(`..${z}`) || q(h))
      throw new Ys(
        `A top-level entry of the plugin directory its command produced (${or(o, 80)}) points outside that directory; refusing to link it.`,
        "plugin command source link escapes producer directory",
      );
    r.push({ name: o, target: d, isDirectory: _ });
  }
  return r;
}
async function h8n(e, t) {
  let r = ze(Se(), e),
    o = ze(Se(), t),
    u = await me(C(r, M)),
    d = j().parse(JSON.parse(u)).target;
  if (I5t(d))
    throw new Ys(
      "The link farm points at a producer reached through a link that cannot be trusted; refusing to relink it.",
      "plugin command source relink target traverses a suspect link",
    );
  let _ = await pe(d);
  if (SA(_))
    throw new Ys(
      "The link farm points at a producer that now resolves to a network location; refusing to relink it.",
      "plugin command source relink target resolves to a network path",
    );
  let h = [];
  for (let b of await F(r, { withFileTypes: true })) {
    if (Kze(b.name)) continue;
    if ((await Twe(r, b))?.isSymbolicLink) h.push(b);
  }
  let w = [];
  for (let b of h) {
    let v;
    try {
      v = await W(C(r, b.name));
    } catch (x) {
      if (X(x)) continue;
      throw new Ys(
        `A link in the staged farm could not be read (${or(l(x), 120)}); refusing to relink it.`,
        "plugin command source relink entry unreadable",
      );
    }
    if (IU(v))
      throw new Ys(
        "A link in the staged farm is not in canonical form; refusing to relink it.",
        "plugin command source relink entry not canonical",
      );
    w.push(b);
  }
  let k = await rt(
    _,
    w.map((b) => ({ name: b.name, path: C(r, b.name) })),
  );
  await ue(tt(o), { recursive: true });
  let S = Ie(o, process.pid);
  await Tc(S), await ue(S);
  try {
    for (let { name: b, target: v, isDirectory: x } of k) await Qe(v, C(S, b), x ? "dir" : "file");
    await et(C(S, M), u, { flag: "wx" }), await Gt(S, o);
  } catch (b) {
    await Tc(S).catch(() => {});
    let v = E(b);
    if ((v === "ENOTEMPTY" || v === "EEXIST") && (await W2t(o)) === "live" && !(await VDe(o, _))) return;
    throw b;
  }
}
async function rfn(e, { keepGit: t }) {
  for (let r of await F(e)) if (Kze(r) && !(t && W4(r) === ".git")) await Tc(C(e, r));
}
function Kze(e) {
  return cgt(e, rn);
}
var rn = new Set([...zze, ".git"]);
async function Xze(e, { unclassifiableIsFarm: t = false } = {}) {
  let r = await W2t(e);
  return r === "live" || (r === "unclassifiable" && t);
}
async function W2t(e) {
  try {
    j().parse(JSON.parse(await me(C(e, M))));
  } catch (r) {
    if (E(r) !== void 0) return t(r);
  }
  try {
    for (let r of await F(e, { withFileTypes: true })) {
      if (Kze(r.name)) continue;
      try {
        let o = await lue(e, r);
        if (o.isSymbolicLink && q(o.linkTarget ?? (await W(C(e, r.name))))) return "live";
      } catch (o) {
        if (E(o) === "ENOENT") continue;
        return t(o);
      }
    }
    return "not-live";
  } catch (r) {
    return t(r);
  }
  function t(r) {
    let o = E(r);
    return o === "ENOENT" || o === "ENOTDIR" ? "not-live" : "unclassifiable";
  }
}
var on = new Set([".ds_store", "thumbs.db", "desktop.ini", "icon\r"]);
function sn(e) {
  let t = W4(e);
  return on.has(t) || t.startsWith("._");
}
function an(e) {
  return zze.has(e);
}
async function VDe(e, t) {
  let r = t.replace(/[\\/]+$/, "") + z;
  try {
    for (let o of await F(e, { withFileTypes: true })) {
      if (an(o.name)) continue;
      let u;
      try {
        let d = await lue(e, o);
        if (d.isFile && (sn(o.name) || cgt(o.name, zze))) continue;
        if (!d.isSymbolicLink) return true;
        u = d.linkTarget ?? (await W(C(e, o.name)));
      } catch (d) {
        if (E(d) === "ENOENT") continue;
        return true;
      }
      if (!q(u) || IU(u) || SA(u) || !u.startsWith(r)) return true;
    }
    return false;
  } catch (o) {
    let u = E(o);
    return u !== "ENOENT" && u !== "ENOTDIR";
  }
}
async function _8n(e) {
  try {
    return j().parse(JSON.parse(await me(C(e, M)))).target;
  } catch {
    return;
  }
}
var ln = 16384;
async function me(e) {
  let t = await Ze(e);
  if (!t.isFile() || t.size > ln)
    throw new Ys(
      "The link-farm marker is not a small regular file; refusing to read it.",
      "plugin command source link marker not a small regular file",
    );
  return Kt(e, "utf8");
}
function H2(e) {
  return typeof e === "object" && e.source === "command" ? e : void 0;
}
function RF(e) {
  return H2(e)?.mode === "link";
}
async function y8n(e, t, r, o) {
  if (FS()) throw new Ys(hM, "plugin command source disabled by managed policy");
  if (e.mode === "link" && D() === "windows")
    throw new Ys(zDe, "plugin command source link mode unsupported on windows");
  return (
    tn(e, o),
    Hr("plugin_command_install", async () => {
      let u = await Zt(e);
      if (n_(u, Se(), { foldCase: true }))
        throw new Ys(
          `Plugin source command printed the working directory or one of its parents (${or(u, 300)}); refusing to use it as a plugin.`,
          "plugin command source printed cwd or an ancestor",
        );
      if ((mde(u), e.mode === "link")) return { contentSha256: await nn(u, t), producerDirectory: u };
      return (
        await nt(u), await r(u, t), await rfn(t, { keepGit: false }), { contentSha256: await en(t), producerDirectory: u }
      );
    })
  );
}
import { createHash as hn } from "crypto";
var cn = /^([a-z][a-z\d+\-.]*:)?\/\//i;
function un(e, t) {
  let r = t?.baseURL,
    o = cn.test(e),
    u = null;
  if (o && !iJ(e)) u = e;
  else if (r != null && !iJ(r)) u = r;
  else if (!o && r == null) u = e;
  if (u !== null)
    throw Error(
      `downloads: request (url="${e}"` +
        (r != null ? `, baseURL="${r}"` : "") +
        ") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.",
    );
}
var O9 = {
  get(e, t) {
    return un(e, t), b5(), st.get(e, t);
  },
};
import { homedir as dn } from "os";
var pn = 1e4,
  mn = 1e6;
function gn(e) {
  if (qd(e)) return true;
  return (e === void 0 || e === dn()) && AR() && nxn();
}
async function dgt(e) {
  if (e.isRepoResidentConfig && !gn(e.repoResidentOrigin)) return { ok: false, reason: "missing_trust" };
  let t = await qe(e.command, [], { shell: true, timeout: pn, maxBuffer: mn, cwd: e.cwd, env: fn(e), extendEnv: false });
  if (t.code !== 0 || !t.stdout) return { ok: false, reason: "exec_failed" };
  let r;
  try {
    r = V(t.stdout.trim());
  } catch {
    return { ok: false, reason: "parse_failed" };
  }
  if (!He(r)) return { ok: false, reason: "non_object" };
  let o = {};
  for (let [u, d] of Object.entries(r)) {
    if (typeof d !== "string") return { ok: false, reason: "non_string_value" };
    o[u] = d;
  }
  return { ok: true, headers: o };
}
function fn(e) {
  let t = { ...Na() };
  if (!e.scrubCredentialEnv) return { ...t, ...e.env };
  let r = [];
  for (let _ of kNe()) {
    let h = process.env[_] ?? t[_];
    if (h !== void 0 && h !== "") r.push(h);
    delete t[_];
  }
  let o = process.env,
    u = {};
  for (let _ of new Set([...Object.keys(t), ...Object.keys(o)])) u[_] = o[_] ?? t[_];
  for (let _ of UAe(u).lostCredential) {
    let h = u[_];
    if (h !== void 0 && h !== "") r.push(h);
  }
  Object.assign(t, UAe(t).respelled), r.sort((_, h) => h.length - _.length);
  let d = {};
  for (let [_, h] of Object.entries(e.env ?? {})) d[_] = r.reduce((w, k) => w.split(k).join("REDACTED"), h);
  return { ...t, ...d };
}
var TX = 268435456,
  pgt = 5242880,
  yn = 120000,
  ofn = "Claude-Code-Plugin-Manager";
async function S8n(e, t = {}) {
  if (!Qqt(e)) throw new R(`${Jqt}: ${Tp(e)}`, "plugin archive URL policy rejected");
  let r = Tp(e);
  n(`Downloading plugin archive from ${r}`);
  let o = t.headers ?? {},
    u = { ...o, "User-Agent": ofn },
    d = iJ(e) ? O9.get : Dl.get,
    _ = performance.now(),
    h;
  try {
    let k = await d(e, {
      timeout: yn,
      responseType: "arraybuffer",
      maxRedirects: 5,
      maxContentLength: TX,
      headers: u,
      beforeRedirect: _n(e, ifn(o)),
    });
    DE("plugin_archive", e, "success", performance.now() - _), (h = Buffer.from(k.data));
  } catch (k) {
    DE("plugin_archive", e, "failure", performance.now() - _, fM(k));
    let S = lfn(k);
    if (S) throw S;
    throw new R(wn(k, e, r), "plugin archive download failed");
  }
  let w = hn("sha256").update(h).digest("hex");
  if (t.sha256 && t.sha256.toLowerCase() !== w)
    throw new R(
      `Plugin archive integrity check failed for ${r}: expected sha256 ${t.sha256.toLowerCase()}, got ${w}. The archive was not installed. Verify the sha256 in the marketplace entry, or that the URL serves the intended file.`,
      "plugin archive sha256 mismatch",
    );
  return { data: h, contentSha256: w };
}
function ifn(e) {
  return Object.keys(e ?? {}).filter((t) => t.toLowerCase() !== "user-agent");
}
function it(e, t, r = "plugin archive") {
  let o = new Set(t.map((u) => u.toLowerCase()));
  return (u) => {
    if (o.size === 0 || !u.headers) return;
    let d = fe(u);
    if (d && Sgt(e, d)) return;
    let _ = 0;
    for (let h of Object.keys(u.headers)) if (o.has(h.toLowerCase())) delete u.headers[h], _++;
    if (_ > 0) n(`Fetch of ${r} redirected to a different origin; dropped inherited marketplace headers`);
  };
}
function fe(e) {
  if (e.href) return e.href;
  let t =
    e.host ??
    (e.hostname &&
      (e.hostname.includes(":") && !e.hostname.startsWith("[") ? `[${e.hostname}]` : e.hostname) +
        (e.port ? `:${e.port}` : ""));
  return e.protocol && t ? `${e.protocol}//${t}` : "";
}
function _n(e, t) {
  let r = it(e, t);
  return (o) => {
    let u = fe(o);
    if (!Qqt(u))
      throw new R(
        "Plugin archive redirected to a disallowed URL and was refused \u2014 " +
          `every hop must satisfy the archive URL policy (${Jqt.replace(/^Archive URLs must /, "")}): ` +
          (u ? Tp(u) : "(unparseable redirect target)"),
        "plugin archive redirect policy rejected",
      );
    r(o);
  };
}
function b8n(e, t) {
  let r = it(e, t, "marketplace catalog");
  return (o) => {
    let u = fe(o);
    if (!(u !== "" && (Sgt(e, u) || (u.toLowerCase().startsWith("https:") && !PTt(Nn(u))))))
      throw new R(
        "Marketplace catalog redirected to a disallowed URL and was refused \u2014 " +
          "a server-chosen cross-origin redirect must use https:// and must not point at a loopback, link-local, or cloud-metadata host (only a hop that stays on the origin you started from is exempt): " +
          (u ? Tp(u) : "(unparseable redirect target)"),
        "marketplace catalog redirect policy rejected",
      );
    r(o);
  };
}
function wn(e, t, r) {
  let o = (u) => u.replaceAll(t, () => r);
  if (Sp(e)) {
    if (e.code === "ECONNREFUSED" || e.code === "ENOTFOUND")
      return `Could not connect to ${r}. Check your network connection and that the archive URL is correct.

Technical details: ${o(e.message)}`;
    if (e.code === "ETIMEDOUT" || e.code === "ECONNABORTED")
      return `Timed out downloading plugin archive from ${r}. The server may be slow or unreachable.

Technical details: ${o(e.message)}`;
    if (e.response) {
      let u = e.response.status;
      return `HTTP ${u} while downloading plugin archive from ${r}.${u === 401 || u === 403 ? " The server rejected the request \u2014 if it requires authentication, add `headers` to the marketplace source (they are forwarded to plugin archives on the same origin) or configure your proxy." : ""}

Technical details: ${o(e.message)}`;
    }
  }
  return `Failed to download plugin archive from ${r}: ${o(l(e))}`;
}
function EX(e) {
  return typeof e.headersHelper === "string" && e.headersHelper !== "";
}
var fgt = {
  unshown: "entry_helper_unshown",
  command: "entry_helper_changed",
  archive_url: "entry_archive_url_changed",
};
function Yze(e, t) {
  let { entry: r } = e;
  return EX(r) && r.headersHelper !== void 0 && (!e.requireInlinedManifest || r.strict === false)
    ? { command: r.headersHelper, archiveUrl: t }
    : null;
}
function mgt(e, t) {
  if (e === void 0 || e === null) return t === null ? null : "unshown";
  if (t === null) return null;
  if (e.command !== t.command) return "command";
  if (ot(t.archiveUrl) !== ot(e.archiveUrl)) return "archive_url";
  return null;
}
function ot(e) {
  return M9(Tp(e));
}
function Jze(e, t = "lockdown") {
  let r = Qt(e);
  if (t === "remote_policy_unconsented")
    return `"${r}" fetches its archive through a headersHelper command that was not run: ${wgt}. The plugin was not installed or updated.`;
  return `"${r}" fetches its archive through a marketplace-declared headersHelper command, and your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings.`;
}
var kn = {
  entry_helper_unshown: "plugin entry helper consent mismatch at install: entry_helper_unshown",
  entry_helper_changed: "plugin entry helper consent mismatch at install: entry_helper_changed",
  entry_archive_url_changed: "plugin entry helper consent mismatch at install: entry_archive_url_changed",
  entry_helper_deferred: "plugin headers helper deferred to explicit install",
  entry_helper_disabled_by_policy: "plugin entry helper disabled by managed policy",
  entry_helper_unconfirmed: "plugin entry helper unconfirmed at install (nothing was announced)",
  entry_helper_not_inlined: "plugin entry headersHelper requires strict:false (catalog authoring error)",
  entry_helper_remote_policy_unconsented:
    "plugin entry helper declared by remote managed settings not yet verified and consented",
};
function En(e) {
  return sfn[e] === "sad";
}
var sfn = {
  entry_helper_unshown: "sad",
  entry_helper_changed: "sad",
  entry_archive_url_changed: "sad",
  entry_helper_deferred: "sad",
  entry_helper_disabled_by_policy: "sad",
  entry_helper_unconfirmed: "sad",
  entry_helper_remote_policy_unconsented: "sad",
  entry_helper_not_inlined: "bad",
};
function ggt(e) {
  if (e instanceof kF) return { code: e.failureCode, kind: En(e.failureCode) ? "sad" : "bad" };
  return { code: "command_source_refused", kind: "sad" };
}
class kF extends Ys {
  failureCode;
  constructor(e, t) {
    super(e, kn[t]);
    this.failureCode = t;
  }
}
function hgt(e, t, r) {
  let o = Qt(t),
    u =
      r === "update"
        ? "Review the command now shown, then update again."
        : "Reopen its details in /plugin to review it, then install again.";
  if (e === "unshown")
    return r === "update"
      ? `This update would run a headersHelper command for "${o}" that was not shown on this pane. ${u}`
      : `This install would run a headersHelper command for "${o}" that was not shown to you first. Retry the same install to review the command before it runs.`;
  return e === "command"
    ? `The headersHelper command for "${o}" changed since it was shown. ${u}`
    : `The archive URL for "${o}" changed since its headersHelper command was shown. ${u}`;
}
function Yte(e) {
  let t =
    e.trustedSettingsEntryAuth !== void 0 &&
    e.trustedSettingsEntryAuth.origin !== "settings" &&
    e.marketplaceSource?.source !== "settings"
      ? void 0
      : e.trustedSettingsEntryAuth;
  if (t !== void 0) {
    let r = t.origin === "settings";
    if (!Cn(t.archiveUrl, e.archiveUrl)) return { entry: {}, operatorAuthored: r, requireInlinedManifest: false };
    if (t.headersHelper !== void 0 && t.operatorTier === "policySettings" && !Awe())
      throw new kF(`This plugin's headersHelper was not run: ${wgt}.`, "entry_helper_remote_policy_unconsented");
    return {
      entry: { headers: t.headers, headersHelper: t.origin === "addDir" ? void 0 : t.headersHelper },
      operatorAuthored: r,
      requireInlinedManifest: false,
    };
  }
  if (e.marketplaceSource !== void 0 && e.marketplaceSource.source !== "settings")
    return { entry: e.entry, operatorAuthored: false, requireInlinedManifest: true };
  return { entry: { headers: e.entry.headers }, operatorAuthored: false, requireInlinedManifest: true };
}
async function _gt(e, t) {
  if (e?.source !== "url") return {};
  let r = t.trustedDeclaration,
    o = `marketplace ${Qt(t.marketplaceName ?? Tp(e.url))}`,
    u = (h, w) => ygt(h, `${o} (${w})`, { operatorAuthored: r?.operatorAuthored === true }),
    d = u(
      r ? { ...r.headers } : { ...e.headers },
      r ? (r.operatorAuthored ? "operator declaration" : "repo-tier declaration") : "state copy",
    );
  if (r?.headersHelper === void 0) return d;
  if (!/^https:\/\//i.test(e.url))
    return n(`${o}: headersHelper not run \u2014 marketplace URL is not https`, { level: "warn" }), d;
  if (r.authoredBy === "policySettings" && !Awe())
    throw (
      (g("plugin_headers_helper", "remote_policy_unconsented"),
      new Ys(
        `${o}: headersHelper not run \u2014 ${wgt}. The marketplace was not fetched.`,
        "marketplace headersHelper from remote managed settings not yet verified and consented",
      ))
    );
  if (FS() && r.authoredBy !== "policySettings")
    throw new Ys(
      `${o}: your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly), and this marketplace's headersHelper is not declared in managed settings. The marketplace was not fetched and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings.`,
      "marketplace headersHelper disabled by managed policy",
    );
  if (!ae())
    return n(`${o}: headersHelper not run \u2014 disabled by the plugin command kill switch`, { level: "warn" }), d;
  let _ = await bn(r.headersHelper, e.url, t.marketplaceName, r.operatorAuthored);
  return { ...d, ...u(_, "helper output") };
}
var Sn = 60000;
async function bn(e, t, r, o) {
  let u = `${e}\x00${t}\x00${r ?? ""}\x00${o ? "operator" : "repo"}`,
    d = Date.now(),
    { marketplaceHelperMemo: _ } = Jt(),
    h = _.get(u);
  if (h && h.expiresAt > d) return h.headers;
  let w = An(e, t, r, o);
  _.set(u, { expiresAt: d + Sn, headers: w });
  try {
    return await w;
  } catch (k) {
    throw (_.delete(u), k);
  }
}
async function An(e, t, r, o) {
  let u = await dgt({
    command: e,
    scrubCredentialEnv: !o,
    isRepoResidentConfig: false,
    cwd: be(),
    env: { CLAUDE_CODE_MARKETPLACE_URL: t, ...(r !== void 0 && { CLAUDE_CODE_MARKETPLACE_NAME: r }) },
  });
  if (!u.ok)
    throw (
      (p("plugin_headers_helper", u.reason),
      new R(`marketplace headersHelper failed (${u.reason})`, "marketplace headers helper failed"))
    );
  return y("plugin_headers_helper"), u.headers;
}
async function Pn(e, t) {
  let r = (d) => ygt(d, `plugin ${Qt(t.pluginName)}`, { operatorAuthored: t.operatorAuthored === true }),
    o = r(e.headers ?? {});
  if (!EX(e) || e.headersHelper === void 0) return o;
  at(e, { ...t, disabledByPolicy: CX(t.marketplaceSource, t.marketplaceName) });
  let u = await dgt({
    command: e.headersHelper,
    scrubCredentialEnv: !t.operatorAuthored,
    cwd: be(),
    isRepoResidentConfig: false,
    env: { CLAUDE_CODE_PLUGIN_NAME: t.pluginName, CLAUDE_CODE_PLUGIN_ARCHIVE_URL: t.archiveUrl },
  });
  if (!u.ok)
    throw (
      (p("plugin_headers_helper", u.reason),
      new R(`plugin headersHelper for "${ge(t.pluginName)}" failed (${u.reason})`, "plugin headers helper failed"))
    );
  return y("plugin_headers_helper"), { ...o, ...r(u.headers) };
}
var Rn = new Set([
    "host",
    "cookie",
    "forwarded",
    "x-real-ip",
    "x-client-ip",
    "true-client-ip",
    "client-ip",
    "cf-connecting-ip",
    "fastly-client-ip",
    "x-originating-ip",
    "x-remote-ip",
    "x-remote-addr",
    "x-cluster-client-ip",
    "connection",
    "upgrade",
    "transfer-encoding",
    "content-length",
    "te",
    "trailer",
    "expect",
    "via",
  ]),
  vn = ["x-forwarded-", "x-original-", "proxy-"],
  Tn = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
function afn(e) {
  let t = e.toLowerCase().replaceAll("_", "-");
  return Rn.has(t) || vn.some((r) => t.startsWith(r));
}
function ygt(e, t, { operatorAuthored: r = false } = {}) {
  let o = {};
  for (let [u, d] of Object.entries(e)) {
    if (!Tn.test(u) || /[\r\n\0]/.test(d)) {
      n(`Dropping header "${Qt(u)}" for ${t}: malformed name or value`, { level: "warn" });
      continue;
    }
    if (!r && afn(u)) {
      n(
        `Dropping header "${Qt(u)}" for ${t}: request-routing/identity headers are not accepted from non-operator sources`,
        { level: "warn" },
      );
      continue;
    }
    o[u] = d;
  }
  return o;
}
function ge(e) {
  return Qt(e);
}
function at(e, t) {
  if (t.disabledByPolicy !== null)
    throw new kF(
      Jze(t.pluginName, t.disabledByPolicy),
      t.disabledByPolicy === "remote_policy_unconsented"
        ? "entry_helper_remote_policy_unconsented"
        : "entry_helper_disabled_by_policy",
    );
  if (t.requireInlinedManifest !== false && e.strict !== false)
    throw new kF(
      `Plugin "${ge(t.pluginName)}" declares a headersHelper but is not strict:false \u2014 an entry with headersHelper must inline its manifest so its capabilities can be reviewed before the command runs.`,
      "entry_helper_not_inlined",
    );
  if (!t.runEntryHelper)
    throw new kF(
      `Plugin "${ge(t.pluginName)}" fetches its archive through a headersHelper, ` +
        "which only runs when you install or update it from its own details view \u2014 open this plugin in /plugin (or run `claude plugin install`/`update`), where the command is shown first.",
      "entry_helper_deferred",
    );
}
async function KDe(e) {
  if (typeof e.pluginSource !== "object" || e.pluginSource.source !== "archive") return;
  let t = e.pluginSource.url,
    {
      entry: r,
      operatorAuthored: o,
      requireInlinedManifest: u,
    } = Yte({
      entry: e.entry,
      archiveUrl: t,
      marketplaceSource: e.marketplaceSource,
      trustedSettingsEntryAuth: e.trustedSettingsEntryAuth,
    }),
    d = e.marketplaceSource?.source === "url" ? e.marketplaceSource.url : void 0,
    _ = CX(e.marketplaceSource, e.marketplaceName);
  if (EX(r))
    at(r, {
      pluginName: e.pluginName,
      runEntryHelper: e.runEntryHelper,
      requireInlinedManifest: u,
      operatorAuthored: o,
      disabledByPolicy: _,
    });
  let h =
      d !== void 0 && Sgt(d, t)
        ? await _gt(e.marketplaceSource, {
            marketplaceName: e.marketplaceName,
            trustedDeclaration: e.trustedMarketplaceAuth,
          })
        : {},
    w = await Pn(r, {
      pluginName: e.pluginName,
      archiveUrl: t,
      runEntryHelper: e.runEntryHelper,
      requireInlinedManifest: u,
      operatorAuthored: o,
      marketplaceSource: e.marketplaceSource,
      marketplaceName: e.marketplaceName,
    }),
    k = { ...h, ...w };
  if (Object.keys(k).length === 0) return;
  return { url: t, headers: k };
}
function AX(e, t) {
  let r = ND(e);
  return r ? t[r]?.source : void 0;
}
function ND(e) {
  let t = e.split("@");
  return t.length === 2 && t[1] ? t[1] : void 0;
}
function Cn(e, t) {
  return M9(e) === M9(t);
}
function Sgt(e, t) {
  try {
    let r = new URL(e).origin,
      o = new URL(t).origin;
    return r !== "null" && r === o;
  } catch {
    return false;
  }
}
function Nn(e) {
  try {
    return new URL(e).hostname;
  } catch {
    return "";
  }
}
function lfn(e) {
  let t = e;
  for (let r = 0; r < 5 && t instanceof Error; r++) {
    if (t instanceof R) return t;
    t = t.cause;
  }
  return;
}
import { createWriteStream as Mn } from "fs";
import { open as Fn, rm as dt, writeFile as $n } from "fs/promises";
import { Transform as Un } from "stream";
import { pipeline as Bn } from "stream/promises";
var Z = "user:plugins";
async function xn(e) {
  if (!LAe("allow_plugin_skill_search")) return { ok: false, reason: "policy_disabled" };
  if (!pr()) return { ok: false, reason: "wrong_provider" };
  if (Ct()) return { ok: false, reason: "essential_traffic_only" };
  if (rl()) return { ok: true, expanded: false };
  try {
    await Cs({ credentials: e });
  } catch (o) {
    n(`[plugins-scope] pre-ensure token freshen failed: ${l(o)}`);
  }
  let t = Yt();
  if (!t?.accessToken) return { ok: false, reason: "no_token" };
  if (t.scopes?.includes(Z)) return { ok: true, expanded: false };
  if (t.clientId) return { ok: false, reason: "custom_client" };
  if (!t.refreshToken) return { ok: false, reason: "no_refresh" };
  if (await Qk(e)) return { ok: false, reason: "no_refresh" };
  if (Jbn(t.refreshToken))
    return { ok: false, reason: "expand_failed", detail: "expansion already attempted this session for this credential" };
  let r = false;
  try {
    return await x7e(async ({ lockedTokens: o, isCompromised: u, signal: d }) => {
      if (!o?.refreshToken) return { ok: false, reason: "no_refresh" };
      if (u()) return { ok: false, reason: "lock_contended" };
      if (o.scopes?.includes(Z)) return { ok: true, expanded: false };
      if (o.clientId) return { ok: false, reason: "custom_client" };
      if (await Qk(e)) return { ok: false, reason: "no_refresh" };
      let _;
      try {
        (r = true),
          m4t(o.refreshToken),
          (_ = await C$(o.refreshToken, {
            clientId: o.clientId,
            scopes: te([...x5, ...Ife(o.scopes), Z]),
            signal: d,
            telemetryContext: "plugins_scope_expansion",
          }));
      } catch (w) {
        if (v$(w) && !u()) await iNe(o.refreshToken, e);
        if (u() || It(w)) return { ok: false, reason: "lock_contended" };
        throw w;
      }
      let h = await oNe({ isCompromised: u, postedRefreshToken: o.refreshToken, refreshedTokens: _, credentials: e });
      if (_.refreshToken) m4t(_.refreshToken);
      if (h === "adopted_sibling") return { ok: false, reason: "lock_contended" };
      if (h === "save_failed") return g("plugins_scope_expansion", "save_failed"), { ok: false, reason: "save_failed" };
      if (!_.scopes?.includes(Z))
        return (
          g("plugins_scope_expansion", "expand_failed"),
          { ok: false, reason: "expand_failed", detail: "refresh succeeded but user:plugins not granted" }
        );
      return y("plugins_scope_expansion"), { ok: true, expanded: true };
    }, e);
  } catch (o) {
    if (o instanceof dpe || It(o)) return { ok: false, reason: "lock_contended" };
    if (!r) return { ok: false, reason: "lock_contended", detail: l(o) };
    return g("plugins_scope_expansion", "expand_failed"), { ok: false, reason: "expand_failed", detail: l(o) };
  }
}
class lt {
  inFlight = void 0;
  begin(e) {
    this.inFlight = e;
  }
  settle(e) {
    if (this.inFlight === e) this.inFlight = void 0;
  }
}
var On = new J(() => new lt()),
  Ln = 15000;
function In(e, t) {
  let r = On.of(e),
    o = r.inFlight;
  if (o) return o;
  let u = xn(t)
      .then((_) => {
        if (!_.ok) n(`[plugins-scope] expansion skipped/failed: ${_.reason}${_.detail ? ` (${_.detail})` : ""}`);
        return _;
      })
      .catch((_) => {
        let h = l(_);
        return n(`[plugins-scope] unexpected ensure error: ${h}`), { ok: false, reason: "expand_failed", detail: h };
      })
      .then((_) => (r.settle(u), d(), _)),
    d = vt(() => jt(u, Ln));
  return r.begin(u), u;
}
var Dn = 1e4;
async function q2t(e, t, r, o = Dn) {
  if (t?.aborted) return;
  let u = In(e, r);
  if (!t) {
    await jt(u, o);
    return;
  }
  let d,
    _ = new Promise((h) => {
      (d = () => h()), t.addEventListener("abort", d, { once: true });
    });
  try {
    await jt(Promise.race([u, _]), o);
  } finally {
    t.removeEventListener("abort", d);
  }
}
var Ewe = m(() =>
  T.object({
    error: T.object({
      type: T.string().optional(),
      message: T.string()
        .nullish()
        .catch(void 0),
    }),
  }),
);
function bgt(e) {
  try {
    let t = Ewe().safeParse(V(e.toString("utf8", 0, 2048)));
    if (t.success) return t.data.error.type ?? "error_envelope_no_type";
  } catch {}
  return "non_json_body";
}
function ct(e) {
  let t = _yt(e.installation_preference);
  return {
    pluginId: e.id,
    name: e.name,
    description: e.description ?? "",
    version: e.version ?? null,
    updatedAt: e.updated_at ?? null,
    ...(typeof e.marketplace_name === "string" && e.marketplace_name && { marketplaceName: e.marketplace_name }),
    ...(t && { installationPreference: t }),
  };
}
function ut(e) {
  return e.enabled !== false;
}
var Kn = 1e4,
  _e = 60000,
  gt = 500,
  pt = 100,
  he = 20,
  ye = TX;
function Gn() {
  return a.CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS ?? _e;
}
var jn = "/api/oauth/organizations/:orgUUID/plugins/list-plugins?enabled_only=true&compact=true";
async function zn(e) {
  let t = await e();
  if (t.ok) return t;
  return await ne(gt), e();
}
async function Qze(e, t = {}) {
  await q2t(e, t.signal, t.credentials);
  let r = await mt(t);
  if (r.success || r.status === 403) return r;
  return await ne(gt), mt(t);
}
async function mt(e) {
  let t = [];
  try {
    for (let r = 0; r < he; r++) {
      let o = r * pt,
        u = await bt.get(`${jn}&limit=${pt}&offset=${o}`, {
          auth: "teleport-org",
          isBackground: e.isBackground,
          timeout: Kn,
          credentials: e.credentials,
        });
      if (!u.ok) return { success: false, error: u.reason === "no-auth" ? u.detail : u.reason };
      if (!Array.isArray(u.data?.plugins)) {
        let d = Ewe().safeParse(u.data);
        if (d.success) {
          let _ = d.data.error.type ?? "error_envelope_no_type";
          return (
            Y("warn", "plugins_sync_list_error", { serverError: _, status: u.status }),
            { success: false, error: _, status: u.status }
          );
        }
        return Y("warn", "plugins_sync_list_malformed"), { success: false, error: "malformed list-plugins response" };
      }
      for (let d of u.data.plugins) if (ut(d)) t.push(ct(d));
      if (u.data.has_more !== true) return { success: true, plugins: t };
    }
    return (
      Y("warn", "plugins_sync_list_page_cap", { pages: he, collected: t.length }),
      { success: false, error: `list-plugins page cap (${he}) exceeded` }
    );
  } catch (r) {
    let { message: o } = os(r);
    return { success: false, error: o };
  }
}
function cfn(e, t) {
  let r = t ? `?version=${encodeURIComponent(t)}` : "";
  return `/api/oauth/organizations/:orgUUID/plugins/${encodeURIComponent(e)}/download${r}`;
}
async function w8n(e, t, r, o = {}) {
  return zn(() => Wn(e, t, r, o));
}
async function Wn(e, t, r, o) {
  let u = cfn(e, r);
  if (a.CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD) return Vn(u, t, o);
  let d = 0,
    _ = false;
  try {
    let b = function () {
        (_ = true), S.destroy(Error("plugin download stream stalled"));
      },
      h = await bt.get(u, {
        auth: "teleport-org",
        isBackground: o.isBackground,
        timeout: _e,
        responseType: "stream",
        credentials: o.credentials,
      });
    if (!h.ok || !h.data) {
      let A = h.ok ? "empty_body" : h.reason;
      return Y("warn", "plugins_sync_download_not_ok", { reason: A }), { ok: false, reason: A };
    }
    let w = Gn(),
      k,
      S = new Un({
        transform(A, we, O) {
          if ((clearTimeout(k), (k = setTimeout(b, w)), (d += A.length), d > ye))
            O(Error("plugin zip exceeds download byte cap"));
          else O(null, A);
        },
        flush(A) {
          clearTimeout(k), A();
        },
      });
    k = setTimeout(b, w);
    try {
      await Bn(h.data, S, Mn(t));
    } finally {
      clearTimeout(k);
    }
    let v = Buffer.alloc(2048),
      x = await Fn(t, "r"),
      N;
    try {
      N = (await x.read(v, 0, v.length, 0)).bytesRead;
    } finally {
      await x.close();
    }
    if (N < 2 || v[0] !== 80 || v[1] !== 75) {
      await dt(t, { force: true });
      let A = N === 0 ? "empty_body" : bgt(v.subarray(0, N));
      return Y("warn", "plugins_sync_download_not_zip", { serverError: A, bodyLen: d }), { ok: false, reason: A };
    }
    return { ok: true };
  } catch (h) {
    await dt(t, { force: true }).catch(() => {});
    let w = h?.response?.data;
    if (w !== null && typeof w === "object" && "destroy" in w && typeof w.destroy === "function") w.destroy();
    let k = h !== null && typeof h === "object" && "code" in h ? h.code : void 0,
      S = _
        ? "timeout"
        : d > ye
          ? "too_large"
          : k === "ECONNRESET" || k === "EPIPE" || k === "ETIMEDOUT"
            ? "network"
            : os(h).kind;
    return Y("warn", "plugins_sync_download_exception", { kind: S }), { ok: false, reason: S };
  }
}
async function Vn(e, t, r) {
  try {
    let o = await bt.get(e, {
      auth: "teleport-org",
      isBackground: r.isBackground,
      timeout: _e,
      responseType: "arraybuffer",
      maxContentLength: ye,
      credentials: r.credentials,
    });
    if (!o.ok || !o.data) {
      let d = o.ok ? "empty_body" : o.reason;
      return Y("warn", "plugins_sync_download_not_ok", { reason: d }), { ok: false, reason: d };
    }
    let u = Buffer.from(o.data);
    if (u.length < 2 || u[0] !== 80 || u[1] !== 75) {
      let d = u.length === 0 ? "empty_body" : bgt(u);
      return Y("warn", "plugins_sync_download_not_zip", { serverError: d, bodyLen: u.length }), { ok: false, reason: d };
    }
    return await $n(t, u), { ok: true };
  } catch (o) {
    let { kind: u } = os(o);
    return Y("warn", "plugins_sync_download_exception", { kind: u }), { ok: false, reason: u };
  }
}
export {
  O9,
  Xte,
  ag,
  DE,
  fM,
  $2t,
  d8n,
  gI,
  Mu,
  igt,
  LD,
  MD,
  p8n,
  qDe,
  f8n,
  qze,
  L9,
  U2t,
  Gze,
  m8n,
  sgt,
  nC,
  agt,
  Qpn,
  Zpn,
  B2t,
  g8n,
  lgt,
  zze,
  mM,
  cgt,
  bwe,
  GDe,
  aue,
  efn,
  wwe,
  tfn,
  ugt,
  nfn,
  lue,
  Twe,
  cue,
  Tc,
  j2t,
  zDe,
  rC,
  Vze,
  Ys,
  h8n,
  rfn,
  Kze,
  Xze,
  W2t,
  VDe,
  _8n,
  H2,
  RF,
  y8n,
  dgt,
  TX,
  pgt,
  ofn,
  S8n,
  ifn,
  b8n,
  EX,
  fgt,
  Yze,
  mgt,
  Jze,
  sfn,
  ggt,
  kF,
  hgt,
  Yte,
  _gt,
  afn,
  ygt,
  KDe,
  AX,
  ND,
  Sgt,
  lfn,
  q2t,
  Ewe,
  bgt,
  Qze,
  cfn,
  w8n,
};
