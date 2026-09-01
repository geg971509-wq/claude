// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ne, Xt } from "/$bunfs/root/chunk-tx16jn0x.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { $e } from "/$bunfs/root/chunk-2masxyqj.js";
import { tf, fH, zz, Ogn } from "/$bunfs/root/chunk-fd2h00ye.js";
import { Zxn } from "/$bunfs/root/chunk-6cxt7ghw.js";
import { Jat, o9e } from "/$bunfs/root/chunk-k8bz18w5.js";
import { Uwn, err, ewt } from "/$bunfs/root/chunk-6mgs10s2.js";
import { S, ue } from "/$bunfs/root/chunk-yz031c9r.js";
var M = S(function (k, E) {
  var H = ue("path");
  {
    let o = Zxn();
    E.exports = { isSupported: true, ...o };
  }
});
function c() {
  let o = tf();
  if (o.inputModule) return o.inputModule;
  let t = M();
  if (!t.isSupported) throw Error("@ant/computer-use-input is not supported on this platform");
  return (o.inputModule = t);
}
var I = 0.75,
  x = 5000;
function P(o, t, a) {
  let f = Math.round(o * a),
    d = Math.round(t * a);
  return o9e(f, d, Jat);
}
async function v() {
  let { stdout: o, code: t } = await $e("pbpaste", [], { useCwd: false });
  if (t !== 0) throw Error(`pbpaste exited with code ${t}`);
  return o;
}
async function C(o) {
  let { code: t } = await $e("pbcopy", [], { input: o, useCwd: false });
  if (t !== 0) throw Error(`pbcopy exited with code ${t}`);
}
function U(o) {
  if (o.length !== 1) return false;
  let t = o[0].toLowerCase();
  return t === "escape" || t === "esc";
}
var A = 50,
  D = 50;
