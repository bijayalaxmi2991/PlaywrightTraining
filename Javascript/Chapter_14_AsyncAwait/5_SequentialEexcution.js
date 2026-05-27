//When Step 2 depends on Step1 you must run it sequentially.

function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name,"200 OK");
        },1000);
    });
}

//In the below case, each await statement waits for the respective promise to complete before moving to next.
async function sequentialTest(){
    console.log("Starting of the test");
    let start = Date.now();

    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Total time: "+(Date.now()-start)/1000+" seconds");
}


sequentialTest();
