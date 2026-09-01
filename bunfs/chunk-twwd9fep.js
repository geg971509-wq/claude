// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
var pm = () => ({
  mode: "default",
  additionalWorkingDirectories: new Map(),
  alwaysAllowRules: {},
  alwaysDenyRules: {},
  alwaysAskRules: {},
  isBypassPermissionsModeAvailable: false,
  mcpPermissionModeOverrides: {},
});
function zM(e) {
  return e.filter((o) => o.data?.type !== "hook_progress");
}
function y_n(e) {
  return (
    e !== null && typeof e === "object" && "afterResultCommitted" in e && typeof e.afterResultCommitted === "function"
  );
}
function Lyt(e, o, t) {
  if (o || !y_n(e)) return;
  try {
    e.afterResultCommitted();
  } catch (s) {
    t(s);
  }
}
function on(e, o) {
  return e.name === o || (e.aliases?.includes(o) ?? false);
}
function Kne(e, o) {
  return e.name.localeCompare(o.name);
}
var l;
function WQn(e) {
  l = e;
}
function yde() {
  return l?.();
}
var i = new WeakMap(),
  a = new WeakSet();
function p(e) {
  let o = new Map();
  for (let t of e) {
    if (!o.has(t.name)) o.set(t.name, t);
    if (t.aliases) {
      for (let s of t.aliases) if (!o.has(s)) o.set(s, t);
    }
  }
  return o;
}
function no(e, o, t) {
  let s = t && Object.hasOwn(t, o) ? t[o] : void 0;
  if (s !== void 0 && s !== o) return no(e, s);
  let r = i.get(e);
  if (r) return r.get(o);
  if (a.has(e)) {
    let n = p(e);
    return i.set(e, n), n.get(o);
  }
  return a.add(e), e.find((n) => on(n, o));
}
function AT(e, o) {
  let t = e.coerceInput?.(o) ?? null;
  return e.inputSchema.safeParse(t === null ? o : t.input);
}
var u = Object.freeze({ supported: false });
function d6(e) {
  return e.remoteExecution ?? u;
}
var m = {
  isEnabled: () => true,
  isConcurrencySafe: (e) => false,
  isReadOnly: (e) => false,
  isDestructive: (e) => false,
  remoteExecution: u,
  checkPermissions: (e, o) => Promise.resolve({ behavior: "allow", updatedInput: e }),
  toAutoClassifierInput: (e) => "",
  userFacingName: (e) => "",
};
function kt(e) {
  return Object.defineProperties({ ...m, userFacingName: () => e.name }, Object.getOwnPropertyDescriptors(e));
}
function Yv(e) {
  let o = e;
  return (
    typeof o.underlyingV1ToolName === "string" &&
    typeof o.entryFieldName === "string" &&
    typeof o.perEntryHookInputs === "function" &&
    typeof o.reassemble === "function"
  );
}
function jk(e, o) {
  if ("has" in o) return o.has(e.name) || (e.underlyingV1ToolName !== void 0 && o.has(e.underlyingV1ToolName));
  return o.includes(e.name) || (e.underlyingV1ToolName !== void 0 && o.includes(e.underlyingV1ToolName));
}
export { pm, zM, y_n, Lyt, on, Kne, WQn, yde, no, AT, d6, kt, Yv, jk };
