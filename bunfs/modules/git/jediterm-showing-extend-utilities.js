// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { N1, KR } from "/$bunfs/root/chunk-syabrr2b.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { ct } from "/$bunfs/root/chunk-pc41wsq4.js";
import { Gr, sn, zT, mvn } from "/$bunfs/root/chunk-rgw52f13.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { wr } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { Afe } from "/$bunfs/root/chunk-q14dgq5g.js";
import { XMt, YMt, uct, ydt, R4e, V4n } from "/$bunfs/root/chunk-zze8764r.js";
import { xt } from "/$bunfs/root/chunk-8cv6dqkz.js";
import { Or } from "/$bunfs/root/chunk-cmhbx7me.js";
import { _ke } from "/$bunfs/root/chunk-ngn87vcm.js";
import { wc } from "/$bunfs/root/chunk-f9km17e9.js";
import { ht, w8 } from "/$bunfs/root/chunk-ek4tmwbt.js";
import { YR, hxe, ljn, jon, Won } from "/$bunfs/root/chunk-pbmajbn7.js";
import { XR } from "/$bunfs/root/chunk-htrft0p0.js";
import { ge } from "/$bunfs/root/chunk-c3bffkxg.js";
import { ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Lo } from "/$bunfs/root/chunk-5c5qq1s7.js";
import { zue } from "/$bunfs/root/chunk-ky33xsw7.js";
import { QOn, Itt, Ptt, Dtt, Ott } from "/$bunfs/root/chunk-78644ge1.js";
import { o, t, Ox } from "/$bunfs/root/chunk-he2phymk.js";
import { $_e, Oon, Lon } from "/$bunfs/root/chunk-kez2zndg.js";
import { e2e } from "/$bunfs/root/chunk-ph2x1s8t.js";
import { Ee } from "/$bunfs/root/chunk-rp246vnd.js";
import { gx } from "/$bunfs/root/chunk-qsfnyrge.js";
import { DR } from "/$bunfs/root/chunk-ebn06b52.js";
import { sr } from "/$bunfs/root/chunk-vnpdqx6v.js";
import { jke, aB } from "/$bunfs/root/chunk-zr7ta3a4.js";
import { kb, O0 } from "/$bunfs/root/chunk-8kwjh4ab.js";
import { ql } from "/$bunfs/root/chunk-7d0my7mt.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { We, A, br, z, C, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
var De = 400,
  Ve = 150,
  _e = { hunks: new Map(), skippedLarge: new Set() };
