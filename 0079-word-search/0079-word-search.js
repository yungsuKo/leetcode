/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    const m = board.length;
    const n = board[0].length;
    
//     for (let i = 0; i < m; ++i) {
//         for (let j = 0; j < n; ++j) {
//             if (backtrack(i, j, 0)) {
//                 return true;
//             }
//         }
//     }
//     return false;
    
    var findAroundChar = function(i,j,k){
        if (k === word.length) {
            return true;
        }
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word.charAt(k)) {
            return false;
        }
        
        const temp = board[i][j];
        board[i][j] = '\0'; 
        
        const result = findAroundChar(i + 1, j, k + 1) || 
                       findAroundChar(i - 1, j, k + 1) || 
                       findAroundChar(i, j + 1, k + 1) || 
                       findAroundChar(i, j - 1, k + 1);
        
        board[i][j] = temp; 
        return result;
    }
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(findAroundChar(i,j,0)) return true;
        }
    }
    return false
    
};