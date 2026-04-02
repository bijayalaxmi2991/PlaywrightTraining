// let [first, second, third] = [1, 2, 3];
// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(third); // Output: 3

let [first,second,...third] = [1,2,3,4,5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: [3,4,5] - rest operator collects the remaining elements into an array