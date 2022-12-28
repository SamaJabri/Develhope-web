const fs = require("node:fs");

fs.writeFile("test.txt", "Learning Node.js...", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("Success!");
});

/*
    Note: "test.txt.." was added by mistake while testing and wouldn't get deleted
*/
