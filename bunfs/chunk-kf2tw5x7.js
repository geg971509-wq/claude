// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.252
import { $2e } from "/$bunfs/root/chunk-v9992jrf.js";
import { UP, yx } from "/$bunfs/root/chunk-83rtv341.js";
import "/$bunfs/root/chunk-8afqfths.js";
import { S } from "/$bunfs/root/chunk-yz031c9r.js";
var s = S(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 });
  o.OTLPLogExporter = void 0;
  var r = $2e(),
    u = yx(),
    L = UP();
  class t extends L.OTLPExporterBase {
    constructor(c = {}) {
      super(
        (0, r.createOtlpGrpcExportDelegate)(
          (0, r.convertLegacyOtlpGrpcOptions)(c, "LOGS"),
          u.ProtobufLogsSerializer,
          "LogsExportService",
          "/opentelemetry.proto.collector.logs.v1.LogsService/Export",
        ),
      );
    }
  }
  o.OTLPLogExporter = t;
});
var n = S(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  e.OTLPLogExporter = void 0;
  var i = s();
  Object.defineProperty(e, "OTLPLogExporter", {
    enumerable: !0,
    get: function () {
      return i.OTLPLogExporter;
    },
  });
});
export default n();
