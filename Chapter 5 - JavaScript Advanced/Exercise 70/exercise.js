const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

const person2 = { ...person1, address : {...person1.address, city : 'Milan'}};
/* const person2 = structuredClone(person1);
 person2.address.city = 'Milan';  */

/* const t = {...person2};
t.address.city = "Sama";
console.log(person2);
console.log(t); */

console.log(person1);
console.log(person2); 