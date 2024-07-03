/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    const str = [...String(n).split(''), ...String(n*2).split(''), ...String(n*3).split('')]
    const history = []
    for(let s of str){
        if(history.includes(s) || s == '0'){
            return false;
        }else {
            history.push(s)
        }
    }
    return true
};