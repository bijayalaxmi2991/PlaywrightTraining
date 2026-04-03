let fruit = ["banana", "apple", "grape", "orange"];
fruit.sort();
console.log(fruit); // Output: ["apple", "banana", "grape", "orange"]
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers); // Output: [1, 10, 100, 25, 40, 5] //Sorts as per strings, not numbers

// To sort numbers correctly, we need to provide a compare function
numbers.sort((a, b) => a - b); // Sort in ascending order
console.log(numbers); // Output: [1, 5, 10, 25, 40, 100]

numbers.sort((a, b) => b - a); // Sort in descending order
console.log(numbers); // Output: [100, 40, 25, 10, 5, 1]

