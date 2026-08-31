// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { tf, fH } from "/$bunfs/root/chunk-fd2h00ye.js";
import { gon } from "/$bunfs/root/chunk-00kgrjy9.js";
import { Yat, $Lt } from "/$bunfs/root/chunk-t0c3yfsd.js";
import { n0 } from "/$bunfs/root/chunk-6mgs10s2.js";
import { format as t } from "util";
class s {
  silly(e, ...r) {
    n(t(e, ...r), { level: "debug" });
  }
  debug(e, ...r) {
    n(t(e, ...r), { level: "debug" });
  }
  info(e, ...r) {
    n(t(e, ...r), { level: "info" });
  }
  warn(e, ...r) {
    n(t(e, ...r), { level: "warn" });
  }
  error(e, ...r) {
    n(t(e, ...r), { level: "error" });
  }
}
function Xat() {
  let e = tf();
  if (e.hostAdapter) return e.hostAdapter;
  return (
    (e.hostAdapter = {
      serverName: n0,
      logger: new s(),
      executor: gon({
        getMouseAnimationEnabled: () => $Lt().mouseAnimation,
        getHideBeforeActionEnabled: () => $Lt().hideBeforeAction,
      }),
      ensureOsPermissions: async () => {
        let r = fH(),
          o = r.tcc.checkAccessibility(),
          i = r.tcc.checkScreenRecording();
        return o && i ? { granted: !0 } : { granted: !1, accessibility: o, screenRecording: i };
      },
      isDisabled: () => !Yat(),
      getSubGates: $Lt,
      getAutoUnhideEnabled: () => !0,
      cropRawPatch: () => null,
    }),
    e.hostAdapter
  );
}
export { Xat };
