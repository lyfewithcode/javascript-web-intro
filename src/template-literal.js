/*
================= Template Literal =================
` ` --> backtick
' ' --> single quote
" " --> double quote
*/

// => concatenation
let firstName = "Yuda";
let lastName = "Lego";
console.log("Hello " + firstName + " " + lastName);
console.log(`Hello ${firstName} ${lastName}`);

// => with javascript expression
let a = 4;
let b = 5;
console.log(`I have ${a * b} books`);

// => with array
let fruits = ["apple", "banana", "cherries"];
console.log(fruits[0] + "," + fruits[1] + "," + fruits[2]);
console.log(`I have ${fruits} in my pockets`);
