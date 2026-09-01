// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252

// Consolidated from chunk-zfcb9rh8.js
var wJn = "SearchPlugins",
  TJn = "SearchSkills",
  EJn = "SuggestPluginInstall",
  AJn = "SuggestSkills",
  CJn = "ListPlugins",
  vJn = "ListSkills",
  k_t = ["SearchPlugins", "SearchSkills", "ListPlugins", "ListSkills"];
export { wJn, TJn, EJn, AJn, CJn, vJn, k_t };

// Consolidated from chunk-vy15tdkc.js
var Mz = "propose_skills",
  xXn = "Show the user a review card of proposed skills to save \u2014 render-only, nothing is written",
  IXn = `Surface recurring multi-step procedures from this session as skill proposals. Render-only \u2014 calling this shows a review card in the conversation; it does not write any files or create the skill. The user reviews and saves from the card.

Call once with all proposals (max 3). Use it when the user asks to turn a workflow or procedure into a skill, or when the same multi-step procedure has recurred and a skill would clearly save future work. Do not call it for one-off tasks, and do not re-propose skills the user has already seen.`;
export { Mz, xXn, IXn };

// Consolidated from chunk-a0rhnr39.js
var p6e = "ShareOnboardingGuide",
  dQt = `Upload the ONBOARDING.md in the current directory and return a share link teammates can open in Claude Code. Call this after the user has confirmed the final content.

When called with the default mode='check': if a local ONBOARDING.md is present, uploads it to the most-recently-updated org guide (or creates one if none exist) and returns a fresh link. If no local file is present, returns the existing link without uploading (status: has_existing).`;
export { p6e, dQt };
