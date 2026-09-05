// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ht } from "/$bunfs/root/chunk-ek4tmwbt.js";
import { c_ } from "/$bunfs/root/chunk-htrft0p0.js";
import { ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { y } from "/$bunfs/root/chunk-ca80fke8.js";
import { Gue, zue, a_t, l_t } from "/$bunfs/root/chunk-ky33xsw7.js";
import { A, br, C, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { FN } from "/$bunfs/root/chunk-manh1369.js";
function QOn(e) {
  if (e.wheelUp || e.wheelDown || e.escape) return false;
  if (e.pageUp || e.pageDown) return false;
  if ((e.home || e.end) && e.ctrl) return false;
  if ((e.leftArrow || e.rightArrow || e.upArrow || e.downArrow || e.home || e.end) && (e.shift || e.meta || e.super))
    return false;
  return true;
}
function p(e) {
  if (e.name === "escape" || e.name === "pageup" || e.name === "pagedown") return false;
  if ((e.name === "home" || e.name === "end") && e.ctrl) return false;
  if (
    (e.name === "left" ||
      e.name === "right" ||
      e.name === "up" ||
      e.name === "down" ||
      e.name === "home" ||
      e.name === "end") &&
    (e.shift || e.meta || e.superKey)
  )
    return false;
  return true;
}
function ZOn(e, t) {
  return (o) => {
    if (!e.hasSelection()) return;
    if (o.key === "c" && !o.meta && (o.ctrl || o.superKey)) {
      if (t) e.clearSelection();
      else e.copySelection();
      o.consume();
      return;
    }
    if (p(o)) e.clearSelection();
  };
}
function Itt(e, t = true) {
  ht(
    {
      "selection:clear": () => {
        if (!e.hasSelection()) return false;
        e.clearSelection();
      },
    },
    { context: "Scroll", isActive: t },
  );
}
F();
function Ptt(e) {
  let t = zue(),
    o = FN(e),
    r = o === 1 ? "char" : "chars",
    n;
  switch (t) {
    case "native":
      n = `copied ${o} ${r} to clipboard`;
      break;
    case "tmux-buffer":
      n = `copied ${o} ${r} to tmux buffer \xB7 paste with prefix + ]`;
      break;
    case "osc52":
      n = `sent ${o} ${r} via OSC 52 \xB7 if paste fails, hold ${Gue()} while selecting for native copy`;
      break;
  }
  let i = l_t(e);
  if (i) n = `\u26A0 ${i} \xB7 ${n}`;
  return {
    key: "selection-copied",
    kind: "feedback",
    text: n,
    color: "suggestion",
    priority: "immediate",
    timeoutMs: i ? 6000 : t === "native" ? 2000 : 4000,
  };
}
function Dtt(e, t, o) {
  let r = C(false),
    n = C(null),
    [i] = u(() => ({
      peek: () => n.current,
      invalidate: () => {
        n.current = null;
      },
    })),
    a = br((c) => o?.(c));
  return (
    A(() => {
      if (!t) return;
      return (
        a_t(),
        e.subscribe(() => {
          let l = e.getState(),
            f = e.hasSelection();
          if (l?.isDragging) {
            (r.current = false), (n.current = null);
            return;
          }
          if (!f) {
            (r.current = false), (n.current = null);
            return;
          }
          if (r.current) {
            n.current = null;
            return;
          }
          if (!(ie().copyOnSelect ?? true)) return;
          let s = e.copySelectionNoClear();
          if (!s || !s.trim()) {
            r.current = true;
            return;
          }
          (r.current = true), (n.current = s), y("clipboard_write"), a(s);
        })
      );
    }, [t, e]),
    i
  );
}
function Ott(e) {
  let t = c_();
  A(() => {
    e.setSelectionBgColor(t.selectionBg);
  }, [e, t.selectionBg]);
}
export { QOn, ZOn, Itt, Ptt, Dtt, Ott };
