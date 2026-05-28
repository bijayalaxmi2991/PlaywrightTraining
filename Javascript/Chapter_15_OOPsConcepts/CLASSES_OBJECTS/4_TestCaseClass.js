class TestCase{
    constructor( name,status, priority){
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    //method - function inside a class is called method
    //it doesn't require the 'function' keyword to declare a method inside a class
    display(){
        console.log(this.name + " -> " + this.status + " -> " + this.priority);
    }
}

//Object

//loginTest - is reference variable
//new TestCase() - creates an object of TestCase class and calls the constructor to initialize the attributes
let loginTest = new TestCase("Login Test", "PASS", "P0");
loginTest.display();

let signupTest = new TestCase("Signup Test", "FAIL", "P1");
signupTest.display();