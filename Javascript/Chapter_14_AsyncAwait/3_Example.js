async function getTestResult(){
    return "pass";
}

async function runTest() {
    let step1 = await Promise.resolve("Step 1: Login");
    console.log(step1);
    let step2 = await Promise.resolve("Step 2: Dashboard");
    console.log(step2);

}

runTest();