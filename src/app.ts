import "express-async-errors";

import { validationErrorMiddleware } from "./lib/middleware/validation";
import { initCorsMiddleware } from "./lib/middleware/cors";
import { initSessionMiddleware } from "./lib/middleware/session";
import { passport } from "./lib/middleware/passport";

import laboratorysRoutes from "./routes/laboratories";
import authRoutes from "./routes/auth";

const express = require("express");

const app = express();

app.use(initSessionMiddleware());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use(initCorsMiddleware());

app.use("/laboratories", laboratorysRoutes);
app.use("/auth", authRoutes);

app.use(validationErrorMiddleware);

export default app;
