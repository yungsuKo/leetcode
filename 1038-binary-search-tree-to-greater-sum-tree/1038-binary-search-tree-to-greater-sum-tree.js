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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let prev = 0;
    function getSum(node){
        if(node.right){
            getSum(node.right);
        }
        // if(prev == null){
        //     prev = node.val;
        // }
        node.val = prev + node.val;
        prev = node.val
        if(node.left){
            getSum(node.left);
        }
    }
    getSum(root)
    return root
};