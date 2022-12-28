const fs = require("node:fs");

fs.writeFile("test.txt", "Learning Node.js...", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Success!");
});
