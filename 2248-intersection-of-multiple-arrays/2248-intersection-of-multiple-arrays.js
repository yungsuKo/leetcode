/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let len = nums.length;
    let obj = {};
    for(let num of nums){
        for(let n of num){
            if(!obj[n]){
                obj[n] = 1;
            }else{
                obj[n]++;
            }
        }
    }
    const num = Object.keys(obj).filter((key) => obj[key] === len);
    return num
};