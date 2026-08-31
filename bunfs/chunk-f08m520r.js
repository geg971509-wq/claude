// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { we } from "/$bunfs/root/chunk-ypdw393e.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { aC } from "/$bunfs/root/chunk-vq9g7y26.js";
import { RVn } from "/$bunfs/root/chunk-4c3hecm4.js";
function h8t() {
  let t,
    o = !1,
    r = () => {
      if (aC())
        (o = !0),
          import("/$bunfs/root/chunk-8at77yzn.js")
            .then(({ createRemoteToolHostsRuntime: e }) => {
              t = e();
            })
            .catch((e) => {
              h(we(e)), (o = !1);
            });
    };
  if (
    (RVn({
      get remote() {
        if (!o) r();
        return t;
      },
    }),
    aC())
  )
    r();
}
export { h8t };
