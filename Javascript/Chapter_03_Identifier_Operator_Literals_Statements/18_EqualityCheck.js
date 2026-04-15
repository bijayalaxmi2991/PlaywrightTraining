// = : Used to assign the value
// == : Loose equality operator - compares values after type coercion
// === : Strict equality operator - compares values without type coercion

let a=5; // = : assignment operator

console.log(null == undefined); // Output: true - because both null and undefined are considered equal in loose equality comparison, as they both represent the absence of a value.
console.log(null === undefined); // Output: false

console.log(null == 0); // Output: false
console.log(null == ""); // Output: false

console.log(undefined == 0); // Output: false
console.log(undefined == ""); // Output: false  

console.log(5 == 5); // Output: true
console.log(5 === 5); // Output: true
console.log(5 == "5"); // Output: true, - Type coversion happens internally and then comparison happens
console.log(5 === "5"); // Output: false, Integer != String, no type coercion with strict equality operator

console.log(5 == 5.0); // Output: true
console.log(5 === 5.0); // Output: true, both are of type 'number'
console.log(5 === 5.01); // Output: false, 5 and 5.01 are not the same value

console.log(typeof(5)); // Output: number
console.log(typeof(5.0)); // Output: number
