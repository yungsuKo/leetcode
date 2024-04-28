/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 다이나믹 
    if(nums.length === 1) return [nums.slice()];
    let res = [];
    
    for(let i = 0; i<nums.length; i++){
        let n = nums.shift();
        let perms = permute(nums);
        
        for(let p of perms){
            p.push(n);
        }
        res.push(...perms);
        nums.push(n);
    }
    return res
};