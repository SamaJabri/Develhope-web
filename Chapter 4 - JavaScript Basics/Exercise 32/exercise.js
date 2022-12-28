function sayHelloName(callback) {
    setTimeout(() => {
        console.log("Hello"); 
        callback("Sama");
    }, 1000);
}

function printName(name) {
    console.log(name);
}

sayHelloName(printName);

