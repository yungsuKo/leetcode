/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    const rows = land.length;
    const cols = land[0].length;
    const arr = [];
    const findGroup = (row, col) => {
        let maxRow = row;
        let maxCol = col;
        while(maxRow < rows-1){
            if(land[maxRow+1][col] == 0) break;
            maxRow ++;
        }
        while(maxCol < cols-1){
            if(land[row][maxCol+1] == 0) break;
            maxCol ++;
        }
        console.log(row, col, maxRow, maxCol)
        for(let i = row; i<=maxRow; i++){
            for(let j = col; j<=maxCol; j++){
                land[i][j] = 0;
            }
        }
        return [maxRow, maxCol]
    }
    for(let i = 0; i<rows; i++){
        for(let j = 0; j<cols; j++){
            if(land[i][j] === 1){
                const maxPos = findGroup(i,j)
                arr.push([i,j, ...maxPos])
            }
        }
    }
    return arr;
};