// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { oa } from "/$bunfs/root/chunk-jpaz9qpm.js";
import { nEt } from "/$bunfs/root/chunk-fknxtxqh.js";
import { Ype } from "/$bunfs/root/chunk-z737w82d.js";
import { Pl } from "/$bunfs/root/chunk-127gwmpc.js";
import { Jh } from "/$bunfs/root/chunk-nsfgbyjp.js";
import { qc } from "/$bunfs/root/chunk-sgsxp0td.js";
import { j } from "/$bunfs/root/chunk-yz031c9r.js";
var a = j(Jh(), 1);
var c = Pl(),
  d = oa(),
  l = qc(),
  u = Jh(),
  S = Ype();
var g = (e) => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;
var r = g;
var s = j(qc(), 1),
  JTt =
    ({ logger: e, signingName: n } = {}) =>
    async () => {
      if ((e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !n))
        throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key", { logger: e });
      let t = r(n);
      if (!(t in process.env))
        throw new s.TokenProviderError(`Token not present in '${t}' environment variable`, { logger: e });
      let o = { token: process.env[t] };
      return a.setTokenFeature(o, "BEARER_SERVICE_ENV_VARS", "3"), o;
    };
var i = j(qc(), 1);
var QTt = (e = {}) =>
  i.memoize(
    i.chain(nEt(e), async () => {
      throw new i.TokenProviderError("Could not load token from any providers", false);
    }),
    (n) => n.expiration !== void 0 && n.expiration.getTime() - Date.now() < 300000,
    (n) => n.expiration !== void 0,
  );
export { JTt, QTt };
