"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laboratorySchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const laboratorySchema = typebox_1.Type.Object({
    laboratory_name: typebox_1.Type.String(),
    description: typebox_1.Type.Optional(typebox_1.Type.String()),
}, { additionalProperties: false });
exports.laboratorySchema = laboratorySchema;
//# sourceMappingURL=laboratory.js.map