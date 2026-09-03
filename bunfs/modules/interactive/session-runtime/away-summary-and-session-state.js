// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $0t, $n, A, AHt, AX, Ab, Ae, At, B, Be, C, Ckt, Cnt, D, D4, Dn, Dt, Eat, Ee, Ege, Eh, F, Fy, G7t, GL, GX, Gie, Gzn, H8, HHt, Hge, Hh, Hi, Hn, Hv, I, Iat, Ibe, Id, Idn, Ip, Iu, J, Jkt, L6, LUe, Lt, Nt, Nx, O, Oc, Or, Os, Ox, P8t, Pa, Pp, Py, Q, Q0, Qj, Qm, R, RNt, RW, Ro, Sd, Sde, T5e, T9e, TRe, Tke, Tq, U, UF, Ub, Uc, Uln, VA, VUe, VVe, Va, Vn, Vt, W, W7t, Wde, We, XQ, Xe, Xn, Xp, Yh, Ys, ZC, Zke, Zkt, _, _be, _o, a, a2e, aX, at, b9, bQ, br, bxe, c, cc, ckt, cln, cs, ct, d, d5t, d6e, dBe, dE, dIe, di, dle, dln, dy, e, e0t, e3n, e7t, eNt, ece, ee, eh, et, ev, ew, f, f7t, fa, fg, fnt, g, ge, ggt, gk, h, hBe, hn, ht, hx, i, iHt, id, ie, io, j3e, jRe, jYt, j_, je, jsn, k, ke, l, m, m2e, mR, mn, n, n0t, nX, ncn, nf, nl, o, o0t, o7, oE, oge, oie, or, p, pAe, pH, pdt, pq, q, q7t, qH, qat, ql, qn, r, r0t, rB, rM, rr, s, sl, sn, sr, sze, t, t0t, tH, tt, u, u5t, ub, uln, use, wAn, wQ, wn, wq, wse, wt, xUe, xdn, xi, xnt, xq, xt, xv, y, yPe, ye, yse, z, z4e, z7t, zl, zlt, zme } from "/$bunfs/root/modules/chunk-rce59kvp/prelude.js";
import { CD, JE, LH, MD, UH, XE, _D, _b, aD, sf, vD, wD, xb, xx } from "/$bunfs/root/modules/chunk-rce59kvp/module-001.js";
import { $D, $x, Bb, Fx, Hx, O$, Ux, WD, jx, m$, y$ } from "/$bunfs/root/modules/chunk-rce59kvp/module-002.js";
import { $N, Hy, IL, Z$, eW, mA, wf, xN } from "/$bunfs/root/modules/chunk-rce59kvp/module-003.js";
import { Fh, Q4, TO, Uh, eB, jh, oB, tB, vO, xO } from "/$bunfs/root/modules/chunk-rce59kvp/module-004.js";
import { AB, D9, L9, M9, RB, TB, Vh, cR, iR, xB } from "/$bunfs/root/modules/chunk-rce59kvp/module-005.js";
import { $9, B9, EB, H9, LB, NB, OB, VB, Z9, b7, d7, j9, qB, r7, t7, z9, zB } from "/$bunfs/root/modules/chunk-rce59kvp/module-006.js";
import { A7, PZ, RZ, SZ, XB, bZ, eU, hZ, v7, yZ } from "/$bunfs/root/modules/chunk-rce59kvp/module-007.js";

var eAe = 180000,
  Dat = 30000,
  Nat = 3600000,
  Lat = 300000,
  tAe = 500,
  Oat = 3,
  Fat = 2,
  Bat = 3;

function pU(S) {
  return S.type === "user" && !S.isMeta && !S.isCompactSummary && !S.isVirtual;
}

function oAe(S) {
  let x = S.at(-1);
  return x?.type === "system" && x.subtype === "away_summary";
}

function nAe(S) {
  let x = new Set();
  for (let P = S.length - 1; P >= 0; P--) {
    let j = S[P];
    if (j.type === "user") {
      if (b9(j)) {
        for (let H of j.message.content) if (H.type === "tool_result" && H.is_error) x.add(H.tool_use_id);
      } else if (pU(j)) return false;
      continue;
    }
    if (j.type !== "assistant") continue;
    for (let H of j.message.content) if (VVe(H, x) !== null) return true;
  }
  return false;
}

function Uat(S) {
  let x = 0,
    P = -1;
  for (let H = 0; H < S.length; H++) {
    let Z = S[H];
    if (pU(Z)) x++;
    if (Z.type === "system" && Z.subtype === "away_summary") P = H;
  }
  if (x < Oat) return false;
  if (P === -1) return true;
  let j = 0;
  for (let H = P + 1; H < S.length; H++) if (pU(S[H])) j++;
  return j >= Fat;
}

async function jat(S, x, P, j) {
  if (x()) return;
  if (O() && j !== void 0)
    try {
      let H = await j.backend.delete(j.key);
      if (!H.ok || !H.value.existed) return;
    } catch {
      return;
    }
  else
    try {
      await Iat(S);
    } catch {
      return;
    }
  P({ force: true });
}

function Hat() {
  let S = I("tengu_sedge_lantern_config", { delayMs: eAe })?.delayMs;
  return typeof S === "number" && Number.isFinite(S) ? Math.max(Dat, S) : eAe;
}

