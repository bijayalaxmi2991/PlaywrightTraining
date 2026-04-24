let a = [1,2,3];
let b = [4,5,6];

let c= a.concat(b);
console.log(c); // [ 1, 2, 3, 4, 5, 6 ]

console.log(b.concat(a)); //[ 4, 5, 6, 1, 2, 3 ]

//New method for concatination.
let d = [...a,...b];
console.log(d); //[ 1, 2, 3, 4, 5, 6 ]

//Join
console.log(["pass","fail","skip"].join(",")); //Joins to return a string separated by ,
//o/p - pass,fail,skip