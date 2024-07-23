/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    var obj = {};
    for(let num of nums){
        if(!obj[num]){
            obj[num] = 1;
        }else{
            obj[num] ++;
        }
    }
    var objArr = Object.entries(obj)
    objArr.sort((a,b)=>b[0]-a[0]).sort((a,b)=>a[1]-b[1]);
    let result = [];
    for(let obj of objArr){
        result = [...result, ...Array(obj[1]).fill(obj[0])];
    }
    return result;
};