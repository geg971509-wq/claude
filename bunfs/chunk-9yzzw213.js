// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { dCe } from "/$bunfs/root/chunk-z2bvp3sv.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { constants as t } from "fs";
function ea() {
  return t.O_RDONLY | GVe();
}
function GVe() {
  if (D() === "windows") return 0;
  return t.O_NOFOLLOW | t.O_NONBLOCK;
}
var X7n = ["aarch64-apple-darwin", "x86_64-apple-darwin", "aarch64-unknown-linux-musl", "x86_64-unknown-linux-musl"];
function o(r, e) {
  let n = e === "arm64" ? "aarch64" : e === "x64" ? "x86_64" : void 0;
  if (n === void 0) return;
  switch (r) {
    case "macos":
      return `${n}-apple-darwin`;
    case "linux":
    case "wsl":
      return `${n}-unknown-linux-musl`;
    case "windows":
    case "unknown":
      return;
  }
}
var Y7n = 268435456;
function J7n() {
  return o(D(), "arm64");
}
function zVe(r, e) {
  if (r.endsWith(`-${e}`)) {
    let n = r.slice(0, -(e.length + 1));
    return dCe.test(n) ? n : void 0;
  }
  if (r.endsWith(`-${e}.exe`)) {
    let n = r.slice(0, -(e.length + 5));
    return dCe.test(n) ? `${n}.exe` : void 0;
  }
  return;
}
export { ea, GVe, X7n, Y7n, J7n, zVe };
