//Error handling - try/catch/finally 

//In Promise .catch() is used to handle errors. 
// In async/await, we can use try/catch blocks to handle errors.

async function testAPI() {
    try {
        let result = await Promise.reject("503 error");
        console.log(result);
    } catch (error) {
        console.log("API call failed with error: " + error);
    } finally {
        console.log("Test Completed");
    }
}

testAPI();
