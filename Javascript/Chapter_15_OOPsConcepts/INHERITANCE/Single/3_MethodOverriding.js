class BaseTest{
    setup(){
        console.log("BaseTest: Test started");
    }
}

class APITest extends BaseTest{
    setup(){
        console.log("APITest: Test started");
    }
}

let newTest = new APITest();
newTest.setup(); //APITest: Test started
//In the above code, the setup() method in APITest class overrides the setup() method of BaseTest class. 
// When we call newTest.setup(), it executes the setup() method of APITest class instead of BaseTest class. 
// This is an example of method overriding in JavaScript.