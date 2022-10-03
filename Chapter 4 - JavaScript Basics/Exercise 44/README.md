# Exercise 44

We have an object literal called `smartphone`. By using a specific method, we can "freeze" the object, so it can't be modified. Do you know what kind of method we need?

const smartphone = {
brand: "Apple",
name: "Iphone 13",
price: 1300,
};

smartphone.price = 100;

console.log(smartphone);
