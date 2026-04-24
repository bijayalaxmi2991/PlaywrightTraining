let result = ["pass","fail","pass"];
let counts = result.reduce((acc,r) => {
    acc[r] = (acc[r] || 0) + 1;
    return acc;
},{});

console.log(counts.pass);
//Output - 2

