//For loop: help to repeat a block of code.
//Increatment: 
//Pre increment: ++i; // first increment then use the value of i
//Post increment: i++; // first use the value of i then increment it

let a = 10;
let b = ++a; //unary plus operator, converts a to a number, but since a is already a number, it remains 10 
console.log(a); // Output: 11, a is incremented to 11
console.log(b); // Output: 11, b is assigned the value of a after incrementing

let c = 10;
let d = c++; //post increment, d is assigned the value of c before incrementing
console.log(c); // Output: 11, c is incremented to 11
console.log(d); // Output: 10, d is assigned the value of c before incrementing

