// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { kGt, HGt, AYe } from "/$bunfs/root/chunk-bn1kv3ez.js";
import { mA } from "/$bunfs/root/chunk-g2s7kk3r.js";
import { qc } from "/$bunfs/root/chunk-sgsxp0td.js";
import { j } from "/$bunfs/root/chunk-yz031c9r.js";
var c = j(qc(), 1),
  u = j(mA(), 1);
var i = j(qc(), 1),
  f = "AWS_EC2_METADATA_DISABLED",
  p = async (e) => {
    let {
      ENV_CMDS_FULL_URI: o,
      ENV_CMDS_RELATIVE_URI: r,
      fromContainerMetadata: n,
      fromInstanceMetadata: a,
    } = await import("/$bunfs/root/chunk-wc9tsqq5.js");
    if (process.env[r] || process.env[o]) {
      e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
      let { fromHttp: t } = await import("/$bunfs/root/chunk-csen4nav.js");
      return i.chain(t(e), n(e));
    }
    if (process.env[f] && process.env[f] !== "false")
      return async () => {
        throw new i.CredentialsProviderError("EC2 Instance Metadata Service access disabled", { logger: e.logger });
      };
    return e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), a(e);
  };
function g(e, o) {
  let r = v(e),
    n,
    a,
    t,
    d = async (s) => {
      if (s?.forceRefresh) return await r(s);
      if (t?.expiration) {
        if (t?.expiration?.getTime() < Date.now()) t = void 0;
      }
      if (n) await n;
      else if (!t || o?.(t))
        if (t) {
          if (!a)
            a = r(s).then((l) => {
              (t = l), (a = void 0);
            });
        } else
          return (
            (n = r(s).then((l) => {
              (t = l), (n = void 0);
            })),
            d(s)
          );
      return t;
    };
  return d;
}
var v = (e) => async (o) => {
  let r;
  for (let n of e)
    try {
      return await n(o);
    } catch (a) {
      if (((r = a), a?.tryNextLink)) continue;
      throw a;
    }
  throw r;
};
var m = false,
  TN = (e = {}) =>
    g(
      [
        async () => {
          if (e.profile ?? process.env[u.ENV_PROFILE]) {
            if (process.env[kGt] && process.env[HGt]) {
              if (!m)
                (e.logger?.warn && e.logger?.constructor?.name !== "NoOpLogger"
                  ? e.logger.warn.bind(e.logger)
                  : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`),
                  (m = true);
            }
            throw new c.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
              logger: e.logger,
              tryNextLink: true,
            });
          }
          return e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), AYe(e)();
        },
        async (o) => {
          e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
          let { ssoStartUrl: r, ssoAccountId: n, ssoRegion: a, ssoRoleName: t, ssoSession: d } = e;
          if (!r && !n && !a && !t && !d)
            throw new c.CredentialsProviderError(
              "Skipping SSO provider in default chain (inputs do not include SSO fields).",
              { logger: e.logger },
            );
          let { fromSSO: s } = await import("/$bunfs/root/chunk-nfh8e7rm.js");
          return s(e)(o);
        },
        async (o) => {
          e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
          let { fromIni: r } = await import("/$bunfs/root/chunk-fwkcjw0r.js");
          return r(e)(o);
        },
        async (o) => {
          e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
          let { fromProcess: r } = await import("/$bunfs/root/chunk-xh81a9ew.js");
          return r(e)(o);
        },
        async (o) => {
          e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
          let { fromTokenFile: r } = await import("/$bunfs/root/chunk-d9sp039q.js");
          return r(e)(o);
        },
        async () => (
          e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"), (await p(e))()
        ),
        async () => {
          throw new c.CredentialsProviderError("Could not load credentials from any providers", {
            tryNextLink: false,
            logger: e.logger,
          });
        },
      ],
      ubr,
    ),
  z0r = (e) => e?.expiration !== void 0,
  ubr = (e) => e?.expiration !== void 0 && e.expiration.getTime() - Date.now() < 300000;
export { TN, z0r, ubr };
