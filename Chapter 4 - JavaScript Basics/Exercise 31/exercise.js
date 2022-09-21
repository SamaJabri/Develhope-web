function sayHelloName(callback) {
    console.log("Hello "); 
    callback("Sama");
}

function printName(name) {
    console.log(name);
}

sayHelloName(printName);

