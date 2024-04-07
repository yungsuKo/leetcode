/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let minleft = 0;
    let maxleft = 0;
    
    for(let c of s){
        if(c==='('){
            minleft ++;
            maxleft ++;
        }else if(c===')'){
            minleft --;
            maxleft --;
        }else{
            minleft --;
            maxleft ++;
        }
        if(maxleft < 0) return false;
        if(minleft < 0) minleft = 0;
    }
    return minleft === 0
};