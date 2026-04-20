//Accession and Modifying Arrays

let result = ["pass", "fail", "pass", "skip"];
//Accessing elements
console.log(result[0]); // Output: "pass"
console.log(result[1]); // Output: "fail"
console.log(result[2]); // Output: "pass"

//Get the last element
//at method is used to access any index of an array
console.log(result.at(-1)); // Output: "skip"
console.log(result.at(2)); // Output: "pass"
console.log(result.at(3)); // Output: "skip"
console.log(result.at(-5)); // Output: "undefined"

//Modifying elements
result[1] = "blocked"; // Modifying the second element
console.log(result); // Output: ["pass", "blocked", "pass", "skip"]

//Length
console.log(result.length); // Output: 4

//Accessing out of bounds index
console.log(result[10]); // Output: undefined