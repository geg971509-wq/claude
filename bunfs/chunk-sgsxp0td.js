// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { S } from "/$bunfs/root/chunk-yz031c9r.js";
var qc = S(function (h) {
  class s extends Error {
    name = "ProviderError";
    tryNextLink;
    constructor(r, t = true) {
      let n,
        e = true;
      if (typeof t === "boolean") (n = void 0), (e = t);
      else if (t != null && typeof t === "object") (n = t.logger), (e = t.tryNextLink ?? true);
      super(r);
      (this.tryNextLink = e),
        Object.setPrototypeOf(this, s.prototype),
        n?.debug?.(`@smithy/property-provider ${e ? "->" : "(!)"} ${r}`);
    }
    static from(r, t = true) {
      return Object.assign(new this(r.message, t), r);
    }
  }
  class f extends s {
    name = "CredentialsProviderError";
    constructor(r, t = true) {
      super(r, t);
      Object.setPrototypeOf(this, f.prototype);
    }
  }
  class l extends s {
    name = "TokenProviderError";
    constructor(r, t = true) {
      super(r, t);
      Object.setPrototypeOf(this, l.prototype);
    }
  }
  var y =
      (...r) =>
      async () => {
        if (r.length === 0) throw new s("No providers in chain");
        let t;
        for (let n of r)
          try {
            return await n();
          } catch (e) {
            if (((t = e), e?.tryNextLink)) continue;
            throw e;
          }
        throw t;
      },
    p = (r) => () => Promise.resolve(r),
    d = (r, t, n) => {
      let e,
        o,
        i,
        c = false,
        a = async () => {
          if (!o) o = r();
          try {
            (e = await o), (i = true), (c = false);
          } finally {
            o = void 0;
          }
          return e;
        };
      if (t === void 0)
        return async (u) => {
          if (!i || u?.forceRefresh) e = await a();
          return e;
        };
      return async (u) => {
        if (!i || u?.forceRefresh) e = await a();
        if (c) return e;
        if (n && !n(e)) return (c = true), e;
        if (t(e)) return await a(), e;
        return e;
      };
    };
  h.CredentialsProviderError = f;
  h.ProviderError = s;
  h.TokenProviderError = l;
  h.chain = y;
  h.fromStatic = p;
  h.memoize = d;
});
export { qc };
