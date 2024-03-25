/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let minus;
    for(let i = 0; i<nums.length; i++){
        minus=target - nums[i];
        for(let j =i+1; j<nums.length; j++){
            if(minus === nums[j]){
                return [i, j]
            }
        }
    }
};