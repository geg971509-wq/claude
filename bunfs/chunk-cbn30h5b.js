// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { mi, GC } from "/$bunfs/root/chunk-f9h0bg01.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { nAn, zY, KNe, BT } from "/$bunfs/root/chunk-6k63g5t6.js";
import { qg, Yl, cAe } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Ne, jo } from "/$bunfs/root/chunk-82w4mtvq.js";
function wV() {
  nAn();
}
function QD() {
  let r = KNe();
  if (r !== void 0) return r;
  if (BT()) return zY(true);
  if (Ne() === "gateway") {
    let e = GC(mi());
    return zY(e, e ? void 0 : "unpinned_gateway");
  }
  if (Ne() !== "firstParty") return zY(false, "third_party_provider");
  if (!jo()) return zY(false, "custom_base_url");
  let t = a.CLAUDE_CODE_ENTRYPOINT;
  if (t === "local-agent" || t === "remote_cowork" || t?.startsWith("claude-coworker"))
    return zY(false, "sandboxed_entrypoint");
  if (Yl() && cAe() === null) return zY(true);
  if (Yl() && (cAe() === "enterprise" || cAe() === "team")) return zY(true);
  try {
    let { key: e } = qg({ skipRetrievingKeyFromApiKeyHelper: true });
    if (e) return zY(true);
  } catch {}
  return zY(false, Yl() ? "unsupported_subscription" : "no_auth");
}
export { wV, QD };
