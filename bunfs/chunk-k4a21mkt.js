// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { J, G } from "/$bunfs/root/chunk-f9h0bg01.js";
import { be } from "/$bunfs/root/chunk-gcks6mn0.js";
import { T4 } from "/$bunfs/root/chunk-qm65zb83.js";
import { y, p, g } from "/$bunfs/root/chunk-ca80fke8.js";
import { l, E } from "/$bunfs/root/chunk-ypdw393e.js";
import { b, V, le, n } from "/$bunfs/root/chunk-fv016jr6.js";
import { Gi } from "/$bunfs/root/chunk-4rh74qms.js";
import { s5, UT, u0, IC, Eqt, B$, DEn, cA } from "/$bunfs/root/chunk-r3qa2s4k.js";
import { Ff } from "/$bunfs/root/chunk-s28wf80n.js";
import { nJ, $e } from "/$bunfs/root/chunk-2masxyqj.js";
import { Wn } from "/$bunfs/root/chunk-nqmqabr8.js";
import { O } from "/$bunfs/root/chunk-dqkj2bph.js";
import { existsSync as ee, readFileSync as te } from "fs";
import { homedir as re } from "os";
import { join as N } from "path";
var Eu = Symbol("secureStorage.READ_FAILED");
import { AsyncLocalStorage as L } from "async_hooks";
import { join as U } from "path";
var _ = new L(),
  v = Promise.resolve();
async function kEn(e) {
  if (_.getStore()) return e();
  let t = v,
    r = Promise.withResolvers();
  v = r.promise;
  try {
    await t;
    let a = UT();
    await le().mkdir(a);
    let o = await Gi(U(a, ".storage-write"), {
      realpath: false,
      retries: { retries: 10, minTimeout: 100, maxTimeout: 1000 },
      stale: 15000,
      onCompromised: (s) => n(`[secureStorage] write lock compromised: ${l(s)}`, { level: "warn" }),
    });
    try {
      return await _.run(true, e);
    } finally {
      await o().catch((s) => n(`[secureStorage] write lock release failed: ${l(s)}`, { level: "warn" }));
    }
  } finally {
    r.resolve();
  }
}
async function For(e) {
  return _.run(true, e);
}
function d(e, t, r) {
  return kEn(async () => {
    e.invalidateCache?.();
    let a = await (e.readAsyncStrict?.(r) ?? e.readAsync(r));
    if (a === Eu) return { success: false, transient: true };
    let o = a ?? {},
      s = t(o);
    return s === o ? { success: true } : await e.update(s, r);
  });
}
function I(e, t) {
  let r = {
    name: `${e.name}-with-${t.name}-fallback`,
    read(a) {
      let o = e.read(a);
      if (o !== null && o !== void 0) return o;
      return t.read(a) || {};
    },
    async readAsync(a) {
      let o = await e.readAsync();
      if (o !== null && o !== void 0) return o;
      return (await t.readAsync(a)) || {};
    },
    async readAsyncStrict(a) {
      let o = await (e.readAsyncStrict?.() ?? e.readAsync());
      if (o === Eu) return Eu;
      if (o !== null) return o;
      return (await (t.readAsyncStrict?.(a) ?? t.readAsync(a))) || {};
    },
    invalidateCache() {
      e.invalidateCache?.(), t.invalidateCache?.();
    },
    mutate(a, o) {
      return d(r, a, o);
    },
    async update(a, o) {
      let s = await e.readAsync(),
        i = await e.update(a);
      if (i.success) {
        if (s === null) await t.delete(o);
        return y("secure_storage_credentials_write"), i;
      }
      if (i.transient) return g("secure_storage_credentials_write", "primary_transient_skip_fallback"), i;
      let u = await t.update(a, o);
      if (u.success) {
        if (s !== null) await e.delete();
        return g("secure_storage_credentials_write", "plaintext_fallback_used"), { success: true, warning: u.warning };
      }
      return p("secure_storage_credentials_write", "primary_and_fallback_failed"), { success: false };
    },
    async delete(a) {
      let o = (await t.readAsync(a)) !== null,
        [s, i] = await Promise.all([e.delete(), t.delete(a)]);
      return s || (o && i);
    },
  };
  return r;
}
var m = 2000,
  H = 4032,
  j = 44,
  K = 36,
  P = {
    name: "keychain",
    read() {
      let e = B$(),
        t = e.cache;
      if (Date.now() - t.cachedAt < Eqt) return t.data;
      let r = e.lastReadFailure;
      if (r !== null && Date.now() - r < DEn) return t.data;
      try {
        let a = u0(s5),
          o = IC(),
          s = nJ(`security find-generic-password -a "${o}" -w -s "${a}"`, { timeout: m });
        if (s) {
          let i = V(s);
          return (e.cache = { data: i, cachedAt: Date.now() }), i;
        }
      } catch (a) {}
      if (t.data !== null)
        return (
          n("[keychain] read failed; serving stale cache", { level: "warn" }),
          (e.cache = { data: t.data, cachedAt: Date.now() }),
          t.data
        );
      return (e.cache = { data: null, cachedAt: Date.now() }), null;
    },
    async readAsync() {
      let e = B$(),
        t = e.cache;
      if (Date.now() - t.cachedAt < Eqt) return t.data;
      if (e.readInFlight) return e.readInFlight;
      let r = e.lastReadFailure;
      if (r !== null && Date.now() - r < DEn) return null;
      let a = e.generation,
        o = T().then((s) => {
          if (a !== e.generation) return s === Eu ? null : s;
          if (((e.readInFlight = null), s === Eu)) {
            if (
              (n("[keychain] readAsync failed; not caching a null", { level: "warn" }),
              (e.lastReadFailure = Date.now()),
              t.data !== null)
            )
              e.cache = { data: t.data, cachedAt: Date.now() };
            return t.data;
          }
          let i = s ?? t.data;
          return (e.cache = { data: i, cachedAt: Date.now() }), (e.lastReadFailure = null), i;
        });
      return (e.readInFlight = o), o;
    },
    async readAsyncStrict() {
      let e = B$(),
        t = e.generation,
        r = await T();
      if (r !== Eu && t === e.generation)
        (e.cache = { data: r ?? e.cache.data, cachedAt: Date.now() }), (e.lastReadFailure = null);
      return r;
    },
    invalidateCache() {
      cA();
    },
    mutate(e) {
      return d(P, e);
    },
    async update(e) {
      let t = B$();
      cA();
      try {
        let r = u0(s5),
          a = IC(),
          o = b(e),
          s = Buffer.from(o, "utf-8").toString("hex"),
          i = `add-generic-password -U -a "${a}" -s "${r}" -X "${s}"
`,
          u;
        if (i.length <= H)
          u = await Ff("security", ["-i"], { input: i, stdio: ["pipe", "pipe", "pipe"], reject: false, timeout: m });
        else
          n(`Keychain payload (${o.length}B JSON) exceeds security -i stdin limit; using argv`, { level: "warn" }),
            (u = await Ff("security", ["add-generic-password", "-U", "-a", a, "-s", r, "-X", s], {
              stdio: ["ignore", "pipe", "pipe"],
              reject: false,
              timeout: m,
            }));
        if (u.exitCode !== 0) return { success: false, transient: u.timedOut };
        return (t.cache = { data: e, cachedAt: Date.now() }), t.generation++, (t.readInFlight = null), { success: true };
      } catch (r) {
        return { success: false };
      }
    },
    async delete() {
      cA();
      try {
        let e = u0(s5),
          t = IC();
        return await $e("security", ["delete-generic-password", "-a", t, "-s", e], { timeout: m, useCwd: false }), true;
      } catch (e) {
        return false;
      }
    },
  };
