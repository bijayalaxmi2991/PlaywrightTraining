//Checking of its an array

let result= Array.isArray([1,2,3]);
console.log(result); //true

let result1= Array.isArray("a");
console.log(result1); //false

//every
let r = [80,90,75].every(s => s>=70);
console.log(r); //true

//some - at least 1 should pass
let r1 = [80,75,60].some(s => s<70);
console.log(r1); //true

let r2 = [80,75,90].some(s => s<70);
console.log(r2); //false