/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let i = 0;
    let start = 1;
    let sw = 1;
    while(i < time){
        if(start >= n){
            sw=-1
        }
        if(start == 1){
            sw=1
        }
        start+=sw;
        i ++;
    }
    return start
};