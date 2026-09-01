// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Cl } from "/$bunfs/root/chunk-f9h0bg01.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { $e } from "/$bunfs/root/chunk-2masxyqj.js";
import { z_e } from "/$bunfs/root/chunk-z45ex17x.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { Ru } from "/$bunfs/root/chunk-56sxk8k2.js";
import { fileURLToPath as c, pathToFileURL as u } from "url";
var s = { useCwd: true, useToolMemoryCgroup: false },
  Xon = new Set([
    "https:",
    "http:",
    "vscode:",
    "vscode-insiders:",
    "cursor:",
    "windsurf:",
    "zed:",
    "jetbrains:",
    "idea:",
    "slack:",
    "linear:",
    "notion:",
    "figma:",
  ]);
function p(r) {
  let e;
  try {
    e = new URL(r);
  } catch (o) {
    throw Error(`Invalid URL format: ${r}`);
  }
  if (e.protocol !== "http:" && e.protocol !== "https:")
    throw Error(`Invalid URL protocol: must use http:// or https://, got ${e.protocol}`);
}
async function x9e(r) {
  try {
    let o = "open",
      { code: t } = await $e(o, [r], s);
    return t === 0;
  } catch (e) {
    return false;
  }
}
async function f(r) {
  try {
    let e = D();
    if (e === "macos") {
      let { code: t } = await $e("open", ["-R", "--", r]);
      return t === 0;
    }
    if (e === "windows") {
      let { exitCode: t } = await $e("explorer", [`/select,${r}`]);
      return t !== void 0;
    }
    let { code: o } = await $e("dbus-send", [
      "--session",
      "--print-reply",
      "--dest=org.freedesktop.FileManager1",
      "--type=method_call",
      "/org/freedesktop/FileManager1",
      "org.freedesktop.FileManager1.ShowItems",
      `array:string:${u(r).href.replaceAll(",", "%2C")}`,
      "string:",
    ]);
    return o === 0;
  } catch (e) {
    return false;
  }
}
async function I9e(r) {
  let e;
  try {
    e = new URL(r);
  } catch {
    return false;
  }
  let o = e.protocol;
  if (o === "file:") {
    if (e.host !== "") return false;
    try {
      let t = c(r);
      if (Ru(t) || z_e(t)) return false;
      return await f(t);
    } catch {
      return false;
    }
  }
  if (!Xon.has(o))
    return n(`[hyperlink] refusing to dispatch clicked link with non-allowlisted scheme ${o}`, { level: "warn" }), false;
  return (await l(r)).ok;
}
function xL() {
  if (!process.stdout.isTTY) return true;
  if (a.BROWSER && a.BROWSER !== "true") return false;
  if (a.SSH_CONNECTION) return true;
  return i();
}
function i() {
  return D() === "linux" && !a.DISPLAY && !a.WAYLAND_DISPLAY;
}
async function Yon(r) {
  try {
    p(r);
  } catch (e) {
    return { ok: false, reason: "invalid_url", detail: e instanceof Error ? e.message : String(e) };
  }
  return l(r);
}
async function Lr(r) {
  return (await Yon(r)).ok;
}
async function l(r) {
  try {
    let e = Cl()?.browser,
      o = e !== void 0 ? (e ?? void 0) : a.BROWSER,
      t = "darwin";
    if (!o && i()) return { ok: false, reason: "no_display" };
    return d(await $e(o || "open", [r], s));
  } catch (e) {
    return { ok: false, reason: "unknown", detail: e instanceof Error ? e.message : String(e) };
  }
}
function d(r) {
  if (r.code === 0) return { ok: true };
  let e = r.error ?? "",
    o = r.stderr || e || `exit ${r.code}`;
  if (r.code === 127 || e.includes("ENOENT")) return { ok: false, reason: "opener_missing", detail: o };
  if (e.includes("ETIMEDOUT") || e.includes("timed out")) return { ok: false, reason: "timeout", detail: o };
  if (e.includes("EACCES") || e.includes("EPERM")) return { ok: false, reason: "spawn_error", detail: o };
  if (r.code > 0) return { ok: false, reason: "nonzero_exit", detail: o };
  return { ok: false, reason: "unknown", detail: o };
}
export { Xon, x9e, I9e, xL, Yon, Lr };
