# Exercise 43

Do you know any other way to copy the `user` object without changing its properties?

let user = {
name: "Cosimo",
age: 30,
};

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);

**Suggestion**
This time you wouldn't need a `for in` loop.
You would need a new copy of the `user` object
You can find some useful [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
