let primitive = 8;

let primitiveType = typeof(primitive);

if(primitiveType === "string") {
    console.log("string");
}
else if(primitiveType === "number") {
    console.log("number");
}
else {
    console.log("boolean");
}
