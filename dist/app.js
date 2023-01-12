"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const client_1 = require("@prisma/client");
const express = require("express");
const app = express();
const prisma = new client_1.PrismaClient();
app.get("/laboratories", async (req, res) => {
    const laboratories = await prisma.laboratory.findMany();
    res.json(laboratories);
});
exports.default = app;
//# sourceMappingURL=app.js.map