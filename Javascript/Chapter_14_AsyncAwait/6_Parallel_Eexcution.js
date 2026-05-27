//When Step 2 depends on Step1 you must run it sequentially.

function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name,"200 OK");
        },1000);
    });
}

async function sequentialTest(){
    console.log("Starting of the test");
    let start = Date.now();

   let [r1, r2, r3] = await Promise.all([ 
        apiCall("Login"),
        apiCall("Dashboard"),
        apiCall("Report")
    ]);

    //this await will wait for all the Promises to complete and return an array of results in the same order as the Promises were passed in. 
    // The execution will be parallel, meaning that all the Promises will start executing at the same time, and the total time taken will be the time taken by the longest Promise to complete.
    //This format will not be used in Playwright
    
    
    
    console.log(r1);
    console.log(r2);
    console.log(r3);

    console.log("Total time: "+(Date.now()-start)/1000+" seconds");
}


sequentialTest();
