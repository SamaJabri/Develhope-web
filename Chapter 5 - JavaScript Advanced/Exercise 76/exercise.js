const number = 15;

new Promise((resolve, reject) => {
    number > 10 
    ? resolve("Number is greater than 10!")
    : reject("Number is less than 10!"); 
})
.then((result) => console.log(result))
.catch((err) => console.error(err));
