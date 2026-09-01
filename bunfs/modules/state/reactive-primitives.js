// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { iZe, Ue } from "/$bunfs/root/chunk-qq1mdtb5.js";

// Consolidated from chunk-nwb64bac.js
function p6(r, t) {
  return (e) => r((S) => c(S, t, S[t], e(S[t])));
}
function qQn(r) {
  return (t) =>
    r((e) => {
      let S = t(e);
      return Object.is(S, e) ? e : { ...e, ...S };
    });
}
function Sde(r, t, e) {
  return { get: () => r()[e], set: p6(t, e) };
}
function iY(r, t) {
  return (e, S) => ({
    get: () => e()[r] ?? t,
    set: (a) =>
      S((s) => {
        let n = s[r] ?? t;
        return c(s, r, n, a(n));
      }),
  });
}
function GQn(r) {
  let t = r;
  return {
    get: () => t,
    set: (e) => {
      t = e(t);
    },
  };
}
function Ma(r, t) {
  let e = r,
    S = new Set(),
    a = t && iZe(t),
    s = () => e;
  return {
    getSnapshot: s,
    getState: s,
    setState: (n) => {
      let o = e,
        i = n(o);
      if (Object.is(i, o)) return;
      (e = i), a?.({ newState: i, oldState: o });
      for (let u of S) u();
    },
    subscribe: (n) => {
      let o = iZe(n);
      return S.add(o), () => S.delete(o);
    },
  };
}
function c(r, t, e, S) {
  return Object.is(S, e) ? r : { ...r, [t]: S };
}
export { p6, qQn, Sde, iY, GQn, Ma };

// Consolidated from chunk-wd112tkj.js
var logBacklogLimit = 50;
function f8() {
  let s = Ue(),
    e = [],
    i = 0;
  return {
    publish(t, n) {
      let r = { line: t, level: n };
      if (i === 0) {
        e = [...e, r].slice(-logBacklogLimit);
        return;
      }
      s.emit(r);
    },
    takeBacklog() {
      let t = e;
      return (e = []), t;
    },
    subscribe(t) {
      i += 1;
      let n = s.subscribe(t);
      return () => {
        (i -= 1), n();
      };
    },
  };
}
export { f8 };
