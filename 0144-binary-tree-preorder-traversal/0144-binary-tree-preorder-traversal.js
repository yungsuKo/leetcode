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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let ans = []
    const dfs = (root,ans) => {
        if(!root) return;
        ans.push(root.val);
        dfs(root.left,ans)
        dfs(root.right,ans)
    }
    dfs(root, ans)
    return ans
};