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

var minDepth = function(root) {
    let result = 1;
    function isLast(node){
        if(!node) return Infinity;
        if(!node.left && !node.right) return 1;
        return 1+Math.min(isLast(node.left), isLast(node.right));
    }
    if(!root) return 0;
    return isLast(root)
};