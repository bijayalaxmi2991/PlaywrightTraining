let fruits = ["Kiwi","Apple","Banana","Mango"];
fruits.sort(); //alphabetically sorted by default
console.log(fruits); //[ 'Apple', 'Banana', 'Kiwi', 'Mango' ]

let nums = [10,1,21,2];
nums.sort(); //sorted as per string
console.log(nums); //[ 1, 10, 2, 21 ] 

//For sorting as per Ascending order
nums.sort((a,b) =>a-b); 
console.log(nums); //[ 1, 2, 10, 21 ]


//For sorting as per Descending order
nums.sort((a,b) =>b-a); 
console.log(nums); //[ 21, 10, 2, 1 ]