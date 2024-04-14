/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let i = 0;
    let same = true;
    if(strs.length === 1){
        return strs[0]
    }
    const strsLen = strs.map((str) => {
        return str.length
    });
    const minS = Math.min(...strsLen)
    const maxS = Math.max(...strsLen)

    if(minS === 0){
        return ""
    }
    
    while(i<maxS){
        for(let j=1; j<strs.length; j++){
            if(strs[j-1].substr(0, i+1)!== strs[j].substr(0, i+1)){
                same=false;
                break;
            }
        }
        if(same === false){
            break;
        }else{
            i++;    
        }
    }
    return strs[0].substr(0, i);
};