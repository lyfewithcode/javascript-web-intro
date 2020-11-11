/*
================= Variables =================
- var, let, const
- data types
- scope & hoisting
*/

// var name // declaration
// name = "Yuda" // assignment
var name = "Yuda"; // re-declare
let city = "Depok"; // no re-declare, re-assign
const age = 22;

var name = "Mey";
// let city; // Error : Identifier 'city' has already been declared
city = "Bogor";
// const age = "19"; // Error : Identifier 'age' has already been declared
// const age = "20"; // Error : read-only

console.log(name, typeof name);
console.log(city, typeof city);
console.log(age, typeof age);

// ================= Data Types =================
/*
    1. Primitives :
        String, Number, Boolean, Null, Undefined, Symbol
    2. Object
*/

const socialMedia = {
    instagram: "@yuda_ig",
    facebook: "@yuda_fb"
};

console.log(socialMedia.facebook, typeof socialMedia);
console.log(socialMedia.instagram, typeof socialMedia);

const hobbies = ["Music", "Dancing", "Sleeping"];
console.log(hobbies[0], typeof hobbies);
console.log(hobbies[1], typeof hobbies);
console.log(hobbies[2], typeof hobbies);

// Hoisting --> mengangkat
a = 1;
var a;
console.log(a);

// Scope
let b = 2 // global scope
{
    let c = 3; // local scope
    var d = 4;
    console.log(b);
}

{
    console.log(b);
    // console.log(c);
    console.log(d);
}