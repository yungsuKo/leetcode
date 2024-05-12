/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let row = grid.length-2, column = grid.length-2;
    
    let result = new Array();
    for(let i = 0; i<row; i++){
        result.push([])
        for(let j = 0; j<column; j++){
            result[i].push(Math.max(grid[i][j], grid[i][j+1], grid[i][j+2], grid[i+1][j], grid[i+1][j+1], grid[i+1][j+2],grid[i+2][j],grid[i+2][j+1],grid[i+2][j+2]))
        }
    }
    return result
};