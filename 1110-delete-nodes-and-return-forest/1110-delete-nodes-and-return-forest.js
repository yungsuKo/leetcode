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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let set = new Set(to_delete);
    const ans = [];
    let DFS = (root, should_add) => {
        if(root === null) return null;
        if(set.has(root.val)){
            DFS(root.left, true);
            DFS(root.right, true);
            return null;
        }
        if(should_add){
            ans.push(root);
        }
        
        let left = DFS(root.left, false);
        let right = DFS(root.right, false);
        root.left = left;
        root.right = right;
        return root
    }
    
    DFS(root, true)
    return ans
};