/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    const minus = arr.length/20;
    let sum = 0;
    arr.sort((a, b) => a-b);
    for(let i = minus; i<arr.length - minus; i++){
        sum+=arr[i]
    }
    return sum/(arr.length - 2*minus)
};