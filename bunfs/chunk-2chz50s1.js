// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { K, et, Se, Tve, $n, hf } from "/$bunfs/root/chunk-f9h0bg01.js";
import { w, c, ke } from "/$bunfs/root/chunk-4xj01xwv.js";
import { js, ft, l } from "/$bunfs/root/chunk-ypdw393e.js";
import { k } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { s } from "/$bunfs/root/chunk-r53tkxrh.js";
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { to, Z } from "/$bunfs/root/chunk-wkxx62a2.js";
import { QI, Jde, tP, Yt } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { gc, Bl } from "/$bunfs/root/chunk-6k63g5t6.js";
import { UY } from "/$bunfs/root/chunk-988p40e0.js";
import { Ul } from "/$bunfs/root/chunk-0spqrdaj.js";
import { Zo, mYe } from "/$bunfs/root/chunk-keb644xg.js";
import {
  ks,
  Ho,
  BW,
  FB,
  rIe,
  Cee,
  u_,
  eg,
  sIe,
  _9n,
  Rsn,
  Tle,
  zct,
  pIe,
  Vct,
  fIe,
  x7,
  Pqe,
  APe,
  Zx,
  As,
  USe,
  nH,
  BSe,
  yi,
  jSe,
} from "/$bunfs/root/chunk-zze8764r.js";
import { To } from "/$bunfs/root/chunk-1v3848mh.js";
import { ur } from "/$bunfs/root/chunk-x06p1jhb.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { Iu } from "/$bunfs/root/chunk-620fbwm6.js";
import { ge } from "/$bunfs/root/chunk-c3bffkxg.js";
import { UZ, y_e, sG, y8, kh, pat, aE, B0, hat } from "/$bunfs/root/chunk-z3cfs4t3.js";
import { OZ, VR, nG } from "/$bunfs/root/chunk-ghr3wy8q.js";
import { W, At, a2e, Xn } from "/$bunfs/root/chunk-ht28m404.js";
import { xt } from "/$bunfs/root/chunk-8cv6dqkz.js";
import { Or } from "/$bunfs/root/chunk-cmhbx7me.js";
import { aQ } from "/$bunfs/root/chunk-k6ybtmar.js";
import { Y0e, rPt, utn, J0e, ptn, hZ, Q0e } from "/$bunfs/root/chunk-ndav7ebh.js";
import { Hy } from "/$bunfs/root/chunk-87pfeb5g.js";
import { YC, _kt } from "/$bunfs/root/chunk-8dy8yen3.js";
import { mJt, gJt, BQ, _1 } from "/$bunfs/root/chunk-k617fh7k.js";
import { BUn, X0e, GUn } from "/$bunfs/root/chunk-tp60f6ta.js";
import { L1, Frn } from "/$bunfs/root/chunk-c59q3nnv.js";
import { yat, Sat, lr } from "/$bunfs/root/chunk-wah81w99.js";
import { e } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { yn, B, We, A, z, C, u, F } from "/$bunfs/root/chunk-twm95mhz.js";
import { Rr, NS, Cpn, dwe } from "/$bunfs/root/chunk-y9akj3mq.js";
import { yu } from "/$bunfs/root/chunk-61hbq2wc.js";
import { Ji } from "/$bunfs/root/chunk-3p0akcc3.js";
F();
F();
function Oe() {
  To().skillIndex.clear();
}
var on = {
    enterprise: "enterprise",
    user: "global",
    project: "project",
    local: "user",
    dynamic: "plugin",
    agent: "agent",
    claudeai: "claudeai",
  },
  fe = import.meta.require("/$bunfs/root/chunk-bagb4ph1.js"),
  Te = 3;
