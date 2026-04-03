//Identifies, Literals, operators
//var, let, const

//name is an identifier
//'John' is a string literal or any data
// = is an assignment operator
// var is a keyword
var name = "John";

//Identifiers rules
/*
1. Must start with a letter, underscore (_), or dollar sign ($)
2. Can contain letters, digits, underscores, or dollar signs
3. Cannot start with a digit
4. Cannot be a reserved keyword (like var, let, const, function, etc.)
5. Cannot contain spaces
6. cannot contain special characters (except _ and $)
7. Case-sensitive (name and Name are different identifiers)
*/

//Exceptions to the rules:

var π = 3.14; // π is a valid identifier, even though it is a special character, because it is a Unicode character
console.log(π); // Output: 3.14

var नमस्ते = 'Hello'; // नमस्ते is a valid identifier, even though it contains non-Latin characters, because it is a Unicode character
console.log(नमस्ते); // Output: Hello
