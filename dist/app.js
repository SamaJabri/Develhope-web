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
app.get("/laboratories/:id(\\d+)", async (req, res, next) => {
    const laboratoryId = Number(req.params.id);
    const laboratory = await prisma.laboratory.findUnique({
        where: { laboratory_id: laboratoryId },
    });
    if (!laboratory) {
        res.status(404);
        return next(`Cannot GET /laboratories/${laboratoryId}`);
    }
    res.json(laboratory);
});
app.post("/laboratories", (0, validation_1.validate)({ body: validation_1.laboratorySchema }), async (req, res) => {
    const laboratoryData = req.body;
    const laboratory = await prisma.laboratory.create({
        data: laboratoryData,
    });
    res.status(201).json(laboratory);
});
app.put("/laboratories/:id(\\d+)", (0, validation_1.validate)({ body: validation_1.laboratorySchema }), async (req, res, next) => {
    console.log(typeof next);
    const laboratoryId = Number(req.params.id);
    const laboratoryData = req.body;
    try {
        const laboratory = await prisma.laboratory.update({
            where: { laboratory_id: laboratoryId },
            data: laboratoryData,
        });
        res.status(200).json(laboratory);
    }
    catch (error) {
        res.status(404);
        next(`Cannot PUT /laboratories/${laboratoryId}`);
    }
});
app.delete("/laboratories/:id(\\d+)", async (req, res, next) => {
    const laboratoryId = Number(req.params.id);
    try {
        await prisma.laboratory.delete({
            where: { laboratory_id: laboratoryId },
        });
        res.status(204).end();
    }
    catch (error) {
        res.status(404);
        next(`Cannot DELETE /laboratories/${laboratoryId}`);
    }
});
app.use(validation_1.validationErrorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map