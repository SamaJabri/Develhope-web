const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "Sama Jabri", age: 22 });
});

module.exports = app;
