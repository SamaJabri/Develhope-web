const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, ...personInfo} = person;

console.log(id, personInfo);