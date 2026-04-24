//null - intentionally assigned null value
let result = null; 
console.log(result); // Output: null

//undefined - variable declared but not assigned a value
let score;
console.log(score); // Output: undefined

// == : Loose equality operator - compares values after type coercion
// === : Strict equality operator - compares values without type coercion
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false