/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    function getAllSubset(arr){
        const subsets = [[]];
        for(let ar of arr){
            const last = subsets.length - 1;
            for(let i = 0; i<=last; i++){
                subsets.push([...subsets[i], ar])
            }
        }
        return subsets
    }
    
    let ans = 0;
    for(let subset of getAllSubset(nums)){
        // subsets은 배열이다.
        if(subset.length!==0){
            ans += subset.reduce((accumulator, currentValue) => accumulator ^ currentValue)
        }
    }
    return ans
};