// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { N4e, _l } from "/$bunfs/root/chunk-zze8764r.js";
import { na } from "/$bunfs/root/chunk-0g6cj4h1.js";
import { Us } from "/$bunfs/root/chunk-v7yhn7cf.js";
import { zE } from "/$bunfs/root/chunk-x06p1jhb.js";
import { qge } from "/$bunfs/root/chunk-c0t94ajr.js";
import { Pse } from "/$bunfs/root/chunk-8t7n4wt5.js";
function mdr(s, e = s) {
  let r = zE(s),
    n = zE(e);
  return _l(
    e === s
      ? `The user named this session "${r}". This may indicate the session's focus or intent.`
      : `The user asked to name this session "${n}"; another live session on this machine already holds that name, so this session is "${r}". The requested name may indicate the session's focus or intent.`,
  );
}
function QYt(s, e) {
  return `Another live session on this machine goes by "${Us(s)}", so this session is now "${Us(e)}". Use /rename to pick a different name.`;
}
async function IHt(s, e, r) {
  if (na()) return { message: "Cannot rename: This session is a teammate. Teammate names are set by the team leader." };
  let n = !s || s.trim() === "",
    a;
  if (n) {
    let i = await qge(e.messages, e.abortController.signal, { preferFork: true, credentials: e.credentials });
    if (!i) return { message: "Could not generate a name: no conversation context yet. Usage: /rename <name>" };
    a = i;
  } else a = s.trim();
  let t = await N4e(a, "user", e.storageV5, r && !n, true, e.credentials);
  if (t === null)
    return {
      message: n
        ? "Could not generate a name: no conversation context yet. Usage: /rename <name>"
        : "That name is empty once invisible characters are removed. Usage: /rename <name>",
    };
  let o = t.name;
  e.setAppState((i) => Pse(i, { name: o }));
  let m = Us(a),
    d =
      t.outcome === "yielded"
        ? `Session renamed to: ${o} ("${m}" is held by another live session on this machine)`
        : t.outcome === "superseded"
          ? `Session is named: ${o} (a newer rename landed first)`
          : `Session renamed to: ${o}`;
  return {
    message: t.registryUpdated
      ? d
      : `${d}. Other sessions may still show the old name: the session registry could not be updated (run with --debug for the cause)`,
    requestedName: t.outcome === "yielded" ? m : o,
    newName: o,
    isGenerated: n,
  };
}
async function ZTr(s, e, r) {
  let { message: n, newName: a, requestedName: t, isGenerated: o } = await IHt(r, e, true);
  return s(n, { display: "system", metaMessages: a && !o ? [mdr(a, t)] : void 0 }), null;
}
export { mdr, QYt, IHt, ZTr };
