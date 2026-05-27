//Question 1

async function sayhello(){
    return "Hello World";
}

sayhello().then(function(msg){
    console.log(msg);
});

//O/p - Hello World

//Question 2
async function getStatus(){
    let status = await Promise.resolve("200");
    console.log("Status is:", status);
}

getStatus();

//o/p - Status is: 200

//Question 3
async function testFlow(){
    let step1 = await Promise.resolve("Open Browser");
    console.log(step1);
    let step2 = await Promise.resolve("Clicked login");
    console.log(step2);
    let step3 = await Promise.resolve("Verified dashboard");
    console.log(step3);

}
testFlow();
//Sequential execution
//o/p - Open Browser
//     Clicked login
//     Verified dashboard

//Question 4
async function riskyTest(){
    try{
        let data = await Promise.reject("Element not found");
        console.log(data);
    }catch(error){
        console.log("Error: "+error);
    }finally{
        console.log("Test Completed");
    }
}

riskyTest();
//o/p - Error: Element not found
    // Test Completed

//Question 5
async function apiTest(){
    try{
        let response = await Promise.resolve({status = 201, body:"Created" });
        console.log("API Status:", response.status);
        console.log("API Body:", response.body);
    }catch(error){
        console.log("API call failed with error: "+error);
    }finally{
        console.log("API Test Completed");
    }
}

apiTest();
//O/P 
//API Status: 201
//API Body: Created
//API Test Completed

 //Question 6
 console.log("A");

async function test(){
    console.log("B");
    await Promise.resolve();
    console.log("C");
}
test();
console.log("D");

//o/p
//A
//B
//D
//C

//Question 7
async function runAll(){
    let [a,b,c] = await Promise.all([
        Promise.resolve("Login : OK"),
        Promise.resolve("Cart : OK"),
        Promise.resolve("Checkout : OK")
    ]);

    console.log(a);
    console.log(b);
    console.log(c);
}

runAll();

// Login : OK
// Cart : OK
// Checkout : OK

//Question 8
async function healthCheck(){
    let result = await Promise.allSettled([
        Promise.resolve("Auth: UP"),
        Promise.reject("DB : DOWN"),
        Promise.resolve("Cache : UP")
    ]);

    result.forEach(function(r){
        let status = r.status === "fulfilled" ? "OK" : "FAILED";
        let msg = r.value || r.reason;
        console.log(msg + " -> " + status);
    });
}
healthCheck();

// Auth: UP -> OK
// DB : DOWN -> FAILED
// Cache : UP -> OK

//Question 9
async function checkEndPoints(){
    let endpoints = ["/login", "/users", "/orders"];
    for(let i=0;i<endpoints.length;i++){
        let result = await Promise.resolve(endpoints[i] + " called");
        console.log(result);
    }
    console.log("All endpoints tested");
}

checkEndPoints();
//o/p
// /login called
// /users called
// /orders called
// All endpoints tested


//Question 10
//Async IIFE (Immediately Invoked Function Expression)
(async function(){
    let result = await Promise.resolve("Test Completed");
    console.log(result);
})();
console.log("Outside IIFE");
//o/p
// Outside IIFE
// Test Completed

//Question 11
async function add(a,b){
    return a+b;
}

async function main(){
    let result = await add(5,10);
    console.log("Sum is: "+result);

    let result2 = await add(result, 15);
    console.log("Total is: "+result2);
}
main();

//O/p
//Sum is: 15
//Total is: 30  