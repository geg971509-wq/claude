// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { l } from "/$bunfs/root/chunk-ypdw393e.js";
import { Uf, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { IDt } from "/$bunfs/root/chunk-615vs2vf.js";
import { J2n } from "/$bunfs/root/chunk-t9fztcxk.js";
import { HZ } from "/$bunfs/root/chunk-mh40wjx4.js";
import { createHash as g, sign as v } from "crypto";
var m = "anthropic.ccr.client_event.v1",
  zpr = "claude-code-jcs@1";
function Vpr(r) {
  let t = [],
    i = [],
    s = (e) => {
      if (e === null || typeof e === "boolean" || typeof e === "string") t.push(Uf(e));
      else if (typeof e === "number") {
        if (!Number.isFinite(e)) throw Error("canonicalJson: non-finite number");
        t.push(String(e));
      } else if (Array.isArray(e))
        t.push("["), i.push({ values: Array.from(e, (o) => (o === void 0 ? null : o)), next: 0 });
      else if (typeof e === "object") {
        let o = e,
          a = Object.keys(o)
            .filter((c) => o[c] !== void 0)
            .sort();
        t.push("{"), i.push({ names: a, values: a.map((c) => o[c]), next: 0 });
      } else throw Error("canonicalJson: a value with no JSON form");
    };
  s(r);
  while (i.length > 0) {
    let e = i.at(-1);
    if (e.next === e.values.length) {
      t.push(e.names ? "}" : "]"), i.pop();
      continue;
    }
    if (e.next > 0) t.push(",");
    if (e.names) t.push(`${Uf(e.names[e.next])}:`);
    let o = e.values[e.next];
    (e.next += 1), s(o);
  }
  return t.join("");
}
function Kpr(r, t) {
  let { uuid: i, type: s, ...e } = t,
    o = g("sha256").update(Vpr(e), "utf8").digest();
  return Buffer.concat([
    Buffer.from(m, "utf8"),
    u,
    Buffer.from(r, "utf8"),
    u,
    Buffer.from(i, "utf8"),
    u,
    Buffer.from(s, "utf8"),
    u,
    o,
  ]);
}
var u = Buffer.from([0]);
function X2n(r, t) {
  let i = IDt + r,
    s = !1;
  return {
    noteSignFailure: () => {
      if (s) return !1;
      return (s = !0), !0;
    },
    sign: (e, o) => ({
      kid: i,
      signature: v("sha256", Kpr(e, o), { key: t, dsaEncoding: "ieee-p1363" }).toString("base64"),
      jcs_lib: zpr,
    }),
  };
}
async function Xpr({ accountUuid: r, boundDeviceUuid: t, credentials: i }) {
  return f(await d(r, i), t);
}
async function NEr(r, t) {
  let i = await HZ(t).catch(() => {
    return;
  });
  if (i?.status !== "resolved") return;
  let s = await d(i.accountUuid, t),
    e;
  return (
    r.then(
      (o) => {
        e = o === void 0 ? void 0 : f(s, o);
      },
      () => {},
    ),
    s.status === "loaded"
      ? { sign: (o, a) => e?.sign(o, a), noteSignFailure: () => e?.noteSignFailure() ?? !1 }
      : void 0
  );
}
async function xDt(r, t) {
  let i = await HZ(t).catch(() => {
    return;
  });
  return i?.status === "resolved" ? Xpr({ accountUuid: i.accountUuid, boundDeviceUuid: r, credentials: t }) : void 0;
}
async function FEr(r, t) {
  let i = await HZ(t).catch(() => {
    return;
  });
  if (i?.status !== "resolved") return;
  let s = await d(i.accountUuid, t);
  if (s.status !== "loaded" || s.rowPk !== r.toLowerCase()) return;
  return y("client_event_signer"), X2n(s.rowPk, s.key);
}
async function d(r, t) {
  try {
    let i = await J2n(r, t);
    return i === void 0 ? { status: "no_device_key" } : { status: "loaded", rowPk: i.rowPk, key: i.key };
  } catch (i) {
    return n(`[clientEventSigner] could not load the device key: ${l(i)}`), { status: "load_failed" };
  }
}
function f(r, t) {
  switch (r.status) {
    case "no_device_key":
    case "load_failed":
      p("client_event_signer", r.status);
      return;
    case "loaded":
      if (r.rowPk !== t.toLowerCase()) {
        p("client_event_signer", "bound_elsewhere");
        return;
      }
      return y("client_event_signer"), X2n(r.rowPk, r.key);
  }
}
export { zpr, Vpr, Kpr, X2n, Xpr, NEr, xDt, FEr };
