let apiCall = new Promise(function(resolve, reject){
    resolve({status:200, body:"user data"});
});

//.then() is used to handle the resolved value of the promise. 
//It takes a callback function that receives the resolved value as an argument.    
apiCall.then(function(response){
    console.log(response);
    console.log("Response Status: "+response.status);
    console.log("Response body: "+response.body);
});