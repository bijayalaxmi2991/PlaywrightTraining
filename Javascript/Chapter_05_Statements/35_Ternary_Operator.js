// // Single condition ternary operator

// let age = 20;
// let isAdult = age >= 18 ? "Yes, you are an adult." : "No, you are not an adult.";
// console.log(isAdult); // Output: Yes, you are an adult.

// //Multiple conditions ternary operator
// // Alternartive to switch case/if-else ladder when we want to assign a value based on multiple conditions
// let status = "Active";
// let msg = status === "Active" ? "Your account is active." 
//         : status === "Inactive" ? "Your account is inactive." 
//         : status === "Locked" ? "Your account is locked."
//         : "Unknown status.";
// console.log(msg); // Output: Your account is active.

// //Question
// let name1 = "" ? "Has name": "No name";
// console.log(name1); // Output: No name, empty string is falsy

// //Question
// let name2 = "" || "Default";
// console.log(name2); // Output: Default, empty string is falsy, so it returns the second operand "Default". 
// // If the first operand was a non-empty string, it would return that instead.

// //Question
// let name3 = 0 || "Default";
// console.log(name3); // Output: Default, 0 is falsy

let name4 = "" ?? "Default"; //output: "", 
// nullish coalescing operator (??) only considers null and undefined as falsy, but empty string is not null or undefined, so it returns the empty string instead of "Default".
console.log("Name is: " + name4);