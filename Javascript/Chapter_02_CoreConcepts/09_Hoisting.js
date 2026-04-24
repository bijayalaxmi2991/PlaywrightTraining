console.log(fname); // This will log 'undefined' due to hoisting
var name = "Bijaya";
console.log(fname); // This will log 'Bijaya' as the variable is now assigned a value

// console.log(a); //Error: Cannot access 'a' before initialization, because 'let' is not hoisted like 'var'
let a=10;
console.log(a);

//Hoisting does not physically move your code.
//It is mental model that helps you understand how JavaScript executes your code.