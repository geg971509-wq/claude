// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { mi } from "/$bunfs/root/chunk-f9h0bg01.js";
import { A5t } from "/$bunfs/root/chunk-gcks6mn0.js";
import { ce, zo } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Ch } from "/$bunfs/root/chunk-bhx96yqb.js";
import { gH } from "/$bunfs/root/chunk-37pvmyqb.js";
import { wC, jd, El, k7e, Qk, On, xY } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { PAe, MT, bTn } from "/$bunfs/root/chunk-ax6dy60b.js";
import { Fo } from "/$bunfs/root/chunk-q14dgq5g.js";
import { Wo } from "/$bunfs/root/chunk-2rx5nghb.js";
import { por, ye, nEn, mXe, iEn, cS, sEn } from "/$bunfs/root/chunk-988p40e0.js";
import { Tor, xi } from "/$bunfs/root/chunk-0spqrdaj.js";
import { Et } from "/$bunfs/root/chunk-5rt2mvvk.js";
import { Ew } from "/$bunfs/root/chunk-0r9wzh7g.js";
import { _oe, yoe } from "/$bunfs/root/chunk-rf51999f.js";
import { sA, Ne, OAe } from "/$bunfs/root/chunk-82w4mtvq.js";
import { wYe } from "/$bunfs/root/chunk-ghara6r1.js";
import { t } from "/$bunfs/root/chunk-he2phymk.js";
import { cGe, J_, uGe } from "/$bunfs/root/chunk-zze8764r.js";
import { ru, ZE, Gk } from "/$bunfs/root/chunk-30e2jew7.js";
import { ewe, pmt } from "/$bunfs/root/chunk-308krgtb.js";
import { Jz, Ngn, Bg } from "/$bunfs/root/chunk-vx3kc9d2.js";
import { eG } from "/$bunfs/root/chunk-dcss4tar.js";
import { J_e } from "/$bunfs/root/chunk-5g669xdp.js";
import { Kae } from "/$bunfs/root/chunk-7rcn0da5.js";
import { vst } from "/$bunfs/root/chunk-emq94d9x.js";
import { rp } from "/$bunfs/root/chunk-sypj25ha.js";
import { bme } from "/$bunfs/root/chunk-87pfeb5g.js";
import { sse, UMn, Tnt } from "/$bunfs/root/chunk-bf0mh6c1.js";
import { r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { mt } from "/$bunfs/root/chunk-d5bnjcbw.js";
import { L } from "/$bunfs/root/chunk-v4qqyykc.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
function bBe(i) {
  let e = i.map((s) => s.filter((n) => !n.antOnly));
  return e.push(i.flatMap((s) => s.filter((n) => n.antOnly))), e;
}
function jLn() {
  return [];
}
function WLn() {
  return [];
}
function qLn(i, e = null, s) {
  let n = i?.find((o) => o.name === "ide");
  if (e) {
    let o = Bg(e.ideType),
      l = Jz(e.ideType) ? "plugin" : "extension";
    if (e.error)
      return [
        {
          label: "IDE",
          value: r(t, {
            children: [
              mt("error", s)(L.cross),
              " Error installing ",
              o,
              " ",
              l,
              ": ",
              e.error,
              `
`,
              "Please restart your IDE and try again.",
            ],
          }),
        },
      ];
    if (e.installed)
      if (n && n.type === "connected")
        if (e.installedVersion !== n.serverInfo?.version)
          return [
            {
              label: "IDE",
              value: `Connected to ${o} ${l} version ${e.installedVersion} (server version: ${n.serverInfo?.version})`,
            },
          ];
        else return [{ label: "IDE", value: `Connected to ${o} ${l} version ${e.installedVersion}` }];
      else return [{ label: "IDE", value: `Installed ${o} ${l}` }];
  } else if (n) {
    let o = Ngn(n) ?? "IDE";
    if (n.type === "connected") return [{ label: "IDE", value: `Connected to ${o} extension` }];
    else return [{ label: "IDE", value: `${mt("error", s)(L.cross)} Not connected to ${o}` }];
  }
  return [];
}
function GLn(i = [], e) {
  let s = i.filter((l) => l.name !== "ide");
  if (!s.length) return [];
  let n = { connected: 0, cached: 0, pending: 0, needsAuth: 0, disabled: 0, failed: 0 };
  for (let l of s)
    switch (l.type) {
      case "connected":
        n.connected++;
        break;
      case "cached":
        n.cached++;
        break;
      case "pending":
        n.pending++;
        break;
      case "needs-auth":
        n.needsAuth++;
        break;
      case "disabled":
        n.disabled++;
        break;
      case "failed":
        n.failed++;
        break;
      default:
    }
  let o = [];
  if (n.connected) o.push(mt("success", e)(`${n.connected} connected`));
  if (n.cached) o.push(mt("inactive", e)(`${n.cached} cached`));
  if (n.needsAuth) o.push(mt("warning", e)(`${n.needsAuth} need auth`));
  if (n.pending) o.push(mt("inactive", e)(`${n.pending} pending`));
  if (n.disabled) o.push(mt("inactive", e)(`${n.disabled} disabled`));
  if (n.failed) o.push(mt("error", e)(`${n.failed} failed`));
  return [{ label: "MCP servers", value: `${o.join(", ")} ${mt("inactive", e)("\xB7 /mcp")}` }];
}
async function zLn(i, e, s) {
  if (gH()) return [];
  let n = await J_(i, false, e, s),
    o = uGe(n),
    l = [],
    u = cGe();
  return (
    o.forEach((c) => {
      let p = Fo(c.path);
      l.push(`Large ${p} will impact performance (${Wo(c.content.length)} chars > ${Wo(u)})`);
    }),
    l
  );
}
function h(i = "remote") {
  let e = mXe();
  if (!e) return null;
  return `Enterprise managed settings (${e.map((n) => (n === "remote" ? i : g(n))).join(" + ")}, merged)`;
}
function VLn() {
  let i = xi(),
    e = nEn(),
    o = [
      {
        label: "Setting sources",
        value: i
          .filter((c) => {
            if (c === "policySettings" && e.composes !== "none") return true;
            let p = ye(c);
            return p !== null && Object.keys(p).length > 0;
          })
          .map((c) => {
            if (c === "policySettings") {
              if (e.composes !== "none") {
                let d = por(),
                  f = d ? "default settings payload" : e.composes === "tier" ? "helper" : "remote helper",
                  m = e.mergedOver ? `${f} merged over ${g(e.mergedOver)}` : f;
                return (e.composes === "remoteSlot" && !d ? h(m) : null) ?? `Enterprise managed settings (${m})`;
              }
              let p = cS();
              if (p === null) return null;
              return h() ?? S(p);
            }
            return Tor(c);
          })
          .filter((c) => c !== null),
      },
    ],
    l = sEn();
  if (l.length > 0) o.push({ label: "Skipped sources", value: l.map(S) });
  let u = sse();
  if (u && UMn(u)) o.push({ label: "Managed settings (remote)", value: Tnt(u) });
  return o;
}
function g(i) {
  switch (i) {
    case "helper":
    case "remote":
    case "plist":
      return i;
    case "hklm":
      return "HKLM";
    case "file": {
      let { hasBase: e, hasDropIns: s } = iEn();
      if (e && s) return "file + drop-ins";
      return s ? "drop-ins" : "file";
    }
    case "parent":
      return "parent process";
    case "hkcu":
      return "HKCU";
  }
}
function S(i) {
  return `Enterprise managed settings (${g(i)})`;
}
async function KLn() {
  return (await Kae()).filter((e) => e.type !== "error").map((e) => e.message);
}
async function XLn(i) {
  let e = Gk(),
    s = ru();
  if (!e && !s) return [];
  let n = [];
  if (s)
    return (
      n.push(
        `${s} \u2014 nothing will run unwrapped: new background sessions are refused unless a background service that validated an earlier value is still serving them (\`claude daemon status\` shows it)`,
      ),
      n
    );
  let o = rp();
  if ((n.push(`Self-exec: \`${[o.cmd, ...o.prefixArgs].join(" ")}\` (CLAUDE_CODE_PROCESS_WRAPPER)`), !(await ZE())))
    n.push(
      `The launcher \`${o.cmd}\` cannot run right now (deleted or not executable) \u2014 new background sessions are refused until it is restored; a background service that validated it earlier keeps serving its existing sessions (\`claude daemon status\`)`,
    );
  let l = await Ch(1, i).catch(() => null);
  if (!l) return n;
  let [{ controlRequest: u }, { BG_PROTO: c }] = await Promise.all([
      import("/$bunfs/root/chunk-8me061tn.js"),
      import("/$bunfs/root/chunk-msk29tj8.js"),
    ]),
    p = await u({ proto: c, op: "nudge" }).catch(() => null),
    d = p?.ok && p.op === "nudge" ? (p.processWrapper ?? "") : (l.processWrapper ?? ""),
    f = ce(zo(Et(d)), 200);
  if (l.origin === "service")
    n.push(
      `The installed background service predates launcher support and runs outside \`${o.cmd}\`; its sessions are covered, the service process itself is not \u2014 a launcher-aware \`claude daemon install\` will close this`,
    );
  if (d !== e)
    n.push(
      `The running background service launches sessions via \`${f || "(no launcher)"}\`, but this session resolves \`${e}\` \u2014 restart it (and your running claude sessions) to converge`,
    );
  return n;
}
async function YLn(i) {
  let e = await J_e({ storageV5: i }),
    s = [],
    { statusNotices: n, invalidEntries: o } = bme(eG().errors);
  if (o.length > 0) {
    let u = te(o.map((p) => p.file)).join(", ");
    s.push(`Found invalid entries in: ${u}.`);
    let c = await vst(i);
    if (c === "settings_unknowable" || c === "settings_invalid_key_set")
      s.push(
        "Transcript retention cleanup is paused until the settings errors above are fixed (cleanupPeriodDays cannot be determined reliably).",
      );
  }
  for (let l of n) s.push(l.message);
  if (
    (e.warnings.forEach((l) => {
      s.push(l.issue);
    }),
    e.hasUpdatePermissions === false)
  )
    s.push("No write permissions for auto-updates");
  return s;
}
function wBe(i) {
  if (!(O() && i !== void 0)) return;
  return (async () => ({ refreshKnownDead: El() && (await Qk(i)) }))().catch(() => ({ refreshKnownDead: false }));
}
function tnt(i) {
  let e = xY();
  if (!e) return [];
  let s = [];
  if (i !== void 0 && O() ? i.refreshKnownDead : El() && k7e()) {
    s.push({ label: "Login", value: "Expired \u2014 log in again" });
    let n = On();
    if (n?.organizationName && !a.IS_DEMO) s.push({ label: "Organization", value: n.organizationName });
    if (n?.emailAddress && !a.IS_DEMO) s.push({ label: "Email", value: n.emailAddress });
    return s;
  }
  if (e.subscription) s.push({ label: "Login method", value: `${e.subscription} account` });
  if (e.tokenSource) s.push({ label: "Auth token", value: e.tokenSource });
  if (e.apiKeySource) s.push({ label: "API key", value: e.apiKeySource });
  if (jd()) s.push({ label: "Profile", value: wYe() });
  if (e.organization && !a.IS_DEMO) s.push({ label: "Organization", value: e.organization });
  if (e.email && !a.IS_DEMO) s.push({ label: "Email", value: e.email });
  return s;
}
function nnt() {
  let i = Ne(),
    e = [];
  if (i !== "firstParty") {
    let o = OAe(),
      l = o ? `${sA[i]} + ${sA[o]}` : sA[i];
    e.push({ label: "API provider", value: l });
  }
  if (i === "firstParty") {
    let o = a.ANTHROPIC_BASE_URL;
    if (o) e.push({ label: "Anthropic base URL", value: o });
  } else if (i === "bedrock") {
    let o = a.ANTHROPIC_BEDROCK_BASE_URL;
    if (o) e.push({ label: "Bedrock base URL", value: o });
    e.push({ label: "AWS region", value: v() });
    let l = a.ANTHROPIC_BEDROCK_SERVICE_TIER;
    if (l) e.push({ label: "Bedrock service tier", value: l });
    if (a.CLAUDE_CODE_SKIP_BEDROCK_AUTH) e.push({ value: "AWS auth skipped" });
  } else if (i === "vertex") {
    let o = a.ANTHROPIC_VERTEX_BASE_URL;
    if (o) e.push({ label: "Vertex base URL", value: o });
    let l = a.ANTHROPIC_VERTEX_PROJECT_ID;
    if (l) e.push({ label: "GCP project", value: l });
    if ((e.push({ label: "Default region", value: A5t() }), a.CLAUDE_CODE_SKIP_VERTEX_AUTH))
      e.push({ value: "GCP auth skipped" });
  } else if (i === "foundry") {
    let o = a.ANTHROPIC_FOUNDRY_BASE_URL;
    if (o) e.push({ label: "Microsoft Foundry base URL", value: o });
    let l = a.ANTHROPIC_FOUNDRY_RESOURCE;
    if (l) e.push({ label: "Microsoft Foundry resource", value: l });
    if (a.CLAUDE_CODE_SKIP_FOUNDRY_AUTH) e.push({ value: "Microsoft Foundry auth skipped" });
  } else if (i === "anthropicAws") {
    let o = a.ANTHROPIC_AWS_BASE_URL;
    if (o) e.push({ label: "Claude Platform on AWS base URL", value: o });
    let l = a.ANTHROPIC_AWS_WORKSPACE_ID;
    if (l) e.push({ label: "Workspace ID", value: l });
    if ((e.push({ label: "AWS region", value: PAe() }), a.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH))
      e.push({ value: "Claude Platform on AWS auth skipped" });
  } else if (i === "anthropicGoogleCloud") {
    let o = a.ANTHROPIC_GOOGLE_CLOUD_BASE_URL;
    if (o) e.push({ label: "Claude Platform on Google Cloud base URL", value: o });
    let l = a.ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID;
    if (l) e.push({ label: "Workspace ID", value: l });
    let u = a.ANTHROPIC_GOOGLE_CLOUD_PROJECT || a.GOOGLE_CLOUD_PROJECT;
    if (u) e.push({ label: "GCP project", value: u });
    if (
      (e.push({ label: "GCP location", value: a.ANTHROPIC_GOOGLE_CLOUD_LOCATION || "global" }),
      a.CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH)
    )
      e.push({ value: "Claude Platform on Google Cloud auth skipped" });
  } else if (i === "gateway") {
    let o = mi();
    if (o) e.push({ label: "Gateway URL", value: o.url });
  }
  if (i === "mantle" || OAe() === "mantle") {
    let o = a.ANTHROPIC_BEDROCK_MANTLE_BASE_URL;
    if (o) e.push({ label: "Amazon Bedrock (Mantle) base URL", value: o });
    if (i === "mantle") e.push({ label: "AWS region", value: v() });
    if (a.CLAUDE_CODE_SKIP_MANTLE_AUTH) e.push({ value: "Amazon Bedrock (Mantle) auth skipped" });
  }
  let s = _oe();
  if (s)
    e.push({
      label: "Proxy",
      value: yoe(s) ? s : `${s.replace(/\p{Cc}/gu, "")} (invalid \u2014 ignored; fix or unset the proxy env var)`,
    });
  let n = Ew();
  if (a.NODE_EXTRA_CA_CERTS) e.push({ label: "Additional CA cert(s)", value: a.NODE_EXTRA_CA_CERTS });
  if (n) {
    if (n.cert && a.CLAUDE_CODE_CLIENT_CERT) e.push({ label: "mTLS client cert", value: a.CLAUDE_CODE_CLIENT_CERT });
    if (n.key && a.CLAUDE_CODE_CLIENT_KEY) e.push({ label: "mTLS client key", value: a.CLAUDE_CODE_CLIENT_KEY });
  }
  return e;
}
function v() {
  let { region: i, source: e } = bTn();
  switch (e) {
    case "env":
      return i;
    case "shared-config":
      return `${i} (from AWS config)`;
    case "env-invalid":
    case "default":
      return (
        MT(),
        e === "env-invalid"
          ? `${i} (default \u2014 region env var invalid, ignored; fix or unset AWS_REGION / AWS_DEFAULT_REGION)`
          : `${i} (default \u2014 set AWS_REGION or add a region to your AWS config)`
      );
  }
}
function JLn(i) {
  let e = wC(i);
  {
    let s = ewe();
    if (s !== void 0) return `${e} (${pmt(wC(s.previousModel))})`;
  }
  return e;
}
export { bBe, jLn, WLn, qLn, GLn, zLn, VLn, KLn, XLn, YLn, wBe, tnt, nnt, JLn };
