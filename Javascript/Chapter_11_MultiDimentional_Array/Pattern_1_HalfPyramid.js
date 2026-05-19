/**
 * Print below patterb
 *  *
 *  **
 *  ***
 *  ****
 *  *****
 */

//Method 1
let n1 = 5;
for(let i=1; i<=n1; i++ ){
    for(let j=1; j<=i; j++ ){
        process.stdout.write("*");
    }
    console.log();
}

//Method 2
let n2 = 5;
for(let i=1; i<=n2; i++ ){
    let row= "";
    for(let j=1; j<=i; j++ ){
        row += "*";
    }
    console.log(row);
}