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
var sumNumbers = function(root) {
    function treePathsSumUtil(root, sum){
        if(root === null) return 0;
        sum = (sum*10 + root.val);
        if(root.left === null && root.right === null){
            return sum;
        }
        return treePathsSumUtil(root.left, sum) + treePathsSumUtil(root.right, sum)
    }
    
    return treePathsSumUtil(root, 0);
};