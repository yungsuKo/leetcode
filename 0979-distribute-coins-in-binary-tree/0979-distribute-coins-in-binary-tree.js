/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    let result = 0;
    
    function dfs(node){
        if(!node) return 0;
        let leftSum = dfs(node.left);
        let rightSum = dfs(node.right);
        result += (Math.abs(leftSum) + Math.abs(rightSum))
        return node.val - 1 + leftSum + rightSum
    }
    dfs(root)
    return result
};