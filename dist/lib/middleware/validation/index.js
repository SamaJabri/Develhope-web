"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrorMiddleware = exports.validate = void 0;
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const express_json_validator_middleware_1 = require("express-json-validator-middleware");
const validator = new express_json_validator_middleware_1.Validator({
    coerceTypes: true,
});
(0, ajv_formats_1.default)(validator.ajv, ["date-time"])
    .addKeyword("kind")
    .addKeyword("modifier");
const validate = validator.validate;
exports.validate = validate;
const validationErrorMiddleware = (error, request, response, next) => {
    if (error instanceof express_json_validator_middleware_1.ValidationError) {
        response.status(422).send({ errors: error.validationErrors });
        next();
    }
    else {
        next(error);
    }
};
exports.validationErrorMiddleware = validationErrorMiddleware;
__exportStar(require("./laboratory"), exports);
//# sourceMappingURL=index.js.map