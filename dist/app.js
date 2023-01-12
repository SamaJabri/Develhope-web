"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const validation_1 = require("./lib/middleware/validation");
const laboratories_1 = __importDefault(require("./routes/laboratories"));
const express = require("express");
const app = express();
app.use(express.json());
app.use("/laboratories", laboratories_1.default);
app.use(validation_1.validationErrorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map