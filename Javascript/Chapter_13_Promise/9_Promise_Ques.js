// //Question 1:

// let p = new Promise(function(resolve, reject){
//     resolve(42);
// })
// p.then(function(value){
//     console.log("Answer is: "+value);
// });


//  //Question 2:
//  let p =  new Promise(function(resolve, reject){
//     reject("Something went wrong");
//  });

// p.catch(function(error){
//     console.log("Caught error: "+error);
// });


// //Question 3:
// let p = Promise.resolve(5);
// p.then(function(val){
//     return val*10;
// }).then(function(val){
//     console.log("Final value: "+val);
// });


// //Question 4:
// Promise.resolve(1)
// .then(function(val){
//     console.log(val);
//     return val+1;
// }).then(function(val){
//     console.log(val);
//     return val+1;
// }).then(function(val){
//     console.log(val);
// });

// //Question 5:
// Promise.reject("Test Failed")
// .then(function(data){
//     console.log("Data: "+data);
// }).catch(function(error){
//     console.log("Error: "+error);
// }).finally(function(){
//     console.log("Test Completed");
// });

// //Question 6:
// Promise.resolve("start").then(function(val){
//     console.log(val);
//     throw new Error("Broke at step 2");
// }).then(function(val){
//     console.log("This will not run");
// }).catch(function(error){
//     console.log("Caught error: "+error.message);
// });

// // In this code, we start with a resolved promise that logs "start". 
// // Then we throw an error in the first .then() callback, which causes the promise to be rejected. 
// // The second .then() callback is skipped, and the .catch() callback is executed, logging the error message.

// //Question 7:
// Promise.resolve("Quick win").then(function(msg){
//     console.log(msg);
// });

// Promise.reject("Quick loss").catch(function(err){
//     console.log(err);
// });

// //Question 8:
// let l1 = Promise.resolve("Login: PASS");
// let l2 = Promise.resolve("Search: PASS");
// let l3 = Promise.resolve("Logout: PASS");

// Promise.all([l1, l2, l3]).then(function(results){
//     console.log("All tests passed: ", results);
// });

// //Question 9:
// let l1 = Promise.resolve("Login: PASS");
// let l2 = Promise.reject("Search: FAIL");
// let l3 = Promise.resolve("Logout: PASS");

// Promise.all([l1, l2, l3])
//     .then(function(results){console.log("Passed: ", results);})
//     .catch(function(error){console.log("Failed: ", error);});

//Question 10:
Promise.allSettled([
    Promise.resolve("API 200 OK"),
    Promise.reject("API 500 Internal Server Error"),
    Promise.resolve("API 201 Created")
]).then(function(results){
   results.forEach(function(r){
    let val = r.status === "fulfilled" ? r.value : r.reason;
    console.log(r.status + "->" +val);
    });
});