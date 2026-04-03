//var let const

//var - function-scoped, can be redeclared and updated
var a = 10; //global scope
console.log(a); // Output: 10

function testVar(){
   var a = 20; //Local scope
   console.log(a); // Output: 20
   if(true){
    var a = 30; //Still function-scoped, not block-scoped
    console.log(a); // Output: 30
   }
   console.log(a); // Output: 30, because var is function-scoped
}

testVar();
function testLet(){
   let a = 20; //Local scope
   console.log(a); // Output: 20
   if(true){
    let a = 30; //Block-scoped
    console.log(a); // Output: 30
   }
   console.log(a); // Output: 20, because let is block-scoped

}

testLet();

let x = 10;
// let x = 20; // SyntaxError: Identifier 'x' has already been declared, because let cannot be redeclared in the same scope

var y = 10;
var y = 20; // No error, because var can be redeclared in the same scope

var nm = "John";
// let nm = "Doe"; // SyntaxError: Identifier 'nm' has already been declared, because let cannot be redeclared in the same scope   

const z = 10; //value cannot be changed or reassigned
// const is block-scoped like let, but it cannot be redeclared or updated
// z = 20; // TypeError: Assignment to constant variable, because const cannot be reassigned    
