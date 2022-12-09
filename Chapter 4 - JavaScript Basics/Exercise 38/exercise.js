function printName() {
    let helloName = "Hello john";

    function inner() {
        return helloName;
    }
    setTimeout(() => console.log(inner()), 1000);
}

printName();