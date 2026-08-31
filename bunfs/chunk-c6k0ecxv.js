// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G, K, Ty, Se } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Zt } from "/$bunfs/root/chunk-jpf4kat5.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { Cm } from "/$bunfs/root/chunk-f5hrzy3k.js";
import { Ao } from "/$bunfs/root/chunk-czmxr2ps.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { readdir as d } from "fs/promises";
import { basename as p, dirname as u, join as o } from "path";
function Nl() {
  return o(be(), "projects");
}
function Bk(t) {
  return u(t) === Nl() ? p(t) : void 0;
}
class c {
  projectDirCache = new Map();
  agentTranscriptSubdirs = new Map();
  cacheProjectDir(t, e) {
    this.projectDirCache.set(t, e);
  }
  clearProjectDirCache() {
    this.projectDirCache.clear();
  }
  setAgentTranscriptSubdir(t, e) {
    this.agentTranscriptSubdirs.set(t, e);
  }
  clearAgentTranscriptSubdir(t) {
    this.agentTranscriptSubdirs.delete(t);
  }
}
var g = new J(() => new c());
function bl(t) {
  let e = g.of(G().host),
    n = e.projectDirCache.get(t);
  if (n !== void 0) return n;
  let r = o(Nl(), Cm(t));
  return e.cacheProjectDir(t, r), r;
}
function Hl() {
  let t = Ty() ?? bl(Se());
  return o(t, `${K()}.jsonl`);
}
function wQn(t, e) {
  g.of(G().host).setAgentTranscriptSubdir(t, e);
}
function s_n(t) {
  g.of(G().host).clearAgentTranscriptSubdir(t);
}
function Eyt() {
  let t = Ty() ?? bl(Se());
  return o(t, K(), "subagents");
}
function mp(t) {
  let e = g.of(G().host).agentTranscriptSubdirs.get(t),
    n = e ? o(Eyt(), e) : Eyt();
  return o(n, `agent-${t}.jsonl`);
}
async function Ayt(t) {
  let e = Ty() ?? bl(Se()),
    n = Bk(e);
  if (O() && t !== void 0 && n !== void 0) return m(t, n, K());
  let r;
  try {
    r = await d(Eyt(), { withFileTypes: !0 });
  } catch {
    return [];
  }
  return r
    .filter((s) => s.isFile() && s.name.startsWith("agent-") && s.name.endsWith(".jsonl"))
    .map((s) => s.name.slice(6, -6));
}
async function m(t, e, n) {
  let r = [];
  try {
    return (
      await Ao(
        (a) =>
          t.listEntries(
            { namespace: "transcript", projectKey: e, sessionId: n },
            { skipKeyStats: !0, skipScopeStats: !0, ...(a !== void 0 && { cursor: a }) },
          ),
        (a) => {
          for (let i of a)
            if (
              i.kind === "key" &&
              i.key.namespace === "transcript" &&
              i.key.agentId !== void 0 &&
              i.key.agentRelPath === void 0 &&
              Zt(i.key.agentId)
            )
              r.push(i.key.agentId);
        },
      )
    ).status === "done"
      ? r
      : [];
  } catch {
    return [];
  }
}
function TQn(t, e) {
  let n = {};
  for (let r of Object.values(t)) {
    let s = e[r.id]?.messages;
    if (r.type === "in_process_teammate" && r.identity?.agentId && s && s.length > 0) n[r.identity.agentId] = s;
  }
  return n;
}
export { Nl, Bk, bl, Hl, wQn, s_n, Eyt, mp, Ayt, TQn };
