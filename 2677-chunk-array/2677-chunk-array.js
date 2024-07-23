/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];
    while(arr.length !== 0){
        let newArr = []
        while(newArr.length < size){
            newArr.push(arr.shift())
            if(arr.length == 0) break
        }
        result.push(newArr)
    }
    return result
};
