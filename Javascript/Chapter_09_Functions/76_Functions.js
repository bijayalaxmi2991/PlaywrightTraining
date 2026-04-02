//without function - we need to repeat the code for each operation


let score1 = 85;
let result1 = score1 >= 80 ? "PASS" : "FAIL";
console.log("Score: "+score1+" - "+result1); // Output: Score: 85 - PASS

let score2 = 75;
let result2 = score2 >= 80 ? "PASS" : "FAIL";
console.log("Score: "+score2+" - "+result2); // Output: Score: 75 - FAIL

//with function - we can reuse the code for each operation
//function as 2 parts: 
// 1) function definition - defines the function and its parameters, and 
// 2) function call - invokes the function with specific arguments to execute the code inside the function

//part 1 - function definition
function checkScore(score) {
    return score >= 80 ? "PASS" : "FAIL";
}

//part 2 - function call
checkScore(85);
checkScore(75);
