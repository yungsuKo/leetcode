/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let result=0
    for(let i = 1; i<s.length; i++){
        result += Math.abs(s.charCodeAt(i)-s.charCodeAt(i-1));
    }
    return result
};