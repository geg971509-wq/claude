// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { st } from "/$bunfs/root/chunk-qcx34e4j.js";
import { zt } from "/$bunfs/root/chunk-qm65zb83.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { uo } from "/$bunfs/root/chunk-ypdw393e.js";
import { V, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { Ct, yj } from "/$bunfs/root/chunk-wkxx62a2.js";
import { lb } from "/$bunfs/root/chunk-0r9wzh7g.js";
import { ab } from "/$bunfs/root/chunk-rf51999f.js";
import { WI, El, Yt, qa, Cs, I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { aAt } from "/$bunfs/root/chunk-kxyny47c.js";
import { Cg } from "/$bunfs/root/chunk-fxb0gsq0.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import m from "ws";
var b = '{"type":"KeepAlive"}',
  L = '{"type":"CloseStream"}',
  U = "/api/ws/speech_to_text/voice_stream",
  z = 8000,
  KNn = { safety: 5000, noData: 1500 };
function A(e, s, d) {
  return typeof e === "number" && Number.isInteger(e) && e >= s && e <= d ? String(e) : "unknown";
}
function D(e) {
  return uo(e)?.toLowerCase() ?? "unknown";
}
var N = 1500;
async function _Jt() {
  if (Ct() || yj()) return "skipped_privacy";
  try {
    let e = await st.get(`${zt().BASE_API_URL}/api/hello`, {
        headers: { "User-Agent": WI() },
        timeout: N,
        validateStatus: () => true,
        maxRedirects: 0,
      }),
      s = A(e.status, 100, 599);
    return e.headers["cf-mitigated"] !== void 0 ? `cf_mitigated_${s}` : `http_${s}`;
  } catch (e) {
    let s = st.isAxiosError(e) ? e.code : void 0;
    return s === "ECONNABORTED" || s === "ETIMEDOUT" ? "timeout" : "fetch_failed";
  }
}
function hdr() {
  if (a.CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED) return true;
  return I("tengu_brick_follow", false);
}
function yJt() {
  if (!El()) return false;
  let e = Yt();
  return e !== null && e.accessToken !== null;
}
var B = 1024;
function _dr(e) {
  let s = new Set(),
    d = [],
    u = 0;
  for (let C of e) {
    let p = C.replace(/,/g, " ")
      .replace(/[^\x20-\x7E]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!p || s.has(p)) continue;
    let E = p.length + (d.length > 0 ? 1 : 0);
    if (u + E > B) break;
    s.add(p), d.push(p), (u += E);
  }
  return d.join(",");
}
async function SJt(e, s, d) {
  let u;
  if (O() && d !== void 0) await Cs({ credentials: d }), (u = await qa(d));
  else await Cs(), (u = Yt());
  if (!u?.accessToken) return n("[voice_stream] No OAuth token available"), null;
  let C = a.VOICE_STREAM_BASE_URL || zt().BASE_API_URL.replace("https://", "wss://").replace("http://", "ws://");
  if (a.VOICE_STREAM_BASE_URL) n(`[voice_stream] Using VOICE_STREAM_BASE_URL override: ${a.VOICE_STREAM_BASE_URL}`);
  let p = hdr(),
    E = new URLSearchParams({
      encoding: "linear16",
      sample_rate: "16000",
      channels: "1",
      endpointing_ms: "300",
      utterance_end_ms: "1000",
      language: s?.language ?? "en",
      use_conversation_engine: "true",
      ...(p && { forward_interims: "typed" }),
    }),
    T = `${C}${U}?${E.toString()}`;
  n(`[voice_stream] Connecting to ${T}`);
  let w = {
    Authorization: `Bearer ${u.accessToken}`,
    "User-Agent": WI(),
    "x-app": "cli",
    "anthropic-client-platform": Cg(),
  };
  if (s?.keyterms?.length) {
    let t = _dr(s.keyterms);
    if (t) w["x-config-keyterms"] = t;
  }
  let P = lb(),
    M = { headers: w, proxy: ab(T), tls: P || void 0 };
  aAt(T, m);
  let i = new m(T, M),
    f = null,
    y = false,
    k = false,
    S = false,
    g = false,
    x = false,
    _ = null,
    v = null,
    R = {
      send(t) {
        if (i.readyState !== m.OPEN) return;
        if (S) {
          n(`[voice_stream] Dropping audio chunk after CloseStream: ${String(t.length)} bytes`);
          return;
        }
        n(`[voice_stream] Sending audio chunk: ${String(t.length)} bytes`), i.send(Buffer.from(t));
      },
      finalize() {
        if (g || S) return Promise.resolve("ws_already_closed");
        return (
          (g = true),
          new Promise((t) => {
            let c = setTimeout(() => _?.("safety_timeout"), KNn.safety),
              r = setTimeout(() => _?.("no_data_timeout"), KNn.noData);
            if (
              ((v = () => {
                clearTimeout(r), (v = null);
              }),
              (_ = (o) => {
                if ((clearTimeout(c), clearTimeout(r), (_ = null), (v = null), l)) {
                  n(`[voice_stream] Promoting unreported interim before ${o} resolve`);
                  let F = l;
                  (l = ""), e.onTranscript(F, true);
                }
                n(`[voice_stream] Finalize resolved via ${o}`), t(o);
              }),
              i.readyState === m.CLOSED || i.readyState === m.CLOSING)
            ) {
              _("ws_already_closed");
              return;
            }
            setTimeout(() => {
              if (((S = true), i.readyState === m.OPEN)) n("[voice_stream] Sending CloseStream (finalize)"), i.send(L);
            }, 0);
          })
        );
      },
      close() {
        if (((S = true), f)) clearInterval(f), (f = null);
        if (((y = false), i.readyState === m.OPEN)) i.close();
      },
      isConnected() {
        return y && i.readyState === m.OPEN;
      },
    };
  i.on("open", () => {
    n("[voice_stream] WebSocket connected"),
      (y = true),
      (k = true),
      n("[voice_stream] Sending initial KeepAlive"),
      i.send(b),
      (f = setInterval(
        (t) => {
          if (t.readyState === m.OPEN) n("[voice_stream] Sending periodic KeepAlive"), t.send(b);
        },
        z,
        i,
      )),
      e.onReady(R);
  });
  let l = "";
  function h(t) {
    if (!l) return;
    n(`[voice_stream] Promoting unreported interim to final (${t})`);
    let c = l;
    (l = ""), e.onTranscript(c, true);
  }
  return (
    i.on("message", (t) => {
      let c = t.toString();
      n(`[voice_stream] Message received (${String(c.length)} chars)`);
      let r;
      try {
        r = V(c);
      } catch {
        return;
      }
      switch (r.type) {
        case "TranscriptInterim":
        case "TranscriptText": {
          let o = r.data;
          if ((n(`[voice_stream] ${r.type} (${String(o?.length ?? 0)} chars)`), S)) v?.();
          if (o) (l = o), e.onTranscript(o, false);
          break;
        }
        case "TranscriptEndpoint": {
          n(`[voice_stream] TranscriptEndpoint received (${String(l.length)} chars pending)`);
          let o = l;
          if (((l = ""), o)) e.onTranscript(o, true);
          if (S) _?.("post_closestream_endpoint");
          break;
        }
        case "TranscriptError": {
          let o = r.description ?? r.error_code ?? "unknown transcription error";
          if ((n(`[voice_stream] TranscriptError: ${o}`), h("TranscriptError"), !g)) e.onError(o);
          break;
        }
        case "error": {
          let o = r.message ?? `unstructured error frame (keys: ${Object.keys(r).join(", ")})`;
          if ((n(`[voice_stream] Server error: ${o}`), h("server error"), !g)) e.onError(o);
          break;
        }
        default:
          break;
      }
    }),
    i.on("close", (t, c) => {
      let r = c?.toString() ?? "";
      if ((n(`[voice_stream] WebSocket closed: code=${String(t)} reason="${r}"`), (y = false), f))
        clearInterval(f), (f = null);
      if ((h("ws close"), _?.("ws_close"), !g && !x && t !== 1000 && t !== 1005))
        e.onError(
          `Connection closed: code ${String(t)}${r ? ` \u2014 ${r}` : ""}`,
          k ? void 0 : { connectFailureCode: `ws_closed_${A(t, 1000, 4999)}` },
        );
      e.onClose();
    }),
    i.on("unexpected-response", (t, c) => {
      let r = c.statusCode ?? 0;
      if (r === 101) {
        n("[voice_stream] unexpected-response fired with 101; ignoring");
        return;
      }
      if (
        (n(
          `[voice_stream] Upgrade rejected: status=${String(r)} cf-mitigated=${String(c.headers["cf-mitigated"])} cf-ray=${String(c.headers["cf-ray"])}`,
        ),
        (x = true),
        c.resume(),
        t.destroy?.(),
        g)
      )
        return;
      e.onError(`WebSocket upgrade rejected with HTTP ${String(r)}`, {
        fatal: r >= 400 && r < 500,
        connectFailureCode:
          c.headers["cf-mitigated"] !== void 0
            ? `cf_mitigated_${A(r, 100, 599)}`
            : `upgrade_rejected_${A(r, 100, 599)}`,
      });
    }),
    i.on("error", (t) => {
      if ((n(`[voice_stream] WebSocket error: ${t.message}`, { level: "error" }), h("ws error"), !g))
        e.onError(
          `Voice stream connection error: ${t.message}`,
          k ? void 0 : { connectFailureCode: `ws_error_${D(t)}` },
        );
    }),
    R
  );
}
export { KNn, _Jt, hdr, yJt, _dr, SJt };
