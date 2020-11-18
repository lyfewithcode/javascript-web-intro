/*
================= Spread Operator =================
- Immutable vs Mutable Data
- Spread Operator ... (membuat mutable jadi immutable, bisa digunakan untuk parameter yg membuat function menjadi lebih dinamis)
- Rest Parameter
*/

// Immutable --> tidak bisa diubah
// Mutable --> bisa diubah

/*
Case : Copy & Update
Rute : Don't change original
*/

// Immutable <-- primitive data type
let str = "Hello World";
let newStr = str;
newStr = "Update Hello World";
console.log(newStr);
console.log(str);

let num = 10;
let newNum = num;
newNum = 11;
console.log(newNum);
console.log(num);

// Mutable <-- object
const book = {
    title: "Javascript Advance",
    author: "Jhon Doe"
}
// const newBook = book; // copy by reference, khusus object
const newBook = { ...book }; // immutable, spreed operator
newBook.title = "Update Javascript Advance";
console.log(newBook);
console.log(book);

const hobbies = ["Mucic", "Dancing", "Sleeping"];
// const newHobbies = hobbies;
const newHobbies = [ ...hobbies ]; //immutable, spreed operator
newHobbies.push("Coding");
console.log(newHobbies);
console.log(hobbies);

const sum = (a, b, c) => a + b + c;
const number = [2, 4, 3];
const result = sum(...number);
console.log(result);

const sum2 = (...allNums) => {
    let total = 0
    allNums.forEach(num => total = total + num);
    return total;
};
const result2 = sum2(2, 4, 5, 7, 1, 8);
console.log(result2);