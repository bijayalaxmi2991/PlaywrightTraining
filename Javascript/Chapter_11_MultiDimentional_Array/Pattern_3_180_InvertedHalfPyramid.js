/**
 * Inverted Half Pyramid Pattern
 *         *
 *       * *
 *     * * *
 *   * * * *
 * * * * * *
 */

 let n = 5;
    for(let i=1; i<=n; i++ ){
        let row= "";
        //loop for space
        for(let j=1;j<=n-i;j++){
            row += " ";
        }
        //loop for star
        for(let j=1; j<=i; j++){
            row += "*";
        }
        console.log(row);
    }

        