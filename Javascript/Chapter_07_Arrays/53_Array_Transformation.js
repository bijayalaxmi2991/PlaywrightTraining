let score = [32,90,87,45,74,98];

//map - transforms the comaplete array and returns new array
let grades = score.map(s => s>=70 ? "Pass":"Fail");
console.log(grades); // [ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass', 'Pass' ]

//filter - filters array as per the condition
let passMarks = score.filter(s => s>=70);
console.log(passMarks); //[ 90, 87, 74, 98 ]

//reduce - accumulates to a single value
let total = score.reduce((sum,s) => sum+s,0); 
console.log(total);

//flat - flattens nested arrays
let nested = [[1,2],[3,4],[5,6]];
console.log(nested.flat());
