# Classes - Exercise 56

Create a class called `Developer`. The `Developer` class is inherited from a class called `Person` that takes in two arguments in the constructor method: `firstName` and `lastName`. The `Developer` class takes in another argument in the constructor method (`role`).

class Person {
constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}
}

const developer = new Developer("Mario", "Rossi", "Front-end");
console.log(developer.firstName + " " + developer.lastName + " " + developer.role);
