const isLogged = true;

const isLoggedIn = (loggedIn) => new Promise((resolve, reject) => {
    loggedIn 
    ? resolve(Math.random())
    : reject("Not logged in!");
});

const checkNumber = (num) => new Promise((resolve, reject) => {
    num > 0.5
    ? resolve({name: "John", age: 24})
    : reject("Error!");
});

isLoggedIn(isLogged)
.then((num) => {
    console.log(num); 
    return num;
})
.then(checkNumber)
.then((result) => console.log(result))
.catch((err) => console.error(err));

