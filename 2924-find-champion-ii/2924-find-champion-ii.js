/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
    const candidate = new Array(n+1).fill(0);
    for(let edge of edges){
        candidate[edge[1]] ++;
    }
    let ans = []
    for(let i=0; i<n; i++){
        if(candidate[i] == 0) ans.push(i)
    }
    return (ans.length===1)?ans[0]:-1
};