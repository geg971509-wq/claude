// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ud } from "/$bunfs/root/chunk-qm65zb83.js";
import { Kr } from "/$bunfs/root/chunk-f9h0bg01.js";
import { R, l } from "/$bunfs/root/chunk-ypdw393e.js";
import { b, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { rs, ce } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { y, p } from "/$bunfs/root/chunk-ca80fke8.js";
import { bt } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { vn } from "/$bunfs/root/chunk-k4a21mkt.js";
import { h8 } from "/$bunfs/root/chunk-mh40wjx4.js";
import { TJ } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { createPrivateKey as k, createPublicKey as _, generateKeyPairSync as D } from "crypto";
import { hostname as S } from "os";
var P = "/api/organizations/:orgUUID/cowork/remote_devices",
  h = "cowork_remote_device_limit_reached",
  C = "account_session_invalid";
async function g(e, i) {
  return (await vn().readAsync(i))?.coworkRemoteDevice?.[e];
}
async function Y2n(e) {
  return Kr((await g(e, void 0))?.rowPk)?.toLowerCase();
}
async function J2n(e, i) {
  let r = await g(e, i),
    t = Kr(r?.rowPk)?.toLowerCase(),
    s = r && v(r);
  return r && t && s ? { rowPk: t, key: s } : void 0;
}
function v(e) {
  try {
    let i = k({ key: Buffer.from(e.privateKeyPkcs8B64, "base64"), format: "der", type: "pkcs8" });
    return i.asymmetricKeyType === "ec" && i.asymmetricKeyDetails?.namedCurve === "prime256v1" ? i : void 0;
  } catch {
    return;
  }
}
async function K(e, i) {
  let r = await g(e, i);
  if (r) {
    let a = v(r);
    if (a) return { priv: a, stored: r };
    n("[deviceRegistry] stored device key is unreadable; minting a new one"),
      await w(e, r.privateKeyPkcs8B64, i).catch((u) => {
        n(`[deviceRegistry] could not retire the unreadable device key: ${l(u)}`);
      });
  }
  let { privateKey: t } = D("ec", { namedCurve: "P-256" }),
    s = { privateKeyPkcs8B64: t.export({ type: "pkcs8", format: "der" }).toString("base64") };
  await vn()
    .mutate((a) => {
      if (a.coworkRemoteDevice?.[e]) return a;
      return { ...a, coworkRemoteDevice: { ...a.coworkRemoteDevice, [e]: s } };
    }, i)
    .catch((a) => {
      throw new R(
        `deviceRegistry: device key could not be persisted to secure storage (${l(a)})`,
        "deviceRegistry: device key not persisted",
        "key_not_persisted",
      );
    });
  let c = await g(e, i),
    o = c && v(c);
  if (!c || !o)
    throw new R(
      "deviceRegistry: device key could not be persisted to secure storage",
      "deviceRegistry: device key not persisted",
      "key_not_persisted",
    );
  return { priv: o, stored: c };
}
async function m(e, i, r) {
  await vn().mutate((t) => {
    let s = t.coworkRemoteDevice?.[e];
    if (!s) return t;
    let c = i(s);
    if (c === s) return t;
    return { ...t, coworkRemoteDevice: { ...t.coworkRemoteDevice, [e]: c } };
  }, r);
}
function x() {
  return "darwin";
}
function E(e) {
  return rs(e.trim(), 255) || rs(wWe().trim(), 255);
}
async function Q2n(e, i, r) {
  try {
    if (!h8()) throw new bWe("client egress policy");
    return await H(e, i, r);
  } catch (t) {
    throw (p("device_registry_register", (t instanceof R && t.errorClass) || "unexpected_error"), t);
  }
}
async function H(e, i, r) {
  let { priv: t, stored: s } = await K(e, r);
  if (s.rowPk) return y("device_registry_register"), { deviceUUID: s.rowPk, priv: t };
  let c = _(t).export({ type: "spki", format: "der" }).toString("base64"),
    o = await bt
      .post(
        P,
        { display_name: E(i), platform: x(), public_key: c },
        {
          auth: "teleport-org",
          headers: { "anthropic-beta": ud },
          timeout: 1e4,
          validateStatus: () => true,
          credentials: r,
        },
      )
      .catch((d) => {
        throw new R(
          `deviceRegistry: register request failed (${l(d)})`,
          "deviceRegistry: register request failed",
          "request_failed",
        );
      });
  if (!o.ok)
    throw new R(`deviceRegistry: register not sent (${o.reason})`, "deviceRegistry: register not sent", "not_sent");
  if (
    (n(`[deviceRegistry] register status=${o.status} request_id=${String(o.response.headers?.["request-id"] ?? "")}`),
    o.status === 400 && o.data?.error?.details?.error_code === h)
  )
    throw new Cst();
  if ((o.status === 403 && o.data?.error?.details?.error_code !== C) || o.status === 404)
    throw new bWe(`HTTP ${o.status}`);
  let a = Kr(o.data?.id);
  if (o.status !== 201 || a === null)
    throw new R(
      `deviceRegistry: register ${o.status}: ${ce(String(b(o.data) ?? ""), 200)}`,
      "deviceRegistry: register HTTP error",
      "http_error",
    );
  if (o.data?.revoked_at !== null && o.data?.revoked_at !== void 0)
    throw (
      (await w(e, s.privateKeyPkcs8B64, r).catch((d) => {
        n(`[deviceRegistry] could not retire the revoked device key: ${l(d)}`);
      }),
      new f())
    );
  let u = a.toLowerCase();
  return (
    await m(e, (d) => (d.privateKeyPkcs8B64 === s.privateKeyPkcs8B64 ? { ...d, rowPk: u } : d), r).catch((d) => {
      n(`[deviceRegistry] registered device row=${u} but could not cache it: ${l(d)}`);
    }),
    n(`[deviceRegistry] registered device row=${u}`),
    y("device_registry_register"),
    { deviceUUID: u, priv: t }
  );
}
class Cst extends R {
  constructor() {
    super(
      "deviceRegistry: account device limit reached",
      "deviceRegistry: account device limit reached",
      "limit_reached",
    );
  }
}
class bWe extends R {
  constructor(e) {
    super(
      `deviceRegistry: device registration unavailable for this account or organization (${e})`,
      "deviceRegistry: device registration unavailable for this account or organization",
      "registration_unavailable",
    );
  }
}
class f extends R {
  constructor() {
    super(
      "deviceRegistry: device key revoked server-side; a new key will be minted on the next registration",
      "deviceRegistry: device key revoked",
      "key_revoked",
    );
  }
}
async function w(e, i, r) {
  await vn().mutate((t) => {
    if (t.coworkRemoteDevice?.[e]?.privateKeyPkcs8B64 !== i) return t;
    let { [e]: s, ...c } = t.coworkRemoteDevice;
    return { ...t, coworkRemoteDevice: c };
  }, r);
}
async function Z2n(e, i) {
  await m(
    e,
    (r) => {
      if (r.rowPk === void 0) return r;
      let { rowPk: t, ...s } = r;
      return s;
    },
    i,
  );
}
function wWe() {
  return `Claude Code on ${S()} \xB7 ${TJ("darwin")}`;
}
export { Y2n, J2n, Q2n, Cst, bWe, Z2n, wWe };
