// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { _$, v4t } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { m } from "/$bunfs/root/chunk-bzx56g36.js";
import { i, v, f } from "/$bunfs/root/chunk-saay52v7.js";
var r = {
    init_retry_max_attempts: 3,
    init_retry_base_delay_ms: 500,
    init_retry_jitter_fraction: 0.25,
    init_retry_max_delay_ms: 4000,
    http_timeout_ms: 1e4,
    uuid_dedup_buffer_size: 2000,
    heartbeat_interval_ms: 20000,
    heartbeat_jitter_fraction: 0.1,
    token_refresh_buffer_ms: 300000,
    teardown_archive_timeout_ms: 1500,
    connect_timeout_ms: 15000,
    oauth_retry_max_attempts: 3,
    oauth_retry_base_delay_ms: 2000,
    min_version: "0.0.0",
  },
  _ = m(() =>
    f({
      init_retry_max_attempts: v().int().min(1).max(10).default(3),
      init_retry_base_delay_ms: v().int().min(100).default(500),
      init_retry_jitter_fraction: v().min(0).max(1).default(0.25),
      init_retry_max_delay_ms: v().int().min(500).default(4000),
      http_timeout_ms: v().int().min(2000).default(1e4),
      uuid_dedup_buffer_size: v().int().min(100).max(50000).default(2000),
      heartbeat_interval_ms: v().int().min(5000).max(30000).default(20000),
      heartbeat_jitter_fraction: v().min(0).max(0.5).default(0.1),
      token_refresh_buffer_ms: v().int().min(30000).max(1800000).default(300000),
      teardown_archive_timeout_ms: v().int().min(500).max(2000).default(1500),
      connect_timeout_ms: v().int().min(5000).max(60000).default(15000),
      oauth_retry_max_attempts: v().int().min(0).max(6).default(3),
      oauth_retry_base_delay_ms: v().int().min(100).max(1e4).default(2000),
      min_version: i()
        .refine((e) => {
          try {
            return _$(e, "0.0.0"), !0;
          } catch {
            return !1;
          }
        })
        .default("0.0.0"),
    }),
  );
async function Ien() {
  let e = await v4t("tengu_bridge_repl_v2_config", r),
    t = _().safeParse(e);
  return t.success ? t.data : r;
}
async function Vot() {
  let e = await Ien();
  if (
    e.min_version &&
    _$(
      {
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
      e.min_version,
    )
  )
    return `Your version of Claude Code (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.252", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-08-31T16:02:57Z", GIT_SHA: "c0778c45886d8f1ed8bd5e7c972b8507d299a548", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}) is too old for Remote Control.
Version ${e.min_version} or higher is required. Run \`claude update\` to update.`;
  return null;
}
export { Ien, Vot };
