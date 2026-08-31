// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Jh } from "/$bunfs/root/chunk-nsfgbyjp.js";
import { qc } from "/$bunfs/root/chunk-sgsxp0td.js";
import { j } from "/$bunfs/root/chunk-yz031c9r.js";
var _ = j(Jh(), 1),
  S = j(qc(), 1),
  kGt = "AWS_ACCESS_KEY_ID",
  HGt = "AWS_SECRET_ACCESS_KEY",
  dbr = "AWS_SESSION_TOKEN",
  pbr = "AWS_CREDENTIAL_EXPIRATION",
  fbr = "AWS_CREDENTIAL_SCOPE",
  mbr = "AWS_ACCOUNT_ID",
  AYe = (e) => async () => {
    e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
    let o = process.env[kGt],
      r = process.env[HGt],
      n = process.env[dbr],
      s = process.env[pbr],
      t = process.env[fbr],
      E = process.env[mbr];
    if (o && r) {
      let c = {
        accessKeyId: o,
        secretAccessKey: r,
        ...(n && { sessionToken: n }),
        ...(s && { expiration: new Date(s) }),
        ...(t && { credentialScope: t }),
        ...(E && { accountId: E }),
      };
      return _.setCredentialFeature(c, "CREDENTIALS_ENV_VARS", "g"), c;
    }
    throw new S.CredentialsProviderError("Unable to find environment variable credentials.", { logger: e?.logger });
  };
export { kGt, HGt, dbr, pbr, fbr, mbr, AYe };
