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

var minDiffInBST = function(root) {
    let prev= -Infinity
    let ans = Infinity
    function getDiff(node){
        if(node.left) getDiff(node.left);
        ans = Math.min(ans,  Math.abs(node.val-prev));
        console.log(ans)
        prev = node.val;
        if(node.right) getDiff(node.right);    
    }
    getDiff(root)
    return ans
};