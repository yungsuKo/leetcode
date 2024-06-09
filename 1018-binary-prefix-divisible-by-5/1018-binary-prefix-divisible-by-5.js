/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let stv = 0;
    return nums.map((num) => {
        stv = stv*2 + num;
        stv %= 5
        return stv == 0;
    })
};