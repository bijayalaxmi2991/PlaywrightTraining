/*
Grade Calculator:
Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
*/
let grade;
let score = 85;
if(typeof score !== 'number') {
    console.log("Invalid input. Please enter a valid number.");
    return;
}
if (score < 0 || score > 100) {
    console.log("Invalid score. Please enter a score between 0 and 100.");
    return;
}

if (score > 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else  {
    grade = "F";
} 
// console.log("The grade for score " + score + " is: " + grade);
console.log(`The grade for score ${score} is: ${grade}`);