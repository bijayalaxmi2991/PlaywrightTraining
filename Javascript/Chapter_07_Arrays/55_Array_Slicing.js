let arr = [1,2,3,4,5,6,7];

//slice(start,end) - returnsnew array, does NOT mutate
console.log(arr.slice(1,3)); //[2,3] //start index till end-1 index


//If we dont mention the end index, it will return from start index to end of the array
console.log(arr.slice(-2)); //[6,7]
console.log(arr.slice(2)); //[3,4,5,6,7]

console.log(arr.slice(2,4)); //[ 3, 4 ]
console.log(arr.slice(0)); //[1,2,3,4,5,6,7]
console.log(arr.slice(-7)); //[1,2,3,4,5,6,7]

console.log(arr.slice(8)); //[]

