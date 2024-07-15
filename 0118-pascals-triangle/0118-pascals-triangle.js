/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = [[1]];
    while(arr.length !== numRows){
        if(arr.length == 1){
            arr.push([1,1]);
        }else{
            arr.push([]);
            arr[arr.length - 1].push(1);
            for(let i = 0; i < arr[arr.length - 2].length-1; i++){
                arr[arr.length - 1].push(arr[arr.length - 2][i] + arr[arr.length - 2][i+1])
            }
            arr[arr.length - 1].push(1);
        }
    }
    return arr
};