
// Single callback function

function placeOrder(item, callback){
    console.log("Placing order for " + item);
    callback();
}

function print(){
    console.log("Done with the order");
}

placeOrder("Pizza", print);

console.log("------------------------------");
//Multiple callback function
function order(item, callback1, callback2, callback3){
    console.log("Placing order for " + item);
    callback1();
    callback2();
    callback3();
}

function print1(){
    console.log("Preparing food");
}

function print2(){
    console.log("Food served");
}

function print3(){
    console.log("Order completed");
}

order("Burger", print1, print2, print3);