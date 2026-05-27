let order = new Promise(function(resolve,reject){
    let foodReady = true;
    if(foodReady) {
        resolve("Food is ready!");
    } else {
        reject("Food is not ready!");
    }
})

console.log(order);
// A promise is an Object. It wraps a value that will be available later.
