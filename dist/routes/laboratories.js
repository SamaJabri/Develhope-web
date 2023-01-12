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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const client_1 = require("@prisma/client");
const validation_1 = require("../lib/middleware/validation");
const multer_1 = require("../lib/middleware/multer");
const upload = (0, multer_1.initMulterMiddleware)();
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.get("/", async (req, res) => {
    const laboratories = await prisma.laboratory.findMany();
    res.json(laboratories);
});
router.get("/:id(\\d+)", async (req, res, next) => {
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
router.post("/", (0, validation_1.validate)({ body: validation_1.laboratorySchema }), async (req, res) => {
    const laboratoryData = req.body;
    const laboratory = await prisma.laboratory.create({
        data: laboratoryData,
    });
    res.status(201).json(laboratory);
});
router.put("/:id(\\d+)", (0, validation_1.validate)({ body: validation_1.laboratorySchema }), async (req, res, next) => {
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
router.delete("/:id(\\d+)", async (req, res, next) => {
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
router.post("/photo", upload.single("photo"), async (req, res, next) => {
    console.log("req.file", req.file);
    if (!req.file) {
        res.status(400);
        return next("No file uploaded");
    }
    const photoFilename = req.file.filename;
    res.status(201).json({ photoFilename });
});
router.use("/photos", express_1.default.static("uploads"));
exports.default = router;
//# sourceMappingURL=laboratories.js.map