// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { zt } from "/$bunfs/root/chunk-qm65zb83.js";
import { Yt, qa, Tt, Ore } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { pr } from "/$bunfs/root/chunk-82w4mtvq.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { hostname as n } from "os";
function _H() {
  return;
}
function s3() {
  return;
}
function __() {
  let e = _H();
  if (e !== void 0) return e;
  if (!pr() || !Tt()) return;
  return Yt()?.accessToken;
}
async function uC(e) {
  if (!(O() && e !== void 0)) return __();
  let r = _H();
  if (r !== void 0) return r;
  if (!pr() || !(await Ore(e))) return;
  return (await qa(e))?.accessToken;
}
function Yue() {
  return s3() ?? zt().BASE_API_URL;
}
function Lne() {
  let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || n();
  return N_r(e) || "remote-control";
}
function N_r(e) {
  return e
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
export { _H, s3, __, uC, Yue, Lne, N_r };
