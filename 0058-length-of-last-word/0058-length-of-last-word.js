/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const sArr = s.split(' ');
    console.log(sArr);
    const sArrLen = sArr.map((str) => {return str.length});
    for(let i = sArrLen.length-1; i>=0; i--){
        if(sArrLen[i]!==0) return sArrLen[i]
    }
    
};