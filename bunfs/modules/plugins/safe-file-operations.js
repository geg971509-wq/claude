// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $Xt, A4, AXt, BR, Bme, C6t, CWe, D4, DWe, E4, E9t, EB, EWe, EXt, F3t, F8, FO, HXt, I1e, IB, IL, IS, Kme, LWe, NWe, Nxe, P1e, P9t, Q9e, Rw, S5, SB, TXt, Tf, U1e, U3t, W4, WR, WXt, X4, Xf, Z4, ZXt, _B, aXt, bWe, cE, cO, d1e, dp, e3t, e5, eXt, efe, f1e, f4, g1e, h1e, hb, jR, jXt, k4, kb, ld, m1e, mO, n3e, nXt, oXt, pWe, pfe, pu, py, qWe, r3e, r3t, rXt, s3t, s4, sXt, sy, t5, tXt, u1e, u9t, v9t, wB, ww, x4, x9t, y1e, y9t, yB, zR } from "/$bunfs/root/modules/chunk-zze8764r/core.js";
import { $H, $e, $n, $ne, AVt, B6t, BF, Bjt, Bm, Bp, C5, CB, CVt, Ct, D, D$, DXt, Dj, E, E1e, EAt, EH, En, F4, FXt, Fl, Fp, Fu, G, G3t, G4, GR, G_t, Ge, Ha, He, Hhn, Ht, I, I5, ICt, INe, IT, IU, IXt, Ihn, Ii, Ime, J4, JF, JO, JT, Jl, Jt, Jy, KR, K_t, L9, LAe, LD, LTe, L_, M5, MAe, MD, MXt, Mo, Ms, Mu, Mw, NM, NO, NXt, Ne, No, O, OCt, OXt, Ome, PT, PU, Phn, Pje, Q4, Qgn, Qi, Qme, Qze, R, RC, RJ, RKe, RO, RXt, Re, Rje, S1e, S9t, SA, SLe, SO, T5, T6t, T9t, TH, TWe, Tb, Tc, Te, To, Tr, UR, UWe, Ud, Uh, Ut, V, V3t, V6t, VE, VF, VHn, VR, V_t, Vgn, Vxn, Vy, W3t, WWe, Wme, Wn, Wwt, X, XF, Xm, Y, Y4, YR, Yd, Z5, ZWe, Zme, Zt, _Le, _fe, _o, a, b, b1e, b3t, b9t, be, bh, bt, bve, bwe, c, c9t, cQe, cS, ce, cfn, cgt, cie, cue, d3t, dWe, db, dfe, f9t, fWe, g, g3t, g9t, gI, gR, h3t, h9t, hfe, hie, ho, i9t, iA, i_, ife, ime, iu, j2t, j6t, jpe, k9t, kO, kWe, kXt, kc, km, l, l9t, le, lue, ly, mM, mU, ms, n, n9t, nC, nWt, ne, nfe, nme, ns, o5, o9t, oZe, oc, ode, or, os, p, q3t, qCt, qJn, q_t, r9t, rKe, rS, r_, rde, rx, s, s9t, sV, scr, t6, tEn, tWt, tl, tme, toe, uc, ugt, um, v5t, v6t, vB, vO, vR, vWe, vt, w, w6t, w8n, w9t, wA, wO, wP, wWe, wXt, xC, xO, xXt, xhn, xi, xpe, y, y3t, ye, ygt, z3t, z4, zHn, zWe, z_t, zme } from "/$bunfs/root/modules/chunk-zze8764r/prelude.js";
import { NI, VMt, sye } from "/$bunfs/root/modules/chunk-zze8764r/functions-001.js";

async function hB(e, t, r) {
  let o = UR.O_NOFOLLOW;
  if (o === void 0 || D() === "windows") {
    if (!(await Ome(e)).isFile()) throw QY(e);
    await w6t(e, t, r?.exclusive ? UR.COPYFILE_EXCL : 0);
    return;
  }
  let u = await Ime(e, UR.O_RDONLY | o | (r?.nonBlocking ? (UR.O_NONBLOCK ?? 0) : 0));
  try {
    let d = await u.stat();
    if (!d.isFile()) throw QY(e);
    if (r?.exactMode) {
      let _ = await Ime(t, r.exclusive ? "wx" : "w", d.mode);
      try {
        await Pje(u.createReadStream(), Rje(t, { fd: _.fd, autoClose: false })), await _.chmod(d.mode & 4095);
      } finally {
        await _.close();
      }
    } else await Pje(u.createReadStream(), Rje(t, { mode: d.mode, flags: r?.exclusive ? "wx" : "w" }));
  } finally {
    await u.close();
  }
}

function QY(e) {
  return new R(
    `Refusing to copy ${e}: it is no longer a regular file (swapped during the copy).`,
    "plugin copy source swapped for a non-regular file mid-copy",
  );
}

async function Dme(e, t, r) {
  let o = (A) => {
      let x = E(A);
      if (r?.throwTransient && (x === void 0 || !C6t.has(x))) throw A;
      return null;
    },
    u = D() === "windows",
    d = u ? void 0 : UR.O_NOFOLLOW,
    _ = u ? 0 : (UR.O_NONBLOCK ?? 0);
  if (d === void 0) {
    let A = await Ome(e).catch(o);
    if (A === null || !A.isFile()) return null;
  }
  let C;
  try {
    C = await Ime(e, UR.O_RDONLY | (d ?? 0) | _);
  } catch (A) {
    return o(A);
  }
  try {
    let A = await C.stat();
    if (!A.isFile() || A.size > t) return null;
    let { buffer: x, bytesRead: M } = await C.read(Buffer.alloc(t + 1), 0, t + 1, 0);
    if (M > t) return null;
    return x.subarray(0, M).toString("utf-8");
  } catch (A) {
    return o(A);
  } finally {
    await C.close();
  }
}

async function Q_(e, t) {
  let r = v6t(e, t);
  try {
    return await T6t(r), false;
  } catch (o) {
    if (E(o) === "EINVAL") return !(await Ome(r)).isSymbolicLink();
    throw o;
  }
}

function Fje(e, t) {
  if (typeof e === "string") return e;
  throw new R(
    `the build carried no hooks module text for ${t}`,
    "the build carried no hooks module text for a built-in",
  );
}

function e4() {
  let e = new Map();
  return {
    get: (t) => e.get(t),
    set: (t, r) => {
      e.set(t, r);
    },
  };
}

function Lme() {
  let e = Tf.processTable();
  return {
    register: (t, r) => {
      e.set(t, r);
    },
    source: (t) => e.get(t),
  };
}

function jje(e, t, { refuse: r, parentOf: o, record: u, bind: d }) {
  let _ = e,
    C = o(_);
  while (C?.type === "AwaitExpression") (_ = C), (C = o(_));
  if (C === void 0) throw r(e, "$ stands alone");
  if (C.type === "MemberExpression" && C.object === _) {
    if (C.computed || C.optional) throw r(C, "a computed or optional member access on $");
    let A = C.property;
    if (A.type !== "Identifier") throw r(C, "a member access on $ that is not a name");
    if (A.name === jR) {
      let F = o(C);
      if (_B(F, C) && F.property.type === "Identifier") return;
      throw r(C, `$.${jR} is used other than as $.${jR}.name or $.${jR}.root`);
    }
    let x = o(C);
    if (!_B(x, C) || x.property.type !== "Identifier")
      throw r(C, `$.${A.name} is used as a value (a noun of $ bound, passed or read)`);
    let M = o(x);
    if (M?.type !== "CallExpression" || M.callee !== x || M.optional)
      throw r(
        x,
        `$.${A.name}.${x.property.name} is used as a value (an event of $ bound, passed or read) instead of called`,
      );
    u(`${A.name}.${x.property.name}`);
    return;
  }
  if (t === "parameter") throw r(_, `$ itself is ${yB(C, _)} (bound, passed, spread, returned or read)`);
  if (C.type === "SpreadElement") {
    if (o(C)?.type === "ObjectExpression") return;
    throw r(C, "the value of next(e) at engine.create is spread other than into an object literal");
  }
  if (C.type === "ReturnStatement" || (C.type === "ArrowFunctionExpression" && C.body === _)) return;
  if (C.type === "VariableDeclarator" && C.init === _) {
    let A = o(C);
    if (A?.type !== "VariableDeclaration" || A.kind !== "const")
      throw r(C, "the value of next(e) at engine.create is bound with let or var (const only)");
    let { id: x } = C;
    if (x.type === "Identifier") {
      d.dollar(x);
      return;
    }
    if (x.type === "ObjectPattern") {
      for (let M of x.properties)
        if (M.type === "RestElement") {
          if (M.argument.type !== "Identifier")
            throw r(M, "a rest of next(e) at engine.create that is not a plain name");
          d.dollar(M.argument);
        } else if (M.value.type === "Identifier" && !M.computed) d.unread(M.value);
        else
          throw r(M, "a destructuring of next(e) at engine.create with a nested pattern, a default or a computed key");
      return;
    }
    throw r(x, "the value of next(e) at engine.create is destructured into an array");
  }
  throw r(_, `the value of next(e) at engine.create is ${yB(C, _)}`);
}

function zje(e, t, r) {
  try {
    return wA.compileModule(t, e);
  } catch (o) {
    throw cO(r, t, o);
  }
}

function a4(e) {
  let t = new Map();
  for (let r of e.body) {
    if (r.type !== "ImportDeclaration") continue;
    let o = String(r.source.value);
    for (let u of r.specifiers)
      t.set(u.local.name, {
        specifier: o,
        imported:
          u.type === "ImportSpecifier"
            ? u.imported.type === "Identifier"
              ? u.imported.name
              : String(u.imported.value)
            : u.type === "ImportDefaultSpecifier"
              ? "default"
              : void 0,
      });
  }
  return t;
}

function p4(e) {
  let t = new Set();
  for (let r of e.body) {
    let o =
      r.type === "ImportDeclaration" || r.type === "ExportAllDeclaration"
        ? r.source
        : r.type === "ExportNamedDeclaration"
          ? (r.source ?? null)
          : null;
    if (o !== null) t.add(String(o.value));
  }
  return [...t];
}

function h4(e, t, r) {
  function o(u) {
    if ((t(u), r?.(u.node))) return;
    let { node: d } = u;
    function _(C) {
      if (f4(C)) o({ node: C, parent: d, grandparent: u.parent });
    }
    for (let C of Object.keys(d)) {
      if (C === "loc" || C === "type" || C === "start" || C === "end") continue;
      let A = d[C];
      Array.isArray(A) ? A.forEach(_) : _(A);
    }
  }
  o({ node: e, parent: void 0, grandparent: void 0 });
}

function Kje(e) {
  let t = new Map();
  return (
    h4(e, ({ node: r, parent: o }) => {
      if (o !== void 0) t.set(r, o);
    }),
    t
  );
}

function y4(e) {
  let t = new Set();
  function r(o) {
    if (o === null) return;
    switch (o.type) {
      case "Identifier":
        t.add(o.name);
        return;
      case "ArrayPattern":
        o.elements.forEach(r);
        return;
      case "ObjectPattern":
        for (let u of o.properties) r(u.type === "Property" ? u.value : u);
        return;
      case "AssignmentPattern":
        r(o.left);
        return;
      case "RestElement":
        r(o.argument);
        return;
      default:
        return;
    }
  }
  return (
    ld.walk(e, ({ node: o }) => {
      if (o.type === "AssignmentExpression") r(o.left);
      else if (o.type === "UpdateExpression") r(o.argument);
      else if ((o.type === "ForInStatement" || o.type === "ForOfStatement") && o.left.type !== "VariableDeclaration")
        r(o.left);
    }),
    t
  );
}

function Vje(e, t) {
  let r = [];
  return (
    ld.walk(e, ({ node: o, parent: u, grandparent: d }) => {
      if (o.type === "Identifier" && o.name === t && hb(o, u, d)) r.push(o);
    }),
    r
  );
}

function _4(e) {
  let t = [];
  return (
    ld.walk(e, ({ node: r, parent: o, grandparent: u }) => {
      if (r.type === "Identifier" && hb(r, o, u)) t.push(r);
    }),
    Map.groupBy(t, (r) => r.name)
  );
}

function Yje(e, t) {
  let r = t(e);
  return (
    r?.type === "ImportSpecifier" || r?.type === "ImportDefaultSpecifier" || r?.type === "ImportNamespaceSpecifier"
  );
}

function S4(e) {
  let t = new Map();
  function r(o) {
    if (o.type === "FunctionDeclaration" && o.id !== null) t.set(o.id.name, o);
    else if (o.type === "VariableDeclaration" && o.kind === "const") {
      for (let u of o.declarations)
        if (
          u.id.type === "Identifier" &&
          (u.init?.type === "FunctionExpression" || u.init?.type === "ArrowFunctionExpression")
        )
          t.set(u.id.name, u.init);
    }
  }
  for (let o of e.body)
    if (
      (r(o),
      (o.type === "ExportNamedDeclaration" || o.type === "ExportDefaultDeclaration") &&
        o.declaration !== null &&
        o.declaration !== void 0)
    )
      r(o.declaration);
  return t;
}

function Xje(e) {
  let t = S4(e),
    r = _4(e);
  return {
    functions: t,
    assigned: y4(e),
    declared: r,
    declaredOnce: new Set([...t.keys()].filter((o) => r.get(o)?.length === 1)),
  };
}

function Qje(e, t, r = "all") {
  let o = [];
  return (
    ld.walk(
      e,
      ({ node: u, parent: d, grandparent: _ }) => {
        if (u.type === "Identifier" && u.name === t && mO(u, d, _)) o.push(u);
      },
      r === "own" ? (u) => u !== e && (u.type === "FunctionExpression" || u.type === "FunctionDeclaration") : void 0,
    ),
    o
  );
}

function Jje(e) {
  let t = [],
    r = [];
  return (
    ld.walk(e, ({ node: o, parent: u, grandparent: d }) => {
      if (o.type !== "Identifier") return;
      if (hb(o, u, d)) t.push(o);
      else if (mO(o, u, d)) r.push(o);
    }),
    { declared: Map.groupBy(t, (o) => o.name), read: Map.groupBy(r, (o) => o.name) }
  );
}

function Zje(e, t, r) {
  let o = s4(t, e);
  function u(A, x) {
    let M = A?.loc?.start.line,
      F = o === void 0 || M === void 0 ? void 0 : (o[M - 1]?.trim() ?? "");
    return new k4({
      plugin: r,
      file: t,
      line: M,
      excerpt: F !== void 0 && F.length > Tf.EXCERPT_CHARS ? `${ce(F, Tf.EXCERPT_CHARS)}...` : F,
      construct: x,
    });
  }
  let { parse: d } = Tf.acorn(),
    _;
  try {
    _ = d(e, { ecmaVersion: "latest", sourceType: "module", locations: true });
  } catch (A) {
    throw cO(r, t, A);
  }
  let C = ld.parentMap(_);
  return {
    file: t,
    program: _,
    names: Xf.moduleNamesOf(_),
    parentOf: (A) => C.get(A),
    refuse: u,
    imports: a4(_),
    specifiers: p4(_),
  };
}

function eWe(e) {
  let t;
  return (
    ld.walk(
      e,
      ({ node: r }) => {
        if (
          t === void 0 &&
          (r.type === "AwaitExpression" ||
            (r.type === "ForOfStatement" && r.await) ||
            (r.type === "VariableDeclaration" && r.kind === "await using"))
        )
          t = r;
      },
      (r) =>
        r.type === "FunctionDeclaration" || r.type === "FunctionExpression" || r.type === "ArrowFunctionExpression",
    ),
    t
  );
}

function fO({ graph: e, pluginName: t }, r) {
  let o = e.files.get(r);
  if (o === void 0) throw new Re.HooksError(`${t}: ${r} was not linked`);
  return o;
}

function w4({ program: e, names: { functions: t, assigned: r, declaredOnce: o }, refuse: u }, d, _ = "") {
  let C = d === "default" ? "the default export" : d;
  function A(M, F) {
    if (r.has(M)) throw u(F, `${C} ("${M}") is assigned to elsewhere`);
    if (!o.has(M)) throw u(F, `${C} ("${M}") is declared more than once in this file`);
  }
  for (let M of e.body) {
    if (M.type === "ExportDefaultDeclaration" && d === "default") {
      let { declaration: U } = M;
      if (U.type === "FunctionDeclaration") {
        if (U.id !== null) A(U.id.name, U);
        return U;
      }
      if (U.type === "FunctionExpression" || U.type === "ArrowFunctionExpression") return U;
      let B = U.type === "Identifier" ? t.get(U.name) : void 0;
      if (B === void 0 || U.type !== "Identifier")
        throw u(U, `${C} is something other than a function declared at the top of this file`);
      return A(U.name, U), B;
    }
    if (M.type !== "ExportNamedDeclaration") continue;
    let { declaration: F } = M;
    if (F?.type === "FunctionDeclaration" && F.id.name === d) return A(d, F), F;
    if (F?.type === "VariableDeclaration") {
      for (let U of F.declarations)
        if (U.id.type === "Identifier" && U.id.name === d) {
          let { init: B } = U;
          if (F.kind === "const" && (B?.type === "FunctionExpression" || B?.type === "ArrowFunctionExpression"))
            return B;
          throw u(U, `${C} is exported as something other than a const function`);
        }
    }
    for (let U of M.specifiers) {
      if (SB(U.exported) !== d) continue;
      if (M.source !== null) throw u(U, `${C} is re-exported from another file`);
      let B = SB(U.local),
        W = t.get(B);
      if (W === void 0)
        throw u(U, `${C} is exported as "${B}", which is not a function declared at the top of this file`);
      return A(B, U), W;
    }
  }
  let x = e.body.find((M) => M.type === "ExportAllDeclaration");
  if (x !== void 0)
    throw u(x, `${C} is not exported here by name; what \`export *\` re-exports from another file is not followed`);
  throw u(void 0, `no export named ${C}${_}`);
}

function T4(e) {
  if (e.type === "Literal") return typeof e.value === "string" ? e.value : void 0;
  if (e.type !== "TemplateLiteral" || e.expressions.length !== 0) return;
  let t = e.quasis[0]?.value.cooked;
  return t === void 0 || t === null ? void 0 : t;
}

function nWe(e, { names: { functions: t, assigned: r, declaredOnce: o }, refuse: u, what: d }) {
  let _ = t.get(e.name);
  if (_ === void 0) return;
  if (r.has(e.name)) throw u(e, `${d} "${e.name}" is assigned to elsewhere`);
  if (!o.has(e.name)) throw u(e, `${d} "${e.name}" is declared more than once in this file`);
  return _;
}

function oWe(e, t, r) {
  let o = E4(e);
  if (o !== void 0) throw t(o, `${r}() is called with a spread argument`);
  let [u, ...d] = e.arguments;
  if (u === void 0 || d.length === 0 || d.length > 2)
    throw t(e, `${r}() takes (event, hook) or (event, matcher, hook); got ${e.arguments.length} argument(s)`);
  let C = T4(u);
  if (C === void 0) throw t(u, `the event name passed to ${r}() is not a string literal`);
  if (!(C === "*" || r_.isEventName(C) || r_.isPluginEventName(C))) throw t(u, `"${C}" is not an event`);
  let x = d.at(-1);
  if (x === void 0) throw t(e, `${r}() takes (event, hook); got no hook`);
  return { event: C, hook: x, matched: d.length === 2 };
}

