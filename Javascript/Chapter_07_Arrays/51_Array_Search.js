let result = ["pass", "fail","pass","error","fail"]

//indexOf - returns first index or -1 id not found.
console.log(result.indexOf("pass")); //0
console.log(result.indexOf("error")); //3
console.log(result.indexOf("skip")); //-1

//lastIndexof - searched from the end
console.log(result.lastIndexOf("fail")); //4

//includes - Returns boolean value
console.log(result.includes("error")); //true
console.log(result.includes("skip")); //false

//find - gives 1st matching element which satisfies the condition
let nums = [10,20,30,40,50]
console.log(nums.find(x => x>20)); //30

//findIndex - returns index of 1st matching element satisfying the condition
console.log(nums.findIndex(x => x>20)); //2

//findLast
console.log(nums.findLast(x => x>20)); //50
console.log(nums.findLastIndex(x => x>20)); //4

