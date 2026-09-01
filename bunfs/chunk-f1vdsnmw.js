// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ke } from "/$bunfs/root/chunk-4xj01xwv.js";
import { ae } from "/$bunfs/root/chunk-386w1sy8.js";
import { o, t, hn } from "/$bunfs/root/chunk-he2phymk.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { ht } from "/$bunfs/root/chunk-ek4tmwbt.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { gY, Yr, Zy, yC, R3, kr, el, Ye, Ot, wC, $l } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { y } from "/$bunfs/root/chunk-ca80fke8.js";
import { Et } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { mir, tYe, gAn, gir, hir, bTt } from "/$bunfs/root/chunk-1yr12dqr.js";
import { mn } from "/$bunfs/root/chunk-htrft0p0.js";
import { ge } from "/$bunfs/root/chunk-c3bffkxg.js";
import { Lo } from "/$bunfs/root/chunk-5c5qq1s7.js";
import { Ba } from "/$bunfs/root/chunk-syabrr2b.js";
import { Ee } from "/$bunfs/root/chunk-rp246vnd.js";
import { Ui } from "/$bunfs/root/chunk-8ktvd0rh.js";
import { W, At } from "/$bunfs/root/chunk-ht28m404.js";
import { np, Hd } from "/$bunfs/root/chunk-dxft4b6s.js";
import { Dy, Ce } from "/$bunfs/root/chunk-1y0jc48h.js";
import { ZC } from "/$bunfs/root/chunk-p70hxvm1.js";
import {
  kne,
  lg,
  V2,
  K2,
  BS,
  ETe,
  Fue,
  jz,
  FF,
  Wz,
  DM,
  Pk,
  qz,
  Mm,
  VD,
  Cjt,
  ew,
  $F,
} from "/$bunfs/root/chunk-83h0j7w2.js";
import { epn, Smt } from "/$bunfs/root/chunk-eb5y4yrx.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { fe } from "/$bunfs/root/chunk-rycvm63e.js";
import { Jm } from "/$bunfs/root/chunk-yzvg79ww.js";
import { kBe } from "/$bunfs/root/chunk-262f91ef.js";
import { sr } from "/$bunfs/root/chunk-vnpdqx6v.js";
import { Ds } from "/$bunfs/root/chunk-pzr9satk.js";
import { Kf } from "/$bunfs/root/chunk-sys0j174.js";
import { Ts } from "/$bunfs/root/chunk-b6a5y1qe.js";
import { fo } from "/$bunfs/root/chunk-489c3cyq.js";
import { ze } from "/$bunfs/root/chunk-4kafv9jq.js";
import { U, e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { mt } from "/$bunfs/root/chunk-d5bnjcbw.js";
import { B, A, z, fv, C, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { gG } from "/$bunfs/root/chunk-zgfc288e.js";
import { Yee } from "/$bunfs/root/chunk-zze8764r.js";
import { C5e } from "/$bunfs/root/chunk-vx3kc9d2.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
F();
function oo({ canEnter: n, onEnter: l }) {
  let [m, p] = u(false),
    w = C(false),
    {
      query: j,
      cursorOffset: x,
      handleKeyDown: V,
      handlePaste: te,
    } = np({
      isActive: m,
      onExit: () => {
        (w.current = false), p(false);
      },
    }),
    I = B(() => {
      l?.(), (w.current = true), p(true);
    }, [l]);
  return (
    ht(
      {
        "settings:search": () => {
          if (w.current) return false;
          I();
        },
      },
      { context: "Settings", isActive: n && !m },
    ),
    {
      isSearchMode: m,
      isSearchModeRef: w,
      query: j,
      cursorOffset: x,
      handleKeyDown: (K) => {
        if (K.defaultPrevented) return;
        if (w.current) {
          V(K);
          return;
        }
        if (!n) return;
        if (K.key === "/" && !K.ctrl && !K.meta) K.preventDefault(), I();
      },
      handlePaste: te,
    }
  );
}
function Jt() {
  let n = $l()?.model_notices;
  if (typeof n !== "object" || n === null || Array.isArray(n)) return {};
  let l = {};
  for (let [m, p] of Object.entries(n)) if (m.trim().length > 0 && typeof p === "string" && p.length > 0) l[m] = p;
  return l;
}
function to(n) {
  let l = Jt();
  if (Object.keys(l).length === 0) return;
  let m = n.toLowerCase(),
    p = Ot(n).toLowerCase(),
    w = Ye(p).toLowerCase();
  for (let [j, x] of Object.entries(l)) {
    let V = j.toLowerCase();
    if (V === m || V === p || V === w || p.includes(V)) return x;
  }
  return;
}
function QLn(n, l, m) {
  if (m || !lg(l)) return;
  return ew(l, n);
}
function ZLn(n, l = false, m = false) {
  if (!n) return;
  if (l) return `${m ? "effort:" : bTt} ultracode \xB7 xhigh effort + dynamic workflows for maximum thoroughness`;
  return `${m ? "effort:" : Ne(n)} ${n} \xB7 /effort`;
}
function Ne(n) {
  switch (n) {
    case "low":
      return mir;
    case "medium":
      return tYe;
    case "high":
      return gAn;
    case "xhigh":
      return gir;
    case "max":
      return hir;
    default:
      return gAn;
  }
}
function eMn(n) {
  if (n) {
    let l = gG(Lo("theme", "dark").value);
    return mt("effortUltra", l)("ultracode");
  }
  return;
}
function tMn(n) {
  let l = n.filter(Boolean).join("  ") || void 0;
  return l ? { content: ` ${l} `, position: "top", align: "end", offset: 0 } : void 0;
}
var T = "__NO_PREFERENCE__",
  Ct = 14;
function AQ({
  initial: n,
  sessionModel: l,
  onSelect: m,
  onSetDefault: p,
  onCancel: w,
  isStandaloneCommand: j,
  showFastModeNotice: x,
  headerText: V,
  options: te,
  skipSettingsWrite: I,
}) {
  let { storageV5: X, credentials: K } = ge(),
    Ro = At(),
    { rows: Dt } = Ui(Ee()),
    Ft = W((i) => (Yr() ? i.fastMode : false)),
    [To] = u(Ft ?? false),
    q = z(() => te ?? epn(To), [te, To]),
    Rt = ZC(),
    Tt = Ts(),
    ye = z(() => Yee(l, n), [l, n, Rt, Tt]),
    Be = ye ?? n,
    Ve = Be === null ? T : (Smt(q, Be) ?? Be),
    [Bo, Vo, Ze] = Dy(Ve),
    [re] = u({ current: Be, value: Ve, sessionOverride: ye }),
    [_o] = mn(),
    Bt = Ba(),
    Vt = hn(),
    Kr = false,
    qr = Vt ? true : false,
    Gr = false,
    {
      isSearchMode: de,
      isSearchModeRef: Me,
      query: Q,
      cursorOffset: _t,
      handleKeyDown: Ut,
      handlePaste: $t,
    } = oo({ canEnter: false, onEnter: () => y("model_picker_search") }),
    Ht = de || Q !== "" ? 4 : 0,
    Ao = Yr() && (x || (Zy() && !R3())),
    Nt = Ao ? 3 : 0,
    jt = ye !== null ? 3 : 0,
    It = Math.max(2, Math.min(10, Math.floor((Dt - Ct - Ht - Nt - jt) / 2))),
    [_e, Uo, Ae] = Dy(false),
    Ue = Kf(),
    Xt = W((i) => i.ultracode),
    [J, $o] = u(Xt ? "ultracode" : Ue !== void 0 ? $F(Ue) : void 0),
    Ho = z(() => {
      let i = [];
      for (let [a, v, R] of [
        [re.current, re.value, "Current model"],
        [re.sessionOverride === null ? null : n, n === null ? T : (Smt(q, n) ?? n), "Base model"],
      ])
        if (a !== null && !q.some((L) => L.value === v) && !i.some((L) => L.value === a) && kr(a))
          i.push({ value: a, label: wC(a), description: R });
      if (i.length === 0) return q;
      let c = q.findIndex((a) => a.disabled === true);
      if (c === -1) return [...q, ...i];
      return [...q.slice(0, c), ...i, ...q.slice(c)];
    }, [q, re, n]),
    $e = z(
      () =>
        Ho.map((i) => {
          let c = i.value === null ? T : i.value,
            a = N(c),
            v = a ? to(a) : void 0,
            L = ((v ? (i.description ? `${i.description} \xB7 ${v}` : v) : i.description) ?? "")
              .replaceAll("Opus 5", mt("claude", _o)("Opus 5"))
              .replace(/\$[\d.]+\/\$[\d.]+ per Mtok/, (Z) =>
                i.promoListPrice && kBe() && ae.level > 0 ? `${ae.dim.strikethrough(i.promoListPrice)} ${Z}` : Z,
              );
          return { ...i, value: c, description: L };
        }),
      [Ho, _o],
    ),
    D = z(() => {
      if (!Q) return $e;
      let i = Q.toLowerCase();
      return $e.filter(
        (c) =>
          (typeof c.label === "string" ? c.label : "").toLowerCase().includes(i) ||
          Et(c.description ?? "")
            .toLowerCase()
            .includes(i),
      );
    }, [$e, Q]),
    Kt = z(() => (D.some((i) => i.value === re.value) ? re.value : (D[0]?.value ?? void 0)), [D, re.value]),
    No = Math.min(It, D.length),
    jo = Math.max(0, D.length - No),
    ue = D.some((i) => i.value === Bo) ? Bo : void 0,
    Io = $e.find((i) => i.value === ue),
    Xo = Io?.label,
    eo = Io?.disabled === true,
    G = N(ue);
  A(() => {
    import("/$bunfs/root/chunk-skwsm25m.js").then((i) => i.fetchBootstrapData(X, K));
  }, [X, K]);
  let [, qt] = fv((i) => i + 1, 0);
  A(() => {
    if (!G?.includes("application-inference-profile")) return;
    let i = false;
    return (
      gY(G).then(() => {
        if (!i) qt();
      }),
      () => {
        i = true;
      }
    );
  }, [G]);
  let { supportsEffort: Gt, supportsMax: Wt, supportsXHigh: Yt, supportsUltra: Qt, defaultEffort: Ko } = Je(ue),
    He =
      !_e && !!G && DM(G)
        ? Ko
        : J === "ultracode" && !Qt
          ? G
            ? ETe(G)
            : "high"
          : (J === "max" && !Wt) || (J === "xhigh" && !Yt)
            ? "high"
            : J,
    me = G && He !== void 0 && He !== "ultracode" ? FF(He, G) : He,
    zt = B(
      (i) => {
        if ((Vo(i), !Ae() && Ue === void 0)) $o(Fo(i));
      },
      [Ae, Ue, Vo],
    ),
    qo = B(
      (i) => {
        let c = Ze(),
          a = D.find((Z) => Z.value === c);
        if (a === void 0 || a.disabled === true) return;
        let v = Je(c);
        if (!v.supportsEffort) return;
        let R = N(c),
          L = !Ae() && !!R && DM(R);
        $o((Z) =>
          Pt(
            L ? v.defaultEffort : (Z ?? v.defaultEffort),
            i,
            v.capLevels,
            v.supportsMax,
            v.supportsXHigh,
            v.supportsUltra,
          ),
        ),
          Uo(true);
      },
      [D, Ze, Ae, Uo],
    );
  ht(
    {
      "modelPicker:decreaseEffort": () => {
        if (Me.current) return false;
        qo("left");
      },
      "modelPicker:increaseEffort": () => {
        if (Me.current) return false;
        qo("right");
      },
      "modelPicker:thisSessionOnly": () => {
        if (Me.current) return false;
        if (!p) return;
        let i = Ze(),
          c = D.find((a) => a.value === i);
        if (c === void 0) return;
        if (c.disabled === true) return;
        Go(c.value);
      },
    },
    { context: "ModelPicker" },
  );
  function Go(i) {
    let c = N(i),
      a = c && J !== void 0 && J !== "ultracode" ? FF(J, c) : J;
    if ((s("tengu_model_command_menu_effort", { effort: ke(a) }), a === "ultracode" && _e && !I)) {
      Mm(X);
      let R = c && !BS(c) ? ETe(c) : void 0;
      Ro((L) => ({ ...L, sessionEffort: Pk(R ?? "xhigh"), ultracode: R === void 0 }));
    } else if (!I && _e) {
      let R = a === "ultracode" ? "xhigh" : a,
        L = Wz(R);
      if (L !== void 0) Cjt(L, c ?? el(), X);
      Mm(X), Ro((Z) => ({ ...Z, sessionEffort: qz(R), ultracode: false }));
    }
    let v = _e && c && lg(c) && (a !== "ultracode" || I) ? a : void 0;
    if (i === T) {
      m(null, v);
      return;
    }
    m(i, v);
  }
  let Wo = r(o, {
    flexDirection: "column",
    onKeyDown: Ut,
    onPaste: $t,
    children: [
      r(o, {
        flexDirection: "column",
        children: [
          r(o, {
            marginBottom: 1,
            flexDirection: "column",
            children: [
              e(t, { color: "remember", bold: true, children: "Select model" }),
              e(t, {
                dimColor: true,
                children:
                  V ??
                  "Switch between Claude models. Your pick becomes the default for new sessions. For other/previous model names, specify with --model.",
              }),
              ye !== null &&
                r(t, {
                  dimColor: true,
                  children: [
                    "Currently using ",
                    wC(ye),
                    " for this session only (base model: ",
                    wC(n),
                    "). Selecting a model here replaces both.",
                  ],
                }),
            ],
          }),
          r(o, {
            flexDirection: "column",
            marginBottom: 1,
            children: [
              (de || Q !== "") &&
                e(o, {
                  marginBottom: 1,
                  flexDirection: "column",
                  children: e(Hd, {
                    query: Q,
                    placeholder: "Search models\u2026",
                    isFocused: de,
                    isTerminalFocused: Bt,
                    cursorOffset: _t,
                  }),
                }),
              e(o, {
                flexDirection: "column",
                children: e(Ce, {
                  defaultValue: Ve,
                  selectedValue: Ve,
                  defaultFocusValue: Kt,
                  options: D,
                  onChange: (i) => {
                    if (Me.current) return;
                    if (p) p(i === T ? null : i);
                    Go(i);
                  },
                  onFocus: zt,
                  onCancel: () => {
                    if (Me.current) return;
                    w?.();
                  },
                  visibleOptionCount: No,
                  isDisabled: de,
                }),
              }),
              Q !== "" && D.length === 0 && e(sr, { children: `No models match "${Q}"` }),
              jo > 0 && e(o, { paddingLeft: 3, children: e(Jm, { count: jo, unit: "model" }) }),
            ],
          }),
          ue !== void 0 &&
            !eo &&
            e(o, {
              marginBottom: 1,
              flexDirection: "column",
              children: Gt
                ? r(U, {
                    children: [
                      r(t, {
                        dimColor: true,
                        children: [
                          e(Te, { effort: me }),
                          " ",
                          me === "xhigh" ? "xHigh" : me ? C5e(me) : "",
                          " ",
                          "effort",
                          me === Ko ? " (default)" : "",
                          !de &&
                            r(t, {
                              color: "subtle",
                              children: [" ", e(M, { chord: ["left", "right"], action: "adjust" })],
                            }),
                        ],
                      }),
                      me === "max" ? e(t, { color: "subtle", children: kne }) : null,
                    ],
                  })
                : r(t, {
                    color: "subtle",
                    children: [e(Te, { effort: void 0 }), " Effort not supported", Xo ? ` for ${Xo}` : ""],
                  }),
            }),
          Ao
            ? x
              ? e(o, {
                  marginBottom: 1,
                  children: r(t, {
                    dimColor: true,
                    children: [
                      "Fast mode is ",
                      e(t, { bold: true, children: "ON" }),
                      " and available with",
                      " ",
                      yC(),
                      " (/fast). Switching to other models turns off fast mode.",
                    ],
                  }),
                })
              : e(o, {
                  marginBottom: 1,
                  children: r(t, {
                    dimColor: true,
                    children: ["Use ", e(t, { bold: true, children: "/fast" }), " to turn on Fast mode (", yC(), ")."],
                  }),
                })
            : null,
        ],
      }),
      j &&
        e(Ds, {
          children: de
            ? r(fe, {
                children: [
                  e(t, { children: "Type to filter" }),
                  e(M, { chord: ["enter", "down"], action: "list" }),
                  e(M, { chord: "escape", action: "clear" }),
                ],
              })
            : r(fe, {
                children: [
                  ue !== void 0 && !eo && e(M, { chord: "enter", action: p ? "set as default" : "confirm" }),
                  ue !== void 0 && !eo && p && e(M, { chord: "s", action: "use this session only" }),
                  false,
                  e(ze, { action: "select:cancel", context: "Select", fallback: "Esc", description: "cancel" }),
                ],
              }),
        }),
    ],
  });
  if (!j) return Wo;
  return e(fo, { color: "permission", children: Wo });
}
function N(n) {
  if (!n) return;
  return n === T ? el() : Ot(n);
}
function Te(Bs) {
  let Ir = _(5),
    { effort: Qe } = Bs;
  const St = Qe ? "claude" : "subtle";
  let Do;
  if (Ir[0] !== Qe) (Do = Qe === "ultracode" ? bTt : Ne(Qe ?? "low")), (Ir[0] = Qe), (Ir[1] = Do);
  else Do = Ir[1];
  let Xr;
  if (Ir[2] !== St || Ir[3] !== Do) (Xr = e(t, { color: St, children: Do })), (Ir[2] = St), (Ir[3] = Do), (Ir[4] = Xr);
  else Xr = Ir[4];
  return Xr;
}
function Pt(n, l, m, p, w, j) {
  let x = m.filter((X) => (X !== "max" || p) && (X !== "xhigh" || w));
  if (j) x.push("ultracode");
  let V = n === "ultracode" && !j ? (p ? "max" : "high") : (n === "max" && !p) || (n === "xhigh" && !w) ? "high" : n,
    te = x.indexOf(V),
    I = te !== -1 ? te : x.length - 1;
  if (l === "right") return x[(I + 1) % x.length];
  else return x[(I - 1 + x.length) % x.length];
}
function Fo(n) {
  let l = N(n) ?? el();
  return VD(l);
}
function Je(n) {
  let l = N(n),
    m = Fo(n);
  if (!l)
    return {
      supportsEffort: false,
      supportsMax: false,
      supportsXHigh: false,
      supportsUltra: false,
      capLevels: ["low", "medium", "high"],
      defaultEffort: m,
    };
  return {
    supportsEffort: lg(l),
    supportsMax: V2(l) && Fue("max", l),
    supportsXHigh: K2(l) && Fue("xhigh", l),
    supportsUltra: BS(l),
    capLevels: jz(l),
    defaultEffort: FF(m, l),
  };
}
export { QLn, ZLn, eMn, tMn, AQ };
