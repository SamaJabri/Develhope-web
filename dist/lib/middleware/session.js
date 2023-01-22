"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSessionMiddleware = void 0;
const express_session_1 = __importDefault(require("express-session"));
const config_1 = __importDefault(require("../../config"));
const initSessionMiddleware = () => {
    return (0, express_session_1.default)({
        secret: config_1.default.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    });
};
exports.initSessionMiddleware = initSessionMiddleware;
//# sourceMappingURL=session.js.map