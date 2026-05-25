function greetTester(name, callback){
    console.log("Hello " + name);
    callback(); 
}

greetTester("Alice", function(){
    console.log("Welcome to the testing world!");
});

console.log("------------------------------");

//callback with parameters
function runTest(testName, callback){
    let status = "PASS";
    callback(testName, status);
}

runTest("Login Test", function(name, result ){
    console.log(name + " -> " + result);    
});

//Sync callback example
let bugs = ["UI glitch", "API error", "Performance issue"];

bugs.forEach(function(bug, index){
    console.log("Bug_"+index+"->"+bug);
});

console.log("Total bugs:"+bugs.length);