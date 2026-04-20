//Array Constructor
let arr = new Array(); //Empty array
let arr2 = new Array(5); //Array of length 5 with empty slots
let arr3 = new Array(1, 2, 3, 4, 5); //Array with elements
console.log(arr); // Output: []
console.log(arr2); // Output: [ <5 empty items> ]
console.log(arr3); // Output: [1, 2, 3, 4, 5]

//Array.of method - creates an array from a list of arguments
let arr4 = Array.of(10, 20, 30);
console.log(arr4); // Output: [10, 20, 30]

//Array.from method - creates an array from an iterable or array-like object
let str = "Hello";
let chars = Array.from(str);
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']
