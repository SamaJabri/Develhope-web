let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {...user};

/* I used a "for in" loop here because the question said so */
for(const characteristc in newUser) {
  characteristc === "name" 
    ? newUser[characteristc] = "Paolo" 
    : null;
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
