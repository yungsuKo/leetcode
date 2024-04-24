/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const T = [0, 1, 1];
    let i = 0;
    
    while(i < n){
        T.push(T.reduce((a,b) => a+b));
        T.shift();
        i++;
    }
    return T[0]
};