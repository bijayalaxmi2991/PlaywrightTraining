//Arrays can have data with different types. 
// They can even have other arrays as elements. 

//Empty Array
let fruit = [];

//Array with elements
let fruits_fresh = ["apple", "banana", "cherry"]; //index: 0,1,2


//Can have duplicate items
let testResult = ["fail", "pass", "pass", "pass", "skip"];

//Hydroginious array - can have different types of data
let mixedArray = [10, "hello", true, null, undefined, [1, 2, 3], { name: "John", age: 30 }];


let arr = [10,20,30,40,50];
console.log(arr.length); // Output: 5
console.log(arr[0]); // Output: 10      
console.log(arr[4]); // Output: 50
//In case of Java below throws ArrayIndexOutOfBoundsException 
//In JavaScript it returns undefined
console.log(arr[5]); // Output: undefined