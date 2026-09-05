// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Se, AR, yS, v0, r$e } from "/$bunfs/root/chunk-f9h0bg01.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { E, Ht } from "/$bunfs/root/chunk-ypdw393e.js";
import { ao, qu, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { qd, N6, pNe, Nre } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { ee } from "/$bunfs/root/chunk-4fwj3vnx.js";
import { iU, DO, P1e } from "/$bunfs/root/chunk-rgw52f13.js";
import { gt, Up } from "/$bunfs/root/chunk-q14dgq5g.js";
import { ye } from "/$bunfs/root/chunk-988p40e0.js";
import { eo } from "/$bunfs/root/chunk-bj904w9w.js";
import { Oa } from "/$bunfs/root/chunk-nfmyt8cw.js";
import { idn } from "/$bunfs/root/chunk-wn1jrcrk.js";
import { dKe, KTe, uyt, pyt } from "/$bunfs/root/chunk-2n1hsggr.js";
import { TG, qx, Lc, Q4e, Vee, CPe, $Pe, UPe, J_, xzn, KUt, _l } from "/$bunfs/root/chunk-zze8764r.js";
import { s6, cg } from "/$bunfs/root/chunk-1mp2j0tx.js";
import { OD } from "/$bunfs/root/chunk-btcxpqw5.js";
import { _u } from "/$bunfs/root/chunk-x06p1jhb.js";
import { kl, pt } from "/$bunfs/root/chunk-w3c6n7jh.js";
import { dK, K4, X4 } from "/$bunfs/root/chunk-87pfeb5g.js";
import { tr } from "/$bunfs/root/chunk-56sxk8k2.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
import { homedir as T } from "os";
import { realpath as S, stat as j } from "fs/promises";
import { dirname as b, parse as A } from "path";
var _ = "Cd";
function R(e, t) {
  let o = te([...ao(e.requestedPath), e.canonicalPath]),
    l = te([e.canonicalPath, pyt(e.canonicalPath)]),
    i = (r, u, m) => m.some((y) => D(r, u, y));
  for (let r of cg(t)) {
    if (r.ruleValue.toolName !== _) continue;
    let u = r.ruleValue.ruleContent;
    if (u === void 0 || i(u, r.source, o)) return { result: "blockedByRule", rule: r };
  }
  let d = s6(t).filter((r) => r.ruleValue.toolName === _);
  if (d.length === 0) return { result: "allowed" };
  for (let r of d) {
    let u = r.ruleValue.ruleContent;
    if (u === void 0 || i(u, r.source, l)) return { result: "allowed" };
  }
  return {
    result: "outsideAllowedPatterns",
    allowedPatterns: d.map((r) => r.ruleValue.ruleContent).filter((r) => r !== void 0),
  };
}
function D(e, t, o) {
  let { relativePattern: l, root: i } = uyt(e, t),
    d = KTe(i ?? ee(), o);
  if (d === ".." || d.startsWith("../")) return false;
  let r = l
    .replace(/\/{2,}/g, "/")
    .replace(/^\//, "")
    .replace(/\/$/, "");
  return x(r).test(d);
}
function x(e) {
  let t = "^";
  for (let o = 0; o < e.length; o++) {
    let l = e[o];
    if (o === 0 && l === "*" && e[1] === "*" && e[2] === "/") (t += "(?:.*/)?"), (o += 2);
    else if (l === "/" && e[o + 1] === "*" && e[o + 2] === "*") (t += "(/.*)?"), (o += 2);
    else if (l === "*")
      if (e[o + 1] === "*") (t += ".*"), o++;
      else t += "[^/]+";
    else if ("\\^$.|?+()[]{}".includes(l)) t += `\\${l}`;
    else t += l;
  }
  return new RegExp(`${t}$`, "i");
}
async function HBe(e, t) {
  if (await M(e)) {
    v0(true), r$e(true);
    return;
  }
  await pNe(e, t);
}
async function M(e) {
  let t = async (o) => {
    let l = o;
    try {
      l = await S(o);
    } catch {}
    return Up(tr(l));
  };
  return (await t(e)) === (await t(T()));
}
async function g0t(e, t) {
  let o = gt(e);
  try {
    if (!(await j(o)).isDirectory()) return { result: "not_a_directory", path: o, parent: b(o) };
  } catch (r) {
    if (!Ht(r)) h(Object.assign(Error("cd: unexpected stat errno"), { code: E(r) }));
    return { result: "not_found", path: o };
  }
  let l = o;
  try {
    l = await S(o);
  } catch {
    l = o;
  }
  let i = tr(l);
  if (i === ee() && i === Se()) return { result: "same", directory: l };
  let d = R({ requestedPath: o, canonicalPath: l }, t);
  if (d.result !== "allowed") return { result: "blocked_by_rule", directory: l, check: d };
  return { result: "ok", directory: l };
}
function h0t(e, t, o = (i) => i, l) {
  let i = l?.terminalAffordances !== false,
    d = l?.display ?? ((r) => r);
  if (((e = d(e)), t.result === "blockedByRule")) {
    let r = d(eo(t.rule.ruleValue)),
      u = Vee(t.rule.source);
    if (t.rule.ruleValue.ruleContent === void 0)
      return i
        ? `Can't move to ${o(e)} \u2014 /cd is turned off by the ${o(r)} rule in ${u}. Update the rule in /permissions to move between directories again.`
        : `Can't move to ${o(e)} \u2014 directory changes are turned off by the ${o(r)} permission rule in ${u}.`;
    return i
      ? `Can't move to ${o(e)} \u2014 it's excluded by the ${o(r)} rule in ${u}. Pick a directory outside that rule, or update it in /permissions.`
      : `Can't move to ${o(e)} \u2014 it's excluded by the ${o(r)} permission rule in ${u}. Pick a directory outside that rule.`;
  }
  return i
    ? `Can't move to ${o(e)} \u2014 /cd is limited to directories matching ${t.allowedPatterns.map((r) => o(d(r))).join(", ")}. Pick a matching directory, or add a Cd rule in /permissions.`
    : `Can't move to ${o(e)} \u2014 directory changes are limited to ${t.allowedPatterns.map((r) => o(d(r))).join(", ")}. Pick a matching directory.`;
}
async function N(e, t, o) {
  if (a.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return "";
  let l = new Set();
  for (let m of await J_(e, false, o)) l.add(Up(m.path));
  let i = [],
    d = t;
  while (d !== A(d).root) i.push(d), (d = b(d));
  let r = $Pe(t),
    u = [];
  for (let m of i.reverse()) u.push(...(await KUt(m, t, l, { skipProject: UPe(m, r) })));
  return xzn(u);
}
async function _0t(e, t, o, l) {
  let i = ee(),
    d = Se(),
    r = te([d, i]),
    u = te(
      [
        ...(ye("projectSettings")?.permissions?.additionalDirectories ?? []),
        ...(ye("localSettings")?.permissions?.additionalDirectories ?? []),
      ].flatMap((p) => {
        try {
          return r.map((C) => gt(p, C));
        } catch {
          return [];
        }
      }),
    );
  qu(t), Lc(t), yS(ee());
  let m = true;
  try {
    await CPe(l);
  } catch (p) {
    m = false;
    let C = false;
    try {
      qu(i), (C = true);
    } catch {
      n(
        `directory move: transcript move failed and rollback chdir failed; completing the move with the transcript left in its previous home: ${p}`,
        { level: "error" },
      );
    }
    if (C) throw (Lc(i), yS(d), p);
  }
  if (m)
    try {
      await idn(ee(), l);
    } catch (p) {
      n(`directory move: bg session state rehome failed (continuing): ${p}`, { level: "error" });
    }
  Nre();
  try {
    await kl.rehome();
  } catch (p) {
    n(`directory move: re-targeting the settings watcher failed (continuing with the previous watch): ${p}`, {
      level: "error",
    });
  }
  try {
    OD(), kl.notifyChange("projectSettings", { prevCwd: d });
  } catch (p) {
    n(`directory move: re-resolving settings and hooks for the new directory failed (continuing): ${p}`, {
      level: "error",
    });
  }
  try {
    await Q4e(await TG("skills", ee()));
  } catch (p) {
    n(`directory move: registering the new directory's skills failed (continuing without them): ${p}`, {
      level: "error",
    });
  }
  try {
    await X4.rehome();
  } catch (p) {
    n(`directory move: re-targeting the skill watcher failed (continuing with the previous watch): ${p}`, {
      level: "error",
    });
  }
  iU(),
    P1e(e),
    Oa()?.refreshGitBranch?.(),
    pt.refreshConfig(),
    qx.invalidateAllRenders(),
    s("tengu_cd_command", { source: c(o) });
  let y = "";
  try {
    y = await N(e, t, l);
  } catch (p) {
    n(`directory move: loading the new directory's memory context failed (continuing without it): ${p}`, {
      level: "error",
    });
  }
  let g = _u(t),
    w = _l(
      `The session's working directory has changed to ${g} (${o === "cd_command" ? "via /cd" : "by the user"}). The environment block at the start of this conversation still names the ` +
        "previous directory \u2014 that information is stale. All tool calls and " +
        `relative paths now resolve from ${g}. Project settings (permission rules, hooks), project MCP servers, and project skills now come from ${g}; its CLAUDE.md, if any, follows below. Environment variables set by the previous directory's ` +
        "settings stay in effect for this process \u2014 they cannot be unset \u2014 and " +
        "the new directory's settings env is applied on top of them.",
    ),
    v = false;
  try {
    v = !a.CLAUDE_CODE_SANDBOXED && !AR() && !qd() && dKe();
  } catch (p) {
    n(`directory move: probing the gated project grants failed (continuing): ${p}`, { level: "error" });
  }
  let P = v
    ? _l(
        `Note: ${g} declares project permission rules and/or additional directories in its settings, but they are NOT applied \u2014 the workspace is trusted only through a parent directory's grant, and project-scoped grants require trusting this directory explicitly. Tool calls those rules would have pre-approved will ask for permission.`,
      )
    : "";
  return {
    modelMessage: [w, P, y].filter(Boolean).join(`

`),
    transcriptRelocated: m,
    projectGrantsGated: v,
    gatedNotice: P,
    departedAdditionalDirectories: u,
  };
}
function y0t() {
  Nre(), OD(), kl.notifyChange("projectSettings", { trustFlip: true });
}
function S0t(e) {
  if (e.gatedNotice === "") return e.modelMessage;
  return e.modelMessage.replace(
    e.gatedNotice,
    _l(
      "The user trusted this directory explicitly: its project permission rules and additional directories are now applied.",
    ),
  );
}
var k = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/u;
function Hur(e, t) {
  return k.test(e) ? t : e;
}
async function ATr(e, t) {
  if (t.isBusy())
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "busy",
        message:
          "A turn is in progress \u2014 the working directory can only change while the session is idle. Wait for the turn to finish (or interrupt it), then retry.",
      },
    };
  if (typeof e.path !== "string" || e.path.trim() === "")
    return { kind: "invalid", message: "set_cwd: invalid request \u2014 path must be a non-empty string" };
  let o = e.trust_accepted === true;
  if (o && typeof e.trusted_directory !== "string")
    return {
      kind: "invalid",
      message:
        "set_cwd: invalid request \u2014 trust_accepted requires trusted_directory (echo the directory from the needs_trust response)",
    };
  let l = false;
  try {
    l = dK(e.path, gt(e.path), t.toolPermissionContext.trustedNetworkDirectories).ok;
  } catch {
    l = false;
  }
  if (!l)
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "unsafe_path",
        message:
          "The target is a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back.",
      },
    };
  let i = await g0t(e.path.trim(), t.toolPermissionContext),
    d = "directory" in i ? i.directory : i.path;
  if (k.test(d))
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "unsafe_path",
        message:
          "The target path contains invisible or non-printing characters (control, formatting, zero-width, or non-standard space characters such as the narrow no-break space macOS puts in screenshot folder names), so it cannot safely cross the trust boundary. The path is deliberately not echoed back.",
      },
    };
  if ("directory" in i && K4(i.directory, t.toolPermissionContext.trustedNetworkDirectories) !== void 0)
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "unsafe_path",
        message:
          "The target resolved to a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back.",
      },
    };
  if (i.result === "not_found")
    return {
      kind: "response",
      response: { status: "rejected", reason: "not_found", message: `Couldn't find a directory at ${i.path}.` },
    };
  if (i.result === "not_a_directory")
    return {
      kind: "response",
      response: { status: "rejected", reason: "not_a_directory", message: `${i.path} is not a directory.` },
    };
  if (i.result === "blocked_by_rule")
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "blocked_by_rule",
        message: Hur(
          h0t(i.directory, i.check, void 0, { terminalAffordances: false }),
          "A Cd permission rule blocks this directory. The rule text contains control or invisible characters, so it is not echoed here \u2014 check the Cd(...) entries in your settings.",
        ),
      },
    };
  if (i.result === "same")
    return { kind: "response", response: { status: "ok", cwd: i.directory, changed: false, transcript_relocated: true } };
  let r = i.directory;
  if (!N6(r)) {
    let f = DO(r),
      w = f != null && f !== r && !k.test(f) ? f : void 0;
    if (!o)
      return {
        kind: "response",
        response:
          w != null ? { status: "needs_trust", directory: r, trust_root: w } : { status: "needs_trust", directory: r },
      };
    if (e.trusted_directory !== r)
      return {
        kind: "response",
        response:
          w != null ? { status: "needs_trust", directory: r, trust_root: w } : { status: "needs_trust", directory: r },
      };
    await HBe(r, t.storageV5);
  }
  if (t.isBusy())
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "busy",
        message: "A turn started while the request was being validated. Retry when the session is idle.",
      },
    };
  let {
    modelMessage: u,
    transcriptRelocated: m,
    departedAdditionalDirectories: y,
  } = await _0t(t.session, r, "set_cwd", t.storageV5);
  try {
    t.retireDepartedAdditionalDirectories?.(y);
  } catch (f) {
    n(`set_cwd: retiring the previous project's additional directories failed (continuing): ${f}`, { level: "error" });
  }
  try {
    t.enqueueMoveNotice(u);
  } catch (f) {
    n(`set_cwd: enqueueing the move notice failed (continuing): ${f}`, { level: "error" });
  }
  let g = ee();
  return { kind: "response", response: { status: "ok", cwd: k.test(g) ? r : g, changed: true, transcript_relocated: m } };
}
export { HBe, g0t, h0t, _0t, y0t, S0t, Hur, ATr };
