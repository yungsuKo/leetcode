/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    var obj = {};
    for(let c of s){
        if(obj[c] == undefined){
            obj[c] = 1;
        }else{
            obj[c]++;
        }
        
        if(obj[c] == 2) return c
    }
};