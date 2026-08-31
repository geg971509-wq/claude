// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ix, TU } from "/$bunfs/root/chunk-f9h0bg01.js";
import { ne } from "/$bunfs/root/chunk-tx16jn0x.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { co } from "/$bunfs/root/chunk-fv016jr6.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { mo } from "/$bunfs/root/chunk-4sw5yxwb.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { M } from "/$bunfs/root/chunk-y2r26k83.js";
import { YR } from "/$bunfs/root/chunk-pbmajbn7.js";
import { wt, rP, C_, fg, O6, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Je, rn } from "/$bunfs/root/chunk-988p40e0.js";
import { o, t } from "/$bunfs/root/chunk-he2phymk.js";
import { LI, O5e, Nt, qv } from "/$bunfs/root/chunk-z9bhq3k9.js";
import { dv } from "/$bunfs/root/chunk-syabrr2b.js";
import { fe } from "/$bunfs/root/chunk-rycvm63e.js";
import { Be } from "/$bunfs/root/chunk-ek4tmwbt.js";
import { me } from "/$bunfs/root/chunk-489c3cyq.js";
import { Ee } from "/$bunfs/root/chunk-rp246vnd.js";
import { EF, Vce } from "/$bunfs/root/chunk-p1awcxk1.js";
import { xn } from "/$bunfs/root/chunk-hb6grkjg.js";
import { Mt } from "/$bunfs/root/chunk-fs02hzwy.js";
import { he, Mue } from "/$bunfs/root/chunk-h605j25g.js";
import { lX, E9, cX } from "/$bunfs/root/chunk-wn1jrcrk.js";
import { Cvt, VIn } from "/$bunfs/root/chunk-87pfeb5g.js";
import { p1, iB, Qnt, $P, A2e } from "/$bunfs/root/chunk-wfer9wy8.js";
import { Wge } from "/$bunfs/root/chunk-e7z75y3n.js";
import { ze } from "/$bunfs/root/chunk-4kafv9jq.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { A, C, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { d } from "/$bunfs/root/chunk-yz031c9r.js";
F();
var ee = ["default", "fullscreen"];
async function bUe(i, n, y, w, S, { responseStreaming: f, trial: R }) {
  await A2e();
  let T = await p1(y, "relaunch", { responseStreaming: f }, S);
  return Qnt(
    T,
    {
      freshIfNoTranscript: !0,
      extraArgs: n,
      proactivity: w,
      env: { CLAUDE_CODE_TUI_JUST_SWITCHED: i, ...(R && i === "fullscreen" ? VIn : {}), ...O6() },
      dropEnv: [
        "CLAUDE_CODE_NO_FLICKER",
        "CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN",
        "CLAUDE_CODE_FORCE_FULLSCREEN_UPSELL",
      ],
    },
    S,
  );
}
function wUe(i) {
  return `Couldn't switch renderers \u2014 ${i instanceof Error ? i.message : String(i)}. The setting was saved; restart Claude Code to apply it.`;
}
function eur(i, n) {
  return `Cannot switch renderers in this session \u2014 it has restrictions a restart can't carry over (${n.join("; ")}). Nothing was changed. Running /tui ${i} in a session started without them switches every later session too.`;
}
function oOn(i) {
  return `Staying on the default renderer without a restart \u2014 this session now has restrictions a restart can't carry over (${i.join("; ")}); the preference is saved.`;
}
function tur(i, n) {
  return `Staying on the ${i} renderer without a restart \u2014 ${n === "comment_monitor" ? "Claude is now auto-replying to artifact comments and a restart would stop the replies (stop the monitor via /tasks, or ask Claude to stop it)" : "work is now running in the background"}; the preference is saved.`;
}
var oTr = async (i, n, y) => {
  let w = y.trim().toLowerCase(),
    S = Nt() ? "fullscreen" : "default";
  if (w === "") {
    let m =
      qv() === "crash_auto_off"
        ? O5e()
          ? " (fullscreen was turned off on this machine after it repeatedly failed to start; /tui fullscreen retries)"
          : " (a fullscreen launch on this machine didn't finish starting last time; /tui fullscreen retries)"
        : "";
    return i(`Current renderer: ${S}${m}. Usage: /tui <${ee.join("|")}>`, { display: "system" }), null;
  }
  if (!ee.includes(w)) return i(`Unknown renderer "${w}". Usage: /tui <${ee.join("|")}>`, { display: "system" }), null;
  let f = w,
    R = () => {
      let m = he(n);
      return [...lX(m, Mue(n)), ...cX(m, TU())];
    },
    T = () => ({ proactivityLevel: n.getProactivityLevel(), toolPermissionContext: he(n) }),
    B = () => EF(n),
    z = () => Vce(n),
    E = () => Wge(n.taskRegistry.all());
  if (wt()) {
    let m = qv(),
      { error: k } = await rn("userSettings", { tui: f }, void 0, n.storageV5);
    if (k)
      return (
        i(
          mo(n.session)
            ? "Failed to save setting (detail withheld on this connection)."
            : `Failed to save setting: ${k.message}`,
          { display: "system" },
        ),
        null
      );
    await Cvt(n.storageV5);
    let p = YR();
    return (
      s("tengu_tui_command", {
        fullscreen: f === "fullscreen",
        from: c(S),
        to: c(f),
        from_entry_path: c(m),
        session_age_ms: Math.round(process.uptime() * 1000),
        bounce: !1,
        scroll_decay_curve: p.useDecayCurve,
        scroll_base: p.base,
        scroll_xtermjs: p.xtermJs,
      }),
      i(
        `Saved. Background sessions always use the fullscreen renderer while attached; the ${f} renderer will apply to sessions started directly with \`claude\`.`,
        { display: "system" },
      ),
      null
    );
  }
  if (fg())
    return (
      i("Screen-reader mode always uses the classic renderer, so the tui setting has no effect while it is active.", {
        display: "system",
      }),
      null
    );
  let Q = f === "fullscreen",
    D = Q === Nt();
  if (D && Je().tui === f)
    return await Cvt(n.storageV5), i(`Already using the ${f} renderer.`, { display: "system" }), null;
  let Y = (m) => {
      let k = E9(he(n), ix());
      if (k.length > 0) return s("tengu_tui_refused", { uncarriable: !0 }), eur(f, k);
      let p = E();
      if (p !== void 0)
        return (
          s("tengu_tui_refused", {
            active_tasks: p.activeTasks,
            comment_monitor: p.kind === "comment_monitor",
            ...(m && { deferred: m }),
          }),
          p.kind === "comment_monitor"
            ? "Cannot switch renderers while auto-replying to artifact comments \u2014 switching restarts Claude Code and would stop the replies. Stop the artifact comment monitor via /tasks (or ask Claude to stop it), then run /tui again."
            : "Cannot switch renderers while work is running in the background \u2014 wait for it to finish (or stop it via /tasks), then run /tui again."
        );
      return;
    },
    U;
  if (!D) {
    let m = Y();
    if (m === void 0) await $P(n.messages, n.storageV5), (m = Y(!0)), (U = { flags: R(), handoff: T() });
    if (m !== void 0) return i(m, { display: "system" }), null;
  }
  let g = qv(),
    { error: Z } = await rn("userSettings", { tui: f }, void 0, n.storageV5);
  if (Z)
    return (
      i(
        mo(n.session)
          ? "Failed to save setting (detail withheld on this connection)."
          : `Failed to save setting: ${Z.message}`,
        { display: "system" },
      ),
      null
    );
  await Cvt(n.storageV5);
  let N = YR(),
    L =
      (a.CLAUDE_CODE_TUI_JUST_SWITCHED === "fullscreen" || g === "downsell_on" || LI.downsellGateCached === !0) &&
      f === "default";
  if (
    (s("tengu_tui_command", {
      fullscreen: Q,
      from: c(S),
      to: c(f),
      from_entry_path: c(g),
      session_age_ms: Math.round(process.uptime() * 1000),
      bounce: L,
      scroll_decay_curve: N.useDecayCurve,
      scroll_base: N.base,
      scroll_xtermjs: N.xtermJs,
    }),
    D)
  )
    return i(`Already using the ${f} renderer.`, { display: "system" }), null;
  if (f === "default" && (L || g === "gb_on" || g === "settings_on") && rP() && Mt("allow_product_feedback"))
    return e(ge, {
      fromEntryPath: g,
      bounce: L,
      revertKind: L || g === "gb_on" ? "same_session" : "later_session",
      carryFlags: R,
      getMessages: B,
      getIsResponseStreaming: z,
      proactivity: T,
      relaunchBlocker: E,
      storageV5: n.storageV5,
      session: n.session,
      onDone: i,
    });
  let O = E();
  if (O !== void 0) return te(f, O, i);
  return bUe(f, U.flags, B(), U.handoff, n.storageV5, { responseStreaming: z() }).catch(
    (m) => (
      h(m),
      i(
        mo(n.session)
          ? iB(
              "Couldn't switch renderers (detail withheld on this connection). The setting was saved; restart Claude Code to apply it.",
              l(m),
            )
          : wUe(m),
        { display: "system" },
      ),
      null
    ),
  );
};
function te(i, n, y) {
  return (
    s("tengu_tui_refused", {
      active_tasks: n.activeTasks,
      comment_monitor: n.kind === "comment_monitor",
      deferred: !0,
    }),
    y(tur(i, n.kind), { display: "system" }),
    null
  );
}
var ce = "egcouldntcopytext",
  de = 1000;