function f7t(i = 0, c = true, a = "auto") {
  let m = We(KR)?.setTimeout ?? N1,
    { host: x } = ct(),
    [B, M] = u(null),
    [P, N] = u(true),
    H = C(false),
    [W, O] = u(0);
  return (
    A(() => mvn(() => O((L) => L + 1)), []),
    A(() => {
      if (!c) return;
      let L = false,
        V = new AbortController();
      async function Y() {
        try {
          let E = await ydt(x, V.signal, a);
          if (L) return;
          if (E === null) {
            g("repl_diff_read", "git_diff_failed"), (H.current = true), N(false);
            return;
          }
          let S = R4e(E),
            U = E.stats.filesCount === 0 ? _e : await V4n(V.signal, S);
          if (L) return;
          if (
            (M((J) => ({ result: E, baseMode: a, hunks: U ?? (J !== null && R4e(J.result) === S ? J.hunks : _e) })),
            U === null)
          )
            g("repl_diff_read", "git_hunks_failed");
          else y("repl_diff_read");
          (H.current = true), N(false);
        } catch (E) {
          if (L) return;
          h(E), g("repl_diff_read", "git_diff_threw"), (H.current = true), N(false);
        }
      }
      let K = m(Y, H.current ? Ve : 0);
      return () => {
        (L = true), K(), V.abort();
      };
    }, [i, c, W, a, x]),
    z(() => {
      if (!B)
        return {
          stats: null,
          files: [],
          hunks: new Map(),
          loading: c && P,
          source: { kind: "working-tree" },
          baseMode: a,
        };
      let { stats: L, perFileStats: V, source: Y } = B.result,
        K = [];
      for (let [E, S] of V) {
        let U = S.isUntracked,
          J = B.hunks.skippedLarge.has(E),
          f = S.added + S.removed,
          b = !J && !S.isBinary && f > De;
        K.push({
          path: E,
          linesAdded: S.added,
          linesRemoved: S.removed,
          isBinary: S.isBinary,
          isLargeFile: J,
          isTruncated: b,
          isUntracked: U,
          preSession: S.preSession,
        });
      }
      return (
        K.sort((E, S) => E.path.localeCompare(S.path)),
        {
          stats: L,
          files: K,
          hunks: B.hunks.hunks,
          loading: false,
          source: Y,
          baseMode: B.baseMode,
          noCommits: B.result.noCommits,
        }
      );
    }, [B, P, c, a])
  );
}
function re(i) {
  return { stats: null, files: [], hunks: new Map(), loading: i, source: { kind: "working-tree" }, baseMode: "auto" };
}
function Je(i) {
  let c = new Set(i.skippedLarge),
    a = new Set(i.restricted),
    w = i.perFileStats
      .map((m) => {
        let x = c.has(m.path);
        return {
          path: m.path,
          linesAdded: m.added,
          linesRemoved: m.removed,
          isBinary: m.isBinary,
          isLargeFile: x,
          isTruncated: !x && !m.isBinary && m.added + m.removed > De,
          isUntracked: m.isUntracked,
          isRestricted: a.has(m.path),
        };
      })
      .sort((m, x) => m.path.localeCompare(x.path));
  return {
    stats: i.stats,
    files: w,
    hunks: new Map(i.hunks.map((m) => [m.path, m.hunks])),
    loading: false,
    source: i.source,
    baseMode: "auto",
  };
}
function Ke(i) {
  let [c, a] = u(() => ({ data: re(i), notice: null }));
  return (
    A(() => {
      if (!i) return;
      let w = Gr();
      if (!w || !zT("controlChannel")) {
        g("remote_workspace_diff_fetch", "no_channel"),
          a({
            data: re(false),
            notice: "Workspace changes aren't available over this connection \u2014 showing per-turn changes only",
          });
        return;
      }
      let m = false;
      return (
        w
          .sendControlRequest({ subtype: "get_workspace_diff" })
          .then((x) => {
            if (m) return;
            y("remote_workspace_diff_fetch"), a({ data: x.diff ? Je(x.diff) : re(false), notice: null });
          })
          .catch((x) => {
            if (m) return;
            let B = l(x),
              M = B.includes("Unsupported control request subtype") ? "unsupported_subtype" : O0(x);
            if (M === "unsupported_subtype") g("remote_workspace_diff_fetch", M);
            else p("remote_workspace_diff_fetch", M);
            a({
              data: re(false),
              notice:
                M === "unsupported_subtype"
                  ? "The remote workspace is running an older Claude Code version that cannot report workspace changes \u2014 showing per-turn changes only"
                  : x instanceof kb
                    ? "Timed out fetching workspace changes \u2014 showing per-turn changes only"
                    : M === "disconnected" || M === "not_connected"
                      ? "Lost the connection to the cloud session \u2014 showing per-turn changes only"
                      : M === "not_delivered"
                        ? "Couldn't reach the cloud session \u2014 showing per-turn changes only"
                        : `Couldn't fetch workspace changes: ${B}`,
            });
          }),
        () => {
          m = true;
        }
      );
    }, [i]),
    c
  );
}
function m7t(i) {
  let c = f7t(0, !i),
    a = Ke(i);
  return i ? a : { data: c, notice: null };
}
F();
F();
var ye = 2,
  xe = 50,
  Ye = 200;
