let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

let convertedHello = Number(hello);
let convertedAge = Boolean(age);
let convertedIsGraduated = String(isGraduated);

console.log("Number Hello : " + convertedHello);
console.log("Boolean Age : " + convertedAge);
console.log("String IsGraduated : " + convertedIsGraduated);

/*
    Explanation for convertedHello output: 
    
    'hello' variable in its string form doesn't contain any numbers, therefore when the Number() 
    method is applied it returns NaN (Not a Number). Which is the same as undefined but for numbers.
*/ 