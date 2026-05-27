function calculate(a, b, operation){
    return operation(a, b);
}

function sum(x, y){
    return x+y;
}

let result = calculate(5, 10, sum); //15
console.log("Sum is: "+result);

console.log("------------------------------");

//Anonymous function as callback
let sum = calculate(5, 10, function(x, y){
    return x+y;
});

console.log("Sum is: "+sum);

console.log("------------------------------");

