// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ee } from "/$bunfs/root/chunk-4fwj3vnx.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { Vu, St } from "/$bunfs/root/chunk-4ddxwr9r.js";
import { M8, DW, rD, cee, rct, Lxe, j1 } from "/$bunfs/root/chunk-zze8764r.js";
import { aKe, lKe, Z_t, eyt, tyt, cKe, TLe } from "/$bunfs/root/chunk-2n1hsggr.js";
import { byt } from "/$bunfs/root/chunk-1mp2j0tx.js";
import { D } from "/$bunfs/root/chunk-7s7jqj2f.js";
import { statSync as de } from "fs";
import { join as me } from "path";
var mQt = ["-verbose", "-debug"],
  E = ["-erroraction", "-warningaction", "-informationaction", "-progressaction"],
  P = ["-ea", "-wa", "-infa", "-proga"],
  A = ["-errorvariable", "-warningvariable", "-informationvariable", "-outvariable", "-pipelinevariable"],
  x = ["-ev", "-wv", "-iv", "-ov", "-pv"],
  gQt = [...E, ...A, "-outbuffer", ...P],
  R = new Set([...mQt, ...gQt]);
function T(e) {
  if (e.length < 2) return false;
  return P.includes(e) || E.some((t) => t.startsWith(e));
}
var He = new Set([...E, ...P]),
  O = new Set(["silentlycontinue", "0", "stop", "1", "continue", "2", "ignore", "4"]);
function y(e) {
  if (e.length < 2) return false;
  return x.includes(e) || A.some((t) => t.startsWith(e));
}
var N = new Set(["global", "script", "local", "private", "variable"]),
  k = new Set([
    "psdefaultparametervalues",
    "confirmpreference",
    "debugpreference",
    "erroractionpreference",
    "errorview",
    "formatenumerationlimit",
    "informationpreference",
    "maximumhistorycount",
    "ofs",
    "outputencoding",
    "progresspreference",
    "psemailserver",
    "psmoduleautoloadingpreference",
    "psnativecommandargumentpassing",
    "psnativecommanduseerroractionpreference",
    "pssessionapplicationname",
    "pssessionconfigurationname",
    "pssessionoption",
    "psstyle",
    "transcript",
    "verbosepreference",
    "warningpreference",
    "whatifpreference",
    "logcommandhealthevent",
    "logcommandlifecycleevent",
    "logenginehealthevent",
    "logenginelifecycleevent",
    "logproviderhealthevent",
    "logproviderlifecycleevent",
    "maximumaliascount",
    "maximumdrivecount",
    "maximumerrorcount",
    "maximumfunctioncount",
    "maximumvariablecount",
  ]),
  W = [...E, ...A, "-outbuffer", "-verbose", "-debug"],
  ne = W.filter((e) => e !== "-progressaction");
function se(e, t) {
  let n = null;
  for (let s of t)
    if (s.startsWith(e)) {
      if (n !== null) return null;
      n = s;
    }
  return n;
}
function re(e, t) {
  if (e.length < 2) return false;
  for (let n of [W, ne]) {
    let s = se(e, n);
    if (s !== null && t.includes(s)) return true;
  }
  return false;
}
var ae = new Set([...x, "-ea", "-wa", "-p"]),
  oe = false;
function ie(e, t, n, s) {
  if (!s && ae.has(e)) return false;
  return t.includes(e) || re(e, n);
}
function M(e, t, n) {
  return ie(e, t, n, oe);
}
function j(e) {
  return M(e, x, A);
}
function H(e) {
  return M(e, P, E);
}
var C1n = new Set([
    "add",
    "clear",
    "close",
    "copy",
    "enter",
    "exit",
    "find",
    "format",
    "get",
    "hide",
    "join",
    "lock",
    "move",
    "new",
    "open",
    "optimize",
    "pop",
    "push",
    "redo",
    "remove",
    "rename",
    "reset",
    "resize",
    "resume",
    "search",
    "select",
    "set",
    "show",
    "skip",
    "split",
    "step",
    "switch",
    "undo",
    "unlock",
    "watch",
    "connect",
    "disconnect",
    "read",
    "receive",
    "send",
    "write",
    "backup",
    "checkpoint",
    "compare",
    "compress",
    "convert",
    "convertfrom",
    "convertto",
    "dismount",
    "edit",
    "expand",
    "export",
    "group",
    "import",
    "initialize",
    "limit",
    "merge",
    "mount",
    "out",
    "publish",
    "restore",
    "save",
    "sync",
    "unpublish",
    "update",
    "debug",
    "measure",
    "ping",
    "repair",
    "resolve",
    "test",
    "trace",
    "approve",
    "assert",
    "build",
    "complete",
    "confirm",
    "deny",
    "deploy",
    "disable",
    "enable",
    "install",
    "invoke",
    "register",
    "request",
    "restart",
    "start",
    "stop",
    "submit",
    "suspend",
    "uninstall",
    "unregister",
    "wait",
    "block",
    "grant",
    "protect",
    "revoke",
    "unblock",
    "unprotect",
    "use",
    "sort",
    "tee",
    "where",
    "foreach",
  ]),
  le = ["-variable", "-sessionvariable", "-responseheadersvariable", "-statuscodevariable"];
