import "express-async-errors";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const express = require("express");

const app = express();
const prisma = new PrismaClient();

app.get("/laboratories", async (req: Request, res: Response) => {
  const laboratories = await prisma.laboratory.findMany();

  res.json(laboratories);
});

export default app;
