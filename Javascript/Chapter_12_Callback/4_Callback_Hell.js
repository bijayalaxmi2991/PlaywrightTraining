//Real time QA example: Login scenario

function openBrowser(callback){
    console.log("Opening browser");
    setTimeout(function(){
        console.log("Step 1: Browser opened");
        callback();
    },500);
}

function goToLoginPage(callback){
    setTimeout(function(){
        console.log("Step 2: Login page opened");
        callback();
    },500);
}
function enterCredentials(callback){
    setTimeout(function(){
        console.log("Step 3: Credentials entered");
        callback();
    },500);
}
function clickLoginButton(callback){
    setTimeout(function(){
        console.log("Step 4: Login button clicked");
        callback();
    },500);
}

//Callback Hell
openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLoginButton(function(){
                console.log("Test completed");
            });
        });
    });
});