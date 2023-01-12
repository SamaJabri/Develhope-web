"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const client_1 = require("@prisma/client");
const validation_1 = require("./lib/validation");
const express = require("express");
const app = express();
const prisma = new client_1.PrismaClient();
app.use(express.json());
app.get("/laboratories", async (req, res) => {
    const laboratories = await prisma.laboratory.findMany();
    res.json(laboratories);
});
app.post("/laboratories", (0, validation_1.validate)({ body: validation_1.laboratorySchema }), async (req, res) => {
    const laboratory = req.body;
    res.status(201).json(laboratory);
});
app.use(validation_1.validationErrorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map