function Ckt(i, c, a, w, m) {
  let x = xt(),
    B = C(null),
    M = C(0),
    P = C(0),
    N = C(0),
    H = br((O, L) => w?.(O, L)),
    W = m?.requireScope ?? false;
  A(() => {
    if (!a) return;
    function O() {
      (M.current = 0), B.current?.(), (B.current = null);
    }
    function L() {
      let E = c.getState(),
        S = i.handle,
        U = M.current;
      if (!E?.isDragging || !E.focus || !S || U === 0 || ++N.current > Ye) {
        O();
        return;
      }
      if (S.getPendingDelta() !== 0) return;
      if (U < 0) {
        if (S.getScrollTop() <= 0) {
          O();
          return;
        }
        S.scrollBy(-ye);
      } else {
        let J = Math.max(0, S.getScrollHeight() - S.getViewportHeight());
        if (S.getScrollTop() >= J) {
          O();
          return;
        }
        S.scrollBy(ye);
      }
      H(false, S);
    }
    function V(E) {
      if (((P.current = E), M.current === E)) return;
      if ((O(), (M.current = E), (N.current = 0), L(), M.current === E)) {
        let S = () => {
          if ((L(), M.current !== 0)) B.current = x.setTimeout(S, xe);
        };
        B.current = x.setTimeout(S, xe);
      }
    }
    function Y() {
      let E = i.handle;
      if (!E) {
        O();
        return;
      }
      let S = c.getState();
      if (!se(S, E) || (W && !S?.scope?.node)) {
        (P.current = 0), O();
        return;
      }
      let U = E.getViewportTop(),
        J = U + E.getViewportHeight() - 1;
      if (!S?.isDragging || (S.scrolledOffAbove.length === 0 && S.scrolledOffBelow.length === 0)) P.current = 0;
      let f = $e(S, U, J, P.current);
      if (f === 0) {
        if (P.current !== 0 && S?.focus) {
          let b = S.focus.row < U ? -1 : S.focus.row > J ? 1 : 0;
          if (b !== 0 && b !== P.current)
            (S.scrolledOffAbove = []),
              (S.scrolledOffBelow = []),
              (S.scrolledOffAboveSW = []),
              (S.scrolledOffBelowSW = []),
              (P.current = 0);
        }
        O();
      } else V(f);
    }
    let K = c.subscribe(Y);
    return () => {
      K(), O(), (P.current = 0);
    };
  }, [x, a, W, i, c]);
}
function se(i, c) {
  let a = i?.scope?.node;
  return !a || a === c?.getDomElement();
}
function $e(i, c, a, w = 0) {
  if (!i?.isDragging || !i.anchor || !i.focus) return 0;
  let m = i.focus.row,
    x = m < c ? -1 : m > a ? 1 : 0;
  if (w !== 0) return x === w ? x : 0;
  if (i.anchor.row < c || i.anchor.row > a) return 0;
  return x;
}
var Me = 40,
  Ze = 0.3,
  eo = 6,
  oo = 3,
  to = 200,
  no = 15,
  ro = 15,
  lo = 3,
  io = 1500,
  Ce = 150,
  co = 7,
  Te = 5,
  so = 80,
  uo = 3,
  ao = 36,
  fo = 500;
function po(i, c) {
  if (c.upArrow || c.downArrow || c.home || c.end) return true;
  if (i.length !== 1) return false;
  if (c.ctrl) return "udbfnp".includes(i);
  return "jkgGb {}".includes(i);
}
var mo = 0.35,
  ho = 0.008,
  go = 0.4,
  So = 4;
