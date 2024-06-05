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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    const val = root.val;
    function isSame(node){
        if(!node) return true;
        if(node.val == val){
            return isSame(node.left) && isSame(node.right)
        }else{
            return false;
        }
    }
    return isSame(root)
};