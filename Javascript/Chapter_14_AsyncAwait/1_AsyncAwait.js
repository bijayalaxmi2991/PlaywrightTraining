//Using Promise
getToken()
.then(function (token) {
    return getUser(token);
    
}).then(function(user){
    console.log("User data: "+user);
});

//Same code using Async/Await

async function run(){
    let token = await getToken();
    let user = await getUser(token);
    console.log("User data: "+user);
};