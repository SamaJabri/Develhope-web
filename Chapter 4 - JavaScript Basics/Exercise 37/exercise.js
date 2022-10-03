function printName() {
    let helloName = "Hello john";

    function inner() {
        return helloName;
    }
    console.log(inner());
}

printName();