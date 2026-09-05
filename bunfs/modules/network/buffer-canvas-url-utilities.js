// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { Zur, edr, _x, tdr, ndr, rdr, odr } from "/$bunfs/root/chunk-wxd4gdfp.js";
export {
  Zur as create,
  ndr as toBuffer,
  edr as toCanvas,
  tdr as toDataURL,
  rdr as toFile,
  odr as toFileStream,
  _x as toString,
};
export default {
  get create() {
    return Zur;
  },
  get toBuffer() {
    return ndr;
  },
  get toCanvas() {
    return edr;
  },
  get toDataURL() {
    return tdr;
  },
  get toFile() {
    return rdr;
  },
  get toFileStream() {
    return odr;
  },
  get toString() {
    return _x;
  },
};
