for(let i =0; i<=5;i++){
    console.log(i);
} //Output: 0,1,2,3,4,5

for(let i =0; i<=5;++i){
    console.log(i);
} //Output: 0,1,2,3,4,5

//No difference between i++ and ++i in for loop, both will give the same output. 
//The increment happens after the current value of i is used in the loop body, so it does not affect the output of the loop.

//Infinite loop
// for(let i=0; ; i++){
// console.log(i);
// }