async function h(o, t, a) {
  await o.moveMouse(t, a, false), await ne(A);
}
async function _(o, t) {
  let a;
  while ((a = t.pop()) !== void 0)
    try {
      await o.key(a, "release");
    } catch {}
}
async function R(o, t, a) {
  let f = [];
  try {
    for (let d of t) await o.key(d, "press"), f.push(d);
    return await a();
  } finally {
    await _(o, f);
  }
}
async function T(o, t) {
  let a;
  try {
    a = await v();
  } catch {
    n("[computer-use] pbpaste before paste failed; proceeding without restore");
  }
  try {
    if ((await C(t), (await v()) !== t)) throw Error("Clipboard write did not round-trip.");
    await o.keys(["command", "v"]), await ne(100);
  } finally {
    if (typeof a === "string")
      try {
        await C(a);
      } catch {
        n("[computer-use] clipboard restore after paste failed");
      }
  }
}
async function B(o, t, a, f) {
  if (!f) {
    await h(o, t, a);
    return;
  }
  let d = await o.mouseLocation(),
    y = t - d.x,
    w = a - d.y,
    b = Math.hypot(y, w);
  if (b < 1) return;
  let e = Math.min(b / 2000, 0.5);
  if (e < 0.03) {
    await h(o, t, a);
    return;
  }
  let r = 60,
    s = 1000 / r,
    i = Math.floor(e * r);
  for (let u = 1; u <= i; u++) {
    let p = u / i,
      m = 1 - Math.pow(1 - p, 3);
    if ((await o.moveMouse(Math.round(d.x + y * m), Math.round(d.y + w * m), false), u < i)) await ne(s);
  }
  await ne(A);
}
function gon(o) {
  let t = fH(),
    a = false,
    { getMouseAnimationEnabled: f, getHideBeforeActionEnabled: d } = o,
    y = err(),
    w = y ?? Uwn,
    b = (e) => (y === null ? [...e] : e.filter((r) => r !== y));
  return (
    n(
      y
        ? `[computer-use] terminal ${y} \u2192 surrogate host (hide-exempt, activate-skip, screenshot-excluded)`
        : "[computer-use] terminal not detected; falling back to sentinel host",
    ),
    {
      capabilities: { ...ewt, hostBundleId: Uwn },
      async prepareForAction(e, r) {
        if (!d()) return [];
        return zz(async () => {
          try {
            let s = await t.apps.prepareDisplay(e, w, r);
            if (s.activated) n(`[computer-use] prepareForAction: activated ${s.activated}`);
            return s.hidden;
          } catch (s) {
            return n(`[computer-use] prepareForAction failed; continuing to action: ${l(s)}`, { level: "warn" }), [];
          }
        });
      },
      async previewHideSet(e, r) {
        return t.apps.previewHideSet([...e, w], r);
      },
      async getDisplaySize(e) {
        return t.display.getSize(e);
      },
      async listDisplays() {
        return t.display.listAll();
      },
      async findWindowDisplays(e) {
        return t.apps.findWindowDisplays(e);
      },
      async resolvePrepareCapture(e) {
        let r = t.display.getSize(e.preferredDisplayId),
          [s, i] = P(r.width, r.height, r.scaleFactor);
        return zz(() =>
          t.resolvePrepareCapture(b(e.allowedBundleIds), w, I, s, i, e.preferredDisplayId, e.autoResolve, e.doHide),
        );
      },
      async screenshot(e) {
        let r = t.display.getSize(e.displayId),
          [s, i] = P(r.width, r.height, r.scaleFactor);
        return Xt(
          t.screenshot.captureExcluding(b(e.allowedBundleIds), I, s, i, e.displayId),
          x,
          "CU screenshot backstop",
        );
      },
      async zoom(e, r, s) {
        let i = t.display.getSize(s),
          [u, p] = P(e.w, e.h, i.scaleFactor);
        return Xt(t.screenshot.captureRegion(b(r), e.x, e.y, e.w, e.h, u, p, I, s), x, "CU zoom backstop");
      },
      async key(e, r) {
        let s = c(),
          i = e.split("+").filter((m) => m.length > 0),
          u = U(i),
          p = r ?? 1;
        await zz(async () => {
          for (let m = 0; m < p; m++) {
            if (m > 0) await ne(8);
            if (u) Ogn();
            await s.keys(i);
          }
        });
      },
      async holdKey(e, r, s) {
        let i = c(),
          u = [],
          p = false;
        try {
          await zz(async () => {
            for (let g of e) {
              if (p) return;
              if (U([g])) Ogn();
              await i.key(g, "press"), u.push(g);
            }
          });
          let m = Date.now() + r;
          while (Date.now() < m) {
            if (s?.()) return;
            await ne(Math.min(D, m - Date.now()));
          }
        } finally {
          (p = true), await zz(() => _(i, u));
        }
      },
      async type(e, r) {
        let s = c();
        if (r.viaClipboard) {
          await zz(() => T(s, e));
          return;
        }
        await s.typeText(e);
      },
      readClipboard: v,
      writeClipboard: C,
      async moveMouse(e, r) {
        await h(c(), e, r);
      },
      async click(e, r, s, i, u) {
        let p = c();
        if ((await h(p, e, r), u && u.length > 0)) await zz(() => R(p, u, () => p.mouseButton(s, "click", i)));
        else await p.mouseButton(s, "click", i);
      },
      async mouseDown() {
        await c().mouseButton("left", "press");
      },
      async mouseUp() {
        await c().mouseButton("left", "release");
      },
      async getCursorPosition() {
        return c().mouseLocation();
      },
      async drag(e, r) {
        let s = c();
        if (e !== void 0) await h(s, e.x, e.y);
        await s.mouseButton("left", "press"), await ne(A);
        try {
          await B(s, r.x, r.y, f());
        } finally {
          await s.mouseButton("left", "release");
        }
      },
      async scroll(e, r, s, i) {
        let u = c();
        if ((await h(u, e, r), i !== 0)) await u.mouseScroll(i, "vertical");
        if (s !== 0) await u.mouseScroll(s, "horizontal");
      },
      async getFrontmostApp() {
        let e = c().getFrontmostAppInfo();
        if (!e || !e.bundleId) return null;
        return { bundleId: e.bundleId, displayName: e.appName };
      },
      async appUnderPoint(e, r) {
        return t.apps.appUnderPoint(e, r);
      },
      async listInstalledApps() {
        let { apps: e, spotlightIncomplete: r } = await zz(() => t.apps.listInstalled());
        return (a = r), e;
      },
      isAppIndexIncomplete() {
        return a;
      },
      async getAppIcon(e) {
        return t.apps.iconDataUrl(e) ?? void 0;
      },
      async listRunningApps() {
        return t.apps.listRunning();
      },
      async openApp(e, r) {
        return t.apps.open(e, r?.activates ?? true);
      },
    }
  );
}
async function AAr(o) {
  if (o.length === 0) return;
  await fH().apps.unhide([...o]);
}
export { gon, AAr };
