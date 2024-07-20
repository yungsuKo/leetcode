/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    let numRow = rowSum.length;
    let numCol = colSum.length;
    let result = Array.from({ length: numRow }, () => Array(numCol).fill(0));
    
    let i = 0, j = 0;
    while(i < numRow && j < numCol){
        let val = Math.min(rowSum[i], colSum[j]);
        result[i][j] = val;
        rowSum[i] -= val;
        colSum[j] -= val;
        
        if(rowSum[i] === 0){
            i++;
        }
        if(colSum[j] === 0){
            j++
        }
    }
    return result;
};