let browsers = ["chrome","opera","firefox","edge","safari"]
console.log(browsers);

browsers.pop();
console.log(browsers);

console.log("-----------------//---------------");

let removed = browsers.shift();
console.log(browsers);
console.log(removed);

console.log("-----------------//-----------------");

for(let i=0; i<browsers.length;i++){
    if(browsers[i] === "opera")    
        console.log("Opera is removed from selenium");

    else
        console.log(browsers[i]);
}