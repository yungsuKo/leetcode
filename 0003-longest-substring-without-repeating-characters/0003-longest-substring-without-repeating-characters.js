/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    if(s.length === 0) return 0;
    for(let i=0; i<s.length; i++){
        let k = i+1;
        while(!s.slice(i,k).includes(s[k]) && k<s.length){
            k++;
        }
        console.log(s.slice(i,k), i , k)
        if(k-i > result) result = k-i;
    }
    return result;
};