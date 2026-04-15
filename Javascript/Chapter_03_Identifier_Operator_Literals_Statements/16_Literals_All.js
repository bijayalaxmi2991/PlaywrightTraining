let count = 10; //Integer
let negative = -10; //Negative Integer
let zero = 0; //Zero

let h =0xFF; //Hexadecimal
let color_hex = 0x00FF00; //Hexadecimal color code

let octal = 0o77; //Octal
let million = 1e6; //Scientific notation for 1 million

//Single quote
let single = 'Hello, World!';
let withDouble = 'She said "Hello!"'; //Using double quotes inside single quotes

//Double quote
let double = "Hello, World!";
let withSingle = "It's a nice day!"; //Using single quote inside double quotes

//template literal
let fname = "Bijaya";
let template = `Hello, ${fname}!`; //Using template literal with interpolation
console.log(template); //Output: Hello, Bijaya!

let math = `2+3 = ${2+3}`; 
//`` - the value inside the backticks is a string and ${} is an expression.
//${2+3} is an expression that will be evaluated and its result will be included in the string
console.log(math); //Output: 2+3 = 5

/*
// - used in url
\\ - used in path
*/

let path = "C:\\Users\\Bijaya\\Documents"; //Using double backslashes to escape the backslash character
console.log(path); //Output: C:\Users\Bijaya\Documents

let address = "https://www.example.com"; //URL as a string literal
console.log(address); //Output: https://www.example.com

//String literal edge cases
let empty = ""; //Empty - falsey
let space = " "; //String - truthy
let zero1 = "0"; //String - truthy

//boolean
let isLoggedIn = true;
let hasPermission = false;



