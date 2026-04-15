//Alternative of an if-else statement when we want to assign a value based on a condition
// Syntax: condition ? value_if_true : value_if_false

let age=20;

let isPermitted = (age>=18)? "Yes": "No";
console.log(isPermitted); // Output: "Yes", because age is greater than or equal to 18, so the condition evaluates to true and "Yes" is assigned to isPermitted

age=16;
isPermitted = (age>=18)? "Yes": "No";
console.log(isPermitted); // Output: "No", because age is less than 18, so the condition evaluates to false and "No" is assigned to isPermitted