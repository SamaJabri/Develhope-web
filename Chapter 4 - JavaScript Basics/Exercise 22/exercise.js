let primitive = 8;

let primitiveType = typeof(primitive);

switch (primitiveType) {
    case "string" :
        console.log("string");
        break;

    case "number" :
        console.log("number");
        break;

    case "boolean" :
        console.log("boolean");
        break;

    default : 
        console.log(primitiveType);
        break;
}
