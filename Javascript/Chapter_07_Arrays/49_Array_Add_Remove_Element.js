let arr = [1, 2, 3, 4, 5];

//Adding elements to the end of the array
arr.push(8);
console.log(arr); // Output: [1, 2, 3, 4, 5, 8]

//Remove the last element from the array
let removedElement = arr.pop();
// console.log(removedElement); // Output: 8
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.push(6,7);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7]

//Add element to the beginning of the array
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3, 4, 5, 6, 7]

//Remove the first element from the array
let removedFirstElement = arr.shift();
// console.log(removedFirstElement); // Output: 0
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7]

//splice - add/remove elements at any position in the array
arr.splice(2, 1); //removes 1 item at 2 index
console.log(arr); //Output - [ 1, 2, 4, 5, 6, 7 ]

arr.splice(2, 0, 99); //Remove 0 item from 2 index, add 99 at 2 index
console.log(arr);

arr.splice(1,2,10,20); //Remove 2 items at 1 index, adds 10, 20 at 1 index
console.log(arr);

arr.splice(1,2,100); //Remove 2 items at 1 index, adds 100 at 1 index
console.log(arr);