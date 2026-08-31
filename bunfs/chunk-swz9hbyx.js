// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { R4 } from "/$bunfs/root/chunk-wkxx62a2.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { c } from "/$bunfs/root/chunk-4xj01xwv.js";
import { y, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { yO, kwt } from "/$bunfs/root/chunk-amem41jf.js";
import { Cre } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { W9e, nle, q9e } from "/$bunfs/root/chunk-zze8764r.js";
import { D2t } from "/$bunfs/root/chunk-qy75zxb2.js";
import { i, v, q, f } from "/$bunfs/root/chunk-saay52v7.js";
var L = m(() =>
  f({
    file_uuid: i(),
    file_name: i(),
    is_image: q().nullish(),
    sha256: i().nullish().catch(null),
    file_size: v()
      .nullish()
      .catch(void 0),
  }),
);
function Xse(e) {
  if (typeof e !== "object" || e === null || !("file_attachments" in e)) return [];
  let r = e.file_attachments;
  if (!Array.isArray(r)) return [];
  let t = L();
  return r.flatMap((a) => {
    let u = t.safeParse(a);
    return u.success ? [u.data] : [];
  });
}
var h = new Set(["ios", "android", "web_claude_ai", "desktop_app"]);
function k(e) {
  return e === "claude_code_cli" || e === "claude_code_vscode";
}
function ven(e, r) {
  if (r) return;
  return k(e) ? { kind: "human" } : void 0;
}
var E = new Set(["scheduled_trigger", "force_run_trigger", "github_webhook_trigger", "fire_routine", "pr_steward"]),
  M = new Set(["trigger_fire"]),
  D = "session_inbox",
  G = "projects-relay";
function uUn({ relayMessageIds: e, isSynthetic: r }) {
  return e !== void 0 || r !== !0;
}
function p(e) {
  return e && M.has(e) ? { kind: "task-notification", subkind: "scheduled-trigger" } : { kind: "task-notification" };
}
var U = new Set(["scheduled_trigger", "force_run_trigger", "fire_routine"]);
function uje(e, r, t) {
  if (e === "now") return e;
  return (r && U.has(r)) || (t && H.has(t)) ? "later" : e;
}
var N = new Set(["claude-in-slack", "claude_in_slack"]),
  T = "slack_human",
  x = new Set([nle]),
  P = "claude-in-teams",
  B = "teams_human",
  F = "owner_relay",
  b = "hearth_human",
  H = new Set(["trigger_fire", "plugin_fire"]),
  j = "receiver_grouping_id";
function Ren(e) {
  return _(e, j);
}
function _(e, r) {
  let t = e[r];
  return typeof t === "string" ? t : void 0;
}
var K = "activity_observation";
function ken(e) {
  return _(e, K);
}
function w() {
  return yO();
}
function W() {
  return kwt();
}
function z(e, r) {
  return e !== void 0 && N.has(e) && r === T && w();
}
function Q(e, r) {
  return e === P && r === B && W();
}
function Yse(e, r) {
  return z(e, r) || Q(e, r);
}
function S(e, r) {
  return (e !== void 0 && h.has(e)) || Yse(e, r);
}
function Got(e, r, t) {
  return e ? e.kind === "human" : S(r, t);
}
function dUn(e, r, t, a) {
  if (e) return e.kind === "human";
  if (!r) return !0;
  return S(t, a) || ven(t, a) !== void 0;
}
function zot(e, r, t = !1) {
  let a;
  try {
    a = fje(e);
  } catch {
    return !1;
  }
  if (!a || M0e(a.content)) return !1;
  let { clientPlatform: u, inboundOrigin: o } = a;
  if (o !== void 0) return r === "bridge" ? Yse(u, o) : DIt(o, t);
  return S(u, void 0) || (r === "remote-worker" && k(u));
}
function DIt(e, r = !1) {
  return e === T || e === B || e === F || (r && e === b);
}
function pUn({ isRelayHuman: e, isSynthetic: r, ccrTurnId: t }) {
  if (!e) return {};
  return { ...(!r && { verifiedSlackHumanTurn: !0 }), ...(t !== void 0 && { ccrTurnId: t }) };
}
function dje(e, r, t, a, u, o) {
  let d = M0e(e);
  if (d) return { kind: "peer", from: d, inbound_origin: t, ...Cre(e) };
  if (t === D) return p(t);
  if (r && h.has(r)) return { kind: "human" };
  if (Yse(r, t)) return { kind: "human" };
  if (r && E.has(r)) return p(t);
  if (t === W9e && a) return { kind: "task-notification", subkind: "peer-send-message" };
  n(`[bridge] demoting unwrapped inbound message to peer origin: client_platform=${r || "(absent)"}`, {
    level: "warn",
  });
  let l = !r
    ? "absent"
    : r.startsWith("claude_code")
      ? "claude_code"
      : N.has(r)
        ? t === nle && w()
          ? "slack_bot_observation"
          : "slack_relay"
        : r === P
          ? "teams_relay"
          : "other";
  return (
    s("tengu_bridge_ingress_demoted", { platform_class: c(l) }),
    {
      kind: "peer",
      from: "unknown",
      inbound_origin: t,
      ...Cre(e),
      ...(o !== void 0 && t !== void 0 && x.has(t) && { activityObservation: o }),
    }
  );
}
function pje(e, r, t) {
  if (e && e.kind !== "peer" && e.kind !== "slack-ping") return e;
  if (r && E.has(r)) return p(t);
  if (r && h.has(r)) return { kind: "human" };
  return;
}
function fUn(e, r, t, a, u, o = !1, d = !1) {
  let l = M0e(e);
  if (l) return { kind: "peer", from: l, inbound_origin: t, ...Cre(e) };
  if (t && !x.has(t)) {
    if (t === b)
      if (o) y("bridge_projects_human_origin");
      else g("bridge_projects_human_origin", "disabled_by_flag");
    if (DIt(t, o)) return { kind: "human" };
    if (t === q9e && d) return { kind: "task-notification", subkind: G };
    if (t === W9e && a) return { kind: "task-notification", subkind: "peer-send-message" };
    return p(t);
  }
  if (k(r)) return { kind: "human" };
  if (r?.startsWith("claude_code")) return;
  return dje(e, r, t, a, void 0, u);
}
function Jse(e) {
  return e.verifiedSlackHumanTurn === !0 && e.priority !== "now";
}
function mUn(e, r) {
  if (e === "now") return e;
  return r ? "later" : e;
}
function OIt(e) {
  let a = e.trimStart(),
    u = !1;
  while (a.startsWith("<system-reminder>")) {
    let d = a.indexOf("</system-reminder>");
    if (d < 0) break;
    (a = a.slice(d + 18).trimStart()), (u = !0);
  }
  let o = (u ? a : e).trimEnd();
  while (o.endsWith("</system-reminder>")) {
    let d = o.lastIndexOf(`
`);
    if (!(d < 0 ? o : o.slice(d + 1)).startsWith("<system-reminder>")) break;
    (o = (d < 0 ? "" : o.slice(0, d)).trimEnd()), (u = !0);
  }
  if (!u) return e;
  return o === "" ? e : o;
}
function Hen(e) {
  let r;
  for (let t = 0; t < e.length; t++) {
    let a = e[t];
    if (a.type !== "text") continue;
    let u = OIt(a.text);
    if (u === a.text) continue;
    (r ??= [...e]), (r[t] = { ...a, text: u });
  }
  return r ?? e;
}
function fje(e) {
  if (e.type !== "user") return;
  let r = Xse(e).length > 0,
    t = e.message?.content;
  if (!t && !r) return;
  if (Array.isArray(t) && t.length === 0 && !r) return;
  let a = "uuid" in e && typeof e.uuid === "string" ? e.uuid : void 0,
    u = _(e, "client_platform"),
    o = _(e, "inbound_origin"),
    d = Ren(e),
    l = ken(e),
    C,
    I = Array.isArray(t) ? xen(Hen(Y(t))) : OIt(t ?? "");
  if (Array.isArray(I) && I.length === 0 && !r) return;
  return {
    content: I,
    uuid: a,
    clientPlatform: u,
    inboundOrigin: o,
    receiverGroupingId: d,
    slackOrigin: C,
    activityObservation: l,
  };
}
function M0e(e) {
  if (typeof e !== "string") return;
  return e.match(new RegExp(`^<${R4} from="([^"]+)"`))?.[1];
}
function mje(e) {
  if (typeof e === "string") return M0e(e) !== void 0;
  if (!Array.isArray(e)) return !1;
  return e.some(
    (r) =>
      typeof r === "object" &&
      r !== null &&
      "type" in r &&
      r.type === "text" &&
      "text" in r &&
      typeof r.text === "string" &&
      M0e(r.text) !== void 0,
  );
}
function xen(e) {
  if (!e.some(O)) return e;
  return e.filter((r) => !O(r));
}
function O(e) {
  if (e.type !== "text") return !1;
  return typeof e.text !== "string" || e.text.trim() === "";
}
function Y(e) {
  if (!e.some(A)) return e;
  return e.map((r) => {
    if (!A(r)) return r;
    let t = r.source,
      a = typeof t.mediaType === "string" && t.mediaType ? t.mediaType : D2t(r.source.data);
    return { ...r, source: { type: "base64", media_type: a, data: r.source.data } };
  });
}
function A(e) {
  if (e.type !== "image" || e.source?.type !== "base64") return !1;
  return !e.source.media_type;
}
export {
  Xse,
  ven,
  uUn,
  uje,
  Ren,
  ken,
  Yse,
  Got,
  dUn,
  zot,
  DIt,
  pUn,
  dje,
  pje,
  fUn,
  Jse,
  mUn,
  OIt,
  Hen,
  fje,
  M0e,
  mje,
  xen,
};
