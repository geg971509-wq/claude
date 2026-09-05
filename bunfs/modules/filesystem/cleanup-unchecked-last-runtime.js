// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Eh, zu } from "/$bunfs/root/chunk-f9h0bg01.js";
import { $o } from "/$bunfs/root/chunk-ypdw393e.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { Rln, sGn, gUt } from "/$bunfs/root/chunk-zze8764r.js";
import { Hxe } from "/$bunfs/root/chunk-7rcn0da5.js";
import { u_e, brn, wrn, Trn } from "/$bunfs/root/chunk-emq94d9x.js";
import { ZPn } from "/$bunfs/root/chunk-jfbqk9jm.js";
import { gOn } from "/$bunfs/root/chunk-s1p87x4q.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { stat as p, writeFile as m } from "fs/promises";
import { join as s } from "path";
var a = 86400000,
  $Kt = 600000,
  Ocr = 5000,
  Lcr = 3600000;
async function Mcr(t) {
  if (O() && t !== void 0) {
    let e = await t.statMeta(Te.state("last-cleanup"));
    return e.ok && Date.now() - e.value.mtimeMs < a;
  }
  try {
    let e = await p(s(be(), ".last-cleanup"));
    return Date.now() - e.mtimeMs < a;
  } catch {
    return false;
  }
}
async function UKt(t, e) {
  if (!t.backgroundHousekeeping.claim()) return;
  if ((Rln(t), sGn(t), gOn(e), zu())) ZPn(e), gUt(e), setInterval(gUt, Lcr, e).unref();
  let r = "sentinel-unchecked";
  async function c() {
    if (zu() && Eh() > Date.now() - 60000) {
      setTimeout(i, $Kt).unref();
      return;
    }
    if (r !== "done") {
      if (r === "sentinel-unchecked") {
        if (((r = "sweep-due"), await Mcr(e))) {
          setTimeout(i, $Kt).unref();
          return;
        }
      }
      if (((r = "done"), await Trn(e), O() && e !== void 0)) {
        await wrn(be(), t.backgroundHousekeeping), await brn(e);
        let o = await e.write(Te.state("last-cleanup"), new Date().toISOString(), { publishDiscipline: "inPlace" });
        if (!o.ok) n(`.last-cleanup write failed: ${o.error.code}`, { level: "error" });
      } else
        await m(s(be(), ".last-cleanup"), new Date().toISOString()).catch((o) =>
          $o(o) ? n(`.last-cleanup write failed: ${o.code} ${o.message}`, { level: "error" }) : h(o),
        );
    }
    if (zu() && Eh() > Date.now() - 60000) {
      setTimeout(i, $Kt).unref();
      return;
    }
    await Hxe();
  }
  function i() {
    return c().catch((o) => (u_e(o) ? n(`background housekeeping failed: ${o.message}`, { level: "error" }) : h(o)));
  }
  setTimeout(i, Ocr).unref();
}
export { $Kt, Ocr, Lcr, Mcr, UKt };
