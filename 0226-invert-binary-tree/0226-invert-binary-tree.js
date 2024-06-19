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
var invertTree = function(root) {
    if(!root) return root;
    
    if(root.left && root.right){
        let leftVal = root.left.val;
        let rightVal = root.right.val;
        root.left.val = rightVal;
        root.right.val = leftVal;
        let leftleft = root.right.right;
        let leftright = root.right.left;
        root.right.right = root.left.right;
        root.right.left = root.left.left;
        root.left.right = leftleft;
        root.left.left = leftright;
        invertTree(root.left)
        invertTree(root.right)
    }else if(root.left){
        root.right = root.left;
        root.left = null;
        invertTree(root.right)
    }else if(root.right){
        root.left = root.right;
        root.right = null;
        invertTree(root.left)
    }
    
    return root;
    
};