// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _p } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { xh, Zw, dD, Iln, OS } from "/$bunfs/root/chunk-zze8764r.js";
import { he } from "/$bunfs/root/chunk-h605j25g.js";
async function Prt({ toolUseContext: e, forkContextMessages: t, mainThreadAgentDefinition: o }) {
  let { systemPrompt: s, userContext: r, systemContext: m } = Iln() ?? (await i(e, o));
  return { systemPrompt: s, userContext: r, systemContext: m, toolUseContext: e, forkContextMessages: t };
}
async function i(e, t) {
  let [o, s, r] = await Promise.all([
    e.renderedSystemPrompt ?? n(e, t),
    Zw(e.session, e.storageV5, e.credentials),
    xh(e.session, e.options.cacheBreakerPhrase),
  ]);
  return { systemPrompt: o, userContext: s, systemContext: r };
}
async function n(e, t) {
  let o = he(e),
    s = await OS(
      e.options.tools,
      _p({ permissionMode: o.mode, mainLoopModel: e.options.mainLoopModel }),
      Array.from(o.additionalWorkingDirectories.keys()),
    );
  return dD({
    mainThreadAgentDefinition: t,
    toolUseContext: e,
    customSystemPrompt: e.options.customSystemPrompt,
    defaultSystemPrompt: s,
    appendSystemPrompt: e.options.appendSystemPrompt,
  });
}
export { Prt };
