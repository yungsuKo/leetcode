/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(let i = 0; i<nums.length; i++){
        let temp = nums;
        const left = temp.slice(0, i).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const right = temp.slice(i+1, nums.length).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        if(left == right) return i
    }
    return -1
};