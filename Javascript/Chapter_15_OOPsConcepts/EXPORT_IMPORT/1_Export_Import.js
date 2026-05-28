import { BASE_URL,formatToUpperCase } from "./testUtil.js";
import { formatTestName } from "./util.js";
import { BASE_URL as STAGING_BASE_URL } from "./util.js"; 
//BASE_URL Cannot be imported twice as it is already imported from testUtil.js and it will throw error as duplicate identifier
//In this case we can use aliasing to resolve the conflict by using 'as' keyword to give a different name to the imported variable.
//import { BASE_URL as STAGING_BASE_URL } from "./util.js";


console.log(BASE_URL);
let result = formatToUpperCase("hello world");
console.log(result);

let testCaseName = formatTestName("login test");
console.log(testCaseName); 
console