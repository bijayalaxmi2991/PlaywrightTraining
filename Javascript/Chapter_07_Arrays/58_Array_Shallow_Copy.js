//Create copy array - Shallow copy - original array is not affected
let original = [1,2,3];

let copy1 = [...original];
let copy2 = original.slice();
let copy3 = Array.from(original);
let copy4 = original.concat();
// console.log(copy1);
// console.log(copy2);
// console.log(copy3);
// console.log(copy4);
//O/p fo all - [ 1, 2, 3 ]

copy1.push(99);
console.log(original); //Original array is not changed
console.log(copy1); //only chnages the copy array
//[ 1, 2, 3 ]
//[ 1, 2, 3, 99 ]