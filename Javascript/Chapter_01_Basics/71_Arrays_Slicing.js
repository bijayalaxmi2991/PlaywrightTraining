//Slicing and combibing arrays

let arr = [1,2,3,4,5];
//slice(start, end) - returns a new array containing the elements from start index to end index (exclusive)
console.log(arr.slice(1,4)); // Output: [2,3,4] - returns elements from index 1 to 3 i.e from (start to (end-1))
console.log(arr.slice(2)); // Output: [3,4,5] - returns elements from index 2 to the end of the array
console.log(arr.slice(-2)); // Output: [4,5] - returns the last 2 elements of the array
console.log(arr.slice(-3,-1)); // Output: [3,4] - returns elements from index -3 to -2 (from the end of the array)
console.log(arr.slice(0)); // Output: [1,2,3,4,5] - returns a copy of the entire array
console.log(arr.slice()); // Output: [1,2,3,4,5] - also returns a copy of the entire array
console.log(arr.slice(-5)); // Output: [1,2,3,4,5] - returns the entire array as there are only 5 elements

//Concatination of arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Output: [1,2,3,4,5,6] - combines arr1 and arr2 into a new array    

let c = arr1.concat(arr2,[7,8]);
console.log(c); // Output: [1,2,3,4,5,6,7,8] - combines arr1, arr2 and [7,8] into a new array)

//spread (modern way) -concatenation (...)
let combinedArr2 = [...arr1, ...arr2];
console.log(combinedArr2); // Output: [1,2,3,4,5,6] - combines arr1 and arr2 into a new array using spread operator


//join
let s = ["pass","fail","skip"].join(",");
console.log(s); // Output: "pass,fail,skip" - joins the elements of the array into a string separated by commas

let s2 = ["pass","fail","skip"].join(" | ");
console.log(s2); // Output: "pass | fail | skip" - joins the elements of the array into a string separated by " | " 