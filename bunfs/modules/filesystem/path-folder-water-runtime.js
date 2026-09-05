// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { hA, Cm, Wu, Al } from "/$bunfs/root/chunk-f5hrzy3k.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { Kn, PAt } from "/$bunfs/root/chunk-hyh5wcm1.js";
import { Nu } from "/$bunfs/root/chunk-jb2pzt3t.js";
import { join as i } from "path";
function Zq(n) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(n) ? n : hA(n);
}
async function Tst(n, t, e) {
  return i(Wu(await Al(n, Nu(e))), vDt(t));
}
async function Tae(n, t, e) {
  let r = await Al(n, Nu(e)),
    a = i(Wu(r), vDt(t)),
    o = e === void 0 ? void 0 : prn(Cm(r), t);
  return { path: a, v5: e === void 0 || o === void 0 ? void 0 : { backend: e, key: o } };
}
function prn(n, t) {
  let e = Te.dirSyncRecord(n, Zq(t));
  return Kn(e) === void 0 ? e : void 0;
}
function vDt(n) {
  return `${Zq(n)}${PAt}`;
}
export { Zq, Tst, Tae, prn, vDt };
