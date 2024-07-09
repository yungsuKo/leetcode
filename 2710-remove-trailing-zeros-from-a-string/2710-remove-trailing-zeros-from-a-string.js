/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    
    while(num.split('')[num.length-1]=='0'){
       let arr = num.split('')
       arr.pop()
        num= arr.join('')
    }
    return num
};