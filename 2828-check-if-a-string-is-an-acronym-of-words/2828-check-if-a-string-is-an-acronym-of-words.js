/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let ans = words.map((i) => i[0]);
    if(ans.join('')===s) return true;
    return false;
};