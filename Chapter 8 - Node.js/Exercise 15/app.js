const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ id: 0, name: "Biochemistry Laboratory" });
});

module.exports = app;
