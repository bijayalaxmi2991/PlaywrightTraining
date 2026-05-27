let checkAuth = Promise.resolve("Auth ok");
let checkDB = Promise.resolve("DB ok");
let checkCache = Promise.resolve("Cache ok");

Promise.all([checkAuth, checkDB, checkCache]).then(function(results){
    console.log("All checks passed: ", results);
});
//Promise.all() is used to handle multiple promises concurrently.
//It takes an array of promises as an argument and returns a new promise that resolves when all the input promises resolve, or rejects if any of the input promises reject.
//The resolved value is an array of the resolved values from the input promises, in the same order.

Promise.all([
    Promise.resolve("Auth ok"),
    Promise.resolve("DB ok"),
    Promise.resolve("Cache ok")
]).then(function(results){
    console.log("All checks passed: ", results);
}).catch(function(error){
    console.log("Error: ", error);      
});

//If any of the input promises reject, the .catch() block will be executed with the rejected value of the first promise that rejects.
