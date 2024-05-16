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
var evaluateTree = function(root) {
    function operator(node){
        if(node.val === 0 || node.val === 1){
            return node.val === 1;
        }else if(node.val === 2){
            return (operator(node.left) || operator(node.right))
        }else if(node.val === 3){
            return (operator(node.left) && operator(node.right))
        }else {
            return false;
        }
    }
    
    return operator(root)
};