function B(e) {
  if (e.length < 3) return false;
  return le.some((t) => t.startsWith(e));
}
var ohe = /[\t\n\v\f\r \u0085\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]+/,
  F = new RegExp(`^${ohe.source}`);
var ce = new RegExp(`${`['"\u2018-\u201F]`}+`, "g");
function b1(e) {
  let t = e.replace(F, "");
  for (;;)
    if (t.startsWith("<#")) {
      let n = t.indexOf("#>", 2);
      if (n < 0) break;
      t = t.slice(n + 2).replace(F, "");
    } else if (t.startsWith("#")) {
      let n = t.search(/[\r\n]/);
      if (n < 0) break;
      t = t.slice(n).replace(F, "");
    } else break;
  return t;
}
function iv(e) {
  return e.replace(ce, "");
}
var ue = new RegExp(`^${`['"\u2018-\u201F]`}+|${`['"\u2018-\u201F]`}+$`, "g");
function hL(e) {
  return e.replace(ue, "");
}
function U(e) {
  if (e === "'" || (e >= "\u2018" && e <= "\u201B")) return "single";
  if (e === '"' || (e >= "\u201C" && e <= "\u201E")) return "double";
  return null;
}
function cB(e) {
  let t = "",
    n = null;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    if (o === "`") {
      if (n === "single") t += "``";
      else if (s + 1 < e.length) (t += o + e[s + 1]), s++;
      else t += o;
      continue;
    }
    let r = U(o);
    if (n === null) {
      if (r !== null) {
        n = r;
        continue;
      }
      t += o;
    } else if (r === n) {
      if (s + 1 < e.length && U(e[s + 1]) === r) {
        (t += e[s + 1]), s++;
        continue;
      }
      n = null;
    } else t += o;
  }
  return t;
}
function Hb(e) {
  return _(e, void 0);
}
var fe = {
  t: "\t",
  n: `
`,
  r: "\r",
  f: "\f",
  v: "\v",
};
function w(e) {
  return _(e, fe);
}
var ge = { 0: "\x00" };
function G(e) {
  return _(e, ge);
}
function _(e, t) {
  return e.replace(/`(?:(`)|[\r\n]+\s*|u\{([0-9a-fA-F]{1,6})\}|([\s\S]?))/g, (n, s, o, r) => {
    if (s !== void 0) return "`";
    if (o !== void 0) {
      let c = parseInt(o, 16);
      return c <= 1114111 ? String.fromCodePoint(c) : "\uFFFD";
    }
    if (r === void 0) return "";
    if (t && r in t) return t[r];
    return r;
  });
}
function gxt(e) {
  let t = e;
  for (;;) {
    let n = t.replace(/ +$/, "");
    if (n === "." || n === "..") return n;
    let s = n.replace(/\.+$/, "");
    if (s === t) return s;
    t = s;
  }
}
var pe = new Set(["--list-runtimes", "--list-sdks"]);
function $R(e, t) {
  let n = (t?.elementTypes ?? []).slice(1),
    s = t?.args ?? [],
    o = t?.children;
  for (let r = 0; r < n.length; r++) {
    if (n[r] !== "StringConstant" && n[r] !== "Parameter") {
      if (!/[$(@{[]/.test(s[r] ?? "")) continue;
      return true;
    }
    if (n[r] === "Parameter") {
      let c = o?.[r];
      if (c) {
        if (c.some((i) => i.type !== "StringConstant")) return true;
      } else {
        let i = s[r] ?? "",
          l = i.indexOf(":");
        if (l > 0 && /[$(@{[]/.test(i.slice(l + 1))) return true;
      }
    }
  }
  return false;
}
var V = Object.assign(Object.create(null), {
    "get-childitem": {
      safeFlags: [
        "-Path",
        "-LiteralPath",
        "-Filter",
        "-Include",
        "-Exclude",
        "-Recurse",
        "-Depth",
        "-Name",
        "-Force",
        "-Attributes",
        "-Directory",
        "-File",
        "-Hidden",
        "-ReadOnly",
        "-System",
      ],
    },
    "get-content": {
      safeFlags: [
        "-Path",
        "-LiteralPath",
        "-TotalCount",
        "-Head",
        "-Tail",
        "-Raw",
        "-Encoding",
        "-Delimiter",
        "-ReadCount",
      ],
    },
    "get-item": { safeFlags: ["-Path", "-LiteralPath", "-Force", "-Stream"] },
    "get-itemproperty": { safeFlags: ["-Path", "-LiteralPath", "-Name"] },
    "test-path": {
      safeFlags: [
        "-Path",
        "-LiteralPath",
        "-PathType",
        "-Filter",
        "-Include",
        "-Exclude",
        "-IsValid",
        "-NewerThan",
        "-OlderThan",
      ],
    },
    "resolve-path": { safeFlags: ["-Path", "-LiteralPath", "-Relative"] },
    "get-filehash": { safeFlags: ["-Path", "-LiteralPath", "-Algorithm", "-InputStream"] },
    "get-acl": { safeFlags: ["-Path", "-LiteralPath", "-Audit", "-Filter", "-Include", "-Exclude"] },
    "set-location": { safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"] },
    "push-location": { safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"] },
    "pop-location": { safeFlags: ["-PassThru", "-StackName"] },
    "select-string": {
      safeFlags: [
        "-Path",
        "-LiteralPath",
        "-Pattern",
        "-InputObject",
        "-SimpleMatch",
        "-CaseSensitive",
        "-Quiet",
        "-List",
        "-NotMatch",
        "-AllMatches",
        "-Encoding",
        "-Context",
        "-Raw",
        "-NoEmphasis",
      ],
    },
    "convertto-json": { safeFlags: ["-InputObject", "-Depth", "-Compress", "-EnumsAsStrings", "-AsArray"] },
    "convertfrom-json": { safeFlags: ["-InputObject", "-Depth", "-AsHashtable", "-NoEnumerate"] },
    "convertto-csv": { safeFlags: ["-InputObject", "-Delimiter", "-NoTypeInformation", "-NoHeader", "-UseQuotes"] },
    "convertfrom-csv": { safeFlags: ["-InputObject", "-Delimiter", "-Header", "-UseCulture"] },
    "convertto-xml": { safeFlags: ["-InputObject", "-Depth", "-As", "-NoTypeInformation"] },
    "convertto-html": {
      safeFlags: ["-InputObject", "-Property", "-Head", "-Title", "-Body", "-Pre", "-Post", "-As", "-Fragment"],
    },
    "format-hex": { safeFlags: ["-Path", "-LiteralPath", "-InputObject", "-Encoding", "-Count", "-Offset"] },
    "get-member": { safeFlags: ["-InputObject", "-MemberType", "-Name", "-Static", "-View", "-Force"] },
    "get-unique": { safeFlags: ["-InputObject", "-AsString", "-CaseInsensitive", "-OnType"] },
    "compare-object": {
      safeFlags: [
        "-ReferenceObject",
        "-DifferenceObject",
        "-Property",
        "-SyncWindow",
        "-CaseSensitive",
        "-Culture",
        "-ExcludeDifferent",
        "-IncludeEqual",
        "-PassThru",
      ],
    },
    "join-string": {
      safeFlags: ["-InputObject", "-Property", "-Separator", "-SingleQuote", "-DoubleQuote", "-FormatString"],
    },
    "get-random": { safeFlags: ["-InputObject", "-Minimum", "-Maximum", "-Count", "-SetSeed", "-Shuffle"] },
    "convert-path": { safeFlags: ["-Path", "-LiteralPath"] },
    "join-path": { safeFlags: ["-Path", "-ChildPath", "-AdditionalChildPath"] },
    "split-path": {
      safeFlags: [
        "-Path",
        "-LiteralPath",
        "-Qualifier",
        "-NoQualifier",
        "-Parent",
        "-Leaf",
        "-LeafBase",
        "-Extension",
        "-IsAbsolute",
      ],
    },
    "get-itempropertyvalue": { safeFlags: ["-Path", "-LiteralPath", "-Name"] },
    "get-psprovider": { safeFlags: ["-PSProvider"] },
    "get-computerinfo": { allowAllFlags: true },
    "get-host": { allowAllFlags: true },
    "get-date": { safeFlags: ["-Date", "-Format", "-UFormat", "-DisplayHint", "-AsUTC"] },
    "get-location": { safeFlags: ["-PSProvider", "-PSDrive", "-Stack", "-StackName"] },
    "get-psdrive": { safeFlags: ["-Name", "-PSProvider", "-Scope"] },
    "get-module": { safeFlags: ["-Name", "-ListAvailable", "-All", "-FullyQualifiedName", "-PSEdition"] },
    "get-alias": { safeFlags: ["-Name", "-Definition", "-Scope", "-Exclude"] },
    "get-history": { safeFlags: ["-Id", "-Count"] },
    "get-culture": { allowAllFlags: true },
    "get-uiculture": { allowAllFlags: true },
    "get-timezone": { safeFlags: ["-Name", "-Id", "-ListAvailable"] },
    "get-uptime": { allowAllFlags: true },
    "write-output": { safeFlags: ["-InputObject", "-NoEnumerate"], additionalCommandIsDangerousCallback: $R },
    "write-host": {
      safeFlags: ["-Object", "-NoNewline", "-Separator", "-ForegroundColor", "-BackgroundColor"],
      additionalCommandIsDangerousCallback: $R,
    },
    "start-sleep": { safeFlags: ["-Seconds", "-Milliseconds", "-Duration"], additionalCommandIsDangerousCallback: $R },
    "format-table": { allowAllFlags: true, additionalCommandIsDangerousCallback: $R },
    "format-list": { allowAllFlags: true, additionalCommandIsDangerousCallback: $R },
    "format-wide": { allowAllFlags: true, additionalCommandIsDangerousCallback: $R },
    "format-custom": { allowAllFlags: true, additionalCommandIsDangerousCallback: $R },
    "measure-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: $R },
    "select-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: $R },
    "sort-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: $R },
    "group-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: $R },
    "where-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: $R },
    "out-string": { allowAllFlags: true, additionalCommandIsDangerousCallback: $R },
    "out-host": { allowAllFlags: true, additionalCommandIsDangerousCallback: $R },
    "get-netadapter": { safeFlags: ["-Name", "-InterfaceDescription", "-InterfaceIndex", "-Physical"] },
    "get-netipaddress": { safeFlags: ["-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-Type"] },
    "get-netroute": { safeFlags: ["-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-DestinationPrefix"] },
    "get-dnsclient": { safeFlags: ["-InterfaceIndex", "-InterfaceAlias"] },
    "get-winevent": {
      safeFlags: [
        "-LogName",
        "-ListLog",
        "-ListProvider",
        "-ProviderName",
        "-Path",
        "-MaxEvents",
        "-FilterXPath",
        "-Force",
        "-Oldest",
      ],
    },
    git: {},
    gh: {},
    docker: {},
    ipconfig: {
      safeFlags: ["/all", "/allcompartments"],
      additionalCommandIsDangerousCallback: (e, t) =>
        (t?.args ?? []).some((n) => !n.startsWith("/") && !n.startsWith("-")),
    },
    netstat: { safeFlags: ["-a", "-b", "-e", "-f", "-n", "-o", "-p", "-q", "-r", "-s", "-t", "-x", "-y"] },
    systeminfo: { safeFlags: ["/FO", "/NH"] },
    tasklist: { safeFlags: ["/M", "/SVC", "/V", "/FI", "/FO", "/NH"] },
    "where.exe": { allowAllFlags: true },
    hostname: {
      safeFlags: ["-a", "-d", "-f", "-i", "-I", "-s", "-y", "-A"],
      additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some((n) => !n.startsWith("-")),
    },
    whoami: { safeFlags: ["/user", "/groups", "/claims", "/priv", "/logonid", "/all", "/fo", "/nh"] },
    ver: { allowAllFlags: true },
    arp: {
      safeFlags: ["-a", "-g", "-v", "-n"],
      additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some((n) => !n.startsWith("-")),
    },
    route: {
      safeFlags: ["print", "PRINT", "-4", "-6"],
      additionalCommandIsDangerousCallback: (e, t) => {
        if (!t) return true;
        return t.args.find((s) => !s.startsWith("-"))?.toLowerCase() !== "print";
      },
    },
    getmac: { safeFlags: ["/FO", "/NH", "/V"] },
    tree: { safeFlags: ["/F", "/A", "/Q", "/L"] },
    findstr: {
      safeFlags: ["/B", "/E", "/L", "/R", "/S", "/I", "/X", "/V", "/N", "/M", "/O", "/P", "/C", "/G", "/D", "/A"],
    },
    dotnet: {},
  }),
  he = new Set(["out-null"]),
  Se = new Set([
    "format-table",
    "format-list",
    "format-wide",
    "format-custom",
    "measure-object",
    "select-object",
    "sort-object",
    "group-object",
    "where-object",
    "out-string",
    "out-host",
  ]),
  Ce = new Set(["where.exe"]),
  Ee = new Set(["git", "gh", "docker", "dotnet"]),
  we = ["", ".exe", ".bat", ".cmd", ".com", ".ps1", ".vbs", ".js", ".wsf", ".vbe", ".jse", ".wsh", ".msc", ".cpl"];
class Y {
  listByPathext = new Map();
  regexByPathext = new Map();
  list() {
    let e = a.PATHEXT ?? "",
      t = this.listByPathext.get(e);
    if (t === void 0) {
      let n = new Set(we);
      for (let s of e.split(";").slice(0, 64)) {
        let o = s.trim().toLowerCase();
        if (o.startsWith(".") && o.length <= 16) n.add(o);
      }
      (t = [...n]), this.listByPathext.set(e, t);
    }
    return t;
  }
  regex() {
    let e = a.PATHEXT ?? "",
      t = this.regexByPathext.get(e);
    if (t === void 0) {
      let n = this.list()
        .filter((s) => s !== "")
        .map((s) => Vu(s.slice(1)));
      (t = new RegExp(`\\.(${n.join("|")})$`, "i")), this.regexByPathext.set(e, t);
    }
    return t;
  }
}
var Z = new Y();
function be() {
  return Z.list();
}
function Pe() {
  return Z.regex();
}
function hxt(e) {
  let t = new Set(_xt(e).map((n) => n.stem));
  return t.delete(""), Array.from(t);
}
function _xt(e) {
  let t = Pe(),
    n = new Set(),
    s = [];
  for (let o of [(r) => r, iv, hL, cB]) {
    let r = Ae(e, o);
    if (n.has(r)) continue;
    n.add(r), s.push({ base: r, stem: r.replace(t, "") });
  }
  return s;
}
function Ae(e, t) {
  let s = t(e).replace(/^[A-Za-z]:(?![\\/])/, ""),
    o = [];
  for (let r of s.split(/[\\/]+/)) {
    let c = gxt(r.replace(/:.*$/, ""));
    if (c === "." || c === "") continue;
    if (c === "..") {
      if (o.length > 0 && o.at(-1) !== "..") o.pop();
      else o.push("..");
      continue;
    }
    o.push(c);
  }
  return (o.at(-1) ?? "").toLowerCase();
}
function xe(e) {
  if (D() !== "windows") return null;
  let t = ee(),
    n = new Set();
  for (let { base: s, stem: o } of _xt(e))
    for (let r of s === o ? [o] : [o, s]) {
      if (r === "" || n.has(r)) continue;
      n.add(r);
      for (let c of be()) {
        let i = me(t, r + c);
        try {
          if (de(i).isFile()) return r + c;
        } catch {}
      }
    }
  return null;
}
var Fe = /\.(exe|cmd|bat|com)$/;
function wf(e) {
  let t = e.toLowerCase();
  if (!t.includes("\\") && !t.includes("/")) t = t.replace(Fe, "");
  let n = DW[t];
  if (n) return n.toLowerCase();
  return t;
}
function Urt(e) {
  let t = e.toLowerCase();
  if (t === "cd.." || t === "cd\\" || t === "cd/" || t === "cd~" || /^[a-z]:$/.test(t)) return true;
  let n = wf(e);
  return (
    n === "set-location" ||
    n === "push-location" ||
    n === "pop-location" ||
    n === "new-psdrive" ||
    (D() === "windows" && (n === "ndr" || n === "mount"))
  );
}
function s0e(e) {
  let t = wf(e);
  return he.has(t);
}
function hQt(e, t) {
  let n = wf(e.name);
  if (!Se.has(n)) return false;
  return ihe(e, t);
}
function _Qt(e) {
  if (e.statementType !== "PipelineAst") return false;
  if (e.commands.length === 0) return false;
  for (let t of e.commands) if (t.elementType !== "CommandAst") return false;
  return true;
}
function _e(e) {
  let t = e.toLowerCase(),
    n = V[t];
  if (n) return n;
  let s = wf(t);
  if (s !== t) return V[s];
  return;
}
function v1n(e) {
  let t = e.trim();
  if (!t) return false;
  if (/\$\(/.test(t)) return true;
  if (/(?:^|[^\w.])@\w+/.test(t)) return true;
  if (/\.\w+\s*\(/.test(t)) return true;
  if (/\$\w+\s*[+\-*/]?=/.test(t)) return true;
  if (/--%/.test(t)) return true;
  if (/\\\\/.test(t) || /(?<!:)\/\//.test(t)) return true;
  if (/::/.test(t)) return true;
  return false;
}
function yxt(e, t) {
  if (!e.trim()) return false;
  if (!t) return false;
  if (!t.valid) return false;
  let s = j1(t);
  if (
    s.hasScriptBlocks ||
    s.hasSubExpressions ||
    s.hasExpandableStrings ||
    s.hasSplatting ||
    s.hasMemberInvocations ||
    s.hasAssignments ||
    s.hasStopParsing
  )
    return false;
  let o = rct(t);
  if (o.length === 0) return false;
  if (o.reduce((c, i) => c + i.commands.length, 0) > 1) {
    if (o.some((i) => i.commands.some((l) => Urt(l.name)))) return false;
  }
  for (let c of o) {
    if (!c || c.commands.length === 0) return false;
    if (c.redirections.length > 0) {
      if (c.redirections.some((u) => !u.isMerging && !Lxe(u.target))) return false;
    }
    let i = c.commands[0];
    if (!i) return false;
    if (!ihe(i, e)) return false;
    for (let l = 1; l < c.commands.length; l++) {
      let u = c.commands[l];
      if (!u || u.nameType === "application") return false;
      if (s0e(u.name) && u.args.length === 0) continue;
      if (!ihe(u, e)) return false;
    }
    if (c.nestedCommands && c.nestedCommands.length > 0) return false;
  }
  return true;
}
var b = (e, t = false) => (t && e.length > 1 && e[1] === "-" ? e : e.replace(/(?!^)[-']/g, ""));
function a0e(e, t, n = "full") {
  let s = n === "full" ? T : H;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (!rD.has(r[0])) continue;
    if (t !== void 0 && t[o + 1] !== void 0 && t[o + 1] !== "Parameter") continue;
    let c = r[0] === "-" ? r : "-" + r.slice(1),
      i = c.indexOf(":"),
      l = (i > 0 ? c.slice(0, i) : c).toLowerCase(),
      u = null;
    if (!s(l) && !s(b(l, n === "exact"))) {
      let d = Hb(l.replace(/`[\r\n]+\s*/g, "")).toLowerCase(),
        S = d.indexOf(":", 1),
        p = S > 0 ? d.slice(0, S) : d;
      if (!s(p) && !s(b(p, n === "exact")) && !/[^\x20-\x7e]/.test(d)) continue;
      if (S > 0) {
        let C = d.slice(S + 1);
        u = C.trim() !== "" ? C : (e[o + 1] ?? "");
      }
    }
    let f = i > 0 ? c.slice(i + 1) : null,
      m = (u ?? (f !== null && f.trim() !== "" ? f : (e[o + 1] ?? "")))
        .toLowerCase()
        .replace(/^['"]|['"]$/g, "")
        .trim();
    if (m.length > 0 && !O.has(m)) return true;
  }
  return false;
}
function l0e(e, t, n = "full") {
  let s = n === "full" ? y : j,
    o = (r) => s(r) || (n === "full" && (r.endsWith("variable") || B(r)));
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    if (!rD.has(c[0])) continue;
    if (t !== void 0 && t[r + 1] !== void 0 && t[r + 1] !== "Parameter") continue;
    let i = c[0] === "-" ? c : "-" + c.slice(1),
      l = v(i),
      u = (l !== null ? i.slice(0, l.colonIdx) : i).toLowerCase();
    if (!o(u) && !o(b(u, n === "exact"))) {
      let p = Hb(u.replace(/`[\r\n]+\s*/g, "")).toLowerCase();
      if (p !== u && (o(p) || o(b(p, n === "exact")))) return true;
      let C = p.indexOf(":", 1);
      if (C > 0 && o(b(p.slice(0, C), n === "exact"))) return true;
      if (/[^\x20-\x7e]/.test(p)) return true;
      continue;
    }
    let f;
    if (l !== null) {
      if (l.isHereString) return true;
      if (l.post.includes("$") || l.post.includes("`")) return true;
      f = l.postResolved !== "" ? l.postResolved : (e[r + 1] ?? "");
    } else f = e[r + 1] ?? "";
    if (f.includes("$") || f.includes("`")) return true;
    let g = iv(b1(f)).toLowerCase().trim();
    if (g.length === 0) continue;
    let m = g.startsWith("+") ? g.slice(1) : g,
      d = m.lastIndexOf(":"),
      S = m;
    if (d >= 0) {
      let p = m.slice(0, d);
      if (!N.has(p) && !/^[0-9]+$/.test(p)) return true;
      S = m.slice(d + 1);
    }
    if (!/^[a-z0-9_]+$/.test(S)) return true;
    if (k.has(S)) return true;
  }
  return false;
}
function h(e) {
  return e.includes('"') || (/[\s\u0085\u180e]/.test(e) && (e.match(/\\+$/)?.[0].length ?? 0) % 2 === 1);
}
function v(e) {
  if (e.length === 0 || !(rD.has(e[0]) || e[0] === "/")) return null;
  let t = e.indexOf(":", 1);
  if (t <= 0) return null;
  let n = b1(e.slice(t + 1)),
    s = b1(n.replace(/`[\r\n]+\s*/g, "")),
    o = /^@['"\u2018-\u201F]/.test(n) || /^@['"\u2018-\u201F]/.test(s);
  return { colonIdx: t, post: n, postResolved: s, isHereString: o };
}
function I(e, t = true) {
  let n = e.replace(/`[\r\n]+\s*/g, "");
  if (h(e) || h(w(n))) return true;
  if (t) {
    let s = v(e);
    if (s !== null) {
      let { post: o, postResolved: r } = s;
      if (s.isHereString) return true;
      let c = iv(r),
        i = iv(o),
        l = hL(r),
        u = hL(o),
        f = cB(r),
        g = cB(o);
      if (h(c) || h(i) || h(w(c)) || h(l) || h(u) || h(w(l)) || h(f) || h(g) || h(w(f))) return true;
    }
  }
  return false;
}
function ihe(e, t) {
  if (e.nameType === "application") {
    let i = e.text.split(/\s/, 1)[0]?.toLowerCase() ?? "";
    if (!Ce.has(i)) return false;
  }
  let n = _e(e.name);
  if (!n) return false;
  if (n.regex && !n.regex.test(t)) return false;
  if (n.additionalCommandIsDangerousCallback?.(t, e)) return false;
  if (!e.elementTypes) return false;
  for (let i = 1; i < e.elementTypes.length; i++) {
    let l = e.elementTypes[i];
    if (l !== "StringConstant" && l !== "Parameter") {
      if (!/[$(@{[]/.test(e.args[i - 1] ?? "")) continue;
      return false;
    }
    if (l === "Parameter") {
      let u = e.children?.[i - 1];
      if (u) {
        if (u.some((f) => f.type !== "StringConstant")) return false;
      } else {
        let f = e.args[i - 1] ?? "",
          g = f.indexOf(":");
        if (g > 0 && /[$(@{[]/.test(f.slice(g + 1))) return false;
      }
    }
  }
  let s = wf(e.name),
    o = Ee.has(s),
    r = s.includes("-"),
    c = e.nameType !== "cmdlet";
  if (D() === "windows") {
    if (c || o) {
      for (let i of e.args) if (I(i, !r || e.nameType === "application")) return false;
    }
    if (xe(e.name) !== null) return false;
  }
  if (!r || e.nameType === "application")
    for (let i = 1; i < e.elementTypes.length; i++) {
      let l = e.elementTypes[i];
      if (l !== "StringConstant" && l !== "Parameter") return false;
      if (l === "Parameter" && !o && (e.args[i - 1] ?? "").includes(":")) return false;
    }
  if (o) {
    let i = null;
    for (let l = 1; l < e.elementTypes.length; l++) {
      let u = e.args[l - 1] ?? "";
      if (e.elementTypes[l] === "Parameter") {
        let f = v(u);
        if (f !== null) {
          if (f.isHereString) return false;
          (i ??= e.args.slice(0, l - 1)), i.push(u.slice(0, f.colonIdx), Hb(iv(f.postResolved)));
          continue;
        }
      }
      i?.push(u);
    }
    if (i !== null && !Q(s, i)) return false;
    return Q(s, e.args);
  }
  if (r && a0e(e.args, e.elementTypes)) return false;
  if (r && l0e(e.args, e.elementTypes)) return false;
  if (n.allowAllFlags) return true;
  if (!n.safeFlags || n.safeFlags.length === 0)
    return !e.args.some((l, u) => {
      if (r) return cee(l, e.elementTypes?.[u + 1]);
      return l.startsWith("-") || false;
    });
  for (let i = 0; i < e.args.length; i++) {
    let l = e.args[i];
    if (r ? cee(l, e.elementTypes?.[i + 1]) : l.startsWith("-") || false) {
      let f = r ? "-" + l.slice(1) : l;
      if (r || l.startsWith("/")) {
        let d = f.indexOf(":");
        if (d > 0) f = f.substring(0, d);
      }
      let g = f.toLowerCase();
      if (r && R.has(g)) continue;
      if (!(r ? n.safeFlags.some((d) => d.toLowerCase() === g) : n.safeFlags.includes(f))) return false;
    }
  }
  return true;
}
function Q(e, t) {
  for (let n of t) if (n.length > 0 && n[0] !== "-" && rD.has(n[0])) return false;
  switch (e) {
    case "git":
      return Le(t);
    case "gh":
      return Re(t);
    case "docker":
      return Oe(t);
    case "dotnet":
      return ye(t);
    default:
      return false;
  }
}
var ve = new Set([
    "-c",
    "-C",
    "--exec-path",
    "--config-env",
    "--git-dir",
    "--work-tree",
    "--bare",
    "--attr-source",
    "--help",
    "-h",
    "--shallow-file",
  ]),
  J = new Set([
    "-c",
    "-C",
    "--exec-path",
    "--config-env",
    "--git-dir",
    "--work-tree",
    "--namespace",
    "--super-prefix",
    "--shallow-file",
  ]),
  Ie = ["-c", "-C"];
function z(e) {
  return !e.includes("=") && J.has(e);
}
function te(e, t) {
  for (let n = 0; n < e.length; n++) {
    let s = e[n] ?? "",
      o = t[n] ?? "";
    if (o.includes("\x00") || G(s).includes("\x00")) return false;
    if (cKe(o) !== cKe(s) || (o === "--") !== (s === "--")) return false;
    if (cKe(s) && s !== o && z(s) !== z(o)) return false;
  }
  return true;
}
function L(e) {
  return e.map((t) => M8(Hb(t.replace(/`[\r\n]+\s*/g, ""))));
}
function Le(e) {
  let t = L(e);
  if (!te(e, t)) return false;
  return X(e) && X(t);
}
function X(e) {
  if (e.length === 0) return true;
  if (D() === "windows") {
    for (let u of e) if (I(u)) return false;
  }
  for (let u of e) if (u.includes("$")) return false;
  let t = 0;
  while (t < e.length) {
    let u = e[t];
    if (!u || !u.startsWith("-")) break;
    for (let m of Ie) if (u.length > m.length && u.startsWith(m) && (m === "-C" || u[m.length] !== "-")) return false;
    let f = u.includes("="),
      g = f ? St(u, "=") : u;
    if (ve.has(g)) return false;
    if (!f && J.has(g)) t += 2;
    else t++;
  }
  if (t >= e.length) return true;
  let n = e[t]?.toLowerCase() || "",
    s = t + 1 < e.length ? e[t + 1]?.toLowerCase() || "" : "",
    o = `git ${n} ${s}`,
    r = `git ${n}`,
    c = aKe[o],
    i = 2;
  if (!c) (c = aKe[r]), (i = 1);
  if (!c) return false;
  let l = e.slice(t + i);
  if (n === "ls-remote") {
    let u = false;
    for (let f of l) {
      if (!u && f === "--") {
        u = true;
        continue;
      }
      if (u || f === "-" || !f.startsWith("-")) return false;
    }
  }
  if (c.additionalCommandIsDangerousCallback && c.additionalCommandIsDangerousCallback("", l)) return false;
  return TLe(l, 0, c, { commandName: "git" });
}
function Re(e) {
  let t = L(e);
  if (!te(e, t)) return false;
  return K(e) && K(t);
}
function K(e) {
  return false;
}
var q = new Set(Z_t.filter((e) => /^-[^-]$/.test(e)).map((e) => e[1])),
  Te = [...Z_t.filter((e) => e.startsWith("--")), "--tls"];
function Oe(e) {
  if (e.length === 0) return true;
  let t = L(e);
  if (D() === "windows") {
    for (let r of e) if (I(r)) return false;
  }
  for (let r of t) if (r.includes("$")) return false;
  for (let r of t) {
    if (r[0] === "-" && r[1] !== "-")
      for (let i = 1; i < r.length; i++) {
        let l = r[i];
        if (q.has(l)) return false;
        if (l !== "h" && q.has(l.toLowerCase())) return false;
      }
    let c = r.toLowerCase();
    if (Te.some((i) => c.startsWith(i))) return false;
  }
  let n = `docker ${t[0]?.toLowerCase()}`;
  if (tyt.includes(n)) return true;
  let s = eyt[n];
  if (!s) return false;
  let o = t.slice(1);
  if (s.additionalCommandIsDangerousCallback && s.additionalCommandIsDangerousCallback("", o)) return false;
  return TLe(o, 0, s);
}
function ye(e) {
  if (e.length === 0) return false;
  for (let t of e) if (!pe.has(t.toLowerCase())) return false;
  return true;
}
var yQt = new Set(["invoke-command", "start-job", "start-threadjob", "register-scheduledjob"]),
  SQt = new Set([
    "invoke-command",
    "invoke-expression",
    "start-job",
    "start-threadjob",
    "register-scheduledjob",
    "register-engineevent",
    "register-objectevent",
    "register-wmievent",
    "new-pssession",
    "enter-pssession",
  ]),
  bQt = new Set([
    "import-module",
    "ipmo",
    "install-module",
    "save-module",
    "update-module",
    "install-script",
    "save-script",
  ]),
  Ne = ["pwsh", "powershell", "cmd", "bash", "wsl", "sh", "start-process", "start", "add-type", "new-object"];
function De(e) {
  return Object.entries(DW)
    .filter(([, t]) => e.has(t.toLowerCase()))
    .map(([t]) => t);
}
var ke = new Set(["invoke-webrequest", "invoke-restmethod"]),
  We = new Set(["set-alias", "sal", "new-alias", "nal", "set-variable", "sv", "new-variable", "nv"]),
  Me = new Set(["invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim", "wmic", "wmic.exe"]),
  je = new Set([
    "select-object",
    "sort-object",
    "group-object",
    "where-object",
    "measure-object",
    "write-output",
    "write-host",
    "start-sleep",
    "format-table",
    "format-list",
    "format-wide",
    "format-custom",
    "out-string",
    "out-host",
    "ipconfig",
    "hostname",
    "route",
    "arp",
  ]),
  R1n = (() => {
    let e = new Set([
      ...Ne,
      ...yQt,
      ...SQt,
      ...bQt,
      ...ke,
      ...We,
      ...Me,
      ...je,
      "foreach-object",
      ...byt.filter((t) => !t.includes(" ")),
    ]);
    return new Set([...e, ...De(e)]);
  })();
export {
  ohe,
  b1,
  iv,
  hL,
  cB,
  Hb,
  mQt,
  gQt,
  C1n,
  gxt,
  $R,
  hxt,
  _xt,
  wf,
  Urt,
  s0e,
  hQt,
  _Qt,
  v1n,
  yxt,
  a0e,
  l0e,
  ihe,
  yQt,
  SQt,
  bQt,
  R1n,
};
