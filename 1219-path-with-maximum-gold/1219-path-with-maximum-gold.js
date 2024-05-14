/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    // dfs
    
    let count = 0;
    for(let i =0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] !== 0) count = Math.max(count, getMax(grid, i, j));
        }
    }
    return count;
    
    function getMax(grid, row=0, col=0, max=0){
        if(row >= grid.length || col >= grid[0].length || col < 0 || row < 0) {
            return max;
        }else if(grid[row][col] !== 0){
            max += grid[row][col];
            let temp = grid[row][col]
            grid[row][col] = 0;
            
            let left = getMax(grid, row, col-1, max);
            let right = getMax(grid, row, col+1, max);
            let top = getMax(grid, row-1, col, max);
            let bottom = getMax(grid, row+1, col, max);
            
            grid[row][col] = temp;
            return Math.max(left, right, top, bottom);
        }else{
            return max;
        }
    }
    

};