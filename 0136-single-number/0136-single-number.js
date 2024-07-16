/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    for(let num of nums){
        if(!obj[num]) {
            obj[num] = 1;
        }else{
            obj[num] ++;
        }
    }
    return Object.keys(obj).find((key) => obj[key] === 1);
};