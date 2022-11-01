# Exercise 42

In the code below we have an object literal called `user` tha has two properties: `name` and `age`. If we try to create a `newUser` starting from `user` and, after that, we try to change the name, you'll notice that even the original `user` has been modified. How can we modify the name of `newUser` without changing the name of `user`?

let user = {
name: "Cosimo",
age: 30,
};

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);

**Suggestion**
Try to use a `for in` loop, as it showed in the video lessons.
You would need a new copy of the `user` object.
You can find some useful info [here](https://javascript.info/object-copy)
