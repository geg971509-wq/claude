// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Me } from "/$bunfs/root/chunk-qq1mdtb5.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { sQe } from "/$bunfs/root/chunk-qk7r0t2g.js";
import { _m, fg } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { TNn } from "/$bunfs/root/chunk-wktm3bts.js";
import { Twt } from "/$bunfs/root/chunk-q3yd61z9.js";
import { openSync as o } from "fs";
import { ReadStream as d } from "tty";
class i {
  override = null;
  get() {
    if (this.override !== null) return this.override;
    if (process.stdin.isTTY) {
      this.override = void 0;
      return;
    }
    if (Me(false)) {
      this.override = void 0;
      return;
    }
    if (Twt() === "mcp") {
      this.override = void 0;
      return;
    }
    try {
      let t = o("/dev/tty", "r"),
        e = new d(t);
      return (
        sQe(e),
        e.on("error", (r) => {
          s("tengu_tty_stream_error", _m(r)), n(`/dev/tty stream error: ${r}`, { level: "debug" });
        }),
        (e.isTTY = true),
        (this.override = e),
        this.override
      );
    } catch (t) {
      n(`Could not open /dev/tty for stdin override: ${t}`, { level: "error" }), (this.override = void 0);
      return;
    }
  }
  reset() {
    this.override = null;
  }
}
var Fur = new i();
function Fw(t = false) {
  TNn();
  let e = Fur.get(),
    r = { exitOnCtrlC: t };
  if (e) r.stdin = e;
  return (r.isScreenReaderEnabled = fg()), r;
}
export { Fur, Fw };
