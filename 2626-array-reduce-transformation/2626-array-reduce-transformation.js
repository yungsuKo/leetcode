/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    while(nums.length > 0){
        init = fn(init, nums.shift());
    }
    return init;
};