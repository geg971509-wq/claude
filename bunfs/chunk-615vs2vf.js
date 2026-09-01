// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Kr } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { y, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { R } from "/$bunfs/root/chunk-ypdw393e.js";
import { re, P, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { Ec } from "/$bunfs/root/chunk-e17gvevg.js";
import { N6t } from "/$bunfs/root/chunk-vq9g7y26.js";
import { Q2n, Cst, bWe, Z2n, wWe } from "/$bunfs/root/chunk-t9fztcxk.js";
import { yrn, Srn, h8 } from "/$bunfs/root/chunk-mh40wjx4.js";
import { sign as v } from "crypto";
var IDt = "creg_",
  m = Buffer.from("anthropic.ccr.create_session_bind.v1", "utf8");
function l(e) {
  if (!Kr(e)) throw new R(`deviceBind: malformed UUID '${e}'`, "deviceBind: malformed UUID");
  return Buffer.from(e.replace(/-/g, ""), "hex");
}
function Ypr(e, i, t, d) {
  let o = Buffer.alloc(m.length + 48 + 8),
    r = 0;
  return (
    (r += m.copy(o, r)),
    (r += l(e).copy(o, r)),
    (r += l(i).copy(o, r)),
    (r += l(t).copy(o, r)),
    o.writeBigUInt64BE(BigInt(d), r),
    o
  );
}
function Jpr(e, i, t, d) {
  let o = Date.now(),
    r = Ypr(e, i, t, o),
    u = v("sha256", r, { key: d, dsaEncoding: "ieee-p1363" });
  return { deviceUUID: t, kid: IDt + t, signature: u.toString("base64"), issuedAt: new Date(o).toISOString() };
}
async function p() {
  let { ensureTrustedDeviceTokenForBind: e } = await import("/$bunfs/root/chunk-m90nqn8m.js");
  return e(void 0);
}
async function PDt(e) {
  if ((e.launchedFromHome ?? N6t)()) return P("launched_from_home");
  let i;
  try {
    i = (e.isEgressAllowed ?? h8)();
  } catch {
    i = false;
  }
  if (!i) return P("egress");
  let t = yrn({
    storedAccountUuid: e.accountUuid,
    hostAccountUuid: await (e.getHostAccountUuid ? e.getHostAccountUuid() : Srn(e.credentials)),
  });
  if (t.status === "missing") return P("account");
  if (t.status === "mismatch") return P("account_mismatch");
  return (await (e.hasDeviceProof ?? p)().catch(() => false))
    ? re({ accountUuid: t.accountUuid, source: t.source })
    : P("no_device_proof");
}
async function $Er(e) {
  let i = e.isEnabled ?? Ec;
  try {
    if (!(await i())) return P("gate");
  } catch (a) {
    return P(f("gate", a));
  }
  let t = await PDt(e);
  if (!t.ok) return B(t.error);
  s("tengu_device_bind_account", { source: c(t.value.source) });
  let { accountUuid: d } = t.value,
    o;
  try {
    o = await Q2n(d, e.displayName ?? wWe(), e.credentials);
  } catch (a) {
    return P(f("register", a));
  }
  let { deviceUUID: r, priv: u } = o;
  return re({
    deviceUUID: r,
    sign: () => {
      try {
        let a = Jpr(e.orgUuid, d, r, u);
        return y("device_bind"), a;
      } catch (a) {
        f("sign", a);
        return;
      }
    },
    clearRegistration: () =>
      Z2n(d, e.credentials).catch((a) => {
        n(`[deviceBind] could not forget the cached device id: ${a instanceof Error ? a.message : String(a)}`);
      }),
  });
}
function B(e) {
  return s("tengu_device_bind_skipped", { reason: c(e) }), P(e);
}
function f(e, i) {
  return (
    s("tengu_device_bind_failed", {
      phase: c(e),
      limit_reached: i instanceof Cst,
      registration_unavailable: i instanceof bWe,
    }),
    g("device_bind", (i instanceof R && i.errorClass) || e),
    n(`[deviceBind] continuing unbound: ${i instanceof Error ? i.message : String(i)}`),
    i instanceof Cst ? "limit_reached" : i instanceof bWe ? "registration_unavailable" : e
  );
}
export { IDt, Ypr, Jpr, PDt, $Er };
