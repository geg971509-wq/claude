// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import "/$bunfs/root/chunk-f9h0bg01.js";
import "/$bunfs/root/chunk-qq1mdtb5.js";
import "/$bunfs/root/chunk-tx16jn0x.js";
import "/$bunfs/root/chunk-vfy57cpd.js";
import "/$bunfs/root/chunk-4xj01xwv.js";
import { we } from "/$bunfs/root/chunk-ypdw393e.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import "/$bunfs/root/chunk-gcks6mn0.js";
import "/$bunfs/root/chunk-qk7r0t2g.js";
import "/$bunfs/root/chunk-4ddxwr9r.js";
import { eT } from "/$bunfs/root/chunk-zze8764r.js";
import "/$bunfs/root/chunk-56sxk8k2.js";
import "/$bunfs/root/chunk-a4q326ap.js";
var y = 2;
function D(i) {
  let e = null,
    l = null,
    a = 0,
    o = false,
    s = null,
    d = 0,
    p = [],
    m = () => {
      l?.clear(), (l = null);
    },
    v = () => {
      if ((m(), e === null)) return;
      let r = e;
      l = i.setTimer(
        () => {
          if (((l = null), e !== r)) return;
          if (i.now() < r.leaseExpiresAt) {
            v();
            return;
          }
          let t = { ...r, entries: [] };
          e = t.templates.length === 0 ? null : t;
          for (let u of [...(i.onLeaseExpired ? [i.onLeaseExpired] : []), ...p])
            try {
              u(t);
            } catch (c) {
              n(`[deviceHooks] lease-expiry listener threw: ${we(c).stack ?? String(c)}`, { level: "error" });
            }
        },
        Math.min(eT, Math.max(0, r.leaseExpiresAt - i.now())),
      );
    };
  return {
    current: () => e,
    generation: () => d,
    recordMiss(r, t) {
      if (e === null || e.instanceId !== r || t !== d) return false;
      if (((a += 1), !o && a >= y)) (o = true), (s = i.now());
      return o;
    },
    recordHit(r) {
      if (e !== null && e.instanceId === r) a = 0;
    },
    isAway: (r) => e !== null && e.instanceId === r && o,
    awaySince: (r) => (e !== null && e.instanceId === r && o ? s : null),
    replaceOwner(r) {
      let t = e !== null && e.instanceId !== r.instanceId ? e.instanceId : void 0,
        u = e !== null && t === void 0,
        c = u && o ? s : null;
      if (((e = r), !u || c !== null)) (a = 0), (o = false), (s = null);
      return (d += 1), v(), { ...(t !== void 0 && { replaced: t }), ...(c !== null && { awaySince: c }) };
    },
    removeOwner(r) {
      if (e === null || e.instanceId !== r) return false;
      return (e = null), (a = 0), (o = false), (s = null), m(), true;
    },
    clear() {
      (e = null), (a = 0), (o = false), (s = null), m();
    },
    onLeaseExpired(r) {
      p.push(r);
    },
  };
}
function H(i, e) {
  let l = setTimeout(i, e);
  return l.unref(), { clear: () => clearTimeout(l) };
}
export { y as AWAY_AFTER_MISSES, D as createDeviceHookRegistry, H as productionRegistryTimer };
