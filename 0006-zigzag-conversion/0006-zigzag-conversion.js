/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s;
    const tempArr= Array.from({ length: numRows }, () => []);
    let k = 0;
    let nowPos = 0;
    let i = 1;
    while(k < s.length){
        tempArr[nowPos].push(s[k]);

        // change direction at endpoint
        if(nowPos==numRows-1){
            i = -1;
        }else if(nowPos==0){
            i = 1;
        }
        nowPos += i
        k++;
    }
    return tempArr.map((single) => {
        return single.join('');
    }).join('');
};