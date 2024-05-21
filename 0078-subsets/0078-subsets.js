/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const arr = [[]];
    for(let num of nums){
        let last = arr.length - 1;
        for(let i = 0; i<=last; i++){
            arr.push([...arr[i], num]);
        }
    }
    return arr
};