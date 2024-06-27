/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1){
        return 1
    }else if(n == 2){
        return 2
    }else if(n == 3){
        return 3
    }else {
        let a = 2;
        let b = 3;
        let i = 3;
        while(i<n){
            let c = b;
            b = a + c;
            a = c;
            i++;
        }
        return b;
    }
};