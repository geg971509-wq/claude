// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { jt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { Co } from "/$bunfs/root/chunk-gcks6mn0.js";
import { s5, u0, IC, B$, Uor } from "/$bunfs/root/chunk-r3qa2s4k.js";
import { execFile as s } from "child_process";
var l = 1e4,
  IEn = 250,
  r = null,
  c;
function r0r() {
  return c === true;
}
function o0r(e) {
  c = e;
}
function i0r() {
  return B$().lastKnown;
}
function s0r(e) {
  B$().lastKnown = e;
}
function a(e) {
  return new Promise((o) => {
    try {
      s(
        "security",
        ["find-generic-password", "-a", IC(), "-w", "-s", e],
        { encoding: "utf-8", timeout: l, windowsHide: true },
        (t, i) => {
          let n = Boolean(t && "killed" in t && t.killed);
          o(n ? null : { stdout: t ? null : i?.trim() || null });
        },
      );
    } catch {
      o(null);
    }
  });
}
function PEn() {
  if (r || Co()) return;
  let e = B$(),
    o = e.generation;
  e.legacyApiKeyPrefetch = "pending";
  let t = a(u0(s5)).then((n) => {
      if (n) Uor(n.stdout, o, e);
    }),
    i = a(u0()).then((n) => {
      if (n && e.legacyApiKeyPrefetch === "pending") e.legacyApiKeyPrefetch = n;
    });
  r = Promise.all([t, i]).then(() => {});
}
async function CXe(e) {
  if (!r) return;
  await (e === void 0 ? r : jt(r, e));
}
function wqt() {
  let e = B$().legacyApiKeyPrefetch;
  return e === "pending" ? null : e;
}
function Tqt() {
  B$().legacyApiKeyPrefetch = null;
}
export { IEn, r0r, o0r, i0r, s0r, PEn, CXe, wqt, Tqt };
