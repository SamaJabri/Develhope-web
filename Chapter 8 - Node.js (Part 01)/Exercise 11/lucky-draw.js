function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Joe")
  .then((response) => console.log(response))
  .then(() => luckyDraw("Caroline"))
  .then((response) => console.log(response))
  .then(() => luckyDraw("Sabrina"))
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
