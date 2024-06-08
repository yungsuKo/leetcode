/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
    for(let i = 1; i<grid[0].length; i++){
        if(grid[0][i-1] == grid[0][i]) return false;
    }
    
    for(let i = 0; i<grid[0].length; i++){
        for(let j = 1; j<grid.length; j++){
            if(grid[j-1][i] !== grid[j][i]) return false;
        }
    }
    
    return true
};