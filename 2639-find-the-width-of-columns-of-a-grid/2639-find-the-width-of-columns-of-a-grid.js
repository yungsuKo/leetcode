/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    let result = [];
    for(let i = 0; i<grid[0].length; i ++){
        let max = 0;
        for(let j=0; j<grid.length; j++){
            max= Math.max(max, String(grid[j][i]).length)
        }
        result.push(max)
    }
    return result
};