function ke(i, c, a) {
  if (i.jediTerm.trackpadGesture) {
    let M = a - i.time;
    if (!i.jbBypass || M > Won) (i.jbBypass = true), (i.frac = 0), (i.mult = 1);
    else if (c !== i.dir) i.frac = 0;
    (i.dir = c), (i.time = a);
    let P = ljn(i.jediTerm);
    if (i.accelEnabled) i.mult = Math.min(So, i.mult + ho + P * go);
    i.frac += mo * i.mult;
    let N = Math.floor(i.frac);
    return (i.frac -= N), N;
  }
  if (i.jbBypass)
    (i.jbBypass = false), (i.pendingFlip = false), (i.wheelMode = false), (i.burstCount = 0), (i.frac = 0), (i.dir = 0);
  if (!i.useDecayCurve) {
    if (i.wheelFlood) {
      let P = a - i.time;
      return (i.time = a), (i.dir = c), (i.mult = P > Me ? i.base * oo : i.base), Math.max(1, Math.floor(i.mult));
    }
    if (i.wheelMode && a - i.time > io) (i.wheelMode = false), (i.burstCount = 0), (i.mult = i.base);
    if (i.pendingFlip) {
      if (((i.pendingFlip = false), c !== i.dir || a - i.time > to))
        return (i.dir = c), (i.time = a), (i.mult = i.base), Math.max(1, Math.floor(i.mult));
      i.wheelMode = true;
    }
    let M = a - i.time;
    if (c !== i.dir && i.dir !== 0) return (i.pendingFlip = true), (i.time = a), 0;
    if (((i.dir = c), (i.time = a), i.wheelMode))
      if (M < Te)
        if (++i.burstCount >= 5) (i.wheelMode = false), (i.burstCount = 0), (i.mult = i.base);
        else return 1;
      else i.burstCount = 0;
    if (i.wheelMode && i.accelEnabled) {
      let P = Math.pow(0.5, M / Ce),
        N = Math.max(ro * Math.min(i.base, 1), i.base * 2),
        H = 1 + (i.mult - 1) * P + no * P;
      return (i.mult = Math.min(N, H, i.mult + lo)), Math.max(1, Math.floor(i.mult));
    }
    if (M > Me || !i.accelEnabled) i.mult = i.base;
    else {
      let P = Math.max(eo * Math.min(i.base, 1), i.base * 2);
      i.mult = Math.min(P, i.mult + Ze);
    }
    return Math.max(1, Math.floor(i.mult));
  }
  let w = a - i.time,
    m = c === i.dir;
  if (((i.time = a), (i.dir = c), m && w < Te)) return 1;
  if (!i.accelEnabled) return Math.max(1, Math.floor(i.base));
  if (!m || w > fo) (i.mult = Math.max(2, i.base)), (i.frac = 0);
  else {
    let M = Math.pow(0.5, w / Ce),
      P = w >= so ? uo : ao;
    i.mult = Math.min(P, 1 + (i.mult - 1) * M + co * M);
  }
  let x = i.mult + i.frac,
    B = Math.floor(x);
  return (i.frac = x - B), B;
}
function bo(i = false, c = 1, a = false, w = true, m = hxe()) {
  return {
    time: 0,
    mult: c,
    dir: 0,
    useDecayCurve: i,
    frac: 0,
    base: c,
    pendingFlip: false,
    wheelMode: false,
    burstCount: 0,
    jbBypass: false,
    jediTerm: m,
    wheelFlood: a,
    accelEnabled: w,
  };
}
function Be(i) {
  let c = YR(),
    a = Lo("wheelScrollAccelerationEnabled", true).value;
  return (
    n(
      `wheel accel: ${c.useDecayCurve ? "decay" : "window (native)"} \xB7 base=${c.base} \xB7 platform=${c.platform} \xB7 TERM_PROGRAM=${c.termProgram}${c.wheelFlood ? " \xB7 wheelFlood" : ""}${c.jediTerm ? " \xB7 jediTerm" : ""}${jon(i) ? " \xB7 jbBugConfirmed" : ""}${a ? "" : " \xB7 accelDisabled"}`,
    ),
    bo(c.useDecayCurve, c.base, c.wheelFlood, a, i)
  );
}
var Ae = "auto-copy-config-hint",
  wo = 10,
  Pe = 5;
