/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let max = Math.max(...nums);
    while(max >= 0){
        let cnt = 0;
        nums.map((num) => {
            if(num>=max) cnt++;
        })
        if(max == cnt) return max
        max -= 1
    }
    return -1
};