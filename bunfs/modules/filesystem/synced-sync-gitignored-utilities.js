// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { ce } from "/$bunfs/root/chunk-4ddxwr9r.js";
var dst = "Sync this project directory to the cloud?",
  pst =
    "Allow Claude Code to sync files from this project directory into cloud sessions. This allows Claude to keep working on your project even if your computer goes to sleep or disconnects.",
  fst = "Secrets, credentials, and gitignored files are never synced and all synced files are encrypted at rest.",
  f2n = "File sync is offline for this session",
  m2n =
    "Changes are no longer being copied between this project directory and the cloud session until service is restored. Your session will continue without file sync and Claude will run its tools on your local files only instead.",
  Yq = 200;
function Jq(e, o) {
  return e.length <= o ? e : `${ce(e, o - 1)}\u2026`;
}
export { dst, pst, fst, f2n, m2n, Yq, Jq };
