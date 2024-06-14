/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    nums.sort((a, b) => a-b);
    let tracker = 0;
    let increment = 0;
    
    for(let num of nums){
        tracker = Math.max(num, tracker);
        increment += (tracker - num);
        
        tracker ++;
    }
    
    return increment;
};