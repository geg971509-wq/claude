// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { r1t, qee, s9 } from "/$bunfs/root/chunk-zze8764r.js";
import { Fo } from "/$bunfs/root/chunk-q14dgq5g.js";
import { Nt } from "/$bunfs/root/chunk-z9bhq3k9.js";
import { o, t } from "/$bunfs/root/chunk-he2phymk.js";
import { wc } from "/$bunfs/root/chunk-f9km17e9.js";
import { Pe } from "/$bunfs/root/chunk-q903htrr.js";
import { Ro } from "/$bunfs/root/chunk-59pkbjrf.js";
import { Vf } from "/$bunfs/root/chunk-9g7gyh01.js";
import { TQ } from "/$bunfs/root/chunk-rw0fq64s.js";
import { gq } from "/$bunfs/root/chunk-vfmgwpc4.js";
import { ep } from "/$bunfs/root/chunk-p98k6xvq.js";
import { uv } from "/$bunfs/root/chunk-wnc75h2x.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { B, A, br, z, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { $d } from "/$bunfs/root/chunk-81defen8.js";
import { qE, OM } from "/$bunfs/root/chunk-pjs8szxf.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
F();
var f = "ctrl+b",
  S = "ctrl+x ctrl+b",
  C = new Set([f, S].map((l) => OM(qE(l))));
function N(l) {
  for (let s of l) {
    if (s.context !== "Task") continue;
    let u = OM(s.chord);
    if (s.action === "task:background") {
      if (!C.has(u)) return true;
    } else if (s.action === null && C.has(u)) return true;
  }
  return false;
}
function _Be({ handler: l, isActive: s }) {
  let u = uv(),
    n = Ro("task:background", "Task", f),
    g = wc(),
    c = g?.bindings,
    i = z(() => (c ? N(c) : false), [c]),
    p = br(l),
    m = !(u && !i);
  A(() => {
    if (!g || !s) return;
    return g.registerHandler({ action: "task:background", context: "Task", handler: () => p(), singleKey: m });
  }, [g, s, m]);
  let R = i ? n : S,
    v =
      n === ""
        ? ""
        : a.terminal === "tmux"
          ? R.split(" ")
              .map((P) => (P === f ? `${f} ${f}` : P))
              .join(" ")
          : R;
  return { cohesionFixes: u, gateOnShortcut: v, resolvedShortcut: n };
}
var O = 2,
  h = 160;
function s0t(b) {
  let T = _(10),
    D;
  if (T[0] !== b) (D = b === void 0 ? {} : b), (T[0] = b), (T[1] = D);
  else D = T[1];
  let { onBackground: x } = D,
    y = Vf(),
    I;
  if (T[2] !== x || T[3] !== y)
    (I = () => {
      s9(y), x?.();
    }),
      (T[2] = x),
      (T[3] = y),
      (T[4] = I);
  else I = T[4];
  let E = I,
    L;
  if (T[5] !== E) (L = { handler: E, isActive: true }), (T[5] = E), (T[6] = L);
  else L = T[6];
  let { cohesionFixes: j, gateOnShortcut: fe } = _Be(L),
    U = Ro("task:background", "Task", "ctrl+b"),
    k = j ? fe : a.terminal === "tmux" && U === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : U;
  if ($d() || (j && k === "")) {
    return null;
  }
  let H;
  if (T[7] === d) (H = { keyCase: "lower" }), (T[7] = H);
  else H = T[7];
  let K;
  if (T[8] !== k)
    (K = e(o, {
      paddingLeft: 5,
      children: e(t, {
        dimColor: true,
        children: e(M, { chord: k, action: "run in background", parens: true, format: H }),
      }),
    })),
      (T[8] = k),
      (T[9] = K);
  else K = T[9];
  return K;
}
function yTr(l, { verbose: s, theme: u }) {
  let { command: n } = l;
  if (!n) return null;
  let g = qee(n);
  if (g) return s ? g.filePath : Fo(g.filePath);
  if (!s) {
    let c = n.split(`
`);
    if (Nt()) {
      let m = r1t(n);
      if (m) return m.length > h ? m.slice(0, h) + "\u2026" : m;
    }
    let i = c.length > O,
      p = n.length > h;
    if (i || p) {
      let m = n;
      if (i)
        m = c.slice(0, O).join(`
`);
      if (m.length > h) m = m.slice(0, h);
      return r(t, { children: [m.trim(), "\u2026"] });
    }
  }
  return n;
}
function STr(l, { verbose: s, tools: u, terminalSize: n, inProgressToolCallCount: g }) {
  let c = l.at(-1);
  if (!c || !c.data) return e(Pe, { height: 1, children: e(t, { dimColor: true, children: "Running\u2026" }) });
  let i = c.data;
  return e(TQ, {
    fullOutput: i.fullOutput,
    output: i.output,
    elapsedTimeSeconds: i.elapsedTimeSeconds,
    totalLines: i.totalLines,
    totalBytes: i.totalBytes,
    timeoutMs: i.timeoutMs,
    taskId: i.taskId,
    verbose: s,
  });
}
function bTr() {
  return e(Pe, { height: 1, children: e(t, { dimColor: true, children: "Waiting\u2026" }) });
}
function wTr(l, s, { verbose: u, theme: n, tools: g, style: c }) {
  let p = s.at(-1)?.data?.timeoutMs;
  return e(gq, { content: l, verbose: u, timeoutMs: p });
}
function TTr(l, { verbose: s, progressMessagesForMessage: u, tools: n }) {
  return e(ep, { result: l, verbose: s });
}
export { _Be, s0t, yTr, STr, bTr, wTr, TTr };
