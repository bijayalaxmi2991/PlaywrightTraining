//Question
let name1 = "" ? "Has name": "No name";
console.log(name1); // Output: No name, empty string is falsy

//Question
let name2 = "" || "Default";
console.log(name2); // Output: Default, empty string is falsy, so it returns the second operand "Default". 
// If the first operand was a non-empty string, it would return that instead.

//Question
let name3 = 0 || "Default";
console.log(name3); // Output: Default, 0 is falsy

let name4 = "" ?? "Default"; //output: "", 
// nullish coalescing operator (??) only considers null and undefined as falsy, but empty string is not null or undefined, so it returns the empty string instead of "Default".
console.log("Name is: " + name4);

let name5 = undefined ?? "Default"; //output: "Default", undefined is nullish, so it returns "Default".
console.log("Name is: " + name5);

let name6 = true ? "":"Default"; //output: ""