//Question 1

// You receive an array of API response codes. Write code to:
// Check if ALL responses are successful (200–299)
// Find the FIRST non-success code
// Return all unique error codes

let responses = [200, 201, 404, 500, 404, 200, 503];
// Check if ALL responses are successful (200–299)
let r = responses.every(s => s>=200 && s<=299);
console.log(r); //false

//FIRST non-success code
let nonSuccess = responses.find(s => s>=400);
console.log(nonSuccess); //404

// Return all unique error codes
let allErrorCodes = [...new Set(responses.filter(s => s>=100))];
console.log(allErrorCodes);

//Question2 
let responseTimes = [320, 85, 1200, 450, 99];
// let sorted = responseTimes.sort(); //This will sort it as per string
let sorted = responseTimes.sort((a,b)=> a-b); //Sort as per number
console.log("Fastest:", sorted[0]);

//Question3
/*
Deep vs Shallow Copy (Tricky)
What is the output and why? How would you fix it?

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status); 
*/
let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status); //pass

