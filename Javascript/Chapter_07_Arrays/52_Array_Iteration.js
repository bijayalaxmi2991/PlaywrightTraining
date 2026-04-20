// //Iteration - Traversing the array

let tests = ["login","checkout","search"]

//Method 1 - for loop
for(let i=0;i<tests.length;i++){
    console.log(tests[i]);
}

//Method 2 - for...of
for(let test of tests){
    console.log(test); // gives value
}

//Method 3 - for...in
for (let i in tests){
    console.log(i); // gives index
}


//Method 4 - forEach - index and value
test.forEach((test, index) => {
    console.log(`${index} : ${test}`);
});

//Method 5 - entries() - index and value
for(let [i,test] of tests.entries()){
    console.log(i, test); //i- index, test- value
}
