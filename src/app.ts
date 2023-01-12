import "express-async-errors";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import {
  validate,
  validationErrorMiddleware,
  laboratorySchema,
  LaboratoryData,
} from "./lib/validation";

const express = require("express");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/laboratories", async (req: Request, res: Response) => {
  const laboratories = await prisma.laboratory.findMany();

  res.json(laboratories);
});

app.post(
  "/laboratories",
  validate({ body: laboratorySchema }),
  async (req: Request, res: Response) => {
    const laboratory: LaboratoryData = req.body;

    res.status(201).json(laboratory);
  }
);

app.use(validationErrorMiddleware);

export default app;
