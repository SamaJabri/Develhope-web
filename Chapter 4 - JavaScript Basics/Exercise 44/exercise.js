const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

Object.freeze(smartphone);

smartphone.price = 100;

console.log(smartphone);
