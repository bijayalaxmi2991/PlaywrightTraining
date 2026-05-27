function openBrowser(){
    return new Promise(function(resolve, reject){
        resolve("Browser opened");
    });
}

function goToLogin(){
    return new Promise(function(resolve, reject){
        resolve("Login page opened");
    });      
}

function enterCredentials(){
    return new Promise(function(resolve, reject){
        resolve("Credentials entered");
    });             
}
function clickLoginButton(){
    return new Promise(function(resolve, reject){
        resolve("Login button clicked");
    });
}

//Promise Chaining
openBrowser().then(function(msg){
    console.log("Step 1: "+msg);
    return goToLogin();
}).then(function(msg){
    console.log("Step 2: "+msg);
    return enterCredentials();
}).then(function(msg){
    console.log("Step 3: "+msg);
    return clickLoginButton();
}).then(function(msg){
    console.log("Step 4: "+msg);
}).catch(function(err){
    console.log("Error: "+err);
}).finally(function(){
    console.log("Test Completed");
});

//In promise chaining, we return a new promise from the .then() method, which allows us to chain multiple asynchronous operations together.
//Each .then() method returns a new promise, which can be used to handle the next asynchronous operation in the chain.