// After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
testResultCounter(testResults)

function testResultCounter(result) {
    let pass = 0, fail = 0, skip = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "pass") pass += 1;
        else if (result[i] == "fail") fail += 1;
        else if (result[i] == "skip") skip += 1;
    }
    let total = pass + fail + skip;
    let passPer = pass / total * 100;

    console.log("Total Tests : " + total + " Passed: " + pass + " Failed: " + fail + " Skipped: " + skip + " Pass Rate: " + passPer + "%");
    console.log("VERDICT:")
    if (fail === 0) console.log("Ready for release");
    else if (fail <= 2) console.log("Minor failures. Review before release");
    else console.log("block release");
}
