let x=10;
//In case duplicate cases, no error will be thrown, but only the first case will be executed. The second case will be ignored.
switch(x){
    case 10:
        console.log("Value in first case is 10");
        break;
    case 10:
        console.log("Value in second case is 10");
        break;
}