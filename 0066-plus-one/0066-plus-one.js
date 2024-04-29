/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let digistS = digits.reverse();
    let i = 1;
    let j = 0;
    while(i == 1 && j < digits.length){
        const is10 = digistS[j] + 1
        digistS[j] = (is10)%10;    
        if(is10 < 10){
            i = 0;
        }else if(j == digistS.length - 1 && is10 == 10){
            console.log("is10:", is10)
            digistS.push(1);
            i = 0;
        }
        j++;
    }
    return digistS.reverse()
};