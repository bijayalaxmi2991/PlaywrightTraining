/**
 *  Inverted Pyramid Pattern
 *        *********
 *         *******
 *          *****
 *           ***
 *            *
 *
 */

let n=5;
for(let i=n;i>=1;i--){
    let row = "";
    //loop for spaces
    for(let j=1;j<=n-i;j++){
        row += " ";
    }
    //loop for stars
    for(let j=1;j<=2*i-1;j++){
        row += "*";
    }
    console.log(row);
}