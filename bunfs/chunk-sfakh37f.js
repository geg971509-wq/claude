// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _h } from "/$bunfs/root/chunk-e7rq8w09.js";
import { v_ } from "/$bunfs/root/chunk-amem41jf.js";
import { pr } from "/$bunfs/root/chunk-82w4mtvq.js";
import { I8 } from "/$bunfs/root/chunk-hzjzggb3.js";
import { k_t } from "/$bunfs/root/chunk-zfcb9rh8.js";
class Ijn {
  reader = void 0;
  register(e) {
    this.reader = e;
  }
  read() {
    return this.reader?.() ?? false;
  }
}
var Pjn = new Ijn();
function pin(e) {
  Pjn.register(e);
}
function Vae() {
  if (_h("hipaa")) return false;
  if (I8()) return true;
  return v_() && pr() && Pjn.read();
}
function IAr(e) {
  if (!k_t.includes(e)) return true;
  return Vae();
}
export { Ijn, Pjn, pin, Vae, IAr };
