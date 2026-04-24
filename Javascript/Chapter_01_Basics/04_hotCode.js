console.log("Hello") //not a hot code

function add(a,b){
 return a+b;
}

let result;

//Hot code - this function will be called multiple times, so it will be optimized by V8 engine
for(let i=0;i<1000;i++){
    result = add(i,i+1);
}
console.log("After 1000 calls: "+result);