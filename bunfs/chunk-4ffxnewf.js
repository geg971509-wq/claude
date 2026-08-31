// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { O3 } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Oq } from "/$bunfs/root/chunk-vjwrew57.js";
import { Rlt } from "/$bunfs/root/chunk-2wxj9m3z.js";
import { T2 } from "/$bunfs/root/chunk-krety1hw.js";
import { wNn } from "/$bunfs/root/chunk-e7z75y3n.js";
function Vj(r) {
  if (!O3()) return;
  let o = wNn();
  if (Oq({ type: "detach-request", msg: o, broadcast: r?.broadcast })) {
    Rlt();
    return;
  }
  process.stdout.write(T2(o));
}
export { Vj };
