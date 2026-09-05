// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Se } from "/$bunfs/root/chunk-f9h0bg01.js";
import { _ } from "/$bunfs/root/chunk-haan6f8z.js";
import { _t } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { ya } from "/$bunfs/root/chunk-6k63g5t6.js";
import { d0, vir, Ur, eo } from "/$bunfs/root/chunk-bj904w9w.js";
import { o, t } from "/$bunfs/root/chunk-he2phymk.js";
import { Ci } from "/$bunfs/root/chunk-cds31m36.js";
import { nr } from "/$bunfs/root/chunk-8asdkt5r.js";
import { e, r } from "/$bunfs/root/chunk-8s7kcbyw.js";
import { KL, UG, VIe, Adt } from "/$bunfs/root/chunk-zze8764r.js";
import { nyt } from "/$bunfs/root/chunk-2n1hsggr.js";
import { jre, orr, irr } from "/$bunfs/root/chunk-gpvgrng0.js";
import { se } from "/$bunfs/root/chunk-q1fyd2qk.js";
import { te } from "/$bunfs/root/chunk-wag5ye9w.js";
function zi(Y) {
  let F = _(2),
    { multiline: w, children: N } = Y;
  if (!w) {
    return N;
  }
  let E;
  if (F[0] !== N)
    (E = e(o, {
      borderStyle: "single",
      borderLeft: true,
      borderRight: false,
      borderTop: false,
      borderBottom: false,
      borderDimColor: true,
      paddingLeft: 1,
      children: N,
    })),
      (F[0] = N),
      (F[1] = E);
  else E = F[1];
  return E;
}
function O8t(n) {
  return nyt(n);
}
function L(n) {
  let u = [];
  for (let l of n) {
    if (l === null || typeof l !== "object") continue;
    if (l.type !== "addRules") {
      u.push(l);
      continue;
    }
    if (!Array.isArray(l.rules)) continue;
    let f = l.rules.filter(
      (a) =>
        a !== null &&
        typeof a === "object" &&
        typeof a.toolName === "string" &&
        (a.ruleContent === void 0 || typeof a.ruleContent === "string") &&
        (a.ruleContent === void 0 ? AUe(a.toolName) : O8t({ toolName: a.toolName, ruleContent: a.ruleContent })),
    );
    if (f.length > 0) u.push({ ...l, rules: f });
  }
  return u;
}
var wK = 8,
  oq = 64,
  Nie = 160,
  A = new Set(["localSettings", "session"]);
function iOn(n, u, l) {
  let f = L(n).filter((s) => {
      if (!u.has(s.type)) return false;
      if ((s.type === "addRules" || s.type === "replaceRules" || s.type === "removeRules") && s.behavior !== "allow")
        return false;
      return s.destination !== void 0 && A.has(s.destination);
    }),
    a = [];
  for (let s of f) {
    if (s.type !== "addRules") {
      if (s.type === "addDirectories") {
        if (!Array.isArray(s.directories)) continue;
        let d = s.directories.filter((c) => typeof c === "string" && c.trim() !== "" && se(c) > 0 && UG(c));
        if (d.length === 0) continue;
        a.push({ ...s, directories: d });
        continue;
      }
      a.push(s);
      continue;
    }
    if (s.rules === void 0) continue;
    let S = s.rules.filter((d) =>
        UG(eo({ toolName: d.toolName, ...(d.ruleContent !== void 0 && { ruleContent: d.ruleContent }) })),
      ),
      m = l === void 0 ? S : S.filter(l);
    if (m.length > 0) a.push({ ...s, rules: m });
  }
  return a;
}
var GRt = new Set(["addRules", "addDirectories"]),
  sOn = new Set(["addRules"]);
