let retry = 0;
do{
    console.log("Execute code!");
    console.log("Retrying... " + retry);
    retry++;
}while(retry < 5);

//Do while executes the code block at least once, and then checks the condition. 

//While loop
let a = 0;

while(a>0){
    console.log(a);
    a++;
} // Output: nothing, 
//The condition is false from the beginning, so the loop body will not be executed at all.

//Do while loop
let a1 = 0;
do{
    console.log(a1);
    a1++;
}while(a1>10);
//Output: 0,
//The loop body is executed once, and then the condition is checked. Since the condition is false, the loop will not execute again, but it has already executed once, so it prints 0.
