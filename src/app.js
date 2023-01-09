const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.get("/laboratories", async (req, res) => {
  const laboratories = await prisma.Laboratory.findMany();

  res.json(laboratories);
});

module.exports = app;
