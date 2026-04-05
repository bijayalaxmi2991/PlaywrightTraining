//Step1- Defination of a function
function getUserStatus(){
    console.log(status);
    var status = "Active";
    console.log(status);
}

//Step2- Calling the function
getUserStatus();

//Note: var is function scoped. so the variable 'status' is hoisted to the top of the function, but its assignment happens at the line where it is defined. Hence, the first console.log(status) will output 'undefined', and the second console.log(status) will output 'Active'.