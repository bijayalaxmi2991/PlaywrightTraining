let age = 20;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

//-----------------------------------------------

if (age > 25) {
    console.log("You are can travel alone and drink alcohol");
} else if (age >= 18 && age <= 25) {
    console.log("You can travel alone but cannot drink alcohol");
} else {
    console.log("You cannot travel alone and cannot drink alcohol");
}


//=================================================
//Grade calculator

let score = 85;

if (score >= 90) {
    console.log("Grade A - Excellent");
} else if (score >= 80 && score < 90) {
    console.log("Grade B - Good");
} else if (score >= 70 && score < 80) {
    console.log("Grade C - Average ");
} else if (score >= 60 && score < 70) {
    console.log("Grade D - Poor");
} else {
    console.log("Grade F - Fail");
}


//=================================================
//Real life example - Role based access control

let isLoggedIn = true;
let userRole = "editor";

//app.vwo.com - viewer, editor, admin
//viwewer - can only view the content
//editor - can view and edit the content
//admin - can view, edit and delete the content

if(isLoggedIn){
    if(userRole === "admin"){
        console.log("You can view, edit and delete the content");
    }else if(userRole === "editor"){
        console.log("You can view and edit the content");
    }else if(userRole === "viewer"){
        console.log("You can only view the content");
    }   else{
        console.log("Invalid user role");
    }   

}else{
    console.log("You are not logged in");
}

//=================================================
//Truthy
if("hello") console.log("String is truthy"); // Output: String is truthy
if({}) console.log("Object is truthy"); // Output: Object is truthy
if([]) console.log("Array is truthy"); // Output: Array is truthy
if(40) console.log("Number is truthy"); // Output: Number is truthy


//Falsy
if("") console.log("Won't print"); //No output, because empty string is falsy
if(null) console.log("Won't print"); // No output, because null is falsy
if(undefined) console.log("Won't print"); // No output, because undefined is falsy
if(NaN) console.log("Won't print"); // No output, because NaN is falsy
if(0) console.log("Won't print"); // No output, because 0 is falsy