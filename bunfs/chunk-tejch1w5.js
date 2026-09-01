// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Ey, eme } from "/$bunfs/root/chunk-f9h0bg01.js";
import "/$bunfs/root/chunk-qq1mdtb5.js";
import "/$bunfs/root/chunk-tx16jn0x.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import "/$bunfs/root/chunk-56sxk8k2.js";
var m = async (t, o) => {
  let e = !Ey();
  return (
    eme(e),
    o.sessionState?.notifyInternalMetadataChanged({ memory_toggled_off: e ? true : null }),
    s("tengu_memory_toggled", { toggled_off: e }),
    {
      type: "text",
      value: e
        ? `Memory paused for this session \xB7 this conversation will not write or read new memories, and previously-loaded memory content should not be referenced.

Run /pause-memory again to resume.`
        : "Memory resumed \xB7 memory content may be referenced and new memories can be saved.",
    }
  );
};
export { m as call };