function sWe(e, t, r) {
  let { refuse: o, parentOf: u } = r,
    [d, , _] = e.params;
  if (e.type !== "ArrowFunctionExpression")
    for (let M of Xf.referencesTo(e, "arguments", "own")) throw o(M, '"arguments" is read inside a hook (it holds $)');
  let C = [];
  if (d !== void 0) {
    if (d.type !== "Identifier")
      throw o(d, "the first parameter of a hook ($) is not a plain name (a pattern, a rest or a default)");
    C.push({ name: d.name, declaration: d, origin: "parameter" });
  }
  for (let M of e.params)
    ld.walk(M, ({ node: F }) => {
      if (F.type === "AssignmentPattern") throw o(F, "a parameter of a hook has a default value");
    });
  let x = {
    ...r,
    bind: {
      dollar: (M) => {
        C.push({ name: M.name, declaration: M, origin: "next" });
      },
      unread: (M) => {
        for (let F of Xf.referencesTo(e, M.name))
          throw o(
            F,
            `"${M.name}", destructured from $ at engine.create, is read (a noun bound to a name); leave it unread or call it as $.noun.event(...)`,
          );
      },
    },
  };
  if (t && _ !== void 0) {
    if (_.type !== "Identifier") throw o(_, "the third parameter of an engine.create hook (next) is not a plain name");
    for (let M of Xf.referencesTo(e, _.name)) {
      let F = u(M);
      if (F?.type === "CallExpression" && F.callee === M && !F.optional) {
        ww.dollarUse(F, "next", x);
        continue;
      }
      if (ww.plainMemberOn(F, M)) continue;
      throw o(M, `"${_.name}" is passed on or bound inside an engine.create hook (its value is $)`);
    }
  }
  for (let { name: M, declaration: F, origin: U } of C) {
    for (let B of Xf.declarationsOf(e, M))
      if (B !== F) throw o(B, `"${M}" (which holds $) is declared again (shadowed)`);
    for (let B of Xf.referencesTo(e, M)) ww.dollarUse(B, U, x);
  }
}

function gO({ scan: e, linked: t }, r, o) {
  let { scanned: u } = t,
    d = sy.localFunction(r, { names: u.names, refuse: u.refuse, what: o });
  if (d !== void 0) return { fn: d, linked: t };
  let _ = u.imports.get(r.name);
  if (_ === void 0)
    throw u.refuse(
      r,
      `${o} "${r.name}" is not a function declared at the top of this file (a function declaration, or a const bound to a function), nor imported from one of the module's own files`,
    );
  if (_.imported === void 0) throw u.refuse(r, `${o} "${r.name}" is a namespace import, not a function`);
  if (u.names.assigned.has(r.name)) throw u.refuse(r, `${o} "${r.name}" is assigned to elsewhere`);
  let C = u.names.declared.get(r.name)?.find((M) => !Xf.isImportLocal(M, u.parentOf));
  if (C !== void 0) throw u.refuse(C, `${o} "${r.name}" is declared again in this file, shadowing the import`);
  let A = t.links.get(_.specifier);
  if (A === void 0) throw u.refuse(r, `"${_.specifier}" was not linked`);
  let x = fO(e, A);
  return { fn: sy.exportOf(x.scanned, _.imported), linked: x };
}

function iWe(e) {
  let t = B6t("sha256");
  for (let [r, { compiled: o, links: u }] of e.files) {
    t.update(zR(r) + zR(o));
    for (let [d, _] of u) t.update(zR(d) + zR(_));
  }
  return t.digest("hex");
}

function R4(e, t) {
  let r = e.holderNames.get(t);
  if (r !== void 0) return r;
  let o = A4(t);
  return e.holderNames.set(t, o), o;
}

async function aWe(e, t, r) {
  let o = new Map(),
    u = new Map([[e.file, e.source]]),
    d = [e],
    _ = Buffer.byteLength(e.source, "utf8");
  for (let { file: C, source: A } of d) {
    if (o.has(C)) continue;
    if (Buffer.byteLength(A, "utf8") > wA.MAX_HOOKS_MODULE_BYTES) throw JT.oversizeError(t, C);
    let x = WR.compileFile(A, C, t),
      M = WR.parseFile(x, C, t),
      F = WR.topLevelAwait(M.program);
    if (C !== e.file && F !== void 0)
      throw M.refuse(
        F,
        "a top-level await in a file the entry imports; the environment links the entry alone as an async module",
      );
    let U = new Map();
    for (let B of M.specifiers) {
      if (B === JT.TYPES_MODULE) continue;
      if (!JT.isOwnImport(B)) throw JT.importRefusal(t, B, j6t(e.root, C) || C);
      let W = await r(B, C, u);
      if (!u.has(W.file)) {
        if (u.size >= wA.MAX_HOOKS_MODULE_FILES) throw JT.tooManyFilesError(t, W.file);
        if (((_ += Buffer.byteLength(W.source, "utf8")), _ > wA.MAX_HOOKS_MODULE_TOTAL_BYTES))
          throw JT.moduleOversizeError(t, W.file);
        u.set(W.file, W.source);
      }
      U.set(B, W.file), d.push(W);
    }
    o.set(C, { source: A, compiled: x, scanned: M, links: U });
  }
  return { entry: e.file, files: o };
}

function P4(e, t, r) {
  let { scan: o, linked: u } = e,
    { scanned: d } = u,
    { event: _, hook: C, matched: A } = sy.registration(t, d.refuse, r),
    x = o.unmatched.get(_);
  if (x !== void 0 && (!A || _ === "*"))
    throw d.refuse(t, `${r}("${_}") is registered twice${A ? "" : " without a matcher"}; the first is at ${x}`);
  if (!A || _ === "*") o.unmatched.set(_, `${d.file}:${t.loc?.start.line ?? "unknown line"}`);
  o.hooks.add(_);
  let M =
    C.type === "FunctionExpression" || C.type === "ArrowFunctionExpression"
      ? { fn: C, linked: u }
      : C.type === "Identifier"
        ? gO(e, C, "the hook")
        : void 0;
  if (M === void 0) throw d.refuse(C, "the hook is not a function literal or the name of one");
  o.registered.set(M.fn, {
    linked: M.linked,
    engineCreate: o.registered.get(M.fn)?.engineCreate === true || _ === ww.ENGINE_CREATE,
  });
}

function bB(e, t, r) {
  let { scan: o, linked: u } = e,
    d = o.holders.get(t) ?? new Set();
  if (d.has(r)) return;
  d.add(r), o.holders.set(t, d);
  let { scanned: _ } = u,
    { refuse: C, parentOf: A } = _,
    x = R4(o, t);
  for (let U of x.argumentsRead) throw C(U, '"arguments" is read inside a function that holds on');
  let M = t.params[r];
  if (M === void 0) {
    let U = t.params.at(-1);
    if (U?.type === "RestElement") throw C(U, "on is passed into a rest parameter");
    return;
  }
  if (M.type !== "Identifier") throw C(M, "the parameter that receives on is not a plain name");
  let F = M.name;
  for (let U of x.names.declared.get(F) ?? []) if (U !== M) throw C(U, `"${F}" is declared again (shadowed)`);
  for (let U of x.names.read.get(F) ?? []) {
    let B = A(U);
    if (B?.type !== "CallExpression" || B.optional)
      throw C(
        U,
        `"${F}" is used other than as a call or an argument to a function of the module's own (bound, spread or read)`,
      );
    if (B.callee === U) {
      P4(e, B, F);
      continue;
    }
    if (B.callee.type !== "Identifier")
      throw C(
        B.callee,
        `"${F}" is passed to something other than a function named at the top of this file or imported from one of the module's own files`,
      );
    let W = sy.spreadArgument(B);
    if (W !== void 0) throw C(W, `"${F}" is passed in a call with a spread argument`);
    let z = gO(e, B.callee, "the callee");
    bB({ scan: o, linked: z.linked }, z.fn, B.arguments.indexOf(U));
  }
}

function lWe(e, t) {
  let r = x4(e, t),
    o = fO(r, e.entry);
  bB({ scan: r, linked: o }, sy.registerOf(o.scanned), 0);
  for (let [u, { linked: d, engineCreate: _ }] of r.registered)
    sy.scanHook(u, _, { refuse: d.scanned.refuse, parentOf: d.scanned.parentOf, record: (C) => r.calls.add(C) });
  return { hooks: Array.from(r.hooks), calls: Array.from(r.calls).sort() };
}

function kB(e, t) {
  let r = py.graphKey(e),
    o = Tf.scans.get(r);
  if (o !== void 0) return o;
  let u = py.scanGraph(e, t);
  return Tf.scans.set(r, u), u;
}

async function Nme(e, t, r) {
  let o = Tf.embeddedHooksModules.source(e),
    u = o ?? (await JT.readPluginFile(e, t, r)),
    d = await py.linkGraph(
      { file: e, source: u, root: t },
      r,
      o === void 0 ? py.diskReader(t, r) : py.textOnlyReader(r),
    );
  return {
    source: u,
    linked: [...d.files].filter(([_]) => _ !== e).map(([_, C]) => ({ file: _, source: C.source })),
    links: [...d.files].flatMap(([_, C]) => [...C.links].map(([A, x]) => ({ from: _, spelled: A, file: x }))),
    scan: kB(d, r),
  };
}

async function $me(e) {
  let t;
  try {
    [t] = (
      await Bun.build({
        entrypoints: [V6t(dp.repoRoot(), e, BR)],
        target: "bun",
        format: "esm",
        minify: false,
        external: [JT.TYPES_MODULE],
      })
    ).outputs;
  } catch (o) {
    throw new Re.HooksError(`cannot bundle the hooks module of ${e}: ${dp.buildFailure(o)}`);
  }
  if (t === void 0) throw new Re.HooksError(`cannot bundle the hooks module of ${e}: the build wrote nothing`);
  let r = (await t.text()).replace(dp.BUN_HEADER, "");
  return await F8.scanSource(dp.embeddedPath(e), r, e), r;
}

async function J6t(e) {
  try {
    if (e === void 0) throw Error("usage: bun scripts/bundle-builtin-hooks-module.ts <folder>");
    process.stdout.write(await $me(e));
  } catch (t) {
    process.stderr.write(l(t)), (process.exitCode = 1);
  }
}

function ale(e) {
  return e.endsWith(`@${Uh}`);
}

function gct(e) {
  return To().builtinPlugins.get(e);
}

function hct() {
  let e = En(),
    t = [],
    r = [];
  for (let [o, u] of To().builtinPlugins) {
    if (u.isAvailable && !u.isAvailable()) continue;
    let d = `${o}@${Uh}`,
      _ = u.enabledFromTrustedSettingsOnly ? VMt(d) : e?.enabledPlugins?.[d],
      C = _ !== void 0 ? _ === true : (u.defaultEnabled ?? true),
      A = {
        name: o,
        manifest: {
          name: o,
          description: u.description,
          version: u.version,
          ...(u.defaultEnabled === void 0 ? {} : { defaultEnabled: u.defaultEnabled }),
          ...(u.userConfig === void 0 ? {} : { userConfig: u.userConfig }),
        },
        path: Uh,
        source: d,
        repository: d,
        enabled: C,
        isBuiltin: true,
        hooksConfig: u.hooks,
        mcpServers: u.mcpServers,
        ...(u.hooksModule === void 0 ? {} : wB.loaderPaths(o, u.hooksModule)),
      };
    if (C) t.push(A);
    else r.push(A);
  }
  return { enabled: t, disabled: r };
}

function dNt() {
  let { enabled: e } = hct(),
    t = [],
    r = To().builtinPlugins;
  for (let o of e) {
    let u = r.get(o.name);
    if (!u?.skills) continue;
    for (let d of u.skills) t.push(Z6t(d));
  }
  return t;
}

function Ume() {
  let e = [];
  for (let t of To().builtinPlugins.values()) for (let r of t.skills ?? []) e.push(r.name, ...(r.aliases ?? []));
  return e;
}

function Z6t(e) {
  let t = To().builtinPluginWiredSkills,
    r = t.get(e);
  if (!r) {
    let { wireSkillFilesExtraction: _ } = import.meta.require("/$bunfs/root/chunk-g54hyz63.js");
    (r = _(e)), t.set(e, r);
  }
  let { skillRoot: o, getPromptForCommand: u } = r,
    d = {
      type: "prompt",
      name: e.name,
      description: typeof e.description === "function" ? "" : e.description,
      menuDescription: e.menuDescription,
      aliases: e.aliases,
      hasUserSpecifiedDescription: true,
      allowedTools: e.allowedTools ?? [],
      getAllowedTools: e.getAllowedTools,
      disallowedTools: e.disallowedTools ?? [],
      argumentHint: typeof e.argumentHint === "function" ? void 0 : e.argumentHint,
      whenToUse: typeof e.whenToUse === "function" ? void 0 : e.whenToUse,
      subcommands: e.subcommands,
      subcommandsBareOnly: e.subcommandsBareOnly,
      model: e.model,
      disableModelInvocation: typeof e.disableModelInvocation === "function" ? true : (e.disableModelInvocation ?? false),
      disableBridgeInvocation: e.disableBridgeInvocation,
      userInvocable: e.userInvocable ?? true,
      terminalOriented: e.terminalOriented,
      argsMayContainSlashCommands: e.argsMayContainSlashCommands,
      contentLength: 0,
      source: "bundled",
      loadedFrom: "bundled",
      hooks: e.hooks,
      context: e.context,
      getContext: e.getContext,
      agent: e.agent,
      background: e.background,
      skillRoot: o,
      isEnabled: e.isEnabled ?? (() => true),
      policyGate: e.policyGate,
      requires: e.requires,
      isHidden: !(e.userInvocable ?? true),
      progressMessage: e.progressMessage ?? "running",
      getPromptForCommand: u,
      getEffort: e.getEffort,
      getDefaultEffort: e.getDefaultEffort,
      onUserTypedArgs: e.onUserTypedArgs,
      getArgumentCompletions: e.getArgumentCompletions,
    };
  return (
    LTe(d, "description", e.description),
    LTe(d, "argumentHint", e.argumentHint),
    LTe(d, "whenToUse", e.whenToUse),
    Bjt(d, "disableModelInvocation", e.disableModelInvocation),
    d
  );
}

function _ct(e) {
  if (!ale(e)) return;
  let t = e.slice(0, -`@${Uh}`.length);
  for (let [r, o] of To().builtinPlugins)
    if (Vy(r, t)) return o.enabledFromTrustedSettingsOnly === true ? `${r}@${Uh}` : void 0;
  return;
}

function uWe() {
  let e = xi();
  if (!e.includes("userSettings")) return [];
  let t = ye("userSettings")?.enabledPlugins;
  if (!t) return [];
  let r = e.filter((u) => u !== "userSettings"),
    o = [];
  for (let [u, d] of Object.entries(t)) {
    if (d !== false) continue;
    let _ = IS(u) ? r.filter((A) => IL.includes(A)) : r,
      C = null;
    for (let A of _) {
      let x = ye(A)?.enabledPlugins?.[u];
      if (x === void 0) continue;
      C = x === false ? null : A;
    }
    if (C === null) continue;
    o.push({ pluginId: u, overriddenBy: C });
  }
  return o;
}

