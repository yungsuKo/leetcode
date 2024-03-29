/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = String(x).split('');
    console.log(arr)
    const raa = arr.reverse().join('');
    
    if(x===Number(raa)) return true;
    return false;
};