function ge(ht) {
  let b = _(37),
    {
      fromEntryPath: j,
      bounce: H,
      revertKind: J,
      carryFlags: W,
      getMessages: X,
      getIsResponseStreaming: G,
      proactivity: P,
      relaunchBlocker: K,
      storageV5: q,
      session: re,
      onDone: I,
    } = ht,
    [se, pt] = u(""),
    [oe, yt] = u(0),
    [v, _t] = u(null),
    { columns: Ct } = Ee(),
    pe = C(!1),
    ye;
  if (b[0] === d)
    (ye = (St) => {
      if (pe.current) {
        return;
      }
      (pe.current = !0), _t(St.trim());
    }),
      (b[0] = ye);
  else ye = b[0];
  let ae = ye,
    _e;
  if (
    b[1] !== H ||
    b[2] !== W ||
    b[3] !== j ||
    b[4] !== G ||
    b[5] !== X ||
    b[6] !== I ||
    b[7] !== P ||
    b[8] !== K ||
    b[9] !== J ||
    b[10] !== re ||
    b[11] !== q ||
    b[12] !== v
  )
    (_e = () => {
      if (v === null) {
        return;
      }
      let we = !1;
      return (
        (async () => {
          if (v && v.toLowerCase().replace(/[^a-z]/g, "") !== ce) {
            let vt = co(v).slice(0, de);
            await C_("tengu_tui_optout_reason", {
              reason: vt,
              from_entry_path: c(j),
              bounce: H,
              downsell_gate: LI.downsellGateCached === !0,
              revert_kind: c(J),
              downsell_seen_count: ie().fullscreenDownsellSeenCount ?? 0,
            }).catch(h);
          }
          if ((await ne(dv * 2), we)) {
            return;
          }
          let Ce = E9(P().toolPermissionContext, ix());
          if (Ce.length > 0) {
            s("tengu_tui_refused", { uncarriable: !0 }), I(oOn(Ce), { display: "system" });
            return;
          }
          let Se = K();
          if (Se !== void 0) {
            te("default", Se, I);
            return;
          }
          bUe("default", W(), X(), P(), q, { responseStreaming: G() }).catch((le) => {
            h(le),
              I(
                mo(re)
                  ? iB(
                      "Couldn't switch renderers (detail withheld on this connection). The setting was saved; restart Claude Code to apply it.",
                      l(le),
                    )
                  : wUe(le),
                { display: "system" },
              );
          });
        })(),
        () => {
          we = !0;
        }
      );
    }),
      (b[1] = H),
      (b[2] = W),
      (b[3] = j),
      (b[4] = G),
      (b[5] = X),
      (b[6] = I),
      (b[7] = P),
      (b[8] = K),
      (b[9] = J),
      (b[10] = re),
      (b[11] = q),
      (b[12] = v),
      (b[13] = _e);
  else _e = b[13];
  let ve;
  if (
    b[14] !== H ||
    b[15] !== W ||
    b[16] !== j ||
    b[17] !== G ||
    b[18] !== X ||
    b[19] !== I ||
    b[20] !== P ||
    b[21] !== K ||
    b[22] !== J ||
    b[23] !== q ||
    b[24] !== v
  )
    (ve = [v, j, H, J, W, X, G, P, K, q, I]),
      (b[14] = H),
      (b[15] = W),
      (b[16] = j),
      (b[17] = G),
      (b[18] = X),
      (b[19] = I),
      (b[20] = P),
      (b[21] = K),
      (b[22] = J),
      (b[23] = q),
      (b[24] = v),
      (b[25] = ve);
  else ve = b[25];
  A(_e, ve);
  let Re, ke;
  if (b[26] === d) (Re = () => ae("")), (ke = { context: "Settings" }), (b[26] = Re), (b[27] = ke);
  else (Re = b[26]), (ke = b[27]);
  if ((Be("confirm:no", Re, ke), v !== null)) {
    let x;
    if (b[28] === d)
      (x = e(o, {
        paddingX: 1,
        children: e(t, { dimColor: !0, children: "Switching back to the classic renderer\u2026" }),
      })),
        (b[28] = x);
    else x = b[28];
    return x;
  }
  let x;
  if (b[29] === d) (x = () => ae("")), (b[29] = x);
  else x = b[29];
  let be, Te;
  if (b[30] === d)
    (be = r(fe, {
      children: [
        e(M, { chord: "enter", action: "send" }),
        e(ze, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "skip" }),
      ],
    })),
      (Te = e(t, { children: "To help us make fullscreen mode better, what made you switch back?" })),
      (b[30] = be),
      (b[31] = Te);
  else (be = b[30]), (Te = b[31]);
  let Le;
  if (b[32] === d) (Le = e(t, { children: ">" })), (b[32] = Le);
  else Le = b[32];
  const ue = Math.max(10, Ct - 8);
  let Ie;
  if (b[33] !== oe || b[34] !== se || b[35] !== ue)
    (Ie = r(me, {
      title: "Fullscreen feedback",
      onCancel: x,
      isCancelActive: !1,
      inputGuide: be,
      children: [
        Te,
        r(o, {
          flexDirection: "row",
          gap: 1,
          children: [
            Le,
            e(xn, {
              value: se,
              onChange: pt,
              onSubmit: ae,
              focus: !0,
              showCursor: !0,
              columns: ue,
              cursorOffset: oe,
              onChangeCursorOffset: yt,
            }),
          ],
        }),
      ],
    })),
      (b[33] = oe),
      (b[34] = se),
      (b[35] = ue),
      (b[36] = Ie);
  else Ie = b[36];
  return Ie;
}
export { bUe, wUe, eur, oOn, tur, oTr };
