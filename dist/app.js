"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const validation_1 = require("./lib/middleware/validation");
const cors_1 = require("./lib/middleware/cors");
const session_1 = require("./lib/middleware/session");
const passport_1 = require("./lib/middleware/passport");
const laboratories_1 = __importDefault(require("./routes/laboratories"));
const auth_1 = __importDefault(require("./routes/auth"));
const express = require("express");
const app = express();
app.use((0, session_1.initSessionMiddleware)());
app.use(passport_1.passport.initialize());
app.use(passport_1.passport.session());
app.use(express.json());
app.use((0, cors_1.initCorsMiddleware)());
app.use("/laboratories", laboratories_1.default);
app.use("/auth", auth_1.default);
app.use(validation_1.validationErrorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map