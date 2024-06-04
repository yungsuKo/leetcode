/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const sSet = new Set(s.split(''));
    const sObj = new Object();
    for (const item of sSet.keys()) {
        sObj[item] = 0;
        while(s.includes(item)){
            sObj[item]++;
            s=s.replace(item, "")
        }
    }
    let result = 0;
    let exist = 0;
    
    for (const item of Object.values(sObj)){
        if(item % 2==1){
            result += (item - 1);
            exist = 1
        }else{
            result += item
        }
    }
    return result + exist
};