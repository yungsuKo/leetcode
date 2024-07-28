/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCnt = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] === 0){
            nums.splice(i, 1);
            i--;
            zeroCnt++;
        }
    }
    for(let i = 0; i<zeroCnt; i++){
        nums.push(0)
    }
};