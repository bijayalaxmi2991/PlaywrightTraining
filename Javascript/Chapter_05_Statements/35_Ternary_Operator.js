// Single condition ternary operator

let age = 20;
let isAdult = age >= 18 ? "Yes, you are an adult." : "No, you are not an adult.";
console.log(isAdult); // Output: Yes, you are an adult.

//Multiple conditions ternary operator
// Alternartive to switch case/if-else ladder when we want to assign a value based on multiple conditions
let status = "Active";
let msg = status === "Active" ? "Your account is active." 
        : status === "Inactive" ? "Your account is inactive." 
        : status === "Locked" ? "Your account is locked."
        : "Unknown status.";
console.log(msg); // Output: Your account is active.

