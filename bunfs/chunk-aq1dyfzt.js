// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { st } from "/$bunfs/root/chunk-qcx34e4j.js";
import { zt } from "/$bunfs/root/chunk-qm65zb83.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { b } from "/$bunfs/root/chunk-fv016jr6.js";
import { NO } from "/$bunfs/root/chunk-ntyhd04p.js";
import { Yt, qa, Cs } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Rl } from "/$bunfs/root/chunk-pv56178c.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
var p =
  " \u2014 run `claude login` to refresh your session, or verify ANTHROPIC_BASE_URL matches your login environment";
class i extends Error {
  status;
  constructor(t, e) {
    super(e);
    (this.name = "SelfHostedRunnerApiError"), (this.status = t);
  }
}
var Zse = 8080;
function c() {
  let { getAPIProvider: t } = import.meta.require("/$bunfs/root/chunk-efkq16zj.js");
  if (t() !== "firstParty")
    throw new i(403, "Self-hosted runner management is only available on the first-party Anthropic API provider.");
}
function eae() {
  let t = a.ANTHROPIC_BASE_URL?.replace(/\/+$/, "");
  if (t) return t;
  return zt().BASE_API_URL;
}
function EUn() {
  return zt().CLAUDE_AI_ORIGIN;
}
async function m(t) {
  c(), await Cs({ credentials: t }).catch(() => {});
  let e = O() && t !== void 0 ? (await qa(t))?.accessToken : Yt()?.accessToken;
  if (!e)
    throw new i(
      401,
      "Not logged in. Environment-management endpoints require the operator OAuth session \u2014 run `claude login`, then re-invoke this tool. (`ANTHROPIC_API_KEY` will not work for these endpoints.)",
    );
  return e;
}
function cZ(t) {
  return { ui: t };
}
async function uZ(t, e, o, s, l) {
  c();
  let d = await m(l),
    n = await st
      .request({
        method: t,
        url: `${eae()}${e}`,
        data: o,
        headers: {
          Authorization: `Bearer ${d}`,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        timeout: 20000,
        signal: s,
        validateStatus: (r) => r < 500,
      })
      .catch((r) => {
        if (st.isAxiosError(r) && !st.isCancel(r) && r.response === void 0) throw new i(0, `${t} ${e}: ${r.message}`);
        throw r;
      });
  if (n.status >= 400) {
    let r = n.data?.error?.message ?? b(n.data),
      u = `HTTP ${n.status} ${t} ${e}: ${r}`;
    if ([401, 403, 404, 409, 429].includes(n.status)) {
      let f = n.status === 401 || n.status === 403 ? p : "";
      throw new i(n.status, u + f);
    }
    throw Error(u);
  }
  return n.data;
}
function bL(t, e) {
  return { tool_use_id: t, type: "tool_result", content: Rl(b(e)) };
}
function Tx(t) {
  let e = NO(t);
  if (e !== null) return e;
  return Object.entries(t)
    .filter(([, o]) => o !== void 0)
    .map(([o, s]) => `${o}=${typeof s === "string" ? s : b(s)}`)
    .join(" ");
}
export { Zse, eae, EUn, cZ, uZ, bL, Tx };
