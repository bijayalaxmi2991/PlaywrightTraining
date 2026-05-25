function step1(callback) {
    console.log("Open Browser");
    callback();
}

function step2(callback) {
    console.log("Go to Login Page");
    callback();
}

function step3(callback) {
    console.log("Enter Credentials");
    callback();
}

function step4(callback) {
    console.log("Click Login Button");
    callback();
}

step1(function() {
    step2(function() {
        step3(function() {
            step4(function() {
                console.log("Test Completed");
            });
        });
    });
});