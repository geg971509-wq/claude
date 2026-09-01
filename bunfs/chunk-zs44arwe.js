// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J } from "/$bunfs/root/chunk-f9h0bg01.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { zt } from "/$bunfs/root/chunk-qm65zb83.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { H4 } from "/$bunfs/root/chunk-qk7r0t2g.js";
import { h } from "/$bunfs/root/chunk-wkxx62a2.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { Sp } from "/$bunfs/root/chunk-qcx34e4j.js";
import { dh, ESn, iR, bt, On, D6, Ae, ie } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { Ln } from "/$bunfs/root/chunk-zze8764r.js";
import { ai } from "/$bunfs/root/chunk-56sxk8k2.js";
var l = 86400000,
  f = 3000,
  lB = ai(
    async (t) => {
      try {
        return {
          success: true,
          data: (
            await dh(
              async () => {
                let r = await bt.get("/api/oauth/account/settings", { timeout: f, credentials: t });
                if (!r.ok) throw Error(`Failed to get Grove settings: ${r.reason}`);
                return r;
              },
              { credentials: t },
            )
          ).data,
        };
      } catch (e) {
        if (!(e instanceof Error) || !/data-residency|essential-traffic-only|no-auth/.test(e.message))
          n(`Failed to fetch Grove settings: ${e}`, { level: "error" });
        return lB.cache.clear?.(), { success: false };
      }
    },
    () => "account",
  );
