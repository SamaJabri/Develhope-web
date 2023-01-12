import "express-async-errors";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

import {
  validate,
  validationErrorMiddleware,
  laboratorySchema,
  LaboratoryData,
} from "./lib/validation";

import { initMulterMiddleware } from "./lib/middleware/multer";

const upload = initMulterMiddleware();

const express = require("express");

const corsOptions = {
  origin: "http://localhost:8080",
};

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use(cors(corsOptions));

app.get("/laboratories", async (req: Request, res: Response) => {
  const laboratories = await prisma.laboratory.findMany();

  res.json(laboratories);
});

app.get(
  "/laboratories/:id(\\d+)",
  async (req: Request, res: Response, next: any) => {
    const laboratoryId = Number(req.params.id);

    const laboratory = await prisma.laboratory.findUnique({
      where: { laboratory_id: laboratoryId },
    });

    if (!laboratory) {
      res.status(404);
      return next(`Cannot GET /laboratories/${laboratoryId}`);
    }

    res.json(laboratory);
  }
);

app.post(
  "/laboratories",
  validate({ body: laboratorySchema }),
  async (req: Request, res: Response) => {
    const laboratoryData: LaboratoryData = req.body;

    const laboratory = await prisma.laboratory.create({
      data: laboratoryData,
    });

    res.status(201).json(laboratory);
  }
);

app.put(
  "/laboratories/:id(\\d+)",
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

app.delete(
  "/laboratories/:id(\\d+)",
  async (req: Request, res: Response, next: any) => {
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
  }
);

app.post(
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

app.use(validationErrorMiddleware);

export default app;