function U4(e) {
  if (/[\u0000-\u001f\u007f]/.test(e))
    throw new R(
      `Invalid git URL: ${or(e, 200)} \u2014 control characters are not allowed`,
      "git URL contains control characters",
    );
  if (e3t.test(e)) return e;
  let t;
  try {
    t = new URL(e);
  } catch {
    throw new R(`Invalid git URL: ${or(e, 200)}`, "Invalid git URL");
  }
  if (!["https:", "http:", "ssh:", "file:", "git+ssh:", "ssh+git:"].includes(t.protocol))
    throw new R(`Invalid git URL protocol: ${or(t.protocol, 40)}. Supported: ${D4}.`, "Invalid git URL protocol");
  if (["ssh:", "git+ssh:", "ssh+git:"].includes(t.protocol)) {
    let r = /^[a-z][a-z0-9+.-]*:\/\/([^/]*)/i.exec(e)?.[1] ?? "",
      o = r.lastIndexOf("@"),
      u = o === -1 ? void 0 : r.slice(0, o),
      d = o === -1 ? r : r.slice(o + 1),
      C = /^(.*?)(?::([0-9]{1,5}))?$/.exec(d)?.[1] ?? d;
    if (/[?#]/.test(e) || !r3t.test(C) || (u !== void 0 && !s3t.test(u)))
      throw new R(
        `Invalid ssh git URL: the host must be a hostname or bracketed IPv6 literal (optionally :port), the user a plain name, and the URL may not carry ? or # (${or(e, 200)})`,
        "ssh git URL host or user has disallowed characters",
      );
  }
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(e))
    throw new R(
      `Invalid git URL: ${or(e, 200)} \u2014 a scheme URL must be spelled scheme://\u2026`,
      "git URL scheme without //",
    );
  if (
    t.protocol === "file:" &&
    (IU(i3t(e)) ||
      t.host !== "" ||
      /^file:\/\/(?![a-z]:[/\\])[^/\\]/i.test(e) ||
      /^file:[\\/]*[\\]/i.test(e) ||
      SA(a3t(t)))
  )
    throw new R(
      `Refusing git URL ${or(e, 200)}: a file: URL must name a local path (no host, no network-shaped path).`,
      "file git URL names a host or network path",
    );
  return e;
}

function i3t(e) {
  try {
    return decodeURIComponent(e.replace(/^file:\/\//i, ""));
  } catch {
    return "/../malformed-percent-encoding";
  }
}

function a3t(e) {
  try {
    return decodeURIComponent(e.pathname);
  } catch {
    return "//malformed-percent-encoding/";
  }
}

function TB(e) {
  try {
    return U4(e), true;
  } catch {
    return false;
  }
}

function lle() {
  let e = {};
  for (let t of Xm())
    for (let r of pWe) {
      let { settings: o } = xC(dWe(t, ".claude", r));
      if (!o?.enabledPlugins) continue;
      Object.assign(e, o.enabledPlugins);
    }
  return e;
}

function B4() {
  let e = Xm(),
    t = `${Ha().epoch}\x00${e.join("\x00")}`,
    r = Jt();
  if (r.addDirMarketplacesMemo?.key === t) return r.addDirMarketplacesMemo.value;
  let o = {};
  for (let u of e)
    for (let d of pWe) {
      let { settings: _ } = xC(dWe(u, ".claude", d));
      if (!_?.extraKnownMarketplaces) continue;
      for (let [C, A] of Object.entries(_.extraKnownMarketplaces)) o[C] = l3t(C, A);
    }
  return (r.addDirMarketplacesMemo = { key: t, value: o }), o;
}

function l3t(e, t) {
  let r = t.source;
  if (r.source === "url") {
    let { headersHelper: o, headers: u, ...d } = r;
    if (o !== void 0)
      n(`--add-dir marketplace ${Fp(e)}: dropping its headersHelper (an --add-dir declaration may not run commands)`, {
        level: "warn",
      });
    return { ...t, source: { ...d, ...(u && { headers: ygt(u, `--add-dir marketplace ${Fp(e)}`) }) } };
  }
  if (r.source === "settings")
    return {
      ...t,
      source: {
        ...r,
        plugins: r.plugins
          .filter((o) => {
            let u = typeof o.source === "object" && o.source.source === "command";
            if (u) n(`--add-dir marketplace ${Fp(e)}: dropping command-sourced entry ${Fp(o.name)}`, { level: "warn" });
            return !u;
          })
          .map(({ headersHelper: o, headers: u, ...d }) => {
            if (o !== void 0)
              n(
                `--add-dir marketplace ${Fp(e)}: dropping entry ${Fp(d.name)}'s headersHelper (an --add-dir declaration may not run commands)`,
                { level: "warn" },
              );
            return { ...d, ...(u && { headers: ygt(u, `--add-dir marketplace ${Fp(e)} entry ${Fp(d.name)}`) }) };
          }),
      },
    };
  return t;
}

function j4() {
  return [...xi()].reverse();
}

function wct() {
  return j4().map((e) => ({ source: e, record: ye(e)?.enabledPlugins }));
}

function jxe() {
  return Vgn(wct().map(({ record: e }) => e));
}

function c3t(e) {
  let t = Ud(BF(e));
  return !uc(t) && t !== Uh;
}

function fWn(e, t) {
  if (!IS(e)) return t;
  let r = j4();
  return t.map((o, u) => {
    let d = r[u];
    return d !== void 0 && IL.includes(d) ? o : void 0;
  });
}

function mWn(e) {
  let t = wct();
  return c3t(e) ? u3t(t) : t;
}

function u3t(e) {
  return [...e, { source: "addDir", record: lle() }];
}

function gWn(e, t) {
  if (e.length !== t.length) return false;
  return e.every((r, o) => {
    let u = t[o];
    if (r === void 0 || u === void 0) return r === u;
    let d = Object.keys(r.record);
    if (d.length !== Object.keys(u.record).length) return false;
    return d.every((_) => _ in u.record && mWe(u.record[_]) === mWe(r.record[_]));
  });
}

function mWe(e) {
  if (e === void 0) return "absent";
  if (e === false) return "false";
  return e === true ? "true" : "other";
}

async function v3t(e) {
  await Promise.all(
    Array.from(e.ownInUseMarkerPaths).map(async (t) => {
      if (!(await R3t(GR(t)))) return;
      let r = e.ownInUseMarkerHandles.get(t);
      if (O() && r !== void 0) {
        let u = await r.storageV5.delete(r.key);
        if (!u.ok) n(`Failed to remove ${Mu} marker at exit: ${t}: ${Ge(u.error)}`);
      }
      let o = [];
      try {
        o = await kWe(GR(t));
      } catch {}
      for (let u of [...AWe(o, t), Wme(t)]) await wWe(Bp(GR(t), u), { force: true }).catch(() => {});
    }),
  );
}

function C3t(e) {
  for (let t of e.ownInUseMarkerPaths) {
    if (!x3t(GR(t))) continue;
    let r = [];
    try {
      r = g3t(GR(t));
    } catch {}
    for (let o of [...AWe(r, t), Wme(t)])
      try {
        h3t(Bp(GR(t), o));
      } catch {}
  }
  e.ownInUseMarkerPaths.clear(), e.ownInUseMarkerHandles.clear();
}

function AWe(e, t) {
  return e.filter((r) => wP(r, Wme(t)));
}

async function R3t(e) {
  if (RWe(e)) return (await IWe(e)) === "ours";
  try {
    return (await hO(e)) === "directory";
  } catch {
    return false;
  }
}

function x3t(e) {
  try {
    if (RWe(e)) {
      let t = Jy();
      return fWe(e) === Bp(fWe(t), KR(t, e));
    }
    if (!d3t(e).isDirectory()) return false;
    if (D() === "windows") return scr(e).kind === "directory";
    return true;
  } catch {
    return false;
  }
}

async function hO(e) {
  let t;
  try {
    t = await kO(e);
  } catch (r) {
    if (X(r)) return "absent";
    throw r;
  }
  if (!t.isDirectory()) return t.isFile() ? "junk" : "refused";
  if (D() === "windows") {
    let r = await hie(e);
    switch (r.kind) {
      case "junction":
        return "refused";
      case "absent":
        return "absent";
      case "error":
        throw r.error;
      case "directory":
        break;
    }
  }
  return "directory";
}

function qR(e) {
  return e.includes(".tmp.");
}

function RWe(e) {
  let t = KR(Bp(Jy(), kb), e);
  return t !== "" && !t.startsWith("..") && !vWe(t);
}

function gWe(e, t, r) {
  if ((e.ownInUseMarkerPaths.add(t), r)) e.ownInUseMarkerHandles.set(t, r);
  else e.ownInUseMarkerHandles.delete(t);
  if (e.inUseMarkerCleanup) return;
  let o = vt(() => v3t(e)),
    u = () => C3t(e);
  process.on("exit", u),
    (e.inUseMarkerCleanup = () => {
      o(), process.off("exit", u);
    });
}

function hWe(e, t) {
  e.ownInUseMarkerPaths.delete(t), e.ownInUseMarkerHandles.delete(t);
}

async function Ew(e) {
  try {
    return (await kO(e)).isSymbolicLink();
  } catch {
    return false;
  }
}

async function O3t(e) {
  let t = Bp(Jy(), kb),
    r = e;
  for (let o = 0; o < 3; o++) {
    let u = KR(t, r);
    if (u === "" || u.startsWith("..") || vWe(u)) return;
    try {
      await TWe(r);
    } catch (d) {
      if (E(d) !== "ENOENT") return;
    }
    r = GR(r);
  }
}

function PWe(e) {
  let t = Jy(),
    r = KR(Bp(t, RKe), e).split(G4);
  if (r.length !== 3 || r.some((o) => o === "" || o === "." || o === "..")) return;
  return Bp(t, kb, ...r);
}

async function L3t(e) {
  let t = Jy();
  try {
    let r = await z4(t),
      o = t;
    for (let u of KR(t, e).split(G4))
      if (
        ((o = Bp(o, u)),
        (r = Bp(r, u)),
        await vB(o).catch((d) => {
          let _ = E(d);
          if (_ !== "EEXIST" && _ !== "ENOENT") throw d;
        }),
        (await z4(o)) !== r)
      )
        return "redirected";
    return "ours";
  } catch (r) {
    let o = E(r);
    if (o === "ENOENT" || o === "ENOTDIR") return MWe(t, e);
    return "undeterminable";
  }
}

async function xWe(e, t) {
  let r = Bp(e, kb),
    o = e;
  for (let u of KR(e, t).split(G4)) {
    if (((o = Bp(o, u)), !(o === r || o.startsWith(r + G4)))) continue;
    try {
      let d = await kO(o);
      if (d.isSymbolicLink()) return { path: o, kind: "link" };
      if (!d.isDirectory()) return { path: o, kind: "junk" };
    } catch {
      return;
    }
  }
  return;
}

async function MWe(e, t) {
  let r = await xWe(e, t);
  if (r === void 0) return "pruned";
  if (r.kind === "link") return "redirected";
  try {
    await b3t(r.path);
  } catch {
    return "undeterminable";
  }
  return n(`Removed a stray non-directory entry planted in the ${kb} marker tree: ${r.path}`), "pruned";
}

async function IWe(e) {
  try {
    let t = await z4(e),
      r = Bp(await z4(Jy()), KR(Jy(), e));
    return t === r ? "ours" : "redirected";
  } catch (t) {
    let r = E(t);
    if (r === "ENOENT" || r === "ENOTDIR") {
      let o = await xWe(Jy(), e);
      return o === void 0 ? "absent" : o.kind === "link" ? "redirected" : "undeterminable";
    }
    return "undeterminable";
  }
}

async function Hme() {
  return b({ pid: process.pid, ...D$(await RC()) });
}

async function K4(e, t) {
  let r = Jt(),
    o = O() && t !== void 0;
  if (await Ew(e)) {
    let A = PWe(e);
    if (A === void 0) return false;
    let x = Bp(A, String(process.pid));
    for (let M = 1; ; M++)
      try {
        let F = await L3t(A);
        if (F === "pruned" && M < Bme) continue;
        if (F !== "ours")
          return (
            n(
              F === "pruned"
                ? `Not writing an ${kb} marker: ${A} kept being pruned while it was being created (gave up after ${Bme} attempts)`
                : F === "undeterminable"
                  ? `Not writing an ${kb} marker: ${A} could not be examined`
                  : `Not writing an ${kb} marker: ${A} does not resolve inside the plugins directory`,
            ),
            false
          );
        return gWe(r, x, void 0), await cue(x), await Wn(x, await Hme()), true;
      } catch (F) {
        let U = E(F);
        if ((U === "ENOENT" || U === "ENOTDIR") && M < Bme && (await MWe(Jy(), A)) === "pruned") continue;
        return n(`Failed to write ${kb} marker: ${e}: ${F}`), false;
      }
  }
  let u = Bp(e, Mu),
    d = Bp(u, String(process.pid)),
    _ = o ? MD(e, XF()) : null;
  if (o && _) {
    let A;
    try {
      A = await hO(u);
    } catch (x) {
      return n(`Not writing an ${Mu} marker: ${u} cannot be examined: ${x}`), false;
    }
    if (A === "refused" || A === "junk") {
      if (!(await _O(u))) return n(`Not writing an ${Mu} marker: ${u} is not a directory of markers`), false;
    }
  }
  let C = o && _ ? Te.pluginCache(_.marketplace, _.plugin, _.version, [Mu, String(process.pid)]) : void 0;
  gWe(r, d, o && C ? { storageV5: t, key: C } : void 0);
  try {
    if (o && C) {
      let A = await Hme(),
        x = { mode: 438 & ~process.umask() },
        M = await t.write(C, A, x);
      if (!M.ok) await cue(d), (M = await t.write(C, A, x));
      if (!M.ok) return n(`Failed to write ${Mu} marker: ${e}: ${Ge(M.error)}`), false;
      return true;
    }
    try {
      await vB(u);
    } catch (A) {
      let x = E(A);
      if (x === "ENOENT") await vB(u, { recursive: true });
      else if (x !== "EEXIST") throw A;
      else {
        let M = await hO(u);
        if (M === "absent") await vB(u, { recursive: true });
        else if (M !== "directory") {
          if (!(await _O(u))) return n(`Not writing ${Mu} marker through a non-directory: ${e}`), false;
          await vB(u, { recursive: true });
        }
      }
    }
    return await cue(d), await Wn(d, await Hme()), true;
  } catch (A) {
    return n(`Failed to write ${Mu} marker: ${e}: ${A}`), false;
  }
}

async function V4(e, t) {
  if (await Ew(e)) return true;
  let r = Bp(e, Mu),
    o = Bp(r, String(process.pid)),
    u = O() && t !== void 0,
    d = u ? MD(e, XF()) : null;
  try {
    let _ = await hO(r);
    if (_ === "absent" || (u && _ === "junk")) return hWe(Jt(), o), true;
    if (_ === "refused" || _ === "junk") return false;
    if (u && d) {
      let C = await t.delete(Te.pluginCache(d.marketplace, d.plugin, d.version, [Mu, String(process.pid)]));
      if (!C.ok) return n(`Failed to remove ${Mu} marker: ${e}: ${Ge(C.error)}`), false;
    } else await wWe(o, { force: true });
    await TWe(r).catch(() => {});
  } catch (_) {
    return n(`Failed to remove ${Mu} marker: ${e}: ${_}`), false;
  }
  return hWe(Jt(), o), true;
}

function yWe(e) {
  return JF(e, F3t);
}

async function OWe(e, t) {
  if (e.length === 0) return;
  let r = Bp(Jy(), W4),
    o = O() && t !== void 0,
    u = o ? L9("inUseSweep", Jy()) : null;
  if (o && u) {
    let _ = await t.statMeta(u);
    if (_.ok && yWe(_.value.mtimeMs)) return;
  } else
    try {
      let _ = await kO(r);
      if (_.isFile() && yWe(_.mtimeMs)) return;
    } catch {}
  let d = await Promise.allSettled(e.map((_) => tS(_, void 0, t)));
  for (let [_, C] of d.entries()) if (C.status === "rejected") n(`Failed to sweep ${Mu}: ${e[_]}: ${C.reason}`);
  if (o && u) {
    let _ = await t.write(u, new Date().toISOString(), { publishDiscipline: "inPlace" });
    if (!_.ok)
      try {
        await cue(r), (_ = await t.write(u, new Date().toISOString(), { publishDiscipline: "inPlace" }));
      } catch (C) {
        n(`Failed to clear a non-regular ${W4}: ${C}`);
      }
    if (!_.ok) n(`Failed to stamp ${W4}: ${Ge(_.error)}`);
    return;
  }
  try {
    await cue(r), await j2t(r, new Date().toISOString());
  } catch (_) {
    n(`Failed to stamp ${W4}: ${_}`);
  }
}

async function tS(e, t, r) {
  if (await Ew(e)) {
    let C = PWe(e);
    if (C === void 0) return false;
    switch (await IWe(C)) {
      case "ours": {
        let x = await SWe(C, t);
        if (!x) await O3t(C);
        return x;
      }
      case "absent":
        return false;
      case "redirected":
        return n(`Not scanning ${kb}: ${C} does not resolve inside the plugins directory`), false;
      case "undeterminable":
        return t?.refusedCountsAsLive ?? true;
    }
  }
  let o = Bp(e, Mu),
    u = O() ? r : void 0,
    d = u !== void 0 ? MD(e, XF()) : null;
  if (u === void 0 || d === null) return SWe(o, t);
  let _;
  try {
    _ = await hO(o);
  } catch (C) {
    if (Ht(C)) return t?.refusedCountsAsLive ?? true;
    throw C;
  }
  if (_ === "junk") return await _O(o), false;
  if (_ === "refused") return await _O(o), t?.refusedCountsAsLive ?? true;
  return B3t(u, d, t);
}

async function _O(e) {
  try {
    if ((await nC(e)) === "directory") return true;
    return (
      n(`Removed a non-directory ${Mu} at ${e}; the version reads unpinned until a session marks it again`, {
        level: "warn",
      }),
      true
    );
  } catch (t) {
    return (
      n(`Could not remove a non-directory ${Mu} at ${e} (${l(t)}); treating the version as in use`, { level: "warn" }),
      false
    );
  }
}

function jme(e) {
  if (typeof e !== "number" || !Number.isFinite(e)) return false;
  return !JF(e, U3t);
}

async function _We(e, t) {
  try {
    let r = t ?? (await kO(e)).mtimeMs;
    if (!jme(r)) return false;
    if ((await nC(e)) === "directory") await Tc(e);
    return true;
  } catch {
    return false;
  }
}

async function SWe(e, t) {
  let r;
  try {
    let u = await hO(e);
    if (u === "refused") return await _O(e), t?.refusedCountsAsLive ?? true;
    if (u === "junk") return await _O(e), false;
    if (u !== "directory") return false;
    r = await kWe(e);
  } catch (u) {
    if (X(u)) return false;
    if (Ht(u)) return t?.refusedCountsAsLive ?? true;
    throw u;
  }
  let o = false;
  for (let u of r) {
    let d = Bp(e, u);
    if (qR(u)) {
      if (await _We(d)) continue;
      o = true;
      continue;
    }
    let _, C;
    try {
      let x = await kO(d);
      if (((C = x.mtimeMs), x.isFile() && x.size <= EWe)) _ = await y3t(d, "utf-8");
    } catch (x) {
      if (X(x)) continue;
      n(`In-use marker ${d} could not be read (${l(x)}); treating it as live`, { level: "warn" }), (o = true);
      continue;
    }
    if (_ === "") {
      if (await _We(d, C)) continue;
      o = true;
      continue;
    }
    let A = CWe().safeParse(Ut(_, false));
    if (t?.excludeSelf && A.success && A.data.pid === process.pid) continue;
    if (A.success && (A.data.pid === 1 || ms(A.data.pid)) && (await Bm(A.data.pid, iA(A.data)))) {
      o = true;
      continue;
    }
    await Tc(d);
  }
  return o;
}

async function B3t(e, t, r) {
  let o = (x) => Te.pluginCache(t.marketplace, t.plugin, t.version, [Mu, x]),
    u = [],
    d = new Map(),
    _;
  do {
    let x = await e.listEntries(
      { namespace: "pluginCache", marketplace: t.marketplace, plugin: t.plugin, version: t.version, relPath: [Mu] },
      { cursor: _, skipKeyStats: true, skipScopeStats: true },
    );
    if (!x.ok) {
      let M = "telemetryCode" in x.error ? x.error.telemetryCode : void 0,
        F = Object.assign(Error("in-use listing failed"), { ...(M !== void 0 && { code: M }) });
      if (M === "ENOENT" || M === "ENOTDIR") return false;
      if (Ht(F)) return r?.refusedCountsAsLive ?? true;
      throw F;
    }
    for (let M of x.value.items) {
      if (M.kind !== "key" || M.key.namespace !== "pluginCache") continue;
      let F = M.key.relPath.at(-1);
      if (F !== void 0) u.push(F), d.set(F, M.mtimeMs);
    }
    _ = x.value.cursor;
  } while (_);
  let C = u.some((x) => qR(x) && !jme(d.get(x))),
    A = u.filter((x) => !qR(x));
  for (let x = 0; x < A.length; x += bWe) {
    let M = A.slice(x, x + bWe),
      F = await j3t(e, M.map(o));
    for (let [U, B] of M.entries()) {
      let W = F[U] ?? "unreadable";
      if (W === "unreadable") {
        C = true;
        continue;
      }
      let z = W === "absent" ? void 0 : W,
        pe = z !== void 0 && Buffer.byteLength(z.raw, "utf8") > EWe ? void 0 : z?.raw;
      if (pe === "") {
        if (!jme(z?.mtimeMs)) {
          C = true;
          continue;
        }
        if (
          !(await e.delete(o(B)).then(
            (ge) => ge.ok,
            () => false,
          ))
        )
          C = true;
        continue;
      }
      let fe = CWe().safeParse(Ut(pe, false));
      if (r?.excludeSelf && fe.success && fe.data.pid === process.pid) continue;
      if (fe.success && (fe.data.pid === 1 || ms(fe.data.pid)) && (await Bm(fe.data.pid, iA(fe.data)))) {
        C = true;
        continue;
      }
      await e.delete(o(B)).then(
        () => {},
        () => {},
      );
    }
  }
  return C;
}

async function j3t(e, t) {
  let r = (d) => Buffer.from(d).toString("utf8"),
    o = await e.read(t);
  if (o.ok) return o.value.items.map((d) => (d.found ? { raw: r(d.value), mtimeMs: d.mtimeMs } : "absent"));
  let u = [];
  for (let d of t) {
    let _ = await e.read([d]);
    u.push(
      !_.ok
        ? "unreadable"
        : _.value.items[0]?.found
          ? { raw: r(_.value.items[0].value), mtimeMs: _.value.items[0].mtimeMs }
          : "absent",
    );
  }
  return u;
}

function CO(e) {
  return cgt(e, eXt);
}

function xg(e, t) {
  if (e === t) return true;
  let r = t.endsWith(YR) ? t : t + YR;
  return e.startsWith(r);
}

function RB() {
  return { ...tXt };
}

function XR(e, t, r) {
  if (((e.entries -= t), (e.bytes -= r), e.entries < 0 || e.bytes < 0)) throw new Z4();
}

function Jme(e) {
  return e.split(YR).some(bwe);
}

function n5(e) {
  let t = Date.now() - e;
  return t > -Kme && t < Kme;
}

function iXt(e) {
  let t = new Date();
  G3t(e, t, t).catch(() => {});
}

function aH(e) {
  let t = (C) => {
      let A = PU(C);
      return A === null ? null : Vxn(A);
    },
    r = t(e),
    o = Z5(e),
    u = (C) => qCt(C).some((A) => A !== r),
    d = (C) => {
      if (!oZe(C) && !Ms(C)) return false;
      if (JO(C) || Dj(C) || v5t(C)) return true;
      if (Qi(C) || Ms(C)) {
        let A = Z5(C);
        return A === null || A !== o;
      }
      if (ns(C)) return oc(C) || t(C) !== r;
      return true;
    };
  return { spelling: d, target: (C, A) => d(C) || d(UWe(A, C)) || u(A + YR + C) };
}

async function AB(e, t, r, o = {}) {
  return BWe(CB(e), [], t, o, r ?? (await Q4(e)));
}

async function lXt(e, t, r, o = {}) {
  return BWe(e, X4(t), r, o);
}

async function BWe(e, t, r, o, u) {
  let d = (o.platform ?? (D() === "windows" ? "win32" : "posix")) === "win32",
    _ = e,
    C = t.slice(),
    A = u === void 0 ? 0 : 1,
    x = (M, F) => {
      if (r.target(M, F)) return "network";
      if (d) {
        if (aXt.test(M)) return "unsupported";
        let U = UWe(F, M, ...C);
        if (r.spelling(U)) return "network";
        C.length = 0;
        let B = o.trustedRoot;
        if (B !== void 0 && (U === B || xg(U, B))) (_ = B), C.push(...X4(Tb(B, U)));
        else {
          if (((_ = Y4(U).root), B !== void 0 && _.toLowerCase() !== Y4(B).root.toLowerCase())) return "unsupported";
          C.push(...X4(U));
        }
        return null;
      }
      if (Qme(M)) _ = Y4(M).root;
      else _ = F;
      return C.unshift(...X4(M)), null;
    };
  if (u !== void 0) {
    let M = x(u, e);
    if (M !== null) return M;
  }
  while (C.length > 0) {
    let M = C.shift();
    if (M === ".") continue;
    if (M === "..") {
      _ = CB(_);
      continue;
    }
    let F = Fu(_, M);
    if (r.spelling(F)) return "network";
    let U;
    try {
      U = await kc(F);
    } catch (B) {
      let W = E(B);
      if (W === "ENOENT" || W === "ENOTDIR") return "dangling";
      throw B;
    }
    if (U.isSymbolicLink()) {
      if (++A > LWe) return "loop";
      let B = x(await Q4(F), _);
      if (B !== null) return B;
      continue;
    }
    if (C.length > 0 && !U.isDirectory()) return "dangling";
    if (d && U.isDirectory()) {
      let B;
      try {
        B = await Q4(F);
      } catch (W) {
        let z = E(W);
        if (z === "ENOENT" || z === "ENOTDIR") return "dangling";
        if (z !== "EINVAL") throw W;
        B = null;
      }
      if (B !== null) {
        if (++A > LWe) return "loop";
        let W = x(B, _);
        if (W !== null) return W;
        continue;
      }
    }
    _ = F;
  }
  return "clean";
}

function Gme(e) {
  return new R(
    `Refusing to swap in a staged copy: it is no longer the ${e} this pass made (replaced during the conversion).`,
    "plugin cache staged copy replaced before the swap",
  );
}

async function cH(e, t, r = {}) {
  let o = performance.now(),
    u = r.budget ?? RB(),
    d = r.mode ?? "install",
    _ = { vouched: false, materialized: 0, removed: 0, failed: 0, readOnly: false };
  if (!(await kc(e)).isDirectory())
    throw new R(`Plugin path is not a directory: ${e}`, "plugin path is not a directory");
  let C = await VR(e),
    A,
    x;
  try {
    (A = await cXt(e, C, d, r.sharedPath)), (x = mU(Fu(C, LD))), await W3t(x);
  } catch (lt) {
    let mt = E(lt);
    if (mt !== void 0 && cE.has(mt))
      return n(`materializeLinks: ${e}: cannot write (${mt}), leaving links in place`), { ..._, readOnly: true };
    throw lt;
  }
  let M = await kc(x, { bigint: true }),
    F = async () => {
      let lt = await kc(x, { bigint: true }).catch(() => null);
      return lt !== null && lt.isDirectory() && lt.ino === M.ino && lt.dev === M.dev;
    },
    U = async () => {
      if (!(await F())) throw Error("the scratch directory is no longer the one this pass created");
    },
    B = 0,
    W = async () => (await U(), Fu(x, String(B++))),
    z = async (lt) => {
      if (await F()) await wO(lt, { recursive: true, force: true }).catch(() => {});
    },
    pe = false,
    fe = 0,
    me = true,
    ge = aH(C),
    Ce = (lt, mt) => {
      _.failed++, n(`materializeLinks: failed ${lt}: ${l(mt)}`, { level: "warn" });
    },
    Ie = async (lt) => {
      let mt = await kc(lt).catch(() => null);
      return mt !== null && !mt.isSymbolicLink();
    },
    Ee = async (lt, mt, Xe, nt) => {
      try {
        if (!(await kc(lt)).isSymbolicLink()) return;
        await Ii(lt, await W()), _.removed++, n(`materializeLinks: removed ${mt} -> ${Xe} (${nt})`);
      } catch (ht) {
        if (E(ht) !== "ENOENT" || (await kc(lt).catch(() => null))?.isSymbolicLink() === true) Ce(mt, ht);
      }
    },
    Pe = async (lt, mt, Xe, nt = "dangling") => {
      if (!A || (await FWe(C, x))) {
        if (d === "install") {
          Ce(
            mt,
            Error(
              "link does not resolve and the tree could not be settled this time (a sweep step the OS refused, or another pass is live)",
            ),
          );
          return;
        }
        n(
          `materializeLinks: left ${mt} -> ${Xe}: does not resolve while another pass may be converting this tree; judged on a later load`,
        ),
          fe++,
          (me = false);
        return;
      }
      return Ee(lt, mt, Xe, nt);
    },
    Oe = (lt, mt, Xe, nt) => {
      if (d === "migrate") return Ee(lt, mt, Xe, "over copy budget");
      throw nt;
    },
    Fe = (lt) => {
      (u.entries = lt.entries), (u.bytes = lt.bytes);
    },
    Be = async (lt, mt, Xe, nt, ht) => {
      let At = { ...u };
      try {
        XR(u, 1, ht);
      } catch (Lt) {
        if ((Fe(At), Lt instanceof Z4)) return Oe(lt, mt, Xe, Lt);
        throw Lt;
      }
      let dn = await W();
      try {
        await hB(nt, dn, { exclusive: true, exactMode: true, nonBlocking: true }),
          await ze(dn, lt, mt),
          _.materialized++,
          n(`materializeLinks: copied ${mt} (was symlink -> ${Xe})`);
      } catch (Lt) {
        if ((await z(dn), Fe(At), !(await Ie(lt)))) Ce(mt, Lt);
      }
    },
    ze = async (lt, mt, Xe) => {
      try {
        if ((await U(), !(await kc(lt)).isFile())) throw Gme("file");
        await Ii(lt, mt);
      } catch (nt) {
        let ht = E(nt);
        if (ht === void 0 || !L_.has(ht)) throw nt;
        let At = await kc(mt).catch(() => null);
        if (At === null || !At.isSymbolicLink()) throw nt;
        let dn = await W();
        await J4(dn + t5, Xe, { flag: "wx" });
        let Lt = await kc(mt).catch(() => null);
        if (Lt === null || !Lt.isSymbolicLink()) throw nt;
        await U(), await Ii(mt, dn + EB);
        try {
          if ((await U(), !(await kc(lt)).isFile())) throw Gme("file");
          await Ii(lt, mt);
        } catch (fn) {
          if (!(await Ie(mt)) && (await F()))
            await Ii(dn + EB, mt).catch(() => {
              pe = true;
            });
          throw fn;
        }
      }
    },
    We = async (lt, mt, Xe, nt) => {
      let ht = await W(),
        At = { ...u };
      try {
        XR(u, 1, 0), await t(nt, ht, nt, ht, C, true, new Set([nt]), u, true);
      } catch (dn) {
        if ((await z(ht), Fe(At), dn instanceof Z4)) return Oe(lt, mt, Xe, dn);
        return Ce(mt, dn);
      }
      try {
        let dn = await W();
        await J4(dn + t5, mt, { flag: "wx" });
        let Lt = await kc(lt).catch(() => null);
        if (Lt === null || !Lt.isSymbolicLink()) {
          await z(ht), Fe(At);
          return;
        }
        await U(), await Ii(lt, dn + EB);
        try {
          if ((await U(), !(await kc(ht)).isDirectory())) throw Gme("directory");
          await Ii(ht, lt);
        } catch (fn) {
          if (!(await Ie(lt)) && (await F()))
            await Ii(dn + EB, lt).catch(() => {
              pe = true;
            });
          throw fn;
        }
        _.materialized++, n(`materializeLinks: copied ${mt} (was symlink -> ${Xe})`);
      } catch (dn) {
        if ((await z(ht), Fe(At), !(await Ie(lt)))) Ce(mt, dn);
      }
    },
    Ve = async (lt, mt, Xe) => {
      let nt = Fu(lt, mt),
        ht = Tb(C, nt),
        At;
      try {
        At = await Q4(nt);
      } catch (Sn) {
        let bn = E(Sn);
        if (bn !== "EINVAL" && bn !== "ENOENT") Ce(ht, Sn);
        return;
      }
      if (Xe === 0 && !bwe(mt) && CO(mt)) return Ee(nt, ht, At, "reserved name");
      let dn;
      try {
        dn = await AB(nt, ge, At, { trustedRoot: C });
      } catch (Sn) {
        Ce(ht, Sn);
        return;
      }
      if (dn === "network") return Ee(nt, ht, At, "network target");
      if (dn === "unsupported") return Ee(nt, ht, At, "unsupported target spelling");
      if (dn !== "clean") return Pe(nt, ht, At);
      let Lt;
      try {
        Lt = await VR(nt);
      } catch (Sn) {
        let bn = E(Sn);
        if (bn === "ENOENT" || bn === "ENOTDIR") return Pe(nt, ht, At);
        Ce(ht, Sn);
        return;
      }
      if (!xg(Lt, C)) return Ee(nt, ht, At, "escapes plugin root");
      if (ct(ht)) {
        ut.push({ linkPath: nt, rel: ht, target: At });
        return;
      }
      if (xg(lt, Lt)) return Ee(nt, ht, At, "ancestor cycle");
      let fn;
      try {
        fn = await kc(Lt);
      } catch (Sn) {
        let bn = E(Sn);
        if (bn === "ENOENT" || bn === "ENOTDIR") return Pe(nt, ht, At);
        Ce(ht, Sn);
        return;
      }
      if (fn.isSymbolicLink()) {
        Ce(ht, Error("target swapped for a link since it was resolved"));
        return;
      }
      if (!fn.isFile() && !fn.isDirectory()) return Ee(nt, ht, At, "non-regular target");
      if (fn.isFile()) return Be(nt, ht, At, Lt, fn.size);
      return We(nt, ht, At, Lt);
    },
    Pt = (lt) => wP(mM(lt), LD),
    ct = Jme,
    ut = [],
    en = async () => {
      let lt = ut.slice();
      for (let mt = 0; mt <= ut.length; mt++) {
        let Xe = await Promise.all(
          lt.map(async (ht) => {
            try {
              let At = await AB(ht.linkPath, ge, void 0, { trustedRoot: C });
              if (At === "network") return "network target after conversion";
              if (At === "unsupported") return "unsupported target spelling";
              if (At !== "clean") return "dangling after conversion";
              let dn = await VR(ht.linkPath);
              return xg(dn, C) ? null : "escapes plugin root after conversion";
            } catch (At) {
              let dn = E(At);
              return dn === "ENOENT" || dn === "ENOTDIR" ? "dangling after conversion" : "unexamined";
            }
          }),
        );
        if (Xe.every((ht) => ht === null)) return;
        let nt = [];
        for (let [ht, At] of lt.entries()) {
          let dn = Xe[ht];
          if (dn === null || dn === void 0) nt.push(At);
          else if (dn === "unexamined")
            if (d === "install") Ce(At.rel, Error("kept link could not be re-checked after conversion"));
            else
              n(
                `materializeLinks: left ${At.rel} -> ${At.target}: could not be re-checked after the conversion; judged on a later load`,
              ),
                fe++,
                (me = false);
          else if (dn === "dangling after conversion") await Pe(At.linkPath, At.rel, At.target, dn);
          else await Ee(At.linkPath, At.rel, At.target, dn);
        }
        lt = nt;
      }
    },
    nn = async (lt, mt) => {
      let Xe;
      try {
        Xe = await vO(lt, { withFileTypes: true });
      } catch (nt) {
        Ce(Tb(C, lt) || ".", nt);
        return;
      }
      for (let nt of Xe) {
        let ht;
        try {
          ht = await lue(lt, nt);
        } catch (At) {
          if (E(At) !== "ENOENT") Ce(Tb(C, Fu(lt, nt.name)), At);
          continue;
        }
        if (ht.isDirectory) {
          if (mt === 0 && Pt(nt.name)) continue;
          let At;
          try {
            At = await kc(Fu(lt, nt.name));
          } catch (dn) {
            if (E(dn) !== "ENOENT") Ce(Tb(C, Fu(lt, nt.name)), dn);
            continue;
          }
          if (At.isSymbolicLink()) await Ve(lt, nt.name, mt);
          else if (At.isDirectory()) {
            let dn =
              D() !== "windows"
                ? true
                : await Q_(lt, nt.name).catch((Lt) => {
                    if (E(Lt) !== "ENOENT") Ce(Tb(C, Fu(lt, nt.name)), Lt);
                    return null;
                  });
            if (dn === null) continue;
            if (!dn) {
              Ce(Tb(C, Fu(lt, nt.name)), Error("directory resolves elsewhere (reparse point)"));
              continue;
            }
            await nn(Fu(lt, nt.name), mt + 1);
          }
        } else if (ht.isSymbolicLink) await Ve(lt, nt.name, mt);
      }
    },
    xt = setInterval(iXt, Kme / 4, x);
  xt.unref();
  let tt = false;
  try {
    await nn(C, 0), await en();
  } finally {
    clearInterval(xt);
    let lt = await F().catch(() => false);
    if (!pe && !lt)
      n(`materializeLinks: ${e}: ${x} is no longer the folder this pass made; left in place, tree not vouched for`, {
        level: "warn",
      });
    tt =
      !pe &&
      lt &&
      (await wO(x, { recursive: true, force: true }).then(
        () => true,
        (mt) => (n(`materializeLinks: ${e}: cannot remove ${x}: ${l(mt)}`, { level: "warn" }), false),
      ));
  }
  if (_.failed === 0 && A && me && tt && !(d === "migrate" && (await FWe(C, x))))
    if (d === "migrate" && !(await uXt(C))) {
      if (fe === 0) _.settledUnvouched = true;
    } else _.vouched = await pXt(e, C, _);
  return (
    n(
      `materializeLinks: ${e}: materialized=${_.materialized} removed=${_.removed} failed=${_.failed}${fe > 0 ? ` left-for-later=${fe}` : ""} in ${Math.round(performance.now() - o)}ms`,
    ),
    _
  );
}

async function lE(e) {
  try {
    return await e;
  } catch (t) {
    let r = E(t);
    if (r !== void 0 && cE.has(r)) return Rw;
    throw t;
  }
}

async function cXt(e, t, r, o = false) {
  let u = true;
  if (r === "install") {
    if (!(await Xme(t, LD))) u = false;
    if (o) {
      if ((await lE(nC(Fu(t, Mu)))) === Rw) u = false;
    } else if (!(await Xme(t, Mu))) u = false;
  }
  let d = await lE(vO(t));
  if (d === Rw) return n(`materializeLinks: ${e}: cannot list the tree this time; not stamping`), false;
  for (let _ of d) {
    if (!wP(mM(_), LD)) continue;
    let C = Fu(t, _);
    if (r === "migrate") {
      let M = await lE(
        kc(C).catch((U) => {
          if (E(U) === "ENOENT") return null;
          throw U;
        }),
      );
      if (M === null) continue;
      if (M === Rw) {
        u = false;
        continue;
      }
      if (!M.isDirectory()) {
        if ((await lE(wO(C, { force: true }))) === Rw) u = false;
        continue;
      }
      if (n5(M.mtimeMs)) {
        (u = false), n(`materializeLinks: ${e}: ${_} may belong to a pass in progress; not stamping this time`);
        continue;
      }
      let F = await Yme(t, _);
      if (F === null) continue;
      if (F) {
        if ((await Vme(C)) !== true) u = false;
        continue;
      }
      if (!(await dXt(e, t, C))) {
        u = false;
        continue;
      }
    }
    let A = await Yme(t, _);
    if (A === null) continue;
    if (A) {
      if ((await Vme(C)) !== true) u = false;
      continue;
    }
    if ((await lE(wO(C, { recursive: true, force: true }))) === Rw) u = false;
  }
  return u;
}

async function Vme(e) {
  let t = await lE(nC(e));
  return t !== Rw && t !== "directory";
}

async function Yme(e, t) {
  if (D() !== "windows") return false;
  let r = await Q_(e, t).catch((o) => {
    let u = E(o);
    if (u === "ENOENT") return null;
    if (u !== void 0 && cE.has(u)) return false;
    throw o;
  });
  return r === null ? null : !r;
}

async function Xme(e, t) {
  let r = await Yme(e, t);
  if (r === null) return true;
  if (r) return Vme(Fu(e, t));
  return (await lE(wO(Fu(e, t), { recursive: true, force: true }))) !== Rw;
}

async function uXt(e) {
  return (await vO(e).catch(() => [])).some((r) => !CO(r));
}

async function FWe(e, t) {
  let r = await vO(e).catch((o) => (E(o) === "ENOENT" ? [] : null));
  if (r === null) return true;
  return r.some((o) => wP(mM(o), LD) && Fu(e, o) !== t);
}

async function dXt(e, t, r) {
  let o = true,
    u = aH(t),
    d = await lE(
      vO(r).catch((_) => {
        if (E(_) === "ENOENT") return [];
        throw _;
      }),
    );
  if (d === Rw) return false;
  for (let _ of d) {
    if (!_.endsWith(t5)) continue;
    let C = Fu(r, _.slice(0, -t5.length) + EB);
    try {
      let A = Fu(r, _),
        x = await Dme(A, rXt, { throwTransient: true });
      if (x === null) continue;
      let M = Fu(t, x),
        F = Tb(t, M).split(YR)[0] ?? "";
      if (
        Qme(x) ||
        M === t ||
        !xg(M, t) ||
        bwe(F) ||
        wP(mM(F), LD) ||
        !(await kc(C)).isSymbolicLink() ||
        (await lXt(t, Tb(t, CB(M)), u, { trustedRoot: t })) !== "clean" ||
        !xg(await VR(CB(M)), t)
      )
        continue;
      let U = await kc(M).then(
        () => "present",
        (B) => (E(B) === "ENOENT" ? "vacant" : "unknown"),
      );
      if (U === "present") continue;
      if (U === "unknown") {
        o = false;
        continue;
      }
      await Ii(C, M), n(`materializeLinks: ${e}: restored ${x} from an interrupted pass`);
    } catch (A) {
      let x = E(A);
      if (x === "ENOENT") continue;
      if (
        (n(`materializeLinks: ${e}: cannot restore a parked entry from ${r}: ${l(A)}`, { level: "warn" }),
        x !== "ENAMETOOLONG" && x !== "EINVAL" && !(A instanceof TypeError))
      )
        o = false;
    }
  }
  return o;
}

async function r5(e) {
  let t = Fu(e, LD),
    r = [
      () => wO(t, { force: true }),
      () => Ii(t, mU(t)),
      async () => {
        let o = zme.O_NOFOLLOW;
        if (D() === "windows" || o === void 0) throw Error("in-place invalidation needs O_NOFOLLOW");
        let u = await kc(t, { bigint: true });
        if (!u.isFile()) throw Error("marker name is not a regular file");
        let d = await z3t(t, zme.O_WRONLY | o | (zme.O_NONBLOCK ?? 0));
        try {
          let _ = await d.stat({ bigint: true });
          if (!_.isFile() || _.nlink !== 1n || _.ino !== u.ino || _.dev !== u.dev)
            throw Error("marker is not the single-named regular file seen");
          await d.truncate(0),
            await d.write(
              `withdrawn
`,
              0,
            );
        } finally {
          await d.close();
        }
      },
    ];
  for (let o of r)
    try {
      return await o(), true;
    } catch (u) {
      n(`materializeLinks: ${e}: cannot withdraw ${LD}: ${l(u)}`, { level: "warn" });
    }
  return false;
}

async function pXt(e, t, r) {
  let o = Fu(t, LD),
    u = {
      at: new Date().toISOString(),
      cli: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.252",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-08-31T16:02:57Z",
        GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
      materialized: r.materialized,
      removed: r.removed,
      failed: r.failed,
    },
    d =
      b(u) +
      `
`;
  try {
    return await J4(o, d, { flag: "wx" }), true;
  } catch (_) {
    if (E(_) !== "EEXIST") return n(`materializeLinks: ${e}: cannot write ${LD}: ${l(_)}`, { level: "warn" }), false;
  }
  try {
    if (await jWe(t)) return true;
    return await Xme(t, LD), await J4(o, d, { flag: "wx" }), true;
  } catch (_) {
    return n(`materializeLinks: ${e}: cannot write ${LD}: ${l(_)}`, { level: "warn" }), false;
  }
}

function HWe(e, t, r, o, u) {
  if (!O() || o === void 0) return Promise.resolve();
  let d = NWe.get(o);
  if (d === void 0) (d = { attempts: new Map(), deferrals: new Map() }), NWe.set(o, d);
  let _ = d.attempts,
    C = _.get(e);
  if (C === void 0)
    (C = bXt(e, t, r, d.deferrals, u).then((A) => {
      if (!A) _.delete(e);
    })),
      _.set(e, C);
  return C;
}

async function jWe(e) {
  let t = Fu(e, LD),
    r = await kc(t).catch((u) => {
      if (E(u) === "ENOENT") return null;
      throw u;
    });
  if (r === null || !r.isFile() || r.size > DWe) return false;
  let o = await Dme(t, DWe);
  if (o === null) return false;
  try {
    return oXt().safeParse(V(o)).success;
  } catch {
    return false;
  }
}

async function mXt(e) {
  let t = Fu(e, Mu);
  try {
    let r = await nC(t);
    if (r === "removed") n(`materializeLinks: ${e}: removed ${Mu}: not a directory of markers`);
    return r;
  } catch (r) {
    let o = E(r);
    if (o === void 0 || !cE.has(o)) throw r;
    let u;
    try {
      u = await kc(t);
    } catch (d) {
      if (E(d) === "ENOENT") return "absent";
      throw d;
    }
    if (u.isDirectory())
      return (
        n(
          `materializeLinks: ${e}: cannot remove from ${Mu} (${o}): a directory of markers this process cannot write in is not listed, probed or converted in this process`,
        ),
        "directory-unproven"
      );
    if (u.isFile() || u.isFIFO() || u.isSocket())
      return (
        n(
          `materializeLinks: ${e}: cannot remove ${Mu} (${o}): not a directory of markers, nothing reads through it; proceeding`,
        ),
        "junk"
      );
    return (
      n(`materializeLinks: ${e}: cannot remove ${Mu} (${o}); leaving the tree as it is`, { level: "warn" }),
      "unremovable"
    );
  }
}

async function fXt(e) {
  let t = Fu(e, Mu),
    r = await SXt(e, t);
  if (r === null) return;
  let o = await vO(t, { withFileTypes: true }).catch((u) => {
    let d = E(u);
    if (d === "ENOENT" || d === "ENOTDIR") return [];
    if (d === void 0 || !cE.has(d)) throw u;
    return n(`materializeLinks: ${e}: cannot list ${Mu} (${d}); left for the probe to judge`, { level: "warn" }), [];
  });
  for (let u of o) {
    let d = Fu(t, u.name);
    if (!(await $We(t, r))) {
      n(`materializeLinks: ${e}: ${Mu} was replaced while its children were screened; left for the probe to judge`, {
        level: "warn",
      });
      return;
    }
    let _ = gXt(u.name),
      C = "nonRegular",
      A = "not a regular file";
    if (u.isDirectory()) {
      if (!_) {
        qme(e, u.name);
        continue;
      }
      (C = "directory"), (A = "wears a directory's type");
    } else if (!u.isSymbolicLink()) {
      let M;
      try {
        M = await kc(d);
      } catch (F) {
        let U = E(F);
        if (U === "ENOENT" || U === "ENOTDIR") M = null;
        else if (U !== void 0 && cE.has(U)) {
          n(`materializeLinks: ${e}: cannot examine ${Mu}/${u.name} (${U}); left for the probe to judge`, {
            level: "warn",
          });
          continue;
        } else throw F;
      }
      if (M === null) continue;
      if (M.isDirectory()) {
        if (!_) {
          qme(e, u.name);
          continue;
        }
        (C = "directory"), (A = "wears a directory's type");
      } else if (M.isFile()) {
        if (!_) {
          qme(e, u.name);
          continue;
        }
        if (M.size > e5) (C = "oversized"), (A = "larger than any marker");
        else if (M.size > 0 && !qR(u.name)) continue;
        else {
          if (n5(M.mtimeMs)) continue;
          (C = "staleLeftover"),
            (A = qR(u.name) ? "in-flight marker outside the live window" : "empty file outside the live window");
        }
      }
    }
    if (!(await $We(t, r))) {
      n(`materializeLinks: ${e}: ${Mu} was replaced while its children were screened; left for the probe to judge`, {
        level: "warn",
      });
      return;
    }
    if (!(await yXt(d, u.name, C))) continue;
    let x;
    try {
      x = C === "directory" ? await hXt(d) : await nC(d);
    } catch (M) {
      let F = E(M);
      if (F === "ENOTDIR") return;
      if (F === void 0 || !cE.has(F)) throw M;
      n(`materializeLinks: ${e}: cannot remove ${Mu}/${u.name} (${F}); left for the probe to judge`, { level: "warn" });
      continue;
    }
    if (x === "removed") n(`materializeLinks: ${e}: removed ${Mu}/${u.name}: ${A}`);
    else if (x === "directory") n(`materializeLinks: ${e}: left ${Mu}/${u.name}: a directory, not a session's marker`);
  }
}

function gXt(e) {
  return /^[0-9]+(\.tmp\.[0-9a-f]+)?$/i.test(e);
}

async function hXt(e) {
  try {
    return await q3t(e), "removed";
  } catch (t) {
    let r = E(t);
    if (r === "ENOENT") return "absent";
    if (r === "ENOTEMPTY" || r === "EEXIST") return "directory";
    throw t;
  }
}

async function yXt(e, t, r) {
  let o = await kc(e).catch(() => null);
  if (o === null || _Xt(o, t)) return false;
  switch (r) {
    case "nonRegular":
      return !o.isFile() && !o.isDirectory();
    case "directory":
      return o.isDirectory();
    case "oversized":
      return o.isFile() && o.size > e5;
    case "staleLeftover":
      return o.isFile() && o.size <= e5 && (o.size === 0 || qR(t)) && !n5(o.mtimeMs);
  }
}

function _Xt(e, t) {
  return /^[0-9]+$/.test(t) && e.isFile() && e.size <= e5 && (e.size > 0 || n5(e.mtimeMs));
}

function qme(e, t) {
  n(`materializeLinks: ${e}: left ${Mu}/${t}: not named like a session's marker; the probe judges it`);
}

async function SXt(e, t) {
  try {
    let r = await kc(t, { bigint: true });
    if (!r.isSymbolicLink() && r.isDirectory() && (await Q_(e, Mu))) return r;
    let o = await nC(t);
    return (
      n(
        `materializeLinks: ${e}: ${Mu} re-screened before listing: no longer a real directory (${o === "directory" ? "left, a non-empty directory" : o})`,
      ),
      null
    );
  } catch (r) {
    let o = E(r);
    if (o === "ENOENT" || o === "ENOTDIR") return null;
    if (o === void 0 || !cE.has(o)) throw r;
    return (
      n(`materializeLinks: ${e}: cannot re-examine ${Mu} (${o}); left for the probe to judge`, { level: "warn" }), null
    );
  }
}

async function $We(e, t) {
  let r = await kc(e, { bigint: true }).catch(() => null);
  return r !== null && !r.isSymbolicLink() && r.isDirectory() && r.dev === t.dev && r.ino === t.ino;
}

async function bXt(e, t, r, o, u) {
  let d = Tb(t, e),
    _ = d.split(YR);
  if (!d || Qme(d) || _.length !== 3 || _.some((C) => C === "" || C === "." || C === "..")) return true;
  try {
    if (e.endsWith(".zip")) {
      let U = await kc(e).catch((B) => {
        let W = E(B);
        if (W === "ENOENT" || W === "ENOTDIR") return null;
        throw B;
      });
      if (U === null || !U.isDirectory()) return true;
    }
    let C = await kc(e);
    if (C.isSymbolicLink() || (D() === "windows" && !(await Q_(CB(e), V3t(e)))))
      return n(`materializeLinks: skipping ${e}: version dir is a symlink (or can be read as a link)`), true;
    if (!C.isDirectory()) return true;
    let [A, x] = await Promise.all([VR(e), VR(t)]);
    if (A === x || !xg(A, x)) return n(`materializeLinks: skipping ${e}: resolves outside the plugin cache`), true;
    let M = await mXt(A);
    if (M === "unremovable" || M === "directory-unproven" || (await jWe(e))) return true;
    if (M === "directory") await fXt(A);
    if (u !== void 0 && (await u())) {
      let U = await kc(e, { bigint: true }),
        B = o.get(A);
      if (
        B !== void 0 &&
        (B.ino !== U.ino || (B.birthtimeNs !== 0n && U.birthtimeNs !== 0n && B.birthtimeNs !== U.birthtimeNs))
      )
        B = void 0;
      let W = Date.now();
      if (B === void 0) o.set(A, { since: W, announced: false, versionPath: e, ino: U.ino, birthtimeNs: U.birthtimeNs });
      if (B === void 0 || W - B.since < nXt)
        return (
          n(`materializeLinks: deferring ${A}: in use (possibly by this session), or liveness could not be determined`),
          false
        );
      if (!B.announced)
        (B.announced = true),
          n(
            `materializeLinks: ${A}: deferred since ${new Date(B.since).toISOString()} to in-use markers that still read live, or a liveness probe that kept failing; converting now`,
            { level: "warn" },
          );
    } else o.delete(A);
    if ((await VR(e)) !== A)
      return n(`materializeLinks: ${e}: moved while its liveness was probed; judged on a later load`), false;
    let F = await cH(e, r, { mode: "migrate" });
    return o.delete(A), F.vouched || F.readOnly || F.settledUnvouched === true;
  } catch (C) {
    let A = E(C);
    if (A === "ENOENT") {
      for (let [x, M] of o) if (M.versionPath === e) o.delete(x);
      return false;
    }
    return n(`materializeLinks: ${e}: ${l(C)}`, { level: "warn" }), A === void 0 || !sXt.has(A);
  }
}

function Ym(e) {
  let t = E(e);
  return t === "ENOENT" || t === "ENOTDIR";
}

function s5(e) {
  return `${e}${efe}${kXt(4).toString("hex")}`;
}

function vXt(e, t) {
  if (e.startsWith(t + efe) && TXt.test(e.slice(t.length + efe.length))) return "current";
  return wP(e, t) ? "scratch" : null;
}

async function pH(e, t) {
  if (
    (await wXt(RO(e, gI), { force: true }),
    !(await rS(t).then(
      () => false,
      (o) => {
        if (Ym(o)) return true;
        throw o;
      },
    )))
  )
    throw Object.assign(Error("plugin cache version path is occupied"), { code: "EEXIST" });
  await Ii(e, t);
}

async function GWe(e, t) {
  try {
    let r = new Set(await xO(e));
    return t.some((o) => r.has(o));
  } catch (r) {
    return !Ym(r);
  }
}

async function CXt(e) {
  let t = await xO(e).catch(() => []),
    r = Date.now() - _fe;
  for (let o of t) {
    if (!EXt.test(o) && !EAt(o)) continue;
    let u = RO(e, o),
      d = await rS(u).catch(() => null);
    if (d !== null && d.isFile() && d.mtimeMs < r) await o5(u).catch(() => {});
  }
}

function IO(e) {
  return CO(e) || EAt(mM(e));
}

async function QR(e, { whenUnreadable: t = true } = {}) {
  try {
    return (await xO(e)).some((r) => !IO(r));
  } catch (r) {
    if (Ym(r)) return false;
    if (t) return true;
    if (Ht(r)) return false;
    throw r;
  }
}

async function dH(e, t) {
  if (t.isSymbolicLink()) return true;
  if (!t.isDirectory()) return false;
  try {
    return !(await Q_(zWe(e), WWe(e)));
  } catch (r) {
    return !Ym(r);
  }
}

function i5(e) {
  return new R(e, "plugin cache version path occupant could not be examined");
}

async function Sh(e) {
  try {
    let t = await rS(e);
    return (await dH(e, t)) ? "symlink" : "other";
  } catch (t) {
    return Ym(t) ? "absent" : "unexaminable";
  }
}

function mH(e) {
  return /\.tmp~[0-9a-f]{8}$/.test(e);
}

async function fH(e) {
  let t = zWe(e),
    r = WWe(e),
    o = await xO(t).catch(() => []),
    u = Date.now() - qWe;
  await Promise.all(
    o.map(async (d) => {
      let _ = vXt(d, r);
      if (_ === null) return;
      let C = RO(t, d),
        A = await rS(C).catch(() => null);
      if (A === null || A.mtimeMs >= u) return;
      if (await dH(C, A)) {
        await o5(C).catch(() => Zme(C).catch(() => {}));
        return;
      }
      if (_ === "scratch") {
        if (!A.isDirectory()) await o5(C).catch(() => {});
        return;
      }
      await Tc(C).catch(() => {});
    }),
  );
}

async function DO(e) {
  let t;
  try {
    t = await rS(e);
  } catch (o) {
    if (!Ym(o)) return "held";
    t = null;
  }
  if (t !== null && (await dH(e, t))) return "held";
  let r;
  try {
    r = await xO(e);
  } catch (o) {
    let u = E(o);
    if (u === "ENOENT") return "removed";
    if (u !== "ENOTDIR") throw o;
    let d;
    try {
      d = await rS(e);
    } catch (_) {
      if (!Ym(_)) return "held";
      d = null;
    }
    if (d === null) return "removed";
    if (d.isDirectory() || d.isSymbolicLink() || e.endsWith(".zip")) return "held";
    return await o5(e), "removed";
  }
  for (let o of r) {
    if (!IO(o)) return "held";
    if (bwe(o)) {
      let u = await rS(RO(e, o)).catch(() => null);
      if (u === null || JF(u.mtimeMs, AXt)) return "held";
    }
  }
  for (let o of r) {
    let u = RO(e, o),
      d = mM(o);
    try {
      if (d === Mu) {
        let _ = await rS(u).catch(() => null);
        if (_ !== null && !_.isDirectory()) {
          if ((await nC(u)) === "directory") return "held";
        } else {
          if (_ !== null && !(await dH(u, _))) await CXt(u);
          await Zme(u);
        }
      } else if (d === "node_modules" || wP(d, LD) || wP(d, "node_modules")) {
        let _ = await rS(u).catch((C) => {
          if (Ym(C)) return null;
          throw C;
        });
        if (_ !== null && (await dH(u, _))) {
          if ((await nC(u)) === "directory") return "held";
        } else if (d === "node_modules") {
          let C = mU(u);
          await Ii(u, C), await Tc(C);
        } else await Tc(u);
      } else if ((await nC(u)) === "directory") return "held";
    } catch (_) {
      let C = E(_);
      if (C === "ENOTEMPTY" || C === "EEXIST") return "held";
      if (!Ym(_)) throw _;
    }
  }
  try {
    return await Zme(e), "removed";
  } catch (o) {
    let u = E(o);
    if (u === "ENOTEMPTY" || u === "EEXIST") return "held";
    if (Ym(o)) return "removed";
    throw o;
  }
}

async function KWe(e) {
  let t = Date.now() - qWe;
  try {
    if ((await rS(e)).mtimeMs >= t) return false;
    let r = await xO(e);
    if ((await Promise.all(r.map((u) => rS(RO(e, u)).catch(() => null)))).some((u) => u === null || u.mtimeMs >= t))
      return false;
  } catch {
    return false;
  }
  return DO(e).then(
    (r) => r === "removed",
    (r) => (n(`Plugin cache: cannot remove leftover ${e}: ${l(r)}`), false),
  );
}

async function tfe(e) {
  await Tc(e).catch(() => {});
}

async function vb(e, t) {
  let r = nfe(t);
  for (let o = nfe(e); ; o = nfe(o)) {
    let u = await Sh(o);
    if (u === "symlink" || u === "unexaminable") return true;
    if (o === r || !o.startsWith(r + RXt)) return false;
  }
}

function l5(e) {
  let t = (o, u) => {
      let d = xC(o, u);
      return d.settings === null && toe(d.errors).length > 0;
    },
    r = ["userSettings", "localSettings", "flagSettings"].some((o) => {
      let u = Mo(o);
      if (u === void 0) return false;
      switch (o) {
        case "flagSettings":
          return t(u, vR() ?? tme());
        case "localSettings": {
          let d = $H();
          return t(u) || (d !== void 0 && d !== u && t(d));
        }
        case "userSettings":
          return t(u);
      }
    });
  return (
    !Wwt(e.settingKey) ||
    (SO().length > 0 && cS() !== "helper") ||
    r ||
    tEn(e.settingKey) ||
    (nme() && xpe()) ||
    MAe(e.policyKey) === "org_denied" ||
    MAe(e.policyKey) === "unregistered"
  );
}

function c5(e) {
  if (!Wwt(e.settingKey)) return false;
  if (!e.isTierInPlay()) return false;
  if (Ne() !== "firstParty") return false;
  if (a.ANTHROPIC_UNIX_SOCKET) return false;
  if ($n()) return false;
  if (Fl().source !== "claude.ai") return false;
  if (Ct()) return false;
  if (!LAe(e.policyKey)) return false;
  return p5(e);
}

function u5() {
  return Fl().source === "claude.ai" && !$n();
}

function p5(e) {
  return I(e.flagName, false) === true;
}

function m5(e) {
  return !Qgn() && MAe(e.policyKey) === "cache_miss";
}

function f5(e) {
  return [...INe(), ye("userSettings")].some((r) => r?.[e.settingKey] === false) || MAe(e.policyKey) === "org_denied";
}

function mNt() {
  gNt();
  let e = PXt() && !F4();
  return zHn(e), e;
}

function gNt() {
  VHn(l5(FO));
}

function VWe() {
  return gNt(), F4();
}

function YWe() {
  return bve().length > 0 || t3e();
}

function t3e() {
  return rfe() || (p5(FO) && u5());
}

function hWn() {
  return p5(FO);
}

function rfe() {
  return a.CLAUDE_CODE_SYNC_PLUGINS || a.CLAUDE_CODE_SYNC_SESSION_REFS;
}

function XWe() {
  return m5(FO);
}

function bH() {
  return !ho("plugins") && _o("userSettings");
}

function PXt() {
  return c5(FO);
}

function QWe() {
  return f5(FO);
}

function g5(e) {
  return e !== void 0 && tWt(e) ? e : null;
}

async function N8(e) {
  let t = PT(),
    r = g5(a.CLAUDE_CODE_ORGANIZATION_UUID ?? t?.organizationUuid);
  if (r === null) return null;
  switch (await IT(e)) {
    case "store": {
      let o = g5(t?.accountUuid);
      return o === null ? null : K_t(r, o);
    }
    case "none":
      if (Fl().source === "claude.ai") return null;
      return K_t(r, g5(a.CLAUDE_CODE_ACCOUNT_UUID) ?? void 0);
    case "env":
    case "fd":
      return K_t(r, g5(a.CLAUDE_CODE_ACCOUNT_UUID) ?? void 0);
  }
}

function h5() {
  let e = PT();
  return `${a.CLAUDE_CODE_ORGANIZATION_UUID ?? e?.organizationUuid ?? ""}_${e?.accountUuid ?? a.CLAUDE_CODE_ACCOUNT_UUID ?? ""}`;
}

function PB() {
  return a.CLAUDE_CODE_PLUGIN_USE_ZIP_CACHE;
}

function Tct() {
  if (!PB()) return;
  let e = a.CLAUDE_CODE_PLUGIN_CACHE_DIR;
  return e ? km(e) : void 0;
}

function qin() {
  let e = Tct();
  if (!e) throw Error("Plugin zip cache is not enabled");
  return Mw(e, "known_marketplaces.json");
}

function _Wn() {
  let e = Tct();
  if (!e) throw Error("Plugin zip cache is not enabled");
  return Mw(e, "marketplaces");
}

function yWn() {
  let e = Tct();
  if (!e) throw Error("Plugin zip cache is not enabled");
  return Mw(e, "plugins");
}

function o1e() {
  return $Xt.of(G().host);
}

async function kH() {
  let e = o1e().current();
  if (e.path) return e.path;
  if (!e.promise)
    e.promise = (async () => {
      let t = xXt(8).toString("hex"),
        r = Mw(ly(), `claude-plugin-session-${t}`);
      return await le().mkdir(r), (e.path = r), n(`Created session plugin cache at ${r}`), r;
    })();
  return e.promise;
}

function SWn() {
  let e = o1e();
  return e.existing(e.key())?.path ?? null;
}

async function hNt(e, t) {
  await le().mkdir(ZWe(e)), await Wn(e, t);
}

async function UXt(e) {
  let t = {};
  await i1e(e, "", t, new Set());
  let { zipSync: o } = await import("/$bunfs/root/chunk-y69hp76g.js"),
    u = o(t, { level: 6 });
  return n(`Created ZIP from ${e}: ${Object.keys(t).length} files, ${u.length} bytes`), u;
}

async function i1e(e, t, r, o) {
  let u = t ? Mw(e, t) : e,
    d;
  try {
    d = await OXt(u);
  } catch {
    return;
  }
  try {
    let _ = await FXt(u, { bigint: true });
    if (_.dev !== 0n || _.ino !== 0n) {
      let C = `${_.dev}:${_.ino}`;
      if (o.has(C)) {
        n(`Skipping symlink cycle at ${u}`);
        return;
      }
      o.add(C);
    }
  } catch {
    return;
  }
  for (let _ of d) {
    if (_ === ".git") continue;
    let C = Mw(u, _),
      A = t ? `${t}/${_}` : _,
      x;
    try {
      x = await IXt(C);
    } catch {
      continue;
    }
    if (x.isSymbolicLink()) continue;
    if (x.isDirectory()) await i1e(e, A, r, o);
    else if (x.isFile())
      try {
        let M = await DXt(C);
        r[A] = [new Uint8Array(M), { os: 3, attrs: (x.mode & 65535) << 16 }];
      } catch (M) {
        n(`Failed to read file for zip: ${A}: ${M}`);
      }
  }
}

async function uye(e, t, r) {
  let o = await le().readFileBytes(e);
  await ofe(o, t, r);
}

async function ofe(e, t, r) {
  let o = await sye(e),
    u = NI(e);
  await le().mkdir(t);
  let d = [];
  for (let [_, C] of Object.entries(o)) {
    if (r?.skipEntry?.(_)) continue;
    if (_.endsWith("/")) {
      await le().mkdir(Mw(t, _));
      continue;
    }
    let A = Mw(t, _);
    await le().mkdir(ZWe(A)), await NXt(A, C), d.push(_);
    let x = u[_];
    if (x && x & 73) await MXt(A, x & 511).catch(() => {});
  }
  return n(`Extracted ZIP to ${t}: ${Object.keys(o).length} entries`), d;
}

async function _5(e, t) {
  let r = await UXt(e);
  await hNt(t, r),
    await Tc(e).catch((o) => {
      n(`Failed to remove ${e} after publishing its zip archive: ${l(o)}`, { level: "warn" });
    });
}

function bWn(e) {
  let t = e.replace(/[^a-zA-Z0-9\-_]/g, "-");
  return Mw("marketplaces", `${t}.json`);
}

function wWn(e) {
  return ["github", "git", "url", "settings"].includes(e.source);
}

function dye(e) {
  let t = e.sessionRefsGate;
  if (t.ccrSessionID() === void 0) {
    let r = a.CLAUDE_CODE_SESSION_ID;
    if (r && Tr(r) !== r) t.latchCcrSessionID(r);
  }
  return t.ccrSessionID();
}

function BXt(e) {
  return dye(e) !== void 0;
}

function Wxe(e) {
  let t = e.sessionRefsGate.syncEnabled();
  if (t !== void 0) return t;
  return e.sessionRefsGate.latchSyncEnabled(!!a.CLAUDE_CODE_SYNC_SESSION_REFS && BXt(e));
}

async function zXt() {
  let e = await a1e();
  if (e.ok || e.reason === "no_auth" || e.reason === "gated") return e;
  return await ne(WXt), a1e();
}

async function a1e() {
  try {
    let e = await bt.get("/worker/skill-manifest", {
      host: "ccr-session",
      auth: "session-jwt",
      headers: { "anthropic-version": "2023-06-01" },
      timeout: jXt,
      validateStatus: () => true,
    });
    if (!e.ok) {
      if (e.reason === "no-auth") return Y("warn", "session_refs_manifest_no_auth"), { ok: false, reason: "no_auth" };
      return Y("warn", "session_refs_manifest_gated", { reason: e.reason }), { ok: false, reason: "gated" };
    }
    if (e.status === 503) return Y("warn", "session_refs_manifest_unavailable"), { ok: false, reason: "unavailable" };
    if (e.status >= 300)
      return Y("warn", "session_refs_manifest_http_error", { status: e.status }), { ok: false, reason: "http_error" };
    let t = HXt().safeParse(e.data);
    if (!t.success) return Y("warn", "session_refs_manifest_malformed"), { ok: false, reason: "malformed" };
    return { ok: true, skills: t.data.skills.filter((r) => r.id), plugins: t.data.plugins.filter((r) => r.id) };
  } catch (e) {
    let { kind: t } = os(e);
    return Y("warn", "session_refs_manifest_exception", { kind: t }), { ok: false, reason: "transport" };
  }
}

function GXt(e, t, r, o) {
  var u = e.length,
    d = r + (o ? 1 : -1);
  while (o ? d-- : ++d < u) if (t(e[d], d, e)) return d;
  return -1;
}

function qXt(e) {
  return e !== e;
}

function KXt(e, t, r) {
  var o = r - 1,
    u = e.length;
  while (++o < u) if (e[o] === t) return o;
  return -1;
}

function VXt(e, t, r) {
  return t === t ? m1e(e, t, r) : u1e(e, d1e, r);
}

function YXt(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && f1e(e, t, 0) > -1;
}

function XXt(e, t, r) {
  var o = -1,
    u = e == null ? 0 : e.length;
  while (++o < u) if (r(t, e[o])) return true;
  return false;
}

function e9t(e, t, r) {
  var o = -1,
    u = g1e,
    d = e.length,
    _ = true,
    C = [],
    A = C;
  if (r) (_ = false), (u = h1e);
  else if (d >= ZXt) {
    var x = t ? null : y1e(e);
    if (x) return cQe(x);
    (_ = false), (u = CVt), (A = new AVt());
  } else A = t ? [] : C;
  e: while (++o < d) {
    var M = e[o],
      F = t ? t(M) : M;
    if (((M = r || M !== 0 ? M : 0), _ && F === F)) {
      var U = A.length;
      while (U--) if (A[U] === F) continue e;
      if (t) A.push(F);
      C.push(M);
    } else if (!u(A, F, r)) {
      if (A !== C) A.push(F);
      C.push(M);
    }
  }
  return C;
}

function t9t(e, t) {
  return e && e.length ? S5(e, rx(t, 2)) : [];
}

function _Nt(e, t, r, o) {
  let u = o === void 0 ? void 0 : new Map(t.map((d) => [r(d), d]));
  return pu(
    [
      ...e.map((d) => {
        let _ = u?.get(r(d));
        return _ !== void 0 && o !== void 0 ? o(d, _) : d;
      }),
      ...t,
    ],
    r,
  );
}

function yNt(e, t, { idOf: r, dirFor: o, invalidNameTag: u, collisionTag: d, carry: _ }) {
  let C = (pe) => typeof pe === "object" && pe !== null;
  (e = Array.isArray(e) ? e.filter(C) : []), (t = Array.isArray(t) ? t.filter(C) : []);
  let A = new Map(t.map((pe) => [r(pe), pe])),
    x = new Set(e.map((pe) => r(pe))),
    M = new Set(),
    F = new Set(),
    U = [],
    B = [],
    W = new Set();
  for (let pe of e) {
    let fe = A.get(r(pe));
    if (fe !== void 0 && _ !== void 0) fe = _(fe, pe);
    let me;
    try {
      me = o(pe.name);
    } catch {
      if ((Y("warn", u), fe)) B.push(fe);
      continue;
    }
    if (F.has(VE(me))) {
      if ((Y("warn", d), fe)) B.push(fe);
      continue;
    }
    if (
      (M.add(me),
      F.add(VE(me)),
      !fe || fe.updatedAt !== pe.updatedAt || fe.name !== pe.name || fe.requestedVersion !== pe.requestedVersion)
    )
      U.push({ item: pe, prev: fe });
    else B.push(fe), W.add(r(fe));
  }
  let z = t.filter((pe) => !x.has(r(pe)));
  return { toDownload: U, toRemove: z, carryover: B, liveDirs: M, carryoverOwningLiveDir: W };
}

function dee(e) {
  return Array.isArray(e) ? e.filter((t) => typeof t === "string") : void 0;
}

function SNt(e, t, r, o, u = []) {
  let d = new Map();
  for (let _ of u) d.set(r(_), _);
  for (let _ of t ?? []) if (!o.has(r(_))) d.set(r(_), _);
  for (let _ of e) d.set(r(_), _);
  return Array.from(d.values());
}

function Ect(e, t, r) {
  let o = new Set(e ?? []);
  for (let u of dee(t) ?? []) o.add(u);
  for (let u of r) o.delete(u);
  return o.size > 0 ? Array.from(o) : void 0;
}

function qxe(e, t) {
  if (!Array.isArray(t)) return [];
  let r = [];
  for (let o of t) {
    let u = e.safeParse(o);
    if (u.success) r.push(u.data);
  }
  return r;
}

function bNt(e, t) {
  let r = new Set(t),
    o = {};
  for (let [u, d] of Object.entries(e ?? {})) if (!r.has(u)) o[u] = d;
  return o;
}

async function wNt(e, t) {
  try {
    return (await db(e, r3e)).content;
  } catch (r) {
    if (t !== null && !X(r)) {
      let o = E(r);
      Y("warn", t, { code: o === "ERR_FILE_TOO_LARGE" ? "parse_or_size" : (o ?? "unknown") });
    }
    return null;
  }
}

function TNt(e, t, r) {
  let o;
  try {
    o = V(e);
  } catch {
    if (r !== null) Y("warn", r, { code: "parse_or_size" });
    return null;
  }
  let u = t.safeParse(o);
  if (!u.success) {
    if (r !== null) Y("warn", r, { code: "not_an_object" });
    return null;
  }
  return u.data;
}

function JR(e) {
  return e
    .split(dfe)
    .join("/")
    .replaceAll("\\", "/")
    .split("/")
    .map((t) => qJn(t) ?? t)
    .join("/");
}

function vH(e, t, r) {
  if (!(O() && r !== void 0)) return;
  let o = TH(t, e);
  if (o === "" || o.startsWith("..") || b1e(o)) return;
  let [u, ...d] = o.split(dfe).filter(Boolean);
  if (u === void 0) return;
  let _ = u9t.get(u);
  if (_ === void 0 || !d.every(Zt)) return;
  let C = [{ namespace: "userConfigDir", dir: _ }];
  for (let A = 1; A <= d.length; A++) C.push({ namespace: "userConfigDir", dir: _, relPath: d.slice(0, A) });
  return { storageV5: r, chain: C, pipelineFolder: NO(t, u) };
}

function v5(e) {
  let t = e.at(-1);
  if (t === void 0) throw Error("empty sync-owned scope chain");
  return t;
}

function w1e(e) {
  return new R(
    `sync-owned path probe: unexpected answer ${String(e?.kind)}`,
    "sync-owned path probe: unexpected answer",
  );
}

function E5(e) {
  let t = iu(e);
  return Object.assign(
    new R(`sync-owned path probe failed: ${Ge(e)}`, "sync-owned path probe failed"),
    t !== void 0 ? { code: t } : {},
  );
}

async function w5(e, t, r) {
  let o = TH(t, e);
  if (o.startsWith("..") || b1e(o)) return "redirected";
  let u = vH(e, t, r);
  if (u !== void 0) {
    for (let [_, C] of u.chain.entries()) {
      let A = await u.storageV5.scopeKind(C, _ === 0 ? { resolveLink: true } : void 0);
      if (!A.ok) {
        if (_ === 0 && iu(A.error) === RJ) {
          let M = await lfe(u.pipelineFolder);
          if (M !== "directory") return M;
          continue;
        }
        throw E5(A.error);
      }
      let x = A.value;
      switch (x.kind) {
        case "directory":
          continue;
        case "absent":
          return "absent";
        case "other":
          return "not_a_directory";
        case "link":
          if (_ > 0 || x.linkResolves !== true) return "redirected";
          continue;
        default:
          throw w1e(x);
      }
    }
    return "real";
  }
  let d = t;
  for (let [_, C] of o.split(dfe).filter(Boolean).entries()) {
    d = NO(d, C);
    let A;
    try {
      A = await T5(d);
    } catch (x) {
      if (X(x)) return "absent";
      throw x;
    }
    if (A.isSymbolicLink()) {
      if (_ > 0) return "redirected";
      let x = await lfe(d);
      if (x !== "directory") return x;
      continue;
    }
    if (!A.isDirectory()) return "not_a_directory";
  }
  return "real";
}

async function lfe(e) {
  let t;
  try {
    t = await i9t(e);
  } catch (r) {
    if (X(r)) return "redirected";
    throw r;
  }
  return t.isDirectory() ? "directory" : "not_a_directory";
}

function T1e(e) {
  let t = NO(e, NM);
  return [
    [t, "staging"],
    [NO(t, String(process.pid)), "staging_pid"],
  ];
}

async function b5(e, t, r) {
  let o = vH(e, t, r);
  if (o !== void 0) {
    let d = await o.storageV5.scopeKind(v5(o.chain));
    if (!d.ok) throw E5(d.error);
    switch (d.value.kind) {
      case "absent":
      case "directory":
        return d.value.kind;
      case "link":
        return "redirected";
      case "other":
        return "not_a_directory";
      default:
        throw w1e(d.value);
    }
  }
  let u;
  try {
    u = await T5(e);
  } catch (d) {
    if (X(d)) return "absent";
    throw d;
  }
  if (u.isSymbolicLink()) return "redirected";
  return u.isDirectory() ? "directory" : "not_a_directory";
}

async function oD(e, t, r, { checkStagingLeaf: o = false, storageV5: u } = {}) {
  let d;
  try {
    if (((d = await w5(e, t, u)), d === "real" && o))
      for (let [_, C] of T1e(e)) {
        let A = await b5(_, t, u);
        if (A === "absent") break;
        if (A !== "directory")
          return Y("warn", r.event, { phase: r.phase, root: JR(r.rootLabel), component: C, reason: A }), { refused: A };
      }
  } catch (_) {
    return (
      Y("warn", r.event, { phase: r.phase, root: JR(r.rootLabel), reason: "unverified", code: E(_) ?? "unknown" }),
      { refused: "unverified" }
    );
  }
  switch (d) {
    case "real":
    case "absent":
      return d;
    case "redirected":
    case "not_a_directory":
      return Y("warn", r.event, { phase: r.phase, root: JR(r.rootLabel), reason: d }), { refused: d };
  }
}

function d9t(e) {
  return "source_unverifiable_unknown";
}

async function _1e(e) {
  try {
    return (await lfe(e)) === "not_a_directory" ? "source_unverifiable_ENOTDIR" : "gone";
  } catch (t) {
    return `source_unverifiable_${E(t) ?? "unknown"}`;
  }
}

async function p9t(e) {
  let t = await e.storageV5.scopeKind(v5(e.chain));
  if (!t.ok) return `source_unverifiable_${iu(t.error) ?? "unknown"}`;
  if (t.value.kind !== "absent") return "batch_dir_vanished";
  for (let r = e.chain.length - 2; r >= 0; r--) {
    let o = e.chain[r];
    if (o === void 0) break;
    let u = await e.storageV5.scopeKind(o, r === 0 ? { resolveLink: true } : void 0);
    if (!u.ok) {
      if (r === 0 && iu(u.error) === RJ) return _1e(e.pipelineFolder);
      return `source_unverifiable_${iu(u.error) ?? "unknown"}`;
    }
    switch (u.value.kind) {
      case "absent":
        continue;
      case "directory":
        return "gone";
      case "other":
        return "source_unverifiable_ENOTDIR";
      case "link":
        if (r === 0) return _1e(e.pipelineFolder);
        return "source_unverifiable_parent_link";
      default:
        return d9t(u.value);
    }
  }
  return "gone";
}

async function NW({ dir: e, trashRoot: t, configHome: r, failureEvent: o, storageV5: u }) {
  let d;
  try {
    let _ = await w5(ife(e), r, u);
    if (_ === "redirected" || _ === "not_a_directory") return Y("warn", o, { code: `source_root_${_}` }), false;
    let C = await w5(t, r, u);
    switch (C) {
      case "redirected":
      case "not_a_directory":
        return Y("warn", o, { code: `trash_root_${C}` }), false;
      case "absent": {
        let A = vH(t, r, u);
        if (A !== void 0) {
          let x = await A.storageV5.ensureScope(v5(A.chain));
          if (!x.ok) throw E5(x.error);
        } else await S1e(t, { recursive: true });
        break;
      }
      case "real":
        break;
    }
    return (d = await n9t(NO(t, `${Date.now()}-${process.pid}-`))), await r9t(e, NO(d, c9t(e))), true;
  } catch (_) {
    if (d !== void 0) await s9t(d).catch(() => {});
    if (d !== void 0 && X(_)) {
      let C = "batch_dir_vanished",
        A = vH(e, r, u);
      if (A !== void 0) {
        let x = await p9t(A);
        if (x === "gone") return true;
        C = x;
      } else
        try {
          await T5(e);
        } catch (x) {
          if (X(x)) return true;
          C = `source_unverifiable_${E(x) ?? "unknown"}`;
        }
      return Y("warn", o, { code: C }), false;
    }
    return Y("warn", o, { code: E(_) ?? "unknown" }), false;
  }
}

async function nNt({ root: e, trashRoot: t, configHome: r, events: o, storageV5: u }) {
  try {
    for (let C of new Set([ife(t), ife(e)])) {
      let A = await w5(C, r, u);
      if (A === "redirected" || A === "not_a_directory") {
        let x = A === "redirected" ? "parent_symlink" : "parent_not_a_directory";
        throw (
          (Y("warn", o.refused, { phase: "round_head", root: JR(TH(r, e)), component: "parent", reason: A }), new IB(x))
        );
      }
    }
    let d = await b5(e, r, u),
      _ = [
        [e, "root", d],
        [t, "trash_root", await b5(t, r, u)],
      ];
    if (d === "directory")
      for (let [C, A] of T1e(e)) {
        let x = await b5(C, r, u);
        if ((_.push([C, A, x]), x !== "directory")) break;
      }
    for (let [, C, A] of _) {
      if (A === "absent") continue;
      if (A !== "directory") {
        let x = C === "staging_pid" ? "staging" : C;
        throw (
          (Y("warn", o.refused, { phase: "round_head", root: JR(TH(r, e)), component: C, reason: A }),
          new IB(A === "redirected" ? `${x}_symlink` : `${x}_not_a_directory`))
        );
      }
    }
    if (d !== "directory") {
      let C = vH(e, r, u);
      if (C !== void 0) {
        let A = await C.storageV5.ensureScope(v5(C.chain));
        if (!A.ok) throw E5(A.error);
      } else await S1e(e, { recursive: true });
    }
  } catch (d) {
    if (d instanceof IB) throw d;
    let _ = E(d) ?? "unknown";
    throw (
      (Y("warn", o.refused, { phase: "round_head", root: JR(TH(r, e)), reason: "unverified", code: _ }),
      new IB("unverified", { cause: d, code: _ }))
    );
  }
}

function m9t({ root: e, rootLabel: t, configHome: r, event: o, storageV5: u }) {
  let d = null;
  return {
    refused() {
      return d !== null;
    },
    refusedReason() {
      return d;
    },
    async verify() {
      if (d !== null) return false;
      let _ = await oD(e(), r(), { event: o, phase: "landing", rootLabel: t }, { checkStagingLeaf: true, storageV5: u });
      if (_ === "real") return true;
      if (_ === "absent") Y("warn", o, { phase: "landing", root: JR(t), reason: "absent" }), (d = "absent");
      else d = _.refused;
      return false;
    },
  };
}

function rNt(e) {
  return new IB(`landing_${e}`);
}

function oNt(e) {
  return { manifestRead: false, guard: m9t(e), root: e.root() };
}

function dct(e) {
  return { ok: false, cause: "extract", reason: e };
}

function iNt(e) {
  return { ok: false, cause: "download", reason: e };
}

function pct(e) {
  return e === "ENOTEMPTY" || e === "EEXIST" || e === "ENOTDIR" || e === "EPERM" || e === "EACCES";
}

function Fxe(e) {
  return {
    ok: false,
    cause: "local",
    reason: `the downloaded copy could not be moved into place (${e ?? "unknown error"})`,
  };
}

function rWn(e) {
  switch (e) {
    case "download":
      return "download_failed";
    case "root_refused":
      return "root_refused";
    case "extract":
      return "extract_failed";
    case "local":
      return "local_failed";
    case "deferred":
      return null;
  }
}

function oWn(e) {
  switch (e) {
    case "download":
      return "download failed";
    case "root_refused":
      return "sync root refused (a symlink or stray file is in the way, or it was removed mid-round)";
    case "extract":
      return "archive unusable";
    case "deferred":
      return "another process is landing this skill; retry shortly";
    case "local":
      return "a local filesystem error kept it from being placed on disk";
  }
}

async function wG(e, t) {
  try {
    return (await T5(nWt(e, t))).isFile();
  } catch {
    return false;
  }
}

async function sNt(e, t) {
  try {
    await l9t(nWt(e, t), "", { flag: "wx" });
  } catch (r) {
    if (E(r) !== "EEXIST") throw r;
  }
}

async function $xe(e, t) {
  await o9t(nWt(e, t), { force: true });
}

function v1e(e) {
  return e === 0n || e === y9t;
}

async function Gxe(e, t) {
  if (e === t) return true;
  try {
    let [r, o, u] = await Promise.all([C5(e, { bigint: true }), C5(t, { bigint: true }), C5(g9t(e), { bigint: true })]);
    if (v1e(r.ino) || v1e(o.ino) || (r.dev === u.dev && r.ino === u.ino)) return VE(e) === VE(t);
    return r.dev === o.dev && r.ino === o.ino;
  } catch {
    return false;
  }
}

function o3e(e) {
  let t = new Map(Array.from(e, (r) => [VE(r), r]));
  return async (r) => {
    let o = t.get(VE(r));
    if (o === void 0) return "not-live";
    if (await Gxe(r, o)) return "live";
    try {
      return await C5(o), "not-live";
    } catch {
      return "indeterminate";
    }
  };
}

async function ENt(e) {
  let t = [e];
  while (t.length > 0) {
    let r = t.pop(),
      o;
    try {
      o = await f9t(r, { withFileTypes: true });
    } catch {
      continue;
    }
    let u = new Set(o.map((d) => Jl(d.name)));
    if (u.has("head") && (u.has("commondir") || u.has("refs"))) return true;
    for (let d of o) if (d.isDirectory()) t.push(h9t(r, d.name));
  }
  return false;
}

function Gin(e) {
  if (F4()) return false;
  return N1e(e) || OCt();
}

function N1e(e) {
  return a.CLAUDE_CODE_SYNC_PLUGINS || Wxe(e);
}

function ANt(e) {
  return N1e(e) && !F4();
}

function i3e() {
  return a.CLAUDE_CODE_SYNC_PLUGINS_INSTALL_TIMEOUT_MS ?? 30000;
}

function TWn() {
  return a.CLAUDE_CODE_SYNC_PLUGINS_MCP_TIMEOUT_MS ?? 1e4;
}

function Act(e, t) {
  e.pluginsSync.firstSyncPromise ??= bfe(e, t);
}

function EWn(e, t) {
  return (e.pluginsSync.firstSyncPromise ??= bfe(e, t)), e.pluginsSync.firstSyncPromise;
}

function AWn(e, t) {
  return (
    n3e.of(e).discardInflight(),
    (e.pluginsSync.firstSyncPromise = (e.pluginsSync.firstSyncPromise ?? Promise.resolve(false))
      .catch(() => {})
      .then(() => bfe(e, t))),
    e.pluginsSync.firstSyncPromise
  );
}

function CWn(e) {
  return e.pluginsSync.syncErrors;
}

function uE() {
  return bh(be(), sV);
}

function N5(e) {
  return bh(uE(), e);
}

function j5(e) {
  return bh(e, t6);
}

function dE() {
  return bh(be(), SLe);
}

function $1e(e) {
  return nNt({ root: e, trashRoot: dE(), configHome: be(), events: { refused: "plugins_sync_root_refused" } });
}

async function nP(e) {
  let t = !e.manifestRead;
  e.manifestRead = true;
  let r = await wNt(j5(e.root), t ? "plugins_sync_manifest_unreadable" : null);
  if (r === null) return null;
  let o = TNt(r, E9t(), t ? "plugins_sync_manifest_unreadable" : null);
  if (o === null) return null;
  let { plugins: u, staleDirs: d, ..._ } = o;
  return { ..._, plugins: qxe(U1e(), u), staleDirs: dee(d) };
}

async function xH(e, t, r) {
  AH(e), await $1e(e.root);
  let o = await nP(e);
  await Wn(
    j5(e.root),
    b(
      {
        ...bNt(o, ["lastUpdated", "plugins", "staleDirs"]),
        ...t,
        plugins: SNt(qxe(U1e(), t.plugins), o?.plugins, (u) => u.pluginId, r.removedPluginIds),
        staleDirs: Ect(t.staleDirs, o?.staleDirs, r.staleDirs),
      },
      null,
      2,
    ),
  );
}

function RH(e) {
  return bh(e, NM, String(process.pid));
}

function B1e(e, t) {
  return rKe(t, e);
}

function iP(e, t) {
  return Phn(t.name, t.generation ?? 1, e);
}

function x5(e, t) {
  try {
    return I5(iP(e, t));
  } catch {
    return t.name;
  }
}

async function C9t(e, t) {
  let { pluginId: r } = t,
    o;
  try {
    o = iP(e, t) + _Le;
  } catch {
    return;
  }
  try {
    let u = await M5(o).catch(() => null);
    if (u !== null && !u.isFile())
      if (u.isDirectory())
        await NW({ dir: o, trashRoot: dE(), configHome: be(), failureEvent: "plugins_sync_trash_move_failed" });
      else await i_(o, { force: true });
    if (V_t(r)) {
      let d = t.marketplaceName !== void 0 && Hhn(t.marketplaceName);
      if (t.marketplaceName !== void 0 && !d) Y("warn", "plugins_sync_sidecar_invalid_marketplace_name");
      let _ = b({
        [q_t]: r,
        ...(d && { [G_t]: t.marketplaceName }),
        ...(t.installationPreference !== void 0 && { [z_t]: t.installationPreference }),
      });
      if ((await tl(o, xhn)) === _) return;
      await Wn(o, _);
    } else Y("warn", "plugins_sync_sidecar_invalid_id"), await i_(o, { force: true });
  } catch {
    Y("warn", "plugins_sync_sidecar_write_failed");
  }
}

async function mfe(e, t) {
  if (!(await e.guard.verify())) return;
  let r = new Map();
  for (let o of t) {
    let u;
    try {
      u = iP(e.root, o);
    } catch {
      continue;
    }
    let d = VE(u);
    if (!r.has(d)) r.set(d, o);
  }
  await Promise.all(
    Array.from(
      r.values(),
      No(pfe, (o) => C9t(e.root, o)),
    ),
  );
}

async function C1e(e, t, r) {
  try {
    let o = iP(e, t);
    return I5(o) === I5(r) || (await Gxe(o, r));
  } catch {
    return false;
  }
}

function A1e(e) {
  return {
    pluginId: e.id,
    name: e.directory || e.name || e.id,
    description: e.description,
    version: e.version || null,
    updatedAt: null,
    requestedVersion: e.version || void 0,
  };
}

function H1e(e, t) {
  return { ...e, marketplaceName: t.marketplaceName, installationPreference: t.installationPreference };
}

function A9t(e, t, r) {
  return yNt(t, r, {
    idOf: (o) => o.pluginId,
    dirFor: (o) => B1e(e, o),
    invalidNameTag: "plugins_sync_invalid_name",
    collisionTag: "plugins_sync_name_collision",
    carry: H1e,
  });
}

function Sfe(e) {
  return oNt({ root: () => e, configHome: be, rootLabel: sV, event: "plugins_sync_root_refused" });
}

async function ffe(e) {
  return (await e.guard.verify()) ? null : Nxe;
}

function AH(e) {
  let t = e.guard.refusedReason();
  if (t !== null) throw rNt(t);
}

async function R1e(e, t, r, o, u, d) {
  let _ = t.root,
    C = B1e(_, r.name),
    A = bh(RH(_), w9t(_, C)),
    x = bh(ly(), `claude-plugin-${process.pid}-${Math.random().toString(36).slice(2)}.zip`);
  try {
    if (t.guard.refused()) return Nxe;
    let M = Date.now(),
      F = await w8n(r.pluginId, x, r.requestedVersion, { isBackground: true, credentials: d });
    if ((u.downloadMs.push(Date.now() - M), !F.ok)) return iNt(F.reason);
    let U = await ffe(t);
    if (U !== null) return U;
    let B = Date.now();
    try {
      await i_(A, { recursive: true, force: true }), await S9t(RH(_), { recursive: true });
      let W = await $e("unzip", ["-q", "-o", x, "-d", A]),
        z = W.code === 0 ? await I9t(A).catch(() => "walk_failed") : "unzip_failed";
      if (z !== "ok")
        Y("info", "plugins_sync_unzip_fallback", { code: W.code, verdict: z }),
          await i_(A, { recursive: true, force: true }),
          await uye(x, A, { skipEntry: (Ce) => Ce.split(/[\\/]/).some(Ihn) });
      let pe = await ugt(A);
      if (await ENt(pe)) return dct("extracted tree carries a bare-repo layout");
      let fe = await ffe(t);
      if (fe !== null) return fe;
      if (cie()) {
        let Ce = o !== void 0 && o.name === r.name ? (o.generation ?? 1) : void 0,
          Ie = 0;
        for (let Ee = 1; Ie < P9t; Ee++) {
          if (Ee === Ce) continue;
          Ie++;
          try {
            return await EH(pe, Phn(r.name, Ee, _)), { ok: true, generation: Ee };
          } catch (Pe) {
            let Oe = E(Pe);
            if (!pct(Oe))
              return Y("warn", "plugins_sync_promotion_failed", { code: Oe ?? "unknown", restored: false }), Fxe(Oe);
          }
        }
        return Y("warn", "plugins_sync_occupant_displace_failed", { code: "generations_occupied" }), Q9e;
      }
      try {
        return await EH(pe, C), { ok: true, generation: 1 };
      } catch (Ce) {
        let Ie = E(Ce);
        if (!pct(Ie))
          return Y("warn", "plugins_sync_promotion_failed", { code: Ie ?? "unknown", restored: false }), Fxe(Ie);
      }
      let me = o !== void 0 && (await C1e(_, o, C));
      if (!me) {
        for (let Ce of (await nP(t))?.plugins ?? [])
          if (Ce.pluginId === r.pluginId && (await C1e(_, Ce, C))) {
            me = true;
            break;
          }
      }
      let ge;
      if (me) {
        ge = bh(RH(_), `.replaced-${process.pid}-${Math.random().toString(36).slice(2)}`);
        try {
          await EH(C, ge);
        } catch (Ce) {
          return Y("warn", "plugins_sync_occupant_displace_failed", { code: E(Ce) ?? "unknown" }), Q9e;
        }
      } else if (
        !(await NW({ dir: C, trashRoot: dE(), configHome: be(), failureEvent: "plugins_sync_trash_move_failed" }))
      )
        return Q9e;
      try {
        await EH(pe, C);
      } catch (Ce) {
        let Ie =
          ge === void 0
            ? false
            : await EH(ge, C).then(
                () => true,
                () => false,
              );
        return Y("warn", "plugins_sync_promotion_failed", { code: E(Ce) ?? "unknown", restored: Ie }), Fxe(E(Ce));
      }
      if (ge !== void 0) e.pendingTrashRemovals.push(i_(ge, { recursive: true, force: true }).catch(() => {}));
      return { ok: true, generation: 1 };
    } finally {
      u.extractMs.push(Date.now() - B);
    }
  } finally {
    if (
      (await i_(x, { force: true }).catch(() => {}),
      !t.guard.refused() &&
        (await oD(
          _,
          be(),
          { event: "plugins_sync_root_refused", phase: "sweep", rootLabel: sV },
          { checkStagingLeaf: true },
        ).catch(() => null)) === "real")
    )
      await i_(A, { recursive: true, force: true }).catch(() => {});
  }
}

async function M9t(e, t, r, o, u, d) {
  try {
    return await R1e(e, t, r, o, u, d);
  } catch {
    return Y("warn", "plugins_sync_extract_retry"), await ne(x9t), R1e(e, t, r, o, u, d);
  }
}

async function I9t(e, t = v9t) {
  let r = 0,
    o;
  async function u(C) {
    for (let A = 0; A < C.length && !o; A += P1e) {
      let x = C.slice(A, A + P1e);
      for (let M of await Promise.all(x.map((F) => M5(F))))
        if (((r += M.size), r > t)) {
          o = "oversize";
          return;
        }
    }
  }
  async function d(C) {
    for (let A = 0; A < C.length && !o; A += I1e) await Promise.all(C.slice(A, A + I1e).map(_));
  }
  async function _(C) {
    if (o) return;
    let A = [],
      x = [];
    for (let M of await hfe(C, { withFileTypes: true })) {
      if (M.isSymbolicLink()) {
        o = "symlink";
        return;
      }
      if (Ihn(M.name)) {
        o = "reserved";
        return;
      }
      if (M.isDirectory()) A.push(bh(C, M.name));
      else x.push(bh(C, M.name));
    }
    if (o) return;
    await Promise.all([u(x), d(A)]);
  }
  return await _(e), o ?? "ok";
}

function CH(e, t, r, o) {
  let u = `${t.name}@${um}`;
  e.syncErrors.push(
    r === "network-error"
      ? { type: r, source: u, plugin: t.name, url: cfn(t.pluginId, t.requestedVersion), details: o }
      : { type: r, source: u, plugin: t.name, error: o },
  );
}

async function bfe(e, t) {
  let r = e.pluginsSync,
    o = Date.now();
  r.syncErrors = [];
  let u;
  try {
    (u = T9t({ resolution: 20 })), u.enable();
  } catch {}
  let d = () => {
      if (!u) return {};
      return (
        u.disable(), { loop_lag_p95_ms: Math.round(u.percentile(95) / 1e6), loop_lag_max_ms: Math.round(u.max / 1e6) }
      );
    },
    _,
    C = { downloadMs: [], extractMs: [] },
    A = false,
    x = null,
    M = false,
    F = false,
    U = false,
    B = () => ({ account_opt_in: F, duration_ms: Date.now() - o });
  try {
    if (((F = OCt()), mNt())) F = true;
    if (!Gin(e) || !bH()) return Y("info", "plugins_sync_gate_closed"), g("plugins_sync_round", "gate_closed", B()), false;
    if (XWe())
      return (
        Y("info", "plugins_sync_policy_verdict_pending"), g("plugins_sync_round", "policy_verdict_pending", B()), false
      );
    let W = await N8(t);
    if (W === null)
      return Y("info", "plugins_sync_bucket_unresolved"), g("plugins_sync_round", "bucket_unresolved", B()), false;
    let z = Sfe(N5(W));
    x = z;
    let pe = z.root;
    if (
      (Y("info", "plugins_sync_starting"),
      !(await wG(uE(), W)) &&
        (await M5(z.root).then(
          (At) => At.isDirectory(),
          () => false,
        )) &&
        (await NW({
          dir: z.root,
          trashRoot: dE(),
          configHome: be(),
          failureEvent: "plugins_sync_trash_move_failed",
        }).catch(() => false)))
    )
      Y("info", "plugins_sync_unmarked_bucket_quarantined");
    await $1e(z.root), await sNt(uE(), W), (A = true);
    let fe = Date.now(),
      me;
    if (Wxe(e)) {
      let [At, dn] = await Promise.all([
        n3e.of(e).listEntries("plugins"),
        a.CLAUDE_CODE_SYNC_PLUGINS || OCt() ? Qze(e.host, { isBackground: true, credentials: t }) : null,
      ]);
      if (!At.success) me = At;
      else if (dn === null) me = { success: true, plugins: At.entries.map(A1e) };
      else if (!dn.success) me = dn;
      else me = { success: true, plugins: _Nt(At.entries.map(A1e), dn.plugins, (Lt) => Lt.pluginId, H1e) };
    } else me = await Qze(e.host, { isBackground: true, credentials: t });
    if (((_ = Date.now() - fe), !me.success)) {
      let At = d();
      return (
        Y("warn", "plugins_sync_list_failed", { duration_ms: Date.now() - o, list_ms: _, ...At }),
        s("tengu_plugins_sync_list_failed", { duration_ms: Date.now() - o, list_ms: _, ...At }),
        p("plugins_sync_round", "list_failed", B()),
        await D1e(z, { reconcileSidecars: true }),
        false
      );
    }
    let ge = await nP(z),
      Ce = ge !== null,
      {
        toDownload: Ie,
        toRemove: Ee,
        carryover: Pe,
        carryoverOwningLiveDir: Oe,
      } = A9t(pe, me.plugins, ge?.plugins ?? []),
      Fe = new Set(),
      Be = await Promise.all(
        Pe.map(async (At) => {
          if (!Oe.has(At.pluginId)) return false;
          try {
            return !(await M5(iP(pe, At))).isDirectory();
          } catch {
            return true;
          }
        }),
      );
    for (let [At, dn] of Pe.entries()) {
      if (!Be[At]) continue;
      let Lt = me.plugins.find((fn) => fn.pluginId === dn.pluginId);
      if (Lt) Fe.add(dn.pluginId), Ie.push({ item: Lt, prev: dn });
    }
    let ze = Pe.filter((At) => !Fe.has(At.pluginId)),
      We = ze.filter((At) => Oe.has(At.pluginId)),
      Ve = o3e(new Set(tP(pe, [...We, ...Ie.map(({ item: At, prev: dn }) => dn ?? At)])));
    if ((await Promise.all(r.pendingTrashRemovals.splice(0)), (await ffe(z)) === null))
      await i_(RH(pe), { recursive: true, force: true }).catch(() => {});
    let Pt = new Set(ge?.staleDirs ?? []),
      ct = await vfe(
        pe,
        Array.from(Pt).filter((At) => !r.removalsDeferredHere.has(At)),
        Ve,
      );
    for (let At of ct) Pt.delete(At);
    if (Ie.length === 0 && Ee.length === 0) {
      AH(z), await mfe(z, ze), AH(z), ime(tP(pe, We)), (M = true);
      let At = new Map(Pe.map((Lt) => [Lt.pluginId, Lt])),
        dn =
          ge !== null &&
          ge.plugins.some((Lt) => {
            let fn = At.get(Lt.pluginId);
            return (
              fn !== void 0 &&
              (fn.marketplaceName !== Lt.marketplaceName || fn.installationPreference !== Lt.installationPreference)
            );
          });
      if ((ct.size > 0 || dn) && ge)
        await xH(
          z,
          {
            lastUpdated: ge.lastUpdated,
            plugins: ge.plugins.map((Lt) => At.get(Lt.pluginId) ?? Lt),
            staleDirs: Pt.size > 0 ? Array.from(Pt) : void 0,
          },
          { staleDirs: ct, removedPluginIds: new Set() },
        );
      if ((await gfe(z, me.plugins, r.removalsDeferredHere), await F1e(), ge)) {
        let Lt = new Date();
        await b9t(j5(pe), Lt, Lt).catch(() => {});
      }
      return (
        Y("info", "plugins_sync_no_changes", {
          count: Pe.length,
          duration_ms: Date.now() - o,
          list_ms: _,
          had_manifest: Ce,
          ...d(),
        }),
        y("plugins_sync_round", B()),
        false
      );
    }
    let ut = o3e(new Set(tP(pe, [...We, ...Ie.map(({ item: At }) => At)]))),
      en = 0,
      nn = (At) => {
        if (cie()) return en++, r.removalsDeferredHere.add(At), Promise.resolve(false);
        return wfe(pe, At, ut);
      },
      xt = [],
      tt = [],
      lt = Date.now();
    await Promise.all(
      Ie.map(
        No(pfe, async ({ item: At, prev: dn }) => {
          let Lt;
          try {
            if (((Lt = await M9t(r, z, At, dn, C, t)), !Lt.ok))
              switch (Lt.cause) {
                case "download":
                  Y("warn", "plugins_sync_download_failed"), CH(r, At, "network-error", Lt.reason);
                  break;
                case "root_refused":
                case "extract":
                  CH(r, At, "generic-error", Lt.reason);
                  break;
                case "local":
                  CH(r, At, "generic-error", Lt.reason);
                  break;
                case "deferred":
                  Y("warn", "plugins_sync_unexpected_landing_cause"), CH(r, At, "generic-error", Lt.reason);
                  break;
              }
          } catch (fn) {
            let Sn = gR(fn);
            (Lt = dct(Sn)), Y("warn", "plugins_sync_extract_failed"), CH(r, At, "generic-error", Sn);
          }
          if (Lt.ok) {
            let fn = Lt.generation > 1 ? { ...At, generation: Lt.generation } : At;
            if ((xt.push(fn), dn)) {
              let Sn = x5(pe, dn);
              if (Sn !== x5(pe, fn) && !(await nn(Sn))) Pt.add(Sn);
            }
          } else if (dn) tt.push(dn);
        }),
      ),
    );
    let mt = Date.now() - lt,
      Xe = O1e(C);
    if (
      (await Promise.all(
        Ee.map(
          No(pfe, async (At) => {
            let dn = x5(pe, At);
            if (!(await nn(dn))) Pt.add(dn);
          }),
        ),
      ),
      en > 0)
    )
      Y("info", "plugins_sync_removal_deferred_loaded", { count: en });
    U = xt.length > 0 || Ee.length > 0;
    let nt = [...xt, ...tt, ...ze];
    AH(z),
      await mfe(z, nt),
      AH(z),
      ime(tP(pe, nt)),
      (M = true),
      await xH(
        z,
        { lastUpdated: Date.now(), plugins: nt, staleDirs: Pt.size > 0 ? Array.from(Pt) : void 0 },
        { staleDirs: ct, removedPluginIds: new Set(Ee.map((At) => At.pluginId)) },
      ),
      await gfe(z, me.plugins, r.removalsDeferredHere),
      await F1e();
    let ht = d();
    if (
      (Y("info", "plugins_sync_complete", {
        downloaded: xt.length,
        removed: Ee.length,
        failed: r.syncErrors.length,
        duration_ms: Date.now() - o,
        list_ms: _,
        download_extract_ms: mt,
        had_manifest: Ce,
        ...Xe,
        ...ht,
      }),
      s("tengu_plugins_sync_success", {
        downloaded: xt.length,
        removed: Ee.length,
        total: me.plugins.length,
        duration_ms: Date.now() - o,
        list_ms: _,
        download_extract_ms: mt,
        had_manifest: Ce,
        ...Xe,
        ...ht,
      }),
      r.syncErrors.length > 0)
    )
      g("plugins_sync_round", "download_failed", B());
    else y("plugins_sync_round", B());
  } catch (W) {
    let z = d(),
      pe = { ...(_ !== void 0 && { list_ms: _ }), ...(C.downloadMs.length > 0 && O1e(C)) };
    if (!(W instanceof IB))
      Y("error", "plugins_sync_unexpected_error", {
        kind: W instanceof Error ? W.constructor.name : "unknown",
        duration_ms: Date.now() - o,
        ...pe,
        ...z,
      }),
        s("tengu_plugins_sync_error", { duration_ms: Date.now() - o, ...pe, ...z }),
        p("plugins_sync_round", "unexpected_error", B());
    else g("plugins_sync_round", "root_refused", B());
    if (W instanceof IB && M)
      Y("warn", "plugins_sync_post_registration_refusal", { reason: W.reason }),
        s("tengu_plugins_sync_root_refused", {
          reason: c(W.reason),
          phase: w("post_registration"),
          duration_ms: Date.now() - o,
        }),
        (A = false);
    else if (W instanceof IB) {
      Y("warn", "plugins_sync_root_refused_fail_closed"),
        s("tengu_plugins_sync_root_refused", { reason: c(W.reason), phase: w("head"), duration_ms: Date.now() - o });
      let fe = Yd(bh(be(), "plugins"));
      r.syncErrors.push({
        type: "generic-error",
        source: `${um}[root]`,
        error:
          W.reason === "unverified" || W.reason === "landing_unverified"
            ? `claude.ai plugin sync disabled this session: ${fe} could not be verified${W.code ? ` (${W.code})` : ""}`
            : W.reason === "landing_absent"
              ? `claude.ai plugin sync disabled this session: ${fe} was removed while a sync round was running`
              : `claude.ai plugin sync disabled this session: ${fe} is not a plain directory tree (a symlink or stray file is in the way)`,
      }),
        ime([]);
    } else if (!M && x !== null) await D1e(x, { reconcileSidecars: true });
  } finally {
    if ((u?.disable(), x === null || x.guard.refused())) A = false;
    if (A && x !== null) {
      let W = RH(x.root),
        z = x.root,
        pe = be(),
        fe = Promise.all(r.pendingTrashRemovals.splice(0)).then(async () => {
          if (
            (await oD(
              z,
              pe,
              { event: "plugins_sync_root_refused", phase: "sweep", rootLabel: sV },
              { checkStagingLeaf: true },
            ).catch(() => null)) === "real"
          )
            await i_(W, { recursive: true, force: true }).catch(() => {});
        });
      r.pendingTrashRemovals.push(fe);
    }
  }
  return U;
}

function O1e(e) {
  return {
    download_ms_sum: e.downloadMs.reduce((t, r) => t + r, 0),
    download_ms_max: Math.max(0, ...e.downloadMs),
    extract_ms_sum: e.extractMs.reduce((t, r) => t + r, 0),
    extract_ms_max: Math.max(0, ...e.extractMs),
  };
}

async function D1e(e, { reconcileSidecars: t }) {
  let r = await nP(e);
  if (!r) return;
  if (t) await mfe(e, r.plugins);
  if (e.guard.refusedReason() !== null) {
    Y("warn", "plugins_sync_root_refused_fail_closed"), ime([]);
    return;
  }
  ime(tP(e.root, r.plugins));
}

async function kfe(e) {
  let t = await N8(e);
  if (t === null) return Y("info", "plugins_sync_bucket_unresolved"), [];
  let r = N5(t),
    o = { event: "plugins_sync_root_refused", phase: "read" },
    [u, d] = await Promise.all([
      oD(r, be(), { ...o, rootLabel: sV }, { checkStagingLeaf: true }).catch(() => null),
      oD(dE(), be(), { ...o, rootLabel: SLe }).catch(() => null),
    ]);
  if (u !== "real" || (d !== "real" && d !== "absent") || !(await wG(uE(), t))) return [];
  let _ = await nP(Sfe(r));
  return _ ? tP(r, _.plugins) : [];
}

async function j1e(e) {
  let t = bve();
  if (t.length === 0) return t;
  let r = await N8(e);
  if (r === null) return Y("info", "plugins_sync_bucket_unresolved"), [];
  let o = N5(r);
  return t.every((u) => k9t(u) === o) ? t : null;
}

async function pye() {
  if (ICt()) return;
  ime(await kfe());
}

async function wfe(e, t, r) {
  let o;
  try {
    o = ode(t, e);
  } catch (d) {
    if (d instanceof rde) return false;
    return true;
  }
  if (r) {
    let d = await r(o);
    if (d === "live") return true;
    if (d === "indeterminate") return false;
  }
  let u = await NW({ dir: o, trashRoot: dE(), configHome: be(), failureEvent: "plugins_sync_trash_move_failed" });
  if (u) await i_(o + _Le, { force: true }).catch(() => {});
  return u;
}

async function vfe(e, t, r) {
  let o = new Set();
  for (let u of t) if (await wfe(e, u, r)) o.add(u);
  return o;
}

async function Efe() {
  let e = uE();
  if (
    (await oD(e, be(), { event: "plugins_sync_root_refused", phase: "prune", rootLabel: sV }).catch(() => null)) !==
    "real"
  )
    return null;
  let r;
  try {
    r = await hfe(e, { withFileTypes: true });
  } catch {
    return null;
  }
  let o = [],
    u = [];
  for (let d of r)
    if (d.isDirectory() && $ne(d.name) && (await wG(e, d.name))) o.push(d.name);
    else if (!VF(d.name)) u.push(d.name);
  return { buckets: o, strays: u };
}

async function W1e(e) {
  let t = 0;
  for (let r of e)
    if (
      await NW({ dir: bh(uE(), r), trashRoot: dE(), configHome: be(), failureEvent: "plugins_sync_trash_move_failed" })
    )
      t++;
  if (t > 0) Y("info", "plugins_sync_stray_entry_trashed", { count: t });
  return t;
}

async function F1e() {
  let e = await Efe();
  if (e !== null && e.strays.length > 0) await W1e(e.strays);
}

async function z1e(e) {
  let t = Sfe(N5(e)),
    r = await nP(t);
  return r === null ? null : { round: t, manifest: r };
}

async function Cct() {
  if (!QWe()) return false;
  if (cie()) return Y("info", "plugins_sync_prune_deferred_loaded"), false;
  let e = await Efe();
  if (!e) return false;
  ime([]);
  let t = 0,
    r = 0;
  for (let o of e.buckets) {
    let u = await z1e(o);
    if (!u) continue;
    let { round: d, manifest: _ } = u,
      C = d.root,
      A = [],
      x = new Set();
    for (let B of _.plugins)
      if (await wfe(C, x5(C, B))) x.add(B.pluginId);
      else A.push(B);
    let M = new Set(_.staleDirs ?? []),
      F = await vfe(C, M);
    for (let B of F) M.delete(B);
    let U = await gfe(d, [], null);
    if (((t += x.size + F.size + U), A.length > 0 || M.size > 0))
      (r += A.length + M.size),
        await xH(
          d,
          { lastUpdated: _.lastUpdated, plugins: A, staleDirs: M.size > 0 ? Array.from(M) : void 0 },
          { staleDirs: F, removedPluginIds: x },
        ).catch(() => {});
    else
      await i_(j5(C), { force: true }).catch(() => {}),
        await E1e(C).then(
          () => $xe(uE(), o),
          () => {},
        );
  }
  return (
    (t += await W1e(e.strays)),
    await E1e(uE()).catch(() => {}),
    Y("info", "plugins_sync_pruned_for_closed_gate", { moved: t, retained: r }),
    t > 0
  );
}

async function vWn() {
  if (cie() || rfe()) return false;
  let e = await Efe();
  if (!e) return false;
  let t = 0,
    r = 0;
  for (let o of e.buckets) {
    let u = await z1e(o);
    if (!u?.manifest.staleDirs?.length) continue;
    let { round: d, manifest: _ } = u,
      C = d.root,
      A = new Set(_.staleDirs),
      x = await vfe(C, A, o3e(new Set(tP(C, _.plugins))));
    if (x.size === 0) {
      r += A.size;
      continue;
    }
    for (let M of x) A.delete(M);
    (t += x.size),
      (r += A.size),
      await xH(
        d,
        { lastUpdated: _.lastUpdated, plugins: _.plugins, staleDirs: A.size > 0 ? Array.from(A) : void 0 },
        { staleDirs: x, removedPluginIds: new Set() },
      ).catch(() => {});
  }
  if (t === 0) return false;
  return Y("info", "plugins_sync_deferred_removals_completed", { moved: t, retained: r }), true;
}

async function gfe(e, t, r) {
  if (!(await e.guard.verify())) return 0;
  let o = e.root,
    u = await nP(e);
  if (!u) return 0;
  let d = new Set(
      [
        ...[...u.plugins, ...t.map(({ name: x }) => ({ name: x }))].flatMap((x) => {
          try {
            return [I5(iP(o, x))];
          } catch {
            return [];
          }
        }),
        ...(u.staleDirs ?? []),
      ].map(VE),
    ),
    _;
  try {
    _ = await hfe(o, { withFileTypes: true });
  } catch {
    return 0;
  }
  let C = _.filter((x) => x.isDirectory() && !VF(x.name) && !d.has(VE(x.name))).map((x) => x.name);
  if (C.length === 0) return 0;
  if (cie()) {
    await xH(
      e,
      { lastUpdated: u.lastUpdated, plugins: u.plugins, staleDirs: [...(u.staleDirs ?? []), ...C] },
      { staleDirs: new Set(), removedPluginIds: new Set() },
    );
    for (let x of C) r?.add(x);
    return Y("info", "plugins_sync_orphan_dir_deferred", { count: C.length }), 0;
  }
  let A = 0;
  for (let x of C)
    if (await NW({ dir: bh(o, x), trashRoot: dE(), configHome: be(), failureEvent: "plugins_sync_trash_move_failed" }))
      A++, await i_(bh(o, x) + _Le, { force: true }).catch(() => {});
  if (A > 0) Y("info", "plugins_sync_orphan_dir_trashed", { count: A });
  return A;
}

function tP(e, t) {
  let r = new Map();
  for (let o of t) {
    let u;
    try {
      u = iP(e, o);
    } catch {
      continue;
    }
    let d = VE(u);
    if (!r.has(d)) r.set(d, u);
  }
  return Array.from(r.values());
}

function cle(e, t, r) {
  let o = O9t(t, r);
  if (!He(e))
    return {
      ok: false,
      error: `${o}

Validation errors: manifest must be an object`,
      errors: [{ path: "", message: "manifest must be an object" }],
      rawCandidate: null,
    };
  let u = { ...e };
  if (t === "marketplace-entry") delete u.id, delete u.source, delete u.strict;
  let d = new Set(),
    _ = [],
    C = jpe().safeParse(u);
  if (C.success && _.length === 0) return { ok: true, manifest: C.data, rawCandidate: u };
  let A = C.success
      ? []
      : C.error.issues.map((F) => {
          let U = F.path.length > 0 ? String(F.path[0]) : "",
            B = F.path.join(".");
          return { path: d.has(U) ? `experimental.${B}` : B, message: F.message };
        }),
    x = [..._, ...A],
    M = x.map((F) => (F.path ? `${F.path}: ${F.message}` : F.message)).join(", ");
  return {
    ok: false,
    error: `${o}

Validation errors: ${M}`,
    errors: x,
    rawCandidate: u,
    manifest: C.success ? C.data : void 0,
  };
}

function O9t(e, t) {
  switch (e) {
    case "plugin-json":
      return `Plugin ${t.pluginName} has an invalid manifest file at ${t.manifestPath}.`;
    case "skill-md":
      return `Skill ${t.pluginName} has invalid plugin-manifest frontmatter at ${t.manifestPath}.`;
    case "marketplace-entry":
      return `Marketplace entry ${t.pluginName} has an invalid manifest.`;
  }
}

export { $me, $xe, AB, ANt, AWn, Act, B4, CO, CWn, Cct, DO, ENt, EWn, Ect, Ew, Fje, Fxe, GWe, GXt, Gin, Gxe, HWe, IO, J6t, Jje, Jme, K4, KWe, KXt, Kje, Lme, N8, NW, Nme, OWe, P4, PB, QR, QY, Q_, Qje, R4, RB, S4, SNt, SWn, Sh, T4, TB, TNt, TWn, Tct, U4, Ume, V4, VWe, VXt, Vje, Wxe, XR, XXt, Xje, YWe, YXt, Yje, Ym, Zje, _4, _5, _Nt, _Wn, _ct, a4, aH, aWe, ale, bB, bH, bNt, bWn, c5, cH, cle, dNt, dct, dee, dye, e4, e9t, eWe, f5, fH, fO, fWn, gNt, gO, gWn, gct, h4, h5, hB, hNt, hWn, hct, i3e, i5, iNt, iWe, j1e, j4, jje, jxe, kB, kH, kfe, l5, lWe, lle, m5, mH, mNt, mWn, nNt, nWe, o3e, oD, oNt, oWe, oWn, ofe, p4, pH, pct, pye, qXt, qin, qxe, r5, rNt, rWn, s5, sNt, sWe, t3e, t9t, tS, tfe, u5, uWe, uye, vWn, vb, w4, wG, wNt, wWn, wct, xg, y4, yNt, yWn, zXt, zje };
