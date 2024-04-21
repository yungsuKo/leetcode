/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    const arr = [];
    for(let i = 0; i<nums.length - 2; i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                arr.push([nums[i], nums[left], nums[right]]);
                // 중복 제거
                while(nums[left] === nums[left+1]) left ++;
                while(nums[right] === nums[right-1]) right ++;
                // 포인터 이동
                left ++;
                right --;
            }else if(sum < 0){
                left ++;
            }else {
                right --;
            }
        }
    }

    return arr
};