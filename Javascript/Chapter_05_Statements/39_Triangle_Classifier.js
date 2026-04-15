// Triangle Classifier:
// Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let a = 3, b=4, c=5;

if(a===b && b===c && c===a) console.log("It's an Equilateral triangle");
else if(a===c) console.log("It's an Isosceles triangle");
else if(a!=b && b!=c && c!=a) console.log("It's a Scalene triangle");