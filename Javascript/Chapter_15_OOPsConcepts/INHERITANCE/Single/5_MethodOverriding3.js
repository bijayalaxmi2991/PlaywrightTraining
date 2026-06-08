class TestCase{
    execute(){
        console.log("Running generic test case");
    }
}

class UITest extends TestCase{
    execute(){
        console.log("Running unit test - checking one function"); 
    }
}

class APITest extends TestCase{
    execute(){
        console.log("Running API test - checking HTTP calls"); 
    }
}

class E2ETest extends TestCase{
    execute(){
        console.log("Running end-to-end test - checking multiple functions"); 
    }
}

let test = [new UnitTest(), new APITest(), new E2ETest()]; //Multiple objects created and stored in array
test.forEach(function (test){
    test.execute();
});