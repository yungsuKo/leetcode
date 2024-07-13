/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 1;
    while (i**2 <= x){
        i ++;
    }
    return i-1
};