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
var balanceBST = function(root) {
    const toArray = (n) => {
        if (!n) return [];
        return [...toArray(n.left), n.val, ...toArray(n.right)];
    }
    let arr = toArray(root);
    
    
    var sortedArrayToBST = function(nums) {
        return traverse(nums,0,nums.length-1); // recursively parse through array
    };

    function traverse(nums,start,end){
        if(start>end){                        // if start>end means left tree or right subtree is not possible so return null
            return null;
        }
        let mid = Math.floor((start+end)/2);       // get the mid index
        let root = new TreeNode(nums[mid]);        // make a new node
        root.left = traverse(nums,start,mid-1);    // now recursively generate left subtree
        root.right = traverse(nums,mid+1,end);     // similarly generate right subtree
        return root;                               // return the root
    }
    return sortedArrayToBST(arr)
};