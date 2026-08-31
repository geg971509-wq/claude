// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Txn, zC, QQe } from "/$bunfs/root/chunk-f9h0bg01.js";
import { cvn, P1e } from "/$bunfs/root/chunk-rgw52f13.js";
import { rvn } from "/$bunfs/root/chunk-s4smmnta.js";
import {
  SG,
  Qjn,
  jWn,
  usn,
  C9n,
  L3n,
  M3n,
  oSe,
  sln,
  qdt,
  Mqn,
  Nln,
  YG,
  wD,
  yun,
  aT,
} from "/$bunfs/root/chunk-zze8764r.js";
import { kue } from "/$bunfs/root/chunk-anwgkcw5.js";
import { Pq, WJt } from "/$bunfs/root/chunk-1ntcvp1a.js";
import { VUn } from "/$bunfs/root/chunk-q389k5tv.js";
function jJt(t, o = new Set(), i, r, m) {
  let a = o.size > 0;
  if ((jWn(t), P1e(t), kue.cache.clear?.(), WJt(Pq), aT(), M3n(o), QQe(null), !a)) sln.peek(t)?.clear();
  let s = Nln();
  if (s?.getTeleportCacheState().status === "active") s.revertTeleportCache("transcript_cleared");
  if (
    (YG(t, void 0, i, void 0, void 0, void 0, m),
    zC("clear"),
    wD(),
    yun(t, "session_start"),
    SG.of(t).reset(),
    usn.of(t).clear(),
    oSe.of(t).reset(),
    i?.((e) => {
      if (
        e.storedImagePaths.size === 0 &&
        e.imageDescriptions.size === 0 &&
        Object.keys(e.displayedMessageContent).length === 0
      )
        return e;
      return { ...e, storedImagePaths: new Map(), imageDescriptions: new Map(), displayedMessageContent: {} };
    }),
    Qjn(),
    !a)
  )
    VUn();
  if ((rvn(), !a)) L3n();
  if ((Txn(o), cvn(), Mqn(), qdt().catch(() => {}), C9n(t), r))
    import("/$bunfs/root/chunk-g3d682nw.js").then(({ WebFetchCache: e }) => r.get(e).clear()),
      import("/$bunfs/root/chunk-dw1pz3fp.js").then(({ ToolSearchDescriptionCache: e }) => r.get(e).clear());
  import("/$bunfs/root/chunk-vms5yd4s.js").then(({ clearAgentDefinitionsCache: e }) => e());
}
export { jJt };
