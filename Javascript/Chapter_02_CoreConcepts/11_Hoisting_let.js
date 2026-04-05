//TDZ: temporal dead zone is the time between the start of a block and the point where a variable is declared with let or const. During this time, the variable cannot be accessed and will throw a ReferenceError if you try to use it.

console.log(username); //TDZ - ReferenceError: Cannot access 'username' before initialization, because 'let' is not hoisted like 'var'
console.log("Hello"); //TDZ
console.log("Hello"); //TDZ
console.log("Hello"); //TDZ
let username = "Bijaya";
console.log(username);

//---------------------------------------------------
let a = "Bijaya";

if(true){
    console.log(a); //O/p - Bijaya, because 'a' is accessible in this block due to lexical scoping.
}

//---------------------------------------------------

let x = "global x"; // this is blocked scoped varaible not accessible inside if block.

if(true){
    console.log(x); //TDZ - ReferenceError: Cannot access 'x' before initialization, because 'let' is not hoisted like 'var'
    let x = "block-scoped x"; // this is local scoped variable and only accessible inside this if block
    console.log(x); // Output: block-scoped x
}

//---------------------------------------------------