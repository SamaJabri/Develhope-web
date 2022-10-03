let variable = "true";

console.log("Original")
console.log("Variable value : " + variable);
console.log("Variable type : " + typeof(variable));

let convertedVariableNumber = Number(variable);

console.log("\nNumber")
console.log("Variable value : " + convertedVariableNumber);
console.log("Variable type : " + typeof(convertedVariableNumber));

let convertedVariableString = String(variable);

console.log("\nString")
console.log("Variable value : " + convertedVariableString);
console.log("Variable type : " + typeof(convertedVariableString));

let convertedVariableBoolean = Boolean(variable);

console.log("\nBoolean")
console.log("Variable value : " + convertedVariableBoolean);
console.log("Variable type : " + typeof(convertedVariableBoolean));

