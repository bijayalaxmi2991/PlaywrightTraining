//Function only has argument but no return value
//name is the argument/parameter of the function
function greetByName(name){
    console.log("Hello, " + name + "!");
}


greetByName("Alice"); // Output: Hello, Alice!

let name1 = greetByName("Bob");
console.log(name1); // Output: undefined - since the function does not return anything, it returns undefined by default