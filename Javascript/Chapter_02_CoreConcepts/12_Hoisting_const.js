console.log(a); //TDZ-> Error: Cannot access 'a' before initialization, because 'const' is not hoisted like 'var'

const a = 10;
console.log(a); 

//-----------------------------------------------
const pie = 100;

if(true){
    console.log(pie); //output: 100, because 'pie' is accessible in this block due to lexical scoping.
}

//-----------------------------------------------
const score = 100;

if(true){
    console.log(score); // TDZ - ReferenceError: Cannot access 'score' before initialization, because 'const' is not hoisted like 'var'
    const score = 10;
    console.log(score);
}

//-----------------------------------------------
