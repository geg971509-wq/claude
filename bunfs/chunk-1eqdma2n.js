// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { K, Ty, Se } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Ht } from "/$bunfs/root/chunk-ypdw393e.js";
import { an } from "/$bunfs/root/chunk-c47snwm2.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { b, V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { Wu } from "/$bunfs/root/chunk-f5hrzy3k.js";
import { Bk } from "/$bunfs/root/chunk-c6k0ecxv.js";
import { Nfn, M8n } from "/$bunfs/root/chunk-f77e8yef.js";
import { ec, Ao } from "/$bunfs/root/chunk-czmxr2ps.js";
import { T } from "/$bunfs/root/chunk-ma6kk3k0.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { dirname as w, join as f } from "path";
var x = /^k[0-9a-z]{8}$/,
  d = 256,
  g = /^(?:[^\p{Cc}\p{Cf}]|[\u200c\u200d])+$/u,
  M = m(() =>
    T.object({
      taskId: T.string().regex(x),
      serverName: T.string().min(1).max(d).regex(g),
      toolName: T.string().min(1).max(d).regex(g),
      mcpTaskId: T.string().min(1).regex(g),
      pollIntervalMs: T.number().optional(),
      spawnedAt: T.number(),
      toolUseId: T.string()
        .min(1)
        .max(d)
        .regex(/^[\x20-\x7e]+$/)
        .optional(),
      protocol: T.string()
        .min(1)
        .max(d)
        .regex(/^[\x20-\x7e]+$/)
        .optional(),
      ttlExpiresAt: T.number().optional(),
      transportFingerprint: T.string().max(8192).optional(),
    })
      .passthrough()
      .superRefine((t, e) => {
        if (t.protocol === "sep2663" && (t.mcpTaskId.length > Nfn || !M8n.test(t.mcpTaskId)))
          e.addIssue({
            code: T.ZodIssueCode.custom,
            path: ["mcpTaskId"],
            message: "sep2663 task id exceeds the wire bound",
          });
      }),
  );
function PZ() {
  return Ty() ?? Wu(Se());
}
function y(t = K(), e = PZ()) {
  return f(e, t, "mcp-tasks");
}
function S(t, e = K(), r) {
  return f(y(e, r), `mcp-task-${t}.meta.json`);
}
function k(t = PZ()) {
  return Bk(t);
}
function h(t, e, r = K()) {
  return Te.sidecar(t, r, ["mcp-tasks", `mcp-task-${e}.meta.json`]);
}
async function Dst(t, e, r) {
  let o = O() && r !== void 0 ? k() : void 0,
    c = K(),
    s = S(t, c);
  if ((await an().mkdir(w(s)), r && o !== void 0)) {
    let a = await r.write(h(o, t, c), b(e), { publishDiscipline: "inPlace" });
    if (!a.ok) throw (n(`writeMcpTaskMetadata: ${a.error.code}`), Error("mcp task metadata write failed"));
    return;
  }
  await an().write(s, b(e));
}
async function tG(t, e, r, o) {
  let c = O() && e !== void 0 ? k(o) : void 0;
  if (e && c !== void 0) {
    let a = await e.delete(h(c, t, r));
    if (!a.ok) throw (n(`deleteMcpTaskMetadata: ${a.error.code}`), Error("mcp task metadata delete failed"));
    return;
  }
  let s = S(t, r, o);
  try {
    await an().delete(s);
  } catch (a) {
    if (Ht(a)) return;
    throw a;
  }
}
async function Ost(t) {
  let e = O() && t !== void 0 ? k() : void 0;
  if (t && e !== void 0) return I(t, e);
  let r = y(),
    o;
  try {
    o = await an().list(r);
  } catch (s) {
    if (Ht(s)) return [];
    throw s;
  }
  let c = [];
  for (let s of o) {
    if (!s.endsWith(".meta.json")) continue;
    try {
      let a = await an().read(f(r, s)),
        i = M().safeParse(V(a));
      if (!i.success) {
        n(`listMcpTaskMetadata: skipping ${s}: ${String(i.error)}`);
        continue;
      }
      c.push(i.data);
    } catch (a) {
      n(`listMcpTaskMetadata: skipping ${s}: ${String(a)}`);
    }
  }
  return c;
}
async function I(t, e) {
  let r = { namespace: "sidecar", projectKey: e, sessionId: K(), relPath: ["mcp-tasks"] },
    o = [],
    c = await Ao(
      (a) => t.listEntries(r, { cursor: a, skipKeyStats: !0, skipScopeStats: !0 }),
      (a) => {
        for (let i of a) {
          if (i.kind !== "key" || i.key.namespace !== "sidecar") continue;
          if ((i.key.relPath.at(-1) ?? "").endsWith(".meta.json")) o.push(i.key);
        }
      },
    );
  switch (c.status) {
    case "done":
      break;
    case "error":
      throw (n(`listMcpTaskMetadata: ${c.error.code}`), Error("mcp task metadata list failed"));
    case "capped":
      throw (
        (n(`listMcpTaskMetadata: list exceeded ${ec} pages`), Error("mcp task metadata list exceeded the page cap"))
      );
  }
  let s = [];
  for (let a of o) {
    let i = a.relPath.at(-1) ?? "",
      u = await t.read([a]);
    if (!u.ok) {
      n(`listMcpTaskMetadata: skipping ${i}: ${u.error.code}`);
      continue;
    }
    let l = u.value.items[0];
    if (!l.found) continue;
    try {
      let p = M().safeParse(V(Buffer.from(l.value).toString("utf8")));
      if (!p.success) {
        n(`listMcpTaskMetadata: skipping ${i}: ${String(p.error)}`);
        continue;
      }
      s.push(p.data);
    } catch (p) {
      n(`listMcpTaskMetadata: skipping ${i}: ${String(p)}`);
    }
  }
  return s;
}
export { PZ, Dst, tG, Ost };
