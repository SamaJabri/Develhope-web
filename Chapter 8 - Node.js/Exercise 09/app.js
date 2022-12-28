const { createServer } = require("node:http");

const createApp = () =>
  createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");

    const jsonResponse = JSON.stringify({ location: "Earth" });

    response.end(jsonResponse);
  });

module.exports = createApp;
