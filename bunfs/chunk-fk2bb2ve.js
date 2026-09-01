// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { EYe } from "/$bunfs/root/chunk-dzmwvtn9.js";
import { Li } from "/$bunfs/root/chunk-z5yhadgs.js";
import { S, ue } from "/$bunfs/root/chunk-yz031c9r.js";
var d = S(function (n) {
  Object.defineProperty(n, "__esModule", { value: true });
  n.getMachineId = void 0;
  var i = ue("process"),
    s = EYe(),
    a = Li();
  async function o() {
    let e = "%windir%\\System32\\REG.exe";
    if (i.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in i.env) e = "%windir%\\sysnative\\cmd.exe /c " + e;
    try {
      let r = (
        await (0, s.execAsync)(`${e} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`)
      ).stdout.split("REG_SZ");
      if (r.length === 2) return r[1].trim();
    } catch (t) {
      a.diag.debug(`error reading machine id: ${t}`);
    }
    return;
  }
  n.getMachineId = o;
});
export default d();
