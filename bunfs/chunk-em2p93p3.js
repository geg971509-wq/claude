// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { Yk } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { $le, T7, xe } from "/$bunfs/root/chunk-zze8764r.js";
import { Xs } from "/$bunfs/root/chunk-3qvtfvqg.js";
function iPt(e, a, s) {
  if (s.get(e)?.status !== "running") return;
  s.updateTranscript(e, (t) => ({ ...t, messages: $le(t.messages, a) }));
}
function xje(e, a, s, t) {
  let m = s.get(e);
  if (!m || Xs(m.status)) {
    n(`Dropping message for teammate task ${e}: task status is "${m?.status}"`);
    return;
  }
  s.update(e, (r) => ({ ...r, pendingUserMessages: [...r.pendingUserMessages, { text: a, origin: t }] })),
    s.updateTranscript(e, (r) => ({ ...r, messages: $le(r.messages, xe({ content: a, origin: t })) }));
}
function mtn(e, a, s) {
  let t = T7(Yk(a, s), e);
  if (t?.status === "running") t.retryWake?.emit();
}
export { iPt, xje, mtn };
