console.log("Test 1: Started");

setTimeout(function(){
    console.log("Test 2: API response received");
},2000); //after 2 seconds this callback function will be executed

console.log("Test 3: Moving to next test");