function I(n) {
  return n.trim() !== n || n === "" || KL(n) || Ci(n) !== n || /[\t\n]/.test(n) || se(n) === 0;
}
function AUe(n) {
  if (n === jre) return false;
  if (I(n)) return false;
  let u = Ur(eo({ toolName: n }));
  if (u.toolName !== n || u.ruleContent !== void 0) return false;
  if (d0(n)) return false;
  let l = ya(n);
  if (l !== null && !l.toolName) return false;
  return true;
}
function aOn(n) {
  if (typeof n !== "string" || n.trim() === "" || se(n) === 0 || !UG(n)) return null;
  return irr(n);
}
function b(n) {
  switch (n.length) {
    case 0:
      return "";
    case 1:
      return e(t, { bold: true, children: n[0] });
    case 2:
      return r(t, { children: [e(t, { bold: true, children: n[0] }), " and ", e(t, { bold: true, children: n[1] })] });
    default:
      return r(t, {
        children: [
          e(t, { bold: true, children: n.slice(0, -1).join(", ") }),
          ", and",
          " ",
          e(t, { bold: true, children: n.slice(-1)[0] }),
        ],
      });
  }
}
function Fie(n) {
  if (n.length === 0) return "";
  if (n.length === 1) return e(t, { bold: true, children: n[0] });
  if (n.length === 2)
    return r(t, { children: [e(t, { bold: true, children: n[0] }), " and ", e(t, { bold: true, children: n[1] })] });
  return r(t, {
    children: [
      n.slice(0, -1).map((u, l) => r(t, { children: [e(t, { bold: true, children: u }), ",", " "] }, l)),
      "and ",
      e(t, { bold: true, children: n.at(-1) }),
    ],
  });
}
function CUe(n) {
  return vir((n?.replace(/\/\*\*$/, "") || "").replace(/^\.\//, "").replace(/^\/\//, "/"));
}
function x(n) {
  if (!n) return "";
  return n.endsWith(":*") || n.endsWith(" *") ? n.slice(0, -2) : n;
}
function vUe(n, u, l) {
  if (n.toolName === u) {
    let f = x(n.ruleContent);
    if (!f) return false;
    return Boolean(l ? l(f) : f);
  }
  if (n.toolName === _t) return Boolean(CUe(n.ruleContent));
  return false;
}
function i1(n) {
  return n !== void 0 && Ci(n) === n && !/[\t\n\u2028\u2029]/.test(n) && !KL(n) ? orr(n) : void 0;
}
function TS(n) {
  return Adt(n);
}
function zRt(n, u, l) {
  if (!Array.isArray(n)) return null;
  if (n.length > oq) return null;
  if (n.some((i) => i === null || typeof i !== "object")) return null;
  let f = n.filter((i) => i.type === "addRules").flatMap((i) => i.rules || []),
    a = n
      .filter((i) => i.type === "addDirectories")
      .flatMap((i) => (Array.isArray(i.directories) ? i.directories : []));
  if (
    f.some(
      (i) =>
        i === null ||
        typeof i !== "object" ||
        typeof i.toolName !== "string" ||
        (i.ruleContent !== void 0 && typeof i.ruleContent !== "string"),
    )
  )
    return null;
  if (f.length + a.length > wK) return null;
  let s = f.filter((i) => i.toolName === _t),
    S = f.filter((i) => i.toolName === u);
  if (a.some((i) => typeof i !== "string" || i.trim() === "" || se(i) === 0 || !UG(i))) return null;
  let m = te(a),
    d = te(s.flatMap((i) => (i.ruleContent && CUe(i.ruleContent) ? i.ruleContent : [])));
  if (d.some((i) => !UG(i))) return null;
  let c = te(
    S.flatMap((i) => {
      if (!i.ruleContent) return [];
      return x(i.ruleContent) ? [i.ruleContent] : [];
    }),
  );
  if (c.some((i) => !UG(i))) return null;
  let p = VIe(c, (i) => {
      let D = x(i) || i;
      return TS(l ? l(D) : D);
    }),
    C = VIe([...d, ...m], (i) => (d.includes(i) ? TS(CUe(i)) : TS(i))),
    g = C.slice(0, d.length),
    R = C.slice(d.length);
  if (se([...p, ...g, ...R].join(" and ")) > Nie) return null;
  let h = m.length > 0,
    y = g.length > 0,
    T = p.length > 0;
  if (y && !h && !T) return r(t, { children: ["Yes, allow reading from ", Fie(g), " from this project"] });
  if (h && !y && !T) return r(t, { children: ["Yes, and always allow access to ", Fie(R), " from this project"] });
  if (T && !h && !y)
    return r(t, {
      children: ["Yes, and don't ask again for ", b(p), " commands in", " ", e(t, { bold: true, children: nr(Se()) })],
    });
  if ((h || y) && !T) {
    let i = [...R, ...g];
    return r(t, { children: ["Yes, and always allow access to ", Fie(i), " from this project"] });
  }
  if ((h || y) && T) {
    let i = [...R, ...g];
    if (i.length === 1 && p.length === 1)
      return r(t, { children: ["Yes, and allow access to ", Fie(i), " and", " ", b(p), " commands"] });
    return r(t, { children: ["Yes, and allow ", Fie(i), " access and", " ", b(p), " commands"] });
  }
  return null;
}
export { O8t, wK, oq, Nie, iOn, GRt, sOn, AUe, aOn, Fie, CUe, vUe, i1, TS, zRt, zi };
