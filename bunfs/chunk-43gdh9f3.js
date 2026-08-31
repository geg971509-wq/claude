// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { K } from "/$bunfs/root/chunk-f9h0bg01.js";
import { cY, gEe, tre, hEe, _Ee } from "/$bunfs/root/chunk-xgfepdf4.js";
import { Tk } from "/$bunfs/root/chunk-308krgtb.js";
import { UW, Sv, n7 } from "/$bunfs/root/chunk-zze8764r.js";
import { zte } from "/$bunfs/root/chunk-btcxpqw5.js";
import { Kue } from "/$bunfs/root/chunk-rntp2fy5.js";
import { L0 } from "/$bunfs/root/chunk-9r67t977.js";
function SUe(o, s, t) {
  L0("conversation_reset"), Tk("conversation_reset"), Sv(UW), hEe(), tre(), cY(), _Ee(), gEe(), Kue();
  let e = K();
  for (let r of zte(o.sessionHooksRegistry, e)) o.sessionHooksRegistry.remove(e, "Stop", r);
  t(), n7(), o.applyMessageOp({ type: "replace-all", messages: s });
}
export { SUe };
