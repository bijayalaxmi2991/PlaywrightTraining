let val = null ?? "Default Value"; // If val is null or undefined, use "Default Value"
//This is called Nullish Coalescing Operator (??) and it returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.
console.log(val); // Output: "Default Value"


let val1 = undefined ?? "Default Value"; 
console.log(val1); // Output: "Default Value"

//-----------------------------------------------------------
let milk = null;
let val2 = milk ?? "Nandini milk";
console.log("Which milk bought? " + val2); // Output: "Which milk bought? Nandini milk"

let milk1 = "Amul milk";
let val3 = milk1 ?? "Nandini milk";
console.log("Which milk bought? " + val3); // Output: "Which milk bought? Amul milk"