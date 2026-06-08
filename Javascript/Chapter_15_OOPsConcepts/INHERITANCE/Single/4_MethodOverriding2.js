class BaseTest{
    setup(){
        console.log("BaseTest: Open Browser");
    }
    
    teardown(){
        console.log("BaseTest: Close Browser");
    }
}

class UITest extends BaseTest{
    setup(){
        super.setup(); // Call the setup method of BaseTest class
        //super() - calls the constructor of the parent class
        //super.methodName() - calls the method of the parent class
        console.log("UITest: Maximise the Browser");
    }

    teardown(){
        console.log("UITest: Take screenshot"); 
        super.teardown(); // Call the teardown method of BaseTest class
    }
}

let test = new UITest();
test.setup();
console.log("------------------------------");
test.teardown();
//Output:
