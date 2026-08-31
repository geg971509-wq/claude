// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { Hr } from "/$bunfs/root/chunk-ca80fke8.js";
import { Wn, QH } from "/$bunfs/root/chunk-nqmqabr8.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { Te } from "/$bunfs/root/chunk-jpf4kat5.js";
import { b, V } from "/$bunfs/root/chunk-fv016jr6.js";
import { ABt, CBt, Gb } from "/$bunfs/root/chunk-wn1jrcrk.js";
import { tl } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { i, v, H, f } from "/$bunfs/root/chunk-saay52v7.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { createHash as D } from "crypto";
import { mkdir as S, readdir as h, rm as w, unlink as z } from "fs/promises";
import { join as p } from "path";
var l = 86400000,
  d = 8388608;
function c(t) {
  return D("sha256").update(t).digest("hex").slice(0, 8);
}
function n(t) {
  return p(Gb(), `.draft-${c(t)}`);
}
function u(t) {
  return b({ ...t, ts: Date.now() });
}
async function TWe(t, r, e) {
  await NDt(t, r, e);
}
async function NDt(t, r, e) {
  if (O() && e)
    return (
      (
        await e
          .write(Te.jobDraft(c(t)), u(r), { publishDiscipline: "atomic", mode: 438 & ~process.umask() })
          .catch(() => {
            return;
          })
      )?.ok === !0
    );
  try {
    return await S(Gb(), { recursive: !0 }), await Wn(n(t), u(r)), !0;
  } catch {
    return !1;
  }
}
function Arn(t, r) {
  try {
    QH(n(t), u(r));
  } catch {}
}
async function Crn(t, r) {
  if (r) {
    await r.delete(Te.jobDraft(c(t))).catch(() => {});
    return;
  }
  await z(n(t)).catch(() => {});
}
var g = m(() => f({ q: i(), collapsed: H(i()).optional(), ts: v() }));
async function c6n(t, r) {
  let e = r ? await k(r, t) : await tl(n(t), d);
  if (e === null) return;
  let a;
  try {
    a = g().safeParse(V(e));
  } catch {
    return;
  }
  if (!a.success) return;
  let { q: o, collapsed: s, ts: y } = a.data;
  if (Date.now() - y > l) return;
  return { q: o, collapsed: s ?? [] };
}
async function k(t, r) {
  return CBt(t, Te.jobDraft(c(r)), { cap: d, screens: P(), screenKey: n(r) });
}
function P() {
  return ABt.of(G().host).drafts;
}
async function kst() {
  return Hr("job_sweep_drafts", async () => {
    let t;
    try {
      t = await h(Gb());
    } catch {
      return;
    }
    let r = Date.now();
    await Promise.all(
      t
        .filter((e) => e.startsWith(".draft-"))
        .map(async (e) => {
          let a = p(Gb(), e),
            o = await tl(a, d);
          if (o !== null)
            try {
              let s = g().safeParse(V(o));
              if (s.success && r - s.data.ts <= l) return;
            } catch {}
          await w(a, { recursive: !0, force: !0 }).catch(() => {});
        }),
    );
  });
}
export { TWe, NDt, Arn, Crn, c6n, kst };
