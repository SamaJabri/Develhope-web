import "express-async-errors";

import { validationErrorMiddleware } from "./lib/middleware/validation";

import laboratorysRoute from "./routes/laboratories";

const express = require("express");

const app = express();

app.use(express.json());

app.use("/laboratories", laboratorysRoute);

app.use(validationErrorMiddleware);

export default app;