class AZ {
  #e;
  #t = false;
  #o = false;
  #r = null;
  #i = null;
  #n = null;
  #c = 0;
  #a = 0;
  #s = null;
  #d = null;
  #l = null;
  #u = null;
  #p = null;
  #m = null;
  #f = null;
  #g = false;
  #b = false;
  constructor(S) {
    this.#e = S;
  }
  setInputs({ enabled: S, isLoading: x }) {
    let P = x !== this.#o;
    if (this.#o && !x) (this.#r = this.#e.now()), (this.#i = oie());
    this.#o = x;
    let j = S !== this.#t;
    if (j)
      if (((this.#t = S), S)) this.#C();
      else this.#h();
    if (P || j) this.#S();
  }
  markUserScrolled() {
    this.#a = this.#e.now();
  }
  dispose() {
    if (this.#t) (this.#t = false), this.#h();
    this.#S();
  }
  async #k(S) {
    if (!this.#t) return;
    let x = this.#r,
      P = this.#i;
    if (x === null || P === null) {
      n("[awaySummary] skipped: cache age unknown");
      return;
    }
    if (this.#e.now() - x > P * 0.9) {
      n("[awaySummary] skipped: cache stale");
      return;
    }
    if (!S?.force && true && Id().status !== "allowed") {
      n("[awaySummary] skipped: at or near rate limit");
      return;
    }
    if (!S?.force && XQ() !== "") {
      n("[awaySummary] skipped: draft input present");
      return;
    }
    if (!S?.force) {
      let { pendingAgents: ue, pendingWorkflows: de } = this.#e.getPendingBackgroundWork();
      if (ue > 0 || de > 0) {
        n("[awaySummary] skipped: background work pending");
        return;
      }
    }
    if (!S?.force && aX()) {
      n("[awaySummary] skipped: loop wakeup pending");
      return;
    }
    let j = this.#e.transcript.getSnapshot();
    if (!S?.force && !Uat(j)) return;
    if (oAe(j)) return;
    if (nAe(j)) {
      n("[awaySummary] skipped: StructuredOutput recap present");
      return;
    }
    this.#y();
    let H = new AbortController();
    this.#n = H;
    let Z = await this.#e.generate(H.signal);
    if (H.signal.aborted) return;
    if (Z.kind !== "ok") {
      p("away_summary_generate", "generate_failed");
      return;
    }
    let re = this.#c < Bat ? `${Z.text} (disable recaps in /config)` : Z.text;
    if ((this.#c++, this.#e.transcript.replace((ue) => [...ue, Gzn(re)]), Z.capped))
      g("away_summary_generate", "capped");
    else y("away_summary_generate");
  }
  #C() {
    (this.#l = this.#e.focus.subscribe(this.#T)),
      (this.#u = this.#e.transcript.subscribe(this.#_)),
      this.#T(),
      this.#x();
  }
  #h() {
    this.#l?.(), (this.#l = null), this.#u?.(), (this.#u = null), this.#d?.(), (this.#d = null), this.#y(), this.#R();
  }
  #y() {
    this.#n?.abort(), (this.#n = null);
  }
  #v() {
    let S = this.#i ?? Nat;
    return Math.min(Hat(), S * 0.8);
  }
  #S() {
    if ((this.#s?.(), (this.#s = null), !this.#t || this.#o)) return;
    let S = this.#r;
    if (S === null) return;
    let x = Math.max(0, this.#v() - (this.#e.now() - S));
    this.#s = this.#e.clock.setTimeout(() => {
      if (((this.#s = null), this.#e.focus.getSnapshot() === "blurred" && !this.#o)) this.#k();
    }, x);
  }
  #T = () => {
    let S = this.#e.focus.getSnapshot();
    if (S === "blurred") {
      let x = this.#e.now();
      this.#p = x;
      let P = this.#r;
      if (P !== null && x - P >= this.#v() && !this.#o) this.#k();
      return;
    }
    if (S === "focused") {
      if ((this.#y(), this.#p === null)) return;
      let x = this.#e.now(),
        P = x - this.#p;
      if (P >= Lat) {
        (this.#m = x), (this.#f = P), (this.#g = true);
        let j = this.#e.transcript.getSnapshot();
        this.#b = oAe(j) || nAe(j);
      }
      this.#p = null;
    }
  };
  #_ = () => {
    if (!this.#g) return;
    let S = this.#e.transcript.getSnapshot().at(-1);
    if (!S || !pU(S)) return;
    let x = this.#m;
    if (x === null) return;
    s("tengu_return_to_session", {
      msSinceFocus: this.#e.now() - x,
      blurDurationMs: this.#f ?? 0,
      hadRecap: this.#b,
      scrolledBeforeSubmit: this.#a > x,
      isFullscreen: Nt(),
    }),
      this.#R();
  };
  #R() {
    (this.#g = false), (this.#m = null), (this.#p = null), (this.#f = null), (this.#b = false);
  }
  #x() {
    {
      if (!wt()) return;
      let S = a.CLAUDE_JOB_DIR;
      if (!S) return;
      let x = Eat(S, VUe),
        P = () => this.#o,
        j = (pe) => this.#k(pe),
        { clock: H, storageV5: Z } = this.#e,
        re = O() && Z !== void 0 ? Ibe(S, [VUe]) : void 0,
        ue = Z !== void 0 && re !== void 0 ? { backend: Z, key: re } : void 0,
        de = H.setTimeout(function pe() {
          try {
            jat(x, P, j, ue);
          } finally {
            de = H.setTimeout(pe, tAe);
          }
        }, tAe);
      this.#d = () => de();
    }
  }
}

function MZ(S, x, P = true) {
  let j = xt(),
    H = Xn(),
    Z = Iu(),
    { storageV5: re } = ge(),
    ue = W((Re) => Re.awaySummaryEnabled),
    de = P && ue,
    [pe] = u(
      () =>
        new AZ({
          transcript: S,
          focus: { getSnapshot: () => UF(), subscribe: (Re) => GX(Re) },
          clock: j,
          now: () => Date.now(),
          generate: (Re) => m2e(Re),
          getPendingBackgroundWork: () => dBe({ tasks: H.getState().tasks, queuedCommands: Z.getCommandQueue() }),
          storageV5: re,
        }),
    );
  return (
    A(() => {
      pe.setInputs({ enabled: de, isLoading: x });
    }, [pe, de, x]),
    A(() => () => pe.dispose(), [pe]),
    pe
  );
}

F();

function EZ(S, x) {
  let P = C(false);
  A(() => {
    if (!Fy() || P.current) return;
    if (((P.current = true), S)) j3e(S, x);
  }, [S, x]);
}

F();

class rAe {
  installed = new Map();
  lookup(S) {
    return this.installed.get(S);
  }
  remember(S, x) {
    this.installed.set(S, x);
  }
}

var $at = new J(() => new rAe()),
  Wat = D() === "windows" ? /^[A-Za-z0-9/\\][A-Za-z0-9_.+:\\?/-]*$/ : /^[A-Za-z0-9/][A-Za-z0-9_.+/-]*$/;

async function iAe(S, x) {
  if (!x || !x.trim()) return n("[binaryCheck] Empty command provided, returning false"), false;
  let P = x.trim();
  if (!Wat.test(P)) return n(`[binaryCheck] Rejected command with unsafe characters: '${P}'`), false;
  let j = $at.of(S),
    H = j.lookup(P);
  if (H !== void 0) return n(`[binaryCheck] Cache hit for '${P}': ${H}`), H;
  let Z = false;
  if (await Va(P).catch(() => null)) Z = true;
  return j.remember(P, Z), n(`[binaryCheck] Binary '${P}' ${Z ? "found" : "not found"}`), Z;
}

var Vat = 5;

function Gat(S) {
  if (!S) return null;
  if (typeof S === "string")
    return n("[lspRecommendation] Skipping string path lspServers (not readable from marketplace)"), null;
  if (Array.isArray(S)) {
    for (let x of S) {
      if (typeof x === "string") continue;
      let P = aAe(x);
      if (P) return P;
    }
    return null;
  }
  return aAe(S);
}

function sAe(S) {
  return typeof S === "object" && S !== null;
}

function aAe(S) {
  let x = new Set(),
    P = null;
  for (let [j, H] of Object.entries(S)) {
    if (!sAe(H)) continue;
    if (!P && typeof H.command === "string") P = H.command;
    let Z = H.extensionToLanguage;
    if (sAe(Z)) for (let re of Object.keys(Z)) x.add(re.toLowerCase());
  }
  if (!P || x.size === 0) return null;
  return { extensions: x, command: P };
}

async function Kat(S) {
  let x = new Map();
  try {
    let P = await zl(S);
    for (let [j, H] of Object.entries(P)) {
      if (!Ip(H.source)) continue;
      try {
        let Z = await Hv(j, S),
          re = Pp(j);
        for (let ue of Z.plugins) {
          if (!ue.lspServers) continue;
          let de = Gat(ue.lspServers);
          if (!de) continue;
          let pe = `${ue.name}@${j}`;
          x.set(pe, { entry: ue, marketplaceName: j, extensions: de.extensions, command: de.command, isOfficial: re });
        }
      } catch (Z) {
        n(`[lspRecommendation] Failed to load marketplace ${j}: ${Z}`);
      }
    }
  } catch (P) {
    n(`[lspRecommendation] Failed to load marketplaces config: ${P}`);
  }
  return x;
}

async function DZ(S, x, P) {
  if (Qat()) return n("[lspRecommendation] Recommendations are disabled"), [];
  let j = qat(x).toLowerCase();
  if (!j) return n("[lspRecommendation] No file extension found"), [];
  n(`[lspRecommendation] Looking for LSP plugins for ${j}`);
  let H = await Kat(P),
    re = ie().lspRecommendationNeverPlugins ?? [],
    ue = [];
  for (let [pe, Re] of H) {
    if (!Re.extensions.has(j)) continue;
    if (re.includes(pe)) {
      n(`[lspRecommendation] Skipping ${pe} (in never suggest list)`);
      continue;
    }
    if (tH(pe)) {
      n(`[lspRecommendation] Skipping ${pe} (already installed)`);
      continue;
    }
    ue.push({ info: Re, pluginId: pe });
  }
  let de = [];
  for (let { info: pe, pluginId: Re } of ue)
    if (await iAe(S, pe.command))
      de.push({ info: pe, pluginId: Re }), n(`[lspRecommendation] Binary '${pe.command}' found for ${Re}`);
    else n(`[lspRecommendation] Skipping ${Re} (binary '${pe.command}' not found)`);
  return (
    de.sort((pe, Re) => {
      if (pe.info.isOfficial && !Re.info.isOfficial) return -1;
      if (!pe.info.isOfficial && Re.info.isOfficial) return 1;
      return 0;
    }),
    de.map(({ info: pe, pluginId: Re }) => ({
      pluginId: Re,
      pluginName: id(pe.entry),
      marketplaceName: pe.marketplaceName,
      description: pe.entry.description,
      isOfficial: pe.isOfficial,
      extensions: Array.from(pe.extensions),
      command: pe.command,
    }))
  );
}

function lAe(S, x) {
  Ae((P) => {
    let j = P.lspRecommendationNeverPlugins ?? [];
    if (j.includes(S)) return P;
    return { ...P, lspRecommendationNeverPlugins: [...j, S] };
  }, x),
    n(`[lspRecommendation] Added ${S} to never suggest`);
}

function cAe(S) {
  Ae((x) => {
    let P = (x.lspRecommendationIgnoredCount ?? 0) + 1;
    return { ...x, lspRecommendationIgnoredCount: P };
  }, S),
    n("[lspRecommendation] Incremented ignored count");
}

function Qat() {
  let S = ie();
  return S.lspRecommendationDisabled === true || (S.lspRecommendationIgnoredCount ?? 0) >= Vat;
}

F();

function NZ() {
  let S = C(false),
    x = C(new Map()),
    P = B((j, H) => {
      if (sn() || dy()) return;
      if (S.current) {
        x.current.set(j, H);
        return;
      }
      (S.current = true),
        H()
          .catch(h)
          .finally(() => {
            S.current = false;
            let [Z] = x.current;
            if (Z) {
              let [re, ue] = Z;
              x.current.delete(re), P(re, ue);
            }
          });
    }, []);
  return P;
}

async function GI(S, x, P, j, H, Z) {
  let re = Q0(x, "(unnamed plugin)");
  try {
    let ue = await xv(S, Z);
    if (!ue) throw Error(`Plugin ${S} not found in marketplace`);
    await H(ue),
      j({
        key: `${P}-installed`,
        kind: "feedback",
        jsx: r(t, {
          color: "success",
          children: [e(tt, { status: "success", withSpace: true }), re, " installed \xB7 restart to apply"],
        }),
        priority: "immediate",
        timeoutMs: 5000,
      }),
      y("plugin_recommendation_install");
  } catch (ue) {
    if (ue instanceof Ys) {
      n(`Plugin ${S} not installed: ${ue.message}`),
        j({ key: `${P}-install-refused`, text: ue.message, color: "warning", priority: "immediate", timeoutMs: 8000 });
      let { code: de, kind: pe } = ggt(ue);
      if (pe === "bad") p("plugin_recommendation_install", de);
      else g("plugin_recommendation_install", de);
      return;
    }
    n(`Failed to install plugin ${S}: ${ue instanceof Error ? ue.message : String(ue)}`, { level: "error" }),
      j({
        key: `${P}-install-failed`,
        text: `Failed to install ${re}`,
        color: "error",
        priority: "immediate",
        timeoutMs: 5000,
      }),
      p("plugin_recommendation_install", "install_failed");
  }
}

function elt(RJo) {
  return RJo.fileHistory.trackedFiles;
}

function hU(LZ, OZ) {
  let zat = _(9),
    FZ = W(elt),
    { addNotification: BZ } = Or(),
    { storageV5: fU } = ge(),
    { host: UZ } = ct(),
    Yat;
  if (zat[0] === d) (Yat = new Set()), (zat[0] = Yat);
  else Yat = zat[0];
  let uAe = C(Yat),
    Jat,
    Xat;
  if (zat[1] !== BZ || zat[2] !== OZ || zat[3] !== UZ || zat[4] !== LZ || zat[5] !== fU || zat[6] !== FZ)
    (Jat = () => {
      OZ("lsp", async () => {
        if (u5t()) {
          return;
        }
        let dAe = [];
        for (const mAe of FZ) {
          if (!uAe.current.has(mAe)) uAe.current.add(mAe), dAe.push(mAe);
        }
        for (const [vJo, jZ] of dAe.entries()) {
          try {
            let KI = (await DZ(UZ, jZ, fU))[0];
            if (KI) {
              n(`[useLspPluginRecommendation] Found match: ${KI.pluginName} for ${jZ}`);
              let gU = {
                pluginId: KI.pluginId,
                pluginName: KI.pluginName,
                pluginDescription: KI.description,
                marketplaceName: KI.marketplaceName,
                fileExtension: pAe(jZ),
              };
              let Zat = await LZ(
                Fh,
                {
                  pluginName: gU.pluginName,
                  pluginDescription: gU.pluginDescription,
                  marketplaceName: gU.marketplaceName,
                  fileExtension: gU.fileExtension,
                },
                { queueBehind: true },
              );
              if (Zat === "cancelled") {
                for (const TJo of dAe.slice(vJo)) uAe.current.delete(TJo);
                return;
              }
              d5t(true), fAe(gU, Zat, BZ, fU);
              return;
            }
          } catch (wJo) {
            let _Jo = wJo;
            n(`[useLspPluginRecommendation] Failed to check for LSP plugins for ${jZ}: ${_Jo}`, { level: "error" });
          }
        }
      });
    }),
      (Xat = [FZ, OZ, LZ, BZ, fU, UZ]),
      (zat[1] = BZ),
      (zat[2] = OZ),
      (zat[3] = UZ),
      (zat[4] = LZ),
      (zat[5] = fU),
      (zat[6] = FZ),
      (zat[7] = Jat),
      (zat[8] = Xat);
  else (Jat = zat[7]), (Xat = zat[8]);
  A(Jat, Xat);
}

function fAe({ pluginId: S, pluginName: x }, P, j, H) {
  switch ((n(`[useLspPluginRecommendation] User response: ${P} for ${x}`), P)) {
    case "yes":
      GI(
        S,
        x,
        "lsp-plugin",
        j,
        async (Z) => {
          n(`[useLspPluginRecommendation] Installing plugin: ${S}`);
          let re = await cc(H),
            ue;
          if (typeof Z.entry.source === "string") {
            let de = await dle(S, Z.marketplaceInstallLocation, Z.entry.source, re, VA(), H),
              pe = RNt(de);
            if (pe.entryPath === void 0)
              throw new R(`Plugin ${or(S, 120)}: ${pe.reason}`, "lsp plugin recommendation marketplace path refused");
            ue = pe.entryPath;
          }
          await ncn(
            S,
            Z.entry,
            "user",
            void 0,
            ue,
            void 0,
            void 0,
            Z.marketplaceInstallLocation,
            AX(S, re),
            void 0,
            H,
            { explicitInstall: false },
          ),
            await Os("userSettings", (de) => ({ enabledPlugins: { ...de?.enabledPlugins, [S]: true } }), void 0, H),
            n(`[useLspPluginRecommendation] Plugin installed: ${S}`);
        },
        H,
      );
      break;
    case "no":
      break;
    case "timeout":
      n("[useLspPluginRecommendation] Auto-dismissed unanswered, incrementing ignored count"), cAe(H);
      break;
    case "never":
      lAe(S, H);
      break;
    case "disable":
      Ae((Z) => {
        if (Z.lspRecommendationDisabled) return Z;
        return { ...Z, lspRecommendationDisabled: true };
      }, H);
      break;
  }
}

F();

function yU(HZ, $Z) {
  let $Jo = _(8),
    { pendingHint: Jh } = ct(),
    QI = Lt(Jh.subscribe, Jh.getSnapshot),
    { addNotification: WZ } = Or(),
    { storageV5: GC } = ge(),
    tlt,
    olt;
  if ($Jo[0] !== WZ || $Jo[1] !== $Z || $Jo[2] !== Jh || $Jo[3] !== QI || $Jo[4] !== HZ || $Jo[5] !== GC)
    (tlt = () => {
      if (!QI) {
        return;
      }
      $Z("hint", async () => {
        if (Jh.shownThisSession) {
          Jh.dismiss();
          return;
        }
        let Zp = await cln(QI, GC);
        if (Zp) n(`[useClaudeCodeHintRecommendation] surfacing ${Zp.pluginId} from ${Zp.sourceCommand}`);
        if (Jh.pending === QI) Jh.dismiss();
        if (!Zp) {
          return;
        }
        let gAe = await HZ(
          Uh,
          {
            pluginName: Zp.pluginName,
            pluginDescription: Zp.pluginDescription,
            marketplaceName: Zp.marketplaceName,
            sourceCommand: Zp.sourceCommand,
          },
          { queueBehind: true },
        );
        if (gAe === "cancelled") {
          return;
        }
        bb19: switch (
          (Jh.markShown(),
          uln(Zp.pluginId, GC),
          s("tengu_plugin_hint_response", {
            _PROTO_plugin_name: Vt(Zp.pluginId).name,
            _PROTO_marketplace_name: Zp.marketplaceName,
            response: c(gAe),
          }),
          gAe)
        ) {
          case "yes": {
            let { pluginId: nlt, pluginName: WJo, marketplaceName: qJo } = Zp;
            GI(
              nlt,
              WJo,
              "hint-plugin",
              WZ,
              async (VJo) => {
                let hAe = await yPe({
                  pluginId: nlt,
                  entry: VJo.entry,
                  marketplaceName: qJo,
                  scope: "user",
                  trigger: "hint",
                  storageV5: GC,
                });
                if (!hAe.success) {
                  throw hAe.refusal ?? Error(hAe.error);
                }
              },
              GC,
            );
            break bb19;
          }
          case "disable": {
            dln(GC);
            break bb19;
          }
          case "no":
        }
      });
    }),
      (olt = [QI, Jh, $Z, HZ, WZ, GC]),
      ($Jo[0] = WZ),
      ($Jo[1] = $Z),
      ($Jo[2] = Jh),
      ($Jo[3] = QI),
      ($Jo[4] = HZ),
      ($Jo[5] = GC),
      ($Jo[6] = tlt),
      ($Jo[7] = olt);
  else (tlt = $Jo[6]), (olt = $Jo[7]);
  A(tlt, olt);
}

var IR = {};

je(IR, { createTurnEventTail: () => rlt, default: () => IR });

function rlt(S) {
  let x = Promise.resolve(),
    P = 0;
  return {
    enqueue(j, H) {
      let Z = P;
      x = x
        .then(H)
        .then((re) => {
          if (re.length === 0) return;
          if (Z !== P) {
            n(`${j}: ${re.length} note(s) dropped, the conversation was reset while it ran (${Z} to ${P})`);
            return;
          }
          S(re);
        })
        .catch((re) => n(`${j} failed: ${l(re)}`));
    },
    reset: () => {
      P += 1;
    },
  };
}

var ER = {};

je(ER, { createTurnStep: () => ilt, default: () => ER, emptyStep: () => zI });

var zI = (S, x) => ({ turnId: S, messageId: null, index: x, texts: [], toolUses: [], last: null });

function ilt(S) {
  let x = zI("", 0);
  function P() {
    if (x.messageId === null) return;
    let j = {
      turnId: x.turnId,
      index: x.index,
      answer: x.texts
        .join(`
`)
        .trim(),
      toolUses: x.toolUses,
      stopReason:
        (x.last?.type === "assistant" ? x.last.message.stop_reason : null) ??
        (x.toolUses.length > 0 ? "tool_use" : "end_turn"),
    };
    (x = zI(x.turnId, x.index + 1)), S(j);
  }
  return {
    read: (j) => {
      P(), (x = zI(j, 0));
    },
    note: (j) => {
      if (j.type === "assistant") {
        if (j.isApiErrorMessage) return;
        if (x.messageId !== null && x.messageId !== j.message.id) P();
        (x.messageId = j.message.id), (x.last = j);
        for (let H of j.message.content)
          if (H.type === "text") x.texts = [...x.texts, H.text];
          else if (H.type === "tool_use") x.toolUses = [...x.toolUses, { name: H.name, input: H.input }];
      } else if (j.type === "user" && gk(j)) P();
    },
    flush: (j) => {
      if (x.turnId === j) P();
    },
  };
}

var DR = {};

je(DR, { default: () => DR, useUiLog: () => alt });

F();

var YI = {};

je(YI, { default: () => YI, uiLogMessage: () => slt });

var slt = (S) => Dt(_be(S.plugin, S.text), "notice");

var alt = (S) => {
  A(() => o7.onUiLog((x) => S({ type: "append", messages: [YI.uiLogMessage(x)] })), [S]);
};

F();

function blt(_Ae) {
  return _Ae.hasSeenEffortMediumNudge ? _Ae : { ..._Ae, hasSeenEffortMediumNudge: true };
}

var RAe = "Switch your default effort to medium?",
  xAe = "Yes, use medium effort by default",
  PAe = "No, keep high";

function CU(IXo) {
  let Zh = _(35),
    { model: yAe, copy: $u, onDone: qZ } = IXo,
    { storageV5: JI } = ge(),
    bAe = At(),
    { addNotification: VZ } = Or(),
    LR = hn() ? "screen_reader" : $u.cancelFirst ? "cancel_first" : "confirm_first",
    llt;
  if (Zh[0] !== $u.cohort || Zh[1] !== LR)
    (llt = () => {
      s("tengu_effort_medium_nudge_shown", { cohort: ke($u.cohort), option_order: c(LR) });
    }),
      (Zh[0] = $u.cohort),
      (Zh[1] = LR),
      (Zh[2] = llt);
  else llt = Zh[2];
  let clt;
  if (Zh[3] === d) (clt = []), (Zh[3] = clt);
  else clt = Zh[3];
  A(llt, clt), Hi();
  let mlt = C(false),
    plt;
  if (Zh[4] !== VZ || Zh[5] !== bAe || Zh[6] !== JI)
    (plt = async function kU() {
      let bU = await wse("medium", bAe, true, JI);
      if (!bU.effortUpdate) {
        return (
          L6(`[${bU.message}]`),
          VZ({
            key: "effort-medium-nudge-result",
            kind: "warning",
            text: bU.message,
            color: "warning",
            priority: "high",
          }),
          "write_failed"
        );
      }
      let flt = bU.effortUpdate.value === "medium" ? "Effort set to medium and saved as your default" : bU.message;
      return (
        L6(`[${flt}]`),
        VZ({ key: "effort-medium-nudge-result", kind: "feedback", text: flt, priority: "high", timeoutMs: 5000 }),
        "switched"
      );
    }),
      (Zh[4] = VZ),
      (Zh[5] = bAe),
      (Zh[6] = JI),
      (Zh[7] = plt);
  else plt = Zh[7];
  let kU = plt,
    glt;
  if (Zh[8] !== kU || Zh[9] !== $u.cohort || Zh[10] !== qZ || Zh[11] !== LR || Zh[12] !== JI)
    (glt = async function XI(GZ) {
      if (mlt.current) {
        return;
      }
      if (((mlt.current = true), GZ === "accept" && !Wde(at()))) {
        p("effort_medium_nudge", "unavailable_at_accept"),
          s("tengu_effort_medium_nudge_resolved", {
            choice: c(GZ),
            outcome: c("unavailable"),
            cohort: ke($u.cohort),
            option_order: c(LR),
          }),
          qZ();
        return;
      }
      let hlt = GZ === "accept" ? await kU() : "declined";
      if ((Ae(blt, JI), hlt === "write_failed")) p("effort_medium_nudge", "settings_write_failed");
      else y("effort_medium_nudge");
      s("tengu_effort_medium_nudge_resolved", {
        choice: c(GZ),
        outcome: c(hlt),
        cohort: ke($u.cohort),
        option_order: c(LR),
      }),
        qZ();
    }),
      (Zh[8] = kU),
      (Zh[9] = $u.cohort),
      (Zh[10] = qZ),
      (Zh[11] = LR),
      (Zh[12] = JI),
      (Zh[13] = glt);
  else glt = Zh[13];
  let XI = glt;
  const kAe = $u.title ?? RAe;
  let KZ;
  if (Zh[14] !== $u.body || Zh[15] !== yAe)
    (KZ = $u.body.replaceAll("{model}", cs(yAe))), (Zh[14] = $u.body), (Zh[15] = yAe), (Zh[16] = KZ);
  else KZ = Zh[16];
  let QZ;
  if (Zh[17] !== KZ) (QZ = e(o, { marginBottom: 1, children: e(t, { children: KZ }) })), (Zh[17] = KZ), (Zh[18] = QZ);
  else QZ = Zh[18];
  const CAe = $u.confirmLabel ?? xAe,
    vAe = $u.cancelLabel ?? PAe,
    wAe = $u.cancelFirst === true,
    TAe = $u.cancelFirst === true ? "cancel" : "confirm";
  let zZ, JZ;
  if (Zh[19] !== XI)
    (zZ = () => void XI("accept")), (JZ = () => void XI("decline")), (Zh[19] = XI), (Zh[20] = zZ), (Zh[21] = JZ);
  else (zZ = Zh[20]), (JZ = Zh[21]);
  let XZ;
  if (Zh[22] !== wAe || Zh[23] !== TAe || Zh[24] !== zZ || Zh[25] !== JZ || Zh[26] !== CAe || Zh[27] !== vAe)
    (XZ = e(wn, { confirmLabel: CAe, cancelLabel: vAe, cancelFirst: wAe, focus: TAe, onConfirm: zZ, onCancel: JZ })),
      (Zh[22] = wAe),
      (Zh[23] = TAe),
      (Zh[24] = zZ),
      (Zh[25] = JZ),
      (Zh[26] = CAe),
      (Zh[27] = vAe),
      (Zh[28] = XZ);
  else XZ = Zh[28];
  let ZZ;
  if (Zh[29] !== XZ || Zh[30] !== QZ)
    (ZZ = r(o, { flexDirection: "column", paddingX: 2, paddingY: 1, children: [QZ, XZ] })),
      (Zh[29] = XZ),
      (Zh[30] = QZ),
      (Zh[31] = ZZ);
  else ZZ = Zh[31];
  let Slt;
  if (Zh[32] !== ZZ || Zh[33] !== kAe)
    (Slt = e(di, { title: kAe, children: ZZ })), (Zh[32] = ZZ), (Zh[33] = kAe), (Zh[34] = Slt);
  else Slt = Zh[34];
  return Slt;
}

var klt = m(() =>
  f({
    title: i().min(1).optional(),
    body: i().min(1),
    confirmLabel: i().min(1).optional(),
    cancelLabel: i().min(1).optional(),
    cancelFirst: q().optional(),
  }),
);

function eee({ model: S, effortValue: x }) {
  let P = ie();
  if (
    !P.hasCompletedOnboarding ||
    P.hasSeenEffortMediumNudge ||
    pH() !== void 0 ||
    sn() ||
    !_o("userSettings") ||
    nl() ||
    a.CLAUDE_BRIDGE_REATTACH_SESSION !== void 0 ||
    dy() ||
    !Wde(S) ||
    ew(S, x) !== "high"
  )
    return;
  let j = Clt(S),
    H;
  if (j === void 0 && x === void 0) H = "default";
  else if (j?.source === "userSettings" && j.effortLevel === "high" && x === "high") H = "user_pin";
  else return;
  let Z = klt().safeParse(I("tengu_radiant_island", {}));
  return Z.success ? { ...Z.data, cohort: H } : void 0;
}

function Clt(S) {
  let x = T5e(S),
    P = xi();
  for (let j = P.length - 1; j >= 0; j--) {
    let H = P[j],
      Z = ye(H),
      re;
    for (let [de, pe] of Object.entries(Z?.modelSettings ?? {})) {
      let Re = pe?.effortLevel;
      if (Re === void 0 || T5e(de) !== x) continue;
      if (de === x) {
        re = Re;
        break;
      }
      re ??= Re;
    }
    let ue = re ?? Z?.effortLevel;
    if (ue !== void 0) return { source: H, effortLevel: ue };
  }
  return;
}

F();

var AAe = "startup-notice";

function tee() {
  let { addNotification: S, removeNotification: x } = Or();
  A(() => {
    let P = "",
      j = () => {
        let H = I("tengu_startup_notice", "");
        if (H === P) return;
        if (((P = H), !H)) {
          x(AAe);
          return;
        }
        S({ key: AAe, text: H, color: "warning", priority: "high", timeoutMs: 30000, fold: (Z, re) => re });
      };
    return j(), Yh(j);
  }, [S, x]);
}

F();

function oee() {
  let S = We(Nx),
    x = S !== null && fg() && !Nt() && !H8() && a.terminal !== "WezTerm",
    P = B(() => {
      if (!x || !S) return;
      S(nf(Sd.SEMANTIC_PROMPT, "A", "redraw=0"));
    }, [x, S]),
    j = B(() => {
      if (!x || !S) return;
      S(nf(Sd.SEMANTIC_PROMPT, "C") + nf(Sd.SEMANTIC_PROMPT, "D"));
    }, [x, S]);
  return { markTurnStart: P, markTurnDone: j };
}

F();

F();

function MAe(S, x, P, j) {
  let H = Ox(),
    Z = C(""),
    re = br(() => {
      if (!P) return;
      let ue = H.getState();
      if (ue?.isDragging || !H.hasSelection()) {
        Z.current = "";
        return;
      }
      if (!ue?.anchor || !ue.focus || ue.anchorSpan?.kind === "line") return;
      let de = ue.virtualAnchorCol ?? ue.anchor.col,
        pe = ue.virtualFocusCol ?? ue.focus.col;
      if (de < S || pe < S) return;
      let Re = x();
      if (Re === null || ue.anchor.row > Re || ue.focus.row > Re) return;
      let be = H.getSelectedText();
      if (!be.trim() || be === Z.current) return;
      Z.current = be;
      let Pe =
          Dn(
            be.trimEnd(),
            `
`,
          ) + 1,
        Oe = j?.(Math.min(ue.anchor.row, ue.focus.row));
      P({ source: "diff", text: be, lineCount: Pe, filePath: Oe }), y("diff_selection_attach");
    });
  A(() => H.subscribe(() => re()), [H]);
}

F();

function K3o(s) {
  return s.panelFileView;
}

function Q3o(prev) {
  let view = prev.panelFileView;
  if (view === null) {
    return prev;
  }
  if (view.returnTo === "closed") {
    return { ...prev, panelFileView: null, replTab: "convo" };
  }
  return { ...prev, panelFileView: null };
}

function z3o(s) {
  return s.toolPermissionContext;
}

function Y3o() {
  return false;
}

function nee(S, x, P) {
  if (rM()) {
    let j = hBe.of(S),
      H = W7t(S) ? "auto_open" : "manual";
    if (x === j.lastLoggedSessionId) return;
    (j.lastLoggedSessionId = x), s("tengu_repl_diff_panel_shown", { trigger: c(H), terminal_width_bucket: c(vlt(P)) });
  }
}

function vlt(S) {
  if (S < bQ) return "under_110";
  if (S < Zkt) return "110_to_143";
  if (S < 200) return "144_to_199";
  return "200_plus";
}

function IAe(S, x, P) {
  let j = 0;
  for (let H = x ?? void 0; H; H = H.parentNode) j += H.yogaNode?.getComputedTop() ?? 0;
  if (S < j) return;
  for (let [H, Z] of P) {
    let re = 0;
    for (let de = Z; de; de = de.parentNode)
      if (((re += de.yogaNode?.getComputedTop() ?? 0), de.scrollTop)) re -= RW(de);
    let ue = Z.yogaNode?.getComputedHeight() ?? 0;
    if (S >= re && S < re + ue) return H;
  }
  return;
}

function Jlt(X6o) {
  return X6o.replTab;
}

function Xlt(Z6o) {
  return Z6o.fileHistory.trackedFiles.size;
}

function Zlt(LAe) {
  return LAe.replTab === "convo" ? { ...LAe, replTab: "diff" } : LAe;
}

function ect(e4o) {
  return e4o.id;
}

var eMe = 8,
  _U = 20;

function Iee(S, x) {
  let P = At();
  ZC();
  let j = C(S),
    H = C(null);
  if (j.current !== S) (j.current = S), (H.current = S ? x : null);
  else if (H.current !== null && x !== H.current) H.current = null;
  let Z = ct((pe) => pe.id),
    re = ct().host,
    ue = C(Z);
  if (ue.current !== Z) (ue.current = Z), (H.current = null);
  let de = C(S);
  return (
    A(() => {
      let pe = de.current;
      if (((de.current = S), pe && !S)) wQ(re, P);
    }, [S, re, P]),
    H.current
  );
}

function RU(J6o) {
  let jR = _(36),
    { width: vU, isThinClient: lb, onAskAboutSelection: EAe, autoOpenBaseline: wlt } = J6o,
    BR = wlt === void 0 ? null : wlt,
    pg = W(Jlt),
    cb = At(),
    { storageV5: DAe } = ge(),
    rp = ct().host,
    { columns: gg } = Ee(),
    { addNotification: ree } = Or(),
    UR = W(Xlt),
    Tlt;
  if (jR[0] !== BR || jR[1] !== gg || jR[2] !== rp || jR[3] !== lb || jR[4] !== pg || jR[5] !== cb || jR[6] !== UR)
    (Tlt = () => {
      if (pg !== "convo" || UR === 0) {
        return;
      }
      if (BR !== null && UR === BR) {
        return;
      }
      if (!Nt() || lb) {
        return;
      }
      if (!r0t(gg)) {
        return;
      }
      t0t(rp), cb(Zlt);
    }),
      (jR[0] = BR),
      (jR[1] = gg),
      (jR[2] = rp),
      (jR[3] = lb),
      (jR[4] = pg),
      (jR[5] = cb),
      (jR[6] = UR),
      (jR[7] = Tlt);
  else Tlt = jR[7];
  let _lt;
  if (jR[8] !== BR || jR[9] !== rp || jR[10] !== lb || jR[11] !== pg || jR[12] !== cb || jR[13] !== UR)
    (_lt = [pg, UR, BR, lb, cb, rp]),
      (jR[8] = BR),
      (jR[9] = rp),
      (jR[10] = lb),
      (jR[11] = pg),
      (jR[12] = cb),
      (jR[13] = UR),
      (jR[14] = _lt);
  else _lt = jR[14];
  A(Tlt, _lt);
  let Rlt;
  if (jR[15] !== ree || jR[16] !== gg || jR[17] !== rp || jR[18] !== pg || jR[19] !== cb || jR[20] !== DAe)
    (Rlt = () => {
      if (pg !== "diff") {
        if (!jRe()) {
          ree({ key: "diff-sidebar-no-git", kind: "feedback", text: e0t, priority: "immediate", timeoutMs: 3000 });
          return;
        }
        if (gg < bQ) {
          ree({
            key: "diff-sidebar-too-narrow",
            kind: "feedback",
            text: `Resize your terminal to at least ${bQ} columns to show the diff panel`,
            priority: "immediate",
            timeoutMs: 3000,
          });
          return;
        }
      }
      o0t(rp, cb, pg, DAe);
    }),
      (jR[15] = ree),
      (jR[16] = gg),
      (jR[17] = rp),
      (jR[18] = pg),
      (jR[19] = cb),
      (jR[20] = DAe),
      (jR[21] = Rlt);
  else Rlt = jR[21];
  let iee;
  if (jR[22] !== lb) (iee = Nt() && !lb), (jR[22] = lb), (jR[23] = iee);
  else iee = jR[23];
  let xlt;
  if (jR[24] !== iee) (xlt = { context: "Global", isActive: iee }), (jR[24] = iee), (jR[25] = xlt);
  else xlt = jR[25];
  Be("app:toggleReplTab", Rlt, xlt);
  let see = ct(ect),
    wU = pg === "diff" && vU > 0,
    Plt,
    Alt;
  if (jR[26] !== gg || jR[27] !== rp || jR[28] !== wU || jR[29] !== see)
    (Plt = () => {
      if (wU) nee(rp, see, gg);
    }),
      (Alt = [wU, gg, see, rp]),
      (jR[26] = gg),
      (jR[27] = rp),
      (jR[28] = wU),
      (jR[29] = see),
      (jR[30] = Plt),
      (jR[31] = Alt);
  else (Plt = jR[30]), (Alt = jR[31]);
  if ((A(Plt, Alt), !wU)) {
    return null;
  }
  const NAe = gg - vU;
  let Mlt;
  if (jR[32] !== EAe || jR[33] !== NAe || jR[34] !== vU)
    (Mlt = e(oMe, { width: vU, minCol: NAe, onAskAboutSelection: EAe })),
      (jR[32] = EAe),
      (jR[33] = NAe),
      (jR[34] = vU),
      (jR[35] = Mlt);
  else Mlt = jR[35];
  return Mlt;
}

function oMe({ width: S, minCol: x, onAskAboutSelection: P }) {
  let j = ct((An) => An.project.cwd),
    H = ct().host,
    { storageV5: Z } = ge(),
    re = W((An) => An.fileHistory.trackSequence ?? 0),
    [ue, de] = u(G7t),
    { stats: pe, files: Re, hunks: be, loading: Pe, source: Oe, baseMode: Ie, noCommits: He } = f7t(re, true, ue);
  Be("app:cycleDiffBase", () => de(z7t(ue, Z)), { context: "DiffPanel" });
  let Fe = W((An) => An.todos[et()]),
    Ve = GL() ? Fe : void 0,
    Ke = W((An) => An.toolPermissionContext),
    ot = At(),
    { processQueue: st } = Or();
  A(
    () => (
      ot((An) => (An.diffPanelVisible ? An : { ...An, diffPanelVisible: true })),
      () => {
        ot((An) => (An.diffPanelVisible ? { ...An, diffPanelVisible: false } : An)), st();
      }
    ),
    [ot, st],
  );
  let [nt] = u(() => new zme()),
    Pt = C(null),
    kt = C(null),
    Ht = C(new Map()),
    yt = z(() => {
      let An = 0,
        Wr = 0,
        Kn = 0;
      for (let Tn of Re) if (Tn.preSession) An++, (Wr += Tn.linesAdded), (Kn += Tn.linesRemoved);
      return { filesCount: An, linesAdded: Wr, linesRemoved: Kn };
    }, [Re]),
    lt = Ve ? Q(Ve, (An) => An.status === "completed") : 0,
    Rt = Ve?.length ?? 0,
    to = Math.max(S - 2, 20),
    so = rB(),
    jt = e7t(),
    Gt = so || jt,
    vo = Ox();
  Ckt(nt, vo, !Gt, void 0, { requireScope: true }),
    MAe(
      x,
      () => {
        let An = Pt.current?.yogaNode;
        if (!An) return null;
        let Wr = 0;
        for (let Kn = Pt.current ?? void 0; Kn; Kn = Kn.parentNode) Wr += Kn.yogaNode?.getComputedTop() ?? 0;
        return Wr + An.getComputedHeight() - 1;
      },
      Gt ? void 0 : P,
      (An) => IAe(An, kt.current, Ht.current),
    );
  let [qt, lo] = u(false),
    {
      files: To,
      preSessionFiles: ao,
      noiseCount: jo,
      deniedHidden: Qo,
    } = z(() => {
      let An = Hn(j) ?? j,
        Wr = 0,
        Kn = 0,
        Tn = [],
        tr = [];
      for (let hi of Re) {
        if (fa(zlt(An, hi.path), Ke, "read", "deny") !== null) {
          Kn++;
          continue;
        }
        if (hi.preSession) {
          tr.push(hi);
          continue;
        }
        if (jsn(hi.path) || e3n(hi.path)) {
          if ((Wr++, !qt)) continue;
        }
        Tn.push(hi);
      }
      return { files: Tn, preSessionFiles: tr, noiseCount: Wr, deniedHidden: Kn };
    }, [Re, Ke, qt, j]),
    uo = Re.length > 0 && yt.filesCount === Re.length && jo === 0 && Qo === 0,
    Pn = uo ? 0 : (pe?.linesAdded ?? 0) - yt.linesAdded,
    Yt = uo ? 0 : (pe?.linesRemoved ?? 0) - yt.linesRemoved,
    No = uo ? 0 : (pe?.filesCount ?? Re.length) - yt.filesCount,
    [cn, tn] = u(0),
    nn = Math.max(0, To.length - eMe),
    pn = Math.min(cn, nn),
    Go = To.slice(pn, pn + eMe),
    Oo = pn,
    xo = To.length - (pn + Go.length),
    dn = Math.max(0, No - (Re.length - yt.filesCount)),
    Xo = qt ? 0 : jo,
    zo = null,
    en = null;
  if (!Pe) {
    if (pe === null)
      (zo = "Diff unavailable"), (en = "Couldn't read the git diff \u2014 it will retry on the next change");
    else if (No === 0)
      if (He) (zo = "No commits yet"), (en = "Nothing to diff against until the repo's first commit");
      else if (Ie === "uncommitted") zo = "No uncommitted changes";
      else if (Ie === "branch")
        if (Oe.kind === "branch") zo = `No changes vs ${Oe.baseBranch}`;
        else (zo = "No changes vs HEAD"), (en = "No base branch to compare against \u2014 showing changes vs HEAD");
      else zo = "No changes this session";
  }
  Be("app:toggleDiffNoiseFilter", () => lo((An) => !An), { context: "Global", isActive: jo > 0 });
  let un = W((An) => An.panelFileView);
  function Uo(An) {
    tn((Wr) => Pa(Math.min(Wr, nn) + An, 0, nn));
  }
  ht(
    { "app:diffFileListUp": () => Uo(-1), "app:diffFileListDown": () => Uo(1) },
    { context: "Global", isActive: nn > 0 },
  );
  let Rn = Ro("app:diffFileListDown", "Global", "alt+down"),
    [mr, Pr] = u(false);
  Be("app:toggleDiffPreSession", () => Pr((An) => !An), { context: "Global", isActive: ao.length > 0 });
  function Ir(An) {
    let Wr = Ht.current.get(An);
    if (Wr) nt.handle?.scrollToElement(Wr);
  }
  return r(o, {
    ref: Pt,
    flexDirection: "column",
    width: S,
    height: "100%",
    onWheel: (An) => {
      nt.handle?.scrollBy(An.deltaY * 3), An.preventDefault(), An.stopPropagation();
    },
    selectionScope: true,
    children: [
      r(o, {
        flexDirection: "column",
        paddingX: 1,
        paddingY: 1,
        flexShrink: 0,
        children: [
          r(o, {
            flexDirection: "row",
            children: [
              zo !== null
                ? e(t, { dimColor: true, wrap: "truncate", children: zo })
                : r(t, {
                    children: [
                      r(t, { bold: true, children: [No, " ", k(No, "file")] }),
                      " ",
                      "changed",
                      (Pn > 0 || Yt > 0) && " ",
                      e(Hh, { added: Pn, removed: Yt }),
                    ],
                  }),
              e(o, { flexGrow: 1 }),
              e(iMe, { onClose: () => q7t(H, ot, Z) }),
            ],
          }),
          pe !== null &&
            (He
              ? No > 0 && e(t, { dimColor: true, children: "no commits yet \u2014 showing staged and new files" })
              : (ue !== "session" || Ie !== "session") && e(t, { dimColor: true, children: Ylt(ue, Oe, ue !== Ie) })),
          Rt > 0 &&
            r(o, {
              marginTop: 1,
              flexDirection: "row",
              gap: 1,
              children: [
                e(Py, { ratio: lt / Rt, width: Math.min(20, to - 12), fillColor: "success", emptyColor: "inactive" }),
                r(t, { dimColor: true, children: [lt, "/", Rt] }),
              ],
            }),
          (Go.length > 0 || jo > 0) &&
            r(o, {
              flexDirection: "column",
              marginTop: 1,
              onWheel:
                nn > 0
                  ? (An) => {
                      Uo(An.deltaY), An.preventDefault(), An.stopPropagation();
                    }
                  : void 0,
              children: [
                Oo > 0 && r(t, { dimColor: true, children: [qH, " ", Oo, " more above"] }),
                Go.map((An) =>
                  e(
                    aMe,
                    {
                      path: An.path,
                      added: An.linesAdded,
                      removed: An.linesRemoved,
                      width: to,
                      onClick: () => Ir(An.path),
                    },
                    An.path,
                  ),
                ),
                (xo > 0 || Qo > 0 || dn > 0) &&
                  r(t, {
                    dimColor: true,
                    children: [
                      xo > 0 ? `${mR} ` : "\u2026 ",
                      [
                        xo > 0 ? `${xo} more below${Rn ? ` (${Rn} to scroll)` : ""}` : null,
                        Qo > 0 ? `${Qo} read-denied` : null,
                        dn > 0 ? `${dn} not shown` : null,
                      ]
                        .filter(Boolean)
                        .join(" \xB7 "),
                    ],
                  }),
                jo > 0 && e(sMe, { count: jo, shown: qt, onToggle: () => lo((An) => !An) }),
              ],
            }),
        ],
      }),
      e(o, {
        ref: kt,
        flexGrow: 1,
        flexDirection: "column",
        overflow: "hidden",
        children: e(Ab, {
          ref: nt.attach,
          flexGrow: 1,
          flexDirection: "column",
          stickyScroll: false,
          paddingX: 1,
          children: r(o, {
            flexDirection: "column",
            width: to,
            children: [
              Pe
                ? e(rr, { message: "Loading diff\u2026", dimColor: true })
                : zo !== null
                  ? en !== null && e(t, { dimColor: true, children: en })
                  : Re.length === 0
                    ? e(sr, {
                        hint: "Per-file diff is skipped above 500 files",
                        children: "Too many changed files to show diff",
                      })
                    : To.length === 0
                      ? e(sr, {
                          hint:
                            Qo > 0 && Xo > 0
                              ? "Read-denied, test, and generated files are hidden in this panel"
                              : Qo > 0
                                ? "Read-denied files are hidden in this panel"
                                : 'Tests and generated files are hidden \xB7 click "show" above to view them',
                          children:
                            Qo > 0 && Xo > 0
                              ? "Only hidden files changed"
                              : Qo > 0
                                ? "Only read-denied files changed"
                                : "Only tests and generated files changed",
                        })
                      : e(o, {
                          flexDirection: "column",
                          gap: 1,
                          children: To.map((An) =>
                            r(
                              o,
                              {
                                flexDirection: "column",
                                ref: (Wr) => {
                                  if (Wr) Ht.current.set(An.path, Wr);
                                  else Ht.current.delete(An.path);
                                },
                                children: [
                                  e(ql, { width: to }),
                                  e(Gie, {
                                    filePath: An.path,
                                    hunks: be.get(An.path) ?? [],
                                    isBinary: An.isBinary,
                                    isLargeFile: An.isLargeFile,
                                    isTruncated: An.isTruncated,
                                    isUntracked: An.isUntracked,
                                    width: to,
                                  }),
                                ],
                              },
                              An.path,
                            ),
                          ),
                        }),
              !Pe &&
                pe !== null &&
                ao.length > 0 &&
                e(rMe, { files: ao, hunks: be, shown: mr, onToggle: () => Pr((An) => !An), width: to }),
            ],
          }),
        }),
      }),
    ],
  });
}

function Ylt(S, x, P) {
  let j;
  switch (S) {
    case "session":
      j = "this session";
      break;
    case "uncommitted":
      j = "uncommitted (vs HEAD)";
      break;
    case "branch":
      if (x.kind === "branch") j = `branch vs ${x.baseBranch}`;
      else j = P ? "branch diff" : "vs HEAD (no base branch)";
      break;
  }
  return P ? `${j}\u2026` : j;
}

function rMe(t4o) {
  let eE = _(21),
    { files: hg, hunks: OAe, shown: aee, onToggle: FAe, width: ZI } = t4o,
    [cee, Ilt] = u(false),
    Elt,
    Dlt;
  if (eE[0] === d) (Elt = () => Ilt(true)), (Dlt = () => Ilt(false)), (eE[0] = Elt), (eE[1] = Dlt);
  else (Elt = eE[0]), (Dlt = eE[1]);
  const BAe = !cee,
    o4o = hg.length;
  let uee;
  if (eE[2] !== hg.length) (uee = k(hg.length, "file")), (eE[2] = hg.length), (eE[3] = uee);
  else uee = eE[3];
  const UAe = aee ? "hide" : "show";
  let dee;
  if (eE[4] !== hg.length || eE[5] !== cee || eE[6] !== BAe || eE[7] !== uee || eE[8] !== UAe)
    (dee = r(t, {
      dimColor: BAe,
      underline: cee,
      children: ["+", o4o, " ", uee, " edited before this session (", UAe, ")"],
    })),
      (eE[4] = hg.length),
      (eE[5] = cee),
      (eE[6] = BAe),
      (eE[7] = uee),
      (eE[8] = UAe),
      (eE[9] = dee);
  else dee = eE[9];
  let mee;
  if (eE[10] !== FAe || eE[11] !== dee)
    (mee = e(o, { flexDirection: "row", onClick: FAe, onMouseEnter: Elt, onMouseLeave: Dlt, children: dee })),
      (eE[10] = FAe),
      (eE[11] = dee),
      (eE[12] = mee);
  else mee = eE[12];
  let pee;
  if (eE[13] !== hg || eE[14] !== OAe || eE[15] !== aee || eE[16] !== ZI)
    (pee =
      aee &&
      r(U, {
        children: [
          e(o, {
            flexDirection: "column",
            marginTop: 1,
            children: hg.map((fee) =>
              r(
                o,
                {
                  flexDirection: "row",
                  width: ZI,
                  children: [
                    e(t, { dimColor: true, children: ub(fee.path, Math.max(ZI - 12, 8)) }),
                    e(o, { flexGrow: 1 }),
                    e(Hh, { added: fee.linesAdded, removed: fee.linesRemoved }),
                  ],
                },
                fee.path,
              ),
            ),
          }),
          hg.length > _U
            ? r(t, { dimColor: true, children: ["diffs hidden above ", _U, " files"] })
            : hg.map((HR) =>
                r(
                  o,
                  {
                    flexDirection: "column",
                    children: [
                      e(ql, { width: ZI }),
                      e(Gie, {
                        filePath: HR.path,
                        hunks: OAe.get(HR.path) ?? [],
                        isBinary: HR.isBinary,
                        isLargeFile: HR.isLargeFile,
                        isTruncated: HR.isTruncated,
                        isUntracked: HR.isUntracked,
                        width: ZI,
                      }),
                    ],
                  },
                  HR.path,
                ),
              ),
        ],
      })),
      (eE[13] = hg),
      (eE[14] = OAe),
      (eE[15] = aee),
      (eE[16] = ZI),
      (eE[17] = pee);
  else pee = eE[17];
  let Nlt;
  if (eE[18] !== mee || eE[19] !== pee)
    (Nlt = r(o, { flexDirection: "column", marginTop: 1, children: [mee, pee] })),
      (eE[18] = mee),
      (eE[19] = pee),
      (eE[20] = Nlt);
  else Nlt = eE[20];
  return Nlt;
}

function iMe(n4o) {
  let $Ae = _(8),
    { onClose: HAe } = n4o,
    [gee, Llt] = u(false),
    Olt,
    Flt;
  if ($Ae[0] === d) (Olt = () => Llt(true)), (Flt = () => Llt(false)), ($Ae[0] = Olt), ($Ae[1] = Flt);
  else (Olt = $Ae[0]), (Flt = $Ae[1]);
  const WAe = !gee;
  let bee;
  if ($Ae[2] !== gee || $Ae[3] !== WAe)
    (bee = e(t, { bold: gee, dimColor: WAe, children: wAn })), ($Ae[2] = gee), ($Ae[3] = WAe), ($Ae[4] = bee);
  else bee = $Ae[4];
  let Blt;
  if ($Ae[5] !== HAe || $Ae[6] !== bee)
    (Blt = e(o, { onClick: HAe, onMouseEnter: Olt, onMouseLeave: Flt, children: bee })),
      ($Ae[5] = HAe),
      ($Ae[6] = bee),
      ($Ae[7] = Blt);
  else Blt = $Ae[7];
  return Blt;
}

function sMe(r4o) {
  let Cee = _(13),
    { count: tE, shown: i4o, onToggle: qAe } = r4o,
    [kee, Ult] = u(false),
    jlt,
    Hlt;
  if (Cee[0] === d) (jlt = () => Ult(true)), (Hlt = () => Ult(false)), (Cee[0] = jlt), (Cee[1] = Hlt);
  else (jlt = Cee[0]), (Hlt = Cee[1]);
  const VAe = !kee;
  let vee;
  if (Cee[2] !== tE) (vee = k(tE, "test")), (Cee[2] = tE), (Cee[3] = vee);
  else vee = Cee[3];
  const GAe = i4o ? "hide" : "show";
  let wee;
  if (Cee[4] !== tE || Cee[5] !== kee || Cee[6] !== VAe || Cee[7] !== vee || Cee[8] !== GAe)
    (wee = r(t, { dimColor: VAe, underline: kee, children: [tE, " ", vee, "/generated (", GAe, ")"] })),
      (Cee[4] = tE),
      (Cee[5] = kee),
      (Cee[6] = VAe),
      (Cee[7] = vee),
      (Cee[8] = GAe),
      (Cee[9] = wee);
  else wee = Cee[9];
  let $lt;
  if (Cee[10] !== qAe || Cee[11] !== wee)
    ($lt = e(o, { flexDirection: "row", onClick: qAe, onMouseEnter: jlt, onMouseLeave: Hlt, children: wee })),
      (Cee[10] = qAe),
      (Cee[11] = wee),
      (Cee[12] = $lt);
  else $lt = Cee[12];
  return $lt;
}

function aMe(s4o) {
  let nE = _(17),
    { path: KAe, added: QAe, removed: zAe, width: a4o, onClick: YAe } = s4o,
    [Pee, Wlt] = u(false);
  const JAe = Math.max(a4o - 12, 8);
  let qlt;
  if (nE[0] !== KAe || nE[1] !== JAe) (qlt = ub(KAe, JAe)), (nE[0] = KAe), (nE[1] = JAe), (nE[2] = qlt);
  else qlt = nE[2];
  let XAe = qlt,
    Vlt,
    Glt;
  if (nE[3] === d) (Vlt = () => Wlt(true)), (Glt = () => Wlt(false)), (nE[3] = Vlt), (nE[4] = Glt);
  else (Vlt = nE[3]), (Glt = nE[4]);
  const ZAe = !Pee;
  let Aee;
  if (nE[5] !== XAe || nE[6] !== Pee || nE[7] !== ZAe)
    (Aee = e(t, { dimColor: ZAe, underline: Pee, children: XAe })),
      (nE[5] = XAe),
      (nE[6] = Pee),
      (nE[7] = ZAe),
      (nE[8] = Aee);
  else Aee = nE[8];
  let Klt;
  if (nE[9] === d) (Klt = e(o, { flexGrow: 1 })), (nE[9] = Klt);
  else Klt = nE[9];
  let Mee;
  if (nE[10] !== QAe || nE[11] !== zAe)
    (Mee = e(Hh, { added: QAe, removed: zAe })), (nE[10] = QAe), (nE[11] = zAe), (nE[12] = Mee);
  else Mee = nE[12];
  let Qlt;
  if (nE[13] !== YAe || nE[14] !== Aee || nE[15] !== Mee)
    (Qlt = r(o, {
      flexDirection: "row",
      onClick: YAe,
      onMouseEnter: Vlt,
      onMouseLeave: Glt,
      children: [Aee, Klt, Mee],
    })),
      (nE[13] = YAe),
      (nE[14] = Aee),
      (nE[15] = Mee),
      (nE[16] = Qlt);
  else Qlt = nE[16];
  return Qlt;
}

F();

function Eee() {
  let S = W((j) => j.fileHistory.trackSequence ?? 0),
    x = W((j) => j.replTab),
    P = ee();
  return z(() => jRe(), [P, S, x]);
}

function Gdt(tZo) {
  return tZo.replTab;
}

function Kdt(oZo) {
  return oZo.mcp.clients;
}

function zdt(nZo) {
  return nZo.pendingWorkerRequest;
}

function Xdt(rZo) {
  return rZo.tasks;
}

function Zdt(iZo) {
  return iZo.transcripts;
}

function emt(sZo) {
  return sZo.elicitation;
}

function tmt(aZo) {
  return aZo.viewingAgentTaskId;
}

function omt(lZo) {
  return lZo.isBriefOnly;
}

function nmt(cZo) {
  return cZo.ideSelection;
}

function rmt() {
  return new AHt();
}

function imt(uZo) {
  return uZo.toolProgress;
}

function smt(dZo) {
  return !!dZo.userInputOnProcessing;
}

function amt() {
  return Hx(null);
}

function umt() {
  return Idn();
}

function _mt(mZo) {
  return !jh.has(mZo.kind);
}

function dmt(pZo) {
  return pZo.open.some(_mt);
}

function pmt() {
  return ie().messageIdleNotifThresholdMs;
}

function fmt() {
  return [];
}

function gmt(fZo) {
  return !!fZo.bashesDialog;
}

function hmt() {
  return new vO();
}

function Smt(gZo) {
  return gZo.exit.kind !== "none";
}

function bmt() {
  return Fx(null);
}

function kmt() {
  return jx(false);
}

function vmt(hZo) {
  return hZo.pendingAgentViewAttach;
}

function wmt(yZo) {
  return yZo === "transcript" ? "prompt" : "transcript";
}

function Tmt(_error, Vdt) {
  p(
    "repl_diff_read",
    "render_threw",
    Vdt.componentStack ? { error_component_stack_hash: Vn(Vdt.componentStack) } : void 0,
  );
}

var pIe = import.meta.require("/$bunfs/root/chunk-7g4qycjf.js").useScheduledTasks;

var fIe = () => null;

function Jvt(Nee) {
  let tct = _(5),
    Z9o = Iu();
  const cMe = Nee.messageQueue ?? Z9o;
  let Lee;
  if (tct[0] !== Nee) (Lee = e(Dte, { ...Nee })), (tct[0] = Nee), (tct[1] = Lee);
  else Lee = tct[1];
  let oct;
  if (tct[2] !== cMe || tct[3] !== Lee)
    (oct = e(Hge, { queue: cMe, children: Lee })), (tct[2] = cMe), (tct[3] = Lee), (tct[4] = oct);
  else oct = tct[4];
  return oct;
}

function Dte(e7o) {
  let Ar = _(531),
    {
      commands: uMe,
      debug: ey,
      initialTools: dMe,
      initialMessages: Wu,
      pendingHookMessages: mMe,
      initialFileHistorySnapshots: t7o,
      initialContentReplacements: fMe,
      mcpClients: Oee,
      dynamicMcpConfig: gMe,
      autoConnectIdeFlag: hMe,
      strictMcpConfig: nct,
      systemPrompt: $R,
      appendSystemPrompt: qR,
      onBeforeQuery: Fee,
      onTurnComplete: yMe,
      onCaptureSnapshot: SMe,
      disabled: rct,
      mainThreadAgentDefinition: rE,
      disableSlashCommands: sct,
      remoteSessionConfig: ty,
      onDetachToCaller: oy,
      embedded: act,
      hideWelcomeChrome: lct,
      cancelRef: VR,
      directConnectConfig: iE,
      sshSession: sE,
      thinkingConfig: Bee,
      thinkingConfigExplicit: o7o,
      fallbackModel: Uee,
      engine: jee,
      onCommandsChange: bMe,
      onQueryParamsChange: aE,
    } = e7o,
    lE = nct === void 0 ? false : nct,
    KC = rct === void 0 ? false : rct,
    kMe = sct === void 0 ? false : sct,
    xu = act === void 0 ? false : act,
    { storageV5: Fs, credentials: Ud } = ge(),
    CMe = Tke(),
    sp = Iu(),
    ll = !!ty,
    cct;
  if (Ar[0] !== iE || Ar[1] !== ll || Ar[2] !== sE)
    (cct = $n() || ll || !!iE || !!sE), (Ar[0] = iE), (Ar[1] = ll), (Ar[2] = sE), (Ar[3] = cct);
  else cct = Ar[3];
  let ny = cct,
    Hd = xt(),
    n7o = a.CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL,
    Ls = ct(),
    r7o = W(Gdt),
    i7o = Eee(),
    s7o = W(Kdt),
    a7o = W(zdt),
    l7o = W(Xdt),
    c7o = W(Zdt),
    vMe = W(emt),
    u7o = W(tmt),
    _s = At(),
    cE = a2e(),
    Vi = Xn(),
    ry = wq(),
    uct,
    dct;
  if (Ar[4] !== Ls || Ar[5] !== ry)
    (uct = () => {
      ece.of(Ls).registry = ry;
    }),
      (dct = [Ls, ry]),
      (Ar[4] = Ls),
      (Ar[5] = ry),
      (Ar[6] = uct),
      (Ar[7] = dct);
  else (uct = Ar[6]), (dct = Ar[7]);
  A(uct, dct);
  let Wd = Xp(),
    ef = Tq();
  SZ();
  let Hee;
  if (Ar[8] !== Vi) (Hee = () => Vi.getState()), (Ar[8] = Vi), (Ar[9] = Hee);
  else Hee = Ar[9];
  let mct;
  if (Ar[10] !== _s || Ar[11] !== Hee) (mct = eh(Hee, _s)), (Ar[10] = _s), (Ar[11] = Hee), (Ar[12] = mct);
  else mct = Ar[12];
  let qu = mct;
  b7(Vi, Ls, qu, Fs);
  let pct;
  if (Ar[13] !== Wu || Ar[14] !== Vi)
    (pct = () => {
      let d7o = et();
      return (
        Vi.setState((fct) => ({
          ...fct,
          transcripts: { ...fct.transcripts, [d7o]: { messages: Wu ?? [], inProgressToolUseIDs: new Set() } },
        })),
        null
      );
    }),
      (Ar[13] = Wu),
      (Ar[14] = Vi),
      (Ar[15] = pct);
  else pct = Ar[15];
  u(pct);
  let gct;
  if (Ar[16] !== _s || Ar[17] !== Vi.getState)
    (gct = yse(Sde(Vi.getState, _s, "teammateColors"))), (Ar[16] = _s), (Ar[17] = Vi.getState), (Ar[18] = gct);
  else gct = Ar[18];
  let wMe = gct,
    uE = dE(),
    Pu = Oc(),
    m7o = W(omt),
    [Kl, hct] = u("prompt"),
    [yct, Sct] = u(false),
    bct;
  if (Ar[19] === d)
    (bct = () => {
      hct("prompt"), Sct(false);
    }),
      (Ar[19] = bct);
  else bct = Ar[19];
  let p7o = bct,
    { addNotification: Pc, removeNotification: GR } = Or(),
    pE = Hy(Oee, s7o),
    [TMe, f7o] = u(null),
    kct;
  if (Ar[20] !== Pu || Ar[21] !== Vi)
    (kct = () => eee({ model: Pu, effortValue: sl(Vi.getState()) })), (Ar[20] = Pu), (Ar[21] = Vi), (Ar[22] = kct);
  else kct = Ar[22];
  let [xU, g7o] = u(kct);
  bZ(), j9(Pc, GR);
  let Cct;
  if (
    Ar[23] !== kMe ||
    Ar[24] !== uMe ||
    Ar[25] !== fMe ||
    Ar[26] !== gMe ||
    Ar[27] !== rE ||
    Ar[28] !== Oee ||
    Ar[29] !== Wu ||
    Ar[30] !== dMe ||
    Ar[31] !== ny ||
    Ar[32] !== bMe ||
    Ar[33] !== Ls ||
    Ar[34] !== Fs ||
    Ar[35] !== Vi
  )
    (Cct = () =>
      new _D({
        store: Vi,
        initialMcpClients: Oee,
        storageV5: Fs,
        initialMessages: Wu,
        initialContentReplacements: fMe,
        initialCommands: uMe,
        initialDynamicMcpConfig: gMe,
        initialTools: dMe,
        mainThreadAgentDefinition: rE,
        disableSlashCommands: kMe,
        isThinClient: ny,
        session: Ls,
        onCommandsChange: bMe,
      })),
      (Ar[23] = kMe),
      (Ar[24] = uMe),
      (Ar[25] = fMe),
      (Ar[26] = gMe),
      (Ar[27] = rE),
      (Ar[28] = Oee),
      (Ar[29] = Wu),
      (Ar[30] = dMe),
      (Ar[31] = ny),
      (Ar[32] = bMe),
      (Ar[33] = Ls),
      (Ar[34] = Fs),
      (Ar[35] = Vi),
      (Ar[36] = Cct);
  else Cct = Ar[36];
  let [Yi] = u(Cct),
    { commands: $ee, renderingTools: KR, dynamicMcpConfig: db } = Xe(Yi),
    vct;
  if (
    Ar[37] !== Hd.setTimeout ||
    Ar[38] !== jee ||
    Ar[39] !== Wu?.length ||
    Ar[40] !== ty?.initialPromptUuid ||
    Ar[41] !== Yi ||
    Ar[42] !== Vi ||
    Ar[43] !== qu
  )
    (vct = () => {
      let h7o = jee === void 0;
      let wct = jee ?? UH({ store: Vi, scope: Yi, readPendingQueryParams: () => Wee.readPendingQueryParams() });
      let y7o = T9e();
      let Wee = new AB({
        engine: wct,
        ownsEngine: h7o,
        initialExternalLoading: ty?.initialPromptUuid !== void 0,
        initialHaikuTitleAttempted: (Wu?.length ?? 0) > 0,
        onTimingChange: (S7o) => pdt(qu, et(), S7o),
        stream: {
          scheduleTimeout: Hd.setTimeout,
          isStreamingTextVisible: () => ckt(Vi.getState().settings.prefersReducedMotion, y7o),
          getTranscriptLength: () => Tct.getSnapshot().length,
        },
      });
      let _ct = et();
      let Tct = new VB({
        initial: Vi.getState().transcripts[_ct]?.messages ?? [],
        project: (Rct, b7o) => {
          Wee.stream.trackTranscriptWrite(b7o, Rct);
          let k7o = Math.round(Wee.stream.responseLength / 4);
          Z$(Vi, _ct, Rct, k7o);
        },
      });
      return { sessionEngine: wct, turn: Wee, transcript: Tct };
    }),
      (Ar[37] = Hd.setTimeout),
      (Ar[38] = jee),
      (Ar[39] = Wu?.length),
      (Ar[40] = ty?.initialPromptUuid),
      (Ar[41] = Yi),
      (Ar[42] = Vi),
      (Ar[43] = qu),
      (Ar[44] = vct);
  else vct = Ar[44];
  let [C7o] = u(vct),
    { sessionEngine: fE, turn: ar, transcript: qr } = C7o,
    xct;
  if (Ar[45] !== aE || Ar[46] !== ar.readPendingQueryParams)
    (xct = () => {
      aE?.(ar.readPendingQueryParams);
    }),
      (Ar[45] = aE),
      (Ar[46] = ar.readPendingQueryParams),
      (Ar[47] = xct);
  else xct = Ar[47];
  let Pct;
  if (Ar[48] !== aE || Ar[49] !== ar) (Pct = [aE, ar]), (Ar[48] = aE), (Ar[49] = ar), (Ar[50] = Pct);
  else Pct = Ar[50];
  A(xct, Pct);
  let Act;
  if (
    Ar[51] !== Pc ||
    Ar[52] !== ey ||
    Ar[53] !== xu ||
    Ar[54] !== ll ||
    Ar[55] !== oy ||
    Ar[56] !== Fs ||
    Ar[57] !== Vi ||
    Ar[58] !== qr ||
    Ar[59] !== ar.guard
  )
    (Act = () =>
      new NB({
        debug: ey,
        embedded: xu,
        onDetachToCaller: oy,
        hasSuppressedDialogs: false,
        isRemoteSession: ll,
        addNotification: Pc,
        store: Vi,
        storageV5: Fs,
        exitReaders: {
          getMessages: () => qr.getSnapshot(),
          isMidTurn: () => ar.guard.isActive,
          isResponseStreaming: () => ar.guard.isRunning,
        },
      })),
      (Ar[51] = Pc),
      (Ar[52] = ey),
      (Ar[53] = xu),
      (Ar[54] = ll),
      (Ar[55] = oy),
      (Ar[56] = Fs),
      (Ar[57] = Vi),
      (Ar[58] = qr),
      (Ar[59] = ar.guard),
      (Ar[60] = Act);
  else Act = Ar[60];
  let [zs] = u(Act),
    _Me = Xe(zs, nmt),
    qee = qr.apply;
  DR.useUiLog(qee);
  let Mct;
  if (Ar[61] !== qee)
    (Mct = () => IR.createTurnEventTail((v7o) => qee({ type: "append", messages: v7o }))),
      (Ar[61] = qee),
      (Ar[62] = Mct);
  else Mct = Ar[62];
  let [mb] = u(Mct),
    [qd] = u(rmt),
    Ict;
  if (Ar[63] !== qd || Ar[64] !== Yi.requestDialog || Ar[65] !== _s)
    (Ict = () =>
      new wD({
        requestDialog: Yi.requestDialog,
        getBridge: () => qd.bridge?.permission,
        applyPermissionUpdate: (w7o) =>
          _s((Ect) => ({ ...Ect, toolPermissionContext: Uc(Ect.toolPermissionContext, w7o) })),
      })),
      (Ar[63] = qd),
      (Ar[64] = Yi.requestDialog),
      (Ar[65] = _s),
      (Ar[66] = Ict);
  else Ict = Ar[66];
  let [xMe] = u(Ict),
    Dct;
  if (
    Ar[67] !== Ud ||
    Ar[68] !== ll ||
    Ar[69] !== xMe ||
    Ar[70] !== Yi ||
    Ar[71] !== _s ||
    Ar[72] !== Fs ||
    Ar[73] !== Vi ||
    Ar[74] !== qr.getSnapshot
  )
    (Dct = () =>
      new WD({
        store: Vi,
        setAppState: _s,
        storageV5: Fs,
        credentials: Ud,
        scope: Yi,
        getMessages: qr.getSnapshot,
        networkPrompts: xMe,
        isRemoteSession: ll,
      })),
      (Ar[67] = Ud),
      (Ar[68] = ll),
      (Ar[69] = xMe),
      (Ar[70] = Yi),
      (Ar[71] = _s),
      (Ar[72] = Fs),
      (Ar[73] = Vi),
      (Ar[74] = qr.getSnapshot),
      (Ar[75] = Dct);
  else Dct = Ar[75];
  let [PMe] = u(Dct),
    { isLoading: tf } = Xe(ar),
    PU = Xe(ar.stream, imt),
    T7o = Xe(ar.stream, smt),
    iy = PU.size > 0,
    fb = d7(PU),
    Vee = ar.guard,
    AMe = ar.buildToolUseContext,
    MMe = MZ(qr, tf, !ll),
    Lct;
  if (Ar[76] !== MMe || Ar[77] !== qr)
    (Lct = () => new xB({ transcript: qr, awaySummary: MMe })), (Ar[76] = MMe), (Ar[77] = qr), (Ar[78] = Lct);
  else Lct = Ar[78];
  let [Qa] = u(Lct),
    Oct;
  if (Ar[79] !== Hd.setTimeout || Ar[80] !== Qa || Ar[81] !== ar)
    (Oct = () => (
      d6e(bxe()),
      new IL({
        valueStore: j_,
        scheduleTimeout: Hd.setTimeout,
        rewriteEdit: (_7o, R7o) => ar.rewriteInputOverAutoContinuePrefill(_7o, R7o),
        onEdit: (x7o, P7o) => {
          Qa.onPromptEdit(x7o, P7o), hx.recordUserActivity(), D4(true);
        },
      })
    )),
      (Ar[79] = Hd.setTimeout),
      (Ar[80] = Qa),
      (Ar[81] = ar),
      (Ar[82] = Oct);
  else Oct = Ar[82];
  let [za] = u(Oct),
    Fct,
    Bct;
  if (Ar[83] !== za || Ar[84] !== ar)
    (Fct = () => () => {
      ar.dispose(), za.dispose();
    }),
      (Bct = [ar, za]),
      (Ar[83] = za),
      (Ar[84] = ar),
      (Ar[85] = Fct),
      (Ar[86] = Bct);
  else (Fct = Ar[85]), (Bct = Ar[86]);
  A(Fct, Bct);
  let Uct;
  if (
    Ar[87] !== Hd ||
    Ar[88] !== Ud ||
    Ar[89] !== Wd ||
    Ar[90] !== za ||
    Ar[91] !== rE ||
    Ar[92] !== Wu ||
    Ar[93] !== sp ||
    Ar[94] !== mMe ||
    Ar[95] !== PMe ||
    Ar[96] !== Yi ||
    Ar[97] !== Ls ||
    Ar[98] !== fE ||
    Ar[99] !== ry ||
    Ar[100] !== _s ||
    Ar[101] !== ef ||
    Ar[102] !== Fs ||
    Ar[103] !== Vi ||
    Ar[104] !== qu ||
    Ar[105] !== qr ||
    Ar[106] !== mb ||
    Ar[107] !== ar
  )
    (Uct = () =>
      new $D({
        session: Ls,
        store: Vi,
        setAppState: _s,
        transcript: qr,
        turn: ar,
        draft: za,
        scope: Yi,
        engine: fE,
        dialogStore: Wd,
        taskRegistry: qu,
        messageQueue: sp,
        storageV5: Fs,
        credentials: Ud,
        sessionHooks: ry,
        initialMessages: Wu,
        initialMainThreadAgentDefinition: rE,
        resetReplTabToConvo: () => wQ(Ls.host, _s),
        resetTurnEventTail: () => mb.reset(),
        clock: Hd,
        sandbox: PMe,
        spinnerStore: ef,
        pendingHookMessages: mMe,
      })),
      (Ar[87] = Hd),
      (Ar[88] = Ud),
      (Ar[89] = Wd),
      (Ar[90] = za),
      (Ar[91] = rE),
      (Ar[92] = Wu),
      (Ar[93] = sp),
      (Ar[94] = mMe),
      (Ar[95] = PMe),
      (Ar[96] = Yi),
      (Ar[97] = Ls),
      (Ar[98] = fE),
      (Ar[99] = ry),
      (Ar[100] = _s),
      (Ar[101] = ef),
      (Ar[102] = Fs),
      (Ar[103] = Vi),
      (Ar[104] = qu),
      (Ar[105] = qr),
      (Ar[106] = mb),
      (Ar[107] = ar),
      (Ar[108] = Uct);
  else Uct = Ar[108];
  let [Sa] = u(Uct),
    { conversationId: A7o } = Xe(Sa),
    jct = Bb();
  tee(), cR(Yi.dialogChannel);
  let Hct, Wct;
  if (Ar[109] !== Kl)
    (Hct = () => (Hx(Kl === "transcript" ? Kl : null), amt)),
      (Wct = [Kl]),
      (Ar[109] = Kl),
      (Ar[110] = Hct),
      (Ar[111] = Wct);
  else (Hct = Ar[110]), (Wct = Ar[111]);
  qn(Hct, Wct);
  let AU = y$() ?? null,
    qct,
    Vct;
  if (Ar[112] !== AU) (qct = () => (xdn(AU), umt)), (Vct = [AU]), (Ar[112] = AU), (Ar[113] = qct), (Ar[114] = Vct);
  else (qct = Ar[113]), (Vct = Ar[114]);
  qn(qct, Vct);
  let fc = Yi.requestDialog,
    Gct;
  if (Ar[115] !== fc || Ar[116] !== ar.loading || Ar[117] !== ar.tasks)
    (Gct = { requestDialog: fc, turnActivity: ar.loading, tasks: ar.tasks }),
      (Ar[115] = fc),
      (Ar[116] = ar.loading),
      (Ar[117] = ar.tasks),
      (Ar[118] = Gct);
  else Gct = Ar[118];
  let IMe = Gct,
    Kct;
  if (
    Ar[119] !== Pc ||
    Ar[120] !== fc ||
    Ar[121] !== Ls ||
    Ar[122] !== _s ||
    Ar[123] !== Fs ||
    Ar[124] !== Vi ||
    Ar[125] !== qr.getSnapshot ||
    Ar[126] !== ar.guard
  )
    (Kct = () =>
      new CD({
        session: Ls,
        store: Vi,
        setAppState: _s,
        requestDialog: fc,
        addNotification: Pc,
        storageV5: Fs,
        getMessages: qr.getSnapshot,
        getIsResponseStreaming: () => ar.guard.isRunning,
      })),
      (Ar[119] = Pc),
      (Ar[120] = fc),
      (Ar[121] = Ls),
      (Ar[122] = _s),
      (Ar[123] = Fs),
      (Ar[124] = Vi),
      (Ar[125] = qr.getSnapshot),
      (Ar[126] = ar.guard),
      (Ar[127] = Kct);
  else Kct = Ar[127];
  let [Gee] = u(Kct),
    Qct,
    zct;
  if (Ar[128] !== Gee) (Qct = () => Gee.start()), (zct = [Gee]), (Ar[128] = Gee), (Ar[129] = Qct), (Ar[130] = zct);
  else (Qct = Ar[129]), (zct = Ar[130]);
  A(Qct, zct);
  let eut = NZ();
  hU(fc, eut), yU(fc, eut);
  let gb = Yi.localJsx,
    Vu = oE(Qm.kind),
    M7o = oE(sf.kind),
    Kee = tB(),
    tut;
  if (Ar[131] !== Yi || Ar[132] !== Ls || Ar[133] !== Sa || Ar[134] !== Vi)
    (tut = () =>
      new vD({
        session: Ls,
        store: Vi,
        sessionController: Sa,
        scope: Yi,
        disabled: a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE,
      })),
      (Ar[131] = Yi),
      (Ar[132] = Ls),
      (Ar[133] = Sa),
      (Ar[134] = Vi),
      (Ar[135] = tut);
  else tut = Ar[135];
  let [pm] = u(tut),
    Qee = Ege(),
    Yee = $x(),
    I7o = Qj(dmt),
    Jee = eB(),
    E7o = xnt(),
    Zee = AU === nX.kind,
    out;
  if (Ar[136] === d) (out = et()), (Ar[136] = out);
  else out = Ar[136];
  let { messages: MU } = wf(out),
    nut;
  if (Ar[137] !== gb || Ar[138] !== Vi || Ar[139] !== qr)
    (nut = (D7o) => {
      hZ({ localJsx: gb, getSessionMemories: () => Vi.getState().sessionMemories ?? [], transcript: qr, trigger: D7o });
    }),
      (Ar[137] = gb),
      (Ar[138] = Vi),
      (Ar[139] = qr),
      (Ar[140] = nut);
  else nut = Ar[140];
  let EMe = nut,
    rut;
  if (Ar[141] !== gb || Ar[142] !== Sa || Ar[143] !== ar)
    (rut = () => {
      eW({ localJsx: gb, turn: ar, sessionController: Sa });
    }),
      (Ar[141] = gb),
      (Ar[142] = Sa),
      (Ar[143] = ar),
      (Ar[144] = rut);
  else rut = Ar[144];
  let DMe = rut,
    iut;
  if (
    Ar[145] !== Pc ||
    Ar[146] !== Hd ||
    Ar[147] !== Ud ||
    Ar[148] !== Wd ||
    Ar[149] !== ty?.initialPromptUuid ||
    Ar[150] !== GR ||
    Ar[151] !== Fs ||
    Ar[152] !== uE ||
    Ar[153] !== qr.getSnapshot ||
    Ar[154] !== ar
  )
    (iut = () =>
      new JE({
        turn: ar,
        getMessages: qr.getSnapshot,
        clock: Hd,
        now: Date.now,
        getLastInteractionTime: Eh,
        isDialogOnScreen: () => Ux() || Wd.getState().open.length > 0,
        hasPendingLoopWakeup: aX,
        hasArmedQuotaAutoResume: xq,
        getIdleNotifThresholdMs: pmt,
        sendIdleNotification: () => {
          ev({ message: "Claude is waiting for your input", notificationType: "idle_prompt" }, uE, {
            storageV5: Fs,
            credentials: Ud,
          });
        },
        addNotification: Pc,
        removeNotification: GR,
        hasSeededRemotePrompt: ty?.initialPromptUuid !== void 0,
      })),
      (Ar[145] = Pc),
      (Ar[146] = Hd),
      (Ar[147] = Ud),
      (Ar[148] = Wd),
      (Ar[149] = ty?.initialPromptUuid),
      (Ar[150] = GR),
      (Ar[151] = Fs),
      (Ar[152] = uE),
      (Ar[153] = qr.getSnapshot),
      (Ar[154] = ar),
      (Ar[155] = iut);
  else iut = Ar[155];
  let [yg] = u(iut),
    sut,
    aut;
  if (Ar[156] !== Vu || Ar[157] !== iy || Ar[158] !== yg)
    (sut = () => {
      yg.setLocalOverlayShowing(iy || Vu);
    }),
      (aut = [yg, iy, Vu]),
      (Ar[156] = Vu),
      (Ar[157] = iy),
      (Ar[158] = yg),
      (Ar[159] = sut),
      (Ar[160] = aut);
  else (sut = Ar[159]), (aut = Ar[160]);
  A(sut, aut);
  let lut;
  if (Ar[161] !== mb || Ar[162] !== ar.abortController?.signal)
    (lut = () =>
      ER.createTurnStep((N7o) => {
        let L7o = Ub.dollar({ signal: ar.abortController?.signal });
        mb.enqueue("turn.step", () => L7o.turn.step(N7o).then(fmt));
      })),
      (Ar[161] = mb),
      (Ar[162] = ar.abortController?.signal),
      (Ar[163] = lut);
  else lut = Ar[163];
  let [hb] = u(lut),
    cut;
  if (Ar[164] !== mb.enqueue || Ar[165] !== hb.flush || Ar[166] !== hb.note || Ar[167] !== hb.read)
    (cut = { begin: dIe, read: hb.read, note: hb.note, enqueue: mb.enqueue, flushStep: hb.flush }),
      (Ar[164] = mb.enqueue),
      (Ar[165] = hb.flush),
      (Ar[166] = hb.note),
      (Ar[167] = hb.read),
      (Ar[168] = cut);
  else cut = Ar[168];
  let NMe = cut,
    uut,
    dut;
  if (Ar[169] !== ar)
    (uut = () => {
      let O7o = Zke((mut) => {
        if (mut === "armed" || mut === "rearmed") ar.retractRateLimitAutoContinue();
      });
      let B7o = sze((F7o) => {
        if (F7o.type === "accepted") ar.retractRateLimitAutoContinue();
      });
      let j7o = jYt((U7o) => {
        if (U7o.type === "reset") ar.retractRateLimitAutoContinue();
      });
      return () => {
        O7o(), B7o(), j7o();
      };
    }),
      (dut = [ar]),
      (Ar[169] = ar),
      (Ar[170] = uut),
      (Ar[171] = dut);
  else (uut = Ar[170]), (dut = Ar[171]);
  A(uut, dut);
  let put;
  if (
    Ar[172] !== Hd ||
    Ar[173] !== Ud ||
    Ar[174] !== za.value ||
    Ar[175] !== CMe ||
    Ar[176] !== sp ||
    Ar[177] !== fc ||
    Ar[178] !== Yi ||
    Ar[179] !== Ls ||
    Ar[180] !== _s ||
    Ar[181] !== Fs ||
    Ar[182] !== Vi ||
    Ar[183] !== qu ||
    Ar[184] !== pm ||
    Ar[185] !== qr ||
    Ar[186] !== ar
  )
    (put = () =>
      new XE({
        store: Vi,
        setAppState: _s,
        transcript: qr,
        turn: ar,
        messageQueue: sp,
        session: Ls,
        taskRegistry: qu,
        storageV5: Fs,
        credentials: Ud,
        fleetNudgeStore: CMe,
        clock: Hd,
        now: Date.now,
        getInputValue: () => za.value,
        requestDialog: fc,
        titles: pm,
        scope: Yi,
      })),
      (Ar[172] = Hd),
      (Ar[173] = Ud),
      (Ar[174] = za.value),
      (Ar[175] = CMe),
      (Ar[176] = sp),
      (Ar[177] = fc),
      (Ar[178] = Yi),
      (Ar[179] = Ls),
      (Ar[180] = _s),
      (Ar[181] = Fs),
      (Ar[182] = Vi),
      (Ar[183] = qu),
      (Ar[184] = pm),
      (Ar[185] = qr),
      (Ar[186] = ar),
      (Ar[187] = put);
  else put = Ar[187];
  let [Ql] = u(put),
    yut;
  if (Ar[188] !== Sa || Ar[189] !== _s)
    (yut = (H7o) => {
      _s(P8t), Sa.applyConversationReset(H7o);
    }),
      (Ar[188] = Sa),
      (Ar[189] = _s),
      (Ar[190] = yut);
  else yut = Ar[190];
  let gE = yut,
    but;
  if (
    Ar[191] !== gE ||
    Ar[192] !== iE ||
    Ar[193] !== ty ||
    Ar[194] !== Yi ||
    Ar[195] !== Sa.applyConversationReset ||
    Ar[196] !== ef.main ||
    Ar[197] !== sE ||
    Ar[198] !== qr ||
    Ar[199] !== ar
  )
    (but = {
      remoteSessionConfig: ty,
      directConnectConfig: iE,
      sshSession: sE,
      transcript: qr,
      turn: ar,
      scope: Yi,
      spinner: ef.main,
      applyConversationReset: Sa.applyConversationReset,
      applyLocalConversationReset: gE,
    }),
      (Ar[191] = gE),
      (Ar[192] = iE),
      (Ar[193] = ty),
      (Ar[194] = Yi),
      (Ar[195] = Sa.applyConversationReset),
      (Ar[196] = ef.main),
      (Ar[197] = sE),
      (Ar[198] = qr),
      (Ar[199] = ar),
      (Ar[200] = but);
  else but = Ar[200];
  let { transport: yb, activeRemote: LMe, cancellableExternalLoading: OMe } = m$(but),
    kut;
  if (Ar[201] !== MU || Ar[202] !== Kl || Ar[203] !== ar)
    (kut = { turn: ar, messages: MU, screen: Kl }), (Ar[201] = MU), (Ar[202] = Kl), (Ar[203] = ar), (Ar[204] = kut);
  else kut = Ar[204];
  let { hasDisplayedStreamingText: $7o, tailBlank: W7o, focusFoldHoldsPreview: q7o } = LUe(kut),
    FMe = oge(),
    ete = Xe(zs, gmt),
    tte = oE(nX.kind),
    Cut,
    vut;
  if (Ar[205] !== ete || Ar[206] !== zs || Ar[207] !== tte)
    (Cut = () => {
      if (tte && ete) zs.closeBashesDialog();
    }),
      (vut = [tte, ete, zs]),
      (Ar[205] = ete),
      (Ar[206] = zs),
      (Ar[207] = tte),
      (Ar[208] = Cut),
      (Ar[209] = vut);
  else (Cut = Ar[208]), (vut = Ar[209]);
  A(Cut, vut);
  let [BMe] = mn(),
    wut,
    Tut;
  if (Ar[210] !== Ls || Ar[211] !== _s)
    (wut = () => {
      let xut = () =>
        z4e() ? LH(Ls, (Rut) => _s((UMe) => (gIe(UMe.narration, Rut) ? UMe : { ...UMe, narration: Rut }))) : xx(Ls);
      xut();
      let V7o = Yh(xut);
      return () => {
        V7o(), xx(Ls);
      };
    }),
      (Tut = [Ls, _s]),
      (Ar[210] = Ls),
      (Ar[211] = _s),
      (Ar[212] = wut),
      (Ar[213] = Tut);
  else (wut = Ar[212]), (Tut = Ar[213]);
  A(wut, Tut);
  let G7o = T7o || ar.isMainLoopBusy || sp.getMainThreadQueueLength() > 0,
    Ku = Uln({ viewingAgentTaskId: u7o, tasks: l7o, transcripts: c7o, mainConversationId: A7o, mainIsBusy: G7o }),
    ote = !fb && !I7o && Ku.isLoading && !a7o && (!$7o || W7o || m7o || q7o);
  const jMe = vMe.queue[0]?.serverName;
  let Put;
  if (Ar[214] !== jMe) (Put = { elicitationServer: jMe }), (Ar[214] = jMe), (Ar[215] = Put);
  else Put = Ar[215];
  M9(Put), D9();
  let Aut, Mut;
  if (Ar[216] !== Ql || Ar[217] !== yg || Ar[218] !== Qa || Ar[219] !== pm)
    (Aut = () => (
      pm.connect(),
      () => {
        yg.dispose(), Ql.dispose(), pm.dispose(), Qa.dispose();
      }
    )),
      (Mut = [yg, Ql, pm, Qa]),
      (Ar[216] = Ql),
      (Ar[217] = yg),
      (Ar[218] = Qa),
      (Ar[219] = pm),
      (Ar[220] = Aut),
      (Ar[221] = Mut);
  else (Aut = Ar[220]), (Mut = Ar[221]);
  A(Aut, Mut);
  let [hE] = u(hmt),
    Iut;
  if (Ar[222] !== hMe || Ar[223] !== TMe || Ar[224] !== fc || Ar[225] !== Yi.addAutoConnectedIde)
    (Iut = {
      autoConnectIdeFlag: hMe,
      ideToInstallExtension: TMe,
      onAutoConnectIde: Yi.addAutoConnectedIde,
      requestDialog: fc,
    }),
      (Ar[222] = hMe),
      (Ar[223] = TMe),
      (Ar[224] = fc),
      (Ar[225] = Yi.addAutoConnectedIde),
      (Ar[226] = Iut);
  else Iut = Ar[226];
  let SE = XB(Iut),
    Eut;
  if (Ar[227] !== _s) (Eut = (K7o) => _s((Q7o) => ({ ...Q7o, fileHistory: K7o }))), (Ar[227] = _s), (Ar[228] = Eut);
  else Eut = Ar[228];
  EZ(t7o, Eut);
  let Dut, Lut;
  if (Ar[229] !== Sa) (Dut = () => Sa.start()), (Lut = [Sa]), (Ar[229] = Sa), (Ar[230] = Dut), (Ar[231] = Lut);
  else (Dut = Ar[230]), (Lut = Ar[231]);
  A(Dut, Lut);
  let Out = Xe(zs, Smt),
    Nl = O$({
      exitFlowActive: Out,
      isPromptInputActive: jct,
      hasBlockingToolProgress: fb,
      hasLocalJsxPanel: Vu,
      hasElicitationRequest: vMe.queue[0] !== void 0,
      leftArrowConfirmOpen: M7o,
      isLoading: tf,
      isBgSession: wt(),
      hasEffortMediumNudge: xU !== void 0,
      hasOpenDialog: Qee,
    }),
    nte = oB(),
    z7o = Qj(Q4),
    ite = jct && !!(z7o || vMe.queue[0]),
    jut,
    Hut;
  if (Ar[232] !== zs || Ar[233] !== ey || Ar[234] !== xu || Ar[235] !== ite || Ar[236] !== oy)
    (jut = () => {
      zs.setView({ debug: ey, embedded: xu, onDetachToCaller: oy, hasSuppressedDialogs: ite });
    }),
      (Hut = [zs, ey, xu, oy, ite]),
      (Ar[232] = zs),
      (Ar[233] = ey),
      (Ar[234] = xu),
      (Ar[235] = ite),
      (Ar[236] = oy),
      (Ar[237] = jut),
      (Ar[238] = Hut);
  else (jut = Ar[237]), (Hut = Ar[238]);
  qn(jut, Hut);
  let Wut, qut;
  if (Ar[239] !== Nl)
    (Wut = () => (Fx(Nl ?? null), bmt)), (qut = [Nl]), (Ar[239] = Nl), (Ar[240] = Wut), (Ar[241] = qut);
  else (Wut = Ar[240]), (qut = Ar[241]);
  qn(Wut, qut);
  let Vut, Gut;
  if (Ar[242] !== fb) (Vut = () => (jx(fb), kmt)), (Gut = [fb]), (Ar[242] = fb), (Ar[243] = Vut), (Ar[244] = Gut);
  else (Vut = Ar[243]), (Gut = Ar[244]);
  qn(Vut, Gut);
  let Qut;
  if (
    Ar[245] !== Pc ||
    Ar[246] !== zs ||
    Ar[247] !== Wd ||
    Ar[248] !== za ||
    Ar[249] !== yg ||
    Ar[250] !== sp ||
    Ar[251] !== Yi ||
    Ar[252] !== Qa ||
    Ar[253] !== Ls ||
    Ar[254] !== Sa ||
    Ar[255] !== _s ||
    Ar[256] !== cE ||
    Ar[257] !== ef ||
    Ar[258] !== Fs ||
    Ar[259] !== Vi ||
    Ar[260] !== qu ||
    Ar[261] !== qr ||
    Ar[262] !== yb ||
    Ar[263] !== ar
  )
    (Qut = () =>
      new OB({
        store: Vi,
        setAppState: _s,
        setSessionState: cE,
        session: Ls,
        storageV5: Fs,
        dialogStore: Wd,
        spinnerStore: ef,
        taskRegistry: qu,
        transcript: qr,
        turn: ar,
        draft: za,
        messageQueue: sp,
        chrome: zs,
        scope: Yi,
        sessionController: Sa,
        idleNudge: yg,
        transport: yb,
        scrollPin: Qa,
        addNotification: Pc,
      })),
      (Ar[245] = Pc),
      (Ar[246] = zs),
      (Ar[247] = Wd),
      (Ar[248] = za),
      (Ar[249] = yg),
      (Ar[250] = sp),
      (Ar[251] = Yi),
      (Ar[252] = Qa),
      (Ar[253] = Ls),
      (Ar[254] = Sa),
      (Ar[255] = _s),
      (Ar[256] = cE),
      (Ar[257] = ef),
      (Ar[258] = Fs),
      (Ar[259] = Vi),
      (Ar[260] = qu),
      (Ar[261] = qr),
      (Ar[262] = yb),
      (Ar[263] = ar),
      (Ar[264] = Qut);
  else Qut = Ar[264];
  let [hc] = u(Qut),
    zut;
  if (Ar[265] !== VR || Ar[266] !== hc.cancelAndDrainPending)
    (zut = () => {
      if (VR) VR.current = hc.cancelAndDrainPending;
    }),
      (Ar[265] = VR),
      (Ar[266] = hc.cancelAndDrainPending),
      (Ar[267] = zut);
  else zut = Ar[267];
  let Yut;
  if (Ar[268] !== VR || Ar[269] !== hc) (Yut = [VR, hc]), (Ar[268] = VR), (Ar[269] = hc), (Ar[270] = Yut);
  else Yut = Ar[270];
  A(zut, Yut);
  let Jut;
  if (
    Ar[271] !== OMe ||
    Ar[272] !== zs ||
    Ar[273] !== za ||
    Ar[274] !== Kl ||
    Ar[275] !== hc ||
    Ar[276] !== qr ||
    Ar[277] !== ar
  )
    (Jut = e($N, {
      turn: ar,
      transcript: qr,
      draft: za,
      chrome: zs,
      submitController: hc,
      screen: Kl,
      isExternalLoading: OMe,
    })),
      (Ar[271] = OMe),
      (Ar[272] = zs),
      (Ar[273] = za),
      (Ar[274] = Kl),
      (Ar[275] = hc),
      (Ar[276] = qr),
      (Ar[277] = ar),
      (Ar[278] = Jut);
  else Jut = Ar[278];
  let ate = Jut,
    zR = z9(),
    Zut,
    edt;
  if (Ar[279] !== Yi)
    (Zut = () => (Yi.connect(), () => Yi.dispose())), (edt = [Yi]), (Ar[279] = Yi), (Ar[280] = Zut), (Ar[281] = edt);
  else (Zut = Ar[280]), (edt = Ar[281]);
  qn(Zut, edt);
  let tdt;
  if (Ar[282] !== Ql.backgroundQuery || Ar[283] !== qr || Ar[284] !== ar)
    (tdt = { transcript: qr, turn: ar, onBackgroundQuery: Ql.backgroundQuery }),
      (Ar[282] = Ql.backgroundQuery),
      (Ar[283] = qr),
      (Ar[284] = ar),
      (Ar[285] = tdt);
  else tdt = Ar[285];
  let { handleBackgroundSession: HMe } = A7(tdt),
    { markTurnStart: qMe, markTurnDone: VMe } = oee(),
    IU = W(vmt),
    odt,
    ldt;
  if (Ar[286] !== Ql || Ar[287] !== IU)
    (odt = () => {
      if (IU !== void 0) Ql.onAttachRequest(IU);
    }),
      (ldt = [IU, Ql]),
      (Ar[286] = Ql),
      (Ar[287] = IU),
      (Ar[288] = odt),
      (Ar[289] = ldt);
  else (odt = Ar[288]), (ldt = Ar[289]);
  A(odt, ldt);
  let cdt;
  if (Ar[290] !== Ql || Ar[291] !== oy || Ar[292] !== qr || Ar[293] !== ar)
    (cdt = { gesture: Ql, turn: ar, transcript: qr, onDetachToCaller: oy }),
      (Ar[290] = Ql),
      (Ar[291] = oy),
      (Ar[292] = qr),
      (Ar[293] = ar),
      (Ar[294] = cdt);
  else cdt = Ar[294];
  mA(cdt);
  let udt, ddt;
  if (Ar[295] !== Vee || Ar[296] !== Fs || Ar[297] !== qr)
    (udt = () => {
      eNt(() => HHt(qr.getSnapshot(), { responseStreaming: Vee.isRunning }, Fs));
    }),
      (ddt = [qr, Vee, Fs]),
      (Ar[295] = Vee),
      (Ar[296] = Fs),
      (Ar[297] = qr),
      (Ar[298] = udt),
      (Ar[299] = ddt);
  else (udt = Ar[298]), (ddt = Ar[299]);
  A(udt, ddt), H9(iHt()), L9(MU, MU.length === Wu?.length, tf);
  const GMe = o7o ? Bee : void 0;
  let mdt;
  if (
    Ar[300] !== qR ||
    Ar[301] !== $R ||
    Ar[302] !== qd ||
    Ar[303] !== Yi ||
    Ar[304] !== fE ||
    Ar[305] !== GMe ||
    Ar[306] !== qr ||
    Ar[307] !== yb ||
    Ar[308] !== ar
  )
    (mdt = {
      turn: ar,
      transcript: qr,
      scope: Yi,
      permissionRelays: qd,
      engine: fE,
      transport: yb,
      spawnThinkingConfig: GMe,
      customSystemPrompt: $R,
      appendSystemPrompt: qR,
    }),
      (Ar[300] = qR),
      (Ar[301] = $R),
      (Ar[302] = qd),
      (Ar[303] = Yi),
      (Ar[304] = fE),
      (Ar[305] = GMe),
      (Ar[306] = qr),
      (Ar[307] = yb),
      (Ar[308] = ar),
      (Ar[309] = mdt);
  else mdt = Ar[309];
  let { sendBridgeResult: KMe } = B9(mdt),
    fdt;
  if (
    Ar[310] !== LMe ||
    Ar[311] !== Pc ||
    Ar[312] !== qR ||
    Ar[313] !== gE ||
    Ar[314] !== FMe ||
    Ar[315] !== zR ||
    Ar[316] !== zs ||
    Ar[317] !== Ud ||
    Ar[318] !== $R ||
    Ar[319] !== ey ||
    Ar[320] !== Wd ||
    Ar[321] !== KC ||
    Ar[322] !== za ||
    Ar[323] !== Uee ||
    Ar[324] !== Nl ||
    Ar[325] !== Ql ||
    Ar[326] !== AMe ||
    Ar[327] !== SE ||
    Ar[328] !== _Me ||
    Ar[329] !== ny ||
    Ar[330] !== Pu ||
    Ar[331] !== VMe ||
    Ar[332] !== qMe ||
    Ar[333] !== sp ||
    Ar[334] !== Fee ||
    Ar[335] !== SMe ||
    Ar[336] !== DMe ||
    Ar[337] !== EMe ||
    Ar[338] !== yMe ||
    Ar[339] !== qd ||
    Ar[340] !== GR ||
    Ar[341] !== Yi ||
    Ar[342] !== KMe ||
    Ar[343] !== Ls ||
    Ar[344] !== Sa ||
    Ar[345] !== ry ||
    Ar[346] !== _s ||
    Ar[347] !== cE ||
    Ar[348] !== ef ||
    Ar[349] !== Fs ||
    Ar[350] !== Vi ||
    Ar[351] !== hc ||
    Ar[352] !== qu ||
    Ar[353] !== wMe ||
    Ar[354] !== uE ||
    Ar[355] !== BMe ||
    Ar[356] !== Bee ||
    Ar[357] !== pm ||
    Ar[358] !== qr ||
    Ar[359] !== yb ||
    Ar[360] !== NMe ||
    Ar[361] !== ar
  )
    (fdt = () => {
      yb.bindHost({ mainLoopModel: Pu, addNotification: Pc }),
        hc.bindHost({ mainLoopModel: Pu, canUseTool: zR, onBeforeQuery: Fee }),
        Sa.bindHost({ mainLoopModel: Pu, canUseTool: zR, addNotification: Pc, onSubmit: hc.submit }),
        zs.bindHost({ openSessionMemories: EMe, openMessageSelector: DMe }),
        Yi.bindHost({
          mainLoopModel: Pu,
          canUseTool: zR,
          getMessages: qr.getSnapshot,
          buildToolUseContext: AMe,
          addNotification: Pc,
          removeNotification: GR,
        }),
        Ql.bindHost({
          mainLoopModel: Pu,
          customSystemPrompt: $R,
          appendSystemPrompt: qR,
          canUseTool: zR,
          fallbackModel: Uee,
        }),
        ar.bindHost({
          store: Vi,
          setAppState: _s,
          setSessionState: cE,
          session: Ls,
          transcript: qr,
          storageV5: Fs,
          credentials: Ud,
          spinnerStore: ef,
          taskRegistry: qu,
          sessionHooks: ry,
          teammateColors: wMe,
          messageQueue: sp,
          dialogStore: Wd,
          addNotification: Pc,
          scope: Yi,
          canUseTool: zR,
          debug: ey,
          fallbackModel: Uee,
          thinkingConfig: Bee,
          ideInstallationStatus: SE,
          disabled: KC,
          resolveCommandDialog: _b,
          theme: BMe,
          customSystemPrompt: $R,
          appendSystemPrompt: qR,
          permissionRelays: qd,
          setIDEToInstallExtension: f7o,
          resume: Sa.resume,
          applyConversationReset: gE,
          bumpConversationId: Sa.bumpConversationId,
          openMessageSelector: zs.openMessageSelector,
          onTurnComplete: yMe,
          onCaptureSnapshot: SMe,
          markTurnStart: qMe,
          markTurnDone: VMe,
          sendBridgeResult: KMe,
          terminal: uE,
          axBell: FMe,
          restoreMessageSync: Sa.restoreMessageSync,
          draft: za,
          isThinClient: ny,
          titles: pm,
          setHaikuTitle: Sa.setHaikuTitle,
          activeRemote: LMe,
          focusedInputDialog: Nl,
          gesture: Ql,
          turnEvents: NMe,
          mainLoopModel: Pu,
          onBeforeQuery: Fee,
          deferSlashToEngine: LB,
          ideSelection: _Me,
          setIDESelection: zs.setIdeSelection,
          onSubmit: hc.submit,
          awaitPendingHooks: Sa.awaitPendingHooks,
          adoptedPrefillRef: Sa.adoptedPrefillRef,
        });
    }),
      (Ar[310] = LMe),
      (Ar[311] = Pc),
      (Ar[312] = qR),
      (Ar[313] = gE),
      (Ar[314] = FMe),
      (Ar[315] = zR),
      (Ar[316] = zs),
      (Ar[317] = Ud),
      (Ar[318] = $R),
      (Ar[319] = ey),
      (Ar[320] = Wd),
      (Ar[321] = KC),
      (Ar[322] = za),
      (Ar[323] = Uee),
      (Ar[324] = Nl),
      (Ar[325] = Ql),
      (Ar[326] = AMe),
      (Ar[327] = SE),
      (Ar[328] = _Me),
      (Ar[329] = ny),
      (Ar[330] = Pu),
      (Ar[331] = VMe),
      (Ar[332] = qMe),
      (Ar[333] = sp),
      (Ar[334] = Fee),
      (Ar[335] = SMe),
      (Ar[336] = DMe),
      (Ar[337] = EMe),
      (Ar[338] = yMe),
      (Ar[339] = qd),
      (Ar[340] = GR),
      (Ar[341] = Yi),
      (Ar[342] = KMe),
      (Ar[343] = Ls),
      (Ar[344] = Sa),
      (Ar[345] = ry),
      (Ar[346] = _s),
      (Ar[347] = cE),
      (Ar[348] = ef),
      (Ar[349] = Fs),
      (Ar[350] = Vi),
      (Ar[351] = hc),
      (Ar[352] = qu),
      (Ar[353] = wMe),
      (Ar[354] = uE),
      (Ar[355] = BMe),
      (Ar[356] = Bee),
      (Ar[357] = pm),
      (Ar[358] = qr),
      (Ar[359] = yb),
      (Ar[360] = NMe),
      (Ar[361] = ar),
      (Ar[362] = fdt);
  else fdt = Ar[362];
  qn(fdt);
  let hdt;
  if (Ar[363] !== Vu || Ar[364] !== ar)
    (hdt = { turn: ar, hasActiveLocalJsxUI: Vu }), (Ar[363] = Vu), (Ar[364] = ar), (Ar[365] = hdt);
  else hdt = Ar[365];
  t7(hdt);
  let ydt;
  if (
    Ar[366] !== Wd ||
    Ar[367] !== KC ||
    Ar[368] !== db ||
    Ar[369] !== Qee ||
    Ar[370] !== SE ||
    Ar[371] !== ll ||
    Ar[372] !== Pu ||
    Ar[373] !== pE ||
    Ar[374] !== fc ||
    Ar[375] !== Kl ||
    Ar[376] !== Ls ||
    Ar[377] !== hc.submit ||
    Ar[378] !== qr ||
    Ar[379] !== ar
  )
    (ydt = {
      mainLoopModel: Pu,
      mcpClients: pE,
      ideInstallationStatus: SE,
      dynamicMcpConfig: db,
      turn: ar,
      transcript: qr,
      requestDialog: fc,
      dialogStore: Wd,
      hasOpenDialog: Qee,
      submitPrompt: hc.submit,
      screen: Kl,
      disabled: KC,
      isRemoteSession: ll,
      session: Ls,
    }),
      (Ar[366] = Wd),
      (Ar[367] = KC),
      (Ar[368] = db),
      (Ar[369] = Qee),
      (Ar[370] = SE),
      (Ar[371] = ll),
      (Ar[372] = Pu),
      (Ar[373] = pE),
      (Ar[374] = fc),
      (Ar[375] = Kl),
      (Ar[376] = Ls),
      (Ar[377] = hc.submit),
      (Ar[378] = qr),
      (Ar[379] = ar),
      (Ar[380] = ydt);
  else ydt = Ar[380];
  let Y7o = PZ(ydt);
  Cnt(RZ, Y7o);
  const QMe = fnt(io) && !ll,
    zMe = Nl ?? E7o ?? (Vu ? Qm.kind : void 0);
  let Sdt;
  if (Ar[381] !== tf || Ar[382] !== fc || Ar[383] !== QMe || Ar[384] !== zMe || Ar[385] !== ar.submitIncomingPrompt)
    (Sdt = {
      enabled: QMe,
      isLoading: tf,
      focusedInputDialog: zMe,
      onSubmitMessage: ar.submitIncomingPrompt,
      requestDialog: fc,
    }),
      (Ar[381] = tf),
      (Ar[382] = fc),
      (Ar[383] = QMe),
      (Ar[384] = zMe),
      (Ar[385] = ar.submitIncomingPrompt),
      (Ar[386] = Sdt);
  else Sdt = Ar[386];
  v7(Sdt), r7(ar);
  let J7o = a.CLAUDE_CODE_PROACTIVE,
    kdt;
  if (Ar[387] !== tf || Ar[388] !== Fs || Ar[389] !== qr)
    (kdt = { isLoading: tf, assistantMode: J7o, transcript: qr, storageV5: Fs }),
      (Ar[387] = tf),
      (Ar[388] = Fs),
      (Ar[389] = qr),
      (Ar[390] = kdt);
  else kdt = Ar[390];
  pIe(kdt);
  let Rdt;
  if (Ar[391] !== tf || Ar[392] !== qr)
    (Rdt = { isLoading: tf, transcript: qr }), (Ar[391] = tf), (Ar[392] = qr), (Ar[393] = Rdt);
  else Rdt = Ar[393];
  Jkt(Rdt), Z9();
  let xdt;
  if (Ar[394] !== qr) (xdt = { transcript: qr }), (Ar[394] = qr), (Ar[395] = xdt);
  else xdt = Ar[395];
  qB(xdt);
  let CE = yZ(),
    Pdt;
  if (Ar[396] === d) (Pdt = Nt() && !n7o), (Ar[396] = Pdt);
  else Pdt = Ar[396];
  let Adt = Pdt,
    { columns: YMe } = Ee(),
    Mdt;
  if (
    Ar[397] !== IMe ||
    Ar[398] !== za ||
    Ar[399] !== xu ||
    Ar[400] !== gb ||
    Ar[401] !== Kl ||
    Ar[402] !== Qa ||
    Ar[403] !== pm ||
    Ar[404] !== qr ||
    Ar[405] !== ar
  )
    (Mdt = {
      embedded: xu,
      screen: Kl,
      turn: ar,
      transcript: qr,
      titles: pm,
      localJsx: gb,
      dialogSurface: IMe,
      draft: za,
      scrollPin: Qa,
    }),
      (Ar[397] = IMe),
      (Ar[398] = za),
      (Ar[399] = xu),
      (Ar[400] = gb),
      (Ar[401] = Kl),
      (Ar[402] = Qa),
      (Ar[403] = pm),
      (Ar[404] = qr),
      (Ar[405] = ar),
      (Ar[406] = Mdt);
  else Mdt = Ar[406];
  let cte = Mdt,
    Idt;
  if (Ar[407] !== ll || Ar[408] !== hE || Ar[409] !== qr || Ar[410] !== ar)
    (Idt = e(TO, { turn: ar, transcript: qr, isRemoteSession: ll, slot: hE })),
      (Ar[407] = ll),
      (Ar[408] = hE),
      (Ar[409] = qr),
      (Ar[410] = ar),
      (Ar[411] = Idt);
  else Idt = Ar[411];
  let XMe = Idt,
    Ddt;
  if (Ar[412] !== zs || Ar[413] !== Wu || Ar[414] !== ll || Ar[415] !== pE)
    (Ddt = e(MD, { chrome: zs, mcpClients: pE, initialMessages: Wu, isRemoteSession: ll })),
      (Ar[412] = zs),
      (Ar[413] = Wu),
      (Ar[414] = ll),
      (Ar[415] = pE),
      (Ar[416] = Ddt);
  else Ddt = Ar[416];
  let ZMe = Ddt,
    Ndt;
  if (Ar[417] !== ZMe || Ar[418] !== XMe)
    (Ndt = function xE(X7o) {
      return r(U, { children: [XMe, X7o, ZMe] });
    }),
      (Ar[417] = ZMe),
      (Ar[418] = XMe),
      (Ar[419] = Ndt);
  else Ndt = Ar[419];
  let xE = Ndt;
  $9();
  let YR = fnt(rM),
    Ldt;
  if (Ar[420] !== YR) (Ldt = (Z7o) => (YR ? Z7o.fileHistory.trackedFiles.size : 0)), (Ar[420] = YR), (Ar[421] = Ldt);
  else Ldt = Ar[421];
  let eZo = W(Ldt),
    tIe = Iee(YR, eZo),
    Fdt;
  if (Ar[422] !== iy || Ar[423] !== KR || Ar[424] !== PU)
    (Fdt = iy ? e(zB, { progress: PU, tools: KR }) : null),
      (Ar[422] = iy),
      (Ar[423] = KR),
      (Ar[424] = PU),
      (Ar[425] = Fdt);
  else Fdt = Ar[425];
  let ute = Fdt;
  if (Kl === "transcript") {
    let Bdt = xu || (Adt && !yct) ? Qa.viewport : void 0;
    let DU;
    if (Ar[426] !== db || Ar[427] !== iy || Ar[428] !== qd || Ar[429] !== CE || Ar[430] !== lE || Ar[431] !== ute)
      (DU = iy && e(xUe, { dynamicMcpConfig: db, isStrictMcpConfig: lE, permissionRelays: qd, children: ute }, CE)),
        (Ar[426] = db),
        (Ar[427] = iy),
        (Ar[428] = qd),
        (Ar[429] = CE),
        (Ar[430] = lE),
        (Ar[431] = ute),
        (Ar[432] = DU);
    else DU = Ar[432];
    let NU;
    if (Ar[433] === d) (NU = () => Sct(true)), (Ar[433] = NU);
    else NU = Ar[433];
    return xE(
      e(iR, {
        ...cte,
        fullscreen: Bdt !== void 0,
        children: r(use, {
          children: [
            ate,
            e(aD, {
              focused: Ku,
              tools: KR,
              commands: $ee,
              turn: ar,
              hideWelcomeChrome: lct ?? xu,
              toolProgress: DU,
              scrollViewport: Bdt,
              virtualScrollActive: Adt,
              embedded: xu,
              scrollKeysActive: !Zee,
              showSandboxViolations: !ll,
              dumpMode: yct,
              onDumpToScrollback: NU,
              onExit: p7o,
            }),
          ],
        }),
      }),
    );
  }
  let JR = nte && Yee === "visible",
    DU;
  if (Ar[434] !== Yee || Ar[435] !== nte)
    (DU = nte ? { content: e(Vh, { variant: "modal" }), visible: Yee === "visible" } : void 0),
      (Ar[434] = Yee),
      (Ar[435] = nte),
      (Ar[436] = DU);
  else DU = Ar[436];
  let oIe = DU,
    PE =
      r7o === "diff" && n0t({ columns: YMe, isThinClient: ny, isMainFocused: Ku.isMain, hasGitRepo: i7o })
        ? Math.min(Math.floor(YMe * 0.45), 90, YMe - 70)
        : 0,
    NU;
  if (Ar[437] === d) (NU = () => hct(wmt)), (Ar[437] = NU);
  else NU = Ar[437];
  let dte;
  if (Ar[438] !== Ku.messages.length || Ar[439] !== Kl)
    (dte = e(xb, { screen: Kl, onToggleTranscript: NU, messageCount: Ku.messages.length })),
      (Ar[438] = Ku.messages.length),
      (Ar[439] = Kl),
      (Ar[440] = dte);
  else dte = Ar[440];
  let mte;
  if (Ar[441] !== Ku.isMain || Ar[442] !== Nl || Ar[443] !== JR || Ar[444] !== Qa || Ar[445] !== Zee)
    (mte = e(RB, {
      scrollPin: Qa,
      modalSlotActive: JR,
      focusedInputDialog: Nl,
      ultraplanChoiceShowing: Zee,
      isMain: Ku.isMain,
    })),
      (Ar[441] = Ku.isMain),
      (Ar[442] = Nl),
      (Ar[443] = JR),
      (Ar[444] = Qa),
      (Ar[445] = Zee),
      (Ar[446] = mte);
  else mte = Ar[446];
  const nIe = !Ku.isMain;
  let pte;
  if (
    Ar[447] !== zs.setIdeSelection ||
    Ar[448] !== tIe ||
    Ar[449] !== YR ||
    Ar[450] !== PE ||
    Ar[451] !== ny ||
    Ar[452] !== JR
  )
    (pte = YR
      ? e(pq, {
          onError: Tmt,
          children: e(RU, {
            width: PE,
            isThinClient: ny,
            onAskAboutSelection: JR ? void 0 : zs.setIdeSelection,
            autoOpenBaseline: tIe,
          }),
        })
      : null),
      (Ar[447] = zs.setIdeSelection),
      (Ar[448] = tIe),
      (Ar[449] = YR),
      (Ar[450] = PE),
      (Ar[451] = ny),
      (Ar[452] = JR),
      (Ar[453] = pte);
  else pte = Ar[453];
  const rIe = Kee ? null : ute,
    iIe = KC || JR,
    sIe = lct ?? xu;
  let gte;
  if (
    Ar[454] !== $ee ||
    Ar[455] !== Ku ||
    Ar[456] !== ll ||
    Ar[457] !== fb ||
    Ar[458] !== KR ||
    Ar[459] !== Qa ||
    Ar[460] !== ote ||
    Ar[461] !== rIe ||
    Ar[462] !== iIe ||
    Ar[463] !== sIe ||
    Ar[464] !== ar
  )
    (gte = e(TB, {
      scrollPin: Qa,
      turn: ar,
      focused: Ku,
      tools: KR,
      commands: $ee,
      toolProgress: rIe,
      showSpinner: ote,
      isRemoteSession: ll,
      pauseAnimation: fb,
      hidePlaceholder: iIe,
      hideWelcomeChrome: sIe,
    })),
      (Ar[454] = $ee),
      (Ar[455] = Ku),
      (Ar[456] = ll),
      (Ar[457] = fb),
      (Ar[458] = KR),
      (Ar[459] = Qa),
      (Ar[460] = ote),
      (Ar[461] = rIe),
      (Ar[462] = iIe),
      (Ar[463] = sIe),
      (Ar[464] = ar),
      (Ar[465] = gte);
  else gte = Ar[465];
  let yte;
  if (Ar[466] !== Jee || Ar[467] !== xu || Ar[468] !== Nl || Ar[469] !== Vu || Ar[470] !== Kee)
    (yte = (Nl || Kee || (Vu && Jee)) && e(EB, { hideSessionTitle: xu })),
      (Ar[466] = Jee),
      (Ar[467] = xu),
      (Ar[468] = Nl),
      (Ar[469] = Vu),
      (Ar[470] = Kee),
      (Ar[471] = yte);
  else yte = Ar[471];
  let Ste;
  if (Ar[472] !== Vu) (Ste = Vu && e(fIe, {})), (Ar[472] = Vu), (Ar[473] = Ste);
  else Ste = Ar[473];
  let jdt;
  if (Ar[474] === d) (jdt = e(Vh, { variant: "bottom" })), (Ar[474] = jdt);
  else jdt = Ar[474];
  const aIe = ote || Vu || Boolean(Nl);
  let bte;
  if (Ar[475] !== aIe) (bte = e($0t, { hidden: aIe })), (Ar[475] = aIe), (Ar[476] = bte);
  else bte = Ar[476];
  let kte;
  if (Ar[477] !== Nl) (kte = e(xN, { focusedInputDialog: Nl })), (Ar[477] = Nl), (Ar[478] = kte);
  else kte = Ar[478];
  let Cte;
  if (Ar[479] !== xU || Ar[480] !== Nl || Ar[481] !== Pu)
    (Cte = Nl === "effort-medium-nudge" && xU !== void 0 && e(CU, { model: Pu, copy: xU, onDone: () => g7o(void 0) })),
      (Ar[479] = xU),
      (Ar[480] = Nl),
      (Ar[481] = Pu),
      (Ar[482] = Cte);
  else Cte = Ar[482];
  let vte;
  if (Ar[483] !== zs) (vte = e(eU, { chrome: zs })), (Ar[483] = zs), (Ar[484] = vte);
  else vte = Ar[484];
  const lIe = !Nl && !Jee && !Out && !KC;
  let Tte;
  if (
    Ar[485] !== zs ||
    Ar[486] !== za ||
    Ar[487] !== Ql ||
    Ar[488] !== HMe ||
    Ar[489] !== Yi ||
    Ar[490] !== hc ||
    Ar[491] !== hE ||
    Ar[492] !== lIe ||
    Ar[493] !== qr ||
    Ar[494] !== ar
  )
    (Tte = e(xO, {
      turn: ar,
      transcript: qr,
      scope: Yi,
      draft: za,
      chrome: zs,
      gesture: Ql,
      submitController: hc,
      surveySlot: hE,
      visible: lIe,
      onBackgroundSession: HMe,
    })),
      (Ar[485] = zs),
      (Ar[486] = za),
      (Ar[487] = Ql),
      (Ar[488] = HMe),
      (Ar[489] = Yi),
      (Ar[490] = hc),
      (Ar[491] = hE),
      (Ar[492] = lIe),
      (Ar[493] = qr),
      (Ar[494] = ar),
      (Ar[495] = Tte);
  else Tte = Ar[495];
  let Rte;
  if (
    Ar[496] !== yte ||
    Ar[497] !== Ste ||
    Ar[498] !== bte ||
    Ar[499] !== kte ||
    Ar[500] !== Cte ||
    Ar[501] !== vte ||
    Ar[502] !== Tte
  )
    (Rte = e(o, {
      flexDirection: "row",
      width: "100%",
      alignItems: "flex-end",
      children: r(o, {
        flexDirection: "column",
        flexGrow: 1,
        children: [null, yte, Ste, jdt, bte, kte, Cte, vte, Tte],
      }),
    })),
      (Ar[496] = yte),
      (Ar[497] = Ste),
      (Ar[498] = bte),
      (Ar[499] = kte),
      (Ar[500] = Cte),
      (Ar[501] = vte),
      (Ar[502] = Tte),
      (Ar[503] = Rte);
  else Rte = Ar[503];
  let xte;
  if (
    Ar[504] !== PE ||
    Ar[505] !== Ku.isTeammate ||
    Ar[506] !== oIe ||
    Ar[507] !== Qa ||
    Ar[508] !== nIe ||
    Ar[509] !== pte ||
    Ar[510] !== gte ||
    Ar[511] !== Rte
  )
    (xte = e(TRe, {
      scrollViewport: Qa.viewport,
      modal: oIe,
      modalScrollViewport: Qa.modalViewport,
      unseen: Qa,
      hidePill: nIe,
      hideSticky: Ku.isTeammate,
      top: null,
      sidebar: pte,
      sidebarWidth: PE,
      scrollable: gte,
      bottom: Rte,
    })),
      (Ar[504] = PE),
      (Ar[505] = Ku.isTeammate),
      (Ar[506] = oIe),
      (Ar[507] = Qa),
      (Ar[508] = nIe),
      (Ar[509] = pte),
      (Ar[510] = gte),
      (Ar[511] = Rte),
      (Ar[512] = xte);
  else xte = Ar[512];
  let Pte;
  if (Ar[513] !== db || Ar[514] !== qd || Ar[515] !== CE || Ar[516] !== lE || Ar[517] !== xte)
    (Pte = e(xUe, { dynamicMcpConfig: db, isStrictMcpConfig: lE, permissionRelays: qd, children: xte }, CE)),
      (Ar[513] = db),
      (Ar[514] = qd),
      (Ar[515] = CE),
      (Ar[516] = lE),
      (Ar[517] = xte),
      (Ar[518] = Pte);
  else Pte = Ar[518];
  let $dt;
  if (Ar[519] !== ate || Ar[520] !== dte || Ar[521] !== mte || Ar[522] !== Pte)
    ($dt = r(use, { children: [dte, ate, mte, Pte] })),
      (Ar[519] = ate),
      (Ar[520] = dte),
      (Ar[521] = mte),
      (Ar[522] = Pte),
      (Ar[523] = $dt);
  else $dt = Ar[523];
  let cIe = $dt,
    Wdt;
  if (Ar[524] === d) (Wdt = Nt()), (Ar[524] = Wdt);
  else Wdt = Ar[524];
  let Mte;
  if (Ar[525] !== cte || Ar[526] !== cIe)
    (Mte = e(iR, { ...cte, fullscreen: Wdt, children: cIe })), (Ar[525] = cte), (Ar[526] = cIe), (Ar[527] = Mte);
  else Mte = Ar[527];
  let qdt;
  if (Ar[528] !== Mte || Ar[529] !== xE) (qdt = xE(Mte)), (Ar[528] = Mte), (Ar[529] = xE), (Ar[530] = qdt);
  else qdt = Ar[530];
  return qdt;
}

function gIe(S, x) {
  return S?.now === x?.now && S?.next === x?.next;
}

export { Jvt };
