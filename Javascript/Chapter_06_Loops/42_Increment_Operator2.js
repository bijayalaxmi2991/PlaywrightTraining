let a = 10;
let b = ++a; //unary plus operator, converts a to a number, but since a is already a number, it remains 10 
console.log(a); // Output: 11, a is incremented to 11
console.log(b); // Output: 11, b is assigned the value of a after incrementing

//Expressions and results table
//line no | a | b |
//1       | 10|   |
//2       | 11| 11|, a is incremented to 11 and b is assigned the value of a after incrementing
//3       | 11| 11|, a remains 11 and b remains 11


let c = 10;
let d = c++; //post increment, d is assigned the value of c before incrementing
console.log(c); // Output: 11, c is incremented to 11
console.log(d); // Output: 10, d is assigned the value of c before incrementing
//Expressions and results table
//line no | c | d |
//13      | 10|   |
//14      | 11| 10|, c is incremented to 11 but d is assigned the value of c before incrementing, which is 10
//15      | 11| 10|, c remains 11 and d remains 10

//Question 1
a = 10;
console.log(a++ + a);
//Output: 21

//Question 2
a = 10;
console.log(a++ + ++a);
//output: 22

//Question 3
a = 10;
console.log(++a + ++a);
//output: 23