async function BHt(t) {
  try {
    await dh(
      async () => {
        let e = await bt.post("/api/oauth/account/grove_notice_viewed", {}, { credentials: t });
        if (!e.ok) throw Error(`Failed to mark Grove notice viewed: ${e.reason}`);
        return e;
      },
      { credentials: t },
    ),
      lB.cache.clear?.(),
      y("api_grove_notice_mark_viewed");
  } catch (e) {
    n(`Failed to mark Grove notice viewed: ${e instanceof Error ? e.message : String(e)}`, { level: "error" }),
      p("api_grove_notice_mark_viewed", "request_failed");
  }
}
async function qke(t, e) {
  try {
    await dh(
      async () => {
        let r = await bt.patch("/api/oauth/account/settings", { grove_enabled: t }, { credentials: e });
        if (!r.ok) throw Error(`Failed to update Grove settings: ${r.reason}`);
        return r;
      },
      { credentials: e },
    ),
      lB.cache.clear?.(),
      y("api_grove_settings_update");
  } catch (r) {
    n(`updateGroveSettings failed: ${String(r)}`, { level: "error" }), p("api_grove_settings_update", "request_failed");
  }
}
async function zge(t, e) {
  if (!D6()) return false;
  let r = On()?.accountUuid;
  if (!r) return false;
  let i = ie().groveConfigCache?.[r],
    u = Date.now();
  if (!i) return n("Grove: No cache, fetching config in background (dialog skipped this session)"), d(r, t, e), false;
  if (u - i.timestamp > l)
    return n("Grove: Cache stale, returning cached data and refreshing in background"), d(r, t, e), i.grove_enabled;
  return n("Grove: Using fresh cached config"), i.grove_enabled;
}
async function d(t, e, r) {
  try {
    let o = await jK(r);
    if (!o.success) return;
    let i = o.data.grove_enabled,
      u = ie().groveConfigCache?.[t];
    if (u?.grove_enabled === i && Date.now() - u.timestamp <= l) return;
    await Ae(
      (a) => ({ ...a, groveConfigCache: { ...a.groveConfigCache, [t]: { grove_enabled: i, timestamp: Date.now() } } }),
      e,
    );
  } catch (o) {
    n(`Grove: Failed to fetch and store config: ${o}`);
  }
}
var jK = ai(
  async (t) => {
    try {
      let e = await dh(
          async () => {
            let a = await bt.get("/api/claude_code_grove", { timeout: f, credentials: t });
            if (!a.ok) throw Error(`Failed to fetch Grove notice config: ${a.reason}`);
            return a;
          },
          { credentials: t },
        ),
        { grove_enabled: r, domain_excluded: o, notice_is_grace_period: i, notice_reminder_frequency: u } = e.data;
      return {
        success: true,
        data: {
          grove_enabled: r,
          domain_excluded: o ?? false,
          notice_is_grace_period: i ?? true,
          notice_reminder_frequency: u,
        },
      };
    } catch (e) {
      return n(`Failed to fetch Grove notice config: ${e}`), { success: false };
    }
  },
  () => "config",
);
function jHt(t, e, r) {
  if (!t.success || !e.success) return false;
  let o = t.data,
    i = e.data;
  if (o.grove_enabled !== null) return false;
  if (r) return true;
  if (!i.notice_is_grace_period) return true;
  let a = i.notice_reminder_frequency;
  if (a !== null && o.grove_notice_viewed_at) {
    let c = new Date(o.grove_notice_viewed_at).getTime();
    if (isNaN(c)) return h(Error(`Invalid grove_notice_viewed_at from API: ${o.grove_notice_viewed_at}`)), true;
    return Math.floor((Date.now() - c) / 86400000) >= a;
  } else {
    let c = o.grove_notice_viewed_at;
    return c === null || c === void 0;
  }
}
async function UNn(t) {
  let [e, r] = await Promise.all([lB(t), jK(t)]);
  if (jHt(e, r, false)) {
    let i = r.success ? r.data : null;
    if (
      (s("tengu_grove_print_viewed", { dismissable: i?.notice_is_grace_period }),
      i === null || i.notice_is_grace_period)
    )
      H4(`
An update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.

`),
        await BHt(t);
    else
      H4(`
[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.

`),
        await Ln(1);
  }
}
class iJt {
  #e;
  constructor(t) {
    this.#e = t;
  }
  reveal() {
    return this.#e;
  }
  toString() {
    return "[REDACTED:gh-token]";
  }
  toJSON() {
    return "[REDACTED:gh-token]";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "[REDACTED:gh-token]";
  }
}
async function sJt(t, e) {
  let r;
  try {
    r = await bt.post(
      "/v1/code/github/import-token",
      { token: t.reveal() },
      {
        headers: { "anthropic-beta": ESn.header },
        auth: "teleport-org",
        timeout: 15000,
        validateStatus: () => true,
        credentials: e,
      },
    );
  } catch (o) {
    if (Sp(o))
      return (
        n(`import-token network error: ${o.code ?? "unknown"}`, { level: "error" }),
        { ok: false, error: { kind: "network" } }
      );
    return { ok: false, error: { kind: "not_signed_in" } };
  }
  if (!r.ok) return { ok: false, error: { kind: "not_signed_in" } };
  if (r.status === 200) return { ok: true, result: r.data };
  if (r.status === 400) return { ok: false, error: { kind: "invalid_token" } };
  if (r.status === 401) return { ok: false, error: { kind: "not_signed_in" } };
  return (
    n(`import-token returned ${r.status}`, { level: "error" }), { ok: false, error: { kind: "server", status: r.status } }
  );
}
async function BNn(t) {
  try {
    return await iR(t), true;
  } catch {
    return false;
  }
}
async function m(t, { timeout: e, isBackground: r }) {
  try {
    let o = await bt.get("/api/oauth/organizations/:orgUUID/sync/github/auth", {
      auth: "teleport-org",
      timeout: e,
      isBackground: r,
      validateStatus: () => true,
      credentials: t,
    });
    if (!o.ok || o.status !== 200) return null;
    let i = o.data?.auth_source;
    return {
      isAuthenticated: o.data?.is_authenticated === true,
      authSource: i === "oauth" || i === "cli_import" ? i : null,
    };
  } catch {
    return null;
  }
}
async function aJt(t) {
  let e = await m(t, { timeout: 1e4, isBackground: false });
  return e?.isAuthenticated ? e.authSource : null;
}
async function _(t) {
  let e = await m(t, { timeout: 3000, isBackground: true });
  if (e === null) return g("api_github_connection_status", "request_failed"), "unknown";
  return y("api_github_connection_status"), e.isAuthenticated ? "connected" : "not_connected";
}
function WK() {
  return `${zt().CLAUDE_AI_ORIGIN}/code`;
}
class v {
  inFlight = void 0;
  status = void 0;
  generation = 0;
  async read(t) {
    if (this.inFlight) await this.inFlight;
    else if (this.status !== "connected") await this.fetch(t);
    return this.status ?? "unknown";
  }
  peek(t) {
    if (this.status === void 0 && !this.inFlight) this.fetch(t);
    return this.status;
  }
  markConnected() {
    this.status = "connected";
  }
  clear() {
    this.generation++, (this.inFlight = void 0), (this.status = void 0);
  }
  fetch(t) {
    let e = this.generation,
      r = _(t).then(
        (o) => {
          this.settle(e, o);
        },
        (o) => {
          h(o), this.settle(e, "unknown");
        },
      );
    return (this.inFlight = r), r;
  }
  settle(t, e) {
    if (t !== this.generation) return;
    if (((this.inFlight = void 0), this.status === "connected")) return;
    if (e === "unknown" && this.status !== void 0) return;
    this.status = e;
  }
}
var vq = new J(() => new v());
export { lB, BHt, qke, zge, jK, jHt, UNn, iJt, sJt, BNn, aJt, WK, vq };