function Re(M) {
  let Q = "plugin" in M ? M.plugin : "no-plugin";
  return `${M.type}:${M.source}:${Q}`;
}
function qe(M, Q) {
  if (Q.length === 0) return;
  M((ne) => {
    let re = new Set(ne.plugins.errors.map((L) => Re(L))),
      g = Q.filter((L) => !re.has(Re(L)));
    if (g.length === 0) return ne;
    return { ...ne, plugins: { ...ne.plugins, errors: [...ne.plugins.errors, ...g] } };
  });
}
function Ye(M, Q) {
  if (Q.length === 0) return;
  M((ne) => {
    let re = new Set(ne.plugins.warnings.map((L) => Re(L))),
      g = Q.filter((L) => !re.has(Re(L)));
    if (g.length === 0) return ne;
    return { ...ne, plugins: { ...ne.plugins, warnings: [...ne.plugins.warnings, ...g] } };
  });
}
function Fe(M, Q, ne) {
  let re = $n(),
    { storageV5: g, credentials: L } = ge(),
    he = Iu(),
    G = Xn(),
    ye = W((t) => t.authVersion),
    Ce = C(void 0),
    [_e, Qe] = u(0),
    Ke = C(0),
    He = C(void 0),
    Ie = C(!1),
    Be = W((t) => t.policyVersion),
    Ue = W((t) => t.mcp.pluginReconnectKey),
    te = At(),
    $e = a2e(),
    ce = xt(),
    q = C(new Map()),
    be = C(new Map()),
    ie = C(new Map()),
    Ae = C(null),
    Ve = C(new Set()),
    se = C(new Set()),
    we = C(null);
  if (we.current === null && !re) we.current = GUn((t) => se.current.has(t));
  A(() => {
    let t = we.current;
    if (!t) return;
    if (!BUn()) return;
    return (
      ne.setChannel(t),
      () => {
        ne.setChannel(void 0);
      }
    );
  }, [ne]);
  let { addNotification: ae } = Or(),
    Me = C(new Set());
  A(
    () =>
      UZ.subscribe((t) => {
        if (Me.current.has(t)) return;
        let a = G.getState().mcp.clients.find((h) => h.name === t);
        if (a?.type !== "connected") return;
        Me.current.add(t),
          (async () => {
            let h = !1;
            try {
              if (
                (a.config.type === "sse" || a.config.type === "http") &&
                (Jde(a.config, !!Yt()?.accessToken || (await L1(L).catch(() => !1))) || (QI() && !!a.config.oauth?.xaa))
              )
                return;
              ae({
                key: `mcp-needs-reauth-${t}`,
                kind: "warning",
                priority: "high",
                text: `MCP server "${t}" lost authentication \xB7 open /mcp and select Re-authenticate`,
                color: "warning",
                timeoutMs: 12000,
              }),
                (h = !0);
            } catch (r) {
              Z(t, `Auth-lost notice skipped: ${l(r)}`);
            } finally {
              if (!h) Me.current.delete(t);
            }
          })();
      }),
    [G, ae, L],
  );
  let Je = 16,
    ve = C([]),
    de = C(null),
    Pe = B(() => {
      de.current = null;
      let t = ve.current;
      if (t.length === 0) return;
      ve.current = [];
      let a = lr();
      te((h) => {
        let r = h.mcp;
        for (let D of t) {
          if (D.epoch !== a && kh(D.config)) {
            if (D.type === "connected") b().detachAndCloseConnection(D);
            continue;
          }
          let { tools: m, commands: S, resources: p, resourceTemplates: R, replaceOnly: U, epoch: Y, ...o } = D,
            I = o.type === "disabled" || o.type === "failed" ? (m ?? []) : m,
            X = o.type === "disabled" || o.type === "failed" ? (S ?? []) : S,
            P = o.type === "disabled" || o.type === "failed" ? (p ?? []) : p,
            E = o.type === "disabled" || o.type === "failed" ? (R ?? []) : R,
            V = Bl(o.name),
            v = r.clients.findIndex((T) => T.name === o.name),
            x = v !== -1 ? r.clients[v] : void 0,
            O = o.type === "connected" && x?.type === "connected" && x.client === o.client,
            y = Zo(o) && As(o.name, o.config);
          if (o.type !== "disabled" && !O && yi(o.name) && !(y && x?.type !== "disabled")) {
            if (y) aQ(o.name);
            if (o.type === "connected") De(o);
            ie.current.delete(o.name), se.current.delete(o.name);
            let T = q.current.get(o.name);
            if (T) T(), q.current.delete(o.name);
            if (x && x.type !== "disabled" && (x.type !== "connected" || !Zo(o)))
              r = {
                ...r,
                clients: r.clients.map((i) =>
                  i.name === o.name ? { name: o.name, type: "disabled", config: o.config } : i,
                ),
                tools: Hy(r.tools, (i) => i.name?.startsWith(V)),
                commands: Hy(r.commands, (i) => u_(i, o.name)),
                resources: Ul(r.resources, o.name),
                resourceTemplates: Ul(r.resourceTemplates, o.name),
              };
            continue;
          }
          if (Zo(o) && As(o.name, o.config)) {
            aQ(o.name);
            let T = o.config;
            if (o.type === "connected") Ji(o.client).onclose = void 0;
            else {
              let i = v === -1 ? void 0 : r.clients[v];
              if (i?.type === "connected") (Ji(i.client).onclose = void 0), (T = i.config);
            }
            if (
              (b()
                .clearServerCache(o.name, T)
                .catch(() => {}),
              v === -1)
            )
              continue;
            r = {
              ...r,
              clients: r.clients.map((i) =>
                i.name === o.name ? { name: o.name, type: "failed", config: o.config, error: NS } : i,
              ),
              tools: Hy(r.tools, (i) => i.name?.startsWith(V)),
              commands: Hy(r.commands, (i) => u_(i, o.name)),
              resources: Ul(r.resources, o.name),
              resourceTemplates: Ul(r.resourceTemplates, o.name),
            };
            continue;
          }
          if (U && v !== -1 && (r.clients[v]?.type === "needs-auth" || r.clients[v]?.type === "disabled")) {
            if (o.type === "connected")
              (Ji(o.client).onclose = void 0),
                b()
                  .clearServerCache(o.name, o.config)
                  .catch(() => {});
            continue;
          }
          if (v === -1 && U) {
            if (o.type === "connected")
              (Ji(o.client).onclose = void 0),
                b()
                  .clearServerCache(o.name, o.config)
                  .catch(() => {});
            continue;
          }
          if (U && Ho() && v !== -1 && ur(o.name, r.clients[v].config) !== ur(o.name, o.config)) {
            if (o.type === "connected") b().detachAndCloseConnection(o);
            continue;
          }
          if (v !== -1 && !mYe(r.clients[v], o)) continue;
          let J = v === -1 ? [...r.clients, o] : r.clients.map((T) => (T.name === o.name ? o : T)),
            d = I === void 0 ? r.tools : [...Hy(r.tools, (T) => T.name?.startsWith(V)), ...I],
            f = X === void 0 ? r.commands : [...Hy(r.commands, (T) => u_(T, o.name)), ...X],
            H = P === void 0 ? r.resources : P.length > 0 ? { ...r.resources, [o.name]: P } : Ul(r.resources, o.name),
            ee =
              E === void 0
                ? r.resourceTemplates
                : E.length > 0
                  ? { ...r.resourceTemplates, [o.name]: E }
                  : Ul(r.resourceTemplates, o.name);
          r = { ...r, clients: J, tools: d, commands: f, resources: H, resourceTemplates: ee };
        }
        return { ...h, mcp: r };
      });
    }, [te]),
    j = B(
      (t) => {
        if ((ve.current.push({ ...t, epoch: lr() }), de.current === null)) de.current = ce.setTimeout(Pe, Je);
      },
      [ce, Pe],
    ),
    ue = B(
      (t) => {
        let a = G.getState().mcp.clients.find((h) => h.name === t);
        for (let h of ve.current) if (h.name === t && mYe(a, h)) a = h;
        return a;
      },
      [G],
    ),
    N = B(
      ({ client: t, tools: a, commands: h, resources: r, resourceTemplates: D, replaceOnly: m }) => {
        j({ ...t, tools: a, commands: h, resources: r, resourceTemplates: D, ...(m && { replaceOnly: m }) });
        {
          let S = Frn();
          if (S)
            ae({
              key: "mcp-first-party-scope-expanded",
              kind: "event",
              priority: "high",
              text: S,
              color: "remember",
              timeoutMs: 12000,
            });
        }
        switch (t.type) {
          case "connected": {
            ie.current.set(t.name, Te), Me.current.delete(t.name);
            let { registerElicitationHandler: S } = import.meta
              .require("/$bunfs/root/chunk-qadpp1g1.js")
              .mcpElicitationHandlerModule();
            S(Ji(t.client), t.name, $e, t.transportErrorState),
              (Ji(t.client).onclose = () => {
                if (ks()) return;
                let P = t.config.type ?? "stdio";
                if (
                  (b()
                    .clearServerCache(t.name, t.config)
                    .catch(() => {
                      n(`Failed to invalidate the server cache: ${t.name}`);
                    }),
                  yi(t.name))
                ) {
                  Z(t.name, "Server is disabled, skipping automatic reconnection");
                  return;
                }
                if (P !== "stdio" && P !== "sdk") {
                  let E = rn(P);
                  Z(t.name, `${E} transport closed/disconnected, attempting automatic reconnection`);
                  let V = q.current.get(t.name);
                  if (V) V(), q.current.delete(t.name);
                  let v = lr(),
                    x = () => lr() === v || !kh(t.config);
                  (async () => {
                    for (let y = 1; y <= FB; y++) {
                      if (yi(t.name)) {
                        Z(t.name, "Server disabled during reconnection, stopping retry"),
                          q.current.delete(t.name),
                          j({ ...t });
                        return;
                      }
                      if (!x()) {
                        Z(t.name, "Identity changed during reconnection, stopping retry");
                        return;
                      }
                      if (As(t.name, t.config)) {
                        aQ(t.name),
                          Z(t.name, "Server blocked by managed policy during reconnection, stopping retry"),
                          q.current.delete(t.name),
                          j({ name: t.name, type: "failed", config: t.config, error: NS });
                        return;
                      }
                      j({ ...t, type: "pending", reconnectAttempt: y, maxReconnectAttempts: FB });
                      let J = ce.now();
                      try {
                        let f = await b().reconnectMcpServerImpl(t.name, t.config, g, L),
                          H = Math.round(ce.now() - J);
                        if (!x()) {
                          Z(t.name, `Identity changed during reconnection attempt ${y}, discarding result`);
                          return;
                        }
                        if (f.client.type === "connected") {
                          Z(t.name, `${E} reconnection successful after ${H}ms (attempt ${y})`),
                            q.current.delete(t.name),
                            N(f);
                          return;
                        }
                        if (
                          (Z(t.name, `${E} reconnection attempt ${y} completed with status: ${f.client.type}`),
                          y === FB)
                        ) {
                          Z(t.name, `Max reconnection attempts (${FB}) reached, giving up`),
                            q.current.delete(t.name),
                            N(f);
                          return;
                        }
                      } catch (f) {
                        let H = Math.round(ce.now() - J);
                        if ((to(t.name, `${E} reconnection attempt ${y} failed after ${H}ms: ${f}`), !x())) return;
                        if (y === FB) {
                          Z(t.name, `Max reconnection attempts (${FB}) reached, giving up`),
                            q.current.delete(t.name),
                            j({ ...t, type: "failed" });
                          return;
                        }
                      }
                      let d = rIe(y);
                      Z(t.name, `Scheduling reconnection attempt ${y + 1} in ${d}ms`),
                        await new Promise((f) => {
                          let H = ce.setTimeout(f, d);
                          q.current.set(t.name, H);
                        });
                    }
                  })();
                } else se.current.delete(t.name), j({ ...t, type: "failed" });
              });
            let p = Q0e(t.name, t.capabilities, t.config.pluginSource, t.protocolEra),
              R = hZ(t.name, hf()),
              U = R?.kind === "plugin" ? `${R.name}@${R.marketplace}` : void 0,
              Y = !1,
              o = () => {
                if (
                  (se.current.add(t.name),
                  b().onMcpNotification(t, Y0e(), async (P) => {
                    let { content: E, meta: V } = P.params;
                    Z(t.name, `notifications/claude/channel: ${E.slice(0, 80)}`),
                      s("tengu_mcp_channel_message", {
                        content_length: E.length,
                        meta_key_count: Object.keys(V ?? {}).length,
                        entry_kind: ke(R?.kind),
                        is_dev: R?.dev ?? !1,
                        plugin: U,
                      }),
                      he.enqueue({
                        mode: "prompt",
                        agentId: et(),
                        value: J0e(t.name, E, V),
                        priority: "next",
                        isMeta: !0,
                        origin: { kind: "channel", server: t.name },
                        skipSlashCommands: !0,
                        skipAttachments: !0,
                      });
                  }),
                  X0e(t.capabilities, "claude/channel/permission"))
                )
                  b().onMcpNotification(t, utn(), async (P) => {
                    let { request_id: E, behavior: V } = P.params,
                      v = we.current?.resolve(E, V, t.name) ?? !1;
                    Z(
                      t.name,
                      `notifications/claude/channel/permission: ${E} \u2192 ${V} (${v ? "matched pending" : "no pending entry \u2014 stale or unknown ID"})`,
                    );
                  });
              };
            switch (p.action) {
              case "register":
                Z(t.name, "Channel notifications registered"), o(), (Y = !0);
                break;
              case "skip": {
                let P = ptn(p.kind),
                  E = se.current.has(t.name);
                if (P) {
                  se.current.delete(t.name);
                  let v = Ji(t.client);
                  v.removeNotificationHandler("notifications/claude/channel"), v.removeNotificationHandler(rPt);
                } else if (E) {
                  Z(t.name, `Channel gate says skip:${p.kind} but was previously registered \u2014 preserving handler`),
                    o(),
                    (Y = !0);
                  break;
                }
                Z(t.name, `Channel notifications skipped: ${p.reason}`);
                let V =
                  p.kind === "capability" || p.kind === "session" ? null : p.kind === "era" ? `era:${t.name}` : p.kind;
                if (
                  V !== null &&
                  !Ve.current.has(V) &&
                  (p.kind === "marketplace" || p.kind === "allowlist" || R !== void 0)
                ) {
                  Ve.current.add(V);
                  let v =
                    p.kind === "disabled"
                      ? "Channels are not currently available"
                      : p.kind === "provider"
                        ? "Channels are not available on Bedrock, Vertex, or Foundry"
                        : p.kind === "policy"
                          ? "Channels are not enabled for your org \xB7 have an administrator set channelsEnabled: true in managed settings"
                          : p.kind === "era"
                            ? `Channel messages from "${t.name}" are unavailable: this connection's protocol version has no channel delivery path`
                            : p.reason;
                  ae({
                    key: p.kind === "era" ? `channels-blocked-era-${t.name}` : `channels-blocked-${p.kind}`,
                    priority: "high",
                    text: v,
                    color: "warning",
                    timeoutMs: 12000,
                  });
                }
                break;
              }
            }
            if (Y || (p.action === "skip" && p.kind !== "capability"))
              s("tengu_mcp_channel_gate", {
                registered: Y,
                skip_kind: p.action === "skip" ? c(p.kind) : void 0,
                entry_kind: ke(R?.kind),
                is_dev: R?.dev ?? !1,
                plugin: U,
              });
            let I = lr(),
              X = () => lr() === I || !kh(t.config);
            if (t.capabilities?.tools?.listChanged)
              b().onMcpToolListChanged(t, async (P) => {
                if (!X()) return;
                let { fetchToolsForClient: E, getToolsListErrorForResult: V, persistRefreshedToolsIfPresent: v } = b(),
                  x = B0(t.name, t.config),
                  O = sIe(P);
                Z(
                  t.name,
                  P === BW
                    ? "Synthesized tools refetch after listen-stream reopen (no notification received)"
                    : "Received tools/list_changed notification, refreshing tools",
                );
                try {
                  let y = ur(t.name, t.config),
                    J = E.cache.get(y);
                  E.cache.delete(y);
                  let d = await E(t, g),
                    f = V(d);
                  if (f)
                    n(`[mcp] ${t.name}: tools/list_changed refresh failed (${f}); keeping previous tools`, {
                      level: "warn",
                    });
                  let H = t.discoveryAuthFailure && d.length === 0;
                  if (H) Z(t.name, "tools refresh returned the needs-auth empty list; keeping previous tools");
                  let ee = d.length,
                    T = Boolean(f) || H;
                  if (!T && J)
                    J.then(
                      (i) => {
                        s("tengu_mcp_list_changed", {
                          mcpServerKeyHash: tP(t.name),
                          type: w("tools"),
                          cause: O,
                          previousCount: i.length,
                          newCount: ee,
                        });
                      },
                      () => {
                        s("tengu_mcp_list_changed", {
                          mcpServerKeyHash: tP(t.name),
                          type: w("tools"),
                          cause: O,
                          newCount: ee,
                        });
                      },
                    );
                  else if (!T)
                    s("tengu_mcp_list_changed", {
                      mcpServerKeyHash: tP(t.name),
                      type: w("tools"),
                      cause: O,
                      newCount: ee,
                    });
                  if (!X()) return;
                  if ((j({ ...t, tools: f || H ? void 0 : d }), !T && Ho()))
                    x.then((i) => v(t, d, { identityEpoch: I, grantLeg: i }));
                } catch (y) {
                  to(t.name, `Failed to refresh tools after list_changed notification: ${l(y)}`);
                }
              });
            if (t.capabilities?.prompts?.listChanged)
              b().onMcpPromptListChanged(t, async (P) => {
                if (!X()) return;
                let { fetchCommandsForClient: E, getDiscoveryFetchError: V } = b();
                Z(
                  t.name,
                  P === BW
                    ? "Synthesized prompts refetch after listen-stream reopen (no notification received)"
                    : "Received prompts/list_changed notification, refreshing prompts",
                );
                try {
                  E.cache.delete(ur(t.name, t.config));
                  let [v, x] = await Promise.all([
                      E(t),
                      yu() && t.capabilities?.resources ? fe.fetchMcpSkillsForClient(t, g) : Promise.resolve([]),
                    ]),
                    O = V(v);
                  if (O)
                    n(
                      `[mcp] ${t.name}: prompts/list_changed refresh failed (${O.message}); keeping previous commands`,
                      { level: "warn" },
                    );
                  if (!X()) return;
                  j({ ...t, commands: O ? void 0 : [...v, ...x] }),
                    Oe(),
                    s("tengu_mcp_list_changed", { mcpServerKeyHash: tP(t.name), type: w("prompts"), cause: sIe(P) });
                } catch (v) {
                  to(t.name, `Failed to refresh prompts after list_changed notification: ${l(v)}`);
                }
              });
            if (t.capabilities?.resources?.listChanged)
              b().onMcpResourceListChanged(t, async (P) => {
                if (!X()) return;
                let {
                  fetchResourcesForClient: E,
                  fetchResourceTemplatesForClient: V,
                  fetchCommandsForClient: v,
                  getDiscoveryFetchError: x,
                } = b();
                Z(
                  t.name,
                  P === BW
                    ? "Synthesized resources refetch after listen-stream reopen (no notification received)"
                    : "Received resources/list_changed notification, refreshing resources",
                );
                try {
                  let O = ur(t.name, t.config);
                  if ((E.cache.delete(O), V.cache.delete(O), yu())) {
                    fe.invalidateMcpSkillsForServer(O), v.cache.delete(O);
                    let [y, J, d, f] = await Promise.all([E(t), V(t), v(t), fe.fetchMcpSkillsForClient(t, g)]),
                      H = x(y),
                      ee = x(J),
                      T = x(d),
                      i = H ?? ee ?? T;
                    if (i)
                      n(
                        `[mcp] ${t.name}: resources/list_changed refresh partial failure (${i.message}); keeping previous for failed fields`,
                        { level: "warn" },
                      );
                    if (!X()) return;
                    j({
                      ...t,
                      resources: H ? void 0 : y,
                      resourceTemplates: ee ? void 0 : J,
                      commands: T ? void 0 : [...d, ...f],
                    }),
                      Oe();
                  } else {
                    let [y, J] = await Promise.all([E(t), V(t)]),
                      d = x(y),
                      f = x(J),
                      H = d ?? f;
                    if (H)
                      n(
                        `[mcp] ${t.name}: resources/list_changed refresh partial failure (${H.message}); keeping previous for failed fields`,
                        { level: "warn" },
                      );
                    if (!X()) return;
                    j({ ...t, resources: d ? void 0 : y, resourceTemplates: f ? void 0 : J });
                  }
                  s("tengu_mcp_list_changed", { mcpServerKeyHash: tP(t.name), type: w("resources"), cause: sIe(P) });
                } catch (O) {
                  to(t.name, `Failed to refresh resources after list_changed notification: ${l(O)}`);
                }
              });
            break;
          }
          case "failed": {
            let S = (ie.current.get(t.name) ?? 0) + 1;
            if (Cee(t) && S <= Te) {
              ie.current.set(t.name, S);
              let p = rIe(S);
              Z(
                t.name,
                `Transient ${t.errorCode ?? "<sse-no-code>"} on initial connect \u2014 retry ${S}/${Te} in ${p}ms`,
              ),
                j({ name: t.name, config: t.config, type: "pending", reconnectAttempt: S, maxReconnectAttempts: Te });
              let R = q.current.get(t.name);
              if (R) R();
              let U = lr(),
                Y = ce.setTimeout(() => {
                  if ((q.current.delete(t.name), yi(t.name))) {
                    j({ ...t });
                    return;
                  }
                  if (lr() !== U) return;
                  if (As(t.name, t.config)) {
                    aQ(t.name),
                      Z(t.name, "Server blocked by managed policy during initial-connect retry, stopping retry"),
                      j({ name: t.name, type: "failed", config: t.config, error: NS });
                    return;
                  }
                  b()
                    .reconnectMcpServerImpl(t.name, t.config, g, L)
                    .then(
                      (o) => {
                        if (lr() !== U) return;
                        N(o);
                      },
                      (o) => {
                        if ((to(t.name, `Initial-connect retry ${S} threw: ${l(o)}`), lr() !== U)) return;
                        j({ ...t });
                      },
                    );
                }, p);
              q.current.set(t.name, Y);
            } else if (_kt(t, fIe, pIe)) YC("MCP", 1);
            break;
          }
          case "needs-auth":
            if (_kt(t, fIe, pIe)) YC("MCP", 1);
            break;
          case "cached":
          case "pending":
          case "disabled":
            break;
          default:
        }
      },
      [ce, j, ae, te, he, g, L],
    );
  A(
    () =>
      y_e.subscribe((t, a) => {
        (async () => {
          let h = () =>
              void b()
                .clearServerCache(t, a)
                .catch(() => {}),
            r = lr();
          try {
            let D = G.getState().mcp.clients.find((I) => I.name === t);
            if (D === void 0 || !Zo(D) || yi(t) || As(t, a)) {
              h();
              return;
            }
            if (ur(t, D.config) !== ur(t, a)) {
              h();
              return;
            }
            let m = b(),
              S = await m.connectToServer(t, a, void 0, g, L);
            if (lr() !== r) {
              if (S.type === "connected") m.detachAndCloseConnection(S);
              return;
            }
            if (S.type !== "connected") return;
            let [p, R, U, Y] = await Promise.all([
              m.fetchToolsForClient(S, g),
              m.fetchCommandsForClient(S),
              yu() && S.capabilities?.resources ? fe.fetchMcpSkillsForClient(S, g) : Promise.resolve([]),
              S.capabilities?.resources ? m.fetchResourcesForClient(S) : Promise.resolve([]),
            ]);
            if (lr() !== r) {
              m.detachAndCloseConnection(S);
              return;
            }
            let o = G.getState().mcp.clients.find((I) => I.name === t);
            if (o === void 0 || !Zo(o) || yi(t) || As(t, a)) {
              h();
              return;
            }
            N({ client: S, tools: p, commands: [...R, ...U], resources: Y, resourceTemplates: [], replaceOnly: !0 });
          } catch (D) {
            if ((h(), !yi(t) && lr() === r))
              j({
                name: t,
                type: "failed",
                config: a,
                error: `Re-adopt after re-authentication failed: ${l(D)}`,
                replaceOnly: !0,
              });
            n(`Failed to re-adopt reauth connection for ${t}: ${l(D)}`, { level: "error" });
          }
        })();
      }),
    [G, N, j, g, L],
  ),
    A(
      () => (
        Tve((t) => {
          if (!Ho()) return;
          let { registerElicitationHandler: a } = import.meta
            .require("/$bunfs/root/chunk-qadpp1g1.js")
            .mcpElicitationHandlerModule();
          a(Ji(t.client), t.name, $e, t.transportErrorState);
        }),
        () => Tve(void 0)
      ),
      [$e],
    ),
    A(
      () =>
        sG.subscribe((t, a) => {
          (async () => {
            let h = lr(),
              r = b();
            try {
              let D = ue(t);
              if (D?.type !== "cached") return;
              if (As(t, a)) {
                aQ(t),
                  r.clearServerCache(t, a).catch(() => {}),
                  r.dropDiscoveryEntry(t, a).catch(() => {}),
                  j({ name: t, type: "failed", config: a, error: NS, errorCode: "POLICY_BLOCKED", replaceOnly: !0 });
                return;
              }
              if (yi(t)) {
                r.clearServerCache(t, a).catch(() => {}),
                  N({
                    client: { name: t, type: "failed", config: a, error: dwe, errorCode: "DISABLED" },
                    tools: [],
                    commands: [],
                    replaceOnly: !0,
                  });
                return;
              }
              if (ur(t, D.config) !== ur(t, a)) {
                r.clearServerCache(t, a).catch(() => {});
                return;
              }
              let m = await r.connectToServer(t, a, void 0, g, L);
              if (lr() !== h) return;
              if (m.type === "connected" && yi(t)) {
                N({ client: m, tools: [], commands: [], replaceOnly: !0 });
                return;
              }
              if (m.type !== "connected") {
                if (m.type === "needs-auth")
                  N({
                    client: { ...m, config: a },
                    tools: VR(t, a),
                    commands: [],
                    resources: [],
                    resourceTemplates: [],
                    replaceOnly: !0,
                  });
                return;
              }
              aE(t);
              let S = await B0(t, a);
              if (lr() !== h) return;
              let p = !!m.capabilities?.resources,
                [R, U, Y, o] = await Promise.all([
                  r.fetchToolsForClient(m, g),
                  r.fetchCommandsForClient(m),
                  yu() && p ? fe.fetchMcpSkillsForClient(m, g) : Promise.resolve([]),
                  p ? r.fetchResourcesForClient(m) : Promise.resolve([]),
                ]);
              if ((await r.peekSettledConnection(t, a)) !== m) return;
              let I = ue(t);
              if (lr() !== h || I?.type !== "cached") return;
              if (As(t, a)) {
                aQ(t),
                  (Ji(m.client).onclose = void 0),
                  r.clearServerCache(t, a).catch(() => {}),
                  r.dropDiscoveryEntry(t, a).catch(() => {}),
                  j({ name: t, type: "failed", config: a, error: NS, errorCode: "POLICY_BLOCKED", replaceOnly: !0 });
                return;
              }
              let X = r.getToolsListErrorForResult(R),
                P = X ? G.getState().mcp.tools.filter((O) => eg(O, t)) : R;
              if (X)
                n(`Cached MCP server ${t}: adoption tools/list failed (${l(X)}); keeping cached surface`, {
                  level: "warn",
                });
              let E = r.getDiscoveryFetchError(U),
                v = [...(E ? G.getState().mcp.commands.filter((O) => u_(O, t) && O.loadedFrom !== "mcp") : U), ...Y];
              if (E)
                n(`Cached MCP server ${t}: adoption prompts/list failed (${l(E)}); keeping cached prompts`, {
                  level: "warn",
                });
              let x = o ? r.getDiscoveryFetchError(o) : void 0;
              if (x)
                n(`Cached MCP server ${t}: adoption resources/list failed (${l(x)}); keeping cached resources`, {
                  level: "warn",
                });
              N({
                client: m,
                tools: P,
                commands: v,
                resources: x ? void 0 : o,
                resourceTemplates: [],
                replaceOnly: !0,
              }),
                r.persistLiveListing(m, { tools: R, commands: U, resources: o, identityEpoch: h, grantLeg: S });
            } catch (D) {
              n(`Failed to adopt cached MCP server ${t} after lazy connect: ${l(D)}`, { level: "warn" });
            }
          })();
        }),
      [G, N, j, g, L, ue],
    ),
    A(
      () =>
        y8.subscribe((t, a) => {
          b().takeSettledCachedDialFailure(t.name, t.config);
          let h = ue(t.name);
          if (h?.type !== "cached" || ur(t.name, h.config) !== ur(t.name, t.config)) return;
          if ((N({ client: t, tools: [], commands: [], replaceOnly: !0 }), a)) hat(t.name, t.config);
        }),
      [N, ue],
    ),
    A(() => {
      if (re) return;
      let t = yat(() => {
        if (He.current === lr()) return;
        Qe((a) => a + 1);
      });
      if (Sat()) Ie.current = !0;
      return t;
    }, [re]);
  let ze = K();
  A(() => {
    if (re) return;
    async function t() {
      let {
          servers: a,
          errors: h,
          warnings: r,
        } = Q ? { servers: {}, errors: [], warnings: [] } : await nH(M, { storageV5: g }),
        { configs: D, blocked: m } = USe(M),
        S = { ...a, ...D };
      if (m.length > 0) {
        m.sort(), n(`MCP servers blocked by managed policy at connect time: ${m.join(", ")}`, { level: "warn" });
        let p = m.join(",");
        if (Ae.current !== p)
          (Ae.current = p),
            ae({
              key: "mcp-blocked-policy",
              kind: "warning",
              priority: "high",
              text: `MCP ${k(m.length, "server")} blocked by enterprise policy: ${m.join(", ")}`,
              color: "warning",
              timeoutMs: 12000,
            });
        for (let R of m) {
          let U = M?.[R];
          if (U)
            b()
              .clearServerCache(R, U)
              .catch(() => {});
        }
      } else Ae.current = null;
      qe(te, h),
        Ye(te, r),
        te((p) => {
          let { stale: R, ...U } = _9n(p.mcp, S, Se());
          for (let I of R) {
            let X = q.current.get(I.name);
            if (X) X(), q.current.delete(I.name);
            if ((se.current.delete(I.name), ie.current.delete(I.name), !Zo(I))) continue;
            if (I.type === "connected") Ji(I.client).onclose = void 0;
            b()
              .clearServerCache(I.name, I.config)
              .catch(() => {});
          }
          let Y = new Set(U.clients.map((I) => I.name)),
            o = Object.entries(S)
              .filter(([I]) => !Y.has(I))
              .map(([I, X]) => ({ name: I, type: yi(I) ? "disabled" : "pending", config: X }));
          if (o.length === 0 && R.length === 0) {
            if (p.mcp.clientsInitialized) return p;
            return { ...p, mcp: { ...p.mcp, clientsInitialized: !0 } };
          }
          return { ...p, mcp: { ...p.mcp, ...U, clientsInitialized: !0, clients: [...U.clients, ...o] } };
        });
    }
    t().catch((a) => {
      to("useManageMCPConnections", `Failed to initialize servers as pending: ${l(a)}`);
    });
  }, [Q, M, te, ze, Ue, Be, g]),
    A(() => {
      if (re) return;
      let t = !1;
      async function a() {
        let h = Ce.current !== void 0 && Ce.current !== ye,
          r = Ke.current !== _e;
        Ke.current = _e;
        let D = Ie.current;
        Ie.current = !1;
        let m = h || r || D;
        nG();
        let S = Ho(),
          p = m && S && (b().mcpIdentityChangedSinceLastCheck() || D);
        if (p) {
          let x = b(),
            O = G.getState().mcp.clients.filter(Zo),
            y = new Set(),
            J = new Set(),
            d = G.getState().mcp.clients;
          for (let i of d) if (!kh(i.config)) y.add(i.name), J.add(ur(i.name, i.config));
          let f = pat(d),
            H = new Set();
          for (let i of O) {
            if (y.has(i.name)) continue;
            if (i.type === "connected") Ji(i.client).onclose = void 0;
            x.disposeServerConnectionDetached(i.name, i.config), H.add(i.name);
          }
          for (let i of G.getState().mcp.clients)
            if (i.type === "needs-auth" && kh(i.config) && (i.config.type === "http" || i.config.type === "sse"))
              H.add(i.name);
          let ee = new Set();
          for (let i of G.getState().mcp.clients)
            if (i.config.type === "claudeai-proxy" && !y.has(i.name)) ee.add(i.name);
          for (let i of [...q.current.keys()]) {
            if (y.has(i)) continue;
            q.current.get(i)?.(), q.current.delete(i);
          }
          for (let i of [...se.current]) if (!y.has(i)) se.current.delete(i);
          for (let i of [...ie.current.keys()]) if (!y.has(i)) ie.current.delete(i);
          let T = [...H, ...ee];
          if (T.length > 0)
            G.setState((i) => {
              let en = T.map((oe) => [oe, Bl(oe)]),
                nn = (oe) => en.some(([xe, tn]) => eg(oe, xe, tn));
              return {
                ...i,
                mcp: {
                  ...i.mcp,
                  clients: i.mcp.clients.flatMap((oe) =>
                    ee.has(oe.name)
                      ? []
                      : H.has(oe.name)
                        ? [{ name: oe.name, type: "pending", config: oe.config }]
                        : [oe],
                  ),
                  tools: Hy(i.mcp.tools, nn),
                  commands: Hy(i.mcp.commands, (oe) => T.some((xe) => u_(oe, xe))),
                  resources: Ul(i.mcp.resources, T),
                  resourceTemplates: Ul(i.mcp.resourceTemplates, T),
                },
              };
            });
          x.evictAllMcpMemosOnIdentityChange(J, f), OZ(g), x7().clear(), (He.current = lr());
        }
        if (S) Ce.current = ye;
        let R;
        if (Q || BSe()) R = Promise.resolve({});
        else {
          if ((zct(), m)) {
            if (!p) OZ(g);
            Vct();
          }
          (Ce.current = ye), (R = Tle(L));
        }
        let {
          servers: U,
          errors: Y,
          warnings: o,
        } = Q ? { servers: {}, errors: [], warnings: [] } : await nH(M, { storageV5: g });
        if (t) return;
        qe(te, Y), Ye(te, o);
        let I = { ...U, ...USe(M).configs },
          X = gc(I, (x, O) => yi(O));
        if (Object.keys(X).length > 0 || (S && Object.keys(I).length > 0)) b().seedMcpIdentityCheck();
        if (Object.keys(X).length > 0)
          b()
            .getMcpToolsCommandsAndResources(N, X, g, L)
            .catch((x) => {
              to("useManageMcpConnections", `Failed to get MCP resources: ${l(x)}`);
            });
        let P = {};
        if (!Q) {
          let { allowed: x, blocked: O } = Zx((await R) ?? {});
          if (((P = x), t)) return;
          if (UY())
            for (let d of G.getState().mcp.clients) {
              if (d.config.scope !== "claudeai") continue;
              if (d.type === "disabled") continue;
              let f = q.current.get(d.name);
              if (f) f(), q.current.delete(d.name);
              if ((se.current.delete(d.name), ie.current.delete(d.name), Zo(d))) {
                if (d.type === "connected") Ji(d.client).onclose = void 0;
                b()
                  .clearServerCache(d.name, d.config)
                  .catch(() => {});
              }
              j({ name: d.name, type: "failed", config: d.config, error: Cpn });
            }
          if (O.length > 0) {
            n(`claude.ai connectors blocked by managed policy at connect time: ${O.join(", ")}`, { level: "warn" });
            for (let d of O) {
              let f = G.getState().mcp.clients.find((ee) => ee.name === d && ee.config.scope === "claudeai");
              if (!f) continue;
              let H = q.current.get(d);
              if (H) H(), q.current.delete(d);
              if (Zo(f)) {
                if (f.type === "connected") Ji(f.client).onclose = void 0;
                b()
                  .clearServerCache(d, f.config)
                  .catch(() => {});
              }
              j({ name: d, type: "failed", config: f.config, error: NS });
            }
          }
          let y = Rsn();
          if (y)
            ae({
              key: "claudeai-mcp-cross-org-override",
              priority: "immediate",
              text: y.level === "error" ? y.message : `\u26A0 ${y.message}`,
              color: y.level === "error" ? "error" : "warning",
              timeoutMs: 20000,
            });
          let J = [];
          if (Object.keys(P).length > 0) {
            let { servers: d, suppressed: f } = await APe(P, I);
            if (t) return;
            (P = d), (J = f);
          }
          if (
            (te((d) =>
              Pqe(d.mcp.suppressedClaudeAiConnectors ?? [], J)
                ? d
                : { ...d, mcp: { ...d.mcp, suppressedClaudeAiConnectors: J } },
            ),
            Object.keys(P).length > 0)
          ) {
            te((f) => {
              let H = new Set(f.mcp.clients.map((T) => T.name)),
                ee = Object.entries(P)
                  .filter(([T]) => !H.has(T))
                  .map(([T, i]) => ({ name: T, type: yi(T) ? "disabled" : "pending", config: i }));
              if (ee.length === 0) return f;
              return { ...f, mcp: { ...f.mcp, clients: [...f.mcp.clients, ...ee] } };
            });
            let d = gc(P, (f, H) => yi(H));
            if (Object.keys(d).length > 0 || (S && Object.keys(P).length > 0)) b().seedMcpIdentityCheck();
            if (Object.keys(d).length > 0)
              b()
                .getMcpToolsCommandsAndResources(N, d, g, L)
                .catch((f) => {
                  to("useManageMcpConnections", `Failed to get claude.ai MCP resources: ${l(f)}`);
                });
          }
        }
        let E = { ...I, ...P },
          V = { enterprise: 0, global: 0, project: 0, user: 0, plugin: 0, agent: 0, claudeai: 0 },
          v = [];
        for (let [x, O] of Object.entries(E)) {
          let y = O.scope ? on[O.scope] : void 0;
          if (y) V[y]++;
        }
        s("tengu_mcp_servers", { ...V, ...!1 });
      }
      return (
        a().catch((h) => {
          to("useManageMcpConnections", `MCP connect failed on mount: ${l(h)}`);
        }),
        () => {
          t = !0;
        }
      );
    }, [Q, M, N, te, ye, _e, ze, Ue, Be, g, L]),
    A(() => {
      let t = q.current;
      return () => {
        for (let a of t.values()) a();
        if ((t.clear(), de.current !== null)) de.current(), (de.current = null), Pe();
      };
    }, [Pe]);
  let Ze = B(
      async (t, a = { discardDiscovery: !0 }) => {
        let h = be.current.get(t);
        if (h && h.epoch === lr()) {
          if (Ho() && a.discardDiscovery && !h.discardDiscovery && !h.connectNow) {
            let Y = G.getState().mcp.clients.find((o) => o.name === t);
            if (Y)
              b()
                .dropDiscoveryEntry(t, Y.config)
                .catch(() => {});
          }
          return h.attempt;
        }
        let r = G.getState().mcp.clients.find((Y) => Y.name === t);
        if (!r) throw ft(Error(`MCP server ${t} not found`), "MCP server not found in store");
        if (yi(t)) throw new js(r.type === "disabled" ? BQ(t) : _1(t), "MCP server disabled; enable before reconnect");
        let D = q.current.get(t);
        if (D) D(), q.current.delete(t);
        let m = lr(),
          S = r.type === "cached" || r.type === "pending",
          p = a.discardDiscovery && !S,
          R = (async () => {
            j({ name: t, type: "pending", config: r.config });
            try {
              let Y = M?.[t] ?? (Q ? void 0 : (await nH(M, { storageV5: g })).servers[t]) ?? r.config;
              if (As(t, Y))
                throw (
                  (aQ(t),
                  ft(
                    Error(`MCP server ${t} is blocked by enterprise managed policy`),
                    "MCP server blocked by enterprise managed policy",
                  ))
                );
              if (r.type === "connected") Ji(r.client).onclose = void 0;
              let o = await (p ? b().reconnectMcpServerDistrusted(t, Y, g, L) : b().reconnectMcpServerImpl(t, Y, g, L));
              if (yi(t)) {
                if (o.client.type === "connected") De(o.client);
                throw new js(`"${Rr(t)}" was disabled while reconnecting`, "MCP server disabled during reconnect");
              }
              if (lr() === m) N(o);
              return o;
            } catch (Y) {
              if (lr() === m) j(r);
              throw Y;
            }
          })(),
          U = { attempt: R, epoch: m, discardDiscovery: p, connectNow: S };
        be.current.set(t, U);
        try {
          return await R;
        } finally {
          if (be.current.get(t) === U) be.current.delete(t);
        }
      },
      [G, j, N, M, Q, g, L],
    ),
    Ne = B(
      async (t) => {
        let a = G.getState().mcp.clients.find((r) => r.name === t);
        if (!a) throw ft(Error(`MCP server ${t} not found`), "MCP server not found in store");
        if (a.type !== "disabled") {
          let r = q.current.get(t);
          if (r) r(), q.current.delete(t);
          if ((jSe(t, !1, g), se.current.delete(t), ie.current.delete(t), a.type === "connected"))
            await b().clearServerCache(t, a.config);
          else if (a.type === "cached") b().disposeServerConnectionDetached(t, a.config);
          if (Ho())
            b()
              .dropDiscoveryEntry(t, a.config)
              .catch(() => {});
          let D = { name: t, type: "disabled", config: a.config };
          return j(D), D;
        } else {
          let r = M?.[t] ?? (Q ? void 0 : (await nH(M, { storageV5: g })).servers[t]) ?? a.config;
          if (As(t, r))
            throw (
              (aQ(t),
              ft(
                Error(`MCP server ${t} is blocked by enterprise managed policy`),
                "MCP server blocked by enterprise managed policy",
              ))
            );
          jSe(t, !0, g), j({ name: t, type: "pending", config: r });
          let D = lr(),
            m = await b().reconnectMcpServerImpl(t, r, g, L);
          if (yi(t)) {
            if (m.client.type === "connected") De(m.client);
            throw (
              (j({ name: t, type: "disabled", config: r }),
              new js(`"${Rr(t)}" was disabled while enabling`, "MCP server disabled during enable"))
            );
          }
          if (lr() === D) N(m);
          return m.client;
        }
      },
      [G, j, N, M, Q, g, L],
    );
  return { reconnectMcpServer: Ze, toggleMcpServer: Ne };
}
function De(M) {
  (Ji(M.client).onclose = void 0),
    b()
      .clearServerCache(M.name, M.config)
      .catch(() => {});
}
function b() {
  return import.meta.require("/$bunfs/root/chunk-qadpp1g1.js").mcpClientModule();
}
function rn(M) {
  switch (M) {
    case "http":
      return "HTTP";
    case "ws":
    case "ws-ide":
      return "WebSocket";
    default:
      return "SSE";
  }
}
function mn() {
  gJt();
}
var me = yn(null);
function Uie() {
  let sn = We(me);
  if (!sn) {
    throw Error("useMcpReconnect must be used within MCPConnectionManager");
  }
  return sn.reconnectMcpServer;
}
function TK() {
  let cn = We(me);
  if (!cn) {
    throw Error("useMcpToggleEnabled must be used within MCPConnectionManager");
  }
  return cn.toggleMcpServer;
}
function xUe(Bt) {
  let Le = _(12),
    { children: Ge, dynamicMcpConfig: Ut, isStrictMcpConfig: Wt, permissionRelays: Vt } = Bt,
    { reconnectMcpServer: le, toggleMcpServer: pe } = Fe(Ut, Wt, Vt),
    je;
  if (Le[0] !== pe)
    (je = async (zt) => {
      await pe(zt);
    }),
      (Le[0] = pe),
      (Le[1] = je);
  else je = Le[1];
  let an;
  if (Le[2] !== le || Le[3] !== je)
    (an = { reconnectMcpServer: le, toggleMcpServer: je }), (Le[2] = le), (Le[3] = je), (Le[4] = an);
  else an = Le[4];
  let Xe = an,
    dn,
    ln;
  if (Le[5] !== le || Le[6] !== pe)
    (dn = () => (mJt(le, pe, yi, As), mn)), (ln = [le, pe]), (Le[5] = le), (Le[6] = pe), (Le[7] = dn), (Le[8] = ln);
  else (dn = Le[7]), (ln = Le[8]);
  A(dn, ln);
  let pn;
  if (Le[9] !== Ge || Le[10] !== Xe)
    (pn = e(me.Provider, { value: Xe, children: Ge })), (Le[9] = Ge), (Le[10] = Xe), (Le[11] = pn);
  else pn = Le[11];
  return pn;
}
export { Uie, TK, xUe };
