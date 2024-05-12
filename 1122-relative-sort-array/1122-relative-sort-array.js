/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let semiResult = [];
    for(let i = 0; i<arr1.length; i++){
        if(arr2.indexOf(arr1[i]) !== -1){
            semiResult.push([arr1[i], arr2.indexOf(arr1[i])])
        }else{
            semiResult.push([arr1[i], arr2.length])
        }
    }
    
    semiResult.sort((a,b) => a[0] - b[0]).sort((a,b) => a[1] - b[1])
    return semiResult.map((result) => result[0]);
};