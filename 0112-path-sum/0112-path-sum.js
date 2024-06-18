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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    function check(node, sum, targetSum) {
        if(node == null) return false;
        sum += node.val;
        if(node.left == null && node.right == null && sum == targetSum) return true;
        return check(node.left, sum, targetSum) || check(node.right, sum, targetSum)      
    }
    if(root == null) return false;
    return check(root, 0, targetSum);
    
};