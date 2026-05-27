let testRun = new Promise(function(resolve, reject){
    reject("Test run failed due to timeout.");
});

testRun.then(function(result){
    console.log("Test run successful: "+result);
}).catch(function(error){
    console.log("Error: "+error);
}).finally(function(){
    console.log("Runs anyway");
});


//.finally() is used to execute code regardless of whether the promise is resolved or rejected.
//It takes a callback function that does not receive any arguments. 