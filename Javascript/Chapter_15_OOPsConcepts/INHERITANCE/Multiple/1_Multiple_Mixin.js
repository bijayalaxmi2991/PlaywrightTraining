// class C extends A,B{ } //Syntax Error: A class can only extend one class in JavaScript.
// JavaScript does not support multiple inheritance directly, but we can achieve similar functionality using mixins or composition. 

// Mixins allow us to add properties and methods from multiple sources to a single class. 
// Here's an example of how we can implement multiple inheritance using mixins in JavaScript:


let loggerMixin = function (Base) {
    return class extends Base {
        log(message) {
            console.log("[LOG] " + message);
        }
    }
}

let screenshotMixin = function (Base) {
    return class extends Base {
        takeScreenshot() {
            console.log("[SCREENSHOT] Taking screenshot");
        }
    }
}

//BaseClass
class TestCase{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log("Running test case: " + this.name);
    }
}

class SmartTest extends screenshotMixin(loggerMixin(TestCase)) {
    constructor(name){
        super(name);
    }
}


let t = new SmartTest("Login Test");
t.run(); //Running test case: Login Test
t.log("This is a log message"); //[LOG] This is a log message
t.takeScreenshot(); //[SCREENSHOT] Taking screenshot

