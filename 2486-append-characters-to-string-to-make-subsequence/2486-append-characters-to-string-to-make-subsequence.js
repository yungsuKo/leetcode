/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let i = 0;
    for(let j = 0; j<s.length; j++){
        if(i >= t.length) {break;}
        else if(s[j] == t[i]) {i++;}
    }
    return t.length - i;
};