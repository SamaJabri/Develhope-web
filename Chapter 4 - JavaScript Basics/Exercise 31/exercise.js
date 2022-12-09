function sayHelloName(callback) {
    console.log("Hello "); 
    callback("Someone");
}

function printName(name) {
    console.log(name);
}

sayHelloName(printName);

