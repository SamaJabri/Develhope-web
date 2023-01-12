import express, { Router } from "express";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import {
  validate,
  laboratorySchema,
  LaboratoryData,
} from "../lib/middleware/validation";

import { initMulterMiddleware } from "../lib/middleware/multer";

const upload = initMulterMiddleware();

const router = Router();

const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  const laboratories = await prisma.laboratory.findMany();

  res.json(laboratories);
});

router.get("/:id(\\d+)", async (req: Request, res: Response, next: any) => {
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

router.post(
  "/",
  validate({ body: laboratorySchema }),
  async (req: Request, res: Response) => {
    const laboratoryData: LaboratoryData = req.body;

    const laboratory = await prisma.laboratory.create({
      data: laboratoryData,
    });

    res.status(201).json(laboratory);
  }
);

router.put(
  "/:id(\\d+)",
  validate({ body: laboratorySchema }),
  async (req: Request, res: Response, next: any) => {
    console.log(typeof next);
    const laboratoryId = Number(req.params.id);
    const laboratoryData: LaboratoryData = req.body;

    try {
      const laboratory = await prisma.laboratory.update({
        where: { laboratory_id: laboratoryId },
        data: laboratoryData,
      });

      res.status(200).json(laboratory);
    } catch (error) {
      res.status(404);
      next(`Cannot PUT /laboratories/${laboratoryId}`);
    }
  }
);

router.delete("/:id(\\d+)", async (req: Request, res: Response, next: any) => {
  const laboratoryId = Number(req.params.id);

  try {
    await prisma.laboratory.delete({
      where: { laboratory_id: laboratoryId },
    });

    res.status(204).end();
  } catch (error) {
    res.status(404);
    next(`Cannot DELETE /laboratories/${laboratoryId}`);
  }
});

router.post(
  "/photo",
  upload.single("photo"),
  async (req: Request, res: Response, next: any) => {
    console.log("req.file", req.file);

    if (!req.file) {
      res.status(400);
      return next("No file uploaded");
    }

    const photoFilename = req.file.filename;

    res.status(201).json({ photoFilename });
  }
);

router.use("/photos", express.static("uploads"));

export default router;
