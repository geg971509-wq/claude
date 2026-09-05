// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { K } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { we, $o } from "/$bunfs/root/chunk-ypdw393e.js";
import { b, le, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { jar } from "/$bunfs/root/chunk-q14dgq5g.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { writeFileSync as k } from "fs";
import { readdir as U, readFile as R, writeFile as P } from "fs/promises";
import { join as w } from "path";
import { getHeapSpaceStatistics as C, getHeapStatistics as M } from "v8";
async function pdr(u, o = 0) {
  let t = process.memoryUsage(),
    e = M(),
    i = process.resourceUsage(),
    m = process.uptime(),
    l;
  try {
    l = C();
  } catch {}
  let d = process._getActiveHandles().length,
    f = process._getActiveRequests().length,
    r;
  try {
    r = (await U("/proc/self/fd")).length;
  } catch {}
  let c;
  try {
    c = await R("/proc/self/smaps_rollup", "utf8");
  } catch {}
  let g, _, v;
  try {
    let { heapStats: p } = await import("bun:jsc"),
      S = p(true);
    (g = S.objectTypeCounts), (_ = S.protectedObjectTypeCounts), (v = S.mimalloc || void 0);
  } catch {}
  let x = t.rss - t.heapUsed,
    H = m > 0 ? t.rss / m : 0,
    y = (H * 3600) / 1048576,
    a = [];
  if (e.number_of_detached_contexts > 0)
    a.push(`${e.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
  if (d > 100) a.push(`${d} active handles - possible timer/socket leak`);
  if (x > t.heapUsed) a.push("Native memory > heap - leak may be in native addons (node-pty, sharp, etc.)");
  if (y > 100) a.push(`High memory growth rate: ${y.toFixed(1)} MB/hour`);
  if (r && r > 500) a.push(`${r} open file descriptors - possible file/socket leak`);
  return {
    timestamp: new Date().toISOString(),
    sessionId: K(),
    trigger: u,
    dumpNumber: o,
    uptimeSeconds: m,
    memoryUsage: {
      heapUsed: t.heapUsed,
      heapTotal: t.heapTotal,
      external: t.external,
      arrayBuffers: t.arrayBuffers,
      rss: t.rss,
    },
    memoryGrowthRate: { bytesPerSecond: H, mbPerHour: y },
    v8HeapStats: {
      heapSizeLimit: e.heap_size_limit,
      mallocedMemory: e.malloced_memory,
      peakMallocedMemory: e.peak_malloced_memory,
      detachedContexts: e.number_of_detached_contexts,
      nativeContexts: e.number_of_native_contexts,
    },
    v8HeapSpaces: l?.map((p) => ({
      name: p.space_name,
      size: p.space_size,
      used: p.space_used_size,
      available: p.space_available_size,
    })),
    resourceUsage: {
      maxRSS: i.maxRSS * (D() === "macos" ? 1 : 1024),
      userCPUTime: i.userCPUTime,
      systemCPUTime: i.systemCPUTime,
    },
    activeHandles: d,
    activeRequests: f,
    openFileDescriptors: r,
    analysis: {
      potentialLeaks: a,
      recommendation:
        a.length > 0
          ? `WARNING: ${a.length} potential leak indicator(s) found. See potentialLeaks array.`
          : "No obvious leak indicators. Check heap snapshot for retained objects.",
    },
    smapsRollup: c,
    objectTypeCounts: g,
    protectedObjectTypeCounts: _,
    mimalloc: v,
    platform: "darwin",
    nodeVersion: process.version,
    ccVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.252",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-08-31T16:02:57Z",
      GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
      HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "darwin",
    }.VERSION,
  };
}
async function zYt(u = "manual", o = 0) {
  try {
    let t = K(),
      e = await pdr(u, o),
      i = (g) => (g / 1024 / 1024 / 1024).toFixed(3);
    n(`[HeapDump] Memory state:
  heapUsed: ${i(e.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${i(e.memoryUsage.external)} GB (NOT in snapshot)
  rss: ${i(e.memoryUsage.rss)} GB (total process)
  ${e.analysis.recommendation}`);
    let m = await jar();
    await le().mkdir(m);
    let l = o > 0 ? `-dump${o}` : "",
      d = `${t}${l}.heapsnapshot`,
      f = `${t}${l}-diagnostics.json`,
      r = w(m, d),
      c = w(m, f);
    return (
      await P(c, b(e, null, 2), { mode: 384 }),
      n(`[HeapDump] Diagnostics written to ${c}`),
      await T(r),
      n(`[HeapDump] Heap dump written to ${r}`),
      s("tengu_heap_dump", { triggerManual: true, triggerAuto15GB: false, dumpNumber: o, success: true }),
      { success: true, heapPath: r, diagPath: c, diagnostics: e }
    );
  } catch (t) {
    let e = we(t);
    if ($o(e)) n(`[HeapDump] Failed to write dump: ${e.message}`, { level: "error" });
    else h(e);
    return (
      s("tengu_heap_dump", { triggerManual: true, triggerAuto15GB: false, dumpNumber: o, success: false }),
      { success: false, error: e.message }
    );
  }
}
async function T(u) {
  k(u, Bun.generateHeapSnapshot("v8", "arraybuffer"), { mode: 384 }), Bun.gc(true);
}
export { pdr, zYt };
