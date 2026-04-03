let original = [1,2,3];

//Examples of Shallow copy - original array is not affected by changes in the copied array, but if the original array contains objects, then the changes in the copied array will affect the original array as well (because they reference the same objects in memory)
let copy1 = [...original]; // Using spread operator to create a shallow copy of the array
console.log(copy1); // Output: [1,2,3] - copy1 is a new array with the same elements as original

let copy2 = original.slice(); // Using slice() to create a shallow copy of the array
console.log(copy2); // Output: [1,2,3] - copy2 is also a new array with the same elements as original
let copy3 = Array.from(original); // Using Array.from() to create a shallow copy of the array
console.log(copy3); // Output: [1,2,3] - copy3 is also a new array with the same elements as original

let copy4 = original.concat(); // Using concat() to create a shallow copy of the array
console.log(copy4); // Output: [1,2,3] - copy4 is also a new array with the same elements as original

copy1.push(10);
console.log(original); // Output: [1,2,3] - original array remains unchanged
console.log(copy1); // Output: [1,2,3,10] - copy1 has the new element added


//Deep copy - original array gets changed if the copied array is changed, because they reference the same objects in memory
original.push(99);
console.log(original); // Output: [1,2,3,99] - original array is changed
