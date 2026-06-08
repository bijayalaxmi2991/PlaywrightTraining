class TestRunner{
    static totalTests = 0;
    static passedTests = 0;

    constructor(testName, isPassed){
        this.testName = testName;
        TestRunner.totalTests++;
        if(isPassed){
            TestRunner.passedTests++;
        }
    }

    //Non-static method
    display(){
        return this.testName;
    }

    //Static method
    static summary(){
        return TestRunner.passedTests + " out of " + TestRunner.totalTests + " tests passed.";
    }
}

//Test flow
let test1 = new TestRunner("Login", true);
let test2 = new TestRunner("Signup", false);
let test3 = new TestRunner("Cart", true);
let test4 = new TestRunner("Checkout", false);
let test5 = new TestRunner("Logout", true);

console.log(test1.display()); //Login
console.log(test2.display()); //Signup
console.log(TestRunner.summary()); //3 out of 5 tests passed.