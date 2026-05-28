//Flaky Tests - Tests which sometimes pass and sometimes fail. 
// This is because of the environment, network, or any other reason. 
// We can use the retry pattern to retry the test if it fails.

//Retry Pattern with Async/Await
let attempt = 0;

function flakyAPI(){
    attempt++;
    if(attempt<3){
        return Promise.reject("API Attempt "+attempt+": failed");
    }
    return Promise.resolve("API Attempt "+attempt+": success");
}

async function retryTest(maxRetries){
    for(let i=0; i<=maxRetries; i++){
        try{
            let result = await flakyAPI();
            console.log(result);
            return result; //or break; to exit the loop if successful
            break;
        }catch(error){
            console.log(error);
        }
    }
}

retryTest(5);