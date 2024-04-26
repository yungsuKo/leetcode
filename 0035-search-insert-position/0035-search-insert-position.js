/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    nums.forEach((num) => {
        if(num < target){
            i++;
        }
    })
    return i
};