// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { o$e } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { Hr } from "/$bunfs/root/chunk-ca80fke8.js";
import { Hu, l } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { cbn, ve } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { MN } from "/$bunfs/root/chunk-2rx5nghb.js";
import { ife } from "/$bunfs/root/chunk-s4smmnta.js";
import { Lee } from "/$bunfs/root/chunk-zze8764r.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { o, t } from "/$bunfs/root/chunk-he2phymk.js";
import { Be } from "/$bunfs/root/chunk-ek4tmwbt.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { Ee } from "/$bunfs/root/chunk-rp246vnd.js";
import { Ro } from "/$bunfs/root/chunk-59pkbjrf.js";
import { Ce } from "/$bunfs/root/chunk-1y0jc48h.js";
import { fe } from "/$bunfs/root/chunk-rycvm63e.js";
import { wo } from "/$bunfs/root/chunk-hyj9nfhh.js";
import { ett } from "/$bunfs/root/chunk-8ejbwz51.js";
import { rr } from "/$bunfs/root/chunk-0nfwsvfd.js";
import { ze } from "/$bunfs/root/chunk-4kafv9jq.js";
import { uv } from "/$bunfs/root/chunk-wnc75h2x.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { B, A, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
F();
function q(se) {
  let me = _(8),
    [ie, le] = u(false),
    [ae, ce] = u(null),
    [de, so] = u(null),
    Me;
  if (me[0] !== se)
    (Me = async (U) => {
      le(true), ce(null), so(U), s("tengu_teleport_resume_session", { source: c(se), session_id: ve(U.id) });
      try {
        let io = await Hr("teleport_resume", () => Lee(U.id));
        return o$e({ sessionId: U.id }), le(false), io;
      } catch (W) {
        let I = W;
        let lo = {
          message: I instanceof Hu ? I.message : l(I),
          formattedMessage: I instanceof Hu ? I.formattedMessage : void 0,
          isOperationError: I instanceof Hu,
        };
        return ce(lo), le(false), null;
      }
    }),
      (me[0] = se),
      (me[1] = Me);
  else Me = me[1];
  let ue = Me,
    W;
  if (me[2] === d)
    (W = () => {
      ce(null);
    }),
      (me[2] = W);
  else W = me[2];
  let ao = W,
    Pe;
  if (me[3] !== ae || me[4] !== ie || me[5] !== ue || me[6] !== de)
    (Pe = { resumeSession: ue, isResuming: ie, error: ae, selectedSession: de, clearError: ao }),
      (me[3] = ae),
      (me[4] = ie),
      (me[5] = ue),
      (me[6] = de),
      (me[7] = Pe);
  else Pe = me[7];
  return Pe;
}
F();
var pe = "Updated",
  Ie = "  ";
