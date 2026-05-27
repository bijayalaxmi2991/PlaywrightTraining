let apiCall = new Promise(function(resolve, reject){
    reject("500 error");
});


//then part doesnt get executed because the promise is rejected.
apiCall.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log("API call failed with error: "+error); 
});
//.catch() is used to handle the rejected value of the promise.
//It takes a callback function that receives the rejected value as an argument.    
apiCall