function zUe({ scrollViewport: i, isActive: c, onScroll: a, isModal: w = false }) {
  let m = Ox(),
    x = wc(),
    B = e2e(),
    { addNotification: M } = Or(),
    { storageV5: P } = ge(),
    N = _ke(),
    H = c && !N,
    W = C(null),
    O = C(null),
    { internal_jediTermInput: L } = XR(),
    V = C(-1);
  Re(M);
  function Y(f, b = false) {
    let D = Ptt(f);
    if (b && zue() === "native" && ie().copyOnSelect === void 0) {
      if (V.current === -1)
        if (aB(Ae) >= wo) jke(Ae, P), (V.current = 0);
        else V.current = Pe;
      if (V.current < Pe) {
        V.current++,
          M({ ...D, text: `${D.text} \xB7 disable auto-copy in /config`, timeoutMs: Math.max(D.timeoutMs, 4000) });
        return;
      }
    }
    M(D);
  }
  function K() {
    let f = m.copySelection();
    if (f) Y(f);
  }
  let E = a != null;
  ht(
    {
      "scroll:pageUp": () => {
        let f = i.handle;
        if (!f) return;
        if (E) YMt();
        let b = -Math.max(1, Math.floor(f.getViewportHeight() / 2)),
          D = KU(f, b, E);
        a?.(D, f);
      },
      "scroll:pageDown": () => {
        let f = i.handle;
        if (!f) return;
        if (E) YMt();
        let b = Math.max(1, Math.floor(f.getViewportHeight() / 2)),
          D = KU(f, b, E);
        a?.(D, f);
      },
      "scroll:lineUp": () => {
        let f = i.handle;
        if (!f || f.getScrollHeight() <= f.getViewportHeight()) return false;
        if (YR() !== O.current) (O.current = YR()), (W.current = null);
        if (E) XMt();
        (W.current ??= Be(L)), (W.current.base = YR().base);
        let b = performance.now(),
          D = ke(W.current, -1, b);
        Lon(f), Oon(-1, D, W.current, b), Do(f, D, E), a?.(false, f);
      },
      "scroll:lineDown": () => {
        let f = i.handle;
        if (!f || f.getScrollHeight() <= f.getViewportHeight()) return false;
        if (YR() !== O.current) (O.current = YR()), (W.current = null);
        if (E) XMt();
        (W.current ??= Be(L)), (W.current.base = YR().base);
        let b = performance.now(),
          D = ke(W.current, 1, b);
        Lon(f), Oon(1, D, W.current, b);
        let Q = _o(f, D);
        a?.(Q, f);
      },
      "scroll:top": () => {
        let f = i.handle;
        if (!f) return;
        if (E) uct();
        f.scrollTo(0), a?.(false, f);
      },
      "scroll:bottom": () => {
        let f = i.handle;
        if (!f) return;
        f.scrollToBottom(), a?.(true, f);
      },
      "selection:copy": K,
    },
    { context: "Scroll", isActive: H },
  ),
    Itt(m, H);
  function S(f) {
    let b = i.handle;
    if (!b) return;
    if (E) {
      if (f === "lineUp" || f === "lineDown") XMt();
      else if (f === "top") uct();
      else if (f !== "bottom") YMt();
    }
    let D = yo(b, f, E);
    if (D === null) return;
    a?.(D, b);
  }
  ht(
    {
      "scroll:halfPageUp": () => S("halfPageUp"),
      "scroll:halfPageDown": () => S("halfPageDown"),
      "scroll:fullPageUp": () => S("fullPageUp"),
      "scroll:fullPageDown": () => S("fullPageDown"),
    },
    { context: "Scroll", isActive: H },
  ),
    ht(
      {
        "scroll:lineUp": () => S("lineUp"),
        "scroll:lineDown": () => S("lineDown"),
        "scroll:halfPageUp": () => S("halfPageUp"),
        "scroll:halfPageDown": () => S("halfPageDown"),
        "scroll:fullPageUp": () => S("fullPageUp"),
        "scroll:fullPageDown": () => S("fullPageDown"),
        "scroll:top": () => S("top"),
        "scroll:bottom": () => S("bottom"),
      },
      { context: "Transcript", isActive: H && w },
    );
  function U(f) {
    if (!m.hasSelection()) return false;
    let b = m.getState();
    if (b && $_e(b)) return;
    if (f === "up" || f === "down") {
      let D = i.handle;
      if (D && se(b, D) && b?.anchor && b.focus) {
        let Q = D.getViewportTop(),
          ne = Q + D.getViewportHeight() - 1,
          we = b.anchor.row >= Q && b.anchor.row <= ne,
          te = we && f === "up" && b.focus.row <= Q,
          Ge = we && f === "down" && b.focus.row >= ne;
        if (te || Ge) {
          let je = Math.max(0, D.getScrollHeight() - D.getViewportHeight()),
            Ne = te ? D.getScrollTop() > 0 : D.getScrollTop() < je;
          if (D.getPendingDelta() === 0 && Ne)
            J.invalidate(),
              (b.focus = { col: b.focus.col, row: te ? Q : ne }),
              (b.virtualFocusRow = te ? Q - 1 : ne + 1),
              (b.virtualFocusCol = void 0),
              D.scrollBy(te ? -1 : 1),
              a?.(false, D);
          return;
        }
      }
    }
    m.moveFocus(f);
  }
  ht(
    {
      "selection:extendLeft": () => U("left"),
      "selection:extendRight": () => U("right"),
      "selection:extendUp": () => U("up"),
      "selection:extendDown": () => U("down"),
      "selection:extendLineStart": () => U("lineStart"),
      "selection:extendLineEnd": () => U("lineEnd"),
    },
    { context: "Scroll", isActive: H },
  ),
    w8(
      (f, b) => {
        if (!m.hasSelection()) return;
        if (b.ctrl && !b.shift && !b.meta && f === "c") {
          let D = J.peek();
          if (D !== null) m.clearSelection(), Y(D);
          else K();
          return true;
        }
        if (w && po(f, b)) return;
        if (!w && (b.backspace || b.delete) && !b.ctrl && !b.meta && !b.shift && !b.super) {
          let D = m.getState();
          if (D && B.tryDelete(D)) return m.clearSelection(), true;
        }
        if (QOn(b)) {
          if (x) {
            let D = x.resolve(f, b, [...x.activeContexts, "Scroll", "Global"]);
            if (D.type === "match" && D.action === "selection:copy") return;
          }
          m.clearSelection();
        }
      },
      { isActive: H },
    ),
    Ckt(i, m, H, a);
  let J = Dtt(m, H, (f) => Y(f, true));
  return Ott(m), null;
}
function He(i) {
  if (Lo("autoScrollEnabled", true).value) i.scrollToBottom();
  else i.scrollTo(Math.max(0, i.getScrollHeight() - i.getViewportHeight()));
  return true;
}
function KU(i, c, a = true) {
  let w = Math.max(0, i.getScrollHeight() - i.getViewportHeight()),
    m = Math.min(i.getScrollTop(), w) + i.getPendingDelta() + c;
  if (m >= w) return He(i);
  if (m <= 0 && a) uct();
  return i.scrollTo(Math.max(0, m)), false;
}
function _o(i, c) {
  let a = Math.max(0, i.getScrollHeight() - i.getViewportHeight());
  if (i.getScrollTop() + i.getPendingDelta() + c >= a) return He(i);
  return i.scrollBy(c), false;
}
function Do(i, c, a = true) {
  if (i.getScrollTop() + i.getPendingDelta() - c <= 0) {
    if (a) uct();
    i.scrollTo(0);
    return;
  }
  i.scrollBy(-c);
}
function yo(i, c, a = true) {
  switch (c) {
    case null:
      return null;
    case "lineUp":
    case "lineDown":
      return KU(i, c === "lineDown" ? 1 : -1, a);
    case "halfPageUp":
    case "halfPageDown": {
      let w = Math.max(1, Math.floor(i.getViewportHeight() / 2));
      return KU(i, c === "halfPageDown" ? w : -w, a);
    }
    case "fullPageUp":
    case "fullPageDown": {
      let w = Math.max(1, i.getViewportHeight());
      return KU(i, c === "fullPageDown" ? w : -w, a);
    }
    case "top":
      return i.scrollTo(0), false;
    case "bottom":
      return i.scrollToBottom(), true;
  }
}
function Re(le) {
  let at = _(5),
    { internal_eventEmitter: Z } = XR(),
    ue = xt(),
    qe = C(false),
    Xe,
    ze;
  if (at[0] !== le || at[1] !== ue || at[2] !== Z)
    (Xe = () => {
      let ae = function ae(Qe) {
        if (!qe.current)
          (qe.current = true), s("tengu_scroll_arrows_detected", { count: Qe.count, up: Qe.direction === "up" });
        ue.setTimeout(
          () =>
            le({
              key: "scroll-as-arrows",
              kind: "contextual",
              priority: "immediate",
              text: "Scroll wheel is sending arrow keys \xB7 use PgUp/PgDn to scroll",
              color: "warning",
              timeoutMs: 12000,
            }),
          200,
        );
      };
      let fe = function fe() {
        s("tengu_jediterm_scroll_bug_detected", {}),
          le({
            key: "jediterm-scroll-bug",
            kind: "contextual",
            priority: "immediate",
            text: "Scroll support in JetBrains IDE 2025.2 terminals is experimental \xB7 upgrade to 2025.3+ for the best experience",
            color: "suggestion",
            timeoutMs: 15000,
          });
      };
      return (
        Z.on("arrow-burst", ae),
        Z.on("jediterm-scroll-bug", fe),
        () => {
          Z.off("arrow-burst", ae), Z.off("jediterm-scroll-bug", fe);
        }
      );
    }),
      (ze = [Z, le, ue]),
      (at[0] = le),
      (at[1] = ue),
      (at[2] = Z),
      (at[3] = Xe),
      (at[4] = ze);
  else (Xe = at[3]), (ze = at[4]);
  A(Xe, ze);
}
F();
import { resolve as Ue } from "path";
var Ie = 1e6;
function Gie(Tt) {
  let T = _(73),
    {
      filePath: R,
      hunks: pe,
      isLargeFile: de,
      isBinary: me,
      isTruncated: he,
      isUntracked: Se,
      isRestricted: be,
      width: kt,
    } = Tt,
    { columns: Bt } = Ee(),
    Le = ct(),
    I = kt ?? Bt - 4,
    ce;
  if (T[0] !== R || T[1] !== me || T[2] !== de || T[3] !== be || T[4] !== Se || T[5] !== Le) {
    bb0: {
      if (!R || me || de || Se || be || sn()) {
        let k;
        if (T[7] === d) (k = { firstLine: null, fileContent: void 0 }), (T[7] = k);
        else k = T[7];
        ce = k;
        break bb0;
      }
      let ve;
      try {
        ve = Afe(Ue(Le.project.cwd, R), { maxBytes: Ie });
      } catch {
        let k;
        if (T[8] === d) (k = { firstLine: null, fileContent: void 0 }), (T[8] = k);
        else k = T[8];
        ce = k;
        break bb0;
      }
      ce = { firstLine: wr(ve), fileContent: ve };
    }
    (T[0] = R), (T[1] = me), (T[2] = de), (T[3] = be), (T[4] = Se), (T[5] = Le), (T[6] = ce);
  } else ce = T[6];
  let { firstLine: Oe, fileContent: Fe } = ce;
  if (be) {
    let k;
    if (T[9] !== R) (k = e(o, { children: e(t, { bold: true, children: R }) })), (T[9] = R), (T[10] = k);
    else k = T[10];
    let v;
    if (T[11] !== I) (v = e(ql, { width: I })), (T[11] = I), (T[12] = v);
    else v = T[12];
    let G;
    if (T[13] === d)
      (G = e(o, {
        flexDirection: "column",
        children: e(t, { dimColor: true, italic: true, children: "Content restricted by read-permission rules" }),
      })),
        (T[13] = G);
    else G = T[13];
    let j;
    if (T[14] !== k || T[15] !== v)
      (j = r(o, { flexDirection: "column", width: "100%", children: [k, v, G] })),
        (T[14] = k),
        (T[15] = v),
        (T[16] = j);
    else j = T[16];
    return j;
  }
  if (Se) {
    let k;
    if (T[17] !== R) (k = e(t, { bold: true, children: R })), (T[17] = R), (T[18] = k);
    else k = T[18];
    let v;
    if (T[19] === d) (v = e(DR, { children: "untracked" })), (T[19] = v);
    else v = T[19];
    let G;
    if (T[20] !== k) (G = r(o, { children: [k, v] })), (T[20] = k), (T[21] = G);
    else G = T[21];
    let j;
    if (T[22] !== I) (j = e(ql, { width: I })), (T[22] = I), (T[23] = j);
    else j = T[23];
    let ee;
    if (T[24] === d) (ee = e(t, { dimColor: true, italic: true, children: "New file not yet staged." })), (T[24] = ee);
    else ee = T[24];
    let q;
    if (T[25] !== R)
      (q = !sn() && r(t, { dimColor: true, italic: true, children: ["Run `git add :/", R, "` to see line counts."] })),
        (T[25] = R),
        (T[26] = q);
    else q = T[26];
    let X;
    if (T[27] !== q) (X = r(o, { flexDirection: "column", children: [ee, q] })), (T[27] = q), (T[28] = X);
    else X = T[28];
    let oe;
    if (T[29] !== G || T[30] !== j || T[31] !== X)
      (oe = r(o, { flexDirection: "column", width: "100%", children: [G, j, X] })),
        (T[29] = G),
        (T[30] = j),
        (T[31] = X),
        (T[32] = oe);
    else oe = T[32];
    return oe;
  }
  if (me) {
    let k;
    if (T[33] !== R) (k = e(o, { children: e(t, { bold: true, children: R }) })), (T[33] = R), (T[34] = k);
    else k = T[34];
    let v;
    if (T[35] !== I) (v = e(ql, { width: I })), (T[35] = I), (T[36] = v);
    else v = T[36];
    let G;
    if (T[37] === d)
      (G = e(o, {
        flexDirection: "column",
        children: e(t, { dimColor: true, italic: true, children: "Binary file - cannot display diff" }),
      })),
        (T[37] = G);
    else G = T[37];
    let j;
    if (T[38] !== k || T[39] !== v)
      (j = r(o, { flexDirection: "column", width: "100%", children: [k, v, G] })),
        (T[38] = k),
        (T[39] = v),
        (T[40] = j);
    else j = T[40];
    return j;
  }
  if (de) {
    let k;
    if (T[41] !== R) (k = e(o, { children: e(t, { bold: true, children: R }) })), (T[41] = R), (T[42] = k);
    else k = T[42];
    let v;
    if (T[43] !== I) (v = e(ql, { width: I })), (T[43] = I), (T[44] = v);
    else v = T[44];
    let G;
    if (T[45] === d)
      (G = e(o, {
        flexDirection: "column",
        children: e(t, {
          dimColor: true,
          italic: true,
          children: sn() ? "Diff too large to display." : "Large file - diff exceeds 1 MB limit",
        }),
      })),
        (T[45] = G);
    else G = T[45];
    let j;
    if (T[46] !== k || T[47] !== v)
      (j = r(o, { flexDirection: "column", width: "100%", children: [k, v, G] })),
        (T[46] = k),
        (T[47] = v),
        (T[48] = j);
    else j = T[48];
    return j;
  }
  let k;
  if (T[49] !== R) (k = e(t, { bold: true, children: R })), (T[49] = R), (T[50] = k);
  else k = T[50];
  const v = he ?? false;
  let G;
  if (T[51] !== v) (G = e(DR, { when: v, children: "truncated" })), (T[51] = v), (T[52] = G);
  else G = T[52];
  let j;
  if (T[53] !== k || T[54] !== G) (j = r(o, { children: [k, G] })), (T[53] = k), (T[54] = G), (T[55] = j);
  else j = T[55];
  let ee;
  if (T[56] !== I) (ee = e(ql, { width: I })), (T[56] = I), (T[57] = ee);
  else ee = T[57];
  let q;
  if (T[58] !== I || T[59] !== Fe || T[60] !== R || T[61] !== Oe || T[62] !== pe)
    (q =
      pe.length === 0
        ? e(sr, { children: "No diff content" })
        : pe.map((At, Pt) => e(gx, { patch: At, filePath: R, firstLine: Oe, fileContent: Fe, dim: false, width: I }, Pt))),
      (T[58] = I),
      (T[59] = Fe),
      (T[60] = R),
      (T[61] = Oe),
      (T[62] = pe),
      (T[63] = q);
  else q = T[63];
  let X;
  if (T[64] !== q) (X = e(o, { flexDirection: "column", children: q })), (T[64] = q), (T[65] = X);
  else X = T[65];
  let oe;
  if (T[66] !== he)
    (oe = he && e(t, { dimColor: true, italic: true, children: "\u2026 diff truncated (exceeded 400 line limit)" })),
      (T[66] = he),
      (T[67] = oe);
  else oe = T[67];
  let xo;
  if (T[68] !== j || T[69] !== ee || T[70] !== X || T[71] !== oe)
    (xo = r(o, { flexDirection: "column", width: "100%", children: [j, ee, X, oe] })),
      (T[68] = j),
      (T[69] = ee),
      (T[70] = X),
      (T[71] = oe),
      (T[72] = xo);
  else xo = T[72];
  return xo;
}
export { f7t, m7t, Ckt, zUe, KU, Gie };
