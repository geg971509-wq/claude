// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { n } from "/$bunfs/root/chunk-fv016jr6.js";
import { be, lme } from "/$bunfs/root/chunk-gcks6mn0.js";
import { Ls, nlr, a } from "/$bunfs/root/chunk-fec4384a.js";
import { O, lcr } from "/$bunfs/root/chunk-dqkj2bph.js";
import { resolve as l } from "path";
function vCn(e = PGt) {
  let o = a.CLAUDE_CODE_HOVER_REST;
  if (o === void 0) return;
  if (rEt(o) !== "pinned") return;
  return { backend: O() ? e() : void 0, configHome: be() };
}
function X0r(e) {
  return rEt(a.CLAUDE_CODE_HOVER_REST ?? false), e === void 0 ? void 0 : IGt(e);
}
function IGt(e) {
  let o = O() ? e.backend : void 0;
  if (o === void 0) return;
  if (!lme(e.configHome)) {
    n(
      `CLAUDE_CONFIG_DIR now names ${be()}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`,
      { level: "warn" },
    );
    return;
  }
  return o;
}
function rEt(e) {
  if (typeof e !== "boolean")
    n(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`, { level: "warn" });
  let o = lcr(e);
  if (o === "conflict")
    n(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`, {
      level: "warn",
    });
  return o;
}
function PGt() {
  if (!O()) return;
  return;
}
var f = { home: false, workspace: false, system: false, userNamed: false };
function Y0r(e = {}) {
  return u(() => {
    g(e.globalConfigFile);
    let { createLocalFsBackend: o } = import.meta.require("/$bunfs/root/chunk-kc163nke.js");
    return o({
      configHome: be(),
      globalConfigFile: Ls(),
      ...(e.hostFilesServe !== void 0 && { hostFilesServe: e.hostFilesServe }),
    });
  }, "v5 storage backend construction failed; this process falls back to legacy storage");
}
function J0r(e = {}) {
  return u(() => {
    g(e.globalConfigFile);
    let { createMemoryBackend: o } = import.meta.require("/$bunfs/root/chunk-1zqybaqr.js"),
      { createLocalHostFiles: i, storeFence: t } = import.meta.require("/$bunfs/root/chunk-r2j6zb18.js"),
      r = e.logBudgetBytes;
    if (e.hostFilesServe === void 0) return o({ logBudgetBytes: r });
    let s = { ...f };
    for (let d of Object.keys(f)) {
      let c = e.hostFilesServe[d];
      if (c !== void 0) s[d] = c;
    }
    if (typeof s.workspace !== "boolean" || typeof s.userNamed !== "boolean")
      throw Error("tryCreateMemoryV5Backend: the workspace and userNamed spaces are served or refused, never attested");
    return o({
      hostFiles: i({ serve: s, store: t({ configHome: l(be()), globalConfigFile: l(Ls()) }) }),
      logBudgetBytes: r,
    });
  }, "v5 in-memory storage backend construction failed; this worker keeps no storage backend");
}
function g(e) {
  if (e === void 0) return;
  let o = nlr(e);
  if (o !== "seeded")
    n(
      o === "conflict"
        ? `global config file already resolved to ${Ls()} before the host handed ${e}; keeping the first answer`
        : "global config file already resolved to the handed path before the host handed it; keeping that first answer",
      { level: o === "conflict" ? "warn" : "debug" },
    );
}
function u(e, o) {
  if (!O()) return;
  let i;
  try {
    i = e();
  } catch (t) {
    let { logError: r } = import.meta.require("/$bunfs/root/chunk-gb16vkjf.js"),
      { withTelemetryMessage: s } = import.meta.require("/$bunfs/root/chunk-dynzywak.js");
    r(s(t, o));
  }
  try {
    let { logFeatureOk: t, logFeatureSad: r } = import.meta.require("/$bunfs/root/chunk-x7tw2btw.js");
    if (i !== void 0) t("storage_v5_backend");
    else r("storage_v5_backend", "fell_back");
  } catch (t) {
    n(`storage_v5_backend outcome event not recorded: ${String(t)}`, { level: "warn" });
  }
  return i;
}
export { vCn, X0r, IGt, rEt, PGt, Y0r, J0r };
