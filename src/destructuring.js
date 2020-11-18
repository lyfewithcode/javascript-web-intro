/*
================= Destructuring =================
- object
- array
- function parameter
*/

//=> Object
const user = {
    firstName: "Jhone",
    lastName: "Dhoe",
    country: "Indonesia",
    language: "Bahasa",
    links: {
        social: {
            twitter: "https://twitter.com/jhondoe",
            facebook: "https://facebook.com/jhondoe"
        },
        web: {
            blog: "https://jhondoe.com"
        }
    }
};

// let firstName = user.firstName;
// let lastName = user.lastName;
let { firstName, lastName, language: lang } = user;
let { twitter, facebook } = user.links.social;
console.log(firstName, lastName, lang, twitter, facebook);


//=> Array
let myArray = [1, 2, 3, [4.1, 4.2, 4.3]];
// let a = myArray[0];
// let b = myArray[1];
// let c = myArray[2];
const [a, b, c, [d, e, f]] = myArray;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);
console.log(`e = ${e}`);
console.log(`f = ${f}`);


//=> Function Parameter
// function fullName(obj) {
//     return `${obj.firstName} ${obj.lastName}`
// }

function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}
console.log(fullName(user));