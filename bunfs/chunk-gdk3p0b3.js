// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { rc } from "/$bunfs/root/chunk-f9h0bg01.js";
import { a } from "/$bunfs/root/chunk-fec4384a.js";
import { E, $o } from "/$bunfs/root/chunk-ypdw393e.js";
import { I } from "/$bunfs/root/chunk-8tgj5dp2.js";
import { v_ } from "/$bunfs/root/chunk-amem41jf.js";
import { ee } from "/$bunfs/root/chunk-4fwj3vnx.js";
import { gt, Uoe, fj } from "/$bunfs/root/chunk-q14dgq5g.js";
import { PF } from "/$bunfs/root/chunk-nfmyt8cw.js";
import { Xy } from "/$bunfs/root/chunk-2n1hsggr.js";
import { $De } from "/$bunfs/root/chunk-qy75zxb2.js";
import { Bn, _r, Ru } from "/$bunfs/root/chunk-56sxk8k2.js";
import { stat as c } from "fs/promises";
import { basename as f, extname as u, isAbsolute as h, join as g } from "path";
function Xmt(e) {
  if (e.replBridgeEnabled) return "repl";
  if (a.CLAUDE_CODE_BRIEF_UPLOAD) return "env_brief_upload";
  if (a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE) return "env_ccr";
  if (a.CLAUDE_CODE_REMOTE) return "env_byoc";
  if (PF() !== null && rc()) return I("tengu_async_goblet", !0) ? "sdk_hosted" : "sdk_hosted_disabled";
  return "none";
}
function Ymt(e) {
  return e === "sdk_hosted" && v_();
}
var _ = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".bmp": "image/bmp",
  ".ico": "image/x-icon",
  ".heic": "image/heic",
  ".heif": "image/heif",
  ".avif": "image/avif",
  ".tif": "image/tiff",
  ".tiff": "image/tiff",
  ".mp4": "video/mp4",
  ".m4v": "video/x-m4v",
  ".mov": "video/quicktime",
  ".webm": "video/webm",
  ".avi": "video/x-msvideo",
  ".mkv": "video/x-matroska",
  ".mp3": "audio/mpeg",
  ".m4a": "audio/mp4",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".aac": "audio/aac",
  ".flac": "audio/flac",
  ".pdf": "application/pdf",
  ".txt": "text/plain",
  ".log": "text/plain",
  ".md": "text/markdown",
  ".json": "application/json",
  ".csv": "text/csv",
  ".html": "text/html",
  ".htm": "text/html",
  ".xml": "application/xml",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".zip": "application/zip",
};
function ODe(e) {
  return _[u(e).toLowerCase()];
}
function p(e) {
  return typeof e !== "string";
}
async function A(e, n, i) {
  let o = await fj(n);
  if (o) return o;
  if (!h(e)) {
    let [l, ...s] = e.split(/[\\/]+/);
    if (l === f(i) && s.length > 0) {
      let d = g(i, ...s);
      try {
        if ((await c(d)).isFile()) return s.join("/");
      } catch {}
    }
  }
  return await Uoe(n);
}
function Fpn(e) {
  if (/^[a-z][a-z0-9+.-]+:\/\//i.test(e))
    return {
      result: !1,
      message: `Attachment "${e}" looks like a URL, not a local file path. This tool can only send files that exist on the local filesystem \u2014 download or write the content to a local file first, then pass that path.`,
      errorCode: 1,
    };
  let n = gt(e);
  if (Bn(n))
    return { result: !1, message: `Attachment "${e}" is a UNC network path, which is not supported.`, errorCode: 1 };
  if (_r(n))
    return {
      result: !1,
      message: `Attachment "${e}" is a /net autofs -hosts path, which is not supported.`,
      errorCode: 1,
    };
  return;
}
async function Jmt(e, n) {
  let i = ee();
  for (let o of e) {
    if (p(o)) continue;
    let l = Fpn(o);
    if (l !== void 0) return l;
    let s = gt(o);
    if (n.restricted && !Xy(s, n))
      return {
        result: !1,
        message: `Attachment "${o}" is outside the working directory; --restricted only sends files from inside it.`,
        errorCode: 1,
      };
    try {
      if (!(await c(s)).isFile())
        return { result: !1, message: `Attachment "${o}" is not a regular file.`, errorCode: 1 };
    } catch (d) {
      let t = E(d);
      if (t === "ENOENT") {
        let r = await A(o, s, i);
        return {
          result: !1,
          message:
            `Attachment "${o}" does not exist. Current working directory: ${i}.` + (r ? ` Did you mean "${r}"?` : ""),
          errorCode: 1,
        };
      }
      if ($o(d)) return { result: !1, message: `Attachment "${o}" is not accessible (${t}).`, errorCode: 1 };
      throw d;
    }
  }
  return { result: !0 };
}
async function Qmt(e, n) {
  let i = [],
    o = [];
  for (let t of e) {
    if (p(t)) {
      i.push({
        path: t.file_name,
        size: t.size,
        isImage: t.is_image,
        file_uuid: t.file_uuid,
        media_type: t.media_type ?? ODe(t.file_name),
        pathValidated: !1,
      });
      continue;
    }
    let r = gt(t);
    if (Ru(r)) throw Error(`Attachment "${t}" is a network path (UNC or /net autofs), which is not supported.`);
    let m = await c(r);
    o.push(i.length), i.push({ path: r, size: m.size, isImage: $De.test(r), media_type: ODe(r), pathValidated: !0 });
  }
  let { lane: l } = n;
  if (o.length === 0 || l === "none" || l === "sdk_hosted_disabled") return i;
  let { uploadBriefAttachment: s } = await import("/$bunfs/root/chunk-nj69gq71.js"),
    d = await Promise.all(
      o.map((t) => s(i[t].path, i[t].size, { lane: l, signal: n.signal, credentials: n.credentials })),
    );
  return (
    o.forEach((t, r) => {
      let m = d[r];
      if (typeof m === "string") i[t] = { ...i[t], file_uuid: m };
      else i[t] = { ...i[t], upload_error: m.error };
    }),
    i
  );
}
export { Xmt, Ymt, ODe, Fpn, Jmt, Qmt };
