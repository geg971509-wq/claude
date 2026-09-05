// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Wl, a } from "/$bunfs/root/chunk-fec4384a.js";
import { l, X } from "/$bunfs/root/chunk-ypdw393e.js";
import { $e } from "/$bunfs/root/chunk-2masxyqj.js";
import { Xl, ryn, oyn, Hde } from "/$bunfs/root/chunk-30e2jew7.js";
import { Wt } from "/$bunfs/root/chunk-qk6zade1.js";
import { ZD } from "/$bunfs/root/chunk-g01aac1k.js";
import { access as T, mkdir as I, readFile as x, stat as v, unlink as C, writeFile as D } from "fs/promises";
import { homedir as k } from "os";
import { join as m } from "path";
import { setTimeout as b } from "timers/promises";
var i = "com.anthropic.claude-daemon";
async function _Q() {
  return true;
}
function I7t() {
  if (!Wl()) return process.argv[1];
  return m(ZD(), "claude");
}
function o(e) {
  return Wt(e.replace(/[\r\n]/g, " "));
}
function h() {
  return m(k(), "Library", "LaunchAgents", `${i}.plist`);
}
function y() {
  return `gui/${process.getuid()}`;
}
function g() {
  return `${y()}/${i}`;
}
async function sBe(e) {
  let { jsonPath: t, logPath: r } = e,
    n = await Hde();
  if (n)
    return {
      ok: false,
      error: `${n} \u2014 refusing to install a service that would run unwrapped`,
      serviceId: i,
      servicePath: "",
    };
  let c = [...Xl(), I7t()],
    u = a.PATH || "/usr/local/bin:/usr/bin:/bin";
  {
    let s = h();
    try {
      await I(m(k(), "Library", "LaunchAgents"), { recursive: true }),
        await D(
          s,
          `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>${i}</string>
  <key>ProgramArguments</key><array>
${c
  .map((d) => `    <string>${o(d)}</string>`)
  .join(`
`)}
    <string>daemon</string>
    <string>--json-path</string>
    <string>${o(t)}</string>
    <string>--log-file</string>
    <string>${o(r)}</string>
    <string>--origin</string>
    <string>service</string>
  </array>
  <key>EnvironmentVariables</key><dict>
    <key>PATH</key><string>${o(u)}</string>
  </dict>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><dict><key>SuccessfulExit</key><false/></dict>
  <key>ThrottleInterval</key><integer>10</integer>
  <key>StandardOutPath</key><string>${o(r)}</string>
  <key>StandardErrorPath</key><string>${o(r)}</string>
</dict></plist>
`,
          "utf8",
        );
    } catch (d) {
      return { ok: false, error: l(d), serviceId: i, servicePath: s };
    }
    await $e("launchctl", ["bootout", g()], { useCwd: false });
    let { code: f, stderr: p, error: P } = await $e("launchctl", ["bootstrap", y(), s], { useCwd: false });
    if (f !== 0) return { ok: false, error: p || P || "launchctl bootstrap failed", serviceId: i, servicePath: s };
    return { ok: true, serviceId: i, servicePath: s };
  }
  return {
    ok: false,
    error: `service install not available on ${"darwin"} \u2014 the daemon runs on demand instead`,
    serviceId: i,
    servicePath: "",
  };
}
async function MRe() {
  {
    let e = h();
    await $e("launchctl", ["bootout", g()], { useCwd: false });
    try {
      await C(e);
    } catch (t) {
      if (!X(t)) return { ok: false, error: l(t) };
    }
    return { ok: true };
  }
  return { ok: false, error: "service uninstall not available on darwin" };
}
async function qtt() {
  return S("start");
}
async function aBe() {
  return S("stop");
}
async function SLn() {
  return S("restart");
}
async function S(e) {
  {
    let t = g(),
      r;
    switch (e) {
      case "start":
        r = ["kickstart", t];
        break;
      case "stop":
        r = ["kill", "SIGTERM", t];
        break;
      case "restart": {
        await $e("launchctl", ["kill", "SIGTERM", t], { useCwd: false });
        let s = false;
        for (let f = 0; f < 200; f++) {
          let p = await $e("launchctl", ["print", t], { useCwd: false });
          if (p.code !== 0 || !/^\s*pid = /m.test(p.stdout)) {
            s = true;
            break;
          }
          await b(50);
        }
        if (!s) return { ok: false, error: "daemon did not exit within 10s of SIGTERM; restart aborted before kickstart" };
        r = ["kickstart", t];
        break;
      }
    }
    let { code: n, stderr: c, error: u } = await $e("launchctl", r, { useCwd: false });
    if (n !== 0) {
      if (e === "stop") return { ok: true };
      return { ok: false, error: c || u || `launchctl ${r[0]} failed` };
    }
    return { ok: true };
  }
  return { ok: false, error: `service ${e} not available on ${"darwin"} \u2014 the daemon runs on demand instead` };
}
async function _() {
  let e = h();
  if (!e) return null;
  let t;
  try {
    let r = await v(e);
    if (!r.isFile() || r.size > 1048576) return null;
    t = await x(e, "utf8");
  } catch {
    return null;
  }
  return [
    ...(t
      .match(/<key>ProgramArguments<\/key><array>([\s\S]*?)<\/array>/)?.[1]
      ?.matchAll(/<string>([^<]*)<\/string>/g) ?? []),
  ].map((r) => r[1]);
}
function w(e) {
  return e.replaceAll("&gt;", ">").replaceAll("&lt;", "<").replaceAll("&amp;", "&");
}
async function Gtt() {
  let e = { execPathStale: false, launcherPrefixDead: false },
    t = await _();
  if (!t) return e;
  let r = t.lastIndexOf("daemon"),
    n = r > 0 ? t[r - 1] : void 0;
  if (!n) return e;
  try {
    await T(w(n));
  } catch {
    e.execPathStale = true;
  }
  let c = t.slice(0, r - 1).map(w);
  for (let u of oyn(c))
    if (!(await ryn(u))) {
      e.launcherPrefixDead = true;
      break;
    }
  return e;
}
async function aL() {
  {
    let { code: e } = await $e("launchctl", ["print", g()], { useCwd: false, timeout: 5000 });
    return e === 0;
  }
  return false;
}
export { _Q, I7t, sBe, MRe, qtt, aBe, SLn, Gtt, aL };
