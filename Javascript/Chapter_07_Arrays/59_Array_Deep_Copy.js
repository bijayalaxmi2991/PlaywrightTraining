//Deep Copy - Any change in the copy gets reflected to the orriginal array
let arr = [1,2,3];
let copy = arr; //Deep copy - reference is copied
copy.push(4);
console.log(arr); //[ 1, 2, 3, 4 ]
console.log(copy); //[ 1, 2, 3, 4 ]

