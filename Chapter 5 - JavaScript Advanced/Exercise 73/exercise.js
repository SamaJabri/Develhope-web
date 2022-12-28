const printAsyncName = (callback, name) => {
    setTimeout(() => callback(name), 1000);
}

const printName = (name) => 
    setTimeout(() => console.log(name), 1000);

printAsyncName(printName, "Micheal");

/* 
- Why callback must be an arrow function? 
    Simpler and cleaner syntax.
*/