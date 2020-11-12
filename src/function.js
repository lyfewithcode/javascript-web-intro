/*
================= Function =================
Function Declaration vs Function Expression
Arrow Function
IIFE (Immediately Invoked Function Expression)
Default Parameter
*/

// ==> function declaration
function hello(name) {
    console.log("Hello " + name);
}
hello("Fitri");

function multiply(a, b) {
    return a * b;
};
let result = multiply(3,2);
console.log(result);


// ==> function expression
const hello2 = function (name) {
    console.log("Hello " + name);
};
hello2("Yuda");


// arrow function
const hello3 = name => {
    console.log("Hello " + name);
};
hello3("Mey");

// const multiply2 = (a, b) => {
//     return a * b;
// };
// console.log(multiply(4, 5));

const multiply2 = (a, b = 1) => a * b;
console.log(multiply(4, 5));

// ==> IIFE --> autorun
(function() {
    console.log('auto execute');
})();
