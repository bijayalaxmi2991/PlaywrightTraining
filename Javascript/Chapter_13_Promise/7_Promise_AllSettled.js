Promise.allSettled([
    Promise.resolve("Test 1 resolved"),
    Promise.reject("Test 2 rejected"),
    Promise.resolve("Test 3 resolved")
]).then(function(results){
    results.forEach(function(r,i) {
        console.log("Test "+(i+1) +":"+r.status,"-",r.value||r.reason);
    });
});

//this is like a test report - you want results of all tests, even if some fail. 
// Promise.allSettled() waits for all promises to settle (either resolved or rejected) 
// and provides an array of results with their status and value/reason. 