let fastServer = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Fast 100ms")},100
    );
});

let slowServer = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Slow 500ms")},500
    );
});

Promise.race([fastServer, slowServer]).then(function(result){
    console.log("First response: "+result);
});

//Promise.race() takes an array of promises and returns a new promise that resolves or rejects as soon as one of the promises in the array resolves or rejects. 
// In this example, since fastServer resolves first, the output will be "First response: Fast 100ms".  