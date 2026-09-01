// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { ZMe, e4t, tNe, C_, I, _Ne } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { yFe, QRn } from "/$bunfs/root/chunk-r53tkxrh.js";
var l = "tengu_log_datadog_events";
function q6n() {
  if (ZMe("datadog")) return false;
  try {
    return I(l, false);
  } catch {
    return false;
  }
}
var i = false;
function s(t, o) {
  if (i) {
    n(
      `logEvent reentered while collecting metadata \u2014 dropped ${t}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,
      { level: "error" },
    );
    return;
  }
  i = true;
  try {
    let e = e4t(t);
    if (e === 0) return;
    let a = e !== null ? { ...o, sample_rate: e } : o;
    if (q6n()) _Ne(t, yFe(a));
    tNe(t, a);
  } finally {
    i = false;
  }
}
async function d(t, o) {
  let e = e4t(t);
  if (e === 0) return;
  let a = e !== null ? { ...o, sample_rate: e } : o,
    r = [];
  if (q6n()) r.push(_Ne(t, yFe(a)));
  r.push(C_(t, a)), await Promise.all(r);
}
function M1() {
  QRn({ logEvent: s, logEventAsync: d });
}
export { q6n, M1 };
