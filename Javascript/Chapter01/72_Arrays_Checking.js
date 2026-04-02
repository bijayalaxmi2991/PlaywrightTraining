    //check if something is an array
let arr = [1,2,3];
console.log(Array.isArray(arr)); // Output: true - checks if arr is an array

console.log(retryFailedAPICall.isArray("a")); // Output: false - checks if "a" is an array

//every & some
let result = [80,90,85].every(score => score >= 80);
console.log(result); // Output: true - checks if every score in the array is greater than or equal to 80

let result2 = [80,90,85].some(score => score >= 95);
console.log(result2); // Output: false - checks if some score in the array is greater than or equal to 95