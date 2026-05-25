let testResult = ["pass","fail","pass","pass","skip"];

testResult.forEach(function(result,index){
    console.log("Test_"+index+"->"+result);
});