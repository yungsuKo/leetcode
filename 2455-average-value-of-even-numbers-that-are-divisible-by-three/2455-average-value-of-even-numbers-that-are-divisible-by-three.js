/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let cnt = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i]%2==0 && nums[i]%3==0){
            sum += nums[i];
            cnt ++;
        }
    }
    if(cnt == 0){
        return 0
    }
    return Math.floor(sum/cnt)
};