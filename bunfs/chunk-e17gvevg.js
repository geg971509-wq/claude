// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { oA, Um, I, Mp } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
var o = "tengu_violin_pegbox";
function n() {
  return a.CLAUDE_CODE_ENTRYPOINT === "remote_desktop";
}
async function r() {
  try {
    return await Mp(o);
  } catch {
    return false;
  }
}
function i() {
  try {
    return I(o, false);
  } catch {
    return false;
  }
}
async function l() {
  try {
    return await Mp("tengu_violin_strad");
  } catch {
    return false;
  }
}
function u() {
  try {
    return I("tengu_violin_strad", false);
  } catch {
    return false;
  }
}
async function Ec() {
  try {
    return (await Mp("tengu_violin_wood")) && (!n() || (await r()));
  } catch {
    return false;
  }
}
function Gs() {
  try {
    return I("tengu_violin_wood", false) && (!n() || i());
  } catch {
    return false;
  }
}
async function eO() {
  return (await Ec()) && (await l());
}
function u$() {
  return Gs() && u();
}
function are() {
  try {
    let { value: e, source: t } = Um("tengu_violin_wood", false);
    return e === false && s(t);
  } catch {
    return false;
  }
}
function s(e) {
  switch (e) {
    case "payload":
    case "override":
    case "disabled":
      return true;
    case "fallback":
      return oA();
    case "disk":
      return false;
  }
}
function c(e) {
  return s(Um(e, false).source);
}
function iRr() {
  try {
    return n() && I("tengu_violin_wood", false) ? o : "tengu_violin_wood";
  } catch {
    return "tengu_violin_wood";
  }
}
function sRr(e) {
  try {
    return c(e) && (e !== "tengu_violin_wood" || !n() || c(o));
  } catch {
    return false;
  }
}
async function Vyr() {
  try {
    return await Mp("tengu_violin_amati");
  } catch {
    return false;
  }
}
function O9t() {
  try {
    return I("tengu_violin_amati", false);
  } catch {
    return false;
  }
}
function b8e() {
  return Gs() && O9t();
}
async function mMe() {
  let [e, t] = await Promise.all([Ec(), Vyr()]);
  return e && t;
}
export { Ec, Gs, eO, u$, are, iRr, sRr, Vyr, O9t, b8e, mMe };
