console.log(greeting); //output: undefined
var greeting = "Hello, World!";
console.log(greeting); //output: Hello, World!

//Behind the scenes:
//var greeting; // Declaration is hoisted to the top, but not the assignment
//console.log(greeting); //output: undefined
//greeting = "Hello, World!"; // Assignment happens here
//console.log(greeting); //output: Hello, World!    


//-----------------------------------------------

var a = "Bijaya"; // This variable declaration is hoisted to the top of the scope, but its assignment happens at the line where it is defined. Hence, the first console.log(a) will output 'undefined', and the second console.log(a) will output 'Bijaya'.

if(true){
    console.log(a); //output: Bijaya // var 'a' is a global variable and is accessible inside the if block due to hoisting.
    var a = "Laxmi";
    console.log(a); //output: Laxmi
}