
//Question 1
let testScore = 85;
switch (true) {
    case (testScore >= 95):
        console.log("Grade: A");
        break;
    case (testScore >= 85):
        console.log("Grade: A-");
        break;  
    case (testScore >= 70):
        console.log("Grade: B");
        break;
    case (testScore >= 60):
        console.log("Grade: C");
        break;
    default:
        console.log("Grade: F");

}

//Question 2
let x = "5";
switch (x) {
    case 5:
        console.log("Value is number 5");
        break;
    case "5":
        console.log("Value is string '5'");
        break;
    default:
        console.log("Value is neither number 5 nor string '5'");
}
//output: Value is string '5' 
//switch uses strict comparison (===) and the type of x is string, so it matches the case "5".

//Question 3
let status = 0;
switch (status) {
    case false:
        console.log("Status is false");
        break;
    case 0:
        console.log("Status is zero");
        break;
    default:
        console.log("Status is unknown");
}
//Output: Status is zero
//0 === 0 is true, 0 === false is false, so it matches the case 0.