function z({ onSelect: y, onCancel: a, isEmbedded: C = false }) {
  let { rows: D } = Ee(),
    [p, L] = u([]),
    [R, T] = u(null),
    [w, h] = u(true),
    [m, v] = u(null),
    [K, Q] = u(false),
    [Re, X] = u(false),
    [be, De] = u(1),
    Z = Ro("confirm:no", "Confirmation", "Esc"),
    O = B(async () => {
      try {
        h(true), v(null);
        let i = await ife();
        T(i), n(`Current repository: ${i || "not detected"}`);
        let f = await cbn(),
          S = f;
        if (i)
          (S = f.filter((P) => {
            if (!P.repo) return false;
            return `${P.repo.owner.login}/${P.repo.name}` === i;
          })),
            n(`Filtered ${S.length} sessions for repo ${i} from ${f.length} total`);
        let re = [...S].sort((P, ne) => {
          let Fe = new Date(P.updated_at);
          return new Date(ne.updated_at).getTime() - Fe.getTime();
        });
        L(re);
      } catch (i) {
        let f = i instanceof Error ? i.message : String(i);
        n(`Error loading code sessions: ${f}`), v(Ke(f));
      } finally {
        h(false), Q(false);
      }
    }, []),
    we = () => {
      Q(true), O();
    };
  Be("confirm:no", a, { context: "Confirmation" });
  function N(i) {
    if (i.ctrl && i.key === "c") {
      i.preventDefault(), a();
      return;
    }
    if (i.ctrl && i.key === "r" && m) {
      i.preventDefault(), we();
      return;
    }
    if (m !== null && i.key === "return") {
      i.preventDefault(), a();
      return;
    }
  }
  let _e = B(() => {
    X(true), O();
  }, [X, O]);
  if (!Re) return e(ett, { onComplete: _e });
  if (w)
    return e(o, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: N,
      children: e(rr, {
        message: "Loading Claude Code sessions\u2026",
        bold: true,
        subtitle: K ? "Retrying\u2026" : "Fetching your Claude Code sessions\u2026",
      }),
    });
  if (m)
    return r(o, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: N,
      children: [
        e(t, { bold: true, color: "error", children: "Error loading Claude Code sessions" }),
        $e(m),
        r(t, {
          dimColor: true,
          children: [
            "Press ",
            e(t, { bold: true, children: "Ctrl+R" }),
            " to retry \xB7 Press",
            " ",
            e(t, { bold: true, children: Z }),
            " to cancel",
          ],
        }),
      ],
    });
  if (p.length === 0)
    return r(o, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: N,
      children: [
        r(t, { bold: true, children: ["No Claude Code sessions found", R && r(t, { children: [" for ", R] })] }),
        e(o, {
          marginTop: 1,
          children: r(t, { dimColor: true, children: ["Press ", e(t, { bold: true, children: Z }), " to cancel"] }),
        }),
      ],
    });
  let ee = p.map((i) => ({ ...i, timeString: MN(new Date(i.updated_at)) })),
    oe = Math.max(pe.length, ...ee.map((i) => i.timeString.length)),
    te = ee.map(({ timeString: i, title: f, id: S }) => ({ label: `${i.padEnd(oe, " ")}  ${f}`, value: S })),
    Y = 7,
    j = Math.max(1, C ? Math.min(p.length, 5, D - 6 - Y) : Math.min(p.length, D - 1 - Y)),
    ke = j + Y,
    Le = p.length > j;
  return r(o, {
    flexDirection: "column",
    padding: 1,
    height: ke,
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: N,
    children: [
      r(t, {
        bold: true,
        children: [
          "Select a session to resume",
          Le && r(t, { dimColor: true, children: [" ", "(", be, " of ", p.length, ")"] }),
          R && r(t, { dimColor: true, children: [" (", R, ")"] }),
          ":",
        ],
      }),
      r(o, {
        flexDirection: "column",
        marginTop: 1,
        flexGrow: 1,
        children: [
          e(o, { marginLeft: 2, children: r(t, { bold: true, children: [pe.padEnd(oe, " "), Ie, "Session Title"] }) }),
          e(Ce, {
            visibleOptionCount: j,
            options: te,
            onChange: (i) => {
              let f = p.find((S) => S.id === i);
              if (f) y(f);
            },
            onFocus: (i) => {
              let f = te.findIndex((S) => S.value === i);
              if (f >= 0) De(f + 1);
            },
          }),
        ],
      }),
      e(o, {
        flexDirection: "row",
        children: e(t, {
          dimColor: true,
          children: r(fe, {
            children: [
              e(M, { chord: ["up", "down"], action: "select" }),
              e(M, { chord: "enter", action: "confirm" }),
              e(ze, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "cancel" }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Ke(y) {
  let a = y.toLowerCase();
  if (a.includes("fetch") || a.includes("network") || a.includes("timeout")) return "network";
  if (
    a.includes("auth") ||
    a.includes("token") ||
    a.includes("permission") ||
    a.includes("oauth") ||
    a.includes("not authenticated") ||
    a.includes("/login") ||
    a.includes("console account") ||
    a.includes("403")
  )
    return "auth";
  if (a.includes("api") || a.includes("rate limit") || a.includes("500") || a.includes("529")) return "api";
  return "other";
}
function $e(y) {
  switch (y) {
    case "network":
      return e(o, {
        marginY: 1,
        flexDirection: "column",
        children: e(t, { dimColor: true, children: "Check your internet connection" }),
      });
    case "auth":
      return r(o, {
        marginY: 1,
        flexDirection: "column",
        children: [
          e(t, { dimColor: true, children: "Teleport requires a Claude account" }),
          r(t, {
            dimColor: true,
            children: [
              "Run ",
              e(t, { bold: true, children: "/login" }),
              ' and select "Claude account with subscription"',
            ],
          }),
        ],
      });
    case "api":
      return e(o, {
        marginY: 1,
        flexDirection: "column",
        children: e(t, { dimColor: true, children: "Sorry, Claude encountered an error" }),
      });
    case "other":
      return e(o, {
        marginY: 1,
        flexDirection: "row",
        children: e(t, { dimColor: true, children: "Sorry, Claude Code encountered an error" }),
      });
  }
}
function Nme(Ho) {
  let x = _(30),
    { onComplete: ge, onCancel: xe, onError: b, isEmbedded: Ae, source: G } = Ho,
    Te = Ae === void 0 ? false : Ae,
    { resumeSession: ye, isResuming: Oo, error: g, selectedSession: V } = q(G),
    Ne,
    qe;
  if (x[0] !== G)
    (Ne = () => {
      s("tengu_teleport_started", { source: c(G) });
    }),
      (qe = [G]),
      (x[0] = G),
      (x[1] = Ne),
      (x[2] = qe);
  else (Ne = x[1]), (qe = x[2]);
  A(Ne, qe);
  let Ge;
  if (x[3] !== g || x[4] !== ge || x[5] !== b || x[6] !== ye)
    (Ge = async (Yo) => {
      let He = await ye(Yo);
      if (He) ge(He);
      else if (g) {
        if (b) b(g.message, g.formattedMessage);
      }
    }),
      (x[3] = g),
      (x[4] = ge),
      (x[5] = b),
      (x[6] = ye),
      (x[7] = Ge);
  else Ge = x[7];
  let he = Ge,
    Oe;
  if (x[8] !== xe)
    (Oe = () => {
      s("tengu_teleport_cancelled", {}), xe();
    }),
      (x[8] = xe),
      (x[9] = Oe);
  else Oe = x[9];
  let H = Oe;
  const Se = !!g && !b;
  let Ye;
  if (x[10] !== Se) (Ye = { context: "Global", isActive: Se }), (x[10] = Se), (x[11] = Ye);
  else Ye = x[11];
  Be("app:interrupt", H, Ye);
  let J;
  if (x[12] !== g || x[13] !== b) (J = !!g && !b && uv()), (x[12] = g), (x[13] = b), (x[14] = J);
  else J = x[14];
  let je;
  if (x[15] !== J) (je = { context: "Confirmation", isActive: J }), (x[15] = J), (x[16] = je);
  else je = x[16];
  if ((Be("confirm:no", H, je), Oo && V)) {
    let E;
    if (x[17] === d)
      (E = r(o, {
        flexDirection: "row",
        children: [e(wo, {}), e(t, { bold: true, children: "Resuming session\u2026" })],
      })),
        (x[17] = E);
    else E = x[17];
    let k;
    if (x[18] !== V.title)
      (k = r(o, {
        flexDirection: "column",
        padding: 1,
        children: [E, r(t, { dimColor: true, children: ['Loading "', V.title, '"\u2026'] })],
      })),
        (x[18] = V.title),
        (x[19] = k);
    else k = x[19];
    return k;
  }
  if (g && !b) {
    let E;
    if (x[20] === d) (E = e(t, { bold: true, color: "error", children: "Failed to resume session" })), (x[20] = E);
    else E = x[20];
    let k;
    if (x[21] !== g.message) (k = e(t, { dimColor: true, children: g.message })), (x[21] = g.message), (x[22] = k);
    else k = x[22];
    let Ue;
    if (x[23] === d)
      (Ue = e(o, {
        marginTop: 1,
        children: e(t, { dimColor: true, italic: true, children: e(M, { chord: "escape", action: "cancel" }) }),
      })),
        (x[23] = Ue);
    else Ue = x[23];
    let We;
    if (x[24] !== k)
      (We = r(o, { flexDirection: "column", padding: 1, children: [E, k, Ue] })), (x[24] = k), (x[25] = We);
    else We = x[25];
    return We;
  }
  let E;
  if (x[26] !== H || x[27] !== he || x[28] !== Te)
    (E = e(z, { onSelect: he, onCancel: H, isEmbedded: Te })), (x[26] = H), (x[27] = he), (x[28] = Te), (x[29] = E);
  else E = x[29];
  return E;
}
export { Nme };