async function T() {
  try {
    let e = u0(s5),
      t = IC(),
      { stdout: r, code: a } = await $e("security", ["find-generic-password", "-a", t, "-w", "-s", e], {
        useCwd: false,
        preserveOutputOnError: false,
        timeout: m,
      });
    if (a === 0 && r) return V(r.trim());
    if (a === 0 || a === j || a === K) return null;
    return Eu;
  } catch (e) {
    return null;
  }
}
var h;
function HEn() {
  if (h !== void 0) return h;
  return (
    (h = Ff("security", ["show-keychain-info"], { reject: false, stdio: ["ignore", "pipe", "pipe"], timeout: m })
      .then((e) => e.exitCode === 36)
      .catch(() => false)),
    h
  );
}
import { chmod as W } from "fs/promises";
import { join as Y } from "path";
function c() {
  let e = UT(),
    t = ".credentials.json";
  return { storageDir: e, storagePath: Y(e, ".credentials.json") };
}
var x = "Warning: Storing credentials in plaintext.";
function X(e, t) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return null;
  if ((e === "EACCES" || e === "EPERM") && t !== "win32") return null;
  return Eu;
}
var z = {
  async read() {
    let { storagePath: e } = c();
    try {
      let t = await le().readFile(e, { encoding: "utf8" });
      return V(t);
    } catch {
      return null;
    }
  },
  async readStrict() {
    let { storagePath: e } = c(),
      t;
    try {
      t = await le().readFile(e, { encoding: "utf8" });
    } catch (r) {
      return X(E(r), "darwin");
    }
    try {
      return V(t);
    } catch {
      return null;
    }
  },
  async write(e) {
    try {
      let { storageDir: t, storagePath: r } = c();
      return await le().mkdir(t), await Wn(r, b(e), 384), await W(r, 384), { success: true, warning: x };
    } catch {
      return { success: false };
    } finally {
      if (O()) WY();
    }
  },
  async remove() {
    let { storagePath: e } = c();
    try {
      return await le().unlink(e), true;
    } catch (t) {
      if (E(t) === "ENOENT") return true;
      return false;
    } finally {
      if (O()) WY();
    }
  },
};
function q(e) {
  switch (e.state) {
    case "present":
      return e.data;
    case "absent":
    case "corrupt":
      return null;
    case "refused-symlink":
    case "read-failed":
      return Eu;
    default: {
      let t = e;
      return Eu;
    }
  }
}
function Z(e) {
  return {
    async read() {
      let { storagePath: t } = c(),
        r = f(),
        a = r.generation,
        o = await w(e.readCredentials(), r);
      return F(r, o, t, a), o.state === "present" ? o.data : null;
    },
    async readStrict() {
      let { storagePath: t } = c(),
        r = f(),
        a = r.generation,
        o = await w(e.readCredentialsStrict(), r);
      return F(r, o, t, a), q(o);
    },
    async write(t) {
      let { storagePath: r } = c(),
        a = f(),
        o = a.generation,
        s = await w(e.writeCredentials(t), a);
      if (s.state === "written" && o === a.generation) A(a, r, b(t));
      else S(a);
      return s.state === "written" ? { success: true, warning: x } : { success: false };
    },
    async remove() {
      let { storagePath: t } = c(),
        r = f(),
        a = r.generation,
        o = await w(e.deleteCredentials(), r);
      if (o.state === "deleted" && a === r.generation) A(r, t, null);
      else S(r);
      return o.state === "deleted";
    },
  };
}
async function w(e, t) {
  try {
    return await e;
  } catch (r) {
    throw (S(t), r);
  }
}
class M {
  copy = void 0;
  generation = 0;
}
var Q = new J(() => new M());
function f() {
  return Q.of(G().host);
}
function A(e, t, r) {
  (e.copy = { storagePath: t, text: r }), e.generation++;
}
function F(e, t, r, a) {
  if (a !== e.generation) {
    S(e);
    return;
  }
  switch (t.state) {
    case "present":
      A(e, r, b(t.data));
      return;
    case "absent":
    case "corrupt":
    case "refused-symlink":
      A(e, r, null);
      return;
    case "read-failed":
      S(e);
      return;
    default: {
      let o = t;
      S(e);
    }
  }
}
function S(e) {
  (e.copy = void 0), e.generation++;
}
function WY() {
  S(f());
}
function C(e) {
  return O() && e !== void 0 ? Z(e) : z;
}
var D = {
  name: "plaintext",
  read(e) {
    let { storagePath: t } = c();
    try {
      let r = O() && e?.fromStoreCopy === true ? f().copy : void 0;
      if (r !== void 0 && r.storagePath === t) {
        if (r.text === null) return null;
        return JSON.parse(r.text);
      }
      let a = le().readFileSync(t, { encoding: "utf8" });
      return V(a);
    } catch {
      return null;
    }
  },
  invalidateCache() {
    WY();
  },
  readAsync(e) {
    return C(e).read();
  },
  readAsyncStrict(e) {
    return C(e).readStrict();
  },
  mutate(e, t) {
    return d(D, e, t);
  },
  update(e, t) {
    return C(t).write(e);
  },
  delete(e) {
    return C(e).remove();
  },
};
class $or {
  memo;
  handedIn;
  prime(e, t) {
    if (this.memo !== void 0) return;
    this.handedIn = { enabled: e, ...t() };
  }
  resolve(e, t) {
    if (this.memo !== void 0) return this.memo;
    try {
      let r = e(),
        a = this.handedIn;
      if (a !== void 0 && a.legacyPath === r.legacyPath && a.configPath === r.configPath) this.memo = a.enabled;
      else this.memo = t(r);
    } catch {
      this.memo = false;
    }
    return this.memo;
  }
  reset() {
    (this.memo = void 0), (this.handedIn = void 0);
  }
}
var ebr = new J(() => new $or());
function k() {
  return ebr.of(G().host);
}
function B() {
  return {
    legacyPath: N(be(), ".config.json"),
    configPath: N(process.env.CLAUDE_CONFIG_DIR || re(), `.claude${T4()}.json`),
  };
}
function e0r() {
  if (process.env.CLAUDE_CODE_FORCE_WINDOWS_CREDMAN === "1") return true;
  return k().resolve(B, ae);
}
function ae({ legacyPath: e, configPath: t }) {
  let r = ee(e) ? e : t;
  return JSON.parse(te(r, "utf8")).cachedGrowthBookFeatures?.tengu_windows_credman === true;
}
function xEn(e) {
  k().prime(e, B);
}
function t0r() {
  k().reset();
}
var R;
function n0r(e) {
  throw Error("__setSecureStorageForTesting called outside test build");
}
function vn() {
  if (R) return R;
  return I(P, D);
}
export { Eu, kEn, For, HEn, WY, $or, ebr, e0r, xEn, t0r, n0r, vn };
