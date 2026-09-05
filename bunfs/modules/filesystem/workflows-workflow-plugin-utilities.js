// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { $o } from "/$bunfs/root/chunk-ypdw393e.js";
import { O5, le, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { WF, To } from "/$bunfs/root/chunk-1v3848mh.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { _o } from "/$bunfs/root/chunk-0spqrdaj.js";
import { ho } from "/$bunfs/root/chunk-37pvmyqb.js";
import { Tf, OUn } from "/$bunfs/root/chunk-k2an0hy6.js";
import { jh, Jt, yyt } from "/$bunfs/root/chunk-5n1tbe50.js";
import { TG, is } from "/$bunfs/root/chunk-zze8764r.js";
import { eP } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { dm } from "/$bunfs/root/chunk-2n1hsggr.js";
import { wje } from "/$bunfs/root/chunk-8swr939y.js";
import { ay } from "/$bunfs/root/chunk-3fwkz19s.js";
import { ec, Ao } from "/$bunfs/root/chunk-czmxr2ps.js";
var PUn = "CLAUDE_REMOTE_WORKFLOW_SCRIPT",
  otn = "CLAUDE_REMOTE_WORKFLOW_ARGS",
  DUn = "CLAUDE_WORKFLOW_NAME_ONLY";
function Hhe() {
  return a.CLAUDE_WORKFLOW_NAME_ONLY;
}
import { join as F } from "path";
async function _(o, s, t, i, m) {
  let c = le(),
    e;
  try {
    e = await c.readdir(o);
  } catch {
    return [];
  }
  return (
    await Promise.all(
      e.map(async (l) => {
        if (!(l.isFile() || l.isSymbolicLink())) return null;
        if (!l.name.endsWith(".js")) return null;
        return v(F(o, l.name), s, t, i, m);
      }),
    )
  ).filter((l) => l !== null);
}
async function v(o, s, t, i, m) {
  let c = le();
  if (O5(c, o, m)) return null;
  try {
    let e = await eP(c, o, dm);
    if (e === null)
      return (
        n(`Plugin workflow ${o}: not a regular file or exceeds ${dm} bytes \u2014 skipping`, { level: "warn" }), null
      );
    let r = Tf(e, { validateBody: false });
    if ("error" in r)
      return n(`Plugin workflow ${o} has invalid meta: ${r.error} \u2014 skipping`, { level: "warn" }), null;
    let l = `${s}:${r.meta.name}`;
    return {
      source: "plugin",
      plugin: t,
      pluginManifest: i,
      name: l,
      description: r.meta.description,
      whenToUse: r.meta.whenToUse,
      phases: r.meta.phases,
      script: e,
      filePath: o,
    };
  } catch (e) {
    return n(`Failed to load workflow from ${o}: ${e}`, { level: "error" }), null;
  }
}
function P(o) {
  let s = Jt();
  return (
    (s.workflows ??= (async () => {
      let { enabled: t, errors: i } = await is(o),
        m = [];
      if (i.length > 0) n(`Plugin loading errors: ${i.map((e) => jh(e)).join(", ")}`);
      let c = null;
      for (let e of t) {
        let r = new Set(),
          l = m.length;
        if (e.workflowsPath)
          try {
            let f = await _(e.workflowsPath, e.name, e.source, e.manifest, r);
            if ((m.push(...f), f.length > 0)) n(`Loaded ${f.length} workflows from plugin ${e.name} default directory`);
          } catch (f) {
            (c = "plugin_load_workflows_dir_failed"),
              n(`Failed to load workflows from plugin ${e.name} default directory: ${f}`, { level: "error" });
          }
        if (e.workflowsPaths)
          for (let f of e.workflowsPaths)
            try {
              let d = await le().stat(f);
              if (d.isDirectory()) {
                let w = await _(f, e.name, e.source, e.manifest, r);
                if ((m.push(...w), w.length > 0))
                  n(`Loaded ${w.length} workflows from plugin ${e.name} custom path: ${f}`);
              } else if (d.isFile() && f.endsWith(".js")) {
                let w = await v(f, e.name, e.source, e.manifest, r);
                if (w) m.push(w), n(`Loaded workflow from plugin ${e.name} custom file: ${f}`);
              }
            } catch (u) {
              (c = "plugin_load_workflows_path_failed"),
                n(`Failed to load workflows from plugin ${e.name} custom path ${f}: ${u}`, { level: "error" });
            }
        if (e.serverPluginId !== void 0) for (let f of m.slice(l)) f.serverPluginId = e.serverPluginId;
      }
      if ((n(`Total plugin workflows loaded: ${m.length}`), c)) p("plugin_load_workflows", c);
      else y("plugin_load_workflows");
      return m;
    })()),
    s.workflows
  );
}
import { join as h } from "path";
function W(o, s) {
  if (!s || OUn(o.script)) return true;
  return (
    n(
      `Workflow ${o.filePath ?? o.name} (${o.source}) would override ${o.name} but does not parse \u2014 keeping the ${s.source} copy`,
      { level: "warn" },
    ),
    false
  );
}
function S(o) {
  let s = new Map();
  for (let t of o) {
    if (!W(t, s.get(t.name))) continue;
    s.set(t.name, t);
  }
  return [...s.values()];
}
import { join as E } from "path";
function W0e() {
  return E(be(), "workflows");
}
async function T(o, s) {
  try {
    return await TG("workflows", o);
  } catch (t) {
    if ($o(t))
      return n(`loadWorkflowsDir: project-dir walk failed: ${t.code}`, { level: "error" }), (s.walkFailed = true), [];
    throw t;
  }
}
async function D(o, s, t, i) {
  if (i !== void 0 && s === "userSettings") return M(i, o, t);
  let m = le(),
    c;
  try {
    c = await m.readdir(o);
  } catch {
    return [];
  }
  return (
    await Promise.all(
      c.map(async (r) => {
        if (!(r.isFile() || r.isSymbolicLink())) return null;
        if (!r.name.endsWith(".js")) {
          if (/\.(mjs|cjs|ts)$/.test(r.name)) t.nearMissExt++;
          return null;
        }
        let l = h(o, r.name),
          f;
        try {
          f = await m.readFileBytes(l, dm + 1);
        } catch {
          return t.skippedUnreadable++, null;
        }
        if (f.byteLength > dm)
          return n(`Workflow ${l} exceeds ${dm} bytes \u2014 skipping`, { level: "warn" }), t.skippedOversize++, null;
        let u = f.toString("utf-8"),
          d = Tf(u, { validateBody: false });
        if ("error" in d)
          return (
            n(`Workflow ${l} has invalid meta: ${d.error} \u2014 skipping`, { level: "warn" }),
            t.skippedInvalidMeta++,
            null
          );
        return {
          source: s,
          name: d.meta.name,
          description: d.meta.description,
          whenToUse: d.meta.whenToUse,
          phases: d.meta.phases,
          script: u,
          filePath: l,
        };
      }),
    )
  ).filter((r) => r !== null);
}
async function M(o, s, t) {
  let i = [];
  switch (
    (
      await Ao(
        (e) => o.listEntries({ namespace: "userConfigDir", dir: "workflows" }, e === void 0 ? void 0 : { cursor: e }),
        (e) => {
          for (let r of e) {
            if (r.kind !== "key" || r.key.namespace !== "userConfigDir") continue;
            let l = r.key.relPath.at(-1);
            if (l === void 0 || r.key.relPath.length !== 1) continue;
            if (!l.endsWith(".js")) {
              if (/\.(mjs|cjs|ts)$/.test(l)) t.nearMissExt++;
              continue;
            }
            i.push({ key: r.key, name: l });
          }
        },
      )
    ).status
  ) {
    case "done":
      break;
    case "error":
      return [];
    case "capped":
      n(`User workflows listing of ${s} truncated at ${ec} pages \u2014 loading the ${i.length} workflow files seen`, {
        level: "warn",
      }),
        (t.userListingTruncated = true);
      break;
  }
  return (
    await Promise.all(
      i.map(async ({ key: e, name: r }) => {
        let l = await o.read([{ key: e, offset: 0, length: dm + 1 }]);
        if (!l.ok)
          return (
            n(`Workflow ${h(s, r)} could not be read through the storage backend (${l.error.code}) \u2014 skipping`, {
              level: "warn",
            }),
            t.skippedUnreadable++,
            null
          );
        let f = l.value.items[0];
        if (f === void 0 || !f.found) return t.skippedUnreadable++, null;
        let u = h(s, r);
        if (f.value.byteLength > dm)
          return n(`Workflow ${u} exceeds ${dm} bytes \u2014 skipping`, { level: "warn" }), t.skippedOversize++, null;
        let d = Buffer.from(f.value).toString("utf-8"),
          w = Tf(d, { validateBody: false });
        if ("error" in w)
          return (
            n(`Workflow ${u} has invalid meta: ${w.error} \u2014 skipping`, { level: "warn" }),
            t.skippedInvalidMeta++,
            null
          );
        return {
          source: "userSettings",
          name: w.meta.name,
          description: w.meta.description,
          whenToUse: w.meta.whenToUse,
          phases: w.meta.phases,
          script: d,
          filePath: u,
        };
      }),
    )
  ).filter((e) => e !== null);
}
async function b(o, s) {
  let t = W0e(),
    i = {
      skippedInvalidMeta: 0,
      skippedOversize: 0,
      skippedUnreadable: 0,
      nearMissExt: 0,
      walkFailed: false,
      userListingTruncated: false,
    },
    m = await T(o, i),
    [c, ...e] = await Promise.all([
      _o("userSettings") ? D(t, "userSettings", i, s) : Promise.resolve([]),
      ...(_o("projectSettings") ? m.map((u) => D(u, "projectSettings", i)) : []),
    ]),
    r = new Map();
  for (let u of c) {
    if (!W(u, r.get(u.name))) continue;
    r.set(u.name, u);
  }
  for (let u = e.length - 1; u >= 0; u--)
    for (let d of e[u]) {
      if (!W(d, r.get(d.name))) continue;
      r.set(d.name, d);
    }
  let l = i.walkFailed && _o("projectSettings"),
    f = i.skippedInvalidMeta + i.skippedOversize + i.skippedUnreadable;
  if (l || i.userListingTruncated || f > 0 || i.nearMissExt > 0)
    g(
      "workflow_discover",
      l
        ? "project_dir_walk_failed"
        : i.userListingTruncated
          ? "user_listing_truncated"
          : i.skippedInvalidMeta > 0
            ? "invalid_meta"
            : i.skippedOversize > 0
              ? "oversize"
              : i.skippedUnreadable > 0
                ? "unreadable"
                : "near_miss_extension",
      {
        found: r.size,
        skipped_invalid_meta: i.skippedInvalidMeta,
        skipped_oversize: i.skippedOversize,
        skipped_unreadable: i.skippedUnreadable,
        near_miss_ext: i.nearMissExt,
        ...(i.userListingTruncated && { user_listing_truncated: true }),
      },
    );
  else y("workflow_discover", { found: r.size });
  return [...r.values()].sort((u, d) => u.name.localeCompare(d.name));
}
function pZ(o, s) {
  return WF(To().allWorkflows, `${ay()}:${Hhe()}:${o}`, () => j(o, s));
}
async function j(o, s) {
  if (ho("workflows") || Hhe()) return [...wje()];
  let [t, i] = await Promise.all([b(o, s), P(s)]),
    m = S(i),
    c = wje(),
    e = new Map(c.map((k) => [k.name, k])),
    r = O(m, e);
  for (let k of r) e.set(k.name, k);
  let l = O(t, e),
    f = new Set(l.map((k) => k.name)),
    u = r.filter((k) => !f.has(k.name)),
    d = new Set([...f, ...u.map((k) => k.name)]);
  return [...c.filter((k) => !d.has(k.name)), ...u, ...l];
}
function O(o, s) {
  return o.filter((t) => W(t, s.get(t.name)));
}
async function bje(o, s, t) {
  return (await pZ(s, t)).find((m) => m.name === o);
}
function JIt() {
  To().allWorkflows.clear(), yyt();
}
export { PUn, otn, DUn, Hhe, W0e, pZ, bje, JIt };
